var CLSTAMP = "10223590";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [305],
  {
    7504: () => {},
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
        a = r(3924),
        i = r(8770),
        s = r(8723);
      const o = n.Message;
      class l extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.tabs || a.Sg(l.M()),
            o.initialize(this, e, 0, -1, [1], null);
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
          let t = new n.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
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
      class c extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.tab_id || a.Sg(c.M()),
            o.initialize(this, e, 0, -1, void 0, null);
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
                  icon: { n: 6, c: i.aV },
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
                  deprecated_icon: { n: 4, c: i.Tp },
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
          let t = new n.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_PathProperty_DashboardTabs_Tab";
        }
      }
      class u extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.defined_actions || a.Sg(u.M()),
            o.initialize(this, e, 0, -1, [2, 3, 4, 5, 1], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  defined_actions: { n: 2, c: s.z, r: !0, q: !0 },
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
          let t = new n.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
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
      class d extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.type || a.Sg(d.M()),
            o.initialize(this, e, 0, -1, void 0, null);
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
          let t = new n.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_PathProperty_DashboardBarActions_BarButton";
        }
      }
      class m extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.type || a.Sg(m.M()),
            o.initialize(this, e, 0, -1, void 0, null);
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
          let t = new n.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_PathProperty_DashboardBarActions_BarMenuItem";
        }
      }
      class p extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.windows || a.Sg(p.M()),
            o.initialize(this, e, 0, -1, [1], null);
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
          let t = new n.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
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
      class h extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.window_id || a.Sg(h.M()),
            o.initialize(this, e, 0, -1, void 0, null);
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
          let t = new n.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_PathProperty_DesktopWindows_Window";
        }
      }
      class g extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.can_sleep || a.Sg(g.M()),
            o.initialize(this, e, 0, -1, void 0, null);
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
          let t = new n.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
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
      class v extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.display_brightness_user_value || a.Sg(v.M()),
            o.initialize(this, e, 0, -1, void 0, null);
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
          let t = new n.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
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
      class _ extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.version || a.Sg(_.M()),
            o.initialize(this, e, 0, -1, void 0, null);
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
          let t = new n.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
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
      class b extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.action_id || a.Sg(b.M()),
            o.initialize(this, e, 0, -1, void 0, null);
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
                  icon: { n: 13, c: i.aV },
                  icon_active: { n: 14, c: i.aV },
                  invocation: { n: 7, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  special_invocation: {
                    n: 9,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
                  active: { n: 8, br: a.qM.readBool, bw: a.gp.writeBool },
                  deprecated_icon: { n: 5, c: i.Ym },
                  deprecated_icon_active: { n: 6, c: i.Ym },
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
          let t = new n.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
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
        a = r(3924),
        i = r(8770);
      const s = n.Message;
      class o extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.action_id || a.Sg(o.M()),
            s.initialize(this, e, 0, -1, void 0, null);
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
                  icon: { n: 4, c: i.aV },
                  icon_active: { n: 5, c: i.aV },
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
          let t = new n.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_Action";
        }
      }
    },
    8770: (e, t, r) => {
      "use strict";
      r.d(t, { Tp: () => o, Ym: () => l, aV: () => s });
      var n = r(5339),
        a = r(3924);
      const i = n.Message;
      class s extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            s.prototype.enum || a.Sg(s.M()),
            i.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            s.sm_m ||
              (s.sm_m = {
                proto: s,
                fields: {
                  enum: { n: 1, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  appid: { n: 2, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  overlay: { n: 3, br: a.qM.readString, bw: a.gp.writeString },
                  hwnd: { n: 4, br: a.qM.readUint32, bw: a.gp.writeUint32 },
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
          let t = new n.BinaryReader(e),
            r = new s();
          return s.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(s.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(s.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_Icon";
        }
      }
      class o extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.enum || a.Sg(o.M()),
            i.initialize(this, e, 0, -1, void 0, null);
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
          let t = new n.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_DEPRECATED_DashboardTabIcon";
        }
      }
      class l extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.enum || a.Sg(l.M()),
            i.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  enum: { n: 1, br: a.qM.readEnum, bw: a.gp.writeEnum },
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
          let t = new n.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
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
        a = r(3924);
      const i = n.Message;
      class s extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            s.prototype.name || a.Sg(s.M()),
            i.initialize(this, e, 0, -1, void 0, null);
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
          let t = new n.BinaryReader(e),
            r = new s();
          return s.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(s.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(s.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_Header";
        }
      }
      class o extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.error || a.Sg(o.M()),
            i.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  error: { n: 1, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  description: {
                    n: 2,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  origin: { n: 3, br: a.qM.readEnum, bw: a.gp.writeEnum },
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
          let t = new n.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
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
      r.d(t, { oT: () => W, f5: () => z });
      var n = r(5339),
        a = r(3924),
        i = r(8723);
      const s = n.Message;
      class o extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.frame_id || a.Sg(o.M()),
            s.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  frame_id: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  menu: { n: 2, c: l },
                  defined_actions: { n: 3, c: i.z, r: !0, q: !0 },
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
          let t = new n.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Frame";
        }
      }
      class l extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.items_for_left_frame_menu || a.Sg(l.M()),
            s.initialize(this, e, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  items_for_left_frame_menu: { n: 1, c, r: !0, q: !0 },
                  items_for_tab_frame_menu: { n: 2, c, r: !0, q: !0 },
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
          let t = new n.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Frame_FrameMenu";
        }
      }
      class c extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.type || a.Sg(c.M()),
            s.initialize(this, e, 0, -1, void 0, null);
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
                  steam_main_menu_options: { n: 3, c: u },
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
          let t = new n.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Frame_FrameMenu_Item";
        }
      }
      class u extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.allow_show_as_active || a.Sg(u.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  allow_show_as_active: {
                    n: 1,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
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
          let t = new n.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Frame_FrameMenu_Item_SteamMainMenuOptions";
        }
      }
      const d = n.Message;
      class m extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.tab_id || a.Sg(m.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  tab_id: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
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
          let t = new n.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_DashboardTabClicked_Request";
        }
      }
      class p extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new p();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_DashboardTabClicked_Response";
        }
      }
      class h extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.action_id || a.Sg(h.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  action_id: {
                    n: 1,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                  toggle_value: { n: 2, br: a.qM.readBool, bw: a.gp.writeBool },
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
          let t = new n.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_DashboardActionInvoked_Request";
        }
      }
      class g extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new g();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_DashboardActionInvoked_Response";
        }
      }
      class v extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.window_id || a.Sg(v.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  window_id: {
                    n: 1,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
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
          let t = new n.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_DashboardDesktopWindowClicked_Request";
        }
      }
      class _ extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new _();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_DashboardDesktopWindowClicked_Response";
        }
      }
      class b extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.dashboard_popup_id || a.Sg(b.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
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
                  origin_on_parent: { n: 4, c: S },
                  origin_on_popup: { n: 5, c: S },
                  offset: { n: 6, c: y },
                  rotation: { n: 7, c: f },
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
                  clip_rect: { n: 10, c: R },
                  interactive: { n: 11, br: a.qM.readBool, bw: a.gp.writeBool },
                  requires_laser: {
                    n: 12,
                    br: a.qM.readBool,
                    bw: a.gp.writeBool,
                  },
                  sort_order: { n: 14, br: a.qM.readEnum, bw: a.gp.writeEnum },
                  special_identifier: {
                    n: 16,
                    br: a.qM.readEnum,
                    bw: a.gp.writeEnum,
                  },
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
          let t = new n.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowDashboardPopup_Request";
        }
      }
      class S extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.x || a.Sg(S.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  x: { n: 1, br: a.qM.readFloat, bw: a.gp.writeFloat },
                  y: { n: 2, br: a.qM.readFloat, bw: a.gp.writeFloat },
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
          let t = new n.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowDashboardPopup_Request_NormalizedPosition";
        }
      }
      class y extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            y.prototype.x_pixels || a.Sg(y.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  x_pixels: { n: 1, br: a.qM.readFloat, bw: a.gp.writeFloat },
                  y_pixels: { n: 2, br: a.qM.readFloat, bw: a.gp.writeFloat },
                  z_pixels: { n: 3, br: a.qM.readFloat, bw: a.gp.writeFloat },
                  x_meters: { n: 4, br: a.qM.readFloat, bw: a.gp.writeFloat },
                  y_meters: { n: 5, br: a.qM.readFloat, bw: a.gp.writeFloat },
                  z_meters: { n: 6, br: a.qM.readFloat, bw: a.gp.writeFloat },
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
          let t = new n.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(y.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowDashboardPopup_Request_Position";
        }
      }
      class f extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            f.prototype.pitch_degrees || a.Sg(f.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            f.sm_m ||
              (f.sm_m = {
                proto: f,
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
          let t = new n.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(f.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowDashboardPopup_Request_Rotation";
        }
      }
      class R extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.u_min || a.Sg(R.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  u_min: { n: 1, br: a.qM.readFloat, bw: a.gp.writeFloat },
                  v_min: { n: 2, br: a.qM.readFloat, bw: a.gp.writeFloat },
                  u_max: { n: 3, br: a.qM.readFloat, bw: a.gp.writeFloat },
                  v_max: { n: 4, br: a.qM.readFloat, bw: a.gp.writeFloat },
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
          let t = new n.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowDashboardPopup_Request_Rect";
        }
      }
      class w extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new w();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new w();
          return w.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowDashboardPopup_Response";
        }
      }
      class C extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            C.prototype.dashboard_popup_id || a.Sg(C.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            C.sm_m ||
              (C.sm_m = {
                proto: C,
                fields: {
                  dashboard_popup_id: {
                    n: 1,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
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
          let t = new n.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(C.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_HideDashboardPopup_Request";
        }
      }
      class M extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.initialize(this, e, 0, -1, void 0, null);
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
          let t = new n.BinaryReader(e),
            r = new M();
          return M.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_HideDashboardPopup_Response";
        }
      }
      class T extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.source_accountid || a.Sg(T.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
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
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = a.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_RemoteVideoStream_Request";
        }
      }
      class E extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return E.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new E();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new E();
          return E.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_RemoteVideoStream_Response";
        }
      }
      class V extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            V.prototype.overlay_key || a.Sg(V.M()),
            d.initialize(this, e, 0, -1, void 0, null);
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
          let t = new n.BinaryReader(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(V.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowGame_Request";
        }
      }
      class D extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return D.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new D();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new D();
          return D.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return D.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowGame_Response";
        }
      }
      class B extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            B.prototype.overlay_key || a.Sg(B.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            B.sm_m ||
              (B.sm_m = {
                proto: B,
                fields: {
                  overlay_key: {
                    n: 1,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                },
              }),
            B.sm_m
          );
        }
        static MBF() {
          return B.sm_mbf || (B.sm_mbf = a.w0(B.M())), B.sm_mbf;
        }
        toObject(e = !1) {
          return B.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(B.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(B.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(B.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(B.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowOverlay_Request";
        }
      }
      class A extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new A();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_SetDisplayBrightness_Response";
        }
      }
      class O extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            O.prototype.user_brightness_value || a.Sg(O.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            O.sm_m ||
              (O.sm_m = {
                proto: O,
                fields: {
                  user_brightness_value: {
                    n: 1,
                    br: a.qM.readFloat,
                    bw: a.gp.writeFloat,
                  },
                },
              }),
            O.sm_m
          );
        }
        static MBF() {
          return O.sm_mbf || (O.sm_mbf = a.w0(O.M())), O.sm_mbf;
        }
        toObject(e = !1) {
          return O.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(O.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(O.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(O.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(O.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_SetDisplayBrightness_Request";
        }
      }
      class I extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.initialize(this, e, 0, -1, void 0, null);
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
          let t = new n.BinaryReader(e),
            r = new I();
          return I.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return I.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowOverlay_Response";
        }
      }
      class k extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.url || a.Sg(k.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  url: { n: 1, br: a.qM.readString, bw: a.gp.writeString },
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
          let t = new n.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ExecuteSteamURL_Request";
        }
      }
      class L extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.initialize(this, e, 0, -1, void 0, null);
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
          let t = new n.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ExecuteSteamURL_Response";
        }
      }
      class H extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return H.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new H();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new H();
          return H.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_InitFrameSystem_Request";
        }
      }
      class P extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.initialize(this, e, 0, -1, void 0, null);
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
          let t = new n.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_InitFrameSystem_Response";
        }
      }
      class F extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.updated_frames || a.Sg(F.M()),
            d.initialize(this, e, 0, -1, [1, 2, 3, 4], null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
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
          let t = new n.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_UpdateFrameUIs_Request";
        }
      }
      class x extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            x.prototype.results || a.Sg(x.M()),
            d.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            x.sm_m ||
              (x.sm_m = {
                proto: x,
                fields: { results: { n: 1, c: N, r: !0, q: !0 } },
              }),
            x.sm_m
          );
        }
        static MBF() {
          return x.sm_mbf || (x.sm_mbf = a.w0(x.M())), x.sm_mbf;
        }
        toObject(e = !1) {
          return x.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(x.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(x.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new x();
          return x.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(x.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(x.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_UpdateFrameUIs_Response";
        }
      }
      class N extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            N.prototype.frame_id || a.Sg(N.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            N.sm_m ||
              (N.sm_m = {
                proto: N,
                fields: {
                  frame_id: { n: 1, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  frame_menu_dashboard_popup_id: {
                    n: 2,
                    br: a.qM.readUint32,
                    bw: a.gp.writeUint32,
                  },
                },
              }),
            N.sm_m
          );
        }
        static MBF() {
          return N.sm_mbf || (N.sm_mbf = a.w0(N.M())), N.sm_mbf;
        }
        toObject(e = !1) {
          return N.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(N.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(N.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new N();
          return N.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(N.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(N.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return N.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_UpdateFrameUIs_Response_FrameUpdateResult";
        }
      }
      const z = {
        "DashboardTabClicked#1": {
          msgClassRequest_t: m,
          msgClassResponse_t: p,
          strMethod: "DashboardTabClicked",
        },
        "DashboardActionInvoked#1": {
          msgClassRequest_t: h,
          msgClassResponse_t: g,
          strMethod: "DashboardActionInvoked",
        },
        "DashboardDesktopWindowClicked#1": {
          msgClassRequest_t: v,
          msgClassResponse_t: _,
          strMethod: "DashboardDesktopWindowClicked",
        },
        "ShowDashboardPopup#1": {
          msgClassRequest_t: b,
          msgClassResponse_t: w,
          strMethod: "ShowDashboardPopup",
        },
        "HideDashboardPopup#1": {
          msgClassRequest_t: C,
          msgClassResponse_t: M,
          strMethod: "HideDashboardPopup",
        },
        "RemoteVideoStream#1": {
          msgClassRequest_t: T,
          msgClassResponse_t: E,
          strMethod: "RemoteVideoStream",
        },
        "ShowGame#1": {
          msgClassRequest_t: V,
          msgClassResponse_t: D,
          strMethod: "ShowGame",
        },
        "ShowOverlay#1": {
          msgClassRequest_t: B,
          msgClassResponse_t: I,
          strMethod: "ShowOverlay",
        },
        "SetDisplayBrightness#1": {
          msgClassRequest_t: O,
          msgClassResponse_t: A,
          strMethod: "SetDisplayBrightness",
        },
      };
      class W {
        constructor(e) {
          this.m_Client = e;
        }
        ExecuteSteamURL(e) {
          return this.m_Client.SendVRGamepadUIRequest(
            "ExecuteSteamURL#1",
            k.fromObject(null != e ? e : {}),
            L,
          );
        }
        InitFrameSystem(e) {
          return this.m_Client.SendVRGamepadUIRequest(
            "InitFrameSystem#1",
            H.fromObject(null != e ? e : {}),
            P,
          );
        }
        UpdateFrameUIs(e) {
          return this.m_Client.SendVRGamepadUIRequest(
            "UpdateFrameUIs#1",
            F.fromObject(null != e ? e : {}),
            x,
          );
        }
      }
    },
    5818: (e, t, r) => {
      "use strict";
      r.d(t, { z: () => Ae });
      var n = r(1635),
        a = r(6090),
        i = r(3236),
        s = r(2563),
        o = r(7813),
        l = r(1370),
        c = r(6540),
        u = r(6138),
        d = r(6731),
        m = r(5615),
        p = r(3606),
        h = r(3714),
        g = r(1139),
        v = r(1333),
        _ = r(427),
        b = r(4493);
      let S = class extends _.yO {
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
            v.HR.audioDevices.hmd_settings_key.replace("{setting}", e)
          );
        }
        temporaryDropdownOverride(e, t) {
          e.indexOf("Mirror") >= 0
            ? (v.HR.audioDevices.selected_mirror_device = t)
            : e.indexOf("playback") >= 0
              ? (v.HR.audioDevices.selected_playback_device = t)
              : e.indexOf("recording") >= 0 &&
                (v.HR.audioDevices.selected_recording_device = t);
        }
        setDeviceSetting(e, t, r) {
          r &&
            (v.HR.SetSettingsValue(e, r.guid),
            v.HR.SetSettingsValue(t, r.name),
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
            ? v.HR.audioDevices.playback_devices
                .concat(v.HR.audioDevices.record_devices)
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
          t.push({ value: "", sLabel: (0, h.we)("#Settings_Audio_Default") }),
            t.push(b.Sr.Separator);
          for (let r of e) t.push({ value: r.guid, sLabel: r.name });
          return t;
        }
        render() {
          var e, t;
          if (!this.props.active) return null;
          if (void 0 === v.HR.audioDevices) return null;
          let r =
              null !==
                (e =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VRProperties.GetBoolProperty(
                        "/user/head",
                        a.fD.Audio_SupportsDualSpeakerAndJackOutput_Bool,
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
                        a.fD.Hmd_SupportsMicMonitoring_Bool,
                      )) &&
              void 0 !== t &&
              t,
            i = !1;
          try {
            i =
              "htc" ==
                v.HR.settings
                  .get("/settings/LastKnown/HMDManufacturer")
                  .toLowerCase() &&
              v.HR.settings
                .get("/settings/LastKnown/HMDModel")
                .toLowerCase()
                .indexOf("vive") >= 0;
          } catch (e) {}
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(_.Al, {
              name: this.getHmdAudioSettingsKey("enablePlaybackDeviceOverride"),
              label: (0, h.we)("#Settings_Audio_Playback_Automatic_Label"),
              offLabel: (0, h.we)("#Settings_Audio_Headset"),
              onLabel: (0, h.we)("#Settings_Audio_Manual"),
              onSubsection: c.createElement(_.xS, {
                items: this.makeDeviceChoiceList(
                  v.HR.audioDevices.playback_devices,
                ),
                value: v.HR.audioDevices.selected_playback_device,
                onChange: this.onOverrideDeviceDropdownChanged.bind(
                  this,
                  "playbackDeviceOverride",
                ),
                defaultLabel: (0, h.we)(
                  "#Settings_Audio_Current_Setting_Unknown",
                ),
              }),
            }),
            c.createElement(_.Al, {
              name: this.getHmdAudioSettingsKey(
                "enableRecordingDeviceOverride",
              ),
              label: (0, h.we)("#Settings_Audio_Recording_Automatic_Label"),
              offLabel: (0, h.we)("#Settings_Audio_Headset"),
              onLabel: (0, h.we)("#Settings_Audio_Manual"),
              onSubsection: c.createElement(_.xS, {
                items: this.makeDeviceChoiceList(
                  v.HR.audioDevices.record_devices,
                ),
                value: v.HR.audioDevices.selected_recording_device,
                onChange: this.onOverrideDeviceDropdownChanged.bind(
                  this,
                  "recordingDeviceOverride",
                ),
                defaultLabel: (0, h.we)(
                  "#Settings_Audio_Current_Setting_Unknown",
                ),
              }),
            }),
            c.createElement(_.Al, {
              name: "/settings/audio/enablePlaybackMirror",
              label: (0, h.we)("#Settings_Audio_Mirroring_Label"),
              onSubsection: c.createElement(
                c.Fragment,
                null,
                c.createElement(_.xS, {
                  items: this.makeDeviceChoiceList(
                    v.HR.audioDevices.playback_devices,
                  ),
                  value: v.HR.audioDevices.selected_mirror_device,
                  onChange: this.onMirrorDeviceDropdownChanged,
                  defaultLabel: (0, h.we)(
                    "#Settings_Audio_Current_Setting_Unknown",
                  ),
                }),
                c.createElement(_.Al, {
                  name: "/settings/audio/enablePlaybackMirrorIndependentVolume",
                  label: (0, h.we)(
                    "#Settings_Audio_Mirroring_Independent_Volume_Label",
                  ),
                  visibility: _.Z3.Advanced,
                }),
              ),
            }),
            i &&
              c.createElement(_.Al, {
                name: "/settings/audio/viveHDMIGain",
                label: (0, h.we)("#Settings_Audio_HDMIGain"),
              }),
            r &&
              c.createElement(_.Al, {
                name: "/settings/audio/dualSpeakerAndJackOutput",
                label: (0, h.we)("#Settings_Audio_SpeakerJackOutput"),
                offLabel: (0, h.we)("#Settings_Audio_Single"),
                onLabel: (0, h.we)("#Settings_Audio_Dual"),
                title: (0, h.we)("#Settings_Audio_SpeakerJackOutput_Title"),
              }),
            n &&
              c.createElement(_.Al, {
                name: "/settings/audio/muteMicMonitor",
                label: (0, h.we)("#Settings_Audio_MicMonitor"),
                offLabel: (0, h.we)("#Settings_Audio_Active"),
                onLabel: (0, h.we)("#Settings_Audio_Muted"),
              }),
          );
        }
      };
      (S.Name = "audio_settings"),
        (0, n.Cg)([i.o], S.prototype, "onAudioDeviceChanged", null),
        (0, n.Cg)([i.o], S.prototype, "onOverrideDeviceDropdownChanged", null),
        (0, n.Cg)([i.o], S.prototype, "onMirrorDeviceDropdownChanged", null),
        (S = (0, n.Cg)([l.PA], S));
      var y,
        f,
        R = r(917),
        w = r(6379);
      !(function (e) {
        (e[(e.DEFAULT = 0)] = "DEFAULT"),
          (e[(e.EDGE_A = 1)] = "EDGE_A"),
          (e[(e.EDGE_B = 2)] = "EDGE_B"),
          (e[(e.VIDEO_TRANSLUCENT = 3)] = "VIDEO_TRANSLUCENT"),
          (e[(e.VIDEO_OPAQUE = 4)] = "VIDEO_OPAQUE"),
          (e[(e.COUNT = 5)] = "COUNT");
      })(y || (y = {})),
        (function (e) {
          (e[(e.Evaluating = 0)] = "Evaluating"),
            (e[(e.Success = 1)] = "Success"),
            (e[(e.Failure = 2)] = "Failure");
        })(f || (f = {}));
      class C extends c.Component {
        static get DefaultState() {
          return {
            bShowTest: !1,
            streamingProgress: f.Evaluating,
            trackingProgress: f.Evaluating,
          };
        }
        constructor(e) {
          super(e),
            (this.m_imageRef = c.createRef()),
            (this.m_cameraFrameCount = 0),
            (this.state = C.DefaultState);
        }
        componentWillUnmount() {
          this.stopTest();
        }
        updateStatus() {
          let e = Date.now() - this.m_startTestTime;
          this.state.streamingProgress == f.Evaluating &&
            (this.m_cameraFrameCount > 0
              ? this.setState({ streamingProgress: f.Success })
              : e > 5e3 && this.setState({ streamingProgress: f.Failure }));
          let t = VRHTML.GetPose(a.Gz, a.mu.Standing);
          if (this.m_cameraFrameCount > 0) {
            t.bPoseIsValid || this.setState({ trackingProgress: f.Failure }),
              Date.now() - this.m_firstFrameTime > 2e3 &&
                this.state.trackingProgress == f.Evaluating &&
                this.setState({ trackingProgress: f.Success });
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
          this.setState(C.DefaultState),
            VRHTML.VRTrackedCameraInternal.StopCameraTest(),
            window.clearInterval(this.m_updateInterval),
            (this.m_updateInterval = void 0);
        }
        renderStatusLine() {
          return this.state.streamingProgress == f.Evaluating
            ? c.createElement(
                "h1",
                { className: "CameraStatus Evaluating" },
                (0, h.we)("#CameraTest_CheckingCamera"),
              )
            : this.state.streamingProgress == f.Failure
              ? c.createElement(
                  "h1",
                  { className: "CameraStatus Failure" },
                  (0, h.we)("#CameraTest_CameraFailed"),
                )
              : this.state.trackingProgress == f.Evaluating
                ? c.createElement(
                    "h1",
                    { className: "CameraStatus Evaluating" },
                    (0, h.we)("#CameraTest_CheckingTracking"),
                  )
                : this.state.trackingProgress == f.Failure
                  ? c.createElement(
                      "h1",
                      { className: "CameraStatus Failure" },
                      (0, h.we)("#CameraTest_TrackingFailed"),
                    )
                  : c.createElement(
                      "h1",
                      { className: "CameraStatus Success" },
                      (0, h.we)("#CameraTest_Success"),
                    );
        }
        render() {
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(
              "div",
              { className: "SettingsItem CameraTestSettingsItem" },
              c.createElement(
                "div",
                { className: "Label" },
                (0, h.we)("#Settings_CameraTest"),
              ),
              c.createElement(
                u.$,
                { className: "ButtonControl", onClick: this.startTest },
                (0, h.we)("#Settings_StartCameraTest"),
              ),
            ),
            this.state.bShowTest &&
              c.createElement(
                _.bB,
                {
                  className: "CameraTest",
                  header: this.renderStatusLine(),
                  onDismissRequested: this.stopTest,
                },
                c.createElement("img", { ref: this.m_imageRef }),
              ),
          );
        }
      }
      var M;
      (0, n.Cg)([i.o], C.prototype, "onUpdateCameraFrame", null),
        (0, n.Cg)([i.o], C.prototype, "startTest", null),
        (0, n.Cg)([i.o], C.prototype, "stopTest", null),
        (function (e) {
          (e[(e.Off = 0)] = "Off"),
            (e[(e.On2D = 1)] = "On2D"),
            (e[(e.On3D = 2)] = "On3D");
        })(M || (M = {}));
      const T = (0, l.PA)(() => {
        let e = v.HR.settings.get(p.D1),
          t = [
            { value: M.Off, sLabel: (0, h.we)("#Settings_ToggleButton_Off") },
          ];
        return (
          w.c.m_bSupportsRoomViewDepthProjection || e == M.On3D
            ? (t.push({ value: M.On2D, sLabel: (0, h.we)("#Settings_2D") }),
              t.push({ value: M.On3D, sLabel: (0, h.we)("#Settings_3D") }))
            : t.push({
                value: M.On2D,
                sLabel: (0, h.we)("#Settings_ToggleButton_On"),
              }),
          c.createElement(
            c.Fragment,
            null,
            c.createElement(_.JA, {
              label: (0, h.we)("#Settings_Camera_AllowCameraForRoomView"),
              title: (0, h.we)("#Settings_Camera_AllowCameraForRoomView_Desc"),
              items: t,
              value: e,
              onChange: (e) => {
                v.HR.SetSettingsValue(p.D1, e);
              },
            }),
            !w.c.m_bSupportsRoomViewDepthProjection &&
              e == M.On3D &&
              c.createElement(
                "div",
                { className: "SettingsItemValueLabel" },
                (0, h.we)("#Settings_Camera_RoomView3D_Unsupported"),
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
      const V = (0, l.PA)(() => {
        let e = v.HR.settings.get(p.ui),
          t = [
            {
              value: E.Auto,
              sLabel: (0, h.we)("#Settings_Camera_AntiFlickerSettingAuto"),
            },
            {
              value: E.Power60hz,
              sLabel: (0, h.we)("#Settings_Camera_AntiFlickerSetting60Hz"),
            },
            {
              value: E.Power50hz,
              sLabel: (0, h.we)("#Settings_Camera_AntiFlickerSetting50Hz"),
            },
          ];
        return c.createElement(_.JA, {
          label: (0, h.we)("#Settings_Camera_AntiFlicker"),
          title: (0, h.we)("#Settings_Camera_AntiFlicker_Desc"),
          items: t,
          value: e,
          onChange: (e) => {
            v.HR.SetSettingsValue(p.ui, e);
          },
        });
      });
      let D = class extends _.yO {
        constructor(e) {
          super(e),
            (this.state = {
              cameraRateValue: this.fetchCameraRate(),
              showCameraTest: !1,
            });
        }
        cameraEnabled() {
          return v.HR.settings.get(p.xz);
        }
        fetchCameraRate() {
          var e;
          if (!w.c.m_bCameraCompatibilityModes) return 0;
          return (function (e) {
            switch (e) {
              case a.Ee.ISO_30FPS:
                return 30;
              case a.Ee.ISO_35FPS:
                return 35;
              case a.Ee.ISO_40FPS:
                return 40;
              case a.Ee.ISO_46FPS:
                return 45;
              case a.Ee.ISO_50FPS:
                return 50;
              case a.Ee.BULK_8K_DMA:
                return 55;
              default:
              case a.Ee.BULK_DEFAULT:
                return 60;
            }
          })(
            null !==
              (e =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRProperties.GetInt32Property(
                      "/user/head",
                      a.fD.CameraCompatibilityMode_Int32,
                    )) && void 0 !== e
              ? e
              : a.Ee.BULK_DEFAULT,
          );
        }
        setCameraRate(e) {
          let t = (function (e) {
            switch (e) {
              case 30:
                return a.Ee.ISO_30FPS;
              case 35:
                return a.Ee.ISO_35FPS;
              case 40:
                return a.Ee.ISO_40FPS;
              case 45:
                return a.Ee.ISO_46FPS;
              case 50:
                return a.Ee.ISO_50FPS;
              case 55:
                return a.Ee.BULK_8K_DMA;
              default:
                return a.Ee.BULK_DEFAULT;
            }
          })(e);
          VRHTML.VRTrackedCameraInternal.SetCameraCompatibilityMode(t) &&
            v.HR.SetRestartRequired();
        }
        onCameraEnabled(e) {
          v.HR.SetSettingsValue(p.xz, e),
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
          let e = v.HR.settings.get(p.Ni);
          return e == y.DEFAULT && (e = y.EDGE_B), e;
        }
        renderEnabledSettings() {
          let e = !1,
            t = !1;
          switch (this.currentRoomViewStyle) {
            case y.EDGE_A:
              (t = !0), (e = !0);
              break;
            case y.EDGE_B:
              e = !0;
          }
          const r = this.state.cameraRateValue > 0,
            n = v.HR.settings.get(p.D1),
            a =
              v.HR.settings.get(
                "/settings/camera/enableCameraForCollisionBounds",
              ) || n != M.Off;
          let i = [
            {
              value: y.EDGE_A,
              sLabel: (0, h.we)("#Settings_Camera_RoomViewStyle_EdgeA"),
            },
            {
              value: y.EDGE_B,
              sLabel: (0, h.we)("#Settings_Camera_RoomViewStyle_EdgeB"),
            },
            {
              value: y.VIDEO_TRANSLUCENT,
              sLabel: (0, h.we)(
                "#Settings_Camera_RoomViewStyle_VideoTranslucent",
              ),
            },
            {
              value: y.VIDEO_OPAQUE,
              sLabel: (0, h.we)("#Settings_Camera_RoomViewStyle_VideoOpaque"),
            },
          ];
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(T, null),
            w.c.m_bAllowLightSourceFrequency && c.createElement(V, null),
            r &&
              c.createElement(_.tE, {
                label: (0, h.we)("#Settings_Camera_Rate_Hz"),
                title: (0, h.we)("#Settings_Camera_CompatibilityExplanation"),
                min: 30,
                max: 60,
                step: 5,
                value: this.state.cameraRateValue,
                onChange: this.onCameraRateChanged.bind(
                  this,
                  "click_activate_threshold",
                ),
                valueStyleVariant: R.Te.OnHandle,
                renderValue: (e) => this.state.cameraRateValue.toString(),
              }),
            a &&
              c.createElement(_.xS, {
                value: this.currentRoomViewStyle,
                onChange: (e) => v.HR.SetSettingsValue(p.Ni, e),
                label: (0, h.we)("#Settings_Camera_RoomViewStyle"),
                items: i,
                subsection:
                  (t || e) &&
                  c.createElement(
                    c.Fragment,
                    null,
                    e &&
                      c.createElement(_.Pw, {
                        nameR: "/settings/camera/cameraBoundsColorGammaR",
                        nameG: "/settings/camera/cameraBoundsColorGammaG",
                        nameB: "/settings/camera/cameraBoundsColorGammaB",
                        label: (0, h.we)("#Settings_Chaperone_BoundsColor"),
                      }),
                    t &&
                      c.createElement(_.u4, {
                        name: "/settings/camera/cameraBoundsColorGammaA",
                        min: 76.5,
                        max: 255,
                        label: (0, h.we)(
                          "#Settings_Chaperone_BoundsTransparency",
                        ),
                        color: {
                          r: v.HR.settings.get(
                            "/settings/camera/cameraBoundsColorGammaR",
                          ),
                          g: v.HR.settings.get(
                            "/settings/camera/cameraBoundsColorGammaG",
                          ),
                          b: v.HR.settings.get(
                            "/settings/camera/cameraBoundsColorGammaB",
                          ),
                        },
                      }),
                  ),
              }),
            c.createElement(_.Al, {
              name: "/settings/camera/showOnController",
              label: (0, h.we)("#Settings_Camera_ShowOnController"),
              title: (0, h.we)("#Settings_Camera_ShowOnController_Desc"),
            }),
            c.createElement(_.Al, {
              name: "/settings/camera/enableCameraForCollisionBounds",
              label: (0, h.we)(
                "#Settings_Camera_AllowCameraForChaperoneBounds",
              ),
              title: (0, h.we)(
                "#Settings_Camera_AllowCameraForChaperoneBounds_Desc",
              ),
            }),
          );
        }
        render() {
          return this.props.active
            ? c.createElement(
                c.Fragment,
                null,
                this.cameraEnabled() && this.renderEnabledSettings(),
                this.cameraEnabled() &&
                  w.c.m_bAllowCameraToggle &&
                  c.createElement("hr", null),
                this.cameraEnabled() && this.GetComponentsForGroup("dev"),
                w.c.m_bAllowCameraToggle &&
                  c.createElement(_.Al, {
                    label: (0, h.we)("#Settings_Camera_EnableCamera"),
                    value: this.cameraEnabled(),
                    requiresRestart: !0,
                    onChange: this.onCameraEnabled,
                    offLabel: (0, h.we)("#Settings_ToggleButton_Disable"),
                    onLabel: (0, h.we)("#Settings_ToggleButton_Enable"),
                  }),
                this.cameraEnabled() &&
                  w.c.m_bAllowCameraToggle &&
                  c.createElement(C, null),
                !1,
                !1,
                this.makeResetToDefaultButton(),
              )
            : null;
        }
      };
      (D.Name = "camera_settings"),
        (0, n.Cg)([i.o], D.prototype, "onCameraEnabled", null),
        (0, n.Cg)([i.o], D.prototype, "onCameraRateChanged", null),
        (0, n.Cg)([i.o], D.prototype, "onStartCameraTest", null),
        (0, n.Cg)([i.o], D.prototype, "onStopCameraTest", null),
        (0, n.Cg)([o.computed], D.prototype, "currentRoomViewStyle", null),
        (D = (0, n.Cg)([l.PA], D));
      var B = r(2928),
        A = r(2503),
        O = r(1835),
        I = r(5163);
      let k = class extends _.yO {
        constructor(e) {
          super(e);
        }
        render() {
          return this.props.active
            ? c.createElement(
                c.Fragment,
                null,
                !O.SW.isVRGamepadUI &&
                  c.createElement(_.xS, {
                    name: p.md,
                    label: (0, h.we)("#Settings_Dashboard_Position"),
                    items: [
                      { value: A.eo.Near, sLabel: (0, h.we)("#Settings_Near") },
                      {
                        value: A.eo.Middle,
                        sLabel: (0, h.we)("#Settings_Middle"),
                      },
                      { value: A.eo.Far, sLabel: (0, h.we)("#Settings_Far") },
                    ],
                  }),
                c.createElement(_.Al, {
                  name: "/settings/dashboard/showPowerOptions",
                  label: (0, h.we)("#Settings_ShowPowerMenu"),
                  visibility: _.Z3.Advanced,
                }),
                c.createElement(_.Al, {
                  name: "/settings/dashboard/showDesktop",
                  label: (0, h.we)("#Settings_ShowDesktopViews"),
                  visibility: _.Z3.Advanced,
                }),
                c.createElement(_.Al, {
                  name: "/settings/dashboard/allowAppQuitting",
                  label: (0, h.we)("#Settings_AllowAppQuitting"),
                  visibility: _.Z3.Advanced,
                }),
                c.createElement(_.Al, {
                  name: "/settings/dashboard/arcadeMode",
                  label: (0, h.we)("#Settings_ShowSettingsInDashboard"),
                  swapOnOff: !0,
                  visibility: _.Z3.Advanced,
                }),
                (0, a.R$)() != a.OH.Overlay &&
                  c.createElement(_.Al, {
                    name: "/settings/dashboard/enableDashboard",
                    title: (0, h.we)("#Settings_EnableDashboardDesc"),
                    label: (0, h.we)("#Settings_EnableDashboard"),
                    visibility: _.Z3.Advanced,
                  }),
                c.createElement(_.Al, {
                  name: "/settings/dashboard/autoShowGameTheater",
                  title: (0, h.we)("#Settings_AutoShowGameTheaterDesc"),
                  label: (0, h.we)("#Settings_AutoShowGameTheater"),
                  visibility: _.Z3.Advanced,
                }),
                c.createElement(_.Al, {
                  name: "/settings/dashboard/inputCaptureEnabled",
                  title: (0, h.we)("#Settings_InputCaptureEnabledDesc"),
                  label: (0, h.we)("#Settings_InputCaptureEnabled"),
                  visibility: _.Z3.Advanced,
                }),
                c.createElement(_.tE, {
                  min: 0,
                  max: 1.5,
                  step: 0.1,
                  valueStyleVariant: R.Te.OnHandle,
                  detents: [1],
                  renderValue: (e) => (100 * e).toFixed(0) + "%",
                  name: "/settings/dashboard/grabHandleAcceleration",
                  title: (0, h.we)(
                    "#Settings_Dashboard_GrabHandleAccelerationDesc",
                  ),
                  label: (0, h.we)(
                    "#Settings_Dashboard_GrabHandleAcceleration",
                  ),
                  visibility: _.Z3.Advanced,
                }),
                c.createElement(_.xS, {
                  name: p.Ju,
                  label: (0, h.we)("#Settings_TheaterCurvature"),
                  items: [
                    {
                      value: I.Do.Curved,
                      sLabel: (0, h.we)("#Settings_TheaterCurvature_Curved"),
                    },
                    {
                      value: I.Do.Flat,
                      sLabel: (0, h.we)("#Settings_TheaterCurvature_Flat"),
                    },
                  ],
                  visibility: _.Z3.Advanced,
                }),
                c.createElement(_.xS, {
                  name: p.vo,
                  label: (0, h.we)("#Settings_TheaterScreenSize"),
                  items: [
                    {
                      value: O.Nr.Large,
                      sLabel: (0, h.we)("#Settings_TheaterScreenSize_Large"),
                    },
                    {
                      value: O.Nr.Medium,
                      sLabel: (0, h.we)("#Settings_TheaterScreenSize_Medium"),
                    },
                  ],
                  visibility: _.Z3.Advanced,
                }),
                c.createElement(_.xS, {
                  name: p.xY,
                  label: (0, h.we)("#Settings_TheaterScreenAlignment"),
                  items: [
                    {
                      value: O.tb.PlayArea,
                      sLabel: (0, h.we)(
                        "#Settings_TheaterScreenAlignment_PlayArea",
                      ),
                    },
                    {
                      value: O.tb.Dashboard,
                      sLabel: (0, h.we)(
                        "#Settings_TheaterScreenAlignment_Dashboard",
                      ),
                    },
                  ],
                  visibility: _.Z3.Advanced,
                }),
                c.createElement(_.Al, {
                  name: p.xP,
                  label: (0, h.we)("#Settings_Dashboard_KeyboardPrivacy"),
                  onLabel: (0, h.we)(
                    "#Settings_Dashboard_KeyboardPrivacy_Enabled",
                  ),
                  offLabel: (0, h.we)(
                    "#Settings_Dashboard_KeyboardPrivacy_Disabled",
                  ),
                  visibility: _.Z3.Advanced,
                  swapOnOff: !0,
                  offSubsection: c.createElement(
                    c.Fragment,
                    null,
                    c.createElement(
                      "div",
                      { className: "Label" },
                      (0, h.we)(
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
      var L;
      (k.Name = "dashboard_settings"),
        (k = (0, n.Cg)([l.PA], k)),
        (function (e) {
          (e[(e.Disabled = 0)] = "Disabled"),
            (e[(e.Automatic = 1)] = "Automatic"),
            (e[(e.Always = 2)] = "Always");
        })(L || (L = {}));
      let H = class extends c.Component {
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
              let a = {
                sId: "",
                sName: "",
                bIsImplicit: !1,
                bIsEnabled: !1,
                bIsModifyAllowed: !0,
              };
              (a.sId = e[t++].toString()),
                (a.sName = e[t++].toString()),
                (a.bIsImplicit = !0 === e[t++]),
                (a.bIsEnabled = !0 === e[t++]),
                (a.bIsModifyAllowed = !0 === e[t++]),
                r.push(a),
                a.bIsEnabled && n++;
            }
          const a = r.filter(this.isImplicitLayer),
            i = r.filter(this.isExplicitLayer),
            s = r.filter(this.isImplicitNoModifLayer);
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(
              _.YO,
              {
                className: "SettingsItem",
                title: (0, h.we)("#Settings_Loading"),
              },
              c.createElement(
                u.$,
                { className: "ButtonControl", onClick: this.show },
                (0, h.we)("#OpenXR_ApiLayers_Manage"),
                c.createElement(
                  "div",
                  { className: "Badge" },
                  (0, h.we)("#OpenXR_ApiLayers_Active", n),
                ),
              ),
            ),
            this.state.bShowingModal &&
              c.createElement(
                _.bB,
                {
                  className: "OverlayAutoLaunchModal",
                  header: (0, h.we)("#OpenXR_ApiLayers_Installed"),
                  onDismissRequested: this.hide,
                },
                a.length > 0 &&
                  a.map((e) =>
                    c.createElement(_.Al, {
                      key: e.sId,
                      label: e.sName,
                      value: e.bIsEnabled,
                      onChange: (t) => this.setApiLayerState(e.sId, t),
                    }),
                  ),
                s.length > 0 &&
                  s.map((e) =>
                    c.createElement(
                      "div",
                      { className: "SettingsItem" },
                      c.createElement("div", { className: "Label" }, e.sName),
                      e.bIsEnabled &&
                        c.createElement(
                          "div",
                          { className: "SettingsItemValueInfo" },
                          " ",
                          (0, h.we)("#OpenXR_ApiLayers_Enabled"),
                        ),
                      !e.bIsEnabled &&
                        c.createElement(
                          "div",
                          { className: "SettingsItemValueInfo" },
                          " ",
                          (0, h.we)("#OpenXR_ApiLayers_Disabled"),
                        ),
                    ),
                  ),
                i.length > 0 &&
                  i.map((e) =>
                    c.createElement(
                      "div",
                      { className: "SettingsItem" },
                      c.createElement("div", { className: "Label" }, e.sName),
                      c.createElement(
                        "div",
                        { className: "SettingsItemValueInfo" },
                        (0, h.we)("#OpenXR_ApiLayers_App_Controlled"),
                      ),
                    ),
                  ),
                t &&
                  c.createElement(
                    "div",
                    { className: "ModalPlaceholder" },
                    (0, h.we)("#OpenXR_ApiLayers_None_Installed"),
                  ),
              ),
          );
        }
      };
      (0, n.Cg)([i.o], H.prototype, "isImplicitLayer", null),
        (0, n.Cg)([i.o], H.prototype, "isExplicitLayer", null),
        (0, n.Cg)([i.o], H.prototype, "isImplicitNoModifLayer", null),
        (0, n.Cg)([i.o], H.prototype, "setApiLayerState", null),
        (0, n.Cg)([i.o], H.prototype, "show", null),
        (0, n.Cg)([i.o], H.prototype, "hide", null),
        (H = (0, n.Cg)([l.PA], H));
      let P = class extends _.yO {
        constructor(e) {
          super(e);
          (this.m_mailbox = new a._n()),
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
              : [a.gN.Error, ""];
          a.gN.ThisSteamVR;
          const n = VRHTML.VRMonitor.HasVRMonitor();
          switch (t) {
            case a.gN.AnotherSteamVR:
              r = "#OpenXR_AnotherSteamVR";
              break;
            case a.gN.ThisSteamVR:
              r = "#OpenXR_SteamVR";
              break;
            default:
            case a.gN.Error:
              r = "#OpenXR_Error";
              break;
            case a.gN.None:
              r = "#OpenXR_None";
              break;
            case a.gN.AnotherRuntime:
              switch (r) {
                case "Oculus OpenXR":
                  r = "#OpenXR_OculusRuntime";
                  break;
                case "MixedRealityRuntime":
                  r = "#OpenXR_WindowsMixedReality";
              }
          }
          return (
            r.startsWith("#") && (r = (0, h.we)(r)),
            c.createElement(
              c.Fragment,
              null,
              this.schemaComponents,
              c.createElement(
                "div",
                { className: "SettingsItem" },
                c.createElement(
                  "div",
                  { className: "OpenXRRuntimeLabel" },
                  (0, h.we)("#Settings_CurrentOpenXRRuntime"),
                ),
                c.createElement(
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
                c.createElement(
                  "div",
                  { className: "SettingsItem Button ResetDefaultButton" },
                  c.createElement(
                    u.$,
                    {
                      className: "ButtonControl",
                      onClick: this.OnSetAsOpenXRRuntime,
                      enabled: n,
                    },
                    (0, h.we)("#Settings_SetAsOpenXRRuntime"),
                  ),
                ),
              c.createElement(H, null),
              this.makeResetToDefaultButton(),
              c.createElement(_.JA, {
                name: p.i8,
                label: (0, h.we)("#Settings_OpenXR_MetaPluginCompatibility"),
                title: (0, h.we)("#Settings_OpenXR_MetaPluginCompatibilityTip"),
                visibility: _.Z3.Advanced,
                items: [
                  {
                    sLabel: (0, h.we)("#Settings_ToggleButton_Off"),
                    value: L.Disabled,
                  },
                  {
                    sLabel: (0, h.we)("#OpenXR_Automatic"),
                    value: L.Automatic,
                  },
                  {
                    sLabel: (0, h.we)("#Settings_ToggleButton_On"),
                    value: L.Always,
                  },
                ],
              }),
            )
          );
        }
      };
      (P.Name = "openxr_settings"),
        (0, n.Cg)([i.o], P.prototype, "OnSetAsOpenXRRuntime", null),
        (P = (0, n.Cg)([l.PA], P));
      const F = (0, l.PA)(function () {
        const [e, t] = c.useState(a.GQ.Medium),
          [r, n] = c.useState(!1),
          [i, s] = c.useState(""),
          o = c.useCallback((e) => {
            s(e);
          }, []);
        c.useEffect(() => {
          const e =
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.RegisterForTrackingRecordingPathChangedEvent(o);
          return null == e ? void 0 : e.unregister;
        }, [o]);
        let l = [];
        l.push({
          value: a.GQ.Small,
          sLabel: (0, h.we)("#Advanced_SmallSpace"),
        }),
          l.push({
            value: a.GQ.Medium,
            sLabel: (0, h.we)("#Advanced_MediumSpace"),
          }),
          l.push({
            value: a.GQ.Large,
            sLabel: (0, h.we)("#Advanced_LargeSpace"),
          }),
          l.push({
            value: a.GQ.Gigantic,
            sLabel: (0, h.we)("#Advanced_GiganticSpace"),
          }),
          l.push({
            value: a.GQ.Standing,
            sLabel: (0, h.we)("#Advanced_StandingSpace"),
          });
        const d = (0, h.we)(
          m()
            ? "#Advanced_TrackingRecordingStop"
            : "#Advanced_TrackingRecordingStart",
        );
        function m() {
          return O.SW.m_bTrackingRecording;
        }
        return c.createElement(
          c.Fragment,
          null,
          c.createElement(
            "div",
            { className: "SettingsItem" },
            c.createElement(
              "div",
              { className: "Label Title" },
              (0, h.we)("#Advanced_RoomAndTracking"),
            ),
          ),
          c.createElement(
            "div",
            { className: "SettingsItem" },
            c.createElement(
              "div",
              { className: "SettingsItemValueInfo Left" },
              (0, h.we)("#Advanced_QuickCalibrate_Explanation"),
            ),
          ),
          c.createElement(
            "div",
            { className: "SettingsItem ButtonRow" },
            c.createElement(
              u.$,
              {
                className: "ButtonControl",
                onClick: () => {
                  VRHTML.VRChaperoneSetup.QuickCalibratePlayspace(e);
                },
              },
              (0, h.we)("#Advanced_QuickCalibrate"),
            ),
            c.createElement(b.ms, { items: l, onChange: t, value: e }),
          ),
          VRHTML.VRSystem &&
            c.createElement(
              "div",
              { className: "SettingsItem" },
              c.createElement(
                "div",
                { className: "Label" },
                (0, h.we)("#Advanced_RecordTrackingData"),
              ),
              c.createElement(
                u.$,
                {
                  className: "ButtonControl",
                  onClick: function () {
                    m()
                      ? (VRHTML.VRSystem.StopTrackingRecording(), n(!0))
                      : (VRHTML.VRSystem.StartTrackingRecording(), n(!1));
                  },
                },
                d,
              ),
            ),
          r &&
            !m() &&
            c.createElement(
              _.bB,
              {
                className: "TrackingSavedModalButton",
                header: (0, h.we)("#Settings_Developer_TrackingDataHeader"),
                onDismissRequested: function () {
                  n(!1);
                },
              },
              c.createElement(
                "div",
                { className: "ModalPlaceholder" },
                (0, h.we)("#Settings_Developer_TrackingDataSavedSuccessfully"),
                " ",
                c.createElement("br", null),
                " ",
                i,
                " ",
              ),
            ),
        );
      });
      function x() {
        return c.createElement(
          c.Fragment,
          null,
          c.createElement(
            "div",
            { className: "SettingsItem" },
            c.createElement(
              "div",
              { className: "Label Title" },
              (0, h.we)("#Advanced_FrameTiming"),
            ),
          ),
          c.createElement(_.Al, {
            name: "/settings/perfcheck/perfGraphInHMD",
            label: (0, h.we)("#Advanced_PerfGraphInHMD"),
          }),
          c.createElement(_.Al, {
            name: "/settings/perfcheck/saveTimingsOnExit",
            label: (0, h.we)("#Advanced_AutoSaveTimingInfoOnExit"),
          }),
          c.createElement(_.Al, {
            name: "/settings/perfcheck/allowTimingStore",
            label: (0, h.we)("#Advanced_AllowSavingOfTimingInfo"),
          }),
          VRHTML.VRMonitor.HasVRMonitor() &&
            c.createElement(
              "div",
              { className: "SettingsItem" },
              c.createElement("div", { className: "Label" }),
              c.createElement(
                u.$,
                {
                  className: "ButtonControl",
                  onClick: () => {
                    VRHTML.VRMonitor.SaveTimingFramesToDisk();
                  },
                },
                (0, h.we)("#Advanced_SaveFrameDataNow"),
              ),
            ),
        );
      }
      function N() {
        return c.createElement(
          c.Fragment,
          null,
          c.createElement(
            "div",
            { className: "SettingsItem" },
            c.createElement(
              "div",
              { className: "Label Title" },
              (0, h.we)("#Settings_Advanced_Status_Header"),
            ),
          ),
          c.createElement(_.xS, {
            name: "/settings/userinterface/vrmStatusCheckInterval",
            label: (0, h.we)("#Settings_StatusCheckInterval"),
            items: [
              { value: 0, sLabel: (0, h.we)("#StatusCheckInterval_Never") },
              { value: 1e3, sLabel: (0, h.we)("#StatusCheckInterval_Normal") },
              { value: 100, sLabel: (0, h.we)("#StatusCheckInterval_Often") },
              { value: 5e3, sLabel: (0, h.we)("#StatusCheckInterval_Seldom") },
            ],
          }),
          c.createElement(
            "div",
            { className: "SettingsItem" },
            c.createElement("div", { className: "Label" }),
            c.createElement(
              u.$,
              {
                className: "ButtonControl",
                onClick: () => {
                  VRHTML.VRMonitor.RefreshStatusNow();
                },
              },
              (0, h.we)("#Settings_RefreshStatusNow"),
            ),
          ),
          c.createElement(_.Al, {
            name: "/settings/userinterface/vrmCheckForSteam",
            label: (0, h.we)("#Settings_CheckForSteam"),
          }),
        );
      }
      function z() {
        return c.createElement(
          c.Fragment,
          null,
          c.createElement(
            "div",
            { className: "SettingsItem" },
            c.createElement(
              "div",
              { className: "Label Title" },
              (0, h.we)("#Settings_Advanced_Paths_Header"),
            ),
          ),
          c.createElement(
            "div",
            { className: "SettingsItem" },
            c.createElement(
              "div",
              { className: "Label" },
              (0, h.we)("#MenuAction_LogDirectory"),
            ),
            c.createElement(
              u.$,
              {
                className: "ButtonControl",
                onClick: () => {
                  VRHTML.VRMonitor.SetLog();
                },
              },
              (0, h.we)("#MenuAction_Update"),
            ),
          ),
          c.createElement(
            "div",
            { className: "SettingsItem" },
            c.createElement(
              "div",
              { className: "Label" },
              (0, h.we)("#MenuAction_ConfigDirectory"),
            ),
            c.createElement(
              u.$,
              {
                className: "ButtonControl",
                onClick: () => {
                  VRHTML.VRMonitor.SetConfig();
                },
              },
              (0, h.we)("#MenuAction_Update"),
            ),
          ),
        );
      }
      function W() {
        function e(e) {
          VRHTML.VRMonitor.SetDirectModeEnabled(e, !0),
            v.HR.SetRestartRequired();
        }
        return c.createElement(
          c.Fragment,
          null,
          c.createElement(
            "div",
            { className: "Subsection" },
            c.createElement(
              "div",
              { className: "SettingsItem" },
              c.createElement(
                "div",
                { className: "Label Title" },
                (0, h.we)("#Settings_Advanced_Legacy_Header"),
              ),
            ),
            c.createElement(
              c.Fragment,
              null,
              c.createElement(
                "div",
                { className: "SettingsItem" },
                c.createElement(
                  "div",
                  { className: "SettingsItemValueInfo Left" },
                  (0, h.we)("#Explanation_RemoveAllSteamVRUSBDevices"),
                ),
              ),
              c.createElement(
                "div",
                { className: "SettingsItem ButtonRow" },
                c.createElement("div", { className: "Label" }),
                c.createElement(
                  u.$,
                  {
                    className: "ButtonControl",
                    onClick: () => {
                      VRHTML.VRMonitor.RemoveAllRelevantUSBDevices();
                    },
                  },
                  (0, h.we)("#MenuAction_RemoveAllSteamVRUSBDevices"),
                ),
              ),
            ),
            c.createElement(
              c.Fragment,
              null,
              c.createElement(
                "div",
                { className: "SettingsItem" },
                c.createElement(
                  "div",
                  { className: "SettingsItemValueInfo Left" },
                  (0, h.we)("#Explanation_DisableEnhancedPowerManagement"),
                ),
              ),
              c.createElement(
                "div",
                { className: "SettingsItem ButtonRow" },
                c.createElement("div", { className: "Label" }),
                c.createElement(
                  u.$,
                  {
                    className: "ButtonControl",
                    onClick: () => {
                      VRHTML.VRMonitor.DisableEnhancedPowerManagement();
                    },
                  },
                  (0, h.we)("#MenuAction_DisableEnhancedPowerManagement"),
                ),
              ),
            ),
            c.createElement(
              c.Fragment,
              null,
              c.createElement(
                "div",
                { className: "SettingsItem" },
                c.createElement(
                  "div",
                  { className: "SettingsItemValueInfo Left" },
                  (0, h.we)("#Explanation_RebootVive"),
                ),
              ),
              c.createElement(
                "div",
                { className: "SettingsItem ButtonRow" },
                c.createElement("div", { className: "Label" }),
                c.createElement(
                  u.$,
                  {
                    className: "ButtonControl",
                    onClick: () => {
                      VRHTML.VRMonitor.RebootHMD();
                    },
                  },
                  (0, h.we)("#MenuAction_RebootVive"),
                ),
              ),
            ),
            c.createElement(
              c.Fragment,
              null,
              c.createElement(
                "div",
                { className: "SettingsItem" },
                c.createElement(
                  "div",
                  { className: "SettingsItemValueInfo Left" },
                  (0, h.we)("#Advanced_DisableDirectModeWarning"),
                ),
              ),
              c.createElement(
                "div",
                { className: "SettingsItem ButtonRow" },
                c.createElement(
                  u.$,
                  {
                    className: "ButtonControl",
                    onClick: () => {
                      e(!0);
                    },
                  },
                  (0, h.we)("#Advanced_EnableDirectDisplayMode"),
                ),
                c.createElement(
                  u.$,
                  {
                    className: "ButtonControl",
                    onClick: () => {
                      e(!1);
                    },
                  },
                  (0, h.we)("#Advanced_DisableDirectDisplayMode"),
                ),
              ),
            ),
          ),
        );
      }
      let G = class extends _.yO {
        constructor(e) {
          super(e);
        }
        render() {
          return this.props.active
            ? c.createElement(
                c.Fragment,
                null,
                this.schemaComponents,
                c.createElement("hr", null),
                c.createElement(F, null),
                VRHTML.VRMonitor.HasVRMonitor() &&
                  c.createElement(
                    c.Fragment,
                    null,
                    c.createElement("hr", null),
                    c.createElement(x, null),
                    c.createElement("hr", null),
                    c.createElement(N, null),
                    c.createElement("hr", null),
                    c.createElement(z, null),
                  ),
                c.createElement("hr", null),
                c.createElement(U, null),
                VRHTML.VRMonitor.HasVRMonitor() &&
                  c.createElement(
                    c.Fragment,
                    null,
                    c.createElement("hr", null),
                    c.createElement(W, null),
                  ),
              )
            : null;
        }
      };
      (G.Name = "developer_settings"), (G = (0, n.Cg)([l.PA], G));
      const U = (0, l.PA)(function (e) {
        var t;
        return c.createElement(
          c.Fragment,
          null,
          c.createElement(_.WZ, {
            label: (0, h.we)("#Settings_VersionInfo_SteamVRVersion"),
            value:
              null ===
                (t =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.SteamVRVersion) || void 0 === t
                ? void 0
                : t.call(VRHTML),
          }),
          c.createElement(_.WZ, {
            label: (0, h.we)("#Settings_VersionInfo_WebpackBuildTime"),
            value: new Date(1762825704e3).toLocaleString(),
          }),
        );
      });
      var q = r(2267);
      let j = class extends _.yO {
        constructor(e) {
          super(e);
        }
        render() {
          return this.props.active
            ? c.createElement(
                c.Fragment,
                null,
                c.createElement(q.y, null),
                c.createElement(q.Pj, null),
                c.createElement(q.EM, null),
                c.createElement(q.zU, null),
                c.createElement(q.rO, null),
                !O.SW.isVRGamepadUI &&
                  c.createElement(_.xS, {
                    name: p.md,
                    label: (0, h.we)("#Settings_Dashboard_Position"),
                    items: [
                      { value: A.eo.Near, sLabel: (0, h.we)("#Settings_Near") },
                      {
                        value: A.eo.Middle,
                        sLabel: (0, h.we)("#Settings_Middle"),
                      },
                      { value: A.eo.Far, sLabel: (0, h.we)("#Settings_Far") },
                    ],
                  }),
                c.createElement(_.Al, {
                  name: "/settings/notifications/DoNotDisturb",
                  label: (0, h.we)("#Settings_General_Notifications_Label"),
                  title: (0, h.we)("#Settings_General_Notifications_Text"),
                  swapOnOff: !0,
                }),
                c.createElement(_.Al, {
                  name: "/settings/userinterface/StatusAlwaysOnTop",
                  label: (0, h.we)("#Settings_StatusWindowAlwaysOnTop_Text"),
                  visibility: _.Z3.Desktop,
                }),
                c.createElement(_.Al, {
                  name: "/settings/steamvr/allowDisplayLockedMode",
                  label: (0, h.we)("#Settings_PauseOnLocked"),
                  swapOnOff: !0,
                  visibility: _.Z3.Advanced,
                }),
                c.createElement(_.Al, {
                  name: "/settings/steamvr/enableHomeApp",
                  label: (0, h.we)("#Settings_HomeAppCheck"),
                  title: (0, h.we)("#Settings_HomeAppDesc"),
                  visibility: _.Z3.Advanced,
                }),
                c.createElement(_.Al, {
                  name: p.au,
                  label: (0, h.we)("#Settings_IpdHUD"),
                  title: (0, h.we)("#Settings_IpdHUDDesc"),
                  visibility: _.Z3.Advanced,
                }),
                VRHTML.VRMonitor.HasVRMonitor() &&
                  c.createElement(
                    _.YO,
                    { visibility: _.Z3.Advanced, className: "SettingsItem" },
                    c.createElement(
                      "div",
                      { className: "Label" },
                      (0, h.we)("#MenuAction_ResetDismissableWarnings"),
                    ),
                    c.createElement(
                      u.$,
                      {
                        className: "ButtonControl",
                        onClick: () => {
                          VRHTML.VRMonitor.ResetDismissableWarnings();
                        },
                      },
                      (0, h.we)("#MenuAction_Reset"),
                    ),
                    c.createElement(
                      "div",
                      { className: "SettingsItemValueInfo" },
                      (0, h.we)("#Explanation_ResetDismissableWarnings"),
                    ),
                  ),
              )
            : null;
        }
      };
      (j.Name = "general_settings"), (j = (0, n.Cg)([l.PA], j));
      const K = (e) => {
        var t;
        const [r, n] = (0, c.useState)(!1);
        const i =
            0.9 *
            (null !==
              (t =
                null === a.Ay || void 0 === a.Ay
                  ? void 0
                  : a.Ay.VRProperties.GetFloatProperty(
                      a.Gz,
                      a.fD.DashboardScale_Float,
                    )) && void 0 !== t
              ? t
              : 1),
          [s, o] = ((e) => {
            const [t, r] = (0, c.useState)(e);
            return (
              c.useEffect(() => {
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
        const l = (function (e, t, r, n) {
            if (!isFinite(e) || !isFinite(t)) return null;
            const a = [];
            return (
              a.push(
                c.createElement("line", {
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
              a.push(
                c.createElement("line", {
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
              a.push(
                c.createElement("circle", {
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
              c.createElement(
                "svg",
                { width: e, height: t, viewBox: [0, 0, e, t].join(" ") },
                a,
              )
            );
          })(240, 240, 20, s),
          d = Math.max(s > 0 ? 1 : 1 + 5 * s, 0);
        return r
          ? c.createElement(
              a.dL,
              { parent_path: "/user/head" },
              c.createElement(
                a.dL,
                { translation: { y: 0, z: -70 }, rotation: { z: 0 }, scale: i },
                c.createElement(
                  a.Zk,
                  {
                    width: void 0,
                    height: 12 * d,
                    interactive: !1,
                    sort_order: 1e3,
                    debug_name: "eye-1",
                  },
                  c.createElement(
                    "div",
                    {
                      className: ["ZeroBorderContainer"].join(" "),
                      style: { width: 240 },
                    },
                    c.createElement(
                      "div",
                      { className: "ETCLensSVG" },
                      " ",
                      l,
                      " ",
                    ),
                  ),
                ),
              ),
            )
          : c.createElement(
              u.$,
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
      let $ = class extends c.Component {
        constructor(e) {
          super(e),
            (this.m_eyeTrackingServerStatusHandle = null),
            (this.m_mailbox = new a._n()),
            (this.state = { nStatus: null }),
            this.m_mailbox.Init("eye_server_ui");
        }
        componentDidMount() {
          this.m_eyeTrackingServerStatusHandle =
            null === a.Ay || void 0 === a.Ay
              ? void 0
              : a.Ay.RegisterForEyeTrackingServerStatus(
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
          this.m_mailbox.SendMessage(a.pg, t);
        }
        render() {
          const e = (0, a.R$)() == a.OH.Overlay;
          let t;
          return (
            0 == this.state.nStatus
              ? (t = "uninitialized")
              : -1 == this.state.nStatus
                ? (t = "HMD not supported")
                : -2 == this.state.nStatus
                  ? (t = "Offline")
                  : 1 == this.state.nStatus && (t = "Online"),
            c.createElement(
              c.Fragment,
              null,
              c.createElement(
                "div",
                { className: "SettingsItem" },
                c.createElement(
                  "div",
                  { className: "Label" },
                  " ",
                  "EyeTrackingServerStatus",
                  " ",
                ),
                c.createElement(
                  "div",
                  { className: "OpenXRRuntimeValue" },
                  " ",
                  this.state.nStatus,
                  " ( ",
                  t,
                  " ) ",
                ),
              ),
              c.createElement(
                "div",
                { className: "SettingsItem" },
                c.createElement(
                  "div",
                  { className: "Label" },
                  " Stop Eye Tracking Server ",
                ),
                c.createElement(
                  u.$,
                  {
                    className: "ButtonControl",
                    onClick: this.stopEyeTrackingServer,
                  },
                  " Stop ",
                ),
              ),
              c.createElement(
                "div",
                { className: "SettingsItem" },
                c.createElement(
                  "div",
                  { className: "Label" },
                  " Start Eye Tracking Server ",
                ),
                c.createElement(
                  u.$,
                  {
                    className: "ButtonControl",
                    onClick: this.startEyeTrackingServer,
                  },
                  " Start ",
                ),
              ),
              c.createElement("div", null, "Eye Tracking Vis:"),
              c.createElement(
                "div",
                { className: "FlexRow" },
                c.createElement(
                  u.$,
                  {
                    className: "ButtonControl",
                    onClick: () => this.SetEyeTrackingVisualization("0"),
                  },
                  "Off",
                ),
                c.createElement(
                  u.$,
                  {
                    className: "ButtonControl",
                    onClick: () => this.SetEyeTrackingVisualization("1"),
                  },
                  "On",
                ),
                c.createElement(
                  u.$,
                  {
                    className: "ButtonControl",
                    onClick: () => this.SetEyeTrackingVisualization("2"),
                  },
                  "Point",
                ),
              ),
              e &&
                c.createElement(
                  c.Fragment,
                  null,
                  "\t",
                  c.createElement(K, {
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
        [i.o],
        $.prototype,
        "onEyeTrackingServerEnabledEventUpdate",
        null,
      ),
        (0, n.Cg)([i.o], $.prototype, "stopEyeTrackingServer", null),
        (0, n.Cg)([i.o], $.prototype, "startEyeTrackingServer", null),
        (0, n.Cg)([i.o], $.prototype, "doEyeTrackingCal", null),
        (0, n.Cg)([i.o], $.prototype, "SetEyeTrackingVisualization", null),
        ($ = (0, n.Cg)([l.PA], $));
      var J = r(2505),
        Z = r.n(J),
        Q = r(3696),
        X = r(7600);
      function Y() {
        const [e, t] = c.useState();
        return c.createElement(
          _.YO,
          { className: "SettingsItem" },
          c.createElement(
            u.$,
            {
              className: "ButtonControl Spanning",
              onClick: () =>
                (0, n.sH)(this, void 0, void 0, function* () {
                  t(null);
                  try {
                    (yield v.HR.ReloadSettingsSchema()).success
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
          e && c.createElement("div", { className: "Subsection Label" }, e),
        );
      }
      const ee = (0, l.PA)(() =>
          c.createElement(
            _.YO,
            { className: "SettingsItem" },
            c.createElement(_.xS, {
              label: "Auto-Show Dashboard",
              name: p.Bf,
              items: [
                { value: "", sLabel: "Default" },
                b.Sr.Separator,
                { value: p.wi, sLabel: "Steam (VRGamepadUI)" },
                b.Sr.Separator,
                { value: p.Sx, sLabel: "Recent Games (Old Dashboard)" },
                { value: p.dw, sLabel: "Now Playing" },
                { value: p.GO + ".1", sLabel: "Desktop 1" },
                { value: p.GO + ".2", sLabel: "Desktop 2" },
                b.Sr.Separator,
                { value: p.Wt, sLabel: "Settings" },
              ],
            }),
          ),
        ),
        te = (e) => {
          const [t, r] = c.useState(1),
            [n, a] = c.useState(1),
            [i, s] = c.useState(1),
            [o, l] = c.useState(1),
            [u, d] = c.useState(!1);
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(_.JA, {
              label: "Segmented Control",
              items: [
                { sLabel: "One", value: 1 },
                { sLabel: "Two", value: 2 },
              ],
              value: t,
              onChange: r,
            }),
            c.createElement(_.JA, {
              label: "Segmented Control",
              items: [
                { sLabel: "One", value: 1 },
                { sLabel: "Two", value: 2 },
                { sLabel: "Three", value: 3 },
              ],
              value: n,
              onChange: a,
            }),
            c.createElement(_.JA, {
              label: "Segmented Control",
              items: [
                { sLabel: "One", value: 1 },
                { sLabel: "Two", value: 2 },
                { sLabel: "Three", value: 3 },
                { sLabel: "Four", value: 4 },
              ],
              value: i,
              onChange: s,
            }),
            c.createElement(_.JA, {
              label: "Segmented Control",
              items: [
                { sLabel: "1", value: 1 },
                { sLabel: "2", value: 2 },
                { sLabel: "3", value: 3 },
                { sLabel: "4", value: 4 },
                { sLabel: "5", value: 5 },
              ],
              value: o,
              onChange: l,
            }),
            c.createElement("hr", null),
            c.createElement(_.Al, {
              label: "Standard Toggle",
              value: u,
              onChange: d,
            }),
            c.createElement(_.Al, {
              label: "Inverted Toggle",
              value: u,
              onChange: d,
              swapOnOff: !0,
            }),
          );
        },
        re = (e) => {
          const [t, r] = c.useState(1);
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(_.ym, {
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
          const [t, r] = c.useState(1);
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(_.xS, {
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
        ae = (0, l.PA)(() => {
          const e = "settingscontrolzoo",
            t = v.HR.routePageSection == e;
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(
              "div",
              { className: "SettingsItem Button" },
              c.createElement(
                u.$,
                {
                  className: "ButtonControl",
                  onClick: () => v.HR.setRoutePageSection(e),
                },
                "Zoo of Settings Controls",
              ),
            ),
            t &&
              c.createElement(
                _.bB,
                {
                  header: "Settings Controls",
                  onDismissRequested: () => v.HR.setRoutePageSection(null),
                },
                c.createElement(te, null),
                c.createElement("hr", null),
                c.createElement(re, null),
                c.createElement("hr", null),
                c.createElement(ne, null),
              ),
          );
        });
      function ie(e) {
        return c.createElement(
          c.Fragment,
          null,
          !1,
          !1,
          c.createElement(_.Al, {
            name: "/settings/dashboard/allowSteamOverlays",
            label: "Allow any types of Steam Overlays",
            requiresRestart: !0,
            onSubsection: c.createElement(
              c.Fragment,
              null,
              c.createElement(_.Al, {
                name: "/settings/dashboard/allowVRGamepadUI",
                label: "Allow VRGamepadUI",
                requiresRestart: !0,
              }),
              !1,
              c.createElement(_.Al, {
                name: "/settings/dashboard/steamMatchesHMDFramerate",
                label: "Steam matches HMD framerate",
              }),
            ),
          }),
        );
      }
      function se(e) {
        return c.createElement(
          c.Fragment,
          null,
          c.createElement(_.tE, {
            name: "/settings/dashboard/theaterModeBrightness",
            label: "Theater Room Brightness",
            min: 0,
            max: 1,
            valueStyleVariant: R.Te.OnHandle,
            detents: [0.5],
            renderValue: (e) => (100 * e).toFixed(0) + "%",
          }),
          c.createElement(_.tE, {
            name: "/settings/dashboard/theaterModeReflection",
            label: "Theater Reflections Brightness",
            min: 0,
            max: 1,
            valueStyleVariant: R.Te.OnHandle,
            detents: [0.5],
            renderValue: (e) => (100 * e).toFixed(0) + "%",
          }),
          c.createElement(_.tE, {
            name: "/settings/dashboard/theaterModeSharpness",
            label: "Theater Reflections Sharpness",
            min: 0,
            max: 1,
            valueStyleVariant: R.Te.OnHandle,
            detents: [0.5],
            renderValue: (e) => (100 * e).toFixed(0) + "%",
          }),
        );
      }
      function oe(e) {
        return c.createElement(_.Al, {
          name: p.Ec,
          label: (0, h.we)("#Settings_ControllerOverlayMagnetismEnabled"),
          onSubsection: c.createElement(
            c.Fragment,
            null,
            c.createElement(_.tE, {
              name: p.Pi,
              label: (0, h.we)(
                "#Settings_ControllerOverlayMagnetismLockDistance",
              ),
              min: 0,
              max: 0.2,
              valueStyleVariant: R.Te.OnHandle,
              detents: [0.05],
              renderValue: (e) => e.toFixed(2),
            }),
            c.createElement(_.tE, {
              name: p.tZ,
              label: (0, h.we)(
                "#Settings_ControllerOverlayMagnetismDeadZoneRatio",
              ),
              min: 0,
              max: 1,
              valueStyleVariant: R.Te.OnHandle,
              detents: [0.6],
              renderValue: (e) => e.toFixed(2),
            }),
          ),
        });
      }
      function le(e) {
        return c.createElement(_.Al, {
          name: p.x_,
          label: (0, h.we)("#Settings_ControllerOverlayFilteringEnabled"),
          onSubsection: c.createElement(
            c.Fragment,
            null,
            c.createElement(_.tE, {
              name: p.R_,
              label: (0, h.we)("#Settings_ControllerOverlayFilteringMinCutoff"),
              min: 0,
              max: 10,
              valueStyleVariant: R.Te.OnHandle,
              detents: [1],
              renderValue: (e) => e.toFixed(2),
            }),
            c.createElement(_.tE, {
              name: p.El,
              label: (0, h.we)("#Settings_ControllerOverlayFilteringBeta"),
              min: 0,
              max: 10,
              valueStyleVariant: R.Te.OnHandle,
              detents: [5],
              renderValue: (e) => e.toFixed(2),
            }),
            c.createElement(_.tE, {
              name: p.$Z,
              label: (0, h.we)(
                "#Settings_ControllerOverlayFilteringDerivCutoff",
              ),
              min: 0,
              max: 10,
              valueStyleVariant: R.Te.OnHandle,
              detents: [5],
              renderValue: (e) => e.toFixed(2),
            }),
          ),
        });
      }
      function ce() {
        return c.createElement(
          c.Fragment,
          null,
          c.createElement(
            "div",
            { className: "SettingsItem" },
            c.createElement(
              "div",
              { className: "Label Title" },
              "Mirrored Device Rendering",
            ),
          ),
          c.createElement(_.Al, {
            name: "/settings/internal/mirroredDeviceRenderControllers",
            label: "Render Controllers",
          }),
          c.createElement(_.Al, {
            name: "/settings/internal/mirroredDeviceRenderHmd",
            label: "Render HMD",
          }),
          c.createElement(_.Al, {
            name: "/settings/internal/mirroredDeviceRenderTrackers",
            label: "Render Trackers",
          }),
        );
      }
      function ue() {
        const [e, t] = c.useState(!1);
        return c.createElement(
          _.YO,
          { className: "SettingsItem" },
          c.createElement(
            u.$,
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
            c.createElement(X.cb, {
              errorStr: "Test Error in settings_internal render component",
            }),
        );
      }
      let de = class extends _.yO {
        constructor(e) {
          super(e),
            (this.m_mailbox = new a._n()),
            (this.m_softApStatus = ""),
            (this.m_softApSSID = ""),
            (this.m_softApPassword = ""),
            (this.m_softApBandStr = ""),
            (this.m_softApChannel = ""),
            (this.m_softApBandWarning = !1),
            this.m_mailbox.Init("internal_settings"),
            this.m_mailbox.RegisterHandler(
              "sap_status_update",
              this.onSapStatusUpdate,
            );
        }
        configSoftAP(e) {
          let t = { type: "configure_softap", enabled: e };
          this.m_mailbox.SendMessage(a.sk, t);
        }
        onSapStatusUpdate(e) {
          var t, r, n, a, i, s, o, l;
          (this.m_softApSSID = null),
            (this.m_softApPassword = null),
            (this.m_softApBandStr = null),
            (this.m_softApChannel = null);
          let c = {};
          try {
            c = JSON.parse(e.sOutput);
          } catch (e) {
            this.m_softApStatus = `Error: ${e.message}`;
          }
          (this.m_softApSSID =
            null === (t = null == c ? void 0 : c.status) || void 0 === t
              ? void 0
              : t.ssid),
            (this.m_softApPassword =
              null === (r = null == c ? void 0 : c.status) || void 0 === r
                ? void 0
                : r.password),
            (this.m_softApStatus =
              null === (n = null == c ? void 0 : c.status) || void 0 === n
                ? void 0
                : n.text),
            (this.m_softApBandStr = (
              null === (a = null == c ? void 0 : c.ap) || void 0 === a
                ? void 0
                : a.band
            )
              ? (null === (i = null == c ? void 0 : c.ap) || void 0 === i
                  ? void 0
                  : i.band) + " Ghz"
              : null === (s = null == c ? void 0 : c.ap) || void 0 === s
                ? void 0
                : s.band),
            (this.m_softApChannel =
              null === (o = null == c ? void 0 : c.ap) || void 0 === o
                ? void 0
                : o.channel),
            (this.m_softApBandWarning =
              5 ==
              (null === (l = null == c ? void 0 : c.ap) || void 0 === l
                ? void 0
                : l.band)),
            this.forceUpdate();
        }
        render() {
          if (!this.props.active) return null;
          6 == Q.H.roomSetupStep || Q.H.roomSetupStep;
          return c.createElement(
            c.Fragment,
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
            !1,
            !1,
            !1,
            !1,
            !1,
            !1,
            !1,
            c.createElement(_.xS, {
              name: "/settings/steamvr/overlayMips",
              label: "System UI Mipmaps",
              items: [
                { value: 0, sLabel: "Off" },
                { value: 1, sLabel: "Box" },
                { value: 2, sLabel: "2x Downsample [8x8]" },
              ],
            }),
            c.createElement(_.tE, {
              label: "System UI Mipbias",
              name: "/settings/steamvr/overlayMipbias",
              min: -0.5,
              max: 0,
              valueStyleVariant: R.Te.OnHandle,
              renderValue: (e) => e.toFixed(2),
            }),
            !1,
            !1,
            !1,
            !1,
            !1,
            this.schemaComponents,
            !1,
            !1,
            !1,
            c.createElement(se, null),
            c.createElement(oe, null),
            c.createElement(le, null),
            c.createElement("hr", null),
            c.createElement(ce, null),
            c.createElement("hr", null),
            c.createElement(_.tE, {
              name: "/settings/dashboard/verticalOffsetCm_2",
              label: "Dashboard Vertical Offset (cm)",
              min: -25,
              max: 25,
              valueStyleVariant: R.Te.OnHandle,
              detents: [0],
              renderValue: (e) => e.toFixed(0) + " cm",
              step: 1,
            }),
            c.createElement(_.Al, {
              label: "Enable Per-App Refresh Rate",
              name: "/settings/internal/enablePerAppFPS",
            }),
            c.createElement(_.Al, {
              label: "Allow Dashboard auto-launch with SteamVR Home",
              name: "/settings/dashboard/allowDashboardAutoLaunchWithSteamVRHome",
            }),
            c.createElement(_.Al, {
              label: "Skip the Dashboard BG fade during SteamVR Home",
              name: "/settings/dashboard/omitDashboardFadeWithSteamVRHome",
            }),
            c.createElement(_.Al, {
              label: "Haptics on Button Exit",
              name: "/settings/steamvr/noEdgeExitHaptics",
              swapOnOff: !0,
            }),
            c.createElement(_.Al, {
              label: "Force Welcome in Quicklaunch",
              name: "/settings/dashboard/forceWelcomeScreen",
            }),
            !1,
            !1,
            c.createElement(ie, null),
            c.createElement(ee, null),
            c.createElement(ue, null),
            c.createElement(Y, null),
            c.createElement(ae, null),
            this.makeResetToDefaultButton(),
          );
        }
      };
      (de.Name = "internal_settings"),
        (0, n.Cg)([i.o], de.prototype, "configSoftAP", null),
        (0, n.Cg)([i.o], de.prototype, "onSapStatusUpdate", null),
        (de = (0, n.Cg)([l.PA], de));
      var me = r(9118);
      let pe = class extends c.Component {
        constructor(e) {
          super(e),
            (this.m_refSelectedButton = c.createRef()),
            (this.state = { bShowModal: !1, rBackgroundUGCItems: [] });
        }
        updateUGCItems() {
          v.HR.GetSettingsUGC().then((e) => {
            null != e.items && this.setState({ rBackgroundUGCItems: e.items });
          });
        }
        componentDidMount() {
          this.updateUGCItems(),
            (this.m_workshopStateChangedCanaryDisposer = (0, o.observe)(
              v.HR,
              "workshopStateChangedCanary",
              this.updateUGCItems,
            ));
        }
        componentWillUnmount() {
          this.m_workshopStateChangedCanaryDisposer(),
            (this.m_workshopStateChangedCanaryDisposer = null);
        }
        setBackground(e) {
          v.HR.systemInfo &&
            e === v.HR.systemInfo.default_background &&
            (e = ""),
            v.HR.SetSettingsValue("/settings/steamvr/background", e),
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
          const e = v.HR.settings.get("/settings/steamvr/background");
          return e || v.HR.systemInfo.default_background;
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
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(
              _.YO,
              {
                className: "SettingsItem Background",
                title: (0, h.we)("#Settings_Appearance_BackgroundDesc"),
              },
              c.createElement(
                "div",
                { className: "Label" },
                (0, h.we)("#Settings_Appearance_Background"),
              ),
              c.createElement(
                u.$,
                {
                  className: (0, g.FH)("ButtonControl", ["Background", !!n]),
                  style: {
                    "--background-url-value": n ? 'url("' + n + '")' : null,
                  },
                  onClick: this.showModal,
                },
                !n && (0, h.we)("#Settings_Appearance_Background_Select"),
              ),
            ),
            this.state.bShowModal &&
              c.createElement(
                _.bB,
                {
                  onDismissRequested: this.hideModal,
                  className: "Backgrounds",
                  header: (0, h.we)("#Settings_Appearance_Background"),
                  subheader: me.W.IsSteamAvailable
                    ? null
                    : (0, h.we)("#Settings_Appearance_Background_NoSteam"),
                },
                c.createElement(
                  "div",
                  { className: "BackgroundsGrid" },
                  t.map((t, r) =>
                    c.createElement(u.$, {
                      className: (0, g.FH)("ButtonControl", "Background", [
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
      (0, n.Cg)([i.o], pe.prototype, "updateUGCItems", null),
        (0, n.Cg)([i.o], pe.prototype, "setBackground", null),
        (0, n.Cg)([i.o], pe.prototype, "hideModal", null),
        (0, n.Cg)([i.o], pe.prototype, "showModal", null),
        (0, n.Cg)([o.computed], pe.prototype, "currentBackgroundPath", null),
        (pe = (0, n.Cg)([l.PA], pe));
      class he extends c.Component {
        constructor() {
          super(...arguments),
            (this.m_sUniqueIdForForceBoundsVisible = Math.random().toString());
        }
        componentDidMount() {
          v.HR.SetDashboardForceBoundsVisible(
            p.Wt,
            this.m_sUniqueIdForForceBoundsVisible,
            !0,
          );
        }
        componentWillUnmount() {
          v.HR.SetDashboardForceBoundsVisible(
            p.Wt,
            this.m_sUniqueIdForForceBoundsVisible,
            !1,
          );
        }
        render() {
          return null;
        }
      }
      function ge() {
        const [e, t] = c.useState({ x: 1, y: 1 }),
          r = c.useCallback(() => {
            try {
              t(VRHTML.VRChaperone.GetPlayAreaSize());
            } catch (e) {
              console.log(e);
            }
          }, []);
        return (
          c.useEffect(() => {
            const e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.RegisterForChaperoneChangedEvents(r);
            return null == e ? void 0 : e.unregister;
          }, [r]),
          c.createElement(
            "div",
            { className: "SettingsItem" },
            c.createElement(
              "div",
              { className: "Label" },
              (0, h.we)("#Settings_PlayArea_Size"),
            ),
            c.createElement(
              "div",
              { className: "" },
              `${e.x.toFixed(2)}m x ${e.y.toFixed(2)}m`,
            ),
          )
        );
      }
      let ve = class extends _.yO {
        constructor(e) {
          super(e);
        }
        render() {
          var e;
          if (!this.props.active) return null;
          const t = v.HR.settings.get("/settings/steamvr/background"),
            r = !!t && !t.startsWith("#"),
            n =
              null !== (e = v.HR.settings.get(p.Vv)) && void 0 !== e ? e : 0.7;
          let a;
          return (
            (a =
              n < 0.5
                ? (0, h.we)("#Settings_Chaperone_SuitableForSmall")
                : n < 1
                  ? (0, h.we)("#Settings_Chaperone_SuitableForMedium")
                  : (0, h.we)("#Settings_Chaperone_SuitableForLarge")),
            c.createElement(
              c.Fragment,
              null,
              c.createElement(he, null),
              c.createElement(ge, null),
              c.createElement(_.xS, {
                name: "/settings/collisionBounds/CollisionBoundsStyle",
                label: (0, h.we)("#Settings_Chaperone_Style"),
                items: [
                  {
                    value: 0,
                    sLabel: (0, h.we)("#Settings_Chaperone_Style_0"),
                  },
                  {
                    value: 1,
                    sLabel: (0, h.we)("#Settings_Chaperone_Style_1"),
                  },
                  {
                    value: 3,
                    sLabel: (0, h.we)("#Settings_Chaperone_Style_3"),
                  },
                  {
                    value: 2,
                    sLabel: (0, h.we)("#Settings_Chaperone_Style_2"),
                  },
                  {
                    value: 4,
                    sLabel: (0, h.we)("#Settings_Chaperone_Style_4"),
                  },
                ],
                subsection: c.createElement(
                  c.Fragment,
                  null,
                  c.createElement(_.RM, {
                    label: (0, h.we)("#Settings_Chaperone_Color"),
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
                  c.createElement(_.Al, {
                    name: "/settings/collisionBounds/CollisionBoundsGroundPerimeterOn",
                    label: (0, h.we)(
                      "#Settings_Appearance_Chaperone_CollisionBoundsGroundPerimeterOn",
                    ),
                    title: (0, h.we)(
                      "#Settings_Appearance_Chaperone_CollisionBoundsGroundPerimeterOnDesc",
                    ),
                  }),
                  c.createElement(_.tE, {
                    min: 0.1,
                    max: 3,
                    detents: [2.4],
                    name: "/settings/collisionBounds/CollisionBoundsWallHeight",
                    label: (0, h.we)("#Settings_Chaperone_WallHeight"),
                    renderValue: (e) => e.toFixed(2),
                    valueStyleVariant: R.Te.OnHandle,
                  }),
                  c.createElement(_.tE, {
                    min: 0.2,
                    max: 1.4,
                    detents: [0.7],
                    name: p.Vv,
                    label: (0, h.we)("#Settings_Chaperone_ActivationDistance"),
                    renderValue: (e) => e.toFixed(2),
                    valueStyleVariant: R.Te.OnHandle,
                  }),
                  c.createElement(
                    "div",
                    { className: "SettingsItemValueLabel" },
                    a,
                  ),
                ),
              }),
              c.createElement(_.RM, {
                label: (0, h.we)("#Settings_Appearance_PlayArea_FloorColor"),
                name: "/settings/steamvr/playAreaColor",
              }),
              c.createElement(pe, null),
              r &&
                c.createElement(_.Al, {
                  name: "/settings/steamvr/backgroundUseDomeProjection",
                  label: (0, h.we)("#Settings_Appearance_UseDomeProjection"),
                  title: (0, h.we)(
                    "#Settings_Appearance_UseDomeProjectionDesc",
                  ),
                  onSubsection: c.createElement(
                    c.Fragment,
                    null,
                    c.createElement(_.tE, {
                      min: 1,
                      max: 10,
                      detents: [1.6],
                      name: p.aD,
                      label: (0, h.we)("#Settings_Appearance_DomeCameraHeight"),
                      title: (0, h.we)(
                        "#Settings_Appearance_DomeCameraHeightDesc",
                      ),
                      exponent: 2,
                    }),
                    c.createElement(_.tE, {
                      min: 2,
                      max: 250,
                      specialMaxValue: 0,
                      name: p.WS,
                      label: (0, h.we)("#Settings_Appearance_DomeCameraRadius"),
                      title: (0, h.we)(
                        "#Settings_Appearance_DomeCameraRadiusDesc",
                      ),
                      exponent: 5,
                    }),
                    c.createElement(
                      _.YO,
                      { className: "SettingsItem" },
                      c.createElement(
                        u.$,
                        {
                          className: "ButtonControl",
                          onClick: () => v.HR.ResetSettingsValues(p.aD, p.WS),
                        },
                        (0, h.we)(
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
      var _e;
      (ve.Name = "playarea_settings"), (ve = (0, n.Cg)([l.PA], ve));
      class be {
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
            (0, o.makeObservable)(this);
        }
        prettyName(e) {
          return be.driverPrettyNames[e] || e;
        }
        unBlock(e) {
          v.HR.SetRestartRequired(),
            (this.driverList[
              this.driverNameToIdMap.get(e)
            ].blocked_by_safe_mode = !1);
          let t = { driver: e };
          return Z().post("/drivers/unblock", t);
        }
        setEnabled(e, t) {
          v.HR.SetRestartRequired(),
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
      (be.driverPrettyNames = {
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
        (0, n.Cg)([o.observable], be.prototype, "driverList", void 0),
        (0, n.Cg)([o.computed], be.prototype, "visibleDriverList", null),
        (0, n.Cg)([o.computed], be.prototype, "numBlockedDrivers", null),
        (0, n.Cg)([o.computed], be.prototype, "numDisabledDrivers", null),
        (0, n.Cg)(
          [o.computed],
          be.prototype,
          "numUserManuallyDisenabledDrivers",
          null,
        );
      const Se = new be(),
        ye = (0, l.PA)(() =>
          c.createElement(
            u.$,
            {
              className: "ButtonControl",
              title: (0, h.we)("#Settings_Drivers_UnblockAllTip"),
              onClick: () =>
                (0, n.sH)(void 0, void 0, void 0, function* () {
                  const e = Se.driverList
                    .filter((e) => e.blocked_by_safe_mode)
                    .map((e) => e.manifest.name);
                  for (let t = 0; t < e.length; ++t) yield Se.unBlock(e[t]);
                }),
            },
            (0, h.we)("#Settings_Drivers_UnblockAll"),
          ),
        );
      function fe(e) {
        return e.blocked
          ? c.createElement(
              _.YO,
              { className: "SettingsItem", title: e.title },
              c.createElement("div", { className: "Label" }, e.label),
              c.createElement(
                u.$,
                {
                  className: "ButtonControl",
                  title: e.title,
                  onClick: e.onUnblock,
                },
                (0, h.we)("#Settings_Drivers_Unblock"),
              ),
            )
          : c.createElement(_.Al, {
              label: e.label,
              title: e.title,
              onChange: e.onToggleEnable,
              value: e.enabled,
            });
      }
      const Re = (0, l.PA)(() =>
        c.createElement(
          c.Fragment,
          null,
          Se.visibleDriverList.map((e) =>
            c.createElement(fe, {
              key: e.manifest.name,
              label: Se.prettyName(e.manifest.name),
              title: e.manifest.name,
              blocked: e.blocked_by_safe_mode,
              enabled: e.enabled,
              onToggleEnable: (t) => {
                return (r = e.manifest.name), (n = t), void Se.setEnabled(r, n);
                var r, n;
              },
              onUnblock: () => {
                return (t = e.manifest.name), void Se.unBlock(t);
                var t;
              },
            }),
          ),
        ),
      );
      let we = (_e = class extends c.Component {
        constructor(e) {
          super(e);
        }
        render() {
          const e = Se.numBlockedDrivers,
            t = Se.numDisabledDrivers,
            r =
              v.HR.showAdvancedSettings ||
              e ||
              Se.numUserManuallyDisenabledDrivers,
            n = v.HR.routePageSection == _e.PAGE_SECTION;
          return c.createElement(
            c.Fragment,
            null,
            !!r &&
              c.createElement(
                "div",
                { className: "SettingsItem Button" },
                c.createElement(
                  u.$,
                  {
                    className: "ButtonControl",
                    onClick: () => v.HR.setRoutePageSection(_e.PAGE_SECTION),
                  },
                  (0, h.we)("#Settings_Drivers_ShowDriverManagerUI"),
                  0 != e &&
                    c.createElement(
                      "div",
                      { className: "Badge DriversBlocked" },
                      (0, h.we)("#Settings_Drivers_Number_Blocked", e),
                    ),
                  0 == e &&
                    0 != t &&
                    c.createElement(
                      "div",
                      { className: "Badge DriversDisabled" },
                      (0, h.we)("#Settings_Drivers_Number_Disabled", t),
                    ),
                ),
              ),
            n &&
              Se.driverList &&
              c.createElement(
                _.bB,
                {
                  header: (0, h.we)("#Settings_Drivers_Header"),
                  subheader:
                    0 == e
                      ? null
                      : c.createElement(
                          "div",
                          { className: "BlockedSubheader" },
                          c.createElement(
                            "div",
                            { className: "Label" },
                            (0, h.we)("#Settings_Drivers_SomeBlocked"),
                          ),
                          c.createElement(ye, null),
                        ),
                  onDismissRequested: () => v.HR.setRoutePageSection(null),
                },
                c.createElement(Re, null),
              ),
          );
        }
      });
      (we.PAGE_SECTION = "drivermanager"), (we = _e = (0, n.Cg)([l.PA], we));
      let Ce = class extends c.Component {
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
          const e = !!v.HR.apps,
            t = e
              ? v.HR.apps.filter(
                  (e) =>
                    e.is_dashboard_overlay && e.key != p.Eo && !e.is_internal,
                )
              : [],
            r = t.filter((e) => e.is_autolaunch);
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(
              _.YO,
              {
                className: "SettingsItem",
                title: e ? null : (0, h.we)("#Settings_Loading"),
              },
              c.createElement(
                u.$,
                { className: "ButtonControl", enabled: e, onClick: this.show },
                (0, h.we)("#Settings_ChooseStartupOverlayApps"),
                e &&
                  c.createElement(
                    "div",
                    { className: "Badge" },
                    (0, h.we)("#Settings_Number_Selected", r.length),
                  ),
              ),
            ),
            this.state.bShowingModal &&
              c.createElement(
                _.bB,
                {
                  className: "OverlayAutoLaunchModal",
                  header: (0, h.we)("#Settings_StartTheseOverlayAppsOnLaunch"),
                  onDismissRequested: this.hide,
                },
                t.map((e) =>
                  c.createElement(_.Al, {
                    key: e.key,
                    label: e.name,
                    value: e.is_autolaunch,
                    onChange: (t) =>
                      v.HR.SetAppSettings(e.key, { is_autolaunch: t }),
                  }),
                ),
                !t.length &&
                  c.createElement(
                    "div",
                    { className: "ModalPlaceholder" },
                    (0, h.we)(
                      "#Settings_ChooseStartupOverlayApps_NoOverlayAppsInstalled",
                    ),
                  ),
              ),
          );
        }
      };
      (0, n.Cg)([i.o], Ce.prototype, "show", null),
        (0, n.Cg)([i.o], Ce.prototype, "hide", null),
        (Ce = (0, n.Cg)([l.PA], Ce));
      let Me = class extends _.yO {
        constructor(e) {
          super(e);
        }
        render() {
          return this.props.active
            ? c.createElement(
                c.Fragment,
                null,
                c.createElement(Ce, null),
                c.createElement(we, null),
                c.createElement("hr", null),
                this.schemaComponents,
                this.makeResetToDefaultButton(),
              )
            : null;
        }
      };
      (Me.Name = "startupshutdown_settings"), (Me = (0, n.Cg)([l.PA], Me));
      var Te,
        Ee = r(4963),
        Ve = r(795);
      const De = "vr_settings_top_center";
      class Be extends c.Component {
        constructor(e) {
          super(e),
            (this.state = {
              bRestartAnimation: !1,
              bShowSteamVRRestartRequired: !1,
              bShowAppRestartRequired: !1,
            });
        }
        get enabled() {
          const e = (0, a.R$)() == a.OH.Overlay;
          return this.props.standalonePanel == e;
        }
        onExitApp() {
          null === a.Ay || void 0 === a.Ay || a.Ay.QuitSceneApp();
        }
        onRestartSteamVR() {
          a.Ay
            ? a.Ay.RestartSteamVR(!1)
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
            ((v.HR.onRestartRequired = this.onRestartRequired),
            (v.HR.onAppRestartRequired = this.onAppRestartRequired));
        }
        componentWillUnmount() {
          this.enabled &&
            (v.HR.onRestartRequired == this.onRestartRequired &&
              (v.HR.onRestartRequired = null),
            v.HR.onAppRestartRequired == this.onAppRestartRequired &&
              (v.HR.onAppRestartRequired = null));
        }
        render() {
          if (!this.enabled) return null;
          let e = null;
          return (
            this.state.bShowSteamVRRestartRequired
              ? (e = c.createElement(
                  u.W,
                  {
                    className:
                      "SettingsRestartRequiredBanner Shown" +
                      (this.state.bRestartAnimation ? " ReShimmer" : ""),
                  },
                  c.createElement(
                    "div",
                    { className: "Label" },
                    (0, h.we)("#Settings_MustRestart_Description"),
                  ),
                  c.createElement(
                    u.$,
                    {
                      className: "ButtonControl",
                      onClick: this.onRestartSteamVR,
                    },
                    (0, h.we)("#Settings_MustRestart_RestartSteamVR_Button"),
                  ),
                ))
              : this.state.bShowAppRestartRequired
                ? (e = c.createElement(
                    u.W,
                    {
                      className:
                        "SettingsRestartRequiredBanner Shown" +
                        (this.state.bRestartAnimation ? " ReShimmer" : ""),
                    },
                    c.createElement(
                      "div",
                      { className: "Label" },
                      (0, h.we)("#Settings_MustQuitApp_Description"),
                    ),
                    c.createElement(
                      u.$,
                      { className: "ButtonControl", onClick: this.onExitApp },
                      (0, h.we)("#Settings_MustQuitApp_QuitCurrentGame_Button"),
                    ),
                  ))
                : (null === a.Ay || void 0 === a.Ay ? void 0 : a.Ay.HasHMD()) ||
                  (e = c.createElement(
                    u.W,
                    {
                      className:
                        "SettingsRestartRequiredBanner Shown" +
                        (this.state.bRestartAnimation ? " ReShimmer" : ""),
                    },
                    c.createElement(
                      "div",
                      { className: "Label" },
                      (0, h.we)("#Settings_AdditionalSettingsAvailable"),
                    ),
                  )),
            this.props.standalonePanel
              ? null === e
                ? null
                : c.createElement(
                    a.dL,
                    { parent_id: De, translation: { y: 0.2, z: -0.05 } },
                    c.createElement(
                      a.Zk,
                      {
                        debug_name: "settingsrestartbanner",
                        curvature_origin_id: p.ge,
                        origin: a.Oi.BottomCenter,
                        interactive: !0,
                        meters_per_pixel: p.iZ,
                        reflect: 0.1,
                      },
                      e,
                    ),
                  )
              : e
          );
        }
      }
      (0, n.Cg)([i.o], Be.prototype, "onExitApp", null),
        (0, n.Cg)([i.o], Be.prototype, "onRestartSteamVR", null),
        (0, n.Cg)([i.o], Be.prototype, "onRestartRequired", null),
        (0, n.Cg)([i.o], Be.prototype, "onAppRestartRequired", null);
      let Ae = (Te = class extends c.Component {
        constructor(e) {
          super(e),
            (this.m_refSettingsPageContainer = c.createRef()),
            (this.m_routeObservingAutorunDisposer = null),
            (this.state = { sActiveSettingSection: null });
        }
        componentDidMount() {
          (this.m_routeObservingAutorunDisposer = (0, o.autorun)(() => {
            v.HR.routePage
              ? this.setState({ sActiveSettingSection: v.HR.routePage })
              : v.HR.setRoutePage(
                  v.HR.settingsSchema.filter(Te.shouldShowSection)[0]
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
          const e = !v.HR.connected || !v.HR.settingsSchema;
          let t = null;
          e
            ? "desktop-window" == this.props.env &&
              (t = c.createElement(
                "div",
                { className: "Label" },
                (0, h.we)("#Settings_Loading"),
              ))
            : (t = this.renderSettingsPanelContents());
          let r = null;
          return (
            (r =
              "frame-page" == this.props.env
                ? c.createElement(
                    Ve.P9,
                    { summonOverlayKey: p.Wt, ref: this.props.pageRef },
                    t && c.createElement(Be, { standalonePanel: !0 }),
                    t &&
                      c.createElement(
                        s.L_,
                        {
                          visible: !0,
                          debugName: "settings",
                          additionalClassNames: "Settings",
                        },
                        c.createElement(a.Ci, {
                          id: De,
                          location: a.Oi.TopCenter,
                        }),
                        t,
                      ),
                  )
                : t),
            c.createElement(
              "div",
              {
                className: (0, g.FH)(
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
          const e = v.HR.settingsSchema.filter(Te.shouldShowSection);
          return c.createElement(
            u.W,
            { className: "SettingsMainPanel" },
            c.createElement(Be, { standalonePanel: !1 }),
            c.createElement(
              "div",
              { className: "SettingsSidebarPageModalContainer" },
              c.createElement(
                d.vw,
                { className: "SettingsSidebarPageContainer" },
                c.createElement(
                  "div",
                  { className: (0, g.FH)("SettingsSidebar") },
                  e.map(this.renderSectionButton),
                  c.createElement("div", { className: "Spacer" }),
                  c.createElement(
                    "div",
                    {
                      className: (0, g.FH)(
                        "Bottom",
                        "AdvancedSettingsToggle",
                        ["Fadable", !v.HR.showAdvancedSettings],
                        ["Active", v.HR.showAdvancedSettings],
                      ),
                    },
                    c.createElement(_.Al, {
                      label: (0, h.we)("#Settings_AdvancedSettings"),
                      value: v.HR.showAdvancedSettings,
                      onChange: (e) => (v.HR.showAdvancedSettings = e),
                      onLabel: (0, h.we)("#Settings_Show"),
                      offLabel: (0, h.we)("#Settings_Hide"),
                    }),
                  ),
                ),
                c.createElement(
                  m.M,
                  {
                    scrollDirection: m.D.Vertical,
                    alwaysShowScrollbars: !0,
                    className: (0, g.FH)("SettingsPageContainer"),
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
            c.createElement(
              u.$,
              {
                key: e.title,
                className: t.join(" "),
                onClick: () => v.HR.setRoutePage(e.controller),
                releaseSoundEffect: Ee.j.PagedSettingsNavigation,
              },
              c.createElement(
                "div",
                { className: "Label" },
                (0, h.we)(e.title),
              ),
            )
          );
        }
        renderSectionPage(e) {
          const t = e.controller ? e.controller : "generic",
            r = this.state.sActiveSettingSection === e.controller,
            n =
              [S, Me, ve, q.a5, D, j, k, P, G, de, B.$].find(
                (e) => e.Name === t,
              ) || _.yO;
          return c.createElement(n, { key: e.title, section: e, active: r });
        }
        static shouldShowSection(e) {
          if (
            e.internal_only &&
            !v.HR.showInternalSettings &&
            !v.HR.settings.get(Te.k_sShowInternalSettings)
          )
            return !1;
          if (
            e.controller == P.Name &&
            (0, a.R$)() == a.OH.Overlay &&
            !v.HR.settings.get(Te.k_sForceShowOpenXRSettings)
          )
            return !1;
          if (
            !e.show_without_hmd &&
            !(null === a.Ay || void 0 === a.Ay ? void 0 : a.Ay.HasHMD())
          )
            return !1;
          if (!e.show_without_hmd && e.driver)
            try {
              const t = a.Ay.VRProperties.GetStringProperty(
                "/user/head",
                a.fD.ActualTrackingSystemName_String,
              );
              if (e.driver !== t) return !1;
            } catch (e) {}
          if (e.desktop_only && (0, a.R$)() == a.OH.Overlay) return !1;
          let t =
            e.controller == k.Name &&
            v.HR.settings.get(Te.k_sShowDashboardSettings);
          if (e.advanced_only && !v.HR.showAdvancedSettings && !t) return !1;
          if (e.controller == D.Name)
            try {
              if (
                !(null === a.Ay || void 0 === a.Ay
                  ? void 0
                  : a.Ay.VRProperties.GetBoolProperty(
                      "/user/head",
                      a.fD.HasCamera_Bool,
                    ))
              )
                return !1;
            } catch (e) {
              return !1;
            }
          if ("internet_settings" == e.controller) return !1;
          if (e.controller == S.Name) {
            if (!(v.HR.systemInfo && v.HR.systemInfo.os_type >= 0)) return !1;
          }
          return !(!a.Ay && e.web_helper_only);
        }
        ListenForHomeEnabledChanges() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            if ((0, a.R$)() != a.OH.Overlay) return;
            let e = yield v.HR.GetSettingsValue(p.qf);
            a.Ay &&
              (0, o.autorun)(() => {
                let t = v.HR.settings.get(p.qf);
                void 0 !== t &&
                  t != e &&
                  (t && !a.Ay.VRApplications.GetSceneApplicationKey()
                    ? a.Ay.VRApplications.LaunchApplication(p.np)
                    : t ||
                      a.Ay.VRApplications.GetSceneApplicationKey() != p.np ||
                      a.Ay.QuitSceneApp(),
                  (e = t));
              });
          });
        }
      });
      (Ae.k_sForceShowOpenXRSettings =
        "/settings/steamvr/forceShowOpenXRSettings"),
        (Ae.k_sShowInternalSettings = "/settings/steamvr/showInternalSettings"),
        (Ae.k_sShowDashboardSettings =
          "/settings/steamvr/showDashboardSettings"),
        (0, n.Cg)([i.o], Ae.prototype, "renderSectionButton", null),
        (0, n.Cg)([i.o], Ae.prototype, "renderSectionPage", null),
        (Ae = Te = (0, n.Cg)([l.PA], Ae));
    },
    2928: (e, t, r) => {
      "use strict";
      r.d(t, { $: () => U, o: () => N });
      var n = r(1635),
        a = r(6540),
        i = r(3236),
        s = r(1370),
        o = r(3714),
        l = r(1333),
        c = r(427),
        u = r(6138),
        d = r(6090),
        m = r(9118),
        p = r(5802),
        h = r(7813),
        g = r(6646),
        v = r(1139);
      let _ = class extends a.Component {
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
          let i = null;
          return (
            this.IsConnected()
              ? this.IsIdentifiable() ||
                (i = (0, o.we)(
                  "#Settings_ViveTracker_Identify_NotIdentifiable",
                ))
              : (i = (0, o.we)("#Settings_ViveTracker_Identify_NotConnected")),
            a.createElement(
              c.YO,
              { className: "SettingsItem TrackerEntry" },
              a.createElement(
                "div",
                { className: "Label", title: t },
                a.createElement("span", null, r),
                a.createElement("div", {
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
              a.createElement(
                "div",
                { className: (0, v.FH)("SubsectionStem") },
                a.createElement(
                  c.YO,
                  { title: i },
                  a.createElement(
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
              a.createElement(
                "div",
                { className: "Subsection WithStem" },
                a.createElement(c.xS, {
                  label: (0, o.we)("#Settings_ViveTracker_Role"),
                  items: this.props.validTrackerRoles.map((e) => ({
                    value: e,
                    sLabel: (0, o.we)("#" + e),
                  })),
                  value: this.trackerConfig.role,
                  onChange: this.OnTrackerRoleChanged,
                }),
                e.length > 0 &&
                  a.createElement(c.xS, {
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
        (0, n.Cg)([i.o], _.prototype, "OnTrackerRoleChanged", null),
        (0, n.Cg)([i.o], _.prototype, "OnControllerRoleChanged", null),
        (0, n.Cg)([i.o], _.prototype, "BuzzTracker", null),
        (0, n.Cg)([h.computed], _.prototype, "deviceInfo", null),
        (_ = (0, n.Cg)([s.PA], _));
      let b = class extends a.Component {
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
                a.createElement(_, {
                  key: r,
                  trackerPath: e.device_path_string,
                  validTrackerRoles: t.valid_roles,
                }),
              )),
            a.createElement("div", { className: "TrackerEditorModal" }, e)
          );
        }
      };
      b = (0, n.Cg)([s.PA], b);
      class S extends a.Component {
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
            let i = n.x * e + e,
              s = -n.y * e + e;
            t.push(
              a.createElement("polyline", {
                key: r++,
                points: "60,60 " + i.toFixed(0) + "," + s.toFixed(0),
                strokeWidth: "0.1rem",
                fill: "transparent",
              }),
            );
          }
          let n = this.ComputeCalibration(),
            i = null;
          return (
            (i = n
              ? (0, o.we)("#Settings_General_InviteMoreSamples", n.toFixed(2))
              : (0, o.we)(
                  "#Settings_General_NotEnoughSamples",
                  5 - this.m_edgeValues.length,
                )),
            a.createElement(
              c.bB,
              {
                onDismissRequested: this.props.fnCloseCalibrator,
                header: (0, o.we)("#Settings_General_CalibrateThumbstick"),
                footer: a.createElement(
                  "div",
                  { className: "SettingsItem ButtonRow" },
                  a.createElement(
                    u.$,
                    {
                      key: "cancel",
                      className: "ButtonControl",
                      onClick: this.OnCancel,
                    },
                    (0, o.we)("#Settings_General_Cancel"),
                  ),
                  a.createElement("div", { className: "Spacer" }),
                  a.createElement(
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
              a.createElement(
                "div",
                { className: "ThumbstickCalibrateBody" },
                a.createElement(
                  "div",
                  { className: "ThumbstickContainer" },
                  a.createElement(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: [0, 0, 120, 120].join(" "),
                    },
                    a.createElement("circle", {
                      cx: e,
                      cy: e,
                      r: e,
                      strokeWidth: "0.1rem",
                    }),
                    t,
                  ),
                ),
                a.createElement(
                  "div",
                  { className: "Label ThumbstickAngle" },
                  i,
                ),
              ),
            )
          );
        }
      }
      (0, n.Cg)([i.o], S.prototype, "OnUpdateComponentStates", null),
        (0, n.Cg)([i.o], S.prototype, "OnCancel", null),
        (0, n.Cg)([i.o], S.prototype, "OnConfirm", null);
      class y extends a.Component {
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
              a.createElement(
                "div",
                { className: "Label LegacyDebuggerGroup" },
                "Pressed:",
              ),
            ),
            e.pressed)
          )
            for (let r of e.pressed)
              t.push(
                a.createElement(
                  "div",
                  { className: "Label LegacyDebuggerButtonName" },
                  r,
                ),
              );
          else
            t.push(
              a.createElement(
                "div",
                { className: "Label LegacyDebuggerButtonName" },
                "None",
              ),
            );
          if (
            (t.push(
              a.createElement(
                "div",
                { className: "Label LegacyDebuggerGroup" },
                "Touched:",
              ),
            ),
            e.touched)
          )
            for (let r of e.touched)
              t.push(
                a.createElement(
                  "div",
                  { className: "Label LegacyDebuggerButtonName" },
                  r,
                ),
              );
          else
            t.push(
              a.createElement(
                "div",
                { className: "Label LegacyDebuggerButtonName" },
                "None",
              ),
            );
          if (
            (t.push(
              a.createElement(
                "div",
                { className: "Label LegacyDebuggerGroup" },
                "Supported:",
              ),
            ),
            e.supported_buttons)
          )
            for (let r of e.supported_buttons)
              t.push(
                a.createElement(
                  "div",
                  { className: "Label LegacyDebuggerButtonName" },
                  r,
                ),
              );
          else
            t.push(
              a.createElement(
                "div",
                { className: "Label LegacyDebuggerButtonName" },
                "None",
              ),
            );
          t.push(
            a.createElement(
              "div",
              { className: "Label LegacyDebuggerGroup" },
              "Axis:",
            ),
          );
          for (let r of e.axis)
            t.push(
              a.createElement(
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
            ? a.createElement(
                "div",
                { className: "FlexRow" },
                a.createElement(
                  "div",
                  { className: "FlexColumn LegacyDebuggerController" },
                  a.createElement("div", { className: "Label" }, "Left"),
                  this.renderController(this.state.currentState.left),
                ),
                a.createElement(
                  "div",
                  { className: "FlexColumn LegacyDebuggerController" },
                  a.createElement("div", { className: "Label" }, "Right"),
                  this.renderController(this.state.currentState.right),
                ),
                a.createElement(
                  "div",
                  { className: "FlexColumn LegacyDebuggerController" },
                  a.createElement("div", { className: "Label" }, "HMD"),
                  this.renderController(this.state.currentState.hmd),
                ),
              )
            : a.createElement(
                "div",
                { className: "Label" },
                (0, o.we)("#LegacyDebugger_NoApp"),
              );
        }
      }
      (0, n.Cg)([i.o], y.prototype, "OnLegacyInputFrame", null);
      class f extends a.Component {
        constructor(e) {
          super(e);
        }
        render() {
          return a.createElement(
            "div",
            { className: "FlexRowWithWrap" },
            a.createElement(
              "div",
              { className: "FlexFullWidthRowCentered LegacyDebuggerWrapper" },
              a.createElement(y, null),
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
      class M extends a.Component {
        constructor(e) {
          super(e),
            (this.m_containerRef = null),
            (this.m_nameRef = null),
            (this.m_svgRef = null),
            (this.m_containerRef = a.createRef()),
            (this.m_nameRef = a.createRef()),
            (this.m_svgRef = a.createRef()),
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
            a.createElement(
              "div",
              { className: "VisualizerButtonContainer" },
              a.createElement("div", { className: "VisualizerButtonBase" + e }),
            )
          );
        }
        renderBar(e, t, r) {
          let n = { width: String(100 * r) + "%" };
          return a.createElement(
            "div",
            { className: "TriggerBar " + t },
            a.createElement(
              "div",
              { className: "VisualizerLabel" },
              (0, o.we)(e),
            ),
            a.createElement(
              "div",
              { className: "TriggerBarBackground" },
              a.createElement("div", {
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
              a = this.m_nameRef.current.getBoundingClientRect(),
              i = this.m_containerRef.current.getBoundingClientRect(),
              s = this.GetPosition(),
              o = new p.bR(0, a.top + a.height / 2);
            o.x = n ? i.left - 10 : i.right + 10;
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
            a.createElement(
              "div",
              { className: "VisualizerControl", ref: this.m_containerRef },
              a.createElement(
                "div",
                { className: "VisualizerSectionHeader" },
                a.createElement(
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
              a.createElement(
                "svg",
                {
                  className: e,
                  xmlns: "http://www.w3.org/2000/svg",
                  ref: this.m_svgRef,
                },
                a.createElement(
                  "defs",
                  null,
                  a.createElement(
                    "radialGradient",
                    { id: "buttonGradient" },
                    a.createElement("stop", {
                      offset: "0%",
                      stopColor: "var(--bordercolor)",
                      stopOpacity: "0.8",
                    }),
                    a.createElement("stop", {
                      offset: "100%",
                      stopColor: "var(--bordercolor)",
                      stopOpacity: "0",
                    }),
                  ),
                ),
                a.createElement("polyline", {
                  id: "SourceLine",
                  stroke: "var(--bordercolor)",
                  strokeWidth: "0.1rem",
                  fill: "transparent",
                }),
                a.createElement("polyline", {
                  id: "SourcePath",
                  stroke: "var(--bordercolor)",
                  strokeWidth: "0.1rem",
                  fill: "transparent",
                }),
                a.createElement("circle", {
                  id: "SourceCircle",
                  r: "2rem",
                  fill: "url(#buttonGradient)",
                }),
              ),
            )
          );
        }
      }
      (0, n.Cg)([i.o], M.prototype, "ComponentUpdated", null),
        (0, n.Cg)([i.o], M.prototype, "UpdateSVGPath", null);
      class T extends M {
        constructor(e) {
          super(e);
        }
      }
      class E extends M {
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
          return a.createElement(
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
      class V extends M {
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
            a.createElement(
              "div",
              {
                className:
                  "TrackpadVisualizerContainer" +
                  (this.state.touch ? " Touched" : ""),
              },
              a.createElement(
                "div",
                { className: "TrackpadPosition" },
                a.createElement(
                  "div",
                  { className: "VisualizerLabel" },
                  (0, o.we)("#SourceInputMode_Position"),
                ),
                a.createElement(
                  "div",
                  { className: "TrackpadVisualizerContainer" },
                  a.createElement(
                    "div",
                    { className: "TrackpadVisualizerBackground" },
                    e &&
                      a.createElement(
                        "div",
                        { style: e },
                        a.createElement(
                          "div",
                          { className: "TrackpadVisualizerPipContainer" },
                          a.createElement("div", { className: t }),
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
      class D extends a.Component {
        constructor(e) {
          super(e),
            (this.m_imageRef = a.createRef()),
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
              return a.createElement(T, {
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
              return a.createElement(E, {
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
              return a.createElement(V, {
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
              return a.createElement(
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
              ? a.createElement(
                  "div",
                  { className: "VisualizerImageContainer" },
                  a.createElement("img", {
                    className: "VisualizerImage",
                    ref: this.m_imageRef,
                    onLoad: this.OnImageLoaded,
                    src: e,
                    style: { transform: t },
                  }),
                  a.createElement(w.A, { onReflow: this.OnImageReflow }),
                )
              : null
          );
        }
        render() {
          let e = [],
            t = [],
            r = this.ControllerTypeInfo,
            n = 0,
            i = [];
          for (let e in r.input_source) {
            let t = r.input_source[e];
            if ("InputValueVisibility_AvailableButHidden" == t.visibility)
              continue;
            let a = this.EstimateSourceHeight(t);
            (n += a),
              i.push({
                sSourcePath: e,
                inputSource: t,
                order: t.order ? t.order : 0,
                height: a,
              });
          }
          let s = 8;
          n > 16 && (s = n / 2);
          let o = 0,
            l = i.sort((e, t) => e.order - t.order);
          for (let r of l) {
            o += r.height;
            let n = o > s ? R.Right : R.Left,
              a = this.renderSource(r.sSourcePath, r.inputSource, n);
            a && (n == R.Left ? e.push(a) : t.push(a));
          }
          return a.createElement(
            "div",
            { className: "ControllerVisualizer" },
            a.createElement(
              "div",
              { className: "VisualizerLeft ControllerVisualizerEntries" },
              e,
            ),
            this.renderImage(),
            a.createElement(
              "div",
              { className: "VisualizerRight ControllerVisualizerEntries" },
              t,
            ),
          );
        }
      }
      (0, n.Cg)([i.o], D.prototype, "OnImageLoaded", null),
        (0, n.Cg)([i.o], D.prototype, "OnImageReflow", null);
      let B = class extends a.Component {
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
            return a.createElement(
              c.bB,
              {
                className: "ControllerVisualizerWrapper",
                header: (0, o.we)("#TestControllerTitle", ""),
                onDismissRequested: this.props.onDismissRequested,
              },
              a.createElement(
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
          return a.createElement(
            c.bB,
            {
              className: "ControllerVisualizerWrapper",
              header: (0, o.we)("#TestControllerTitle", e),
              onDismissRequested: this.props.onDismissRequested,
              footer: a.createElement(c.tR, {
                leftControls: [
                  a.createElement(C.AN, {
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
              a.createElement(D, {
                devicePath: this.state.devicePath,
                serialNumber: e,
                visualizer: this,
              }),
          );
        }
      };
      (0, n.Cg)([i.o], B.prototype, "OnConnectedDevicesChanged", null),
        (0, n.Cg)([i.o], B.prototype, "OnUpdateComponentStates", null),
        (B = (0, n.Cg)([s.PA], B));
      var A,
        O,
        I = r(917);
      const k = (0, s.PA)(() => {
          const e = "managevivetrackers";
          if (
            !(null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VRDashboardManager.ShouldShowTrackerUI())
          )
            return null;
          const t = l.HR.routePageSection == e;
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
              "div",
              { className: "SettingsItem Button" },
              a.createElement(
                u.$,
                {
                  className: "ButtonControl",
                  onClick: () => l.HR.setRoutePageSection(e),
                },
                (0, o.we)("#Settings_General_ShowTrackerUI"),
              ),
            ),
            t &&
              a.createElement(
                c.bB,
                {
                  header: (0, o.we)("#Settings_ViveTrackers"),
                  onDismissRequested: () => l.HR.setRoutePageSection(null),
                },
                a.createElement(b, null),
              ),
          );
        }),
        L = (0, s.PA)(() => {
          const e = "debuglegacyinput";
          if (!m.W.BDevMode) return null;
          const t = l.HR.routePageSection == e;
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
              "div",
              { className: "SettingsItem Button" },
              a.createElement(
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
              a.createElement(
                c.bB,
                {
                  header: (0, o.we)("#AppSelect_LegacyDebug"),
                  onDismissRequested: () => l.HR.setRoutePageSection(null),
                },
                a.createElement(f, null),
              ),
          );
        }),
        H = (0, s.PA)(() => {
          const e = "testcontrollers",
            t = l.HR.routePageSection == e;
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
              "div",
              { className: "SettingsItem Button" },
              a.createElement(
                u.$,
                {
                  className: "ButtonControl",
                  onClick: () => l.HR.setRoutePageSection(e),
                },
                (0, o.we)("#AppSelect_ControllerTester"),
              ),
            ),
            t &&
              a.createElement(B, {
                onDismissRequested: () => l.HR.setRoutePageSection(null),
              }),
          );
        });
      function P(e) {
        return a.createElement(
          c.YO,
          { visibility: c.Z3.Advanced, className: "SettingsItem Button" },
          a.createElement(
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
        return a.createElement(
          c.YO,
          { className: "SettingsItem Button" },
          a.createElement(
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
      let x = (A = class extends a.Component {
        constructor(e) {
          super(e),
            (this.state = { bShowingModal: !1, sDeviceToCalibrate: null });
        }
        resetToDefaults() {
          A.devices.forEach((e) => {
            this.updateCalibration(e.sDevicePath, 0);
          });
        }
        closeCalibrator() {
          this.setState({ sDeviceToCalibrate: null });
        }
        updateCalibration(e, t) {
          this.closeCalibrator(),
            A.devices.some(
              (r) =>
                r.sDevicePath == e &&
                (l.HR.SetSettingsValue(this.getThumbstickRotationSetting(e), t),
                !0),
            );
        }
        getThumbstickRotationSetting(e) {
          let t = null;
          return (
            A.devices.some((r) => {
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
            a.createElement(
              a.Fragment,
              null,
              a.createElement(
                c.YO,
                { className: "SettingsItem" },
                a.createElement(
                  u.$,
                  { className: "ButtonControl", onClick: this.show },
                  (0, o.we)("#Settings_ShowThumbstickSettings"),
                ),
              ),
              this.state.bShowingModal &&
                a.createElement(
                  c.bB,
                  {
                    header: (0, o.we)("#Settings_ThumbstickSettings"),
                    onDismissRequested: this.hide,
                  },
                  null !== this.state.sDeviceToCalibrate &&
                    a.createElement(S, {
                      devicePath: this.state.sDeviceToCalibrate,
                      fnCloseCalibrator: this.closeCalibrator,
                      fnUpdateThumbstickCalibration: this.updateCalibration,
                    }),
                  A.devices.map((e) => {
                    if (
                      !this.shouldShowThumbstickCalibrateForHand(e.sDevicePath)
                    )
                      return a.createElement(
                        c.YO,
                        {
                          key: e.sDevicePath,
                          title: (0, o.we)(
                            "#Settings_General_CalibrateThumbstick_ConnectAController",
                          ),
                          className: "SettingsItem CalibrateThumbstickItem",
                        },
                        a.createElement(
                          "div",
                          { className: "Label" },
                          (0, o.we)(
                            e.sThumbstickAngleLabelPlaceholderUnlocalized,
                          ),
                        ),
                        a.createElement(
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
                      a.createElement(
                        c.YO,
                        {
                          key: e.sDevicePath,
                          className: "SettingsItem CalibrateThumbstickItem",
                        },
                        a.createElement(
                          "div",
                          { className: "Label" },
                          (0, o.we)(
                            e.sThumbstickAngleLabelUnlocalized,
                            t.toFixed(1),
                          ),
                        ),
                        a.createElement(
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
                    a.createElement(c.tE, {
                      min: 0,
                      max: 0.5,
                      step: 0.01,
                      valueStyleVariant: I.Te.OnHandle,
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
      (x.devices = [
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
        (0, n.Cg)([i.o], x.prototype, "resetToDefaults", null),
        (0, n.Cg)([i.o], x.prototype, "closeCalibrator", null),
        (0, n.Cg)([i.o], x.prototype, "updateCalibration", null),
        (0, n.Cg)([i.o], x.prototype, "showCalibration", null),
        (0, n.Cg)([i.o], x.prototype, "show", null),
        (0, n.Cg)([i.o], x.prototype, "hide", null),
        (x = A = (0, n.Cg)([s.PA], x));
      let N = (O = class extends a.Component {
        constructor(e) {
          super(e),
            (this.m_mailbox = new d._n()),
            (this.m_routeObservingAutorunDisposer = null),
            (this.m_refAppSelectDropdown = a.createRef()),
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
          l.HR.setRoute(e, O.PAGE_SECTION, t ? [t] : null),
            null === VRHTML || void 0 === VRHTML || VRHTML.ShowSettingsUI();
        }
        get shouldShowModal() {
          return l.HR.routePageSection == O.PAGE_SECTION;
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
              a =
                null == n
                  ? void 0
                  : n[this.state.currentControllerType.controller_type];
            if (!a)
              return (
                console.log("No previous url to go back to."),
                void this.setState({ bForceToggleToCustom: !0 })
              );
            yield p.B$.SelectConfig(
              this.state.currentBindingApp.key,
              this.state.currentControllerType.controller_type,
              a,
            );
          });
        }
        showBindingDetail(e) {
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
          l.HR.setRoutePageSection(O.PAGE_SECTION);
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
          var e, t, r, n, i, s, l, p, h, g, v, _, b, S, y, f, R, w;
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
                (i =
                  null === (n = this.state.currentActionManifest) ||
                  void 0 === n
                    ? void 0
                    : n.default_bindings) || void 0 === i
                ? void 0
                : i[
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
          const T =
              null ===
                (h =
                  null === (p = this.state.currentBinding) || void 0 === p
                    ? void 0
                    : p.options) || void 0 === h
                ? void 0
                : h.compatibility_mode,
            E =
              (null === (g = this.state.currentBinding) || void 0 === g
                ? void 0
                : g.controller_type) !=
              (null === (v = this.state.currentControllerType) || void 0 === v
                ? void 0
                : v.controller_type),
            V = null == M && (null == C ? void 0 : C.startsWith("file://")),
            D = T || E || V,
            B =
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
            A =
              (this.state.bForceToggleToCustom || !M || M != C) &&
              !(D && B && !this.state.bForceToggleToCustom),
            O =
              (null === (R = this.state.currentActionManifest) || void 0 === R
                ? void 0
                : R.supports_dominant_hand_setting) &&
              null != this.state.eDominantHand,
            I =
              this.state.eDominantHand == d.kG.TrackedControllerRole_RightHand;
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
              c.YO,
              { className: "SettingsItem" },
              a.createElement(
                u.$,
                { className: "ButtonControl", onClick: this.show },
                (0, o.we)("#Settings_Controller_AdvancedControllerSettings"),
              ),
            ),
            this.shouldShowModal &&
              a.createElement(
                c.bB,
                {
                  className: "BindingsModal",
                  header: a.createElement(
                    a.Fragment,
                    null,
                    a.createElement(
                      "h1",
                      null,
                      (0, o.we)(
                        "#Settings_ManageControllerBindingSettingsForApp",
                      ),
                    ),
                    a.createElement(c.mi, {
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
                  a.createElement(
                    c.YO,
                    { className: "SettingsItem" },
                    a.createElement(
                      "div",
                      { className: "Label" },
                      (0, o.we)("#Settings_ActiveController"),
                    ),
                    a.createElement(
                      "div",
                      { className: "Label" },
                      m.W.LocalizeDriverString(
                        this.state.currentControllerType.resource_root,
                        this.state.currentControllerType.controller_type,
                      ),
                    ),
                  ),
                D &&
                  a.createElement(
                    "span",
                    { className: "RemappedInfoSpan" },
                    a.createElement("img", {
                      className: "InformationButtonImage",
                      src: "images/bindingui/icon_information.svg",
                    }),
                    (0, o.we)("#BindingUI_Compatibility_Remapped_Text"),
                  ),
                !m.W.IsSteamAvailable &&
                  this.state.currentBinding &&
                  a.createElement(
                    c.YO,
                    { className: "SettingsItem" },
                    a.createElement(
                      "div",
                      { className: "Label" },
                      (0, o.we)("#Settings_ActiveBinding"),
                    ),
                    a.createElement(
                      "div",
                      { className: "Label" },
                      this.state.currentBinding.name,
                    ),
                  ),
                m.W.IsSteamAvailable &&
                  a.createElement(c.Al, {
                    label: (0, o.we)("#Settings_ActiveControllerBinding"),
                    offLabel: (0, o.we)("#Settings_Controller_DefaultBinding"),
                    onLabel: (0, o.we)("#Settings_Controller_CustomBinding"),
                    onChange: this.onToggleDefaultCustomBinding,
                    value: A,
                    onSubsection: a.createElement(
                      a.Fragment,
                      null,
                      (!C || !this.state.currentBinding) &&
                        a.createElement(
                          "div",
                          { className: "SettingsItem Label" },
                          (0, o.we)("#Settings_Loading_CurrentBinding"),
                        ),
                      A &&
                        a.createElement(
                          "div",
                          {
                            className:
                              "SettingsItem ButtonRow BindingButtonRow",
                          },
                          a.createElement(
                            c.CS,
                            {
                              icon: c.Xb.PopOut,
                              enabled: m.W.IsSteamAvailable && Boolean(C),
                              onClick: this.showBindingDetail.bind(this, !0),
                            },
                            (0, o.we)("#Settings_EditBinding"),
                          ),
                          a.createElement(
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
                a.createElement("div", { className: "Spacer" }),
                this.state.currentBinding &&
                  a.createElement(z, {
                    appKey: this.state.currentBindingApp.key,
                  }),
                O &&
                  a.createElement(c.Al, {
                    label: (0, o.we)("#Settings_DominantHand"),
                    offLabel: (0, o.we)("#Settings_DominantHand_Left"),
                    onLabel: (0, o.we)("#Settings_DominantHand_Right"),
                    onChange: this.onToggleDominantHand,
                    value: I,
                  }),
              ),
          );
        }
      });
      (N.PAGE_SECTION = "appcontrollerbindings"),
        (0, n.Cg)([h.computed], N.prototype, "shouldShowModal", null),
        (0, n.Cg)([h.computed], N.prototype, "currentRouteAppKey", null),
        (0, n.Cg)([i.o], N.prototype, "onApplicationDropdownChange", null),
        (0, n.Cg)([i.o], N.prototype, "onToggleDefaultCustomBinding", null),
        (0, n.Cg)([i.o], N.prototype, "showBindingDetail", null),
        (0, n.Cg)([i.o], N.prototype, "show", null),
        (0, n.Cg)([i.o], N.prototype, "close", null),
        (0, n.Cg)([i.o], N.prototype, "showBindingCallouts", null),
        (0, n.Cg)([i.o], N.prototype, "onToggleDominantHand", null),
        (N = O = (0, n.Cg)([s.PA], N));
      const z = (e) =>
        a.createElement(
          c.YO,
          { className: "SettingsItem" },
          a.createElement(
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
      let W = class extends a.Component {
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
            let r = a.createElement(
              "div",
              { key: e.serial, className: "ButtonRow" },
              "Dongle ",
              e.serial,
              " connected to ",
              e.connectedSerial,
              !this.state.isPairing &&
                a.createElement(
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
                a.createElement(
                  "h2",
                  null,
                  " ",
                  (0, o.we)("#Settings_Controller_Pairing"),
                  " ",
                ),
            );
            t.push(r);
          }
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
              c.YO,
              { className: "SettingsItem" },
              a.createElement(
                u.$,
                { className: "ButtonControl", onClick: this.show },
                (0, o.we)("#Settings_Controller_PairControllers"),
              ),
            ),
            this.state.bShowingModal &&
              a.createElement(
                c.bB,
                {
                  header: (0, o.we)(
                    "#Settings_Controller_ControllerPairingSection",
                  ),
                  onDismissRequested: this.hide,
                },
                a.createElement(a.Fragment, null, t),
                e &&
                  a.createElement(
                    "h1",
                    null,
                    "No controller dongles detected.",
                  ),
              ),
          );
        }
      };
      (0, n.Cg)([i.o], W.prototype, "OnDiscoverDonglesResponse", null),
        (0, n.Cg)([i.o], W.prototype, "DiscoverDongles", null),
        (0, n.Cg)([i.o], W.prototype, "StartPairing", null),
        (0, n.Cg)([i.o], W.prototype, "show", null),
        (0, n.Cg)([i.o], W.prototype, "hide", null),
        (W = (0, n.Cg)([s.PA], W));
      let G = class extends a.Component {
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
          for (let i of null === VRHTML || void 0 === VRHTML
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
                          i.unIndex,
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
                          i.unIndex,
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
                          i.unIndex,
                          d.fD.Firmware_UpdateAvailable_Bool,
                        )) &&
                void 0 !== r &&
                r,
              c = null;
            this.state.controllers.some((e) => e.serial == o && ((c = e), !0));
            let m = a.createElement(
              "div",
              { key: o },
              a.createElement("div", null, s, " - ", o),
              a.createElement(
                "div",
                null,
                !l &&
                  !(null == c ? void 0 : c.updateInProgress) &&
                  a.createElement("div", null, "Up to date"),
                (null == c ? void 0 : c.updateInProgress) &&
                  a.createElement("progress", { value: c.updateProgress }),
                l &&
                  !c &&
                  a.createElement(
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
                  a.createElement(
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
          const i = 0 == n.length;
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
              c.YO,
              { className: "SettingsItem" },
              a.createElement(
                u.$,
                { className: "ButtonControl", onClick: this.show },
                "Update Controllers",
              ),
            ),
            this.state.bShowingModal &&
              a.createElement(
                c.bB,
                { header: "Update Controllers", onDismissRequested: this.hide },
                a.createElement(a.Fragment, null, n),
                i && a.createElement("h1", null, "No controllers connected."),
              ),
          );
        }
      };
      (0, n.Cg)([i.o], G.prototype, "OnControllerUpdateStatus", null),
        (0, n.Cg)([i.o], G.prototype, "StartUpdate", null),
        (0, n.Cg)([i.o], G.prototype, "onDeviceEvent", null),
        (0, n.Cg)([i.o], G.prototype, "onFirmwareStateChanged", null),
        (0, n.Cg)([i.o], G.prototype, "show", null),
        (0, n.Cg)([i.o], G.prototype, "hide", null),
        (G = (0, n.Cg)([s.PA], G));
      let U = class extends c.yO {
        constructor(e) {
          super(e),
            (this.m_mailbox = new d._n()),
            (this.m_refControllerSettingsSection = a.createRef()),
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
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(z, null),
            a.createElement(N, null),
            a.createElement(P, { mailbox: this.m_mailbox }),
            a.createElement(x, { ref: this.m_refControllerSettingsSection }),
            a.createElement(H, null),
            a.createElement(k, null),
            a.createElement(L, null),
            a.createElement(F, { mailbox: this.m_mailbox }),
            r && a.createElement(W, null),
            n && a.createElement(G, null),
          );
        }
      };
      (U.Name = "controller_settings"),
        (0, n.Cg)([i.o], U.prototype, "ResetToDefaults", null),
        (U = (0, n.Cg)([s.PA], U));
    },
    427: (e, t, r) => {
      "use strict";
      r.d(t, {
        mi: () => q,
        yO: () => A,
        YO: () => D,
        Z3: () => a,
        CS: () => J,
        Xb: () => $,
        RM: () => G,
        xS: () => H,
        WZ: () => I,
        bB: () => j,
        tR: () => K,
        ym: () => P,
        JA: () => k,
        tE: () => F,
        Al: () => L,
        u4: () => z,
        Pw: () => N,
      });
      var n,
        a,
        i = r(1635),
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
        R = r(5615);
      function w(e, t, r) {
        (t = t.bind(VRHTML.VRPathProperties)),
          (r = r.bind(VRHTML.VRPathProperties));
        const [n, a] = s.useState(() => {
          try {
            return t(e);
          } catch (e) {
            return;
          }
        });
        return (
          s.useEffect(() => (e ? r(e, a).unregister : void 0), [r, a, e]), n
        );
      }
      function C(e) {
        return w(
          e,
          VRHTML.VRPathProperties.GetStringPathProperty,
          VRHTML.VRPathProperties.RegisterForStringPathPropertyChangedEvents,
        );
      }
      function M(e) {
        return w(
          e,
          VRHTML.VRPathProperties.GetFloatPathProperty,
          VRHTML.VRPathProperties.RegisterForFloatPathPropertyChangedEvents,
        );
      }
      function T(e) {
        var t, r, n;
        const a = M(e.detent),
          i = {
            name: e.name,
            min: null !== (t = e.min) && void 0 !== t ? t : 0,
            max: null !== (r = e.max) && void 0 !== r ? r : 100,
            step: null !== (n = e.step) && void 0 !== n ? n : 5,
            detents: void 0 !== a ? [a] : void 0,
          };
        return s.createElement(
          F,
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
            i,
          ),
        );
      }
      function E(e) {
        const t = C(e.name);
        return s.createElement(
          D,
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
      function V(e) {
        let t;
        return (
          "string" == typeof e.value
            ? (t = C(e.path))
            : "boolean" == typeof e.value
              ? (t = w(
                  e.path,
                  VRHTML.VRPathProperties.GetBoolPathProperty,
                  VRHTML.VRPathProperties
                    .RegisterForBoolPathPropertyChangedEvents,
                ))
              : "number" == typeof e.value && (t = M(e.path)),
          t === e.value ? e.children : null
        );
      }
      !(function (e) {
        (e[(e.Normal = 0)] = "Normal"),
          (e[(e.Advanced = 1)] = "Advanced"),
          (e[(e.Desktop = 2)] = "Desktop"),
          (e[(e.VR = 3)] = "VR");
      })(a || (a = {}));
      let D = class extends s.Component {
        constructor(e) {
          super(e);
        }
        render() {
          let e = Object.assign({}, this.props);
          delete e.label, delete e.subsection, delete e.visibility;
          let t = this.props.visibility == a.Advanced;
          switch (this.props.visibility) {
            case a.Desktop:
              t = (0, m.R$)() != m.OH.Desktop;
              break;
            case a.VR:
              t = (0, m.R$)() != m.OH.Overlay;
          }
          return t && !d.HR.showAdvancedSettings
            ? null
            : (this.props.visibility == a.Advanced &&
                (e.className = (0, g.FH)(e.className, "Advanced")),
              s.createElement("div", e, this.props.children));
        }
      };
      D = (0, i.Cg)([u.PA], D);
      const B = (0, u.PA)(function (e) {
        const { settingValue: t } = e;
        if (t.requires)
          for (let e in t.requires) {
            let r = t.requires[e];
            if (d.HR.settings.get(e) != r) return null;
          }
        if (t.advanced_only && !d.HR.showAdvancedSettings) return null;
        if (t.windows_only && d.HR.systemInfo && d.HR.systemInfo.os_type < 0)
          return null;
        let r = null;
        switch (null == t ? void 0 : t.control) {
          case "checkbox":
            r = s.createElement(O, {
              key: t.name,
              name: t.name,
              label: t.label ? (0, l.we)(t.label) : "",
              title: t.text ? (0, l.we)(t.text) : "",
            });
            break;
          case "toggle":
            r = s.createElement(L, {
              key: t.name,
              name: t.name,
              swapOnOff: t.inverted,
              onLabel: t.on_label && (0, l.we)(t.on_label),
              offLabel: t.off_label && (0, l.we)(t.off_label),
              label: t.label ? (0, l.we)(t.label) : "",
              title: t.text ? (0, l.we)(t.text) : "",
            });
            break;
          case "select":
            let e = t.options
              .filter((e) => null != e)
              .map((e, t) => ({ value: e.value, sLabel: (0, l.we)(e.label) }));
            r = s.createElement(H, {
              key: t.name,
              name: t.name,
              label: t.label ? (0, l.we)(t.label) : "",
              title: t.text ? (0, l.we)(t.text) : "",
              items: e,
            });
            break;
          case "radio":
            let n = t.options
              .filter((e) => null != e)
              .map((e, t) => ({ value: e.value, sLabel: (0, l.we)(e.label) }));
            r = s.createElement(P, {
              key: t.name,
              name: t.name,
              label: t.label ? (0, l.we)(t.label) : "",
              items: n,
            });
            break;
          case "scale":
          case "none":
          default:
            r = s.createElement("div", { key: t.name });
            break;
          case "slider":
            r = s.createElement(T, Object.assign({ key: t.name }, t));
            break;
          case "label":
            r = s.createElement(E, Object.assign({ key: t.name }, t));
        }
        if (
          (t.advanced_only &&
            (r = s.createElement(
              D,
              { key: t.name, className: "SettingsItem Advanced" },
              r,
            )),
          t.requires_paths)
        )
          for (let e in t.requires_paths)
            r = s.createElement(
              V,
              { key: t.name, path: e, value: t.requires_paths[e] },
              r,
            );
        return r;
      });
      class A extends s.Component {
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
      (0, i.Cg)([o.o], A.prototype, "ResetToDefaults", null),
        (0, i.Cg)([c.computed], A.prototype, "schemaComponents", null);
      let O = class extends s.Component {
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
      (0, i.Cg)([o.o], O.prototype, "handleChange", null),
        (O = (0, i.Cg)([u.PA], O));
      let I = class extends s.Component {
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
            D,
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
      (0, i.Cg)([o.o], I.prototype, "handleChange", null),
        (I = (0, i.Cg)([u.PA], I));
      let k = class extends s.Component {
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
            a = this.props.items.findIndex((e) =>
              this.ValuesAreEqual(e.value, n),
            ),
            i =
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
            o = !!i;
          return s.createElement(
            D,
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
                    "--item-value-index": a,
                    "--toggle-control-translate-x-direction":
                      0 == a
                        ? 1
                        : a == this.props.items.length - 1
                          ? -1
                          : this.state.nMouseDownIndex > a
                            ? 1
                            : this.state.nMouseDownIndex < a
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
            !!i &&
              s.createElement("div", { className: "Subsection WithStem" }, i),
          );
        }
      };
      (0, i.Cg)([o.o], k.prototype, "onGroupMouseEnter", null),
        (0, i.Cg)([o.o], k.prototype, "onGroupMouseLeave", null),
        (0, i.Cg)([o.o], k.prototype, "onOptionMouseEnter", null),
        (0, i.Cg)([o.o], k.prototype, "onOptionMouseLeave", null),
        (k = (0, i.Cg)([u.PA], k));
      let L = class extends s.Component {
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
          return s.createElement(k, {
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
      L = (0, i.Cg)([u.PA], L);
      let H = class extends s.Component {
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
              D,
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
      (0, i.Cg)([c.computed], H.prototype, "value", null),
        (0, i.Cg)([o.o], H.prototype, "onChange", null),
        (H = (0, i.Cg)([u.PA], H));
      let P = class extends s.Component {
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
            D,
            {
              className: (0, g.FH)("SettingsItem", "RadioButtons"),
              title: this.props.title,
            },
            s.createElement("div", { className: "Label" }, this.props.label),
            s.createElement("div", { className: "RadioButtonsSet" }, e),
          );
        }
      };
      (0, i.Cg)([c.computed], P.prototype, "value", null),
        (0, i.Cg)([o.o], P.prototype, "onChange", null),
        (P = (0, i.Cg)([u.PA], P));
      let F = class extends s.Component {
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
              D,
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
            )
          );
        }
      };
      function x(e) {
        return (
          "#" +
          ("0" + Math.floor(e.r).toString(16)).slice(-2) +
          ("0" + Math.floor(e.g).toString(16)).slice(-2) +
          ("0" + Math.floor(e.b).toString(16)).slice(-2) +
          ("0" + Math.floor(255 * e.a).toString(16)).slice(-2)
        ).toUpperCase();
      }
      (0, i.Cg)([o.o], F.prototype, "onInteractionStart", null),
        (0, i.Cg)([o.o], F.prototype, "onInteractionEnd", null),
        (0, i.Cg)([c.computed], F.prototype, "value", null),
        (0, i.Cg)([o.o], F.prototype, "onChange", null),
        (F = (0, i.Cg)([u.PA], F));
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
          let a = r <= 0.5 ? r * (1 + t) : r + t - r * t,
            i = 2 * r - a;
          return [
            n.HueToRGB(i, a, e + 1 / 3),
            n.HueToRGB(i, a, e),
            n.HueToRGB(i, a, e - 1 / 3),
          ];
        }
        static RGBtoHueLuminance(e, t, r) {
          (e /= 255), (t /= 255), (r /= 255);
          let n = Math.max(e, t, r),
            a = Math.min(e, t, r),
            i = 0,
            s = (n + a) / 2;
          if (n != a) {
            let s = n - a;
            switch (n) {
              case e:
                i = (t - r) / s + (t < r ? 6 : 0);
                break;
              case t:
                i = (r - e) / s + 2;
                break;
              case r:
                i = (e - t) / s + 4;
            }
            i /= 6;
          }
          return { hue: 360 * i, luminance: s };
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
          const a = n.RGBtoHueLuminance(e, t, r),
            i = 360 / (1 - n.WHITE_SIZE_PERCENT),
            o = 255 == e && 255 == t && 255 == r ? i : a.hue;
          return s.createElement(F, {
            additionalClassName: "Hue",
            label: this.props.label,
            labelSpans: !0,
            title: this.props.text,
            styleVariant: f.uJ.Color,
            renderValue: (e) =>
              e > 360 ? "white" : "hsl(" + e + ", 100%, 50%)",
            max: i,
            value: o,
            onChange: this.onSliderChanged,
          });
        }
      });
      (N.WHITE_SIZE_PERCENT = 0.03),
        (0, i.Cg)([o.o], N.prototype, "onSliderChanged", null),
        (N = n = (0, i.Cg)([u.PA], N));
      let z = class extends s.Component {
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
          return s.createElement(F, {
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
      (0, i.Cg)([c.computed], z.prototype, "value", null),
        (0, i.Cg)([o.o], z.prototype, "onSliderChanged", null),
        (z = (0, i.Cg)([u.PA], z));
      let W,
        G = class extends s.Component {
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
            this.props.name && d.HR.SetSettingsValue(this.props.name, x(r)),
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
            this.props.name && d.HR.SetSettingsValue(this.props.name, x(t)),
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
              D,
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
                  j,
                  {
                    onDismissRequested: this.hideModal,
                    header: this.props.label,
                  },
                  s.createElement(N, {
                    label: (0, l.we)("#Settings_Chaperone_BoundsColor"),
                    onChange: this.onColorChange,
                    value: e,
                  }),
                  s.createElement(z, {
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
      (0, i.Cg)([c.computed], G.prototype, "value", null),
        (0, i.Cg)([c.computed], G.prototype, "alphaScale", null),
        (0, i.Cg)([o.o], G.prototype, "onAlphaChange", null),
        (0, i.Cg)([c.computed], G.prototype, "minA", null),
        (0, i.Cg)([c.computed], G.prototype, "maxA", null),
        (0, i.Cg)([o.o], G.prototype, "onColorChange", null),
        (0, i.Cg)([o.o], G.prototype, "showModal", null),
        (0, i.Cg)([o.o], G.prototype, "hideModal", null),
        (G = (0, i.Cg)([u.PA], G));
      class U {
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
      (0, i.Cg)([c.observable], U.prototype, "runningAppKey", void 0),
        (0, i.Cg)([o.o], U.prototype, "onSceneApplicationStateChanged", null);
      class q extends s.Component {
        constructor(e) {
          W || (W = new U()), super(e), (this.state = { currentApp: null });
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
            a =
              null !==
                (r =
                  null !== (t = this.props.defaultAppKey) && void 0 !== t
                    ? t
                    : e) && void 0 !== r
                ? r
                : n;
          this.setCurrentApp(a);
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
            a = e.filter((e) => !r(e));
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
            a.sort((e, t) => e.sLabel.localeCompare(t.sLabel)),
            n.length > 0 && a.length > 0
              ? [...n, b.Sr.Separator, ...a]
              : n.length > 0
                ? n
                : a
          );
        }
        onControllerDropdownChanged(e) {
          W.setAppKey(this.props.stateKey, e), this.setCurrentApp(e);
        }
        render() {
          const e = this.makeAppChoiceList(),
            t = this.state.currentApp ? this.state.currentApp.key : null;
          return s.createElement(H, {
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
      (0, i.Cg)([o.o], q.prototype, "onSceneApplicationStateChanged", null),
        (0, i.Cg)([o.o], q.prototype, "onControllerDropdownChanged", null);
      const j = (e) => {
          let t = Object.assign({}, e),
            r = t.header;
          "string" == typeof r && (r = s.createElement("h1", null, r));
          let n = t.subheader;
          "string" == typeof n &&
            (n = s.createElement("div", { className: "Label" }, n));
          let a = t.footer;
          void 0 === a &&
            (a = s.createElement(K, {
              onDismissRequested: t.onDismissRequested,
            }));
          const i = t.allowableParentSelectors || [];
          return (
            m.O5.IsSceneGraphApp ||
              (t.allowableParentSelectors = [
                ...i,
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
              a &&
                s.createElement("div", { className: "Subsection Bottom" }, a),
            )
          );
        },
        K = (e) => {
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
      var $;
      !(function (e) {
        e[(e.PopOut = 0)] = "PopOut";
      })($ || ($ = {}));
      const J = (e) => {
        let t = null;
        if (void 0 !== e.icon && e.icon === $.PopOut)
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
        Pj: () => T,
        xR: () => k,
        a5: () => L,
        y: () => y,
        rO: () => C,
        zU: () => D,
        EM: () => V,
      });
      var n = r(1635),
        a = r(7813),
        i = r(1370),
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
        v = r(427);
      var _,
        b = r(3732);
      function S() {
        VRHTML
          ? VRHTML.VRMonitor.SetDirectModeEnabled(!0, !0)
          : window.open("vrmonitor://directmode/enable");
      }
      const y = (0, i.PA)(() => {
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
        w = (0, i.PA)(
          () => g.HR.settings.get(m.rG) == f && s.createElement(R, null),
        ),
        C = (0, i.PA)(() => {
          const e = g.HR.settings.get(m.wt),
            t = g.HR.settings.get(m.w5);
          let r = [],
            n = g.HR.settings.get(m.j5);
          if ((n > 0 ? r.push(n) : r.push(1), null === e || null === t))
            return null;
          let a = null;
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
            const i = g.HR.settings.get(m.rG);
            Math.max(r, n) > i &&
              (r > n
                ? ((n = (i * n) / r), (r = i))
                : ((r = (i * r) / n), (n = i))),
              (r = 4 * Math.trunc(r / 4)),
              (n = 4 * Math.trunc(n / 4)),
              (a = (0, p.we)(
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
                  s.createElement("div", { className: "Dimensions" }, a),
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
            let a = g.HR.settings.get(r);
            null == a && (a = 0);
            let i = g.HR.settings.get(n);
            return (
              null == i && (i = 0),
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
                      value: a,
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
                      value: i,
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
        (M = (0, n.Cg)([i.PA], M));
      const T = (0, i.PA)(() =>
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
      class E extends s.Component {
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
      class V extends s.Component {
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
      const D = () => {
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
      var B, A, O;
      !(function (e) {
        (e[(e.UseGlobal = 0)] = "UseGlobal"),
          (e[(e.ForceOn = 1)] = "ForceOn"),
          (e[(e.ForceOff = 2)] = "ForceOff"),
          (e[(e.ForceAlwaysOn = 3)] = "ForceAlwaysOn");
      })(B || (B = {})),
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
      const I = {
        [O.Fine]: { min: 0.8, max: 1.25, step: 0.001 },
        [O.Normal]: { min: 0.5, max: 2, step: 0.01 },
        [O.Extreme]: { min: 0.1, max: 10, step: 0.1 },
        [O.Off]: { min: 0, max: 100, step: 1 },
      };
      let k = (_ = class extends s.Component {
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
              disableAsyncReprojection: null,
              bShowThrottleOptions: null,
              nFramesToThrottle: null,
              nAdditionalPrediction: null,
              eWorldScaleRange: O.Off,
              flWorldScaleMultiplier: null,
            });
        }
        componentDidMount() {
          this.m_routeObservingAutorunDisposer = (0, a.autorun)(() => {
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
          return I[this.state.eWorldScaleRange].min;
        }
        get worldScaleRangeMax() {
          return I[this.state.eWorldScaleRange].max;
        }
        get worldScaleRangeStep() {
          return I[this.state.eWorldScaleRange].step;
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
                  disableAsyncReprojection: void 0,
                });
          });
        }
        updateAppState(e) {
          var t, r, n;
          if (void 0 !== e.resolution) {
            let a = null !== (t = e.throttling) && void 0 !== t ? t : 0,
              i = null !== (r = e.prediction) && void 0 !== r ? r : 0,
              s = O.Off;
            1 !== e.worldscale &&
              (s =
                Math.round(1e3 * e.worldscale) % 10 != 0
                  ? O.Fine
                  : e.worldscale < I[O.Normal].min ||
                      e.worldscale > I[O.Normal].max
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
                disableAsyncReprojection: e.disable_async_reprojection,
                bShowThrottleOptions:
                  void 0 !== e.throttling || void 0 !== e.prediction,
                nFramesToThrottle: a,
                nAdditionalPrediction: i - a,
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
              a = Math.max(
                512,
                Math.floor(
                  g.HR.systemInfo.render_target_size.height * Math.sqrt(e * r) +
                    0.5,
                ),
              );
            const i = g.HR.settings.get(m.rG);
            return (
              Math.max(n, a) > i &&
                (n > a
                  ? ((a = (i * a) / n), (n = i))
                  : ((n = (i * n) / a), (a = i))),
              (n = 4 * Math.trunc(n / 4)),
              (a = 4 * Math.trunc(a / 4)),
              (0, p.we)("#Settings_Advanced_Supersampling_WidthByHeight", n, a)
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
              I[e].min,
              Math.min(I[e].max, this.state.flWorldScaleMultiplier),
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
          this.state.eSmoothingMode == B.ForceAlwaysOn &&
            (t = s.createElement(
              s.Fragment,
              null,
              (0, p.we)(
                "#Settings_PerApplication_MotionSmoothing_AlwaysOn_Desc",
              ),
            ));
          const r = this.state.eFovScaleFormat == A.Advanced;
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
                            value: B.UseGlobal,
                            sLabel: (0, p.we)(
                              "#Settings_PerApplication_MotionSmoothing_Global",
                            ),
                          },
                          {
                            value: B.ForceOn,
                            sLabel: (0, p.we)(
                              "#Settings_PerApplication_MotionSmoothing_On",
                            ),
                          },
                          {
                            value: B.ForceOff,
                            sLabel: (0, p.we)(
                              "#Settings_PerApplication_MotionSmoothing_Off",
                            ),
                          },
                          {
                            value: B.ForceAlwaysOn,
                            sLabel: (0, p.we)(
                              "#Settings_PerApplication_MotionSmoothing_AlwaysOn",
                            ),
                          },
                        ],
                        value: this.state.eSmoothingMode,
                        onChange: this.onMotionSmoothChange,
                        subsection: t,
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
      (k.PAGE_SECTION = "appvideosettings"),
        (0, n.Cg)([a.computed], k.prototype, "shouldShowModal", null),
        (0, n.Cg)([a.computed], k.prototype, "currentRouteAppKey", null),
        (0, n.Cg)(
          [a.computed],
          k.prototype,
          "enableThrottleOverrideSettings",
          null,
        ),
        (0, n.Cg)(
          [a.computed],
          k.prototype,
          "enableMotionSmoothingOverrideSettings",
          null,
        ),
        (0, n.Cg)(
          [a.computed],
          k.prototype,
          "enableLegacyReprojectionSettings",
          null,
        ),
        (0, n.Cg)([a.computed], k.prototype, "worldScaleRangeMin", null),
        (0, n.Cg)([a.computed], k.prototype, "worldScaleRangeMax", null),
        (0, n.Cg)([a.computed], k.prototype, "worldScaleRangeStep", null),
        (0, n.Cg)([d.o], k.prototype, "onApplicationDropdownChange", null),
        (0, n.Cg)([d.o], k.prototype, "updateAppState", null),
        (0, n.Cg)([a.computed], k.prototype, "computedResolution", null),
        (0, n.Cg)([d.o], k.prototype, "onResolutionSliderChange", null),
        (0, n.Cg)([d.o], k.prototype, "onFovScaleSliderChange", null),
        (0, n.Cg)([d.o], k.prototype, "onFovScaleSliderChangeInner", null),
        (0, n.Cg)([d.o], k.prototype, "onFovScaleSliderChangeUpper", null),
        (0, n.Cg)([d.o], k.prototype, "onFovScaleSliderChangeLower", null),
        (0, n.Cg)([d.o], k.prototype, "onFovScaleFormatChange", null),
        (0, n.Cg)([d.o], k.prototype, "onMotionSmoothChange", null),
        (0, n.Cg)([d.o], k.prototype, "onRefreshRateOverrideChange", null),
        (0, n.Cg)([d.o], k.prototype, "onRefreshRateChange", null),
        (0, n.Cg)([d.o], k.prototype, "onDisableAsyncReprojection", null),
        (0, n.Cg)([d.o], k.prototype, "onShowThrottleOptions", null),
        (0, n.Cg)([d.o], k.prototype, "onThrottleSliderChange", null),
        (0, n.Cg)([d.o], k.prototype, "onPredictionSliderChange", null),
        (0, n.Cg)([d.o], k.prototype, "onWorldScaleRangeChange", null),
        (0, n.Cg)(
          [d.o],
          k.prototype,
          "onWorldScaleMultiplierSliderChange",
          null,
        ),
        (0, n.Cg)([d.o], k.prototype, "resetAppToDefaults", null),
        (0, n.Cg)([d.o], k.prototype, "show", null),
        (0, n.Cg)([d.o], k.prototype, "close", null),
        (0, n.Cg)([a.computed], k.prototype, "allowPerAppRefreshRate", null),
        (0, n.Cg)([a.computed], k.prototype, "currentRefreshRate", null),
        (k = _ = (0, n.Cg)([i.PA], k));
      let L = class extends v.yO {
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
            s.createElement(T, null),
            s.createElement(V, null),
            s.createElement(D, null),
            s.createElement(C, null),
            s.createElement(v.Al, {
              name: "/settings/steamvr/doNotFadeToGrid",
              label: (0, p.we)("#Settings_FadeToGrid"),
              swapOnOff: !0,
            }),
            s.createElement(k, null),
            !1,
            s.createElement(v.Al, {
              name: "/settings/steamvr/allowSupersampleFiltering",
              label: (0, p.we)("#Settings_Advanced_AllowSupersampleFiltering"),
              visibility: v.Z3.Advanced,
            }),
            s.createElement(E, null),
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
      (L.Name = "video_settings"), (L = (0, n.Cg)([i.PA], L));
    },
    8472: (e, t, r) => {
      "use strict";
      r.d(t, { u: () => s });
      var n = r(1635),
        a = r(3236),
        i = r(3496);
      class s extends i._J {
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
      (0, n.Cg)([a.o], s.prototype, "buildNode", null);
    },
    1988: (e, t, r) => {
      "use strict";
      var n = r(1635),
        a = r(3496),
        i = r(3236);
      class s extends a._J {
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
      (0, n.Cg)([i.o], s.prototype, "buildNode", null);
    },
    6417: (e, t, r) => {
      "use strict";
      r.d(t, { $: () => s });
      var n = r(1635),
        a = r(3496),
        i = r(3236);
      class s extends a._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "dashboardtransform";
        }
        buildNode(e, t) {
          var r, n;
          const a = this.createSgNode(t);
          return (
            (a.properties.continuous_relatch =
              null !== (r = this.props.bContinuousRelatch) &&
              void 0 !== r &&
              r),
            (a.properties.free_dashboard_transform =
              null !== (n = this.props.bFreeDashboardTransform) &&
              void 0 !== n &&
              n),
            [e, a]
          );
        }
      }
      (0, n.Cg)([i.o], s.prototype, "buildNode", null);
    },
    2303: (e, t, r) => {
      "use strict";
      r.d(t, { n: () => i });
      var n = r(6540),
        a = r(3496);
      class i extends a._J {
        constructor(e) {
          super(e);
        }
        internalRender() {
          let e = (0, a.j_)(this.props.transform.translation),
            t = (0, a.hi)(this.props.transform.rotation),
            r = (0, a.j_)(this.props.transform.scale);
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
        a = r(3496),
        i = r(3236);
      class s extends a._J {
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
              let t = (0, a.RH)(e.color, { r: 0, g: 0, b: 0 });
              r.properties.color = [t.r, t.g, t.b];
            }
          }
          return [e, r];
        }
      }
      (0, n.Cg)([i.o], s.prototype, "buildNode", null);
    },
    6186: (e, t, r) => {
      "use strict";
      r.d(t, { H: () => l, I: () => o });
      var n = r(1635),
        a = r(3496),
        i = r(3236),
        s = r(5723);
      class o extends a._J {
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
      (0, n.Cg)([i.o], o.prototype, "buildNode", null);
      class l extends a._J {
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
      (0, n.Cg)([i.o], l.prototype, "buildNode", null);
    },
    5830: (e, t, r) => {
      "use strict";
      r.d(t, { Y: () => s });
      var n = r(1635),
        a = r(3496),
        i = r(3236);
      class s extends a._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "opacity";
        }
        buildNode(e, t) {
          const r = this.createSgNode(t);
          return (r.properties.opacity = (0, a.kJ)(this.props.value)), [e, r];
        }
      }
      (0, n.Cg)([i.o], s.prototype, "buildNode", null);
    },
    7350: (e, t, r) => {
      "use strict";
      r.d(t, { V: () => n, a: () => l });
      var n,
        a = r(1635),
        i = r(3496),
        s = r(3236),
        o = r(5723);
      !(function (e) {
        (e[(e.None = 0)] = "None"), (e[(e.Backface = 1)] = "Backface");
      })(n || (n = {}));
      class l extends i._J {
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
              let t = (0, i.RH)(e.color, { r: 0, g: 0, b: 0 });
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
      (0, a.Cg)([s.o], l.prototype, "buildNode", null);
    },
    5459: (e, t, r) => {
      "use strict";
      r.d(t, { b: () => s });
      var n = r(1635),
        a = r(3496),
        i = r(3236);
      class s extends a._J {
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
      (0, n.Cg)([i.o], s.prototype, "buildNode", null);
    },
    8715: (e, t, r) => {
      "use strict";
      r.d(t, { L: () => s });
      var n = r(1635),
        a = r(3496),
        i = r(3236);
      class s extends a._J {
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
            (r.properties["min-target-scale"] = this.props.min_target_scale),
            (r.properties["max-target-scale"] = this.props.max_target_scale),
            (r.properties.displacement = this.props.displacement),
            [e, r]
          );
        }
      }
      (0, n.Cg)([i.o], s.prototype, "buildNode", null);
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
        a = r(3725),
        i = r(5723);
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
                : a._E);
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
        createSgNode(e) {
          return (0, i.Tu)(this.getNodeType(), e);
        }
        getCurrentRootElement() {
          return this.m_domRef.current;
        }
        componentDidMount() {
          this.m_buildNodeOverride &&
            (this.m_domRef.current.buildNode = this.m_buildNodeOverride),
            (0, i.my)();
        }
        componentDidUpdate() {
          (0, i.my)();
        }
        componentWillUnmount() {
          (0, i.Lx)(this.m_SGID),
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
        Em: () => V,
        Lx: () => E,
        Oe: () => w,
        Tu: () => d,
        X4: () => m,
        bl: () => M,
        my: () => D,
        nX: () => C,
        w5: () => T,
      });
      var n = r(1635),
        a = r(2824);
      function i(e, t) {
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
              a = null;
            switch (t.nodeName.toUpperCase()) {
              case "VSG-TRANSFORM":
                (a = d("transform", t)),
                  (a.properties.translation = i(t, "translation")),
                  (a.properties.rotation = i(t, "rotation")),
                  (a.properties.scale = i(t, "scale")),
                  (a.properties["curvature-pitch"] = s(t, "curvature-pitch")),
                  (a.properties["transform-path"] = c(t, "transform-path")),
                  (a.properties["projection-constraint"] = o(
                    t,
                    "projection-constraint",
                  )),
                  (a.properties["invert-parent-panel-pitch"] = l(
                    t,
                    "invert-parent-panel-pitch",
                  )),
                  (a.properties["ignore-parent-scale"] = l(
                    t,
                    "ignore-parent-scale",
                  )),
                  (a.properties["parent-path"] = c(t, "parent-path")),
                  (a.properties["parent-origin"] = c(t, "parent-origin")),
                  (a.properties["parent-id"] = u(t, "parent-id"));
                break;
              case "VSG-TRACKING-STATE-VISIBILITY":
                (a = d("trackingstatevisibility", t)),
                  (a.properties["visible-0dof"] = l(t, "visible-0dof")),
                  (a.properties["visible-3dof"] = l(t, "visible-3dof")),
                  (a.properties["visible-6dof"] = l(t, "visible-6dof"));
                break;
              case "VSG-ELASTIC-HEAD-TRANSFORM":
                (a = d("elasticheadtransform", t)),
                  (a.properties["start-angle-threshold"] = s(
                    t,
                    "start-angle-threshold",
                  )),
                  (a.properties["stop-angle-threshold"] = s(
                    t,
                    "stop-angle-threshold",
                  )),
                  (a.properties["ease-in-time"] = s(t, "ease-in-time")),
                  (a.properties["ease-in-power"] = s(t, "ease-in-power")),
                  (a.properties["ease-out-angle-threshold"] = s(
                    t,
                    "ease-out-angle-threshold",
                  )),
                  (a.properties["ease-out-power"] = s(t, "ease-out-power")),
                  (a.properties["min-angular-velocity"] = s(
                    t,
                    "min-angular-velocity",
                  )),
                  (a.properties["max-angular-velocity"] = s(
                    t,
                    "max-angular-velocity",
                  )),
                  (a.properties["lock-to-horizon"] = l(t, "lock-to-horizon")),
                  (a.properties["translation-behavior"] = o(
                    t,
                    "translation-behavior",
                  ));
                break;
              case "VSG-LINE":
                (a = d("line", t)),
                  (a.properties["target-id"] = u(t, "target-id")),
                  (a.properties.thickness = s(t, "thickness")),
                  (a.properties["start-buffer"] = s(t, "start-buffer")),
                  (a.properties["end-buffer"] = s(t, "end-buffer"));
                break;
              case "VSG-LINE-CONSTRAINED-TRANSFORM":
                (a = d("line-constrained-transform", t)),
                  (a.properties["target-id"] = u(t, "target-id")),
                  (a.properties["source-id"] = u(t, "source-id")),
                  (a.properties["source-distance"] = s(t, "source-distance")),
                  (a.properties["target-limit"] = s(t, "target-limit"));
                break;
              case "VSG-CALLOUT-TRANSFORM":
                (a = d("callout-transform", t)),
                  (a.properties.offset = i(t, "offset"));
                break;
              case "VSG-HEAD-FACING-TRANSFORM":
                a = d("head-facing-transform", t);
                break;
              case "VSG-PIN-TO-VIEW-TRANSFORM":
                (a = d("pin-to-view-transform", t)),
                  (a.properties["offscreen-z-depth"] = s(
                    t,
                    "offscreen-z-depth",
                  )),
                  (a.properties["off-axis-limit"] = s(t, "off-axis-limit")),
                  (a.properties["transition-limit"] = s(t, "transition-limit"));
                break;
              case "VSG-GRAB-TRANSFORM":
                (a = d("grab-transform", t)),
                  (a.properties["parent-path"] = c(t, "parent-path")),
                  (a.properties.translation = i(t, "translation")),
                  (a.properties.rotation = i(t, "rotation")),
                  (a.properties.scale = i(t, "scale")),
                  (a.properties["should-head-align"] = l(
                    t,
                    "should-head-align",
                  )),
                  (a.properties["stop-distance"] = s(t, "stop-distance")),
                  (a.properties["start-angle"] = s(t, "start-angle")),
                  (a.properties["start-quat-difference"] = s(
                    t,
                    "start-quat-difference",
                  )),
                  (a.properties["stop-quat-difference"] = s(
                    t,
                    "stop-quat-difference",
                  )),
                  (a.properties["scale-margin"] = s(t, "scale-margin")),
                  (a.properties["lerp-speed"] = s(t, "lerp-speed")),
                  (a.properties["min-distance"] = s(t, "min-distance")),
                  (a.properties["max-distance"] = s(t, "max-distance")),
                  (a.properties["one-to-one-radius"] = s(
                    t,
                    "one-to-one-radius",
                  )),
                  (a.properties["max-x-squared-contribution"] = s(
                    t,
                    "max-x-squared-contribution",
                  )),
                  (a.properties["acceleration-factor-x-coefficient"] = s(
                    t,
                    "acceleration-factor-x-coefficient",
                  )),
                  (a.properties["acceleration-factor-x-squared-coefficient"] =
                    s(t, "acceleration-factor-x-squared-coefficient")),
                  (a.properties["acceleration-factor-scale-term"] = s(
                    t,
                    "acceleration-factor-scale-term",
                  )),
                  (a.properties["remote-transform-tx"] = s(
                    t,
                    "remote-transform-tx",
                  )),
                  (a.properties["reset-on-recenter"] = l(
                    t,
                    "reset-on-recenter",
                  ));
            }
            return [n, a];
          })(e, t),
          a = [];
        for (let e = 0; e < t.children.length; e++) {
          let n = t.children.item(e);
          if (n.children) {
            let e = p(r, n);
            e && (a = a.concat(e));
          }
        }
        return r.bShouldAbort
          ? null
          : n
            ? (a.length > 0 && (n.children = a), [n])
            : a.length > 0
              ? 1 == a.length
                ? a
                : [{ children: a }]
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
            : C(T(), e)
          : null;
      }
      function T() {
        var e;
        return null !==
          (e =
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VROverlay.ThisOverlayKey()) && void 0 !== e
          ? e
          : h;
      }
      function E(e) {
        b.push(e), D();
      }
      function V() {
        _ = !0;
      }
      function D() {
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
                  (y = new a._n()),
                  yield y.Init("sg_mailbox", v));
                let r = {
                  type: "update_scene_graph",
                  owning_overlay_key: T(),
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
        a = r(3496),
        i = r(3236);
      class s extends a._J {
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
      (0, n.Cg)([i.o], s.prototype, "buildNode", null);
    },
    1230: (e, t, r) => {
      "use strict";
      r.d(t, { e: () => s });
      var n = r(1635),
        a = r(3496),
        i = r(3236);
      class s extends a._J {
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
      (0, n.Cg)([i.o], s.prototype, "buildNode", null);
    },
    4397: (e, t, r) => {
      "use strict";
      var n = r(1635),
        a = r(3496),
        i = r(3236);
      class s extends a._J {
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
      (0, n.Cg)([i.o], s.prototype, "buildNode", null);
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
      function a(e, t) {
        return { x: e.x + t.x, y: e.y + t.y, z: e.z + t.z };
      }
      function i(e, t, r) {
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
          a = Math.cos(t),
          i = Math.cos(r),
          s = Math.cos(n),
          o = Math.sin(t),
          l = Math.sin(r),
          c = Math.sin(n);
        return {
          w: a * i * s + o * l * c,
          x: o * i * s + a * l * c,
          y: a * l * s - o * i * c,
          z: a * i * c - o * l * s,
        };
      }
      function p(e) {
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
      function h(e, t) {
        let r = 2 * (e.y * t.z - e.z * t.y),
          n = 2 * (e.z * t.x - e.x * t.z),
          a = 2 * (e.x * t.y - e.y * t.x);
        return {
          x: t.x + e.w * r + e.y * a - e.z * n,
          y: t.y + e.w * n + e.z * r - e.x * a,
          z: t.z + e.w * a + e.x * n - e.y * r,
        };
      }
      function g(e, t, r) {
        return [
          [e.x, e.y, e.z],
          [t.x, t.y, t.z],
          [r.x, r.y, r.z],
        ];
      }
      function v(e) {
        return h(e.rotation, { x: 0, y: 0, z: -1 });
      }
      function _(e) {
        let t = d(e);
        return { x: e.x / t, y: e.y / t, z: e.z / t };
      }
      function b(e, t) {
        return {
          x: e.y * t.z - e.z * t.y,
          y: e.z * t.x - e.x * t.z,
          z: e.x * t.y - e.y * t.x,
        };
      }
      function S(e) {
        const t = { x: 0, y: 1, z: 0 };
        let r = v(e);
        (r.y = 0), (r = _(r));
        const n = g(_(b(r, t)), t, { x: -(a = r).x, y: -a.y, z: -a.z });
        var a;
        return { translation: e.translation, rotation: p(n), scale: e.scale };
      }
      r.d(t, {
        CU: () => a,
        Fb: () => m,
        JZ: () => o,
        Ld: () => p,
        NH: () => u,
        O6: () => l,
        QB: () => s,
        Se: () => i,
        Uj: () => d,
        e_: () => _,
        oN: () => b,
        o_: () => v,
        p0: () => S,
        qF: () => g,
        tx: () => c,
        vx: () => n,
      });
    },
    3389: (e, t, r) => {
      "use strict";
      r.d(t, { C: () => i });
      var n = r(1635),
        a = r(2824);
      class i {
        constructor() {
          (this.m_mailbox = new a._n()),
            this.m_mailbox.Init("sgtransformcache");
        }
        static getInstance() {
          return i.instance || (i.instance = new i()), i.instance;
        }
        requestSGTransform(e, t = 0) {
          return new Promise((r, i) =>
            (0, n.sH)(this, void 0, void 0, function* () {
              let n = { type: "transform_request", id: e, flPushDistance: t },
                s = yield this.m_mailbox.SendMessageAndWaitForResponse(
                  a.pg,
                  n,
                  "transform_response",
                );
              s.id == e && s.transform
                ? r(s.transform)
                : i("requestSGTransform failed");
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
        a = r(6540),
        i = r(3236),
        s = r(4963),
        o = r(6090),
        l = r(6189),
        c = r(1139);
      class u extends a.Component {
        constructor() {
          super(...arguments), (this.m_ref = a.createRef());
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
            a.cloneElement(a.createElement("div", e, this.props.children), {
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
      (0, n.Cg)([i.o], u.prototype, "onMouseDown", null),
        (0, n.Cg)([i.o], u.prototype, "onMouseUp", null),
        (0, n.Cg)([i.o], u.prototype, "onClick", null),
        (0, n.Cg)([i.o], u.prototype, "onMouseEnter", null),
        (0, n.Cg)([i.o], u.prototype, "onMouseLeave", null);
      class d extends a.Component {
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
          return a.cloneElement(
            a.createElement("div", this.props, this.props.children),
            { onClick: this.onClick },
          );
        }
      }
      (d.k_nSoundEffectSuppressionPeriod = 4),
        (d.k_nSoundEffectDelay = 2),
        (d.s_nSuppressingSoundEffectsTimeout = 0),
        (d.s_nPlaySoundEffectTimeout = 0),
        (0, n.Cg)([i.o], d.prototype, "onClick", null),
        (0, n.Cg)([i.o], d, "endSoundEffectSuppression", null),
        (0, n.Cg)([i.o], d, "playSoundEffect", null);
    },
    4493: (e, t, r) => {
      "use strict";
      r.d(t, { AN: () => v, Sr: () => n, ms: () => g });
      var n,
        a = r(1635),
        i = r(6540),
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
      class h extends i.Component {
        constructor() {
          super(...arguments),
            (this.m_refView = i.createRef()),
            (this.m_refScrollPanel = i.createRef()),
            (this.m_refSelectedButton = i.createRef()),
            (this.m_refParentPortal = i.createRef()),
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
            ? i.createElement("div", {
                className: "Separator",
                key: "separator" + t,
              })
            : null;
        }
        renderDropdownValueItem(e) {
          return i.createElement(
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
          return i.createElement(
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
            i.createElement(
              m.wM,
              {
                ref: this.m_refView,
                shouldDismissOnClickAnywhere: !0,
                shouldDismissOnClickInViewStack: !0,
                fadesViewsBelow: !1,
                onDismissRequested: this.props.onDismissRequested,
                className: (0, o.FH)("Dropdown", "Popover"),
              },
              i.createElement(
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
          const a =
              null === (e = this.m_refView.current) || void 0 === e
                ? void 0
                : e.div,
            i =
              null === (t = this.m_refScrollPanel.current) || void 0 === t
                ? void 0
                : t.div;
          if (!a || !i) return;
          const s =
              null !==
                (n =
                  null === (r = this.props.buttonRef.current) || void 0 === r
                    ? void 0
                    : r.elem.clientWidth) && void 0 !== n
                ? n
                : 0,
            o = this.m_elemBoundingParent.getBoundingClientRect();
          (i.style.minWidth = s + "px"),
            (i.style.maxWidth = o.width - 2 * h.POPOVER_BOUNDS_MARGIN + "px"),
            (i.style.maxHeight = o.height - 2 * h.POPOVER_BOUNDS_MARGIN + "px");
          const l = this.props.buttonRef.current.elem.getBoundingClientRect();
          let c = l.left,
            u = l.top;
          const d = a.getBoundingClientRect(),
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
            (a.scrollTop = u - b),
            (a.style.transform =
              "translateX(" + c + "px) translateY(" + u + "px)");
        }
      }
      (h.POPOVER_BOUNDS_MARGIN = 10),
        (0, a.Cg)([l.o], h.prototype, "renderDropdownItem", null),
        (0, a.Cg)([l.o], h.prototype, "renderDropdownSpecialItem", null),
        (0, a.Cg)([l.o], h.prototype, "renderDropdownValueItem", null),
        (0, a.Cg)([l.o], h.prototype, "setValue", null),
        (0, a.Cg)([l.o], h.prototype, "updateLayout", null);
      class g extends i.Component {
        constructor(e) {
          super(e),
            (this.m_refButton = i.createRef()),
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
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
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
              i.createElement("span", { ref: this.m_scrollWatcher.ref }, r),
            ),
            this.state.bShowingOptions &&
              i.createElement(
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
      (0, a.Cg)([l.o], g.prototype, "onParentScroll", null),
        (0, a.Cg)([c.computed], g.prototype, "value", null),
        (0, a.Cg)([c.computed], g.prototype, "selectedItem", null),
        (0, a.Cg)([l.o], g.prototype, "showDropdown", null),
        (0, a.Cg)([l.o], g.prototype, "hideDropdown", null);
      class v extends i.Component {
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
            i.createElement(g, Object.assign({}, e))
          );
        }
      }
      (0, a.Cg)([l.o], v.prototype, "onChange", null);
    },
    7600: (e, t, r) => {
      "use strict";
      r.d(t, { cb: () => l, tH: () => u });
      var n = r(1635),
        a = r(6540),
        i = r(6090),
        s = r(1286),
        o = r(3236);
      const l =
        ((c = (e) => {
          throw new Error(e.errorStr);
        }),
        function (e) {
          return a.createElement(
            u,
            null,
            a.createElement(c, Object.assign({}, e)),
          );
        });
      var c;
      class u extends a.Component {
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
            { error: n, identifierHash: i, lastErrorKey: s } = this.state;
          return n && r == s
            ? void 0 !== t
              ? "function" == typeof t
                ? t(n.error)
                : t
              : u.sm_ErrorReportingStore &&
                  u.sm_ErrorReportingStore.reporting_enabled
                ? a.createElement(p, {
                    error: n,
                    identifierHash: i,
                    store: u.sm_ErrorReportingStore,
                    onRefresh: this.Reset,
                  })
                : a.createElement(m, { error: n, onDismiss: this.Reset })
            : e || null;
        }
      }
      function d(e) {
        const { enabled: t } = e,
          [r, n] = a.useState(t),
          [i, o] = a.useState(s.b);
        a.useEffect(() => {
          const e = setTimeout(() => {
            r &&
              (i > 1
                ? o(i - 1)
                : (console.warn(
                    "Auto-reloading due to triggered ErrorBoundary...",
                  ),
                  window.location.reload()));
          }, 1e3);
          return () => clearTimeout(e);
        }, [r, i]);
        const l = a.useCallback(() => {
          console.log("Auto-reload canceled."), n(!1);
        }, []);
        return (
          a.useEffect(() => {
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
              ? a.createElement(
                  a.Fragment,
                  null,
                  a.createElement(
                    v,
                    null,
                    "Reloading UI in ",
                    i,
                    " seconds...",
                  ),
                  "   ",
                  a.createElement(
                    "span",
                    {
                      style: { textDecoration: "underline", cursor: "pointer" },
                      onClick: l,
                    },
                    "Cancel",
                  ),
                  a.createElement("br", null),
                )
              : a.createElement(
                  a.Fragment,
                  null,
                  a.createElement(v, null, "Auto-reload canceled."),
                  "   ",
                  a.createElement(
                    "span",
                    {
                      style: { textDecoration: "underline", cursor: "pointer" },
                      onClick: () => window.location.reload(),
                    },
                    "Reload now",
                  ),
                  a.createElement("br", null),
                )
            : null
        );
      }
      (0, n.Cg)([o.o], u.prototype, "Reset", null);
      const m = ({ error: e, onDismiss: t }) => {
          let r = e.error ? e.error.stack : "Stack missing",
            n = e.info ? e.info.componentStack : "",
            s = (e.error && e.error.message) || "unknown error";
          const o = a.useContext(i.GM);
          return a.createElement(
            h,
            null,
            a.createElement(v, null, 'Error: "', s, '"'),
            "   ",
            a.createElement(
              "span",
              {
                style: { textDecoration: "underline", cursor: "pointer" },
                onClick: t,
              },
              "(x) Dismiss",
            ),
            a.createElement("br", null),
            a.createElement(d, { enabled: null == o }),
            a.createElement(_, null, r),
            a.createElement(_, null, "The error occurred while rendering:", n),
          );
        },
        p = (e) => {
          const { error: t, onRefresh: r, identifierHash: n, store: s } = e,
            o = (t.error && t.error.message) || "unknown error",
            l = `${s.product}_${s.version}_${n}`,
            c = a.useContext(i.GM);
          return a.createElement(
            h,
            null,
            a.createElement(
              v,
              null,
              "Something went wrong while displaying this content. ",
              a.createElement(
                "span",
                {
                  style: { textDecoration: "underline", cursor: "pointer" },
                  onClick: r,
                },
                "Refresh",
              ),
            ),
            a.createElement(d, { enabled: null == c }),
            a.createElement(_, null, "Error Reference: ", l),
            a.createElement(_, null, o),
          );
        };
      function h(e) {
        return a.useContext(i.GM) || (0, i.R$)() != i.OH.Overlay
          ? a.createElement(g, Object.assign({}, e))
          : a.createElement(
              i.dL,
              {
                parent_path: "/user/head",
                translation: { y: -0.5, z: -0.9 },
                rotation: { x: -20 },
              },
              a.createElement(
                i.Zk,
                {
                  debug_name: "vr_error_container",
                  meters_per_pixel: 75e-5,
                  origin: { x: -0.5, y: -1 },
                  interactive: !0,
                },
                a.createElement(g, Object.assign({}, e)),
              ),
            );
      }
      const g = ({ children: e }) =>
          a.createElement(
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
          a.createElement(
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
          a.createElement(
            "pre",
            { style: { marginTop: "15px", opacity: 0.7, userSelect: "auto" } },
            e,
          );
    },
    6731: (e, t, r) => {
      "use strict";
      r.d(t, { vw: () => p, wM: () => m });
      var n,
        a = r(1635),
        i = r(6540),
        s = r(3236),
        o = r(1139),
        l = r(7813),
        c = r(1370);
      const u = i.createContext(null);
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
      (0, a.Cg)([s.o], d.prototype, "cleanup", null),
        (0, a.Cg)([s.o], d.prototype, "onWindowKeyDown", null),
        (0, a.Cg)([s.o], d.prototype, "onWindowClick", null),
        (0, a.Cg)([l.computed], d.prototype, "size", null),
        (0, a.Cg)([l.action.bound], d.prototype, "dismissTopView", null),
        (0, a.Cg)([l.computed], d.prototype, "hasViews", null),
        (0, a.Cg)([l.computed], d.prototype, "bottomView", null),
        (0, a.Cg)([l.computed], d.prototype, "topView", null),
        (0, a.Cg)([l.action], d.prototype, "pushView", null),
        (0, a.Cg)([l.action], d.prototype, "removeView", null);
      let m = (n = class extends i.Component {
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
            (this.m_viewRef = i.createRef()),
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
            c = (0, a.Tt)(e, [
              "shouldDismissOnClickAnywhere",
              "shouldDismissOnClickInViewStack",
              "fadesViewsBelow",
              "onDismissRequested",
            ]),
            d = i.createElement(
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
            ? i.createElement(u.Provider, { value: this.viewStack }, d)
            : d;
        }
      });
      (m.k_FadedForModalClassName = "FadedForModal"),
        (m.contextType = u),
        (0, a.Cg)([l.observable], m.prototype, "m_ViewStack", void 0),
        (0, a.Cg)([l.computed], m.prototype, "isTopView", null),
        (0, a.Cg)([l.computed], m.prototype, "viewLevel", null),
        (0, a.Cg)([l.computed], m.prototype, "viewShouldFadeForModal", null),
        (0, a.Cg)([s.o], m.prototype, "dismissView", null),
        (0, a.Cg)([l.action.bound], m.prototype, "addToViewStack", null),
        (0, a.Cg)([l.action.bound], m.prototype, "removeFromViewStack", null),
        (m = n = (0, a.Cg)([c.PA], m));
      const p = i.forwardRef((e, t) =>
        i.createElement(m, Object.assign({}, e, { ref: t }), e.children),
      );
      let h = class extends i.Component {
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
          return i.createElement(
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
      h = (0, a.Cg)([c.PA], h);
    },
    6189: (e, t, r) => {
      "use strict";
      r.d(t, { W: () => s });
      var n = r(6090);
      const a = Object.values(n.en).filter((e) => "number" == typeof e);
      function i(e, t) {
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
                i(this.m_mapSuppressedHaptics.get(e), r),
              )
            : this.m_mapSuppressedHaptics.set(e, r);
        }
        suppressHapticsExcept(e, t) {
          const r = new Set(t),
            n = new Set(a.filter((e) => !r.has(e)));
          this.m_mapSuppressedHaptics.has(e)
            ? this.m_mapSuppressedHaptics.set(
                e,
                i(this.m_mapSuppressedHaptics.get(e), n),
              )
            : this.m_mapSuppressedHaptics.set(e, n);
        }
        unsuppressHaptics(e, t) {
          const r = new Set(t);
          var n, a;
          void 0 === t
            ? this.m_mapSuppressedHaptics.delete(e)
            : this.m_mapSuppressedHaptics.has(e) ||
              this.m_mapSuppressedHaptics.set(
                e,
                ((n = this.m_mapSuppressedHaptics.get(e)),
                (a = r),
                new Set([...n].filter((e) => !a.has(e)))),
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
        a = r(961);
      const i = (e) =>
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
              n.createElement(i, { x: 0, y: 0, width: e.width, height: r.y }),
              n.createElement(i, {
                x: 0,
                y: r.y + r.height,
                width: e.width,
                height: e.height - r.height - r.y,
              }),
              n.createElement(i, {
                x: 0,
                y: r.y,
                width: r.x,
                height: r.height,
              }),
              n.createElement(i, {
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
              n.createElement(i, {
                x: 0,
                y: 0,
                width: e.width,
                height: e.height,
              }),
            );
          return a.createPortal(t, document.body);
        }
      }
    },
    7379: (e, t, r) => {
      "use strict";
      r.d(t, { a: () => u });
      var n,
        a = r(1635),
        i = r(6540),
        s = r(1139),
        o = r(1370),
        l = r(6731),
        c = r(6575);
      let u = (n = class extends i.Component {
        constructor(e) {
          super(e),
            (this.m_refParentPortal = i.createRef()),
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
            i.createElement(
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
              i.createElement(
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
      (u.MODAL_BOUNDS_MARGIN = 10), (u = n = (0, a.Cg)([o.PA], u));
    },
    5615: (e, t, r) => {
      "use strict";
      r.d(t, { D: () => n, M: () => h });
      var n,
        a,
        i = r(1635),
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
        })(a || (a = {}));
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
            (this.state = { eScrollState: a.Default, bAtEdge: null }),
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
          this.setState({ eScrollState: a.MouseDown }),
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
            case a.MouseDown:
              if (this.props.scrollDirection == n.None) break;
              Math.abs(this.scrollsHorizontally ? t.x : t.y) >
                (this.scrollsHorizontally
                  ? h.MIN_HORIZONTAL_DRAG_DISTANCE
                  : h.MIN_VERTICAL_DRAG_DISTANCE) && this.startDragging(e);
              break;
            case a.Dragging:
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
          if (this.state.eScrollState != a.Thrown) return;
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
            i = Math.min(5e4, Math.max(850, n));
          this.m_thrownVelocityPerSecond = {
            x: this.m_thrownVelocityPerSecond.x - t * i * e,
            y: this.m_thrownVelocityPerSecond.y - r * i * e,
          };
          Math.sign(this.m_thrownVelocityPerSecond.x) != t ||
          Math.sign(this.m_thrownVelocityPerSecond.y) != r ||
          (0, l.NH)(this.m_thrownVelocityPerSecond) <= 1
            ? this.setState({ eScrollState: a.Default })
            : this.requestNextAnimationFrame();
        }
        startDragging(e) {
          h.isScrollingSuppressed ||
            ((0, l.R$)() == l.OH.Overlay &&
              (this.setState({ eScrollState: a.Dragging }),
              (this.m_initialMousePosition = e),
              (this.m_initialScrollPosition = {
                x: this.m_ref.current.scrollLeft,
                y: this.m_ref.current.scrollTop,
              }),
              this.logScrollSample()));
        }
        startThrowing() {
          (this.m_thrownVelocityPerSecond = this.calculateThrowStartVelocity()),
            this.setState({ eScrollState: a.Thrown }),
            this.requestNextAnimationFrame();
        }
        cancelThrowing(e) {
          this.setState(
            (e, t) =>
              e.eScrollState == a.Thrown
                ? (window.cancelAnimationFrame(
                    this.m_animationFrameRequestHandle,
                  ),
                  { eScrollState: a.Default })
                : null,
            e,
          );
        }
        get isThrown() {
          return this.state.eScrollState == a.Thrown;
        }
        calculateThrowStartVelocity() {
          let e = null,
            t = 0;
          for (let r = 1; r < this.m_mostRecentScrollSamples.length; r++) {
            const n = this.m_mostRecentScrollSamples[r - 1],
              a = this.m_mostRecentScrollSamples[r],
              i = (a.timeMs - n.timeMs) / 1e3,
              s = {
                x: (a.scrollPosition.x - n.scrollPosition.x) / i,
                y: (a.scrollPosition.y - n.scrollPosition.y) / i,
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
            : this.setState({ eScrollState: a.Default }),
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
            this.state.eScrollState == a.Dragging && s.createElement(p.j, null),
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
          this.state.eScrollState == a.Thrown ? this.cancelThrowing(t) : t();
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
        (0, i.Cg)([o.o], h.prototype, "onWindowMouseMove", null),
        (0, i.Cg)([o.o], h.prototype, "onWindowMouseUp", null),
        (0, i.Cg)([o.o], h.prototype, "onMouseDown", null),
        (0, i.Cg)([o.o], h.prototype, "onMouseUp", null),
        (0, i.Cg)([o.o], h.prototype, "onScroll", null),
        (0, i.Cg)([o.o], h.prototype, "onAnimationFrame", null),
        (0, i.Cg)([d.computed], h, "isScrollingSuppressed", null),
        (0, i.Cg)([d.computed], h, "userIsDragging", null),
        (0, i.Cg)([d.action], h, "suppressScrolling", null),
        (0, i.Cg)([d.action], h, "unsuppressScrolling", null);
      class g {
        constructor() {
          (this.m_CurrentlyDraggingPanel = null), (0, d.makeObservable)(this);
        }
      }
      (0, i.Cg)(
        [d.observable],
        g.prototype,
        "m_CurrentlyDraggingPanel",
        void 0,
      );
      const v = new g();
    },
    917: (e, t, r) => {
      "use strict";
      r.d(t, { Ap: () => _, Te: () => i, uJ: () => a });
      var n,
        a,
        i,
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
      })(a || (a = {})),
        (function (e) {
          (e[(e.Below = 0)] = "Below"), (e[(e.OnHandle = 1)] = "OnHandle");
        })(i || (i = {}));
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
            a = this.isVertical ? r.height : r.width,
            i = this.isVertical ? t.height : t.width;
          return ((this.isVertical ? n - e + n : e) - (n + a / 2)) / (i - a);
        }
        updateValueForMousePosition(e, t) {
          const r = this.normalizedValue;
          let a =
            this.getNormalizedValueForMousePosition(e) + this.m_nValueOffset;
          const i = this.getClosestSnappableDetent(a),
            s = this.normalizedDetents;
          for (let e = 0; e < s.length; e++) {
            const t = s[e];
            Math.abs(a - t) > n.DETENT_UNIGNORE_DISTANCE &&
              this.m_setDetentsToIgnore.delete(t);
          }
          t && i === r && this.m_setDetentsToIgnore.add(i),
            null === i || this.m_setDetentsToIgnore.has(i) || (a = i),
            this.m_nCurrentNearestSnappableDetent !== i &&
              ((this.m_dragStartTime = new Date()),
              null !== this.m_nCurrentNearestSnappableDetent &&
                this.m_setDetentsToIgnore.add(
                  this.m_nCurrentNearestSnappableDetent,
                ),
              null === i ||
                this.m_setDetentsToIgnore.has(i) ||
                h.W.Instance.triggerHaptic(u.en.Snap)),
            (this.m_nCurrentNearestSnappableDetent = i),
            this.setNormalizedValue(a);
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
          const a = this.isVertical ? e.y : e.x;
          this.setState({ m_bSliding: !0 }),
            this.updateValueForMousePosition(a, !0),
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
          var e, t, r, n, a;
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
              null !== (a = this.props.interactionEndSoundEffect) &&
                void 0 !== a
                ? a
                : d.j.GrabRelease,
            ),
            g.M.unsuppressScrolling(this.m_sScrollSuppressedIdentifier));
        }
        getClosestSnappableDetent(e) {
          const t = this.normalizedDetents;
          t.sort((t, r) => (Math.abs(e - t) > Math.abs(e - r) ? 1 : -1));
          for (let r = 0; r < t.length; r++) {
            const a = t[r];
            if (Math.abs(e - a) < n.DETENT_SNAP_DISTANCE) return a;
          }
          return null;
        }
        get styleVariant() {
          return void 0 === this.props.styleVariant
            ? a.Value
            : this.props.styleVariant;
        }
        get valueStyleVariant() {
          return void 0 === this.props.valueStyleVariant
            ? i.Below
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
              a = Math.abs(n - r) < 1e-5 ? 1 : 1 - (1 % r);
            (0 == e || Math.abs(e - a) < 0.001) &&
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
          const a = this.normalizedToExternal(e);
          this.props.onChange && this.props.onChange(a);
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
            r = this.styleVariant == a.Value && t,
            n = r && this.valueStyleVariant == i.OnHandle,
            s = r && this.valueStyleVariant == i.Below,
            l = this.styleVariant == a.Value && !n,
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
                            this.props.styleVariant == a.Color ? t : null,
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
                  ["Color", this.styleVariant == a.Color],
                  ["Sliding", this.state.m_bSliding],
                  ["Disabled", !1 === this.props.enabled],
                  ["ValueOnHandle", n],
                  this.props.additionalClassName,
                ),
                style: {
                  "--slider-value": c,
                  "--slider-color":
                    this.props.styleVariant == a.Color
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
        a = r(1635),
        i = r(6090);
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
          if (!((0, i.R$)() != i.OH.Overlay || this.m_mapSoundElems.size > 0))
            for (let e in n) isNaN(Number(e)) || this.loadSounds(Number(e));
        }
        playSound(e) {
          return (0, a.sH)(this, void 0, void 0, function* () {
            if ((0, i.R$)() != i.OH.Overlay) return;
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
            let a = document.createElement("audio");
            return (
              (a.src = `${e}?t=${(new Date()).getTime()}`),
              (a.preload = "auto"),
              (a.volume = null !== (r = t.volume) && void 0 !== r ? r : 1),
              (null === (n = t.bRespectsGlobalVolume) || void 0 === n || n) &&
                (a.volume *= 1),
              a
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
    924: (e, t, r) => {
      "use strict";
      r.d(t, { Sv: () => c });
      var n,
        a,
        i = r(1635),
        s = r(6540),
        o = r(1139),
        l = r(3236);
      !(function (e) {
        e[(e.Fade = 0)] = "Fade";
      })(n || (n = {})),
        (function (e) {
          (e[(e.Hidden = 0)] = "Hidden"),
            (e[(e.Showing = 1)] = "Showing"),
            (e[(e.Shown = 2)] = "Shown"),
            (e[(e.Hiding = 3)] = "Hiding");
        })(a || (a = {}));
      class c extends s.Component {
        constructor(e) {
          super(e),
            (this.m_nNextStateTimeoutHandle = void 0),
            (this.state = { eAnimationState: e.visible ? a.Shown : a.Hidden });
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
          var e, t, r, n, i, s, o, l;
          switch (this.state.eAnimationState) {
            case a.Showing:
              null === (t = (e = this.props).onStartShowing) ||
                void 0 === t ||
                t.call(e);
              break;
            case a.Shown:
              null === (n = (r = this.props).onShown) ||
                void 0 === n ||
                n.call(r);
              break;
            case a.Hiding:
              null === (s = (i = this.props).onStartHiding) ||
                void 0 === s ||
                s.call(i);
              break;
            case a.Hidden:
              null === (l = (o = this.props).onHidden) ||
                void 0 === l ||
                l.call(o);
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
                eAnimationState: this.props.visible ? a.Showing : a.Hiding,
              }));
        }
        static getDerivedStateFromProps(e, t) {
          return {};
        }
        finishAnimation() {
          this.setState((e) => {
            switch (e.eAnimationState) {
              case a.Showing:
                return { eAnimationState: a.Shown };
              case a.Hiding:
                return { eAnimationState: a.Hidden };
            }
            return null;
          });
        }
        render() {
          return this.state.eAnimationState == a.Hidden
            ? null
            : s.createElement(
                "div",
                {
                  className: (0, o.FH)(
                    "ShowHideAnimation",
                    a[this.state.eAnimationState],
                    [
                      "Preset-" + n[this.props.preset],
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
      (0, i.Cg)([l.o], c.prototype, "cancelTimeout", null),
        (0, i.Cg)([l.o], c.prototype, "finishAnimation", null);
    },
    1532: (e, t, r) => {
      "use strict";
      r.d(t, { s: () => c });
      var n = r(1635),
        a = r(3236),
        i = r(2505),
        s = r.n(i),
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
        (0, n.Cg)([a.o], l.prototype, "onSceneApplicationStateChanged", null),
        (0, n.Cg)([o.action], l.prototype, "SetApplicationMap", null),
        (0, n.Cg)([a.o], l.prototype, "QueryApplications", null),
        (0, n.Cg)([a.o], l.prototype, "GetAppImageURL", null),
        (0, n.Cg)([a.o], l.prototype, "GetApp", null),
        (0, n.Cg)([a.o], l.prototype, "GetRecentApps", null),
        (0, n.Cg)([a.o], l.prototype, "GetCurrentSceneProcess", null),
        (0, n.Cg)([a.o], l.prototype, "IsAppAllowedPrivateInputs", null),
        (0, n.Cg)([a.o], l.prototype, "ShouldShowBindingFailureForApp", null);
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
      r.d(t, { l: () => i });
      var n = r(1635),
        a = r(3236);
      class i {
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
      (0, n.Cg)([a.o], i.prototype, "Dispatch", null);
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
                    ? `${e} ${a(t)}`
                    : a(t)
                  : e
              : e,
          "",
        );
      }
      function a(e) {
        return Object.keys(e).reduce(
          (t, r) => (e[r] ? (t ? `${t} ${r}` : r) : t),
          "",
        );
      }
      r.d(t, { A: () => n });
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
        a = r(7813),
        i = r(2505),
        s = r.n(i),
        o = r(3236),
        l = r(3714),
        c = r(6090);
      class u {
        constructor() {
          (this.m_InputState = void 0),
            (this.m_KnownControllerTypes = a.observable.map()),
            (this.m_mailbox = new c._n()),
            (this.m_bUpdateInputStateOnControllerTypChange = !1),
            (0, a.makeObservable)(this);
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
              (0, a.runInAction)(() => {
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
      (0, n.Cg)([a.observable], u.prototype, "m_InputState", void 0),
        (0, n.Cg)(
          [a.observable],
          u.prototype,
          "m_KnownControllerTypes",
          void 0,
        ),
        (0, n.Cg)([o.o], u.prototype, "OnActionBindingsReloaded", null),
        (0, n.Cg)([o.o], u.prototype, "OnControllerTypeChanged", null),
        (0, n.Cg)([a.computed], u.prototype, "ConnectedDevices", null),
        (0, n.Cg)([a.computed], u.prototype, "ControllerTypes", null),
        (0, n.Cg)(
          [a.computed],
          u.prototype,
          "ShouldSendSystemButtonToAllApps",
          null,
        ),
        (0, n.Cg)([a.computed], u.prototype, "ShowHiddenInputs", null),
        (0, n.Cg)([a.computed], u.prototype, "IsSteamAvailable", null),
        (0, n.Cg)([a.computed], u.prototype, "BDevMode", null),
        (0, n.Cg)([a.computed], u.prototype, "IsValid", null),
        (0, n.Cg)([a.computed], u.prototype, "CurrentUserPersonaName", null),
        (0, n.Cg)([o.o], u.prototype, "GetControllerTypeInfo", null),
        (0, n.Cg)([o.o], u.prototype, "LocalizeControllerString", null),
        (0, n.Cg)([o.o], u.prototype, "LocalizeDriverString", null),
        (0, n.Cg)([a.action], u.prototype, "UpdateControllerTypes", null),
        (0, n.Cg)([a.action], u.prototype, "GetInputState", null),
        (0, n.Cg)([a.computed], u.prototype, "KnownControllerTypes", null),
        (0, n.Cg)([o.o], u.prototype, "FindDeviceClassForControllerType", null);
      const d = new u();
      window.inputState = d;
    },
    3804: (e, t, r) => {
      "use strict";
      r.d(t, { E: () => i });
      var n = r(7813);
      function a(e) {
        if (
          ((0, n.isObservable)(e) && (e = (0, n.toJS)(e)),
          null === e || null == e)
        )
          return e;
        if (Array.isArray(e)) return e.map(a);
        if (e instanceof Map) {
          const t = {};
          for (const r of e.keys()) t[r] = a(e.get(r));
          return t;
        }
        if ("object" == typeof e) {
          const t = {};
          for (const r of Object.keys(e)) t[r] = a(e[r]);
          return t;
        }
        return e;
      }
      function i(...e) {
        const [t, ...r] = e;
        return JSON.stringify(a(t), ...r);
      }
    },
    2932: (e, t, r) => {
      "use strict";
      r.d(t, { v: () => c });
      var n = r(1635),
        a = r(6090),
        i = r(3236),
        s = r(3606),
        o = r(2503),
        l = r(1835);
      class c {
        constructor() {
          var e;
          (this.m_mailbox = new a._n()),
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
            case a.OH.Desktop:
              return "desktop";
            case a.OH.Overlay:
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
      (0, n.Cg)([i.o], c.prototype, "onSetDashboardSessionId", null);
      let u = null;
    },
    6575: (e, t, r) => {
      "use strict";
      r.d(t, { b: () => o, l: () => l });
      var n = r(6540),
        a = r(961),
        i = r(1139),
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
                (this.m_elemPortalContainer = (0, i.jE)(
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
                a.createPortal(this.props.children, this.m_elemPortal),
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
        a = r(3236),
        i = r(2505),
        s = r.n(i),
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
          let a = n.value;
          return a.length < 1 ? void 0 : a[0];
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
        (0, n.Cg)([a.o], c.prototype, "AddSubscribedContainer", null),
        (0, n.Cg)([o.action], c.prototype, "UpdateContainer", null),
        (0, n.Cg)([a.o], c.prototype, "GetAllActions", null),
        (0, n.Cg)([a.o], c.prototype, "GetActionValue", null),
        (0, n.Cg)([a.o], c.prototype, "GetAllInputValues", null),
        (0, n.Cg)([a.o], c.prototype, "GetInputValue", null),
        (0, n.Cg)([a.o], c.prototype, "GetScalarInputValue", null),
        (0, n.Cg)([a.o], c.prototype, "GetBooleanInputValue", null);
      const u = new c();
      window.paths = u;
    },
    3924: (e, t, r) => {
      "use strict";
      r.d(t, {
        BT: () => l,
        Sg: () => d,
        Uq: () => o,
        gp: () => i,
        i0: () => u,
        qM: () => a,
        w0: () => s,
        zj: () => c,
      });
      var n = r(5339);
      const a = n.BinaryReader.prototype,
        i = n.BinaryWriter.prototype;
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
        const { proto: r, fields: a } = e,
          i = new r();
        if (null == t) return i;
        for (let e in a) {
          const { n: r, c: s, r: o, d: l, q: c } = a[e];
          if (!t.hasOwnProperty(e)) continue;
          const u = t[e];
          s
            ? o
              ? n.Message.setRepeatedWrapperField(
                  i,
                  r,
                  Array.isArray(u) ? u.map((e) => s.fromObject(e)) : [],
                )
              : n.Message.setWrapperField(i, r, s.fromObject(u))
            : n.Message.setField(i, r, u);
        }
        return i;
      }
      function l(e, t, r) {
        const { proto: a, fields: i } = e;
        let s = {};
        for (let e in i) {
          const { n: a, c: o, r: l, d: c, q: u } = i[e];
          if (o)
            if (l)
              s[e] = n.Message.toObjectList(
                n.Message.getRepeatedWrapperField(r, o, a),
                o.toObject,
                t,
              );
            else {
              const i = n.Message.getWrapperField(r, o, a, u ? 1 : 0);
              i && (s[e] = o.toObject(t, i));
            }
          else {
            const t = n.Message.getFieldWithDefault(
              r,
              a,
              void 0 !== c ? c : null,
            );
            (null !== t || u) && (s[e] = t);
          }
        }
        return t && (s.$jspbMessageInstance = r), s;
      }
      function c(e, t, r) {
        for (; r.nextField() && !r.isEndGroup(); ) {
          const a = e[r.getFieldNumber()];
          if (a) {
            const { n: e, c: i, r: s, d: o, q: l, br: c } = a;
            if (i) {
              const a = new i();
              r.readMessage(a, i.deserializeBinaryFromReader),
                s
                  ? n.Message.addToRepeatedWrapperField(t, e, a, i)
                  : n.Message.setWrapperField(t, e, a);
            } else if (c) {
              const a = c.call(r);
              s
                ? n.Message.addToRepeatedField(t, e, a)
                : n.Message.setField(t, e, a);
            } else
              console.assert(
                !!c,
                `Reader func not set for field number ${e} in class ${i}`,
              ),
                r.skipField();
          } else r.skipField();
        }
        return t;
      }
      function u(e, t, r) {
        const { fields: a } = e;
        for (let e in a) {
          const { n: i, c: s, r: o, d: l, q: c, bw: u } = a[e];
          if (s)
            if (o) {
              const e = n.Message.getRepeatedWrapperField(t, s, i);
              ((e && e.length) || c) &&
                r.writeRepeatedMessage(i, e, s.serializeBinaryToWriter);
            } else {
              const e = n.Message.getWrapperField(t, s, i, c ? 1 : 0);
              e && r.writeMessage(i, e, s.serializeBinaryToWriter);
            }
          else if (u) {
            const e = n.Message.getField(t, i);
            void 0 !== e && u.call(r, i, e);
          } else
            console.assert(
              !!u,
              `Writer func not set for field number ${i} in class ${s}`,
            );
        }
      }
      function d(e) {
        const t = e.proto;
        for (const r in e.fields) {
          const a = e.fields[r],
            { n: i, c: s, r: o, d: l, q: c } = a;
          a.hasOwnProperty("d")
            ? (t.prototype[r] = m(n.Message.getFieldWithDefault, i, l))
            : (t.prototype[r] = s
                ? o
                  ? m(n.Message.getRepeatedWrapperField, s, i)
                  : p(s, i)
                : m(n.Message.getField, i)),
            (t.prototype[`set_${r}`] = h(
              s
                ? o
                  ? n.Message.setRepeatedWrapperField
                  : n.Message.setWrapperField
                : n.Message.setField,
              i,
            )),
            o && (t.prototype[`add_${r}`] = g(i, s));
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
          ? function (r, a) {
              return n.Message.addToRepeatedWrapperField(this, e, r, t, a);
            }
          : function (t, r) {
              n.Message.addToRepeatedField(this, e, t, r);
            };
      }
    },
    8803: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => i });
      const n = new Map(),
        a = new Map();
      function i(e) {
        let t;
        try {
          t = e.getVRPathPropertyKey();
          const r = e.serializeBase64String(),
            i = n.get(t);
          if (i && i == r) return;
          n.set(t, r),
            window.protoPathPropertyDebug && a.set(t, e.toObject()),
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRPathProperties.SetStringPathProperty(t, r);
        } catch (e) {
          throw e;
        }
      }
      (window.protoPathProperties = a), (window.protoPathPropertyDebug = !1);
    },
    921: (e, t, r) => {
      "use strict";
      r.d(t, { D5: () => i, cZ: () => a });
      var n = r(6540);
      function a(e, t) {
        null != e &&
          ("function" == typeof e ? e(t) : "current" in e && (e.current = t));
      }
      function i(e, t) {
        const r = n.useRef(!1);
        n.useLayoutEffect(
          () => () => {
            r.current && a(e, void 0);
          },
          [e],
        ),
          n.useLayoutEffect(() => {
            (t || r.current) && (a(e, t), (r.current = !!t));
          }, [e, t]);
      }
    },
    9728: (e, t, r) => {
      "use strict";
      r.d(t, { G: () => l });
      var n = r(1635),
        a = r(6090),
        i = r(7813),
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
          return l.s_Instance || (l.s_Instance = new l()), l.s_Instance;
        }
        constructor() {
          (this.m_sceneApplicationState = a.HW.None),
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
            (0, i.makeObservable)(this);
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
          t == a.HW.Starting
            ? (this.m_sceneApplicationState == a.HW.Quitting &&
                this.resetLatchedValued(),
              (this.m_sceneApplicationState = t),
              this.updateLatchedValues(),
              this.cancelUnresponsiveTimeout(),
              this.cancelNoAppTimeout())
            : t == a.HW.Quitting
              ? (this.m_sceneApplicationState == a.HW.Starting &&
                  this.resetLatchedValued(),
                (this.m_sceneApplicationState = t),
                this.updateLatchedValues(),
                this.cancelUnresponsiveTimeout(),
                this.cancelNoAppTimeout())
              : t == a.HW.Running
                ? ((this.m_sceneApplicationState = t),
                  this.cancelUnresponsiveTimeout(),
                  this.cancelNoAppTimeout(),
                  this.updateLatchedValues())
                : t == a.HW.None
                  ? (this.cancelUnresponsiveTimeout(),
                    this.m_sceneApplicationState != a.HW.None &&
                      this.startNoAppTimer())
                  : t == a.HW.Waiting &&
                    (this.m_sceneApplicationState != a.HW.Waiting &&
                      this.startUnresponsiveTimer(),
                    this.cancelNoAppTimeout()),
            this.log("updateTransitionState: " + a.HW[t]),
            this.log("this.m_sceneAppKey: " + this.m_sceneAppKey),
            this.log("this.m_sceneAppName: " + this.m_sceneAppName),
            this.log(
              "this.m_sceneApplicationState: " + this.m_sceneApplicationState,
            );
        }
        onUnresponsiveTimeout() {
          window.clearTimeout(this.m_unresponsiveTimeout),
            (this.m_unresponsiveTimeout = void 0),
            (this.m_sceneApplicationState = a.HW.Waiting),
            this.updateLatchedValues();
        }
        onNoAppTimeout() {
          window.clearTimeout(this.m_noAppTimeout),
            (this.m_noAppTimeout = void 0),
            ((null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VRApplications) &&
              VRHTML.VRApplications.GetSceneApplicationState() != a.HW.None) ||
              this.resetLatchedValued();
        }
        updateLatchedValues() {
          if (
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VRApplications
          )
            if (
              VRHTML.VRApplications.GetSceneApplicationState() == a.HW.Starting
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
            (this.m_sceneApplicationState = a.HW.None);
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
        (0, n.Cg)([i.computed], l.prototype, "SceneApplicationState", null),
        (0, n.Cg)([i.computed], l.prototype, "SceneAppName", null),
        (0, n.Cg)([i.computed], l.prototype, "SceneAppKey", null),
        (0, n.Cg)([i.computed], l.prototype, "SceneAppIsHome", null),
        (0, n.Cg)([i.computed], l.prototype, "SceneAppIsVRLink", null),
        (0, n.Cg)(
          [i.observable],
          l.prototype,
          "m_sceneApplicationState",
          void 0,
        ),
        (0, n.Cg)([i.observable], l.prototype, "m_sceneAppName", void 0),
        (0, n.Cg)([i.observable], l.prototype, "m_sceneAppKey", void 0),
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
        a = r(7813),
        i = r(3236);
      class s {
        constructor() {
          (this.m_rgMutualCapabilities = []),
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.RegisterForMutualSteamCapabilitiesChanged(
                this.UpdateCapabilities,
              ),
            this.UpdateCapabilities(),
            (0, a.makeObservable)(this);
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
      (0, n.Cg)([a.observable], s.prototype, "m_rgMutualCapabilities", void 0),
        (0, n.Cg)([i.o], s.prototype, "UpdateCapabilities", null);
      const o = new s();
      window.SteamMutualCapabilities = o;
    },
    3473: (e, t, r) => {
      "use strict";
      r.d(t, { f: () => s });
      var n = r(1635),
        a = r(3236),
        i = r(7813);
      class s {
        static get Instance() {
          return s.s_Instance || (s.s_Instance = new s()), s.s_Instance;
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
            (0, i.makeObservable)(this);
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
      (s.s_Instance = null),
        (0, n.Cg)([i.observable], s.prototype, "m_nVolume", void 0),
        (0, n.Cg)([i.observable], s.prototype, "m_nMirrorVolume", void 0),
        (0, n.Cg)([i.observable], s.prototype, "m_nMicrophoneVolume", void 0),
        (0, n.Cg)([i.observable], s.prototype, "m_bMuted", void 0),
        (0, n.Cg)([i.observable], s.prototype, "m_bMirrorMuted", void 0),
        (0, n.Cg)([i.observable], s.prototype, "m_bMicrophoneMuted", void 0),
        (0, n.Cg)([i.computed], s.prototype, "muted", null),
        (0, n.Cg)([i.computed], s.prototype, "mirrorMuted", null),
        (0, n.Cg)([i.computed], s.prototype, "microphoneMuted", null),
        (0, n.Cg)([i.computed], s.prototype, "volume", null),
        (0, n.Cg)([i.computed], s.prototype, "mirrorVolume", null),
        (0, n.Cg)([i.computed], s.prototype, "microphoneVolume", null),
        (0, n.Cg)([a.o], s.prototype, "toggleMute", null),
        (0, n.Cg)([a.o], s.prototype, "toggleMirrorMute", null),
        (0, n.Cg)([a.o], s.prototype, "toggleMicrophoneMute", null),
        (0, n.Cg)([a.o], s.prototype, "setVolume", null),
        (0, n.Cg)([a.o], s.prototype, "setMirrorVolume", null),
        (0, n.Cg)([a.o], s.prototype, "setMicrophoneVolume", null),
        (0, n.Cg)([a.o], s.prototype, "onSystemVolumeChanged", null);
    },
    4074: (e, t, r) => {
      "use strict";
      r.d(t, { $k: () => c, D7: () => a, Y7: () => s, tC: () => l });
      var n = r(1526);
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
      function i(e) {
        try {
          return { result: e() };
        } catch (e) {
          return { error: e };
        }
      }
      var s;
      !(function (e) {
        (e[(e.Success = 0)] = "Success"),
          (e[(e.HeaderSerializationFailure = 1)] =
            "HeaderSerializationFailure"),
          (e[(e.PayloadSerializationFailure = 2)] =
            "PayloadSerializationFailure"),
          (e[(e.SendFailure = 3)] = "SendFailure");
      })(s || (s = {}));
      class o extends Error {
        constructor(e) {
          var t;
          let r = "";
          switch (null == e ? void 0 : e.origin) {
            case 1:
              r += "Local ";
              break;
            case 2:
              r += "Remote ";
          }
          (r += (0, n.Ut)(
            null !== (t = null == e ? void 0 : e.error) && void 0 !== t ? t : 0,
          )),
            (null == e ? void 0 : e.description) && (r += ": " + e.description),
            super(r),
            (this.error = e);
        }
      }
      class l {
        SetImplementation(e, t) {
          this.m_mapMethods.has(e) &&
            console.error(
              "CVRGamepadUI Message Service already has an existing implementation for method:",
              e,
            ),
            this.m_mapMethods.set(e, t);
        }
        ClearImplementation(e) {
          this.m_mapMethods.delete(e);
        }
        constructor(e, t) {
          (this.m_mapMethods = new Map()),
            (this.m_Endpoint = e),
            (this.m_mapRequestHandlers = t);
        }
        SendErrorResponse(e, t, r) {
          if (null == (null == e ? void 0 : e.message_id)) return;
          const a = new n.iM();
          a.set_error(t),
            a.set_origin(2),
            r instanceof Error
              ? a.set_description(r.message)
              : r && "string" == typeof r && a.set_description(r),
            console.error(
              "Sending VRGamepadUI Message Error Response",
              (0, n.Ut)(t),
              ":",
              a.description(),
            );
          const i = {
              message_id: this.m_Endpoint.CreateVRGamepadUIMessageId(),
              response_to_message_id: e.message_id,
              is_error_response: !0,
            },
            o = this.m_Endpoint.SendVRGamepadUIMessage(i, a);
          o == s.Success ||
            console.error(
              "Failed to send VRGamepadUI Message Error Response:",
              s[o],
              { requestHeader: e, responseHeader: i },
            );
        }
        HandleVRGamepadUIMessageRequest(e, t) {
          console.assert(null == e.response_to_message_id);
          const r = this.m_mapRequestHandlers[e.name];
          if (!r)
            return void this.SendErrorResponse(
              e,
              1,
              `Unknown VRGamepadUI request name: ${e.name}`,
            );
          const n = this.m_mapMethods.get(r.strMethod);
          if (!n)
            return void this.SendErrorResponse(
              e,
              1,
              `Unimplemented VRGamepadUI method: ${r.strMethod}`,
            );
          const a = i(() =>
            r.msgClassRequest_t.deserializeBinary(t).toObject(),
          );
          if ("error" in a) return void this.SendErrorResponse(e, 7, a.error);
          const o = a.result,
            l = i(() => n(o));
          if ("error" in l) return void this.SendErrorResponse(e, 2, l.error);
          let c = l.result;
          null == c && (c = {});
          (c instanceof Promise ? c : Promise.resolve(c)).then(
            (t) => {
              const n = i(() =>
                r.msgClassResponse_t.fromObject(null != t ? t : {}),
              );
              if ("error" in n)
                return void this.SendErrorResponse(e, 6, n.error);
              const a = {
                  message_id: this.m_Endpoint.CreateVRGamepadUIMessageId(),
                  response_to_message_id: e.message_id,
                },
                o = this.m_Endpoint.SendVRGamepadUIMessage(a, n.result);
              if (o == s.Success);
              else
                switch (o) {
                  case s.HeaderSerializationFailure:
                  case s.PayloadSerializationFailure:
                    this.SendErrorResponse(e, 6, "Response " + s[o]);
                    break;
                  default:
                    console.error(
                      "Failed to send VRGamepadUI Message Response:",
                      s[o],
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
      class c {
        constructor(e) {
          (this.m_mapPendingResponses = new Map()), (this.m_Endpoint = e);
        }
        HandleVRGamepadUIMessageResponse(e, t) {
          if (!this.m_mapPendingResponses.has(e.response_to_message_id))
            return void console.error(
              "Received a VRGamepadUI Message Response to a message we weren't awaiting a response for (or we already received one):",
              e,
            );
          const r = this.m_mapPendingResponses.get(e.response_to_message_id);
          if (
            (this.DeletePendingRequest(e.response_to_message_id),
            e.is_error_response)
          ) {
            const a = i(() => n.iM.deserializeBinary(t).toObject());
            if ("error" in a)
              return void console.error(
                "Received a VRGamepadUI Message error response, but couldn't deserialize it.",
                e,
              );
            const s = new o(a.result);
            return (
              console.warn(
                "Received a VRGamepadUI Message error response",
                s.message,
              ),
              void r.fnReject(s)
            );
          }
          const a = i(() =>
            r.msgExpectedResponseClass_t.deserializeBinary(t).toObject(),
          );
          "error" in a
            ? console.error(
                "Received a VRGamepadUI Message response, but couldn't deserialize it.",
                e,
              )
            : r.fnResolve(a.result);
        }
        SendVRGamepadUIRequest(e, t, r) {
          return new Promise((n, a) => {
            const i = (e) => {
              try {
                a(e);
              } catch (e) {
                console.error(
                  "Error rejecting VRGamepadUI Message request call:",
                  e,
                );
              }
            };
            if (!this.m_Endpoint.IsConnected())
              return void i(new o({ error: 4 }));
            const l = this.m_Endpoint.CreateVRGamepadUIMessageId(),
              c = window.setTimeout(() => this.HandleTimeout(l), 5e3);
            this.m_mapPendingResponses.set(l, {
              msgExpectedResponseClass_t: r,
              nTimeoutHandle: c,
              fnResolve: (e) => {
                try {
                  n(e);
                } catch (e) {
                  console.error(
                    "Error resolving VRGamepadUI Message request call:",
                    e,
                  );
                }
              },
              fnReject: i,
            });
            const u = { name: e, message_id: l },
              d = this.m_Endpoint.SendVRGamepadUIMessage(u, t);
            d == s.Success ||
              i(new o({ error: 0, origin: 1, description: "Request " + s[d] }));
          });
        }
        HandleTimeout(e) {
          const t = this.m_mapPendingResponses.get(e);
          this.DeletePendingRequest(e),
            null == t || t.fnReject(new o({ error: 5 }));
        }
        DeletePendingRequest(e) {
          const t = this.m_mapPendingResponses.get(e);
          this.m_mapPendingResponses.delete(e),
            (null == t ? void 0 : t.nTimeoutHandle) &&
              window.clearTimeout(t.nTimeoutHandle);
        }
      }
    },
    1333: (e, t, r) => {
      "use strict";
      r.d(t, {
        Gz: () => d,
        HR: () => _,
        aJ: () => p,
        kP: () => h,
        mO: () => m,
      });
      var n = r(1635),
        a = r(3236),
        i = r(2505),
        s = r.n(i),
        o = r(7813),
        l = r(6090),
        c = r(2503),
        u = r(3606);
      const d = 16,
        m = 0.2,
        p = 5,
        h = 0.02,
        g = "change_route";
      class v {
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
                this.m_mailbox.RegisterHandler(g, this.OnChangeRouteMessage),
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
              a = n.join("/");
            window.location.hash.substring(1) != a &&
              ((window.location.hash = a), (this.route = n));
          } else
            this.m_mailbox.connected &&
              this.m_mailbox.SendMessage(this.MailboxName, {
                type: g,
                page: e,
                section: t,
                sectionParams: r,
              });
        }
        SetDashboardFadeSupression(e, t) {
          this.m_mailbox.connected &&
            this.m_mailbox.SendMessage(c.cQ.k_sDashboardMailboxName, {
              type: c.cQ.k_sSetDashboardFadeSupressionMessage,
              suppress_dashboard_fade: t,
              for_id: e,
            });
        }
        SetDashboardForceBoundsVisible(e, t, r) {
          this.m_mailbox.connected &&
            this.m_mailbox.SendMessage(c.cQ.k_sDashboardMailboxName, {
              type: c.cQ.k_sSetDashboardForceBoundsVisible,
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
            _.GetSettingsInfo().then((e) => {
              this.systemInfo = e;
            }),
            _.GetAppList().then((e) => {
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
          const r = 1e3 * v.SERVER_SETTING_MERGE_DEFER_DURATION;
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
          return Math.floor((p - m + 0.5 * h) / h);
        }
        SliderposToSupersample(e) {
          return e > p ? p : e < m ? m : e;
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
      (v.SERVER_SETTING_MERGE_DEFER_DURATION = 1),
        (0, n.Cg)([o.observable], v.prototype, "connected", void 0),
        (0, n.Cg)([o.observable], v.prototype, "settingsSchema", void 0),
        (0, n.Cg)([o.observable], v.prototype, "settings", void 0),
        (0, n.Cg)([o.observable], v.prototype, "systemInfo", void 0),
        (0, n.Cg)([o.observable], v.prototype, "audioDevices", void 0),
        (0, n.Cg)([o.observable], v.prototype, "apps", void 0),
        (0, n.Cg)([o.observable], v.prototype, "probablyOwnedAppkeys", void 0),
        (0, n.Cg)([o.observable], v.prototype, "showInternalSettings", void 0),
        (0, n.Cg)(
          [o.observable],
          v.prototype,
          "workshopStateChangedCanary",
          void 0,
        ),
        (0, n.Cg)([o.observable], v.prototype, "pendingChanges", void 0),
        (0, n.Cg)([o.observable], v.prototype, "route", void 0),
        (0, n.Cg)([a.o], v.prototype, "OpenWebSocketToHost", null),
        (0, n.Cg)([a.o], v.prototype, "OnWorkshopStateChangedMessage", null),
        (0, n.Cg)([a.o], v.prototype, "OnChangeRouteMessage", null),
        (0, n.Cg)([a.o], v.prototype, "OnAppConfigChangedMessage", null),
        (0, n.Cg)([a.o], v.prototype, "OnRefreshRateChangeMessage", null),
        (0, n.Cg)([o.action.bound], v.prototype, "onHashChanged", null),
        (0, n.Cg)([o.computed], v.prototype, "routePage", null),
        (0, n.Cg)([o.computed], v.prototype, "routePageSection", null),
        (0, n.Cg)([o.computed], v.prototype, "routePageSectionParams", null),
        (0, n.Cg)([o.action], v.prototype, "setRoutePage", null),
        (0, n.Cg)([o.action], v.prototype, "setRoutePageSection", null),
        (0, n.Cg)([o.action], v.prototype, "setRoutePageSectionParams", null),
        (0, n.Cg)([o.action], v.prototype, "setRoute", null),
        (0, n.Cg)([a.o], v.prototype, "SetDashboardFadeSupression", null),
        (0, n.Cg)([a.o], v.prototype, "SetDashboardForceBoundsVisible", null),
        (0, n.Cg)([a.o], v.prototype, "SetRestartRequired", null),
        (0, n.Cg)([a.o], v.prototype, "OnWebSocketOpen", null),
        (0, n.Cg)([a.o], v.prototype, "OnWebSocketClose", null),
        (0, n.Cg)([a.o], v.prototype, "WebSocketSend", null),
        (0, n.Cg)([a.o], v.prototype, "OnWebSocketMessage", null),
        (0, n.Cg)([o.action], v.prototype, "OnVRSettings", null),
        (0, n.Cg)([o.action], v.prototype, "SetSettingValueFromServer", null),
        (0, n.Cg)([o.action], v.prototype, "OnVRSettingsSchema", null),
        (0, n.Cg)([o.action.bound], v.prototype, "ResetSettingsValue", null),
        (0, n.Cg)([o.action], v.prototype, "ResetSettingsValues", null),
        (0, n.Cg)([o.action], v.prototype, "SetSettingsValue", null),
        (0, n.Cg)(
          [o.action],
          v.prototype,
          "SetSettingsStringValueWithoutSchema",
          null,
        ),
        (0, n.Cg)([o.computed], v.prototype, "NumSupersamplingSteps", null);
      const _ = new v();
      window.VRSettingsState = _;
    },
    6646: (e, t, r) => {
      "use strict";
      r.d(t, { X: () => c });
      var n = r(1635),
        a = r(3236),
        i = r(2505),
        s = r.n(i),
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
        (0, n.Cg)([a.o], l.prototype, "OpenWebSocketToHost", null),
        (0, n.Cg)([a.o], l.prototype, "OnWebSocketOpen", null),
        (0, n.Cg)([a.o], l.prototype, "OnWebSocketClose", null),
        (0, n.Cg)([a.o], l.prototype, "WebSocketSend", null),
        (0, n.Cg)([a.o], l.prototype, "OnWebSocketMessage", null),
        (0, n.Cg)(
          [a.o],
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
        a = r(3236),
        i = r(7813),
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
            (0, i.makeObservable)(this);
        }
        Init() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            yield this.Load(),
              (0, i.autorun)(() => this.Save()),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.RegisterForChaperoneStatusEvents(
                  this.onChaperoneStatusEvents,
                ),
              (0, i.reaction)(
                () => this.m_bOkOutsideOfPlayspace,
                (e) => {
                  null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VRChaperone.SetOkOutsidePlayspace(e);
                },
              ),
              (0, i.reaction)(
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
            !!(null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VRProperties.GetBoolProperty(
                  "/user/head",
                  s.fD.SupportsInHMDRoomSetup_Bool,
                ))
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
                  VRHTML.VRChaperoneSetup.CommitPlayspaceFloorHeight(),
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
          let r = !!(null === VRHTML || void 0 === VRHTML
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
              !r &&
              (function (e) {
                switch (e) {
                  case 0:
                  case 1:
                    return !1;
                  default:
                    return !0;
                }
              })(e)
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
              4 == e &&
                3 == this.m_eRoomSetupStep &&
                (null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.VRChaperoneSetup.ResetPlayspaceRadius()),
              4 == e
                ? null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.VRChaperoneSetup.SetPlayspaceMode(u.Fv.Circle)
                : 5 == e
                  ? null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VRChaperoneSetup.SetPlayspaceMode(u.Fv.Drawn)
                  : null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VRChaperoneSetup.SetPlayspaceMode(u.Fv.None),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRChaperoneSetup.NotifyRoomSetupStep(e, !!t),
              (this.m_eRoomSetupStep = e);
          }
        }
        Load() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            var e, t, r, n, a, i;
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
                  (a = l.HR.settings.get(
                    "/settings/steamvr/backgroundOffsetZ",
                  )) && void 0 !== a
                  ? a
                  : 0),
              (this.m_bFloorDetectAtStart =
                null !==
                  (i = l.HR.settings.get(
                    "/settings/steamvr/floorDetectAtStart",
                  )) && void 0 !== i
                  ? i
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
      (0, n.Cg)([i.observable], m.prototype, "m_bShowFloor", void 0),
        (0, n.Cg)([i.observable], m.prototype, "m_bShowFloorFar", void 0),
        (0, n.Cg)(
          [i.observable],
          m.prototype,
          "m_fBackgroundDomeRadius",
          void 0,
        ),
        (0, n.Cg)([i.observable], m.prototype, "m_fBackgroundOffsetX", void 0),
        (0, n.Cg)([i.observable], m.prototype, "m_fBackgroundOffsetZ", void 0),
        (0, n.Cg)([i.observable], m.prototype, "m_bFloorDetectAtStart", void 0),
        (0, n.Cg)([i.observable], m.prototype, "m_bBoundsVisible", void 0),
        (0, n.Cg)(
          [i.observable],
          m.prototype,
          "m_bHmdOutOfBoundsStrict",
          void 0,
        ),
        (0, n.Cg)(
          [i.observable],
          m.prototype,
          "m_bOkOutsideOfPlayspace",
          void 0,
        ),
        (0, n.Cg)([i.observable], m.prototype, "m_eRoomSetupStep", void 0),
        (0, n.Cg)(
          [i.observable],
          m.prototype,
          "m_bRoomSetupAllowsCancel",
          void 0,
        ),
        (0, n.Cg)([i.computed], m.prototype, "supportsInHmdRoomSetup", null),
        (0, n.Cg)([i.action], m.prototype, "restartSilentRoomSetup", null),
        (0, n.Cg)(
          [i.action],
          m.prototype,
          "startRequiredRoomSetupIfNeeded",
          null,
        ),
        (0, n.Cg)([i.action], m.prototype, "setRoomSetupStep", null),
        (0, n.Cg)([a.o], m.prototype, "Load", null),
        (0, n.Cg)([a.o], m.prototype, "Save", null),
        (0, n.Cg)(
          [i.action.bound],
          m.prototype,
          "onChaperoneStatusEvents",
          null,
        );
      const p = new m();
      window.ConstructStore = p;
    },
    3689: (e, t, r) => {
      "use strict";
      r.d(t, { DZ: () => b, g: () => _ });
      var n = r(1635),
        a = r(7813),
        i = r(1651),
        s = r(1909),
        o = r(3714),
        l = r(3696),
        c = (r(6090), r(1333)),
        u = (r(1835), r(1295)),
        d = r(9728),
        m = r(3606),
        p = r(6379),
        h = r(2929);
      class g {
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
          (this.m_Callbacks = new i.l()),
            (this.m_bAlive = !0),
            (this.m_PartialParams = void 0),
            (0, a.makeObservable)(this),
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
      (0, n.Cg)([a.observable], g.prototype, "m_bAlive", void 0),
        (0, n.Cg)([a.observable], g.prototype, "m_PartialParams", void 0),
        (0, n.Cg)([a.computed.struct], g.prototype, "partialParams", null),
        (0, n.Cg)([a.computed], g.prototype, "isAlive", null),
        (0, n.Cg)([a.computed], g.prototype, "isValid", null),
        (0, n.Cg)([a.computed], g.prototype, "isActive", null),
        (0, n.Cg)([a.computed], g.prototype, "isEnabled", null),
        (0, n.Cg)([a.action], g.prototype, "SetParams", null),
        (0, n.Cg)([a.action], g.prototype, "Destroy", null),
        (0, n.Cg)([a.computed.struct], g.prototype, "protoForSteam", null);
      class v {
        constructor() {
          (this.m_unNextDashboardActionID = null),
            (this.m_mapActions = new Map()),
            (0, a.makeObservable)(this),
            (this.m_unNextDashboardActionID = h.A);
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
              (function () {
                (b[8] = _.CreateAction(
                  {
                    display_name: (0, o.we)("#Button_Recenter"),
                    invocation: 1,
                    icon: { enum: 3 },
                  },
                  () => {
                    l.H.setRoomSetupStep(1);
                  },
                )),
                  !1;
                (b[2] = _.CreateAction(
                  () => {
                    var e;
                    if (
                      u.H.BHasMutualCapability(5) &&
                      !u.H.BHasMutualCapability(6) &&
                      (null ===
                        (e = c.HR.settings.get(
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
                    null === VRHTML || void 0 === VRHTML || VRHTML.QuitOpenVR();
                  },
                )),
                  (b[3] = _.CreateAction(
                    () => {
                      if (
                        u.H.BHasMutualCapability(5) &&
                        !u.H.BHasMutualCapability(6) &&
                        c.HR.settings.get(
                          "/settings/dashboard/allowSystemShutdown",
                        )
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
                        VRHTML.ShutdownSystem();
                    },
                  )),
                  (b[4] = _.CreateAction(
                    () => {
                      if (p.c.showRoomViewButton)
                        return {
                          display_name: (0, o.we)("#Toggle_Room_View"),
                          invocation: 2,
                          active: p.c.roomViewEnabled,
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
                      return d.G.Instance.SceneAppKey
                        ? null ===
                            (t =
                              null === VRHTML || void 0 === VRHTML
                                ? void 0
                                : VRHTML.VROverlayInternal) || void 0 === t
                          ? void 0
                          : t.SetCameraRoomViewEnabledForSceneApps(e)
                        : c.HR.SetSettingsValue(m.Hh, e);
                    },
                  )),
                  !1;
                0;
              })();
          });
        }
        CreateAction(e, t) {
          const r = new g(this.m_unNextDashboardActionID++, e);
          return (
            this.m_mapActions.set(r.actionID, r),
            (0, a.when)(
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
      (0, n.Cg)([a.observable], v.prototype, "m_mapActions", void 0),
        (0, n.Cg)([a.action], v.prototype, "CreateAction", null);
      const _ = new v();
      window.dashboardActionStore = _;
      const b = {};
      window.globalActions = b;
    },
    1835: (e, t, r) => {
      "use strict";
      r.d(t, {
        Nr: () => R,
        SF: () => f,
        SW: () => E,
        Sm: () => T,
        tb: () => w,
      });
      var n = r(1635),
        a = r(6090),
        i = r(3236),
        s = r(7813),
        o = r(5163),
        l = r(1333),
        c = r(3606),
        u = r(2503),
        d = r(4007),
        m = r(4963),
        p = r(6013),
        h = r(8803),
        g = r(9728),
        v = r(795),
        _ = r(9978),
        b = r(3246),
        S = r(1295),
        y = r(7261);
      const f = [c.Sx, void 0].filter(Boolean);
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
      class M {
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
          (this.m_bDashboardVisible = !1),
            (this.m_bPreviousDashboardVisible = void 0),
            (this.m_bShowLegacyDashboardBar = !1),
            (this.m_bVS = !1),
            (this.m_eVSMode = C.None),
            (this.m_sVSOverlayKey = void 0),
            (this.m_eTheaterStereo = a.MQ.Mono),
            (this.m_eIncognitoMode = a.rx.Unavailable),
            (this.m_mapActivePooledPopupRequests = new Map()),
            (this.m_fVRGamepadUI_MetersPerPixel = void 0),
            (this.m_fVRGamepadUI_GlobalActiveOverlayScale = void 0),
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
            (this.s_ControlBarCurrentlyShownTooltip = null),
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
                    a.KI.TheaterFast,
                    e,
                    0.25,
                  ),
                    VRHTML.VRCompositor.SetAnimatedValue(
                      a.KI.TheaterSlow,
                      e,
                      e ? 2 : 1,
                    );
                },
              ),
              VRHTML.VRCompositor.SetAnimatedValue(
                a.KI.TheaterFast,
                this.isTheaterMode,
                0,
              ),
              VRHTML.VRCompositor.SetAnimatedValue(
                a.KI.TheaterSlow,
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
              this.SetVersionInfoPathProperties();
          });
        }
        SetVersionInfoPathProperties() {
          var e;
          const t = new p.M2();
          t.set_version(
            null ===
              (e =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.SteamVRVersion) || void 0 === e
              ? void 0
              : e.call(VRHTML),
          ),
            t.set_webpack_build_timestamp(1762825704),
            (0, h.Z)(t);
        }
        LoadSessionDevData() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            var e, t, r, n, a;
            const i = JSON.parse(
              null !== (e = sessionStorage.getItem(M.k_strSessionStorageKey)) &&
                void 0 !== e
                ? e
                : "{}",
            );
            (this.m_bShowLegacyDashboardBar =
              null !== (t = i.m_bShowLegacyBar) && void 0 !== t && t),
              (this.m_fVRGamepadUI_MetersPerPixel =
                null !== (r = i.m_fVRGamepadUI_MetersPerPixel) && void 0 !== r
                  ? r
                  : (0.167 / 120) * 1.1),
              (this.m_fVRGamepadUI_GlobalActiveOverlayScale =
                null !== (n = i.m_fVRGamepadUI_GlobalActiveOverlayScale) &&
                void 0 !== n
                  ? n
                  : 1.17);
            for (const e of null !== (a = i.m_rgPooledPopups) && void 0 !== a
              ? a
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
              m_fVRGamepadUI_GlobalActiveOverlayScale:
                this.m_fVRGamepadUI_GlobalActiveOverlayScale,
            };
            sessionStorage.setItem(M.k_strSessionStorageKey, JSON.stringify(e));
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
          return v.JJ.frames.find((e) => {
            var t;
            return (
              (null === (t = e.legacyOverlayState) || void 0 === t
                ? void 0
                : t.dockLocation) == y.$z.Theater
            );
          });
        }
        get bootFrame() {
          return v.JJ.frames.find((e) => {
            var t;
            return (
              (null === (t = e.legacyOverlayState) || void 0 === t
                ? void 0
                : t.dockLocation) == y.$z.Boot
            );
          });
        }
        get priorityGamepadFocusOverlay() {
          var e, t;
          const r = [y.$z.Theater, y.$z.World, y.$z.RightHand, y.$z.LeftHand];
          for (const a of r)
            for (const r of v.JJ.frames)
              if (
                (null === (e = r.legacyOverlayState) || void 0 === e
                  ? void 0
                  : e.dockLocation) == a &&
                (((null ==
                (n =
                  null === (t = r.activePage) || void 0 === t
                    ? void 0
                    : t.summonOverlayKey)
                  ? void 0
                  : n.startsWith(c.bl)) &&
                  n != c.wi) ||
                  n == c.P)
              )
                return r.activePage.summonOverlayKey;
          var n;
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
                        a.fD.DashboardLinkSupport_Int32,
                      )) && void 0 !== e
                ? e
                : 0)
            ) &&
            E.isVRGamepadUI &&
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
            this.m_eTheaterStereo == a.MQ.Mono ? a.MQ.Parallel : a.MQ.Mono;
          (this.m_eTheaterStereo = e),
            console.log("Theater stereoscopy set to", a.MQ[e]);
        }
        HideTheaterOverlay(e = y.$z.Dashboard, t) {
          var r;
          if (!E.theaterFrame) return;
          const n = E.theaterFrame;
          (n.legacyOverlayState.dockLocation = e),
            t &&
              (null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VROverlay.ShowDashboard(
                  null === (r = n.activePage) || void 0 === r
                    ? void 0
                    : r.summonOverlayKey,
                ));
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
        get ControlBarTint() {
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
          return d.Q.GetOverlayFlag(c.wi, a.NB.VisibleInDashboard);
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
          }[E.currentDashboardPosition];
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
          }[E.currentDashboardPosition];
          const r = -this.dashboardDistance;
          return {
            channel: a.KI.TheaterFast,
            from: [0, t, r],
            to: [0, t - 0.15, r],
            interp: a.$.SmoothStep,
          };
        }
        get dashboardScale() {
          var e;
          if (this.m_dashboardUserScale) return this.m_dashboardUserScale;
          let t = 1;
          const r = E.currentDashboardPosition;
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
                        a.Gz,
                        a.fD.DashboardScale_Float,
                      )) && void 0 !== e
                ? e
                : 1),
            t
          );
        }
        get sceneAppDimmingActive() {
          var e, t;
          if (E.activeLinkClient && g.G.Instance.SceneAppIsVRLink) return !1;
          const r = g.G.Instance.SceneApplicationState !== a.HW.None,
            n =
              this.m_bSuppressingFadeExternal &&
              (null ===
                (t =
                  null === (e = this.activeFrame) || void 0 === e
                    ? void 0
                    : e.activePage) || void 0 === t
                ? void 0
                : t.summonOverlayKey) == c.Wt,
            i = l.HR.settings.get(
              "/settings/dashboard/omitDashboardFadeWithSteamVRHome",
            ),
            s = !g.G.Instance.SceneAppIsHome || !i;
          return this.m_bDashboardVisible && s && !n && r;
        }
      }
      function T() {
        return (0, _.useObserver)(() => E.isVRGamepadUI);
      }
      (M.k_strSessionStorageKey = "DashboardStoreSessionStorage"),
        (0, n.Cg)([s.observable], M.prototype, "m_bDashboardVisible", void 0),
        (0, n.Cg)(
          [s.observable],
          M.prototype,
          "m_bShowLegacyDashboardBar",
          void 0,
        ),
        (0, n.Cg)([s.observable], M.prototype, "m_bVS", void 0),
        (0, n.Cg)([s.observable], M.prototype, "m_eVSMode", void 0),
        (0, n.Cg)([s.observable], M.prototype, "m_sVSOverlayKey", void 0),
        (0, n.Cg)([s.observable], M.prototype, "m_eTheaterStereo", void 0),
        (0, n.Cg)([s.observable], M.prototype, "m_eIncognitoMode", void 0),
        (0, n.Cg)(
          [s.observable],
          M.prototype,
          "m_mapActivePooledPopupRequests",
          void 0,
        ),
        (0, n.Cg)(
          [s.observable],
          M.prototype,
          "m_fVRGamepadUI_MetersPerPixel",
          void 0,
        ),
        (0, n.Cg)(
          [s.observable],
          M.prototype,
          "m_fVRGamepadUI_GlobalActiveOverlayScale",
          void 0,
        ),
        (0, n.Cg)([s.observable], M.prototype, "m_bGamepadFocusActive", void 0),
        (0, n.Cg)([s.observable], M.prototype, "m_bLinkStreamActive", void 0),
        (0, n.Cg)([s.observable], M.prototype, "m_bIsLinkClient", void 0),
        (0, n.Cg)([s.observable], M.prototype, "m_bIsLinkServer", void 0),
        (0, n.Cg)(
          [s.observable],
          M.prototype,
          "m_dashboardUserDistance",
          void 0,
        ),
        (0, n.Cg)([s.observable], M.prototype, "m_dashboardUserScale", void 0),
        (0, n.Cg)([s.observable], M.prototype, "m_unActiveFrameID", void 0),
        (0, n.Cg)([s.computed], M.prototype, "activeFrame", null),
        (0, n.Cg)([s.observable], M.prototype, "m_unMainSteamFrameID", void 0),
        (0, n.Cg)([s.computed], M.prototype, "mainSteamFrame", null),
        (0, n.Cg)([s.action], M.prototype, "SetMainSteamFrame", null),
        (0, n.Cg)(
          [s.observable],
          M.prototype,
          "m_bSuppressingFadeExternal",
          void 0,
        ),
        (0, n.Cg)([s.observable], M.prototype, "m_bTrackingRecording", void 0),
        (0, n.Cg)([s.observable], M.prototype, "m_bKeyboardVisible", void 0),
        (0, n.Cg)(
          [s.observable],
          M.prototype,
          "m_bKeyboardDockedInDashboard",
          void 0,
        ),
        (0, n.Cg)([s.observable], M.prototype, "m_sKeyboardOverlayKey", void 0),
        (0, n.Cg)([s.observable], M.prototype, "m_nKeyboardFlags", void 0),
        (0, n.Cg)(
          [s.observable],
          M.prototype,
          "s_ControlBarCurrentlyShownTooltip",
          void 0,
        ),
        (0, n.Cg)([i.o], M.prototype, "LoadSessionDevData", null),
        (0, n.Cg)([i.o], M.prototype, "SaveSessionDevData", null),
        (0, n.Cg)(
          [s.computed],
          M.prototype,
          "showLoadingThrobberOrBootOverlay",
          null,
        ),
        (0, n.Cg)([s.computed], M.prototype, "isTheaterMode", null),
        (0, n.Cg)([s.computed], M.prototype, "theaterFrame", null),
        (0, n.Cg)([s.computed], M.prototype, "bootFrame", null),
        (0, n.Cg)(
          [s.computed],
          M.prototype,
          "priorityGamepadFocusOverlay",
          null,
        ),
        (0, n.Cg)([s.computed], M.prototype, "eTheaterCurvature", null),
        (0, n.Cg)([s.computed], M.prototype, "isUnifiedDashboard", null),
        (0, n.Cg)(
          [s.action],
          M.prototype,
          "onVrCmdToggleTheaterStereoRequested",
          null,
        ),
        (0, n.Cg)([s.action], M.prototype, "HideTheaterOverlay", null),
        (0, n.Cg)([s.action], M.prototype, "setIncognitoMode", null),
        (0, n.Cg)([s.computed], M.prototype, "showIncognitoModeAction", null),
        (0, n.Cg)([s.computed], M.prototype, "WorldLightingGain", null),
        (0, n.Cg)([s.computed], M.prototype, "isVRGamepadUIReady", null),
        (0, n.Cg)([s.computed], M.prototype, "isVRGamepadUI", null),
        (0, n.Cg)(
          [s.computed],
          M.prototype,
          "dashboardBarUsesPooledPopup",
          null,
        ),
        (0, n.Cg)([s.computed], M.prototype, "dashboardBarOverlayKey", null),
        (0, n.Cg)(
          [s.computed],
          M.prototype,
          "hasVRGamepadUIDashboardBar",
          null,
        ),
        (0, n.Cg)([i.o], M.prototype, "updateBodyClasses", null),
        (0, n.Cg)([s.action.bound], M.prototype, "onGamepadFocusChanged", null),
        (0, n.Cg)(
          [s.action.bound],
          M.prototype,
          "onLinkStreamStatusEvents",
          null,
        ),
        (0, n.Cg)(
          [s.action.bound],
          M.prototype,
          "onTrackingRecordingChanged",
          null,
        ),
        (0, n.Cg)([s.action.bound], M.prototype, "onKeyboardInfoChanged", null),
        (0, n.Cg)([s.computed], M.prototype, "dashboardDistance", null),
        (0, n.Cg)([s.computed], M.prototype, "dashboardTranslation", null),
        (0, n.Cg)([s.computed], M.prototype, "dashboardScale", null),
        (0, n.Cg)([s.computed], M.prototype, "sceneAppDimmingActive", null);
      const E = new M();
      window.DashboardStore = E;
    },
    4734: (e, t, r) => {
      "use strict";
      r.d(t, { Q: () => h });
      var n = r(1635),
        a = r(795),
        i = r(4007),
        s = r(1909),
        o = r(7813),
        l = r(6090),
        c = r(3236),
        u = r(3606),
        d = r(3714),
        m = r(1333);
      class p {
        constructor() {
          (this.m_mailbox = new l._n()),
            (this.m_setDesktopFrames = new Set()),
            (this.m_setDesktopWindowFrames = new Set()),
            (this.m_lastActiveDesktopOrWindowFrame = void 0),
            (this.m_mapAvailableDesktopWindows = new Map()),
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
                    i = this.windows.find((e) => e.hwnd == n);
                  a.JJ.HasFramesWithAssociatedSummonKeys(
                    null == i ? void 0 : i.overlay_key,
                  )
                    ? VRHTML.VROverlay.ShowDashboard(i.overlay_key)
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
            : e.state) == a.Iu.Alive
            ? this.m_lastActiveDesktopOrWindowFrame
            : null !== (t = this.desktopFrames[0]) && void 0 !== t
              ? t
              : this.desktopWindowFrames[0];
        }
        get desktops() {
          let e = [];
          const t = i.Q.overlays
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
          const r = i.Q.GetOverlayInfo(u.Bn);
          return (
            r &&
              e.push({ overlay: r, strLocalizedName: (0, d.we)("#Desktop") }),
            e
          );
        }
        get windows() {
          if (!m.HR.settings.get(u.yl)) return [];
          const e = Array.from(this.m_mapAvailableDesktopWindows.values());
          return (
            e.sort((e, t) => {
              var r, n, a, i, s, o;
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
                  null !== (a = null == e ? void 0 : e.title) && void 0 !== a
                    ? a
                    : "",
                m =
                  null !== (i = null == t ? void 0 : t.title) && void 0 !== i
                    ? i
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
        ShowMultitaskingView() {
          this.m_mailbox.SendMessage("desktopview", {
            type: "request_task_view",
          });
        }
      }
      (0, n.Cg)([o.observable], p.prototype, "m_setDesktopFrames", void 0),
        (0, n.Cg)(
          [o.observable],
          p.prototype,
          "m_setDesktopWindowFrames",
          void 0,
        ),
        (0, n.Cg)(
          [o.observable],
          p.prototype,
          "m_lastActiveDesktopOrWindowFrame",
          void 0,
        ),
        (0, n.Cg)(
          [o.observable],
          p.prototype,
          "m_mapAvailableDesktopWindows",
          void 0,
        ),
        (0, n.Cg)([o.computed], p.prototype, "desktopFrames", null),
        (0, n.Cg)([o.computed], p.prototype, "desktopWindowFrames", null),
        (0, n.Cg)(
          [o.computed],
          p.prototype,
          "lastActiveDesktopOrWindowFrame",
          null,
        ),
        (0, n.Cg)([o.computed], p.prototype, "desktops", null),
        (0, n.Cg)([o.computed], p.prototype, "windows", null),
        (0, n.Cg)([o.action], p.prototype, "OnDesktopFrameCreated", null),
        (0, n.Cg)([o.action], p.prototype, "OnDesktopFrameDestroyed", null),
        (0, n.Cg)([o.action], p.prototype, "OnDesktopWindowFrameCreated", null),
        (0, n.Cg)(
          [o.action],
          p.prototype,
          "OnDesktopWindowFrameDestroyed",
          null,
        ),
        (0, n.Cg)([c.o], p.prototype, "OnWindowViewCreatedMsg", null),
        (0, n.Cg)([o.action.bound], p.prototype, "OnUpdateWindowListMsg", null),
        (0, n.Cg)([c.o], p.prototype, "ShowMultitaskingView", null);
      const h = new p();
      window.desktopStore = h;
    },
    3732: (e, t, r) => {
      "use strict";
      r.d(t, { D: () => m });
      var n = r(1635),
        a = r(7813),
        i = r(1333),
        s = r(8803),
        o = r(1909),
        l = r(6013),
        c = r(3606),
        u = r(6090);
      class d {
        Init() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            (0, a.makeObservable)(this),
              (0, a.autorun)(() => this.updatePathProperties()),
              o.p.SteamVR.SetImplementation("SetDisplayBrightness", (e) => {
                this.setBrightnessUserValue(e.user_brightness_value);
              });
          });
        }
        setBrightnessDriverValue(e) {
          i.HR.SetSettingsValue(c.Y, e);
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
            return i.HR.settings.get(c.Y);
        }
        get brightnessUserValue() {
          var e, t;
          return (t =
            null !== (e = this.brightnessDriverValue) && void 0 !== e ? e : 0) <
            0
            ? 0
            : t < 1
              ? 100 * Math.pow(t, 1 / 2.2)
              : 100 * t;
        }
        get minBrightnessUserValue() {
          return null == this.minBrightnessDriverValue
            ? 20
            : 100 * this.minBrightnessDriverValue;
        }
        get maxBrightnessUserValue() {
          return null == this.maxBrightnessDriverValue
            ? 100
            : 100 * this.maxBrightnessDriverValue;
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
      (0, n.Cg)([a.action], d.prototype, "setBrightnessDriverValue", null),
        (0, n.Cg)([a.action], d.prototype, "setBrightnessUserValue", null),
        (0, n.Cg)([a.computed], d.prototype, "brightnessDriverValue", null),
        (0, n.Cg)([a.computed], d.prototype, "brightnessUserValue", null),
        (0, n.Cg)([a.computed], d.prototype, "minBrightnessUserValue", null),
        (0, n.Cg)([a.computed], d.prototype, "maxBrightnessUserValue", null),
        (0, n.Cg)([a.computed], d.prototype, "minBrightnessDriverValue", null),
        (0, n.Cg)([a.computed], d.prototype, "maxBrightnessDriverValue", null);
      const m = new d();
      window.brightnessStore = m;
    },
    3514: (e, t, r) => {
      "use strict";
      r.d(t, {
        HC: () => R,
        Iu: () => n,
        ND: () => C,
        tW: () => w,
        wI: () => M,
      });
      var n,
        a = r(1635),
        i = r(7813),
        s = r(296),
        o = r(6090),
        l = r(6540),
        c = r(1835),
        u = r(921),
        d = r(2156),
        m = r(3689),
        p = r(3481),
        h = r(9383),
        g = r(795),
        v = r(3246),
        _ = r(7261),
        b = r(1333),
        S = r(2503),
        y = r(4007),
        f = r(3606);
      !(function (e) {
        (e[(e.Uninitialized = 0)] = "Uninitialized"),
          (e[(e.Pending = 1)] = "Pending"),
          (e[(e.Alive = 2)] = "Alive"),
          (e[(e.Destroyed = 3)] = "Destroyed");
      })(n || (n = {}));
      class R {
        constructor(e, t) {
          (this.m_eState = n.Uninitialized),
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
            (this.m_rgMenuItems_TabFrameMenu = []),
            (this.m_LegacyOverlayState = void 0),
            (this.m_vrAppEntry = void 0),
            (this.m_setOwnedActions = new Set()),
            (this.m_unNextPageID = 1),
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
        get state() {
          return this.m_eState;
        }
        get isPendingStateConcluded() {
          return (
            this.state == n.Pending &&
            !(
              p.JJ.supportedFrameFeatures.steamHelpsRenderFrame &&
              !this.m_bPendingInitialSyncWithSteam
            ) &&
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
          return this.isActiveDashboardFrame && c.SW.m_bDashboardVisible;
        }
        get activePageID() {
          return this.m_unActivePageID;
        }
        get activePage() {
          return this.m_mapPages.get(this.m_unActivePageID);
        }
        get isActiveDashboardFrame() {
          return c.SW.activeFrame === this;
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
          return v.r.GetRequestForID(this.m_unFrameMenuPopupID);
        }
        get shouldRenderFrameControls() {
          var e, t;
          return !(
            null !==
              (t = y.Q.GetOverlayFlag(
                null === (e = this.activePage) || void 0 === e
                  ? void 0
                  : e.summonOverlayKey,
                o.NB.MinimalControlBar,
              )) &&
            void 0 !== t &&
            t
          );
        }
        get canBeUndockedFromDashboard() {
          return this.pages.every((e) =>
            y.Q.BOverlayExists(e.summonOverlayKey),
          );
        }
        LoadLegacyOverlayState() {
          return (0, a.sH)(this, void 0, void 0, function* () {
            const e = this.associatedSummonOverlayKeys[0],
              t = yield b.HR.GetAppInfo(e);
            (0, i.runInAction)(() => {
              (this.m_vrAppEntry = t),
                (this.m_LegacyOverlayState = {
                  dockLocation: _.$z.Dashboard,
                  nDockStartMs: Date.now(),
                  xfInitial: null,
                  fScale: 1,
                  fLastTotalVisibleTimeInSeconds: (0, S.wT)(e),
                  bSuppressDoubleOverlayControlBar: !1,
                }),
                (this.m_bPendingLoadAppInfo = !1);
            });
          });
        }
        OnPendingComplete() {
          var e, t, r, a, i, s;
          this.m_eState = n.Alive;
          const o =
            null === (e = this.activePage) || void 0 === e
              ? void 0
              : e.summonOverlayKey;
          if (
            (null == o ? void 0 : o.startsWith("valve.steam.desktopgame.")) &&
            (null ===
              (r =
                null === (t = y.Q.GetOverlayInfo(o)) || void 0 === t
                  ? void 0
                  : t.sOverlayName) || void 0 === r
              ? void 0
              : r.toLowerCase().startsWith("steam"))
          )
            (0, _.qy)(this, _.$z.Boot);
          else if (
            null === (a = this.m_vrAppEntry) || void 0 === a
              ? void 0
              : a.starts_theater_mode
          )
            (0, _.SC)(this);
          else if (o == f.P || o.startsWith(f.bl)) {
            null !==
              (i = b.HR.settings.get(
                "/settings/dashboard/autoShowGameTheater",
              )) &&
            void 0 !== i &&
            i
              ? (0, _.SC)(this)
              : null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VROverlay.ShowDashboard(
                  null === (s = this.activePage) || void 0 === s
                    ? void 0
                    : s.summonOverlayKey,
                );
          }
        }
        get legacyOverlayState() {
          return this.m_LegacyOverlayState;
        }
        GetPageWithID(e) {
          return this.m_mapPages.get(e);
        }
        GetPageWithOverlaySummonKey(e) {
          if (e) return this.pages.find((t) => t.summonOverlayKey === e);
        }
        Init() {
          var e;
          this.m_eState == n.Uninitialized &&
            (null === (e = this.m_DestroyedPageAutorunHandle) ||
              void 0 === e ||
              e.call(this),
            (this.m_DestroyedPageAutorunHandle = (0, i.reaction)(
              () => this.pages.filter((e) => e.state == g.JP.Destroyed),
              this.OnPagesDestroyed,
            )),
            (this.m_bPendingInitialSyncWithSteam =
              p.JJ.supportedFrameFeatures.steamHelpsRenderFrame),
            (this.m_bPendingLoadAppInfo = !0),
            this.LoadLegacyOverlayState(),
            (this.m_eState = n.Pending),
            (0, i.when)(
              () => this.isPendingStateConcluded,
              this.OnPendingComplete,
            ));
        }
        OnPagesDestroyed(e) {
          e.forEach((e) => {
            this.m_mapPages.delete(e.pageID);
          }),
            this.m_mapPages.has(this.m_unActivePageID) ||
              (this.m_unActivePageID = this.pageIDs[0]);
        }
        DestroyFrame() {
          var e;
          this.m_eState != n.Destroyed &&
            ((this.m_eState = n.Destroyed),
            null === (e = this.m_DestroyedPageAutorunHandle) ||
              void 0 === e ||
              e.call(this),
            (this.m_DestroyedPageAutorunHandle = null),
            this.m_setOwnedActions.forEach((e) => e.Destroy()),
            this.m_setOwnedActions.clear());
        }
        CreatePage() {
          const e = new h.sj(this, this.m_unNextPageID++);
          return (
            this.m_mapPages.set(e.pageID, e),
            this.m_unActivePageID || (this.m_unActivePageID = e.pageID),
            e
          );
        }
        SwitchToPage(e) {
          const t = e instanceof h.sj ? e.pageID : e;
          this.m_mapPages.has(t) && (this.m_unActivePageID = t);
        }
        CreateAction(...e) {
          const t = m.g.CreateAction(...e);
          return this.m_setOwnedActions.add(t), t;
        }
        SetMenuItems(e, t) {
          (this.m_rgMenuItems_LeftFrameMenu = e),
            (this.m_rgMenuItems_TabFrameMenu = t);
        }
        get protoForSteam() {
          var e, t;
          if (this.state == n.Uninitialized || this.state == n.Destroyed)
            return;
          const r = {
              frame_id: this.frameID,
              tmp_title: this.title,
              menu: {
                items_for_left_frame_menu:
                  null !== (e = this.m_rgMenuItems_LeftFrameMenu) &&
                  void 0 !== e
                    ? e
                    : [],
                items_for_tab_frame_menu:
                  null !== (t = this.m_rgMenuItems_TabFrameMenu) && void 0 !== t
                    ? t
                    : [],
              },
            },
            a = new Set();
          return (
            r.menu.items_for_left_frame_menu.forEach((e) => a.add(e.action_id)),
            r.menu.items_for_tab_frame_menu.forEach((e) => a.add(e.action_id)),
            (r.defined_actions = [...a]
              .map((e) => {
                var t;
                return null === (t = m.g.GetAction(e)) || void 0 === t
                  ? void 0
                  : t.protoForSteam;
              })
              .filter(Boolean)),
            r
          );
        }
        OnFrameUpdateResultFromSteam(e) {
          this.m_eState != n.Destroyed &&
            ((this.m_unFrameMenuPopupID = e.frame_menu_dashboard_popup_id),
            (this.m_bPendingInitialSyncWithSteam = !1));
        }
      }
      (0, a.Cg)([i.observable], R.prototype, "m_eState", void 0),
        (0, a.Cg)([i.observable], R.prototype, "m_sTitle", void 0),
        (0, a.Cg)([i.observable], R.prototype, "m_mapPages", void 0),
        (0, a.Cg)([i.observable], R.prototype, "m_unActivePageID", void 0),
        (0, a.Cg)([i.observable], R.prototype, "m_unFrameMenuPopupID", void 0),
        (0, a.Cg)([i.observable.struct], R.prototype, "m_Icon", void 0),
        (0, a.Cg)(
          [i.observable.struct],
          R.prototype,
          "m_TabVisibility",
          void 0,
        ),
        (0, a.Cg)(
          [i.observable],
          R.prototype,
          "m_rgMenuItems_LeftFrameMenu",
          void 0,
        ),
        (0, a.Cg)(
          [i.observable],
          R.prototype,
          "m_rgMenuItems_TabFrameMenu",
          void 0,
        ),
        (0, a.Cg)(
          [i.observable.deep],
          R.prototype,
          "m_LegacyOverlayState",
          void 0,
        ),
        (0, a.Cg)([i.observable], R.prototype, "m_vrAppEntry", void 0),
        (0, a.Cg)([i.computed], R.prototype, "state", null),
        (0, a.Cg)([i.observable], R.prototype, "m_bPendingLoadAppInfo", void 0),
        (0, a.Cg)(
          [i.observable],
          R.prototype,
          "m_bPendingInitialSyncWithSteam",
          void 0,
        ),
        (0, a.Cg)([i.computed], R.prototype, "isPendingStateConcluded", null),
        (0, a.Cg)([i.action], R.prototype, "SetTitle", null),
        (0, a.Cg)([i.computed], R.prototype, "title", null),
        (0, a.Cg)([i.action], R.prototype, "SetIcon", null),
        (0, a.Cg)([i.computed.struct], R.prototype, "icon", null),
        (0, a.Cg)([i.action], R.prototype, "SetTabVisibility", null),
        (0, a.Cg)([i.computed.struct], R.prototype, "tabVisibility", null),
        (0, a.Cg)([i.computed], R.prototype, "isCurrentlyVisible", null),
        (0, a.Cg)([i.computed], R.prototype, "activePageID", null),
        (0, a.Cg)([i.computed], R.prototype, "activePage", null),
        (0, a.Cg)([i.computed], R.prototype, "isActiveDashboardFrame", null),
        (0, a.Cg)([i.computed], R.prototype, "pageIDs", null),
        (0, a.Cg)([i.computed], R.prototype, "pages", null),
        (0, a.Cg)(
          [i.computed],
          R.prototype,
          "associatedSummonOverlayKeys",
          null,
        ),
        (0, a.Cg)([i.computed.struct], R.prototype, "tab", null),
        (0, a.Cg)([i.computed], R.prototype, "frameMenuPopup", null),
        (0, a.Cg)([i.computed], R.prototype, "shouldRenderFrameControls", null),
        (0, a.Cg)(
          [i.computed],
          R.prototype,
          "canBeUndockedFromDashboard",
          null,
        ),
        (0, a.Cg)([i.action.bound], R.prototype, "OnPendingComplete", null),
        (0, a.Cg)([i.computed], R.prototype, "legacyOverlayState", null),
        (0, a.Cg)([i.action], R.prototype, "Init", null),
        (0, a.Cg)([i.action.bound], R.prototype, "OnPagesDestroyed", null),
        (0, a.Cg)([i.action], R.prototype, "DestroyFrame", null),
        (0, a.Cg)([i.action], R.prototype, "CreatePage", null),
        (0, a.Cg)([i.action], R.prototype, "SwitchToPage", null),
        (0, a.Cg)([i.action], R.prototype, "SetMenuItems", null),
        (0, a.Cg)([i.computed.struct], R.prototype, "protoForSteam", null),
        (0, a.Cg)(
          [i.action.bound],
          R.prototype,
          "OnFrameUpdateResultFromSteam",
          null,
        );
      const w = l.createContext({ frame: void 0, page: void 0 });
      function C() {
        return l.useContext(w);
      }
      const M = (0, s.PA)(
        l.forwardRef(function (e, t) {
          var r;
          const {
              children: a,
              title: s,
              iconEnum: c,
              iconAppID: m,
              iconOverlayKey: h,
              iconHWND: g,
              showTabInDashboardBar: v,
              showTabInDashboardHamburgerMenu: _,
            } = e,
            b = l.useMemo(() => p.JJ.CreateFrame(), []);
          (0, u.D5)(t, b);
          const S = l.useMemo(() => {
            const e = { enum: c, appid: m, overlay: h, hwnd: g };
            if (!Object.values(e).every((e) => void 0 === e)) return e;
          }, [c, m, h, g]);
          return (
            l.useEffect(() => {
              (0, i.runInAction)(() => {
                s && b.SetTitle(s),
                  S && b.SetIcon(S),
                  b.SetTabVisibility({
                    bVisibleInDashboardBar: v,
                    bVisibleInDashboardHamburgerMenu: _,
                  }),
                  b.state == n.Uninitialized && b.Init();
              });
            }, [b, s, S, v, _]),
            l.useEffect(() => () => b.DestroyFrame(), [b]),
            l.createElement(
              w.Provider,
              { value: { frame: b, page: void 0 } },
              "function" == typeof a ? a(b) : a,
              b.frameMenuPopup &&
                l.createElement(
                  o.dL,
                  {
                    parent_id:
                      null === (r = b.activePage) || void 0 === r
                        ? void 0
                        : r.GetPanelAnchorID(o.Oi.CenterLeft),
                  },
                  l.createElement(d.O, { popupRequest: b.frameMenuPopup }),
                ),
            )
          );
        }),
      );
    },
    5323: (e, t, r) => {
      "use strict";
      r.d(t, {
        Oo: () => h,
        QI: () => d,
        RG: () => g,
        U0: () => m,
        Vu: () => p,
        xE: () => c,
      });
      var n = r(296),
        a = r(6540),
        i = r(3606),
        s = (r(4007), r(3514)),
        o = r(1139);
      const l = a.createContext({
        CreateMenuItemID: void 0,
        OnMenuItemRender: void 0,
        OnMenuItemMounted: void 0,
        OnMenuItemUnmounted: void 0,
      });
      function c(e) {
        const { frame: t } = (0, s.ND)();
        if (!t)
          throw new Error("<FrameMenu> must be inside a <Frame> component.");
        const r = a.useRef(1),
          n = a.useRef([]),
          i = a.useRef([]),
          c = a.useMemo(() => new Map(), []),
          u = a.useRef(!1),
          d = a.useRef(!0),
          m = a.useCallback(() => {
            const e = n.current.map((e) => c.get(e)),
              r = i.current.map((e) => c.get(e));
            t.SetMenuItems(e, r);
          }, []);
        a.useEffect(() => () => t.SetMenuItems([], []), []),
          u.current &&
            ((u.current = !1),
            (d.current = !0),
            (n.current = []),
            (i.current = []));
        const p = (0, o.CH)();
        a.useEffect(() => {
          !d.current ||
            (0 == n.current.length && 0 == i.current.length) ||
            (m(), (d.current = !1));
        });
        const h = {
          CreateMenuItemID: () => r.current++,
          OnMenuItemRender: (e, t, r) => {
            c.set(e, t);
            const s = a.useRef(!1);
            d.current
              ? (r.bVisibleInFrameMenu && n.current.push(e),
                r.bVisibleInTabMenu && i.current.push(e),
                (s.current = !1))
              : (s.current = !0),
              a.useLayoutEffect(() => {
                s.current && (m(), (s.current = !1));
              });
          },
          OnMenuItemMounted: () => {
            (u.current = !0), p();
          },
          OnMenuItemUnmounted: (e) => {
            c.delete(e),
              (n.current = n.current.filter((t) => t != e)),
              (i.current = i.current.filter((t) => t != e)),
              m();
          },
        };
        return a.createElement(l.Provider, { value: h }, e.children);
      }
      const u = a.createContext({
        bVisibleInFrameMenu: !0,
        bVisibleInTabMenu: !0,
      });
      function d(e) {
        const { onlyVisibleIn: t, children: r } = e,
          n = {
            bVisibleInFrameMenu: "both" == t || "left-frame-menu" == t,
            bVisibleInTabMenu: "both" == t || "bar-tab-menu" == t,
          };
        return a.createElement(u.Provider, { value: n }, r);
      }
      function m(e) {
        const { params: t } = e,
          r = a.useContext(l);
        if (!r)
          throw new Error(
            "<FrameMenuItem> must be inside a <Frame> component.",
          );
        const i = a.useContext(u),
          s = a.useMemo(() => r.CreateMenuItemID(), []);
        a.useEffect(
          () => (r.OnMenuItemMounted(), () => r.OnMenuItemUnmounted(s)),
          [s],
        );
        const o = (0, n.q3)(() => ("function" == typeof t ? t() : t));
        return r.OnMenuItemRender(s, o, i), null;
      }
      function p(e) {
        const { actionParams: t } = e,
          { frame: r } = (0, s.ND)();
        if (!r)
          throw new Error("<FrameMenuItem_Action> must be inside a <Frame>.");
        const n = a.useRef(void 0);
        n.current = e.onInvoked;
        const i = a.useMemo(
          () =>
            null == r
              ? void 0
              : r.CreateAction(t, (...e) => {
                  var t;
                  return null === (t = n.current) || void 0 === t
                    ? void 0
                    : t.call(n, ...e);
                }),
          [],
        );
        return (
          a.useLayoutEffect(() => (null == i ? void 0 : i.SetParams(t))),
          a.useEffect(() => () => (null == i ? void 0 : i.Destroy()), [i]),
          a.createElement(m, { params: { type: 3, action_id: i.actionID } })
        );
      }
      function h(e) {
        return a.createElement(m, { params: { type: 1 } });
      }
      function g(e) {
        const { frame: t } = (0, s.ND)(),
          r = (0, n.q3)(() => {
            var e;
            return (
              (null == t ? void 0 : t.isActiveDashboardFrame) &&
              (null === (e = null == t ? void 0 : t.activePage) || void 0 === e
                ? void 0
                : e.summonOverlayKey) == i.wi
            );
          });
        return a.createElement(m, {
          params: () => ({
            type: 4,
            steam_main_menu_options: { allow_show_as_active: r },
          }),
        });
      }
    },
    9383: (e, t, r) => {
      "use strict";
      r.d(t, {
        EK: () => S,
        JP: () => n,
        JQ: () => g,
        P9: () => h,
        gU: () => _,
        sj: () => p,
      });
      var n,
        a = r(1635),
        i = r(7813),
        s = r(296),
        o = r(6090),
        l = r(6540),
        c = r(3606),
        u = r(921),
        d = r(4007),
        m = r(3514);
      !(function (e) {
        (e[(e.Alive = 0)] = "Alive"), (e[(e.Destroyed = 1)] = "Destroyed");
      })(n || (n = {}));
      class p {
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
        constructor(e, t) {
          (this.m_eState = n.Alive),
            (this.m_sSummonOverlayKey = void 0),
            (this.m_bExternalDashboardOverlay = !1),
            (this.m_Frame = e),
            (this.m_unPageID = t),
            (0, i.makeObservable)(this);
        }
        DestroyPage() {
          this.m_eState != n.Destroyed && (this.m_eState = n.Destroyed);
        }
        SetSummonOverlayKey(e) {
          this.m_sSummonOverlayKey = e;
        }
        SetIsExternalDashboardOverlay(e) {
          this.m_bExternalDashboardOverlay = e;
        }
        GetPanelAnchorID(e) {
          if (!this.isExternalDashboardOverlay)
            return `frame:${this.frame.frameID}:page:${this.pageID}:anchor:${e}`;
          {
            const t = (0, o.nX)(c.cb, this.summonOverlayKey);
            switch (e) {
              case o.Oi.TopCenter:
                return t + "_TopCenter";
              case o.Oi.CenterLeft:
                return t + "_CenterLeft";
              case o.Oi.CenterRight:
                return t + "_CenterRight";
              case o.Oi.BottomCenter:
                return t + "_BottomCenter";
            }
          }
        }
      }
      (0, a.Cg)([i.observable], p.prototype, "m_eState", void 0),
        (0, a.Cg)([i.observable], p.prototype, "m_sSummonOverlayKey", void 0),
        (0, a.Cg)(
          [i.observable],
          p.prototype,
          "m_bExternalDashboardOverlay",
          void 0,
        ),
        (0, a.Cg)([i.computed], p.prototype, "state", null),
        (0, a.Cg)([i.computed], p.prototype, "summonOverlayKey", null),
        (0, a.Cg)(
          [i.computed],
          p.prototype,
          "isExternalDashboardOverlay",
          null,
        ),
        (0, a.Cg)([i.computed], p.prototype, "isActivePage", null),
        (0, a.Cg)([i.action], p.prototype, "DestroyPage", null),
        (0, a.Cg)([i.action], p.prototype, "SetSummonOverlayKey", null),
        (0, a.Cg)(
          [i.action],
          p.prototype,
          "SetIsExternalDashboardOverlay",
          null,
        );
      const h = l.forwardRef(function (e, t) {
          const {
              children: r,
              summonOverlayKey: n,
              renderChildren: a = "when-visible",
            } = e,
            { frame: i } = (0, m.ND)(),
            c = l.useMemo(() => i.CreatePage(), [i]);
          l.useEffect(() => {
            c.SetSummonOverlayKey(n);
          }, [c, i, n]),
            (0, u.D5)(t, c),
            l.useEffect(() => () => c.DestroyPage(), [c]);
          const d = `frame:${i.frameID}:page:${c.pageID}:mountable`,
            p = (0, s.q3)(() => i.isActiveDashboardFrame && c.isActivePage);
          return l.createElement(
            m.tW.Provider,
            { value: { frame: i, page: c } },
            (p || "always" == a) &&
              l.createElement(
                o.IS,
                { id: d },
                "function" == typeof r ? r(i, c) : r,
              ),
            p &&
              l.createElement(
                o.dL,
                { parent_id: b },
                l.createElement(
                  m.tW.Provider,
                  { value: { frame: i, page: c } },
                  l.createElement(o.rF, { mountedId: d }),
                ),
              ),
          );
        }),
        g = l.forwardRef(function (e, t) {
          var r;
          const { requireExternalOverlay: n = !0, overlayKey: i } = e,
            m = (0, a.Tt)(e, ["requireExternalOverlay", "overlayKey"]),
            p = l.useCallback(
              (e) => {
                null == e || e.SetIsExternalDashboardOverlay(!0),
                  (0, u.cZ)(t, e);
              },
              [t],
            ),
            g = (0, s.q3)(() => d.Q.BOverlayExists(i));
          return n && !g
            ? null
            : l.createElement(
                h,
                Object.assign({}, m, {
                  summonOverlayKey:
                    null !== (r = e.summonOverlayKey) && void 0 !== r ? r : i,
                  ref: p,
                }),
                l.createElement(o.rF, { mountedId: (0, o.nX)(c.cb, i) }),
              );
        }),
        v = [
          o.Oi.TopCenter,
          o.Oi.CenterLeft,
          o.Oi.CenterRight,
          o.Oi.BottomCenter,
        ];
      function _(e) {
        const { frame: t, page: r } = l.useContext(m.tW);
        return t && r && !r.isExternalDashboardOverlay
          ? l.createElement(
              l.Fragment,
              null,
              v.map((e) =>
                l.createElement(o.Ci, {
                  key: e,
                  id: r.GetPanelAnchorID(e),
                  location: e,
                }),
              ),
            )
          : null;
      }
      const b = "frame_active_dashboard_root",
        S = (0, s.PA)(function (e) {
          return l.createElement(o.dL, { id: b });
        });
    },
    795: (e, t, r) => {
      "use strict";
      r.d(t, {
        EK: () => i.EK,
        HC: () => a.HC,
        Iu: () => a.Iu,
        JJ: () => n.JJ,
        JP: () => i.JP,
        JQ: () => i.JQ,
        Oo: () => s.Oo,
        P9: () => i.P9,
        QI: () => s.QI,
        RG: () => s.RG,
        Sq: () => n.Sq,
        U0: () => s.U0,
        Vu: () => s.Vu,
        gU: () => i.gU,
        wI: () => a.wI,
        xE: () => s.xE,
      });
      var n = r(3481),
        a = r(3514),
        i = r(9383),
        s = r(5323);
    },
    7261: (e, t, r) => {
      "use strict";
      r.d(t, { $z: () => n, EE: () => p, SC: () => d, qy: () => m });
      var n,
        a = r(7813),
        i = r(1835),
        s = r(9728),
        o = r(1333),
        l = r(2932),
        c = r(2503),
        u = r(3481);
      function d(e, t = !0) {
        m(e, n.Theater),
          t &&
            e != i.SW.mainSteamFrame &&
            (null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRDashboardManager.HideDashboard(
                "AutoHideDashboardForOverlay",
              ));
      }
      !(function (e) {
        (e[(e.Dashboard = 0)] = "Dashboard"),
          (e[(e.LeftHand = 1)] = "LeftHand"),
          (e[(e.RightHand = 2)] = "RightHand"),
          (e[(e.World = 3)] = "World"),
          (e[(e.Theater = 4)] = "Theater"),
          (e[(e.Boot = 5)] = "Boot");
      })(n || (n = {}));
      const m = (0, a.action)(function (e, t, r) {
        var a, i, s, o;
        if (null != e && null != t) {
          if (t == n.LeftHand || t == n.RightHand || t == n.Theater)
            for (const e of u.JJ.frames)
              (null === (a = e.legacyOverlayState) || void 0 === a
                ? void 0
                : a.dockLocation) == t &&
                ((e.legacyOverlayState.dockLocation = n.Dashboard),
                p(
                  null === (i = e.activePage) || void 0 === i
                    ? void 0
                    : i.summonOverlayKey,
                  e.legacyOverlayState,
                ));
          e.legacyOverlayState &&
            (e.legacyOverlayState.dockLocation == n.Theater &&
              (null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VROverlay.ShowDashboard(
                  null === (s = null == e ? void 0 : e.activePage) ||
                    void 0 === s
                    ? void 0
                    : s.summonOverlayKey,
                )),
            e.legacyOverlayState.dockLocation != t &&
              (p(
                null === (o = e.activePage) || void 0 === o
                  ? void 0
                  : o.summonOverlayKey,
                e.legacyOverlayState,
              ),
              (e.legacyOverlayState.dockLocation = t)),
            (e.legacyOverlayState.xfInitial = r),
            (e.legacyOverlayState.bSuppressDoubleOverlayControlBar =
              t == n.World));
        }
      });
      function p(e, t, r) {
        var a;
        const i = Date.now(),
          u = i - t.nDockStartMs;
        if (u >= 1e3) {
          const i = /^valve\.steam\.desktopgame\.(\d+)$/,
            d = e.match(i),
            m = s.G.Instance.SceneAppKey,
            p =
              t.dockLocation == n.Theater &&
              null !==
                (a = o.HR.settings.get(
                  "/settings/dashboard/autoShowGameTheater",
                )) &&
              void 0 !== a &&
              a;
          void 0 === r && (r = (0, c.wT)(e));
          const h = Math.floor(1e3 * (r - t.fLastTotalVisibleTimeInSeconds)),
            g = {
              OverlayKeyID: e,
              Location: n[t.dockLocation],
              DurationMs: u,
              VisibleMs: h > 0 ? h : void 0,
              OverlayAppID:
                2 == (null == d ? void 0 : d.length)
                  ? parseInt(d[1], 10)
                  : void 0,
              SceneAppKeyID: "" != m ? m : void 0,
              autoShowGameTheater: p,
            };
          (t.fLastTotalVisibleTimeInSeconds = r),
            l.v.instance.AddRow("SteamVROverlayDockStats", g);
        }
        t.nDockStartMs = i;
      }
    },
    4007: (e, t, r) => {
      "use strict";
      r.d(t, { Q: () => o });
      var n = r(1635),
        a = r(7813),
        i = r(1651);
      class s {
        constructor() {
          (this.m_mapAllOverlays = new Map()),
            (this.m_rgOverlayCreatedCallbacks = new i.l()),
            (this.m_rgOverlayDestroyedCallbacks = new i.l()),
            (0, a.makeObservable)(this);
        }
        Init() {
          return (0, n.sH)(this, void 0, void 0, function* () {
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
      (0, n.Cg)([a.observable], s.prototype, "m_mapAllOverlays", void 0),
        (0, n.Cg)([a.computed], s.prototype, "overlays", null),
        (0, n.Cg)([a.action.bound], s.prototype, "OnAllOverlayInfo", null);
      const o = new s();
      window.OverlayStore = o;
    },
    3246: (e, t, r) => {
      "use strict";
      r.d(t, { r: () => c });
      var n = r(1635),
        a = r(3236),
        i = r(7813),
        s = r(1909),
        o = r(4007);
      class l {
        constructor() {
          (this.m_mapActivePooledPopupRequests = new Map()),
            (this.m_mapRemoteVSIds = new Map()),
            (0, i.makeObservable)(this);
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
              (0, i.autorun)(() => this.SaveSessionDevData()),
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
          this.m_mapActivePooledPopupRequests.delete(e.dashboard_popup_id);
        }
        LoadSessionDevData() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            var e, t;
            const r = JSON.parse(
              null !== (e = sessionStorage.getItem(l.k_strSessionStorageKey)) &&
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
            sessionStorage.setItem(l.k_strSessionStorageKey, JSON.stringify(e));
          });
        }
        get legacyFloatingMainMenuPopup() {
          return this.requests.find((e) => 2 == e.special_identifier);
        }
        get dashboardBarPopup() {
          return this.requests.find((e) => 1 == e.special_identifier);
        }
      }
      (l.k_strSessionStorageKey = "PooledPopupStoreSessionStorage"),
        (0, n.Cg)(
          [i.observable],
          l.prototype,
          "m_mapActivePooledPopupRequests",
          void 0,
        ),
        (0, n.Cg)([i.observable], l.prototype, "m_mapRemoteVSIds", void 0),
        (0, n.Cg)([i.computed], l.prototype, "requestIDs", null),
        (0, n.Cg)([i.computed], l.prototype, "requests", null),
        (0, n.Cg)([i.action.bound], l.prototype, "onShowDashboardPopup", null),
        (0, n.Cg)([i.action.bound], l.prototype, "onHideDashboardPopup", null),
        (0, n.Cg)([a.o], l.prototype, "LoadSessionDevData", null),
        (0, n.Cg)([a.o], l.prototype, "SaveSessionDevData", null),
        (0, n.Cg)(
          [i.computed],
          l.prototype,
          "legacyFloatingMainMenuPopup",
          null,
        ),
        (0, n.Cg)([i.computed], l.prototype, "dashboardBarPopup", null);
      const c = new l();
      window.PooledPopupStore = c;
    },
    6379: (e, t, r) => {
      "use strict";
      r.d(t, { c: () => d });
      var n = r(1635),
        a = r(3236),
        i = r(7813),
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
            (0, i.makeObservable)(this);
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
              (0, i.reaction)(
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
      (0, n.Cg)([i.observable], u.prototype, "m_bAllowCameraToggle", void 0),
        (0, n.Cg)(
          [i.observable],
          u.prototype,
          "m_bAllowLightSourceFrequency",
          void 0,
        ),
        (0, n.Cg)(
          [i.observable],
          u.prototype,
          "m_bCameraCompatibilityModes",
          void 0,
        ),
        (0, n.Cg)(
          [i.observable],
          u.prototype,
          "m_bSupportsRoomViewDepthProjection",
          void 0,
        ),
        (0, n.Cg)([i.observable], u.prototype, "m_eCameraExposure", void 0),
        (0, n.Cg)(
          [i.observable],
          u.prototype,
          "m_bRoomViewEnabledForSceneApps",
          void 0,
        ),
        (0, n.Cg)([i.observable], u.prototype, "m_bRoomViewStreaming", void 0),
        (0, n.Cg)([a.o], u.prototype, "onHmdCameraStateChanged", null),
        (0, n.Cg)([a.o], u.prototype, "onRoomViewChanged", null),
        (0, n.Cg)([i.computed], u.prototype, "showRoomViewButton", null),
        (0, n.Cg)([i.computed], u.prototype, "roomViewEnabled", null),
        (0, n.Cg)([a.o], u.prototype, "onRoomViewStreamChanged", null);
      const d = new u();
      window.RoomViewStore = d;
    },
    998: (e, t, r) => {
      "use strict";
      r.d(t, { C: () => u, b: () => a });
      var n,
        a,
        i = r(1635),
        s = r(6540),
        o = r(3236),
        l = r(6090),
        c = (r(9471), r(1835), r(1370));
      !(function (e) {
        (e[(e.HorizontalPips = 0)] = "HorizontalPips"),
          (e[(e.VerticalBattery = 1)] = "VerticalBattery");
      })(a || (a = {}));
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
          let i = !1;
          if (t) {
            const t =
              null !==
                (e = l.Ay.VRProperties.GetFloatProperty(
                  this.props.trackedDeviceIndex,
                  l.fD.DeviceBatteryPercentage_Float,
                )) && void 0 !== e
                ? e
                : 0;
            (i = l.Ay.VRProperties.GetBoolProperty(
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
              i,
              this.batteryLevelStable,
              a.HorizontalPips,
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
          const i =
            n == a.VerticalBattery
              ? "images/icons/vert"
              : "images/icons/controller_model";
          return t
            ? r < 0.15
              ? i + "_charging_red.png"
              : i + "_charging.png"
            : 0 == r
              ? null
              : r < 0.15
                ? i + "_low.png"
                : r < 0.3
                  ? i + "_battery_1.png"
                  : r < 0.6
                    ? i + "_battery_2.png"
                    : r < 0.9
                      ? i + "_battery_3.png"
                      : i + "_battery_4.png";
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
        (0, i.Cg)([o.o], u.prototype, "OnBatteryStateChanged", null),
        (0, i.Cg)([o.o], u.prototype, "OnDeviceRoleChanged", null),
        (0, i.Cg)([o.o], u.prototype, "OnDeviceEvent", null),
        (u = n = (0, i.Cg)([c.PA], u));
    },
    2503: (e, t, r) => {
      "use strict";
      r.d(t, { cQ: () => Fe, eo: () => ke, wT: () => Pe });
      var n,
        a = r(1635),
        i = r(6090),
        s = r(3236),
        o = r(7813),
        l = r(6540),
        c = r(5818),
        u = r(6138),
        d = r(3606),
        m = r(3714),
        p = r(2932),
        h = r(6575),
        g = r(9728),
        v = r(1333),
        _ = r(1370),
        b = r(9978),
        S = r(5163),
        y = r(2563),
        f = r(2267),
        R = r(2928),
        w = r(1139);
      let C = (n = class extends l.Component {
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
                className: (0, w.FH)("PortraitAppImageContainer", [
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
      (C.defaultProps = {
        fallbackImageUrl: "images/appimage_default_portrait.png",
      }),
        (C.s_failedImages = []),
        (0, a.Cg)([s.o], C.prototype, "loadNextImage", null),
        (0, a.Cg)([s.o], C.prototype, "onLoad", null),
        (0, a.Cg)([s.o], C.prototype, "onError", null),
        (C = n = (0, a.Cg)([_.PA], C));
      var M = r(427),
        T = r(795);
      const E = (e) => {
        if (null == e) return "";
        let t = e.image_path_capsule || e.image_path;
        return t.startsWith("/app/image?") && (t += "&aspect=portrait"), t;
      };
      function V(e) {
        const t = (0, b.useObserver)(
            () => g.G.Instance.SceneApplicationState != i.HW.None,
          ),
          r = (0, b.useObserver)(() => {
            if (g.G.Instance.SceneAppKey.startsWith(d.kk)) {
              const e = Number.parseInt(
                g.G.Instance.SceneAppKey.substring(d.kk.length),
              );
              if (Number.isInteger(e)) return e;
            }
          });
        return l.createElement(
          T.wI,
          {
            title: (0, m.we)("#Now_Playing"),
            showTabInDashboardBar: t,
            iconEnum: 17,
            iconAppID: r,
          },
          l.createElement(
            T.P9,
            { summonOverlayKey: d.dw },
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
          const e = g.G.Instance.SceneAppKey;
          R.o.OpenDeepLink(R.$.Name, e);
        }
        onOpenAppVideoSettings() {
          const e = g.G.Instance.SceneAppKey;
          f.xR.OpenDeepLink(f.a5.Name, e);
        }
        render() {
          var e;
          const t = g.G.Instance.SceneAppKey,
            r = g.G.Instance.SceneAppName,
            n = g.G.Instance.SceneApplicationState,
            a = g.G.Instance.SceneAppIsHome,
            s = v.HR.settings.get("/settings/dashboard/allowAppQuitting"),
            o = !(
              null !==
                (e = v.HR.settings.get("/settings/dashboard/arcadeMode")) &&
              void 0 !== e &&
              e
            ),
            c = v.HR.apps && v.HR.apps.find((e) => e.key == t);
          let d = !1;
          switch (n) {
            case i.HW.Quitting:
            case i.HW.Starting:
            case i.HW.Waiting:
              d = !0;
          }
          return l.createElement(
            y.L_,
            {
              visible: !0,
              debugName: "nowplaying",
              additionalClassNames: "NowPlaying",
              scrollable: !1,
            },
            l.createElement(
              "div",
              { className: "ArtworkColumn" },
              l.createElement(C, { appkey: t, title: r, imageUrl: E(c) }),
            ),
            l.createElement(
              "div",
              { className: "InfoColumn" },
              l.createElement("div", { className: "NowPlayingAppTitle" }, r),
              l.createElement(
                u.$,
                {
                  className: "ButtonControl Colorful",
                  onClick: this.onReturnToGame,
                },
                a ? (0, m.we)("#Return_To_Home") : (0, m.we)("#Return_To_Game"),
              ),
              o &&
                l.createElement(
                  M.CS,
                  {
                    icon: M.Xb.PopOut,
                    onClick: this.onOpenAppControllerBindingSettings,
                  },
                  (0, m.we)("#Controller_Bindings"),
                ),
              o &&
                l.createElement(
                  M.CS,
                  { icon: M.Xb.PopOut, onClick: this.onOpenAppVideoSettings },
                  (0, m.we)("#App_Video_Settings"),
                ),
              s &&
                l.createElement(
                  u.$,
                  { className: "ButtonControl", onClick: this.onExitApp },
                  a ? (0, m.we)("#Exit_Home") : (0, m.we)("#Exit_Game"),
                ),
            ),
          );
        }
      }
      (0, a.Cg)([s.o], D.prototype, "onExitApp", null),
        (0, a.Cg)([s.o], D.prototype, "onReturnToGame", null),
        (0, a.Cg)(
          [s.o],
          D.prototype,
          "onOpenAppControllerBindingSettings",
          null,
        ),
        (0, a.Cg)([s.o], D.prototype, "onOpenAppVideoSettings", null);
      var B = r(9248),
        A = r(3712),
        O = (r(7504), r(1835)),
        I = r(3696),
        k = r(6013),
        L = r(8803),
        H = r(1909),
        P = r(3689),
        F = r(296);
      const x = (0, F.PA)(function (e) {
          const { debugHostLocation: t, onGrabStart: r, onGrabEnd: n } = e,
            a = O.SW.isVRGamepadUI,
            s = !!O.SW.m_sKeyboardOverlayKey,
            o = !!(O.SW.m_nKeyboardFlags & i.QR.Minimal),
            c = a ? 2 : 1.5,
            u = a ? { y: -0.33, z: 0.15 } : { y: -0.25 },
            m = a
              ? o
                ? { y: -0.62, z: 0.01 }
                : { y: -0.72, z: 0.01 }
              : o
                ? { y: -0.73, z: 0.05 }
                : { y: -0.87, z: 0.05 };
          return l.createElement(
            i.dL,
            { translation: u },
            l.createElement(
              i.dL,
              { scale: { y: c, x: c } },
              l.createElement(i.rF, { mountedId: (0, i.nX)(d.cb, d.Zw) }),
              l.createElement(i.rF, { mountedId: (0, i.nX)(d.cb, d.nY) }),
            ),
            false,
            s &&
              l.createElement(
                i.dL,
                { translation: m },
                l.createElement(A.X, {
                  tint: O.SW.GrabHandleTint,
                  onStartMove: r,
                  onEndMove: n,
                }),
              ),
          );
        }),
        N = (0, F.PA)(function () {
          return (
            O.SW.m_bKeyboardVisible &&
            !O.SW.m_bKeyboardDockedInDashboard &&
            l.createElement(
              i.sJ,
              { bContinuousRelatch: !1 },
              l.createElement(
                i.dL,
                {
                  translation: O.SW.dashboardTranslation,
                  scale: O.SW.dashboardScale,
                },
                l.createElement(
                  i.dL,
                  { translation: Fe.getControlBarTranslation() },
                  l.createElement(
                    i.dL,
                    { translation: Fe.k_nKeyboardGrabTransformOffset },
                    l.createElement(
                      B.B,
                      { min_distance: 0.2, should_head_align: !1 },
                      l.createElement(
                        i.dL,
                        {
                          translation: {
                            x: -1 * Fe.k_nKeyboardGrabTransformOffset.x,
                            y: -1 * Fe.k_nKeyboardGrabTransformOffset.y,
                            z: -1 * Fe.k_nKeyboardGrabTransformOffset.z,
                          },
                        },
                        l.createElement(
                          i.dL,
                          {
                            rotation: { x: Fe.k_nControlBarPitch },
                            curvature_pitch: Fe.k_nControlBarPitch,
                          },
                          l.createElement(x, { debugHostLocation: "Undocked" }),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            )
          );
        });
      var z = r(1295),
        W = r(4007),
        G = r(9471),
        U = r(7600),
        q = r(6379),
        j = r(8770);
      function K(e) {
        e.set_deprecated_icon(J(e.icon())),
          e.set_icon(void 0),
          e.set_deprecated_icon_active(J(e.icon_active())),
          e.set_icon_active(void 0);
      }
      function $(e) {
        e.set_deprecated_icon(
          (function (e) {
            if (null == e) return;
            const t = new j.Tp();
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
      function J(e) {
        if (null == e) return;
        const t = new j.Ym();
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
      var Z,
        Q = r(8723),
        X = r(2505),
        Y = r.n(X),
        ee = r(5615);
      !(function (e) {
        (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
      })(Z || (Z = {}));
      const te = (e) =>
        l.createElement(
          "div",
          {
            className: (0, w.FH)("ButtonContainer", Z[e.side], [
              "Disabled",
              !1 === e.enabled,
            ]),
          },
          l.createElement(
            u.$,
            { className: "ButtonControl", onClick: e.onClick },
            e.side == Z.Left
              ? l.createElement(l.Fragment, null, "‹")
              : l.createElement(l.Fragment, null, "›"),
          ),
        );
      class re extends l.Component {
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
          const a =
              null !== (t = this.props.paginationAlignmentOffset) &&
              void 0 !== t
                ? t
                : 0,
            i = n[0],
            s = this.m_bScrolling ? this.m_nCurrentScrollTarget : r.scrollLeft,
            o = i.getBoundingClientRect().left + r.scrollLeft,
            l = i.clientWidth,
            c = r.clientWidth,
            u = Math.floor(c / l) - 1,
            d = Math.round((s - o + a + 1) / l) + u * e - 0.4999,
            m = d > 0 ? d * l + o - a : 0;
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
              className: (0, w.FH)(
                "PaginatedCarousel",
                this.props.additionalClassNames,
              ),
            },
            l.createElement(
              ee.M,
              {
                ref: this.m_refScrollPanel,
                scrollDirection: ee.D.Horizontal,
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
                  l.createElement(te, {
                    side: Z.Left,
                    enabled: !this.state.bScrolledToStart,
                    onClick: this.onLeftButtonClick,
                  }),
                null !== this.state.bScrolledToEnd &&
                  l.createElement(te, {
                    side: Z.Right,
                    enabled: !this.state.bScrolledToEnd,
                    onClick: this.onRightButtonClick,
                  }),
              ),
          );
        }
      }
      (0, a.Cg)([s.o], re.prototype, "onAnimationFrame", null),
        (0, a.Cg)([s.o], re.prototype, "onScroll", null),
        (0, a.Cg)([s.o], re.prototype, "onLeftButtonClick", null),
        (0, a.Cg)([s.o], re.prototype, "onRightButtonClick", null);
      let ne = class extends l.Component {
        constructor(e) {
          super(e),
            (this.m_scrollWatcher = new w.aw()),
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
                className: (0, w.FH)(
                  "AppButtonContainer",
                  [
                    "AppOwned",
                    v.HR.probablyOwnedAppkeys.has(this.props.appkey),
                  ],
                  ["ShowingPopovers", this.shouldShowHoverContents],
                ),
              },
              l.createElement(
                u.$,
                {
                  className: "AppButton",
                  ref: this.m_refButton,
                  onMouseEnter: this.buttonMouseEnter,
                  onMouseLeave: this.buttonMouseLeave,
                  onClick: this.props.onClick,
                },
                l.createElement(C, Object.assign({}, e), this.props.children),
              ),
            )
          );
        }
      };
      (0, a.Cg)([s.o], ne.prototype, "buttonMouseEnter", null),
        (0, a.Cg)([s.o], ne.prototype, "buttonMouseLeave", null),
        (0, a.Cg)([s.o], ne.prototype, "onParentScrollStop", null),
        (ne = (0, a.Cg)([_.PA], ne));
      const ae = () =>
          l.createElement("div", { className: "AppButton Placeholder" }),
        ie = (e) => {
          var t;
          const r = !!e.loading,
            n = null !== (t = e.apps) && void 0 !== t ? t : [];
          let a = "AppCarousel";
          return (
            e.className && (a += " " + e.className),
            l.createElement(
              re,
              { additionalClassNames: a, paginationAlignmentOffset: -20 },
              r &&
                l.createElement(
                  l.Fragment,
                  null,
                  l.createElement(ae, null),
                  l.createElement(ae, null),
                  l.createElement(ae, null),
                  l.createElement(ae, null),
                ),
              !r &&
                n.map((e) =>
                  l.createElement(ne, Object.assign({ key: e.appkey }, e)),
                ),
            )
          );
        };
      var se;
      class oe extends l.Component {
        constructor(e) {
          super(e), (this.state = { storeData: null });
        }
        componentDidMount() {
          Y()
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
                    u.$,
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
                (0, m.we)("#WelcomeToSteamVR"),
              ),
              l.createElement(
                "div",
                { className: "QuickLaunchWelcomeMessage" },
                (0, m.we)("#LaunchSteamToFindGames"),
              ),
            ),
          );
        }
      }
      let le = (se = class extends l.Component {
        constructor(e) {
          super(e),
            (this.m_mailbox = new i._n()),
            (this.state = {}),
            this.m_mailbox.Init("systemui_quicklaunch");
        }
        launchApplication(e, t, r) {
          var n, a;
          p.v.instance.RecordUIEvent(
            "QuickLaunchAppClick",
            (t ? "top" : "bottom") + ":" + r,
            e.key,
          ),
            null === (a = (n = this.props).onGameLaunched) ||
              void 0 === a ||
              a.call(n, e);
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
          if (null != v.HR.apps)
            for (let t of v.HR.apps)
              t.is_internal ||
                (t.is_dashboard_overlay && !t.show_overlay_in_quicklaunch) ||
                t.is_hidden ||
                t.is_instance ||
                se.s_setBlacklistedAppkeys.has(t.key) ||
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
            const a = r < se.TOP_ROW_LENGTH;
            return (
              a || (n -= se.TOP_ROW_LENGTH),
              {
                key: e.key,
                appkey: e.key,
                title: e.name,
                imageUrl: t(e),
                onClick: () => this.launchApplication(e, a, n),
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
            v.HR.settings.get("/settings/dashboard/forceWelcomeScreen");
          if (r) e = l.createElement(oe, null);
          else {
            let r = t.slice(0, se.TOP_ROW_LENGTH),
              n = t.slice(se.TOP_ROW_LENGTH);
            e = l.createElement(
              l.Fragment,
              null,
              l.createElement(ie, { className: "TopRow", apps: r }),
              l.createElement(ie, { className: "BottomRow", apps: n }),
            );
          }
          return l.createElement(
            y.L_,
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
      (le.TOP_ROW_LENGTH = 4),
        (le.s_setBlacklistedAppkeys = new Set([
          "openvr.tool.steamvr_room_setup",
          "openvr.tool.steamvr_media_player",
          "openvr.tool.steamvr_desktop_gametheatre",
          "openvr.tool.steamvr_tutorial",
          "openvr.tool.steamvr_environments",
          "openvr.tool.steamvr_environments_tools",
          d.MM,
          d.v0,
        ])),
        (le = se = (0, a.Cg)([_.PA], le));
      var ce,
        ue = r(998),
        de = r(3473),
        me = r(917),
        pe = r(4963),
        he = r(4734);
      function ge(e) {
        const t = (0, O.Sm)(),
          r = !t || O.SW.m_bShowLegacyDashboardBar,
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
                T.wI,
                {
                  ref: n,
                  title: (0, m.we)("#OldLibrary"),
                  iconEnum: 19,
                  showTabInDashboardHamburgerMenu: t,
                  showTabInDashboardBar: !t || void 0,
                },
                l.createElement(
                  T.P9,
                  { summonOverlayKey: d.Sx },
                  l.createElement(le, { onGameLaunched: e.onGameLaunched }),
                ),
              )
            : null
        );
      }
      (0, F.PA)(function () {
        return null;
      });
      const ve = (0, F.PA)(function (e) {
          var t;
          let r =
            null !== (t = VRHTML.GetHostInfo(i.k2.Hostname)) && void 0 !== t
              ? t
              : "unknown";
          return l.createElement(
            i.Zk,
            {
              meters_per_pixel: d.iZ,
              interactive: !0,
              debug_name: "vrlink-info",
            },
            l.createElement(
              "div",
              { className: "FloatingButtonRow" },
              l.createElement(
                u.$,
                { className: "ButtonControl", onClick: e.onClick },
                l.createElement("span", null, r.toLowerCase(), " "),
              ),
            ),
          );
        }),
        _e = (0, F.PA)(function (e) {
          return null;
        });
      function be(e) {
        return (
          e == d.Wt ||
          e == d.Bn ||
          (null == e ? void 0 : e.startsWith(d.GO)) ||
          (null == e ? void 0 : e.startsWith(d.Uv)) ||
          (null == e ? void 0 : e.startsWith(d.Wm)) ||
          ((null == e ? void 0 : e.startsWith(d.So)) &&
            !(null == e ? void 0 : e.startsWith(d.bl))) ||
          (null == e ? void 0 : e.startsWith(d.Kh))
        );
      }
      function Se(e) {
        try {
          if ("turn_signal_menu" == e.icon.overlay)
            return "/dashboard/images/icons/turnsignal.svg";
          if (e.icon.overlay)
            return null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VRDashboardManager.GetOverlayImage(
                  e.icon.overlay + ".thumb",
                );
          if (e.icon.enum)
            switch (e.icon.enum) {
              case 16:
                return "/dashboard/images/icons/svr_settings.svg";
              case 19:
                return "/dashboard/images/icons/svr_items.svg";
              case 15:
              case 18:
                return "/dashboard/images/icons/svr_desktop_alt.svg";
            }
          else e.icon.hwnd;
        } catch (e) {}
        return null;
      }
      class ye extends l.Component {
        constructor(e) {
          super(e),
            (this.m_BatteryStateChangedCallbackHandle = null),
            (this.m_DeviceRoleChangedCallbackHandle = null),
            (this.m_DeviceEventCallbackHandle = null),
            (this.deviceIndex = i.ne),
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
            r = i.ne;
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
            r != i.ne)
          ) {
            if (
              ((e = VRHTML.VRProperties.GetBoolProperty(
                r,
                i.fD.DeviceProvidesBatteryStatus_Bool,
              )),
              e)
            ) {
              const e = VRHTML.VRProperties.GetFloatProperty(
                r,
                i.fD.DeviceBatteryPercentage_Float,
              );
              (t = VRHTML.VRProperties.GetBoolProperty(
                r,
                i.fD.DeviceIsCharging_Bool,
              )),
                null == this.batteryLevelStable || 0 == this.batteryLevelStable
                  ? (this.batteryLevelStable = e)
                  : ((this.batteryLevelStable = Math.min(
                      this.batteryLevelStable,
                      e + ye.kBatteryLevelHysteresis,
                      1,
                    )),
                    (this.batteryLevelStable = Math.max(
                      this.batteryLevelStable,
                      e - ye.kBatteryLevelHysteresis,
                      0,
                    )));
            }
            this.devicePowerUsage = VRHTML.VRProperties.GetFloatProperty(
              r,
              i.fD.DevicePowerUsage_Float,
            );
          }
          let n = ue.C.GetBatteryIcon(
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
          (e != i.ku.Activated && e != i.ku.Deactivated) || this.update();
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
      (ye.kBatteryLevelHysteresis = 0.02),
        (0, a.Cg)([s.o], ye.prototype, "updateControllerStatus", null),
        (0, a.Cg)([s.o], ye.prototype, "onBatteryStateChanged", null),
        (0, a.Cg)([s.o], ye.prototype, "onDeviceRoleChanged", null),
        (0, a.Cg)([s.o], ye.prototype, "onDeviceEvent", null);
      class fe extends l.Component {
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
          const e = m.A0.GetLocale();
          let t = this.state.time.toLocaleTimeString(e, {
              hour: "numeric",
              minute: "2-digit",
            }),
            r = null;
          const n = t.toLowerCase(),
            a = Math.max(n.lastIndexOf("am"), n.lastIndexOf("pm"));
          return (
            a >= 0 && ((r = t.substring(a)), (t = t.substring(0, a - 1))),
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
      (0, a.Cg)([s.o], fe.prototype, "updateTime", null);
      const Re = (e) =>
          l.createElement(
            "div",
            { className: "Title" },
            e.iconUrl && l.createElement(y.vX, { src: e.iconUrl, shadow: !0 }),
            l.createElement("span", { className: "NoWrapText" }, e.name),
          ),
        we = (0, F.PA)(function (e) {
          var t;
          const r = O.SW.activeFrame;
          return r
            ? (null === (t = r.activePage) || void 0 === t
                ? void 0
                : t.summonOverlayKey) == d.Wm
              ? l.createElement(Re, {
                  name: (0, m.we)("#BindingUI_WindowTitle_ControllerBinding"),
                  iconUrl: "/dashboard/images/icons/svr_settings.svg",
                })
              : l.createElement(Re, { name: r.title, iconUrl: Se(r) })
            : null;
        }),
        Ce = (0, F.PA)(function (e) {
          const t = O.SW.isDarkMode,
            r = t ? { r: 0.02, g: 0.02, b: 0.02 } : null,
            n = t ? 0 : 0.1,
            a = !t;
          let s = null;
          if (
            he.Q.desktopFrames.includes(O.SW.activeFrame) ||
            he.Q.desktopWindowFrames.includes(O.SW.activeFrame)
          ) {
            s = 1860 - 20;
          }
          return l.createElement(
            l.Fragment,
            null,
            l.createElement(
              i.dL,
              { translation: { y: 0.008 } },
              l.createElement(
                i.N,
                { color: r },
                l.createElement(
                  i.Zk,
                  {
                    curvature_origin_id:
                      null == e ? void 0 : e.sCurvatureOriginId,
                    origin: i.Oi.BottomCenter,
                    interactive: !1,
                    meters_per_pixel: d.iZ,
                    debug_name: "StatusBar",
                    reflect: n,
                  },
                  l.createElement(
                    "div",
                    { className: "StatusBar", style: { width: s } },
                    l.createElement(
                      "div",
                      { className: "Section Left" },
                      a && l.createElement(we, null),
                      l.createElement(ye, {
                        role: i.kG.TrackedControllerRole_LeftHand,
                        style: ue.b.HorizontalPips,
                      }),
                    ),
                    l.createElement(
                      "div",
                      { className: "Section Center" },
                      l.createElement(ye, {
                        deviceIndex: i.Gz,
                        style: ue.b.VerticalBattery,
                      }),
                      l.createElement(fe, null),
                    ),
                    l.createElement(
                      "div",
                      { className: "Section Right" },
                      l.createElement(ye, {
                        role: i.kG.TrackedControllerRole_RightHand,
                        style: ue.b.HorizontalPips,
                      }),
                    ),
                  ),
                ),
              ),
            ),
          );
        });
      let Me = (ce = class extends l.Component {
        constructor(e) {
          super(e),
            (this.m_mailbox = new i._n()),
            (this.m_refWindowScrollPanel = l.createRef()),
            (this.state = {}),
            this.m_mailbox.Init(ce.k_sMailboxName);
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
          const e = he.Q.windows.length > 0,
            t = he.Q.desktopFrames.length > 1 || e;
          if (!t && !e) return null;
          return l.createElement(
            y.DE,
            Object.assign({}, this.props, {
              additionalClassNames: "DesktopTray FixedWidth",
            }),
            l.createElement(
              ee.M,
              {
                scrollDirection: ee.D.Horizontal,
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
                  he.Q.desktopFrames.map((e) =>
                    l.createElement(y.N2, {
                      additionalClassNames: "ViewButton",
                      key: e.frameID,
                      label: e.title,
                      active: e.isActiveDashboardFrame,
                      onClick: () => this.props.onFrameButtonClicked(e),
                    }),
                  ),
                he.Q.desktopWindowFrames.map((e) =>
                  l.createElement(y.N2, {
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
                l.createElement(y.N2, {
                  iconUrl: "/dashboard/images/icons/icon_add.png",
                  additionalClassNames: "AddWindow",
                  title: (0, m.we)("#AddView"),
                  tooltipTranslation: { x: 0, y: -0.15, z: 0.1 },
                  onClick: this.props.onToggleWindowList,
                  onMouseEnter: this.props.onClearPopoverMenuTimeout,
                  onMouseLeave: () => this.props.onStartPopoverMenuTimeout(500),
                }),
              ),
          );
        }
      });
      (Me.k_sMailboxName = "systemui_desktoptray"),
        (Me = ce = (0, a.Cg)([F.PA], Me));
      let Te = class extends l.Component {
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
            v.HR.settings.get(
              "/settings/audio/enablePlaybackMirrorIndependentVolume",
            ) && v.HR.settings.get("/settings/audio/enablePlaybackMirror")
          );
        }
        get enableAudioMirrorControls() {
          return !!v.HR.settings.get(
            "/settings/audio/activePlaybackMirrorDevice",
          );
        }
        render() {
          const e =
            (this.showAudioMirrorControls ? 3 : 2) >= 3
              ? 0
              : this.props.position;
          return l.createElement(
            y.DE,
            Object.assign({}, this.props, {
              position: e,
              ref: this.m_refTray,
              additionalClassNames: "VolumeTray",
            }),
            l.createElement(
              "div",
              { className: "Section" },
              l.createElement(
                y.Nd,
                {
                  onClick: de.f.Instance.toggleMicrophoneMute,
                  title: de.f.Instance.microphoneMuted
                    ? (0, m.we)("#UnmuteMicrophone")
                    : (0, m.we)("#MuteMicrophone"),
                },
                l.createElement("img", {
                  className: "BlackToWhite",
                  src: de.f.Instance.microphoneMuted
                    ? "/dashboard/images/icons/svr_mic_mute.svg"
                    : "/dashboard/images/icons/svr_mic_active.svg",
                }),
              ),
              l.createElement(y.Wn, {
                title: (0, m.we)("#MicrophoneVolume"),
                value: de.f.Instance.microphoneVolume,
                onChange: de.f.Instance.setMicrophoneVolume,
                onMouseEnter: this.onSliderMouseEnter,
                onMouseLeave: this.onSliderMouseLeave,
                onFinalChange: this.onSliderFinalChange,
                renderValue: (e) => Math.round(100 * e) + "%",
                valueStyleVariant: me.Te.OnHandle,
                additionalClassName: (0, w.FH)([
                  "Muted",
                  de.f.Instance.microphoneMuted,
                ]),
                interactionEndSoundEffect: pe.j.VolumePreview,
              }),
            ),
            this.showAudioMirrorControls &&
              l.createElement(
                "div",
                { className: "Section" },
                l.createElement(
                  y.Nd,
                  {
                    onClick: de.f.Instance.toggleMirrorMute,
                    enabled: this.enableAudioMirrorControls,
                    title: de.f.Instance.mirrorMuted
                      ? (0, m.we)("#UnmuteAudioMirror")
                      : (0, m.we)("#MuteAudioMirror"),
                  },
                  l.createElement("img", {
                    className: "BlackToWhite",
                    src: de.f.Instance.mirrorMuted
                      ? "/dashboard/images/icons/svr_volume_mirror_mute.svg"
                      : "/dashboard/images/icons/svr_volume_mirror.svg",
                  }),
                ),
                l.createElement(y.Wn, {
                  title: (0, m.we)("#AudioMirrorVolume"),
                  value: de.f.Instance.mirrorVolume,
                  enabled: this.enableAudioMirrorControls,
                  onChange: de.f.Instance.setMirrorVolume,
                  onMouseEnter: this.onSliderMouseEnter,
                  onMouseLeave: this.onSliderMouseLeave,
                  onFinalChange: this.onSliderFinalChange,
                  renderValue: (e) => Math.round(100 * e) + "%",
                  valueStyleVariant: me.Te.OnHandle,
                  additionalClassName: (0, w.FH)([
                    "Muted",
                    de.f.Instance.mirrorMuted,
                  ]),
                  interactionEndSoundEffect: pe.j.VolumePreview,
                }),
              ),
            l.createElement(
              "div",
              { className: "Section" },
              l.createElement(
                y.Nd,
                {
                  onClick: de.f.Instance.toggleMute,
                  title: de.f.Instance.muted
                    ? (0, m.we)("#Unmute_Headset")
                    : (0, m.we)("#Mute_Headset"),
                },
                l.createElement("img", {
                  className: "BlackToWhite",
                  src: de.f.Instance.muted
                    ? "/dashboard/images/icons/svr_volume_mute.svg"
                    : "/dashboard/images/icons/svr_volume.svg",
                }),
              ),
              l.createElement(y.Wn, {
                title: (0, m.we)("#HeadsetVolume"),
                sliderRef: this.m_refSlider,
                value: de.f.Instance.volume,
                onChange: de.f.Instance.setVolume,
                onMouseEnter: this.onSliderMouseEnter,
                onMouseLeave: this.onSliderMouseLeave,
                onFinalChange: this.onSliderFinalChange,
                renderValue: (e) => Math.round(100 * e) + "%",
                valueStyleVariant: me.Te.OnHandle,
                additionalClassName: (0, w.FH)(["Muted", de.f.Instance.muted]),
                interactionEndSoundEffect: pe.j.VolumePreview,
              }),
            ),
          );
        }
      };
      (0, a.Cg)([s.o], Te.prototype, "onSliderMouseEnter", null),
        (0, a.Cg)([s.o], Te.prototype, "onSliderMouseLeave", null),
        (0, a.Cg)([s.o], Te.prototype, "onSliderFinalChange", null),
        (0, a.Cg)([o.computed], Te.prototype, "showAudioMirrorControls", null),
        (0, a.Cg)(
          [o.computed],
          Te.prototype,
          "enableAudioMirrorControls",
          null,
        ),
        (Te = (0, a.Cg)([F.PA], Te));
      var Ee = r(3496);
      class Ve extends Ee._J {
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
      (0, a.Cg)([s.o], Ve.prototype, "buildNode", null);
      var De,
        Be = r(2156),
        Ae = r(3246),
        Oe = r(7261);
      const Ie = !1;
      var ke, Le;
      !(function (e) {
        (e[(e.Near = 0)] = "Near"),
          (e[(e.Middle = 1)] = "Middle"),
          (e[(e.Far = 2)] = "Far"),
          (e[(e.VRGamepadUI = 3)] = "VRGamepadUI");
      })(ke || (ke = {}));
      class He extends l.Component {
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
      function Pe(e) {
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
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Power = 1)] = "Power"),
          (e[(e.ExternalOverlays = 2)] = "ExternalOverlays"),
          (e[(e.Volume = 3)] = "Volume"),
          (e[(e.Windows = 4)] = "Windows");
      })(Le || (Le = {}));
      let Fe = (De = class extends l.Component {
        constructor(e) {
          super(e),
            (this.m_setSuppressingFade = new Set()),
            (this.m_mailbox = new i._n()),
            (this.m_timeoutPopoverMenuHide = 0),
            (this.m_refPopoverMenu = l.createRef()),
            (this.m_appStateChangedAutorunDisposer = null),
            (this.m_DashboardTabsReactionDisposer = null),
            (this.m_DashboardTabsUpdatedReactionDisposer = null),
            (this.m_LegacyKeyboardAutorunDisposer = null),
            (this.m_refDesktopTray = l.createRef()),
            (this.m_refOverlayTransform = l.createRef()),
            (this.m_refVolumeTray = l.createRef()),
            (this.m_sLastActiveOverlaySummonKey = void 0),
            (this.m_activeOverlayThatVanished = void 0),
            (this.m_bUserManuallySwitchToOldLibrary = !1),
            (this.m_bWaitingOnInitialOverlayToAutoShow = !1),
            (this.m_dashboardThumbnailsChangedEventHandle = null),
            (this.m_miscEventHandles = []),
            (this.m_ePreviousSceneApplicationState = i.HW.None),
            (this.m_vrGamepadUIPathPropertiesAutorunDisposer = null),
            (this.m_gamepadFocusAutorunDisposer = null),
            this.ImplementFutureMethods(),
            this.ImplementSomeGlobalActions(),
            (0, o.makeObservable)(this),
            (this.state = {
              bMuted: !1,
              bGrabbed: !1,
              sLastShownAppKey: "",
              eActiveLegacyDashboardPopover: Le.None,
              setForcingBoundsVisible: {},
              desktopViewDebugInfo: {
                inputFrameTime: 0,
                mapOverlayFrameTimes: new Map(),
              },
              bPlacementModeActive: !1,
              mapPortals: new Map(),
            }),
            v.HR.Init(!1),
            i.Cw.getInstance(),
            this.m_mailbox.Init(De.k_sDashboardMailboxName).then(() => {
              this.m_mailbox.RegisterHandler(
                De.k_sSetDashboardFadeSupressionMessage,
                this.onSetDashboardFadeSuppression,
              ),
                this.m_mailbox.RegisterHandler(
                  De.k_sDashboardOverlayDestroyedMessage,
                  this.onDashboardOverlayDestroyed,
                ),
                this.m_mailbox.RegisterHandler(
                  De.k_sUpdateDebugInfoMessage,
                  this.onUpdateDebugInfo,
                ),
                this.m_mailbox.RegisterHandler(
                  De.k_sSetDashboardForceBoundsVisible,
                  this.onSetDashboardForceBoundsVisible,
                ),
                this.m_mailbox.RegisterHandler(
                  "show_dashboard_requested",
                  (e) => this.onShowDashboardRequested(e, !0),
                ),
                this.m_mailbox.RegisterHandler(
                  "switch_dashboard_overlay_requested",
                  (e) => this.onShowDashboardRequested(e, !1),
                ),
                this.m_mailbox.RegisterHandler("vrcmd_dock_overlay", (e) =>
                  this.onVrCmdDockOverlayRequested(e),
                ),
                this.m_mailbox.RegisterHandler(
                  "vrcmd_toggle_theater_stereo",
                  () => O.SW.onVrCmdToggleTheaterStereoRequested(),
                ),
                this.m_mailbox.RegisterHandler(
                  "hide_dashboard_requested",
                  this.onHideDashboardRequested,
                ),
                this.m_mailbox.RegisterHandler("vrlink_room_setup", (e) =>
                  this.onVRLinkRoomSetup(e),
                ),
                this.m_mailbox.RegisterHandler("required_room_setup", (e) =>
                  this.onRequiredRoomSetup(e),
                ),
                this.m_mailbox.RegisterHandler("disable_theater_mode", (e) =>
                  this.onDisableTheaterMode(e),
                );
            }),
            H.p.SteamVR.SetImplementation(
              "DashboardTabClicked",
              ({ tab_id: e }) => {
                var t, r, n, a;
                let i = T.JJ.GetFrameWithTabId(e);
                if (
                  (e == T.Sq.LegacyFloatingSteamMainMenu_VRSettings &&
                    ((i = T.JJ.GetFramesWithAssociatedSummonKeys(d.Wt)[0]),
                    (null === (t = null == i ? void 0 : i.activePage) ||
                    void 0 === t
                      ? void 0
                      : t.summonOverlayKey) != d.Wt &&
                      (null === (r = null == i ? void 0 : i.activePage) ||
                      void 0 === r
                        ? void 0
                        : r.summonOverlayKey) != d.Wm &&
                      (null == i ||
                        i.SwitchToPage(
                          null === (n = i.GetPageWithOverlaySummonKey(d.Wt)) ||
                            void 0 === n
                            ? void 0
                            : n.pageID,
                        ))),
                  (null == i
                    ? void 0
                    : i.associatedSummonOverlayKeys.includes(d.Sx)) &&
                    (this.m_bUserManuallySwitchToOldLibrary = !0),
                  !this.switchToFrameInternal(
                    i,
                    void 0,
                    "User clicked VRGamepadUI tab",
                  ))
                )
                  throw new Error(
                    "Failed to switch to tab: " +
                      e +
                      " (frameID: " +
                      (null !== (a = null == i ? void 0 : i.frameID) &&
                      void 0 !== a
                        ? a
                        : "null") +
                      ")",
                  );
              },
            ),
            H.p.SteamVR.SetImplementation(
              "ShowGame",
              this.onShowOverlayRequestFromSteam,
            ),
            H.p.SteamVR.SetImplementation(
              "ShowOverlay",
              this.onShowOverlayRequestFromSteam,
            );
        }
        ImplementFutureMethods() {
          0;
        }
        ImplementSomeGlobalActions() {}
        componentDidMount() {
          var e;
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
              const n = g.G.Instance.SceneApplicationState,
                a = n != i.HW.None,
                s = this.m_ePreviousSceneApplicationState != i.HW.None;
              if (a && !s) O.SW.HideTheaterOverlay();
              else if (!a && s && !O.SW.isTheaterMode) {
                if (
                  null !==
                    (e = v.HR.settings.get(
                      "/settings/dashboard/autoShowGameTheater",
                    )) &&
                  void 0 !== e &&
                  e
                ) {
                  const e = T.JJ.frames.find((e) =>
                    e.associatedSummonOverlayKeys.some((e) =>
                      e.startsWith(d.bl),
                    ),
                  );
                  e && (0, Oe.SC)(e);
                }
              }
              (this.m_ePreviousSceneApplicationState = n),
                (null ===
                  (r =
                    null === (t = O.SW.activeFrame) || void 0 === t
                      ? void 0
                      : t.activePage) || void 0 === r
                  ? void 0
                  : r.summonOverlayKey) != d.dw ||
                  a ||
                  this.switchToHomeOverlay();
            })),
            this.m_mailbox.WaitForConnect().then(() => {
              this.m_LegacyKeyboardAutorunDisposer = (0, o.autorun)(() => {
                O.SW.isVRGamepadUI ||
                  (!O.SW.m_bDashboardVisible && !O.SW.m_bKeyboardVisible) ||
                  this.m_mailbox.SendMessage("keyboard_vrwebui/main", {
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
              const e = O.SW.priorityGamepadFocusOverlay,
                t = g.G.Instance.SceneApplicationState !== i.HW.None;
              O.SW.m_bDashboardVisible ||
              !e ||
              t ||
              (0 != I.H.roomSetupStep && 6 != I.H.roomSetupStep)
                ? this.SetGamepadFocusEnable(!1, null)
                : this.SetGamepadFocusEnable(!0, e);
            }));
          const t = new k.T4();
          t.set_can_sleep(
            v.HR.settings.get("/settings/dashboard/allowSystemSleep"),
          ),
            t.set_can_shutdown(
              v.HR.settings.get("/settings/dashboard/allowSystemShutdown"),
            ),
            t.set_can_restart_system(
              v.HR.settings.get("/settings/dashboard/allowSystemRestart"),
            ),
            t.set_can_exitvr(
              null ===
                (e = v.HR.settings.get("/settings/dashboard/allowExitVR")) ||
                void 0 === e ||
                e,
            ),
            (0, L.Z)(t);
        }
        componentDidUpdate(e, t) {
          this.updateVRGamepadUIPathProperties();
        }
        updateVRGamepadUIPathProperties() {
          var e,
            t,
            r,
            n,
            a,
            i,
            s,
            o,
            l,
            c,
            u,
            m,
            p,
            h,
            g,
            v,
            _,
            b,
            S,
            y,
            f,
            R,
            w,
            C,
            M,
            E,
            V,
            D;
          null ===
            (t =
              null === (e = O.SW.activeFrame) || void 0 === e
                ? void 0
                : e.activePage) ||
            void 0 === t ||
            t.summonOverlayKey;
          const B = new k.UQ();
          for (const e of T.JJ.frames)
            B.add_tabs(k.MS.fromObject(e.tab)),
              e === O.SW.activeFrame && B.set_selected_tab_id(e.tab.tab_id),
              e == O.SW.mainSteamFrame && B.set_vr_steam_tab_id(e.tab.tab_id);
          B.tabs().sort(We);
          const A = new k._z();
          A.add_bar_buttons(
            k.Gm.fromObject({
              type: 3,
              action_id:
                null === (r = P.DZ[1]) || void 0 === r ? void 0 : r.actionID,
              is_main_hamburger_menu: !0,
            }),
          ),
            A.add_bar_menu_items(
              k.my.fromObject({
                type: 2,
                parent_menu_action_id:
                  null === (n = P.DZ[1]) || void 0 === n ? void 0 : n.actionID,
              }),
            ),
            A.add_bar_menu_items(
              k.my.fromObject({
                type: 3,
                parent_menu_action_id:
                  null === (a = P.DZ[1]) || void 0 === a ? void 0 : a.actionID,
              }),
            ),
            (null === (i = P.DZ[7]) || void 0 === i ? void 0 : i.isValid)
              ? A.add_bar_menu_items(
                  k.my.fromObject({
                    type: 1,
                    action_id:
                      null === (s = P.DZ[8]) || void 0 === s
                        ? void 0
                        : s.actionID,
                    parent_menu_action_id:
                      null === (o = P.DZ[7]) || void 0 === o
                        ? void 0
                        : o.actionID,
                  }),
                )
              : A.add_bar_buttons(
                  k.Gm.fromObject({
                    type: 1,
                    action_id:
                      null === (l = P.DZ[8]) || void 0 === l
                        ? void 0
                        : l.actionID,
                  }),
                ),
            A.add_playspace_actions(
              null === (c = P.DZ[8]) || void 0 === c ? void 0 : c.actionID,
            ),
            (null === (u = P.DZ[2]) || void 0 === u ? void 0 : u.isValid) &&
              A.add_bar_menu_items(
                k.my.fromObject({
                  type: 1,
                  action_id:
                    null === (m = P.DZ[2]) || void 0 === m
                      ? void 0
                      : m.actionID,
                  parent_menu_action_id:
                    null === (p = P.DZ[1]) || void 0 === p
                      ? void 0
                      : p.actionID,
                }),
              ),
            (null === (h = P.DZ[3]) || void 0 === h ? void 0 : h.isValid) &&
              A.add_bar_menu_items(
                k.my.fromObject({
                  type: 1,
                  action_id:
                    null === (g = P.DZ[3]) || void 0 === g
                      ? void 0
                      : g.actionID,
                  parent_menu_action_id:
                    null === (v = P.DZ[1]) || void 0 === v
                      ? void 0
                      : v.actionID,
                }),
              ),
            (null === (_ = P.DZ[4]) || void 0 === _ ? void 0 : _.isValid) &&
              A.add_bar_buttons(
                k.Gm.fromObject({
                  type: 1,
                  action_id:
                    null === (b = P.DZ[4]) || void 0 === b
                      ? void 0
                      : b.actionID,
                }),
              ),
            A.add_bar_buttons(k.Gm.fromObject({ type: 2 })),
            (null === (S = P.DZ[6]) || void 0 === S ? void 0 : S.isValid) &&
              A.add_bar_buttons(
                k.Gm.fromObject({
                  type: 1,
                  action_id:
                    null === (y = P.DZ[6]) || void 0 === y
                      ? void 0
                      : y.actionID,
                }),
              ),
            (null === (f = P.DZ[5]) || void 0 === f ? void 0 : f.isValid) &&
              A.add_bar_buttons(
                k.Gm.fromObject({
                  type: 1,
                  action_id:
                    null === (R = P.DZ[5]) || void 0 === R
                      ? void 0
                      : R.actionID,
                }),
              ),
            A.add_bar_menu_items(
              k.my.fromObject({
                type: 4,
                parent_menu_action_id:
                  null === (w = P.DZ[1]) || void 0 === w ? void 0 : w.actionID,
              }),
            );
          const I = new Set();
          for (const e of A.bar_buttons()) I.add(e.action_id());
          for (const e of A.bar_menu_items())
            I.add(e.action_id()), I.add(e.parent_menu_action_id());
          for (const e of I) {
            const t = P.g.GetAction(e);
            (null == t ? void 0 : t.protoForSteam) &&
              A.add_defined_actions(Q.z.fromObject(t.protoForSteam));
          }
          const H = new k.J$();
          var F;
          if (
            (H.set_windows(
              he.Q.windows.map((e) => {
                var t;
                const r = new k.gL();
                if (
                  (r.set_hwnd(Number.parseInt(e.hwnd)),
                  r.set_window_id(Number.parseInt(e.hwnd)),
                  r.set_title(e.title),
                  e.overlay_key)
                ) {
                  const n = he.Q.desktopWindowFrames.find((t) =>
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
            ),
            null != Ae.r.legacyFloatingMainMenuPopup &&
              (B.add_tabs(
                k.MS.fromObject({
                  tab_id: T.Sq.LegacyFloatingSteamMainMenu_VRSettings,
                  visible_in_dashboard_bar: !0,
                }),
              ),
              B.set_deprecated_vr_settings_tab_id(
                T.Sq.LegacyFloatingSteamMainMenu_VRSettings,
              ),
              !(null === (C = O.SW.mainSteamFrame) || void 0 === C
                ? void 0
                : C.isActiveDashboardFrame) ||
                ((null ===
                  (E =
                    null === (M = O.SW.mainSteamFrame) || void 0 === M
                      ? void 0
                      : M.activePage) || void 0 === E
                  ? void 0
                  : E.summonOverlayKey) != d.Wt &&
                  (null ===
                    (D =
                      null === (V = O.SW.mainSteamFrame) || void 0 === V
                        ? void 0
                        : V.activePage) || void 0 === D
                    ? void 0
                    : D.summonOverlayKey) != d.Wm) ||
                B.set_selected_tab_id(
                  T.Sq.LegacyFloatingSteamMainMenu_VRSettings,
                )),
            z.H.BHasMutualCapability(3) ||
              ((null == (F = A) ? void 0 : F.bar_buttons()) &&
                F.set_bar_buttons(
                  F.bar_buttons().filter((e) => 2 != e.type()),
                )),
            z.H.BHasMutualCapability(14) ||
              (function (e) {
                var t, r, n;
                const a = new Map();
                for (const t of e.defined_actions()) a.set(t.action_id(), t);
                const i =
                    null === (t = e.bar_buttons()) || void 0 === t
                      ? void 0
                      : t
                          .map((e) => {
                            const t = new k.Yz(),
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
                                t.set_invocation(3),
                                  t.set_special_invocation(1);
                                break;
                              case 3:
                                t.set_is_menu(!0);
                            }
                            if (!e.is_main_hamburger_menu()) return t;
                          })
                          .filter(Boolean),
                  s =
                    null ===
                      (r = e
                        .bar_buttons()
                        .find((e) => e.is_main_hamburger_menu())) ||
                    void 0 === r
                      ? void 0
                      : r.action_id(),
                  o =
                    null === (n = e.bar_menu_items()) || void 0 === n
                      ? void 0
                      : n
                          .map((e) => {
                            const t = new k.Yz(),
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
                                e.parent_menu_action_id() != s &&
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
                e.set_deprecated_actions([...i, ...o]),
                  e.set_bar_buttons(void 0),
                  e.set_bar_menu_items(void 0),
                  e.set_defined_actions(void 0);
              })(A),
            !z.H.BHasMutualCapability(10))
          ) {
            for (const e of A.deprecated_actions()) K(e);
            for (const e of B.tabs()) $(e);
          }
          (0, L.Z)(B), (0, L.Z)(A), (0, L.Z)(H);
        }
        componentWillUnmount() {
          var e, t, r, n, a, i, s;
          clearTimeout(this.m_timeoutHoverStateEnd),
            clearTimeout(this.m_timeoutPopoverMenuHide),
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
            null === (a = this.m_gamepadFocusAutorunDisposer) ||
              void 0 === a ||
              a.call(this),
            null === (i = this.m_LegacyKeyboardAutorunDisposer) ||
              void 0 === i ||
              i.call(this),
            null === (s = this.m_dashboardThumbnailsChangedEventHandle) ||
              void 0 === s ||
              s.unregister();
        }
        static getControlBarTranslation() {
          return O.SW.isVRGamepadUI
            ? { y: -1.2, z: 0.35 }
            : { y: -1.2, z: 0.15 };
        }
        onShowOverlayRequestFromSteam(e) {
          const t = T.JJ.GetFramesWithAssociatedSummonKeys(e.overlay_key)[0];
          t
            ? t.legacyOverlayState &&
              (t.legacyOverlayState.dockLocation == Oe.$z.Theater
                ? e.overlay_key != d.wi &&
                  (null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VRDashboardManager.HideDashboard("ShowGame/theater"))
                : t.legacyOverlayState.dockLocation == Oe.$z.Dashboard
                  ? null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VROverlay.ShowDashboard(e.overlay_key)
                  : null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VRDashboardManager.HideDashboard("ShowGame/other"))
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
          t != O.SW.m_bSuppressingFadeExternal &&
            (O.SW.m_bSuppressingFadeExternal = t);
        }
        onGrabStart() {
          this.setState({ bGrabbed: !0 });
        }
        onGrabEnd() {
          this.setState({ bGrabbed: !1 });
          for (const e of T.JJ.frames)
            e.legacyOverlayState &&
              (e.legacyOverlayState.bSuppressDoubleOverlayControlBar = !1);
        }
        onSetDashboardForceBoundsVisible(e) {
          this.setState((t, r) => {
            let n = Object.assign({}, t.setForcingBoundsVisible);
            return (
              (n[e.for_overlay_key] = new Set(n[e.for_overlay_key])),
              e.force_bounds_visible
                ? n[e.for_overlay_key].add(e.for_id)
                : n[e.for_overlay_key].delete(e.for_id),
              { setForcingBoundsVisible: n }
            );
          });
        }
        onDashboardOverlayDestroyed(e) {
          var t;
          (null === (t = O.SW.activeFrame) || void 0 === t
            ? void 0
            : t.associatedSummonOverlayKeys.includes(e.overlay_key)) &&
            this.switchToHomeOverlay();
          const r = T.JJ.GetFramesWithAssociatedSummonKeys(e.overlay_key)[0];
          (null == r ? void 0 : r.legacyOverlayState) &&
            (0, Oe.EE)(
              e.overlay_key,
              r.legacyOverlayState,
              e.visible_time_in_seconds,
            );
        }
        onDashboardTabsUpdated() {
          var e, t, r, n, a;
          const i = this.m_sLastActiveOverlaySummonKey;
          (this.m_sLastActiveOverlaySummonKey =
            null !==
              (r =
                null ===
                  (t =
                    null === (e = O.SW.activeFrame) || void 0 === e
                      ? void 0
                      : e.activePage) || void 0 === t
                  ? void 0
                  : t.summonOverlayKey) && void 0 !== r
              ? r
              : null),
            this.autoSwitchOverlayIfNeeded(),
            this.m_activeOverlayThatVanished &&
              T.JJ.HasFramesWithAssociatedSummonKeys(
                this.m_activeOverlayThatVanished.sSummonKey,
              ) &&
              (this.m_activeOverlayThatVanished = null);
          const s = this.GetDesiredInitialOverlayKey();
          this.m_bWaitingOnInitialOverlayToAutoShow &&
            T.JJ.HasFramesWithAssociatedSummonKeys(s) &&
            (this.m_bWaitingOnInitialOverlayToAutoShow = !1),
            i &&
              !T.JJ.HasFramesWithAssociatedSummonKeys(i) &&
              (this.m_activeOverlayThatVanished = {
                sSummonKey: i,
                timeVanished: new Date(),
              }),
            (null === (n = O.SW.activeFrame) || void 0 === n
              ? void 0
              : n.tabVisibility.bVisibleInDashboardHamburgerMenu) &&
              !(null === (a = O.SW.activeFrame) || void 0 === a
                ? void 0
                : a.tabVisibility.bVisibleInDashboardBar) &&
              O.SW.activeFrame.SetTabVisibility({ bVisibleInDashboardBar: !0 });
        }
        GetDesiredInitialOverlayKey() {
          const e = v.HR.settings.get(d.Bf);
          if (e) return e;
          const t = sessionStorage.getItem("last_active_overlay_key");
          return t || void 0;
        }
        onUpdateDebugInfo(e) {}
        renderActiveOverlay() {
          if (!O.SW.activeFrame) return null;
          const e = O.SW.isVRGamepadUI
            ? O.SW.m_fVRGamepadUI_GlobalActiveOverlayScale
            : 1;
          return l.createElement(
            l.Fragment,
            null,
            l.createElement(i.dL, { scale: e }, l.createElement(T.EK, null)),
          );
        }
        get legacyFilteredOverlayTabs() {
          return T.JJ.frames
            .filter(
              (e) =>
                e.tabVisibility.bVisibleInDashboardBar ||
                e.tabVisibility.bVisibleInDashboardHamburgerMenu,
            )
            .filter((e) => !e.associatedSummonOverlayKeys.every(be))
            .sort((e, t) => e.title.localeCompare(t.title));
        }
        switchToHomeOverlay() {
          const e = [d.wi, d.Sx];
          for (const t of e)
            if (T.JJ.HasFramesWithAssociatedSummonKeys(t)) {
              this.switchToOverlayInternal(t, "switchToDashboardLibrary");
              break;
            }
        }
        switchToOverlayInternal(e, t) {
          if (e == d.Bz) {
            let t = {
                type: "show_app_binding",
                app_key:
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VRApplications.GetSceneApplicationKey(),
              },
              r = "bindingui/" + i.OH[(0, i.R$)()];
            this.m_mailbox.SendMessage(r, t), (e = d.Wm);
          }
          const r = T.JJ.GetFramesWithAssociatedSummonKeys(e)[0];
          if (!r) return !1;
          const n = r.GetPageWithOverlaySummonKey(e);
          return !!n && this.switchToFrameInternal(r, n.pageID, t);
        }
        switchToFrameInternal(e, t, r) {
          var n;
          const a = e instanceof T.HC ? e : T.JJ.GetFrame(e);
          if (!a) return !1;
          const i = null != t ? a.GetPageWithID(t) : a.activePage;
          return (
            this.legacyFilteredOverlayTabs.includes(a) &&
              v.HR.SetSettingsValue(
                d.XO,
                null !== (n = null == i ? void 0 : i.summonOverlayKey) &&
                  void 0 !== n
                  ? n
                  : "",
              ),
            (this.m_activeOverlayThatVanished = null),
            null != t && a.SwitchToPage(t),
            (O.SW.activeFrame = a),
            (this.m_sLastActiveOverlaySummonKey =
              null == i ? void 0 : i.summonOverlayKey),
            (null == i ? void 0 : i.summonOverlayKey) &&
              (p.v.instance.RecordUIEvent(
                "SetDashboardOverlay",
                null != r ? r : "Button",
                null == i ? void 0 : i.summonOverlayKey,
              ),
              setTimeout(() => {
                sessionStorage.setItem(
                  "last_active_overlay_key",
                  null == i ? void 0 : i.summonOverlayKey,
                );
              }, 300)),
            !0
          );
        }
        autoSwitchOverlayIfNeeded() {
          var e, t, r;
          const n = [],
            a =
              null !==
                (r =
                  null ===
                    (t =
                      null === (e = O.SW.activeFrame) || void 0 === e
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
              De.k_nTimeLimitToReturnToActiveOverlayThatVanishedSeconds &&
              n.push(this.m_activeOverlayThatVanished.sSummonKey);
          }
          (null == a ||
            (a == d.Sx && !this.m_bUserManuallySwitchToOldLibrary)) &&
            n.push(d.wi),
            null == a && n.push(d.Sx);
          for (const e of n) {
            const t = T.JJ.GetFramesWithAssociatedSummonKeys(e).filter(
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
          he.Q.lastActiveDesktopOrWindowFrame &&
            this.switchToFrameInternal(he.Q.lastActiveDesktopOrWindowFrame);
        }
        hideMessageOverlay() {
          var e, t;
          (null ===
            (t =
              null === (e = O.SW.activeFrame) || void 0 === e
                ? void 0
                : e.activePage) || void 0 === t
            ? void 0
            : t.summonOverlayKey) == d.Qv && this.switchToHomeOverlay();
        }
        onShowDashboardRequested(e, t) {
          var r;
          if (!v.HR.settings.get("/settings/dashboard/enableDashboard")) return;
          const n = T.JJ.GetFramesWithAssociatedSummonKeys(e.overlay_key)[0],
            a = null == n ? void 0 : n.legacyOverlayState;
          (null == a ? void 0 : a.dockLocation) != Oe.$z.Theater &&
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
              ? (null == a ? void 0 : a.dockLocation) != Oe.$z.Boot &&
                this.switchToOverlayInternal(e.overlay_key, e.reason)
              : O.SW.isTheaterMode
                ? O.SW.theaterFrame != O.SW.mainSteamFrame &&
                  H.p.Steam.ExecuteSteamURL({
                    url: "steam://open/apprunningcontrols",
                  }).catch((e) => {
                    console.error("ExecuteSteamURL Error:", e);
                  })
                : this.autoSwitchOverlayIfNeeded());
        }
        onVrCmdDockOverlayRequested(e) {
          var t, r;
          const n = (() => {
              switch (e.dock_location) {
                case "dashboard":
                  return Oe.$z.Dashboard;
                case "lefthand":
                  return Oe.$z.LeftHand;
                case "righthand":
                  return Oe.$z.RightHand;
                case "theater":
                  return Oe.$z.Theater;
                case "world":
                  return Oe.$z.World;
              }
            })(),
            a =
              null !==
                (t = T.JJ.GetFramesWithAssociatedSummonKeys(
                  e.overlay_key,
                )[0]) && void 0 !== t
                ? t
                : O.SW.activeFrame;
          a
            ? (null === (r = a.legacyOverlayState) || void 0 === r
                ? void 0
                : r.dockLocation) !== n
              ? ((0, Oe.qy)(a, n), n && this.switchToFrameInternal(a))
              : console.log(
                  "dock_overlay_requested: ignoring redundant request",
                  e,
                )
            : console.log("dock_overlay_requested: unknown overlay_key", e);
        }
        onHideDashboardRequested(e) {
          if (!O.SW.showLoadingThrobberOrBootOverlay)
            if (VRHTML.VRDashboardManager.HasMessageOverlay())
              this.switchToOverlayInternal(d.Qv, "onHideDashboardRequested");
            else {
              this.hideMessageOverlay(),
                VRHTML.VRDashboardManager.CloseKeyboard(),
                this.hide(e.reason),
                this.setDashboardVisibility(!1, void 0, e.reason);
              for (const e of T.JJ.frames)
                e.legacyOverlayState &&
                  (e.legacyOverlayState.bSuppressDoubleOverlayControlBar = !1);
            }
        }
        onVRLinkRoomSetup(e) {
          e.mode == i.$Z.RecenterCountdown
            ? I.H.setRoomSetupStep(1)
            : e.mode == i.$Z.FloorAdjustExisting
              ? I.H.setRoomSetupStep(2)
              : e.mode == i.$Z.RoomSetupFloor
                ? I.H.setRoomSetupStep(3)
                : e.mode == i.$Z.ClearRoomSetup
                  ? VRHTML.VRChaperoneSetup.ClearRoomSetup()
                  : console.error("Unknown onVRLinkRoomSetup mode ", e.mode);
        }
        onRequiredRoomSetup(e) {
          I.H.startRequiredRoomSetupIfNeeded();
        }
        onDisableTheaterMode(e) {
          console.log("onDisableTheaterMode"), O.SW.HideTheaterOverlay();
        }
        setDashboardVisibility(e, t, r) {
          let n = {
            type: "set_dashboard_visibility",
            tracked_device_index: t,
            visible: e,
            reason: r,
          };
          this.m_mailbox.SendMessage(i.pg, n);
        }
        show(e) {
          if (O.SW.m_bDashboardVisible) return;
          p.v.instance.StartDashboardSession(e);
          const t = g.G.Instance.SceneAppKey,
            r = g.G.Instance.SceneAppIsHome;
          t &&
            t != this.state.sLastShownAppKey &&
            (this.setState({ sLastShownAppKey: t }),
            r
              ? this.switchToHomeOverlay()
              : this.switchToOverlayInternal(d.dw, "show")),
            (this.m_activeOverlayThatVanished = null),
            (O.SW.m_bDashboardVisible = !0),
            (0, i.Em)();
        }
        hide(e) {
          O.SW.m_bDashboardVisible &&
            ((this.m_activeOverlayThatVanished = null),
            (O.SW.m_bDashboardVisible = !1),
            this.setState({ eActiveLegacyDashboardPopover: Le.None }),
            p.v.instance.EndDashboardSession(e));
        }
        onLegacyQuickLaunchButtonClick() {
          this.switchToOverlayInternal(d.Sx);
        }
        SetGamepadFocusEnable(e, t) {
          if (
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VRProperties.GetBoolProperty(
                  "/user/head",
                  i.fD.Prop_Hmd_SupportsVRGamepadFocus_Bool,
                )
          ) {
            let r = {
              type: "set_enable_vr_gamepad_focus",
              enable: e,
              sOverlayKey: t,
            };
            this.m_mailbox.SendMessage(i.pg, r);
          }
        }
        renderLegacyPowerMenu() {
          var e;
          const t = !!(null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.SceneAppRunning()),
            r = v.HR.settings.get("/settings/dashboard/allowAppQuitting"),
            n = null === (e = P.DZ[3]) || void 0 === e ? void 0 : e.isValid;
          let a = !1;
          if (VRHTML) {
            VRHTML.VROverlay.GetPrimaryDashboardDevice() >= 0 &&
              (a = VRHTML.VRProperties.GetBoolProperty(
                VRHTML.VROverlay.GetPrimaryDashboardDevice(),
                i.fD.DeviceCanPowerOff_Bool,
              ));
          }
          const s = g.G.Instance.SceneAppName,
            o = g.G.Instance.SceneAppIsHome;
          let c, u;
          return (
            (c = o
              ? (0, m.we)("#Exit_SteamVR_Home")
              : s
                ? (0, m.we)("#PowerMenuQuitSceneApp", s)
                : (0, m.we)("#PowerMenuQuitSceneApp_NoApp")),
            (u = o
              ? "/dashboard/images/icons/svr_svrhome_quit_alt.svg"
              : "/dashboard/images/icons/svr_app_quit.svg"),
            this.renderPopoverMenu(
              l.createElement(
                l.Fragment,
                null,
                O.SW.isVRGamepadUI &&
                  l.createElement(y.Hz, {
                    label: (0, m.we)("#OldLibrary"),
                    lineBelow: !0,
                    onClick: () => {
                      (this.m_bUserManuallySwitchToOldLibrary = !0),
                        this.switchToOverlayInternal(d.Sx),
                        this.showPopoverMenu(Le.None);
                    },
                  }),
                a &&
                  l.createElement(y.Hz, {
                    label: (0, m.we)("#PowerMenuTurnOffController"),
                    imageUrl:
                      "/dashboard/images/icons/svr_controller_power.svg",
                    onClick: () => {
                      null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.TurnOffVRController(),
                        this.showPopoverMenu(Le.None);
                    },
                  }),
                r &&
                  t &&
                  l.createElement(y.Hz, {
                    label: c,
                    imageUrl: u,
                    onClick: () => {
                      null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.QuitSceneApp(),
                        this.showPopoverMenu(Le.None);
                    },
                  }),
                l.createElement(y.Hz, {
                  label: (0, m.we)("#PowerMenuExitVR"),
                  imageUrl: "/dashboard/images/icons/svr_svr_quit_alt.svg",
                  onClick: () =>
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.QuitOpenVR(),
                }),
                n &&
                  l.createElement(y.Hz, {
                    label: (0, m.we)("#PowerMenuShutdown"),
                    imageUrl: "/dashboard/images/icons/svr_svr_quit_alt.svg",
                    onClick: () =>
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.ShutdownSystem(),
                  }),
              ),
            )
          );
        }
        startPopoverMenuTimeout(e) {
          this.m_timeoutPopoverMenuHide = window.setTimeout(() => {
            this.setState({ eActiveLegacyDashboardPopover: Le.None });
          }, e);
        }
        clearPopoverMenuTimeout() {
          this.m_timeoutPopoverMenuHide &&
            (clearTimeout(this.m_timeoutPopoverMenuHide),
            (this.m_timeoutPopoverMenuHide = 0));
        }
        showPopoverMenu(e) {
          this.setState({ eActiveLegacyDashboardPopover: e }),
            this.clearPopoverMenuTimeout();
        }
        renderPopoverMenu(e) {
          return l.createElement(
            "div",
            {
              className: "PowerMenuContainer",
              onMouseLeave: this.popoverMenuMouseLeave,
              onMouseEnter: this.clearPopoverMenuTimeout,
              ref: this.m_refPopoverMenu,
            },
            l.createElement(u.W, { className: "PowerMenuPanel" }, e),
          );
        }
        popoverMenuMouseLeave(e) {
          0 == e.buttons
            ? this.startPopoverMenuTimeout(100)
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
              this.startPopoverMenuTimeout(100);
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
            null !== (e = v.HR.settings.get(d.Vv)) && void 0 !== e ? e : 0.7;
          for (let e of t) {
            let t = (0, i.e_)((0, i.JZ)(e[3], e[0])),
              a = (0, i.e_)((0, i.JZ)(e[1], e[0])),
              s = (0, i.oN)(t, a),
              o = (0, i.Ld)((0, i.qF)(t, a, s)),
              c = (0, i.Uj)((0, i.JZ)(e[0], e[3]));
            if (c < 0.4) continue;
            let u = Math.max(1, Math.floor(c));
            for (let t = 0; t < u; t++) {
              let a = (t + 1) / (u + 1),
                s = (0, i.vx)();
              (s.rotation = o),
                (s.translation = (0, i.Se)(a, e[0], e[3])),
                (s.scale = { x: 0.005, y: 0.005, z: n });
              let c = l.createElement(
                i.dL,
                { transform: s },
                l.createElement(
                  i.Y4,
                  { value: 0.25 },
                  l.createElement(
                    i.N,
                    { color: { r: 0.2, g: 0.2, b: 0.2 } },
                    l.createElement(i.aX, {
                      source: "laser_pointer",
                      wireframe: !1,
                      culling: i.Vh.Backface,
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
          var e, t;
          const r =
              null ===
                (t =
                  null === (e = O.SW.activeFrame) || void 0 === e
                    ? void 0
                    : e.activePage) || void 0 === t
                ? void 0
                : t.summonOverlayKey,
            n =
              O.SW.m_bDashboardVisible && this.state.setForcingBoundsVisible[r],
            a = n && n.size > 0,
            i = 0 != I.H.roomSetupStep && 6 != I.H.roomSetupStep;
          let s = [];
          return (
            a && (s = this.getCollisionBoundsFadeVisualizationElements()),
            l.createElement(
              l.Fragment,
              null,
              !i &&
                l.createElement(
                  "div",
                  { className: "DashboardMain" },
                  a && l.createElement(He, null),
                  a && l.createElement("span", null, s),
                  l.createElement(xe, null, this.renderDashboardContents()),
                  l.createElement(N, null),
                  l.createElement(ge, { onGameLaunched: this.onGameLaunched }),
                  l.createElement(V, { onExitGame: this.switchToHomeOverlay }),
                  !1,
                  l.createElement(qe, null),
                  l.createElement(Ue, null),
                  this.renderFloatingDesktopAndWindowOverlays(),
                  !1,
                ),
            )
          );
        }
        renderExternalOverlayControlBarButton(e) {
          const t = Se(e),
            r = y.R0.Center;
          return l.createElement(y.Te, {
            key: e.frameID,
            label: e.title,
            imageUrl: t,
            imageStyle: r,
            active: O.SW.activeFrame == e,
            onClick: () => this.switchToFrameInternal(e),
          });
        }
        isLegacyDesktopTrayActive() {
          var e, t, r;
          return (
            this.state.eActiveLegacyDashboardPopover != Le.Volume &&
            (he.Q.desktopFrames.includes(O.SW.activeFrame) ||
              he.Q.desktopWindowFrames.includes(O.SW.activeFrame) ||
              (null ===
                (r =
                  null ===
                    (t =
                      null === (e = O.SW.activeFrame) || void 0 === e
                        ? void 0
                        : e.activePage) || void 0 === t
                    ? void 0
                    : t.summonOverlayKey) || void 0 === r
                ? void 0
                : r.startsWith(d.Uv)))
          );
        }
        ToggleIncognitoMode(e) {
          let t = {
            type: "toggle_voicechat",
            enable: null != e ? e : !O.SW.isGroupMode,
          };
          this.m_mailbox.SendMessage("web_steam_mailbox", t);
        }
        renderLegacyControlBar(e, t) {
          var r, n, a, s, o, c, p, _, b, S, f, R, w, C;
          const M =
              null ===
                (r = v.HR.settings.get(
                  "/settings/dashboard/showPowerOptions",
                )) ||
              void 0 === r ||
              r,
            E =
              null ===
                (n = v.HR.settings.get("/settings/dashboard/showDesktop")) ||
              void 0 === n ||
              n,
            V =
              null === (a = T.JJ.GetFramesWithAssociatedSummonKeys(d.Sx)[0]) ||
              void 0 === a
                ? void 0
                : a.tabVisibility.bVisibleInDashboardBar,
            D = !(
              null !==
                (s = v.HR.settings.get("/settings/dashboard/arcadeMode")) &&
              void 0 !== s &&
              s
            ),
            B = g.G.Instance.SceneApplicationState,
            A = g.G.Instance.SceneAppIsHome,
            I =
              null ===
                (o = v.HR.settings.get("/settings/dashboard/allowCurvature")) ||
              void 0 === o ||
              o
                ? d.uv
                : null,
            k = g.G.Instance.SceneAppKey;
          let L = "images/appimage_default.png";
          return (
            k && (L = "/app/image?app_key=" + k),
            l.createElement(
              l.Fragment,
              null,
              l.createElement(
                l.Fragment,
                null,
                l.createElement(
                  i.N,
                  { color: O.SW.ControlBarTint },
                  l.createElement(
                    i.dL,
                    { translation: { z: 1e-5 } },
                    l.createElement(
                      i.Zk,
                      {
                        curvature_origin_id: I,
                        meters_per_pixel: d.iZ,
                        interactive: !0,
                        debug_name: "Controls",
                      },
                      l.createElement(
                        u.W,
                        { className: "ControlBar MainControlBar" },
                        l.createElement(
                          "div",
                          { className: "Section Left" },
                          M &&
                            l.createElement(y.WO, {
                              imageUrl:
                                "/dashboard/images/icons/svr_menu_c.svg",
                              label: (0, m.we)("#Menu"),
                              style: y.gZ.Small,
                              onClick: () => this.showPopoverMenu(Le.Power),
                              onMouseEnter: this.clearPopoverMenuTimeout,
                              onMouseLeave: () =>
                                this.startPopoverMenuTimeout(500),
                            }),
                          l.createElement(
                            y.OR,
                            { style: y.gZ.Small },
                            V &&
                              l.createElement(y.Te, {
                                label: (0, m.we)("#Library"),
                                imageUrl:
                                  "/dashboard/images/icons/svr_items.svg",
                                active:
                                  (null ===
                                    (p =
                                      null === (c = O.SW.activeFrame) ||
                                      void 0 === c
                                        ? void 0
                                        : c.activePage) || void 0 === p
                                    ? void 0
                                    : p.summonOverlayKey) == d.Sx,
                                onClick: this.onLegacyQuickLaunchButtonClick,
                              }),
                            E &&
                              l.createElement(y.Te, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_desktop_alt.svg",
                                label:
                                  he.Q.desktopFrames.length > 1
                                    ? (0, m.we)("#Desktops")
                                    : (0, m.we)("#Desktop"),
                                active: this.isLegacyDesktopTrayActive(),
                                onClick: () =>
                                  this.switchToLegacyDashboardDesktopFrame(),
                              }),
                          ),
                          l.createElement(
                            y.OR,
                            { style: y.gZ.Small },
                            l.createElement(
                              l.Fragment,
                              null,
                              e.map(this.renderExternalOverlayControlBarButton),
                              t.length > 0 &&
                                l.createElement(y.Te, {
                                  imageUrl:
                                    "/dashboard/images/icons/svr_more.svg",
                                  label: (0, m.we)(
                                    "#X_More_Overlays",
                                    t.length,
                                  ),
                                  active:
                                    this.state.eActiveLegacyDashboardPopover ==
                                    Le.ExternalOverlays,
                                  onClick: () =>
                                    this.showPopoverMenu(Le.ExternalOverlays),
                                  onMouseEnter: this.clearPopoverMenuTimeout,
                                  onMouseLeave: () =>
                                    this.startPopoverMenuTimeout(500),
                                }),
                            ),
                          ),
                        ),
                        l.createElement(
                          "div",
                          { className: "Section Center" },
                          B != i.HW.None &&
                            l.createElement(
                              "div",
                              { className: "NowPlayingSpacer" },
                              l.createElement(
                                h.l,
                                {
                                  allowableParentSelectors: [".DashboardMain"],
                                },
                                l.createElement(
                                  i.N,
                                  { color: O.SW.ControlBarTint },
                                  l.createElement(
                                    i.dL,
                                    { translation: { z: 0.02 } },
                                    l.createElement(
                                      i.Zk,
                                      {
                                        debug_name: "NowPlayingButton",
                                        interactive: !0,
                                        curvature_origin_id: I,
                                        meters_per_pixel: d.iZ,
                                      },
                                      l.createElement(
                                        "div",
                                        { className: "ControlBar" },
                                        l.createElement(y.WO, {
                                          label: A
                                            ? (0, m.we)("#SteamVR_Home")
                                            : (0, m.we)("#Now_Playing"),
                                          active:
                                            (null ===
                                              (b =
                                                null ===
                                                  (_ = O.SW.activeFrame) ||
                                                void 0 === _
                                                  ? void 0
                                                  : _.activePage) ||
                                            void 0 === b
                                              ? void 0
                                              : b.summonOverlayKey) == d.dw,
                                          style: y.gZ.App,
                                          imageUrl: L,
                                          onClick: () =>
                                            this.switchToOverlayInternal(d.dw),
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
                            y.OR,
                            { style: y.gZ.Small },
                            (null === (S = P.DZ[8]) || void 0 === S
                              ? void 0
                              : S.isValid) &&
                              l.createElement(y.Te, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_recenter.svg",
                                additionalClassNames: "CenterImageLarge",
                                label: (0, m.we)("#Button_Recenter"),
                                onClick: () => {
                                  P.DZ[8].Invoke();
                                },
                              }),
                            (null === (f = P.DZ[10]) || void 0 === f
                              ? void 0
                              : f.isValid) &&
                              l.createElement(y.Te, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_room_setup.svg",
                                additionalClassNames: "CenterImageLarge",
                                label: (0, m.we)("#RoomSetup"),
                                onClick: () => {
                                  P.DZ[10].Invoke();
                                },
                              }),
                            (null === (R = P.DZ[4]) || void 0 === R
                              ? void 0
                              : R.isValid) &&
                              l.createElement(y.Te, {
                                imageUrl: "/dashboard/images/icons/svr_eye.svg",
                                label: (0, m.we)("#Toggle_Room_View"),
                                onClick: () => {
                                  P.DZ[4].Invoke(!q.c.roomViewEnabled);
                                },
                                active: q.c.roomViewEnabled,
                                enabled:
                                  null === VRHTML || void 0 === VRHTML
                                    ? void 0
                                    : VRHTML.VROverlayInternal.HasCameraRoomViewCapability(),
                              }),
                            l.createElement(y.Tr, {
                              active:
                                this.state.eActiveLegacyDashboardPopover ==
                                Le.Volume,
                              refVolumeTray: this.m_refVolumeTray,
                              onShowTray: () => this.showPopoverMenu(Le.Volume),
                              onHideTray: () => this.showPopoverMenu(Le.None),
                              onMouseEnter: this.clearPopoverMenuTimeout,
                              onMouseLeave: () =>
                                this.startPopoverMenuTimeout(500),
                            }),
                          ),
                          D &&
                            l.createElement(y.WO, {
                              imageUrl:
                                "/dashboard/images/icons/svr_settings.svg",
                              active:
                                (null ===
                                  (C =
                                    null === (w = O.SW.activeFrame) ||
                                    void 0 === w
                                      ? void 0
                                      : w.activePage) || void 0 === C
                                  ? void 0
                                  : C.summonOverlayKey) == d.Wt,
                              enabled: T.JJ.HasFramesWithAssociatedSummonKeys(
                                d.Wt,
                              ),
                              label: (0, m.we)("#VRSettings"),
                              style: y.gZ.Small,
                              centerPanelAnchorID: "VolumeButton",
                              onClick: () => this.switchToOverlayInternal(d.Wt),
                            }),
                        ),
                      ),
                      this.renderLegacyControlBarTrays(I),
                      l.createElement(i.dL, {
                        id: d.zM,
                        translation: { y: 0.3 },
                      }),
                    ),
                  ),
                ),
              ),
            )
          );
        }
        renderLegacyControlBarTrays(e, t) {
          const r = O.SW.isDarkMode ? { r: 0.25, g: 0.25, b: 0.25 } : null;
          return l.createElement(
            l.Fragment,
            null,
            l.createElement(Me, {
              ref: this.m_refDesktopTray,
              curvatureOriginId: e,
              scale: t,
              position: 0,
              visible: this.isLegacyDesktopTrayActive(),
              tintColor: r,
              onToggleWindowList: () => this.showPopoverMenu(Le.Windows),
              onClearPopoverMenuTimeout: () => this.clearPopoverMenuTimeout(),
              onStartPopoverMenuTimeout: (e) => this.startPopoverMenuTimeout(e),
              sort_depth_bias: 0.2,
              onFrameButtonClicked: this.switchToFrameInternal,
            }),
            l.createElement(Te, {
              ref: this.m_refVolumeTray,
              curvatureOriginId: e,
              scale: t,
              position: 0.337,
              visible: this.state.eActiveLegacyDashboardPopover == Le.Volume,
              tintColor: r,
              onFinalChangeMouseOutside: () => {
                this.startPopoverMenuTimeout(800);
              },
              onMouseMove: this.clearPopoverMenuTimeout,
              onMouseLeave: this.popoverMenuMouseLeave,
              sort_depth_bias: 0.4,
            }),
          );
        }
        renderFloatingDesktopAndWindowOverlays() {
          const e = T.JJ.frames.filter((e) => {
            var t, r, n, a;
            return (
              (null === (t = e.legacyOverlayState) || void 0 === t
                ? void 0
                : t.dockLocation) == Oe.$z.Theater ||
              (null === (r = e.legacyOverlayState) || void 0 === r
                ? void 0
                : r.dockLocation) == Oe.$z.World ||
              (null === (n = e.legacyOverlayState) || void 0 === n
                ? void 0
                : n.dockLocation) == Oe.$z.LeftHand ||
              (null === (a = e.legacyOverlayState) || void 0 === a
                ? void 0
                : a.dockLocation) == Oe.$z.RightHand
            );
          });
          return l.createElement(
            l.Fragment,
            null,
            e.map((e) =>
              l.createElement(S.BO, {
                frame: e,
                bDashboardShown: O.SW.m_bDashboardVisible,
                bHasSceneApp: g.G.Instance.SceneApplicationState !== i.HW.None,
                dockLocation: e.legacyOverlayState.dockLocation,
                key: e.frameID,
              }),
            ),
          );
        }
        getRenderModelForShape(e) {
          return "";
        }
        renderPassthroughPortals() {
          return null;
        }
        onGameLaunched(e) {
          (!e.is_dashboard_overlay ||
            (e.is_dashboard_overlay && !e.show_overlay_in_quicklaunch)) &&
            (null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRDashboardManager.HideDashboard("game_launched"));
        }
        onAddPortal(e, t) {}
        onRemovePortal(e) {}
        get activeOverlayScale() {
          var e, t, r;
          return null !==
            (r =
              null ===
                (t =
                  null === (e = O.SW.activeFrame) || void 0 === e
                    ? void 0
                    : e.legacyOverlayState) || void 0 === t
                ? void 0
                : t.fScale) && void 0 !== r
            ? r
            : 1;
        }
        onActiveOverlayScaleChange(e) {
          var t;
          const r =
            null === (t = O.SW.activeFrame) || void 0 === t
              ? void 0
              : t.legacyOverlayState;
          r && (r.fScale = e);
        }
        onActiveOverlayCloseButtonPressed() {
          var e, t;
          const r =
            null ===
              (t =
                null === (e = O.SW.activeFrame) || void 0 === e
                  ? void 0
                  : e.activePage) || void 0 === t
              ? void 0
              : t.summonOverlayKey;
          r &&
            (this.switchToHomeOverlay(),
            VRHTML.VRDashboardManager.SendOverlayClosed(r));
        }
        renderOverlayControlBar() {
          var e, t, r, n, a, s, o, c, u, p, h, g;
          const _ = O.SW.activeFrame,
            b =
              null === (e = null == _ ? void 0 : _.activePage) || void 0 === e
                ? void 0
                : e.summonOverlayKey,
            S =
              null !==
                (t = W.Q.GetOverlayFlag(b, i.NB.EnableControlBarClose)) &&
              void 0 !== t &&
              t,
            f = b == d.P || b.startsWith(d.bl),
            R =
              null ===
                (r = v.HR.settings.get("/settings/dashboard/allowCurvature")) ||
              void 0 === r ||
              r
                ? d.uv
                : null,
            w = { x: 0, y: 0.15, z: 0 },
            C =
              (null === (n = _.legacyOverlayState) || void 0 === n
                ? void 0
                : n.dockLocation) == Oe.$z.Dashboard,
            M =
              W.Q.GetOverlayFlag(b, i.NB.EnableControlBarKeyboard) || b == d.Bn,
            T =
              (null == b ? void 0 : b.startsWith(d.GO)) &&
              (null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.BSupportsMultitaskingView());
          return !_.legacyOverlayState ||
            _.legacyOverlayState.bSuppressDoubleOverlayControlBar
            ? null
            : l.createElement(
                l.Fragment,
                null,
                l.createElement(
                  i.dL,
                  { parent_id: d.zM },
                  l.createElement(
                    l.Fragment,
                    null,
                    l.createElement(
                      i.Zk,
                      {
                        curvature_origin_id: R,
                        origin: i.Oi.TopCenter,
                        interactive: !0,
                        meters_per_pixel: d.iZ,
                        debug_name: "ActiveOverlayControlBar",
                        reflect: 0.1,
                      },
                      l.createElement(
                        "div",
                        { className: "TransparentOverlayControlBar" },
                        l.createElement(
                          "div",
                          { className: "Section" },
                          M &&
                            l.createElement(y.oZ, {
                              tooltipTranslation: w,
                              overlayKey: b,
                              additionalClassNames: "LargeIcon",
                            }),
                          T &&
                            l.createElement(y.N2, {
                              iconUrl:
                                "/dashboard/images/icons/icon_multitasking_view.png",
                              title: (0, m.we)("#MultitaskingView"),
                              tooltipTranslation: w,
                              onClick: () => he.Q.ShowMultitaskingView(),
                            }),
                        ),
                        l.createElement(
                          "div",
                          { className: "Section" },
                          !C &&
                            l.createElement(y.N2, {
                              icon: l.createElement(G.Xj, null),
                              title: (0, m.we)("#ReturnToDashboard"),
                              tooltipTranslation: w,
                              onClick: () => {
                                (0, Oe.qy)(_, Oe.$z.Dashboard);
                              },
                              additionalClassNames: "LargeIcon",
                            }),
                          C &&
                            _.canBeUndockedFromDashboard &&
                            l.createElement(
                              l.Fragment,
                              null,
                              l.createElement(y.N2, {
                                iconUrl:
                                  "/dashboard/images/icons/mirror_left.png",
                                title: (0, m.we)("#DockOnLeftController"),
                                tooltipTranslation: w,
                                onClick: () => {
                                  (0, Oe.qy)(_, Oe.$z.LeftHand);
                                },
                                enabled:
                                  VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                                    i.kG.TrackedControllerRole_LeftHand,
                                  ) != i.ne,
                                active:
                                  (null ===
                                    (s =
                                      null === (a = O.SW.activeFrame) ||
                                      void 0 === a
                                        ? void 0
                                        : a.legacyOverlayState) || void 0 === s
                                    ? void 0
                                    : s.dockLocation) == Oe.$z.LeftHand,
                                additionalClassNames: "LargeIcon",
                              }),
                              l.createElement(y.N2, {
                                iconUrl:
                                  "/dashboard/images/icons/mirror_right.png",
                                title: (0, m.we)("#DockOnRightController"),
                                tooltipTranslation: w,
                                onClick: () => {
                                  (0, Oe.qy)(_, Oe.$z.RightHand);
                                },
                                enabled:
                                  VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                                    i.kG.TrackedControllerRole_RightHand,
                                  ) != i.ne,
                                active:
                                  (null ===
                                    (c =
                                      null === (o = O.SW.activeFrame) ||
                                      void 0 === o
                                        ? void 0
                                        : o.legacyOverlayState) || void 0 === c
                                    ? void 0
                                    : c.dockLocation) == Oe.$z.RightHand,
                                additionalClassNames: "LargeIcon",
                              }),
                              " ",
                            ),
                        ),
                        (C || S) &&
                          l.createElement(
                            "div",
                            { className: "Section" },
                            C &&
                              _.canBeUndockedFromDashboard &&
                              l.createElement(y.N2, {
                                icon: l.createElement(G.YN, null),
                                title: (0, m.we)("#FloatInWorld"),
                                tooltipTranslation: w,
                                onClick: () => {
                                  (0, Oe.qy)(_, Oe.$z.World);
                                },
                                active:
                                  (null ===
                                    (p =
                                      null === (u = O.SW.activeFrame) ||
                                      void 0 === u
                                        ? void 0
                                        : u.legacyOverlayState) || void 0 === p
                                    ? void 0
                                    : p.dockLocation) == Oe.$z.World,
                              }),
                            C &&
                              _.canBeUndockedFromDashboard &&
                              l.createElement(y.N2, {
                                icon: l.createElement(G.fr, null),
                                title: (0, m.we)("#ViewInTheater"),
                                tooltipTranslation: w,
                                onClick: () => {
                                  (0, Oe.SC)(_, !1);
                                },
                                active:
                                  (null ===
                                    (g =
                                      null === (h = O.SW.activeFrame) ||
                                      void 0 === h
                                        ? void 0
                                        : h.legacyOverlayState) || void 0 === g
                                    ? void 0
                                    : g.dockLocation) == Oe.$z.Theater,
                                additionalClassNames: "LargeIcon",
                              }),
                            S &&
                              l.createElement(y.N2, {
                                iconUrl:
                                  "/dashboard/images/icons/icon_close_black.png",
                                title: (0, m.we)(
                                  f ? "#QuitApp" : "#CloseOverlay",
                                ),
                                tooltipTranslation: w,
                                onClick: this.onActiveOverlayCloseButtonPressed,
                                additionalClassNames: "LargeIcon",
                              }),
                          ),
                        !1,
                      ),
                    ),
                  ),
                ),
              );
        }
        renderDashboardContents() {
          var e, t, r, n, a, s, o, c;
          const u = O.SW.activeFrame,
            m = O.SW.isVRGamepadUIReady,
            p = !O.SW.isVRGamepadUI || O.SW.m_bShowLegacyDashboardBar,
            h = !O.SW.isVRGamepadUI;
          let g = [],
            _ = [],
            b = null !== (e = v.HR.settings.get(d.lP)) && void 0 !== e ? e : 2;
          if (this.legacyFilteredOverlayTabs.length > b) {
            const e = v.HR.settings.get(d.XO);
            (g = [
              null !==
                (t = this.legacyFilteredOverlayTabs.find((t) =>
                  t.associatedSummonOverlayKeys.includes(e),
                )) && void 0 !== t
                ? t
                : this.legacyFilteredOverlayTabs[0],
            ]),
              (_ = this.legacyFilteredOverlayTabs.filter(
                (e) => !g.includes(e),
              ));
          } else g = this.legacyFilteredOverlayTabs;
          const f =
              null !==
                (a =
                  null ===
                    (n =
                      null === (r = O.SW.activeFrame) || void 0 === r
                        ? void 0
                        : r.legacyOverlayState) || void 0 === n
                    ? void 0
                    : n.dockLocation) && void 0 !== a
                ? a
                : Oe.$z.Dashboard,
            R = (0, S.C0)(f),
            w = (0, S.Ox)(f),
            C =
              null !== (s = null == u ? void 0 : u.shouldRenderFrameControls) &&
              void 0 !== s &&
              s,
            M =
              null ===
                (o = v.HR.settings.get("/settings/dashboard/allowCurvature")) ||
              void 0 === o ||
              o,
            T = M ? d.uv : null,
            E = { y: C ? -0.9 : -1.03375, z: 0.05 },
            V = m ? { y: -1.2, z: 0.35 } : { y: -1.2, z: 0.15 },
            D = De.k_nControlBarPitch;
          let I = M ? 1 : 0;
          const k =
            null === (c = null == u ? void 0 : u.activePage) || void 0 === c
              ? void 0
              : c.GetPanelAnchorID(i.Oi.TopCenter);
          return l.createElement(
            l.Fragment,
            null,
            l.createElement(
              i.dL,
              { parent_id: k },
              h && k && l.createElement(Ce, { sCurvatureOriginId: T }),
            ),
            l.createElement(
              i.dL,
              {
                id: "active_overlay_transform",
                translation: E,
                ref: this.m_refOverlayTransform,
              },
              !R && w && this.renderActiveOverlay(),
            ),
            !1,
            Ie,
            l.createElement(
              i.dL,
              { parent_id: m ? d.NX : d.kx },
              l.createElement(A.X, {
                curvature_origin_id: T,
                tint: O.SW.GrabHandleTint,
                onStartMove: this.onGrabStart,
                onEndMove: this.onGrabEnd,
              }),
            ),
            !1,
            l.createElement(
              i.dL,
              { translation: V, id: d.Sp },
              C && this.renderOverlayControlBar(),
              l.createElement(i.dL, {
                id: d.kx,
                translation: { y: 0.08, z: -0.12 },
              }),
              l.createElement(
                i.dL,
                {
                  rotation: { x: D },
                  curvature_pitch: D,
                  translation: m ? { y: -0.65, z: 0.2 } : {},
                },
                p && this.renderLegacyControlBar(g, _),
                l.createElement(
                  i.dL,
                  { translation: { y: -0.65, z: -0.01 } },
                  l.createElement(_e, null),
                ),
              ),
              m &&
                l.createElement(
                  i.dL,
                  { rotation: { x: D }, curvature_pitch: D },
                  l.createElement(Ne, { curvature_origin_id: T }),
                ),
              l.createElement(
                i.dL,
                { rotation: { x: D } },
                l.createElement(
                  i.dL,
                  { translation: De.k_nKeyboardGrabTransformOffset },
                  l.createElement(
                    B.B,
                    { min_distance: 0.2, should_head_align: !1 },
                    l.createElement(
                      i.dL,
                      {
                        translation: {
                          x: -1 * De.k_nKeyboardGrabTransformOffset.x,
                          y: -1 * De.k_nKeyboardGrabTransformOffset.y,
                          z: -1 * De.k_nKeyboardGrabTransformOffset.z,
                        },
                      },
                      l.createElement(
                        i.dL,
                        { rotation: { x: -10 }, curvature_pitch: D },
                        !1,
                        O.SW.m_bKeyboardVisible &&
                          O.SW.m_bKeyboardDockedInDashboard &&
                          l.createElement(x, {
                            debugHostLocation: "Dashboard",
                            onGrabStart: this.onGrabStart,
                            onGrabEnd: this.onGrabEnd,
                          }),
                      ),
                    ),
                  ),
                ),
              ),
              this.state.eActiveLegacyDashboardPopover == Le.Power &&
                l.createElement(
                  i.dL,
                  {
                    translation: { x: -1.25, y: 0.15, z: 0.3 },
                    rotation: { y: 27 * I },
                  },
                  l.createElement(
                    i.Zk,
                    {
                      curvature_origin_id: T,
                      height: void 0,
                      width: 0.925,
                      interactive: !0,
                      origin: i.Oi.BottomLeft,
                      debug_name: "Power Menu",
                      sort_depth_bias: -0.1,
                    },
                    this.renderLegacyPowerMenu(),
                  ),
                ),
              this.state.eActiveLegacyDashboardPopover == Le.ExternalOverlays &&
                l.createElement(
                  i.dL,
                  {
                    translation: { x: 0.2, y: 0.15, z: 0.05 },
                    rotation: { y: 6 * I },
                  },
                  l.createElement(
                    i.Zk,
                    {
                      curvature_origin_id: T,
                      height: void 0,
                      width: 0.925,
                      interactive: !0,
                      origin: i.Oi.BottomRight,
                      debug_name: "OverlaysList",
                      sort_depth_bias: -0.1,
                    },
                    this.renderPopoverMenu(
                      l.createElement(
                        l.Fragment,
                        null,
                        " ",
                        _.map((e) =>
                          l.createElement(y.Hz, {
                            key: e.frameID,
                            imageUrl: Se(e),
                            label: e.title,
                            onClick: () => {
                              this.switchToFrameInternal(e),
                                this.showPopoverMenu(Le.None);
                            },
                          }),
                        ),
                        " ",
                      ),
                    ),
                  ),
                ),
              this.state.eActiveLegacyDashboardPopover == Le.Windows &&
                l.createElement(
                  i.dL,
                  {
                    translation: { x: 1.25, y: -0.1, z: 0.35 },
                    rotation: { y: -25 * I },
                  },
                  l.createElement(
                    i.Zk,
                    {
                      curvature_origin_id: T,
                      height: void 0,
                      width: 0.925,
                      interactive: !0,
                      origin: i.Oi.BottomRight,
                      debug_name: "WindowList",
                      sort_depth_bias: -0.1,
                    },
                    this.renderPopoverMenu(
                      l.createElement(
                        l.Fragment,
                        null,
                        " ",
                        he.Q.windows.map((e) =>
                          l.createElement(y.Hz, {
                            key: e.hwnd,
                            imageUrl: "/dashboard/images/icons/icon_add.png",
                            label: e.title,
                            onClick: () => {
                              e.overlay_key
                                ? this.switchToOverlayInternal(e.overlay_key)
                                : he.Q.SpawnFrameForWindow(e.hwnd),
                                this.showPopoverMenu(Le.None);
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
      (Fe.k_sDashboardMailboxName = "systemui_dashboard_private"),
        (Fe.k_sSetDashboardFadeSupressionMessage =
          "set_dashboard_fade_suppression"),
        (Fe.k_sDashboardOverlayDestroyedMessage =
          "dashboard_overlay_destroyed"),
        (Fe.k_sUpdateDebugInfoMessage = "update_debug_info"),
        (Fe.k_sSetDashboardForceBoundsVisible =
          "set_dashboard_force_bounds_visible"),
        (Fe.k_nTimeLimitToReturnToActiveOverlayThatVanishedSeconds = 3),
        (Fe.k_nControlBarPitch = -40),
        (Fe.k_nKeyboardGrabTransformOffset = { x: 0, y: -0.85, z: 0.35 }),
        (0, a.Cg)([s.o], Fe.prototype, "onSetDashboardFadeSuppression", null),
        (0, a.Cg)([s.o], Fe.prototype, "onGrabStart", null),
        (0, a.Cg)([o.action.bound], Fe.prototype, "onGrabEnd", null),
        (0, a.Cg)(
          [s.o],
          Fe.prototype,
          "onSetDashboardForceBoundsVisible",
          null,
        ),
        (0, a.Cg)([s.o], Fe.prototype, "onDashboardOverlayDestroyed", null),
        (0, a.Cg)([s.o], Fe.prototype, "onDashboardTabsUpdated", null),
        (0, a.Cg)([s.o], Fe.prototype, "onUpdateDebugInfo", null),
        (0, a.Cg)(
          [o.computed],
          Fe.prototype,
          "legacyFilteredOverlayTabs",
          null,
        ),
        (0, a.Cg)([s.o], Fe.prototype, "switchToHomeOverlay", null),
        (0, a.Cg)(
          [o.action.bound],
          Fe.prototype,
          "switchToOverlayInternal",
          null,
        ),
        (0, a.Cg)(
          [o.action.bound],
          Fe.prototype,
          "switchToFrameInternal",
          null,
        ),
        (0, a.Cg)([s.o], Fe.prototype, "onShowDashboardRequested", null),
        (0, a.Cg)([s.o], Fe.prototype, "onVrCmdDockOverlayRequested", null),
        (0, a.Cg)(
          [o.action.bound],
          Fe.prototype,
          "onHideDashboardRequested",
          null,
        ),
        (0, a.Cg)([s.o], Fe.prototype, "onVRLinkRoomSetup", null),
        (0, a.Cg)([s.o], Fe.prototype, "onRequiredRoomSetup", null),
        (0, a.Cg)([s.o], Fe.prototype, "onDisableTheaterMode", null),
        (0, a.Cg)([o.action.bound], Fe.prototype, "show", null),
        (0, a.Cg)([o.action.bound], Fe.prototype, "hide", null),
        (0, a.Cg)([s.o], Fe.prototype, "onLegacyQuickLaunchButtonClick", null),
        (0, a.Cg)([s.o], Fe.prototype, "SetGamepadFocusEnable", null),
        (0, a.Cg)([s.o], Fe.prototype, "renderLegacyPowerMenu", null),
        (0, a.Cg)([s.o], Fe.prototype, "startPopoverMenuTimeout", null),
        (0, a.Cg)([s.o], Fe.prototype, "clearPopoverMenuTimeout", null),
        (0, a.Cg)([s.o], Fe.prototype, "showPopoverMenu", null),
        (0, a.Cg)([s.o], Fe.prototype, "popoverMenuMouseLeave", null),
        (0, a.Cg)([s.o], Fe.prototype, "popoverMenuMouseUp", null),
        (0, a.Cg)(
          [s.o],
          Fe.prototype,
          "renderExternalOverlayControlBarButton",
          null,
        ),
        (0, a.Cg)([s.o], Fe.prototype, "isLegacyDesktopTrayActive", null),
        (0, a.Cg)([s.o], Fe.prototype, "ToggleIncognitoMode", null),
        (0, a.Cg)([s.o], Fe.prototype, "getRenderModelForShape", null),
        (0, a.Cg)([s.o], Fe.prototype, "onGameLaunched", null),
        (0, a.Cg)([s.o], Fe.prototype, "onAddPortal", null),
        (0, a.Cg)([s.o], Fe.prototype, "onRemovePortal", null),
        (0, a.Cg)([s.o], Fe.prototype, "onActiveOverlayScaleChange", null),
        (0, a.Cg)(
          [s.o],
          Fe.prototype,
          "onActiveOverlayCloseButtonPressed",
          null,
        ),
        (Fe = De = (0, a.Cg)([_.PA], Fe));
      const xe = (0, _.PA)(function (e) {
          var t;
          if (!O.SW.m_bDashboardVisible) return null;
          const r =
              null ===
                (t = v.HR.settings.get("/settings/dashboard/allowCurvature")) ||
              void 0 === t ||
              t
                ? d.uv
                : null,
            n = l.createElement(
              l.Fragment,
              null,
              !1,
              l.createElement(
                i.dL,
                { translation: { y: 0.15 } },
                l.createElement(i.dL, {
                  id: r,
                  translation: { z: O.SW.dashboardDistance + 1.8 },
                }),
                l.createElement(
                  i.dL,
                  { scale: O.SW.dashboardScale },
                  null == e ? void 0 : e.children,
                ),
              ),
            ),
            a = O.SW.activeLinkServer && O.SW.isUnifiedDashboard,
            s = O.SW.activeLinkClient && O.SW.isUnifiedDashboard ? 1 : null;
          return l.createElement(
            U.tH,
            null,
            l.createElement(
              i.sJ,
              {
                bContinuousRelatch: O.SW.showLoadingThrobberOrBootOverlay,
                bFreeDashboardTransform: !1,
              },
              !O.SW.showLoadingThrobberOrBootOverlay &&
                l.createElement(
                  l.Fragment,
                  null,
                  l.createElement(
                    i.dL,
                    { translation: O.SW.dashboardTranslation },
                    l.createElement(
                      i.dL,
                      { translation: { y: -0.15 } },
                      !a &&
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
                            remote_transform_tx: s,
                          },
                          n,
                        ),
                      a && l.createElement(Ve, { remote_transform_rx: 1 }, n),
                    ),
                  ),
                ),
            ),
          );
        }),
        Ne = (0, _.PA)(function (e) {
          var t;
          if (O.SW.isUnifiedDashboard && O.SW.activeLinkServer) return null;
          const r = !!(
              1 &
              (null !==
                (t =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VRProperties.GetInt32Property(
                        "/user/head",
                        i.fD.DashboardLinkSupport_Int32,
                      )) && void 0 !== t
                ? t
                : 0)
            ),
            n =
              O.SW.isVRGamepadUI &&
              !O.SW.isUnifiedDashboard &&
              r &&
              O.SW.m_bLinkStreamActive;
          let a = n ? 0.425 : 0.35;
          const s = l.createElement(
            l.Fragment,
            null,
            l.createElement(i.Ci, {
              id: "VRDashboardBar-Panel-TopCenter",
              location: i.Oi.TopCenter,
            }),
            l.createElement(
              i.Ci,
              {
                id: "VRDashboardBar-Panel-BottomCenter",
                location: i.Oi.BottomCenter,
              },
              l.createElement(i.dL, { id: d.zM, translation: { y: a } }),
              l.createElement(i.dL, { id: d.NX, translation: { y: -0.1 } }),
            ),
          );
          return l.createElement(
            U.tH,
            null,
            n &&
              l.createElement(
                i.dL,
                { translation: { y: 0.075, z: 0 } },
                l.createElement(ve, {
                  onClick: () => {
                    var e;
                    null === (e = VRHTML.VRLink) ||
                      void 0 === e ||
                      e.SendRemoteDashboardOpen();
                  },
                }),
              ),
            O.SW.dashboardBarUsesPooledPopup &&
              l.createElement(
                Be.O,
                {
                  popupRequest: Ae.r.dashboardBarPopup,
                  make_overlays_interactive_if_visible: !0,
                  curvature_origin_id: e.curvature_origin_id,
                  origin: i.Oi.TopCenter,
                  meters_per_pixel: O.SW.m_fVRGamepadUI_MetersPerPixel,
                  reflect: 0.1,
                },
                s,
              ),
            !O.SW.dashboardBarUsesPooledPopup &&
              l.createElement(
                i.Zk,
                {
                  id: "VRDashboardBar-Panel",
                  debug_name: "VRDashboardBar",
                  interactive: !0,
                  make_overlays_interactive_if_visible: !0,
                  curvature_origin_id: e.curvature_origin_id,
                  overlay_key: O.SW.dashboardBarOverlayKey,
                  origin: i.Oi.TopCenter,
                  meters_per_pixel: O.SW.m_fVRGamepadUI_MetersPerPixel,
                  reflect: 0.1,
                },
                s,
              ),
          );
        }),
        ze = [
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
      function We(e, t) {
        let r = -1,
          n = -1;
        for (let a = 0; a < ze.length && r < 0 && n < 0; a++)
          ze[a](e) && (r = a), ze[a](t) && (n = a);
        return (
          r < 0 && (r = ze.length),
          n < 0 && (n = ze.length),
          r == n ? e.tab_id() - t.tab_id() : r - n
        );
      }
      const Ge = (0, _.PA)(function (e) {
          const { overlay: t } = e;
          if (1 != t.eOverlayType) return null;
          if (!(t.unFlags & i.NB.VisibleInDashboard)) return null;
          if (t.sOverlayKey == d.wi || t.sOverlayKey == d.Wm) return null;
          if (
            he.Q.desktops.some((e) => e.overlay.sOverlayKey == t.sOverlayKey) ||
            he.Q.windows.some((e) => e.overlay_key == t.sOverlayKey)
          )
            return null;
          let r = !0,
            n = !1;
          t.unFlags & i.NB.NoDashboardTab && (r = !1);
          return (
            z.H.BHasMutualCapability(2) &&
              O.SF.includes(t.sOverlayKey) &&
              ((n = r), (r = !1)),
            l.createElement(
              T.wI,
              {
                title: t.sOverlayName,
                iconOverlayKey: t.sOverlayKey,
                showTabInDashboardBar: r,
                showTabInDashboardHamburgerMenu: n,
              },
              l.createElement(T.JQ, {
                overlayKey: t.sOverlayKey,
                requireExternalOverlay: !0,
              }),
            )
          );
        }),
        Ue = (0, _.PA)(function (e) {
          return l.createElement(
            l.Fragment,
            null,
            W.Q.overlays.map((e) =>
              l.createElement(Ge, { overlay: e, key: e.sOverlayKey }),
            ),
          );
        });
      function qe(e) {
        var t;
        const [r, n] = l.useState(void 0),
          [a, s] = l.useState(void 0),
          [u, p] = l.useState(void 0),
          h = (function (e, t) {
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
                    : e.state) == T.JP.Alive
                )
                  return r.current;
              }, [])
            );
          })(r, [a, u]);
        l.useEffect(() => O.SW.SetMainSteamFrame(r), [r]);
        const g = (0, b.useObserver)(() => Ae.r.legacyFloatingMainMenuPopup),
          v = (0, b.useObserver)(() => !O.SW.isVRGamepadUI);
        return l.createElement(
          T.wI,
          {
            title: v ? (0, m.we)("#Settings") : (0, m.we)("#Steam"),
            iconEnum: v ? 16 : 14,
            showTabInDashboardBar: !0,
            ref: n,
          },
          l.createElement(T.JQ, {
            overlayKey: d.wi,
            requireExternalOverlay: !0,
          }),
          l.createElement(c.z, { env: "frame-page", pageRef: s }),
          l.createElement(T.JQ, {
            overlayKey: d.Wm,
            requireExternalOverlay: !1,
            ref: p,
          }),
          l.createElement(
            T.xE,
            null,
            l.createElement(T.RG, null),
            l.createElement(T.Vu, {
              actionParams: () => ({
                display_name: (0, m.we)("#VRSettings"),
                icon: { enum: 21 },
                invocation: 1,
                active:
                  (null == r ? void 0 : r.activePage) &&
                  ((null == r ? void 0 : r.activePage) == a ||
                    (null == r ? void 0 : r.activePage) == u),
              }),
              onInvoked: () => {
                var e, t;
                (null == r ? void 0 : r.activePage) == u &&
                (null == r ? void 0 : r.isCurrentlyVisible)
                  ? r.SwitchToPage(null == a ? void 0 : a.pageID)
                  : r.SwitchToPage(null !== (e = h()) && void 0 !== e ? e : a),
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
              T.QI,
              { onlyVisibleIn: "bar-tab-menu" },
              l.createElement(T.Oo, null),
              l.createElement(T.U0, { params: { type: 5 } }),
            ),
          ),
          g &&
            l.createElement(
              i.dL,
              {
                parent_id:
                  null === (t = null == r ? void 0 : r.activePage) ||
                  void 0 === t
                    ? void 0
                    : t.GetPanelAnchorID(i.Oi.CenterLeft),
              },
              l.createElement(Be.O, { popupRequest: g }),
            ),
        );
      }
    },
    5163: (e, t, r) => {
      "use strict";
      r.d(t, {
        BO: () => x,
        HX: () => A,
        Ox: () => k,
        C0: () => L,
        Do: () => b,
      });
      var n = r(1635),
        a = r(6090),
        i = r(3236),
        s = r(1370),
        o = r(6540),
        l = r(6189),
        c = r(3606),
        u = r(1333),
        d = r(1835),
        m = r(9248),
        p = r(3712),
        h = r(6138),
        g = r(1139);
      let v = class extends o.Component {
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
          const t = null !== (e = this.props.scale) && void 0 !== e ? e : 1,
            r = 0.2667 * t;
          return o.createElement(
            a.dL,
            { ignore_parent_scale: !0 },
            o.createElement(
              a.cB,
              {
                id: this.props.id,
                target_id: this.props.target_id,
                is_active: this.state.bActive,
                min_target_scale: this.props.min_target_scale,
                max_target_scale: this.props.max_target_scale,
                displacement: this.props.displacement,
              },
              o.createElement(
                a.Y4,
                { value: this.props.opacity },
                o.createElement(
                  a.N,
                  { color: this.props.tint },
                  o.createElement(
                    a.dL,
                    { translation: { y: r / 2 } },
                    o.createElement(
                      a.dL,
                      { rotation: { z: 90 } },
                      o.createElement(
                        a.Zk,
                        {
                          width: r,
                          interactive: !0,
                          requires_laser: !0,
                          debug_name: "ResizeHandle",
                          hide_lasermouse_when_clicking: !0,
                        },
                        o.createElement(
                          h.$,
                          {
                            className:
                              t < 0.5
                                ? "ResizeHandleButtonMini"
                                : "ResizeHandleButton",
                            key: "move",
                            onMouseDown: this.startMove,
                            onMouseUp: this.endMove,
                          },
                          o.createElement("div", {
                            className: (0, g.FH)("ResizeHandleBar", [
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
      (0, n.Cg)([i.o], v.prototype, "startMove", null),
        (0, n.Cg)([i.o], v.prototype, "endMove", null),
        (v = (0, n.Cg)([s.PA], v));
      var _,
        b,
        S = r(3696),
        y = r(2563),
        f = r(9471),
        R = r(3714),
        w = r(7600),
        C = r(4007),
        M = r(795),
        T = r(2156),
        E = r(3246),
        V = r(7261),
        D = r(4734),
        B = r(2495);
      function A(e) {
        switch (e) {
          case V.$z.Dashboard:
          case V.$z.World:
            return 1;
          case V.$z.Theater:
            return 3;
          case V.$z.LeftHand:
          case V.$z.RightHand:
            return 4;
          default:
            return 0;
        }
      }
      function O(e) {
        const t = d.SW.currentTheaterScreenSize;
        switch (e) {
          case V.$z.LeftHand:
          case V.$z.RightHand:
            return 0.4 * d.SW.dashboardScale;
          case V.$z.Dashboard:
          case V.$z.World:
            return 1 * d.SW.dashboardScale;
          case V.$z.Theater:
            return d.SW.dashboardScale * (t == d.Nr.Large ? 2.35 : 1.8);
        }
        return d.SW.dashboardScale;
      }
      !(function (e) {
        (e[(e.Curved = 0)] = "Curved"), (e[(e.Flat = 1)] = "Flat");
      })(b || (b = {}));
      const I = "TheaterCurvatureOriginId";
      function k(e) {
        return e == V.$z.Dashboard;
      }
      function L(e) {
        return e == V.$z.World;
      }
      function H(e) {
        return e == V.$z.LeftHand || e == V.$z.RightHand;
      }
      function P(e) {
        switch (e) {
          case V.$z.LeftHand:
            return "/user/hand/left";
          case V.$z.RightHand:
            return "/user/hand/right";
          default:
            return "";
        }
      }
      function F(e, t) {
        try {
          return null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.GetPose(e, t);
        } catch (e) {
          return;
        }
      }
      let x = (_ = class extends o.Component {
        get primaryFrameOverlayKey() {
          var e, t;
          return null ===
            (t =
              null === (e = this.props.frame) || void 0 === e
                ? void 0
                : e.activePage) || void 0 === t
            ? void 0
            : t.summonOverlayKey;
        }
        get xfInitial() {
          var e, t;
          return null ===
            (t =
              null === (e = this.props.frame) || void 0 === e
                ? void 0
                : e.legacyOverlayState) || void 0 === t
            ? void 0
            : t.xfInitial;
        }
        constructor(e) {
          super(e),
            (this.state = {
              xfTransform: null,
              sParent: P(this.props.dockLocation),
              bIsOutsideMaxDist: !1,
              destination: this.props.dockLocation,
              bIsMoving: !1,
              bIsResizing: !1,
            }),
            (this.m_nMoveDeviceIndex = a.ne),
            (this.m_moveDeviceRole = a.kG.TrackedControllerRole_Invalid);
        }
        componentDidMount() {
          this.setInitialTransformForLocation();
        }
        componentDidUpdate(e, t) {
          e.dockLocation != this.props.dockLocation &&
            this.setState(
              {
                sParent: P(this.props.dockLocation),
                xfTransform: null,
                bIsOutsideMaxDist: !1,
                destination: this.props.dockLocation,
              },
              this.setInitialTransformForLocation,
            );
        }
        getCurrentOverlaySize() {
          var e;
          let t = VRHTML.VROverlay.FindOverlay(this.primaryFrameOverlayKey);
          if (!t) return null;
          let r = { x: 0, y: 0 };
          try {
            r = VRHTML.VROverlay.GetOverlayMouseScale(t);
          } catch (e) {
            return console.log(JSON.stringify(e)), null;
          }
          let n =
              null !== (e = VRHTML.VROverlay.GetWidthInMeters(t)) &&
              void 0 !== e
                ? e
                : 1,
            a = (n * r.y) / r.x;
          return (
            (this.primaryFrameOverlayKey.startsWith(c.GO) ||
              this.primaryFrameOverlayKey.startsWith(c.Uv)) &&
              ((a = B.b), (n = (a * r.x) / r.y)),
            { width: n, height: a }
          );
        }
        getPanelScaleForLocation() {
          var e, t;
          const r = d.SW.currentTheaterScreenSize;
          switch (this.props.dockLocation) {
            case V.$z.LeftHand:
            case V.$z.RightHand:
              return 0.15;
            case V.$z.Dashboard:
            case V.$z.World:
              let n = d.SW.isVRGamepadUI
                ? d.SW.m_fVRGamepadUI_GlobalActiveOverlayScale
                : 1;
              return (
                (n *= d.SW.dashboardScale),
                n *
                  (null !==
                    (t =
                      null === (e = this.props.frame.legacyOverlayState) ||
                      void 0 === e
                        ? void 0
                        : e.fScale) && void 0 !== t
                    ? t
                    : 1)
              );
            case V.$z.Theater:
              let a = r == d.Nr.Large ? 2.35 : 1.8;
              const i = this.getCurrentOverlaySize();
              return null === i || 0 == i.height ? a : a / i.height;
          }
          return 1;
        }
        setInitialTransformForTheater() {
          const e = d.SW.currentTheaterScreenSize == d.Nr.Large ? 0.6 : 0.4;
          switch (d.SW.currentTheaterScreenAlignment) {
            case d.tb.PlayArea: {
              let t = (0, a.vx)();
              (t.translation.y = e),
                (t.translation.z = -3.3),
                this.setState({ xfTransform: t });
              break;
            }
            case d.tb.Dashboard: {
              let t = 3;
              a.Cw.getInstance()
                .requestSGTransform(c.C6 + "::active_overlay_transform", t)
                .then((t) => {
                  let r = (0, a.vx)();
                  (r.rotation = t.rotation),
                    (r.translation = {
                      x: t.translation.x,
                      y: e,
                      z: t.translation.z,
                    }),
                    this.setState({ xfTransform: r });
                })
                .catch((t) => {
                  console.warn(
                    "Failed to get SGTransform in setInitialTransformForTheater. Using head fallback",
                    t,
                  );
                  let r = (function () {
                    const e = F("/user/head", a.mu.Standing);
                    if (
                      e &&
                      (null == e ? void 0 : e.bPoseIsValid) &&
                      (null == e ? void 0 : e.xfDeviceToAbsoluteTracking)
                    ) {
                      const t = 4,
                        r = -0.75,
                        n = (0, a.p0)(e.xfDeviceToAbsoluteTracking);
                      let i = (0, a.o_)(n);
                      i.y = 0;
                      let s = (0, a.tx)((0, a.e_)(i), t);
                      s.y += r;
                      let o = (0, a.vx)();
                      return (
                        (o.rotation = n.rotation),
                        (o.translation = (0, a.CU)(s, n.translation)),
                        o
                      );
                    }
                    return null;
                  })();
                  (null == r ? void 0 : r.translation) && (r.translation.y = e),
                    this.setState({ xfTransform: r });
                });
              break;
            }
            default:
              console.log(
                "DashboardOverlay ERROR: Unhandled TheaterScreenAlignment",
              );
          }
        }
        setInitialTransformForLocation() {
          if (this.xfInitial)
            switch (this.props.dockLocation) {
              case V.$z.LeftHand:
              case V.$z.RightHand:
              case V.$z.World:
                this.setState({ xfTransform: this.xfInitial });
            }
          else
            switch (this.props.dockLocation) {
              case V.$z.Dashboard:
              case V.$z.LeftHand:
              case V.$z.RightHand: {
                let e = (0, a.vx)();
                (e.rotation = (0, a.Fb)({ x: -45, y: 0, z: 0 })),
                  this.setState({ xfTransform: e });
                break;
              }
              case V.$z.World:
                a.Cw.getInstance()
                  .requestSGTransform(c.C6 + "::active_overlay_transform", 0)
                  .then((e) => {
                    let t = (0, a.vx)();
                    (t.rotation = e.rotation),
                      (t.translation = {
                        x: e.translation.x,
                        y: e.translation.y,
                        z: e.translation.z,
                      }),
                      this.setState({ xfTransform: t });
                  })
                  .catch((e) => {
                    console.warn(
                      "Failed to get SGTransform in setInitialTransformForLocation.",
                      e,
                    );
                  });
                break;
              case V.$z.Theater:
                this.setInitialTransformForTheater();
            }
        }
        computeDestination() {
          if (!this.state.bIsMoving || null === this.state.xfTransform) return;
          const e = F(this.m_nMoveDeviceIndex, a.mu.Standing);
          let t = null;
          VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
            a.kG.TrackedControllerRole_LeftHand,
          ) != a.ne && (t = F("/user/hand/left", a.mu.Standing));
          let r = null;
          VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
            a.kG.TrackedControllerRole_RightHand,
          ) != a.ne && (r = F("/user/hand/right", a.mu.Standing));
          let n = [];
          switch (this.state.sParent) {
            case "/user/hand/left":
              r && n.push({ pose: r, location: V.$z.RightHand });
              break;
            case "/user/hand/right":
              t && n.push({ pose: t, location: V.$z.LeftHand });
              break;
            case "/user/head":
              t && n.push({ pose: t, location: V.$z.LeftHand }),
                r && n.push({ pose: r, location: V.$z.RightHand });
          }
          if (!e || 0 == n.length)
            return void setTimeout(this.computeDestination, _.sfMovePulseMS);
          let i = VRHTML.MultiplyTransforms(
            e.xfDeviceToAbsoluteTracking,
            this.state.xfTransform,
          );
          n.forEach((e) => {
            let t = VRHTML.ChangeBasis(i, e.pose.xfDeviceToAbsoluteTracking);
            (0, a.Uj)(t.translation) > _.sfMaxDockDist
              ? this.state.bIsOutsideMaxDist ||
                (l.W.Instance.triggerHaptic(a.en.SlidingEdge),
                this.setState({
                  bIsOutsideMaxDist: !0,
                  destination: V.$z.World,
                }))
              : (this.state.bIsOutsideMaxDist ||
                  (this.props.dockLocation == V.$z.World &&
                    this.state.destination == V.$z.World)) &&
                (l.W.Instance.triggerHaptic(a.en.SlidingEdge),
                this.setState({
                  bIsOutsideMaxDist: !1,
                  destination: e.location,
                }));
          }),
            setTimeout(this.computeDestination, _.sfMovePulseMS);
        }
        startMove() {
          if (this.state.bIsMoving || null === this.state.xfTransform) return;
          if (
            (console.log(
              "Starting to move " + this.primaryFrameOverlayKey + "...\n",
            ),
            (this.m_nMoveDeviceIndex =
              VRHTML.VROverlay.GetPrimaryDashboardDevice()),
            this.m_nMoveDeviceIndex == a.ne)
          )
            return;
          this.m_moveDeviceRole =
            VRHTML.VRSystem.GetControllerRoleForTrackedDeviceIndex(
              this.m_nMoveDeviceIndex,
            );
          const e = F(this.m_nMoveDeviceIndex, a.mu.Standing);
          let t, r;
          switch (this.props.dockLocation) {
            case V.$z.LeftHand:
              if (
                VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                  a.kG.TrackedControllerRole_LeftHand,
                ) == a.ne
              )
                return;
              t = F("/user/hand/left", a.mu.Standing);
              break;
            case V.$z.RightHand:
              if (
                VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                  a.kG.TrackedControllerRole_RightHand,
                ) == a.ne
              )
                return;
              t = F("/user/hand/right", a.mu.Standing);
              break;
            default:
              t = {
                xfDeviceToAbsoluteTracking: (0, a.vx)(),
                vVelocity: { x: 0, y: 0, z: 0 },
                eTrackingResult: a.MV.TrackingResult_Running_OK,
                bPoseIsValid: !0,
              };
          }
          switch (this.m_moveDeviceRole) {
            case a.kG.TrackedControllerRole_LeftHand:
              r = "/user/hand/left";
              break;
            case a.kG.TrackedControllerRole_RightHand:
              r = "/user/hand/right";
              break;
            default:
              r = "/user/head";
          }
          let n = VRHTML.MultiplyTransforms(
              t.xfDeviceToAbsoluteTracking,
              this.state.xfTransform,
            ),
            i = VRHTML.ChangeBasis(n, e.xfDeviceToAbsoluteTracking);
          this.setState(
            {
              xfTransform: i,
              sParent: r,
              bIsOutsideMaxDist: this.props.dockLocation == V.$z.World,
              bIsMoving: !0,
            },
            this.computeDestination,
          ),
            window.addEventListener("mouseup", this.endMove);
        }
        endMove() {
          if (!this.state.bIsMoving) return;
          let e, t;
          if (
            "/user/hand/left" == this.state.sParent ||
            this.state.destination == V.$z.LeftHand
          ) {
            if (
              VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                a.kG.TrackedControllerRole_LeftHand,
              ) == a.ne
            )
              return;
            e = F("/user/hand/left", a.mu.Standing);
          }
          if (
            "/user/hand/right" == this.state.sParent ||
            this.state.destination == V.$z.RightHand
          ) {
            if (
              VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                a.kG.TrackedControllerRole_RightHand,
              ) == a.ne
            )
              return;
            t = F("/user/hand/right", a.mu.Standing);
          }
          let r,
            n = {
              xfDeviceToAbsoluteTracking: (0, a.vx)(),
              vVelocity: { x: 0, y: 0, z: 0 },
              eTrackingResult: a.MV.TrackingResult_Running_OK,
              bPoseIsValid: !0,
            };
          switch (this.state.destination) {
            case V.$z.LeftHand:
              r = e;
              break;
            case V.$z.RightHand:
              r = t;
              break;
            default:
              r = n;
          }
          const i = F(this.m_nMoveDeviceIndex, a.mu.Standing);
          let s = VRHTML.MultiplyTransforms(
              i.xfDeviceToAbsoluteTracking,
              this.state.xfTransform,
            ),
            o = VRHTML.ChangeBasis(s, r.xfDeviceToAbsoluteTracking);
          this.setState({
            xfTransform: o,
            sParent: P(this.state.destination),
            bIsMoving: !1,
          }),
            (0, V.qy)(this.props.frame, this.state.destination, o),
            window.removeEventListener("mouseup", this.endMove),
            this.props.frame.legacyOverlayState &&
              (this.props.frame.legacyOverlayState.bSuppressDoubleOverlayControlBar =
                !1);
        }
        UNSAFE_componentWillUpdate(e, t, r) {
          C.Q.BOverlayExists(this.primaryFrameOverlayKey) ||
            (0, V.qy)(this.props.frame, V.$z.Dashboard);
        }
        render() {
          var e, t, r;
          if (
            "" == this.primaryFrameOverlayKey ||
            null == this.state.xfTransform
          )
            return null;
          let n = this.getCurrentOverlaySize();
          if (null === n) return null;
          let i,
            s = !this.props.bDashboardShown,
            l = !1;
          if (this.props.dockLocation == V.$z.Theater) {
            if (this.props.bHasSceneApp && S.H.m_bShowFloor) return null;
            s = !0;
            const t =
              null !==
                (e = u.HR.settings.get(
                  "/settings/dashboard/enableLTCReflections",
                )) &&
              void 0 !== e &&
              e;
            (l = !d.SW.isGroupMode && d.SW.isDarkMode && t),
              d.SW.eTheaterCurvature == b.Curved && (i = I);
          }
          const h =
              C.Q.GetOverlayFlag(
                this.primaryFrameOverlayKey,
                a.NB.EnableControlBarKeyboard,
              ) || this.primaryFrameOverlayKey == c.Bn,
            g =
              (null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.BSupportsMultitaskingView()) &&
              this.primaryFrameOverlayKey.startsWith(c.GO),
            B = { x: 0, y: -0.15, z: 0.1 },
            k = (0, a.nX)(c.C6, "Floating-Panel"),
            L = (e) =>
              o.createElement(
                a.dL,
                {
                  parent_id: e.parent_id,
                  translation: { x: e.x_offset, y: e.y_offset, z: 0.01 },
                },
                o.createElement(v, {
                  id: e.target_id + ".ResizeHandle",
                  target_id: e.target_id,
                  min_target_scale: c.Ul,
                  max_target_scale: c.mB,
                  displacement: e.displacement,
                  bVisible: !0,
                  scale: e.scale,
                  tint: d.SW.GrabHandleTint,
                }),
              ),
            P = M.JJ.GetFramesWithAssociatedSummonKeys(
              this.primaryFrameOverlayKey,
            )[0];
          let F = null == P ? void 0 : P.frameMenuPopup;
          if (
            (F ||
              P != d.SW.mainSteamFrame ||
              (F = E.r.legacyFloatingMainMenuPopup),
            s)
          ) {
            const e =
                this.props.dockLocation == V.$z.Theater ||
                (null !==
                  (t = u.HR.settings.get(
                    "/settings/dashboard/inputCaptureEnabled",
                  )) &&
                  void 0 !== t &&
                  t),
              s =
                null !==
                  (r = u.HR.settings.get(
                    "/settings/dashboard/theaterModeReflection",
                  )) && void 0 !== r
                  ? r
                  : 0.5,
              h = 0.5 * Math.pow(s, 2.2);
            let v = -0.1,
              b = 4;
            const S = !0;
            let C = 0.1,
              M = n.width,
              E = n.height,
              H = 0.75;
            return o.createElement(
              w.tH,
              null,
              o.createElement(
                a.dL,
                { parent_path: void 0 },
                o.createElement(
                  a.dL,
                  {
                    transform_path: this.state.sParent,
                    transform: this.state.xfTransform,
                    id: "xf_widget",
                  },
                  o.createElement(
                    a.dL,
                    { translation: { y: H } },
                    o.createElement(
                      m.B,
                      {
                        min_distance: 0.7,
                        should_head_align: !0,
                        lerp_speed: _.flGrabTransformLerpSpeed,
                        reset_on_recenter:
                          this.props.dockLocation == V.$z.Theater,
                      },
                      o.createElement(a.dL, { id: I, translation: { z: b } }),
                      o.createElement(
                        a.dL,
                        { translation: { y: -1 * H } },
                        o.createElement(
                          a.dL,
                          { scale: this.getPanelScaleForLocation() },
                          o.createElement(
                            a.Zk,
                            {
                              id: k,
                              overlay_key: this.primaryFrameOverlayKey,
                              height: E,
                              width:
                                d.SW.m_eTheaterStereo != a.MQ.Mono ? M : void 0,
                              interactive: !0,
                              allow_input_capture: e,
                              undocked: !0,
                              origin:
                                this.props.dockLocation == V.$z.Theater
                                  ? { x: 0, y: -0.75 }
                                  : a.Oi.BottomCenter,
                              curvature_origin_id: i,
                              stereoscopy: d.SW.m_eTheaterStereo,
                              scale_index: A(this.props.dockLocation),
                              debug_name: "dashboard-overlay",
                            },
                            o.createElement(a.Ci, {
                              id: "Floating-Panel-BottomLeft",
                              location: a.Oi.BottomLeft,
                            }),
                            o.createElement(a.Ci, {
                              id: "Floating-Panel-BottomRight",
                              location: a.Oi.BottomRight,
                            }),
                            o.createElement(a.Ci, {
                              id: "Floating-Panel-BottomCenter",
                              location: a.Oi.BottomCenter,
                            }),
                            o.createElement(a.Ci, {
                              id: "Floating-Panel-CenterLeft",
                              location: a.Oi.CenterLeft,
                            }),
                            o.createElement(a.Ci, {
                              id: "Floating-Panel-CenterRight",
                              location: a.Oi.CenterRight,
                            }),
                            o.createElement(a.rF, {
                              mountedId: (0, a.nX)(
                                c.cb,
                                this.primaryFrameOverlayKey + ".cursor",
                              ),
                            }),
                            F &&
                              o.createElement(
                                a.dL,
                                { parent_id: "Floating-Panel-CenterLeft" },
                                o.createElement(T.O, { popupRequest: F }),
                              ),
                          ),
                        ),
                        o.createElement(
                          a.dL,
                          { parent_id: "Floating-Panel-CenterLeft" },
                          o.createElement(a.uC, {
                            name: this.primaryFrameOverlayKey,
                            channel: "front_left",
                          }),
                        ),
                        o.createElement(
                          a.dL,
                          { parent_id: "Floating-Panel-CenterRight" },
                          o.createElement(a.uC, {
                            name: this.primaryFrameOverlayKey,
                            channel: "front_right",
                          }),
                        ),
                        l &&
                          o.createElement(a.lq, {
                            target_id: k,
                            "near-z": v,
                            "far-z": 0.1,
                            specular: { color: { r: h, g: h, b: h } },
                            diffuse: { size: 20, resolution: 512 },
                            debug: !1,
                          }),
                        !1,
                        this.props.dockLocation == V.$z.Theater &&
                          o.createElement(
                            o.Fragment,
                            null,
                            o.createElement(
                              a.Y4,
                              { value: 1 },
                              o.createElement(
                                a.dL,
                                {
                                  parent_id: "Floating-Panel-BottomCenter",
                                  translation: { z: 0.02, y: -0.04 },
                                  ignore_parent_scale: !0,
                                  scale: O(this.props.dockLocation),
                                },
                                S &&
                                  o.createElement(
                                    a.Zk,
                                    {
                                      height: C,
                                      width: void 0,
                                      interactive: !0,
                                      requires_laser: !0,
                                      origin: a.Oi.TopCenter,
                                      curvature_origin_id: i,
                                      debug_name: "theater-control-bar",
                                    },
                                    o.createElement(
                                      "div",
                                      {
                                        className:
                                          "TransparentOverlayControlBar",
                                      },
                                      o.createElement(
                                        "div",
                                        { className: "Section" },
                                        g &&
                                          o.createElement(y.N2, {
                                            key: "multitask",
                                            iconUrl:
                                              "/dashboard/images/icons/icon_multitasking_view.png",
                                            tooltipTranslation: B,
                                            onClick: () =>
                                              D.Q.ShowMultitaskingView(),
                                            additionalClassNames: "LargeIcon",
                                          }),
                                      ),
                                      o.createElement(
                                        "div",
                                        { className: "Section" },
                                        o.createElement(y.N2, {
                                          icon: o.createElement(f.Xj, null),
                                          title: (0, R.we)(
                                            "#ReturnToDashboard",
                                          ),
                                          key: "dock",
                                          tooltipTranslation: B,
                                          onClick: () => {
                                            (0, V.qy)(P, V.$z.Dashboard);
                                          },
                                          additionalClassNames: "LargeIcon",
                                        }),
                                      ),
                                    ),
                                  ),
                                o.createElement(
                                  a.dL,
                                  { translation: { y: -C - 0.1, z: 0.03 } },
                                  o.createElement(p.X, {
                                    scale: 1.5,
                                    tint: d.SW.GrabHandleTint,
                                    curvature_origin_id: i,
                                  }),
                                ),
                              ),
                              o.createElement(L, {
                                parent_id: "Floating-Panel-BottomRight",
                                target_id: k,
                                scale: 1.25,
                                displacement: 1.75,
                                x_offset: 0.03,
                                y_offset: 0,
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
          const x = n.height,
            N = Math.max(n.width, 0.175),
            z = d.SW.isVRGamepadUI
              ? {
                  r: (14 / 255) * 0.1,
                  g: (20 / 255) * 0.1,
                  b: (27 / 255) * 0.1,
                }
              : { r: 0.016, g: 0.017, b: 0.02 };
          return o.createElement(
            w.tH,
            null,
            o.createElement(
              a.dL,
              {
                parent_path: this.state.sParent,
                transform: this.state.xfTransform,
                id: "xf_widget",
              },
              o.createElement(
                a.dL,
                { scale: this.getPanelScaleForLocation() },
                o.createElement(
                  a.Zk,
                  {
                    id: k,
                    overlay_key: this.primaryFrameOverlayKey,
                    height: n.height,
                    width: void 0,
                    interactive: !0,
                    undocked: !0,
                    origin: a.Oi.BottomCenter,
                    scale_index: A(this.props.dockLocation),
                    debug_name: "control-bar-floating-overlay",
                  },
                  o.createElement(
                    a.dL,
                    {
                      translation: { z: -0.005 },
                      scale: { x: N, y: x, z: 0.008 },
                    },
                    o.createElement(
                      a.N,
                      { color: z },
                      o.createElement(a.aX, { solid: !0, source: "unit_cube" }),
                    ),
                  ),
                  o.createElement(a.Ci, {
                    id: "Floating-Panel-BottomLeft",
                    location: a.Oi.BottomLeft,
                  }),
                  o.createElement(a.Ci, {
                    id: "Floating-Panel-BottomRight",
                    location: a.Oi.BottomRight,
                  }),
                  o.createElement(a.Ci, {
                    id: "Floating-Panel-BottomCenter",
                    location: a.Oi.BottomCenter,
                  }),
                  o.createElement(a.Ci, {
                    id: "Floating-Panel-CenterLeft",
                    location: a.Oi.CenterLeft,
                  }),
                  o.createElement(a.Ci, {
                    id: "Floating-Panel-CenterRight",
                    location: a.Oi.CenterRight,
                  }),
                  o.createElement(a.rF, {
                    mountedId: (0, a.nX)(
                      c.cb,
                      this.primaryFrameOverlayKey + ".cursor",
                    ),
                  }),
                  F &&
                    o.createElement(
                      a.dL,
                      { parent_id: "Floating-Panel-CenterLeft" },
                      o.createElement(T.O, { popupRequest: F }),
                    ),
                ),
              ),
              o.createElement(
                a.dL,
                { parent_id: "Floating-Panel-CenterLeft" },
                o.createElement(a.uC, {
                  name: this.primaryFrameOverlayKey,
                  channel: "front_left",
                }),
              ),
              o.createElement(
                a.dL,
                { parent_id: "Floating-Panel-CenterRight" },
                o.createElement(a.uC, {
                  name: this.primaryFrameOverlayKey,
                  channel: "front_right",
                }),
              ),
              o.createElement(L, {
                parent_id: "Floating-Panel-BottomRight",
                target_id: k,
                scale:
                  O(this.props.dockLocation) *
                  (H(this.props.dockLocation) ? 1.5 : 1),
                displacement: 0,
                x_offset: H(this.props.dockLocation) ? 0.02 : 0.01,
                y_offset: 0,
              }),
              o.createElement(
                a.dL,
                {
                  parent_id: "Floating-Panel-BottomCenter",
                  translation: { y: -0.01, z: 0 },
                  ignore_parent_scale: !0,
                  scale: O(this.props.dockLocation),
                },
                o.createElement(
                  a.Zk,
                  {
                    height: _.sfOverlayTrayHeight,
                    width: void 0,
                    interactive: !0,
                    origin: a.Oi.TopCenter,
                    debug_name: "control-bar-floating",
                  },
                  o.createElement(
                    "div",
                    { className: "TransparentOverlayControlBar" },
                    o.createElement(
                      "div",
                      { className: "Section" },
                      h &&
                        o.createElement(y.oZ, {
                          overlayKey: this.primaryFrameOverlayKey,
                          showTooltip: !1,
                          additionalClassNames: "LargeIcon",
                        }),
                      g &&
                        o.createElement(y.N2, {
                          key: "multitask",
                          iconUrl:
                            "/dashboard/images/icons/icon_multitasking_view.png",
                          tooltipTranslation: B,
                          onClick: () => D.Q.ShowMultitaskingView(),
                          additionalClassNames: "LargeIcon",
                        }),
                    ),
                    o.createElement(
                      "div",
                      { className: "Section" },
                      o.createElement(y.N2, {
                        icon: o.createElement(f.Xj, null),
                        title: (0, R.we)("#ReturnToDashboard"),
                        key: "dock",
                        tooltipTranslation: B,
                        onClick: () => {
                          (0, V.qy)(this.props.frame, V.$z.Dashboard);
                        },
                        additionalClassNames: "LargeIcon",
                      }),
                      o.createElement(y.N2, {
                        key: "move",
                        iconUrl: "/dashboard/images/icons/icon_move.png",
                        onMouseDown: this.startMove,
                        onMouseUp: this.endMove,
                        additionalClassNames: "LargeIcon",
                      }),
                    ),
                  ),
                ),
              ),
              this.state.bIsMoving &&
                !this.state.bIsOutsideMaxDist &&
                o.createElement(
                  o.Fragment,
                  null,
                  o.createElement(
                    a.dL,
                    {
                      parent_path:
                        this.state.destination == V.$z.LeftHand
                          ? "/user/hand/left"
                          : "/user/hand/right",
                    },
                    o.createElement(a.N1, {
                      target_id: "xf_widget",
                      thickness: 0.001,
                      start_buffer: 0.01,
                      end_buffer: 0.01,
                    }),
                  ),
                ),
            ),
          );
        }
      });
      (x.sfMaxDockDist = 0.4),
        (x.sfMovePulseMS = 100),
        (x.sfOverlayTrayHeight = 0.12),
        (x.flGrabTransformLerpSpeed = 0.125),
        (0, n.Cg)([i.o], x.prototype, "computeDestination", null),
        (0, n.Cg)([i.o], x.prototype, "startMove", null),
        (0, n.Cg)([i.o], x.prototype, "endMove", null),
        (x = _ = (0, n.Cg)([s.PA], x));
    },
    3712: (e, t, r) => {
      "use strict";
      r.d(t, { X: () => d });
      var n = r(1635),
        a = r(6540),
        i = r(3236),
        s = r(6090),
        o = r(1370),
        l = r(6138),
        c = r(9248),
        u = r(1139);
      let d = class extends a.Component {
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
          var e, t;
          if (null == this.state.xfTransform) return null;
          const r = null === (e = this.props.bVisible) || void 0 === e || e,
            n = null !== (t = this.props.scale) && void 0 !== t ? t : 1;
          return (
            r &&
            a.createElement(
              s.dL,
              null,
              a.createElement(
                s.Y4,
                { value: this.props.opacity },
                a.createElement(
                  s.N,
                  { color: this.props.tint },
                  a.createElement(
                    s.Zk,
                    {
                      width: 0.66675 * n,
                      interactive: !0,
                      requires_laser: !0,
                      debug_name: "DashboardGrabHandle",
                      origin: s.Oi.BottomCenter,
                      curvature_origin_id: this.props.curvature_origin_id,
                      hide_lasermouse_when_clicking: !0,
                      is_grab_handle: !0,
                    },
                    a.createElement(
                      l.$,
                      {
                        className: "GrabHandleButton",
                        key: "move",
                        onMouseDown: this.startMove,
                        onMouseUp: this.endMove,
                      },
                      a.createElement("div", {
                        className: (0, u.FH)("GrabHandleBar", [
                          "ForceActive",
                          this.state.bActive,
                        ]),
                      }),
                    ),
                  ),
                ),
              ),
            )
          );
        }
      };
      (d.contextType = c.E),
        (0, n.Cg)([i.o], d.prototype, "startMove", null),
        (0, n.Cg)([i.o], d.prototype, "endMove", null),
        (d = (0, n.Cg)([o.PA], d));
    },
    9248: (e, t, r) => {
      "use strict";
      r.d(t, { B: () => l, E: () => o });
      var n = r(1635),
        a = r(6090),
        i = r(1370),
        s = r(6540);
      const o = s.createContext(void 0);
      let l = class extends s.Component {
        constructor(e) {
          super(e), (this.state = { transform: (0, a.vx)(), parent_path: "" });
        }
        render() {
          var e;
          return s.createElement(
            a.nq,
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
      l = (0, n.Cg)([i.PA], l);
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_hotfix_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~8012d0c89.js.map
