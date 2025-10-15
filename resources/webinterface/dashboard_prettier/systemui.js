var CLSTAMP = "10151575";
(() => {
  var e,
    t = {
      9256: (e) => {
        e.exports = {
          FrameMainContent: "framedevui_FrameMainContent_3yJ1O",
          DevUI: "framedevui_DevUI_2_sz9",
          DevUIFrames: "framedevui_DevUIFrames_RVL9n",
          DevUIFrame: "framedevui_DevUIFrame_3toDs",
        };
      },
      5572: (e) => {
        e.exports = {
          PersistentNotificationsContainer:
            "persistentnotifications_PersistentNotificationsContainer_1d_t7",
          TrackingDataRecordingNotification:
            "persistentnotifications_TrackingDataRecordingNotification_2E8Ek",
        };
      },
      108: (e) => {
        e.exports = {
          recordingCircle: "svg_library_recordingCircle_2ovZQ",
          AnimationFadeOutIn: "svg_library_AnimationFadeOutIn_1lEwX",
        };
      },
      9569: () => {},
      6090: (e, t, n) => {
        "use strict";
        n.d(t, {
          $: () => x.$,
          $Z: () => H.$Z,
          Ay: () => V,
          B4: () => v.B,
          CU: () => i.CU,
          Ci: () => L.C,
          Cw: () => r.C,
          Ee: () => H.Ee,
          Em: () => p.Em,
          FN: () => S.F,
          Fb: () => i.Fb,
          Fi: () => b.Fi,
          GM: () => m.GM,
          GQ: () => H.GQ,
          Gz: () => H.Gz,
          HW: () => H.HW,
          I0: () => o.I0,
          IS: () => d.I,
          JK: () => c.J,
          JZ: () => i.JZ,
          KI: () => x.KI,
          Ld: () => i.Ld,
          MQ: () => b.MQ,
          MV: () => H.MV,
          N: () => a.e,
          N1: () => C.N,
          NB: () => H.NB,
          NH: () => i.NH,
          Nu: () => M.N,
          O5: () => h.O,
          O6: () => i.O6,
          OH: () => H.OH,
          Oi: () => b.Oi,
          QB: () => i.QB,
          QR: () => x.QR,
          Qc: () => I.Q,
          R$: () => H.R$,
          Rk: () => H.Rk,
          Se: () => i.Se,
          Uj: () => i.Uj,
          Vh: () => g.V,
          Xl: () => H.Xl,
          Y4: () => l.Y,
          Yu: () => H.Yu,
          Zk: () => b.Zk,
          _$: () => I._,
          _1: () => H._1,
          _h: () => b._h,
          _n: () => o._n,
          aX: () => g.a,
          b: () => H.b,
          b$: () => k.b,
          cB: () => T.L,
          dL: () => u.d,
          e_: () => i.e_,
          en: () => x.en,
          ey: () => f.e,
          fD: () => x.fD,
          gN: () => H.gN,
          k2: () => H.k2,
          kG: () => H.kG,
          ku: () => H.ku,
          lq: () => _.l,
          m$: () => y.m,
          mS: () => E.m,
          mX: () => o.mX,
          mo: () => H.mo,
          mu: () => H.mu,
          nX: () => p.nX,
          ne: () => H.ne,
          nq: () => w.n,
          o3: () => b.o3,
          oN: () => i.oN,
          o_: () => i.o_,
          oi: () => s.o,
          p0: () => i.p0,
          pM: () => H.pM,
          pg: () => o.pg,
          qF: () => i.qF,
          rF: () => d.H,
          rx: () => H.rx,
          sJ: () => R.$,
          sk: () => o.sk,
          sn: () => o.sn,
          tx: () => i.tx,
          uC: () => D.u,
          vx: () => i.vx,
          vz: () => s.v,
        });
        var o = n(2824),
          i = n(6292),
          r = n(3389),
          s = n(4120),
          a = n(1230),
          l = n(5830),
          d = n(6186),
          u = n(3361),
          c = n(111),
          p = n(5723),
          m = n(3496),
          h = n(5178),
          v = (n(428), n(9011)),
          g = n(7350),
          _ = n(6847),
          C = n(5227),
          f = n(10),
          L = n(1808),
          b = n(7019),
          y = (n(1988), n(2527), n(9864)),
          S = n(4189),
          E = n(322),
          M = n(1977),
          R = n(6417),
          w = n(2303),
          T = n(8715),
          k = (n(4397), n(5459)),
          D = n(8472),
          I = n(1184),
          H = n(3725),
          x = n(4367);
        const V = VRHTML;
      },
      1977: (e, t, n) => {
        "use strict";
        n.d(t, { N: () => r });
        var o = n(6540),
          i = n(3496);
        class r extends i._J {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return o.createElement(
              "vsg-callout-transform",
              { offset: (0, i.j_)(this.props.vOffset) },
              this.props.children,
            );
          }
        }
      },
      322: (e, t, n) => {
        "use strict";
        n.d(t, { m: () => s });
        var o = n(6540),
          i = n(4367),
          r = n(3361);
        class s extends o.Component {
          constructor(e) {
            super(e);
            let t = {};
            if (VRHTML)
              try {
                let e = VRHTML.VRProperties.GetStringProperty(
                  this.props.sDevicePath,
                  i.fD.RenderModelName_String,
                );
                if (e) {
                  let n =
                    VRHTML.VRRenderModelsInternal.FindComponentForInputSource(
                      e,
                      this.props.sInputPath,
                    );
                  if (n) {
                    let o =
                      VRHTML.VRRenderModels.GetComponentStateForDevicePath(
                        e,
                        n,
                        this.props.sDevicePath,
                      );
                    o && (t.xfTransform = o.xfTrackingToComponentLocal);
                  }
                }
              } catch (e) {
                console.log(
                  "Component transform invalid for ",
                  this.props.sDevicePath,
                );
              }
            this.state = t;
          }
          render() {
            return o.createElement(
              r.d,
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
      1184: (e, t, n) => {
        "use strict";
        n.d(t, { Q: () => o, _: () => a });
        var o,
          i = n(1635),
          r = n(3496),
          s = n(3236);
        !(function (e) {
          (e[(e.Disabled = 0)] = "Disabled"),
            (e[(e.WorldZeroY = 1)] = "WorldZeroY"),
            (e[(e.WorldDynamicFloor = 2)] = "WorldDynamicFloor");
        })(o || (o = {}));
        class a extends r._J {
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
        (0, i.Cg)([s.o], a.prototype, "buildNode", null);
      },
      4120: (e, t, n) => {
        "use strict";
        n.d(t, { o: () => a, v: () => o });
        var o,
          i = n(1635),
          r = n(3496),
          s = n(3236);
        !(function (e) {
          (e[(e.RoomSetupFloor = 1)] = "RoomSetupFloor"),
            (e[(e.Locomotion = 2)] = "Locomotion"),
            (e[(e.QuickRecenter = 4)] = "QuickRecenter");
        })(o || (o = {}));
        class a extends r._J {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "constructglobals";
          }
          buildNode(e, t) {
            const n = this.createSgNode(t);
            return (
              (n.properties["scene-color-mult"] = (0, r.kJ)(
                this.props["scene-color-mult"],
              )),
              (n.properties["floor-color-mult"] = (0, r.kJ)(
                this.props["floor-color-mult"],
              )),
              (n.properties["scene-reflection-mult"] = (0, r.kJ)(
                this.props["scene-reflection-mult"],
              )),
              (n.properties["skydome-mult"] = (0, r.kJ)(
                this.props["skydome-mult"],
              )),
              (n.properties["roomview-mult"] = (0, r.UM)(
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
        (0, i.Cg)([s.o], a.prototype, "buildNode", null);
      },
      9864: (e, t, n) => {
        "use strict";
        n.d(t, { m: () => s });
        var o,
          i = n(6540),
          r = n(3496);
        !(function (e) {
          (e[(e.LockedToParent = 0)] = "LockedToParent"),
            (e[(e.LockedToWorld = 1)] = "LockedToWorld");
        })(o || (o = {}));
        class s extends r._J {
          constructor(e) {
            super(e);
          }
          internalRender() {
            let e = this.props.start_angle_threshold
                ? (this.props.start_angle_threshold * Math.PI) / 180
                : null,
              t = this.props.stop_angle_threshold
                ? (this.props.stop_angle_threshold * Math.PI) / 180
                : null,
              n = this.props.ease_out_angle_threshold
                ? (this.props.ease_out_angle_threshold * Math.PI) / 180
                : null,
              o = this.props.min_angular_velocity
                ? (this.props.min_angular_velocity * Math.PI) / 180
                : null,
              r = this.props.max_angular_velocity
                ? (this.props.max_angular_velocity * Math.PI) / 180
                : null;
            return i.createElement(
              "vsg-elastic-head-transform",
              {
                "start-angle-threshold": e,
                "stop-angle-threshold": t,
                "ease-in-time": this.props.ease_in_time,
                "ease-in-power": this.props.ease_in_power,
                "ease-out-angle-threshold": n,
                "ease-out-power": this.props.ease_out_power,
                "min-angular-velocity": o,
                "max-angular-velocity": r,
                "lock-to-horizon": this.props.lock_to_horizon,
                "translation-behavior": this.props.translation_behavior,
              },
              this.props.children,
            );
          }
        }
      },
      4189: (e, t, n) => {
        "use strict";
        n.d(t, { F: () => s });
        var o = n(1635),
          i = n(3496),
          r = n(3236);
        class s extends i._J {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "head-facing-transform";
          }
          buildNode(e, t) {
            var n;
            const o = this.createSgNode(t);
            return (
              (o.properties.up =
                null !== (n = this.props.up) && void 0 !== n ? n : "world"),
              [e, o]
            );
          }
        }
        (0, o.Cg)([r.o], s.prototype, "buildNode", null);
      },
      5227: (e, t, n) => {
        "use strict";
        n.d(t, { N: () => r });
        var o = n(6540),
          i = n(3496);
        class r extends i._J {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return o.createElement("vsg-line", {
              "target-id": this.props.target_id,
              thickness: this.props.thickness,
              "start-buffer": this.props.start_buffer,
              "end-buffer": this.props.end_buffer,
            });
          }
        }
      },
      7019: (e, t, n) => {
        "use strict";
        n.d(t, {
          Fi: () => s,
          Lr: () => g,
          MQ: () => r,
          Oi: () => o,
          Zk: () => _,
          _h: () => i,
          o3: () => a,
        });
        var o,
          i,
          r,
          s,
          a,
          l = n(1635),
          d = n(6540),
          u = n(3496),
          c = n(5178),
          p = n(3236),
          m = n(5723),
          h = n(7600);
        function v(e) {
          if (e) return [e.u, e.v];
        }
        function g(e) {
          switch (e) {
            case o.TopLeft:
              return { x: -1, y: 1 };
            case o.TopCenter:
              return { x: 0, y: 1 };
            case o.TopRight:
              return { x: 1, y: 1 };
            case o.CenterLeft:
              return { x: -1, y: 0 };
            case o.Center:
              return { x: 0, y: 0 };
            case o.CenterRight:
              return { x: 1, y: 0 };
            case o.BottomLeft:
              return { x: -1, y: -1 };
            case o.BottomCenter:
              return { x: 0, y: -1 };
            case o.BottomRight:
              return { x: 1, y: -1 };
          }
        }
        !(function (e) {
          (e[(e.TopLeft = 0)] = "TopLeft"),
            (e[(e.TopCenter = 1)] = "TopCenter"),
            (e[(e.TopRight = 2)] = "TopRight"),
            (e[(e.CenterLeft = 3)] = "CenterLeft"),
            (e[(e.Center = 4)] = "Center"),
            (e[(e.CenterRight = 5)] = "CenterRight"),
            (e[(e.BottomLeft = 6)] = "BottomLeft"),
            (e[(e.BottomCenter = 7)] = "BottomCenter"),
            (e[(e.BottomRight = 8)] = "BottomRight");
        })(o || (o = {})),
          (function (e) {
            (e[(e.Auto = 0)] = "Auto"), (e[(e.SingleTap = 1)] = "SingleTap");
          })(i || (i = {})),
          (function (e) {
            (e[(e.Mono = 0)] = "Mono"),
              (e[(e.Parallel = 1)] = "Parallel"),
              (e[(e.Crossed = 2)] = "Crossed"),
              (e[(e.Panorama = 3)] = "Panorama"),
              (e[(e.StackedPanorama = 4)] = "StackedPanorama");
          })(r || (r = {})),
          (function (e) {
            (e[(e.Visible = 0)] = "Visible"),
              (e[(e.SkipInSceneGraph = 1)] = "SkipInSceneGraph"),
              (e[(e.Hidden = 2)] = "Hidden"),
              (e[(e.InvisibleButIntersectable = 3)] =
                "InvisibleButIntersectable");
          })(s || (s = {})),
          (function (e) {
            (e[(e.Default = 0)] = "Default"),
              (e[(e.Disabled = 1)] = "Disabled"),
              (e[(e.Low = 2)] = "Low");
          })(a || (a = {}));
        class _ extends u._J {
          constructor(e) {
            super(e),
              (this.m_Rect = { x: 0, y: 0, width: 0, height: 0 }),
              (this.m_nEmbeddedIndex = null),
              (this.m_resizeObserver = null),
              (this.m_UVsMin = void 0),
              (this.m_UVsMax = void 0),
              (this.m_bOverdragBlocking = !1),
              (this.m_overdragBlockingElements = []);
            const t =
                void 0 !== this.props.width || void 0 !== this.props.height,
              n = void 0 !== this.props.meters_per_pixel,
              o = void 0 !== this.props.target_dpi_panel_id,
              i =
                void 0 !== this.props.rendermodel_component_device_index ||
                void 0 !== this.props.rendermodel_component_name;
            if (
              i &&
              (void 0 === this.props.rendermodel_component_device_index ||
                void 0 === this.props.rendermodel_component_name)
            )
              throw new Error(
                "Panel requires both rendermodel_component_device_index and rendermodel_component_name to be a rendermodel texture.",
              );
            const r = [t, n, o, i].filter((e) => e).length,
              s =
                "an (explicit width and/or height), an explicit meters_per_pixel, a target_panel_dpi panel ID, or a rendermodel name";
            if (0 == r)
              throw new Error(
                `Panel requires one of the following props: ${s}.`,
              );
            if (r > 1)
              throw new Error(
                `Panel cannot have more of the following of the following props: ${s}.`,
              );
            super.setBuildNodeOverride(this.buildNode);
          }
          isExternal() {
            return !!this.props.overlay_key;
          }
          getEmbeddedIndex() {
            return this.m_nEmbeddedIndex;
          }
          componentWillReceiveProps_UNSAFE() {
            _.s_bPanelsAreDirty = !0;
          }
          componentDidMount() {
            super.componentDidMount(),
              (this.m_resizeObserver = new ResizeObserver(
                this.onResizeObserved,
              )),
              this.m_resizeObserver.observe(this.getCurrentRootElement()),
              (this.m_nEmbeddedIndex = c.O.Current().addEmbeddedPanelUVs(this)),
              (_.s_bPanelsAreDirty = !0),
              this.getCurrentRootElement().addEventListener(
                "mousedown",
                this.onPanelMouseDown,
              ),
              this.forceUpdate();
          }
          onResizeObserved(e, t) {
            c.O.Current().forceLayoutUpdate();
          }
          componentWillUnmount() {
            this.m_resizeObserver &&
              (this.m_resizeObserver.disconnect(),
              (this.m_resizeObserver = null)),
              this.stopOverDragBlocking(),
              this.getCurrentRootElement().removeEventListener(
                "mousedown",
                this.onPanelMouseDown,
              ),
              (_.s_bPanelsAreDirty = !0),
              c.O.Current().removeEmbeddedPanelUVs(this),
              super.componentWillUnmount();
          }
          onPanelMouseDown() {
            this.startOverDragBlocking();
          }
          startOverDragBlocking() {
            if (this.m_bOverdragBlocking) return;
            const e = document.body.getBoundingClientRect(),
              t = this.getCurrentRootElement().getBoundingClientRect();
            this.createOverdragBlockingElement(0, 0, e.width, t.y),
              this.createOverdragBlockingElement(
                0,
                t.y + t.height,
                e.width,
                e.height - t.height - t.y,
              ),
              this.createOverdragBlockingElement(0, t.y, t.x, t.height),
              this.createOverdragBlockingElement(
                t.x + t.width,
                t.y,
                e.width - t.width - t.x,
                t.height,
              ),
              window.document.addEventListener("mouseup", this.onWindowMouseUp),
              (this.m_bOverdragBlocking = !0);
          }
          stopOverDragBlocking() {
            this.m_bOverdragBlocking &&
              (this.m_overdragBlockingElements.forEach((e) => {
                document.body.removeChild(e);
              }),
              (this.m_overdragBlockingElements = []),
              window.document.removeEventListener(
                "mouseup",
                this.onWindowMouseUp,
              ),
              (this.m_bOverdragBlocking = !1));
          }
          createOverdragBlockingElement(e, t, n, o) {
            let i = document.createElement("div");
            (i.style.position = "absolute"),
              (i.style.top = t + "px"),
              (i.style.left = e + "px"),
              (i.style.width = n + "px"),
              (i.style.height = o + "px"),
              (i.style.zIndex = "90019001"),
              this.m_overdragBlockingElements.push(i),
              document.body.appendChild(i);
          }
          onWindowMouseUp(e) {
            this.stopOverDragBlocking();
          }
          getNodeType() {
            return "panel";
          }
          get visibility() {
            var e;
            return null !== (e = this.props.visibility) && void 0 !== e
              ? e
              : s.Visible;
          }
          buildNode(e, t) {
            var n, o, i, r, a, l, d;
            if (
              !(
                this.visibility == s.Visible ||
                this.visibility == s.InvisibleButIntersectable
              )
            )
              return [e, null];
            let c = Object.assign(Object.assign({}, e), {
                bInsideReparentedPanel: !1,
                currentPanel: this,
              }),
              p = this.createSgNode(t),
              h = { x: 0, y: 0 };
            h =
              "object" == typeof this.props.origin
                ? (0, u.PG)(this.props.origin, { x: 0, y: 0 })
                : g(this.props.origin);
            const _ = this.props.overlay_key,
              C = (0, m.w5)();
            return (
              _ && _.length > 0
                ? (p.properties.key = _)
                : C
                  ? (p.properties.key = C)
                  : (p.properties.overlay_handle = (0, m.X4)()),
              (p.properties.uv_min =
                null !== (n = v(this.m_UVsMin)) && void 0 !== n ? n : void 0),
              (p.properties.uv_max =
                null !== (o = v(this.m_UVsMax)) && void 0 !== o ? o : void 0),
              (p.properties.width =
                null !== (i = this.props.width) && void 0 !== i ? i : void 0),
              (p.properties.height =
                null !== (r = this.props.height) && void 0 !== r ? r : void 0),
              (p.properties["scale-index"] =
                null !== (a = this.props.scale_index) && void 0 !== a ? a : 0),
              (p.properties["min-width"] =
                null !== (l = this.props.min_width) && void 0 !== l
                  ? l
                  : void 0),
              (p.properties["target-width-anchor-id"] = (0, m.bl)(
                this.props.target_width_anchor_id,
              )),
              (p.properties["target-dpi-panel-id"] = (0, m.bl)(
                this.props.target_dpi_panel_id,
              )),
              (p.properties["target-dpi-multiplier"] =
                this.props.target_dpi_multiplier),
              (p.properties["meters-per-pixel"] = this.props.meters_per_pixel),
              (p.properties["subview-parent-panel-key"] =
                this.props.subview_parent_panel_key),
              (p.properties.curvature = this.props.curvature),
              (p.properties["curvature-origin-id"] = (0, m.bl)(
                this.props.curvature_origin_id,
              )),
              (p.properties.spherical = this.props.spherical),
              (p.properties.interactive = this.props.interactive),
              (p.properties.scrollable = this.props.scrollable),
              (p.properties.undocked = this.props.undocked),
              (p.properties.modal = this.props.modal),
              (p.properties["requires-laser"] = this.props.requires_laser),
              (p.properties["allow-input-capture"] =
                this.props.allow_input_capture),
              (p.properties["lasermouse-filtering"] =
                null === (d = this.props) || void 0 === d
                  ? void 0
                  : d.lasermouse_filtering),
              (p.properties["hide-laser-when-clicking"] =
                this.props.hide_lasermouse_when_clicking),
              (p.properties["make-overlays-interactive-if-visible"] =
                this.props.make_overlays_interactive_if_visible),
              (p.properties["is-grab-handle"] = this.props.is_grab_handle),
              (p.properties["embedded-uv-index"] = this.m_nEmbeddedIndex),
              (p.properties.origin = (0, u.Hm)(h)),
              (p.properties.debug_name = this.props.debug_name),
              (p.properties.sampler = this.props.sampler),
              (p.properties.reflect = this.props.reflect),
              (p.properties.stereoscopy = this.props.stereoscopy),
              (p.properties.rendermodel_component_device_index =
                this.props.rendermodel_component_device_index),
              (p.properties.rendermodel_component_name =
                this.props.rendermodel_component_name),
              (p.properties["texture-id"] = (0, m.bl)(this.props.texture_id)),
              (p.properties["sort-order"] = this.props.sort_order),
              (p.properties["sort-depth-bias"] = this.props.sort_depth_bias),
              (p.properties.visibility = this.visibility),
              [c, p]
            );
          }
          scaleLocalUVToGlobal(e) {
            const t = this.m_UVsMax.u - this.m_UVsMin.u,
              n = this.m_UVsMax.v - this.m_UVsMin.v;
            return {
              u: this.m_UVsMin.u + t * e.u,
              v: this.m_UVsMin.v + n * e.v,
            };
          }
          updateLayoutValues() {
            if (this.props.overlay_key)
              return (
                (this.m_UVsMin = this.props.uv_min),
                void (this.m_UVsMax = this.props.uv_max)
              );
            this.m_Rect = this.getCurrentRootElement().getBoundingClientRect();
            let e = this.getCurrentRootElement().ownerDocument.defaultView;
            (this.m_UVsMin = {
              u: this.m_Rect.x / e.innerWidth,
              v: this.m_Rect.y / e.innerHeight,
            }),
              (this.m_UVsMax = {
                u: (this.m_Rect.x + this.m_Rect.width) / e.innerWidth,
                v: (this.m_Rect.y + this.m_Rect.height) / e.innerHeight,
              });
          }
          PanelContextValue() {
            return this;
          }
          internalRender() {
            return d.createElement(
              "vsg-node",
              {
                style: { display: this.visibility == s.Hidden ? "none" : null },
              },
              d.createElement(h.tH, null, this.props.children),
            );
          }
        }
        (_.s_bPanelsAreDirty = !1),
          (0, l.Cg)([p.o], _.prototype, "onResizeObserved", null),
          (0, l.Cg)([p.o], _.prototype, "onPanelMouseDown", null),
          (0, l.Cg)([p.o], _.prototype, "onWindowMouseUp", null),
          (0, l.Cg)([p.o], _.prototype, "buildNode", null);
      },
      1808: (e, t, n) => {
        "use strict";
        n.d(t, { C: () => a });
        var o = n(1635),
          i = n(3496),
          r = n(7019),
          s = n(3236);
        class a extends i._J {
          constructor(e) {
            super(e),
              (this.m_latchedPosition = null),
              super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "panel-anchor";
          }
          relatch() {
            this.m_latchedPosition = null;
          }
          buildNode(e, t) {
            if (!e.currentPanel && !e.bInsideReparentedPanel)
              return [
                Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                null,
              ];
            let n = null;
            "object" == typeof this.props.location
              ? (n = (0, i.PG)(this.props.location, { x: 0, y: 0 }))
              : "number" == typeof this.props.location &&
                (n = (0, r.Lr)(this.props.location));
            let o = this.createSgNode(t);
            if (this.props.latched && null !== this.m_latchedPosition)
              (o.properties["anchor-u"] = this.m_latchedPosition.u),
                (o.properties["anchor-v"] = this.m_latchedPosition.v);
            else if (n) {
              const t = { u: 0.5 * n.x + 0.5, v: -0.5 * n.y + 0.5 },
                i =
                  !e.currentPanel || e.currentPanel.props.overlay_key
                    ? t
                    : e.currentPanel.scaleLocalUVToGlobal(t);
              (o.properties["anchor-u"] = i.u),
                (o.properties["anchor-v"] = i.v);
            } else {
              if (!e.currentPanel)
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              const n = t.ownerDocument,
                i = t.getBoundingClientRect(),
                r = i.left + i.width / 2,
                s = i.top + i.height / 2,
                a = e.currentPanel.m_Rect;
              if (r < a.x || r > a.x + a.width || s < a.y || s > a.y + a.height)
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              const l = n.defaultView.innerWidth,
                d = n.defaultView.innerHeight;
              if (!(d > 0 && l > 0))
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              (o.properties["anchor-u"] = r / l),
                (o.properties["anchor-v"] = s / d);
            }
            return (
              (this.m_latchedPosition = {
                u: o.properties["anchor-u"],
                v: o.properties["anchor-v"],
              }),
              [e, o]
            );
          }
        }
        (0, o.Cg)([s.o], a.prototype, "buildNode", null);
      },
      10: (e, t, n) => {
        "use strict";
        n.d(t, { e: () => r });
        var o = n(6540),
          i = n(3496);
        class r extends i._J {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return o.createElement(
              "vsg-pin-to-view-transform",
              {
                "offscreen-z-depth": this.props.fOffscreenZDepth,
                "off-axis-limit": this.props.fOffAxisLimit,
                "transition-limit": this.props.fTransitionLimit,
              },
              this.props.children,
            );
          }
        }
      },
      8313: (e, t, n) => {
        "use strict";
        n.d(t, {
          $6: () => u,
          Fv: () => o,
          VJ: () => c,
          pF: () => a,
          rm: () => d,
        });
        var o,
          i = n(1635),
          r = n(3496),
          s = n(3236);
        class a extends r._J {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "playspace-floorheight-adjust";
          }
          buildNode(e, t) {
            var n, o, i, r, s, a, l, d, u, c, p, m, h;
            const v = this.createSgNode(t);
            return (
              (v.properties["target-id"] = this.props.target_id),
              (v.properties["head-interaction-radius"] =
                null === (n = this.props) || void 0 === n
                  ? void 0
                  : n.head_interaction_radius),
              (v.properties["inactive-alpha-scale"] =
                null === (o = this.props) || void 0 === o
                  ? void 0
                  : o.inactive_alpha_scale),
              (v.properties["axis-radius"] =
                null === (i = this.props) || void 0 === i
                  ? void 0
                  : i.axis_radius),
              (v.properties["axis-color-hsv"] =
                null === (r = this.props) || void 0 === r
                  ? void 0
                  : r.axis_color_hsv),
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
                null === (c = this.props) || void 0 === c
                  ? void 0
                  : c.rings_color_hsv),
              (v.properties["rings-hue-amplitude"] =
                null === (p = this.props) || void 0 === p
                  ? void 0
                  : p.rings_hue_amplitude),
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
        (0, i.Cg)([s.o], a.prototype, "buildNode", null);
        class l extends r._J {
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
          })(o || (o = {}));
        class d extends r._J {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "playspace-draw-interaction";
          }
          buildNode(e, t) {
            var n, o;
            const i = this.createSgNode(t);
            return (
              (i.properties["target-id"] = this.props.target_id),
              (i.properties["radius-range"] =
                null === (n = this.props) || void 0 === n
                  ? void 0
                  : n.radius_range),
              (i.properties["center-selection-radius"] =
                null === (o = this.props) || void 0 === o
                  ? void 0
                  : o.center_selection_radius),
              [e, i]
            );
          }
        }
        (0, i.Cg)([s.o], d.prototype, "buildNode", null);
        class u extends r._J {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "playspace-outline";
          }
          buildNode(e, t) {
            var n, o, i, r, s, a, l, d;
            const u = this.createSgNode(t);
            return (
              (u.properties["generic-geo"] =
                null === (n = this.props) || void 0 === n
                  ? void 0
                  : n["generic-geo"]),
              (u.properties["hue-amplitude"] =
                null === (o = this.props) || void 0 === o
                  ? void 0
                  : o["hue-amplitude"]),
              (u.properties["hue-speed"] =
                null === (i = this.props) || void 0 === i
                  ? void 0
                  : i["hue-speed"]),
              (u.properties["center-dot-radius"] =
                null === (r = this.props) || void 0 === r
                  ? void 0
                  : r["center-dot-radius"]),
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
        (0, i.Cg)([s.o], u.prototype, "buildNode", null);
        class c extends r._J {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "playspace-dots";
          }
          buildNode(e, t) {
            var n, o, i, r, s, a, l, d, u;
            const c = this.createSgNode(t);
            return (
              (c.properties["tile-size"] =
                null === (n = this.props) || void 0 === n
                  ? void 0
                  : n["tile-size"]),
              (c.properties["max-radius"] =
                null === (o = this.props) || void 0 === o
                  ? void 0
                  : o["max-radius"]),
              (c.properties["min-radius"] =
                null === (i = this.props) || void 0 === i
                  ? void 0
                  : i["min-radius"]),
              (c.properties["max-radius-fade"] =
                null === (r = this.props) || void 0 === r
                  ? void 0
                  : r["max-radius-fade"]),
              (c.properties["min-radius-fade"] =
                null === (s = this.props) || void 0 === s
                  ? void 0
                  : s["min-radius-fade"]),
              (c.properties["dot-half-size"] =
                null === (a = this.props) || void 0 === a
                  ? void 0
                  : a["dot-half-size"]),
              (c.properties["center-randomization"] =
                null === (l = this.props) || void 0 === l
                  ? void 0
                  : l["center-randomization"]),
              (c.properties["color-hsv"] =
                null === (d = this.props) || void 0 === d
                  ? void 0
                  : d["color-hsv"]),
              (c.properties["clip-to-playspace"] =
                null === (u = this.props) || void 0 === u
                  ? void 0
                  : u["clip-to-playspace"]),
              [e, c]
            );
          }
        }
        (0, i.Cg)([s.o], c.prototype, "buildNode", null);
      },
      5178: (e, t, n) => {
        "use strict";
        n.d(t, { O: () => d });
        var o,
          i = n(1635),
          r = n(6540),
          s = n(7019),
          a = n(3236),
          l = n(5723);
        !(function (e) {
          (e[(e.Canvas = 0)] = "Canvas"), (e[(e.Image = 1)] = "Image");
        })(o || (o = {}));
        class d extends r.Component {
          static get IsSceneGraphApp() {
            return null !== d.Current();
          }
          static Current() {
            return d.s_Current;
          }
          constructor(e) {
            var t;
            super(e),
              (this.m_DomRef = null),
              (this.m_scalingDomRef = null),
              (this.m_DebugPointerRef = null),
              (this.m_Observer = null),
              (this.m_nEmbeddedDataWidth = 0),
              (this.m_mapPanels = new Map()),
              (this.m_rAvailableEmbeddedIndicesQueue = []),
              (this.m_rEmbeddedIndicesToClear = []),
              (this.m_fCurrentScale = 1),
              (this.m_CanvasRef = null),
              (this.m_CanvasContext = null),
              (this.m_Pixels = null),
              (this.m_nDirtyXMin = -1),
              (this.m_nDirtyXMax = -1),
              (this.m_EmbeddedDataImgRef = null),
              (this.m_EmbeddedDataImgRGBBuffer = null),
              (d.s_Current = this),
              (this.state = {
                bFontsLoaded: !1,
                nForcedUpdateNumber: 0,
                bShowDebugPointer: !1,
                eRenderMode: (
                  null === (t = VRHTML.VRUtil) || void 0 === t
                    ? void 0
                    : t.BSupportsCEFCanvas()
                )
                  ? o.Canvas
                  : o.Image,
              }),
              (this.m_DomRef = r.createRef()),
              (this.m_scalingDomRef = r.createRef()),
              (this.m_CanvasRef = r.createRef()),
              (this.m_EmbeddedDataImgRef = r.createRef()),
              (this.m_DebugPointerRef = r.createRef());
          }
          toggleDebugPointer() {
            this.setState({ bShowDebugPointer: !this.state.bShowDebugPointer });
          }
          onMouseMove(e) {
            this.state.bShowDebugPointer &&
              this.m_DebugPointerRef.current &&
              (this.m_DebugPointerRef.current.style.transform =
                "translateX( " +
                e.clientX +
                "px ) translateY( " +
                e.clientY +
                "px )");
          }
          forceLayoutUpdate() {
            (s.Zk.s_bPanelsAreDirty = !0),
              this.setState({
                nForcedUpdateNumber: this.state.nForcedUpdateNumber + 1,
              });
          }
          componentDidMount() {
            let e = this.m_DomRef.current.ownerDocument,
              t = e.defaultView;
            e.body.classList.add("SGApp"),
              document.documentElement.classList.add("VROverlay"),
              (this.m_nEmbeddedDataWidth = t.innerWidth);
            let n = Math.max(
              0,
              Math.floor((this.m_nEmbeddedDataWidth - 1) / 3),
            );
            for (let e = 0; e < n; e++)
              this.m_rAvailableEmbeddedIndicesQueue.push(e);
            e.addEventListener("mousemove", this.onMouseMove),
              (this.m_Observer = new MutationObserver(this.onMutation)),
              this.m_Observer.observe(this.m_DomRef.current, {
                attributes: !0,
                attributeFilter: ["sg-forced-update-number", "overlay-key"],
                childList: !0,
                subtree: !0,
              }),
              this.createEmbeddedData(),
              t.addEventListener("load", this.forceLayoutUpdate),
              e.fonts.ready.then(() => this.setState({ bFontsLoaded: !0 })),
              (t.forceLayoutUpdate = this.forceLayoutUpdate),
              (t.toggleDebugPointer = this.toggleDebugPointer),
              (this.props.owning_overlay_key || this.props.web_secret) &&
                (0, l.Oe)(
                  this.props.owning_overlay_key,
                  this.m_DomRef.current,
                  this.props.web_secret,
                );
          }
          componentWillUnmount() {
            let e = this.m_DomRef.current.ownerDocument;
            e.body.classList.remove("SGApp"),
              document.documentElement.classList.remove("VROverlay"),
              this.m_Observer && this.m_Observer.disconnect(),
              e.removeEventListener("mousemove", this.onMouseMove);
          }
          render() {
            const e = this.state.eRenderMode == o.Image,
              t = this.state.eRenderMode == o.Canvas;
            let n = [];
            return (
              this.state.bShowDebugPointer && n.push("ShowDebugPointer"),
              r.createElement(
                "vsg-app",
                {
                  class: n.join(" "),
                  ref: this.m_DomRef,
                  "sg-forced-update-number": this.state.nForcedUpdateNumber,
                },
                r.createElement("div", {
                  className: "DebugPointer",
                  ref: this.m_DebugPointerRef,
                }),
                e &&
                  r.createElement("img", {
                    ref: this.m_EmbeddedDataImgRef,
                    className: "EmbeddedData",
                    height: d.k_EmbeddedDataRows,
                  }),
                t &&
                  r.createElement("canvas", {
                    ref: this.m_CanvasRef,
                    className: "EmbeddedData",
                    height: d.k_EmbeddedDataRows,
                  }),
                r.createElement(
                  "div",
                  { className: "AppSceneGraph", ref: this.m_scalingDomRef },
                  this.state.bFontsLoaded && this.props.children,
                ),
              )
            );
          }
          addEmbeddedPanelUVs(e) {
            return 0 === this.m_rAvailableEmbeddedIndicesQueue.length
              ? null
              : (this.m_mapPanels.set(e.getSGID(), e),
                this.m_rAvailableEmbeddedIndicesQueue.shift());
          }
          removeEmbeddedPanelUVs(e) {
            this.m_mapPanels.has(e.getSGID()) &&
              (this.m_mapPanels.delete(e.getSGID()),
              this.m_rAvailableEmbeddedIndicesQueue.push(e.getEmbeddedIndex()),
              this.m_rEmbeddedIndicesToClear.push(e.getEmbeddedIndex()));
          }
          onMutation(e, t) {
            this.updateAllPanelBounds();
          }
          createEmbeddedData() {
            var e;
            this.state.eRenderMode == o.Image
              ? ((this.m_EmbeddedDataImgRef.current.width =
                  this.m_nEmbeddedDataWidth),
                this.m_EmbeddedDataImgRGBBuffer ||
                  (this.m_EmbeddedDataImgRGBBuffer =
                    null === (e = VRHTML.VRUtil) || void 0 === e
                      ? void 0
                      : e.CreateEmbeddedRGBScanline(
                          this.m_nEmbeddedDataWidth,
                          1,
                          4,
                        )))
              : this.state.eRenderMode == o.Canvas &&
                ((this.m_CanvasRef.current.width = this.m_nEmbeddedDataWidth),
                (this.m_CanvasContext =
                  this.m_CanvasRef.current.getContext("2d")),
                (this.m_CanvasContext.globalCompositeOperation = "copy"),
                (this.m_CanvasContext.imageSmoothingEnabled = !1),
                null === this.m_Pixels &&
                  (this.m_Pixels = this.m_CanvasContext.createImageData(
                    this.m_nEmbeddedDataWidth,
                    d.k_EmbeddedDataRows,
                  ))),
              this.updateAllPanelBounds();
          }
          updateAllPanelBounds() {
            let e = this.m_DomRef.current.ownerDocument.defaultView,
              t = this.m_scalingDomRef.current.getBoundingClientRect(),
              n = t.width / this.m_fCurrentScale,
              o = t.height / this.m_fCurrentScale,
              i = { x: e.innerWidth / n, y: e.innerHeight / o },
              r = Math.min(i.x, i.y, 1);
            r != this.m_fCurrentScale &&
              (1 != r
                ? this.m_scalingDomRef.current.setAttribute(
                    "style",
                    "transform: scale(" + r + "); transform-origin: top left",
                  )
                : this.m_scalingDomRef.current.removeAttribute("style"),
              (this.m_fCurrentScale = r),
              (s.Zk.s_bPanelsAreDirty = !0)),
              s.Zk.s_bPanelsAreDirty &&
                (this.m_mapPanels.forEach((e) => e.updateLayoutValues()),
                (0, l.my)(),
                (s.Zk.s_bPanelsAreDirty = !1),
                this.updateEmbeddedData());
          }
          updateEmbeddedData() {
            var e;
            if (!this.m_EmbeddedDataImgRef && !this.m_CanvasRef) return;
            this.setPixel(
              0,
              "V".charCodeAt(0),
              "S".charCodeAt(0),
              "G".charCodeAt(0),
            ),
              this.m_rEmbeddedIndicesToClear.forEach((e) => {
                let t = 1 + 3 * e;
                for (let e = 0; e < 3; e++) this.setPixel(t + e, 0, 0, 0, 0);
              }),
              (this.m_rEmbeddedIndicesToClear = []);
            if (
              (this.m_mapPanels.forEach((e, t) => {
                const n = e.m_Rect.x,
                  o = e.m_Rect.x + e.m_Rect.width,
                  i = e.m_Rect.y,
                  r = e.m_Rect.y + e.m_Rect.height,
                  s = e.getEmbeddedIndex(),
                  a = 1 + 3 * s;
                let l = [0, 0, 0, 0, 0, 0, 0, 0, 0],
                  d = !1;
                if (e.isExternal() || n >= o || i >= r)
                  for (let e = 0; e < 3; e++) this.setPixel(a + 1, 0, 0, 0, 0);
                else
                  (d = !0),
                    (l[0] = (65280 & n) >> 8),
                    (l[1] = 255 & n),
                    (l[2] = 254),
                    (l[3] = (65280 & o) >> 8),
                    (l[4] = 255 & o),
                    (l[5] = 255 & i),
                    (l[6] = (65280 & r) >> 8),
                    (l[7] = 255 & r),
                    (l[8] = (65280 & i) >> 8),
                    this.setPixel(a, l[0], l[1], l[2]),
                    this.setPixel(a + 1, l[3], l[4], l[5]),
                    this.setPixel(a + 2, l[6], l[7], l[8]);
              }),
              this.m_EmbeddedDataImgRef && this.state.eRenderMode == o.Image)
            ) {
              const t =
                null === (e = VRHTML.VRUtil) || void 0 === e
                  ? void 0
                  : e.GetEmbeddedScanlineAsURIImage(
                      this.m_nEmbeddedDataWidth,
                      1,
                      4,
                    );
              this.m_EmbeddedDataImgRef.current.src = t;
            } else if (this.m_CanvasRef && this.state.eRenderMode == o.Canvas) {
              let e = this.m_nDirtyXMax - this.m_nDirtyXMin + 1;
              this.m_CanvasContext.putImageData(
                this.m_Pixels,
                0,
                0,
                this.m_nDirtyXMin,
                0,
                e,
                this.m_Pixels.height,
              ),
                (this.m_nDirtyXMin = -1),
                (this.m_nDirtyXMax = -1);
            }
          }
          setPixel(e, t, n, i, r = 255) {
            if (
              this.m_EmbeddedDataImgRGBBuffer &&
              this.state.eRenderMode == o.Image
            ) {
              const o = new DataView(this.m_EmbeddedDataImgRGBBuffer);
              o.setUint8(4 * e + 0, t),
                o.setUint8(4 * e + 1, n),
                o.setUint8(4 * e + 2, i),
                o.setUint8(4 * e + 3, r);
            } else
              this.m_Pixels &&
                this.state.eRenderMode == o.Canvas &&
                ((this.m_Pixels.data[4 * e + 0] = t),
                (this.m_Pixels.data[4 * e + 1] = n),
                (this.m_Pixels.data[4 * e + 2] = i),
                (this.m_Pixels.data[4 * e + 3] = r),
                (-1 === this.m_nDirtyXMin || e < this.m_nDirtyXMin) &&
                  (this.m_nDirtyXMin = e),
                (-1 === this.m_nDirtyXMax || e > this.m_nDirtyXMax) &&
                  (this.m_nDirtyXMax = e));
          }
        }
        (d.s_Current = null),
          (d.k_EmbeddedDataRows = 1),
          (0, i.Cg)([a.o], d.prototype, "toggleDebugPointer", null),
          (0, i.Cg)([a.o], d.prototype, "onMouseMove", null),
          (0, i.Cg)([a.o], d.prototype, "forceLayoutUpdate", null),
          (0, i.Cg)([a.o], d.prototype, "onMutation", null);
      },
      9011: (e, t, n) => {
        "use strict";
        n.d(t, { B: () => s });
        var o = n(1635),
          i = n(3496),
          r = n(3236);
        class s extends i._J {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "tilefloor";
          }
          buildNode(e, t) {
            var n, o, r, s, a, l, d;
            const u = this.createSgNode(t);
            if (
              ((u.properties["tile-size"] = this.props["tile-size"]),
              (u.properties["tile-gap"] = this.props["tile-gap"]),
              (u.properties["inner-radius"] = this.props["inner-radius"]),
              (u.properties["outer-radius"] = this.props["outer-radius"]),
              (u.properties["fade-distance"] =
                null === (n = this.props) || void 0 === n
                  ? void 0
                  : n["fade-distance"]),
              (u.properties["min-tile-scale-at-periphery"] =
                this.props["min-tile-scale-at-periphery"]),
              (u.properties.height = (0, i.kJ)(this.props.height)),
              (u.properties.offset = [
                null === (o = this.props.offset) || void 0 === o ? void 0 : o.x,
                null === (r = this.props.offset) || void 0 === r ? void 0 : r.y,
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
                null === (a = this.props) || void 0 === a
                  ? void 0
                  : a["auto-subdivide"]),
              (u.properties["pedestal-height"] = (0, i.kJ)(
                this.props["pedestal-height"],
              )),
              (u.properties["pedestal-radius"] = (0, i.kJ)(
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
        (0, o.Cg)([r.o], s.prototype, "buildNode", null);
      },
      111: (e, t, n) => {
        "use strict";
        n.d(t, { J: () => r });
        var o = n(6540),
          i = n(3496);
        class r extends i._J {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return o.createElement(
              "vsg-tracking-state-visibility",
              {
                "visible-0dof": this.props.visibleIn0DOF,
                "visible-3dof": this.props.visibleIn3DOF,
                "visible-6dof": this.props.visibleIn6DOF,
              },
              this.props.children,
            );
          }
        }
      },
      3725: (e, t, n) => {
        "use strict";
        var o, i, r, s;
        function a() {
          var e;
          return null !==
            (e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.Environment()) && void 0 !== e
            ? e
            : o.Unknown;
        }
        n.d(t, {
          $Z: () => c,
          Ee: () => S,
          GQ: () => x,
          Gz: () => d,
          HW: () => C,
          MV: () => r,
          NB: () => h,
          OH: () => o,
          R$: () => a,
          Rk: () => v,
          Xl: () => L,
          Yu: () => E,
          _1: () => I,
          _E: () => l,
          b: () => b,
          gN: () => M,
          k2: () => T,
          kG: () => R,
          ku: () => m,
          mo: () => g,
          mu: () => s,
          ne: () => u,
          pM: () => i,
          rx: () => k,
        }),
          (function (e) {
            (e[(e.Desktop = 1)] = "Desktop"),
              (e[(e.Overlay = 2)] = "Overlay"),
              (e[(e.Unknown = 100)] = "Unknown");
          })(o || (o = {})),
          window.hasOwnProperty("VRHTML") || (window.VRHTML = null),
          (function (e) {
            (e[(e.Auto = 0)] = "Auto"),
              (e[(e.Low = 1)] = "Low"),
              (e[(e.Medium = 2)] = "Medium"),
              (e[(e.High = 3)] = "High");
          })(i || (i = {})),
          (function (e) {
            (e[(e.TrackingResult_Uninitialized = 1)] =
              "TrackingResult_Uninitialized"),
              (e[(e.TrackingResult_Calibrating_InProgress = 100)] =
                "TrackingResult_Calibrating_InProgress"),
              (e[(e.TrackingResult_Calibrating_OutOfRange = 101)] =
                "TrackingResult_Calibrating_OutOfRange"),
              (e[(e.TrackingResult_Running_OK = 200)] =
                "TrackingResult_Running_OK"),
              (e[(e.TrackingResult_Running_OutOfRange = 201)] =
                "TrackingResult_Running_OutOfRange"),
              (e[(e.TrackingResult_Fallback_RotationOnly = 300)] =
                "TrackingResult_Fallback_RotationOnly");
          })(r || (r = {})),
          (function (e) {
            (e[(e.Seated = 0)] = "Seated"),
              (e[(e.Standing = 1)] = "Standing"),
              (e[(e.RawAndUncalibrated = 2)] = "RawAndUncalibrated");
          })(s || (s = {}));
        let l = 0,
          d = 0,
          u = 4294967295;
        var c, p, m, h, v, g, _, C, f, L, b, y, S, E, M, R, w, T, k, D, I, H, x;
        !(function (e) {
          (e[(e.Invalid = 0)] = "Invalid"),
            (e[(e.RecenterCountdown = 1)] = "RecenterCountdown"),
            (e[(e.FloorAdjustExisting = 2)] = "FloorAdjustExisting"),
            (e[(e.RoomSetupFloor = 3)] = "RoomSetupFloor"),
            (e[(e.ClearRoomSetup = 4)] = "ClearRoomSetup");
        })(c || (c = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.Shown = 1)] = "Shown"),
              (e[(e.Hidden = 2)] = "Hidden"),
              (e[(e.Exposed = 3)] = "Exposed"),
              (e[(e.Moved = 4)] = "Moved"),
              (e[(e.Resized = 5)] = "Resized"),
              (e[(e.SizeChanged = 6)] = "SizeChanged"),
              (e[(e.Minimized = 7)] = "Minimized"),
              (e[(e.Maximized = 8)] = "Maximized"),
              (e[(e.Restored = 9)] = "Restored"),
              (e[(e.Enter = 10)] = "Enter"),
              (e[(e.Leave = 11)] = "Leave"),
              (e[(e.FocusGained = 12)] = "FocusGained"),
              (e[(e.FocusLost = 13)] = "FocusLost"),
              (e[(e.Close = 14)] = "Close"),
              (e[(e.TakeFocus = 15)] = "TakeFocus"),
              (e[(e.HitTest = 16)] = "HitTest");
          })(p || (p = {})),
          (function (e) {
            (e[(e.Activated = 0)] = "Activated"),
              (e[(e.Deactivated = 1)] = "Deactivated");
          })(m || (m = {})),
          (function (e) {
            (e[(e.NoDashboardTab = 8)] = "NoDashboardTab"),
              (e[(e.AcceptsGamepadEvents = 16)] = "AcceptsGamepadEvents"),
              (e[(e.ShowGamepadFocus = 32)] = "ShowGamepadFocus"),
              (e[(e.SendVRDiscreteScrollEvents = 64)] =
                "SendVRDiscreteScrollEvents"),
              (e[(e.SendVRTouchpadEvents = 128)] = "SendVRTouchpadEvents"),
              (e[(e.ShowTouchPadScrollWheel = 256)] =
                "ShowTouchPadScrollWheel"),
              (e[(e.TransferOwnershipToInternalProcess = 512)] =
                "TransferOwnershipToInternalProcess"),
              (e[(e.SideBySide_Parallel = 1024)] = "SideBySide_Parallel"),
              (e[(e.SideBySide_Crossed = 2048)] = "SideBySide_Crossed"),
              (e[(e.Panorama = 4096)] = "Panorama"),
              (e[(e.StereoPanorama = 8192)] = "StereoPanorama"),
              (e[(e.SortWithNonSceneOverlays = 16384)] =
                "SortWithNonSceneOverlays"),
              (e[(e.VisibleInDashboard = 32768)] = "VisibleInDashboard"),
              (e[(e.MakeOverlaysInteractiveIfVisible = 65536)] =
                "MakeOverlaysInteractiveIfVisible"),
              (e[(e.SendVRSmoothScrollEvents = 131072)] =
                "SendVRSmoothScrollEvents"),
              (e[(e.ProtectedContent = 262144)] = "ProtectedContent"),
              (e[(e.HideLaserIntersection = 524288)] = "HideLaserIntersection"),
              (e[(e.WantsModalBehavior = 1048576)] = "WantsModalBehavior"),
              (e[(e.IsPremultiplied = 2097152)] = "IsPremultiplied"),
              (e[(e.IgnoreTextureAlpha = 4194304)] = "IgnoreTextureAlpha"),
              (e[(e.EnableControlBarKeyboard = 16777216)] =
                "EnableControlBarKeyboard"),
              (e[(e.EnableControlBarClose = 33554432)] =
                "EnableControlBarClose"),
              (e[(e.MinimalControlBar = 67108864)] = "MinimalControlBar"),
              (e[(e.EnableClickStabilization = 134217728)] =
                "EnableClickStabilization"),
              (e[(e.MultiCursor = 268435456)] = "MultiCursor");
          })(h || (h = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"), (e[(e.Mouse = 1)] = "Mouse");
          })(v || (v = {})),
          (function (e) {
            (e[(e.Invalid = 0)] = "Invalid"),
              (e[(e.HMD = 1)] = "HMD"),
              (e[(e.Controller = 2)] = "Controller"),
              (e[(e.GenericTracker = 3)] = "GenericTracker"),
              (e[(e.TrackingReference = 4)] = "TrackingReference"),
              (e[(e.DisplayRedirect = 5)] = "DisplayRedirect");
          })(g || (g = {})),
          (function (e) {
            (e[(e.Unknown = 0)] = "Unknown"),
              (e[(e.NVIDIA = 1)] = "NVIDIA"),
              (e[(e.AMD = 2)] = "AMD");
          })(_ || (_ = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.Starting = 1)] = "Starting"),
              (e[(e.Quitting = 2)] = "Quitting"),
              (e[(e.Running = 3)] = "Running"),
              (e[(e.Waiting = 4)] = "Waiting");
          })(C || (C = {})),
          (function (e) {
            (e[(e.ButtonPress_0 = 0)] = "ButtonPress_0"),
              (e[(e.ButtonPress_1 = 1)] = "ButtonPress_1"),
              (e[(e.ButtonPress_2 = 2)] = "ButtonPress_2"),
              (e[(e.ButtonPress_3 = 3)] = "ButtonPress_3"),
              (e[(e.CouldntFindSystemOverlay = 4)] =
                "CouldntFindSystemOverlay"),
              (e[(e.CouldntFindOrCreateClientOverlay = 5)] =
                "CouldntFindOrCreateClientOverlay"),
              (e[(e.ApplicationQuit = 6)] = "ApplicationQuit");
          })(f || (f = {})),
          (function (e) {
            (e[(e.Normal = 0)] = "Normal"),
              (e[(e.Password = 1)] = "Password"),
              (e[(e.Submit = 2)] = "Submit");
          })(L || (L = {})),
          (function (e) {
            (e[(e.SingleLine = 0)] = "SingleLine"),
              (e[(e.MultipleLines = 1)] = "MultipleLines");
          })(b || (b = {})),
          (function (e) {
            (e[(e.LaserMouse = 1)] = "LaserMouse"),
              (e[(e.Keyboard = 2)] = "Keyboard"),
              (e[(e.RoomView = 4)] = "RoomView"),
              (e[(e.DisplaySuppressed = 8)] = "DisplaySuppressed"),
              (e[(e.SystemButtonDown = 16)] = "SystemButtonDown"),
              (e[(e.DriverIsDrawingControllers = 32)] =
                "DriverIsDrawingControllers"),
              (e[(e.DriverRequestsApplicationPause = 64)] =
                "DriverRequestsApplicationPause"),
              (e[(e.DriverRequestsReducedRendering = 128)] =
                "DriverRequestsReducedRendering");
          })(y || (y = {})),
          (function (e) {
            (e[(e.BULK_DEFAULT = 0)] = "BULK_DEFAULT"),
              (e[(e.BULK_64K_DMA = 1)] = "BULK_64K_DMA"),
              (e[(e.BULK_16K_DMA = 2)] = "BULK_16K_DMA"),
              (e[(e.BULK_8K_DMA = 3)] = "BULK_8K_DMA"),
              (e[(e.ISO_52FPS = 4)] = "ISO_52FPS"),
              (e[(e.ISO_50FPS = 5)] = "ISO_50FPS"),
              (e[(e.ISO_48FPS = 6)] = "ISO_48FPS"),
              (e[(e.ISO_46FPS = 7)] = "ISO_46FPS"),
              (e[(e.ISO_44FPS = 8)] = "ISO_44FPS"),
              (e[(e.ISO_42FPS = 9)] = "ISO_42FPS"),
              (e[(e.ISO_40FPS = 10)] = "ISO_40FPS"),
              (e[(e.ISO_35FPS = 11)] = "ISO_35FPS"),
              (e[(e.ISO_30FPS = 12)] = "ISO_30FPS"),
              (e[(e.ISO_15FPS = 13)] = "ISO_15FPS"),
              (e[(e.MAX_CAMERA_COMPAT_MODES = 14)] = "MAX_CAMERA_COMPAT_MODES");
          })(S || (S = {})),
          (function (e) {
            (e[(e.ECameraExposure_Unknown = 0)] = "ECameraExposure_Unknown"),
              (e[(e.ECameraExposure_Nominal = 1)] = "ECameraExposure_Nominal"),
              (e[(e.ECameraExposure_HighExposure = 2)] =
                "ECameraExposure_HighExposure");
          })(E || (E = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.ThisSteamVR = 1)] = "ThisSteamVR"),
              (e[(e.AnotherSteamVR = 2)] = "AnotherSteamVR"),
              (e[(e.AnotherRuntime = 3)] = "AnotherRuntime"),
              (e[(e.Error = -1)] = "Error");
          })(M || (M = {})),
          (function (e) {
            (e[(e.TrackedControllerRole_Invalid = 0)] =
              "TrackedControllerRole_Invalid"),
              (e[(e.TrackedControllerRole_LeftHand = 1)] =
                "TrackedControllerRole_LeftHand"),
              (e[(e.TrackedControllerRole_RightHand = 2)] =
                "TrackedControllerRole_RightHand"),
              (e[(e.TrackedControllerRole_OptOut = 3)] =
                "TrackedControllerRole_OptOut"),
              (e[(e.TrackedControllerRole_Treadmill = 4)] =
                "TrackedControllerRole_Treadmill"),
              (e[(e.TrackedControllerRole_Max = 5)] =
                "TrackedControllerRole_Max");
          })(R || (R = {})),
          (function (e) {
            (e[(e.Unknown = 0)] = "Unknown"),
              (e[(e.Steam_VRButton = 1)] = "Steam_VRButton"),
              (e[(e.Steam_StartSteamVRApp = 2)] = "Steam_StartSteamVRApp"),
              (e[(e.Watchdog_Unknown = 10)] = "Watchdog_Unknown"),
              (e[(e.Watchdog_Controller = 11)] = "Watchdog_Controller"),
              (e[(e.Watchdog_Hmd = 12)] = "Watchdog_Hmd"),
              (e[(e.AppLaunch_Unknown = 20)] = "AppLaunch_Unknown"),
              (e[(e.AppLaunch_Steam = 21)] = "AppLaunch_Steam"),
              (e[(e.SteamVR_Restart = 30)] = "SteamVR_Restart"),
              (e[(e.SteamVR_VRStartup = 31)] = "SteamVR_VRStartup");
          })(w || (w = {})),
          (function (e) {
            e[(e.Hostname = 0)] = "Hostname";
          })(T || (T = {})),
          (function (e) {
            (e[(e.Unavailable = 0)] = "Unavailable"),
              (e[(e.Active = 1)] = "Active"),
              (e[(e.Off = 2)] = "Off");
          })(k || (k = {})),
          (function (e) {
            (e[(e.Default = 1)] = "Default"), (e[(e.Floor = 2)] = "Floor");
          })(D || (D = {})),
          (function (e) {
            (e[(e.Inactive = 0)] = "Inactive"),
              (e[(e.PendingReset = 1)] = "PendingReset"),
              (e[(e.PendingResetIfNeeded = 2)] = "PendingResetIfNeeded"),
              (e[(e.Default = 3)] = "Default"),
              (e[(e.CV = 4)] = "CV"),
              (e[(e.Manual = 5)] = "Manual");
          })(I || (I = {})),
          (function (e) {
            (e[(e.OK = 1)] = "OK"),
              (e[(e.Warning = 100)] = "Warning"),
              (e[(e.Warning_BaseStationMayHaveMoved = 101)] =
                "Warning_BaseStationMayHaveMoved"),
              (e[(e.Warning_BaseStationRemoved = 102)] =
                "Warning_BaseStationRemoved"),
              (e[(e.Warning_SeatedBoundsInvalid = 103)] =
                "Warning_SeatedBoundsInvalid"),
              (e[(e.Error = 200)] = "Error"),
              (e[(e.Error_BaseStationUninitialized = 201)] =
                "Error_BaseStationUninitialized"),
              (e[(e.Error_BaseStationConflict = 202)] =
                "Error_BaseStationConflict"),
              (e[(e.Error_PlayAreaInvalid = 203)] = "Error_PlayAreaInvalid"),
              (e[(e.Error_CollisionBoundsInvalid = 204)] =
                "Error_CollisionBoundsInvalid");
          })(H || (H = {})),
          (function (e) {
            (e[(e.Small = 0)] = "Small"),
              (e[(e.Medium = 1)] = "Medium"),
              (e[(e.Large = 2)] = "Large"),
              (e[(e.Gigantic = 3)] = "Gigantic"),
              (e[(e.Standing = 4)] = "Standing");
          })(x || (x = {}));
      },
      3606: (e, t, n) => {
        "use strict";
        n.d(t, {
          $Z: () => ge,
          Bf: () => $,
          Bn: () => T,
          Bz: () => v,
          C6: () => f,
          D1: () => te,
          Ec: () => _e,
          El: () => ve,
          Eo: () => i,
          F2: () => K,
          Fl: () => ce,
          GM: () => G,
          GO: () => g,
          Hh: () => oe,
          Ju: () => J,
          Kh: () => d,
          MM: () => a,
          NX: () => V,
          Ni: () => Z,
          P: () => k,
          Pi: () => Ce,
          Qv: () => S,
          R_: () => he,
          So: () => E,
          Sp: () => x,
          Sx: () => u,
          Ul: () => p,
          Uv: () => _,
          Vv: () => ee,
          WS: () => W,
          Wm: () => y,
          Wt: () => L,
          XO: () => j,
          Y: () => z,
          Zw: () => b,
          aD: () => U,
          au: () => de,
          bl: () => M,
          cb: () => C,
          dw: () => c,
          gS: () => h,
          ge: () => I,
          i8: () => pe,
          iZ: () => H,
          j5: () => N,
          kk: () => s,
          kx: () => O,
          l3: () => r,
          lP: () => re,
          mB: () => m,
          md: () => Q,
          nJ: () => q,
          nY: () => w,
          np: () => o,
          qf: () => F,
          qt: () => ue,
          rG: () => se,
          tZ: () => fe,
          ui: () => le,
          uv: () => D,
          v0: () => l,
          vo: () => X,
          w5: () => B,
          wi: () => R,
          wt: () => A,
          xP: () => ae,
          xY: () => Y,
          x_: () => me,
          xz: () => ne,
          yl: () => ie,
          zM: () => P,
        });
        const o = "openvr.tool.steamvr_environments",
          i = "system.generated.steam.exe",
          r = "vrlink.client",
          s = "steam.app.",
          a = s + "250820",
          l = s + "330050",
          d = "system.dashboard.",
          u = "system.dashboard.quicklaunch",
          c = "system.dashboard.nowplaying",
          p = 0.25,
          m = 2,
          h = 0.03,
          v = "current.scene.app.binding.list",
          g = "system.desktop",
          _ = "system.window",
          C = "system.standalone",
          f = "system.systemui",
          L = "system.settings",
          b = "system.keyboard",
          y = "system.vrwebhelper.controllerbinding",
          S = "system.messageoverlay",
          E = "valve.steam",
          M = "valve.steam.desktopgame",
          R = "valve.steam.gamepadui.main",
          w = "valve.steam.gamepadui.keyboard",
          T = "valve.steam.desktop",
          k = "steamlink_openvr-overlay",
          D = "DashboardCurvatureOrigin",
          I = f + "::" + D,
          H = 2.667 / 1694,
          x = "DashboardControlStripTransform",
          V = "DashboardGrabHandleTransform",
          P = "DashboardOverlayControlBarOrigin",
          O = "DashboardGrabHandleTransform_Legacy",
          F = "/settings/steamvr/enableHomeApp",
          A = "/settings/steamvr/supersampleManualOverride",
          B = "/settings/steamvr/supersampleScale",
          N = "/settings/GpuSpeed/gpuSpeedRenderTargetScale",
          Z = "/settings/camera/roomViewStyle",
          U = "/settings/steamvr/backgroundCameraHeight",
          W = "/settings/steamvr/backgroundDomeRadius",
          z = "/settings/steamvr/analogGain",
          G = "/settings/driver_lighthouse/indexHmdColumnCorrection",
          K = "/settings/steamvr/showAdvancedSettings",
          j = "/settings/dashboard/lastAccessedExternalOverlayKey",
          $ = "/settings/internal/dashboardInitialOverlay",
          Q = "/settings/dashboard/position_2",
          J = "/settings/dashboard/theaterCurvature",
          X = "/settings/dashboard/theaterScreenSize",
          q = "/settings/dashboard/unifiedDashboard",
          Y = "/settings/dashboard/theaterScreenAlignment",
          ee = "/settings/collisionBounds/CollisionBoundsFadeDistance",
          te = "/settings/camera/roomView",
          ne = "/settings/camera/enableCamera",
          oe = "/settings/camera/enableConstructRoomView",
          ie = "/settings/dashboard/enableWindowView",
          re = "/settings/dashboard/maxInlineTabs",
          se = "/settings/steamvr/maxRecommendedResolution",
          ae = "/settings/steamvr/disableKeyboardPrivacy",
          le = "/settings/camera/lightSourceFrequency",
          de = "/settings/steamvr/ipdHUD",
          ue = "/settings/dashboard/expectSteam",
          ce = "/settings/dashboard/allowLegacyControlBar",
          pe = "/settings/openxr/metaUnityPluginCompatibility",
          me = "/settings/input/overlayFilteringEnabled",
          he = "/settings/input/overlayFilteringMinCutoff",
          ve = "/settings/input/overlayFilteringBeta",
          ge = "/settings/input/overlayFilteringDerivCutoff",
          _e = "/settings/input/overlayMagnetismEnabled",
          Ce = "/settings/input/overlayMagnetismLockDistance",
          fe = "/settings/input/overlayMagnetismDeadZone";
      },
      2495: (e, t, n) => {
        "use strict";
        n.d(t, { B: () => h, b: () => p });
        var o = n(6090),
          i = n(4734),
          r = n(1370),
          s = n(9978),
          a = n(6540),
          l = n(795),
          d = n(3606),
          u = n(5163),
          c = n(7261);
        const p = 2,
          m = (0, r.PA)(function (e) {
            const { desktop: t } = e,
              [n, r] = a.useState(void 0);
            return (
              a.useEffect(() => {
                if (n)
                  return (
                    i.Q.OnDesktopFrameCreated(n),
                    () => i.Q.OnDesktopFrameDestroyed(n)
                  );
              }, [n]),
              1 != t.overlay.eOverlayType
                ? null
                : t.overlay.unFlags & o.NB.VisibleInDashboard
                  ? a.createElement(
                      l.wI,
                      {
                        title: t.strLocalizedName,
                        iconEnum: 15,
                        showTabInDashboardBar: !0,
                        ref: r,
                      },
                      a.createElement(
                        l.P9,
                        {
                          summonOverlayKey: t.overlay.sOverlayKey,
                          renderChildren: "always",
                        },
                        a.createElement(
                          o.Zk,
                          {
                            interactive: !0,
                            overlay_key: t.overlay.sOverlayKey,
                            height: p,
                            curvature_origin_id: d.ge,
                            origin: o.Oi.BottomCenter,
                            debug_name: t.overlay.sOverlayKey,
                            scale_index: (0, u.HX)(c.$z.Dashboard),
                          },
                          a.createElement(l.gU, null),
                        ),
                      ),
                    )
                  : null
            );
          });
        function h(e) {
          return (0, s.useObserver)(() => i.Q.desktops).map((e) =>
            a.createElement(m, { key: e.overlay.sOverlayKey, desktop: e }),
          );
        }
      },
      3481: (e, t, n) => {
        "use strict";
        n.d(t, { JJ: () => h, Sq: () => i, hJ: () => o });
        var o,
          i,
          r = n(1635),
          s = n(7813),
          a = n(3236),
          l = n(1835),
          d = n(1909),
          u = n(1295),
          c = n(3514),
          p = n(2929);
        !(function (e) {
          (e[(e.Disconnected = 0)] = "Disconnected"),
            (e[(e.Pending = 1)] = "Pending"),
            (e[(e.Connected = 2)] = "Connected");
        })(o || (o = {}));
        class m {
          get canTryConnectingToSteam() {
            return l.SW.isVRGamepadUIReady && u.H.BHasMutualCapability(15);
          }
          get steamConnectionState() {
            return this.m_eSteamConnectionState;
          }
          get supportedFrameFeatures() {
            return this.steamConnectionState != o.Connected
              ? {}
              : { steamHelpsRenderFrame: !0 };
          }
          constructor() {
            (this.m_unNextFrameID = p.A),
              (this.m_unNextTabID = i.BaseIncrementingIDOffset),
              (this.m_mapLastSentFrameUpdate = new Map()),
              (this.m_mapLastSentFrameVisibility = new Map()),
              (this.m_mapFrames = new Map()),
              (this.m_eSteamConnectionState = o.Disconnected),
              (0, s.makeObservable)(this);
          }
          Init() {
            return (0, r.sH)(this, void 0, void 0, function* () {
              (0, s.reaction)(
                () => this.canTryConnectingToSteam,
                (e) => {
                  e && this.m_eSteamConnectionState == o.Disconnected
                    ? this.InitSteamConnection()
                    : e || (this.m_eSteamConnectionState = o.Disconnected);
                },
                { fireImmediately: !0 },
              ),
                (0, s.reaction)(
                  () => this.frames.filter((e) => e.state == c.Iu.Destroyed),
                  this.OnFramesDestroyed,
                ),
                (0, s.autorun)(this.SendUpdatesToSteam, { delay: 1e-4 });
            });
          }
          InitSteamConnection() {
            return (0, r.sH)(this, void 0, void 0, function* () {
              (this.m_eSteamConnectionState = o.Pending),
                this.m_mapLastSentFrameUpdate.clear(),
                this.m_mapLastSentFrameVisibility.clear();
              try {
                yield d.p.Steam.InitFrameSystem({ destroy_all_frames: !1 });
                this.m_eSteamConnectionState = o.Connected;
              } catch (e) {
                console.error(
                  "CFrameStore failed to init Steam connection:",
                  e,
                ),
                  (this.m_eSteamConnectionState = o.Disconnected);
              }
            });
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
            const r = [];
            for (const t of this.frames)
              t.isCurrentlyVisible !=
                (null !==
                  (e = this.m_mapLastSentFrameVisibility.get(t.frameID)) &&
                  void 0 !== e &&
                  e) &&
                (r.push(t),
                this.m_mapLastSentFrameVisibility.set(
                  t.frameID,
                  t.isCurrentlyVisible,
                ));
            const a = {
              updated_frames: o,
              deleted_frames: i,
              shown_frames: r
                .filter((e) => e.isCurrentlyVisible)
                .map((e) => e.frameID),
              hidden_frames: r
                .filter((e) => !e.isCurrentlyVisible)
                .map((e) => e.frameID),
            };
            d.p.Steam.UpdateFrameUIs(a).then(
              (0, s.action)((e) => {
                var t, n;
                for (const o of null !== (t = e.results) && void 0 !== t
                  ? t
                  : [])
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
              (0, s.when)(
                () =>
                  e.state != c.Iu.Uninitialized && e.state != c.Iu.Destroyed,
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
                var n;
                return (
                  (null === (n = t.tab) || void 0 === n ? void 0 : n.tab_id) ===
                  e
                );
              });
          }
          HasFramesWithAssociatedSummonKeys(e) {
            return this.GetFramesWithAssociatedSummonKeys(e).length > 0;
          }
        }
        (0, r.Cg)([s.observable], m.prototype, "m_mapFrames", void 0),
          (0, r.Cg)(
            [s.observable],
            m.prototype,
            "m_eSteamConnectionState",
            void 0,
          ),
          (0, r.Cg)([s.computed], m.prototype, "canTryConnectingToSteam", null),
          (0, r.Cg)([s.computed], m.prototype, "steamConnectionState", null),
          (0, r.Cg)([s.computed], m.prototype, "supportedFrameFeatures", null),
          (0, r.Cg)([s.action.bound], m.prototype, "InitSteamConnection", null),
          (0, r.Cg)([a.o], m.prototype, "SendUpdatesToSteam", null),
          (0, r.Cg)([s.action.bound], m.prototype, "OnFramesDestroyed", null),
          (0, r.Cg)([s.action], m.prototype, "CreateFrame", null),
          (0, r.Cg)([s.computed], m.prototype, "frames", null),
          (0, r.Cg)([a.o], m.prototype, "GetFrame", null),
          (0, r.Cg)(
            [a.o],
            m.prototype,
            "GetFramesWithAssociatedSummonKeys",
            null,
          ),
          (0, r.Cg)([a.o], m.prototype, "GetFrameWithTabId", null),
          (0, r.Cg)(
            [a.o],
            m.prototype,
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
          })(i || (i = {}));
        const h = new m();
        window.FrameStore = h;
      },
      2563: (e, t, n) => {
        "use strict";
        n.d(t, {
          DE: () => A,
          Hz: () => D,
          L_: () => w,
          N2: () => U,
          Nd: () => N,
          OR: () => P,
          R0: () => V,
          Te: () => O,
          Tr: () => Z,
          WO: () => F,
          Wn: () => B,
          bR: () => k,
          gZ: () => x,
          oZ: () => W,
          vX: () => H,
        });
        var o,
          i = n(1635),
          r = n(6090),
          s = n(3236),
          a = n(7813),
          l = n(1370),
          d = n(6540),
          u = n(6138),
          c = n(6731),
          p = n(5615),
          m = n(917),
          h = n(4963),
          v = n(924),
          g = n(3606),
          _ = n(3714),
          C = n(6575),
          f = n(1139),
          L = n(3473),
          b = n(1333),
          y = n(5735),
          S = n.n(y),
          E = n(9283),
          M = n(1835),
          R = n(795);
        const w = (0, l.PA)(function (e) {
            return d.createElement(
              T,
              Object.assign({}, e, { VRGamepadUI: M.SW.isVRGamepadUI }),
            );
          }),
          T = (e) => {
            var t, n, o;
            const i = e.VRGamepadUI,
              s = (d.useRef(null), d.useRef(null)),
              a = null === (t = e.scrollable) || void 0 === t || t,
              l =
                null !== (n = e.foregroundReflectMultiplier) && void 0 !== n
                  ? n
                  : g.gS,
              m =
                null ===
                  (o = b.HR.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === o ||
                o
                  ? g.uv
                  : null;
            return d.createElement(
              d.Fragment,
              null,
              d.createElement(
                r.dL,
                { translation: { z: 1e-5 } },
                d.createElement(
                  r.Zk,
                  {
                    id: "dashboard_widget_panel_id",
                    visibility: e.visible ? r.Fi.Visible : r.Fi.Hidden,
                    debug_name: e.debugName,
                    curvature_origin_id: m,
                    origin: r.Oi.BottomCenter,
                    interactive: !0,
                    scrollable: a,
                    meters_per_pixel: i ? void 0 : g.iZ,
                    reflect: i ? void 0 : 0.2 * l,
                    width: i ? 2.67 : void 0,
                  },
                  d.createElement(R.gU, null),
                  d.createElement(
                    c.vw,
                    { ref: s },
                    d.createElement(
                      u.W,
                      null,
                      d.createElement(
                        p.M,
                        {
                          scrollDirection: a ? p.D.Vertical : p.D.None,
                          className: (0, f.FH)(
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
        function k() {
          return d.createElement(
            "div",
            { className: "ActivitySpinner" },
            d.createElement("div", { className: "Bar" }),
            d.createElement("div", { className: "Bar" }),
            d.createElement("div", { className: "Bar" }),
          );
        }
        function D(e) {
          return d.createElement(
            u.$,
            { className: "PowerMenuButton", onClick: e.onClick },
            d.createElement("div", { className: "HoverGradient" }),
            d.createElement("div", { className: "ClickGradient" }),
            d.createElement("span", null, e.label),
            e.lineBelow && d.createElement("div", { className: "LineBelow" }),
          );
        }
        let I = class extends d.Component {
          constructor(e) {
            super(e), (0, a.makeObservable)(this);
          }
          get isShowingTooltip() {
            return M.SW.s_ControlBarCurrentlyShownTooltip === this;
          }
          show() {
            M.SW.s_ControlBarCurrentlyShownTooltip = this;
          }
          hide() {
            this.isShowingTooltip &&
              (M.SW.s_ControlBarCurrentlyShownTooltip = null);
          }
          render() {
            var e;
            const t =
                this.props.text && (this.props.shown || this.isShowingTooltip),
              n = this.props.translation
                ? this.props.translation
                : { x: 0, y: -0.2, z: 0.05 },
              o =
                null ===
                  (e = b.HR.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
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
                  r.dL,
                  { translation: n },
                  d.createElement(
                    r.Zk,
                    {
                      visibility: t ? r.Fi.Visible : r.Fi.SkipInSceneGraph,
                      meters_per_pixel: g.iZ,
                      curvature_origin_id: o,
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
        (0, i.Cg)([a.computed], I.prototype, "isShowingTooltip", null),
          (0, i.Cg)([a.action.bound], I.prototype, "show", null),
          (0, i.Cg)([a.action.bound], I.prototype, "hide", null),
          (I = (0, i.Cg)([l.PA], I));
        class H extends d.Component {
          static ShouldInvertThumbnail(e) {
            if (!e) return !1;
            if (((e = e.toLowerCase()), !H.s_mapShouldInvertThumbnail.has(e))) {
              let t = !1;
              e.endsWith(".svg") && (t = !0),
                e.startsWith("data:") &&
                  H.k_rsThumbnailHashesToInvert.indexOf(S().hash(e)) >= 0 &&
                  (t = !0),
                H.s_mapShouldInvertThumbnail.set(e, t);
            }
            return H.s_mapShouldInvertThumbnail.get(e);
          }
          render() {
            var e;
            const t = null !== (e = this.props.shadow) && void 0 !== e && e,
              n = H.ShouldInvertThumbnail(this.props.src);
            return d.createElement(
              "div",
              { className: "Icon" },
              t &&
                d.createElement("img", {
                  className: "Shadow",
                  src: this.props.src,
                }),
              d.createElement("img", {
                className: (0, f.FH)(["BlackToWhite", n]),
                src: this.props.src,
              }),
            );
          }
        }
        var x, V;
        (H.k_rsThumbnailHashesToInvert = [
          "5cbd0ebd6459cdaf75fdcafc5051f4e0",
          "c77452e60fc29227b33773ff6e74f8a1",
          "44b62220b39ba717fbfc65e3b4225491",
          "86bbab56235b55f6e5e7d288342931d7",
        ]),
          (H.s_mapShouldInvertThumbnail = new Map()),
          (function (e) {
            (e[(e.Large = 0)] = "Large"),
              (e[(e.Small = 1)] = "Small"),
              (e[(e.App = 2)] = "App");
          })(x || (x = {})),
          (function (e) {
            (e[(e.Center = 0)] = "Center"), (e[(e.Fill = 1)] = "Fill");
          })(V || (V = {}));
        const P = (e) =>
          d.createElement(
            "div",
            { className: (0, f.FH)("ControlBarGroup", x[e.style]) },
            e.children,
          );
        let O = class extends d.Component {
          constructor(e) {
            super(e), (this.m_refTooltip = d.createRef());
          }
          onMouseEnter() {
            var e, t, n;
            null === (e = this.m_refTooltip.current) ||
              void 0 === e ||
              e.show(),
              null === (n = (t = this.props).onMouseEnter) ||
                void 0 === n ||
                n.call(t);
          }
          onMouseLeave() {
            var e, t, n;
            null === (e = this.m_refTooltip.current) ||
              void 0 === e ||
              e.hide(),
              null === (n = (t = this.props).onMouseLeave) ||
                void 0 === n ||
                n.call(t);
          }
          render() {
            var e;
            return d.createElement(
              u.$,
              {
                className: (0, f.FH)(
                  "ControlBarButton",
                  this.props.additionalClassNames,
                  V[
                    null !== (e = this.props.imageStyle) && void 0 !== e
                      ? e
                      : V.Center
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
                  d.createElement(C.l, {
                    allowableParentSelectors: [".DashboardMain"],
                    panelAnchorID: this.props.centerPanelAnchorID,
                  }),
                ),
              d.createElement(I, {
                text: this.props.label,
                ref: this.m_refTooltip,
              }),
              d.createElement(H, { src: this.props.imageUrl }),
            );
          }
        };
        (0, i.Cg)([s.o], O.prototype, "onMouseEnter", null),
          (0, i.Cg)([s.o], O.prototype, "onMouseLeave", null),
          (O = (0, i.Cg)([l.PA], O));
        const F = (e) =>
          d.createElement(
            P,
            { style: e.style },
            d.createElement(O, Object.assign({}, e)),
          );
        d.Component;
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
            var e, t, n;
            const o = this.props.position,
              i = Math.asin(o) / Math.PI,
              s = null !== (e = this.props.scale) && void 0 !== e ? e : 1;
            return d.createElement(
              d.Fragment,
              null,
              d.createElement(
                r.Ci,
                { location: { x: o, y: -1 } },
                d.createElement(r.dL, {
                  id: this.m_sAnchorID,
                  translation: {
                    y: 0.01 * Math.abs(i),
                    z: -0.03 * Math.abs(i),
                  },
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
                  r.N,
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
                      r.dL,
                      {
                        parent_id: this.m_sAnchorID,
                        translation: { y: 0.04 * s, z: -0.01 },
                        scale: s,
                      },
                      d.createElement(
                        r.Zk,
                        {
                          curvature_origin_id:
                            null !== (t = this.props.curvatureOriginId) &&
                            void 0 !== t
                              ? t
                              : null,
                          origin: r.Oi.TopCenter,
                          interactive: !0,
                          scrollable: !0,
                          meters_per_pixel: g.iZ,
                          sort_depth_bias: this.props.sort_depth_bias,
                          debug_name: "control-bar-tray",
                        },
                        d.createElement(
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
                      d.createElement(
                        r.dL,
                        { translation: { z: -1e-5 } },
                        d.createElement(
                          r.Zk,
                          {
                            curvature_origin_id:
                              null !== (n = this.props.curvatureOriginId) &&
                              void 0 !== n
                                ? n
                                : null,
                            origin: r.Oi.TopCenter,
                            interactive: !1,
                            scrollable: !1,
                            meters_per_pixel: 2 * g.iZ,
                            reflect: 0.005,
                            sampler: r._h.SingleTap,
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
        let B = class extends d.Component {
          constructor(e) {
            super(e), (this.state = { bSliding: !1, bHover: !1 });
          }
          onMouseEnter(e) {
            var t, n;
            this.setState({ bHover: !0 }),
              null === (n = (t = this.props).onMouseEnter) ||
                void 0 === n ||
                n.call(t, e);
          }
          onMouseLeave(e) {
            var t, n;
            this.setState({ bHover: !1 }),
              null === (n = (t = this.props).onMouseLeave) ||
                void 0 === n ||
                n.call(t, e);
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
                d.createElement(I, {
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
        let N = class extends d.Component {
          constructor(e) {
            super(e), (this.m_refTooltip = d.createRef());
          }
          onMouseEnter(e) {
            var t, n, o;
            null === (t = this.m_refTooltip.current) ||
              void 0 === t ||
              t.show(),
              null === (o = (n = this.props).onMouseEnter) ||
                void 0 === o ||
                o.call(n, e);
          }
          onMouseLeave(e) {
            var t, n, o;
            null === (t = this.m_refTooltip.current) ||
              void 0 === t ||
              t.hide(),
              null === (o = (n = this.props).onMouseLeave) ||
                void 0 === o ||
                o.call(n, e);
          }
          render() {
            return d.createElement(
              u.$,
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
                d.createElement(I, {
                  text: this.props.title,
                  ref: this.m_refTooltip,
                }),
              this.props.children,
            );
          }
        };
        (0, i.Cg)([s.o], N.prototype, "onMouseEnter", null),
          (0, i.Cg)([s.o], N.prototype, "onMouseLeave", null),
          (N = (0, i.Cg)([l.PA], N));
        let Z = (o = class extends d.Component {
          constructor() {
            super(...arguments), (this.m_vecOriginalMousePosition = null);
          }
          componentWillUnmount() {
            this.stopSliding();
          }
          get slider() {
            var e;
            return null === (e = this.props.refVolumeTray.current) ||
              void 0 === e
              ? void 0
              : e.slider;
          }
          onButtonMouseDown(e) {
            var t, n;
            (this.m_vecOriginalMousePosition = { x: e.clientX, y: e.clientY }),
              window.document.addEventListener("mouseup", this.onWindowMouseUp),
              window.document.addEventListener(
                "mousemove",
                this.onWindowMouseMove,
              ),
              null === (n = (t = this.props).onShowTray) ||
                void 0 === n ||
                n.call(t);
          }
          onWindowMouseMove(e) {
            if (!this.slider || this.slider.isSliding) return;
            const t = { x: e.clientX, y: e.clientY };
            (0, r.NH)((0, r.QB)(t, this.m_vecOriginalMousePosition)) >
              o.MIN_DRAG_THRESHOLD && this.startSliding(t);
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
            var e, t, n, o;
            window.document.removeEventListener(
              "mouseup",
              this.onWindowMouseUp,
            ),
              window.document.removeEventListener(
                "mousemove",
                this.onWindowMouseMove,
              ),
              (null === (e = this.slider) || void 0 === e
                ? void 0
                : e.isSliding) &&
                (null === (n = (t = this.props).onHideTray) ||
                  void 0 === n ||
                  n.call(t)),
              null === (o = this.slider) ||
                void 0 === o ||
                o.stopExternalSliding();
          }
          render() {
            return d.createElement(O, {
              imageUrl: L.f.Instance.muted
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
        (Z.MIN_DRAG_THRESHOLD = 35),
          (0, i.Cg)([s.o], Z.prototype, "onButtonMouseDown", null),
          (0, i.Cg)([s.o], Z.prototype, "onWindowMouseMove", null),
          (0, i.Cg)([s.o], Z.prototype, "onWindowMouseUp", null),
          (Z = o = (0, i.Cg)([l.PA], Z));
        const U = (e) => {
            var t;
            const n = d.useRef(void 0),
              o = d.useRef(void 0),
              i = e.active;
            return (
              d.useEffect(() => {
                var e, t;
                null ===
                  (t =
                    null === (e = o.current) || void 0 === e
                      ? void 0
                      : e.elem) ||
                  void 0 === t ||
                  t.scrollIntoView({ behavior: "smooth", inline: "nearest" });
              }, [i]),
              d.createElement(
                u.$,
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
                    null === (t = n.current) || void 0 === t || t.show(),
                      e.onMouseEnter && e.onMouseEnter();
                  },
                  onMouseLeave: () => {
                    var t;
                    null === (t = n.current) || void 0 === t || t.hide(),
                      e.onMouseLeave && e.onMouseLeave();
                  },
                  enabled: e.enabled,
                  ref: o,
                },
                e.title &&
                  d.createElement(I, {
                    text: e.title,
                    translation: e.tooltipTranslation,
                    ref: n,
                  }),
                e.label && d.createElement("span", null, e.label),
                e.iconUrl &&
                  d.createElement("img", {
                    className: (0, E.A)(
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
          W = (0, l.PA)(function (e) {
            var t;
            const n =
                M.SW.m_bKeyboardVisible &&
                M.SW.m_sKeyboardOverlayKey == e.overlayKey,
              o =
                null === (t = e.showTooltip) || void 0 === t || t
                  ? n
                    ? (0, _.we)("#HideKeyboardTooltip")
                    : (0, _.we)("#ShowKeyboardTooltip")
                  : void 0;
            return d.createElement(
              U,
              Object.assign(
                {
                  key: n ? "hidebtn" : "showbtn",
                  iconUrl: "/dashboard/images/icons/svr_keyboard.svg",
                  title: o,
                  additionalClassNames: (0, f.FH)(
                    "Keyboard",
                    e.additionalClassNames,
                  ),
                  onClick: () => {
                    if (n) VRHTML.VROverlay.HideKeyboard();
                    else {
                      let t =
                        r.QR.Minimal | r.QR.HideDoneKey | r.QR.ShowArrowKeys;
                      e.modal && (t |= r.QR.Modal);
                      try {
                        VRHTML.VROverlay.ShowKeyboardForOverlay(
                          e.overlayKey,
                          r.Xl.Normal,
                          r.b.SingleLine,
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
                  active: n,
                },
                e,
              ),
            );
          });
      },
      2156: (e, t, n) => {
        "use strict";
        n.d(t, { F: () => _, O: () => v });
        var o = n(1635),
          i = n(6090),
          r = n(6540),
          s = n(9978),
          a = n(1370),
          l = n(1835),
          d = n(3606),
          u = n(3246);
        function c(e) {
          const { children: t, invertParentPanelPitch: n, pitch: o } = e;
          return n || 0 != o
            ? r.createElement(
                i.dL,
                {
                  invert_parent_panel_pitch: null != n && n,
                  curvature_pitch: null != o ? o : 0,
                },
                t,
              )
            : r.createElement(r.Fragment, null, t);
        }
        function p(e) {
          let { children: t, offsetPixels: n, offsetMeters: o } = e;
          (n = null != n ? n : { x: 0, y: 0, z: 0 }),
            (o = null != o ? o : { x: 0, y: 0, z: 0 });
          const s = (0, i.CU)(
            o,
            (0, i.tx)(n, l.SW.m_fVRGamepadUI_MetersPerPixel),
          );
          return 0 != s.x || 0 != s.y || 0 != s.z
            ? r.createElement(i.dL, { translation: s }, t)
            : r.createElement(r.Fragment, null, t);
        }
        function m(e) {
          const { children: t, rotation: n } = e;
          return null != n && (0 != n.x || 0 != n.y || 0 != n.z)
            ? r.createElement(i.dL, { rotation: n }, t)
            : r.createElement(r.Fragment, null, t);
        }
        function h(e) {
          return 1 == (null == e ? void 0 : e.parent_enum) ? 0 : d.gS;
        }
        function v(e) {
          var t,
            n,
            a,
            d,
            u,
            v,
            g,
            _,
            C,
            f,
            L,
            b,
            y,
            S,
            E,
            M,
            R,
            w,
            T,
            k,
            D,
            I,
            H,
            x,
            V,
            P,
            O,
            F,
            A,
            B,
            N,
            Z,
            U,
            W,
            z,
            G,
            K;
          const { popupRequest: j, children: $ } = e,
            Q = (0, o.Tt)(e, ["popupRequest", "children"]),
            J = {
              x:
                null !==
                  (n =
                    null === (t = null == j ? void 0 : j.origin_on_parent) ||
                    void 0 === t
                      ? void 0
                      : t.x) && void 0 !== n
                  ? n
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
            X = {
              x:
                null !==
                  (v =
                    null === (u = null == j ? void 0 : j.origin_on_popup) ||
                    void 0 === u
                      ? void 0
                      : u.x) && void 0 !== v
                  ? v
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
            q = {
              u:
                null !==
                  (f =
                    null === (C = null == j ? void 0 : j.clip_rect) ||
                    void 0 === C
                      ? void 0
                      : C.u_min) && void 0 !== f
                  ? f
                  : 0,
              v:
                null !==
                  (b =
                    null === (L = null == j ? void 0 : j.clip_rect) ||
                    void 0 === L
                      ? void 0
                      : L.v_min) && void 0 !== b
                  ? b
                  : 0,
            },
            Y = {
              u:
                null !==
                  (S =
                    null === (y = null == j ? void 0 : j.clip_rect) ||
                    void 0 === y
                      ? void 0
                      : y.u_max) && void 0 !== S
                  ? S
                  : 1,
              v:
                null !==
                  (M =
                    null === (E = null == j ? void 0 : j.clip_rect) ||
                    void 0 === E
                      ? void 0
                      : E.v_max) && void 0 !== M
                  ? M
                  : 1,
            },
            ee = {
              x:
                null !==
                  (w =
                    null === (R = null == j ? void 0 : j.offset) || void 0 === R
                      ? void 0
                      : R.x_pixels) && void 0 !== w
                  ? w
                  : 0,
              y:
                null !==
                  (k =
                    null === (T = null == j ? void 0 : j.offset) || void 0 === T
                      ? void 0
                      : T.y_pixels) && void 0 !== k
                  ? k
                  : 0,
              z:
                null !==
                  (I =
                    null === (D = null == j ? void 0 : j.offset) || void 0 === D
                      ? void 0
                      : D.z_pixels) && void 0 !== I
                  ? I
                  : 0,
            },
            te = {
              x:
                null !==
                  (x =
                    null === (H = null == j ? void 0 : j.offset) || void 0 === H
                      ? void 0
                      : H.x_meters) && void 0 !== x
                  ? x
                  : 0,
              y:
                null !==
                  (P =
                    null === (V = null == j ? void 0 : j.offset) || void 0 === V
                      ? void 0
                      : V.y_meters) && void 0 !== P
                  ? P
                  : 0,
              z:
                null !==
                  (F =
                    null === (O = null == j ? void 0 : j.offset) || void 0 === O
                      ? void 0
                      : O.z_meters) && void 0 !== F
                  ? F
                  : 0,
            },
            ne = {
              x:
                null !==
                  (B =
                    null === (A = null == j ? void 0 : j.rotation) ||
                    void 0 === A
                      ? void 0
                      : A.pitch_degrees) && void 0 !== B
                  ? B
                  : 0,
              y:
                null !==
                  (Z =
                    null === (N = null == j ? void 0 : j.rotation) ||
                    void 0 === N
                      ? void 0
                      : N.yaw_degrees) && void 0 !== Z
                  ? Z
                  : 0,
            },
            oe =
              null === (U = null == j ? void 0 : j.inherit_parent_pitch) ||
              void 0 === U ||
              U,
            ie =
              null === (W = null == j ? void 0 : j.inherit_parent_curvature) ||
              void 0 === W ||
              W,
            re =
              null === (z = null == j ? void 0 : j.interactive) ||
              void 0 === z ||
              z,
            se =
              null !== (G = null == j ? void 0 : j.requires_laser) &&
              void 0 !== G &&
              G,
            ae =
              1 ==
              (null !== (K = null == j ? void 0 : j.sort_order) && void 0 !== K
                ? K
                : 0)
                ? 101
                : null,
            le = (function (e) {
              var t, n, o;
              const i =
                  null !== (t = null == e ? void 0 : e.parent_overlay_key) &&
                  void 0 !== t
                    ? t
                    : "",
                r =
                  null !==
                    (o =
                      null === (n = null == e ? void 0 : e.offset) ||
                      void 0 === n
                        ? void 0
                        : n.z_pixels) && void 0 !== o
                    ? o
                    : 0;
              return i ==
                (0, s.useObserver)(() => l.SW.dashboardBarOverlayKey) && r >= 0
                ? -0.5
                : 0;
            })(j);
          r.useLayoutEffect(
            () => i.O5.Current().forceLayoutUpdate(),
            [q.u, q.v, Y.u, Y.v],
          );
          const de = r.createElement(
            c,
            { invertParentPanelPitch: !oe },
            r.createElement(
              p,
              { offsetPixels: ee, offsetMeters: te },
              r.createElement(
                m,
                { rotation: ne },
                r.createElement(
                  i.Zk,
                  Object.assign(
                    {
                      debug_name: `VRGamepadUI-PooledPopup-${null == j ? void 0 : j.dashboard_popup_id}`,
                      interactive: re,
                      requires_laser: se,
                      curvature: ie ? "inherit-from-parent-panel" : void 0,
                      overlay_key: null == j ? void 0 : j.popup_overlay_key,
                      origin: X,
                      meters_per_pixel: l.SW.m_fVRGamepadUI_MetersPerPixel,
                      reflect: h(j),
                      sort_depth_bias: le,
                      uv_min: q,
                      uv_max: Y,
                      sort_order: ae,
                    },
                    Q,
                  ),
                  $,
                ),
              ),
            ),
          );
          return (null == j ? void 0 : j.parent_overlay_key)
            ? r.createElement(
                i.b$,
                {
                  parent_overlay_key: null == j ? void 0 : j.parent_overlay_key,
                },
                r.createElement(
                  i.Ci,
                  { key: j.dashboard_popup_id, location: J },
                  de,
                ),
              )
            : 1 == (null == j ? void 0 : j.parent_enum)
              ? r.createElement(
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
                ? r.createElement(
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
        const _ = (0, a.PA)((e) =>
          r.createElement(
            r.Fragment,
            null,
            u.r.requests
              .filter(g)
              .map((e) =>
                r.createElement(v, {
                  popupRequest: e,
                  key: e.dashboard_popup_id,
                }),
              ),
          ),
        );
      },
      5345: (e, t, n) => {
        "use strict";
        var o = n(1635),
          i = n(6540),
          r = n(5338),
          s = n(3236),
          a = n(6090),
          l = n(1370),
          d = n(3696),
          u = n(3606),
          c = n(6138),
          p = n(9471),
          m = n(8313),
          h = n(5237),
          v = n(1139);
        function g(e) {
          const t = 0.04,
            [n, o] = i.useState(2.5);
          if (
            (i.useEffect(() => {
              n < 0 && (null == e || e.onTrigger());
              const i = setInterval(() => {
                o((e) => e - t);
              }, 40);
              return () => clearInterval(i);
            }, [e, n]),
            n < 0.12)
          )
            return null;
          const r = (100 * n) / 2.5;
          return i.createElement(
            "div",
            { className: "ProgressContainer" },
            i.createElement(h.QF, {
              background: !0,
              backgroundPadding: 2,
              counterClockwise: !0,
              value: r,
            }),
            i.createElement(p.hU, null),
          );
        }
        function _(e) {
          return i.createElement(
            a.dL,
            { parent_path: "/user/head" },
            i.createElement(
              a.dL,
              { translation: { z: -0.5, y: -0.2 } },
              i.createElement(a.FN, null, e),
            ),
          );
        }
        function C(e) {
          return _(
            i.createElement(
              a.Zk,
              { width: 0.08, debug_name: "recenter_countdown" },
              i.createElement(g, Object.assign({}, e)),
            ),
          );
        }
        class f extends i.Component {
          constructor(e) {
            super(e),
              (this.m_deviceEventHandle = null),
              (this.m_progressIndicatorEventHandle = null);
            let t = {
              sIconPath: "",
              sDevicePath: "",
              sInputPath: "",
              sCurrentAction: void 0,
              flProgress: 0,
            };
            this.state = t;
          }
          componentDidMount() {
            VRHTML
              ? ((this.m_progressIndicatorEventHandle =
                  VRHTML.RegisterForProgressIndicatorEvents(
                    this.onProgressIndicatorEvent,
                  )),
                (this.m_deviceEventHandle = VRHTML.RegisterForDeviceEvents(
                  this.onDeviceEvent,
                )))
              : this.setState({
                  sCurrentAction: "/actions/foo/bar",
                  flProgress: 0.63,
                });
          }
          componentWillUnmount() {
            var e, t;
            null === (e = this.m_progressIndicatorEventHandle) ||
              void 0 === e ||
              e.unregister(),
              null === (t = this.m_deviceEventHandle) ||
                void 0 === t ||
                t.unregister();
          }
          onProgressIndicatorEvent(e, t, n, o, i) {
            let r = this.state;
            null == r.sCurrentAction &&
              0 != e &&
              ((r.sCurrentAction = i), (r.sDevicePath = n), (r.sInputPath = o)),
              r.sCurrentAction == i &&
                (0 == e
                  ? ((r.sCurrentAction = void 0), (r.flProgress = 0))
                  : (r.flProgress = e)),
              this.setState(r);
          }
          onDeviceEvent(e, t, n) {
            e == a.ku.Deactivated &&
              t == this.state.sDevicePath &&
              this.setState({ sCurrentAction: null, flProgress: 0 });
          }
          render() {
            const e = !1,
              t = this.state.flProgress;
            if (!this.state.sCurrentAction || t < 0.5 || t > 1) return null;
            {
              let n = { x: -0.05, y: 0.06, z: 0.02 };
              "/user/hand/left" == this.state.sDevicePath && (n.x = -n.x);
              const o =
                  "/user/head" == this.state.sDevicePath ||
                  "/input/system" == this.state.sInputPath ||
                  e,
                r = (100 * (t - 0.5)) / 0.5,
                s =
                  "/actions/quickrecenter/in/recenter" ==
                    this.state.sCurrentAction || e,
                l = 1 == t || e;
              let d = i.createElement(
                a.Zk,
                { width: 0.08, debug_name: "progressindicator" },
                i.createElement(
                  "div",
                  { className: (0, v.FH)("ProgressContainer", ["Throb", l]) },
                  i.createElement(h.QF, {
                    background: !0,
                    backgroundPadding: 2,
                    value: r,
                  }),
                  s && i.createElement(p.hU, null),
                  !s &&
                    i.createElement("img", {
                      src: "/shared/images/steam_logo.svg",
                      className: "ProgressIcon",
                    }),
                ),
              );
              return o
                ? _(d)
                : i.createElement(
                    "div",
                    null,
                    i.createElement(
                      a.mS,
                      {
                        id: "progress_component",
                        sDevicePath: this.state.sDevicePath,
                        sInputPath: this.state.sInputPath,
                      },
                      i.createElement(
                        a.Nu,
                        { vOffset: n },
                        i.createElement(
                          a.ey,
                          {
                            fOffscreenZDepth: -0.3,
                            fOffAxisLimit: 21,
                            fTransitionLimit: 1,
                          },
                          i.createElement(a.N1, {
                            target_id: "progress_component",
                            thickness: 0.002,
                            start_buffer: 0.03,
                            end_buffer: 0.01,
                          }),
                          i.createElement(a.FN, null, d),
                        ),
                      ),
                    ),
                  );
            }
          }
        }
        (0, o.Cg)([s.o], f.prototype, "onProgressIndicatorEvent", null),
          (0, o.Cg)([s.o], f.prototype, "onDeviceEvent", null);
        const L = (0, l.PA)(function (e) {
            const { bCommitOnAccept: t = !0, bShowCancel: n = !0 } = e;
            return i.createElement(
              "div",
              { className: "RoomSetupUI" },
              i.createElement(
                "div",
                { className: "Title" },
                "Adjust Floor Height",
                " ",
              ),
              i.createElement(
                "div",
                { className: "Body" },
                "Touch the floor (or use thumbstick) to adjust.",
              ),
              i.createElement(
                "div",
                { className: "ButtonRow" },
                n &&
                  i.createElement(
                    c.$,
                    {
                      className: "ButtonControl",
                      onClick: () => {
                        null === VRHTML ||
                          void 0 === VRHTML ||
                          VRHTML.VRChaperoneSetup.ResetPlayspaceFloorHeight(
                            a._1.Inactive,
                          ),
                          null == e || e.onCancel();
                      },
                    },
                    i.createElement(p.bm, null),
                    " ",
                    "Cancel",
                  ),
                i.createElement(
                  c.$,
                  {
                    className: "ButtonControl",
                    onClick: () => {
                      null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.VRChaperoneSetup.ResetPlayspaceFloorHeight(
                          a._1.PendingReset,
                        );
                    },
                  },
                  "Reset",
                ),
                i.createElement(
                  c.$,
                  {
                    className: "ButtonControl Colorful",
                    onClick: () => {
                      t &&
                        (null === VRHTML ||
                          void 0 === VRHTML ||
                          VRHTML.VRChaperoneSetup.CommitPlayspaceFloorHeight()),
                        null == e || e.onAccept();
                    },
                  },
                  t ? "Accept" : "Next",
                ),
              ),
            );
          }),
          b = (0, l.PA)(function (e) {
            const { bShowCancel: t = !0 } = e;
            return i.createElement(
              "div",
              { className: "RoomSetupUI" },
              i.createElement(
                "div",
                { className: "Title" },
                "Adjust Playspace",
              ),
              i.createElement(
                "div",
                { className: "Body" },
                "Drag to adjust size",
              ),
              i.createElement(
                "div",
                { className: "ButtonRow" },
                t &&
                  i.createElement(
                    c.$,
                    {
                      className: "ButtonControl",
                      onClick: null == e ? void 0 : e.onCancel,
                    },
                    i.createElement(p.bm, null),
                    " ",
                    "Cancel",
                  ),
                !!(null == e ? void 0 : e.onBack) &&
                  i.createElement(
                    c.$,
                    {
                      className: "ButtonControl",
                      onClick: null == e ? void 0 : e.onBack,
                    },
                    "Back",
                  ),
                i.createElement(
                  c.$,
                  {
                    className: "ButtonControl Colorful",
                    onClick: () => {
                      null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.VRChaperoneSetup.CommitPlayspaceCircleBoundary(),
                        null == e || e.onAccept();
                    },
                  },
                  "Accept",
                ),
              ),
              i.createElement(
                "div",
                { className: "ButtonRow" },
                !!(null == e ? void 0 : e.onAdvanced) &&
                  i.createElement(
                    c.$,
                    {
                      className: "ButtonControl",
                      onClick: null == e ? void 0 : e.onAdvanced,
                    },
                    i.createElement(p.DO, null),
                    " ",
                    "Advanced",
                  ),
              ),
            );
          }),
          y = (0, l.PA)(function (e) {
            const { bShowCancel: t = !0 } = e;
            return i.createElement(
              "div",
              { className: "RoomSetupUI" },
              i.createElement(
                "div",
                { className: "Title" },
                "Draw Playspace (Advanced)",
              ),
              i.createElement(
                "div",
                { className: "Body" },
                "Use your controller to draw the safe playspace bounds.",
              ),
              i.createElement(
                "div",
                { className: "ButtonRow" },
                t &&
                  i.createElement(
                    c.$,
                    {
                      className: "ButtonControl",
                      onClick: null == e ? void 0 : e.onCancel,
                    },
                    i.createElement(p.bm, null),
                    " ",
                    "Cancel",
                  ),
                i.createElement(
                  c.$,
                  {
                    className: "ButtonControl",
                    onClick: () => {
                      null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.VRChaperoneSetup.ResetPlayspaceBoundsDrawing();
                    },
                  },
                  "Reset",
                ),
                !!(null == e ? void 0 : e.onBack) &&
                  i.createElement(
                    c.$,
                    {
                      className: "ButtonControl",
                      onClick: null == e ? void 0 : e.onBack,
                    },
                    "Back",
                  ),
                i.createElement(
                  c.$,
                  {
                    className: "ButtonControl Colorful",
                    onClick: () => {
                      null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.VRChaperoneSetup.CommitPlayspaceBoundsDrawing(),
                        null == e || e.onAccept();
                    },
                  },
                  "Accept",
                ),
              ),
            );
          }),
          S = (0, l.PA)(function (e) {
            if (0 == d.H.roomSetupStep || 6 == d.H.roomSetupStep) return null;
            const t = () => {
                console.assert(
                  d.H.roomSetupAllowsCancel,
                  "RoomSetupPanel onCancel triggered even though roomsetup mode doesn't allow it",
                ),
                  d.H.setRoomSetupStep(0, !0);
              },
              n = 1 != d.H.roomSetupStep;
            return i.createElement(
              a.Zk,
              {
                id: null == e ? void 0 : e.id,
                meters_per_pixel: 0.5 * u.iZ,
                interactive: n,
                scrollable: !1,
                debug_name: "room-setup-ui",
              },
              2 == d.H.roomSetupStep &&
                i.createElement(L, {
                  onAccept: () => {
                    d.H.setRoomSetupStep(0);
                  },
                  onCancel: t,
                  bCommitOnAccept: !0,
                  bShowCancel: d.H.roomSetupAllowsCancel,
                }),
              3 == d.H.roomSetupStep &&
                i.createElement(L, {
                  onAccept: () => {
                    d.H.setRoomSetupStep(4);
                  },
                  onCancel: t,
                  bCommitOnAccept: !1,
                  bShowCancel: d.H.roomSetupAllowsCancel,
                }),
              4 == d.H.roomSetupStep &&
                i.createElement(b, {
                  onCancel: t,
                  onAccept: () => {
                    d.H.setRoomSetupStep(0);
                  },
                  onBack: () => {
                    d.H.setRoomSetupStep(3);
                  },
                  onAdvanced: () => {
                    VRHTML.VRChaperoneSetup.ResetPlayspaceBoundsDrawing(),
                      d.H.setRoomSetupStep(5);
                  },
                  bShowCancel: d.H.roomSetupAllowsCancel,
                }),
              5 == d.H.roomSetupStep &&
                i.createElement(y, {
                  onCancel: t,
                  onAccept: () => {
                    d.H.setRoomSetupStep(0);
                  },
                  onBack: () => {
                    d.H.setRoomSetupStep(4);
                  },
                  bShowCancel: d.H.roomSetupAllowsCancel,
                }),
            );
          }),
          E = (0, l.PA)(function () {
            return i.createElement(
              "div",
              { className: "RoomSetupUI Slim" },
              i.createElement(
                "div",
                { className: "ButtonRow" },
                i.createElement(
                  c.$,
                  {
                    className: "ButtonControl",
                    onClick: () => {
                      d.H.m_bOkOutsideOfPlayspace = !0;
                    },
                  },
                  i.createElement(p.bm, null),
                ),
                i.createElement(
                  c.$,
                  {
                    className: "ButtonControl Colorful",
                    onClick: () => {
                      d.H.setRoomSetupStep(3);
                    },
                  },
                  i.createElement(p.DO, null),
                  " ",
                  "Setup Playspace",
                ),
              ),
            );
          }),
          M = (0, l.PA)(function () {
            try {
              if (
                !!!(null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRProperties.GetBoolProperty(
                      "/user/head",
                      a.fD.VRLinkClientHMDSupportsRoomSetupRequests_Bool,
                    ))
              )
                return null;
            } catch (e) {
              return null;
            }
            return !d.H.m_bHmdOutOfBoundsStrict ||
              d.H.m_bOkOutsideOfPlayspace ||
              0 != d.H.roomSetupStep
              ? null
              : i.createElement(
                  a.dL,
                  { parent_path: "/user/head" },
                  i.createElement(
                    a.m$,
                    {
                      start_angle_threshold: 10,
                      stop_angle_threshold: 5,
                      ease_out_angle_threshold: 20,
                      min_angular_velocity: 75,
                      ease_in_power: 1.5,
                      lock_to_horizon: !0,
                    },
                    i.createElement(
                      a.dL,
                      { translation: { x: 0, y: -0.75, z: -0.9 } },
                      i.createElement(
                        a.FN,
                        null,
                        i.createElement(
                          a.Zk,
                          {
                            meters_per_pixel: 0.4 * u.iZ,
                            interactive: !0,
                            debug_name: "chaperone-popup",
                          },
                          i.createElement(E, null),
                        ),
                      ),
                    ),
                  ),
                );
          }),
          R = (0, l.PA)(function () {
            if (0 == d.H.roomSetupStep) return null;
            if (1 == d.H.roomSetupStep)
              return i.createElement(C, {
                onTrigger: () => {
                  d.H.setRoomSetupStep(0),
                    null === VRHTML ||
                      void 0 === VRHTML ||
                      VRHTML.VRChaperone.ResetZeroPose();
                },
              });
            if (6 == d.H.roomSetupStep)
              return i.createElement(
                i.Fragment,
                null,
                i.createElement(m.pF, null),
                i.createElement(m.VJ, {
                  "clip-to-playspace": !1,
                  "tile-size": 0.075 * 1.5 * 3,
                  "dot-half-size": 0.004,
                  "max-radius": 2.5,
                  "max-radius-fade": 0.5,
                  "min-radius": 0.3,
                  "min-radius-fade": 0.3,
                  "center-randomization": 0.35,
                  "color-hsv": [0.6, 0.95, 1],
                }),
                !1,
              );
            {
              const e = 3 == d.H.roomSetupStep || 2 == d.H.roomSetupStep,
                t = 4 == d.H.roomSetupStep || 5 == d.H.roomSetupStep,
                n = 1,
                o = 20,
                r = (0, a.nX)(u.C6, "Floor-AdjustPlayspace-Receiver"),
                s = 1.25,
                l = 0.547,
                c = 0.55;
              return i.createElement(
                i.Fragment,
                null,
                i.createElement(
                  a.dL,
                  { parent_path: "/user/head" },
                  i.createElement(
                    a.m$,
                    {
                      start_angle_threshold: 30,
                      stop_angle_threshold: 10,
                      ease_out_angle_threshold: 90,
                      min_angular_velocity: 105,
                      ease_in_power: 1.5,
                      lock_to_horizon: !0,
                    },
                    i.createElement(
                      a.dL,
                      { translation: { y: -0.15 * s, z: -1 * s } },
                      i.createElement(S, null),
                    ),
                  ),
                  i.createElement(
                    a._$,
                    {
                      projection_constraint: a.Qc.WorldDynamicFloor,
                      inital_guess_alpha: 0.5,
                    },
                    i.createElement(
                      a.dL,
                      { rotation: { x: -90 } },
                      i.createElement(
                        a.Zk,
                        {
                          width: 50,
                          height: 50,
                          interactive: !0,
                          scrollable: !1,
                          debug_name: "playspace-laser-receiver-invisible",
                          id: r,
                          visibility: a.Fi.InvisibleButIntersectable,
                          lasermouse_filtering: a.o3.Low,
                          hide_lasermouse_when_clicking: !0,
                        },
                        i.createElement(
                          "div",
                          { className: "AdjustPlayspaceRoot" },
                          i.createElement("div", {
                            className: "AdjustPlayspaceRoot Invalid",
                          }),
                        ),
                      ),
                    ),
                  ),
                ),
                e &&
                  i.createElement(m.pF, {
                    target_id: r,
                    head_interaction_radius: 2.5,
                    inactive_alpha_scale: 0.5,
                    dot_radius: 0.04,
                    dot_color_hsv: [l, c, 0.8],
                    dot_inner_alpha: 1,
                    dot_outer_alpha: 0.2,
                    axis_radius: 0.001,
                    axis_color_hsv: [l, c, 1],
                    rings_color_hsv: [l, c, 0.8],
                    rings_radius: 0.004,
                    rings_half_width: 0.001,
                    rings_hue_amplitude: 0,
                    rings_hue_speed: 1,
                  }),
                !1,
                t &&
                  i.createElement(m.rm, {
                    target_id: r,
                    radius_range: [n, o],
                    center_selection_radius: 0.1,
                  }),
                t &&
                  i.createElement(m.$6, {
                    "generic-geo": [0.001, 0.01],
                    "outline-color-hsv": [0.5, 0.95, 0.8],
                    "hue-amplitude": 0.1,
                    "hue-speed": 4 == d.H.roomSetupStep ? 2 : 1.25,
                    "outline-shadow-alpha": [1, 0.5],
                    "shadow-radius-delta": 0.01,
                    "center-dot-radius": 4 == d.H.roomSetupStep ? 0.1 : 0.04,
                    "center-color-hsv": [l, 1, 0.65],
                  }),
                i.createElement(m.VJ, {
                  "clip-to-playspace": !!t,
                  "tile-size": 0.13125,
                  "dot-half-size": 0.004,
                  "max-radius": e ? 2.5 : 4,
                  "max-radius-fade": 0.5,
                  "min-radius": 0.3,
                  "min-radius-fade": 0.3,
                  "center-randomization": 0.35,
                  "color-hsv": [0.6, 0.95, 1],
                }),
              );
            }
          });
        var w = n(2503),
          T = n(1333),
          k = n(3714);
        function D(e, t, n, o, i) {
          return t == n ? 0 : ((e - t) / (n - t)) * (i - o) + o;
        }
        class I extends i.Component {
          constructor(e) {
            super(e),
              (this.m_fadeStartTimeout = void 0),
              (this.m_fadeFinishTimeout = void 0),
              (this.m_mountTime = 0);
            const t =
                null === a.Ay || void 0 === a.Ay
                  ? void 0
                  : a.Ay.VRProperties.GetFloatProperty(
                      a.Gz,
                      a.fD.UserIpdMeters_Float,
                    ),
              n = 0.1 * Math.round(1e4 * (null != t ? t : 0.065));
            (this.state = { ipdValue: n, visible: !1, fading: !1 }),
              null === a.Ay ||
                void 0 === a.Ay ||
                a.Ay.RegisterForIPDEvents(this.IPDChanged);
          }
          componentDidMount() {
            this.m_mountTime = Date.now();
          }
          StartFade() {
            window.clearTimeout(this.m_fadeStartTimeout),
              (this.m_fadeStartTimeout = void 0),
              window.clearTimeout(this.m_fadeFinishTimeout),
              (this.m_fadeFinishTimeout = window.setTimeout(
                this.HideOverlay,
                I.kFadeDurationMs,
              )),
              this.setState({ fading: !0 });
          }
          HideOverlay() {
            this.setState({ visible: !1 });
          }
          IPDChanged(e) {
            const t = 0.1 * Math.round(1e4 * (null != e ? e : 0.065));
            if (!this.m_mountTime || this.state.ipdValue == t) return;
            (Date.now() - this.m_mountTime) / 1e3 < 2 ||
              (window.clearTimeout(this.m_fadeStartTimeout),
              (this.m_fadeStartTimeout = window.setTimeout(
                this.StartFade,
                I.kFadeDelayMs,
              )),
              window.clearTimeout(this.m_fadeFinishTimeout),
              (this.m_fadeFinishTimeout = 0),
              this.setState({ ipdValue: t, visible: !0, fading: !1 }));
          }
          ipdLensSpacer() {
            return i.createElement("div", {
              className: "IPDLensSpacer",
              style: { minWidth: "32px" },
            });
          }
          render() {
            var e, t, n;
            let o = T.HR.settings.get(u.au);
            if (!this.state.visible || !o) return null;
            let r = ["IPDParent"];
            this.state.fading && r.push("Fading");
            const s =
                0.9 *
                (null !==
                  (e =
                    null === a.Ay || void 0 === a.Ay
                      ? void 0
                      : a.Ay.VRProperties.GetFloatProperty(
                          a.Gz,
                          a.fD.DashboardScale_Float,
                        )) && void 0 !== e
                  ? e
                  : 1),
              l =
                1e3 *
                (null !==
                  (t =
                    null === a.Ay || void 0 === a.Ay
                      ? void 0
                      : a.Ay.VRProperties.GetFloatProperty(
                          a.Gz,
                          a.fD.IpdUIRangeMinMeters_Float,
                        )) && void 0 !== t
                  ? t
                  : 0.058),
              d =
                1e3 *
                (null !==
                  (n =
                    null === a.Ay || void 0 === a.Ay
                      ? void 0
                      : a.Ay.VRProperties.GetFloatProperty(
                          a.Gz,
                          a.fD.IpdUIRangeMaxMeters_Float,
                        )) && void 0 !== n
                  ? n
                  : 0.07),
              c = (function (e, t, n, o, r) {
                if (
                  !(
                    isFinite(e) &&
                    isFinite(t) &&
                    isFinite(n) &&
                    isFinite(o) &&
                    isFinite(r)
                  )
                )
                  return null;
                const s = 10,
                  a = [],
                  l = t / 25,
                  d = 10 * l,
                  u = d - 5 * l,
                  c = d - 10 * l,
                  p = d + 10 * l,
                  m = d + 5 * l;
                for (let t = o; t <= r; t += 0.5) {
                  const n = D(t, o, r, s, e - s);
                  a.push(
                    i.createElement("circle", {
                      key: "pip" + t,
                      cx: n,
                      cy: d,
                      r: "0.75",
                      stroke: "none",
                      fill: "rgb(128,128,128)",
                    }),
                  );
                }
                for (let t = o; t <= r; t += 2) {
                  const n = D(t, o, r, s, e - s);
                  a.push(
                    i.createElement("line", {
                      key: "line" + t,
                      x1: n,
                      y1: d,
                      x2: n,
                      y2: u,
                      style: { stroke: "rgb(96,96,96)", strokeWidth: 2 },
                    }),
                  );
                }
                {
                  let t = D(64, o, r, s, e - s);
                  a.push(
                    i.createElement("line", {
                      key: "centraltick",
                      x1: t,
                      y1: d,
                      x2: t,
                      y2: c,
                      style: { stroke: "rgb(164,164,164)", strokeWidth: 2 },
                    }),
                  );
                }
                {
                  let t = D(n - 0.5, o, r, s, e - s),
                    l = D(n + 0.5, o, r, s, e - s),
                    d =
                      t +
                      "," +
                      p +
                      " " +
                      l +
                      "," +
                      p +
                      " " +
                      0.5 * (t + l) +
                      "," +
                      m;
                  a.push(
                    i.createElement("polygon", {
                      key: "triangle",
                      points: d,
                      style: {
                        stroke: "rgb(128,128,128)",
                        strokeWidth: 1.5,
                        fill: "rgb(30,30,30)",
                      },
                    }),
                  );
                }
                return i.createElement(
                  "svg",
                  { width: e, height: t, viewBox: [0, 0, e, t].join(" ") },
                  a,
                );
              })(240, 50, this.state.ipdValue, l, d);
            return i.createElement(
              a.dL,
              { parent_path: "/user/head" },
              i.createElement(
                a.dL,
                {
                  translation: { y: -0.4, z: -0.87 },
                  rotation: { x: -30 },
                  scale: s,
                },
                i.createElement(
                  a.Zk,
                  {
                    width: void 0,
                    height: I.kPanelHeight,
                    interactive: !1,
                    sort_order: 1e3,
                    debug_name: "ipd",
                  },
                  i.createElement(
                    "div",
                    { className: r.join(" "), style: { width: I.kPixelWidth } },
                    i.createElement(
                      "div",
                      { className: "FlexColumn" },
                      i.createElement(
                        "div",
                        { className: "IPDNumberRow" },
                        i.createElement(
                          "div",
                          { className: "IPDNumberText" },
                          this.state.ipdValue.toFixed(1),
                        ),
                        i.createElement(
                          "div",
                          { className: "IPDLabelText" },
                          "mm",
                        ),
                      ),
                      i.createElement(
                        "div",
                        { className: "IPDSettingTextDesc" },
                        (0, k.we)("#IPD_Description"),
                      ),
                      i.createElement(
                        "div",
                        { className: "IPDLensRow" },
                        i.createElement(
                          "div",
                          { className: "IPDLens FlipImageHorizontal" },
                          " ",
                          c,
                          " ",
                        ),
                        this.ipdLensSpacer(),
                        i.createElement(
                          "div",
                          { className: "IPDLens" },
                          " ",
                          c,
                          " ",
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            );
          }
        }
        (I.kPanelHeight = 0.16),
          (I.kPixelWidth = 600),
          (I.kFadeDelayMs = 1e3),
          (I.kFadeDurationMs = 1e3),
          (0, o.Cg)([s.o], I.prototype, "StartFade", null),
          (0, o.Cg)([s.o], I.prototype, "HideOverlay", null),
          (0, o.Cg)([s.o], I.prototype, "IPDChanged", null);
        var H,
          x,
          V = n(2563),
          P = n(1835);
        !(function (e) {
          (e[(e.Opaque = 0)] = "Opaque"),
            (e[(e.FadingIn = 1)] = "FadingIn"),
            (e[(e.FadingOut = 2)] = "FadingOut");
        })(x || (x = {}));
        let O = (H = class extends i.Component {
          constructor(e) {
            super(e),
              (this.m_hideTimeout = void 0),
              (this.m_fadeTimeout = void 0),
              (this.m_unresponsiveTimeout = void 0),
              (this.m_sceneApplicationStateChangedEventHandle = null),
              (this.m_mountedTime = void 0),
              (this.state = {
                visible: !1,
                opacity: x.Opaque,
                latchedAppName: "",
                latchedAppKey: "",
                latchedSceneApplicationState: null,
                alreadyHidDashboard: !1,
              }),
              T.HR.Init(!1);
          }
          componentDidMount() {
            (this.m_sceneApplicationStateChangedEventHandle =
              null === a.Ay || void 0 === a.Ay
                ? void 0
                : a.Ay.RegisterForSceneApplicationStateChangedEvents(
                    this.onSceneApplicationStateChanged,
                  )),
              (this.m_mountedTime = new Date().getTime()),
              this.updateTransitionState();
          }
          log(e) {
            let t = (new Date().getTime() - this.m_mountedTime) / 1e3;
            console.log("[transition] " + t + " " + e);
          }
          componentWillUnmount() {
            var e;
            this.m_unresponsiveTimeout &&
              (window.clearTimeout(this.m_unresponsiveTimeout),
              (this.m_unresponsiveTimeout = void 0)),
              this.m_fadeTimeout &&
                (window.clearTimeout(this.m_fadeTimeout),
                (this.m_fadeTimeout = void 0)),
              this.m_hideTimeout &&
                (window.clearTimeout(this.m_hideTimeout),
                (this.m_hideTimeout = void 0)),
              null === (e = this.m_sceneApplicationStateChangedEventHandle) ||
                void 0 === e ||
                e.unregister();
          }
          maybeHideDashboard(e) {
            if (this.state.alreadyHidDashboard) return;
            const t = a.Ay.VRApplications.GetStartingApplicationKey();
            t &&
              t != H.k_sHomeAppKey &&
              (a.Ay.VRDashboardManager.HideDashboard(e),
              this.setState({ alreadyHidDashboard: !0 }));
          }
          updateTransitionState() {
            if (
              !(null === a.Ay || void 0 === a.Ay ? void 0 : a.Ay.VRApplications)
            )
              return;
            let e = a.Ay.VRApplications.GetSceneApplicationState();
            e == a.HW.Starting
              ? (this.state.latchedSceneApplicationState == a.HW.Quitting &&
                  this.resetLatchedValued(),
                this.setState({ latchedSceneApplicationState: e }),
                this.updateLatchedValues(),
                this.show(!1),
                this.cancelUnresponsiveTimeout(),
                this.maybeHideDashboard("transition_app_starting"))
              : e == a.HW.Quitting
                ? (this.state.latchedSceneApplicationState == a.HW.Starting &&
                    this.resetLatchedValued(),
                  this.setState({ latchedSceneApplicationState: e }),
                  this.updateLatchedValues(),
                  this.show(!1),
                  this.cancelUnresponsiveTimeout(),
                  this.maybeHideDashboard("transition_app_quitting"))
                : e == a.HW.Running
                  ? (this.cancelUnresponsiveTimeout(),
                    this.state.visible && this.startFadeOut())
                  : e == a.HW.None
                    ? (this.cancelUnresponsiveTimeout(),
                      this.state.visible && this.hideSoon())
                    : e == a.HW.Waiting &&
                      (this.state.visible
                        ? (this.cancelUnresponsiveTimeout(), this.show(!0))
                        : this.startUnresponsiveTimer());
          }
          startUnresponsiveTimer() {
            null == this.m_unresponsiveTimeout &&
              (this.m_unresponsiveTimeout = window.setTimeout(
                this.onUnresponsiveTimeout,
                H.kUnresponsiveDelayMs,
              ));
          }
          cancelUnresponsiveTimeout() {
            this.m_unresponsiveTimeout &&
              (window.clearTimeout(this.m_unresponsiveTimeout),
              (this.m_unresponsiveTimeout = void 0));
          }
          onUnresponsiveTimeout() {
            window.clearTimeout(this.m_unresponsiveTimeout),
              (this.m_unresponsiveTimeout = void 0),
              this.setState({ latchedSceneApplicationState: a.HW.Waiting }),
              this.show(!0),
              this.updateLatchedValues();
          }
          updateLatchedValues() {
            if (null === a.Ay || void 0 === a.Ay ? void 0 : a.Ay.VRApplications)
              if (
                a.Ay.VRApplications.GetSceneApplicationState() == a.HW.Starting
              ) {
                let e = a.Ay.VRApplications.GetStartingApplicationKey();
                e && e.length > 0 && this.setState({ latchedAppKey: e });
                let t = a.Ay.GetStartingAppName();
                t && t.length > 0 && this.setState({ latchedAppName: t });
              } else {
                let e = a.Ay.VRApplications.GetSceneApplicationKey();
                e && e.length > 0 && this.setState({ latchedAppKey: e });
                let t = a.Ay.GetCurrentSceneFocusAppName();
                t && t.length > 0 && this.setState({ latchedAppName: t });
              }
          }
          onSceneApplicationStateChanged() {
            this.updateTransitionState();
          }
          show(e) {
            this.cancelFadeOutTimers(),
              e
                ? this.state.visible ||
                  this.setState({ visible: !0, opacity: x.FadingIn })
                : this.setState({ visible: !0, opacity: x.Opaque });
          }
          cancelFadeOutTimers() {
            this.m_fadeTimeout && window.clearTimeout(this.m_fadeTimeout),
              this.m_hideTimeout && window.clearTimeout(this.m_hideTimeout),
              (this.m_fadeTimeout = void 0),
              (this.m_hideTimeout = void 0);
          }
          hideSoon() {
            this.m_hideTimeout ||
              this.m_fadeTimeout ||
              (this.m_fadeTimeout = window.setTimeout(
                this.startFadeOut,
                H.kHideDelayMs,
              ));
          }
          startFadeOut() {
            this.m_fadeTimeout &&
              (window.clearTimeout(this.m_fadeTimeout),
              (this.m_fadeTimeout = void 0)),
              this.setState({ opacity: x.FadingOut }),
              (this.m_hideTimeout = window.setTimeout(
                this.hideAndResetLatchedValues,
                H.kFadeoutTimeMs,
              ));
          }
          resetLatchedValued() {
            this.setState({
              latchedAppName: "",
              latchedAppKey: "",
              latchedSceneApplicationState: null,
            });
          }
          hideAndResetLatchedValues() {
            this.cancelFadeOutTimers(),
              this.resetLatchedValued(),
              this.setState({
                visible: !1,
                opacity: x.Opaque,
                alreadyHidDashboard: !1,
              });
          }
          render() {
            if (!this.state.visible) return null;
            if (P.SW.m_bDashboardVisible) return null;
            let e = "",
              t = "";
            if (
              this.state.latchedAppKey &&
              this.state.latchedAppKey.length > 0 &&
              !this.state.latchedAppKey.includes("system.generated")
            )
              e = "/app/image?app_key=" + this.state.latchedAppKey;
            else {
              let n = 8;
              if (
                ((e =
                  "images/dynamictitle.000" +
                  (Math.abs(
                    (function (e) {
                      let t = 0,
                        n = 0;
                      for (; t < e.length; t++)
                        n = (Math.imul(31, n) + e.charCodeAt(t)) | 0;
                      return n;
                    })(this.state.latchedAppKey),
                  ) %
                    n) +
                  ".png"),
                (t = this.state.latchedAppName),
                !t)
              )
                return null;
            }
            let n = this.state.latchedAppKey === H.k_sHomeAppKey,
              o = !1,
              r = "";
            switch (this.state.latchedSceneApplicationState) {
              case a.HW.Quitting:
                r = (0, k.we)("#Now_Quitting");
                break;
              case a.HW.Starting:
                r = (0, k.we)(n ? "" : "#Now_Starting");
                break;
              case a.HW.Waiting:
                (r = (0, k.we)("#Now_Waiting")), (o = !0);
            }
            let s = r.length > 0,
              l = ["TransitionAppImage"],
              d = ["TransitionAppLabels"],
              u = ["TransitionAppSpinner"];
            this.state.opacity == x.FadingIn
              ? (l.push("FadingIn"), d.push("FadingIn"), u.push("FadingIn"))
              : this.state.opacity == x.FadingOut &&
                (l.push("FadingOut"), d.push("FadingOut"), u.push("FadingOut")),
              o && l.push("Waiting");
            let c = null;
            return (
              e.includes("revive.app") && (c = 310),
              i.createElement(
                a.sJ,
                null,
                i.createElement(
                  a.dL,
                  {
                    translation: { y: -0.1125, z: -P.SW.dashboardDistance },
                    scale: 0.244,
                  },
                  i.createElement(
                    a.Zk,
                    {
                      width: 1.5,
                      height: void 0,
                      interactive: !1,
                      origin: a.Oi.BottomCenter,
                      reflect: 0.05,
                      debug_name: "transition",
                    },
                    i.createElement(
                      "div",
                      {
                        className: l.join(" "),
                        style: {
                          backgroundImage: e ? "url('" + e + "')" : null,
                          height: c,
                        },
                      },
                      " ",
                      t,
                      " ",
                    ),
                  ),
                  s &&
                    i.createElement(
                      a.dL,
                      { translation: { y: 0.08, z: -0.08 } },
                      i.createElement(
                        a.Zk,
                        {
                          width: 1.275,
                          height: void 0,
                          interactive: !1,
                          origin: a.Oi.TopCenter,
                          debug_name: "transition-appstatus",
                        },
                        i.createElement(
                          "div",
                          { className: d.join(" ") },
                          i.createElement("div", { className: "AppStatus" }, r),
                        ),
                      ),
                    ),
                  o &&
                    i.createElement(
                      a.dL,
                      { translation: { y: 0.35, z: 0.05 } },
                      i.createElement(
                        a.Zk,
                        {
                          width: 1.5 * 0.1,
                          height: void 0,
                          interactive: !1,
                          debug_name: "transition-waiting",
                        },
                        i.createElement(
                          "div",
                          { className: u.join(" ") },
                          i.createElement(V.bR, null),
                        ),
                      ),
                    ),
                ),
              )
            );
          }
        });
        (O.k_sHomeAppKey = "openvr.tool.steamvr_environments"),
          (O.kHideDelayMs = 5e3),
          (O.kUnresponsiveDelayMs = 2e3),
          (O.kFadeoutTimeMs = 550),
          (0, o.Cg)([s.o], O.prototype, "startUnresponsiveTimer", null),
          (0, o.Cg)([s.o], O.prototype, "cancelUnresponsiveTimeout", null),
          (0, o.Cg)([s.o], O.prototype, "onUnresponsiveTimeout", null),
          (0, o.Cg)([s.o], O.prototype, "updateLatchedValues", null),
          (0, o.Cg)([s.o], O.prototype, "onSceneApplicationStateChanged", null),
          (0, o.Cg)([s.o], O.prototype, "show", null),
          (0, o.Cg)([s.o], O.prototype, "cancelFadeOutTimers", null),
          (0, o.Cg)([s.o], O.prototype, "hideSoon", null),
          (0, o.Cg)([s.o], O.prototype, "startFadeOut", null),
          (0, o.Cg)([s.o], O.prototype, "resetLatchedValued", null),
          (0, o.Cg)([s.o], O.prototype, "hideAndResetLatchedValues", null),
          (O = H = (0, o.Cg)([l.PA], O));
        var F = n(7813),
          A = n(998),
          B = n(4963),
          N = n(9118),
          Z = n(5802),
          U = n(1532),
          W = n(6646),
          z = (n(9569), n(5572)),
          G = n.n(z),
          K = n(6379);
        (0, l.PA)(function () {
          return null;
        });
        const j = (0, l.PA)(function () {
          return P.SW.m_bTrackingRecording
            ? i.createElement(
                "div",
                { className: G().TrackingDataRecordingNotification },
                i.createElement(p.Kj, null),
              )
            : null;
        });
        function $() {
          return i.createElement(
            a.dL,
            { parent_path: "/user/head" },
            i.createElement(
              a.dL,
              {
                translation: { x: 0.2, y: 0.42, z: -0.87 },
                rotation: { x: 30 },
                scale: 1,
              },
              i.createElement(
                a.Zk,
                {
                  meters_per_pixel: u.iZ,
                  sort_order: 1e3,
                  debug_name: "persistent_notifications",
                  key: "persistent_notifications",
                },
                i.createElement(
                  "div",
                  { className: G().PersistentNotificationsContainer },
                  !1,
                  i.createElement(j, null),
                ),
              ),
            ),
          );
        }
        var Q = n(9728);
        const J = 0.0508,
          X = 0.0015875;
        let q = class extends i.Component {
          constructor(e) {
            super(e),
              (this.m_EventHandles = []),
              (this.state = { groupId: 0, groupName: "" });
          }
          componentDidMount() {}
          componentWillUnmount() {
            0;
          }
          render() {
            var e, t, n, o;
            const r =
                null !==
                  (e = T.HR.settings.get(
                    "/settings/dashboard/enableLTCReflections",
                  )) &&
                void 0 !== e &&
                e,
              s =
                null !==
                  (t = T.HR.settings.get(
                    "/settings/dashboard/theaterModeReflection",
                  )) && void 0 !== t
                  ? t
                  : 0.5,
              l =
                null !==
                  (n = T.HR.settings.get(
                    "/settings/dashboard/theaterModeBrightness",
                  )) && void 0 !== n
                  ? n
                  : 0.5,
              u = Math.pow(s, 2.2),
              c = Math.pow(l, 2.2),
              p = Q.G.Instance.SceneApplicationState !== a.HW.None,
              m = P.SW.sceneAppDimmingActive,
              h = P.SW.isGroupMode;
            let v, g;
            K.c.m_eCameraExposure == a.Yu.ECameraExposure_HighExposure
              ? ((g = [0.06, 0.08, 0.3]),
                (v = P.SW.m_bDashboardVisible
                  ? [0.35, 0.35, 0.35]
                  : [0.6, 0.6, 0.6]))
              : ((g = [0.09, 0.12, 0.6 * 0.75]),
                (v = P.SW.m_bDashboardVisible ? [0.6, 0.6, 0.6] : [1, 1, 1]));
            let _,
              C = [];
            if (
              (0 == d.H.roomSetupStep
                ? C.push(a.vz.QuickRecenter)
                : (2 != d.H.roomSetupStep && 3 != d.H.roomSetupStep) ||
                  C.push(a.vz.RoomSetupFloor),
              0 != d.H.roomSetupStep && 1 != d.H.roomSetupStep)
            )
              return i.createElement(
                i.Fragment,
                null,
                i.createElement(a.oi, {
                  "scene-color-mult": 0,
                  "floor-color-mult": 1,
                  "skydome-mult": 1,
                  "scene-reflection-mult": 0.25,
                  "roomview-mult": { to: v },
                  "allowed-action-sets": C,
                  "inhibit-bounds-rendering": !0,
                  "pause-notifications": !0,
                  "roomview-enable-override": !0,
                  "systemlayer-msaa-enable-override": !0,
                  "construct-alpha-override": 1,
                }),
              );
            if (
              ((_ = p
                ? m
                  ? 0.15
                  : 1
                : {
                    channel: a.KI.TheaterSlow,
                    from: 1,
                    to: c,
                    interp: a.$.SmoothStep,
                  }),
              !d.H.m_bShowFloor)
            ) {
              const e =
                0.2 *
                (null !==
                  (o = T.HR.settings.get(
                    "/settings/dashboard/theaterModeSharpness",
                  )) && void 0 !== o
                  ? o
                  : 0.5);
              return i.createElement(
                i.Fragment,
                null,
                i.createElement(a.oi, {
                  "scene-color-mult": _,
                  "floor-color-mult": _,
                  "skydome-mult": 1,
                  "scene-reflection-mult": {
                    channel: a.KI.TheaterSlow,
                    from: 1,
                    to: u,
                    interp: a.$.SmoothStep,
                  },
                  "roomview-mult": { to: [1, 1, 1] },
                  "allowed-action-sets": C,
                }),
                r &&
                  P.SW.isTheaterMode &&
                  i.createElement(a.B4, {
                    "tile-size": 0.05588,
                    "tile-gap": X,
                    "outer-radius": 3.75,
                    "fade-distance": 0.5,
                    height: 0.001,
                    "center-randomization": 0.25,
                    "luma-randomization": {
                      "min-gain": 0.15,
                      "max-gain": 0.175,
                    },
                    "reflection-randomization": {
                      "min-gain": e,
                      "max-gain": e,
                    },
                    "normal-randomization-degrees": 1.5,
                    chevron: { "luma-scale": 0.3, "reflection-scale": 0.2 },
                    "auto-subdivide": !1,
                    color: { r: 0.02, g: 0.04, b: 0.1 },
                  }),
              );
            }
            return i.createElement(
              "div",
              { className: "Construct" },
              i.createElement(a.oi, {
                "scene-color-mult": _,
                "floor-color-mult": _,
                "skydome-mult": {
                  channel: a.KI.TheaterSlow,
                  from: 1,
                  to: 0,
                  interp: a.$.SmoothStep,
                },
                "scene-reflection-mult": {
                  channel: a.KI.TheaterSlow,
                  from: 1,
                  to: u,
                  interp: a.$.SmoothStep,
                },
                "roomview-mult": {
                  channel: a.KI.TheaterSlow,
                  from: v,
                  to: g,
                  interp: a.$.SmoothStep,
                },
                "allowed-action-sets": C,
              }),
              i.createElement(
                a.dL,
                { parent_path: h ? "/system/locomotion/inverse" : void 0 },
                i.createElement(
                  a.dL,
                  { transform_path: h ? "/remote/spawn/inverse" : void 0 },
                  r &&
                    d.H.m_bShowFloor &&
                    i.createElement(a.B4, {
                      "tile-size": J,
                      "tile-gap": 0,
                      "outer-radius": 3.5,
                      "fade-distance": 0.5,
                      height: 0.001,
                      "center-randomization": 0.25,
                      "luma-randomization": {
                        "min-gain": 0.15,
                        "max-gain": 0.175,
                      },
                      "reflection-randomization": {
                        "min-gain": 0.1,
                        "max-gain": 0.1,
                      },
                      "normal-randomization-degrees": 1.5,
                      chevron: { "luma-scale": 0.5, "reflection-scale": 0.2 },
                      "auto-subdivide": !1,
                      "floor-aa-shader": !0,
                    }),
                  r &&
                    d.H.m_bShowFloorFar &&
                    !P.SW.isTheaterMode &&
                    i.createElement(a.B4, {
                      "tile-size": 1.016,
                      "tile-gap": 3 * X,
                      "outer-radius": d.H.m_fBackgroundDomeRadius - 0.5,
                      "fade-distance": 1,
                      height: 0,
                      offset: {
                        x: d.H.m_fBackgroundOffsetX,
                        y: d.H.m_fBackgroundOffsetZ,
                      },
                      "center-randomization": 0,
                      "luma-randomization": {
                        "min-gain": 0.125,
                        "max-gain": 0.1375,
                      },
                      "reflection-randomization": {
                        "min-gain": 0,
                        "max-gain": 0,
                      },
                      "normal-randomization-degrees": 0,
                      "auto-subdivide": !0,
                    }),
                  !1,
                ),
              ),
            );
          }
        };
        q = (0, o.Cg)([l.PA], q);
        var Y = n(3246),
          ee = n(4007),
          te = n(1909),
          ne = n(2156),
          oe = n(7600),
          ie = n(582);
        function re() {
          return i.createElement(
            "div",
            { className: "LoadingThrobberContainer" },
            i.createElement("div", { className: "LoadingThrobber" }),
          );
        }
        function se() {
          return i.createElement(
            "div",
            { className: "RoomSetupUI" },
            i.createElement(
              "div",
              { className: "Title" },
              '"Error Loading Steam"',
            ),
            i.createElement(
              "div",
              { className: "Body" },
              "Steam timed out while starting.",
              i.createElement("p", null),
              "Please reboot your headset to try again, and contact support if the problem persists.",
            ),
            !1,
          );
        }
        const ae = (0, l.PA)(function () {
          var e, t;
          const [n, o] = i.useState(!1),
            r = null != P.SW.bootFrame,
            s = P.SW.showLoadingThrobberOrBootOverlay,
            l = i.useRef(null),
            d = i.useRef(r),
            c = i.useCallback(() => {
              l.current && clearTimeout(l.current),
                o(!1),
                (l.current = setTimeout(() => {
                  console.error(
                    "SteamLoadingThrobber timed out after",
                    120,
                    "seconds",
                  ),
                    o(!0);
                }, 12e4));
            }, [120]),
            p = i.useCallback(() => {
              o(!1), l.current && (clearTimeout(l.current), (l.current = null));
            }, []);
          return (
            i.useEffect(
              () => (
                s && !r && c(),
                () => {
                  l.current && clearTimeout(l.current);
                }
              ),
              [s, r, c],
            ),
            i.useEffect(() => {
              const e = d.current,
                t = r;
              t ? p() : !t && e && c(), (d.current = t);
            }, [r, p, c]),
            i.useEffect(() => {
              s ? r || l.current || c() : p();
            }, [s, r, p, c]),
            s
              ? i.createElement(
                  oe.tH,
                  null,
                  i.createElement(
                    a.dL,
                    { parent_path: "/user/head" },
                    i.createElement(
                      a.m$,
                      {
                        start_angle_threshold: 10,
                        stop_angle_threshold: 5,
                        ease_out_angle_threshold: 20,
                        min_angular_velocity: 75,
                        ease_in_power: 1.5,
                        lock_to_horizon: !1,
                      },
                      i.createElement(
                        a.dL,
                        { translation: P.SW.dashboardTranslation },
                        i.createElement(
                          a.dL,
                          { scale: P.SW.dashboardScale },
                          !r &&
                            i.createElement(
                              a.Zk,
                              {
                                meters_per_pixel: u.iZ,
                                interactive: n,
                                debug_name: "steam-loading-throbber",
                              },
                              !n && i.createElement(re, null),
                              n && i.createElement(se, null),
                            ),
                          r &&
                            i.createElement(a.Zk, {
                              overlay_key:
                                null ===
                                  (t =
                                    null === (e = P.SW.bootFrame) ||
                                    void 0 === e
                                      ? void 0
                                      : e.activePage) || void 0 === t
                                  ? void 0
                                  : t.summonOverlayKey,
                              meters_per_pixel: u.iZ,
                              interactive: !1,
                              debug_name: "steam-loading-boot-overlay",
                            }),
                        ),
                      ),
                    ),
                  ),
                )
              : null
          );
        });
        var le = n(3689),
          de = n(795),
          ue = n(296);
        n(9256), n(3481), n(3514), n(9383), n(5323);
        (0, ue.PA)(function (e) {
          var t;
          const n = "num_test_frames",
            [o, r] = i.useState(
              Number.parseInt(
                null !== (t = sessionStorage.getItem(n)) && void 0 !== t
                  ? t
                  : "1",
              ),
            );
          i.useEffect(() => sessionStorage.setItem(n, o.toString()), [o]);
          const [s, a] = i.useState(!0);
          return null;
        });
        var ce = n(3732),
          pe = n(2495),
          me = n(4734),
          he = n(9978),
          ve = n(5163),
          ge = n(7261);
        const _e = (0, l.PA)(function (e) {
          const { window: t } = e,
            [n, o] = i.useState(void 0);
          i.useEffect(() => {
            if (n)
              return (
                me.Q.OnDesktopWindowFrameCreated(n),
                () => me.Q.OnDesktopWindowFrameDestroyed(n)
              );
          }, [n]);
          const r = ee.Q.GetOverlayInfo(t.overlay_key);
          return r
            ? 1 != r.eOverlayType
              ? null
              : r.unFlags & a.NB.VisibleInDashboard
                ? i.createElement(
                    de.wI,
                    {
                      title: t.title,
                      iconEnum: 18,
                      iconHWND: Number.parseInt(t.hwnd),
                      showTabInDashboardBar: !0,
                      ref: o,
                    },
                    i.createElement(
                      de.P9,
                      {
                        summonOverlayKey: t.overlay_key,
                        renderChildren: "always",
                      },
                      i.createElement(
                        a.Zk,
                        {
                          interactive: !0,
                          overlay_key: r.sOverlayKey,
                          height: 2,
                          curvature_origin_id: u.ge,
                          origin: a.Oi.BottomCenter,
                          debug_name: r.sOverlayKey,
                          scale_index: (0, ve.HX)(ge.$z.Dashboard),
                        },
                        i.createElement(de.gU, null),
                      ),
                    ),
                  )
                : null
            : null;
        });
        function Ce(e) {
          return (0, he.useObserver)(() =>
            me.Q.windows.filter((e) => e.overlay_key),
          ).map((e) => i.createElement(_e, { key: e.hwnd, window: e }));
        }
        var fe;
        (0, F.configure)({ enforceActions: "never" });
        class Le extends i.Component {
          constructor(e) {
            var t;
            super(e),
              (this.m_mailbox = new a._n()),
              this.m_mailbox.Init("base_station_status_overlay").then(() => {
                this.m_mailbox.RegisterHandler(
                  "waking_base_stations_state_changed",
                  this.onWakingBaseStationsStateChanged,
                );
              }),
              (this.state = {
                bWakingBaseStations:
                  null !==
                    (t =
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.MonitorController.GetWakingBaseStationsState()) &&
                  void 0 !== t &&
                  t,
                nImagesLoaded: 0,
              });
          }
          onWakingBaseStationsStateChanged(e) {
            this.setState({ bWakingBaseStations: !!e.waking_base_stations });
          }
          onImageLoaded() {
            this.setState({ nImagesLoaded: this.state.nImagesLoaded + 1 });
          }
          render() {
            let e = this.state.nImagesLoaded >= 2;
            return i.createElement(
              a.JK,
              { visibleIn0DOF: !0, visibleIn3DOF: !0, visibleIn6DOF: !1 },
              this.state.bWakingBaseStations &&
                i.createElement(
                  a.dL,
                  { parent_path: "/user/head", translation: { z: -2.75 } },
                  i.createElement(
                    a.Zk,
                    {
                      width: 2,
                      height: void 0,
                      interactive: !1,
                      debug_name: "basestation-1",
                    },
                    i.createElement(
                      "div",
                      {
                        className:
                          "WakingBaseStationsPanel" + (e ? " Loaded" : ""),
                      },
                      i.createElement("img", {
                        className: "Rainbow",
                        src: "/dashboard/images/rainbow.png",
                        onLoad: this.onImageLoaded,
                      }),
                      i.createElement("div", { className: "Ground" }),
                    ),
                  ),
                  i.createElement(
                    a.dL,
                    { translation: { z: 0.23 } },
                    i.createElement(
                      a.Zk,
                      {
                        width: 2,
                        height: void 0,
                        interactive: !1,
                        debug_name: "basestation-2",
                      },
                      i.createElement(
                        "div",
                        {
                          className:
                            "WakingBaseStationsPanel" + (e ? " Loaded" : ""),
                        },
                        i.createElement("img", {
                          className: "Base",
                          src: "/dashboard/images/base.png",
                          onLoad: this.onImageLoaded,
                        }),
                        i.createElement(
                          "h1",
                          null,
                          (0, k.we)("#WakingUpBaseStations"),
                        ),
                      ),
                    ),
                  ),
                ),
            );
          }
        }
        (0, o.Cg)(
          [s.o],
          Le.prototype,
          "onWakingBaseStationsStateChanged",
          null,
        ),
          (0, o.Cg)([s.o], Le.prototype, "onImageLoaded", null);
        let be = (fe = class extends i.Component {
          static bootstrap(e) {
            return (0, o.sH)(this, void 0, void 0, function* () {
              var t, n;
              console.log("Bootstrap START");
              let o = document.querySelector(e);
              if (!o)
                return void console.error(
                  "Unable to boostrap systemUI because " + e + " was not found",
                );
              if ((0, a.R$)() != a.OH.Overlay)
                return void console.error(
                  "Unable to boostrap systemUI because CurrentEnvironment() returns " +
                    a.OH[(0, a.R$)()],
                );
              console.log("Bootstrapping " + e, o);
              const s = 1e3 * (null !== (t = 1760561629) ? t : 0);
              console.log(
                "SteamVR Version Info: " +
                  JSON.stringify({
                    nWebpackTimestampMS: s,
                    sWebpackTimestampUTC: new Date(s).toUTCString(),
                    sSteamVRVersion:
                      null ===
                        (n =
                          null === VRHTML || void 0 === VRHTML
                            ? void 0
                            : VRHTML.SteamVRVersion) || void 0 === n
                        ? void 0
                        : n.call(VRHTML),
                  }),
              ),
                B.u.Instance.preloadSounds(),
                null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.VROverlay.SetFlag(
                    VRHTML.VROverlay.ThisOverlayHandle(),
                    a.NB.MakeOverlaysInteractiveIfVisible,
                    !0,
                  ),
                null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.VROverlay.SetInputMethod(
                    VRHTML.VROverlay.ThisOverlayHandle(),
                    a.Rk.Mouse,
                  );
              try {
                yield Promise.all([
                  (0, k.uV)(
                    ["vrmonitor", "dashboard", "bindingui"],
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.GetSteamLanguage(),
                  ),
                  T.HR.Init(!0),
                  N.W.Init(!0),
                  Z.B$.Init(),
                  U.s.Init(),
                  W.X.Init(),
                ]),
                  yield Promise.all([
                    ce.D.Init(),
                    ee.Q.Init(),
                    me.Q.Init(),
                    le.g.Init(),
                    P.SW.Init(),
                    Y.r.Init(),
                    K.c.Init(),
                    d.H.Init(),
                    de.JJ.Init(),
                  ]),
                  yield (0, te.I)();
              } catch (e) {
                console.error("Failed to initialize systemui:", e);
              }
              (0, ie.aj)().Init("SteamVR", CLSTAMP, (0, ie.d4)()),
                r
                  .H(o)
                  .render(
                    i.createElement(a.O5, null, i.createElement(fe, null)),
                  );
            });
          }
          constructor(e) {
            super(e),
              (this.m_DashboardRequestedCallbackHandle = null),
              (this.m_mailbox = new a._n()),
              (this.m_DashboardRef = null),
              (this.m_DeviceEventCallbackHandle = null),
              (this.m_DashboardRef = i.createRef()),
              this.m_mailbox.Init("systemui").then(() => {}),
              (this.state = { bShowBaseInfo: !1 });
          }
          componentDidMount() {
            this.m_DeviceEventCallbackHandle =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.RegisterForDeviceEvents(this.DeviceEvent);
          }
          componentWillUnmount() {
            var e, t;
            null === (e = this.m_DashboardRequestedCallbackHandle) ||
              void 0 === e ||
              e.unregister(),
              null === (t = this.m_DeviceEventCallbackHandle) ||
                void 0 === t ||
                t.unregister();
          }
          DeviceEvent(e, t, n) {
            e == a.ku.Activated &&
              (null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRSystem.GetTrackedDeviceClasses().some(
                    (e) => e.unIndex == n && e.eClass == a.mo.Controller,
                  )) &&
              this.forceUpdate();
          }
          render() {
            let e = [];
            e.push(
              i.createElement(
                oe.tH,
                { key: "loading" },
                i.createElement(ae, null),
              ),
            ),
              e.push(
                i.createElement(
                  oe.tH,
                  { key: "dashboard" },
                  i.createElement(w.cQ, { ref: this.m_DashboardRef }),
                ),
              ),
              e.push(
                i.createElement(
                  oe.tH,
                  { key: "desktopframes" },
                  i.createElement(pe.B, null),
                ),
              ),
              e.push(
                i.createElement(
                  oe.tH,
                  { key: "desktopwindowframes" },
                  i.createElement(Ce, null),
                ),
              ),
              e.push(
                i.createElement(
                  oe.tH,
                  { key: "transition" },
                  i.createElement(O, null),
                ),
              ),
              e.push(
                i.createElement(
                  oe.tH,
                  { key: "basestationstatus" },
                  i.createElement(Le, null),
                ),
              );
            let t = 0;
            return (
              VRHTML.VRSystem.GetTrackedDeviceClasses().some(
                (n) => (
                  n.eClass == a.mo.Controller &&
                    (t++,
                    e.push(
                      i.createElement(
                        oe.tH,
                        { key: "controllerstatus_" + n.unIndex },
                        i.createElement(A.C, { trackedDeviceIndex: n.unIndex }),
                      ),
                    )),
                  t >= 8
                ),
              ),
              (null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRProperties.GetBoolProperty(
                    a.Gz,
                    a.fD.DriverProvidedIPDVisibility_Bool,
                  )) ||
                e.push(
                  i.createElement(
                    oe.tH,
                    { key: "ipd" },
                    i.createElement(I, null),
                  ),
                ),
              e.push(
                i.createElement(
                  oe.tH,
                  { key: "progressindicator" },
                  i.createElement(f, null),
                ),
              ),
              e.push(
                i.createElement(
                  oe.tH,
                  { key: "chaperonesafety" },
                  i.createElement(M, null),
                ),
              ),
              e.push(
                i.createElement(
                  oe.tH,
                  { key: "pooledpopups" },
                  i.createElement(ne.F, null),
                ),
              ),
              e.push(
                i.createElement(
                  oe.tH,
                  { key: "construct" },
                  i.createElement(q, null),
                ),
              ),
              e.push(
                i.createElement(
                  oe.tH,
                  { key: "roomsetup" },
                  i.createElement(R, null),
                ),
              ),
              e.push(
                i.createElement(
                  oe.tH,
                  { key: "persistentnotifications" },
                  i.createElement($, null),
                ),
              ),
              i.createElement("span", null, e)
            );
          }
        });
        (0, o.Cg)([s.o], be.prototype, "DeviceEvent", null),
          (be = fe = (0, o.Cg)([l.PA], be)),
          console.log("systemui.tsx is running CL", CLSTAMP),
          be.bootstrap("#root");
      },
      9471: (e, t, n) => {
        "use strict";
        n.d(t, {
          bm: () => _,
          Pq: () => h,
          Xj: () => v,
          DO: () => c,
          FG: () => d,
          YN: () => u,
          hU: () => p,
          WM: () => m,
          fr: () => g,
          Kj: () => C,
        });
        var o = n(1635),
          i = n(6540);
        let r = 0;
        function s() {
          const e = i.useRef(void 0);
          return (
            void 0 === e.current && (e.current = "svgid_" + r++),
            [e.current, `url(#${e.current})`]
          );
        }
        var a = n(108),
          l = n.n(a);
        function d(e) {
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
        function u(e) {
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
        function c(e) {
          return i.createElement(
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
            i.createElement("path", {
              fill: "currentColor",
              d: "M15.6615 10.25C15.3525 10.7125 15.1875 11.2562 15.1875 11.8125C15.1867 12.1821 15.2589 12.5482 15.3999 12.8898C15.541 13.2314 15.7481 13.5417 16.0094 13.8031C16.2708 14.0644 16.5811 14.2715 16.9227 14.4126C17.2643 14.5536 17.6304 14.6258 18 14.625C18.5563 14.625 19.1 14.4601 19.5625 14.151C20.0251 13.842 20.3855 13.4027 20.5984 12.8888C20.8113 12.3749 20.867 11.8094 20.7585 11.2638C20.6499 10.7182 20.3821 10.2171 19.9887 9.82376C19.5954 9.43043 19.0943 9.16256 18.5487 9.05404C18.0031 8.94552 17.4376 9.00122 16.9237 9.21409C16.4098 9.42696 15.9705 9.78745 15.6615 10.25Z",
            }),
            i.createElement("path", {
              fill: "currentColor",
              d: "M14.4645 17.9645C15.4021 17.0268 16.6739 16.5 18 16.5C19.3261 16.5 20.5979 17.0268 21.5355 17.9645C22.4732 18.9021 23 20.1739 23 21.5V24H21L20.5 29H15.5L15 24H13V21.5C13 20.1739 13.5268 18.9021 14.4645 17.9645Z",
            }),
            i.createElement("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M18 0L35 7.00016V29L18 36L1 29V7.00016L18 0ZM4 27.7647V9.76471L18 4L32 9.76471V27.7647L24.6111 24.7222L24.1734 27.7864L27.1208 29L18 32.7556L8.87919 29L11.8266 27.7864L11.3889 24.7222L4 27.7647Z",
            }),
          );
        }
        function p(e) {
          return i.createElement(
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
            i.createElement("path", {
              fill: "currentColor",
              d: "M14.7261 2.74994C14.2934 3.39746 14.0625 4.15874 14.0625 4.9375C14.0613 5.45491 14.1624 5.96744 14.3599 6.44568C14.5573 6.92392 14.8473 7.35845 15.2132 7.72431C15.5791 8.09017 16.0136 8.38016 16.4918 8.57763C16.9701 8.7751 17.4826 8.87616 18 8.875C18.7788 8.875 19.54 8.64407 20.1876 8.21141C20.8351 7.77876 21.3398 7.1638 21.6378 6.44432C21.9358 5.72483 22.0138 4.93313 21.8618 4.16933C21.7099 3.40553 21.3349 2.70394 20.7842 2.15327C20.2336 1.6026 19.532 1.22759 18.7682 1.07566C18.0044 0.92373 17.2127 1.00171 16.4932 1.29973C15.7737 1.59775 15.1587 2.10243 14.7261 2.74994Z",
            }),
            i.createElement("path", {
              fill: "currentColor",
              d: "M13.0503 13.5503C14.363 12.2375 16.1435 11.5 18 11.5C19.8565 11.5 21.637 12.2375 22.9497 13.5503C24.2625 14.863 25 16.6435 25 18.5V22H22.2L21.5 29H14.5L13.8 22H11V18.5C11 16.6435 11.7375 14.863 13.0503 13.5503Z",
            }),
            i.createElement("path", {
              fill: "currentColor",
              d: "M3 29C3 26.5645 5.66517 24.4196 9.70869 23.1656L10.0112 26.224C9.52728 26.393 9.07639 26.5754 8.66205 26.7688C6.18364 27.9254 6 28.9249 6 29C6 29.0751 6.18364 30.0746 8.66205 31.2312C10.8969 32.2741 14.1952 33 18 33C21.8048 33 25.1031 32.2741 27.3379 31.2312C29.8164 30.0746 30 29.0751 30 29C30 28.9249 29.8164 27.9254 27.3379 26.7688C26.9236 26.5754 26.4727 26.393 25.9888 26.224L26.2913 23.1656C30.3348 24.4196 33 26.5645 33 29C33 32.866 26.2843 36 18 36C9.71573 36 3 32.866 3 29Z",
            }),
          );
        }
        function m(e) {
          return i.createElement(
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
            i.createElement("path", {
              fill: "currentColor",
              d: "M11 9H29V19H26.6585C26.8797 19.6256 27 20.2987 27 21C27 21.3407 26.9716 21.6748 26.917 22H32V6H8V15.083C8.32521 15.0284 8.65929 15 9 15C9.70126 15 10.3744 15.1203 11 15.3415V9Z",
            }),
            i.createElement("path", {
              fill: "currentColor",
              d: "M9 24C10.6569 24 12 22.6569 12 21C12 19.3431 10.6569 18 9 18C7.34315 18 6 19.3431 6 21C6 22.6569 7.34315 24 9 24Z",
            }),
            i.createElement("path", {
              fill: "currentColor",
              d: "M21 24C22.6569 24 24 22.6569 24 21C24 19.3431 22.6569 18 21 18C19.3431 18 18 19.3431 18 21C18 22.6569 19.3431 24 21 24Z",
            }),
            i.createElement("path", {
              fill: "currentColor",
              d: "M26 30C26 27.2386 23.7614 25 21 25C18.2386 25 16 27.2386 16 30V32H26V30Z",
            }),
            i.createElement("path", {
              fill: "currentColor",
              d: "M14 30C14 27.2386 11.7614 25 9 25C6.23858 25 4 27.2386 4 30V32H14V30Z",
            }),
          );
        }
        function h(e) {
          const { none: t, partial: n, right: r, left: s } = e,
            a = (0, o.Tt)(e, ["none", "partial", "right", "left"]);
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
            : n || r
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
        function v(e) {
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
        function g(e) {
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
        function _(e) {
          return i.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "SVGIcon_Button SVGIcon_Close",
                viewBox: "0 0 36 36",
                fill: "none",
              },
              e,
            ),
            i.createElement("path", {
              d: "M32.12 7.41L28.59 3.88L18 14.46L7.41 3.88L3.88 7.41L14.46 18L3.88 28.59L7.41 32.12L18 21.54L28.59 32.12L32.12 28.59L21.54 18L32.12 7.41Z",
              fill: "currentColor",
            }),
          );
        }
        function C(e) {
          const [t, n] = s(),
            [o, r] = s();
          return i.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "500",
                height: "250",
                viewBox: "0 0 500 250",
                fill: "none",
              },
              e,
            ),
            i.createElement(
              "g",
              { clipPath: r },
              i.createElement(
                "mask",
                {
                  id: t,
                  style: { maskType: "luminance" },
                  maskUnits: "userSpaceOnUse",
                  x: "0",
                  y: "0",
                  width: "500",
                  height: "250",
                },
                i.createElement("path", {
                  fill: "white",
                  d: "M500 0H0V250H500V0Z",
                }),
              ),
              i.createElement(
                "g",
                { mask: n },
                i.createElement("path", {
                  fill: "#323232EE",
                  d: "M375 0H125C55.9644 0 0 55.9644 0 125C0 194.036 55.9644 250 125 250H375C444.036 250 500 194.036 500 125C500 55.9644 444.036 0 375 0Z",
                }),
                i.createElement("path", {
                  fill: "black",
                  d: "M310.749 58.0107C321.991 58.0522 333.222 58.2335 344.453 58.9082L345.688 58.9844C358.47 59.7916 371.932 61.2894 384.305 64.8662L384.905 65.042C397.49 68.7656 409.658 74.9172 418.358 85.415L418.564 85.667C427.273 96.3129 431.026 109.475 431.828 122.783L431.851 123.191C432.306 131.63 431.341 139.668 429.338 147.856L429.241 148.253C427.178 156.567 424.026 164.173 418.677 171.01L418.421 171.335C407.052 185.613 390.364 190.677 373.375 191.612L372.974 191.634C370.365 191.764 367.761 191.789 365.147 191.661L364.624 191.634C361.417 191.451 358.273 191.047 355.142 190.289C352.096 189.555 349.228 188.524 346.434 187.117L346.164 186.979C340.19 183.91 335.864 179.679 331.881 174.433C330.428 172.525 329.071 170.552 327.725 168.573L326.379 166.594C324.575 163.95 322.765 161.333 320.641 158.925C318.353 156.327 316.032 154.326 313.392 152.972C310.753 151.618 307.793 150.911 304.227 150.904C297.097 150.917 292.141 153.731 287.566 158.925C285.707 161.032 284.089 163.3 282.505 165.604L281.829 166.594C280.031 169.231 278.263 171.889 276.326 174.433L275.586 175.389C271.867 180.114 267.789 183.969 262.323 186.835L262.044 186.979C259.255 188.411 256.394 189.463 253.36 190.217L253.066 190.289C250.032 191.023 246.987 191.425 243.884 191.616L243.584 191.634C240.795 191.792 238.017 191.773 235.234 191.634C218.107 190.756 201.245 185.726 189.787 171.335C184.368 164.523 181.164 156.94 179.067 148.648L178.967 148.253C176.866 139.795 175.863 131.507 176.38 122.783L176.399 122.469C177.247 109.163 181.062 96.0212 189.85 85.415L190.058 85.166C198.882 74.6545 211.204 68.5422 223.902 64.8662L224.501 64.6943C237.109 61.1275 250.813 59.6846 263.755 58.9082L264.39 58.8711C275.722 58.2187 291.472 58.0466 304.078 58.0088C304.084 58.0032 304.092 58 304.101 58L306.624 58.001C306.865 58.0012 307.105 58.0016 307.345 58.002C308.51 58.0003 309.638 58 310.724 58C310.734 58 310.743 58.004 310.749 58.0107Z",
                }),
                i.createElement("path", {
                  fill: "white",
                  d: "M310.749 58.0107L306.448 62.0367C307.557 63.2216 309.105 63.8966 310.728 63.9026L310.749 58.0107ZM344.453 58.9082L344.815 53.0275L344.806 53.0269L344.453 58.9082ZM345.688 58.9844L346.059 53.1042L346.051 53.1037L345.688 58.9844ZM384.305 64.8662L385.963 59.2123C385.956 59.2102 385.948 59.2081 385.941 59.2061L384.305 64.8662ZM384.905 65.042L386.576 59.3922C386.572 59.3908 386.567 59.3894 386.562 59.3881L384.905 65.042ZM418.358 85.415L422.919 81.685C422.911 81.6752 422.903 81.6653 422.894 81.6555L418.358 85.415ZM418.564 85.667L414.003 89.397L414.004 89.3977L418.564 85.667ZM431.828 122.783L437.71 122.445C437.709 122.44 437.709 122.434 437.709 122.429L431.828 122.783ZM431.851 123.191L437.734 122.874C437.734 122.867 437.734 122.86 437.733 122.854L431.851 123.191ZM429.338 147.856L435.059 149.266L435.062 149.256L429.338 147.856ZM429.241 148.253L434.959 149.672L434.962 149.662L429.241 148.253ZM418.677 171.01L423.308 174.653C423.311 174.649 423.314 174.645 423.318 174.64L418.677 171.01ZM418.421 171.335L423.031 175.005C423.038 174.996 423.045 174.987 423.052 174.978L418.421 171.335ZM373.375 191.612L373.69 197.496L373.699 197.495L373.375 191.612ZM372.974 191.634L373.268 197.518C373.275 197.518 373.282 197.518 373.289 197.517L372.974 191.634ZM365.147 191.661L364.84 197.545C364.846 197.545 364.853 197.546 364.86 197.546L365.147 191.661ZM364.624 191.634L364.288 197.516C364.297 197.517 364.307 197.517 364.316 197.518L364.624 191.634ZM355.142 190.289L356.528 184.562L356.523 184.561L355.142 190.289ZM346.434 187.117L343.761 192.368C343.769 192.372 343.776 192.376 343.784 192.379L346.434 187.117ZM346.164 186.979L343.471 192.22C343.477 192.223 343.484 192.227 343.491 192.23L346.164 186.979ZM331.881 174.433L336.574 170.87L336.568 170.863L331.881 174.433ZM326.379 166.594L331.252 163.281L331.246 163.273L326.379 166.594ZM320.641 158.925L316.22 162.819L316.222 162.822L320.641 158.925ZM304.227 150.904L304.237 145.012C304.231 145.012 304.224 145.012 304.217 145.012L304.227 150.904ZM287.566 158.925L291.985 162.822L291.987 162.819L287.566 158.925ZM282.505 165.604L277.65 162.267L277.643 162.278L282.505 165.604ZM281.829 166.594L276.966 163.267L276.96 163.275L281.829 166.594ZM276.326 174.433L280.987 178.037C280.995 178.025 281.004 178.014 281.013 178.003L276.326 174.433ZM275.586 175.389L280.216 179.032C280.227 179.019 280.237 179.006 280.247 178.993L275.586 175.389ZM262.323 186.835L265.038 192.064C265.045 192.06 265.052 192.057 265.059 192.053L262.323 186.835ZM262.044 186.979L264.735 192.221C264.743 192.217 264.751 192.213 264.76 192.208L262.044 186.979ZM253.36 190.217L254.766 195.938L254.779 195.935L253.36 190.217ZM253.066 190.289L254.452 196.016C254.459 196.014 254.466 196.012 254.473 196.011L253.066 190.289ZM243.884 191.616L244.229 197.498C244.235 197.498 244.24 197.497 244.246 197.497L243.884 191.616ZM243.584 191.634L243.917 197.516H243.929L243.584 191.634ZM235.234 191.634L234.932 197.518H234.94L235.234 191.634ZM189.787 171.335L185.176 175.003L185.177 175.005L189.787 171.335ZM179.067 148.648L173.353 150.087L173.355 150.093L179.067 148.648ZM178.967 148.253L173.249 149.674C173.251 149.68 173.252 149.686 173.254 149.692L178.967 148.253ZM176.38 122.783L182.262 123.132V123.13L176.38 122.783ZM176.399 122.469L170.519 122.094C170.518 122.103 170.518 122.112 170.517 122.122L176.399 122.469ZM189.85 85.415L185.328 81.6379C185.323 81.6439 185.318 81.6499 185.313 81.656L189.85 85.415ZM190.058 85.166L185.545 81.3778C185.542 81.3815 185.539 81.3852 185.536 81.3889L190.058 85.166ZM223.902 64.8662L222.278 59.2024C222.273 59.2039 222.268 59.2053 222.263 59.2067L223.902 64.8662ZM224.501 64.6943L222.898 59.025C222.891 59.0268 222.884 59.0287 222.878 59.0306L224.501 64.6943ZM263.755 58.9082L263.411 53.0264L263.403 53.0269L263.755 58.9082ZM264.39 58.8711L264.051 52.989L264.046 52.9893L264.39 58.8711ZM304.078 58.0088L304.095 63.9006C305.56 63.8962 306.972 63.3461 308.053 62.3574L304.078 58.0088ZM304.101 58L304.103 52.1081H304.101V58ZM306.624 58.001L306.631 52.1091H306.627L306.624 58.001ZM307.345 58.002L307.336 63.8938C307.342 63.8938 307.348 63.8938 307.353 63.8938L307.345 58.002ZM310.724 58L310.731 52.1081H310.724V58ZM310.749 58.0107L310.728 63.9026C321.929 63.9439 333.032 64.1246 344.099 64.7895L344.453 58.9082L344.806 53.0269C333.412 52.3424 322.053 52.1606 310.771 52.1189L310.749 58.0107ZM344.453 58.9082L344.09 64.7889L345.325 64.8651L345.688 58.9844L346.051 53.1037L344.815 53.0275L344.453 58.9082ZM345.688 58.9844L345.317 64.8645C357.955 65.6626 370.913 67.1279 382.669 70.5263L384.305 64.8662L385.941 59.2061C372.951 55.4509 358.986 53.9206 346.059 53.1042L345.688 58.9844ZM384.305 64.8662L382.648 70.5201L383.247 70.6959L384.905 65.042L386.562 59.3881L385.963 59.2123L384.305 64.8662ZM384.905 65.042L383.233 70.6918C395.184 74.2276 406.136 79.9016 413.821 89.1746L418.358 85.415L422.894 81.6555C413.179 69.9329 399.796 63.3036 386.576 59.3922L384.905 65.042ZM418.358 85.415L413.797 89.145L414.003 89.397L418.564 85.667L423.125 81.937L422.919 81.685L418.358 85.415ZM418.564 85.667L414.004 89.3977C421.703 98.8088 425.195 110.654 425.946 123.137L431.828 122.783L437.709 122.429C436.858 108.296 432.844 93.8169 423.124 81.9362L418.564 85.667ZM431.828 122.783L425.945 123.121L425.969 123.529L431.851 123.191L437.733 122.854L437.71 122.445L431.828 122.783ZM431.851 123.191L425.968 123.509C426.387 131.272 425.506 138.725 423.615 146.457L429.338 147.856L435.062 149.256C437.176 140.611 438.226 131.988 437.734 122.874L431.851 123.191ZM429.338 147.856L423.617 146.447L423.52 146.844L429.241 148.253L434.962 149.662L435.059 149.266L429.338 147.856ZM429.241 148.253L423.522 146.834C421.599 154.587 418.74 161.368 414.037 167.379L418.677 171.01L423.318 174.64C429.312 166.978 432.757 158.547 434.959 149.672L429.241 148.253ZM418.677 171.01L414.047 167.367L413.791 167.692L418.421 171.335L423.052 174.978L423.308 174.653L418.677 171.01ZM418.421 171.335L413.812 167.665C403.912 180.099 389.182 184.841 373.052 185.729L373.375 191.612L373.699 197.495C391.545 196.513 410.193 191.128 423.031 175.005L418.421 171.335ZM373.375 191.612L373.061 185.729L372.659 185.75L372.974 191.634L373.289 197.517L373.69 197.496L373.375 191.612ZM372.974 191.634L372.68 185.749C370.229 185.872 367.821 185.893 365.434 185.776L365.147 191.661L364.86 197.546C367.7 197.684 370.501 197.656 373.268 197.518L372.974 191.634ZM365.147 191.661L365.454 185.777L364.931 185.75L364.624 191.634L364.316 197.518L364.84 197.545L365.147 191.661ZM364.624 191.634L364.959 185.751C362.027 185.584 359.245 185.22 356.528 184.562L355.142 190.289L353.756 196.016C357.302 196.874 360.807 197.317 364.288 197.516L364.624 191.634ZM355.142 190.289L356.523 184.561C353.891 183.927 351.451 183.047 349.084 181.855L346.434 187.117L343.784 192.379C347.005 194.001 350.302 195.183 353.762 196.017L355.142 190.289ZM346.434 187.117L349.107 181.866L348.836 181.729L346.164 186.979L343.491 192.23L343.761 192.368L346.434 187.117ZM346.164 186.979L348.856 181.739C343.902 179.193 340.211 175.661 336.574 170.87L331.881 174.433L327.189 177.995C331.517 183.696 336.478 188.627 343.471 192.22L346.164 186.979ZM331.881 174.433L336.568 170.863C335.22 169.092 333.941 167.235 332.597 165.26L327.725 168.573L322.853 171.886C324.202 173.868 325.636 175.957 327.194 178.003L331.881 174.433ZM327.725 168.573L332.598 165.261L331.252 163.281L326.379 166.594L321.507 169.906L322.853 171.886L327.725 168.573ZM326.379 166.594L331.246 163.273C329.455 160.648 327.457 157.746 325.06 155.027L320.641 158.925L316.222 162.822C318.074 164.921 319.695 167.252 321.513 169.915L326.379 166.594ZM320.641 158.925L325.062 155.03C322.471 152.088 319.587 149.528 316.081 147.729L313.392 152.972L310.703 158.214C312.476 159.124 314.235 160.566 316.22 162.819L320.641 158.925ZM313.392 152.972L316.081 147.729C312.522 145.904 308.628 145.02 304.237 145.012L304.227 150.904L304.217 156.796C306.958 156.801 308.983 157.332 310.703 158.214L313.392 152.972ZM304.227 150.904L304.217 145.012C295.074 145.029 288.602 148.836 283.145 155.03L287.566 158.925L291.987 162.819C295.68 158.627 299.121 156.805 304.237 156.796L304.227 150.904ZM287.566 158.925L283.147 155.027C281.04 157.416 279.257 159.929 277.65 162.267L282.505 165.604L287.361 168.942C288.922 166.67 290.374 164.648 291.985 162.822L287.566 158.925ZM282.505 165.604L277.643 162.278L276.966 163.267L281.829 166.594L286.691 169.92L287.368 168.931L282.505 165.604ZM281.829 166.594L276.96 163.275C275.108 165.993 273.456 168.477 271.638 170.863L276.326 174.433L281.013 178.003C283.07 175.301 284.954 172.469 286.697 169.912L281.829 166.594ZM276.326 174.433L271.665 170.829L270.925 171.785L275.586 175.389L280.247 178.993L280.987 178.037L276.326 174.433ZM275.586 175.389L270.956 171.745C267.595 176.017 264.122 179.238 259.586 181.617L262.323 186.835L265.059 192.053C271.455 188.699 276.14 184.212 280.216 179.032L275.586 175.389ZM262.323 186.835L259.607 181.606L259.329 181.751L262.044 186.979L264.76 192.208L265.038 192.064L262.323 186.835ZM262.044 186.979L259.354 181.738C256.989 182.951 254.558 183.849 251.94 184.498L253.36 190.217L254.779 195.935C258.231 195.078 261.521 193.871 264.735 192.221L262.044 186.979ZM253.36 190.217L251.953 184.495L251.659 184.568L253.066 190.289L254.473 196.011L254.766 195.938L253.36 190.217ZM253.066 190.289L251.68 184.562C249.048 185.199 246.354 185.561 243.522 185.735L243.884 191.616L244.246 197.497C247.62 197.289 251.017 196.847 254.452 196.016L253.066 190.289ZM243.884 191.616L243.539 185.734L243.24 185.752L243.584 191.634L243.929 197.516L244.229 197.498L243.884 191.616ZM243.584 191.634L243.252 185.751C240.708 185.895 238.143 185.88 235.527 185.749L235.234 191.634L234.94 197.518C237.891 197.666 240.881 197.688 243.917 197.516L243.584 191.634ZM235.234 191.634L235.535 185.75C219.259 184.916 204.374 180.196 194.396 167.665L189.787 171.335L185.177 175.005C198.117 191.255 216.956 196.597 234.932 197.518L235.234 191.634ZM189.787 171.335L194.398 167.667C189.633 161.678 186.732 154.923 184.779 147.204L179.067 148.648L173.355 150.093C175.597 158.956 179.102 167.367 185.176 175.003L189.787 171.335ZM179.067 148.648L184.78 147.209L184.681 146.814L178.967 148.253L173.254 149.692L173.353 150.087L179.067 148.648ZM178.967 148.253L184.685 146.832C182.7 138.841 181.786 131.157 182.262 123.132L176.38 122.783L170.499 122.434C169.94 131.858 171.032 140.749 173.249 149.674L178.967 148.253ZM176.38 122.783L182.262 123.13L182.281 122.816L176.399 122.469L170.517 122.122L170.499 122.436L176.38 122.783ZM176.399 122.469L182.279 122.844C183.074 110.369 186.62 98.5479 194.387 89.1741L189.85 85.415L185.313 81.656C175.504 93.4945 171.42 107.957 170.519 122.094L176.399 122.469ZM189.85 85.415L194.372 89.1922L194.58 88.9431L190.058 85.166L185.536 81.3889L185.328 81.6379L189.85 85.415ZM190.058 85.166L194.571 88.9543C202.369 79.6648 213.47 74.0202 225.54 70.5257L223.902 64.8662L222.263 59.2067C208.939 63.0641 195.396 69.6443 185.545 81.3778L190.058 85.166ZM223.902 64.8662L225.525 70.53L226.125 70.3581L224.501 64.6943L222.878 59.0306L222.278 59.2024L223.902 64.8662ZM224.501 64.6943L226.105 70.3637C238.097 66.9713 251.298 65.558 264.108 64.7895L263.755 58.9082L263.403 53.0269C250.328 53.8113 236.122 55.2838 222.898 59.025L224.501 64.6943ZM263.755 58.9082L264.099 64.79L264.734 64.7529L264.39 58.8711L264.046 52.9893L263.411 53.0264L263.755 58.9082ZM264.39 58.8711L264.729 64.7532C275.882 64.1111 291.486 63.9384 304.095 63.9006L304.078 58.0088L304.06 52.1169C291.458 52.1547 275.561 52.3263 264.051 52.989L264.39 58.8711ZM304.078 58.0088L308.053 62.3574C306.911 63.4009 305.478 63.8919 304.101 63.8919V58V52.1081C302.707 52.1081 301.256 52.6055 300.102 53.6601L304.078 58.0088ZM304.101 58L304.099 63.8919L306.622 63.8928L306.624 58.001L306.627 52.1091L304.103 52.1081L304.101 58ZM306.624 58.001L306.618 63.8928C306.857 63.8931 307.096 63.8935 307.336 63.8938L307.345 58.002L307.354 52.1101C307.114 52.1097 306.872 52.1094 306.631 52.1091L306.624 58.001ZM307.345 58.002L307.353 63.8938C308.514 63.8922 309.639 63.8919 310.724 63.8919V58V52.1081C309.637 52.1081 308.506 52.1085 307.337 52.1101L307.345 58.002ZM310.724 58L310.717 63.8919C309.155 63.8901 307.591 63.2586 306.448 62.0367L310.749 58.0107L315.051 53.9848C313.895 52.7495 312.313 52.1099 310.731 52.1081L310.724 58Z",
                }),
                i.createElement("path", {
                  className: l().recordingCircle,
                  fill: "#FF0000",
                  d: "M100.936 151.816C115.816 151.816 127.879 139.753 127.879 124.873C127.879 109.993 115.816 97.9297 100.936 97.9297C86.0556 97.9297 73.9927 109.993 73.9927 124.873C73.9927 139.753 86.0556 151.816 100.936 151.816Z",
                }),
                i.createElement("path", {
                  className: l().recordingCircle,
                  stroke: "#FF0000",
                  d: "M100.934 164.073C122.583 164.073 140.133 146.523 140.133 124.874C140.133 103.225 122.583 85.6752 100.934 85.6752C79.2851 85.6752 61.7352 103.225 61.7352 124.874C61.7352 146.523 79.2851 164.073 100.934 164.073Z",
                  strokeWidth: "4.67767",
                }),
              ),
            ),
            i.createElement(
              "defs",
              null,
              i.createElement(
                "clipPath",
                { id: o },
                i.createElement("rect", {
                  fill: "white",
                  width: "500",
                  height: "250",
                }),
              ),
            ),
          );
        }
      },
      1909: (e, t, n) => {
        "use strict";
        n.d(t, { I: () => d, p: () => u });
        var o = n(1635),
          i = n(6090),
          r = n(4074),
          s = n(1526),
          a = n(4999);
        const l = new (class {
          constructor() {
            (this.m_SteamVR_Provider = new r.tC(this, a.f5)),
              (this.m_Steam_Client = new r.$k(this)),
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
            return (0, o.sH)(this, void 0, void 0, function* () {
              yield this.m_mailbox.Init("vrgamepadui_messages"),
                this.m_mailbox.RegisterHandler("vrgamepadui_message", (e) => {
                  const t = (0, r.D7)(e.header);
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
            let n, o;
            try {
              n = s.DX.fromObject(e).serializeBase64String();
            } catch (e) {
              return r.Y7.HeaderSerializationFailure;
            }
            try {
              o = t.serializeBase64String();
            } catch (e) {
              return r.Y7.PayloadSerializationFailure;
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
              return r.Y7.SendFailure;
            }
            return r.Y7.Success;
          }
          IsConnected() {
            return !0;
          }
        })();
        window.VRGamepadUIMessages = l;
        const d = () => l.Init(),
          u = l;
      },
    },
    n = {};
  function o(e) {
    var i = n[e];
    if (void 0 !== i) return i.exports;
    var r = (n[e] = { exports: {} });
    return t[e].call(r.exports, r, r.exports, o), r.exports;
  }
  (o.m = t),
    (e = []),
    (o.O = (t, n, i, r) => {
      if (!n) {
        var s = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [n, i, r] = e[u], a = !0, l = 0; l < n.length; l++)
            (!1 & r || s >= r) && Object.keys(o.O).every((e) => o.O[e](n[l]))
              ? n.splice(l--, 1)
              : ((a = !1), r < s && (s = r));
          if (a) {
            e.splice(u--, 1);
            var d = i();
            void 0 !== d && (t = d);
          }
        }
        return t;
      }
      r = r || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > r; u--) e[u] = e[u - 1];
      e[u] = [n, i, r];
    }),
    (o.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return o.d(t, { a: t }), t;
    }),
    (o.d = (e, t) => {
      for (var n in t)
        o.o(t, n) &&
          !o.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (o.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (o.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e = { 378: 0, 170: 0, 797: 0, 527: 0, 500: 0, 17: 0 };
      o.O.j = (t) => 0 === e[t];
      var t = (t, n) => {
          var i,
            r,
            [s, a, l] = n,
            d = 0;
          if (s.some((t) => 0 !== e[t])) {
            for (i in a) o.o(a, i) && (o.m[i] = a[i]);
            if (l) var u = l(o);
          }
          for (t && t(n); d < s.length; d++)
            (r = s[d]), o.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
          return o.O(u);
        },
        n = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var i = o.O(
    void 0,
    [967, 991, 267, 305, 527, 452, 537, 500, 554, 458, 17],
    () => o(5345),
  );
  i = o.O(i);
})(); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/systemui.js.map
