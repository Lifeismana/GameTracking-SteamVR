var CLSTAMP = "9979804";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [305],
  {
    7504: () => {},
    6013: (e, t, n) => {
      "use strict";
      n.d(t, {
        $1: () => u,
        F7: () => d,
        J$: () => p,
        M2: () => g,
        MS: () => l,
        T4: () => h,
        UQ: () => o,
        Xl: () => a,
        gL: () => m,
      });
      var r = n(5339),
        s = n(3924);
      const i = r.Message;
      class a extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            a.prototype.enum || s.Sg(a.M()),
            i.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            a.sm_m ||
              (a.sm_m = {
                proto: a,
                fields: {
                  enum: { n: 1, br: s.qM.readEnum, bw: s.gp.writeEnum },
                  appid: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  overlay: { n: 3, br: s.qM.readString, bw: s.gp.writeString },
                  hwnd: { n: 4, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                },
              }),
            a.sm_m
          );
        }
        static MBF() {
          return a.sm_mbf || (a.sm_mbf = s.w0(a.M())), a.sm_mbf;
        }
        toObject(e = !1) {
          return a.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(a.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(a.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new a();
          return a.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(a.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(a.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_DashboardTabIcon";
        }
      }
      class o extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.tabs || s.Sg(o.M()),
            i.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  tabs: { n: 1, c: l, r: !0, q: !0 },
                  selected_tab_id: {
                    n: 2,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  vr_settings_tab_id: {
                    n: 3,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  vr_steam_tab_id: {
                    n: 4,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = s.w0(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(o.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new o();
          return o.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_PathProperty_DashboardTabs";
        }
        static getVRPathPropertyKey() {
          return "/vrgamepadui/steamvr/dashboard_tabs";
        }
        getVRPathPropertyKey() {
          return o.getVRPathPropertyKey();
        }
      }
      class l extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.tab_id || s.Sg(l.M()),
            i.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  tab_id: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  display_name: {
                    n: 3,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  icon: { n: 4, c: a },
                  visible_in_dashboard_bar: {
                    n: 2,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  visible_in_dashboard_menu: {
                    n: 5,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = s.w0(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(l.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new l();
          return l.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_PathProperty_DashboardTabs_Tab";
        }
      }
      class c extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.enum || s.Sg(c.M()),
            i.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  enum: { n: 1, br: s.qM.readEnum, bw: s.gp.writeEnum },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = s.w0(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(c.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new c();
          return c.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_DashboardActionIcon";
        }
      }
      class d extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            d.prototype.action_id || s.Sg(d.M()),
            i.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            d.sm_m ||
              (d.sm_m = {
                proto: d,
                fields: {
                  action_id: {
                    n: 1,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  enabled: { n: 3, br: s.qM.readBool, bw: s.gp.writeBool },
                  display_name: {
                    n: 4,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  visible_in_dashboard_bar: {
                    n: 2,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  visible_in_menu: {
                    n: 10,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  is_menu: { n: 11, br: s.qM.readBool, bw: s.gp.writeBool },
                  parent_menu_action_id: {
                    n: 12,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  icon: { n: 5, c },
                  icon_active: { n: 6, c },
                  invocation: {
                    n: 7,
                    d: 1,
                    br: s.qM.readEnum,
                    bw: s.gp.writeEnum,
                  },
                  special_invocation: {
                    n: 9,
                    br: s.qM.readEnum,
                    bw: s.gp.writeEnum,
                  },
                  active: { n: 8, br: s.qM.readBool, bw: s.gp.writeBool },
                },
              }),
            d.sm_m
          );
        }
        static MBF() {
          return d.sm_mbf || (d.sm_mbf = s.w0(d.M())), d.sm_mbf;
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(d.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(d.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new d();
          return d.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(d.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(d.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_DashboardAction";
        }
      }
      class u extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.actions || s.Sg(u.M()),
            i.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: { actions: { n: 1, c: d, r: !0, q: !0 } },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = s.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new u();
          return u.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_PathProperty_DashboardActions";
        }
        static getVRPathPropertyKey() {
          return "/vrgamepadui/steamvr/dashboard_actions";
        }
        getVRPathPropertyKey() {
          return u.getVRPathPropertyKey();
        }
      }
      class p extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            p.prototype.windows || s.Sg(p.M()),
            i.initialize(this, e, 0, -1, [1], null);
        }
        static M() {
          return (
            p.sm_m ||
              (p.sm_m = {
                proto: p,
                fields: { windows: { n: 1, c: m, r: !0, q: !0 } },
              }),
            p.sm_m
          );
        }
        static MBF() {
          return p.sm_mbf || (p.sm_mbf = s.w0(p.M())), p.sm_mbf;
        }
        toObject(e = !1) {
          return p.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(p.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(p.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new p();
          return p.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(p.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(p.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
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
      class m extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.window_id || s.Sg(m.M()),
            i.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  window_id: {
                    n: 1,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  hwnd: { n: 2, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                  title: { n: 3, br: s.qM.readString, bw: s.gp.writeString },
                  tab_id: { n: 4, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = s.w0(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(m.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new m();
          return m.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_PathProperty_DesktopWindows_Window";
        }
      }
      class h extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            h.prototype.can_sleep || s.Sg(h.M()),
            i.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            h.sm_m ||
              (h.sm_m = {
                proto: h,
                fields: {
                  can_sleep: { n: 1, br: s.qM.readBool, bw: s.gp.writeBool },
                  can_shutdown: { n: 2, br: s.qM.readBool, bw: s.gp.writeBool },
                  can_restart_system: {
                    n: 3,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  can_exitvr: { n: 4, br: s.qM.readBool, bw: s.gp.writeBool },
                },
              }),
            h.sm_m
          );
        }
        static MBF() {
          return h.sm_mbf || (h.sm_mbf = s.w0(h.M())), h.sm_mbf;
        }
        toObject(e = !1) {
          return h.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(h.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(h.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new h();
          return h.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(h.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(h.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_PathProperty_PowerOptions";
        }
        static getVRPathPropertyKey() {
          return "/vrgamepadui/steamvr/power_options";
        }
        getVRPathPropertyKey() {
          return h.getVRPathPropertyKey();
        }
      }
      class g extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.version || s.Sg(g.M()),
            i.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  version: { n: 1, br: s.qM.readString, bw: s.gp.writeString },
                  webpack_build_timestamp: {
                    n: 2,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = s.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new g();
          return g.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUIShared_PathProperty_VRVersionInfo";
        }
        static getVRPathPropertyKey() {
          return "/vrgamepadui/steamvr/version_info";
        }
        getVRPathPropertyKey() {
          return g.getVRPathPropertyKey();
        }
      }
    },
    7221: (e, t, n) => {
      "use strict";
      n.d(t, {
        DX: () => a,
        Ut: () => l,
        f5: () => A,
        iM: () => o,
        oT: () => D,
      });
      var r = n(5339),
        s = n(3924);
      const i = r.Message;
      class a extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            a.prototype.name || s.Sg(a.M()),
            i.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            a.sm_m ||
              (a.sm_m = {
                proto: a,
                fields: {
                  name: { n: 1, br: s.qM.readString, bw: s.gp.writeString },
                  message_id: {
                    n: 2,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  response_to_message_id: {
                    n: 3,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  is_error_response: {
                    n: 4,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                },
              }),
            a.sm_m
          );
        }
        static MBF() {
          return a.sm_mbf || (a.sm_mbf = s.w0(a.M())), a.sm_mbf;
        }
        toObject(e = !1) {
          return a.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(a.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(a.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new a();
          return a.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(a.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(a.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return a.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_Header";
        }
      }
      class o extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            o.prototype.error || s.Sg(o.M()),
            i.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            o.sm_m ||
              (o.sm_m = {
                proto: o,
                fields: {
                  error: { n: 1, br: s.qM.readEnum, bw: s.gp.writeEnum },
                  description: {
                    n: 2,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  origin: { n: 3, br: s.qM.readEnum, bw: s.gp.writeEnum },
                },
              }),
            o.sm_m
          );
        }
        static MBF() {
          return o.sm_mbf || (o.sm_mbf = s.w0(o.M())), o.sm_mbf;
        }
        toObject(e = !1) {
          return o.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(o.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(o.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new o();
          return o.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(o.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(o.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
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
      class c extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.tab_id || s.Sg(c.M()),
            i.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  tab_id: { n: 1, br: s.qM.readUint32, bw: s.gp.writeUint32 },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = s.w0(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(c.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new c();
          return c.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_DashboardTabClicked_Request";
        }
      }
      class d extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), i.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return d.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new d();
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new d();
          return d.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_DashboardTabClicked_Response";
        }
      }
      class u extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            u.prototype.action_id || s.Sg(u.M()),
            i.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            u.sm_m ||
              (u.sm_m = {
                proto: u,
                fields: {
                  action_id: {
                    n: 1,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  toggle_value: { n: 2, br: s.qM.readBool, bw: s.gp.writeBool },
                },
              }),
            u.sm_m
          );
        }
        static MBF() {
          return u.sm_mbf || (u.sm_mbf = s.w0(u.M())), u.sm_mbf;
        }
        toObject(e = !1) {
          return u.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(u.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(u.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new u();
          return u.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(u.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(u.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_DashboardActionInvoked_Request";
        }
      }
      class p extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), i.initialize(this, e, 0, -1, void 0, null);
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
          let t = new r.BinaryReader(e),
            n = new p();
          return p.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_DashboardActionInvoked_Response";
        }
      }
      class m extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            m.prototype.window_id || s.Sg(m.M()),
            i.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            m.sm_m ||
              (m.sm_m = {
                proto: m,
                fields: {
                  window_id: {
                    n: 1,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                },
              }),
            m.sm_m
          );
        }
        static MBF() {
          return m.sm_mbf || (m.sm_mbf = s.w0(m.M())), m.sm_mbf;
        }
        toObject(e = !1) {
          return m.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(m.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(m.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new m();
          return m.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(m.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(m.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_DashboardDesktopWindowClicked_Request";
        }
      }
      class h extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), i.initialize(this, e, 0, -1, void 0, null);
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
          let t = new r.BinaryReader(e),
            n = new h();
          return h.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_DashboardDesktopWindowClicked_Response";
        }
      }
      class g extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            g.prototype.dashboard_popup_request_id || s.Sg(g.M()),
            i.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            g.sm_m ||
              (g.sm_m = {
                proto: g,
                fields: {
                  dashboard_popup_request_id: {
                    n: 1,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  popup_overlay_key: {
                    n: 2,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  parent_enum: { n: 15, br: s.qM.readEnum, bw: s.gp.writeEnum },
                  parent_overlay_key: {
                    n: 3,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  parent_device_path: {
                    n: 13,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                  origin_on_parent: { n: 4, c: v },
                  origin_on_popup: { n: 5, c: v },
                  offset: { n: 6, c: _ },
                  rotation: { n: 7, c: S },
                  inherit_parent_pitch: {
                    n: 8,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  inherit_parent_curvature: {
                    n: 9,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  clip_rect: { n: 10, c: b },
                  interactive: { n: 11, br: s.qM.readBool, bw: s.gp.writeBool },
                  requires_laser: {
                    n: 12,
                    br: s.qM.readBool,
                    bw: s.gp.writeBool,
                  },
                  sort_order: { n: 14, br: s.qM.readEnum, bw: s.gp.writeEnum },
                },
              }),
            g.sm_m
          );
        }
        static MBF() {
          return g.sm_mbf || (g.sm_mbf = s.w0(g.M())), g.sm_mbf;
        }
        toObject(e = !1) {
          return g.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(g.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(g.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new g();
          return g.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(g.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(g.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowDashboardPopup_Request";
        }
      }
      class v extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            v.prototype.x || s.Sg(v.M()),
            i.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            v.sm_m ||
              (v.sm_m = {
                proto: v,
                fields: {
                  x: { n: 1, br: s.qM.readFloat, bw: s.gp.writeFloat },
                  y: { n: 2, br: s.qM.readFloat, bw: s.gp.writeFloat },
                },
              }),
            v.sm_m
          );
        }
        static MBF() {
          return v.sm_mbf || (v.sm_mbf = s.w0(v.M())), v.sm_mbf;
        }
        toObject(e = !1) {
          return v.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(v.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(v.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new v();
          return v.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(v.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(v.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowDashboardPopup_Request_NormalizedPosition";
        }
      }
      class _ extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            _.prototype.x_pixels || s.Sg(_.M()),
            i.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  x_pixels: { n: 1, br: s.qM.readFloat, bw: s.gp.writeFloat },
                  y_pixels: { n: 2, br: s.qM.readFloat, bw: s.gp.writeFloat },
                  z_pixels: { n: 3, br: s.qM.readFloat, bw: s.gp.writeFloat },
                  x_meters: { n: 4, br: s.qM.readFloat, bw: s.gp.writeFloat },
                  y_meters: { n: 5, br: s.qM.readFloat, bw: s.gp.writeFloat },
                  z_meters: { n: 6, br: s.qM.readFloat, bw: s.gp.writeFloat },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = s.w0(_.M())), _.sm_mbf;
        }
        toObject(e = !1) {
          return _.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(_.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(_.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new _();
          return _.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(_.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(_.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowDashboardPopup_Request_Position";
        }
      }
      class S extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            S.prototype.pitch_degrees || s.Sg(S.M()),
            i.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            S.sm_m ||
              (S.sm_m = {
                proto: S,
                fields: {
                  pitch_degrees: {
                    n: 1,
                    br: s.qM.readFloat,
                    bw: s.gp.writeFloat,
                  },
                  yaw_degrees: {
                    n: 2,
                    br: s.qM.readFloat,
                    bw: s.gp.writeFloat,
                  },
                },
              }),
            S.sm_m
          );
        }
        static MBF() {
          return S.sm_mbf || (S.sm_mbf = s.w0(S.M())), S.sm_mbf;
        }
        toObject(e = !1) {
          return S.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(S.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(S.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new S();
          return S.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(S.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(S.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowDashboardPopup_Request_Rotation";
        }
      }
      class b extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            b.prototype.u_min || s.Sg(b.M()),
            i.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            b.sm_m ||
              (b.sm_m = {
                proto: b,
                fields: {
                  u_min: { n: 1, br: s.qM.readFloat, bw: s.gp.writeFloat },
                  v_min: { n: 2, br: s.qM.readFloat, bw: s.gp.writeFloat },
                  u_max: { n: 3, br: s.qM.readFloat, bw: s.gp.writeFloat },
                  v_max: { n: 4, br: s.qM.readFloat, bw: s.gp.writeFloat },
                },
              }),
            b.sm_m
          );
        }
        static MBF() {
          return b.sm_mbf || (b.sm_mbf = s.w0(b.M())), b.sm_mbf;
        }
        toObject(e = !1) {
          return b.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(b.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(b.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new b();
          return b.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(b.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(b.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowDashboardPopup_Request_Rect";
        }
      }
      class y extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), i.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return y.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new y();
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new y();
          return y.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowDashboardPopup_Response";
        }
      }
      class R extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            R.prototype.dashboard_popup_request_id || s.Sg(R.M()),
            i.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            R.sm_m ||
              (R.sm_m = {
                proto: R,
                fields: {
                  dashboard_popup_request_id: {
                    n: 1,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                },
              }),
            R.sm_m
          );
        }
        static MBF() {
          return R.sm_mbf || (R.sm_mbf = s.w0(R.M())), R.sm_mbf;
        }
        toObject(e = !1) {
          return R.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(R.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(R.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new R();
          return R.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(R.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(R.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_HideDashboardPopup_Request";
        }
      }
      class f extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), i.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return f.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new f();
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new f();
          return f.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_HideDashboardPopup_Response";
        }
      }
      class w extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            w.prototype.source_accountid || s.Sg(w.M()),
            i.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            w.sm_m ||
              (w.sm_m = {
                proto: w,
                fields: {
                  source_accountid: {
                    n: 1,
                    br: s.qM.readUint32,
                    bw: s.gp.writeUint32,
                  },
                  video_uniqueid: {
                    n: 2,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                },
              }),
            w.sm_m
          );
        }
        static MBF() {
          return w.sm_mbf || (w.sm_mbf = s.w0(w.M())), w.sm_mbf;
        }
        toObject(e = !1) {
          return w.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(w.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(w.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new w();
          return w.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(w.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(w.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_RemoteVideoStream_Request";
        }
      }
      class C extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), i.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return C.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new C();
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new C();
          return C.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_RemoteVideoStream_Response";
        }
      }
      class M extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            M.prototype.overlay_key || s.Sg(M.M()),
            i.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            M.sm_m ||
              (M.sm_m = {
                proto: M,
                fields: {
                  overlay_key: {
                    n: 1,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                },
              }),
            M.sm_m
          );
        }
        static MBF() {
          return M.sm_mbf || (M.sm_mbf = s.w0(M.M())), M.sm_mbf;
        }
        toObject(e = !1) {
          return M.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(M.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(M.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new M();
          return M.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(M.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(M.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowGame_Request";
        }
      }
      class E extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), i.initialize(this, e, 0, -1, void 0, null);
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
          let t = new r.BinaryReader(e),
            n = new E();
          return E.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowGame_Response";
        }
      }
      class T extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            T.prototype.overlay_key || s.Sg(T.M()),
            i.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            T.sm_m ||
              (T.sm_m = {
                proto: T,
                fields: {
                  overlay_key: {
                    n: 1,
                    br: s.qM.readString,
                    bw: s.gp.writeString,
                  },
                },
              }),
            T.sm_m
          );
        }
        static MBF() {
          return T.sm_mbf || (T.sm_mbf = s.w0(T.M())), T.sm_mbf;
        }
        toObject(e = !1) {
          return T.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(T.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(T.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new T();
          return T.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(T.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(T.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowOverlay_Request";
        }
      }
      class V extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), i.initialize(this, e, 0, -1, void 0, null);
        }
        toObject(e = !1) {
          return V.toObject(e, this);
        }
        static toObject(e, t) {
          return e ? { $jspbMessageInstance: t } : {};
        }
        static fromObject(e) {
          return new V();
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new V();
          return V.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return V.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ShowOverlay_Response";
        }
      }
      class k extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            k.prototype.url || s.Sg(k.M()),
            i.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            k.sm_m ||
              (k.sm_m = {
                proto: k,
                fields: {
                  url: { n: 1, br: s.qM.readString, bw: s.gp.writeString },
                },
              }),
            k.sm_m
          );
        }
        static MBF() {
          return k.sm_mbf || (k.sm_mbf = s.w0(k.M())), k.sm_mbf;
        }
        toObject(e = !1) {
          return k.toObject(e, this);
        }
        static toObject(e, t) {
          return s.BT(k.M(), e, t);
        }
        static fromObject(e) {
          return s.Uq(k.M(), e);
        }
        static deserializeBinary(e) {
          let t = new r.BinaryReader(e),
            n = new k();
          return k.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return s.zj(k.MBF(), e, t);
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          s.i0(k.M(), e, t);
        }
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ExecuteSteamURL_Request";
        }
      }
      class H extends i {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(), i.initialize(this, e, 0, -1, void 0, null);
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
          let t = new r.BinaryReader(e),
            n = new H();
          return H.deserializeBinaryFromReader(n, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return e;
        }
        serializeBinary() {
          var e = new r.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {}
        serializeBase64String() {
          var e = new r.BinaryWriter();
          return H.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CVRGamepadUI_Message_ExecuteSteamURL_Response";
        }
      }
      const A = {
        "DashboardTabClicked#1": {
          msgClassRequest_t: c,
          msgClassResponse_t: d,
          strMethod: "DashboardTabClicked",
        },
        "DashboardActionInvoked#1": {
          msgClassRequest_t: u,
          msgClassResponse_t: p,
          strMethod: "DashboardActionInvoked",
        },
        "DashboardDesktopWindowClicked#1": {
          msgClassRequest_t: m,
          msgClassResponse_t: h,
          strMethod: "DashboardDesktopWindowClicked",
        },
        "ShowDashboardPopup#1": {
          msgClassRequest_t: g,
          msgClassResponse_t: y,
          strMethod: "ShowDashboardPopup",
        },
        "HideDashboardPopup#1": {
          msgClassRequest_t: R,
          msgClassResponse_t: f,
          strMethod: "HideDashboardPopup",
        },
        "RemoteVideoStream#1": {
          msgClassRequest_t: w,
          msgClassResponse_t: C,
          strMethod: "RemoteVideoStream",
        },
        "ShowGame#1": {
          msgClassRequest_t: M,
          msgClassResponse_t: E,
          strMethod: "ShowGame",
        },
        "ShowOverlay#1": {
          msgClassRequest_t: T,
          msgClassResponse_t: V,
          strMethod: "ShowOverlay",
        },
      };
      class D {
        constructor(e) {
          this.m_Client = e;
        }
        ExecuteSteamURL(e) {
          return this.m_Client.SendVRGamepadUIRequest(
            "ExecuteSteamURL#1",
            k.fromObject(null != e ? e : {}),
            H,
          );
        }
      }
    },
    5818: (e, t, n) => {
      "use strict";
      n.d(t, { z: () => Ee });
      var r = n(1635),
        s = n(6090),
        i = n(3236),
        a = n(2563),
        o = n(7813),
        l = n(4015),
        c = n(6540),
        d = n(6138),
        u = n(6731),
        p = n(5615),
        m = n(3606),
        h = n(3714),
        g = n(1139),
        v = n(1333),
        _ = n(427),
        S = n(4493);
      let b = class extends _.yO {
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
        setDeviceSetting(e, t, n) {
          n &&
            (v.HR.SetSettingsValue(e, n.guid),
            v.HR.SetSettingsValue(t, n.name),
            this.temporaryDropdownOverride(e, n.guid));
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
            t.push(S.Sr.Separator);
          for (let n of e) t.push({ value: n.guid, sLabel: n.name });
          return t;
        }
        render() {
          var e, t;
          if (!this.props.active) return null;
          if (void 0 === v.HR.audioDevices) return null;
          let n =
              null !==
                (e =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VRProperties.GetBoolProperty(
                        "/user/head",
                        s.fD.Audio_SupportsDualSpeakerAndJackOutput_Bool,
                      )) &&
              void 0 !== e &&
              e,
            r =
              null !==
                (t =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VRProperties.GetBoolProperty(
                        "/user/head",
                        s.fD.Hmd_SupportsMicMonitoring_Bool,
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
            n &&
              c.createElement(_.Al, {
                name: "/settings/audio/dualSpeakerAndJackOutput",
                label: (0, h.we)("#Settings_Audio_SpeakerJackOutput"),
                offLabel: (0, h.we)("#Settings_Audio_Single"),
                onLabel: (0, h.we)("#Settings_Audio_Dual"),
                title: (0, h.we)("#Settings_Audio_SpeakerJackOutput_Title"),
              }),
            r &&
              c.createElement(_.Al, {
                name: "/settings/audio/muteMicMonitor",
                label: (0, h.we)("#Settings_Audio_MicMonitor"),
                offLabel: (0, h.we)("#Settings_Audio_Active"),
                onLabel: (0, h.we)("#Settings_Audio_Muted"),
              }),
          );
        }
      };
      (b.Name = "audio_settings"),
        (0, r.Cg)([i.o], b.prototype, "onAudioDeviceChanged", null),
        (0, r.Cg)([i.o], b.prototype, "onOverrideDeviceDropdownChanged", null),
        (0, r.Cg)([i.o], b.prototype, "onMirrorDeviceDropdownChanged", null),
        (b = (0, r.Cg)([l.PA], b));
      var y,
        R,
        f = n(917);
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
        })(R || (R = {}));
      class w extends c.Component {
        static get DefaultState() {
          return {
            bShowTest: !1,
            streamingProgress: R.Evaluating,
            trackingProgress: R.Evaluating,
          };
        }
        constructor(e) {
          super(e),
            (this.m_imageRef = c.createRef()),
            (this.m_cameraFrameCount = 0),
            (this.state = w.DefaultState);
        }
        componentWillUnmount() {
          this.stopTest();
        }
        updateStatus() {
          let e = Date.now() - this.m_startTestTime;
          this.state.streamingProgress == R.Evaluating &&
            (this.m_cameraFrameCount > 0
              ? this.setState({ streamingProgress: R.Success })
              : e > 5e3 && this.setState({ streamingProgress: R.Failure }));
          let t = VRHTML.GetPose(s.Gz, s.mu.Standing);
          if (this.m_cameraFrameCount > 0) {
            t.bPoseIsValid || this.setState({ trackingProgress: R.Failure }),
              Date.now() - this.m_firstFrameTime > 2e3 &&
                this.state.trackingProgress == R.Evaluating &&
                this.setState({ trackingProgress: R.Success });
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
          return this.state.streamingProgress == R.Evaluating
            ? c.createElement(
                "h1",
                { className: "CameraStatus Evaluating" },
                (0, h.we)("#CameraTest_CheckingCamera"),
              )
            : this.state.streamingProgress == R.Failure
              ? c.createElement(
                  "h1",
                  { className: "CameraStatus Failure" },
                  (0, h.we)("#CameraTest_CameraFailed"),
                )
              : this.state.trackingProgress == R.Evaluating
                ? c.createElement(
                    "h1",
                    { className: "CameraStatus Evaluating" },
                    (0, h.we)("#CameraTest_CheckingTracking"),
                  )
                : this.state.trackingProgress == R.Failure
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
                d.$,
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
      var C;
      (0, r.Cg)([i.o], w.prototype, "onUpdateCameraFrame", null),
        (0, r.Cg)([i.o], w.prototype, "startTest", null),
        (0, r.Cg)([i.o], w.prototype, "stopTest", null),
        (function (e) {
          (e[(e.Off = 0)] = "Off"),
            (e[(e.On2D = 1)] = "On2D"),
            (e[(e.On3D = 2)] = "On3D");
        })(C || (C = {}));
      const M = (0, l.PA)(() => {
        var e;
        const t =
          null !==
            (e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRProperties.GetBoolProperty(
                    "/user/head",
                    s.fD.SupportsRoomViewDepthProjection_Bool,
                  )) &&
          void 0 !== e &&
          e;
        let n = v.HR.settings.get(m.D1),
          r = [
            { value: C.Off, sLabel: (0, h.we)("#Settings_ToggleButton_Off") },
          ];
        return (
          t || n == C.On3D
            ? (r.push({ value: C.On2D, sLabel: (0, h.we)("#Settings_2D") }),
              r.push({ value: C.On3D, sLabel: (0, h.we)("#Settings_3D") }))
            : r.push({
                value: C.On2D,
                sLabel: (0, h.we)("#Settings_ToggleButton_On"),
              }),
          c.createElement(_.JA, {
            label: (0, h.we)("#Settings_Camera_AllowCameraForRoomView"),
            title: (0, h.we)("#Settings_Camera_AllowCameraForRoomView_Desc"),
            items: r,
            value: n,
            onChange: (e) => {
              v.HR.SetSettingsValue(m.D1, e);
            },
          })
        );
      });
      var E;
      !(function (e) {
        (e[(e.Auto = 0)] = "Auto"),
          (e[(e.Power60hz = 1)] = "Power60hz"),
          (e[(e.Power50hz = 2)] = "Power50hz");
      })(E || (E = {}));
      const T = (0, l.PA)(() => {
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
      let V = class extends _.yO {
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
        cameraToggleEnabled() {
          var e;
          return (
            null ===
              (e =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRProperties.GetBoolProperty(
                      "/user/head",
                      s.fD.AllowCameraToggle_Bool,
                    )) ||
            void 0 === e ||
            e
          );
        }
        antiFlickerEnabled() {
          var e;
          return (
            null !==
              (e =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRProperties.GetBoolProperty(
                      "/user/head",
                      s.fD.AllowLightSourceFrequency_Bool,
                    )) &&
            void 0 !== e &&
            e
          );
        }
        get cameraSupportsRates() {
          var e;
          return (
            null !==
              (e =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRProperties.GetBoolProperty(
                      "/user/head",
                      s.fD.CameraSupportsCompatibilityModes_Bool,
                    )) &&
            void 0 !== e &&
            e
          );
        }
        fetchCameraRate() {
          var e;
          if (!this.cameraSupportsRates) return 0;
          return (function (e) {
            switch (e) {
              case s.Ee.ISO_30FPS:
                return 30;
              case s.Ee.ISO_35FPS:
                return 35;
              case s.Ee.ISO_40FPS:
                return 40;
              case s.Ee.ISO_46FPS:
                return 45;
              case s.Ee.ISO_50FPS:
                return 50;
              case s.Ee.BULK_8K_DMA:
                return 55;
              default:
              case s.Ee.BULK_DEFAULT:
                return 60;
            }
          })(
            null !==
              (e =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRProperties.GetInt32Property(
                      "/user/head",
                      s.fD.CameraCompatibilityMode_Int32,
                    )) && void 0 !== e
              ? e
              : s.Ee.BULK_DEFAULT,
          );
        }
        setCameraRate(e) {
          let t = (function (e) {
            switch (e) {
              case 30:
                return s.Ee.ISO_30FPS;
              case 35:
                return s.Ee.ISO_35FPS;
              case 40:
                return s.Ee.ISO_40FPS;
              case 45:
                return s.Ee.ISO_46FPS;
              case 50:
                return s.Ee.ISO_50FPS;
              case 55:
                return s.Ee.BULK_8K_DMA;
              default:
                return s.Ee.BULK_DEFAULT;
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
          var e;
          let t = !1,
            n = !1;
          switch (this.currentRoomViewStyle) {
            case y.EDGE_A:
              (n = !0), (t = !0);
              break;
            case y.EDGE_B:
              t = !0;
          }
          const r = this.state.cameraRateValue > 0,
            i = v.HR.settings.get(m.D1),
            a =
              v.HR.settings.get(
                "/settings/camera/enableCameraForCollisionBounds",
              ) || i != C.Off;
          let o = [
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
          const l =
            null !==
              (e =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRProperties.GetBoolProperty(
                      "/user/head",
                      s.fD.SupportsRoomViewDepthProjection_Bool,
                    )) &&
            void 0 !== e &&
            e;
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(M, null),
            this.antiFlickerEnabled() && c.createElement(T, null),
            l &&
              i == C.On3D &&
              c.createElement(
                "div",
                { className: "SettingsItemValueLabel" },
                (0, h.we)("#Settings_Camera_RoomView3D_Experimental"),
              ),
            !l &&
              i == C.On3D &&
              c.createElement(
                "div",
                { className: "SettingsItemValueLabel" },
                (0, h.we)("#Settings_Camera_RoomView3D_Unsupported"),
              ),
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
                valueStyleVariant: f.Te.OnHandle,
                renderValue: (e) => this.state.cameraRateValue.toString(),
              }),
            a &&
              c.createElement(_.xS, {
                value: this.currentRoomViewStyle,
                onChange: (e) => v.HR.SetSettingsValue(m.Ni, e),
                label: (0, h.we)("#Settings_Camera_RoomViewStyle"),
                items: o,
                subsection:
                  (n || t) &&
                  c.createElement(
                    c.Fragment,
                    null,
                    t &&
                      c.createElement(_.Pw, {
                        nameR: "/settings/camera/cameraBoundsColorGammaR",
                        nameG: "/settings/camera/cameraBoundsColorGammaG",
                        nameB: "/settings/camera/cameraBoundsColorGammaB",
                        label: (0, h.we)("#Settings_Chaperone_BoundsColor"),
                      }),
                    n &&
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
                  this.cameraToggleEnabled() &&
                  c.createElement("hr", null),
                this.cameraEnabled() && this.GetComponentsForGroup("dev"),
                this.cameraToggleEnabled() &&
                  c.createElement(_.Al, {
                    label: (0, h.we)("#Settings_Camera_EnableCamera"),
                    value: this.cameraEnabled(),
                    requiresRestart: !0,
                    onChange: this.onCameraEnabled,
                    offLabel: (0, h.we)("#Settings_ToggleButton_Disable"),
                    onLabel: (0, h.we)("#Settings_ToggleButton_Enable"),
                  }),
                this.cameraEnabled() &&
                  this.cameraToggleEnabled() &&
                  c.createElement(w, null),
                this.makeResetToDefaultButton(),
              )
            : null;
        }
      };
      (V.Name = "camera_settings"),
        (0, r.Cg)([i.o], V.prototype, "onCameraEnabled", null),
        (0, r.Cg)([i.o], V.prototype, "onCameraRateChanged", null),
        (0, r.Cg)([i.o], V.prototype, "onStartCameraTest", null),
        (0, r.Cg)([i.o], V.prototype, "onStopCameraTest", null),
        (0, r.Cg)([o.EW], V.prototype, "currentRoomViewStyle", null),
        (V = (0, r.Cg)([l.PA], V));
      var k = n(2928),
        H = n(7496),
        A = n(1835),
        D = n(8696);
      let O = class extends _.yO {
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
                      { value: H.eo.Near, sLabel: (0, h.we)("#Settings_Near") },
                      {
                        value: H.eo.Middle,
                        sLabel: (0, h.we)("#Settings_Middle"),
                      },
                      { value: H.eo.Far, sLabel: (0, h.we)("#Settings_Far") },
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
                (0, s.R$)() != s.OH.Overlay &&
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
                  valueStyleVariant: f.Te.OnHandle,
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
                      value: D.Do.Curved,
                      sLabel: (0, h.we)("#Settings_TheaterCurvature_Curved"),
                    },
                    {
                      value: D.Do.Flat,
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
              )
            : null;
        }
      };
      var L;
      (O.Name = "dashboard_settings"),
        (O = (0, r.Cg)([l.PA], O)),
        (function (e) {
          (e[(e.Disabled = 0)] = "Disabled"),
            (e[(e.Automatic = 1)] = "Automatic"),
            (e[(e.Always = 2)] = "Always");
        })(L || (L = {}));
      let B = class extends c.Component {
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
            n = [],
            r = 0;
          if (!t)
            for (let t = 0; t < e.length; ) {
              let s = {
                sId: "",
                sName: "",
                bIsImplicit: !1,
                bIsEnabled: !1,
                bIsModifyAllowed: !0,
              };
              (s.sId = e[t++].toString()),
                (s.sName = e[t++].toString()),
                (s.bIsImplicit = !0 === e[t++]),
                (s.bIsEnabled = !0 === e[t++]),
                (s.bIsModifyAllowed = !0 === e[t++]),
                n.push(s),
                s.bIsEnabled && r++;
            }
          const s = n.filter(this.isImplicitLayer),
            i = n.filter(this.isExplicitLayer),
            a = n.filter(this.isImplicitNoModifLayer);
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
                d.$,
                { className: "ButtonControl", onClick: this.show },
                (0, h.we)("#OpenXR_ApiLayers_Manage"),
                c.createElement(
                  "div",
                  { className: "Badge" },
                  (0, h.we)("#OpenXR_ApiLayers_Active", r),
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
                s.length > 0 &&
                  s.map((e) =>
                    c.createElement(_.Al, {
                      key: e.sId,
                      label: e.sName,
                      value: e.bIsEnabled,
                      onChange: (t) => this.setApiLayerState(e.sId, t),
                    }),
                  ),
                a.length > 0 &&
                  a.map((e) =>
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
      (0, r.Cg)([i.o], B.prototype, "isImplicitLayer", null),
        (0, r.Cg)([i.o], B.prototype, "isExplicitLayer", null),
        (0, r.Cg)([i.o], B.prototype, "isImplicitNoModifLayer", null),
        (0, r.Cg)([i.o], B.prototype, "setApiLayerState", null),
        (0, r.Cg)([i.o], B.prototype, "show", null),
        (0, r.Cg)([i.o], B.prototype, "hide", null),
        (B = (0, r.Cg)([l.PA], B));
      let I = class extends _.yO {
        constructor(e) {
          super(e);
          (this.m_mailbox = new s._n()),
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
          let [t, n] =
            null !==
              (e =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.XRRuntimeManager.GetCurrentRuntime()) && void 0 !== e
              ? e
              : [s.gN.Error, ""];
          s.gN.ThisSteamVR;
          const r = VRHTML.VRMonitor.HasVRMonitor();
          switch (t) {
            case s.gN.AnotherSteamVR:
              n = "#OpenXR_AnotherSteamVR";
              break;
            case s.gN.ThisSteamVR:
              n = "#OpenXR_SteamVR";
              break;
            default:
            case s.gN.Error:
              n = "#OpenXR_Error";
              break;
            case s.gN.None:
              n = "#OpenXR_None";
              break;
            case s.gN.AnotherRuntime:
              switch (n) {
                case "Oculus OpenXR":
                  n = "#OpenXR_OculusRuntime";
                  break;
                case "MixedRealityRuntime":
                  n = "#OpenXR_WindowsMixedReality";
              }
          }
          return (
            n.startsWith("#") && (n = (0, h.we)(n)),
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
                  n,
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
                    d.$,
                    {
                      className: "ButtonControl",
                      onClick: this.OnSetAsOpenXRRuntime,
                      enabled: r,
                    },
                    (0, h.we)("#Settings_SetAsOpenXRRuntime"),
                  ),
                ),
              c.createElement(B, null),
              this.makeResetToDefaultButton(),
              c.createElement(_.JA, {
                name: m.i8,
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
      (I.Name = "openxr_settings"),
        (0, r.Cg)([i.o], I.prototype, "OnSetAsOpenXRRuntime", null),
        (I = (0, r.Cg)([l.PA], I));
      const P = (0, l.PA)(function () {
        const [e, t] = c.useState(s.GQ.Medium),
          [n, r] = c.useState(!1),
          [i, a] = c.useState(""),
          o = c.useCallback((e) => {
            a(e);
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
          value: s.GQ.Small,
          sLabel: (0, h.we)("#Advanced_SmallSpace"),
        }),
          l.push({
            value: s.GQ.Medium,
            sLabel: (0, h.we)("#Advanced_MediumSpace"),
          }),
          l.push({
            value: s.GQ.Large,
            sLabel: (0, h.we)("#Advanced_LargeSpace"),
          }),
          l.push({
            value: s.GQ.Gigantic,
            sLabel: (0, h.we)("#Advanced_GiganticSpace"),
          }),
          l.push({
            value: s.GQ.Standing,
            sLabel: (0, h.we)("#Advanced_StandingSpace"),
          });
        const u = (0, h.we)(
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
              d.$,
              {
                className: "ButtonControl",
                onClick: () => {
                  VRHTML.VRChaperoneSetup.QuickCalibratePlayspace(e);
                },
              },
              (0, h.we)("#Advanced_QuickCalibrate"),
            ),
            c.createElement(S.ms, { items: l, onChange: t, value: e }),
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
                d.$,
                {
                  className: "ButtonControl",
                  onClick: function () {
                    p()
                      ? (VRHTML.VRSystem.StopTrackingRecording(), r(!0))
                      : (VRHTML.VRSystem.StartTrackingRecording(), r(!1));
                  },
                },
                u,
              ),
            ),
          n &&
            !p() &&
            c.createElement(
              _.bB,
              {
                className: "TrackingSavedModalButton",
                header: (0, h.we)("#Settings_Developer_TrackingDataHeader"),
                onDismissRequested: function () {
                  r(!1);
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
                d.$,
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
              d.$,
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
      function F() {
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
              d.$,
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
              d.$,
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
                  d.$,
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
                  d.$,
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
                  d.$,
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
                  d.$,
                  {
                    className: "ButtonControl",
                    onClick: () => {
                      e(!0);
                    },
                  },
                  (0, h.we)("#Advanced_EnableDirectDisplayMode"),
                ),
                c.createElement(
                  d.$,
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
                c.createElement(P, null),
                VRHTML.VRMonitor.HasVRMonitor() &&
                  c.createElement(
                    c.Fragment,
                    null,
                    c.createElement("hr", null),
                    c.createElement(N, null),
                    c.createElement("hr", null),
                    c.createElement(x, null),
                    c.createElement("hr", null),
                    c.createElement(F, null),
                  ),
                c.createElement("hr", null),
                c.createElement(z, null),
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
      (G.Name = "developer_settings"), (G = (0, r.Cg)([l.PA], G));
      const z = (0, l.PA)(function (e) {
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
            value: new Date(1755221209e3).toLocaleString(),
          }),
        );
      });
      var U = n(2267);
      let q = class extends _.yO {
        constructor(e) {
          super(e);
        }
        render() {
          return this.props.active
            ? c.createElement(
                c.Fragment,
                null,
                c.createElement(U.y, null),
                c.createElement(U.Pj, null),
                c.createElement(U.EM, null),
                c.createElement(U.zU, null),
                c.createElement(U.rO, null),
                !A.SW.isVRGamepadUI &&
                  c.createElement(_.xS, {
                    name: m.md,
                    label: (0, h.we)("#Settings_Dashboard_Position"),
                    items: [
                      { value: H.eo.Near, sLabel: (0, h.we)("#Settings_Near") },
                      {
                        value: H.eo.Middle,
                        sLabel: (0, h.we)("#Settings_Middle"),
                      },
                      { value: H.eo.Far, sLabel: (0, h.we)("#Settings_Far") },
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
                      d.$,
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
      (q.Name = "general_settings"), (q = (0, r.Cg)([l.PA], q));
      const j = (e) => {
        var t;
        const [n, r] = (0, c.useState)(!1);
        const i =
            0.9 *
            (null !==
              (t =
                null === s.Ay || void 0 === s.Ay
                  ? void 0
                  : s.Ay.VRProperties.GetFloatProperty(
                      s.Gz,
                      s.fD.DashboardScale_Float,
                    )) && void 0 !== t
              ? t
              : 1),
          [a, o] = ((e) => {
            const [t, n] = (0, c.useState)(e);
            return (
              c.useEffect(() => {
                if (t > 0) {
                  const e = window.setTimeout(() => {
                    n(t - 0.05);
                  }, 50);
                  return () => {
                    window.clearTimeout(e);
                  };
                }
              }, [t]),
              [t, n]
            );
          })(0);
        a <= 0 && n && (r(!1), e.onApplyCal());
        const l = (function (e, t, n, r) {
            if (!isFinite(e) || !isFinite(t)) return null;
            const s = [];
            return (
              s.push(
                c.createElement("line", {
                  key: "lineU",
                  x1: 0 + n,
                  y1: 0 + n,
                  x2: e - n,
                  y2: t - n,
                  style: {
                    stroke: "rgb(196,196,196)",
                    strokeWidth: 9,
                    strokeLinecap: "round",
                  },
                }),
              ),
              s.push(
                c.createElement("line", {
                  key: "lineL",
                  x1: 0 + n,
                  y1: e - n,
                  x2: t - n,
                  y2: 0 + n,
                  style: {
                    stroke: "rgb(196,196,196)",
                    strokeWidth: 9,
                    strokeLinecap: "round",
                  },
                }),
              ),
              s.push(
                c.createElement("circle", {
                  key: "centercirc",
                  cx: e / 2,
                  cy: t / 2,
                  r: 50 * r,
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
                s,
              )
            );
          })(240, 240, 20, a),
          u = Math.max(a > 0 ? 1 : 1 + 5 * a, 0);
        return n
          ? c.createElement(
              s.dL,
              { parent_path: "/user/head" },
              c.createElement(
                s.dL,
                { translation: { y: 0, z: -70 }, rotation: { z: 0 }, scale: i },
                c.createElement(
                  s.Zk,
                  {
                    width: void 0,
                    height: 12 * u,
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
              d.$,
              {
                className: "ButtonControl",
                enabled: !n,
                onClick: () => {
                  o(1.5), r(!0);
                },
              },
              " Do Center Track ",
            );
      };
      let K = class extends c.Component {
        constructor(e) {
          super(e),
            (this.m_eyeTrackingServerStatusHandle = null),
            (this.m_mailbox = new s._n()),
            (this.state = { nStatus: null }),
            this.m_mailbox.Init("eye_server_ui");
        }
        componentDidMount() {
          this.m_eyeTrackingServerStatusHandle =
            null === s.Ay || void 0 === s.Ay
              ? void 0
              : s.Ay.RegisterForEyeTrackingServerStatus(
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
          this.m_mailbox.SendMessage(s.pg, t);
        }
        render() {
          const e = (0, s.R$)() == s.OH.Overlay;
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
                  d.$,
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
                  d.$,
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
                  d.$,
                  {
                    className: "ButtonControl",
                    onClick: () => this.SetEyeTrackingVisualization("0"),
                  },
                  "Off",
                ),
                c.createElement(
                  d.$,
                  {
                    className: "ButtonControl",
                    onClick: () => this.SetEyeTrackingVisualization("1"),
                  },
                  "On",
                ),
                c.createElement(
                  d.$,
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
                  c.createElement(j, {
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
      (0, r.Cg)(
        [i.o],
        K.prototype,
        "onEyeTrackingServerEnabledEventUpdate",
        null,
      ),
        (0, r.Cg)([i.o], K.prototype, "stopEyeTrackingServer", null),
        (0, r.Cg)([i.o], K.prototype, "startEyeTrackingServer", null),
        (0, r.Cg)([i.o], K.prototype, "doEyeTrackingCal", null),
        (0, r.Cg)([i.o], K.prototype, "SetEyeTrackingVisualization", null),
        (K = (0, r.Cg)([l.PA], K));
      var $ = n(2505),
        X = n.n($);
      function Z() {
        const [e, t] = c.useState();
        return c.createElement(
          _.YO,
          { className: "SettingsItem" },
          c.createElement(
            d.$,
            {
              className: "ButtonControl Spanning",
              onClick: () =>
                (0, r.sH)(this, void 0, void 0, function* () {
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
      const Q = (0, l.PA)(() =>
          c.createElement(
            _.YO,
            { className: "SettingsItem" },
            c.createElement(_.xS, {
              label: "Auto-Show Dashboard",
              name: m.Bf,
              items: [
                { value: "", sLabel: "Default" },
                S.Sr.Separator,
                { value: m.wi, sLabel: "Steam (VRGamepadUI)" },
                S.Sr.Separator,
                { value: m.Sx, sLabel: "Recent Games (Old Dashboard)" },
                { value: m.dw, sLabel: "Now Playing" },
                S.Sr.Separator,
                { value: m.Xk, sLabel: "Desktop View" },
                { value: m.GO + ".1", sLabel: "Desktop 1" },
                { value: m.GO + ".2", sLabel: "Desktop 2" },
                S.Sr.Separator,
                { value: m.Wt, sLabel: "Settings" },
              ],
            }),
          ),
        ),
        J = (e) => {
          const [t, n] = c.useState(1),
            [r, s] = c.useState(1),
            [i, a] = c.useState(1),
            [o, l] = c.useState(1),
            [d, u] = c.useState(!1);
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
              onChange: n,
            }),
            c.createElement(_.JA, {
              label: "Segmented Control",
              items: [
                { sLabel: "One", value: 1 },
                { sLabel: "Two", value: 2 },
                { sLabel: "Three", value: 3 },
              ],
              value: r,
              onChange: s,
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
              onChange: a,
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
              value: d,
              onChange: u,
            }),
            c.createElement(_.Al, {
              label: "Inverted Toggle",
              value: d,
              onChange: u,
              swapOnOff: !0,
            }),
          );
        },
        Y = (e) => {
          const [t, n] = c.useState(1);
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
              onChange: n,
            }),
          );
        },
        ee = (e) => {
          const [t, n] = c.useState(1);
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
              onChange: n,
            }),
          );
        },
        te = (0, l.PA)(() => {
          const e = "settingscontrolzoo",
            t = v.HR.routePageSection == e;
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(
              "div",
              { className: "SettingsItem Button" },
              c.createElement(
                d.$,
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
                c.createElement(J, null),
                c.createElement("hr", null),
                c.createElement(Y, null),
                c.createElement("hr", null),
                c.createElement(ee, null),
              ),
          );
        });
      function ne(e) {
        return c.createElement(
          c.Fragment,
          null,
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
      function re(e) {
        return c.createElement(
          c.Fragment,
          null,
          c.createElement(_.tE, {
            name: "/settings/dashboard/theaterModeBrightness",
            label: "Theater Room Brightness",
            min: 0,
            max: 1,
            valueStyleVariant: f.Te.OnHandle,
            detents: [0.5],
            renderValue: (e) => (100 * e).toFixed(0) + "%",
          }),
          c.createElement(_.tE, {
            name: "/settings/dashboard/theaterModeReflection",
            label: "Theater Reflections Brightness",
            min: 0,
            max: 1,
            valueStyleVariant: f.Te.OnHandle,
            detents: [0.5],
            renderValue: (e) => (100 * e).toFixed(0) + "%",
          }),
          c.createElement(_.tE, {
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
              valueStyleVariant: f.Te.OnHandle,
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
              valueStyleVariant: f.Te.OnHandle,
              detents: [0.6],
              renderValue: (e) => e.toFixed(2),
            }),
          ),
        });
      }
      function ie(e) {
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
              valueStyleVariant: f.Te.OnHandle,
              detents: [1],
              renderValue: (e) => e.toFixed(2),
            }),
            c.createElement(_.tE, {
              name: m.El,
              label: (0, h.we)("#Settings_ControllerOverlayFilteringBeta"),
              min: 0,
              max: 10,
              valueStyleVariant: f.Te.OnHandle,
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
              valueStyleVariant: f.Te.OnHandle,
              detents: [5],
              renderValue: (e) => e.toFixed(2),
            }),
          ),
        });
      }
      let ae = class extends _.yO {
        constructor(e) {
          super(e),
            (this.m_mailbox = new s._n()),
            (this.m_softApStatus = ""),
            (this.m_softApSSID = ""),
            (this.m_softApPassword = ""),
            this.m_mailbox.Init("internal_settings"),
            this.m_mailbox.RegisterHandler(
              "sap_status_update",
              this.onSapStatusUpdate,
            );
        }
        toggleMirrorRender() {
          this.m_mailbox.SendMessage(s.pg, { type: "toggle_mirror_render" }),
            this.setState({ bAllowServerStop: !1 });
        }
        configSoftAP(e) {
          let t = { type: "configure_softap", enabled: e };
          this.m_mailbox.SendMessage(s.sk, t);
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
          (0, s.R$)(), s.OH.Overlay;
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
            this.schemaComponents,
            !1,
            !1,
            !1,
            c.createElement(re, null),
            c.createElement(se, null),
            c.createElement(ie, null),
            c.createElement(
              "div",
              { className: "SettingsItem Button" },
              c.createElement(
                d.$,
                {
                  className: "ButtonControl",
                  onClick: () => this.toggleMirrorRender(),
                },
                "Toggle Mirror Device Rendering",
              ),
            ),
            c.createElement(_.tE, {
              name: "/settings/dashboard/verticalOffsetCm_2",
              label: "Dashboard Vertical Offset (cm)",
              min: -25,
              max: 25,
              valueStyleVariant: f.Te.OnHandle,
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
            c.createElement(ne, null),
            c.createElement(Q, null),
            c.createElement(Z, null),
            c.createElement(te, null),
            this.makeResetToDefaultButton(),
          );
        }
      };
      (ae.Name = "internal_settings"),
        (0, r.Cg)([i.o], ae.prototype, "toggleMirrorRender", null),
        (0, r.Cg)([i.o], ae.prototype, "configSoftAP", null),
        (0, r.Cg)([i.o], ae.prototype, "onSapStatusUpdate", null),
        (ae = (0, r.Cg)([l.PA], ae));
      var oe = n(9118);
      let le = class extends c.Component {
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
            (this.m_workshopStateChangedCanaryDisposer = (0, o.lB)(
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
            n = t.find((t) => t.file == e) || null,
            r = n ? n.preview : null;
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
                d.$,
                {
                  className: (0, g.FH)("ButtonControl", ["Background", !!r]),
                  style: {
                    "--background-url-value": r ? 'url("' + r + '")' : null,
                  },
                  onClick: this.showModal,
                },
                !r && (0, h.we)("#Settings_Appearance_Background_Select"),
              ),
            ),
            this.state.bShowModal &&
              c.createElement(
                _.bB,
                {
                  onDismissRequested: this.hideModal,
                  className: "Backgrounds",
                  header: (0, h.we)("#Settings_Appearance_Background"),
                  subheader: oe.W.IsSteamAvailable
                    ? null
                    : (0, h.we)("#Settings_Appearance_Background_NoSteam"),
                },
                c.createElement(
                  "div",
                  { className: "BackgroundsGrid" },
                  t.map((t, n) =>
                    c.createElement(d.$, {
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
      (0, r.Cg)([i.o], le.prototype, "updateUGCItems", null),
        (0, r.Cg)([i.o], le.prototype, "setBackground", null),
        (0, r.Cg)([i.o], le.prototype, "hideModal", null),
        (0, r.Cg)([i.o], le.prototype, "showModal", null),
        (0, r.Cg)([o.EW], le.prototype, "currentBackgroundPath", null),
        (le = (0, r.Cg)([l.PA], le));
      class ce extends c.Component {
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
      function de() {
        const [e, t] = c.useState({ x: 1, y: 1 }),
          n = c.useCallback(() => {
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
                : VRHTML.RegisterForChaperoneChangedEvents(n);
            return null == e ? void 0 : e.unregister;
          }, [n]),
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
      let ue = class extends _.yO {
        constructor(e) {
          super(e);
        }
        render() {
          var e;
          if (!this.props.active) return null;
          const t = v.HR.settings.get("/settings/steamvr/background"),
            n = !!t && !t.startsWith("#"),
            r =
              null !== (e = v.HR.settings.get(m.Vv)) && void 0 !== e ? e : 0.7;
          let s;
          return (
            (s =
              r < 0.5
                ? (0, h.we)("#Settings_Chaperone_SuitableForSmall")
                : r < 1
                  ? (0, h.we)("#Settings_Chaperone_SuitableForMedium")
                  : (0, h.we)("#Settings_Chaperone_SuitableForLarge")),
            c.createElement(
              c.Fragment,
              null,
              c.createElement(ce, null),
              c.createElement(de, null),
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
                    valueStyleVariant: f.Te.OnHandle,
                  }),
                  c.createElement(_.tE, {
                    min: 0.2,
                    max: 1.4,
                    detents: [0.7],
                    name: m.Vv,
                    label: (0, h.we)("#Settings_Chaperone_ActivationDistance"),
                    renderValue: (e) => e.toFixed(2),
                    valueStyleVariant: f.Te.OnHandle,
                  }),
                  c.createElement(
                    "div",
                    { className: "SettingsItemValueLabel" },
                    s,
                  ),
                ),
              }),
              c.createElement(_.RM, {
                label: (0, h.we)("#Settings_Appearance_PlayArea_FloorColor"),
                name: "/settings/steamvr/playAreaColor",
              }),
              c.createElement(le, null),
              n &&
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
                        d.$,
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
      var pe;
      (ue.Name = "playarea_settings"), (ue = (0, r.Cg)([l.PA], ue));
      class me {
        constructor() {
          (this.driverList = []),
            (this.driverNameToIdMap = new Map()),
            X()
              .get("/drivers/list.json")
              .then((e) => {
                const t = e.data.drivers;
                (this.driverList = t),
                  t.map((e, t) => {
                    this.driverNameToIdMap.set(e.manifest.name, t);
                  });
              }),
            (0, o.Gn)(this);
        }
        prettyName(e) {
          return me.driverPrettyNames[e] || e;
        }
        unBlock(e) {
          v.HR.SetRestartRequired(),
            (this.driverList[
              this.driverNameToIdMap.get(e)
            ].blocked_by_safe_mode = !1);
          let t = { driver: e };
          return X().post("/drivers/unblock", t);
        }
        setEnabled(e, t) {
          v.HR.SetRestartRequired(),
            (this.driverList[this.driverNameToIdMap.get(e)].enabled = t);
          let n = { driver: e, enable: t };
          return X().post("/drivers/setenable", n);
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
      (me.driverPrettyNames = {
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
        (0, r.Cg)([o.sH], me.prototype, "driverList", void 0),
        (0, r.Cg)([o.EW], me.prototype, "visibleDriverList", null),
        (0, r.Cg)([o.EW], me.prototype, "numBlockedDrivers", null),
        (0, r.Cg)([o.EW], me.prototype, "numDisabledDrivers", null),
        (0, r.Cg)(
          [o.EW],
          me.prototype,
          "numUserManuallyDisenabledDrivers",
          null,
        );
      const he = new me(),
        ge = (0, l.PA)(() =>
          c.createElement(
            d.$,
            {
              className: "ButtonControl",
              title: (0, h.we)("#Settings_Drivers_UnblockAllTip"),
              onClick: () =>
                (0, r.sH)(void 0, void 0, void 0, function* () {
                  const e = he.driverList
                    .filter((e) => e.blocked_by_safe_mode)
                    .map((e) => e.manifest.name);
                  for (let t = 0; t < e.length; ++t) yield he.unBlock(e[t]);
                }),
            },
            (0, h.we)("#Settings_Drivers_UnblockAll"),
          ),
        );
      function ve(e) {
        return e.blocked
          ? c.createElement(
              _.YO,
              { className: "SettingsItem", title: e.title },
              c.createElement("div", { className: "Label" }, e.label),
              c.createElement(
                d.$,
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
      const _e = (0, l.PA)(() =>
        c.createElement(
          c.Fragment,
          null,
          he.visibleDriverList.map((e) =>
            c.createElement(ve, {
              key: e.manifest.name,
              label: he.prettyName(e.manifest.name),
              title: e.manifest.name,
              blocked: e.blocked_by_safe_mode,
              enabled: e.enabled,
              onToggleEnable: (t) => {
                return (n = e.manifest.name), (r = t), void he.setEnabled(n, r);
                var n, r;
              },
              onUnblock: () => {
                return (t = e.manifest.name), void he.unBlock(t);
                var t;
              },
            }),
          ),
        ),
      );
      let Se = (pe = class extends c.Component {
        constructor(e) {
          super(e);
        }
        render() {
          const e = he.numBlockedDrivers,
            t = he.numDisabledDrivers,
            n =
              v.HR.showAdvancedSettings ||
              e ||
              he.numUserManuallyDisenabledDrivers,
            r = v.HR.routePageSection == pe.PAGE_SECTION;
          return c.createElement(
            c.Fragment,
            null,
            !!n &&
              c.createElement(
                "div",
                { className: "SettingsItem Button" },
                c.createElement(
                  d.$,
                  {
                    className: "ButtonControl",
                    onClick: () => v.HR.setRoutePageSection(pe.PAGE_SECTION),
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
            r &&
              he.driverList &&
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
                          c.createElement(ge, null),
                        ),
                  onDismissRequested: () => v.HR.setRoutePageSection(null),
                },
                c.createElement(_e, null),
              ),
          );
        }
      });
      (Se.PAGE_SECTION = "drivermanager"), (Se = pe = (0, r.Cg)([l.PA], Se));
      let be = class extends c.Component {
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
            n = t.filter((e) => e.is_autolaunch);
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
                d.$,
                { className: "ButtonControl", enabled: e, onClick: this.show },
                (0, h.we)("#Settings_ChooseStartupOverlayApps"),
                e &&
                  c.createElement(
                    "div",
                    { className: "Badge" },
                    (0, h.we)("#Settings_Number_Selected", n.length),
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
      (0, r.Cg)([i.o], be.prototype, "show", null),
        (0, r.Cg)([i.o], be.prototype, "hide", null),
        (be = (0, r.Cg)([l.PA], be));
      let ye = class extends _.yO {
        constructor(e) {
          super(e);
        }
        render() {
          return this.props.active
            ? c.createElement(
                c.Fragment,
                null,
                c.createElement(be, null),
                c.createElement(Se, null),
                c.createElement("hr", null),
                this.schemaComponents,
                this.makeResetToDefaultButton(),
              )
            : null;
        }
      };
      (ye.Name = "startupshutdown_settings"), (ye = (0, r.Cg)([l.PA], ye));
      var Re,
        fe = n(2156),
        we = n(4963),
        Ce = n(3246);
      class Me extends c.Component {
        constructor(e) {
          super(e),
            (this.state = {
              bRestartAnimation: !1,
              bShowSteamVRRestartRequired: !1,
              bShowAppRestartRequired: !1,
            });
        }
        get enabled() {
          const e = (0, s.R$)() == s.OH.Overlay;
          return this.props.standalonePanel == e;
        }
        onExitApp() {
          null === s.Ay || void 0 === s.Ay || s.Ay.QuitSceneApp();
        }
        onRestartSteamVR() {
          s.Ay
            ? s.Ay.RestartSteamVR(!1)
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
          if (
            (this.state.bShowSteamVRRestartRequired
              ? (e = c.createElement(
                  d.W,
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
                    d.$,
                    {
                      className: "ButtonControl",
                      onClick: this.onRestartSteamVR,
                    },
                    (0, h.we)("#Settings_MustRestart_RestartSteamVR_Button"),
                  ),
                ))
              : this.state.bShowAppRestartRequired
                ? (e = c.createElement(
                    d.W,
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
                      d.$,
                      { className: "ButtonControl", onClick: this.onExitApp },
                      (0, h.we)("#Settings_MustQuitApp_QuitCurrentGame_Button"),
                    ),
                  ))
                : (null === s.Ay || void 0 === s.Ay ? void 0 : s.Ay.HasHMD()) ||
                  (e = c.createElement(
                    d.W,
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
            this.props.standalonePanel)
          ) {
            if (null === e) return null;
            const t = "mainmountable" + "_TopCenter";
            return c.createElement(
              s.dL,
              { parent_id: t, translation: { y: 0.2, z: -0.05 } },
              c.createElement(
                s.Zk,
                {
                  debug_name: "settingsrestartbanner",
                  curvature_origin_id: m.ge,
                  origin: s.Oi.BottomCenter,
                  interactive: !0,
                  meters_per_pixel: m.iZ,
                  reflect: 0.1,
                },
                e,
              ),
            );
          }
          return e;
        }
      }
      (0, r.Cg)([i.o], Me.prototype, "onExitApp", null),
        (0, r.Cg)([i.o], Me.prototype, "onRestartSteamVR", null),
        (0, r.Cg)([i.o], Me.prototype, "onRestartRequired", null),
        (0, r.Cg)([i.o], Me.prototype, "onAppRestartRequired", null);
      let Ee = (Re = class extends c.Component {
        constructor(e) {
          super(e),
            (this.m_refSettingsPageContainer = c.createRef()),
            (this.m_routeObservingAutorunDisposer = null),
            (this.state = { sActiveSettingSection: null });
        }
        componentDidMount() {
          (this.m_routeObservingAutorunDisposer = (0, o.fm)(() => {
            v.HR.routePage
              ? this.setState({ sActiveSettingSection: v.HR.routePage })
              : v.HR.setRoutePage(
                  v.HR.settingsSchema.filter(Re.shouldShowSection)[0]
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
          e && (0, s.R$)() != s.OH.Overlay
            ? (t = c.createElement(
                "div",
                { className: "Label" },
                (0, h.we)("#Settings_Loading"),
              ))
            : e ||
              (((0, s.R$)() != s.OH.Overlay || this.props.visible) &&
                (t = this.renderSettingsPanelContents()));
          let n = null;
          if ((0, s.R$)() == s.OH.Overlay) {
            const e = "mainmountable",
              r = e + "_TopCenter";
            n = c.createElement(
              s.gO,
              {
                id: "settingstab",
                tabName: (0, h.we)("#VRMonitor_Nav_Settings"),
                iconUri: "/dashboard/images/icons/svr_settings.svg",
                summonOverlayKey: m.Wt,
                mountableUnqualifiedID: e,
              },
              t && c.createElement(Me, { standalonePanel: !0 }),
              t &&
                c.createElement(
                  a.L_,
                  {
                    visible: !0,
                    debugName: "settings",
                    additionalClassNames: "Settings",
                    foregroundReflectMultiplier: 0.25,
                    summonOverlayKey: m.Wt,
                  },
                  c.createElement(Te, null),
                  c.createElement(s.Ci, { id: r, location: s.Oi.TopCenter }),
                  t,
                ),
            );
          } else n = t;
          return c.createElement(
            "div",
            {
              className: (0, g.FH)(
                "SettingsMain",
                (0, s.R$)() == s.OH.Overlay ? "Overlay" : "Desktop",
                ["Loading", e],
              ),
            },
            n,
          );
        }
        renderSettingsPanelContents() {
          const e = v.HR.settingsSchema.filter(Re.shouldShowSection);
          return c.createElement(
            d.W,
            { className: "SettingsMainPanel" },
            c.createElement(Me, { standalonePanel: !1 }),
            c.createElement(
              "div",
              { className: "SettingsSidebarPageModalContainer" },
              c.createElement(
                u.vw,
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
              d.$,
              {
                key: e.title,
                className: t.join(" "),
                onClick: () => v.HR.setRoutePage(e.controller),
                releaseSoundEffect: we.j.PagedSettingsNavigation,
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
            n = this.state.sActiveSettingSection === e.controller,
            r =
              [b, ye, ue, U.a5, V, q, O, I, G, ae, k.$].find(
                (e) => e.Name === t,
              ) || _.yO;
          return c.createElement(r, { key: e.title, section: e, active: n });
        }
        static shouldShowSection(e) {
          if (
            e.internal_only &&
            !v.HR.showInternalSettings &&
            !v.HR.settings.get(Re.k_sShowInternalSettings)
          )
            return !1;
          if (
            e.controller == I.Name &&
            (0, s.R$)() == s.OH.Overlay &&
            !v.HR.settings.get(Re.k_sForceShowOpenXRSettings)
          )
            return !1;
          if (
            !e.show_without_hmd &&
            !(null === s.Ay || void 0 === s.Ay ? void 0 : s.Ay.HasHMD())
          )
            return !1;
          if (
            !e.show_without_hmd &&
            e.driver &&
            e.driver !==
              s.Ay.VRProperties.GetStringProperty(
                "/user/head",
                s.fD.ActualTrackingSystemName_String,
              )
          )
            return !1;
          if (e.desktop_only && (0, s.R$)() == s.OH.Overlay) return !1;
          let t =
            e.controller == O.Name &&
            v.HR.settings.get(Re.k_sShowDashboardSettings);
          if (e.advanced_only && !v.HR.showAdvancedSettings && !t) return !1;
          if (
            e.controller == V.Name &&
            !(null === s.Ay || void 0 === s.Ay
              ? void 0
              : s.Ay.VRProperties.GetBoolProperty(
                  "/user/head",
                  s.fD.HasCamera_Bool,
                ))
          )
            return !1;
          if ("internet_settings" == e.controller) return !1;
          if (e.controller == b.Name) {
            if (!(v.HR.systemInfo && v.HR.systemInfo.os_type >= 0)) return !1;
          }
          return !(!s.Ay && e.web_helper_only);
        }
        ListenForHomeEnabledChanges() {
          return (0, r.sH)(this, void 0, void 0, function* () {
            if ((0, s.R$)() != s.OH.Overlay) return;
            let e = yield v.HR.GetSettingsValue(m.qf);
            s.Ay &&
              (0, o.fm)(() => {
                let t = v.HR.settings.get(m.qf);
                void 0 !== t &&
                  t != e &&
                  (t && !s.Ay.VRApplications.GetSceneApplicationKey()
                    ? s.Ay.VRApplications.LaunchApplication(m.np)
                    : t ||
                      s.Ay.VRApplications.GetSceneApplicationKey() != m.np ||
                      s.Ay.QuitSceneApp(),
                  (e = t));
              });
          });
        }
      });
      (Ee.k_sForceShowOpenXRSettings =
        "/settings/steamvr/forceShowOpenXRSettings"),
        (Ee.k_sShowInternalSettings = "/settings/steamvr/showInternalSettings"),
        (Ee.k_sShowDashboardSettings =
          "/settings/steamvr/showDashboardSettings"),
        (0, r.Cg)([i.o], Ee.prototype, "renderSectionButton", null),
        (0, r.Cg)([i.o], Ee.prototype, "renderSectionPage", null),
        (Ee = Re = (0, r.Cg)([l.PA], Ee));
      const Te = (0, l.PA)(function (e) {
        const t = A.SW.isVRGamepadUI,
          n = Ce.r
            .GetActivePooledPopups()
            .find(
              (e) =>
                e.parent_overlay_key == m.wi &&
                e.popup_overlay_key.includes("mainmenu"),
            );
        return t && n
          ? c.createElement(fe.O, { popupRequest: n, reparent: !1 })
          : null;
      });
    },
    2928: (e, t, n) => {
      "use strict";
      n.d(t, { $: () => U, o: () => F });
      var r = n(1635),
        s = n(6540),
        i = n(3236),
        a = n(4015),
        o = n(3714),
        l = n(1333),
        c = n(427),
        d = n(6138),
        u = n(6090),
        p = n(9118),
        m = n(5802),
        h = n(7813),
        g = n(6646),
        v = n(1139);
      let _ = class extends s.Component {
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
          let n = t;
          const r = "vive_tracker";
          n.includes(r) && (n = n.substring(n.indexOf(r) + 12, n.length));
          let i = null;
          return (
            this.IsConnected()
              ? this.IsIdentifiable() ||
                (i = (0, o.we)(
                  "#Settings_ViveTracker_Identify_NotIdentifiable",
                ))
              : (i = (0, o.we)("#Settings_ViveTracker_Identify_NotConnected")),
            s.createElement(
              c.YO,
              { className: "SettingsItem TrackerEntry" },
              s.createElement(
                "div",
                { className: "Label", title: t },
                s.createElement("span", null, n),
                s.createElement("div", {
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
              s.createElement(
                "div",
                { className: (0, v.FH)("SubsectionStem") },
                s.createElement(
                  c.YO,
                  { title: i },
                  s.createElement(
                    d.$,
                    {
                      className: "ButtonControl",
                      enabled: this.IsIdentifiable(),
                      onClick: this.BuzzTracker,
                    },
                    (0, o.we)("#TrackerEditor_BuzzTracker"),
                  ),
                ),
              ),
              s.createElement(
                "div",
                { className: "Subsection WithStem" },
                s.createElement(c.xS, {
                  label: (0, o.we)("#Settings_ViveTracker_Role"),
                  items: this.props.validTrackerRoles.map((e) => ({
                    value: e,
                    sLabel: (0, o.we)("#" + e),
                  })),
                  value: this.trackerConfig.role,
                  onChange: this.OnTrackerRoleChanged,
                }),
                e.length > 0 &&
                  s.createElement(c.xS, {
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
      (0, r.Cg)([h.EW], _.prototype, "trackerConfig", null),
        (0, r.Cg)([i.o], _.prototype, "OnTrackerRoleChanged", null),
        (0, r.Cg)([i.o], _.prototype, "OnControllerRoleChanged", null),
        (0, r.Cg)([i.o], _.prototype, "BuzzTracker", null),
        (0, r.Cg)([h.EW], _.prototype, "deviceInfo", null),
        (_ = (0, r.Cg)([a.PA], _));
      let S = class extends s.Component {
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
              (e = t.trackers.map((e, n) =>
                s.createElement(_, {
                  key: n,
                  trackerPath: e.device_path_string,
                  validTrackerRoles: t.valid_roles,
                }),
              )),
            s.createElement("div", { className: "TrackerEditorModal" }, e)
          );
        }
      };
      S = (0, r.Cg)([a.PA], S);
      class b extends s.Component {
        constructor(e) {
          super(e),
            (this.m_mailbox = new u._n()),
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
                this.m_mailbox.SendMessage(u.mX, e);
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
          this.m_mailbox.SendMessage(u.mX, e);
        }
        OnUpdateComponentStates(e) {
          let t = !1;
          for (let n in e.components) {
            let r = e.components[n];
            n == this.m_thumbstickSourceName + "/x"
              ? ((this.m_lastX = r), (t = !0))
              : n == this.m_thumbstickSourceName + "/y" &&
                ((this.m_lastY = r), (t = !0));
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
              let n = -Math.atan2(t.x, t.y);
              e.push((180 * n) / Math.PI);
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
            n = 0;
          for (let r of this.state.edgeValue) {
            let i = r.x * e + e,
              a = -r.y * e + e;
            t.push(
              s.createElement("polyline", {
                key: n++,
                points: "60,60 " + i.toFixed(0) + "," + a.toFixed(0),
                strokeWidth: "0.1rem",
                fill: "transparent",
              }),
            );
          }
          let r = this.ComputeCalibration(),
            i = null;
          return (
            (i = r
              ? (0, o.we)("#Settings_General_InviteMoreSamples", r.toFixed(2))
              : (0, o.we)(
                  "#Settings_General_NotEnoughSamples",
                  5 - this.m_edgeValues.length,
                )),
            s.createElement(
              c.bB,
              {
                onDismissRequested: this.props.fnCloseCalibrator,
                header: (0, o.we)("#Settings_General_CalibrateThumbstick"),
                footer: s.createElement(
                  "div",
                  { className: "SettingsItem ButtonRow" },
                  s.createElement(
                    d.$,
                    {
                      key: "cancel",
                      className: "ButtonControl",
                      onClick: this.OnCancel,
                    },
                    (0, o.we)("#Settings_General_Cancel"),
                  ),
                  s.createElement("div", { className: "Spacer" }),
                  s.createElement(
                    d.$,
                    {
                      key: "confirm",
                      className: "ButtonControl",
                      enabled: !!r,
                      onClick: this.OnConfirm,
                    },
                    (0, o.we)("#Settings_General_Confirm"),
                  ),
                ),
              },
              s.createElement(
                "div",
                { className: "ThumbstickCalibrateBody" },
                s.createElement(
                  "div",
                  { className: "ThumbstickContainer" },
                  s.createElement(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: [0, 0, 120, 120].join(" "),
                    },
                    s.createElement("circle", {
                      cx: e,
                      cy: e,
                      r: e,
                      strokeWidth: "0.1rem",
                    }),
                    t,
                  ),
                ),
                s.createElement(
                  "div",
                  { className: "Label ThumbstickAngle" },
                  i,
                ),
              ),
            )
          );
        }
      }
      (0, r.Cg)([i.o], b.prototype, "OnUpdateComponentStates", null),
        (0, r.Cg)([i.o], b.prototype, "OnCancel", null),
        (0, r.Cg)([i.o], b.prototype, "OnConfirm", null);
      class y extends s.Component {
        constructor(e) {
          if (
            (super(e),
            (this.m_mailbox = new u._n()),
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
              s.createElement(
                "div",
                { className: "Label LegacyDebuggerGroup" },
                "Pressed:",
              ),
            ),
            e.pressed)
          )
            for (let n of e.pressed)
              t.push(
                s.createElement(
                  "div",
                  { className: "Label LegacyDebuggerButtonName" },
                  n,
                ),
              );
          else
            t.push(
              s.createElement(
                "div",
                { className: "Label LegacyDebuggerButtonName" },
                "None",
              ),
            );
          if (
            (t.push(
              s.createElement(
                "div",
                { className: "Label LegacyDebuggerGroup" },
                "Touched:",
              ),
            ),
            e.touched)
          )
            for (let n of e.touched)
              t.push(
                s.createElement(
                  "div",
                  { className: "Label LegacyDebuggerButtonName" },
                  n,
                ),
              );
          else
            t.push(
              s.createElement(
                "div",
                { className: "Label LegacyDebuggerButtonName" },
                "None",
              ),
            );
          if (
            (t.push(
              s.createElement(
                "div",
                { className: "Label LegacyDebuggerGroup" },
                "Supported:",
              ),
            ),
            e.supported_buttons)
          )
            for (let n of e.supported_buttons)
              t.push(
                s.createElement(
                  "div",
                  { className: "Label LegacyDebuggerButtonName" },
                  n,
                ),
              );
          else
            t.push(
              s.createElement(
                "div",
                { className: "Label LegacyDebuggerButtonName" },
                "None",
              ),
            );
          t.push(
            s.createElement(
              "div",
              { className: "Label LegacyDebuggerGroup" },
              "Axis:",
            ),
          );
          for (let n of e.axis)
            t.push(
              s.createElement(
                "div",
                { className: "Label LegacyDebuggerButtonName" },
                "X: ",
                n.x.toFixed(2),
                " Y: ",
                n.y.toFixed(2),
              ),
            );
          return t;
        }
        render() {
          return this.state.currentState
            ? s.createElement(
                "div",
                { className: "FlexRow" },
                s.createElement(
                  "div",
                  { className: "FlexColumn LegacyDebuggerController" },
                  s.createElement("div", { className: "Label" }, "Left"),
                  this.renderController(this.state.currentState.left),
                ),
                s.createElement(
                  "div",
                  { className: "FlexColumn LegacyDebuggerController" },
                  s.createElement("div", { className: "Label" }, "Right"),
                  this.renderController(this.state.currentState.right),
                ),
                s.createElement(
                  "div",
                  { className: "FlexColumn LegacyDebuggerController" },
                  s.createElement("div", { className: "Label" }, "HMD"),
                  this.renderController(this.state.currentState.hmd),
                ),
              )
            : s.createElement(
                "div",
                { className: "Label" },
                (0, o.we)("#LegacyDebugger_NoApp"),
              );
        }
      }
      (0, r.Cg)([i.o], y.prototype, "OnLegacyInputFrame", null);
      class R extends s.Component {
        constructor(e) {
          super(e);
        }
        render() {
          return s.createElement(
            "div",
            { className: "FlexRowWithWrap" },
            s.createElement(
              "div",
              { className: "FlexFullWidthRowCentered LegacyDebuggerWrapper" },
              s.createElement(y, null),
            ),
          );
        }
      }
      var f,
        w = n(7960),
        C = n(4493);
      !(function (e) {
        (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
      })(f || (f = {}));
      class M extends s.Component {
        constructor(e) {
          super(e),
            (this.m_containerRef = null),
            (this.m_nameRef = null),
            (this.m_svgRef = null),
            (this.m_containerRef = s.createRef()),
            (this.m_nameRef = s.createRef()),
            (this.m_svgRef = s.createRef()),
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
        ComponentUpdated(e, t, n) {
          e == this.props.devicePath &&
            (t == this.props.sourcePath + "/click" &&
              this.setState({ click: n }),
            t == this.props.sourcePath + "/touch" &&
              this.setState({ touch: n }),
            t == this.props.sourcePath + "/x" && this.setState({ x: n }),
            t == this.props.sourcePath + "/y" && this.setState({ y: n }),
            t == this.props.sourcePath + "/value" &&
              this.setState({ value: n }),
            t == this.props.sourcePath + "/force" &&
              this.setState({ force: n }));
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
            s.createElement(
              "div",
              { className: "VisualizerButtonContainer" },
              s.createElement("div", { className: "VisualizerButtonBase" + e }),
            )
          );
        }
        renderBar(e, t, n) {
          let r = { width: String(100 * n) + "%" };
          return s.createElement(
            "div",
            { className: "TriggerBar " + t },
            s.createElement(
              "div",
              { className: "VisualizerLabel" },
              (0, o.we)(e),
            ),
            s.createElement(
              "div",
              { className: "TriggerBarBackground" },
              s.createElement("div", {
                className: "TriggerBarContent",
                style: r,
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
              n = this.m_svgRef.current.children.namedItem("SourceCircle"),
              r = this.props.side == f.Right,
              s = this.m_nameRef.current.getBoundingClientRect(),
              i = this.m_containerRef.current.getBoundingClientRect(),
              a = this.GetPosition(),
              o = new m.bR(0, s.top + s.height / 2);
            o.x = r ? i.left - 10 : i.right + 10;
            let l = r ? -20 : 20,
              c = o.x + l + "," + o.y + " " + a.x + "," + a.y;
            e.setAttribute("points", c);
            let d = o.x + "," + o.y + " " + (o.x + l) + "," + o.y;
            t.setAttribute("points", d),
              n.setAttribute("cx", a.x + ""),
              n.setAttribute("cy", a.y + "");
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
            this.props.side == f.Left
              ? (e += " MenuLeftLine")
              : (e += " MenuRightLine"),
            this.IsEngaged() && (e += " MenuSVGVisible"),
            s.createElement(
              "div",
              { className: "VisualizerControl", ref: this.m_containerRef },
              s.createElement(
                "div",
                { className: "VisualizerSectionHeader" },
                s.createElement(
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
              s.createElement(
                "svg",
                {
                  className: e,
                  xmlns: "http://www.w3.org/2000/svg",
                  ref: this.m_svgRef,
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
            )
          );
        }
      }
      (0, r.Cg)([i.o], M.prototype, "ComponentUpdated", null),
        (0, r.Cg)([i.o], M.prototype, "UpdateSVGPath", null);
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
          return s.createElement(
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
            s.createElement(
              "div",
              {
                className:
                  "TrackpadVisualizerContainer" +
                  (this.state.touch ? " Touched" : ""),
              },
              s.createElement(
                "div",
                { className: "TrackpadPosition" },
                s.createElement(
                  "div",
                  { className: "VisualizerLabel" },
                  (0, o.we)("#SourceInputMode_Position"),
                ),
                s.createElement(
                  "div",
                  { className: "TrackpadVisualizerContainer" },
                  s.createElement(
                    "div",
                    { className: "TrackpadVisualizerBackground" },
                    e &&
                      s.createElement(
                        "div",
                        { style: e },
                        s.createElement(
                          "div",
                          { className: "TrackpadVisualizerPipContainer" },
                          s.createElement("div", { className: t }),
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
      class k extends s.Component {
        constructor(e) {
          super(e),
            (this.m_imageRef = s.createRef()),
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
        renderSource(e, t, n) {
          let r = e + this.ControllerTypeInfo.controller_type;
          switch (t.type) {
            case "button":
              return s.createElement(E, {
                key: r,
                side: n,
                controllerType: this.ControllerTypeInfo,
                devicePath: this.props.devicePath,
                sourcePath: e,
                source: t,
                visualizer: this.props.visualizer,
                imageScale: this.GetPointScale(),
              });
            case "trigger":
              return s.createElement(T, {
                key: r,
                side: n,
                controllerType: this.ControllerTypeInfo,
                devicePath: this.props.devicePath,
                sourcePath: e,
                source: t,
                visualizer: this.props.visualizer,
                imageScale: this.GetPointScale(),
              });
            case "joystick":
            case "trackpad":
              return s.createElement(V, {
                key: r,
                side: n,
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
              return s.createElement(
                "div",
                { key: r },
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
            n = this.ControllerTypeInfo;
          return (
            "/user/hand/left" == this.props.devicePath
              ? n.input_bindingui_left &&
                ((e = n.input_bindingui_left.uri),
                (t = n.input_bindingui_left.transform
                  ? n.input_bindingui_left.transform
                  : ""))
              : "/user/hand/right" == this.props.devicePath
                ? n.input_bindingui_right &&
                  ((e = n.input_bindingui_right.uri),
                  (t = n.input_bindingui_right.transform
                    ? n.input_bindingui_right.transform
                    : ""))
                : n.input_bindingui_left
                  ? ((e = n.input_bindingui_left.uri),
                    (t = n.input_bindingui_left.transform
                      ? n.input_bindingui_left.transform
                      : ""))
                  : n.input_bindingui_right &&
                    ((e = n.input_bindingui_right.uri),
                    (t = n.input_bindingui_right.transform
                      ? n.input_bindingui_right.transform
                      : "")),
            e
              ? s.createElement(
                  "div",
                  { className: "VisualizerImageContainer" },
                  s.createElement("img", {
                    className: "VisualizerImage",
                    ref: this.m_imageRef,
                    onLoad: this.OnImageLoaded,
                    src: e,
                    style: { transform: t },
                  }),
                  s.createElement(w.A, { onReflow: this.OnImageReflow }),
                )
              : null
          );
        }
        render() {
          let e = [],
            t = [],
            n = this.ControllerTypeInfo,
            r = 0,
            i = [];
          for (let e in n.input_source) {
            let t = n.input_source[e];
            if ("InputValueVisibility_AvailableButHidden" == t.visibility)
              continue;
            let s = this.EstimateSourceHeight(t);
            (r += s),
              i.push({
                sSourcePath: e,
                inputSource: t,
                order: t.order ? t.order : 0,
                height: s,
              });
          }
          let a = 8;
          r > 16 && (a = r / 2);
          let o = 0,
            l = i.sort((e, t) => e.order - t.order);
          for (let n of l) {
            o += n.height;
            let r = o > a ? f.Right : f.Left,
              s = this.renderSource(n.sSourcePath, n.inputSource, r);
            s && (r == f.Left ? e.push(s) : t.push(s));
          }
          return s.createElement(
            "div",
            { className: "ControllerVisualizer" },
            s.createElement(
              "div",
              { className: "VisualizerLeft ControllerVisualizerEntries" },
              e,
            ),
            this.renderImage(),
            s.createElement(
              "div",
              { className: "VisualizerRight ControllerVisualizerEntries" },
              t,
            ),
          );
        }
      }
      (0, r.Cg)([i.o], k.prototype, "OnImageLoaded", null),
        (0, r.Cg)([i.o], k.prototype, "OnImageReflow", null);
      let H = class extends s.Component {
        constructor(e) {
          super(e),
            (this.m_mailbox = new u._n()),
            (this.m_componentRegistrations = {}),
            (this.m_observeDisposer = null),
            this.m_mailbox.RegisterHandler(
              "update_component_states",
              this.OnUpdateComponentStates,
            ),
            this.m_mailbox.Init("controller_visualizer").then(() => {
              this.UpdateDeviceInputStateSubscriptions(),
                (this.m_observeDisposer = (0, h.lB)(
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
            this.m_mailbox.SendMessage(u.mX, t);
          }
        }
        UpdateDeviceInputStateSubscriptions() {
          for (let e of p.W.ConnectedDevices) {
            let t = {
              type: "request_input_state_updates",
              device_path: e.root_path,
              returnAddress: this.m_mailbox.name,
            };
            this.m_mailbox.SendMessage(u.mX, t);
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
            let n = e.device + t;
            this.m_componentRegistrations[n] &&
              this.m_componentRegistrations[n](e.device, t, e.components[t]);
          }
        }
        RegisterSourceVisualizer(e, t, n) {
          this.m_componentRegistrations[e + t] = n;
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
            n = this.GetSortedDevices();
          if (!n)
            return s.createElement(
              c.bB,
              {
                className: "ControllerVisualizerWrapper",
                header: (0, o.we)("#TestControllerTitle", ""),
                onDismissRequested: this.props.onDismissRequested,
              },
              s.createElement(
                "div",
                { className: "VisualizerLabel" },
                (0, o.we)("#TestController_NoController"),
              ),
            );
          for (let r of n)
            "TrackedDeviceClass_HMD" != r.class &&
              (r.root_path == this.state.devicePath && (e = r.serial_number),
              t.push({
                value: r.root_path,
                sLabel: (0, o.we)("#" + r.root_path),
              }));
          return s.createElement(
            c.bB,
            {
              className: "ControllerVisualizerWrapper",
              header: (0, o.we)("#TestControllerTitle", e),
              onDismissRequested: this.props.onDismissRequested,
              footer: s.createElement(c.tR, {
                leftControls: [
                  s.createElement(C.AN, {
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
              s.createElement(k, {
                devicePath: this.state.devicePath,
                serialNumber: e,
                visualizer: this,
              }),
          );
        }
      };
      (0, r.Cg)([i.o], H.prototype, "OnConnectedDevicesChanged", null),
        (0, r.Cg)([i.o], H.prototype, "OnUpdateComponentStates", null),
        (H = (0, r.Cg)([a.PA], H));
      var A,
        D,
        O = n(917);
      const L = (0, a.PA)(() => {
          const e = "managevivetrackers";
          if (
            !(null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VRDashboardManager.ShouldShowTrackerUI())
          )
            return null;
          const t = l.HR.routePageSection == e;
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(
              "div",
              { className: "SettingsItem Button" },
              s.createElement(
                d.$,
                {
                  className: "ButtonControl",
                  onClick: () => l.HR.setRoutePageSection(e),
                },
                (0, o.we)("#Settings_General_ShowTrackerUI"),
              ),
            ),
            t &&
              s.createElement(
                c.bB,
                {
                  header: (0, o.we)("#Settings_ViveTrackers"),
                  onDismissRequested: () => l.HR.setRoutePageSection(null),
                },
                s.createElement(S, null),
              ),
          );
        }),
        B = (0, a.PA)(() => {
          const e = "debuglegacyinput";
          if (!p.W.BDevMode) return null;
          const t = l.HR.routePageSection == e;
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(
              "div",
              { className: "SettingsItem Button" },
              s.createElement(
                d.$,
                {
                  className: "ButtonControl",
                  enabled: !!VRHTML,
                  onClick: () => l.HR.setRoutePageSection(e),
                },
                (0, o.we)("#AppSelect_LegacyDebug"),
              ),
            ),
            t &&
              s.createElement(
                c.bB,
                {
                  header: (0, o.we)("#AppSelect_LegacyDebug"),
                  onDismissRequested: () => l.HR.setRoutePageSection(null),
                },
                s.createElement(R, null),
              ),
          );
        }),
        I = (0, a.PA)(() => {
          const e = "testcontrollers",
            t = l.HR.routePageSection == e;
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(
              "div",
              { className: "SettingsItem Button" },
              s.createElement(
                d.$,
                {
                  className: "ButtonControl",
                  onClick: () => l.HR.setRoutePageSection(e),
                },
                (0, o.we)("#AppSelect_ControllerTester"),
              ),
            ),
            t &&
              s.createElement(H, {
                onDismissRequested: () => l.HR.setRoutePageSection(null),
              }),
          );
        });
      function P(e) {
        return s.createElement(
          c.YO,
          { visibility: c.Z3.Advanced, className: "SettingsItem Button" },
          s.createElement(
            c.CS,
            {
              icon: c.Xb.PopOut,
              onClick: function () {
                let t = "bindingui/" + u.OH[(0, u.R$)()];
                e.mailbox.SendMessage(t, { type: "show_app_binding" });
              },
            },
            (0, o.we)("#Settings_ShowBindingUI"),
          ),
        );
      }
      function N(e) {
        if (!p.W.BDevMode) return null;
        return s.createElement(
          c.YO,
          { className: "SettingsItem Button" },
          s.createElement(
            c.CS,
            {
              icon: c.Xb.PopOut,
              onClick: function () {
                if (VRHTML) {
                  switch ((0, u.R$)()) {
                    case u.OH.Desktop:
                      VRHTML.ShowBindingUI(!0);
                      break;
                    case u.OH.Overlay:
                      VRHTML.ShowBindingUI(!1);
                  }
                  let t = "bindingui/" + u.OH[(0, u.R$)()];
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
      let x = (A = class extends s.Component {
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
              (n) =>
                n.sDevicePath == e &&
                (l.HR.SetSettingsValue(this.getThumbstickRotationSetting(e), t),
                !0),
            );
        }
        getThumbstickRotationSetting(e) {
          let t = null;
          return (
            A.devices.some((n) => {
              if (n.sDevicePath == e) {
                const r = p.W.GetDeviceInfo(e);
                return (
                  r &&
                    (t =
                      n.sThumbstickAngleSettingPathPrefix + r.controller_type),
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
          const n = p.W.GetControllerTypeInfo(t.controller_type);
          if (!n) return !1;
          for (let e in n.input_source)
            if ("joystick" == n.input_source[e].type) return !0;
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
            s.createElement(
              s.Fragment,
              null,
              s.createElement(
                c.YO,
                { className: "SettingsItem" },
                s.createElement(
                  d.$,
                  { className: "ButtonControl", onClick: this.show },
                  (0, o.we)("#Settings_ShowThumbstickSettings"),
                ),
              ),
              this.state.bShowingModal &&
                s.createElement(
                  c.bB,
                  {
                    header: (0, o.we)("#Settings_ThumbstickSettings"),
                    onDismissRequested: this.hide,
                  },
                  null !== this.state.sDeviceToCalibrate &&
                    s.createElement(b, {
                      devicePath: this.state.sDeviceToCalibrate,
                      fnCloseCalibrator: this.closeCalibrator,
                      fnUpdateThumbstickCalibration: this.updateCalibration,
                    }),
                  A.devices.map((e) => {
                    if (
                      !this.shouldShowThumbstickCalibrateForHand(e.sDevicePath)
                    )
                      return s.createElement(
                        c.YO,
                        {
                          key: e.sDevicePath,
                          title: (0, o.we)(
                            "#Settings_General_CalibrateThumbstick_ConnectAController",
                          ),
                          className: "SettingsItem CalibrateThumbstickItem",
                        },
                        s.createElement(
                          "div",
                          { className: "Label" },
                          (0, o.we)(
                            e.sThumbstickAngleLabelPlaceholderUnlocalized,
                          ),
                        ),
                        s.createElement(
                          d.$,
                          { className: "ButtonControl", enabled: !1 },
                          (0, o.we)("#Settings_General_Calibrate"),
                        ),
                      );
                    let t = l.HR.settings.get(
                      this.getThumbstickRotationSetting(e.sDevicePath),
                    );
                    return (
                      null == t && (t = 0),
                      s.createElement(
                        c.YO,
                        {
                          key: e.sDevicePath,
                          className: "SettingsItem CalibrateThumbstickItem",
                        },
                        s.createElement(
                          "div",
                          { className: "Label" },
                          (0, o.we)(
                            e.sThumbstickAngleLabelUnlocalized,
                            t.toFixed(1),
                          ),
                        ),
                        s.createElement(
                          d.$,
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
                    s.createElement(c.tE, {
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
        (0, r.Cg)([i.o], x.prototype, "resetToDefaults", null),
        (0, r.Cg)([i.o], x.prototype, "closeCalibrator", null),
        (0, r.Cg)([i.o], x.prototype, "updateCalibration", null),
        (0, r.Cg)([i.o], x.prototype, "showCalibration", null),
        (0, r.Cg)([i.o], x.prototype, "show", null),
        (0, r.Cg)([i.o], x.prototype, "hide", null),
        (x = A = (0, r.Cg)([a.PA], x));
      let F = (D = class extends s.Component {
        constructor(e) {
          super(e),
            (this.m_mailbox = new u._n()),
            (this.m_routeObservingAutorunDisposer = null),
            (this.m_refAppSelectDropdown = s.createRef()),
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
            (this.m_bindingSubscriptionChangedCanaryDisposer = (0, h.lB)(
              m.B$,
              "BindingSubscriptionChangedCanary",
              (e) => {
                this.updateStateForApp(this.state.currentBindingApp);
              },
            )),
            (this.m_routeObservingAutorunDisposer = (0, h.fm)(() => {
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
          l.HR.setRoute(e, D.PAGE_SECTION, t ? [t] : null),
            null === VRHTML || void 0 === VRHTML || VRHTML.ShowSettingsUI();
        }
        get shouldShowModal() {
          return l.HR.routePageSection == D.PAGE_SECTION;
        }
        get currentRouteAppKey() {
          const e = l.HR.routePageSectionParams;
          return e.length >= 1 ? e[0] : null;
        }
        loadAppActionManifest(e) {
          return (0, r.sH)(this, void 0, void 0, function* () {
            let t = yield (0, m.xM)(e);
            if (t.error) throw new Error(t.error);
            return t;
          });
        }
        loadBindingConfig(e, t) {
          return (0, r.sH)(this, void 0, void 0, function* () {
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
          return (0, r.sH)(this, void 0, void 0, function* () {
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
            let n = yield this.loadBindingConfig(e.key, t);
            this.setState({ currentBinding: n });
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
          return (0, r.sH)(this, void 0, void 0, function* () {
            const t = (
              e
                ? this.state.currentActionManifest.previous_binding_url
                : this.state.currentActionManifest.default_bindings
            )[this.state.currentControllerType.controller_type];
            t
              ? yield m.B$.SelectConfig(
                  this.state.currentBindingApp.key,
                  this.state.currentControllerType.controller_type,
                  t,
                )
              : this.setState({ bForceToggleToCustom: !0 });
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
          let n = "bindingui/" + u.OH[(0, u.R$)()];
          this.m_mailbox.SendMessage(n, t);
        }
        show() {
          l.HR.setRoutePageSection(D.PAGE_SECTION);
        }
        close() {
          l.HR.setRoutePageSection(null);
        }
        showBindingCallouts() {
          var e, t;
          let n =
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
            r = {
              type: "request_binding_callouts",
              returnAddress: this.m_mailbox.name,
              app_key: n,
              controller_type: this.state.currentControllerType.controller_type,
            };
          this.m_mailbox.SendMessage(u.I0, r);
        }
        onToggleDominantHand(e) {
          let t = e
            ? u.kG.TrackedControllerRole_RightHand
            : u.kG.TrackedControllerRole_LeftHand;
          this.setAppState("dominant_hand", t),
            this.setState({ eDominantHand: t });
        }
        setAppState(e, t) {
          if (null != this.state.currentBindingApp) {
            let n = {};
            (n[e] = t),
              l.HR.SetAppSettings(this.state.currentBindingApp.key, n);
          }
        }
        render() {
          var e, t;
          let n = "",
            r = "";
          try {
            (n =
              this.state.currentActionManifest.current_binding_url[
                this.state.currentControllerType.controller_type
              ]),
              (r =
                this.state.currentActionManifest.default_bindings[
                  this.state.currentControllerType.controller_type
                ]);
          } catch (e) {}
          const i = this.state.bForceToggleToCustom || !r || r != n,
            a =
              (null === (e = this.state.currentActionManifest) || void 0 === e
                ? void 0
                : e.supports_dominant_hand_setting) &&
              null != this.state.eDominantHand,
            l =
              this.state.eDominantHand == u.kG.TrackedControllerRole_RightHand;
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(
              c.YO,
              { className: "SettingsItem" },
              s.createElement(
                d.$,
                { className: "ButtonControl", onClick: this.show },
                (0, o.we)("#Settings_Controller_AdvancedControllerSettings"),
              ),
            ),
            this.shouldShowModal &&
              s.createElement(
                c.bB,
                {
                  className: "BindingsModal",
                  header: s.createElement(
                    s.Fragment,
                    null,
                    s.createElement(
                      "h1",
                      null,
                      (0, o.we)(
                        "#Settings_ManageControllerBindingSettingsForApp",
                      ),
                    ),
                    s.createElement(c.mi, {
                      ref: this.m_refAppSelectDropdown,
                      defaultAppKey:
                        null !== (t = this.currentRouteAppKey) && void 0 !== t
                          ? t
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
                  s.createElement(
                    c.YO,
                    { className: "SettingsItem" },
                    s.createElement(
                      "div",
                      { className: "Label" },
                      (0, o.we)("#Settings_ActiveController"),
                    ),
                    s.createElement(
                      "div",
                      { className: "Label" },
                      p.W.LocalizeDriverString(
                        this.state.currentControllerType.resource_root,
                        this.state.currentControllerType.controller_type,
                      ),
                    ),
                  ),
                !p.W.IsSteamAvailable &&
                  this.state.currentBinding &&
                  s.createElement(
                    c.YO,
                    { className: "SettingsItem" },
                    s.createElement(
                      "div",
                      { className: "Label" },
                      (0, o.we)("#Settings_ActiveBinding"),
                    ),
                    s.createElement(
                      "div",
                      { className: "Label" },
                      this.state.currentBinding.name,
                    ),
                  ),
                p.W.IsSteamAvailable &&
                  s.createElement(c.Al, {
                    label: (0, o.we)("#Settings_ActiveControllerBinding"),
                    offLabel: (0, o.we)("#Settings_Controller_DefaultBinding"),
                    onLabel: (0, o.we)("#Settings_Controller_CustomBinding"),
                    onChange: this.onToggleDefaultCustomBinding,
                    value: i,
                    onSubsection: s.createElement(
                      s.Fragment,
                      null,
                      (!n || !this.state.currentBinding) &&
                        s.createElement(
                          "div",
                          { className: "SettingsItem Label" },
                          (0, o.we)("#Settings_Loading_CurrentBinding"),
                        ),
                      i &&
                        s.createElement(
                          "div",
                          {
                            className:
                              "SettingsItem ButtonRow BindingButtonRow",
                          },
                          s.createElement(
                            c.CS,
                            {
                              icon: c.Xb.PopOut,
                              enabled: p.W.IsSteamAvailable && Boolean(n),
                              onClick: this.showBindingDetail.bind(this, !0),
                            },
                            (0, o.we)("#Settings_EditBinding"),
                          ),
                          s.createElement(
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
                s.createElement("div", { className: "Spacer" }),
                this.state.currentBinding &&
                  s.createElement(W, {
                    appKey: this.state.currentBindingApp.key,
                  }),
                a &&
                  s.createElement(c.Al, {
                    label: (0, o.we)("#Settings_DominantHand"),
                    offLabel: (0, o.we)("#Settings_DominantHand_Left"),
                    onLabel: (0, o.we)("#Settings_DominantHand_Right"),
                    onChange: this.onToggleDominantHand,
                    value: l,
                  }),
              ),
          );
        }
      });
      (F.PAGE_SECTION = "appcontrollerbindings"),
        (0, r.Cg)([h.EW], F.prototype, "shouldShowModal", null),
        (0, r.Cg)([h.EW], F.prototype, "currentRouteAppKey", null),
        (0, r.Cg)([i.o], F.prototype, "onApplicationDropdownChange", null),
        (0, r.Cg)([i.o], F.prototype, "onToggleDefaultCustomBinding", null),
        (0, r.Cg)([i.o], F.prototype, "showBindingDetail", null),
        (0, r.Cg)([i.o], F.prototype, "show", null),
        (0, r.Cg)([i.o], F.prototype, "close", null),
        (0, r.Cg)([i.o], F.prototype, "showBindingCallouts", null),
        (0, r.Cg)([i.o], F.prototype, "onToggleDominantHand", null),
        (F = D = (0, r.Cg)([a.PA], F));
      const W = (e) =>
        s.createElement(
          c.YO,
          { className: "SettingsItem" },
          s.createElement(
            d.$,
            {
              className: "ButtonControl",
              onClick: () => {
                var t, n;
                return l.HR.showBindingCallouts(
                  null !== (t = e.appKey) && void 0 !== t
                    ? t
                    : null !==
                          (n =
                            null === VRHTML || void 0 === VRHTML
                              ? void 0
                              : VRHTML.VRApplications.GetSceneApplicationKey()) &&
                        void 0 !== n
                      ? n
                      : "openvr.component.vrcompositor",
                );
              },
            },
            (0, o.we)(
              (0, u.R$)() == u.OH.Overlay
                ? "#Settings_Controller_ShowBindingCallouts"
                : "#Settings_Controller_ShowBindingCalloutsInVR",
            ),
          ),
        );
      let G = class extends s.Component {
        constructor(e) {
          super(e),
            (this.m_mailbox = new u._n()),
            (this.state = { bShowingModal: !1, dongles: [], isPairing: !1 }),
            (this.m_mailbox = new u._n()),
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
            let n = s.createElement(
              "div",
              { key: e.serial, className: "ButtonRow" },
              "Dongle ",
              e.serial,
              " connected to ",
              e.connectedSerial,
              !this.state.isPairing &&
                s.createElement(
                  d.$,
                  {
                    className: "ButtonControl",
                    onClick: () => this.StartPairing(e.serial),
                  },
                  " ",
                  (0, o.we)("#Settings_Controller_Pair"),
                  " ",
                ),
              e.isPairing &&
                s.createElement(
                  "h2",
                  null,
                  " ",
                  (0, o.we)("#Settings_Controller_Pairing"),
                  " ",
                ),
            );
            t.push(n);
          }
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(
              c.YO,
              { className: "SettingsItem" },
              s.createElement(
                d.$,
                { className: "ButtonControl", onClick: this.show },
                (0, o.we)("#Settings_Controller_PairControllers"),
              ),
            ),
            this.state.bShowingModal &&
              s.createElement(
                c.bB,
                {
                  header: (0, o.we)(
                    "#Settings_Controller_ControllerPairingSection",
                  ),
                  onDismissRequested: this.hide,
                },
                s.createElement(s.Fragment, null, t),
                e &&
                  s.createElement(
                    "h1",
                    null,
                    "No controller dongles detected.",
                  ),
              ),
          );
        }
      };
      (0, r.Cg)([i.o], G.prototype, "OnDiscoverDonglesResponse", null),
        (0, r.Cg)([i.o], G.prototype, "DiscoverDongles", null),
        (0, r.Cg)([i.o], G.prototype, "StartPairing", null),
        (0, r.Cg)([i.o], G.prototype, "show", null),
        (0, r.Cg)([i.o], G.prototype, "hide", null),
        (G = (0, r.Cg)([a.PA], G));
      let z = class extends s.Component {
        constructor(e) {
          super(e),
            (this.m_mailbox = new u._n()),
            (this.m_DeviceEventCallbackHandle = null),
            (this.m_DeviceFirmwareEventCallbackHandle = null),
            (this.state = { bShowingModal: !1, controllers: [] }),
            (this.m_mailbox = new u._n()),
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
        onDeviceEvent(e, t, n) {
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
          var e, t, n;
          let r = [];
          for (let i of null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.VRSystem.GetTrackedDeviceClasses().filter(
                (e) => e.eClass == u.mo.Controller,
              )) {
            let a =
                null !==
                  (e =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VRProperties.GetStringProperty(
                          i.unIndex,
                          u.fD.ModelNumber_String,
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
                          u.fD.SerialNumber_String,
                        )) && void 0 !== t
                  ? t
                  : "",
              l =
                null !==
                  (n =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VRProperties.GetBoolProperty(
                          i.unIndex,
                          u.fD.Firmware_UpdateAvailable_Bool,
                        )) &&
                void 0 !== n &&
                n,
              c = null;
            this.state.controllers.some((e) => e.serial == o && ((c = e), !0));
            let p = s.createElement(
              "div",
              { key: o },
              s.createElement("div", null, a, " - ", o),
              s.createElement(
                "div",
                null,
                !l &&
                  !(null == c ? void 0 : c.updateInProgress) &&
                  s.createElement("div", null, "Up to date"),
                (null == c ? void 0 : c.updateInProgress) &&
                  s.createElement("progress", { value: c.updateProgress }),
                l &&
                  !c &&
                  s.createElement(
                    d.$,
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
                  s.createElement(
                    d.$,
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
            r.push(p);
          }
          const i = 0 == r.length;
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(
              c.YO,
              { className: "SettingsItem" },
              s.createElement(
                d.$,
                { className: "ButtonControl", onClick: this.show },
                "Update Controllers",
              ),
            ),
            this.state.bShowingModal &&
              s.createElement(
                c.bB,
                { header: "Update Controllers", onDismissRequested: this.hide },
                s.createElement(s.Fragment, null, r),
                i && s.createElement("h1", null, "No controllers connected."),
              ),
          );
        }
      };
      (0, r.Cg)([i.o], z.prototype, "OnControllerUpdateStatus", null),
        (0, r.Cg)([i.o], z.prototype, "StartUpdate", null),
        (0, r.Cg)([i.o], z.prototype, "onDeviceEvent", null),
        (0, r.Cg)([i.o], z.prototype, "onFirmwareStateChanged", null),
        (0, r.Cg)([i.o], z.prototype, "show", null),
        (0, r.Cg)([i.o], z.prototype, "hide", null),
        (z = (0, r.Cg)([a.PA], z));
      let U = class extends c.yO {
        constructor(e) {
          super(e),
            (this.m_mailbox = new u._n()),
            (this.m_refControllerSettingsSection = s.createRef()),
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
          const n =
              null !==
                (e = l.HR.settings.get(
                  "/settings/dashboard/allowInHeadsetControllerPairing",
                )) &&
              void 0 !== e &&
              e,
            r =
              null !==
                (t = l.HR.settings.get(
                  "/settings/dashboard/allowInHeadsetControllerUpdate",
                )) &&
              void 0 !== t &&
              t;
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(W, null),
            s.createElement(F, null),
            s.createElement(P, { mailbox: this.m_mailbox }),
            s.createElement(x, { ref: this.m_refControllerSettingsSection }),
            s.createElement(I, null),
            s.createElement(L, null),
            s.createElement(B, null),
            s.createElement(N, { mailbox: this.m_mailbox }),
            n && s.createElement(G, null),
            r && s.createElement(z, null),
          );
        }
      };
      (U.Name = "controller_settings"),
        (0, r.Cg)([i.o], U.prototype, "ResetToDefaults", null),
        (U = (0, r.Cg)([a.PA], U));
    },
    427: (e, t, n) => {
      "use strict";
      n.d(t, {
        mi: () => q,
        yO: () => A,
        YO: () => k,
        Z3: () => s,
        CS: () => X,
        Xb: () => $,
        RM: () => z,
        xS: () => I,
        WZ: () => O,
        bB: () => j,
        tR: () => K,
        ym: () => P,
        JA: () => L,
        tE: () => N,
        Al: () => B,
        u4: () => W,
        Pw: () => F,
      });
      var r,
        s,
        i = n(1635),
        a = n(6540),
        o = n(3236),
        l = n(3714),
        c = n(7813),
        d = n(4015),
        u = n(1333),
        p = n(6090),
        m = n(4963),
        h = n(6138),
        g = n(1139),
        v = n(7379),
        _ = n(6189),
        S = n(4493),
        b = n(3606),
        y = n(9471),
        R = n(917),
        f = n(5615);
      function w(e, t, n) {
        (t = t.bind(VRHTML.VRPathProperties)),
          (n = n.bind(VRHTML.VRPathProperties));
        const [r, s] = a.useState(() => {
          try {
            return t(e);
          } catch (e) {
            return;
          }
        });
        return a.useEffect(() => (e ? n(e, s).unregister : void 0), [s, e]), r;
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
      function E(e) {
        var t, n, r;
        const s = M(e.detent),
          i = {
            name: e.name,
            min: null !== (t = e.min) && void 0 !== t ? t : 0,
            max: null !== (n = e.max) && void 0 !== n ? n : 100,
            step: null !== (r = e.step) && void 0 !== r ? r : 5,
            detents: void 0 !== s ? [s] : void 0,
          };
        return a.createElement(
          N,
          Object.assign(
            {
              renderValue: (t) => {
                var n;
                return "number" == typeof t
                  ? t.toFixed(null !== (n = e.decimals) && void 0 !== n ? n : 0)
                  : JSON.stringify(t);
              },
              label: e.label ? (0, l.we)(e.label) : "",
              valueStyleVariant: R.Te.OnHandle,
            },
            i,
          ),
        );
      }
      function T(e) {
        const t = C(e.name);
        return a.createElement(
          k,
          {
            className: (0, g.FH)("SettingsItem", "RadioButtons"),
            title: e.text ? (0, l.we)(e.text) : "",
          },
          a.createElement(
            "div",
            { className: "Label" },
            e.label ? (0, l.we)(e.label) : "",
          ),
          a.createElement("div", { className: "RadioButtonsSet" }, t),
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
      })(s || (s = {}));
      let k = class extends a.Component {
        constructor(e) {
          super(e);
        }
        render() {
          let e = Object.assign({}, this.props);
          delete e.label, delete e.subsection, delete e.visibility;
          let t = this.props.visibility == s.Advanced;
          switch (this.props.visibility) {
            case s.Desktop:
              t = (0, p.R$)() != p.OH.Desktop;
              break;
            case s.VR:
              t = (0, p.R$)() != p.OH.Overlay;
          }
          return t && !u.HR.showAdvancedSettings
            ? null
            : (this.props.visibility == s.Advanced &&
                (e.className = (0, g.FH)(e.className, "Advanced")),
              a.createElement("div", e, this.props.children));
        }
      };
      k = (0, i.Cg)([d.PA], k);
      const H = (0, d.PA)(function (e) {
        const { settingValue: t } = e;
        if (t.requires)
          for (let e in t.requires) {
            let n = t.requires[e];
            if (u.HR.settings.get(e) != n) return null;
          }
        if (t.advanced_only && !u.HR.showAdvancedSettings) return null;
        let n = null;
        switch (null == t ? void 0 : t.control) {
          case "checkbox":
            n = a.createElement(D, {
              key: t.name,
              name: t.name,
              label: t.label ? (0, l.we)(t.label) : "",
              title: t.text ? (0, l.we)(t.text) : "",
            });
            break;
          case "toggle":
            n = a.createElement(B, {
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
            n = a.createElement(I, {
              key: t.name,
              name: t.name,
              label: t.label ? (0, l.we)(t.label) : "",
              title: t.text ? (0, l.we)(t.text) : "",
              items: e,
            });
            break;
          case "radio":
            let r = t.options
              .filter((e) => null != e)
              .map((e, t) => ({ value: e.value, sLabel: (0, l.we)(e.label) }));
            n = a.createElement(P, {
              key: t.name,
              name: t.name,
              label: t.label ? (0, l.we)(t.label) : "",
              items: r,
            });
            break;
          case "scale":
          case "none":
          default:
            n = a.createElement("div", { key: t.name });
            break;
          case "slider":
            n = a.createElement(E, Object.assign({ key: t.name }, t));
            break;
          case "label":
            n = a.createElement(T, Object.assign({ key: t.name }, t));
        }
        if (
          (t.advanced_only &&
            (n = a.createElement(
              k,
              { key: t.name, className: "SettingsItem Advanced" },
              n,
            )),
          t.requires_paths)
        )
          for (let e in t.requires_paths)
            n = a.createElement(
              V,
              { key: t.name, path: e, value: t.requires_paths[e] },
              n,
            );
        return n;
      });
      class A extends a.Component {
        constructor(e) {
          super(e);
        }
        makeResetToDefaultButton() {
          return a.createElement(
            "div",
            { className: "SettingsItem Button ResetDefaultButton" },
            a.createElement(
              h.$,
              { className: "ButtonControl", onClick: this.ResetToDefaults },
              (0, l.we)("#Settings_ResetPageToDefault"),
            ),
          );
        }
        ResetToDefaults() {
          for (let e of this.props.section.values)
            null != e.name && u.HR.SetSettingsValue(e.name, null);
        }
        get schemaComponents() {
          if (!this.props.section.values) return null;
          let e = [];
          for (let t of this.props.section.values)
            (null == t ? void 0 : t.control) &&
              e.push(a.createElement(H, { key: t.name, settingValue: t }));
          return e;
        }
        GetComponentsForGroup(e) {
          let t = [];
          for (let n of this.props.section.values)
            n.control &&
              n.group == e &&
              t.push(a.createElement(H, { key: n.name, settingValue: n }));
          return a.createElement("div", null, t);
        }
        render() {
          return this.props.active
            ? a.createElement(
                a.Fragment,
                null,
                this.schemaComponents,
                this.makeResetToDefaultButton(),
              )
            : null;
        }
      }
      (0, i.Cg)([o.o], A.prototype, "ResetToDefaults", null),
        (0, i.Cg)([c.EW], A.prototype, "schemaComponents", null);
      let D = class extends a.Component {
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
          this.props.name && u.HR.SetSettingsValue(this.props.name, t),
            this.props.onChange && this.props.onChange(t),
            h.W.temporarilySuppressSoundEffect(),
            m.u.Instance.playSound(m.j.ButtonClick);
        }
        render() {
          let e = !!this.props.value;
          return (
            this.props.name && (e = !!u.HR.settings.get(this.props.name)),
            a.createElement(
              "div",
              { className: "FlexRow SettingsItem Checkbox" },
              a.createElement(
                "label",
                { className: "SettingsCheckboxContainer FlexRow" },
                a.createElement("input", {
                  type: "checkbox",
                  checked: e,
                  onChange: this.handleChange,
                }),
                a.createElement(
                  "div",
                  { className: "FlexColumn" },
                  this.props.label &&
                    a.createElement(
                      "div",
                      { className: "Label" },
                      this.props.label,
                    ),
                  this.props.title &&
                    a.createElement(
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
      (0, i.Cg)([o.o], D.prototype, "handleChange", null),
        (D = (0, i.Cg)([d.PA], D));
      let O = class extends a.Component {
        constructor(e) {
          super(e);
        }
        handleChange(e) {}
        render() {
          var e;
          const t =
            null !== (e = u.HR.settings.get(this.props.name)) && void 0 !== e
              ? e
              : this.props.value;
          return a.createElement(
            k,
            {
              className: "SettingsItem",
              title: this.props.title,
              visibility: this.props.visibility,
            },
            a.createElement("div", { className: "Label" }, this.props.label),
            a.createElement("div", { className: "ValueText" }, t),
          );
        }
      };
      (0, i.Cg)([o.o], O.prototype, "handleChange", null),
        (O = (0, i.Cg)([d.PA], O));
      let L = class extends a.Component {
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
            ? u.HR.settings.get(this.props.name)
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
          this.props.name && u.HR.SetSettingsValue(this.props.name, t),
            this.props.onChange && this.props.onChange(t),
            (0, p.R$)() == p.OH.Overlay &&
              (h.W.temporarilySuppressSoundEffect(),
              m.u.Instance.playSound(m.j.ButtonClick)),
            this.props.requiresRestart && u.HR.SetRestartRequired();
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
          var e, t, n;
          const r = this.getCurrentValue(),
            s = this.props.items.findIndex((e) =>
              this.ValuesAreEqual(e.value, r),
            ),
            i =
              null !==
                (n =
                  null ===
                    (t =
                      null === (e = this.props.valueSubsections) || void 0 === e
                        ? void 0
                        : e.find((e) => this.ValuesAreEqual(e.value, r))) ||
                  void 0 === t
                    ? void 0
                    : t.subsection) && void 0 !== n
                ? n
                : this.props.subsection,
            o = !!i;
          return a.createElement(
            k,
            {
              className: (0, g.FH)("SettingsItem", "SegmentedControl"),
              title: this.props.title,
              visibility: this.props.visibility,
            },
            a.createElement("div", { className: "Label" }, this.props.label),
            a.createElement(
              "div",
              { className: (0, g.FH)("SubsectionStem", ["Hidden", !o]) },
              a.createElement(
                "div",
                {
                  className: (0, g.FH)("SegmentedControlGroup", [
                    "DualValue",
                    2 == this.props.items.length,
                  ]),
                  style: {
                    "--item-count": this.props.items.length,
                    "--item-value-index": s,
                    "--toggle-control-translate-x-direction":
                      0 == s
                        ? 1
                        : s == this.props.items.length - 1
                          ? -1
                          : this.state.nMouseDownIndex > s
                            ? 1
                            : this.state.nMouseDownIndex < s
                              ? -1
                              : 0,
                  },
                  onMouseEnter: this.onGroupMouseEnter,
                  onMouseLeave: this.onGroupMouseLeave,
                },
                this.props.items.map((e, t) =>
                  a.createElement(
                    "div",
                    {
                      key: t,
                      className: (0, g.FH)("SegmentedControlGroupOption", [
                        "Active",
                        this.ValuesAreEqual(e.value, r),
                      ]),
                      onClick: () => this.onItemClick(e),
                      onMouseDown: () => this.setState({ nMouseDownIndex: t }),
                      onMouseEnter: this.onOptionMouseEnter,
                      onMouseLeave: this.onOptionMouseLeave,
                    },
                    a.createElement("span", null, e.sLabel),
                  ),
                ),
              ),
            ),
            !!i &&
              a.createElement("div", { className: "Subsection WithStem" }, i),
          );
        }
      };
      (0, i.Cg)([o.o], L.prototype, "onGroupMouseEnter", null),
        (0, i.Cg)([o.o], L.prototype, "onGroupMouseLeave", null),
        (0, i.Cg)([o.o], L.prototype, "onOptionMouseEnter", null),
        (0, i.Cg)([o.o], L.prototype, "onOptionMouseLeave", null),
        (L = (0, i.Cg)([d.PA], L));
      let B = class extends a.Component {
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
          const n = !!this.props.swapOnOff,
            r = !this.props.swapOnOff;
          return a.createElement(L, {
            name: this.props.name,
            label: this.props.label,
            title: this.props.title,
            items: [
              {
                value: n,
                sLabel:
                  null !== (e = this.props.offLabel) && void 0 !== e
                    ? e
                    : (0, l.we)("#Settings_ToggleButton_Off"),
              },
              {
                value: r,
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
                  { value: n, subsection: this.props.offSubsection },
                  { value: r, subsection: this.props.onSubsection },
                ],
            visibility: this.props.visibility,
          });
        }
      };
      B = (0, i.Cg)([d.PA], B);
      let I = class extends a.Component {
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
            ? u.HR.settings.get(this.props.name)
            : void 0 !== this.props.value
              ? this.props.value
              : null;
        }
        onChange(e) {
          this.props.name &&
            u.HR.SetSettingsValue(this.props.name, e.toString()),
            this.props.onChange && this.props.onChange(e),
            this.props.requiresRestart && u.HR.SetRestartRequired();
        }
        render() {
          let e = Object.assign({}, this.props);
          return (
            (e.onChange = this.onChange),
            (e.value = this.value),
            a.createElement(
              k,
              {
                className: "SettingsItem",
                title: this.props.title,
                visibility: this.props.visibility,
              },
              this.props.label &&
                a.createElement(
                  "div",
                  {
                    className: (0, g.FH)("Label", [
                      "Spanning",
                      this.props.fullWidth,
                    ]),
                  },
                  this.props.label,
                ),
              a.createElement(
                "div",
                {
                  className: (0, g.FH)("SubsectionStem", [
                    "Hidden",
                    !this.props.subsection,
                  ]),
                },
                a.createElement(S.ms, Object.assign({}, e)),
              ),
              !!this.props.subsection &&
                a.createElement(
                  "div",
                  { className: "Subsection WithStem" },
                  this.props.subsection,
                ),
            )
          );
        }
      };
      (0, i.Cg)([c.EW], I.prototype, "value", null),
        (0, i.Cg)([o.o], I.prototype, "onChange", null),
        (I = (0, i.Cg)([d.PA], I));
      let P = class extends a.Component {
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
            ? u.HR.settings.get(this.props.name)
            : void 0 !== this.props.value
              ? this.props.value
              : null;
        }
        onChange(e) {
          this.props.name &&
            u.HR.SetSettingsValue(this.props.name, e.toString()),
            this.props.onChange && this.props.onChange(e);
        }
        render() {
          const e = this.props.items.map((e, t) => {
            const n = this.props.comparator
              ? this.props.comparator(this.value, e.value)
              : this.value == e.value;
            return a.createElement(
              h.$,
              {
                className: (0, g.FH)("RadioButton", ["Selected", n]),
                key: t,
                enabled: !n,
                onClick: () => this.onChange(e.value),
              },
              a.createElement("div", { className: "Label" }, e.sLabel),
            );
          });
          return a.createElement(
            k,
            {
              className: (0, g.FH)("SettingsItem", "RadioButtons"),
              title: this.props.title,
            },
            a.createElement("div", { className: "Label" }, this.props.label),
            a.createElement("div", { className: "RadioButtonsSet" }, e),
          );
        }
      };
      (0, i.Cg)([c.EW], P.prototype, "value", null),
        (0, i.Cg)([o.o], P.prototype, "onChange", null),
        (P = (0, i.Cg)([d.PA], P));
      let N = class extends a.Component {
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
            u.HR.SetDashboardFadeSupression(
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
            u.HR.SetDashboardFadeSupression(
              this.m_sUniqueIdForFadeSupression,
              !1,
            ),
            null === (t = (e = this.props).onInteractionEnd) ||
              void 0 === t ||
              t.call(e);
        }
        get value() {
          if (this.props.name) {
            let e = u.HR.settings.get(this.props.name);
            return e || 0;
          }
          return this.props.value;
        }
        onChange(e) {
          var t, n;
          this.props.name &&
            u.HR.SetSettingsValue(this.props.name, e.toString()),
            null === (n = (t = this.props).onChange) ||
              void 0 === n ||
              n.call(t, e);
        }
        render() {
          let e = Object.assign({}, this.props);
          return (
            (e.onInteractionStart = this.onInteractionStart),
            (e.onInteractionEnd = this.onInteractionEnd),
            (e.onChange = this.onChange),
            (e.value = this.value),
            a.createElement(
              k,
              {
                className: (0, g.FH)(
                  "SettingsItem",
                  "Slider",
                  this.props.additionalClassName,
                ),
                title: this.props.title,
              },
              this.props.label &&
                a.createElement(
                  "label",
                  {
                    className: (0, g.FH)("Label", [
                      "Spanning",
                      this.props.labelSpans,
                    ]),
                  },
                  this.props.label,
                ),
              a.createElement(R.Ap, Object.assign({}, e)),
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
      (0, i.Cg)([o.o], N.prototype, "onInteractionStart", null),
        (0, i.Cg)([o.o], N.prototype, "onInteractionEnd", null),
        (0, i.Cg)([c.EW], N.prototype, "value", null),
        (0, i.Cg)([o.o], N.prototype, "onChange", null),
        (N = (0, i.Cg)([d.PA], N));
      let F = (r = class extends a.Component {
        static HueToRGB(e, t, n) {
          return 6 * (n = (n + 1) % 1) < 1
            ? e + (t - e) * n * 6
            : 2 * n < 1
              ? t
              : 3 * n < 2
                ? e + (t - e) * (2 / 3 - n) * 6
                : e;
        }
        static HSLToRGB(e, t, n) {
          e /= 360;
          let s = n <= 0.5 ? n * (1 + t) : n + t - n * t,
            i = 2 * n - s;
          return [
            r.HueToRGB(i, s, e + 1 / 3),
            r.HueToRGB(i, s, e),
            r.HueToRGB(i, s, e - 1 / 3),
          ];
        }
        static RGBtoHueLuminance(e, t, n) {
          (e /= 255), (t /= 255), (n /= 255);
          let r = Math.max(e, t, n),
            s = Math.min(e, t, n),
            i = 0,
            a = (r + s) / 2;
          if (r != s) {
            let a = r - s;
            switch (r) {
              case e:
                i = (t - n) / a + (t < n ? 6 : 0);
                break;
              case t:
                i = (n - e) / a + 2;
                break;
              case n:
                i = (e - t) / a + 4;
            }
            i /= 6;
          }
          return { hue: 360 * i, luminance: a };
        }
        onSliderChanged(e) {
          let t = [255, 255, 255];
          if (
            (e <= 360 && (t = r.HSLToRGB(e, 1, 0.5).map((e) => 255 * e)),
            this.props.name)
          ) {
            const e =
              "#" +
              (t[2] | (t[1] << 8) | (t[0] << 16)).toString(16).padStart(6, "0");
            u.HR.SetSettingsValue(this.props.name, e);
          }
          this.props.nameR &&
            this.props.nameG &&
            this.props.nameB &&
            (u.HR.SetSettingsValue(this.props.nameR, t[0]),
            u.HR.SetSettingsValue(this.props.nameG, t[1]),
            u.HR.SetSettingsValue(this.props.nameB, t[2])),
            this.props.onChange &&
              this.props.onChange({ r: t[0], g: t[1], b: t[2] });
        }
        render() {
          let e, t, n;
          this.props.nameR && this.props.nameG && this.props.nameB
            ? ((e = u.HR.settings.get(this.props.nameR)),
              (t = u.HR.settings.get(this.props.nameG)),
              (n = u.HR.settings.get(this.props.nameB)))
            : this.props.value &&
              ((e = this.props.value.r),
              (t = this.props.value.g),
              (n = this.props.value.b));
          const s = r.RGBtoHueLuminance(e, t, n),
            i = 360 / (1 - r.WHITE_SIZE_PERCENT),
            o = 255 == e && 255 == t && 255 == n ? i : s.hue;
          return a.createElement(N, {
            additionalClassName: "Hue",
            label: this.props.label,
            labelSpans: !0,
            title: this.props.text,
            styleVariant: R.uJ.Color,
            renderValue: (e) =>
              e > 360 ? "white" : "hsl(" + e + ", 100%, 50%)",
            max: i,
            value: o,
            onChange: this.onSliderChanged,
          });
        }
      });
      (F.WHITE_SIZE_PERCENT = 0.03),
        (0, i.Cg)([o.o], F.prototype, "onSliderChanged", null),
        (F = r = (0, i.Cg)([d.PA], F));
      let W = class extends a.Component {
        get value() {
          return this.props.name
            ? u.HR.settings.get(this.props.name)
            : this.props.value;
        }
        onSliderChanged(e) {
          this.props.onChange && this.props.onChange(e),
            this.props.name && u.HR.SetSettingsValue(this.props.name, e);
        }
        render() {
          var e;
          const t = this.props.color
              ? this.props.color
              : { r: 255, g: 255, b: 255 },
            n = null !== (e = this.props.max) && void 0 !== e ? e : 255;
          return a.createElement(N, {
            additionalClassName: "Alpha",
            label: this.props.label,
            title: this.props.text,
            labelSpans: !0,
            styleVariant: R.uJ.Color,
            renderValue: (e) =>
              "rgba(" +
              (t.r * e) / n +
              "," +
              (t.g * e) / n +
              "," +
              (t.b * e) / n +
              ",1)",
            sliderColor: "rgb(" + t.r + "," + t.g + "," + t.b + ")",
            min: this.props.min,
            max: this.props.max,
            value: this.value,
            onChange: this.onSliderChanged,
          });
        }
      };
      (0, i.Cg)([c.EW], W.prototype, "value", null),
        (0, i.Cg)([o.o], W.prototype, "onSliderChanged", null),
        (W = (0, i.Cg)([d.PA], W));
      let G,
        z = class extends a.Component {
          constructor(e) {
            super(e), (this.state = { bShowingModal: !1 });
          }
          get value() {
            if (this.props.name)
              return (e = u.HR.settings.get(this.props.name))
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
                this.props.nameR && (e.r = u.HR.settings.get(this.props.nameR)),
                this.props.nameG && (e.g = u.HR.settings.get(this.props.nameG)),
                this.props.nameB && (e.b = u.HR.settings.get(this.props.nameB)),
                this.props.nameA &&
                  (e.a = u.HR.settings.get(this.props.nameA) / this.alphaScale),
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
              n = { r: t.r, g: t.g, b: t.b, a: e };
            this.props.name && u.HR.SetSettingsValue(this.props.name, x(n)),
              this.props.nameA &&
                u.HR.SetSettingsValue(this.props.nameA, e * this.alphaScale),
              this.props.onChange && this.props.onChange(n);
          }
          get minA() {
            return void 0 === this.props.minA ? 0 : this.props.minA;
          }
          get maxA() {
            return void 0 === this.props.maxA ? 1 : this.props.maxA;
          }
          onColorChange(e) {
            const t = { r: e.r, g: e.g, b: e.b, a: this.value.a };
            this.props.name && u.HR.SetSettingsValue(this.props.name, x(t)),
              this.props.nameR && u.HR.SetSettingsValue(this.props.nameR, t.r),
              this.props.nameG && u.HR.SetSettingsValue(this.props.nameG, t.g),
              this.props.nameB && u.HR.SetSettingsValue(this.props.nameB, t.b),
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
            return a.createElement(
              k,
              {
                className: "SettingsItem ColorPicker",
                title: this.props.title,
              },
              this.props.label &&
                a.createElement(
                  "div",
                  { className: "Label" },
                  this.props.label,
                ),
              a.createElement(h.$, {
                className: "ButtonControl",
                onClick: this.showModal,
                style: {
                  "--color-value-rgb": e.r + "," + e.g + "," + e.b,
                  "--color-value-a": e.a,
                },
              }),
              this.state.bShowingModal &&
                a.createElement(
                  j,
                  {
                    onDismissRequested: this.hideModal,
                    header: this.props.label,
                  },
                  a.createElement(F, {
                    label: (0, l.we)("#Settings_Chaperone_BoundsColor"),
                    onChange: this.onColorChange,
                    value: e,
                  }),
                  a.createElement(W, {
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
      (0, i.Cg)([c.EW], z.prototype, "value", null),
        (0, i.Cg)([c.EW], z.prototype, "alphaScale", null),
        (0, i.Cg)([o.o], z.prototype, "onAlphaChange", null),
        (0, i.Cg)([c.EW], z.prototype, "minA", null),
        (0, i.Cg)([c.EW], z.prototype, "maxA", null),
        (0, i.Cg)([o.o], z.prototype, "onColorChange", null),
        (0, i.Cg)([o.o], z.prototype, "showModal", null),
        (0, i.Cg)([o.o], z.prototype, "hideModal", null),
        (z = (0, i.Cg)([d.PA], z));
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
            (0, c.Gn)(this);
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
      (0, i.Cg)([c.sH], U.prototype, "runningAppKey", void 0),
        (0, i.Cg)([o.o], U.prototype, "onSceneApplicationStateChanged", null);
      class q extends a.Component {
        constructor(e) {
          G || (G = new U()), super(e), (this.state = { currentApp: null });
        }
        componentDidMount() {
          G.register(this.props.stateKey, this.onSceneApplicationStateChanged);
        }
        componentWillUnmount() {
          G.unregister(this.props.stateKey);
        }
        onSceneApplicationStateChanged(e) {
          var t, n;
          const r = this.props.showCompositor
              ? "openvr.component.vrcompositor"
              : null,
            s =
              null !==
                (n =
                  null !== (t = this.props.defaultAppKey) && void 0 !== t
                    ? t
                    : e) && void 0 !== n
                ? n
                : r;
          this.setCurrentApp(s);
        }
        setCurrentApp(e) {
          const t = u.HR.apps && u.HR.apps.find((t) => t.key == e);
          this.setState((e, n) => {
            var r;
            return (null === (r = e.currentApp) || void 0 === r
              ? void 0
              : r.key) === (null == t ? void 0 : t.key)
              ? null
              : (this.props.onChange && this.props.onChange(t),
                { currentApp: t });
          });
        }
        makeAppChoiceList() {
          let e = [],
            t = " " + (0, l.we)("#Settings_PerApplication_DashboardSuffix");
          if (null != u.HR.apps)
            for (let n of u.HR.apps) {
              let r = !n.is_hidden;
              "openvr.component.vrcompositor" == n.key
                ? (r = !!this.props.showCompositor)
                : n.key == b.Eo
                  ? (r = !!this.props.showSteam)
                  : n.key == b.MM || n.key == b.v0
                    ? (r = !!this.props.showSteamVR)
                    : n.key.startsWith("system.generated")
                      ? (r = !!this.props.showGenerated)
                      : n.is_internal
                        ? (r = !!this.props.showInternal)
                        : n.is_dashboard_overlay &&
                          (r = !!this.props.showOverlays),
                (r || n.current_scene_process) &&
                  e.push({
                    value: n.key,
                    sLabel: n.name + (n.is_dashboard_overlay ? t : ""),
                  });
            }
          const n = (e) =>
              e.value == G.runningAppKey ||
              "openvr.component.vrcompositor" == e.value,
            r = e.filter(n),
            s = e.filter((e) => !n(e));
          return (
            r.sort((e, t) =>
              e.value == G.runningAppKey
                ? -1
                : t.value == G.runningAppKey
                  ? 1
                  : "openvr.component.vrcompositor" == e.value
                    ? -1
                    : "openvr.component.vrcompositor" == t.value
                      ? 1
                      : e.sLabel.localeCompare(t.sLabel),
            ),
            s.sort((e, t) => e.sLabel.localeCompare(t.sLabel)),
            r.length > 0 && s.length > 0
              ? [...r, S.Sr.Separator, ...s]
              : r.length > 0
                ? r
                : s
          );
        }
        onControllerDropdownChanged(e) {
          G.setAppKey(this.props.stateKey, e), this.setCurrentApp(e);
        }
        render() {
          const e = this.makeAppChoiceList(),
            t = this.state.currentApp ? this.state.currentApp.key : null;
          return a.createElement(I, {
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
            n = t.header;
          "string" == typeof n && (n = a.createElement("h1", null, n));
          let r = t.subheader;
          "string" == typeof r &&
            (r = a.createElement("div", { className: "Label" }, r));
          let s = t.footer;
          void 0 === s &&
            (s = a.createElement(K, {
              onDismissRequested: t.onDismissRequested,
            }));
          const i = t.allowableParentSelectors || [];
          return (
            p.O5.IsSceneGraphApp ||
              (t.allowableParentSelectors = [
                ...i,
                ".SettingsSidebarPageModalContainer",
              ]),
            a.createElement(
              v.a,
              Object.assign({}, t),
              n && a.createElement("div", { className: "Subsection Top" }, n),
              r &&
                a.createElement(
                  "div",
                  { className: "Subsection Top Subheader" },
                  r,
                ),
              e.children &&
                a.createElement(
                  f.M,
                  {
                    scrollDirection: f.D.Vertical,
                    className: "Subsection Body",
                  },
                  t.children,
                ),
              s &&
                a.createElement("div", { className: "Subsection Bottom" }, s),
            )
          );
        },
        K = (e) => {
          let t = e.leftControls ? e.leftControls : [];
          e.showResetButton &&
            t.push(
              a.createElement(
                h.$,
                {
                  key: "reset",
                  className: "ButtonControl",
                  onClick: e.onResetRequested,
                },
                (0, l.we)("#Settings_ResetToDefault"),
              ),
            );
          let n = [
            a.createElement(
              h.$,
              {
                key: "close",
                className: "ButtonControl",
                onClick: e.onDismissRequested,
              },
              (0, l.we)("#Settings_General_Close"),
            ),
          ];
          return a.createElement(
            "div",
            { className: "SettingsItem ButtonRow" },
            t,
            t.length > 0 &&
              n.length > 0 &&
              a.createElement("div", { className: "Spacer" }),
            n,
          );
        };
      var $;
      !(function (e) {
        e[(e.PopOut = 0)] = "PopOut";
      })($ || ($ = {}));
      const X = (e) => {
        let t = null;
        if (void 0 !== e.icon && e.icon === $.PopOut)
          t = a.createElement(y.FG, { className: "Icon" });
        return a.createElement(
          h.$,
          Object.assign(
            { className: (0, g.FH)("ButtonControl", ["WithIcon", null !== t]) },
            e,
          ),
          a.createElement("span", null, e.children),
          t,
        );
      };
    },
    2267: (e, t, n) => {
      "use strict";
      n.d(t, {
        Pj: () => M,
        xR: () => O,
        a5: () => L,
        y: () => b,
        rO: () => w,
        zU: () => V,
        EM: () => T,
      });
      var r = n(1635),
        s = n(6540),
        i = n(7813),
        a = n(3236),
        o = n(3714),
        l = n(1333),
        c = n(427),
        d = n(6138),
        u = n(6090),
        p = n(4015),
        m = n(1139),
        h = n(3606),
        g = n(4493),
        v = n(917);
      var _;
      function S() {
        VRHTML
          ? VRHTML.VRMonitor.SetDirectModeEnabled(!0, !0)
          : window.open("vrmonitor://directmode/enable");
      }
      const b = (0, p.PA)(() => {
          if (
            !l.HR.systemInfo ||
            0 == l.HR.systemInfo.refresh_rates.actual_display_frequency
          )
            return null;
          if (l.HR.systemInfo.refresh_rates.supported_rates.length > 1)
            return s.createElement(c.ym, {
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
              n = Math.round(
                l.HR.systemInfo.refresh_rates.actual_display_frequency,
              );
            return s.createElement(
              c.YO,
              {
                className: "SettingsItem",
                title: e
                  ? null
                  : (0, o.we)("#Settings_Video_RefreshRate_OneSupported"),
              },
              s.createElement(
                "div",
                { className: "Label" },
                (0, o.we)("#Settings_Video_RefreshRate_Header"),
              ),
              s.createElement(
                "div",
                { className: (0, m.FH)("Label", ["SubsectionStem", e]) },
                n + (0, o.we)("#Settings_Video_RefreshRate_HzSuffix"),
              ),
              e &&
                s.createElement(
                  "div",
                  { className: "Subsection WithStem" },
                  t &&
                    (0, o.we)(
                      "#Settings_Video_RefreshRate_NotAvailableExtended",
                    ),
                  t &&
                    (0, u.R$)() != u.OH.Overlay &&
                    s.createElement(
                      d.$,
                      { className: "ButtonControl", onClick: S },
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
        R = () => {
          const [e, t] = s.useState(!1),
            n = (0, o.we)(
              "#Settings_Advanced_Supersampling_WidthByHeight",
              y,
              y,
            );
          return s.createElement(
            s.Fragment,
            null,
            e &&
              s.createElement(
                c.bB,
                {
                  className: "MaxRecommendedResolutionRecovery",
                  footer: s.createElement(
                    d.$,
                    {
                      key: "close",
                      className: "ButtonControl",
                      onClick: () => t(!1),
                    },
                    (0, o.we)("#Settings_General_Cancel"),
                  ),
                  onDismissRequested: () => t(!1),
                },
                s.createElement(
                  "div",
                  { className: "Description" },
                  (0, o.we)(
                    "#Settings_Video_MaxRecommendedResolutionRecoveryStatement",
                    n,
                  ),
                ),
                s.createElement(
                  "div",
                  { className: "Description" },
                  (0, o.we)(
                    "#Settings_Video_MaxRecommendedResolutionRecoveryExplanation",
                    n,
                  ),
                ),
                s.createElement(
                  d.$,
                  {
                    className: "ButtonControl",
                    title: (0, o.we)(
                      "#Settings_Video_MaxRecommendedResolutionRecoveryActionAutoTip",
                    ),
                    onClick: () =>
                      (0, r.sH)(void 0, void 0, void 0, function* () {
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
                s.createElement(
                  d.$,
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
            s.createElement(
              "div",
              { className: "Label" },
              (0, o.we)(
                "#Settings_Video_MaxRecommendedResolutionRecoveryText",
                n,
              ),
            ),
            s.createElement(
              d.$,
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
        f = (0, p.PA)(
          () => l.HR.settings.get(h.rG) == y && s.createElement(R, null),
        ),
        w = (0, p.PA)(() => {
          const e = l.HR.settings.get(h.wt),
            t = l.HR.settings.get(h.w5);
          let n = [],
            r = l.HR.settings.get(h.j5);
          if ((r > 0 ? n.push(r) : n.push(1), null === e || null === t))
            return null;
          let i = null;
          if (
            l.HR.systemInfo &&
            null != l.HR.systemInfo.render_target_size.width &&
            0 != l.HR.systemInfo.render_target_size.height
          ) {
            const e = l.HR.SliderposToSupersample(t);
            let n = Math.max(
                512,
                Math.floor(
                  l.HR.systemInfo.render_target_size.width * Math.sqrt(e) + 0.5,
                ),
              ),
              r = Math.max(
                512,
                Math.floor(
                  l.HR.systemInfo.render_target_size.height * Math.sqrt(e) +
                    0.5,
                ),
              );
            const s = l.HR.settings.get(h.rG);
            Math.max(n, r) > s &&
              (n > r
                ? ((r = (s * r) / n), (n = s))
                : ((n = (s * n) / r), (r = s))),
              (n = 4 * Math.trunc(n / 4)),
              (r = 4 * Math.trunc(r / 4)),
              (i = (0, o.we)(
                "#Settings_Advanced_Supersampling_WidthByHeight",
                n,
                r,
              ));
          }
          return s.createElement(c.Al, {
            name: h.wt,
            label: (0, o.we)("#Settings_Advanced_Supersampling_Header"),
            onLabel: (0, o.we)("#Settings_Advanced_Supersampling_Auto"),
            offLabel: (0, o.we)("#Settings_Advanced_Supersampling_Custom"),
            title: e ? "" : (0, o.we)("#Explanation_Supersampling_Header"),
            swapOnOff: !0,
            offSubsection: s.createElement(
              s.Fragment,
              null,
              s.createElement(
                c.YO,
                { className: "SettingsItem" },
                s.createElement(
                  "div",
                  { className: "Label" },
                  (0, o.we)(
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
                s.createElement(c.tE, {
                  min: 0.2,
                  max: 5,
                  step: 0.02,
                  detents: n,
                  value: t,
                  onChange: (e) => l.HR.SetSettingsValue(h.w5, e),
                }),
                s.createElement(f, null),
              ),
            ),
          });
        });
      let C = class extends s.Component {
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
            u.fD.HmdColumnCorrectionSettingPrefix_String,
          );
          if (!e) return null;
          if ("firmware_update_required" == e)
            return s.createElement(
              c.YO,
              {
                title: (0, o.we)("#DisplaySettings_ColumnCorrectionDesc"),
                className: "SettingsItem",
                visibility: this.props.visibility,
              },
              s.createElement(
                "div",
                { className: "Label" },
                (0, o.we)("#DisplaySettings_ColumnCorrection"),
              ),
              s.createElement(
                "div",
                { className: "Subsection WithStem" },
                s.createElement(
                  "div",
                  { className: "Label" },
                  (0, o.we)("#DisplaySettings_Error_FirmwareUpdateNeeded"),
                ),
              ),
            );
          {
            let t = l.HR.settings.get(h.GM);
            const n = "/settings/driver_lighthouse/" + e + "_L",
              r = "/settings/driver_lighthouse/" + e + "_R";
            let i = l.HR.settings.get(n);
            null == i && (i = 0);
            let a = l.HR.settings.get(r);
            return (
              null == a && (a = 0),
              s.createElement(
                c.YO,
                {
                  className: "SettingsItem",
                  title: (0, o.we)("#DisplaySettings_ColumnCorrectionDesc"),
                  visibility: this.props.visibility,
                },
                s.createElement(
                  "div",
                  { className: "Label" },
                  (0, o.we)("#DisplaySettings_IndexColumnCorrection"),
                ),
                s.createElement(
                  d.$,
                  { className: "ButtonControl", onClick: this.showModal },
                  (0, o.we)("#DisplaySettings_ColumnCorrectionEdit"),
                ),
                this.state.bShowingModal &&
                  s.createElement(
                    c.bB,
                    {
                      onDismissRequested: this.hideModal,
                      allowableParentSelectors: [".SettingsMain"],
                      header: (0, o.we)(
                        "#DisplaySettings_IndexColumnCorrection",
                      ),
                      footer: s.createElement(c.tR, {
                        showResetButton: !0,
                        onResetRequested: () => {
                          l.HR.SetSettingsValue(h.GM, 1),
                            l.HR.SetSettingsValue(n, 0),
                            l.HR.SetSettingsValue(r, 0);
                        },
                        onDismissRequested: this.hideModal,
                      }),
                    },
                    s.createElement(c.Al, {
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
                    s.createElement(c.tE, {
                      label: (0, o.we)(
                        "#DisplaySettings_ColumnCorrectionBiasLeft",
                      ),
                      min: -10,
                      max: 10,
                      step: 1,
                      value: i,
                      detents: [0],
                      valueStyleVariant: v.Te.OnHandle,
                      renderValue: (e) => e.toFixed(0),
                      onChange: (e) => l.HR.SetSettingsValue(n, e),
                    }),
                    s.createElement(c.tE, {
                      label: (0, o.we)(
                        "#DisplaySettings_ColumnCorrectionBiasRight",
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
                  ),
              )
            );
          }
        }
      };
      (0, r.Cg)([a.o], C.prototype, "showModal", null),
        (0, r.Cg)([a.o], C.prototype, "hideModal", null),
        (C = (0, r.Cg)([p.PA], C));
      const M = (0, p.PA)(() => {
        var e, t;
        if (!VRHTML) return null;
        if (
          !VRHTML.VRProperties.GetBoolProperty(
            "/user/head",
            u.fD.DisplaySupportsAnalogGain_Bool,
          )
        )
          return null;
        let n = l.HR.settings.get(h.Y);
        null == n && (n = 1);
        const r =
            null !==
              (e = VRHTML.VRProperties.GetFloatProperty(
                "/user/head",
                u.fD.DisplayMaxAnalogGain_Float,
              )) && void 0 !== e
              ? e
              : 1,
          i =
            null !==
              (t = VRHTML.VRProperties.GetFloatProperty(
                "/user/head",
                u.fD.DisplayMinUIAnalogGain_Float,
              )) && void 0 !== t
              ? t
              : 0.2;
        return s.createElement(
          c.YO,
          { className: "SettingsItem" },
          s.createElement(
            "div",
            { className: "Label" },
            (0, o.we)("#DisplaySettings_DisplayBrightness"),
          ),
          s.createElement(c.tE, {
            min: 100 * i,
            max: 100 * r,
            value:
              ((a = n),
              a < 0 ? 0 : a < 1 ? 100 * Math.pow(a, 1 / 2.2) : 100 * a),
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
        var a;
      });
      class E extends s.Component {
        constructor(e) {
          super(e);
        }
        render() {
          const e =
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.GetRecommendedOverlayRenderQuality();
          return s.createElement(c.xS, {
            name: "/settings/steamvr/overlayRenderQuality_2",
            label: (0, o.we)("#Settings_OverlayRenderQuality"),
            items: [
              {
                value: u.pM.Auto,
                sLabel:
                  void 0 !== e
                    ? (0, o.we)(
                        "#Settings_Auto_Parenthesized",
                        (0, o.we)("#Settings_" + u.pM[e]),
                      )
                    : (0, o.we)("#Settings_Auto"),
              },
              g.Sr.Separator,
              { value: u.pM.Low, sLabel: (0, o.we)("#Settings_Low") },
              { value: u.pM.Medium, sLabel: (0, o.we)("#Settings_Medium") },
              { value: u.pM.High, sLabel: (0, o.we)("#Settings_High") },
            ],
            visibility: c.Z3.Advanced,
          });
        }
      }
      class T extends s.Component {
        constructor(e) {
          super(e);
        }
        render() {
          return VRHTML &&
            VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              u.fD.DisplayAllowNightMode_Bool,
            )
            ? s.createElement(c.Al, {
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
            u.fD.HasDriverDirectModeComponent_Bool,
          )
        ) {
          return "oculus" ===
            VRHTML.VRProperties.GetStringProperty(
              "/user/head",
              u.fD.TrackingSystemName_String,
            )
            ? null
            : s.createElement(c.Al, {
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
          return s.createElement(c.Al, {
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
        return s.createElement(
          c.YO,
          { className: "SettingsItem", title: t },
          s.createElement(
            "div",
            { className: "Label" },
            (0, o.we)("#Settings_Advanced_MotionSmoothing_Header"),
          ),
          s.createElement(
            "div",
            { className: "Label Right" },
            (0, o.we)("#Settings_NotSupported"),
          ),
        );
      };
      var k, H, A;
      !(function (e) {
        (e[(e.UseGlobal = 0)] = "UseGlobal"),
          (e[(e.ForceOn = 1)] = "ForceOn"),
          (e[(e.ForceOff = 2)] = "ForceOff"),
          (e[(e.ForceAlwaysOn = 3)] = "ForceAlwaysOn");
      })(k || (k = {})),
        (function (e) {
          (e[(e.Default = 0)] = "Default"),
            (e[(e.Letterbox = 1)] = "Letterbox"),
            (e[(e.Advanced = 2)] = "Advanced");
        })(H || (H = {})),
        (function (e) {
          (e[(e.Off = 0)] = "Off"),
            (e[(e.Fine = 1)] = "Fine"),
            (e[(e.Normal = 2)] = "Normal"),
            (e[(e.Extreme = 3)] = "Extreme");
        })(A || (A = {}));
      const D = {
        [A.Fine]: { min: 0.8, max: 1.25, step: 0.001 },
        [A.Normal]: { min: 0.5, max: 2, step: 0.01 },
        [A.Extreme]: { min: 0.1, max: 10, step: 0.1 },
        [A.Off]: { min: 0, max: 100, step: 1 },
      };
      let O = (_ = class extends s.Component {
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
              eFovScaleFormat: H.Default,
              bShowRefreshRateOptions: null,
              nPreferredRefreshRate: null,
              eSmoothingMode: null,
              disableAsyncReprojection: null,
              bShowThrottleOptions: null,
              nFramesToThrottle: null,
              nAdditionalPrediction: null,
              eWorldScaleRange: A.Off,
              flWorldScaleMultiplier: null,
            });
        }
        componentDidMount() {
          this.m_routeObservingAutorunDisposer = (0, i.fm)(() => {
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
              u.fD.Hmd_SupportsAppThrottling_Bool,
            ) &&
            !(
              !VRHTML.VRProperties.GetBoolProperty(
                "/user/head",
                u.fD.HasDriverDirectModeComponent_Bool,
              ) && this.state.disableAsyncReprojection
            )
          );
        }
        get enableMotionSmoothingOverrideSettings() {
          if (!VRHTML) return !1;
          if (
            VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              u.fD.HasDriverDirectModeComponent_Bool,
            )
          ) {
            return (
              "oculus" !==
              VRHTML.VRProperties.GetStringProperty(
                "/user/head",
                u.fD.TrackingSystemName_String,
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
              u.fD.HasDriverDirectModeComponent_Bool,
            )
          );
        }
        get worldScaleRangeMin() {
          return D[this.state.eWorldScaleRange].min;
        }
        get worldScaleRangeMax() {
          return D[this.state.eWorldScaleRange].max;
        }
        get worldScaleRangeStep() {
          return D[this.state.eWorldScaleRange].step;
        }
        onApplicationDropdownChange(e) {
          this.setState((t, n) => {
            var r;
            return t.currentApp === e
              ? null
              : (e && this.fetchAppState(e.key),
                l.HR.setRoutePageSectionParams([
                  null !== (r = null == e ? void 0 : e.key) && void 0 !== r
                    ? r
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
          var t, n, r;
          if (void 0 !== e.resolution) {
            let s = null !== (t = e.throttling) && void 0 !== t ? t : 0,
              i = null !== (n = e.prediction) && void 0 !== n ? n : 0,
              a = A.Off;
            1 !== e.worldscale &&
              (a =
                Math.round(1e3 * e.worldscale) % 10 != 0
                  ? A.Fine
                  : e.worldscale < D[A.Normal].min ||
                      e.worldscale > D[A.Normal].max
                    ? A.Extreme
                    : A.Normal),
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
                  null !== (r = e.fovscale_format) && void 0 !== r
                    ? r
                    : H.Default,
                bShowRefreshRateOptions: e.preferred_refresh_rate > 0,
                nPreferredRefreshRate: e.preferred_refresh_rate,
                eSmoothingMode: e.smoothing,
                disableAsyncReprojection: e.disable_async_reprojection,
                bShowThrottleOptions:
                  void 0 !== e.throttling || void 0 !== e.prediction,
                nFramesToThrottle: s,
                nAdditionalPrediction: i - s,
                eWorldScaleRange: a,
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
            let n = {};
            (n[e] = t), l.HR.SetAppSettings(this.state.currentApp.key, n);
          }
        }
        get computedResolution() {
          let e = l.HR.settings.get(h.wt)
            ? l.HR.settings.get(h.w5)
            : l.HR.settings.get(h.j5);
          if (null == e || null == this.state.nResolutionMultiplier) return "";
          let t = l.HR.SliderposToSupersample(this.state.nResolutionMultiplier),
            n = t;
          switch (this.state.eFovScaleFormat) {
            case H.Letterbox:
              n *= this.state.nFovScaleMultiplier;
              break;
            case H.Advanced:
              const e =
                  this.state.nFovScaleMultiplier +
                  this.state.nFovScaleMultiplierInner,
                r =
                  this.state.nFovScaleMultiplierUpper +
                  this.state.nFovScaleMultiplierLower;
              e < r ? (t *= e / r) : (n *= r / e);
          }
          if (
            l.HR.systemInfo &&
            null != l.HR.systemInfo.render_target_size.width &&
            0 != l.HR.systemInfo.render_target_size.height
          ) {
            let r = Math.max(
                512,
                Math.floor(
                  l.HR.systemInfo.render_target_size.width * Math.sqrt(e * t) +
                    0.5,
                ),
              ),
              s = Math.max(
                512,
                Math.floor(
                  l.HR.systemInfo.render_target_size.height * Math.sqrt(e * n) +
                    0.5,
                ),
              );
            const i = l.HR.settings.get(h.rG);
            return (
              Math.max(r, s) > i &&
                (r > s
                  ? ((s = (i * s) / r), (r = i))
                  : ((r = (i * r) / s), (s = i))),
              (r = 4 * Math.trunc(r / 4)),
              (s = 4 * Math.trunc(s / 4)),
              (0, o.we)("#Settings_Advanced_Supersampling_WidthByHeight", r, s)
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
          var t, n;
          if (
            (this.setState({ bShowThrottleOptions: e }),
            this.setAppState("override_throttling", e),
            e)
          ) {
            let e =
                null !== (t = this.state.nFramesToThrottle) && void 0 !== t
                  ? t
                  : 0,
              r =
                null !== (n = this.state.nAdditionalPrediction) && void 0 !== n
                  ? n
                  : 0;
            this.setAppState("throttling", e),
              this.setAppState("prediction", e + r);
          }
        }
        onThrottleSliderChange(e) {
          var t;
          this.setState({ nFramesToThrottle: e }),
            this.setAppState("throttling", e);
          let n =
            null !== (t = this.state.nAdditionalPrediction) && void 0 !== t
              ? t
              : 0;
          this.setAppState("prediction", e + n);
        }
        onPredictionSliderChange(e) {
          var t;
          this.setState({ nAdditionalPrediction: e });
          let n =
            null !== (t = this.state.nFramesToThrottle) && void 0 !== t ? t : 0;
          this.setAppState("prediction", e + n);
        }
        onWorldScaleRangeChange(e) {
          this.setState({
            eWorldScaleRange: e,
            flWorldScaleMultiplier: Math.max(
              D[e].min,
              Math.min(D[e].max, this.state.flWorldScaleMultiplier),
            ),
          }),
            this.setAppState(
              "worldscale",
              e == A.Off ? 1 : this.state.flWorldScaleMultiplier,
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
          this.state.eSmoothingMode == k.ForceAlwaysOn &&
            (t = s.createElement(
              s.Fragment,
              null,
              (0, o.we)(
                "#Settings_PerApplication_MotionSmoothing_AlwaysOn_Desc",
              ),
            ));
          const n = this.state.eFovScaleFormat == H.Advanced;
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(
              c.YO,
              { className: "SettingsItem" },
              s.createElement(
                d.$,
                { className: "ButtonControl", onClick: this.show },
                (0, o.we)("#Settings_PerApplication_VideoSettings"),
              ),
            ),
            this.shouldShowModal &&
              s.createElement(
                c.bB,
                {
                  className: "AppVideoModal",
                  onDismissRequested: this.close,
                  header: s.createElement(
                    s.Fragment,
                    null,
                    s.createElement(
                      "h1",
                      null,
                      (0, o.we)("#Settings_ManageVideoSettingsForApp"),
                    ),
                    s.createElement(c.mi, {
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
                  footer: s.createElement(c.tR, {
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
                      s.createElement(c.xS, {
                        label: (0, o.we)(
                          "#Settings_Advanced_MotionSmoothing_Header",
                        ),
                        items: [
                          {
                            value: k.UseGlobal,
                            sLabel: (0, o.we)(
                              "#Settings_PerApplication_MotionSmoothing_Global",
                            ),
                          },
                          {
                            value: k.ForceOn,
                            sLabel: (0, o.we)(
                              "#Settings_PerApplication_MotionSmoothing_On",
                            ),
                          },
                          {
                            value: k.ForceOff,
                            sLabel: (0, o.we)(
                              "#Settings_PerApplication_MotionSmoothing_Off",
                            ),
                          },
                          {
                            value: k.ForceAlwaysOn,
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
                      s.createElement(
                        c.YO,
                        {
                          title: (0, o.we)(
                            "#Settings_PerApplication_AppResHeader",
                            (0, o.we)("#Settings_SectionTitle_General"),
                          ),
                          className: "SettingsItem",
                        },
                        s.createElement(
                          "div",
                          { className: "Label" },
                          (0, o.we)("#Settings_PerApplication_AppResTitle"),
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
                          s.createElement(c.tE, {
                            min: l.mO,
                            max: l.aJ,
                            step: l.kP,
                            value: this.state.nResolutionMultiplier,
                            detents: [1],
                            onChange: this.onResolutionSliderChange,
                          }),
                          s.createElement(
                            c.YO,
                            { className: "SettingsItem" },
                            s.createElement(f, null),
                          ),
                        ),
                      ),
                    null !== this.state.nFovScaleMultiplier &&
                      (l.HR.showAdvancedSettings ||
                        (this.m_initialAppState &&
                          1 != this.m_initialAppState.nFovScaleMultiplier)) &&
                      s.createElement(
                        c.YO,
                        {
                          title: (0, o.we)(
                            "#Settings_PerApplication_FovScale_Description",
                          ),
                          className: "SettingsItem Advanced",
                        },
                        s.createElement(
                          "div",
                          { className: "Label" },
                          (0, o.we)("#Settings_PerApplication_FovScale_Label"),
                        ),
                        s.createElement(
                          "div",
                          { className: "SubsectionStem Label Resolution" },
                          s.createElement(
                            "div",
                            { className: "Dimensions" },
                            (0, o.we)(
                              "#Settings_PerApplication_FovScale_Multiplier",
                            ),
                          ),
                          !n &&
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
                          s.createElement(c.tE, {
                            min: 0.5,
                            max: 1,
                            step: 0.01,
                            value: this.state.nFovScaleMultiplier,
                            valueStyleVariant: n ? v.Te.OnHandle : void 0,
                            renderValue: n
                              ? (e) =>
                                  Math.round(
                                    100 * this.state.nFovScaleMultiplier,
                                  ).toString() + "%"
                              : void 0,
                            onChange: this.onFovScaleSliderChange,
                            label: n ? "Outer" : void 0,
                          }),
                          n &&
                            s.createElement(
                              s.Fragment,
                              null,
                              s.createElement(c.tE, {
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
                              s.createElement(c.tE, {
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
                              s.createElement(c.tE, {
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
                          (1 != this.state.nFovScaleMultiplier || n) &&
                            s.createElement(c.xS, {
                              items: [
                                { value: H.Default, sLabel: "Default" },
                                { value: H.Letterbox, sLabel: "Letterbox" },
                                { value: H.Advanced, sLabel: "Advanced" },
                              ],
                              value: this.state.eFovScaleFormat,
                              onChange: this.onFovScaleFormatChange,
                            }),
                        ),
                      ),
                    null !== this.state.flWorldScaleMultiplier &&
                      (l.HR.showAdvancedSettings ||
                        (this.m_initialAppState &&
                          this.m_initialAppState.eWorldScaleRange !== A.Off)) &&
                      s.createElement(
                        c.YO,
                        {
                          title: (0, o.we)(
                            "#Settings_PerApplication_WorldScale_Description",
                          ),
                          className: "SettingsItem Advanced",
                        },
                        s.createElement(
                          "div",
                          { className: "Label" },
                          (0, o.we)(
                            "#Settings_PerApplication_WorldScale_Label",
                          ),
                        ),
                        s.createElement(c.xS, {
                          items: [
                            {
                              value: A.Off,
                              sLabel: (0, o.we)(
                                "#Settings_PerApplication_WorldScale_Off",
                              ),
                            },
                            {
                              value: A.Fine,
                              sLabel: (0, o.we)(
                                "#Settings_PerApplication_WorldScale_Fine",
                              ),
                            },
                            {
                              value: A.Normal,
                              sLabel: (0, o.we)(
                                "#Settings_PerApplication_WorldScale_Normal",
                              ),
                            },
                            {
                              value: A.Extreme,
                              sLabel: (0, o.we)(
                                "#Settings_PerApplication_WorldScale_Extreme",
                              ),
                            },
                          ],
                          value: this.state.eWorldScaleRange,
                          onChange: this.onWorldScaleRangeChange,
                        }),
                      ),
                    this.state.eWorldScaleRange !== A.Off &&
                      s.createElement(
                        c.YO,
                        { className: "SettingsItem Advanced" },
                        s.createElement("div", { className: "Label" }),
                        s.createElement(
                          "div",
                          { className: "SubsectionStem Label Resolution" },
                          s.createElement(
                            "div",
                            { className: "Dimensions" },
                            (0, o.we)(
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
                          s.createElement(c.tE, {
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
                      s.createElement(
                        s.Fragment,
                        null,
                        null !== this.state.bShowRefreshRateOptions &&
                          s.createElement(c.Al, {
                            label: (0, o.we)(
                              "#Settings_PerApplication_RefreshRateOverride_Checkbox",
                            ),
                            title: (0, o.we)(
                              "#Settings_Perapplication_RefreshRateOverride_Description",
                            ),
                            value: this.state.bShowRefreshRateOptions,
                            onChange: this.onRefreshRateOverrideChange,
                            onSubsection: s.createElement(c.ym, {
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
                      s.createElement(
                        c.YO,
                        {
                          title: (0, o.we)(
                            "#Settings_PerApplication_Reprojection_Description",
                          ),
                          className: "SettingsItem Advanced",
                        },
                        s.createElement(c.Al, {
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
                      s.createElement(
                        c.YO,
                        {
                          title: (0, o.we)(
                            "#Settings_PerApplication_ThrottlingOverride_Description",
                          ),
                          className: "SettingsItem Advanced",
                        },
                        s.createElement(
                          "div",
                          { className: "Label" },
                          (0, o.we)(
                            "#Settings_PerApplication_ThrottlingOverride_Label",
                          ),
                        ),
                        s.createElement(c.Al, {
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
                          s.createElement(
                            "div",
                            { className: "Subsection WithStem" },
                            s.createElement(
                              "div",
                              { className: "Label" },
                              (0, o.we)(
                                "#Settings_PerApplication_ThrottlingOverride_Framerate",
                              ),
                            ),
                            s.createElement(c.tE, {
                              min: 5,
                              max: 0,
                              step: 1,
                              value: this.state.nFramesToThrottle,
                              valueStyleVariant: v.Te.OnHandle,
                              renderValue: (e) =>
                                (this.currentRefreshRate / (e + 1)).toFixed(1),
                              onChange: this.onThrottleSliderChange,
                            }),
                            s.createElement(
                              "div",
                              { className: "Label" },
                              (0, o.we)(
                                "#Settings_PerApplication_ThrottlingOverride_Prediction",
                              ),
                            ),
                            s.createElement(c.tE, {
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
                  s.createElement(
                    "div",
                    { className: "ModalPlaceholder" },
                    (0, o.we)("#Settings_PerApplication_ChooseApplication"),
                  ),
              ),
          );
        }
      });
      (O.PAGE_SECTION = "appvideosettings"),
        (0, r.Cg)([i.EW], O.prototype, "shouldShowModal", null),
        (0, r.Cg)([i.EW], O.prototype, "currentRouteAppKey", null),
        (0, r.Cg)([i.EW], O.prototype, "enableThrottleOverrideSettings", null),
        (0, r.Cg)(
          [i.EW],
          O.prototype,
          "enableMotionSmoothingOverrideSettings",
          null,
        ),
        (0, r.Cg)(
          [i.EW],
          O.prototype,
          "enableLegacyReprojectionSettings",
          null,
        ),
        (0, r.Cg)([i.EW], O.prototype, "worldScaleRangeMin", null),
        (0, r.Cg)([i.EW], O.prototype, "worldScaleRangeMax", null),
        (0, r.Cg)([i.EW], O.prototype, "worldScaleRangeStep", null),
        (0, r.Cg)([a.o], O.prototype, "onApplicationDropdownChange", null),
        (0, r.Cg)([a.o], O.prototype, "updateAppState", null),
        (0, r.Cg)([i.EW], O.prototype, "computedResolution", null),
        (0, r.Cg)([a.o], O.prototype, "onResolutionSliderChange", null),
        (0, r.Cg)([a.o], O.prototype, "onFovScaleSliderChange", null),
        (0, r.Cg)([a.o], O.prototype, "onFovScaleSliderChangeInner", null),
        (0, r.Cg)([a.o], O.prototype, "onFovScaleSliderChangeUpper", null),
        (0, r.Cg)([a.o], O.prototype, "onFovScaleSliderChangeLower", null),
        (0, r.Cg)([a.o], O.prototype, "onFovScaleFormatChange", null),
        (0, r.Cg)([a.o], O.prototype, "onMotionSmoothChange", null),
        (0, r.Cg)([a.o], O.prototype, "onRefreshRateOverrideChange", null),
        (0, r.Cg)([a.o], O.prototype, "onRefreshRateChange", null),
        (0, r.Cg)([a.o], O.prototype, "onDisableAsyncReprojection", null),
        (0, r.Cg)([a.o], O.prototype, "onShowThrottleOptions", null),
        (0, r.Cg)([a.o], O.prototype, "onThrottleSliderChange", null),
        (0, r.Cg)([a.o], O.prototype, "onPredictionSliderChange", null),
        (0, r.Cg)([a.o], O.prototype, "onWorldScaleRangeChange", null),
        (0, r.Cg)(
          [a.o],
          O.prototype,
          "onWorldScaleMultiplierSliderChange",
          null,
        ),
        (0, r.Cg)([a.o], O.prototype, "resetAppToDefaults", null),
        (0, r.Cg)([a.o], O.prototype, "show", null),
        (0, r.Cg)([a.o], O.prototype, "close", null),
        (0, r.Cg)([i.EW], O.prototype, "allowPerAppRefreshRate", null),
        (0, r.Cg)([i.EW], O.prototype, "currentRefreshRate", null),
        (O = _ = (0, r.Cg)([p.PA], O));
      let L = class extends c.yO {
        render() {
          if (!this.props.active) return null;
          const e = VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              u.fD.Hmd_SupportsHDCP14LegacyCompat_Bool,
            ),
            t = VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              u.fD.Hmd_SupportsDisplayPortTrainingMode_Bool,
            ),
            n = VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              u.fD.Hmd_SupportsGpuBusMonitoring_Bool,
            );
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(b, null),
            s.createElement(M, null),
            s.createElement(T, null),
            s.createElement(V, null),
            s.createElement(w, null),
            s.createElement(c.Al, {
              name: "/settings/steamvr/doNotFadeToGrid",
              label: (0, o.we)("#Settings_FadeToGrid"),
              swapOnOff: !0,
            }),
            s.createElement(O, null),
            !1,
            s.createElement(c.Al, {
              name: "/settings/steamvr/allowSupersampleFiltering",
              label: (0, o.we)("#Settings_Advanced_AllowSupersampleFiltering"),
              visibility: c.Z3.Advanced,
            }),
            s.createElement(E, null),
            e &&
              s.createElement(c.Al, {
                name: "/settings/steamvr/hdcp14legacyCompatibility",
                label: (0, o.we)("#Settings_Video_HDCP14LegacyCompatibility"),
                visibility: c.Z3.Advanced,
                requiresRestart: !0,
              }),
            t &&
              s.createElement(c.xS, {
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
            s.createElement(C, { visibility: c.Z3.Advanced }),
            s.createElement(c.Al, {
              name: "/settings/power/pauseCompositorOnStandby",
              label: (0, o.we)("#Settings_PauseOnStandby"),
              visibility: c.Z3.Advanced,
            }),
            n &&
              s.createElement(c.Al, {
                name: "/settings/perfcheck/gpuBusMonitoring",
                label: (0, o.we)("#Settings_GpuBusMonitoring"),
                visibility: c.Z3.Advanced,
              }),
            this.makeResetToDefaultButton(),
          );
        }
      };
      (L.Name = "video_settings"), (L = (0, r.Cg)([p.PA], L));
    },
    8472: (e, t, n) => {
      "use strict";
      n.d(t, { u: () => a });
      var r = n(1635),
        s = n(3236),
        i = n(3496);
      class a extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "audiosource";
        }
        buildNode(e, t) {
          const n = this.createSgNode(t);
          return (
            (n.properties.name = this.props.name),
            (n.properties.channel = this.props.channel),
            (n.properties.debug = this.props.debug),
            [e, n]
          );
        }
      }
      (0, r.Cg)([s.o], a.prototype, "buildNode", null);
    },
    1988: (e, t, n) => {
      "use strict";
      var r = n(1635),
        s = n(3496),
        i = n(3236);
      class a extends s._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "context";
        }
        buildNode(e, t) {
          const n = this.createSgNode(t);
          return (n.properties.construct = this.props.construct), [e, n];
        }
      }
      (0, r.Cg)([i.o], a.prototype, "buildNode", null);
    },
    6417: (e, t, n) => {
      "use strict";
      n.d(t, { $: () => a });
      var r = n(1635),
        s = n(3496),
        i = n(3236);
      class a extends s._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "dashboardtransform";
        }
        buildNode(e, t) {
          var n, r;
          const s = this.createSgNode(t);
          return (
            (s.properties.continuous_relatch =
              null !== (n = this.props.bContinuousRelatch) &&
              void 0 !== n &&
              n),
            (s.properties.free_dashboard_transform =
              null !== (r = this.props.bFreeDashboardTransform) &&
              void 0 !== r &&
              r),
            [e, s]
          );
        }
      }
      (0, r.Cg)([i.o], a.prototype, "buildNode", null);
    },
    2303: (e, t, n) => {
      "use strict";
      n.d(t, { n: () => i });
      var r = n(6540),
        s = n(3496);
      class i extends s._J {
        constructor(e) {
          super(e);
        }
        internalRender() {
          let e = (0, s.j_)(this.props.transform.translation),
            t = (0, s.hi)(this.props.transform.rotation),
            n = (0, s.j_)(this.props.transform.scale);
          return r.createElement(
            "vsg-grab-transform",
            {
              "parent-path": this.props.parent_path,
              translation: e,
              rotation: t,
              scale: n,
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
            },
            this.props.children,
          );
        }
      }
    },
    2527: (e, t, n) => {
      "use strict";
      n(6540);
      var r = n(3496);
      r._J;
    },
    6847: (e, t, n) => {
      "use strict";
      n.d(t, { l: () => a });
      var r = n(1635),
        s = n(3496),
        i = n(3236);
      class a extends s._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "ltcquad";
        }
        buildNode(e, t) {
          const n = this.createSgNode(t);
          if (
            ((n.properties.width = this.props.width),
            (n.properties.height = this.props.height),
            (n.properties["target-id"] = this.props.target_id),
            (n.properties["near-z"] = this.props["near-z"]),
            (n.properties["far-z"] = this.props["far-z"]),
            (n.properties.debug = this.props.debug),
            this.props.diffuse)
          ) {
            let e = this.props.diffuse;
            (n.properties["diffuse-resolution"] = e.resolution),
              (n.properties["diffuse-size"] = e.size);
          }
          if (this.props.specular) {
            let e = this.props.specular;
            if ("string" == typeof e.color) n.properties.color = e.color;
            else {
              let t = (0, s.RH)(e.color, { r: 0, g: 0, b: 0 });
              n.properties.color = [t.r, t.g, t.b];
            }
          }
          return [e, n];
        }
      }
      (0, r.Cg)([i.o], a.prototype, "buildNode", null);
    },
    6186: (e, t, n) => {
      "use strict";
      n.d(t, { H: () => l, I: () => o });
      var r = n(1635),
        s = n(3496),
        i = n(3236),
        a = n(5723);
      class o extends s._J {
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
      (0, r.Cg)([i.o], o.prototype, "buildNode", null);
      class l extends s._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "mountedscenegraph";
        }
        buildNode(e, t) {
          const n = this.createSgNode(t);
          return (
            (n.properties.mountable_id = (0, a.bl)(this.props.mountedId)),
            this.props.fDashboardScale &&
              (n.properties.dashboard_scale = this.props.fDashboardScale),
            [e, n]
          );
        }
      }
      (0, r.Cg)([i.o], l.prototype, "buildNode", null);
    },
    5830: (e, t, n) => {
      "use strict";
      n.d(t, { Y: () => a });
      var r = n(1635),
        s = n(3496),
        i = n(3236);
      class a extends s._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "opacity";
        }
        buildNode(e, t) {
          const n = this.createSgNode(t);
          return (n.properties.opacity = (0, s.kJ)(this.props.value)), [e, n];
        }
      }
      (0, r.Cg)([i.o], a.prototype, "buildNode", null);
    },
    7350: (e, t, n) => {
      "use strict";
      n.d(t, { V: () => r, a: () => l });
      var r,
        s = n(1635),
        i = n(3496),
        a = n(3236),
        o = n(5723);
      !(function (e) {
        (e[(e.None = 0)] = "None"), (e[(e.Backface = 1)] = "Backface");
      })(r || (r = {}));
      class l extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "rendermodel";
        }
        buildNode(e, t) {
          const n = this.createSgNode(t);
          if (
            ((n.properties.source = this.props.source),
            (n.properties["texture-id"] = (0, o.bl)(this.props["texture-id"])),
            (n.properties["input-path"] = this.props["input-path"]),
            this.props.fresnel)
          ) {
            let e = this.props.fresnel;
            if ("string" == typeof e.color) n.properties.color = e.color;
            else {
              let t = (0, i.RH)(e.color, { r: 0, g: 0, b: 0 });
              n.properties.color = [t.r, t.g, t.b];
            }
            (n.properties.opacity = e.opacity ? e.opacity : 1),
              (n.properties.strength = e.strength ? e.strength : 1);
          }
          return (
            (n.properties.wireframe = this.props.wireframe),
            (n.properties.solid = this.props.solid),
            (n.properties.culling = this.props.culling),
            (n.properties.stencil_mask = this.props.stencil_mask),
            (n.properties["no-depth-write"] = this.props["no-depth-write"]),
            (n.properties["no-depth-test"] = this.props["no-depth-test"]),
            [e, n]
          );
        }
      }
      (0, s.Cg)([a.o], l.prototype, "buildNode", null);
    },
    5459: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => a });
      var r = n(1635),
        s = n(3496),
        i = n(3236);
      class a extends s._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "reparent-to-panel";
        }
        buildNode(e, t) {
          const n = this.createSgNode(t),
            r = Object.assign(Object.assign({}, e), {
              bInsideReparentedPanel: !0,
              currentPanel: null,
            });
          return (
            this.props.parent_overlay_key &&
              (n.properties["parent-overlay-key"] =
                this.props.parent_overlay_key),
            [r, n]
          );
        }
      }
      (0, r.Cg)([i.o], a.prototype, "buildNode", null);
    },
    8715: (e, t, n) => {
      "use strict";
      n.d(t, { L: () => a });
      var r = n(1635),
        s = n(3496),
        i = n(3236);
      class a extends s._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "resize-handle";
        }
        buildNode(e, t) {
          const n = this.createSgNode(t);
          return (
            (n.properties["target-id"] = this.props.target_id),
            (n.properties["is-active"] = this.props.is_active),
            (n.properties["min-target-scale"] = this.props.min_target_scale),
            (n.properties["max-target-scale"] = this.props.max_target_scale),
            (n.properties.displacement = this.props.displacement),
            [e, n]
          );
        }
      }
      (0, r.Cg)([i.o], a.prototype, "buildNode", null);
    },
    3496: (e, t, n) => {
      "use strict";
      n.d(t, {
        Hm: () => c,
        PG: () => a,
        RH: () => l,
        UM: () => h,
        Wi: () => o,
        XI: () => p,
        _J: () => g,
        hi: () => u,
        j_: () => d,
        kJ: () => m,
      });
      var r = n(6540),
        s = n(3725),
        i = n(5723);
      function a(e, t) {
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
      function d(e) {
        var t;
        return null ===
          (t = (function (e) {
            if (e) return [e.x, e.y, e.z];
          })(e)) || void 0 === t
          ? void 0
          : t.join(" ");
      }
      function u(e) {
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
      class g extends r.Component {
        constructor(e) {
          var t;
          super(e),
            (this.m_domRef = r.createRef()),
            (this.m_buildNodeOverride = null),
            (this.m_SGID =
              null !==
                (t =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.NextSGID()) && void 0 !== t
                ? t
                : s._E);
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
        render() {
          return r.cloneElement(this.internalRender(), {
            id: this.props.id,
            "vsg-type": this.getNodeType(),
            sgid: this.m_SGID,
            ref: this.m_domRef,
          });
        }
        internalRender() {
          return this.m_buildNodeOverride
            ? r.createElement("vsg-node", null, this.props.children)
            : null;
        }
      }
    },
    5723: (e, t, n) => {
      "use strict";
      n.d(t, {
        Em: () => V,
        Lx: () => T,
        Oe: () => w,
        Tu: () => u,
        X4: () => p,
        bl: () => M,
        my: () => k,
        nX: () => C,
        w5: () => E,
      });
      var r = n(1635),
        s = n(2824);
      function i(e, t) {
        let n = e.getAttribute(t);
        if (n && n.length > 0) {
          if ("undefined" == n) return;
          let e = [];
          for (let t of n.split(" ")) 0 != t.length && e.push(parseFloat(t));
          if (e.length > 0) return e;
        }
      }
      function a(e, t) {
        let n = e.getAttribute(t);
        if (n && n.length > 0) return parseFloat(n);
      }
      function o(e, t) {
        let n = e.getAttribute(t);
        if (n && n.length > 0) return parseInt(n);
      }
      function l(e, t) {
        let n = e.getAttribute(t);
        if (n && n.length > 0)
          return (
            "true" == n ||
            (n.length > 0 && 0 != parseInt(n) && !isNaN(parseInt(n)))
          );
      }
      function c(e, t) {
        let n = e.getAttribute(t);
        if (n && n.length > 0) return n;
      }
      function d(e, t) {
        return M(c(e, t));
      }
      function u(e, t) {
        let n = { type: e, properties: {} };
        return (
          t.id && (n.properties.id = M(t.id)),
          (n.properties.sgid = o(t, "sgid")),
          n
        );
      }
      function p() {
        return null === VRHTML || void 0 === VRHTML
          ? void 0
          : VRHTML.VROverlay.ThisOverlayHandle();
      }
      function m(e, t) {
        let [n, r] = (function (e, t) {
            let n = t.buildNode;
            if (n) return n(e, t);
            let r = Object.assign({}, e),
              s = null;
            switch (t.nodeName.toUpperCase()) {
              case "VSG-TRANSFORM":
                (s = u("transform", t)),
                  (s.properties.translation = i(t, "translation")),
                  (s.properties.rotation = i(t, "rotation")),
                  (s.properties.scale = i(t, "scale")),
                  (s.properties["curvature-pitch"] = a(t, "curvature-pitch")),
                  (s.properties["transform-path"] = c(t, "transform-path")),
                  (s.properties["projection-constraint"] = o(
                    t,
                    "projection-constraint",
                  )),
                  (s.properties["invert-parent-panel-pitch"] = l(
                    t,
                    "invert-parent-panel-pitch",
                  )),
                  (s.properties["ignore-parent-scale"] = l(
                    t,
                    "ignore-parent-scale",
                  )),
                  (s.properties["parent-path"] = c(t, "parent-path")),
                  (s.properties["parent-origin"] = c(t, "parent-origin")),
                  (s.properties["parent-id"] = d(t, "parent-id"));
                break;
              case "VSG-TRACKING-STATE-VISIBILITY":
                (s = u("trackingstatevisibility", t)),
                  (s.properties["visible-0dof"] = l(t, "visible-0dof")),
                  (s.properties["visible-3dof"] = l(t, "visible-3dof")),
                  (s.properties["visible-6dof"] = l(t, "visible-6dof"));
                break;
              case "VSG-ELASTIC-HEAD-TRANSFORM":
                (s = u("elasticheadtransform", t)),
                  (s.properties["start-angle-threshold"] = a(
                    t,
                    "start-angle-threshold",
                  )),
                  (s.properties["stop-angle-threshold"] = a(
                    t,
                    "stop-angle-threshold",
                  )),
                  (s.properties["ease-in-time"] = a(t, "ease-in-time")),
                  (s.properties["ease-in-power"] = a(t, "ease-in-power")),
                  (s.properties["ease-out-angle-threshold"] = a(
                    t,
                    "ease-out-angle-threshold",
                  )),
                  (s.properties["ease-out-power"] = a(t, "ease-out-power")),
                  (s.properties["min-angular-velocity"] = a(
                    t,
                    "min-angular-velocity",
                  )),
                  (s.properties["max-angular-velocity"] = a(
                    t,
                    "max-angular-velocity",
                  )),
                  (s.properties["lock-to-horizon"] = l(t, "lock-to-horizon")),
                  (s.properties["translation-behavior"] = o(
                    t,
                    "translation-behavior",
                  ));
                break;
              case "VSG-LINE":
                (s = u("line", t)),
                  (s.properties["target-id"] = d(t, "target-id")),
                  (s.properties.thickness = a(t, "thickness")),
                  (s.properties["start-buffer"] = a(t, "start-buffer")),
                  (s.properties["end-buffer"] = a(t, "end-buffer"));
                break;
              case "VSG-LINE-CONSTRAINED-TRANSFORM":
                (s = u("line-constrained-transform", t)),
                  (s.properties["target-id"] = d(t, "target-id")),
                  (s.properties["source-id"] = d(t, "source-id")),
                  (s.properties["source-distance"] = a(t, "source-distance")),
                  (s.properties["target-limit"] = a(t, "target-limit"));
                break;
              case "VSG-CALLOUT-TRANSFORM":
                (s = u("callout-transform", t)),
                  (s.properties.offset = i(t, "offset"));
                break;
              case "VSG-HEAD-FACING-TRANSFORM":
                s = u("head-facing-transform", t);
                break;
              case "VSG-PIN-TO-VIEW-TRANSFORM":
                (s = u("pin-to-view-transform", t)),
                  (s.properties["offscreen-z-depth"] = a(
                    t,
                    "offscreen-z-depth",
                  )),
                  (s.properties["off-axis-limit"] = a(t, "off-axis-limit")),
                  (s.properties["transition-limit"] = a(t, "transition-limit"));
                break;
              case "VSG-GRAB-TRANSFORM":
                (s = u("grab-transform", t)),
                  (s.properties["parent-path"] = c(t, "parent-path")),
                  (s.properties.translation = i(t, "translation")),
                  (s.properties.rotation = i(t, "rotation")),
                  (s.properties.scale = i(t, "scale")),
                  (s.properties["should-head-align"] = l(
                    t,
                    "should-head-align",
                  )),
                  (s.properties["stop-distance"] = a(t, "stop-distance")),
                  (s.properties["start-angle"] = a(t, "start-angle")),
                  (s.properties["start-quat-difference"] = a(
                    t,
                    "start-quat-difference",
                  )),
                  (s.properties["stop-quat-difference"] = a(
                    t,
                    "stop-quat-difference",
                  )),
                  (s.properties["scale-margin"] = a(t, "scale-margin")),
                  (s.properties["lerp-speed"] = a(t, "lerp-speed")),
                  (s.properties["min-distance"] = a(t, "min-distance")),
                  (s.properties["max-distance"] = a(t, "max-distance")),
                  (s.properties["one-to-one-radius"] = a(
                    t,
                    "one-to-one-radius",
                  )),
                  (s.properties["max-x-squared-contribution"] = a(
                    t,
                    "max-x-squared-contribution",
                  )),
                  (s.properties["acceleration-factor-x-coefficient"] = a(
                    t,
                    "acceleration-factor-x-coefficient",
                  )),
                  (s.properties["acceleration-factor-x-squared-coefficient"] =
                    a(t, "acceleration-factor-x-squared-coefficient")),
                  (s.properties["acceleration-factor-scale-term"] = a(
                    t,
                    "acceleration-factor-scale-term",
                  ));
            }
            return [r, s];
          })(e, t),
          s = [];
        for (let e = 0; e < t.children.length; e++) {
          let r = t.children.item(e);
          if (r.children) {
            let e = m(n, r);
            e && (s = s.concat(e));
          }
        }
        return n.bShouldAbort
          ? null
          : r
            ? (s.length > 0 && (r.children = s), [r])
            : s.length > 0
              ? 1 == s.length
                ? s
                : [{ children: s }]
              : null;
      }
      let h,
        g,
        v,
        _,
        S = [],
        b = null,
        y = null,
        R = !0,
        f = null;
      function w(e, t, n) {
        (h = e),
          (g = t),
          (v = n),
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
        S.push(e), k();
      }
      function V() {
        _ = !0;
      }
      function k() {
        b ||
          (b = window.setTimeout(
            () =>
              (0, r.sH)(this, void 0, void 0, function* () {
                let e = document.body;
                g && (e = g);
                let t = {
                  type: "root",
                  rootproperties: {
                    relatchDashboardTransform: _,
                    allowDismissOnClick: R,
                    sceneColorCorrection: f,
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
                  (y = new s._n()),
                  yield y.Init("sg_mailbox", v));
                let n = {
                  type: "update_scene_graph",
                  owning_overlay_key: E(),
                  scene_graph: t,
                  retired_sgids: S,
                };
                y.SendMessage("vrcompositor_systemlayer", n),
                  (b = null),
                  (S = []),
                  (_ = !1);
              }),
            0,
          ));
      }
    },
    428: (e, t, n) => {
      "use strict";
      var r = n(1635),
        s = n(3496),
        i = n(3236);
      class a extends s._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "texture";
        }
        buildNode(e, t) {
          const n = this.createSgNode(t);
          return (
            (n.properties.id = this.props.id),
            (n.properties.source = this.props.source),
            [e, n]
          );
        }
      }
      (0, r.Cg)([i.o], a.prototype, "buildNode", null);
    },
    1230: (e, t, n) => {
      "use strict";
      n.d(t, { e: () => a });
      var r = n(1635),
        s = n(3496),
        i = n(3236);
      class a extends s._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return Array.isArray(this.props.color) && this.props.color.length > 1
            ? "tint-anim"
            : "tint";
        }
        buildNode(e, t) {
          const n = this.createSgNode(t);
          return (
            this.props.color
              ? "string" == typeof this.props.color
                ? (n.properties.color = this.props.color)
                : Array.isArray(this.props.color)
                  ? (this.props.color.length > 0 &&
                    "string" == typeof this.props.color[0]
                      ? (n.properties.color =
                          this.props.color.length > 1
                            ? this.props.color
                            : this.props.color[0])
                      : (n.properties.color = this.props.color
                          .map((e) => [e.r, e.g, e.b])
                          .reduce((e, t) => e.concat(t), [])),
                    (n.properties["animation-seconds"] =
                      this.props.animationSeconds))
                  : (n.properties.color = [
                      this.props.color.r,
                      this.props.color.g,
                      this.props.color.b,
                    ])
              : (n.properties.color = [1, 1, 1]),
            [e, n]
          );
        }
      }
      (0, r.Cg)([i.o], a.prototype, "buildNode", null);
    },
    4397: (e, t, n) => {
      "use strict";
      var r = n(1635),
        s = n(3496),
        i = n(3236);
      class a extends s._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "videocapturequad";
        }
        buildNode(e, t) {
          const n = this.createSgNode(t);
          return (
            (n.properties.width = this.props.width),
            (n.properties.height = this.props.height),
            (n.properties["target-id"] = this.props.target_id),
            (n.properties["near-z"] = this.props["near-z"]),
            (n.properties["far-z"] = this.props["far-z"]),
            (n.properties.debug = this.props.debug),
            [e, n]
          );
        }
      }
      (0, r.Cg)([i.o], a.prototype, "buildNode", null);
    },
    3389: (e, t, n) => {
      "use strict";
      n.d(t, { C: () => i });
      var r = n(1635),
        s = n(2824);
      class i {
        constructor() {
          (this.m_mailbox = new s._n()),
            this.m_mailbox.Init("sgtransformcache");
        }
        static getInstance() {
          return i.instance || (i.instance = new i()), i.instance;
        }
        requestSGTransform(e, t = 0) {
          return new Promise((n, i) =>
            (0, r.sH)(this, void 0, void 0, function* () {
              let r = { type: "transform_request", id: e, flPushDistance: t },
                a = yield this.m_mailbox.SendMessageAndWaitForResponse(
                  s.pg,
                  r,
                  "transform_response",
                );
              a.id == e && a.transform
                ? n(a.transform)
                : i("requestSGTransform failed");
            }),
          );
        }
      }
    },
    6138: (e, t, n) => {
      "use strict";
      n.d(t, { $: () => d, W: () => u });
      var r = n(1635),
        s = n(6540),
        i = n(3236),
        a = n(4963),
        o = n(6090),
        l = n(6189),
        c = n(1139);
      class d extends s.Component {
        constructor() {
          super(...arguments), (this.m_ref = s.createRef());
        }
        get elem() {
          return this.m_ref.current;
        }
        get disabled() {
          return !1 === this.props.enabled;
        }
        onMouseDown(e) {
          var t, n, r;
          null === (n = (t = this.props).onMouseDown) ||
            void 0 === n ||
            n.call(t, e),
            this.disabled ||
              a.u.Instance.playSound(
                null !== (r = this.props.pressSoundEffect) && void 0 !== r
                  ? r
                  : null,
              );
        }
        onMouseUp(e) {
          var t, n;
          null === (n = (t = this.props).onMouseUp) ||
            void 0 === n ||
            n.call(t, e);
        }
        onClick(e) {
          var t, n, r;
          this.disabled ||
            (null === (n = (t = this.props).onClick) ||
              void 0 === n ||
              n.call(t, e),
            u.temporarilySuppressSoundEffect(),
            a.u.Instance.playSound(
              null !== (r = this.props.releaseSoundEffect) && void 0 !== r
                ? r
                : a.j.ButtonClick,
            ));
        }
        onMouseEnter(e) {
          var t, n;
          null === (n = (t = this.props).onMouseEnter) ||
            void 0 === n ||
            n.call(t, e),
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
            s.cloneElement(s.createElement("div", e, this.props.children), {
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
      (0, r.Cg)([i.o], d.prototype, "onMouseDown", null),
        (0, r.Cg)([i.o], d.prototype, "onMouseUp", null),
        (0, r.Cg)([i.o], d.prototype, "onClick", null),
        (0, r.Cg)([i.o], d.prototype, "onMouseEnter", null),
        (0, r.Cg)([i.o], d.prototype, "onMouseLeave", null);
      class u extends s.Component {
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
          u.suppressingSoundEffect ||
            (window.clearTimeout(u.s_nPlaySoundEffectTimeout),
            (u.s_nPlaySoundEffectTimeout = window.setTimeout(
              u.playSoundEffect,
              u.k_nSoundEffectDelay,
            ))),
            this.props.onClick && this.props.onClick(e);
        }
        static endSoundEffectSuppression() {
          window.clearTimeout(this.s_nSuppressingSoundEffectsTimeout),
            (this.s_nSuppressingSoundEffectsTimeout = 0);
        }
        static playSoundEffect() {
          a.u.Instance.playSound(a.j.SurfaceClick);
        }
        render() {
          return s.cloneElement(
            s.createElement("div", this.props, this.props.children),
            { onClick: this.onClick },
          );
        }
      }
      (u.k_nSoundEffectSuppressionPeriod = 4),
        (u.k_nSoundEffectDelay = 2),
        (u.s_nSuppressingSoundEffectsTimeout = 0),
        (u.s_nPlaySoundEffectTimeout = 0),
        (0, r.Cg)([i.o], u.prototype, "onClick", null),
        (0, r.Cg)([i.o], u, "endSoundEffectSuppression", null),
        (0, r.Cg)([i.o], u, "playSoundEffect", null);
    },
    4493: (e, t, n) => {
      "use strict";
      n.d(t, { AN: () => v, Sr: () => r, ms: () => g });
      var r,
        s = n(1635),
        i = n(6540),
        a = n(6138),
        o = n(1139),
        l = n(3236),
        c = n(7813),
        d = n(3714),
        u = n(5615),
        p = n(6731),
        m = n(6575);
      !(function (e) {
        e[(e.Separator = 0)] = "Separator";
      })(r || (r = {}));
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
          return e === r.Separator
            ? i.createElement("div", {
                className: "Separator",
                key: "separator" + t,
              })
            : null;
        }
        renderDropdownValueItem(e) {
          return i.createElement(
            a.$,
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
          var t, n;
          this.props.onChange && this.props.onChange(e),
            null === (n = (t = this.props).onDismissRequested) ||
              void 0 === n ||
              n.call(t);
        }
        render() {
          return i.createElement(
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
            i.createElement(
              p.wM,
              {
                ref: this.m_refView,
                shouldDismissOnClickAnywhere: !0,
                shouldDismissOnClickInViewStack: !0,
                fadesViewsBelow: !1,
                onDismissRequested: this.props.onDismissRequested,
                className: (0, o.FH)("Dropdown", "Popover"),
              },
              i.createElement(
                u.M,
                { scrollDirection: u.D.Vertical, ref: this.m_refScrollPanel },
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
          var e, t, n, r;
          const s =
              null === (e = this.m_refView.current) || void 0 === e
                ? void 0
                : e.div,
            i =
              null === (t = this.m_refScrollPanel.current) || void 0 === t
                ? void 0
                : t.div;
          if (!s || !i) return;
          const a =
              null !==
                (r =
                  null === (n = this.props.buttonRef.current) || void 0 === n
                    ? void 0
                    : n.elem.clientWidth) && void 0 !== r
                ? r
                : 0,
            o = this.m_elemBoundingParent.getBoundingClientRect();
          (i.style.minWidth = a + "px"),
            (i.style.maxWidth = o.width - 2 * h.POPOVER_BOUNDS_MARGIN + "px"),
            (i.style.maxHeight = o.height - 2 * h.POPOVER_BOUNDS_MARGIN + "px");
          const l = this.props.buttonRef.current.elem.getBoundingClientRect();
          let c = l.left,
            d = l.top;
          const u = s.getBoundingClientRect(),
            p = this.m_elemBoundingParent.getBoundingClientRect(),
            m = p.left + h.POPOVER_BOUNDS_MARGIN,
            g = p.right - h.POPOVER_BOUNDS_MARGIN,
            v = p.top + h.POPOVER_BOUNDS_MARGIN,
            _ = p.bottom - h.POPOVER_BOUNDS_MARGIN;
          if (this.m_refSelectedButton.current) {
            d -=
              this.m_refSelectedButton.current.elem.getBoundingClientRect()
                .top - u.top;
          }
          const S = d;
          c < m && (c = m),
            c + u.width > g && (c = g - u.width),
            d < v && (d = v),
            d + u.height > _ && (d = _ - u.height),
            (c = Math.round(c)),
            (d = Math.round(d)),
            (s.scrollTop = d - S),
            (s.style.transform =
              "translateX(" + c + "px) translateY(" + d + "px)");
        }
      }
      (h.POPOVER_BOUNDS_MARGIN = 10),
        (0, s.Cg)([l.o], h.prototype, "renderDropdownItem", null),
        (0, s.Cg)([l.o], h.prototype, "renderDropdownSpecialItem", null),
        (0, s.Cg)([l.o], h.prototype, "renderDropdownValueItem", null),
        (0, s.Cg)([l.o], h.prototype, "setValue", null),
        (0, s.Cg)([l.o], h.prototype, "updateLayout", null);
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
                : (0, d.we)("#Settings_SelectAnOption"),
            n = e ? e.sLabel : t;
          return i.createElement(
            i.Fragment,
            null,
            i.createElement(
              a.$,
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
              i.createElement("span", { ref: this.m_scrollWatcher.ref }, n),
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
      (0, s.Cg)([l.o], g.prototype, "onParentScroll", null),
        (0, s.Cg)([c.EW], g.prototype, "value", null),
        (0, s.Cg)([c.EW], g.prototype, "selectedItem", null),
        (0, s.Cg)([l.o], g.prototype, "showDropdown", null),
        (0, s.Cg)([l.o], g.prototype, "hideDropdown", null);
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
      (0, s.Cg)([l.o], v.prototype, "onChange", null);
    },
    7600: (e, t, n) => {
      "use strict";
      n.d(t, { tH: () => a });
      var r = n(1635),
        s = n(6540),
        i = n(3236);
      class a extends s.Component {
        constructor(e) {
          super(e), (this.state = {}), (this.state.lastErrorKey = e.errorKey);
        }
        componentDidCatch(e, t) {
          console.warn(
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
          const { children: e, fallback: t, errorKey: n } = this.props,
            { error: r, identifierHash: i, lastErrorKey: a } = this.state;
          return r && n == a
            ? void 0 !== t
              ? "function" == typeof t
                ? t(r.error)
                : t
              : s.createElement(o, { error: r, onDismiss: this.Reset })
            : e || null;
        }
      }
      (0, r.Cg)([i.o], a.prototype, "Reset", null);
      const o = ({ error: e, onDismiss: t }) => {
          let n = e.error ? e.error.stack : "Stack missing",
            r = e.info ? e.info.componentStack : "",
            i = (e.error && e.error.message) || "unknown error";
          return s.createElement(
            l,
            null,
            s.createElement(c, null, 'Error: "', i, '"'),
            "   ",
            s.createElement(
              "span",
              {
                style: { textDecoration: "underline", cursor: "pointer" },
                onClick: t,
              },
              "(x) Dismiss",
            ),
            s.createElement("br", null),
            s.createElement(d, null, n),
            s.createElement(d, null, "The error occurred while rendering:", r),
          );
        },
        l = ({ children: e }) =>
          s.createElement(
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
        c = ({ children: e }) =>
          s.createElement(
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
        d = ({ children: e }) =>
          s.createElement(
            "pre",
            { style: { marginTop: "15px", opacity: 0.7, userSelect: "auto" } },
            e,
          );
    },
    6731: (e, t, n) => {
      "use strict";
      n.d(t, { u0: () => h, vw: () => m, wM: () => p });
      var r,
        s = n(1635),
        i = n(6540),
        a = n(3236),
        o = n(1139),
        l = n(7813),
        c = n(4015);
      const d = i.createContext(null);
      class u {
        constructor() {
          (this.m_stack = l.sH.array([])),
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
      (0, s.Cg)([a.o], u.prototype, "cleanup", null),
        (0, s.Cg)([a.o], u.prototype, "onWindowKeyDown", null),
        (0, s.Cg)([a.o], u.prototype, "onWindowClick", null),
        (0, s.Cg)([l.EW], u.prototype, "size", null),
        (0, s.Cg)([l.XI.bound], u.prototype, "dismissTopView", null),
        (0, s.Cg)([l.EW], u.prototype, "hasViews", null),
        (0, s.Cg)([l.EW], u.prototype, "bottomView", null),
        (0, s.Cg)([l.EW], u.prototype, "topView", null),
        (0, s.Cg)([l.XI], u.prototype, "pushView", null),
        (0, s.Cg)([l.XI], u.prototype, "removeView", null);
      let p = (r = class extends i.Component {
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
          const n = this.div.getBoundingClientRect();
          return e >= n.left && e <= n.right && t >= n.top && t <= n.bottom;
        }
        constructor(e) {
          super(e),
            (this.m_viewRef = i.createRef()),
            (this.m_ViewStack = null),
            (this.m_bOwnsViewStack = !1),
            (this.m_bFadesViewsBelow = !1),
            (0, l.Gn)(this);
        }
        componentDidMount() {
          (this.m_bFadesViewsBelow = this.props.fadesViewsBelow),
            this.context
              ? (this.m_ViewStack = this.context)
              : (this.m_ViewStack = new u()),
            this.viewStack.pushView(this);
        }
        componentWillUnmount() {
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
              shouldDismissOnClickInViewStack: n,
              fadesViewsBelow: a,
              onDismissRequested: l,
            } = e,
            c = (0, s.Tt)(e, [
              "shouldDismissOnClickAnywhere",
              "shouldDismissOnClickInViewStack",
              "fadesViewsBelow",
              "onDismissRequested",
            ]),
            u = i.createElement(
              "div",
              Object.assign({}, c, {
                className: (0, o.FH)(
                  "View",
                  [r.k_FadedForModalClassName, this.viewShouldFadeForModal],
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
            ? i.createElement(d.Provider, { value: this.viewStack }, u)
            : u;
        }
      });
      (p.k_FadedForModalClassName = "FadedForModal"),
        (p.contextType = d),
        (0, s.Cg)([l.sH], p.prototype, "m_ViewStack", void 0),
        (0, s.Cg)([l.EW], p.prototype, "isTopView", null),
        (0, s.Cg)([l.EW], p.prototype, "viewLevel", null),
        (0, s.Cg)([l.EW], p.prototype, "viewShouldFadeForModal", null),
        (0, s.Cg)([a.o], p.prototype, "dismissView", null),
        (p = r = (0, s.Cg)([c.PA], p));
      const m = i.forwardRef((e, t) =>
        i.createElement(p, Object.assign({}, e, { ref: t }), e.children),
      );
      let h = class extends i.Component {
        constructor(e) {
          super(e), (this.state = { viewStack: null });
        }
        setFloatingViewStack(e) {
          this.setState({ viewStack: e });
        }
        render() {
          var e, t, n;
          const r =
            null !==
              (n =
                null ===
                  (t =
                    null === (e = this.state.viewStack) || void 0 === e
                      ? void 0
                      : e.bottomView) || void 0 === t
                  ? void 0
                  : t.viewShouldFadeForModal) &&
            void 0 !== n &&
            n;
          return i.createElement(
            "div",
            Object.assign({}, this.props, {
              className: (0, o.FH)(
                "View",
                [p.k_FadedForModalClassName, r],
                this.props.className,
              ),
            }),
            this.props.children,
          );
        }
      };
      h = (0, s.Cg)([c.PA], h);
    },
    6189: (e, t, n) => {
      "use strict";
      n.d(t, { W: () => a });
      var r = n(6090);
      const s = Object.values(r.en).filter((e) => "number" == typeof e);
      function i(e, t) {
        return new Set([...e, ...t]);
      }
      class a {
        constructor() {
          this.m_mapSuppressedHaptics = new Map();
        }
        static get Instance() {
          return a.s_Instance || (a.s_Instance = new a()), a.s_Instance;
        }
        suppressHaptics(e, t) {
          const n = new Set(t);
          this.m_mapSuppressedHaptics.has(e)
            ? this.m_mapSuppressedHaptics.set(
                e,
                i(this.m_mapSuppressedHaptics.get(e), n),
              )
            : this.m_mapSuppressedHaptics.set(e, n);
        }
        suppressHapticsExcept(e, t) {
          const n = new Set(t),
            r = new Set(s.filter((e) => !n.has(e)));
          this.m_mapSuppressedHaptics.has(e)
            ? this.m_mapSuppressedHaptics.set(
                e,
                i(this.m_mapSuppressedHaptics.get(e), r),
              )
            : this.m_mapSuppressedHaptics.set(e, r);
        }
        unsuppressHaptics(e, t) {
          const n = new Set(t);
          var r, s;
          void 0 === t
            ? this.m_mapSuppressedHaptics.delete(e)
            : this.m_mapSuppressedHaptics.has(e) ||
              this.m_mapSuppressedHaptics.set(
                e,
                ((r = this.m_mapSuppressedHaptics.get(e)),
                (s = n),
                new Set([...r].filter((e) => !s.has(e)))),
              );
        }
        isHapticSuppressed(e) {
          return Array.from(this.m_mapSuppressedHaptics.values()).some((t) =>
            t.has(e),
          );
        }
        triggerHaptic(e) {
          (0, r.R$)() != r.OH.Overlay ||
            this.isHapticSuppressed(e) ||
            null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VROverlay.TriggerOverlayHapticEffect(
              VRHTML.VROverlay.ThisOverlayHandle(),
              e,
            );
        }
      }
      a.s_Instance = null;
    },
    260: (e, t, n) => {
      "use strict";
      n.d(t, { j: () => a });
      var r = n(6540),
        s = n(961);
      const i = (e) =>
        r.createElement("div", {
          style: {
            position: "fixed",
            left: e.x,
            top: e.y,
            width: e.width,
            height: e.height,
            zIndex: 90019001,
          },
        });
      class a extends r.Component {
        render() {
          const e = document.body.getBoundingClientRect();
          let t = null;
          if (this.props.element) {
            const n = this.props.element.getBoundingClientRect();
            t = r.createElement(
              r.Fragment,
              null,
              r.createElement(i, { x: 0, y: 0, width: e.width, height: n.y }),
              r.createElement(i, {
                x: 0,
                y: n.y + n.height,
                width: e.width,
                height: e.height - n.height - n.y,
              }),
              r.createElement(i, {
                x: 0,
                y: n.y,
                width: n.x,
                height: n.height,
              }),
              r.createElement(i, {
                x: n.x + n.width,
                y: n.y,
                width: e.width - n.width - n.x,
                height: n.height,
              }),
            );
          } else
            t = r.createElement(
              r.Fragment,
              null,
              r.createElement(i, {
                x: 0,
                y: 0,
                width: e.width,
                height: e.height,
              }),
            );
          return s.createPortal(t, document.body);
        }
      }
    },
    7379: (e, t, n) => {
      "use strict";
      n.d(t, { a: () => d });
      var r,
        s = n(1635),
        i = n(6540),
        a = n(1139),
        o = n(4015),
        l = n(6731),
        c = n(6575);
      let d = (r = class extends i.Component {
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
            elemBoundingParent: (0, a.jE)(
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
          let n = Object.assign({}, this.props);
          return (
            delete n.onDismissRequested,
            delete n.backdropClassName,
            delete n.allowableParentSelectors,
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
                Object.assign({}, n, {
                  shouldDismissOnClickAnywhere: !1,
                  shouldDismissOnClickInViewStack: !0,
                  fadesViewsBelow: !0,
                  onDismissRequested: this.props.onDismissRequested,
                  className: (0, a.FH)("Modal", this.props.className),
                  style: {
                    maxWidth: t.width - 2 * r.MODAL_BOUNDS_MARGIN,
                    maxHeight: t.height - 2 * r.MODAL_BOUNDS_MARGIN,
                  },
                }),
                this.state.bInDOM && this.props.children,
              ),
            )
          );
        }
      });
      (d.MODAL_BOUNDS_MARGIN = 10), (d = r = (0, s.Cg)([o.PA], d));
    },
    5615: (e, t, n) => {
      "use strict";
      n.d(t, { D: () => r, M: () => h });
      var r,
        s,
        i = n(1635),
        a = n(6540),
        o = n(3236),
        l = n(6090),
        c = n(6189),
        d = n(1139),
        u = n(7813),
        p = n(6138),
        m = n(260);
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Vertical = 1)] = "Vertical"),
          (e[(e.Horizontal = 2)] = "Horizontal");
      })(r || (r = {})),
        (function (e) {
          (e[(e.Default = 0)] = "Default"),
            (e[(e.MouseDown = 1)] = "MouseDown"),
            (e[(e.Dragging = 2)] = "Dragging"),
            (e[(e.Thrown = 3)] = "Thrown");
        })(s || (s = {}));
      class h extends a.Component {
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
            (this.m_ref = a.createRef()),
            (this.m_initialMousePosition = null),
            (this.m_initialScrollPosition = null),
            (this.m_mostRecentScrollSamples = []),
            (this.m_thrownVelocityPerSecond = null),
            (this.m_animationFrameRequestHandle = 0),
            (this.state = { eScrollState: s.Default, bAtEdge: null }),
            (0, u.Gn)(this);
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
          var t, n;
          null === (n = (t = this.props).onMouseDown) ||
            void 0 === n ||
            n.call(t, e),
            this.startMouseTracking({ x: e.clientX, y: e.clientY });
        }
        onMouseUp(e) {
          var t, n;
          null === (n = (t = this.props).onMouseUp) ||
            void 0 === n ||
            n.call(t, e);
        }
        onScroll(e) {
          var t, n;
          null === (n = (t = this.props).onScroll) ||
            void 0 === n ||
            n.call(t, e),
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
          this.setState({ eScrollState: s.MouseDown }),
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
            case s.MouseDown:
              if (this.props.scrollDirection == r.None) break;
              Math.abs(this.scrollsHorizontally ? t.x : t.y) >
                (this.scrollsHorizontally
                  ? h.MIN_HORIZONTAL_DRAG_DISTANCE
                  : h.MIN_VERTICAL_DRAG_DISTANCE) && this.startDragging(e);
              break;
            case s.Dragging:
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
          if (this.state.eScrollState != s.Thrown) return;
          const e = (performance.now() - this.m_lastAnimationFrameTimeMs) / 1e3;
          (this.m_ref.current.scrollLeft +=
            this.m_thrownVelocityPerSecond.x * e),
            (this.m_ref.current.scrollTop +=
              this.m_thrownVelocityPerSecond.y * e);
          const t = Math.sign(this.m_thrownVelocityPerSecond.x),
            n = Math.sign(this.m_thrownVelocityPerSecond.y),
            r =
              850 +
              (((0, l.NH)(this.m_thrownVelocityPerSecond) - 500) / 1e4) * 49150,
            i = Math.min(5e4, Math.max(850, r));
          this.m_thrownVelocityPerSecond = {
            x: this.m_thrownVelocityPerSecond.x - t * i * e,
            y: this.m_thrownVelocityPerSecond.y - n * i * e,
          };
          Math.sign(this.m_thrownVelocityPerSecond.x) != t ||
          Math.sign(this.m_thrownVelocityPerSecond.y) != n ||
          (0, l.NH)(this.m_thrownVelocityPerSecond) <= 1
            ? this.setState({ eScrollState: s.Default })
            : this.requestNextAnimationFrame();
        }
        startDragging(e) {
          h.isScrollingSuppressed ||
            ((0, l.R$)() == l.OH.Overlay &&
              (this.setState({ eScrollState: s.Dragging }),
              (this.m_initialMousePosition = e),
              (this.m_initialScrollPosition = {
                x: this.m_ref.current.scrollLeft,
                y: this.m_ref.current.scrollTop,
              }),
              this.logScrollSample()));
        }
        startThrowing() {
          (this.m_thrownVelocityPerSecond = this.calculateThrowStartVelocity()),
            this.setState({ eScrollState: s.Thrown }),
            this.requestNextAnimationFrame();
        }
        cancelThrowing(e) {
          this.setState(
            (e, t) =>
              e.eScrollState == s.Thrown
                ? (window.cancelAnimationFrame(
                    this.m_animationFrameRequestHandle,
                  ),
                  { eScrollState: s.Default })
                : null,
            e,
          );
        }
        get isThrown() {
          return this.state.eScrollState == s.Thrown;
        }
        calculateThrowStartVelocity() {
          let e = null,
            t = 0;
          for (let n = 1; n < this.m_mostRecentScrollSamples.length; n++) {
            const r = this.m_mostRecentScrollSamples[n - 1],
              s = this.m_mostRecentScrollSamples[n],
              i = (s.timeMs - r.timeMs) / 1e3,
              a = {
                x: (s.scrollPosition.x - r.scrollPosition.x) / i,
                y: (s.scrollPosition.y - r.scrollPosition.y) / i,
              };
            e
              ? ((e.x = (e.x * t + a.x) / (t + 1)),
                (e.y = (e.y * t + a.y) / (t + 1)))
              : (e = a),
              t++;
          }
          const n = (0, l.NH)(e);
          return (
            n > h.MAX_PIXELS_PER_SECOND &&
              (e = (0, l.O6)(e, h.MAX_PIXELS_PER_SECOND / n)),
            n < h.MIN_THROW_VELOCITY_PER_SECOND && (e = null),
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
            : this.setState({ eScrollState: s.Default }),
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
          return this.props.scrollDirection == r.Horizontal;
        }
        get scrollsVertically() {
          return this.props.scrollDirection == r.Vertical;
        }
        render() {
          let e = Object.assign({}, this.props);
          delete e.scrollDirection, delete e.alwaysShowScrollbars;
          const t = this.props.alwaysShowScrollbars ? "scroll" : "auto";
          return a.createElement(
            a.Fragment,
            null,
            this.state.eScrollState == s.Dragging && a.createElement(m.j, null),
            a.createElement(
              "div",
              Object.assign({}, e, {
                className: (0, d.FH)("ScrollPanel", e.className),
                style: Object.assign(Object.assign({}, e.style), {
                  overflowX:
                    this.props.scrollDirection == r.Horizontal ? t : "hidden",
                  overflowY:
                    this.props.scrollDirection == r.Vertical ? t : "hidden",
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
          this.state.eScrollState == s.Thrown ? this.cancelThrowing(t) : t();
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
      (h.s_setScrollingSuppressors = u.sH.set()),
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
        (0, i.Cg)([u.EW], h, "isScrollingSuppressed", null),
        (0, i.Cg)([u.EW], h, "userIsDragging", null),
        (0, i.Cg)([u.XI], h, "suppressScrolling", null),
        (0, i.Cg)([u.XI], h, "unsuppressScrolling", null);
      class g {
        constructor() {
          (this.m_CurrentlyDraggingPanel = null), (0, u.Gn)(this);
        }
      }
      (0, i.Cg)([u.sH], g.prototype, "m_CurrentlyDraggingPanel", void 0);
      const v = new g();
    },
    917: (e, t, n) => {
      "use strict";
      n.d(t, { Ap: () => _, Te: () => i, uJ: () => s });
      var r,
        s,
        i,
        a = n(1635),
        o = n(6540),
        l = n(3236),
        c = n(4015),
        d = n(6090),
        u = n(4963),
        p = n(6138),
        m = n(1139),
        h = n(6189),
        g = n(5615),
        v = n(260);
      !(function (e) {
        (e[(e.Value = 0)] = "Value"), (e[(e.Color = 1)] = "Color");
      })(s || (s = {})),
        (function (e) {
          (e[(e.Below = 0)] = "Below"), (e[(e.OnHandle = 1)] = "OnHandle");
        })(i || (i = {}));
      let _ = (r = class extends o.Component {
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
          var t, n;
          null === (n = (t = this.props).onMouseEnter) ||
            void 0 === n ||
            n.call(t, e),
            (0, d.R$)() != d.OH.Overlay ||
              this.state.m_bSliding ||
              h.W.Instance.triggerHaptic(d.en.ButtonEnter);
        }
        onSliderMouseLeave(e) {
          var t, n;
          null === (n = (t = this.props).onMouseLeave) ||
            void 0 === n ||
            n.call(t, e),
            (0, d.R$)() != d.OH.Overlay ||
              this.state.m_bSliding ||
              h.W.Instance.triggerHaptic(d.en.ButtonLeave);
        }
        getNormalizedValueForMousePosition(e) {
          const t = this.m_refSlider.current.getBoundingClientRect(),
            n = this.sliderHandleElement.getBoundingClientRect(),
            r = this.isVertical ? t.bottom : t.left,
            s = this.isVertical ? n.height : n.width,
            i = this.isVertical ? t.height : t.width;
          return ((this.isVertical ? r - e + r : e) - (r + s / 2)) / (i - s);
        }
        updateValueForMousePosition(e, t) {
          const n = this.normalizedValue;
          let s =
            this.getNormalizedValueForMousePosition(e) + this.m_nValueOffset;
          const i = this.getClosestSnappableDetent(s),
            a = this.normalizedDetents;
          for (let e = 0; e < a.length; e++) {
            const t = a[e];
            Math.abs(s - t) > r.DETENT_UNIGNORE_DISTANCE &&
              this.m_setDetentsToIgnore.delete(t);
          }
          t && i === n && this.m_setDetentsToIgnore.add(i),
            null === i || this.m_setDetentsToIgnore.has(i) || (s = i),
            this.m_nCurrentNearestSnappableDetent !== i &&
              ((this.m_dragStartTime = new Date()),
              null !== this.m_nCurrentNearestSnappableDetent &&
                this.m_setDetentsToIgnore.add(
                  this.m_nCurrentNearestSnappableDetent,
                ),
              null === i ||
                this.m_setDetentsToIgnore.has(i) ||
                h.W.Instance.triggerHaptic(d.en.Snap)),
            (this.m_nCurrentNearestSnappableDetent = i),
            this.setNormalizedValue(s);
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
          var t, n, r;
          const s = this.isVertical ? e.y : e.x;
          this.setState({ m_bSliding: !0 }),
            this.updateValueForMousePosition(s, !0),
            this.setDragElapsedSecondsCSSProperty(0),
            h.W.Instance.suppressHapticsExcept(this, [
              d.en.Sliding,
              d.en.SlidingEdge,
              d.en.Snap,
            ]),
            (this.m_dragStartTime = new Date()),
            (this.m_nAnimationFrameCallback = window.requestAnimationFrame(
              this.onDragAnimationFrame,
            )),
            g.M.suppressScrolling(this.m_sScrollSuppressedIdentifier),
            u.u.Instance.playSound(
              null !== (t = this.props.interactionStartSoundEffect) &&
                void 0 !== t
                ? t
                : u.j.Grab,
            ),
            null === (r = (n = this.props).onInteractionStart) ||
              void 0 === r ||
              r.call(n);
        }
        stopSliding() {
          var e, t, n, r, s;
          this.state.m_bSliding &&
            (this.setState({ m_bSliding: !1 }),
            window.cancelAnimationFrame(this.m_nAnimationFrameCallback),
            this.setDragElapsedSecondsCSSProperty(0),
            this.m_setDetentsToIgnore.clear(),
            h.W.Instance.unsuppressHaptics(this),
            null === (t = (e = this.props).onInteractionEnd) ||
              void 0 === t ||
              t.call(e),
            null === (r = (n = this.props).onFinalChange) ||
              void 0 === r ||
              r.call(n, this.normalizedToExternal(this.normalizedValue)),
            p.W.temporarilySuppressSoundEffect(),
            u.u.Instance.playSound(
              null !== (s = this.props.interactionEndSoundEffect) &&
                void 0 !== s
                ? s
                : u.j.GrabRelease,
            ),
            g.M.unsuppressScrolling(this.m_sScrollSuppressedIdentifier));
        }
        getClosestSnappableDetent(e) {
          const t = this.normalizedDetents;
          t.sort((t, n) => (Math.abs(e - t) > Math.abs(e - n) ? 1 : -1));
          for (let n = 0; n < t.length; n++) {
            const s = t[n];
            if (Math.abs(e - s) < r.DETENT_SNAP_DISTANCE) return s;
          }
          return null;
        }
        get styleVariant() {
          return void 0 === this.props.styleVariant
            ? s.Value
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
          const n = this.normalizedStep,
            r = this.normalizedValue;
          if (n && ((e = Math.round(e / n) * n), Math.abs(e - r) > 1e-4)) {
            const r = 1 % n,
              s = Math.abs(r - n) < 1e-5 ? 1 : 1 - (1 % n);
            (0 == e || Math.abs(e - s) < 0.001) &&
              !t &&
              (h.W.Instance.triggerHaptic(d.en.SlidingEdge), (t = !0)),
              !this.shouldTriggerHapticOnSnap ||
                this.isSnappedToDetent ||
                (0, d.R$)() != d.OH.Overlay ||
                t ||
                (h.W.Instance.triggerHaptic(d.en.Snap), (t = !0));
          }
          if (
            !this.shouldTriggerHapticOnSnap &&
            r >= 0 &&
            r <= 1 &&
            !this.isSnappedToDetent
          ) {
            (0 == e || 1 == e) &&
              r > 0 &&
              r < 1 &&
              !t &&
              (h.W.Instance.triggerHaptic(d.en.SlidingEdge), (t = !0));
            const n = 40;
            Math.floor(r * n) == Math.floor(e * n) ||
              t ||
              (h.W.Instance.triggerHaptic(d.en.Sliding), (t = !0));
          }
          const s = this.normalizedToExternal(e);
          this.props.onChange && this.props.onChange(s);
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
            n = this.styleVariant == s.Value && t,
            r = n && this.valueStyleVariant == i.OnHandle,
            a = n && this.valueStyleVariant == i.Below,
            l = this.styleVariant == s.Value && !r,
            c = this.normalizedValue,
            d = r && t.length >= 4,
            u =
              null !== (e = this.props.customHandleComponent) && void 0 !== e
                ? e
                : o.createElement(
                    "div",
                    { className: "HandleContainer" },
                    o.createElement(
                      "div",
                      {
                        className: (0, m.FH)("Handle", ["SmallerText", d]),
                        ref: this.m_refSliderDefaultHandle,
                        style: {
                          backgroundColor:
                            this.props.styleVariant == s.Color ? t : null,
                        },
                      },
                      l &&
                        o.createElement("div", { className: "HandleCircle" }),
                      r &&
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
                  ["Color", this.styleVariant == s.Color],
                  ["Sliding", this.state.m_bSliding],
                  ["Disabled", !1 === this.props.enabled],
                  ["ValueOnHandle", r],
                  this.props.additionalClassName,
                ),
                style: {
                  "--slider-value": c,
                  "--slider-color":
                    this.props.styleVariant == s.Color
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
              u,
            ),
            a && o.createElement("div", { className: "RangeLabel" }, t),
          );
        }
      });
      (_.DETENT_SNAP_DISTANCE = 0.05),
        (_.DETENT_UNIGNORE_DISTANCE = 0.15),
        (0, a.Cg)([l.o], _.prototype, "onSliderMouseDown", null),
        (0, a.Cg)([l.o], _.prototype, "onWindowMouseMove", null),
        (0, a.Cg)([l.o], _.prototype, "onSliderMouseEnter", null),
        (0, a.Cg)([l.o], _.prototype, "onSliderMouseLeave", null),
        (0, a.Cg)([l.o], _.prototype, "onWindowMouseUp", null),
        (0, a.Cg)([l.o], _.prototype, "externalToNormalized", null),
        (0, a.Cg)([l.o], _.prototype, "normalizedToExternal", null),
        (0, a.Cg)([l.o], _.prototype, "onDragAnimationFrame", null),
        (_ = r = (0, a.Cg)([c.PA], _));
    },
    4963: (e, t, n) => {
      "use strict";
      n.d(t, { j: () => r, u: () => a });
      var r,
        s = n(1635),
        i = n(6090);
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
      })(r || (r = {}));
      class a {
        constructor() {
          this.m_mapSoundElems = new Map();
        }
        static get Instance() {
          return a.s_Instance || (a.s_Instance = new a()), a.s_Instance;
        }
        preloadSounds() {
          if (!((0, i.R$)() != i.OH.Overlay || this.m_mapSoundElems.size > 0))
            for (let e in r) isNaN(Number(e)) || this.loadSounds(Number(e));
        }
        playSound(e) {
          return (0, s.sH)(this, void 0, void 0, function* () {
            if ((0, i.R$)() != i.OH.Overlay) return;
            if (null == e) return;
            const t = this.getAudioElems(e);
            if (!t || 0 == t.length) return;
            const n = t[Math.floor(Math.random() * t.length)];
            n.pause(), (n.currentTime = 0);
            try {
              yield n.play();
            } catch (t) {
              console.error(
                `Failed to play sound effect "${r[e]}" (${n.src}, networkState=${n.networkState}, readyState=${n.readyState})`,
              );
            }
          });
        }
        loadSounds(e) {
          const t = a.Sources[e],
            n = t.source;
          if (!n) return void this.m_mapSoundElems.set(e, []);
          const r = ("string" == typeof n ? [n] : n).map((e) => {
            var n, r;
            let s = document.createElement("audio");
            return (
              (s.src = `${e}?t=${(new Date()).getTime()}`),
              (s.preload = "auto"),
              (s.volume = null !== (n = t.volume) && void 0 !== n ? n : 1),
              (null === (r = t.bRespectsGlobalVolume) || void 0 === r || r) &&
                (s.volume *= 1),
              s
            );
          });
          this.m_mapSoundElems.set(e, r);
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
      (a.Sources = {
        [r.DashboardOpen]: { source: "" },
        [r.DashboardClose]: { source: "" },
        [r.ControlBarButtonClick]: {
          source: "/dashboard/sounds/deck_ui_misc_10.wav",
        },
        [r.ButtonClick]: { source: "/dashboard/sounds/deck_ui_misc_10.wav" },
        [r.SurfaceClick]: { source: "" },
        [r.VolumePreview]: {
          source: "/dashboard/sounds/volume_change.wav",
          bRespectsGlobalVolume: !1,
        },
        [r.Grab]: { source: "" },
        [r.GrabRelease]: { source: "/dashboard/sounds/deck_ui_misc_10.wav" },
        [r.PagedSettingsNavigation]: {
          source: "/dashboard/sounds/deck_ui_navigation.wav",
        },
      }),
        (a.s_Instance = null);
    },
    924: (e, t, n) => {
      "use strict";
      n.d(t, { Sv: () => c });
      var r,
        s,
        i = n(1635),
        a = n(6540),
        o = n(1139),
        l = n(3236);
      !(function (e) {
        e[(e.Fade = 0)] = "Fade";
      })(r || (r = {})),
        (function (e) {
          (e[(e.Hidden = 0)] = "Hidden"),
            (e[(e.Showing = 1)] = "Showing"),
            (e[(e.Shown = 2)] = "Shown"),
            (e[(e.Hiding = 3)] = "Hiding");
        })(s || (s = {}));
      class c extends a.Component {
        constructor(e) {
          super(e),
            (this.m_nNextStateTimeoutHandle = void 0),
            (this.state = { eAnimationState: e.visible ? s.Shown : s.Hidden });
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
          var e, t, n, r, i, a, o, l;
          switch (this.state.eAnimationState) {
            case s.Showing:
              null === (t = (e = this.props).onStartShowing) ||
                void 0 === t ||
                t.call(e);
              break;
            case s.Shown:
              null === (r = (n = this.props).onShown) ||
                void 0 === r ||
                r.call(n);
              break;
            case s.Hiding:
              null === (a = (i = this.props).onStartHiding) ||
                void 0 === a ||
                a.call(i);
              break;
            case s.Hidden:
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
                eAnimationState: this.props.visible ? s.Showing : s.Hiding,
              }));
        }
        static getDerivedStateFromProps(e, t) {
          return {};
        }
        finishAnimation() {
          this.setState((e) => {
            switch (e.eAnimationState) {
              case s.Showing:
                return { eAnimationState: s.Shown };
              case s.Hiding:
                return { eAnimationState: s.Hidden };
            }
            return null;
          });
        }
        render() {
          return this.state.eAnimationState == s.Hidden
            ? null
            : a.createElement(
                "div",
                {
                  className: (0, o.FH)(
                    "ShowHideAnimation",
                    s[this.state.eAnimationState],
                    [
                      "Preset-" + r[this.props.preset],
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
    1532: (e, t, n) => {
      "use strict";
      n.d(t, { s: () => c });
      var r = n(1635),
        s = n(3236),
        i = n(2505),
        a = n.n(i),
        o = n(7813);
      class l {
        constructor() {
          (this.m_Applications = o.sH.map()),
            (this.m_sceneApplicationStateChangedEventHandle = null),
            (0, o.Gn)(this);
        }
        Init() {
          return (0, r.sH)(this, void 0, void 0, function* () {
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
          return (0, r.sH)(this, void 0, void 0, function* () {
            yield this.QueryApplications().then((e) => {
              this.SetApplicationMap(e);
            });
          });
        }
        QueryApplications() {
          return new Promise(function (e, t) {
            a()
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
      (0, r.Cg)([o.sH], l.prototype, "m_Applications", void 0),
        (0, r.Cg)([s.o], l.prototype, "onSceneApplicationStateChanged", null),
        (0, r.Cg)([o.XI], l.prototype, "SetApplicationMap", null),
        (0, r.Cg)([s.o], l.prototype, "QueryApplications", null),
        (0, r.Cg)([s.o], l.prototype, "GetAppImageURL", null),
        (0, r.Cg)([s.o], l.prototype, "GetApp", null),
        (0, r.Cg)([s.o], l.prototype, "GetRecentApps", null),
        (0, r.Cg)([s.o], l.prototype, "GetCurrentSceneProcess", null),
        (0, r.Cg)([s.o], l.prototype, "IsAppAllowedPrivateInputs", null),
        (0, r.Cg)([s.o], l.prototype, "ShouldShowBindingFailureForApp", null);
      const c = new l();
      window.applications = c;
    },
    3236: (e, t, n) => {
      "use strict";
      function r(e, t, n) {
        return {
          get() {
            let e = n.value.bind(this);
            return (
              Object.prototype.hasOwnProperty.call(this, t) ||
                Object.defineProperty(this, t, { value: e }),
              e
            );
          },
        };
      }
      n.d(t, { o: () => r });
    },
    9283: (e, t, n) => {
      "use strict";
      function r(...e) {
        return e.reduce(
          (e, t) =>
            t
              ? "string" == typeof t
                ? e
                  ? `${e} ${t}`
                  : t
                : "object" == typeof t
                  ? e
                    ? `${e} ${s(t)}`
                    : s(t)
                  : e
              : e,
          "",
        );
      }
      function s(e) {
        return Object.keys(e).reduce(
          (t, n) => (e[n] ? (t ? `${t} ${n}` : n) : t),
          "",
        );
      }
      n.d(t, { A: () => r });
    },
    9118: (e, t, n) => {
      "use strict";
      n.d(t, { W: () => u });
      var r = n(1635),
        s = n(7813),
        i = n(2505),
        a = n.n(i),
        o = n(3236),
        l = n(3714),
        c = n(6090);
      class d {
        constructor() {
          (this.m_InputState = void 0),
            (this.m_KnownControllerTypes = s.sH.map()),
            (this.m_mailbox = new c._n()),
            (this.m_bUpdateInputStateOnControllerTypChange = !1),
            (0, s.Gn)(this);
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
          let n = (0, l.we)("#" + t);
          return n != "#" + t
            ? n
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
          let n = (0, l.we)("#" + t);
          return n != "#" + t ? n : t;
        }
        UpdateControllerTypes(e) {
          this.m_KnownControllerTypes.clear();
          for (let t of e)
            this.m_KnownControllerTypes.set(t.controller_type, t);
        }
        GetInputState() {
          return (0, r.sH)(this, void 0, void 0, function* () {
            yield new Promise(function (e, t) {
              a()
                .get("/input/getstate.json")
                .then((t) => {
                  e(t.data);
                })
                .catch((e) => {
                  t(e);
                });
            }).then((e) => {
              (0, s.h5)(() => {
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
      (0, r.Cg)([s.sH], d.prototype, "m_InputState", void 0),
        (0, r.Cg)([s.sH], d.prototype, "m_KnownControllerTypes", void 0),
        (0, r.Cg)([o.o], d.prototype, "OnActionBindingsReloaded", null),
        (0, r.Cg)([o.o], d.prototype, "OnControllerTypeChanged", null),
        (0, r.Cg)([s.EW], d.prototype, "ConnectedDevices", null),
        (0, r.Cg)([s.EW], d.prototype, "ControllerTypes", null),
        (0, r.Cg)([s.EW], d.prototype, "ShouldSendSystemButtonToAllApps", null),
        (0, r.Cg)([s.EW], d.prototype, "ShowHiddenInputs", null),
        (0, r.Cg)([s.EW], d.prototype, "IsSteamAvailable", null),
        (0, r.Cg)([s.EW], d.prototype, "BDevMode", null),
        (0, r.Cg)([s.EW], d.prototype, "IsValid", null),
        (0, r.Cg)([s.EW], d.prototype, "CurrentUserPersonaName", null),
        (0, r.Cg)([o.o], d.prototype, "GetControllerTypeInfo", null),
        (0, r.Cg)([o.o], d.prototype, "LocalizeControllerString", null),
        (0, r.Cg)([o.o], d.prototype, "LocalizeDriverString", null),
        (0, r.Cg)([s.XI], d.prototype, "UpdateControllerTypes", null),
        (0, r.Cg)([s.XI], d.prototype, "GetInputState", null),
        (0, r.Cg)([s.EW], d.prototype, "KnownControllerTypes", null),
        (0, r.Cg)([o.o], d.prototype, "FindDeviceClassForControllerType", null);
      const u = new d();
      window.inputState = u;
    },
    3804: (e, t, n) => {
      "use strict";
      n.d(t, { E: () => i });
      var r = n(7813);
      function s(e) {
        if (((0, r.AT)(e) && (e = (0, r.HO)(e)), null === e || null == e))
          return e;
        if (Array.isArray(e)) return e.map(s);
        if (e instanceof Map) {
          const t = {};
          for (const n of e.keys()) t[n] = s(e.get(n));
          return t;
        }
        if ("object" == typeof e) {
          const t = {};
          for (const n of Object.keys(e)) t[n] = s(e[n]);
          return t;
        }
        return e;
      }
      function i(...e) {
        const [t, ...n] = e;
        return JSON.stringify(s(t), ...n);
      }
    },
    6575: (e, t, n) => {
      "use strict";
      n.d(t, { b: () => o, l: () => l });
      var r = n(6540),
        s = n(961),
        i = n(1139),
        a = n(6090);
      class o extends r.Component {
        constructor(e) {
          super(e),
            (this.m_elemPortalContainer = null),
            (this.m_elemPortal = null),
            (this.m_refAnchor = r.createRef()),
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
            r.createElement(
              r.Fragment,
              null,
              r.createElement("div", {
                className: "ParentPortalAnchor",
                ref: this.m_refAnchor,
              }),
              this.m_elemPortal &&
                this.state.bInDOM &&
                this.props.children &&
                s.createPortal(this.props.children, this.m_elemPortal),
            )
          );
        }
      }
      o.ELEM_CLASS = "v-parent-portal";
      class l extends r.Component {
        constructor(e) {
          var t;
          super(e),
            (this.m_refPanelAnchor = r.createRef()),
            (this.m_sPanelAnchorID =
              null !== (t = e.panelAnchorID) && void 0 !== t
                ? t
                : Math.random().toString().substring(2));
        }
        get panelAnchor() {
          return this.m_refPanelAnchor.current;
        }
        render() {
          return r.createElement(
            a.Ci,
            { ref: this.m_refPanelAnchor, latched: this.props.latched },
            r.createElement(a.dL, { id: this.m_sPanelAnchorID }),
            r.createElement(
              o,
              Object.assign({}, this.props),
              r.createElement(
                a.dL,
                { parent_id: this.m_sPanelAnchorID },
                this.props.children,
              ),
            ),
          );
        }
      }
    },
    8108: (e, t, n) => {
      "use strict";
      n.d(t, { J: () => d });
      var r = n(1635),
        s = n(3236),
        i = n(2505),
        a = n.n(i),
        o = n(7813);
      class l {
        constructor() {
          (this.contents = o.sH.map()), (0, o.Gn)(this);
        }
      }
      (0, r.Cg)([o.sH], l.prototype, "contents", void 0);
      class c {
        constructor() {
          (this.m_Containers = o.sH.map()), (0, o.Gn)(this);
        }
        Init() {
          return (0, r.sH)(this, void 0, void 0, function* () {
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
          let n = this.m_Containers.get(e);
          n.contents.clear(),
            t.entries.forEach((e) => {
              null != e.path && n.contents.set(e.path, e);
            });
        }
        QueryContainer(e) {
          return (0, r.sH)(this, void 0, void 0, function* () {
            return new Promise(function (t, n) {
              a()
                .get("/properties.json?container=" + e)
                .then((n) => {
                  t([e, n.data]);
                })
                .catch((t) => {
                  n([e, t]);
                });
            });
          });
        }
        UpdatePaths() {
          return (0, r.sH)(this, void 0, void 0, function* () {
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
          let n = this.m_Containers.get(e);
          if (!n.contents.has(t)) return;
          let r = n.contents.get(t);
          return "k_unActionPropertyTag" == r.type ? r.value : void 0;
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
          let n = this.m_Containers.get(e);
          if (!n.contents.has(t)) return;
          let r = n.contents.get(t);
          if ("k_unInputValuePropertyTag" != r.type) return;
          let s = r.value;
          return s.length < 1 ? void 0 : s[0];
        }
        GetScalarInputValue(e, t) {
          let n = this.GetInputValue(e, t);
          return null == n || "scalar" != n.type ? 0 : n.value;
        }
        GetBooleanInputValue(e, t) {
          let n = this.GetInputValue(e, t);
          return null != n && "boolean" == n.type && n.value;
        }
      }
      (0, r.Cg)([o.sH], c.prototype, "m_Containers", void 0),
        (0, r.Cg)([s.o], c.prototype, "AddSubscribedContainer", null),
        (0, r.Cg)([o.XI], c.prototype, "UpdateContainer", null),
        (0, r.Cg)([s.o], c.prototype, "GetAllActions", null),
        (0, r.Cg)([s.o], c.prototype, "GetActionValue", null),
        (0, r.Cg)([s.o], c.prototype, "GetAllInputValues", null),
        (0, r.Cg)([s.o], c.prototype, "GetInputValue", null),
        (0, r.Cg)([s.o], c.prototype, "GetScalarInputValue", null),
        (0, r.Cg)([s.o], c.prototype, "GetBooleanInputValue", null);
      const d = new c();
      window.paths = d;
    },
    3924: (e, t, n) => {
      "use strict";
      n.d(t, {
        BT: () => l,
        Sg: () => u,
        Uq: () => o,
        gp: () => i,
        i0: () => d,
        qM: () => s,
        w0: () => a,
        zj: () => c,
      });
      var r = n(5339);
      const s = r.BinaryReader.prototype,
        i = r.BinaryWriter.prototype;
      function a(e) {
        let t = {};
        const { fields: n } = e;
        for (let e in n) {
          const r = n[e];
          t[r.n] = r;
        }
        return t;
      }
      function o(e, t) {
        const { proto: n, fields: s } = e,
          i = new n();
        if (null == t) return i;
        for (let e in s) {
          const { n, c: a, r: o, d: l, q: c } = s[e];
          if (!t.hasOwnProperty(e)) continue;
          const d = t[e];
          a
            ? o
              ? r.Message.setRepeatedWrapperField(
                  i,
                  n,
                  Array.isArray(d) ? d.map((e) => a.fromObject(e)) : [],
                )
              : r.Message.setWrapperField(i, n, a.fromObject(d))
            : r.Message.setField(i, n, d);
        }
        return i;
      }
      function l(e, t, n) {
        const { proto: s, fields: i } = e;
        let a = {};
        for (let e in i) {
          const { n: s, c: o, r: l, d: c, q: d } = i[e];
          if (o)
            if (l)
              a[e] = r.Message.toObjectList(
                r.Message.getRepeatedWrapperField(n, o, s),
                o.toObject,
                t,
              );
            else {
              const i = r.Message.getWrapperField(n, o, s, d ? 1 : 0);
              i && (a[e] = o.toObject(t, i));
            }
          else {
            const t = r.Message.getFieldWithDefault(
              n,
              s,
              void 0 !== c ? c : null,
            );
            (null !== t || d) && (a[e] = t);
          }
        }
        return t && (a.$jspbMessageInstance = n), a;
      }
      function c(e, t, n) {
        for (; n.nextField() && !n.isEndGroup(); ) {
          const s = e[n.getFieldNumber()];
          if (s) {
            const { n: e, c: i, r: a, d: o, q: l, br: c } = s;
            if (i) {
              const s = new i();
              n.readMessage(s, i.deserializeBinaryFromReader),
                a
                  ? r.Message.addToRepeatedWrapperField(t, e, s, i)
                  : r.Message.setWrapperField(t, e, s);
            } else if (c) {
              const s = c.call(n);
              a
                ? r.Message.addToRepeatedField(t, e, s)
                : r.Message.setField(t, e, s);
            } else
              console.assert(
                !!c,
                `Reader func not set for field number ${e} in class ${i}`,
              ),
                n.skipField();
          } else n.skipField();
        }
        return t;
      }
      function d(e, t, n) {
        const { fields: s } = e;
        for (let e in s) {
          const { n: i, c: a, r: o, d: l, q: c, bw: d } = s[e];
          if (a)
            if (o) {
              const e = r.Message.getRepeatedWrapperField(t, a, i);
              ((e && e.length) || c) &&
                n.writeRepeatedMessage(i, e, a.serializeBinaryToWriter);
            } else {
              const e = r.Message.getWrapperField(t, a, i, c ? 1 : 0);
              e && n.writeMessage(i, e, a.serializeBinaryToWriter);
            }
          else if (d) {
            const e = r.Message.getField(t, i);
            void 0 !== e && d.call(n, i, e);
          } else
            console.assert(
              !!d,
              `Writer func not set for field number ${i} in class ${a}`,
            );
        }
      }
      function u(e) {
        const t = e.proto;
        for (const n in e.fields) {
          const s = e.fields[n],
            { n: i, c: a, r: o, d: l, q: c } = s;
          s.hasOwnProperty("d")
            ? (t.prototype[n] = p(r.Message.getFieldWithDefault, i, l))
            : (t.prototype[n] = a
                ? o
                  ? p(r.Message.getRepeatedWrapperField, a, i)
                  : m(a, i)
                : p(r.Message.getField, i)),
            (t.prototype[`set_${n}`] = h(
              a
                ? o
                  ? r.Message.setRepeatedWrapperField
                  : r.Message.setWrapperField
                : r.Message.setField,
              i,
            )),
            o && (t.prototype[`add_${n}`] = g(i, a));
        }
      }
      function p(e, ...t) {
        return function () {
          return e(this, ...t);
        };
      }
      function m(e, t) {
        return function (n = !0) {
          return r.Message.getWrapperField(this, e, t, n ? 1 : 0);
        };
      }
      function h(e, t) {
        return function (n) {
          return e(this, t, n);
        };
      }
      function g(e, t) {
        return t
          ? function (n, s) {
              return r.Message.addToRepeatedWrapperField(this, e, n, t, s);
            }
          : function (t, n) {
              r.Message.addToRepeatedField(this, e, t, n);
            };
      }
    },
    8803: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => s });
      const r = new Map();
      function s(e) {
        const t = e.getVRPathPropertyKey(),
          n = e.serializeBase64String(),
          s = r.get(t);
        (s && s == n) ||
          (r.set(t, n),
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VRPathProperties.SetStringPathProperty(t, n));
      }
    },
    9728: (e, t, n) => {
      "use strict";
      n.d(t, { G: () => l });
      var r = n(1635),
        s = n(6090),
        i = n(7813),
        a = n(3236),
        o = n(3606);
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
        static get Instance() {
          return l.s_Instance || (l.s_Instance = new l()), l.s_Instance;
        }
        constructor() {
          (this.m_sceneApplicationState = s.HW.None),
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
            (0, i.Gn)(this);
        }
        updateTransitionState() {
          if (!VRHTML) return;
          let e = VRHTML.VRApplications.GetSceneApplicationState();
          e == s.HW.Starting
            ? (this.m_sceneApplicationState == s.HW.Quitting &&
                this.resetLatchedValued(),
              (this.m_sceneApplicationState = e),
              this.updateLatchedValues(),
              this.cancelUnresponsiveTimeout(),
              this.cancelNoAppTimeout())
            : e == s.HW.Quitting
              ? (this.m_sceneApplicationState == s.HW.Starting &&
                  this.resetLatchedValued(),
                (this.m_sceneApplicationState = e),
                this.updateLatchedValues(),
                this.cancelUnresponsiveTimeout(),
                this.cancelNoAppTimeout())
              : e == s.HW.Running
                ? ((this.m_sceneApplicationState = e),
                  this.cancelUnresponsiveTimeout(),
                  this.cancelNoAppTimeout(),
                  this.updateLatchedValues())
                : e == s.HW.None
                  ? (this.cancelUnresponsiveTimeout(),
                    this.m_sceneApplicationState != s.HW.None &&
                      this.startNoAppTimer())
                  : e == s.HW.Waiting &&
                    (this.m_sceneApplicationState != s.HW.Waiting &&
                      this.startUnresponsiveTimer(),
                    this.cancelNoAppTimeout()),
            this.log("updateTransitionState: " + s.HW[e]),
            this.log("this.m_sceneAppKey: " + this.m_sceneAppKey),
            this.log("this.m_sceneAppName: " + this.m_sceneAppName),
            this.log(
              "this.m_sceneApplicationState: " + this.m_sceneApplicationState,
            );
        }
        onUnresponsiveTimeout() {
          window.clearTimeout(this.m_unresponsiveTimeout),
            (this.m_unresponsiveTimeout = void 0),
            (this.m_sceneApplicationState = s.HW.Waiting),
            this.updateLatchedValues();
        }
        onNoAppTimeout() {
          window.clearTimeout(this.m_noAppTimeout),
            (this.m_noAppTimeout = void 0),
            VRHTML.VRApplications.GetSceneApplicationState() == s.HW.None &&
              this.resetLatchedValued();
        }
        updateLatchedValues() {
          if (VRHTML)
            if (
              VRHTML.VRApplications.GetSceneApplicationState() == s.HW.Starting
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
            (this.m_sceneApplicationState = s.HW.None);
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
        (0, r.Cg)([i.EW], l.prototype, "SceneApplicationState", null),
        (0, r.Cg)([i.EW], l.prototype, "SceneAppName", null),
        (0, r.Cg)([i.EW], l.prototype, "SceneAppKey", null),
        (0, r.Cg)([i.EW], l.prototype, "SceneAppIsHome", null),
        (0, r.Cg)([i.sH], l.prototype, "m_sceneApplicationState", void 0),
        (0, r.Cg)([i.sH], l.prototype, "m_sceneAppName", void 0),
        (0, r.Cg)([i.sH], l.prototype, "m_sceneAppKey", void 0),
        (0, r.Cg)([a.o], l.prototype, "updateTransitionState", null),
        (0, r.Cg)([a.o], l.prototype, "onUnresponsiveTimeout", null),
        (0, r.Cg)([a.o], l.prototype, "onNoAppTimeout", null),
        (0, r.Cg)([a.o], l.prototype, "updateLatchedValues", null),
        (0, r.Cg)([a.o], l.prototype, "resetLatchedValued", null),
        (0, r.Cg)([a.o], l.prototype, "cancelUnresponsiveTimeout", null),
        (0, r.Cg)([a.o], l.prototype, "startUnresponsiveTimer", null),
        (0, r.Cg)([a.o], l.prototype, "startNoAppTimer", null),
        (0, r.Cg)([a.o], l.prototype, "cancelNoAppTimeout", null),
        (0, r.Cg)([a.o], l.prototype, "log", null);
    },
    3473: (e, t, n) => {
      "use strict";
      n.d(t, { f: () => a });
      var r = n(1635),
        s = n(3236),
        i = n(7813);
      class a {
        static get Instance() {
          return a.s_Instance || (a.s_Instance = new a()), a.s_Instance;
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
            (0, i.Gn)(this);
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
      (a.s_Instance = null),
        (0, r.Cg)([i.sH], a.prototype, "m_nVolume", void 0),
        (0, r.Cg)([i.sH], a.prototype, "m_nMirrorVolume", void 0),
        (0, r.Cg)([i.sH], a.prototype, "m_nMicrophoneVolume", void 0),
        (0, r.Cg)([i.sH], a.prototype, "m_bMuted", void 0),
        (0, r.Cg)([i.sH], a.prototype, "m_bMirrorMuted", void 0),
        (0, r.Cg)([i.sH], a.prototype, "m_bMicrophoneMuted", void 0),
        (0, r.Cg)([i.EW], a.prototype, "muted", null),
        (0, r.Cg)([i.EW], a.prototype, "mirrorMuted", null),
        (0, r.Cg)([i.EW], a.prototype, "microphoneMuted", null),
        (0, r.Cg)([i.EW], a.prototype, "volume", null),
        (0, r.Cg)([i.EW], a.prototype, "mirrorVolume", null),
        (0, r.Cg)([i.EW], a.prototype, "microphoneVolume", null),
        (0, r.Cg)([s.o], a.prototype, "toggleMute", null),
        (0, r.Cg)([s.o], a.prototype, "toggleMirrorMute", null),
        (0, r.Cg)([s.o], a.prototype, "toggleMicrophoneMute", null),
        (0, r.Cg)([s.o], a.prototype, "setVolume", null),
        (0, r.Cg)([s.o], a.prototype, "setMirrorVolume", null),
        (0, r.Cg)([s.o], a.prototype, "setMicrophoneVolume", null),
        (0, r.Cg)([s.o], a.prototype, "onSystemVolumeChanged", null);
    },
    4074: (e, t, n) => {
      "use strict";
      n.d(t, { $k: () => c, D7: () => s, Y7: () => a, tC: () => l });
      var r = n(7221);
      function s(e) {
        try {
          return r.DX.deserializeBinary(e).toObject();
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
      var a;
      !(function (e) {
        (e[(e.Success = 0)] = "Success"),
          (e[(e.HeaderSerializationFailure = 1)] =
            "HeaderSerializationFailure"),
          (e[(e.PayloadSerializationFailure = 2)] =
            "PayloadSerializationFailure"),
          (e[(e.SendFailure = 3)] = "SendFailure");
      })(a || (a = {}));
      class o extends Error {
        constructor(e) {
          var t;
          let n = "";
          switch (null == e ? void 0 : e.origin) {
            case 1:
              n += "Local ";
              break;
            case 2:
              n += "Remote ";
          }
          (n += (0, r.Ut)(
            null !== (t = null == e ? void 0 : e.error) && void 0 !== t ? t : 0,
          )),
            (null == e ? void 0 : e.description) && (n += ": " + e.description),
            super(n),
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
        SendErrorResponse(e, t, n) {
          if (null == (null == e ? void 0 : e.message_id)) return;
          const s = new r.iM();
          s.set_error(t),
            s.set_origin(2),
            n instanceof Error
              ? s.set_description(n.message)
              : n && "string" == typeof n && s.set_description(n),
            console.error(
              "Sending VRGamepadUI Message Error Response",
              (0, r.Ut)(t),
              ":",
              s.description(),
            );
          const i = {
              message_id: this.m_Endpoint.CreateVRGamepadUIMessageId(),
              response_to_message_id: e.message_id,
              is_error_response: !0,
            },
            o = this.m_Endpoint.SendVRGamepadUIMessage(i, s);
          o == a.Success ||
            console.error(
              "Failed to send VRGamepadUI Message Error Response:",
              a[o],
              { requestHeader: e, responseHeader: i },
            );
        }
        HandleVRGamepadUIMessageRequest(e, t) {
          console.assert(null == e.response_to_message_id);
          const n = this.m_mapRequestHandlers[e.name];
          if (!n)
            return void this.SendErrorResponse(
              e,
              1,
              `Unknown VRGamepadUI request name: ${e.name}`,
            );
          const r = this.m_mapMethods.get(n.strMethod);
          if (!r)
            return void this.SendErrorResponse(
              e,
              1,
              `Unimplemented VRGamepadUI method: ${n.strMethod}`,
            );
          const s = i(() =>
            n.msgClassRequest_t.deserializeBinary(t).toObject(),
          );
          if ("error" in s) return void this.SendErrorResponse(e, 7, s.error);
          const o = s.result,
            l = i(() => r(o));
          if ("error" in l) return void this.SendErrorResponse(e, 2, l.error);
          let c = l.result;
          null == c && (c = {});
          (c instanceof Promise ? c : Promise.resolve(c)).then(
            (t) => {
              const r = i(() =>
                n.msgClassResponse_t.fromObject(null != t ? t : {}),
              );
              if ("error" in r)
                return void this.SendErrorResponse(e, 6, r.error);
              const s = {
                  message_id: this.m_Endpoint.CreateVRGamepadUIMessageId(),
                  response_to_message_id: e.message_id,
                },
                o = this.m_Endpoint.SendVRGamepadUIMessage(s, r.result);
              if (o == a.Success);
              else
                switch (o) {
                  case a.HeaderSerializationFailure:
                  case a.PayloadSerializationFailure:
                    this.SendErrorResponse(e, 6, "Response " + a[o]);
                    break;
                  default:
                    console.error(
                      "Failed to send VRGamepadUI Message Response:",
                      a[o],
                      { requestHeader: e, responseHeader: s },
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
          const n = this.m_mapPendingResponses.get(e.response_to_message_id);
          if (
            (this.DeletePendingRequest(e.response_to_message_id),
            e.is_error_response)
          ) {
            const s = i(() => r.iM.deserializeBinary(t).toObject());
            if ("error" in s)
              return void console.error(
                "Received a VRGamepadUI Message error response, but couldn't deserialize it.",
                e,
              );
            const a = new o(s.result);
            return (
              console.warn(
                "Received a VRGamepadUI Message error response",
                a.message,
              ),
              void n.fnReject(a)
            );
          }
          const s = i(() =>
            n.msgExpectedResponseClass_t.deserializeBinary(t).toObject(),
          );
          "error" in s
            ? console.error(
                "Received a VRGamepadUI Message response, but couldn't deserialize it.",
                e,
              )
            : n.fnResolve(s.result);
        }
        SendVRGamepadUIRequest(e, t, n) {
          return new Promise((r, s) => {
            const i = (e) => {
              try {
                s(e);
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
              msgExpectedResponseClass_t: n,
              nTimeoutHandle: c,
              fnResolve: (e) => {
                try {
                  r(e);
                } catch (e) {
                  console.error(
                    "Error resolving VRGamepadUI Message request call:",
                    e,
                  );
                }
              },
              fnReject: i,
            });
            const d = { name: e, message_id: l },
              u = this.m_Endpoint.SendVRGamepadUIMessage(d, t);
            u == a.Success ||
              i(new o({ error: 0, origin: 1, description: "Request " + a[u] }));
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
    1333: (e, t, n) => {
      "use strict";
      n.d(t, {
        Gz: () => u,
        HR: () => _,
        aJ: () => m,
        kP: () => h,
        mO: () => p,
      });
      var r = n(1635),
        s = n(3236),
        i = n(2505),
        a = n.n(i),
        o = n(7813),
        l = n(6090),
        c = n(7496),
        d = n(3606);
      const u = 16,
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
            (this.settings = o.sH.map()),
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
                a()
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
                a()
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
                a()
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
                a()
                  .get("/settings_getinfo")
                  .then((t) => {
                    e(t.data);
                  })
                  .catch((e) => {
                    t(e);
                  });
              });
            }),
            (0, o.Gn)(this);
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
          return (0, r.sH)(this, void 0, void 0, function* () {
            if (this.m_bInitStarted) return;
            (this.m_bInitStarted = !0),
              (this.m_bIsSettingApp = e),
              this.m_bIsSettingApp &&
                (window.addEventListener("hashchange", this.onHashChanged),
                this.onHashChanged()),
              (0, o.fm)(
                () => {
                  let e = [];
                  if (0 != this.pendingChanges.size) {
                    for (const [t, n] of this.pendingChanges.entries())
                      e.push({ name: t, value: n });
                    this.pendingChanges.clear(),
                      a()
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
          return (0, r.sH)(this, void 0, void 0, function* () {
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
          return (0, r.sH)(this, void 0, void 0, function* () {
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
        setRoute(e, t, n) {
          if (this.m_bIsSettingApp) {
            (e = null != e ? e : ""), (n = null != n ? n : []);
            const r = t ? [e, t, ...n] : [e],
              s = r.join("/");
            window.location.hash.substring(1) != s &&
              ((window.location.hash = s), (this.route = r));
          } else
            this.m_mailbox.connected &&
              this.m_mailbox.SendMessage(this.MailboxName, {
                type: g,
                page: e,
                section: t,
                sectionParams: n,
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
        SetDashboardForceBoundsVisible(e, t, n) {
          this.m_mailbox.connected &&
            this.m_mailbox.SendMessage(c.cQ.k_sDashboardMailboxName, {
              type: c.cQ.k_sSetDashboardForceBoundsVisible,
              force_bounds_visible: n,
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
            const n = e.values[t];
            if (
              this.settings.get(t) != n ||
              this.m_mapSettingsLastWriteInfo.has(t)
            ) {
              if (this.settingsSchema) {
                const e = this.GetSettingSchema(t);
                e && e.requires_restart && this.SetRestartRequired();
              }
              this.SetSettingValueFromServer(t, n);
            }
          }
        }
        SetSettingValueFromServer(e, t) {
          const n = 1e3 * v.SERVER_SETTING_MERGE_DEFER_DURATION;
          if (this.m_mapSettingsLastWriteInfo.has(e)) {
            let r = this.m_mapSettingsLastWriteInfo.get(e);
            if (new Date().getTime() - r.nLastUserUpdateTime < n)
              return (
                window.clearTimeout(r.nPendingServerValueUpdateTimeout),
                void (r.nPendingServerValueUpdateTimeout = window.setTimeout(
                  () => {
                    this.SetSettingValueFromServer(e, t);
                  },
                  n,
                ))
              );
            window.clearTimeout(r.nPendingServerValueUpdateTimeout),
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
          return (0, r.sH)(this, void 0, void 0, function* () {
            return (0, o.z7)(() => !!this.settingsSchema);
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
            let n = t.length - 1;
            return e.substr(0, n) == t.substr(0, n);
          }
          return e == t;
        }
        GetSettingSchema(e) {
          for (let t of this.settingsSchema)
            if (t.values)
              for (let n of t.values)
                if (n && this.SettingNameMatches(e, n.name)) return n;
          return null;
        }
        ResetSettingsValue(e) {
          this.SetSettingsValue(e, null);
        }
        ResetSettingsValues(...e) {
          e.forEach(this.ResetSettingsValue);
        }
        SetSettingsValue(e, t) {
          let n = this.GetSettingSchema(e);
          null != n
            ? (null != t &&
                ("int" == n.type
                  ? (t = parseInt(t))
                  : "float" == n.type
                    ? (t = parseFloat(t))
                    : "string" == n.type
                      ? (t = "" + t)
                      : "bool" == n.type && (t = !!t)),
              n.requires_restart && this.SetRestartRequired(),
              this.SetSettingsStringValueWithoutSchema(e, t))
            : console.log(
                "Tried to set setting " +
                  e +
                  " but it's not in the schema! Aborting",
              );
        }
        SetSettingsStringValueWithoutSchema(e, t) {
          if (VRHTML) {
            const n = e.split("/");
            if (4 != n.length || "" != n[0] || "settings" != n[1])
              throw new Error("bad settings path " + e);
            VRHTML.VRSettings.Set(n[2], n[3], t),
              this.settings.set(e, VRHTML.VRSettings.Get(n[2], n[3]));
          } else
            null != t && this.settings.set(e, t), this.pendingChanges.set(e, t);
          this.UpdateLastUserWriteTimeForSetting(e);
        }
        GetSettingsValue(e) {
          return (0, r.sH)(this, void 0, void 0, function* () {
            return new Promise(function (t, n) {
              a()
                .get("/settings_get", { params: { name: e } })
                .then((e) => {
                  t(e.data);
                })
                .catch((e) => {
                  n(null);
                });
            });
          });
        }
        ResetAppSettings(e) {
          return a()
            .post("/app/resetsettings", { app: e })
            .then((t) => this.GetAppSettings(e))
            .catch((e) => {});
        }
        ResetAllAppResolutionScales() {
          return a()
            .post("/app/resetallresolutionscales")
            .then((e) => !0)
            .catch((e) => {});
        }
        SetAppSettings(e, t) {
          let n = Object.assign(Object.assign({}, t), { app: e });
          a().post("/app/setsettings", n);
          for (let e = 0; e < this.apps.length; e++)
            if (this.apps[e].key == n.app) {
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
          return (0, r.sH)(this, void 0, void 0, function* () {
            return new Promise(function (t, n) {
              a()
                .get("/app/getsettings", { params: { app: e } })
                .then((e) => {
                  t(e.data);
                })
                .catch((e) => {
                  n(null);
                });
            });
          });
        }
        GetAppInfo(e) {
          return (0, r.sH)(this, void 0, void 0, function* () {
            return new Promise(function (t, n) {
              a()
                .get("/app/getinfo", { params: { app: e } })
                .then((e) => {
                  t(e.data);
                })
                .catch((e) => {
                  n(null);
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
          return this.settings.get(d.F2);
        }
        set showAdvancedSettings(e) {
          this.SetSettingsValue(d.F2, e);
        }
        showBindingCallouts(e) {
          let t = { type: "request_binding_callouts", app_key: e };
          this.m_mailbox.SendMessage(l.I0, t);
        }
      }
      (v.SERVER_SETTING_MERGE_DEFER_DURATION = 1),
        (0, r.Cg)([o.sH], v.prototype, "connected", void 0),
        (0, r.Cg)([o.sH], v.prototype, "settingsSchema", void 0),
        (0, r.Cg)([o.sH], v.prototype, "settings", void 0),
        (0, r.Cg)([o.sH], v.prototype, "systemInfo", void 0),
        (0, r.Cg)([o.sH], v.prototype, "audioDevices", void 0),
        (0, r.Cg)([o.sH], v.prototype, "apps", void 0),
        (0, r.Cg)([o.sH], v.prototype, "probablyOwnedAppkeys", void 0),
        (0, r.Cg)([o.sH], v.prototype, "showInternalSettings", void 0),
        (0, r.Cg)([o.sH], v.prototype, "workshopStateChangedCanary", void 0),
        (0, r.Cg)([o.sH], v.prototype, "pendingChanges", void 0),
        (0, r.Cg)([o.sH], v.prototype, "route", void 0),
        (0, r.Cg)([s.o], v.prototype, "OpenWebSocketToHost", null),
        (0, r.Cg)([s.o], v.prototype, "OnWorkshopStateChangedMessage", null),
        (0, r.Cg)([s.o], v.prototype, "OnChangeRouteMessage", null),
        (0, r.Cg)([s.o], v.prototype, "OnAppConfigChangedMessage", null),
        (0, r.Cg)([s.o], v.prototype, "OnRefreshRateChangeMessage", null),
        (0, r.Cg)([o.XI.bound], v.prototype, "onHashChanged", null),
        (0, r.Cg)([o.EW], v.prototype, "routePage", null),
        (0, r.Cg)([o.EW], v.prototype, "routePageSection", null),
        (0, r.Cg)([o.EW], v.prototype, "routePageSectionParams", null),
        (0, r.Cg)([o.XI], v.prototype, "setRoutePage", null),
        (0, r.Cg)([o.XI], v.prototype, "setRoutePageSection", null),
        (0, r.Cg)([o.XI], v.prototype, "setRoutePageSectionParams", null),
        (0, r.Cg)([o.XI], v.prototype, "setRoute", null),
        (0, r.Cg)([s.o], v.prototype, "SetDashboardFadeSupression", null),
        (0, r.Cg)([s.o], v.prototype, "SetDashboardForceBoundsVisible", null),
        (0, r.Cg)([s.o], v.prototype, "SetRestartRequired", null),
        (0, r.Cg)([s.o], v.prototype, "OnWebSocketOpen", null),
        (0, r.Cg)([s.o], v.prototype, "OnWebSocketClose", null),
        (0, r.Cg)([s.o], v.prototype, "WebSocketSend", null),
        (0, r.Cg)([s.o], v.prototype, "OnWebSocketMessage", null),
        (0, r.Cg)([o.XI], v.prototype, "OnVRSettings", null),
        (0, r.Cg)([o.XI], v.prototype, "SetSettingValueFromServer", null),
        (0, r.Cg)([o.XI], v.prototype, "OnVRSettingsSchema", null),
        (0, r.Cg)([o.XI.bound], v.prototype, "ResetSettingsValue", null),
        (0, r.Cg)([o.XI], v.prototype, "ResetSettingsValues", null),
        (0, r.Cg)([o.XI], v.prototype, "SetSettingsValue", null),
        (0, r.Cg)(
          [o.XI],
          v.prototype,
          "SetSettingsStringValueWithoutSchema",
          null,
        ),
        (0, r.Cg)([o.EW], v.prototype, "NumSupersamplingSteps", null);
      const _ = new v();
      window.VRSettingsState = _;
    },
    6646: (e, t, n) => {
      "use strict";
      n.d(t, { X: () => c });
      var r = n(1635),
        s = n(3236),
        i = n(2505),
        a = n.n(i),
        o = n(7813);
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
                ? new Promise(function (t, n) {
                    a()
                      .get("/identify_controller.action?serial=" + e)
                      .then((e) => {
                        t();
                      })
                      .catch((e) => {
                        n(e);
                      });
                  })
                : null;
            }),
            (this.GetUSBDeviceList = function () {
              return new Promise(function (e, t) {
                a()
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
              return new Promise(function (t, n) {
                a()
                  .get(
                    "/toggle_room_overview_feed.action?enabled=" +
                      (e ? "1" : "0"),
                  )
                  .then((e) => {
                    t();
                  })
                  .catch((e) => {
                    n(e);
                  });
              });
            }),
            (0, o.Gn)(this);
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
          return (0, r.sH)(this, void 0, void 0, function* () {
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
          return new Promise(function (t, n) {
            a()
              .get("/steamvr_launch_application.action?param1=" + e)
              .then((e) => {
                t();
              })
              .catch((e) => {
                n(e);
              });
          });
        }
        TEMP_RegisterPollingWebsocketMessage(e, t) {
          setInterval(() => {
            a()
              .get(e)
              .then((e) => {
                this.OnWebSocketMessage({ data: JSON.stringify(e.data) });
              })
              .catch((e) => {});
          }, t);
        }
      }
      (0, r.Cg)([o.sH], l.prototype, "status", void 0),
        (0, r.Cg)([o.sH], l.prototype, "framerate", void 0),
        (0, r.Cg)([o.sH], l.prototype, "notifications", void 0),
        (0, r.Cg)([o.sH], l.prototype, "roomoverview", void 0),
        (0, r.Cg)([o.sH], l.prototype, "connected", void 0),
        (0, r.Cg)([s.o], l.prototype, "OpenWebSocketToHost", null),
        (0, r.Cg)([s.o], l.prototype, "OnWebSocketOpen", null),
        (0, r.Cg)([s.o], l.prototype, "OnWebSocketClose", null),
        (0, r.Cg)([s.o], l.prototype, "WebSocketSend", null),
        (0, r.Cg)([s.o], l.prototype, "OnWebSocketMessage", null),
        (0, r.Cg)(
          [s.o],
          l.prototype,
          "TEMP_RegisterPollingWebsocketMessage",
          null,
        );
      const c = new l();
      window.VRSystemState = c;
    },
    3696: (e, t, n) => {
      "use strict";
      n.d(t, { H: () => p });
      var r = n(1635),
        s = n(3236),
        i = n(7813),
        a = n(6090),
        o = n(9728),
        l = n(1333),
        c = n(1835),
        d = n(8313);
      class u {
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
            (0, i.Gn)(this);
        }
        Init() {
          return (0, r.sH)(this, void 0, void 0, function* () {
            yield this.Load(),
              (0, i.fm)(() => this.Save()),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.RegisterForChaperoneStatusEvents(
                  this.onChaperoneStatusEvents,
                ),
              (0, i.mJ)(
                () => this.m_bOkOutsideOfPlayspace,
                (e) => {
                  null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VRChaperone.SetOkOutsidePlayspace(e);
                },
              ),
              (0, i.mJ)(
                () => o.G.Instance.SceneAppKey,
                (e) => {
                  this.m_bOkOutsideOfPlayspace = !1;
                },
              );
          });
        }
        get roomSetupStep() {
          return this.m_eRoomSetupStep;
        }
        setRoomSetupStep(e, t) {
          let n = !!(null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.VRProperties.GetBoolProperty(
                "/user/head",
                a.fD.VRLinkClientHMDSupportsRoomSetupRequests_Bool,
              ));
          if (
            !!(null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VRProperties.GetBoolProperty(
                  "/user/head",
                  a.fD.VRLinkClientHMDSupportsRoomSetupRequests_Bool,
                )) &&
            c.SW.activeLinkServer
          ) {
            const t = (function (e) {
              switch (e) {
                case 1:
                  return a.$Z.RecenterCountdown;
                case 3:
                  return a.$Z.RoomSetupFloor;
                case 2:
                  return a.$Z.FloorAdjustExisting;
                default:
                  return a.$Z.Invalid;
              }
            })(e);
            t != a.$Z.Invalid
              ? (console.log(
                  `Remoting RoomSetupStep change request to client ${e}`,
                ),
                VRHTML.VRLink.SendRoomSetupRequest(t))
              : console.log(`Invalid remote RoomSetupStep change request ${e}`);
          } else {
            if (
              !n &&
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
                2 == e ? a._1.Manual : a._1.PendingResetIfNeeded,
              ),
              4 == e &&
                3 == this.m_eRoomSetupStep &&
                (null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.VRChaperoneSetup.ResetPlayspaceRadius()),
              4 == e
                ? null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.VRChaperoneSetup.SetPlayspaceMode(d.Fv.Circle)
                : 5 == e
                  ? null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VRChaperoneSetup.SetPlayspaceMode(d.Fv.Drawn)
                  : null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VRChaperoneSetup.SetPlayspaceMode(d.Fv.None),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRChaperoneSetup.NotifyRoomSetupStep(e, !!t),
              (this.m_eRoomSetupStep = e);
          }
        }
        Load() {
          return (0, r.sH)(this, void 0, void 0, function* () {
            var e, t, n, r, s;
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
                  (n = l.HR.settings.get(
                    "/settings/steamvr/backgroundDomeRadius",
                  )) && void 0 !== n
                  ? n
                  : 20),
              (this.m_fBackgroundOffsetX =
                null !==
                  (r = l.HR.settings.get(
                    "/settings/steamvr/backgroundOffsetX",
                  )) && void 0 !== r
                  ? r
                  : 0),
              (this.m_fBackgroundOffsetZ =
                null !==
                  (s = l.HR.settings.get(
                    "/settings/steamvr/backgroundOffsetZ",
                  )) && void 0 !== s
                  ? s
                  : 0);
          });
        }
        Save() {
          return (0, r.sH)(this, void 0, void 0, function* () {});
        }
        onChaperoneStatusEvents(e) {
          const t = !!(1 & e),
            n = !!(2 & e);
          t != this.m_bBoundsVisible && (this.m_bBoundsVisible = t),
            n != this.m_bHmdOutOfBoundsStrict &&
              (this.m_bHmdOutOfBoundsStrict = n);
        }
      }
      (0, r.Cg)([i.sH], u.prototype, "m_bShowFloor", void 0),
        (0, r.Cg)([i.sH], u.prototype, "m_bShowFloorFar", void 0),
        (0, r.Cg)([i.sH], u.prototype, "m_fBackgroundDomeRadius", void 0),
        (0, r.Cg)([i.sH], u.prototype, "m_fBackgroundOffsetX", void 0),
        (0, r.Cg)([i.sH], u.prototype, "m_fBackgroundOffsetZ", void 0),
        (0, r.Cg)([i.sH], u.prototype, "m_bBoundsVisible", void 0),
        (0, r.Cg)([i.sH], u.prototype, "m_bHmdOutOfBoundsStrict", void 0),
        (0, r.Cg)([i.sH], u.prototype, "m_bOkOutsideOfPlayspace", void 0),
        (0, r.Cg)([i.sH], u.prototype, "m_eRoomSetupStep", void 0),
        (0, r.Cg)([i.XI], u.prototype, "setRoomSetupStep", null),
        (0, r.Cg)([s.o], u.prototype, "Load", null),
        (0, r.Cg)([s.o], u.prototype, "Save", null),
        (0, r.Cg)([s.o], u.prototype, "onChaperoneStatusEvents", null);
      const p = new u();
      window.ConstructStore = p;
    },
    1835: (e, t, n) => {
      "use strict";
      n.d(t, { Nr: () => _, SF: () => v, SW: () => w, tb: () => S });
      var r = n(1635),
        s = n(6090),
        i = n(3236),
        a = n(7813),
        o = n(8696),
        l = n(1333),
        c = n(3606),
        d = n(7496),
        u = n(6943),
        p = n(4963),
        m = n(6013),
        h = n(8803),
        g = n(9728);
      const v = ["system.dashboard.quicklaunch", void 0].filter(Boolean);
      var _, S, b, y;
      function R(e) {
        return (
          !(!(null == e ? void 0 : e.startsWith(c.bl)) || e == c.wi) || e == c.P
        );
      }
      !(function (e) {
        (e[(e.Large = 0)] = "Large"), (e[(e.Medium = 1)] = "Medium");
      })(_ || (_ = {})),
        (function (e) {
          (e[(e.PlayArea = 0)] = "PlayArea"),
            (e[(e.Dashboard = 1)] = "Dashboard");
        })(S || (S = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.View = 1)] = "View"),
            (e[(e.Theater = 2)] = "Theater");
        })(b || (b = {})),
        (function (e) {
          (e[(e.Persistent = 0)] = "Persistent"),
            (e[(e.OnDemand = 1)] = "OnDemand");
        })(y || (y = {}));
      class f {
        get activeLinkServer() {
          return this.m_bIsLinkServer && this.m_bLinkStreamActive;
        }
        constructor() {
          (this.m_bDashboardVisible = !1),
            (this.m_bPreviousDashboardVisible = void 0),
            (this.m_bShowLegacyBar = !1),
            (this.m_bVS = !1),
            (this.m_eVSMode = b.None),
            (this.m_sVSOverlayKey = void 0),
            (this.m_eTheaterStereo = s.MQ.Mono),
            (this.m_eIncognitoMode = s.rx.Unavailable),
            (this.m_mapOverlayState = new Map()),
            (this.m_setOverlaysViewedThisSession = new Set()),
            (this.m_mapActivePooledPopupRequests = new Map()),
            (this.m_fVRGamepadUI_MetersPerPixel = void 0),
            (this.m_fVRGamepadUI_GlobalActiveOverlayScale = void 0),
            (this.m_bRoomViewActive = void 0),
            (this.m_bRoomViewStreaming = void 0),
            (this.m_bGamepadFocusActive = void 0),
            (this.m_bLinkStreamActive = void 0),
            (this.m_bIsLinkClient = void 0),
            (this.m_bIsLinkServer = void 0),
            (this.m_streamingMode = void 0),
            (this.m_dashboardUserDistance = void 0),
            (this.m_dashboardUserScale = void 0),
            (this.m_sActiveOverlayID = null),
            (this.m_sActiveOverlaySummonKey = null),
            (this.m_bSuppressingFadeExternal = !1),
            (this.m_bTrackingRecording = !1),
            (this.s_ControlBarCurrentlyShownTooltip = null),
            (this.m_mapTabIdForSummonKey = new Map()),
            (this.m_mapSummonKeyForTabId = new Map()),
            (this.m_unNextTabId = 1),
            (0, a.Gn)(this);
        }
        Init() {
          return (0, r.sH)(this, void 0, void 0, function* () {
            var e;
            yield this.LoadSessionDevData(),
              (0, a.fm)(() => this.SaveSessionDevData()),
              (0, a.fm)(this.updateBodyClasses),
              (this.m_bDashboardVisible =
                VRHTML.VRCompositor.IsDashboardVisibleInternal()),
              null ===
                (e =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.RegisterForRoomViewChangedEvents) ||
                void 0 === e ||
                e.call(VRHTML, this.onRoomViewChanged),
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
              (0, a.mJ)(
                () => this.isTheaterMode,
                (e) => {
                  VRHTML.VRCompositor.SetAnimatedValue(
                    s.KI.TheaterFast,
                    e,
                    0.25,
                  ),
                    VRHTML.VRCompositor.SetAnimatedValue(
                      s.KI.TheaterSlow,
                      e,
                      e ? 2 : 1,
                    );
                },
              ),
              VRHTML.VRCompositor.SetAnimatedValue(
                s.KI.TheaterFast,
                this.isTheaterMode,
                0,
              ),
              VRHTML.VRCompositor.SetAnimatedValue(
                s.KI.TheaterSlow,
                this.isTheaterMode,
                0,
              ),
              (0, a.mJ)(
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
            t.set_webpack_build_timestamp(1755221209),
            (0, h.Z)(t);
        }
        LoadSessionDevData() {
          return (0, r.sH)(this, void 0, void 0, function* () {
            var e, t, n, r, s;
            const i = JSON.parse(
              null !== (e = sessionStorage.getItem(f.k_strSessionStorageKey)) &&
                void 0 !== e
                ? e
                : "{}",
            );
            (this.m_bShowLegacyBar =
              null !== (t = i.m_bShowLegacyBar) && void 0 !== t && t),
              (this.m_fVRGamepadUI_MetersPerPixel =
                null !== (n = i.m_fVRGamepadUI_MetersPerPixel) && void 0 !== n
                  ? n
                  : (0.167 / 120) * 1.1),
              (this.m_fVRGamepadUI_GlobalActiveOverlayScale =
                null !== (r = i.m_fVRGamepadUI_GlobalActiveOverlayScale) &&
                void 0 !== r
                  ? r
                  : 1.17);
            for (const e of null !== (s = i.m_rgPooledPopups) && void 0 !== s
              ? s
              : [])
              this.m_mapActivePooledPopupRequests.set(
                e.dashboard_popup_request_id,
                e,
              );
          });
        }
        SaveSessionDevData() {
          return (0, r.sH)(this, void 0, void 0, function* () {
            const e = {
              m_bShowLegacyBar: this.m_bShowLegacyBar,
              m_rgPooledPopups: Array.from(
                this.m_mapActivePooledPopupRequests.values(),
              ),
              m_fVRGamepadUI_MetersPerPixel: this.m_fVRGamepadUI_MetersPerPixel,
              m_fVRGamepadUI_GlobalActiveOverlayScale:
                this.m_fVRGamepadUI_GlobalActiveOverlayScale,
            };
            sessionStorage.setItem(f.k_strSessionStorageKey, JSON.stringify(e));
          });
        }
        GetTabIdForSummonKey(e) {
          if (!this.m_mapTabIdForSummonKey.has(e)) {
            const t = this.m_unNextTabId;
            this.m_unNextTabId++,
              this.m_mapTabIdForSummonKey.set(e, t),
              this.m_mapSummonKeyForTabId.set(t, e);
          }
          return this.m_mapTabIdForSummonKey.get(e);
        }
        GetSummonKeyForTabId(e) {
          return this.m_mapSummonKeyForTabId.get(e);
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
        get priorityGamepadFocusOverlay() {
          const e = [o.$z.Theater, o.$z.World, o.$z.RightHand, o.$z.LeftHand];
          for (const t of e)
            for (const [e, n] of this.m_mapOverlayState.entries())
              if (n.dockLocation == t && R(e)) return e;
          return null;
        }
        get eTheaterCurvature() {
          return l.HR.settings.get(c.Ju);
        }
        ToggleTheaterCurvature() {
          const e =
            this.eTheaterCurvature == o.Do.Curved ? o.Do.Flat : o.Do.Curved;
          l.HR.SetSettingsValue(c.Ju, e.toString());
        }
        ToggleTheaterStereo() {
          const e =
            this.m_eTheaterStereo == s.MQ.Mono ? s.MQ.Parallel : s.MQ.Mono;
          this.m_eTheaterStereo = e;
        }
        HideTheaterOverlay(e = o.$z.Dashboard, t) {
          for (const [n, r] of this.m_mapOverlayState.entries())
            r.dockLocation == o.$z.Theater &&
              ((r.dockLocation = e),
              t &&
                (null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.VROverlay.ShowDashboard(n)));
        }
        get isDarkMode() {
          return this.isTheaterMode;
        }
        setIncognitoMode(e) {
          this.m_eIncognitoMode = e;
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
          return u.Q.BOverlayExists(c.wi);
        }
        get isVRGamepadUI() {
          return (
            !!l.HR.settings.get(c.qt) ||
            u.Q.BOverlayExists(c.wi) ||
            u.Q.BOverlayExists(c.Vx)
          );
        }
        get currentDashboardPosition() {
          return this.isVRGamepadUI
            ? d.eo.VRGamepadUI
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
        onRoomViewChanged(e) {
          this.m_bRoomViewActive = e;
        }
        onRoomViewStreamChanged(e) {
          this.m_bRoomViewStreaming = e;
        }
        onGamepadFocusChanged(e) {
          this.m_bGamepadFocusActive = e;
        }
        onLinkStreamStatusEvents(e) {
          const t = !!(1 & e),
            n = !!(2 & e),
            r = !!(4 & e),
            s = 8 & e ? y.OnDemand : y.Persistent;
          t != this.m_bLinkStreamActive && (this.m_bLinkStreamActive = t),
            n != this.m_bIsLinkClient && (this.m_bIsLinkClient = n),
            r != this.m_bIsLinkServer && (this.m_bIsLinkServer = r),
            s != this.m_streamingMode && (this.m_streamingMode = s);
        }
        onTrackingRecordingChanged(e) {
          this.m_bTrackingRecording = e;
        }
        get dashboardDistance() {
          if (this.m_dashboardUserDistance) return this.m_dashboardUserDistance;
          return {
            [d.eo.Near]: 0.925,
            [d.eo.Middle]: 1.05,
            [d.eo.Far]: 1.2,
            [d.eo.VRGamepadUI]: 1.15,
          }[w.currentDashboardPosition];
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
            [d.eo.Near]: -0.07,
            [d.eo.Middle]: -0.08,
            [d.eo.Far]: -0.09,
            [d.eo.VRGamepadUI]: -0.09,
          }[w.currentDashboardPosition];
          const n = -this.dashboardDistance;
          return {
            channel: s.KI.TheaterFast,
            from: [0, t, n],
            to: [0, t - 0.15, n],
            interp: s.$.SmoothStep,
          };
        }
        get dashboardScale() {
          var e;
          if (this.m_dashboardUserScale) return this.m_dashboardUserScale;
          let t = 1;
          const n = w.currentDashboardPosition;
          return (
            (t =
              n == d.eo.Near
                ? 0.36
                : n == d.eo.Middle
                  ? 0.41
                  : n == d.eo.Far
                    ? 0.47
                    : 0.41),
            (t *=
              null !==
                (e =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VRProperties.GetFloatProperty(
                        s.Gz,
                        s.fD.DashboardScale_Float,
                      )) && void 0 !== e
                ? e
                : 1),
            t
          );
        }
        get sceneAppDimmingActive() {
          const e = g.G.Instance.SceneApplicationState !== s.HW.None,
            t =
              this.m_bSuppressingFadeExternal &&
              this.m_sActiveOverlaySummonKey == c.Wt,
            n = l.HR.settings.get(
              "/settings/dashboard/omitDashboardFadeWithSteamVRHome",
            ),
            r = !g.G.Instance.SceneAppIsHome || !n;
          return this.m_bDashboardVisible && r && !t && e;
        }
        isActiveDashboardOverlay(e) {
          return (
            !!this.m_sActiveOverlayID && this.m_sActiveOverlaySummonKey == e
          );
        }
      }
      (f.k_strSessionStorageKey = "DashboardStoreSessionStorage"),
        (0, r.Cg)([a.sH], f.prototype, "m_bDashboardVisible", void 0),
        (0, r.Cg)([a.sH], f.prototype, "m_bShowLegacyBar", void 0),
        (0, r.Cg)([a.sH], f.prototype, "m_bVS", void 0),
        (0, r.Cg)([a.sH], f.prototype, "m_eVSMode", void 0),
        (0, r.Cg)([a.sH], f.prototype, "m_sVSOverlayKey", void 0),
        (0, r.Cg)([a.sH], f.prototype, "m_eTheaterStereo", void 0),
        (0, r.Cg)([a.sH], f.prototype, "m_eIncognitoMode", void 0),
        (0, r.Cg)([a.sH], f.prototype, "m_mapOverlayState", void 0),
        (0, r.Cg)(
          [a.sH],
          f.prototype,
          "m_setOverlaysViewedThisSession",
          void 0,
        ),
        (0, r.Cg)(
          [a.sH],
          f.prototype,
          "m_mapActivePooledPopupRequests",
          void 0,
        ),
        (0, r.Cg)([a.sH], f.prototype, "m_fVRGamepadUI_MetersPerPixel", void 0),
        (0, r.Cg)(
          [a.sH],
          f.prototype,
          "m_fVRGamepadUI_GlobalActiveOverlayScale",
          void 0,
        ),
        (0, r.Cg)([a.sH], f.prototype, "m_bRoomViewActive", void 0),
        (0, r.Cg)([a.sH], f.prototype, "m_bRoomViewStreaming", void 0),
        (0, r.Cg)([a.sH], f.prototype, "m_bGamepadFocusActive", void 0),
        (0, r.Cg)([a.sH], f.prototype, "m_bLinkStreamActive", void 0),
        (0, r.Cg)([a.sH], f.prototype, "m_bIsLinkClient", void 0),
        (0, r.Cg)([a.sH], f.prototype, "m_bIsLinkServer", void 0),
        (0, r.Cg)([a.sH], f.prototype, "m_streamingMode", void 0),
        (0, r.Cg)([a.sH], f.prototype, "m_dashboardUserDistance", void 0),
        (0, r.Cg)([a.sH], f.prototype, "m_dashboardUserScale", void 0),
        (0, r.Cg)([a.sH], f.prototype, "m_sActiveOverlayID", void 0),
        (0, r.Cg)([a.sH], f.prototype, "m_sActiveOverlaySummonKey", void 0),
        (0, r.Cg)([a.sH], f.prototype, "m_bSuppressingFadeExternal", void 0),
        (0, r.Cg)([a.sH], f.prototype, "m_bTrackingRecording", void 0),
        (0, r.Cg)(
          [a.sH],
          f.prototype,
          "s_ControlBarCurrentlyShownTooltip",
          void 0,
        ),
        (0, r.Cg)([i.o], f.prototype, "LoadSessionDevData", null),
        (0, r.Cg)([i.o], f.prototype, "SaveSessionDevData", null),
        (0, r.Cg)([a.EW], f.prototype, "isTheaterMode", null),
        (0, r.Cg)([a.EW], f.prototype, "priorityGamepadFocusOverlay", null),
        (0, r.Cg)([a.EW], f.prototype, "eTheaterCurvature", null),
        (0, r.Cg)([a.XI], f.prototype, "setIncognitoMode", null),
        (0, r.Cg)([a.EW], f.prototype, "WorldLightingGain", null),
        (0, r.Cg)([a.EW], f.prototype, "isVRGamepadUIReady", null),
        (0, r.Cg)([a.EW], f.prototype, "isVRGamepadUI", null),
        (0, r.Cg)([i.o], f.prototype, "updateBodyClasses", null),
        (0, r.Cg)([i.o], f.prototype, "onRoomViewChanged", null),
        (0, r.Cg)([i.o], f.prototype, "onRoomViewStreamChanged", null),
        (0, r.Cg)([i.o], f.prototype, "onGamepadFocusChanged", null),
        (0, r.Cg)([i.o], f.prototype, "onLinkStreamStatusEvents", null),
        (0, r.Cg)([i.o], f.prototype, "onTrackingRecordingChanged", null),
        (0, r.Cg)([a.EW], f.prototype, "dashboardDistance", null),
        (0, r.Cg)([a.EW], f.prototype, "dashboardTranslation", null),
        (0, r.Cg)([a.EW], f.prototype, "dashboardScale", null),
        (0, r.Cg)([a.EW], f.prototype, "sceneAppDimmingActive", null),
        (0, r.Cg)([i.o], f.prototype, "isActiveDashboardOverlay", null);
      const w = new f();
      window.DashboardStore = w;
    },
    6943: (e, t, n) => {
      "use strict";
      n.d(t, { Q: () => l });
      var r = n(1635),
        s = n(7813),
        i = n(3236);
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
      (0, r.Cg)([i.o], a.prototype, "Dispatch", null);
      class o {
        constructor() {
          (this.m_mapAllOverlays = new Map()),
            (this.m_rgOverlayCreatedCallbacks = new a()),
            (this.m_rgOverlayDestroyedCallbacks = new a()),
            (0, s.Gn)(this);
        }
        Init() {
          return (0, r.sH)(this, void 0, void 0, function* () {
            VRHTML.RegisterForAllOverlayInfo(this.OnAllOverlayInfo);
          });
        }
        BOverlayExists(e) {
          return this.m_mapAllOverlays.has(e);
        }
        GetOverlayInfo(e) {
          return this.m_mapAllOverlays.get(e);
        }
        GetOverlays() {
          return this.m_mapAllOverlays;
        }
        RegisterForOverlayCreated(e) {
          return this.m_rgOverlayCreatedCallbacks.Register(e);
        }
        RegisterForOverlayDestroyed(e) {
          return this.m_rgOverlayDestroyedCallbacks.Register(e);
        }
        OnAllOverlayInfo(e) {
          const t = new Set(this.m_mapAllOverlays.keys()),
            n = [],
            r = [];
          for (const r of e)
            (null == r ? void 0 : r.sOverlayKey) &&
              (this.m_mapAllOverlays.has(r.sOverlayKey) || n.push(r),
              this.m_mapAllOverlays.set(r.sOverlayKey, r),
              t.delete(r.sOverlayKey));
          for (const e of t)
            r.push(this.m_mapAllOverlays.get(e)),
              this.m_mapAllOverlays.delete(e);
          n.forEach(this.m_rgOverlayCreatedCallbacks.Dispatch),
            r.forEach(this.m_rgOverlayDestroyedCallbacks.Dispatch);
        }
      }
      (0, r.Cg)([s.sH], o.prototype, "m_mapAllOverlays", void 0),
        (0, r.Cg)([s.XI.bound], o.prototype, "OnAllOverlayInfo", null);
      const l = new o();
      window.OverlayStore = l;
    },
    3246: (e, t, n) => {
      "use strict";
      n.d(t, { r: () => c });
      var r = n(1635),
        s = n(3236),
        i = n(7813),
        a = n(1909),
        o = n(6943);
      class l {
        constructor() {
          (this.m_mapActivePooledPopupRequests = new Map()),
            (this.m_mapRemoteVSIds = new Map()),
            (0, i.Gn)(this);
        }
        GetActivePooledPopups() {
          return Array.from(this.m_mapActivePooledPopupRequests.values());
        }
        Init() {
          return (0, r.sH)(this, void 0, void 0, function* () {
            yield this.LoadSessionDevData(),
              (0, i.fm)(() => this.SaveSessionDevData()),
              a.p.SteamVR.SetImplementation("ShowDashboardPopup", (e) => {
                this.m_mapActivePooledPopupRequests.set(
                  e.dashboard_popup_request_id,
                  e,
                );
              }),
              a.p.SteamVR.SetImplementation("HideDashboardPopup", (e) => {
                this.m_mapActivePooledPopupRequests.delete(
                  e.dashboard_popup_request_id,
                );
              }),
              o.Q.RegisterForOverlayDestroyed((e) => {
                [...this.m_mapActivePooledPopupRequests.values()]
                  .filter((t) => t.popup_overlay_key === e.sOverlayKey)
                  .forEach((e) =>
                    this.m_mapActivePooledPopupRequests.delete(
                      e.dashboard_popup_request_id,
                    ),
                  );
              });
          });
        }
        LoadSessionDevData() {
          return (0, r.sH)(this, void 0, void 0, function* () {
            var e, t;
            const n = JSON.parse(
              null !== (e = sessionStorage.getItem(l.k_strSessionStorageKey)) &&
                void 0 !== e
                ? e
                : "{}",
            );
            for (const e of null !== (t = n.m_rgPooledPopups) && void 0 !== t
              ? t
              : [])
              this.m_mapActivePooledPopupRequests.set(
                e.dashboard_popup_request_id,
                e,
              );
          });
        }
        SaveSessionDevData() {
          return (0, r.sH)(this, void 0, void 0, function* () {
            const e = {
              m_rgPooledPopups: Array.from(
                this.m_mapActivePooledPopupRequests.values(),
              ),
            };
            sessionStorage.setItem(l.k_strSessionStorageKey, JSON.stringify(e));
          });
        }
      }
      (l.k_strSessionStorageKey = "PooledPopupStoreSessionStorage"),
        (0, r.Cg)(
          [i.sH],
          l.prototype,
          "m_mapActivePooledPopupRequests",
          void 0,
        ),
        (0, r.Cg)([i.sH], l.prototype, "m_mapRemoteVSIds", void 0),
        (0, r.Cg)([s.o], l.prototype, "LoadSessionDevData", null),
        (0, r.Cg)([s.o], l.prototype, "SaveSessionDevData", null);
      const c = new l();
      window.PooledPopupStore = c;
    },
    998: (e, t, n) => {
      "use strict";
      n.d(t, { C: () => d, b: () => s });
      var r,
        s,
        i = n(1635),
        a = n(6540),
        o = n(3236),
        l = n(6090),
        c = (n(9471), n(1835), n(4015));
      !(function (e) {
        (e[(e.HorizontalPips = 0)] = "HorizontalPips"),
          (e[(e.VerticalBattery = 1)] = "VerticalBattery");
      })(s || (s = {}));
      let d = (r = class extends a.Component {
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
          var e, t, n;
          null === (e = this.m_BatteryStateChangedCallbackHandle) ||
            void 0 === e ||
            e.unregister(),
            null === (t = this.m_DeviceRoleChangedCallbackHandle) ||
              void 0 === t ||
              t.unregister(),
            null === (n = this.m_DeviceEventCallbackHandle) ||
              void 0 === n ||
              n.unregister();
        }
        UpdateControllerStatus() {
          var e;
          if (!l.Ay) return;
          const t = l.Ay.VRProperties.GetBoolProperty(
              this.props.trackedDeviceIndex,
              l.fD.DeviceProvidesBatteryStatus_Bool,
            ),
            n = l.Ay.VRSystem.GetControllerRoleForTrackedDeviceIndex(
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
                    t + r.kBatteryLevelHysteresis,
                    1,
                  )),
                  (this.batteryLevelStable = Math.max(
                    this.batteryLevelStable,
                    t - r.kBatteryLevelHysteresis,
                    0,
                  )));
          }
          let a = r.GetBatteryIcon(
              t,
              i,
              this.batteryLevelStable,
              s.HorizontalPips,
            ),
            o = this.GetRoleIcon(n);
          (a == this.state.batteryIconPath &&
            o == this.state.roleIconPath &&
            n == this.state.eRole) ||
            this.setState({ batteryIconPath: a, roleIconPath: o, eRole: n });
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
        static GetBatteryIcon(e, t, n, r) {
          if (!e) return null;
          const i =
            r == s.VerticalBattery
              ? "images/icons/vert"
              : "images/icons/controller_model";
          return t
            ? n < 0.15
              ? i + "_charging_red.png"
              : i + "_charging.png"
            : 0 == n
              ? null
              : n < 0.15
                ? i + "_low.png"
                : n < 0.3
                  ? i + "_battery_1.png"
                  : n < 0.6
                    ? i + "_battery_2.png"
                    : n < 0.9
                      ? i + "_battery_3.png"
                      : i + "_battery_4.png";
        }
        OnBatteryStateChanged(e) {
          e == this.props.trackedDeviceIndex && this.UpdateControllerStatus();
        }
        OnDeviceRoleChanged() {
          this.UpdateControllerStatus();
        }
        OnDeviceEvent(e, t, n) {
          e == l.ku.Activated &&
            n == this.props.trackedDeviceIndex &&
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
            n = 0;
          e == l.kG.TrackedControllerRole_LeftHand
            ? ((t = "/user/hand/left"), (n = -0.05))
            : e == l.kG.TrackedControllerRole_RightHand
              ? ((t = "/user/hand/right"), (n = 0.05))
              : (t = void 0);
          const r = !1;
          return a.createElement(
            a.Fragment,
            null,
            a.createElement(
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
              a.createElement(
                "div",
                {
                  className: "ControllerStatusRoot",
                  style: { width: 256, height: 256 },
                },
                a.createElement(
                  "div",
                  { className: "ControllerStatusFrame" },
                  a.createElement(
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
                    a.createElement("img", {
                      className: "ControllerHand",
                      src: this.state.roleIconPath,
                    }),
                    r,
                    r,
                  ),
                  a.createElement(
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
                    a.createElement("img", {
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
      (d.kBatteryLevelHysteresis = 0.02),
        (0, i.Cg)([o.o], d.prototype, "OnBatteryStateChanged", null),
        (0, i.Cg)([o.o], d.prototype, "OnDeviceRoleChanged", null),
        (0, i.Cg)([o.o], d.prototype, "OnDeviceEvent", null),
        (d = r = (0, i.Cg)([c.PA], d));
    },
    7496: (e, t, n) => {
      "use strict";
      n.d(t, { cQ: () => he, eo: () => ae });
      var r = n(1635),
        s = n(6090),
        i = n(3236),
        a = n(7813),
        o = n(6540),
        l = n(5818),
        c = n(6138),
        d = n(3606),
        u = n(3714),
        p = n(1835);
      class m {
        constructor() {
          var e;
          (this.m_mailbox = new s._n()),
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
            : VRHTML.VROverlay.ThisOverlayKey()) != d.C6 &&
            (this.m_lastDashboardSessionId = e.id);
        }
        AddRow(e, t) {
          if ("object" != typeof t)
            throw new Error(
              "COGS.AddRow requires an object for its fields argument",
            );
          let n = { type: "add_ogs_row", table: e, fields: t };
          this.m_mailbox.SendMessage("ogs", n);
        }
        GetSource() {
          switch (
            null === VRHTML || void 0 === VRHTML ? void 0 : VRHTML.Environment()
          ) {
            case s.OH.Desktop:
              return "desktop";
            case s.OH.Overlay:
              return VRHTML.VROverlay.ThisOverlayKey();
            default:
              return "unknown";
          }
        }
        RecordUIEvent(e, t, n) {
          this.AddRow("SteamVRUIEvent", {
            Source: this.GetSource(),
            DashboardSessionId: this.m_lastDashboardSessionId,
            EventNameID: e,
            Cause: t,
            Param: n,
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
              position: null != t ? ae[t] : void 0,
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
      (0, r.Cg)([i.o], m.prototype, "onSetDashboardSessionId", null);
      let h = null;
      var g,
        v = n(6575),
        _ = n(9728),
        S = n(1333),
        b = n(4015),
        y = n(998),
        R = n(8696),
        f = n(2563),
        w = n(3350),
        C = n(2267),
        M = n(2928),
        E = n(1139);
      let T = (g = class extends o.Component {
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
                className: (0, E.FH)("PortraitAppImageContainer", [
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
      (T.defaultProps = {
        fallbackImageUrl: "images/appimage_default_portrait.png",
      }),
        (T.s_failedImages = []),
        (0, r.Cg)([i.o], T.prototype, "loadNextImage", null),
        (0, r.Cg)([i.o], T.prototype, "onLoad", null),
        (0, r.Cg)([i.o], T.prototype, "onError", null),
        (T = g = (0, r.Cg)([b.PA], T));
      var V = n(427);
      const k = (e) => {
        if (null == e) return "";
        let t = e.image_path_capsule || e.image_path;
        return t.startsWith("/app/image?") && (t += "&aspect=portrait"), t;
      };
      class H extends o.Component {
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
            n = _.G.Instance.SceneAppName,
            r = _.G.Instance.SceneApplicationState,
            i = _.G.Instance.SceneAppIsHome,
            a = S.HR.settings.get("/settings/dashboard/allowAppQuitting"),
            l = !(
              null !==
                (e = S.HR.settings.get("/settings/dashboard/arcadeMode")) &&
              void 0 !== e &&
              e
            ),
            p = S.HR.apps && S.HR.apps.find((e) => e.key == t);
          let m = !1;
          switch (r) {
            case s.HW.Quitting:
            case s.HW.Starting:
            case s.HW.Waiting:
              m = !0;
          }
          return o.createElement(
            f.L_,
            {
              visible: this.props.visible,
              debugName: "nowplaying",
              additionalClassNames: "NowPlaying",
              summonOverlayKey: d.dw,
              scrollable: !1,
            },
            o.createElement(
              "div",
              { className: "ArtworkColumn" },
              o.createElement(T, { appkey: t, title: n, imageUrl: k(p) }),
            ),
            o.createElement(
              "div",
              { className: "InfoColumn" },
              o.createElement("div", { className: "NowPlayingAppTitle" }, n),
              o.createElement(
                c.$,
                {
                  className: "ButtonControl Colorful",
                  onClick: this.onReturnToGame,
                },
                i ? (0, u.we)("#Return_To_Home") : (0, u.we)("#Return_To_Game"),
              ),
              l &&
                o.createElement(
                  V.CS,
                  {
                    icon: V.Xb.PopOut,
                    onClick: this.onOpenAppControllerBindingSettings,
                  },
                  (0, u.we)("#Controller_Bindings"),
                ),
              l &&
                o.createElement(
                  V.CS,
                  { icon: V.Xb.PopOut, onClick: this.onOpenAppVideoSettings },
                  (0, u.we)("#App_Video_Settings"),
                ),
              a &&
                o.createElement(
                  c.$,
                  { className: "ButtonControl", onClick: this.onExitApp },
                  i ? (0, u.we)("#Exit_Home") : (0, u.we)("#Exit_Game"),
                ),
            ),
          );
        }
      }
      (0, r.Cg)([i.o], H.prototype, "onExitApp", null),
        (0, r.Cg)([i.o], H.prototype, "onReturnToGame", null),
        (0, r.Cg)(
          [i.o],
          H.prototype,
          "onOpenAppControllerBindingSettings",
          null,
        ),
        (0, r.Cg)([i.o], H.prototype, "onOpenAppVideoSettings", null);
      var A,
        D = n(2505),
        O = n.n(D),
        L = n(5615);
      !(function (e) {
        (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
      })(A || (A = {}));
      const B = (e) =>
        o.createElement(
          "div",
          {
            className: (0, E.FH)("ButtonContainer", A[e.side], [
              "Disabled",
              !1 === e.enabled,
            ]),
          },
          o.createElement(
            c.$,
            { className: "ButtonControl", onClick: e.onClick },
            e.side == A.Left
              ? o.createElement(o.Fragment, null, "‹")
              : o.createElement(o.Fragment, null, "›"),
          ),
        );
      class I extends o.Component {
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
          const n = this.m_refScrollPanel.current;
          if (!n) return;
          if (n.isThrown)
            return void n.cancelThrowing(() => {
              (this.m_bScrolling = !1), this.scroll(e);
            });
          const r = n.children;
          if (!r || 0 == r.length) return;
          const s =
              null !== (t = this.props.paginationAlignmentOffset) &&
              void 0 !== t
                ? t
                : 0,
            i = r[0],
            a = this.m_bScrolling ? this.m_nCurrentScrollTarget : n.scrollLeft,
            o = i.getBoundingClientRect().left + n.scrollLeft,
            l = i.clientWidth,
            c = n.clientWidth,
            d = Math.floor(c / l) - 1,
            u = Math.round((a - o + s + 1) / l) + d * e - 0.4999,
            p = u > 0 ? u * l + o - s : 0;
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
              className: (0, E.FH)(
                "PaginatedCarousel",
                this.props.additionalClassNames,
              ),
            },
            o.createElement(
              L.M,
              {
                ref: this.m_refScrollPanel,
                scrollDirection: L.D.Horizontal,
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
                  o.createElement(B, {
                    side: A.Left,
                    enabled: !this.state.bScrolledToStart,
                    onClick: this.onLeftButtonClick,
                  }),
                null !== this.state.bScrolledToEnd &&
                  o.createElement(B, {
                    side: A.Right,
                    enabled: !this.state.bScrolledToEnd,
                    onClick: this.onRightButtonClick,
                  }),
              ),
          );
        }
      }
      (0, r.Cg)([i.o], I.prototype, "onAnimationFrame", null),
        (0, r.Cg)([i.o], I.prototype, "onScroll", null),
        (0, r.Cg)([i.o], I.prototype, "onLeftButtonClick", null),
        (0, r.Cg)([i.o], I.prototype, "onRightButtonClick", null);
      let P = class extends o.Component {
        constructor(e) {
          super(e),
            (this.m_scrollWatcher = new E.aw()),
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
                className: (0, E.FH)(
                  "AppButtonContainer",
                  [
                    "AppOwned",
                    S.HR.probablyOwnedAppkeys.has(this.props.appkey),
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
                o.createElement(T, Object.assign({}, e), this.props.children),
              ),
            )
          );
        }
      };
      (0, r.Cg)([i.o], P.prototype, "buttonMouseEnter", null),
        (0, r.Cg)([i.o], P.prototype, "buttonMouseLeave", null),
        (0, r.Cg)([i.o], P.prototype, "onParentScrollStop", null),
        (P = (0, r.Cg)([b.PA], P));
      const N = () =>
          o.createElement("div", { className: "AppButton Placeholder" }),
        x = (e) => {
          var t;
          const n = !!e.loading,
            r = null !== (t = e.apps) && void 0 !== t ? t : [];
          let s = "AppCarousel";
          return (
            e.className && (s += " " + e.className),
            o.createElement(
              I,
              { additionalClassNames: s, paginationAlignmentOffset: -20 },
              n &&
                o.createElement(
                  o.Fragment,
                  null,
                  o.createElement(N, null),
                  o.createElement(N, null),
                  o.createElement(N, null),
                  o.createElement(N, null),
                ),
              !n &&
                r.map((e) =>
                  o.createElement(P, Object.assign({ key: e.appkey }, e)),
                ),
            )
          );
        };
      var F;
      class W extends o.Component {
        constructor(e) {
          super(e), (this.state = { storeData: null });
        }
        componentDidMount() {
          O()
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
              n = new Set();
            for (; e.length < 12 && t.length; ) {
              for (; n.has(t[0].appid); ) t.shift();
              let r = t.shift();
              n.add(r.appid),
                e.push(
                  o.createElement(
                    c.$,
                    {
                      key: `appid_${r.appid}`,
                      className: `WelcomeFloatingApp WelcomeFloatingApp${e.length}`,
                      enabled: !1,
                    },
                    o.createElement("img", { src: r.logo }),
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
                (0, u.we)("#WelcomeToSteamVR"),
              ),
              o.createElement(
                "div",
                { className: "QuickLaunchWelcomeMessage" },
                (0, u.we)("#LaunchSteamToFindGames"),
              ),
            ),
          );
        }
      }
      let G = (F = class extends o.Component {
        constructor(e) {
          super(e),
            (this.m_mailbox = new s._n()),
            (this.state = {}),
            this.m_mailbox.Init("systemui_quicklaunch");
        }
        launchApplication(e, t, n) {
          var r, s;
          m.instance.RecordUIEvent(
            "QuickLaunchAppClick",
            (t ? "top" : "bottom") + ":" + n,
            e.key,
          ),
            null === (s = (r = this.props).onGameLaunched) ||
              void 0 === s ||
              s.call(r, e),
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRApplications.LaunchApplication(e.key);
        }
        makeAppButtonList() {
          let e = [];
          if (null != S.HR.apps)
            for (let t of S.HR.apps)
              t.is_internal ||
                (t.is_dashboard_overlay && !t.show_overlay_in_quicklaunch) ||
                t.is_hidden ||
                t.is_instance ||
                F.s_setBlacklistedAppkeys.has(t.key) ||
                e.push(t);
          e.sort((e, t) => {
            let n = t.library_priority - e.library_priority;
            return 0 == n && (n = t.last_launch - e.last_launch), n;
          });
          const t = (e) => {
            let t = e.image_path_capsule || e.image_path;
            return t.startsWith("/app/image?") && (t += "&aspect=portrait"), t;
          };
          return e.map((e, n) => {
            let r = n;
            const s = n < F.TOP_ROW_LENGTH;
            return (
              s || (r -= F.TOP_ROW_LENGTH),
              {
                key: e.key,
                appkey: e.key,
                title: e.name,
                imageUrl: t(e),
                onClick: () => this.launchApplication(e, s, r),
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
          const n =
            0 == t.length ||
            S.HR.settings.get("/settings/dashboard/forceWelcomeScreen");
          if (n) e = o.createElement(W, null);
          else {
            let n = t.slice(0, F.TOP_ROW_LENGTH),
              r = t.slice(F.TOP_ROW_LENGTH);
            e = o.createElement(
              o.Fragment,
              null,
              o.createElement(x, { className: "TopRow", apps: n }),
              o.createElement(x, { className: "BottomRow", apps: r }),
            );
          }
          return o.createElement(
            f.L_,
            {
              visible: this.props.visible,
              scrollable: !n,
              debugName: "homepanel",
              additionalClassNames: "QuickLaunch",
              summonOverlayKey: d.Sx,
            },
            e,
          );
        }
      });
      (G.TOP_ROW_LENGTH = 4),
        (G.s_setBlacklistedAppkeys = new Set([
          "openvr.tool.steamvr_room_setup",
          "openvr.tool.steamvr_media_player",
          "openvr.tool.steamvr_desktop_gametheatre",
          "openvr.tool.steamvr_tutorial",
          "openvr.tool.steamvr_environments",
          "openvr.tool.steamvr_environments_tools",
          d.MM,
          d.v0,
        ])),
        (G = F = (0, r.Cg)([b.PA], G));
      var z = n(9248),
        U = n(3712),
        q = (n(7504), n(3696)),
        j = n(6013),
        K = n(8803),
        $ = n(1909);
      function X(e) {
        const { debugHostLocation: t, onGrabStart: n, onGrabEnd: r } = e,
          i = p.SW.isVRGamepadUI,
          a = (0, E.Nc)();
        if (!a) return null;
        const l =
            null != (null == a ? void 0 : a.overlayKey) &&
            "" != (null == a ? void 0 : a.overlayKey),
          c = !!(a.keyboardFlags & s.QR.Minimal),
          u = i ? 2 : 1.5,
          m = i ? { y: -0.33, z: 0.15 } : { y: -0.25 },
          h = i
            ? c
              ? { y: -0.62, z: 0.01 }
              : { y: -0.72, z: 0.01 }
            : c
              ? { y: -0.73, z: 0.05 }
              : { y: -0.87, z: 0.05 };
        return o.createElement(
          s.dL,
          { translation: m },
          o.createElement(
            s.dL,
            { scale: { y: u, x: u } },
            o.createElement(s.rF, { mountedId: (0, s.nX)(d.cb, d.Wl) }),
            o.createElement(s.rF, { mountedId: (0, s.nX)(d.cb, d.nY) }),
          ),
          false,
          l &&
            o.createElement(
              s.dL,
              { translation: h },
              o.createElement(U.X, {
                tint: p.SW.GrabHandleTint,
                onStartMove: n,
                onEndMove: r,
              }),
            ),
        );
      }
      function Z(e) {
        const t = (0, E.Nc)();
        if (!t) return null;
        const n = he.k_nControlBarPitch;
        return (
          t.visible &&
          !t.dockedInDashboard &&
          o.createElement(
            s.sJ,
            { bContinuousRelatch: !1 },
            o.createElement(
              s.dL,
              {
                translation: p.SW.dashboardTranslation,
                scale: p.SW.dashboardScale,
              },
              o.createElement(
                s.dL,
                { translation: he.getControlBarTranslation() },
                o.createElement(
                  s.dL,
                  { translation: he.k_nKeyboardGrabTransformOffset },
                  o.createElement(
                    z.B,
                    { min_distance: 0.2, should_head_align: !1 },
                    o.createElement(
                      s.dL,
                      {
                        translation: {
                          x: -1 * he.k_nKeyboardGrabTransformOffset.x,
                          y: -1 * he.k_nKeyboardGrabTransformOffset.y,
                          z: -1 * he.k_nKeyboardGrabTransformOffset.z,
                        },
                      },
                      o.createElement(
                        s.dL,
                        { rotation: { x: n }, curvature_pitch: n },
                        o.createElement(X, { debugHostLocation: "Undocked" }),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          )
        );
      }
      class Q {
        constructor() {
          (this.m_rgMutualCapabilities = []),
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.RegisterForMutualSteamCapabilitiesChanged(
                this.UpdateCapabilities,
              ),
            this.UpdateCapabilities(),
            (0, a.Gn)(this);
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
      (0, r.Cg)([a.sH], Q.prototype, "m_rgMutualCapabilities", void 0),
        (0, r.Cg)([i.o], Q.prototype, "UpdateCapabilities", null);
      const J = new Q();
      window.SteamMutualCapabilities = J;
      var Y = n(6943),
        ee = n(9471),
        te = n(7600);
      function ne() {
        return o.createElement(
          "div",
          { className: "LoadingThrobberContainer" },
          o.createElement("div", { className: "LoadingThrobber" }),
        );
      }
      const re = (0, b.PA)(function () {
        const [e, t] = o.useState(!1);
        return (
          o.useEffect(() => {
            const e = setTimeout(() => {
              console.error("SteamLoadingThrobber timed out after 60 seconds."),
                t(!0);
            }, 2e4);
            return () => clearTimeout(e);
          }, []),
          e
            ? null
            : o.createElement(
                te.tH,
                null,
                o.createElement(
                  s.dL,
                  { parent_path: "/user/head" },
                  o.createElement(
                    s.m$,
                    {
                      start_angle_threshold: 10,
                      stop_angle_threshold: 5,
                      ease_out_angle_threshold: 20,
                      min_angular_velocity: 75,
                      ease_in_power: 1.5,
                      lock_to_horizon: !1,
                    },
                    o.createElement(
                      s.dL,
                      { translation: p.SW.dashboardTranslation },
                      o.createElement(
                        s.dL,
                        { scale: p.SW.dashboardScale },
                        o.createElement(
                          s.Zk,
                          {
                            meters_per_pixel: d.iZ,
                            interactive: !1,
                            sort_order: 1e3,
                            debug_name: "steam-loading-throbber",
                          },
                          o.createElement(ne, null),
                        ),
                      ),
                    ),
                  ),
                ),
              )
        );
      });
      var se;
      const ie = !1;
      var ae, oe;
      !(function (e) {
        (e[(e.Near = 0)] = "Near"),
          (e[(e.Middle = 1)] = "Middle"),
          (e[(e.Far = 2)] = "Far"),
          (e[(e.VRGamepadUI = 3)] = "VRGamepadUI");
      })(ae || (ae = {}));
      class le extends o.Component {
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
      function ce(e) {
        return e == d.P || e.startsWith(d.bl);
      }
      function de(e) {
        var t;
        const n =
          null === (t = Y.Q.GetOverlayInfo(e)) || void 0 === t
            ? void 0
            : t.sHandle;
        return n ? VRHTML.VROverlay.GetVisibleTimeInSeconds(n) : 0;
      }
      function ue(e, t, n) {
        var r;
        const s = Date.now(),
          i = s - t.nDockStartMs;
        if (i >= 1e3) {
          const s = /^valve\.steam\.desktopgame\.(\d+)$/,
            a = e.match(s),
            o = _.G.Instance.SceneAppKey,
            l =
              t.dockLocation == R.$z.Theater &&
              null !==
                (r = S.HR.settings.get(
                  "/settings/dashboard/autoShowGameTheater",
                )) &&
              void 0 !== r &&
              r;
          void 0 === n && (n = de(e));
          const c = Math.floor(1e3 * (n - t.fLastTotalVisibleTimeInSeconds)),
            d = {
              OverlayKeyID: e,
              Location: R.$z[t.dockLocation],
              DurationMs: i,
              VisibleMs: c > 0 ? c : void 0,
              OverlayAppID:
                2 == (null == a ? void 0 : a.length)
                  ? parseInt(a[1], 10)
                  : void 0,
              SceneAppKeyID: "" != o ? o : void 0,
              autoShowGameTheater: l,
            };
          (t.fLastTotalVisibleTimeInSeconds = n),
            m.instance.AddRow("SteamVROverlayDockStats", d);
        }
        t.nDockStartMs = s;
      }
      function pe(e, t, n) {
        t.dockLocation != n && (ue(e, t), (t.dockLocation = n));
      }
      function me(e) {
        e &&
          e != d.wi &&
          (null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VRDashboardManager.HideDashboard(
              "AutoHideDashboardForOverlay",
            ));
      }
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Power = 1)] = "Power"),
          (e[(e.ExternalOverlays = 2)] = "ExternalOverlays"),
          (e[(e.Volume = 3)] = "Volume"),
          (e[(e.Windows = 4)] = "Windows");
      })(oe || (oe = {}));
      let he = (se = class extends o.Component {
        constructor(e) {
          super(e),
            (this.m_mapExternalOverlays = {}),
            (this.m_mapWindows = new Map()),
            (this.m_setSuppressingFade = new Set()),
            (this.m_mailbox = new s._n()),
            (this.m_timeoutPopoverMenuHide = 0),
            (this.m_refPopoverMenu = o.createRef()),
            (this.m_appStateChangedAutorunDisposer = null),
            (this.m_refDesktopView = o.createRef()),
            (this.m_refDesktopTray = o.createRef()),
            (this.m_refOverlayTransform = o.createRef()),
            (this.m_refVolumeTray = o.createRef()),
            (this.m_activeOverlayThatVanished = void 0),
            (this.m_bUserManuallySwitchToOldLibrary = !1),
            (this.m_bWaitingOnInitialOverlayToAutoShow = !1),
            (this.m_dashboardThumbnailsChangedEventHandle = null),
            (this.m_keyboardVisibilityChangedEventHandle = null),
            (this.m_miscEventHandles = []),
            (this.m_eSceneApplicationState = s.HW.None),
            (this.m_vrGamepadUIPathPropertiesAutorunDisposer = null),
            (this.m_gamepadFocusAutorunDisposer = null),
            this.ImplementFutureMethods(),
            (0, a.Gn)(this),
            (this.state = {
              bMuted: !1,
              bGrabbed: !1,
              sLastShownAppKey: "",
              eShowPopoverMenu: oe.None,
              setForcingBoundsVisible: {},
              desktopViewDebugInfo: {
                inputFrameTime: 0,
                mapOverlayFrameTimes: new Map(),
              },
              bWindowViewEnabled: !1,
              bPlacementModeActive: !1,
              bKeyboardVisible: !1,
              mapPortals: new Map(),
            }),
            S.HR.Init(!1),
            s.Cw.getInstance(),
            this.m_mailbox.Init(se.k_sDashboardMailboxName).then(() => {
              this.m_mailbox.RegisterHandler(
                se.k_sSetDashboardFadeSupressionMessage,
                this.onSetDashboardFadeSuppression,
              ),
                this.m_mailbox.RegisterHandler(
                  se.k_sDashboardOverlayCreatedMessage,
                  this.onDashboardOverlayCreated,
                ),
                this.m_mailbox.RegisterHandler(
                  se.k_sDashboardOverlayDestroyedMessage,
                  this.onDashboardOverlayDestroyed,
                ),
                this.m_mailbox.RegisterHandler(
                  se.k_sUpdateDashboardTabsMessage,
                  this.onUpdateDashboardTabs,
                ),
                this.m_mailbox.RegisterHandler(
                  se.k_sWindowViewCreatedMessage,
                  this.onWindowViewCreated,
                ),
                this.m_mailbox.RegisterHandler(
                  se.k_sWindowViewDestroyedMessage,
                  this.onWindowViewDestroyed,
                ),
                this.m_mailbox.RegisterHandler(
                  se.k_sUpdateWindowListMessage,
                  this.onUpdateWindowList,
                ),
                this.m_mailbox.RegisterHandler(
                  se.k_sUpdateDebugInfoMessage,
                  this.onUpdateDebugInfo,
                ),
                this.m_mailbox.RegisterHandler(
                  se.k_sSetDashboardForceBoundsVisible,
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
                this.m_mailbox.RegisterHandler("room_setup", (e) =>
                  this.onVRLinkRoomSetup(e),
                ),
                this.m_mailbox.RegisterHandler("disable_theater_mode", (e) =>
                  this.onDisableTheaterMode(e),
                );
            }),
            $.p.SteamVR.SetImplementation(
              "DashboardTabClicked",
              ({ tab_id: e }) => {
                const t = p.SW.GetSummonKeyForTabId(e);
                if (
                  !this.switchToOverlayInternal(
                    t,
                    "User clicked VRGamepadUI tab",
                  )
                )
                  throw new Error("Failed to switch to overlay: " + t);
              },
            ),
            $.p.SteamVR.SetImplementation("ShowGame", this.onShowOverlay),
            $.p.SteamVR.SetImplementation("ShowOverlay", this.onShowOverlay),
            $.p.SteamVR.SetImplementation(
              "DashboardActionInvoked",
              ({ action_id: e, toggle_value: t }) => {
                switch (e) {
                  case 0:
                    null === VRHTML || void 0 === VRHTML || VRHTML.QuitOpenVR();
                    break;
                  case 1:
                    null === VRHTML ||
                      void 0 === VRHTML ||
                      VRHTML.ShutdownSystem();
                    break;
                  case 2:
                    this.onToggleRoomView(t);
                    break;
                  case 8:
                    q.H.setRoomSetupStep(3);
                    break;
                  case 7:
                    q.H.setRoomSetupStep(2);
                    break;
                  case 6:
                    q.H.setRoomSetupStep(1);
                    break;
                  case 9:
                    p.SW.activeLinkServer
                      ? VRHTML.VRLink.SendRoomSetupRequest(s.$Z.ClearRoomSetup)
                      : VRHTML.VRChaperoneSetup.ClearRoomSetup();
                    break;
                  case 3:
                  case 4:
                    0;
                    break;
                  case 12:
                    this.onUserGuideClick();
                }
              },
            );
        }
        ImplementFutureMethods() {
          0;
        }
        componentDidMount() {
          var e;
          (window.Dashboard = this),
            (this.m_dashboardThumbnailsChangedEventHandle =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.RegisterForOverlayThumbnailsChanged(() =>
                    this.forceUpdate(),
                  )),
            (this.m_keyboardVisibilityChangedEventHandle =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.RegisterForKeyboardVisibilityChangedEvents(
                    this.onKeyboardVisibilityChanged,
                  )),
            S.HR.settings.get(d.Bf) &&
              (this.m_bWaitingOnInitialOverlayToAutoShow = !0),
            (this.m_appStateChangedAutorunDisposer = (0, a.fm)(() => {
              var e;
              const t = _.G.Instance.SceneApplicationState,
                n = t != s.HW.None;
              if (n && this.m_eSceneApplicationState == s.HW.None)
                p.SW.HideTheaterOverlay();
              else if (
                !n &&
                this.m_eSceneApplicationState != s.HW.None &&
                !p.SW.isTheaterMode
              ) {
                if (
                  null !==
                    (e = S.HR.settings.get(
                      "/settings/dashboard/autoShowGameTheater",
                    )) &&
                  void 0 !== e &&
                  e
                )
                  for (let [e, t] of p.SW.m_mapOverlayState)
                    if (e.startsWith(d.bl)) {
                      this.setOverlayDockLocation(e, R.$z.Theater), me(e);
                      break;
                    }
              }
              (this.m_eSceneApplicationState = t),
                p.SW.isActiveDashboardOverlay(d.dw) &&
                  !n &&
                  this.switchToHomeOverlay();
            })),
            VRHTML.VRDashboardManager.GetDashboardOverlayKeys().forEach((e) => {
              this.initializeOverlayState(e);
            }),
            this.updateSiblingReferences(),
            (this.m_vrGamepadUIPathPropertiesAutorunDisposer = (0, a.fm)(() => {
              this.updateVRGamepadUIPathProperties();
            })),
            (this.m_gamepadFocusAutorunDisposer = (0, a.fm)(() => {
              const e = p.SW.priorityGamepadFocusOverlay,
                t = _.G.Instance.SceneApplicationState !== s.HW.None;
              p.SW.m_bDashboardVisible || !e || t || 0 != q.H.roomSetupStep
                ? this.SetGamepadFocusEnable(!1, null)
                : this.SetGamepadFocusEnable(!0, e);
            }));
          const t = new j.T4();
          t.set_can_sleep(!1),
            t.set_can_shutdown(
              S.HR.settings.get("/settings/dashboard/allowSystemShutdown"),
            ),
            t.set_can_restart_system(
              S.HR.settings.get("/settings/dashboard/allowSystemRestart"),
            ),
            t.set_can_exitvr(
              null ===
                (e = S.HR.settings.get("/settings/dashboard/allowExitVR")) ||
                void 0 === e ||
                e,
            ),
            (0, K.Z)(t);
        }
        componentDidUpdate(e, t) {
          this.updateSiblingReferences(),
            this.updateVRGamepadUIPathProperties();
        }
        updateVRGamepadUIPathProperties() {
          var e, t, n;
          const r = Array.from(
              null !== (e = this.m_mapWindows.values()) && void 0 !== e
                ? e
                : [],
            ).sort(ye),
            s = p.SW.m_sActiveOverlaySummonKey,
            i = J.BHasMutualCapability(2),
            a = J.BHasMutualCapability(6),
            o = new j.UQ();
          for (const e in this.m_mapExternalOverlays) {
            const t = this.m_mapExternalOverlays[e],
              n = p.SW.GetTabIdForSummonKey(t.summon_overlay_key);
            if (t.summon_overlay_key == d.Xk) continue;
            0;
            const r = new j.MS();
            r.set_tab_id(n);
            const a = this.shouldShowOverlayTab(t, !0),
              l = i && p.SF.includes(t.summon_overlay_key),
              c = p.SW.m_setOverlaysViewedThisSession.has(t.summon_overlay_key);
            r.set_visible_in_dashboard_menu(a && l),
              r.set_visible_in_dashboard_bar(a && (!l || c)),
              t.summon_overlay_key == d.wi
                ? r.set_display_name((0, u.we)("#Steam"))
                : r.set_display_name(t.tab_name);
            const m = new j.Xl();
            switch (t.summon_overlay_key) {
              case d.wi:
                m.set_enum(1);
                break;
              case d.Bn:
                m.set_enum(2);
                break;
              case d.Wt:
                m.set_enum(3);
                break;
              case d.dw:
                if (
                  (m.set_enum(4), _.G.Instance.SceneAppKey.startsWith(d.kk))
                ) {
                  const e = Number.parseInt(
                    _.G.Instance.SceneAppKey.substring(d.kk.length),
                  );
                  Number.isInteger(e) && m.set_appid(e);
                }
                break;
              default:
                m.set_overlay(t.summon_overlay_key), m.set_enum(0);
            }
            r.set_icon(m),
              o.add_tabs(r),
              s == t.summon_overlay_key && o.set_selected_tab_id(n),
              d.Wt == t.summon_overlay_key && o.set_vr_settings_tab_id(n),
              t.summon_overlay_key == d.wi && o.set_vr_steam_tab_id(n);
          }
          if (this.m_refDesktopView.current) {
            const e = this.m_refDesktopView.current.desktopCount;
            null === (t = this.m_refDesktopView.current) ||
              void 0 === t ||
              t.desktopIndices.forEach((t) => {
                var n;
                const r = `${d.GO}.${t}`,
                  i = p.SW.GetTabIdForSummonKey(r),
                  a = new j.MS();
                a.set_tab_id(i),
                  a.set_display_name(
                    e > 1 ? (0, u.we)("#Desktop_X", t) : (0, u.we)("#Desktop"),
                  ),
                  a.set_visible_in_dashboard_bar(!0);
                const l = new j.Xl();
                l.set_enum(2),
                  a.set_icon(l),
                  o.add_tabs(a),
                  (null == s ? void 0 : s.startsWith(d.Xk)) &&
                    (null === (n = this.m_refDesktopView.current) ||
                    void 0 === n
                      ? void 0
                      : n.currentDesktopIndex) == t &&
                    o.set_selected_tab_id(i);
              });
          }
          for (const e of r) {
            if (!e.overlay_key) continue;
            const t = p.SW.GetTabIdForSummonKey(e.overlay_key),
              r = new j.MS();
            r.set_tab_id(t),
              r.set_display_name(e.title),
              r.set_visible_in_dashboard_bar(!0);
            const i = new j.Xl();
            i.set_enum(5),
              i.set_hwnd(Number.parseInt(e.hwnd)),
              r.set_icon(i),
              o.add_tabs(r),
              (null == s ? void 0 : s.startsWith(d.Xk)) &&
                (null === (n = this.m_refDesktopView.current) || void 0 === n
                  ? void 0
                  : n.sCurrentOverlayKey) == e.overlay_key &&
                o.set_selected_tab_id(t);
          }
          o.tabs().sort(be), (0, K.Z)(o);
          const l = new j.$1();
          l.add_actions(
            j.F7.fromObject({
              action_id: 12,
              display_name: "User Guide",
              visible_in_menu: this.BShouldShowDashboardAction(12),
              invocation: 1,
              icon: { enum: 0 },
            }),
          );
          const c =
            J.BHasMutualCapability(8) && this.BShouldShowDashboardAction(8);
          l.add_actions(
            j.F7.fromObject({
              action_id: 8,
              parent_menu_action_id: c ? 5 : null,
              display_name: (0, u.we)("#MenuPlayspaceSetup"),
              visible_in_menu: this.BShouldShowDashboardAction(8),
              invocation: 1,
              icon: { enum: 12 },
            }),
          ),
            l.add_actions(
              j.F7.fromObject({
                action_id: 7,
                parent_menu_action_id: c ? 5 : null,
                display_name: (0, u.we)("#MenuPlayspaceAdjustFloorHeight"),
                visible_in_menu: this.BShouldShowDashboardAction(7),
                invocation: 1,
                icon: { enum: 13 },
              }),
            ),
            c &&
              l.add_actions(
                j.F7.fromObject({
                  action_id: 6,
                  parent_menu_action_id: 5,
                  display_name: (0, u.we)("#Button_Recenter"),
                  visible_in_menu: this.BShouldShowDashboardAction(6),
                  invocation: 1,
                  icon: { enum: 3 },
                }),
              ),
            c &&
              l.add_actions(
                j.F7.fromObject({
                  action_id: 9,
                  parent_menu_action_id: 5,
                  display_name: "Clear Playspace",
                  visible_in_menu: this.BShouldShowDashboardAction(9),
                  invocation: 1,
                }),
              ),
            a ||
              (l.add_actions(
                j.F7.fromObject({
                  action_id: 0,
                  display_name: (0, u.we)("#PowerMenuExitVR"),
                  visible_in_menu: this.BShouldShowDashboardAction(0),
                  invocation: 1,
                  icon: { enum: 10 },
                }),
              ),
              l.add_actions(
                j.F7.fromObject({
                  action_id: 1,
                  display_name: (0, u.we)("#PowerMenuShutdown"),
                  visible_in_menu: this.BShouldShowDashboardAction(1),
                  invocation: 1,
                  icon: { enum: 11 },
                }),
              )),
            l.add_actions(
              j.F7.fromObject({
                action_id: 2,
                display_name: (0, u.we)("#Toggle_Room_View"),
                visible_in_dashboard_bar: this.BShouldShowDashboardAction(2),
                invocation: 2,
                active: p.SW.m_bRoomViewActive,
                enabled:
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VROverlayInternal.HasCameraRoomViewCapability(),
                icon: { enum: 2 },
                icon_active: { enum: 1 },
              }),
            ),
            c
              ? l.add_actions(
                  j.F7.fromObject({
                    action_id: 5,
                    display_name: (0, u.we)("#MenuPlayspaceMenu"),
                    visible_in_dashboard_bar: !0,
                    icon: { enum: 12 },
                    is_menu: !0,
                  }),
                )
              : l.add_actions(
                  j.F7.fromObject({
                    action_id: 6,
                    display_name: (0, u.we)("#Button_Recenter"),
                    visible_in_dashboard_bar:
                      this.BShouldShowDashboardAction(6),
                    invocation: 1,
                    icon: { enum: 3 },
                  }),
                ),
            J.BHasMutualCapability(3) &&
              l.add_actions(
                j.F7.fromObject({
                  action_id: 10,
                  invocation: 3,
                  special_invocation: 1,
                  visible_in_dashboard_bar: !0,
                }),
              ),
            (0, K.Z)(l);
          const m = new j.J$();
          m.set_windows(
            r.map((e) => {
              const t = new j.gL();
              return (
                t.set_hwnd(Number.parseInt(e.hwnd)),
                t.set_window_id(Number.parseInt(e.hwnd)),
                t.set_title(e.title),
                e.overlay_key &&
                  t.set_tab_id(p.SW.GetTabIdForSummonKey(e.overlay_key)),
                t
              );
            }),
          ),
            (0, K.Z)(m);
        }
        initializeOverlayState(e) {
          S.HR.GetAppInfo(e).then((t) => {
            var n, r;
            let s = 1;
            if (e.startsWith("system.desktop.")) {
              let t = "/settings/dashboard/desktopScale" + e.split(".")[2];
              s = null !== (n = S.HR.settings.get(t)) && void 0 !== n ? n : 1;
            }
            if (
              (p.SW.m_mapOverlayState.set(e, {
                refOverlayWidget: o.createRef(),
                dockLocation: R.$z.Dashboard,
                nDockStartMs: Date.now(),
                xfInitial: null,
                fScale: s,
                fLastTotalVisibleTimeInSeconds: de(e),
                bSuppressDoubleOverlayControlBar: !1,
              }),
              null == t ? void 0 : t.starts_theater_mode)
            )
              this.setOverlayDockLocation(e, R.$z.Theater), me(e);
            else if (ce(e)) {
              null !==
                (r = S.HR.settings.get(
                  "/settings/dashboard/autoShowGameTheater",
                )) &&
              void 0 !== r &&
              r
                ? (this.setOverlayDockLocation(e, R.$z.Theater), me(e))
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
          var e, t, n, r, s;
          clearTimeout(this.m_timeoutHoverStateEnd),
            clearTimeout(this.m_timeoutPopoverMenuHide),
            null === (e = this.m_appStateChangedAutorunDisposer) ||
              void 0 === e ||
              e.call(this),
            null === (t = this.m_vrGamepadUIPathPropertiesAutorunDisposer) ||
              void 0 === t ||
              t.call(this),
            null === (n = this.m_gamepadFocusAutorunDisposer) ||
              void 0 === n ||
              n.call(this),
            null === (r = this.m_dashboardThumbnailsChangedEventHandle) ||
              void 0 === r ||
              r.unregister(),
            null === (s = this.m_keyboardVisibilityChangedEventHandle) ||
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
            (t.dockLocation == R.$z.Theater
              ? e.overlay_key != d.wi &&
                (null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.VRDashboardManager.HideDashboard("ShowGame/theater"))
              : t.dockLocation == R.$z.Dashboard
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
        onKeyboardVisibilityChanged(e) {
          const t =
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VRDashboardManager.GetKeyboardInputInfo();
          this.setState({
            bKeyboardVisible: e && (null == t ? void 0 : t.dockedInDashboard),
          });
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
          this.setState((t, n) => {
            let r = Object.assign({}, t.setForcingBoundsVisible);
            return (
              (r[e.for_overlay_key] = new Set(r[e.for_overlay_key])),
              e.force_bounds_visible
                ? r[e.for_overlay_key].add(e.for_id)
                : r[e.for_overlay_key].delete(e.for_id),
              { setForcingBoundsVisible: r }
            );
          });
        }
        onDashboardOverlayCreated(e) {
          this.initializeOverlayState(e.overlay_key);
        }
        onDashboardOverlayDestroyed(e) {
          var t;
          e.overlay_key.startsWith(d.Uv)
            ? null === (t = this.m_refDesktopView.current) ||
              void 0 === t ||
              t.onWindowViewDestroyed(e.overlay_key)
            : e.overlay_key == this.getActiveOverlayKey() &&
              this.switchToHomeOverlay();
          const n = p.SW.m_mapOverlayState.get(e.overlay_key);
          n && ue(e.overlay_key, n, e.visible_time_in_seconds),
            p.SW.m_mapOverlayState.delete(e.overlay_key);
        }
        onUpdateDashboardTabs(e) {
          var t, n;
          const r = p.SW.m_sActiveOverlaySummonKey;
          (this.m_mapExternalOverlays = {}),
            e.tabs.forEach((e) => {
              e.mountable_id &&
                (this.m_mapExternalOverlays[e.mountable_id] = e);
            });
          const s =
            null !==
              (n =
                null === (t = this.getActiveOverlay()) || void 0 === t
                  ? void 0
                  : t.summon_overlay_key) && void 0 !== n
              ? n
              : null;
          p.SW.m_sActiveOverlaySummonKey != s &&
            (p.SW.m_sActiveOverlaySummonKey = s),
            this.autoSwitchOverlayIfNeeded(),
            this.m_activeOverlayThatVanished &&
              this.hasDashboardOverlay(
                this.m_activeOverlayThatVanished.sSummonKey,
              ) &&
              (this.m_activeOverlayThatVanished = null);
          const i = S.HR.settings.get(d.Bf);
          this.m_bWaitingOnInitialOverlayToAutoShow &&
            this.hasDashboardOverlay(i) &&
            (this.m_bWaitingOnInitialOverlayToAutoShow = !1),
            r &&
              !this.hasDashboardOverlay(r) &&
              (this.switchToHomeOverlay(),
              (this.m_activeOverlayThatVanished = {
                sSummonKey: r,
                timeVanished: new Date(),
              })),
            this.forceUpdate();
        }
        onWindowViewCreated(e) {
          var t, n;
          this.switchToOverlayInternal(d.Xk),
            null === (t = this.m_refDesktopView.current) ||
              void 0 === t ||
              t.onWindowViewCreated(e.overlay_key, e.hwnd),
            null === (n = this.m_refDesktopTray.current) ||
              void 0 === n ||
              n.onWindowViewCreated(e.overlay_key, e.hwnd);
        }
        onWindowViewDestroyed(e) {}
        onUpdateWindowList(e) {
          var t;
          let n = new Map();
          e.windows.forEach((e) => {
            n.set(e.hwnd, e);
          }),
            (this.m_mapWindows = n),
            this.setState({
              bWindowViewEnabled:
                null === (t = S.HR.settings.get(d.yl)) || void 0 === t || t,
            });
        }
        onUpdateDebugInfo(e) {}
        setOverlayDockLocation(e, t, n) {
          var r, s;
          p.SW.isTheaterMode;
          (t != R.$z.LeftHand && t != R.$z.RightHand && t != R.$z.Theater) ||
            p.SW.m_mapOverlayState.forEach((n, r) => {
              n.dockLocation == t && pe(e, n, R.$z.Dashboard);
            });
          const i = p.SW.m_mapOverlayState.get(e);
          if (
            (i &&
              (i.dockLocation == R.$z.Theater &&
                (null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.VROverlay.ShowDashboard(e)),
              pe(e, i, t),
              (i.xfInitial = n),
              (i.bSuppressDoubleOverlayControlBar = t == R.$z.World)),
            t === R.$z.Dashboard)
          )
            if (e.startsWith(d.GO)) {
              const t = Number.parseInt(e.substring(d.GO.length + 1));
              null === (r = this.m_refDesktopView.current) ||
                void 0 === r ||
                r.onDesktopChange(t);
            } else
              e.startsWith(d.Uv) &&
                (null === (s = this.m_refDesktopView.current) ||
                  void 0 === s ||
                  s.onWindowViewChange(e));
        }
        renderActiveOverlay() {
          if (null === p.SW.m_sActiveOverlayID) return null;
          const e = this.getActiveOverlayKey(),
            t = this.getActiveOverlay();
          if (!t) return null;
          const n = p.SW.m_mapOverlayState.get(e),
            r = n ? n.fScale : 1,
            i = p.SW.isVRGamepadUI
              ? p.SW.m_fVRGamepadUI_GlobalActiveOverlayScale
              : 1;
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              s.dL,
              { scale: i },
              o.createElement(s.rF, {
                mountedId: t.mountable_id,
                fDashboardScale: r,
              }),
            ),
          );
        }
        shouldShowOverlayTab(e, t) {
          return t && e.summon_overlay_key == d.dw
            ? _.G.Instance.SceneApplicationState != s.HW.None
            : (void 0 !== e.icon_overlay_key || null != e.icon_uri) &&
                !!e.summon_overlay_key &&
                  !(!t && e.summon_overlay_key == d.Wt) &&
                    !(!t && e.summon_overlay_key == d.Bn) &&
                      !(!t && e.summon_overlay_key.startsWith(d.GO)) &&
                        !(!t && e.summon_overlay_key.startsWith(d.Uv)) &&
                          !(
                            !t &&
                            e.summon_overlay_key.startsWith(d.So) &&
                            !e.summon_overlay_key.startsWith(d.bl)
                          ) &&
                !(
                  !t &&
                  ((n = e.summon_overlay_key),
                  null !== (r = null == n ? void 0 : n.startsWith(d.Kh)) &&
                    void 0 !== r &&
                    r)
                );
          var n, r;
        }
        computeFilteredOverlayTabs(e) {
          return Object.values(this.m_mapExternalOverlays)
            .filter((t) => this.shouldShowOverlayTab(t, e))
            .sort((e, t) => e.tab_name.localeCompare(t.tab_name));
        }
        findDashboardTab(e) {
          for (let t in this.m_mapExternalOverlays) {
            let n = this.m_mapExternalOverlays[t];
            if (n.summon_overlay_key == e) return n;
          }
          return null;
        }
        switchToHomeOverlay() {
          const e = [d.wi, d.Sx];
          for (const t of e)
            if (this.hasDashboardOverlay(t)) {
              this.switchToOverlayInternal(t, "switchToDashboardLibrary");
              break;
            }
        }
        switchToSteamOverlay() {
          p.SW.isVRGamepadUI &&
            this.switchToOverlayInternal(d.wi, "switchToSteamOverlay");
        }
        switchToOverlayInternal(e, t) {
          var n, r, i, a;
          if (!e) return !1;
          if (e == d.Bz) {
            let t = {
                type: "show_app_binding",
                app_key:
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VRApplications.GetSceneApplicationKey(),
              },
              n = "bindingui/" + s.OH[(0, s.R$)()];
            this.m_mailbox.SendMessage(n, t), (e = d.Wm);
          }
          if (e.startsWith(d.GO)) {
            const t = Number.parseInt(e.substring(d.GO.length + 1));
            Number.isSafeInteger(t) &&
              (null === (n = this.m_refDesktopView.current) ||
                void 0 === n ||
                n.onDesktopChange(t)),
              (e = d.Xk);
          } else if (e.startsWith(d.Uv)) {
            if (
              !(null === (r = this.m_refDesktopView.current) || void 0 === r
                ? void 0
                : r.hasWindowView(e))
            )
              return !1;
            null === (i = this.m_refDesktopView.current) ||
              void 0 === i ||
              i.onWindowViewChange(e),
              (e = d.Xk);
          }
          let o = this.findDashboardTab(e);
          return (
            !!o &&
            (this.computeFilteredOverlayTabs(!1).includes(o) &&
              S.HR.SetSettingsValue(
                d.XO,
                null !== (a = o.summon_overlay_key) && void 0 !== a ? a : "",
              ),
            (this.m_activeOverlayThatVanished = null),
            p.SW.m_setOverlaysViewedThisSession.add(o.summon_overlay_key),
            (p.SW.m_sActiveOverlayID = o.mountable_id),
            (p.SW.m_sActiveOverlaySummonKey = o.summon_overlay_key),
            m.instance.RecordUIEvent(
              "SetDashboardOverlay",
              null != t ? t : "Button",
              e,
            ),
            !0)
          );
        }
        autoSwitchOverlayIfNeeded() {
          var e, t;
          const n = [],
            r =
              null !==
                (t =
                  null === (e = this.getActiveOverlay()) || void 0 === e
                    ? void 0
                    : e.summon_overlay_key) && void 0 !== t
                ? t
                : null;
          if (
            (this.m_bWaitingOnInitialOverlayToAutoShow &&
              n.push(S.HR.settings.get(d.Bf)),
            this.m_activeOverlayThatVanished)
          ) {
            (new Date().getTime() -
              this.m_activeOverlayThatVanished.timeVanished.getTime()) /
              1e3 <
              se.k_nTimeLimitToReturnToActiveOverlayThatVanishedSeconds &&
              n.push(this.m_activeOverlayThatVanished.sSummonKey);
          }
          (null == r ||
            (r == d.Sx && !this.m_bUserManuallySwitchToOldLibrary)) &&
            n.push(d.wi),
            null == r && n.push(d.Sx);
          const s = n.find(this.hasDashboardOverlay);
          s && this.switchToOverlayInternal(s, "autoSwitchOverlayIfNeeded");
        }
        getActiveOverlay() {
          var e;
          return p.SW.m_sActiveOverlayID &&
            null !==
              (e = this.m_mapExternalOverlays[p.SW.m_sActiveOverlayID]) &&
            void 0 !== e
            ? e
            : null;
        }
        getActiveOverlayKey() {
          var e;
          return p.SW.m_sActiveOverlaySummonKey == d.Xk
            ? null === (e = this.m_refDesktopView.current) || void 0 === e
              ? void 0
              : e.sCurrentOverlayKey
            : p.SW.m_sActiveOverlaySummonKey;
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
            : R.$z.Dashboard;
        }
        hideMessageOverlay() {
          p.SW.m_sActiveOverlaySummonKey == d.Qv && this.switchToHomeOverlay();
        }
        onShowDashboardRequested(e, t) {
          var n;
          if (!S.HR.settings.get("/settings/dashboard/enableDashboard")) return;
          const r = p.SW.m_mapOverlayState.get(e.overlay_key);
          if ((null == r ? void 0 : r.dockLocation) != R.$z.Theater)
            if (
              (t &&
                (this.show(
                  null !== (n = e.reason) && void 0 !== n ? n : "unknown",
                ),
                this.setDashboardVisibility(
                  !0,
                  e.tracked_device_index,
                  e.reason,
                )),
              e.overlay_key)
            )
              this.switchToOverlayInternal(e.overlay_key, e.reason);
            else if (p.SW.isTheaterMode) {
              p.SW.getTheaterOverlay() != d.wi &&
                $.p.Steam.ExecuteSteamURL({
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
          const t = R.$z[e.dock_location.toString()];
          if (void 0 === t)
            return void console.log(
              "dock_overlay_requested: invalid dock_location",
              e,
            );
          const n = p.SW.m_mapOverlayState.get(e.overlay_key);
          n
            ? n.dockLocation != t
              ? this.setOverlayDockLocation(e.overlay_key, t)
              : console.log(
                  "dock_overlay_requested: ignoring redundant request",
                  e,
                )
            : console.log("dock_overlay_requested: unknown overlay_key", e);
        }
        onHideDashboardRequested(e) {
          if (VRHTML.VRDashboardManager.HasMessageOverlay())
            this.switchToOverlayInternal(d.Qv, "onHideDashboardRequested");
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
          e.mode == s.$Z.RecenterCountdown
            ? q.H.setRoomSetupStep(1)
            : e.mode == s.$Z.FloorAdjustExisting
              ? q.H.setRoomSetupStep(2)
              : e.mode == s.$Z.RoomSetupFloor
                ? q.H.setRoomSetupStep(3)
                : e.mode == s.$Z.ClearRoomSetup
                  ? VRHTML.VRChaperoneSetup.ClearRoomSetup()
                  : console.error("Unknown onVRLinkRoomSetup mode ", e.mode);
        }
        onDisableTheaterMode(e) {
          console.log("onDisableTheaterMode"), p.SW.HideTheaterOverlay();
        }
        setDashboardVisibility(e, t, n) {
          let r = {
            type: "set_dashboard_visibility",
            tracked_device_index: t,
            visible: e,
            reason: n,
          };
          this.m_mailbox.SendMessage(s.pg, r);
        }
        show(e) {
          if (p.SW.m_bDashboardVisible) return;
          m.instance.StartDashboardSession(e);
          this.m_mailbox.SendMessage("desktopview", {
            type: "request_window_list_update",
          });
          const t = _.G.Instance.SceneAppKey,
            n = _.G.Instance.SceneAppIsHome;
          t &&
            t != this.state.sLastShownAppKey &&
            (this.setState({ sLastShownAppKey: t }),
            n
              ? this.switchToHomeOverlay()
              : this.switchToOverlayInternal(d.dw, "show")),
            (this.m_activeOverlayThatVanished = null),
            (p.SW.m_bDashboardVisible = !0);
          let r = { type: se.k_sRequestDashboardTabsMessage };
          this.m_mailbox.SendMessage(s.pg, r), (0, s.Em)();
        }
        hide(e) {
          p.SW.m_bDashboardVisible &&
            ((this.m_activeOverlayThatVanished = null),
            (p.SW.m_bDashboardVisible = !1),
            this.setState({ eShowPopoverMenu: oe.None }),
            m.instance.EndDashboardSession(e));
        }
        setPlacementModeActive(e) {
          this.setState({ bPlacementModeActive: e });
        }
        onToggleRoomView(e) {
          const t = p.SW.m_bRoomViewActive,
            n = "boolean" == typeof e ? e : !t;
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VRControlPanel.SetCameraRoomViewVisible(n);
        }
        onLegacyQuickLaunchButtonClick() {
          this.switchToOverlayInternal(d.Sx);
        }
        onUserGuideClick() {
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VRApplications.LaunchApplication("user_guide");
        }
        SetGamepadFocusEnable(e, t) {
          if (
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VRProperties.GetBoolProperty(
                  "/user/head",
                  s.fD.Prop_Hmd_SupportsVRGamepadFocus_Bool,
                )
          ) {
            let n = {
              type: "set_enable_vr_gamepad_focus",
              enable: e,
              sOverlayKey: t,
            };
            this.m_mailbox.SendMessage(s.pg, n);
          }
        }
        getDashboardIconUri(e) {
          try {
            if ("turn_signal_menu.thumb" == e.icon_overlay_key)
              return "/dashboard/images/icons/turnsignal.svg";
            if (e.icon_uri) return e.icon_uri;
            if (e.icon_overlay_key)
              return null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRDashboardManager.GetOverlayImage(e.icon_overlay_key);
          } catch (e) {}
          return null;
        }
        renderLegacyPowerMenu() {
          const e = !!(null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.SceneAppRunning()),
            t = S.HR.settings.get("/settings/dashboard/allowAppQuitting"),
            n = this.BShouldShowDashboardAction(1);
          let r = !1;
          if (VRHTML) {
            VRHTML.VROverlay.GetPrimaryDashboardDevice() >= 0 &&
              (r = VRHTML.VRProperties.GetBoolProperty(
                VRHTML.VROverlay.GetPrimaryDashboardDevice(),
                s.fD.DeviceCanPowerOff_Bool,
              ));
          }
          const i = _.G.Instance.SceneAppName,
            a = _.G.Instance.SceneAppIsHome;
          let l, c;
          return (
            (l = a
              ? (0, u.we)("#Exit_SteamVR_Home")
              : i
                ? (0, u.we)("#PowerMenuQuitSceneApp", i)
                : (0, u.we)("#PowerMenuQuitSceneApp_NoApp")),
            (c = a
              ? "/dashboard/images/icons/svr_svrhome_quit_alt.svg"
              : "/dashboard/images/icons/svr_app_quit.svg"),
            this.renderPopoverMenu(
              o.createElement(
                o.Fragment,
                null,
                p.SW.isVRGamepadUI &&
                  o.createElement(f.Hz, {
                    label: "Old Library",
                    lineBelow: !0,
                    onClick: () => {
                      (this.m_bUserManuallySwitchToOldLibrary = !0),
                        this.switchToOverlayInternal(d.Sx),
                        this.showPopoverMenu(oe.None);
                    },
                  }),
                r &&
                  o.createElement(f.Hz, {
                    label: (0, u.we)("#PowerMenuTurnOffController"),
                    imageUrl:
                      "/dashboard/images/icons/svr_controller_power.svg",
                    onClick: () => {
                      null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.TurnOffVRController(),
                        this.showPopoverMenu(oe.None);
                    },
                  }),
                t &&
                  e &&
                  o.createElement(f.Hz, {
                    label: l,
                    imageUrl: c,
                    onClick: () => {
                      null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.QuitSceneApp(),
                        this.showPopoverMenu(oe.None);
                    },
                  }),
                o.createElement(f.Hz, {
                  label: (0, u.we)("#PowerMenuExitVR"),
                  imageUrl: "/dashboard/images/icons/svr_svr_quit_alt.svg",
                  onClick: () =>
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.QuitOpenVR(),
                }),
                n &&
                  o.createElement(f.Hz, {
                    label: (0, u.we)("#PowerMenuShutdown"),
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
            this.setState({ eShowPopoverMenu: oe.None });
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
              !(function (e, t, n) {
                let r = n.getBoundingClientRect();
                return (
                  e >= r.left && e <= r.right && t >= r.top && t <= r.bottom
                );
              })(e.clientX, e.clientY, this.m_refPopoverMenu.current) &&
              this.startPopoverMenuTimeout(100);
        }
        renderLegacyStatusBarTitle() {
          var e, t, n, r;
          let s = this.getActiveOverlay();
          if (!s) return null;
          if (s.summon_overlay_key == d.Xk) {
            if (
              -1 ==
              (null === (e = this.m_refDesktopView.current) || void 0 === e
                ? void 0
                : e.currentDesktopIndex)
            ) {
              let e =
                null === (t = this.m_refDesktopView.current) || void 0 === t
                  ? void 0
                  : t.currentWindowHwnd;
              return o.createElement(f.MA, {
                name:
                  null === (n = this.m_mapWindows.get(e)) || void 0 === n
                    ? void 0
                    : n.title,
                iconUrl: this.getDashboardIconUri(s),
              });
            }
            return o.createElement(f.MA, {
              name:
                "Desktop " +
                (null === (r = this.m_refDesktopView.current) || void 0 === r
                  ? void 0
                  : r.currentDesktopIndex),
              iconUrl: this.getDashboardIconUri(s),
            });
          }
          return s.summon_overlay_key == d.Wm
            ? o.createElement(f.MA, {
                name: (0, u.we)("#BindingUI_WindowTitle_ControllerBinding"),
                iconUrl: "/dashboard/images/icons/svr_settings.svg",
              })
            : o.createElement(f.MA, {
                name: s.tab_name,
                iconUrl: this.getDashboardIconUri(s),
              });
        }
        getCollisionBoundsFadeVisualizationElements() {
          var e;
          const t =
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VRChaperoneSetup.GetLiveCollisionBoundsInfo();
          if (!t) return [];
          let n = [];
          const r =
            null !== (e = S.HR.settings.get(d.Vv)) && void 0 !== e ? e : 0.7;
          for (let e of t) {
            let t = (0, s.e_)((0, s.JZ)(e[3], e[0])),
              i = (0, s.e_)((0, s.JZ)(e[1], e[0])),
              a = (0, s.oN)(t, i),
              l = (0, s.Ld)((0, s.qF)(t, i, a)),
              c = (0, s.Uj)((0, s.JZ)(e[0], e[3]));
            if (c < 0.4) continue;
            let d = Math.max(1, Math.floor(c));
            for (let t = 0; t < d; t++) {
              let i = (t + 1) / (d + 1),
                a = (0, s.vx)();
              (a.rotation = l),
                (a.translation = (0, s.Se)(i, e[0], e[3])),
                (a.scale = { x: 0.005, y: 0.005, z: r });
              let c = o.createElement(
                s.dL,
                { transform: a },
                o.createElement(
                  s.Y4,
                  { value: 0.25 },
                  o.createElement(
                    s.N,
                    { color: { r: 0.2, g: 0.2, b: 0.2 } },
                    o.createElement(s.aX, {
                      source: "laser_pointer",
                      wireframe: !1,
                      culling: s.Vh.Backface,
                    }),
                  ),
                ),
              );
              n.push(c);
            }
            if (n.length > 20) break;
          }
          return n;
        }
        render() {
          const e = p.SW.m_sActiveOverlaySummonKey,
            t =
              p.SW.m_bDashboardVisible && this.state.setForcingBoundsVisible[e],
            n = t && t.size > 0,
            r = 0 != q.H.roomSetupStep;
          let s = [];
          return (
            n && (s = this.getCollisionBoundsFadeVisualizationElements()),
            o.createElement(
              o.Fragment,
              null,
              !r &&
                o.createElement(
                  "div",
                  { className: "DashboardMain" },
                  n && o.createElement(le, null),
                  n && o.createElement("span", null, s),
                  p.SW.m_bDashboardVisible && this.renderDashboard(),
                  o.createElement(Z, null),
                  this.renderInternalOverlays(),
                  this.renderOverlayWidgets(),
                  !1,
                ),
            )
          );
        }
        hasDashboardOverlay(e) {
          return Object.values(this.m_mapExternalOverlays).some(
            (t) => t.summon_overlay_key == e,
          );
        }
        GetActiveOverlayAnchorIDs() {
          const e = p.SW.m_sActiveOverlaySummonKey;
          return f.G3.has(e)
            ? f.G3.get(e)
            : {
                strTopCenterAnchorID: p.SW.m_sActiveOverlayID + "_TopCenter",
                strCenterLeftAnchorID: p.SW.m_sActiveOverlayID + "_CenterLeft",
                strCenterRightAnchorID:
                  p.SW.m_sActiveOverlayID + "_CenterRight",
                strBottomCenterAnchorID:
                  p.SW.m_sActiveOverlayID + "_BottomCenter",
                strBottomRightAnchorID:
                  p.SW.m_sActiveOverlayID + "_BottomRight",
              };
        }
        renderExternalOverlayControlBarButton(e) {
          const t = this.getDashboardIconUri(e),
            n = f.R0.Center;
          return o.createElement(f.Te, {
            key: e.mountable_id,
            label: e.tab_name,
            imageUrl: t,
            imageStyle: n,
            active: p.SW.isActiveDashboardOverlay(e.summon_overlay_key),
            onClick: () => this.switchToOverlayInternal(e.summon_overlay_key),
          });
        }
        isDesktopTrayActive() {
          var e;
          return (
            (p.SW.isActiveDashboardOverlay(d.Xk) ||
              (null === (e = p.SW.m_sActiveOverlaySummonKey) || void 0 === e
                ? void 0
                : e.startsWith(d.Uv))) &&
            (this.state.eShowPopoverMenu == oe.None ||
              this.state.eShowPopoverMenu == oe.Windows)
          );
        }
        isVolumeTrayActive() {
          return this.state.eShowPopoverMenu == oe.Volume;
        }
        isSteamOverlayActive() {
          return (
            p.SW.isActiveDashboardOverlay(d.wi) &&
            this.state.eShowPopoverMenu == oe.None
          );
        }
        isDesktopOverlayActive() {
          var e;
          return (
            p.SW.isActiveDashboardOverlay(d.Xk) ||
            (null === (e = p.SW.m_sActiveOverlaySummonKey) || void 0 === e
              ? void 0
              : e.startsWith(d.Uv))
          );
        }
        ToggleIncognitoMode(e) {
          let t = {
            type: "toggle_voicechat",
            enable: null != e ? e : !p.SW.isGroupMode,
          };
          this.m_mailbox.SendMessage("web_steam_mailbox", t);
        }
        BShouldShowDashboardAction(e) {
          var t, n, r, i;
          const a = null !== (t = S.HR.settings.get(d.xz)) && void 0 !== t && t,
            o = null !== (n = S.HR.settings.get(d.D1)) && void 0 !== n ? n : 0;
          let l = !!(null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.VRProperties.GetBoolProperty(
                "/user/head",
                s.fD.SupportsInHMDRoomSetup_Bool,
              ));
          switch (e) {
            case 0:
              return (
                null ===
                  (r = S.HR.settings.get("/settings/dashboard/allowExitVR")) ||
                void 0 === r ||
                r
              );
            case 1:
              return S.HR.settings.get(
                "/settings/dashboard/allowSystemShutdown",
              );
            case 2:
              return a && o > 0 && !p.SW.activeLinkServer;
            case 3:
            case 4:
            default:
              return !1;
            case 6:
              return !0;
            case 11:
              return p.SW.isTheaterMode || q.H.m_bShowFloor;
            case 12:
              return (
                null !==
                  (i = S.HR.settings.get(
                    "/settings/dashboard/allowUserGuide",
                  )) &&
                void 0 !== i &&
                i
              );
            case 8:
            case 7:
            case 9:
              return l;
          }
        }
        renderLegacyControlBar(e, t) {
          var n, r, i, a;
          const l =
              null ===
                (n = S.HR.settings.get(
                  "/settings/dashboard/showPowerOptions",
                )) ||
              void 0 === n ||
              n,
            m =
              null ===
                (r = S.HR.settings.get("/settings/dashboard/showDesktop")) ||
              void 0 === r ||
              r,
            h = Y.Q.BOverlayExists(d.wi),
            g = !p.SW.isVRGamepadUI,
            b = !(
              null !==
                (i = S.HR.settings.get("/settings/dashboard/arcadeMode")) &&
              void 0 !== i &&
              i
            ),
            y = _.G.Instance.SceneApplicationState,
            R = _.G.Instance.SceneAppIsHome,
            w =
              null ===
                (a = S.HR.settings.get("/settings/dashboard/allowCurvature")) ||
              void 0 === a ||
              a
                ? d.uv
                : null,
            C = _.G.Instance.SceneAppKey;
          let M = "images/appimage_default.png";
          return (
            C && (M = "/app/image?app_key=" + C),
            o.createElement(
              o.Fragment,
              null,
              o.createElement(
                o.Fragment,
                null,
                o.createElement(
                  s.N,
                  { color: p.SW.ControlBarTint },
                  o.createElement(
                    s.dL,
                    { translation: { z: 1e-5 } },
                    o.createElement(
                      s.Zk,
                      {
                        curvature_origin_id: w,
                        meters_per_pixel: d.iZ,
                        interactive: !0,
                        debug_name: "Controls",
                      },
                      o.createElement(
                        c.W,
                        { className: "ControlBar MainControlBar" },
                        o.createElement(
                          "div",
                          { className: "Section Left" },
                          l &&
                            o.createElement(f.WO, {
                              imageUrl:
                                "/dashboard/images/icons/svr_menu_c.svg",
                              label: (0, u.we)("#Menu"),
                              style: f.gZ.Small,
                              onClick: () => this.showPopoverMenu(oe.Power),
                              onMouseEnter: this.clearPopoverMenuTimeout,
                              onMouseLeave: () =>
                                this.startPopoverMenuTimeout(500),
                            }),
                          o.createElement(
                            f.OR,
                            { style: f.gZ.Small },
                            h &&
                              o.createElement(f.Te, {
                                imageUrl:
                                  "/dashboard/images/icons/vr_steam.svg",
                                label: (0, u.we)("#Steam"),
                                active: this.isSteamOverlayActive(),
                                onClick: () => this.switchToSteamOverlay(),
                              }),
                            g &&
                              o.createElement(f.Te, {
                                label: (0, u.we)("#Library"),
                                imageUrl:
                                  "/dashboard/images/icons/svr_items.svg",
                                active: p.SW.isActiveDashboardOverlay(d.Sx),
                                onClick: this.onLegacyQuickLaunchButtonClick,
                              }),
                            m &&
                              o.createElement(f.Te, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_desktop_alt.svg",
                                label: (0, u.we)("#Desktops"),
                                active: this.isDesktopTrayActive(),
                                onClick: () =>
                                  this.switchToOverlayInternal(d.Xk),
                              }),
                          ),
                          o.createElement(
                            f.OR,
                            { style: f.gZ.Small },
                            o.createElement(
                              o.Fragment,
                              null,
                              e.map(this.renderExternalOverlayControlBarButton),
                              t.length > 0 &&
                                o.createElement(f.Te, {
                                  imageUrl:
                                    "/dashboard/images/icons/svr_more.svg",
                                  label: (0, u.we)(
                                    "#X_More_Overlays",
                                    t.length,
                                  ),
                                  active:
                                    this.state.eShowPopoverMenu ==
                                    oe.ExternalOverlays,
                                  onClick: () =>
                                    this.showPopoverMenu(oe.ExternalOverlays),
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
                          y != s.HW.None &&
                            o.createElement(
                              "div",
                              { className: "NowPlayingSpacer" },
                              o.createElement(
                                v.l,
                                {
                                  allowableParentSelectors: [".DashboardMain"],
                                },
                                o.createElement(
                                  s.N,
                                  { color: p.SW.ControlBarTint },
                                  o.createElement(
                                    s.dL,
                                    { translation: { z: 0.02 } },
                                    o.createElement(
                                      s.Zk,
                                      {
                                        debug_name: "NowPlayingButton",
                                        interactive: !0,
                                        curvature_origin_id: w,
                                        meters_per_pixel: d.iZ,
                                      },
                                      o.createElement(
                                        "div",
                                        { className: "ControlBar" },
                                        o.createElement(f.WO, {
                                          label: R
                                            ? (0, u.we)("#SteamVR_Home")
                                            : (0, u.we)("#Now_Playing"),
                                          active: p.SW.isActiveDashboardOverlay(
                                            d.dw,
                                          ),
                                          style: f.gZ.App,
                                          imageUrl: M,
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
                        o.createElement(
                          "div",
                          { className: "Section Right" },
                          o.createElement(
                            f.OR,
                            { style: f.gZ.Small },
                            this.BShouldShowDashboardAction(6) &&
                              o.createElement(f.Te, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_recenter.svg",
                                additionalClassNames: "CenterImageLarge",
                                label: (0, u.we)("#Button_Recenter"),
                                onClick: () => {
                                  q.H.setRoomSetupStep(1);
                                },
                              }),
                            this.BShouldShowDashboardAction(8) &&
                              o.createElement(f.Te, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_room_setup.svg",
                                additionalClassNames: "CenterImageLarge",
                                label: (0, u.we)("#RoomSetup"),
                                onClick: () => {},
                              }),
                            this.BShouldShowDashboardAction(2) &&
                              o.createElement(f.Te, {
                                imageUrl: "/dashboard/images/icons/svr_eye.svg",
                                label: (0, u.we)("#Toggle_Room_View"),
                                onClick: this.onToggleRoomView,
                                active: p.SW.m_bRoomViewActive,
                                enabled:
                                  null === VRHTML || void 0 === VRHTML
                                    ? void 0
                                    : VRHTML.VROverlayInternal.HasCameraRoomViewCapability(),
                              }),
                            o.createElement(f.Tr, {
                              active: this.state.eShowPopoverMenu == oe.Volume,
                              refVolumeTray: this.m_refVolumeTray,
                              onShowTray: () => this.showPopoverMenu(oe.Volume),
                              onHideTray: () => this.showPopoverMenu(oe.None),
                              onMouseEnter: this.clearPopoverMenuTimeout,
                              onMouseLeave: () =>
                                this.startPopoverMenuTimeout(500),
                            }),
                          ),
                          b &&
                            o.createElement(f.WO, {
                              imageUrl:
                                "/dashboard/images/icons/svr_settings.svg",
                              active: p.SW.isActiveDashboardOverlay(d.Wt),
                              enabled: this.hasDashboardOverlay(d.Wt),
                              label: (0, u.we)("#VRSettings"),
                              style: f.gZ.Small,
                              centerPanelAnchorID: "VolumeButton",
                              onClick: () => this.switchToOverlayInternal(d.Wt),
                            }),
                        ),
                      ),
                      this.renderLegacyControlBarTrays(w),
                      o.createElement(s.dL, {
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
          const n = p.SW.isDarkMode ? { r: 0.25, g: 0.25, b: 0.25 } : null;
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(w.R, {
              ref: this.m_refDesktopTray,
              curvatureOriginId: e,
              scale: t,
              position: 0,
              visible: this.isDesktopTrayActive(),
              tintColor: n,
              onToggleWindowList: () => this.showPopoverMenu(oe.Windows),
              onClearPopoverMenuTimeout: () => this.clearPopoverMenuTimeout(),
              onStartPopoverMenuTimeout: (e) => this.startPopoverMenuTimeout(e),
              mapWindows: this.m_mapWindows,
              sort_depth_bias: 0.2,
              bWindowViewEnabled: this.state.bWindowViewEnabled,
            }),
            o.createElement(f.DN, {
              ref: this.m_refVolumeTray,
              curvatureOriginId: e,
              scale: t,
              position: 0.337,
              visible: this.isVolumeTrayActive(),
              tintColor: n,
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
          })).filter((e) => e.overlayState.dockLocation != R.$z.Dashboard);
          return o.createElement(
            o.Fragment,
            null,
            e.map((e) => {
              var t;
              return o.createElement(R.BO, {
                bDashboardShown: p.SW.m_bDashboardVisible,
                bHasSceneApp: _.G.Instance.SceneApplicationState !== s.HW.None,
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
          return (
            p.SW.m_bDashboardVisible &&
            p.SW.isActiveDashboardOverlay(d.Xk) &&
            (0, R.Ox)(this.getActiveOverlayDockLocation())
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
          var e, t, n, r;
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
                (r =
                  null === (n = this.m_refDesktopView.current) || void 0 === n
                    ? void 0
                    : n.desktopCount) && void 0 !== r
                ? r
                : 1,
            c = !p.SW.isVRGamepadUI || p.SW.m_bShowLegacyBar;
          return o.createElement(
            o.Fragment,
            null,
            c &&
              o.createElement(
                s.gO,
                {
                  tabName: (0, u.we)("#Library"),
                  iconUri: "/dashboard/images/icons/svr_items.svg",
                  summonOverlayKey: d.Sx,
                },
                o.createElement(G, {
                  visible:
                    p.SW.m_bDashboardVisible &&
                    p.SW.isActiveDashboardOverlay(d.Sx),
                  onGameLaunched: this.onGameLaunched,
                }),
              ),
            o.createElement(
              s.gO,
              { tabName: (0, u.we)("#Now_Playing"), summonOverlayKey: d.dw },
              o.createElement(H, {
                visible:
                  p.SW.m_bDashboardVisible &&
                  p.SW.isActiveDashboardOverlay(d.dw),
                onExitGame: () => this.switchToHomeOverlay(),
              }),
            ),
            o.createElement(
              s.gO,
              {
                summonOverlayKey: d.Xk,
                tabName:
                  a > 1 ? (0, u.we)("#Desktop_X", i) : (0, u.we)("#Desktop"),
                iconUri: "/dashboard/images/icons/svr_desktop_alt.svg",
              },
              o.createElement(w.E, {
                visible: this.isDesktopViewVisible(),
                mapWindows: this.m_mapWindows,
                bWindowViewEnabled: this.state.bWindowViewEnabled,
                ref: this.m_refDesktopView,
              }),
            ),
            o.createElement(l.z, {
              visible:
                p.SW.m_bDashboardVisible && p.SW.isActiveDashboardOverlay(d.Wt),
            }),
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
            (t.startsWith(d.Uv)
              ? null === (e = this.m_refDesktopView.current) ||
                void 0 === e ||
                e.onWindowViewClosed(t)
              : this.switchToHomeOverlay(),
            VRHTML.VRDashboardManager.SendOverlayClosed(t));
        }
        renderOverlayControlBar() {
          var e, t, n;
          let r = !1;
          const i = this.getActiveOverlayKey(),
            a =
              null === (e = Y.Q.GetOverlayInfo(i)) || void 0 === e
                ? void 0
                : e.sHandle;
          if (a)
            try {
              r = VRHTML.VROverlay.GetFlag(a, s.NB.EnableControlBarClose);
            } catch (e) {
              return (
                console.log(
                  "Error getting flag on sOverlayKey/sOverlayHandle ",
                  i,
                  a,
                ),
                null
              );
            }
          const l =
              null ===
                (t = S.HR.settings.get("/settings/dashboard/allowCurvature")) ||
              void 0 === t ||
              t
                ? d.uv
                : null,
            c = { x: 0, y: 0.15, z: 0 },
            m = p.SW.m_mapOverlayState.get(i),
            h = !m || (null == m ? void 0 : m.dockLocation) == R.$z.Dashboard,
            g =
              a &&
              (VRHTML.VROverlay.GetFlag(a, s.NB.EnableControlBarKeyboard) ||
                i == d.Bn),
            v =
              (null == i ? void 0 : i.startsWith(d.GO)) &&
              (null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.BSupportsMultitaskingView());
          return !m || m.bSuppressDoubleOverlayControlBar
            ? null
            : o.createElement(
                o.Fragment,
                null,
                o.createElement(
                  s.dL,
                  { parent_id: d.zM },
                  o.createElement(
                    o.Fragment,
                    null,
                    o.createElement(
                      s.Zk,
                      {
                        curvature_origin_id: l,
                        origin: s.Oi.TopCenter,
                        interactive: !0,
                        meters_per_pixel: d.iZ,
                        debug_name: "ActiveOverlayControlBar",
                        reflect: 0.1,
                      },
                      o.createElement(
                        "div",
                        { className: "TransparentOverlayControlBar" },
                        o.createElement(
                          "div",
                          { className: "Section" },
                          g &&
                            o.createElement(f.oZ, {
                              tooltipTranslation: c,
                              overlayKey: this.getActiveOverlayKey(),
                              additionalClassNames: "LargeIcon",
                            }),
                          v &&
                            o.createElement(f.N2, {
                              iconUrl:
                                "/dashboard/images/icons/icon_multitasking_view.png",
                              title: (0, u.we)("#MultitaskingView"),
                              tooltipTranslation: c,
                              onClick:
                                null === (n = this.m_refDesktopView.current) ||
                                void 0 === n
                                  ? void 0
                                  : n.ShowMultitaskingView,
                            }),
                        ),
                        o.createElement(
                          "div",
                          { className: "Section" },
                          !h &&
                            o.createElement(f.N2, {
                              icon: o.createElement(ee.Xj, null),
                              title: (0, u.we)("#ReturnToDashboard"),
                              tooltipTranslation: c,
                              onClick: () => {
                                const e = this.getActiveOverlayKey();
                                this.setOverlayDockLocation(e, R.$z.Dashboard);
                              },
                              additionalClassNames: "LargeIcon",
                            }),
                          h &&
                            o.createElement(
                              o.Fragment,
                              null,
                              o.createElement(f.N2, {
                                iconUrl:
                                  "/dashboard/images/icons/mirror_left.png",
                                title: (0, u.we)("#DockOnLeftController"),
                                tooltipTranslation: c,
                                onClick: () => {
                                  const e = this.getActiveOverlayKey();
                                  this.setOverlayDockLocation(e, R.$z.LeftHand);
                                },
                                enabled:
                                  VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                                    s.kG.TrackedControllerRole_LeftHand,
                                  ) != s.ne,
                                active:
                                  this.getActiveOverlayDockLocation() ==
                                  R.$z.LeftHand,
                                additionalClassNames: "LargeIcon",
                              }),
                              o.createElement(f.N2, {
                                iconUrl:
                                  "/dashboard/images/icons/mirror_right.png",
                                title: (0, u.we)("#DockOnRightController"),
                                tooltipTranslation: c,
                                onClick: () => {
                                  const e = this.getActiveOverlayKey();
                                  this.setOverlayDockLocation(
                                    e,
                                    R.$z.RightHand,
                                  );
                                },
                                enabled:
                                  VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                                    s.kG.TrackedControllerRole_RightHand,
                                  ) != s.ne,
                                active:
                                  this.getActiveOverlayDockLocation() ==
                                  R.$z.RightHand,
                                additionalClassNames: "LargeIcon",
                              }),
                              " ",
                            ),
                        ),
                        (h || r) &&
                          o.createElement(
                            "div",
                            { className: "Section" },
                            h &&
                              o.createElement(f.N2, {
                                icon: o.createElement(ee.YN, null),
                                title: (0, u.we)("#FloatInWorld"),
                                tooltipTranslation: c,
                                onClick: () => {
                                  const e = this.getActiveOverlayKey();
                                  this.setOverlayDockLocation(e, R.$z.World);
                                },
                                active:
                                  this.getActiveOverlayDockLocation() ==
                                  R.$z.World,
                              }),
                            h &&
                              o.createElement(f.N2, {
                                icon: o.createElement(ee.fr, null),
                                title: (0, u.we)("#ViewInTheater"),
                                tooltipTranslation: c,
                                onClick: () => {
                                  const e = this.getActiveOverlayKey();
                                  this.setOverlayDockLocation(e, R.$z.Theater);
                                },
                                active:
                                  this.getActiveOverlayDockLocation() ==
                                  R.$z.Theater,
                                additionalClassNames: "LargeIcon",
                              }),
                            r &&
                              o.createElement(f.N2, {
                                iconUrl:
                                  "/dashboard/images/icons/icon_close_black.png",
                                title: (0, u.we)(
                                  ce(i) ? "#QuitApp" : "#CloseOverlay",
                                ),
                                tooltipTranslation: c,
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
        renderLegacyHeader(e) {
          const t = p.SW.isDarkMode,
            n = t ? { r: 0.02, g: 0.02, b: 0.02 } : null,
            r = t ? 0 : 0.1,
            i = !t;
          let a = null;
          return (
            this.isDesktopOverlayActive() && (a = 2048),
            o.createElement(
              o.Fragment,
              null,
              o.createElement(
                s.dL,
                { translation: { y: 0.008 } },
                o.createElement(
                  s.N,
                  { color: n },
                  o.createElement(
                    s.Zk,
                    {
                      curvature_origin_id: e,
                      origin: s.Oi.BottomCenter,
                      interactive: !1,
                      meters_per_pixel: d.iZ,
                      debug_name: "StatusBar",
                      reflect: r,
                    },
                    o.createElement(
                      "div",
                      { className: "StatusBar", style: { width: a } },
                      o.createElement(
                        "div",
                        { className: "Section Left" },
                        i && this.renderLegacyStatusBarTitle(),
                        o.createElement(f.Fu, {
                          role: s.kG.TrackedControllerRole_LeftHand,
                          style: y.b.HorizontalPips,
                        }),
                      ),
                      o.createElement(
                        "div",
                        { className: "Section Center" },
                        o.createElement(f.Fu, {
                          deviceIndex: s.Gz,
                          style: y.b.VerticalBattery,
                        }),
                        o.createElement(f.HA, null),
                      ),
                      o.createElement(
                        "div",
                        { className: "Section Right" },
                        o.createElement(f.Fu, {
                          role: s.kG.TrackedControllerRole_RightHand,
                          style: y.b.HorizontalPips,
                        }),
                      ),
                    ),
                  ),
                ),
              ),
            )
          );
        }
        renderDashboard() {
          var e, t, n, r, i, a;
          const l = this.computeFilteredOverlayTabs(!1),
            c = p.SW.isVRGamepadUIReady,
            u = !p.SW.isVRGamepadUI || p.SW.m_bShowLegacyBar,
            m = null !== (e = S.HR.settings.get(d.Fl)) && void 0 !== e && e,
            h = !p.SW.isVRGamepadUI,
            g = p.SW.isVRGamepadUI && !p.SW.isVRGamepadUIReady && !m;
          let v = [],
            _ = [],
            b = null !== (t = S.HR.settings.get(d.lP)) && void 0 !== t ? t : 2;
          if (l.length > b) {
            const e = S.HR.settings.get(d.XO);
            (v = [
              null !== (n = l.find((t) => t.summon_overlay_key == e)) &&
              void 0 !== n
                ? n
                : l[0],
            ]),
              (_ = l.filter((e) => !v.includes(e)));
          } else v = l;
          let y = [];
          this.m_mapWindows.forEach((e) => {
            "" == e.overlay_key && y.push(e);
          });
          const w = this.getActiveOverlayDockLocation(),
            C = (0, R.C0)(w),
            M = (0, R.Ox)(w),
            E = this.getActiveOverlayKey(),
            T =
              null === (r = Y.Q.GetOverlayInfo(E)) || void 0 === r
                ? void 0
                : r.sHandle;
          let V = !0;
          try {
            V = !!T && VRHTML.VROverlay.GetFlag(T, s.NB.MinimalControlBar);
          } catch (e) {
            return console.log(JSON.stringify(e)), null;
          }
          const k =
              null ===
                (i = S.HR.settings.get("/settings/dashboard/allowCurvature")) ||
              void 0 === i ||
              i,
            H = k ? d.uv : null,
            A = { y: V ? -1.03375 : -0.9, z: 0.05 },
            D = c ? { y: -1.2, z: 0.35 } : { y: -1.2, z: 0.15 },
            O = se.k_nControlBarPitch;
          let L,
            B = k ? 1 : 0;
          const I =
              null !==
                (a = S.HR.settings.get(
                  "/settings/dashboard/allowFreeTransform",
                )) &&
              void 0 !== a &&
              a,
            P = this.GetActiveOverlayAnchorIDs().strTopCenterAnchorID;
          return o.createElement(
            o.Fragment,
            null,
            g && o.createElement(re, null),
            o.createElement(
              s.sJ,
              {
                bContinuousRelatch: this.state.bPlacementModeActive || g,
                bFreeDashboardTransform: I && this.state.bPlacementModeActive,
              },
              o.createElement(
                s.dL,
                { translation: {}, parent_path: L },
                o.createElement(
                  s.dL,
                  { translation: p.SW.dashboardTranslation },
                  o.createElement(
                    s.dL,
                    { translation: { y: -0.15 } },
                    o.createElement(
                      z.B,
                      {
                        should_head_align: !0,
                        min_distance: 0.7,
                        lerp_speed: 0.175,
                        one_to_one_radius: 0,
                        max_x_squared_contribution: 0,
                        acceleration_factor_x_coefficient: 2.5,
                        acceleration_factor_x_squared_coefficient: 0,
                      },
                      !1,
                      o.createElement(
                        s.dL,
                        { translation: { y: 0.15 } },
                        o.createElement(s.dL, {
                          id: H,
                          translation: { z: p.SW.dashboardDistance + 1.8 },
                        }),
                        o.createElement(
                          s.dL,
                          { scale: p.SW.dashboardScale },
                          o.createElement(
                            s.dL,
                            { parent_id: P },
                            h && this.renderLegacyHeader(H),
                          ),
                          o.createElement(
                            s.dL,
                            {
                              id: "active_overlay_transform",
                              translation: A,
                              ref: this.m_refOverlayTransform,
                            },
                            !C && M && this.renderActiveOverlay(),
                          ),
                          !1,
                          ie,
                          o.createElement(
                            s.dL,
                            { parent_id: c ? d.NX : d.kx },
                            o.createElement(U.X, {
                              curvature_origin_id: H,
                              tint: p.SW.GrabHandleTint,
                              onStartMove: this.onGrabStart,
                              onEndMove: this.onGrabEnd,
                            }),
                          ),
                          !1,
                          o.createElement(
                            s.dL,
                            { translation: D, id: d.Sp },
                            !V && this.renderOverlayControlBar(),
                            o.createElement(s.dL, {
                              id: d.kx,
                              translation: { y: 0.08, z: -0.12 },
                            }),
                            o.createElement(
                              s.dL,
                              {
                                rotation: { x: O },
                                curvature_pitch: O,
                                translation: c ? { y: -0.65, z: 0.2 } : {},
                              },
                              u && this.renderLegacyControlBar(v, _),
                              o.createElement(
                                s.dL,
                                { translation: { y: -0.65, z: -0.01 } },
                                o.createElement(ve, null),
                              ),
                            ),
                            c &&
                              o.createElement(
                                s.dL,
                                { rotation: { x: O }, curvature_pitch: O },
                                o.createElement(_e, { curvature_origin_id: H }),
                              ),
                            o.createElement(
                              s.dL,
                              { rotation: { x: O } },
                              o.createElement(
                                s.dL,
                                {
                                  translation:
                                    se.k_nKeyboardGrabTransformOffset,
                                },
                                o.createElement(
                                  z.B,
                                  { min_distance: 0.2, should_head_align: !1 },
                                  o.createElement(
                                    s.dL,
                                    {
                                      translation: {
                                        x:
                                          -1 *
                                          se.k_nKeyboardGrabTransformOffset.x,
                                        y:
                                          -1 *
                                          se.k_nKeyboardGrabTransformOffset.y,
                                        z:
                                          -1 *
                                          se.k_nKeyboardGrabTransformOffset.z,
                                      },
                                    },
                                    o.createElement(
                                      s.dL,
                                      {
                                        rotation: { x: -10 },
                                        curvature_pitch: O,
                                      },
                                      !1,
                                      this.state.bKeyboardVisible &&
                                        o.createElement(X, {
                                          debugHostLocation: "Dashboard",
                                          onGrabStart: this.onGrabStart,
                                          onGrabEnd: this.onGrabEnd,
                                        }),
                                    ),
                                  ),
                                ),
                              ),
                            ),
                            this.state.eShowPopoverMenu == oe.Power &&
                              o.createElement(
                                s.dL,
                                {
                                  translation: { x: -0.4, y: 0.15, z: 0.05 },
                                  rotation: { y: 19 * B },
                                },
                                o.createElement(
                                  s.Zk,
                                  {
                                    curvature_origin_id: H,
                                    height: void 0,
                                    width: 0.925,
                                    interactive: !0,
                                    origin: s.Oi.BottomRight,
                                    debug_name: "Power Menu",
                                    sort_depth_bias: -0.1,
                                  },
                                  this.renderLegacyPowerMenu(),
                                ),
                              ),
                            this.state.eShowPopoverMenu ==
                              oe.ExternalOverlays &&
                              o.createElement(
                                s.dL,
                                {
                                  translation: { x: 0.2, y: 0.15, z: 0.05 },
                                  rotation: { y: 6 * B },
                                },
                                o.createElement(
                                  s.Zk,
                                  {
                                    curvature_origin_id: H,
                                    height: void 0,
                                    width: 0.925,
                                    interactive: !0,
                                    origin: s.Oi.BottomRight,
                                    debug_name: "OverlaysList",
                                    sort_depth_bias: -0.1,
                                  },
                                  this.renderPopoverMenu(
                                    o.createElement(
                                      o.Fragment,
                                      null,
                                      " ",
                                      _.map((e) =>
                                        o.createElement(f.Hz, {
                                          key: e.mountable_id,
                                          imageUrl: this.getDashboardIconUri(e),
                                          label: e.tab_name,
                                          onClick: () => {
                                            this.switchToOverlayInternal(
                                              e.summon_overlay_key,
                                            ),
                                              this.showPopoverMenu(oe.None);
                                          },
                                        }),
                                      ),
                                      " ",
                                    ),
                                  ),
                                ),
                              ),
                            this.state.eShowPopoverMenu == oe.Windows &&
                              o.createElement(
                                s.dL,
                                {
                                  translation: { x: 1.25, y: -0.1, z: 0.35 },
                                  rotation: { y: -16 * B },
                                },
                                o.createElement(
                                  s.Zk,
                                  {
                                    curvature_origin_id: H,
                                    height: void 0,
                                    width: 0.925,
                                    interactive: !0,
                                    origin: s.Oi.BottomRight,
                                    debug_name: "WindowList",
                                    sort_depth_bias: -0.1,
                                  },
                                  this.renderPopoverMenu(
                                    o.createElement(
                                      o.Fragment,
                                      null,
                                      " ",
                                      y.map((e) =>
                                        o.createElement(f.Hz, {
                                          key: e.hwnd,
                                          imageUrl:
                                            "/dashboard/images/icons/icon_add.png",
                                          label: e.title,
                                          onClick: () => {
                                            let t = {
                                              type: "request_spawn_window_view",
                                              hwnd: e.hwnd,
                                            };
                                            this.m_mailbox.SendMessage(
                                              "desktopview",
                                              t,
                                            ),
                                              this.showPopoverMenu(oe.None);
                                          },
                                        }),
                                      ),
                                      " ",
                                    ),
                                  ),
                                ),
                              ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          );
        }
      });
      (he.k_sDashboardMailboxName = "systemui_dashboard"),
        (he.k_sSetDashboardFadeSupressionMessage =
          "set_dashboard_fade_suppression"),
        (he.k_sDashboardOverlayCreatedMessage = "dashboard_overlay_created"),
        (he.k_sDashboardOverlayDestroyedMessage =
          "dashboard_overlay_destroyed"),
        (he.k_sUpdateDashboardTabsMessage = "update_dashboard_tabs"),
        (he.k_sRequestDashboardTabsMessage = "request_dashboard_tabs"),
        (he.k_sWindowViewCreatedMessage = "window_view_created"),
        (he.k_sWindowViewDestroyedMessage = "window_view_destroyed"),
        (he.k_sUpdateWindowListMessage = "update_window_list"),
        (he.k_sUpdateDebugInfoMessage = "update_debug_info"),
        (he.k_sSetDashboardForceBoundsVisible =
          "set_dashboard_force_bounds_visible"),
        (he.k_nTimeLimitToReturnToActiveOverlayThatVanishedSeconds = 3),
        (he.k_nControlBarPitch = -40),
        (he.k_nKeyboardGrabTransformOffset = { x: 0, y: -0.85, z: 0.35 }),
        (0, r.Cg)([a.sH], he.prototype, "m_mapWindows", void 0),
        (0, r.Cg)([i.o], he.prototype, "onSetDashboardFadeSuppression", null),
        (0, r.Cg)([i.o], he.prototype, "onKeyboardVisibilityChanged", null),
        (0, r.Cg)([i.o], he.prototype, "onGrabStart", null),
        (0, r.Cg)([i.o], he.prototype, "onGrabEnd", null),
        (0, r.Cg)(
          [i.o],
          he.prototype,
          "onSetDashboardForceBoundsVisible",
          null,
        ),
        (0, r.Cg)([i.o], he.prototype, "onDashboardOverlayCreated", null),
        (0, r.Cg)([i.o], he.prototype, "onDashboardOverlayDestroyed", null),
        (0, r.Cg)([i.o], he.prototype, "onUpdateDashboardTabs", null),
        (0, r.Cg)([i.o], he.prototype, "onWindowViewCreated", null),
        (0, r.Cg)([i.o], he.prototype, "onWindowViewDestroyed", null),
        (0, r.Cg)([a.XI.bound], he.prototype, "onUpdateWindowList", null),
        (0, r.Cg)([i.o], he.prototype, "onUpdateDebugInfo", null),
        (0, r.Cg)([i.o], he.prototype, "setOverlayDockLocation", null),
        (0, r.Cg)([i.o], he.prototype, "onShowDashboardRequested", null),
        (0, r.Cg)([i.o], he.prototype, "onDockOverlayRequested", null),
        (0, r.Cg)([i.o], he.prototype, "onHideDashboardRequested", null),
        (0, r.Cg)([i.o], he.prototype, "onVRLinkRoomSetup", null),
        (0, r.Cg)([i.o], he.prototype, "onDisableTheaterMode", null),
        (0, r.Cg)([i.o], he.prototype, "show", null),
        (0, r.Cg)([i.o], he.prototype, "hide", null),
        (0, r.Cg)([i.o], he.prototype, "setPlacementModeActive", null),
        (0, r.Cg)([i.o], he.prototype, "onToggleRoomView", null),
        (0, r.Cg)([i.o], he.prototype, "onLegacyQuickLaunchButtonClick", null),
        (0, r.Cg)([i.o], he.prototype, "onUserGuideClick", null),
        (0, r.Cg)([i.o], he.prototype, "SetGamepadFocusEnable", null),
        (0, r.Cg)([i.o], he.prototype, "renderLegacyPowerMenu", null),
        (0, r.Cg)([i.o], he.prototype, "startPopoverMenuTimeout", null),
        (0, r.Cg)([i.o], he.prototype, "clearPopoverMenuTimeout", null),
        (0, r.Cg)([i.o], he.prototype, "showPopoverMenu", null),
        (0, r.Cg)([i.o], he.prototype, "popoverMenuMouseLeave", null),
        (0, r.Cg)([i.o], he.prototype, "popoverMenuMouseUp", null),
        (0, r.Cg)([i.o], he.prototype, "hasDashboardOverlay", null),
        (0, r.Cg)(
          [i.o],
          he.prototype,
          "renderExternalOverlayControlBarButton",
          null,
        ),
        (0, r.Cg)([i.o], he.prototype, "isDesktopTrayActive", null),
        (0, r.Cg)([i.o], he.prototype, "isVolumeTrayActive", null),
        (0, r.Cg)([i.o], he.prototype, "isSteamOverlayActive", null),
        (0, r.Cg)([i.o], he.prototype, "isDesktopOverlayActive", null),
        (0, r.Cg)([i.o], he.prototype, "ToggleIncognitoMode", null),
        (0, r.Cg)([i.o], he.prototype, "getRenderModelForShape", null),
        (0, r.Cg)([i.o], he.prototype, "isDesktopViewVisible", null),
        (0, r.Cg)([i.o], he.prototype, "onGameLaunched", null),
        (0, r.Cg)([i.o], he.prototype, "onAddPortal", null),
        (0, r.Cg)([i.o], he.prototype, "onRemovePortal", null),
        (0, r.Cg)([i.o], he.prototype, "onActiveOverlayScaleChange", null),
        (0, r.Cg)([i.o], he.prototype, "onActiveOverlayClosed", null),
        (he = se = (0, r.Cg)([b.PA], he));
      const ge = (0, b.PA)(function (e) {
          var t;
          let n =
            null !== (t = VRHTML.GetHostInfo(s.k2.Hostname)) && void 0 !== t
              ? t
              : "unknown";
          return o.createElement(
            s.Zk,
            {
              meters_per_pixel: d.iZ,
              interactive: !0,
              debug_name: "vrlink-info",
            },
            o.createElement(
              "div",
              { className: "FloatingButtonRow" },
              o.createElement(
                c.$,
                { className: "ButtonControl", onClick: e.onClick },
                o.createElement("span", null, n.toLowerCase(), " "),
              ),
            ),
          );
        }),
        ve = (0, b.PA)(function (e) {
          return null;
        }),
        _e =
          ((0, b.PA)(function () {
            return null;
          }),
          (0, b.PA)(function (e) {
            var t;
            const n =
                null !==
                  (t =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VRProperties.GetInt32Property(
                          "/user/head",
                          s.fD.DashboardLinkSupport_Int32,
                        )) && void 0 !== t
                  ? t
                  : 0,
              r = p.SW.isVRGamepadUI && !!(1 & n) && p.SW.m_bLinkStreamActive;
            let i = r ? 0.425 : 0.35;
            return o.createElement(
              te.tH,
              null,
              r &&
                o.createElement(
                  s.dL,
                  { translation: { y: 0.075, z: 0 } },
                  o.createElement(ge, {
                    onClick: () => {
                      var e;
                      null === (e = VRHTML.VRLink) ||
                        void 0 === e ||
                        e.SendRemoteDashboardOpen();
                    },
                  }),
                ),
              o.createElement(
                s.Zk,
                {
                  id: "VRDashboardBar-Panel",
                  debug_name: "VRDashboardBar",
                  interactive: !0,
                  make_overlays_interactive_if_visible: !0,
                  curvature_origin_id: e.curvature_origin_id,
                  overlay_key: d.Vx,
                  origin: s.Oi.TopCenter,
                  meters_per_pixel: p.SW.m_fVRGamepadUI_MetersPerPixel,
                  reflect: 0.1,
                },
                o.createElement(s.Ci, {
                  id: "VRDashboardBar-Panel-TopCenter",
                  location: s.Oi.TopCenter,
                }),
                o.createElement(
                  s.Ci,
                  {
                    id: "VRDashboardBar-Panel-BottomCenter",
                    location: s.Oi.BottomCenter,
                  },
                  o.createElement(s.dL, { id: d.zM, translation: { y: i } }),
                  o.createElement(s.dL, { id: d.NX, translation: { y: -0.1 } }),
                ),
              ),
            );
          })),
        Se = [
          (e) => {
            var t;
            return (
              1 == (null === (t = e.icon()) || void 0 === t ? void 0 : t.enum())
            );
          },
          (e) => {
            var t;
            return (
              4 == (null === (t = e.icon()) || void 0 === t ? void 0 : t.enum())
            );
          },
          (e) => null == e.icon(),
          (e) => {
            var t;
            return (
              2 == (null === (t = e.icon()) || void 0 === t ? void 0 : t.enum())
            );
          },
        ];
      function be(e, t) {
        let n = -1,
          r = -1;
        for (let s = 0; s < Se.length && n < 0 && r < 0; s++)
          Se[s](e) && (n = s), Se[s](t) && (r = s);
        return (
          n < 0 && (n = Se.length),
          r < 0 && (r = Se.length),
          n == r ? e.tab_id() - t.tab_id() : n - r
        );
      }
      function ye(e, t) {
        var n, r, s, i, a, o;
        let l;
        const c =
            null !== (n = null == e ? void 0 : e.product_name) && void 0 !== n
              ? n
              : "",
          d =
            null !== (r = null == t ? void 0 : t.product_name) && void 0 !== r
              ? r
              : "";
        if (((l = c.localeCompare(d)), 0 != l)) return l;
        const u =
            null !== (s = null == e ? void 0 : e.title) && void 0 !== s
              ? s
              : "",
          p =
            null !== (i = null == t ? void 0 : t.title) && void 0 !== i
              ? i
              : "";
        if (((l = u.localeCompare(p)), 0 != l)) return l;
        const m =
            null !== (a = null == e ? void 0 : e.hwnd) && void 0 !== a ? a : "",
          h =
            null !== (o = null == t ? void 0 : t.hwnd) && void 0 !== o ? o : "";
        return m.localeCompare(h);
      }
    },
    8696: (e, t, n) => {
      "use strict";
      n.d(t, {
        $z: () => s,
        BO: () => D,
        C0: () => V,
        Do: () => i,
        HX: () => C,
        Ox: () => T,
        xp: () => M,
      });
      var r,
        s,
        i,
        a = n(1635),
        o = n(6090),
        l = n(3236),
        c = n(4015),
        d = n(6540),
        u = n(6189),
        p = n(3606),
        m = n(1333),
        h = n(1835),
        g = n(9248),
        v = n(3712),
        _ = n(7530),
        S = n(3696),
        b = n(3350),
        y = n(2563),
        R = n(9471),
        f = n(3714),
        w = n(7600);
      function C(e) {
        switch (e) {
          case s.Dashboard:
          case s.World:
            return 1;
          case s.Theater:
            return 3;
          case s.LeftHand:
          case s.RightHand:
            return 4;
          default:
            return 0;
        }
      }
      function M(e) {
        const t = h.SW.currentTheaterScreenSize;
        switch (e) {
          case s.LeftHand:
          case s.RightHand:
            return 0.4 * h.SW.dashboardScale;
          case s.Dashboard:
          case s.World:
            return 1 * h.SW.dashboardScale;
          case s.Theater:
            return h.SW.dashboardScale * (t == h.Nr.Large ? 2.35 : 1.8);
        }
        return h.SW.dashboardScale;
      }
      !(function (e) {
        (e[(e.Dashboard = 0)] = "Dashboard"),
          (e[(e.LeftHand = 1)] = "LeftHand"),
          (e[(e.RightHand = 2)] = "RightHand"),
          (e[(e.World = 3)] = "World"),
          (e[(e.Theater = 4)] = "Theater");
      })(s || (s = {})),
        (function (e) {
          (e[(e.Curved = 0)] = "Curved"), (e[(e.Flat = 1)] = "Flat");
        })(i || (i = {}));
      const E = "TheaterCurvatureOriginId";
      function T(e) {
        return e == s.Dashboard;
      }
      function V(e) {
        return e == s.World;
      }
      function k(e) {
        return e == s.LeftHand || e == s.RightHand;
      }
      function H(e) {
        switch (e) {
          case s.LeftHand:
            return "/user/hand/left";
          case s.RightHand:
            return "/user/hand/right";
          default:
            return "";
        }
      }
      function A(e, t) {
        try {
          return null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.GetPose(e, t);
        } catch (e) {
          return;
        }
      }
      let D = (r = class extends d.Component {
        constructor(e) {
          super(e),
            (this.state = {
              xfTransform: null,
              sParent: H(this.props.dockLocation),
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
                sParent: H(this.props.dockLocation),
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
          let n = { x: 0, y: 0 };
          try {
            n = VRHTML.VROverlay.GetOverlayMouseScale(t);
          } catch (e) {
            return console.log(JSON.stringify(e)), null;
          }
          let r =
              null !== (e = VRHTML.VROverlay.GetWidthInMeters(t)) &&
              void 0 !== e
                ? e
                : 1,
            s = (r * n.y) / n.x;
          return (
            (this.props.sOverlayKey.startsWith(p.GO) ||
              this.props.sOverlayKey.startsWith(p.Uv)) &&
              ((s = b.E.k_nDesktopPanelBaseHeight), (r = (s * n.x) / n.y)),
            { width: r, height: s }
          );
        }
        getPanelScaleForLocation() {
          const e = h.SW.currentTheaterScreenSize;
          switch (this.props.dockLocation) {
            case s.LeftHand:
            case s.RightHand:
              return 0.15;
            case s.Dashboard:
            case s.World:
              let t = h.SW.isVRGamepadUI
                ? h.SW.m_fVRGamepadUI_GlobalActiveOverlayScale
                : 1;
              t *= h.SW.dashboardScale;
              const n = h.SW.m_mapOverlayState.get(this.props.sOverlayKey);
              return t * (n ? n.fScale : 1);
            case s.Theater:
              let r = e == h.Nr.Large ? 2.35 : 1.8;
              const i = this.getCurrentOverlaySize();
              return null === i || 0 == i.height ? r : r / i.height;
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
                  let n = (0, o.vx)();
                  (n.rotation = t.rotation),
                    (n.translation = {
                      x: t.translation.x,
                      y: e,
                      z: t.translation.z,
                    }),
                    this.setState({ xfTransform: n });
                })
                .catch((t) => {
                  console.warn(
                    "Failed to get SGTransform in setInitialTransformForTheater. Using head fallback",
                    t,
                  );
                  let n = (function () {
                    const e = A("/user/head", o.mu.Standing);
                    if (
                      e &&
                      (null == e ? void 0 : e.bPoseIsValid) &&
                      (null == e ? void 0 : e.xfDeviceToAbsoluteTracking)
                    ) {
                      const t = 4,
                        n = -0.75,
                        r = (0, o.p0)(e.xfDeviceToAbsoluteTracking);
                      let s = (0, o.o_)(r);
                      s.y = 0;
                      let i = (0, o.tx)((0, o.e_)(s), t);
                      i.y += n;
                      let a = (0, o.vx)();
                      return (
                        (a.rotation = r.rotation),
                        (a.translation = (0, o.CU)(i, r.translation)),
                        a
                      );
                    }
                    return null;
                  })();
                  (null == n ? void 0 : n.translation) && (n.translation.y = e),
                    this.setState({ xfTransform: n });
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
              case s.LeftHand:
              case s.RightHand:
              case s.World:
                this.setState({ xfTransform: this.props.xfInitial });
            }
          else
            switch (this.props.dockLocation) {
              case s.Dashboard:
              case s.LeftHand:
              case s.RightHand: {
                let e = (0, o.vx)();
                (e.rotation = (0, o.Fb)({ x: -45, y: 0, z: 0 })),
                  this.setState({ xfTransform: e });
                break;
              }
              case s.World:
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
              case s.Theater:
                this.setInitialTransformForTheater();
            }
        }
        computeDestination() {
          if (!this.state.bIsMoving || null === this.state.xfTransform) return;
          const e = A(this.m_nMoveDeviceIndex, o.mu.Standing);
          let t = null;
          VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
            o.kG.TrackedControllerRole_LeftHand,
          ) != o.ne && (t = A("/user/hand/left", o.mu.Standing));
          let n = null;
          VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
            o.kG.TrackedControllerRole_RightHand,
          ) != o.ne && (n = A("/user/hand/right", o.mu.Standing));
          let i = [];
          switch (this.state.sParent) {
            case "/user/hand/left":
              n && i.push({ pose: n, location: s.RightHand });
              break;
            case "/user/hand/right":
              t && i.push({ pose: t, location: s.LeftHand });
              break;
            case "/user/head":
              t && i.push({ pose: t, location: s.LeftHand }),
                n && i.push({ pose: n, location: s.RightHand });
          }
          if (!e || 0 == i.length)
            return void setTimeout(this.computeDestination, r.sfMovePulseMS);
          let a = VRHTML.MultiplyTransforms(
            e.xfDeviceToAbsoluteTracking,
            this.state.xfTransform,
          );
          i.forEach((e) => {
            let t = VRHTML.ChangeBasis(a, e.pose.xfDeviceToAbsoluteTracking);
            (0, o.Uj)(t.translation) > r.sfMaxDockDist
              ? this.state.bIsOutsideMaxDist ||
                (u.W.Instance.triggerHaptic(o.en.SlidingEdge),
                this.setState({ bIsOutsideMaxDist: !0, destination: s.World }))
              : (this.state.bIsOutsideMaxDist ||
                  (this.props.dockLocation == s.World &&
                    this.state.destination == s.World)) &&
                (u.W.Instance.triggerHaptic(o.en.SlidingEdge),
                this.setState({
                  bIsOutsideMaxDist: !1,
                  destination: e.location,
                }));
          }),
            setTimeout(this.computeDestination, r.sfMovePulseMS);
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
          const e = A(this.m_nMoveDeviceIndex, o.mu.Standing);
          let t, n;
          switch (this.props.dockLocation) {
            case s.LeftHand:
              if (
                VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                  o.kG.TrackedControllerRole_LeftHand,
                ) == o.ne
              )
                return;
              t = A("/user/hand/left", o.mu.Standing);
              break;
            case s.RightHand:
              if (
                VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                  o.kG.TrackedControllerRole_RightHand,
                ) == o.ne
              )
                return;
              t = A("/user/hand/right", o.mu.Standing);
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
              n = "/user/hand/left";
              break;
            case o.kG.TrackedControllerRole_RightHand:
              n = "/user/hand/right";
              break;
            default:
              n = "/user/head";
          }
          let r = VRHTML.MultiplyTransforms(
              t.xfDeviceToAbsoluteTracking,
              this.state.xfTransform,
            ),
            i = VRHTML.ChangeBasis(r, e.xfDeviceToAbsoluteTracking);
          this.setState(
            {
              xfTransform: i,
              sParent: n,
              bIsOutsideMaxDist: this.props.dockLocation == s.World,
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
            this.state.destination == s.LeftHand
          ) {
            if (
              VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                o.kG.TrackedControllerRole_LeftHand,
              ) == o.ne
            )
              return;
            e = A("/user/hand/left", o.mu.Standing);
          }
          if (
            "/user/hand/right" == this.state.sParent ||
            this.state.destination == s.RightHand
          ) {
            if (
              VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                o.kG.TrackedControllerRole_RightHand,
              ) == o.ne
            )
              return;
            t = A("/user/hand/right", o.mu.Standing);
          }
          let n,
            r = {
              xfDeviceToAbsoluteTracking: (0, o.vx)(),
              vVelocity: { x: 0, y: 0, z: 0 },
              eTrackingResult: o.MV.TrackingResult_Running_OK,
              bPoseIsValid: !0,
            };
          switch (this.state.destination) {
            case s.LeftHand:
              n = e;
              break;
            case s.RightHand:
              n = t;
              break;
            default:
              n = r;
          }
          const i = A(this.m_nMoveDeviceIndex, o.mu.Standing);
          let a = VRHTML.MultiplyTransforms(
              i.xfDeviceToAbsoluteTracking,
              this.state.xfTransform,
            ),
            l = VRHTML.ChangeBasis(a, n.xfDeviceToAbsoluteTracking);
          this.setState({
            xfTransform: l,
            sParent: H(this.state.destination),
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
          var e, t, n;
          if ("" == this.props.sOverlayKey || null == this.state.xfTransform)
            return null;
          let a = this.getCurrentOverlaySize();
          if (null === a) return null;
          let l,
            c = !this.props.bDashboardShown,
            u = !1;
          if (this.props.dockLocation == s.Theater) {
            if (this.props.bHasSceneApp && S.H.m_bShowFloor) return null;
            c = !0;
            const t =
              null !==
                (e = m.HR.settings.get(
                  "/settings/dashboard/enableLTCReflections",
                )) &&
              void 0 !== e &&
              e;
            (u = !h.SW.isGroupMode && h.SW.isDarkMode && t),
              h.SW.eTheaterCurvature == i.Curved && (l = E);
          }
          const b = VRHTML.VROverlay.FindOverlay(this.props.sOverlayKey),
            T =
              b &&
              (VRHTML.VROverlay.GetFlag(b, o.NB.EnableControlBarKeyboard) ||
                this.props.sOverlayKey == p.Bn),
            V =
              (null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.BSupportsMultitaskingView()) &&
              this.props.sOverlayKey.startsWith(p.GO),
            H = { x: 0, y: -0.15, z: 0.1 },
            A = (0, o.nX)(p.C6, "Floating-Panel"),
            D = (e) =>
              d.createElement(
                o.dL,
                {
                  parent_id: e.parent_id,
                  translation: { x: e.x_offset, y: e.y_offset, z: 0.01 },
                },
                d.createElement(_.X, {
                  id: e.target_id + ".ResizeHandle",
                  target_id: e.target_id,
                  min_target_scale: p.Ul,
                  max_target_scale: p.mB,
                  displacement: e.displacement,
                  bVisible: !0,
                  scale: e.scale,
                  tint: h.SW.GrabHandleTint,
                }),
              );
          if (c) {
            const e =
                this.props.dockLocation == s.Theater ||
                (null !==
                  (t = m.HR.settings.get(
                    "/settings/dashboard/inputCaptureEnabled",
                  )) &&
                  void 0 !== t &&
                  t),
              i =
                null !==
                  (n = m.HR.settings.get(
                    "/settings/dashboard/theaterModeReflection",
                  )) && void 0 !== n
                  ? n
                  : 0.5,
              c = 0.5 * Math.pow(i, 2.2);
            let _ = -0.1,
              S = 4;
            const b = !0;
            let T = 0.1,
              k = a.width,
              O = a.height,
              L = 0.75;
            return d.createElement(
              w.tH,
              null,
              d.createElement(
                o.dL,
                { parent_path: void 0 },
                d.createElement(
                  o.dL,
                  {
                    transform_path: this.state.sParent,
                    transform: this.state.xfTransform,
                    id: "xf_widget",
                  },
                  d.createElement(
                    o.dL,
                    { translation: { y: L } },
                    d.createElement(
                      g.B,
                      {
                        min_distance: 0.7,
                        should_head_align: !0,
                        lerp_speed: r.flGrabTransformLerpSpeed,
                      },
                      d.createElement(o.dL, { id: E, translation: { z: S } }),
                      d.createElement(
                        o.dL,
                        { translation: { y: -1 * L } },
                        d.createElement(
                          o.dL,
                          { scale: this.getPanelScaleForLocation() },
                          d.createElement(
                            o.Zk,
                            {
                              id: A,
                              overlay_key: this.props.sOverlayKey,
                              height: O,
                              width:
                                h.SW.m_eTheaterStereo != o.MQ.Mono ? k : void 0,
                              interactive: !0,
                              allow_input_capture: e,
                              undocked: !0,
                              origin:
                                this.props.dockLocation == s.Theater
                                  ? { x: 0, y: -0.75 }
                                  : o.Oi.BottomCenter,
                              curvature_origin_id: l,
                              stereoscopy: h.SW.m_eTheaterStereo,
                              scale_index: C(this.props.dockLocation),
                              debug_name: "dashboard-overlay",
                            },
                            d.createElement(o.Ci, {
                              id: "Floating-Panel-BottomLeft",
                              location: o.Oi.BottomLeft,
                            }),
                            d.createElement(o.Ci, {
                              id: "Floating-Panel-BottomRight",
                              location: o.Oi.BottomRight,
                            }),
                            d.createElement(o.Ci, {
                              id: "Floating-Panel-BottomCenter",
                              location: o.Oi.BottomCenter,
                            }),
                            d.createElement(o.Ci, {
                              id: "Floating-Panel-CenterLeft",
                              location: o.Oi.CenterLeft,
                            }),
                            d.createElement(o.Ci, {
                              id: "Floating-Panel-CenterRight",
                              location: o.Oi.CenterRight,
                            }),
                            d.createElement(o.rF, {
                              mountedId: (0, o.nX)(
                                p.cb,
                                this.props.sOverlayKey + ".cursor",
                              ),
                            }),
                          ),
                        ),
                        d.createElement(
                          o.dL,
                          { parent_id: "Floating-Panel-CenterLeft" },
                          d.createElement(o.uC, {
                            name: this.props.sOverlayKey,
                            channel: "front_left",
                          }),
                        ),
                        d.createElement(
                          o.dL,
                          { parent_id: "Floating-Panel-CenterRight" },
                          d.createElement(o.uC, {
                            name: this.props.sOverlayKey,
                            channel: "front_right",
                          }),
                        ),
                        u &&
                          d.createElement(o.lq, {
                            target_id: A,
                            "near-z": _,
                            "far-z": 0.1,
                            specular: { color: { r: c, g: c, b: c } },
                            diffuse: { size: 20, resolution: 512 },
                            debug: !1,
                          }),
                        !1,
                        this.props.dockLocation == s.Theater &&
                          d.createElement(
                            d.Fragment,
                            null,
                            d.createElement(
                              o.Y4,
                              { value: 1 },
                              d.createElement(
                                o.dL,
                                {
                                  parent_id: "Floating-Panel-BottomCenter",
                                  translation: { z: 0.02, y: -0.04 },
                                  ignore_parent_scale: !0,
                                  scale: M(this.props.dockLocation),
                                },
                                b &&
                                  d.createElement(
                                    o.Zk,
                                    {
                                      height: T,
                                      width: void 0,
                                      interactive: !0,
                                      requires_laser: !0,
                                      origin: o.Oi.TopCenter,
                                      curvature_origin_id: l,
                                      debug_name: "theater-control-bar",
                                    },
                                    d.createElement(
                                      "div",
                                      {
                                        className:
                                          "TransparentOverlayControlBar",
                                      },
                                      d.createElement(
                                        "div",
                                        { className: "Section" },
                                        V &&
                                          d.createElement(y.N2, {
                                            key: "multitask",
                                            iconUrl:
                                              "/dashboard/images/icons/icon_multitasking_view.png",
                                            tooltipTranslation: H,
                                            onClick:
                                              this.props.ShowMultitaskingView,
                                            additionalClassNames: "LargeIcon",
                                          }),
                                      ),
                                      d.createElement(
                                        "div",
                                        { className: "Section" },
                                        d.createElement(y.N2, {
                                          icon: d.createElement(R.Xj, null),
                                          title: (0, f.we)(
                                            "#ReturnToDashboard",
                                          ),
                                          key: "dock",
                                          tooltipTranslation: H,
                                          onClick: () => {
                                            this.props.setOverlayDockLocation(
                                              this.props.sOverlayKey,
                                              s.Dashboard,
                                            );
                                          },
                                          additionalClassNames: "LargeIcon",
                                        }),
                                      ),
                                    ),
                                  ),
                                d.createElement(
                                  o.dL,
                                  { translation: { y: -T - 0.1, z: 0.03 } },
                                  d.createElement(v.X, {
                                    scale: 1.5,
                                    tint: h.SW.GrabHandleTint,
                                    curvature_origin_id: l,
                                  }),
                                ),
                              ),
                              d.createElement(D, {
                                parent_id: "Floating-Panel-BottomRight",
                                target_id: A,
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
          const O = a.height,
            L = Math.max(a.width, 0.175),
            B = h.SW.isVRGamepadUI
              ? {
                  r: (14 / 255) * 0.1,
                  g: (20 / 255) * 0.1,
                  b: (27 / 255) * 0.1,
                }
              : { r: 0.016, g: 0.017, b: 0.02 };
          return d.createElement(
            w.tH,
            null,
            d.createElement(
              o.dL,
              {
                parent_path: this.state.sParent,
                transform: this.state.xfTransform,
                id: "xf_widget",
              },
              d.createElement(
                o.dL,
                { scale: this.getPanelScaleForLocation() },
                d.createElement(
                  o.Zk,
                  {
                    id: A,
                    overlay_key: this.props.sOverlayKey,
                    height: a.height,
                    width: void 0,
                    interactive: !0,
                    undocked: !0,
                    origin: o.Oi.BottomCenter,
                    scale_index: C(this.props.dockLocation),
                    debug_name: "control-bar-floating-overlay",
                  },
                  d.createElement(
                    o.dL,
                    {
                      translation: { z: -0.005 },
                      scale: { x: L, y: O, z: 0.008 },
                    },
                    d.createElement(
                      o.N,
                      { color: B },
                      d.createElement(o.aX, { solid: !0, source: "unit_cube" }),
                    ),
                  ),
                  d.createElement(o.Ci, {
                    id: "Floating-Panel-BottomLeft",
                    location: o.Oi.BottomLeft,
                  }),
                  d.createElement(o.Ci, {
                    id: "Floating-Panel-BottomRight",
                    location: o.Oi.BottomRight,
                  }),
                  d.createElement(o.Ci, {
                    id: "Floating-Panel-BottomCenter",
                    location: o.Oi.BottomCenter,
                  }),
                  d.createElement(o.Ci, {
                    id: "Floating-Panel-CenterLeft",
                    location: o.Oi.CenterLeft,
                  }),
                  d.createElement(o.Ci, {
                    id: "Floating-Panel-CenterRight",
                    location: o.Oi.CenterRight,
                  }),
                  d.createElement(o.rF, {
                    mountedId: (0, o.nX)(
                      p.cb,
                      this.props.sOverlayKey + ".cursor",
                    ),
                  }),
                ),
              ),
              d.createElement(
                o.dL,
                { parent_id: "Floating-Panel-CenterLeft" },
                d.createElement(o.uC, {
                  name: this.props.sOverlayKey,
                  channel: "front_left",
                }),
              ),
              d.createElement(
                o.dL,
                { parent_id: "Floating-Panel-CenterRight" },
                d.createElement(o.uC, {
                  name: this.props.sOverlayKey,
                  channel: "front_right",
                }),
              ),
              d.createElement(D, {
                parent_id: "Floating-Panel-BottomRight",
                target_id: A,
                scale:
                  M(this.props.dockLocation) *
                  (k(this.props.dockLocation) ? 1.5 : 1),
                displacement: 0,
                x_offset: k(this.props.dockLocation) ? 0.02 : 0.01,
                y_offset: 0,
              }),
              d.createElement(
                o.dL,
                {
                  parent_id: "Floating-Panel-BottomCenter",
                  translation: { y: -0.01, z: 0 },
                  ignore_parent_scale: !0,
                  scale: M(this.props.dockLocation),
                },
                d.createElement(
                  o.Zk,
                  {
                    height: r.sfOverlayTrayHeight,
                    width: void 0,
                    interactive: !0,
                    origin: o.Oi.TopCenter,
                    debug_name: "control-bar-floating",
                  },
                  d.createElement(
                    "div",
                    { className: "TransparentOverlayControlBar" },
                    d.createElement(
                      "div",
                      { className: "Section" },
                      T &&
                        d.createElement(y.oZ, {
                          overlayKey: this.props.sOverlayKey,
                          showTooltip: !1,
                          additionalClassNames: "LargeIcon",
                        }),
                      V &&
                        d.createElement(y.N2, {
                          key: "multitask",
                          iconUrl:
                            "/dashboard/images/icons/icon_multitasking_view.png",
                          tooltipTranslation: H,
                          onClick: this.props.ShowMultitaskingView,
                          additionalClassNames: "LargeIcon",
                        }),
                    ),
                    d.createElement(
                      "div",
                      { className: "Section" },
                      d.createElement(y.N2, {
                        icon: d.createElement(R.Xj, null),
                        title: (0, f.we)("#ReturnToDashboard"),
                        key: "dock",
                        tooltipTranslation: H,
                        onClick: () => {
                          this.props.setOverlayDockLocation(
                            this.props.sOverlayKey,
                            s.Dashboard,
                          );
                        },
                        additionalClassNames: "LargeIcon",
                      }),
                      d.createElement(y.N2, {
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
                d.createElement(
                  d.Fragment,
                  null,
                  d.createElement(
                    o.dL,
                    {
                      parent_path:
                        this.state.destination == s.LeftHand
                          ? "/user/hand/left"
                          : "/user/hand/right",
                    },
                    d.createElement(o.N1, {
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
      (D.sfMaxDockDist = 0.4),
        (D.sfMovePulseMS = 100),
        (D.sfOverlayTrayHeight = 0.12),
        (D.flGrabTransformLerpSpeed = 0.125),
        (0, a.Cg)([l.o], D.prototype, "computeDestination", null),
        (0, a.Cg)([l.o], D.prototype, "startMove", null),
        (0, a.Cg)([l.o], D.prototype, "endMove", null),
        (D = r = (0, a.Cg)([c.PA], D));
    },
    3350: (e, t, n) => {
      "use strict";
      n.d(t, { E: () => R, R: () => y });
      var r,
        s,
        i = n(1635),
        a = n(6090),
        o = n(3236),
        l = n(1909),
        c = n(7813),
        d = n(4015),
        u = n(6540),
        p = n(5615),
        m = n(3606),
        h = n(3714),
        g = n(1333),
        v = n(2563),
        _ = n(1835),
        S = n(7530),
        b = n(8696);
      let y = (r = class extends u.Component {
        constructor(e) {
          super(e),
            (this.m_mailbox = new a._n()),
            (this.m_refWindowScrollPanel = u.createRef()),
            (this.state = { desktopView: null }),
            this.m_mailbox.Init(r.k_sMailboxName);
        }
        setSiblingReferences(e) {
          this.setState({ desktopView: e });
        }
        onWindowViewCreated(e, t) {
          var n, r;
          null === (n = this.m_refWindowScrollPanel.current) ||
            void 0 === n ||
            n.scrollTo({
              left:
                null === (r = this.m_refWindowScrollPanel.current) ||
                void 0 === r
                  ? void 0
                  : r.scrollWidth,
              behavior: "smooth",
            });
        }
        render() {
          var e, t, n, r;
          if (
            !this.state.desktopView ||
            (null === (e = this.state.desktopView) || void 0 === e
              ? void 0
              : e.isUsingSteamDesktop)
          )
            return null;
          const s =
              this.props.bWindowViewEnabled ||
              (null === (t = this.state.desktopView) || void 0 === t
                ? void 0
                : t.desktopCount) > 1,
            i = { x: 0, y: -0.15, z: 0.1 };
          return u.createElement(
            v.DE,
            Object.assign({}, this.props, {
              additionalClassNames: this.props.bWindowViewEnabled
                ? "DesktopTray FixedWidth"
                : "DesktopTray",
            }),
            s &&
              u.createElement(
                p.M,
                {
                  scrollDirection: p.D.Horizontal,
                  className: "Section Grow",
                  style: { marginRight: 0, marginLeft: "9px" },
                  ref: this.m_refWindowScrollPanel,
                },
                u.createElement(
                  "div",
                  {
                    style: {
                      paddingRight: "16px",
                      display: "flex",
                      flexDirection: "row",
                      margin: 0,
                    },
                  },
                  null === (n = this.state.desktopView) || void 0 === n
                    ? void 0
                    : n.desktopIndices.map((e) => {
                        var t;
                        return u.createElement(v.N2, {
                          additionalClassNames: "ViewButton Fixed",
                          key: e,
                          label: e.toString(),
                          active:
                            (null === (t = this.state.desktopView) ||
                            void 0 === t
                              ? void 0
                              : t.currentDesktopIndex) == e,
                          title: (0, h.we)("#Desktop_X", e),
                          tooltipTranslation: i,
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
                    null === (r = this.state.desktopView) || void 0 === r
                      ? void 0
                      : r.mapWindowInfo.keys(),
                  ).map((e) => {
                    var t, n, r;
                    return u.createElement(v.N2, {
                      additionalClassNames: "ViewButton",
                      iconUrl: "/dashboard/images/icons/svr_desktop_alt.svg",
                      key: e,
                      active:
                        (null === (t = this.state.desktopView) || void 0 === t
                          ? void 0
                          : t.sCurrentWindowOverlayKey) == e,
                      title:
                        null ===
                          (r = this.props.mapWindows.get(
                            null === (n = this.state.desktopView) ||
                              void 0 === n
                              ? void 0
                              : n.mapWindowInfo.get(e).sHwnd,
                          )) || void 0 === r
                          ? void 0
                          : r.title,
                      tooltipTranslation: i,
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
              u.createElement(
                "div",
                { className: "Section", style: { marginRight: 0 } },
                u.createElement(v.N2, {
                  iconUrl: "/dashboard/images/icons/icon_add.png",
                  additionalClassNames: "AddWindow",
                  title: (0, h.we)("#AddView"),
                  tooltipTranslation: i,
                  onClick: this.props.onToggleWindowList,
                  onMouseEnter: this.props.onClearPopoverMenuTimeout,
                  onMouseLeave: () => this.props.onStartPopoverMenuTimeout(500),
                }),
              ),
          );
        }
      });
      (y.k_sMailboxName = "systemui_desktoptray"),
        (y = r = (0, i.Cg)([d.PA], y));
      let R = (s = class extends u.Component {
        constructor(e) {
          super(e),
            (this.m_mailbox = new a._n()),
            (this.m_desktopIndices = []),
            (this.m_sCurrentWindowOverlayKey = ""),
            (this.m_bIsUsingSteamDesktop = !1),
            (this.m_mapWindowInfo = new Map()),
            (this.state = { bIsReady: !1 }),
            this.m_mailbox.Init(s.k_sMailboxName).then(() => {}),
            l.p.SteamVR.SetImplementation(
              "DashboardDesktopWindowClicked",
              (e) => {
                var t, n;
                const r =
                  null !==
                    (n =
                      null === (t = e.window_id) || void 0 === t
                        ? void 0
                        : t.toString()) && void 0 !== n
                    ? n
                    : "";
                for (const [e, t] of this.mapWindowInfo.entries())
                  if (t.sHwnd == r)
                    return (
                      this.onWindowViewChange(e),
                      void VRHTML.VROverlay.ShowDashboard(m.Xk)
                    );
                const s = { type: "request_spawn_window_view", hwnd: r };
                if (!this.m_mailbox.SendMessage("desktopview", s))
                  throw new Error(
                    "Failed to send mailbox message request_spawn_window_view",
                  );
              },
            ),
            (0, c.Gn)(this);
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
            n = [];
          for (
            ;
            null !==
            (null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VROverlay.FindOverlay("system.desktop." + t));
          )
            n.push(t), t++;
          (null !==
            (e = g.HR.settings.get("/settings/dashboard/desktopIndex")) &&
          void 0 !== e
            ? e
            : 1) > n.length &&
            g.HR.SetSettingsValue("/settings/dashboard/desktopIndex", 1),
            (this.m_desktopIndices = n),
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
            n = m.C6 + "::id.panel.desktop." + this.currentDesktopIndex;
          return this.props.visible
            ? this.isUsingSteamDesktop
              ? u.createElement(a.rF, { mountedId: (0, a.nX)(m.cb, m.Bn) })
              : this.state.bIsReady
                ? 0 === this.desktopCount
                  ? u.createElement(
                      v.L_,
                      { visible: !0, summonOverlayKey: m.Xk },
                      u.createElement(
                        "div",
                        { className: "NoDesktopFound" },
                        u.createElement(
                          "h2",
                          null,
                          (0, h.we)("#NoDesktopFound"),
                        ),
                      ),
                    )
                  : u.createElement(
                      u.Fragment,
                      null,
                      u.createElement(
                        a.Zk,
                        {
                          id: n,
                          overlay_key:
                            -1 == this.currentDesktopIndex
                              ? this.m_sCurrentWindowOverlayKey
                              : "system.desktop." + this.currentDesktopIndex,
                          height: s.k_nDesktopPanelBaseHeight,
                          curvature_origin_id: t,
                          interactive: !0,
                          origin: a.Oi.BottomCenter,
                          debug_name: "System Desktop",
                          scale_index: (0, b.HX)(b.$z.Dashboard),
                        },
                        u.createElement(v.OT, { summonOverlayKey: m.Xk }),
                        u.createElement(a.rF, {
                          mountedId:
                            -1 == this.currentDesktopIndex
                              ? (0, a.nX)(
                                  m.cb,
                                  this.m_sCurrentWindowOverlayKey + ".cursor",
                                )
                              : (0, a.nX)(
                                  m.cb,
                                  "system.desktop." +
                                    this.currentDesktopIndex +
                                    ".cursor",
                                ),
                        }),
                      ),
                      u.createElement(
                        (e) =>
                          u.createElement(
                            a.dL,
                            {
                              parent_id: e.parent_id,
                              translation: {
                                x: e.x_offset,
                                y: e.y_offset,
                                z: 0.01,
                              },
                            },
                            u.createElement(S.X, {
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
                          scale: (0, b.xp)(b.$z.Dashboard),
                          target_id: n,
                          displacement: 0,
                          x_offset: 0.03,
                          y_offset: 0,
                        },
                      ),
                    )
                : u.createElement(
                    v.L_,
                    { visible: !0, summonOverlayKey: m.Xk },
                    u.createElement(
                      "div",
                      { className: "NoDesktopFound" },
                      u.createElement(
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
        (0, i.Cg)([c.sH], R.prototype, "m_desktopIndices", void 0),
        (0, i.Cg)([c.sH], R.prototype, "m_sCurrentWindowOverlayKey", void 0),
        (0, i.Cg)([c.sH], R.prototype, "m_bIsUsingSteamDesktop", void 0),
        (0, i.Cg)([c.sH], R.prototype, "m_mapWindowInfo", void 0),
        (0, i.Cg)([c.XI], R.prototype, "componentDidMount", null),
        (0, i.Cg)([c.EW], R.prototype, "desktopCount", null),
        (0, i.Cg)([c.EW], R.prototype, "sCurrentOverlayKey", null),
        (0, i.Cg)([c.EW], R.prototype, "currentDesktopIndex", null),
        (0, i.Cg)([c.EW], R.prototype, "currentWindowHwnd", null),
        (0, i.Cg)([o.o], R.prototype, "onDesktopScaleChange", null),
        (0, i.Cg)([o.o], R.prototype, "onDesktopChange", null),
        (0, i.Cg)([c.XI.bound], R.prototype, "onDesktopViewUpdating", null),
        (0, i.Cg)([o.o], R.prototype, "onDesktopViewReady", null),
        (0, i.Cg)([c.XI.bound], R.prototype, "onWindowViewCreated", null),
        (0, i.Cg)([o.o], R.prototype, "onWindowViewChange", null),
        (0, i.Cg)([o.o], R.prototype, "ShowMultitaskingView", null),
        (R = s = (0, i.Cg)([d.PA], R));
    },
    3712: (e, t, n) => {
      "use strict";
      n.d(t, { X: () => u });
      var r = n(1635),
        s = n(6540),
        i = n(3236),
        a = n(6090),
        o = n(4015),
        l = n(6138),
        c = n(9248),
        d = n(1139);
      let u = class extends s.Component {
        constructor(e) {
          super(e),
            (this.state = {
              xfTransform: this.props.xfTransform
                ? this.props.xfTransform
                : (0, a.vx)(),
              bActive: !1,
            });
        }
        componentDidUpdate(e, t) {
          var n;
          if (e.bVisible != this.props.bVisible) {
            null === (n = this.props.bVisible) ||
              void 0 === n ||
              n ||
              this.endMove();
          }
          e.xfTransform != this.props.xfTransform &&
            this.setState({
              xfTransform: this.props.xfTransform
                ? this.props.xfTransform
                : (0, a.vx)(),
            });
        }
        startMove() {
          let e,
            t = VRHTML.VROverlay.GetPrimaryDashboardDevice();
          if (t != a.ne) {
            switch (VRHTML.VRSystem.GetControllerRoleForTrackedDeviceIndex(t)) {
              case a.kG.TrackedControllerRole_LeftHand:
                e = "/user/hand/left/pose/tip";
                break;
              case a.kG.TrackedControllerRole_RightHand:
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
          const n = null === (e = this.props.bVisible) || void 0 === e || e,
            r = null !== (t = this.props.scale) && void 0 !== t ? t : 1;
          return (
            n &&
            s.createElement(
              a.dL,
              null,
              s.createElement(
                a.Y4,
                { value: this.props.opacity },
                s.createElement(
                  a.N,
                  { color: this.props.tint },
                  s.createElement(
                    a.Zk,
                    {
                      width: 0.66675 * r,
                      interactive: !0,
                      requires_laser: !0,
                      debug_name: "DashboardGrabHandle",
                      origin: a.Oi.BottomCenter,
                      curvature_origin_id: this.props.curvature_origin_id,
                      hide_lasermouse_when_clicking: !0,
                      is_grab_handle: !0,
                    },
                    s.createElement(
                      l.$,
                      {
                        className: "GrabHandleButton",
                        key: "move",
                        onMouseDown: this.startMove,
                        onMouseUp: this.endMove,
                      },
                      s.createElement("div", {
                        className: (0, d.FH)("GrabHandleBar", [
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
      (u.contextType = c.E),
        (0, r.Cg)([i.o], u.prototype, "startMove", null),
        (0, r.Cg)([i.o], u.prototype, "endMove", null),
        (u = (0, r.Cg)([o.PA], u));
    },
    9248: (e, t, n) => {
      "use strict";
      n.d(t, { B: () => l, E: () => o });
      var r = n(1635),
        s = n(6090),
        i = n(4015),
        a = n(6540);
      const o = a.createContext(void 0);
      let l = class extends a.Component {
        constructor(e) {
          super(e), (this.state = { transform: (0, s.vx)(), parent_path: "" });
        }
        render() {
          return a.createElement(
            s.nq,
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
            },
            a.createElement(o.Provider, { value: this }, this.props.children),
          );
        }
      };
      l = (0, r.Cg)([i.PA], l);
    },
    7530: (e, t, n) => {
      "use strict";
      n.d(t, { X: () => d });
      var r = n(1635),
        s = n(6540),
        i = n(3236),
        a = n(4015),
        o = n(6138),
        l = n(1139),
        c = n(6090);
      let d = class extends s.Component {
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
            n = 0.2667 * t;
          return s.createElement(
            c.dL,
            { ignore_parent_scale: !0 },
            s.createElement(
              c.cB,
              {
                id: this.props.id,
                target_id: this.props.target_id,
                is_active: this.state.bActive,
                min_target_scale: this.props.min_target_scale,
                max_target_scale: this.props.max_target_scale,
                displacement: this.props.displacement,
              },
              s.createElement(
                c.Y4,
                { value: this.props.opacity },
                s.createElement(
                  c.N,
                  { color: this.props.tint },
                  s.createElement(
                    c.dL,
                    { translation: { y: n / 2 } },
                    s.createElement(
                      c.Zk,
                      {
                        height: n,
                        interactive: !0,
                        requires_laser: !0,
                        debug_name: "ResizeHandle",
                        hide_lasermouse_when_clicking: !0,
                      },
                      s.createElement(
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
                        s.createElement("div", {
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
          );
        }
      };
      (0, r.Cg)([i.o], d.prototype, "startMove", null),
        (0, r.Cg)([i.o], d.prototype, "endMove", null),
        (d = (0, r.Cg)([a.PA], d));
    },
  },
]); //# sourceMappingURL=file:///c:/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~8012d0c89.js.map
