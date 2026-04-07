var CLSTAMP = "10579910";
(() => {
  "use strict";
  var t,
    e = {
      6090: (t, e, o) => {
        o.d(e, {
          $: () => T.$,
          $Z: () => T.$Z,
          Ay: () => O,
          CU: () => n.CU,
          Ci: () => g.C,
          Cw: () => s.C,
          Ee: () => w.Ee,
          Em: () => c.Em,
          FN: () => b.F,
          Fb: () => n.Fb,
          Fi: () => f.Fi,
          Fz: () => T.Fz,
          GM: () => u.GM,
          GQ: () => w.GQ,
          GS: () => i.GS,
          Gz: () => w.Gz,
          HW: () => w.HW,
          I0: () => i.I0,
          IS: () => l.I,
          JZ: () => n.JZ,
          Jv: () => i.Jv,
          KI: () => T.KI,
          Ld: () => n.Ld,
          M9: () => i.M9,
          MQ: () => f.MQ,
          MV: () => w.MV,
          N: () => r.e,
          N1: () => _.N,
          NH: () => n.NH,
          Nu: () => y.N,
          O5: () => d.O,
          O6: () => n.O6,
          OH: () => w.OH,
          Oi: () => f.Oi,
          QB: () => n.QB,
          QR: () => T.QR,
          R$: () => w.R$,
          Rk: () => w.Rk,
          Se: () => n.Se,
          Uj: () => n.Uj,
          Vh: () => h.V,
          Xl: () => w.Xl,
          Y4: () => a.Y,
          Yu: () => w.Yu,
          Zk: () => f.Zk,
          _1: () => w._1,
          _h: () => f._h,
          _n: () => i._n,
          aX: () => h.a,
          b: () => w.b,
          b$: () => N.b,
          b4: () => v.b,
          cB: () => k.L,
          dL: () => p.d,
          e_: () => n.e_,
          en: () => T.en,
          eo: () => T.eo,
          fD: () => T.fD,
          fk: () => T.fk,
          gN: () => w.gN,
          k2: () => w.k2,
          kG: () => w.kG,
          ku: () => w.ku,
          lq: () => m.l,
          m$: () => v.m,
          mS: () => C.m,
          mX: () => i.mX,
          mo: () => w.mo,
          mu: () => w.mu,
          nX: () => c.nX,
          ne: () => w.ne,
          nq: () => R.n,
          o3: () => f.o3,
          oN: () => n.oN,
          o_: () => n.o_,
          p0: () => n.p0,
          pM: () => w.pM,
          pg: () => i.pg,
          q5: () => n.q5,
          qF: () => n.qF,
          rF: () => l.H,
          rx: () => w.rx,
          sJ: () => S.$,
          sn: () => i.sn,
          tx: () => n.tx,
          uC: () => x.u,
          um: () => T.um,
          vx: () => n.vx,
          xO: () => f.xO,
          yW: () => T.yW,
        });
        var i = o(2824),
          n = o(6292),
          s = o(3389),
          r = (o(4120), o(1230)),
          a = o(5830),
          l = o(6186),
          p = o(3361),
          c = (o(111), o(5723)),
          u = o(3496),
          d = o(5178),
          h = (o(428), o(9011), o(7350)),
          m = o(6847),
          _ = o(5227),
          g = (o(10), o(1808)),
          f = o(7019),
          v = (o(1988), o(2527), o(9864)),
          b = o(4189),
          C = o(322),
          y = o(1977),
          S = o(6417),
          R = o(2303),
          k = o(8715),
          N = (o(4397), o(5459)),
          x = o(8472),
          w = (o(1184), o(3725)),
          T = o(4367);
        const O = VRHTML;
      },
      1977: (t, e, o) => {
        o.d(e, { N: () => s });
        var i = o(6540),
          n = o(3496);
        class s extends n._J {
          constructor(t) {
            super(t);
          }
          internalRender() {
            return i.createElement(
              "vsg-callout-transform",
              { offset: (0, n.j_)(this.props.vOffset) },
              this.props.children,
            );
          }
        }
      },
      322: (t, e, o) => {
        o.d(e, { m: () => r });
        var i = o(6540),
          n = o(4367),
          s = o(3361);
        class r extends i.Component {
          constructor(t) {
            super(t);
            let e = {};
            if (VRHTML)
              try {
                let t = VRHTML.VRProperties.GetStringProperty(
                  this.props.sDevicePath,
                  n.fD.RenderModelName_String,
                );
                if (t) {
                  let o =
                    VRHTML.VRRenderModelsInternal.FindComponentForInputSource(
                      t,
                      this.props.sInputPath,
                    );
                  if (o) {
                    let i =
                      VRHTML.VRRenderModels.GetComponentStateForDevicePath(
                        t,
                        o,
                        this.props.sDevicePath,
                      );
                    i && (e.xfTransform = i.xfTrackingToComponentLocal);
                  }
                }
              } catch (t) {
                console.log(
                  "Component transform invalid for ",
                  this.props.sDevicePath,
                );
              }
            this.state = e;
          }
          render() {
            return i.createElement(
              s.d,
              {
                id: this.props.id,
                parent_path: this.props.sDevicePath,
                transform: this.state.xfTransform,
              },
              this.props.children,
            );
          }
        }
      },
      1184: (t, e, o) => {
        var i,
          n = o(1635),
          s = o(3496),
          r = o(3236);
        !(function (t) {
          (t[(t.Disabled = 0)] = "Disabled"),
            (t[(t.WorldZeroY = 1)] = "WorldZeroY"),
            (t[(t.WorldDynamicFloor = 2)] = "WorldDynamicFloor");
        })(i || (i = {}));
        class a extends s._J {
          constructor(t) {
            super(t), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "constraint";
          }
          buildNode(t, e) {
            const o = this.createSgNode(e);
            return (
              (o.properties["projection-constraint"] =
                this.props.projection_constraint),
              [t, o]
            );
          }
        }
        (0, n.Cg)([r.o], a.prototype, "buildNode", null);
      },
      4120: (t, e, o) => {
        var i,
          n = o(1635),
          s = o(3496),
          r = o(3236);
        !(function (t) {
          (t[(t.RoomSetupFloor = 1)] = "RoomSetupFloor"),
            (t[(t.Locomotion = 2)] = "Locomotion"),
            (t[(t.QuickRecenter = 4)] = "QuickRecenter");
        })(i || (i = {}));
        class a extends s._J {
          constructor(t) {
            super(t), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "constructglobals";
          }
          buildNode(t, e) {
            const o = this.createSgNode(e);
            return (
              (o.properties["scene-color-mult"] = (0, s.kJ)(
                this.props["scene-color-mult"],
              )),
              (o.properties["floor-color-mult"] = (0, s.kJ)(
                this.props["floor-color-mult"],
              )),
              (o.properties["scene-reflection-mult"] = (0, s.kJ)(
                this.props["scene-reflection-mult"],
              )),
              (o.properties["skydome-mult"] = (0, s.kJ)(
                this.props["skydome-mult"],
              )),
              (o.properties["roomview-mult"] = (0, s.UM)(
                this.props["roomview-mult"],
              )),
              (o.properties["allowed-action-sets"] = this.props[
                "allowed-action-sets"
              ].reduce((t, e) => t | e, 0)),
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
              [t, o]
            );
          }
        }
        (0, n.Cg)([r.o], a.prototype, "buildNode", null);
      },
      9864: (t, e, o) => {
        o.d(e, { b: () => i, m: () => r });
        var i,
          n = o(6540),
          s = o(3496);
        !(function (t) {
          (t[(t.Parent = 0)] = "Parent"), (t[(t.World = 1)] = "World");
        })(i || (i = {}));
        class r extends s._J {
          constructor(t) {
            super(t);
          }
          internalRender() {
            var t;
            const e = null === (t = this.props.enabled) || void 0 === t || t,
              o = this.props.rotation_start_angle_threshold
                ? (this.props.rotation_start_angle_threshold * Math.PI) / 180
                : null,
              i = this.props.rotation_stop_angle_threshold
                ? (this.props.rotation_stop_angle_threshold * Math.PI) / 180
                : null,
              s = this.props.rotation_ease_out_angle_threshold
                ? (this.props.rotation_ease_out_angle_threshold * Math.PI) / 180
                : null,
              r = this.props.rotation_min_angular_velocity
                ? (this.props.rotation_min_angular_velocity * Math.PI) / 180
                : null,
              a = this.props.rotation_max_angular_velocity
                ? (this.props.rotation_max_angular_velocity * Math.PI) / 180
                : null;
            return n.createElement(
              "vsg-elastic-head-transform",
              {
                "rotation-start-angle-threshold": o,
                "rotation-stop-angle-threshold": i,
                "rotation-ease-in-time": this.props.rotation_ease_in_time,
                "rotation-ease-in-power": this.props.rotation_ease_in_power,
                "rotation-ease-out-angle-threshold": s,
                "rotation-ease-out-power": this.props.rotation_ease_out_power,
                "rotation-min-angular-velocity": r,
                "rotation-max-angular-velocity": a,
                "translation-start-distance-threshold":
                  this.props.translation_start_distance_threshold,
                "translation-stop-distance-threshold":
                  this.props.translation_stop_distance_threshold,
                "translation-ease-in-time": this.props.translation_ease_in_time,
                "translation-ease-in-power":
                  this.props.translation_ease_in_power,
                "translation-ease-out-distance-threshold":
                  this.props.translation_ease_out_distance_threshold,
                "translation-ease-out-power":
                  this.props.translation_ease_out_power,
                "translation-velocity": this.props.translation_velocity,
                enabled: e,
                "lock-to-horizon": this.props.lock_to_horizon,
                "translation-parent": this.props.translation_parent,
                "rotation-translation-change-together":
                  this.props.rotation_translation_change_together,
              },
              this.props.children,
            );
          }
        }
      },
      4189: (t, e, o) => {
        o.d(e, { F: () => r });
        var i = o(1635),
          n = o(3496),
          s = o(3236);
        class r extends n._J {
          constructor(t) {
            super(t), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "head-facing-transform";
          }
          buildNode(t, e) {
            var o;
            const i = this.createSgNode(e);
            return (
              (i.properties.up =
                null !== (o = this.props.up) && void 0 !== o ? o : "world"),
              [t, i]
            );
          }
        }
        (0, i.Cg)([s.o], r.prototype, "buildNode", null);
      },
      5227: (t, e, o) => {
        o.d(e, { N: () => s });
        var i = o(6540),
          n = o(3496);
        class s extends n._J {
          constructor(t) {
            super(t);
          }
          internalRender() {
            return i.createElement("vsg-line", {
              "target-id": this.props.target_id,
              thickness: this.props.thickness,
              "start-buffer": this.props.start_buffer,
              "end-buffer": this.props.end_buffer,
            });
          }
        }
      },
      1808: (t, e, o) => {
        o.d(e, { C: () => a });
        var i = o(1635),
          n = o(3496),
          s = o(7019),
          r = o(3236);
        class a extends n._J {
          constructor(t) {
            super(t),
              (this.m_latchedPosition = null),
              super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "panel-anchor";
          }
          relatch() {
            this.m_latchedPosition = null;
          }
          buildNode(t, e) {
            if (!t.currentPanel && !t.bInsideReparentedPanel)
              return [
                Object.assign(Object.assign({}, t), { bShouldAbort: !0 }),
                null,
              ];
            let o = null;
            "object" == typeof this.props.location
              ? (o = (0, n.PG)(this.props.location, { x: 0, y: 0 }))
              : "number" == typeof this.props.location &&
                (o = (0, s.Lr)(this.props.location));
            let i = this.createSgNode(e);
            if (this.props.latched && null !== this.m_latchedPosition)
              (i.properties["anchor-u"] = this.m_latchedPosition.u),
                (i.properties["anchor-v"] = this.m_latchedPosition.v);
            else if (o) {
              const e = { u: 0.5 * o.x + 0.5, v: -0.5 * o.y + 0.5 },
                n =
                  !t.currentPanel || t.currentPanel.props.overlay_key
                    ? e
                    : t.currentPanel.scaleLocalUVToGlobal(e);
              (i.properties["anchor-u"] = n.u),
                (i.properties["anchor-v"] = n.v);
            } else {
              if (!t.currentPanel)
                return [
                  Object.assign(Object.assign({}, t), { bShouldAbort: !0 }),
                  null,
                ];
              const o = e.ownerDocument,
                n = e.getBoundingClientRect(),
                s = n.left + n.width / 2,
                r = n.top + n.height / 2,
                a = t.currentPanel.m_Rect;
              if (s < a.x || s > a.x + a.width || r < a.y || r > a.y + a.height)
                return [
                  Object.assign(Object.assign({}, t), { bShouldAbort: !0 }),
                  null,
                ];
              const l = o.defaultView.innerWidth,
                p = o.defaultView.innerHeight;
              if (!(p > 0 && l > 0))
                return [
                  Object.assign(Object.assign({}, t), { bShouldAbort: !0 }),
                  null,
                ];
              (i.properties["anchor-u"] = s / l),
                (i.properties["anchor-v"] = r / p);
            }
            return (
              (this.m_latchedPosition = {
                u: i.properties["anchor-u"],
                v: i.properties["anchor-v"],
              }),
              [t, i]
            );
          }
        }
        (0, i.Cg)([r.o], a.prototype, "buildNode", null);
      },
      10: (t, e, o) => {
        o(6540);
        var i = o(3496);
        i._J;
      },
      9011: (t, e, o) => {
        var i = o(1635),
          n = o(3496),
          s = o(3236);
        class r extends n._J {
          constructor(t) {
            super(t), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "tilefloor";
          }
          buildNode(t, e) {
            var o, i, s, r, a, l, p;
            const c = this.createSgNode(e);
            if (
              ((c.properties["tile-size"] = this.props["tile-size"]),
              (c.properties["tile-gap"] = this.props["tile-gap"]),
              (c.properties["inner-radius"] = this.props["inner-radius"]),
              (c.properties["outer-radius"] = this.props["outer-radius"]),
              (c.properties["fade-distance"] =
                null === (o = this.props) || void 0 === o
                  ? void 0
                  : o["fade-distance"]),
              (c.properties["min-tile-scale-at-periphery"] =
                this.props["min-tile-scale-at-periphery"]),
              (c.properties.height = (0, n.kJ)(this.props.height)),
              (c.properties.offset = [
                null === (i = this.props.offset) || void 0 === i ? void 0 : i.x,
                null === (s = this.props.offset) || void 0 === s ? void 0 : s.y,
              ]),
              "string" == typeof this.props.color)
            )
              c.properties.color = this.props.color;
            else if (this.props.color) {
              let t = (0, n.RH)(this.props.color, { r: 0, g: 0, b: 0 });
              c.properties.color = [t.r, t.g, t.b];
            }
            return (
              (c.properties["center-randomization"] =
                null == this ? void 0 : this.props["center-randomization"]),
              this.props["luma-randomization"] &&
                ((c.properties["luma-randomization-min-gain"] =
                  this.props["luma-randomization"]["min-gain"]),
                (c.properties["luma-randomization-max-gain"] =
                  this.props["luma-randomization"]["max-gain"])),
              this.props["reflection-randomization"] &&
                ((c.properties["reflection-randomization-min-gain"] =
                  this.props["reflection-randomization"]["min-gain"]),
                (c.properties["reflection-randomization-max-gain"] =
                  this.props["reflection-randomization"]["max-gain"])),
              (c.properties["normal-randomization-degrees"] =
                null === (r = this.props) || void 0 === r
                  ? void 0
                  : r["normal-randomization-degrees"]),
              this.props.chevron &&
                ((c.properties["chevron-luma-scale"] =
                  this.props.chevron["luma-scale"]),
                (c.properties["chevron-reflection-scale"] =
                  this.props.chevron["reflection-scale"])),
              (c.properties["auto-subdivide"] =
                null === (a = this.props) || void 0 === a
                  ? void 0
                  : a["auto-subdivide"]),
              (c.properties["pedestal-height"] = (0, n.kJ)(
                this.props["pedestal-height"],
              )),
              (c.properties["pedestal-radius"] = (0, n.kJ)(
                this.props["pedestal-radius"],
              )),
              (c.properties["floor-aa-shader"] =
                null === (l = this.props) || void 0 === l
                  ? void 0
                  : l["floor-aa-shader"]),
              (c.properties["stable-fade"] =
                null === (p = this.props) || void 0 === p
                  ? void 0
                  : p["stable-fade"]),
              [t, c]
            );
          }
        }
        (0, i.Cg)([s.o], r.prototype, "buildNode", null);
      },
      111: (t, e, o) => {
        o(6540);
        var i = o(3496);
        i._J;
      },
      8803: (t, e, o) => {
        o.d(e, { ZW: () => u });
        var i = o(1635),
          n = o(7813),
          s = o(3236),
          r = o(3676);
        const a = new Map(),
          l = new Map();
        (window.protoPathProperties = l), (window.protoPathPropertyDebug = !1);
        class p {
          constructor() {
            (this.m_bIsSystemUI = !1), (0, n.makeObservable)(this);
          }
          Init(t) {
            return (0, i.sH)(this, void 0, void 0, function* () {
              (this.m_bIsSystemUI = t),
                (0, n.reaction)(
                  () => r.m.connected,
                  (t, e) => {
                    e && !t && this.OnDisconnectedFromSteam();
                  },
                );
            });
          }
          OnDisconnectedFromSteam() {
            var t;
            if (this.m_bIsSystemUI)
              for (const e of null !== (t = window.VRPathProperties) &&
              void 0 !== t
                ? t
                : [])
                e.shouldUnsetVRPathPropertyOnSteamClose() &&
                  (null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VRPathProperties.SetStringPathProperty(
                      e.getVRPathPropertyKey(),
                      "",
                    ));
          }
        }
        (0, i.Cg)([s.o], p.prototype, "OnDisconnectedFromSteam", null);
        const c = new p();
        function u(t) {
          let e;
          try {
            e = t.getVRPathPropertyKey();
            const o = t.serializeBase64String(),
              i = a.get(e);
            if (i && i == o) return;
            a.set(e, o),
              window.protoPathPropertyDebug && l.set(e, t.toObject()),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRPathProperties.SetStringPathProperty(e, o);
          } catch (t) {
            throw t;
          }
        }
        window.pathPropertyStore = c;
      },
      1278: (t, e, o) => {
        var i = o(1635),
          n = o(6540),
          s = o(5338),
          r = o(3236),
          a = o(6090),
          l = o(5802),
          p = o(3714),
          c = o(9118),
          u = o(1532),
          d = o(6138),
          h = o(1333),
          m = o(1370),
          _ = o(1835),
          g = o(7813),
          f = o(582);
        function v(t, e) {
          let o = "";
          switch (e.mode) {
            case "dpad":
            case "dpad_touch":
            case "dpad_click":
              o =
                "/input/thumbstick" == e.input_path ||
                "/input/joystick" == e.input_path
                  ? "_" + e.slot
                  : "_dpad_" + e.slot;
              break;
            case "button":
              ("/input/trackpad" != e.input_path &&
                "/input/joystick" != e.input_path) ||
                (o = "_click");
          }
          switch (e.slot) {
            case "position":
              o = "_move";
              break;
            case "scroll":
              o = "_scroll";
          }
          let i = "/dashboard/images/bindingcallouts/";
          switch (e.input_path) {
            case "/input/a":
              return i + "button_a.svg";
            case "/input/b":
              return i + "button_b.svg";
            case "/input/x":
              return i + "button_x.svg";
            case "/input/y":
              return i + "button_y.svg";
            case "/input/grip":
              return i + "button_grip.svg";
            case "/input/system":
              return i + "button_system.svg";
            case "/input/application_menu":
              return i + "button_menu.svg";
            case "/input/trackpad":
              return "knuckles" == t
                ? i + "button_trackbutton" + o + ".svg"
                : i + "button_trackpad" + o + ".svg";
            case "/input/thumbstick":
            case "/input/joystick":
              return i + "button_thumbstick" + o + ".svg";
            case "/input/trigger":
              return i + "button_trigger.svg";
          }
          return null;
        }
        function b(t) {
          switch (t) {
            case "north":
            case "south":
            case "east":
            case "west":
            case "center":
              return "dpad";
            default:
              return "button";
          }
        }
        (0, g.configure)({ enforceActions: "never" });
        class C extends n.Component {
          constructor(t) {
            super(t), (this.state = {});
          }
          renderSlot(t, e) {
            let o,
              i = v(this.props.controllerType, t);
            o = i
              ? n.createElement("img", {
                  className: "BindingCalloutIcon",
                  src: i,
                })
              : n.createElement("div", { className: "BindingCalloutIcon" });
            let s,
              r = (function (t) {
                let e = "/dashboard/images/bindingcallouts/";
                switch (t.mode) {
                  case "dpad":
                  case "dpad_click":
                    return e + "modifier_click.svg";
                  case "dpad_touch":
                    return e + "modifier_touch.svg";
                }
                switch (t.slot) {
                  case "grab":
                  case "click":
                  case "single":
                    return e + "modifier_click.svg";
                  case "double":
                    return e + "modifier_doubleclick.svg";
                  case "long":
                    return e + "modifier_long.svg";
                  case "held":
                    return e + "modifier_held.svg";
                  case "scroll":
                  case "position":
                  case "touch":
                    return e + "modifier_touch.svg";
                  case "force":
                    return e + "modifier_force.svg";
                }
                return null;
              })(t);
            return (
              (s = r
                ? n.createElement("img", {
                    className: "BindingCalloutModifierIcon",
                    src: r,
                  })
                : n.createElement("div", {
                    className: "BindingCalloutModifierIcon",
                  })),
              n.createElement(
                "div",
                { className: "BindingCalloutContents", key: e },
                o,
                s,
                n.createElement(
                  "div",
                  { className: "BindingCalloutLabelContainer" },
                  n.createElement(
                    "div",
                    { className: "Label" },
                    t.localized_action_name,
                  ),
                  n.createElement(
                    "div",
                    { className: "BindingCalloutModeSlot" },
                    this.props.localizedInputName,
                    " : ",
                    (0, p.we)("#SourceInputMode_" + t.slot),
                  ),
                ),
              )
            );
          }
          render() {
            let t,
              e = "BindingCallout";
            this.props.leftAlign
              ? ((t = -0.05), (e += " AlignCalloutRight"))
              : ((t = 0.05), (e += " AlignCalloutLeft")),
              this.props.inputActive && (e += " CalloutInputActive");
            let o =
              this.props.devicePath +
              this.props.inputCallout.input_path +
              "_component";
            return n.createElement(
              "div",
              { className: "BindingCalloutContainer" },
              n.createElement(a.mS, {
                id: o,
                sDevicePath: this.props.devicePath,
                sInputPath: this.props.inputCallout.input_path,
                key: o,
              }),
              n.createElement(
                "div",
                { className: e },
                this.props.inputCallout.slot_callouts.map((t, e) =>
                  this.renderSlot(t, String(e)),
                ),
                n.createElement(
                  "div",
                  { className: "CalloutAnchorPoint" },
                  n.createElement(
                    a.Ci,
                    null,
                    this.props.inputActive &&
                      n.createElement(a.N1, {
                        target_id: o,
                        thickness: 0.002,
                        start_buffer: 0,
                        end_buffer: 0,
                      }),
                  ),
                ),
              ),
            );
          }
        }
        class y extends n.Component {
          constructor(t) {
            super(t), (this.state = {});
          }
          render() {
            let t = [],
              e = [];
            for (let o of this.props.chordCallout.inputs) {
              let i = o.device_path + o.input_path + o.slot,
                s = {
                  device_path: o.device_path,
                  input_path: o.input_path,
                  mode: b(o.slot),
                  slot: o.slot,
                  localized_action_name:
                    this.props.chordCallout.localized_action_name,
                };
              t.length > 0 &&
                t.push(
                  n.createElement(
                    "div",
                    { className: "ChordCalloutPlus", key: "plus" + t.length },
                    "+",
                  ),
                ),
                t.push(
                  n.createElement("img", {
                    className: "BindingCalloutIcon",
                    key: i + "_icon",
                    src: v(this.props.controllerType, s),
                  }),
                ),
                e.push(
                  n.createElement(
                    "div",
                    { className: "BindingCalloutModeSlot", key: i + "_text" },
                    c.W.LocalizeControllerString(
                      this.props.controllerTypeInfo,
                      o.input_path,
                    ),
                    " : ",
                    (0, p.we)("#SourceInputMode_" + o.slot),
                  ),
                );
            }
            let o = "ChordCalloutContainer";
            return (
              this.props.inputActive && (o += " CalloutInputActive"),
              n.createElement(
                "div",
                { className: o },
                n.createElement("div", { className: "ChordCalloutHeader" }, t),
                n.createElement(
                  "div",
                  { className: "ChordCalloutBody" },
                  n.createElement(
                    "div",
                    { className: "Label" },
                    this.props.chordCallout.localized_action_name,
                  ),
                  e,
                ),
              )
            );
          }
        }
        class S extends n.Component {
          constructor(t) {
            super(t),
              (this.m_mailbox = new a._n()),
              (this.m_sMailboxName = void 0),
              (this.m_sMailboxName =
                "devicecallout/" +
                this.props.device.device_path.replace(/\//g, "_")),
              this.m_mailbox.Init(this.m_sMailboxName).then(() => {
                this.m_mailbox.RegisterHandler(
                  "input_active_state",
                  this.OnInputActiveState,
                );
                let t = {
                  type: "request_input_in_use_updates",
                  device_path: this.props.device.device_path,
                  mailbox: this.m_sMailboxName,
                };
                this.m_mailbox.SendMessage(a.mX, t);
              });
            let e = {};
            for (let t of Object.keys(this.props.device.input_callouts))
              e[t] = !1;
            this.state = { input_state: e };
          }
          OnInputActiveState(t) {
            let e = Object.assign({}, this.state.input_state);
            (e[t.input_path] = t.state), this.setState({ input_state: e });
          }
          componentWillUnmount() {
            let t = {
              type: "cancel_input_in_use_updates",
              device_path: this.props.device.device_path,
              mailbox: this.m_sMailboxName,
            };
            this.m_mailbox.SendMessage(a.mX, t);
          }
          render() {
            if (!VRHTML) return null;
            if (
              !VRHTML.VRSystem.IsDevicePathValid(this.props.device.device_path)
            )
              return null;
            let t = -0.05,
              e = { x: -0.08, y: 0.05, z: 0.12 },
              o = !0;
            "/user/hand/left" == this.props.device.device_path &&
              ((e.x = -e.x), (t = -t), (o = !1));
            let i = c.W.GetControllerTypeInfo(this.props.controllerType);
            if (!i) return null;
            let s = [],
              r = Object.keys(this.props.device.input_callouts);
            for (let t of r) {
              let e = this.props.device.input_callouts[t],
                a = (e.slot_callouts.length, t);
              i && (a = c.W.LocalizeControllerString(i, t));
              let l = i.input_source[t],
                p = 999;
              l && l.order && (p = l.order);
              let u = n.createElement(C, {
                devicePath: this.props.device.device_path,
                inputCallout: e,
                leftAlign: o,
                inputActive:
                  1 == r.length || this.state.input_state[e.input_path],
                localizedInputName: a,
                controllerType: this.props.controllerType,
                key: this.props.device.device_path + t,
              });
              s.push({ order: p, callout: u });
            }
            s.sort((t, e) => t.order - e.order);
            let l = s.map((t) => t.callout),
              p = [];
            for (let t of this.props.device.chords) {
              let e = !1;
              for (let o of t.inputs)
                e = e || this.state.input_state[o.input_path];
              p.push(
                n.createElement(y, {
                  controllerTypeInfo: i,
                  chordCallout: t,
                  controllerType: this.props.controllerType,
                  key: "chord_" + p.length,
                  inputActive: e,
                }),
              );
            }
            return n.createElement(
              a.dL,
              { parent_path: this.props.device.device_path },
              n.createElement(
                a.Nu,
                { vOffset: e },
                n.createElement(
                  a.FN,
                  null,
                  n.createElement(
                    a.dL,
                    { rotation: { y: o ? 7 : -7 } },
                    n.createElement(
                      a.dL,
                      { translation: { x: t } },
                      n.createElement(
                        a.Zk,
                        { width: 0.1, debug_name: "bindingcallouts-2" },
                        n.createElement(
                          "div",
                          { className: "FlexColumn BindingCalloutColumn" },
                          l,
                          p,
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            );
          }
        }
        (0, i.Cg)([r.o], S.prototype, "OnInputActiveState", null);
        class R extends n.Component {
          constructor(t) {
            super(t);
          }
          GenerateCalloutDirections(t) {
            switch (t) {
              case 0:
                return [];
              case 1:
                return [{ x: -0.05, y: 0.06 }];
              default: {
                let e = Math.PI / 8,
                  o = (7 * Math.PI) / 8,
                  i = [];
                for (let n = 0; n < t; n++) {
                  let s = e + ((o - e) * n) / (t - 1),
                    r = { x: -Math.cos(s), y: Math.sin(s) };
                  i.push(r);
                }
                return i;
              }
            }
          }
          ComputeActualRect(t, e) {
            return t.dir.x <= 0
              ? {
                  left: t.dir.x * e - t.size.x,
                  right: t.dir.x * e,
                  top: t.dir.y * e - t.size.y / 2,
                  bottom: t.dir.y * e + t.size.y / 2,
                }
              : {
                  left: t.dir.x * e,
                  right: t.dir.x * e + t.size.x,
                  top: t.dir.y * e - t.size.y / 2,
                  bottom: t.dir.y * e + t.size.y / 2,
                };
          }
          HasIntersection(t, e) {
            return (
              !(t.right < e.left || t.left > e.right) &&
              !(t.bottom < e.top || t.top > e.bottom)
            );
          }
          HasCollision(t, e) {
            for (let o = 0; o < t.length; o++)
              for (let i = 0; i < t.length; i++) {
                if (o == i) continue;
                let n = this.ComputeActualRect(t[o], e),
                  s = this.ComputeActualRect(t[i], e);
                if (this.HasIntersection(n, s)) return !0;
              }
            return !1;
          }
          FindDistanceThatFits(t, e, o) {
            let i = e;
            for (; this.HasCollision(t, i); ) i += o;
            return i;
          }
          render() {
            return this.props.devices
              ? n.createElement(
                  "div",
                  { className: "DeviceCalloutList" },
                  Object.keys(this.props.devices).map((t) =>
                    n.createElement(
                      "div",
                      { key: t, className: "DeviceCalloutListEntry" },
                      n.createElement(S, {
                        device: this.props.devices[t],
                        controllerType: this.props.controllerType,
                        key: t,
                      }),
                    ),
                  ),
                )
              : null;
          }
        }
        let k = class extends n.Component {
          constructor(t) {
            super(t),
              (this.m_mailbox = new a._n()),
              this.m_mailbox.Init(a.I0).then(() => {
                this.m_mailbox.RegisterHandler(
                  "request_binding_callouts",
                  this.OnRequestBindingCallouts,
                ),
                  this.m_mailbox.RegisterHandler(
                    "cancel_binding_callouts",
                    this.OnCancelBindingCallouts,
                  ),
                  this.m_mailbox.RegisterHandler(
                    "should_show_binding_callouts",
                    this.OnShouldShowBindingCallouts,
                  ),
                  this.m_mailbox.RegisterHandler(
                    "request_tutorial_callout",
                    this.OnRequestTutorialCallout,
                  );
              }),
              h.HR.Init(!1),
              (this.state = {});
          }
          GetDefaultControllerType() {
            let t = VRHTML.VRSystem.GetTrackedDeviceClasses(),
              e = t.find((t) => t.eClass == a.mo.Controller);
            return (
              e || (e = t.find((t) => t.eClass == a.mo.HMD)),
              e
                ? VRHTML.VRProperties.GetStringProperty(
                    e.unIndex,
                    a.fD.ControllerType_String,
                  )
                : null
            );
          }
          SendShouldShowBindingCalloutsResponse(t, e) {
            let o = {
              type: "should_show_binding_callouts_response",
              app_key: t.app_key,
              has_callouts: e,
            };
            this.m_mailbox.SendResponse(t, o);
          }
          OnShouldShowBindingCallouts(t) {
            let e = this.GetDefaultControllerType();
            (0, l.xM)(t.app_key)
              .then((o) => {
                let i = "legacy" == o.category,
                  n = !i;
                if (i) {
                  n =
                    o.current_binding_url[e] !=
                    (o.default_bindings && o.default_bindings[e]);
                }
                return n
                  ? (this.SendShouldShowBindingCalloutsResponse(t, !0), null)
                  : (0, l.mQ)(t.app_key, e, o.current_binding_url[e]);
              })
              .then((e) => {
                let o = !1;
                if (e.binding_config.alias_info)
                  for (let t in e.binding_config.alias_info) {
                    let i = e.binding_config.alias_info[t];
                    if (!i.hidden && i.alias_name) {
                      o = !0;
                      break;
                    }
                  }
                e.binding_config.simulated_actions &&
                  e.binding_config.simulated_actions.length > 0 &&
                  (o = !0),
                  this.SendShouldShowBindingCalloutsResponse(t, o);
              })
              .catch((e) => {
                this.SendShouldShowBindingCalloutsResponse(t, !1);
              });
          }
          OnRequestBindingCallouts(t) {
            let e,
              o = t.controller_type
                ? t.controller_type
                : this.GetDefaultControllerType();
            (0, l.xM)(t.app_key)
              .then(
                (i) => (
                  (e = i), (0, l.mQ)(t.app_key, o, e.current_binding_url[o])
                ),
              )
              .then((i) => {
                (Object.assign({}, t).controller_type = o),
                  this.ShowCallouts(t, o, e, i.binding_config);
              })
              .catch((t) => {
                console.log("Request for bindings failed: ", t);
              });
          }
          OnCancelBindingCallouts(t) {
            this.state.sAppKey == t.app_key && this.OnCloseCallouts();
          }
          OnRequestTutorialCallout(t) {
            this.setState({
              actionManifest: null,
              bindingConfig: null,
              sActionSet: null,
              sRestrictToAction: null,
              sAppKey: t.app_key,
              sControllerType: t.controller_type,
              tutorialCallout: t,
            });
          }
          IsActionSetAllowed(t, e) {
            if (t.required_options)
              for (let o of t.required_options) if (!e.options[o]) return !1;
            if (t.forbidden_options)
              for (let o of t.forbidden_options) if (e.options[o]) return !1;
            return !0;
          }
          DoesActionSetHaveBindings(t, e) {
            var o, i;
            const n =
              null ===
                (i =
                  null === (o = e.bindings) || void 0 === o
                    ? void 0
                    : o[t.name]) || void 0 === i
                ? void 0
                : i.sources;
            if (Array.isArray(n) && n.length > 0) {
              let e = !1;
              for (let o of t.actions)
                if (!o.hide_callout) {
                  e = !0;
                  break;
                }
              return e;
            }
            return !1;
          }
          DetermineDefaultActionSet(t, e) {
            for (let o of t.action_sets)
              if (
                this.IsActionSetAllowed(o, e) &&
                this.DoesActionSetHaveBindings(o, e)
              )
                return o.name;
          }
          ShowCallouts(t, e, o, i) {
            let n = null,
              s = null;
            if (t.action) {
              t: for (let e of o.action_sets)
                if (this.DoesActionSetHaveBindings(e, i))
                  for (let o of e.actions)
                    if (o.name.toUpperCase() == t.action.toUpperCase()) {
                      n = e.name;
                      break t;
                    }
              s = t.action.toUpperCase();
            } else
              n = t.action_sets
                ? t.action_sets[0]
                : this.DetermineDefaultActionSet(o, i);
            n &&
              this.setState({
                actionManifest: o,
                bindingConfig: i,
                sActionSet: n,
                sRestrictToAction: s,
                sAppKey: t.app_key,
                sControllerType: e,
              });
          }
          ComputeCalloutsForActionSet(t) {
            let e = [],
              o = this.state.bindingConfig.bindings[t.name];
            if (o && o.sources)
              for (let i of o.sources)
                if (i.inputs)
                  for (let o of Object.keys(i.inputs)) {
                    let n = i.inputs[o];
                    if (!n.output) continue;
                    if (
                      this.state.sRestrictToAction &&
                      n.output.toUpperCase() != this.state.sRestrictToAction
                    )
                      continue;
                    let s = i.path.indexOf("/input");
                    if (-1 == s) continue;
                    let r = {
                        device_path: i.path.substring(0, s),
                        input_path: i.path.substring(s),
                        mode: i.mode,
                        slot: o,
                        localized_action_name: null,
                      },
                      a = t.actions.find(
                        (t) => t.name.toUpperCase() == n.output.toUpperCase(),
                      );
                    if (a) {
                      if (a.hide_callout) continue;
                      let t = a.localized_name,
                        e =
                          this.state.bindingConfig.alias_info &&
                          this.state.bindingConfig.alias_info[a.name];
                      if (e && (e.alias_name && (t = e.alias_name), e.hidden))
                        continue;
                      r.localized_action_name = t;
                    } else if (n.output.startsWith("/simactions/")) {
                      let t = parseInt(
                          n.output.slice(n.output.lastIndexOf("/") + 1),
                        ),
                        e = this.state.bindingConfig.simulated_actions.find(
                          (e) => e.id == t,
                        );
                      if (!e) continue;
                      r.localized_action_name = e.name;
                    }
                    r.localized_action_name && e.push(r);
                  }
            return e;
          }
          ComputeChordCalloutsForActionSet(t) {
            let e = [],
              o = this.state.bindingConfig.bindings[t.name];
            if (o && o.chords)
              for (let i of o.chords) {
                if (!i.inputs || !i.output) continue;
                if (
                  this.state.sRestrictToAction &&
                  i.output.toUpperCase() != this.state.sRestrictToAction
                )
                  continue;
                let o = t.actions.find(
                  (t) => t.name.toUpperCase() == i.output.toUpperCase(),
                );
                if (!o) continue;
                let n = { inputs: [], localized_action_name: o.localized_name };
                for (let t of i.inputs) {
                  if (2 != t.length) continue;
                  let e = t[0].indexOf("/input");
                  if (-1 == e) continue;
                  let o = {
                    device_path: t[0].substring(0, e),
                    input_path: t[0].substring(e),
                    slot: t[1],
                  };
                  n.inputs.push(o);
                }
                n.inputs.length > 0 && e.push(n);
              }
            return e;
          }
          ComputeGroupedCallouts() {
            if (
              !(
                this.state.actionManifest &&
                this.state.bindingConfig &&
                this.state.sActionSet &&
                this.state.sAppKey &&
                this.state.sControllerType
              )
            )
              return {};
            let t = [],
              e = [];
            for (let o of this.state.actionManifest.action_sets)
              (o.name != this.state.sActionSet &&
                o.display_with != this.state.sActionSet) ||
                ((t = t.concat(this.ComputeCalloutsForActionSet(o))),
                (e = e.concat(this.ComputeChordCalloutsForActionSet(o))));
            return this.GroupCallouts(t, e);
          }
          GroupCallouts(t, e) {
            let o = {};
            for (let e of t) {
              let t = e.device_path.toLowerCase();
              o.hasOwnProperty(t) ||
                (o[t] = { device_path: t, input_callouts: {}, chords: [] });
              let i = o[t];
              i.input_callouts.hasOwnProperty(e.input_path) ||
                (i.input_callouts[e.input_path] = {
                  input_path: e.input_path,
                  slot_callouts: [],
                }),
                i.input_callouts[e.input_path].slot_callouts.push(e);
            }
            for (let t of e) {
              if (0 == t.inputs.length) continue;
              let e = t.inputs[0].device_path.toLowerCase(),
                i = !1;
              for (let o of t.inputs)
                if (o.device_path.toLowerCase() != e) {
                  i = !0;
                  break;
                }
              i
                ? console.log(
                    "chord is multi-device, which we don't know how to draw yet",
                    t,
                  )
                : o[e].chords.push(t);
            }
            return o;
          }
          OnSelectActionSet(t) {
            this.setState({ sActionSet: t });
          }
          OnCloseCallouts() {
            this.setState({
              actionManifest: void 0,
              bindingConfig: void 0,
              sActionSet: void 0,
              sRestrictToAction: void 0,
              sAppKey: void 0,
              sControllerType: void 0,
              tutorialCallout: void 0,
            });
          }
          renderTutorialCallout() {
            let t = {
                device_path: this.state.tutorialCallout.device_path,
                input_path: this.state.tutorialCallout.input_path,
                mode: this.state.tutorialCallout.mode,
                slot: this.state.tutorialCallout.slot,
                localized_action_name:
                  this.state.tutorialCallout.localized_action_name,
              },
              e = {
                input_path: this.state.tutorialCallout.input_path,
                slot_callouts: [t],
              },
              o = {
                device_path: this.state.tutorialCallout.device_path,
                input_callouts: {},
                chords: [],
              };
            o.input_callouts[this.state.tutorialCallout.input_path] = e;
            let i = {};
            return (
              (i[this.state.tutorialCallout.device_path] = o),
              n.createElement(R, {
                devices: i,
                controllerType: this.state.sControllerType,
              })
            );
          }
          render() {
            if (this.state.tutorialCallout) return this.renderTutorialCallout();
            let t = this.ComputeGroupedCallouts();
            if (0 == Object.keys(t).length) return null;
            let e = [];
            this.state.actionManifest.action_sets.forEach((t) => {
              if (
                this.IsActionSetAllowed(t, this.state.bindingConfig) &&
                !t.display_with &&
                this.DoesActionSetHaveBindings(t, this.state.bindingConfig)
              ) {
                let o = "ActionSetName ButtonControl";
                t.name == this.state.sActionSet && (o += " ActionSetSelected"),
                  e.push(
                    n.createElement(
                      d.$,
                      {
                        className: o,
                        onClick: () => {
                          this.OnSelectActionSet(t.name);
                        },
                        key: t.name,
                      },
                      t.localized_name,
                    ),
                  );
              }
            });
            let o = u.s.GetApp(this.state.sAppKey);
            return n.createElement(
              "div",
              { className: "CalloutTopLevelContainer" },
              !this.state.sRestrictToAction &&
                n.createElement(
                  "div",
                  { className: "CalloutActionSetDialogContainer" },
                  n.createElement(
                    a.dL,
                    { parent_path: "/user/head" },
                    n.createElement(
                      a.m$,
                      {
                        rotation_start_angle_threshold: 40,
                        rotation_stop_angle_threshold: 5,
                      },
                      n.createElement(
                        a.dL,
                        { rotation: { x: -10, y: 10, z: 0 } },
                        n.createElement(
                          a.dL,
                          {
                            translation: {
                              x: -0,
                              y: -0,
                              z: -0.85 * _.SW.dashboardDistance,
                            },
                          },
                          n.createElement(
                            a.Zk,
                            {
                              width: 0.65 * _.SW.dashboardScale,
                              interactive: !0,
                              debug_name: "bindingcallouts-1",
                            },
                            n.createElement(
                              d.W,
                              { className: "BindingCalloutActionPanel" },
                              o &&
                                n.createElement(
                                  "div",
                                  { className: "BindingCalloutAppHeader" },
                                  n.createElement("img", {
                                    className: "BindingCalloutImage",
                                    src: u.s.GetAppImageURL(this.state.sAppKey),
                                  }),
                                  n.createElement(
                                    "div",
                                    { className: "BindingCalloutTitle" },
                                    "Controller Bindings",
                                  ),
                                  n.createElement(
                                    "div",
                                    { className: "BindingCalloutConfigName" },
                                    this.state.bindingConfig.name,
                                  ),
                                ),
                              n.createElement(
                                "div",
                                { className: "BindingCalloutActionList" },
                                e,
                                n.createElement(
                                  d.$,
                                  {
                                    className: "ButtonControl CloseButton",
                                    onClick: this.OnCloseCallouts,
                                  },
                                  "Close",
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              n.createElement(R, {
                devices: t,
                controllerType: this.state.sControllerType,
              }),
            );
          }
        };
        (0, i.Cg)([r.o], k.prototype, "OnShouldShowBindingCallouts", null),
          (0, i.Cg)([r.o], k.prototype, "OnRequestBindingCallouts", null),
          (0, i.Cg)([r.o], k.prototype, "OnCancelBindingCallouts", null),
          (0, i.Cg)([r.o], k.prototype, "OnRequestTutorialCallout", null),
          (0, i.Cg)([r.o], k.prototype, "OnCloseCallouts", null),
          (k = (0, i.Cg)([m.PA], k)),
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VROverlay.SetFlag(
              VRHTML.VROverlay.ThisOverlayHandle(),
              65536,
              !0,
            ),
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VROverlay.SetInputMethod(
              VRHTML.VROverlay.ThisOverlayHandle(),
              a.Rk.Mouse,
            ),
          (0, p.uV)(
            ["bindingui"],
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.GetSteamLanguage(),
          )
            .then(() => c.W.Init())
            .then(() => u.s.Init())
            .then(() => {
              (0, f.aj)().Init("SteamVR", CLSTAMP, (0, f.d4)()),
                s
                  .H(document.getElementById("root"))
                  .render(
                    n.createElement(a.O5, null, n.createElement(k, null)),
                  );
            });
      },
    },
    o = {};
  function i(t) {
    var n = o[t];
    if (void 0 !== n) return n.exports;
    var s = (o[t] = { exports: {} });
    return e[t].call(s.exports, s, s.exports, i), s.exports;
  }
  (i.m = e),
    (t = []),
    (i.O = (e, o, n, s) => {
      if (!o) {
        var r = 1 / 0;
        for (c = 0; c < t.length; c++) {
          for (var [o, n, s] = t[c], a = !0, l = 0; l < o.length; l++)
            (!1 & s || r >= s) && Object.keys(i.O).every((t) => i.O[t](o[l]))
              ? o.splice(l--, 1)
              : ((a = !1), s < r && (r = s));
          if (a) {
            t.splice(c--, 1);
            var p = n();
            void 0 !== p && (e = p);
          }
        }
        return e;
      }
      s = s || 0;
      for (var c = t.length; c > 0 && t[c - 1][2] > s; c--) t[c] = t[c - 1];
      t[c] = [o, n, s];
    }),
    (i.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return i.d(e, { a: e }), e;
    }),
    (i.d = (t, e) => {
      for (var o in e)
        i.o(e, o) &&
          !i.o(t, o) &&
          Object.defineProperty(t, o, { enumerable: !0, get: e[o] });
    }),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (i.r = (t) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (() => {
      var t = { 241: 0, 527: 0, 500: 0 };
      i.O.j = (e) => 0 === t[e];
      var e = (e, o) => {
          var n,
            s,
            [r, a, l] = o,
            p = 0;
          if (r.some((e) => 0 !== t[e])) {
            for (n in a) i.o(a, n) && (i.m[n] = a[n]);
            if (l) var c = l(i);
          }
          for (e && e(o); p < r.length; p++)
            (s = r[p]), i.o(t, s) && t[s] && t[s][0](), (t[s] = 0);
          return i.O(c);
        },
        o = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      o.forEach(e.bind(null, 0)), (o.push = e.bind(null, o.push.bind(o)));
    })();
  var n = i.O(
    void 0,
    [967, 978, 352, 705, 948, 47, 305, 527, 500, 554, 798, 743, 366, 386, 838],
    () => i(1278),
  );
  n = i.O(n);
})(); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/bindingcallouts.js.map
