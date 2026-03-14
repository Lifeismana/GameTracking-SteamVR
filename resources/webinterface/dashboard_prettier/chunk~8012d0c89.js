var CLSTAMP = "10510795";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [305],
  {
    7663: (e) => {
      e.exports = {
        FrameControlsContainer:
          "legacydashboardframecontrols_FrameControlsContainer_27B1e",
        Section: "legacydashboardframecontrols_Section_1KwWq",
      };
    },
    108: (e) => {
      e.exports = {
        recordingCircle: "svg_library_recordingCircle_2ovZQ",
        AnimationFadeOutIn: "svg_library_AnimationFadeOutIn_1lEwX",
        Spinner: "svg_library_Spinner_1q9tu",
        SpinnerSpokeFade: "svg_library_SpinnerSpokeFade_2E-wW",
      };
    },
    6013: (e, t, r) => {
      "use strict";
      r.d(t, {
        Gm: () => d,
        J$: () => p,
        M2: () => _,
        MS: () => c,
        T4: () => g,
        UQ: () => l,
        Yz: () => b,
        _z: () => u,
        gL: () => h,
        my: () => m,
        yn: () => v,
      });
      var n = r(5339),
        i = r.n(n),
        a = r(3924),
        s = r(8770),
        o = r(8723);
      class l extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.tabs || a.Sg(l.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  tabs: { n: 1, c, r: !0, q: !0 },
                  selected_tab_id: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  vr_steam_tab_id: {
                    n: 4,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  deprecated_vr_settings_tab_id: {
                    n: 3,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = a.w0(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(l.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_PathProperty_DashboardTabs";
        }
        static getVRPathPropertyKey() {
          return "/vrgamepadui/steamvr/dashboard_tabs";
        }
        getVRPathPropertyKey() {
          return l.getVRPathPropertyKey();
        }
      }
      class c extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.tab_id || a.Sg(c.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  tab_id: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  associated_frame_id: {
                    n: 7,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  display_name: {
                    n: 3,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  icon: { n: 6, c: s.aV },
                  visible_in_dashboard_bar: {
                    n: 2,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  visible_in_dashboard_bar_hamburger_menu: {
                    n: 5,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  deprecated_icon: { n: 4, c: s.Tp },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = a.w0(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(c.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_PathProperty_DashboardTabs_Tab";
        }
      }
      class u extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.defined_actions || a.Sg(u.M()),
            n.Message.initialize(this, e, 0, -1, [2, 3, 4, 5, 1], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  defined_actions: { n: 2, c: o.z, r: !0, q: !0 },
                  bar_buttons: { n: 3, c: d, r: !0, q: !0 },
                  bar_menu_items: { n: 4, c: m, r: !0, q: !0 },
                  playspace_actions: {
                    n: 5,
                    r: !0,
                    q: !0,
                    br: a.qM.readUint32,
                    pbr: a.qM.readPackedUint32,
                    bw: a.gp.writeRepeatedUint32,
                  },
                  deprecated_actions: { n: 1, c: b, r: !0, q: !0 },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = a.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_PathProperty_DashboardBarActions";
        }
        static getVRPathPropertyKey() {
          return "/vrgamepadui/steamvr/dashboard_actions";
        }
        getVRPathPropertyKey() {
          return u.getVRPathPropertyKey();
        }
      }
      class d extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.type || a.Sg(d.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  type: { n: 1, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  action_id: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  is_main_hamburger_menu: {
                    n: 3,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = a.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_PathProperty_DashboardBarActions_BarButton";
        }
      }
      class m extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.type || a.Sg(m.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  type: { n: 1, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  parent_menu_action_id: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  action_id: {
                    n: 3,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = a.w0(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(m.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_PathProperty_DashboardBarActions_BarMenuItem";
        }
      }
      class p extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.windows || a.Sg(p.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: { windows: { n: 1, c: h, r: !0, q: !0 } },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = a.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_PathProperty_DesktopWindows";
        }
        static getVRPathPropertyKey() {
          return "/vrgamepadui/steamvr/desktop_windows";
        }
        getVRPathPropertyKey() {
          return p.getVRPathPropertyKey();
        }
      }
      class h extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.window_id || a.Sg(h.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  window_id: {
                    n: 1,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  hwnd: { n: 2, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  title: { n: 3, br: a.qM.readString, bw: a.gp.writeString },
                  tab_id: { n: 4, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = a.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_PathProperty_DesktopWindows_Window";
        }
      }
      class g extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.can_sleep || a.Sg(g.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  can_sleep: { n: 1, br: a.qM.readBool, bw: a.gp.writeBool },
                  can_shutdown: { n: 2, br: a.qM.readBool, bw: a.gp.writeBool },
                  can_restart_system: {
                    n: 3,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  can_exitvr: { n: 4, br: a.qM.readBool, bw: a.gp.writeBool },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = a.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_PathProperty_PowerOptions";
        }
        static getVRPathPropertyKey() {
          return "/vrgamepadui/steamvr/power_options";
        }
        getVRPathPropertyKey() {
          return g.getVRPathPropertyKey();
        }
      }
      class v extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.display_brightness_user_value || a.Sg(v.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  display_brightness_user_value: {
                    n: 1,
                    br: a.qM.readFloat,
                    bw: a.gp.writeFloat,
                  },
                  display_brightness_min: {
                    n: 2,
                    br: a.qM.readFloat,
                    bw: a.gp.writeFloat,
                  },
                  display_brightness_max: {
                    n: 3,
                    br: a.qM.readFloat,
                    bw: a.gp.writeFloat,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = a.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_PathProperty_HMDSettings";
        }
        static getVRPathPropertyKey() {
          return "/vrgamepadui/steamvr/hmd_settings";
        }
        getVRPathPropertyKey() {
          return v.getVRPathPropertyKey();
        }
      }
      class _ extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.version || a.Sg(_.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  version: { n: 1, br: a.qM.readString, bw: a.gp.writeString },
                  webpack_build_timestamp: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  hmd_tracking_info: {
                    n: 3,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = a.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_PathProperty_VRVersionInfo";
        }
        static getVRPathPropertyKey() {
          return "/vrgamepadui/steamvr/version_info";
        }
        getVRPathPropertyKey() {
          return _.getVRPathPropertyKey();
        }
      }
      class b extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.action_id || a.Sg(b.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  action_id: {
                    n: 1,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  enabled: { n: 3, br: a.qM.readBool, bw: a.gp.writeBool },
                  display_name: {
                    n: 4,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  visible_in_dashboard_bar: {
                    n: 2,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  visible_in_menu: {
                    n: 10,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  is_menu: { n: 11, br: a.qM.readBool, bw: a.gp.writeBool },
                  parent_menu_action_id: {
                    n: 12,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  icon: { n: 13, c: s.aV },
                  icon_active: { n: 14, c: s.aV },
                  invocation: { n: 7, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  special_invocation: {
                    n: 9,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                  active: { n: 8, br: a.qM.readBool, bw: a.gp.writeBool },
                  deprecated_icon: { n: 5, c: s.Ym },
                  deprecated_icon_active: { n: 6, c: s.Ym },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = a.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_DEPRECATED_DashboardBarAction";
        }
      }
    },
    8723: (e, t, r) => {
      "use strict";
      r.d(t, { z: () => o });
      var n = r(5339),
        i = r.n(n),
        a = r(3924),
        s = r(8770);
      class o extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.action_id || a.Sg(o.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  action_id: {
                    n: 1,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  display_name: {
                    n: 2,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  invocation: { n: 3, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  icon: { n: 4, c: s.aV },
                  icon_active: { n: 5, c: s.aV },
                  enabled: { n: 6, br: a.qM.readBool, bw: a.gp.writeBool },
                  active: { n: 7, br: a.qM.readBool, bw: a.gp.writeBool },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = a.w0(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(o.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_Action";
        }
      }
    },
    8770: (e, t, r) => {
      "use strict";
      r.d(t, { Tp: () => l, Ym: () => c, aV: () => o, kL: () => s });
      var n = r(5339),
        i = r.n(n),
        a = r(3924);
      function s(e) {
        return "unknown EVRGamepadUIIcon ( " + e + " )";
      }
      class o extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.enum || a.Sg(o.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  enum: { n: 1, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  appid: { n: 2, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  overlay: { n: 3, br: a.qM.readString, bw: a.gp.writeString },
                  hwnd: { n: 4, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = a.w0(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(o.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_Icon";
        }
      }
      class l extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.enum || a.Sg(l.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  enum: { n: 1, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  appid: { n: 2, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  overlay: { n: 3, br: a.qM.readString, bw: a.gp.writeString },
                  hwnd: { n: 4, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = a.w0(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(l.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_DEPRECATED_DashboardTabIcon";
        }
      }
      class c extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.enum || a.Sg(c.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  enum: { n: 1, br: a.qM.readEnum, bw: a.gp.writeEnum },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = a.w0(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(c.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_DEPRECATED_DashboardActionIcon";
        }
      }
    },
    1526: (e, t, r) => {
      "use strict";
      r.d(t, { DX: () => s, Ut: () => l, iM: () => o });
      var n = r(5339),
        i = r.n(n),
        a = r(3924);
      class s extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            s.prototype.name || a.Sg(s.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            s.sm_m ||
              (s.sm_m = {
                proto: s,
                fields: {
                  name: { n: 1, br: a.qM.readString, bw: a.gp.writeString },
                  message_id: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  response_to_message_id: {
                    n: 3,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  is_error_response: {
                    n: 4,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                },
              }),
            s.sm_m
          );
        }
        static MBF() {
          return s.sm_mbf || (s.sm_mbf = a.w0(s.M())), s.sm_mbf;
        }
        toObject(e = !1) {
          return s.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(s.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(s.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new s();
          return s.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(s.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return s.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(s.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return s.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_Header";
        }
      }
      class o extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.error_code || a.Sg(o.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  error_code: { n: 1, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  error_description: {
                    n: 2,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  origin: { n: 3, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  was_transmitted: {
                    n: 4,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = a.w0(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(o.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_Error_Response";
        }
      }
      function l(e) {
        return (
          "unknown CVRGamepadUI_Message_Error_Response_ErrorCode ( " + e + " )"
        );
      }
    },
    4999: (e, t, r) => {
      "use strict";
      r.d(t, { oT: () => j, f5: () => q });
      var n = r(5339),
        i = r.n(n),
        a = r(3924),
        s = r(8723);
      class o extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.frame_id || a.Sg(o.M()),
            n.Message.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  frame_id: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  menu: { n: 2, c: u },
                  defined_actions: { n: 3, c: s.z, r: !0, q: !0 },
                  controls: { n: 4, c: l },
                  tmp_title: {
                    n: 1e3,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = a.w0(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(o.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Frame";
        }
      }
      class l extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.items_for_bottom_frame_controls || a.Sg(l.M()),
            n.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  items_for_bottom_frame_controls: { n: 1, c, r: !0, q: !0 },
                  items_for_tab_hover_menu: { n: 2, c, r: !0, q: !0 },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = a.w0(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(l.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Frame_FrameControls";
        }
      }
      class c extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.type || a.Sg(c.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  type: { n: 1, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  action_id: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = a.w0(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(c.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Frame_FrameControls_Item";
        }
      }
      n.Message;
      class u extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.items_for_left_frame_menu || a.Sg(u.M()),
            n.Message.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  items_for_left_frame_menu: { n: 1, c: d, r: !0, q: !0 },
                  items_for_tab_hover_menu: { n: 2, c: d, r: !0, q: !0 },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = a.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Frame_FrameMenu";
        }
      }
      class d extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.type || a.Sg(d.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  type: { n: 1, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  action_id: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  steam_main_menu_options: { n: 3, c: m },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = a.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Frame_FrameMenu_Item";
        }
      }
      class m extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.allow_show_as_active || a.Sg(m.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  allow_show_as_active: {
                    n: 1,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = a.w0(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(m.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Frame_FrameMenu_Item_SteamMainMenuOptions";
        }
      }
      class p extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.tab_id || a.Sg(p.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  tab_id: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = a.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_DashboardTabClicked_Request";
        }
      }
      class h extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new h();
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_DashboardTabClicked_Response";
        }
      }
      class g extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.action_id || a.Sg(g.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  action_id: {
                    n: 1,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  toggle_value: { n: 2, br: a.qM.readBool, bw: a.gp.writeBool },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = a.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_DashboardActionInvoked_Request";
        }
      }
      class v extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new v();
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_DashboardActionInvoked_Response";
        }
      }
      class _ extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.window_id || a.Sg(_.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  window_id: {
                    n: 1,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = a.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_DashboardDesktopWindowClicked_Request";
        }
      }
      class b extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new b();
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_DashboardDesktopWindowClicked_Response";
        }
      }
      class S extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.dashboard_popup_id || a.Sg(S.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  dashboard_popup_id: {
                    n: 1,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  popup_overlay_key: {
                    n: 2,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  parent_enum: { n: 15, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  parent_overlay_key: {
                    n: 3,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  parent_device_path: {
                    n: 13,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  origin_on_parent: { n: 4, c: y },
                  origin_on_popup: { n: 5, c: y },
                  offset: { n: 6, c: f },
                  rotation: { n: 7, c: R },
                  inherit_parent_pitch: {
                    n: 8,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  inherit_parent_curvature: {
                    n: 9,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  clip_rect: { n: 10, c: C },
                  interactive: { n: 11, br: a.qM.readBool, bw: a.gp.writeBool },
                  requires_laser: {
                    n: 12,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  scale: { n: 17, c: w },
                  sort_order: { n: 14, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  special_identifier: {
                    n: 16,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = a.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowDashboardPopup_Request";
        }
      }
      class y extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.x || a.Sg(y.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  x: { n: 1, br: a.qM.readFloat, bw: a.gp.writeFloat },
                  y: { n: 2, br: a.qM.readFloat, bw: a.gp.writeFloat },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = a.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowDashboardPopup_Request_NormalizedPosition";
        }
      }
      class f extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.x_pixels || a.Sg(f.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
                fields: {
                  x_pixels: { n: 1, br: a.qM.readFloat, bw: a.gp.writeFloat },
                  y_pixels: { n: 2, br: a.qM.readFloat, bw: a.gp.writeFloat },
                  z_pixels: { n: 3, br: a.qM.readFloat, bw: a.gp.writeFloat },
                  x_meters: { n: 4, br: a.qM.readFloat, bw: a.gp.writeFloat },
                  y_meters: { n: 5, br: a.qM.readFloat, bw: a.gp.writeFloat },
                  z_meters: { n: 6, br: a.qM.readFloat, bw: a.gp.writeFloat },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = a.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowDashboardPopup_Request_Position";
        }
      }
      class R extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.pitch_degrees || a.Sg(R.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  pitch_degrees: {
                    n: 1,
                    br: a.qM.readFloat,
                    bw: a.gp.writeFloat,
                  },
                  yaw_degrees: {
                    n: 2,
                    br: a.qM.readFloat,
                    bw: a.gp.writeFloat,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = a.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowDashboardPopup_Request_Rotation";
        }
      }
      class w extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.scaler_value || a.Sg(w.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  scaler_value: {
                    n: 1,
                    br: a.qM.readFloat,
                    bw: a.gp.writeFloat,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = a.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowDashboardPopup_Request_Scale";
        }
      }
      class C extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.u_min || a.Sg(C.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  u_min: { n: 1, br: a.qM.readFloat, bw: a.gp.writeFloat },
                  v_min: { n: 2, br: a.qM.readFloat, bw: a.gp.writeFloat },
                  u_max: { n: 3, br: a.qM.readFloat, bw: a.gp.writeFloat },
                  v_max: { n: 4, br: a.qM.readFloat, bw: a.gp.writeFloat },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = a.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowDashboardPopup_Request_Rect";
        }
      }
      class M extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new M();
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowDashboardPopup_Response";
        }
      }
      class E extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            E.prototype.dashboard_popup_id || a.Sg(E.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            E.sm_m ||
              (E.sm_m = {
                proto: E,
                fields: {
                  dashboard_popup_id: {
                    n: 1,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            E.sm_m
          );
        }
        static MBF() {
          return E.sm_mbf || (E.sm_mbf = a.w0(E.M())), E.sm_mbf;
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(E.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(E.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(E.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(E.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_HideDashboardPopup_Request";
        }
      }
      class T extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new T();
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_HideDashboardPopup_Response";
        }
      }
      class D extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            D.prototype.source_accountid || a.Sg(D.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            D.sm_m ||
              (D.sm_m = {
                proto: D,
                fields: {
                  source_accountid: {
                    n: 1,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  video_uniqueid: {
                    n: 2,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                },
              }),
            D.sm_m
          );
        }
        static MBF() {
          return D.sm_mbf || (D.sm_mbf = a.w0(D.M())), D.sm_mbf;
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(D.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(D.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(D.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(D.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_RemoteVideoStream_Request";
        }
      }
      class B extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new B();
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_RemoteVideoStream_Response";
        }
      }
      class V extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.overlay_key || a.Sg(V.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            V.sm_m ||
              (V.sm_m = {
                proto: V,
                fields: {
                  overlay_key: {
                    n: 1,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = a.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(V.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowGame_Request";
        }
      }
      class I extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return I.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new I();
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowGame_Response";
        }
      }
      class A extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.overlay_key || a.Sg(A.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  overlay_key: {
                    n: 1,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = a.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowOverlay_Request";
        }
      }
      class O extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new O();
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_SetDisplayBrightness_Response";
        }
      }
      class k extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.user_brightness_value || a.Sg(k.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  user_brightness_value: {
                    n: 1,
                    br: a.qM.readFloat,
                    bw: a.gp.writeFloat,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = a.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(k.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_SetDisplayBrightness_Request";
        }
      }
      class L extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new L();
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_SetCurrentLanguage_Response";
        }
      }
      class H extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            H.prototype.language || a.Sg(H.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            H.sm_m ||
              (H.sm_m = {
                proto: H,
                fields: {
                  language: { n: 1, br: a.qM.readString, bw: a.gp.writeString },
                },
              }),
            H.sm_m
          );
        }
        static MBF() {
          return H.sm_mbf || (H.sm_mbf = a.w0(H.M())), H.sm_mbf;
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(H.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(H.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(H.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(H.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_SetCurrentLanguage_Request";
        }
      }
      class P extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new P();
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowOverlay_Response";
        }
      }
      class F extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.url || a.Sg(F.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  url: { n: 1, br: a.qM.readString, bw: a.gp.writeString },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = a.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ExecuteSteamURL_Request";
        }
      }
      class N extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new N();
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ExecuteSteamURL_Response";
        }
      }
      class x extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new x();
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_InitFrameSystem_Request";
        }
      }
      class W extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return W.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new W();
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new W();
          return W.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return W.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_InitFrameSystem_Response";
        }
      }
      class z extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            z.prototype.updated_frames || a.Sg(z.M()),
            n.Message.initialize(this, e, 0, -1, [1, 2, 3, 4], null);
        }
        static M() {
          return (
            z.sm_m ||
              (z.sm_m = {
                proto: z,
                fields: {
                  updated_frames: { n: 1, c: o, r: !0, q: !0 },
                  deleted_frames: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: a.qM.readUint32,
                    pbr: a.qM.readPackedUint32,
                    bw: a.gp.writeRepeatedUint32,
                  },
                  shown_frames: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: a.qM.readUint32,
                    pbr: a.qM.readPackedUint32,
                    bw: a.gp.writeRepeatedUint32,
                  },
                  hidden_frames: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: a.qM.readUint32,
                    pbr: a.qM.readPackedUint32,
                    bw: a.gp.writeRepeatedUint32,
                  },
                },
              }),
            z.sm_m
          );
        }
        static MBF() {
          return z.sm_mbf || (z.sm_mbf = a.w0(z.M())), z.sm_mbf;
        }
        toObject(e = !1) {
          return z.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(z.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(z.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new z();
          return z.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(z.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(z.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_UpdateFrameUIs_Request";
        }
      }
      class G extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            G.prototype.results || a.Sg(G.M()),
            n.Message.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            G.sm_m ||
              (G.sm_m = {
                proto: G,
                fields: { results: { n: 1, c: U, r: !0, q: !0 } },
              }),
            G.sm_m
          );
        }
        static MBF() {
          return G.sm_mbf || (G.sm_mbf = a.w0(G.M())), G.sm_mbf;
        }
        toObject(e = !1) {
          return G.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(G.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(G.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new G();
          return G.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(G.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(G.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return G.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_UpdateFrameUIs_Response";
        }
      }
      class U extends n.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            U.prototype.frame_id || a.Sg(U.M()),
            n.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            U.sm_m ||
              (U.sm_m = {
                proto: U,
                fields: {
                  frame_id: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  frame_menu_dashboard_popup_id: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            U.sm_m
          );
        }
        static MBF() {
          return U.sm_mbf || (U.sm_mbf = a.w0(U.M())), U.sm_mbf;
        }
        toObject(e = !1) {
          return U.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(U.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(U.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (i().BinaryReader)(e),
            r = new U();
          return U.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(U.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(U.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return U.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_UpdateFrameUIs_Response_FrameUpdateResult";
        }
      }
      const q = {
        "DashboardTabClicked#1": {
          msgClassRequest_t: p,
          msgClassResponse_t: h,
          strMethod: "DashboardTabClicked",
        },
        "DashboardActionInvoked#1": {
          msgClassRequest_t: g,
          msgClassResponse_t: v,
          strMethod: "DashboardActionInvoked",
        },
        "DashboardDesktopWindowClicked#1": {
          msgClassRequest_t: _,
          msgClassResponse_t: b,
          strMethod: "DashboardDesktopWindowClicked",
        },
        "ShowDashboardPopup#1": {
          msgClassRequest_t: S,
          msgClassResponse_t: M,
          strMethod: "ShowDashboardPopup",
        },
        "HideDashboardPopup#1": {
          msgClassRequest_t: E,
          msgClassResponse_t: T,
          strMethod: "HideDashboardPopup",
        },
        "RemoteVideoStream#1": {
          msgClassRequest_t: D,
          msgClassResponse_t: B,
          strMethod: "RemoteVideoStream",
        },
        "ShowGame#1": {
          msgClassRequest_t: V,
          msgClassResponse_t: I,
          strMethod: "ShowGame",
        },
        "ShowOverlay#1": {
          msgClassRequest_t: A,
          msgClassResponse_t: P,
          strMethod: "ShowOverlay",
        },
        "SetDisplayBrightness#1": {
          msgClassRequest_t: k,
          msgClassResponse_t: O,
          strMethod: "SetDisplayBrightness",
        },
        "SetCurrentLanguage#1": {
          msgClassRequest_t: H,
          msgClassResponse_t: L,
          strMethod: "SetCurrentLanguage",
        },
      };
      class j {
        constructor(e) {
          (this.m_Client = e),
            (this.ExecuteSteamURL = this.ExecuteSteamURL.bind(this)),
            (this.InitFrameSystem = this.InitFrameSystem.bind(this)),
            (this.UpdateFrameUIs = this.UpdateFrameUIs.bind(this));
        }
        ExecuteSteamURL(e, t) {
          return this.m_Client.SendVRGamepadUIRequest(
            "ExecuteSteamURL#1",
            F.fromObject(null != e ? e : {}),
            N,
            t,
          );
        }
        InitFrameSystem(e, t) {
          return this.m_Client.SendVRGamepadUIRequest(
            "InitFrameSystem#1",
            x.fromObject(null != e ? e : {}),
            W,
            t,
          );
        }
        UpdateFrameUIs(e, t) {
          return this.m_Client.SendVRGamepadUIRequest(
            "UpdateFrameUIs#1",
            z.fromObject(null != e ? e : {}),
            G,
            t,
          );
        }
      }
    },
    6663: (e, t, r) => {
      "use strict";
      r.d(t, { z: () => He });
      var n = r(1635),
        i = r(6090),
        a = r(3236),
        s = r(7813),
        o = r(1370),
        l = r(6540),
        c = r(6138),
        u = r(6731),
        d = r(5615),
        m = r(3606),
        p = r(3714),
        h = r(1139),
        g = r(1333),
        v = r(3720),
        _ = r(4493);
      let b = class extends v.yO {
        get defaultState() {
          return {};
        }
        constructor(e) {
          super(e),
            (this.m_audioDeviceChangedEventHandle = null),
            (this.state = this.defaultState);
        }
        componentDidMount() {
          this.m_audioDeviceChangedEventHandle =
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.RegisterForAudioDeviceChangedEvents(
                  this.onAudioDeviceChanged,
                );
        }
        onAudioDeviceChanged() {}
        getHmdAudioSettingsKey(e) {
          return (
            "/settings/audio/" +
            g.HR.audioDevices.hmd_settings_key.replace("{setting}", e)
          );
        }
        temporaryDropdownOverride(e, t) {
          e.indexOf("Mirror") >= 0
            ? (g.HR.audioDevices.selected_mirror_device = t)
            : e.indexOf("playback") >= 0
              ? (g.HR.audioDevices.selected_playback_device = t)
              : e.indexOf("recording") >= 0 &&
                (g.HR.audioDevices.selected_recording_device = t);
        }
        setDeviceSetting(e, t, r) {
          r &&
            (g.HR.SetSettingsValue(e, r.guid),
            g.HR.SetSettingsValue(t, r.name),
            this.temporaryDropdownOverride(e, r.guid));
        }
        setDeviceOverride(e, t) {
          this.setDeviceSetting(
            this.getHmdAudioSettingsKey(e),
            this.getHmdAudioSettingsKey(e + "Name"),
            t,
          );
        }
        getAudioDevice(e) {
          return e
            ? g.HR.audioDevices.playback_devices
                .concat(g.HR.audioDevices.record_devices)
                .find((t) => t.guid == e)
            : { guid: "", name: "" };
        }
        onOverrideDeviceDropdownChanged(e, t) {
          this.setDeviceOverride(e, this.getAudioDevice(t));
        }
        onMirrorDeviceDropdownChanged(e) {
          this.setDeviceSetting(
            "/settings/audio/playbackMirrorDevice",
            "/settings/audio/playbackMirrorDeviceName",
            this.getAudioDevice(e),
          );
        }
        makeDeviceChoiceList(e) {
          let t = [];
          t.push({ value: "", sLabel: (0, p.we)("#Settings_Audio_Default") }),
            t.push(_.Sr.Separator);
          for (let r of e) t.push({ value: r.guid, sLabel: r.name });
          return t;
        }
        render() {
          var e, t;
          if (!this.props.active) return null;
          if (void 0 === g.HR.audioDevices) return null;
          let r =
              null !==
                (e =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VRProperties.GetBoolProperty(
                        "/user/head",
                        i.fD.Audio_SupportsDualSpeakerAndJackOutput_Bool,
                      )) &&
              void 0 !== e &&
              e,
            n =
              null !==
                (t =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VRProperties.GetBoolProperty(
                        "/user/head",
                        i.fD.Hmd_SupportsMicMonitoring_Bool,
                      )) &&
              void 0 !== t &&
              t,
            a = !1;
          try {
            a =
              "htc" ==
                g.HR.settings
                  .get("/settings/LastKnown/HMDManufacturer")
                  .toLowerCase() &&
              g.HR.settings
                .get("/settings/LastKnown/HMDModel")
                .toLowerCase()
                .indexOf("vive") >= 0;
          } catch (e) {}
          return l.createElement(
            l.Fragment,
            null,
            l.createElement(v.Al, {
              name: this.getHmdAudioSettingsKey("enablePlaybackDeviceOverride"),
              label: (0, p.we)("#Settings_Audio_Playback_Automatic_Label"),
              offLabel: (0, p.we)("#Settings_Audio_Headset"),
              onLabel: (0, p.we)("#Settings_Audio_Manual"),
              onSubsection: l.createElement(v.xS, {
                items: this.makeDeviceChoiceList(
                  g.HR.audioDevices.playback_devices,
                ),
                value: g.HR.audioDevices.selected_playback_device,
                onChange: this.onOverrideDeviceDropdownChanged.bind(
                  this,
                  "playbackDeviceOverride",
                ),
                defaultLabel: (0, p.we)(
                  "#Settings_Audio_Current_Setting_Unknown",
                ),
              }),
            }),
            l.createElement(v.Al, {
              name: this.getHmdAudioSettingsKey(
                "enableRecordingDeviceOverride",
              ),
              label: (0, p.we)("#Settings_Audio_Recording_Automatic_Label"),
              offLabel: (0, p.we)("#Settings_Audio_Headset"),
              onLabel: (0, p.we)("#Settings_Audio_Manual"),
              onSubsection: l.createElement(v.xS, {
                items: this.makeDeviceChoiceList(
                  g.HR.audioDevices.record_devices,
                ),
                value: g.HR.audioDevices.selected_recording_device,
                onChange: this.onOverrideDeviceDropdownChanged.bind(
                  this,
                  "recordingDeviceOverride",
                ),
                defaultLabel: (0, p.we)(
                  "#Settings_Audio_Current_Setting_Unknown",
                ),
              }),
            }),
            l.createElement(v.Al, {
              name: "/settings/audio/enablePlaybackMirror",
              label: (0, p.we)("#Settings_Audio_Mirroring_Label"),
              onSubsection: l.createElement(
                l.Fragment,
                null,
                l.createElement(v.xS, {
                  items: this.makeDeviceChoiceList(
                    g.HR.audioDevices.playback_devices,
                  ),
                  value: g.HR.audioDevices.selected_mirror_device,
                  onChange: this.onMirrorDeviceDropdownChanged,
                  defaultLabel: (0, p.we)(
                    "#Settings_Audio_Current_Setting_Unknown",
                  ),
                }),
                l.createElement(v.Al, {
                  name: "/settings/audio/enablePlaybackMirrorIndependentVolume",
                  label: (0, p.we)(
                    "#Settings_Audio_Mirroring_Independent_Volume_Label",
                  ),
                  visibility: v.Z3.Advanced,
                }),
              ),
            }),
            a &&
              l.createElement(v.Al, {
                name: "/settings/audio/viveHDMIGain",
                label: (0, p.we)("#Settings_Audio_HDMIGain"),
              }),
            r &&
              l.createElement(v.Al, {
                name: "/settings/audio/dualSpeakerAndJackOutput",
                label: (0, p.we)("#Settings_Audio_SpeakerJackOutput"),
                offLabel: (0, p.we)("#Settings_Audio_Single"),
                onLabel: (0, p.we)("#Settings_Audio_Dual"),
                title: (0, p.we)("#Settings_Audio_SpeakerJackOutput_Title"),
              }),
            n &&
              l.createElement(v.Al, {
                name: "/settings/audio/muteMicMonitor",
                label: (0, p.we)("#Settings_Audio_MicMonitor"),
                offLabel: (0, p.we)("#Settings_Audio_Active"),
                onLabel: (0, p.we)("#Settings_Audio_Muted"),
              }),
          );
        }
      };
      (b.Name = "audio_settings"),
        (0, n.Cg)([a.o], b.prototype, "onAudioDeviceChanged", null),
        (0, n.Cg)([a.o], b.prototype, "onOverrideDeviceDropdownChanged", null),
        (0, n.Cg)([a.o], b.prototype, "onMirrorDeviceDropdownChanged", null),
        (b = (0, n.Cg)([o.PA], b));
      var S,
        y,
        f = r(917),
        R = r(6379);
      !(function (e) {
        (e[(e.DEFAULT = 0)] = "DEFAULT"),
          (e[(e.EDGE_A = 1)] = "EDGE_A"),
          (e[(e.EDGE_B = 2)] = "EDGE_B"),
          (e[(e.VIDEO_TRANSLUCENT = 3)] = "VIDEO_TRANSLUCENT"),
          (e[(e.VIDEO_OPAQUE = 4)] = "VIDEO_OPAQUE"),
          (e[(e.COUNT = 5)] = "COUNT");
      })(S || (S = {})),
        (function (e) {
          (e[(e.Evaluating = 0)] = "Evaluating"),
            (e[(e.Success = 1)] = "Success"),
            (e[(e.Failure = 2)] = "Failure");
        })(y || (y = {}));
      class w extends l.Component {
        static get DefaultState() {
          return {
            bShowTest: !1,
            streamingProgress: y.Evaluating,
            trackingProgress: y.Evaluating,
          };
        }
        constructor(e) {
          super(e),
            (this.m_imageRef = l.createRef()),
            (this.m_cameraFrameCount = 0),
            (this.state = w.DefaultState);
        }
        componentWillUnmount() {
          this.stopTest();
        }
        updateStatus() {
          let e = Date.now() - this.m_startTestTime;
          this.state.streamingProgress == y.Evaluating &&
            (this.m_cameraFrameCount > 0
              ? this.setState({ streamingProgress: y.Success })
              : e > 5e3 && this.setState({ streamingProgress: y.Failure }));
          let t = VRHTML.GetPose(i.Gz, i.mu.Standing);
          if (this.m_cameraFrameCount > 0) {
            t.bPoseIsValid || this.setState({ trackingProgress: y.Failure }),
              Date.now() - this.m_firstFrameTime > 2e3 &&
                this.state.trackingProgress == y.Evaluating &&
                this.setState({ trackingProgress: y.Success });
          }
        }
        onUpdateCameraFrame() {
          let e = "";
          try {
            (e = VRHTML.VRTrackedCameraInternal.GetCameraTestFrame()),
              0 == this.m_cameraFrameCount &&
                (this.m_firstFrameTime = Date.now()),
              this.m_cameraFrameCount++;
          } catch (e) {}
          this.m_imageRef.current && (this.m_imageRef.current.src = e),
            this.updateStatus();
        }
        startTest() {
          this.setState({ bShowTest: !0 }),
            VRHTML.VRTrackedCameraInternal.StartCameraTest(),
            (this.m_startTestTime = Date.now()),
            (this.m_cameraFrameCount = 0),
            this.m_imageRef.current && (this.m_imageRef.current.src = ""),
            (this.m_updateInterval = window.setInterval(
              this.onUpdateCameraFrame,
              100,
            )),
            this.onUpdateCameraFrame();
        }
        stopTest() {
          this.setState(w.DefaultState),
            VRHTML.VRTrackedCameraInternal.StopCameraTest(),
            window.clearInterval(this.m_updateInterval),
            (this.m_updateInterval = void 0);
        }
        renderStatusLine() {
          return this.state.streamingProgress == y.Evaluating
            ? l.createElement(
                "h1",
                { className: "CameraStatus Evaluating" },
                (0, p.we)("#CameraTest_CheckingCamera"),
              )
            : this.state.streamingProgress == y.Failure
              ? l.createElement(
                  "h1",
                  { className: "CameraStatus Failure" },
                  (0, p.we)("#CameraTest_CameraFailed"),
                )
              : this.state.trackingProgress == y.Evaluating
                ? l.createElement(
                    "h1",
                    { className: "CameraStatus Evaluating" },
                    (0, p.we)("#CameraTest_CheckingTracking"),
                  )
                : this.state.trackingProgress == y.Failure
                  ? l.createElement(
                      "h1",
                      { className: "CameraStatus Failure" },
                      (0, p.we)("#CameraTest_TrackingFailed"),
                    )
                  : l.createElement(
                      "h1",
                      { className: "CameraStatus Success" },
                      (0, p.we)("#CameraTest_Success"),
                    );
        }
        render() {
          return l.createElement(
            l.Fragment,
            null,
            l.createElement(
              "div",
              { className: "SettingsItem CameraTestSettingsItem" },
              l.createElement(
                "div",
                { className: "Label" },
                (0, p.we)("#Settings_CameraTest"),
              ),
              l.createElement(
                c.$,
                { className: "ButtonControl", onClick: this.startTest },
                (0, p.we)("#Settings_StartCameraTest"),
              ),
            ),
            this.state.bShowTest &&
              l.createElement(
                v.bB,
                {
                  className: "CameraTest",
                  header: this.renderStatusLine(),
                  onDismissRequested: this.stopTest,
                },
                l.createElement("img", { ref: this.m_imageRef }),
              ),
          );
        }
      }
      var C;
      (0, n.Cg)([a.o], w.prototype, "onUpdateCameraFrame", null),
        (0, n.Cg)([a.o], w.prototype, "startTest", null),
        (0, n.Cg)([a.o], w.prototype, "stopTest", null),
        (function (e) {
          (e[(e.Off = 0)] = "Off"),
            (e[(e.On2D = 1)] = "On2D"),
            (e[(e.On3D = 2)] = "On3D");
        })(C || (C = {}));
      const M = (0, o.PA)(() => {
        let e = g.HR.settings.get(m.D1),
          t = [
            { value: C.Off, sLabel: (0, p.we)("#Settings_ToggleButton_Off") },
          ];
        return (
          R.c.m_bSupportsRoomViewDepthProjection || e == C.On3D
            ? (t.push({ value: C.On2D, sLabel: (0, p.we)("#Settings_2D") }),
              t.push({ value: C.On3D, sLabel: (0, p.we)("#Settings_3D") }))
            : t.push({
                value: C.On2D,
                sLabel: (0, p.we)("#Settings_ToggleButton_On"),
              }),
          l.createElement(
            l.Fragment,
            null,
            l.createElement(v.JA, {
              label: (0, p.we)("#Settings_Camera_AllowCameraForRoomView"),
              title: (0, p.we)("#Settings_Camera_AllowCameraForRoomView_Desc"),
              items: t,
              value: e,
              onChange: (e) => {
                g.HR.SetSettingsValue(m.D1, e);
              },
            }),
            !R.c.m_bSupportsRoomViewDepthProjection &&
              e == C.On3D &&
              l.createElement(
                "div",
                { className: "SettingsItemValueLabel" },
                (0, p.we)("#Settings_Camera_RoomView3D_Unsupported"),
              ),
          )
        );
      });
      var E;
      !(function (e) {
        (e[(e.Auto = 0)] = "Auto"),
          (e[(e.Power60hz = 1)] = "Power60hz"),
          (e[(e.Power50hz = 2)] = "Power50hz");
      })(E || (E = {}));
      const T = (0, o.PA)(() => {
        let e = g.HR.settings.get(m.ui),
          t = [
            {
              value: E.Auto,
              sLabel: (0, p.we)("#Settings_Camera_AntiFlickerSettingAuto"),
            },
            {
              value: E.Power60hz,
              sLabel: (0, p.we)("#Settings_Camera_AntiFlickerSetting60Hz"),
            },
            {
              value: E.Power50hz,
              sLabel: (0, p.we)("#Settings_Camera_AntiFlickerSetting50Hz"),
            },
          ];
        return l.createElement(v.JA, {
          label: (0, p.we)("#Settings_Camera_AntiFlicker"),
          title: (0, p.we)("#Settings_Camera_AntiFlicker_Desc"),
          items: t,
          value: e,
          onChange: (e) => {
            g.HR.SetSettingsValue(m.ui, e);
          },
        });
      });
      let D = class extends v.yO {
        constructor(e) {
          super(e),
            (this.state = {
              cameraRateValue: this.fetchCameraRate(),
              showCameraTest: !1,
            });
        }
        cameraEnabled() {
          return g.HR.settings.get(m.xz);
        }
        fetchCameraRate() {
          var e;
          if (!R.c.m_bCameraCompatibilityModes) return 0;
          return (function (e) {
            switch (e) {
              case i.Ee.ISO_30FPS:
                return 30;
              case i.Ee.ISO_35FPS:
                return 35;
              case i.Ee.ISO_40FPS:
                return 40;
              case i.Ee.ISO_46FPS:
                return 45;
              case i.Ee.ISO_50FPS:
                return 50;
              case i.Ee.BULK_8K_DMA:
                return 55;
              default:
              case i.Ee.BULK_DEFAULT:
                return 60;
            }
          })(
            null !==
              (e =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRProperties.GetInt32Property(
                      "/user/head",
                      i.fD.CameraCompatibilityMode_Int32,
                    )) && void 0 !== e
              ? e
              : i.Ee.BULK_DEFAULT,
          );
        }
        setCameraRate(e) {
          let t = (function (e) {
            switch (e) {
              case 30:
                return i.Ee.ISO_30FPS;
              case 35:
                return i.Ee.ISO_35FPS;
              case 40:
                return i.Ee.ISO_40FPS;
              case 45:
                return i.Ee.ISO_46FPS;
              case 50:
                return i.Ee.ISO_50FPS;
              case 55:
                return i.Ee.BULK_8K_DMA;
              default:
                return i.Ee.BULK_DEFAULT;
            }
          })(e);
          VRHTML.VRTrackedCameraInternal.SetCameraCompatibilityMode(t) &&
            g.HR.SetRestartRequired();
        }
        onCameraEnabled(e) {
          g.HR.SetSettingsValue(m.xz, e),
            this.forceUpdate(),
            e || this.onStopCameraTest();
        }
        onCameraRateChanged(e, t) {
          this.setState({ cameraRateValue: t }), this.setCameraRate(t);
        }
        onStartCameraTest() {
          this.setState({ showCameraTest: !0 });
        }
        onStopCameraTest() {
          this.setState({ showCameraTest: !1 });
        }
        get currentRoomViewStyle() {
          let e = g.HR.settings.get(m.Ni);
          return e == S.DEFAULT && (e = S.EDGE_B), e;
        }
        renderEnabledSettings() {
          let e = !1;
          switch (this.currentRoomViewStyle) {
            case S.EDGE_A:
            case S.EDGE_B:
              e = !0;
          }
          const t = this.state.cameraRateValue > 0,
            r = g.HR.settings.get(m.D1),
            n =
              g.HR.settings.get(
                "/settings/camera/enableCameraForCollisionBounds",
              ) || r != C.Off;
          let i = [
            {
              value: S.EDGE_A,
              sLabel: (0, p.we)("#Settings_Camera_RoomViewStyle_EdgeA"),
            },
            {
              value: S.EDGE_B,
              sLabel: (0, p.we)("#Settings_Camera_RoomViewStyle_EdgeB"),
            },
            {
              value: S.VIDEO_TRANSLUCENT,
              sLabel: (0, p.we)(
                "#Settings_Camera_RoomViewStyle_VideoTranslucent",
              ),
            },
            {
              value: S.VIDEO_OPAQUE,
              sLabel: (0, p.we)("#Settings_Camera_RoomViewStyle_VideoOpaque"),
            },
          ];
          return l.createElement(
            l.Fragment,
            null,
            l.createElement(M, null),
            R.c.m_bAllowLightSourceFrequency && l.createElement(T, null),
            t &&
              l.createElement(v.tE, {
                label: (0, p.we)("#Settings_Camera_Rate_Hz"),
                title: (0, p.we)("#Settings_Camera_CompatibilityExplanation"),
                min: 30,
                max: 60,
                step: 5,
                value: this.state.cameraRateValue,
                onChange: this.onCameraRateChanged.bind(
                  this,
                  "click_activate_threshold",
                ),
                valueStyleVariant: f.Te.OnHandle,
                renderValue: (e) => this.state.cameraRateValue.toString(),
              }),
            n &&
              l.createElement(v.xS, {
                value: this.currentRoomViewStyle,
                onChange: (e) => g.HR.SetSettingsValue(m.Ni, e),
                label: (0, p.we)("#Settings_Camera_RoomViewStyle"),
                items: i,
                subsection:
                  e &&
                  l.createElement(
                    l.Fragment,
                    null,
                    e &&
                      l.createElement(v.Pw, {
                        nameR: "/settings/camera/cameraBoundsColorGammaR",
                        nameG: "/settings/camera/cameraBoundsColorGammaG",
                        nameB: "/settings/camera/cameraBoundsColorGammaB",
                        label: (0, p.we)("#Settings_Chaperone_BoundsColor"),
                      }),
                  ),
              }),
            n &&
              l.createElement(v.tE, {
                name: "/settings/camera/cameraBoundsColorGammaA",
                min: 5,
                max: 255,
                detents: [255],
                label: (0, p.we)("#Settings_Chaperone_BoundsTransparency"),
                valueStyleVariant: f.Te.OnHandle,
                renderValue: (e) => e.toFixed(0),
              }),
            l.createElement(v.Al, {
              name: "/settings/camera/showOnController",
              label: (0, p.we)("#Settings_Camera_ShowOnController"),
              title: (0, p.we)("#Settings_Camera_ShowOnController_Desc"),
            }),
            l.createElement(v.Al, {
              name: "/settings/camera/enableCameraForCollisionBounds",
              label: (0, p.we)(
                "#Settings_Camera_AllowCameraForChaperoneBounds",
              ),
              title: (0, p.we)(
                "#Settings_Camera_AllowCameraForChaperoneBounds_Desc",
              ),
            }),
          );
        }
        render() {
          return this.props.active
            ? l.createElement(
                l.Fragment,
                null,
                this.cameraEnabled() && this.renderEnabledSettings(),
                this.cameraEnabled() &&
                  R.c.m_bAllowCameraToggle &&
                  l.createElement("hr", null),
                this.cameraEnabled() && this.GetComponentsForGroup("dev"),
                R.c.m_bAllowCameraToggle &&
                  l.createElement(v.Al, {
                    label: (0, p.we)("#Settings_Camera_EnableCamera"),
                    value: this.cameraEnabled(),
                    requiresRestart: !0,
                    onChange: this.onCameraEnabled,
                    offLabel: (0, p.we)("#Settings_ToggleButton_Disable"),
                    onLabel: (0, p.we)("#Settings_ToggleButton_Enable"),
                  }),
                this.cameraEnabled() &&
                  R.c.m_bAllowCameraToggle &&
                  l.createElement(w, null),
                !1,
                !1,
                !1,
                !1,
                this.makeResetToDefaultButton(),
              )
            : null;
        }
      };
      (D.Name = "camera_settings"),
        (0, n.Cg)([a.o], D.prototype, "onCameraEnabled", null),
        (0, n.Cg)([a.o], D.prototype, "onCameraRateChanged", null),
        (0, n.Cg)([a.o], D.prototype, "onStartCameraTest", null),
        (0, n.Cg)([a.o], D.prototype, "onStopCameraTest", null),
        (0, n.Cg)([s.computed], D.prototype, "currentRoomViewStyle", null),
        (D = (0, n.Cg)([o.PA], D));
      var B = r(2928),
        V = r(2702),
        I = r(1835),
        A = r(4574);
      let O = class extends v.yO {
        constructor(e) {
          super(e);
        }
        render() {
          return this.props.active
            ? l.createElement(
                l.Fragment,
                null,
                !I.SW.isVRGamepadUI &&
                  l.createElement(v.xS, {
                    name: m.md,
                    label: (0, p.we)("#Settings_Dashboard_Position"),
                    items: [
                      { value: V.eo.Near, sLabel: (0, p.we)("#Settings_Near") },
                      {
                        value: V.eo.Middle,
                        sLabel: (0, p.we)("#Settings_Middle"),
                      },
                      { value: V.eo.Far, sLabel: (0, p.we)("#Settings_Far") },
                    ],
                    visibility: v.Z3.Advanced,
                  }),
                l.createElement(v.Al, {
                  name: "/settings/dashboard/showPowerOptions",
                  label: (0, p.we)("#Settings_ShowPowerMenu"),
                  visibility: v.Z3.Advanced,
                }),
                l.createElement(v.Al, {
                  name: "/settings/dashboard/showDesktop",
                  label: (0, p.we)("#Settings_ShowDesktopViews"),
                  visibility: v.Z3.Advanced,
                }),
                l.createElement(v.Al, {
                  name: "/settings/dashboard/allowAppQuitting",
                  label: (0, p.we)("#Settings_AllowAppQuitting"),
                  visibility: v.Z3.Advanced,
                }),
                l.createElement(v.Al, {
                  name: "/settings/dashboard/arcadeMode",
                  label: (0, p.we)("#Settings_ShowSettingsInDashboard"),
                  swapOnOff: !0,
                  visibility: v.Z3.Advanced,
                }),
                (0, i.R$)() != i.OH.Overlay &&
                  l.createElement(v.Al, {
                    name: "/settings/dashboard/enableDashboard",
                    title: (0, p.we)("#Settings_EnableDashboardDesc"),
                    label: (0, p.we)("#Settings_EnableDashboard"),
                    visibility: v.Z3.Advanced,
                  }),
                l.createElement(v.Al, {
                  name: "/settings/dashboard/autoShowGameTheater",
                  title: (0, p.we)("#Settings_AutoShowGameTheaterDesc"),
                  label: (0, p.we)("#Settings_AutoShowGameTheater"),
                  visibility: v.Z3.Advanced,
                }),
                l.createElement(v.Al, {
                  name: "/settings/dashboard/inputCaptureEnabled",
                  title: (0, p.we)("#Settings_InputCaptureEnabledDesc"),
                  label: (0, p.we)("#Settings_InputCaptureEnabled"),
                  visibility: v.Z3.Advanced,
                }),
                l.createElement(v.tE, {
                  min: 0,
                  max: 1.5,
                  step: 0.1,
                  valueStyleVariant: f.Te.OnHandle,
                  detents: [1],
                  renderValue: (e) => (100 * e).toFixed(0) + "%",
                  name: "/settings/dashboard/grabHandleAcceleration",
                  title: (0, p.we)(
                    "#Settings_Dashboard_GrabHandleAccelerationDesc",
                  ),
                  label: (0, p.we)(
                    "#Settings_Dashboard_GrabHandleAcceleration",
                  ),
                  visibility: v.Z3.Advanced,
                }),
                l.createElement(v.xS, {
                  name: m.Ju,
                  label: (0, p.we)("#Settings_TheaterCurvature"),
                  items: [
                    {
                      value: A.Do.Curved,
                      sLabel: (0, p.we)("#Settings_TheaterCurvature_Curved"),
                    },
                    {
                      value: A.Do.Flat,
                      sLabel: (0, p.we)("#Settings_TheaterCurvature_Flat"),
                    },
                  ],
                  visibility: v.Z3.Advanced,
                }),
                l.createElement(v.xS, {
                  name: m.vo,
                  label: (0, p.we)("#Settings_TheaterScreenSize"),
                  items: [
                    {
                      value: I.Nr.Large,
                      sLabel: (0, p.we)("#Settings_TheaterScreenSize_Large"),
                    },
                    {
                      value: I.Nr.Medium,
                      sLabel: (0, p.we)("#Settings_TheaterScreenSize_Medium"),
                    },
                  ],
                  visibility: v.Z3.Advanced,
                }),
                l.createElement(v.xS, {
                  name: m.xY,
                  label: (0, p.we)("#Settings_TheaterScreenAlignment"),
                  items: [
                    {
                      value: I.tb.PlayArea,
                      sLabel: (0, p.we)(
                        "#Settings_TheaterScreenAlignment_PlayArea",
                      ),
                    },
                    {
                      value: I.tb.Dashboard,
                      sLabel: (0, p.we)(
                        "#Settings_TheaterScreenAlignment_Dashboard",
                      ),
                    },
                  ],
                  visibility: v.Z3.Advanced,
                }),
                l.createElement(v.Al, {
                  name: m.xP,
                  label: (0, p.we)("#Settings_Dashboard_KeyboardPrivacy"),
                  onLabel: (0, p.we)(
                    "#Settings_Dashboard_KeyboardPrivacy_Enabled",
                  ),
                  offLabel: (0, p.we)(
                    "#Settings_Dashboard_KeyboardPrivacy_Disabled",
                  ),
                  visibility: v.Z3.Advanced,
                  swapOnOff: !0,
                  offSubsection: l.createElement(
                    l.Fragment,
                    null,
                    l.createElement(
                      "div",
                      { className: "Label" },
                      (0, p.we)(
                        "#Settings_Dashboard_KeyboardPrivacy_DisabledWarning",
                      ),
                    ),
                  ),
                }),
                !1,
              )
            : null;
        }
      };
      var k;
      (O.Name = "dashboard_settings"),
        (O = (0, n.Cg)([o.PA], O)),
        (function (e) {
          (e[(e.Disabled = 0)] = "Disabled"),
            (e[(e.Automatic = 1)] = "Automatic"),
            (e[(e.Always = 2)] = "Always");
        })(k || (k = {}));
      let L = class extends l.Component {
        constructor(e) {
          super(e), (this.state = { bShowingModal: !1 });
        }
        isImplicitLayer(e) {
          return e.bIsImplicit && e.bIsModifyAllowed;
        }
        isExplicitLayer(e) {
          return !e.bIsImplicit;
        }
        isImplicitNoModifLayer(e) {
          return e.bIsImplicit && !e.bIsModifyAllowed;
        }
        setApiLayerState(e, t) {
          t
            ? null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.XRApiLayerManager.EnableApiLayer(e)
            : null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.XRApiLayerManager.DisableApiLayer(e),
            this.forceUpdate();
        }
        show() {
          this.setState({ bShowingModal: !0 });
        }
        hide() {
          this.setState({ bShowingModal: !1 });
        }
        render() {
          let e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.XRApiLayerManager.GetInstalledApiLayers(),
            t = null == e,
            r = [],
            n = 0;
          if (!t)
            for (let t = 0; t < e.length; ) {
              let i = {
                sId: "",
                sName: "",
                bIsImplicit: !1,
                bIsEnabled: !1,
                bIsModifyAllowed: !0,
              };
              (i.sId = e[t++].toString()),
                (i.sName = e[t++].toString()),
                (i.bIsImplicit = !0 === e[t++]),
                (i.bIsEnabled = !0 === e[t++]),
                (i.bIsModifyAllowed = !0 === e[t++]),
                r.push(i),
                i.bIsEnabled && n++;
            }
          const i = r.filter(this.isImplicitLayer),
            a = r.filter(this.isExplicitLayer),
            s = r.filter(this.isImplicitNoModifLayer);
          return l.createElement(
            l.Fragment,
            null,
            l.createElement(
              v.YO,
              {
                className: "SettingsItem",
                title: (0, p.we)("#Settings_Loading"),
              },
              l.createElement(
                c.$,
                { className: "ButtonControl", onClick: this.show },
                (0, p.we)("#OpenXR_ApiLayers_Manage"),
                l.createElement(
                  "div",
                  { className: "Badge" },
                  (0, p.we)("#OpenXR_ApiLayers_Active", n),
                ),
              ),
            ),
            this.state.bShowingModal &&
              l.createElement(
                v.bB,
                {
                  className: "OverlayAutoLaunchModal",
                  header: (0, p.we)("#OpenXR_ApiLayers_Installed"),
                  onDismissRequested: this.hide,
                },
                i.length > 0 &&
                  i.map((e) =>
                    l.createElement(v.Al, {
                      key: e.sId,
                      label: e.sName,
                      value: e.bIsEnabled,
                      onChange: (t) => this.setApiLayerState(e.sId, t),
                    }),
                  ),
                s.length > 0 &&
                  s.map((e) =>
                    l.createElement(
                      "div",
                      { className: "SettingsItem" },
                      l.createElement("div", { className: "Label" }, e.sName),
                      e.bIsEnabled &&
                        l.createElement(
                          "div",
                          { className: "SettingsItemValueInfo" },
                          " ",
                          (0, p.we)("#OpenXR_ApiLayers_Enabled"),
                        ),
                      !e.bIsEnabled &&
                        l.createElement(
                          "div",
                          { className: "SettingsItemValueInfo" },
                          " ",
                          (0, p.we)("#OpenXR_ApiLayers_Disabled"),
                        ),
                    ),
                  ),
                a.length > 0 &&
                  a.map((e) =>
                    l.createElement(
                      "div",
                      { className: "SettingsItem" },
                      l.createElement("div", { className: "Label" }, e.sName),
                      l.createElement(
                        "div",
                        { className: "SettingsItemValueInfo" },
                        (0, p.we)("#OpenXR_ApiLayers_App_Controlled"),
                      ),
                    ),
                  ),
                t &&
                  l.createElement(
                    "div",
                    { className: "ModalPlaceholder" },
                    (0, p.we)("#OpenXR_ApiLayers_None_Installed"),
                  ),
              ),
          );
        }
      };
      (0, n.Cg)([a.o], L.prototype, "isImplicitLayer", null),
        (0, n.Cg)([a.o], L.prototype, "isExplicitLayer", null),
        (0, n.Cg)([a.o], L.prototype, "isImplicitNoModifLayer", null),
        (0, n.Cg)([a.o], L.prototype, "setApiLayerState", null),
        (0, n.Cg)([a.o], L.prototype, "show", null),
        (0, n.Cg)([a.o], L.prototype, "hide", null),
        (L = (0, n.Cg)([o.PA], L));
      let H = class extends v.yO {
        constructor(e) {
          super(e);
          (this.m_mailbox = new i._n()),
            this.m_mailbox.Init("settingstab_openxr"),
            this.m_mailbox.RegisterHandler("refresh_openxr_tab", () => {
              this.forceUpdate();
            });
        }
        OnSetAsOpenXRRuntime() {
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VRMonitor.SetThisOpenXRRuntimeToCurrent(),
            this.forceUpdate();
        }
        render() {
          var e;
          if (!this.props.active) return null;
          let [t, r] =
            null !==
              (e =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.XRRuntimeManager.GetCurrentRuntime()) && void 0 !== e
              ? e
              : [i.gN.Error, ""];
          i.gN.ThisSteamVR;
          const n = VRHTML.VRMonitor.HasVRMonitor();
          switch (t) {
            case i.gN.AnotherSteamVR:
              r = "#OpenXR_AnotherSteamVR";
              break;
            case i.gN.ThisSteamVR:
              r = "#OpenXR_SteamVR";
              break;
            default:
            case i.gN.Error:
              r = "#OpenXR_Error";
              break;
            case i.gN.None:
              r = "#OpenXR_None";
              break;
            case i.gN.AnotherRuntime:
              switch (r) {
                case "Oculus OpenXR":
                  r = "#OpenXR_OculusRuntime";
                  break;
                case "MixedRealityRuntime":
                  r = "#OpenXR_WindowsMixedReality";
              }
          }
          return (
            r.startsWith("#") && (r = (0, p.we)(r)),
            l.createElement(
              l.Fragment,
              null,
              this.schemaComponents,
              l.createElement(
                "div",
                { className: "SettingsItem" },
                l.createElement(
                  "div",
                  { className: "OpenXRRuntimeLabel" },
                  (0, p.we)("#Settings_CurrentOpenXRRuntime"),
                ),
                l.createElement(
                  "div",
                  { className: "OpenXRRuntimeValue" },
                  " ",
                  r,
                  " ",
                ),
              ),
              !(null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.XRRuntimeManager.IsThisRuntimeCurrent()) &&
                l.createElement(
                  "div",
                  { className: "SettingsItem Button ResetDefaultButton" },
                  l.createElement(
                    c.$,
                    {
                      className: "ButtonControl",
                      onClick: this.OnSetAsOpenXRRuntime,
                      enabled: n,
                    },
                    (0, p.we)("#Settings_SetAsOpenXRRuntime"),
                  ),
                ),
              l.createElement(L, null),
              this.makeResetToDefaultButton(),
              l.createElement(v.JA, {
                name: m.i8,
                label: (0, p.we)("#Settings_OpenXR_MetaPluginCompatibility"),
                title: (0, p.we)("#Settings_OpenXR_MetaPluginCompatibilityTip"),
                visibility: v.Z3.Advanced,
                items: [
                  {
                    sLabel: (0, p.we)("#Settings_ToggleButton_Off"),
                    value: k.Disabled,
                  },
                  {
                    sLabel: (0, p.we)("#OpenXR_Automatic"),
                    value: k.Automatic,
                  },
                  {
                    sLabel: (0, p.we)("#Settings_ToggleButton_On"),
                    value: k.Always,
                  },
                ],
              }),
            )
          );
        }
      };
      (H.Name = "openxr_settings"),
        (0, n.Cg)([a.o], H.prototype, "OnSetAsOpenXRRuntime", null),
        (H = (0, n.Cg)([o.PA], H));
      const P = (0, o.PA)(function () {
        var e;
        const [t, r] = l.useState(i.GQ.Medium),
          [n, a] = l.useState(!1),
          [s, o] = l.useState(""),
          [u, d] = l.useState(!1),
          m = l.useCallback((e) => {
            o(e);
          }, []);
        l.useEffect(() => {
          const e =
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.RegisterForTrackingRecordingPathChangedEvent(m);
          return null == e ? void 0 : e.unregister;
        }, [m]);
        let h = [];
        h.push({
          value: i.GQ.Small,
          sLabel: (0, p.we)("#Advanced_SmallSpace"),
        }),
          h.push({
            value: i.GQ.Medium,
            sLabel: (0, p.we)("#Advanced_MediumSpace"),
          }),
          h.push({
            value: i.GQ.Large,
            sLabel: (0, p.we)("#Advanced_LargeSpace"),
          }),
          h.push({
            value: i.GQ.Gigantic,
            sLabel: (0, p.we)("#Advanced_GiganticSpace"),
          }),
          h.push({
            value: i.GQ.Standing,
            sLabel: (0, p.we)("#Advanced_StandingSpace"),
          });
        const g = (0, p.we)(
          b()
            ? "#Advanced_TrackingRecordingStop"
            : "#Advanced_TrackingRecordingStart",
        );
        function b() {
          return I.SW.m_bTrackingRecording;
        }
        function S() {
          b()
            ? (VRHTML.VRSystem.StopTrackingRecording(), a(!0))
            : (VRHTML.VRSystem.StartTrackingRecording(), a(!1));
        }
        const y =
          null !==
            (e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRProperties.GetBoolProperty(
                    "/user/head",
                    i.fD.SupportsInHMDRoomSetup_Bool,
                  )) &&
          void 0 !== e &&
          e;
        return l.createElement(
          l.Fragment,
          null,
          l.createElement(
            "div",
            { className: "SettingsItem" },
            l.createElement(
              "div",
              { className: "Label Title" },
              (0, p.we)("#Advanced_RoomAndTracking"),
            ),
          ),
          l.createElement(
            "div",
            { className: "SettingsItem" },
            l.createElement(
              "div",
              { className: "SettingsItemValueInfo Left" },
              (0, p.we)("#Advanced_QuickCalibrate_Explanation"),
            ),
          ),
          l.createElement(
            "div",
            { className: "SettingsItem ButtonRow" },
            l.createElement(
              c.$,
              {
                className: "ButtonControl",
                onClick: () => {
                  VRHTML.VRChaperoneSetup.QuickCalibratePlayspace(t);
                },
              },
              (0, p.we)("#Advanced_QuickCalibrate"),
            ),
            l.createElement(_.ms, { items: h, onChange: r, value: t }),
          ),
          VRHTML.VRSystem &&
            l.createElement(
              l.Fragment,
              null,
              !y &&
                l.createElement(
                  "div",
                  { className: "SettingsItem" },
                  l.createElement(
                    "div",
                    { className: "Label" },
                    (0, p.we)("#Advanced_RecordTrackingData"),
                  ),
                  l.createElement(
                    c.$,
                    { className: "ButtonControl", onClick: S },
                    g,
                  ),
                ),
              y &&
                l.createElement(
                  v.YO,
                  { className: "SettingsItem", title: "title?" },
                  l.createElement(
                    "div",
                    { className: "Label" },
                    (0, p.we)("#Advanced_RecordTrackingData"),
                  ),
                  l.createElement(
                    "div",
                    { className: "SubsectionStem" },
                    l.createElement(
                      c.$,
                      { className: "ButtonControl", onClick: S },
                      g,
                    ),
                  ),
                  l.createElement(
                    "div",
                    { className: "Subsection WithStem" },
                    l.createElement(v.Al, {
                      name: "/settings/steamvr/allowTrackingCameraRecording",
                      label: (0, p.we)(
                        "#Advanced_TrackingRecording_AllowCameraRecording",
                      ),
                    }),
                    l.createElement(v.Al, {
                      name: "/settings/steamvr/allowTrackingScreenRecording",
                      label: (0, p.we)(
                        "#Advanced_TrackingRecording_AllowScreenRecording",
                      ),
                    }),
                    l.createElement(v.Al, {
                      name: "/settings/steamvr/allowTrackingAudioRecording",
                      label: (0, p.we)(
                        "#Advanced_TrackingRecording_AllowAudioRecording",
                      ),
                    }),
                  ),
                ),
            ),
          y &&
            l.createElement(v.Al, {
              label: (0, p.we)("#Advanced_ShowDebugCameraViews"),
              value: u,
              onChange: function (e) {
                d(e), VRHTML.VRSystem.SetDebugCameraViewEnabled(e);
              },
            }),
          n &&
            !b() &&
            l.createElement(
              v.bB,
              {
                className: "TrackingSavedModalButton",
                header: (0, p.we)("#Settings_Developer_TrackingDataHeader"),
                onDismissRequested: function () {
                  a(!1);
                },
              },
              l.createElement(
                "div",
                { className: "ModalPlaceholder" },
                (0, p.we)("#Settings_Developer_TrackingDataSavedSuccessfully"),
                " ",
                l.createElement("br", null),
                " ",
                s,
                " ",
              ),
            ),
        );
      });
      function F() {
        return l.createElement(
          l.Fragment,
          null,
          l.createElement(
            "div",
            { className: "SettingsItem" },
            l.createElement(
              "div",
              { className: "Label Title" },
              (0, p.we)("#Advanced_FrameTiming"),
            ),
          ),
          l.createElement(v.Al, {
            name: "/settings/perfcheck/perfGraphInHMD",
            label: (0, p.we)("#Advanced_PerfGraphInHMD"),
          }),
          l.createElement(v.Al, {
            name: "/settings/perfcheck/saveTimingsOnExit",
            label: (0, p.we)("#Advanced_AutoSaveTimingInfoOnExit"),
          }),
          l.createElement(v.Al, {
            name: "/settings/perfcheck/allowTimingStore",
            label: (0, p.we)("#Advanced_AllowSavingOfTimingInfo"),
          }),
          VRHTML.VRMonitor.HasVRMonitor() &&
            l.createElement(
              "div",
              { className: "SettingsItem" },
              l.createElement("div", { className: "Label" }),
              l.createElement(
                c.$,
                {
                  className: "ButtonControl",
                  onClick: () => {
                    VRHTML.VRMonitor.SaveTimingFramesToDisk();
                  },
                },
                (0, p.we)("#Advanced_SaveFrameDataNow"),
              ),
            ),
        );
      }
      function N() {
        return l.createElement(
          l.Fragment,
          null,
          l.createElement(
            "div",
            { className: "SettingsItem" },
            l.createElement(
              "div",
              { className: "Label Title" },
              (0, p.we)("#Settings_Advanced_Status_Header"),
            ),
          ),
          l.createElement(v.xS, {
            name: "/settings/userinterface/vrmStatusCheckInterval",
            label: (0, p.we)("#Settings_StatusCheckInterval"),
            items: [
              { value: 0, sLabel: (0, p.we)("#StatusCheckInterval_Never") },
              { value: 1e3, sLabel: (0, p.we)("#StatusCheckInterval_Normal") },
              { value: 100, sLabel: (0, p.we)("#StatusCheckInterval_Often") },
              { value: 5e3, sLabel: (0, p.we)("#StatusCheckInterval_Seldom") },
            ],
          }),
          l.createElement(
            "div",
            { className: "SettingsItem" },
            l.createElement("div", { className: "Label" }),
            l.createElement(
              c.$,
              {
                className: "ButtonControl",
                onClick: () => {
                  VRHTML.VRMonitor.RefreshStatusNow();
                },
              },
              (0, p.we)("#Settings_RefreshStatusNow"),
            ),
          ),
          l.createElement(v.Al, {
            name: "/settings/userinterface/vrmCheckForSteam",
            label: (0, p.we)("#Settings_CheckForSteam"),
          }),
        );
      }
      function x() {
        return l.createElement(
          l.Fragment,
          null,
          l.createElement(
            "div",
            { className: "SettingsItem" },
            l.createElement(
              "div",
              { className: "Label Title" },
              (0, p.we)("#Settings_Advanced_Paths_Header"),
            ),
          ),
          l.createElement(
            "div",
            { className: "SettingsItem" },
            l.createElement(
              "div",
              { className: "Label" },
              (0, p.we)("#MenuAction_LogDirectory"),
            ),
            l.createElement(
              c.$,
              {
                className: "ButtonControl",
                onClick: () => {
                  VRHTML.VRMonitor.SetLog();
                },
              },
              (0, p.we)("#MenuAction_Update"),
            ),
          ),
          l.createElement(
            "div",
            { className: "SettingsItem" },
            l.createElement(
              "div",
              { className: "Label" },
              (0, p.we)("#MenuAction_ConfigDirectory"),
            ),
            l.createElement(
              c.$,
              {
                className: "ButtonControl",
                onClick: () => {
                  VRHTML.VRMonitor.SetConfig();
                },
              },
              (0, p.we)("#MenuAction_Update"),
            ),
          ),
        );
      }
      function W() {
        function e(e) {
          VRHTML.VRMonitor.SetDirectModeEnabled(e, !0),
            g.HR.SetRestartRequired();
        }
        return l.createElement(
          l.Fragment,
          null,
          l.createElement(
            "div",
            { className: "Subsection" },
            l.createElement(
              "div",
              { className: "SettingsItem" },
              l.createElement(
                "div",
                { className: "Label Title" },
                (0, p.we)("#Settings_Advanced_Legacy_Header"),
              ),
            ),
            l.createElement(
              l.Fragment,
              null,
              l.createElement(
                "div",
                { className: "SettingsItem" },
                l.createElement(
                  "div",
                  { className: "SettingsItemValueInfo Left" },
                  (0, p.we)("#Explanation_RemoveAllSteamVRUSBDevices"),
                ),
              ),
              l.createElement(
                "div",
                { className: "SettingsItem ButtonRow" },
                l.createElement("div", { className: "Label" }),
                l.createElement(
                  c.$,
                  {
                    className: "ButtonControl",
                    onClick: () => {
                      VRHTML.VRMonitor.RemoveAllRelevantUSBDevices();
                    },
                  },
                  (0, p.we)("#MenuAction_RemoveAllSteamVRUSBDevices"),
                ),
              ),
            ),
            l.createElement(
              l.Fragment,
              null,
              l.createElement(
                "div",
                { className: "SettingsItem" },
                l.createElement(
                  "div",
                  { className: "SettingsItemValueInfo Left" },
                  (0, p.we)("#Explanation_DisableEnhancedPowerManagement"),
                ),
              ),
              l.createElement(
                "div",
                { className: "SettingsItem ButtonRow" },
                l.createElement("div", { className: "Label" }),
                l.createElement(
                  c.$,
                  {
                    className: "ButtonControl",
                    onClick: () => {
                      VRHTML.VRMonitor.DisableEnhancedPowerManagement();
                    },
                  },
                  (0, p.we)("#MenuAction_DisableEnhancedPowerManagement"),
                ),
              ),
            ),
            l.createElement(
              l.Fragment,
              null,
              l.createElement(
                "div",
                { className: "SettingsItem" },
                l.createElement(
                  "div",
                  { className: "SettingsItemValueInfo Left" },
                  (0, p.we)("#Explanation_RebootVive"),
                ),
              ),
              l.createElement(
                "div",
                { className: "SettingsItem ButtonRow" },
                l.createElement("div", { className: "Label" }),
                l.createElement(
                  c.$,
                  {
                    className: "ButtonControl",
                    onClick: () => {
                      VRHTML.VRMonitor.RebootHMD();
                    },
                  },
                  (0, p.we)("#MenuAction_RebootVive"),
                ),
              ),
            ),
            l.createElement(
              l.Fragment,
              null,
              l.createElement(
                "div",
                { className: "SettingsItem" },
                l.createElement(
                  "div",
                  { className: "SettingsItemValueInfo Left" },
                  (0, p.we)("#Advanced_DisableDirectModeWarning"),
                ),
              ),
              l.createElement(
                "div",
                { className: "SettingsItem ButtonRow" },
                l.createElement(
                  c.$,
                  {
                    className: "ButtonControl",
                    onClick: () => {
                      e(!0);
                    },
                  },
                  (0, p.we)("#Advanced_EnableDirectDisplayMode"),
                ),
                l.createElement(
                  c.$,
                  {
                    className: "ButtonControl",
                    onClick: () => {
                      e(!1);
                    },
                  },
                  (0, p.we)("#Advanced_DisableDirectDisplayMode"),
                ),
              ),
            ),
          ),
        );
      }
      let z = class extends v.yO {
        constructor(e) {
          super(e);
        }
        render() {
          return this.props.active
            ? l.createElement(
                l.Fragment,
                null,
                this.schemaComponents,
                l.createElement("hr", null),
                l.createElement(P, null),
                VRHTML.VRMonitor.HasVRMonitor() &&
                  l.createElement(
                    l.Fragment,
                    null,
                    l.createElement("hr", null),
                    l.createElement(F, null),
                    l.createElement("hr", null),
                    l.createElement(N, null),
                    l.createElement("hr", null),
                    l.createElement(x, null),
                  ),
                l.createElement("hr", null),
                l.createElement(G, null),
                VRHTML.VRMonitor.HasVRMonitor() &&
                  l.createElement(
                    l.Fragment,
                    null,
                    l.createElement("hr", null),
                    l.createElement(W, null),
                  ),
              )
            : null;
        }
      };
      (z.Name = "developer_settings"), (z = (0, n.Cg)([o.PA], z));
      const G = (0, o.PA)(function (e) {
        var t, r, n;
        const a =
          null !==
            (r =
              null ===
                (t =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VRProperties) || void 0 === t
                ? void 0
                : t.GetStringProperty(
                    "/user/head",
                    i.fD.TrackingSystemName_String,
                  )) && void 0 !== r
            ? r
            : "";
        return l.createElement(
          l.Fragment,
          null,
          l.createElement(v.WZ, {
            label: (0, p.we)("#Settings_VersionInfo_SteamVRVersion"),
            value:
              null ===
                (n =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.SteamVRVersion) || void 0 === n
                ? void 0
                : n.call(VRHTML),
          }),
          l.createElement(v.WZ, {
            label: (0, p.we)("#Settings_VersionInfo_WebpackBuildTime"),
            value: new Date(1773164968e3).toLocaleString(),
          }),
          l.createElement(v.WZ, {
            label: (0, p.we)("#Settings_VersionInfo_SteamVRHmdTrackingInfo"),
            value: a,
          }),
        );
      });
      var U = r(2267);
      let q = class extends v.yO {
        constructor(e) {
          super(e);
        }
        render() {
          return this.props.active
            ? l.createElement(
                l.Fragment,
                null,
                l.createElement(U.y, null),
                l.createElement(U.Pj, null),
                l.createElement(U.EM, null),
                l.createElement(U.zU, null),
                l.createElement(U.rO, null),
                !I.SW.isVRGamepadUI &&
                  l.createElement(v.xS, {
                    name: m.md,
                    label: (0, p.we)("#Settings_Dashboard_Position"),
                    items: [
                      { value: V.eo.Near, sLabel: (0, p.we)("#Settings_Near") },
                      {
                        value: V.eo.Middle,
                        sLabel: (0, p.we)("#Settings_Middle"),
                      },
                      { value: V.eo.Far, sLabel: (0, p.we)("#Settings_Far") },
                    ],
                  }),
                l.createElement(v.Al, {
                  name: "/settings/notifications/DoNotDisturb",
                  label: (0, p.we)("#Settings_General_Notifications_Label"),
                  title: (0, p.we)("#Settings_General_Notifications_Text"),
                  swapOnOff: !0,
                }),
                l.createElement(v.Al, {
                  name: "/settings/userinterface/StatusAlwaysOnTop",
                  label: (0, p.we)("#Settings_StatusWindowAlwaysOnTop_Text"),
                  visibility: v.Z3.Desktop,
                }),
                l.createElement(v.Al, {
                  name: "/settings/steamvr/allowDisplayLockedMode",
                  label: (0, p.we)("#Settings_PauseOnLocked"),
                  swapOnOff: !0,
                  visibility: v.Z3.Advanced,
                }),
                l.createElement(v.Al, {
                  name: "/settings/steamvr/enableHomeApp",
                  label: (0, p.we)("#Settings_HomeAppCheck"),
                  title: (0, p.we)("#Settings_HomeAppDesc"),
                  visibility: v.Z3.Advanced,
                }),
                l.createElement(v.Al, {
                  name: m.au,
                  label: (0, p.we)("#Settings_IpdHUD"),
                  title: (0, p.we)("#Settings_IpdHUDDesc"),
                  visibility: v.Z3.Advanced,
                }),
                VRHTML.VRMonitor.HasVRMonitor() &&
                  l.createElement(
                    v.YO,
                    { visibility: v.Z3.Advanced, className: "SettingsItem" },
                    l.createElement(
                      "div",
                      { className: "Label" },
                      (0, p.we)("#MenuAction_ResetDismissableWarnings"),
                    ),
                    l.createElement(
                      c.$,
                      {
                        className: "ButtonControl",
                        onClick: () => {
                          VRHTML.VRMonitor.ResetDismissableWarnings();
                        },
                      },
                      (0, p.we)("#MenuAction_Reset"),
                    ),
                    l.createElement(
                      "div",
                      { className: "SettingsItemValueInfo" },
                      (0, p.we)("#Explanation_ResetDismissableWarnings"),
                    ),
                  ),
              )
            : null;
        }
      };
      (q.Name = "general_settings"), (q = (0, n.Cg)([o.PA], q));
      const j = (e) => {
        var t;
        const [r, n] = (0, l.useState)(!1);
        const a =
            0.9 *
            (null !==
              (t =
                null === i.Ay || void 0 === i.Ay
                  ? void 0
                  : i.Ay.VRProperties.GetFloatProperty(
                      i.Gz,
                      i.fD.DashboardScale_Float,
                    )) && void 0 !== t
              ? t
              : 1),
          [s, o] = ((e) => {
            const [t, r] = (0, l.useState)(e);
            return (
              l.useEffect(() => {
                if (t > 0) {
                  const e = window.setTimeout(() => {
                    r(t - 0.05);
                  }, 50);
                  return () => {
                    window.clearTimeout(e);
                  };
                }
              }, [t]),
              [t, r]
            );
          })(0);
        s <= 0 && r && (n(!1), e.onApplyCal());
        const u = (function (e, t, r, n) {
            if (!isFinite(e) || !isFinite(t)) return null;
            const i = [];
            return (
              i.push(
                l.createElement("line", {
                  key: "lineU",
                  x1: 0 + r,
                  y1: 0 + r,
                  x2: e - r,
                  y2: t - r,
                  style: {
                    stroke: "rgb(196,196,196)",
                    strokeWidth: 9,
                    strokeLinecap: "round",
                  },
                }),
              ),
              i.push(
                l.createElement("line", {
                  key: "lineL",
                  x1: 0 + r,
                  y1: e - r,
                  x2: t - r,
                  y2: 0 + r,
                  style: {
                    stroke: "rgb(196,196,196)",
                    strokeWidth: 9,
                    strokeLinecap: "round",
                  },
                }),
              ),
              i.push(
                l.createElement("circle", {
                  key: "centercirc",
                  cx: e / 2,
                  cy: t / 2,
                  r: 50 * n,
                  style: {
                    stroke: "rgb(196,196,196)",
                    strokeWidth: 9,
                    fillOpacity: 0.1,
                    fill: "rgb(256, 256, 256)",
                  },
                }),
              ),
              l.createElement(
                "svg",
                { width: e, height: t, viewBox: [0, 0, e, t].join(" ") },
                i,
              )
            );
          })(240, 240, 20, s),
          d = Math.max(s > 0 ? 1 : 1 + 5 * s, 0);
        return r
          ? l.createElement(
              i.dL,
              { parent_path: "/user/head" },
              l.createElement(
                i.dL,
                { translation: { y: 0, z: -70 }, rotation: { z: 0 }, scale: a },
                l.createElement(
                  i.Zk,
                  {
                    width: void 0,
                    height: 12 * d,
                    interactive: !1,
                    sort_order: 1e3,
                    debug_name: "eye-1",
                  },
                  l.createElement(
                    "div",
                    {
                      className: ["ZeroBorderContainer"].join(" "),
                      style: { width: 240 },
                    },
                    l.createElement(
                      "div",
                      { className: "ETCLensSVG" },
                      " ",
                      u,
                      " ",
                    ),
                  ),
                ),
              ),
            )
          : l.createElement(
              c.$,
              {
                className: "ButtonControl",
                enabled: !r,
                onClick: () => {
                  o(1.5), n(!0);
                },
              },
              " Do Center Track ",
            );
      };
      let K = class extends l.Component {
        constructor(e) {
          super(e),
            (this.m_eyeTrackingServerStatusHandle = null),
            (this.m_mailbox = new i._n()),
            (this.state = { nStatus: null }),
            this.m_mailbox.Init("eye_server_ui");
        }
        componentDidMount() {
          this.m_eyeTrackingServerStatusHandle =
            null === i.Ay || void 0 === i.Ay
              ? void 0
              : i.Ay.RegisterForEyeTrackingServerStatus(
                  this.onEyeTrackingServerEnabledEventUpdate,
                );
        }
        componentWillUnmount() {
          var e;
          null === (e = this.m_eyeTrackingServerStatusHandle) ||
            void 0 === e ||
            e.unregister();
        }
        onEyeTrackingServerEnabledEventUpdate(e) {
          this.setState({ nStatus: e });
        }
        stopEyeTrackingServer() {
          this.m_mailbox.SendMessage("driver_hmd/eyetracking", {
            type: "stop_eye_server",
          });
        }
        startEyeTrackingServer() {
          this.m_mailbox.SendMessage("driver_hmd/eyetracking", {
            type: "start_eye_server",
          });
        }
        doEyeTrackingCal() {
          this.m_mailbox.SendMessage("driver_hmd/eyetracking", {
            type: "perform_center_eye_cal",
          });
        }
        SetEyeTrackingVisualization(e) {
          let t = { type: "set_eye_tracking_debug_mode", mode: e };
          this.m_mailbox.SendMessage(i.pg, t);
        }
        render() {
          const e = (0, i.R$)() == i.OH.Overlay;
          let t;
          return (
            0 == this.state.nStatus
              ? (t = "uninitialized")
              : -1 == this.state.nStatus
                ? (t = "HMD not supported")
                : -2 == this.state.nStatus
                  ? (t = "Offline")
                  : 1 == this.state.nStatus && (t = "Online"),
            l.createElement(
              l.Fragment,
              null,
              l.createElement(
                "div",
                { className: "SettingsItem" },
                l.createElement(
                  "div",
                  { className: "Label" },
                  " ",
                  "EyeTrackingServerStatus",
                  " ",
                ),
                l.createElement(
                  "div",
                  { className: "OpenXRRuntimeValue" },
                  " ",
                  this.state.nStatus,
                  " ( ",
                  t,
                  " ) ",
                ),
              ),
              l.createElement(
                "div",
                { className: "SettingsItem" },
                l.createElement(
                  "div",
                  { className: "Label" },
                  " Stop Eye Tracking Server ",
                ),
                l.createElement(
                  c.$,
                  {
                    className: "ButtonControl",
                    onClick: this.stopEyeTrackingServer,
                  },
                  " Stop ",
                ),
              ),
              l.createElement(
                "div",
                { className: "SettingsItem" },
                l.createElement(
                  "div",
                  { className: "Label" },
                  " Start Eye Tracking Server ",
                ),
                l.createElement(
                  c.$,
                  {
                    className: "ButtonControl",
                    onClick: this.startEyeTrackingServer,
                  },
                  " Start ",
                ),
              ),
              l.createElement("div", null, "Eye Tracking Vis:"),
              l.createElement(
                "div",
                { className: "FlexRow" },
                l.createElement(
                  c.$,
                  {
                    className: "ButtonControl",
                    onClick: () => this.SetEyeTrackingVisualization("0"),
                  },
                  "Off",
                ),
                l.createElement(
                  c.$,
                  {
                    className: "ButtonControl",
                    onClick: () => this.SetEyeTrackingVisualization("1"),
                  },
                  "On",
                ),
                l.createElement(
                  c.$,
                  {
                    className: "ButtonControl",
                    onClick: () => this.SetEyeTrackingVisualization("2"),
                  },
                  "Point",
                ),
              ),
              e &&
                l.createElement(
                  l.Fragment,
                  null,
                  "\t",
                  l.createElement(j, {
                    onApplyCal: () => {
                      this.doEyeTrackingCal();
                    },
                  }),
                  "\t",
                ),
            )
          );
        }
      };
      (0, n.Cg)(
        [a.o],
        K.prototype,
        "onEyeTrackingServerEnabledEventUpdate",
        null,
      ),
        (0, n.Cg)([a.o], K.prototype, "stopEyeTrackingServer", null),
        (0, n.Cg)([a.o], K.prototype, "startEyeTrackingServer", null),
        (0, n.Cg)([a.o], K.prototype, "doEyeTrackingCal", null),
        (0, n.Cg)([a.o], K.prototype, "SetEyeTrackingVisualization", null),
        (K = (0, n.Cg)([o.PA], K));
      var $ = r(2505),
        Z = r.n($),
        J = r(3696),
        Q = r(7600),
        X = r(3747);
      function Y() {
        const [e, t] = l.useState();
        return l.createElement(
          v.YO,
          { className: "SettingsItem" },
          l.createElement(
            c.$,
            {
              className: "ButtonControl Spanning",
              onClick: () =>
                (0, n.sH)(this, void 0, void 0, function* () {
                  t(null);
                  try {
                    (yield g.HR.ReloadSettingsSchema()).success
                      ? window.location.reload()
                      : t(
                          "Failed to reload schema. File might not be found, or might be invalid.",
                        );
                  } catch (e) {
                    t(e.message);
                  }
                }),
            },
            "Reload Settings Schema",
          ),
          e && l.createElement("div", { className: "Subsection Label" }, e),
        );
      }
      const ee = (0, o.PA)(() =>
          l.createElement(
            v.YO,
            { className: "SettingsItem" },
            l.createElement(v.xS, {
              label: "Auto-Show Dashboard",
              name: m.Bf,
              items: [
                { value: "", sLabel: "Default" },
                _.Sr.Separator,
                { value: m.wi, sLabel: "Steam (VRGamepadUI)" },
                _.Sr.Separator,
                { value: m.Sx, sLabel: "Recent Games (Old Dashboard)" },
                { value: m.dw, sLabel: "Now Playing" },
                { value: m.GO + ".1", sLabel: "Desktop 1" },
                { value: m.GO + ".2", sLabel: "Desktop 2" },
                _.Sr.Separator,
                { value: m.Wt, sLabel: "Settings" },
              ],
            }),
          ),
        ),
        te = (e) => {
          const [t, r] = l.useState(1),
            [n, i] = l.useState(1),
            [a, s] = l.useState(1),
            [o, c] = l.useState(1),
            [u, d] = l.useState(!1);
          return l.createElement(
            l.Fragment,
            null,
            l.createElement(v.JA, {
              label: "Segmented Control",
              items: [
                { sLabel: "One", value: 1 },
                { sLabel: "Two", value: 2 },
              ],
              value: t,
              onChange: r,
            }),
            l.createElement(v.JA, {
              label: "Segmented Control",
              items: [
                { sLabel: "One", value: 1 },
                { sLabel: "Two", value: 2 },
                { sLabel: "Three", value: 3 },
              ],
              value: n,
              onChange: i,
            }),
            l.createElement(v.JA, {
              label: "Segmented Control",
              items: [
                { sLabel: "One", value: 1 },
                { sLabel: "Two", value: 2 },
                { sLabel: "Three", value: 3 },
                { sLabel: "Four", value: 4 },
              ],
              value: a,
              onChange: s,
            }),
            l.createElement(v.JA, {
              label: "Segmented Control",
              items: [
                { sLabel: "1", value: 1 },
                { sLabel: "2", value: 2 },
                { sLabel: "3", value: 3 },
                { sLabel: "4", value: 4 },
                { sLabel: "5", value: 5 },
              ],
              value: o,
              onChange: c,
            }),
            l.createElement("hr", null),
            l.createElement(v.Al, {
              label: "Standard Toggle",
              value: u,
              onChange: d,
            }),
            l.createElement(v.Al, {
              label: "Inverted Toggle",
              value: u,
              onChange: d,
              swapOnOff: !0,
            }),
          );
        },
        re = (e) => {
          const [t, r] = l.useState(1);
          return l.createElement(
            l.Fragment,
            null,
            l.createElement(v.ym, {
              label: "Radio Buttons",
              items: [
                { sLabel: "1", value: 1 },
                { sLabel: "2", value: 2 },
                { sLabel: "3", value: 3 },
                { sLabel: "4", value: 4 },
              ],
              value: t,
              onChange: r,
            }),
          );
        },
        ne = (e) => {
          const [t, r] = l.useState(1);
          return l.createElement(
            l.Fragment,
            null,
            l.createElement(v.xS, {
              label: "Dropdown",
              items: [
                { sLabel: "One", value: 1 },
                { sLabel: "Two", value: 2 },
                { sLabel: "Three", value: 3 },
                { sLabel: "Four", value: 4 },
              ],
              value: t,
              onChange: r,
            }),
          );
        },
        ie = (0, o.PA)(() => {
          const e = "settingscontrolzoo",
            t = g.HR.routePageSection == e;
          return l.createElement(
            l.Fragment,
            null,
            l.createElement(
              "div",
              { className: "SettingsItem Button" },
              l.createElement(
                c.$,
                {
                  className: "ButtonControl",
                  onClick: () => g.HR.setRoutePageSection(e),
                },
                "Zoo of Settings Controls",
              ),
            ),
            t &&
              l.createElement(
                v.bB,
                {
                  header: "Settings Controls",
                  onDismissRequested: () => g.HR.setRoutePageSection(null),
                },
                l.createElement(te, null),
                l.createElement("hr", null),
                l.createElement(re, null),
                l.createElement("hr", null),
                l.createElement(ne, null),
              ),
          );
        });
      function ae(e) {
        return l.createElement(
          l.Fragment,
          null,
          !1,
          l.createElement(v.Al, {
            name: "/settings/dashboard/allowSteamOverlays",
            label: "Allow any types of Steam Overlays",
            requiresRestart: !0,
            onSubsection: l.createElement(
              l.Fragment,
              null,
              l.createElement(v.Al, {
                name: "/settings/dashboard/allowVRGamepadUI",
                label: "Allow VRGamepadUI",
                requiresRestart: !0,
              }),
              l.createElement(v.Al, {
                name: "/settings/dashboard/allowVRGamepadUIViaGamescope",
                label: "Use VRGamepadUI via Gamescope on SteamOS",
                requiresRestart: !0,
              }),
              l.createElement(v.Al, {
                name: "/settings/dashboard/steamMatchesHMDFramerate",
                label: "Steam matches HMD framerate",
              }),
            ),
          }),
        );
      }
      function se(e) {
        return l.createElement(
          l.Fragment,
          null,
          l.createElement(v.tE, {
            name: "/settings/dashboard/theaterModeBrightness",
            label: "Theater Room Brightness",
            min: 0,
            max: 1,
            valueStyleVariant: f.Te.OnHandle,
            detents: [0.5],
            renderValue: (e) => (100 * e).toFixed(0) + "%",
          }),
          l.createElement(v.tE, {
            name: "/settings/dashboard/theaterModeReflection",
            label: "Theater Reflections Brightness",
            min: 0,
            max: 1,
            valueStyleVariant: f.Te.OnHandle,
            detents: [0.5],
            renderValue: (e) => (100 * e).toFixed(0) + "%",
          }),
          l.createElement(v.tE, {
            name: "/settings/dashboard/theaterModeSharpness",
            label: "Theater Reflections Sharpness",
            min: 0,
            max: 1,
            valueStyleVariant: f.Te.OnHandle,
            detents: [0.5],
            renderValue: (e) => (100 * e).toFixed(0) + "%",
          }),
        );
      }
      function oe(e) {
        return l.createElement(v.Al, {
          name: m.Ec,
          label: (0, p.we)("#Settings_ControllerOverlayMagnetismEnabled"),
          onSubsection: l.createElement(
            l.Fragment,
            null,
            l.createElement(v.tE, {
              name: m.Pi,
              label: (0, p.we)(
                "#Settings_ControllerOverlayMagnetismLockDistance",
              ),
              min: 0,
              max: 0.2,
              valueStyleVariant: f.Te.OnHandle,
              detents: [0.05],
              renderValue: (e) => e.toFixed(2),
            }),
            l.createElement(v.tE, {
              name: m.tZ,
              label: (0, p.we)(
                "#Settings_ControllerOverlayMagnetismDeadZoneRatio",
              ),
              min: 0,
              max: 1,
              valueStyleVariant: f.Te.OnHandle,
              detents: [0.6],
              renderValue: (e) => e.toFixed(2),
            }),
          ),
        });
      }
      function le(e) {
        return l.createElement(v.Al, {
          name: m.x_,
          label: (0, p.we)("#Settings_ControllerOverlayFilteringEnabled"),
          onSubsection: l.createElement(
            l.Fragment,
            null,
            l.createElement(v.tE, {
              name: m.R_,
              label: (0, p.we)("#Settings_ControllerOverlayFilteringMinCutoff"),
              min: 0,
              max: 10,
              valueStyleVariant: f.Te.OnHandle,
              detents: [1],
              renderValue: (e) => e.toFixed(2),
            }),
            l.createElement(v.tE, {
              name: m.El,
              label: (0, p.we)("#Settings_ControllerOverlayFilteringBeta"),
              min: 0,
              max: 10,
              valueStyleVariant: f.Te.OnHandle,
              detents: [5],
              renderValue: (e) => e.toFixed(2),
            }),
            l.createElement(v.tE, {
              name: m.$Z,
              label: (0, p.we)(
                "#Settings_ControllerOverlayFilteringDerivCutoff",
              ),
              min: 0,
              max: 10,
              valueStyleVariant: f.Te.OnHandle,
              detents: [5],
              renderValue: (e) => e.toFixed(2),
            }),
          ),
        });
      }
      function ce() {
        return l.createElement(
          l.Fragment,
          null,
          l.createElement(
            "div",
            { className: "SettingsItem" },
            l.createElement(
              "div",
              { className: "Label Title" },
              "Mirrored Device Rendering",
            ),
          ),
          l.createElement(v.Al, {
            name: "/settings/internal/mirroredDeviceRenderControllers",
            label: "Render Controllers",
          }),
          l.createElement(v.Al, {
            name: "/settings/internal/mirroredDeviceRenderHmd",
            label: "Render HMD",
          }),
          l.createElement(v.Al, {
            name: "/settings/internal/mirroredDeviceRenderTrackers",
            label: "Render Trackers",
          }),
        );
      }
      function ue() {
        const [e, t] = l.useState(!1);
        return l.createElement(
          v.YO,
          { className: "SettingsItem" },
          l.createElement(
            c.$,
            {
              className: "ButtonControl Spanning",
              onClick: () => {
                t(!0);
              },
            },
            "Enable Bugged Component (In Error Boundary)",
          ),
          !1,
          e &&
            l.createElement(Q.cb, {
              errorStr: "Test Error in settings_internal render component",
            }),
        );
      }
      let de = class extends v.yO {
        constructor(e) {
          super(e),
            (this.m_mailbox = new i._n()),
            this.m_mailbox.Init("internal_settings");
        }
        render() {
          if (!this.props.active) return null;
          6 == J.H.roomSetupStep || J.H.roomSetupStep;
          const e =
            (null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VRProperties.GetBoolProperty(
                  "/user/head",
                  i.fD.HasEyeTracker_Bool,
                )) &&
            !(null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VRProperties.GetBoolProperty(
                  "/user/head",
                  i.fD.HasDriverDirectModeComponent_Bool,
                ));
          return l.createElement(
            l.Fragment,
            null,
            !1,
            !1,
            !1,
            !1,
            !1,
            !1,
            !1,
            !1,
            !1,
            l.createElement("hr", null),
            !1,
            !1,
            l.createElement(v.xS, {
              name: "/settings/steamvr/renderSystemLayerInDistortPassMSAA",
              label: "System UI MSAA",
              items: [
                { value: 1, sLabel: "Off" },
                { value: 2, sLabel: "2x" },
                { value: 3, sLabel: "2x (alternating)" },
                { value: 4, sLabel: "4x" },
                { value: 8, sLabel: "8x" },
              ],
            }),
            l.createElement(v.xS, {
              name: "/settings/steamvr/overlayMips",
              label: "System UI Mipmaps",
              items: [
                { value: 0, sLabel: "Off" },
                { value: 1, sLabel: "Box" },
                { value: 2, sLabel: "2x Downsample [8x8]" },
              ],
            }),
            l.createElement(v.tE, {
              label: "System UI Mipbias",
              name: "/settings/steamvr/overlayMipbias",
              min: -0.5,
              max: 0,
              resetValue: -0.2,
              valueStyleVariant: f.Te.OnHandle,
              renderValue: (e) => e.toFixed(2),
            }),
            e &&
              l.createElement(v.tE, {
                label: "Foveated Sharpening Fade Sharpness",
                name: "/settings/steamvr/fadeSharpness",
                min: 0,
                max: 1,
                resetValue: 0.75,
                valueStyleVariant: f.Te.OnHandle,
                renderValue: (e) => e.toFixed(2),
              }),
            e &&
              l.createElement(v.tE, {
                label: "Foveated Sharpening Edge Sharpness",
                name: "/settings/steamvr/edgeSharpness",
                min: 1,
                max: 2,
                resetValue: 1.25,
                valueStyleVariant: f.Te.OnHandle,
                renderValue: (e) => e.toFixed(2),
              }),
            e &&
              l.createElement(v.tE, {
                label: "Foveated Sharpening Alpha",
                name: "/settings/steamvr/sharpeningAlpha",
                min: 0,
                max: 1,
                resetValue: 0.75,
                valueStyleVariant: f.Te.OnHandle,
                renderValue: (e) => e.toFixed(2),
              }),
            !1,
            !1,
            !1,
            !1,
            !1,
            l.createElement("hr", null),
            this.schemaComponents,
            !1,
            !1,
            !1,
            l.createElement(se, null),
            l.createElement(oe, null),
            l.createElement(le, null),
            l.createElement("hr", null),
            l.createElement(ce, null),
            l.createElement("hr", null),
            l.createElement(v.tE, {
              name: "/settings/dashboard/verticalOffsetCm_2",
              label: "Dashboard Vertical Offset (cm)",
              min: -25,
              max: 25,
              valueStyleVariant: f.Te.OnHandle,
              detents: [0],
              renderValue: (e) => e.toFixed(0) + " cm",
              step: 1,
            }),
            l.createElement(v.Al, {
              label: "Enable Per-App Refresh Rate",
              name: "/settings/internal/enablePerAppFPS",
            }),
            l.createElement(v.Al, {
              label: "Allow Dashboard auto-launch with SteamVR Home",
              name: "/settings/dashboard/allowDashboardAutoLaunchWithSteamVRHome",
            }),
            l.createElement(v.Al, {
              label: "Skip the Dashboard BG fade during SteamVR Home",
              name: "/settings/dashboard/omitDashboardFadeWithSteamVRHome",
            }),
            l.createElement(v.Al, {
              label: "Haptics on Button Exit",
              name: "/settings/steamvr/noEdgeExitHaptics",
              swapOnOff: !0,
            }),
            l.createElement(v.Al, {
              label: "Force Welcome in Quicklaunch",
              name: "/settings/dashboard/forceWelcomeScreen",
            }),
            !1,
            !1,
            l.createElement(me, null),
            l.createElement(ae, null),
            l.createElement(ee, null),
            l.createElement(ue, null),
            l.createElement(Y, null),
            l.createElement(ie, null),
            this.makeResetToDefaultButton(),
          );
        }
      };
      function me(e) {
        (0, X.mj)(m.Y8);
        return null;
      }
      (de.Name = "internal_settings"), (de = (0, n.Cg)([o.PA], de));
      var pe = r(9118);
      let he = class extends l.Component {
        constructor(e) {
          super(e),
            (this.m_refSelectedButton = l.createRef()),
            (this.state = { bShowModal: !1, rBackgroundUGCItems: [] });
        }
        updateUGCItems() {
          g.HR.GetSettingsUGC().then((e) => {
            null != e.items && this.setState({ rBackgroundUGCItems: e.items });
          });
        }
        componentDidMount() {
          this.updateUGCItems(),
            (this.m_workshopStateChangedCanaryDisposer = (0, s.observe)(
              g.HR,
              "workshopStateChangedCanary",
              this.updateUGCItems,
            ));
        }
        componentWillUnmount() {
          this.m_workshopStateChangedCanaryDisposer(),
            (this.m_workshopStateChangedCanaryDisposer = null);
        }
        setBackground(e) {
          g.HR.systemInfo &&
            e === g.HR.systemInfo.default_background &&
            (e = ""),
            g.HR.SetSettingsValue("/settings/steamvr/background", e),
            this.hideModal();
        }
        hideModal() {
          this.setState({ bShowModal: !1 });
        }
        showModal() {
          this.setState({ bShowModal: !0 });
        }
        componentDidUpdate(e, t) {
          this.state.bShowModal &&
            !t.bShowModal &&
            setTimeout(() => {
              this.m_refSelectedButton.current &&
                this.m_refSelectedButton.current.elem.scrollIntoView({
                  block: "center",
                });
            }, 0);
        }
        get currentBackgroundPath() {
          const e = g.HR.settings.get("/settings/steamvr/background");
          return e || g.HR.systemInfo.default_background;
        }
        render() {
          const e = this.currentBackgroundPath,
            t = [
              {
                file: "#A0A0A0FF",
                tags: "background",
                preview: "/dashboard/images/background_light_thumbnail.png",
                publishedfileid: null,
              },
              {
                file: "#0D0D0DFF",
                tags: "background",
                preview: "/dashboard/images/background_dark_thumbnail.png",
                publishedfileid: null,
              },
              ...this.state.rBackgroundUGCItems.filter(
                (e, t) => e.tags && -1 != e.tags.indexOf("background"),
              ),
            ],
            r = t.find((t) => t.file == e) || null,
            n = r ? r.preview : null;
          return l.createElement(
            l.Fragment,
            null,
            l.createElement(
              v.YO,
              {
                className: "SettingsItem Background",
                title: (0, p.we)("#Settings_Appearance_BackgroundDesc"),
              },
              l.createElement(
                "div",
                { className: "Label" },
                (0, p.we)("#Settings_Appearance_Background"),
              ),
              l.createElement(
                c.$,
                {
                  className: (0, h.FH)("ButtonControl", ["Background", !!n]),
                  style: {
                    "--background-url-value": n ? 'url("' + n + '")' : null,
                  },
                  onClick: this.showModal,
                },
                !n && (0, p.we)("#Settings_Appearance_Background_Select"),
              ),
            ),
            this.state.bShowModal &&
              l.createElement(
                v.bB,
                {
                  onDismissRequested: this.hideModal,
                  className: "Backgrounds",
                  header: (0, p.we)("#Settings_Appearance_Background"),
                  subheader: pe.W.IsSteamAvailable
                    ? null
                    : (0, p.we)("#Settings_Appearance_Background_NoSteam"),
                },
                l.createElement(
                  "div",
                  { className: "BackgroundsGrid" },
                  t.map((t, r) =>
                    l.createElement(c.$, {
                      className: (0, h.FH)("ButtonControl", "Background", [
                        "Selected",
                        t.file == e,
                      ]),
                      style: {
                        "--background-url-value": t.preview
                          ? 'url("' + t.preview + '")'
                          : null,
                      },
                      key: "backgroundelement_" + t.preview,
                      ref: t.file == e ? this.m_refSelectedButton : null,
                      title: t.file.startsWith("#") ? null : t.file,
                      onClick: () => this.setBackground(t.file),
                    }),
                  ),
                ),
              ),
          );
        }
      };
      function ge() {
        return (
          l.useEffect(() => {
            const e = Math.random().toString();
            return (
              g.HR.SetDashboardForceBoundsVisible(m.Wt, e, !0),
              () => g.HR.SetDashboardForceBoundsVisible(m.Wt, e, !1)
            );
          }),
          null
        );
      }
      function ve() {
        const [e, t] = l.useState({ x: 1, y: 1 }),
          r = l.useCallback(() => {
            try {
              t(VRHTML.VRChaperone.GetPlayAreaSize());
            } catch (e) {
              console.log(e);
            }
          }, []);
        return (
          l.useEffect(() => {
            const e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.RegisterForChaperoneChangedEvents(r);
            return null == e ? void 0 : e.unregister;
          }, [r]),
          l.createElement(
            "div",
            { className: "SettingsItem" },
            l.createElement(
              "div",
              { className: "Label" },
              (0, p.we)("#Settings_PlayArea_Size"),
            ),
            l.createElement(
              "div",
              { className: "" },
              `${e.x.toFixed(2)}m x ${e.y.toFixed(2)}m`,
            ),
          )
        );
      }
      (0, n.Cg)([a.o], he.prototype, "updateUGCItems", null),
        (0, n.Cg)([a.o], he.prototype, "setBackground", null),
        (0, n.Cg)([a.o], he.prototype, "hideModal", null),
        (0, n.Cg)([a.o], he.prototype, "showModal", null),
        (0, n.Cg)([s.computed], he.prototype, "currentBackgroundPath", null),
        (he = (0, n.Cg)([o.PA], he));
      let _e = class extends v.yO {
        constructor(e) {
          super(e);
        }
        render() {
          var e;
          if (!this.props.active) return null;
          const t = g.HR.settings.get("/settings/steamvr/background"),
            r = !!t && !t.startsWith("#"),
            n =
              null !== (e = g.HR.settings.get(m.Vv)) && void 0 !== e ? e : 0.7;
          let i;
          return (
            (i =
              n < 0.5
                ? (0, p.we)("#Settings_Chaperone_SuitableForSmall")
                : n < 1
                  ? (0, p.we)("#Settings_Chaperone_SuitableForMedium")
                  : (0, p.we)("#Settings_Chaperone_SuitableForLarge")),
            l.createElement(
              l.Fragment,
              null,
              l.createElement(ge, null),
              l.createElement(ve, null),
              l.createElement(v.xS, {
                name: "/settings/collisionBounds/CollisionBoundsStyle",
                label: (0, p.we)("#Settings_Chaperone_Style"),
                items: [
                  {
                    value: 0,
                    sLabel: (0, p.we)("#Settings_Chaperone_Style_0"),
                  },
                  {
                    value: 1,
                    sLabel: (0, p.we)("#Settings_Chaperone_Style_1"),
                  },
                  {
                    value: 3,
                    sLabel: (0, p.we)("#Settings_Chaperone_Style_3"),
                  },
                  {
                    value: 2,
                    sLabel: (0, p.we)("#Settings_Chaperone_Style_2"),
                  },
                  {
                    value: 4,
                    sLabel: (0, p.we)("#Settings_Chaperone_Style_4"),
                  },
                ],
                subsection: l.createElement(
                  l.Fragment,
                  null,
                  l.createElement(v.RM, {
                    label: (0, p.we)("#Settings_Chaperone_Color"),
                    nameR:
                      "/settings/collisionBounds/CollisionBoundsColorGammaR",
                    nameG:
                      "/settings/collisionBounds/CollisionBoundsColorGammaG",
                    nameB:
                      "/settings/collisionBounds/CollisionBoundsColorGammaB",
                    nameA:
                      "/settings/collisionBounds/CollisionBoundsColorGammaA",
                    minA: 0.3,
                    alphaScale: 255,
                  }),
                  l.createElement(v.Al, {
                    name: "/settings/collisionBounds/CollisionBoundsGroundPerimeterOn",
                    label: (0, p.we)(
                      "#Settings_Appearance_Chaperone_CollisionBoundsGroundPerimeterOn",
                    ),
                    title: (0, p.we)(
                      "#Settings_Appearance_Chaperone_CollisionBoundsGroundPerimeterOnDesc",
                    ),
                  }),
                  l.createElement(v.tE, {
                    min: 0.1,
                    max: 3,
                    detents: [2.4],
                    name: "/settings/collisionBounds/CollisionBoundsWallHeight",
                    label: (0, p.we)("#Settings_Chaperone_WallHeight"),
                    renderValue: (e) => e.toFixed(2),
                    valueStyleVariant: f.Te.OnHandle,
                  }),
                  l.createElement(v.tE, {
                    min: 0.2,
                    max: 1.4,
                    detents: [0.7],
                    name: m.Vv,
                    label: (0, p.we)("#Settings_Chaperone_ActivationDistance"),
                    renderValue: (e) => e.toFixed(2),
                    valueStyleVariant: f.Te.OnHandle,
                  }),
                  l.createElement(
                    "div",
                    { className: "SettingsItemValueLabel" },
                    i,
                  ),
                ),
              }),
              l.createElement(v.RM, {
                label: (0, p.we)("#Settings_Appearance_PlayArea_FloorColor"),
                name: "/settings/steamvr/playAreaColor",
              }),
              l.createElement(he, null),
              r &&
                l.createElement(v.Al, {
                  name: "/settings/steamvr/backgroundUseDomeProjection",
                  label: (0, p.we)("#Settings_Appearance_UseDomeProjection"),
                  title: (0, p.we)(
                    "#Settings_Appearance_UseDomeProjectionDesc",
                  ),
                  onSubsection: l.createElement(
                    l.Fragment,
                    null,
                    l.createElement(v.tE, {
                      min: 1,
                      max: 10,
                      detents: [1.6],
                      name: m.aD,
                      label: (0, p.we)("#Settings_Appearance_DomeCameraHeight"),
                      title: (0, p.we)(
                        "#Settings_Appearance_DomeCameraHeightDesc",
                      ),
                      exponent: 2,
                    }),
                    l.createElement(v.tE, {
                      min: 2,
                      max: 250,
                      specialMaxValue: 0,
                      name: m.WS,
                      label: (0, p.we)("#Settings_Appearance_DomeCameraRadius"),
                      title: (0, p.we)(
                        "#Settings_Appearance_DomeCameraRadiusDesc",
                      ),
                      exponent: 5,
                    }),
                    l.createElement(
                      v.YO,
                      { className: "SettingsItem" },
                      l.createElement(
                        c.$,
                        {
                          className: "ButtonControl",
                          onClick: () => g.HR.ResetSettingsValues(m.aD, m.WS),
                        },
                        (0, p.we)(
                          "#Settings_Appearance_ResetDomeProjectionSettings",
                        ),
                      ),
                    ),
                  ),
                }),
              this.makeResetToDefaultButton(),
            )
          );
        }
      };
      var be;
      (_e.Name = "playarea_settings"), (_e = (0, n.Cg)([o.PA], _e));
      class Se {
        constructor() {
          (this.driverList = []),
            (this.driverNameToIdMap = new Map()),
            Z()
              .get("/drivers/list.json")
              .then((e) => {
                const t = e.data.drivers;
                (this.driverList = t),
                  t.map((e, t) => {
                    this.driverNameToIdMap.set(e.manifest.name, t);
                  });
              }),
            (0, s.makeObservable)(this);
        }
        prettyName(e) {
          return Se.driverPrettyNames[e] || e;
        }
        unBlock(e) {
          g.HR.SetRestartRequired(),
            (this.driverList[
              this.driverNameToIdMap.get(e)
            ].blocked_by_safe_mode = !1);
          let t = { driver: e };
          return Z().post("/drivers/unblock", t);
        }
        setEnabled(e, t) {
          g.HR.SetRestartRequired(),
            (this.driverList[this.driverNameToIdMap.get(e)].enabled = t);
          let r = { driver: e, enable: t };
          return Z().post("/drivers/setenable", r);
        }
        get visibleDriverList() {
          return this.driverList.filter(
            (e) =>
              !e.manifest.resourceOnly &&
              (e.enabled_by_default != e.enabled ||
                !!e.blocked_by_safe_mode ||
                e.show_enable_in_settings),
          );
        }
        get numBlockedDrivers() {
          return this.visibleDriverList.filter((e) => e.blocked_by_safe_mode)
            .length;
        }
        get numDisabledDrivers() {
          return this.visibleDriverList.filter((e) => !e.enabled).length;
        }
        get numUserManuallyDisenabledDrivers() {
          return this.visibleDriverList.filter(
            (e) => e.enabled_by_default != e.enabled,
          ).length;
        }
      }
      (Se.driverPrettyNames = {
        lighthouse: "Lighthouse (Index, Vive, ...)",
        oculus: "Oculus (Rift, Rift S, Quest)",
        oculus_legacy: "Legacy Oculus (DK1, DK2)",
        gamepad: "Gamepad Support",
        null: "No HMD",
        holographic: "Windows MR / Holographic",
        "00natural": "Natural Locomotion",
        "00inputemulator": "OpenVR-InputEmulator",
        "01spacecalibrator": "Space Calibrator",
        aapvr: "Pimax",
        ivry: "iVRy (Phone, PSVR)",
        kinoni: "Kinoni (Phone)",
        amdwvr: "AMD ReLive for VR (Wireless)",
        alvr: "ALVR - Air Light VR (Gear VR, Oculus Go, Quest)",
        VirtualDesktop: "Virtual Desktop Streamer (Quest)",
        vrlink: "Steam Link",
      }),
        (0, n.Cg)([s.observable], Se.prototype, "driverList", void 0),
        (0, n.Cg)([s.computed], Se.prototype, "visibleDriverList", null),
        (0, n.Cg)([s.computed], Se.prototype, "numBlockedDrivers", null),
        (0, n.Cg)([s.computed], Se.prototype, "numDisabledDrivers", null),
        (0, n.Cg)(
          [s.computed],
          Se.prototype,
          "numUserManuallyDisenabledDrivers",
          null,
        );
      const ye = new Se(),
        fe = (0, o.PA)(() =>
          l.createElement(
            c.$,
            {
              className: "ButtonControl",
              title: (0, p.we)("#Settings_Drivers_UnblockAllTip"),
              onClick: () =>
                (0, n.sH)(void 0, void 0, void 0, function* () {
                  const e = ye.driverList
                    .filter((e) => e.blocked_by_safe_mode)
                    .map((e) => e.manifest.name);
                  for (let t = 0; t < e.length; ++t) yield ye.unBlock(e[t]);
                }),
            },
            (0, p.we)("#Settings_Drivers_UnblockAll"),
          ),
        );
      function Re(e) {
        return e.blocked
          ? l.createElement(
              v.YO,
              { className: "SettingsItem", title: e.title },
              l.createElement("div", { className: "Label" }, e.label),
              l.createElement(
                c.$,
                {
                  className: "ButtonControl",
                  title: e.title,
                  onClick: e.onUnblock,
                },
                (0, p.we)("#Settings_Drivers_Unblock"),
              ),
            )
          : l.createElement(v.Al, {
              label: e.label,
              title: e.title,
              onChange: e.onToggleEnable,
              value: e.enabled,
            });
      }
      const we = (0, o.PA)(() =>
        l.createElement(
          l.Fragment,
          null,
          ye.visibleDriverList.map((e) =>
            l.createElement(Re, {
              key: e.manifest.name,
              label: ye.prettyName(e.manifest.name),
              title: e.manifest.name,
              blocked: e.blocked_by_safe_mode,
              enabled: e.enabled,
              onToggleEnable: (t) => {
                return (r = e.manifest.name), (n = t), void ye.setEnabled(r, n);
                var r, n;
              },
              onUnblock: () => {
                return (t = e.manifest.name), void ye.unBlock(t);
                var t;
              },
            }),
          ),
        ),
      );
      let Ce = (be = class extends l.Component {
        constructor(e) {
          super(e);
        }
        render() {
          const e = ye.numBlockedDrivers,
            t = ye.numDisabledDrivers,
            r =
              g.HR.showAdvancedSettings ||
              e ||
              ye.numUserManuallyDisenabledDrivers,
            n = g.HR.routePageSection == be.PAGE_SECTION;
          return l.createElement(
            l.Fragment,
            null,
            !!r &&
              l.createElement(
                "div",
                { className: "SettingsItem Button" },
                l.createElement(
                  c.$,
                  {
                    className: "ButtonControl",
                    onClick: () => g.HR.setRoutePageSection(be.PAGE_SECTION),
                  },
                  (0, p.we)("#Settings_Drivers_ShowDriverManagerUI"),
                  0 != e &&
                    l.createElement(
                      "div",
                      { className: "Badge DriversBlocked" },
                      (0, p.we)("#Settings_Drivers_Number_Blocked", e),
                    ),
                  0 == e &&
                    0 != t &&
                    l.createElement(
                      "div",
                      { className: "Badge DriversDisabled" },
                      (0, p.we)("#Settings_Drivers_Number_Disabled", t),
                    ),
                ),
              ),
            n &&
              ye.driverList &&
              l.createElement(
                v.bB,
                {
                  header: (0, p.we)("#Settings_Drivers_Header"),
                  subheader:
                    0 == e
                      ? null
                      : l.createElement(
                          "div",
                          { className: "BlockedSubheader" },
                          l.createElement(
                            "div",
                            { className: "Label" },
                            (0, p.we)("#Settings_Drivers_SomeBlocked"),
                          ),
                          l.createElement(fe, null),
                        ),
                  onDismissRequested: () => g.HR.setRoutePageSection(null),
                },
                l.createElement(we, null),
              ),
          );
        }
      });
      (Ce.PAGE_SECTION = "drivermanager"), (Ce = be = (0, n.Cg)([o.PA], Ce));
      let Me = class extends l.Component {
        constructor(e) {
          super(e), (this.state = { bShowingModal: !1 });
        }
        show() {
          this.setState({ bShowingModal: !0 });
        }
        hide() {
          this.setState({ bShowingModal: !1 });
        }
        render() {
          const e = !!g.HR.apps,
            t = e
              ? g.HR.apps.filter(
                  (e) =>
                    e.is_dashboard_overlay && e.key != m.Eo && !e.is_internal,
                )
              : [],
            r = t.filter((e) => e.is_autolaunch);
          return l.createElement(
            l.Fragment,
            null,
            l.createElement(
              v.YO,
              {
                className: "SettingsItem",
                title: e ? null : (0, p.we)("#Settings_Loading"),
              },
              l.createElement(
                c.$,
                { className: "ButtonControl", enabled: e, onClick: this.show },
                (0, p.we)("#Settings_ChooseStartupOverlayApps"),
                e &&
                  l.createElement(
                    "div",
                    { className: "Badge" },
                    (0, p.we)("#Settings_Number_Selected", r.length),
                  ),
              ),
            ),
            this.state.bShowingModal &&
              l.createElement(
                v.bB,
                {
                  className: "OverlayAutoLaunchModal",
                  header: (0, p.we)("#Settings_StartTheseOverlayAppsOnLaunch"),
                  onDismissRequested: this.hide,
                },
                t.map((e) =>
                  l.createElement(v.Al, {
                    key: e.key,
                    label: e.name,
                    value: e.is_autolaunch,
                    onChange: (t) =>
                      g.HR.SetAppSettings(e.key, { is_autolaunch: t }),
                  }),
                ),
                !t.length &&
                  l.createElement(
                    "div",
                    { className: "ModalPlaceholder" },
                    (0, p.we)(
                      "#Settings_ChooseStartupOverlayApps_NoOverlayAppsInstalled",
                    ),
                  ),
              ),
          );
        }
      };
      (0, n.Cg)([a.o], Me.prototype, "show", null),
        (0, n.Cg)([a.o], Me.prototype, "hide", null),
        (Me = (0, n.Cg)([o.PA], Me));
      let Ee = class extends v.yO {
        constructor(e) {
          super(e);
        }
        render() {
          return this.props.active
            ? l.createElement(
                l.Fragment,
                null,
                l.createElement(Me, null),
                l.createElement(Ce, null),
                l.createElement("hr", null),
                this.schemaComponents,
                this.makeResetToDefaultButton(),
              )
            : null;
        }
      };
      (Ee.Name = "startupshutdown_settings"), (Ee = (0, n.Cg)([o.PA], Ee));
      let Te = class extends v.yO {
        constructor(e) {
          super(e);
        }
        render() {
          return this.props.active
            ? l.createElement(
                l.Fragment,
                null,
                l.createElement(v.Al, {
                  label: (0, p.we)("#Settings_EyeTracking_Enable"),
                  name: "/settings/steamvr/allowEyeTracking",
                  onSubsection: l.createElement(
                    l.Fragment,
                    null,
                    l.createElement(
                      "div",
                      { className: "Label Title" },
                      (0, p.we)(
                        "#Settings_EyeTracking_SystemAccessibility_Header",
                      ),
                    ),
                    l.createElement("hr", null),
                    l.createElement(v.Al, {
                      label: (0, p.we)(
                        "#Settings_EyeTracking_PupilCompensation",
                      ),
                      name: "/settings/steamvr/gazeDepEyeToHeadEnable",
                      subsection: l.createElement(
                        l.Fragment,
                        null,
                        l.createElement(
                          "div",
                          { className: "SettingsItemValueInfo Right" },
                          (0, p.we)(
                            "#Settings_EyeTracking_PupilCompensation_Description",
                          ),
                        ),
                      ),
                    }),
                    l.createElement(v.Al, {
                      label: (0, p.we)(
                        "#Settings_Advanced_FoveatedSharpening_Header",
                      ),
                      name: "/settings/steamvr/sharpening",
                      subsection: l.createElement(
                        l.Fragment,
                        null,
                        l.createElement(
                          "div",
                          { className: "SettingsItemValueInfo Right" },
                          (0, p.we)(
                            "#Settings_Advanced_FoveatedSharpening_Description",
                          ),
                        ),
                      ),
                    }),
                    l.createElement(v.Al, {
                      label: (0, p.we)(
                        "#Settings_EyeTracking_GazeAwareReprojection",
                      ),
                      name: "/settings/steamvr/gazeDepReprojectEnable",
                      visibility: v.Z3.Advanced,
                      subsection: l.createElement(
                        l.Fragment,
                        null,
                        l.createElement(
                          "div",
                          { className: "SettingsItemValueInfo Right" },
                          (0, p.we)(
                            "#Settings_EyeTracking_GazeAwareReprojection_Description",
                          ),
                        ),
                      ),
                    }),
                  ),
                }),
              )
            : null;
        }
      };
      (Te.Name = "eyetracking_settings"), (Te = (0, n.Cg)([o.PA], Te));
      var De = r(4963),
        Be = r(795);
      let Ve = class extends v.yO {
        constructor(e) {
          super(e);
        }
        render() {
          var e;
          if (!this.props.active) return null;
          const t =
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VRProperties.GetBoolProperty(
                  "/user/head",
                  i.fD.SupportsInHMDRoomSetup_Bool,
                );
          return l.createElement(
            l.Fragment,
            null,
            this.schemaComponents,
            !I.SW.m_bIsLinkClient &&
              t &&
              l.createElement(v.Al, {
                label: "Debug Region Coloring",
                visibility: v.Z3.Advanced,
                value:
                  null !==
                    (e = g.HR.settings.get(
                      "/settings/driver_vrlink/debugRegionColoring",
                    )) &&
                  void 0 !== e &&
                  e,
                onChange: (e) =>
                  VRHTML.VRSettings.Set(
                    "driver_vrlink",
                    "debugRegionColoring",
                    e,
                  ),
              }),
            this.makeResetToDefaultButton(),
          );
        }
      };
      (Ve.Name = "driver_vrlink"), (Ve = (0, n.Cg)([o.PA], Ve));
      var Ie,
        Ae = r(3109),
        Oe = r(7727);
      const ke = "vr_settings_top_center";
      let Le = class extends l.Component {
        constructor(e) {
          super(e),
            (this.state = {
              bRestartAnimation: !1,
              bShowSteamVRRestartRequired: !1,
              bShowAppRestartRequired: !1,
            });
        }
        get enabled() {
          const e = (0, i.R$)() == i.OH.Overlay;
          return this.props.standalonePanel == e;
        }
        onExitApp() {
          null === i.Ay || void 0 === i.Ay || i.Ay.QuitSceneApp();
        }
        onRestartSteamVR() {
          i.Ay
            ? i.Ay.RestartSteamVR(!1)
            : window.open("vrmonitor://restartsystem");
        }
        onRestartRequired() {
          this.setState(
            { bShowSteamVRRestartRequired: !0, bRestartAnimation: !0 },
            () => {
              setTimeout(() => {
                this.setState({ bRestartAnimation: !1 });
              }, 10);
            },
          );
        }
        onAppRestartRequired(e) {
          this.setState(
            { bShowAppRestartRequired: !e, bRestartAnimation: !0 },
            () => {
              setTimeout(() => {
                this.setState({ bRestartAnimation: !1 });
              }, 10);
            },
          );
        }
        componentDidMount() {
          this.enabled &&
            ((g.HR.onRestartRequired = this.onRestartRequired),
            (g.HR.onAppRestartRequired = this.onAppRestartRequired));
        }
        componentWillUnmount() {
          this.enabled &&
            (g.HR.onRestartRequired == this.onRestartRequired &&
              (g.HR.onRestartRequired = null),
            g.HR.onAppRestartRequired == this.onAppRestartRequired &&
              (g.HR.onAppRestartRequired = null));
        }
        render() {
          var e;
          if (!this.enabled) return null;
          let t = null;
          return (
            this.state.bShowSteamVRRestartRequired
              ? (t = l.createElement(
                  c.W,
                  {
                    className:
                      "SettingsRestartRequiredBanner Shown" +
                      (this.state.bRestartAnimation ? " ReShimmer" : ""),
                  },
                  l.createElement(
                    "div",
                    { className: "Label" },
                    (0, p.we)("#Settings_MustRestart_Description"),
                  ),
                  l.createElement(
                    c.$,
                    {
                      className: "ButtonControl",
                      onClick: this.onRestartSteamVR,
                    },
                    (0, p.we)("#Settings_MustRestart_RestartSteamVR_Button"),
                  ),
                ))
              : this.state.bShowAppRestartRequired
                ? (t = l.createElement(
                    c.W,
                    {
                      className:
                        "SettingsRestartRequiredBanner Shown" +
                        (this.state.bRestartAnimation ? " ReShimmer" : ""),
                    },
                    l.createElement(
                      "div",
                      { className: "Label" },
                      (0, p.we)("#Settings_MustQuitApp_Description"),
                    ),
                    l.createElement(
                      c.$,
                      { className: "ButtonControl", onClick: this.onExitApp },
                      (0, p.we)("#Settings_MustQuitApp_QuitCurrentGame_Button"),
                    ),
                  ))
                : (null === i.Ay || void 0 === i.Ay ? void 0 : i.Ay.HasHMD()) ||
                  (t = l.createElement(
                    c.W,
                    {
                      className:
                        "SettingsRestartRequiredBanner Shown" +
                        (this.state.bRestartAnimation ? " ReShimmer" : ""),
                    },
                    l.createElement(
                      "div",
                      { className: "Label" },
                      (0, p.we)("#Settings_AdditionalSettingsAvailable"),
                    ),
                  )),
            this.props.standalonePanel
              ? null === t
                ? null
                : l.createElement(
                    i.dL,
                    { parent_id: ke, translation: { y: 0.2, z: -0.05 } },
                    l.createElement(
                      i.Zk,
                      {
                        debug_name: "settingsrestartbanner",
                        curvature_origin_id:
                          null === (e = this.context.frame) || void 0 === e
                            ? void 0
                            : e.curvature.curvatureTransformOriginID,
                        origin: i.Oi.BottomCenter,
                        interactive: !0,
                        meters_per_pixel: m.iZ,
                        reflect: 0.1,
                        frame_resize_scale_factor: 1,
                      },
                      t,
                    ),
                  )
              : t
          );
        }
      };
      (Le.contextType = Oe.t),
        (0, n.Cg)([a.o], Le.prototype, "onExitApp", null),
        (0, n.Cg)([a.o], Le.prototype, "onRestartSteamVR", null),
        (0, n.Cg)([a.o], Le.prototype, "onRestartRequired", null),
        (0, n.Cg)([a.o], Le.prototype, "onAppRestartRequired", null),
        (Le = (0, n.Cg)([o.PA], Le));
      let He = (Ie = class extends l.Component {
        constructor(e) {
          super(e),
            (this.m_refSettingsPageContainer = l.createRef()),
            (this.m_routeObservingAutorunDisposer = null),
            (this.state = { sActiveSettingSection: null });
        }
        componentDidMount() {
          (this.m_routeObservingAutorunDisposer = (0, s.autorun)(() => {
            g.HR.routePage
              ? this.setState({ sActiveSettingSection: g.HR.routePage })
              : g.HR.setRoutePage(
                  g.HR.settingsSchema.filter(Ie.shouldShowSection)[0]
                    .controller,
                );
          })),
            this.ListenForHomeEnabledChanges();
        }
        componentDidUpdate(e, t) {
          this.state.sActiveSettingSection !== t.sActiveSettingSection &&
            this.m_refSettingsPageContainer.current &&
            (this.m_refSettingsPageContainer.current.scrollTop = 0);
        }
        componentWillUnmount() {
          var e;
          null === (e = this.m_routeObservingAutorunDisposer) ||
            void 0 === e ||
            e.call(this),
            (this.m_routeObservingAutorunDisposer = null);
        }
        render() {
          const e = !g.HR.connected || !g.HR.settingsSchema;
          let t = null;
          e
            ? "desktop-window" == this.props.env &&
              (t = l.createElement(
                "div",
                { className: "Label" },
                (0, p.we)("#Settings_Loading"),
              ))
            : (t = this.renderSettingsPanelContents());
          let r = null;
          return (
            (r =
              "frame-page" == this.props.env
                ? l.createElement(
                    Be.P9,
                    { summonOverlayKey: m.Wt, ref: this.props.pageRef },
                    t && l.createElement(Le, { standalonePanel: !0 }),
                    t &&
                      l.createElement(
                        Ae.a,
                        {
                          visible: !0,
                          debugName: "settings",
                          additionalClassNames: "Settings",
                        },
                        l.createElement(i.Ci, {
                          id: ke,
                          location: i.Oi.TopCenter,
                        }),
                        t,
                      ),
                  )
                : t),
            l.createElement(
              "div",
              {
                className: (0, h.FH)(
                  "SettingsMain",
                  "desktop-window" == this.props.env ? "Desktop" : "Overlay",
                  ["Loading", e],
                ),
              },
              r,
            )
          );
        }
        renderSettingsPanelContents() {
          const e = g.HR.settingsSchema.filter(Ie.shouldShowSection);
          return l.createElement(
            c.W,
            { className: "SettingsMainPanel" },
            l.createElement(Le, { standalonePanel: !1 }),
            l.createElement(
              "div",
              { className: "SettingsSidebarPageModalContainer" },
              l.createElement(
                u.vw,
                { className: "SettingsSidebarPageContainer" },
                l.createElement(
                  "div",
                  { className: (0, h.FH)("SettingsSidebar") },
                  e.map(this.renderSectionButton),
                  l.createElement("div", { className: "Spacer" }),
                  l.createElement(
                    "div",
                    {
                      className: (0, h.FH)(
                        "Bottom",
                        "AdvancedSettingsToggle",
                        ["Fadable", !g.HR.showAdvancedSettings],
                        ["Active", g.HR.showAdvancedSettings],
                      ),
                    },
                    l.createElement(v.Al, {
                      label: (0, p.we)("#Settings_AdvancedSettings"),
                      value: g.HR.showAdvancedSettings,
                      onChange: (e) => (g.HR.showAdvancedSettings = e),
                      onLabel: (0, p.we)("#Settings_Show"),
                      offLabel: (0, p.we)("#Settings_Hide"),
                    }),
                  ),
                ),
                l.createElement(
                  d.M,
                  {
                    scrollDirection: d.D.Vertical,
                    alwaysShowScrollbars: !0,
                    className: (0, h.FH)("SettingsPageContainer"),
                    ref: this.m_refSettingsPageContainer,
                  },
                  e.map(this.renderSectionPage),
                ),
              ),
            ),
          );
        }
        renderSectionButton(e) {
          let t = ["SettingsSidebarButton"];
          return (
            this.state.sActiveSettingSection === e.controller &&
              t.push("Active"),
            l.createElement(
              c.$,
              {
                key: e.title,
                className: t.join(" "),
                onClick: () => g.HR.setRoutePage(e.controller),
                releaseSoundEffect: De.j.PagedSettingsNavigation,
              },
              l.createElement(
                "div",
                { className: "Label" },
                (0, p.we)(e.title),
              ),
            )
          );
        }
        renderSectionPage(e) {
          const t = e.controller ? e.controller : "generic",
            r = this.state.sActiveSettingSection === e.controller,
            n =
              [b, Ee, _e, U.a5, D, Te, q, O, H, z, de, B.$, Ve].find(
                (e) => e.Name === t,
              ) || v.yO;
          return l.createElement(n, { key: e.title, section: e, active: r });
        }
        static shouldShowSection(e) {
          if (
            e.internal_only &&
            !g.HR.showInternalSettings &&
            !g.HR.settings.get(Ie.k_sShowInternalSettings)
          )
            return !1;
          if (
            e.controller == H.Name &&
            (0, i.R$)() == i.OH.Overlay &&
            !g.HR.settings.get(Ie.k_sForceShowOpenXRSettings)
          )
            return !1;
          if (
            !e.show_without_hmd &&
            !(null === i.Ay || void 0 === i.Ay ? void 0 : i.Ay.HasHMD())
          )
            return !1;
          if (!e.show_without_hmd && e.driver) {
            const t = i.Ay.VRProperties.GetStringProperty(
              "/user/head",
              i.fD.ActualTrackingSystemName_String,
            );
            if (t && e.driver != t) return !1;
          }
          if (e.desktop_only && (0, i.R$)() == i.OH.Overlay) return !1;
          let t =
            e.controller == O.Name &&
            g.HR.settings.get(Ie.k_sShowDashboardSettings);
          if (e.advanced_only && !g.HR.showAdvancedSettings && !t) return !1;
          if (
            e.controller == D.Name &&
            !(null === i.Ay || void 0 === i.Ay
              ? void 0
              : i.Ay.VRProperties.GetBoolProperty(
                  "/user/head",
                  i.fD.HasCamera_Bool,
                ))
          )
            return !1;
          if ("internet_settings" == e.controller) return !1;
          if (e.controller == b.Name) {
            if (!(g.HR.systemInfo && g.HR.systemInfo.os_type >= 0)) return !1;
          }
          return (
            !(!i.Ay && e.web_helper_only) &&
            !(
              e.controller == Te.Name &&
              !(null === i.Ay || void 0 === i.Ay
                ? void 0
                : i.Ay.VRProperties.GetBoolProperty(
                    "/user/head",
                    i.fD.HasEyeTracker_Bool,
                  ))
            )
          );
        }
        ListenForHomeEnabledChanges() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            if ((0, i.R$)() != i.OH.Overlay) return;
            let e = yield g.HR.GetSettingsValue(m.qf);
            i.Ay &&
              (0, s.autorun)(() => {
                let t = g.HR.settings.get(m.qf);
                if (void 0 !== t && t != e) {
                  if (t && !i.Ay.VRApplications.GetSceneApplicationKey())
                    try {
                      null === i.Ay ||
                        void 0 === i.Ay ||
                        i.Ay.VRApplications.LaunchApplication(m.np);
                    } catch (e) {
                      console.warn("Cannot launch application", m.np, e);
                    }
                  else
                    t ||
                      i.Ay.VRApplications.GetSceneApplicationKey() != m.np ||
                      i.Ay.QuitSceneApp();
                  e = t;
                }
              });
          });
        }
      });
      (He.k_sForceShowOpenXRSettings =
        "/settings/steamvr/forceShowOpenXRSettings"),
        (He.k_sShowInternalSettings = "/settings/steamvr/showInternalSettings"),
        (He.k_sShowDashboardSettings =
          "/settings/steamvr/showDashboardSettings"),
        (0, n.Cg)([a.o], He.prototype, "renderSectionButton", null),
        (0, n.Cg)([a.o], He.prototype, "renderSectionPage", null),
        (He = Ie = (0, n.Cg)([o.PA], He));
    },
    2928: (e, t, r) => {
      "use strict";
      r.d(t, { $: () => U, o: () => x });
      var n = r(1635),
        i = r(6540),
        a = r(3236),
        s = r(1370),
        o = r(3714),
        l = r(1333),
        c = r(3720),
        u = r(6138),
        d = r(6090),
        m = r(9118),
        p = r(5802),
        h = r(7813),
        g = r(6646),
        v = r(1139);
      let _ = class extends i.Component {
        constructor(e) {
          super(e), (this.state = { deviceStatus: null });
        }
        get trackerConfig() {
          return p.B$.GetTrackerBinding(this.props.trackerPath);
        }
        OnTrackerRoleChanged(e) {
          p.B$.SetTrackerBinding(
            this.props.trackerPath,
            e,
            this.trackerConfig.controller_role,
          );
        }
        OnControllerRoleChanged(e) {
          p.B$.SetTrackerBinding(
            this.props.trackerPath,
            this.trackerConfig.role,
            e,
          );
        }
        BuzzTracker() {
          p.B$.PulseHaptics(this.trackerConfig.device_path_handle);
        }
        get deviceInfo() {
          return m.W.GetDeviceInfo(this.props.trackerPath);
        }
        IsConnected() {
          return !(!this.deviceInfo || !this.deviceInfo.is_connected);
        }
        IsIdentifiable() {
          return !(!this.IsConnected() || !this.deviceInfo.is_identifiable);
        }
        render() {
          let e = [];
          if ("TrackerRole_Handed" == this.trackerConfig.role) {
            e = [
              "TrackedControllerRole_Invalid",
              "TrackedControllerRole_LeftHand",
              "TrackedControllerRole_RightHand",
            ].map((e) => ({ value: e, sLabel: (0, o.we)("#" + e) }));
          }
          const t = this.trackerConfig.device_path_string;
          let r = t;
          const n = "vive_tracker";
          r.includes(n) && (r = r.substring(r.indexOf(n) + 12, r.length));
          let a = null;
          return (
            this.IsConnected()
              ? this.IsIdentifiable() ||
                (a = (0, o.we)(
                  "#Settings_ViveTracker_Identify_NotIdentifiable",
                ))
              : (a = (0, o.we)("#Settings_ViveTracker_Identify_NotConnected")),
            i.createElement(
              c.YO,
              { className: "SettingsItem TrackerEntry" },
              i.createElement(
                "div",
                { className: "Label", title: t },
                i.createElement("span", null, r),
                i.createElement("div", {
                  title: (0, o.we)(
                    this.IsConnected()
                      ? "#Settings_ViveTracker_Connected"
                      : "#Settings_ViveTracker_Disconnected",
                  ),
                  className: (0, v.FH)(
                    "TrackerConnectionIndicator",
                    ["Connected", g.X.connected && this.IsConnected()],
                    ["Disconnected", g.X.connected && !this.IsConnected()],
                  ),
                }),
              ),
              i.createElement(
                "div",
                { className: (0, v.FH)("SubsectionStem") },
                i.createElement(
                  c.YO,
                  { title: a },
                  i.createElement(
                    u.$,
                    {
                      className: "ButtonControl",
                      enabled: this.IsIdentifiable(),
                      onClick: this.BuzzTracker,
                    },
                    (0, o.we)("#TrackerEditor_BuzzTracker"),
                  ),
                ),
              ),
              i.createElement(
                "div",
                { className: "Subsection WithStem" },
                i.createElement(c.xS, {
                  label: (0, o.we)("#Settings_ViveTracker_Role"),
                  items: this.props.validTrackerRoles.map((e) => ({
                    value: e,
                    sLabel: (0, o.we)("#" + e),
                  })),
                  value: this.trackerConfig.role,
                  onChange: this.OnTrackerRoleChanged,
                }),
                e.length > 0 &&
                  i.createElement(c.xS, {
                    label: (0, o.we)("#Settings_ViveTracker_Hand"),
                    items: e,
                    value: this.trackerConfig.controller_role,
                    onChange: this.OnControllerRoleChanged,
                  }),
              ),
            )
          );
        }
      };
      (0, n.Cg)([h.computed], _.prototype, "trackerConfig", null),
        (0, n.Cg)([a.o], _.prototype, "OnTrackerRoleChanged", null),
        (0, n.Cg)([a.o], _.prototype, "OnControllerRoleChanged", null),
        (0, n.Cg)([a.o], _.prototype, "BuzzTracker", null),
        (0, n.Cg)([h.computed], _.prototype, "deviceInfo", null),
        (_ = (0, n.Cg)([s.PA], _));
      let b = class extends i.Component {
        constructor(e) {
          super(e), (this.m_nGetInputStateIntervalHandle = 0);
        }
        componentDidMount() {
          (this.m_nGetInputStateIntervalHandle = window.setInterval(
            () => m.W.GetInputState(),
            2e3,
          )),
            m.W.GetInputState();
        }
        componentWillUnmount() {
          window.clearInterval(this.m_nGetInputStateIntervalHandle);
        }
        render() {
          let e,
            t = p.B$.TrackerBindings;
          return (
            t &&
              t.trackers &&
              (e = t.trackers.map((e, r) =>
                i.createElement(_, {
                  key: r,
                  trackerPath: e.device_path_string,
                  validTrackerRoles: t.valid_roles,
                }),
              )),
            i.createElement("div", { className: "TrackerEditorModal" }, e)
          );
        }
      };
      b = (0, n.Cg)([s.PA], b);
      class S extends i.Component {
        constructor(e) {
          super(e),
            (this.m_mailbox = new d._n()),
            (this.m_deviceDetails = null),
            (this.m_controllerType = null),
            (this.m_thumbstickSourceName = null),
            (this.m_lastX = 0),
            (this.m_lastY = 0),
            (this.m_addedPoint = !1),
            (this.m_edgeValues = []),
            (this.m_deviceDetails = m.W.GetDeviceInfo(this.props.devicePath)),
            (this.m_controllerType = m.W.GetControllerTypeInfo(
              this.m_deviceDetails.controller_type,
            ));
          for (let e in this.m_controllerType.input_source) {
            if ("joystick" == this.m_controllerType.input_source[e].type) {
              this.m_thumbstickSourceName = e;
              break;
            }
          }
          this.m_mailbox.RegisterHandler(
            "update_component_states",
            this.OnUpdateComponentStates,
          ),
            this.m_mailbox.Init("calibrate_thumbstick").then(() => {
              if (this.m_thumbstickSourceName) {
                let e = {
                  type: "request_input_state_updates",
                  device_path: this.props.devicePath,
                  returnAddress: this.m_mailbox.name,
                };
                this.m_mailbox.SendMessage(d.mX, e);
              }
            }),
            (this.state = { edgeValue: [] });
        }
        componentWillUnmount() {
          let e = {
            type: "cancel_input_state_updates",
            device_path: this.props.devicePath,
            returnAddress: this.m_mailbox.name,
          };
          this.m_mailbox.SendMessage(d.mX, e);
        }
        OnUpdateComponentStates(e) {
          let t = !1;
          for (let r in e.components) {
            let n = e.components[r];
            r == this.m_thumbstickSourceName + "/x"
              ? ((this.m_lastX = n), (t = !0))
              : r == this.m_thumbstickSourceName + "/y" &&
                ((this.m_lastY = n), (t = !0));
          }
          if (t) {
            let e = Math.sqrt(
              this.m_lastX * this.m_lastX + this.m_lastY * this.m_lastY,
            );
            this.m_addedPoint
              ? e < 0.2 && (this.m_addedPoint = !1)
              : e > 0.95 &&
                ((this.m_addedPoint = !0),
                this.m_edgeValues.push({ x: this.m_lastX, y: this.m_lastY }),
                this.setState({ edgeValue: this.m_edgeValues }));
          }
        }
        OnCancel() {
          this.props.fnCloseCalibrator();
        }
        ComputeCalibration() {
          if (this.m_edgeValues.length < 5) return null;
          {
            let e = [];
            for (let t of this.m_edgeValues) {
              let r = -Math.atan2(t.x, t.y);
              e.push((180 * r) / Math.PI);
            }
            return e.sort((e, t) => e - t), e[Math.floor(e.length / 2)];
          }
        }
        OnConfirm() {
          this.props.fnUpdateThumbstickCalibration(
            this.props.devicePath,
            this.ComputeCalibration(),
          ),
            this.props.fnCloseCalibrator();
        }
        render() {
          const e = 60;
          let t = [],
            r = 0;
          for (let n of this.state.edgeValue) {
            let a = n.x * e + e,
              s = -n.y * e + e;
            t.push(
              i.createElement("polyline", {
                key: r++,
                points: "60,60 " + a.toFixed(0) + "," + s.toFixed(0),
                strokeWidth: "0.1rem",
                fill: "transparent",
              }),
            );
          }
          let n = this.ComputeCalibration(),
            a = null;
          return (
            (a = n
              ? (0, o.we)("#Settings_General_InviteMoreSamples", n.toFixed(2))
              : (0, o.we)(
                  "#Settings_General_NotEnoughSamples",
                  5 - this.m_edgeValues.length,
                )),
            i.createElement(
              c.bB,
              {
                onDismissRequested: this.props.fnCloseCalibrator,
                header: (0, o.we)("#Settings_General_CalibrateThumbstick"),
                footer: i.createElement(
                  "div",
                  { className: "SettingsItem ButtonRow" },
                  i.createElement(
                    u.$,
                    {
                      key: "cancel",
                      className: "ButtonControl",
                      onClick: this.OnCancel,
                    },
                    (0, o.we)("#Settings_General_Cancel"),
                  ),
                  i.createElement("div", { className: "Spacer" }),
                  i.createElement(
                    u.$,
                    {
                      key: "confirm",
                      className: "ButtonControl",
                      enabled: !!n,
                      onClick: this.OnConfirm,
                    },
                    (0, o.we)("#Settings_General_Confirm"),
                  ),
                ),
              },
              i.createElement(
                "div",
                { className: "ThumbstickCalibrateBody" },
                i.createElement(
                  "div",
                  { className: "ThumbstickContainer" },
                  i.createElement(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: [0, 0, 120, 120].join(" "),
                    },
                    i.createElement("circle", {
                      cx: e,
                      cy: e,
                      r: e,
                      strokeWidth: "0.1rem",
                    }),
                    t,
                  ),
                ),
                i.createElement(
                  "div",
                  { className: "Label ThumbstickAngle" },
                  a,
                ),
              ),
            )
          );
        }
      }
      (0, n.Cg)([a.o], S.prototype, "OnUpdateComponentStates", null),
        (0, n.Cg)([a.o], S.prototype, "OnCancel", null),
        (0, n.Cg)([a.o], S.prototype, "OnConfirm", null);
      class y extends i.Component {
        constructor(e) {
          if (
            (super(e),
            (this.m_mailbox = new d._n()),
            this.m_mailbox.Init("legacy_debugger"),
            this.m_mailbox.RegisterHandler(
              "legacy_input_frame",
              this.OnLegacyInputFrame,
            ),
            VRHTML)
          ) {
            let e = VRHTML.VRApplications.GetCurrentSceneProcessId();
            VRHTML.VRPathProperties.SetInt32PathProperty(
              "/legacy_debugger_pid",
              e,
            );
          }
          this.state = { currentState: null };
        }
        componentWillUnmount() {
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VRPathProperties.SetInt32PathProperty(
              "/legacy_debugger_pid",
              0,
            );
        }
        OnLegacyInputFrame(e) {
          this.setState({ currentState: e });
        }
        renderController(e) {
          let t = [];
          if (
            (t.push(
              i.createElement(
                "div",
                { className: "Label LegacyDebuggerGroup" },
                "Pressed:",
              ),
            ),
            e.pressed)
          )
            for (let r of e.pressed)
              t.push(
                i.createElement(
                  "div",
                  { className: "Label LegacyDebuggerButtonName" },
                  r,
                ),
              );
          else
            t.push(
              i.createElement(
                "div",
                { className: "Label LegacyDebuggerButtonName" },
                "None",
              ),
            );
          if (
            (t.push(
              i.createElement(
                "div",
                { className: "Label LegacyDebuggerGroup" },
                "Touched:",
              ),
            ),
            e.touched)
          )
            for (let r of e.touched)
              t.push(
                i.createElement(
                  "div",
                  { className: "Label LegacyDebuggerButtonName" },
                  r,
                ),
              );
          else
            t.push(
              i.createElement(
                "div",
                { className: "Label LegacyDebuggerButtonName" },
                "None",
              ),
            );
          if (
            (t.push(
              i.createElement(
                "div",
                { className: "Label LegacyDebuggerGroup" },
                "Supported:",
              ),
            ),
            e.supported_buttons)
          )
            for (let r of e.supported_buttons)
              t.push(
                i.createElement(
                  "div",
                  { className: "Label LegacyDebuggerButtonName" },
                  r,
                ),
              );
          else
            t.push(
              i.createElement(
                "div",
                { className: "Label LegacyDebuggerButtonName" },
                "None",
              ),
            );
          t.push(
            i.createElement(
              "div",
              { className: "Label LegacyDebuggerGroup" },
              "Axis:",
            ),
          );
          for (let r of e.axis)
            t.push(
              i.createElement(
                "div",
                { className: "Label LegacyDebuggerButtonName" },
                "X: ",
                r.x.toFixed(2),
                " Y: ",
                r.y.toFixed(2),
              ),
            );
          return t;
        }
        render() {
          return this.state.currentState
            ? i.createElement(
                "div",
                { className: "FlexRow" },
                i.createElement(
                  "div",
                  { className: "FlexColumn LegacyDebuggerController" },
                  i.createElement("div", { className: "Label" }, "Left"),
                  this.renderController(this.state.currentState.left),
                ),
                i.createElement(
                  "div",
                  { className: "FlexColumn LegacyDebuggerController" },
                  i.createElement("div", { className: "Label" }, "Right"),
                  this.renderController(this.state.currentState.right),
                ),
                i.createElement(
                  "div",
                  { className: "FlexColumn LegacyDebuggerController" },
                  i.createElement("div", { className: "Label" }, "HMD"),
                  this.renderController(this.state.currentState.hmd),
                ),
              )
            : i.createElement(
                "div",
                { className: "Label" },
                (0, o.we)("#LegacyDebugger_NoApp"),
              );
        }
      }
      (0, n.Cg)([a.o], y.prototype, "OnLegacyInputFrame", null);
      class f extends i.Component {
        constructor(e) {
          super(e);
        }
        render() {
          return i.createElement(
            "div",
            { className: "FlexRowWithWrap" },
            i.createElement(
              "div",
              { className: "FlexFullWidthRowCentered LegacyDebuggerWrapper" },
              i.createElement(y, null),
            ),
          );
        }
      }
      var R,
        w = r(7960),
        C = r(4493);
      !(function (e) {
        (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
      })(R || (R = {}));
      class M extends i.Component {
        constructor(e) {
          super(e),
            (this.m_containerRef = null),
            (this.m_nameRef = null),
            (this.m_svgRef = null),
            (this.m_containerRef = i.createRef()),
            (this.m_nameRef = i.createRef()),
            (this.m_svgRef = i.createRef()),
            (this.state = {
              click: !1,
              touch: !1,
              x: 0,
              y: 0,
              value: 0,
              force: 0,
            });
        }
        componentDidMount() {
          this.RegisterForSourceUpdates();
        }
        componentWillUnmount() {
          this.UnregisterForSourceUpdates();
        }
        componentWillUpdate() {
          this.RegisterForSourceUpdates();
        }
        GetHeightEstimate() {
          return 1;
        }
        RegisterForSourceUpdates() {
          this.props.source.click &&
            this.props.visualizer.RegisterSourceVisualizer(
              this.props.devicePath,
              this.props.sourcePath + "/click",
              this.ComponentUpdated,
            ),
            this.props.source.touch &&
              this.props.visualizer.RegisterSourceVisualizer(
                this.props.devicePath,
                this.props.sourcePath + "/touch",
                this.ComponentUpdated,
              ),
            this.props.source.value &&
              this.props.visualizer.RegisterSourceVisualizer(
                this.props.devicePath,
                this.props.sourcePath + "/value",
                this.ComponentUpdated,
              ),
            ("joystick" != this.props.source.type &&
              "trackpad" != this.props.source.type) ||
              (this.props.visualizer.RegisterSourceVisualizer(
                this.props.devicePath,
                this.props.sourcePath + "/x",
                this.ComponentUpdated,
              ),
              this.props.visualizer.RegisterSourceVisualizer(
                this.props.devicePath,
                this.props.sourcePath + "/y",
                this.ComponentUpdated,
              )),
            this.props.source.force &&
              this.props.visualizer.RegisterSourceVisualizer(
                this.props.devicePath,
                this.props.sourcePath + "/force",
                this.ComponentUpdated,
              );
        }
        UnregisterForSourceUpdates() {
          this.props.source.click &&
            this.props.visualizer.UnregisterSourceVisualizer(
              this.props.devicePath,
              this.props.sourcePath + "/click",
            ),
            this.props.source.touch &&
              this.props.visualizer.UnregisterSourceVisualizer(
                this.props.devicePath,
                this.props.sourcePath + "/touch",
              ),
            this.props.source.value &&
              this.props.visualizer.UnregisterSourceVisualizer(
                this.props.devicePath,
                this.props.sourcePath + "/value",
              ),
            ("joystick" != this.props.source.type &&
              "trackpad" != this.props.source.type) ||
              (this.props.visualizer.UnregisterSourceVisualizer(
                this.props.devicePath,
                this.props.sourcePath,
              ),
              this.props.visualizer.UnregisterSourceVisualizer(
                this.props.devicePath,
                this.props.sourcePath,
              )),
            this.props.source.force &&
              this.props.visualizer.UnregisterSourceVisualizer(
                this.props.devicePath,
                this.props.sourcePath + "/force",
              );
        }
        ComponentUpdated(e, t, r) {
          e == this.props.devicePath &&
            (t == this.props.sourcePath + "/click" &&
              this.setState({ click: r }),
            t == this.props.sourcePath + "/touch" &&
              this.setState({ touch: r }),
            t == this.props.sourcePath + "/x" && this.setState({ x: r }),
            t == this.props.sourcePath + "/y" && this.setState({ y: r }),
            t == this.props.sourcePath + "/value" &&
              this.setState({ value: r }),
            t == this.props.sourcePath + "/force" &&
              this.setState({ force: r }));
        }
        GetPositionStyle() {
          let e;
          return (
            (e =
              "/user/hand/left" == this.props.devicePath
                ? this.props.imageScale.right -
                  this.props.imageScale.scale *
                    this.props.source.binding_image_point[0]
                : this.props.imageScale.left +
                  this.props.imageScale.scale *
                    this.props.source.binding_image_point[0]),
            {
              position: "absolute",
              left: e,
              top:
                this.props.imageScale.scale *
                  this.props.source.binding_image_point[1] +
                this.props.imageScale.top,
            }
          );
        }
        GetPosition() {
          let e;
          return (
            (e =
              "/user/hand/left" == this.props.devicePath
                ? this.props.imageScale.right -
                  this.props.imageScale.scale *
                    this.props.source.binding_image_point[0]
                : this.props.imageScale.left +
                  this.props.imageScale.scale *
                    this.props.source.binding_image_point[0]),
            {
              x: e,
              y:
                this.props.imageScale.scale *
                  this.props.source.binding_image_point[1] +
                this.props.imageScale.top,
            }
          );
        }
        renderHeaderVisualization() {
          return this.props.source.touch || this.props.source.click
            ? this.renderTouchClickVisualization()
            : null;
        }
        renderBodyVisualization() {
          return null;
        }
        renderTouchClickVisualization() {
          let e = "";
          return (
            this.state.click && (e += " Clicked"),
            this.state.touch && (e += " Touched"),
            i.createElement(
              "div",
              { className: "VisualizerButtonContainer" },
              i.createElement("div", { className: "VisualizerButtonBase" + e }),
            )
          );
        }
        renderBar(e, t, r) {
          let n = { width: String(100 * r) + "%" };
          return i.createElement(
            "div",
            { className: "TriggerBar " + t },
            i.createElement(
              "div",
              { className: "VisualizerLabel" },
              (0, o.we)(e),
            ),
            i.createElement(
              "div",
              { className: "TriggerBarBackground" },
              i.createElement("div", {
                className: "TriggerBarContent",
                style: n,
              }),
            ),
          );
        }
        UpdateSVGPath() {
          if (
            this.m_nameRef &&
            this.m_nameRef.current &&
            this.m_containerRef &&
            this.m_containerRef.current &&
            this.m_svgRef &&
            this.m_svgRef.current
          ) {
            let e = this.m_svgRef.current.children.namedItem("SourcePath"),
              t = this.m_svgRef.current.children.namedItem("SourceLine"),
              r = this.m_svgRef.current.children.namedItem("SourceCircle"),
              n = this.props.side == R.Right,
              i = this.m_nameRef.current.getBoundingClientRect(),
              a = this.m_containerRef.current.getBoundingClientRect(),
              s = this.GetPosition(),
              o = new p.bR(0, i.top + i.height / 2);
            o.x = n ? a.left - 10 : a.right + 10;
            let l = n ? -20 : 20,
              c = o.x + l + "," + o.y + " " + s.x + "," + s.y;
            e.setAttribute("points", c);
            let u = o.x + "," + o.y + " " + (o.x + l) + "," + o.y;
            t.setAttribute("points", u),
              r.setAttribute("cx", s.x + ""),
              r.setAttribute("cy", s.y + "");
          }
        }
        componentDidUpdate() {
          this.UpdateSVGPath();
        }
        IsEngaged() {
          return (
            this.state.touch ||
            this.state.click ||
            (this.state.value && this.state.value > 0.1) ||
            (this.state.force && this.state.force > 0.1) ||
            (this.state.x && Math.abs(this.state.x) > 0.1) ||
            (this.state.y && Math.abs(this.state.x) > 0.1)
          );
        }
        render() {
          let e = "MenuSVG";
          return (
            this.props.side == R.Left
              ? (e += " MenuLeftLine")
              : (e += " MenuRightLine"),
            this.IsEngaged() && (e += " MenuSVGVisible"),
            i.createElement(
              "div",
              { className: "VisualizerControl", ref: this.m_containerRef },
              i.createElement(
                "div",
                { className: "VisualizerSectionHeader" },
                i.createElement(
                  "div",
                  { className: "Label Title", ref: this.m_nameRef },
                  m.W.LocalizeControllerString(
                    this.props.controllerType,
                    this.props.sourcePath,
                  ),
                ),
                this.renderHeaderVisualization(),
              ),
              this.renderBodyVisualization(),
              i.createElement(
                "svg",
                {
                  className: e,
                  xmlns: "http://www.w3.org/2000/svg",
                  ref: this.m_svgRef,
                },
                i.createElement(
                  "defs",
                  null,
                  i.createElement(
                    "radialGradient",
                    { id: "buttonGradient" },
                    i.createElement("stop", {
                      offset: "0%",
                      stopColor: "var(--bordercolor)",
                      stopOpacity: "0.8",
                    }),
                    i.createElement("stop", {
                      offset: "100%",
                      stopColor: "var(--bordercolor)",
                      stopOpacity: "0",
                    }),
                  ),
                ),
                i.createElement("polyline", {
                  id: "SourceLine",
                  stroke: "var(--bordercolor)",
                  strokeWidth: "0.1rem",
                  fill: "transparent",
                }),
                i.createElement("polyline", {
                  id: "SourcePath",
                  stroke: "var(--bordercolor)",
                  strokeWidth: "0.1rem",
                  fill: "transparent",
                }),
                i.createElement("circle", {
                  id: "SourceCircle",
                  r: "2rem",
                  fill: "url(#buttonGradient)",
                }),
              ),
            )
          );
        }
      }
      (0, n.Cg)([a.o], M.prototype, "ComponentUpdated", null),
        (0, n.Cg)([a.o], M.prototype, "UpdateSVGPath", null);
      class E extends M {
        constructor(e) {
          super(e);
        }
      }
      class T extends M {
        constructor(e) {
          super(e);
        }
        GetHeightEstimate() {
          let e = 1;
          return (
            this.props.source.value && e++, this.props.source.force && e++, e
          );
        }
        renderBodyVisualization() {
          return i.createElement(
            "div",
            { className: "TriggerVisualizerContainer" },
            this.props.source.value &&
              this.renderBar(
                "#SourceInputMode_Pull",
                "TriggerValue",
                this.state.value,
              ),
            this.props.source.force &&
              this.renderBar(
                "#SourceInputMode_Force",
                "TriggerForce",
                this.state.force,
              ),
          );
        }
      }
      class D extends M {
        constructor(e) {
          super(e);
        }
        renderBodyVisualization() {
          let e = null,
            t = "TrackpadVisualizerPip";
          return (
            (!this.state.touch &&
              (this.props.source.touch ||
                (0 == this.state.x && 0 == this.state.y))) ||
              ((e = {
                position: "absolute",
                top: String(2 * (1 - this.state.y)) + "rem",
                left: String(2 * (1 + this.state.x)) + "rem",
              }),
              this.state.click && (t += " Clicked")),
            i.createElement(
              "div",
              {
                className:
                  "TrackpadVisualizerContainer" +
                  (this.state.touch ? " Touched" : ""),
              },
              i.createElement(
                "div",
                { className: "TrackpadPosition" },
                i.createElement(
                  "div",
                  { className: "VisualizerLabel" },
                  (0, o.we)("#SourceInputMode_Position"),
                ),
                i.createElement(
                  "div",
                  { className: "TrackpadVisualizerContainer" },
                  i.createElement(
                    "div",
                    { className: "TrackpadVisualizerBackground" },
                    e &&
                      i.createElement(
                        "div",
                        { style: e },
                        i.createElement(
                          "div",
                          { className: "TrackpadVisualizerPipContainer" },
                          i.createElement("div", { className: t }),
                        ),
                      ),
                  ),
                ),
              ),
              this.props.source.force &&
                this.renderBar(
                  "#SourceInputMode_Force",
                  "TriggerForce",
                  this.state.force,
                ),
            )
          );
        }
      }
      class B extends i.Component {
        constructor(e) {
          super(e),
            (this.m_imageRef = i.createRef()),
            (this.state = { imageScale: this.GetPointScale() });
        }
        get ControllerTypeInfo() {
          let e = m.W.GetDeviceInfo(this.props.devicePath);
          return m.W.GetControllerTypeInfo(e.controller_type);
        }
        componentDidMount() {
          this.setState({ imageScale: this.GetPointScale() });
        }
        EstimateSourceHeight(e) {
          let t;
          switch (e.type) {
            case "button":
            default:
              return 1;
            case "trigger":
              return (t = 1), e.force && t++, e.value && t++, t;
            case "joystick":
            case "trackpad":
              return (t = 3), e.force && t++, t;
            case "pose":
            case "pinch":
            case "skeleton":
            case "vibration":
              return 0;
          }
        }
        renderSource(e, t, r) {
          let n = e + this.ControllerTypeInfo.controller_type;
          switch (t.type) {
            case "button":
              return i.createElement(E, {
                key: n,
                side: r,
                controllerType: this.ControllerTypeInfo,
                devicePath: this.props.devicePath,
                sourcePath: e,
                source: t,
                visualizer: this.props.visualizer,
                imageScale: this.GetPointScale(),
              });
            case "trigger":
              return i.createElement(T, {
                key: n,
                side: r,
                controllerType: this.ControllerTypeInfo,
                devicePath: this.props.devicePath,
                sourcePath: e,
                source: t,
                visualizer: this.props.visualizer,
                imageScale: this.GetPointScale(),
              });
            case "joystick":
            case "trackpad":
              return i.createElement(D, {
                key: n,
                side: r,
                controllerType: this.ControllerTypeInfo,
                devicePath: this.props.devicePath,
                sourcePath: e,
                source: t,
                visualizer: this.props.visualizer,
                imageScale: this.GetPointScale(),
              });
            case "pose":
            case "pinch":
            case "skeleton":
            case "vibration":
              return null;
            default:
              return i.createElement(
                "div",
                { key: n },
                "Need to add visualizer for ",
                t.type,
              );
          }
        }
        GetPointScale() {
          let e = { scale: 1, left: 0, right: 0, top: 0 };
          if (
            this.m_imageRef.current &&
            this.m_imageRef.current.naturalWidth > 0
          ) {
            let t = this.m_imageRef.current.getBoundingClientRect();
            (e.scale = t.height / this.m_imageRef.current.naturalHeight),
              (e.left = t.left + window.scrollX),
              (e.right = t.right + window.scrollX),
              (e.top = t.top + window.scrollY);
          }
          return e;
        }
        OnImageLoaded() {
          this.setState({ imageScale: this.GetPointScale() });
        }
        OnImageReflow() {
          this.setState({ imageScale: this.GetPointScale() });
        }
        renderImage() {
          let e = null,
            t = null,
            r = this.ControllerTypeInfo;
          return (
            "/user/hand/left" == this.props.devicePath
              ? r.input_bindingui_left &&
                ((e = r.input_bindingui_left.uri),
                (t = r.input_bindingui_left.transform
                  ? r.input_bindingui_left.transform
                  : ""))
              : "/user/hand/right" == this.props.devicePath
                ? r.input_bindingui_right &&
                  ((e = r.input_bindingui_right.uri),
                  (t = r.input_bindingui_right.transform
                    ? r.input_bindingui_right.transform
                    : ""))
                : r.input_bindingui_left
                  ? ((e = r.input_bindingui_left.uri),
                    (t = r.input_bindingui_left.transform
                      ? r.input_bindingui_left.transform
                      : ""))
                  : r.input_bindingui_right &&
                    ((e = r.input_bindingui_right.uri),
                    (t = r.input_bindingui_right.transform
                      ? r.input_bindingui_right.transform
                      : "")),
            e
              ? i.createElement(
                  "div",
                  { className: "VisualizerImageContainer" },
                  i.createElement("img", {
                    className: "VisualizerImage",
                    ref: this.m_imageRef,
                    onLoad: this.OnImageLoaded,
                    src: e,
                    style: { transform: t },
                  }),
                  i.createElement(w.A, { onReflow: this.OnImageReflow }),
                )
              : null
          );
        }
        render() {
          let e = [],
            t = [],
            r = this.ControllerTypeInfo,
            n = 0,
            a = [];
          for (let e in r.input_source) {
            let t = r.input_source[e];
            if ("InputValueVisibility_AvailableButHidden" == t.visibility)
              continue;
            let i = this.EstimateSourceHeight(t);
            (n += i),
              a.push({
                sSourcePath: e,
                inputSource: t,
                order: t.order ? t.order : 0,
                height: i,
              });
          }
          let s = 8;
          n > 16 && (s = n / 2);
          let o = 0,
            l = a.sort((e, t) => e.order - t.order);
          for (let r of l) {
            o += r.height;
            let n = o > s ? R.Right : R.Left,
              i = this.renderSource(r.sSourcePath, r.inputSource, n);
            i && (n == R.Left ? e.push(i) : t.push(i));
          }
          return i.createElement(
            "div",
            { className: "ControllerVisualizer" },
            i.createElement(
              "div",
              { className: "VisualizerLeft ControllerVisualizerEntries" },
              e,
            ),
            this.renderImage(),
            i.createElement(
              "div",
              { className: "VisualizerRight ControllerVisualizerEntries" },
              t,
            ),
          );
        }
      }
      (0, n.Cg)([a.o], B.prototype, "OnImageLoaded", null),
        (0, n.Cg)([a.o], B.prototype, "OnImageReflow", null);
      let V = class extends i.Component {
        constructor(e) {
          super(e),
            (this.m_mailbox = new d._n()),
            (this.m_componentRegistrations = {}),
            (this.m_observeDisposer = null),
            this.m_mailbox.RegisterHandler(
              "update_component_states",
              this.OnUpdateComponentStates,
            ),
            this.m_mailbox.Init("controller_visualizer").then(() => {
              this.UpdateDeviceInputStateSubscriptions(),
                (this.m_observeDisposer = (0, h.observe)(
                  m.W,
                  "ConnectedDevices",
                  this.OnConnectedDevicesChanged,
                )),
                this.SetDefaultDeviceIfNecessary();
            }),
            (this.state = { devicePath: null });
        }
        componentWillUnmount() {
          this.m_observeDisposer && this.m_observeDisposer();
          for (let e of m.W.ConnectedDevices) {
            let t = {
              type: "cancel_input_state_updates",
              device_path: e.root_path,
              returnAddress: this.m_mailbox.name,
            };
            this.m_mailbox.SendMessage(d.mX, t);
          }
        }
        UpdateDeviceInputStateSubscriptions() {
          for (let e of m.W.ConnectedDevices) {
            let t = {
              type: "request_input_state_updates",
              device_path: e.root_path,
              returnAddress: this.m_mailbox.name,
            };
            this.m_mailbox.SendMessage(d.mX, t);
          }
        }
        SetDefaultDeviceIfNecessary() {
          let e = this.GetSortedDevices();
          !this.state.devicePath &&
            e &&
            this.setState({ devicePath: e[0].root_path });
        }
        OnConnectedDevicesChanged() {
          this.UpdateDeviceInputStateSubscriptions();
        }
        OnUpdateComponentStates(e) {
          for (let t in e.components) {
            let r = e.device + t;
            this.m_componentRegistrations[r] &&
              this.m_componentRegistrations[r](e.device, t, e.components[t]);
          }
        }
        RegisterSourceVisualizer(e, t, r) {
          this.m_componentRegistrations[e + t] = r;
        }
        UnregisterSourceVisualizer(e, t) {
          delete this.m_componentRegistrations[e + t];
        }
        GetDeviceSortOrder(e) {
          switch (e.root_path) {
            case "/user/hand/left":
              return 0;
            case "/user/hand/right":
              return 1;
            default:
              return 2;
          }
        }
        GetSortedDevices() {
          return m.W.ConnectedDevices.sort(
            (e, t) => this.GetDeviceSortOrder(e) - this.GetDeviceSortOrder(t),
          );
        }
        render() {
          let e,
            t = [],
            r = this.GetSortedDevices();
          if (!r)
            return i.createElement(
              c.bB,
              {
                className: "ControllerVisualizerWrapper",
                header: (0, o.we)("#TestControllerTitle", ""),
                onDismissRequested: this.props.onDismissRequested,
              },
              i.createElement(
                "div",
                { className: "VisualizerLabel" },
                (0, o.we)("#TestController_NoController"),
              ),
            );
          for (let n of r)
            "TrackedDeviceClass_HMD" != n.class &&
              (n.root_path == this.state.devicePath && (e = n.serial_number),
              t.push({
                value: n.root_path,
                sLabel: (0, o.we)("#" + n.root_path),
              }));
          return i.createElement(
            c.bB,
            {
              className: "ControllerVisualizerWrapper",
              header: (0, o.we)("#TestControllerTitle", e),
              onDismissRequested: this.props.onDismissRequested,
              footer: i.createElement(c.tR, {
                leftControls: [
                  i.createElement(C.AN, {
                    key: "dropdown",
                    items: t,
                    value: this.state.devicePath,
                    defaultLabel: (0, o.we)("#" + this.state.devicePath),
                    onChange: (e) => {
                      this.setState({ devicePath: e });
                    },
                  }),
                ],
                onDismissRequested: this.props.onDismissRequested,
              }),
            },
            this.state.devicePath &&
              i.createElement(B, {
                devicePath: this.state.devicePath,
                serialNumber: e,
                visualizer: this,
              }),
          );
        }
      };
      (0, n.Cg)([a.o], V.prototype, "OnConnectedDevicesChanged", null),
        (0, n.Cg)([a.o], V.prototype, "OnUpdateComponentStates", null),
        (V = (0, n.Cg)([s.PA], V));
      var I,
        A,
        O = r(917);
      const k = (0, s.PA)(() => {
          const e = "managevivetrackers";
          if (
            !(null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VRDashboardManager.ShouldShowTrackerUI())
          )
            return null;
          const t = l.HR.routePageSection == e;
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
              "div",
              { className: "SettingsItem Button" },
              i.createElement(
                u.$,
                {
                  className: "ButtonControl",
                  onClick: () => l.HR.setRoutePageSection(e),
                },
                (0, o.we)("#Settings_General_ShowTrackerUI"),
              ),
            ),
            t &&
              i.createElement(
                c.bB,
                {
                  header: (0, o.we)("#Settings_ViveTrackers"),
                  onDismissRequested: () => l.HR.setRoutePageSection(null),
                },
                i.createElement(b, null),
              ),
          );
        }),
        L = (0, s.PA)(() => {
          const e = "debuglegacyinput";
          if (!m.W.BDevMode) return null;
          const t = l.HR.routePageSection == e;
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
              "div",
              { className: "SettingsItem Button" },
              i.createElement(
                u.$,
                {
                  className: "ButtonControl",
                  enabled: !!VRHTML,
                  onClick: () => l.HR.setRoutePageSection(e),
                },
                (0, o.we)("#AppSelect_LegacyDebug"),
              ),
            ),
            t &&
              i.createElement(
                c.bB,
                {
                  header: (0, o.we)("#AppSelect_LegacyDebug"),
                  onDismissRequested: () => l.HR.setRoutePageSection(null),
                },
                i.createElement(f, null),
              ),
          );
        }),
        H = (0, s.PA)(() => {
          const e = "testcontrollers",
            t = l.HR.routePageSection == e;
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
              "div",
              { className: "SettingsItem Button" },
              i.createElement(
                u.$,
                {
                  className: "ButtonControl",
                  onClick: () => l.HR.setRoutePageSection(e),
                },
                (0, o.we)("#AppSelect_ControllerTester"),
              ),
            ),
            t &&
              i.createElement(V, {
                onDismissRequested: () => l.HR.setRoutePageSection(null),
              }),
          );
        });
      function P(e) {
        return i.createElement(
          c.YO,
          { visibility: c.Z3.Advanced, className: "SettingsItem Button" },
          i.createElement(
            c.CS,
            {
              icon: c.Xb.PopOut,
              onClick: function () {
                let t = "bindingui/" + d.OH[(0, d.R$)()];
                e.mailbox.SendMessage(t, { type: "show_app_binding" });
              },
            },
            (0, o.we)("#Settings_ShowBindingUI"),
          ),
        );
      }
      function F(e) {
        if (!m.W.BDevMode) return null;
        return i.createElement(
          c.YO,
          { className: "SettingsItem Button" },
          i.createElement(
            c.CS,
            {
              icon: c.Xb.PopOut,
              onClick: function () {
                if (VRHTML) {
                  switch ((0, d.R$)()) {
                    case d.OH.Desktop:
                      VRHTML.ShowBindingUI(!0);
                      break;
                    case d.OH.Overlay:
                      VRHTML.ShowBindingUI(!1);
                  }
                  let t = "bindingui/" + d.OH[(0, d.R$)()];
                  e.mailbox.SendMessage(t, { type: "show_input_debugger" });
                } else
                  window.open(
                    "/dashboard/controllerbinding.html?debugger=true",
                  );
              },
            },
            (0, o.we)("#BindingUI_InputDebugger"),
          ),
        );
      }
      let N = (I = class extends i.Component {
        constructor(e) {
          super(e),
            (this.state = { bShowingModal: !1, sDeviceToCalibrate: null });
        }
        resetToDefaults() {
          I.devices.forEach((e) => {
            this.updateCalibration(e.sDevicePath, 0);
          });
        }
        closeCalibrator() {
          this.setState({ sDeviceToCalibrate: null });
        }
        updateCalibration(e, t) {
          this.closeCalibrator(),
            I.devices.some(
              (r) =>
                r.sDevicePath == e &&
                (l.HR.SetSettingsValue(this.getThumbstickRotationSetting(e), t),
                !0),
            );
        }
        getThumbstickRotationSetting(e) {
          let t = null;
          return (
            I.devices.some((r) => {
              if (r.sDevicePath == e) {
                const n = m.W.GetDeviceInfo(e);
                return (
                  n &&
                    (t =
                      r.sThumbstickAngleSettingPathPrefix + n.controller_type),
                  !0
                );
              }
              return !1;
            }),
            t
          );
        }
        shouldShowThumbstickCalibrateForHand(e) {
          const t = m.W.GetDeviceInfo(e);
          if (!t) return !1;
          const r = m.W.GetControllerTypeInfo(t.controller_type);
          if (!r) return !1;
          for (let e in r.input_source)
            if ("joystick" == r.input_source[e].type) return !0;
          return !1;
        }
        showCalibration(e) {
          this.setState({ sDeviceToCalibrate: e });
        }
        GetThumbstickDeadzoneSetting() {
          let e = m.W.GetDeviceInfo("/user/hand/left");
          return (
            e || (e = m.W.GetDeviceInfo("/user/hand/right")),
            e &&
            (this.shouldShowThumbstickCalibrateForHand("/user/hand/left") ||
              this.shouldShowThumbstickCalibrateForHand("/user/hand/right"))
              ? "/settings/input/thumbstickDeadzone_" + e.controller_type
              : null
          );
        }
        show() {
          this.setState({ bShowingModal: !0 });
        }
        hide() {
          this.closeCalibrator(), this.setState({ bShowingModal: !1 });
        }
        render() {
          let e = this.GetThumbstickDeadzoneSetting(),
            t = 0;
          return (
            e && l.HR.settings.has(e) && (t = l.HR.settings.get(e)),
            i.createElement(
              i.Fragment,
              null,
              i.createElement(
                c.YO,
                { className: "SettingsItem" },
                i.createElement(
                  u.$,
                  { className: "ButtonControl", onClick: this.show },
                  (0, o.we)("#Settings_ShowThumbstickSettings"),
                ),
              ),
              this.state.bShowingModal &&
                i.createElement(
                  c.bB,
                  {
                    header: (0, o.we)("#Settings_ThumbstickSettings"),
                    onDismissRequested: this.hide,
                  },
                  null !== this.state.sDeviceToCalibrate &&
                    i.createElement(S, {
                      devicePath: this.state.sDeviceToCalibrate,
                      fnCloseCalibrator: this.closeCalibrator,
                      fnUpdateThumbstickCalibration: this.updateCalibration,
                    }),
                  I.devices.map((e) => {
                    if (
                      !this.shouldShowThumbstickCalibrateForHand(e.sDevicePath)
                    )
                      return i.createElement(
                        c.YO,
                        {
                          key: e.sDevicePath,
                          title: (0, o.we)(
                            "#Settings_General_CalibrateThumbstick_ConnectAController",
                          ),
                          className: "SettingsItem CalibrateThumbstickItem",
                        },
                        i.createElement(
                          "div",
                          { className: "Label" },
                          (0, o.we)(
                            e.sThumbstickAngleLabelPlaceholderUnlocalized,
                          ),
                        ),
                        i.createElement(
                          u.$,
                          { className: "ButtonControl", enabled: !1 },
                          (0, o.we)("#Settings_General_Calibrate"),
                        ),
                      );
                    let t = l.HR.settings.get(
                      this.getThumbstickRotationSetting(e.sDevicePath),
                    );
                    return (
                      null == t && (t = 0),
                      i.createElement(
                        c.YO,
                        {
                          key: e.sDevicePath,
                          className: "SettingsItem CalibrateThumbstickItem",
                        },
                        i.createElement(
                          "div",
                          { className: "Label" },
                          (0, o.we)(
                            e.sThumbstickAngleLabelUnlocalized,
                            t.toFixed(1),
                          ),
                        ),
                        i.createElement(
                          u.$,
                          {
                            className: "ButtonControl",
                            onClick: () => {
                              this.showCalibration(e.sDevicePath);
                            },
                          },
                          (0, o.we)("#Settings_General_Calibrate"),
                        ),
                      )
                    );
                  }),
                  e &&
                    i.createElement(c.tE, {
                      min: 0,
                      max: 0.5,
                      step: 0.01,
                      valueStyleVariant: O.Te.OnHandle,
                      renderValue: (e) => (100 * e).toFixed(0) + "%",
                      name: e,
                      label: (0, o.we)("#Settings_ThumbstickDeadzone_Text"),
                      title: (0, o.we)("#Settings_ThumbstickDeadzone_Desc"),
                    }),
                ),
            )
          );
        }
      });
      (N.devices = [
        {
          sDevicePath: "/user/hand/left",
          sThumbstickAngleSettingPathPrefix:
            "/settings/input/leftThumbstickRotation_",
          sThumbstickAngleLabelUnlocalized:
            "#Settings_General_LeftThumbstickAngle",
          sThumbstickAngleLabelPlaceholderUnlocalized:
            "#Settings_General_LeftThumbstickAngle_NoValue",
        },
        {
          sDevicePath: "/user/hand/right",
          sThumbstickAngleSettingPathPrefix:
            "/settings/input/rightThumbstickRotation_",
          sThumbstickAngleLabelUnlocalized:
            "#Settings_General_RightThumbstickAngle",
          sThumbstickAngleLabelPlaceholderUnlocalized:
            "#Settings_General_RightThumbstickAngle_NoValue",
        },
      ]),
        (0, n.Cg)([a.o], N.prototype, "resetToDefaults", null),
        (0, n.Cg)([a.o], N.prototype, "closeCalibrator", null),
        (0, n.Cg)([a.o], N.prototype, "updateCalibration", null),
        (0, n.Cg)([a.o], N.prototype, "showCalibration", null),
        (0, n.Cg)([a.o], N.prototype, "show", null),
        (0, n.Cg)([a.o], N.prototype, "hide", null),
        (N = I = (0, n.Cg)([s.PA], N));
      let x = (A = class extends i.Component {
        constructor(e) {
          super(e),
            (this.m_mailbox = new d._n()),
            (this.m_routeObservingAutorunDisposer = null),
            (this.m_refAppSelectDropdown = i.createRef()),
            (this.state = {
              currentBindingApp: null,
              currentControllerType: p.B$.GetBestControllerType(),
              currentActionManifest: null,
              currentBinding: null,
              rCurrentBindingList: null,
              bForceToggleToCustom: !1,
              eDominantHand: null,
            }),
            this.m_mailbox.Init("settings_binding_manager");
        }
        componentDidMount() {
          this.setState({
            currentControllerType: p.B$.GetBestControllerType(),
          }),
            (this.m_bindingSubscriptionChangedCanaryDisposer = (0, h.observe)(
              p.B$,
              "BindingSubscriptionChangedCanary",
              (e) => {
                this.updateStateForApp(this.state.currentBindingApp);
              },
            )),
            (this.m_routeObservingAutorunDisposer = (0, h.autorun)(() => {
              var e;
              if (this.shouldShowModal) {
                const t = this.currentRouteAppKey;
                t &&
                  (null === (e = this.m_refAppSelectDropdown.current) ||
                    void 0 === e ||
                    e.setCurrentApp(t));
              }
            }));
        }
        componentWillUnmount() {
          this.m_bindingSubscriptionChangedCanaryDisposer &&
            (this.m_bindingSubscriptionChangedCanaryDisposer(),
            (this.m_bindingSubscriptionChangedCanaryDisposer = null)),
            this.m_routeObservingAutorunDisposer &&
              (this.m_routeObservingAutorunDisposer(),
              (this.m_routeObservingAutorunDisposer = null));
        }
        static OpenDeepLink(e, t) {
          l.HR.setRoute(e, A.PAGE_SECTION, t ? [t] : null),
            null === VRHTML || void 0 === VRHTML || VRHTML.ShowSettingsUI();
        }
        get shouldShowModal() {
          return l.HR.routePageSection == A.PAGE_SECTION;
        }
        get currentRouteAppKey() {
          const e = l.HR.routePageSectionParams;
          return e.length >= 1 ? e[0] : null;
        }
        loadAppActionManifest(e) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            let t = yield (0, p.xM)(e);
            if (t.error) throw new Error(t.error);
            return t;
          });
        }
        loadBindingConfig(e, t) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            return (yield (0, p.mQ)(
              e,
              this.state.currentControllerType.controller_type,
              t.current_binding_url[
                this.state.currentControllerType.controller_type
              ],
            )).binding_config;
          });
        }
        updateStateForApp(e) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            if (!e) return;
            (this.state.currentBindingApp &&
              e.key == this.state.currentBindingApp.key) ||
              this.setState({
                currentBindingApp: e,
                currentActionManifest: null,
                currentBinding: null,
                rCurrentBindingList: null,
                bForceToggleToCustom: !1,
              });
            let t = yield this.loadAppActionManifest(e.key);
            if (
              (this.setState({
                currentActionManifest: t,
                bForceToggleToCustom: !1,
              }),
              t.supports_dominant_hand_setting)
            ) {
              let t = yield l.HR.GetAppSettings(e.key);
              this.setState({ eDominantHand: t.dominant_hand });
            } else this.setState({ eDominantHand: void 0 });
            let r = yield this.loadBindingConfig(e.key, t);
            this.setState({ currentBinding: r });
          });
        }
        onApplicationDropdownChange(e) {
          var t;
          this.state.currentBindingApp !== e &&
            (e && this.updateStateForApp(e),
            l.HR.setRoutePageSectionParams([
              null !== (t = null == e ? void 0 : e.key) && void 0 !== t
                ? t
                : "",
            ]));
        }
        onToggleDefaultCustomBinding(e) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            var t, r;
            const n = e
                ? null === (t = this.state.currentActionManifest) ||
                  void 0 === t
                  ? void 0
                  : t.previous_binding_url
                : null === (r = this.state.currentActionManifest) ||
                    void 0 === r
                  ? void 0
                  : r.best_binding_url,
              i =
                null == n
                  ? void 0
                  : n[this.state.currentControllerType.controller_type];
            if (!i)
              return (
                console.log("No previous url to go back to."),
                void this.setState({ bForceToggleToCustom: !0 })
              );
            yield p.B$.SelectConfig(
              this.state.currentBindingApp.key,
              this.state.currentControllerType.controller_type,
              i,
            );
          });
        }
        showBindingDetail(e) {
          if (!this.state.currentBindingApp)
            return void console.error(
              "showBindingDetail called on null currentBindingApp",
            );
          let t = {
            type: "show_app_binding",
            app_key: this.state.currentBindingApp.key,
          };
          e &&
            (t.controller_type =
              this.state.currentControllerType.controller_type);
          let r = "bindingui/" + d.OH[(0, d.R$)()];
          this.m_mailbox.SendMessage(r, t);
        }
        show() {
          l.HR.setRoutePageSection(A.PAGE_SECTION);
        }
        close() {
          l.HR.setRoutePageSection(null);
        }
        showBindingCallouts() {
          var e, t;
          let r =
              null !==
                (e = this.state.currentBindingApp
                  ? this.state.currentBindingApp.key
                  : null) && void 0 !== e
                ? e
                : null !==
                      (t =
                        null === VRHTML || void 0 === VRHTML
                          ? void 0
                          : VRHTML.VRApplications.GetSceneApplicationKey()) &&
                    void 0 !== t
                  ? t
                  : "openvr.component.vrcompositor",
            n = {
              type: "request_binding_callouts",
              returnAddress: this.m_mailbox.name,
              app_key: r,
              controller_type: this.state.currentControllerType.controller_type,
            };
          this.m_mailbox.SendMessage(d.I0, n);
        }
        onToggleDominantHand(e) {
          let t = e
            ? d.kG.TrackedControllerRole_RightHand
            : d.kG.TrackedControllerRole_LeftHand;
          this.setAppState("dominant_hand", t),
            this.setState({ eDominantHand: t });
        }
        setAppState(e, t) {
          if (null != this.state.currentBindingApp) {
            let r = {};
            (r[e] = t),
              l.HR.SetAppSettings(this.state.currentBindingApp.key, r);
          }
        }
        render() {
          var e, t, r, n, a, s, l, p, h, g, v, _, b, S, y, f, R, w;
          let C =
              null ===
                (t =
                  null === (e = this.state.currentActionManifest) ||
                  void 0 === e
                    ? void 0
                    : e.current_binding_url) || void 0 === t
                ? void 0
                : t[
                    null === (r = this.state.currentControllerType) ||
                    void 0 === r
                      ? void 0
                      : r.controller_type
                  ],
            M =
              null ===
                (a =
                  null === (n = this.state.currentActionManifest) ||
                  void 0 === n
                    ? void 0
                    : n.default_bindings) || void 0 === a
                ? void 0
                : a[
                    null === (s = this.state.currentControllerType) ||
                    void 0 === s
                      ? void 0
                      : s.controller_type
                  ];
          if (null == M && this.currentRouteAppKey) {
            const e =
              null === (l = this.state.currentControllerType) || void 0 === l
                ? void 0
                : l.default_bindings;
            if (e)
              for (let t of e)
                if (t.app_key === this.currentRouteAppKey) {
                  M = t.binding_url;
                  break;
                }
          }
          const E =
              null ===
                (h =
                  null === (p = this.state.currentBinding) || void 0 === p
                    ? void 0
                    : p.options) || void 0 === h
                ? void 0
                : h.compatibility_mode,
            T =
              (null === (g = this.state.currentBinding) || void 0 === g
                ? void 0
                : g.controller_type) !=
              (null === (v = this.state.currentControllerType) || void 0 === v
                ? void 0
                : v.controller_type),
            D = null == M && (null == C ? void 0 : C.startsWith("file://")),
            B = E || T || D,
            V =
              (null === (_ = this.state.currentActionManifest) || void 0 === _
                ? void 0
                : _.current_binding_url[
                    null === (b = this.state.currentControllerType) ||
                    void 0 === b
                      ? void 0
                      : b.controller_type
                  ]) ==
              (null ===
                (y =
                  null === (S = this.state.currentActionManifest) ||
                  void 0 === S
                    ? void 0
                    : S.best_binding_url) || void 0 === y
                ? void 0
                : y[
                    null === (f = this.state.currentControllerType) ||
                    void 0 === f
                      ? void 0
                      : f.controller_type
                  ]),
            I =
              (this.state.bForceToggleToCustom || !M || M != C) &&
              !(B && V && !this.state.bForceToggleToCustom),
            A =
              (null === (R = this.state.currentActionManifest) || void 0 === R
                ? void 0
                : R.supports_dominant_hand_setting) &&
              null != this.state.eDominantHand,
            O =
              this.state.eDominantHand == d.kG.TrackedControllerRole_RightHand;
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
              c.YO,
              { className: "SettingsItem" },
              i.createElement(
                u.$,
                { className: "ButtonControl", onClick: this.show },
                (0, o.we)("#Settings_Controller_AdvancedControllerSettings"),
              ),
            ),
            this.shouldShowModal &&
              i.createElement(
                c.bB,
                {
                  className: "BindingsModal",
                  header: i.createElement(
                    i.Fragment,
                    null,
                    i.createElement(
                      "h1",
                      null,
                      (0, o.we)(
                        "#Settings_ManageControllerBindingSettingsForApp",
                      ),
                    ),
                    i.createElement(c.mi, {
                      ref: this.m_refAppSelectDropdown,
                      defaultAppKey:
                        null !== (w = this.currentRouteAppKey) && void 0 !== w
                          ? w
                          : null === VRHTML || void 0 === VRHTML
                            ? void 0
                            : VRHTML.VRApplications.GetSceneApplicationKey(),
                      stateKey: "settings_controller_binding",
                      showCompositor: !0,
                      defaultLabel: (0, o.we)(
                        "#Settings_PerApplication_ChooseApplication",
                      ),
                      onChange: this.onApplicationDropdownChange,
                    }),
                  ),
                  subheader: m.W.IsSteamAvailable
                    ? null
                    : (0, o.we)("#Settings_NeedSteamTo_ViewAndEditBindings"),
                  onDismissRequested: this.close,
                },
                this.state.currentControllerType &&
                  i.createElement(
                    c.YO,
                    { className: "SettingsItem" },
                    i.createElement(
                      "div",
                      { className: "Label" },
                      (0, o.we)("#Settings_ActiveController"),
                    ),
                    i.createElement(
                      "div",
                      { className: "Label" },
                      m.W.LocalizeDriverString(
                        this.state.currentControllerType.resource_root,
                        this.state.currentControllerType.controller_type,
                      ),
                    ),
                  ),
                B &&
                  i.createElement(
                    "span",
                    { className: "RemappedInfoSpan" },
                    i.createElement("img", {
                      className: "InformationButtonImage",
                      src: "images/bindingui/icon_information.svg",
                    }),
                    (0, o.we)("#BindingUI_Compatibility_Remapped_Text"),
                  ),
                !m.W.IsSteamAvailable &&
                  this.state.currentBinding &&
                  i.createElement(
                    c.YO,
                    { className: "SettingsItem" },
                    i.createElement(
                      "div",
                      { className: "Label" },
                      (0, o.we)("#Settings_ActiveBinding"),
                    ),
                    i.createElement(
                      "div",
                      { className: "Label" },
                      this.state.currentBinding.name,
                    ),
                  ),
                m.W.IsSteamAvailable &&
                  i.createElement(c.Al, {
                    label: (0, o.we)("#Settings_ActiveControllerBinding"),
                    offLabel: (0, o.we)("#Settings_Controller_DefaultBinding"),
                    onLabel: (0, o.we)("#Settings_Controller_CustomBinding"),
                    onChange: this.onToggleDefaultCustomBinding,
                    value: I,
                    onSubsection: i.createElement(
                      i.Fragment,
                      null,
                      (!C || !this.state.currentBinding) &&
                        i.createElement(
                          "div",
                          { className: "SettingsItem Label" },
                          (0, o.we)("#Settings_Loading_CurrentBinding"),
                        ),
                      I &&
                        i.createElement(
                          "div",
                          {
                            className:
                              "SettingsItem ButtonRow BindingButtonRow",
                          },
                          i.createElement(
                            c.CS,
                            {
                              icon: c.Xb.PopOut,
                              enabled: m.W.IsSteamAvailable && Boolean(C),
                              onClick: this.showBindingDetail.bind(this, !0),
                            },
                            (0, o.we)("#Settings_EditBinding"),
                          ),
                          i.createElement(
                            c.CS,
                            {
                              icon: c.Xb.PopOut,
                              enabled: m.W.IsSteamAvailable,
                              onClick: this.showBindingDetail.bind(this, !1),
                            },
                            (0, o.we)("#Settings_EditBinding_ChooseAnother"),
                          ),
                        ),
                    ),
                  }),
                i.createElement("div", { className: "Spacer" }),
                this.state.currentBinding &&
                  i.createElement(W, {
                    appKey: this.state.currentBindingApp.key,
                  }),
                A &&
                  i.createElement(c.Al, {
                    label: (0, o.we)("#Settings_DominantHand"),
                    offLabel: (0, o.we)("#Settings_DominantHand_Left"),
                    onLabel: (0, o.we)("#Settings_DominantHand_Right"),
                    onChange: this.onToggleDominantHand,
                    value: O,
                  }),
              ),
          );
        }
      });
      (x.PAGE_SECTION = "appcontrollerbindings"),
        (0, n.Cg)([h.computed], x.prototype, "shouldShowModal", null),
        (0, n.Cg)([h.computed], x.prototype, "currentRouteAppKey", null),
        (0, n.Cg)([a.o], x.prototype, "onApplicationDropdownChange", null),
        (0, n.Cg)([a.o], x.prototype, "onToggleDefaultCustomBinding", null),
        (0, n.Cg)([a.o], x.prototype, "showBindingDetail", null),
        (0, n.Cg)([a.o], x.prototype, "show", null),
        (0, n.Cg)([a.o], x.prototype, "close", null),
        (0, n.Cg)([a.o], x.prototype, "showBindingCallouts", null),
        (0, n.Cg)([a.o], x.prototype, "onToggleDominantHand", null),
        (x = A = (0, n.Cg)([s.PA], x));
      const W = (e) =>
        i.createElement(
          c.YO,
          { className: "SettingsItem" },
          i.createElement(
            u.$,
            {
              className: "ButtonControl",
              onClick: () => {
                var t, r;
                return l.HR.showBindingCallouts(
                  null !== (t = e.appKey) && void 0 !== t
                    ? t
                    : null !==
                          (r =
                            null === VRHTML || void 0 === VRHTML
                              ? void 0
                              : VRHTML.VRApplications.GetSceneApplicationKey()) &&
                        void 0 !== r
                      ? r
                      : "openvr.component.vrcompositor",
                );
              },
            },
            (0, o.we)(
              (0, d.R$)() == d.OH.Overlay
                ? "#Settings_Controller_ShowBindingCallouts"
                : "#Settings_Controller_ShowBindingCalloutsInVR",
            ),
          ),
        );
      let z = class extends i.Component {
        constructor(e) {
          super(e),
            (this.m_mailbox = new d._n()),
            (this.state = { bShowingModal: !1, dongles: [], isPairing: !1 }),
            (this.m_mailbox = new d._n()),
            this.m_mailbox
              .Init("PairControllersModal")
              .then(() => {
                this.m_mailbox.RegisterHandler(
                  "discover_dongles_response",
                  this.OnDiscoverDonglesResponse,
                );
              })
              .catch((e) => {
                console.log("Failed to open PairControllersModal mailbox " + e);
              });
        }
        OnDiscoverDonglesResponse(e) {
          console.log("OnDiscoverDonglesResponse " + e),
            this.setState({ dongles: e.dongles, isPairing: e.isPairing });
        }
        DiscoverDongles() {
          let e = {
            type: "discover_dongles",
            returnAddress: this.m_mailbox.name,
          };
          this.m_mailbox.SendMessage("lighthouse_pairing", e);
        }
        StartPairing(e) {
          let t = {
            type: "start_pairing",
            returnAddress: this.m_mailbox.name,
            serial: e,
            timeoutSeconds: 10,
            sendStatusUpdates: !0,
          };
          this.m_mailbox.SendMessage("lighthouse_pairing", t),
            this.setState({ isPairing: !0 }),
            console.log("StartPairing " + e);
        }
        show() {
          this.DiscoverDongles(), this.setState({ bShowingModal: !0 });
        }
        hide() {
          this.setState({ bShowingModal: !1 });
        }
        render() {
          const e = 0 == this.state.dongles.length;
          let t = [];
          for (let e of this.state.dongles) {
            let r = i.createElement(
              "div",
              { key: e.serial, className: "ButtonRow" },
              "Dongle ",
              e.serial,
              " connected to ",
              e.connectedSerial,
              !this.state.isPairing &&
                i.createElement(
                  u.$,
                  {
                    className: "ButtonControl",
                    onClick: () => this.StartPairing(e.serial),
                  },
                  " ",
                  (0, o.we)("#Settings_Controller_Pair"),
                  " ",
                ),
              e.isPairing &&
                i.createElement(
                  "h2",
                  null,
                  " ",
                  (0, o.we)("#Settings_Controller_Pairing"),
                  " ",
                ),
            );
            t.push(r);
          }
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
              c.YO,
              { className: "SettingsItem" },
              i.createElement(
                u.$,
                { className: "ButtonControl", onClick: this.show },
                (0, o.we)("#Settings_Controller_PairControllers"),
              ),
            ),
            this.state.bShowingModal &&
              i.createElement(
                c.bB,
                {
                  header: (0, o.we)(
                    "#Settings_Controller_ControllerPairingSection",
                  ),
                  onDismissRequested: this.hide,
                },
                i.createElement(i.Fragment, null, t),
                e &&
                  i.createElement(
                    "h1",
                    null,
                    "No controller dongles detected.",
                  ),
              ),
          );
        }
      };
      (0, n.Cg)([a.o], z.prototype, "OnDiscoverDonglesResponse", null),
        (0, n.Cg)([a.o], z.prototype, "DiscoverDongles", null),
        (0, n.Cg)([a.o], z.prototype, "StartPairing", null),
        (0, n.Cg)([a.o], z.prototype, "show", null),
        (0, n.Cg)([a.o], z.prototype, "hide", null),
        (z = (0, n.Cg)([s.PA], z));
      let G = class extends i.Component {
        constructor(e) {
          super(e),
            (this.m_mailbox = new d._n()),
            (this.m_DeviceEventCallbackHandle = null),
            (this.m_DeviceFirmwareEventCallbackHandle = null),
            (this.state = { bShowingModal: !1, controllers: [] }),
            (this.m_mailbox = new d._n()),
            this.m_mailbox
              .Init("UpdateControllersModal")
              .then(() => {
                this.m_mailbox.RegisterHandler(
                  "controller_firmware_update_status",
                  this.OnControllerUpdateStatus,
                );
              })
              .catch((e) => {
                console.log(
                  "Failed to open UpdateControllersModal mailbox " + e,
                );
              });
        }
        OnControllerUpdateStatus(e) {
          this.setState({ controllers: e.controllers });
        }
        StartUpdate(e) {
          let t = {
            type: "update_start",
            returnAddress: this.m_mailbox.name,
            serial: e,
          };
          this.m_mailbox.SendMessage("controller_firmware_update", t),
            console.log("StartUpdate " + e);
        }
        onDeviceEvent(e, t, r) {
          this.state.bShowingModal && this.forceUpdate();
        }
        onFirmwareStateChanged(e) {
          this.state.bShowingModal && this.forceUpdate();
        }
        componentDidMount() {
          (this.m_DeviceEventCallbackHandle =
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.RegisterForDeviceEvents(this.onDeviceEvent)),
            (this.m_DeviceFirmwareEventCallbackHandle =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.RegisterForFirmwareStateChangedEvents(
                    this.onFirmwareStateChanged,
                  ));
        }
        componentWillUnmount() {
          var e, t;
          null === (e = this.m_DeviceEventCallbackHandle) ||
            void 0 === e ||
            e.unregister(),
            null === (t = this.m_DeviceFirmwareEventCallbackHandle) ||
              void 0 === t ||
              t.unregister();
        }
        show() {
          this.setState({ bShowingModal: !0 });
        }
        hide() {
          this.setState({ bShowingModal: !1 });
        }
        render() {
          var e, t, r;
          let n = [];
          for (let a of null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.VRSystem.GetTrackedDeviceClasses().filter(
                (e) => e.eClass == d.mo.Controller,
              )) {
            let s =
                null !==
                  (e =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VRProperties.GetStringProperty(
                          a.unIndex,
                          d.fD.ModelNumber_String,
                        )) && void 0 !== e
                  ? e
                  : "Unknown Controller",
              o =
                null !==
                  (t =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VRProperties.GetStringProperty(
                          a.unIndex,
                          d.fD.SerialNumber_String,
                        )) && void 0 !== t
                  ? t
                  : "",
              l =
                null !==
                  (r =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VRProperties.GetBoolProperty(
                          a.unIndex,
                          d.fD.Firmware_UpdateAvailable_Bool,
                        )) &&
                void 0 !== r &&
                r,
              c = null;
            this.state.controllers.some((e) => e.serial == o && ((c = e), !0));
            let m = i.createElement(
              "div",
              { key: o },
              i.createElement("div", null, s, " - ", o),
              i.createElement(
                "div",
                null,
                !l &&
                  !(null == c ? void 0 : c.updateInProgress) &&
                  i.createElement("div", null, "Up to date"),
                (null == c ? void 0 : c.updateInProgress) &&
                  i.createElement("progress", { value: c.updateProgress }),
                l &&
                  !c &&
                  i.createElement(
                    u.$,
                    {
                      className: "ButtonControl",
                      onClick: () => this.StartUpdate(o),
                    },
                    " ",
                    "Update",
                    " ",
                  ),
                l &&
                  (null == c ? void 0 : c.updateError) &&
                  i.createElement(
                    u.$,
                    {
                      className: "ButtonControl",
                      onClick: () => this.StartUpdate(o),
                    },
                    " ",
                    "Retry",
                    " ",
                  ),
              ),
            );
            n.push(m);
          }
          const a = 0 == n.length;
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
              c.YO,
              { className: "SettingsItem" },
              i.createElement(
                u.$,
                { className: "ButtonControl", onClick: this.show },
                "Update Controllers",
              ),
            ),
            this.state.bShowingModal &&
              i.createElement(
                c.bB,
                { header: "Update Controllers", onDismissRequested: this.hide },
                i.createElement(i.Fragment, null, n),
                a && i.createElement("h1", null, "No controllers connected."),
              ),
          );
        }
      };
      (0, n.Cg)([a.o], G.prototype, "OnControllerUpdateStatus", null),
        (0, n.Cg)([a.o], G.prototype, "StartUpdate", null),
        (0, n.Cg)([a.o], G.prototype, "onDeviceEvent", null),
        (0, n.Cg)([a.o], G.prototype, "onFirmwareStateChanged", null),
        (0, n.Cg)([a.o], G.prototype, "show", null),
        (0, n.Cg)([a.o], G.prototype, "hide", null),
        (G = (0, n.Cg)([s.PA], G));
      let U = class extends c.yO {
        constructor(e) {
          super(e),
            (this.m_mailbox = new d._n()),
            (this.m_refControllerSettingsSection = i.createRef()),
            this.m_mailbox.Init("settings_controller_page");
        }
        ResetToDefaults() {
          super.ResetToDefaults(),
            this.m_refControllerSettingsSection.current &&
              this.m_refControllerSettingsSection.current.resetToDefaults();
        }
        render() {
          var e, t;
          if (!this.props.active) return null;
          const r =
              null !==
                (e = l.HR.settings.get(
                  "/settings/dashboard/allowInHeadsetControllerPairing",
                )) &&
              void 0 !== e &&
              e,
            n =
              null !==
                (t = l.HR.settings.get(
                  "/settings/dashboard/allowInHeadsetControllerUpdate",
                )) &&
              void 0 !== t &&
              t;
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(W, null),
            i.createElement(x, null),
            i.createElement(P, { mailbox: this.m_mailbox }),
            i.createElement(N, { ref: this.m_refControllerSettingsSection }),
            i.createElement(H, null),
            i.createElement(k, null),
            i.createElement(L, null),
            i.createElement(F, { mailbox: this.m_mailbox }),
            r && i.createElement(z, null),
            n && i.createElement(G, null),
          );
        }
      };
      (U.Name = "controller_settings"),
        (0, n.Cg)([a.o], U.prototype, "ResetToDefaults", null),
        (U = (0, n.Cg)([s.PA], U));
    },
    3720: (e, t, r) => {
      "use strict";
      r.d(t, {
        Al: () => k,
        CS: () => $,
        JA: () => O,
        Pw: () => N,
        RM: () => z,
        WZ: () => A,
        Xb: () => K,
        YO: () => T,
        Z3: () => i,
        bB: () => q,
        mi: () => U,
        tE: () => P,
        tR: () => j,
        xS: () => L,
        yO: () => V,
        ym: () => H,
      });
      var n,
        i,
        a = r(1635),
        s = r(6540),
        o = r(3236),
        l = r(3714),
        c = r(7813),
        u = r(1370),
        d = r(1333),
        m = r(6090),
        p = r(4963),
        h = r(6138),
        g = r(1139),
        v = r(7379),
        _ = r(6189),
        b = r(4493),
        S = r(3606),
        y = r(9471),
        f = r(917),
        R = r(5615),
        w = r(3747);
      function C(e) {
        var t, r, n;
        const i = (0, w.kb)(e.detent);
        function a(e) {
          return (0, w.AG)(e);
        }
        const o = a("string" == typeof e.min ? e.min : void 0),
          c = a("string" == typeof e.max ? e.max : void 0),
          u =
            "string" == typeof e.min
              ? null != o
                ? o
                : 0
              : null !== (t = e.min) && void 0 !== t
                ? t
                : 0,
          d =
            "string" == typeof e.max
              ? null != c
                ? c
                : 0
              : null !== (r = e.max) && void 0 !== r
                ? r
                : 0,
          m = {
            name: e.name,
            min: u,
            max: d,
            step: null !== (n = e.step) && void 0 !== n ? n : 5,
            detents: void 0 !== i ? [i] : void 0,
          };
        return s.createElement(
          P,
          Object.assign(
            {
              renderValue: (t) => {
                var r;
                return "number" == typeof t
                  ? t.toFixed(null !== (r = e.decimals) && void 0 !== r ? r : 0)
                  : JSON.stringify(t);
              },
              label: e.label ? (0, l.we)(e.label) : "",
              valueStyleVariant: f.Te.OnHandle,
            },
            m,
          ),
        );
      }
      function M(e) {
        const t = (0, w.Hk)(e.name);
        return s.createElement(
          T,
          {
            className: (0, g.FH)("SettingsItem", "RadioButtons"),
            title: e.text ? (0, l.we)(e.text) : "",
          },
          s.createElement(
            "div",
            { className: "Label" },
            e.label ? (0, l.we)(e.label) : "",
          ),
          s.createElement("div", { className: "RadioButtonsSet" }, t),
        );
      }
      function E(e) {
        let t;
        return (
          "string" == typeof e.value
            ? (t = (0, w.Hk)(e.path))
            : "boolean" == typeof e.value
              ? (t = (0, w.mj)(e.path))
              : "number" == typeof e.value && (t = (0, w.kb)(e.path)),
          t === e.value ? e.children : null
        );
      }
      !(function (e) {
        (e[(e.Normal = 0)] = "Normal"),
          (e[(e.Advanced = 1)] = "Advanced"),
          (e[(e.Desktop = 2)] = "Desktop"),
          (e[(e.VR = 3)] = "VR");
      })(i || (i = {}));
      let T = class extends s.Component {
        constructor(e) {
          super(e);
        }
        render() {
          let e = Object.assign({}, this.props);
          delete e.label, delete e.subsection, delete e.visibility;
          let t = this.props.visibility == i.Advanced;
          switch (this.props.visibility) {
            case i.Desktop:
              t = (0, m.R$)() != m.OH.Desktop;
              break;
            case i.VR:
              t = (0, m.R$)() != m.OH.Overlay;
          }
          return t && !d.HR.showAdvancedSettings
            ? null
            : (this.props.visibility == i.Advanced &&
                (e.className = (0, g.FH)(e.className, "Advanced")),
              s.createElement("div", e, this.props.children));
        }
      };
      function D(e) {
        return null == e ? [] : Array.isArray(e) ? e : [e];
      }
      T = (0, a.Cg)([u.PA], T);
      const B = (0, u.PA)(function e(t) {
        const { settingValue: r } = t,
          n = (e) => {
            if (e.requires)
              for (const t in e.requires)
                if (d.HR.settings.get(t) !== e.requires[t]) return !1;
            return (
              !(e.advanced_only && !d.HR.showAdvancedSettings) &&
              !(
                e.windows_only &&
                d.HR.systemInfo &&
                d.HR.systemInfo.os_type < 0
              )
            );
          },
          i = D(r.off_subsection).filter(n),
          a = D(r.on_subsection).filter(n),
          o = i.length
            ? s.createElement(
                s.Fragment,
                null,
                i.map((t) =>
                  s.createElement(e, { key: t.name, settingValue: t }),
                ),
              )
            : void 0,
          c = a.length
            ? s.createElement(
                s.Fragment,
                null,
                a.map((t) =>
                  s.createElement(e, { key: t.name, settingValue: t }),
                ),
              )
            : void 0;
        let u = null;
        switch (null == r ? void 0 : r.control) {
          case "checkbox":
            u = s.createElement(I, {
              key: r.name,
              name: r.name,
              label: r.label ? (0, l.we)(r.label) : "",
              title: r.text ? (0, l.we)(r.text) : "",
            });
            break;
          case "toggle":
            u = s.createElement(k, {
              key: r.name,
              name: r.name,
              swapOnOff: r.inverted,
              onLabel: r.on_label && (0, l.we)(r.on_label),
              offLabel: r.off_label && (0, l.we)(r.off_label),
              label: r.label ? (0, l.we)(r.label) : "",
              title: r.text ? (0, l.we)(r.text) : "",
              offSubsection: o,
              onSubsection: c,
            });
            break;
          case "select":
            let e = r.options
              .filter((e) => null != e)
              .map((e, t) => ({ value: e.value, sLabel: (0, l.we)(e.label) }));
            u = s.createElement(L, {
              key: r.name,
              name: r.name,
              label: r.label ? (0, l.we)(r.label) : "",
              title: r.text ? (0, l.we)(r.text) : "",
              items: e,
            });
            break;
          case "radio":
            let t = r.options
              .filter((e) => null != e)
              .map((e, t) => ({ value: e.value, sLabel: (0, l.we)(e.label) }));
            u = s.createElement(H, {
              key: r.name,
              name: r.name,
              label: r.label ? (0, l.we)(r.label) : "",
              items: t,
            });
            break;
          case "scale":
          case "none":
          default:
            u = s.createElement("div", { key: r.name });
            break;
          case "slider":
            u = s.createElement(C, Object.assign({ key: r.name }, r));
            break;
          case "segment":
            let n = r.options
              .filter((e) => null != e)
              .map((e, t) => ({ value: e.value, sLabel: (0, l.we)(e.label) }));
            u = s.createElement(O, {
              key: r.name,
              name: r.name,
              label: r.label ? (0, l.we)(r.label) : "",
              title: r.text ? (0, l.we)(r.text) : "",
              items: n,
            });
            break;
          case "label":
            u = s.createElement(M, Object.assign({ key: r.name }, r));
        }
        if (
          (r.advanced_only &&
            (u = s.createElement(
              T,
              { key: r.name, className: "SettingsItem Advanced" },
              u,
            )),
          r.requires_paths)
        )
          for (let e in r.requires_paths)
            u = s.createElement(
              E,
              { key: r.name, path: e, value: r.requires_paths[e] },
              u,
            );
        return u;
      });
      class V extends s.Component {
        constructor(e) {
          super(e);
        }
        makeResetToDefaultButton() {
          return s.createElement(
            "div",
            { className: "SettingsItem Button ResetDefaultButton" },
            s.createElement(
              h.$,
              { className: "ButtonControl", onClick: this.ResetToDefaults },
              (0, l.we)("#Settings_ResetPageToDefault"),
            ),
          );
        }
        ResetToDefaults() {
          for (let e of this.props.section.values)
            null != e.name && d.HR.SetSettingsValue(e.name, null);
        }
        get schemaComponents() {
          if (!this.props.section.values) return null;
          let e = [];
          for (let t of this.props.section.values)
            (null == t ? void 0 : t.control) &&
              e.push(s.createElement(B, { key: t.name, settingValue: t }));
          return e;
        }
        GetComponentsForGroup(e) {
          let t = [];
          for (let r of this.props.section.values)
            r.control &&
              r.group == e &&
              t.push(s.createElement(B, { key: r.name, settingValue: r }));
          return s.createElement("div", null, t);
        }
        render() {
          return this.props.active
            ? s.createElement(
                s.Fragment,
                null,
                this.schemaComponents,
                this.makeResetToDefaultButton(),
              )
            : null;
        }
      }
      (0, a.Cg)([o.o], V.prototype, "ResetToDefaults", null),
        (0, a.Cg)([c.computed], V.prototype, "schemaComponents", null);
      let I = class extends s.Component {
        constructor(e) {
          if (
            (super(e),
            void 0 !== this.props.name && void 0 !== this.props.value)
          )
            throw new Error(
              "SettingsCheckbox cannot have both an explicit value and a settings name set in props.",
            );
        }
        handleChange(e) {
          let t = e.target.checked;
          this.props.name && d.HR.SetSettingsValue(this.props.name, t),
            this.props.onChange && this.props.onChange(t),
            h.W.temporarilySuppressSoundEffect(),
            p.u.Instance.playSound(p.j.ButtonClick);
        }
        render() {
          let e = !!this.props.value;
          return (
            this.props.name && (e = !!d.HR.settings.get(this.props.name)),
            s.createElement(
              "div",
              { className: "FlexRow SettingsItem Checkbox" },
              s.createElement(
                "label",
                { className: "SettingsCheckboxContainer FlexRow" },
                s.createElement("input", {
                  type: "checkbox",
                  checked: e,
                  onChange: this.handleChange,
                }),
                s.createElement(
                  "div",
                  { className: "FlexColumn" },
                  this.props.label &&
                    s.createElement(
                      "div",
                      { className: "Label" },
                      this.props.label,
                    ),
                  this.props.title &&
                    s.createElement(
                      "div",
                      { className: "Label Description" },
                      this.props.title,
                    ),
                ),
              ),
            )
          );
        }
      };
      (0, a.Cg)([o.o], I.prototype, "handleChange", null),
        (I = (0, a.Cg)([u.PA], I));
      let A = class extends s.Component {
        constructor(e) {
          super(e);
        }
        handleChange(e) {}
        render() {
          var e;
          const t =
            null !== (e = d.HR.settings.get(this.props.name)) && void 0 !== e
              ? e
              : this.props.value;
          return s.createElement(
            T,
            {
              className: "SettingsItem",
              title: this.props.title,
              visibility: this.props.visibility,
            },
            s.createElement("div", { className: "Label" }, this.props.label),
            s.createElement("div", { className: "ValueText" }, t),
          );
        }
      };
      (0, a.Cg)([o.o], A.prototype, "handleChange", null),
        (A = (0, a.Cg)([u.PA], A));
      let O = class extends s.Component {
        constructor(e) {
          if (
            (super(e),
            (this.state = { nMouseDownIndex: 0 }),
            void 0 !== this.props.name && void 0 !== this.props.value)
          )
            throw new Error(
              "SettingsSegmentedControl cannot have both an explicit value and a settings name set in props.",
            );
          if (
            void 0 !== this.props.subsection &&
            void 0 !== this.props.valueSubsections
          )
            throw new Error(
              "SettingsSegmentedControl cannot have both a constantly-visible subsection and value-dependent subsections (valueSubsections) set in props.",
            );
        }
        getCurrentValue() {
          return this.props.name
            ? d.HR.settings.get(this.props.name)
            : this.props.value;
        }
        onItemClick(e) {
          let t = e.value;
          if (this.ValuesAreEqual(t, this.getCurrentValue())) {
            if (2 != this.props.items.length) return;
            t = this.props.items.find(
              (e) => !this.ValuesAreEqual(e.value, t),
            ).value;
          }
          this.props.name && d.HR.SetSettingsValue(this.props.name, t),
            this.props.onChange && this.props.onChange(t),
            (0, m.R$)() == m.OH.Overlay &&
              (h.W.temporarilySuppressSoundEffect(),
              p.u.Instance.playSound(p.j.ButtonClick)),
            this.props.requiresRestart && d.HR.SetRestartRequired();
        }
        onGroupMouseEnter() {
          2 == this.props.items.length &&
            (0, m.R$)() == m.OH.Overlay &&
            _.W.Instance.triggerHaptic(m.en.ButtonEnter);
        }
        onGroupMouseLeave() {
          2 == this.props.items.length &&
            (0, m.R$)() == m.OH.Overlay &&
            _.W.Instance.triggerHaptic(m.en.ButtonLeave);
        }
        onOptionMouseEnter() {
          2 != this.props.items.length &&
            (0, m.R$)() == m.OH.Overlay &&
            _.W.Instance.triggerHaptic(m.en.ButtonEnter);
        }
        onOptionMouseLeave() {
          2 != this.props.items.length &&
            (0, m.R$)() == m.OH.Overlay &&
            _.W.Instance.triggerHaptic(m.en.ButtonLeave);
        }
        ValuesAreEqual(e, t) {
          return (
            ("boolean" != typeof e && "boolean" != typeof t) ||
              ((e = !!e), (t = !!t)),
            e === t
          );
        }
        render() {
          var e, t, r;
          const n = this.getCurrentValue(),
            i = this.props.items.findIndex((e) =>
              this.ValuesAreEqual(e.value, n),
            ),
            a =
              null !==
                (r =
                  null ===
                    (t =
                      null === (e = this.props.valueSubsections) || void 0 === e
                        ? void 0
                        : e.find((e) => this.ValuesAreEqual(e.value, n))) ||
                  void 0 === t
                    ? void 0
                    : t.subsection) && void 0 !== r
                ? r
                : this.props.subsection,
            o = !!a;
          return s.createElement(
            T,
            {
              className: (0, g.FH)("SettingsItem", "SegmentedControl"),
              title: this.props.title,
              visibility: this.props.visibility,
            },
            s.createElement("div", { className: "Label" }, this.props.label),
            s.createElement(
              "div",
              { className: (0, g.FH)("SubsectionStem", ["Hidden", !o]) },
              s.createElement(
                "div",
                {
                  className: (0, g.FH)("SegmentedControlGroup", [
                    "DualValue",
                    2 == this.props.items.length,
                  ]),
                  style: {
                    "--item-count": this.props.items.length,
                    "--item-value-index": i,
                    "--toggle-control-translate-x-direction":
                      0 == i
                        ? 1
                        : i == this.props.items.length - 1
                          ? -1
                          : this.state.nMouseDownIndex > i
                            ? 1
                            : this.state.nMouseDownIndex < i
                              ? -1
                              : 0,
                  },
                  onMouseEnter: this.onGroupMouseEnter,
                  onMouseLeave: this.onGroupMouseLeave,
                },
                this.props.items.map((e, t) =>
                  s.createElement(
                    "div",
                    {
                      key: t,
                      className: (0, g.FH)("SegmentedControlGroupOption", [
                        "Active",
                        this.ValuesAreEqual(e.value, n),
                      ]),
                      onClick: () => this.onItemClick(e),
                      onMouseDown: () => this.setState({ nMouseDownIndex: t }),
                      onMouseEnter: this.onOptionMouseEnter,
                      onMouseLeave: this.onOptionMouseLeave,
                    },
                    s.createElement("span", null, e.sLabel),
                  ),
                ),
              ),
            ),
            !!a &&
              s.createElement("div", { className: "Subsection WithStem" }, a),
          );
        }
      };
      (0, a.Cg)([o.o], O.prototype, "onGroupMouseEnter", null),
        (0, a.Cg)([o.o], O.prototype, "onGroupMouseLeave", null),
        (0, a.Cg)([o.o], O.prototype, "onOptionMouseEnter", null),
        (0, a.Cg)([o.o], O.prototype, "onOptionMouseLeave", null),
        (O = (0, a.Cg)([u.PA], O));
      let k = class extends s.Component {
        constructor(e) {
          if (
            (super(e),
            void 0 !== this.props.name && void 0 !== this.props.value)
          )
            throw new Error(
              "SettingsToggle cannot have both an explicit value and a settings name set in props.",
            );
          if (
            void 0 !== this.props.subsection &&
            (void 0 !== this.props.onSubsection ||
              void 0 !== this.props.offSubsection)
          )
            throw new Error(
              "SettingsToggle cannot have both a constantly-visible subsection and an onSubsection/offSubsection set in props.",
            );
        }
        render() {
          var e, t;
          const r = !!this.props.swapOnOff,
            n = !this.props.swapOnOff;
          return s.createElement(O, {
            name: this.props.name,
            label: this.props.label,
            title: this.props.title,
            items: [
              {
                value: r,
                sLabel:
                  null !== (e = this.props.offLabel) && void 0 !== e
                    ? e
                    : (0, l.we)("#Settings_ToggleButton_Off"),
              },
              {
                value: n,
                sLabel:
                  null !== (t = this.props.onLabel) && void 0 !== t
                    ? t
                    : (0, l.we)("#Settings_ToggleButton_On"),
              },
            ],
            value: this.props.value,
            onChange: this.props.onChange,
            requiresRestart: this.props.requiresRestart,
            subsection: this.props.subsection,
            valueSubsections: this.props.subsection
              ? void 0
              : [
                  { value: r, subsection: this.props.offSubsection },
                  { value: n, subsection: this.props.onSubsection },
                ],
            visibility: this.props.visibility,
          });
        }
      };
      k = (0, a.Cg)([u.PA], k);
      let L = class extends s.Component {
        constructor(e) {
          if (
            (super(e),
            void 0 !== this.props.name && void 0 !== this.props.value)
          )
            throw new Error(
              "SettingsDropdown cannot have both an explicit value and a settings name set in props.",
            );
        }
        get value() {
          return this.props.name
            ? d.HR.settings.get(this.props.name)
            : void 0 !== this.props.value
              ? this.props.value
              : null;
        }
        onChange(e) {
          this.props.name &&
            d.HR.SetSettingsValue(this.props.name, e.toString()),
            this.props.onChange && this.props.onChange(e),
            this.props.requiresRestart && d.HR.SetRestartRequired();
        }
        render() {
          let e = Object.assign({}, this.props);
          return (
            (e.onChange = this.onChange),
            (e.value = this.value),
            s.createElement(
              T,
              {
                className: "SettingsItem",
                title: this.props.title,
                visibility: this.props.visibility,
              },
              this.props.label &&
                s.createElement(
                  "div",
                  {
                    className: (0, g.FH)("Label", [
                      "Spanning",
                      this.props.fullWidth,
                    ]),
                  },
                  this.props.label,
                ),
              s.createElement(
                "div",
                {
                  className: (0, g.FH)("SubsectionStem", [
                    "Hidden",
                    !this.props.subsection,
                  ]),
                },
                s.createElement(b.ms, Object.assign({}, e)),
              ),
              !!this.props.subsection &&
                s.createElement(
                  "div",
                  { className: "Subsection WithStem" },
                  this.props.subsection,
                ),
            )
          );
        }
      };
      (0, a.Cg)([c.computed], L.prototype, "value", null),
        (0, a.Cg)([o.o], L.prototype, "onChange", null),
        (L = (0, a.Cg)([u.PA], L));
      let H = class extends s.Component {
        constructor(e) {
          if (
            (super(e),
            void 0 !== this.props.name && void 0 !== this.props.value)
          )
            throw new Error(
              "SettingsRadioButtons cannot have both an explicit value and a settings name set in props.",
            );
        }
        get value() {
          return this.props.name
            ? d.HR.settings.get(this.props.name)
            : void 0 !== this.props.value
              ? this.props.value
              : null;
        }
        onChange(e) {
          this.props.name &&
            d.HR.SetSettingsValue(this.props.name, e.toString()),
            this.props.onChange && this.props.onChange(e);
        }
        render() {
          const e = this.props.items.map((e, t) => {
            const r = this.props.comparator
              ? this.props.comparator(this.value, e.value)
              : this.value == e.value;
            return s.createElement(
              h.$,
              {
                className: (0, g.FH)("RadioButton", ["Selected", r]),
                key: t,
                enabled: !r,
                onClick: () => this.onChange(e.value),
              },
              s.createElement("div", { className: "Label" }, e.sLabel),
            );
          });
          return s.createElement(
            T,
            {
              className: (0, g.FH)("SettingsItem", "RadioButtons"),
              title: this.props.title,
            },
            s.createElement("div", { className: "Label" }, this.props.label),
            s.createElement("div", { className: "RadioButtonsSet" }, e),
          );
        }
      };
      (0, a.Cg)([c.computed], H.prototype, "value", null),
        (0, a.Cg)([o.o], H.prototype, "onChange", null),
        (H = (0, a.Cg)([u.PA], H));
      let P = class extends s.Component {
        constructor(e) {
          if (
            (super(e),
            void 0 !== this.props.name && void 0 !== this.props.value)
          )
            throw new Error(
              "SettingsSlider cannot have both an explicit value and a settings name set in props.",
            );
          (this.state = {}),
            (this.m_sUniqueIdForFadeSupression = Math.random().toString());
        }
        onInteractionStart() {
          var e, t;
          this.props.dashboardFadeSupression &&
            d.HR.SetDashboardFadeSupression(
              this.m_sUniqueIdForFadeSupression,
              !0,
            ),
            null === (t = (e = this.props).onInteractionStart) ||
              void 0 === t ||
              t.call(e);
        }
        onInteractionEnd() {
          var e, t;
          this.props.dashboardFadeSupression &&
            d.HR.SetDashboardFadeSupression(
              this.m_sUniqueIdForFadeSupression,
              !1,
            ),
            null === (t = (e = this.props).onInteractionEnd) ||
              void 0 === t ||
              t.call(e);
        }
        get value() {
          if (this.props.name) {
            let e = d.HR.settings.get(this.props.name);
            return e || 0;
          }
          return this.props.value;
        }
        onChange(e) {
          var t, r;
          this.props.name &&
            d.HR.SetSettingsValue(this.props.name, e.toString()),
            null === (r = (t = this.props).onChange) ||
              void 0 === r ||
              r.call(t, e);
        }
        render() {
          let e = Object.assign({}, this.props);
          return (
            (e.onInteractionStart = this.onInteractionStart),
            (e.onInteractionEnd = this.onInteractionEnd),
            (e.onChange = this.onChange),
            (e.value = this.value),
            s.createElement(
              T,
              {
                className: (0, g.FH)(
                  "SettingsItem",
                  "Slider",
                  this.props.additionalClassName,
                ),
                title: this.props.title,
              },
              this.props.label &&
                s.createElement(
                  "label",
                  {
                    className: (0, g.FH)("Label", [
                      "Spanning",
                      this.props.labelSpans,
                    ]),
                  },
                  this.props.label,
                ),
              s.createElement(f.Ap, Object.assign({}, e)),
              void 0 !== this.props.resetValue &&
                this.props.resetValue !== d.HR.settings.get(this.props.name) &&
                s.createElement(
                  s.Fragment,
                  null,
                  this.props.resetText &&
                    s.createElement(
                      "label",
                      { className: "Label" },
                      this.props.resetText,
                    ),
                  s.createElement(
                    "div",
                    { className: "SettingsItem Button ResetDefaultButton" },
                    s.createElement(
                      h.$,
                      {
                        className: "ButtonControl",
                        onClick: () =>
                          d.HR.SetSettingsValue(this.props.name, null),
                      },
                      (0, l.we)("#Settings_ResetToDefault"),
                    ),
                  ),
                ),
            )
          );
        }
      };
      function F(e) {
        return (
          "#" +
          ("0" + Math.floor(e.r).toString(16)).slice(-2) +
          ("0" + Math.floor(e.g).toString(16)).slice(-2) +
          ("0" + Math.floor(e.b).toString(16)).slice(-2) +
          ("0" + Math.floor(255 * e.a).toString(16)).slice(-2)
        ).toUpperCase();
      }
      (0, a.Cg)([o.o], P.prototype, "onInteractionStart", null),
        (0, a.Cg)([o.o], P.prototype, "onInteractionEnd", null),
        (0, a.Cg)([c.computed], P.prototype, "value", null),
        (0, a.Cg)([o.o], P.prototype, "onChange", null),
        (P = (0, a.Cg)([u.PA], P));
      let N = (n = class extends s.Component {
        static HueToRGB(e, t, r) {
          return 6 * (r = (r + 1) % 1) < 1
            ? e + (t - e) * r * 6
            : 2 * r < 1
              ? t
              : 3 * r < 2
                ? e + (t - e) * (2 / 3 - r) * 6
                : e;
        }
        static HSLToRGB(e, t, r) {
          e /= 360;
          let i = r <= 0.5 ? r * (1 + t) : r + t - r * t,
            a = 2 * r - i;
          return [
            n.HueToRGB(a, i, e + 1 / 3),
            n.HueToRGB(a, i, e),
            n.HueToRGB(a, i, e - 1 / 3),
          ];
        }
        static RGBtoHueLuminance(e, t, r) {
          (e /= 255), (t /= 255), (r /= 255);
          let n = Math.max(e, t, r),
            i = Math.min(e, t, r),
            a = 0,
            s = (n + i) / 2;
          if (n != i) {
            let s = n - i;
            switch (n) {
              case e:
                a = (t - r) / s + (t < r ? 6 : 0);
                break;
              case t:
                a = (r - e) / s + 2;
                break;
              case r:
                a = (e - t) / s + 4;
            }
            a /= 6;
          }
          return { hue: 360 * a, luminance: s };
        }
        onSliderChanged(e) {
          let t = [255, 255, 255];
          if (
            (e <= 360 && (t = n.HSLToRGB(e, 1, 0.5).map((e) => 255 * e)),
            this.props.name)
          ) {
            const e =
              "#" +
              (t[2] | (t[1] << 8) | (t[0] << 16)).toString(16).padStart(6, "0");
            d.HR.SetSettingsValue(this.props.name, e);
          }
          this.props.nameR &&
            this.props.nameG &&
            this.props.nameB &&
            (d.HR.SetSettingsValue(this.props.nameR, t[0]),
            d.HR.SetSettingsValue(this.props.nameG, t[1]),
            d.HR.SetSettingsValue(this.props.nameB, t[2])),
            this.props.onChange &&
              this.props.onChange({ r: t[0], g: t[1], b: t[2] });
        }
        render() {
          let e, t, r;
          this.props.nameR && this.props.nameG && this.props.nameB
            ? ((e = d.HR.settings.get(this.props.nameR)),
              (t = d.HR.settings.get(this.props.nameG)),
              (r = d.HR.settings.get(this.props.nameB)))
            : this.props.value &&
              ((e = this.props.value.r),
              (t = this.props.value.g),
              (r = this.props.value.b));
          const i = n.RGBtoHueLuminance(e, t, r),
            a = 360 / (1 - n.WHITE_SIZE_PERCENT),
            o = 255 == e && 255 == t && 255 == r ? a : i.hue;
          return s.createElement(P, {
            additionalClassName: "Hue",
            label: this.props.label,
            labelSpans: !0,
            title: this.props.text,
            styleVariant: f.uJ.Color,
            renderValue: (e) =>
              e > 360 ? "white" : "hsl(" + e + ", 100%, 50%)",
            max: a,
            value: o,
            onChange: this.onSliderChanged,
          });
        }
      });
      (N.WHITE_SIZE_PERCENT = 0.03),
        (0, a.Cg)([o.o], N.prototype, "onSliderChanged", null),
        (N = n = (0, a.Cg)([u.PA], N));
      let x = class extends s.Component {
        get value() {
          return this.props.name
            ? d.HR.settings.get(this.props.name)
            : this.props.value;
        }
        onSliderChanged(e) {
          this.props.onChange && this.props.onChange(e),
            this.props.name && d.HR.SetSettingsValue(this.props.name, e);
        }
        render() {
          var e;
          const t = this.props.color
              ? this.props.color
              : { r: 255, g: 255, b: 255 },
            r = null !== (e = this.props.max) && void 0 !== e ? e : 255;
          return s.createElement(P, {
            additionalClassName: "Alpha",
            label: this.props.label,
            title: this.props.text,
            labelSpans: !0,
            styleVariant: f.uJ.Color,
            renderValue: (e) =>
              "rgba(" +
              (t.r * e) / r +
              "," +
              (t.g * e) / r +
              "," +
              (t.b * e) / r +
              ",1)",
            sliderColor: "rgb(" + t.r + "," + t.g + "," + t.b + ")",
            min: this.props.min,
            max: this.props.max,
            value: this.value,
            onChange: this.onSliderChanged,
          });
        }
      };
      (0, a.Cg)([c.computed], x.prototype, "value", null),
        (0, a.Cg)([o.o], x.prototype, "onSliderChanged", null),
        (x = (0, a.Cg)([u.PA], x));
      let W,
        z = class extends s.Component {
          constructor(e) {
            super(e), (this.state = { bShowingModal: !1 });
          }
          get value() {
            if (this.props.name)
              return (e = d.HR.settings.get(this.props.name))
                ? {
                    r: parseInt(e.slice(1, 3), 16),
                    g: parseInt(e.slice(3, 5), 16),
                    b: parseInt(e.slice(5, 7), 16),
                    a: parseInt(e.slice(7, 9), 16) / 255,
                  }
                : { r: 0, g: 0, b: 0, a: 0 };
            if (
              this.props.nameR ||
              this.props.nameG ||
              this.props.nameB ||
              this.props.nameA
            ) {
              let e = { r: 0, g: 0, b: 0, a: 1 };
              return (
                this.props.nameR && (e.r = d.HR.settings.get(this.props.nameR)),
                this.props.nameG && (e.g = d.HR.settings.get(this.props.nameG)),
                this.props.nameB && (e.b = d.HR.settings.get(this.props.nameB)),
                this.props.nameA &&
                  (e.a = d.HR.settings.get(this.props.nameA) / this.alphaScale),
                e
              );
            }
            return this.props.value;
            var e;
          }
          get alphaScale() {
            return void 0 === this.props.alphaScale ? 1 : this.props.alphaScale;
          }
          onAlphaChange(e) {
            const t = this.value,
              r = { r: t.r, g: t.g, b: t.b, a: e };
            this.props.name && d.HR.SetSettingsValue(this.props.name, F(r)),
              this.props.nameA &&
                d.HR.SetSettingsValue(this.props.nameA, e * this.alphaScale),
              this.props.onChange && this.props.onChange(r);
          }
          get minA() {
            return void 0 === this.props.minA ? 0 : this.props.minA;
          }
          get maxA() {
            return void 0 === this.props.maxA ? 1 : this.props.maxA;
          }
          onColorChange(e) {
            const t = { r: e.r, g: e.g, b: e.b, a: this.value.a };
            this.props.name && d.HR.SetSettingsValue(this.props.name, F(t)),
              this.props.nameR && d.HR.SetSettingsValue(this.props.nameR, t.r),
              this.props.nameG && d.HR.SetSettingsValue(this.props.nameG, t.g),
              this.props.nameB && d.HR.SetSettingsValue(this.props.nameB, t.b),
              this.props.onChange && this.props.onChange(t);
          }
          showModal() {
            this.setState({ bShowingModal: !0 });
          }
          hideModal() {
            this.setState({ bShowingModal: !1 });
          }
          render() {
            const e = this.value;
            return s.createElement(
              T,
              {
                className: "SettingsItem ColorPicker",
                title: this.props.title,
              },
              this.props.label &&
                s.createElement(
                  "div",
                  { className: "Label" },
                  this.props.label,
                ),
              s.createElement(h.$, {
                className: "ButtonControl",
                onClick: this.showModal,
                style: {
                  "--color-value-rgb": e.r + "," + e.g + "," + e.b,
                  "--color-value-a": e.a,
                },
              }),
              this.state.bShowingModal &&
                s.createElement(
                  q,
                  {
                    onDismissRequested: this.hideModal,
                    header: this.props.label,
                  },
                  s.createElement(N, {
                    label: (0, l.we)("#Settings_Chaperone_BoundsColor"),
                    onChange: this.onColorChange,
                    value: e,
                  }),
                  s.createElement(x, {
                    label: (0, l.we)("#Settings_Chaperone_BoundsTransparency"),
                    min: this.minA,
                    max: this.maxA,
                    onChange: this.onAlphaChange,
                    color: e,
                    value: e.a,
                  }),
                ),
            );
          }
        };
      (0, a.Cg)([c.computed], z.prototype, "value", null),
        (0, a.Cg)([c.computed], z.prototype, "alphaScale", null),
        (0, a.Cg)([o.o], z.prototype, "onAlphaChange", null),
        (0, a.Cg)([c.computed], z.prototype, "minA", null),
        (0, a.Cg)([c.computed], z.prototype, "maxA", null),
        (0, a.Cg)([o.o], z.prototype, "onColorChange", null),
        (0, a.Cg)([o.o], z.prototype, "showModal", null),
        (0, a.Cg)([o.o], z.prototype, "hideModal", null),
        (z = (0, a.Cg)([u.PA], z));
      class G {
        constructor() {
          (this.m_sceneApplicationStateChangedEventHandle = null),
            (this.m_mapSelectedAppKeys = {}),
            (this.m_mapCallbacks = {}),
            (this.runningAppKey = void 0),
            (this.m_sceneApplicationStateChangedEventHandle =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.RegisterForSceneApplicationStateChangedEvents(
                    this.onSceneApplicationStateChanged,
                  )),
            this.onSceneApplicationStateChanged(),
            (0, c.makeObservable)(this);
        }
        theresNoDestructor() {
          var e;
          null === (e = this.m_sceneApplicationStateChangedEventHandle) ||
            void 0 === e ||
            e.unregister();
        }
        register(e, t) {
          (this.m_mapCallbacks[e] = t),
            t(this.m_mapSelectedAppKeys[e] || this.runningAppKey);
        }
        unregister(e) {
          delete this.m_mapCallbacks[e];
        }
        setAppKey(e, t) {
          this.m_mapSelectedAppKeys[e] = t;
        }
        onSceneApplicationStateChanged() {
          var e;
          const t =
            null !==
              (e =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRApplications.GetSceneApplicationKey()) &&
            void 0 !== e
              ? e
              : null;
          t !== this.runningAppKey &&
            ((this.runningAppKey = t),
            (this.m_mapSelectedAppKeys = {}),
            Object.values(this.m_mapCallbacks).forEach((e) => {
              e(this.runningAppKey);
            }));
        }
      }
      (0, a.Cg)([c.observable], G.prototype, "runningAppKey", void 0),
        (0, a.Cg)([o.o], G.prototype, "onSceneApplicationStateChanged", null);
      class U extends s.Component {
        constructor(e) {
          W || (W = new G()), super(e), (this.state = { currentApp: null });
        }
        componentDidMount() {
          W.register(this.props.stateKey, this.onSceneApplicationStateChanged);
        }
        componentWillUnmount() {
          W.unregister(this.props.stateKey);
        }
        onSceneApplicationStateChanged(e) {
          var t, r;
          const n = this.props.showCompositor
              ? "openvr.component.vrcompositor"
              : null,
            i =
              null !==
                (r =
                  null !== (t = this.props.defaultAppKey) && void 0 !== t
                    ? t
                    : e) && void 0 !== r
                ? r
                : n;
          this.setCurrentApp(i);
        }
        setCurrentApp(e) {
          const t = d.HR.apps && d.HR.apps.find((t) => t.key == e);
          this.setState((e, r) => {
            var n;
            return (null === (n = e.currentApp) || void 0 === n
              ? void 0
              : n.key) === (null == t ? void 0 : t.key)
              ? null
              : (this.props.onChange && this.props.onChange(t),
                { currentApp: t });
          });
        }
        makeAppChoiceList() {
          let e = [],
            t = " " + (0, l.we)("#Settings_PerApplication_DashboardSuffix");
          if (null != d.HR.apps)
            for (let r of d.HR.apps) {
              let n = !r.is_hidden;
              "openvr.component.vrcompositor" == r.key
                ? (n = !!this.props.showCompositor)
                : r.key == S.Eo
                  ? (n = !!this.props.showSteam)
                  : r.key == S.MM || r.key == S.v0
                    ? (n = !!this.props.showSteamVR)
                    : r.key.startsWith("system.generated")
                      ? (n = !!this.props.showGenerated)
                      : r.is_internal
                        ? (n = !!this.props.showInternal)
                        : r.is_dashboard_overlay &&
                          (n = !!this.props.showOverlays),
                (n || r.current_scene_process) &&
                  e.push({
                    value: r.key,
                    sLabel: r.name + (r.is_dashboard_overlay ? t : ""),
                  });
            }
          const r = (e) =>
              e.value == W.runningAppKey ||
              "openvr.component.vrcompositor" == e.value,
            n = e.filter(r),
            i = e.filter((e) => !r(e));
          return (
            n.sort((e, t) =>
              e.value == W.runningAppKey
                ? -1
                : t.value == W.runningAppKey
                  ? 1
                  : "openvr.component.vrcompositor" == e.value
                    ? -1
                    : "openvr.component.vrcompositor" == t.value
                      ? 1
                      : e.sLabel.localeCompare(t.sLabel),
            ),
            i.sort((e, t) => e.sLabel.localeCompare(t.sLabel)),
            n.length > 0 && i.length > 0
              ? [...n, b.Sr.Separator, ...i]
              : n.length > 0
                ? n
                : i
          );
        }
        onControllerDropdownChanged(e) {
          W.setAppKey(this.props.stateKey, e), this.setCurrentApp(e);
        }
        render() {
          const e = this.makeAppChoiceList(),
            t = this.state.currentApp ? this.state.currentApp.key : null;
          return s.createElement(L, {
            label: this.props.label,
            items: e,
            value: t,
            defaultLabel:
              this.props.defaultLabel ||
              (0, l.we)("#Settings_PerApplication_ChooseApplication"),
            onChange: this.onControllerDropdownChanged,
            fullWidth: !0,
          });
        }
      }
      (0, a.Cg)([o.o], U.prototype, "onSceneApplicationStateChanged", null),
        (0, a.Cg)([o.o], U.prototype, "onControllerDropdownChanged", null);
      const q = (e) => {
          let t = Object.assign({}, e),
            r = t.header;
          "string" == typeof r && (r = s.createElement("h1", null, r));
          let n = t.subheader;
          "string" == typeof n &&
            (n = s.createElement("div", { className: "Label" }, n));
          let i = t.footer;
          void 0 === i &&
            (i = s.createElement(j, {
              onDismissRequested: t.onDismissRequested,
            }));
          const a = t.allowableParentSelectors || [];
          return (
            m.O5.IsSceneGraphApp ||
              (t.allowableParentSelectors = [
                ...a,
                ".SettingsSidebarPageModalContainer",
              ]),
            s.createElement(
              v.a,
              Object.assign({}, t),
              r && s.createElement("div", { className: "Subsection Top" }, r),
              n &&
                s.createElement(
                  "div",
                  { className: "Subsection Top Subheader" },
                  n,
                ),
              e.children &&
                s.createElement(
                  R.M,
                  {
                    scrollDirection: R.D.Vertical,
                    className: "Subsection Body",
                  },
                  t.children,
                ),
              i &&
                s.createElement("div", { className: "Subsection Bottom" }, i),
            )
          );
        },
        j = (e) => {
          let t = e.leftControls ? e.leftControls : [];
          e.showResetButton &&
            t.push(
              s.createElement(
                h.$,
                {
                  key: "reset",
                  className: "ButtonControl",
                  onClick: e.onResetRequested,
                },
                (0, l.we)("#Settings_ResetToDefault"),
              ),
            );
          let r = [
            s.createElement(
              h.$,
              {
                key: "close",
                className: "ButtonControl",
                onClick: e.onDismissRequested,
              },
              (0, l.we)("#Settings_General_Close"),
            ),
          ];
          return s.createElement(
            "div",
            { className: "SettingsItem ButtonRow" },
            t,
            t.length > 0 &&
              r.length > 0 &&
              s.createElement("div", { className: "Spacer" }),
            r,
          );
        };
      var K;
      !(function (e) {
        e[(e.PopOut = 0)] = "PopOut";
      })(K || (K = {}));
      const $ = (e) => {
        let t = null;
        if (void 0 !== e.icon && e.icon === K.PopOut)
          t = s.createElement(y.FG, { className: "Icon" });
        return s.createElement(
          h.$,
          Object.assign(
            { className: (0, g.FH)("ButtonControl", ["WithIcon", null !== t]) },
            e,
          ),
          s.createElement("span", null, e.children),
          t,
        );
      };
    },
    2267: (e, t, r) => {
      "use strict";
      r.d(t, {
        Pj: () => E,
        xR: () => L,
        a5: () => H,
        y: () => y,
        rO: () => C,
        zU: () => B,
        EM: () => D,
      });
      var n = r(1635),
        i = r(7813),
        a = r(1370),
        s = r(6540),
        o = r(6090),
        l = r(6138),
        c = r(4493),
        u = r(917),
        d = r(3236),
        m = r(3606),
        p = r(3714),
        h = r(1139),
        g = r(1333),
        v = r(3720);
      var _,
        b = r(3732);
      function S() {
        VRHTML
          ? VRHTML.VRMonitor.SetDirectModeEnabled(!0, !0)
          : window.open("vrmonitor://directmode/enable");
      }
      const y = (0, a.PA)(() => {
          if (
            !g.HR.systemInfo ||
            0 == g.HR.systemInfo.refresh_rates.actual_display_frequency
          )
            return null;
          if (g.HR.systemInfo.refresh_rates.supported_rates.length > 1)
            return s.createElement(v.ym, {
              name: "/settings/steamvr/preferredRefreshRate",
              comparator: (e, t) => Math.round(e) == Math.round(t),
              label: (0, p.we)("#Settings_Video_RefreshRate_Label_Hz"),
              items: g.HR.systemInfo.refresh_rates.supported_rates.map((e) => ({
                value: e,
                sLabel: Math.round(e).toString(),
              })),
            });
          {
            const e = g.HR.systemInfo.refresh_rates.supports_multiple_rates,
              t = g.HR.systemInfo.extended_mode,
              r = Math.round(
                g.HR.systemInfo.refresh_rates.actual_display_frequency,
              );
            return s.createElement(
              v.YO,
              {
                className: "SettingsItem",
                title: e
                  ? null
                  : (0, p.we)("#Settings_Video_RefreshRate_OneSupported"),
              },
              s.createElement(
                "div",
                { className: "Label" },
                (0, p.we)("#Settings_Video_RefreshRate_Header"),
              ),
              s.createElement(
                "div",
                { className: (0, h.FH)("Label", ["SubsectionStem", e]) },
                r + (0, p.we)("#Settings_Video_RefreshRate_HzSuffix"),
              ),
              e &&
                s.createElement(
                  "div",
                  { className: "Subsection WithStem" },
                  t &&
                    (0, p.we)(
                      "#Settings_Video_RefreshRate_NotAvailableExtended",
                    ),
                  t &&
                    (0, o.R$)() != o.OH.Overlay &&
                    s.createElement(
                      l.$,
                      { className: "ButtonControl", onClick: S },
                      (0, p.we)(
                        "#Settings_Video_RefreshRate_EnableDirectModeAction",
                      ),
                    ),
                  !t && (0, p.we)("#Settings_Video_RefreshRate_NotFound"),
                ),
            );
          }
        }),
        f = 3240,
        R = () => {
          const [e, t] = s.useState(!1),
            r = (0, p.we)(
              "#Settings_Advanced_Supersampling_WidthByHeight",
              f,
              f,
            );
          return s.createElement(
            s.Fragment,
            null,
            e &&
              s.createElement(
                v.bB,
                {
                  className: "MaxRecommendedResolutionRecovery",
                  footer: s.createElement(
                    l.$,
                    {
                      key: "close",
                      className: "ButtonControl",
                      onClick: () => t(!1),
                    },
                    (0, p.we)("#Settings_General_Cancel"),
                  ),
                  onDismissRequested: () => t(!1),
                },
                s.createElement(
                  "div",
                  { className: "Description" },
                  (0, p.we)(
                    "#Settings_Video_MaxRecommendedResolutionRecoveryStatement",
                    r,
                  ),
                ),
                s.createElement(
                  "div",
                  { className: "Description" },
                  (0, p.we)(
                    "#Settings_Video_MaxRecommendedResolutionRecoveryExplanation",
                    r,
                  ),
                ),
                s.createElement(
                  l.$,
                  {
                    className: "ButtonControl",
                    title: (0, p.we)(
                      "#Settings_Video_MaxRecommendedResolutionRecoveryActionAutoTip",
                    ),
                    onClick: () =>
                      (0, n.sH)(void 0, void 0, void 0, function* () {
                        g.HR.ResetAllAppResolutionScales().then(() => {
                          g.HR.ResetSettingsValue(m.wt),
                            g.HR.ResetSettingsValue(m.w5),
                            g.HR.ResetSettingsValue(m.rG);
                        });
                      }),
                  },
                  (0, p.we)(
                    "#Settings_Video_MaxRecommendedResolutionRecoveryActionAuto",
                  ),
                ),
                s.createElement(
                  l.$,
                  {
                    className: "ButtonControl",
                    title: (0, p.we)(
                      "#Settings_Video_MaxRecommendedResolutionRecoveryActionRemoveTip",
                    ),
                    onClick: () => {
                      g.HR.ResetSettingsValue(m.rG);
                    },
                  },
                  (0, p.we)(
                    "#Settings_Video_MaxRecommendedResolutionRecoveryActionRemove",
                  ),
                ),
              ),
            s.createElement(
              "div",
              { className: "Label" },
              (0, p.we)(
                "#Settings_Video_MaxRecommendedResolutionRecoveryText",
                r,
              ),
            ),
            s.createElement(
              l.$,
              {
                className: "ButtonControl",
                title: (0, p.we)(
                  "#Settings_Video_MaxRecommendedResolutionRecoveryTip",
                ),
                onClick: () => t(!0),
              },
              (0, p.we)("#Settings_Video_MaxRecommendedResolutionRecovery"),
            ),
          );
        },
        w = (0, a.PA)(
          () => g.HR.settings.get(m.rG) == f && s.createElement(R, null),
        ),
        C = (0, a.PA)(() => {
          const e = g.HR.settings.get(m.wt),
            t = g.HR.settings.get(m.w5);
          let r = [],
            n = g.HR.settings.get(m.j5);
          if ((n > 0 ? r.push(n) : r.push(1), null === e || null === t))
            return null;
          let i = null;
          if (
            g.HR.systemInfo &&
            null != g.HR.systemInfo.render_target_size.width &&
            0 != g.HR.systemInfo.render_target_size.height
          ) {
            const e = g.HR.SliderposToSupersample(t);
            let r = Math.max(
                512,
                Math.floor(
                  g.HR.systemInfo.render_target_size.width * Math.sqrt(e) + 0.5,
                ),
              ),
              n = Math.max(
                512,
                Math.floor(
                  g.HR.systemInfo.render_target_size.height * Math.sqrt(e) +
                    0.5,
                ),
              );
            const a = g.HR.settings.get(m.rG);
            Math.max(r, n) > a &&
              (r > n
                ? ((n = (a * n) / r), (r = a))
                : ((r = (a * r) / n), (n = a))),
              (r = 4 * Math.trunc(r / 4)),
              (n = 4 * Math.trunc(n / 4)),
              (i = (0, p.we)(
                "#Settings_Advanced_Supersampling_WidthByHeight",
                r,
                n,
              ));
          }
          return s.createElement(v.Al, {
            name: m.wt,
            label: (0, p.we)("#Settings_Advanced_Supersampling_Header"),
            onLabel: (0, p.we)("#Settings_Advanced_Supersampling_Auto"),
            offLabel: (0, p.we)("#Settings_Advanced_Supersampling_Custom"),
            title: e ? "" : (0, p.we)("#Explanation_Supersampling_Header"),
            swapOnOff: !0,
            offSubsection: s.createElement(
              s.Fragment,
              null,
              s.createElement(
                v.YO,
                { className: "SettingsItem" },
                s.createElement(
                  "div",
                  { className: "Label" },
                  (0, p.we)(
                    "#Settings_Advanced_Supersampline_ResolutionPerEye",
                  ),
                ),
                s.createElement(
                  "div",
                  { className: "Label Right Resolution" },
                  s.createElement("div", { className: "Dimensions" }, i),
                  s.createElement(
                    "div",
                    { className: "Percentage" },
                    Math.round(100 * t).toString() + "%",
                  ),
                ),
                s.createElement(v.tE, {
                  min: 0.2,
                  max: 5,
                  step: 0.02,
                  detents: r,
                  value: t,
                  onChange: (e) => g.HR.SetSettingsValue(m.w5, e),
                }),
                s.createElement(w, null),
              ),
            ),
          });
        });
      let M = class extends s.Component {
        constructor(e) {
          super(e),
            (this.state = { bShowingModal: !1 }),
            (this.m_sUniqueIdForFadeSupression = Math.random().toString());
        }
        componentWillUnmount() {
          this.state.bShowingModal &&
            g.HR.SetDashboardFadeSupression(
              this.m_sUniqueIdForFadeSupression,
              !1,
            );
        }
        showModal() {
          this.setState({ bShowingModal: !0 }),
            g.HR.SetDashboardFadeSupression(
              this.m_sUniqueIdForFadeSupression,
              !0,
            );
        }
        hideModal() {
          this.setState({ bShowingModal: !1 }),
            g.HR.SetDashboardFadeSupression(
              this.m_sUniqueIdForFadeSupression,
              !1,
            );
        }
        render() {
          if (!VRHTML) return null;
          const e = VRHTML.VRProperties.GetStringProperty(
            "/user/head",
            o.fD.HmdColumnCorrectionSettingPrefix_String,
          );
          if (!e) return null;
          if ("firmware_update_required" == e)
            return s.createElement(
              v.YO,
              {
                title: (0, p.we)("#DisplaySettings_ColumnCorrectionDesc"),
                className: "SettingsItem",
                visibility: this.props.visibility,
              },
              s.createElement(
                "div",
                { className: "Label" },
                (0, p.we)("#DisplaySettings_ColumnCorrection"),
              ),
              s.createElement(
                "div",
                { className: "Subsection WithStem" },
                s.createElement(
                  "div",
                  { className: "Label" },
                  (0, p.we)("#DisplaySettings_Error_FirmwareUpdateNeeded"),
                ),
              ),
            );
          {
            let t = g.HR.settings.get(m.GM);
            const r = "/settings/driver_lighthouse/" + e + "_L",
              n = "/settings/driver_lighthouse/" + e + "_R";
            let i = g.HR.settings.get(r);
            null == i && (i = 0);
            let a = g.HR.settings.get(n);
            return (
              null == a && (a = 0),
              s.createElement(
                v.YO,
                {
                  className: "SettingsItem",
                  title: (0, p.we)("#DisplaySettings_ColumnCorrectionDesc"),
                  visibility: this.props.visibility,
                },
                s.createElement(
                  "div",
                  { className: "Label" },
                  (0, p.we)("#DisplaySettings_IndexColumnCorrection"),
                ),
                s.createElement(
                  l.$,
                  { className: "ButtonControl", onClick: this.showModal },
                  (0, p.we)("#DisplaySettings_ColumnCorrectionEdit"),
                ),
                this.state.bShowingModal &&
                  s.createElement(
                    v.bB,
                    {
                      onDismissRequested: this.hideModal,
                      allowableParentSelectors: [".SettingsMain"],
                      header: (0, p.we)(
                        "#DisplaySettings_IndexColumnCorrection",
                      ),
                      footer: s.createElement(v.tR, {
                        showResetButton: !0,
                        onResetRequested: () => {
                          g.HR.SetSettingsValue(m.GM, 1),
                            g.HR.SetSettingsValue(r, 0),
                            g.HR.SetSettingsValue(n, 0);
                        },
                        onDismissRequested: this.hideModal,
                      }),
                    },
                    s.createElement(v.Al, {
                      value: 0 != t,
                      title: (0, p.we)("#DisplaySettings_ColumnCorrectionDesc"),
                      label: (0, p.we)("#DisplaySettings_ColumnCorrection"),
                      offLabel: (0, p.we)(
                        "#DisplaySettings_ColumnCorrectionOff",
                      ),
                      onLabel: (0, p.we)(
                        "#DisplaySettings_ColumnCorrectionAuto",
                      ),
                      onChange: (e) => g.HR.SetSettingsValue(m.GM, e ? 1 : 0),
                    }),
                    s.createElement(v.tE, {
                      label: (0, p.we)(
                        "#DisplaySettings_ColumnCorrectionBiasLeft",
                      ),
                      min: -10,
                      max: 10,
                      step: 1,
                      value: i,
                      detents: [0],
                      valueStyleVariant: u.Te.OnHandle,
                      renderValue: (e) => e.toFixed(0),
                      onChange: (e) => g.HR.SetSettingsValue(r, e),
                    }),
                    s.createElement(v.tE, {
                      label: (0, p.we)(
                        "#DisplaySettings_ColumnCorrectionBiasRight",
                      ),
                      min: -10,
                      max: 10,
                      step: 1,
                      value: a,
                      detents: [0],
                      valueStyleVariant: u.Te.OnHandle,
                      renderValue: (e) => e.toFixed(0),
                      onChange: (e) => g.HR.SetSettingsValue(n, e),
                    }),
                  ),
              )
            );
          }
        }
      };
      (0, n.Cg)([d.o], M.prototype, "showModal", null),
        (0, n.Cg)([d.o], M.prototype, "hideModal", null),
        (M = (0, n.Cg)([a.PA], M));
      const E = (0, a.PA)(() =>
        null == b.D.brightnessUserValue
          ? null
          : s.createElement(
              v.YO,
              { className: "SettingsItem" },
              s.createElement(
                "div",
                { className: "Label" },
                (0, p.we)("#DisplaySettings_DisplayBrightness"),
              ),
              s.createElement(v.tE, {
                min: b.D.minBrightnessUserValue,
                max: b.D.maxBrightnessUserValue,
                value: b.D.brightnessUserValue,
                detents: [100],
                valueStyleVariant: u.Te.OnHandle,
                renderValue: (e) => e.toFixed(0) + "%",
                onChange: (e) => b.D.setBrightnessUserValue(e),
                dashboardFadeSupression: !0,
              }),
            ),
      );
      class T extends s.Component {
        constructor(e) {
          super(e);
        }
        render() {
          const e =
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.GetRecommendedOverlayRenderQuality();
          return s.createElement(v.xS, {
            name: "/settings/steamvr/overlayRenderQuality_2",
            label: (0, p.we)("#Settings_OverlayRenderQuality"),
            items: [
              {
                value: o.pM.Auto,
                sLabel:
                  void 0 !== e
                    ? (0, p.we)(
                        "#Settings_Auto_Parenthesized",
                        (0, p.we)("#Settings_" + o.pM[e]),
                      )
                    : (0, p.we)("#Settings_Auto"),
              },
              c.Sr.Separator,
              { value: o.pM.Low, sLabel: (0, p.we)("#Settings_Low") },
              { value: o.pM.Medium, sLabel: (0, p.we)("#Settings_Medium") },
              { value: o.pM.High, sLabel: (0, p.we)("#Settings_High") },
            ],
            visibility: v.Z3.Advanced,
          });
        }
      }
      class D extends s.Component {
        constructor(e) {
          super(e);
        }
        render() {
          return VRHTML &&
            VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              o.fD.DisplayAllowNightMode_Bool,
            )
            ? s.createElement(v.Al, {
                label: (0, p.we)("#Settings_NightModeCheck"),
                title: (0, p.we)("#Settings_NightModeDesc"),
                value: VRHTML.VRDashboardManager.GetNightModeEnabled(),
                onChange: (e) => {
                  null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VRDashboardManager.SetNightModeEnabled(e),
                    this.forceUpdate();
                },
              })
            : null;
        }
      }
      const B = () => {
        if (!VRHTML) return null;
        if (
          VRHTML.VRProperties.GetBoolProperty(
            "/user/head",
            o.fD.HasDriverDirectModeComponent_Bool,
          )
        ) {
          const e = VRHTML.VRProperties.GetStringProperty(
              "/user/head",
              o.fD.TrackingSystemName_String,
            ),
            t = VRHTML.VRProperties.GetStringProperty(
              "/user/head",
              o.fD.ActualTrackingSystemName_String,
            );
          return "oculus" === e || "vrlink" === t
            ? null
            : s.createElement(v.Al, {
                name: "/settings/steamvr/motionSmoothing",
                label: (0, p.we)("#Settings_Advanced_MotionSmoothing_Header"),
                title: (0, p.we)(
                  "#Settings_Advanced_MotionSmoothing_Description",
                ),
              });
        }
        if (
          VRHTML.VRClientInternal.GetGraphicsHardwareVendorInfo()
            .bSupportsMotionSmoothing
        )
          return s.createElement(v.Al, {
            name: "/settings/steamvr/motionSmoothing",
            label: (0, p.we)("#Settings_Advanced_MotionSmoothing_Header"),
            title: (0, p.we)("#Settings_Advanced_MotionSmoothing_Description"),
          });
        const e =
            g.HR.systemInfo &&
            g.HR.systemInfo.os_type > 0 &&
            g.HR.systemInfo.os_type < g.Gz,
          t = (0, p.we)(
            e
              ? "#Settings_Advanced_MotionSmoothing_Disabled_Win7"
              : "#Settings_Advanced_MotionSmoothing_Disabled",
          );
        return s.createElement(
          v.YO,
          { className: "SettingsItem", title: t },
          s.createElement(
            "div",
            { className: "Label" },
            (0, p.we)("#Settings_Advanced_MotionSmoothing_Header"),
          ),
          s.createElement(
            "div",
            { className: "Label Right" },
            (0, p.we)("#Settings_NotSupported"),
          ),
        );
      };
      var V, I, A, O;
      !(function (e) {
        (e[(e.UseGlobal = 0)] = "UseGlobal"),
          (e[(e.ForceOn = 1)] = "ForceOn"),
          (e[(e.ForceOff = 2)] = "ForceOff"),
          (e[(e.ForceAlwaysOn = 3)] = "ForceAlwaysOn");
      })(V || (V = {})),
        (function (e) {
          (e[(e.UseGlobal = 0)] = "UseGlobal"),
            (e[(e.ForceOn = 1)] = "ForceOn"),
            (e[(e.ForceOff = 2)] = "ForceOff");
        })(I || (I = {})),
        (function (e) {
          (e[(e.Default = 0)] = "Default"),
            (e[(e.Letterbox = 1)] = "Letterbox"),
            (e[(e.Advanced = 2)] = "Advanced");
        })(A || (A = {})),
        (function (e) {
          (e[(e.Off = 0)] = "Off"),
            (e[(e.Fine = 1)] = "Fine"),
            (e[(e.Normal = 2)] = "Normal"),
            (e[(e.Extreme = 3)] = "Extreme");
        })(O || (O = {}));
      const k = {
        [O.Fine]: { min: 0.8, max: 1.25, step: 0.001 },
        [O.Normal]: { min: 0.5, max: 2, step: 0.01 },
        [O.Extreme]: { min: 0.1, max: 10, step: 0.1 },
        [O.Off]: { min: 0, max: 100, step: 1 },
      };
      let L = (_ = class extends s.Component {
        constructor(e) {
          super(e),
            (this.m_routeObservingAutorunDisposer = null),
            (this.m_refAppSelectDropdown = s.createRef()),
            (this.m_initialAppState = null),
            (this.state = {
              currentApp: null,
              nResolutionMultiplier: null,
              nFovScaleMultiplier: null,
              nFovScaleMultiplierInner: null,
              nFovScaleMultiplierUpper: null,
              nFovScaleMultiplierLower: null,
              eFovScaleFormat: A.Default,
              bShowRefreshRateOptions: null,
              nPreferredRefreshRate: null,
              eSmoothingMode: null,
              eSharpening: null,
              disableAsyncReprojection: null,
              bShowThrottleOptions: null,
              nFramesToThrottle: null,
              nAdditionalPrediction: null,
              eWorldScaleRange: O.Off,
              flWorldScaleMultiplier: null,
            });
        }
        componentDidMount() {
          this.m_routeObservingAutorunDisposer = (0, i.autorun)(() => {
            var e;
            if (this.shouldShowModal) {
              const t = this.currentRouteAppKey;
              t &&
                (null === (e = this.m_refAppSelectDropdown.current) ||
                  void 0 === e ||
                  e.setCurrentApp(t));
            }
          });
        }
        componentWillUnmount() {
          this.m_routeObservingAutorunDisposer &&
            (this.m_routeObservingAutorunDisposer(),
            (this.m_routeObservingAutorunDisposer = null));
        }
        static OpenDeepLink(e, t) {
          g.HR.setRoute(e, _.PAGE_SECTION, t ? [t] : null),
            null === VRHTML || void 0 === VRHTML || VRHTML.ShowSettingsUI();
        }
        get shouldShowModal() {
          return g.HR.routePageSection == _.PAGE_SECTION;
        }
        get currentRouteAppKey() {
          const e = g.HR.routePageSectionParams;
          return e.length >= 1 ? e[0] : null;
        }
        get enableThrottleOverrideSettings() {
          return (
            !!VRHTML &&
            !!VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              o.fD.Hmd_SupportsAppThrottling_Bool,
            ) &&
            !(
              !VRHTML.VRProperties.GetBoolProperty(
                "/user/head",
                o.fD.HasDriverDirectModeComponent_Bool,
              ) && this.state.disableAsyncReprojection
            )
          );
        }
        get enableMotionSmoothingOverrideSettings() {
          if (!VRHTML) return !1;
          if (
            VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              o.fD.HasDriverDirectModeComponent_Bool,
            )
          ) {
            return (
              "oculus" !==
              VRHTML.VRProperties.GetStringProperty(
                "/user/head",
                o.fD.TrackingSystemName_String,
              )
            );
          }
          return VRHTML.VRClientInternal.GetGraphicsHardwareVendorInfo()
            .bSupportsMotionSmoothing;
        }
        get enableLegacyReprojectionSettings() {
          return (
            !!VRHTML &&
            !VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              o.fD.HasDriverDirectModeComponent_Bool,
            )
          );
        }
        get worldScaleRangeMin() {
          return k[this.state.eWorldScaleRange].min;
        }
        get worldScaleRangeMax() {
          return k[this.state.eWorldScaleRange].max;
        }
        get worldScaleRangeStep() {
          return k[this.state.eWorldScaleRange].step;
        }
        onApplicationDropdownChange(e) {
          this.setState((t, r) => {
            var n;
            return t.currentApp === e
              ? null
              : (e && this.fetchAppState(e.key),
                g.HR.setRoutePageSectionParams([
                  null !== (n = null == e ? void 0 : e.key) && void 0 !== n
                    ? n
                    : "",
                ]),
                {
                  currentApp: e,
                  nResolutionMultiplier: void 0,
                  nFovScaleMultiplier: void 0,
                  bShowRefreshRateOptions: void 0,
                  nPreferredRefreshRate: void 0,
                  eSmoothingMode: void 0,
                  eSharpening: void 0,
                  disableAsyncReprojection: void 0,
                });
          });
        }
        updateAppState(e) {
          var t, r, n;
          if (void 0 !== e.resolution) {
            let i = null !== (t = e.throttling) && void 0 !== t ? t : 0,
              a = null !== (r = e.prediction) && void 0 !== r ? r : 0,
              s = O.Off;
            1 !== e.worldscale &&
              (s =
                Math.round(1e3 * e.worldscale) % 10 != 0
                  ? O.Fine
                  : e.worldscale < k[O.Normal].min ||
                      e.worldscale > k[O.Normal].max
                    ? O.Extreme
                    : O.Normal),
              (this.m_initialAppState = {
                nResolutionMultiplier: e.resolution / 100,
                nFovScaleMultiplier: e.fovscale / 100,
                nFovScaleMultiplierInner: e.fovscale_inner
                  ? e.fovscale_inner / 100
                  : 1,
                nFovScaleMultiplierUpper: e.fovscale_upper
                  ? e.fovscale_upper / 100
                  : 1,
                nFovScaleMultiplierLower: e.fovscale_lower
                  ? e.fovscale_lower / 100
                  : 1,
                eFovScaleFormat:
                  null !== (n = e.fovscale_format) && void 0 !== n
                    ? n
                    : A.Default,
                bShowRefreshRateOptions: e.preferred_refresh_rate > 0,
                nPreferredRefreshRate: e.preferred_refresh_rate,
                eSmoothingMode: e.smoothing,
                eSharpening: e.sharpening,
                disableAsyncReprojection: e.disable_async_reprojection,
                bShowThrottleOptions:
                  void 0 !== e.throttling || void 0 !== e.prediction,
                nFramesToThrottle: i,
                nAdditionalPrediction: a - i,
                eWorldScaleRange: s,
                flWorldScaleMultiplier: e.worldscale ? e.worldscale : 1,
              }),
              this.setState(this.m_initialAppState);
          }
        }
        fetchAppState(e) {
          g.HR.GetAppSettings(e).then(this.updateAppState);
        }
        setAppState(e, t) {
          if (null != this.state.currentApp) {
            let r = {};
            (r[e] = t), g.HR.SetAppSettings(this.state.currentApp.key, r);
          }
        }
        get computedResolution() {
          let e = g.HR.settings.get(m.wt)
            ? g.HR.settings.get(m.w5)
            : g.HR.settings.get(m.j5);
          if (null == e || null == this.state.nResolutionMultiplier) return "";
          let t = g.HR.SliderposToSupersample(this.state.nResolutionMultiplier),
            r = t;
          switch (this.state.eFovScaleFormat) {
            case A.Letterbox:
              r *= this.state.nFovScaleMultiplier;
              break;
            case A.Advanced:
              const e =
                  this.state.nFovScaleMultiplier +
                  this.state.nFovScaleMultiplierInner,
                n =
                  this.state.nFovScaleMultiplierUpper +
                  this.state.nFovScaleMultiplierLower;
              e < n ? (t *= e / n) : (r *= n / e);
          }
          if (
            g.HR.systemInfo &&
            null != g.HR.systemInfo.render_target_size.width &&
            0 != g.HR.systemInfo.render_target_size.height
          ) {
            let n = Math.max(
                512,
                Math.floor(
                  g.HR.systemInfo.render_target_size.width * Math.sqrt(e * t) +
                    0.5,
                ),
              ),
              i = Math.max(
                512,
                Math.floor(
                  g.HR.systemInfo.render_target_size.height * Math.sqrt(e * r) +
                    0.5,
                ),
              );
            const a = g.HR.settings.get(m.rG);
            return (
              Math.max(n, i) > a &&
                (n > i
                  ? ((i = (a * i) / n), (n = a))
                  : ((n = (a * n) / i), (i = a))),
              (n = 4 * Math.trunc(n / 4)),
              (i = 4 * Math.trunc(i / 4)),
              (0, p.we)("#Settings_Advanced_Supersampling_WidthByHeight", n, i)
            );
          }
          return "";
        }
        onResolutionSliderChange(e) {
          this.setState({ nResolutionMultiplier: e }),
            this.setAppState("resolution", 100 * e);
        }
        onFovScaleSliderChange(e) {
          this.setState({ nFovScaleMultiplier: e }),
            this.setAppState("fovscale", 100 * e);
        }
        onFovScaleSliderChangeInner(e) {
          this.setState({ nFovScaleMultiplierInner: e }),
            this.setAppState("fovscale_inner", 100 * e);
        }
        onFovScaleSliderChangeUpper(e) {
          this.setState({ nFovScaleMultiplierUpper: e }),
            this.setAppState("fovscale_upper", 100 * e);
        }
        onFovScaleSliderChangeLower(e) {
          this.setState({ nFovScaleMultiplierLower: e }),
            this.setAppState("fovscale_lower", 100 * e);
        }
        onFovScaleFormatChange(e) {
          this.setState({ eFovScaleFormat: e }),
            this.setAppState("fovscale_format", e);
        }
        onMotionSmoothChange(e) {
          this.setState({ eSmoothingMode: e }),
            this.setAppState("smoothing", e);
        }
        onSharpeningChange(e) {
          this.setState({ eSharpening: e }), this.setAppState("sharpening", e);
        }
        onRefreshRateOverrideChange(e) {
          this.allowPerAppRefreshRate &&
            (this.setState({ bShowRefreshRateOptions: e }),
            this.setAppState(
              "preferred_refresh_rate",
              e ? this.state.nPreferredRefreshRate : 0,
            ));
        }
        onRefreshRateChange(e) {
          this.allowPerAppRefreshRate &&
            (this.setState({ nPreferredRefreshRate: e }),
            this.setAppState(
              "preferred_refresh_rate",
              this.state.bShowRefreshRateOptions ? e : 0,
            ));
        }
        onDisableAsyncReprojection(e) {
          this.setState({ disableAsyncReprojection: e }),
            this.setAppState("disable_async_reprojection", e);
        }
        onShowThrottleOptions(e) {
          var t, r;
          if (
            (this.setState({ bShowThrottleOptions: e }),
            this.setAppState("override_throttling", e),
            e)
          ) {
            let e =
                null !== (t = this.state.nFramesToThrottle) && void 0 !== t
                  ? t
                  : 0,
              n =
                null !== (r = this.state.nAdditionalPrediction) && void 0 !== r
                  ? r
                  : 0;
            this.setAppState("throttling", e),
              this.setAppState("prediction", e + n);
          }
        }
        onThrottleSliderChange(e) {
          var t;
          this.setState({ nFramesToThrottle: e }),
            this.setAppState("throttling", e);
          let r =
            null !== (t = this.state.nAdditionalPrediction) && void 0 !== t
              ? t
              : 0;
          this.setAppState("prediction", e + r);
        }
        onPredictionSliderChange(e) {
          var t;
          this.setState({ nAdditionalPrediction: e });
          let r =
            null !== (t = this.state.nFramesToThrottle) && void 0 !== t ? t : 0;
          this.setAppState("prediction", e + r);
        }
        onWorldScaleRangeChange(e) {
          this.setState({
            eWorldScaleRange: e,
            flWorldScaleMultiplier: Math.max(
              k[e].min,
              Math.min(k[e].max, this.state.flWorldScaleMultiplier),
            ),
          }),
            this.setAppState(
              "worldscale",
              e == O.Off ? 1 : this.state.flWorldScaleMultiplier,
            );
        }
        onWorldScaleMultiplierSliderChange(e) {
          this.setState({ flWorldScaleMultiplier: e }),
            this.setAppState("worldscale", e);
        }
        hasCurrentApp() {
          return null != this.state.currentApp;
        }
        resetAppToDefaults() {
          g.HR.ResetAppSettings(this.state.currentApp.key).then(
            this.updateAppState,
          );
        }
        show() {
          g.HR.setRoutePageSection(_.PAGE_SECTION);
        }
        close() {
          g.HR.setRoutePageSection(null);
        }
        get allowPerAppRefreshRate() {
          return !!g.HR.settings.get("/settings/internal/enablePerAppFPS");
        }
        get currentRefreshRate() {
          return g.HR.settings.get("/settings/steamvr/preferredRefreshRate");
        }
        render() {
          var e;
          let t = null;
          this.state.eSmoothingMode == V.ForceAlwaysOn &&
            (t = s.createElement(
              s.Fragment,
              null,
              (0, p.we)(
                "#Settings_PerApplication_MotionSmoothing_AlwaysOn_Desc",
              ),
            ));
          const r = this.state.eFovScaleFormat == A.Advanced,
            n =
              (null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRProperties.GetBoolProperty(
                    "/user/head",
                    o.fD.HasEyeTracker_Bool,
                  )) &&
              !(null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRProperties.GetBoolProperty(
                    "/user/head",
                    o.fD.HasDriverDirectModeComponent_Bool,
                  ));
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(
              v.YO,
              { className: "SettingsItem" },
              s.createElement(
                l.$,
                { className: "ButtonControl", onClick: this.show },
                (0, p.we)("#Settings_PerApplication_VideoSettings"),
              ),
            ),
            this.shouldShowModal &&
              s.createElement(
                v.bB,
                {
                  className: "AppVideoModal",
                  onDismissRequested: this.close,
                  header: s.createElement(
                    s.Fragment,
                    null,
                    s.createElement(
                      "h1",
                      null,
                      (0, p.we)("#Settings_ManageVideoSettingsForApp"),
                    ),
                    s.createElement(v.mi, {
                      ref: this.m_refAppSelectDropdown,
                      stateKey: "settings_applications",
                      defaultAppKey:
                        null !== (e = this.currentRouteAppKey) && void 0 !== e
                          ? e
                          : null === VRHTML || void 0 === VRHTML
                            ? void 0
                            : VRHTML.VRApplications.GetSceneApplicationKey(),
                      showOverlays: !1,
                      defaultLabel: (0, p.we)(
                        "#Settings_PerApplication_ChooseApplication",
                      ),
                      onChange: this.onApplicationDropdownChange,
                    }),
                  ),
                  footer: s.createElement(v.tR, {
                    showResetButton: this.hasCurrentApp(),
                    onResetRequested: this.resetAppToDefaults,
                    onDismissRequested: this.close,
                  }),
                },
                this.hasCurrentApp() &&
                  s.createElement(
                    s.Fragment,
                    null,
                    this.enableMotionSmoothingOverrideSettings &&
                      null !== this.state.eSmoothingMode &&
                      !this.state.disableAsyncReprojection &&
                      s.createElement(v.xS, {
                        label: (0, p.we)(
                          "#Settings_Advanced_MotionSmoothing_Header",
                        ),
                        items: [
                          {
                            value: V.UseGlobal,
                            sLabel: (0, p.we)(
                              "#Settings_PerApplication_MotionSmoothing_Global",
                            ),
                          },
                          {
                            value: V.ForceOn,
                            sLabel: (0, p.we)(
                              "#Settings_PerApplication_MotionSmoothing_On",
                            ),
                          },
                          {
                            value: V.ForceOff,
                            sLabel: (0, p.we)(
                              "#Settings_PerApplication_MotionSmoothing_Off",
                            ),
                          },
                          {
                            value: V.ForceAlwaysOn,
                            sLabel: (0, p.we)(
                              "#Settings_PerApplication_MotionSmoothing_AlwaysOn",
                            ),
                          },
                        ],
                        value: this.state.eSmoothingMode,
                        onChange: this.onMotionSmoothChange,
                        subsection: t,
                      }),
                    n &&
                      null !== this.state.eSharpening &&
                      s.createElement(v.xS, {
                        label: (0, p.we)(
                          "#Settings_Advanced_FoveatedSharpening_Header",
                        ),
                        items: [
                          {
                            value: I.UseGlobal,
                            sLabel: (0, p.we)(
                              "#Settings_PerApplication_FoveatedSharpening_Global",
                            ),
                          },
                          {
                            value: I.ForceOn,
                            sLabel: (0, p.we)(
                              "#Settings_PerApplication_FoveatedSharpening_On",
                            ),
                          },
                          {
                            value: I.ForceOff,
                            sLabel: (0, p.we)(
                              "#Settings_PerApplication_FoveatedSharpening_Off",
                            ),
                          },
                        ],
                        value: this.state.eSharpening,
                        onChange: this.onSharpeningChange,
                      }),
                    null !== this.state.nResolutionMultiplier &&
                      s.createElement(
                        v.YO,
                        {
                          title: (0, p.we)(
                            "#Settings_PerApplication_AppResHeader",
                            (0, p.we)("#Settings_SectionTitle_General"),
                          ),
                          className: "SettingsItem",
                        },
                        s.createElement(
                          "div",
                          { className: "Label" },
                          (0, p.we)("#Settings_PerApplication_AppResTitle"),
                        ),
                        s.createElement(
                          "div",
                          { className: "SubsectionStem Label Resolution" },
                          s.createElement(
                            "div",
                            { className: "Dimensions" },
                            this.computedResolution,
                          ),
                          s.createElement(
                            "div",
                            { className: "Percentage" },
                            Math.round(
                              100 * this.state.nResolutionMultiplier,
                            ).toString() + "%",
                          ),
                        ),
                        s.createElement(
                          "div",
                          { className: "Subsection WithStem" },
                          s.createElement(v.tE, {
                            min: g.mO,
                            max: g.aJ,
                            step: g.kP,
                            value: this.state.nResolutionMultiplier,
                            detents: [1],
                            onChange: this.onResolutionSliderChange,
                          }),
                          s.createElement(
                            v.YO,
                            { className: "SettingsItem" },
                            s.createElement(w, null),
                          ),
                        ),
                      ),
                    null !== this.state.nFovScaleMultiplier &&
                      (g.HR.showAdvancedSettings ||
                        (this.m_initialAppState &&
                          1 != this.m_initialAppState.nFovScaleMultiplier)) &&
                      s.createElement(
                        v.YO,
                        {
                          title: (0, p.we)(
                            "#Settings_PerApplication_FovScale_Description",
                          ),
                          className: "SettingsItem Advanced",
                        },
                        s.createElement(
                          "div",
                          { className: "Label" },
                          (0, p.we)("#Settings_PerApplication_FovScale_Label"),
                        ),
                        s.createElement(
                          "div",
                          { className: "SubsectionStem Label Resolution" },
                          s.createElement(
                            "div",
                            { className: "Dimensions" },
                            (0, p.we)(
                              "#Settings_PerApplication_FovScale_Multiplier",
                            ),
                          ),
                          !r &&
                            s.createElement(
                              "div",
                              { className: "Percentage" },
                              Math.round(
                                100 * this.state.nFovScaleMultiplier,
                              ).toString() + "%",
                            ),
                        ),
                        s.createElement(
                          "div",
                          { className: "Subsection WithStem" },
                          s.createElement(v.tE, {
                            min: 0.5,
                            max: 1,
                            step: 0.01,
                            value: this.state.nFovScaleMultiplier,
                            valueStyleVariant: r ? u.Te.OnHandle : void 0,
                            renderValue: r
                              ? (e) =>
                                  Math.round(
                                    100 * this.state.nFovScaleMultiplier,
                                  ).toString() + "%"
                              : void 0,
                            onChange: this.onFovScaleSliderChange,
                            label: r ? "Outer" : void 0,
                          }),
                          r &&
                            s.createElement(
                              s.Fragment,
                              null,
                              s.createElement(v.tE, {
                                min: 0.5,
                                max: 1,
                                step: 0.01,
                                value: this.state.nFovScaleMultiplierInner,
                                valueStyleVariant: u.Te.OnHandle,
                                renderValue: (e) =>
                                  Math.round(
                                    100 * this.state.nFovScaleMultiplierInner,
                                  ).toString() + "%",
                                onChange: this.onFovScaleSliderChangeInner,
                                label: "Inner",
                              }),
                              s.createElement(v.tE, {
                                min: 0.5,
                                max: 1,
                                step: 0.01,
                                value: this.state.nFovScaleMultiplierUpper,
                                valueStyleVariant: u.Te.OnHandle,
                                renderValue: (e) =>
                                  Math.round(
                                    100 * this.state.nFovScaleMultiplierUpper,
                                  ).toString() + "%",
                                onChange: this.onFovScaleSliderChangeUpper,
                                label: "Upper",
                              }),
                              s.createElement(v.tE, {
                                min: 0.5,
                                max: 1,
                                step: 0.01,
                                value: this.state.nFovScaleMultiplierLower,
                                valueStyleVariant: u.Te.OnHandle,
                                renderValue: (e) =>
                                  Math.round(
                                    100 * this.state.nFovScaleMultiplierLower,
                                  ).toString() + "%",
                                onChange: this.onFovScaleSliderChangeLower,
                                label: "Lower",
                              }),
                            ),
                          (1 != this.state.nFovScaleMultiplier || r) &&
                            s.createElement(v.xS, {
                              items: [
                                { value: A.Default, sLabel: "Default" },
                                { value: A.Letterbox, sLabel: "Letterbox" },
                                { value: A.Advanced, sLabel: "Advanced" },
                              ],
                              value: this.state.eFovScaleFormat,
                              onChange: this.onFovScaleFormatChange,
                            }),
                        ),
                      ),
                    null !== this.state.flWorldScaleMultiplier &&
                      (g.HR.showAdvancedSettings ||
                        (this.m_initialAppState &&
                          this.m_initialAppState.eWorldScaleRange !== O.Off)) &&
                      s.createElement(
                        v.YO,
                        {
                          title: (0, p.we)(
                            "#Settings_PerApplication_WorldScale_Description",
                          ),
                          className: "SettingsItem Advanced",
                        },
                        s.createElement(
                          "div",
                          { className: "Label" },
                          (0, p.we)(
                            "#Settings_PerApplication_WorldScale_Label",
                          ),
                        ),
                        s.createElement(v.xS, {
                          items: [
                            {
                              value: O.Off,
                              sLabel: (0, p.we)(
                                "#Settings_PerApplication_WorldScale_Off",
                              ),
                            },
                            {
                              value: O.Fine,
                              sLabel: (0, p.we)(
                                "#Settings_PerApplication_WorldScale_Fine",
                              ),
                            },
                            {
                              value: O.Normal,
                              sLabel: (0, p.we)(
                                "#Settings_PerApplication_WorldScale_Normal",
                              ),
                            },
                            {
                              value: O.Extreme,
                              sLabel: (0, p.we)(
                                "#Settings_PerApplication_WorldScale_Extreme",
                              ),
                            },
                          ],
                          value: this.state.eWorldScaleRange,
                          onChange: this.onWorldScaleRangeChange,
                        }),
                      ),
                    this.state.eWorldScaleRange !== O.Off &&
                      s.createElement(
                        v.YO,
                        { className: "SettingsItem Advanced" },
                        s.createElement("div", { className: "Label" }),
                        s.createElement(
                          "div",
                          { className: "SubsectionStem Label Resolution" },
                          s.createElement(
                            "div",
                            { className: "Dimensions" },
                            (0, p.we)(
                              "#Settings_PerApplication_WorldScale_Range",
                              100 * this.worldScaleRangeMin,
                              100 * this.worldScaleRangeMax,
                            ),
                          ),
                          s.createElement(
                            "div",
                            { className: "Percentage" },
                            (
                              Math.round(
                                1e3 * this.state.flWorldScaleMultiplier,
                              ) / 10
                            ).toString() + "%",
                          ),
                        ),
                        s.createElement(
                          "div",
                          { className: "Subsection WithStem" },
                          s.createElement(v.tE, {
                            min: this.worldScaleRangeMin,
                            max: this.worldScaleRangeMax,
                            step: this.worldScaleRangeStep,
                            value: this.state.flWorldScaleMultiplier,
                            detents: [1],
                            onChange: this.onWorldScaleMultiplierSliderChange,
                          }),
                          s.createElement(
                            "div",
                            { className: "SettingsItemValueLabel Fixed" },
                            (0, p.we)(
                              "#Settings_PerApplication_WorldScale_Warning",
                            ),
                          ),
                        ),
                      ),
                    this.allowPerAppRefreshRate &&
                      g.HR.systemInfo &&
                      g.HR.systemInfo.refresh_rates.actual_display_frequency >
                        0 &&
                      g.HR.systemInfo.refresh_rates.supported_rates.length >
                        1 &&
                      s.createElement(
                        s.Fragment,
                        null,
                        null !== this.state.bShowRefreshRateOptions &&
                          s.createElement(v.Al, {
                            label: (0, p.we)(
                              "#Settings_PerApplication_RefreshRateOverride_Checkbox",
                            ),
                            title: (0, p.we)(
                              "#Settings_Perapplication_RefreshRateOverride_Description",
                            ),
                            value: this.state.bShowRefreshRateOptions,
                            onChange: this.onRefreshRateOverrideChange,
                            onSubsection: s.createElement(v.ym, {
                              label: (0, p.we)(
                                "#Settings_Video_RefreshRate_Label_Hz",
                              ),
                              onChange: this.onRefreshRateChange,
                              value: this.state.nPreferredRefreshRate,
                              items:
                                g.HR.systemInfo.refresh_rates.supported_rates.map(
                                  (e) => ({
                                    value: e,
                                    sLabel: Math.round(e).toString(),
                                  }),
                                ),
                            }),
                          }),
                      ),
                    this.enableLegacyReprojectionSettings &&
                      null !== this.state.disableAsyncReprojection &&
                      (g.HR.showAdvancedSettings ||
                        (this.m_initialAppState &&
                          this.m_initialAppState.disableAsyncReprojection)) &&
                      s.createElement(
                        v.YO,
                        {
                          title: (0, p.we)(
                            "#Settings_PerApplication_Reprojection_Description",
                          ),
                          className: "SettingsItem Advanced",
                        },
                        s.createElement(v.Al, {
                          label: (0, p.we)(
                            "#Settings_PerApplication_Reprojection_Checkbox",
                          ),
                          value: this.state.disableAsyncReprojection,
                          onChange: this.onDisableAsyncReprojection,
                        }),
                      ),
                    this.enableThrottleOverrideSettings &&
                      (g.HR.showAdvancedSettings ||
                        (this.m_initialAppState &&
                          this.m_initialAppState.bShowThrottleOptions)) &&
                      s.createElement(
                        v.YO,
                        {
                          title: (0, p.we)(
                            "#Settings_PerApplication_ThrottlingOverride_Description",
                          ),
                          className: "SettingsItem Advanced",
                        },
                        s.createElement(
                          "div",
                          { className: "Label" },
                          (0, p.we)(
                            "#Settings_PerApplication_ThrottlingOverride_Label",
                          ),
                        ),
                        s.createElement(v.Al, {
                          title: (0, p.we)(
                            "#Settings_PerApplication_ThrottlingOverride_Toggle",
                          ),
                          onLabel: (0, p.we)(
                            "#Settings_PerApplication_ThrottlingOverride_Toggle_On",
                          ),
                          offLabel: (0, p.we)(
                            "#Settings_PerApplication_ThrottlingOverride_Toggle_Off",
                          ),
                          value: this.state.bShowThrottleOptions,
                          onChange: this.onShowThrottleOptions,
                        }),
                        this.state.bShowThrottleOptions &&
                          s.createElement(
                            "div",
                            { className: "Subsection WithStem" },
                            s.createElement(
                              "div",
                              { className: "Label" },
                              (0, p.we)(
                                "#Settings_PerApplication_ThrottlingOverride_Framerate",
                              ),
                            ),
                            s.createElement(v.tE, {
                              min: 5,
                              max: 0,
                              step: 1,
                              value: this.state.nFramesToThrottle,
                              valueStyleVariant: u.Te.OnHandle,
                              renderValue: (e) =>
                                (this.currentRefreshRate / (e + 1)).toFixed(1),
                              onChange: this.onThrottleSliderChange,
                            }),
                            s.createElement(
                              "div",
                              { className: "Label" },
                              (0, p.we)(
                                "#Settings_PerApplication_ThrottlingOverride_Prediction",
                              ),
                            ),
                            s.createElement(v.tE, {
                              min: 0,
                              max: 3,
                              step: 1,
                              value: this.state.nAdditionalPrediction,
                              valueStyleVariant: u.Te.OnHandle,
                              renderValue: (e) =>
                                ((1e3 * e) / this.currentRefreshRate).toFixed(
                                  2,
                                ),
                              onChange: this.onPredictionSliderChange,
                            }),
                          ),
                      ),
                  ),
                !this.hasCurrentApp() &&
                  s.createElement(
                    "div",
                    { className: "ModalPlaceholder" },
                    (0, p.we)("#Settings_PerApplication_ChooseApplication"),
                  ),
              ),
          );
        }
      });
      (L.PAGE_SECTION = "appvideosettings"),
        (0, n.Cg)([i.computed], L.prototype, "shouldShowModal", null),
        (0, n.Cg)([i.computed], L.prototype, "currentRouteAppKey", null),
        (0, n.Cg)(
          [i.computed],
          L.prototype,
          "enableThrottleOverrideSettings",
          null,
        ),
        (0, n.Cg)(
          [i.computed],
          L.prototype,
          "enableMotionSmoothingOverrideSettings",
          null,
        ),
        (0, n.Cg)(
          [i.computed],
          L.prototype,
          "enableLegacyReprojectionSettings",
          null,
        ),
        (0, n.Cg)([i.computed], L.prototype, "worldScaleRangeMin", null),
        (0, n.Cg)([i.computed], L.prototype, "worldScaleRangeMax", null),
        (0, n.Cg)([i.computed], L.prototype, "worldScaleRangeStep", null),
        (0, n.Cg)([d.o], L.prototype, "onApplicationDropdownChange", null),
        (0, n.Cg)([d.o], L.prototype, "updateAppState", null),
        (0, n.Cg)([i.computed], L.prototype, "computedResolution", null),
        (0, n.Cg)([d.o], L.prototype, "onResolutionSliderChange", null),
        (0, n.Cg)([d.o], L.prototype, "onFovScaleSliderChange", null),
        (0, n.Cg)([d.o], L.prototype, "onFovScaleSliderChangeInner", null),
        (0, n.Cg)([d.o], L.prototype, "onFovScaleSliderChangeUpper", null),
        (0, n.Cg)([d.o], L.prototype, "onFovScaleSliderChangeLower", null),
        (0, n.Cg)([d.o], L.prototype, "onFovScaleFormatChange", null),
        (0, n.Cg)([d.o], L.prototype, "onMotionSmoothChange", null),
        (0, n.Cg)([d.o], L.prototype, "onSharpeningChange", null),
        (0, n.Cg)([d.o], L.prototype, "onRefreshRateOverrideChange", null),
        (0, n.Cg)([d.o], L.prototype, "onRefreshRateChange", null),
        (0, n.Cg)([d.o], L.prototype, "onDisableAsyncReprojection", null),
        (0, n.Cg)([d.o], L.prototype, "onShowThrottleOptions", null),
        (0, n.Cg)([d.o], L.prototype, "onThrottleSliderChange", null),
        (0, n.Cg)([d.o], L.prototype, "onPredictionSliderChange", null),
        (0, n.Cg)([d.o], L.prototype, "onWorldScaleRangeChange", null),
        (0, n.Cg)(
          [d.o],
          L.prototype,
          "onWorldScaleMultiplierSliderChange",
          null,
        ),
        (0, n.Cg)([d.o], L.prototype, "resetAppToDefaults", null),
        (0, n.Cg)([d.o], L.prototype, "show", null),
        (0, n.Cg)([d.o], L.prototype, "close", null),
        (0, n.Cg)([i.computed], L.prototype, "allowPerAppRefreshRate", null),
        (0, n.Cg)([i.computed], L.prototype, "currentRefreshRate", null),
        (L = _ = (0, n.Cg)([a.PA], L));
      let H = class extends v.yO {
        render() {
          if (!this.props.active) return null;
          const e = VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              o.fD.Hmd_SupportsHDCP14LegacyCompat_Bool,
            ),
            t = VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              o.fD.Hmd_SupportsDisplayPortTrainingMode_Bool,
            ),
            r = VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              o.fD.Hmd_SupportsGpuBusMonitoring_Bool,
            );
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(y, null),
            s.createElement(E, null),
            s.createElement(D, null),
            s.createElement(B, null),
            s.createElement(C, null),
            s.createElement(v.Al, {
              name: "/settings/steamvr/doNotFadeToGrid",
              label: (0, p.we)("#Settings_FadeToGrid"),
              swapOnOff: !0,
            }),
            s.createElement(L, null),
            !1,
            !1,
            s.createElement(v.Al, {
              name: "/settings/steamvr/allowSupersampleFiltering",
              label: (0, p.we)("#Settings_Advanced_AllowSupersampleFiltering"),
              visibility: v.Z3.Advanced,
            }),
            s.createElement(T, null),
            e &&
              s.createElement(v.Al, {
                name: "/settings/steamvr/hdcp14legacyCompatibility",
                label: (0, p.we)("#Settings_Video_HDCP14LegacyCompatibility"),
                visibility: v.Z3.Advanced,
                requiresRestart: !0,
              }),
            t &&
              s.createElement(v.xS, {
                name: "/settings/steamvr/displayPortTrainingMode",
                label: (0, p.we)("#Settings_DisplayPortTrainingMode"),
                items: [
                  {
                    value: 0,
                    sLabel: (0, p.we)(
                      "#Settings_DisplayPortTrainingMode_Automatic",
                    ),
                  },
                  c.Sr.Separator,
                  {
                    value: 1,
                    sLabel: (0, p.we)(
                      "#Settings_DisplayPortTrainingMode_CompatibilityModeA",
                    ),
                  },
                  {
                    value: 2,
                    sLabel: (0, p.we)(
                      "#Settings_DisplayPortTrainingMode_CompatibilityModeB",
                    ),
                  },
                ],
                visibility: v.Z3.Advanced,
                requiresRestart: !0,
              }),
            s.createElement(M, { visibility: v.Z3.Advanced }),
            s.createElement(v.Al, {
              name: "/settings/power/pauseCompositorOnStandby",
              label: (0, p.we)("#Settings_PauseOnStandby"),
              visibility: v.Z3.Advanced,
            }),
            r &&
              s.createElement(v.Al, {
                name: "/settings/perfcheck/gpuBusMonitoring",
                label: (0, p.we)("#Settings_GpuBusMonitoring"),
                visibility: v.Z3.Advanced,
              }),
            this.makeResetToDefaultButton(),
          );
        }
      };
      (H.Name = "video_settings"), (H = (0, n.Cg)([a.PA], H));
    },
    8472: (e, t, r) => {
      "use strict";
      r.d(t, { u: () => s });
      var n = r(1635),
        i = r(3236),
        a = r(3496);
      class s extends a._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "audiosource";
        }
        buildNode(e, t) {
          const r = this.createSgNode(t);
          return (
            (r.properties.name = this.props.name),
            (r.properties.channel = this.props.channel),
            (r.properties.debug = this.props.debug),
            [e, r]
          );
        }
      }
      (0, n.Cg)([i.o], s.prototype, "buildNode", null);
    },
    1988: (e, t, r) => {
      "use strict";
      var n = r(1635),
        i = r(3496),
        a = r(3236);
      class s extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "context";
        }
        buildNode(e, t) {
          const r = this.createSgNode(t);
          return (r.properties.construct = this.props.construct), [e, r];
        }
      }
      (0, n.Cg)([a.o], s.prototype, "buildNode", null);
    },
    6417: (e, t, r) => {
      "use strict";
      r.d(t, { $: () => s });
      var n = r(1635),
        i = r(3496),
        a = r(3236);
      class s extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "dashboardtransform";
        }
        buildNode(e, t) {
          var r, n;
          const i = this.createSgNode(t);
          return (
            (i.properties.continuous_relatch =
              null !== (r = this.props.bContinuousRelatch) &&
              void 0 !== r &&
              r),
            (i.properties.free_dashboard_transform =
              null !== (n = this.props.bFreeDashboardTransform) &&
              void 0 !== n &&
              n),
            [e, i]
          );
        }
      }
      (0, n.Cg)([a.o], s.prototype, "buildNode", null);
    },
    6539: (e, t, r) => {
      "use strict";
      r.d(t, { e: () => s, w: () => o });
      var n = r(1635),
        i = r(3496),
        a = r(3236);
      class s extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "frame-node";
        }
        buildNode(e, t) {
          const r = this.createSgNode(t);
          return (
            (r.properties["frame-id"] = this.props.frame_id),
            (r.properties["dock-location"] = this.props.dock_location),
            (r.properties["dock-location-preview"] =
              this.props.dock_location_preview),
            (r.properties["frame-resize-displacement"] =
              this.props.resize_displacement),
            (r.properties["frame-resize-scale-min"] =
              this.props.resize_scale_min),
            (r.properties["frame-resize-scale-max"] =
              this.props.resize_scale_max),
            (r.properties["allow-input-capture"] =
              this.props.allow_input_capture),
            (r.properties["override-pre-resize-main-panel-height"] =
              this.props.override_pre_resize_main_panel_height),
            (r.properties["suppress-panel-backsides"] =
              this.props.suppress_panel_backsides),
            [e, r]
          );
        }
      }
      (0, n.Cg)([a.o], s.prototype, "buildNode", null);
      class o extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "associated-frame-node";
        }
        buildNode(e, t) {
          const r = this.createSgNode(t);
          return (r.properties["frame-id"] = this.props.frame_id), [e, r];
        }
      }
      (0, n.Cg)([a.o], o.prototype, "buildNode", null);
    },
    2303: (e, t, r) => {
      "use strict";
      r.d(t, { n: () => a });
      var n = r(6540),
        i = r(3496);
      class a extends i._J {
        constructor(e) {
          super(e);
        }
        internalRender() {
          let e = (0, i.j_)(this.props.transform.translation),
            t = (0, i.hi)(this.props.transform.rotation),
            r = (0, i.j_)(this.props.transform.scale);
          return n.createElement(
            "vsg-grab-transform",
            {
              "parent-path": this.props.parent_path,
              translation: e,
              rotation: t,
              scale: r,
              "should-head-align": this.props.should_head_align,
              "stop-distance": this.props.stop_distance,
              "start-angle": this.props.start_angle,
              "start-quat-difference": this.props.start_quat_difference,
              "stop-quat-difference": this.props.stop_quat_difference,
              "scale-margin": this.props.scale_margin,
              "lerp-speed": this.props.lerp_speed,
              "min-distance": this.props.min_distance,
              "max-distance": this.props.max_distance,
              "one-to-one-radius": this.props.one_to_one_radius,
              "max-x-squared-contribution":
                this.props.max_x_squared_contribution,
              "acceleration-factor-x-coefficient":
                this.props.acceleration_factor_x_coefficient,
              "acceleration-factor-x-squared-coefficient":
                this.props.acceleration_factor_x_squared_coefficient,
              "acceleration-factor-scale-term":
                this.props.acceleration_factor_scale_term,
              "remote-transform-tx": this.props.remote_transform_tx,
              "reset-on-recenter": this.props.reset_on_recenter,
            },
            this.props.children,
          );
        }
      }
    },
    2527: (e, t, r) => {
      "use strict";
      r(6540);
      var n = r(3496);
      n._J;
    },
    6847: (e, t, r) => {
      "use strict";
      r.d(t, { l: () => s });
      var n = r(1635),
        i = r(3496),
        a = r(3236);
      class s extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "ltcquad";
        }
        buildNode(e, t) {
          const r = this.createSgNode(t);
          if (
            ((r.properties.width = this.props.width),
            (r.properties.height = this.props.height),
            (r.properties["target-id"] = this.props.target_id),
            (r.properties["near-z"] = this.props["near-z"]),
            (r.properties["far-z"] = this.props["far-z"]),
            (r.properties.debug = this.props.debug),
            this.props.diffuse)
          ) {
            let e = this.props.diffuse;
            (r.properties["diffuse-resolution"] = e.resolution),
              (r.properties["diffuse-size"] = e.size);
          }
          if (this.props.specular) {
            let e = this.props.specular;
            if ("string" == typeof e.color) r.properties.color = e.color;
            else {
              let t = (0, i.RH)(e.color, { r: 0, g: 0, b: 0 });
              r.properties.color = [t.r, t.g, t.b];
            }
          }
          return [e, r];
        }
      }
      (0, n.Cg)([a.o], s.prototype, "buildNode", null);
    },
    6186: (e, t, r) => {
      "use strict";
      r.d(t, { H: () => l, I: () => o });
      var n = r(1635),
        i = r(3496),
        a = r(3236),
        s = r(5723);
      class o extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "mountable";
        }
        buildNode(e, t) {
          return [e, this.createSgNode(t)];
        }
      }
      (0, n.Cg)([a.o], o.prototype, "buildNode", null);
      class l extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "mountedscenegraph";
        }
        buildNode(e, t) {
          const r = this.createSgNode(t);
          return (
            (r.properties.mountable_id = (0, s.bl)(this.props.mountedId)),
            [e, r]
          );
        }
      }
      (0, n.Cg)([a.o], l.prototype, "buildNode", null);
    },
    5830: (e, t, r) => {
      "use strict";
      r.d(t, { Y: () => s });
      var n = r(1635),
        i = r(3496),
        a = r(3236);
      class s extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "opacity";
        }
        buildNode(e, t) {
          const r = this.createSgNode(t);
          return (r.properties.opacity = (0, i.kJ)(this.props.value)), [e, r];
        }
      }
      (0, n.Cg)([a.o], s.prototype, "buildNode", null);
    },
    7350: (e, t, r) => {
      "use strict";
      r.d(t, { V: () => n, a: () => l });
      var n,
        i = r(1635),
        a = r(3496),
        s = r(3236),
        o = r(5723);
      !(function (e) {
        (e[(e.None = 0)] = "None"), (e[(e.Backface = 1)] = "Backface");
      })(n || (n = {}));
      class l extends a._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "rendermodel";
        }
        buildNode(e, t) {
          const r = this.createSgNode(t);
          if (
            ((r.properties.source = this.props.source),
            (r.properties["texture-id"] = (0, o.bl)(this.props["texture-id"])),
            (r.properties["input-path"] = this.props["input-path"]),
            this.props.fresnel)
          ) {
            let e = this.props.fresnel;
            if ("string" == typeof e.color) r.properties.color = e.color;
            else {
              let t = (0, a.RH)(e.color, { r: 0, g: 0, b: 0 });
              r.properties.color = [t.r, t.g, t.b];
            }
            (r.properties.opacity = e.opacity ? e.opacity : 1),
              (r.properties.strength = e.strength ? e.strength : 1);
          }
          return (
            (r.properties.wireframe = this.props.wireframe),
            (r.properties.solid = this.props.solid),
            (r.properties.culling = this.props.culling),
            (r.properties.stencil_mask = this.props.stencil_mask),
            (r.properties["no-depth-write"] = this.props["no-depth-write"]),
            (r.properties["no-depth-test"] = this.props["no-depth-test"]),
            [e, r]
          );
        }
      }
      (0, i.Cg)([s.o], l.prototype, "buildNode", null);
    },
    5459: (e, t, r) => {
      "use strict";
      r.d(t, { b: () => s });
      var n = r(1635),
        i = r(3496),
        a = r(3236);
      class s extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "reparent-to-panel";
        }
        buildNode(e, t) {
          const r = this.createSgNode(t),
            n = Object.assign(Object.assign({}, e), {
              bInsideReparentedPanel: !0,
              currentPanel: null,
            });
          return (
            this.props.parent_overlay_key &&
              (r.properties["parent-overlay-key"] =
                this.props.parent_overlay_key),
            [n, r]
          );
        }
      }
      (0, n.Cg)([a.o], s.prototype, "buildNode", null);
    },
    8715: (e, t, r) => {
      "use strict";
      r.d(t, { L: () => s });
      var n = r(1635),
        i = r(3496),
        a = r(3236);
      class s extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "resize-handle";
        }
        buildNode(e, t) {
          const r = this.createSgNode(t);
          return (
            (r.properties["target-id"] = this.props.target_id),
            (r.properties["is-active"] = this.props.is_active),
            [e, r]
          );
        }
      }
      (0, n.Cg)([a.o], s.prototype, "buildNode", null);
    },
    3496: (e, t, r) => {
      "use strict";
      r.d(t, {
        GM: () => v,
        Hm: () => c,
        PG: () => s,
        RH: () => l,
        UM: () => h,
        Wi: () => o,
        XI: () => m,
        _J: () => g,
        hi: () => d,
        j_: () => u,
        kJ: () => p,
      });
      var n = r(6540),
        i = r(3725),
        a = r(5723);
      function s(e, t) {
        return e ? { x: e.x ? e.x : t.x, y: e.y ? e.y : t.y } : t;
      }
      function o(e, t) {
        return e
          ? { x: e.x ? e.x : t.x, y: e.y ? e.y : t.y, z: e.z ? e.z : t.z }
          : t;
      }
      function l(e, t) {
        return e
          ? { r: e.r ? e.r : t.r, g: e.g ? e.g : t.g, b: e.b ? e.b : t.b }
          : t;
      }
      function c(e) {
        if (e) return [e.x, e.y];
      }
      function u(e) {
        var t;
        return null ===
          (t = (function (e) {
            if (e) return [e.x, e.y, e.z];
          })(e)) || void 0 === t
          ? void 0
          : t.join(" ");
      }
      function d(e) {
        if (e) return e.w + " " + e.x + " " + e.y + " " + e.z;
      }
      function m(e) {
        return e && void 0 !== e.to;
      }
      function p(e) {
        return "number" == typeof e
          ? e
          : (t = e) && void 0 !== t.to
            ? [e.channel, e.interp, e.from, e.to]
            : void 0;
        var t;
      }
      function h(e) {
        return m(e)
          ? [
              e.channel,
              e.interp,
              e.from ? e.from[0] : void 0,
              e.from ? e.from[1] : void 0,
              e.from ? e.from[2] : void 0,
              e.to ? e.to[0] : void 0,
              e.to ? e.to[1] : void 0,
              e.to ? e.to[2] : void 0,
            ]
          : void 0;
      }
      class g extends n.Component {
        constructor(e) {
          var t;
          super(e),
            (this.m_domRef = n.createRef()),
            (this.m_buildNodeOverride = null),
            (this.m_SGID =
              null !==
                (t =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.NextSGID()) && void 0 !== t
                ? t
                : i._E);
        }
        setBuildNodeOverride(e) {
          this.m_buildNodeOverride = e;
        }
        getSGID() {
          return this.m_SGID;
        }
        getNodeType() {
          return "base";
        }
        getID() {
          return this.props.id;
        }
        createSgNode(e) {
          return (0, a.Tu)(this.getNodeType(), e);
        }
        getCurrentRootElement() {
          return this.m_domRef.current;
        }
        componentDidMount() {
          this.m_buildNodeOverride &&
            (this.m_domRef.current.buildNode = this.m_buildNodeOverride),
            (0, a.my)();
        }
        componentDidUpdate() {
          (0, a.my)();
        }
        componentWillUnmount() {
          (0, a.Lx)(this.m_SGID),
            this.m_domRef.current &&
              this.m_buildNodeOverride &&
              delete this.m_domRef.current.buildNode;
        }
        PanelContextValue() {}
        render() {
          return n.createElement(
            v.Provider,
            { value: this.PanelContextValue() },
            n.cloneElement(this.internalRender(), {
              id: this.props.id,
              "vsg-type": this.getNodeType(),
              sgid: this.m_SGID,
              ref: this.m_domRef,
            }),
          );
        }
        internalRender() {
          return this.m_buildNodeOverride
            ? n.createElement("vsg-node", null, this.props.children)
            : null;
        }
      }
      const v = n.createContext(void 0);
    },
    5723: (e, t, r) => {
      "use strict";
      r.d(t, {
        Em: () => D,
        Lx: () => T,
        Oe: () => w,
        Tu: () => d,
        X4: () => m,
        bl: () => M,
        my: () => B,
        nX: () => C,
        w5: () => E,
      });
      var n = r(1635),
        i = r(2824);
      function a(e, t) {
        let r = e.getAttribute(t);
        if (r && r.length > 0) {
          if ("undefined" == r) return;
          let e = [];
          for (let t of r.split(" ")) 0 != t.length && e.push(parseFloat(t));
          if (e.length > 0) return e;
        }
      }
      function s(e, t) {
        let r = e.getAttribute(t);
        if (r && r.length > 0) return parseFloat(r);
      }
      function o(e, t) {
        let r = e.getAttribute(t);
        if (r && r.length > 0) return parseInt(r);
      }
      function l(e, t) {
        let r = e.getAttribute(t);
        if (r && r.length > 0)
          return (
            "true" == r ||
            (r.length > 0 && 0 != parseInt(r) && !isNaN(parseInt(r)))
          );
      }
      function c(e, t) {
        let r = e.getAttribute(t);
        if (r && r.length > 0) return r;
      }
      function u(e, t) {
        return M(c(e, t));
      }
      function d(e, t) {
        let r = { type: e, properties: {} };
        return (
          t.id && (r.properties.id = M(t.id)),
          (r.properties.sgid = o(t, "sgid")),
          r
        );
      }
      function m() {
        return null === VRHTML || void 0 === VRHTML
          ? void 0
          : VRHTML.VROverlay.ThisOverlayHandle();
      }
      function p(e, t) {
        let [r, n] = (function (e, t) {
            let r = t.buildNode;
            if (r) return r(e, t);
            let n = Object.assign({}, e),
              i = null;
            switch (t.nodeName.toUpperCase()) {
              case "VSG-TRANSFORM":
                (i = d("transform", t)),
                  (i.properties.translation = a(t, "translation")),
                  (i.properties.rotation = a(t, "rotation")),
                  (i.properties.scale = a(t, "scale")),
                  (i.properties["curvature-pitch"] = s(t, "curvature-pitch")),
                  (i.properties["transform-path"] = c(t, "transform-path")),
                  (i.properties["projection-constraint"] = o(
                    t,
                    "projection-constraint",
                  )),
                  (i.properties["invert-parent-panel-pitch"] = l(
                    t,
                    "invert-parent-panel-pitch",
                  )),
                  (i.properties["ignore-parent-scale"] = l(
                    t,
                    "ignore-parent-scale",
                  )),
                  (i.properties["parent-path"] = c(t, "parent-path")),
                  (i.properties["parent-origin"] = c(t, "parent-origin")),
                  (i.properties["parent-id"] = u(t, "parent-id")),
                  (i.properties["frame-resize-scale-factor"] = s(
                    t,
                    "frame-resize-scale-factor",
                  ));
                break;
              case "VSG-TRACKING-STATE-VISIBILITY":
                (i = d("trackingstatevisibility", t)),
                  (i.properties["visible-0dof"] = l(t, "visible-0dof")),
                  (i.properties["visible-3dof"] = l(t, "visible-3dof")),
                  (i.properties["visible-6dof"] = l(t, "visible-6dof"));
                break;
              case "VSG-ELASTIC-HEAD-TRANSFORM":
                (i = d("elasticheadtransform", t)),
                  (i.properties["rotation-start-angle-threshold"] = s(
                    t,
                    "rotation-start-angle-threshold",
                  )),
                  (i.properties["rotation-stop-angle-threshold"] = s(
                    t,
                    "rotation-stop-angle-threshold",
                  )),
                  (i.properties["rotation-ease-in-time"] = s(
                    t,
                    "rotation-ease-in-time",
                  )),
                  (i.properties["rotation-ease-in-power"] = s(
                    t,
                    "rotation-ease-in-power",
                  )),
                  (i.properties["rotation-ease-out-angle-threshold"] = s(
                    t,
                    "rotation-ease-out-angle-threshold",
                  )),
                  (i.properties["rotation-ease-out-power"] = s(
                    t,
                    "rotation-ease-out-power",
                  )),
                  (i.properties["rotation-min-angular-velocity"] = s(
                    t,
                    "rotation-min-angular-velocity",
                  )),
                  (i.properties["rotation-max-angular-velocity"] = s(
                    t,
                    "rotation-max-angular-velocity",
                  )),
                  (i.properties["translation-start-distance-threshold"] = s(
                    t,
                    "translation-start-distance-threshold",
                  )),
                  (i.properties["translation-stop-distance-threshold"] = s(
                    t,
                    "translation-stop-distance-threshold",
                  )),
                  (i.properties["translation-ease-in-time"] = s(
                    t,
                    "translation-ease-in-time",
                  )),
                  (i.properties["translation-ease-in-power"] = s(
                    t,
                    "translation-ease-in-power",
                  )),
                  (i.properties["translation-ease-out-distance-threshold"] = s(
                    t,
                    "translation-ease-out-distance-threshold",
                  )),
                  (i.properties["translation-ease-out-power"] = s(
                    t,
                    "translation-ease-out-power",
                  )),
                  (i.properties["translation-velocity"] = s(
                    t,
                    "translation-velocity",
                  )),
                  (i.properties.enabled = l(t, "enabled")),
                  (i.properties["lock-to-horizon"] = l(t, "lock-to-horizon")),
                  (i.properties["translation-parent"] = o(
                    t,
                    "translation-parent",
                  )),
                  (i.properties["rotation-translation-change-together"] = l(
                    t,
                    "rotation-translation-change-together",
                  ));
                break;
              case "VSG-LINE":
                (i = d("line", t)),
                  (i.properties["target-id"] = u(t, "target-id")),
                  (i.properties.thickness = s(t, "thickness")),
                  (i.properties["start-buffer"] = s(t, "start-buffer")),
                  (i.properties["end-buffer"] = s(t, "end-buffer"));
                break;
              case "VSG-LINE-CONSTRAINED-TRANSFORM":
                (i = d("line-constrained-transform", t)),
                  (i.properties["target-id"] = u(t, "target-id")),
                  (i.properties["source-id"] = u(t, "source-id")),
                  (i.properties["source-distance"] = s(t, "source-distance")),
                  (i.properties["target-limit"] = s(t, "target-limit"));
                break;
              case "VSG-CALLOUT-TRANSFORM":
                (i = d("callout-transform", t)),
                  (i.properties.offset = a(t, "offset"));
                break;
              case "VSG-HEAD-FACING-TRANSFORM":
                i = d("head-facing-transform", t);
                break;
              case "VSG-PIN-TO-VIEW-TRANSFORM":
                (i = d("pin-to-view-transform", t)),
                  (i.properties["offscreen-z-depth"] = s(
                    t,
                    "offscreen-z-depth",
                  )),
                  (i.properties["off-axis-limit"] = s(t, "off-axis-limit")),
                  (i.properties["transition-limit"] = s(t, "transition-limit"));
                break;
              case "VSG-GRAB-TRANSFORM":
                (i = d("grab-transform", t)),
                  (i.properties["parent-path"] = c(t, "parent-path")),
                  (i.properties.translation = a(t, "translation")),
                  (i.properties.rotation = a(t, "rotation")),
                  (i.properties.scale = a(t, "scale")),
                  (i.properties["should-head-align"] = l(
                    t,
                    "should-head-align",
                  )),
                  (i.properties["stop-distance"] = s(t, "stop-distance")),
                  (i.properties["start-angle"] = s(t, "start-angle")),
                  (i.properties["start-quat-difference"] = s(
                    t,
                    "start-quat-difference",
                  )),
                  (i.properties["stop-quat-difference"] = s(
                    t,
                    "stop-quat-difference",
                  )),
                  (i.properties["scale-margin"] = s(t, "scale-margin")),
                  (i.properties["lerp-speed"] = s(t, "lerp-speed")),
                  (i.properties["min-distance"] = s(t, "min-distance")),
                  (i.properties["max-distance"] = s(t, "max-distance")),
                  (i.properties["one-to-one-radius"] = s(
                    t,
                    "one-to-one-radius",
                  )),
                  (i.properties["max-x-squared-contribution"] = s(
                    t,
                    "max-x-squared-contribution",
                  )),
                  (i.properties["acceleration-factor-x-coefficient"] = s(
                    t,
                    "acceleration-factor-x-coefficient",
                  )),
                  (i.properties["acceleration-factor-x-squared-coefficient"] =
                    s(t, "acceleration-factor-x-squared-coefficient")),
                  (i.properties["acceleration-factor-scale-term"] = s(
                    t,
                    "acceleration-factor-scale-term",
                  )),
                  (i.properties["remote-transform-tx"] = s(
                    t,
                    "remote-transform-tx",
                  )),
                  (i.properties["reset-on-recenter"] = l(
                    t,
                    "reset-on-recenter",
                  ));
            }
            return [n, i];
          })(e, t),
          i = [];
        for (let e = 0; e < t.children.length; e++) {
          let n = t.children.item(e);
          if (n.children) {
            let e = p(r, n);
            e && (i = i.concat(e));
          }
        }
        return r.bShouldAbort
          ? null
          : n
            ? (i.length > 0 && (n.children = i), [n])
            : i.length > 0
              ? 1 == i.length
                ? i
                : [{ children: i }]
              : null;
      }
      let h,
        g,
        v,
        _,
        b = [],
        S = null,
        y = null,
        f = !0,
        R = null;
      function w(e, t, r) {
        (h = e),
          (g = t),
          (v = r),
          console.log("Setting owning overlay key to " + e);
      }
      function C(e, t) {
        return e + "::" + t;
      }
      function M(e) {
        return e
          ? (function (e) {
              return e && e.includes("::");
            })(e)
            ? e
            : C(E(), e)
          : null;
      }
      function E() {
        var e;
        return null !==
          (e =
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VROverlay.ThisOverlayKey()) && void 0 !== e
          ? e
          : h;
      }
      function T(e) {
        b.push(e), B();
      }
      function D() {
        _ = !0;
      }
      function B() {
        S ||
          (S = window.setTimeout(
            () =>
              (0, n.sH)(this, void 0, void 0, function* () {
                let e = document.body;
                g && (e = g);
                let t = {
                  type: "root",
                  rootproperties: {
                    relatchDashboardTransform: _,
                    allowDismissOnClick: f,
                    sceneColorCorrection: R,
                  },
                  children: p(
                    {
                      currentPanel: null,
                      bInsideReparentedPanel: !1,
                      bShouldAbort: !1,
                    },
                    e,
                  ),
                };
                y ||
                  (console.log("Initializing sg_mailbox"),
                  (y = new i._n()),
                  yield y.Init("sg_mailbox", v));
                let r = {
                  type: "update_scene_graph",
                  owning_overlay_key: E(),
                  scene_graph: t,
                  retired_sgids: b,
                };
                y.SendMessage("vrcompositor_systemlayer", r),
                  (S = null),
                  (b = []),
                  (_ = !1);
              }),
            0,
          ));
      }
    },
    428: (e, t, r) => {
      "use strict";
      var n = r(1635),
        i = r(3496),
        a = r(3236);
      class s extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "texture";
        }
        buildNode(e, t) {
          const r = this.createSgNode(t);
          return (
            (r.properties.id = this.props.id),
            (r.properties.source = this.props.source),
            [e, r]
          );
        }
      }
      (0, n.Cg)([a.o], s.prototype, "buildNode", null);
    },
    1230: (e, t, r) => {
      "use strict";
      r.d(t, { e: () => s });
      var n = r(1635),
        i = r(3496),
        a = r(3236);
      class s extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return Array.isArray(this.props.color) && this.props.color.length > 1
            ? "tint-anim"
            : "tint";
        }
        buildNode(e, t) {
          const r = this.createSgNode(t);
          return (
            this.props.color
              ? "string" == typeof this.props.color
                ? (r.properties.color = this.props.color)
                : Array.isArray(this.props.color)
                  ? (this.props.color.length > 0 &&
                    "string" == typeof this.props.color[0]
                      ? (r.properties.color =
                          this.props.color.length > 1
                            ? this.props.color
                            : this.props.color[0])
                      : (r.properties.color = this.props.color
                          .map((e) => [e.r, e.g, e.b])
                          .reduce((e, t) => e.concat(t), [])),
                    (r.properties["animation-seconds"] =
                      this.props.animationSeconds))
                  : (r.properties.color = [
                      this.props.color.r,
                      this.props.color.g,
                      this.props.color.b,
                    ])
              : (r.properties.color = [1, 1, 1]),
            [e, r]
          );
        }
      }
      (0, n.Cg)([a.o], s.prototype, "buildNode", null);
    },
    4397: (e, t, r) => {
      "use strict";
      var n = r(1635),
        i = r(3496),
        a = r(3236);
      class s extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "videocapturequad";
        }
        buildNode(e, t) {
          const r = this.createSgNode(t);
          return (
            (r.properties.width = this.props.width),
            (r.properties.height = this.props.height),
            (r.properties["target-id"] = this.props.target_id),
            (r.properties["near-z"] = this.props["near-z"]),
            (r.properties["far-z"] = this.props["far-z"]),
            (r.properties.debug = this.props.debug),
            [e, r]
          );
        }
      }
      (0, n.Cg)([a.o], s.prototype, "buildNode", null);
    },
    6292: (e, t, r) => {
      "use strict";
      function n() {
        return {
          translation: { x: 0, y: 0, z: 0 },
          rotation: { w: 1, x: 0, y: 0, z: 0 },
          scale: { x: 1, y: 1, z: 1 },
        };
      }
      function i(e, t) {
        return { x: e.x + t.x, y: e.y + t.y, z: e.z + t.z };
      }
      function a(e, t, r) {
        return {
          x: t.x + e * (r.x - t.x),
          y: t.y + e * (r.y - t.y),
          z: t.z + e * (r.z - t.z),
        };
      }
      function s(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function o(e, t) {
        return { x: e.x - t.x, y: e.y - t.y, z: e.z - t.z };
      }
      function l(e, t) {
        return { x: e.x * t, y: e.y * t };
      }
      function c(e, t) {
        return { x: e.x * t, y: e.y * t, z: e.z * t };
      }
      function u(e) {
        return Math.sqrt(e.x * e.x + e.y * e.y);
      }
      function d(e) {
        return Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z);
      }
      function m(e) {
        if (void 0 === e) return;
        let t = 0.5 * e.x,
          r = 0.5 * e.y,
          n = 0.5 * e.z,
          i = Math.cos(t),
          a = Math.cos(r),
          s = Math.cos(n),
          o = Math.sin(t),
          l = Math.sin(r),
          c = Math.sin(n);
        return {
          w: i * a * s + o * l * c,
          x: o * a * s + i * l * c,
          y: i * l * s - o * a * c,
          z: i * a * c - o * l * s,
        };
      }
      function p(e, t) {
        const r = 2 * (e.y * t.z - e.z * t.y),
          n = 2 * (e.z * t.x - e.x * t.z),
          i = 2 * (e.x * t.y - e.y * t.x);
        return {
          x: t.x + e.w * r + e.y * i - e.z * n,
          y: t.y + e.w * n + e.z * r - e.x * i,
          z: t.z + e.w * i + e.x * n - e.y * r,
        };
      }
      function h(e) {
        let t = e[0][0] + e[1][1] + e[2][2];
        if (t > 0) {
          let r = 2 * Math.sqrt(t + 1);
          return {
            w: 0.25 * r,
            x: (e[1][2] - e[2][1]) / r,
            y: (e[2][0] - e[0][2]) / r,
            z: (e[0][1] - e[1][0]) / r,
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
      function g(e, t) {
        let r = 2 * (e.y * t.z - e.z * t.y),
          n = 2 * (e.z * t.x - e.x * t.z),
          i = 2 * (e.x * t.y - e.y * t.x);
        return {
          x: t.x + e.w * r + e.y * i - e.z * n,
          y: t.y + e.w * n + e.z * r - e.x * i,
          z: t.z + e.w * i + e.x * n - e.y * r,
        };
      }
      function v(e, t, r) {
        return [
          [e.x, e.y, e.z],
          [t.x, t.y, t.z],
          [r.x, r.y, r.z],
        ];
      }
      function _(e) {
        return g(e.rotation, { x: 0, y: 0, z: -1 });
      }
      function b(e) {
        let t = d(e);
        return { x: e.x / t, y: e.y / t, z: e.z / t };
      }
      function S(e, t) {
        return {
          x: e.y * t.z - e.z * t.y,
          y: e.z * t.x - e.x * t.z,
          z: e.x * t.y - e.y * t.x,
        };
      }
      function y(e) {
        const t = { x: 0, y: 1, z: 0 };
        let r = _(e);
        (r.y = 0), (r = b(r));
        const n = v(b(S(r, t)), t, { x: -(i = r).x, y: -i.y, z: -i.z });
        var i;
        return { translation: e.translation, rotation: h(n), scale: e.scale };
      }
      r.d(t, {
        CU: () => i,
        Fb: () => m,
        JZ: () => o,
        Ld: () => h,
        NH: () => u,
        O6: () => l,
        QB: () => s,
        Se: () => a,
        Uj: () => d,
        e_: () => b,
        oN: () => S,
        o_: () => _,
        p0: () => y,
        q5: () => p,
        qF: () => v,
        tx: () => c,
        vx: () => n,
      });
    },
    3389: (e, t, r) => {
      "use strict";
      r.d(t, { C: () => a });
      var n = r(1635),
        i = r(2824);
      class a {
        constructor() {
          (this.m_mailbox = new i._n()),
            this.m_mailbox.Init("sgtransformcache");
        }
        static getInstance() {
          return a.instance || (a.instance = new a()), a.instance;
        }
        requestSGTransform(e, t = 0) {
          return new Promise((r, a) =>
            (0, n.sH)(this, void 0, void 0, function* () {
              let n = { type: "transform_request", id: e, flPushDistance: t },
                s = yield this.m_mailbox.SendMessageAndWaitForResponse(
                  i.pg,
                  n,
                  "transform_response",
                );
              s.id == e && s.transform
                ? r(s.transform)
                : a("requestSGTransform failed");
            }),
          );
        }
      }
    },
    1286: (e, t, r) => {
      "use strict";
      r.d(t, { b: () => n });
      const n = 6;
    },
    6138: (e, t, r) => {
      "use strict";
      r.d(t, { $: () => u, W: () => d });
      var n = r(1635),
        i = r(6540),
        a = r(3236),
        s = r(4963),
        o = r(6090),
        l = r(6189),
        c = r(1139);
      class u extends i.Component {
        constructor() {
          super(...arguments), (this.m_ref = i.createRef());
        }
        get elem() {
          return this.m_ref.current;
        }
        get disabled() {
          return !1 === this.props.enabled;
        }
        onMouseDown(e) {
          var t, r, n;
          null === (r = (t = this.props).onMouseDown) ||
            void 0 === r ||
            r.call(t, e),
            this.disabled ||
              s.u.Instance.playSound(
                null !== (n = this.props.pressSoundEffect) && void 0 !== n
                  ? n
                  : null,
              );
        }
        onMouseUp(e) {
          var t, r;
          null === (r = (t = this.props).onMouseUp) ||
            void 0 === r ||
            r.call(t, e);
        }
        onClick(e) {
          var t, r, n;
          this.disabled ||
            (null === (r = (t = this.props).onClick) ||
              void 0 === r ||
              r.call(t, e),
            d.temporarilySuppressSoundEffect(),
            s.u.Instance.playSound(
              null !== (n = this.props.releaseSoundEffect) && void 0 !== n
                ? n
                : s.j.ButtonClick,
            ));
        }
        onMouseEnter(e) {
          var t, r;
          null === (r = (t = this.props).onMouseEnter) ||
            void 0 === r ||
            r.call(t, e),
            this.disabled ||
              ((0, o.R$)() == o.OH.Overlay &&
                l.W.Instance.triggerHaptic(o.en.ButtonEnter));
        }
        onMouseLeave(e) {
          this.props.onMouseLeave && this.props.onMouseLeave(e),
            this.disabled ||
              ((0, o.R$)() == o.OH.Overlay &&
                l.W.Instance.triggerHaptic(o.en.ButtonLeave));
        }
        render() {
          let e = Object.assign({}, this.props);
          return (
            delete e.enabled,
            delete e.pressSoundEffect,
            delete e.releaseSoundEffect,
            (e.className = (0, c.FH)(e.className, ["Disabled", this.disabled])),
            i.cloneElement(i.createElement("div", e, this.props.children), {
              onClick: this.onClick,
              onMouseDown: this.onMouseDown,
              onMouseUp: this.onMouseUp,
              onMouseEnter: this.onMouseEnter,
              onMouseLeave: this.onMouseLeave,
              ref: this.m_ref,
            })
          );
        }
      }
      (0, n.Cg)([a.o], u.prototype, "onMouseDown", null),
        (0, n.Cg)([a.o], u.prototype, "onMouseUp", null),
        (0, n.Cg)([a.o], u.prototype, "onClick", null),
        (0, n.Cg)([a.o], u.prototype, "onMouseEnter", null),
        (0, n.Cg)([a.o], u.prototype, "onMouseLeave", null);
      class d extends i.Component {
        static temporarilySuppressSoundEffect() {
          window.clearTimeout(this.s_nPlaySoundEffectTimeout),
            (this.s_nPlaySoundEffectTimeout = 0),
            window.clearTimeout(this.s_nSuppressingSoundEffectsTimeout),
            (this.s_nSuppressingSoundEffectsTimeout = window.setTimeout(
              this.endSoundEffectSuppression,
              this.k_nSoundEffectSuppressionPeriod,
            ));
        }
        static get suppressingSoundEffect() {
          return this.s_nSuppressingSoundEffectsTimeout > 0;
        }
        onClick(e) {
          d.suppressingSoundEffect ||
            (window.clearTimeout(d.s_nPlaySoundEffectTimeout),
            (d.s_nPlaySoundEffectTimeout = window.setTimeout(
              d.playSoundEffect,
              d.k_nSoundEffectDelay,
            ))),
            this.props.onClick && this.props.onClick(e);
        }
        static endSoundEffectSuppression() {
          window.clearTimeout(this.s_nSuppressingSoundEffectsTimeout),
            (this.s_nSuppressingSoundEffectsTimeout = 0);
        }
        static playSoundEffect() {
          s.u.Instance.playSound(s.j.SurfaceClick);
        }
        render() {
          return i.cloneElement(
            i.createElement("div", this.props, this.props.children),
            { onClick: this.onClick },
          );
        }
      }
      (d.k_nSoundEffectSuppressionPeriod = 4),
        (d.k_nSoundEffectDelay = 2),
        (d.s_nSuppressingSoundEffectsTimeout = 0),
        (d.s_nPlaySoundEffectTimeout = 0),
        (0, n.Cg)([a.o], d.prototype, "onClick", null),
        (0, n.Cg)([a.o], d, "endSoundEffectSuppression", null),
        (0, n.Cg)([a.o], d, "playSoundEffect", null);
    },
    4493: (e, t, r) => {
      "use strict";
      r.d(t, { AN: () => v, Sr: () => n, ms: () => g });
      var n,
        i = r(1635),
        a = r(6540),
        s = r(6138),
        o = r(1139),
        l = r(3236),
        c = r(7813),
        u = r(3714),
        d = r(5615),
        m = r(6731),
        p = r(6575);
      !(function (e) {
        e[(e.Separator = 0)] = "Separator";
      })(n || (n = {}));
      class h extends a.Component {
        constructor() {
          super(...arguments),
            (this.m_refView = a.createRef()),
            (this.m_refScrollPanel = a.createRef()),
            (this.m_refSelectedButton = a.createRef()),
            (this.m_refParentPortal = a.createRef()),
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
          return e === n.Separator
            ? a.createElement("div", {
                className: "Separator",
                key: "separator" + t,
              })
            : null;
        }
        renderDropdownValueItem(e) {
          return a.createElement(
            s.$,
            {
              key: JSON.stringify(e.value),
              ref:
                e == this.props.selectedItem ? this.m_refSelectedButton : null,
              className: (0, o.FH)("DropdownPopoverButton", [
                "Selected",
                e == this.props.selectedItem,
              ]),
              onClick: () => this.setValue(e.value),
            },
            e.sLabel,
          );
        }
        setValue(e) {
          var t, r;
          this.props.onChange && this.props.onChange(e),
            null === (r = (t = this.props).onDismissRequested) ||
              void 0 === r ||
              r.call(t);
        }
        render() {
          return a.createElement(
            p.b,
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
            a.createElement(
              m.wM,
              {
                ref: this.m_refView,
                shouldDismissOnClickAnywhere: !0,
                shouldDismissOnClickInViewStack: !0,
                fadesViewsBelow: !1,
                onDismissRequested: this.props.onDismissRequested,
                className: (0, o.FH)("Dropdown", "Popover"),
              },
              a.createElement(
                d.M,
                { scrollDirection: d.D.Vertical, ref: this.m_refScrollPanel },
                this.props.items.map(this.renderDropdownItem),
              ),
            ),
          );
        }
        componentDidMount() {
          var e;
          this.m_elemBoundingParent = (0, o.jE)(
            ["body", "[vsg-type=panel]", ".SettingsSidebarPageModalContainer"],
            null === (e = this.m_refParentPortal.current) || void 0 === e
              ? void 0
              : e.anchorElement,
          );
        }
        updateLayout() {
          var e, t, r, n;
          const i =
              null === (e = this.m_refView.current) || void 0 === e
                ? void 0
                : e.div,
            a =
              null === (t = this.m_refScrollPanel.current) || void 0 === t
                ? void 0
                : t.div;
          if (!i || !a) return;
          const s =
              null !==
                (n =
                  null === (r = this.props.buttonRef.current) || void 0 === r
                    ? void 0
                    : r.elem.clientWidth) && void 0 !== n
                ? n
                : 0,
            o = this.m_elemBoundingParent.getBoundingClientRect();
          (a.style.minWidth = s + "px"),
            (a.style.maxWidth = o.width - 2 * h.POPOVER_BOUNDS_MARGIN + "px"),
            (a.style.maxHeight = o.height - 2 * h.POPOVER_BOUNDS_MARGIN + "px");
          const l = this.props.buttonRef.current.elem.getBoundingClientRect();
          let c = l.left,
            u = l.top;
          const d = i.getBoundingClientRect(),
            m = this.m_elemBoundingParent.getBoundingClientRect(),
            p = m.left + h.POPOVER_BOUNDS_MARGIN,
            g = m.right - h.POPOVER_BOUNDS_MARGIN,
            v = m.top + h.POPOVER_BOUNDS_MARGIN,
            _ = m.bottom - h.POPOVER_BOUNDS_MARGIN;
          if (this.m_refSelectedButton.current) {
            u -=
              this.m_refSelectedButton.current.elem.getBoundingClientRect()
                .top - d.top;
          }
          const b = u;
          c < p && (c = p),
            c + d.width > g && (c = g - d.width),
            u < v && (u = v),
            u + d.height > _ && (u = _ - d.height),
            (c = Math.round(c)),
            (u = Math.round(u)),
            (i.scrollTop = u - b),
            (i.style.transform =
              "translateX(" + c + "px) translateY(" + u + "px)");
        }
      }
      (h.POPOVER_BOUNDS_MARGIN = 10),
        (0, i.Cg)([l.o], h.prototype, "renderDropdownItem", null),
        (0, i.Cg)([l.o], h.prototype, "renderDropdownSpecialItem", null),
        (0, i.Cg)([l.o], h.prototype, "renderDropdownValueItem", null),
        (0, i.Cg)([l.o], h.prototype, "setValue", null),
        (0, i.Cg)([l.o], h.prototype, "updateLayout", null);
      class g extends a.Component {
        constructor(e) {
          super(e),
            (this.m_refButton = a.createRef()),
            (this.m_scrollWatcher = new o.aw()),
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
                : (0, u.we)("#Settings_SelectAnOption"),
            r = e ? e.sLabel : t;
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
              s.$,
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
              a.createElement("span", { ref: this.m_scrollWatcher.ref }, r),
            ),
            this.state.bShowingOptions &&
              a.createElement(
                h,
                Object.assign({}, this.props, {
                  selectedItem: e,
                  buttonRef: this.m_refButton,
                  onDismissRequested: this.hideDropdown,
                }),
              ),
          );
        }
      }
      (0, i.Cg)([l.o], g.prototype, "onParentScroll", null),
        (0, i.Cg)([c.computed], g.prototype, "value", null),
        (0, i.Cg)([c.computed], g.prototype, "selectedItem", null),
        (0, i.Cg)([l.o], g.prototype, "showDropdown", null),
        (0, i.Cg)([l.o], g.prototype, "hideDropdown", null);
      class v extends a.Component {
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
            a.createElement(g, Object.assign({}, e))
          );
        }
      }
      (0, i.Cg)([l.o], v.prototype, "onChange", null);
    },
    7600: (e, t, r) => {
      "use strict";
      r.d(t, { cb: () => l, tH: () => u });
      var n = r(1635),
        i = r(6540),
        a = r(6090),
        s = r(1286),
        o = r(3236);
      const l =
        ((c = (e) => {
          throw new Error(e.errorStr);
        }),
        function (e) {
          return i.createElement(
            u,
            null,
            i.createElement(c, Object.assign({}, e)),
          );
        });
      var c;
      class u extends i.Component {
        constructor(e) {
          super(e), (this.state = {}), (this.state.lastErrorKey = e.errorKey);
        }
        static InstallErrorReportingStore(e) {
          this.sm_ErrorReportingStore = e;
        }
        componentDidCatch(e, t) {
          const r = u.sm_ErrorReportingStore;
          r
            ? r
                .ReportError(e, {
                  strComponentStack: t.componentStack || void 0,
                })
                .then(
                  (e) =>
                    e && this.setState({ identifierHash: e.identifierHash }),
                )
            : console.warn(
                "No ErrorReportingStore - use ErrorReportingStore().Init() to configure error reporting to server",
              ),
            this.setState({
              error: { error: e, info: t },
              lastErrorKey: this.props.errorKey,
            });
        }
        Reset() {
          this.setState({ error: void 0 });
        }
        render() {
          const { children: e, fallback: t, errorKey: r } = this.props,
            { error: n, identifierHash: a, lastErrorKey: s } = this.state;
          return n && r == s
            ? void 0 !== t
              ? "function" == typeof t
                ? t(n.error)
                : t
              : u.sm_ErrorReportingStore &&
                  u.sm_ErrorReportingStore.reporting_enabled
                ? i.createElement(p, {
                    error: n,
                    identifierHash: a,
                    store: u.sm_ErrorReportingStore,
                    onRefresh: this.Reset,
                  })
                : i.createElement(m, { error: n, onDismiss: this.Reset })
            : e || null;
        }
      }
      function d(e) {
        const { enabled: t } = e,
          [r, n] = i.useState(t),
          [a, o] = i.useState(s.b);
        i.useEffect(() => {
          const e = setTimeout(() => {
            r &&
              (a > 1
                ? o(a - 1)
                : (console.warn(
                    "Auto-reloading due to triggered ErrorBoundary...",
                  ),
                  window.location.reload()));
          }, 1e3);
          return () => clearTimeout(e);
        }, [r, a]);
        const l = i.useCallback(() => {
          console.log("Auto-reload canceled."), n(!1);
        }, []);
        return (
          i.useEffect(() => {
            const e = () => {
              l();
            };
            return (
              document.addEventListener("click", e),
              () => document.removeEventListener("click", e)
            );
          }, [l]),
          t
            ? r
              ? i.createElement(
                  i.Fragment,
                  null,
                  i.createElement(
                    v,
                    null,
                    "Reloading UI in ",
                    a,
                    " seconds...",
                  ),
                  "   ",
                  i.createElement(
                    "span",
                    {
                      style: { textDecoration: "underline", cursor: "pointer" },
                      onClick: l,
                    },
                    "Cancel",
                  ),
                  i.createElement("br", null),
                )
              : i.createElement(
                  i.Fragment,
                  null,
                  i.createElement(v, null, "Auto-reload canceled."),
                  "   ",
                  i.createElement(
                    "span",
                    {
                      style: { textDecoration: "underline", cursor: "pointer" },
                      onClick: () => window.location.reload(),
                    },
                    "Reload now",
                  ),
                  i.createElement("br", null),
                )
            : null
        );
      }
      (0, n.Cg)([o.o], u.prototype, "Reset", null);
      const m = ({ error: e, onDismiss: t }) => {
          let r = e.error ? e.error.stack : "Stack missing",
            n = e.info ? e.info.componentStack : "",
            s = (e.error && e.error.message) || "unknown error";
          const o = i.useContext(a.GM);
          return i.createElement(
            h,
            null,
            i.createElement(v, null, 'Error: "', s, '"'),
            "   ",
            i.createElement(
              "span",
              {
                style: { textDecoration: "underline", cursor: "pointer" },
                onClick: t,
              },
              "(x) Dismiss",
            ),
            i.createElement("br", null),
            i.createElement(d, { enabled: null == o }),
            i.createElement(_, null, r),
            i.createElement(_, null, "The error occurred while rendering:", n),
          );
        },
        p = (e) => {
          const { error: t, onRefresh: r, identifierHash: n, store: s } = e,
            o = (t.error && t.error.message) || "unknown error",
            l = `${s.product}_${s.version}_${n}`,
            c = i.useContext(a.GM);
          return i.createElement(
            h,
            null,
            i.createElement(
              v,
              null,
              "Something went wrong while displaying this content. ",
              i.createElement(
                "span",
                {
                  style: { textDecoration: "underline", cursor: "pointer" },
                  onClick: r,
                },
                "Refresh",
              ),
            ),
            i.createElement(d, { enabled: null == c }),
            i.createElement(_, null, "Error Reference: ", l),
            i.createElement(_, null, o),
          );
        };
      function h(e) {
        return i.useContext(a.GM) || (0, a.R$)() != a.OH.Overlay
          ? i.createElement(g, Object.assign({}, e))
          : i.createElement(
              a.dL,
              {
                parent_path: "/user/head",
                translation: { y: -0.5, z: -0.9 },
                rotation: { x: -20 },
              },
              i.createElement(
                a.Zk,
                {
                  debug_name: "vr_error_container",
                  meters_per_pixel: 75e-5,
                  origin: { x: -0.5, y: -1 },
                  interactive: !0,
                },
                i.createElement(g, Object.assign({}, e)),
              ),
            );
      }
      const g = ({ children: e }) =>
          i.createElement(
            "div",
            {
              style: {
                overflow: "auto",
                marginLeft: "15px",
                color: "white",
                fontSize: "16px",
                userSelect: "auto",
                backgroundColor: "black",
              },
              className: "ErrorBoundary",
            },
            e,
          ),
        v = ({ children: e }) =>
          i.createElement(
            "h1",
            {
              style: {
                fontSize: "20px",
                display: "inline-block",
                marginTop: "15px",
                userSelect: "auto",
              },
            },
            e,
          ),
        _ = ({ children: e }) =>
          i.createElement(
            "pre",
            { style: { marginTop: "15px", opacity: 0.7, userSelect: "auto" } },
            e,
          );
    },
    6731: (e, t, r) => {
      "use strict";
      r.d(t, { vw: () => p, wM: () => m });
      var n,
        i = r(1635),
        a = r(6540),
        s = r(3236),
        o = r(1139),
        l = r(7813),
        c = r(1370);
      const u = a.createContext(null);
      class d {
        constructor() {
          (this.m_stack = l.observable.array([])),
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
      (0, i.Cg)([s.o], d.prototype, "cleanup", null),
        (0, i.Cg)([s.o], d.prototype, "onWindowKeyDown", null),
        (0, i.Cg)([s.o], d.prototype, "onWindowClick", null),
        (0, i.Cg)([l.computed], d.prototype, "size", null),
        (0, i.Cg)([l.action.bound], d.prototype, "dismissTopView", null),
        (0, i.Cg)([l.computed], d.prototype, "hasViews", null),
        (0, i.Cg)([l.computed], d.prototype, "bottomView", null),
        (0, i.Cg)([l.computed], d.prototype, "topView", null),
        (0, i.Cg)([l.action], d.prototype, "pushView", null),
        (0, i.Cg)([l.action], d.prototype, "removeView", null);
      let m = (n = class extends a.Component {
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
          const r = this.div.getBoundingClientRect();
          return e >= r.left && e <= r.right && t >= r.top && t <= r.bottom;
        }
        constructor(e) {
          super(e),
            (this.m_viewRef = a.createRef()),
            (this.m_ViewStack = null),
            (this.m_bOwnsViewStack = !1),
            (this.m_bFadesViewsBelow = !1),
            (0, l.makeObservable)(this);
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
            : (this.m_ViewStack = new d()),
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
              shouldDismissOnClickInViewStack: r,
              fadesViewsBelow: s,
              onDismissRequested: l,
            } = e,
            c = (0, i.Tt)(e, [
              "shouldDismissOnClickAnywhere",
              "shouldDismissOnClickInViewStack",
              "fadesViewsBelow",
              "onDismissRequested",
            ]),
            d = a.createElement(
              "div",
              Object.assign({}, c, {
                className: (0, o.FH)(
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
            ? a.createElement(u.Provider, { value: this.viewStack }, d)
            : d;
        }
      });
      (m.k_FadedForModalClassName = "FadedForModal"),
        (m.contextType = u),
        (0, i.Cg)([l.observable], m.prototype, "m_ViewStack", void 0),
        (0, i.Cg)([l.computed], m.prototype, "isTopView", null),
        (0, i.Cg)([l.computed], m.prototype, "viewLevel", null),
        (0, i.Cg)([l.computed], m.prototype, "viewShouldFadeForModal", null),
        (0, i.Cg)([s.o], m.prototype, "dismissView", null),
        (0, i.Cg)([l.action.bound], m.prototype, "addToViewStack", null),
        (0, i.Cg)([l.action.bound], m.prototype, "removeFromViewStack", null),
        (m = n = (0, i.Cg)([c.PA], m));
      const p = a.forwardRef((e, t) =>
        a.createElement(m, Object.assign({}, e, { ref: t }), e.children),
      );
      let h = class extends a.Component {
        constructor(e) {
          super(e), (this.state = { viewStack: null });
        }
        setFloatingViewStack(e) {
          this.setState({ viewStack: e });
        }
        render() {
          var e, t, r;
          const n =
            null !==
              (r =
                null ===
                  (t =
                    null === (e = this.state.viewStack) || void 0 === e
                      ? void 0
                      : e.bottomView) || void 0 === t
                  ? void 0
                  : t.viewShouldFadeForModal) &&
            void 0 !== r &&
            r;
          return a.createElement(
            "div",
            Object.assign({}, this.props, {
              className: (0, o.FH)(
                "View",
                [m.k_FadedForModalClassName, n],
                this.props.className,
              ),
            }),
            this.props.children,
          );
        }
      };
      h = (0, i.Cg)([c.PA], h);
    },
    6189: (e, t, r) => {
      "use strict";
      r.d(t, { W: () => s });
      var n = r(6090);
      const i = Object.values(n.en).filter((e) => "number" == typeof e);
      function a(e, t) {
        return new Set([...e, ...t]);
      }
      class s {
        constructor() {
          this.m_mapSuppressedHaptics = new Map();
        }
        static get Instance() {
          return s.s_Instance || (s.s_Instance = new s()), s.s_Instance;
        }
        suppressHaptics(e, t) {
          const r = new Set(t);
          this.m_mapSuppressedHaptics.has(e)
            ? this.m_mapSuppressedHaptics.set(
                e,
                a(this.m_mapSuppressedHaptics.get(e), r),
              )
            : this.m_mapSuppressedHaptics.set(e, r);
        }
        suppressHapticsExcept(e, t) {
          const r = new Set(t),
            n = new Set(i.filter((e) => !r.has(e)));
          this.m_mapSuppressedHaptics.has(e)
            ? this.m_mapSuppressedHaptics.set(
                e,
                a(this.m_mapSuppressedHaptics.get(e), n),
              )
            : this.m_mapSuppressedHaptics.set(e, n);
        }
        unsuppressHaptics(e, t) {
          const r = new Set(t);
          var n, i;
          void 0 === t
            ? this.m_mapSuppressedHaptics.delete(e)
            : this.m_mapSuppressedHaptics.has(e) ||
              this.m_mapSuppressedHaptics.set(
                e,
                ((n = this.m_mapSuppressedHaptics.get(e)),
                (i = r),
                new Set([...n].filter((e) => !i.has(e)))),
              );
        }
        isHapticSuppressed(e) {
          return Array.from(this.m_mapSuppressedHaptics.values()).some((t) =>
            t.has(e),
          );
        }
        triggerHaptic(e) {
          (0, n.R$)() != n.OH.Overlay ||
            this.isHapticSuppressed(e) ||
            null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VROverlay.TriggerOverlayHapticEffect(
              VRHTML.VROverlay.ThisOverlayHandle(),
              e,
            );
        }
      }
      s.s_Instance = null;
    },
    260: (e, t, r) => {
      "use strict";
      r.d(t, { j: () => s });
      var n = r(6540),
        i = r(961);
      const a = (e) =>
        n.createElement("div", {
          style: {
            position: "fixed",
            left: e.x,
            top: e.y,
            width: e.width,
            height: e.height,
            zIndex: 90019001,
          },
        });
      class s extends n.Component {
        render() {
          const e = document.body.getBoundingClientRect();
          let t = null;
          if (this.props.element) {
            const r = this.props.element.getBoundingClientRect();
            t = n.createElement(
              n.Fragment,
              null,
              n.createElement(a, { x: 0, y: 0, width: e.width, height: r.y }),
              n.createElement(a, {
                x: 0,
                y: r.y + r.height,
                width: e.width,
                height: e.height - r.height - r.y,
              }),
              n.createElement(a, {
                x: 0,
                y: r.y,
                width: r.x,
                height: r.height,
              }),
              n.createElement(a, {
                x: r.x + r.width,
                y: r.y,
                width: e.width - r.width - r.x,
                height: r.height,
              }),
            );
          } else
            t = n.createElement(
              n.Fragment,
              null,
              n.createElement(a, {
                x: 0,
                y: 0,
                width: e.width,
                height: e.height,
              }),
            );
          return i.createPortal(t, document.body);
        }
      }
    },
    7379: (e, t, r) => {
      "use strict";
      r.d(t, { a: () => u });
      var n,
        i = r(1635),
        a = r(6540),
        s = r(1139),
        o = r(1370),
        l = r(6731),
        c = r(6575);
      let u = (n = class extends a.Component {
        constructor(e) {
          super(e),
            (this.m_refParentPortal = a.createRef()),
            (this.state = {
              elemBoundingParent: window.document.body,
              bInDOM: !1,
            });
        }
        componentDidMount() {
          var e, t;
          this.setState({
            elemBoundingParent: (0, s.jE)(
              [
                "body",
                "[vsg-type=panel]",
                ...(null !== (e = this.props.allowableParentSelectors) &&
                void 0 !== e
                  ? e
                  : []),
              ],
              null === (t = this.m_refParentPortal.current) || void 0 === t
                ? void 0
                : t.anchorElement,
            ),
            bInDOM: !0,
          });
        }
        render() {
          var e;
          const t = this.state.elemBoundingParent.getBoundingClientRect();
          let r = Object.assign({}, this.props);
          return (
            delete r.onDismissRequested,
            delete r.backdropClassName,
            delete r.allowableParentSelectors,
            a.createElement(
              c.b,
              {
                ref: this.m_refParentPortal,
                allowableParentSelectors: [
                  "body",
                  "vsg-app",
                  "vsg-mountable",
                  "[vsg-type=panel]",
                  ...(null !== (e = this.props.allowableParentSelectors) &&
                  void 0 !== e
                    ? e
                    : []),
                ],
              },
              a.createElement(
                l.wM,
                Object.assign({}, r, {
                  shouldDismissOnClickAnywhere: !1,
                  shouldDismissOnClickInViewStack: !0,
                  fadesViewsBelow: !0,
                  onDismissRequested: this.props.onDismissRequested,
                  className: (0, s.FH)("Modal", this.props.className),
                  style: {
                    maxWidth: t.width - 2 * n.MODAL_BOUNDS_MARGIN,
                    maxHeight: t.height - 2 * n.MODAL_BOUNDS_MARGIN,
                  },
                }),
                this.state.bInDOM && this.props.children,
              ),
            )
          );
        }
      });
      (u.MODAL_BOUNDS_MARGIN = 10), (u = n = (0, i.Cg)([o.PA], u));
    },
    5615: (e, t, r) => {
      "use strict";
      r.d(t, { D: () => n, M: () => h });
      var n,
        i,
        a = r(1635),
        s = r(6540),
        o = r(3236),
        l = r(6090),
        c = r(6189),
        u = r(1139),
        d = r(7813),
        m = r(6138),
        p = r(260);
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Vertical = 1)] = "Vertical"),
          (e[(e.Horizontal = 2)] = "Horizontal");
      })(n || (n = {})),
        (function (e) {
          (e[(e.Default = 0)] = "Default"),
            (e[(e.MouseDown = 1)] = "MouseDown"),
            (e[(e.Dragging = 2)] = "Dragging"),
            (e[(e.Thrown = 3)] = "Thrown");
        })(i || (i = {}));
      class h extends s.Component {
        static get isScrollingSuppressed() {
          return h.s_setScrollingSuppressors.size > 0;
        }
        static get userIsDragging() {
          return !!v.m_CurrentlyDraggingPanel;
        }
        static suppressScrolling(e) {
          h.s_setScrollingSuppressors.add(e);
        }
        static unsuppressScrolling(e) {
          h.s_setScrollingSuppressors.delete(e);
        }
        constructor(e) {
          super(e),
            (this.m_ref = s.createRef()),
            (this.m_initialMousePosition = null),
            (this.m_initialScrollPosition = null),
            (this.m_mostRecentScrollSamples = []),
            (this.m_thrownVelocityPerSecond = null),
            (this.m_animationFrameRequestHandle = 0),
            (this.state = { eScrollState: i.Default, bAtEdge: null }),
            (0, d.makeObservable)(this);
        }
        componentWillUnmount() {
          this.stopMouseTracking(),
            window.cancelAnimationFrame(this.m_animationFrameRequestHandle);
        }
        componentDidMount() {
          this.setState({ bAtEdge: this.currentlyAtEdge });
        }
        componentDidUpdate(e, t) {
          this.state.bAtEdge &&
            !1 === t.bAtEdge &&
            c.W.Instance.triggerHaptic(l.en.SlidingEdge);
        }
        onWindowMouseMove(e) {
          this.updateMouseTracking({ x: e.clientX, y: e.clientY });
        }
        onWindowMouseUp(e) {
          this.stopMouseTracking();
        }
        onMouseDown(e) {
          var t, r;
          null === (r = (t = this.props).onMouseDown) ||
            void 0 === r ||
            r.call(t, e),
            this.startMouseTracking({ x: e.clientX, y: e.clientY });
        }
        onMouseUp(e) {
          var t, r;
          null === (r = (t = this.props).onMouseUp) ||
            void 0 === r ||
            r.call(t, e);
        }
        onScroll(e) {
          var t, r;
          null === (r = (t = this.props).onScroll) ||
            void 0 === r ||
            r.call(t, e),
            this.setState({ bAtEdge: this.currentlyAtEdge });
        }
        get div() {
          return this.m_ref.current;
        }
        get currentlyAtEdge() {
          const e = this.m_ref.current;
          return e
            ? this.scrollsVertically
              ? 0 == e.scrollTop ||
                e.scrollTop + e.clientHeight == e.scrollHeight
              : 0 == e.scrollLeft ||
                e.scrollLeft + e.clientWidth == e.scrollWidth
            : null;
        }
        startMouseTracking(e) {
          this.setState({ eScrollState: i.MouseDown }),
            (this.m_initialMousePosition = e),
            window.document.addEventListener(
              "mousemove",
              this.onWindowMouseMove,
            ),
            window.document.addEventListener("mouseup", this.onWindowMouseUp);
        }
        updateMouseTracking(e) {
          const t = (0, l.QB)(this.m_initialMousePosition, e);
          switch (this.state.eScrollState) {
            case i.MouseDown:
              if (this.props.scrollDirection == n.None) break;
              Math.abs(this.scrollsHorizontally ? t.x : t.y) >
                (this.scrollsHorizontally
                  ? h.MIN_HORIZONTAL_DRAG_DISTANCE
                  : h.MIN_VERTICAL_DRAG_DISTANCE) && this.startDragging(e);
              break;
            case i.Dragging:
              if ((this.logScrollSample(), v.m_CurrentlyDraggingPanel)) {
                if (v.m_CurrentlyDraggingPanel != this) break;
              } else v.m_CurrentlyDraggingPanel = this;
              this.scrollsHorizontally
                ? (this.m_ref.current.scrollLeft =
                    this.m_initialScrollPosition.x + t.x)
                : (this.m_ref.current.scrollTop =
                    this.m_initialScrollPosition.y + t.y);
          }
        }
        requestNextAnimationFrame() {
          (this.m_animationFrameRequestHandle = window.requestAnimationFrame(
            this.onAnimationFrame,
          )),
            (this.m_lastAnimationFrameTimeMs = performance.now());
        }
        onAnimationFrame() {
          if (this.state.eScrollState != i.Thrown) return;
          const e = (performance.now() - this.m_lastAnimationFrameTimeMs) / 1e3;
          (this.m_ref.current.scrollLeft +=
            this.m_thrownVelocityPerSecond.x * e),
            (this.m_ref.current.scrollTop +=
              this.m_thrownVelocityPerSecond.y * e);
          const t = Math.sign(this.m_thrownVelocityPerSecond.x),
            r = Math.sign(this.m_thrownVelocityPerSecond.y),
            n =
              850 +
              (((0, l.NH)(this.m_thrownVelocityPerSecond) - 500) / 1e4) * 49150,
            a = Math.min(5e4, Math.max(850, n));
          this.m_thrownVelocityPerSecond = {
            x: this.m_thrownVelocityPerSecond.x - t * a * e,
            y: this.m_thrownVelocityPerSecond.y - r * a * e,
          };
          Math.sign(this.m_thrownVelocityPerSecond.x) != t ||
          Math.sign(this.m_thrownVelocityPerSecond.y) != r ||
          (0, l.NH)(this.m_thrownVelocityPerSecond) <= 1
            ? this.setState({ eScrollState: i.Default })
            : this.requestNextAnimationFrame();
        }
        startDragging(e) {
          h.isScrollingSuppressed ||
            ((0, l.R$)() == l.OH.Overlay &&
              (this.setState({ eScrollState: i.Dragging }),
              (this.m_initialMousePosition = e),
              (this.m_initialScrollPosition = {
                x: this.m_ref.current.scrollLeft,
                y: this.m_ref.current.scrollTop,
              }),
              this.logScrollSample()));
        }
        startThrowing() {
          (this.m_thrownVelocityPerSecond = this.calculateThrowStartVelocity()),
            this.setState({ eScrollState: i.Thrown }),
            this.requestNextAnimationFrame();
        }
        cancelThrowing(e) {
          this.setState(
            (e, t) =>
              e.eScrollState == i.Thrown
                ? (window.cancelAnimationFrame(
                    this.m_animationFrameRequestHandle,
                  ),
                  { eScrollState: i.Default })
                : null,
            e,
          );
        }
        get isThrown() {
          return this.state.eScrollState == i.Thrown;
        }
        calculateThrowStartVelocity() {
          if (this.m_mostRecentScrollSamples.length < 2) return { x: 0, y: 0 };
          let e = null,
            t = 0;
          for (let r = 1; r < this.m_mostRecentScrollSamples.length; r++) {
            const n = this.m_mostRecentScrollSamples[r - 1],
              i = this.m_mostRecentScrollSamples[r],
              a = (i.timeMs - n.timeMs) / 1e3,
              s = {
                x: (i.scrollPosition.x - n.scrollPosition.x) / a,
                y: (i.scrollPosition.y - n.scrollPosition.y) / a,
              };
            e
              ? ((e.x = (e.x * t + s.x) / (t + 1)),
                (e.y = (e.y * t + s.y) / (t + 1)))
              : (e = s),
              t++;
          }
          const r = (0, l.NH)(e);
          return (
            r > h.MAX_PIXELS_PER_SECOND &&
              (e = (0, l.O6)(e, h.MAX_PIXELS_PER_SECOND / r)),
            r < h.MIN_THROW_VELOCITY_PER_SECOND && (e = null),
            null != e ? e : { x: 0, y: 0 }
          );
        }
        logScrollSample() {
          for (
            this.m_mostRecentScrollSamples.push({
              scrollPosition: {
                x: this.m_ref.current.scrollLeft,
                y: this.m_ref.current.scrollTop,
              },
              timeMs: performance.now(),
            });
            this.m_mostRecentScrollSamples.length > h.MAX_SCROLL_SAMPLES;
          )
            this.m_mostRecentScrollSamples.shift();
        }
        clearScrollSamples() {
          this.m_mostRecentScrollSamples = [];
        }
        stopMouseTracking() {
          v.m_CurrentlyDraggingPanel == this
            ? (this.startThrowing(),
              m.W.temporarilySuppressSoundEffect(),
              setTimeout(() => {
                v.m_CurrentlyDraggingPanel = null;
              }, 0))
            : this.setState({ eScrollState: i.Default }),
            this.clearScrollSamples(),
            (this.m_initialMousePosition = null),
            (this.m_initialScrollPosition = null),
            window.document.removeEventListener(
              "mousemove",
              this.onWindowMouseMove,
            ),
            window.document.removeEventListener(
              "mouseup",
              this.onWindowMouseUp,
            );
        }
        get scrollsHorizontally() {
          return this.props.scrollDirection == n.Horizontal;
        }
        get scrollsVertically() {
          return this.props.scrollDirection == n.Vertical;
        }
        render() {
          let e = Object.assign({}, this.props);
          delete e.scrollDirection, delete e.alwaysShowScrollbars;
          const t = this.props.alwaysShowScrollbars ? "scroll" : "auto";
          return s.createElement(
            s.Fragment,
            null,
            this.state.eScrollState == i.Dragging && s.createElement(p.j, null),
            s.createElement(
              "div",
              Object.assign({}, e, {
                className: (0, u.FH)("ScrollPanel", e.className),
                style: Object.assign(Object.assign({}, e.style), {
                  overflowX:
                    this.props.scrollDirection == n.Horizontal ? t : "hidden",
                  overflowY:
                    this.props.scrollDirection == n.Vertical ? t : "hidden",
                }),
                onMouseDown: this.onMouseDown,
                onMouseUp: this.onMouseUp,
                onScroll: this.onScroll,
                ref: this.m_ref,
              }),
              this.props.children,
            ),
          );
        }
        get scrollTop() {
          var e;
          return null === (e = this.m_ref.current) || void 0 === e
            ? void 0
            : e.scrollTop;
        }
        set scrollTop(e) {
          this.m_ref.current &&
            ((this.m_ref.current.scrollTop = e), this.cancelThrowing());
        }
        get scrollLeft() {
          var e;
          return null === (e = this.m_ref.current) || void 0 === e
            ? void 0
            : e.scrollLeft;
        }
        set scrollLeft(e) {
          this.m_ref.current &&
            ((this.m_ref.current.scrollLeft = e), this.cancelThrowing());
        }
        scrollTo(e) {
          const t = () => {
            var t;
            null === (t = this.m_ref.current) || void 0 === t || t.scrollTo(e);
          };
          this.state.eScrollState == i.Thrown ? this.cancelThrowing(t) : t();
        }
        get children() {
          var e;
          return null === (e = this.m_ref.current) || void 0 === e
            ? void 0
            : e.children;
        }
        getBoundingClientRect() {
          var e;
          return null === (e = this.m_ref.current) || void 0 === e
            ? void 0
            : e.getBoundingClientRect();
        }
        get clientWidth() {
          var e;
          return null === (e = this.m_ref.current) || void 0 === e
            ? void 0
            : e.clientWidth;
        }
        get clientHeight() {
          var e;
          return null === (e = this.m_ref.current) || void 0 === e
            ? void 0
            : e.clientHeight;
        }
        get scrollWidth() {
          var e;
          return null === (e = this.m_ref.current) || void 0 === e
            ? void 0
            : e.scrollWidth;
        }
        get scrollHeight() {
          var e;
          return null === (e = this.m_ref.current) || void 0 === e
            ? void 0
            : e.scrollHeight;
        }
        get style() {
          var e;
          return null === (e = this.m_ref.current) || void 0 === e
            ? void 0
            : e.style;
        }
        contains(e) {
          var t;
          return null === (t = this.m_ref.current) || void 0 === t
            ? void 0
            : t.contains(e);
        }
      }
      (h.s_setScrollingSuppressors = d.observable.set()),
        (h.MAX_SCROLL_SAMPLES = 4),
        (h.MAX_PIXELS_PER_SECOND = 1e4),
        (h.MIN_THROW_VELOCITY_PER_SECOND = 1e3),
        (h.MIN_VERTICAL_DRAG_DISTANCE = 80),
        (h.MIN_HORIZONTAL_DRAG_DISTANCE = 40),
        (0, a.Cg)([o.o], h.prototype, "onWindowMouseMove", null),
        (0, a.Cg)([o.o], h.prototype, "onWindowMouseUp", null),
        (0, a.Cg)([o.o], h.prototype, "onMouseDown", null),
        (0, a.Cg)([o.o], h.prototype, "onMouseUp", null),
        (0, a.Cg)([o.o], h.prototype, "onScroll", null),
        (0, a.Cg)([o.o], h.prototype, "onAnimationFrame", null),
        (0, a.Cg)([d.computed], h, "isScrollingSuppressed", null),
        (0, a.Cg)([d.computed], h, "userIsDragging", null),
        (0, a.Cg)([d.action], h, "suppressScrolling", null),
        (0, a.Cg)([d.action], h, "unsuppressScrolling", null);
      class g {
        constructor() {
          (this.m_CurrentlyDraggingPanel = null), (0, d.makeObservable)(this);
        }
      }
      (0, a.Cg)(
        [d.observable],
        g.prototype,
        "m_CurrentlyDraggingPanel",
        void 0,
      );
      const v = new g();
    },
    917: (e, t, r) => {
      "use strict";
      r.d(t, { Ap: () => _, Te: () => a, uJ: () => i });
      var n,
        i,
        a,
        s = r(1635),
        o = r(6540),
        l = r(3236),
        c = r(1370),
        u = r(6090),
        d = r(4963),
        m = r(6138),
        p = r(1139),
        h = r(6189),
        g = r(5615),
        v = r(260);
      !(function (e) {
        (e[(e.Value = 0)] = "Value"), (e[(e.Color = 1)] = "Color");
      })(i || (i = {})),
        (function (e) {
          (e[(e.Below = 0)] = "Below"), (e[(e.OnHandle = 1)] = "OnHandle");
        })(a || (a = {}));
      let _ = (n = class extends o.Component {
        constructor(e) {
          super(e),
            (this.m_sScrollSuppressedIdentifier = Math.round(
              1e6 * Math.random(),
            ).toString()),
            (this.m_refSlider = o.createRef()),
            (this.m_refSliderDefaultHandle = o.createRef()),
            (this.m_nAnimationFrameCallback = 0),
            (this.m_dragStartTime = null),
            (this.m_setDetentsToIgnore = new Set()),
            (this.m_nCurrentNearestSnappableDetent = null),
            (this.m_nValueOffset = 0),
            (this.state = { m_bSliding: !1 });
        }
        get isSliding() {
          return this.state.m_bSliding;
        }
        get isVertical() {
          var e;
          return null !== (e = this.props.vertical) && void 0 !== e && e;
        }
        componentDidMount() {
          window.document.addEventListener("mousemove", this.onWindowMouseMove),
            window.document.addEventListener("mouseup", this.onWindowMouseUp),
            this.setDragElapsedSecondsCSSProperty(0);
        }
        componentWillUnmount() {
          window.document.removeEventListener(
            "mousemove",
            this.onWindowMouseMove,
          ),
            window.document.removeEventListener(
              "mouseup",
              this.onWindowMouseUp,
            ),
            window.cancelAnimationFrame(this.m_nAnimationFrameCallback),
            h.W.Instance.unsuppressHaptics(this),
            g.M.unsuppressScrolling(this.m_sScrollSuppressedIdentifier);
        }
        get sliderHandleElement() {
          var e, t;
          return null !==
            (t =
              null === (e = this.props.customHandleComponentRef) || void 0 === e
                ? void 0
                : e.current) && void 0 !== t
            ? t
            : this.m_refSliderDefaultHandle.current;
        }
        onSliderMouseDown(e) {
          this.m_refSlider.current &&
            this.sliderHandleElement &&
            ((this.m_nValueOffset = 0),
            this.startSliding({ x: e.clientX, y: e.clientY }));
        }
        onWindowMouseMove(e) {
          if (
            !this.state.m_bSliding ||
            !this.m_refSlider.current ||
            !this.sliderHandleElement
          )
            return;
          const t = this.isVertical ? e.clientY : e.clientX;
          this.updateValueForMousePosition(t, !1);
        }
        onSliderMouseEnter(e) {
          var t, r;
          null === (r = (t = this.props).onMouseEnter) ||
            void 0 === r ||
            r.call(t, e),
            (0, u.R$)() != u.OH.Overlay ||
              this.state.m_bSliding ||
              h.W.Instance.triggerHaptic(u.en.ButtonEnter);
        }
        onSliderMouseLeave(e) {
          var t, r;
          null === (r = (t = this.props).onMouseLeave) ||
            void 0 === r ||
            r.call(t, e),
            (0, u.R$)() != u.OH.Overlay ||
              this.state.m_bSliding ||
              h.W.Instance.triggerHaptic(u.en.ButtonLeave);
        }
        getNormalizedValueForMousePosition(e) {
          const t = this.m_refSlider.current.getBoundingClientRect(),
            r = this.sliderHandleElement.getBoundingClientRect(),
            n = this.isVertical ? t.bottom : t.left,
            i = this.isVertical ? r.height : r.width,
            a = this.isVertical ? t.height : t.width;
          return ((this.isVertical ? n - e + n : e) - (n + i / 2)) / (a - i);
        }
        updateValueForMousePosition(e, t) {
          const r = this.normalizedValue;
          let i =
            this.getNormalizedValueForMousePosition(e) + this.m_nValueOffset;
          const a = this.getClosestSnappableDetent(i),
            s = this.normalizedDetents;
          for (let e = 0; e < s.length; e++) {
            const t = s[e];
            Math.abs(i - t) > n.DETENT_UNIGNORE_DISTANCE &&
              this.m_setDetentsToIgnore.delete(t);
          }
          t && a === r && this.m_setDetentsToIgnore.add(a),
            null === a || this.m_setDetentsToIgnore.has(a) || (i = a),
            this.m_nCurrentNearestSnappableDetent !== a &&
              ((this.m_dragStartTime = new Date()),
              null !== this.m_nCurrentNearestSnappableDetent &&
                this.m_setDetentsToIgnore.add(
                  this.m_nCurrentNearestSnappableDetent,
                ),
              null === a ||
                this.m_setDetentsToIgnore.has(a) ||
                h.W.Instance.triggerHaptic(u.en.Snap)),
            (this.m_nCurrentNearestSnappableDetent = a),
            this.setNormalizedValue(i);
        }
        get isSnappedToDetent() {
          return (
            null !== this.m_nCurrentNearestSnappableDetent &&
            !this.m_setDetentsToIgnore.has(
              this.m_nCurrentNearestSnappableDetent,
            )
          );
        }
        onWindowMouseUp(e) {
          this.stopSliding();
        }
        startExternalSliding(e) {
          if (!this.m_refSlider.current || !this.sliderHandleElement) return;
          const t = this.isVertical ? e.y : e.x;
          (this.m_nValueOffset =
            -this.getNormalizedValueForMousePosition(t) + this.normalizedValue),
            this.startSliding(e);
        }
        stopExternalSliding() {
          this.stopSliding();
        }
        startSliding(e) {
          var t, r, n;
          const i = this.isVertical ? e.y : e.x;
          this.setState({ m_bSliding: !0 }),
            this.updateValueForMousePosition(i, !0),
            this.setDragElapsedSecondsCSSProperty(0),
            h.W.Instance.suppressHapticsExcept(this, [
              u.en.Sliding,
              u.en.SlidingEdge,
              u.en.Snap,
            ]),
            (this.m_dragStartTime = new Date()),
            (this.m_nAnimationFrameCallback = window.requestAnimationFrame(
              this.onDragAnimationFrame,
            )),
            g.M.suppressScrolling(this.m_sScrollSuppressedIdentifier),
            d.u.Instance.playSound(
              null !== (t = this.props.interactionStartSoundEffect) &&
                void 0 !== t
                ? t
                : d.j.Grab,
            ),
            null === (n = (r = this.props).onInteractionStart) ||
              void 0 === n ||
              n.call(r);
        }
        stopSliding() {
          var e, t, r, n, i;
          this.state.m_bSliding &&
            (this.setState({ m_bSliding: !1 }),
            window.cancelAnimationFrame(this.m_nAnimationFrameCallback),
            this.setDragElapsedSecondsCSSProperty(0),
            this.m_setDetentsToIgnore.clear(),
            h.W.Instance.unsuppressHaptics(this),
            null === (t = (e = this.props).onInteractionEnd) ||
              void 0 === t ||
              t.call(e),
            null === (n = (r = this.props).onFinalChange) ||
              void 0 === n ||
              n.call(r, this.normalizedToExternal(this.normalizedValue)),
            m.W.temporarilySuppressSoundEffect(),
            d.u.Instance.playSound(
              null !== (i = this.props.interactionEndSoundEffect) &&
                void 0 !== i
                ? i
                : d.j.GrabRelease,
            ),
            g.M.unsuppressScrolling(this.m_sScrollSuppressedIdentifier));
        }
        getClosestSnappableDetent(e) {
          const t = this.normalizedDetents;
          t.sort((t, r) => (Math.abs(e - t) > Math.abs(e - r) ? 1 : -1));
          for (let r = 0; r < t.length; r++) {
            const i = t[r];
            if (Math.abs(e - i) < n.DETENT_SNAP_DISTANCE) return i;
          }
          return null;
        }
        get styleVariant() {
          return void 0 === this.props.styleVariant
            ? i.Value
            : this.props.styleVariant;
        }
        get valueStyleVariant() {
          return void 0 === this.props.valueStyleVariant
            ? a.Below
            : this.props.valueStyleVariant;
        }
        get externalRangeMin() {
          return void 0 === this.props.min ? 0 : this.props.min;
        }
        get externalRangeMax() {
          return void 0 === this.props.max ? 1 : this.props.max;
        }
        get normalizedStep() {
          if (void 0 !== this.props.step)
            return (
              this.props.step / (this.externalRangeMax - this.externalRangeMin)
            );
        }
        get exponent() {
          return void 0 === this.props.exponent ? 1 : this.props.exponent;
        }
        get normalizedDetents() {
          let e = this.props.detents || [];
          if (this.props.showDetentsForSnaps && this.props.step)
            for (
              let t = this.externalRangeMin;
              t <= this.externalRangeMax;
              t += this.props.step
            )
              e.push(t);
          return e.map(this.externalToNormalized);
        }
        externalToNormalized(e) {
          return e === this.props.specialMaxValue
            ? 1
            : e === this.props.specialMinValue
              ? 0
              : Math.pow(
                  (e - this.externalRangeMin) /
                    (this.externalRangeMax - this.externalRangeMin),
                  1 / this.exponent,
                );
        }
        normalizedToExternal(e) {
          return 0 == e && void 0 !== this.props.specialMinValue
            ? this.props.specialMinValue
            : 1 == e && void 0 !== this.props.specialMaxValue
              ? this.props.specialMaxValue
              : this.externalRangeMin +
                Math.pow(e, this.exponent) *
                  (this.externalRangeMax - this.externalRangeMin);
        }
        get normalizedValue() {
          return this.externalToNormalized(this.externalValue);
        }
        get externalValue() {
          return this.props.value;
        }
        get shouldTriggerHapticOnSnap() {
          const e = this.normalizedStep;
          return e > 0 && e >= 1 / 40;
        }
        setNormalizedValue(e) {
          e < 0 && (e = 0), e > 1 && (e = 1);
          let t = !1;
          const r = this.normalizedStep,
            n = this.normalizedValue;
          if (r && ((e = Math.round(e / r) * r), Math.abs(e - n) > 1e-4)) {
            const n = 1 % r,
              i = Math.abs(n - r) < 1e-5 ? 1 : 1 - (1 % r);
            (0 == e || Math.abs(e - i) < 0.001) &&
              !t &&
              (h.W.Instance.triggerHaptic(u.en.SlidingEdge), (t = !0)),
              !this.shouldTriggerHapticOnSnap ||
                this.isSnappedToDetent ||
                (0, u.R$)() != u.OH.Overlay ||
                t ||
                (h.W.Instance.triggerHaptic(u.en.Snap), (t = !0));
          }
          if (
            !this.shouldTriggerHapticOnSnap &&
            n >= 0 &&
            n <= 1 &&
            !this.isSnappedToDetent
          ) {
            (0 == e || 1 == e) &&
              n > 0 &&
              n < 1 &&
              !t &&
              (h.W.Instance.triggerHaptic(u.en.SlidingEdge), (t = !0));
            const r = 40;
            Math.floor(n * r) == Math.floor(e * r) ||
              t ||
              (h.W.Instance.triggerHaptic(u.en.Sliding), (t = !0));
          }
          const i = this.normalizedToExternal(e);
          this.props.onChange && this.props.onChange(i);
        }
        setDragElapsedSecondsCSSProperty(e) {
          this.m_refSlider.current &&
            this.m_refSlider.current.style.setProperty(
              "--drag-elapsed-seconds",
              e.toString(),
            );
        }
        onDragAnimationFrame() {
          let e = (new Date().getTime() - this.m_dragStartTime.getTime()) / 1e3;
          this.normalizedStep > 0.1 && (e = 0),
            this.setDragElapsedSecondsCSSProperty(e),
            (this.m_nAnimationFrameCallback = window.requestAnimationFrame(
              this.onDragAnimationFrame,
            ));
        }
        render() {
          var e;
          const t =
              void 0 !== this.props.renderValue
                ? this.props.renderValue(this.externalValue)
                : null,
            r = this.styleVariant == i.Value && t,
            n = r && this.valueStyleVariant == a.OnHandle,
            s = r && this.valueStyleVariant == a.Below,
            l = this.styleVariant == i.Value && !n,
            c = this.normalizedValue,
            u = n && t.length >= 4,
            d =
              null !== (e = this.props.customHandleComponent) && void 0 !== e
                ? e
                : o.createElement(
                    "div",
                    { className: "HandleContainer" },
                    o.createElement(
                      "div",
                      {
                        className: (0, p.FH)("Handle", ["SmallerText", u]),
                        ref: this.m_refSliderDefaultHandle,
                        style: {
                          backgroundColor:
                            this.props.styleVariant == i.Color ? t : null,
                        },
                      },
                      l &&
                        o.createElement("div", { className: "HandleCircle" }),
                      n &&
                        o.createElement("div", { className: "RangeLabel" }, t),
                    ),
                  );
          return o.createElement(
            o.Fragment,
            null,
            this.state.m_bSliding &&
              o.createElement(v.j, { element: this.m_refSlider.current }),
            o.createElement(
              "div",
              {
                className: (0, p.FH)(
                  "SliderControl",
                  ["Vertical", this.isVertical],
                  ["Color", this.styleVariant == i.Color],
                  ["Sliding", this.state.m_bSliding],
                  ["Disabled", !1 === this.props.enabled],
                  ["ValueOnHandle", n],
                  this.props.additionalClassName,
                ),
                style: {
                  "--slider-value": c,
                  "--slider-color":
                    this.props.styleVariant == i.Color
                      ? this.props.sliderColor
                      : null,
                },
                ref: this.m_refSlider,
                onMouseDown: this.onSliderMouseDown,
                onMouseEnter: this.onSliderMouseEnter,
                onMouseLeave: this.onSliderMouseLeave,
              },
              o.createElement(
                "div",
                { className: "Track" },
                this.normalizedDetents.map((e) =>
                  o.createElement("div", {
                    key: "detent-" + e,
                    className: "Detent",
                    style: { "--detent-value": e.toString() },
                  }),
                ),
              ),
              d,
            ),
            s && o.createElement("div", { className: "RangeLabel" }, t),
          );
        }
      });
      (_.DETENT_SNAP_DISTANCE = 0.05),
        (_.DETENT_UNIGNORE_DISTANCE = 0.15),
        (0, s.Cg)([l.o], _.prototype, "onSliderMouseDown", null),
        (0, s.Cg)([l.o], _.prototype, "onWindowMouseMove", null),
        (0, s.Cg)([l.o], _.prototype, "onSliderMouseEnter", null),
        (0, s.Cg)([l.o], _.prototype, "onSliderMouseLeave", null),
        (0, s.Cg)([l.o], _.prototype, "onWindowMouseUp", null),
        (0, s.Cg)([l.o], _.prototype, "externalToNormalized", null),
        (0, s.Cg)([l.o], _.prototype, "normalizedToExternal", null),
        (0, s.Cg)([l.o], _.prototype, "onDragAnimationFrame", null),
        (_ = n = (0, s.Cg)([c.PA], _));
    },
    4963: (e, t, r) => {
      "use strict";
      r.d(t, { j: () => n, u: () => s });
      var n,
        i = r(1635),
        a = r(6090);
      !(function (e) {
        (e[(e.DashboardOpen = 0)] = "DashboardOpen"),
          (e[(e.DashboardClose = 1)] = "DashboardClose"),
          (e[(e.ControlBarButtonClick = 2)] = "ControlBarButtonClick"),
          (e[(e.ButtonClick = 3)] = "ButtonClick"),
          (e[(e.SurfaceClick = 4)] = "SurfaceClick"),
          (e[(e.VolumePreview = 5)] = "VolumePreview"),
          (e[(e.Grab = 6)] = "Grab"),
          (e[(e.GrabRelease = 7)] = "GrabRelease"),
          (e[(e.PagedSettingsNavigation = 8)] = "PagedSettingsNavigation");
      })(n || (n = {}));
      class s {
        constructor() {
          this.m_mapSoundElems = new Map();
        }
        static get Instance() {
          return s.s_Instance || (s.s_Instance = new s()), s.s_Instance;
        }
        preloadSounds() {
          if (!((0, a.R$)() != a.OH.Overlay || this.m_mapSoundElems.size > 0))
            for (let e in n) isNaN(Number(e)) || this.loadSounds(Number(e));
        }
        playSound(e) {
          return (0, i.sH)(this, void 0, void 0, function* () {
            if ((0, a.R$)() != a.OH.Overlay) return;
            if (null == e) return;
            const t = this.getAudioElems(e);
            if (!t || 0 == t.length) return;
            const r = t[Math.floor(Math.random() * t.length)];
            r.pause(), (r.currentTime = 0);
            try {
              yield r.play();
            } catch (t) {
              console.error(
                `Failed to play sound effect "${n[e]}" (${r.src}, networkState=${r.networkState}, readyState=${r.readyState})`,
              );
            }
          });
        }
        loadSounds(e) {
          const t = s.Sources[e],
            r = t.source;
          if (!r) return void this.m_mapSoundElems.set(e, []);
          const n = ("string" == typeof r ? [r] : r).map((e) => {
            var r, n;
            let i = document.createElement("audio");
            return (
              (i.src = `${e}?t=${(new Date()).getTime()}`),
              (i.preload = "auto"),
              (i.volume = null !== (r = t.volume) && void 0 !== r ? r : 1),
              (null === (n = t.bRespectsGlobalVolume) || void 0 === n || n) &&
                (i.volume *= 1),
              i
            );
          });
          this.m_mapSoundElems.set(e, n);
        }
        getAudioElems(e) {
          return (
            this.m_mapSoundElems.has(e) ||
              (console.warn(
                "Playing a sound which was not preloaded. Consider calling SoundEffects.Instance.preloadSounds().",
              ),
              this.loadSounds(e)),
            this.m_mapSoundElems.get(e)
          );
        }
      }
      (s.Sources = {
        [n.DashboardOpen]: { source: "" },
        [n.DashboardClose]: { source: "" },
        [n.ControlBarButtonClick]: {
          source: "/dashboard/sounds/deck_ui_misc_10.wav",
        },
        [n.ButtonClick]: { source: "/dashboard/sounds/deck_ui_misc_10.wav" },
        [n.SurfaceClick]: { source: "" },
        [n.VolumePreview]: {
          source: "/dashboard/sounds/volume_change.wav",
          bRespectsGlobalVolume: !1,
        },
        [n.Grab]: { source: "" },
        [n.GrabRelease]: { source: "/dashboard/sounds/deck_ui_misc_10.wav" },
        [n.PagedSettingsNavigation]: {
          source: "/dashboard/sounds/deck_ui_navigation.wav",
        },
      }),
        (s.s_Instance = null);
    },
    1532: (e, t, r) => {
      "use strict";
      r.d(t, { s: () => c });
      var n = r(1635),
        i = r(3236),
        a = r(2505),
        s = r.n(a),
        o = r(7813);
      class l {
        constructor() {
          (this.m_Applications = o.observable.map()),
            (this.m_sceneApplicationStateChangedEventHandle = null),
            (0, o.makeObservable)(this);
        }
        Init() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            (this.m_sceneApplicationStateChangedEventHandle =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.RegisterForSceneApplicationStateChangedEvents(
                    this.onSceneApplicationStateChanged,
                  )),
              yield this.UpdateApplications();
          });
        }
        onSceneApplicationStateChanged() {
          this.UpdateApplications();
        }
        SetApplicationMap(e) {
          this.m_Applications.clear(),
            e.apps.forEach((e) => {
              this.m_Applications.set(e.key, e);
            });
        }
        UpdateApplications() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            yield this.QueryApplications().then((e) => {
              this.SetApplicationMap(e);
            });
          });
        }
        QueryApplications() {
          return new Promise(function (e, t) {
            s()
              .get("/app/list.json")
              .then((t) => {
                e(t.data);
              })
              .catch((e) => {
                t(e);
              });
          });
        }
        GetAppImageURL(e) {
          var t;
          return (
            "/app/image?app_key=" +
            e +
            "&version=" +
            (null !==
              (t =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.SteamVRVersion()) && void 0 !== t
              ? t
              : "0")
          );
        }
        GetApp(e) {
          return this.m_Applications.has(e)
            ? this.m_Applications.get(e)
            : void 0;
        }
        GetRecentApps() {
          let e = [];
          return (
            this.m_Applications.forEach((t) => {
              t.is_internal || e.push(t);
            }),
            e.sort((e, t) =>
              e.last_launch < t.last_launch
                ? 1
                : e.last_launch > t.last_launch
                  ? -1
                  : e.name < t.name
                    ? 1
                    : e.name > t.name
                      ? -1
                      : 0,
            ),
            e
          );
        }
        GetCurrentSceneProcess() {
          let e;
          return (
            this.m_Applications.forEach((t) => {
              t.current_scene_process && !t.is_internal && (e = t);
            }),
            e
          );
        }
        GetRunningApps() {
          let e = [];
          for (let t of this.m_Applications.values()) t.pid && e.push(t);
          return e;
        }
        FindAppByPid(e) {
          for (let t of this.m_Applications.values()) if (t.pid == e) return t;
        }
        IsAppAllowedPrivateInputs(e) {
          return "openvr.component.vrcompositor" == e;
        }
        ShouldShowBindingFailureForApp(e) {
          if (null == e || "" == e) return !1;
          if ("openvr.component.vrcompositor" == e) return !0;
          if (null == this.GetApp(e)) return !1;
          let t = this.GetCurrentSceneProcess();
          return null != t && t.key == e;
        }
      }
      (0, n.Cg)([o.observable], l.prototype, "m_Applications", void 0),
        (0, n.Cg)([i.o], l.prototype, "onSceneApplicationStateChanged", null),
        (0, n.Cg)([o.action], l.prototype, "SetApplicationMap", null),
        (0, n.Cg)([i.o], l.prototype, "QueryApplications", null),
        (0, n.Cg)([i.o], l.prototype, "GetAppImageURL", null),
        (0, n.Cg)([i.o], l.prototype, "GetApp", null),
        (0, n.Cg)([i.o], l.prototype, "GetRecentApps", null),
        (0, n.Cg)([i.o], l.prototype, "GetCurrentSceneProcess", null),
        (0, n.Cg)([i.o], l.prototype, "IsAppAllowedPrivateInputs", null),
        (0, n.Cg)([i.o], l.prototype, "ShouldShowBindingFailureForApp", null);
      const c = new l();
      window.applications = c;
    },
    3236: (e, t, r) => {
      "use strict";
      function n(e, t, r) {
        return {
          get() {
            let e = r.value.bind(this);
            return (
              Object.prototype.hasOwnProperty.call(this, t) ||
                Object.defineProperty(this, t, { value: e }),
              e
            );
          },
        };
      }
      r.d(t, { o: () => n });
    },
    1651: (e, t, r) => {
      "use strict";
      r.d(t, { h: () => o, l: () => s });
      var n = r(1635),
        i = r(6540),
        a = r(3236);
      class s {
        constructor() {
          this.m_vecCallbacks = [];
        }
        Register(e) {
          this.m_vecCallbacks.push(e);
          return {
            Unregister: () => {
              const t = this.m_vecCallbacks.indexOf(e);
              t >= 0 && this.m_vecCallbacks.splice(t, 1);
            },
          };
        }
        Dispatch(...e) {
          for (const t of Array.from(this.m_vecCallbacks)) t(...e);
        }
        ClearAllCallbacks() {
          this.m_vecCallbacks = [];
        }
        CountRegistered() {
          return this.m_vecCallbacks.length;
        }
      }
      function o(e, t) {
        i.useLayoutEffect(() => {
          if (!t || !e) return;
          const r = e.Register(t);
          return () => r.Unregister();
        }, [e, t]);
      }
      (0, n.Cg)([a.o], s.prototype, "Dispatch", null);
    },
    9283: (e, t, r) => {
      "use strict";
      function n(...e) {
        return e.reduce(
          (e, t) =>
            t
              ? "string" == typeof t
                ? e
                  ? `${e} ${t}`
                  : t
                : "object" == typeof t
                  ? e
                    ? `${e} ${i(t)}`
                    : i(t)
                  : e
              : e,
          "",
        );
      }
      function i(e) {
        return Object.keys(e).reduce(
          (t, r) => (e[r] ? (t ? `${t} ${r}` : r) : t),
          "",
        );
      }
      r.d(t, { A: () => n });
    },
    3606: (e, t, r) => {
      "use strict";
      r.d(t, {
        $Z: () => ge,
        Bf: () => K,
        Bn: () => B,
        Bz: () => v,
        C6: () => y,
        D1: () => ee,
        E2: () => ye,
        Ec: () => ve,
        El: () => he,
        Eo: () => i,
        F2: () => q,
        GM: () => U,
        GO: () => _,
        GW: () => k,
        Hh: () => re,
        Ju: () => Z,
        KP: () => ue,
        Kh: () => c,
        MM: () => o,
        NX: () => O,
        Ni: () => x,
        P: () => V,
        Pi: () => _e,
        Qv: () => C,
        R_: () => pe,
        So: () => M,
        Sx: () => u,
        Ul: () => p,
        Uv: () => b,
        Vv: () => Y,
        WS: () => z,
        Wm: () => w,
        Wt: () => f,
        XO: () => j,
        Y: () => G,
        Y8: () => fe,
        Zw: () => R,
        aD: () => W,
        au: () => le,
        bl: () => E,
        cb: () => S,
        dU: () => m,
        dw: () => d,
        gS: () => g,
        i8: () => de,
        iZ: () => A,
        j5: () => N,
        kk: () => s,
        kx: () => L,
        l3: () => a,
        lP: () => ie,
        mB: () => h,
        md: () => $,
        nJ: () => Q,
        nY: () => D,
        np: () => n,
        qf: () => H,
        qt: () => ce,
        r4: () => Se,
        rG: () => ae,
        tZ: () => be,
        ui: () => oe,
        uv: () => I,
        v0: () => l,
        vo: () => J,
        w5: () => F,
        wi: () => T,
        wt: () => P,
        xP: () => se,
        xY: () => X,
        x_: () => me,
        xz: () => te,
        yl: () => ne,
      });
      const n = "openvr.tool.steamvr_environments",
        i = "system.generated.steam.exe",
        a = "vrlink.client",
        s = "steam.app.",
        o = s + "250820",
        l = s + "330050",
        c = "system.dashboard.",
        u = "system.dashboard.quicklaunch",
        d = "system.dashboard.nowplaying",
        m = "XRServiceDashboard",
        p = 0.25,
        h = 2,
        g = 0.03,
        v = "current.scene.app.binding.list",
        _ = "system.desktop",
        b = "system.window",
        S = "system.standalone",
        y = "system.systemui",
        f = "system.settings",
        R = "system.keyboard",
        w = "system.vrwebhelper.controllerbinding",
        C = "system.messageoverlay",
        M = "valve.steam",
        E = "valve.steam.desktopgame",
        T = "valve.steam.gamepadui.main",
        D = "valve.steam.gamepadui.keyboard",
        B = "valve.steam.desktop",
        V = "steamlink_openvr-overlay",
        I = "DashboardCurvatureOrigin",
        A = 2.667 / 1694,
        O = "DashboardGrabHandleTransform",
        k = "DashboardOverlayDashboardBarOrigin",
        L = "DashboardGrabHandleTransform_Legacy",
        H = "/settings/steamvr/enableHomeApp",
        P = "/settings/steamvr/supersampleManualOverride",
        F = "/settings/steamvr/supersampleScale",
        N = "/settings/GpuSpeed/gpuSpeedRenderTargetScale",
        x = "/settings/camera/roomViewStyle",
        W = "/settings/steamvr/backgroundCameraHeight",
        z = "/settings/steamvr/backgroundDomeRadius",
        G = "/settings/steamvr/analogGain",
        U = "/settings/driver_lighthouse/indexHmdColumnCorrection",
        q = "/settings/steamvr/showAdvancedSettings",
        j = "/settings/dashboard/lastAccessedExternalOverlayKey",
        K = "/settings/internal/dashboardInitialOverlay",
        $ = "/settings/dashboard/position_2",
        Z = "/settings/dashboard/theaterCurvature",
        J = "/settings/dashboard/theaterScreenSize",
        Q = "/settings/dashboard/unifiedDashboard",
        X = "/settings/dashboard/theaterScreenAlignment",
        Y = "/settings/collisionBounds/CollisionBoundsFadeDistance",
        ee = "/settings/camera/roomView",
        te = "/settings/camera/enableCamera",
        re = "/settings/camera/enableConstructRoomView",
        ne = "/settings/dashboard/enableWindowView",
        ie = "/settings/dashboard/maxInlineTabs",
        ae = "/settings/steamvr/maxRecommendedResolution",
        se = "/settings/steamvr/disableKeyboardPrivacy",
        oe = "/settings/camera/lightSourceFrequency",
        le = "/settings/steamvr/ipdHUD",
        ce = "/settings/dashboard/expectSteam",
        ue = "/settings/dashboard/allowLegacyControlBar",
        de = "/settings/openxr/metaUnityPluginCompatibility",
        me = "/settings/input/overlayFilteringEnabled",
        pe = "/settings/input/overlayFilteringMinCutoff",
        he = "/settings/input/overlayFilteringBeta",
        ge = "/settings/input/overlayFilteringDerivCutoff",
        ve = "/settings/input/overlayMagnetismEnabled",
        _e = "/settings/input/overlayMagnetismLockDistance",
        be = "/settings/input/overlayMagnetismDeadZone",
        Se = "/steam/websocketconnected",
        ye = "/steam/oobe",
        fe = "/steamvr/fakeoobe";
    },
    2929: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      const n = (function () {
        let e = Math.floor(16384 * Math.random());
        return (e *= 1e5), console.log("Global ID Offset:", e), e;
      })();
    },
    9118: (e, t, r) => {
      "use strict";
      r.d(t, { W: () => d });
      var n = r(1635),
        i = r(7813),
        a = r(2505),
        s = r.n(a),
        o = r(3236),
        l = r(3714),
        c = r(6090);
      class u {
        constructor() {
          (this.m_InputState = void 0),
            (this.m_KnownControllerTypes = i.observable.map()),
            (this.m_mailbox = new c._n()),
            (this.m_bUpdateInputStateOnControllerTypChange = !1),
            (0, i.makeObservable)(this);
        }
        Init(e) {
          return (
            this.m_mailbox.Init("input_state"),
            this.m_mailbox.RegisterHandler(
              "controller_type_changed",
              this.OnControllerTypeChanged,
            ),
            this.m_mailbox.RegisterHandler(
              "action_bindings_reloaded",
              this.OnActionBindingsReloaded,
            ),
            null != e && (this.m_bUpdateInputStateOnControllerTypChange = e),
            this.GetInputState()
          );
        }
        OnActionBindingsReloaded() {
          this.GetInputState();
        }
        OnControllerTypeChanged(e) {
          this.UpdateControllerTypes(e.controller_types),
            this.m_InputState &&
              (this.m_InputState.controller_types = e.controller_types),
            this.m_bUpdateInputStateOnControllerTypChange &&
              this.GetInputState();
        }
        get ConnectedDevices() {
          return null == this.m_InputState
            ? []
            : this.m_InputState.devices.filter(
                (e) =>
                  "TrackedDeviceClass_Controller" == e.class ||
                  "TrackedDeviceClass_HMD" == e.class ||
                  "TrackedDeviceClass_GenericTracker" == e.class,
              );
        }
        get ControllerTypes() {
          return this.m_InputState.controller_types;
        }
        get ShouldSendSystemButtonToAllApps() {
          return this.m_InputState.send_system_button_to_all_apps;
        }
        get ShowHiddenInputs() {
          return this.m_InputState.show_hidden_inputs;
        }
        get IsSteamAvailable() {
          return !this.m_InputState || this.m_InputState.is_steam_available;
        }
        get BDevMode() {
          return this.m_InputState.dev_mode;
        }
        get IsValid() {
          return null != this.m_InputState;
        }
        get CurrentUserPersonaName() {
          return this.m_InputState.current_user_persona_name
            ? this.m_InputState.current_user_persona_name
            : null;
        }
        GetControllerTypeInfo(e) {
          return this.m_InputState.controller_types.find(
            (t) => t.controller_type == e,
          );
        }
        GetDeviceInfo(e) {
          for (let t of this.m_InputState.devices)
            if (t.root_path == e || t.device_path == e) return t;
          return null;
        }
        LocalizeControllerString(e, t) {
          let r = (0, l.we)("#" + t);
          return r != "#" + t
            ? r
            : e &&
                this.m_InputState &&
                this.m_InputState.localization.hasOwnProperty(
                  e.resource_root,
                ) &&
                this.m_InputState.localization[e.resource_root].hasOwnProperty(
                  t.toLowerCase(),
                )
              ? this.m_InputState.localization[e.resource_root][t.toLowerCase()]
              : t;
        }
        LocalizeDriverString(e, t) {
          if (
            this.m_InputState &&
            this.m_InputState.localization.hasOwnProperty(e) &&
            this.m_InputState.localization[e].hasOwnProperty(t.toLowerCase())
          )
            return this.m_InputState.localization[e][t.toLowerCase()];
          let r = (0, l.we)("#" + t);
          return r != "#" + t ? r : t;
        }
        UpdateControllerTypes(e) {
          this.m_KnownControllerTypes.clear();
          for (let t of e)
            this.m_KnownControllerTypes.set(t.controller_type, t);
        }
        GetInputState() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            yield new Promise(function (e, t) {
              s()
                .get("/input/getstate.json")
                .then((t) => {
                  e(t.data);
                })
                .catch((e) => {
                  t(e);
                });
            }).then((e) => {
              (0, i.runInAction)(() => {
                for (let t of e.controller_types)
                  t.controller_type = t.controller_type.toLowerCase();
                for (let t of e.devices)
                  t.controller_type = t.controller_type.toLowerCase();
                this.UpdateControllerTypes(e.controller_types),
                  (this.m_InputState = e);
              });
            });
          });
        }
        get KnownControllerTypes() {
          return this.m_KnownControllerTypes;
        }
        FindDeviceClassForControllerType(e) {
          let t = this.GetControllerTypeInfo(e);
          return null == t ? void 0 : t.device_class;
        }
        FindRootPathForControllerType(e) {
          for (let t of this.m_InputState.devices)
            if (t.controller_type == e) return t.root_path;
          return null;
        }
      }
      (0, n.Cg)([i.observable], u.prototype, "m_InputState", void 0),
        (0, n.Cg)(
          [i.observable],
          u.prototype,
          "m_KnownControllerTypes",
          void 0,
        ),
        (0, n.Cg)([o.o], u.prototype, "OnActionBindingsReloaded", null),
        (0, n.Cg)([o.o], u.prototype, "OnControllerTypeChanged", null),
        (0, n.Cg)([i.computed], u.prototype, "ConnectedDevices", null),
        (0, n.Cg)([i.computed], u.prototype, "ControllerTypes", null),
        (0, n.Cg)(
          [i.computed],
          u.prototype,
          "ShouldSendSystemButtonToAllApps",
          null,
        ),
        (0, n.Cg)([i.computed], u.prototype, "ShowHiddenInputs", null),
        (0, n.Cg)([i.computed], u.prototype, "IsSteamAvailable", null),
        (0, n.Cg)([i.computed], u.prototype, "BDevMode", null),
        (0, n.Cg)([i.computed], u.prototype, "IsValid", null),
        (0, n.Cg)([i.computed], u.prototype, "CurrentUserPersonaName", null),
        (0, n.Cg)([o.o], u.prototype, "GetControllerTypeInfo", null),
        (0, n.Cg)([o.o], u.prototype, "LocalizeControllerString", null),
        (0, n.Cg)([o.o], u.prototype, "LocalizeDriverString", null),
        (0, n.Cg)([i.action], u.prototype, "UpdateControllerTypes", null),
        (0, n.Cg)([i.action], u.prototype, "GetInputState", null),
        (0, n.Cg)([i.computed], u.prototype, "KnownControllerTypes", null),
        (0, n.Cg)([o.o], u.prototype, "FindDeviceClassForControllerType", null);
      const d = new u();
      window.inputState = d;
    },
    776: (e, t, r) => {
      "use strict";
      r.d(t, { wd: () => c });
      var n = r(1635),
        i = r(3236);
      class a {
        GetObject(e, t) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            try {
              const r = yield this.GetString(e);
              return r ? JSON.parse(r, t) : null;
            } catch (e) {
              return null;
            }
          });
        }
        StoreObject(e, t) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            return this.StoreString(e, JSON.stringify(t));
          });
        }
      }
      class s extends a {
        GetString(e) {
          return Promise.resolve(localStorage.getItem(e));
        }
        StoreString(e, t) {
          return localStorage.setItem(e, t), Promise.resolve();
        }
        RemoveObject(e) {
          return localStorage.removeItem(e), Promise.resolve();
        }
      }
      var o,
        l = r(1651);
      !(function (e) {
        (e[(e.Debug = 0)] = "Debug"),
          (e[(e.Info = 1)] = "Info"),
          (e[(e.Warning = 2)] = "Warning"),
          (e[(e.Error = 3)] = "Error");
      })(o || (o = {}));
      class c {
        constructor(e, t) {
          (this.m_fnIdGenerator = void 0),
            (this.m_sName = e),
            (this.m_fnIdGenerator = t),
            u.Get().RegisterLogName(e);
        }
        Debug(...e) {
          this.Log(o.Debug, ...e);
        }
        Info(...e) {
          this.Log(o.Info, ...e);
        }
        Warning(...e) {
          this.Log(o.Warning, ...e);
        }
        Error(...e) {
          this.Log(o.Error, ...e);
        }
        Assert(e, ...t) {
          e || this.Log(o.Error, "Assertion failed:", ...t);
        }
        IsDebugEnabled() {
          return u.Get().IsDebugLogEnabled(this.m_sName);
        }
        Log(e, ...t) {
          var r, n;
          const i = u.Get().IsDebugLogEnabled(this.m_sName);
          if (e == o.Debug && !i) return;
          let a = this.m_sName;
          const s =
            null !==
              (n =
                null === (r = this.m_fnIdGenerator) || void 0 === r
                  ? void 0
                  : r.call(this)) && void 0 !== n
              ? n
              : null;
          null != s && (a += " (" + s + ")");
          d(e, i, u.Get().IncludeBacktraceInLog, a, this.m_sName, ...t);
        }
      }
      (0, n.Cg)([i.o], c.prototype, "Debug", null),
        (0, n.Cg)([i.o], c.prototype, "Info", null),
        (0, n.Cg)([i.o], c.prototype, "Warning", null),
        (0, n.Cg)([i.o], c.prototype, "Error", null),
        (0, n.Cg)([i.o], c.prototype, "Assert", null);
      class u {
        constructor() {
          (this.m_Storage = null),
            (this.m_setKnownDebugLogs = new Set()),
            (this.m_setEnabledDebugLogs = new Set()),
            (this.m_bIncludeBacktraceInLog = !1),
            (this.m_SettingsChangedCallback = new l.l()),
            (this.m_bLoading = !1),
            (this.m_Storage = new s()),
            this.LoadSettings();
        }
        LogAsLogManager(...e) {
          d(
            o.Info,
            !0,
            this.IncludeBacktraceInLog,
            "LogManager",
            "LogManager",
            ...e,
          );
        }
        LoadSettings() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            var e, t;
            (this.m_bLoading = !0),
              (this.m_bIncludeBacktraceInLog = !!(yield null ===
                (e = this.m_Storage) || void 0 === e
                ? void 0
                : e.GetObject(u.k_IncludeBacktraceInLog_StorageKey)));
            const r = yield null === (t = this.m_Storage) || void 0 === t
              ? void 0
              : t.GetObject(u.k_EnabledLogNames_StorageKey);
            if (Array.isArray(r)) {
              this.m_setEnabledDebugLogs = new Set(r);
              for (const e of r) this.m_setKnownDebugLogs.add(e);
              this.LogAsLogManager(
                "Loaded debug enabled log names. Will print log messages for:",
                Array.from(this.m_setEnabledDebugLogs),
              );
            } else 0;
            (this.m_bLoading = !1), this.m_SettingsChangedCallback.Dispatch();
          });
        }
        SaveSettings() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            var e, t;
            yield null === (e = this.m_Storage) || void 0 === e
              ? void 0
              : e.StoreObject(
                  u.k_EnabledLogNames_StorageKey,
                  Array.from(this.m_setEnabledDebugLogs),
                ),
              yield null === (t = this.m_Storage) || void 0 === t
                ? void 0
                : t.StoreObject(
                    u.k_IncludeBacktraceInLog_StorageKey,
                    this.m_bIncludeBacktraceInLog,
                  ),
              this.LogAsLogManager(
                "Saved enabled debug log names. Will print log messages for:",
                Array.from(this.m_setEnabledDebugLogs),
              );
          });
        }
        PrintEnabledLogs() {
          this.LogAsLogManager(
            "Will print log messages for:",
            Array.from(this.m_setEnabledDebugLogs),
          );
        }
        static Get() {
          return (
            null == u.s_Singleton && (u.s_Singleton = new u()), u.s_Singleton
          );
        }
        get Loading() {
          return this.m_bLoading;
        }
        get LogNames() {
          return this.m_setKnownDebugLogs.values();
        }
        RegisterLogName(e) {
          this.m_setKnownDebugLogs.add(e);
        }
        IsLogName(e) {
          return this.m_setKnownDebugLogs.has(e);
        }
        IsDebugLogEnabled(e) {
          return this.m_setEnabledDebugLogs.has(e);
        }
        ToggleDebugLogEnabled(e) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            this.SetDebugLogEnabled(e, !this.IsDebugLogEnabled(e));
          });
        }
        SetDebugLogEnabled(e, t) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            t
              ? this.m_setEnabledDebugLogs.add(e)
              : this.m_setEnabledDebugLogs.delete(e),
              this.m_SettingsChangedCallback.Dispatch(),
              yield this.SaveSettings();
          });
        }
        SetAllDebugLogsEnabled(e) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            (this.m_setEnabledDebugLogs = e
              ? new Set(this.m_setKnownDebugLogs)
              : new Set()),
              this.m_SettingsChangedCallback.Dispatch(),
              yield this.SaveSettings();
          });
        }
        RegisterForSettingsChanges(e) {
          return this.m_SettingsChangedCallback.Register(e);
        }
        get IncludeBacktraceInLog() {
          return this.m_bIncludeBacktraceInLog;
        }
        SetIncludeBacktraceInLog(e) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            (this.m_bIncludeBacktraceInLog = e),
              this.m_SettingsChangedCallback.Dispatch(),
              yield this.SaveSettings();
          });
        }
      }
      function d(e, t, r, n, i, ...a) {
        const s = (function (e) {
            let t = 0;
            for (let r = 0; r < e.length; r++)
              t = e.charCodeAt(r) + ((t << 5) - t);
            return [255 & t, (t >> 8) & 255, (t >> 16) & 255];
          })(i).map((e, t) =>
            Math.round(
              Math.max(0, Math.min(255, 255 * (0.8 * (e / 255 - 0.5) + 0.15))),
            ),
          ),
          l = (299 * (c = s)[0] + 587 * c[1] + 114 * c[2]) / 1e3 >= 128;
        var c;
        let u = n;
        r &&
          (u =
            (function (e) {
              switch (e) {
                case o.Debug:
                  return String.fromCodePoint(128027);
                case o.Info:
                  return String.fromCodePoint(8505);
                case o.Warning:
                  return String.fromCodePoint(9888);
                case o.Error:
                  return String.fromCodePoint(128165);
              }
            })(e) +
            " " +
            u);
        const d =
            a.length >= 1 && "string" == typeof a[0] && a[0].includes("%c"),
          m = d && a.shift();
        let p;
        if (
          ((p = t
            ? [
                `%c${u}%c:${d ? " %c" + m : ""}`,
                `color: ${l ? "black" : "white"}; background: rgb(${s.join(",")}); padding: 0 1ch; border-radius: 3px;`,
                "color: transparent; margin-right: -1ch",
                ...(d ? [""] : []),
                ...a,
              ]
            : [`[${u}]`, ...a]),
          r)
        )
          console.groupCollapsed(...p),
            console.trace("Callstack"),
            console.groupEnd();
        else
          switch (e) {
            case o.Debug:
            case o.Info:
              console.log(...p);
              break;
            case o.Warning:
              console.warn(...p);
              break;
            case o.Error:
              console.clogerror
                ? console.clogerror(3, ...p)
                : console.error(...p);
          }
      }
      (u.k_EnabledLogNames_StorageKey = "EnabledWebLogs"),
        (u.k_IncludeBacktraceInLog_StorageKey = "IncludeBacktraceInLog"),
        (u.s_Singleton = null);
      const m = () => [...u.Get().LogNames].sort(),
        p = (e, t) => {
          u.Get().IsLogName(e)
            ? u.Get().SetDebugLogEnabled(e, t)
            : console.warn(`No log named "${e}", available logs:`, m());
        };
      (window.DebugLogEnable = (...e) => e.forEach((e) => p(e, !0))),
        (window.DebugLogDisable = (...e) => e.forEach((e) => p(e, !1))),
        (window.DebugLogEnableAll = () => u.Get().SetAllDebugLogsEnabled(!0)),
        (window.DebugLogDisableAll = () => u.Get().SetAllDebugLogsEnabled(!1)),
        (window.DebugLogEnableBacktrace = () =>
          u.Get().SetIncludeBacktraceInLog(!0)),
        (window.DebugLogDisableBacktrace = () =>
          u.Get().SetIncludeBacktraceInLog(!1)),
        (window.DebugLogNames = m),
        (window.DebugLogEnabled = (...e) => {
          e.length > 0 &&
            console.warn(
              `Use DebugLogEnable( '${e.join("', '")}' ) to enable a log. This function tells you what's enabled.`,
            ),
            u.Get().PrintEnabledLogs();
        });
    },
    3804: (e, t, r) => {
      "use strict";
      r.d(t, { E: () => a });
      var n = r(7813);
      function i(e) {
        if (
          ((0, n.isObservable)(e) && (e = (0, n.toJS)(e)),
          null === e || null == e)
        )
          return e;
        if (Array.isArray(e)) return e.map(i);
        if (e instanceof Map) {
          const t = {};
          for (const r of e.keys()) t[r] = i(e.get(r));
          return t;
        }
        if ("object" == typeof e) {
          const t = {};
          for (const r of Object.keys(e)) t[r] = i(e[r]);
          return t;
        }
        return e;
      }
      function a(...e) {
        const [t, ...r] = e;
        return JSON.stringify(i(t), ...r);
      }
    },
    2932: (e, t, r) => {
      "use strict";
      r.d(t, { v: () => c });
      var n = r(1635),
        i = r(6090),
        a = r(3236),
        s = r(3606),
        o = r(2702),
        l = r(1835);
      class c {
        constructor() {
          var e;
          (this.m_mailbox = new i._n()),
            (this.m_dashboardSession = null),
            (this.m_dashboardEndTimer = void 0),
            (this.m_dashboardSessionCount = 0),
            (this.m_lastDashboardSessionId = 0),
            this.m_mailbox.Init(
              "ogs_client/" +
                (null !==
                  (e =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VROverlay.ThisOverlayKey()) && void 0 !== e
                  ? e
                  : "unknown"),
            ),
            this.m_mailbox.RegisterHandler(
              "set_dashboard_session_id",
              this.onSetDashboardSessionId,
            );
        }
        static get instance() {
          return u || (u = new c()), u;
        }
        onSetDashboardSessionId(e) {
          (null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.VROverlay.ThisOverlayKey()) != s.C6 &&
            (this.m_lastDashboardSessionId = e.id);
        }
        AddRow(e, t) {
          if ("object" != typeof t)
            throw new Error(
              "COGS.AddRow requires an object for its fields argument",
            );
          let r = { type: "add_ogs_row", table: e, fields: t };
          this.m_mailbox.SendMessage("ogs", r);
        }
        GetSource() {
          switch (
            null === VRHTML || void 0 === VRHTML ? void 0 : VRHTML.Environment()
          ) {
            case i.OH.Desktop:
              return "desktop";
            case i.OH.Overlay:
              return VRHTML.VROverlay.ThisOverlayKey();
            default:
              return "unknown";
          }
        }
        RecordUIEvent(e, t, r) {
          this.AddRow("SteamVRUIEvent", {
            Source: this.GetSource(),
            DashboardSessionId: this.m_lastDashboardSessionId,
            EventNameID: e,
            Cause: t,
            Param: r,
          });
        }
        StartDashboardSession(e) {
          this.m_dashboardSession && this.CommitDashboardSession();
          const t = l.SW.currentDashboardPosition;
          (this.m_lastDashboardSessionId = ++this.m_dashboardSessionCount),
            (this.m_dashboardSession = {
              dashboardSessionId: this.m_lastDashboardSessionId,
              sReason: e,
              appAtStart:
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRApplications.GetSceneApplicationKey(),
              position: null != t ? o.eo[t] : void 0,
            }),
            (this.m_dashboardStartTime = new Date().getTime()),
            this.BroadcastDashboardSessionId();
        }
        EndDashboardSession(e) {
          this.m_dashboardSession
            ? this.m_dashboardEndTimer
              ? console.log("Somebody called EndDashboardSession twice")
              : (this.RecordDashboardSessionDuration(),
                (this.m_dashboardSession.dismissedBy = e),
                (this.m_dashboardEndTimer = window.setTimeout(() => {
                  this.CommitDashboardSession();
                }, 5e3)))
            : console.log(
                "Somebody called EndDashboardSession when one wasn't running",
              );
        }
        RecordDashboardSessionDuration() {
          this.m_dashboardSession.duration ||
            (this.m_dashboardSession.duration = Math.round(
              (new Date().getTime() - this.m_dashboardStartTime) / 1e3,
            ));
        }
        CommitDashboardSession() {
          this.m_dashboardEndTimer &&
            (window.clearTimeout(this.m_dashboardEndTimer),
            (this.m_dashboardEndTimer = null)),
            (this.m_dashboardSession.appAtEnd =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRApplications.GetSceneApplicationKey()),
            this.AddRow("SteamVRDashboardSession", this.m_dashboardSession),
            (this.m_dashboardSession = null),
            (this.m_dashboardStartTime = null),
            (this.m_lastDashboardSessionId = 0);
        }
        BroadcastDashboardSessionId() {
          let e = {
            type: "set_dashboard_session_id",
            id: this.m_dashboardSession
              ? this.m_dashboardSession.dashboardSessionId
              : 0,
          };
          this.m_mailbox.SendMessage("ogs_client", e);
        }
      }
      (0, n.Cg)([a.o], c.prototype, "onSetDashboardSessionId", null);
      let u = null;
    },
    6575: (e, t, r) => {
      "use strict";
      r.d(t, { b: () => o, l: () => l });
      var n = r(6540),
        i = r(961),
        a = r(1139),
        s = r(6090);
      class o extends n.Component {
        constructor(e) {
          super(e),
            (this.m_elemPortalContainer = null),
            (this.m_elemPortal = null),
            (this.m_refAnchor = n.createRef()),
            (this.state = { bInDOM: !1 }),
            (this.m_elemPortal = document.createElement("div")),
            this.m_elemPortal.classList.add(o.ELEM_CLASS);
        }
        get anchorElement() {
          return this.m_refAnchor.current;
        }
        get portalContainer() {
          var e;
          return this.m_refAnchor.current
            ? (null === this.m_elemPortalContainer &&
                (this.m_elemPortalContainer = (0, a.jE)(
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
      o.ELEM_CLASS = "v-parent-portal";
      class l extends n.Component {
        constructor(e) {
          var t;
          super(e),
            (this.m_refPanelAnchor = n.createRef()),
            (this.m_sPanelAnchorID =
              null !== (t = e.panelAnchorID) && void 0 !== t
                ? t
                : Math.random().toString().substring(2));
        }
        get panelAnchor() {
          return this.m_refPanelAnchor.current;
        }
        render() {
          return n.createElement(
            s.Ci,
            { ref: this.m_refPanelAnchor, latched: this.props.latched },
            n.createElement(s.dL, { id: this.m_sPanelAnchorID }),
            n.createElement(
              o,
              Object.assign({}, this.props),
              n.createElement(
                s.dL,
                { parent_id: this.m_sPanelAnchorID },
                this.props.children,
              ),
            ),
          );
        }
      }
    },
    8108: (e, t, r) => {
      "use strict";
      r.d(t, { J: () => u });
      var n = r(1635),
        i = r(3236),
        a = r(2505),
        s = r.n(a),
        o = r(7813);
      class l {
        constructor() {
          (this.contents = o.observable.map()), (0, o.makeObservable)(this);
        }
      }
      (0, n.Cg)([o.observable], l.prototype, "contents", void 0);
      class c {
        constructor() {
          (this.m_Containers = o.observable.map()), (0, o.makeObservable)(this);
        }
        Init() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            this.AddSubscribedContainer("25769803776"),
              yield this.UpdatePaths();
          });
        }
        AddSubscribedContainer(e) {
          if (!this.m_Containers.has(e)) {
            let t = new l();
            (t.handle = e), this.m_Containers.set(e, t);
          }
        }
        UpdateContainer(e, t) {
          this.AddSubscribedContainer(e);
          let r = this.m_Containers.get(e);
          r.contents.clear(),
            t.entries.forEach((e) => {
              null != e.path && r.contents.set(e.path, e);
            });
        }
        QueryContainer(e) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            return new Promise(function (t, r) {
              s()
                .get("/properties.json?container=" + e)
                .then((r) => {
                  t([e, r.data]);
                })
                .catch((t) => {
                  r([e, t]);
                });
            });
          });
        }
        UpdatePaths() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            let e = [];
            this.m_Containers.forEach((t) => {
              e.push(this.QueryContainer(t.handle));
            });
            try {
              (yield Promise.all(e)).forEach((e) => {
                2 != e.length
                  ? console.log(
                      "Failed to update container. ",
                      e.length,
                      "entries in array",
                    )
                  : "string" == typeof e[1]
                    ? console.log(
                        "Failed to update container ",
                        e[0],
                        ":",
                        e[1],
                      )
                    : this.UpdateContainer(e[0], e[1]);
              });
            } catch (e) {
              throw (console.log(e), e);
            }
          });
        }
        GetAllActions(e) {
          if (!this.m_Containers.has(e)) return;
          let t = [];
          return (
            this.m_Containers.get(e).contents.forEach((e) => {
              "k_unActionPropertyTag" == e.type &&
                null != e.path &&
                t.push(e.path);
            }),
            t
          );
        }
        GetActionValue(e, t) {
          if (!this.m_Containers.has(e)) return;
          let r = this.m_Containers.get(e);
          if (!r.contents.has(t)) return;
          let n = r.contents.get(t);
          return "k_unActionPropertyTag" == n.type ? n.value : void 0;
        }
        GetAllInputValues(e) {
          if (!this.m_Containers.has(e)) return;
          let t = [];
          return (
            this.m_Containers.get(e).contents.forEach((e) => {
              "k_unInputValuePropertyTag" == e.type &&
                null != e.path &&
                t.push(e.path);
            }),
            t
          );
        }
        GetInputValue(e, t) {
          if (!this.m_Containers.has(e)) return;
          let r = this.m_Containers.get(e);
          if (!r.contents.has(t)) return;
          let n = r.contents.get(t);
          if ("k_unInputValuePropertyTag" != n.type) return;
          let i = n.value;
          return i.length < 1 ? void 0 : i[0];
        }
        GetScalarInputValue(e, t) {
          let r = this.GetInputValue(e, t);
          return null == r || "scalar" != r.type ? 0 : r.value;
        }
        GetBooleanInputValue(e, t) {
          let r = this.GetInputValue(e, t);
          return null != r && "boolean" == r.type && r.value;
        }
      }
      (0, n.Cg)([o.observable], c.prototype, "m_Containers", void 0),
        (0, n.Cg)([i.o], c.prototype, "AddSubscribedContainer", null),
        (0, n.Cg)([o.action], c.prototype, "UpdateContainer", null),
        (0, n.Cg)([i.o], c.prototype, "GetAllActions", null),
        (0, n.Cg)([i.o], c.prototype, "GetActionValue", null),
        (0, n.Cg)([i.o], c.prototype, "GetAllInputValues", null),
        (0, n.Cg)([i.o], c.prototype, "GetInputValue", null),
        (0, n.Cg)([i.o], c.prototype, "GetScalarInputValue", null),
        (0, n.Cg)([i.o], c.prototype, "GetBooleanInputValue", null);
      const u = new c();
      window.paths = u;
    },
    3747: (e, t, r) => {
      "use strict";
      r.d(t, { AG: () => l, Hk: () => a, kb: () => o, mj: () => s });
      var n = r(6540);
      function i(e, t, r) {
        (t = t.bind(VRHTML.VRPathProperties)),
          (r = r.bind(VRHTML.VRPathProperties));
        const [i, a] = n.useState(() => {
          try {
            return t(e);
          } catch (e) {
            return;
          }
        });
        return (
          n.useEffect(() => (e ? r(e, a).unregister : void 0), [r, a, e]), i
        );
      }
      function a(e) {
        return i(
          e,
          VRHTML.VRPathProperties.GetStringPathProperty,
          VRHTML.VRPathProperties.RegisterForStringPathPropertyChangedEvents,
        );
      }
      function s(e) {
        return i(
          e,
          VRHTML.VRPathProperties.GetBoolPathProperty,
          VRHTML.VRPathProperties.RegisterForBoolPathPropertyChangedEvents,
        );
      }
      function o(e) {
        return i(
          e,
          VRHTML.VRPathProperties.GetFloatPathProperty,
          VRHTML.VRPathProperties.RegisterForFloatPathPropertyChangedEvents,
        );
      }
      function l(e) {
        return i(
          e,
          VRHTML.VRPathProperties.GetInt32PathProperty,
          VRHTML.VRPathProperties.RegisterForInt32PathPropertyChangedEvents,
        );
      }
    },
    249: (e, t, r) => {
      "use strict";
      r.d(t, {
        Mx: () => d,
        RE: () => s,
        g7: () => l,
        vI: () => o,
        w1: () => a,
      });
      var n = r(6013),
        i = r(8770);
      function a(e) {
        var t, r, i;
        const a = new Map();
        for (const t of e.defined_actions()) a.set(t.action_id(), t);
        const s =
            null === (t = e.bar_buttons()) || void 0 === t
              ? void 0
              : t
                  .map((e) => {
                    const t = new n.Yz(),
                      r = a.get(e.action_id());
                    if (r)
                      switch (
                        (t.set_action_id(r.action_id()),
                        t.set_enabled(r.enabled()),
                        t.set_display_name(r.display_name()),
                        t.set_visible_in_dashboard_bar(!0),
                        t.set_icon(r.icon()),
                        t.set_icon_active(r.icon_active()),
                        t.set_active(r.active()),
                        r.invocation())
                      ) {
                        case 1:
                          t.set_invocation(1);
                          break;
                        case 2:
                          t.set_invocation(2);
                      }
                    switch (e.type()) {
                      case 2:
                        t.set_invocation(3), t.set_special_invocation(1);
                        break;
                      case 3:
                        t.set_is_menu(!0);
                    }
                    if (!e.is_main_hamburger_menu()) return t;
                  })
                  .filter(Boolean),
          o =
            null ===
              (r = e.bar_buttons().find((e) => e.is_main_hamburger_menu())) ||
            void 0 === r
              ? void 0
              : r.action_id(),
          l =
            null === (i = e.bar_menu_items()) || void 0 === i
              ? void 0
              : i
                  .map((e) => {
                    const t = new n.Yz(),
                      r = a.get(e.action_id());
                    if (r)
                      switch (
                        (t.set_action_id(r.action_id()),
                        t.set_enabled(r.enabled()),
                        t.set_display_name(r.display_name()),
                        t.set_visible_in_menu(!0),
                        t.set_icon(r.icon()),
                        t.set_icon_active(r.icon_active()),
                        t.set_active(r.active()),
                        e.parent_menu_action_id() != o &&
                          t.set_parent_menu_action_id(
                            e.parent_menu_action_id(),
                          ),
                        r.invocation())
                      ) {
                        case 1:
                          t.set_invocation(1);
                          break;
                        case 2:
                          t.set_invocation(2);
                      }
                    switch (e.type()) {
                      case 4:
                      case 2:
                      case 3:
                        return;
                    }
                    return t;
                  })
                  .filter(Boolean);
        e.set_deprecated_actions([...s, ...l]),
          e.set_bar_buttons(void 0),
          e.set_bar_menu_items(void 0),
          e.set_defined_actions(void 0);
      }
      function s(e) {
        (null == e ? void 0 : e.bar_buttons()) &&
          e.set_bar_buttons(e.bar_buttons().filter((e) => 2 != e.type()));
      }
      function o(e) {
        e.set_deprecated_icon(c(e.icon())),
          e.set_icon(void 0),
          e.set_deprecated_icon_active(c(e.icon_active())),
          e.set_icon_active(void 0);
      }
      function l(e) {
        e.set_deprecated_icon(
          (function (e) {
            if (null == e) return;
            const t = new i.Tp();
            switch (
              (t.set_hwnd(e.hwnd()),
              t.set_appid(e.appid()),
              t.set_overlay(e.overlay()),
              e.enum())
            ) {
              case void 0:
                break;
              case 14:
                t.set_enum(1);
                break;
              case 15:
                t.set_enum(2);
                break;
              case 16:
                t.set_enum(3);
                break;
              case 17:
                t.set_enum(4);
                break;
              case 18:
                t.set_enum(5);
                break;
              default:
                t.set_enum(0);
            }
            return t;
          })(e.icon()),
        ),
          e.set_icon(void 0);
      }
      function c(e) {
        if (null == e) return;
        const t = new i.Ym();
        switch (e.enum()) {
          case void 0:
            break;
          case 1:
            t.set_enum(1);
            break;
          case 2:
            t.set_enum(2);
            break;
          case 3:
            t.set_enum(3);
            break;
          case 4:
            t.set_enum(4);
            break;
          case 5:
            t.set_enum(5);
            break;
          case 6:
            t.set_enum(6);
            break;
          case 7:
            t.set_enum(7);
            break;
          case 8:
            t.set_enum(8);
            break;
          case 9:
            t.set_enum(9);
            break;
          case 10:
            t.set_enum(10);
            break;
          case 11:
            t.set_enum(11);
            break;
          case 12:
            t.set_enum(12);
            break;
          case 13:
            t.set_enum(13);
            break;
          default:
            t.set_enum(0);
        }
        return t;
      }
      function u(e) {
        return 2 == (null == e ? void 0 : e.type) ? { type: 1 } : e;
      }
      function d(e) {
        (null == e ? void 0 : e.items_for_left_frame_menu) &&
          (e.items_for_left_frame_menu = e.items_for_left_frame_menu.map(u)),
          (null == e ? void 0 : e.items_for_tab_hover_menu) &&
            (e.items_for_tab_hover_menu = e.items_for_tab_hover_menu.map(u));
      }
    },
    3924: (e, t, r) => {
      "use strict";
      r.d(t, {
        BT: () => l,
        Sg: () => d,
        Uq: () => o,
        gp: () => a,
        i0: () => u,
        qM: () => i,
        w0: () => s,
        zj: () => c,
      });
      var n = r(5339);
      const i = n.BinaryReader.prototype,
        a = n.BinaryWriter.prototype;
      function s(e) {
        let t = {};
        const { fields: r } = e;
        for (let e in r) {
          const n = r[e];
          t[n.n] = n;
        }
        return t;
      }
      function o(e, t) {
        const { proto: r, fields: i } = e,
          a = new r();
        if (null == t) return a;
        for (let e in i) {
          const { n: r, c: s, r: o, d: l, q: c } = i[e];
          if (!t.hasOwnProperty(e)) continue;
          const u = t[e];
          s
            ? o
              ? n.Message.setRepeatedWrapperField(
                  a,
                  r,
                  Array.isArray(u) ? u.map((e) => s.fromObject(e)) : [],
                )
              : n.Message.setWrapperField(a, r, s.fromObject(u))
            : n.Message.setField(a, r, u);
        }
        return a;
      }
      function l(e, t, r) {
        const { proto: i, fields: a } = e;
        let s = {};
        for (let e in a) {
          const { n: i, c: o, r: l, d: c, q: u } = a[e];
          if (o)
            if (l)
              s[e] = n.Message.toObjectList(
                n.Message.getRepeatedWrapperField(r, o, i),
                o.toObject,
                t,
              );
            else {
              const a = n.Message.getWrapperField(r, o, i, u ? 1 : 0);
              a && (s[e] = o.toObject(t, a));
            }
          else {
            const t = n.Message.getFieldWithDefault(
              r,
              i,
              void 0 !== c ? c : null,
            );
            (null !== t || u) && (s[e] = t);
          }
        }
        return t && (s.$jspbMessageInstance = r), s;
      }
      function c(e, t, r) {
        for (; r.nextField() && !r.isEndGroup(); ) {
          const i = e[r.getFieldNumber()];
          if (i) {
            const { n: e, c: a, r: s, d: o, q: l, br: c } = i;
            if (a) {
              const i = new a();
              r.readMessage(i, a.deserializeBinaryFromReader),
                s
                  ? n.Message.addToRepeatedWrapperField(t, e, i, a)
                  : n.Message.setWrapperField(t, e, i);
            } else if (c) {
              const i = c.call(r);
              s
                ? n.Message.addToRepeatedField(t, e, i)
                : n.Message.setField(t, e, i);
            } else
              console.assert(
                !!c,
                `Reader func not set for field number ${e} in class ${a}`,
              ),
                r.skipField();
          } else r.skipField();
        }
        return t;
      }
      function u(e, t, r) {
        const { fields: i } = e;
        for (let e in i) {
          const { n: a, c: s, r: o, d: l, q: c, bw: u } = i[e];
          if (s)
            if (o) {
              const e = n.Message.getRepeatedWrapperField(t, s, a);
              ((e && e.length) || c) &&
                r.writeRepeatedMessage(a, e, s.serializeBinaryToWriter);
            } else {
              const e = n.Message.getWrapperField(t, s, a, c ? 1 : 0);
              e && r.writeMessage(a, e, s.serializeBinaryToWriter);
            }
          else if (u) {
            const e = n.Message.getField(t, a);
            void 0 !== e && u.call(r, a, e);
          } else
            console.assert(
              !!u,
              `Writer func not set for field number ${a} in class ${s}`,
            );
        }
      }
      function d(e) {
        const t = e.proto;
        for (const r in e.fields) {
          const i = e.fields[r],
            { n: a, c: s, r: o, d: l, q: c } = i;
          i.hasOwnProperty("d")
            ? (t.prototype[r] = m(n.Message.getFieldWithDefault, a, l))
            : (t.prototype[r] = s
                ? o
                  ? m(n.Message.getRepeatedWrapperField, s, a)
                  : p(s, a)
                : m(n.Message.getField, a)),
            (t.prototype[`set_${r}`] = h(
              s
                ? o
                  ? n.Message.setRepeatedWrapperField
                  : n.Message.setWrapperField
                : n.Message.setField,
              a,
            )),
            o && (t.prototype[`add_${r}`] = g(a, s));
        }
      }
      function m(e, ...t) {
        return function () {
          return e(this, ...t);
        };
      }
      function p(e, t) {
        return function (r = !0) {
          return n.Message.getWrapperField(this, e, t, r ? 1 : 0);
        };
      }
      function h(e, t) {
        return function (r) {
          return e(this, t, r);
        };
      }
      function g(e, t) {
        return t
          ? function (r, i) {
              return n.Message.addToRepeatedWrapperField(this, e, r, t, i);
            }
          : function (t, r) {
              n.Message.addToRepeatedField(this, e, t, r);
            };
      }
    },
    8803: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => a });
      const n = new Map(),
        i = new Map();
      function a(e) {
        let t;
        try {
          t = e.getVRPathPropertyKey();
          const r = e.serializeBase64String(),
            a = n.get(t);
          if (a && a == r) return;
          n.set(t, r),
            window.protoPathPropertyDebug && i.set(t, e.toObject()),
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRPathProperties.SetStringPathProperty(t, r);
        } catch (e) {
          throw e;
        }
      }
      (window.protoPathProperties = i), (window.protoPathPropertyDebug = !1);
    },
    921: (e, t, r) => {
      "use strict";
      r.d(t, { D5: () => a, cZ: () => i });
      var n = r(6540);
      function i(e, t) {
        null != e &&
          ("function" == typeof e ? e(t) : "current" in e && (e.current = t));
      }
      function a(e, t) {
        const r = n.useRef(!1);
        n.useLayoutEffect(
          () => () => {
            r.current && i(e, void 0);
          },
          [e],
        ),
          n.useLayoutEffect(() => {
            (t || r.current) && (i(e, t), (r.current = !!t));
          }, [e, t]);
      }
    },
    9728: (e, t, r) => {
      "use strict";
      r.d(t, { G: () => l });
      var n = r(1635),
        i = r(6090),
        a = r(7813),
        s = r(3236),
        o = r(3606);
      class l {
        get SceneApplicationState() {
          return this.m_sceneApplicationState;
        }
        get SceneAppName() {
          return this.m_sceneAppName;
        }
        get SceneAppKey() {
          return this.m_sceneAppKey;
        }
        get SceneAppIsHome() {
          return this.m_sceneAppKey == o.np;
        }
        get SceneAppIsVRLink() {
          return this.m_sceneAppKey == o.l3;
        }
        static get Instance() {
          return (
            l.s_Instance ||
              ((l.s_Instance = new l()),
              (window.sceneApplicationStore = l.s_Instance)),
            l.s_Instance
          );
        }
        constructor() {
          (this.m_sceneApplicationState = i.HW.None),
            (this.m_sceneAppName = ""),
            (this.m_sceneAppKey = ""),
            (this.m_sceneApplicationStateChangedEventHandle = null),
            (this.m_unresponsiveTimeout = void 0),
            (this.m_noAppTimeout = void 0),
            (this.m_mountedTime = void 0),
            (this.m_mountedTime = new Date().getTime()),
            (this.m_sceneApplicationStateChangedEventHandle =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.RegisterForSceneApplicationStateChangedEvents(
                    this.updateTransitionState,
                  )),
            this.updateTransitionState(),
            (0, a.makeObservable)(this);
        }
        updateTransitionState() {
          var e;
          if (
            !(null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VRApplications)
          )
            return;
          let t =
            null === (e = VRHTML.VRApplications) || void 0 === e
              ? void 0
              : e.GetSceneApplicationState();
          t == i.HW.Starting
            ? (this.m_sceneApplicationState == i.HW.Quitting &&
                this.resetLatchedValued(),
              (this.m_sceneApplicationState = t),
              this.updateLatchedValues(),
              this.cancelUnresponsiveTimeout(),
              this.cancelNoAppTimeout())
            : t == i.HW.Quitting
              ? (this.m_sceneApplicationState == i.HW.Starting &&
                  this.resetLatchedValued(),
                (this.m_sceneApplicationState = t),
                this.updateLatchedValues(),
                this.cancelUnresponsiveTimeout(),
                this.cancelNoAppTimeout())
              : t == i.HW.Running
                ? ((this.m_sceneApplicationState = t),
                  this.cancelUnresponsiveTimeout(),
                  this.cancelNoAppTimeout(),
                  this.updateLatchedValues())
                : t == i.HW.None
                  ? (this.cancelUnresponsiveTimeout(),
                    this.m_sceneApplicationState != i.HW.None &&
                      this.startNoAppTimer())
                  : t == i.HW.Waiting &&
                    (this.m_sceneApplicationState != i.HW.Waiting &&
                      this.startUnresponsiveTimer(),
                    this.cancelNoAppTimeout()),
            this.log("updateTransitionState: " + i.HW[t]),
            this.log("this.m_sceneAppKey: " + this.m_sceneAppKey),
            this.log("this.m_sceneAppName: " + this.m_sceneAppName),
            this.log(
              "this.m_sceneApplicationState: " + this.m_sceneApplicationState,
            );
        }
        onUnresponsiveTimeout() {
          window.clearTimeout(this.m_unresponsiveTimeout),
            (this.m_unresponsiveTimeout = void 0),
            (this.m_sceneApplicationState = i.HW.Waiting),
            this.updateLatchedValues();
        }
        onNoAppTimeout() {
          window.clearTimeout(this.m_noAppTimeout),
            (this.m_noAppTimeout = void 0),
            ((null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VRApplications) &&
              VRHTML.VRApplications.GetSceneApplicationState() != i.HW.None) ||
              this.resetLatchedValued();
        }
        updateLatchedValues() {
          if (
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VRApplications
          )
            if (
              VRHTML.VRApplications.GetSceneApplicationState() == i.HW.Starting
            ) {
              let e = VRHTML.VRApplications.GetStartingApplicationKey();
              e && e.length > 0 && (this.m_sceneAppKey = e);
              let t = VRHTML.GetStartingAppName();
              t && t.length > 0 && (this.m_sceneAppName = t);
            } else {
              let e = VRHTML.VRApplications.GetSceneApplicationKey();
              e && e.length > 0 && (this.m_sceneAppKey = e);
              let t = VRHTML.GetCurrentSceneFocusAppName();
              t && t.length > 0 && (this.m_sceneAppName = t);
            }
        }
        resetLatchedValued() {
          (this.m_sceneAppName = ""),
            (this.m_sceneAppKey = ""),
            (this.m_sceneApplicationState = i.HW.None);
        }
        cancelUnresponsiveTimeout() {
          this.m_unresponsiveTimeout &&
            (window.clearTimeout(this.m_unresponsiveTimeout),
            (this.m_unresponsiveTimeout = void 0));
        }
        startUnresponsiveTimer() {
          void 0 === this.m_unresponsiveTimeout &&
            (this.m_unresponsiveTimeout = window.setTimeout(
              this.onUnresponsiveTimeout,
              l.kUnresponsiveDelayMs,
            ));
        }
        startNoAppTimer() {
          void 0 === this.m_noAppTimeout &&
            (this.m_noAppTimeout = window.setTimeout(
              this.onNoAppTimeout,
              l.kUnresponsiveDelayMs,
            ));
        }
        cancelNoAppTimeout() {
          this.m_noAppTimeout &&
            (window.clearTimeout(this.m_noAppTimeout),
            (this.m_noAppTimeout = void 0));
        }
        log(e) {
          new Date().getTime(), this.m_mountedTime;
        }
      }
      (l.s_Instance = null),
        (l.kUnresponsiveDelayMs = 2e3),
        (l.kNoAppDelayMs = 2e3),
        (0, n.Cg)([a.computed], l.prototype, "SceneApplicationState", null),
        (0, n.Cg)([a.computed], l.prototype, "SceneAppName", null),
        (0, n.Cg)([a.computed], l.prototype, "SceneAppKey", null),
        (0, n.Cg)([a.computed], l.prototype, "SceneAppIsHome", null),
        (0, n.Cg)([a.computed], l.prototype, "SceneAppIsVRLink", null),
        (0, n.Cg)(
          [a.observable],
          l.prototype,
          "m_sceneApplicationState",
          void 0,
        ),
        (0, n.Cg)([a.observable], l.prototype, "m_sceneAppName", void 0),
        (0, n.Cg)([a.observable], l.prototype, "m_sceneAppKey", void 0),
        (0, n.Cg)([s.o], l.prototype, "updateTransitionState", null),
        (0, n.Cg)([s.o], l.prototype, "onUnresponsiveTimeout", null),
        (0, n.Cg)([s.o], l.prototype, "onNoAppTimeout", null),
        (0, n.Cg)([s.o], l.prototype, "updateLatchedValues", null),
        (0, n.Cg)([s.o], l.prototype, "resetLatchedValued", null),
        (0, n.Cg)([s.o], l.prototype, "cancelUnresponsiveTimeout", null),
        (0, n.Cg)([s.o], l.prototype, "startUnresponsiveTimer", null),
        (0, n.Cg)([s.o], l.prototype, "startNoAppTimer", null),
        (0, n.Cg)([s.o], l.prototype, "cancelNoAppTimeout", null),
        (0, n.Cg)([s.o], l.prototype, "log", null);
    },
    1295: (e, t, r) => {
      "use strict";
      r.d(t, { H: () => o });
      var n = r(1635),
        i = r(7813),
        a = r(3236);
      class s {
        constructor() {
          (this.m_rgMutualCapabilities = []),
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.RegisterForMutualSteamCapabilitiesChanged(
                this.UpdateCapabilities,
              ),
            this.UpdateCapabilities(),
            (0, i.makeObservable)(this);
        }
        BHasMutualCapabilities() {
          return null != this.m_rgMutualCapabilities;
        }
        BHasMutualCapability(e) {
          var t;
          return null === (t = this.m_rgMutualCapabilities) || void 0 === t
            ? void 0
            : t.includes(e);
        }
        UpdateCapabilities() {
          var e;
          (this.m_rgMutualCapabilities =
            null !==
              (e =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRClientInternal.GetMutualSteamCapabilities()) &&
            void 0 !== e
              ? e
              : []),
            this.m_rgMutualCapabilities.length > 0 &&
              console.log(
                "VR Mutual Capabilities: " +
                  this.m_rgMutualCapabilities.join(", "),
              );
        }
      }
      (0, n.Cg)([i.observable], s.prototype, "m_rgMutualCapabilities", void 0),
        (0, n.Cg)([a.o], s.prototype, "UpdateCapabilities", null);
      const o = new s();
      window.SteamMutualCapabilities = o;
    },
    4074: (e, t, r) => {
      "use strict";
      r.d(t, {
        $k: () => p,
        Cg: () => i,
        D7: () => a,
        Y7: () => o,
        fb: () => d,
        hC: () => u,
        tC: () => m,
      });
      var n = r(1526);
      const i = 2 ** 32 - 1;
      function a(e) {
        try {
          return n.DX.deserializeBinary(e).toObject();
        } catch (e) {
          return void console.error(
            "Received a VRGamepadUI Message but couldn't deserialize the header!",
            null == e ? void 0 : e.message,
          );
        }
      }
      function s(e) {
        try {
          return { result: e() };
        } catch (e) {
          return { error: e };
        }
      }
      var o;
      !(function (e) {
        (e[(e.Success = 0)] = "Success"),
          (e[(e.HeaderSerializationFailure = 1)] =
            "HeaderSerializationFailure"),
          (e[(e.PayloadSerializationFailure = 2)] =
            "PayloadSerializationFailure"),
          (e[(e.SendFailure = 3)] = "SendFailure");
      })(o || (o = {}));
      class l extends Error {
        constructor(e, t) {
          var r;
          const i = ["msgid:" + (null != e ? e : "none")];
          switch (null == t ? void 0 : t.origin) {
            case 1:
              i.push("local");
              break;
            case 2:
              i.push("remote");
          }
          t.was_transmitted || i.push("not sent");
          let a = "(" + i.join(", ") + ") ";
          (a += (0, n.Ut)(
            null !== (r = null == t ? void 0 : t.error_code) && void 0 !== r
              ? r
              : 0,
          )),
            (null == t ? void 0 : t.error_description) &&
              (a += ": " + t.error_description),
            super(a),
            (this.info = t),
            (this.messageID = e);
        }
      }
      const c = { nMaxTimeoutRetries: 0, nTimeoutMS: 2e3, nRetryDelayMS: 1e3 };
      function u(e) {
        return (
          null != e.message_id &&
          null != e.name &&
          null == e.response_to_message_id
        );
      }
      function d(e) {
        return null != e.message_id && null != e.response_to_message_id;
      }
      class m {
        get Log() {
          return this.m_Endpoint.Log;
        }
        ExpectImplementation(e) {
          this.m_setExpectedMethods.add(e),
            this.m_incomingRequestQueue.set(e, []);
        }
        SetImplementation(e, t) {
          var r;
          this.m_mapMethods.has(e) &&
            this.Log.Error(
              "CVRGamepadUI Message Service already has an existing implementation for method:",
              e,
            ),
            this.m_mapMethods.set(e, t);
          const n =
            null !== (r = this.m_incomingRequestQueue.get(e)) && void 0 !== r
              ? r
              : [];
          for (; n.length > 0; ) {
            const e = n.shift();
            this.HandleVRGamepadUIMessageRequest(
              null == e ? void 0 : e.header,
              null == e ? void 0 : e.serializedPayload,
            );
          }
        }
        ClearImplementation(e) {
          this.m_mapMethods.delete(e);
        }
        constructor(e, t) {
          (this.m_mapMethods = new Map()),
            (this.m_setExpectedMethods = new Set()),
            (this.m_incomingRequestQueue = new Map()),
            (this.m_setRecentlyExecutedRequestMessageIDs = new Set()),
            (this.m_Endpoint = e),
            (this.m_mapRequestHandlers = t);
        }
        SendErrorResponse(e, t, r) {
          if (null == (null == e ? void 0 : e.message_id)) return;
          const i = new n.iM();
          i.set_error_code(t),
            i.set_origin(2),
            r instanceof Error
              ? i.set_error_description(r.message)
              : r && "string" == typeof r && i.set_error_description(r),
            this.Log.Error(
              "Sending VRGamepadUI Message Error Response",
              (0, n.Ut)(t),
              ":",
              i.error_description(),
            );
          const a = {
              message_id: this.m_Endpoint.CreateVRGamepadUIMessageId(),
              response_to_message_id: e.message_id,
              is_error_response: !0,
            },
            s = this.m_Endpoint.SendVRGamepadUIMessage(a, i);
          s == o.Success ||
            this.Log.Error(
              "Failed to send VRGamepadUI Message Error Response:",
              o[s],
              { requestHeader: e, responseHeader: a },
            );
        }
        HandleVRGamepadUIMessageRequest(e, t) {
          this.Log.Assert(null == e.response_to_message_id);
          const r = this.m_mapRequestHandlers[e.name];
          if (!r)
            return void this.SendErrorResponse(
              e,
              1,
              `Unknown VRGamepadUI request name: ${e.name}`,
            );
          const n = this.m_mapMethods.get(r.strMethod);
          if (!n) {
            if (this.m_setExpectedMethods.has(r.strMethod)) {
              const n = this.m_incomingRequestQueue.get(r.strMethod);
              if (n.some((t) => t.header.message_id == e.message_id)) return;
              n.push({ header: e, serializedPayload: t });
            } else
              this.SendErrorResponse(
                e,
                1,
                `Unimplemented VRGamepadUI method: ${r.strMethod}`,
              );
            return;
          }
          const i = s(() =>
            r.msgClassRequest_t.deserializeBinary(t).toObject(),
          );
          if ("error" in i) return void this.SendErrorResponse(e, 7, i.error);
          const a = i.result;
          if (this.m_setRecentlyExecutedRequestMessageIDs.has(e.message_id))
            return void this.Log.Debug(
              "Skipping request with duplicate message_id:",
              e.message_id,
              e,
            );
          this.m_setRecentlyExecutedRequestMessageIDs.add(e.message_id),
            setTimeout(
              () =>
                this.m_setRecentlyExecutedRequestMessageIDs.delete(
                  e.message_id,
                ),
              6e4,
            ),
            this.Log.IsDebugEnabled() &&
              this.Log.Debug("Received request:", e.name, {
                header: e,
                payload: JSON.parse(JSON.stringify(a)),
              });
          const l = s(() => n(a));
          if ("error" in l) return void this.SendErrorResponse(e, 2, l.error);
          (l.result instanceof Promise
            ? l.result
            : Promise.resolve(l.result)
          ).then(
            (t) => {
              const n = null != t ? t : {},
                i = s(() => r.msgClassResponse_t.fromObject(n));
              if ("error" in i)
                return void this.SendErrorResponse(e, 6, i.error);
              const a = {
                  message_id: this.m_Endpoint.CreateVRGamepadUIMessageId(),
                  response_to_message_id: e.message_id,
                },
                l = this.m_Endpoint.SendVRGamepadUIMessage(a, i.result);
              if (l == o.Success)
                this.Log.IsDebugEnabled() &&
                  this.Log.Debug("Sent response:", e.name, {
                    header: a,
                    payload: JSON.parse(JSON.stringify(n)),
                  });
              else
                switch (l) {
                  case o.HeaderSerializationFailure:
                  case o.PayloadSerializationFailure:
                    this.SendErrorResponse(e, 6, "Response " + o[l]);
                    break;
                  default:
                    this.Log.Error(
                      "Failed to send VRGamepadUI Message Response:",
                      o[l],
                      { requestHeader: e, responseHeader: a },
                    );
                }
            },
            (t) => {
              this.SendErrorResponse(e, 3, t);
            },
          );
        }
      }
      class p {
        get Log() {
          return this.m_Endpoint.Log;
        }
        constructor(e) {
          (this.m_mapPendingRequests = new Map()),
            (this.m_setMessageIDsCancelledAfterSend = new Set()),
            (this.m_Endpoint = e);
        }
        HandleVRGamepadUIMessageResponse(e, t) {
          if (
            this.m_setMessageIDsCancelledAfterSend.has(e.response_to_message_id)
          )
            return void this.Log.Info(
              "Received a response for a VRGamepadUI Message that we canceled after it was sent:",
              JSON.stringify(e),
            );
          if (!this.m_mapPendingRequests.has(e.response_to_message_id))
            return void this.Log.Error(
              "Received a VRGamepadUI Message Response to a message we weren't awaiting a response for (or we already received one):",
              JSON.stringify(e),
            );
          const r = this.m_mapPendingRequests.get(e.response_to_message_id);
          if (
            (this.DeletePendingRequest(e.response_to_message_id),
            e.is_error_response)
          ) {
            let i;
            const a = s(() => n.iM.deserializeBinary(t).toObject());
            return (
              (i = new l(
                r.header.message_id,
                "error" in a
                  ? {
                      was_transmitted: r.bTransmitted,
                      error_code: 7,
                      origin: 1,
                      error_description:
                        "Received a VRGamepadUI Message error response, but couldn't deserialize it. Response header: " +
                        JSON.stringify(e),
                    }
                  : Object.assign(Object.assign({}, a.result), {
                      was_transmitted: !0,
                      origin: 2,
                    }),
              )),
              this.Log.Warning(
                "Received a VRGamepadUI Message error response:",
                i.message,
              ),
              void r.fnReject(i)
            );
          }
          const i = s(() =>
            r.msgExpectedResponseClass_t.deserializeBinary(t).toObject(),
          );
          "error" in i
            ? this.Log.Error(
                "Received a VRGamepadUI Message response, but couldn't deserialize it:",
                JSON.stringify(e),
              )
            : (this.Log.IsDebugEnabled() &&
                this.Log.Debug("Received response:", r.header.name, {
                  header: e,
                  payload: JSON.parse(JSON.stringify(i.result)),
                }),
              r.fnResolve(i.result));
        }
        SendVRGamepadUIRequest(e, t, r, n) {
          let i;
          const a = { stack: void 0 };
          Error.captureStackTrace(a);
          const s = new Promise((s, o) => {
            (i = {
              header: {
                name: e,
                message_id: this.m_Endpoint.CreateVRGamepadUIMessageId(),
              },
              payload: t,
              opts: Object.assign(Object.assign({}, c), n),
              msgExpectedResponseClass_t: r,
              fnResolve: (e) => {
                (i.eState = 3),
                  (i.bReceivedResponse = !0),
                  this.DeletePendingRequest(i.header.message_id);
                try {
                  s(e);
                } catch (e) {
                  this.Log.Error(
                    "Error resolving VRGamepadUI Message request call:",
                    e,
                  );
                }
              },
              fnReject: (e) => {
                var t, r;
                e instanceof l ||
                  (e = new l(i.header.message_id, {
                    was_transmitted: i.bTransmitted,
                    error_description:
                      "VRGamepadUIMessage PendingRequest object resolved with an error type other than VRGamepadUI_Message_Error",
                    error_code: 2,
                    origin: 1,
                  })),
                  (i.eState = 3),
                  (i.bReceivedResponse = !0),
                  this.DeletePendingRequest(i.header.message_id);
                const n =
                    null !== (t = null == e ? void 0 : e.stack) && void 0 !== t
                      ? t
                      : "Error",
                  a = null !== (r = i.stack) && void 0 !== r ? r : "\n",
                  s = a.indexOf("\n"),
                  c = n + "\n" + a.substring(s + 1);
                e.stack = c;
                try {
                  o(e);
                } catch (e) {
                  this.Log.Error(
                    "Error rejecting VRGamepadUI Message request call:",
                    e,
                  );
                }
              },
              stack: a.stack,
              eState: 0,
              eErrorOnLastAttempt: void 0,
              bCanceled: !1,
              bTransmitted: !1,
              bReceivedResponse: !1,
              nTimeoutHandle: void 0,
              nAttemptsMade: 0,
            }),
              this.m_mapPendingRequests.set(i.header.message_id, i),
              this.AttemptToSendRequestMessage(i);
          });
          return {
            cancel: () => this.CancelRequest(i),
            BTransmitted: () => i.bTransmitted,
            BCancelled: () => i.bCanceled,
            BFinished: () => 3 == i.eState,
            then: s.then.bind(s),
            catch: s.catch.bind(s),
            finally: s.finally.bind(s),
            [Symbol.toStringTag]: "Promise",
          };
        }
        AttemptToSendRequestMessage(e) {
          if (
            (e.nAttemptsMade++,
            !(function (e = {}) {
              return !(
                (null != e.nMaxTimeoutRetries &&
                  "infinite" != e.nMaxTimeoutRetries &&
                  (e.nMaxTimeoutRetries < 0 ||
                    Number.isNaN(e.nMaxTimeoutRetries))) ||
                (null != e.nTimeoutMS &&
                  (e.nTimeoutMS <= 0 || Number.isNaN(e.nTimeoutMS))) ||
                (null != e.nRetryDelayMS &&
                  (e.nRetryDelayMS <= 0 || Number.isNaN(e.nRetryDelayMS)))
              );
            })(e.opts))
          )
            return void e.fnReject(
              new l(e.header.message_id, {
                was_transmitted: e.bTransmitted,
                error_code: 0,
                error_description: "Invalid request options.",
                origin: 1,
              }),
            );
          if (!this.m_Endpoint.IsConnected())
            return void this.ScheduleRequestMessageRetryOrFail(e, {
              error_code: 4,
              origin: 1,
            });
          const t = this.m_Endpoint.SendVRGamepadUIMessage(e.header, e.payload);
          t == o.Success
            ? (this.Log.IsDebugEnabled() &&
                this.Log.Debug("Sent request:", e.header.name, {
                  header: e.header,
                  payload: JSON.parse(JSON.stringify(e.payload.toObject())),
                }),
              (e.eState = 1),
              (e.bTransmitted = !0),
              window.clearTimeout(e.nTimeoutHandle),
              (e.nTimeoutHandle = window.setTimeout(
                () => this.HandleSendTimeout(e),
                e.opts.nTimeoutMS,
              )))
            : this.ScheduleRequestMessageRetryOrFail(e, {
                error_code: 0,
                origin: 1,
                error_description: "Request " + o[t],
              });
        }
        ScheduleRequestMessageRetryOrFail(e, t) {
          var r;
          const n =
            "infinite" == e.opts.nMaxTimeoutRetries ||
            e.nAttemptsMade <= e.opts.nMaxTimeoutRetries;
          if (this.Log.IsDebugEnabled()) {
            const r = e.nAttemptsMade + 1,
              i =
                "infinite" == e.opts.nMaxTimeoutRetries
                  ? "∞"
                  : e.opts.nMaxTimeoutRetries + 1,
              a = n
                ? `will retry attempt ${r}/${i} in ${e.opts.nRetryDelayMS}ms`
                : "won't retry";
            this.Log.Debug(`Error sending request (${a}):`, e.header.name, {
              header: e.header,
              error: t,
              payload: JSON.parse(JSON.stringify(e.payload.toObject())),
            });
          }
          n
            ? ((e.eState = 2),
              (e.eErrorOnLastAttempt =
                null !== (r = t.error_code) && void 0 !== r ? r : 0),
              window.clearTimeout(e.nTimeoutHandle),
              (e.nTimeoutHandle = window.setTimeout(
                () => this.AttemptToSendRequestMessage(e),
                e.opts.nRetryDelayMS,
              )))
            : e.fnReject(
                new l(
                  e.header.message_id,
                  Object.assign(Object.assign({}, t), {
                    was_transmitted: e.bTransmitted,
                  }),
                ),
              );
        }
        NotifyConnectionStateChanged(e) {
          if (e) {
            let e = !1;
            for (const t of this.m_mapPendingRequests.values())
              2 == t.eState &&
                4 == t.eErrorOnLastAttempt &&
                (!e &&
                  this.Log.IsDebugEnabled() &&
                  (this.Log.Debug(
                    "Retrying failed messages immediately due to connection state change...",
                  ),
                  (e = !0)),
                window.clearTimeout(t.nTimeoutHandle),
                this.AttemptToSendRequestMessage(t));
          }
        }
        CancelRequest(e, t = 8) {
          return (
            this.Log.IsDebugEnabled() &&
              this.Log.Debug("Cancelling request:", e.header.name, {
                header: e.header,
                payload: JSON.parse(JSON.stringify(e.payload.toObject())),
                sent: e.bTransmitted,
              }),
            e.bTransmitted &&
              this.m_setMessageIDsCancelledAfterSend.add(e.header.message_id),
            (e.bCanceled = !0),
            (e.eState = 3),
            window.clearTimeout(e.nTimeoutHandle),
            this.DeletePendingRequest(e.header.message_id),
            e.bReceivedResponse
              ? 1
              : e.bTransmitted
                ? (null == e ||
                    e.fnReject(
                      new l(e.header.message_id, {
                        was_transmitted: !0,
                        error_code: t,
                        origin: 0,
                      }),
                    ),
                  0)
                : (null == e ||
                    e.fnReject(
                      new l(e.header.message_id, {
                        was_transmitted: !1,
                        error_code: t,
                        origin: 1,
                      }),
                    ),
                  2)
          );
        }
        CancelAllRequests() {
          for (const e of this.m_mapPendingRequests.values())
            this.CancelRequest(e);
        }
        HandleSendTimeout(e) {
          this.ScheduleRequestMessageRetryOrFail(e, {
            was_transmitted: e.bTransmitted,
            error_code: 5,
            origin: 0,
          });
        }
        DeletePendingRequest(e) {
          const t = this.m_mapPendingRequests.get(e);
          window.clearTimeout(null == t ? void 0 : t.nTimeoutHandle),
            this.m_mapPendingRequests.delete(e);
        }
      }
      Symbol.toStringTag;
    },
    1333: (e, t, r) => {
      "use strict";
      r.d(t, {
        Gz: () => m,
        HR: () => b,
        aJ: () => h,
        kP: () => g,
        mO: () => p,
      });
      var n = r(1635),
        i = r(3236),
        a = r(2505),
        s = r.n(a),
        o = r(7813),
        l = r(6090),
        c = r(2702),
        u = r(3606),
        d = r(1835);
      const m = 16,
        p = 0.2,
        h = 5,
        g = 0.02,
        v = "change_route";
      class _ {
        constructor() {
          (this.m_wsWebSocketToServer = void 0),
            (this.m_mailbox = new l._n()),
            (this.connected = !1),
            (this.settingsSchema = void 0),
            (this.settings = o.observable.map()),
            (this.systemInfo = void 0),
            (this.audioDevices = void 0),
            (this.apps = []),
            (this.probablyOwnedAppkeys = new Set()),
            (this.showInternalSettings = !1),
            (this.workshopStateChangedCanary = 1),
            (this.onRestartRequired = null),
            (this.onAppRestartRequired = null),
            (this.pendingChanges = new Map()),
            (this.route = []),
            (this.m_mapSettingsLastWriteInfo = new Map()),
            (this.m_bIsSettingApp = !1),
            (this.m_bInitStarted = !1),
            (this.GetAppList = function () {
              return new Promise(function (e, t) {
                s()
                  .get("/app/list.json")
                  .then((t) => {
                    e(t.data.apps);
                  })
                  .catch((e) => {
                    t(e);
                  });
              });
            }),
            (this.GetSettingsUGC = function () {
              return new Promise(function (e, t) {
                s()
                  .get("/settings_getugc")
                  .then((t) => {
                    e(t.data);
                  })
                  .catch((e) => {
                    t(e);
                  });
              });
            }),
            (this.ReloadSettingsSchema = function () {
              return new Promise(function (e, t) {
                s()
                  .get("/settings_reloadschema")
                  .then((t) => {
                    e(t.data);
                  })
                  .catch((e) => {
                    t(e);
                  });
              });
            }),
            (this.GetSettingsInfo = function () {
              return new Promise(function (e, t) {
                s()
                  .get("/settings_getinfo")
                  .then((t) => {
                    e(t.data);
                  })
                  .catch((e) => {
                    t(e);
                  });
              });
            }),
            (0, o.makeObservable)(this);
        }
        OpenWebSocketToHost() {
          return new Promise((e, t) => {
            console.log("Connecting vrsettings..."),
              (this.m_wsWebSocketToServer = new WebSocket(
                "ws://" + window.location.host,
              )),
              this.m_wsWebSocketToServer.addEventListener("open", (t) => {
                this.OnWebSocketOpen(t), e();
              }),
              this.m_wsWebSocketToServer.addEventListener(
                "message",
                this.OnWebSocketMessage,
              ),
              this.m_wsWebSocketToServer.addEventListener(
                "close",
                this.OnWebSocketClose,
              );
          });
        }
        Init(e) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            if (this.m_bInitStarted) return;
            (this.m_bInitStarted = !0),
              (this.m_bIsSettingApp = e),
              this.m_bIsSettingApp &&
                (window.addEventListener("hashchange", this.onHashChanged),
                this.onHashChanged()),
              (0, o.autorun)(
                () => {
                  let e = [];
                  if (0 != this.pendingChanges.size) {
                    for (const [t, r] of this.pendingChanges.entries())
                      e.push({ name: t, value: r });
                    this.pendingChanges.clear(),
                      s()
                        .post("/settings_set.action", e)
                        .then((e) => {})
                        .catch((t) => {
                          console.log(
                            "Failed to save settings! This usually happens when type is set incorrectly on one of the keys in the schema. ",
                            e,
                          );
                        });
                  }
                },
                { delay: 300 },
              ),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.RegisterForDisplayModeNotSupportedEvents(
                  this.SetRestartRequired,
                );
            let t = [];
            this.m_mailbox.connected || t.push(this.ConnectMailbox()),
              t.push(this.OpenWebSocketToHost()),
              t.push(this.AwaitInitialSettingsSchema()),
              yield Promise.all(t);
          });
        }
        get MailboxName() {
          if (!this.m_bIsSettingApp) return "settings";
          switch ((0, l.R$)()) {
            case l.OH.Overlay:
              return "settings/overlay";
            case l.OH.Desktop:
              return "settings/desktop";
            default:
              return "settings/unknown";
          }
        }
        ConnectMailbox() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            try {
              yield this.m_mailbox.Init(this.MailboxName),
                this.m_mailbox.RegisterHandler(
                  "workshop_state_changed",
                  this.OnWorkshopStateChangedMessage,
                ),
                this.m_mailbox.RegisterHandler(v, this.OnChangeRouteMessage),
                this.m_mailbox.RegisterHandler(
                  "app_config_changed",
                  this.OnAppConfigChangedMessage,
                ),
                this.m_mailbox.RegisterHandler(
                  "refresh_rate_change",
                  this.OnRefreshRateChangeMessage,
                );
            } catch (e) {
              console.log("Failed to open settings mailbox:" + e);
            }
          });
        }
        OnWorkshopStateChangedMessage(e) {
          this.workshopStateChangedCanary++;
        }
        OnChangeRouteMessage(e) {
          this.m_bIsSettingApp &&
            this.setRoute(e.page, e.section, e.sectionParams);
        }
        OnAppConfigChangedMessage(e) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            if (e.deleted_appkeys.length)
              for (let t = this.apps.length - 1; t >= 0; t--)
                e.deleted_appkeys.indexOf(this.apps[t].key) >= 0 &&
                  this.apps.splice(t, 1);
            for (let t of e.updated_apps) {
              for (let e = 0; e < this.apps.length; e++)
                if (this.apps[e].key == t.key) {
                  !this.apps[e].is_autolaunch &&
                    t.is_autolaunch &&
                    this.SetRestartRequired(),
                    (this.apps[e] = Object.assign(
                      Object.assign(Object.assign({}, this.apps[e]), {
                        current_scene_process: !1,
                      }),
                      t,
                    )),
                    (t = null);
                  break;
                }
              t && (this.apps.push(t), this.probablyOwnedAppkeys.add(t.key));
            }
          });
        }
        OnRefreshRateChangeMessage(e) {
          this.onAppRestartRequired &&
            this.onAppRestartRequired(e.app_supports);
        }
        onHashChanged() {
          if (!this.m_bIsSettingApp) return;
          const e = window.location.hash;
          0 === e.indexOf("#")
            ? (this.route = e.substring(1).split("/"))
            : (this.route = []);
        }
        get routePage() {
          return this.route.length >= 1 ? this.route[0] : null;
        }
        get routePageSection() {
          return this.route.length >= 2 ? this.route[1] : null;
        }
        get routePageSectionParams() {
          return this.route.slice(2);
        }
        setRoutePage(e) {
          this.setRoute(e);
        }
        setRoutePageSection(e) {
          this.setRoute(this.routePage, e);
        }
        setRoutePageSectionParams(e) {
          this.setRoute(this.routePage, this.routePageSection, e);
        }
        setRoute(e, t, r) {
          if (this.m_bIsSettingApp) {
            (e = null != e ? e : ""), (r = null != r ? r : []);
            const n = t ? [e, t, ...r] : [e],
              i = n.join("/");
            window.location.hash.substring(1) != i &&
              ((window.location.hash = i), (this.route = n));
          } else
            this.m_mailbox.connected &&
              this.m_mailbox.SendMessage(this.MailboxName, {
                type: v,
                page: e,
                section: t,
                sectionParams: r,
              });
        }
        SetDashboardFadeSupression(e, t) {
          this.m_mailbox.connected &&
            this.m_mailbox.SendMessage(l.M9, {
              type: c.cQ.k_sSetDashboardFadeSupressionMessage,
              suppress_dashboard_fade: t,
              for_id: e,
            });
        }
        SetDashboardForceBoundsVisible(e, t, r) {
          this.m_mailbox.connected &&
            this.m_mailbox.SendMessage(l.M9, {
              type: d.Qj,
              force_bounds_visible: r,
              for_overlay_key: e,
              for_id: t,
            });
        }
        SetRestartRequired() {
          this.onRestartRequired && this.onRestartRequired();
        }
        OnWebSocketOpen(e) {
          (this.connected = !0),
            this.WebSocketSend("settings_open"),
            window.addEventListener("beforeunload", () => {
              this.WebSocketSend("settings_close");
            }),
            b.GetSettingsInfo().then((e) => {
              this.systemInfo = e;
            }),
            b.GetAppList().then((e) => {
              this.OnVRAppList({ jsonid: "vr_app_list", apps: e });
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
          switch (t.jsonid) {
            case "vr_settings":
              this.OnVRSettings(t);
              break;
            case "vr_settings_schema":
              this.OnVRSettingsSchema(t);
              break;
            case "vr_audio_devices":
              this.OnVRAudioDevices(t);
              break;
            case "vr_app_list":
              this.OnVRAppList(t);
              break;
            default:
              t.jsonid
                ? console.log("Received unhandled event: " + t.jsonid)
                : console.log("Received unknown message: ", t);
          }
        }
        OnVRSettings(e) {
          for (let t in e.values) {
            const r = e.values[t];
            if (
              this.settings.get(t) != r ||
              this.m_mapSettingsLastWriteInfo.has(t)
            ) {
              if (this.settingsSchema) {
                const e = this.GetSettingSchema(t);
                e && e.requires_restart && this.SetRestartRequired();
              }
              this.SetSettingValueFromServer(t, r);
            }
          }
        }
        SetSettingValueFromServer(e, t) {
          const r = 1e3 * _.SERVER_SETTING_MERGE_DEFER_DURATION;
          if (this.m_mapSettingsLastWriteInfo.has(e)) {
            let n = this.m_mapSettingsLastWriteInfo.get(e);
            if (new Date().getTime() - n.nLastUserUpdateTime < r)
              return (
                window.clearTimeout(n.nPendingServerValueUpdateTimeout),
                void (n.nPendingServerValueUpdateTimeout = window.setTimeout(
                  () => {
                    this.SetSettingValueFromServer(e, t);
                  },
                  r,
                ))
              );
            window.clearTimeout(n.nPendingServerValueUpdateTimeout),
              this.m_mapSettingsLastWriteInfo.delete(e);
          }
          this.settings.set(e, t);
        }
        UpdateLastUserWriteTimeForSetting(e) {
          const t = new Date().getTime();
          this.m_mapSettingsLastWriteInfo.has(e)
            ? (this.m_mapSettingsLastWriteInfo.get(e).nLastUserUpdateTime = t)
            : this.m_mapSettingsLastWriteInfo.set(e, {
                nLastUserUpdateTime: t,
                nPendingServerValueUpdateTimeout: 0,
              });
        }
        OnVRSettingsSchema(e) {
          null == this.settingsSchema &&
            (console.log("Got vr settings schema"),
            (this.settingsSchema = e.schema),
            (this.showInternalSettings = e.is_steamvr_main));
        }
        AwaitInitialSettingsSchema() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            return (0, o.when)(() => !!this.settingsSchema);
          });
        }
        OnVRAudioDevices(e) {
          console.log("Got audio devices"), (this.audioDevices = e);
        }
        OnVRAppList(e) {
          (this.apps = e.apps),
            e.apps.map((e) => this.probablyOwnedAppkeys.add(e.key));
        }
        SettingNameMatches(e, t) {
          if (t && t.endsWith("*")) {
            let r = t.length - 1;
            return e.substr(0, r) == t.substr(0, r);
          }
          return e == t;
        }
        GetSettingSchema(e) {
          for (let t of this.settingsSchema)
            if (t.values)
              for (let r of t.values)
                if (r && this.SettingNameMatches(e, r.name)) return r;
          return null;
        }
        ResetSettingsValue(e) {
          this.SetSettingsValue(e, null);
        }
        ResetSettingsValues(...e) {
          e.forEach(this.ResetSettingsValue);
        }
        SetSettingsValue(e, t) {
          let r = this.GetSettingSchema(e);
          null != r
            ? (null != t &&
                ("int" == r.type
                  ? (t = parseInt(t))
                  : "float" == r.type
                    ? (t = parseFloat(t))
                    : "string" == r.type
                      ? (t = "" + t)
                      : "bool" == r.type && (t = !!t)),
              r.requires_restart && this.SetRestartRequired(),
              this.SetSettingsStringValueWithoutSchema(e, t))
            : console.log(
                "Tried to set setting " +
                  e +
                  " but it's not in the schema! Aborting",
              );
        }
        SetSettingsStringValueWithoutSchema(e, t) {
          if (VRHTML) {
            const r = e.split("/");
            if (4 != r.length || "" != r[0] || "settings" != r[1])
              throw new Error("bad settings path " + e);
            VRHTML.VRSettings.Set(r[2], r[3], t),
              this.settings.set(e, VRHTML.VRSettings.Get(r[2], r[3]));
          } else
            null != t && this.settings.set(e, t), this.pendingChanges.set(e, t);
          this.UpdateLastUserWriteTimeForSetting(e);
        }
        GetSettingsValue(e) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            return new Promise(function (t, r) {
              s()
                .get("/settings_get", { params: { name: e } })
                .then((e) => {
                  t(e.data);
                })
                .catch((e) => {
                  r(null);
                });
            });
          });
        }
        ResetAppSettings(e) {
          return s()
            .post("/app/resetsettings", { app: e })
            .then((t) => this.GetAppSettings(e))
            .catch((e) => {});
        }
        ResetAllAppResolutionScales() {
          return s()
            .post("/app/resetallresolutionscales")
            .then((e) => !0)
            .catch((e) => {});
        }
        SetAppSettings(e, t) {
          let r = Object.assign(Object.assign({}, t), { app: e });
          s().post("/app/setsettings", r);
          for (let e = 0; e < this.apps.length; e++)
            if (this.apps[e].key == r.app) {
              !this.apps[e].is_autolaunch &&
                t.is_autolaunch &&
                this.SetRestartRequired(),
                (this.apps[e] = Object.assign(
                  Object.assign({}, this.apps[e]),
                  t,
                ));
              break;
            }
        }
        GetAppSettings(e) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            return new Promise(function (t, r) {
              s()
                .get("/app/getsettings", { params: { app: e } })
                .then((e) => {
                  t(e.data);
                })
                .catch((e) => {
                  r(null);
                });
            });
          });
        }
        GetAppInfo(e) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            return new Promise(function (t, r) {
              s()
                .get("/app/getinfo", { params: { app: e } })
                .then((e) => {
                  t(e.data);
                })
                .catch((e) => {
                  r(null);
                });
            });
          });
        }
        get NumSupersamplingSteps() {
          return Math.floor((h - p + 0.5 * g) / g);
        }
        SliderposToSupersample(e) {
          return e > h ? h : e < p ? p : e;
        }
        get showAdvancedSettings() {
          return this.settings.get(u.F2);
        }
        set showAdvancedSettings(e) {
          this.SetSettingsValue(u.F2, e);
        }
        showBindingCallouts(e) {
          let t = { type: "request_binding_callouts", app_key: e };
          this.m_mailbox.SendMessage(l.I0, t);
        }
      }
      (_.SERVER_SETTING_MERGE_DEFER_DURATION = 1),
        (0, n.Cg)([o.observable], _.prototype, "connected", void 0),
        (0, n.Cg)([o.observable], _.prototype, "settingsSchema", void 0),
        (0, n.Cg)([o.observable], _.prototype, "settings", void 0),
        (0, n.Cg)([o.observable], _.prototype, "systemInfo", void 0),
        (0, n.Cg)([o.observable], _.prototype, "audioDevices", void 0),
        (0, n.Cg)([o.observable], _.prototype, "apps", void 0),
        (0, n.Cg)([o.observable], _.prototype, "probablyOwnedAppkeys", void 0),
        (0, n.Cg)([o.observable], _.prototype, "showInternalSettings", void 0),
        (0, n.Cg)(
          [o.observable],
          _.prototype,
          "workshopStateChangedCanary",
          void 0,
        ),
        (0, n.Cg)([o.observable], _.prototype, "pendingChanges", void 0),
        (0, n.Cg)([o.observable], _.prototype, "route", void 0),
        (0, n.Cg)([i.o], _.prototype, "OpenWebSocketToHost", null),
        (0, n.Cg)([i.o], _.prototype, "OnWorkshopStateChangedMessage", null),
        (0, n.Cg)([i.o], _.prototype, "OnChangeRouteMessage", null),
        (0, n.Cg)([i.o], _.prototype, "OnAppConfigChangedMessage", null),
        (0, n.Cg)([i.o], _.prototype, "OnRefreshRateChangeMessage", null),
        (0, n.Cg)([o.action.bound], _.prototype, "onHashChanged", null),
        (0, n.Cg)([o.computed], _.prototype, "routePage", null),
        (0, n.Cg)([o.computed], _.prototype, "routePageSection", null),
        (0, n.Cg)([o.computed], _.prototype, "routePageSectionParams", null),
        (0, n.Cg)([o.action], _.prototype, "setRoutePage", null),
        (0, n.Cg)([o.action], _.prototype, "setRoutePageSection", null),
        (0, n.Cg)([o.action], _.prototype, "setRoutePageSectionParams", null),
        (0, n.Cg)([o.action], _.prototype, "setRoute", null),
        (0, n.Cg)([i.o], _.prototype, "SetDashboardFadeSupression", null),
        (0, n.Cg)([i.o], _.prototype, "SetDashboardForceBoundsVisible", null),
        (0, n.Cg)([i.o], _.prototype, "SetRestartRequired", null),
        (0, n.Cg)([i.o], _.prototype, "OnWebSocketOpen", null),
        (0, n.Cg)([i.o], _.prototype, "OnWebSocketClose", null),
        (0, n.Cg)([i.o], _.prototype, "WebSocketSend", null),
        (0, n.Cg)([i.o], _.prototype, "OnWebSocketMessage", null),
        (0, n.Cg)([o.action], _.prototype, "OnVRSettings", null),
        (0, n.Cg)([o.action], _.prototype, "SetSettingValueFromServer", null),
        (0, n.Cg)([o.action], _.prototype, "OnVRSettingsSchema", null),
        (0, n.Cg)([o.action.bound], _.prototype, "ResetSettingsValue", null),
        (0, n.Cg)([o.action], _.prototype, "ResetSettingsValues", null),
        (0, n.Cg)([o.action], _.prototype, "SetSettingsValue", null),
        (0, n.Cg)(
          [o.action],
          _.prototype,
          "SetSettingsStringValueWithoutSchema",
          null,
        ),
        (0, n.Cg)([o.computed], _.prototype, "NumSupersamplingSteps", null);
      const b = new _();
      window.VRSettingsState = b;
    },
    6646: (e, t, r) => {
      "use strict";
      r.d(t, { X: () => c });
      var n = r(1635),
        i = r(3236),
        a = r(2505),
        s = r.n(a),
        o = r(7813);
      class l {
        constructor() {
          (this.m_wsWebSocketToServer = void 0),
            (this.status = void 0),
            (this.framerate = []),
            (this.notifications = []),
            (this.roomoverview = void 0),
            (this.connected = !1),
            (this.IdentifyController = function (e) {
              return e
                ? new Promise(function (t, r) {
                    s()
                      .get("/identify_controller.action?serial=" + e)
                      .then((e) => {
                        t();
                      })
                      .catch((e) => {
                        r(e);
                      });
                  })
                : null;
            }),
            (this.GetUSBDeviceList = function () {
              return new Promise(function (e, t) {
                s()
                  .get("/usb_topology.action")
                  .then((t) => {
                    e(t.data);
                  })
                  .catch((e) => {
                    t(e);
                  });
              });
            }),
            (this.ToggleRoomOverview = function (e) {
              return new Promise(function (t, r) {
                s()
                  .get(
                    "/toggle_room_overview_feed.action?enabled=" +
                      (e ? "1" : "0"),
                  )
                  .then((e) => {
                    t();
                  })
                  .catch((e) => {
                    r(e);
                  });
              });
            }),
            (0, o.makeObservable)(this);
        }
        OpenWebSocketToHost() {
          return new Promise((e, t) => {
            console.log("Connecting vrsystem..."),
              (this.m_wsWebSocketToServer = new WebSocket(
                "ws://" + window.location.host,
              )),
              this.m_wsWebSocketToServer.addEventListener("open", (t) => {
                this.OnWebSocketOpen(t), e();
              }),
              this.m_wsWebSocketToServer.addEventListener(
                "message",
                this.OnWebSocketMessage,
              ),
              this.m_wsWebSocketToServer.addEventListener(
                "close",
                this.OnWebSocketClose,
              );
          });
        }
        Init() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            (this.connected = !1),
              (this.framerate = []),
              (this.status = {
                jsonid: "",
                startup_info: "",
                status_string: "",
                is_main: !1,
                is_perforce: !1,
                hostname: "",
                states: [],
              }),
              (this.roomoverview = {
                jsonid: "",
                collision: [],
                playarea: [],
                devices: [],
                bounds_visible: !1,
                compositor_available: !1,
              }),
              yield this.OpenWebSocketToHost();
          });
        }
        OnWebSocketOpen(e) {
          (this.connected = !0),
            this.WebSocketSend("websocket_open"),
            window.addEventListener("beforeunload", () => {
              this.WebSocketSend("websocket_close");
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
          switch (t.jsonid) {
            case "vr_system_status":
              this.OnSystemStatusMessage(t);
              break;
            case "vr_framerate":
              this.OnFramerateMessage(t);
              break;
            case "vr_notifications":
              this.OnNotificationsMessage(t);
              break;
            case "vr_room_overview":
              this.OnRoomOverviewMessage(t);
              break;
            default:
              t.jsonid
                ? console.log("Received unhandled event: " + t.jsonid)
                : console.log("Received unknown message: ", t);
          }
        }
        OnSystemStatusMessage(e) {
          this.status = e;
        }
        OnFramerateMessage(e) {
          for (this.framerate.unshift(e); this.framerate.length > 60; )
            this.framerate.pop();
        }
        OnNotificationsMessage(e) {
          let t = e.notifications.map((e, t) => ({
            title: e.sTitle,
            description: e.sDescription,
            timestamp: e.sTimeStamp,
          }));
          this.notifications = t;
        }
        OnRoomOverviewMessage(e) {
          this.roomoverview = e;
        }
        LaunchApplication(e) {
          return new Promise(function (t, r) {
            s()
              .get("/steamvr_launch_application.action?param1=" + e)
              .then((e) => {
                t();
              })
              .catch((e) => {
                r(e);
              });
          });
        }
        TEMP_RegisterPollingWebsocketMessage(e, t) {
          setInterval(() => {
            s()
              .get(e)
              .then((e) => {
                this.OnWebSocketMessage({ data: JSON.stringify(e.data) });
              })
              .catch((e) => {});
          }, t);
        }
      }
      (0, n.Cg)([o.observable], l.prototype, "status", void 0),
        (0, n.Cg)([o.observable], l.prototype, "framerate", void 0),
        (0, n.Cg)([o.observable], l.prototype, "notifications", void 0),
        (0, n.Cg)([o.observable], l.prototype, "roomoverview", void 0),
        (0, n.Cg)([o.observable], l.prototype, "connected", void 0),
        (0, n.Cg)([i.o], l.prototype, "OpenWebSocketToHost", null),
        (0, n.Cg)([i.o], l.prototype, "OnWebSocketOpen", null),
        (0, n.Cg)([i.o], l.prototype, "OnWebSocketClose", null),
        (0, n.Cg)([i.o], l.prototype, "WebSocketSend", null),
        (0, n.Cg)([i.o], l.prototype, "OnWebSocketMessage", null),
        (0, n.Cg)(
          [i.o],
          l.prototype,
          "TEMP_RegisterPollingWebsocketMessage",
          null,
        );
      const c = new l();
      window.VRSystemState = c;
    },
    3696: (e, t, r) => {
      "use strict";
      r.d(t, { H: () => p });
      var n = r(1635),
        i = r(3236),
        a = r(7813),
        s = r(6090),
        o = r(9728),
        l = r(1333),
        c = r(1835),
        u = r(8313),
        d = r(1295);
      class m {
        constructor() {
          (this.m_bShowFloor = !1),
            (this.m_bShowFloorFar = !1),
            (this.m_fBackgroundDomeRadius = void 0),
            (this.m_fBackgroundOffsetX = void 0),
            (this.m_fBackgroundOffsetZ = void 0),
            (this.m_bFloorDetectAtStart = void 0),
            (this.m_bBoundsVisible = void 0),
            (this.m_bHmdOutOfBoundsStrict = void 0),
            (this.m_bOkOutsideOfPlayspace = !1),
            (this.m_eRoomSetupStep = 0),
            (this.m_bRoomSetupAllowsCancel = !0),
            (this.m_nSilentRoomSetupTimeout = void 0),
            (0, a.makeObservable)(this);
        }
        Init() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            yield this.Load(),
              (0, a.autorun)(() => this.Save()),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.RegisterForChaperoneStatusEvents(
                  this.onChaperoneStatusEvents,
                ),
              (0, a.reaction)(
                () => this.m_bOkOutsideOfPlayspace,
                (e) => {
                  null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VRChaperone.SetOkOutsidePlayspace(e);
                },
              ),
              (0, a.reaction)(
                () => o.G.Instance.SceneAppKey,
                (e) => {
                  this.m_bOkOutsideOfPlayspace = !1;
                },
              ),
              this.m_bFloorDetectAtStart && this.restartSilentRoomSetup();
          });
        }
        get supportsInHmdRoomSetup() {
          return (
            !!d.H.BHasMutualCapability(5) &&
            (!!(null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VRProperties.GetBoolProperty(
                  "/user/head",
                  s.fD.SupportsInHMDRoomSetup_Bool,
                )) ||
              !!l.HR.settings.get("/settings/dashboard/showNewRoomSetup"))
          );
        }
        get roomSetupStep() {
          return this.m_eRoomSetupStep;
        }
        get roomSetupAllowsCancel() {
          return this.m_bRoomSetupAllowsCancel;
        }
        restartSilentRoomSetup() {
          console.log("Enabling silent floor detection"),
            this.m_nSilentRoomSetupTimeout &&
              window.clearTimeout(this.m_nSilentRoomSetupTimeout);
          this.setRoomSetupStep(6),
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRChaperoneSetup.ResetPlayspaceFloorHeight(s._1.CV),
            (this.m_nSilentRoomSetupTimeout = window.setTimeout(() => {
              6 == this.m_eRoomSetupStep &&
                (console.log("Disabling silent floor detection"),
                null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.VRChaperoneSetup.CommitSilentPlayspaceFloorHeight(),
                this.setRoomSetupStep(0),
                (this.m_nSilentRoomSetupTimeout = void 0));
            }, 5e3));
        }
        startRequiredRoomSetupIfNeeded() {
          var e, t;
          if (
            null === (t = (e = VRHTML.VRChaperoneSetup).IsRoomSetupDone) ||
            void 0 === t
              ? void 0
              : t.call(e)
          )
            return void console.log(
              "Skipping redundent call to startRequiredRoomSetupIfNeeded. Calibration state ok.",
            );
          let r = !!(null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.VRProperties.GetBoolProperty(
                "/user/head",
                s.fD.VRLinkClientHMDSupportsRoomSetupRequests_Bool,
              ));
          r &&
            c.SW.activeLinkServer &&
            console.error(
              "startRequiredRoomSetupIfNeeded not supported in current configuration",
              r,
              c.SW.activeLinkServer,
            ),
            (this.m_bRoomSetupAllowsCancel = !1),
            (0 != this.m_eRoomSetupStep &&
              2 != this.m_eRoomSetupStep &&
              6 != this.m_eRoomSetupStep &&
              1 != this.m_eRoomSetupStep) ||
              (console.log("Starting required roomsetup"),
              this.setRoomSetupStep(3));
        }
        setRoomSetupStep(e, t) {
          var r;
          let n = !!(null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.VRProperties.GetBoolProperty(
                "/user/head",
                s.fD.VRLinkClientHMDSupportsRoomSetupRequests_Bool,
              ));
          if (
            !!(null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VRProperties.GetBoolProperty(
                  "/user/head",
                  s.fD.VRLinkClientHMDSupportsRoomSetupRequests_Bool,
                )) &&
            c.SW.activeLinkServer
          ) {
            const t = (function (e) {
              switch (e) {
                case 1:
                  return s.$Z.RecenterCountdown;
                case 3:
                  return s.$Z.RoomSetupFloor;
                case 2:
                  return s.$Z.FloorAdjustExisting;
                case 7:
                  return s.$Z.RoomSetupFull;
                default:
                  return s.$Z.Invalid;
              }
            })(e);
            t != s.$Z.Invalid
              ? (console.log(
                  `Remoting RoomSetupStep change request to client ${e}`,
                ),
                VRHTML.VRLink.SendRoomSetupRequest(t))
              : console.log(`Invalid remote RoomSetupStep change request ${e}`);
          } else {
            if (
              (n ||
                (n =
                  null !==
                    (r = l.HR.settings.get(
                      "/settings/dashboard/showNewRoomSetup",
                    )) &&
                  void 0 !== r &&
                  r),
              !n &&
                (function (e) {
                  switch (e) {
                    case 0:
                    case 1:
                      return !1;
                    default:
                      return !0;
                  }
                })(e))
            )
              return void console.warn(
                "HMD doesnt support setRoomSetupStep " + JSON.stringify(e),
              );
            (2 != e && 3 != e) ||
              4 == this.m_eRoomSetupStep ||
              null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRChaperoneSetup.ResetPlayspaceFloorHeight(
                2 == e ? s._1.Manual : s._1.PendingResetIfNeeded,
              ),
              7 == e
                ? (null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VRChaperoneSetup.ResetPlayspaceBoundsDrawing(),
                  null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VRChaperoneSetup.ResetPlayspaceRadius(),
                  null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VRChaperoneSetup.ResetPlayspaceFloorHeight(
                      s._1.PendingResetIfNeeded,
                    ))
                : 4 == e &&
                  3 == this.m_eRoomSetupStep &&
                  (null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VRChaperoneSetup.ResetPlayspaceRadius()),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRChaperoneSetup.SetPlayspaceMode(
                  (function (e) {
                    switch (e) {
                      case 4:
                        return u.Fv.Circle;
                      case 5:
                        return u.Fv.Drawn;
                      case 7:
                        return u.Fv.Full;
                      default:
                        return u.Fv.None;
                    }
                  })(e),
                ),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRChaperoneSetup.NotifyRoomSetupStep(e, !!t),
              (this.m_eRoomSetupStep = e);
          }
        }
        Load() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            var e, t, r, n, i, a;
            (this.m_bShowFloor =
              null !== (e = l.HR.settings.get("/settings/steamvr/showFloor")) &&
              void 0 !== e &&
              e),
              (this.m_bShowFloorFar =
                null !==
                  (t = l.HR.settings.get("/settings/steamvr/showFloorFar")) &&
                void 0 !== t &&
                t),
              (this.m_fBackgroundDomeRadius =
                null !==
                  (r = l.HR.settings.get(
                    "/settings/steamvr/backgroundDomeRadius",
                  )) && void 0 !== r
                  ? r
                  : 20),
              (this.m_fBackgroundOffsetX =
                null !==
                  (n = l.HR.settings.get(
                    "/settings/steamvr/backgroundOffsetX",
                  )) && void 0 !== n
                  ? n
                  : 0),
              (this.m_fBackgroundOffsetZ =
                null !==
                  (i = l.HR.settings.get(
                    "/settings/steamvr/backgroundOffsetZ",
                  )) && void 0 !== i
                  ? i
                  : 0),
              (this.m_bFloorDetectAtStart =
                null !==
                  (a = l.HR.settings.get(
                    "/settings/steamvr/floorDetectAtStart",
                  )) && void 0 !== a
                  ? a
                  : 0);
          });
        }
        Save() {
          return (0, n.sH)(this, void 0, void 0, function* () {});
        }
        onChaperoneStatusEvents(e) {
          const t = !!(1 & e),
            r = !!(2 & e);
          t != this.m_bBoundsVisible && (this.m_bBoundsVisible = t),
            r != this.m_bHmdOutOfBoundsStrict &&
              (this.m_bHmdOutOfBoundsStrict = r);
        }
      }
      (0, n.Cg)([a.observable], m.prototype, "m_bShowFloor", void 0),
        (0, n.Cg)([a.observable], m.prototype, "m_bShowFloorFar", void 0),
        (0, n.Cg)(
          [a.observable],
          m.prototype,
          "m_fBackgroundDomeRadius",
          void 0,
        ),
        (0, n.Cg)([a.observable], m.prototype, "m_fBackgroundOffsetX", void 0),
        (0, n.Cg)([a.observable], m.prototype, "m_fBackgroundOffsetZ", void 0),
        (0, n.Cg)([a.observable], m.prototype, "m_bFloorDetectAtStart", void 0),
        (0, n.Cg)([a.observable], m.prototype, "m_bBoundsVisible", void 0),
        (0, n.Cg)(
          [a.observable],
          m.prototype,
          "m_bHmdOutOfBoundsStrict",
          void 0,
        ),
        (0, n.Cg)(
          [a.observable],
          m.prototype,
          "m_bOkOutsideOfPlayspace",
          void 0,
        ),
        (0, n.Cg)([a.observable], m.prototype, "m_eRoomSetupStep", void 0),
        (0, n.Cg)(
          [a.observable],
          m.prototype,
          "m_bRoomSetupAllowsCancel",
          void 0,
        ),
        (0, n.Cg)([a.computed], m.prototype, "supportsInHmdRoomSetup", null),
        (0, n.Cg)([a.action], m.prototype, "restartSilentRoomSetup", null),
        (0, n.Cg)(
          [a.action],
          m.prototype,
          "startRequiredRoomSetupIfNeeded",
          null,
        ),
        (0, n.Cg)([a.action], m.prototype, "setRoomSetupStep", null),
        (0, n.Cg)([i.o], m.prototype, "Load", null),
        (0, n.Cg)([i.o], m.prototype, "Save", null),
        (0, n.Cg)(
          [a.action.bound],
          m.prototype,
          "onChaperoneStatusEvents",
          null,
        );
      const p = new m();
      window.ConstructStore = p;
    },
    3689: (e, t, r) => {
      "use strict";
      r.d(t, { DZ: () => f, g: () => y });
      var n = r(1635),
        i = r(7813),
        a = r(1651),
        s = r(1909),
        o = r(3714),
        l = r(3696),
        c = r(6090),
        u = r(1333),
        d = r(1835),
        m = r(1295),
        p = r(9728),
        h = r(3606),
        g = r(6379),
        v = r(2929),
        _ = r(9674);
      class b {
        get partialParams() {
          return "function" == typeof this.m_PartialParams
            ? this.m_PartialParams()
            : this.m_PartialParams;
        }
        get actionID() {
          return this.m_unActionID;
        }
        get isAlive() {
          return this.m_bAlive;
        }
        get isValid() {
          return this.isAlive && null != this.partialParams;
        }
        get isActive() {
          var e, t;
          return (
            null !==
              (t =
                null === (e = this.protoForSteam) || void 0 === e
                  ? void 0
                  : e.active) &&
            void 0 !== t &&
            t
          );
        }
        get isEnabled() {
          var e, t;
          return (
            null ===
              (t =
                null === (e = this.protoForSteam) || void 0 === e
                  ? void 0
                  : e.enabled) ||
            void 0 === t ||
            t
          );
        }
        constructor(e, t) {
          (this.m_Callbacks = new a.l()),
            (this.m_bAlive = !0),
            (this.m_PartialParams = void 0),
            (0, i.makeObservable)(this),
            (this.m_unActionID = e),
            this.SetParams(t);
        }
        SetParams(e) {
          this.m_PartialParams = e;
        }
        Destroy() {
          this.m_bAlive &&
            ((this.m_bAlive = !1), this.m_Callbacks.ClearAllCallbacks());
        }
        RegisterForActionInvoked(e) {
          return this.m_Callbacks.Register(e);
        }
        Invoke(...e) {
          this.m_Callbacks.Dispatch(...e);
        }
        get protoForSteam() {
          if (!this.isValid || !this.isAlive) return;
          if (!this.partialParams) return;
          return Object.assign(
            Object.assign({ enabled: !0 }, this.partialParams),
            { action_id: this.actionID },
          );
        }
      }
      (0, n.Cg)([i.observable], b.prototype, "m_bAlive", void 0),
        (0, n.Cg)([i.observable], b.prototype, "m_PartialParams", void 0),
        (0, n.Cg)([i.computed.struct], b.prototype, "partialParams", null),
        (0, n.Cg)([i.computed], b.prototype, "isAlive", null),
        (0, n.Cg)([i.computed], b.prototype, "isValid", null),
        (0, n.Cg)([i.computed], b.prototype, "isActive", null),
        (0, n.Cg)([i.computed], b.prototype, "isEnabled", null),
        (0, n.Cg)([i.action], b.prototype, "SetParams", null),
        (0, n.Cg)([i.action], b.prototype, "Destroy", null),
        (0, n.Cg)([i.computed.struct], b.prototype, "protoForSteam", null);
      class S {
        constructor() {
          (this.m_unNextDashboardActionID = null),
            (this.m_mapActions = new Map()),
            (0, i.makeObservable)(this),
            (this.m_unNextDashboardActionID = v.A);
        }
        Init() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            s.p.SteamVR.SetImplementation(
              "DashboardActionInvoked",
              ({ action_id: e, toggle_value: t }) => {
                var r;
                null === (r = this.GetAction(e)) || void 0 === r || r.Invoke(t);
              },
            ),
              (f[8] = y.CreateAction(
                () => {
                  if (!_.T.isOOBE)
                    return {
                      display_name: (0, o.we)("#Button_Recenter"),
                      invocation: 1,
                      icon: { enum: 3 },
                    };
                },
                () => {
                  l.H.setRoomSetupStep(1);
                },
              )),
              (f[7] = y.CreateAction(() => {
                if (l.H.supportsInHmdRoomSetup && !_.T.isOOBE)
                  return {
                    display_name: (0, o.we)("#MenuPlayspaceMenu"),
                    icon: { enum: 12 },
                  };
              })),
              (f[10] = y.CreateAction(
                () => {
                  if (l.H.supportsInHmdRoomSetup && !_.T.isOOBE)
                    return {
                      display_name: (0, o.we)("#MenuPlayspaceSetup"),
                      invocation: 1,
                      icon: { enum: 12 },
                    };
                },
                () => {
                  l.H.setRoomSetupStep(7);
                },
              )),
              (f[9] = y.CreateAction(
                () => {
                  if (l.H.supportsInHmdRoomSetup && !_.T.isOOBE)
                    return {
                      display_name: (0, o.we)(
                        "#MenuPlayspaceAdjustFloorHeight",
                      ),
                      invocation: 1,
                      icon: { enum: 13 },
                    };
                },
                () => {
                  l.H.setRoomSetupStep(2);
                },
              )),
              (f[11] = y.CreateAction(
                () => {
                  if (l.H.supportsInHmdRoomSetup && !_.T.isOOBE)
                    return { display_name: "Clear Playspace", invocation: 1 };
                },
                () => {
                  d.SW.activeLinkServer
                    ? VRHTML.VRLink.SendRoomSetupRequest(c.$Z.ClearRoomSetup)
                    : VRHTML.VRChaperoneSetup.ClearRoomSetup();
                },
              )),
              (f[2] = y.CreateAction(
                () => {
                  var e;
                  if (
                    m.H.BHasMutualCapability(5) &&
                    !m.H.BHasMutualCapability(6) &&
                    (null ===
                      (e = u.HR.settings.get(
                        "/settings/dashboard/allowExitVR",
                      )) ||
                      void 0 === e ||
                      e)
                  )
                    return {
                      display_name: (0, o.we)("#PowerMenuExitVR"),
                      invocation: 1,
                      icon: { enum: 10 },
                    };
                },
                () => {
                  null === VRHTML || void 0 === VRHTML || VRHTML.QuitSteamVR();
                },
              )),
              (f[3] = y.CreateAction(
                () => {
                  if (
                    m.H.BHasMutualCapability(5) &&
                    !m.H.BHasMutualCapability(6) &&
                    u.HR.settings.get("/settings/dashboard/allowSystemShutdown")
                  )
                    return {
                      display_name: (0, o.we)("#PowerMenuShutdown"),
                      invocation: 1,
                      icon: { enum: 11 },
                    };
                },
                () => {
                  null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.SystemShutdownMachine();
                },
              )),
              (f[4] = y.CreateAction(
                () => {
                  if (g.c.showRoomViewButton && !_.T.isOOBE)
                    return {
                      display_name: (0, o.we)("#Toggle_Room_View"),
                      invocation: 2,
                      active: g.c.roomViewEnabled,
                      enabled:
                        null === VRHTML || void 0 === VRHTML
                          ? void 0
                          : VRHTML.VROverlayInternal.HasCameraRoomViewCapability(),
                      icon: { enum: 2 },
                      icon_active: { enum: 1 },
                    };
                },
                (e) => {
                  var t;
                  return p.G.Instance.SceneAppKey
                    ? null ===
                        (t =
                          null === VRHTML || void 0 === VRHTML
                            ? void 0
                            : VRHTML.VROverlayInternal) || void 0 === t
                      ? void 0
                      : t.SetCameraRoomViewEnabledForSceneApps(e)
                    : u.HR.SetSettingsValue(h.Hh, e);
                },
              ));
          });
        }
        CreateAction(e, t) {
          const r = new b(this.m_unNextDashboardActionID++, e);
          return (
            this.m_mapActions.set(r.actionID, r),
            (0, i.when)(
              () => !r.isAlive,
              () => {
                this.m_mapActions.get(r.actionID) == r &&
                  this.m_mapActions.delete(r.actionID);
              },
            ),
            t && r.RegisterForActionInvoked(t),
            r
          );
        }
        GetAction(e) {
          return this.m_mapActions.get(e);
        }
      }
      (0, n.Cg)([i.observable], S.prototype, "m_mapActions", void 0),
        (0, n.Cg)([i.action], S.prototype, "CreateAction", null);
      const y = new S();
      window.dashboardActionStore = y;
      const f = {};
      window.globalActions = f;
    },
    1835: (e, t, r) => {
      "use strict";
      r.d(t, {
        Nr: () => R,
        Qj: () => M,
        SF: () => f,
        SW: () => D,
        Sm: () => T,
        tb: () => w,
      });
      var n = r(1635),
        i = r(6090),
        a = r(3236),
        s = r(7813),
        o = r(4574),
        l = r(1333),
        c = r(3606),
        u = r(2702),
        d = r(4007),
        m = r(4963),
        p = r(6013),
        h = r(8803),
        g = r(9728),
        v = r(795),
        _ = r(6921),
        b = r(3246),
        S = r(1295),
        y = r(8627);
      const f = [c.Sx, c.dU];
      var R, w, C;
      !(function (e) {
        (e[(e.Large = 0)] = "Large"), (e[(e.Medium = 1)] = "Medium");
      })(R || (R = {})),
        (function (e) {
          (e[(e.PlayArea = 0)] = "PlayArea"),
            (e[(e.Dashboard = 1)] = "Dashboard");
        })(w || (w = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.View = 1)] = "View"),
            (e[(e.Theater = 2)] = "Theater");
        })(C || (C = {}));
      const M = "set_dashboard_force_bounds_visible";
      class E {
        get activeFrame() {
          return v.JJ.GetFrame(this.m_unActiveFrameID);
        }
        set activeFrame(e) {
          this.m_unActiveFrameID = null == e ? void 0 : e.frameID;
        }
        get mainSteamFrame() {
          return v.JJ.GetFrame(this.m_unMainSteamFrameID);
        }
        SetMainSteamFrame(e) {
          this.m_unMainSteamFrameID = null == e ? void 0 : e.frameID;
        }
        get activeLinkServer() {
          return this.m_bIsLinkServer && this.m_bLinkStreamActive;
        }
        get activeLinkClient() {
          return this.m_bIsLinkClient && this.m_bLinkStreamActive;
        }
        constructor() {
          (this.m_mailbox = new i._n()),
            (this.m_bDashboardVisible = !1),
            (this.m_bPreviousDashboardVisible = void 0),
            (this.m_bShowLegacyDashboardBar = !1),
            (this.m_bVS = !1),
            (this.m_eVSMode = C.None),
            (this.m_sVSOverlayKey = void 0),
            (this.m_eTheaterStereo = i.MQ.Mono),
            (this.m_eIncognitoMode = i.rx.Unavailable),
            (this.m_mapActivePooledPopupRequests = new Map()),
            (this.m_fVRGamepadUI_MetersPerPixel = void 0),
            (this.m_bGamepadFocusActive = void 0),
            (this.m_bLinkStreamActive = void 0),
            (this.m_bIsLinkClient = void 0),
            (this.m_bIsLinkServer = void 0),
            (this.m_dashboardUserDistance = void 0),
            (this.m_dashboardUserScale = void 0),
            (this.m_unActiveFrameID = null),
            (this.m_unMainSteamFrameID = void 0),
            (this.m_bSuppressingFadeExternal = !1),
            (this.m_bTrackingRecording = !1),
            (this.m_bKeyboardVisible = !1),
            (this.m_bKeyboardDockedInDashboard = !1),
            (this.m_sKeyboardOverlayKey = null),
            (this.m_nKeyboardFlags = null),
            (this.m_rgForcingBoundsVisible = []),
            (this.m_sLastShownAppKey = ""),
            (this.m_bDashboardIsBeingDragged = !1),
            (0, s.makeObservable)(this);
        }
        Init() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            var e;
            yield this.LoadSessionDevData(),
              (0, s.autorun)(() => this.SaveSessionDevData()),
              (0, s.autorun)(this.updateBodyClasses),
              (this.m_bDashboardVisible =
                VRHTML.VRCompositor.IsDashboardVisibleInternal()),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.RegisterForGamepadFocusChangedEvents(
                  this.onGamepadFocusChanged,
                ),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.RegisterForLinkStreamStatusEvents(
                  this.onLinkStreamStatusEvents,
                ),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.RegisterForTrackingRecordingChangedEvents(
                  this.onTrackingRecordingChanged,
                ),
              null ===
                (e =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.RegisterForKeyboardInfoChangedEvents) ||
                void 0 === e ||
                e.call(VRHTML, this.onKeyboardInfoChanged),
              (0, s.reaction)(
                () => this.isTheaterMode,
                (e) => {
                  VRHTML.VRCompositor.SetAnimatedValue(
                    i.KI.TheaterFast,
                    e,
                    0.25,
                  ),
                    VRHTML.VRCompositor.SetAnimatedValue(
                      i.KI.TheaterSlow,
                      e,
                      e ? 2 : 1,
                    );
                },
              ),
              VRHTML.VRCompositor.SetAnimatedValue(
                i.KI.TheaterFast,
                this.isTheaterMode,
                0,
              ),
              VRHTML.VRCompositor.SetAnimatedValue(
                i.KI.TheaterSlow,
                this.isTheaterMode,
                0,
              ),
              (0, s.reaction)(
                () => this.m_bDashboardVisible,
                (e) => {
                  this.m_bPreviousDashboardVisible != e &&
                    m.u.Instance.playSound(
                      e ? m.j.DashboardOpen : m.j.DashboardClose,
                    ),
                    (this.m_bPreviousDashboardVisible = e);
                },
              ),
              this.SetVersionInfoPathProperties(),
              this.m_mailbox.Init(i.M9).then(() => {
                this.m_mailbox.RegisterHandler(
                  M,
                  this.onSetDashboardForceBoundsVisible,
                );
              });
          });
        }
        SetVersionInfoPathProperties() {
          var e, t;
          const r = new p.M2();
          r.set_version(
            null ===
              (e =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.SteamVRVersion) || void 0 === e
              ? void 0
              : e.call(VRHTML),
          ),
            r.set_webpack_build_timestamp(1773164968);
          const n =
            null ===
              (t =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRProperties) || void 0 === t
              ? void 0
              : t.GetStringProperty("/user/head", i.fD.DriverVersion_String);
          n && r.set_hmd_tracking_info(n), (0, h.Z)(r);
        }
        LoadSessionDevData() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            var e, t, r, n;
            const i = JSON.parse(
              null !== (e = sessionStorage.getItem(E.k_strSessionStorageKey)) &&
                void 0 !== e
                ? e
                : "{}",
            );
            (this.m_bShowLegacyDashboardBar =
              null !== (t = i.m_bShowLegacyBar) && void 0 !== t && t),
              (this.m_fVRGamepadUI_MetersPerPixel =
                null !== (r = i.m_fVRGamepadUI_MetersPerPixel) && void 0 !== r
                  ? r
                  : (0.167 / 120) * 1.1);
            for (const e of null !== (n = i.m_rgPooledPopups) && void 0 !== n
              ? n
              : [])
              this.m_mapActivePooledPopupRequests.set(e.dashboard_popup_id, e);
          });
        }
        SaveSessionDevData() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            const e = {
              m_bShowLegacyBar: this.m_bShowLegacyDashboardBar,
              m_rgPooledPopups: Array.from(
                this.m_mapActivePooledPopupRequests.values(),
              ),
              m_fVRGamepadUI_MetersPerPixel: this.m_fVRGamepadUI_MetersPerPixel,
            };
            sessionStorage.setItem(E.k_strSessionStorageKey, JSON.stringify(e));
          });
        }
        get showLoadingThrobberOrBootOverlay() {
          return (
            this.isVRGamepadUI &&
            !this.isVRGamepadUIReady &&
            !this.m_bShowLegacyDashboardBar
          );
        }
        get isTheaterMode() {
          return null != this.theaterFrame;
        }
        get theaterFrame() {
          return v.JJ.frames.find(
            (e) => e.docking.dockLocation == y.yW.Theater,
          );
        }
        get bootFrame() {
          return v.JJ.frames.find((e) => e.docking.dockLocation == y.yW.Boot);
        }
        get priorityGamepadFocusOverlay() {
          var e;
          const t = [y.yW.Theater, y.yW.World, y.yW.RightHand, y.yW.LeftHand];
          for (const n of t)
            for (const t of v.JJ.frames)
              if (
                t.docking.dockLocation == n &&
                (((null ==
                (r =
                  null === (e = t.activePage) || void 0 === e
                    ? void 0
                    : e.summonOverlayKey)
                  ? void 0
                  : r.startsWith(c.bl)) &&
                  r != c.wi) ||
                  r == c.P)
              )
                return t.activePage.summonOverlayKey;
          var r;
          return null;
        }
        get eTheaterCurvature() {
          return l.HR.settings.get(c.Ju);
        }
        get isUnifiedDashboard() {
          var e;
          return (
            !!(
              1 &
              (null !==
                (e =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VRProperties.GetInt32Property(
                        "/user/head",
                        i.fD.DashboardLinkSupport_Int32,
                      )) && void 0 !== e
                ? e
                : 0)
            ) &&
            D.isVRGamepadUI &&
            l.HR.settings.get(c.nJ)
          );
        }
        ToggleTheaterCurvature() {
          const e =
            this.eTheaterCurvature == o.Do.Curved ? o.Do.Flat : o.Do.Curved;
          l.HR.SetSettingsValue(c.Ju, e.toString());
        }
        onVrCmdToggleTheaterStereoRequested() {
          const e =
            this.m_eTheaterStereo == i.MQ.Mono ? i.MQ.Parallel : i.MQ.Mono;
          (this.m_eTheaterStereo = e),
            console.log("Theater stereoscopy set to", i.MQ[e]);
        }
        HideTheaterOverlay(e = y.yW.Dashboard, t) {
          var r;
          if (!D.theaterFrame) return;
          const n = D.theaterFrame;
          n.docking.SetDockLocation(e),
            t &&
              (null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VROverlay.ShowDashboard(
                  null === (r = n.activePage) || void 0 === r
                    ? void 0
                    : r.summonOverlayKey,
                ));
        }
        get allowCurvature() {
          var e;
          return (
            null ===
              (e = l.HR.settings.get("/settings/dashboard/allowCurvature")) ||
            void 0 === e ||
            e
          );
        }
        get isDarkMode() {
          return this.isTheaterMode;
        }
        setIncognitoMode(e) {
          this.m_eIncognitoMode = e;
        }
        get showIncognitoModeAction() {
          return !1;
        }
        get DashboardBarTint() {
          return this.isDarkMode ? { r: 0.1, g: 0.1, b: 0.1 } : null;
        }
        get GrabHandleTint() {
          return this.isDarkMode ? { r: 0.3, g: 0.3, b: 0.3 } : null;
        }
        get WorldLightingGain() {
          return this.isDarkMode ? { r: 0.2, g: 0.2, b: 0.2 } : null;
        }
        get isGroupMode() {
          return !1;
        }
        get allowScreenSharing() {
          return !1;
        }
        get isVRGamepadUIReady() {
          return d.Q.GetOverlayFlag(c.wi, i.NB.VisibleInDashboard);
        }
        get isVRGamepadUI() {
          return (
            !!l.HR.settings.get(c.qt) ||
            this.isVRGamepadUIReady ||
            this.hasVRGamepadUIDashboardBar
          );
        }
        get dashboardBarUsesPooledPopup() {
          return S.H.BHasMutualCapability(18);
        }
        get dashboardBarOverlayKey() {
          if (this.dashboardBarUsesPooledPopup) {
            const e = b.r.requests.find((e) => 1 == e.special_identifier);
            return null == e ? void 0 : e.popup_overlay_key;
          }
          return "valve.steam.gamepadui.bar";
        }
        get hasVRGamepadUIDashboardBar() {
          return d.Q.BOverlayExists(this.dashboardBarOverlayKey);
        }
        get currentDashboardPosition() {
          return this.isVRGamepadUI
            ? u.eo.VRGamepadUI
            : l.HR.settings.get(c.md);
        }
        get currentTheaterScreenSize() {
          return l.HR.settings.get(c.vo);
        }
        get currentTheaterScreenAlignment() {
          return l.HR.settings.get(c.xY);
        }
        updateBodyClasses() {
          this.isVRGamepadUI
            ? window.document.body.classList.add("VRGamepadUI")
            : window.document.body.classList.remove("VRGamepadUI");
        }
        onGamepadFocusChanged(e) {
          this.m_bGamepadFocusActive = e;
        }
        onLinkStreamStatusEvents(e) {
          const t = !!(1 & e),
            r = !!(2 & e),
            n = !!(4 & e);
          t != this.m_bLinkStreamActive && (this.m_bLinkStreamActive = t),
            r != this.m_bIsLinkClient && (this.m_bIsLinkClient = r),
            n != this.m_bIsLinkServer && (this.m_bIsLinkServer = n);
        }
        onTrackingRecordingChanged(e) {
          this.m_bTrackingRecording = e;
        }
        onKeyboardInfoChanged(e) {
          (this.m_bKeyboardVisible = e.visible),
            (this.m_bKeyboardDockedInDashboard = e.dockedInDashboard),
            (this.m_sKeyboardOverlayKey = e.overlayKey),
            (this.m_nKeyboardFlags = e.keyboardFlags);
        }
        get dashboardDistance() {
          if (this.m_dashboardUserDistance) return this.m_dashboardUserDistance;
          return {
            [u.eo.Near]: 0.925,
            [u.eo.Middle]: 1.05,
            [u.eo.Far]: 1.2,
            [u.eo.VRGamepadUI]: 1.15,
          }[D.currentDashboardPosition];
        }
        get curvatureDistance() {
          return this.dashboardDistance + 1.8;
        }
        get dashboardTranslation() {
          var e;
          let t =
            0.01 *
            (null !==
              (e = l.HR.settings.get(
                "/settings/dashboard/verticalOffsetCm_2",
              )) && void 0 !== e
              ? e
              : 0);
          t += {
            [u.eo.Near]: -0.07,
            [u.eo.Middle]: -0.08,
            [u.eo.Far]: -0.09,
            [u.eo.VRGamepadUI]: -0.09,
          }[D.currentDashboardPosition];
          const r = -this.dashboardDistance;
          return {
            channel: i.KI.TheaterFast,
            from: [0, t, r],
            to: [0, t - 0.15, r],
            interp: i.$.SmoothStep,
          };
        }
        get dashboardScale() {
          var e;
          if (this.m_dashboardUserScale) return this.m_dashboardUserScale;
          let t = 1;
          const r = D.currentDashboardPosition;
          return (
            (t =
              r == u.eo.Near
                ? 0.36
                : r == u.eo.Middle
                  ? 0.41
                  : r == u.eo.Far
                    ? 0.47
                    : 0.41),
            (t *=
              null !==
                (e =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VRProperties.GetFloatProperty(
                        i.Gz,
                        i.fD.DashboardScale_Float,
                      )) && void 0 !== e
                ? e
                : 1),
            t
          );
        }
        get sceneAppDimmingActive() {
          var e, t;
          if (D.activeLinkClient && g.G.Instance.SceneAppIsVRLink) return !1;
          const r = g.G.Instance.SceneApplicationState !== i.HW.None,
            n =
              this.m_bSuppressingFadeExternal &&
              (null ===
                (t =
                  null === (e = this.activeFrame) || void 0 === e
                    ? void 0
                    : e.activePage) || void 0 === t
                ? void 0
                : t.summonOverlayKey) == c.Wt,
            a = l.HR.settings.get(
              "/settings/dashboard/omitDashboardFadeWithSteamVRHome",
            ),
            s = !g.G.Instance.SceneAppIsHome || !a;
          return this.m_bDashboardVisible && s && !n && r;
        }
        onSetDashboardForceBoundsVisible(e) {
          e.force_bounds_visible
            ? this.m_rgForcingBoundsVisible.push({
                for_overlay_key: e.for_overlay_key,
                for_id: e.for_id,
              })
            : (this.m_rgForcingBoundsVisible =
                this.m_rgForcingBoundsVisible.filter(
                  (t) =>
                    t.for_overlay_key != e.for_overlay_key ||
                    t.for_id != e.for_id,
                ));
        }
        get shouldForceBoundsVisible() {
          var e, t;
          const r =
            null ===
              (t =
                null === (e = this.activeFrame) || void 0 === e
                  ? void 0
                  : e.activePage) || void 0 === t
              ? void 0
              : t.summonOverlayKey;
          return (
            this.m_bDashboardVisible &&
            this.m_rgForcingBoundsVisible.some((e) => e.for_overlay_key == r)
          );
        }
      }
      function T() {
        return (0, _.useObserver)(() => D.isVRGamepadUI);
      }
      (E.k_strSessionStorageKey = "DashboardStoreSessionStorage"),
        (0, n.Cg)([s.observable], E.prototype, "m_bDashboardVisible", void 0),
        (0, n.Cg)(
          [s.observable],
          E.prototype,
          "m_bShowLegacyDashboardBar",
          void 0,
        ),
        (0, n.Cg)([s.observable], E.prototype, "m_bVS", void 0),
        (0, n.Cg)([s.observable], E.prototype, "m_eVSMode", void 0),
        (0, n.Cg)([s.observable], E.prototype, "m_sVSOverlayKey", void 0),
        (0, n.Cg)([s.observable], E.prototype, "m_eTheaterStereo", void 0),
        (0, n.Cg)([s.observable], E.prototype, "m_eIncognitoMode", void 0),
        (0, n.Cg)(
          [s.observable],
          E.prototype,
          "m_mapActivePooledPopupRequests",
          void 0,
        ),
        (0, n.Cg)(
          [s.observable],
          E.prototype,
          "m_fVRGamepadUI_MetersPerPixel",
          void 0,
        ),
        (0, n.Cg)([s.observable], E.prototype, "m_bGamepadFocusActive", void 0),
        (0, n.Cg)([s.observable], E.prototype, "m_bLinkStreamActive", void 0),
        (0, n.Cg)([s.observable], E.prototype, "m_bIsLinkClient", void 0),
        (0, n.Cg)([s.observable], E.prototype, "m_bIsLinkServer", void 0),
        (0, n.Cg)(
          [s.observable],
          E.prototype,
          "m_dashboardUserDistance",
          void 0,
        ),
        (0, n.Cg)([s.observable], E.prototype, "m_dashboardUserScale", void 0),
        (0, n.Cg)([s.observable], E.prototype, "m_unActiveFrameID", void 0),
        (0, n.Cg)([s.computed], E.prototype, "activeFrame", null),
        (0, n.Cg)([s.observable], E.prototype, "m_unMainSteamFrameID", void 0),
        (0, n.Cg)([s.computed], E.prototype, "mainSteamFrame", null),
        (0, n.Cg)([s.action], E.prototype, "SetMainSteamFrame", null),
        (0, n.Cg)(
          [s.observable],
          E.prototype,
          "m_bSuppressingFadeExternal",
          void 0,
        ),
        (0, n.Cg)([s.observable], E.prototype, "m_bTrackingRecording", void 0),
        (0, n.Cg)([s.observable], E.prototype, "m_bKeyboardVisible", void 0),
        (0, n.Cg)(
          [s.observable],
          E.prototype,
          "m_bKeyboardDockedInDashboard",
          void 0,
        ),
        (0, n.Cg)([s.observable], E.prototype, "m_sKeyboardOverlayKey", void 0),
        (0, n.Cg)([s.observable], E.prototype, "m_nKeyboardFlags", void 0),
        (0, n.Cg)(
          [s.observable],
          E.prototype,
          "m_rgForcingBoundsVisible",
          void 0,
        ),
        (0, n.Cg)([s.observable], E.prototype, "m_sLastShownAppKey", void 0),
        (0, n.Cg)(
          [s.observable],
          E.prototype,
          "m_bDashboardIsBeingDragged",
          void 0,
        ),
        (0, n.Cg)([a.o], E.prototype, "LoadSessionDevData", null),
        (0, n.Cg)([a.o], E.prototype, "SaveSessionDevData", null),
        (0, n.Cg)(
          [s.computed],
          E.prototype,
          "showLoadingThrobberOrBootOverlay",
          null,
        ),
        (0, n.Cg)([s.computed], E.prototype, "isTheaterMode", null),
        (0, n.Cg)([s.computed], E.prototype, "theaterFrame", null),
        (0, n.Cg)([s.computed], E.prototype, "bootFrame", null),
        (0, n.Cg)(
          [s.computed],
          E.prototype,
          "priorityGamepadFocusOverlay",
          null,
        ),
        (0, n.Cg)([s.computed], E.prototype, "eTheaterCurvature", null),
        (0, n.Cg)([s.computed], E.prototype, "isUnifiedDashboard", null),
        (0, n.Cg)(
          [s.action],
          E.prototype,
          "onVrCmdToggleTheaterStereoRequested",
          null,
        ),
        (0, n.Cg)([s.action], E.prototype, "HideTheaterOverlay", null),
        (0, n.Cg)([s.computed], E.prototype, "allowCurvature", null),
        (0, n.Cg)([s.computed], E.prototype, "isDarkMode", null),
        (0, n.Cg)([s.action], E.prototype, "setIncognitoMode", null),
        (0, n.Cg)([s.computed], E.prototype, "showIncognitoModeAction", null),
        (0, n.Cg)([s.computed], E.prototype, "DashboardBarTint", null),
        (0, n.Cg)([s.computed], E.prototype, "GrabHandleTint", null),
        (0, n.Cg)([s.computed], E.prototype, "WorldLightingGain", null),
        (0, n.Cg)([s.computed], E.prototype, "isGroupMode", null),
        (0, n.Cg)([s.computed], E.prototype, "allowScreenSharing", null),
        (0, n.Cg)([s.computed], E.prototype, "isVRGamepadUIReady", null),
        (0, n.Cg)([s.computed], E.prototype, "isVRGamepadUI", null),
        (0, n.Cg)(
          [s.computed],
          E.prototype,
          "dashboardBarUsesPooledPopup",
          null,
        ),
        (0, n.Cg)([s.computed], E.prototype, "dashboardBarOverlayKey", null),
        (0, n.Cg)(
          [s.computed],
          E.prototype,
          "hasVRGamepadUIDashboardBar",
          null,
        ),
        (0, n.Cg)([s.computed], E.prototype, "currentDashboardPosition", null),
        (0, n.Cg)([s.computed], E.prototype, "currentTheaterScreenSize", null),
        (0, n.Cg)(
          [s.computed],
          E.prototype,
          "currentTheaterScreenAlignment",
          null,
        ),
        (0, n.Cg)([a.o], E.prototype, "updateBodyClasses", null),
        (0, n.Cg)([s.action.bound], E.prototype, "onGamepadFocusChanged", null),
        (0, n.Cg)(
          [s.action.bound],
          E.prototype,
          "onLinkStreamStatusEvents",
          null,
        ),
        (0, n.Cg)(
          [s.action.bound],
          E.prototype,
          "onTrackingRecordingChanged",
          null,
        ),
        (0, n.Cg)([s.action.bound], E.prototype, "onKeyboardInfoChanged", null),
        (0, n.Cg)([s.computed], E.prototype, "dashboardDistance", null),
        (0, n.Cg)([s.computed], E.prototype, "curvatureDistance", null),
        (0, n.Cg)([s.computed], E.prototype, "dashboardTranslation", null),
        (0, n.Cg)([s.computed], E.prototype, "dashboardScale", null),
        (0, n.Cg)([s.computed], E.prototype, "sceneAppDimmingActive", null),
        (0, n.Cg)(
          [s.action.bound],
          E.prototype,
          "onSetDashboardForceBoundsVisible",
          null,
        ),
        (0, n.Cg)([s.computed], E.prototype, "shouldForceBoundsVisible", null);
      const D = new E();
      window.DashboardStore = D;
    },
    4734: (e, t, r) => {
      "use strict";
      r.d(t, { Q: () => _ });
      var n = r(1635),
        i = r(795),
        a = r(4007),
        s = r(1909),
        o = r(7813),
        l = r(6090),
        c = r(3236),
        u = r(3606),
        d = r(3714),
        m = r(776),
        p = r(1333),
        h = r(9674);
      const g = new m.wd("DesktopStore");
      class v {
        constructor() {
          (this.m_mailbox = new l._n()),
            (this.m_setDesktopFrames = new Set()),
            (this.m_setDesktopWindowFrames = new Set()),
            (this.m_lastActiveDesktopOrWindowFrame = void 0),
            (this.m_mapAvailableDesktopWindows = new Map()),
            (this.m_flDebugInputFrameTime = 0),
            (this.m_mapDebugOverlayFrameTimes = new Map()),
            (0, o.makeObservable)(this);
        }
        Init() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            this.m_mailbox.Init(l.sn).then(() => {
              this.m_mailbox.RegisterHandler(
                "window_view_created",
                this.OnWindowViewCreatedMsg,
              ),
                this.m_mailbox.RegisterHandler(
                  "update_window_list",
                  this.OnUpdateWindowListMsg,
                ),
                this.m_mailbox.RegisterHandler(
                  "update_debug_info",
                  this.OnUpdateDebugInfo,
                ),
                this.m_mailbox.SendMessage("desktopview", {
                  type: "request_window_list_update",
                });
            }),
              s.p.SteamVR.SetImplementation(
                "DashboardDesktopWindowClicked",
                (e) => {
                  var t, r;
                  const n =
                      null !==
                        (r =
                          null === (t = e.window_id) || void 0 === t
                            ? void 0
                            : t.toString()) && void 0 !== r
                        ? r
                        : "",
                    a = this.windows.find((e) => e.hwnd == n);
                  i.JJ.HasFramesWithAssociatedSummonKeys(
                    null == a ? void 0 : a.overlay_key,
                  )
                    ? VRHTML.VROverlay.ShowDashboard(a.overlay_key)
                    : this.SpawnFrameForWindow(n);
                },
              ),
              (0, o.autorun)(() => {
                var e;
                const t =
                  null !==
                    (e = this.desktopFrames.find(
                      (e) => e.isActiveDashboardFrame,
                    )) && void 0 !== e
                    ? e
                    : this.desktopWindowFrames.find(
                        (e) => e.isActiveDashboardFrame,
                      );
                t &&
                  (0, o.runInAction)(
                    () => (this.m_lastActiveDesktopOrWindowFrame = t),
                  );
              }),
              g.IsDebugEnabled() &&
                (0, o.autorun)(() => {
                  g.Debug(
                    "Available Desktop Windows:",
                    JSON.parse(JSON.stringify(this.windows)),
                  );
                });
          });
        }
        get desktopFrames() {
          return Array.from(this.m_setDesktopFrames.values());
        }
        get desktopWindowFrames() {
          return Array.from(this.m_setDesktopWindowFrames.values());
        }
        get lastActiveDesktopOrWindowFrame() {
          var e, t;
          return (null === (e = this.m_lastActiveDesktopOrWindowFrame) ||
          void 0 === e
            ? void 0
            : e.state) == i.Iu.Alive
            ? this.m_lastActiveDesktopOrWindowFrame
            : null !== (t = this.desktopFrames[0]) && void 0 !== t
              ? t
              : this.desktopWindowFrames[0];
        }
        get desktops() {
          let e = [];
          const t = a.Q.overlays
            .map((e) => ({
              overlay: e,
              match: e.sOverlayKey.match(/^system\.desktop\.(\d+)$/),
            }))
            .filter(({ match: e }) => null != e)
            .map(({ overlay: e, match: t }) => ({
              overlay: e,
              unNumber: Number.parseInt(t[1]),
            }))
            .sort((e, t) => e.unNumber - t.unNumber);
          e = e.concat(
            t.map(({ overlay: e, unNumber: r }) => ({
              overlay: e,
              strLocalizedName:
                t.length > 1
                  ? (0, d.we)("#Desktop_X", r)
                  : (0, d.we)("#Desktop"),
            })),
          );
          const r = a.Q.GetOverlayInfo(u.Bn);
          return (
            r &&
              e.push({ overlay: r, strLocalizedName: (0, d.we)("#Desktop") }),
            e
          );
        }
        get windows() {
          if (!p.HR.settings.get(u.yl) || h.T.isOOBE) return [];
          const e = Array.from(this.m_mapAvailableDesktopWindows.values());
          return (
            e.sort((e, t) => {
              var r, n, i, a, s, o;
              let l;
              const c =
                  null !== (r = null == e ? void 0 : e.product_name) &&
                  void 0 !== r
                    ? r
                    : "",
                u =
                  null !== (n = null == t ? void 0 : t.product_name) &&
                  void 0 !== n
                    ? n
                    : "";
              if (((l = c.localeCompare(u)), 0 != l)) return l;
              const d =
                  null !== (i = null == e ? void 0 : e.title) && void 0 !== i
                    ? i
                    : "",
                m =
                  null !== (a = null == t ? void 0 : t.title) && void 0 !== a
                    ? a
                    : "";
              if (((l = d.localeCompare(m)), 0 != l)) return l;
              const p =
                  null !== (s = null == e ? void 0 : e.hwnd) && void 0 !== s
                    ? s
                    : "",
                h =
                  null !== (o = null == t ? void 0 : t.hwnd) && void 0 !== o
                    ? o
                    : "";
              return p.localeCompare(h);
            }),
            e
          );
        }
        SpawnFrameForWindow(e) {
          const t = { type: "request_spawn_window_view", hwnd: e };
          this.m_mailbox.SendMessage("desktopview", t);
        }
        OnDesktopFrameCreated(e) {
          this.m_setDesktopFrames.add(e);
        }
        OnDesktopFrameDestroyed(e) {
          this.m_setDesktopFrames.delete(e);
        }
        OnDesktopWindowFrameCreated(e) {
          this.m_setDesktopWindowFrames.add(e);
        }
        OnDesktopWindowFrameDestroyed(e) {
          this.m_setDesktopWindowFrames.delete(e);
        }
        OnWindowViewCreatedMsg(e) {
          VRHTML.VROverlay.ShowDashboard(e.overlay_key);
        }
        OnUpdateWindowListMsg(e) {
          var t;
          const r =
              null !== (t = null == e ? void 0 : e.windows) && void 0 !== t
                ? t
                : [],
            n = new Set(r.map((e) => e.hwnd));
          for (const e of r) this.m_mapAvailableDesktopWindows.set(e.hwnd, e);
          for (const e of this.m_mapAvailableDesktopWindows.keys())
            n.has(e) || this.m_mapAvailableDesktopWindows.delete(e);
        }
        OnUpdateDebugInfo(e) {
          e.overlay_frame_times.forEach((e) => {
            this.m_mapDebugOverlayFrameTimes.set(e.overlay_key, e.frame_time);
          }),
            (this.m_flDebugInputFrameTime = e.input_frame_time);
        }
        ShowMultitaskingView() {
          this.m_mailbox.SendMessage("desktopview", {
            type: "request_task_view",
          });
        }
      }
      (0, n.Cg)([o.observable], v.prototype, "m_setDesktopFrames", void 0),
        (0, n.Cg)(
          [o.observable],
          v.prototype,
          "m_setDesktopWindowFrames",
          void 0,
        ),
        (0, n.Cg)(
          [o.observable],
          v.prototype,
          "m_lastActiveDesktopOrWindowFrame",
          void 0,
        ),
        (0, n.Cg)(
          [o.observable],
          v.prototype,
          "m_mapAvailableDesktopWindows",
          void 0,
        ),
        (0, n.Cg)(
          [o.observable],
          v.prototype,
          "m_flDebugInputFrameTime",
          void 0,
        ),
        (0, n.Cg)(
          [o.observable],
          v.prototype,
          "m_mapDebugOverlayFrameTimes",
          void 0,
        ),
        (0, n.Cg)([o.computed], v.prototype, "desktopFrames", null),
        (0, n.Cg)([o.computed], v.prototype, "desktopWindowFrames", null),
        (0, n.Cg)(
          [o.computed],
          v.prototype,
          "lastActiveDesktopOrWindowFrame",
          null,
        ),
        (0, n.Cg)([o.computed], v.prototype, "desktops", null),
        (0, n.Cg)([o.computed], v.prototype, "windows", null),
        (0, n.Cg)([o.action], v.prototype, "OnDesktopFrameCreated", null),
        (0, n.Cg)([o.action], v.prototype, "OnDesktopFrameDestroyed", null),
        (0, n.Cg)([o.action], v.prototype, "OnDesktopWindowFrameCreated", null),
        (0, n.Cg)(
          [o.action],
          v.prototype,
          "OnDesktopWindowFrameDestroyed",
          null,
        ),
        (0, n.Cg)([c.o], v.prototype, "OnWindowViewCreatedMsg", null),
        (0, n.Cg)([o.action.bound], v.prototype, "OnUpdateWindowListMsg", null),
        (0, n.Cg)([o.action.bound], v.prototype, "OnUpdateDebugInfo", null),
        (0, n.Cg)([c.o], v.prototype, "ShowMultitaskingView", null);
      const _ = new v();
      window.desktopStore = _;
    },
    3732: (e, t, r) => {
      "use strict";
      r.d(t, { D: () => m });
      var n = r(1635),
        i = r(7813),
        a = r(1333),
        s = r(8803),
        o = r(1909),
        l = r(6013),
        c = r(3606),
        u = r(6090);
      class d {
        Init() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            (0, i.makeObservable)(this),
              (0, i.autorun)(() => this.updatePathProperties()),
              o.p.SteamVR.SetImplementation("SetDisplayBrightness", (e) => {
                this.setBrightnessUserValue(e.user_brightness_value);
              });
          });
        }
        setBrightnessDriverValue(e) {
          a.HR.SetSettingsValue(c.Y, e);
        }
        setBrightnessUserValue(e) {
          var t;
          this.setBrightnessDriverValue(
            (t = e) < 100 ? Math.pow(t / 100, 2.2) : t / 100,
          );
        }
        get brightnessDriverValue() {
          if (
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VRProperties.GetBoolProperty(
                  "/user/head",
                  u.fD.DisplaySupportsAnalogGain_Bool,
                )
          )
            return a.HR.settings.get(c.Y);
        }
        get brightnessUserValue() {
          var e, t;
          if (null != this.brightnessDriverValue)
            return (t =
              null !== (e = this.brightnessDriverValue) && void 0 !== e
                ? e
                : 0) < 0
              ? 0
              : t < 1
                ? 100 * Math.pow(t, 1 / 2.2)
                : 100 * t;
        }
        get minBrightnessUserValue() {
          if (null != this.minBrightnessDriverValue)
            return 100 * this.minBrightnessDriverValue;
        }
        get maxBrightnessUserValue() {
          if (null != this.maxBrightnessDriverValue)
            return 100 * this.maxBrightnessDriverValue;
        }
        get minBrightnessDriverValue() {
          return null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.VRProperties.GetFloatProperty(
                "/user/head",
                u.fD.DisplayMinUIAnalogGain_Float,
              );
        }
        get maxBrightnessDriverValue() {
          return null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.VRProperties.GetFloatProperty(
                "/user/head",
                u.fD.DisplayMaxAnalogGain_Float,
              );
        }
        updatePathProperties() {
          const e = new l.yn();
          e.set_display_brightness_user_value(this.brightnessUserValue),
            e.set_display_brightness_min(this.minBrightnessUserValue),
            e.set_display_brightness_max(this.maxBrightnessUserValue),
            (0, s.Z)(e);
        }
      }
      (0, n.Cg)([i.action], d.prototype, "setBrightnessDriverValue", null),
        (0, n.Cg)([i.action], d.prototype, "setBrightnessUserValue", null),
        (0, n.Cg)([i.computed], d.prototype, "brightnessDriverValue", null),
        (0, n.Cg)([i.computed], d.prototype, "brightnessUserValue", null),
        (0, n.Cg)([i.computed], d.prototype, "minBrightnessUserValue", null),
        (0, n.Cg)([i.computed], d.prototype, "maxBrightnessUserValue", null),
        (0, n.Cg)([i.computed], d.prototype, "minBrightnessDriverValue", null),
        (0, n.Cg)([i.computed], d.prototype, "maxBrightnessDriverValue", null);
      const m = new d();
      window.brightnessStore = m;
    },
    9961: (e, t, r) => {
      "use strict";
      r.d(t, { LD: () => c, wP: () => u });
      var n = r(1635),
        i = r(7891),
        a = r(7813),
        s = r(1835),
        o = r(4007),
        l = r(8627);
      class c extends i.s {
        constructor(e) {
          super(e),
            (this.m_bForceUniformHeightEverywhere = !1),
            (this.m_eAllowResizing = 1),
            (0, a.makeObservable)(this);
        }
        ForceUniformHeightEverywhere(e) {
          this.m_bForceUniformHeightEverywhere = e;
        }
        SetResizingAllowed(e) {
          this.m_eAllowResizing = e;
        }
        get scaleForBottomControls() {
          switch (this.frame.docking.visualDockLocation) {
            case l.yW.Theater:
              return 2;
            case l.yW.LeftHand:
            case l.yW.RightHand:
              return 0.5;
            default:
              return 1;
          }
        }
        get scaleForActivePage() {
          switch (this.frame.docking.visualDockLocation) {
            case l.yW.Theater:
              return s.SW.currentTheaterScreenSize == s.Nr.Large ? 2.1 : 1.65;
            case l.yW.LeftHand:
            case l.yW.RightHand:
              return 0.5;
            default:
              return 1;
          }
        }
        get resizingDisplacementFactor() {
          return this.frame.docking.visualDockLocation === l.yW.Theater
            ? 1.75
            : 0;
        }
        get mainPanelHeightOverride() {
          return this.m_bForceUniformHeightEverywhere ||
            this.frame.docking.visualDockLocation == l.yW.Theater
            ? 2
            : void 0;
        }
        get showResizeHandle() {
          switch (this.m_eAllowResizing) {
            case 0:
              return !1;
            case 1:
              return this.frame.docking.visualDockLocation != l.yW.Dashboard;
            case 2:
              return !0;
          }
        }
      }
      (0, n.Cg)(
        [a.observable],
        c.prototype,
        "m_bForceUniformHeightEverywhere",
        void 0,
      ),
        (0, n.Cg)([a.observable], c.prototype, "m_eAllowResizing", void 0),
        (0, n.Cg)(
          [a.action],
          c.prototype,
          "ForceUniformHeightEverywhere",
          null,
        ),
        (0, n.Cg)([a.action], c.prototype, "SetResizingAllowed", null),
        (0, n.Cg)([a.computed], c.prototype, "scaleForBottomControls", null),
        (0, n.Cg)([a.computed], c.prototype, "scaleForActivePage", null),
        (0, n.Cg)(
          [a.computed],
          c.prototype,
          "resizingDisplacementFactor",
          null,
        ),
        (0, n.Cg)([a.computed], c.prototype, "mainPanelHeightOverride", null),
        (0, n.Cg)([a.computed], c.prototype, "showResizeHandle", null);
      class u extends i.d {
        constructor(e) {
          super(e),
            (this.m_lastPanelContentSize = void 0),
            (0, a.makeObservable)(this);
        }
        Init() {
          this.OnDestroyed.Register(
            (0, a.autorun)(() => {
              var e;
              if (o.Q.BOverlayExists(this.framePage.summonOverlayKey)) {
                let t;
                try {
                  t = VRHTML.VROverlay.GetOverlayMouseScale(
                    null ===
                      (e = o.Q.GetOverlayInfo(
                        this.framePage.summonOverlayKey,
                      )) || void 0 === e
                      ? void 0
                      : e.sHandle,
                  );
                } catch (e) {}
                t &&
                  (this.m_lastPanelContentSize = {
                    unWidth: t.x,
                    unHeight: t.y,
                  });
              }
            }),
          );
        }
        get latestContentSize() {
          return this.m_lastPanelContentSize;
        }
        SetMainPanel(e) {
          if (!e) return { Unset: () => {} };
          e.lastDOMContentSize &&
            (this.m_lastPanelContentSize = {
              unWidth: e.lastDOMContentSize.clientWidth,
              unHeight: e.lastDOMContentSize.clientHeight,
            });
          return {
            Unset: e.RegisterForDOMContentSizeChangedCallback((e) => {
              e &&
                (this.m_lastPanelContentSize = {
                  unWidth: e.clientWidth,
                  unHeight: e.clientHeight,
                });
            }).Unregister,
          };
        }
      }
      (0, n.Cg)([a.observable], u.prototype, "m_lastPanelContentSize", void 0),
        (0, n.Cg)([a.computed], u.prototype, "latestContentSize", null),
        (0, n.Cg)([a.action], u.prototype, "SetMainPanel", null);
    },
    2329: (e, t, r) => {
      "use strict";
      r.d(t, { HC: () => Z, Iu: () => $, wI: () => J, kr: () => j });
      var n = r(1635),
        i = r(7813),
        a = r(296),
        s = r(6090),
        o = r(6540),
        l = r(1835),
        c = r(921),
        u = r(2156),
        d = r(3689),
        m = r(3481),
        p = r(677),
        h = r(795),
        g = r(3246),
        v = r(8627),
        _ = r(1333),
        b = r(2702),
        S = r(4007),
        y = r(3606),
        f = r(776),
        R = r(7663),
        w = r.n(R),
        C = r(1370),
        M = r(5308),
        E = r(7606),
        T = r(1139),
        D = r(6138);
      const B = (0, C.PA)(function (e) {
          var t, r, n;
          const { frame: i, children: a } = e,
            l =
              null !==
                (n =
                  null ===
                    (r =
                      null === (t = i.protoForSteam) || void 0 === t
                        ? void 0
                        : t.controls) || void 0 === r
                    ? void 0
                    : r.items_for_bottom_frame_controls) && void 0 !== n
                ? n
                : [];
          if (0 == l.length) return null;
          let c = [[]];
          for (const e of l) 1 == e.type ? c.push([]) : c[c.length - 1].push(e);
          return (
            (c = c.filter((e) => e.length > 0)),
            o.createElement(
              s.dL,
              { translation: { y: -0.04 } },
              o.createElement(
                s.Zk,
                {
                  debug_name: `legacy-frame-controls-${i.frameID}`,
                  curvature_origin_id: i.curvature.curvatureTransformOriginID,
                  origin: s.Oi.TopCenter,
                  meters_per_pixel: y.iZ,
                  reflect: 0.1,
                  interactive: !0,
                  lasermouse_filtering: s.o3.Default,
                  requires_laser: !0,
                },
                o.createElement(
                  "div",
                  { className: w().FrameControlsContainer },
                  c.map((e, t) =>
                    o.createElement(
                      "div",
                      { className: w().Section, key: t },
                      e.map((e) =>
                        o.createElement(V, {
                          control: e,
                          key: e.action_id,
                          translation: { x: 0, y: 0.15, z: 0.05 },
                        }),
                      ),
                    ),
                  ),
                  a,
                ),
              ),
            )
          );
        }),
        V = (0, C.PA)(function (e) {
          var t, r, n, i, a, s, l, c, u, m;
          const { control: p, translation: h } = e,
            g = d.g.GetAction(p.action_id),
            v =
              2 ==
              (null === (t = null == g ? void 0 : g.protoForSteam) ||
              void 0 === t
                ? void 0
                : t.invocation)
                ? !g.protoForSteam.active
                : void 0,
            _ =
              null ===
                (n =
                  null === (r = null == g ? void 0 : g.protoForSteam) ||
                  void 0 === r
                    ? void 0
                    : r.enabled) ||
              void 0 === n ||
              n;
          let b = (
            null === (i = null == g ? void 0 : g.protoForSteam) || void 0 === i
              ? void 0
              : i.active
          )
            ? null === (a = null == g ? void 0 : g.protoForSteam) ||
              void 0 === a
              ? void 0
              : a.icon_active
            : null === (s = null == g ? void 0 : g.protoForSteam) ||
                void 0 === s
              ? void 0
              : s.icon;
          b =
            null !==
              (c =
                null != b
                  ? b
                  : null === (l = null == g ? void 0 : g.protoForSteam) ||
                      void 0 === l
                    ? void 0
                    : l.icon) && void 0 !== c
              ? c
              : null === (u = null == g ? void 0 : g.protoForSteam) ||
                  void 0 === u
                ? void 0
                : u.icon_active;
          const S = o.useRef(void 0);
          return o.createElement(
            D.$,
            {
              className: (0, T.FH)("ButtonControl", "WithIcon", "LargeIcon"),
              onClick: () => g.Invoke(v),
              onMouseEnter: () => {
                var e;
                return null === (e = S.current) || void 0 === e
                  ? void 0
                  : e.show();
              },
              onMouseLeave: () => {
                var e;
                return null === (e = S.current) || void 0 === e
                  ? void 0
                  : e.hide();
              },
              enabled: _,
            },
            o.createElement(E.p, {
              text:
                null === (m = null == g ? void 0 : g.protoForSteam) ||
                void 0 === m
                  ? void 0
                  : m.display_name,
              translation: h,
              ref: S,
            }),
            o.createElement(M.D, { icon: b, variant: "legacy-vrwebui" }),
          );
        });
      var I = r(3714),
        A = r(1295),
        O = r(1651),
        k = r(249),
        L = r(1331),
        H = r(7727),
        P = r(9961),
        F = r(6539);
      function N(e) {
        var t, r, n, i;
        const { frame: l } = (0, H.N)();
        return (0, a.q3)(() => l.enablePositionalStereo)
          ? o.createElement(
              o.Fragment,
              null,
              o.createElement(
                s.dL,
                {
                  parent_id:
                    null === (t = l.activePage) || void 0 === t
                      ? void 0
                      : t.GetPanelAnchorID(s.Oi.CenterLeft),
                },
                o.createElement(s.uC, {
                  name:
                    null === (r = l.activePage) || void 0 === r
                      ? void 0
                      : r.summonOverlayKey,
                  channel: "front_left",
                }),
              ),
              o.createElement(
                s.dL,
                {
                  parent_id:
                    null === (n = l.activePage) || void 0 === n
                      ? void 0
                      : n.GetPanelAnchorID(s.Oi.CenterRight),
                },
                o.createElement(s.uC, {
                  name:
                    null === (i = l.activePage) || void 0 === i
                      ? void 0
                      : i.summonOverlayKey,
                  channel: "front_right",
                }),
              ),
            )
          : null;
      }
      var x = r(9674),
        W = r(3236);
      let z = class extends o.Component {
        constructor(e) {
          super(e), (this.state = { bActive: !1 });
        }
        componentDidUpdate(e, t) {
          e.bVisible != this.props.bVisible &&
            (this.props.bVisible || this.endMove());
        }
        startMove() {
          this.setState({ bActive: !0 }),
            window.addEventListener("mouseup", this.endMove),
            this.props.onStartMove && this.props.onStartMove();
        }
        endMove() {
          this.setState({ bActive: !1 }),
            window.removeEventListener("mouseup", this.endMove),
            this.props.onEndMove && this.props.onEndMove();
        }
        render() {
          var e;
          if (!this.props.bVisible) return null;
          const t =
            0.2667 * (null !== (e = this.props.scale) && void 0 !== e ? e : 1);
          return o.createElement(
            s.dL,
            { ignore_parent_scale: !0 },
            o.createElement(
              s.cB,
              {
                id: this.props.id,
                target_id: this.props.target_id,
                is_active: this.state.bActive,
              },
              o.createElement(
                s.Y4,
                { value: this.props.opacity },
                o.createElement(
                  s.N,
                  { color: this.props.tint },
                  o.createElement(
                    s.dL,
                    { translation: { y: t / 2 } },
                    o.createElement(
                      s.dL,
                      { rotation: { z: 90 } },
                      o.createElement(
                        s.Zk,
                        {
                          width: t,
                          interactive: !0,
                          requires_laser: !0,
                          debug_name: "ResizeHandle",
                          hide_lasermouse_when_clicking: !0,
                        },
                        o.createElement(
                          D.$,
                          {
                            className: "ResizeHandleButton",
                            key: "move",
                            onMouseDown: this.startMove,
                            onMouseUp: this.endMove,
                          },
                          o.createElement("div", {
                            className: (0, T.FH)("ResizeHandleBar", [
                              "ForceActive",
                              this.state.bActive,
                            ]),
                          }),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          );
        }
      };
      (0, n.Cg)([W.o], z.prototype, "startMove", null),
        (0, n.Cg)([W.o], z.prototype, "endMove", null),
        (z = (0, n.Cg)([C.PA], z));
      const G = (0, C.PA)(function (e) {
        var t, r;
        const { frame: n } = (0, H.N)(),
          i =
            null === (t = null == n ? void 0 : n.activePage) || void 0 === t
              ? void 0
              : t.mainPanelID;
        return o.createElement(
          s.dL,
          {
            parent_id:
              null === (r = null == n ? void 0 : n.activePage) || void 0 === r
                ? void 0
                : r.GetPanelAnchorID(s.Oi.BottomRight),
            translation: { x: 0.03 },
          },
          o.createElement(z, {
            id: i + ".ResizeHandle",
            target_id: i,
            bVisible: !0,
            scale: 0.5 * (null == n ? void 0 : n.size.scaleForBottomControls),
            tint: l.SW.GrabHandleTint,
          }),
        );
      });
      var U = r(5735);
      const q = new f.wd("Frame"),
        j = 20,
        K = [
          "Steam",
          "Desktop",
          "Desktop 1",
          "Desktop 2",
          "Desktop 3",
          "Now Playing",
          "Old Library",
          "Settings",
        ];
      var $;
      !(function (e) {
        (e[(e.Uninitialized = 0)] = "Uninitialized"),
          (e[(e.Pending = 1)] = "Pending"),
          (e[(e.Alive = 2)] = "Alive"),
          (e[(e.Destroyed = 3)] = "Destroyed");
      })($ || ($ = {}));
      class Z {
        RegisterComponent(e) {
          this.m_setComponents.add(e);
        }
        get OnDestroyed() {
          return this.m_OnDestroyed;
        }
        constructor(e, t) {
          (this.m_eState = $.Uninitialized),
            (this.m_sTitle = ""),
            (this.m_mapPages = new Map()),
            (this.m_unActivePageID = void 0),
            (this.m_unFrameMenuPopupID = void 0),
            (this.m_Icon = {}),
            (this.m_TabVisibility = {
              bVisibleInDashboardBar: !0,
              bVisibleInDashboardHamburgerMenu: !1,
            }),
            (this.m_rgMenuItems_LeftFrameMenu = []),
            (this.m_rgMenuItems_TabHoverMenu = []),
            (this.m_rgControlsItems_BottomFrameControls = []),
            (this.m_rgControlsItems_TabHoverControls = []),
            (this.m_vrAppEntry = void 0),
            (this.m_fnOnCloseRequested = void 0),
            (this.m_sCloseButtonLabel = void 0),
            (this.m_eCloseButtonIcon = void 0),
            (this.Log = new f.wd("Frame", () => this.logPrefix)),
            (this.m_unNextPageID = 1),
            (this.m_setComponents = new Set()),
            (this.sharing = void 0),
            (this.curvature = new L.vm(this)),
            (this.docking = new v.bQ(this)),
            (this.size = new P.LD(this)),
            (this.m_OnDestroyed = new O.l()),
            (this.m_bPendingLoadAppInfo = !1),
            (this.m_bPendingInitialSyncWithSteam = !1),
            (this.m_unFrameID = e),
            (this.m_unTabID = t),
            (this.m_sTitle = `Untitled Frame ${e}`),
            (0, i.makeObservable)(this);
        }
        get frameID() {
          return this.m_unFrameID;
        }
        get logPrefix() {
          let e = this.title;
          return (
            q.IsDebugEnabled() ||
              K.includes(e) ||
              (e = (0, U.hash)(e).substring(0, j)),
            e.length > j && (e = e.substring(0, j - 3) + "..."),
            `${this.frameID} "${e}"`
          );
        }
        get state() {
          return this.m_eState;
        }
        get isPendingStateConcluded() {
          return (
            this.state == $.Pending &&
            (!m.JJ.supportedFrameFeatures.steamHelpsRenderFrame ||
              !this.m_bPendingInitialSyncWithSteam) &&
            !this.m_bPendingLoadAppInfo
          );
        }
        SetTitle(e) {
          this.m_sTitle = null != e ? e : "";
        }
        get title() {
          return this.m_sTitle;
        }
        SetIcon(e) {
          this.m_Icon = null != e ? e : {};
        }
        get icon() {
          return Object.values(this.m_Icon).some((e) => null != e)
            ? this.m_Icon
            : { enum: 0 };
        }
        SetCloseButton(e, t, r) {
          (this.m_fnOnCloseRequested = e),
            (this.m_sCloseButtonLabel = t),
            (this.m_eCloseButtonIcon = r);
        }
        get canRequestClose() {
          return null != this.m_fnOnCloseRequested;
        }
        get closeButtonLabel() {
          var e;
          return null !== (e = this.m_sCloseButtonLabel) && void 0 !== e
            ? e
            : (0, I.we)("#Close");
        }
        get closeButtonIcon() {
          var e;
          return null !== (e = this.m_eCloseButtonIcon) && void 0 !== e
            ? e
            : 31;
        }
        RequestClose() {
          var e;
          null === (e = this.m_fnOnCloseRequested) ||
            void 0 === e ||
            e.call(this);
        }
        SetTabVisibility(e) {
          var t, r;
          this.m_TabVisibility = {
            bVisibleInDashboardBar:
              null !== (t = e.bVisibleInDashboardBar) && void 0 !== t
                ? t
                : this.m_TabVisibility.bVisibleInDashboardBar,
            bVisibleInDashboardHamburgerMenu:
              null !== (r = e.bVisibleInDashboardHamburgerMenu) && void 0 !== r
                ? r
                : this.m_TabVisibility.bVisibleInDashboardHamburgerMenu,
          };
        }
        get tabVisibility() {
          return this.m_TabVisibility;
        }
        get isCurrentlyVisible() {
          if (this.state != $.Alive) return !1;
          switch (this.docking.dockLocation) {
            case v.yW.Dashboard:
              return (
                !!l.SW.m_bDashboardVisible &&
                !!this.isActiveDashboardFrame &&
                (null == m.JJ.framePreviewingDashboardDockSnap ||
                  m.JJ.framePreviewingDashboardDockSnap == this)
              );
            case v.yW.LeftHand:
            case v.yW.RightHand:
            case v.yW.Theater:
            case v.yW.World:
              return !0;
          }
          return !1;
        }
        get shouldSuppressPanelBacksides() {
          return (
            this.docking.visualDockLocation == v.yW.LeftHand ||
            this.docking.visualDockLocation == v.yW.RightHand
          );
        }
        get activePageID() {
          return this.m_unActivePageID;
        }
        get activePage() {
          return this.m_mapPages.get(this.m_unActivePageID);
        }
        get isActiveDashboardFrame() {
          return l.SW.activeFrame === this;
        }
        get pageIDs() {
          return Array.from(this.m_mapPages.keys());
        }
        get pages() {
          return Array.from(this.m_mapPages.values());
        }
        get associatedSummonOverlayKeys() {
          return this.pages.map((e) => e.summonOverlayKey).filter(Boolean);
        }
        get tab() {
          return {
            tab_id: this.m_unTabID,
            associated_frame_id: this.frameID,
            display_name: this.title,
            icon: this.icon,
            visible_in_dashboard_bar: this.tabVisibility.bVisibleInDashboardBar,
            visible_in_dashboard_bar_hamburger_menu:
              this.tabVisibility.bVisibleInDashboardHamburgerMenu,
          };
        }
        get frameMenuPopup() {
          return g.r.GetRequestForID(this.m_unFrameMenuPopupID);
        }
        get shouldRenderFrameControls() {
          var e;
          return (
            !x.T.isOOBE &&
            !S.Q.GetOverlayFlag(
              null === (e = this.activePage) || void 0 === e
                ? void 0
                : e.summonOverlayKey,
              s.NB.MinimalControlBar,
            )
          );
        }
        get frameControlsTransformID() {
          return `frame:${this.frameID}:bottom-controls-transform`;
        }
        get enablePositionalStereo() {
          return this.docking.visualDockLocation != v.yW.Dashboard;
        }
        get allowInputCapture() {
          return (
            this.docking.dockLocation == v.yW.Theater ||
            _.HR.settings.get("/settings/dashboard/inputCaptureEnabled")
          );
        }
        LoadAppManifestInfo() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            const e = this.associatedSummonOverlayKeys[0],
              t = yield _.HR.GetAppInfo(e);
            (0, i.runInAction)(() => {
              (this.m_vrAppEntry = t),
                (this.docking.m_fLastTotalVisibleTimeInSeconds = (0, b.wT)(e)),
                (this.m_bPendingLoadAppInfo = !1);
            });
          });
        }
        OnPendingComplete() {
          var e, t, r, n;
          this.m_eState = $.Alive;
          const i =
            null === (e = this.activePage) || void 0 === e
              ? void 0
              : e.summonOverlayKey;
          if ("valve.steam.gamepadui.bootstrapper" == i)
            this.docking.SetDockLocation(v.yW.Boot);
          else if (
            null === (t = this.m_vrAppEntry) || void 0 === t
              ? void 0
              : t.starts_theater_mode
          )
            this.docking.SetInTheater();
          else if (i == y.P || (null == i ? void 0 : i.startsWith(y.bl))) {
            null !==
              (r = _.HR.settings.get(
                "/settings/dashboard/autoShowGameTheater",
              )) &&
            void 0 !== r &&
            r
              ? this.docking.SetInTheater()
              : null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VROverlay.ShowDashboard(
                  null === (n = this.activePage) || void 0 === n
                    ? void 0
                    : n.summonOverlayKey,
                );
          }
        }
        GetPageWithID(e) {
          return this.m_mapPages.get(e);
        }
        GetPageWithOverlaySummonKey(e) {
          if (e) return this.pages.find((t) => t.summonOverlayKey === e);
        }
        Init() {
          if (this.m_eState == $.Uninitialized) {
            this.OnDestroyed.Register(
              (0, i.reaction)(
                () => this.pages.filter((e) => e.state == h.JP.Destroyed),
                this.OnPagesDestroyed,
              ),
            ),
              (this.m_bPendingInitialSyncWithSteam =
                m.JJ.supportedFrameFeatures.steamHelpsRenderFrame),
              (this.m_bPendingLoadAppInfo = !0),
              this.LoadAppManifestInfo(),
              (this.m_eState = $.Pending),
              this.OnDestroyed.Register(
                (0, i.when)(
                  () => this.isPendingStateConcluded,
                  this.OnPendingComplete,
                ),
              ),
              this.OnDestroyed.Register(
                (0, i.autorun)(() => {
                  this.Log.IsDebugEnabled() &&
                    this.Log.Debug(
                      "Proto updated:",
                      JSON.parse(JSON.stringify(this.protoForSteam)),
                    );
                }),
              );
            for (const e of this.m_setComponents) e.Init();
            this.Log.Info("Frame initialized.");
          }
        }
        OnPagesDestroyed(e) {
          e.forEach((e) => {
            this.m_mapPages.delete(e.pageID);
          }),
            this.m_mapPages.has(this.m_unActivePageID) ||
              (this.m_unActivePageID = this.pageIDs[0]);
        }
        DestroyFrame() {
          this.m_eState != $.Destroyed &&
            (this.Log.Info("Frame destroyed."),
            (this.m_eState = $.Destroyed),
            this.m_OnDestroyed.Dispatch(),
            this.m_OnDestroyed.ClearAllCallbacks());
        }
        CreatePage() {
          const e = new p.sj(this, this.m_unNextPageID++);
          return (
            queueMicrotask(() =>
              (0, i.runInAction)(() => {
                this.m_mapPages.set(e.pageID, e),
                  this.m_unActivePageID || (this.m_unActivePageID = e.pageID);
              }),
            ),
            e
          );
        }
        SwitchToPage(e) {
          const t = e instanceof p.sj ? e.pageID : e;
          this.m_mapPages.has(t) && (this.m_unActivePageID = t);
        }
        CreateAction(...e) {
          const t = d.g.CreateAction(...e);
          return this.OnDestroyed.Register(() => t.Destroy()), t;
        }
        SetMenuItems(e, t) {
          (this.m_rgMenuItems_LeftFrameMenu = e),
            (this.m_rgMenuItems_TabHoverMenu = t);
        }
        SetControlsItems(e, t) {
          (this.m_rgControlsItems_BottomFrameControls = e),
            (this.m_rgControlsItems_TabHoverControls = t);
        }
        get protoForSteam() {
          var e, t, r, n, i, a;
          if (this.state == $.Uninitialized || this.state == $.Destroyed)
            return;
          const s = {
            frame_id: this.frameID,
            tmp_title: this.title,
            menu: {
              items_for_left_frame_menu:
                null !== (e = this.m_rgMenuItems_LeftFrameMenu) && void 0 !== e
                  ? e
                  : [],
              items_for_tab_hover_menu:
                null !== (t = this.m_rgMenuItems_TabHoverMenu) && void 0 !== t
                  ? t
                  : [],
            },
            controls: {
              items_for_bottom_frame_controls:
                null !== (r = this.m_rgControlsItems_BottomFrameControls) &&
                void 0 !== r
                  ? r
                  : [],
              items_for_tab_hover_menu:
                null !== (n = this.m_rgControlsItems_TabHoverControls) &&
                void 0 !== n
                  ? n
                  : [],
            },
          };
          m.JJ.supportedFrameFeatures.steamHelpsRenderFrame &&
            !m.JJ.supportedFrameFeatures.steamRendersFrameControls &&
            (function (e) {
              const t = e.controls.items_for_tab_hover_menu.map((e) => {
                let t;
                switch (e.type) {
                  case 2:
                    t = 3;
                    break;
                  case 1:
                    t = 1;
                }
                return { action_id: e.action_id, type: t };
              });
              e.controls.items_for_tab_hover_menu.length > 0 &&
                (e.menu.items_for_tab_hover_menu = [
                  ...e.menu.items_for_tab_hover_menu,
                  { type: 2 },
                  ...t,
                ]);
            })(s),
            this.shouldRenderFrameControls ||
              (s.controls.items_for_bottom_frame_controls = void 0),
            x.T.isOOBE && (s.menu.items_for_left_frame_menu = void 0);
          const o = new Set();
          return (
            null === (i = s.menu.items_for_left_frame_menu) ||
              void 0 === i ||
              i.forEach((e) => o.add(e.action_id)),
            null === (a = s.menu.items_for_tab_hover_menu) ||
              void 0 === a ||
              a.forEach((e) => o.add(e.action_id)),
            (s.defined_actions = [...o]
              .map((e) => {
                var t;
                return null === (t = d.g.GetAction(e)) || void 0 === t
                  ? void 0
                  : t.protoForSteam;
              })
              .filter(Boolean)),
            A.H.BHasMutualCapability(20) || (0, k.Mx)(s.menu),
            s
          );
        }
        OnFrameUpdateResultFromSteam(e) {
          if (this.m_eState == $.Destroyed) return;
          const { frame_id: t } = e,
            r = (0, n.Tt)(e, ["frame_id"]);
          this.Log.Info("Update result:", JSON.stringify(r)),
            (this.m_unFrameMenuPopupID = e.frame_menu_dashboard_popup_id),
            (this.m_bPendingInitialSyncWithSteam = !1);
        }
      }
      (0, n.Cg)([i.observable], Z.prototype, "m_eState", void 0),
        (0, n.Cg)([i.observable], Z.prototype, "m_sTitle", void 0),
        (0, n.Cg)([i.observable], Z.prototype, "m_mapPages", void 0),
        (0, n.Cg)([i.observable], Z.prototype, "m_unActivePageID", void 0),
        (0, n.Cg)([i.observable], Z.prototype, "m_unFrameMenuPopupID", void 0),
        (0, n.Cg)([i.observable.struct], Z.prototype, "m_Icon", void 0),
        (0, n.Cg)(
          [i.observable.struct],
          Z.prototype,
          "m_TabVisibility",
          void 0,
        ),
        (0, n.Cg)(
          [i.observable],
          Z.prototype,
          "m_rgMenuItems_LeftFrameMenu",
          void 0,
        ),
        (0, n.Cg)(
          [i.observable],
          Z.prototype,
          "m_rgMenuItems_TabHoverMenu",
          void 0,
        ),
        (0, n.Cg)(
          [i.observable],
          Z.prototype,
          "m_rgControlsItems_BottomFrameControls",
          void 0,
        ),
        (0, n.Cg)(
          [i.observable],
          Z.prototype,
          "m_rgControlsItems_TabHoverControls",
          void 0,
        ),
        (0, n.Cg)([i.observable], Z.prototype, "m_vrAppEntry", void 0),
        (0, n.Cg)([i.observable], Z.prototype, "m_fnOnCloseRequested", void 0),
        (0, n.Cg)([i.observable], Z.prototype, "m_sCloseButtonLabel", void 0),
        (0, n.Cg)([i.observable], Z.prototype, "m_eCloseButtonIcon", void 0),
        (0, n.Cg)([i.computed], Z.prototype, "logPrefix", null),
        (0, n.Cg)([i.computed], Z.prototype, "state", null),
        (0, n.Cg)([i.observable], Z.prototype, "m_bPendingLoadAppInfo", void 0),
        (0, n.Cg)(
          [i.observable],
          Z.prototype,
          "m_bPendingInitialSyncWithSteam",
          void 0,
        ),
        (0, n.Cg)([i.computed], Z.prototype, "isPendingStateConcluded", null),
        (0, n.Cg)([i.action], Z.prototype, "SetTitle", null),
        (0, n.Cg)([i.computed], Z.prototype, "title", null),
        (0, n.Cg)([i.action], Z.prototype, "SetIcon", null),
        (0, n.Cg)([i.computed.struct], Z.prototype, "icon", null),
        (0, n.Cg)([i.action], Z.prototype, "SetCloseButton", null),
        (0, n.Cg)([i.computed], Z.prototype, "canRequestClose", null),
        (0, n.Cg)([i.computed], Z.prototype, "closeButtonLabel", null),
        (0, n.Cg)([i.computed], Z.prototype, "closeButtonIcon", null),
        (0, n.Cg)([i.action], Z.prototype, "SetTabVisibility", null),
        (0, n.Cg)([i.computed.struct], Z.prototype, "tabVisibility", null),
        (0, n.Cg)([i.computed], Z.prototype, "isCurrentlyVisible", null),
        (0, n.Cg)(
          [i.computed],
          Z.prototype,
          "shouldSuppressPanelBacksides",
          null,
        ),
        (0, n.Cg)([i.computed], Z.prototype, "activePageID", null),
        (0, n.Cg)([i.computed], Z.prototype, "activePage", null),
        (0, n.Cg)([i.computed], Z.prototype, "isActiveDashboardFrame", null),
        (0, n.Cg)([i.computed], Z.prototype, "pageIDs", null),
        (0, n.Cg)([i.computed], Z.prototype, "pages", null),
        (0, n.Cg)(
          [i.computed],
          Z.prototype,
          "associatedSummonOverlayKeys",
          null,
        ),
        (0, n.Cg)([i.computed.struct], Z.prototype, "tab", null),
        (0, n.Cg)([i.computed], Z.prototype, "frameMenuPopup", null),
        (0, n.Cg)([i.computed], Z.prototype, "shouldRenderFrameControls", null),
        (0, n.Cg)([i.computed], Z.prototype, "frameControlsTransformID", null),
        (0, n.Cg)([i.computed], Z.prototype, "enablePositionalStereo", null),
        (0, n.Cg)([i.computed], Z.prototype, "allowInputCapture", null),
        (0, n.Cg)([i.action.bound], Z.prototype, "OnPendingComplete", null),
        (0, n.Cg)([i.action], Z.prototype, "Init", null),
        (0, n.Cg)([i.action.bound], Z.prototype, "OnPagesDestroyed", null),
        (0, n.Cg)([i.action], Z.prototype, "DestroyFrame", null),
        (0, n.Cg)([i.action], Z.prototype, "SwitchToPage", null),
        (0, n.Cg)([i.action], Z.prototype, "SetMenuItems", null),
        (0, n.Cg)([i.action], Z.prototype, "SetControlsItems", null),
        (0, n.Cg)([i.computed.struct], Z.prototype, "protoForSteam", null),
        (0, n.Cg)(
          [i.action.bound],
          Z.prototype,
          "OnFrameUpdateResultFromSteam",
          null,
        );
      const J = (0, a.PA)(
        o.forwardRef(function (e, t) {
          var r, n, a;
          const {
              children: d,
              title: p,
              iconEnum: h,
              iconAppID: g,
              iconOverlayKey: _,
              iconHWND: b,
              showTabInDashboardBar: S,
              showTabInDashboardHamburgerMenu: f,
              onCloseRequested: R,
              closeButtonLabel: w,
              closeButtonIcon: C,
              forceUniformHeightEverywhere: M,
              allowResizing: E,
            } = e,
            T = o.useMemo(() => m.JJ.CreateFrame(), []);
          (0, c.D5)(t, T);
          const D = o.useMemo(() => {
              const e = { enum: h, appid: g, overlay: _, hwnd: b };
              if (!Object.values(e).every((e) => void 0 === e)) return e;
            }, [h, g, _, b]),
            V = o.useMemo(() => null != R, [R]),
            I = o.useRef(void 0);
          (I.current = R),
            o.useEffect(() => {
              (0, i.runInAction)(() => {
                p && T.SetTitle(p),
                  D && T.SetIcon(D),
                  T.SetTabVisibility({
                    bVisibleInDashboardBar: S,
                    bVisibleInDashboardHamburgerMenu: f,
                  }),
                  T.SetCloseButton(V ? I.current : void 0, w, C),
                  null != M && T.size.ForceUniformHeightEverywhere(M),
                  null != E && T.size.SetResizingAllowed(E),
                  T.state == $.Uninitialized && T.Init();
              });
            }, [T, p, D, S, f, V, w, C, M, E]),
            o.useEffect(() => () => T.DestroyFrame(), [T]);
          let A = m.JJ.GetDockLocationTransformID(
            T.docking.dockLocation,
            T.frameID,
          );
          return (
            A ||
              T.docking.dockLocation != v.yW.World ||
              (A = m.JJ.GetDockLocationTransformID(v.yW.Dashboard, T.frameID)),
            o.createElement(
              H.t.Provider,
              { value: { frame: T, page: void 0 } },
              o.createElement(
                F.e,
                {
                  frame_id: T.frameID,
                  dock_location: T.docking.dockLocation,
                  dock_location_preview: T.docking.m_ePreviewingDockLocation,
                  resize_displacement: T.size.resizingDisplacementFactor,
                  resize_scale_min: y.Ul,
                  resize_scale_max: y.mB,
                  allow_input_capture: T.allowInputCapture,
                  override_pre_resize_main_panel_height:
                    T.size.mainPanelHeightOverride,
                  suppress_panel_backsides: T.shouldSuppressPanelBacksides,
                },
                "function" == typeof d ? d(T) : d,
                T.isCurrentlyVisible &&
                  A &&
                  o.createElement(
                    s.dL,
                    {
                      parent_id: A,
                      ignore_parent_scale: !0,
                      scale: l.SW.dashboardScale,
                    },
                    o.createElement(
                      s.dL,
                      { scale: T.size.scaleForActivePage },
                      o.createElement(s.rF, {
                        mountedId:
                          null === (r = T.activePage) || void 0 === r
                            ? void 0
                            : r.mountableID,
                      }),
                    ),
                    o.createElement(
                      s.dL,
                      {
                        id: T.frameControlsTransformID,
                        parent_id:
                          null === (n = T.activePage) || void 0 === n
                            ? void 0
                            : n.GetPanelAnchorID(s.Oi.BottomCenter),
                        scale:
                          T.size.scaleForBottomControls /
                          T.size.scaleForActivePage,
                        frame_resize_scale_factor:
                          T.docking.dockLocation == v.yW.Theater ? 0.5 : 0,
                      },
                      o.createElement(B, { frame: T }),
                    ),
                    T.frameMenuPopup &&
                      o.createElement(
                        s.dL,
                        {
                          parent_id:
                            null === (a = T.activePage) || void 0 === a
                              ? void 0
                              : a.GetPanelAnchorID(s.Oi.CenterLeft),
                        },
                        o.createElement(u.O, {
                          popupRequest: T.frameMenuPopup,
                        }),
                      ),
                    o.createElement(L.RS, null),
                    o.createElement(N, null),
                    T.size.showResizeHandle && o.createElement(G, null),
                  ),
              ),
            )
          );
        }),
      );
    },
    7891: (e, t, r) => {
      "use strict";
      r.d(t, { d: () => a, s: () => i });
      var n = r(776);
      class i {
        get OnDestroyed() {
          return this.frame.OnDestroyed;
        }
        constructor(e) {
          (this.Log = new n.wd(
            "Frame",
            () => `${this.frame.logPrefix} ${this.constructor.name}`,
          )),
            (this.frame = e),
            e.RegisterComponent(this);
        }
        Init() {}
      }
      class a {
        get frame() {
          return this.framePage.frame;
        }
        get OnDestroyed() {
          return this.framePage.OnDestroyed;
        }
        constructor(e) {
          (this.Log = new n.wd(
            "Frame",
            () => `${this.framePage.logPrefix} ${this.constructor.name}`,
          )),
            (this.framePage = e),
            e.RegisterComponent(this);
        }
        Init() {}
      }
    },
    1331: (e, t, r) => {
      "use strict";
      r.d(t, { FL: () => g, RS: () => h, vm: () => p });
      var n = r(1635),
        i = r(6540),
        a = r(7891),
        s = r(7727),
        o = r(7813),
        l = r(1835),
        c = r(6921),
        u = r(6090),
        d = r(8627),
        m = r(4574);
      class p extends a.s {
        constructor(e) {
          super(e), (0, o.makeObservable)(this);
        }
        get curvatureTransformOriginID() {
          return `frame:${this.frame.frameID}:curvature-origin`;
        }
        get shouldCurve() {
          if (!l.SW.allowCurvature) return !1;
          switch (this.frame.docking.visualDockLocation) {
            case d.yW.Dashboard:
              return !0;
            case d.yW.Theater:
              return l.SW.eTheaterCurvature == m.Do.Curved;
            default:
              return !1;
          }
        }
        get curvatureOriginDistance() {
          return this.shouldCurve ? l.SW.curvatureDistance : 1e3;
        }
      }
      function h(e) {
        const { frame: t } = (0, s.N)(),
          r = (0, c.useObserver)(() => t.curvature.curvatureTransformOriginID),
          n = (0, c.useObserver)(() => t.curvature.curvatureOriginDistance);
        return i.createElement(u.dL, { id: r, translation: { z: n } });
      }
      function g() {
        const { frame: e } = (0, s.N)();
        return (0, c.useObserver)(() => e.curvature.curvatureTransformOriginID);
      }
      (0, n.Cg)([o.computed], p.prototype, "curvatureTransformOriginID", null),
        (0, n.Cg)([o.computed], p.prototype, "shouldCurve", null),
        (0, n.Cg)([o.computed], p.prototype, "curvatureOriginDistance", null);
    },
    8627: (e, t, r) => {
      "use strict";
      r.d(t, { bQ: () => g, in: () => v, yW: () => n });
      var n,
        i = r(1635),
        a = r(6540),
        s = r(7813),
        o = r(1835),
        l = r(6090),
        c = r(9728),
        u = r(1333),
        d = r(2932),
        m = r(2702),
        p = r(3481),
        h = r(7891);
      !(function (e) {
        (e[(e.Dashboard = 1)] = "Dashboard"),
          (e[(e.LeftHand = 2)] = "LeftHand"),
          (e[(e.RightHand = 3)] = "RightHand"),
          (e[(e.World = 4)] = "World"),
          (e[(e.Theater = 5)] = "Theater"),
          (e[(e.Boot = 6)] = "Boot");
      })(n || (n = {}));
      class g extends h.s {
        get dockLocation() {
          return this.m_eDockLocation;
        }
        get visualDockLocation() {
          var e;
          return null !== (e = this.m_ePreviewingDockLocation) && void 0 !== e
            ? e
            : this.m_eDockLocation;
        }
        constructor(e) {
          super(e),
            (this.m_eDockLocation = n.Dashboard),
            (this.m_ePreviewingDockLocation = void 0),
            (this.m_nDockStartMs = Date.now()),
            (this.m_mapLastRelativeTransformForDockLocation = new Map()),
            (this.m_fLastTotalVisibleTimeInSeconds = 0),
            (this.m_bJustFloatedFromDashboard = !1),
            (0, s.makeObservable)(this);
        }
        SetDockLocation(e) {
          var t, r, i, a;
          if (null == e || e == this.dockLocation) return;
          const s = (function (e) {
            switch (e) {
              case n.LeftHand:
                return l.kG.TrackedControllerRole_LeftHand;
              case n.RightHand:
                return l.kG.TrackedControllerRole_RightHand;
              default:
                return l.kG.TrackedControllerRole_Invalid;
            }
          })(e);
          if (
            s == l.kG.TrackedControllerRole_Invalid ||
            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(s) != l.ne
          ) {
            if (e == n.Theater || e == n.LeftHand || e == n.RightHand)
              for (const r of p.JJ.frames)
                r.docking.dockLocation == e &&
                  ((r.docking.m_eDockLocation = n.Dashboard),
                  r.docking.RecordDockStats(
                    null === (t = r.activePage) || void 0 === t
                      ? void 0
                      : t.summonOverlayKey,
                  ));
            e == n.Dashboard &&
              (null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VROverlay.ShowDashboard(
                  null ===
                    (i =
                      null === (r = this.frame) || void 0 === r
                        ? void 0
                        : r.activePage) || void 0 === i
                    ? void 0
                    : i.summonOverlayKey,
                )),
              this.frame.docking.RecordDockStats(
                null === (a = this.frame.activePage) || void 0 === a
                  ? void 0
                  : a.summonOverlayKey,
              ),
              (this.frame.docking.m_eDockLocation = e),
              (this.frame.docking.m_bJustFloatedFromDashboard = e == n.World);
          }
        }
        SetInTheater(e = !0) {
          this.frame.docking.SetDockLocation(n.Theater),
            e &&
              this.frame != o.SW.mainSteamFrame &&
              (null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRDashboardManager.HideDashboard(
                  "AutoHideDashboardForOverlay",
                ));
        }
        RecordDockStats(e, t) {
          var r;
          const i = Date.now(),
            a = i - this.frame.docking.m_nDockStartMs;
          if (a >= 1e3) {
            const i = /^valve\.steam\.desktopgame\.(\d+)$/,
              s = e.match(i),
              o = c.G.Instance.SceneAppKey,
              l =
                this.frame.docking.dockLocation == n.Theater &&
                null !==
                  (r = u.HR.settings.get(
                    "/settings/dashboard/autoShowGameTheater",
                  )) &&
                void 0 !== r &&
                r;
            void 0 === t && (t = (0, m.wT)(e));
            const p = Math.floor(
                1e3 * (t - this.frame.docking.m_fLastTotalVisibleTimeInSeconds),
              ),
              h = {
                OverlayKeyID: e,
                Location: n[this.frame.docking.dockLocation],
                DurationMs: a,
                VisibleMs: p > 0 ? p : void 0,
                OverlayAppID:
                  2 == (null == s ? void 0 : s.length)
                    ? parseInt(s[1], 10)
                    : void 0,
                SceneAppKeyID: "" != o ? o : void 0,
                autoShowGameTheater: l,
              };
            (this.frame.docking.m_fLastTotalVisibleTimeInSeconds = t),
              d.v.instance.AddRow("SteamVROverlayDockStats", h);
          }
          this.frame.docking.m_nDockStartMs = i;
        }
      }
      function v(e) {
        const { dockLocation: t, forFrameID: r } = e,
          n = a.useId();
        return (
          a.useLayoutEffect(
            () => p.JJ.RegisterFrameDockLocation(t, n, r).Unregister,
            [t, n, r],
          ),
          a.createElement(l.dL, { id: n })
        );
      }
      (0, i.Cg)([s.observable], g.prototype, "m_eDockLocation", void 0),
        (0, i.Cg)(
          [s.observable],
          g.prototype,
          "m_ePreviewingDockLocation",
          void 0,
        ),
        (0, i.Cg)([s.computed], g.prototype, "dockLocation", null),
        (0, i.Cg)([s.computed], g.prototype, "visualDockLocation", null),
        (0, i.Cg)([s.observable], g.prototype, "m_nDockStartMs", void 0),
        (0, i.Cg)(
          [s.observable],
          g.prototype,
          "m_mapLastRelativeTransformForDockLocation",
          void 0,
        ),
        (0, i.Cg)(
          [s.observable],
          g.prototype,
          "m_fLastTotalVisibleTimeInSeconds",
          void 0,
        ),
        (0, i.Cg)(
          [s.observable],
          g.prototype,
          "m_bJustFloatedFromDashboard",
          void 0,
        ),
        (0, i.Cg)([s.action], g.prototype, "SetDockLocation", null),
        (0, i.Cg)([s.action], g.prototype, "SetInTheater", null);
    },
    677: (e, t, r) => {
      "use strict";
      r.d(t, {
        sj: () => y,
        JP: () => v,
        P9: () => f,
        JQ: () => R,
        gU: () => C,
      });
      var n = r(1635),
        i = r(7813),
        a = r(296),
        s = r(6090),
        o = r(6540),
        l = r(3606),
        c = r(921),
        u = r(2329),
        d = r(7727),
        m = r(4007),
        p = r(1835),
        h = r(7891);
      class g extends h.d {
        get supportsKeyboardInput() {
          return m.Q.BOverlayExists(this.m_sKeyboardInputOverlayKey);
        }
        get showKeyboardButtonInFrameControls() {
          var e;
          return (
            this.m_sKeyboardInputOverlayKey === l.Bn ||
            (null !==
              (e = m.Q.GetOverlayFlag(
                this.m_sKeyboardInputOverlayKey,
                s.NB.EnableControlBarKeyboard,
              )) &&
              void 0 !== e &&
              e)
          );
        }
        get isKeyboardVisible() {
          return (
            this.supportsKeyboardInput &&
            p.SW.m_bKeyboardVisible &&
            p.SW.m_sKeyboardOverlayKey === this.m_sKeyboardInputOverlayKey
          );
        }
        constructor(e) {
          super(e),
            (this.m_sKeyboardInputOverlayKey = void 0),
            (0, i.makeObservable)(this);
        }
        Init() {
          this.OnDestroyed.Register(
            (0, i.reaction)(
              () =>
                this.isKeyboardVisible &&
                !this.framePage.isActiveAndVisiblePage,
              () => this.HideKeyboard(),
            ),
          );
        }
        SetKeyboardInputOverlayKey(e) {
          this.m_sKeyboardInputOverlayKey = e;
        }
        ShowKeyboard() {
          if (this.supportsKeyboardInput && !this.isKeyboardVisible)
            try {
              VRHTML.VROverlay.ShowKeyboardForOverlay(
                this.m_sKeyboardInputOverlayKey,
                s.Xl.Normal,
                s.b.SingleLine,
                s.QR.Minimal | s.QR.HideDoneKey | s.QR.ShowArrowKeys,
                "",
                1024,
                "",
                0,
              ),
                VRHTML.VROverlay.SetKeyboardPositionForOverlay(
                  this.m_sKeyboardInputOverlayKey,
                  {},
                );
            } catch (e) {
              console.error(e);
            }
        }
        HideKeyboard() {
          this.isKeyboardVisible && VRHTML.VROverlay.HideKeyboard();
        }
        ToggleKeyboard() {
          this.isKeyboardVisible ? this.HideKeyboard() : this.ShowKeyboard();
        }
      }
      (0, n.Cg)(
        [i.observable],
        g.prototype,
        "m_sKeyboardInputOverlayKey",
        void 0,
      ),
        (0, n.Cg)([i.computed], g.prototype, "supportsKeyboardInput", null),
        (0, n.Cg)(
          [i.computed],
          g.prototype,
          "showKeyboardButtonInFrameControls",
          null,
        ),
        (0, n.Cg)([i.computed], g.prototype, "isKeyboardVisible", null),
        (0, n.Cg)([i.action], g.prototype, "SetKeyboardInputOverlayKey", null);
      var v,
        _ = r(1651),
        b = r(9961),
        S = r(776);
      !(function (e) {
        (e[(e.Alive = 0)] = "Alive"), (e[(e.Destroyed = 1)] = "Destroyed");
      })(v || (v = {}));
      class y {
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
        get logPrefix() {
          let e = this.frame.title;
          return (
            e.length > u.kr && (e = e.substring(0, u.kr - 3) + "..."),
            `${this.frame.frameID}[${this.pageID}] "${e}"`
          );
        }
        RegisterComponent(e) {
          this.m_setComponents.add(e);
        }
        constructor(e, t) {
          (this.m_eState = v.Alive),
            (this.m_OnDestroyed = new _.l()),
            (this.m_sSummonOverlayKey = void 0),
            (this.m_bExternalDashboardOverlay = !1),
            (this.m_mainPanel = void 0),
            (this.Log = new S.wd("Frame", () => this.logPrefix)),
            (this.m_setComponents = new Set()),
            (this.keyboard = new g(this)),
            (this.sharing = void 0),
            (this.size = new b.wP(this)),
            (this.m_Frame = e),
            (this.m_unPageID = t),
            (0, i.makeObservable)(this);
        }
        Init() {
          for (const e of this.m_setComponents) e.Init();
        }
        DestroyPage() {
          this.m_eState != v.Destroyed &&
            ((this.m_eState = v.Destroyed),
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
          return this.m_mainPanel
            ? (0, s.nX)(l.C6, this.m_mainPanel.getID())
            : this.isExternalDashboardOverlay
              ? (0, s.nX)(l.cb, this.summonOverlayKey) + "_Panel"
              : void 0;
        }
        GetPanelAnchorID(e) {
          if (!this.isExternalDashboardOverlay)
            return `frame:${this.frame.frameID}:page:${this.pageID}:anchor:${e}`;
          {
            const t = (0, s.nX)(l.cb, this.summonOverlayKey);
            switch (e) {
              case s.Oi.TopCenter:
                return t + "_TopCenter";
              case s.Oi.CenterLeft:
                return t + "_CenterLeft";
              case s.Oi.CenterRight:
                return t + "_CenterRight";
              case s.Oi.BottomCenter:
                return t + "_BottomCenter";
              case s.Oi.BottomRight:
                return t + "_BottomRight";
            }
          }
        }
      }
      (0, n.Cg)([i.observable], y.prototype, "m_eState", void 0),
        (0, n.Cg)([i.observable], y.prototype, "m_sSummonOverlayKey", void 0),
        (0, n.Cg)(
          [i.observable],
          y.prototype,
          "m_bExternalDashboardOverlay",
          void 0,
        ),
        (0, n.Cg)([i.observable], y.prototype, "m_mainPanel", void 0),
        (0, n.Cg)([i.computed], y.prototype, "state", null),
        (0, n.Cg)([i.computed], y.prototype, "summonOverlayKey", null),
        (0, n.Cg)(
          [i.computed],
          y.prototype,
          "isExternalDashboardOverlay",
          null,
        ),
        (0, n.Cg)([i.computed], y.prototype, "isActivePage", null),
        (0, n.Cg)([i.computed], y.prototype, "isActiveAndVisiblePage", null),
        (0, n.Cg)([i.computed], y.prototype, "mountableID", null),
        (0, n.Cg)([i.computed], y.prototype, "logPrefix", null),
        (0, n.Cg)([i.action], y.prototype, "DestroyPage", null),
        (0, n.Cg)([i.action], y.prototype, "SetSummonOverlayKey", null),
        (0, n.Cg)(
          [i.action],
          y.prototype,
          "SetIsExternalDashboardOverlay",
          null,
        ),
        (0, n.Cg)([i.action], y.prototype, "SetMainPanel", null),
        (0, n.Cg)([i.computed], y.prototype, "mainPanelID", null);
      const f = o.forwardRef(function (e, t) {
          const {
              children: r,
              summonOverlayKey: n,
              keyboardInputOverlayKey: i,
              renderChildren: l = "when-visible",
            } = e,
            { frame: u } = (0, d.N)(),
            m = o.useMemo(() => u.CreatePage(), [u]);
          o.useEffect(() => m.SetSummonOverlayKey(n), [m, u, n]),
            o.useEffect(
              () => m.keyboard.SetKeyboardInputOverlayKey(i),
              [m, u, i],
            ),
            (0, c.D5)(t, m),
            o.useEffect(() => (m.Init(), () => m.DestroyPage()), [m]);
          const p = (0, a.q3)(() => m.mountableID);
          return (0, a.q3)(() => m.isActiveAndVisiblePage) ||
            "when-visible" != l
            ? o.createElement(
                d.t.Provider,
                { value: { frame: u, page: m } },
                o.createElement(
                  s.IS,
                  { id: p },
                  "function" == typeof r ? r(u, m) : r,
                ),
              )
            : null;
        }),
        R = o.forwardRef(function (e, t) {
          var r, i;
          const { requireExternalOverlay: u = !0, overlayKey: p } = e,
            h = (0, n.Tt)(e, ["requireExternalOverlay", "overlayKey"]),
            { frame: g } = (0, d.N)(),
            v = o.useCallback(
              (e) => {
                null == e || e.SetIsExternalDashboardOverlay(!0),
                  (0, c.cZ)(t, e);
              },
              [t],
            ),
            _ = (0, a.q3)(() => g.curvature.curvatureTransformOriginID),
            b = (0, a.q3)(() => m.Q.BOverlayExists(p));
          return u && !b
            ? null
            : o.createElement(
                f,
                Object.assign({}, h, {
                  summonOverlayKey:
                    null !== (r = e.summonOverlayKey) && void 0 !== r ? r : p,
                  keyboardInputOverlayKey:
                    null !== (i = e.keyboardInputOverlayKey) && void 0 !== i
                      ? i
                      : p,
                  ref: v,
                }),
                o.createElement(s.rF, { mountedId: (0, s.nX)(l.cb, p) }),
                o.createElement(s.dL, {
                  id: (0, s.nX)(l.cb, p) + "_CurvatureOrigin",
                  parent_id: _,
                }),
              );
        }),
        w = [
          s.Oi.TopCenter,
          s.Oi.CenterLeft,
          s.Oi.CenterRight,
          s.Oi.BottomCenter,
          s.Oi.BottomRight,
        ];
      function C(e) {
        const { frame: t, page: r } = o.useContext(d.t);
        return t && r && !r.isExternalDashboardOverlay
          ? o.createElement(
              o.Fragment,
              null,
              w.map((e) =>
                o.createElement(s.Ci, {
                  key: e,
                  id: r.GetPanelAnchorID(e),
                  location: e,
                }),
              ),
            )
          : null;
      }
    },
    795: (e, t, r) => {
      "use strict";
      r.d(t, {
        HC: () => i.HC,
        Iu: () => i.Iu,
        JJ: () => n.JJ,
        JP: () => a.JP,
        JQ: () => a.JQ,
        P9: () => a.P9,
        QI: () => s.QI,
        RG: () => s.RG,
        Sq: () => n.Sq,
        U0: () => s.U0,
        Vu: () => s.Vu,
        WF: () => s.WF,
        gU: () => a.gU,
        wI: () => i.wI,
        xE: () => s.xE,
      });
      var n = r(3481),
        i = r(2329),
        a = r(677),
        s = r(5323);
    },
    4007: (e, t, r) => {
      "use strict";
      r.d(t, { Q: () => l });
      var n = r(1635),
        i = r(7813),
        a = r(1651);
      const s = new (r(776).wd)("Overlays");
      class o {
        constructor() {
          (this.m_mapAllOverlays = new Map()),
            (this.m_rgOverlayCreatedCallbacks = new a.l()),
            (this.m_rgOverlayDestroyedCallbacks = new a.l()),
            (0, i.makeObservable)(this);
        }
        Init() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            this.RegisterForOverlayCreated((e) => {
              2 != (null == e ? void 0 : e.eOverlayType) &&
                s.Info("Created:", e.sOverlayKey);
            }),
              this.RegisterForOverlayDestroyed((e) => {
                2 != (null == e ? void 0 : e.eOverlayType) &&
                  s.Info("Destroyed:", e.sOverlayKey);
              }),
              VRHTML.RegisterForAllOverlayInfo(this.OnAllOverlayInfo);
          });
        }
        BOverlayExists(e) {
          return this.m_mapAllOverlays.has(e);
        }
        GetOverlayInfo(e) {
          return this.m_mapAllOverlays.get(e);
        }
        get overlays() {
          return Array.from(this.m_mapAllOverlays.values());
        }
        get overlayKeys() {
          return Array.from(this.m_mapAllOverlays.values()).map(
            (e) => e.sOverlayKey,
          );
        }
        GetOverlayFlag(e, t) {
          const r = this.GetOverlayInfo(e);
          if (r) return 0 != (r.unFlags & t);
        }
        RegisterForOverlayCreated(e) {
          return this.m_rgOverlayCreatedCallbacks.Register(e);
        }
        RegisterForOverlayDestroyed(e) {
          return this.m_rgOverlayDestroyedCallbacks.Register(e);
        }
        OnAllOverlayInfo(e) {
          const t = new Set(this.m_mapAllOverlays.keys()),
            r = [],
            n = [];
          for (const n of e)
            (null == n ? void 0 : n.sOverlayKey) &&
              (this.m_mapAllOverlays.has(n.sOverlayKey) || r.push(n),
              this.m_mapAllOverlays.set(n.sOverlayKey, n),
              t.delete(n.sOverlayKey));
          for (const e of t)
            n.push(this.m_mapAllOverlays.get(e)),
              this.m_mapAllOverlays.delete(e);
          r.forEach(this.m_rgOverlayCreatedCallbacks.Dispatch),
            n.forEach(this.m_rgOverlayDestroyedCallbacks.Dispatch);
        }
      }
      (0, n.Cg)([i.observable], o.prototype, "m_mapAllOverlays", void 0),
        (0, n.Cg)([i.computed], o.prototype, "overlays", null),
        (0, n.Cg)([i.computed.struct], o.prototype, "overlayKeys", null),
        (0, n.Cg)([i.action.bound], o.prototype, "OnAllOverlayInfo", null);
      const l = new o();
      window.OverlayStore = l;
    },
    3246: (e, t, r) => {
      "use strict";
      r.d(t, { r: () => d });
      var n = r(1635),
        i = r(3236),
        a = r(7813),
        s = r(1909),
        o = r(4007);
      const l = new (r(776).wd)("PooledPopups");
      function c(e) {
        var t, r;
        return (
          !!l.IsDebugEnabled() ||
          (!(null === (t = null == e ? void 0 : e.popup_overlay_key) ||
          void 0 === t
            ? void 0
            : t.includes("tooltip")) &&
            !(null === (r = null == e ? void 0 : e.popup_overlay_key) ||
            void 0 === r
              ? void 0
              : r.includes("barpopup")))
        );
      }
      class u {
        constructor() {
          (this.m_mapActivePooledPopupRequests = new Map()),
            (this.m_mapRemoteVSIds = new Map()),
            (0, a.makeObservable)(this);
        }
        get requestIDs() {
          return Array.from(this.m_mapActivePooledPopupRequests.keys());
        }
        get requests() {
          return Array.from(this.m_mapActivePooledPopupRequests.values());
        }
        GetRequestForID(e) {
          return this.m_mapActivePooledPopupRequests.get(e);
        }
        Init() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            yield this.LoadSessionDevData(),
              (0, a.autorun)(() => this.SaveSessionDevData()),
              s.p.SteamVR.SetImplementation(
                "ShowDashboardPopup",
                this.onShowDashboardPopup,
              ),
              s.p.SteamVR.SetImplementation(
                "HideDashboardPopup",
                this.onHideDashboardPopup,
              ),
              o.Q.RegisterForOverlayDestroyed((e) => {
                [...this.m_mapActivePooledPopupRequests.values()]
                  .filter((t) => t.popup_overlay_key === e.sOverlayKey)
                  .forEach((e) =>
                    this.m_mapActivePooledPopupRequests.delete(
                      e.dashboard_popup_id,
                    ),
                  );
              });
          });
        }
        onShowDashboardPopup(e) {
          c(e) &&
            l.Info(
              "Showing:",
              JSON.stringify({
                id: e.dashboard_popup_id,
                key: e.popup_overlay_key,
                ident: e.special_identifier,
                rect: e.clip_rect
                  ? [
                      e.clip_rect.u_min.toFixed(4),
                      e.clip_rect.v_min.toFixed(4),
                      e.clip_rect.u_max.toFixed(4),
                      e.clip_rect.v_max.toFixed(4),
                    ].join(",")
                  : void 0,
              }),
            ),
            (e = this.adaptDashboardPopupRequestForLegacySteamClients(e)),
            this.m_mapActivePooledPopupRequests.set(e.dashboard_popup_id, e);
        }
        adaptDashboardPopupRequestForLegacySteamClients(e) {
          return e.popup_overlay_key.startsWith(
            "valve.steam.gamepadui.mainmenu",
          )
            ? Object.assign(Object.assign({}, e), {
                parent_overlay_key: void 0,
                special_identifier: 2,
              })
            : e;
        }
        onHideDashboardPopup(e) {
          c(this.GetRequestForID(null == e ? void 0 : e.dashboard_popup_id)) &&
            l.Info("Hiding:", e.dashboard_popup_id),
            this.m_mapActivePooledPopupRequests.delete(e.dashboard_popup_id);
        }
        LoadSessionDevData() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            var e, t;
            const r = JSON.parse(
              null !== (e = sessionStorage.getItem(u.k_strSessionStorageKey)) &&
                void 0 !== e
                ? e
                : "{}",
            );
            for (const e of null !== (t = r.m_rgPooledPopups) && void 0 !== t
              ? t
              : [])
              this.m_mapActivePooledPopupRequests.set(e.dashboard_popup_id, e);
          });
        }
        SaveSessionDevData() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            const e = {
              m_rgPooledPopups: Array.from(
                this.m_mapActivePooledPopupRequests.values(),
              ),
            };
            sessionStorage.setItem(u.k_strSessionStorageKey, JSON.stringify(e));
          });
        }
        get legacyFloatingMainMenuPopup() {
          return this.requests.find((e) => 2 == e.special_identifier);
        }
        get dashboardBarPopup() {
          return this.requests.find((e) => 1 == e.special_identifier);
        }
      }
      (u.k_strSessionStorageKey = "PooledPopupStoreSessionStorage"),
        (0, n.Cg)(
          [a.observable],
          u.prototype,
          "m_mapActivePooledPopupRequests",
          void 0,
        ),
        (0, n.Cg)([a.observable], u.prototype, "m_mapRemoteVSIds", void 0),
        (0, n.Cg)([a.computed], u.prototype, "requestIDs", null),
        (0, n.Cg)([a.computed], u.prototype, "requests", null),
        (0, n.Cg)([a.action.bound], u.prototype, "onShowDashboardPopup", null),
        (0, n.Cg)([a.action.bound], u.prototype, "onHideDashboardPopup", null),
        (0, n.Cg)([i.o], u.prototype, "LoadSessionDevData", null),
        (0, n.Cg)([i.o], u.prototype, "SaveSessionDevData", null),
        (0, n.Cg)(
          [a.computed],
          u.prototype,
          "legacyFloatingMainMenuPopup",
          null,
        ),
        (0, n.Cg)([a.computed], u.prototype, "dashboardBarPopup", null);
      const d = new u();
      window.PooledPopupStore = d;
    },
    6379: (e, t, r) => {
      "use strict";
      r.d(t, { c: () => d });
      var n = r(1635),
        i = r(3236),
        a = r(7813),
        s = r(1333),
        o = r(3606),
        l = r(9728),
        c = r(1835);
      class u {
        constructor() {
          (this.m_bAllowCameraToggle = null),
            (this.m_bAllowLightSourceFrequency = null),
            (this.m_bCameraCompatibilityModes = null),
            (this.m_bSupportsRoomViewDepthProjection = null),
            (this.m_eCameraExposure = null),
            (this.m_bRoomViewEnabledForSceneApps = void 0),
            (this.m_bRoomViewStreaming = void 0),
            (0, a.makeObservable)(this);
        }
        Init() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            var e, t;
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.RegisterForHmdCameraStateChanged(
                this.onHmdCameraStateChanged,
              ),
              null ===
                (e =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.RegisterForRoomViewChangedEvents) ||
                void 0 === e ||
                e.call(VRHTML, this.onRoomViewChanged),
              null ===
                (t =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.RegisterForRoomViewStreamChangedEvents) ||
                void 0 === t ||
                t.call(VRHTML, this.onRoomViewStreamChanged),
              (0, a.reaction)(
                () => l.G.Instance.SceneAppKey,
                (e) => {
                  var t;
                  null ===
                    (t =
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.VROverlayInternal) ||
                    void 0 === t ||
                    t.SetCameraRoomViewEnabledForSceneApps(!1);
                },
              );
          });
        }
        onHmdCameraStateChanged(e) {
          (this.m_bAllowCameraToggle = e.bAllowCameraToggle),
            (this.m_bAllowLightSourceFrequency = e.bAllowLightSourceFrequency),
            (this.m_eCameraExposure = e.eCameraExposure),
            (this.m_bCameraCompatibilityModes = e.bSupportsCompatibilityModes),
            (this.m_bSupportsRoomViewDepthProjection =
              e.bSupportsRoomViewDepthProjection);
        }
        onRoomViewChanged(e) {
          this.m_bRoomViewEnabledForSceneApps = e;
        }
        get showRoomViewButton() {
          var e;
          return (
            s.HR.settings.get(o.xz) &&
            (null !== (e = s.HR.settings.get(o.D1)) && void 0 !== e ? e : 0) >
              0 &&
            !c.SW.activeLinkServer
          );
        }
        get roomViewEnabled() {
          return l.G.Instance.SceneAppKey
            ? this.m_bRoomViewEnabledForSceneApps
            : s.HR.settings.get(o.Hh);
        }
        onRoomViewStreamChanged(e) {
          this.m_bRoomViewStreaming = e;
        }
      }
      (0, n.Cg)([a.observable], u.prototype, "m_bAllowCameraToggle", void 0),
        (0, n.Cg)(
          [a.observable],
          u.prototype,
          "m_bAllowLightSourceFrequency",
          void 0,
        ),
        (0, n.Cg)(
          [a.observable],
          u.prototype,
          "m_bCameraCompatibilityModes",
          void 0,
        ),
        (0, n.Cg)(
          [a.observable],
          u.prototype,
          "m_bSupportsRoomViewDepthProjection",
          void 0,
        ),
        (0, n.Cg)([a.observable], u.prototype, "m_eCameraExposure", void 0),
        (0, n.Cg)(
          [a.observable],
          u.prototype,
          "m_bRoomViewEnabledForSceneApps",
          void 0,
        ),
        (0, n.Cg)([a.observable], u.prototype, "m_bRoomViewStreaming", void 0),
        (0, n.Cg)([i.o], u.prototype, "onHmdCameraStateChanged", null),
        (0, n.Cg)([i.o], u.prototype, "onRoomViewChanged", null),
        (0, n.Cg)([a.computed], u.prototype, "showRoomViewButton", null),
        (0, n.Cg)([a.computed], u.prototype, "roomViewEnabled", null),
        (0, n.Cg)([i.o], u.prototype, "onRoomViewStreamChanged", null);
      const d = new u();
      window.RoomViewStore = d;
    },
    998: (e, t, r) => {
      "use strict";
      r.d(t, { C: () => u, b: () => i });
      var n,
        i,
        a = r(1635),
        s = r(6540),
        o = r(3236),
        l = r(6090),
        c = (r(9471), r(1835), r(1370));
      !(function (e) {
        (e[(e.HorizontalPips = 0)] = "HorizontalPips"),
          (e[(e.VerticalBattery = 1)] = "VerticalBattery");
      })(i || (i = {}));
      let u = (n = class extends s.Component {
        constructor(e) {
          super(e),
            (this.m_BatteryStateChangedCallbackHandle = null),
            (this.m_DeviceRoleChangedCallbackHandle = null),
            (this.m_DeviceEventCallbackHandle = null),
            (this.batteryLevelStable = null),
            (this.state = {
              batteryIconPath: null,
              roleIconPath: null,
              eRole: l.kG.TrackedControllerRole_Invalid,
            });
        }
        componentDidMount() {
          (this.m_BatteryStateChangedCallbackHandle =
            null === l.Ay || void 0 === l.Ay
              ? void 0
              : l.Ay.RegisterForBatteryStateChangedEvents(
                  this.OnBatteryStateChanged,
                )),
            (this.m_DeviceRoleChangedCallbackHandle =
              null === l.Ay || void 0 === l.Ay
                ? void 0
                : l.Ay.RegisterForDeviceRoleChangedEvents(
                    this.OnDeviceRoleChanged,
                  )),
            (this.m_DeviceEventCallbackHandle =
              null === l.Ay || void 0 === l.Ay
                ? void 0
                : l.Ay.RegisterForDeviceEvents(this.OnDeviceEvent)),
            this.UpdateControllerStatus();
        }
        componentWillUnmount() {
          var e, t, r;
          null === (e = this.m_BatteryStateChangedCallbackHandle) ||
            void 0 === e ||
            e.unregister(),
            null === (t = this.m_DeviceRoleChangedCallbackHandle) ||
              void 0 === t ||
              t.unregister(),
            null === (r = this.m_DeviceEventCallbackHandle) ||
              void 0 === r ||
              r.unregister();
        }
        UpdateControllerStatus() {
          var e;
          if (!l.Ay) return;
          const t = l.Ay.VRProperties.GetBoolProperty(
              this.props.trackedDeviceIndex,
              l.fD.DeviceProvidesBatteryStatus_Bool,
            ),
            r = l.Ay.VRSystem.GetControllerRoleForTrackedDeviceIndex(
              this.props.trackedDeviceIndex,
            );
          let a = !1;
          if (t) {
            const t =
              null !==
                (e = l.Ay.VRProperties.GetFloatProperty(
                  this.props.trackedDeviceIndex,
                  l.fD.DeviceBatteryPercentage_Float,
                )) && void 0 !== e
                ? e
                : 0;
            (a = l.Ay.VRProperties.GetBoolProperty(
              this.props.trackedDeviceIndex,
              l.fD.DeviceIsCharging_Bool,
            )),
              null == this.batteryLevelStable || 0 == this.batteryLevelStable
                ? (this.batteryLevelStable = t)
                : ((this.batteryLevelStable = Math.min(
                    this.batteryLevelStable,
                    t + n.kBatteryLevelHysteresis,
                    1,
                  )),
                  (this.batteryLevelStable = Math.max(
                    this.batteryLevelStable,
                    t - n.kBatteryLevelHysteresis,
                    0,
                  )));
          }
          let s = n.GetBatteryIcon(
              t,
              a,
              this.batteryLevelStable,
              i.HorizontalPips,
            ),
            o = this.GetRoleIcon(r);
          (s == this.state.batteryIconPath &&
            o == this.state.roleIconPath &&
            r == this.state.eRole) ||
            this.setState({ batteryIconPath: s, roleIconPath: o, eRole: r });
        }
        GetRoleIcon(e) {
          switch (e) {
            case l.kG.TrackedControllerRole_RightHand:
              return "images/icons/controller_model_right.png";
            case l.kG.TrackedControllerRole_LeftHand:
              return "images/icons/controller_model_left.png";
          }
          return null;
        }
        static GetBatteryIcon(e, t, r, n) {
          if (!e) return null;
          const a =
            n == i.VerticalBattery
              ? "images/icons/vert"
              : "images/icons/controller_model";
          return t
            ? r < 0.15
              ? a + "_charging_red.png"
              : a + "_charging.png"
            : 0 == r
              ? null
              : r < 0.15
                ? a + "_low.png"
                : r < 0.3
                  ? a + "_battery_1.png"
                  : r < 0.6
                    ? a + "_battery_2.png"
                    : r < 0.9
                      ? a + "_battery_3.png"
                      : a + "_battery_4.png";
        }
        OnBatteryStateChanged(e) {
          e == this.props.trackedDeviceIndex && this.UpdateControllerStatus();
        }
        OnDeviceRoleChanged() {
          this.UpdateControllerStatus();
        }
        OnDeviceEvent(e, t, r) {
          e == l.ku.Activated &&
            r == this.props.trackedDeviceIndex &&
            this.UpdateControllerStatus();
        }
        render() {
          const e =
            null === l.Ay || void 0 === l.Ay
              ? void 0
              : l.Ay.VRSystem.GetControllerRoleForTrackedDeviceIndex(
                  this.props.trackedDeviceIndex,
                );
          let t,
            r = 0;
          e == l.kG.TrackedControllerRole_LeftHand
            ? ((t = "/user/hand/left"), (r = -0.05))
            : e == l.kG.TrackedControllerRole_RightHand
              ? ((t = "/user/hand/right"), (r = 0.05))
              : (t = void 0);
          const n = !1;
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(
              l.Zk,
              {
                width: void 0,
                height: void 0,
                interactive: !1,
                rendermodel_component_device_index:
                  this.props.trackedDeviceIndex,
                rendermodel_component_name: "status",
                debug_name: "controllerstatus_" + this.props.trackedDeviceIndex,
              },
              s.createElement(
                "div",
                {
                  className: "ControllerStatusRoot",
                  style: { width: 256, height: 256 },
                },
                s.createElement(
                  "div",
                  { className: "ControllerStatusFrame" },
                  s.createElement(
                    "div",
                    {
                      className: "ControllerHandFrame",
                      style: {
                        width: 210,
                        marginLeft: 23,
                        height: 110,
                        marginTop: 18,
                      },
                    },
                    s.createElement("img", {
                      className: "ControllerHand",
                      src: this.state.roleIconPath,
                    }),
                    n,
                    n,
                  ),
                  s.createElement(
                    "div",
                    {
                      className: "ControllerBatteryFrame",
                      style: {
                        width: 210,
                        marginLeft: 23,
                        height: 110,
                        marginTop: 18,
                        opacity: 0.85,
                      },
                    },
                    s.createElement("img", {
                      className: "ControllerBattery",
                      src: this.state.batteryIconPath,
                    }),
                  ),
                ),
              ),
            ),
          );
        }
      });
      (u.kBatteryLevelHysteresis = 0.02),
        (0, a.Cg)([o.o], u.prototype, "OnBatteryStateChanged", null),
        (0, a.Cg)([o.o], u.prototype, "OnDeviceRoleChanged", null),
        (0, a.Cg)([o.o], u.prototype, "OnDeviceEvent", null),
        (u = n = (0, a.Cg)([c.PA], u));
    },
    2702: (e, t, r) => {
      "use strict";
      r.d(t, { cQ: () => et, eo: () => Ze, wT: () => Ye });
      var n,
        i = r(1635),
        a = r(6090),
        s = r(3236),
        o = r(7813),
        l = r(6540),
        c = r(6138),
        u = r(3606),
        d = r(3714),
        m = r(2932),
        p = r(6575),
        h = r(9728),
        g = r(1333),
        v = r(1370),
        _ = r(4574),
        b = r(6921),
        S = r(2267),
        y = r(2928),
        f = r(1139);
      let R = (n = class extends l.Component {
        constructor(e) {
          super(e),
            (this.m_imageSources = []),
            (this.m_imageIndex = -1),
            this.updateImageSources(),
            (this.state = { image: null });
        }
        updateImageSources() {
          let e = [],
            t = this.props.imageUrl.replace(
              /header\.jpg$/,
              "library_600x900.jpg",
            );
          t !== this.props.imageUrl &&
            (e.push(t),
            e.push(
              this.props.imageUrl.replace(/header\.jpg$/, "portrait.png"),
            )),
            e.push(this.props.imageUrl),
            this.props.fallbackImageUrl && e.push(this.props.fallbackImageUrl),
            (this.m_imageSources = e.filter(
              (e) => !n.s_failedImages.includes(e),
            )),
            (this.m_imageIndex = -1);
        }
        componentDidMount() {
          this.m_imageIndex < 0 &&
            ((this.m_loadingImage = new window.Image()), this.loadNextImage());
        }
        componentWillUnmount() {
          this.m_loadingImage &&
            ((this.m_loadingImage.onerror = null),
            (this.m_loadingImage.onload = null),
            (this.m_loadingImage = null));
        }
        componentDidUpdate(e) {
          this.props.imageUrl != e.imageUrl &&
            (this.setState({ image: null }),
            this.updateImageSources(),
            this.loadNextImage());
        }
        loadNextImage() {
          this.m_imageIndex >= 0 &&
            this.m_imageIndex < this.m_imageSources.length &&
            n.s_failedImages.push(this.m_imageSources[this.m_imageIndex]),
            this.m_imageIndex++,
            this.m_imageIndex < this.m_imageSources.length
              ? ((this.m_loadingImage.onerror = this.loadNextImage),
                (this.m_loadingImage.onload = this.onLoad),
                (this.m_loadingImage.src =
                  this.m_imageSources[this.m_imageIndex]))
              : this.onError();
        }
        onLoad() {
          this.setState({
            image: this.m_loadingImage.src,
            width: this.m_loadingImage.width,
            height: this.m_loadingImage.height,
            isFallback:
              this.props.fallbackImageUrl &&
              this.m_imageIndex == this.m_imageSources.length - 1,
          });
        }
        onError() {
          this.setState({ isFallback: !0 });
        }
        render() {
          let e = { backgroundImage: `url(${this.state.image})` },
            t = l.createElement("div", { className: "Icon", style: e });
          return (
            this.state.width / this.state.height != 600 / 900 &&
              (t = l.createElement(
                l.Fragment,
                null,
                l.createElement("div", {
                  className: "IconBackgroundBlur",
                  style: e,
                }),
                t,
              )),
            l.createElement(
              "div",
              {
                className: (0, f.FH)("PortraitAppImageContainer", [
                  "Fallback",
                  this.state.isFallback,
                ]),
              },
              this.state.image && t,
              l.createElement("div", { className: "Title" }, this.props.title),
              this.props.children && this.props.children,
            )
          );
        }
      });
      (R.defaultProps = {
        fallbackImageUrl: "images/appimage_default_portrait.png",
      }),
        (R.s_failedImages = []),
        (0, i.Cg)([s.o], R.prototype, "loadNextImage", null),
        (0, i.Cg)([s.o], R.prototype, "onLoad", null),
        (0, i.Cg)([s.o], R.prototype, "onError", null),
        (R = n = (0, i.Cg)([v.PA], R));
      var w = r(3720),
        C = r(795),
        M = r(3109);
      const E = (e) => {
        if (null == e) return "";
        let t = e.image_path_capsule || e.image_path;
        return t.startsWith("/app/image?") && (t += "&aspect=portrait"), t;
      };
      function T(e) {
        const t = (0, b.useObserver)(
            () => h.G.Instance.SceneApplicationState != a.HW.None,
          ),
          r = (0, b.useObserver)(() => {
            if (h.G.Instance.SceneAppKey.startsWith(u.kk)) {
              const e = Number.parseInt(
                h.G.Instance.SceneAppKey.substring(u.kk.length),
              );
              if (Number.isInteger(e)) return e;
            }
          });
        return l.createElement(
          C.wI,
          {
            title: (0, d.we)("#Now_Playing"),
            showTabInDashboardBar: t,
            iconEnum: 17,
            iconAppID: r,
          },
          l.createElement(
            C.P9,
            { summonOverlayKey: u.dw },
            l.createElement(D, {
              onExitGame: () => {
                var t;
                return null === (t = e.onExitGame) || void 0 === t
                  ? void 0
                  : t.call(e);
              },
            }),
          ),
        );
      }
      class D extends l.Component {
        constructor(e) {
          super(e), (this.state = {});
        }
        onExitApp() {
          var e, t;
          null === VRHTML || void 0 === VRHTML || VRHTML.QuitSceneApp(),
            null === (t = (e = this.props).onExitGame) ||
              void 0 === t ||
              t.call(e);
        }
        onReturnToGame() {
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VRDashboardManager.HideDashboard("return_to_game");
        }
        onOpenAppControllerBindingSettings() {
          const e = h.G.Instance.SceneAppKey;
          y.o.OpenDeepLink(y.$.Name, e);
        }
        onOpenAppVideoSettings() {
          const e = h.G.Instance.SceneAppKey;
          S.xR.OpenDeepLink(S.a5.Name, e);
        }
        render() {
          var e;
          const t = h.G.Instance.SceneAppKey,
            r = h.G.Instance.SceneAppName,
            n = h.G.Instance.SceneApplicationState,
            i = h.G.Instance.SceneAppIsHome,
            s = g.HR.settings.get("/settings/dashboard/allowAppQuitting"),
            o = !(
              null !==
                (e = g.HR.settings.get("/settings/dashboard/arcadeMode")) &&
              void 0 !== e &&
              e
            ),
            u = g.HR.apps && g.HR.apps.find((e) => e.key == t);
          let m = !1;
          switch (n) {
            case a.HW.Quitting:
            case a.HW.Starting:
            case a.HW.Waiting:
              m = !0;
          }
          return l.createElement(
            M.a,
            {
              visible: !0,
              debugName: "nowplaying",
              additionalClassNames: "NowPlaying",
              scrollable: !1,
            },
            l.createElement(
              "div",
              { className: "ArtworkColumn" },
              l.createElement(R, { appkey: t, title: r, imageUrl: E(u) }),
            ),
            l.createElement(
              "div",
              { className: "InfoColumn" },
              l.createElement("div", { className: "NowPlayingAppTitle" }, r),
              l.createElement(
                c.$,
                {
                  className: "ButtonControl Colorful",
                  onClick: this.onReturnToGame,
                },
                i ? (0, d.we)("#Return_To_Home") : (0, d.we)("#Return_To_Game"),
              ),
              o &&
                l.createElement(
                  w.CS,
                  {
                    icon: w.Xb.PopOut,
                    onClick: this.onOpenAppControllerBindingSettings,
                  },
                  (0, d.we)("#Controller_Bindings"),
                ),
              o &&
                l.createElement(
                  w.CS,
                  { icon: w.Xb.PopOut, onClick: this.onOpenAppVideoSettings },
                  (0, d.we)("#App_Video_Settings"),
                ),
              s &&
                l.createElement(
                  c.$,
                  { className: "ButtonControl", onClick: this.onExitApp },
                  i ? (0, d.we)("#Exit_Home") : (0, d.we)("#Exit_Game"),
                ),
            ),
          );
        }
      }
      (0, i.Cg)([s.o], D.prototype, "onExitApp", null),
        (0, i.Cg)([s.o], D.prototype, "onReturnToGame", null),
        (0, i.Cg)(
          [s.o],
          D.prototype,
          "onOpenAppControllerBindingSettings",
          null,
        ),
        (0, i.Cg)([s.o], D.prototype, "onOpenAppVideoSettings", null);
      var B = r(9248),
        V = r(3712),
        I = r(1835),
        A = r(3696),
        O = r(6013),
        k = r(8803),
        L = r(1909),
        H = r(3689),
        P = r(296);
      const F = (0, P.PA)(function (e) {
          const { debugHostLocation: t, onGrabStart: r, onGrabEnd: n } = e,
            i = I.SW.isVRGamepadUI,
            s = !!I.SW.m_sKeyboardOverlayKey,
            o = !!(I.SW.m_nKeyboardFlags & a.QR.Minimal),
            c = i ? 2 : 1.5,
            d = i ? { y: -0.33, z: 0.15 } : { y: -0.25, z: 0.15 },
            m = i
              ? o
                ? { y: -0.62, z: 0.01 }
                : { y: -0.72, z: 0.01 }
              : o
                ? { y: -0.73, z: 0.05 }
                : { y: -0.87, z: 0.05 };
          return l.createElement(
            a.dL,
            { translation: d },
            l.createElement(
              a.dL,
              { scale: { y: c, x: c } },
              l.createElement(a.rF, { mountedId: (0, a.nX)(u.cb, u.Zw) }),
              l.createElement(a.rF, { mountedId: (0, a.nX)(u.cb, u.nY) }),
            ),
            false,
            s &&
              l.createElement(
                a.dL,
                { translation: m },
                l.createElement(V.X, {
                  tint: I.SW.GrabHandleTint,
                  onStartMove: r,
                  onEndMove: n,
                }),
              ),
          );
        }),
        N = (0, P.PA)(function () {
          return (
            I.SW.m_bKeyboardVisible &&
            !I.SW.m_bKeyboardDockedInDashboard &&
            l.createElement(
              a.sJ,
              { bContinuousRelatch: !1 },
              l.createElement(
                a.dL,
                {
                  translation: I.SW.dashboardTranslation,
                  scale: I.SW.dashboardScale,
                },
                l.createElement(
                  a.dL,
                  { translation: et.getDashboardBarTranslation() },
                  l.createElement(
                    a.dL,
                    { translation: et.k_nKeyboardGrabTransformOffset },
                    l.createElement(
                      B.B,
                      { min_distance: 0.2, should_head_align: !1 },
                      l.createElement(
                        a.dL,
                        {
                          translation: {
                            x: -1 * et.k_nKeyboardGrabTransformOffset.x,
                            y: -1 * et.k_nKeyboardGrabTransformOffset.y,
                            z: -1 * et.k_nKeyboardGrabTransformOffset.z,
                          },
                        },
                        l.createElement(
                          a.dL,
                          {
                            rotation: { x: et.k_nDashboardBarPitch },
                            curvature_pitch: et.k_nDashboardBarPitch,
                          },
                          l.createElement(F, { debugHostLocation: "Undocked" }),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            )
          );
        });
      var x = r(1295),
        W = r(4007),
        z = r(7600),
        G = r(6379),
        U = r(249),
        q = r(8723),
        j = r(998),
        K = r(4734),
        $ = r(5308),
        Z = r(3747);
      const J = (0, P.PA)(function (e) {
          var t;
          let r =
            null !== (t = VRHTML.GetHostInfo(a.k2.Hostname)) && void 0 !== t
              ? t
              : "unknown";
          return l.createElement(
            a.Zk,
            {
              meters_per_pixel: u.iZ,
              interactive: !0,
              debug_name: "vrlink-info",
            },
            l.createElement(
              "div",
              { className: "FloatingButtonRow" },
              l.createElement(
                c.$,
                { className: "ButtonControl", onClick: e.onClick },
                l.createElement("span", null, r.toLowerCase(), " "),
              ),
            ),
          );
        }),
        Q = (0, P.PA)(function (e) {
          const t = g.HR.settings.get(u.KP) && I.SW.isVRGamepadUI,
            r = (0, Z.mj)(u.Y8);
          return t || r
            ? l.createElement(
                a.Zk,
                {
                  meters_per_pixel: u.iZ,
                  interactive: !0,
                  debug_name: "dev-escape-hatch",
                },
                l.createElement(
                  "div",
                  { className: "FloatingButtonRow" },
                  t &&
                    l.createElement(
                      c.$,
                      {
                        className: "ButtonControl",
                        onClick: () =>
                          (I.SW.m_bShowLegacyDashboardBar =
                            !I.SW.m_bShowLegacyDashboardBar),
                      },
                      l.createElement(
                        "span",
                        null,
                        I.SW.m_bShowLegacyDashboardBar ? "Hide" : "Show",
                        " Legacy Dashboard Bar",
                      ),
                    ),
                  r &&
                    l.createElement(
                      c.$,
                      {
                        className: "ButtonControl",
                        onClick: () =>
                          VRHTML.VRPathProperties.SetBoolPathProperty(u.Y8, !1),
                      },
                      l.createElement("span", null, "End SystemUI OOBE Test"),
                    ),
                ),
              )
            : null;
        });
      class X extends l.Component {
        constructor(e) {
          super(e),
            (this.m_BatteryStateChangedCallbackHandle = null),
            (this.m_DeviceRoleChangedCallbackHandle = null),
            (this.m_DeviceEventCallbackHandle = null),
            (this.deviceIndex = a.ne),
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
          var e, t, r;
          null === (e = this.m_BatteryStateChangedCallbackHandle) ||
            void 0 === e ||
            e.unregister(),
            null === (t = this.m_DeviceRoleChangedCallbackHandle) ||
              void 0 === t ||
              t.unregister(),
            null === (r = this.m_DeviceEventCallbackHandle) ||
              void 0 === r ||
              r.unregister();
        }
        updateControllerStatus() {
          if (!VRHTML) return;
          let e = !1,
            t = !1,
            r = a.ne;
          if (
            (void 0 !== this.props.role
              ? (r = VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                  this.props.role,
                ))
              : void 0 !== this.props.deviceIndex &&
                (r = this.props.deviceIndex),
            r != this.deviceIndex &&
              ((this.batteryLevelStable = null),
              (this.devicePowerUsage = null),
              (this.deviceIndex = r)),
            r != a.ne)
          ) {
            if (
              ((e = VRHTML.VRProperties.GetBoolProperty(
                r,
                a.fD.DeviceProvidesBatteryStatus_Bool,
              )),
              e)
            ) {
              const e = VRHTML.VRProperties.GetFloatProperty(
                r,
                a.fD.DeviceBatteryPercentage_Float,
              );
              (t = VRHTML.VRProperties.GetBoolProperty(
                r,
                a.fD.DeviceIsCharging_Bool,
              )),
                null == this.batteryLevelStable || 0 == this.batteryLevelStable
                  ? (this.batteryLevelStable = e)
                  : ((this.batteryLevelStable = Math.min(
                      this.batteryLevelStable,
                      e + X.kBatteryLevelHysteresis,
                      1,
                    )),
                    (this.batteryLevelStable = Math.max(
                      this.batteryLevelStable,
                      e - X.kBatteryLevelHysteresis,
                      0,
                    )));
            }
            this.devicePowerUsage = VRHTML.VRProperties.GetFloatProperty(
              r,
              a.fD.DevicePowerUsage_Float,
            );
          }
          let n = j.C.GetBatteryIcon(
            e,
            t,
            this.batteryLevelStable,
            this.props.style,
          );
          n != this.state.batteryIconPath &&
            this.setState({ batteryIconPath: n });
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
        onDeviceEvent(e, t, r) {
          (e != a.ku.Activated && e != a.ku.Deactivated) || this.update();
        }
        render() {
          return l.createElement(
            "div",
            { className: "BatteryStatus" },
            this.devicePowerUsage &&
              l.createElement(
                "div",
                { className: "Label" },
                " ",
                Math.round(10 * this.devicePowerUsage) / 10,
                " W ",
              ),
            l.createElement("img", { src: this.state.batteryIconPath }),
          );
        }
      }
      (X.kBatteryLevelHysteresis = 0.02),
        (0, i.Cg)([s.o], X.prototype, "updateControllerStatus", null),
        (0, i.Cg)([s.o], X.prototype, "onBatteryStateChanged", null),
        (0, i.Cg)([s.o], X.prototype, "onDeviceRoleChanged", null),
        (0, i.Cg)([s.o], X.prototype, "onDeviceEvent", null);
      class Y extends l.Component {
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
          const e = d.A0.GetLocale();
          let t = this.state.time.toLocaleTimeString(e, {
              hour: "numeric",
              minute: "2-digit",
            }),
            r = null;
          const n = t.toLowerCase(),
            i = Math.max(n.lastIndexOf("am"), n.lastIndexOf("pm"));
          return (
            i >= 0 && ((r = t.substring(i)), (t = t.substring(0, i - 1))),
            l.createElement(
              "div",
              { className: "ClockContainer" },
              l.createElement(
                "div",
                { className: "Clock" },
                t,
                " ",
                l.createElement("span", { className: "Suffix" }, r),
              ),
            )
          );
        }
      }
      (0, i.Cg)([s.o], Y.prototype, "updateTime", null);
      const ee = (0, P.PA)(function (e) {
          const t = I.SW.activeFrame;
          return t
            ? l.createElement(
                "div",
                { className: "Title" },
                l.createElement($.D, {
                  icon: t.icon,
                  variant: "legacy-vrwebui",
                }),
                l.createElement("span", { className: "NoWrapText" }, t.title),
              )
            : null;
        }),
        te = (0, P.PA)(function (e) {
          const t = I.SW.isDarkMode,
            r = t ? { r: 0.02, g: 0.02, b: 0.02 } : null,
            n = t ? 0 : 0.1,
            i = !t;
          let s = null;
          if (
            K.Q.desktopFrames.includes(I.SW.activeFrame) ||
            K.Q.desktopWindowFrames.includes(I.SW.activeFrame)
          ) {
            s = 1860 - 20;
          }
          return l.createElement(
            l.Fragment,
            null,
            l.createElement(
              a.dL,
              { translation: { y: 0.008 } },
              l.createElement(
                a.N,
                { color: r },
                l.createElement(
                  a.Zk,
                  {
                    curvature_origin_id:
                      null == e ? void 0 : e.sCurvatureOriginId,
                    origin: a.Oi.BottomCenter,
                    interactive: !1,
                    meters_per_pixel: u.iZ,
                    debug_name: "StatusBar",
                    reflect: n,
                  },
                  l.createElement(
                    "div",
                    { className: "StatusBar", style: { width: s } },
                    l.createElement(
                      "div",
                      { className: "Section Left" },
                      i && l.createElement(ee, null),
                      l.createElement(X, {
                        role: a.kG.TrackedControllerRole_LeftHand,
                        style: j.b.HorizontalPips,
                      }),
                    ),
                    l.createElement(
                      "div",
                      { className: "Section Center" },
                      l.createElement(X, {
                        deviceIndex: a.Gz,
                        style: j.b.VerticalBattery,
                      }),
                      l.createElement(Y, null),
                    ),
                    l.createElement(
                      "div",
                      { className: "Section Right" },
                      l.createElement(X, {
                        role: a.kG.TrackedControllerRole_RightHand,
                        style: j.b.HorizontalPips,
                      }),
                    ),
                  ),
                ),
              ),
            ),
          );
        });
      var re = r(3496);
      class ne extends re._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "remote-transform";
        }
        buildNode(e, t) {
          var r;
          const n = this.createSgNode(t);
          return (
            (n.properties["remote-transform-rx"] =
              null === (r = this.props) || void 0 === r
                ? void 0
                : r.remote_transform_rx),
            [e, n]
          );
        }
      }
      (0, i.Cg)([s.o], ne.prototype, "buildNode", null);
      var ie = r(2156),
        ae = r(3246),
        se = r(8627);
      class oe {
        static get Instance() {
          return oe.s_Instance || (oe.s_Instance = new oe()), oe.s_Instance;
        }
        get muted() {
          return this.m_bMuted;
        }
        get mirrorMuted() {
          return this.m_bMirrorMuted;
        }
        get microphoneMuted() {
          return this.m_bMicrophoneMuted;
        }
        get volume() {
          return this.m_nVolume;
        }
        get mirrorVolume() {
          return this.m_nMirrorVolume;
        }
        get microphoneVolume() {
          return this.m_nMicrophoneVolume;
        }
        constructor() {
          (this.m_volumeChangedEventHandle = null),
            (this.m_nVolume = 0),
            (this.m_nMirrorVolume = 0),
            (this.m_nMicrophoneVolume = 0),
            (this.m_bMuted = !1),
            (this.m_bMirrorMuted = !1),
            (this.m_bMicrophoneMuted = !1),
            (this.m_volumeChangedEventHandle =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.RegisterForVolumeChangedEvents(
                    this.onSystemVolumeChanged,
                  )),
            this.onSystemVolumeChanged(),
            (0, o.makeObservable)(this);
        }
        cleanup() {
          var e;
          null === (e = this.m_volumeChangedEventHandle) ||
            void 0 === e ||
            e.unregister();
        }
        toggleMute() {
          (this.m_bMuted = !this.m_bMuted),
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRAudioDevices.SetMasterSoundVolumeMute(this.m_bMuted);
        }
        toggleMirrorMute() {
          (this.m_bMirrorMuted = !this.m_bMirrorMuted),
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRAudioDevices.SetMirrorSoundVolumeMute(
                this.m_bMirrorMuted,
              );
        }
        toggleMicrophoneMute() {
          (this.m_bMicrophoneMuted = !this.m_bMicrophoneMuted),
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRAudioDevices.SetMasterMicrophoneMute(
                this.m_bMicrophoneMuted,
              );
        }
        setVolume(e) {
          (e = Math.max(0, Math.min(1, e))) != this.m_nVolume &&
            ((this.m_nVolume = e),
            (this.m_bMuted = 0 == e),
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRAudioDevices.SetMasterSoundVolume(this.m_nVolume),
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRAudioDevices.SetMasterSoundVolumeMute(this.m_bMuted));
        }
        setMirrorVolume(e) {
          (e = Math.max(0, Math.min(1, e))) != this.m_nMirrorVolume &&
            ((this.m_nMirrorVolume = e),
            (this.m_bMirrorMuted = 0 == e),
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRAudioDevices.SetMirrorSoundVolume(this.m_nMirrorVolume),
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRAudioDevices.SetMirrorSoundVolumeMute(
                this.m_bMirrorMuted,
              ));
        }
        setMicrophoneVolume(e) {
          (e = Math.max(0, Math.min(1, e))) != this.m_nMicrophoneVolume &&
            ((this.m_nMicrophoneVolume = e),
            (this.m_bMicrophoneMuted = 0 == e),
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRAudioDevices.SetMasterMicrophoneVolume(
                this.m_nMicrophoneVolume,
              ),
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRAudioDevices.SetMasterMicrophoneMute(
                this.m_bMicrophoneMuted,
              ));
        }
        onSystemVolumeChanged() {
          VRHTML &&
            ((this.m_nVolume = VRHTML.VRAudioDevices.GetMasterSoundVolume()),
            (this.m_bMuted = VRHTML.VRAudioDevices.IsMasterSoundVolumeMute()),
            (this.m_nMirrorVolume =
              VRHTML.VRAudioDevices.GetMirrorSoundVolume()),
            (this.m_bMirrorMuted =
              VRHTML.VRAudioDevices.IsMirrorSoundVolumeMute()),
            (this.m_nMicrophoneVolume =
              VRHTML.VRAudioDevices.GetMasterMicrophoneVolume()),
            (this.m_bMicrophoneMuted =
              VRHTML.VRAudioDevices.IsMasterMicrophoneMute()));
        }
      }
      (oe.s_Instance = null),
        (0, i.Cg)([o.observable], oe.prototype, "m_nVolume", void 0),
        (0, i.Cg)([o.observable], oe.prototype, "m_nMirrorVolume", void 0),
        (0, i.Cg)([o.observable], oe.prototype, "m_nMicrophoneVolume", void 0),
        (0, i.Cg)([o.observable], oe.prototype, "m_bMuted", void 0),
        (0, i.Cg)([o.observable], oe.prototype, "m_bMirrorMuted", void 0),
        (0, i.Cg)([o.observable], oe.prototype, "m_bMicrophoneMuted", void 0),
        (0, i.Cg)([o.computed], oe.prototype, "muted", null),
        (0, i.Cg)([o.computed], oe.prototype, "mirrorMuted", null),
        (0, i.Cg)([o.computed], oe.prototype, "microphoneMuted", null),
        (0, i.Cg)([o.computed], oe.prototype, "volume", null),
        (0, i.Cg)([o.computed], oe.prototype, "mirrorVolume", null),
        (0, i.Cg)([o.computed], oe.prototype, "microphoneVolume", null),
        (0, i.Cg)([s.o], oe.prototype, "toggleMute", null),
        (0, i.Cg)([s.o], oe.prototype, "toggleMirrorMute", null),
        (0, i.Cg)([s.o], oe.prototype, "toggleMicrophoneMute", null),
        (0, i.Cg)([s.o], oe.prototype, "setVolume", null),
        (0, i.Cg)([s.o], oe.prototype, "setMirrorVolume", null),
        (0, i.Cg)([s.o], oe.prototype, "setMicrophoneVolume", null),
        (0, i.Cg)([s.o], oe.prototype, "onSystemVolumeChanged", null);
      var le,
        ce,
        ue = r(917),
        de = r(4963),
        me = r(7606);
      !(function (e) {
        e[(e.Fade = 0)] = "Fade";
      })(le || (le = {})),
        (function (e) {
          (e[(e.Hidden = 0)] = "Hidden"),
            (e[(e.Showing = 1)] = "Showing"),
            (e[(e.Shown = 2)] = "Shown"),
            (e[(e.Hiding = 3)] = "Hiding");
        })(ce || (ce = {}));
      class pe extends l.Component {
        constructor(e) {
          super(e),
            (this.m_nNextStateTimeoutHandle = void 0),
            (this.state = {
              eAnimationState: e.visible ? ce.Shown : ce.Hidden,
            });
        }
        componentDidMount() {
          this.emitStateCallback();
        }
        componentWillUnmount() {
          this.cancelTimeout();
        }
        cancelTimeout() {
          window.clearTimeout(this.m_nNextStateTimeoutHandle),
            (this.m_nNextStateTimeoutHandle = void 0);
        }
        emitStateCallback() {
          var e, t, r, n, i, a, s, o;
          switch (this.state.eAnimationState) {
            case ce.Showing:
              null === (t = (e = this.props).onStartShowing) ||
                void 0 === t ||
                t.call(e);
              break;
            case ce.Shown:
              null === (n = (r = this.props).onShown) ||
                void 0 === n ||
                n.call(r);
              break;
            case ce.Hiding:
              null === (a = (i = this.props).onStartHiding) ||
                void 0 === a ||
                a.call(i);
              break;
            case ce.Hidden:
              null === (o = (s = this.props).onHidden) ||
                void 0 === o ||
                o.call(s);
          }
        }
        componentDidUpdate(e, t) {
          this.state.eAnimationState != t.eAnimationState &&
            this.emitStateCallback(),
            this.props.visible != e.visible &&
              (this.cancelTimeout(),
              (this.m_nNextStateTimeoutHandle = window.setTimeout(
                this.finishAnimation,
                1e3 * this.props.duration,
              )),
              this.setState({
                eAnimationState: this.props.visible ? ce.Showing : ce.Hiding,
              }));
        }
        static getDerivedStateFromProps(e, t) {
          return {};
        }
        finishAnimation() {
          this.setState((e) => {
            switch (e.eAnimationState) {
              case ce.Showing:
                return { eAnimationState: ce.Shown };
              case ce.Hiding:
                return { eAnimationState: ce.Hidden };
            }
            return null;
          });
        }
        render() {
          return this.state.eAnimationState == ce.Hidden
            ? null
            : l.createElement(
                "div",
                {
                  className: (0, f.FH)(
                    "ShowHideAnimation",
                    ce[this.state.eAnimationState],
                    [
                      "Preset-" + le[this.props.preset],
                      void 0 !== this.props.preset,
                    ],
                    this.props.additionalClassName,
                  ),
                  style: { "--show-hide-duration": this.props.duration + "s" },
                },
                this.props.children,
              );
        }
      }
      (0, i.Cg)([s.o], pe.prototype, "cancelTimeout", null),
        (0, i.Cg)([s.o], pe.prototype, "finishAnimation", null);
      var he,
        ge = r(9283);
      class ve extends l.Component {
        constructor() {
          super(...arguments),
            (this.m_sAnchorID = Math.round(1e7 * Math.random()).toString()),
            (this.m_resizeObserver = null),
            (this.m_refPanelElem = l.createRef()),
            (this.m_refBackgroundElem = l.createRef());
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
          var e, t, r;
          const n = this.props.position,
            i = Math.asin(n) / Math.PI,
            s = null !== (e = this.props.scale) && void 0 !== e ? e : 1;
          return l.createElement(
            l.Fragment,
            null,
            l.createElement(
              a.Ci,
              { location: { x: n, y: -1 } },
              l.createElement(a.dL, {
                id: this.m_sAnchorID,
                translation: { y: 0.01 * Math.abs(i), z: -0.03 * Math.abs(i) },
                rotation: { y: 15 * i, z: 2 * i },
              }),
            ),
            l.createElement(
              p.b,
              {
                allowableParentSelectors: [".DashboardMain"],
                onPortalDidMount: this.onPortalDidMount,
              },
              l.createElement(
                a.N,
                { color: this.props.tintColor },
                l.createElement(
                  pe,
                  {
                    additionalClassName: "ControlBarTrayAnimation",
                    visible: this.props.visible,
                    duration: 0.25,
                    onStartShowing: this.updateBackgroundSize,
                    onShown: this.updateBackgroundSize,
                  },
                  l.createElement(
                    a.dL,
                    {
                      parent_id: this.m_sAnchorID,
                      translation: { y: 0.04 * s, z: -0.01 },
                      scale: s,
                    },
                    l.createElement(
                      a.Zk,
                      {
                        curvature_origin_id:
                          null !== (t = this.props.curvatureOriginId) &&
                          void 0 !== t
                            ? t
                            : null,
                        origin: a.Oi.TopCenter,
                        interactive: !0,
                        scrollable: !0,
                        meters_per_pixel: u.iZ,
                        sort_depth_bias: this.props.sort_depth_bias,
                        debug_name: "control-bar-tray",
                      },
                      l.createElement(
                        "div",
                        {
                          className: (0, f.FH)(
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
                    l.createElement(
                      a.dL,
                      { translation: { z: -1e-5 } },
                      l.createElement(
                        a.Zk,
                        {
                          curvature_origin_id:
                            null !== (r = this.props.curvatureOriginId) &&
                            void 0 !== r
                              ? r
                              : null,
                          origin: a.Oi.TopCenter,
                          interactive: !1,
                          scrollable: !1,
                          meters_per_pixel: 2 * u.iZ,
                          reflect: 0.005,
                          sampler: a._h.SingleTap,
                          sort_depth_bias: this.props.sort_depth_bias,
                          debug_name: "control-bar-tray-bg",
                        },
                        l.createElement("div", {
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
      function _e(e) {
        var t;
        const r = l.useRef(void 0),
          n = l.useRef(void 0),
          i = e.active;
        return (
          l.useEffect(() => {
            var e, t;
            null ===
              (t =
                null === (e = n.current) || void 0 === e ? void 0 : e.elem) ||
              void 0 === t ||
              t.scrollIntoView({ behavior: "smooth", inline: "nearest" });
          }, [i]),
          l.createElement(
            c.$,
            {
              className: (0, f.FH)(
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
                null === (t = r.current) || void 0 === t || t.show(),
                  e.onMouseEnter && e.onMouseEnter();
              },
              onMouseLeave: () => {
                var t;
                null === (t = r.current) || void 0 === t || t.hide(),
                  e.onMouseLeave && e.onMouseLeave();
              },
              enabled: e.enabled,
              ref: n,
            },
            e.title &&
              l.createElement(me.p, {
                text: e.title,
                translation: e.tooltipTranslation,
                ref: r,
              }),
            e.label && l.createElement("span", null, e.label),
            e.iconUrl &&
              l.createElement("img", {
                className: (0, ge.A)(
                  "Icon",
                  (null === (t = e.iconIsInverted) || void 0 === t || t) &&
                    "BlackToWhite",
                ),
                src: e.iconUrl,
              }),
            !e.iconUrl && e.icon,
          )
        );
      }
      function be(e) {
        return l.createElement(
          c.$,
          { className: "PowerMenuButton", onClick: e.onClick },
          l.createElement("div", { className: "HoverGradient" }),
          l.createElement("div", { className: "ClickGradient" }),
          l.createElement("span", null, e.label),
          e.lineBelow && l.createElement("div", { className: "LineBelow" }),
        );
      }
      (0, i.Cg)([s.o], ve.prototype, "onResizeObserved", null),
        (0, i.Cg)([s.o], ve.prototype, "updateBackgroundSize", null),
        (0, i.Cg)([s.o], ve.prototype, "onPortalDidMount", null),
        (function (e) {
          (e[(e.Large = 0)] = "Large"),
            (e[(e.Small = 1)] = "Small"),
            (e[(e.App = 2)] = "App");
        })(he || (he = {}));
      const Se = (e) =>
        l.createElement(
          "div",
          { className: (0, f.FH)("ControlBarGroup", he[e.style]) },
          e.children,
        );
      let ye = class extends l.Component {
        constructor(e) {
          super(e), (this.m_refTooltip = l.createRef());
        }
        onMouseEnter() {
          var e, t, r;
          null === (e = this.m_refTooltip.current) || void 0 === e || e.show(),
            null === (r = (t = this.props).onMouseEnter) ||
              void 0 === r ||
              r.call(t);
        }
        onMouseLeave() {
          var e, t, r;
          null === (e = this.m_refTooltip.current) || void 0 === e || e.hide(),
            null === (r = (t = this.props).onMouseLeave) ||
              void 0 === r ||
              r.call(t);
        }
        render() {
          var e;
          const t =
            null === (e = this.props.legacyImageUrl) || void 0 === e
              ? void 0
              : e.endsWith(".svg");
          return l.createElement(
            c.$,
            {
              className: (0, f.FH)(
                "ControlBarButton",
                this.props.additionalClassNames,
                "CenterImage",
                ["Disabled", !1 === this.props.enabled],
                ["Active", !!this.props.active],
              ),
              style: {
                "--image-url": this.props.legacyImageUrl
                  ? "url('" + this.props.legacyImageUrl + "')"
                  : void 0,
              },
              onClick: this.props.onClick,
              onMouseDown: this.props.onMouseDown,
              onMouseEnter: this.onMouseEnter,
              onMouseLeave: this.onMouseLeave,
              releaseSoundEffect: de.j.ControlBarButtonClick,
            },
            this.props.centerPanelAnchorID &&
              l.createElement(
                "div",
                { style: { position: "absolute", left: "50%", top: "50%" } },
                l.createElement(p.l, {
                  allowableParentSelectors: [".DashboardMain"],
                  panelAnchorID: this.props.centerPanelAnchorID,
                }),
              ),
            l.createElement(me.p, {
              text: this.props.label,
              ref: this.m_refTooltip,
            }),
            this.props.legacyImageUrl &&
              l.createElement(
                "div",
                { className: "Icon" },
                l.createElement("img", {
                  src: this.props.legacyImageUrl,
                  className: (0, ge.A)("Icon", t && "BlackToWhite"),
                }),
              ),
            !this.props.legacyImageUrl &&
              l.createElement($.D, {
                icon: this.props.icon,
                variant: "legacy-vrwebui",
              }),
          );
        }
      };
      (0, i.Cg)([s.o], ye.prototype, "onMouseEnter", null),
        (0, i.Cg)([s.o], ye.prototype, "onMouseLeave", null),
        (ye = (0, i.Cg)([v.PA], ye));
      const fe = (e) =>
        l.createElement(
          Se,
          { style: e.style },
          l.createElement(ye, Object.assign({}, e)),
        );
      let Re = class extends l.Component {
        constructor(e) {
          super(e), (this.m_refTooltip = l.createRef());
        }
        onMouseEnter() {
          var e;
          null === (e = this.m_refTooltip.current) || void 0 === e || e.show();
        }
        onMouseLeave() {
          var e;
          null === (e = this.m_refTooltip.current) || void 0 === e || e.hide();
        }
        render() {
          return l.createElement(
            Se,
            { style: he.App },
            l.createElement(
              c.$,
              {
                className: (0, f.FH)("ControlBarButton", "CenterImage", [
                  "Active",
                  !!this.props.active,
                ]),
                style: {
                  "--image-url": this.props.legacyImageUrl
                    ? "url('" + this.props.legacyImageUrl + "')"
                    : void 0,
                },
                onClick: this.props.onClick,
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave,
                releaseSoundEffect: de.j.ControlBarButtonClick,
              },
              l.createElement(me.p, {
                text: this.props.label,
                ref: this.m_refTooltip,
              }),
            ),
          );
        }
      };
      (0, i.Cg)([s.o], Re.prototype, "onMouseEnter", null),
        (0, i.Cg)([s.o], Re.prototype, "onMouseLeave", null),
        (Re = (0, i.Cg)([v.PA], Re));
      let we = class extends l.Component {
        constructor(e) {
          super(e), (this.state = { bSliding: !1, bHover: !1 });
        }
        onMouseEnter(e) {
          var t, r;
          this.setState({ bHover: !0 }),
            null === (r = (t = this.props).onMouseEnter) ||
              void 0 === r ||
              r.call(t, e);
        }
        onMouseLeave(e) {
          var t, r;
          this.setState({ bHover: !1 }),
            null === (r = (t = this.props).onMouseLeave) ||
              void 0 === r ||
              r.call(t, e);
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
          return l.createElement(
            "div",
            { className: "SliderContainer" },
            this.props.title &&
              l.createElement(me.p, {
                text: this.props.title,
                shown: this.state.bHover || this.state.bSliding,
              }),
            l.createElement(
              ue.Ap,
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
      (0, i.Cg)([s.o], we.prototype, "onMouseEnter", null),
        (0, i.Cg)([s.o], we.prototype, "onMouseLeave", null),
        (0, i.Cg)([s.o], we.prototype, "onInteractionStart", null),
        (0, i.Cg)([s.o], we.prototype, "onInteractionEnd", null),
        (we = (0, i.Cg)([P.PA], we));
      let Ce = class extends l.Component {
        constructor() {
          super(...arguments),
            (this.m_refSlider = l.createRef()),
            (this.m_refTray = l.createRef()),
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
            g.HR.settings.get(
              "/settings/audio/enablePlaybackMirrorIndependentVolume",
            ) && g.HR.settings.get("/settings/audio/enablePlaybackMirror")
          );
        }
        get enableAudioMirrorControls() {
          return !!g.HR.settings.get(
            "/settings/audio/activePlaybackMirrorDevice",
          );
        }
        render() {
          const e =
            (this.showAudioMirrorControls ? 3 : 2) >= 3
              ? 0
              : this.props.position;
          return l.createElement(
            ve,
            Object.assign({}, this.props, {
              position: e,
              ref: this.m_refTray,
              additionalClassNames: "VolumeTray",
            }),
            l.createElement(
              "div",
              { className: "Section" },
              l.createElement(
                Ee,
                {
                  onClick: oe.Instance.toggleMicrophoneMute,
                  title: oe.Instance.microphoneMuted
                    ? (0, d.we)("#UnmuteMicrophone")
                    : (0, d.we)("#MuteMicrophone"),
                },
                l.createElement("img", {
                  className: "BlackToWhite",
                  src: oe.Instance.microphoneMuted
                    ? "/dashboard/images/icons/svr_mic_mute.svg"
                    : "/dashboard/images/icons/svr_mic_active.svg",
                }),
              ),
              l.createElement(we, {
                title: (0, d.we)("#MicrophoneVolume"),
                value: oe.Instance.microphoneVolume,
                onChange: oe.Instance.setMicrophoneVolume,
                onMouseEnter: this.onSliderMouseEnter,
                onMouseLeave: this.onSliderMouseLeave,
                onFinalChange: this.onSliderFinalChange,
                renderValue: (e) => Math.round(100 * e) + "%",
                valueStyleVariant: ue.Te.OnHandle,
                additionalClassName: (0, f.FH)([
                  "Muted",
                  oe.Instance.microphoneMuted,
                ]),
                interactionEndSoundEffect: de.j.VolumePreview,
              }),
            ),
            this.showAudioMirrorControls &&
              l.createElement(
                "div",
                { className: "Section" },
                l.createElement(
                  Ee,
                  {
                    onClick: oe.Instance.toggleMirrorMute,
                    enabled: this.enableAudioMirrorControls,
                    title: oe.Instance.mirrorMuted
                      ? (0, d.we)("#UnmuteAudioMirror")
                      : (0, d.we)("#MuteAudioMirror"),
                  },
                  l.createElement("img", {
                    className: "BlackToWhite",
                    src: oe.Instance.mirrorMuted
                      ? "/dashboard/images/icons/svr_volume_mirror_mute.svg"
                      : "/dashboard/images/icons/svr_volume_mirror.svg",
                  }),
                ),
                l.createElement(we, {
                  title: (0, d.we)("#AudioMirrorVolume"),
                  value: oe.Instance.mirrorVolume,
                  enabled: this.enableAudioMirrorControls,
                  onChange: oe.Instance.setMirrorVolume,
                  onMouseEnter: this.onSliderMouseEnter,
                  onMouseLeave: this.onSliderMouseLeave,
                  onFinalChange: this.onSliderFinalChange,
                  renderValue: (e) => Math.round(100 * e) + "%",
                  valueStyleVariant: ue.Te.OnHandle,
                  additionalClassName: (0, f.FH)([
                    "Muted",
                    oe.Instance.mirrorMuted,
                  ]),
                  interactionEndSoundEffect: de.j.VolumePreview,
                }),
              ),
            l.createElement(
              "div",
              { className: "Section" },
              l.createElement(
                Ee,
                {
                  onClick: oe.Instance.toggleMute,
                  title: oe.Instance.muted
                    ? (0, d.we)("#Unmute_Headset")
                    : (0, d.we)("#Mute_Headset"),
                },
                l.createElement("img", {
                  className: "BlackToWhite",
                  src: oe.Instance.muted
                    ? "/dashboard/images/icons/svr_volume_mute.svg"
                    : "/dashboard/images/icons/svr_volume.svg",
                }),
              ),
              l.createElement(we, {
                title: (0, d.we)("#HeadsetVolume"),
                sliderRef: this.m_refSlider,
                value: oe.Instance.volume,
                onChange: oe.Instance.setVolume,
                onMouseEnter: this.onSliderMouseEnter,
                onMouseLeave: this.onSliderMouseLeave,
                onFinalChange: this.onSliderFinalChange,
                renderValue: (e) => Math.round(100 * e) + "%",
                valueStyleVariant: ue.Te.OnHandle,
                additionalClassName: (0, f.FH)(["Muted", oe.Instance.muted]),
                interactionEndSoundEffect: de.j.VolumePreview,
              }),
            ),
          );
        }
      };
      (0, i.Cg)([s.o], Ce.prototype, "onSliderMouseEnter", null),
        (0, i.Cg)([s.o], Ce.prototype, "onSliderMouseLeave", null),
        (0, i.Cg)([s.o], Ce.prototype, "onSliderFinalChange", null),
        (0, i.Cg)([o.computed], Ce.prototype, "showAudioMirrorControls", null),
        (0, i.Cg)(
          [o.computed],
          Ce.prototype,
          "enableAudioMirrorControls",
          null,
        ),
        (Ce = (0, i.Cg)([P.PA], Ce));
      let Me = class extends l.Component {
        onButtonMouseDown(e) {
          var t, r, n, i;
          this.props.active
            ? null === (r = (t = this.props).onHideTray) ||
              void 0 === r ||
              r.call(t)
            : null === (i = (n = this.props).onShowTray) ||
              void 0 === i ||
              i.call(n);
        }
        render() {
          return l.createElement(ye, {
            legacyImageUrl: oe.Instance.muted
              ? "/dashboard/images/icons/svr_volume_mute.svg"
              : "/dashboard/images/icons/svr_volume.svg",
            active: this.props.active,
            label: this.props.active ? null : (0, d.we)("#Volume"),
            onMouseDown: this.onButtonMouseDown,
            onMouseEnter: this.props.onMouseEnter,
            onMouseLeave: this.props.onMouseLeave,
          });
        }
      };
      (0, i.Cg)([s.o], Me.prototype, "onButtonMouseDown", null),
        (Me = (0, i.Cg)([P.PA], Me));
      let Ee = class extends l.Component {
        constructor(e) {
          super(e), (this.m_refTooltip = l.createRef());
        }
        onMouseEnter(e) {
          var t, r, n;
          null === (t = this.m_refTooltip.current) || void 0 === t || t.show(),
            null === (n = (r = this.props).onMouseEnter) ||
              void 0 === n ||
              n.call(r, e);
        }
        onMouseLeave(e) {
          var t, r, n;
          null === (t = this.m_refTooltip.current) || void 0 === t || t.hide(),
            null === (n = (r = this.props).onMouseLeave) ||
              void 0 === n ||
              n.call(r, e);
        }
        render() {
          return l.createElement(
            c.$,
            Object.assign({}, this.props, {
              className: (0, f.FH)(
                "ButtonControl",
                "Round",
                this.props.className,
              ),
              onMouseEnter: this.onMouseEnter,
              onMouseLeave: this.onMouseLeave,
            }),
            this.props.title &&
              l.createElement(me.p, {
                text: this.props.title,
                ref: this.m_refTooltip,
              }),
            this.props.children,
          );
        }
      };
      (0, i.Cg)([s.o], Ee.prototype, "onMouseEnter", null),
        (0, i.Cg)([s.o], Ee.prototype, "onMouseLeave", null),
        (Ee = (0, i.Cg)([P.PA], Ee));
      var Te,
        De = r(5615);
      let Be = (Te = class extends l.Component {
        constructor(e) {
          super(e),
            (this.m_mailbox = new a._n()),
            (this.m_refWindowScrollPanel = l.createRef()),
            (this.state = {}),
            this.m_mailbox.Init(Te.k_sMailboxName);
        }
        onWindowViewCreated(e, t) {
          var r, n;
          null === (r = this.m_refWindowScrollPanel.current) ||
            void 0 === r ||
            r.scrollTo({
              left:
                null === (n = this.m_refWindowScrollPanel.current) ||
                void 0 === n
                  ? void 0
                  : n.scrollWidth,
              behavior: "smooth",
            });
        }
        render() {
          const e = K.Q.windows.length > 0,
            t = K.Q.desktopFrames.length > 1 || e;
          if (!t && !e) return null;
          return l.createElement(
            ve,
            Object.assign({}, this.props, {
              additionalClassNames: "DesktopTray FixedWidth",
            }),
            l.createElement(
              De.M,
              {
                scrollDirection: De.D.Horizontal,
                className: "Section Grow DesktopAndWindowList",
                ref: this.m_refWindowScrollPanel,
              },
              l.createElement(
                "div",
                {
                  style: {
                    paddingRight: "16px",
                    display: "flex",
                    flexDirection: "row",
                    margin: 0,
                  },
                },
                t &&
                  K.Q.desktopFrames.map((e) =>
                    l.createElement(_e, {
                      additionalClassNames: "ViewButton",
                      key: e.frameID,
                      label: e.title,
                      active: e.isActiveDashboardFrame,
                      onClick: () => this.props.onFrameButtonClicked(e),
                    }),
                  ),
                K.Q.desktopWindowFrames.map((e) =>
                  l.createElement(_e, {
                    additionalClassNames: "ViewButton",
                    key: e.frameID,
                    label: e.title,
                    active: e.isActiveDashboardFrame,
                    onClick: () => this.props.onFrameButtonClicked(e),
                  }),
                ),
              ),
            ),
            e &&
              l.createElement(
                "div",
                { className: "Section", style: { marginRight: 0 } },
                l.createElement(_e, {
                  iconUrl: "/dashboard/images/icons/icon_add.png",
                  additionalClassNames: "AddWindow",
                  title: (0, d.we)("#AddView"),
                  tooltipTranslation: { x: 0, y: -0.15, z: 0.1 },
                  onClick: this.props.onToggleWindowList,
                  onMouseEnter: this.props.onClearPopoverMenuTimeout,
                  onMouseLeave: () => this.props.onStartPopoverMenuTimeout(500),
                }),
              ),
          );
        }
      });
      (Be.k_sMailboxName = "systemui_desktoptray"),
        (Be = Te = (0, i.Cg)([P.PA], Be));
      var Ve = r(9448);
      const Ie = (0, v.PA)(function (e) {
          var t;
          const { overlay: r } = e,
            [n, i] = l.useState(!1),
            s =
              null !==
                (t = W.Q.GetOverlayFlag(
                  r.sOverlayKey,
                  a.NB.EnableControlBarClose,
                )) &&
              void 0 !== t &&
              t,
            o = r.sOverlayKey == u.P || r.sOverlayKey.startsWith(u.bl),
            c = l.useCallback(() => {
              VRHTML.VRDashboardManager.SendOverlayClosed(r.sOverlayKey), i(!0);
            }, []);
          if (1 != r.eOverlayType) return null;
          if (!(r.unFlags & a.NB.VisibleInDashboard)) return null;
          if (r.sOverlayKey == u.wi || r.sOverlayKey == u.Wm) return null;
          if (
            K.Q.desktops.some((e) => e.overlay.sOverlayKey == r.sOverlayKey) ||
            K.Q.windows.some((e) => e.overlay_key == r.sOverlayKey)
          )
            return null;
          let m = !0,
            p = !1;
          r.unFlags & a.NB.NoDashboardTab && (m = !1);
          return (
            x.H.BHasMutualCapability(2) &&
              I.SF.includes(r.sOverlayKey) &&
              ((p = m), (m = !1)),
            l.createElement(
              C.wI,
              {
                title: r.sOverlayName,
                iconOverlayKey: r.sOverlayKey,
                showTabInDashboardBar: m,
                showTabInDashboardHamburgerMenu: p,
                closeButtonLabel: (0, d.we)(o ? "#QuitApp" : "#Close"),
                closeButtonIcon: n ? 32 : void 0,
                onCloseRequested: s ? c : void 0,
              },
              l.createElement(
                Ve.o3,
                null,
                l.createElement(Ve.dm, null),
                l.createElement(Ve.jF, null),
                l.createElement(Ve.U0, null),
              ),
              l.createElement(C.JQ, {
                overlayKey: r.sOverlayKey,
                requireExternalOverlay: !0,
              }),
            )
          );
        }),
        Ae = (0, v.PA)(function (e) {
          return l.createElement(
            l.Fragment,
            null,
            W.Q.overlays.map((e) =>
              l.createElement(Ie, { overlay: e, key: e.sOverlayKey }),
            ),
          );
        });
      var Oe = r(6663),
        ke = r(9674);
      function Le(e) {
        var t;
        const [r, n] = l.useState(void 0),
          [i, s] = l.useState(void 0),
          [c, m] = l.useState(void 0),
          p = (function (e, t) {
            const r = l.useRef(void 0);
            return (
              l.useEffect(
                () =>
                  (0, o.autorun)(() => {
                    (t = (null != t ? t : []).filter(Boolean)).includes(
                      null == e ? void 0 : e.activePage,
                    ) && (r.current = null == e ? void 0 : e.activePage);
                  }),
                [e, ...t],
              ),
              l.useCallback(() => {
                var e;
                if (
                  (null === (e = r.current) || void 0 === e
                    ? void 0
                    : e.state) == C.JP.Alive
                )
                  return r.current;
              }, [])
            );
          })(r, [i, c]);
        l.useEffect(() => I.SW.SetMainSteamFrame(r), [r]);
        const h = (0, b.useObserver)(() => ae.r.legacyFloatingMainMenuPopup),
          g = (0, b.useObserver)(() => !I.SW.isVRGamepadUI),
          v = (0, ke.E)();
        return l.createElement(
          C.wI,
          {
            title: g ? (0, d.we)("#Settings") : (0, d.we)("#Steam"),
            iconEnum: g ? 16 : 14,
            showTabInDashboardBar: !0,
            ref: n,
          },
          l.createElement(C.JQ, {
            overlayKey: u.wi,
            requireExternalOverlay: !0,
          }),
          !v && l.createElement(Oe.z, { env: "frame-page", pageRef: s }),
          !v &&
            l.createElement(C.JQ, {
              overlayKey: u.Wm,
              requireExternalOverlay: !1,
              ref: m,
            }),
          l.createElement(
            C.xE,
            null,
            l.createElement(C.RG, null),
            !v &&
              l.createElement(C.Vu, {
                actionParams: () => ({
                  display_name: (0, d.we)("#VRSettings"),
                  icon: { enum: 21 },
                  invocation: 1,
                  active:
                    (null == r ? void 0 : r.activePage) &&
                    ((null == r ? void 0 : r.activePage) == i ||
                      (null == r ? void 0 : r.activePage) == c),
                }),
                onInvoked: () => {
                  var e, t;
                  (null == r ? void 0 : r.activePage) == c &&
                  (null == r ? void 0 : r.isCurrentlyVisible)
                    ? r.SwitchToPage(null == i ? void 0 : i.pageID)
                    : r.SwitchToPage(
                        null !== (e = p()) && void 0 !== e ? e : i,
                      ),
                    !r.isCurrentlyVisible &&
                      (null === (t = r.activePage) || void 0 === t
                        ? void 0
                        : t.summonOverlayKey) &&
                      VRHTML.VROverlay.ShowDashboard(
                        r.activePage.summonOverlayKey,
                      );
                },
              }),
            l.createElement(
              C.QI,
              { onlyVisibleIn: "tab-hover-menu" },
              l.createElement(C.WF, null),
              l.createElement(C.U0, { params: { type: 5 } }),
            ),
          ),
          l.createElement(
            Ve.o3,
            null,
            l.createElement(Ve.dm, null),
            l.createElement(Ve.jF, null),
            l.createElement(Ve.U0, null),
          ),
          h &&
            l.createElement(
              a.dL,
              {
                parent_id:
                  null === (t = null == r ? void 0 : r.activePage) ||
                  void 0 === t
                    ? void 0
                    : t.GetPanelAnchorID(a.Oi.CenterLeft),
              },
              l.createElement(ie.O, { popupRequest: h }),
            ),
        );
      }
      var He,
        Pe = r(2505),
        Fe = r.n(Pe);
      !(function (e) {
        (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
      })(He || (He = {}));
      const Ne = (e) =>
        l.createElement(
          "div",
          {
            className: (0, f.FH)("ButtonContainer", He[e.side], [
              "Disabled",
              !1 === e.enabled,
            ]),
          },
          l.createElement(
            c.$,
            { className: "ButtonControl", onClick: e.onClick },
            e.side == He.Left
              ? l.createElement(l.Fragment, null, "‹")
              : l.createElement(l.Fragment, null, "›"),
          ),
        );
      class xe extends l.Component {
        constructor(e) {
          super(e),
            (this.m_refScrollPanel = l.createRef()),
            (this.m_nLastScrollWidth = 0),
            (this.m_nLastScrollLeft = 0),
            (this.m_bScrolling = !1),
            (this.m_nCurrentScrollTarget = null),
            (this.m_animationFrameRequestHandle = 0),
            (this.state = { bScrolledToStart: null, bScrolledToEnd: null });
        }
        componentDidMount() {
          this.updateButtonVisibilities(), this.requestAnimationFrame();
        }
        componentWillUnmount() {
          window.cancelAnimationFrame(this.m_animationFrameRequestHandle);
        }
        requestAnimationFrame() {
          this.m_animationFrameRequestHandle = window.requestAnimationFrame(
            this.onAnimationFrame,
          );
        }
        onAnimationFrame() {
          if (this.m_refScrollPanel.current) {
            const e = this.m_refScrollPanel.current.scrollWidth;
            e != this.m_nLastScrollWidth &&
              (this.updateButtonVisibilities(), (this.m_nLastScrollWidth = e));
            const t = this.m_refScrollPanel.current.scrollLeft;
            (this.m_bScrolling = t != this.m_nLastScrollLeft),
              this.m_bScrolling && (this.m_nLastScrollLeft = t);
          }
          this.requestAnimationFrame();
        }
        onScroll(e) {
          this.updateButtonVisibilities();
        }
        updateButtonVisibilities() {
          const e = this.m_refScrollPanel.current;
          e &&
            this.setState({
              bScrolledToStart: 0 == e.scrollLeft,
              bScrolledToEnd: e.scrollLeft + e.clientWidth == e.scrollWidth,
            });
        }
        onLeftButtonClick() {
          this.scroll(-1);
        }
        onRightButtonClick() {
          this.scroll(1);
        }
        scroll(e) {
          var t;
          const r = this.m_refScrollPanel.current;
          if (!r) return;
          if (r.isThrown)
            return void r.cancelThrowing(() => {
              (this.m_bScrolling = !1), this.scroll(e);
            });
          const n = r.children;
          if (!n || 0 == n.length) return;
          const i =
              null !== (t = this.props.paginationAlignmentOffset) &&
              void 0 !== t
                ? t
                : 0,
            a = n[0],
            s = this.m_bScrolling ? this.m_nCurrentScrollTarget : r.scrollLeft,
            o = a.getBoundingClientRect().left + r.scrollLeft,
            l = a.clientWidth,
            c = r.clientWidth,
            u = Math.floor(c / l) - 1,
            d = Math.round((s - o + i + 1) / l) + u * e - 0.4999,
            m = d > 0 ? d * l + o - i : 0;
          this.scrollToPosition(m);
        }
        scrollToPosition(e) {
          const t = this.m_refScrollPanel.current;
          t &&
            (t.scrollTo({ left: e, behavior: "smooth" }),
            (this.m_bScrolling = !0),
            (this.m_nCurrentScrollTarget = e));
        }
        render() {
          return l.createElement(
            "div",
            {
              className: (0, f.FH)(
                "PaginatedCarousel",
                this.props.additionalClassNames,
              ),
            },
            l.createElement(
              De.M,
              {
                ref: this.m_refScrollPanel,
                scrollDirection: De.D.Horizontal,
                onScroll: this.onScroll,
              },
              this.props.children,
            ),
            (!1 === this.state.bScrolledToStart ||
              !1 === this.state.bScrolledToEnd) &&
              l.createElement(
                "div",
                { className: "PaginationButtons" },
                null !== this.state.bScrolledToStart &&
                  l.createElement(Ne, {
                    side: He.Left,
                    enabled: !this.state.bScrolledToStart,
                    onClick: this.onLeftButtonClick,
                  }),
                null !== this.state.bScrolledToEnd &&
                  l.createElement(Ne, {
                    side: He.Right,
                    enabled: !this.state.bScrolledToEnd,
                    onClick: this.onRightButtonClick,
                  }),
              ),
          );
        }
      }
      (0, i.Cg)([s.o], xe.prototype, "onAnimationFrame", null),
        (0, i.Cg)([s.o], xe.prototype, "onScroll", null),
        (0, i.Cg)([s.o], xe.prototype, "onLeftButtonClick", null),
        (0, i.Cg)([s.o], xe.prototype, "onRightButtonClick", null);
      let We = class extends l.Component {
        constructor(e) {
          super(e),
            (this.m_scrollWatcher = new f.aw()),
            (this.m_refAnchoredParentPortal = l.createRef()),
            (this.m_refButton = l.createRef()),
            (this.state = { bShowPlay: !1 }),
            (this.m_scrollWatcher.onScrollStop = this.onParentScrollStop);
        }
        componentDidUpdate() {
          this.m_scrollWatcher.updateScrollableParents();
        }
        componentWillUnmount() {
          this.m_scrollWatcher.cleanup();
        }
        buttonMouseEnter() {
          var e, t;
          this.setState({ bShowPlay: !0 }),
            null ===
              (t =
                null === (e = this.m_refAnchoredParentPortal.current) ||
                void 0 === e
                  ? void 0
                  : e.panelAnchor) ||
              void 0 === t ||
              t.relatch();
        }
        buttonMouseLeave() {
          this.setState({ bShowPlay: !1 });
        }
        onParentScrollStop() {
          var e, t;
          null ===
            (t =
              null === (e = this.m_refAnchoredParentPortal.current) ||
              void 0 === e
                ? void 0
                : e.panelAnchor) ||
            void 0 === t ||
            t.relatch();
        }
        get shouldShowHoverContents() {
          return !this.m_scrollWatcher.isScrolling && this.state.bShowPlay;
        }
        render() {
          let e = Object.assign({}, this.props);
          return (
            delete e.onClick,
            l.createElement(
              "div",
              {
                className: (0, f.FH)(
                  "AppButtonContainer",
                  [
                    "AppOwned",
                    g.HR.probablyOwnedAppkeys.has(this.props.appkey),
                  ],
                  ["ShowingPopovers", this.shouldShowHoverContents],
                ),
              },
              l.createElement(
                c.$,
                {
                  className: "AppButton",
                  ref: this.m_refButton,
                  onMouseEnter: this.buttonMouseEnter,
                  onMouseLeave: this.buttonMouseLeave,
                  onClick: this.props.onClick,
                },
                l.createElement(R, Object.assign({}, e), this.props.children),
              ),
            )
          );
        }
      };
      (0, i.Cg)([s.o], We.prototype, "buttonMouseEnter", null),
        (0, i.Cg)([s.o], We.prototype, "buttonMouseLeave", null),
        (0, i.Cg)([s.o], We.prototype, "onParentScrollStop", null),
        (We = (0, i.Cg)([v.PA], We));
      const ze = () =>
          l.createElement("div", { className: "AppButton Placeholder" }),
        Ge = (e) => {
          var t;
          const r = !!e.loading,
            n = null !== (t = e.apps) && void 0 !== t ? t : [];
          let i = "AppCarousel";
          return (
            e.className && (i += " " + e.className),
            l.createElement(
              xe,
              { additionalClassNames: i, paginationAlignmentOffset: -20 },
              r &&
                l.createElement(
                  l.Fragment,
                  null,
                  l.createElement(ze, null),
                  l.createElement(ze, null),
                  l.createElement(ze, null),
                  l.createElement(ze, null),
                ),
              !r &&
                n.map((e) =>
                  l.createElement(We, Object.assign({ key: e.appkey }, e)),
                ),
            )
          );
        };
      var Ue;
      class qe extends l.Component {
        constructor(e) {
          super(e), (this.state = { storeData: null });
        }
        componentDidMount() {
          Fe()
            .get(
              "https://steamcommunity.com/steamvr/ajaxgethomedata/?include_apps=1&include_free_apps=1&num_apps=20",
            )
            .then((e) => e.data)
            .then((e) => this.setState({ storeData: e }));
        }
        render() {
          let e = [];
          if (this.state.storeData) {
            let t = this.state.storeData.apps_singleplayer.flatMap((e, t) => [
                this.state.storeData.apps_singleplayer[t],
                this.state.storeData.apps_multiplayer[t],
                this.state.storeData.apps_free[t],
              ]),
              r = new Set();
            for (; e.length < 12 && t.length; ) {
              for (; r.has(t[0].appid); ) t.shift();
              let n = t.shift();
              r.add(n.appid),
                e.push(
                  l.createElement(
                    c.$,
                    {
                      key: `appid_${n.appid}`,
                      className: `WelcomeFloatingApp WelcomeFloatingApp${e.length}`,
                      enabled: !1,
                    },
                    l.createElement("img", { src: n.logo }),
                  ),
                );
            }
          }
          return l.createElement(
            "div",
            { className: "QuickLaunchWelcome" },
            e,
            l.createElement(
              "div",
              { className: "QuickLaunchWelcomePrompt" },
              l.createElement(
                "div",
                { className: "QuickLaunchWelcomeHeader" },
                (0, d.we)("#WelcomeToSteamVR"),
              ),
              l.createElement(
                "div",
                { className: "QuickLaunchWelcomeMessage" },
                (0, d.we)("#LaunchSteamToFindGames"),
              ),
            ),
          );
        }
      }
      let je = (Ue = class extends l.Component {
        constructor(e) {
          super(e),
            (this.m_mailbox = new a._n()),
            (this.state = {}),
            this.m_mailbox.Init("systemui_quicklaunch");
        }
        launchApplication(e, t, r) {
          var n, i;
          m.v.instance.RecordUIEvent(
            "QuickLaunchAppClick",
            (t ? "top" : "bottom") + ":" + r,
            e.key,
          ),
            null === (i = (n = this.props).onGameLaunched) ||
              void 0 === i ||
              i.call(n, e);
          try {
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRApplications.LaunchApplication(e.key);
          } catch (t) {
            console.warn("Cannot launch application", e.key, t);
          }
        }
        makeAppButtonList() {
          let e = [];
          if (null != g.HR.apps)
            for (let t of g.HR.apps)
              t.is_internal ||
                (t.is_dashboard_overlay && !t.show_overlay_in_quicklaunch) ||
                t.is_hidden ||
                t.is_instance ||
                Ue.s_setBlacklistedAppkeys.has(t.key) ||
                e.push(t);
          e.sort((e, t) => {
            let r = t.library_priority - e.library_priority;
            return 0 == r && (r = t.last_launch - e.last_launch), r;
          });
          const t = (e) => {
            let t = e.image_path_capsule || e.image_path;
            return t.startsWith("/app/image?") && (t += "&aspect=portrait"), t;
          };
          return e.map((e, r) => {
            let n = r;
            const i = r < Ue.TOP_ROW_LENGTH;
            return (
              i || (n -= Ue.TOP_ROW_LENGTH),
              {
                key: e.key,
                appkey: e.key,
                title: e.name,
                imageUrl: t(e),
                onClick: () => this.launchApplication(e, i, n),
                children: l.createElement(
                  l.Fragment,
                  null,
                  l.createElement("div", { className: "PlayIconFade" }),
                  l.createElement("img", {
                    className: "PlayIcon",
                    src: "/dashboard/images/icons/svr_play.svg",
                  }),
                ),
              }
            );
          });
        }
        render() {
          let e,
            t = this.makeAppButtonList();
          const r =
            0 == t.length ||
            g.HR.settings.get("/settings/dashboard/forceWelcomeScreen");
          if (r) e = l.createElement(qe, null);
          else {
            let r = t.slice(0, Ue.TOP_ROW_LENGTH),
              n = t.slice(Ue.TOP_ROW_LENGTH);
            e = l.createElement(
              l.Fragment,
              null,
              l.createElement(Ge, { className: "TopRow", apps: r }),
              l.createElement(Ge, { className: "BottomRow", apps: n }),
            );
          }
          return l.createElement(
            M.a,
            {
              visible: !0,
              scrollable: !r,
              debugName: "quicklaunch",
              additionalClassNames: "QuickLaunch",
            },
            e,
          );
        }
      });
      function Ke(e) {
        const t = (0, I.Sm)(),
          r = !t || I.SW.m_bShowLegacyDashboardBar,
          n = l.useRef(void 0);
        return (
          l.useEffect(() => {
            var e;
            t &&
              r &&
              (null === (e = n.current) ||
                void 0 === e ||
                e.SetTabVisibility({ bVisibleInDashboardBar: !1 }));
          }, [t, r]),
          r
            ? l.createElement(
                C.wI,
                {
                  ref: n,
                  title: (0, d.we)("#OldLibrary"),
                  iconEnum: 19,
                  showTabInDashboardHamburgerMenu: t,
                  showTabInDashboardBar: !t || void 0,
                },
                l.createElement(Ve.o3, null, l.createElement(Ve.U0, null)),
                l.createElement(
                  C.P9,
                  { summonOverlayKey: u.Sx },
                  l.createElement(je, { onGameLaunched: e.onGameLaunched }),
                ),
              )
            : null
        );
      }
      (je.TOP_ROW_LENGTH = 4),
        (je.s_setBlacklistedAppkeys = new Set([
          "openvr.tool.steamvr_room_setup",
          "openvr.tool.steamvr_media_player",
          "openvr.tool.steamvr_desktop_gametheatre",
          "openvr.tool.steamvr_tutorial",
          "openvr.tool.steamvr_environments",
          "openvr.tool.steamvr_environments_tools",
          u.MM,
          u.v0,
        ])),
        (je = Ue = (0, i.Cg)([v.PA], je));
      var $e,
        Ze,
        Je = r(9776),
        Qe = r(1651);
      !(function (e) {
        (e[(e.Near = 0)] = "Near"),
          (e[(e.Middle = 1)] = "Middle"),
          (e[(e.Far = 2)] = "Far"),
          (e[(e.VRGamepadUI = 3)] = "VRGamepadUI");
      })(Ze || (Ze = {}));
      class Xe extends l.Component {
        componentDidMount() {
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VRChaperone.ForceBoundsVisible(!0);
        }
        componentWillUnmount() {
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VRChaperone.ForceBoundsVisible(!1);
        }
        render() {
          return null;
        }
      }
      function Ye(e) {
        var t;
        const r =
          null === (t = W.Q.GetOverlayInfo(e)) || void 0 === t
            ? void 0
            : t.sHandle;
        try {
          return r ? VRHTML.VROverlay.GetVisibleTimeInSeconds(r) : 0;
        } catch (t) {
          return (
            console.warn(
              "Invalid overlayHandle returned from GetOverlayInfo",
              e,
              r,
            ),
            0
          );
        }
      }
      let et = ($e = class extends l.Component {
        constructor(e) {
          super(e),
            (this.m_setSuppressingFade = new Set()),
            (this.m_refPopoverMenu = l.createRef()),
            (this.m_appStateChangedAutorunDisposer = null),
            (this.m_DashboardTabsReactionDisposer = null),
            (this.m_DashboardTabsUpdatedReactionDisposer = null),
            (this.m_LegacyKeyboardAutorunDisposer = null),
            (this.m_refDesktopTray = l.createRef()),
            (this.m_sLastActiveOverlaySummonKey = void 0),
            (this.m_activeOverlayThatVanished = void 0),
            (this.m_bUserManuallySwitchToOldLibrary = !1),
            (this.m_bWaitingOnInitialOverlayToAutoShow = !1),
            (this.m_dashboardThumbnailsChangedEventHandle = null),
            (this.m_ePreviousSceneApplicationState = a.HW.None),
            (this.m_vrGamepadUIPathPropertiesAutorunDisposer = null),
            (this.m_gamepadFocusAutorunDisposer = null),
            (0, o.makeObservable)(this),
            (this.state = {}),
            g.HR.Init(!1),
            a.Cw.getInstance(),
            I.SW.m_mailbox.WaitForConnect().then(() => {
              I.SW.m_mailbox.RegisterHandler(
                $e.k_sSetDashboardFadeSupressionMessage,
                this.onSetDashboardFadeSuppression,
              ),
                I.SW.m_mailbox.RegisterHandler(
                  $e.k_sDashboardOverlayDestroyedMessage,
                  this.onDashboardOverlayDestroyed,
                ),
                I.SW.m_mailbox.RegisterHandler(
                  "show_dashboard_requested",
                  (e) => this.onShowDashboardRequested(e, !0),
                ),
                I.SW.m_mailbox.RegisterHandler(
                  "switch_dashboard_overlay_requested",
                  (e) => this.onShowDashboardRequested(e, !1),
                ),
                I.SW.m_mailbox.RegisterHandler("vrcmd_dock_overlay", (e) =>
                  this.onVrCmdDockOverlayRequested(e),
                ),
                I.SW.m_mailbox.RegisterHandler(
                  "vrcmd_toggle_theater_stereo",
                  () => I.SW.onVrCmdToggleTheaterStereoRequested(),
                ),
                I.SW.m_mailbox.RegisterHandler(
                  "hide_dashboard_requested",
                  this.onHideDashboardRequested,
                ),
                I.SW.m_mailbox.RegisterHandler("vrlink_room_setup", (e) =>
                  this.onVRLinkRoomSetup(e),
                ),
                I.SW.m_mailbox.RegisterHandler("required_room_setup", (e) =>
                  this.onRequiredRoomSetup(e),
                ),
                I.SW.m_mailbox.RegisterHandler("disable_theater_mode", (e) =>
                  this.onDisableTheaterMode(e),
                );
            }),
            L.p.SteamVR.SetImplementation(
              "DashboardTabClicked",
              ({ tab_id: e }) => {
                var t, r, n, i;
                let a = C.JJ.GetFrameWithTabId(e);
                if (
                  (e == C.Sq.LegacyFloatingSteamMainMenu_VRSettings &&
                    ((a = C.JJ.GetFramesWithAssociatedSummonKeys(u.Wt)[0]),
                    (null === (t = null == a ? void 0 : a.activePage) ||
                    void 0 === t
                      ? void 0
                      : t.summonOverlayKey) != u.Wt &&
                      (null === (r = null == a ? void 0 : a.activePage) ||
                      void 0 === r
                        ? void 0
                        : r.summonOverlayKey) != u.Wm &&
                      (null == a ||
                        a.SwitchToPage(
                          null === (n = a.GetPageWithOverlaySummonKey(u.Wt)) ||
                            void 0 === n
                            ? void 0
                            : n.pageID,
                        ))),
                  (null == a
                    ? void 0
                    : a.associatedSummonOverlayKeys.includes(u.Sx)) &&
                    (this.m_bUserManuallySwitchToOldLibrary = !0),
                  !this.switchToFrameInternal(
                    a,
                    void 0,
                    "User clicked VRGamepadUI tab",
                  ))
                )
                  throw new Error(
                    "Failed to switch to tab: " +
                      e +
                      " (frameID: " +
                      (null !== (i = null == a ? void 0 : a.frameID) &&
                      void 0 !== i
                        ? i
                        : "null") +
                      ")",
                  );
              },
            ),
            L.p.SteamVR.SetImplementation(
              "ShowGame",
              this.onShowOverlayRequestFromSteam,
            ),
            L.p.SteamVR.SetImplementation(
              "ShowOverlay",
              this.onShowOverlayRequestFromSteam,
            );
        }
        componentDidMount() {
          (window.Dashboard = this),
            (this.m_dashboardThumbnailsChangedEventHandle =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.RegisterForOverlayThumbnailsChanged(() =>
                    this.forceUpdate(),
                  )),
            this.GetDesiredInitialOverlayKey() &&
              (this.m_bWaitingOnInitialOverlayToAutoShow = !0),
            (this.m_appStateChangedAutorunDisposer = (0, o.autorun)(() => {
              var e, t, r;
              const n = h.G.Instance.SceneApplicationState,
                i = n != a.HW.None,
                s = this.m_ePreviousSceneApplicationState != a.HW.None;
              if (i && !s) I.SW.HideTheaterOverlay();
              else if (!i && s && !I.SW.isTheaterMode) {
                if (
                  null !==
                    (e = g.HR.settings.get(
                      "/settings/dashboard/autoShowGameTheater",
                    )) &&
                  void 0 !== e &&
                  e
                ) {
                  const e = C.JJ.frames.find((e) =>
                    e.associatedSummonOverlayKeys.some((e) =>
                      e.startsWith(u.bl),
                    ),
                  );
                  null == e || e.docking.SetInTheater();
                }
              }
              (this.m_ePreviousSceneApplicationState = n),
                (null ===
                  (r =
                    null === (t = I.SW.activeFrame) || void 0 === t
                      ? void 0
                      : t.activePage) || void 0 === r
                  ? void 0
                  : r.summonOverlayKey) != u.dw ||
                  i ||
                  this.switchToHomeOverlay();
            })),
            I.SW.m_mailbox.WaitForConnect().then(() => {
              this.m_LegacyKeyboardAutorunDisposer = (0, o.autorun)(() => {
                I.SW.isVRGamepadUI ||
                  (!I.SW.m_bDashboardVisible && !I.SW.m_bKeyboardVisible) ||
                  I.SW.m_mailbox.SendMessage("keyboard_vrwebui/main", {
                    type: "dummy",
                  });
              });
            }),
            (this.m_DashboardTabsUpdatedReactionDisposer = (0, o.autorun)(
              this.onDashboardTabsUpdated,
            )),
            (this.m_vrGamepadUIPathPropertiesAutorunDisposer = (0, o.autorun)(
              () => {
                this.updateVRGamepadUIPathProperties();
              },
            )),
            (this.m_gamepadFocusAutorunDisposer = (0, o.autorun)(() => {
              const e = I.SW.priorityGamepadFocusOverlay,
                t = h.G.Instance.SceneApplicationState !== a.HW.None;
              I.SW.m_bDashboardVisible ||
              !e ||
              t ||
              (0 != A.H.roomSetupStep && 6 != A.H.roomSetupStep)
                ? this.SetGamepadFocusEnable(!1, null)
                : this.SetGamepadFocusEnable(!0, e);
            }));
        }
        componentDidUpdate(e, t) {
          this.updateVRGamepadUIPathProperties();
        }
        updateVRGamepadUIPathProperties() {
          var e,
            t,
            r,
            n,
            i,
            a,
            s,
            o,
            l,
            c,
            d,
            m,
            p,
            h,
            v,
            _,
            b,
            S,
            y,
            f,
            R,
            w,
            M,
            E,
            T,
            D,
            B,
            V,
            A,
            L,
            P,
            F,
            N,
            W,
            z,
            G,
            j,
            $,
            Z,
            J,
            Q,
            X;
          const Y = new O.UQ();
          for (const e of C.JJ.frames)
            Y.add_tabs(O.MS.fromObject(e.tab)),
              e === I.SW.activeFrame && Y.set_selected_tab_id(e.tab.tab_id),
              e == I.SW.mainSteamFrame && Y.set_vr_steam_tab_id(e.tab.tab_id);
          Y.tabs().sort(it);
          const ee = new O._z();
          ee.add_bar_buttons(
            O.Gm.fromObject({
              type: 3,
              action_id:
                null === (e = H.DZ[1]) || void 0 === e ? void 0 : e.actionID,
              is_main_hamburger_menu: !0,
            }),
          ),
            ee.add_bar_menu_items(
              O.my.fromObject({
                type: 2,
                parent_menu_action_id:
                  null === (t = H.DZ[1]) || void 0 === t ? void 0 : t.actionID,
              }),
            ),
            ee.add_bar_menu_items(
              O.my.fromObject({
                type: 3,
                parent_menu_action_id:
                  null === (r = H.DZ[1]) || void 0 === r ? void 0 : r.actionID,
              }),
            ),
            (null === (n = H.DZ[7]) || void 0 === n ? void 0 : n.isValid) &&
              ee.add_bar_buttons(
                O.Gm.fromObject({
                  type: 3,
                  action_id:
                    null === (i = H.DZ[7]) || void 0 === i
                      ? void 0
                      : i.actionID,
                }),
              ),
            (null === (a = H.DZ[10]) || void 0 === a ? void 0 : a.isValid) &&
              (ee.add_bar_menu_items(
                O.my.fromObject({
                  type: 1,
                  action_id:
                    null === (s = H.DZ[10]) || void 0 === s
                      ? void 0
                      : s.actionID,
                  parent_menu_action_id:
                    null === (o = H.DZ[7]) || void 0 === o
                      ? void 0
                      : o.actionID,
                }),
              ),
              ee.add_playspace_actions(
                null === (l = H.DZ[10]) || void 0 === l ? void 0 : l.actionID,
              )),
            (null === (c = H.DZ[9]) || void 0 === c ? void 0 : c.isValid) &&
              (ee.add_bar_menu_items(
                O.my.fromObject({
                  type: 1,
                  action_id:
                    null === (d = H.DZ[9]) || void 0 === d
                      ? void 0
                      : d.actionID,
                  parent_menu_action_id:
                    null === (m = H.DZ[7]) || void 0 === m
                      ? void 0
                      : m.actionID,
                }),
              ),
              ee.add_playspace_actions(
                null === (p = H.DZ[9]) || void 0 === p ? void 0 : p.actionID,
              )),
            (null === (h = H.DZ[8]) || void 0 === h ? void 0 : h.isValid) &&
              ((null === (v = H.DZ[7]) || void 0 === v ? void 0 : v.isValid)
                ? ee.add_bar_menu_items(
                    O.my.fromObject({
                      type: 1,
                      action_id:
                        null === (_ = H.DZ[8]) || void 0 === _
                          ? void 0
                          : _.actionID,
                      parent_menu_action_id:
                        null === (b = H.DZ[7]) || void 0 === b
                          ? void 0
                          : b.actionID,
                    }),
                  )
                : ee.add_bar_buttons(
                    O.Gm.fromObject({
                      type: 1,
                      action_id:
                        null === (S = H.DZ[8]) || void 0 === S
                          ? void 0
                          : S.actionID,
                    }),
                  ),
              ee.add_playspace_actions(
                null === (y = H.DZ[8]) || void 0 === y ? void 0 : y.actionID,
              )),
            (null === (f = H.DZ[11]) || void 0 === f ? void 0 : f.isValid) &&
              (ee.add_bar_menu_items(
                O.my.fromObject({
                  type: 1,
                  action_id:
                    null === (R = H.DZ[11]) || void 0 === R
                      ? void 0
                      : R.actionID,
                  parent_menu_action_id:
                    null === (w = H.DZ[7]) || void 0 === w
                      ? void 0
                      : w.actionID,
                }),
              ),
              ee.add_playspace_actions(
                null === (M = H.DZ[11]) || void 0 === M ? void 0 : M.actionID,
              )),
            (null === (E = H.DZ[2]) || void 0 === E ? void 0 : E.isValid) &&
              ee.add_bar_menu_items(
                O.my.fromObject({
                  type: 1,
                  action_id:
                    null === (T = H.DZ[2]) || void 0 === T
                      ? void 0
                      : T.actionID,
                  parent_menu_action_id:
                    null === (D = H.DZ[1]) || void 0 === D
                      ? void 0
                      : D.actionID,
                }),
              ),
            (null === (B = H.DZ[3]) || void 0 === B ? void 0 : B.isValid) &&
              ee.add_bar_menu_items(
                O.my.fromObject({
                  type: 1,
                  action_id:
                    null === (V = H.DZ[3]) || void 0 === V
                      ? void 0
                      : V.actionID,
                  parent_menu_action_id:
                    null === (A = H.DZ[1]) || void 0 === A
                      ? void 0
                      : A.actionID,
                }),
              ),
            (null === (L = H.DZ[4]) || void 0 === L ? void 0 : L.isValid) &&
              ee.add_bar_buttons(
                O.Gm.fromObject({
                  type: 1,
                  action_id:
                    null === (P = H.DZ[4]) || void 0 === P
                      ? void 0
                      : P.actionID,
                }),
              ),
            ee.add_bar_buttons(O.Gm.fromObject({ type: 2 })),
            (null === (F = H.DZ[6]) || void 0 === F ? void 0 : F.isValid) &&
              ee.add_bar_buttons(
                O.Gm.fromObject({
                  type: 1,
                  action_id:
                    null === (N = H.DZ[6]) || void 0 === N
                      ? void 0
                      : N.actionID,
                }),
              ),
            (null === (W = H.DZ[5]) || void 0 === W ? void 0 : W.isValid) &&
              ee.add_bar_buttons(
                O.Gm.fromObject({
                  type: 1,
                  action_id:
                    null === (z = H.DZ[5]) || void 0 === z
                      ? void 0
                      : z.actionID,
                }),
              ),
            ee.add_bar_menu_items(
              O.my.fromObject({
                type: 4,
                parent_menu_action_id:
                  null === (G = H.DZ[1]) || void 0 === G ? void 0 : G.actionID,
              }),
            );
          const te = new Set();
          for (const e of ee.bar_buttons()) te.add(e.action_id());
          for (const e of ee.bar_menu_items())
            te.add(e.action_id()), te.add(e.parent_menu_action_id());
          for (const e of te) {
            const t = H.g.GetAction(e);
            (null == t ? void 0 : t.protoForSteam) &&
              ee.add_defined_actions(q.z.fromObject(t.protoForSteam));
          }
          const re = new O.J$();
          re.set_windows(
            K.Q.windows.map((e) => {
              var t;
              const r = new O.gL();
              if (
                (r.set_hwnd(Number.parseInt(e.hwnd)),
                r.set_window_id(Number.parseInt(e.hwnd)),
                r.set_title(e.title),
                e.overlay_key)
              ) {
                const n = K.Q.desktopWindowFrames.find((t) =>
                  t.associatedSummonOverlayKeys.includes(e.overlay_key),
                );
                r.set_tab_id(
                  null === (t = null == n ? void 0 : n.tab) || void 0 === t
                    ? void 0
                    : t.tab_id,
                );
              }
              return r;
            }),
          );
          const ne = new O.T4();
          if (
            (ne.set_can_sleep(
              g.HR.settings.get("/settings/dashboard/allowSystemSleep"),
            ),
            ne.set_can_shutdown(
              g.HR.settings.get("/settings/dashboard/allowSystemShutdown"),
            ),
            ne.set_can_restart_system(
              g.HR.settings.get("/settings/dashboard/allowSystemRestart"),
            ),
            ne.set_can_exitvr(
              !ke.T.isOOBE &&
                (null ===
                  (j = g.HR.settings.get("/settings/dashboard/allowExitVR")) ||
                  void 0 === j ||
                  j),
            ),
            null != ae.r.legacyFloatingMainMenuPopup &&
              (Y.add_tabs(
                O.MS.fromObject({
                  tab_id: C.Sq.LegacyFloatingSteamMainMenu_VRSettings,
                  visible_in_dashboard_bar: !0,
                }),
              ),
              Y.set_deprecated_vr_settings_tab_id(
                C.Sq.LegacyFloatingSteamMainMenu_VRSettings,
              ),
              !(null === ($ = I.SW.mainSteamFrame) || void 0 === $
                ? void 0
                : $.isActiveDashboardFrame) ||
                ((null ===
                  (J =
                    null === (Z = I.SW.mainSteamFrame) || void 0 === Z
                      ? void 0
                      : Z.activePage) || void 0 === J
                  ? void 0
                  : J.summonOverlayKey) != u.Wt &&
                  (null ===
                    (X =
                      null === (Q = I.SW.mainSteamFrame) || void 0 === Q
                        ? void 0
                        : Q.activePage) || void 0 === X
                    ? void 0
                    : X.summonOverlayKey) != u.Wm) ||
                Y.set_selected_tab_id(
                  C.Sq.LegacyFloatingSteamMainMenu_VRSettings,
                )),
            x.H.BHasMutualCapability(3) || (0, U.RE)(ee),
            x.H.BHasMutualCapability(14) || (0, U.w1)(ee),
            !x.H.BHasMutualCapability(10))
          ) {
            for (const e of ee.deprecated_actions()) (0, U.vI)(e);
            for (const e of Y.tabs()) (0, U.g7)(e);
          }
          (0, k.Z)(Y), (0, k.Z)(ee), (0, k.Z)(re), (0, k.Z)(ne);
        }
        componentWillUnmount() {
          var e, t, r, n, i, a, s;
          clearTimeout(this.m_timeoutHoverStateEnd),
            Je.Z.clearPopoverMenuTimeout(),
            null === (e = this.m_appStateChangedAutorunDisposer) ||
              void 0 === e ||
              e.call(this),
            null === (t = this.m_DashboardTabsReactionDisposer) ||
              void 0 === t ||
              t.call(this),
            null === (r = this.m_DashboardTabsUpdatedReactionDisposer) ||
              void 0 === r ||
              r.call(this),
            null === (n = this.m_vrGamepadUIPathPropertiesAutorunDisposer) ||
              void 0 === n ||
              n.call(this),
            null === (i = this.m_gamepadFocusAutorunDisposer) ||
              void 0 === i ||
              i.call(this),
            null === (a = this.m_LegacyKeyboardAutorunDisposer) ||
              void 0 === a ||
              a.call(this),
            null === (s = this.m_dashboardThumbnailsChangedEventHandle) ||
              void 0 === s ||
              s.unregister();
        }
        static getDashboardBarTranslation() {
          return I.SW.isVRGamepadUI
            ? { y: -1.2, z: 0.35 }
            : { y: -1.2, z: 0.15 };
        }
        onShowOverlayRequestFromSteam(e) {
          const t = C.JJ.GetFramesWithAssociatedSummonKeys(e.overlay_key)[0];
          t
            ? (t.SwitchToPage(t.GetPageWithOverlaySummonKey(e.overlay_key)),
              t.docking.dockLocation == se.yW.Dashboard
                ? null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.VROverlay.ShowDashboard(e.overlay_key)
                : t != I.SW.mainSteamFrame &&
                  (null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VRDashboardManager.HideDashboard(
                      `ShowGame/${se.yW[t.docking.dockLocation]}`,
                    )))
            : console.log(
                "ShowGame/ShowOverlay called with invalid overlay_key",
                e.overlay_key,
              );
        }
        onSetDashboardFadeSuppression(e) {
          e.suppress_dashboard_fade
            ? this.m_setSuppressingFade.add(e.for_id)
            : this.m_setSuppressingFade.delete(e.for_id);
          const t = this.m_setSuppressingFade.size > 0;
          t != I.SW.m_bSuppressingFadeExternal &&
            (I.SW.m_bSuppressingFadeExternal = t);
        }
        onGrabStart() {
          I.SW.m_bDashboardIsBeingDragged = !0;
        }
        onGrabEnd() {
          I.SW.m_bDashboardIsBeingDragged = !1;
          for (const e of C.JJ.frames)
            e.docking && (e.docking.m_bJustFloatedFromDashboard = !1);
        }
        onDashboardOverlayDestroyed(e) {
          var t;
          (null === (t = I.SW.activeFrame) || void 0 === t
            ? void 0
            : t.associatedSummonOverlayKeys.includes(e.overlay_key)) &&
            this.switchToHomeOverlay();
          const r = C.JJ.GetFramesWithAssociatedSummonKeys(e.overlay_key)[0];
          null == r ||
            r.docking.RecordDockStats(e.overlay_key, e.visible_time_in_seconds);
        }
        onDashboardTabsUpdated() {
          var e, t, r, n, i;
          const a = this.m_sLastActiveOverlaySummonKey;
          (this.m_sLastActiveOverlaySummonKey =
            null !==
              (r =
                null ===
                  (t =
                    null === (e = I.SW.activeFrame) || void 0 === e
                      ? void 0
                      : e.activePage) || void 0 === t
                  ? void 0
                  : t.summonOverlayKey) && void 0 !== r
              ? r
              : null),
            this.autoSwitchOverlayIfNeeded(),
            this.m_activeOverlayThatVanished &&
              C.JJ.HasFramesWithAssociatedSummonKeys(
                this.m_activeOverlayThatVanished.sSummonKey,
              ) &&
              (this.m_activeOverlayThatVanished = null);
          const s = this.GetDesiredInitialOverlayKey();
          this.m_bWaitingOnInitialOverlayToAutoShow &&
            C.JJ.HasFramesWithAssociatedSummonKeys(s) &&
            ((this.m_bWaitingOnInitialOverlayToAutoShow = !1),
            VRHTML.VROverlay.ShowDashboard(this.GetDesiredInitialOverlayKey())),
            a &&
              !C.JJ.HasFramesWithAssociatedSummonKeys(a) &&
              (this.m_activeOverlayThatVanished = {
                sSummonKey: a,
                timeVanished: new Date(),
              }),
            (null === (n = I.SW.activeFrame) || void 0 === n
              ? void 0
              : n.tabVisibility.bVisibleInDashboardHamburgerMenu) &&
              !(null === (i = I.SW.activeFrame) || void 0 === i
                ? void 0
                : i.tabVisibility.bVisibleInDashboardBar) &&
              I.SW.activeFrame.SetTabVisibility({ bVisibleInDashboardBar: !0 });
        }
        GetDesiredInitialOverlayKey() {
          const e = g.HR.settings.get(u.Bf);
          if (e) return e;
          const t = sessionStorage.getItem("last_active_overlay_key");
          return (
            t ||
            (h.G.Instance.SceneApplicationState == a.HW.None
              ? I.SW.isVRGamepadUI
                ? u.wi
                : u.Sx
              : void 0)
          );
        }
        switchToHomeOverlay() {
          const e = [u.wi, u.Sx];
          for (const t of e)
            if (C.JJ.HasFramesWithAssociatedSummonKeys(t)) {
              this.switchToOverlayInternal(t, "switchToDashboardLibrary");
              break;
            }
        }
        switchToOverlayInternal(e, t) {
          if (e == u.Bz) {
            let t = {
                type: "show_app_binding",
                app_key:
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VRApplications.GetSceneApplicationKey(),
              },
              r = "bindingui/" + a.OH[(0, a.R$)()];
            I.SW.m_mailbox.SendMessage(r, t), (e = u.Wm);
          }
          const r = C.JJ.GetFramesWithAssociatedSummonKeys(e)[0];
          if (!r) return !1;
          const n = r.GetPageWithOverlaySummonKey(e);
          return !!n && this.switchToFrameInternal(r, n.pageID, t);
        }
        switchToFrameInternal(e, t, r) {
          var n;
          const i = e instanceof C.HC ? e : C.JJ.GetFrame(e);
          if (!i) return !1;
          const a = null != t ? i.GetPageWithID(t) : i.activePage;
          return (
            Je.Z.legacyFilteredOverlayTabs.includes(i) &&
              g.HR.SetSettingsValue(
                u.XO,
                null !== (n = null == a ? void 0 : a.summonOverlayKey) &&
                  void 0 !== n
                  ? n
                  : "",
              ),
            (this.m_activeOverlayThatVanished = null),
            null != t && i.SwitchToPage(t),
            (I.SW.activeFrame = i),
            (this.m_sLastActiveOverlaySummonKey =
              null == a ? void 0 : a.summonOverlayKey),
            (null == a ? void 0 : a.summonOverlayKey) &&
              (m.v.instance.RecordUIEvent(
                "SetDashboardOverlay",
                null != r ? r : "Button",
                null == a ? void 0 : a.summonOverlayKey,
              ),
              setTimeout(() => {
                sessionStorage.setItem(
                  "last_active_overlay_key",
                  null == a ? void 0 : a.summonOverlayKey,
                );
              }, 300)),
            !0
          );
        }
        autoSwitchOverlayIfNeeded() {
          var e, t, r;
          const n = [],
            i =
              null !==
                (r =
                  null ===
                    (t =
                      null === (e = I.SW.activeFrame) || void 0 === e
                        ? void 0
                        : e.activePage) || void 0 === t
                    ? void 0
                    : t.summonOverlayKey) && void 0 !== r
                ? r
                : null;
          if (
            (this.m_bWaitingOnInitialOverlayToAutoShow &&
              n.push(this.GetDesiredInitialOverlayKey()),
            this.m_activeOverlayThatVanished)
          ) {
            (new Date().getTime() -
              this.m_activeOverlayThatVanished.timeVanished.getTime()) /
              1e3 <
              $e.k_nTimeLimitToReturnToActiveOverlayThatVanishedSeconds &&
              n.push(this.m_activeOverlayThatVanished.sSummonKey);
          }
          (null == i ||
            (i == u.Sx && !this.m_bUserManuallySwitchToOldLibrary)) &&
            W.Q.BOverlayExists(u.wi) &&
            n.push(u.wi),
            null == i && n.push(u.Sx);
          for (const e of n) {
            const t = C.JJ.GetFramesWithAssociatedSummonKeys(e).filter(
              (e) => e.tabVisibility.bVisibleInDashboardBar,
            );
            if (t.length > 0) {
              const r = t[0];
              this.switchToFrameInternal(
                r,
                r.GetPageWithOverlaySummonKey(e).pageID,
                "autoSwitchOverlayIfNeeded",
              );
              break;
            }
          }
        }
        switchToLegacyDashboardDesktopFrame() {
          K.Q.lastActiveDesktopOrWindowFrame &&
            this.switchToFrameInternal(K.Q.lastActiveDesktopOrWindowFrame);
        }
        hideMessageOverlay() {
          var e, t;
          (null ===
            (t =
              null === (e = I.SW.activeFrame) || void 0 === e
                ? void 0
                : e.activePage) || void 0 === t
            ? void 0
            : t.summonOverlayKey) == u.Qv && this.switchToHomeOverlay();
        }
        onShowDashboardRequested(e, t) {
          var r;
          if (!g.HR.settings.get("/settings/dashboard/enableDashboard")) return;
          const n = C.JJ.GetFramesWithAssociatedSummonKeys(e.overlay_key)[0];
          (null == n ? void 0 : n.docking.dockLocation) != se.yW.Theater &&
            (t &&
              (this.show(
                null !== (r = e.reason) && void 0 !== r ? r : "unknown",
              ),
              this.setDashboardVisibility(
                !0,
                e.tracked_device_index,
                e.reason,
              )),
            e.overlay_key
              ? (null == n ? void 0 : n.docking.dockLocation) != se.yW.Boot &&
                this.switchToOverlayInternal(e.overlay_key, e.reason)
              : I.SW.isTheaterMode
                ? I.SW.theaterFrame != I.SW.mainSteamFrame &&
                  I.SW.isVRGamepadUI &&
                  L.p.Steam.ExecuteSteamURL({
                    url: "steam://open/apprunningcontrols",
                  }).catch((e) => {
                    console.error("ExecuteSteamURL Error:", e);
                  })
                : this.autoSwitchOverlayIfNeeded());
        }
        onVrCmdDockOverlayRequested(e) {
          var t;
          const r = (() => {
              switch (e.dock_location) {
                case "dashboard":
                  return se.yW.Dashboard;
                case "lefthand":
                  return se.yW.LeftHand;
                case "righthand":
                  return se.yW.RightHand;
                case "theater":
                  return se.yW.Theater;
                case "world":
                  return se.yW.World;
              }
            })(),
            n =
              null !==
                (t = C.JJ.GetFramesWithAssociatedSummonKeys(
                  e.overlay_key,
                )[0]) && void 0 !== t
                ? t
                : I.SW.activeFrame;
          n
            ? n.docking.dockLocation !== r
              ? (n.docking.SetDockLocation(r),
                r && this.switchToFrameInternal(n))
              : console.log(
                  "dock_overlay_requested: ignoring redundant request",
                  e,
                )
            : console.log("dock_overlay_requested: unknown overlay_key", e);
        }
        onHideDashboardRequested(e) {
          if (ke.T.isOOBE) ke.T.ResetDashboardTransform();
          else if (!I.SW.showLoadingThrobberOrBootOverlay)
            if (VRHTML.VRDashboardManager.HasMessageOverlay())
              this.switchToOverlayInternal(u.Qv, "onHideDashboardRequested");
            else {
              this.hideMessageOverlay(),
                VRHTML.VRDashboardManager.CloseKeyboard(),
                this.hide(e.reason),
                this.setDashboardVisibility(!1, void 0, e.reason);
              for (const e of C.JJ.frames)
                e.docking && (e.docking.m_bJustFloatedFromDashboard = !1);
            }
        }
        onVRLinkRoomSetup(e) {
          e.mode == a.$Z.RecenterCountdown
            ? A.H.setRoomSetupStep(1)
            : e.mode == a.$Z.FloorAdjustExisting
              ? A.H.setRoomSetupStep(2)
              : e.mode == a.$Z.RoomSetupFloor
                ? A.H.setRoomSetupStep(3)
                : e.mode == a.$Z.RoomSetupFull
                  ? A.H.setRoomSetupStep(7)
                  : e.mode == a.$Z.ClearRoomSetup
                    ? VRHTML.VRChaperoneSetup.ClearRoomSetup()
                    : console.error("Unknown onVRLinkRoomSetup mode ", e.mode);
        }
        onRequiredRoomSetup(e) {
          A.H.startRequiredRoomSetupIfNeeded();
        }
        onDisableTheaterMode(e) {
          console.log("onDisableTheaterMode"), I.SW.HideTheaterOverlay();
        }
        setDashboardVisibility(e, t, r) {
          let n = {
            type: "set_dashboard_visibility",
            tracked_device_index: t,
            visible: e,
            reason: r,
          };
          I.SW.m_mailbox.SendMessage(a.pg, n);
        }
        show(e) {
          if (I.SW.m_bDashboardVisible) return;
          m.v.instance.StartDashboardSession(e);
          const t = h.G.Instance.SceneAppKey,
            r = h.G.Instance.SceneAppIsHome;
          t &&
            t != I.SW.m_sLastShownAppKey &&
            ((I.SW.m_sLastShownAppKey = t),
            r
              ? this.switchToHomeOverlay()
              : this.switchToOverlayInternal(u.dw, "show")),
            (this.m_activeOverlayThatVanished = null),
            (I.SW.m_bDashboardVisible = !0),
            (0, a.Em)();
        }
        hide(e) {
          I.SW.m_bDashboardVisible &&
            ((this.m_activeOverlayThatVanished = null),
            (I.SW.m_bDashboardVisible = !1),
            Je.Z.showPopoverMenu(0),
            m.v.instance.EndDashboardSession(e));
        }
        onLegacyQuickLaunchButtonClick() {
          this.switchToOverlayInternal(u.Sx);
        }
        SetGamepadFocusEnable(e, t) {
          if (
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VRProperties.GetBoolProperty(
                  "/user/head",
                  a.fD.Prop_Hmd_SupportsVRGamepadFocus_Bool,
                )
          ) {
            let r = {
              type: "set_enable_vr_gamepad_focus",
              enable: e,
              sOverlayKey: t,
            };
            I.SW.m_mailbox.SendMessage(a.pg, r);
          }
        }
        renderLegacyPowerMenu() {
          var e;
          const t = !!(null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.SceneAppRunning()),
            r = g.HR.settings.get("/settings/dashboard/allowAppQuitting"),
            n = null === (e = H.DZ[3]) || void 0 === e ? void 0 : e.isValid;
          let i = !1;
          if (VRHTML) {
            VRHTML.VROverlay.GetPrimaryDashboardDevice() >= 0 &&
              (i = VRHTML.VRProperties.GetBoolProperty(
                VRHTML.VROverlay.GetPrimaryDashboardDevice(),
                a.fD.DeviceCanPowerOff_Bool,
              ));
          }
          const s = h.G.Instance.SceneAppName,
            o = h.G.Instance.SceneAppIsHome;
          let c, m;
          return (
            (c = o
              ? (0, d.we)("#Exit_SteamVR_Home")
              : s
                ? (0, d.we)("#PowerMenuQuitSceneApp", s)
                : (0, d.we)("#PowerMenuQuitSceneApp_NoApp")),
            (m = o
              ? "/dashboard/images/icons/svr_svrhome_quit_alt.svg"
              : "/dashboard/images/icons/svr_app_quit.svg"),
            this.renderPopoverMenu(
              l.createElement(
                l.Fragment,
                null,
                I.SW.isVRGamepadUI &&
                  l.createElement(be, {
                    label: (0, d.we)("#OldLibrary"),
                    lineBelow: !0,
                    onClick: () => {
                      (this.m_bUserManuallySwitchToOldLibrary = !0),
                        this.switchToOverlayInternal(u.Sx),
                        Je.Z.showPopoverMenu(0);
                    },
                  }),
                i &&
                  l.createElement(be, {
                    label: (0, d.we)("#PowerMenuTurnOffController"),
                    onClick: () => {
                      null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.TurnOffVRController(),
                        Je.Z.showPopoverMenu(0);
                    },
                  }),
                r &&
                  t &&
                  l.createElement(be, {
                    label: c,
                    onClick: () => {
                      null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.QuitSceneApp(),
                        Je.Z.showPopoverMenu(0);
                    },
                  }),
                l.createElement(be, {
                  label: (0, d.we)("#PowerMenuExitVR"),
                  onClick: () =>
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.QuitSteamVR(),
                }),
                n &&
                  l.createElement(be, {
                    label: (0, d.we)("#PowerMenuShutdown"),
                    onClick: () =>
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.SystemShutdownMachine(),
                  }),
              ),
            )
          );
        }
        renderPopoverMenu(e) {
          return l.createElement(
            "div",
            {
              className: "PowerMenuContainer",
              onMouseLeave: this.popoverMenuMouseLeave,
              onMouseEnter: Je.Z.clearPopoverMenuTimeout,
              ref: this.m_refPopoverMenu,
            },
            l.createElement(
              De.M,
              { className: "PowerMenuPanel", scrollDirection: De.D.Vertical },
              e,
            ),
          );
        }
        popoverMenuMouseLeave(e) {
          0 == e.buttons
            ? Je.Z.startPopoverMenuTimeout(100)
            : window.document.addEventListener(
                "mouseup",
                this.popoverMenuMouseUp,
              );
        }
        popoverMenuMouseUp(e) {
          window.document.removeEventListener(
            "mouseup",
            this.popoverMenuMouseUp,
          ),
            this.m_refPopoverMenu.current &&
              !(function (e, t, r) {
                let n = r.getBoundingClientRect();
                return (
                  e >= n.left && e <= n.right && t >= n.top && t <= n.bottom
                );
              })(e.clientX, e.clientY, this.m_refPopoverMenu.current) &&
              Je.Z.startPopoverMenuTimeout(100);
        }
        getCollisionBoundsFadeVisualizationElements() {
          var e;
          const t =
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VRChaperoneSetup.GetLiveCollisionBoundsInfo();
          if (!t) return [];
          let r = [];
          const n =
            null !== (e = g.HR.settings.get(u.Vv)) && void 0 !== e ? e : 0.7;
          for (let e of t) {
            let t = (0, a.e_)((0, a.JZ)(e[3], e[0])),
              i = (0, a.e_)((0, a.JZ)(e[1], e[0])),
              s = (0, a.oN)(t, i),
              o = (0, a.Ld)((0, a.qF)(t, i, s)),
              c = (0, a.Uj)((0, a.JZ)(e[0], e[3]));
            if (c < 0.4) continue;
            let u = Math.max(1, Math.floor(c));
            for (let t = 0; t < u; t++) {
              let i = (t + 1) / (u + 1),
                s = (0, a.vx)();
              (s.rotation = o),
                (s.translation = (0, a.Se)(i, e[0], e[3])),
                (s.scale = { x: 0.005, y: 0.005, z: n });
              let c = l.createElement(
                a.dL,
                { transform: s },
                l.createElement(
                  a.Y4,
                  { value: 0.25 },
                  l.createElement(
                    a.N,
                    { color: { r: 0.2, g: 0.2, b: 0.2 } },
                    l.createElement(a.aX, {
                      source: "laser_pointer",
                      wireframe: !1,
                      culling: a.Vh.Backface,
                    }),
                  ),
                ),
              );
              r.push(c);
            }
            if (r.length > 20) break;
          }
          return r;
        }
        render() {
          const e = 0 != A.H.roomSetupStep && 6 != A.H.roomSetupStep;
          return l.createElement(
            l.Fragment,
            null,
            !e &&
              l.createElement(
                "div",
                { className: "DashboardMain" },
                I.SW.shouldForceBoundsVisible &&
                  l.createElement(
                    l.Fragment,
                    null,
                    l.createElement(Xe, null),
                    this.getCollisionBoundsFadeVisualizationElements(),
                  ),
                l.createElement(tt, null, this.renderDashboardContents()),
                l.createElement(N, null),
                l.createElement(Ke, { onGameLaunched: this.onGameLaunched }),
                l.createElement(T, { onExitGame: this.switchToHomeOverlay }),
                l.createElement(Le, null),
                l.createElement(Ae, null),
                this.renderUndockedFrames(),
                !1,
              ),
          );
        }
        renderExternalOverlayDashboardBarButton(e) {
          return l.createElement(ye, {
            key: e.frameID,
            label: e.title,
            icon: e.icon,
            active: I.SW.activeFrame == e,
            onClick: () => this.switchToFrameInternal(e),
          });
        }
        renderLegacyDashboardBar(e, t) {
          var r, n, i, s, o, m, v, _, b, S, y, f, R;
          const w =
              null ===
                (r = g.HR.settings.get(
                  "/settings/dashboard/showPowerOptions",
                )) ||
              void 0 === r ||
              r,
            M =
              null ===
                (n = g.HR.settings.get("/settings/dashboard/showDesktop")) ||
              void 0 === n ||
              n,
            E =
              null === (i = C.JJ.GetFramesWithAssociatedSummonKeys(u.Sx)[0]) ||
              void 0 === i
                ? void 0
                : i.tabVisibility.bVisibleInDashboardBar,
            T = !(
              null !==
                (s = g.HR.settings.get("/settings/dashboard/arcadeMode")) &&
              void 0 !== s &&
              s
            ),
            D = h.G.Instance.SceneApplicationState,
            B = h.G.Instance.SceneAppIsHome,
            V = I.SW.allowCurvature ? u.uv : null,
            A = h.G.Instance.SceneAppKey;
          let O = "images/appimage_default.png";
          A && (O = "/app/image?app_key=" + A);
          const k = Je.Z.isLegacyDesktopTrayActive,
            L = Je.Z.isLegacyVolumeTrayActive,
            P = k ? { y: -0.27, z: 0 } : { y: -0.07, z: 0 };
          return l.createElement(
            l.Fragment,
            null,
            l.createElement(
              l.Fragment,
              null,
              l.createElement(
                a.N,
                { color: I.SW.DashboardBarTint },
                l.createElement(
                  a.dL,
                  { translation: { z: 1e-5 } },
                  l.createElement(
                    a.Zk,
                    {
                      curvature_origin_id: V,
                      meters_per_pixel: u.iZ,
                      interactive: !0,
                      debug_name: "Controls",
                    },
                    l.createElement(
                      c.W,
                      { className: "ControlBar MainControlBar" },
                      l.createElement(
                        "div",
                        { className: "Section Left" },
                        w &&
                          l.createElement(fe, {
                            legacyImageUrl:
                              "/dashboard/images/icons/svr_menu_c.svg",
                            label: (0, d.we)("#Menu"),
                            style: he.Small,
                            onClick: () => Je.Z.showPopoverMenu(1),
                            onMouseEnter: Je.Z.clearPopoverMenuTimeout,
                            onMouseLeave: () =>
                              Je.Z.startPopoverMenuTimeout(500),
                          }),
                        l.createElement(
                          Se,
                          { style: he.Small },
                          E &&
                            l.createElement(ye, {
                              label: (0, d.we)("#Library"),
                              legacyImageUrl:
                                "/dashboard/images/icons/svr_items.svg",
                              active:
                                (null ===
                                  (m =
                                    null === (o = I.SW.activeFrame) ||
                                    void 0 === o
                                      ? void 0
                                      : o.activePage) || void 0 === m
                                  ? void 0
                                  : m.summonOverlayKey) == u.Sx,
                              onClick: this.onLegacyQuickLaunchButtonClick,
                            }),
                          M &&
                            l.createElement(ye, {
                              legacyImageUrl:
                                "/dashboard/images/icons/svr_desktop_alt.svg",
                              label:
                                K.Q.desktopFrames.length > 1
                                  ? (0, d.we)("#Desktops")
                                  : (0, d.we)("#Desktop"),
                              active: Je.Z.isLegacyDesktopTrayActive,
                              onClick: () =>
                                this.switchToLegacyDashboardDesktopFrame(),
                            }),
                        ),
                        l.createElement(
                          Se,
                          { style: he.Small },
                          l.createElement(
                            l.Fragment,
                            null,
                            e.map(this.renderExternalOverlayDashboardBarButton),
                            t.length > 0 &&
                              l.createElement(ye, {
                                legacyImageUrl:
                                  "/dashboard/images/icons/svr_more.svg",
                                label: (0, d.we)("#X_More_Overlays", t.length),
                                active: 2 == Je.Z.activeLegacyDashboardPopover,
                                onClick: () => Je.Z.showPopoverMenu(2),
                                onMouseEnter: Je.Z.clearPopoverMenuTimeout,
                                onMouseLeave: () =>
                                  Je.Z.startPopoverMenuTimeout(500),
                              }),
                          ),
                        ),
                      ),
                      l.createElement(
                        "div",
                        { className: "Section Center" },
                        D != a.HW.None &&
                          l.createElement(
                            "div",
                            { className: "NowPlayingSpacer" },
                            l.createElement(
                              p.l,
                              { allowableParentSelectors: [".DashboardMain"] },
                              l.createElement(
                                a.N,
                                { color: I.SW.DashboardBarTint },
                                l.createElement(
                                  a.dL,
                                  { translation: { z: 0.02 } },
                                  l.createElement(
                                    a.Zk,
                                    {
                                      debug_name: "NowPlayingButton",
                                      interactive: !0,
                                      curvature_origin_id: V,
                                      meters_per_pixel: u.iZ,
                                    },
                                    l.createElement(
                                      "div",
                                      { className: "ControlBar" },
                                      l.createElement(Re, {
                                        label: B
                                          ? (0, d.we)("#SteamVR_Home")
                                          : (0, d.we)("#Now_Playing"),
                                        active:
                                          (null ===
                                            (_ =
                                              null === (v = I.SW.activeFrame) ||
                                              void 0 === v
                                                ? void 0
                                                : v.activePage) || void 0 === _
                                            ? void 0
                                            : _.summonOverlayKey) == u.dw,
                                        legacyImageUrl: O,
                                        onClick: () =>
                                          this.switchToOverlayInternal(u.dw),
                                      }),
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                      ),
                      l.createElement(
                        "div",
                        { className: "Section Right" },
                        l.createElement(
                          Se,
                          { style: he.Small },
                          (null === (b = H.DZ[8]) || void 0 === b
                            ? void 0
                            : b.isValid) &&
                            l.createElement(ye, {
                              icon: { enum: 3 },
                              additionalClassNames: "CenterImageLarge",
                              label: (0, d.we)("#Button_Recenter"),
                              onClick: () => {
                                H.DZ[8].Invoke();
                              },
                            }),
                          (null === (S = H.DZ[10]) || void 0 === S
                            ? void 0
                            : S.isValid) &&
                            l.createElement(ye, {
                              legacyImageUrl:
                                "/dashboard/images/icons/svr_room_setup.svg",
                              additionalClassNames: "CenterImageLarge",
                              label: (0, d.we)("#RoomSetup"),
                              onClick: () => {
                                H.DZ[10].Invoke();
                              },
                            }),
                          (null === (y = H.DZ[4]) || void 0 === y
                            ? void 0
                            : y.isValid) &&
                            l.createElement(ye, {
                              legacyImageUrl:
                                "/dashboard/images/icons/svr_eye.svg",
                              label: (0, d.we)("#Toggle_Room_View"),
                              onClick: () => {
                                H.DZ[4].Invoke(!G.c.roomViewEnabled);
                              },
                              active: G.c.roomViewEnabled,
                              enabled:
                                null === VRHTML || void 0 === VRHTML
                                  ? void 0
                                  : VRHTML.VROverlayInternal.HasCameraRoomViewCapability(),
                            }),
                          l.createElement(Me, {
                            active: Je.Z.isLegacyVolumeTrayActive,
                            onShowTray: () => Je.Z.showPopoverMenu(3),
                            onHideTray: () => Je.Z.showPopoverMenu(0),
                            onMouseEnter: Je.Z.clearPopoverMenuTimeout,
                            onMouseLeave: () =>
                              Je.Z.startPopoverMenuTimeout(500),
                          }),
                        ),
                        T &&
                          l.createElement(fe, {
                            icon: { enum: 16 },
                            active:
                              (null ===
                                (R =
                                  null === (f = I.SW.activeFrame) ||
                                  void 0 === f
                                    ? void 0
                                    : f.activePage) || void 0 === R
                                ? void 0
                                : R.summonOverlayKey) == u.Wt,
                            enabled: C.JJ.HasFramesWithAssociatedSummonKeys(
                              u.Wt,
                            ),
                            label: (0, d.we)("#VRSettings"),
                            style: he.Small,
                            centerPanelAnchorID: "VolumeButton",
                            onClick: () => this.switchToOverlayInternal(u.Wt),
                          }),
                      ),
                    ),
                    this.renderLegacyDashboardBarTrays(V),
                    l.createElement(a.dL, {
                      id: u.GW,
                      translation: { y: 0.3 },
                    }),
                    l.createElement(
                      a.Ci,
                      { location: a.Oi.BottomCenter },
                      !L && l.createElement(a.dL, { id: u.kx, translation: P }),
                    ),
                  ),
                ),
              ),
            ),
          );
        }
        renderLegacyDashboardBarTrays(e, t) {
          const r = I.SW.isDarkMode ? { r: 0.25, g: 0.25, b: 0.25 } : null;
          return l.createElement(
            l.Fragment,
            null,
            l.createElement(Be, {
              ref: this.m_refDesktopTray,
              curvatureOriginId: e,
              scale: t,
              position: 0,
              visible: Je.Z.isLegacyDesktopTrayActive,
              tintColor: r,
              onToggleWindowList: () => Je.Z.showPopoverMenu(4),
              onClearPopoverMenuTimeout: () => Je.Z.clearPopoverMenuTimeout(),
              onStartPopoverMenuTimeout: (e) => Je.Z.startPopoverMenuTimeout(e),
              sort_depth_bias: 0.2,
              onFrameButtonClicked: this.switchToFrameInternal,
            }),
            l.createElement(Ce, {
              curvatureOriginId: e,
              scale: t,
              position: 0.337,
              visible: Je.Z.isLegacyVolumeTrayActive,
              tintColor: r,
              onFinalChangeMouseOutside: () => {
                Je.Z.startPopoverMenuTimeout(800);
              },
              onMouseMove: Je.Z.clearPopoverMenuTimeout,
              onMouseLeave: this.popoverMenuMouseLeave,
              sort_depth_bias: 0.4,
            }),
          );
        }
        renderUndockedFrames() {
          return C.JJ.frames
            .filter(
              (e) =>
                e.state == C.Iu.Alive &&
                e.docking.dockLocation != se.yW.Boot &&
                e.docking.dockLocation != se.yW.Dashboard,
            )
            .map((e) => l.createElement(_.BO, { frame: e, key: e.frameID }));
        }
        onGameLaunched(e) {
          (!e.is_dashboard_overlay ||
            (e.is_dashboard_overlay && !e.show_overlay_in_quicklaunch)) &&
            (null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRDashboardManager.HideDashboard("game_launched"));
        }
        renderDashboardContents() {
          var e, t, r;
          const n = I.SW.activeFrame,
            i = I.SW.isVRGamepadUIReady,
            s = !I.SW.isVRGamepadUI || I.SW.m_bShowLegacyDashboardBar,
            o =
              !I.SW.isVRGamepadUI &&
              (null == n ? void 0 : n.docking.dockLocation) == se.yW.Dashboard;
          let c = [],
            d = [],
            m = null !== (e = g.HR.settings.get(u.lP)) && void 0 !== e ? e : 2;
          if (Je.Z.legacyFilteredOverlayTabs.length > m) {
            const e = g.HR.settings.get(u.XO);
            (c = [
              null !==
                (t = Je.Z.legacyFilteredOverlayTabs.find((t) =>
                  t.associatedSummonOverlayKeys.includes(e),
                )) && void 0 !== t
                ? t
                : Je.Z.legacyFilteredOverlayTabs[0],
            ]),
              (d = Je.Z.legacyFilteredOverlayTabs.filter(
                (e) => !c.includes(e),
              ));
          } else c = Je.Z.legacyFilteredOverlayTabs;
          const p = I.SW.allowCurvature,
            h = p ? u.uv : null,
            v = i ? { y: -1.2, z: 0.35 } : { y: -1.2, z: 0.15 };
          I.SW.isVRGamepadUI || (v.y -= 0.1);
          const _ = $e.k_nDashboardBarPitch;
          let b = p ? 1 : 0;
          const S =
            null === (r = null == n ? void 0 : n.activePage) || void 0 === r
              ? void 0
              : r.GetPanelAnchorID(a.Oi.TopCenter);
          return l.createElement(
            l.Fragment,
            null,
            l.createElement(
              a.dL,
              { parent_id: S },
              o &&
                S &&
                l.createElement(te, {
                  sCurvatureOriginId:
                    null == n ? void 0 : n.curvature.curvatureTransformOriginID,
                }),
            ),
            l.createElement(
              a.dL,
              { translation: { y: -0.95, z: 0.05 } },
              l.createElement(se.in, { dockLocation: se.yW.Dashboard }),
            ),
            l.createElement(
              a.dL,
              { parent_id: i ? u.NX : u.kx },
              l.createElement(V.X, {
                curvature_origin_id: h,
                tint: I.SW.GrabHandleTint,
                onStartMove: this.onGrabStart,
                onEndMove: this.onGrabEnd,
              }),
            ),
            !1,
            l.createElement(
              a.dL,
              { translation: v },
              l.createElement(
                a.dL,
                {
                  rotation: { x: _ },
                  curvature_pitch: _,
                  translation: i ? { y: -0.65, z: 0.2 } : {},
                },
                s && this.renderLegacyDashboardBar(c, d),
                l.createElement(
                  a.dL,
                  { translation: { y: -0.65, z: -0.01 } },
                  l.createElement(Q, null),
                ),
              ),
              i &&
                l.createElement(
                  a.dL,
                  { rotation: { x: _ }, curvature_pitch: _ },
                  l.createElement(rt, { curvature_origin_id: h }),
                ),
              l.createElement(
                a.dL,
                { rotation: { x: _ } },
                l.createElement(
                  a.dL,
                  { translation: $e.k_nKeyboardGrabTransformOffset },
                  l.createElement(
                    B.B,
                    { min_distance: 0.2, should_head_align: !1 },
                    l.createElement(
                      a.dL,
                      {
                        translation: {
                          x: -1 * $e.k_nKeyboardGrabTransformOffset.x,
                          y: -1 * $e.k_nKeyboardGrabTransformOffset.y,
                          z: -1 * $e.k_nKeyboardGrabTransformOffset.z,
                        },
                      },
                      l.createElement(
                        a.dL,
                        { rotation: { x: -10 }, curvature_pitch: _ },
                        !1,
                        I.SW.m_bKeyboardVisible &&
                          I.SW.m_bKeyboardDockedInDashboard &&
                          l.createElement(F, {
                            debugHostLocation: "Dashboard",
                            onGrabEnd: this.onGrabEnd,
                          }),
                      ),
                    ),
                  ),
                ),
              ),
              1 == Je.Z.activeLegacyDashboardPopover &&
                l.createElement(
                  a.dL,
                  {
                    translation: { x: -1.25, y: 0.15, z: 0.3 },
                    rotation: { y: 27 * b },
                  },
                  l.createElement(
                    a.Zk,
                    {
                      curvature_origin_id: h,
                      height: void 0,
                      width: 0.925,
                      interactive: !0,
                      origin: a.Oi.BottomLeft,
                      debug_name: "Power Menu",
                      sort_depth_bias: -0.1,
                    },
                    this.renderLegacyPowerMenu(),
                  ),
                ),
              2 == Je.Z.activeLegacyDashboardPopover &&
                l.createElement(
                  a.dL,
                  {
                    translation: { x: 0.2, y: 0.15, z: 0.05 },
                    rotation: { y: 6 * b },
                  },
                  l.createElement(
                    a.Zk,
                    {
                      curvature_origin_id: h,
                      height: void 0,
                      width: 0.925,
                      interactive: !0,
                      origin: a.Oi.BottomRight,
                      debug_name: "OverlaysList",
                      sort_depth_bias: -0.1,
                    },
                    this.renderPopoverMenu(
                      l.createElement(
                        l.Fragment,
                        null,
                        " ",
                        d.map((e) =>
                          l.createElement(be, {
                            key: e.frameID,
                            label: e.title,
                            onClick: () => {
                              this.switchToFrameInternal(e),
                                Je.Z.showPopoverMenu(0);
                            },
                          }),
                        ),
                        " ",
                      ),
                    ),
                  ),
                ),
              4 == Je.Z.activeLegacyDashboardPopover &&
                l.createElement(
                  a.dL,
                  {
                    translation: { x: 1.25, y: -0.1, z: 0.35 },
                    rotation: { y: -25 * b },
                  },
                  l.createElement(
                    a.Zk,
                    {
                      curvature_origin_id: h,
                      height: void 0,
                      width: 0.925,
                      interactive: !0,
                      scrollable: !0,
                      origin: a.Oi.BottomRight,
                      debug_name: "WindowList",
                      sort_depth_bias: -0.1,
                    },
                    this.renderPopoverMenu(
                      l.createElement(
                        l.Fragment,
                        null,
                        " ",
                        K.Q.windows.map((e) =>
                          l.createElement(be, {
                            key: e.hwnd,
                            label: e.title,
                            onClick: () => {
                              e.overlay_key
                                ? this.switchToOverlayInternal(e.overlay_key)
                                : K.Q.SpawnFrameForWindow(e.hwnd),
                                Je.Z.showPopoverMenu(0);
                            },
                          }),
                        ),
                        " ",
                      ),
                    ),
                  ),
                ),
            ),
          );
        }
      });
      (et.k_sSetDashboardFadeSupressionMessage =
        "set_dashboard_fade_suppression"),
        (et.k_sDashboardOverlayDestroyedMessage =
          "dashboard_overlay_destroyed"),
        (et.k_nTimeLimitToReturnToActiveOverlayThatVanishedSeconds = 3),
        (et.k_nDashboardBarPitch = -40),
        (et.k_nKeyboardGrabTransformOffset = { x: 0, y: -0.85, z: 0.35 }),
        (0, i.Cg)([s.o], et.prototype, "onSetDashboardFadeSuppression", null),
        (0, i.Cg)([o.action.bound], et.prototype, "onGrabStart", null),
        (0, i.Cg)([o.action.bound], et.prototype, "onGrabEnd", null),
        (0, i.Cg)([s.o], et.prototype, "onDashboardOverlayDestroyed", null),
        (0, i.Cg)([s.o], et.prototype, "onDashboardTabsUpdated", null),
        (0, i.Cg)([s.o], et.prototype, "switchToHomeOverlay", null),
        (0, i.Cg)(
          [o.action.bound],
          et.prototype,
          "switchToOverlayInternal",
          null,
        ),
        (0, i.Cg)(
          [o.action.bound],
          et.prototype,
          "switchToFrameInternal",
          null,
        ),
        (0, i.Cg)([s.o], et.prototype, "onShowDashboardRequested", null),
        (0, i.Cg)([s.o], et.prototype, "onVrCmdDockOverlayRequested", null),
        (0, i.Cg)(
          [o.action.bound],
          et.prototype,
          "onHideDashboardRequested",
          null,
        ),
        (0, i.Cg)([s.o], et.prototype, "onVRLinkRoomSetup", null),
        (0, i.Cg)([s.o], et.prototype, "onRequiredRoomSetup", null),
        (0, i.Cg)([s.o], et.prototype, "onDisableTheaterMode", null),
        (0, i.Cg)([o.action.bound], et.prototype, "show", null),
        (0, i.Cg)([o.action.bound], et.prototype, "hide", null),
        (0, i.Cg)([s.o], et.prototype, "onLegacyQuickLaunchButtonClick", null),
        (0, i.Cg)([s.o], et.prototype, "SetGamepadFocusEnable", null),
        (0, i.Cg)([s.o], et.prototype, "renderLegacyPowerMenu", null),
        (0, i.Cg)([s.o], et.prototype, "popoverMenuMouseLeave", null),
        (0, i.Cg)([s.o], et.prototype, "popoverMenuMouseUp", null),
        (0, i.Cg)(
          [s.o],
          et.prototype,
          "renderExternalOverlayDashboardBarButton",
          null,
        ),
        (0, i.Cg)([s.o], et.prototype, "onGameLaunched", null),
        (et = $e = (0, i.Cg)([v.PA], et));
      const tt = (0, v.PA)(function (e) {
          const [t, r] = l.useState(0),
            n = l.useCallback(() => r((e) => e + 1), []);
          (0, Qe.h)(ke.T.onDashboardRelatch, n);
          const i = -0.15,
            s = I.SW.allowCurvature ? u.uv : null,
            o = l.createElement(
              a.dL,
              { translation: { y: 0.15 } },
              l.createElement(a.dL, {
                id: s,
                translation: { z: I.SW.curvatureDistance },
              }),
              l.createElement(
                a.dL,
                { scale: I.SW.dashboardScale },
                null == e ? void 0 : e.children,
              ),
            ),
            c = I.SW.activeLinkServer && I.SW.isUnifiedDashboard,
            d = I.SW.activeLinkClient && I.SW.isUnifiedDashboard ? 1 : null,
            m = l.createElement(
              a.dL,
              { translation: I.SW.dashboardTranslation },
              !c &&
                l.createElement(
                  B.B,
                  {
                    should_head_align: !0,
                    min_distance: 0.7,
                    lerp_speed: 0.175,
                    one_to_one_radius: 0,
                    max_x_squared_contribution: 0,
                    acceleration_factor_x_coefficient: 2.5,
                    acceleration_factor_x_squared_coefficient: 0,
                    remote_transform_tx: d,
                  },
                  o,
                ),
              c && l.createElement(ne, { remote_transform_rx: 1 }, o),
            );
          return I.SW.m_bDashboardVisible || ke.T.isOOBE
            ? ke.T.isOOBE
              ? l.createElement(
                  z.tH,
                  null,
                  l.createElement(
                    a.dL,
                    { parent_path: "/user/head" },
                    l.createElement(
                      a.m$,
                      {
                        rotation_start_angle_threshold: 80,
                        rotation_stop_angle_threshold: 10,
                        rotation_ease_out_angle_threshold: 50,
                        rotation_min_angular_velocity: 75,
                        rotation_ease_in_power: 1.5,
                        translation_start_distance_threshold: 0.8,
                        translation_stop_distance_threshold: 0.2,
                        translation_ease_in_time: 0.4,
                        translation_ease_in_power: 0.02,
                        translation_ease_out_distance_threshold: 0.5,
                        translation_ease_out_power: 1,
                        translation_velocity: 1,
                        lock_to_horizon: !0,
                        translation_parent: a.b4.World,
                        enabled: ke.T.dashboardFollowsUser,
                        key: t,
                        rotation_translation_change_together: !0,
                      },
                      l.createElement(
                        a.dL,
                        { translation: { y: i } },
                        l.createElement(
                          a.dL,
                          { translation: I.SW.dashboardTranslation },
                          l.createElement(
                            B.B,
                            {
                              key: t,
                              should_head_align: !0,
                              min_distance: 0.1,
                              lerp_speed: 0.175,
                              one_to_one_radius: 0,
                              max_x_squared_contribution: 0,
                              acceleration_factor_x_coefficient: 2.5,
                              acceleration_factor_x_squared_coefficient: 0,
                              remote_transform_tx: d,
                              stop_distance: 10,
                            },
                            o,
                          ),
                        ),
                      ),
                    ),
                  ),
                )
              : l.createElement(
                  z.tH,
                  null,
                  l.createElement(
                    a.sJ,
                    {
                      bContinuousRelatch: I.SW.showLoadingThrobberOrBootOverlay,
                      bFreeDashboardTransform: !1,
                    },
                    l.createElement(
                      a.dL,
                      { translation: { y: i } },
                      !I.SW.showLoadingThrobberOrBootOverlay &&
                        l.createElement(l.Fragment, null, m),
                    ),
                  ),
                )
            : null;
        }),
        rt = (0, v.PA)(function (e) {
          var t;
          if (I.SW.isUnifiedDashboard && I.SW.activeLinkServer) return null;
          const r = !!(
              1 &
              (null !==
                (t =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VRProperties.GetInt32Property(
                        "/user/head",
                        a.fD.DashboardLinkSupport_Int32,
                      )) && void 0 !== t
                ? t
                : 0)
            ),
            n =
              I.SW.isVRGamepadUI &&
              !I.SW.isUnifiedDashboard &&
              r &&
              I.SW.m_bLinkStreamActive;
          let i = n ? 0.425 : 0.35;
          const s = l.createElement(
            l.Fragment,
            null,
            l.createElement(a.Ci, {
              id: "VRDashboardBar-Panel-TopCenter",
              location: a.Oi.TopCenter,
            }),
            l.createElement(
              a.Ci,
              {
                id: "VRDashboardBar-Panel-BottomCenter",
                location: a.Oi.BottomCenter,
              },
              l.createElement(a.dL, { id: u.GW, translation: { y: i } }),
              l.createElement(a.dL, { id: u.NX, translation: { y: -0.1 } }),
            ),
          );
          return l.createElement(
            z.tH,
            null,
            n &&
              l.createElement(
                a.dL,
                { translation: { y: 0.075, z: 0 } },
                l.createElement(J, {
                  onClick: () => {
                    var e;
                    null === (e = VRHTML.VRLink) ||
                      void 0 === e ||
                      e.SendRemoteDashboardOpen();
                  },
                }),
              ),
            I.SW.dashboardBarUsesPooledPopup &&
              l.createElement(
                ie.O,
                {
                  popupRequest: ae.r.dashboardBarPopup,
                  make_overlays_interactive_if_visible: !0,
                  curvature_origin_id: e.curvature_origin_id,
                  origin: a.Oi.TopCenter,
                  meters_per_pixel: I.SW.m_fVRGamepadUI_MetersPerPixel,
                  reflect: 0.1,
                },
                s,
              ),
            !I.SW.dashboardBarUsesPooledPopup &&
              l.createElement(
                a.Zk,
                {
                  id: "VRDashboardBar-Panel",
                  debug_name: "VRDashboardBar",
                  interactive: !0,
                  make_overlays_interactive_if_visible: !0,
                  curvature_origin_id: e.curvature_origin_id,
                  overlay_key: I.SW.dashboardBarOverlayKey,
                  origin: a.Oi.TopCenter,
                  meters_per_pixel: I.SW.m_fVRGamepadUI_MetersPerPixel,
                  reflect: 0.1,
                },
                s,
              ),
          );
        }),
        nt = [
          (e) => {
            var t;
            return (
              14 ==
              (null === (t = e.icon()) || void 0 === t ? void 0 : t.enum())
            );
          },
          (e) => {
            var t;
            return (
              17 ==
              (null === (t = e.icon()) || void 0 === t ? void 0 : t.enum())
            );
          },
          (e) => {
            var t;
            return (
              null !=
              (null === (t = e.icon()) || void 0 === t ? void 0 : t.overlay())
            );
          },
          (e) => {
            var t;
            return (
              15 ==
              (null === (t = e.icon()) || void 0 === t ? void 0 : t.enum())
            );
          },
          (e) => {
            var t;
            return (
              null !=
              (null === (t = e.icon()) || void 0 === t ? void 0 : t.hwnd())
            );
          },
        ];
      function it(e, t) {
        let r = -1,
          n = -1;
        for (let i = 0; i < nt.length && r < 0 && n < 0; i++)
          nt[i](e) && (r = i), nt[i](t) && (n = i);
        return (
          r < 0 && (r = nt.length),
          n < 0 && (n = nt.length),
          r == n ? e.tab_id() - t.tab_id() : r - n
        );
      }
    },
    3712: (e, t, r) => {
      "use strict";
      r.d(t, { Q: () => m, X: () => d });
      var n = r(1635),
        i = r(6540),
        a = r(3236),
        s = r(6090),
        o = r(1370),
        l = r(6138),
        c = r(9248),
        u = r(1139);
      let d = class extends i.Component {
        constructor(e) {
          super(e),
            (this.state = {
              xfTransform: this.props.xfTransform
                ? this.props.xfTransform
                : (0, s.vx)(),
              bActive: !1,
            });
        }
        componentDidUpdate(e, t) {
          var r;
          if (e.bVisible != this.props.bVisible) {
            null === (r = this.props.bVisible) ||
              void 0 === r ||
              r ||
              this.endMove();
          }
          e.xfTransform != this.props.xfTransform &&
            this.setState({
              xfTransform: this.props.xfTransform
                ? this.props.xfTransform
                : (0, s.vx)(),
            });
        }
        startMove() {
          let e,
            t = VRHTML.VROverlay.GetPrimaryDashboardDevice();
          if (t != s.ne) {
            switch (VRHTML.VRSystem.GetControllerRoleForTrackedDeviceIndex(t)) {
              case s.kG.TrackedControllerRole_LeftHand:
                e = "/user/hand/left/pose/tip";
                break;
              case s.kG.TrackedControllerRole_RightHand:
                e = "/user/hand/right/pose/tip";
                break;
              default:
                e = "/user/head";
            }
            this.context.setState({ parent_path: e }),
              this.setState({ bActive: !0 }),
              window.addEventListener("mouseup", this.endMove),
              this.props.onStartMove && this.props.onStartMove();
          }
        }
        endMove() {
          this.context.setState({ parent_path: "" }),
            this.setState({ bActive: !1 }),
            window.removeEventListener("mouseup", this.endMove),
            this.props.onEndMove && this.props.onEndMove();
        }
        render() {
          var e;
          if (null == this.state.xfTransform) return null;
          return (
            (null === (e = this.props.bVisible) || void 0 === e || e) &&
            i.createElement(
              s.dL,
              null,
              i.createElement(
                s.Y4,
                { value: this.props.opacity },
                i.createElement(
                  s.N,
                  { color: this.props.tint },
                  i.createElement(m, {
                    onMouseDown: this.startMove,
                    onMouseUp: this.endMove,
                    active: this.state.bActive,
                    uniformScale: this.props.scale,
                    curvature_origin_id: this.props.curvature_origin_id,
                  }),
                ),
              ),
            )
          );
        }
      };
      function m(e) {
        var t, r;
        const n = null !== (t = e.uniformScale) && void 0 !== t ? t : 1,
          a = null !== (r = e.width) && void 0 !== r ? r : 700;
        return i.createElement(
          s.Zk,
          {
            width: 0.66675 * n * (a / 700),
            interactive: !0,
            requires_laser: !0,
            debug_name: "GrabHandle",
            origin: s.Oi.BottomCenter,
            curvature_origin_id: e.curvature_origin_id,
            hide_lasermouse_when_clicking: !0,
            lasermouse_filtering: s.o3.Default,
            is_grab_handle: !0,
          },
          i.createElement(
            l.$,
            {
              className: "GrabHandleButton",
              onMouseDown: e.onMouseDown,
              onMouseUp: e.onMouseUp,
            },
            i.createElement("div", {
              className: (0, u.FH)("GrabHandleBar", e.active && "ForceActive"),
              style: { width: `${a}px` },
            }),
          ),
        );
      }
      (d.contextType = c.E),
        (0, n.Cg)([a.o], d.prototype, "startMove", null),
        (0, n.Cg)([a.o], d.prototype, "endMove", null),
        (d = (0, n.Cg)([o.PA], d));
    },
    9248: (e, t, r) => {
      "use strict";
      r.d(t, { B: () => l, E: () => o });
      var n = r(1635),
        i = r(6090),
        a = r(1370),
        s = r(6540);
      const o = s.createContext(void 0);
      let l = class extends s.Component {
        constructor(e) {
          super(e), (this.state = { transform: (0, i.vx)(), parent_path: "" });
        }
        render() {
          var e;
          return s.createElement(
            i.nq,
            {
              parent_path: this.state.parent_path,
              transform: this.state.transform,
              id: this.props.id,
              should_head_align: this.props.should_head_align,
              stop_distance: this.props.stop_distance,
              start_angle: this.props.start_angle,
              start_quat_difference: this.props.start_quat_difference,
              stop_quat_difference: this.props.stop_quat_difference,
              scale_margin: this.props.scale_margin,
              lerp_speed: this.props.lerp_speed,
              min_distance: this.props.min_distance,
              max_distance: this.props.max_distance,
              one_to_one_radius: this.props.one_to_one_radius,
              max_x_squared_contribution: this.props.max_x_squared_contribution,
              acceleration_factor_x_coefficient:
                this.props.acceleration_factor_x_coefficient,
              acceleration_factor_x_squared_coefficient:
                this.props.acceleration_factor_x_squared_coefficient,
              acceleration_factor_scale_term:
                this.props.acceleration_factor_scale_term,
              remote_transform_tx: this.props.remote_transform_tx,
              reset_on_recenter:
                null === (e = this.props) || void 0 === e
                  ? void 0
                  : e.reset_on_recenter,
            },
            s.createElement(o.Provider, { value: this }, this.props.children),
          );
        }
      };
      l = (0, n.Cg)([a.PA], l);
    },
    3109: (e, t, r) => {
      "use strict";
      r.d(t, { a: () => h });
      var n = r(6090),
        i = r(1370),
        a = r(6540),
        s = r(6138),
        o = r(6731),
        l = r(5615),
        c = r(3606),
        u = r(1139),
        d = r(1835),
        m = r(795),
        p = r(1331);
      const h = (0, i.PA)(function (e) {
          return a.createElement(
            g,
            Object.assign({}, e, { VRGamepadUI: d.SW.isVRGamepadUI }),
          );
        }),
        g = (e) => {
          var t, r;
          const i = (0, p.FL)(),
            d = e.VRGamepadUI,
            h = a.useRef(null),
            g = null === (t = e.scrollable) || void 0 === t || t,
            v =
              null !== (r = e.foregroundReflectMultiplier) && void 0 !== r
                ? r
                : c.gS,
            _ = a.useId();
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
              n.dL,
              { translation: { z: 1e-5 } },
              a.createElement(
                n.Zk,
                {
                  is_frame_page_main_panel: !0,
                  id: _,
                  debug_name: e.debugName,
                  curvature_origin_id: i,
                  origin: n.Oi.BottomCenter,
                  interactive: !0,
                  make_overlays_interactive_if_visible: !1,
                  scrollable: g,
                  meters_per_pixel: d ? void 0 : c.iZ,
                  reflect: d ? void 0 : 0.2 * v,
                  width: d ? 2.67 : void 0,
                },
                a.createElement(m.gU, null),
                a.createElement(
                  o.vw,
                  { ref: h },
                  a.createElement(
                    s.W,
                    null,
                    a.createElement(
                      l.M,
                      {
                        scrollDirection: g ? l.D.Vertical : l.D.None,
                        className: (0, u.FH)(
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
    },
    9776: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => u });
      var n = r(1635),
        i = r(1835),
        a = r(4734),
        s = r(795),
        o = r(7813),
        l = r(3606);
      class c {
        get activeLegacyDashboardPopover() {
          return this.m_eActiveLegacyDashboardPopover;
        }
        constructor() {
          (this.m_eActiveLegacyDashboardPopover = 0),
            (this.m_timeoutPopoverMenuHide = 0),
            (this.m_nNextLegacyTooltipID = 1),
            (this.m_nCurrentlyShownLegacyTooltipID = void 0),
            (0, o.makeObservable)(this);
        }
        get isLegacyVolumeTrayActive() {
          return 3 == this.m_eActiveLegacyDashboardPopover;
        }
        get isLegacyDesktopTrayActive() {
          var e, t, r;
          return (
            !this.isLegacyVolumeTrayActive &&
            (a.Q.desktopFrames.includes(i.SW.activeFrame) ||
              a.Q.desktopWindowFrames.includes(i.SW.activeFrame) ||
              (null ===
                (r =
                  null ===
                    (t =
                      null === (e = i.SW.activeFrame) || void 0 === e
                        ? void 0
                        : e.activePage) || void 0 === t
                    ? void 0
                    : t.summonOverlayKey) || void 0 === r
                ? void 0
                : r.startsWith(l.Uv)))
          );
        }
        startPopoverMenuTimeout(e) {
          this.m_timeoutPopoverMenuHide = window.setTimeout(() => {
            this.m_eActiveLegacyDashboardPopover = 0;
          }, e);
        }
        clearPopoverMenuTimeout() {
          this.m_timeoutPopoverMenuHide &&
            (clearTimeout(this.m_timeoutPopoverMenuHide),
            (this.m_timeoutPopoverMenuHide = 0));
        }
        showPopoverMenu(e) {
          (this.m_eActiveLegacyDashboardPopover = e),
            this.clearPopoverMenuTimeout();
        }
        get legacyFilteredOverlayTabs() {
          return s.JJ.frames
            .filter(
              (e) =>
                e.tabVisibility.bVisibleInDashboardBar ||
                e.tabVisibility.bVisibleInDashboardHamburgerMenu,
            )
            .filter((e) => !e.associatedSummonOverlayKeys.every(d))
            .sort((e, t) => e.title.localeCompare(t.title));
        }
      }
      (0, n.Cg)(
        [o.observable],
        c.prototype,
        "m_eActiveLegacyDashboardPopover",
        void 0,
      ),
        (0, n.Cg)(
          [o.computed],
          c.prototype,
          "activeLegacyDashboardPopover",
          null,
        ),
        (0, n.Cg)(
          [o.observable],
          c.prototype,
          "m_nCurrentlyShownLegacyTooltipID",
          void 0,
        ),
        (0, n.Cg)([o.computed], c.prototype, "isLegacyVolumeTrayActive", null),
        (0, n.Cg)([o.computed], c.prototype, "isLegacyDesktopTrayActive", null),
        (0, n.Cg)(
          [o.action.bound],
          c.prototype,
          "startPopoverMenuTimeout",
          null,
        ),
        (0, n.Cg)(
          [o.action.bound],
          c.prototype,
          "clearPopoverMenuTimeout",
          null,
        ),
        (0, n.Cg)([o.action.bound], c.prototype, "showPopoverMenu", null),
        (0, n.Cg)([o.computed], c.prototype, "legacyFilteredOverlayTabs", null);
      const u = new c();
      function d(e) {
        return (
          e == l.Wt ||
          e == l.Bn ||
          (null == e ? void 0 : e.startsWith(l.GO)) ||
          (null == e ? void 0 : e.startsWith(l.Uv)) ||
          (null == e ? void 0 : e.startsWith(l.Wm)) ||
          ((null == e ? void 0 : e.startsWith(l.So)) &&
            !(null == e ? void 0 : e.startsWith(l.bl))) ||
          (null == e ? void 0 : e.startsWith(l.Kh))
        );
      }
      window.LegacyDashboardStore = u;
    },
    7606: (e, t, r) => {
      "use strict";
      r.d(t, { p: () => p });
      var n = r(6090),
        i = r(7813),
        a = r(6921),
        s = r(6540),
        o = r(3606),
        l = r(6575),
        c = r(1835),
        u = r(9776),
        d = r(921),
        m = r(7727);
      const p = s.forwardRef(function (e, t) {
        var r;
        const p = s.useMemo(() => u.Z.m_nNextLegacyTooltipID++, []),
          h = (0, a.useObserver)(
            () => u.Z.m_nCurrentlyShownLegacyTooltipID === p,
          ),
          g = e.text && (e.shown || h),
          v = e.translation ? e.translation : { x: 0, y: -0.2, z: 0.05 },
          _ = (0, a.useObserver)(() => c.SW.allowCurvature),
          { frame: b } = (0, m.N)(),
          S =
            null !==
              (r =
                null == b ? void 0 : b.curvature.curvatureTransformOriginID) &&
            void 0 !== r
              ? r
              : _
                ? o.uv
                : null,
          y = s.useMemo(
            () => ({
              show: () => {
                (0, i.runInAction)(
                  () => (u.Z.m_nCurrentlyShownLegacyTooltipID = p),
                );
              },
              hide: () => {
                u.Z.m_nCurrentlyShownLegacyTooltipID === p &&
                  (u.Z.m_nCurrentlyShownLegacyTooltipID = null);
              },
            }),
            [],
          );
        return (
          (0, d.D5)(t, y),
          s.createElement(
            "div",
            { style: { position: "absolute", left: "50%", top: "50%" } },
            s.createElement(
              l.l,
              { allowableParentSelectors: [".AppSceneGraph"] },
              s.createElement(
                n.dL,
                { translation: v },
                s.createElement(
                  n.Zk,
                  {
                    visibility: g ? n.Fi.Visible : n.Fi.Hidden,
                    meters_per_pixel: o.iZ,
                    curvature_origin_id: S,
                    sort_depth_bias: -1,
                    debug_name: `legacy-tooltip-${p}`,
                  },
                  s.createElement(
                    "div",
                    { className: "ControlBarButtonTooltip" },
                    e.text,
                  ),
                ),
              ),
            ),
          )
        );
      });
    },
    5308: (e, t, r) => {
      "use strict";
      r.d(t, { D: () => o });
      var n = r(6540),
        i = r(9471),
        a = r(8770),
        s = r(9283);
      function o(e) {
        const { icon: t, variant: r = "steamui" } = e;
        let s = null == t ? void 0 : t.enum;
        if (null == t ? void 0 : t.overlay)
          try {
            return n.createElement(l, {
              url:
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRDashboardManager.GetOverlayImage(
                      t.overlay + ".thumb",
                    ),
            });
          } catch (e) {}
        if (
          ((null == t ? void 0 : t.hwnd) &&
            (u(
              "VRGamepadUIIcon: Showing HWND icons isn't supported from VRWebUI. Only from Steam.",
            ),
            (s = null != s ? s : 18)),
          (null == t ? void 0 : t.appid) &&
            u(
              "VRGamepadUIIcon: Showing App icons isn't supported from VRWebUI. Only from Steam.",
            ),
          (s = null != s ? s : 0),
          "legacy-vrwebui" == r)
        )
          switch (null == t ? void 0 : t.enum) {
            case 16:
              return n.createElement(l, {
                url: "/dashboard/images/icons/svr_settings.svg",
                invert: !0,
              });
            case 19:
              return n.createElement(l, {
                url: "/dashboard/images/icons/svr_items.svg",
                invert: !0,
              });
            case 15:
            case 18:
              return n.createElement(l, {
                url: "/dashboard/images/icons/svr_desktop_alt.svg",
                invert: !0,
              });
          }
        const o = { className: "Icon" };
        switch (s) {
          case 0:
            return n.createElement(i.vN, Object.assign({}, o));
          case 10:
            return n.createElement(i.Jc, Object.assign({}, o));
          case 11:
            return n.createElement(i.aJ, Object.assign({}, o));
          case 1:
            return n.createElement(i.rx, Object.assign({}, o));
          case 2:
            return n.createElement(i.Zy, Object.assign({}, o));
          case 3:
            return n.createElement(i.hU, Object.assign({}, o));
          case 12:
            return n.createElement(i.DO, Object.assign({}, o));
          case 13:
            return n.createElement(i.Ey, Object.assign({}, o));
          case 14:
            return n.createElement(i.Qt, Object.assign({}, o));
          case 15:
            return n.createElement(i.nl, Object.assign({}, o));
          case 16:
            return n.createElement(i.wB, Object.assign({}, o));
          case 17:
            return n.createElement(i._y, Object.assign({}, o));
          case 18:
            return n.createElement(i.jd, Object.assign({}, o));
          case 20:
            return n.createElement(i.Sc, Object.assign({}, o));
          case 21:
            return n.createElement(i.VR, Object.assign({}, o));
          case 22:
            return n.createElement(i.s3, Object.assign({}, o));
          case 23:
            return n.createElement(i.PN, Object.assign({}, o));
          case 24:
            return n.createElement(i.Ki, Object.assign({}, o));
          case 25:
            return n.createElement(l, {
              url: "/dashboard/images/icons/icon_multitasking_view.png",
              invert: !0,
            });
          case 26:
            return n.createElement(i.YN, Object.assign({}, o));
          case 27:
            return n.createElement(i.Xj, Object.assign({}, o));
          case 28:
            return n.createElement(i.fr, Object.assign({}, o));
          case 29:
            return n.createElement(l, {
              url: "/dashboard/images/icons/mirror_left.png",
              invert: !0,
            });
          case 30:
            return n.createElement(l, {
              url: "/dashboard/images/icons/mirror_right.png",
              invert: !0,
            });
          case 31:
            return n.createElement(l, {
              url: "/dashboard/images/icons/icon_close_black.png",
              invert: !0,
            });
          case 32:
            return n.createElement(i.y$, Object.assign({}, o));
          case 8:
            return n.createElement(i._F, Object.assign({}, o));
          case 9:
            return n.createElement(i._F, Object.assign({ off: !0 }, o));
          case 4:
          case 5:
          case 6:
          case 7:
          case 19:
            return (
              u(
                "Missing VRWebUI implementation for EVRGamepadUIIcon: " +
                  (0, a.kL)(s),
              ),
              n.createElement(i.vN, Object.assign({}, o))
            );
        }
      }
      function l(e) {
        return n.createElement("img", {
          src: e.url,
          className: (0, s.A)("Icon", e.invert && "BlackToWhite"),
        });
      }
      const c = new Set();
      function u(e) {
        c.has(e) || (c.add(e), console.error(e));
      }
    },
    9674: (e, t, r) => {
      "use strict";
      r.d(t, { E: () => d, T: () => u });
      var n = r(1635),
        i = r(1835),
        a = r(7813),
        s = r(6921),
        o = r(1651),
        l = r(3606);
      class c {
        get dashboardFollowsUser() {
          return this.m_bDashboardFollowsUser;
        }
        get onDashboardRelatch() {
          return this.m_DashboardRelatchCallbacks;
        }
        constructor() {
          (this.m_bSteamIsInOOBE = !1),
            (this.m_BSystemUIIsInFakeOOBEMode = !1),
            (this.m_bDashboardFollowsUser = !0),
            (this.m_DashboardRelatchCallbacks = new o.l()),
            (0, a.makeObservable)(this);
        }
        Init() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            var e, t;
            (this.m_bSteamIsInOOBE =
              null !==
                (e =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VRPathProperties.GetBoolPathProperty(l.E2)) &&
              void 0 !== e &&
              e),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRPathProperties.RegisterForBoolPathPropertyChangedEvents(
                  l.E2,
                  (e) => {
                    this.m_bSteamIsInOOBE = e;
                  },
                ),
              (this.m_BSystemUIIsInFakeOOBEMode =
                null !==
                  (t =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VRPathProperties.GetBoolPathProperty(l.Y8)) &&
                void 0 !== t &&
                t),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRPathProperties.RegisterForBoolPathPropertyChangedEvents(
                  l.Y8,
                  (e) => {
                    this.m_BSystemUIIsInFakeOOBEMode = e;
                  },
                ),
              (0, a.reaction)(
                () =>
                  u.m_bDashboardFollowsUser && i.SW.m_bDashboardIsBeingDragged,
                () => (u.m_bDashboardFollowsUser = !1),
              );
          });
        }
        get isOOBE() {
          return this.m_bSteamIsInOOBE || this.m_BSystemUIIsInFakeOOBEMode;
        }
        ResetDashboardTransform() {
          this.m_DashboardRelatchCallbacks.Dispatch(),
            (this.m_bDashboardFollowsUser = !0);
        }
      }
      (0, n.Cg)([a.observable], c.prototype, "m_bSteamIsInOOBE", void 0),
        (0, n.Cg)(
          [a.observable],
          c.prototype,
          "m_BSystemUIIsInFakeOOBEMode",
          void 0,
        ),
        (0, n.Cg)(
          [a.observable],
          c.prototype,
          "m_bDashboardFollowsUser",
          void 0,
        ),
        (0, n.Cg)([a.computed], c.prototype, "isOOBE", null),
        (0, n.Cg)([a.action], c.prototype, "ResetDashboardTransform", null);
      const u = new c();
      function d() {
        return (0, s.useObserver)(() => u.isOOBE);
      }
      window.OOBEStore = u;
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~8012d0c89.js.map
