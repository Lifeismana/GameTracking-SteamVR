var CLSTAMP = "10072902";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [305],
  {
    7504: () => {},
    6013: (e, t, r) => {
      "use strict";
      r.d(t, {
        Gm: () => d,
        J$: () => m,
        M2: () => v,
        MS: () => c,
        T4: () => g,
        UQ: () => l,
        Yz: () => _,
        _z: () => u,
        gL: () => h,
        my: () => p,
      });
      var n = r(5339),
        i = r(3924),
        a = r(8770),
        s = r(8723);
      const o = n.Message;
      class l extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.tabs || i.Sg(l.M()),
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
                    br: i.qM.readUint32,
                    bw: i.gp.writeUint32,
                  },
                  vr_steam_tab_id: {
                    n: 4,
                    br: i.qM.readUint32,
                    bw: i.gp.writeUint32,
                  },
                  deprecated_vr_settings_tab_id: {
                    n: 3,
                    br: i.qM.readUint32,
                    bw: i.gp.writeUint32,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = i.w0(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(l.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(l.M(), e, t);
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
            c.prototype.tab_id || i.Sg(c.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  tab_id: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  associated_frame_id: {
                    n: 7,
                    br: i.qM.readUint32,
                    bw: i.gp.writeUint32,
                  },
                  display_name: {
                    n: 3,
                    br: i.qM.readString,
                    bw: i.gp.writeString,
                  },
                  icon: { n: 6, c: a.aV },
                  visible_in_dashboard_bar: {
                    n: 2,
                    br: i.qM.readBool,
                    bw: i.gp.writeBool,
                  },
                  visible_in_dashboard_bar_hamburger_menu: {
                    n: 5,
                    br: i.qM.readBool,
                    bw: i.gp.writeBool,
                  },
                  deprecated_icon: { n: 4, c: a.Tp },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = i.w0(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(c.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(c.M(), e, t);
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
            u.prototype.defined_actions || i.Sg(u.M()),
            o.initialize(this, e, 0, -1, [2, 3, 4, 1], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  defined_actions: { n: 2, c: s.z, r: !0, q: !0 },
                  bar_buttons: { n: 3, c: d, r: !0, q: !0 },
                  bar_menu_items: { n: 4, c: p, r: !0, q: !0 },
                  deprecated_actions: { n: 1, c: _, r: !0, q: !0 },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = i.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(u.M(), e, t);
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
            d.prototype.type || i.Sg(d.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  type: { n: 1, br: i.qM.readEnum, bw: i.gp.writeEnum },
                  action_id: {
                    n: 2,
                    br: i.qM.readUint32,
                    bw: i.gp.writeUint32,
                  },
                  is_main_hamburger_menu: {
                    n: 3,
                    br: i.qM.readBool,
                    bw: i.gp.writeBool,
                  },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = i.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new d();
          return d.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_PathProperty_DashboardBarActions_BarButton";
        }
      }
      class p extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.type || i.Sg(p.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  type: { n: 1, br: i.qM.readEnum, bw: i.gp.writeEnum },
                  parent_menu_action_id: {
                    n: 2,
                    br: i.qM.readUint32,
                    bw: i.gp.writeUint32,
                  },
                  action_id: {
                    n: 3,
                    br: i.qM.readUint32,
                    bw: i.gp.writeUint32,
                  },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = i.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_PathProperty_DashboardBarActions_BarMenuItem";
        }
      }
      class m extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.windows || i.Sg(m.M()),
            o.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: { windows: { n: 1, c: h, r: !0, q: !0 } },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = i.w0(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(m.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_PathProperty_DesktopWindows";
        }
        static getVRPathPropertyKey() {
          return "/vrgamepadui/steamvr/desktop_windows";
        }
        getVRPathPropertyKey() {
          return m.getVRPathPropertyKey();
        }
      }
      class h extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.window_id || i.Sg(h.M()),
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
                    br: i.qM.readUint32,
                    bw: i.gp.writeUint32,
                  },
                  hwnd: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  title: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                  tab_id: { n: 4, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = i.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(h.M(), e, t);
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
            g.prototype.can_sleep || i.Sg(g.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  can_sleep: { n: 1, br: i.qM.readBool, bw: i.gp.writeBool },
                  can_shutdown: { n: 2, br: i.qM.readBool, bw: i.gp.writeBool },
                  can_restart_system: {
                    n: 3,
                    br: i.qM.readBool,
                    bw: i.gp.writeBool,
                  },
                  can_exitvr: { n: 4, br: i.qM.readBool, bw: i.gp.writeBool },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = i.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new g();
          return g.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(g.M(), e, t);
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
            v.prototype.version || i.Sg(v.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  version: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                  webpack_build_timestamp: {
                    n: 2,
                    br: i.qM.readUint32,
                    bw: i.gp.writeUint32,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = i.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_PathProperty_VRVersionInfo";
        }
        static getVRPathPropertyKey() {
          return "/vrgamepadui/steamvr/version_info";
        }
        getVRPathPropertyKey() {
          return v.getVRPathPropertyKey();
        }
      }
      class _ extends o {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.action_id || i.Sg(_.M()),
            o.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  action_id: {
                    n: 1,
                    br: i.qM.readUint32,
                    bw: i.gp.writeUint32,
                  },
                  enabled: { n: 3, br: i.qM.readBool, bw: i.gp.writeBool },
                  display_name: {
                    n: 4,
                    br: i.qM.readString,
                    bw: i.gp.writeString,
                  },
                  visible_in_dashboard_bar: {
                    n: 2,
                    br: i.qM.readBool,
                    bw: i.gp.writeBool,
                  },
                  visible_in_menu: {
                    n: 10,
                    br: i.qM.readBool,
                    bw: i.gp.writeBool,
                  },
                  is_menu: { n: 11, br: i.qM.readBool, bw: i.gp.writeBool },
                  parent_menu_action_id: {
                    n: 12,
                    br: i.qM.readUint32,
                    bw: i.gp.writeUint32,
                  },
                  icon: { n: 13, c: a.aV },
                  icon_active: { n: 14, c: a.aV },
                  invocation: { n: 7, br: i.qM.readEnum, bw: i.gp.writeEnum },
                  special_invocation: {
                    n: 9,
                    br: i.qM.readEnum,
                    bw: i.gp.writeEnum,
                  },
                  active: { n: 8, br: i.qM.readBool, bw: i.gp.writeBool },
                  deprecated_icon: { n: 5, c: a.Ym },
                  deprecated_icon_active: { n: 6, c: a.Ym },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = i.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new _();
          return _.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
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
        i = r(3924),
        a = r(8770);
      const s = n.Message;
      class o extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.action_id || i.Sg(o.M()),
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
                    br: i.qM.readUint32,
                    bw: i.gp.writeUint32,
                  },
                  display_name: {
                    n: 2,
                    br: i.qM.readString,
                    bw: i.gp.writeString,
                  },
                  invocation: { n: 3, br: i.qM.readEnum, bw: i.gp.writeEnum },
                  icon: { n: 4, c: a.aV },
                  icon_active: { n: 5, c: a.aV },
                  enabled: { n: 6, br: i.qM.readBool, bw: i.gp.writeBool },
                  active: { n: 7, br: i.qM.readBool, bw: i.gp.writeBool },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = i.w0(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(o.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(o.M(), e, t);
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
        i = r(3924);
      const a = n.Message;
      class s extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            s.prototype.enum || i.Sg(s.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            s.sm_m ||
              (s.sm_m = {
                proto: s,
                fields: {
                  enum: { n: 1, br: i.qM.readEnum, bw: i.gp.writeEnum },
                  appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  overlay: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                  hwnd: { n: 4, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                },
              }),
            s.sm_m
          );
        }
        static MBF() {
          return s.sm_mbf || (s.sm_mbf = i.w0(s.M())), s.sm_mbf;
        }
        toObject(e = !1) {
          return s.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(s.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(s.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new s();
          return s.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(s.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(s.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_Icon";
        }
      }
      class o extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.enum || i.Sg(o.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  enum: { n: 1, br: i.qM.readEnum, bw: i.gp.writeEnum },
                  appid: { n: 2, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  overlay: { n: 3, br: i.qM.readString, bw: i.gp.writeString },
                  hwnd: { n: 4, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = i.w0(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(o.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_DEPRECATED_DashboardTabIcon";
        }
      }
      class l extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.enum || i.Sg(l.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  enum: { n: 1, br: i.qM.readEnum, bw: i.gp.writeEnum },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = i.w0(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(l.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(l.M(), e, t);
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
        i = r(3924);
      const a = n.Message;
      class s extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            s.prototype.name || i.Sg(s.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            s.sm_m ||
              (s.sm_m = {
                proto: s,
                fields: {
                  name: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                  message_id: {
                    n: 2,
                    br: i.qM.readUint32,
                    bw: i.gp.writeUint32,
                  },
                  response_to_message_id: {
                    n: 3,
                    br: i.qM.readUint32,
                    bw: i.gp.writeUint32,
                  },
                  is_error_response: {
                    n: 4,
                    br: i.qM.readBool,
                    bw: i.gp.writeBool,
                  },
                },
              }),
            s.sm_m
          );
        }
        static MBF() {
          return s.sm_mbf || (s.sm_mbf = i.w0(s.M())), s.sm_mbf;
        }
        toObject(e = !1) {
          return s.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(s.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(s.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new s();
          return s.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(s.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(s.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return s.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_Header";
        }
      }
      class o extends a {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.error || i.Sg(o.M()),
            a.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  error: { n: 1, br: i.qM.readEnum, bw: i.gp.writeEnum },
                  description: {
                    n: 2,
                    br: i.qM.readString,
                    bw: i.gp.writeString,
                  },
                  origin: { n: 3, br: i.qM.readEnum, bw: i.gp.writeEnum },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = i.w0(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(o.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(o.M(), e, t);
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
      r.d(t, { oT: () => x, f5: () => N });
      var n = r(5339),
        i = r(3924),
        a = r(8723);
      const s = n.Message;
      class o extends s {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.frame_id || i.Sg(o.M()),
            s.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  frame_id: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  menu: { n: 2, c: l },
                  defined_actions: { n: 3, c: a.z, r: !0, q: !0 },
                  tmp_title: {
                    n: 1e3,
                    br: i.qM.readString,
                    bw: i.gp.writeString,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = i.w0(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(o.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new o();
          return o.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(o.M(), e, t);
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
            l.prototype.items_for_left_frame_menu || i.Sg(l.M()),
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
          return l.sm_mbf || (l.sm_mbf = i.w0(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(l.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(l.M(), e, t);
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
            c.prototype.type || i.Sg(c.M()),
            s.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  type: { n: 1, br: i.qM.readEnum, bw: i.gp.writeEnum },
                  action_id: {
                    n: 2,
                    br: i.qM.readUint32,
                    bw: i.gp.writeUint32,
                  },
                  steam_main_menu_options: { n: 3, c: u },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = i.w0(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(c.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(c.M(), e, t);
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
            u.prototype.allow_show_as_active || i.Sg(u.M()),
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
                    br: i.qM.readBool,
                    bw: i.gp.writeBool,
                  },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = i.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new u();
          return u.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(u.M(), e, t);
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
      class p extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.tab_id || i.Sg(p.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: {
                  tab_id: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = i.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new p();
          return p.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_DashboardTabClicked_Request";
        }
      }
      class m extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new m();
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new m();
          return m.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_DashboardTabClicked_Response";
        }
      }
      class h extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.action_id || i.Sg(h.M()),
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
                    br: i.qM.readUint32,
                    bw: i.gp.writeUint32,
                  },
                  toggle_value: { n: 2, br: i.qM.readBool, bw: i.gp.writeBool },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = i.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new h();
          return h.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(h.M(), e, t);
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
            v.prototype.window_id || i.Sg(v.M()),
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
                    br: i.qM.readUint32,
                    bw: i.gp.writeUint32,
                  },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = i.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new v();
          return v.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(v.M(), e, t);
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
            b.prototype.dashboard_popup_id || i.Sg(b.M()),
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
                    br: i.qM.readUint32,
                    bw: i.gp.writeUint32,
                  },
                  popup_overlay_key: {
                    n: 2,
                    br: i.qM.readString,
                    bw: i.gp.writeString,
                  },
                  parent_enum: { n: 15, br: i.qM.readEnum, bw: i.gp.writeEnum },
                  parent_overlay_key: {
                    n: 3,
                    br: i.qM.readString,
                    bw: i.gp.writeString,
                  },
                  parent_device_path: {
                    n: 13,
                    br: i.qM.readString,
                    bw: i.gp.writeString,
                  },
                  origin_on_parent: { n: 4, c: S },
                  origin_on_popup: { n: 5, c: S },
                  offset: { n: 6, c: y },
                  rotation: { n: 7, c: f },
                  inherit_parent_pitch: {
                    n: 8,
                    br: i.qM.readBool,
                    bw: i.gp.writeBool,
                  },
                  inherit_parent_curvature: {
                    n: 9,
                    br: i.qM.readBool,
                    bw: i.gp.writeBool,
                  },
                  clip_rect: { n: 10, c: R },
                  interactive: { n: 11, br: i.qM.readBool, bw: i.gp.writeBool },
                  requires_laser: {
                    n: 12,
                    br: i.qM.readBool,
                    bw: i.gp.writeBool,
                  },
                  sort_order: { n: 14, br: i.qM.readEnum, bw: i.gp.writeEnum },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = i.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new b();
          return b.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(b.M(), e, t);
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
            S.prototype.x || i.Sg(S.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  x: { n: 1, br: i.qM.readFloat, bw: i.gp.writeFloat },
                  y: { n: 2, br: i.qM.readFloat, bw: i.gp.writeFloat },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = i.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new S();
          return S.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(S.M(), e, t);
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
            y.prototype.x_pixels || i.Sg(y.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            y.sm_m ||
              (y.sm_m = {
                proto: y,
                fields: {
                  x_pixels: { n: 1, br: i.qM.readFloat, bw: i.gp.writeFloat },
                  y_pixels: { n: 2, br: i.qM.readFloat, bw: i.gp.writeFloat },
                  z_pixels: { n: 3, br: i.qM.readFloat, bw: i.gp.writeFloat },
                  x_meters: { n: 4, br: i.qM.readFloat, bw: i.gp.writeFloat },
                  y_meters: { n: 5, br: i.qM.readFloat, bw: i.gp.writeFloat },
                  z_meters: { n: 6, br: i.qM.readFloat, bw: i.gp.writeFloat },
                },
              }),
            y.sm_m
          );
        }
        static MBF() {
          return y.sm_mbf || (y.sm_mbf = i.w0(y.M())), y.sm_mbf;
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(y.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(y.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new y();
          return y.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(y.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(y.M(), e, t);
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
            f.prototype.pitch_degrees || i.Sg(f.M()),
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
                    br: i.qM.readFloat,
                    bw: i.gp.writeFloat,
                  },
                  yaw_degrees: {
                    n: 2,
                    br: i.qM.readFloat,
                    bw: i.gp.writeFloat,
                  },
                },
              }),
            f.sm_m
          );
        }
        static MBF() {
          return f.sm_mbf || (f.sm_mbf = i.w0(f.M())), f.sm_mbf;
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(f.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(f.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new f();
          return f.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(f.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(f.M(), e, t);
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
            R.prototype.u_min || i.Sg(R.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  u_min: { n: 1, br: i.qM.readFloat, bw: i.gp.writeFloat },
                  v_min: { n: 2, br: i.qM.readFloat, bw: i.gp.writeFloat },
                  u_max: { n: 3, br: i.qM.readFloat, bw: i.gp.writeFloat },
                  v_max: { n: 4, br: i.qM.readFloat, bw: i.gp.writeFloat },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = i.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new R();
          return R.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(R.M(), e, t);
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
            C.prototype.dashboard_popup_id || i.Sg(C.M()),
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
                    br: i.qM.readUint32,
                    bw: i.gp.writeUint32,
                  },
                },
              }),
            C.sm_m
          );
        }
        static MBF() {
          return C.sm_mbf || (C.sm_mbf = i.w0(C.M())), C.sm_mbf;
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(C.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(C.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new C();
          return C.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(C.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(C.M(), e, t);
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
            T.prototype.source_accountid || i.Sg(T.M()),
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
                    br: i.qM.readUint32,
                    bw: i.gp.writeUint32,
                  },
                  video_uniqueid: {
                    n: 2,
                    br: i.qM.readString,
                    bw: i.gp.writeString,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = i.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new T();
          return T.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(T.M(), e, t);
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
            V.prototype.overlay_key || i.Sg(V.M()),
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
                    br: i.qM.readString,
                    bw: i.gp.writeString,
                  },
                },
              }),
            V.sm_m
          );
        }
        static MBF() {
          return V.sm_mbf || (V.sm_mbf = i.w0(V.M())), V.sm_mbf;
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(V.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(V.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new V();
          return V.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(V.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(V.M(), e, t);
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
      class k extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.overlay_key || i.Sg(k.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  overlay_key: {
                    n: 1,
                    br: i.qM.readString,
                    bw: i.gp.writeString,
                  },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = i.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(k.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new k();
          return k.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowOverlay_Request";
        }
      }
      class O extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.initialize(this, e, 0, -1, void 0, null);
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
          let t = new n.BinaryReader(e),
            r = new O();
          return O.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowOverlay_Response";
        }
      }
      class A extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            A.prototype.url || i.Sg(A.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            A.sm_m ||
              (A.sm_m = {
                proto: A,
                fields: {
                  url: { n: 1, br: i.qM.readString, bw: i.gp.writeString },
                },
              }),
            A.sm_m
          );
        }
        static MBF() {
          return A.sm_mbf || (A.sm_mbf = i.w0(A.M())), A.sm_mbf;
        }
        toObject(e = !1) {
          return A.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(A.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(A.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new A();
          return A.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(A.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(A.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return A.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ExecuteSteamURL_Request";
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
          return "CVRGamepadUI_Message_ExecuteSteamURL_Response";
        }
      }
      class B extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), d.initialize(this, e, 0, -1, void 0, null);
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
          let t = new n.BinaryReader(e),
            r = new B();
          return B.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_InitFrameSystem_Request";
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
          return "CVRGamepadUI_Message_InitFrameSystem_Response";
        }
      }
      class L extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            L.prototype.updated_frames || i.Sg(L.M()),
            d.initialize(this, e, 0, -1, [1, 2, 3, 4], null);
        }
        static M() {
          return (
            L.sm_m ||
              (L.sm_m = {
                proto: L,
                fields: {
                  updated_frames: { n: 1, c: o, r: !0, q: !0 },
                  deleted_frames: {
                    n: 2,
                    r: !0,
                    q: !0,
                    br: i.qM.readUint32,
                    pbr: i.qM.readPackedUint32,
                    bw: i.gp.writeRepeatedUint32,
                  },
                  shown_frames: {
                    n: 3,
                    r: !0,
                    q: !0,
                    br: i.qM.readUint32,
                    pbr: i.qM.readPackedUint32,
                    bw: i.gp.writeRepeatedUint32,
                  },
                  hidden_frames: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: i.qM.readUint32,
                    pbr: i.qM.readPackedUint32,
                    bw: i.gp.writeRepeatedUint32,
                  },
                },
              }),
            L.sm_m
          );
        }
        static MBF() {
          return L.sm_mbf || (L.sm_mbf = i.w0(L.M())), L.sm_mbf;
        }
        toObject(e = !1) {
          return L.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(L.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(L.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new L();
          return L.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(L.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(L.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_UpdateFrameUIs_Request";
        }
      }
      class P extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            P.prototype.results || i.Sg(P.M()),
            d.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            P.sm_m ||
              (P.sm_m = {
                proto: P,
                fields: { results: { n: 1, c: F, r: !0, q: !0 } },
              }),
            P.sm_m
          );
        }
        static MBF() {
          return P.sm_mbf || (P.sm_mbf = i.w0(P.M())), P.sm_mbf;
        }
        toObject(e = !1) {
          return P.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(P.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(P.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new P();
          return P.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(P.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(P.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return P.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_UpdateFrameUIs_Response";
        }
      }
      class F extends d {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            F.prototype.frame_id || i.Sg(F.M()),
            d.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            F.sm_m ||
              (F.sm_m = {
                proto: F,
                fields: {
                  frame_id: { n: 1, br: i.qM.readUint32, bw: i.gp.writeUint32 },
                  frame_menu_dashboard_popup_id: {
                    n: 2,
                    br: i.qM.readUint32,
                    bw: i.gp.writeUint32,
                  },
                },
              }),
            F.sm_m
          );
        }
        static MBF() {
          return F.sm_mbf || (F.sm_mbf = i.w0(F.M())), F.sm_mbf;
        }
        toObject(e = !1) {
          return F.toObject(e, this);
        }
        static toObject(e, t) {
          return i.BT(F.M(), e, t);
        }
        static fromObject(e) {
          return i.Uq(F.M(), e);
        }
        static deserializeBinary(e) {
          let t = new n.BinaryReader(e),
            r = new F();
          return F.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return i.zj(F.MBF(), e, t);
        }
        serializeBinary() {
          var e = new n.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          i.i0(F.M(), e, t);
        }
        serializeBase64String() {
          var e = new n.BinaryWriter();
          return F.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_UpdateFrameUIs_Response_FrameUpdateResult";
        }
      }
      const N = {
        "DashboardTabClicked#1": {
          msgClassRequest_t: p,
          msgClassResponse_t: m,
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
          msgClassRequest_t: k,
          msgClassResponse_t: O,
          strMethod: "ShowOverlay",
        },
      };
      class x {
        constructor(e) {
          this.m_Client = e;
        }
        ExecuteSteamURL(e) {
          return this.m_Client.SendVRGamepadUIRequest(
            "ExecuteSteamURL#1",
            A.fromObject(null != e ? e : {}),
            I,
          );
        }
        InitFrameSystem(e) {
          return this.m_Client.SendVRGamepadUIRequest(
            "InitFrameSystem#1",
            B.fromObject(null != e ? e : {}),
            H,
          );
        }
        UpdateFrameUIs(e) {
          return this.m_Client.SendVRGamepadUIRequest(
            "UpdateFrameUIs#1",
            L.fromObject(null != e ? e : {}),
            P,
          );
        }
      }
    },
    5818: (e, t, r) => {
      "use strict";
      r.d(t, { z: () => ke });
      var n = r(1635),
        i = r(6090),
        a = r(3236),
        s = r(2563),
        o = r(7813),
        l = r(1370),
        c = r(6540),
        u = r(6138),
        d = r(6731),
        p = r(5615),
        m = r(3606),
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
            a &&
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
        (0, n.Cg)([a.o], S.prototype, "onAudioDeviceChanged", null),
        (0, n.Cg)([a.o], S.prototype, "onOverrideDeviceDropdownChanged", null),
        (0, n.Cg)([a.o], S.prototype, "onMirrorDeviceDropdownChanged", null),
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
          let t = VRHTML.GetPose(i.Gz, i.mu.Standing);
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
      (0, n.Cg)([a.o], C.prototype, "onUpdateCameraFrame", null),
        (0, n.Cg)([a.o], C.prototype, "startTest", null),
        (0, n.Cg)([a.o], C.prototype, "stopTest", null),
        (function (e) {
          (e[(e.Off = 0)] = "Off"),
            (e[(e.On2D = 1)] = "On2D"),
            (e[(e.On3D = 2)] = "On3D");
        })(M || (M = {}));
      const T = (0, l.PA)(() => {
        let e = v.HR.settings.get(m.D1),
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
                v.HR.SetSettingsValue(m.D1, e);
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
        let e = v.HR.settings.get(m.ui),
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
            v.HR.SetSettingsValue(m.ui, e);
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
          return v.HR.settings.get(m.xz);
        }
        fetchCameraRate() {
          var e;
          if (!w.c.m_bCameraCompatibilityModes) return 0;
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
            v.HR.SetRestartRequired();
        }
        onCameraEnabled(e) {
          v.HR.SetSettingsValue("/settings/camera/enableCamera", e),
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
          let e = v.HR.settings.get(m.Ni);
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
            n = v.HR.settings.get(m.D1),
            i =
              v.HR.settings.get(
                "/settings/camera/enableCameraForCollisionBounds",
              ) || n != M.Off;
          let a = [
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
            i &&
              c.createElement(_.xS, {
                value: this.currentRoomViewStyle,
                onChange: (e) => v.HR.SetSettingsValue(m.Ni, e),
                label: (0, h.we)("#Settings_Camera_RoomViewStyle"),
                items: a,
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
        (0, n.Cg)([a.o], D.prototype, "onCameraEnabled", null),
        (0, n.Cg)([a.o], D.prototype, "onCameraRateChanged", null),
        (0, n.Cg)([a.o], D.prototype, "onStartCameraTest", null),
        (0, n.Cg)([a.o], D.prototype, "onStopCameraTest", null),
        (0, n.Cg)([o.computed], D.prototype, "currentRoomViewStyle", null),
        (D = (0, n.Cg)([l.PA], D));
      var k = r(2928),
        O = r(5349),
        A = r(1835),
        I = r(8696);
      let B = class extends _.yO {
        constructor(e) {
          super(e);
        }
        render() {
          return this.props.active
            ? c.createElement(
                c.Fragment,
                null,
                !A.SW.isVRGamepadUI &&
                  c.createElement(_.xS, {
                    name: m.md,
                    label: (0, h.we)("#Settings_Dashboard_Position"),
                    items: [
                      { value: O.eo.Near, sLabel: (0, h.we)("#Settings_Near") },
                      {
                        value: O.eo.Middle,
                        sLabel: (0, h.we)("#Settings_Middle"),
                      },
                      { value: O.eo.Far, sLabel: (0, h.we)("#Settings_Far") },
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
                (0, i.R$)() != i.OH.Overlay &&
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
                  name: m.Ju,
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
                  name: m.vo,
                  label: (0, h.we)("#Settings_TheaterScreenSize"),
                  items: [
                    {
                      value: A.Nr.Large,
                      sLabel: (0, h.we)("#Settings_TheaterScreenSize_Large"),
                    },
                    {
                      value: A.Nr.Medium,
                      sLabel: (0, h.we)("#Settings_TheaterScreenSize_Medium"),
                    },
                  ],
                  visibility: _.Z3.Advanced,
                }),
                c.createElement(_.xS, {
                  name: m.xY,
                  label: (0, h.we)("#Settings_TheaterScreenAlignment"),
                  items: [
                    {
                      value: A.tb.PlayArea,
                      sLabel: (0, h.we)(
                        "#Settings_TheaterScreenAlignment_PlayArea",
                      ),
                    },
                    {
                      value: A.tb.Dashboard,
                      sLabel: (0, h.we)(
                        "#Settings_TheaterScreenAlignment_Dashboard",
                      ),
                    },
                  ],
                  visibility: _.Z3.Advanced,
                }),
                c.createElement(_.Al, {
                  name: m.xP,
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
      var H;
      (B.Name = "dashboard_settings"),
        (B = (0, n.Cg)([l.PA], B)),
        (function (e) {
          (e[(e.Disabled = 0)] = "Disabled"),
            (e[(e.Automatic = 1)] = "Automatic"),
            (e[(e.Always = 2)] = "Always");
        })(H || (H = {}));
      let L = class extends c.Component {
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
                i.length > 0 &&
                  i.map((e) =>
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
                a.length > 0 &&
                  a.map((e) =>
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
      (0, n.Cg)([a.o], L.prototype, "isImplicitLayer", null),
        (0, n.Cg)([a.o], L.prototype, "isExplicitLayer", null),
        (0, n.Cg)([a.o], L.prototype, "isImplicitNoModifLayer", null),
        (0, n.Cg)([a.o], L.prototype, "setApiLayerState", null),
        (0, n.Cg)([a.o], L.prototype, "show", null),
        (0, n.Cg)([a.o], L.prototype, "hide", null),
        (L = (0, n.Cg)([l.PA], L));
      let P = class extends _.yO {
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
              c.createElement(L, null),
              this.makeResetToDefaultButton(),
              c.createElement(_.JA, {
                name: m.i8,
                label: (0, h.we)("#Settings_OpenXR_MetaPluginCompatibility"),
                title: (0, h.we)("#Settings_OpenXR_MetaPluginCompatibilityTip"),
                visibility: _.Z3.Advanced,
                items: [
                  {
                    sLabel: (0, h.we)("#Settings_ToggleButton_Off"),
                    value: H.Disabled,
                  },
                  {
                    sLabel: (0, h.we)("#OpenXR_Automatic"),
                    value: H.Automatic,
                  },
                  {
                    sLabel: (0, h.we)("#Settings_ToggleButton_On"),
                    value: H.Always,
                  },
                ],
              }),
            )
          );
        }
      };
      (P.Name = "openxr_settings"),
        (0, n.Cg)([a.o], P.prototype, "OnSetAsOpenXRRuntime", null),
        (P = (0, n.Cg)([l.PA], P));
      const F = (0, l.PA)(function () {
        const [e, t] = c.useState(i.GQ.Medium),
          [r, n] = c.useState(!1),
          [a, s] = c.useState(""),
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
          value: i.GQ.Small,
          sLabel: (0, h.we)("#Advanced_SmallSpace"),
        }),
          l.push({
            value: i.GQ.Medium,
            sLabel: (0, h.we)("#Advanced_MediumSpace"),
          }),
          l.push({
            value: i.GQ.Large,
            sLabel: (0, h.we)("#Advanced_LargeSpace"),
          }),
          l.push({
            value: i.GQ.Gigantic,
            sLabel: (0, h.we)("#Advanced_GiganticSpace"),
          }),
          l.push({
            value: i.GQ.Standing,
            sLabel: (0, h.we)("#Advanced_StandingSpace"),
          });
        const d = (0, h.we)(
          p()
            ? "#Advanced_TrackingRecordingStop"
            : "#Advanced_TrackingRecordingStart",
        );
        function p() {
          return A.SW.m_bTrackingRecording;
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
                    p()
                      ? (VRHTML.VRSystem.StopTrackingRecording(), n(!0))
                      : (VRHTML.VRSystem.StartTrackingRecording(), n(!1));
                  },
                },
                d,
              ),
            ),
          r &&
            !p() &&
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
                a,
                " ",
              ),
            ),
        );
      });
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
      function W() {
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
      function z() {
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
                    c.createElement(N, null),
                    c.createElement("hr", null),
                    c.createElement(x, null),
                    c.createElement("hr", null),
                    c.createElement(W, null),
                  ),
                c.createElement("hr", null),
                c.createElement(U, null),
                VRHTML.VRMonitor.HasVRMonitor() &&
                  c.createElement(
                    c.Fragment,
                    null,
                    c.createElement("hr", null),
                    c.createElement(z, null),
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
            value: new Date(1758046478e3).toLocaleString(),
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
                !A.SW.isVRGamepadUI &&
                  c.createElement(_.xS, {
                    name: m.md,
                    label: (0, h.we)("#Settings_Dashboard_Position"),
                    items: [
                      { value: O.eo.Near, sLabel: (0, h.we)("#Settings_Near") },
                      {
                        value: O.eo.Middle,
                        sLabel: (0, h.we)("#Settings_Middle"),
                      },
                      { value: O.eo.Far, sLabel: (0, h.we)("#Settings_Far") },
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
                  name: m.au,
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
            const i = [];
            return (
              i.push(
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
              i.push(
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
              i.push(
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
                i,
              )
            );
          })(240, 240, 20, s),
          d = Math.max(s > 0 ? 1 : 1 + 5 * s, 0);
        return r
          ? c.createElement(
              i.dL,
              { parent_path: "/user/head" },
              c.createElement(
                i.dL,
                { translation: { y: 0, z: -70 }, rotation: { z: 0 }, scale: a },
                c.createElement(
                  i.Zk,
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
        [a.o],
        $.prototype,
        "onEyeTrackingServerEnabledEventUpdate",
        null,
      ),
        (0, n.Cg)([a.o], $.prototype, "stopEyeTrackingServer", null),
        (0, n.Cg)([a.o], $.prototype, "startEyeTrackingServer", null),
        (0, n.Cg)([a.o], $.prototype, "doEyeTrackingCal", null),
        (0, n.Cg)([a.o], $.prototype, "SetEyeTrackingVisualization", null),
        ($ = (0, n.Cg)([l.PA], $));
      var X = r(2505),
        Z = r.n(X),
        J = r(7600);
      function Q() {
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
      const Y = (0, l.PA)(() =>
          c.createElement(
            _.YO,
            { className: "SettingsItem" },
            c.createElement(_.xS, {
              label: "Auto-Show Dashboard",
              name: m.Bf,
              items: [
                { value: "", sLabel: "Default" },
                b.Sr.Separator,
                { value: m.wi, sLabel: "Steam (VRGamepadUI)" },
                b.Sr.Separator,
                { value: m.Sx, sLabel: "Recent Games (Old Dashboard)" },
                { value: m.dw, sLabel: "Now Playing" },
                b.Sr.Separator,
                { value: m.Xk, sLabel: "Desktop View" },
                { value: m.GO + ".1", sLabel: "Desktop 1" },
                { value: m.GO + ".2", sLabel: "Desktop 2" },
                b.Sr.Separator,
                { value: m.Wt, sLabel: "Settings" },
              ],
            }),
          ),
        ),
        ee = (e) => {
          const [t, r] = c.useState(1),
            [n, i] = c.useState(1),
            [a, s] = c.useState(1),
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
              onChange: i,
            }),
            c.createElement(_.JA, {
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
        te = (e) => {
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
        re = (e) => {
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
        ne = (0, l.PA)(() => {
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
                c.createElement(ee, null),
                c.createElement("hr", null),
                c.createElement(te, null),
                c.createElement("hr", null),
                c.createElement(re, null),
              ),
          );
        });
      function ie(e) {
        return c.createElement(
          c.Fragment,
          null,
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
      function ae(e) {
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
      function se(e) {
        return c.createElement(_.Al, {
          name: m.Ec,
          label: (0, h.we)("#Settings_ControllerOverlayMagnetismEnabled"),
          onSubsection: c.createElement(
            c.Fragment,
            null,
            c.createElement(_.tE, {
              name: m.Pi,
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
              name: m.tZ,
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
      function oe(e) {
        return c.createElement(_.Al, {
          name: m.x_,
          label: (0, h.we)("#Settings_ControllerOverlayFilteringEnabled"),
          onSubsection: c.createElement(
            c.Fragment,
            null,
            c.createElement(_.tE, {
              name: m.R_,
              label: (0, h.we)("#Settings_ControllerOverlayFilteringMinCutoff"),
              min: 0,
              max: 10,
              valueStyleVariant: R.Te.OnHandle,
              detents: [1],
              renderValue: (e) => e.toFixed(2),
            }),
            c.createElement(_.tE, {
              name: m.El,
              label: (0, h.we)("#Settings_ControllerOverlayFilteringBeta"),
              min: 0,
              max: 10,
              valueStyleVariant: R.Te.OnHandle,
              detents: [5],
              renderValue: (e) => e.toFixed(2),
            }),
            c.createElement(_.tE, {
              name: m.$Z,
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
      function le() {
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
      function ce() {
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
            c.createElement(J.cb, {
              errorStr: "Test Error in settings_internal render component",
            }),
        );
      }
      let ue = class extends _.yO {
        constructor(e) {
          super(e),
            (this.m_mailbox = new i._n()),
            (this.m_softApStatus = ""),
            (this.m_softApSSID = ""),
            (this.m_softApPassword = ""),
            this.m_mailbox.Init("internal_settings"),
            this.m_mailbox.RegisterHandler(
              "sap_status_update",
              this.onSapStatusUpdate,
            );
        }
        configSoftAP(e) {
          let t = { type: "configure_softap", enabled: e };
          this.m_mailbox.SendMessage(i.sk, t);
        }
        onSapStatusUpdate(e) {
          try {
            const t = JSON.parse(e.sOutput);
            (this.m_softApStatus = t.status.text),
              (this.m_softApSSID = t.status.ssid),
              (this.m_softApPassword = t.status.password);
          } catch (e) {
            this.m_softApStatus = `Error: ${e.message}`;
          }
          this.forceUpdate();
        }
        render() {
          if (!this.props.active) return null;
          (0, i.R$)(), i.OH.Overlay;
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
            !1,
            !1,
            !1,
            !1,
            !1,
            !1,
            !1,
            this.schemaComponents,
            !1,
            !1,
            !1,
            c.createElement(ae, null),
            c.createElement(se, null),
            c.createElement(oe, null),
            c.createElement("hr", null),
            c.createElement(le, null),
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
            c.createElement(Y, null),
            c.createElement(ce, null),
            c.createElement(Q, null),
            c.createElement(ne, null),
            this.makeResetToDefaultButton(),
          );
        }
      };
      (ue.Name = "internal_settings"),
        (0, n.Cg)([a.o], ue.prototype, "configSoftAP", null),
        (0, n.Cg)([a.o], ue.prototype, "onSapStatusUpdate", null),
        (ue = (0, n.Cg)([l.PA], ue));
      var de = r(9118);
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
                  subheader: de.W.IsSteamAvailable
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
      (0, n.Cg)([a.o], pe.prototype, "updateUGCItems", null),
        (0, n.Cg)([a.o], pe.prototype, "setBackground", null),
        (0, n.Cg)([a.o], pe.prototype, "hideModal", null),
        (0, n.Cg)([a.o], pe.prototype, "showModal", null),
        (0, n.Cg)([o.computed], pe.prototype, "currentBackgroundPath", null),
        (pe = (0, n.Cg)([l.PA], pe));
      class me extends c.Component {
        constructor() {
          super(...arguments),
            (this.m_sUniqueIdForForceBoundsVisible = Math.random().toString());
        }
        componentDidMount() {
          v.HR.SetDashboardForceBoundsVisible(
            m.Wt,
            this.m_sUniqueIdForForceBoundsVisible,
            !0,
          );
        }
        componentWillUnmount() {
          v.HR.SetDashboardForceBoundsVisible(
            m.Wt,
            this.m_sUniqueIdForForceBoundsVisible,
            !1,
          );
        }
        render() {
          return null;
        }
      }
      function he() {
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
      let ge = class extends _.yO {
        constructor(e) {
          super(e);
        }
        render() {
          var e;
          if (!this.props.active) return null;
          const t = v.HR.settings.get("/settings/steamvr/background"),
            r = !!t && !t.startsWith("#"),
            n =
              null !== (e = v.HR.settings.get(m.Vv)) && void 0 !== e ? e : 0.7;
          let i;
          return (
            (i =
              n < 0.5
                ? (0, h.we)("#Settings_Chaperone_SuitableForSmall")
                : n < 1
                  ? (0, h.we)("#Settings_Chaperone_SuitableForMedium")
                  : (0, h.we)("#Settings_Chaperone_SuitableForLarge")),
            c.createElement(
              c.Fragment,
              null,
              c.createElement(me, null),
              c.createElement(he, null),
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
                    name: m.Vv,
                    label: (0, h.we)("#Settings_Chaperone_ActivationDistance"),
                    renderValue: (e) => e.toFixed(2),
                    valueStyleVariant: R.Te.OnHandle,
                  }),
                  c.createElement(
                    "div",
                    { className: "SettingsItemValueLabel" },
                    i,
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
                      name: m.aD,
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
                      name: m.WS,
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
                          onClick: () => v.HR.ResetSettingsValues(m.aD, m.WS),
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
      var ve;
      (ge.Name = "playarea_settings"), (ge = (0, n.Cg)([l.PA], ge));
      class _e {
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
          return _e.driverPrettyNames[e] || e;
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
      (_e.driverPrettyNames = {
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
        (0, n.Cg)([o.observable], _e.prototype, "driverList", void 0),
        (0, n.Cg)([o.computed], _e.prototype, "visibleDriverList", null),
        (0, n.Cg)([o.computed], _e.prototype, "numBlockedDrivers", null),
        (0, n.Cg)([o.computed], _e.prototype, "numDisabledDrivers", null),
        (0, n.Cg)(
          [o.computed],
          _e.prototype,
          "numUserManuallyDisenabledDrivers",
          null,
        );
      const be = new _e(),
        Se = (0, l.PA)(() =>
          c.createElement(
            u.$,
            {
              className: "ButtonControl",
              title: (0, h.we)("#Settings_Drivers_UnblockAllTip"),
              onClick: () =>
                (0, n.sH)(void 0, void 0, void 0, function* () {
                  const e = be.driverList
                    .filter((e) => e.blocked_by_safe_mode)
                    .map((e) => e.manifest.name);
                  for (let t = 0; t < e.length; ++t) yield be.unBlock(e[t]);
                }),
            },
            (0, h.we)("#Settings_Drivers_UnblockAll"),
          ),
        );
      function ye(e) {
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
      const fe = (0, l.PA)(() =>
        c.createElement(
          c.Fragment,
          null,
          be.visibleDriverList.map((e) =>
            c.createElement(ye, {
              key: e.manifest.name,
              label: be.prettyName(e.manifest.name),
              title: e.manifest.name,
              blocked: e.blocked_by_safe_mode,
              enabled: e.enabled,
              onToggleEnable: (t) => {
                return (r = e.manifest.name), (n = t), void be.setEnabled(r, n);
                var r, n;
              },
              onUnblock: () => {
                return (t = e.manifest.name), void be.unBlock(t);
                var t;
              },
            }),
          ),
        ),
      );
      let Re = (ve = class extends c.Component {
        constructor(e) {
          super(e);
        }
        render() {
          const e = be.numBlockedDrivers,
            t = be.numDisabledDrivers,
            r =
              v.HR.showAdvancedSettings ||
              e ||
              be.numUserManuallyDisenabledDrivers,
            n = v.HR.routePageSection == ve.PAGE_SECTION;
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
                    onClick: () => v.HR.setRoutePageSection(ve.PAGE_SECTION),
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
              be.driverList &&
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
                          c.createElement(Se, null),
                        ),
                  onDismissRequested: () => v.HR.setRoutePageSection(null),
                },
                c.createElement(fe, null),
              ),
          );
        }
      });
      (Re.PAGE_SECTION = "drivermanager"), (Re = ve = (0, n.Cg)([l.PA], Re));
      let we = class extends c.Component {
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
                    e.is_dashboard_overlay && e.key != m.Eo && !e.is_internal,
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
      (0, n.Cg)([a.o], we.prototype, "show", null),
        (0, n.Cg)([a.o], we.prototype, "hide", null),
        (we = (0, n.Cg)([l.PA], we));
      let Ce = class extends _.yO {
        constructor(e) {
          super(e);
        }
        render() {
          return this.props.active
            ? c.createElement(
                c.Fragment,
                null,
                c.createElement(we, null),
                c.createElement(Re, null),
                c.createElement("hr", null),
                this.schemaComponents,
                this.makeResetToDefaultButton(),
              )
            : null;
        }
      };
      (Ce.Name = "startupshutdown_settings"), (Ce = (0, n.Cg)([l.PA], Ce));
      var Me,
        Te = r(4963),
        Ee = r(795);
      const Ve = "vr_settings_top_center";
      class De extends c.Component {
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
                : (null === i.Ay || void 0 === i.Ay ? void 0 : i.Ay.HasHMD()) ||
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
                    i.dL,
                    { parent_id: Ve, translation: { y: 0.2, z: -0.05 } },
                    c.createElement(
                      i.Zk,
                      {
                        debug_name: "settingsrestartbanner",
                        curvature_origin_id: m.ge,
                        origin: i.Oi.BottomCenter,
                        interactive: !0,
                        meters_per_pixel: m.iZ,
                        reflect: 0.1,
                      },
                      e,
                    ),
                  )
              : e
          );
        }
      }
      (0, n.Cg)([a.o], De.prototype, "onExitApp", null),
        (0, n.Cg)([a.o], De.prototype, "onRestartSteamVR", null),
        (0, n.Cg)([a.o], De.prototype, "onRestartRequired", null),
        (0, n.Cg)([a.o], De.prototype, "onAppRestartRequired", null);
      let ke = (Me = class extends c.Component {
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
                  v.HR.settingsSchema.filter(Me.shouldShowSection)[0]
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
                    Ee.P9,
                    { summonOverlayKey: m.Wt, ref: this.props.pageRef },
                    t && c.createElement(De, { standalonePanel: !0 }),
                    t &&
                      c.createElement(
                        s.L_,
                        {
                          visible: !0,
                          debugName: "settings",
                          additionalClassNames: "Settings",
                        },
                        c.createElement(i.Ci, {
                          id: Ve,
                          location: i.Oi.TopCenter,
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
          const e = v.HR.settingsSchema.filter(Me.shouldShowSection);
          return c.createElement(
            u.W,
            { className: "SettingsMainPanel" },
            c.createElement(De, { standalonePanel: !1 }),
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
                  p.M,
                  {
                    scrollDirection: p.D.Vertical,
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
                releaseSoundEffect: Te.j.PagedSettingsNavigation,
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
              [S, Ce, ge, q.a5, D, j, B, P, G, ue, k.$].find(
                (e) => e.Name === t,
              ) || _.yO;
          return c.createElement(n, { key: e.title, section: e, active: r });
        }
        static shouldShowSection(e) {
          if (
            e.internal_only &&
            !v.HR.showInternalSettings &&
            !v.HR.settings.get(Me.k_sShowInternalSettings)
          )
            return !1;
          if (
            e.controller == P.Name &&
            (0, i.R$)() == i.OH.Overlay &&
            !v.HR.settings.get(Me.k_sForceShowOpenXRSettings)
          )
            return !1;
          if (
            !e.show_without_hmd &&
            !(null === i.Ay || void 0 === i.Ay ? void 0 : i.Ay.HasHMD())
          )
            return !1;
          if (
            !e.show_without_hmd &&
            e.driver &&
            e.driver !==
              i.Ay.VRProperties.GetStringProperty(
                "/user/head",
                i.fD.ActualTrackingSystemName_String,
              )
          )
            return !1;
          if (e.desktop_only && (0, i.R$)() == i.OH.Overlay) return !1;
          let t =
            e.controller == B.Name &&
            v.HR.settings.get(Me.k_sShowDashboardSettings);
          if (e.advanced_only && !v.HR.showAdvancedSettings && !t) return !1;
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
          if (e.controller == S.Name) {
            if (!(v.HR.systemInfo && v.HR.systemInfo.os_type >= 0)) return !1;
          }
          return !(!i.Ay && e.web_helper_only);
        }
        ListenForHomeEnabledChanges() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            if ((0, i.R$)() != i.OH.Overlay) return;
            let e = yield v.HR.GetSettingsValue(m.qf);
            i.Ay &&
              (0, o.autorun)(() => {
                let t = v.HR.settings.get(m.qf);
                void 0 !== t &&
                  t != e &&
                  (t && !i.Ay.VRApplications.GetSceneApplicationKey()
                    ? i.Ay.VRApplications.LaunchApplication(m.np)
                    : t ||
                      i.Ay.VRApplications.GetSceneApplicationKey() != m.np ||
                      i.Ay.QuitSceneApp(),
                  (e = t));
              });
          });
        }
      });
      (ke.k_sForceShowOpenXRSettings =
        "/settings/steamvr/forceShowOpenXRSettings"),
        (ke.k_sShowInternalSettings = "/settings/steamvr/showInternalSettings"),
        (ke.k_sShowDashboardSettings =
          "/settings/steamvr/showDashboardSettings"),
        (0, n.Cg)([a.o], ke.prototype, "renderSectionButton", null),
        (0, n.Cg)([a.o], ke.prototype, "renderSectionPage", null),
        (ke = Me = (0, n.Cg)([l.PA], ke));
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
        c = r(427),
        u = r(6138),
        d = r(6090),
        p = r(9118),
        m = r(5802),
        h = r(7813),
        g = r(6646),
        v = r(1139);
      let _ = class extends i.Component {
        constructor(e) {
          super(e), (this.state = { deviceStatus: null });
        }
        get trackerConfig() {
          return m.B$.GetTrackerBinding(this.props.trackerPath);
        }
        OnTrackerRoleChanged(e) {
          m.B$.SetTrackerBinding(
            this.props.trackerPath,
            e,
            this.trackerConfig.controller_role,
          );
        }
        OnControllerRoleChanged(e) {
          m.B$.SetTrackerBinding(
            this.props.trackerPath,
            this.trackerConfig.role,
            e,
          );
        }
        BuzzTracker() {
          m.B$.PulseHaptics(this.trackerConfig.device_path_handle);
        }
        get deviceInfo() {
          return p.W.GetDeviceInfo(this.props.trackerPath);
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
            () => p.W.GetInputState(),
            2e3,
          )),
            p.W.GetInputState();
        }
        componentWillUnmount() {
          window.clearInterval(this.m_nGetInputStateIntervalHandle);
        }
        render() {
          let e,
            t = m.B$.TrackerBindings;
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
            (this.m_deviceDetails = p.W.GetDeviceInfo(this.props.devicePath)),
            (this.m_controllerType = p.W.GetControllerTypeInfo(
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
              o = new m.bR(0, i.top + i.height / 2);
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
                  p.W.LocalizeControllerString(
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
      class D extends i.Component {
        constructor(e) {
          super(e),
            (this.m_imageRef = i.createRef()),
            (this.state = { imageScale: this.GetPointScale() });
        }
        get ControllerTypeInfo() {
          let e = p.W.GetDeviceInfo(this.props.devicePath);
          return p.W.GetControllerTypeInfo(e.controller_type);
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
            case "trigger":
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
            case "joystick":
            case "trackpad":
              return i.createElement(V, {
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
      (0, n.Cg)([a.o], D.prototype, "OnImageLoaded", null),
        (0, n.Cg)([a.o], D.prototype, "OnImageReflow", null);
      let k = class extends i.Component {
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
                  p.W,
                  "ConnectedDevices",
                  this.OnConnectedDevicesChanged,
                )),
                this.SetDefaultDeviceIfNecessary();
            }),
            (this.state = { devicePath: null });
        }
        componentWillUnmount() {
          this.m_observeDisposer && this.m_observeDisposer();
          for (let e of p.W.ConnectedDevices) {
            let t = {
              type: "cancel_input_state_updates",
              device_path: e.root_path,
              returnAddress: this.m_mailbox.name,
            };
            this.m_mailbox.SendMessage(d.mX, t);
          }
        }
        UpdateDeviceInputStateSubscriptions() {
          for (let e of p.W.ConnectedDevices) {
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
          return p.W.ConnectedDevices.sort(
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
              i.createElement(D, {
                devicePath: this.state.devicePath,
                serialNumber: e,
                visualizer: this,
              }),
          );
        }
      };
      (0, n.Cg)([a.o], k.prototype, "OnConnectedDevicesChanged", null),
        (0, n.Cg)([a.o], k.prototype, "OnUpdateComponentStates", null),
        (k = (0, n.Cg)([s.PA], k));
      var O,
        A,
        I = r(917);
      const B = (0, s.PA)(() => {
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
        H = (0, s.PA)(() => {
          const e = "debuglegacyinput";
          if (!p.W.BDevMode) return null;
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
        L = (0, s.PA)(() => {
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
              i.createElement(k, {
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
        if (!p.W.BDevMode) return null;
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
      let N = (O = class extends i.Component {
        constructor(e) {
          super(e),
            (this.state = { bShowingModal: !1, sDeviceToCalibrate: null });
        }
        resetToDefaults() {
          O.devices.forEach((e) => {
            this.updateCalibration(e.sDevicePath, 0);
          });
        }
        closeCalibrator() {
          this.setState({ sDeviceToCalibrate: null });
        }
        updateCalibration(e, t) {
          this.closeCalibrator(),
            O.devices.some(
              (r) =>
                r.sDevicePath == e &&
                (l.HR.SetSettingsValue(this.getThumbstickRotationSetting(e), t),
                !0),
            );
        }
        getThumbstickRotationSetting(e) {
          let t = null;
          return (
            O.devices.some((r) => {
              if (r.sDevicePath == e) {
                const n = p.W.GetDeviceInfo(e);
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
          const t = p.W.GetDeviceInfo(e);
          if (!t) return !1;
          const r = p.W.GetControllerTypeInfo(t.controller_type);
          if (!r) return !1;
          for (let e in r.input_source)
            if ("joystick" == r.input_source[e].type) return !0;
          return !1;
        }
        showCalibration(e) {
          this.setState({ sDeviceToCalibrate: e });
        }
        GetThumbstickDeadzoneSetting() {
          let e = p.W.GetDeviceInfo("/user/hand/left");
          return (
            e || (e = p.W.GetDeviceInfo("/user/hand/right")),
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
                  O.devices.map((e) => {
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
        (N = O = (0, n.Cg)([s.PA], N));
      let x = (A = class extends i.Component {
        constructor(e) {
          super(e),
            (this.m_mailbox = new d._n()),
            (this.m_routeObservingAutorunDisposer = null),
            (this.m_refAppSelectDropdown = i.createRef()),
            (this.state = {
              currentBindingApp: null,
              currentControllerType: m.B$.GetBestControllerType(),
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
            currentControllerType: m.B$.GetBestControllerType(),
          }),
            (this.m_bindingSubscriptionChangedCanaryDisposer = (0, h.observe)(
              m.B$,
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
            let t = yield (0, m.xM)(e);
            if (t.error) throw new Error(t.error);
            return t;
          });
        }
        loadBindingConfig(e, t) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            return (yield (0, m.mQ)(
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
            const t = (
              e
                ? this.state.currentActionManifest.previous_binding_url
                : this.state.currentActionManifest.best_binding_url
            )[this.state.currentControllerType.controller_type];
            if (!t)
              return (
                console.log("No previous url to go back to."),
                void this.setState({ bForceToggleToCustom: !0 })
              );
            yield m.B$.SelectConfig(
              this.state.currentBindingApp.key,
              this.state.currentControllerType.controller_type,
              t,
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
          var e, t, r, n, a, s, l, m, h, g, v, _, b, S, y, f, R, w;
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
          const T =
              null ===
                (h =
                  null === (m = this.state.currentBinding) || void 0 === m
                    ? void 0
                    : m.options) || void 0 === h
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
            k =
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
            O =
              (this.state.bForceToggleToCustom || !M || M != C) &&
              !(D && k && !this.state.bForceToggleToCustom),
            A =
              (null === (R = this.state.currentActionManifest) || void 0 === R
                ? void 0
                : R.supports_dominant_hand_setting) &&
              null != this.state.eDominantHand,
            I =
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
                  subheader: p.W.IsSteamAvailable
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
                      p.W.LocalizeDriverString(
                        this.state.currentControllerType.resource_root,
                        this.state.currentControllerType.controller_type,
                      ),
                    ),
                  ),
                D &&
                  i.createElement(
                    "span",
                    { className: "RemappedInfoSpan" },
                    i.createElement("img", {
                      className: "InformationButtonImage",
                      src: "images/bindingui/icon_information.svg",
                    }),
                    (0, o.we)("#BindingUI_Compatibility_Remapped_Text"),
                  ),
                !p.W.IsSteamAvailable &&
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
                p.W.IsSteamAvailable &&
                  i.createElement(c.Al, {
                    label: (0, o.we)("#Settings_ActiveControllerBinding"),
                    offLabel: (0, o.we)("#Settings_Controller_DefaultBinding"),
                    onLabel: (0, o.we)("#Settings_Controller_CustomBinding"),
                    onChange: this.onToggleDefaultCustomBinding,
                    value: O,
                    onSubsection: i.createElement(
                      i.Fragment,
                      null,
                      (!C || !this.state.currentBinding) &&
                        i.createElement(
                          "div",
                          { className: "SettingsItem Label" },
                          (0, o.we)("#Settings_Loading_CurrentBinding"),
                        ),
                      O &&
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
                              enabled: p.W.IsSteamAvailable && Boolean(C),
                              onClick: this.showBindingDetail.bind(this, !0),
                            },
                            (0, o.we)("#Settings_EditBinding"),
                          ),
                          i.createElement(
                            c.CS,
                            {
                              icon: c.Xb.PopOut,
                              enabled: p.W.IsSteamAvailable,
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
                    value: I,
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
            let p = i.createElement(
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
            n.push(p);
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
            i.createElement(L, null),
            i.createElement(B, null),
            i.createElement(H, null),
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
    427: (e, t, r) => {
      "use strict";
      r.d(t, {
        mi: () => q,
        yO: () => O,
        YO: () => D,
        Z3: () => i,
        CS: () => X,
        Xb: () => $,
        RM: () => G,
        xS: () => L,
        WZ: () => I,
        bB: () => j,
        tR: () => K,
        ym: () => P,
        JA: () => B,
        tE: () => F,
        Al: () => H,
        u4: () => W,
        Pw: () => x,
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
        p = r(6090),
        m = r(4963),
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
        const [n, i] = s.useState(() => {
          try {
            return t(e);
          } catch (e) {
            return;
          }
        });
        return s.useEffect(() => (e ? r(e, i).unregister : void 0), [i, e]), n;
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
        const i = M(e.detent),
          a = {
            name: e.name,
            min: null !== (t = e.min) && void 0 !== t ? t : 0,
            max: null !== (r = e.max) && void 0 !== r ? r : 100,
            step: null !== (n = e.step) && void 0 !== n ? n : 5,
            detents: void 0 !== i ? [i] : void 0,
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
            a,
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
      })(i || (i = {}));
      let D = class extends s.Component {
        constructor(e) {
          super(e);
        }
        render() {
          let e = Object.assign({}, this.props);
          delete e.label, delete e.subsection, delete e.visibility;
          let t = this.props.visibility == i.Advanced;
          switch (this.props.visibility) {
            case i.Desktop:
              t = (0, p.R$)() != p.OH.Desktop;
              break;
            case i.VR:
              t = (0, p.R$)() != p.OH.Overlay;
          }
          return t && !d.HR.showAdvancedSettings
            ? null
            : (this.props.visibility == i.Advanced &&
                (e.className = (0, g.FH)(e.className, "Advanced")),
              s.createElement("div", e, this.props.children));
        }
      };
      D = (0, a.Cg)([u.PA], D);
      const k = (0, u.PA)(function (e) {
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
            r = s.createElement(A, {
              key: t.name,
              name: t.name,
              label: t.label ? (0, l.we)(t.label) : "",
              title: t.text ? (0, l.we)(t.text) : "",
            });
            break;
          case "toggle":
            r = s.createElement(H, {
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
            r = s.createElement(L, {
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
      class O extends s.Component {
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
              e.push(s.createElement(k, { key: t.name, settingValue: t }));
          return e;
        }
        GetComponentsForGroup(e) {
          let t = [];
          for (let r of this.props.section.values)
            r.control &&
              r.group == e &&
              t.push(s.createElement(k, { key: r.name, settingValue: r }));
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
      (0, a.Cg)([o.o], O.prototype, "ResetToDefaults", null),
        (0, a.Cg)([c.computed], O.prototype, "schemaComponents", null);
      let A = class extends s.Component {
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
            m.u.Instance.playSound(m.j.ButtonClick);
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
      (0, a.Cg)([o.o], A.prototype, "handleChange", null),
        (A = (0, a.Cg)([u.PA], A));
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
      (0, a.Cg)([o.o], I.prototype, "handleChange", null),
        (I = (0, a.Cg)([u.PA], I));
      let B = class extends s.Component {
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
            (0, p.R$)() == p.OH.Overlay &&
              (h.W.temporarilySuppressSoundEffect(),
              m.u.Instance.playSound(m.j.ButtonClick)),
            this.props.requiresRestart && d.HR.SetRestartRequired();
        }
        onGroupMouseEnter() {
          2 == this.props.items.length &&
            (0, p.R$)() == p.OH.Overlay &&
            _.W.Instance.triggerHaptic(p.en.ButtonEnter);
        }
        onGroupMouseLeave() {
          2 == this.props.items.length &&
            (0, p.R$)() == p.OH.Overlay &&
            _.W.Instance.triggerHaptic(p.en.ButtonLeave);
        }
        onOptionMouseEnter() {
          2 != this.props.items.length &&
            (0, p.R$)() == p.OH.Overlay &&
            _.W.Instance.triggerHaptic(p.en.ButtonEnter);
        }
        onOptionMouseLeave() {
          2 != this.props.items.length &&
            (0, p.R$)() == p.OH.Overlay &&
            _.W.Instance.triggerHaptic(p.en.ButtonLeave);
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
      (0, a.Cg)([o.o], B.prototype, "onGroupMouseEnter", null),
        (0, a.Cg)([o.o], B.prototype, "onGroupMouseLeave", null),
        (0, a.Cg)([o.o], B.prototype, "onOptionMouseEnter", null),
        (0, a.Cg)([o.o], B.prototype, "onOptionMouseLeave", null),
        (B = (0, a.Cg)([u.PA], B));
      let H = class extends s.Component {
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
          return s.createElement(B, {
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
      H = (0, a.Cg)([u.PA], H);
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
      (0, a.Cg)([c.computed], L.prototype, "value", null),
        (0, a.Cg)([o.o], L.prototype, "onChange", null),
        (L = (0, a.Cg)([u.PA], L));
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
      (0, a.Cg)([c.computed], P.prototype, "value", null),
        (0, a.Cg)([o.o], P.prototype, "onChange", null),
        (P = (0, a.Cg)([u.PA], P));
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
      function N(e) {
        return (
          "#" +
          ("0" + Math.floor(e.r).toString(16)).slice(-2) +
          ("0" + Math.floor(e.g).toString(16)).slice(-2) +
          ("0" + Math.floor(e.b).toString(16)).slice(-2) +
          ("0" + Math.floor(255 * e.a).toString(16)).slice(-2)
        ).toUpperCase();
      }
      (0, a.Cg)([o.o], F.prototype, "onInteractionStart", null),
        (0, a.Cg)([o.o], F.prototype, "onInteractionEnd", null),
        (0, a.Cg)([c.computed], F.prototype, "value", null),
        (0, a.Cg)([o.o], F.prototype, "onChange", null),
        (F = (0, a.Cg)([u.PA], F));
      let x = (n = class extends s.Component {
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
          return s.createElement(F, {
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
      (x.WHITE_SIZE_PERCENT = 0.03),
        (0, a.Cg)([o.o], x.prototype, "onSliderChanged", null),
        (x = n = (0, a.Cg)([u.PA], x));
      let W = class extends s.Component {
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
      (0, a.Cg)([c.computed], W.prototype, "value", null),
        (0, a.Cg)([o.o], W.prototype, "onSliderChanged", null),
        (W = (0, a.Cg)([u.PA], W));
      let z,
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
            this.props.name && d.HR.SetSettingsValue(this.props.name, N(r)),
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
            this.props.name && d.HR.SetSettingsValue(this.props.name, N(t)),
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
                  s.createElement(x, {
                    label: (0, l.we)("#Settings_Chaperone_BoundsColor"),
                    onChange: this.onColorChange,
                    value: e,
                  }),
                  s.createElement(W, {
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
      (0, a.Cg)([c.computed], G.prototype, "value", null),
        (0, a.Cg)([c.computed], G.prototype, "alphaScale", null),
        (0, a.Cg)([o.o], G.prototype, "onAlphaChange", null),
        (0, a.Cg)([c.computed], G.prototype, "minA", null),
        (0, a.Cg)([c.computed], G.prototype, "maxA", null),
        (0, a.Cg)([o.o], G.prototype, "onColorChange", null),
        (0, a.Cg)([o.o], G.prototype, "showModal", null),
        (0, a.Cg)([o.o], G.prototype, "hideModal", null),
        (G = (0, a.Cg)([u.PA], G));
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
      (0, a.Cg)([c.observable], U.prototype, "runningAppKey", void 0),
        (0, a.Cg)([o.o], U.prototype, "onSceneApplicationStateChanged", null);
      class q extends s.Component {
        constructor(e) {
          z || (z = new U()), super(e), (this.state = { currentApp: null });
        }
        componentDidMount() {
          z.register(this.props.stateKey, this.onSceneApplicationStateChanged);
        }
        componentWillUnmount() {
          z.unregister(this.props.stateKey);
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
              e.value == z.runningAppKey ||
              "openvr.component.vrcompositor" == e.value,
            n = e.filter(r),
            i = e.filter((e) => !r(e));
          return (
            n.sort((e, t) =>
              e.value == z.runningAppKey
                ? -1
                : t.value == z.runningAppKey
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
          z.setAppKey(this.props.stateKey, e), this.setCurrentApp(e);
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
      (0, a.Cg)([o.o], q.prototype, "onSceneApplicationStateChanged", null),
        (0, a.Cg)([o.o], q.prototype, "onControllerDropdownChanged", null);
      const j = (e) => {
          let t = Object.assign({}, e),
            r = t.header;
          "string" == typeof r && (r = s.createElement("h1", null, r));
          let n = t.subheader;
          "string" == typeof n &&
            (n = s.createElement("div", { className: "Label" }, n));
          let i = t.footer;
          void 0 === i &&
            (i = s.createElement(K, {
              onDismissRequested: t.onDismissRequested,
            }));
          const a = t.allowableParentSelectors || [];
          return (
            p.O5.IsSceneGraphApp ||
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
      const X = (e) => {
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
        Pj: () => M,
        xR: () => I,
        a5: () => B,
        y: () => S,
        rO: () => w,
        zU: () => V,
        EM: () => E,
      });
      var n = r(1635),
        i = r(6540),
        a = r(7813),
        s = r(3236),
        o = r(3714),
        l = r(1333),
        c = r(427),
        u = r(6138),
        d = r(6090),
        p = r(1370),
        m = r(1139),
        h = r(3606),
        g = r(4493),
        v = r(917);
      var _;
      function b() {
        VRHTML
          ? VRHTML.VRMonitor.SetDirectModeEnabled(!0, !0)
          : window.open("vrmonitor://directmode/enable");
      }
      const S = (0, p.PA)(() => {
          if (
            !l.HR.systemInfo ||
            0 == l.HR.systemInfo.refresh_rates.actual_display_frequency
          )
            return null;
          if (l.HR.systemInfo.refresh_rates.supported_rates.length > 1)
            return i.createElement(c.ym, {
              name: "/settings/steamvr/preferredRefreshRate",
              comparator: (e, t) => Math.round(e) == Math.round(t),
              label: (0, o.we)("#Settings_Video_RefreshRate_Label_Hz"),
              items: l.HR.systemInfo.refresh_rates.supported_rates.map((e) => ({
                value: e,
                sLabel: Math.round(e).toString(),
              })),
            });
          {
            const e = l.HR.systemInfo.refresh_rates.supports_multiple_rates,
              t = l.HR.systemInfo.extended_mode,
              r = Math.round(
                l.HR.systemInfo.refresh_rates.actual_display_frequency,
              );
            return i.createElement(
              c.YO,
              {
                className: "SettingsItem",
                title: e
                  ? null
                  : (0, o.we)("#Settings_Video_RefreshRate_OneSupported"),
              },
              i.createElement(
                "div",
                { className: "Label" },
                (0, o.we)("#Settings_Video_RefreshRate_Header"),
              ),
              i.createElement(
                "div",
                { className: (0, m.FH)("Label", ["SubsectionStem", e]) },
                r + (0, o.we)("#Settings_Video_RefreshRate_HzSuffix"),
              ),
              e &&
                i.createElement(
                  "div",
                  { className: "Subsection WithStem" },
                  t &&
                    (0, o.we)(
                      "#Settings_Video_RefreshRate_NotAvailableExtended",
                    ),
                  t &&
                    (0, d.R$)() != d.OH.Overlay &&
                    i.createElement(
                      u.$,
                      { className: "ButtonControl", onClick: b },
                      (0, o.we)(
                        "#Settings_Video_RefreshRate_EnableDirectModeAction",
                      ),
                    ),
                  !t && (0, o.we)("#Settings_Video_RefreshRate_NotFound"),
                ),
            );
          }
        }),
        y = 3240,
        f = () => {
          const [e, t] = i.useState(!1),
            r = (0, o.we)(
              "#Settings_Advanced_Supersampling_WidthByHeight",
              y,
              y,
            );
          return i.createElement(
            i.Fragment,
            null,
            e &&
              i.createElement(
                c.bB,
                {
                  className: "MaxRecommendedResolutionRecovery",
                  footer: i.createElement(
                    u.$,
                    {
                      key: "close",
                      className: "ButtonControl",
                      onClick: () => t(!1),
                    },
                    (0, o.we)("#Settings_General_Cancel"),
                  ),
                  onDismissRequested: () => t(!1),
                },
                i.createElement(
                  "div",
                  { className: "Description" },
                  (0, o.we)(
                    "#Settings_Video_MaxRecommendedResolutionRecoveryStatement",
                    r,
                  ),
                ),
                i.createElement(
                  "div",
                  { className: "Description" },
                  (0, o.we)(
                    "#Settings_Video_MaxRecommendedResolutionRecoveryExplanation",
                    r,
                  ),
                ),
                i.createElement(
                  u.$,
                  {
                    className: "ButtonControl",
                    title: (0, o.we)(
                      "#Settings_Video_MaxRecommendedResolutionRecoveryActionAutoTip",
                    ),
                    onClick: () =>
                      (0, n.sH)(void 0, void 0, void 0, function* () {
                        l.HR.ResetAllAppResolutionScales().then(() => {
                          l.HR.ResetSettingsValue(h.wt),
                            l.HR.ResetSettingsValue(h.w5),
                            l.HR.ResetSettingsValue(h.rG);
                        });
                      }),
                  },
                  (0, o.we)(
                    "#Settings_Video_MaxRecommendedResolutionRecoveryActionAuto",
                  ),
                ),
                i.createElement(
                  u.$,
                  {
                    className: "ButtonControl",
                    title: (0, o.we)(
                      "#Settings_Video_MaxRecommendedResolutionRecoveryActionRemoveTip",
                    ),
                    onClick: () => {
                      l.HR.ResetSettingsValue(h.rG);
                    },
                  },
                  (0, o.we)(
                    "#Settings_Video_MaxRecommendedResolutionRecoveryActionRemove",
                  ),
                ),
              ),
            i.createElement(
              "div",
              { className: "Label" },
              (0, o.we)(
                "#Settings_Video_MaxRecommendedResolutionRecoveryText",
                r,
              ),
            ),
            i.createElement(
              u.$,
              {
                className: "ButtonControl",
                title: (0, o.we)(
                  "#Settings_Video_MaxRecommendedResolutionRecoveryTip",
                ),
                onClick: () => t(!0),
              },
              (0, o.we)("#Settings_Video_MaxRecommendedResolutionRecovery"),
            ),
          );
        },
        R = (0, p.PA)(
          () => l.HR.settings.get(h.rG) == y && i.createElement(f, null),
        ),
        w = (0, p.PA)(() => {
          const e = l.HR.settings.get(h.wt),
            t = l.HR.settings.get(h.w5);
          let r = [],
            n = l.HR.settings.get(h.j5);
          if ((n > 0 ? r.push(n) : r.push(1), null === e || null === t))
            return null;
          let a = null;
          if (
            l.HR.systemInfo &&
            null != l.HR.systemInfo.render_target_size.width &&
            0 != l.HR.systemInfo.render_target_size.height
          ) {
            const e = l.HR.SliderposToSupersample(t);
            let r = Math.max(
                512,
                Math.floor(
                  l.HR.systemInfo.render_target_size.width * Math.sqrt(e) + 0.5,
                ),
              ),
              n = Math.max(
                512,
                Math.floor(
                  l.HR.systemInfo.render_target_size.height * Math.sqrt(e) +
                    0.5,
                ),
              );
            const i = l.HR.settings.get(h.rG);
            Math.max(r, n) > i &&
              (r > n
                ? ((n = (i * n) / r), (r = i))
                : ((r = (i * r) / n), (n = i))),
              (r = 4 * Math.trunc(r / 4)),
              (n = 4 * Math.trunc(n / 4)),
              (a = (0, o.we)(
                "#Settings_Advanced_Supersampling_WidthByHeight",
                r,
                n,
              ));
          }
          return i.createElement(c.Al, {
            name: h.wt,
            label: (0, o.we)("#Settings_Advanced_Supersampling_Header"),
            onLabel: (0, o.we)("#Settings_Advanced_Supersampling_Auto"),
            offLabel: (0, o.we)("#Settings_Advanced_Supersampling_Custom"),
            title: e ? "" : (0, o.we)("#Explanation_Supersampling_Header"),
            swapOnOff: !0,
            offSubsection: i.createElement(
              i.Fragment,
              null,
              i.createElement(
                c.YO,
                { className: "SettingsItem" },
                i.createElement(
                  "div",
                  { className: "Label" },
                  (0, o.we)(
                    "#Settings_Advanced_Supersampline_ResolutionPerEye",
                  ),
                ),
                i.createElement(
                  "div",
                  { className: "Label Right Resolution" },
                  i.createElement("div", { className: "Dimensions" }, a),
                  i.createElement(
                    "div",
                    { className: "Percentage" },
                    Math.round(100 * t).toString() + "%",
                  ),
                ),
                i.createElement(c.tE, {
                  min: 0.2,
                  max: 5,
                  step: 0.02,
                  detents: r,
                  value: t,
                  onChange: (e) => l.HR.SetSettingsValue(h.w5, e),
                }),
                i.createElement(R, null),
              ),
            ),
          });
        });
      let C = class extends i.Component {
        constructor(e) {
          super(e),
            (this.state = { bShowingModal: !1 }),
            (this.m_sUniqueIdForFadeSupression = Math.random().toString());
        }
        componentWillUnmount() {
          this.state.bShowingModal &&
            l.HR.SetDashboardFadeSupression(
              this.m_sUniqueIdForFadeSupression,
              !1,
            );
        }
        showModal() {
          this.setState({ bShowingModal: !0 }),
            l.HR.SetDashboardFadeSupression(
              this.m_sUniqueIdForFadeSupression,
              !0,
            );
        }
        hideModal() {
          this.setState({ bShowingModal: !1 }),
            l.HR.SetDashboardFadeSupression(
              this.m_sUniqueIdForFadeSupression,
              !1,
            );
        }
        render() {
          if (!VRHTML) return null;
          const e = VRHTML.VRProperties.GetStringProperty(
            "/user/head",
            d.fD.HmdColumnCorrectionSettingPrefix_String,
          );
          if (!e) return null;
          if ("firmware_update_required" == e)
            return i.createElement(
              c.YO,
              {
                title: (0, o.we)("#DisplaySettings_ColumnCorrectionDesc"),
                className: "SettingsItem",
                visibility: this.props.visibility,
              },
              i.createElement(
                "div",
                { className: "Label" },
                (0, o.we)("#DisplaySettings_ColumnCorrection"),
              ),
              i.createElement(
                "div",
                { className: "Subsection WithStem" },
                i.createElement(
                  "div",
                  { className: "Label" },
                  (0, o.we)("#DisplaySettings_Error_FirmwareUpdateNeeded"),
                ),
              ),
            );
          {
            let t = l.HR.settings.get(h.GM);
            const r = "/settings/driver_lighthouse/" + e + "_L",
              n = "/settings/driver_lighthouse/" + e + "_R";
            let a = l.HR.settings.get(r);
            null == a && (a = 0);
            let s = l.HR.settings.get(n);
            return (
              null == s && (s = 0),
              i.createElement(
                c.YO,
                {
                  className: "SettingsItem",
                  title: (0, o.we)("#DisplaySettings_ColumnCorrectionDesc"),
                  visibility: this.props.visibility,
                },
                i.createElement(
                  "div",
                  { className: "Label" },
                  (0, o.we)("#DisplaySettings_IndexColumnCorrection"),
                ),
                i.createElement(
                  u.$,
                  { className: "ButtonControl", onClick: this.showModal },
                  (0, o.we)("#DisplaySettings_ColumnCorrectionEdit"),
                ),
                this.state.bShowingModal &&
                  i.createElement(
                    c.bB,
                    {
                      onDismissRequested: this.hideModal,
                      allowableParentSelectors: [".SettingsMain"],
                      header: (0, o.we)(
                        "#DisplaySettings_IndexColumnCorrection",
                      ),
                      footer: i.createElement(c.tR, {
                        showResetButton: !0,
                        onResetRequested: () => {
                          l.HR.SetSettingsValue(h.GM, 1),
                            l.HR.SetSettingsValue(r, 0),
                            l.HR.SetSettingsValue(n, 0);
                        },
                        onDismissRequested: this.hideModal,
                      }),
                    },
                    i.createElement(c.Al, {
                      value: 0 != t,
                      title: (0, o.we)("#DisplaySettings_ColumnCorrectionDesc"),
                      label: (0, o.we)("#DisplaySettings_ColumnCorrection"),
                      offLabel: (0, o.we)(
                        "#DisplaySettings_ColumnCorrectionOff",
                      ),
                      onLabel: (0, o.we)(
                        "#DisplaySettings_ColumnCorrectionAuto",
                      ),
                      onChange: (e) => l.HR.SetSettingsValue(h.GM, e ? 1 : 0),
                    }),
                    i.createElement(c.tE, {
                      label: (0, o.we)(
                        "#DisplaySettings_ColumnCorrectionBiasLeft",
                      ),
                      min: -10,
                      max: 10,
                      step: 1,
                      value: a,
                      detents: [0],
                      valueStyleVariant: v.Te.OnHandle,
                      renderValue: (e) => e.toFixed(0),
                      onChange: (e) => l.HR.SetSettingsValue(r, e),
                    }),
                    i.createElement(c.tE, {
                      label: (0, o.we)(
                        "#DisplaySettings_ColumnCorrectionBiasRight",
                      ),
                      min: -10,
                      max: 10,
                      step: 1,
                      value: s,
                      detents: [0],
                      valueStyleVariant: v.Te.OnHandle,
                      renderValue: (e) => e.toFixed(0),
                      onChange: (e) => l.HR.SetSettingsValue(n, e),
                    }),
                  ),
              )
            );
          }
        }
      };
      (0, n.Cg)([s.o], C.prototype, "showModal", null),
        (0, n.Cg)([s.o], C.prototype, "hideModal", null),
        (C = (0, n.Cg)([p.PA], C));
      const M = (0, p.PA)(() => {
        var e, t;
        if (!VRHTML) return null;
        if (
          !VRHTML.VRProperties.GetBoolProperty(
            "/user/head",
            d.fD.DisplaySupportsAnalogGain_Bool,
          )
        )
          return null;
        let r = l.HR.settings.get(h.Y);
        null == r && (r = 1);
        const n =
            null !==
              (e = VRHTML.VRProperties.GetFloatProperty(
                "/user/head",
                d.fD.DisplayMaxAnalogGain_Float,
              )) && void 0 !== e
              ? e
              : 1,
          a =
            null !==
              (t = VRHTML.VRProperties.GetFloatProperty(
                "/user/head",
                d.fD.DisplayMinUIAnalogGain_Float,
              )) && void 0 !== t
              ? t
              : 0.2;
        return i.createElement(
          c.YO,
          { className: "SettingsItem" },
          i.createElement(
            "div",
            { className: "Label" },
            (0, o.we)("#DisplaySettings_DisplayBrightness"),
          ),
          i.createElement(c.tE, {
            min: 100 * a,
            max: 100 * n,
            value:
              ((s = r),
              s < 0 ? 0 : s < 1 ? 100 * Math.pow(s, 1 / 2.2) : 100 * s),
            detents: [100],
            valueStyleVariant: v.Te.OnHandle,
            renderValue: (e) => e.toFixed(0) + "%",
            onChange: (e) =>
              l.HR.SetSettingsValue(
                h.Y,
                (function (e) {
                  return e < 100 ? Math.pow(e / 100, 2.2) : e / 100;
                })(e),
              ),
            dashboardFadeSupression: !0,
          }),
        );
        var s;
      });
      class T extends i.Component {
        constructor(e) {
          super(e);
        }
        render() {
          const e =
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.GetRecommendedOverlayRenderQuality();
          return i.createElement(c.xS, {
            name: "/settings/steamvr/overlayRenderQuality_2",
            label: (0, o.we)("#Settings_OverlayRenderQuality"),
            items: [
              {
                value: d.pM.Auto,
                sLabel:
                  void 0 !== e
                    ? (0, o.we)(
                        "#Settings_Auto_Parenthesized",
                        (0, o.we)("#Settings_" + d.pM[e]),
                      )
                    : (0, o.we)("#Settings_Auto"),
              },
              g.Sr.Separator,
              { value: d.pM.Low, sLabel: (0, o.we)("#Settings_Low") },
              { value: d.pM.Medium, sLabel: (0, o.we)("#Settings_Medium") },
              { value: d.pM.High, sLabel: (0, o.we)("#Settings_High") },
            ],
            visibility: c.Z3.Advanced,
          });
        }
      }
      class E extends i.Component {
        constructor(e) {
          super(e);
        }
        render() {
          return VRHTML &&
            VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              d.fD.DisplayAllowNightMode_Bool,
            )
            ? i.createElement(c.Al, {
                label: (0, o.we)("#Settings_NightModeCheck"),
                title: (0, o.we)("#Settings_NightModeDesc"),
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
      const V = () => {
        if (!VRHTML) return null;
        if (
          VRHTML.VRProperties.GetBoolProperty(
            "/user/head",
            d.fD.HasDriverDirectModeComponent_Bool,
          )
        ) {
          return "oculus" ===
            VRHTML.VRProperties.GetStringProperty(
              "/user/head",
              d.fD.TrackingSystemName_String,
            )
            ? null
            : i.createElement(c.Al, {
                name: "/settings/steamvr/motionSmoothing",
                label: (0, o.we)("#Settings_Advanced_MotionSmoothing_Header"),
                title: (0, o.we)(
                  "#Settings_Advanced_MotionSmoothing_Description",
                ),
              });
        }
        if (
          VRHTML.VRClientInternal.GetGraphicsHardwareVendorInfo()
            .bSupportsMotionSmoothing
        )
          return i.createElement(c.Al, {
            name: "/settings/steamvr/motionSmoothing",
            label: (0, o.we)("#Settings_Advanced_MotionSmoothing_Header"),
            title: (0, o.we)("#Settings_Advanced_MotionSmoothing_Description"),
          });
        const e =
            l.HR.systemInfo &&
            l.HR.systemInfo.os_type > 0 &&
            l.HR.systemInfo.os_type < l.Gz,
          t = (0, o.we)(
            e
              ? "#Settings_Advanced_MotionSmoothing_Disabled_Win7"
              : "#Settings_Advanced_MotionSmoothing_Disabled",
          );
        return i.createElement(
          c.YO,
          { className: "SettingsItem", title: t },
          i.createElement(
            "div",
            { className: "Label" },
            (0, o.we)("#Settings_Advanced_MotionSmoothing_Header"),
          ),
          i.createElement(
            "div",
            { className: "Label Right" },
            (0, o.we)("#Settings_NotSupported"),
          ),
        );
      };
      var D, k, O;
      !(function (e) {
        (e[(e.UseGlobal = 0)] = "UseGlobal"),
          (e[(e.ForceOn = 1)] = "ForceOn"),
          (e[(e.ForceOff = 2)] = "ForceOff"),
          (e[(e.ForceAlwaysOn = 3)] = "ForceAlwaysOn");
      })(D || (D = {})),
        (function (e) {
          (e[(e.Default = 0)] = "Default"),
            (e[(e.Letterbox = 1)] = "Letterbox"),
            (e[(e.Advanced = 2)] = "Advanced");
        })(k || (k = {})),
        (function (e) {
          (e[(e.Off = 0)] = "Off"),
            (e[(e.Fine = 1)] = "Fine"),
            (e[(e.Normal = 2)] = "Normal"),
            (e[(e.Extreme = 3)] = "Extreme");
        })(O || (O = {}));
      const A = {
        [O.Fine]: { min: 0.8, max: 1.25, step: 0.001 },
        [O.Normal]: { min: 0.5, max: 2, step: 0.01 },
        [O.Extreme]: { min: 0.1, max: 10, step: 0.1 },
        [O.Off]: { min: 0, max: 100, step: 1 },
      };
      let I = (_ = class extends i.Component {
        constructor(e) {
          super(e),
            (this.m_routeObservingAutorunDisposer = null),
            (this.m_refAppSelectDropdown = i.createRef()),
            (this.m_initialAppState = null),
            (this.state = {
              currentApp: null,
              nResolutionMultiplier: null,
              nFovScaleMultiplier: null,
              nFovScaleMultiplierInner: null,
              nFovScaleMultiplierUpper: null,
              nFovScaleMultiplierLower: null,
              eFovScaleFormat: k.Default,
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
          l.HR.setRoute(e, _.PAGE_SECTION, t ? [t] : null),
            null === VRHTML || void 0 === VRHTML || VRHTML.ShowSettingsUI();
        }
        get shouldShowModal() {
          return l.HR.routePageSection == _.PAGE_SECTION;
        }
        get currentRouteAppKey() {
          const e = l.HR.routePageSectionParams;
          return e.length >= 1 ? e[0] : null;
        }
        get enableThrottleOverrideSettings() {
          return (
            !!VRHTML &&
            !!VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              d.fD.Hmd_SupportsAppThrottling_Bool,
            ) &&
            !(
              !VRHTML.VRProperties.GetBoolProperty(
                "/user/head",
                d.fD.HasDriverDirectModeComponent_Bool,
              ) && this.state.disableAsyncReprojection
            )
          );
        }
        get enableMotionSmoothingOverrideSettings() {
          if (!VRHTML) return !1;
          if (
            VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              d.fD.HasDriverDirectModeComponent_Bool,
            )
          ) {
            return (
              "oculus" !==
              VRHTML.VRProperties.GetStringProperty(
                "/user/head",
                d.fD.TrackingSystemName_String,
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
              d.fD.HasDriverDirectModeComponent_Bool,
            )
          );
        }
        get worldScaleRangeMin() {
          return A[this.state.eWorldScaleRange].min;
        }
        get worldScaleRangeMax() {
          return A[this.state.eWorldScaleRange].max;
        }
        get worldScaleRangeStep() {
          return A[this.state.eWorldScaleRange].step;
        }
        onApplicationDropdownChange(e) {
          this.setState((t, r) => {
            var n;
            return t.currentApp === e
              ? null
              : (e && this.fetchAppState(e.key),
                l.HR.setRoutePageSectionParams([
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
            let i = null !== (t = e.throttling) && void 0 !== t ? t : 0,
              a = null !== (r = e.prediction) && void 0 !== r ? r : 0,
              s = O.Off;
            1 !== e.worldscale &&
              (s =
                Math.round(1e3 * e.worldscale) % 10 != 0
                  ? O.Fine
                  : e.worldscale < A[O.Normal].min ||
                      e.worldscale > A[O.Normal].max
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
                    : k.Default,
                bShowRefreshRateOptions: e.preferred_refresh_rate > 0,
                nPreferredRefreshRate: e.preferred_refresh_rate,
                eSmoothingMode: e.smoothing,
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
          l.HR.GetAppSettings(e).then(this.updateAppState);
        }
        setAppState(e, t) {
          if (null != this.state.currentApp) {
            let r = {};
            (r[e] = t), l.HR.SetAppSettings(this.state.currentApp.key, r);
          }
        }
        get computedResolution() {
          let e = l.HR.settings.get(h.wt)
            ? l.HR.settings.get(h.w5)
            : l.HR.settings.get(h.j5);
          if (null == e || null == this.state.nResolutionMultiplier) return "";
          let t = l.HR.SliderposToSupersample(this.state.nResolutionMultiplier),
            r = t;
          switch (this.state.eFovScaleFormat) {
            case k.Letterbox:
              r *= this.state.nFovScaleMultiplier;
              break;
            case k.Advanced:
              const e =
                  this.state.nFovScaleMultiplier +
                  this.state.nFovScaleMultiplierInner,
                n =
                  this.state.nFovScaleMultiplierUpper +
                  this.state.nFovScaleMultiplierLower;
              e < n ? (t *= e / n) : (r *= n / e);
          }
          if (
            l.HR.systemInfo &&
            null != l.HR.systemInfo.render_target_size.width &&
            0 != l.HR.systemInfo.render_target_size.height
          ) {
            let n = Math.max(
                512,
                Math.floor(
                  l.HR.systemInfo.render_target_size.width * Math.sqrt(e * t) +
                    0.5,
                ),
              ),
              i = Math.max(
                512,
                Math.floor(
                  l.HR.systemInfo.render_target_size.height * Math.sqrt(e * r) +
                    0.5,
                ),
              );
            const a = l.HR.settings.get(h.rG);
            return (
              Math.max(n, i) > a &&
                (n > i
                  ? ((i = (a * i) / n), (n = a))
                  : ((n = (a * n) / i), (i = a))),
              (n = 4 * Math.trunc(n / 4)),
              (i = 4 * Math.trunc(i / 4)),
              (0, o.we)("#Settings_Advanced_Supersampling_WidthByHeight", n, i)
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
              A[e].min,
              Math.min(A[e].max, this.state.flWorldScaleMultiplier),
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
          l.HR.ResetAppSettings(this.state.currentApp.key).then(
            this.updateAppState,
          );
        }
        show() {
          l.HR.setRoutePageSection(_.PAGE_SECTION);
        }
        close() {
          l.HR.setRoutePageSection(null);
        }
        get allowPerAppRefreshRate() {
          return !!l.HR.settings.get("/settings/internal/enablePerAppFPS");
        }
        get currentRefreshRate() {
          return l.HR.settings.get("/settings/steamvr/preferredRefreshRate");
        }
        render() {
          var e;
          let t = null;
          this.state.eSmoothingMode == D.ForceAlwaysOn &&
            (t = i.createElement(
              i.Fragment,
              null,
              (0, o.we)(
                "#Settings_PerApplication_MotionSmoothing_AlwaysOn_Desc",
              ),
            ));
          const r = this.state.eFovScaleFormat == k.Advanced;
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
              c.YO,
              { className: "SettingsItem" },
              i.createElement(
                u.$,
                { className: "ButtonControl", onClick: this.show },
                (0, o.we)("#Settings_PerApplication_VideoSettings"),
              ),
            ),
            this.shouldShowModal &&
              i.createElement(
                c.bB,
                {
                  className: "AppVideoModal",
                  onDismissRequested: this.close,
                  header: i.createElement(
                    i.Fragment,
                    null,
                    i.createElement(
                      "h1",
                      null,
                      (0, o.we)("#Settings_ManageVideoSettingsForApp"),
                    ),
                    i.createElement(c.mi, {
                      ref: this.m_refAppSelectDropdown,
                      stateKey: "settings_applications",
                      defaultAppKey:
                        null !== (e = this.currentRouteAppKey) && void 0 !== e
                          ? e
                          : null === VRHTML || void 0 === VRHTML
                            ? void 0
                            : VRHTML.VRApplications.GetSceneApplicationKey(),
                      showOverlays: !1,
                      defaultLabel: (0, o.we)(
                        "#Settings_PerApplication_ChooseApplication",
                      ),
                      onChange: this.onApplicationDropdownChange,
                    }),
                  ),
                  footer: i.createElement(c.tR, {
                    showResetButton: this.hasCurrentApp(),
                    onResetRequested: this.resetAppToDefaults,
                    onDismissRequested: this.close,
                  }),
                },
                this.hasCurrentApp() &&
                  i.createElement(
                    i.Fragment,
                    null,
                    this.enableMotionSmoothingOverrideSettings &&
                      null !== this.state.eSmoothingMode &&
                      !this.state.disableAsyncReprojection &&
                      i.createElement(c.xS, {
                        label: (0, o.we)(
                          "#Settings_Advanced_MotionSmoothing_Header",
                        ),
                        items: [
                          {
                            value: D.UseGlobal,
                            sLabel: (0, o.we)(
                              "#Settings_PerApplication_MotionSmoothing_Global",
                            ),
                          },
                          {
                            value: D.ForceOn,
                            sLabel: (0, o.we)(
                              "#Settings_PerApplication_MotionSmoothing_On",
                            ),
                          },
                          {
                            value: D.ForceOff,
                            sLabel: (0, o.we)(
                              "#Settings_PerApplication_MotionSmoothing_Off",
                            ),
                          },
                          {
                            value: D.ForceAlwaysOn,
                            sLabel: (0, o.we)(
                              "#Settings_PerApplication_MotionSmoothing_AlwaysOn",
                            ),
                          },
                        ],
                        value: this.state.eSmoothingMode,
                        onChange: this.onMotionSmoothChange,
                        subsection: t,
                      }),
                    null !== this.state.nResolutionMultiplier &&
                      i.createElement(
                        c.YO,
                        {
                          title: (0, o.we)(
                            "#Settings_PerApplication_AppResHeader",
                            (0, o.we)("#Settings_SectionTitle_General"),
                          ),
                          className: "SettingsItem",
                        },
                        i.createElement(
                          "div",
                          { className: "Label" },
                          (0, o.we)("#Settings_PerApplication_AppResTitle"),
                        ),
                        i.createElement(
                          "div",
                          { className: "SubsectionStem Label Resolution" },
                          i.createElement(
                            "div",
                            { className: "Dimensions" },
                            this.computedResolution,
                          ),
                          i.createElement(
                            "div",
                            { className: "Percentage" },
                            Math.round(
                              100 * this.state.nResolutionMultiplier,
                            ).toString() + "%",
                          ),
                        ),
                        i.createElement(
                          "div",
                          { className: "Subsection WithStem" },
                          i.createElement(c.tE, {
                            min: l.mO,
                            max: l.aJ,
                            step: l.kP,
                            value: this.state.nResolutionMultiplier,
                            detents: [1],
                            onChange: this.onResolutionSliderChange,
                          }),
                          i.createElement(
                            c.YO,
                            { className: "SettingsItem" },
                            i.createElement(R, null),
                          ),
                        ),
                      ),
                    null !== this.state.nFovScaleMultiplier &&
                      (l.HR.showAdvancedSettings ||
                        (this.m_initialAppState &&
                          1 != this.m_initialAppState.nFovScaleMultiplier)) &&
                      i.createElement(
                        c.YO,
                        {
                          title: (0, o.we)(
                            "#Settings_PerApplication_FovScale_Description",
                          ),
                          className: "SettingsItem Advanced",
                        },
                        i.createElement(
                          "div",
                          { className: "Label" },
                          (0, o.we)("#Settings_PerApplication_FovScale_Label"),
                        ),
                        i.createElement(
                          "div",
                          { className: "SubsectionStem Label Resolution" },
                          i.createElement(
                            "div",
                            { className: "Dimensions" },
                            (0, o.we)(
                              "#Settings_PerApplication_FovScale_Multiplier",
                            ),
                          ),
                          !r &&
                            i.createElement(
                              "div",
                              { className: "Percentage" },
                              Math.round(
                                100 * this.state.nFovScaleMultiplier,
                              ).toString() + "%",
                            ),
                        ),
                        i.createElement(
                          "div",
                          { className: "Subsection WithStem" },
                          i.createElement(c.tE, {
                            min: 0.5,
                            max: 1,
                            step: 0.01,
                            value: this.state.nFovScaleMultiplier,
                            valueStyleVariant: r ? v.Te.OnHandle : void 0,
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
                            i.createElement(
                              i.Fragment,
                              null,
                              i.createElement(c.tE, {
                                min: 0.5,
                                max: 1,
                                step: 0.01,
                                value: this.state.nFovScaleMultiplierInner,
                                valueStyleVariant: v.Te.OnHandle,
                                renderValue: (e) =>
                                  Math.round(
                                    100 * this.state.nFovScaleMultiplierInner,
                                  ).toString() + "%",
                                onChange: this.onFovScaleSliderChangeInner,
                                label: "Inner",
                              }),
                              i.createElement(c.tE, {
                                min: 0.5,
                                max: 1,
                                step: 0.01,
                                value: this.state.nFovScaleMultiplierUpper,
                                valueStyleVariant: v.Te.OnHandle,
                                renderValue: (e) =>
                                  Math.round(
                                    100 * this.state.nFovScaleMultiplierUpper,
                                  ).toString() + "%",
                                onChange: this.onFovScaleSliderChangeUpper,
                                label: "Upper",
                              }),
                              i.createElement(c.tE, {
                                min: 0.5,
                                max: 1,
                                step: 0.01,
                                value: this.state.nFovScaleMultiplierLower,
                                valueStyleVariant: v.Te.OnHandle,
                                renderValue: (e) =>
                                  Math.round(
                                    100 * this.state.nFovScaleMultiplierLower,
                                  ).toString() + "%",
                                onChange: this.onFovScaleSliderChangeLower,
                                label: "Lower",
                              }),
                            ),
                          (1 != this.state.nFovScaleMultiplier || r) &&
                            i.createElement(c.xS, {
                              items: [
                                { value: k.Default, sLabel: "Default" },
                                { value: k.Letterbox, sLabel: "Letterbox" },
                                { value: k.Advanced, sLabel: "Advanced" },
                              ],
                              value: this.state.eFovScaleFormat,
                              onChange: this.onFovScaleFormatChange,
                            }),
                        ),
                      ),
                    null !== this.state.flWorldScaleMultiplier &&
                      (l.HR.showAdvancedSettings ||
                        (this.m_initialAppState &&
                          this.m_initialAppState.eWorldScaleRange !== O.Off)) &&
                      i.createElement(
                        c.YO,
                        {
                          title: (0, o.we)(
                            "#Settings_PerApplication_WorldScale_Description",
                          ),
                          className: "SettingsItem Advanced",
                        },
                        i.createElement(
                          "div",
                          { className: "Label" },
                          (0, o.we)(
                            "#Settings_PerApplication_WorldScale_Label",
                          ),
                        ),
                        i.createElement(c.xS, {
                          items: [
                            {
                              value: O.Off,
                              sLabel: (0, o.we)(
                                "#Settings_PerApplication_WorldScale_Off",
                              ),
                            },
                            {
                              value: O.Fine,
                              sLabel: (0, o.we)(
                                "#Settings_PerApplication_WorldScale_Fine",
                              ),
                            },
                            {
                              value: O.Normal,
                              sLabel: (0, o.we)(
                                "#Settings_PerApplication_WorldScale_Normal",
                              ),
                            },
                            {
                              value: O.Extreme,
                              sLabel: (0, o.we)(
                                "#Settings_PerApplication_WorldScale_Extreme",
                              ),
                            },
                          ],
                          value: this.state.eWorldScaleRange,
                          onChange: this.onWorldScaleRangeChange,
                        }),
                      ),
                    this.state.eWorldScaleRange !== O.Off &&
                      i.createElement(
                        c.YO,
                        { className: "SettingsItem Advanced" },
                        i.createElement("div", { className: "Label" }),
                        i.createElement(
                          "div",
                          { className: "SubsectionStem Label Resolution" },
                          i.createElement(
                            "div",
                            { className: "Dimensions" },
                            (0, o.we)(
                              "#Settings_PerApplication_WorldScale_Range",
                              100 * this.worldScaleRangeMin,
                              100 * this.worldScaleRangeMax,
                            ),
                          ),
                          i.createElement(
                            "div",
                            { className: "Percentage" },
                            (
                              Math.round(
                                1e3 * this.state.flWorldScaleMultiplier,
                              ) / 10
                            ).toString() + "%",
                          ),
                        ),
                        i.createElement(
                          "div",
                          { className: "Subsection WithStem" },
                          i.createElement(c.tE, {
                            min: this.worldScaleRangeMin,
                            max: this.worldScaleRangeMax,
                            step: this.worldScaleRangeStep,
                            value: this.state.flWorldScaleMultiplier,
                            detents: [1],
                            onChange: this.onWorldScaleMultiplierSliderChange,
                          }),
                          i.createElement(
                            "div",
                            { className: "SettingsItemValueLabel Fixed" },
                            (0, o.we)(
                              "#Settings_PerApplication_WorldScale_Warning",
                            ),
                          ),
                        ),
                      ),
                    this.allowPerAppRefreshRate &&
                      l.HR.systemInfo &&
                      l.HR.systemInfo.refresh_rates.actual_display_frequency >
                        0 &&
                      l.HR.systemInfo.refresh_rates.supported_rates.length >
                        1 &&
                      i.createElement(
                        i.Fragment,
                        null,
                        null !== this.state.bShowRefreshRateOptions &&
                          i.createElement(c.Al, {
                            label: (0, o.we)(
                              "#Settings_PerApplication_RefreshRateOverride_Checkbox",
                            ),
                            title: (0, o.we)(
                              "#Settings_Perapplication_RefreshRateOverride_Description",
                            ),
                            value: this.state.bShowRefreshRateOptions,
                            onChange: this.onRefreshRateOverrideChange,
                            onSubsection: i.createElement(c.ym, {
                              label: (0, o.we)(
                                "#Settings_Video_RefreshRate_Label_Hz",
                              ),
                              onChange: this.onRefreshRateChange,
                              value: this.state.nPreferredRefreshRate,
                              items:
                                l.HR.systemInfo.refresh_rates.supported_rates.map(
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
                      (l.HR.showAdvancedSettings ||
                        (this.m_initialAppState &&
                          this.m_initialAppState.disableAsyncReprojection)) &&
                      i.createElement(
                        c.YO,
                        {
                          title: (0, o.we)(
                            "#Settings_PerApplication_Reprojection_Description",
                          ),
                          className: "SettingsItem Advanced",
                        },
                        i.createElement(c.Al, {
                          label: (0, o.we)(
                            "#Settings_PerApplication_Reprojection_Checkbox",
                          ),
                          value: this.state.disableAsyncReprojection,
                          onChange: this.onDisableAsyncReprojection,
                        }),
                      ),
                    this.enableThrottleOverrideSettings &&
                      (l.HR.showAdvancedSettings ||
                        (this.m_initialAppState &&
                          this.m_initialAppState.bShowThrottleOptions)) &&
                      i.createElement(
                        c.YO,
                        {
                          title: (0, o.we)(
                            "#Settings_PerApplication_ThrottlingOverride_Description",
                          ),
                          className: "SettingsItem Advanced",
                        },
                        i.createElement(
                          "div",
                          { className: "Label" },
                          (0, o.we)(
                            "#Settings_PerApplication_ThrottlingOverride_Label",
                          ),
                        ),
                        i.createElement(c.Al, {
                          title: (0, o.we)(
                            "#Settings_PerApplication_ThrottlingOverride_Toggle",
                          ),
                          onLabel: (0, o.we)(
                            "#Settings_PerApplication_ThrottlingOverride_Toggle_On",
                          ),
                          offLabel: (0, o.we)(
                            "#Settings_PerApplication_ThrottlingOverride_Toggle_Off",
                          ),
                          value: this.state.bShowThrottleOptions,
                          onChange: this.onShowThrottleOptions,
                        }),
                        this.state.bShowThrottleOptions &&
                          i.createElement(
                            "div",
                            { className: "Subsection WithStem" },
                            i.createElement(
                              "div",
                              { className: "Label" },
                              (0, o.we)(
                                "#Settings_PerApplication_ThrottlingOverride_Framerate",
                              ),
                            ),
                            i.createElement(c.tE, {
                              min: 5,
                              max: 0,
                              step: 1,
                              value: this.state.nFramesToThrottle,
                              valueStyleVariant: v.Te.OnHandle,
                              renderValue: (e) =>
                                (this.currentRefreshRate / (e + 1)).toFixed(1),
                              onChange: this.onThrottleSliderChange,
                            }),
                            i.createElement(
                              "div",
                              { className: "Label" },
                              (0, o.we)(
                                "#Settings_PerApplication_ThrottlingOverride_Prediction",
                              ),
                            ),
                            i.createElement(c.tE, {
                              min: 0,
                              max: 3,
                              step: 1,
                              value: this.state.nAdditionalPrediction,
                              valueStyleVariant: v.Te.OnHandle,
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
                  i.createElement(
                    "div",
                    { className: "ModalPlaceholder" },
                    (0, o.we)("#Settings_PerApplication_ChooseApplication"),
                  ),
              ),
          );
        }
      });
      (I.PAGE_SECTION = "appvideosettings"),
        (0, n.Cg)([a.computed], I.prototype, "shouldShowModal", null),
        (0, n.Cg)([a.computed], I.prototype, "currentRouteAppKey", null),
        (0, n.Cg)(
          [a.computed],
          I.prototype,
          "enableThrottleOverrideSettings",
          null,
        ),
        (0, n.Cg)(
          [a.computed],
          I.prototype,
          "enableMotionSmoothingOverrideSettings",
          null,
        ),
        (0, n.Cg)(
          [a.computed],
          I.prototype,
          "enableLegacyReprojectionSettings",
          null,
        ),
        (0, n.Cg)([a.computed], I.prototype, "worldScaleRangeMin", null),
        (0, n.Cg)([a.computed], I.prototype, "worldScaleRangeMax", null),
        (0, n.Cg)([a.computed], I.prototype, "worldScaleRangeStep", null),
        (0, n.Cg)([s.o], I.prototype, "onApplicationDropdownChange", null),
        (0, n.Cg)([s.o], I.prototype, "updateAppState", null),
        (0, n.Cg)([a.computed], I.prototype, "computedResolution", null),
        (0, n.Cg)([s.o], I.prototype, "onResolutionSliderChange", null),
        (0, n.Cg)([s.o], I.prototype, "onFovScaleSliderChange", null),
        (0, n.Cg)([s.o], I.prototype, "onFovScaleSliderChangeInner", null),
        (0, n.Cg)([s.o], I.prototype, "onFovScaleSliderChangeUpper", null),
        (0, n.Cg)([s.o], I.prototype, "onFovScaleSliderChangeLower", null),
        (0, n.Cg)([s.o], I.prototype, "onFovScaleFormatChange", null),
        (0, n.Cg)([s.o], I.prototype, "onMotionSmoothChange", null),
        (0, n.Cg)([s.o], I.prototype, "onRefreshRateOverrideChange", null),
        (0, n.Cg)([s.o], I.prototype, "onRefreshRateChange", null),
        (0, n.Cg)([s.o], I.prototype, "onDisableAsyncReprojection", null),
        (0, n.Cg)([s.o], I.prototype, "onShowThrottleOptions", null),
        (0, n.Cg)([s.o], I.prototype, "onThrottleSliderChange", null),
        (0, n.Cg)([s.o], I.prototype, "onPredictionSliderChange", null),
        (0, n.Cg)([s.o], I.prototype, "onWorldScaleRangeChange", null),
        (0, n.Cg)(
          [s.o],
          I.prototype,
          "onWorldScaleMultiplierSliderChange",
          null,
        ),
        (0, n.Cg)([s.o], I.prototype, "resetAppToDefaults", null),
        (0, n.Cg)([s.o], I.prototype, "show", null),
        (0, n.Cg)([s.o], I.prototype, "close", null),
        (0, n.Cg)([a.computed], I.prototype, "allowPerAppRefreshRate", null),
        (0, n.Cg)([a.computed], I.prototype, "currentRefreshRate", null),
        (I = _ = (0, n.Cg)([p.PA], I));
      let B = class extends c.yO {
        render() {
          if (!this.props.active) return null;
          const e = VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              d.fD.Hmd_SupportsHDCP14LegacyCompat_Bool,
            ),
            t = VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              d.fD.Hmd_SupportsDisplayPortTrainingMode_Bool,
            ),
            r = VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              d.fD.Hmd_SupportsGpuBusMonitoring_Bool,
            );
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(S, null),
            i.createElement(M, null),
            i.createElement(E, null),
            i.createElement(V, null),
            i.createElement(w, null),
            i.createElement(c.Al, {
              name: "/settings/steamvr/doNotFadeToGrid",
              label: (0, o.we)("#Settings_FadeToGrid"),
              swapOnOff: !0,
            }),
            i.createElement(I, null),
            !1,
            i.createElement(c.Al, {
              name: "/settings/steamvr/allowSupersampleFiltering",
              label: (0, o.we)("#Settings_Advanced_AllowSupersampleFiltering"),
              visibility: c.Z3.Advanced,
            }),
            i.createElement(T, null),
            e &&
              i.createElement(c.Al, {
                name: "/settings/steamvr/hdcp14legacyCompatibility",
                label: (0, o.we)("#Settings_Video_HDCP14LegacyCompatibility"),
                visibility: c.Z3.Advanced,
                requiresRestart: !0,
              }),
            t &&
              i.createElement(c.xS, {
                name: "/settings/steamvr/displayPortTrainingMode",
                label: (0, o.we)("#Settings_DisplayPortTrainingMode"),
                items: [
                  {
                    value: 0,
                    sLabel: (0, o.we)(
                      "#Settings_DisplayPortTrainingMode_Automatic",
                    ),
                  },
                  g.Sr.Separator,
                  {
                    value: 1,
                    sLabel: (0, o.we)(
                      "#Settings_DisplayPortTrainingMode_CompatibilityModeA",
                    ),
                  },
                  {
                    value: 2,
                    sLabel: (0, o.we)(
                      "#Settings_DisplayPortTrainingMode_CompatibilityModeB",
                    ),
                  },
                ],
                visibility: c.Z3.Advanced,
                requiresRestart: !0,
              }),
            i.createElement(C, { visibility: c.Z3.Advanced }),
            i.createElement(c.Al, {
              name: "/settings/power/pauseCompositorOnStandby",
              label: (0, o.we)("#Settings_PauseOnStandby"),
              visibility: c.Z3.Advanced,
            }),
            r &&
              i.createElement(c.Al, {
                name: "/settings/perfcheck/gpuBusMonitoring",
                label: (0, o.we)("#Settings_GpuBusMonitoring"),
                visibility: c.Z3.Advanced,
              }),
            this.makeResetToDefaultButton(),
          );
        }
      };
      (B.Name = "video_settings"), (B = (0, n.Cg)([p.PA], B));
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
            (r.properties["min-target-scale"] = this.props.min_target_scale),
            (r.properties["max-target-scale"] = this.props.max_target_scale),
            (r.properties.displacement = this.props.displacement),
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
        XI: () => p,
        _J: () => g,
        hi: () => d,
        j_: () => u,
        kJ: () => m,
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
      function p(e) {
        return e && void 0 !== e.to;
      }
      function m(e) {
        return "number" == typeof e
          ? e
          : (t = e) && void 0 !== t.to
            ? [e.channel, e.interp, e.from, e.to]
            : void 0;
        var t;
      }
      function h(e) {
        return p(e)
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
        Em: () => V,
        Lx: () => E,
        Oe: () => w,
        Tu: () => d,
        X4: () => p,
        bl: () => M,
        my: () => D,
        nX: () => C,
        w5: () => T,
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
      function p() {
        return null === VRHTML || void 0 === VRHTML
          ? void 0
          : VRHTML.VROverlay.ThisOverlayHandle();
      }
      function m(e, t) {
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
                  (i.properties["parent-id"] = u(t, "parent-id"));
                break;
              case "VSG-TRACKING-STATE-VISIBILITY":
                (i = d("trackingstatevisibility", t)),
                  (i.properties["visible-0dof"] = l(t, "visible-0dof")),
                  (i.properties["visible-3dof"] = l(t, "visible-3dof")),
                  (i.properties["visible-6dof"] = l(t, "visible-6dof"));
                break;
              case "VSG-ELASTIC-HEAD-TRANSFORM":
                (i = d("elasticheadtransform", t)),
                  (i.properties["start-angle-threshold"] = s(
                    t,
                    "start-angle-threshold",
                  )),
                  (i.properties["stop-angle-threshold"] = s(
                    t,
                    "stop-angle-threshold",
                  )),
                  (i.properties["ease-in-time"] = s(t, "ease-in-time")),
                  (i.properties["ease-in-power"] = s(t, "ease-in-power")),
                  (i.properties["ease-out-angle-threshold"] = s(
                    t,
                    "ease-out-angle-threshold",
                  )),
                  (i.properties["ease-out-power"] = s(t, "ease-out-power")),
                  (i.properties["min-angular-velocity"] = s(
                    t,
                    "min-angular-velocity",
                  )),
                  (i.properties["max-angular-velocity"] = s(
                    t,
                    "max-angular-velocity",
                  )),
                  (i.properties["lock-to-horizon"] = l(t, "lock-to-horizon")),
                  (i.properties["translation-behavior"] = o(
                    t,
                    "translation-behavior",
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
                  ));
            }
            return [n, i];
          })(e, t),
          i = [];
        for (let e = 0; e < t.children.length; e++) {
          let n = t.children.item(e);
          if (n.children) {
            let e = m(r, n);
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
                  children: m(
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
        p = r(6731),
        m = r(6575);
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
            m.b,
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
              p.wM,
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
            p = this.m_elemBoundingParent.getBoundingClientRect(),
            m = p.left + h.POPOVER_BOUNDS_MARGIN,
            g = p.right - h.POPOVER_BOUNDS_MARGIN,
            v = p.top + h.POPOVER_BOUNDS_MARGIN,
            _ = p.bottom - h.POPOVER_BOUNDS_MARGIN;
          if (this.m_refSelectedButton.current) {
            u -=
              this.m_refSelectedButton.current.elem.getBoundingClientRect()
                .top - d.top;
          }
          const b = u;
          c < m && (c = m),
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
      r.d(t, { cb: () => o, tH: () => c });
      var n = r(1635),
        i = r(6540),
        a = r(6090),
        s = r(3236);
      const o =
        ((l = (e) => {
          throw new Error(e.errorStr);
        }),
        function (e) {
          return i.createElement(
            c,
            null,
            i.createElement(l, Object.assign({}, e)),
          );
        });
      var l;
      class c extends i.Component {
        constructor(e) {
          super(e), (this.state = {}), (this.state.lastErrorKey = e.errorKey);
        }
        static InstallErrorReportingStore(e) {
          this.sm_ErrorReportingStore = e;
        }
        componentDidCatch(e, t) {
          const r = c.sm_ErrorReportingStore;
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
              : c.sm_ErrorReportingStore &&
                  c.sm_ErrorReportingStore.reporting_enabled
                ? i.createElement(p, {
                    error: n,
                    identifierHash: a,
                    store: c.sm_ErrorReportingStore,
                    onRefresh: this.Reset,
                  })
                : i.createElement(d, { error: n, onDismiss: this.Reset })
            : e || null;
        }
      }
      function u(e) {
        const { enabled: t } = e,
          [r, n] = i.useState(t),
          [a, s] = i.useState(5);
        i.useEffect(() => {
          const e = setTimeout(() => {
            r &&
              (a > 1
                ? s(a - 1)
                : (console.warn(
                    "Auto-reloading due to triggered ErrorBoundary...",
                  ),
                  window.location.reload()));
          }, 1e3);
          return () => clearTimeout(e);
        }, [r, a]);
        const o = i.useCallback(() => {
          console.log("Auto-reload canceled."), n(!1);
        }, []);
        return (
          i.useEffect(() => {
            const e = () => {
              o();
            };
            return (
              document.addEventListener("click", e),
              () => document.removeEventListener("click", e)
            );
          }, [o]),
          t
            ? r
              ? i.createElement(
                  i.Fragment,
                  null,
                  i.createElement(
                    g,
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
                      onClick: o,
                    },
                    "Cancel",
                  ),
                  i.createElement("br", null),
                )
              : i.createElement(
                  i.Fragment,
                  null,
                  i.createElement(g, null, "Auto-reload canceled."),
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
      (0, n.Cg)([s.o], c.prototype, "Reset", null);
      const d = ({ error: e, onDismiss: t }) => {
          let r = e.error ? e.error.stack : "Stack missing",
            n = e.info ? e.info.componentStack : "",
            s = (e.error && e.error.message) || "unknown error";
          const o = i.useContext(a.GM);
          return i.createElement(
            m,
            null,
            i.createElement(g, null, 'Error: "', s, '"'),
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
            i.createElement(u, { enabled: null == o }),
            i.createElement(v, null, r),
            i.createElement(v, null, "The error occurred while rendering:", n),
          );
        },
        p = (e) => {
          const { error: t, onRefresh: r, identifierHash: n, store: s } = e,
            o = (t.error && t.error.message) || "unknown error",
            l = `${s.product}_${s.version}_${n}`,
            c = i.useContext(a.GM);
          return i.createElement(
            m,
            null,
            i.createElement(
              g,
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
            i.createElement(u, { enabled: null == c }),
            i.createElement(v, null, "Error Reference: ", l),
            i.createElement(v, null, o),
          );
        };
      function m(e) {
        return i.useContext(a.GM) || (0, a.R$)() != a.OH.Overlay
          ? i.createElement(h, Object.assign({}, e))
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
                i.createElement(h, Object.assign({}, e)),
              ),
            );
      }
      const h = ({ children: e }) =>
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
        g = ({ children: e }) =>
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
        v = ({ children: e }) =>
          i.createElement(
            "pre",
            { style: { marginTop: "15px", opacity: 0.7, userSelect: "auto" } },
            e,
          );
    },
    6731: (e, t, r) => {
      "use strict";
      r.d(t, { vw: () => m, wM: () => p });
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
      let p = (n = class extends a.Component {
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
      (p.k_FadedForModalClassName = "FadedForModal"),
        (p.contextType = u),
        (0, i.Cg)([l.observable], p.prototype, "m_ViewStack", void 0),
        (0, i.Cg)([l.computed], p.prototype, "isTopView", null),
        (0, i.Cg)([l.computed], p.prototype, "viewLevel", null),
        (0, i.Cg)([l.computed], p.prototype, "viewShouldFadeForModal", null),
        (0, i.Cg)([s.o], p.prototype, "dismissView", null),
        (0, i.Cg)([l.action.bound], p.prototype, "addToViewStack", null),
        (0, i.Cg)([l.action.bound], p.prototype, "removeFromViewStack", null),
        (p = n = (0, i.Cg)([c.PA], p));
      const m = a.forwardRef((e, t) =>
        a.createElement(p, Object.assign({}, e, { ref: t }), e.children),
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
                [p.k_FadedForModalClassName, n],
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
        p = r(6138),
        m = r(260);
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
              p.W.temporarilySuppressSoundEffect(),
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
            this.state.eScrollState == i.Dragging && s.createElement(m.j, null),
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
        p = r(6138),
        m = r(1139),
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
            p.W.temporarilySuppressSoundEffect(),
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
                        className: (0, m.FH)("Handle", ["SmallerText", u]),
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
                className: (0, m.FH)(
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
    924: (e, t, r) => {
      "use strict";
      r.d(t, { Sv: () => c });
      var n,
        i,
        a = r(1635),
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
        })(i || (i = {}));
      class c extends s.Component {
        constructor(e) {
          super(e),
            (this.m_nNextStateTimeoutHandle = void 0),
            (this.state = { eAnimationState: e.visible ? i.Shown : i.Hidden });
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
          var e, t, r, n, a, s, o, l;
          switch (this.state.eAnimationState) {
            case i.Showing:
              null === (t = (e = this.props).onStartShowing) ||
                void 0 === t ||
                t.call(e);
              break;
            case i.Shown:
              null === (n = (r = this.props).onShown) ||
                void 0 === n ||
                n.call(r);
              break;
            case i.Hiding:
              null === (s = (a = this.props).onStartHiding) ||
                void 0 === s ||
                s.call(a);
              break;
            case i.Hidden:
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
                eAnimationState: this.props.visible ? i.Showing : i.Hiding,
              }));
        }
        static getDerivedStateFromProps(e, t) {
          return {};
        }
        finishAnimation() {
          this.setState((e) => {
            switch (e.eAnimationState) {
              case i.Showing:
                return { eAnimationState: i.Shown };
              case i.Hiding:
                return { eAnimationState: i.Hidden };
            }
            return null;
          });
        }
        render() {
          return this.state.eAnimationState == i.Hidden
            ? null
            : s.createElement(
                "div",
                {
                  className: (0, o.FH)(
                    "ShowHideAnimation",
                    i[this.state.eAnimationState],
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
      (0, a.Cg)([l.o], c.prototype, "cancelTimeout", null),
        (0, a.Cg)([l.o], c.prototype, "finishAnimation", null);
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
      r.d(t, { l: () => a });
      var n = r(1635),
        i = r(3236);
      class a {
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
      (0, n.Cg)([i.o], a.prototype, "Dispatch", null);
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
    4728: (e, t, r) => {
      "use strict";
      function n(e, t) {
        return (
          (e = Math.ceil(e)),
          (t = Math.floor(t)),
          Math.floor(Math.random() * (t - e + 1)) + e
        );
      }
      r.d(t, { Tg: () => n });
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
            ? (t.prototype[r] = p(n.Message.getFieldWithDefault, a, l))
            : (t.prototype[r] = s
                ? o
                  ? p(n.Message.getRepeatedWrapperField, s, a)
                  : m(s, a)
                : p(n.Message.getField, a)),
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
      function p(e, ...t) {
        return function () {
          return e(this, ...t);
        };
      }
      function m(e, t) {
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
        i = void 0;
      function a(e) {
        let t;
        try {
          t = e.getVRPathPropertyKey();
          const r = e.serializeBase64String(),
            a = n.get(t);
          if (a && a == r) return;
          n.set(t, r),
            null == i || i.set(t, e.toObject()),
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRPathProperties.SetStringPathProperty(t, r);
        } catch (e) {
          throw e;
        }
      }
      window.protoPathProperties = i;
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
          return l.s_Instance || (l.s_Instance = new l()), l.s_Instance;
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
          if (!VRHTML) return;
          let e = VRHTML.VRApplications.GetSceneApplicationState();
          e == i.HW.Starting
            ? (this.m_sceneApplicationState == i.HW.Quitting &&
                this.resetLatchedValued(),
              (this.m_sceneApplicationState = e),
              this.updateLatchedValues(),
              this.cancelUnresponsiveTimeout(),
              this.cancelNoAppTimeout())
            : e == i.HW.Quitting
              ? (this.m_sceneApplicationState == i.HW.Starting &&
                  this.resetLatchedValued(),
                (this.m_sceneApplicationState = e),
                this.updateLatchedValues(),
                this.cancelUnresponsiveTimeout(),
                this.cancelNoAppTimeout())
              : e == i.HW.Running
                ? ((this.m_sceneApplicationState = e),
                  this.cancelUnresponsiveTimeout(),
                  this.cancelNoAppTimeout(),
                  this.updateLatchedValues())
                : e == i.HW.None
                  ? (this.cancelUnresponsiveTimeout(),
                    this.m_sceneApplicationState != i.HW.None &&
                      this.startNoAppTimer())
                  : e == i.HW.Waiting &&
                    (this.m_sceneApplicationState != i.HW.Waiting &&
                      this.startUnresponsiveTimer(),
                    this.cancelNoAppTimeout()),
            this.log("updateTransitionState: " + i.HW[e]),
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
            VRHTML.VRApplications.GetSceneApplicationState() == i.HW.None &&
              this.resetLatchedValued();
        }
        updateLatchedValues() {
          if (VRHTML)
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
          this.m_rgMutualCapabilities =
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VRClientInternal.GetMutualSteamCapabilities();
        }
      }
      (0, n.Cg)([i.observable], s.prototype, "m_rgMutualCapabilities", void 0),
        (0, n.Cg)([a.o], s.prototype, "UpdateCapabilities", null);
      const o = new s();
      window.SteamMutualCapabilities = o;
    },
    3473: (e, t, r) => {
      "use strict";
      r.d(t, { f: () => s });
      var n = r(1635),
        i = r(3236),
        a = r(7813);
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
            (0, a.makeObservable)(this);
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
        (0, n.Cg)([a.observable], s.prototype, "m_nVolume", void 0),
        (0, n.Cg)([a.observable], s.prototype, "m_nMirrorVolume", void 0),
        (0, n.Cg)([a.observable], s.prototype, "m_nMicrophoneVolume", void 0),
        (0, n.Cg)([a.observable], s.prototype, "m_bMuted", void 0),
        (0, n.Cg)([a.observable], s.prototype, "m_bMirrorMuted", void 0),
        (0, n.Cg)([a.observable], s.prototype, "m_bMicrophoneMuted", void 0),
        (0, n.Cg)([a.computed], s.prototype, "muted", null),
        (0, n.Cg)([a.computed], s.prototype, "mirrorMuted", null),
        (0, n.Cg)([a.computed], s.prototype, "microphoneMuted", null),
        (0, n.Cg)([a.computed], s.prototype, "volume", null),
        (0, n.Cg)([a.computed], s.prototype, "mirrorVolume", null),
        (0, n.Cg)([a.computed], s.prototype, "microphoneVolume", null),
        (0, n.Cg)([i.o], s.prototype, "toggleMute", null),
        (0, n.Cg)([i.o], s.prototype, "toggleMirrorMute", null),
        (0, n.Cg)([i.o], s.prototype, "toggleMicrophoneMute", null),
        (0, n.Cg)([i.o], s.prototype, "setVolume", null),
        (0, n.Cg)([i.o], s.prototype, "setMirrorVolume", null),
        (0, n.Cg)([i.o], s.prototype, "setMicrophoneVolume", null),
        (0, n.Cg)([i.o], s.prototype, "onSystemVolumeChanged", null);
    },
    4074: (e, t, r) => {
      "use strict";
      r.d(t, { $k: () => c, D7: () => i, Y7: () => s, tC: () => l });
      var n = r(1526);
      function i(e) {
        try {
          return n.DX.deserializeBinary(e).toObject();
        } catch (e) {
          return void console.error(
            "Received a VRGamepadUI Message but couldn't deserialize the header!",
            null == e ? void 0 : e.message,
          );
        }
      }
      function a(e) {
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
          const i = new n.iM();
          i.set_error(t),
            i.set_origin(2),
            r instanceof Error
              ? i.set_description(r.message)
              : r && "string" == typeof r && i.set_description(r),
            console.error(
              "Sending VRGamepadUI Message Error Response",
              (0, n.Ut)(t),
              ":",
              i.description(),
            );
          const a = {
              message_id: this.m_Endpoint.CreateVRGamepadUIMessageId(),
              response_to_message_id: e.message_id,
              is_error_response: !0,
            },
            o = this.m_Endpoint.SendVRGamepadUIMessage(a, i);
          o == s.Success ||
            console.error(
              "Failed to send VRGamepadUI Message Error Response:",
              s[o],
              { requestHeader: e, responseHeader: a },
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
          const i = a(() =>
            r.msgClassRequest_t.deserializeBinary(t).toObject(),
          );
          if ("error" in i) return void this.SendErrorResponse(e, 7, i.error);
          const o = i.result,
            l = a(() => n(o));
          if ("error" in l) return void this.SendErrorResponse(e, 2, l.error);
          let c = l.result;
          null == c && (c = {});
          (c instanceof Promise ? c : Promise.resolve(c)).then(
            (t) => {
              const n = a(() =>
                r.msgClassResponse_t.fromObject(null != t ? t : {}),
              );
              if ("error" in n)
                return void this.SendErrorResponse(e, 6, n.error);
              const i = {
                  message_id: this.m_Endpoint.CreateVRGamepadUIMessageId(),
                  response_to_message_id: e.message_id,
                },
                o = this.m_Endpoint.SendVRGamepadUIMessage(i, n.result);
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
                      { requestHeader: e, responseHeader: i },
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
            const i = a(() => n.iM.deserializeBinary(t).toObject());
            if ("error" in i)
              return void console.error(
                "Received a VRGamepadUI Message error response, but couldn't deserialize it.",
                e,
              );
            const s = new o(i.result);
            return (
              console.warn(
                "Received a VRGamepadUI Message error response",
                s.message,
              ),
              void r.fnReject(s)
            );
          }
          const i = a(() =>
            r.msgExpectedResponseClass_t.deserializeBinary(t).toObject(),
          );
          "error" in i
            ? console.error(
                "Received a VRGamepadUI Message response, but couldn't deserialize it.",
                e,
              )
            : r.fnResolve(i.result);
        }
        SendVRGamepadUIRequest(e, t, r) {
          return new Promise((n, i) => {
            const a = (e) => {
              try {
                i(e);
              } catch (e) {
                console.error(
                  "Error rejecting VRGamepadUI Message request call:",
                  e,
                );
              }
            };
            if (!this.m_Endpoint.IsConnected())
              return void a(new o({ error: 4 }));
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
              fnReject: a,
            });
            const u = { name: e, message_id: l },
              d = this.m_Endpoint.SendVRGamepadUIMessage(u, t);
            d == s.Success ||
              a(new o({ error: 0, origin: 1, description: "Request " + s[d] }));
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
        aJ: () => m,
        kP: () => h,
        mO: () => p,
      });
      var n = r(1635),
        i = r(3236),
        a = r(2505),
        s = r.n(a),
        o = r(7813),
        l = r(6090),
        c = r(5349),
        u = r(3606);
      const d = 16,
        p = 0.2,
        m = 5,
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
            (this.apps = void 0),
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
              i = n.join("/");
            window.location.hash.substring(1) != i &&
              ((window.location.hash = i), (this.route = n));
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
          return Math.floor((m - p + 0.5 * h) / h);
        }
        SliderposToSupersample(e) {
          return e > m ? m : e < p ? p : e;
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
        (0, n.Cg)([i.o], v.prototype, "OpenWebSocketToHost", null),
        (0, n.Cg)([i.o], v.prototype, "OnWorkshopStateChangedMessage", null),
        (0, n.Cg)([i.o], v.prototype, "OnChangeRouteMessage", null),
        (0, n.Cg)([i.o], v.prototype, "OnAppConfigChangedMessage", null),
        (0, n.Cg)([i.o], v.prototype, "OnRefreshRateChangeMessage", null),
        (0, n.Cg)([o.action.bound], v.prototype, "onHashChanged", null),
        (0, n.Cg)([o.computed], v.prototype, "routePage", null),
        (0, n.Cg)([o.computed], v.prototype, "routePageSection", null),
        (0, n.Cg)([o.computed], v.prototype, "routePageSectionParams", null),
        (0, n.Cg)([o.action], v.prototype, "setRoutePage", null),
        (0, n.Cg)([o.action], v.prototype, "setRoutePageSection", null),
        (0, n.Cg)([o.action], v.prototype, "setRoutePageSectionParams", null),
        (0, n.Cg)([o.action], v.prototype, "setRoute", null),
        (0, n.Cg)([i.o], v.prototype, "SetDashboardFadeSupression", null),
        (0, n.Cg)([i.o], v.prototype, "SetDashboardForceBoundsVisible", null),
        (0, n.Cg)([i.o], v.prototype, "SetRestartRequired", null),
        (0, n.Cg)([i.o], v.prototype, "OnWebSocketOpen", null),
        (0, n.Cg)([i.o], v.prototype, "OnWebSocketClose", null),
        (0, n.Cg)([i.o], v.prototype, "WebSocketSend", null),
        (0, n.Cg)([i.o], v.prototype, "OnWebSocketMessage", null),
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
      r.d(t, { H: () => m });
      var n = r(1635),
        i = r(3236),
        a = r(7813),
        s = r(6090),
        o = r(9728),
        l = r(1333),
        c = r(1835),
        u = r(8313),
        d = r(1295);
      class p {
        constructor() {
          (this.m_bShowFloor = !1),
            (this.m_bShowFloorFar = !1),
            (this.m_fBackgroundDomeRadius = void 0),
            (this.m_fBackgroundOffsetX = void 0),
            (this.m_fBackgroundOffsetZ = void 0),
            (this.m_bBoundsVisible = void 0),
            (this.m_bHmdOutOfBoundsStrict = void 0),
            (this.m_bOkOutsideOfPlayspace = !1),
            (this.m_eRoomSetupStep = 0),
            (this.m_bRoomSetupAllowsCancel = !0),
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
              );
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
            (0 != this.m_eRoomSetupStep && 2 != this.m_eRoomSetupStep) ||
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
            var e, t, r, n, i;
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
      (0, n.Cg)([a.observable], p.prototype, "m_bShowFloor", void 0),
        (0, n.Cg)([a.observable], p.prototype, "m_bShowFloorFar", void 0),
        (0, n.Cg)(
          [a.observable],
          p.prototype,
          "m_fBackgroundDomeRadius",
          void 0,
        ),
        (0, n.Cg)([a.observable], p.prototype, "m_fBackgroundOffsetX", void 0),
        (0, n.Cg)([a.observable], p.prototype, "m_fBackgroundOffsetZ", void 0),
        (0, n.Cg)([a.observable], p.prototype, "m_bBoundsVisible", void 0),
        (0, n.Cg)(
          [a.observable],
          p.prototype,
          "m_bHmdOutOfBoundsStrict",
          void 0,
        ),
        (0, n.Cg)(
          [a.observable],
          p.prototype,
          "m_bOkOutsideOfPlayspace",
          void 0,
        ),
        (0, n.Cg)([a.observable], p.prototype, "m_eRoomSetupStep", void 0),
        (0, n.Cg)(
          [a.observable],
          p.prototype,
          "m_bRoomSetupAllowsCancel",
          void 0,
        ),
        (0, n.Cg)([a.computed], p.prototype, "supportsInHmdRoomSetup", null),
        (0, n.Cg)(
          [a.action],
          p.prototype,
          "startRequiredRoomSetupIfNeeded",
          null,
        ),
        (0, n.Cg)([a.action], p.prototype, "setRoomSetupStep", null),
        (0, n.Cg)([i.o], p.prototype, "Load", null),
        (0, n.Cg)([i.o], p.prototype, "Save", null),
        (0, n.Cg)(
          [a.action.bound],
          p.prototype,
          "onChaperoneStatusEvents",
          null,
        );
      const m = new p();
      window.ConstructStore = m;
    },
    3689: (e, t, r) => {
      "use strict";
      r.d(t, { DZ: () => y, g: () => S, yE: () => _ });
      var n = r(1635),
        i = r(7813),
        a = r(1651),
        s = r(1909),
        o = r(3714),
        l = r(3696),
        c = (r(6090), r(1333)),
        u = (r(1835), r(1295)),
        d = r(9728),
        p = r(3606),
        m = r(6379),
        h = r(4728);
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
      (0, n.Cg)([i.observable], g.prototype, "m_bAlive", void 0),
        (0, n.Cg)([i.observable], g.prototype, "m_PartialParams", void 0),
        (0, n.Cg)([i.computed.struct], g.prototype, "partialParams", null),
        (0, n.Cg)([i.computed], g.prototype, "isAlive", null),
        (0, n.Cg)([i.computed], g.prototype, "isValid", null),
        (0, n.Cg)([i.computed], g.prototype, "isActive", null),
        (0, n.Cg)([i.computed], g.prototype, "isEnabled", null),
        (0, n.Cg)([i.action], g.prototype, "SetParams", null),
        (0, n.Cg)([i.action], g.prototype, "Destroy", null),
        (0, n.Cg)([i.computed.struct], g.prototype, "protoForSteam", null);
      let v = null;
      const _ = () => (v || ((v = (0, h.Tg)(0, 16383)), (v *= 1e5)), v);
      class b {
        constructor() {
          (this.m_unNextDashboardActionID = null),
            (this.m_mapActions = new Map()),
            (0, i.makeObservable)(this),
            (this.m_unNextDashboardActionID = _()),
            console.log("ActionID Base:", this.m_unNextDashboardActionID);
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
                (y[8] = S.CreateAction(
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
                (y[2] = S.CreateAction(
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
                  (y[3] = S.CreateAction(
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
                  (y[4] = S.CreateAction(
                    () => {
                      if (m.c.showRoomViewButton)
                        return {
                          display_name: (0, o.we)("#Toggle_Room_View"),
                          invocation: 2,
                          active: m.c.roomViewEnabled,
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
                        : c.HR.SetSettingsValue(p.Hh, e);
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
            (0, i.when)(() => !r.isAlive).then(() =>
              (0, i.runInAction)(() => {
                this.m_mapActions.get(r.actionID) == r &&
                  this.m_mapActions.delete(r.actionID);
              }),
            ),
            t && r.RegisterForActionInvoked(t),
            r
          );
        }
        GetAction(e) {
          return this.m_mapActions.get(e);
        }
      }
      (0, n.Cg)([i.observable], b.prototype, "m_mapActions", void 0),
        (0, n.Cg)([i.action], b.prototype, "CreateAction", null);
      const S = new b();
      window.dashboardActionStore = S;
      const y = {};
      window.globalActions = y;
    },
    1835: (e, t, r) => {
      "use strict";
      r.d(t, {
        Nr: () => S,
        SF: () => b,
        SW: () => M,
        Sm: () => C,
        tb: () => y,
      });
      var n = r(1635),
        i = r(6090),
        a = r(3236),
        s = r(7813),
        o = r(8696),
        l = r(1333),
        c = r(3606),
        u = r(5349),
        d = r(4007),
        p = r(4963),
        m = r(6013),
        h = r(8803),
        g = r(9728),
        v = r(795),
        _ = r(9978);
      const b = [c.Sx, void 0].filter(Boolean);
      var S, y, f;
      function R(e) {
        return (
          !(!(null == e ? void 0 : e.startsWith(c.bl)) || e == c.wi) || e == c.P
        );
      }
      !(function (e) {
        (e[(e.Large = 0)] = "Large"), (e[(e.Medium = 1)] = "Medium");
      })(S || (S = {})),
        (function (e) {
          (e[(e.PlayArea = 0)] = "PlayArea"),
            (e[(e.Dashboard = 1)] = "Dashboard");
        })(y || (y = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.View = 1)] = "View"),
            (e[(e.Theater = 2)] = "Theater");
        })(f || (f = {}));
      class w {
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
            (this.m_eVSMode = f.None),
            (this.m_sVSOverlayKey = void 0),
            (this.m_eTheaterStereo = i.MQ.Mono),
            (this.m_eIncognitoMode = i.rx.Unavailable),
            (this.m_mapOverlayState = new Map()),
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
                    p.u.Instance.playSound(
                      e ? p.j.DashboardOpen : p.j.DashboardClose,
                    ),
                    (this.m_bPreviousDashboardVisible = e);
                },
              ),
              this.SetVersionInfoPathProperties();
          });
        }
        SetVersionInfoPathProperties() {
          var e;
          const t = new m.M2();
          t.set_version(
            null ===
              (e =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.SteamVRVersion) || void 0 === e
              ? void 0
              : e.call(VRHTML),
          ),
            t.set_webpack_build_timestamp(1758046478),
            (0, h.Z)(t);
        }
        LoadSessionDevData() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            var e, t, r, n, i;
            const a = JSON.parse(
              null !== (e = sessionStorage.getItem(w.k_strSessionStorageKey)) &&
                void 0 !== e
                ? e
                : "{}",
            );
            (this.m_bShowLegacyDashboardBar =
              null !== (t = a.m_bShowLegacyBar) && void 0 !== t && t),
              (this.m_fVRGamepadUI_MetersPerPixel =
                null !== (r = a.m_fVRGamepadUI_MetersPerPixel) && void 0 !== r
                  ? r
                  : (0.167 / 120) * 1.1),
              (this.m_fVRGamepadUI_GlobalActiveOverlayScale =
                null !== (n = a.m_fVRGamepadUI_GlobalActiveOverlayScale) &&
                void 0 !== n
                  ? n
                  : 1.17);
            for (const e of null !== (i = a.m_rgPooledPopups) && void 0 !== i
              ? i
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
            sessionStorage.setItem(w.k_strSessionStorageKey, JSON.stringify(e));
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
          for (const e of this.m_mapOverlayState.values())
            if (e.dockLocation == o.$z.Theater) return !0;
          return !1;
        }
        getTheaterOverlay() {
          for (const [e, t] of this.m_mapOverlayState.entries())
            if (t.dockLocation == o.$z.Theater) return e;
          return null;
        }
        getBootOverlay() {
          for (const [e, t] of this.m_mapOverlayState.entries())
            if (t.dockLocation == o.$z.Boot) return e;
          return null;
        }
        get priorityGamepadFocusOverlay() {
          const e = [o.$z.Theater, o.$z.World, o.$z.RightHand, o.$z.LeftHand];
          for (const t of e)
            for (const [e, r] of this.m_mapOverlayState.entries())
              if (r.dockLocation == t && R(e)) return e;
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
            M.isVRGamepadUI &&
            l.HR.settings.get(c.nJ)
          );
        }
        ToggleTheaterCurvature() {
          const e =
            this.eTheaterCurvature == o.Do.Curved ? o.Do.Flat : o.Do.Curved;
          l.HR.SetSettingsValue(c.Ju, e.toString());
        }
        ToggleTheaterStereo() {
          const e =
            this.m_eTheaterStereo == i.MQ.Mono ? i.MQ.Parallel : i.MQ.Mono;
          this.m_eTheaterStereo = e;
        }
        HideTheaterOverlay(e = o.$z.Dashboard, t) {
          for (const [r, n] of this.m_mapOverlayState.entries())
            n.dockLocation == o.$z.Theater &&
              ((n.dockLocation = e),
              t &&
                (null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.VROverlay.ShowDashboard(r)));
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
          return d.Q.GetOverlayFlag(c.wi, i.NB.VisibleInDashboard);
        }
        get isVRGamepadUI() {
          return (
            !!l.HR.settings.get(c.qt) ||
            this.isVRGamepadUIReady ||
            d.Q.BOverlayExists(c.Vx)
          );
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
          }[M.currentDashboardPosition];
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
          }[M.currentDashboardPosition];
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
          const r = M.currentDashboardPosition;
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
          if (M.activeLinkClient && g.G.Instance.SceneAppIsVRLink) return !1;
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
      }
      function C() {
        return (0, _.useObserver)(() => M.isVRGamepadUI);
      }
      (w.k_strSessionStorageKey = "DashboardStoreSessionStorage"),
        (0, n.Cg)([s.observable], w.prototype, "m_bDashboardVisible", void 0),
        (0, n.Cg)(
          [s.observable],
          w.prototype,
          "m_bShowLegacyDashboardBar",
          void 0,
        ),
        (0, n.Cg)([s.observable], w.prototype, "m_bVS", void 0),
        (0, n.Cg)([s.observable], w.prototype, "m_eVSMode", void 0),
        (0, n.Cg)([s.observable], w.prototype, "m_sVSOverlayKey", void 0),
        (0, n.Cg)([s.observable], w.prototype, "m_eTheaterStereo", void 0),
        (0, n.Cg)([s.observable], w.prototype, "m_eIncognitoMode", void 0),
        (0, n.Cg)([s.observable], w.prototype, "m_mapOverlayState", void 0),
        (0, n.Cg)(
          [s.observable],
          w.prototype,
          "m_mapActivePooledPopupRequests",
          void 0,
        ),
        (0, n.Cg)(
          [s.observable],
          w.prototype,
          "m_fVRGamepadUI_MetersPerPixel",
          void 0,
        ),
        (0, n.Cg)(
          [s.observable],
          w.prototype,
          "m_fVRGamepadUI_GlobalActiveOverlayScale",
          void 0,
        ),
        (0, n.Cg)([s.observable], w.prototype, "m_bGamepadFocusActive", void 0),
        (0, n.Cg)([s.observable], w.prototype, "m_bLinkStreamActive", void 0),
        (0, n.Cg)([s.observable], w.prototype, "m_bIsLinkClient", void 0),
        (0, n.Cg)([s.observable], w.prototype, "m_bIsLinkServer", void 0),
        (0, n.Cg)(
          [s.observable],
          w.prototype,
          "m_dashboardUserDistance",
          void 0,
        ),
        (0, n.Cg)([s.observable], w.prototype, "m_dashboardUserScale", void 0),
        (0, n.Cg)([s.observable], w.prototype, "m_unActiveFrameID", void 0),
        (0, n.Cg)([s.computed], w.prototype, "activeFrame", null),
        (0, n.Cg)([s.observable], w.prototype, "m_unMainSteamFrameID", void 0),
        (0, n.Cg)([s.computed], w.prototype, "mainSteamFrame", null),
        (0, n.Cg)([s.action], w.prototype, "SetMainSteamFrame", null),
        (0, n.Cg)(
          [s.observable],
          w.prototype,
          "m_bSuppressingFadeExternal",
          void 0,
        ),
        (0, n.Cg)([s.observable], w.prototype, "m_bTrackingRecording", void 0),
        (0, n.Cg)([s.observable], w.prototype, "m_bKeyboardVisible", void 0),
        (0, n.Cg)(
          [s.observable],
          w.prototype,
          "m_bKeyboardDockedInDashboard",
          void 0,
        ),
        (0, n.Cg)([s.observable], w.prototype, "m_sKeyboardOverlayKey", void 0),
        (0, n.Cg)([s.observable], w.prototype, "m_nKeyboardFlags", void 0),
        (0, n.Cg)(
          [s.observable],
          w.prototype,
          "s_ControlBarCurrentlyShownTooltip",
          void 0,
        ),
        (0, n.Cg)([a.o], w.prototype, "LoadSessionDevData", null),
        (0, n.Cg)([a.o], w.prototype, "SaveSessionDevData", null),
        (0, n.Cg)(
          [s.computed],
          w.prototype,
          "showLoadingThrobberOrBootOverlay",
          null,
        ),
        (0, n.Cg)([s.computed], w.prototype, "isTheaterMode", null),
        (0, n.Cg)(
          [s.computed],
          w.prototype,
          "priorityGamepadFocusOverlay",
          null,
        ),
        (0, n.Cg)([s.computed], w.prototype, "eTheaterCurvature", null),
        (0, n.Cg)([s.computed], w.prototype, "isUnifiedDashboard", null),
        (0, n.Cg)([s.action], w.prototype, "setIncognitoMode", null),
        (0, n.Cg)([s.computed], w.prototype, "showIncognitoModeAction", null),
        (0, n.Cg)([s.computed], w.prototype, "WorldLightingGain", null),
        (0, n.Cg)([s.computed], w.prototype, "isVRGamepadUIReady", null),
        (0, n.Cg)([s.computed], w.prototype, "isVRGamepadUI", null),
        (0, n.Cg)([a.o], w.prototype, "updateBodyClasses", null),
        (0, n.Cg)([s.action.bound], w.prototype, "onGamepadFocusChanged", null),
        (0, n.Cg)(
          [s.action.bound],
          w.prototype,
          "onLinkStreamStatusEvents",
          null,
        ),
        (0, n.Cg)(
          [s.action.bound],
          w.prototype,
          "onTrackingRecordingChanged",
          null,
        ),
        (0, n.Cg)([s.action.bound], w.prototype, "onKeyboardInfoChanged", null),
        (0, n.Cg)([s.computed], w.prototype, "dashboardDistance", null),
        (0, n.Cg)([s.computed], w.prototype, "dashboardTranslation", null),
        (0, n.Cg)([s.computed], w.prototype, "dashboardScale", null),
        (0, n.Cg)([s.computed], w.prototype, "sceneAppDimmingActive", null);
      const M = new w();
      window.DashboardStore = M;
    },
    3514: (e, t, r) => {
      "use strict";
      r.d(t, {
        HC: () => v,
        Iu: () => n,
        ND: () => b,
        tW: () => _,
        wI: () => S,
      });
      var n,
        i = r(1635),
        a = r(7813),
        s = r(296),
        o = r(6090),
        l = r(6540),
        c = r(1835),
        u = r(921),
        d = r(2156),
        p = r(3689),
        m = r(3481),
        h = r(9383),
        g = r(795);
      !(function (e) {
        (e[(e.Uninitialized = 0)] = "Uninitialized"),
          (e[(e.Pending = 1)] = "Pending"),
          (e[(e.Alive = 2)] = "Alive"),
          (e[(e.Destroyed = 3)] = "Destroyed");
      })(n || (n = {}));
      class v {
        constructor(e) {
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
            (this.m_setOwnedActions = new Set()),
            (this.m_unNextPageID = 1),
            (this.m_unFrameID = e),
            (this.m_sTitle = `Untitled Frame ${e}`),
            (0, a.makeObservable)(this);
        }
        get frameID() {
          return this.m_unFrameID;
        }
        get state() {
          return this.m_eState;
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
            tab_id: m.J.GetTabIDForFrame(this),
            associated_frame_id: this.frameID,
            display_name: this.title,
            icon: this.icon,
            visible_in_dashboard_bar: this.tabVisibility.bVisibleInDashboardBar,
            visible_in_dashboard_bar_hamburger_menu:
              this.tabVisibility.bVisibleInDashboardHamburgerMenu,
          };
        }
        get frameMenuPopupID() {
          return this.m_unFrameMenuPopupID;
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
            (this.m_DestroyedPageAutorunHandle = (0, a.reaction)(
              () => this.pages.filter((e) => e.state == g.JP.Destroyed),
              this.OnPagesDestroyed,
            )),
            (this.m_eState = n.Pending));
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
          const t = p.g.CreateAction(...e);
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
            i = new Set();
          return (
            r.menu.items_for_left_frame_menu.forEach((e) => i.add(e.action_id)),
            r.menu.items_for_tab_frame_menu.forEach((e) => i.add(e.action_id)),
            (r.defined_actions = [...i]
              .map((e) => {
                var t;
                return null === (t = p.g.GetAction(e)) || void 0 === t
                  ? void 0
                  : t.protoForSteam;
              })
              .filter(Boolean)),
            r
          );
        }
        OnFrameUpdateResultFromSteam(e) {
          this.m_eState != n.Destroyed &&
            (this.m_eState == n.Pending && (this.m_eState = n.Alive),
            (this.m_unFrameMenuPopupID = e.frame_menu_dashboard_popup_id));
        }
      }
      (0, i.Cg)([a.observable], v.prototype, "m_eState", void 0),
        (0, i.Cg)([a.observable], v.prototype, "m_sTitle", void 0),
        (0, i.Cg)([a.observable], v.prototype, "m_mapPages", void 0),
        (0, i.Cg)([a.observable], v.prototype, "m_unActivePageID", void 0),
        (0, i.Cg)([a.observable], v.prototype, "m_unFrameMenuPopupID", void 0),
        (0, i.Cg)([a.observable.struct], v.prototype, "m_Icon", void 0),
        (0, i.Cg)(
          [a.observable.struct],
          v.prototype,
          "m_TabVisibility",
          void 0,
        ),
        (0, i.Cg)(
          [a.observable],
          v.prototype,
          "m_rgMenuItems_LeftFrameMenu",
          void 0,
        ),
        (0, i.Cg)(
          [a.observable],
          v.prototype,
          "m_rgMenuItems_TabFrameMenu",
          void 0,
        ),
        (0, i.Cg)([a.computed], v.prototype, "state", null),
        (0, i.Cg)([a.action], v.prototype, "SetTitle", null),
        (0, i.Cg)([a.computed], v.prototype, "title", null),
        (0, i.Cg)([a.action], v.prototype, "SetIcon", null),
        (0, i.Cg)([a.computed.struct], v.prototype, "icon", null),
        (0, i.Cg)([a.action], v.prototype, "SetTabVisibility", null),
        (0, i.Cg)([a.computed.struct], v.prototype, "tabVisibility", null),
        (0, i.Cg)([a.computed], v.prototype, "isCurrentlyVisible", null),
        (0, i.Cg)([a.computed], v.prototype, "activePageID", null),
        (0, i.Cg)([a.computed], v.prototype, "activePage", null),
        (0, i.Cg)([a.computed], v.prototype, "isActiveDashboardFrame", null),
        (0, i.Cg)([a.computed], v.prototype, "pageIDs", null),
        (0, i.Cg)([a.computed], v.prototype, "pages", null),
        (0, i.Cg)(
          [a.computed],
          v.prototype,
          "associatedSummonOverlayKeys",
          null,
        ),
        (0, i.Cg)([a.computed.struct], v.prototype, "tab", null),
        (0, i.Cg)([a.computed], v.prototype, "frameMenuPopupID", null),
        (0, i.Cg)([a.action], v.prototype, "Init", null),
        (0, i.Cg)([a.action.bound], v.prototype, "OnPagesDestroyed", null),
        (0, i.Cg)([a.action], v.prototype, "DestroyFrame", null),
        (0, i.Cg)([a.action], v.prototype, "CreatePage", null),
        (0, i.Cg)([a.action], v.prototype, "SwitchToPage", null),
        (0, i.Cg)([a.action], v.prototype, "SetMenuItems", null),
        (0, i.Cg)([a.computed.struct], v.prototype, "protoForSteam", null),
        (0, i.Cg)(
          [a.action.bound],
          v.prototype,
          "OnFrameUpdateResultFromSteam",
          null,
        );
      const _ = l.createContext({ frame: void 0, page: void 0 });
      function b() {
        return l.useContext(_);
      }
      const S = (0, s.PA)(
        l.forwardRef(function (e, t) {
          var r;
          const {
              children: i,
              title: s,
              iconEnum: c,
              iconAppID: p,
              iconOverlayKey: h,
              iconHWND: g,
              showTabInDashboardBar: v,
              showTabInDashboardHamburgerMenu: b,
            } = e,
            S = l.useMemo(() => m.J.CreateFrame(), []);
          (0, u.D5)(t, S);
          const y = l.useMemo(() => {
            const e = { enum: c, appid: p, overlay: h, hwnd: g };
            if (!Object.values(e).every((e) => void 0 === e)) return e;
          }, [c, p, h, g]);
          return (
            l.useEffect(() => {
              (0, a.runInAction)(() => {
                s && S.SetTitle(s),
                  y && S.SetIcon(y),
                  S.SetTabVisibility({
                    bVisibleInDashboardBar: v,
                    bVisibleInDashboardHamburgerMenu: b,
                  }),
                  S.state == n.Uninitialized && S.Init();
              });
            }, [S, s, y, v, b]),
            l.useEffect(() => () => S.DestroyFrame(), [S]),
            l.createElement(
              _.Provider,
              { value: { frame: S, page: void 0 } },
              "function" == typeof i ? i(S) : i,
              S.frameMenuPopupID &&
                l.createElement(d.O, {
                  popupRequestID: S.frameMenuPopupID,
                  forceReparentToTransformID:
                    null === (r = S.activePage) || void 0 === r
                      ? void 0
                      : r.GetPanelAnchorID(o.Oi.CenterLeft),
                }),
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
        U0: () => p,
        Vu: () => m,
        xE: () => c,
      });
      var n = r(296),
        i = r(6540),
        a = r(3606),
        s = (r(4007), r(3514)),
        o = r(1139);
      const l = i.createContext({
        CreateMenuItemID: void 0,
        OnMenuItemRender: void 0,
        OnMenuItemMounted: void 0,
        OnMenuItemUnmounted: void 0,
      });
      function c(e) {
        const { frame: t } = (0, s.ND)();
        if (!t)
          throw new Error("<FrameMenu> must be inside a <Frame> component.");
        const r = i.useRef(1),
          n = i.useRef([]),
          a = i.useRef([]),
          c = i.useMemo(() => new Map(), []),
          u = i.useRef(!1),
          d = i.useRef(!0),
          p = i.useCallback(() => {
            const e = n.current.map((e) => c.get(e)),
              r = a.current.map((e) => c.get(e));
            t.SetMenuItems(e, r);
          }, []);
        i.useEffect(() => () => t.SetMenuItems([], []), []),
          u.current &&
            ((u.current = !1),
            (d.current = !0),
            (n.current = []),
            (a.current = []));
        const m = (0, o.CH)();
        i.useEffect(() => {
          !d.current ||
            (0 == n.current.length && 0 == a.current.length) ||
            (p(), (d.current = !1));
        });
        const h = {
          CreateMenuItemID: () => r.current++,
          OnMenuItemRender: (e, t, r) => {
            c.set(e, t),
              d.current
                ? (r.bVisibleInFrameMenu && n.current.push(e),
                  r.bVisibleInTabMenu && a.current.push(e))
                : p();
          },
          OnMenuItemMounted: () => {
            (u.current = !0), m();
          },
          OnMenuItemUnmounted: (e) => {
            c.delete(e),
              (n.current = n.current.filter((t) => t != e)),
              (a.current = a.current.filter((t) => t != e)),
              p();
          },
        };
        return i.createElement(l.Provider, { value: h }, e.children);
      }
      const u = i.createContext({
        bVisibleInFrameMenu: !0,
        bVisibleInTabMenu: !0,
      });
      function d(e) {
        const { onlyVisibleIn: t, children: r } = e,
          n = {
            bVisibleInFrameMenu: "both" == t || "left-frame-menu" == t,
            bVisibleInTabMenu: "both" == t || "bar-tab-menu" == t,
          };
        return i.createElement(u.Provider, { value: n }, r);
      }
      function p(e) {
        const { params: t } = e,
          r = i.useContext(l);
        if (!r)
          throw new Error(
            "<FrameMenuItem> must be inside a <Frame> component.",
          );
        const a = i.useContext(u),
          s = i.useMemo(() => r.CreateMenuItemID(), []);
        i.useEffect(
          () => (r.OnMenuItemMounted(), () => r.OnMenuItemUnmounted(s)),
          [s],
        );
        const o = (0, n.q3)(() => ("function" == typeof t ? t() : t));
        return r.OnMenuItemRender(s, o, a), null;
      }
      function m(e) {
        const { actionParams: t } = e,
          { frame: r } = (0, s.ND)();
        if (!r)
          throw new Error("<FrameMenuItem_Action> must be inside a <Frame>.");
        const n = i.useRef(void 0);
        n.current = e.onInvoked;
        const a = i.useMemo(
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
          i.useLayoutEffect(() => (null == a ? void 0 : a.SetParams(t))),
          i.useEffect(() => () => (null == a ? void 0 : a.Destroy()), [a]),
          i.createElement(p, { params: { type: 3, action_id: a.actionID } })
        );
      }
      function h(e) {
        return i.createElement(p, { params: { type: 1 } });
      }
      function g(e) {
        const { frame: t } = (0, s.ND)();
        return i.createElement(p, {
          params: () => {
            var e;
            return {
              type: 4,
              steam_main_menu_options: {
                allow_show_as_active:
                  (null === (e = null == t ? void 0 : t.activePage) ||
                  void 0 === e
                    ? void 0
                    : e.summonOverlayKey) == a.wi,
              },
            };
          },
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
        sj: () => m,
      });
      var n,
        i = r(1635),
        a = r(7813),
        s = r(296),
        o = r(6090),
        l = r(6540),
        c = r(3606),
        u = r(921),
        d = r(4007),
        p = r(3514);
      !(function (e) {
        (e[(e.Alive = 0)] = "Alive"), (e[(e.Destroyed = 1)] = "Destroyed");
      })(n || (n = {}));
      class m {
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
            (0, a.makeObservable)(this);
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
      (0, i.Cg)([a.observable], m.prototype, "m_eState", void 0),
        (0, i.Cg)([a.observable], m.prototype, "m_sSummonOverlayKey", void 0),
        (0, i.Cg)(
          [a.observable],
          m.prototype,
          "m_bExternalDashboardOverlay",
          void 0,
        ),
        (0, i.Cg)([a.computed], m.prototype, "state", null),
        (0, i.Cg)([a.computed], m.prototype, "summonOverlayKey", null),
        (0, i.Cg)(
          [a.computed],
          m.prototype,
          "isExternalDashboardOverlay",
          null,
        ),
        (0, i.Cg)([a.computed], m.prototype, "isActivePage", null),
        (0, i.Cg)([a.action], m.prototype, "DestroyPage", null),
        (0, i.Cg)([a.action], m.prototype, "SetSummonOverlayKey", null),
        (0, i.Cg)(
          [a.action],
          m.prototype,
          "SetIsExternalDashboardOverlay",
          null,
        );
      const h = l.forwardRef(function (e, t) {
          const {
              children: r,
              summonOverlayKey: n,
              renderChildren: i = "when-visible",
            } = e,
            { frame: a } = (0, p.ND)(),
            c = l.useMemo(() => a.CreatePage(), [a]);
          l.useEffect(() => {
            c.SetSummonOverlayKey(n);
          }, [c, a, n]),
            (0, u.D5)(t, c),
            l.useEffect(() => () => c.DestroyPage(), [c]);
          const d = `frame:${a.frameID}:page:${c.pageID}:mountable`,
            m = (0, s.q3)(() => a.isActiveDashboardFrame && c.isActivePage);
          return l.createElement(
            p.tW.Provider,
            { value: { frame: a, page: c } },
            (m || "always" == i) &&
              l.createElement(
                o.IS,
                { id: d },
                "function" == typeof r ? r(a, c) : r,
              ),
            m &&
              l.createElement(
                o.dL,
                { parent_id: b },
                l.createElement(
                  p.tW.Provider,
                  { value: { frame: a, page: c } },
                  l.createElement(o.rF, { mountedId: d }),
                ),
              ),
          );
        }),
        g = l.forwardRef(function (e, t) {
          var r;
          const { requireExternalOverlay: n = !0, overlayKey: a } = e,
            p = (0, i.Tt)(e, ["requireExternalOverlay", "overlayKey"]),
            m = l.useCallback(
              (e) => {
                null == e || e.SetIsExternalDashboardOverlay(!0),
                  (0, u.cZ)(t, e);
              },
              [t],
            ),
            g = (0, s.q3)(() => d.Q.BOverlayExists(a));
          return n && !g
            ? null
            : l.createElement(
                h,
                Object.assign({}, p, {
                  summonOverlayKey:
                    null !== (r = e.summonOverlayKey) && void 0 !== r ? r : a,
                  ref: m,
                }),
                l.createElement(o.rF, { mountedId: (0, o.nX)(c.cb, a) }),
              );
        }),
        v = [
          o.Oi.TopCenter,
          o.Oi.CenterLeft,
          o.Oi.CenterRight,
          o.Oi.BottomCenter,
        ];
      function _(e) {
        const { frame: t, page: r } = l.useContext(p.tW);
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
        EK: () => a.EK,
        HC: () => i.HC,
        JJ: () => n.J,
        JP: () => a.JP,
        JQ: () => a.JQ,
        Oo: () => s.Oo,
        P9: () => a.P9,
        QI: () => s.QI,
        RG: () => s.RG,
        U0: () => s.U0,
        Vu: () => s.Vu,
        gU: () => a.gU,
        wI: () => i.wI,
        xE: () => s.xE,
      });
      var n = r(3481),
        i = r(3514),
        a = r(9383),
        s = r(5323);
    },
    4007: (e, t, r) => {
      "use strict";
      r.d(t, { Q: () => o });
      var n = r(1635),
        i = r(7813),
        a = r(1651);
      class s {
        constructor() {
          (this.m_mapAllOverlays = new Map()),
            (this.m_rgOverlayCreatedCallbacks = new a.l()),
            (this.m_rgOverlayDestroyedCallbacks = new a.l()),
            (0, i.makeObservable)(this);
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
      (0, n.Cg)([i.observable], s.prototype, "m_mapAllOverlays", void 0),
        (0, n.Cg)([i.computed], s.prototype, "overlays", null),
        (0, n.Cg)([i.action.bound], s.prototype, "OnAllOverlayInfo", null);
      const o = new s();
      window.OverlayStore = o;
    },
    3246: (e, t, r) => {
      "use strict";
      r.d(t, { r: () => u });
      var n = r(1635),
        i = r(3236),
        a = r(7813),
        s = r(1909),
        o = r(4007);
      class l {
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
          (e = this.adaptDashboardPopupRequestForLegacySteamClients(e)),
            this.m_mapActivePooledPopupRequests.set(e.dashboard_popup_id, e);
        }
        adaptDashboardPopupRequestForLegacySteamClients(e) {
          return c(e)
            ? Object.assign(Object.assign({}, e), {
                parent_overlay_key: void 0,
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
          return this.requests.find(c);
        }
      }
      function c(e) {
        return e.popup_overlay_key.startsWith("valve.steam.gamepadui.mainmenu");
      }
      (l.k_strSessionStorageKey = "PooledPopupStoreSessionStorage"),
        (0, n.Cg)(
          [a.observable],
          l.prototype,
          "m_mapActivePooledPopupRequests",
          void 0,
        ),
        (0, n.Cg)([a.observable], l.prototype, "m_mapRemoteVSIds", void 0),
        (0, n.Cg)([a.computed], l.prototype, "requestIDs", null),
        (0, n.Cg)([a.computed], l.prototype, "requests", null),
        (0, n.Cg)([a.action.bound], l.prototype, "onShowDashboardPopup", null),
        (0, n.Cg)([a.action.bound], l.prototype, "onHideDashboardPopup", null),
        (0, n.Cg)([i.o], l.prototype, "LoadSessionDevData", null),
        (0, n.Cg)([i.o], l.prototype, "SaveSessionDevData", null),
        (0, n.Cg)(
          [a.computed],
          l.prototype,
          "legacyFloatingMainMenuPopup",
          null,
        );
      const u = new l();
      window.PooledPopupStore = u;
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
    5349: (e, t, r) => {
      "use strict";
      r.d(t, { cQ: () => He, eo: () => Ve });
      var n = r(1635),
        i = r(6090),
        a = r(3236),
        s = r(7813),
        o = r(6540),
        l = r(5818),
        c = r(6138),
        u = r(3606),
        d = r(3714),
        p = r(1835);
      class m {
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
          return h || (h = new m()), h;
        }
        onSetDashboardSessionId(e) {
          (null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.VROverlay.ThisOverlayKey()) != u.C6 &&
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
          const t = p.SW.currentDashboardPosition;
          (this.m_lastDashboardSessionId = ++this.m_dashboardSessionCount),
            (this.m_dashboardSession = {
              dashboardSessionId: this.m_lastDashboardSessionId,
              sReason: e,
              appAtStart:
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRApplications.GetSceneApplicationKey(),
              position: null != t ? Ve[t] : void 0,
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
      (0, n.Cg)([a.o], m.prototype, "onSetDashboardSessionId", null);
      let h = null;
      var g,
        v = r(6575),
        _ = r(9728),
        b = r(1333),
        S = r(1370),
        y = r(9978),
        f = r(8696),
        R = r(2563),
        w = r(3350),
        C = r(2267),
        M = r(2928),
        T = r(1139);
      let E = (g = class extends o.Component {
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
              (e) => !g.s_failedImages.includes(e),
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
            g.s_failedImages.push(this.m_imageSources[this.m_imageIndex]),
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
            t = o.createElement("div", { className: "Icon", style: e });
          return (
            this.state.width / this.state.height != 600 / 900 &&
              (t = o.createElement(
                o.Fragment,
                null,
                o.createElement("div", {
                  className: "IconBackgroundBlur",
                  style: e,
                }),
                t,
              )),
            o.createElement(
              "div",
              {
                className: (0, T.FH)("PortraitAppImageContainer", [
                  "Fallback",
                  this.state.isFallback,
                ]),
              },
              this.state.image && t,
              o.createElement("div", { className: "Title" }, this.props.title),
              this.props.children && this.props.children,
            )
          );
        }
      });
      (E.defaultProps = {
        fallbackImageUrl: "images/appimage_default_portrait.png",
      }),
        (E.s_failedImages = []),
        (0, n.Cg)([a.o], E.prototype, "loadNextImage", null),
        (0, n.Cg)([a.o], E.prototype, "onLoad", null),
        (0, n.Cg)([a.o], E.prototype, "onError", null),
        (E = g = (0, n.Cg)([S.PA], E));
      var V = r(427),
        D = r(795);
      const k = (e) => {
        if (null == e) return "";
        let t = e.image_path_capsule || e.image_path;
        return t.startsWith("/app/image?") && (t += "&aspect=portrait"), t;
      };
      function O(e) {
        const t = (0, y.useObserver)(
            () => _.G.Instance.SceneApplicationState != i.HW.None,
          ),
          r = (0, y.useObserver)(() => {
            if (_.G.Instance.SceneAppKey.startsWith(u.kk)) {
              const e = Number.parseInt(
                _.G.Instance.SceneAppKey.substring(u.kk.length),
              );
              if (Number.isInteger(e)) return e;
            }
          });
        return o.createElement(
          D.wI,
          {
            title: (0, d.we)("#Now_Playing"),
            showTabInDashboardBar: t,
            iconEnum: 17,
            iconAppID: r,
          },
          o.createElement(
            D.P9,
            { summonOverlayKey: u.dw },
            o.createElement(A, {
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
      class A extends o.Component {
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
          const e = _.G.Instance.SceneAppKey;
          M.o.OpenDeepLink(M.$.Name, e);
        }
        onOpenAppVideoSettings() {
          const e = _.G.Instance.SceneAppKey;
          C.xR.OpenDeepLink(C.a5.Name, e);
        }
        render() {
          var e;
          const t = _.G.Instance.SceneAppKey,
            r = _.G.Instance.SceneAppName,
            n = _.G.Instance.SceneApplicationState,
            a = _.G.Instance.SceneAppIsHome,
            s = b.HR.settings.get("/settings/dashboard/allowAppQuitting"),
            l = !(
              null !==
                (e = b.HR.settings.get("/settings/dashboard/arcadeMode")) &&
              void 0 !== e &&
              e
            ),
            u = b.HR.apps && b.HR.apps.find((e) => e.key == t);
          let p = !1;
          switch (n) {
            case i.HW.Quitting:
            case i.HW.Starting:
            case i.HW.Waiting:
              p = !0;
          }
          return o.createElement(
            R.L_,
            {
              visible: !0,
              debugName: "nowplaying",
              additionalClassNames: "NowPlaying",
              scrollable: !1,
            },
            o.createElement(
              "div",
              { className: "ArtworkColumn" },
              o.createElement(E, { appkey: t, title: r, imageUrl: k(u) }),
            ),
            o.createElement(
              "div",
              { className: "InfoColumn" },
              o.createElement("div", { className: "NowPlayingAppTitle" }, r),
              o.createElement(
                c.$,
                {
                  className: "ButtonControl Colorful",
                  onClick: this.onReturnToGame,
                },
                a ? (0, d.we)("#Return_To_Home") : (0, d.we)("#Return_To_Game"),
              ),
              l &&
                o.createElement(
                  V.CS,
                  {
                    icon: V.Xb.PopOut,
                    onClick: this.onOpenAppControllerBindingSettings,
                  },
                  (0, d.we)("#Controller_Bindings"),
                ),
              l &&
                o.createElement(
                  V.CS,
                  { icon: V.Xb.PopOut, onClick: this.onOpenAppVideoSettings },
                  (0, d.we)("#App_Video_Settings"),
                ),
              s &&
                o.createElement(
                  c.$,
                  { className: "ButtonControl", onClick: this.onExitApp },
                  a ? (0, d.we)("#Exit_Home") : (0, d.we)("#Exit_Game"),
                ),
            ),
          );
        }
      }
      (0, n.Cg)([a.o], A.prototype, "onExitApp", null),
        (0, n.Cg)([a.o], A.prototype, "onReturnToGame", null),
        (0, n.Cg)(
          [a.o],
          A.prototype,
          "onOpenAppControllerBindingSettings",
          null,
        ),
        (0, n.Cg)([a.o], A.prototype, "onOpenAppVideoSettings", null);
      var I = r(9248),
        B = r(3712),
        H = (r(7504), r(3696)),
        L = r(6013),
        P = r(8770),
        F = r(8803),
        N = r(1909),
        x = r(3689),
        W = r(296);
      const z = (0, W.PA)(function (e) {
          const { debugHostLocation: t, onGrabStart: r, onGrabEnd: n } = e,
            a = p.SW.isVRGamepadUI,
            s = !!p.SW.m_sKeyboardOverlayKey,
            l = !!(p.SW.m_nKeyboardFlags & i.QR.Minimal),
            c = a ? 2 : 1.5,
            d = a ? { y: -0.33, z: 0.15 } : { y: -0.25 },
            m = a
              ? l
                ? { y: -0.62, z: 0.01 }
                : { y: -0.72, z: 0.01 }
              : l
                ? { y: -0.73, z: 0.05 }
                : { y: -0.87, z: 0.05 };
          return o.createElement(
            i.dL,
            { translation: d },
            o.createElement(
              i.dL,
              { scale: { y: c, x: c } },
              o.createElement(i.rF, { mountedId: (0, i.nX)(u.cb, u.Zw) }),
              o.createElement(i.rF, { mountedId: (0, i.nX)(u.cb, u.nY) }),
            ),
            false,
            s &&
              o.createElement(
                i.dL,
                { translation: m },
                o.createElement(B.X, {
                  tint: p.SW.GrabHandleTint,
                  onStartMove: r,
                  onEndMove: n,
                }),
              ),
          );
        }),
        G = (0, W.PA)(function () {
          return (
            p.SW.m_bKeyboardVisible &&
            !p.SW.m_bKeyboardDockedInDashboard &&
            o.createElement(
              i.sJ,
              { bContinuousRelatch: !1 },
              o.createElement(
                i.dL,
                {
                  translation: p.SW.dashboardTranslation,
                  scale: p.SW.dashboardScale,
                },
                o.createElement(
                  i.dL,
                  { translation: He.getControlBarTranslation() },
                  o.createElement(
                    i.dL,
                    { translation: He.k_nKeyboardGrabTransformOffset },
                    o.createElement(
                      I.B,
                      { min_distance: 0.2, should_head_align: !1 },
                      o.createElement(
                        i.dL,
                        {
                          translation: {
                            x: -1 * He.k_nKeyboardGrabTransformOffset.x,
                            y: -1 * He.k_nKeyboardGrabTransformOffset.y,
                            z: -1 * He.k_nKeyboardGrabTransformOffset.z,
                          },
                        },
                        o.createElement(
                          i.dL,
                          {
                            rotation: { x: He.k_nControlBarPitch },
                            curvature_pitch: He.k_nControlBarPitch,
                          },
                          o.createElement(z, { debugHostLocation: "Undocked" }),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            )
          );
        });
      var U = r(1295),
        q = r(4007),
        j = r(9471),
        K = r(7600),
        $ = r(6379);
      function X(e) {
        e.set_deprecated_icon(J(e.icon())),
          e.set_icon(void 0),
          e.set_deprecated_icon_active(J(e.icon_active())),
          e.set_icon_active(void 0);
      }
      function Z(e) {
        e.set_deprecated_icon(
          (function (e) {
            if (null == e) return;
            const t = new P.Tp();
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
        const t = new P.Ym();
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
      var Q,
        Y = r(8723),
        ee = r(2505),
        te = r.n(ee),
        re = r(5615);
      !(function (e) {
        (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
      })(Q || (Q = {}));
      const ne = (e) =>
        o.createElement(
          "div",
          {
            className: (0, T.FH)("ButtonContainer", Q[e.side], [
              "Disabled",
              !1 === e.enabled,
            ]),
          },
          o.createElement(
            c.$,
            { className: "ButtonControl", onClick: e.onClick },
            e.side == Q.Left
              ? o.createElement(o.Fragment, null, "‹")
              : o.createElement(o.Fragment, null, "›"),
          ),
        );
      class ie extends o.Component {
        constructor(e) {
          super(e),
            (this.m_refScrollPanel = o.createRef()),
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
            p = d > 0 ? d * l + o - i : 0;
          this.scrollToPosition(p);
        }
        scrollToPosition(e) {
          const t = this.m_refScrollPanel.current;
          t &&
            (t.scrollTo({ left: e, behavior: "smooth" }),
            (this.m_bScrolling = !0),
            (this.m_nCurrentScrollTarget = e));
        }
        render() {
          return o.createElement(
            "div",
            {
              className: (0, T.FH)(
                "PaginatedCarousel",
                this.props.additionalClassNames,
              ),
            },
            o.createElement(
              re.M,
              {
                ref: this.m_refScrollPanel,
                scrollDirection: re.D.Horizontal,
                onScroll: this.onScroll,
              },
              this.props.children,
            ),
            (!1 === this.state.bScrolledToStart ||
              !1 === this.state.bScrolledToEnd) &&
              o.createElement(
                "div",
                { className: "PaginationButtons" },
                null !== this.state.bScrolledToStart &&
                  o.createElement(ne, {
                    side: Q.Left,
                    enabled: !this.state.bScrolledToStart,
                    onClick: this.onLeftButtonClick,
                  }),
                null !== this.state.bScrolledToEnd &&
                  o.createElement(ne, {
                    side: Q.Right,
                    enabled: !this.state.bScrolledToEnd,
                    onClick: this.onRightButtonClick,
                  }),
              ),
          );
        }
      }
      (0, n.Cg)([a.o], ie.prototype, "onAnimationFrame", null),
        (0, n.Cg)([a.o], ie.prototype, "onScroll", null),
        (0, n.Cg)([a.o], ie.prototype, "onLeftButtonClick", null),
        (0, n.Cg)([a.o], ie.prototype, "onRightButtonClick", null);
      let ae = class extends o.Component {
        constructor(e) {
          super(e),
            (this.m_scrollWatcher = new T.aw()),
            (this.m_refAnchoredParentPortal = o.createRef()),
            (this.m_refButton = o.createRef()),
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
            o.createElement(
              "div",
              {
                className: (0, T.FH)(
                  "AppButtonContainer",
                  [
                    "AppOwned",
                    b.HR.probablyOwnedAppkeys.has(this.props.appkey),
                  ],
                  ["ShowingPopovers", this.shouldShowHoverContents],
                ),
              },
              o.createElement(
                c.$,
                {
                  className: "AppButton",
                  ref: this.m_refButton,
                  onMouseEnter: this.buttonMouseEnter,
                  onMouseLeave: this.buttonMouseLeave,
                  onClick: this.props.onClick,
                },
                o.createElement(E, Object.assign({}, e), this.props.children),
              ),
            )
          );
        }
      };
      (0, n.Cg)([a.o], ae.prototype, "buttonMouseEnter", null),
        (0, n.Cg)([a.o], ae.prototype, "buttonMouseLeave", null),
        (0, n.Cg)([a.o], ae.prototype, "onParentScrollStop", null),
        (ae = (0, n.Cg)([S.PA], ae));
      const se = () =>
          o.createElement("div", { className: "AppButton Placeholder" }),
        oe = (e) => {
          var t;
          const r = !!e.loading,
            n = null !== (t = e.apps) && void 0 !== t ? t : [];
          let i = "AppCarousel";
          return (
            e.className && (i += " " + e.className),
            o.createElement(
              ie,
              { additionalClassNames: i, paginationAlignmentOffset: -20 },
              r &&
                o.createElement(
                  o.Fragment,
                  null,
                  o.createElement(se, null),
                  o.createElement(se, null),
                  o.createElement(se, null),
                  o.createElement(se, null),
                ),
              !r &&
                n.map((e) =>
                  o.createElement(ae, Object.assign({ key: e.appkey }, e)),
                ),
            )
          );
        };
      var le;
      class ce extends o.Component {
        constructor(e) {
          super(e), (this.state = { storeData: null });
        }
        componentDidMount() {
          te()
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
                  o.createElement(
                    c.$,
                    {
                      key: `appid_${n.appid}`,
                      className: `WelcomeFloatingApp WelcomeFloatingApp${e.length}`,
                      enabled: !1,
                    },
                    o.createElement("img", { src: n.logo }),
                  ),
                );
            }
          }
          return o.createElement(
            "div",
            { className: "QuickLaunchWelcome" },
            e,
            o.createElement(
              "div",
              { className: "QuickLaunchWelcomePrompt" },
              o.createElement(
                "div",
                { className: "QuickLaunchWelcomeHeader" },
                (0, d.we)("#WelcomeToSteamVR"),
              ),
              o.createElement(
                "div",
                { className: "QuickLaunchWelcomeMessage" },
                (0, d.we)("#LaunchSteamToFindGames"),
              ),
            ),
          );
        }
      }
      let ue = (le = class extends o.Component {
        constructor(e) {
          super(e),
            (this.m_mailbox = new i._n()),
            (this.state = {}),
            this.m_mailbox.Init("systemui_quicklaunch");
        }
        launchApplication(e, t, r) {
          var n, i;
          m.instance.RecordUIEvent(
            "QuickLaunchAppClick",
            (t ? "top" : "bottom") + ":" + r,
            e.key,
          ),
            null === (i = (n = this.props).onGameLaunched) ||
              void 0 === i ||
              i.call(n, e),
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRApplications.LaunchApplication(e.key);
        }
        makeAppButtonList() {
          let e = [];
          if (null != b.HR.apps)
            for (let t of b.HR.apps)
              t.is_internal ||
                (t.is_dashboard_overlay && !t.show_overlay_in_quicklaunch) ||
                t.is_hidden ||
                t.is_instance ||
                le.s_setBlacklistedAppkeys.has(t.key) ||
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
            const i = r < le.TOP_ROW_LENGTH;
            return (
              i || (n -= le.TOP_ROW_LENGTH),
              {
                key: e.key,
                appkey: e.key,
                title: e.name,
                imageUrl: t(e),
                onClick: () => this.launchApplication(e, i, n),
                children: o.createElement(
                  o.Fragment,
                  null,
                  o.createElement("div", { className: "PlayIconFade" }),
                  o.createElement("img", {
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
            b.HR.settings.get("/settings/dashboard/forceWelcomeScreen");
          if (r) e = o.createElement(ce, null);
          else {
            let r = t.slice(0, le.TOP_ROW_LENGTH),
              n = t.slice(le.TOP_ROW_LENGTH);
            e = o.createElement(
              o.Fragment,
              null,
              o.createElement(oe, { className: "TopRow", apps: r }),
              o.createElement(oe, { className: "BottomRow", apps: n }),
            );
          }
          return o.createElement(
            R.L_,
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
      (ue.TOP_ROW_LENGTH = 4),
        (ue.s_setBlacklistedAppkeys = new Set([
          "openvr.tool.steamvr_room_setup",
          "openvr.tool.steamvr_media_player",
          "openvr.tool.steamvr_desktop_gametheatre",
          "openvr.tool.steamvr_tutorial",
          "openvr.tool.steamvr_environments",
          "openvr.tool.steamvr_environments_tools",
          u.MM,
          u.v0,
        ])),
        (ue = le = (0, n.Cg)([S.PA], ue));
      var de = r(998);
      function pe(e) {
        const t = (0, p.Sm)(),
          r = !t || p.SW.m_bShowLegacyDashboardBar,
          n = o.useRef(void 0);
        return (
          o.useEffect(() => {
            var e;
            t &&
              r &&
              (null === (e = n.current) ||
                void 0 === e ||
                e.SetTabVisibility({ bVisibleInDashboardBar: !1 }));
          }, [t, r]),
          r
            ? o.createElement(
                D.wI,
                {
                  ref: n,
                  title: (0, d.we)("#OldLibrary"),
                  iconEnum: 19,
                  showTabInDashboardHamburgerMenu: t,
                  showTabInDashboardBar: !t || void 0,
                },
                o.createElement(
                  D.P9,
                  { summonOverlayKey: u.Sx },
                  o.createElement(ue, { onGameLaunched: e.onGameLaunched }),
                ),
              )
            : null
        );
      }
      (0, W.PA)(function () {
        return null;
      });
      const me = (0, W.PA)(function (e) {
          var t;
          let r =
            null !== (t = VRHTML.GetHostInfo(i.k2.Hostname)) && void 0 !== t
              ? t
              : "unknown";
          return o.createElement(
            i.Zk,
            {
              meters_per_pixel: u.iZ,
              interactive: !0,
              debug_name: "vrlink-info",
            },
            o.createElement(
              "div",
              { className: "FloatingButtonRow" },
              o.createElement(
                c.$,
                { className: "ButtonControl", onClick: e.onClick },
                o.createElement("span", null, r.toLowerCase(), " "),
              ),
            ),
          );
        }),
        he = (0, W.PA)(function (e) {
          return null;
        });
      function ge(e) {
        return (
          e == u.Wt ||
          e == u.Bn ||
          (null == e ? void 0 : e.startsWith(u.GO)) ||
          (null == e ? void 0 : e.startsWith(u.Uv)) ||
          (null == e ? void 0 : e.startsWith(u.Wm)) ||
          ((null == e ? void 0 : e.startsWith(u.So)) &&
            !(null == e ? void 0 : e.startsWith(u.bl))) ||
          (null == e ? void 0 : e.startsWith(u.Kh))
        );
      }
      function ve(e) {
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
              case 18:
                return "/dashboard/images/icons/svr_desktop_alt.svg";
            }
          else e.icon.hwnd;
        } catch (e) {}
        return null;
      }
      class _e extends o.Component {
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
                      e + _e.kBatteryLevelHysteresis,
                      1,
                    )),
                    (this.batteryLevelStable = Math.max(
                      this.batteryLevelStable,
                      e - _e.kBatteryLevelHysteresis,
                      0,
                    )));
            }
            this.devicePowerUsage = VRHTML.VRProperties.GetFloatProperty(
              r,
              i.fD.DevicePowerUsage_Float,
            );
          }
          let n = de.C.GetBatteryIcon(
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
          return o.createElement(
            "div",
            { className: "BatteryStatus" },
            this.devicePowerUsage &&
              o.createElement(
                "div",
                { className: "Label" },
                " ",
                Math.round(10 * this.devicePowerUsage) / 10,
                " W ",
              ),
            o.createElement("img", { src: this.state.batteryIconPath }),
          );
        }
      }
      (_e.kBatteryLevelHysteresis = 0.02),
        (0, n.Cg)([a.o], _e.prototype, "updateControllerStatus", null),
        (0, n.Cg)([a.o], _e.prototype, "onBatteryStateChanged", null),
        (0, n.Cg)([a.o], _e.prototype, "onDeviceRoleChanged", null),
        (0, n.Cg)([a.o], _e.prototype, "onDeviceEvent", null);
      class be extends o.Component {
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
            o.createElement(
              "div",
              { className: "ClockContainer" },
              o.createElement(
                "div",
                { className: "Clock" },
                t,
                " ",
                o.createElement("span", { className: "Suffix" }, r),
              ),
            )
          );
        }
      }
      (0, n.Cg)([a.o], be.prototype, "updateTime", null);
      const Se = (e) =>
          o.createElement(
            "div",
            { className: "Title" },
            e.iconUrl && o.createElement(R.vX, { src: e.iconUrl, shadow: !0 }),
            o.createElement("span", { className: "NoWrapText" }, e.name),
          ),
        ye = (0, W.PA)(function (e) {
          var t, r;
          const n = p.SW.activeFrame;
          return n
            ? (null === (t = n.activePage) || void 0 === t
                ? void 0
                : t.summonOverlayKey) == u.Xk
              ? -1 == (null == e ? void 0 : e.currentDesktopIndex)
                ? o.createElement(Se, {
                    name: null == e ? void 0 : e.currentDesktopWindowTitle,
                    iconUrl: ve(n),
                  })
                : o.createElement(Se, {
                    name:
                      "Desktop " + (null == e ? void 0 : e.currentDesktopIndex),
                    iconUrl: ve(n),
                  })
              : (null === (r = n.activePage) || void 0 === r
                    ? void 0
                    : r.summonOverlayKey) == u.Wm
                ? o.createElement(Se, {
                    name: (0, d.we)("#BindingUI_WindowTitle_ControllerBinding"),
                    iconUrl: "/dashboard/images/icons/svr_settings.svg",
                  })
                : o.createElement(Se, { name: n.title, iconUrl: ve(n) })
            : null;
        }),
        fe = (0, W.PA)(function (e) {
          var t, r, n, a, s;
          const l = p.SW.isDarkMode,
            c = l ? { r: 0.02, g: 0.02, b: 0.02 } : null,
            d = l ? 0 : 0.1,
            m = !l;
          let h = null;
          if (
            (null ===
              (r =
                null === (t = p.SW.activeFrame) || void 0 === t
                  ? void 0
                  : t.activePage) || void 0 === r
              ? void 0
              : r.summonOverlayKey) == u.Xk ||
            (null ===
              (s =
                null ===
                  (a =
                    null === (n = p.SW.activeFrame) || void 0 === n
                      ? void 0
                      : n.activePage) || void 0 === a
                  ? void 0
                  : a.summonOverlayKey) || void 0 === s
              ? void 0
              : s.startsWith(u.Uv))
          ) {
            h = 1860 - 20;
          }
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              i.dL,
              { translation: { y: 0.008 } },
              o.createElement(
                i.N,
                { color: c },
                o.createElement(
                  i.Zk,
                  {
                    curvature_origin_id:
                      null == e ? void 0 : e.sCurvatureOriginId,
                    origin: i.Oi.BottomCenter,
                    interactive: !1,
                    meters_per_pixel: u.iZ,
                    debug_name: "StatusBar",
                    reflect: d,
                  },
                  o.createElement(
                    "div",
                    { className: "StatusBar", style: { width: h } },
                    o.createElement(
                      "div",
                      { className: "Section Left" },
                      m &&
                        o.createElement(ye, {
                          currentDesktopIndex: e.currentDesktopIndex,
                          currentDesktopWindowTitle:
                            e.currentDesktopWindowTitle,
                        }),
                      o.createElement(_e, {
                        role: i.kG.TrackedControllerRole_LeftHand,
                        style: de.b.HorizontalPips,
                      }),
                    ),
                    o.createElement(
                      "div",
                      { className: "Section Center" },
                      o.createElement(_e, {
                        deviceIndex: i.Gz,
                        style: de.b.VerticalBattery,
                      }),
                      o.createElement(be, null),
                    ),
                    o.createElement(
                      "div",
                      { className: "Section Right" },
                      o.createElement(_e, {
                        role: i.kG.TrackedControllerRole_RightHand,
                        style: de.b.HorizontalPips,
                      }),
                    ),
                  ),
                ),
              ),
            ),
          );
        });
      var Re = r(3496);
      class we extends Re._J {
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
      (0, n.Cg)([a.o], we.prototype, "buildNode", null);
      var Ce,
        Me = r(2156),
        Te = r(3246);
      const Ee = !1;
      var Ve, De;
      !(function (e) {
        (e[(e.Near = 0)] = "Near"),
          (e[(e.Middle = 1)] = "Middle"),
          (e[(e.Far = 2)] = "Far"),
          (e[(e.VRGamepadUI = 3)] = "VRGamepadUI");
      })(Ve || (Ve = {}));
      class ke extends o.Component {
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
      function Oe(e) {
        return e == u.P || e.startsWith(u.bl);
      }
      function Ae(e) {
        var t;
        const r =
          null === (t = q.Q.GetOverlayInfo(e)) || void 0 === t
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
      function Ie(e, t, r) {
        var n;
        const i = Date.now(),
          a = i - t.nDockStartMs;
        if (a >= 1e3) {
          const i = /^valve\.steam\.desktopgame\.(\d+)$/,
            s = e.match(i),
            o = _.G.Instance.SceneAppKey,
            l =
              t.dockLocation == f.$z.Theater &&
              null !==
                (n = b.HR.settings.get(
                  "/settings/dashboard/autoShowGameTheater",
                )) &&
              void 0 !== n &&
              n;
          void 0 === r && (r = Ae(e));
          const c = Math.floor(1e3 * (r - t.fLastTotalVisibleTimeInSeconds)),
            u = {
              OverlayKeyID: e,
              Location: f.$z[t.dockLocation],
              DurationMs: a,
              VisibleMs: c > 0 ? c : void 0,
              OverlayAppID:
                2 == (null == s ? void 0 : s.length)
                  ? parseInt(s[1], 10)
                  : void 0,
              SceneAppKeyID: "" != o ? o : void 0,
              autoShowGameTheater: l,
            };
          (t.fLastTotalVisibleTimeInSeconds = r),
            m.instance.AddRow("SteamVROverlayDockStats", u);
        }
        t.nDockStartMs = i;
      }
      function Be(e, t, r) {
        t.dockLocation != r && (Ie(e, t), (t.dockLocation = r));
      }
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Power = 1)] = "Power"),
          (e[(e.ExternalOverlays = 2)] = "ExternalOverlays"),
          (e[(e.Volume = 3)] = "Volume"),
          (e[(e.Windows = 4)] = "Windows");
      })(De || (De = {}));
      let He = (Ce = class extends o.Component {
        constructor(e) {
          super(e),
            (this.m_mapWindows = new Map()),
            (this.m_setSuppressingFade = new Set()),
            (this.m_mailbox = new i._n()),
            (this.m_timeoutPopoverMenuHide = 0),
            (this.m_refPopoverMenu = o.createRef()),
            (this.m_appStateChangedAutorunDisposer = null),
            (this.m_DashboardTabsReactionDisposer = null),
            (this.m_DashboardTabsUpdatedReactionDisposer = null),
            (this.m_LegacyKeyboardAutorunDisposer = null),
            (this.m_refDesktopView = o.createRef()),
            (this.m_refDesktopTray = o.createRef()),
            (this.m_refOverlayTransform = o.createRef()),
            (this.m_refVolumeTray = o.createRef()),
            (this.m_sLastActiveOverlaySummonKey = void 0),
            (this.m_activeOverlayThatVanished = void 0),
            (this.m_bUserManuallySwitchToOldLibrary = !1),
            (this.m_bWaitingOnInitialOverlayToAutoShow = !1),
            (this.m_dashboardThumbnailsChangedEventHandle = null),
            (this.m_miscEventHandles = []),
            (this.m_eSceneApplicationState = i.HW.None),
            (this.m_vrGamepadUIPathPropertiesAutorunDisposer = null),
            (this.m_gamepadFocusAutorunDisposer = null),
            this.ImplementFutureMethods(),
            this.ImplementSomeGlobalActions(),
            (0, s.makeObservable)(this),
            (this.state = {
              bMuted: !1,
              bGrabbed: !1,
              sLastShownAppKey: "",
              eShowPopoverMenu: De.None,
              setForcingBoundsVisible: {},
              desktopViewDebugInfo: {
                inputFrameTime: 0,
                mapOverlayFrameTimes: new Map(),
              },
              bWindowViewEnabled: !1,
              bPlacementModeActive: !1,
              mapPortals: new Map(),
            }),
            b.HR.Init(!1),
            i.Cw.getInstance(),
            this.m_mailbox.Init(Ce.k_sDashboardMailboxName).then(() => {
              this.m_mailbox.RegisterHandler(
                Ce.k_sSetDashboardFadeSupressionMessage,
                this.onSetDashboardFadeSuppression,
              ),
                this.m_mailbox.RegisterHandler(
                  Ce.k_sDashboardOverlayCreatedMessage,
                  this.onDashboardOverlayCreated,
                ),
                this.m_mailbox.RegisterHandler(
                  Ce.k_sDashboardOverlayDestroyedMessage,
                  this.onDashboardOverlayDestroyed,
                ),
                this.m_mailbox.RegisterHandler(
                  Ce.k_sWindowViewCreatedMessage,
                  this.onWindowViewCreated,
                ),
                this.m_mailbox.RegisterHandler(
                  Ce.k_sWindowViewDestroyedMessage,
                  this.onWindowViewDestroyed,
                ),
                this.m_mailbox.RegisterHandler(
                  Ce.k_sUpdateWindowListMessage,
                  this.onUpdateWindowList,
                ),
                this.m_mailbox.RegisterHandler(
                  Ce.k_sUpdateDebugInfoMessage,
                  this.onUpdateDebugInfo,
                ),
                this.m_mailbox.RegisterHandler(
                  Ce.k_sSetDashboardForceBoundsVisible,
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
                this.m_mailbox.RegisterHandler("dock_overlay_requested", (e) =>
                  this.onDockOverlayRequested(e),
                ),
                this.m_mailbox.RegisterHandler(
                  "hide_dashboard_requested",
                  this.onHideDashboardRequested,
                ),
                this.m_mailbox.RegisterHandler("toggle_theater_stereo", () =>
                  p.SW.ToggleTheaterStereo(),
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
            N.p.SteamVR.SetImplementation(
              "DashboardTabClicked",
              ({ tab_id: e }) => {
                var t, r, n, i, a, s, o;
                const l = D.JJ.GetTabMappingForTabID(e);
                let c;
                switch (null == l ? void 0 : l.type) {
                  case "frame":
                    c = l.frame;
                    break;
                  case "desktop":
                    null === (t = this.m_refDesktopView.current) ||
                      void 0 === t ||
                      t.onDesktopChange(l.unDesktopID),
                      (c = D.JJ.GetFramesWithAssociatedSummonKeys(u.Xk)[0]);
                    break;
                  case "window":
                    const e = `${u.Uv}.${l.unWindowID}`;
                    (null === (r = this.m_refDesktopView.current) ||
                    void 0 === r
                      ? void 0
                      : r.hasWindowView(e)) &&
                      (null === (n = this.m_refDesktopView.current) ||
                        void 0 === n ||
                        n.onWindowViewChange(e),
                      (c = D.JJ.GetFramesWithAssociatedSummonKeys(u.Xk)[0]));
                }
                if (
                  (1 == e &&
                    ((c = D.JJ.GetFramesWithAssociatedSummonKeys(u.Wt)[0]),
                    (null === (i = null == c ? void 0 : c.activePage) ||
                    void 0 === i
                      ? void 0
                      : i.summonOverlayKey) != u.Wt &&
                      (null === (a = null == c ? void 0 : c.activePage) ||
                      void 0 === a
                        ? void 0
                        : a.summonOverlayKey) != u.Wm &&
                      (null == c ||
                        c.SwitchToPage(
                          null === (s = c.GetPageWithOverlaySummonKey(u.Wt)) ||
                            void 0 === s
                            ? void 0
                            : s.pageID,
                        ))),
                  (null == c
                    ? void 0
                    : c.associatedSummonOverlayKeys.includes(u.Sx)) &&
                    (this.m_bUserManuallySwitchToOldLibrary = !0),
                  !c ||
                    !this.switchToFrameInternal(
                      c,
                      void 0,
                      "User clicked VRGamepadUI tab",
                    ))
                )
                  throw new Error(
                    "Failed to switch to tab: " +
                      e +
                      " (frameID: " +
                      (null !== (o = null == c ? void 0 : c.frameID) &&
                      void 0 !== o
                        ? o
                        : "null") +
                      ")",
                  );
              },
            ),
            N.p.SteamVR.SetImplementation("ShowGame", this.onShowOverlay),
            N.p.SteamVR.SetImplementation("ShowOverlay", this.onShowOverlay);
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
            (this.m_appStateChangedAutorunDisposer = (0, s.autorun)(() => {
              var e, t, r;
              const n = _.G.Instance.SceneApplicationState,
                a = n != i.HW.None;
              if (a && this.m_eSceneApplicationState == i.HW.None)
                p.SW.HideTheaterOverlay();
              else if (
                !a &&
                this.m_eSceneApplicationState != i.HW.None &&
                !p.SW.isTheaterMode
              ) {
                if (
                  null !==
                    (e = b.HR.settings.get(
                      "/settings/dashboard/autoShowGameTheater",
                    )) &&
                  void 0 !== e &&
                  e
                )
                  for (let [e, t] of p.SW.m_mapOverlayState)
                    if (e.startsWith(u.bl)) {
                      this.setOverlayInTheater(e);
                      break;
                    }
              }
              (this.m_eSceneApplicationState = n),
                (null ===
                  (r =
                    null === (t = p.SW.activeFrame) || void 0 === t
                      ? void 0
                      : t.activePage) || void 0 === r
                  ? void 0
                  : r.summonOverlayKey) != u.dw ||
                  a ||
                  this.switchToHomeOverlay();
            })),
            this.m_mailbox.WaitForConnect().then(() => {
              this.m_LegacyKeyboardAutorunDisposer = (0, s.autorun)(() => {
                p.SW.isVRGamepadUI ||
                  (!p.SW.m_bDashboardVisible && !p.SW.m_bKeyboardVisible) ||
                  this.m_mailbox.SendMessage("keyboard_vrwebui/main", {
                    type: "dummy",
                  });
              });
            });
          for (const e of q.Q.overlays)
            1 == e.eOverlayType && this.initializeOverlayState(e.sOverlayKey);
          this.updateSiblingReferences(),
            (this.m_DashboardTabsUpdatedReactionDisposer = (0, s.autorun)(
              this.onDashboardTabsUpdated,
            )),
            (this.m_vrGamepadUIPathPropertiesAutorunDisposer = (0, s.autorun)(
              () => {
                this.updateVRGamepadUIPathProperties();
              },
            )),
            (this.m_gamepadFocusAutorunDisposer = (0, s.autorun)(() => {
              const e = p.SW.priorityGamepadFocusOverlay,
                t = _.G.Instance.SceneApplicationState !== i.HW.None;
              p.SW.m_bDashboardVisible || !e || t || 0 != H.H.roomSetupStep
                ? this.SetGamepadFocusEnable(!1, null)
                : this.SetGamepadFocusEnable(!0, e);
            }));
          const t = new L.T4();
          t.set_can_sleep(
            b.HR.settings.get("/settings/dashboard/allowSystemSleep"),
          ),
            t.set_can_shutdown(
              b.HR.settings.get("/settings/dashboard/allowSystemShutdown"),
            ),
            t.set_can_restart_system(
              b.HR.settings.get("/settings/dashboard/allowSystemRestart"),
            ),
            t.set_can_exitvr(
              null ===
                (e = b.HR.settings.get("/settings/dashboard/allowExitVR")) ||
                void 0 === e ||
                e,
            ),
            (0, F.Z)(t);
        }
        componentDidUpdate(e, t) {
          this.updateSiblingReferences(),
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
            m,
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
            T,
            E,
            V,
            k,
            O,
            A,
            I;
          const B = Array.from(
              null !== (e = this.m_mapWindows.values()) && void 0 !== e
                ? e
                : [],
            ).sort(xe),
            H =
              null ===
                (r =
                  null === (t = p.SW.activeFrame) || void 0 === t
                    ? void 0
                    : t.activePage) || void 0 === r
                ? void 0
                : r.summonOverlayKey,
            N = new L.UQ();
          for (const e of D.JJ.frames)
            N.add_tabs(L.MS.fromObject(e.tab)),
              e === p.SW.activeFrame && N.set_selected_tab_id(e.tab.tab_id),
              e == p.SW.mainSteamFrame && N.set_vr_steam_tab_id(e.tab.tab_id);
          if (this.m_refDesktopView.current) {
            const e = this.m_refDesktopView.current.desktopCount;
            null === (n = this.m_refDesktopView.current) ||
              void 0 === n ||
              n.desktopIndices.forEach((t) => {
                var r;
                const n = D.JJ.GetTabIDForDesktop(t),
                  i = new L.MS();
                i.set_tab_id(n),
                  i.set_display_name(
                    e > 1 ? (0, d.we)("#Desktop_X", t) : (0, d.we)("#Desktop"),
                  ),
                  i.set_visible_in_dashboard_bar(!0);
                const a = new P.aV();
                a.set_enum(15),
                  i.set_icon(a),
                  N.add_tabs(i),
                  (null == H ? void 0 : H.startsWith(u.Xk)) &&
                    (null === (r = this.m_refDesktopView.current) ||
                    void 0 === r
                      ? void 0
                      : r.currentDesktopIndex) == t &&
                    N.set_selected_tab_id(n);
              });
          }
          for (const e of B) {
            if (!e.overlay_key) continue;
            const t = Number.parseInt(e.overlay_key.substring(u.Uv.length + 1)),
              r = D.JJ.GetTabIDForWindow(t),
              n = new L.MS();
            n.set_tab_id(r),
              n.set_display_name(e.title),
              n.set_visible_in_dashboard_bar(!0);
            const a = new P.aV();
            a.set_enum(18),
              a.set_hwnd(Number.parseInt(e.hwnd)),
              n.set_icon(a),
              N.add_tabs(n),
              (null == H ? void 0 : H.startsWith(u.Xk)) &&
                (null === (i = this.m_refDesktopView.current) || void 0 === i
                  ? void 0
                  : i.sCurrentOverlayKey) == e.overlay_key &&
                N.set_selected_tab_id(r);
          }
          N.tabs().sort(Ne);
          const W = new L._z();
          W.add_bar_buttons(
            L.Gm.fromObject({
              type: 3,
              action_id:
                null === (a = x.DZ[1]) || void 0 === a ? void 0 : a.actionID,
              is_main_hamburger_menu: !0,
            }),
          ),
            W.add_bar_menu_items(
              L.my.fromObject({
                type: 2,
                parent_menu_action_id:
                  null === (s = x.DZ[1]) || void 0 === s ? void 0 : s.actionID,
              }),
            ),
            W.add_bar_menu_items(
              L.my.fromObject({
                type: 3,
                parent_menu_action_id:
                  null === (o = x.DZ[1]) || void 0 === o ? void 0 : o.actionID,
              }),
            ),
            (null === (l = x.DZ[7]) || void 0 === l ? void 0 : l.isValid)
              ? W.add_bar_menu_items(
                  L.my.fromObject({
                    type: 1,
                    action_id:
                      null === (c = x.DZ[8]) || void 0 === c
                        ? void 0
                        : c.actionID,
                    parent_menu_action_id:
                      null === (m = x.DZ[7]) || void 0 === m
                        ? void 0
                        : m.actionID,
                  }),
                )
              : W.add_bar_buttons(
                  L.Gm.fromObject({
                    type: 1,
                    action_id:
                      null === (h = x.DZ[8]) || void 0 === h
                        ? void 0
                        : h.actionID,
                  }),
                ),
            (null === (g = x.DZ[2]) || void 0 === g ? void 0 : g.isValid) &&
              W.add_bar_menu_items(
                L.my.fromObject({
                  type: 1,
                  action_id:
                    null === (v = x.DZ[2]) || void 0 === v
                      ? void 0
                      : v.actionID,
                  parent_menu_action_id:
                    null === (_ = x.DZ[1]) || void 0 === _
                      ? void 0
                      : _.actionID,
                }),
              ),
            (null === (b = x.DZ[3]) || void 0 === b ? void 0 : b.isValid) &&
              W.add_bar_menu_items(
                L.my.fromObject({
                  type: 1,
                  action_id:
                    null === (S = x.DZ[3]) || void 0 === S
                      ? void 0
                      : S.actionID,
                  parent_menu_action_id:
                    null === (y = x.DZ[1]) || void 0 === y
                      ? void 0
                      : y.actionID,
                }),
              ),
            (null === (f = x.DZ[4]) || void 0 === f ? void 0 : f.isValid) &&
              W.add_bar_buttons(
                L.Gm.fromObject({
                  type: 1,
                  action_id:
                    null === (R = x.DZ[4]) || void 0 === R
                      ? void 0
                      : R.actionID,
                }),
              ),
            W.add_bar_buttons(L.Gm.fromObject({ type: 2 })),
            (null === (w = x.DZ[6]) || void 0 === w ? void 0 : w.isValid) &&
              W.add_bar_buttons(
                L.Gm.fromObject({
                  type: 1,
                  action_id:
                    null === (C = x.DZ[6]) || void 0 === C
                      ? void 0
                      : C.actionID,
                }),
              ),
            (null === (M = x.DZ[5]) || void 0 === M ? void 0 : M.isValid) &&
              W.add_bar_buttons(
                L.Gm.fromObject({
                  type: 1,
                  action_id:
                    null === (T = x.DZ[5]) || void 0 === T
                      ? void 0
                      : T.actionID,
                }),
              ),
            W.add_bar_menu_items(
              L.my.fromObject({
                type: 4,
                parent_menu_action_id:
                  null === (E = x.DZ[1]) || void 0 === E ? void 0 : E.actionID,
              }),
            );
          const z = new Set();
          for (const e of W.bar_buttons()) z.add(e.action_id());
          for (const e of W.bar_menu_items())
            z.add(e.action_id()), z.add(e.parent_menu_action_id());
          for (const e of z) {
            const t = x.g.GetAction(e);
            (null == t ? void 0 : t.protoForSteam) &&
              W.add_defined_actions(Y.z.fromObject(t.protoForSteam));
          }
          const G = new L.J$();
          var q;
          if (
            (G.set_windows(
              B.map((e) => {
                const t = new L.gL();
                if (
                  (t.set_hwnd(Number.parseInt(e.hwnd)),
                  t.set_window_id(Number.parseInt(e.hwnd)),
                  t.set_title(e.title),
                  e.overlay_key)
                ) {
                  const r = Number.parseInt(
                    e.overlay_key.substring(u.Uv.length + 1),
                  );
                  t.set_tab_id(D.JJ.GetTabIDForWindow(r));
                }
                return t;
              }),
            ),
            null != Te.r.legacyFloatingMainMenuPopup &&
              (N.add_tabs(
                L.MS.fromObject({ tab_id: 1, visible_in_dashboard_bar: !0 }),
              ),
              N.set_deprecated_vr_settings_tab_id(1),
              !(null === (V = p.SW.mainSteamFrame) || void 0 === V
                ? void 0
                : V.isActiveDashboardFrame) ||
                ((null ===
                  (O =
                    null === (k = p.SW.mainSteamFrame) || void 0 === k
                      ? void 0
                      : k.activePage) || void 0 === O
                  ? void 0
                  : O.summonOverlayKey) != u.Wt &&
                  (null ===
                    (I =
                      null === (A = p.SW.mainSteamFrame) || void 0 === A
                        ? void 0
                        : A.activePage) || void 0 === I
                    ? void 0
                    : I.summonOverlayKey) != u.Wm) ||
                N.set_selected_tab_id(1)),
            U.H.BHasMutualCapability(3) ||
              ((null == (q = W) ? void 0 : q.bar_buttons()) &&
                q.set_bar_buttons(
                  q.bar_buttons().filter((e) => 2 != e.type()),
                )),
            U.H.BHasMutualCapability(14) ||
              (function (e) {
                var t, r, n;
                const i = new Map();
                for (const t of e.defined_actions()) i.set(t.action_id(), t);
                const a =
                    null === (t = e.bar_buttons()) || void 0 === t
                      ? void 0
                      : t
                          .map((e) => {
                            const t = new L.Yz(),
                              r = i.get(e.action_id());
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
                            const t = new L.Yz(),
                              r = i.get(e.action_id());
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
                e.set_deprecated_actions([...a, ...o]),
                  e.set_bar_buttons(void 0),
                  e.set_bar_menu_items(void 0),
                  e.set_defined_actions(void 0);
              })(W),
            !U.H.BHasMutualCapability(10))
          ) {
            for (const e of W.deprecated_actions()) X(e);
            for (const e of N.tabs()) Z(e);
          }
          (0, F.Z)(N), (0, F.Z)(W), (0, F.Z)(G);
        }
        initializeOverlayState(e) {
          b.HR.GetAppInfo(e).then((t) => {
            var r, n, i, a, l, c;
            let u;
            try {
              u =
                null === (n = (r = VRHTML.VROverlay).GetOverlayName) ||
                void 0 === n
                  ? void 0
                  : n.call(
                      r,
                      null === (a = (i = VRHTML.VROverlay).FindOverlay) ||
                        void 0 === a
                        ? void 0
                        : a.call(i, e),
                    );
            } catch (e) {}
            const d =
              e &&
              e.startsWith("valve.steam.desktopgame.") &&
              u.toLowerCase().startsWith("steam");
            let m = 1;
            if (e.startsWith("system.desktop.")) {
              let t = "/settings/dashboard/desktopScale" + e.split(".")[2];
              m = null !== (l = b.HR.settings.get(t)) && void 0 !== l ? l : 1;
            }
            if (
              ((0, s.runInAction)(() =>
                p.SW.m_mapOverlayState.set(e, {
                  refOverlayWidget: o.createRef(),
                  dockLocation: d ? f.$z.Boot : f.$z.Dashboard,
                  nDockStartMs: Date.now(),
                  xfInitial: null,
                  fScale: m,
                  fLastTotalVisibleTimeInSeconds: Ae(e),
                  bSuppressDoubleOverlayControlBar: !1,
                }),
              ),
              d)
            )
              this.setOverlayDockLocation(e, f.$z.Boot);
            else if (null == t ? void 0 : t.starts_theater_mode)
              this.setOverlayInTheater(e);
            else if (Oe(e)) {
              null !==
                (c = b.HR.settings.get(
                  "/settings/dashboard/autoShowGameTheater",
                )) &&
              void 0 !== c &&
              c
                ? this.setOverlayInTheater(e)
                : this.switchToOverlayInternal(e, "switchToDesktopApp");
            }
          });
        }
        updateSiblingReferences() {
          var e;
          null === (e = this.m_refDesktopTray.current) ||
            void 0 === e ||
            e.setSiblingReferences(this.m_refDesktopView.current);
        }
        componentWillUnmount() {
          var e, t, r, n, i, a, s;
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
        static getControlBarTranslation() {
          return p.SW.isVRGamepadUI
            ? { y: -1.2, z: 0.35 }
            : { y: -1.2, z: 0.15 };
        }
        onShowOverlay(e) {
          if (!e.overlay_key)
            return void console.log(
              "ShowGame called with invalid overlay_key",
              e.overlay_key,
            );
          const t = p.SW.m_mapOverlayState.get(e.overlay_key);
          t &&
            (t.dockLocation == f.$z.Theater
              ? e.overlay_key != u.wi &&
                (null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.VRDashboardManager.HideDashboard("ShowGame/theater"))
              : t.dockLocation == f.$z.Dashboard
                ? null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.VROverlay.ShowDashboard(e.overlay_key)
                : null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.VRDashboardManager.HideDashboard("ShowGame/other"));
        }
        onSetDashboardFadeSuppression(e) {
          e.suppress_dashboard_fade
            ? this.m_setSuppressingFade.add(e.for_id)
            : this.m_setSuppressingFade.delete(e.for_id);
          const t = this.m_setSuppressingFade.size > 0;
          t != p.SW.m_bSuppressingFadeExternal &&
            (p.SW.m_bSuppressingFadeExternal = t);
        }
        onGrabStart() {
          this.setState({ bGrabbed: !0 });
        }
        onGrabEnd() {
          this.setState({ bGrabbed: !1 });
          for (const e of p.SW.m_mapOverlayState.values())
            e.bSuppressDoubleOverlayControlBar = !1;
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
        onDashboardOverlayCreated(e) {
          this.initializeOverlayState(e.overlay_key);
        }
        onDashboardOverlayDestroyed(e) {
          var t;
          e.overlay_key.startsWith(u.Uv)
            ? null === (t = this.m_refDesktopView.current) ||
              void 0 === t ||
              t.onWindowViewDestroyed(e.overlay_key)
            : e.overlay_key == this.getActiveOverlayKey() &&
              this.switchToHomeOverlay();
          const r = p.SW.m_mapOverlayState.get(e.overlay_key);
          r && Ie(e.overlay_key, r, e.visible_time_in_seconds),
            p.SW.m_mapOverlayState.delete(e.overlay_key);
        }
        onDashboardTabsUpdated() {
          var e, t, r, n, i;
          const a = this.m_sLastActiveOverlaySummonKey;
          (this.m_sLastActiveOverlaySummonKey =
            null !==
              (r =
                null ===
                  (t =
                    null === (e = p.SW.activeFrame) || void 0 === e
                      ? void 0
                      : e.activePage) || void 0 === t
                  ? void 0
                  : t.summonOverlayKey) && void 0 !== r
              ? r
              : null),
            this.autoSwitchOverlayIfNeeded(),
            this.m_activeOverlayThatVanished &&
              D.JJ.HasFramesWithAssociatedSummonKeys(
                this.m_activeOverlayThatVanished.sSummonKey,
              ) &&
              (this.m_activeOverlayThatVanished = null);
          const s = this.GetDesiredInitialOverlayKey();
          this.m_bWaitingOnInitialOverlayToAutoShow &&
            D.JJ.HasFramesWithAssociatedSummonKeys(s) &&
            (this.m_bWaitingOnInitialOverlayToAutoShow = !1),
            a &&
              !D.JJ.HasFramesWithAssociatedSummonKeys(a) &&
              (this.m_activeOverlayThatVanished = {
                sSummonKey: a,
                timeVanished: new Date(),
              }),
            (null === (n = p.SW.activeFrame) || void 0 === n
              ? void 0
              : n.tabVisibility.bVisibleInDashboardHamburgerMenu) &&
              !(null === (i = p.SW.activeFrame) || void 0 === i
                ? void 0
                : i.tabVisibility.bVisibleInDashboardBar) &&
              p.SW.activeFrame.SetTabVisibility({ bVisibleInDashboardBar: !0 });
        }
        GetDesiredInitialOverlayKey() {
          const e = b.HR.settings.get(u.Bf);
          if (e) return e;
          const t = sessionStorage.getItem("last_active_overlay_key");
          return t || void 0;
        }
        onWindowViewCreated(e) {
          var t, r;
          this.switchToOverlayInternal(u.Xk),
            null === (t = this.m_refDesktopView.current) ||
              void 0 === t ||
              t.onWindowViewCreated(e.overlay_key, e.hwnd),
            null === (r = this.m_refDesktopTray.current) ||
              void 0 === r ||
              r.onWindowViewCreated(e.overlay_key, e.hwnd);
        }
        onWindowViewDestroyed(e) {}
        onUpdateWindowList(e) {
          var t, r;
          let n = new Map();
          null === (t = e.windows) ||
            void 0 === t ||
            t.forEach((e) => {
              n.set(e.hwnd, e);
            }),
            (this.m_mapWindows = n),
            this.setState({
              bWindowViewEnabled:
                null === (r = b.HR.settings.get(u.yl)) || void 0 === r || r,
            });
        }
        onUpdateDebugInfo(e) {}
        setOverlayInTheater(e, t = !0) {
          this.setOverlayDockLocation(e, f.$z.Theater),
            t &&
              (function (e) {
                e &&
                  e != u.wi &&
                  (null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VRDashboardManager.HideDashboard(
                      "AutoHideDashboardForOverlay",
                    ));
              })(e);
        }
        setOverlayDockLocation(e, t, r) {
          var n, i;
          (t != f.$z.LeftHand && t != f.$z.RightHand && t != f.$z.Theater) ||
            p.SW.m_mapOverlayState.forEach((r, n) => {
              r.dockLocation == t && Be(e, r, f.$z.Dashboard);
            });
          const a = p.SW.m_mapOverlayState.get(e);
          if (
            (a &&
              (a.dockLocation == f.$z.Theater &&
                (null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.VROverlay.ShowDashboard(e)),
              Be(e, a, t),
              (a.xfInitial = r),
              (a.bSuppressDoubleOverlayControlBar = t == f.$z.World)),
            t === f.$z.Dashboard)
          )
            if (e.startsWith(u.GO)) {
              const t = Number.parseInt(e.substring(u.GO.length + 1));
              null === (n = this.m_refDesktopView.current) ||
                void 0 === n ||
                n.onDesktopChange(t);
            } else
              e.startsWith(u.Uv) &&
                (null === (i = this.m_refDesktopView.current) ||
                  void 0 === i ||
                  i.onWindowViewChange(e));
        }
        renderActiveOverlay() {
          if (!p.SW.activeFrame) return null;
          const e = this.getActiveOverlayKey(),
            t = p.SW.m_mapOverlayState.get(e),
            r =
              (t && t.fScale,
              p.SW.isVRGamepadUI
                ? p.SW.m_fVRGamepadUI_GlobalActiveOverlayScale
                : 1);
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(i.dL, { scale: r }, o.createElement(D.EK, null)),
          );
        }
        get legacyFilteredOverlayTabs() {
          return D.JJ.frames
            .filter(
              (e) =>
                e.tabVisibility.bVisibleInDashboardBar ||
                e.tabVisibility.bVisibleInDashboardHamburgerMenu,
            )
            .filter((e) => !e.associatedSummonOverlayKeys.every(ge))
            .sort((e, t) => e.title.localeCompare(t.title));
        }
        switchToHomeOverlay() {
          const e = [u.wi, u.Sx];
          for (const t of e)
            if (D.JJ.HasFramesWithAssociatedSummonKeys(t)) {
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
              r = "bindingui/" + i.OH[(0, i.R$)()];
            this.m_mailbox.SendMessage(r, t), (e = u.Wm);
          }
          const r = D.JJ.GetFramesWithAssociatedSummonKeys(e)[0];
          if (!r) return !1;
          const n = r.GetPageWithOverlaySummonKey(e);
          return !!n && this.switchToFrameInternal(r, n.pageID, t);
        }
        switchToFrameInternal(e, t, r) {
          var n;
          const i = e instanceof D.HC ? e : D.JJ.GetFrame(e);
          if (!i) return !1;
          const a = null != t ? i.GetPageWithID(t) : i.activePage;
          return (
            this.legacyFilteredOverlayTabs.includes(i) &&
              b.HR.SetSettingsValue(
                u.XO,
                null !== (n = null == a ? void 0 : a.summonOverlayKey) &&
                  void 0 !== n
                  ? n
                  : "",
              ),
            (this.m_activeOverlayThatVanished = null),
            null != t && i.SwitchToPage(t),
            (p.SW.activeFrame = i),
            (this.m_sLastActiveOverlaySummonKey =
              null == a ? void 0 : a.summonOverlayKey),
            (null == a ? void 0 : a.summonOverlayKey) &&
              (m.instance.RecordUIEvent(
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
                      null === (e = p.SW.activeFrame) || void 0 === e
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
              Ce.k_nTimeLimitToReturnToActiveOverlayThatVanishedSeconds &&
              n.push(this.m_activeOverlayThatVanished.sSummonKey);
          }
          (null == i ||
            (i == u.Sx && !this.m_bUserManuallySwitchToOldLibrary)) &&
            n.push(u.wi),
            null == i && n.push(u.Sx);
          for (const e of n) {
            const t = D.JJ.GetFramesWithAssociatedSummonKeys(e).filter(
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
        getActiveOverlayKey() {
          var e, t, r, n, i;
          return (null ===
            (t =
              null === (e = p.SW.activeFrame) || void 0 === e
                ? void 0
                : e.activePage) || void 0 === t
            ? void 0
            : t.summonOverlayKey) == u.Xk
            ? null === (r = this.m_refDesktopView.current) || void 0 === r
              ? void 0
              : r.sCurrentOverlayKey
            : null ===
                  (i =
                    null === (n = p.SW.activeFrame) || void 0 === n
                      ? void 0
                      : n.activePage) || void 0 === i
              ? void 0
              : i.summonOverlayKey;
        }
        getActiveOverlayState() {
          const e = this.getActiveOverlayKey();
          return p.SW.m_mapOverlayState.get(e);
        }
        getActiveOverlayDockLocation() {
          var e;
          const t = this.getActiveOverlayState();
          return null !== (e = null == t ? void 0 : t.dockLocation) &&
            void 0 !== e
            ? e
            : f.$z.Dashboard;
        }
        hideMessageOverlay() {
          var e, t;
          (null ===
            (t =
              null === (e = p.SW.activeFrame) || void 0 === e
                ? void 0
                : e.activePage) || void 0 === t
            ? void 0
            : t.summonOverlayKey) == u.Qv && this.switchToHomeOverlay();
        }
        onShowDashboardRequested(e, t) {
          var r;
          if (!b.HR.settings.get("/settings/dashboard/enableDashboard")) return;
          const n = p.SW.m_mapOverlayState.get(e.overlay_key);
          if ((null == n ? void 0 : n.dockLocation) != f.$z.Theater)
            if (
              (t &&
                (this.show(
                  null !== (r = e.reason) && void 0 !== r ? r : "unknown",
                ),
                this.setDashboardVisibility(
                  !0,
                  e.tracked_device_index,
                  e.reason,
                )),
              e.overlay_key)
            )
              (null == n ? void 0 : n.dockLocation) != f.$z.Boot &&
                this.switchToOverlayInternal(e.overlay_key, e.reason);
            else if (p.SW.isTheaterMode) {
              p.SW.getTheaterOverlay() != u.wi &&
                N.p.Steam.ExecuteSteamURL({
                  url: "steam://open/apprunningcontrols",
                }).catch((e) => {
                  console.error("ExecuteSteamURL Error:", e);
                });
            } else this.autoSwitchOverlayIfNeeded();
        }
        onDockOverlayRequested(e) {
          if (!e.dock_location)
            return void console.log(
              "dock_overlay_requested: dock_location not specified",
              e,
            );
          const t = f.$z[e.dock_location.toString()];
          if (void 0 === t)
            return void console.log(
              "dock_overlay_requested: invalid dock_location",
              e,
            );
          const r = p.SW.m_mapOverlayState.get(e.overlay_key);
          r
            ? r.dockLocation != t
              ? this.setOverlayDockLocation(e.overlay_key, t)
              : console.log(
                  "dock_overlay_requested: ignoring redundant request",
                  e,
                )
            : console.log("dock_overlay_requested: unknown overlay_key", e);
        }
        onHideDashboardRequested(e) {
          if (!p.SW.showLoadingThrobberOrBootOverlay)
            if (VRHTML.VRDashboardManager.HasMessageOverlay())
              this.switchToOverlayInternal(u.Qv, "onHideDashboardRequested");
            else {
              this.hideMessageOverlay(),
                VRHTML.VRDashboardManager.CloseKeyboard(),
                this.hide(e.reason),
                this.setDashboardVisibility(!1, void 0, e.reason);
              for (const e of p.SW.m_mapOverlayState.values())
                e.bSuppressDoubleOverlayControlBar = !1;
            }
        }
        onVRLinkRoomSetup(e) {
          e.mode == i.$Z.RecenterCountdown
            ? H.H.setRoomSetupStep(1)
            : e.mode == i.$Z.FloorAdjustExisting
              ? H.H.setRoomSetupStep(2)
              : e.mode == i.$Z.RoomSetupFloor
                ? H.H.setRoomSetupStep(3)
                : e.mode == i.$Z.ClearRoomSetup
                  ? VRHTML.VRChaperoneSetup.ClearRoomSetup()
                  : console.error("Unknown onVRLinkRoomSetup mode ", e.mode);
        }
        onRequiredRoomSetup(e) {
          H.H.startRequiredRoomSetupIfNeeded();
        }
        onDisableTheaterMode(e) {
          console.log("onDisableTheaterMode"), p.SW.HideTheaterOverlay();
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
          if (p.SW.m_bDashboardVisible) return;
          m.instance.StartDashboardSession(e);
          this.m_mailbox.SendMessage("desktopview", {
            type: "request_window_list_update",
          });
          const t = _.G.Instance.SceneAppKey,
            r = _.G.Instance.SceneAppIsHome;
          t &&
            t != this.state.sLastShownAppKey &&
            (this.setState({ sLastShownAppKey: t }),
            r
              ? this.switchToHomeOverlay()
              : this.switchToOverlayInternal(u.dw, "show")),
            (this.m_activeOverlayThatVanished = null),
            (p.SW.m_bDashboardVisible = !0),
            (0, i.Em)();
        }
        hide(e) {
          p.SW.m_bDashboardVisible &&
            ((this.m_activeOverlayThatVanished = null),
            (p.SW.m_bDashboardVisible = !1),
            this.setState({ eShowPopoverMenu: De.None }),
            m.instance.EndDashboardSession(e));
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
            r = b.HR.settings.get("/settings/dashboard/allowAppQuitting"),
            n = null === (e = x.DZ[3]) || void 0 === e ? void 0 : e.isValid;
          let a = !1;
          if (VRHTML) {
            VRHTML.VROverlay.GetPrimaryDashboardDevice() >= 0 &&
              (a = VRHTML.VRProperties.GetBoolProperty(
                VRHTML.VROverlay.GetPrimaryDashboardDevice(),
                i.fD.DeviceCanPowerOff_Bool,
              ));
          }
          const s = _.G.Instance.SceneAppName,
            l = _.G.Instance.SceneAppIsHome;
          let c, m;
          return (
            (c = l
              ? (0, d.we)("#Exit_SteamVR_Home")
              : s
                ? (0, d.we)("#PowerMenuQuitSceneApp", s)
                : (0, d.we)("#PowerMenuQuitSceneApp_NoApp")),
            (m = l
              ? "/dashboard/images/icons/svr_svrhome_quit_alt.svg"
              : "/dashboard/images/icons/svr_app_quit.svg"),
            this.renderPopoverMenu(
              o.createElement(
                o.Fragment,
                null,
                p.SW.isVRGamepadUI &&
                  o.createElement(R.Hz, {
                    label: (0, d.we)("#OldLibrary"),
                    lineBelow: !0,
                    onClick: () => {
                      (this.m_bUserManuallySwitchToOldLibrary = !0),
                        this.switchToOverlayInternal(u.Sx),
                        this.showPopoverMenu(De.None);
                    },
                  }),
                a &&
                  o.createElement(R.Hz, {
                    label: (0, d.we)("#PowerMenuTurnOffController"),
                    imageUrl:
                      "/dashboard/images/icons/svr_controller_power.svg",
                    onClick: () => {
                      null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.TurnOffVRController(),
                        this.showPopoverMenu(De.None);
                    },
                  }),
                r &&
                  t &&
                  o.createElement(R.Hz, {
                    label: c,
                    imageUrl: m,
                    onClick: () => {
                      null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.QuitSceneApp(),
                        this.showPopoverMenu(De.None);
                    },
                  }),
                o.createElement(R.Hz, {
                  label: (0, d.we)("#PowerMenuExitVR"),
                  imageUrl: "/dashboard/images/icons/svr_svr_quit_alt.svg",
                  onClick: () =>
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.QuitOpenVR(),
                }),
                n &&
                  o.createElement(R.Hz, {
                    label: (0, d.we)("#PowerMenuShutdown"),
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
            this.setState({ eShowPopoverMenu: De.None });
          }, e);
        }
        clearPopoverMenuTimeout() {
          this.m_timeoutPopoverMenuHide &&
            (clearTimeout(this.m_timeoutPopoverMenuHide),
            (this.m_timeoutPopoverMenuHide = 0));
        }
        showPopoverMenu(e) {
          this.setState({ eShowPopoverMenu: e }),
            this.clearPopoverMenuTimeout();
        }
        renderPopoverMenu(e) {
          return o.createElement(
            "div",
            {
              className: "PowerMenuContainer",
              onMouseLeave: this.popoverMenuMouseLeave,
              onMouseEnter: this.clearPopoverMenuTimeout,
              ref: this.m_refPopoverMenu,
            },
            o.createElement(c.W, { className: "PowerMenuPanel" }, e),
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
            null !== (e = b.HR.settings.get(u.Vv)) && void 0 !== e ? e : 0.7;
          for (let e of t) {
            let t = (0, i.e_)((0, i.JZ)(e[3], e[0])),
              a = (0, i.e_)((0, i.JZ)(e[1], e[0])),
              s = (0, i.oN)(t, a),
              l = (0, i.Ld)((0, i.qF)(t, a, s)),
              c = (0, i.Uj)((0, i.JZ)(e[0], e[3]));
            if (c < 0.4) continue;
            let u = Math.max(1, Math.floor(c));
            for (let t = 0; t < u; t++) {
              let a = (t + 1) / (u + 1),
                s = (0, i.vx)();
              (s.rotation = l),
                (s.translation = (0, i.Se)(a, e[0], e[3])),
                (s.scale = { x: 0.005, y: 0.005, z: n });
              let c = o.createElement(
                i.dL,
                { transform: s },
                o.createElement(
                  i.Y4,
                  { value: 0.25 },
                  o.createElement(
                    i.N,
                    { color: { r: 0.2, g: 0.2, b: 0.2 } },
                    o.createElement(i.aX, {
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
                  null === (e = p.SW.activeFrame) || void 0 === e
                    ? void 0
                    : e.activePage) || void 0 === t
                ? void 0
                : t.summonOverlayKey,
            n =
              p.SW.m_bDashboardVisible && this.state.setForcingBoundsVisible[r],
            i = n && n.size > 0,
            a = 0 != H.H.roomSetupStep;
          let s = [];
          return (
            i && (s = this.getCollisionBoundsFadeVisualizationElements()),
            o.createElement(
              o.Fragment,
              null,
              !a &&
                o.createElement(
                  "div",
                  { className: "DashboardMain" },
                  i && o.createElement(ke, null),
                  i && o.createElement("span", null, s),
                  o.createElement(Le, null, this.renderDashboardContents()),
                  o.createElement(G, null),
                  this.renderInternalOverlays(),
                  o.createElement(Ge, null),
                  o.createElement(ze, null),
                  this.renderOverlayWidgets(),
                  !1,
                ),
            )
          );
        }
        renderExternalOverlayControlBarButton(e) {
          const t = ve(e),
            r = R.R0.Center;
          return o.createElement(R.Te, {
            key: e.frameID,
            label: e.title,
            imageUrl: t,
            imageStyle: r,
            active: p.SW.activeFrame == e,
            onClick: () => this.switchToFrameInternal(e),
          });
        }
        isLegacyDesktopTrayActive() {
          var e, t, r, n, i;
          return (
            ((null ===
              (t =
                null === (e = p.SW.activeFrame) || void 0 === e
                  ? void 0
                  : e.activePage) || void 0 === t
              ? void 0
              : t.summonOverlayKey) == u.Xk ||
              (null ===
                (i =
                  null ===
                    (n =
                      null === (r = p.SW.activeFrame) || void 0 === r
                        ? void 0
                        : r.activePage) || void 0 === n
                    ? void 0
                    : n.summonOverlayKey) || void 0 === i
                ? void 0
                : i.startsWith(u.Uv))) &&
            (this.state.eShowPopoverMenu == De.None ||
              this.state.eShowPopoverMenu == De.Windows)
          );
        }
        ToggleIncognitoMode(e) {
          let t = {
            type: "toggle_voicechat",
            enable: null != e ? e : !p.SW.isGroupMode,
          };
          this.m_mailbox.SendMessage("web_steam_mailbox", t);
        }
        renderLegacyControlBar(e, t) {
          var r, n, a, s, l, m, h, g, S, y, f, w, C, M;
          const T =
              null ===
                (r = b.HR.settings.get(
                  "/settings/dashboard/showPowerOptions",
                )) ||
              void 0 === r ||
              r,
            E =
              null ===
                (n = b.HR.settings.get("/settings/dashboard/showDesktop")) ||
              void 0 === n ||
              n,
            V =
              null === (a = D.JJ.GetFramesWithAssociatedSummonKeys(u.Sx)[0]) ||
              void 0 === a
                ? void 0
                : a.tabVisibility.bVisibleInDashboardBar,
            k = !(
              null !==
                (s = b.HR.settings.get("/settings/dashboard/arcadeMode")) &&
              void 0 !== s &&
              s
            ),
            O = _.G.Instance.SceneApplicationState,
            A = _.G.Instance.SceneAppIsHome,
            I =
              null ===
                (l = b.HR.settings.get("/settings/dashboard/allowCurvature")) ||
              void 0 === l ||
              l
                ? u.uv
                : null,
            B = _.G.Instance.SceneAppKey;
          let H = "images/appimage_default.png";
          return (
            B && (H = "/app/image?app_key=" + B),
            o.createElement(
              o.Fragment,
              null,
              o.createElement(
                o.Fragment,
                null,
                o.createElement(
                  i.N,
                  { color: p.SW.ControlBarTint },
                  o.createElement(
                    i.dL,
                    { translation: { z: 1e-5 } },
                    o.createElement(
                      i.Zk,
                      {
                        curvature_origin_id: I,
                        meters_per_pixel: u.iZ,
                        interactive: !0,
                        debug_name: "Controls",
                      },
                      o.createElement(
                        c.W,
                        { className: "ControlBar MainControlBar" },
                        o.createElement(
                          "div",
                          { className: "Section Left" },
                          T &&
                            o.createElement(R.WO, {
                              imageUrl:
                                "/dashboard/images/icons/svr_menu_c.svg",
                              label: (0, d.we)("#Menu"),
                              style: R.gZ.Small,
                              onClick: () => this.showPopoverMenu(De.Power),
                              onMouseEnter: this.clearPopoverMenuTimeout,
                              onMouseLeave: () =>
                                this.startPopoverMenuTimeout(500),
                            }),
                          o.createElement(
                            R.OR,
                            { style: R.gZ.Small },
                            V &&
                              o.createElement(R.Te, {
                                label: (0, d.we)("#Library"),
                                imageUrl:
                                  "/dashboard/images/icons/svr_items.svg",
                                active:
                                  (null ===
                                    (h =
                                      null === (m = p.SW.activeFrame) ||
                                      void 0 === m
                                        ? void 0
                                        : m.activePage) || void 0 === h
                                    ? void 0
                                    : h.summonOverlayKey) == u.Sx,
                                onClick: this.onLegacyQuickLaunchButtonClick,
                              }),
                            E &&
                              o.createElement(R.Te, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_desktop_alt.svg",
                                label: (0, d.we)("#Desktops"),
                                active: this.isLegacyDesktopTrayActive(),
                                onClick: () =>
                                  this.switchToOverlayInternal(u.Xk),
                              }),
                          ),
                          o.createElement(
                            R.OR,
                            { style: R.gZ.Small },
                            o.createElement(
                              o.Fragment,
                              null,
                              e.map(this.renderExternalOverlayControlBarButton),
                              t.length > 0 &&
                                o.createElement(R.Te, {
                                  imageUrl:
                                    "/dashboard/images/icons/svr_more.svg",
                                  label: (0, d.we)(
                                    "#X_More_Overlays",
                                    t.length,
                                  ),
                                  active:
                                    this.state.eShowPopoverMenu ==
                                    De.ExternalOverlays,
                                  onClick: () =>
                                    this.showPopoverMenu(De.ExternalOverlays),
                                  onMouseEnter: this.clearPopoverMenuTimeout,
                                  onMouseLeave: () =>
                                    this.startPopoverMenuTimeout(500),
                                }),
                            ),
                          ),
                        ),
                        o.createElement(
                          "div",
                          { className: "Section Center" },
                          O != i.HW.None &&
                            o.createElement(
                              "div",
                              { className: "NowPlayingSpacer" },
                              o.createElement(
                                v.l,
                                {
                                  allowableParentSelectors: [".DashboardMain"],
                                },
                                o.createElement(
                                  i.N,
                                  { color: p.SW.ControlBarTint },
                                  o.createElement(
                                    i.dL,
                                    { translation: { z: 0.02 } },
                                    o.createElement(
                                      i.Zk,
                                      {
                                        debug_name: "NowPlayingButton",
                                        interactive: !0,
                                        curvature_origin_id: I,
                                        meters_per_pixel: u.iZ,
                                      },
                                      o.createElement(
                                        "div",
                                        { className: "ControlBar" },
                                        o.createElement(R.WO, {
                                          label: A
                                            ? (0, d.we)("#SteamVR_Home")
                                            : (0, d.we)("#Now_Playing"),
                                          active:
                                            (null ===
                                              (S =
                                                null ===
                                                  (g = p.SW.activeFrame) ||
                                                void 0 === g
                                                  ? void 0
                                                  : g.activePage) ||
                                            void 0 === S
                                              ? void 0
                                              : S.summonOverlayKey) == u.dw,
                                          style: R.gZ.App,
                                          imageUrl: H,
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
                        o.createElement(
                          "div",
                          { className: "Section Right" },
                          o.createElement(
                            R.OR,
                            { style: R.gZ.Small },
                            (null === (y = x.DZ[8]) || void 0 === y
                              ? void 0
                              : y.isValid) &&
                              o.createElement(R.Te, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_recenter.svg",
                                additionalClassNames: "CenterImageLarge",
                                label: (0, d.we)("#Button_Recenter"),
                                onClick: () => {
                                  x.DZ[8].Invoke();
                                },
                              }),
                            (null === (f = x.DZ[10]) || void 0 === f
                              ? void 0
                              : f.isValid) &&
                              o.createElement(R.Te, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_room_setup.svg",
                                additionalClassNames: "CenterImageLarge",
                                label: (0, d.we)("#RoomSetup"),
                                onClick: () => {
                                  x.DZ[10].Invoke();
                                },
                              }),
                            (null === (w = x.DZ[4]) || void 0 === w
                              ? void 0
                              : w.isValid) &&
                              o.createElement(R.Te, {
                                imageUrl: "/dashboard/images/icons/svr_eye.svg",
                                label: (0, d.we)("#Toggle_Room_View"),
                                onClick: () => {
                                  x.DZ[4].Invoke(!$.c.roomViewEnabled);
                                },
                                active: $.c.roomViewEnabled,
                                enabled:
                                  null === VRHTML || void 0 === VRHTML
                                    ? void 0
                                    : VRHTML.VROverlayInternal.HasCameraRoomViewCapability(),
                              }),
                            o.createElement(R.Tr, {
                              active: this.state.eShowPopoverMenu == De.Volume,
                              refVolumeTray: this.m_refVolumeTray,
                              onShowTray: () => this.showPopoverMenu(De.Volume),
                              onHideTray: () => this.showPopoverMenu(De.None),
                              onMouseEnter: this.clearPopoverMenuTimeout,
                              onMouseLeave: () =>
                                this.startPopoverMenuTimeout(500),
                            }),
                          ),
                          k &&
                            o.createElement(R.WO, {
                              imageUrl:
                                "/dashboard/images/icons/svr_settings.svg",
                              active:
                                (null ===
                                  (M =
                                    null === (C = p.SW.activeFrame) ||
                                    void 0 === C
                                      ? void 0
                                      : C.activePage) || void 0 === M
                                  ? void 0
                                  : M.summonOverlayKey) == u.Wt,
                              enabled: D.JJ.HasFramesWithAssociatedSummonKeys(
                                u.Wt,
                              ),
                              label: (0, d.we)("#VRSettings"),
                              style: R.gZ.Small,
                              centerPanelAnchorID: "VolumeButton",
                              onClick: () => this.switchToOverlayInternal(u.Wt),
                            }),
                        ),
                      ),
                      this.renderLegacyControlBarTrays(I),
                      o.createElement(i.dL, {
                        id: u.zM,
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
          const r = p.SW.isDarkMode ? { r: 0.25, g: 0.25, b: 0.25 } : null;
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(w.R, {
              ref: this.m_refDesktopTray,
              curvatureOriginId: e,
              scale: t,
              position: 0,
              visible: this.isLegacyDesktopTrayActive(),
              tintColor: r,
              onToggleWindowList: () => this.showPopoverMenu(De.Windows),
              onClearPopoverMenuTimeout: () => this.clearPopoverMenuTimeout(),
              onStartPopoverMenuTimeout: (e) => this.startPopoverMenuTimeout(e),
              mapWindows: this.m_mapWindows,
              sort_depth_bias: 0.2,
              bWindowViewEnabled: this.state.bWindowViewEnabled,
            }),
            o.createElement(R.DN, {
              ref: this.m_refVolumeTray,
              curvatureOriginId: e,
              scale: t,
              position: 0.337,
              visible: this.state.eShowPopoverMenu == De.Volume,
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
        renderOverlayWidgets() {
          let e = Array.from(p.SW.m_mapOverlayState, ([e, t]) => ({
            sOverlayKey: e,
            overlayState: t,
          })).filter((e) => e.overlayState.dockLocation != f.$z.Dashboard);
          return o.createElement(
            o.Fragment,
            null,
            e.map((e) => {
              var t;
              return o.createElement(f.BO, {
                bDashboardShown: p.SW.m_bDashboardVisible,
                bHasSceneApp: _.G.Instance.SceneApplicationState !== i.HW.None,
                dockLocation: e.overlayState.dockLocation,
                setOverlayDockLocation: this.setOverlayDockLocation,
                ShowMultitaskingView:
                  null === (t = this.m_refDesktopView.current) || void 0 === t
                    ? void 0
                    : t.ShowMultitaskingView,
                sOverlayKey: e.sOverlayKey,
                xfInitial: e.overlayState.xfInitial,
                key: e.sOverlayKey,
                ref: e.overlayState.refOverlayWidget,
              });
            }),
          );
        }
        getRenderModelForShape(e) {
          return "";
        }
        renderPassthroughPortals() {
          return null;
        }
        isDesktopViewVisible() {
          var e, t;
          return (
            p.SW.m_bDashboardVisible &&
            (null ===
              (t =
                null === (e = p.SW.activeFrame) || void 0 === e
                  ? void 0
                  : e.activePage) || void 0 === t
              ? void 0
              : t.summonOverlayKey) == u.Xk &&
            (0, f.Ox)(this.getActiveOverlayDockLocation())
          );
        }
        onGameLaunched(e) {
          (!e.is_dashboard_overlay ||
            (e.is_dashboard_overlay && !e.show_overlay_in_quicklaunch)) &&
            (null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRDashboardManager.HideDashboard("game_launched"));
        }
        renderInternalOverlays() {
          var e, t, r, n;
          const i =
              null !==
                (t =
                  null === (e = this.m_refDesktopView.current) || void 0 === e
                    ? void 0
                    : e.currentDesktopIndex) && void 0 !== t
                ? t
                : 1,
            a =
              null !==
                (n =
                  null === (r = this.m_refDesktopView.current) || void 0 === r
                    ? void 0
                    : r.desktopCount) && void 0 !== n
                ? n
                : 1;
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(pe, { onGameLaunched: this.onGameLaunched }),
            o.createElement(O, { onExitGame: this.switchToHomeOverlay }),
            o.createElement(
              D.wI,
              {
                title:
                  a > 1 ? (0, d.we)("#Desktop_X", i) : (0, d.we)("#Desktop"),
                iconEnum: 18,
                showTabInDashboardBar: !1,
              },
              o.createElement(
                D.P9,
                { summonOverlayKey: u.Xk, renderChildren: "always" },
                o.createElement(w.E, {
                  visible: this.isDesktopViewVisible(),
                  mapWindows: this.m_mapWindows,
                  bWindowViewEnabled: this.state.bWindowViewEnabled,
                  ref: this.m_refDesktopView,
                }),
              ),
            ),
            !1,
          );
        }
        onAddPortal(e, t) {}
        onRemovePortal(e) {}
        get activeOverlayScale() {
          var e, t;
          return null !==
            (t =
              null === (e = this.getActiveOverlayState()) || void 0 === e
                ? void 0
                : e.fScale) && void 0 !== t
            ? t
            : 1;
        }
        onActiveOverlayScaleChange(e) {
          const t = this.getActiveOverlayState();
          t && (t.fScale = e);
        }
        onActiveOverlayClosed() {
          var e;
          const t = this.getActiveOverlayKey();
          t &&
            (t.startsWith(u.Uv)
              ? null === (e = this.m_refDesktopView.current) ||
                void 0 === e ||
                e.onWindowViewClosed(t)
              : this.switchToHomeOverlay(),
            VRHTML.VRDashboardManager.SendOverlayClosed(t));
        }
        renderOverlayControlBar() {
          var e, t, r;
          const n = this.getActiveOverlayKey(),
            a =
              null !==
                (e = q.Q.GetOverlayFlag(n, i.NB.EnableControlBarClose)) &&
              void 0 !== e &&
              e,
            s =
              null ===
                (t = b.HR.settings.get("/settings/dashboard/allowCurvature")) ||
              void 0 === t ||
              t
                ? u.uv
                : null,
            l = { x: 0, y: 0.15, z: 0 },
            c = p.SW.m_mapOverlayState.get(n),
            m = !c || (null == c ? void 0 : c.dockLocation) == f.$z.Dashboard,
            h =
              q.Q.GetOverlayFlag(n, i.NB.EnableControlBarKeyboard) || n == u.Bn,
            g =
              (null == n ? void 0 : n.startsWith(u.GO)) &&
              (null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.BSupportsMultitaskingView());
          return !c || c.bSuppressDoubleOverlayControlBar
            ? null
            : o.createElement(
                o.Fragment,
                null,
                o.createElement(
                  i.dL,
                  { parent_id: u.zM },
                  o.createElement(
                    o.Fragment,
                    null,
                    o.createElement(
                      i.Zk,
                      {
                        curvature_origin_id: s,
                        origin: i.Oi.TopCenter,
                        interactive: !0,
                        meters_per_pixel: u.iZ,
                        debug_name: "ActiveOverlayControlBar",
                        reflect: 0.1,
                      },
                      o.createElement(
                        "div",
                        { className: "TransparentOverlayControlBar" },
                        o.createElement(
                          "div",
                          { className: "Section" },
                          h &&
                            o.createElement(R.oZ, {
                              tooltipTranslation: l,
                              overlayKey: this.getActiveOverlayKey(),
                              additionalClassNames: "LargeIcon",
                            }),
                          g &&
                            o.createElement(R.N2, {
                              iconUrl:
                                "/dashboard/images/icons/icon_multitasking_view.png",
                              title: (0, d.we)("#MultitaskingView"),
                              tooltipTranslation: l,
                              onClick:
                                null === (r = this.m_refDesktopView.current) ||
                                void 0 === r
                                  ? void 0
                                  : r.ShowMultitaskingView,
                            }),
                        ),
                        o.createElement(
                          "div",
                          { className: "Section" },
                          !m &&
                            o.createElement(R.N2, {
                              icon: o.createElement(j.Xj, null),
                              title: (0, d.we)("#ReturnToDashboard"),
                              tooltipTranslation: l,
                              onClick: () => {
                                const e = this.getActiveOverlayKey();
                                this.setOverlayDockLocation(e, f.$z.Dashboard);
                              },
                              additionalClassNames: "LargeIcon",
                            }),
                          m &&
                            o.createElement(
                              o.Fragment,
                              null,
                              o.createElement(R.N2, {
                                iconUrl:
                                  "/dashboard/images/icons/mirror_left.png",
                                title: (0, d.we)("#DockOnLeftController"),
                                tooltipTranslation: l,
                                onClick: () => {
                                  const e = this.getActiveOverlayKey();
                                  this.setOverlayDockLocation(e, f.$z.LeftHand);
                                },
                                enabled:
                                  VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                                    i.kG.TrackedControllerRole_LeftHand,
                                  ) != i.ne,
                                active:
                                  this.getActiveOverlayDockLocation() ==
                                  f.$z.LeftHand,
                                additionalClassNames: "LargeIcon",
                              }),
                              o.createElement(R.N2, {
                                iconUrl:
                                  "/dashboard/images/icons/mirror_right.png",
                                title: (0, d.we)("#DockOnRightController"),
                                tooltipTranslation: l,
                                onClick: () => {
                                  const e = this.getActiveOverlayKey();
                                  this.setOverlayDockLocation(
                                    e,
                                    f.$z.RightHand,
                                  );
                                },
                                enabled:
                                  VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                                    i.kG.TrackedControllerRole_RightHand,
                                  ) != i.ne,
                                active:
                                  this.getActiveOverlayDockLocation() ==
                                  f.$z.RightHand,
                                additionalClassNames: "LargeIcon",
                              }),
                              " ",
                            ),
                        ),
                        (m || a) &&
                          o.createElement(
                            "div",
                            { className: "Section" },
                            m &&
                              o.createElement(R.N2, {
                                icon: o.createElement(j.YN, null),
                                title: (0, d.we)("#FloatInWorld"),
                                tooltipTranslation: l,
                                onClick: () => {
                                  const e = this.getActiveOverlayKey();
                                  this.setOverlayDockLocation(e, f.$z.World);
                                },
                                active:
                                  this.getActiveOverlayDockLocation() ==
                                  f.$z.World,
                              }),
                            m &&
                              o.createElement(R.N2, {
                                icon: o.createElement(j.fr, null),
                                title: (0, d.we)("#ViewInTheater"),
                                tooltipTranslation: l,
                                onClick: () => {
                                  const e = this.getActiveOverlayKey();
                                  this.setOverlayInTheater(e, !1);
                                },
                                active:
                                  this.getActiveOverlayDockLocation() ==
                                  f.$z.Theater,
                                additionalClassNames: "LargeIcon",
                              }),
                            a &&
                              o.createElement(R.N2, {
                                iconUrl:
                                  "/dashboard/images/icons/icon_close_black.png",
                                title: (0, d.we)(
                                  Oe(n) ? "#QuitApp" : "#CloseOverlay",
                                ),
                                tooltipTranslation: l,
                                onClick: this.onActiveOverlayClosed,
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
          var e, t, r, n, a, s, l, c;
          const d = p.SW.activeFrame,
            m = p.SW.isVRGamepadUIReady,
            h = !p.SW.isVRGamepadUI || p.SW.m_bShowLegacyDashboardBar,
            g = !p.SW.isVRGamepadUI;
          let v = [],
            _ = [],
            S = null !== (e = b.HR.settings.get(u.lP)) && void 0 !== e ? e : 2;
          if (this.legacyFilteredOverlayTabs.length > S) {
            const e = b.HR.settings.get(u.XO);
            (v = [
              null !==
                (t = this.legacyFilteredOverlayTabs.find((t) =>
                  t.associatedSummonOverlayKeys.includes(e),
                )) && void 0 !== t
                ? t
                : this.legacyFilteredOverlayTabs[0],
            ]),
              (_ = this.legacyFilteredOverlayTabs.filter(
                (e) => !v.includes(e),
              ));
          } else v = this.legacyFilteredOverlayTabs;
          let y = [];
          this.m_mapWindows.forEach((e) => {
            "" == e.overlay_key && y.push(e);
          });
          const w = this.getActiveOverlayDockLocation(),
            C = (0, f.C0)(w),
            M = (0, f.Ox)(w),
            T = this.getActiveOverlayKey(),
            E =
              null === (r = q.Q.GetOverlayFlag(T, i.NB.MinimalControlBar)) ||
              void 0 === r ||
              r,
            V =
              null ===
                (n = b.HR.settings.get("/settings/dashboard/allowCurvature")) ||
              void 0 === n ||
              n,
            D = V ? u.uv : null,
            k = { y: E ? -1.03375 : -0.9, z: 0.05 },
            O = m ? { y: -1.2, z: 0.35 } : { y: -1.2, z: 0.15 },
            A = Ce.k_nControlBarPitch;
          let H = V ? 1 : 0;
          const L =
            null === (a = null == d ? void 0 : d.activePage) || void 0 === a
              ? void 0
              : a.GetPanelAnchorID(i.Oi.TopCenter);
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              i.dL,
              { parent_id: L },
              g &&
                L &&
                o.createElement(fe, {
                  sCurvatureOriginId: D,
                  currentDesktopIndex:
                    null === (s = this.m_refDesktopView.current) || void 0 === s
                      ? void 0
                      : s.currentDesktopIndex,
                  currentDesktopWindowTitle:
                    null ===
                      (c = this.m_mapWindows.get(
                        null === (l = this.m_refDesktopView.current) ||
                          void 0 === l
                          ? void 0
                          : l.currentWindowHwnd,
                      )) || void 0 === c
                      ? void 0
                      : c.title,
                }),
            ),
            o.createElement(
              i.dL,
              {
                id: "active_overlay_transform",
                translation: k,
                ref: this.m_refOverlayTransform,
              },
              !C && M && this.renderActiveOverlay(),
            ),
            !1,
            Ee,
            o.createElement(
              i.dL,
              { parent_id: m ? u.NX : u.kx },
              o.createElement(B.X, {
                curvature_origin_id: D,
                tint: p.SW.GrabHandleTint,
                onStartMove: this.onGrabStart,
                onEndMove: this.onGrabEnd,
              }),
            ),
            !1,
            o.createElement(
              i.dL,
              { translation: O, id: u.Sp },
              !E && this.renderOverlayControlBar(),
              o.createElement(i.dL, {
                id: u.kx,
                translation: { y: 0.08, z: -0.12 },
              }),
              o.createElement(
                i.dL,
                {
                  rotation: { x: A },
                  curvature_pitch: A,
                  translation: m ? { y: -0.65, z: 0.2 } : {},
                },
                h && this.renderLegacyControlBar(v, _),
                o.createElement(
                  i.dL,
                  { translation: { y: -0.65, z: -0.01 } },
                  o.createElement(he, null),
                ),
              ),
              m &&
                o.createElement(
                  i.dL,
                  { rotation: { x: A }, curvature_pitch: A },
                  o.createElement(Pe, { curvature_origin_id: D }),
                ),
              o.createElement(
                i.dL,
                { rotation: { x: A } },
                o.createElement(
                  i.dL,
                  { translation: Ce.k_nKeyboardGrabTransformOffset },
                  o.createElement(
                    I.B,
                    { min_distance: 0.2, should_head_align: !1 },
                    o.createElement(
                      i.dL,
                      {
                        translation: {
                          x: -1 * Ce.k_nKeyboardGrabTransformOffset.x,
                          y: -1 * Ce.k_nKeyboardGrabTransformOffset.y,
                          z: -1 * Ce.k_nKeyboardGrabTransformOffset.z,
                        },
                      },
                      o.createElement(
                        i.dL,
                        { rotation: { x: -10 }, curvature_pitch: A },
                        !1,
                        p.SW.m_bKeyboardVisible &&
                          p.SW.m_bKeyboardDockedInDashboard &&
                          o.createElement(z, {
                            debugHostLocation: "Dashboard",
                            onGrabStart: this.onGrabStart,
                            onGrabEnd: this.onGrabEnd,
                          }),
                      ),
                    ),
                  ),
                ),
              ),
              this.state.eShowPopoverMenu == De.Power &&
                o.createElement(
                  i.dL,
                  {
                    translation: { x: -1.25, y: 0.15, z: 0.3 },
                    rotation: { y: 27 * H },
                  },
                  o.createElement(
                    i.Zk,
                    {
                      curvature_origin_id: D,
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
              this.state.eShowPopoverMenu == De.ExternalOverlays &&
                o.createElement(
                  i.dL,
                  {
                    translation: { x: 0.2, y: 0.15, z: 0.05 },
                    rotation: { y: 6 * H },
                  },
                  o.createElement(
                    i.Zk,
                    {
                      curvature_origin_id: D,
                      height: void 0,
                      width: 0.925,
                      interactive: !0,
                      origin: i.Oi.BottomRight,
                      debug_name: "OverlaysList",
                      sort_depth_bias: -0.1,
                    },
                    this.renderPopoverMenu(
                      o.createElement(
                        o.Fragment,
                        null,
                        " ",
                        _.map((e) =>
                          o.createElement(R.Hz, {
                            key: e.frameID,
                            imageUrl: ve(e),
                            label: e.title,
                            onClick: () => {
                              this.switchToFrameInternal(e),
                                this.showPopoverMenu(De.None);
                            },
                          }),
                        ),
                        " ",
                      ),
                    ),
                  ),
                ),
              this.state.eShowPopoverMenu == De.Windows &&
                o.createElement(
                  i.dL,
                  {
                    translation: { x: 1.25, y: -0.1, z: 0.35 },
                    rotation: { y: -16 * H },
                  },
                  o.createElement(
                    i.Zk,
                    {
                      curvature_origin_id: D,
                      height: void 0,
                      width: 0.925,
                      interactive: !0,
                      origin: i.Oi.BottomRight,
                      debug_name: "WindowList",
                      sort_depth_bias: -0.1,
                    },
                    this.renderPopoverMenu(
                      o.createElement(
                        o.Fragment,
                        null,
                        " ",
                        y.map((e) =>
                          o.createElement(R.Hz, {
                            key: e.hwnd,
                            imageUrl: "/dashboard/images/icons/icon_add.png",
                            label: e.title,
                            onClick: () => {
                              let t = {
                                type: "request_spawn_window_view",
                                hwnd: e.hwnd,
                              };
                              this.m_mailbox.SendMessage("desktopview", t),
                                this.showPopoverMenu(De.None);
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
      (He.k_sDashboardMailboxName = "systemui_dashboard_private"),
        (He.k_sSetDashboardFadeSupressionMessage =
          "set_dashboard_fade_suppression"),
        (He.k_sDashboardOverlayCreatedMessage = "dashboard_overlay_created"),
        (He.k_sDashboardOverlayDestroyedMessage =
          "dashboard_overlay_destroyed"),
        (He.k_sWindowViewCreatedMessage = "window_view_created"),
        (He.k_sWindowViewDestroyedMessage = "window_view_destroyed"),
        (He.k_sUpdateWindowListMessage = "update_window_list"),
        (He.k_sUpdateDebugInfoMessage = "update_debug_info"),
        (He.k_sSetDashboardForceBoundsVisible =
          "set_dashboard_force_bounds_visible"),
        (He.k_nTimeLimitToReturnToActiveOverlayThatVanishedSeconds = 3),
        (He.k_nControlBarPitch = -40),
        (He.k_nKeyboardGrabTransformOffset = { x: 0, y: -0.85, z: 0.35 }),
        (0, n.Cg)([s.observable], He.prototype, "m_mapWindows", void 0),
        (0, n.Cg)([a.o], He.prototype, "onSetDashboardFadeSuppression", null),
        (0, n.Cg)([a.o], He.prototype, "onGrabStart", null),
        (0, n.Cg)([a.o], He.prototype, "onGrabEnd", null),
        (0, n.Cg)(
          [a.o],
          He.prototype,
          "onSetDashboardForceBoundsVisible",
          null,
        ),
        (0, n.Cg)([a.o], He.prototype, "onDashboardOverlayCreated", null),
        (0, n.Cg)([a.o], He.prototype, "onDashboardOverlayDestroyed", null),
        (0, n.Cg)([a.o], He.prototype, "onDashboardTabsUpdated", null),
        (0, n.Cg)([a.o], He.prototype, "onWindowViewCreated", null),
        (0, n.Cg)([a.o], He.prototype, "onWindowViewDestroyed", null),
        (0, n.Cg)([s.action.bound], He.prototype, "onUpdateWindowList", null),
        (0, n.Cg)([a.o], He.prototype, "onUpdateDebugInfo", null),
        (0, n.Cg)([a.o], He.prototype, "setOverlayInTheater", null),
        (0, n.Cg)([a.o], He.prototype, "setOverlayDockLocation", null),
        (0, n.Cg)(
          [s.computed],
          He.prototype,
          "legacyFilteredOverlayTabs",
          null,
        ),
        (0, n.Cg)([a.o], He.prototype, "switchToHomeOverlay", null),
        (0, n.Cg)(
          [s.action.bound],
          He.prototype,
          "switchToOverlayInternal",
          null,
        ),
        (0, n.Cg)(
          [s.action.bound],
          He.prototype,
          "switchToFrameInternal",
          null,
        ),
        (0, n.Cg)([a.o], He.prototype, "onShowDashboardRequested", null),
        (0, n.Cg)([a.o], He.prototype, "onDockOverlayRequested", null),
        (0, n.Cg)([a.o], He.prototype, "onHideDashboardRequested", null),
        (0, n.Cg)([a.o], He.prototype, "onVRLinkRoomSetup", null),
        (0, n.Cg)([a.o], He.prototype, "onRequiredRoomSetup", null),
        (0, n.Cg)([a.o], He.prototype, "onDisableTheaterMode", null),
        (0, n.Cg)([s.action.bound], He.prototype, "show", null),
        (0, n.Cg)([s.action.bound], He.prototype, "hide", null),
        (0, n.Cg)([a.o], He.prototype, "onLegacyQuickLaunchButtonClick", null),
        (0, n.Cg)([a.o], He.prototype, "SetGamepadFocusEnable", null),
        (0, n.Cg)([a.o], He.prototype, "renderLegacyPowerMenu", null),
        (0, n.Cg)([a.o], He.prototype, "startPopoverMenuTimeout", null),
        (0, n.Cg)([a.o], He.prototype, "clearPopoverMenuTimeout", null),
        (0, n.Cg)([a.o], He.prototype, "showPopoverMenu", null),
        (0, n.Cg)([a.o], He.prototype, "popoverMenuMouseLeave", null),
        (0, n.Cg)([a.o], He.prototype, "popoverMenuMouseUp", null),
        (0, n.Cg)(
          [a.o],
          He.prototype,
          "renderExternalOverlayControlBarButton",
          null,
        ),
        (0, n.Cg)([a.o], He.prototype, "isLegacyDesktopTrayActive", null),
        (0, n.Cg)([a.o], He.prototype, "ToggleIncognitoMode", null),
        (0, n.Cg)([a.o], He.prototype, "getRenderModelForShape", null),
        (0, n.Cg)([a.o], He.prototype, "isDesktopViewVisible", null),
        (0, n.Cg)([a.o], He.prototype, "onGameLaunched", null),
        (0, n.Cg)([a.o], He.prototype, "onAddPortal", null),
        (0, n.Cg)([a.o], He.prototype, "onRemovePortal", null),
        (0, n.Cg)([a.o], He.prototype, "onActiveOverlayScaleChange", null),
        (0, n.Cg)([a.o], He.prototype, "onActiveOverlayClosed", null),
        (He = Ce = (0, n.Cg)([S.PA], He));
      const Le = (0, S.PA)(function (e) {
          var t;
          if (!p.SW.m_bDashboardVisible) return null;
          const r =
              null ===
                (t = b.HR.settings.get("/settings/dashboard/allowCurvature")) ||
              void 0 === t ||
              t
                ? u.uv
                : null,
            n = o.createElement(
              o.Fragment,
              null,
              !1,
              o.createElement(
                i.dL,
                { translation: { y: 0.15 } },
                o.createElement(i.dL, {
                  id: r,
                  translation: { z: p.SW.dashboardDistance + 1.8 },
                }),
                o.createElement(
                  i.dL,
                  { scale: p.SW.dashboardScale },
                  null == e ? void 0 : e.children,
                ),
              ),
            ),
            a = p.SW.activeLinkServer && p.SW.isUnifiedDashboard,
            s = p.SW.activeLinkClient && p.SW.isUnifiedDashboard ? 1 : null;
          return o.createElement(
            K.tH,
            null,
            o.createElement(
              i.sJ,
              {
                bContinuousRelatch: p.SW.showLoadingThrobberOrBootOverlay,
                bFreeDashboardTransform: !1,
              },
              !p.SW.showLoadingThrobberOrBootOverlay &&
                o.createElement(
                  o.Fragment,
                  null,
                  o.createElement(
                    i.dL,
                    { translation: p.SW.dashboardTranslation },
                    o.createElement(
                      i.dL,
                      { translation: { y: -0.15 } },
                      !a &&
                        o.createElement(
                          I.B,
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
                      a && o.createElement(we, { remote_transform_rx: 1 }, n),
                    ),
                  ),
                ),
            ),
          );
        }),
        Pe = (0, S.PA)(function (e) {
          var t;
          if (p.SW.isUnifiedDashboard && p.SW.activeLinkServer) return null;
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
              p.SW.isVRGamepadUI &&
              !p.SW.isUnifiedDashboard &&
              r &&
              p.SW.m_bLinkStreamActive;
          let a = n ? 0.425 : 0.35;
          return o.createElement(
            K.tH,
            null,
            n &&
              o.createElement(
                i.dL,
                { translation: { y: 0.075, z: 0 } },
                o.createElement(me, {
                  onClick: () => {
                    var e;
                    null === (e = VRHTML.VRLink) ||
                      void 0 === e ||
                      e.SendRemoteDashboardOpen();
                  },
                }),
              ),
            o.createElement(
              i.Zk,
              {
                id: "VRDashboardBar-Panel",
                debug_name: "VRDashboardBar",
                interactive: !0,
                make_overlays_interactive_if_visible: !0,
                curvature_origin_id: e.curvature_origin_id,
                overlay_key: u.Vx,
                origin: i.Oi.TopCenter,
                meters_per_pixel: p.SW.m_fVRGamepadUI_MetersPerPixel,
                reflect: 0.1,
              },
              o.createElement(i.Ci, {
                id: "VRDashboardBar-Panel-TopCenter",
                location: i.Oi.TopCenter,
              }),
              o.createElement(
                i.Ci,
                {
                  id: "VRDashboardBar-Panel-BottomCenter",
                  location: i.Oi.BottomCenter,
                },
                o.createElement(i.dL, { id: u.zM, translation: { y: a } }),
                o.createElement(i.dL, { id: u.NX, translation: { y: -0.1 } }),
              ),
            ),
          );
        }),
        Fe = [
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
      function Ne(e, t) {
        let r = -1,
          n = -1;
        for (let i = 0; i < Fe.length && r < 0 && n < 0; i++)
          Fe[i](e) && (r = i), Fe[i](t) && (n = i);
        return (
          r < 0 && (r = Fe.length),
          n < 0 && (n = Fe.length),
          r == n ? e.tab_id() - t.tab_id() : r - n
        );
      }
      function xe(e, t) {
        var r, n, i, a, s, o;
        let l;
        const c =
            null !== (r = null == e ? void 0 : e.product_name) && void 0 !== r
              ? r
              : "",
          u =
            null !== (n = null == t ? void 0 : t.product_name) && void 0 !== n
              ? n
              : "";
        if (((l = c.localeCompare(u)), 0 != l)) return l;
        const d =
            null !== (i = null == e ? void 0 : e.title) && void 0 !== i
              ? i
              : "",
          p =
            null !== (a = null == t ? void 0 : t.title) && void 0 !== a
              ? a
              : "";
        if (((l = d.localeCompare(p)), 0 != l)) return l;
        const m =
            null !== (s = null == e ? void 0 : e.hwnd) && void 0 !== s ? s : "",
          h =
            null !== (o = null == t ? void 0 : t.hwnd) && void 0 !== o ? o : "";
        return m.localeCompare(h);
      }
      const We = (0, S.PA)(function (e) {
          var t, r;
          const { overlay: n } = e;
          if (1 != n.eOverlayType) return null;
          if (!(n.unFlags & i.NB.VisibleInDashboard)) return null;
          if (n.sOverlayKey == u.wi || n.sOverlayKey == u.Wm) return null;
          let a,
            s = n.sOverlayName,
            l = n.sOverlayKey;
          if (n.sOverlayKey === u.Bn) (l = void 0), (a = 15);
          let c = !0,
            d = !1;
          n.unFlags & i.NB.NoDashboardTab && (c = !1),
            (n.sOverlayKey == u.Xk ||
              (null === (t = n.sOverlayKey) || void 0 === t
                ? void 0
                : t.startsWith(u.GO)) ||
              (null === (r = n.sOverlayKey) || void 0 === r
                ? void 0
                : r.startsWith(u.Uv))) &&
              (c = !1);
          return (
            U.H.BHasMutualCapability(2) &&
              p.SF.includes(n.sOverlayKey) &&
              ((d = c), (c = !1)),
            o.createElement(
              D.wI,
              {
                title: s,
                iconEnum: a,
                iconOverlayKey: l,
                showTabInDashboardBar: c,
                showTabInDashboardHamburgerMenu: d,
              },
              o.createElement(D.JQ, {
                overlayKey: n.sOverlayKey,
                requireExternalOverlay: !0,
              }),
            )
          );
        }),
        ze = (0, S.PA)(function (e) {
          return o.createElement(
            o.Fragment,
            null,
            q.Q.overlays.map((e) =>
              o.createElement(We, { overlay: e, key: e.sOverlayKey }),
            ),
            ";",
          );
        });
      function Ge(e) {
        var t;
        const [r, n] = o.useState(void 0),
          [a, c] = o.useState(void 0),
          [m, h] = o.useState(void 0),
          g = (function (e, t) {
            const r = o.useRef(void 0);
            return (
              o.useEffect(
                () =>
                  (0, s.autorun)(() => {
                    (t = (null != t ? t : []).filter(Boolean)).includes(
                      null == e ? void 0 : e.activePage,
                    ) && (r.current = null == e ? void 0 : e.activePage);
                  }),
                [e, ...t],
              ),
              o.useCallback(() => {
                var e;
                if (
                  (null === (e = r.current) || void 0 === e
                    ? void 0
                    : e.state) == D.JP.Alive
                )
                  return r.current;
              }, [])
            );
          })(r, [a, m]);
        o.useEffect(() => p.SW.SetMainSteamFrame(r), [r]);
        const v = (0, y.useObserver)(() => Te.r.legacyFloatingMainMenuPopup),
          _ = (0, y.useObserver)(() => !p.SW.isVRGamepadUI);
        return o.createElement(
          D.wI,
          {
            title: _ ? (0, d.we)("#Settings") : (0, d.we)("#Steam"),
            iconEnum: _ ? 16 : 14,
            showTabInDashboardBar: !0,
            ref: n,
          },
          o.createElement(D.JQ, {
            overlayKey: u.wi,
            requireExternalOverlay: !0,
          }),
          o.createElement(l.z, { env: "frame-page", pageRef: c }),
          o.createElement(D.JQ, {
            overlayKey: u.Wm,
            requireExternalOverlay: !1,
            ref: h,
          }),
          o.createElement(
            D.xE,
            null,
            o.createElement(D.RG, null),
            o.createElement(D.Vu, {
              actionParams: () => ({
                display_name: (0, d.we)("#VRSettings"),
                icon: { enum: 21 },
                invocation: 1,
                active:
                  (null == r ? void 0 : r.activePage) &&
                  ((null == r ? void 0 : r.activePage) == a ||
                    (null == r ? void 0 : r.activePage) == m),
              }),
              onInvoked: () => {
                var e, t;
                (null == r ? void 0 : r.activePage) == m &&
                (null == r ? void 0 : r.isCurrentlyVisible)
                  ? r.SwitchToPage(null == a ? void 0 : a.pageID)
                  : r.SwitchToPage(null !== (e = g()) && void 0 !== e ? e : a),
                  !r.isCurrentlyVisible &&
                    (null === (t = r.activePage) || void 0 === t
                      ? void 0
                      : t.summonOverlayKey) &&
                    VRHTML.VROverlay.ShowDashboard(
                      r.activePage.summonOverlayKey,
                    );
              },
            }),
            o.createElement(
              D.QI,
              { onlyVisibleIn: "bar-tab-menu" },
              o.createElement(D.Oo, null),
              o.createElement(D.U0, { params: { type: 5 } }),
            ),
          ),
          v &&
            o.createElement(Me.O, {
              popupRequest: v,
              forceReparentToTransformID:
                null === (t = null == r ? void 0 : r.activePage) || void 0 === t
                  ? void 0
                  : t.GetPanelAnchorID(i.Oi.CenterLeft),
            }),
        );
      }
    },
    8696: (e, t, r) => {
      "use strict";
      r.d(t, {
        $z: () => i,
        BO: () => H,
        C0: () => O,
        Do: () => a,
        HX: () => E,
        Ox: () => k,
        xp: () => V,
      });
      var n,
        i,
        a,
        s = r(1635),
        o = r(6090),
        l = r(3236),
        c = r(1370),
        u = r(6540),
        d = r(6189),
        p = r(3606),
        m = r(1333),
        h = r(1835),
        g = r(9248),
        v = r(3712),
        _ = r(7530),
        b = r(3696),
        S = r(3350),
        y = r(2563),
        f = r(9471),
        R = r(3714),
        w = r(7600),
        C = r(4007),
        M = r(795),
        T = r(2156);
      function E(e) {
        switch (e) {
          case i.Dashboard:
          case i.World:
            return 1;
          case i.Theater:
            return 3;
          case i.LeftHand:
          case i.RightHand:
            return 4;
          default:
            return 0;
        }
      }
      function V(e) {
        const t = h.SW.currentTheaterScreenSize;
        switch (e) {
          case i.LeftHand:
          case i.RightHand:
            return 0.4 * h.SW.dashboardScale;
          case i.Dashboard:
          case i.World:
            return 1 * h.SW.dashboardScale;
          case i.Theater:
            return h.SW.dashboardScale * (t == h.Nr.Large ? 2.35 : 1.8);
        }
        return h.SW.dashboardScale;
      }
      !(function (e) {
        (e[(e.Dashboard = 0)] = "Dashboard"),
          (e[(e.LeftHand = 1)] = "LeftHand"),
          (e[(e.RightHand = 2)] = "RightHand"),
          (e[(e.World = 3)] = "World"),
          (e[(e.Theater = 4)] = "Theater"),
          (e[(e.Boot = 5)] = "Boot");
      })(i || (i = {})),
        (function (e) {
          (e[(e.Curved = 0)] = "Curved"), (e[(e.Flat = 1)] = "Flat");
        })(a || (a = {}));
      const D = "TheaterCurvatureOriginId";
      function k(e) {
        return e == i.Dashboard;
      }
      function O(e) {
        return e == i.World;
      }
      function A(e) {
        return e == i.LeftHand || e == i.RightHand;
      }
      function I(e) {
        switch (e) {
          case i.LeftHand:
            return "/user/hand/left";
          case i.RightHand:
            return "/user/hand/right";
          default:
            return "";
        }
      }
      function B(e, t) {
        try {
          return null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.GetPose(e, t);
        } catch (e) {
          return;
        }
      }
      let H = (n = class extends u.Component {
        constructor(e) {
          super(e),
            (this.state = {
              xfTransform: null,
              sParent: I(this.props.dockLocation),
              bIsOutsideMaxDist: !1,
              destination: this.props.dockLocation,
              bIsMoving: !1,
              bIsResizing: !1,
            }),
            (this.m_nMoveDeviceIndex = o.ne),
            (this.m_moveDeviceRole = o.kG.TrackedControllerRole_Invalid);
        }
        componentDidMount() {
          this.setInitialTransformForLocation();
        }
        componentDidUpdate(e, t) {
          e.dockLocation != this.props.dockLocation &&
            this.setState(
              {
                sParent: I(this.props.dockLocation),
                xfTransform: null,
                bIsOutsideMaxDist: !1,
                destination: this.props.dockLocation,
              },
              this.setInitialTransformForLocation,
            );
        }
        getCurrentOverlaySize() {
          var e;
          let t = VRHTML.VROverlay.FindOverlay(this.props.sOverlayKey);
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
            i = (n * r.y) / r.x;
          return (
            (this.props.sOverlayKey.startsWith(p.GO) ||
              this.props.sOverlayKey.startsWith(p.Uv)) &&
              ((i = S.E.k_nDesktopPanelBaseHeight), (n = (i * r.x) / r.y)),
            { width: n, height: i }
          );
        }
        getPanelScaleForLocation() {
          const e = h.SW.currentTheaterScreenSize;
          switch (this.props.dockLocation) {
            case i.LeftHand:
            case i.RightHand:
              return 0.15;
            case i.Dashboard:
            case i.World:
              let t = h.SW.isVRGamepadUI
                ? h.SW.m_fVRGamepadUI_GlobalActiveOverlayScale
                : 1;
              t *= h.SW.dashboardScale;
              const r = h.SW.m_mapOverlayState.get(this.props.sOverlayKey);
              return t * (r ? r.fScale : 1);
            case i.Theater:
              let n = e == h.Nr.Large ? 2.35 : 1.8;
              const a = this.getCurrentOverlaySize();
              return null === a || 0 == a.height ? n : n / a.height;
          }
          return 1;
        }
        setInitialTransformForTheater() {
          const e = h.SW.currentTheaterScreenSize == h.Nr.Large ? 0.6 : 0.4;
          switch (h.SW.currentTheaterScreenAlignment) {
            case h.tb.PlayArea: {
              let t = (0, o.vx)();
              (t.translation.y = e),
                (t.translation.z = -3.3),
                this.setState({ xfTransform: t });
              break;
            }
            case h.tb.Dashboard: {
              let t = 3;
              o.Cw.getInstance()
                .requestSGTransform(p.C6 + "::active_overlay_transform", t)
                .then((t) => {
                  let r = (0, o.vx)();
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
                    const e = B("/user/head", o.mu.Standing);
                    if (
                      e &&
                      (null == e ? void 0 : e.bPoseIsValid) &&
                      (null == e ? void 0 : e.xfDeviceToAbsoluteTracking)
                    ) {
                      const t = 4,
                        r = -0.75,
                        n = (0, o.p0)(e.xfDeviceToAbsoluteTracking);
                      let i = (0, o.o_)(n);
                      i.y = 0;
                      let a = (0, o.tx)((0, o.e_)(i), t);
                      a.y += r;
                      let s = (0, o.vx)();
                      return (
                        (s.rotation = n.rotation),
                        (s.translation = (0, o.CU)(a, n.translation)),
                        s
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
          if (this.props.xfInitial)
            switch (this.props.dockLocation) {
              case i.LeftHand:
              case i.RightHand:
              case i.World:
                this.setState({ xfTransform: this.props.xfInitial });
            }
          else
            switch (this.props.dockLocation) {
              case i.Dashboard:
              case i.LeftHand:
              case i.RightHand: {
                let e = (0, o.vx)();
                (e.rotation = (0, o.Fb)({ x: -45, y: 0, z: 0 })),
                  this.setState({ xfTransform: e });
                break;
              }
              case i.World:
                o.Cw.getInstance()
                  .requestSGTransform(p.C6 + "::active_overlay_transform", 0)
                  .then((e) => {
                    let t = (0, o.vx)();
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
              case i.Theater:
                this.setInitialTransformForTheater();
            }
        }
        computeDestination() {
          if (!this.state.bIsMoving || null === this.state.xfTransform) return;
          const e = B(this.m_nMoveDeviceIndex, o.mu.Standing);
          let t = null;
          VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
            o.kG.TrackedControllerRole_LeftHand,
          ) != o.ne && (t = B("/user/hand/left", o.mu.Standing));
          let r = null;
          VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
            o.kG.TrackedControllerRole_RightHand,
          ) != o.ne && (r = B("/user/hand/right", o.mu.Standing));
          let a = [];
          switch (this.state.sParent) {
            case "/user/hand/left":
              r && a.push({ pose: r, location: i.RightHand });
              break;
            case "/user/hand/right":
              t && a.push({ pose: t, location: i.LeftHand });
              break;
            case "/user/head":
              t && a.push({ pose: t, location: i.LeftHand }),
                r && a.push({ pose: r, location: i.RightHand });
          }
          if (!e || 0 == a.length)
            return void setTimeout(this.computeDestination, n.sfMovePulseMS);
          let s = VRHTML.MultiplyTransforms(
            e.xfDeviceToAbsoluteTracking,
            this.state.xfTransform,
          );
          a.forEach((e) => {
            let t = VRHTML.ChangeBasis(s, e.pose.xfDeviceToAbsoluteTracking);
            (0, o.Uj)(t.translation) > n.sfMaxDockDist
              ? this.state.bIsOutsideMaxDist ||
                (d.W.Instance.triggerHaptic(o.en.SlidingEdge),
                this.setState({ bIsOutsideMaxDist: !0, destination: i.World }))
              : (this.state.bIsOutsideMaxDist ||
                  (this.props.dockLocation == i.World &&
                    this.state.destination == i.World)) &&
                (d.W.Instance.triggerHaptic(o.en.SlidingEdge),
                this.setState({
                  bIsOutsideMaxDist: !1,
                  destination: e.location,
                }));
          }),
            setTimeout(this.computeDestination, n.sfMovePulseMS);
        }
        startMove() {
          if (this.state.bIsMoving || null === this.state.xfTransform) return;
          if (
            (console.log(
              "Starting to move " + this.props.sOverlayKey + "...\n",
            ),
            (this.m_nMoveDeviceIndex =
              VRHTML.VROverlay.GetPrimaryDashboardDevice()),
            this.m_nMoveDeviceIndex == o.ne)
          )
            return;
          this.m_moveDeviceRole =
            VRHTML.VRSystem.GetControllerRoleForTrackedDeviceIndex(
              this.m_nMoveDeviceIndex,
            );
          const e = B(this.m_nMoveDeviceIndex, o.mu.Standing);
          let t, r;
          switch (this.props.dockLocation) {
            case i.LeftHand:
              if (
                VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                  o.kG.TrackedControllerRole_LeftHand,
                ) == o.ne
              )
                return;
              t = B("/user/hand/left", o.mu.Standing);
              break;
            case i.RightHand:
              if (
                VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                  o.kG.TrackedControllerRole_RightHand,
                ) == o.ne
              )
                return;
              t = B("/user/hand/right", o.mu.Standing);
              break;
            default:
              t = {
                xfDeviceToAbsoluteTracking: (0, o.vx)(),
                vVelocity: { x: 0, y: 0, z: 0 },
                eTrackingResult: o.MV.TrackingResult_Running_OK,
                bPoseIsValid: !0,
              };
          }
          switch (this.m_moveDeviceRole) {
            case o.kG.TrackedControllerRole_LeftHand:
              r = "/user/hand/left";
              break;
            case o.kG.TrackedControllerRole_RightHand:
              r = "/user/hand/right";
              break;
            default:
              r = "/user/head";
          }
          let n = VRHTML.MultiplyTransforms(
              t.xfDeviceToAbsoluteTracking,
              this.state.xfTransform,
            ),
            a = VRHTML.ChangeBasis(n, e.xfDeviceToAbsoluteTracking);
          this.setState(
            {
              xfTransform: a,
              sParent: r,
              bIsOutsideMaxDist: this.props.dockLocation == i.World,
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
            this.state.destination == i.LeftHand
          ) {
            if (
              VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                o.kG.TrackedControllerRole_LeftHand,
              ) == o.ne
            )
              return;
            e = B("/user/hand/left", o.mu.Standing);
          }
          if (
            "/user/hand/right" == this.state.sParent ||
            this.state.destination == i.RightHand
          ) {
            if (
              VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                o.kG.TrackedControllerRole_RightHand,
              ) == o.ne
            )
              return;
            t = B("/user/hand/right", o.mu.Standing);
          }
          let r,
            n = {
              xfDeviceToAbsoluteTracking: (0, o.vx)(),
              vVelocity: { x: 0, y: 0, z: 0 },
              eTrackingResult: o.MV.TrackingResult_Running_OK,
              bPoseIsValid: !0,
            };
          switch (this.state.destination) {
            case i.LeftHand:
              r = e;
              break;
            case i.RightHand:
              r = t;
              break;
            default:
              r = n;
          }
          const a = B(this.m_nMoveDeviceIndex, o.mu.Standing);
          let s = VRHTML.MultiplyTransforms(
              a.xfDeviceToAbsoluteTracking,
              this.state.xfTransform,
            ),
            l = VRHTML.ChangeBasis(s, r.xfDeviceToAbsoluteTracking);
          this.setState({
            xfTransform: l,
            sParent: I(this.state.destination),
            bIsMoving: !1,
          }),
            this.props.setOverlayDockLocation(
              this.props.sOverlayKey,
              this.state.destination,
              l,
            ),
            window.removeEventListener("mouseup", this.endMove);
          const c = h.SW.m_mapOverlayState.get(this.props.sOverlayKey);
          c && (c.bSuppressDoubleOverlayControlBar = !1);
        }
        render() {
          var e, t, r;
          if ("" == this.props.sOverlayKey || null == this.state.xfTransform)
            return null;
          let s = this.getCurrentOverlaySize();
          if (null === s) return null;
          let l,
            c = !this.props.bDashboardShown,
            d = !1;
          if (this.props.dockLocation == i.Theater) {
            if (this.props.bHasSceneApp && b.H.m_bShowFloor) return null;
            c = !0;
            const t =
              null !==
                (e = m.HR.settings.get(
                  "/settings/dashboard/enableLTCReflections",
                )) &&
              void 0 !== e &&
              e;
            (d = !h.SW.isGroupMode && h.SW.isDarkMode && t),
              h.SW.eTheaterCurvature == a.Curved && (l = D);
          }
          const S =
              C.Q.GetOverlayFlag(
                this.props.sOverlayKey,
                o.NB.EnableControlBarKeyboard,
              ) || this.props.sOverlayKey == p.Bn,
            k =
              (null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.BSupportsMultitaskingView()) &&
              this.props.sOverlayKey.startsWith(p.GO),
            O = { x: 0, y: -0.15, z: 0.1 },
            I = (0, o.nX)(p.C6, "Floating-Panel"),
            B = (e) =>
              u.createElement(
                o.dL,
                {
                  parent_id: e.parent_id,
                  translation: { x: e.x_offset, y: e.y_offset, z: 0.01 },
                },
                u.createElement(_.X, {
                  id: e.target_id + ".ResizeHandle",
                  target_id: e.target_id,
                  min_target_scale: p.Ul,
                  max_target_scale: p.mB,
                  displacement: e.displacement,
                  bVisible: !0,
                  scale: e.scale,
                  tint: h.SW.GrabHandleTint,
                }),
              ),
            H = M.JJ.GetFramesWithAssociatedSummonKeys(
              this.props.sOverlayKey,
            )[0];
          if (c) {
            const e =
                this.props.dockLocation == i.Theater ||
                (null !==
                  (t = m.HR.settings.get(
                    "/settings/dashboard/inputCaptureEnabled",
                  )) &&
                  void 0 !== t &&
                  t),
              a =
                null !==
                  (r = m.HR.settings.get(
                    "/settings/dashboard/theaterModeReflection",
                  )) && void 0 !== r
                  ? r
                  : 0.5,
              c = 0.5 * Math.pow(a, 2.2);
            let _ = -0.1,
              b = 4;
            const S = !0;
            let C = 0.1,
              M = s.width,
              A = s.height,
              L = 0.75;
            return u.createElement(
              w.tH,
              null,
              u.createElement(
                o.dL,
                { parent_path: void 0 },
                u.createElement(
                  o.dL,
                  {
                    transform_path: this.state.sParent,
                    transform: this.state.xfTransform,
                    id: "xf_widget",
                  },
                  u.createElement(
                    o.dL,
                    { translation: { y: L } },
                    u.createElement(
                      g.B,
                      {
                        min_distance: 0.7,
                        should_head_align: !0,
                        lerp_speed: n.flGrabTransformLerpSpeed,
                      },
                      u.createElement(o.dL, { id: D, translation: { z: b } }),
                      u.createElement(
                        o.dL,
                        { translation: { y: -1 * L } },
                        u.createElement(
                          o.dL,
                          { scale: this.getPanelScaleForLocation() },
                          u.createElement(
                            o.Zk,
                            {
                              id: I,
                              overlay_key: this.props.sOverlayKey,
                              height: A,
                              width:
                                h.SW.m_eTheaterStereo != o.MQ.Mono ? M : void 0,
                              interactive: !0,
                              allow_input_capture: e,
                              undocked: !0,
                              origin:
                                this.props.dockLocation == i.Theater
                                  ? { x: 0, y: -0.75 }
                                  : o.Oi.BottomCenter,
                              curvature_origin_id: l,
                              stereoscopy: h.SW.m_eTheaterStereo,
                              scale_index: E(this.props.dockLocation),
                              debug_name: "dashboard-overlay",
                            },
                            u.createElement(o.Ci, {
                              id: "Floating-Panel-BottomLeft",
                              location: o.Oi.BottomLeft,
                            }),
                            u.createElement(o.Ci, {
                              id: "Floating-Panel-BottomRight",
                              location: o.Oi.BottomRight,
                            }),
                            u.createElement(o.Ci, {
                              id: "Floating-Panel-BottomCenter",
                              location: o.Oi.BottomCenter,
                            }),
                            u.createElement(o.Ci, {
                              id: "Floating-Panel-CenterLeft",
                              location: o.Oi.CenterLeft,
                            }),
                            u.createElement(o.Ci, {
                              id: "Floating-Panel-CenterRight",
                              location: o.Oi.CenterRight,
                            }),
                            u.createElement(o.rF, {
                              mountedId: (0, o.nX)(
                                p.cb,
                                this.props.sOverlayKey + ".cursor",
                              ),
                            }),
                            (null == H ? void 0 : H.frameMenuPopupID) &&
                              u.createElement(T.O, {
                                popupRequestID: H.frameMenuPopupID,
                                forceReparentToTransformID:
                                  "Floating-Panel-CenterLeft",
                              }),
                          ),
                        ),
                        u.createElement(
                          o.dL,
                          { parent_id: "Floating-Panel-CenterLeft" },
                          u.createElement(o.uC, {
                            name: this.props.sOverlayKey,
                            channel: "front_left",
                          }),
                        ),
                        u.createElement(
                          o.dL,
                          { parent_id: "Floating-Panel-CenterRight" },
                          u.createElement(o.uC, {
                            name: this.props.sOverlayKey,
                            channel: "front_right",
                          }),
                        ),
                        d &&
                          u.createElement(o.lq, {
                            target_id: I,
                            "near-z": _,
                            "far-z": 0.1,
                            specular: { color: { r: c, g: c, b: c } },
                            diffuse: { size: 20, resolution: 512 },
                            debug: !1,
                          }),
                        !1,
                        this.props.dockLocation == i.Theater &&
                          u.createElement(
                            u.Fragment,
                            null,
                            u.createElement(
                              o.Y4,
                              { value: 1 },
                              u.createElement(
                                o.dL,
                                {
                                  parent_id: "Floating-Panel-BottomCenter",
                                  translation: { z: 0.02, y: -0.04 },
                                  ignore_parent_scale: !0,
                                  scale: V(this.props.dockLocation),
                                },
                                S &&
                                  u.createElement(
                                    o.Zk,
                                    {
                                      height: C,
                                      width: void 0,
                                      interactive: !0,
                                      requires_laser: !0,
                                      origin: o.Oi.TopCenter,
                                      curvature_origin_id: l,
                                      debug_name: "theater-control-bar",
                                    },
                                    u.createElement(
                                      "div",
                                      {
                                        className:
                                          "TransparentOverlayControlBar",
                                      },
                                      u.createElement(
                                        "div",
                                        { className: "Section" },
                                        k &&
                                          u.createElement(y.N2, {
                                            key: "multitask",
                                            iconUrl:
                                              "/dashboard/images/icons/icon_multitasking_view.png",
                                            tooltipTranslation: O,
                                            onClick:
                                              this.props.ShowMultitaskingView,
                                            additionalClassNames: "LargeIcon",
                                          }),
                                      ),
                                      u.createElement(
                                        "div",
                                        { className: "Section" },
                                        u.createElement(y.N2, {
                                          icon: u.createElement(f.Xj, null),
                                          title: (0, R.we)(
                                            "#ReturnToDashboard",
                                          ),
                                          key: "dock",
                                          tooltipTranslation: O,
                                          onClick: () => {
                                            this.props.setOverlayDockLocation(
                                              this.props.sOverlayKey,
                                              i.Dashboard,
                                            );
                                          },
                                          additionalClassNames: "LargeIcon",
                                        }),
                                      ),
                                    ),
                                  ),
                                u.createElement(
                                  o.dL,
                                  { translation: { y: -C - 0.1, z: 0.03 } },
                                  u.createElement(v.X, {
                                    scale: 1.5,
                                    tint: h.SW.GrabHandleTint,
                                    curvature_origin_id: l,
                                  }),
                                ),
                              ),
                              u.createElement(B, {
                                parent_id: "Floating-Panel-BottomRight",
                                target_id: I,
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
          const L = s.height,
            P = Math.max(s.width, 0.175),
            F = h.SW.isVRGamepadUI
              ? {
                  r: (14 / 255) * 0.1,
                  g: (20 / 255) * 0.1,
                  b: (27 / 255) * 0.1,
                }
              : { r: 0.016, g: 0.017, b: 0.02 };
          return u.createElement(
            w.tH,
            null,
            u.createElement(
              o.dL,
              {
                parent_path: this.state.sParent,
                transform: this.state.xfTransform,
                id: "xf_widget",
              },
              u.createElement(
                o.dL,
                { scale: this.getPanelScaleForLocation() },
                u.createElement(
                  o.Zk,
                  {
                    id: I,
                    overlay_key: this.props.sOverlayKey,
                    height: s.height,
                    width: void 0,
                    interactive: !0,
                    undocked: !0,
                    origin: o.Oi.BottomCenter,
                    scale_index: E(this.props.dockLocation),
                    debug_name: "control-bar-floating-overlay",
                  },
                  u.createElement(
                    o.dL,
                    {
                      translation: { z: -0.005 },
                      scale: { x: P, y: L, z: 0.008 },
                    },
                    u.createElement(
                      o.N,
                      { color: F },
                      u.createElement(o.aX, { solid: !0, source: "unit_cube" }),
                    ),
                  ),
                  u.createElement(o.Ci, {
                    id: "Floating-Panel-BottomLeft",
                    location: o.Oi.BottomLeft,
                  }),
                  u.createElement(o.Ci, {
                    id: "Floating-Panel-BottomRight",
                    location: o.Oi.BottomRight,
                  }),
                  u.createElement(o.Ci, {
                    id: "Floating-Panel-BottomCenter",
                    location: o.Oi.BottomCenter,
                  }),
                  u.createElement(o.Ci, {
                    id: "Floating-Panel-CenterLeft",
                    location: o.Oi.CenterLeft,
                  }),
                  u.createElement(o.Ci, {
                    id: "Floating-Panel-CenterRight",
                    location: o.Oi.CenterRight,
                  }),
                  u.createElement(o.rF, {
                    mountedId: (0, o.nX)(
                      p.cb,
                      this.props.sOverlayKey + ".cursor",
                    ),
                  }),
                  (null == H ? void 0 : H.frameMenuPopupID) &&
                    u.createElement(T.O, {
                      popupRequestID: H.frameMenuPopupID,
                      forceReparentToTransformID: "Floating-Panel-CenterLeft",
                    }),
                ),
              ),
              u.createElement(
                o.dL,
                { parent_id: "Floating-Panel-CenterLeft" },
                u.createElement(o.uC, {
                  name: this.props.sOverlayKey,
                  channel: "front_left",
                }),
              ),
              u.createElement(
                o.dL,
                { parent_id: "Floating-Panel-CenterRight" },
                u.createElement(o.uC, {
                  name: this.props.sOverlayKey,
                  channel: "front_right",
                }),
              ),
              u.createElement(B, {
                parent_id: "Floating-Panel-BottomRight",
                target_id: I,
                scale:
                  V(this.props.dockLocation) *
                  (A(this.props.dockLocation) ? 1.5 : 1),
                displacement: 0,
                x_offset: A(this.props.dockLocation) ? 0.02 : 0.01,
                y_offset: 0,
              }),
              u.createElement(
                o.dL,
                {
                  parent_id: "Floating-Panel-BottomCenter",
                  translation: { y: -0.01, z: 0 },
                  ignore_parent_scale: !0,
                  scale: V(this.props.dockLocation),
                },
                u.createElement(
                  o.Zk,
                  {
                    height: n.sfOverlayTrayHeight,
                    width: void 0,
                    interactive: !0,
                    origin: o.Oi.TopCenter,
                    debug_name: "control-bar-floating",
                  },
                  u.createElement(
                    "div",
                    { className: "TransparentOverlayControlBar" },
                    u.createElement(
                      "div",
                      { className: "Section" },
                      S &&
                        u.createElement(y.oZ, {
                          overlayKey: this.props.sOverlayKey,
                          showTooltip: !1,
                          additionalClassNames: "LargeIcon",
                        }),
                      k &&
                        u.createElement(y.N2, {
                          key: "multitask",
                          iconUrl:
                            "/dashboard/images/icons/icon_multitasking_view.png",
                          tooltipTranslation: O,
                          onClick: this.props.ShowMultitaskingView,
                          additionalClassNames: "LargeIcon",
                        }),
                    ),
                    u.createElement(
                      "div",
                      { className: "Section" },
                      u.createElement(y.N2, {
                        icon: u.createElement(f.Xj, null),
                        title: (0, R.we)("#ReturnToDashboard"),
                        key: "dock",
                        tooltipTranslation: O,
                        onClick: () => {
                          this.props.setOverlayDockLocation(
                            this.props.sOverlayKey,
                            i.Dashboard,
                          );
                        },
                        additionalClassNames: "LargeIcon",
                      }),
                      u.createElement(y.N2, {
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
                u.createElement(
                  u.Fragment,
                  null,
                  u.createElement(
                    o.dL,
                    {
                      parent_path:
                        this.state.destination == i.LeftHand
                          ? "/user/hand/left"
                          : "/user/hand/right",
                    },
                    u.createElement(o.N1, {
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
      (H.sfMaxDockDist = 0.4),
        (H.sfMovePulseMS = 100),
        (H.sfOverlayTrayHeight = 0.12),
        (H.flGrabTransformLerpSpeed = 0.125),
        (0, s.Cg)([l.o], H.prototype, "computeDestination", null),
        (0, s.Cg)([l.o], H.prototype, "startMove", null),
        (0, s.Cg)([l.o], H.prototype, "endMove", null),
        (H = n = (0, s.Cg)([c.PA], H));
    },
    3350: (e, t, r) => {
      "use strict";
      r.d(t, { E: () => R, R: () => f });
      var n,
        i,
        a = r(1635),
        s = r(6090),
        o = r(3236),
        l = r(1909),
        c = r(7813),
        u = r(1370),
        d = r(6540),
        p = r(5615),
        m = r(3606),
        h = r(3714),
        g = r(1333),
        v = r(2563),
        _ = r(1835),
        b = r(7530),
        S = r(8696),
        y = r(795);
      let f = (n = class extends d.Component {
        constructor(e) {
          super(e),
            (this.m_mailbox = new s._n()),
            (this.m_refWindowScrollPanel = d.createRef()),
            (this.state = { desktopView: null }),
            this.m_mailbox.Init(n.k_sMailboxName);
        }
        setSiblingReferences(e) {
          this.setState({ desktopView: e });
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
          var e, t, r, n;
          if (
            !this.state.desktopView ||
            (null === (e = this.state.desktopView) || void 0 === e
              ? void 0
              : e.isUsingSteamDesktop)
          )
            return null;
          const i =
              this.props.bWindowViewEnabled ||
              (null === (t = this.state.desktopView) || void 0 === t
                ? void 0
                : t.desktopCount) > 1,
            a = { x: 0, y: -0.15, z: 0.1 };
          return d.createElement(
            v.DE,
            Object.assign({}, this.props, {
              additionalClassNames: this.props.bWindowViewEnabled
                ? "DesktopTray FixedWidth"
                : "DesktopTray",
            }),
            i &&
              d.createElement(
                p.M,
                {
                  scrollDirection: p.D.Horizontal,
                  className: "Section Grow",
                  style: { marginRight: 0, marginLeft: "9px" },
                  ref: this.m_refWindowScrollPanel,
                },
                d.createElement(
                  "div",
                  {
                    style: {
                      paddingRight: "16px",
                      display: "flex",
                      flexDirection: "row",
                      margin: 0,
                    },
                  },
                  null === (r = this.state.desktopView) || void 0 === r
                    ? void 0
                    : r.desktopIndices.map((e) => {
                        var t;
                        return d.createElement(v.N2, {
                          additionalClassNames: "ViewButton Fixed",
                          key: e,
                          label: e.toString(),
                          active:
                            (null === (t = this.state.desktopView) ||
                            void 0 === t
                              ? void 0
                              : t.currentDesktopIndex) == e,
                          title: (0, h.we)("#Desktop_X", e),
                          tooltipTranslation: a,
                          onClick: () => {
                            var t;
                            return null === (t = this.state.desktopView) ||
                              void 0 === t
                              ? void 0
                              : t.onDesktopChange(e);
                          },
                        });
                      }),
                  Array.from(
                    null === (n = this.state.desktopView) || void 0 === n
                      ? void 0
                      : n.mapWindowInfo.keys(),
                  ).map((e) => {
                    var t, r, n;
                    return d.createElement(v.N2, {
                      additionalClassNames: "ViewButton",
                      iconUrl: "/dashboard/images/icons/svr_desktop_alt.svg",
                      key: e,
                      active:
                        (null === (t = this.state.desktopView) || void 0 === t
                          ? void 0
                          : t.sCurrentWindowOverlayKey) == e,
                      title:
                        null ===
                          (n = this.props.mapWindows.get(
                            null === (r = this.state.desktopView) ||
                              void 0 === r
                              ? void 0
                              : r.mapWindowInfo.get(e).sHwnd,
                          )) || void 0 === n
                          ? void 0
                          : n.title,
                      tooltipTranslation: a,
                      onClick: () => {
                        var t;
                        return null === (t = this.state.desktopView) ||
                          void 0 === t
                          ? void 0
                          : t.onWindowViewChange(e);
                      },
                    });
                  }),
                ),
              ),
            this.props.bWindowViewEnabled &&
              d.createElement(
                "div",
                { className: "Section", style: { marginRight: 0 } },
                d.createElement(v.N2, {
                  iconUrl: "/dashboard/images/icons/icon_add.png",
                  additionalClassNames: "AddWindow",
                  title: (0, h.we)("#AddView"),
                  tooltipTranslation: a,
                  onClick: this.props.onToggleWindowList,
                  onMouseEnter: this.props.onClearPopoverMenuTimeout,
                  onMouseLeave: () => this.props.onStartPopoverMenuTimeout(500),
                }),
              ),
          );
        }
      });
      (f.k_sMailboxName = "systemui_desktoptray"),
        (f = n = (0, a.Cg)([u.PA], f));
      let R = (i = class extends d.Component {
        constructor(e) {
          super(e),
            (this.m_mailbox = new s._n()),
            (this.m_desktopIndices = []),
            (this.m_sCurrentWindowOverlayKey = ""),
            (this.m_bIsUsingSteamDesktop = !1),
            (this.m_mapWindowInfo = new Map()),
            (this.state = { bIsReady: !1 }),
            this.m_mailbox.Init(i.k_sMailboxName).then(() => {}),
            l.p.SteamVR.SetImplementation(
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
                    : "";
                for (const [e, t] of this.mapWindowInfo.entries())
                  if (t.sHwnd == n)
                    return (
                      this.onWindowViewChange(e),
                      void VRHTML.VROverlay.ShowDashboard(m.Xk)
                    );
                const i = { type: "request_spawn_window_view", hwnd: n };
                if (!this.m_mailbox.SendMessage("desktopview", i))
                  throw new Error(
                    "Failed to send mailbox message request_spawn_window_view",
                  );
              },
            ),
            (0, c.makeObservable)(this);
        }
        componentDidMount() {
          null ===
          (null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.VROverlay.FindOverlay(m.Bn))
            ? (null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.RegisterForDesktopViewReadyEvents(
                  this.onDesktopViewReady,
                ),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.RegisterForDesktopViewUpdatingEvents(
                  this.onDesktopViewUpdating,
                ),
              this.updateDesktopIndices())
            : (this.m_bIsUsingSteamDesktop = !0);
        }
        get desktopCount() {
          return this.m_desktopIndices.length;
        }
        get desktopIndices() {
          return this.m_desktopIndices;
        }
        get sCurrentOverlayKey() {
          return "" != this.m_sCurrentWindowOverlayKey
            ? this.m_sCurrentWindowOverlayKey
            : "system.desktop." + this.currentDesktopIndex;
        }
        get currentDesktopIndex() {
          var e;
          return "" != this.m_sCurrentWindowOverlayKey
            ? -1
            : null !==
                  (e = g.HR.settings.get("/settings/dashboard/desktopIndex")) &&
                void 0 !== e
              ? e
              : 1;
        }
        get currentWindowHwnd() {
          return "" == this.m_sCurrentWindowOverlayKey
            ? ""
            : this.mapWindowInfo.get(this.m_sCurrentWindowOverlayKey).sHwnd;
        }
        get sCurrentWindowOverlayKey() {
          return this.m_sCurrentWindowOverlayKey;
        }
        get isUsingSteamDesktop() {
          return this.m_bIsUsingSteamDesktop;
        }
        get mapWindowInfo() {
          return this.m_mapWindowInfo;
        }
        onDesktopScaleChange(e) {
          this.currentDesktopIndex > 0 &&
            g.HR.SetSettingsValue(
              "/settings/dashboard/desktopScale" + this.currentDesktopIndex,
              e,
            );
        }
        onDesktopChange(e) {
          g.HR.SetSettingsValue("/settings/dashboard/desktopIndex", e),
            (this.m_sCurrentWindowOverlayKey = "");
        }
        onDesktopViewUpdating() {
          (this.m_desktopIndices = []), this.setState({ bIsReady: !1 });
        }
        onDesktopViewReady() {
          this.updateDesktopIndices();
        }
        onWindowViewCreated(e, t) {
          this.m_mapWindowInfo.set(e, { sHwnd: t }),
            (this.m_sCurrentWindowOverlayKey = e);
        }
        onWindowViewClosed(e) {
          this.m_sCurrentWindowOverlayKey == e && this.onDesktopChange(1);
        }
        onWindowViewDestroyed(e) {
          this.m_mapWindowInfo.delete(e);
        }
        onWindowViewChange(e) {
          this.m_sCurrentWindowOverlayKey = e;
        }
        hasWindowView(e) {
          return this.mapWindowInfo.has(e);
        }
        updateDesktopIndices() {
          var e;
          let t = 1,
            r = [];
          for (
            ;
            null !==
            (null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VROverlay.FindOverlay("system.desktop." + t));
          )
            r.push(t), t++;
          (null !==
            (e = g.HR.settings.get("/settings/dashboard/desktopIndex")) &&
          void 0 !== e
            ? e
            : 1) > r.length &&
            g.HR.SetSettingsValue("/settings/dashboard/desktopIndex", 1),
            (this.m_desktopIndices = r),
            this.setState({ bIsReady: !0 });
        }
        ShowMultitaskingView() {
          this.m_mailbox.SendMessage("desktopview", {
            type: "request_task_view",
          });
        }
        render() {
          var e;
          const t =
              null ===
                (e = g.HR.settings.get("/settings/dashboard/allowCurvature")) ||
              void 0 === e ||
              e
                ? m.uv
                : null,
            r = m.C6 + "::id.panel.desktop." + this.currentDesktopIndex;
          return this.props.visible
            ? this.isUsingSteamDesktop
              ? d.createElement(s.rF, { mountedId: (0, s.nX)(m.cb, m.Bn) })
              : this.state.bIsReady
                ? 0 === this.desktopCount
                  ? d.createElement(
                      v.L_,
                      { visible: !0 },
                      d.createElement(
                        "div",
                        { className: "NoDesktopFound" },
                        d.createElement(
                          "h2",
                          null,
                          (0, h.we)("#NoDesktopFound"),
                        ),
                      ),
                    )
                  : d.createElement(
                      d.Fragment,
                      null,
                      d.createElement(
                        s.Zk,
                        {
                          id: r,
                          overlay_key:
                            -1 == this.currentDesktopIndex
                              ? this.m_sCurrentWindowOverlayKey
                              : "system.desktop." + this.currentDesktopIndex,
                          height: i.k_nDesktopPanelBaseHeight,
                          curvature_origin_id: t,
                          interactive: !0,
                          origin: s.Oi.BottomCenter,
                          debug_name: "System Desktop",
                          scale_index: (0, S.HX)(S.$z.Dashboard),
                        },
                        d.createElement(y.gU, null),
                        d.createElement(s.rF, {
                          mountedId:
                            -1 == this.currentDesktopIndex
                              ? (0, s.nX)(
                                  m.cb,
                                  this.m_sCurrentWindowOverlayKey + ".cursor",
                                )
                              : (0, s.nX)(
                                  m.cb,
                                  "system.desktop." +
                                    this.currentDesktopIndex +
                                    ".cursor",
                                ),
                        }),
                      ),
                      d.createElement(
                        (e) =>
                          d.createElement(
                            s.dL,
                            {
                              parent_id: e.parent_id,
                              translation: {
                                x: e.x_offset,
                                y: e.y_offset,
                                z: 0.01,
                              },
                            },
                            d.createElement(b.X, {
                              id: e.target_id + ".ResizeHandle",
                              target_id: e.target_id,
                              min_target_scale: m.Ul,
                              max_target_scale: m.mB,
                              displacement: e.displacement,
                              bVisible: !0,
                              scale: e.scale,
                              tint: _.SW.GrabHandleTint,
                            }),
                          ),
                        {
                          parent_id: "DashboardPanel_" + m.Xk + "_BottomRight",
                          scale: (0, S.xp)(S.$z.Dashboard),
                          target_id: r,
                          displacement: 0,
                          x_offset: 0.03,
                          y_offset: 0,
                        },
                      ),
                    )
                : d.createElement(
                    v.L_,
                    { visible: !0 },
                    d.createElement(
                      "div",
                      { className: "NoDesktopFound" },
                      d.createElement(
                        "h2",
                        null,
                        (0, h.we)("#DesktopViewsUpdating"),
                      ),
                    ),
                  )
            : null;
        }
      });
      (R.k_sMailboxName = "systemui_desktopview"),
        (R.k_nDesktopPanelBaseHeight = 2),
        (0, a.Cg)([c.observable], R.prototype, "m_desktopIndices", void 0),
        (0, a.Cg)(
          [c.observable],
          R.prototype,
          "m_sCurrentWindowOverlayKey",
          void 0,
        ),
        (0, a.Cg)(
          [c.observable],
          R.prototype,
          "m_bIsUsingSteamDesktop",
          void 0,
        ),
        (0, a.Cg)([c.observable], R.prototype, "m_mapWindowInfo", void 0),
        (0, a.Cg)([c.action], R.prototype, "componentDidMount", null),
        (0, a.Cg)([c.computed], R.prototype, "desktopCount", null),
        (0, a.Cg)([c.computed], R.prototype, "sCurrentOverlayKey", null),
        (0, a.Cg)([c.computed], R.prototype, "currentDesktopIndex", null),
        (0, a.Cg)([c.computed], R.prototype, "currentWindowHwnd", null),
        (0, a.Cg)([o.o], R.prototype, "onDesktopScaleChange", null),
        (0, a.Cg)([o.o], R.prototype, "onDesktopChange", null),
        (0, a.Cg)([c.action.bound], R.prototype, "onDesktopViewUpdating", null),
        (0, a.Cg)([o.o], R.prototype, "onDesktopViewReady", null),
        (0, a.Cg)([c.action.bound], R.prototype, "onWindowViewCreated", null),
        (0, a.Cg)([o.o], R.prototype, "onWindowViewChange", null),
        (0, a.Cg)([o.o], R.prototype, "ShowMultitaskingView", null),
        (R = i = (0, a.Cg)([u.PA], R));
    },
    3712: (e, t, r) => {
      "use strict";
      r.d(t, { X: () => d });
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
          var e, t;
          if (null == this.state.xfTransform) return null;
          const r = null === (e = this.props.bVisible) || void 0 === e || e,
            n = null !== (t = this.props.scale) && void 0 !== t ? t : 1;
          return (
            r &&
            i.createElement(
              s.dL,
              null,
              i.createElement(
                s.Y4,
                { value: this.props.opacity },
                i.createElement(
                  s.N,
                  { color: this.props.tint },
                  i.createElement(
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
                    i.createElement(
                      l.$,
                      {
                        className: "GrabHandleButton",
                        key: "move",
                        onMouseDown: this.startMove,
                        onMouseUp: this.endMove,
                      },
                      i.createElement("div", {
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
            },
            s.createElement(o.Provider, { value: this }, this.props.children),
          );
        }
      };
      l = (0, n.Cg)([a.PA], l);
    },
    7530: (e, t, r) => {
      "use strict";
      r.d(t, { X: () => u });
      var n = r(1635),
        i = r(6540),
        a = r(3236),
        s = r(1370),
        o = r(6138),
        l = r(1139),
        c = r(6090);
      let u = class extends i.Component {
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
          return i.createElement(
            c.dL,
            { ignore_parent_scale: !0 },
            i.createElement(
              c.cB,
              {
                id: this.props.id,
                target_id: this.props.target_id,
                is_active: this.state.bActive,
                min_target_scale: this.props.min_target_scale,
                max_target_scale: this.props.max_target_scale,
                displacement: this.props.displacement,
              },
              i.createElement(
                c.Y4,
                { value: this.props.opacity },
                i.createElement(
                  c.N,
                  { color: this.props.tint },
                  i.createElement(
                    c.dL,
                    { translation: { y: r / 2 } },
                    i.createElement(
                      c.dL,
                      { rotation: { z: 90 } },
                      i.createElement(
                        c.Zk,
                        {
                          width: r,
                          interactive: !0,
                          requires_laser: !0,
                          debug_name: "ResizeHandle",
                          hide_lasermouse_when_clicking: !0,
                        },
                        i.createElement(
                          o.$,
                          {
                            className:
                              t < 0.5
                                ? "ResizeHandleButtonMini"
                                : "ResizeHandleButton",
                            key: "move",
                            onMouseDown: this.startMove,
                            onMouseUp: this.endMove,
                          },
                          i.createElement("div", {
                            className: (0, l.FH)("ResizeHandleBar", [
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
      (0, n.Cg)([a.o], u.prototype, "startMove", null),
        (0, n.Cg)([a.o], u.prototype, "endMove", null),
        (u = (0, n.Cg)([s.PA], u));
    },
  },
]); //# sourceMappingURL=file:///c:/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~8012d0c89.js.map
