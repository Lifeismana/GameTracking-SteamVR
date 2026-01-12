var CLSTAMP = "10355840";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [170],
  {
    1184: (e, t, n) => {
      var o,
        r = n(1635),
        i = n(3496),
        a = n(3236);
      !(function (e) {
        (e[(e.Disabled = 0)] = "Disabled"),
          (e[(e.WorldZeroY = 1)] = "WorldZeroY"),
          (e[(e.WorldDynamicFloor = 2)] = "WorldDynamicFloor");
      })(o || (o = {}));
      class s extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "constraint";
        }
        buildNode(e, t) {
          const n = this.createSgNode(t);
          return (
            (n.properties["projection-constraint"] =
              this.props.projection_constraint),
            [e, n]
          );
        }
      }
      (0, r.Cg)([a.o], s.prototype, "buildNode", null);
    },
    4120: (e, t, n) => {
      var o,
        r = n(1635),
        i = n(3496),
        a = n(3236);
      !(function (e) {
        (e[(e.RoomSetupFloor = 1)] = "RoomSetupFloor"),
          (e[(e.Locomotion = 2)] = "Locomotion"),
          (e[(e.QuickRecenter = 4)] = "QuickRecenter");
      })(o || (o = {}));
      class s extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "constructglobals";
        }
        buildNode(e, t) {
          const n = this.createSgNode(t);
          return (
            (n.properties["scene-color-mult"] = (0, i.kJ)(
              this.props["scene-color-mult"],
            )),
            (n.properties["floor-color-mult"] = (0, i.kJ)(
              this.props["floor-color-mult"],
            )),
            (n.properties["scene-reflection-mult"] = (0, i.kJ)(
              this.props["scene-reflection-mult"],
            )),
            (n.properties["skydome-mult"] = (0, i.kJ)(
              this.props["skydome-mult"],
            )),
            (n.properties["roomview-mult"] = (0, i.UM)(
              this.props["roomview-mult"],
            )),
            (n.properties["allowed-action-sets"] = this.props[
              "allowed-action-sets"
            ].reduce((e, t) => e | t, 0)),
            (n.properties["inhibit-bounds-rendering"] =
              this.props["inhibit-bounds-rendering"]),
            (n.properties["pause-notifications"] =
              this.props["pause-notifications"]),
            (n.properties["roomview-enable-override"] =
              this.props["roomview-enable-override"]),
            (n.properties["systemlayer-msaa-enable-override"] =
              this.props["systemlayer-msaa-enable-override"]),
            (n.properties["construct-alpha-override"] =
              this.props["construct-alpha-override"]),
            [e, n]
          );
        }
      }
      (0, r.Cg)([a.o], s.prototype, "buildNode", null);
    },
    10: (e, t, n) => {
      n(6540);
      var o = n(3496);
      o._J;
    },
    8313: (e, t, n) => {
      n.d(t, { Fv: () => o });
      var o,
        r = n(1635),
        i = n(3496),
        a = n(3236);
      class s extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-floorheight-adjust";
        }
        buildNode(e, t) {
          var n, o, r, i, a, s, l, c, d, u, m, p;
          const h = this.createSgNode(t);
          return (
            (h.properties["target-id"] = this.props.target_id),
            (h.properties["interaction-range"] = this.props.interaction_range),
            (h.properties["inactive-alpha-scale"] =
              null === (n = this.props) || void 0 === n
                ? void 0
                : n.inactive_alpha_scale),
            (h.properties["axis-radius"] =
              null === (o = this.props) || void 0 === o
                ? void 0
                : o.axis_radius),
            (h.properties["axis-color-hsv"] =
              null === (r = this.props) || void 0 === r
                ? void 0
                : r.axis_color_hsv),
            (h.properties["dot-radius"] =
              null === (i = this.props) || void 0 === i
                ? void 0
                : i.dot_radius),
            (h.properties["dot-color-hsv"] =
              null === (a = this.props) || void 0 === a
                ? void 0
                : a.dot_color_hsv),
            (h.properties["dot-inner-alpha"] =
              null === (s = this.props) || void 0 === s
                ? void 0
                : s.dot_inner_alpha),
            (h.properties["dot-outer-alpha"] =
              null === (l = this.props) || void 0 === l
                ? void 0
                : l.dot_outer_alpha),
            (h.properties["rings-radius"] =
              null === (c = this.props) || void 0 === c
                ? void 0
                : c.rings_radius),
            (h.properties["rings-color-hsv"] =
              null === (d = this.props) || void 0 === d
                ? void 0
                : d.rings_color_hsv),
            (h.properties["rings-hue-amplitude"] =
              null === (u = this.props) || void 0 === u
                ? void 0
                : u.rings_hue_amplitude),
            (h.properties["rings-hue-speed"] =
              null === (m = this.props) || void 0 === m
                ? void 0
                : m.rings_hue_speed),
            (h.properties["rings-half-width"] =
              null === (p = this.props) || void 0 === p
                ? void 0
                : p.rings_half_width),
            [e, h]
          );
        }
      }
      (0, r.Cg)([a.o], s.prototype, "buildNode", null);
      class l extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-floordetection-geo";
        }
        buildNode(e, t) {
          var n;
          const o = this.createSgNode(t);
          return (
            (o.properties["draw-range"] =
              null === (n = this.props) || void 0 === n
                ? void 0
                : n.draw_range),
            [e, o]
          );
        }
      }
      (0, r.Cg)([a.o], l.prototype, "buildNode", null),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Circle = 1)] = "Circle"),
            (e[(e.Drawn = 2)] = "Drawn"),
            (e[(e.Full = 3)] = "Full");
        })(o || (o = {}));
      class c extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-draw-interaction";
        }
        buildNode(e, t) {
          var n;
          const o = this.createSgNode(t);
          return (
            (o.properties["target-id"] = this.props.target_id),
            (o.properties["interaction-range"] =
              null === (n = this.props) || void 0 === n
                ? void 0
                : n.interaction_range),
            (o.properties["interaction-range-head-relative"] =
              this.props.interaction_range_head_relative),
            [e, o]
          );
        }
      }
      (0, r.Cg)([a.o], c.prototype, "buildNode", null);
      class d extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-circle-perimeter-interaction";
        }
        buildNode(e, t) {
          var n;
          const o = this.createSgNode(t);
          return (
            (o.properties["target-id"] = this.props.target_id),
            (o.properties["radius-range"] =
              null === (n = this.props) || void 0 === n
                ? void 0
                : n.radius_range),
            [e, o]
          );
        }
      }
      (0, r.Cg)([a.o], d.prototype, "buildNode", null);
      class u extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-center";
        }
        buildNode(e, t) {
          var n;
          const o = this.createSgNode(t);
          return (
            (o.properties["set-center"] = this.props.setCenter),
            (o.properties["set-forward"] = this.props.setForward),
            (o.properties["one-shot"] =
              null === (n = this.props) || void 0 === n ? void 0 : n.oneShot),
            [e, o]
          );
        }
      }
      (0, r.Cg)([a.o], u.prototype, "buildNode", null);
      class m extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-outline";
        }
        buildNode(e, t) {
          var n, o, r, i, a, s, l, c, d, u, m;
          const p = this.createSgNode(t);
          return (
            (p.properties["generic-geo"] =
              null === (n = this.props) || void 0 === n
                ? void 0
                : n["generic-geo"]),
            (p.properties["circle-generic-geo"] =
              null === (o = this.props) || void 0 === o
                ? void 0
                : o["circle-generic-geo"]),
            (p.properties["hue-amplitude"] =
              null === (r = this.props) || void 0 === r
                ? void 0
                : r["hue-amplitude"]),
            (p.properties["hue-speed"] =
              null === (i = this.props) || void 0 === i
                ? void 0
                : i["hue-speed"]),
            (p.properties["circle-hue-speed"] =
              null === (a = this.props) || void 0 === a
                ? void 0
                : a["circle-hue-speed"]),
            (p.properties["center-dot-radius"] =
              null === (s = this.props) || void 0 === s
                ? void 0
                : s["center-dot-radius"]),
            (p.properties["center-color-hsv"] =
              null === (l = this.props) || void 0 === l
                ? void 0
                : l["center-color-hsv"]),
            (p.properties["outline-color-hsv"] =
              null === (c = this.props) || void 0 === c
                ? void 0
                : c["outline-color-hsv"]),
            (p.properties["stroke-shadow-radius-delta"] =
              null === (d = this.props) || void 0 === d
                ? void 0
                : d["stroke-shadow-radius-delta"]),
            (p.properties["circle-shadow-radius-delta"] =
              null === (u = this.props) || void 0 === u
                ? void 0
                : u["circle-shadow-radius-delta"]),
            (p.properties["outline-shadow-alpha"] =
              null === (m = this.props) || void 0 === m
                ? void 0
                : m["outline-shadow-alpha"]),
            [e, p]
          );
        }
      }
      (0, r.Cg)([a.o], m.prototype, "buildNode", null);
      class p extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "playspace-dots";
        }
        buildNode(e, t) {
          var n, o, r, i, a, s, l, c, d, u;
          const m = this.createSgNode(t);
          return (
            (m.properties["tile-size"] =
              null === (n = this.props) || void 0 === n
                ? void 0
                : n["tile-size"]),
            (m.properties["max-radius"] =
              null === (o = this.props) || void 0 === o
                ? void 0
                : o["max-radius"]),
            (m.properties["min-radius"] =
              null === (r = this.props) || void 0 === r
                ? void 0
                : r["min-radius"]),
            (m.properties["max-radius-fade"] =
              null === (i = this.props) || void 0 === i
                ? void 0
                : i["max-radius-fade"]),
            (m.properties["min-radius-fade"] =
              null === (a = this.props) || void 0 === a
                ? void 0
                : a["min-radius-fade"]),
            (m.properties["dot-half-size"] =
              null === (s = this.props) || void 0 === s
                ? void 0
                : s["dot-half-size"]),
            (m.properties["center-randomization"] =
              null === (l = this.props) || void 0 === l
                ? void 0
                : l["center-randomization"]),
            (m.properties["color-hsv"] =
              null === (c = this.props) || void 0 === c
                ? void 0
                : c["color-hsv"]),
            (m.properties["clip-to-playspace"] =
              null === (d = this.props) || void 0 === d
                ? void 0
                : d["clip-to-playspace"]),
            (m.properties["follow-head"] =
              null === (u = this.props) || void 0 === u
                ? void 0
                : u["follow-head"]),
            [e, m]
          );
        }
      }
      (0, r.Cg)([a.o], p.prototype, "buildNode", null);
    },
    9011: (e, t, n) => {
      var o = n(1635),
        r = n(3496),
        i = n(3236);
      class a extends r._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "tilefloor";
        }
        buildNode(e, t) {
          var n, o, i, a, s, l, c;
          const d = this.createSgNode(t);
          if (
            ((d.properties["tile-size"] = this.props["tile-size"]),
            (d.properties["tile-gap"] = this.props["tile-gap"]),
            (d.properties["inner-radius"] = this.props["inner-radius"]),
            (d.properties["outer-radius"] = this.props["outer-radius"]),
            (d.properties["fade-distance"] =
              null === (n = this.props) || void 0 === n
                ? void 0
                : n["fade-distance"]),
            (d.properties["min-tile-scale-at-periphery"] =
              this.props["min-tile-scale-at-periphery"]),
            (d.properties.height = (0, r.kJ)(this.props.height)),
            (d.properties.offset = [
              null === (o = this.props.offset) || void 0 === o ? void 0 : o.x,
              null === (i = this.props.offset) || void 0 === i ? void 0 : i.y,
            ]),
            "string" == typeof this.props.color)
          )
            d.properties.color = this.props.color;
          else if (this.props.color) {
            let e = (0, r.RH)(this.props.color, { r: 0, g: 0, b: 0 });
            d.properties.color = [e.r, e.g, e.b];
          }
          return (
            (d.properties["center-randomization"] =
              null == this ? void 0 : this.props["center-randomization"]),
            this.props["luma-randomization"] &&
              ((d.properties["luma-randomization-min-gain"] =
                this.props["luma-randomization"]["min-gain"]),
              (d.properties["luma-randomization-max-gain"] =
                this.props["luma-randomization"]["max-gain"])),
            this.props["reflection-randomization"] &&
              ((d.properties["reflection-randomization-min-gain"] =
                this.props["reflection-randomization"]["min-gain"]),
              (d.properties["reflection-randomization-max-gain"] =
                this.props["reflection-randomization"]["max-gain"])),
            (d.properties["normal-randomization-degrees"] =
              null === (a = this.props) || void 0 === a
                ? void 0
                : a["normal-randomization-degrees"]),
            this.props.chevron &&
              ((d.properties["chevron-luma-scale"] =
                this.props.chevron["luma-scale"]),
              (d.properties["chevron-reflection-scale"] =
                this.props.chevron["reflection-scale"])),
            (d.properties["auto-subdivide"] =
              null === (s = this.props) || void 0 === s
                ? void 0
                : s["auto-subdivide"]),
            (d.properties["pedestal-height"] = (0, r.kJ)(
              this.props["pedestal-height"],
            )),
            (d.properties["pedestal-radius"] = (0, r.kJ)(
              this.props["pedestal-radius"],
            )),
            (d.properties["floor-aa-shader"] =
              null === (l = this.props) || void 0 === l
                ? void 0
                : l["floor-aa-shader"]),
            (d.properties["stable-fade"] =
              null === (c = this.props) || void 0 === c
                ? void 0
                : c["stable-fade"]),
            [e, d]
          );
        }
      }
      (0, o.Cg)([i.o], a.prototype, "buildNode", null);
    },
    111: (e, t, n) => {
      n(6540);
      var o = n(3496);
      o._J;
    },
    7727: (e, t, n) => {
      n.d(t, { N: () => i, t: () => r });
      var o = n(6540);
      const r = o.createContext({ frame: void 0, page: void 0 });
      function i() {
        return o.useContext(r);
      }
    },
    9448: (e, t, n) => {
      n.d(t, { U0: () => C, dm: () => H, jF: () => v, o3: () => d });
      var o = n(296),
        r = n(6540),
        i = n(7727),
        a = n(1139),
        s = n(3714),
        l = n(8627);
      const c = r.createContext({
        CreateControlsItemID: void 0,
        OnControlsItemRender: void 0,
        OnControlsItemMounted: void 0,
        OnControlsItemUnmounted: void 0,
      });
      function d(e) {
        const { frame: t } = (0, i.N)();
        if (!t)
          throw new Error(
            "<FrameControls> must be inside a <Frame> component.",
          );
        const n = r.useRef(1),
          o = r.useRef([]),
          s = r.useRef([]),
          l = r.useMemo(() => new Map(), []),
          d = r.useRef(!1),
          u = r.useRef(!0),
          m = r.useCallback(() => {
            const e = o.current.map((e) => l.get(e)),
              n = s.current.map((e) => l.get(e));
            t.SetControlsItems(e, n);
          }, []);
        r.useEffect(() => () => t.SetControlsItems([], []), []),
          d.current &&
            ((d.current = !1),
            (u.current = !0),
            (o.current = []),
            (s.current = []));
        const p = (0, a.CH)();
        r.useEffect(() => {
          !u.current ||
            (0 == o.current.length && 0 == s.current.length) ||
            (m(), (u.current = !1));
        });
        const h = {
          CreateControlsItemID: () => n.current++,
          OnControlsItemRender: (e, t, n) => {
            l.set(e, t);
            const i = r.useRef(!1);
            u.current
              ? (n.bVisibleInBottomFrameControls && o.current.push(e),
                n.bVisibleInTabMenu && s.current.push(e),
                (i.current = !1))
              : (i.current = !0),
              r.useLayoutEffect(() => {
                i.current && (m(), (i.current = !1));
              });
          },
          OnControlsItemMounted: () => {
            (d.current = !0), p();
          },
          OnControlsItemUnmounted: (e) => {
            l.delete(e),
              (o.current = o.current.filter((t) => t != e)),
              (s.current = s.current.filter((t) => t != e)),
              m();
          },
        };
        return r.createElement(c.Provider, { value: h }, e.children);
      }
      const u = r.createContext({
        bVisibleInBottomFrameControls: !0,
        bVisibleInTabMenu: !1,
      });
      function m(e) {
        const { onlyVisibleIn: t, children: n } = e,
          o = {
            bVisibleInBottomFrameControls:
              "both" == t || "bottom-frame-controls" == t,
            bVisibleInTabMenu: "both" == t || "tab-hover-menu" == t,
          };
        return r.createElement(u.Provider, { value: o }, n);
      }
      function p(e) {
        const { params: t } = e,
          n = r.useContext(c);
        if (!n)
          throw new Error(
            "<FrameControlsItem> must be inside a <Frame> component.",
          );
        const i = r.useContext(u),
          a = r.useMemo(() => n.CreateControlsItemID(), []);
        r.useEffect(
          () => (n.OnControlsItemMounted(), () => n.OnControlsItemUnmounted(a)),
          [a],
        );
        const s = (0, o.q3)(() => ("function" == typeof t ? t() : t));
        return n.OnControlsItemRender(a, s, i), null;
      }
      function h(e) {
        const { actionParams: t } = e,
          { frame: n } = (0, i.N)();
        if (!n)
          throw new Error(
            "<FrameControlsItem_Action> must be inside a <Frame>.",
          );
        const o = r.useRef(void 0);
        o.current = e.onInvoked;
        const a = r.useMemo(
          () =>
            null == n
              ? void 0
              : n.CreateAction(t, (...e) => {
                  var t;
                  return null === (t = o.current) || void 0 === t
                    ? void 0
                    : t.call(o, ...e);
                }),
          [],
        );
        return (
          r.useLayoutEffect(() => (null == a ? void 0 : a.SetParams(t))),
          r.useEffect(() => () => (null == a ? void 0 : a.Destroy()), [a]),
          r.createElement(p, { params: { type: 2, action_id: a.actionID } })
        );
      }
      function v(e) {
        return r.createElement(p, { params: { type: 1 } });
      }
      function C(e) {
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(v, null),
          r.createElement(_, { controller: "left" }),
          r.createElement(_, { controller: "right" }),
          r.createElement(v, null),
          r.createElement(f, null),
          r.createElement(V, null),
          r.createElement(g, null),
          r.createElement(v, null),
          !1,
          r.createElement(v, null),
          r.createElement(b, null),
          r.createElement(v, null),
        );
      }
      function f(e) {
        const { frame: t } = (0, i.N)();
        if (!(0, o.q3)(() => t.docking.dockLocation == l.yW.Dashboard))
          return null;
        return r.createElement(h, {
          actionParams: {
            display_name: (0, s.we)("#FloatInWorld"),
            icon: { enum: 26 },
            invocation: 1,
          },
          onInvoked: () => {
            t.docking.SetDockLocation(l.yW.World);
          },
        });
      }
      function g(e) {
        const { frame: t } = (0, i.N)();
        if (
          !(0, o.q3)(
            () =>
              t.docking.dockLocation != l.yW.Theater &&
              t.docking.dockLocation != l.yW.Boot,
          )
        )
          return null;
        return r.createElement(h, {
          actionParams: {
            display_name: (0, s.we)("#ViewInTheater"),
            icon: { enum: 28 },
            invocation: 1,
          },
          onInvoked: () => {
            t.docking.SetInTheater(!1);
          },
        });
      }
      function _(e) {
        const { controller: t } = e,
          { frame: n } = (0, i.N)(),
          a = "left" == t ? l.yW.LeftHand : l.yW.RightHand,
          c = (0, o.q3)(
            () =>
              n.docking.dockLocation == l.yW.Dashboard ||
              n.docking.dockLocation == l.yW.LeftHand ||
              n.docking.dockLocation == l.yW.RightHand ||
              n.docking.dockLocation == l.yW.World,
          ),
          d = (0, o.q3)(() => n.docking.dockLocation != a);
        if (!c) return null;
        return r.createElement(h, {
          actionParams: {
            display_name:
              "left" == t
                ? (0, s.we)("#DockOnLeftController")
                : (0, s.we)("#DockOnRightController"),
            icon: { enum: "left" == t ? 29 : 30 },
            invocation: 1,
            enabled: d,
          },
          onInvoked: () => {
            n.docking.SetDockLocation(a);
          },
        });
      }
      function V(e) {
        const { frame: t } = (0, i.N)();
        if (!(0, o.q3)(() => t.docking.dockLocation != l.yW.Dashboard))
          return null;
        return r.createElement(
          m,
          { onlyVisibleIn: "both" },
          r.createElement(h, {
            actionParams: {
              display_name: (0, s.we)("#ReturnToDashboard"),
              icon: { enum: 27 },
              invocation: 1,
            },
            onInvoked: () => {
              t.docking.SetDockLocation(l.yW.Dashboard);
            },
          }),
        );
      }
      function b(e) {
        const { frame: t } = (0, i.N)(),
          n = (0, o.q3)(() => t.canRequestClose),
          a = (0, o.q3)(() => t.closeButtonLabel),
          s = (0, o.q3)(() => t.closeButtonIcon),
          l = r.useCallback(() => {
            t.RequestClose();
          }, []);
        return n
          ? r.createElement(
              m,
              { onlyVisibleIn: "both" },
              r.createElement(h, {
                actionParams: {
                  display_name: a,
                  icon: { enum: s },
                  invocation: 1,
                },
                onInvoked: l,
              }),
            )
          : null;
      }
      function H(e) {
        const { frame: t } = (0, i.N)(),
          n = (0, o.q3)(() => t.activePage),
          a = (0, o.q3)(() => {
            var e;
            return (
              null !==
                (e = null == n ? void 0 : n.keyboard.isKeyboardVisible) &&
              void 0 !== e &&
              e
            );
          }),
          l = r.useRef(void 0);
        r.useEffect(() => {
          l.current = new Date();
        }, [a]);
        const c = (0, o.q3)(() =>
            t.pages.some((e) => e.keyboard.showKeyboardButtonInFrameControls),
          ),
          d = (0, o.q3)(() => {
            var e;
            return (
              a ||
              (null === (e = t.activePage) || void 0 === e
                ? void 0
                : e.keyboard.showKeyboardButtonInFrameControls)
            );
          });
        return c
          ? r.createElement(h, {
              actionParams: {
                display_name: a
                  ? (0, s.we)("#HideKeyboardTooltip")
                  : (0, s.we)("#ShowKeyboardTooltip"),
                enabled: d,
                active: a,
                icon: { enum: 23 },
                icon_active: { enum: 24 },
                invocation: 2,
              },
              onInvoked: (e) => {
                var t, o;
                new Date().getTime() - l.current.getTime() < 100 ||
                  (e
                    ? null === (t = null == n ? void 0 : n.keyboard) ||
                      void 0 === t ||
                      t.ShowKeyboard()
                    : null === (o = null == n ? void 0 : n.keyboard) ||
                      void 0 === o ||
                      o.HideKeyboard());
              },
            })
          : null;
      }
    },
    5323: (e, t, n) => {
      n.d(t, {
        QI: () => u,
        RG: () => v,
        U0: () => m,
        Vu: () => p,
        WF: () => h,
        xE: () => c,
      });
      var o = n(296),
        r = n(6540),
        i = n(3606),
        a = (n(4007), n(7727)),
        s = n(1139);
      const l = r.createContext({
        CreateMenuItemID: void 0,
        OnMenuItemRender: void 0,
        OnMenuItemMounted: void 0,
        OnMenuItemUnmounted: void 0,
      });
      function c(e) {
        const { frame: t } = (0, a.N)();
        if (!t)
          throw new Error("<FrameMenu> must be inside a <Frame> component.");
        const n = r.useRef(1),
          o = r.useRef([]),
          i = r.useRef([]),
          c = r.useMemo(() => new Map(), []),
          d = r.useRef(!1),
          u = r.useRef(!0),
          m = r.useCallback(() => {
            const e = o.current.map((e) => c.get(e)),
              n = i.current.map((e) => c.get(e));
            t.SetMenuItems(e, n);
          }, []);
        r.useEffect(() => () => t.SetMenuItems([], []), []),
          d.current &&
            ((d.current = !1),
            (u.current = !0),
            (o.current = []),
            (i.current = []));
        const p = (0, s.CH)();
        r.useEffect(() => {
          !u.current ||
            (0 == o.current.length && 0 == i.current.length) ||
            (m(), (u.current = !1));
        });
        const h = {
          CreateMenuItemID: () => n.current++,
          OnMenuItemRender: (e, t, n) => {
            c.set(e, t);
            const a = r.useRef(!1);
            u.current
              ? (n.bVisibleInFrameMenu && o.current.push(e),
                n.bVisibleInTabMenu && i.current.push(e),
                (a.current = !1))
              : (a.current = !0),
              r.useLayoutEffect(() => {
                a.current && (m(), (a.current = !1));
              });
          },
          OnMenuItemMounted: () => {
            (d.current = !0), p();
          },
          OnMenuItemUnmounted: (e) => {
            c.delete(e),
              (o.current = o.current.filter((t) => t != e)),
              (i.current = i.current.filter((t) => t != e)),
              m();
          },
        };
        return r.createElement(l.Provider, { value: h }, e.children);
      }
      const d = r.createContext({
        bVisibleInFrameMenu: !0,
        bVisibleInTabMenu: !0,
      });
      function u(e) {
        const { onlyVisibleIn: t, children: n } = e,
          o = {
            bVisibleInFrameMenu: "both" == t || "left-frame-menu" == t,
            bVisibleInTabMenu: "both" == t || "tab-hover-menu" == t,
          };
        return r.createElement(d.Provider, { value: o }, n);
      }
      function m(e) {
        const { params: t } = e,
          n = r.useContext(l);
        if (!n)
          throw new Error(
            "<FrameMenuItem> must be inside a <Frame> component.",
          );
        const i = r.useContext(d),
          a = r.useMemo(() => n.CreateMenuItemID(), []);
        r.useEffect(
          () => (n.OnMenuItemMounted(), () => n.OnMenuItemUnmounted(a)),
          [a],
        );
        const s = (0, o.q3)(() => ("function" == typeof t ? t() : t));
        return n.OnMenuItemRender(a, s, i), null;
      }
      function p(e) {
        const { actionParams: t } = e,
          { frame: n } = (0, a.N)();
        if (!n)
          throw new Error("<FrameMenuItem_Action> must be inside a <Frame>.");
        const o = r.useRef(void 0);
        o.current = e.onInvoked;
        const i = r.useMemo(
          () =>
            null == n
              ? void 0
              : n.CreateAction(t, (...e) => {
                  var t;
                  return null === (t = o.current) || void 0 === t
                    ? void 0
                    : t.call(o, ...e);
                }),
          [],
        );
        return (
          r.useLayoutEffect(() => (null == i ? void 0 : i.SetParams(t))),
          r.useEffect(() => () => (null == i ? void 0 : i.Destroy()), [i]),
          r.createElement(m, { params: { type: 3, action_id: i.actionID } })
        );
      }
      function h(e) {
        return r.createElement(m, { params: { type: 2 } });
      }
      function v(e) {
        const { frame: t } = (0, a.N)(),
          n = (0, o.q3)(() => {
            var e;
            return (
              (null == t ? void 0 : t.isActiveDashboardFrame) &&
              (null === (e = null == t ? void 0 : t.activePage) || void 0 === e
                ? void 0
                : e.summonOverlayKey) == i.wi
            );
          });
        return r.createElement(m, {
          params: () => ({
            type: 4,
            steam_main_menu_options: { allow_show_as_active: n },
          }),
        });
      }
    },
    3481: (e, t, n) => {
      n.d(t, { JJ: () => f, Sq: () => v });
      var o = n(1635),
        r = n(7813),
        i = n(3236),
        a = n(1835),
        s = n(1909),
        l = n(1295),
        c = n(8047),
        d = n(2929),
        u = n(776),
        m = n(8627);
      const p = new u.wd("FrameStore");
      var h, v;
      !(function (e) {
        (e[(e.Disconnected = 0)] = "Disconnected"),
          (e[(e.Pending = 1)] = "Pending"),
          (e[(e.Connected = 2)] = "Connected");
      })(h || (h = {}));
      class C {
        get canTryConnectingToSteam() {
          return a.SW.isVRGamepadUIReady && l.H.BHasMutualCapability(16);
        }
        get steamConnectionState() {
          return this.m_eSteamConnectionState;
        }
        get supportedFrameFeatures() {
          const e = this.steamConnectionState == h.Connected;
          return {
            steamHelpsRenderFrame: e,
            steamRendersFrameControls: e && !1,
          };
        }
        constructor() {
          (this.m_unNextFrameID = d.A),
            (this.m_unNextTabID = v.BaseIncrementingIDOffset),
            (this.m_mapLastSentFrameUpdate = new Map()),
            (this.m_mapLastSentFrameVisibility = new Map()),
            (this.m_mapFrames = new Map()),
            (this.m_eSteamConnectionState = h.Disconnected),
            (this.m_initCallHandle = void 0),
            (this.m_mapFrameDockLocations = new Map()),
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
                () => this.frames.filter((e) => e.state == c.Iu.Destroyed),
                this.OnFramesDestroyed,
              ),
              (0, r.autorun)(this.SendUpdatesToSteam, { delay: 1e-4 });
          });
        }
        InitSteamConnection() {
          this.m_eSteamConnectionState == h.Disconnected
            ? ((this.m_eSteamConnectionState = h.Pending),
              this.m_mapLastSentFrameUpdate.clear(),
              this.m_mapLastSentFrameVisibility.clear(),
              p.Info("InitSteamConnection - Calling Steam.InitFrameSystem..."),
              (this.m_initCallHandle = s.p.Steam.InitFrameSystem(
                {},
                { nMaxTimeoutRetries: "infinite" },
              )),
              this.m_initCallHandle
                .then(() => {
                  p.Info(
                    "InitSteamConnection call to Steam.InitFrameSystem succeeded.",
                  ),
                    (this.m_eSteamConnectionState = h.Connected);
                })
                .catch((e) => {
                  8 == e.info.error_code
                    ? p.Info(
                        "InitSteamConnection call to Steam.InitFrameSystem cancelled.",
                      )
                    : p.Error(
                        "InitSteamConnection call to Steam.InitFrameSystem failed:",
                        e,
                      ),
                    (this.m_eSteamConnectionState = h.Disconnected),
                    (this.m_initCallHandle = void 0),
                    this.CleanupSteamConnection();
                }))
            : p.Info(
                "InitSteamConnection - State is already",
                h[this.m_eSteamConnectionState],
              );
        }
        CleanupSteamConnection() {
          (this.m_eSteamConnectionState = h.Disconnected),
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
            n = new Set(t.map((e) => e.frame_id)),
            o = t.filter(
              (e) => this.m_mapLastSentFrameUpdate.get(e.frame_id) !== e,
            ),
            i = Array.from(this.m_mapLastSentFrameUpdate.keys()).filter(
              (e) => !n.has(e),
            );
          for (const e of o) this.m_mapLastSentFrameUpdate.set(e.frame_id, e);
          for (const e of i) this.m_mapLastSentFrameUpdate.delete(e);
          const a = [];
          for (const t of this.frames)
            t.isCurrentlyVisible !=
              (null !==
                (e = this.m_mapLastSentFrameVisibility.get(t.frameID)) &&
                void 0 !== e &&
                e) &&
              (a.push(t),
              this.m_mapLastSentFrameVisibility.set(
                t.frameID,
                t.isCurrentlyVisible,
              ));
          const l = {
            updated_frames: o,
            deleted_frames: i,
            shown_frames: a
              .filter((e) => e.isCurrentlyVisible)
              .map((e) => e.frameID),
            hidden_frames: a
              .filter((e) => !e.isCurrentlyVisible)
              .map((e) => e.frameID),
          };
          s.p.Steam.UpdateFrameUIs(l, { nTimeoutMS: 6e4 }).then(
            (0, r.action)((e) => {
              var t, n;
              for (const o of null !== (t = e.results) && void 0 !== t ? t : [])
                null === (n = this.GetFrame(o.frame_id)) ||
                  void 0 === n ||
                  n.OnFrameUpdateResultFromSteam(o);
            }),
          );
        }
        OnFramesDestroyed(e) {
          e.forEach((e) => {
            this.m_mapFrames.delete(e.frameID);
          });
        }
        CreateFrame() {
          const e = new c.HC(this.m_unNextFrameID++, this.m_unNextTabID++);
          return (
            (0, r.when)(
              () => e.state != c.Iu.Uninitialized && e.state != c.Iu.Destroyed,
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
          return this.frames.filter(
            (t) => e && t.associatedSummonOverlayKeys.includes(e),
          );
        }
        GetFrameWithTabId(e) {
          if (null != e)
            return this.frames.find((t) => {
              var n;
              return (
                (null === (n = t.tab) || void 0 === n ? void 0 : n.tab_id) === e
              );
            });
        }
        HasFramesWithAssociatedSummonKeys(e) {
          return this.GetFramesWithAssociatedSummonKeys(e).length > 0;
        }
        RegisterFrameDockLocation(e, t, n) {
          const o = this.DockLocationMapKey(e, n);
          return (
            this.m_mapFrameDockLocations.set(o, t),
            {
              Unregister: () => {
                this.m_mapFrameDockLocations.get(o) === t &&
                  this.m_mapFrameDockLocations.delete(o);
              },
            }
          );
        }
        GetDockLocationTransformID(e, t) {
          const n = this.DockLocationMapKey(e, t);
          return this.m_mapFrameDockLocations.get(n);
        }
        DockLocationMapKey(e, t) {
          return e === m.yW.World
            ? (p.Assert(null != t), `${m.yW[e]}:${null != t ? t : 0}`)
            : `${m.yW[e]}`;
        }
        get framePreviewingDashboardDockSnap() {
          return this.frames.find(
            (e) => e.docking.m_ePreviewingDockLocation == m.yW.Dashboard,
          );
        }
      }
      (0, o.Cg)([r.observable], C.prototype, "m_mapFrames", void 0),
        (0, o.Cg)(
          [r.observable],
          C.prototype,
          "m_eSteamConnectionState",
          void 0,
        ),
        (0, o.Cg)([r.computed], C.prototype, "canTryConnectingToSteam", null),
        (0, o.Cg)([r.computed], C.prototype, "steamConnectionState", null),
        (0, o.Cg)([r.computed], C.prototype, "supportedFrameFeatures", null),
        (0, o.Cg)([r.action.bound], C.prototype, "InitSteamConnection", null),
        (0, o.Cg)(
          [r.action.bound],
          C.prototype,
          "CleanupSteamConnection",
          null,
        ),
        (0, o.Cg)([i.o], C.prototype, "SendUpdatesToSteam", null),
        (0, o.Cg)([r.action.bound], C.prototype, "OnFramesDestroyed", null),
        (0, o.Cg)([r.action], C.prototype, "CreateFrame", null),
        (0, o.Cg)([r.computed], C.prototype, "frames", null),
        (0, o.Cg)([i.o], C.prototype, "GetFrame", null),
        (0, o.Cg)(
          [i.o],
          C.prototype,
          "GetFramesWithAssociatedSummonKeys",
          null,
        ),
        (0, o.Cg)([i.o], C.prototype, "GetFrameWithTabId", null),
        (0, o.Cg)(
          [i.o],
          C.prototype,
          "HasFramesWithAssociatedSummonKeys",
          null,
        ),
        (0, o.Cg)(
          [r.observable],
          C.prototype,
          "m_mapFrameDockLocations",
          void 0,
        ),
        (0, o.Cg)([r.action], C.prototype, "RegisterFrameDockLocation", null),
        (0, o.Cg)(
          [r.computed],
          C.prototype,
          "framePreviewingDashboardDockSnap",
          null,
        ),
        (function (e) {
          (e[(e.LegacyFloatingSteamMainMenu_VRSettings = d.A + 1)] =
            "LegacyFloatingSteamMainMenu_VRSettings"),
            (e[
              (e.BaseIncrementingIDOffset =
                e.LegacyFloatingSteamMainMenu_VRSettings + 1)
            ] = "BaseIncrementingIDOffset");
        })(v || (v = {}));
      const f = new C();
      window.FrameStore = f;
    },
    4574: (e, t, n) => {
      n.d(t, { BO: () => w, Do: () => r });
      var o,
        r,
        i = n(1635),
        a = n(6090),
        s = n(3236),
        l = n(1370),
        c = n(6540),
        d = n(6189),
        u = n(3606),
        m = n(1333),
        p = n(1835),
        h = n(9248),
        v = n(3712),
        C = n(7530),
        f = n(3696),
        g = n(7600),
        _ = n(795),
        V = n(8627),
        b = n(7813),
        H = n(6539),
        L = n(9728);
      function y(e) {
        switch (e) {
          case V.yW.LeftHand:
            return "/user/hand/left";
          case V.yW.RightHand:
            return "/user/hand/right";
          default:
            return "";
        }
      }
      function M(e, t) {
        try {
          return null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.GetPose(e, t);
        } catch (e) {
          return;
        }
      }
      !(function (e) {
        (e[(e.Curved = 0)] = "Curved"), (e[(e.Flat = 1)] = "Flat");
      })(r || (r = {}));
      let w = (o = class extends c.Component {
        constructor(e) {
          super(e),
            (this.m_NudgeReactionHandle = void 0),
            (this.m_DockLocationReactionHandle = void 0),
            (this.m_nDragSnapTimeoutHandle = void 0),
            (this.m_xfDashboardSnapTransform = void 0),
            (this.m_sDragSnapLineOriginID = "xf" + Math.random().toString()),
            (this.state = {
              xfTransform: null,
              sParentDevice: y(this.props.frame.docking.dockLocation),
              dragSnapPreview: {
                location: this.props.frame.docking.dockLocation,
              },
              dragCanSnapToDashboard: !1,
              bIsMoving: !1,
              bIsResizing: !1,
            }),
            (this.m_nMoveDeviceIndex = a.ne),
            (this.m_moveDeviceRole = a.kG.TrackedControllerRole_Invalid);
        }
        componentDidMount() {
          const e = this.props.frame;
          (this.m_NudgeReactionHandle = (0, b.reaction)(
            () =>
              e.docking.m_bJustFloatedFromDashboard &&
              !e.isActiveDashboardFrame,
            () => {
              const t = (0, a.q5)(this.state.xfTransform.rotation, {
                x: 0,
                y: 0.06,
                z: -0.06,
              });
              this.setState({
                xfTransform: Object.assign(
                  Object.assign({}, this.state.xfTransform),
                  {
                    translation: (0, a.CU)(
                      this.state.xfTransform.translation,
                      t,
                    ),
                  },
                ),
              }),
                (e.docking.m_bJustFloatedFromDashboard = !1);
            },
          )),
            (this.m_DockLocationReactionHandle = (0, b.reaction)(
              () => e.docking.dockLocation,
              (e, t) => {
                this.setState(
                  {
                    sParentDevice: y(e),
                    xfTransform: null,
                    dragSnapPreview: { location: e },
                  },
                  () => this.setInitialTransformForLocation(t),
                );
              },
            )),
            this.setInitialTransformForLocation(void 0);
        }
        componentWillUnmount() {
          var e, t;
          null === (e = this.m_NudgeReactionHandle) ||
            void 0 === e ||
            e.call(this),
            null === (t = this.m_DockLocationReactionHandle) ||
              void 0 === t ||
              t.call(this),
            window.clearTimeout(this.m_nDragSnapTimeoutHandle);
        }
        getCurrentOverlaySize() {
          var e, t;
          const n =
            null ===
              (t =
                null === (e = this.props.frame) || void 0 === e
                  ? void 0
                  : e.activePage) || void 0 === t
              ? void 0
              : t.size.latestContentSize;
          return n || { unWidth: 0, unHeight: 0 };
        }
        setInitialTransformForTheater() {
          const e = 0.25;
          switch (p.SW.currentTheaterScreenAlignment) {
            case p.tb.PlayArea: {
              let t = (0, a.vx)();
              (t.translation.y = e),
                (t.translation.z = -3.3),
                this.setState({ xfTransform: t });
              break;
            }
            case p.tb.Dashboard: {
              const t = 2;
              a.Cw.getInstance()
                .requestSGTransform(
                  (0, a.nX)(
                    u.C6,
                    _.JJ.GetDockLocationTransformID(V.yW.Dashboard),
                  ),
                  t,
                )
                .then((t) => {
                  let n = (0, a.vx)();
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
                    const e = M("/user/head", a.mu.Standing);
                    if (
                      e &&
                      (null == e ? void 0 : e.bPoseIsValid) &&
                      (null == e ? void 0 : e.xfDeviceToAbsoluteTracking)
                    ) {
                      const t = 3,
                        n = -0.75,
                        o = (0, a.p0)(e.xfDeviceToAbsoluteTracking);
                      let r = (0, a.o_)(o);
                      r.y = 0;
                      let i = (0, a.tx)((0, a.e_)(r), t);
                      i.y += n;
                      let s = (0, a.vx)();
                      return (
                        (s.rotation = o.rotation),
                        (s.translation = (0, a.CU)(i, o.translation)),
                        s
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
        setInitialTransformForLocation(e) {
          var t;
          const n =
            null === (t = this.props.frame) || void 0 === t
              ? void 0
              : t.docking.m_mapLastRelativeTransformForDockLocation.get(
                  this.props.frame.docking.dockLocation,
                );
          let o =
            n &&
            (this.props.frame.docking.dockLocation == V.yW.LeftHand ||
              this.props.frame.docking.dockLocation == V.yW.RightHand);
          if (
            (this.props.frame.docking.dockLocation != V.yW.World ||
              (e != V.yW.LeftHand && e != V.yW.RightHand) ||
              (o = !0),
            o)
          )
            this.setState({ xfTransform: n });
          else
            switch (this.props.frame.docking.dockLocation) {
              case V.yW.Dashboard: {
                let e = (0, a.vx)();
                (e.rotation = (0, a.Fb)({ x: -45, y: 0, z: 0 })),
                  this.setState({ xfTransform: e });
                break;
              }
              case V.yW.LeftHand:
              case V.yW.RightHand: {
                let e = (0, a.vx)();
                (e.rotation = (0, a.Fb)({ x: 200, y: 0, z: 0 })),
                  (e.translation.z = -0.03),
                  (e.translation.y = 0.01),
                  this.setState({ xfTransform: e });
                break;
              }
              case V.yW.World:
                a.Cw.getInstance()
                  .requestSGTransform(
                    (0, a.nX)(
                      u.C6,
                      _.JJ.GetDockLocationTransformID(V.yW.Dashboard),
                    ),
                    0,
                  )
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
              case V.yW.Theater:
                this.setInitialTransformForTheater();
            }
        }
        requestDashboardSnapTransform() {
          a.Cw.getInstance()
            .requestSGTransform(
              (0, a.nX)(u.C6, _.JJ.GetDockLocationTransformID(V.yW.Dashboard)),
              0,
            )
            .then((e) => (this.m_xfDashboardSnapTransform = e))
            .catch((e) => {});
        }
        computeDragSnapDestination() {
          var e;
          if (!this.state.bIsMoving || null === this.state.xfTransform) return;
          const t = M(this.m_nMoveDeviceIndex, a.mu.Standing),
            n = null == t ? void 0 : t.xfDeviceToAbsoluteTracking;
          let r = null;
          VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
            a.kG.TrackedControllerRole_LeftHand,
          ) != a.ne && (r = M("/user/hand/left", a.mu.Standing));
          let i = null;
          VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
            a.kG.TrackedControllerRole_RightHand,
          ) != a.ne && (i = M("/user/hand/right", a.mu.Standing));
          const s = [];
          if (
            (this.m_xfDashboardSnapTransform &&
              p.SW.m_bDashboardVisible &&
              s.push({
                xf: this.m_xfDashboardSnapTransform,
                location: V.yW.Dashboard,
              }),
            r &&
              "/user/hand/left" != this.state.sParentDevice &&
              s.push({
                xf: r.xfDeviceToAbsoluteTracking,
                location: V.yW.LeftHand,
              }),
            i &&
              "/user/hand/right" != this.state.sParentDevice &&
              s.push({
                xf: i.xfDeviceToAbsoluteTracking,
                location: V.yW.RightHand,
              }),
            !n || 0 == s.length)
          )
            return (
              window.clearTimeout(this.m_nDragSnapTimeoutHandle),
              void (this.m_nDragSnapTimeoutHandle = window.setTimeout(
                this.computeDragSnapDestination,
                o.sfMovePulseMS,
              ))
            );
          let l = VRHTML.MultiplyTransforms(n, this.state.xfTransform);
          const c = s.map((e) => {
              const t = VRHTML.ChangeBasis(l, e.xf),
                n = (0, a.Uj)(t.translation);
              return Object.assign(Object.assign({}, e), { fDistance: n });
            }),
            u = {
              [V.yW.Dashboard]: 0.3,
              [V.yW.LeftHand]: 0.4,
              [V.yW.RightHand]: 0.4,
              [V.yW.World]: 0,
              [V.yW.Theater]: 0,
              [V.yW.Boot]: 0,
            };
          let m =
            null !==
              (e = c
                .filter((e) => {
                  if (!Number.isFinite(e.fDistance)) return !1;
                  const t = u[e.location];
                  return t && e.fDistance < t;
                })
                .sort((e, t) => e.fDistance - t.fDistance)[0]) && void 0 !== e
              ? e
              : { location: V.yW.World };
          m.location != V.yW.Dashboard ||
            this.state.dragCanSnapToDashboard ||
            (m = { location: V.yW.World });
          const h = c.find((e) => e.location == V.yW.Dashboard),
            v = h && h.fDistance > u[V.yW.Dashboard];
          this.setState({
            dragSnapPreview: m,
            dragCanSnapToDashboard: this.state.dragCanSnapToDashboard || v,
          }),
            this.state.dragSnapPreview.location !== m.location &&
              d.W.Instance.triggerHaptic(a.en.SlidingEdge),
            (this.props.frame.docking.m_ePreviewingDockLocation = m.location),
            window.clearTimeout(this.m_nDragSnapTimeoutHandle),
            (this.m_nDragSnapTimeoutHandle = window.setTimeout(
              this.computeDragSnapDestination,
              o.sfMovePulseMS,
            ));
        }
        startFloatingWindowMove() {
          if (this.state.bIsMoving || null === this.state.xfTransform) return;
          if (
            ((this.m_nMoveDeviceIndex =
              VRHTML.VROverlay.GetPrimaryDashboardDevice()),
            this.m_nMoveDeviceIndex == a.ne)
          )
            return;
          this.m_moveDeviceRole =
            VRHTML.VRSystem.GetControllerRoleForTrackedDeviceIndex(
              this.m_nMoveDeviceIndex,
            );
          const e = M(this.m_nMoveDeviceIndex, a.mu.Standing);
          let t, n;
          switch (
            ((this.m_xfDashboardSnapTransform = void 0),
            this.requestDashboardSnapTransform(),
            this.props.frame.docking.dockLocation)
          ) {
            case V.yW.LeftHand:
              if (
                VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                  a.kG.TrackedControllerRole_LeftHand,
                ) == a.ne
              )
                return;
              t = M("/user/hand/left", a.mu.Standing);
              break;
            case V.yW.RightHand:
              if (
                VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                  a.kG.TrackedControllerRole_RightHand,
                ) == a.ne
              )
                return;
              t = M("/user/hand/right", a.mu.Standing);
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
              n = "/user/hand/left";
              break;
            case a.kG.TrackedControllerRole_RightHand:
              n = "/user/hand/right";
              break;
            default:
              n = "/user/head";
          }
          let o = VRHTML.MultiplyTransforms(
              t.xfDeviceToAbsoluteTracking,
              this.state.xfTransform,
            ),
            r = VRHTML.ChangeBasis(o, e.xfDeviceToAbsoluteTracking);
          this.setState(
            {
              xfTransform: r,
              sParentDevice: n,
              dragCanSnapToDashboard: !1,
              bIsMoving: !0,
            },
            this.computeDragSnapDestination,
          ),
            window.addEventListener("mouseup", this.endFloatingWindowMove);
        }
        endFloatingWindowMove() {
          var e;
          this.props.frame.docking.m_ePreviewingDockLocation = void 0;
          this.props.frame.docking.dockLocation;
          const t = this.state.dragSnapPreview.location;
          if (
            ((this.m_xfDashboardSnapTransform = void 0), !this.state.bIsMoving)
          )
            return;
          let n, o;
          if (
            "/user/hand/left" == this.state.sParentDevice ||
            t == V.yW.LeftHand
          ) {
            if (
              VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                a.kG.TrackedControllerRole_LeftHand,
              ) == a.ne
            )
              return;
            n = M("/user/hand/left", a.mu.Standing);
          }
          if (
            "/user/hand/right" == this.state.sParentDevice ||
            t == V.yW.RightHand
          ) {
            if (
              VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                a.kG.TrackedControllerRole_RightHand,
              ) == a.ne
            )
              return;
            o = M("/user/hand/right", a.mu.Standing);
          }
          let r,
            i = {
              xfDeviceToAbsoluteTracking: (0, a.vx)(),
              vVelocity: { x: 0, y: 0, z: 0 },
              eTrackingResult: a.MV.TrackingResult_Running_OK,
              bPoseIsValid: !0,
            };
          switch (t) {
            case V.yW.LeftHand:
              r = n;
              break;
            case V.yW.RightHand:
              r = o;
              break;
            default:
              r = i;
          }
          const s = M(this.m_nMoveDeviceIndex, a.mu.Standing);
          let l = VRHTML.MultiplyTransforms(
              s.xfDeviceToAbsoluteTracking,
              this.state.xfTransform,
            ),
            c = VRHTML.ChangeBasis(l, r.xfDeviceToAbsoluteTracking);
          this.setState({ xfTransform: c, sParentDevice: y(t), bIsMoving: !1 }),
            null === (e = this.props.frame) ||
              void 0 === e ||
              e.docking.SetDockLocation(t),
            (t != V.yW.World && t != V.yW.LeftHand && t != V.yW.RightHand) ||
              this.props.frame.docking.m_mapLastRelativeTransformForDockLocation.set(
                t,
                c,
              ),
            window.removeEventListener("mouseup", this.endFloatingWindowMove),
            this.props.frame.docking &&
              (this.props.frame.docking.m_bJustFloatedFromDashboard = !1);
        }
        renderTheaterFrame() {
          var e, t, n, r;
          const i = this.props.frame;
          if (
            L.G.Instance.SceneApplicationState !== a.HW.None &&
            f.H.m_bShowFloor
          )
            return null;
          const s =
              null ===
                (t =
                  null === (e = this.props.frame) || void 0 === e
                    ? void 0
                    : e.activePage) || void 0 === t
                ? void 0
                : t.mainPanelID,
            l =
              null !==
                (n = m.HR.settings.get(
                  "/settings/dashboard/enableLTCReflections",
                )) &&
              void 0 !== n &&
              n,
            d = s && !p.SW.isGroupMode && p.SW.isDarkMode && l,
            u =
              null !==
                (r = m.HR.settings.get(
                  "/settings/dashboard/theaterModeReflection",
                )) && void 0 !== r
                ? r
                : 0.5,
            C = 0.5 * Math.pow(u, 2.2);
          if (null === this.getCurrentOverlaySize()) return null;
          return c.createElement(
            g.tH,
            null,
            c.createElement(
              H.w,
              { frame_id: i.frameID },
              c.createElement(
                a.dL,
                { parent_path: void 0 },
                c.createElement(
                  a.dL,
                  {
                    transform_path: this.state.sParentDevice,
                    transform: this.state.xfTransform,
                  },
                  c.createElement(
                    a.dL,
                    { translation: { y: 0 } },
                    c.createElement(
                      h.B,
                      {
                        min_distance: 0.7,
                        should_head_align: !0,
                        lerp_speed: o.flGrabTransformLerpSpeed,
                        reset_on_recenter:
                          this.props.frame.docking.dockLocation == V.yW.Theater,
                      },
                      c.createElement(
                        a.dL,
                        { translation: { y: -0 } },
                        d &&
                          c.createElement(a.lq, {
                            target_id: s,
                            "near-z": -0.1,
                            "far-z": 0.1,
                            specular: { color: { r: C, g: C, b: C } },
                            diffuse: { size: 20, resolution: 512 },
                            debug: !1,
                          }),
                        !1,
                        c.createElement(V.in, { dockLocation: V.yW.Theater }),
                        c.createElement(
                          a.dL,
                          {
                            parent_id: i.frameControlsTransformID,
                            translation: { z: 0.02, y: -0.2 },
                          },
                          c.createElement(v.X, {
                            tint: p.SW.GrabHandleTint,
                            curvature_origin_id:
                              i.curvature.curvatureTransformOriginID,
                          }),
                        ),
                        c.createElement(S, { frame: i }),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          );
        }
        renderFloatingFrame() {
          const e = this.props.frame;
          let t,
            n = this.state.xfTransform,
            o = this.state.sParentDevice;
          return (
            this.state.bIsMoving &&
              this.state.dragSnapPreview.location == V.yW.Dashboard &&
              ((n = void 0),
              (o = void 0),
              (t = _.JJ.GetDockLocationTransformID(V.yW.Dashboard))),
            c.createElement(
              g.tH,
              null,
              c.createElement(
                H.w,
                { frame_id: e.frameID },
                c.createElement(
                  a.dL,
                  { parent_path: o, parent_id: t, transform: n },
                  c.createElement(V.in, {
                    dockLocation: e.docking.dockLocation,
                    forFrameID: e.frameID,
                  }),
                  c.createElement(
                    a.dL,
                    {
                      parent_id: e.frameControlsTransformID,
                      translation: { y: -0.21 },
                      id: this.m_sDragSnapLineOriginID,
                    },
                    c.createElement(v.Q, {
                      onMouseDown: this.startFloatingWindowMove,
                      onMouseUp: this.endFloatingWindowMove,
                      active: this.state.bIsMoving,
                      width: 350,
                      uniformScale: 1.3,
                    }),
                  ),
                ),
                c.createElement(S, { frame: e }),
                this.renderDragSnapLine(),
              ),
            )
          );
        }
        renderDragSnapLine() {
          if (!this.state.bIsMoving || !this.state.dragSnapPreview) return null;
          let e, t;
          switch (this.state.dragSnapPreview.location) {
            case V.yW.LeftHand:
              e = "/user/hand/left";
              break;
            case V.yW.RightHand:
              e = "/user/hand/right";
              break;
            default:
              return null;
          }
          return c.createElement(
            a.dL,
            { translation: { y: -1 } },
            c.createElement(
              a.dL,
              { parent_path: e, parent_id: t },
              c.createElement(a.N1, {
                target_id: this.m_sDragSnapLineOriginID,
                thickness: 0.001,
                start_buffer: 0.01,
              }),
            ),
          );
        }
        render() {
          return this.props.frame && this.state.xfTransform
            ? this.props.frame.docking.dockLocation == V.yW.Theater
              ? this.renderTheaterFrame()
              : this.renderFloatingFrame()
            : null;
        }
      });
      (w.sfMovePulseMS = 100),
        (w.flGrabTransformLerpSpeed = 0.125),
        (0, i.Cg)([s.o], w.prototype, "computeDragSnapDestination", null),
        (0, i.Cg)([s.o], w.prototype, "startFloatingWindowMove", null),
        (0, i.Cg)([s.o], w.prototype, "endFloatingWindowMove", null),
        (w = o = (0, i.Cg)([l.PA], w));
      const S = (0, l.PA)(function (e) {
        var t, n;
        const { frame: o } = e,
          r =
            null === (t = null == o ? void 0 : o.activePage) || void 0 === t
              ? void 0
              : t.mainPanelID;
        return c.createElement(
          a.dL,
          {
            parent_id:
              null === (n = null == o ? void 0 : o.activePage) || void 0 === n
                ? void 0
                : n.GetPanelAnchorID(a.Oi.BottomRight),
            translation: { x: 0.03 },
          },
          c.createElement(C.X, {
            id: r + ".ResizeHandle",
            target_id: r,
            bVisible: !0,
            scale: 0.5 * (null == o ? void 0 : o.size.scaleForBottomControls),
            tint: p.SW.GrabHandleTint,
          }),
        );
      });
    },
    2156: (e, t, n) => {
      n.d(t, { O: () => v });
      var o = n(1635),
        r = n(6090),
        i = n(6540),
        a = n(6921),
        s = n(1370),
        l = n(1835),
        c = n(3606),
        d = n(3246);
      function u(e) {
        const { children: t, invertParentPanelPitch: n, pitch: o } = e;
        return n || 0 != o
          ? i.createElement(
              r.dL,
              {
                invert_parent_panel_pitch: null != n && n,
                curvature_pitch: null != o ? o : 0,
              },
              t,
            )
          : i.createElement(i.Fragment, null, t);
      }
      function m(e) {
        let { children: t, offsetPixels: n, offsetMeters: o } = e;
        (n = null != n ? n : { x: 0, y: 0, z: 0 }),
          (o = null != o ? o : { x: 0, y: 0, z: 0 });
        const a = (0, r.CU)(
          o,
          (0, r.tx)(n, l.SW.m_fVRGamepadUI_MetersPerPixel),
        );
        return 0 != a.x || 0 != a.y || 0 != a.z
          ? i.createElement(r.dL, { translation: a }, t)
          : i.createElement(i.Fragment, null, t);
      }
      function p(e) {
        const { children: t, rotation: n } = e;
        return null != n && (0 != n.x || 0 != n.y || 0 != n.z)
          ? i.createElement(r.dL, { rotation: n }, t)
          : i.createElement(i.Fragment, null, t);
      }
      function h(e) {
        return 1 == (null == e ? void 0 : e.parent_enum) ? 0 : c.gS;
      }
      function v(e) {
        var t,
          n,
          s,
          c,
          d,
          v,
          C,
          f,
          g,
          _,
          V,
          b,
          H,
          L,
          y,
          M,
          w,
          S,
          I,
          x,
          D,
          k,
          T,
          R,
          E,
          F,
          Z,
          W,
          N,
          O,
          P,
          G,
          B,
          z,
          U,
          j,
          A,
          q,
          J;
        const { popupRequest: K, children: X } = e,
          Y = (0, o.Tt)(e, ["popupRequest", "children"]),
          $ = {
            x:
              null !==
                (n =
                  null === (t = null == K ? void 0 : K.origin_on_parent) ||
                  void 0 === t
                    ? void 0
                    : t.x) && void 0 !== n
                ? n
                : 0,
            y:
              null !==
                (c =
                  null === (s = null == K ? void 0 : K.origin_on_parent) ||
                  void 0 === s
                    ? void 0
                    : s.y) && void 0 !== c
                ? c
                : 0,
          },
          Q = {
            x:
              null !==
                (v =
                  null === (d = null == K ? void 0 : K.origin_on_popup) ||
                  void 0 === d
                    ? void 0
                    : d.x) && void 0 !== v
                ? v
                : 0,
            y:
              null !==
                (f =
                  null === (C = null == K ? void 0 : K.origin_on_popup) ||
                  void 0 === C
                    ? void 0
                    : C.y) && void 0 !== f
                ? f
                : 0,
          },
          ee = {
            u:
              null !==
                (_ =
                  null === (g = null == K ? void 0 : K.clip_rect) ||
                  void 0 === g
                    ? void 0
                    : g.u_min) && void 0 !== _
                ? _
                : 0,
            v:
              null !==
                (b =
                  null === (V = null == K ? void 0 : K.clip_rect) ||
                  void 0 === V
                    ? void 0
                    : V.v_min) && void 0 !== b
                ? b
                : 0,
          },
          te = {
            u:
              null !==
                (L =
                  null === (H = null == K ? void 0 : K.clip_rect) ||
                  void 0 === H
                    ? void 0
                    : H.u_max) && void 0 !== L
                ? L
                : 1,
            v:
              null !==
                (M =
                  null === (y = null == K ? void 0 : K.clip_rect) ||
                  void 0 === y
                    ? void 0
                    : y.v_max) && void 0 !== M
                ? M
                : 1,
          },
          ne = {
            x:
              null !==
                (S =
                  null === (w = null == K ? void 0 : K.offset) || void 0 === w
                    ? void 0
                    : w.x_pixels) && void 0 !== S
                ? S
                : 0,
            y:
              null !==
                (x =
                  null === (I = null == K ? void 0 : K.offset) || void 0 === I
                    ? void 0
                    : I.y_pixels) && void 0 !== x
                ? x
                : 0,
            z:
              null !==
                (k =
                  null === (D = null == K ? void 0 : K.offset) || void 0 === D
                    ? void 0
                    : D.z_pixels) && void 0 !== k
                ? k
                : 0,
          },
          oe = {
            x:
              null !==
                (R =
                  null === (T = null == K ? void 0 : K.offset) || void 0 === T
                    ? void 0
                    : T.x_meters) && void 0 !== R
                ? R
                : 0,
            y:
              null !==
                (F =
                  null === (E = null == K ? void 0 : K.offset) || void 0 === E
                    ? void 0
                    : E.y_meters) && void 0 !== F
                ? F
                : 0,
            z:
              null !==
                (W =
                  null === (Z = null == K ? void 0 : K.offset) || void 0 === Z
                    ? void 0
                    : Z.z_meters) && void 0 !== W
                ? W
                : 0,
          },
          re = {
            x:
              null !==
                (O =
                  null === (N = null == K ? void 0 : K.rotation) || void 0 === N
                    ? void 0
                    : N.pitch_degrees) && void 0 !== O
                ? O
                : 0,
            y:
              null !==
                (G =
                  null === (P = null == K ? void 0 : K.rotation) || void 0 === P
                    ? void 0
                    : P.yaw_degrees) && void 0 !== G
                ? G
                : 0,
          },
          ie =
            null === (B = null == K ? void 0 : K.inherit_parent_pitch) ||
            void 0 === B ||
            B,
          ae =
            null === (z = null == K ? void 0 : K.inherit_parent_curvature) ||
            void 0 === z ||
            z,
          se =
            null === (U = null == K ? void 0 : K.interactive) ||
            void 0 === U ||
            U,
          le =
            null !== (j = null == K ? void 0 : K.requires_laser) &&
            void 0 !== j &&
            j;
        let ce =
          null !==
            (q =
              null === (A = null == K ? void 0 : K.scale) || void 0 === A
                ? void 0
                : A.scaler_value) && void 0 !== q
            ? q
            : 1;
        const de =
            1 ==
            (null !== (J = null == K ? void 0 : K.sort_order) && void 0 !== J
              ? J
              : 0)
              ? 101
              : null,
          ue = (function (e) {
            var t, n, o;
            const r =
                null !== (t = null == e ? void 0 : e.parent_overlay_key) &&
                void 0 !== t
                  ? t
                  : "",
              i =
                null !==
                  (o =
                    null === (n = null == e ? void 0 : e.offset) || void 0 === n
                      ? void 0
                      : n.z_pixels) && void 0 !== o
                  ? o
                  : 0;
            return r == (0, a.useObserver)(() => l.SW.dashboardBarOverlayKey) &&
              i >= 0
              ? -0.5
              : 0;
          })(K);
        i.useLayoutEffect(
          () => r.O5.Current().forceLayoutUpdate(),
          [ee.u, ee.v, te.u, te.v],
        );
        const me = i.createElement(
          u,
          { invertParentPanelPitch: !ie },
          i.createElement(
            m,
            { offsetPixels: ne, offsetMeters: oe },
            i.createElement(
              p,
              { rotation: re },
              i.createElement(
                r.Zk,
                Object.assign(
                  {
                    debug_name: `VRGamepadUI-PooledPopup-${null == K ? void 0 : K.dashboard_popup_id}`,
                    interactive: se,
                    requires_laser: le,
                    curvature: ae ? "inherit-from-parent-panel" : void 0,
                    overlay_key: null == K ? void 0 : K.popup_overlay_key,
                    origin: Q,
                    meters_per_pixel: l.SW.m_fVRGamepadUI_MetersPerPixel * ce,
                    reflect: h(K),
                    sort_depth_bias: ue,
                    uv_min: ee,
                    uv_max: te,
                    sort_order: de,
                    frame_resize_scale_factor: 1,
                  },
                  Y,
                ),
                X,
              ),
            ),
          ),
        );
        return (null == K ? void 0 : K.parent_overlay_key)
          ? i.createElement(
              r.b$,
              { parent_overlay_key: null == K ? void 0 : K.parent_overlay_key },
              i.createElement(
                r.Ci,
                { key: K.dashboard_popup_id, location: $ },
                me,
              ),
            )
          : (null == K ? void 0 : K.parent_device_path)
            ? i.createElement(
                r.dL,
                { parent_path: null == K ? void 0 : K.parent_device_path },
                me,
              )
            : me;
      }
      function C(e) {
        return (
          null != (null == e ? void 0 : e.parent_device_path) ||
          null != (null == e ? void 0 : e.parent_enum) ||
          null != (null == e ? void 0 : e.parent_overlay_key)
        );
      }
      (0, s.PA)((e) =>
        i.createElement(
          i.Fragment,
          null,
          d.r.requests
            .filter(C)
            .map((e) =>
              i.createElement(v, {
                popupRequest: e,
                key: e.dashboard_popup_id,
              }),
            ),
        ),
      );
    },
    9471: (e, t, n) => {
      n.d(t, {
        Pq: () => V,
        nl: () => d,
        Jc: () => L,
        Zy: () => C,
        rx: () => v,
        Ey: () => p,
        Ki: () => T,
        _y: () => S,
        s3: () => R,
        Xj: () => b,
        DO: () => m,
        FG: () => l,
        YN: () => c,
        aJ: () => y,
        vN: () => D,
        hU: () => h,
        Sc: () => x,
        wB: () => w,
        _F: () => _,
        PN: () => k,
        jd: () => I,
        y$: () => E,
        Qt: () => M,
        fr: () => H,
        VR: () => u,
      });
      var o = n(1635),
        r = n(6540);
      var i = n(108),
        a = n.n(i),
        s = n(9283);
      function l(e) {
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
      function c(e) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          r.createElement("path", {
            d: "M32 4V16H28V10.83L19 19.83L16.19 17L25.19 8H20V4H32ZM28 28H8V8H13V4H4V32H32V23H28V28Z",
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
              className: "SVGIcon_Button SVGIcon_Display",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          r.createElement("path", {
            d: "M34 6H2V28H10.6L9 34H27L25.4 28H34V6ZM30 24H6V10H30V24Z",
            fill: "currentColor",
          }),
        );
      }
      function u(e) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button SVGIcon_VR",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          r.createElement("path", {
            d: "M33 13.3C33.0114 12.2663 32.7021 11.2545 32.1147 10.4038C31.5273 9.5532 30.6907 8.90553 29.72 8.54998C25.9132 7.45272 21.9604 6.94682 18 7.04998C14.0396 6.94682 10.0868 7.45272 6.28 8.54998C5.30932 8.90553 4.4727 9.5532 3.88531 10.4038C3.29791 11.2545 2.98862 12.2663 3 13.3L0 14.05V20.05L3 20.81C3.08508 22.0931 3.51701 23.3289 4.24968 24.3857C4.98235 25.4424 5.98826 26.2803 7.16 26.81L10.16 28.08C10.7695 28.3298 11.4453 28.3671 12.0785 28.1856C12.7117 28.0042 13.2654 27.6147 13.65 27.08C14.1242 26.3803 14.779 25.8222 15.5449 25.4648C16.3108 25.1074 17.1592 24.964 18 25.05C18.8449 24.9722 19.6951 25.1256 20.4595 25.4937C21.224 25.8619 21.874 26.4309 22.34 27.14C22.7246 27.6747 23.2782 28.0642 23.9115 28.2456C24.5447 28.4271 25.2205 28.3898 25.83 28.14L28.83 26.87C30.0017 26.3403 31.0076 25.5024 31.7403 24.4457C32.473 23.3889 32.9049 22.1531 32.99 20.87L35.99 20.11V14.11L33 13.3ZM22.16 13C20.9452 12.7243 19.7054 12.5735 18.46 12.55C16.9073 12.5083 15.3555 12.6595 13.84 13L13.16 10.08C14.925 9.68481 16.7318 9.50682 18.54 9.54998C19.988 9.57538 21.4292 9.75302 22.84 10.08L22.16 13Z",
            fill: "currentColor",
          }),
        );
      }
      function m(e) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button SVGIcon_Playspace",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          r.createElement("path", {
            fill: "currentColor",
            d: "M15.6615 10.25C15.3525 10.7125 15.1875 11.2562 15.1875 11.8125C15.1867 12.1821 15.2589 12.5482 15.3999 12.8898C15.541 13.2314 15.7481 13.5417 16.0094 13.8031C16.2708 14.0644 16.5811 14.2715 16.9227 14.4126C17.2643 14.5536 17.6304 14.6258 18 14.625C18.5563 14.625 19.1 14.4601 19.5625 14.151C20.0251 13.842 20.3855 13.4027 20.5984 12.8888C20.8113 12.3749 20.867 11.8094 20.7585 11.2638C20.6499 10.7182 20.3821 10.2171 19.9887 9.82376C19.5954 9.43043 19.0943 9.16256 18.5487 9.05404C18.0031 8.94552 17.4376 9.00122 16.9237 9.21409C16.4098 9.42696 15.9705 9.78745 15.6615 10.25Z",
          }),
          r.createElement("path", {
            fill: "currentColor",
            d: "M14.4645 17.9645C15.4021 17.0268 16.6739 16.5 18 16.5C19.3261 16.5 20.5979 17.0268 21.5355 17.9645C22.4732 18.9021 23 20.1739 23 21.5V24H21L20.5 29H15.5L15 24H13V21.5C13 20.1739 13.5268 18.9021 14.4645 17.9645Z",
          }),
          r.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18 0L35 7.00016V29L18 36L1 29V7.00016L18 0ZM4 27.7647V9.76471L18 4L32 9.76471V27.7647L24.6111 24.7222L24.1734 27.7864L27.1208 29L18 32.7556L8.87919 29L11.8266 27.7864L11.3889 24.7222L4 27.7647Z",
          }),
        );
      }
      function p(e) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button SVGIcon_FloorHeight",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          r.createElement("path", {
            fill: "currentColor",
            d: "M11.9358 24.497L1 29L18 36L35 29L24.0637 24.4968L22.5504 27.1181L27.1208 29L18 32.7556L8.87919 29L13.4492 27.1182L11.9358 24.497Z",
          }),
          r.createElement("path", {
            fill: "currentColor",
            d: "M17.9999 0L23.196 9H18.9999V20H23.1962L18 29L12.8038 20H16.9999V9H12.8037L17.9999 0Z",
          }),
        );
      }
      function h(e) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button SVGIcon_Recenter",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          r.createElement("path", {
            fill: "currentColor",
            d: "M14.7261 2.74994C14.2934 3.39746 14.0625 4.15874 14.0625 4.9375C14.0613 5.45491 14.1624 5.96744 14.3599 6.44568C14.5573 6.92392 14.8473 7.35845 15.2132 7.72431C15.5791 8.09017 16.0136 8.38016 16.4918 8.57763C16.9701 8.7751 17.4826 8.87616 18 8.875C18.7788 8.875 19.54 8.64407 20.1876 8.21141C20.8351 7.77876 21.3398 7.1638 21.6378 6.44432C21.9358 5.72483 22.0138 4.93313 21.8618 4.16933C21.7099 3.40553 21.3349 2.70394 20.7842 2.15327C20.2336 1.6026 19.532 1.22759 18.7682 1.07566C18.0044 0.92373 17.2127 1.00171 16.4932 1.29973C15.7737 1.59775 15.1587 2.10243 14.7261 2.74994Z",
          }),
          r.createElement("path", {
            fill: "currentColor",
            d: "M13.0503 13.5503C14.363 12.2375 16.1435 11.5 18 11.5C19.8565 11.5 21.637 12.2375 22.9497 13.5503C24.2625 14.863 25 16.6435 25 18.5V22H22.2L21.5 29H14.5L13.8 22H11V18.5C11 16.6435 11.7375 14.863 13.0503 13.5503Z",
          }),
          r.createElement("path", {
            fill: "currentColor",
            d: "M3 29C3 26.5645 5.66517 24.4196 9.70869 23.1656L10.0112 26.224C9.52728 26.393 9.07639 26.5754 8.66205 26.7688C6.18364 27.9254 6 28.9249 6 29C6 29.0751 6.18364 30.0746 8.66205 31.2312C10.8969 32.2741 14.1952 33 18 33C21.8048 33 25.1031 32.2741 27.3379 31.2312C29.8164 30.0746 30 29.0751 30 29C30 28.9249 29.8164 27.9254 27.3379 26.7688C26.9236 26.5754 26.4727 26.393 25.9888 26.224L26.2913 23.1656C30.3348 24.4196 33 26.5645 33 29C33 32.866 26.2843 36 18 36C9.71573 36 3 32.866 3 29Z",
          }),
        );
      }
      function v(e) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button SVGIcon_FeatureVisible",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          r.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12.73 28.34C15.6223 29.3235 18.732 29.4785 21.7078 28.7876C24.6836 28.0966 27.4069 26.5873 29.57 24.43L36 18L29.57 11.57C28 10 26.5 9 23.94 7.94C20.9843 6.77796 17.7541 6.50244 14.6444 7.14712C11.5346 7.7918 8.68012 9.32875 6.43 11.57L0 18L6.43 24.43C8.10419 26.1042 10.2596 27.5 12.73 28.34ZM18 25C21.866 25 25 21.866 25 18C25 14.134 21.866 11 18 11C14.134 11 11 14.134 11 18C11 21.866 14.134 25 18 25Z",
            fill: "currentColor",
          }),
        );
      }
      function C(e) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button SVGIcon_FeatureHidden",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          r.createElement("path", {
            d: "M29.57 11.57L24.82 16.32C24.9485 16.8705 25.0089 17.4347 25 18C25 19.8565 24.2625 21.637 22.9497 22.9497C21.637 24.2625 19.8565 25 18 25C17.423 24.9983 16.8486 24.9244 16.29 24.78L12.73 28.34C15.6223 29.3235 18.732 29.4785 21.7078 28.7876C24.6836 28.0966 27.4069 26.5873 29.57 24.43L36 18L29.57 11.57Z",
            fill: "currentColor",
          }),
          r.createElement("path", {
            d: "M28.94 2.94L23.94 7.94C20.9843 6.77797 17.7541 6.50244 14.6444 7.14712C11.5346 7.79181 8.68012 9.32876 6.43 11.57L0 18L6.43 24.43C6.6 24.6 6.79 24.75 6.97 24.91L3.44 28.44L5.56 30.56L31.06 5.06L28.94 2.94ZM11 18C11.0002 16.8706 11.2736 15.7581 11.7969 14.7573C12.3203 13.7565 13.078 12.8971 14.0054 12.2527C14.9328 11.6082 16.0024 11.1977 17.1229 11.0561C18.2434 10.9146 19.3815 11.0463 20.44 11.44L11.44 20.44C11.1493 19.6593 11.0003 18.833 11 18Z",
            fill: "currentColor",
          }),
        );
      }
      function f(e) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          r.createElement("path", {
            fill: "currentColor",
            d: "M11 9H29V19H26.6585C26.8797 19.6256 27 20.2987 27 21C27 21.3407 26.9716 21.6748 26.917 22H32V6H8V15.083C8.32521 15.0284 8.65929 15 9 15C9.70126 15 10.3744 15.1203 11 15.3415V9Z",
          }),
          r.createElement("path", {
            fill: "currentColor",
            d: "M9 24C10.6569 24 12 22.6569 12 21C12 19.3431 10.6569 18 9 18C7.34315 18 6 19.3431 6 21C6 22.6569 7.34315 24 9 24Z",
          }),
          r.createElement("path", {
            fill: "currentColor",
            d: "M21 24C22.6569 24 24 22.6569 24 21C24 19.3431 22.6569 18 21 18C19.3431 18 18 19.3431 18 21C18 22.6569 19.3431 24 21 24Z",
          }),
          r.createElement("path", {
            fill: "currentColor",
            d: "M26 30C26 27.2386 23.7614 25 21 25C18.2386 25 16 27.2386 16 30V32H26V30Z",
          }),
          r.createElement("path", {
            fill: "currentColor",
            d: "M14 30C14 27.2386 11.7614 25 9 25C6.23858 25 4 27.2386 4 30V32H14V30Z",
          }),
        );
      }
      function g(e) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          r.createElement("path", {
            fill: "currentColor",
            d: "M1 30.6985L7.90454 23.7939C6.78948 23.3564 6 22.2705 6 21.0002C6 19.3434 7.34315 18.0002 9 18.0002C10.2703 18.0002 11.3561 18.7897 11.7937 19.9048L22.6985 9H11V15.3415C10.3744 15.1203 9.70126 15 9 15C8.65929 15 8.32521 15.0284 8 15.083V6H25.6985L30.6985 1L32.8198 3.12132L3.12132 32.8198L1 30.6985Z",
          }),
          r.createElement("path", {
            fill: "currentColor",
            d: "M22.0095 18.1743L18.1741 22.0097C18.5886 23.17 19.6973 24.0002 21 24.0002C22.6569 24.0002 24 22.6571 24 21.0002C24 19.6976 23.1697 18.5888 22.0095 18.1743Z",
          }),
          r.createElement("path", {
            fill: "currentColor",
            d: "M8.18356 32.0002H14V30.0002C14 28.9217 13.6585 27.9229 13.0777 27.1061L8.18356 32.0002Z",
          }),
          r.createElement("path", {
            fill: "currentColor",
            d: "M26 30.0002C26 27.2388 23.7614 25.0002 21 25.0002C18.2386 25.0002 16 27.2388 16 30.0002V32.0002H26V30.0002Z",
          }),
          r.createElement("path", {
            fill: "currentColor",
            d: "M29 19V11.1836L32 8.18356V22H26.917C26.9716 21.6748 27 21.3407 27 21C27 20.2987 26.8797 19.6256 26.6585 19H29Z",
          }),
        );
      }
      function _(e) {
        const { off: t } = e,
          n = (0, o.Tt)(e, ["off"]);
        return t
          ? r.createElement(g, Object.assign({}, n))
          : r.createElement(f, Object.assign({}, n));
      }
      function V(e) {
        const { none: t, partial: n, right: i, left: a } = e,
          s = (0, o.Tt)(e, ["none", "partial", "right", "left"]);
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
                s,
              ),
              r.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M33.5871 3.5268L31.4417 1.38135L26.6841 6.13886C24.4873 5.49306 21.6236 5 18 5C7.5 5 3.38 9.14 3.38 9.14C3.38 9.14 0 20.56 0 25.2C0 27.1825 1.62275 28.7886 3.01931 29.8037L0.370949 32.452L2.5164 34.5975L33.5871 3.5268ZM23.2678 19.2678C23.0842 19.4513 22.8735 19.6049 22.6433 19.7232L17.3666 25H25L31 31C31 31 36 28.68 36 25.2C36 21.1218 33.3889 11.806 32.7566 9.60992L29.8137 12.5529C29.9361 12.852 30 13.1736 30 13.5C30 14.163 29.7366 14.7989 29.2678 15.2678C28.7989 15.7366 28.163 16 27.5 16C27.1736 16 26.852 15.9361 26.5529 15.8137L23.7232 18.6433C23.6049 18.8735 23.4513 19.0842 23.2678 19.2678ZM15 17H12V20H9V17H6V14H9V11H12V14H15V17Z",
              }),
            )
          : n || i
            ? r.createElement(
                "svg",
                Object.assign(
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "SVGIcon_Button SVGIcon_ControllerStatus",
                    viewBox: "0 0 36 36",
                    fill: "none",
                  },
                  s,
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
            : a
              ? r.createElement(
                  "svg",
                  Object.assign(
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      className: "SVGIcon_Button SVGIcon_ControllerStatus",
                      viewBox: "0 0 36 36",
                      fill: "none",
                    },
                    s,
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
                    s,
                  ),
                  r.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M32.62 9.14C32.62 9.14 28.5 5 18 5C7.5 5 3.38 9.14 3.38 9.14C3.38 9.14 0 20.56 0 25.2C0 28.68 5 31 5 31L11 25H25L31 31C31 31 36 28.68 36 25.2C36 20.56 32.62 9.14 32.62 9.14ZM15 17H12V20H9V17H6V14H9V11H12V14H15V17ZM21.5 20C21.0055 20 20.5222 19.8534 20.1111 19.5787C19.7 19.304 19.3795 18.9135 19.1903 18.4567C19.0011 17.9999 18.9516 17.4972 19.048 17.0123C19.1445 16.5273 19.3826 16.0819 19.7322 15.7322C20.0819 15.3826 20.5273 15.1445 21.0123 15.048C21.4972 14.9516 21.9999 15.0011 22.4567 15.1903C22.9135 15.3795 23.304 15.7 23.5787 16.1111C23.8534 16.5222 24 17.0055 24 17.5C24 17.8283 23.9353 18.1534 23.8097 18.4567C23.6841 18.76 23.4999 19.0356 23.2678 19.2678C23.0356 19.4999 22.76 19.6841 22.4567 19.8097C22.1534 19.9353 21.8283 20 21.5 20ZM27.5 16C27.0055 16 26.5222 15.8534 26.1111 15.5787C25.7 15.304 25.3795 14.9135 25.1903 14.4567C25.0011 13.9999 24.9516 13.4972 25.048 13.0123C25.1445 12.5273 25.3826 12.0819 25.7322 11.7322C26.0819 11.3826 26.5273 11.1445 27.0123 11.048C27.4972 10.9516 27.9999 11.0011 28.4567 11.1903C28.9135 11.3795 29.304 11.7 29.5787 12.1111C29.8534 12.5222 30 13.0055 30 13.5C30 14.163 29.7366 14.7989 29.2678 15.2678C28.7989 15.7366 28.163 16 27.5 16Z",
                  }),
                );
      }
      function b(e) {
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
      function H(e) {
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
      function L(e) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          r.createElement("path", {
            fill: "currentColor",
            d: "M9.82998 20L13.41 23.59L10.59 26.41L2.16998 18L10.59 9.59L13.41 12.41L9.82998 16H22V20H9.82998ZM20.15 4H18V8H20.15C22.8021 8 25.3457 9.05357 27.2211 10.9289C29.0964 12.8043 30.15 15.3478 30.15 18C30.15 20.6522 29.0964 23.1957 27.2211 25.0711C25.3457 26.9464 22.8021 28 20.15 28H18V32H20.15C23.863 32 27.424 30.525 30.0495 27.8995C32.675 25.274 34.15 21.713 34.15 18C34.15 14.287 32.675 10.726 30.0495 8.1005C27.424 5.475 23.863 4 20.15 4Z",
          }),
        );
      }
      function y(e) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          r.createElement("path", {
            d: "M33 18C33.0014 20.7047 32.2715 23.3594 30.8875 25.6832C29.5035 28.0069 27.517 29.9133 25.1382 31.2004C22.7594 32.4875 20.0769 33.1075 17.3746 32.9947C14.6722 32.8819 12.0507 32.0406 9.7874 30.5597C7.52413 29.0789 5.70334 27.0137 4.5178 24.5827C3.33226 22.1517 2.82607 19.4454 3.05281 16.7502C3.27955 14.0551 4.2308 11.4714 5.80584 9.2726C7.38089 7.07385 9.52113 5.34187 12 4.26V8.79C10.0125 10.0834 8.49624 11.9845 7.67712 14.2098C6.85801 16.4351 6.77992 18.8655 7.45451 21.1388C8.12909 23.4121 9.52023 25.4066 11.4206 26.8249C13.3209 28.2433 15.6287 29.0095 18 29.0095C20.3713 29.0095 22.6791 28.2433 24.5794 26.8249C26.4798 25.4066 27.8709 23.4121 28.5455 21.1388C29.2201 18.8655 29.142 16.4351 28.3229 14.2098C27.5038 11.9845 25.9875 10.0834 24 8.79V4.26C26.6738 5.42694 28.9493 7.34824 30.5478 9.78866C32.1463 12.2291 32.9985 15.0827 33 18ZM20 1H16V15H20V1Z",
            fill: "currentColor",
          }),
        );
      }
      function M(e) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          r.createElement("path", {
            d: "M17.974 3C10.0808 3 3.61438 9.07573 3 16.7967L11.0534 20.121C11.7357 19.6551 12.56 19.383 13.447 19.383C13.5265 19.383 13.6056 19.3849 13.684 19.3892L17.2658 14.2073C17.2658 14.1826 17.2652 14.1585 17.2652 14.1342C17.2652 11.0149 19.807 8.47686 22.9319 8.47686C26.0568 8.47686 28.5987 11.0149 28.5987 14.1342C28.5987 17.2532 26.0568 19.7915 22.9319 19.7915C22.8887 19.7915 22.8463 19.7903 22.8035 19.7889L17.6954 23.4276C17.6981 23.4944 17.7004 23.5615 17.7004 23.6287C17.7004 25.9704 15.7923 27.8749 13.447 27.8749C11.3885 27.8749 9.66695 26.4079 9.27686 24.4652L3.51756 22.0881C5.30075 28.3844 11.0953 33 17.974 33C26.2726 33 33 26.2842 33 18.0001C32.9999 9.71534 26.2725 3 17.974 3Z",
            fill: "currentColor",
          }),
          r.createElement("path", {
            d: "M12.4163 25.7599L10.5704 24.9989C10.8977 25.6791 11.4633 26.2478 12.2149 26.5608C13.8388 27.2363 15.7116 26.4665 16.3884 24.8446C16.7162 24.0596 16.7186 23.193 16.3933 22.4064C16.0691 21.6196 15.457 21.0054 14.6698 20.6778C13.889 20.3538 13.0526 20.3656 12.317 20.6422L14.2241 21.4296C15.4222 21.928 15.9884 23.3013 15.4894 24.497C14.9906 25.6931 13.6143 26.2586 12.4163 25.7599Z",
            fill: "currentColor",
          }),
          r.createElement("path", {
            d: "M26.7079 14.1338C26.7079 12.0555 25.0142 10.3645 22.9321 10.3645C20.8502 10.3645 19.1559 12.0554 19.1559 14.1338C19.1559 16.2122 20.8501 17.9027 22.9321 17.9027C25.0141 17.9027 26.7079 16.2122 26.7079 14.1338ZM20.1018 14.1273C20.1018 12.5634 21.372 11.296 22.9384 11.296C24.505 11.296 25.7749 12.5634 25.7749 14.1273C25.7749 15.6912 24.5051 16.9586 22.9384 16.9586C21.372 16.9585 20.1018 15.6912 20.1018 14.1273Z",
            fill: "currentColor",
          }),
        );
      }
      function w(e) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          r.createElement("path", {
            d: "M33 20.38V15.62L29.07 14.9C28.8121 14.015 28.453 13.1628 28 12.36L30.27 9.08L26.92 5.71L23.64 8C22.8372 7.54696 21.985 7.18793 21.1 6.93L20.38 3H15.62L14.9 6.93C14.015 7.18793 13.1628 7.54696 12.36 8L9.08 5.71L5.71 9.08L8 12.36C7.54696 13.1628 7.18793 14.015 6.93 14.9L3 15.62V20.38L6.93 21.1C7.18793 21.985 7.54696 22.8372 8 23.64L5.71 26.92L9.08 30.29L12.36 28C13.1637 28.4461 14.0159 28.7984 14.9 29.05L15.62 33H20.38L21.1 29.07C21.985 28.8121 22.8372 28.453 23.64 28L26.92 30.27L30.29 26.9L28 23.64C28.4461 22.8363 28.7984 21.9841 29.05 21.1L33 20.38ZM18 23C17.0111 23 16.0444 22.7068 15.2221 22.1573C14.3999 21.6079 13.759 20.827 13.3806 19.9134C13.0022 18.9998 12.9031 17.9945 13.0961 17.0245C13.289 16.0546 13.7652 15.1637 14.4645 14.4645C15.1637 13.7652 16.0546 13.289 17.0245 13.0961C17.9945 12.9031 18.9998 13.0022 19.9134 13.3806C20.827 13.759 21.6079 14.3999 22.1573 15.2221C22.7068 16.0444 23 17.0111 23 18C23 18.6566 22.8707 19.3068 22.6194 19.9134C22.3681 20.52 21.9998 21.0712 21.5355 21.5355C21.0712 21.9998 20.52 22.3681 19.9134 22.6194C19.3068 22.8707 18.6566 23 18 23Z",
            fill: "currentColor",
          }),
        );
      }
      function S(e) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          r.createElement("path", {
            fill: "currentColor",
            d: "M5 9H27V14.219C28.349 14.3875 29.6858 14.6529 31 15.0138V5H1V27H8V23H5V9Z",
          }),
          r.createElement("path", {
            fill: "currentColor",
            d: "M32.6676 21.1123C32.6751 20.4336 32.472 19.7693 32.0864 19.2107C31.7007 18.6522 31.1514 18.227 30.514 17.9935C28.0145 17.2731 25.4191 16.9409 22.8187 17.0086C20.2183 16.9409 17.6229 17.2731 15.1234 17.9935C14.4861 18.227 13.9368 18.6522 13.5511 19.2107C13.1654 19.7693 12.9623 20.4336 12.9698 21.1123L11 21.6048V25.5443L12.9698 26.0434C13.0256 26.8858 13.3093 27.6973 13.7903 28.3911C14.2714 29.085 14.9319 29.6352 15.7012 29.9829L17.671 30.8168C18.0712 30.9809 18.5149 31.0053 18.9307 30.8862C19.3465 30.7671 19.71 30.5113 19.9625 30.1602C20.2739 29.7008 20.7038 29.3344 21.2067 29.0997C21.7096 28.865 22.2666 28.7709 22.8187 28.8273C23.3735 28.7763 23.9317 28.877 24.4336 29.1187C24.9356 29.3604 25.3624 29.734 25.6683 30.1996C25.9209 30.5507 26.2844 30.8064 26.7002 30.9256C27.1159 31.0447 27.5597 31.0203 27.9599 30.8562L29.9296 30.0223C30.699 29.6746 31.3595 29.1244 31.8405 28.4305C32.3216 27.7367 32.6052 26.9252 32.6611 26.0828L34.6309 25.5837V21.6442L32.6676 21.1123ZM25.5502 20.9154C24.7525 20.7343 23.9385 20.6353 23.1207 20.6199C22.1013 20.5926 21.0823 20.6918 20.0873 20.9154L19.6408 18.9981C20.7997 18.7386 21.986 18.6218 23.1733 18.6501C24.124 18.6668 25.0703 18.7834 25.9966 18.9981L25.5502 20.9154Z",
          }),
        );
      }
      function I(e) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          r.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M34 6H2V11H34V6ZM34 15H13V30H34V15ZM2 15H9V30H2V15Z",
            fill: "currentColor",
          }),
        );
      }
      function x(e) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          r.createElement("path", {
            d: "M34 10H2V6H34V10ZM34 16H2V20H34V16ZM34 26H2V30H34V26Z",
            fill: "currentColor",
          }),
        );
      }
      function D(e) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          r.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18 3C15.0333 3 12.1332 3.87973 9.66645 5.52796C7.19972 7.17618 5.27713 9.51886 4.14181 12.2597C3.0065 15.0006 2.70945 18.0166 3.28823 20.9264C3.86701 23.8361 5.29562 26.5088 7.3934 28.6066C9.49119 30.7044 12.1639 32.133 15.0737 32.7118C17.9834 33.2906 20.9994 32.9935 23.7403 31.8582C26.4811 30.7229 28.8238 28.8003 30.472 26.3336C32.1203 23.8668 33 20.9667 33 18C33 16.0302 32.612 14.0796 31.8582 12.2597C31.1044 10.4399 29.9995 8.78628 28.6066 7.3934C27.2137 6.00052 25.5601 4.89563 23.7403 4.14181C21.9204 3.38799 19.9698 3 18 3ZM18 29C17.4067 29 16.8266 28.8241 16.3333 28.4944C15.8399 28.1648 15.4554 27.6962 15.2284 27.1481C15.0013 26.5999 14.9419 25.9967 15.0577 25.4147C15.1734 24.8328 15.4591 24.2982 15.8787 23.8787C16.2982 23.4591 16.8328 23.1734 17.4147 23.0576C17.9967 22.9419 18.5999 23.0013 19.1481 23.2284C19.6962 23.4554 20.1648 23.8399 20.4944 24.3333C20.8241 24.8266 21 25.4067 21 26C21 26.7956 20.6839 27.5587 20.1213 28.1213C19.5587 28.6839 18.7957 29 18 29ZM21.08 18.15C20.8072 18.2992 20.5779 18.517 20.4149 18.7817C20.2518 19.0465 20.1605 19.3492 20.15 19.66V21H15.85V19.66C15.8546 18.6058 16.1336 17.571 16.6597 16.6575C17.1857 15.744 17.9406 14.9832 18.85 14.45C19.159 14.2565 19.3975 13.9689 19.5306 13.6294C19.6636 13.29 19.6839 12.9169 19.5887 12.565C19.4934 12.2131 19.2876 11.9012 19.0015 11.6752C18.7155 11.4492 18.3644 11.3212 18 11.31C17.7781 11.31 17.5583 11.3537 17.3533 11.4386C17.1482 11.5236 16.9619 11.6481 16.805 11.805C16.6481 11.9619 16.5236 12.1482 16.4387 12.3533C16.3537 12.5583 16.31 12.7781 16.31 13H12C12.0002 11.9508 12.2755 10.9199 12.7984 10.0103C13.3214 9.10064 14.0738 8.34406 14.9805 7.81602C15.8872 7.28799 16.9165 7.00695 17.9657 7.00096C19.015 6.99497 20.0474 7.26423 20.9601 7.78188C21.8728 8.29953 22.6337 9.04747 23.1671 9.95106C23.7004 10.8547 23.9875 11.8823 23.9996 12.9315C24.0117 13.9807 23.7485 15.0147 23.2362 15.9304C22.7239 16.8461 21.9805 17.6114 21.08 18.15Z",
            fill: "currentColor",
          }),
        );
      }
      function k(e) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          r.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M18 4L23 9H13L18 4ZM2 30V13H34V30H2ZM5 17H7V19H5V17ZM7 21H5V23H7V21ZM5 25H7V27H5V25ZM11 17H9V19H11V17ZM9 21H11V23H9V21ZM15 17H13V19H15V17ZM13 21H15V23H13V21ZM27 27V25H9V27H27ZM17 19V17H19V19H17ZM19 23V21H17V23H19ZM21 17H23V19H21V17ZM27 17H25V19H27V17ZM29 17H31V19H29V17ZM23 21H21V23H23V21ZM25 21H27V23H25V21ZM31 21H29V23H31V21ZM29 25H31V27H29V25Z",
            fill: "currentColor",
          }),
        );
      }
      function T(e) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          r.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2 6H34V23H2V6ZM5 10H7V12H5V10ZM7 14H5V16H7V14ZM5 18H7V20H5V18ZM11 10H9V12H11V10ZM9 14H11V16H9V14ZM15 10H13V12H15V10ZM13 14H15V16H13V14ZM27 18H9V20H27V18ZM17 10H19V12H17V10ZM19 14H17V16H19V14ZM21 10H23V12H21V10ZM27 10H25V12H27V10ZM29 10H31V12H29V10ZM23 14H21V16H23V14ZM25 14H27V16H25V14ZM31 14H29V16H31V14ZM29 18H31V20H29V18ZM18 32L23 27H13L18 32Z",
            fill: "currentColor",
          }),
        );
      }
      function R(e) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
          ),
          r.createElement("path", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M2 9H34V27H2V9ZM5 13H7V15H5V13ZM7 21H5V23H7V21ZM5 17H9V19H5V17ZM11 13H9V15H11V13ZM9 21H27V23H9V21ZM15 13H13V15H15V13ZM11 17H13V19H11V17ZM19 13H17V15H19V13ZM15 17H17V19H15V17ZM21 17H19V19H21V17ZM21 13H23V15H21V13ZM25 17H23V19H25V17ZM25 13H27V15H25V13ZM31 13H29V15H31V13ZM29 21H31V23H29V21ZM31 17H27V19H31V17Z",
          }),
        );
      }
      function E(e) {
        return r.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              fill: "none",
            },
            e,
            { className: (0, s.A)(e.className, a().Spinner) },
          ),
          r.createElement("path", {
            d: "M18 10C17.4696 10 16.9609 9.78929 16.5858 9.41421C16.2107 9.03914 16 8.53043 16 8V3H20V8C20 8.53043 19.7893 9.03914 19.4142 9.41421C19.0391 9.78929 18.5304 10 18 10Z",
            fill: "currentColor",
          }),
          r.createElement("path", {
            d: "M23.66 12.34C23.2875 11.9653 23.0784 11.4584 23.0784 10.93C23.0784 10.4016 23.2875 9.89473 23.66 9.52L27.19 6L30 8.81L26.47 12.34C26.0957 12.7095 25.5909 12.9166 25.065 12.9166C24.5391 12.9166 24.0343 12.7095 23.66 12.34Z",
            fill: "currentColor",
          }),
          r.createElement("path", {
            d: "M33 20H28C27.4696 20 26.9609 19.7893 26.5858 19.4142C26.2107 19.0391 26 18.5304 26 18C26 17.4696 26.2107 16.9609 26.5858 16.5858C26.9609 16.2107 27.4696 16 28 16H33V20Z",
            fill: "currentColor",
          }),
          r.createElement("path", {
            d: "M27.19 30L23.66 26.46C23.2875 26.0853 23.0784 25.5783 23.0784 25.05C23.0784 24.5216 23.2875 24.0147 23.66 23.64C23.8458 23.454 24.0663 23.3065 24.3091 23.2059C24.5519 23.1052 24.8122 23.0534 25.075 23.0534C25.3378 23.0534 25.5981 23.1052 25.8409 23.2059C26.0837 23.3065 26.3043 23.454 26.49 23.64L30 27.19L27.19 30Z",
            fill: "currentColor",
          }),
          r.createElement("path", {
            d: "M20 33H16V28C16 27.4696 16.2107 26.9609 16.5858 26.5858C16.9609 26.2107 17.4696 26 18 26C18.5304 26 19.0391 26.2107 19.4142 26.5858C19.7893 26.9609 20 27.4696 20 28V33Z",
            fill: "currentColor",
          }),
          r.createElement("path", {
            d: "M8.81 30L6 27.19L9.53 23.66C9.71575 23.474 9.93632 23.3265 10.1791 23.2259C10.4219 23.1252 10.6822 23.0734 10.945 23.0734C11.2078 23.0734 11.4681 23.1252 11.7109 23.2259C11.9537 23.3265 12.1743 23.474 12.36 23.66C12.7325 24.0347 12.9416 24.5416 12.9416 25.07C12.9416 25.5984 12.7325 26.1053 12.36 26.48L8.81 30Z",
            fill: "currentColor",
          }),
          r.createElement("path", {
            d: "M8 20H3V16H8C8.53043 16 9.03914 16.2107 9.41421 16.5858C9.78929 16.9609 10 17.4696 10 18C10 18.5304 9.78929 19.0391 9.41421 19.4142C9.03914 19.7893 8.53043 20 8 20Z",
            fill: "currentColor",
          }),
          r.createElement("path", {
            d: "M9.51 12.34L6 8.81L8.81 6L12.34 9.54C12.7125 9.91472 12.9216 10.4216 12.9216 10.95C12.9216 11.4784 12.7125 11.9853 12.34 12.36C12.1529 12.5446 11.9313 12.6906 11.6878 12.7895C11.4443 12.8885 11.1837 12.9385 10.9209 12.9366C10.658 12.9347 10.3981 12.8811 10.156 12.7787C9.91396 12.6764 9.69443 12.5273 9.51 12.34Z",
            fill: "currentColor",
          }),
        );
      }
    },
    1909: (e, t, n) => {
      n.d(t, { p: () => h });
      var o = n(1635),
        r = n(6090),
        i = n(4074),
        a = n(1526),
        s = n(4999),
        l = n(776),
        c = n(3606),
        d = n(7813);
      const u = new l.wd("VRGamepadUIMessages");
      class m {
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
          (this.m_SteamVR_Provider = new i.tC(this, s.f5)),
            (this.m_Steam_Client = new i.$k(this)),
            (this.m_Steam_ClientMethods = new s.oT(this.m_Steam_Client)),
            (this.m_mailbox = new r._n()),
            (this.m_bSteamWebsocketConnected = !1),
            (this.m_unNextVRGamepadUIMessageId =
              1e6 * Math.floor((Math.random() * i.Cg) / 1e6)),
            (0, d.makeObservable)(this);
        }
        Init() {
          return (0, o.sH)(this, void 0, void 0, function* () {
            (this.m_bSteamWebsocketConnected =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRPathProperties.GetBoolPathProperty(c.r4)),
              void 0 === this.m_bSteamWebsocketConnected &&
                (this.Log.Debug("Failed to query BoolPathProperty", c.r4),
                (this.m_bSteamWebsocketConnected = !1)),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRPathProperties.RegisterForBoolPathPropertyChangedEvents(
                  c.r4,
                  (e) => {
                    (this.m_bSteamWebsocketConnected = e),
                      this.m_Steam_Client.NotifyConnectionStateChanged(e);
                  },
                ),
              (0, d.autorun)(() =>
                this.m_Steam_Client.NotifyConnectionStateChanged(
                  this.IsConnected(),
                ),
              ),
              yield this.m_mailbox.Init("vrgamepadui_messages"),
              this.m_mailbox.RegisterHandler("vrgamepadui_message", (e) => {
                const t = (0, i.D7)(e.header);
                t &&
                  ((0, i.hC)(t)
                    ? this.m_SteamVR_Provider.HandleVRGamepadUIMessageRequest(
                        t,
                        e.payload,
                      )
                    : (0, i.fb)(t)
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
              this.m_unNextVRGamepadUIMessageId % (i.Cg - 1)),
            this.m_unNextVRGamepadUIMessageId++
          );
        }
        SendVRGamepadUIMessage(e, t) {
          let n, o;
          try {
            n = a.DX.fromObject(e).serializeBase64String();
          } catch (e) {
            return i.Y7.HeaderSerializationFailure;
          }
          try {
            o = t.serializeBase64String();
          } catch (e) {
            return i.Y7.PayloadSerializationFailure;
          }
          try {
            this.m_mailbox
              .WaitForConnect()
              .then(() => {
                this.m_mailbox.SendMessage("web_steam_mailbox", {
                  type: "vrgamepadui_message",
                  header: n,
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
            return i.Y7.SendFailure;
          }
          return i.Y7.Success;
        }
        IsConnected() {
          return this.m_bSteamWebsocketConnected && this.m_mailbox.connected;
        }
      }
      (0, o.Cg)(
        [d.observable],
        m.prototype,
        "m_bSteamWebsocketConnected",
        void 0,
      );
      const p = new m();
      window.VRGamepadUIMessages = p;
      const h = p;
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~2e670652e.js.map
