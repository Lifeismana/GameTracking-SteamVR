var CLSTAMP = "10231550";
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
      6090: (e, t, n) => {
        "use strict";
        n.d(t, {
          $: () => D.$,
          $Z: () => H.$Z,
          Ay: () => x,
          B4: () => v.B,
          CU: () => o.CU,
          Ci: () => f.C,
          Cw: () => r.C,
          Ee: () => H.Ee,
          Em: () => m.Em,
          FN: () => y.F,
          Fb: () => o.Fb,
          Fi: () => b.Fi,
          GM: () => p.GM,
          GQ: () => H.GQ,
          Gz: () => H.Gz,
          HW: () => H.HW,
          I0: () => i.I0,
          IS: () => d.I,
          JK: () => u.J,
          JZ: () => o.JZ,
          KI: () => D.KI,
          Ld: () => o.Ld,
          MQ: () => b.MQ,
          MV: () => H.MV,
          N: () => s.e,
          N1: () => C.N,
          NB: () => H.NB,
          NH: () => o.NH,
          Nu: () => R.N,
          O5: () => h.O,
          O6: () => o.O6,
          OH: () => H.OH,
          Oi: () => b.Oi,
          QB: () => o.QB,
          QR: () => D.QR,
          Qc: () => T.Q,
          R$: () => H.R$,
          Rk: () => H.Rk,
          Se: () => o.Se,
          Uj: () => o.Uj,
          Vh: () => g.V,
          Xl: () => H.Xl,
          Y4: () => l.Y,
          Yu: () => H.Yu,
          Zk: () => b.Zk,
          _$: () => T._,
          _1: () => H._1,
          _h: () => b._h,
          _n: () => i._n,
          aX: () => g.a,
          b: () => H.b,
          b$: () => k.b,
          cB: () => I.L,
          dL: () => c.d,
          e_: () => o.e_,
          en: () => D.en,
          ey: () => L.e,
          fD: () => D.fD,
          gN: () => H.gN,
          k2: () => H.k2,
          kG: () => H.kG,
          ku: () => H.ku,
          lq: () => _.l,
          m$: () => S.m,
          mS: () => E.m,
          mX: () => i.mX,
          mo: () => H.mo,
          mu: () => H.mu,
          nX: () => m.nX,
          ne: () => H.ne,
          nq: () => w.n,
          o3: () => b.o3,
          oN: () => o.oN,
          o_: () => o.o_,
          oi: () => a.o,
          p0: () => o.p0,
          pM: () => H.pM,
          pg: () => i.pg,
          qF: () => o.qF,
          rF: () => d.H,
          rx: () => H.rx,
          sJ: () => M.$,
          sk: () => i.sk,
          sn: () => i.sn,
          tx: () => o.tx,
          uC: () => V.u,
          vx: () => o.vx,
          vz: () => a.v,
        });
        var i = n(2824),
          o = n(6292),
          r = n(3389),
          a = n(4120),
          s = n(1230),
          l = n(5830),
          d = n(6186),
          c = n(3361),
          u = n(111),
          m = n(5723),
          p = n(3496),
          h = n(5178),
          v = (n(428), n(9011)),
          g = n(7350),
          _ = n(6847),
          C = n(5227),
          L = n(10),
          f = n(1808),
          b = n(7019),
          S = (n(1988), n(2527), n(9864)),
          y = n(4189),
          E = n(322),
          R = n(1977),
          M = n(6417),
          w = n(2303),
          I = n(8715),
          k = (n(4397), n(5459)),
          V = n(8472),
          T = n(1184),
          H = n(3725),
          D = n(4367);
        const x = VRHTML;
      },
      1977: (e, t, n) => {
        "use strict";
        n.d(t, { N: () => r });
        var i = n(6540),
          o = n(3496);
        class r extends o._J {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return i.createElement(
              "vsg-callout-transform",
              { offset: (0, o.j_)(this.props.vOffset) },
              this.props.children,
            );
          }
        }
      },
      322: (e, t, n) => {
        "use strict";
        n.d(t, { m: () => a });
        var i = n(6540),
          o = n(4367),
          r = n(3361);
        class a extends i.Component {
          constructor(e) {
            super(e);
            let t = {};
            if (VRHTML)
              try {
                let e = VRHTML.VRProperties.GetStringProperty(
                  this.props.sDevicePath,
                  o.fD.RenderModelName_String,
                );
                if (e) {
                  let n =
                    VRHTML.VRRenderModelsInternal.FindComponentForInputSource(
                      e,
                      this.props.sInputPath,
                    );
                  if (n) {
                    let i =
                      VRHTML.VRRenderModels.GetComponentStateForDevicePath(
                        e,
                        n,
                        this.props.sDevicePath,
                      );
                    i && (t.xfTransform = i.xfTrackingToComponentLocal);
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
            return i.createElement(
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
        n.d(t, { Q: () => i, _: () => s });
        var i,
          o = n(1635),
          r = n(3496),
          a = n(3236);
        !(function (e) {
          (e[(e.Disabled = 0)] = "Disabled"),
            (e[(e.WorldZeroY = 1)] = "WorldZeroY"),
            (e[(e.WorldDynamicFloor = 2)] = "WorldDynamicFloor");
        })(i || (i = {}));
        class s extends r._J {
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
        (0, o.Cg)([a.o], s.prototype, "buildNode", null);
      },
      4120: (e, t, n) => {
        "use strict";
        n.d(t, { o: () => s, v: () => i });
        var i,
          o = n(1635),
          r = n(3496),
          a = n(3236);
        !(function (e) {
          (e[(e.RoomSetupFloor = 1)] = "RoomSetupFloor"),
            (e[(e.Locomotion = 2)] = "Locomotion"),
            (e[(e.QuickRecenter = 4)] = "QuickRecenter");
        })(i || (i = {}));
        class s extends r._J {
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
        (0, o.Cg)([a.o], s.prototype, "buildNode", null);
      },
      9864: (e, t, n) => {
        "use strict";
        n.d(t, { m: () => a });
        var i,
          o = n(6540),
          r = n(3496);
        !(function (e) {
          (e[(e.LockedToParent = 0)] = "LockedToParent"),
            (e[(e.LockedToWorld = 1)] = "LockedToWorld");
        })(i || (i = {}));
        class a extends r._J {
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
              i = this.props.min_angular_velocity
                ? (this.props.min_angular_velocity * Math.PI) / 180
                : null,
              r = this.props.max_angular_velocity
                ? (this.props.max_angular_velocity * Math.PI) / 180
                : null;
            return o.createElement(
              "vsg-elastic-head-transform",
              {
                "start-angle-threshold": e,
                "stop-angle-threshold": t,
                "ease-in-time": this.props.ease_in_time,
                "ease-in-power": this.props.ease_in_power,
                "ease-out-angle-threshold": n,
                "ease-out-power": this.props.ease_out_power,
                "min-angular-velocity": i,
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
        n.d(t, { F: () => a });
        var i = n(1635),
          o = n(3496),
          r = n(3236);
        class a extends o._J {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "head-facing-transform";
          }
          buildNode(e, t) {
            var n;
            const i = this.createSgNode(t);
            return (
              (i.properties.up =
                null !== (n = this.props.up) && void 0 !== n ? n : "world"),
              [e, i]
            );
          }
        }
        (0, i.Cg)([r.o], a.prototype, "buildNode", null);
      },
      5227: (e, t, n) => {
        "use strict";
        n.d(t, { N: () => r });
        var i = n(6540),
          o = n(3496);
        class r extends o._J {
          constructor(e) {
            super(e);
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
      7019: (e, t, n) => {
        "use strict";
        n.d(t, {
          Fi: () => a,
          Lr: () => g,
          MQ: () => r,
          Oi: () => i,
          Zk: () => _,
          _h: () => o,
          o3: () => s,
        });
        var i,
          o,
          r,
          a,
          s,
          l = n(1635),
          d = n(6540),
          c = n(3496),
          u = n(5178),
          m = n(3236),
          p = n(5723),
          h = n(7600);
        function v(e) {
          if (e) return [e.u, e.v];
        }
        function g(e) {
          switch (e) {
            case i.TopLeft:
              return { x: -1, y: 1 };
            case i.TopCenter:
              return { x: 0, y: 1 };
            case i.TopRight:
              return { x: 1, y: 1 };
            case i.CenterLeft:
              return { x: -1, y: 0 };
            case i.Center:
              return { x: 0, y: 0 };
            case i.CenterRight:
              return { x: 1, y: 0 };
            case i.BottomLeft:
              return { x: -1, y: -1 };
            case i.BottomCenter:
              return { x: 0, y: -1 };
            case i.BottomRight:
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
        })(i || (i = {})),
          (function (e) {
            (e[(e.Auto = 0)] = "Auto"), (e[(e.SingleTap = 1)] = "SingleTap");
          })(o || (o = {})),
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
          })(a || (a = {})),
          (function (e) {
            (e[(e.Default = 0)] = "Default"),
              (e[(e.Disabled = 1)] = "Disabled"),
              (e[(e.Low = 2)] = "Low");
          })(s || (s = {}));
        class _ extends c._J {
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
              i = void 0 !== this.props.target_dpi_panel_id,
              o =
                void 0 !== this.props.rendermodel_component_device_index ||
                void 0 !== this.props.rendermodel_component_name;
            if (
              o &&
              (void 0 === this.props.rendermodel_component_device_index ||
                void 0 === this.props.rendermodel_component_name)
            )
              throw new Error(
                "Panel requires both rendermodel_component_device_index and rendermodel_component_name to be a rendermodel texture.",
              );
            const r = [t, n, i, o].filter((e) => e).length,
              a =
                "an (explicit width and/or height), an explicit meters_per_pixel, a target_panel_dpi panel ID, or a rendermodel name";
            if (0 == r)
              throw new Error(
                `Panel requires one of the following props: ${a}.`,
              );
            if (r > 1)
              throw new Error(
                `Panel cannot have more of the following of the following props: ${a}.`,
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
              (this.m_nEmbeddedIndex = u.O.Current().addEmbeddedPanelUVs(this)),
              (_.s_bPanelsAreDirty = !0),
              this.getCurrentRootElement().addEventListener(
                "mousedown",
                this.onPanelMouseDown,
              ),
              this.forceUpdate();
          }
          onResizeObserved(e, t) {
            u.O.Current().forceLayoutUpdate();
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
              u.O.Current().removeEmbeddedPanelUVs(this),
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
          createOverdragBlockingElement(e, t, n, i) {
            let o = document.createElement("div");
            (o.style.position = "absolute"),
              (o.style.top = t + "px"),
              (o.style.left = e + "px"),
              (o.style.width = n + "px"),
              (o.style.height = i + "px"),
              (o.style.zIndex = "90019001"),
              this.m_overdragBlockingElements.push(o),
              document.body.appendChild(o);
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
              : a.Visible;
          }
          buildNode(e, t) {
            var n, i, o, r, s, l, d;
            if (
              !(
                this.visibility == a.Visible ||
                this.visibility == a.InvisibleButIntersectable
              )
            )
              return [e, null];
            let u = Object.assign(Object.assign({}, e), {
                bInsideReparentedPanel: !1,
                currentPanel: this,
              }),
              m = this.createSgNode(t),
              h = { x: 0, y: 0 };
            h =
              "object" == typeof this.props.origin
                ? (0, c.PG)(this.props.origin, { x: 0, y: 0 })
                : g(this.props.origin);
            const _ = this.props.overlay_key,
              C = (0, p.w5)();
            return (
              _ && _.length > 0
                ? (m.properties.key = _)
                : C
                  ? (m.properties.key = C)
                  : (m.properties.overlay_handle = (0, p.X4)()),
              (m.properties.uv_min =
                null !== (n = v(this.m_UVsMin)) && void 0 !== n ? n : void 0),
              (m.properties.uv_max =
                null !== (i = v(this.m_UVsMax)) && void 0 !== i ? i : void 0),
              (m.properties.width =
                null !== (o = this.props.width) && void 0 !== o ? o : void 0),
              (m.properties.height =
                null !== (r = this.props.height) && void 0 !== r ? r : void 0),
              (m.properties["scale-index"] =
                null !== (s = this.props.scale_index) && void 0 !== s ? s : 0),
              (m.properties["min-width"] =
                null !== (l = this.props.min_width) && void 0 !== l
                  ? l
                  : void 0),
              (m.properties["target-width-anchor-id"] = (0, p.bl)(
                this.props.target_width_anchor_id,
              )),
              (m.properties["target-dpi-panel-id"] = (0, p.bl)(
                this.props.target_dpi_panel_id,
              )),
              (m.properties["target-dpi-multiplier"] =
                this.props.target_dpi_multiplier),
              (m.properties["meters-per-pixel"] = this.props.meters_per_pixel),
              (m.properties["subview-parent-panel-key"] =
                this.props.subview_parent_panel_key),
              (m.properties.curvature = this.props.curvature),
              (m.properties["curvature-origin-id"] = (0, p.bl)(
                this.props.curvature_origin_id,
              )),
              (m.properties.spherical = this.props.spherical),
              (m.properties.interactive = this.props.interactive),
              (m.properties.scrollable = this.props.scrollable),
              (m.properties.undocked = this.props.undocked),
              (m.properties.modal = this.props.modal),
              (m.properties["requires-laser"] = this.props.requires_laser),
              (m.properties["allow-input-capture"] =
                this.props.allow_input_capture),
              (m.properties["lasermouse-filtering"] =
                null === (d = this.props) || void 0 === d
                  ? void 0
                  : d.lasermouse_filtering),
              (m.properties["hide-laser-when-clicking"] =
                this.props.hide_lasermouse_when_clicking),
              (m.properties["make-overlays-interactive-if-visible"] =
                this.props.make_overlays_interactive_if_visible),
              (m.properties["is-grab-handle"] = this.props.is_grab_handle),
              (m.properties["embedded-uv-index"] = this.m_nEmbeddedIndex),
              (m.properties.origin = (0, c.Hm)(h)),
              (m.properties.debug_name = this.props.debug_name),
              (m.properties.sampler = this.props.sampler),
              (m.properties.reflect = this.props.reflect),
              (m.properties.stereoscopy = this.props.stereoscopy),
              (m.properties.rendermodel_component_device_index =
                this.props.rendermodel_component_device_index),
              (m.properties.rendermodel_component_name =
                this.props.rendermodel_component_name),
              (m.properties["texture-id"] = (0, p.bl)(this.props.texture_id)),
              (m.properties["sort-order"] = this.props.sort_order),
              (m.properties["sort-depth-bias"] = this.props.sort_depth_bias),
              (m.properties.visibility = this.visibility),
              [u, m]
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
                style: { display: this.visibility == a.Hidden ? "none" : null },
              },
              d.createElement(h.tH, null, this.props.children),
            );
          }
        }
        (_.s_bPanelsAreDirty = !1),
          (0, l.Cg)([m.o], _.prototype, "onResizeObserved", null),
          (0, l.Cg)([m.o], _.prototype, "onPanelMouseDown", null),
          (0, l.Cg)([m.o], _.prototype, "onWindowMouseUp", null),
          (0, l.Cg)([m.o], _.prototype, "buildNode", null);
      },
      1808: (e, t, n) => {
        "use strict";
        n.d(t, { C: () => s });
        var i = n(1635),
          o = n(3496),
          r = n(7019),
          a = n(3236);
        class s extends o._J {
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
              ? (n = (0, o.PG)(this.props.location, { x: 0, y: 0 }))
              : "number" == typeof this.props.location &&
                (n = (0, r.Lr)(this.props.location));
            let i = this.createSgNode(t);
            if (this.props.latched && null !== this.m_latchedPosition)
              (i.properties["anchor-u"] = this.m_latchedPosition.u),
                (i.properties["anchor-v"] = this.m_latchedPosition.v);
            else if (n) {
              const t = { u: 0.5 * n.x + 0.5, v: -0.5 * n.y + 0.5 },
                o =
                  !e.currentPanel || e.currentPanel.props.overlay_key
                    ? t
                    : e.currentPanel.scaleLocalUVToGlobal(t);
              (i.properties["anchor-u"] = o.u),
                (i.properties["anchor-v"] = o.v);
            } else {
              if (!e.currentPanel)
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              const n = t.ownerDocument,
                o = t.getBoundingClientRect(),
                r = o.left + o.width / 2,
                a = o.top + o.height / 2,
                s = e.currentPanel.m_Rect;
              if (r < s.x || r > s.x + s.width || a < s.y || a > s.y + s.height)
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
              (i.properties["anchor-u"] = r / l),
                (i.properties["anchor-v"] = a / d);
            }
            return (
              (this.m_latchedPosition = {
                u: i.properties["anchor-u"],
                v: i.properties["anchor-v"],
              }),
              [e, i]
            );
          }
        }
        (0, i.Cg)([a.o], s.prototype, "buildNode", null);
      },
      10: (e, t, n) => {
        "use strict";
        n.d(t, { e: () => r });
        var i = n(6540),
          o = n(3496);
        class r extends o._J {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return i.createElement(
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
          $6: () => c,
          Fv: () => i,
          VJ: () => u,
          pF: () => s,
          rm: () => d,
        });
        var i,
          o = n(1635),
          r = n(3496),
          a = n(3236);
        class s extends r._J {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "playspace-floorheight-adjust";
          }
          buildNode(e, t) {
            var n, i, o, r, a, s, l, d, c, u, m, p, h;
            const v = this.createSgNode(t);
            return (
              (v.properties["target-id"] = this.props.target_id),
              (v.properties["head-interaction-radius"] =
                null === (n = this.props) || void 0 === n
                  ? void 0
                  : n.head_interaction_radius),
              (v.properties["inactive-alpha-scale"] =
                null === (i = this.props) || void 0 === i
                  ? void 0
                  : i.inactive_alpha_scale),
              (v.properties["axis-radius"] =
                null === (o = this.props) || void 0 === o
                  ? void 0
                  : o.axis_radius),
              (v.properties["axis-color-hsv"] =
                null === (r = this.props) || void 0 === r
                  ? void 0
                  : r.axis_color_hsv),
              (v.properties["dot-radius"] =
                null === (a = this.props) || void 0 === a
                  ? void 0
                  : a.dot_radius),
              (v.properties["dot-color-hsv"] =
                null === (s = this.props) || void 0 === s
                  ? void 0
                  : s.dot_color_hsv),
              (v.properties["dot-inner-alpha"] =
                null === (l = this.props) || void 0 === l
                  ? void 0
                  : l.dot_inner_alpha),
              (v.properties["dot-outer-alpha"] =
                null === (d = this.props) || void 0 === d
                  ? void 0
                  : d.dot_outer_alpha),
              (v.properties["rings-radius"] =
                null === (c = this.props) || void 0 === c
                  ? void 0
                  : c.rings_radius),
              (v.properties["rings-color-hsv"] =
                null === (u = this.props) || void 0 === u
                  ? void 0
                  : u.rings_color_hsv),
              (v.properties["rings-hue-amplitude"] =
                null === (m = this.props) || void 0 === m
                  ? void 0
                  : m.rings_hue_amplitude),
              (v.properties["rings-hue-speed"] =
                null === (p = this.props) || void 0 === p
                  ? void 0
                  : p.rings_hue_speed),
              (v.properties["rings-half-width"] =
                null === (h = this.props) || void 0 === h
                  ? void 0
                  : h.rings_half_width),
              [e, v]
            );
          }
        }
        (0, o.Cg)([a.o], s.prototype, "buildNode", null);
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
        (0, o.Cg)([a.o], l.prototype, "buildNode", null),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.Circle = 1)] = "Circle"),
              (e[(e.Drawn = 2)] = "Drawn");
          })(i || (i = {}));
        class d extends r._J {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "playspace-draw-interaction";
          }
          buildNode(e, t) {
            var n, i;
            const o = this.createSgNode(t);
            return (
              (o.properties["target-id"] = this.props.target_id),
              (o.properties["radius-range"] =
                null === (n = this.props) || void 0 === n
                  ? void 0
                  : n.radius_range),
              (o.properties["center-selection-radius"] =
                null === (i = this.props) || void 0 === i
                  ? void 0
                  : i.center_selection_radius),
              [e, o]
            );
          }
        }
        (0, o.Cg)([a.o], d.prototype, "buildNode", null);
        class c extends r._J {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "playspace-outline";
          }
          buildNode(e, t) {
            var n, i, o, r, a, s, l, d;
            const c = this.createSgNode(t);
            return (
              (c.properties["generic-geo"] =
                null === (n = this.props) || void 0 === n
                  ? void 0
                  : n["generic-geo"]),
              (c.properties["hue-amplitude"] =
                null === (i = this.props) || void 0 === i
                  ? void 0
                  : i["hue-amplitude"]),
              (c.properties["hue-speed"] =
                null === (o = this.props) || void 0 === o
                  ? void 0
                  : o["hue-speed"]),
              (c.properties["center-dot-radius"] =
                null === (r = this.props) || void 0 === r
                  ? void 0
                  : r["center-dot-radius"]),
              (c.properties["center-color-hsv"] =
                null === (a = this.props) || void 0 === a
                  ? void 0
                  : a["center-color-hsv"]),
              (c.properties["outline-color-hsv"] =
                null === (s = this.props) || void 0 === s
                  ? void 0
                  : s["outline-color-hsv"]),
              (c.properties["shadow-radius-delta"] =
                null === (l = this.props) || void 0 === l
                  ? void 0
                  : l["shadow-radius-delta"]),
              (c.properties["outline-shadow-alpha"] =
                null === (d = this.props) || void 0 === d
                  ? void 0
                  : d["outline-shadow-alpha"]),
              [e, c]
            );
          }
        }
        (0, o.Cg)([a.o], c.prototype, "buildNode", null);
        class u extends r._J {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "playspace-dots";
          }
          buildNode(e, t) {
            var n, i, o, r, a, s, l, d, c;
            const u = this.createSgNode(t);
            return (
              (u.properties["tile-size"] =
                null === (n = this.props) || void 0 === n
                  ? void 0
                  : n["tile-size"]),
              (u.properties["max-radius"] =
                null === (i = this.props) || void 0 === i
                  ? void 0
                  : i["max-radius"]),
              (u.properties["min-radius"] =
                null === (o = this.props) || void 0 === o
                  ? void 0
                  : o["min-radius"]),
              (u.properties["max-radius-fade"] =
                null === (r = this.props) || void 0 === r
                  ? void 0
                  : r["max-radius-fade"]),
              (u.properties["min-radius-fade"] =
                null === (a = this.props) || void 0 === a
                  ? void 0
                  : a["min-radius-fade"]),
              (u.properties["dot-half-size"] =
                null === (s = this.props) || void 0 === s
                  ? void 0
                  : s["dot-half-size"]),
              (u.properties["center-randomization"] =
                null === (l = this.props) || void 0 === l
                  ? void 0
                  : l["center-randomization"]),
              (u.properties["color-hsv"] =
                null === (d = this.props) || void 0 === d
                  ? void 0
                  : d["color-hsv"]),
              (u.properties["clip-to-playspace"] =
                null === (c = this.props) || void 0 === c
                  ? void 0
                  : c["clip-to-playspace"]),
              [e, u]
            );
          }
        }
        (0, o.Cg)([a.o], u.prototype, "buildNode", null);
      },
      5178: (e, t, n) => {
        "use strict";
        n.d(t, { O: () => d });
        var i,
          o = n(1635),
          r = n(6540),
          a = n(7019),
          s = n(3236),
          l = n(5723);
        !(function (e) {
          (e[(e.Canvas = 0)] = "Canvas"), (e[(e.Image = 1)] = "Image");
        })(i || (i = {}));
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
                  ? i.Canvas
                  : i.Image,
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
            (a.Zk.s_bPanelsAreDirty = !0),
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
            const e = this.state.eRenderMode == i.Image,
              t = this.state.eRenderMode == i.Canvas;
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
            this.state.eRenderMode == i.Image
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
              : this.state.eRenderMode == i.Canvas &&
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
              i = t.height / this.m_fCurrentScale,
              o = { x: e.innerWidth / n, y: e.innerHeight / i },
              r = Math.min(o.x, o.y, 1);
            r != this.m_fCurrentScale &&
              (1 != r
                ? this.m_scalingDomRef.current.setAttribute(
                    "style",
                    "transform: scale(" + r + "); transform-origin: top left",
                  )
                : this.m_scalingDomRef.current.removeAttribute("style"),
              (this.m_fCurrentScale = r),
              (a.Zk.s_bPanelsAreDirty = !0)),
              a.Zk.s_bPanelsAreDirty &&
                (this.m_mapPanels.forEach((e) => e.updateLayoutValues()),
                (0, l.my)(),
                (a.Zk.s_bPanelsAreDirty = !1),
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
                  i = e.m_Rect.x + e.m_Rect.width,
                  o = e.m_Rect.y,
                  r = e.m_Rect.y + e.m_Rect.height,
                  a = e.getEmbeddedIndex(),
                  s = 1 + 3 * a;
                let l = [0, 0, 0, 0, 0, 0, 0, 0, 0],
                  d = !1;
                if (e.isExternal() || n >= i || o >= r)
                  for (let e = 0; e < 3; e++) this.setPixel(s + 1, 0, 0, 0, 0);
                else
                  (d = !0),
                    (l[0] = (65280 & n) >> 8),
                    (l[1] = 255 & n),
                    (l[2] = 254),
                    (l[3] = (65280 & i) >> 8),
                    (l[4] = 255 & i),
                    (l[5] = 255 & o),
                    (l[6] = (65280 & r) >> 8),
                    (l[7] = 255 & r),
                    (l[8] = (65280 & o) >> 8),
                    this.setPixel(s, l[0], l[1], l[2]),
                    this.setPixel(s + 1, l[3], l[4], l[5]),
                    this.setPixel(s + 2, l[6], l[7], l[8]);
              }),
              this.m_EmbeddedDataImgRef && this.state.eRenderMode == i.Image)
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
            } else if (this.m_CanvasRef && this.state.eRenderMode == i.Canvas) {
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
          setPixel(e, t, n, o, r = 255) {
            if (
              this.m_EmbeddedDataImgRGBBuffer &&
              this.state.eRenderMode == i.Image
            ) {
              const i = new DataView(this.m_EmbeddedDataImgRGBBuffer);
              i.setUint8(4 * e + 0, t),
                i.setUint8(4 * e + 1, n),
                i.setUint8(4 * e + 2, o),
                i.setUint8(4 * e + 3, r);
            } else
              this.m_Pixels &&
                this.state.eRenderMode == i.Canvas &&
                ((this.m_Pixels.data[4 * e + 0] = t),
                (this.m_Pixels.data[4 * e + 1] = n),
                (this.m_Pixels.data[4 * e + 2] = o),
                (this.m_Pixels.data[4 * e + 3] = r),
                (-1 === this.m_nDirtyXMin || e < this.m_nDirtyXMin) &&
                  (this.m_nDirtyXMin = e),
                (-1 === this.m_nDirtyXMax || e > this.m_nDirtyXMax) &&
                  (this.m_nDirtyXMax = e));
          }
        }
        (d.s_Current = null),
          (d.k_EmbeddedDataRows = 1),
          (0, o.Cg)([s.o], d.prototype, "toggleDebugPointer", null),
          (0, o.Cg)([s.o], d.prototype, "onMouseMove", null),
          (0, o.Cg)([s.o], d.prototype, "forceLayoutUpdate", null),
          (0, o.Cg)([s.o], d.prototype, "onMutation", null);
      },
      9011: (e, t, n) => {
        "use strict";
        n.d(t, { B: () => a });
        var i = n(1635),
          o = n(3496),
          r = n(3236);
        class a extends o._J {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "tilefloor";
          }
          buildNode(e, t) {
            var n, i, r, a, s, l, d;
            const c = this.createSgNode(t);
            if (
              ((c.properties["tile-size"] = this.props["tile-size"]),
              (c.properties["tile-gap"] = this.props["tile-gap"]),
              (c.properties["inner-radius"] = this.props["inner-radius"]),
              (c.properties["outer-radius"] = this.props["outer-radius"]),
              (c.properties["fade-distance"] =
                null === (n = this.props) || void 0 === n
                  ? void 0
                  : n["fade-distance"]),
              (c.properties["min-tile-scale-at-periphery"] =
                this.props["min-tile-scale-at-periphery"]),
              (c.properties.height = (0, o.kJ)(this.props.height)),
              (c.properties.offset = [
                null === (i = this.props.offset) || void 0 === i ? void 0 : i.x,
                null === (r = this.props.offset) || void 0 === r ? void 0 : r.y,
              ]),
              "string" == typeof this.props.color)
            )
              c.properties.color = this.props.color;
            else if (this.props.color) {
              let e = (0, o.RH)(this.props.color, { r: 0, g: 0, b: 0 });
              c.properties.color = [e.r, e.g, e.b];
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
                null === (a = this.props) || void 0 === a
                  ? void 0
                  : a["normal-randomization-degrees"]),
              this.props.chevron &&
                ((c.properties["chevron-luma-scale"] =
                  this.props.chevron["luma-scale"]),
                (c.properties["chevron-reflection-scale"] =
                  this.props.chevron["reflection-scale"])),
              (c.properties["auto-subdivide"] =
                null === (s = this.props) || void 0 === s
                  ? void 0
                  : s["auto-subdivide"]),
              (c.properties["pedestal-height"] = (0, o.kJ)(
                this.props["pedestal-height"],
              )),
              (c.properties["pedestal-radius"] = (0, o.kJ)(
                this.props["pedestal-radius"],
              )),
              (c.properties["floor-aa-shader"] =
                null === (l = this.props) || void 0 === l
                  ? void 0
                  : l["floor-aa-shader"]),
              (c.properties["stable-fade"] =
                null === (d = this.props) || void 0 === d
                  ? void 0
                  : d["stable-fade"]),
              [e, c]
            );
          }
        }
        (0, i.Cg)([r.o], a.prototype, "buildNode", null);
      },
      111: (e, t, n) => {
        "use strict";
        n.d(t, { J: () => r });
        var i = n(6540),
          o = n(3496);
        class r extends o._J {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return i.createElement(
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
        var i, o, r, a;
        function s() {
          var e;
          return null !==
            (e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.Environment()) && void 0 !== e
            ? e
            : i.Unknown;
        }
        n.d(t, {
          $Z: () => u,
          Ee: () => y,
          GQ: () => D,
          Gz: () => d,
          HW: () => C,
          MV: () => r,
          NB: () => h,
          OH: () => i,
          R$: () => s,
          Rk: () => v,
          Xl: () => f,
          Yu: () => E,
          _1: () => T,
          _E: () => l,
          b: () => b,
          gN: () => R,
          k2: () => I,
          kG: () => M,
          ku: () => p,
          mo: () => g,
          mu: () => a,
          ne: () => c,
          pM: () => o,
          rx: () => k,
        }),
          (function (e) {
            (e[(e.Desktop = 1)] = "Desktop"),
              (e[(e.Overlay = 2)] = "Overlay"),
              (e[(e.Unknown = 100)] = "Unknown");
          })(i || (i = {})),
          window.hasOwnProperty("VRHTML") || (window.VRHTML = null),
          (function (e) {
            (e[(e.Auto = 0)] = "Auto"),
              (e[(e.Low = 1)] = "Low"),
              (e[(e.Medium = 2)] = "Medium"),
              (e[(e.High = 3)] = "High");
          })(o || (o = {})),
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
          })(a || (a = {}));
        let l = 0,
          d = 0,
          c = 4294967295;
        var u, m, p, h, v, g, _, C, L, f, b, S, y, E, R, M, w, I, k, V, T, H, D;
        !(function (e) {
          (e[(e.Invalid = 0)] = "Invalid"),
            (e[(e.RecenterCountdown = 1)] = "RecenterCountdown"),
            (e[(e.FloorAdjustExisting = 2)] = "FloorAdjustExisting"),
            (e[(e.RoomSetupFloor = 3)] = "RoomSetupFloor"),
            (e[(e.ClearRoomSetup = 4)] = "ClearRoomSetup");
        })(u || (u = {})),
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
          })(m || (m = {})),
          (function (e) {
            (e[(e.Activated = 0)] = "Activated"),
              (e[(e.Deactivated = 1)] = "Deactivated");
          })(p || (p = {})),
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
          })(L || (L = {})),
          (function (e) {
            (e[(e.Normal = 0)] = "Normal"),
              (e[(e.Password = 1)] = "Password"),
              (e[(e.Submit = 2)] = "Submit");
          })(f || (f = {})),
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
          })(S || (S = {})),
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
          })(y || (y = {})),
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
          })(R || (R = {})),
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
          })(M || (M = {})),
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
          })(I || (I = {})),
          (function (e) {
            (e[(e.Unavailable = 0)] = "Unavailable"),
              (e[(e.Active = 1)] = "Active"),
              (e[(e.Off = 2)] = "Off");
          })(k || (k = {})),
          (function (e) {
            (e[(e.Default = 1)] = "Default"), (e[(e.Floor = 2)] = "Floor");
          })(V || (V = {})),
          (function (e) {
            (e[(e.Inactive = 0)] = "Inactive"),
              (e[(e.PendingReset = 1)] = "PendingReset"),
              (e[(e.PendingResetIfNeeded = 2)] = "PendingResetIfNeeded"),
              (e[(e.Default = 3)] = "Default"),
              (e[(e.CV = 4)] = "CV"),
              (e[(e.Manual = 5)] = "Manual");
          })(T || (T = {})),
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
          })(D || (D = {}));
      },
      3606: (e, t, n) => {
        "use strict";
        n.d(t, {
          $Z: () => ge,
          Bf: () => $,
          Bn: () => I,
          Bz: () => v,
          C6: () => L,
          D1: () => te,
          Ec: () => _e,
          El: () => ve,
          Eo: () => o,
          F2: () => K,
          Fl: () => ue,
          GM: () => G,
          GO: () => g,
          Hh: () => ie,
          Ju: () => Q,
          Kh: () => d,
          MM: () => s,
          NX: () => x,
          Ni: () => Z,
          P: () => k,
          Pi: () => Ce,
          Qv: () => y,
          R_: () => he,
          So: () => E,
          Sp: () => D,
          Sx: () => c,
          Ul: () => m,
          Uv: () => _,
          Vv: () => ee,
          WS: () => W,
          Wm: () => S,
          Wt: () => f,
          XO: () => j,
          Y: () => z,
          Zw: () => b,
          aD: () => U,
          au: () => de,
          bl: () => R,
          cb: () => C,
          dw: () => u,
          gS: () => h,
          ge: () => T,
          i8: () => me,
          iZ: () => H,
          j5: () => B,
          kk: () => a,
          kx: () => O,
          l3: () => r,
          lP: () => re,
          mB: () => p,
          md: () => J,
          nJ: () => X,
          nY: () => w,
          np: () => i,
          qf: () => F,
          qt: () => ce,
          r4: () => fe,
          rG: () => ae,
          tZ: () => Le,
          ui: () => le,
          uv: () => V,
          v0: () => l,
          vo: () => q,
          w5: () => N,
          wi: () => M,
          wt: () => A,
          xP: () => se,
          xY: () => Y,
          x_: () => pe,
          xz: () => ne,
          yl: () => oe,
          zM: () => P,
        });
        const i = "openvr.tool.steamvr_environments",
          o = "system.generated.steam.exe",
          r = "vrlink.client",
          a = "steam.app.",
          s = a + "250820",
          l = a + "330050",
          d = "system.dashboard.",
          c = "system.dashboard.quicklaunch",
          u = "system.dashboard.nowplaying",
          m = 0.25,
          p = 2,
          h = 0.03,
          v = "current.scene.app.binding.list",
          g = "system.desktop",
          _ = "system.window",
          C = "system.standalone",
          L = "system.systemui",
          f = "system.settings",
          b = "system.keyboard",
          S = "system.vrwebhelper.controllerbinding",
          y = "system.messageoverlay",
          E = "valve.steam",
          R = "valve.steam.desktopgame",
          M = "valve.steam.gamepadui.main",
          w = "valve.steam.gamepadui.keyboard",
          I = "valve.steam.desktop",
          k = "steamlink_openvr-overlay",
          V = "DashboardCurvatureOrigin",
          T = L + "::" + V,
          H = 2.667 / 1694,
          D = "DashboardControlStripTransform",
          x = "DashboardGrabHandleTransform",
          P = "DashboardOverlayControlBarOrigin",
          O = "DashboardGrabHandleTransform_Legacy",
          F = "/settings/steamvr/enableHomeApp",
          A = "/settings/steamvr/supersampleManualOverride",
          N = "/settings/steamvr/supersampleScale",
          B = "/settings/GpuSpeed/gpuSpeedRenderTargetScale",
          Z = "/settings/camera/roomViewStyle",
          U = "/settings/steamvr/backgroundCameraHeight",
          W = "/settings/steamvr/backgroundDomeRadius",
          z = "/settings/steamvr/analogGain",
          G = "/settings/driver_lighthouse/indexHmdColumnCorrection",
          K = "/settings/steamvr/showAdvancedSettings",
          j = "/settings/dashboard/lastAccessedExternalOverlayKey",
          $ = "/settings/internal/dashboardInitialOverlay",
          J = "/settings/dashboard/position_2",
          Q = "/settings/dashboard/theaterCurvature",
          q = "/settings/dashboard/theaterScreenSize",
          X = "/settings/dashboard/unifiedDashboard",
          Y = "/settings/dashboard/theaterScreenAlignment",
          ee = "/settings/collisionBounds/CollisionBoundsFadeDistance",
          te = "/settings/camera/roomView",
          ne = "/settings/camera/enableCamera",
          ie = "/settings/camera/enableConstructRoomView",
          oe = "/settings/dashboard/enableWindowView",
          re = "/settings/dashboard/maxInlineTabs",
          ae = "/settings/steamvr/maxRecommendedResolution",
          se = "/settings/steamvr/disableKeyboardPrivacy",
          le = "/settings/camera/lightSourceFrequency",
          de = "/settings/steamvr/ipdHUD",
          ce = "/settings/dashboard/expectSteam",
          ue = "/settings/dashboard/allowLegacyControlBar",
          me = "/settings/openxr/metaUnityPluginCompatibility",
          pe = "/settings/input/overlayFilteringEnabled",
          he = "/settings/input/overlayFilteringMinCutoff",
          ve = "/settings/input/overlayFilteringBeta",
          ge = "/settings/input/overlayFilteringDerivCutoff",
          _e = "/settings/input/overlayMagnetismEnabled",
          Ce = "/settings/input/overlayMagnetismLockDistance",
          Le = "/settings/input/overlayMagnetismDeadZone",
          fe = "/steam/websocketconnected";
      },
      2495: (e, t, n) => {
        "use strict";
        n.d(t, { B: () => h, b: () => m });
        var i = n(6090),
          o = n(4734),
          r = n(1370),
          a = n(9978),
          s = n(6540),
          l = n(795),
          d = n(3606),
          c = n(8037),
          u = n(7261);
        const m = 2,
          p = (0, r.PA)(function (e) {
            const { desktop: t } = e,
              [n, r] = s.useState(void 0);
            return (
              s.useEffect(() => {
                if (n)
                  return (
                    o.Q.OnDesktopFrameCreated(n),
                    () => o.Q.OnDesktopFrameDestroyed(n)
                  );
              }, [n]),
              1 != t.overlay.eOverlayType
                ? null
                : t.overlay.unFlags & i.NB.VisibleInDashboard
                  ? s.createElement(
                      l.wI,
                      {
                        title: t.strLocalizedName,
                        iconEnum: 15,
                        showTabInDashboardBar: !0,
                        ref: r,
                      },
                      s.createElement(
                        l.P9,
                        {
                          summonOverlayKey: t.overlay.sOverlayKey,
                          renderChildren: "always",
                        },
                        s.createElement(
                          i.Zk,
                          {
                            interactive: !0,
                            overlay_key: t.overlay.sOverlayKey,
                            height: m,
                            curvature_origin_id: d.ge,
                            origin: i.Oi.BottomCenter,
                            debug_name: t.overlay.sOverlayKey,
                            scale_index: (0, c.HX)(u.$z.Dashboard),
                          },
                          s.createElement(l.gU, null),
                        ),
                      ),
                    )
                  : null
            );
          });
        function h(e) {
          return (0, a.useObserver)(() => o.Q.desktops).map((e) =>
            s.createElement(p, { key: e.overlay.sOverlayKey, desktop: e }),
          );
        }
      },
      3481: (e, t, n) => {
        "use strict";
        n.d(t, { JJ: () => v, Sq: () => p, hJ: () => m });
        var i = n(1635),
          o = n(7813),
          r = n(3236),
          a = n(1835),
          s = n(1909),
          l = n(1295),
          d = n(3514),
          c = n(2929);
        const u = new (n(776).wd)("FrameStore");
        var m, p;
        !(function (e) {
          (e[(e.Disconnected = 0)] = "Disconnected"),
            (e[(e.Pending = 1)] = "Pending"),
            (e[(e.Connected = 2)] = "Connected");
        })(m || (m = {}));
        class h {
          get canTryConnectingToSteam() {
            return a.SW.isVRGamepadUIReady && l.H.BHasMutualCapability(15);
          }
          get steamConnectionState() {
            return this.m_eSteamConnectionState;
          }
          get supportedFrameFeatures() {
            return this.steamConnectionState != m.Connected
              ? {}
              : { steamHelpsRenderFrame: !0 };
          }
          constructor() {
            (this.m_unNextFrameID = c.A),
              (this.m_unNextTabID = p.BaseIncrementingIDOffset),
              (this.m_mapLastSentFrameUpdate = new Map()),
              (this.m_mapLastSentFrameVisibility = new Map()),
              (this.m_mapFrames = new Map()),
              (this.m_eSteamConnectionState = m.Disconnected),
              (this.m_initCallHandle = void 0),
              (0, o.makeObservable)(this);
          }
          Init() {
            return (0, i.sH)(this, void 0, void 0, function* () {
              (0, o.reaction)(
                () => this.canTryConnectingToSteam,
                (e) => {
                  e
                    ? this.InitSteamConnection()
                    : this.CleanupSteamConnection();
                },
                { fireImmediately: !0 },
              ),
                (0, o.reaction)(
                  () => this.frames.filter((e) => e.state == d.Iu.Destroyed),
                  this.OnFramesDestroyed,
                ),
                (0, o.autorun)(this.SendUpdatesToSteam, { delay: 1e-4 });
            });
          }
          InitSteamConnection() {
            this.m_eSteamConnectionState == m.Disconnected
              ? ((this.m_eSteamConnectionState = m.Pending),
                this.m_mapLastSentFrameUpdate.clear(),
                this.m_mapLastSentFrameVisibility.clear(),
                u.Info(
                  "InitSteamConnection - Calling Steam.InitFrameSystem...",
                ),
                (this.m_initCallHandle = s.p.Steam.InitFrameSystem(
                  {},
                  { nMaxTimeoutRetries: "infinite" },
                )),
                this.m_initCallHandle
                  .then(() => {
                    u.Info(
                      "InitSteamConnection call to Steam.InitFrameSystem succeeded.",
                    ),
                      (this.m_eSteamConnectionState = m.Connected);
                  })
                  .catch((e) => {
                    8 == e.info.error_code
                      ? u.Info(
                          "InitSteamConnection call to Steam.InitFrameSystem cancelled.",
                        )
                      : u.Error(
                          "InitSteamConnection call to Steam.InitFrameSystem failed:",
                          e,
                        ),
                      (this.m_eSteamConnectionState = m.Disconnected),
                      (this.m_initCallHandle = void 0),
                      this.CleanupSteamConnection();
                  }))
              : u.Info(
                  "InitSteamConnection - State is already",
                  m[this.m_eSteamConnectionState],
                );
          }
          CleanupSteamConnection() {
            (this.m_eSteamConnectionState = m.Disconnected),
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
              i = t.filter(
                (e) => this.m_mapLastSentFrameUpdate.get(e.frame_id) !== e,
              ),
              r = Array.from(this.m_mapLastSentFrameUpdate.keys()).filter(
                (e) => !n.has(e),
              );
            for (const e of i) this.m_mapLastSentFrameUpdate.set(e.frame_id, e);
            for (const e of r) this.m_mapLastSentFrameUpdate.delete(e);
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
              updated_frames: i,
              deleted_frames: r,
              shown_frames: a
                .filter((e) => e.isCurrentlyVisible)
                .map((e) => e.frameID),
              hidden_frames: a
                .filter((e) => !e.isCurrentlyVisible)
                .map((e) => e.frameID),
            };
            s.p.Steam.UpdateFrameUIs(l, { nTimeoutMS: 6e4 }).then(
              (0, o.action)((e) => {
                var t, n;
                for (const i of null !== (t = e.results) && void 0 !== t
                  ? t
                  : [])
                  null === (n = this.GetFrame(i.frame_id)) ||
                    void 0 === n ||
                    n.OnFrameUpdateResultFromSteam(i);
              }),
            );
          }
          OnFramesDestroyed(e) {
            e.forEach((e) => {
              this.m_mapFrames.delete(e.frameID);
            });
          }
          CreateFrame() {
            const e = new d.HC(this.m_unNextFrameID++, this.m_unNextTabID++);
            return (
              (0, o.when)(
                () =>
                  e.state != d.Iu.Uninitialized && e.state != d.Iu.Destroyed,
              ).then(() =>
                (0, o.runInAction)(() => this.m_mapFrames.set(e.frameID, e)),
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
        (0, i.Cg)([o.observable], h.prototype, "m_mapFrames", void 0),
          (0, i.Cg)(
            [o.observable],
            h.prototype,
            "m_eSteamConnectionState",
            void 0,
          ),
          (0, i.Cg)([o.computed], h.prototype, "canTryConnectingToSteam", null),
          (0, i.Cg)([o.computed], h.prototype, "steamConnectionState", null),
          (0, i.Cg)([o.computed], h.prototype, "supportedFrameFeatures", null),
          (0, i.Cg)([o.action.bound], h.prototype, "InitSteamConnection", null),
          (0, i.Cg)(
            [o.action.bound],
            h.prototype,
            "CleanupSteamConnection",
            null,
          ),
          (0, i.Cg)([r.o], h.prototype, "SendUpdatesToSteam", null),
          (0, i.Cg)([o.action.bound], h.prototype, "OnFramesDestroyed", null),
          (0, i.Cg)([o.action], h.prototype, "CreateFrame", null),
          (0, i.Cg)([o.computed], h.prototype, "frames", null),
          (0, i.Cg)([r.o], h.prototype, "GetFrame", null),
          (0, i.Cg)(
            [r.o],
            h.prototype,
            "GetFramesWithAssociatedSummonKeys",
            null,
          ),
          (0, i.Cg)([r.o], h.prototype, "GetFrameWithTabId", null),
          (0, i.Cg)(
            [r.o],
            h.prototype,
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
          })(p || (p = {}));
        const v = new h();
        window.FrameStore = v;
      },
      2156: (e, t, n) => {
        "use strict";
        n.d(t, { F: () => _, O: () => v });
        var i = n(1635),
          o = n(6090),
          r = n(6540),
          a = n(9978),
          s = n(1370),
          l = n(1835),
          d = n(3606),
          c = n(3246);
        function u(e) {
          const { children: t, invertParentPanelPitch: n, pitch: i } = e;
          return n || 0 != i
            ? r.createElement(
                o.dL,
                {
                  invert_parent_panel_pitch: null != n && n,
                  curvature_pitch: null != i ? i : 0,
                },
                t,
              )
            : r.createElement(r.Fragment, null, t);
        }
        function m(e) {
          let { children: t, offsetPixels: n, offsetMeters: i } = e;
          (n = null != n ? n : { x: 0, y: 0, z: 0 }),
            (i = null != i ? i : { x: 0, y: 0, z: 0 });
          const a = (0, o.CU)(
            i,
            (0, o.tx)(n, l.SW.m_fVRGamepadUI_MetersPerPixel),
          );
          return 0 != a.x || 0 != a.y || 0 != a.z
            ? r.createElement(o.dL, { translation: a }, t)
            : r.createElement(r.Fragment, null, t);
        }
        function p(e) {
          const { children: t, rotation: n } = e;
          return null != n && (0 != n.x || 0 != n.y || 0 != n.z)
            ? r.createElement(o.dL, { rotation: n }, t)
            : r.createElement(r.Fragment, null, t);
        }
        function h(e) {
          return 1 == (null == e ? void 0 : e.parent_enum) ? 0 : d.gS;
        }
        function v(e) {
          var t,
            n,
            s,
            d,
            c,
            v,
            g,
            _,
            C,
            L,
            f,
            b,
            S,
            y,
            E,
            R,
            M,
            w,
            I,
            k,
            V,
            T,
            H,
            D,
            x,
            P,
            O,
            F,
            A,
            N,
            B,
            Z,
            U,
            W,
            z,
            G,
            K,
            j,
            $;
          const { popupRequest: J, children: Q } = e,
            q = (0, i.Tt)(e, ["popupRequest", "children"]),
            X = {
              x:
                null !==
                  (n =
                    null === (t = null == J ? void 0 : J.origin_on_parent) ||
                    void 0 === t
                      ? void 0
                      : t.x) && void 0 !== n
                  ? n
                  : 0,
              y:
                null !==
                  (d =
                    null === (s = null == J ? void 0 : J.origin_on_parent) ||
                    void 0 === s
                      ? void 0
                      : s.y) && void 0 !== d
                  ? d
                  : 0,
            },
            Y = {
              x:
                null !==
                  (v =
                    null === (c = null == J ? void 0 : J.origin_on_popup) ||
                    void 0 === c
                      ? void 0
                      : c.x) && void 0 !== v
                  ? v
                  : 0,
              y:
                null !==
                  (_ =
                    null === (g = null == J ? void 0 : J.origin_on_popup) ||
                    void 0 === g
                      ? void 0
                      : g.y) && void 0 !== _
                  ? _
                  : 0,
            },
            ee = {
              u:
                null !==
                  (L =
                    null === (C = null == J ? void 0 : J.clip_rect) ||
                    void 0 === C
                      ? void 0
                      : C.u_min) && void 0 !== L
                  ? L
                  : 0,
              v:
                null !==
                  (b =
                    null === (f = null == J ? void 0 : J.clip_rect) ||
                    void 0 === f
                      ? void 0
                      : f.v_min) && void 0 !== b
                  ? b
                  : 0,
            },
            te = {
              u:
                null !==
                  (y =
                    null === (S = null == J ? void 0 : J.clip_rect) ||
                    void 0 === S
                      ? void 0
                      : S.u_max) && void 0 !== y
                  ? y
                  : 1,
              v:
                null !==
                  (R =
                    null === (E = null == J ? void 0 : J.clip_rect) ||
                    void 0 === E
                      ? void 0
                      : E.v_max) && void 0 !== R
                  ? R
                  : 1,
            },
            ne = {
              x:
                null !==
                  (w =
                    null === (M = null == J ? void 0 : J.offset) || void 0 === M
                      ? void 0
                      : M.x_pixels) && void 0 !== w
                  ? w
                  : 0,
              y:
                null !==
                  (k =
                    null === (I = null == J ? void 0 : J.offset) || void 0 === I
                      ? void 0
                      : I.y_pixels) && void 0 !== k
                  ? k
                  : 0,
              z:
                null !==
                  (T =
                    null === (V = null == J ? void 0 : J.offset) || void 0 === V
                      ? void 0
                      : V.z_pixels) && void 0 !== T
                  ? T
                  : 0,
            },
            ie = {
              x:
                null !==
                  (D =
                    null === (H = null == J ? void 0 : J.offset) || void 0 === H
                      ? void 0
                      : H.x_meters) && void 0 !== D
                  ? D
                  : 0,
              y:
                null !==
                  (P =
                    null === (x = null == J ? void 0 : J.offset) || void 0 === x
                      ? void 0
                      : x.y_meters) && void 0 !== P
                  ? P
                  : 0,
              z:
                null !==
                  (F =
                    null === (O = null == J ? void 0 : J.offset) || void 0 === O
                      ? void 0
                      : O.z_meters) && void 0 !== F
                  ? F
                  : 0,
            },
            oe = {
              x:
                null !==
                  (N =
                    null === (A = null == J ? void 0 : J.rotation) ||
                    void 0 === A
                      ? void 0
                      : A.pitch_degrees) && void 0 !== N
                  ? N
                  : 0,
              y:
                null !==
                  (Z =
                    null === (B = null == J ? void 0 : J.rotation) ||
                    void 0 === B
                      ? void 0
                      : B.yaw_degrees) && void 0 !== Z
                  ? Z
                  : 0,
            },
            re =
              null === (U = null == J ? void 0 : J.inherit_parent_pitch) ||
              void 0 === U ||
              U,
            ae =
              null === (W = null == J ? void 0 : J.inherit_parent_curvature) ||
              void 0 === W ||
              W,
            se =
              null === (z = null == J ? void 0 : J.interactive) ||
              void 0 === z ||
              z,
            le =
              null !== (G = null == J ? void 0 : J.requires_laser) &&
              void 0 !== G &&
              G;
          let de =
            null !==
              (j =
                null === (K = null == J ? void 0 : J.scale) || void 0 === K
                  ? void 0
                  : K.scaler_value) && void 0 !== j
              ? j
              : 1;
          const ce =
              1 ==
              (null !== ($ = null == J ? void 0 : J.sort_order) && void 0 !== $
                ? $
                : 0)
                ? 101
                : null,
            ue = (function (e) {
              var t, n, i;
              const o =
                  null !== (t = null == e ? void 0 : e.parent_overlay_key) &&
                  void 0 !== t
                    ? t
                    : "",
                r =
                  null !==
                    (i =
                      null === (n = null == e ? void 0 : e.offset) ||
                      void 0 === n
                        ? void 0
                        : n.z_pixels) && void 0 !== i
                    ? i
                    : 0;
              return o ==
                (0, a.useObserver)(() => l.SW.dashboardBarOverlayKey) && r >= 0
                ? -0.5
                : 0;
            })(J);
          r.useLayoutEffect(
            () => o.O5.Current().forceLayoutUpdate(),
            [ee.u, ee.v, te.u, te.v],
          );
          const me = r.createElement(
            u,
            { invertParentPanelPitch: !re },
            r.createElement(
              m,
              { offsetPixels: ne, offsetMeters: ie },
              r.createElement(
                p,
                { rotation: oe },
                r.createElement(
                  o.Zk,
                  Object.assign(
                    {
                      debug_name: `VRGamepadUI-PooledPopup-${null == J ? void 0 : J.dashboard_popup_id}`,
                      interactive: se,
                      requires_laser: le,
                      curvature: ae ? "inherit-from-parent-panel" : void 0,
                      overlay_key: null == J ? void 0 : J.popup_overlay_key,
                      origin: Y,
                      meters_per_pixel: l.SW.m_fVRGamepadUI_MetersPerPixel * de,
                      reflect: h(J),
                      sort_depth_bias: ue,
                      uv_min: ee,
                      uv_max: te,
                      sort_order: ce,
                    },
                    q,
                  ),
                  Q,
                ),
              ),
            ),
          );
          return (null == J ? void 0 : J.parent_overlay_key)
            ? r.createElement(
                o.b$,
                {
                  parent_overlay_key: null == J ? void 0 : J.parent_overlay_key,
                },
                r.createElement(
                  o.Ci,
                  { key: J.dashboard_popup_id, location: X },
                  me,
                ),
              )
            : (null == J ? void 0 : J.parent_device_path)
              ? r.createElement(
                  o.dL,
                  { parent_path: null == J ? void 0 : J.parent_device_path },
                  me,
                )
              : me;
        }
        function g(e) {
          return (
            null != (null == e ? void 0 : e.parent_device_path) ||
            null != (null == e ? void 0 : e.parent_enum) ||
            null != (null == e ? void 0 : e.parent_overlay_key)
          );
        }
        const _ = (0, s.PA)((e) =>
          r.createElement(
            r.Fragment,
            null,
            c.r.requests
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
        var i = n(1635),
          o = n(6540),
          r = n(5338),
          a = n(3236),
          s = n(6090),
          l = n(1370),
          d = n(3696),
          c = n(3606),
          u = n(6138),
          m = n(9471),
          p = n(8313),
          h = n(5237),
          v = n(1139);
        function g(e) {
          const t = 0.04,
            [n, i] = o.useState(2.5);
          if (
            (o.useEffect(() => {
              n < 0 && (null == e || e.onTrigger());
              const o = setInterval(() => {
                i((e) => e - t);
              }, 40);
              return () => clearInterval(o);
            }, [e, n]),
            n < 0.12)
          )
            return null;
          const r = (100 * n) / 2.5;
          return o.createElement(
            "div",
            { className: "ProgressContainer" },
            o.createElement(h.QF, {
              background: !0,
              backgroundPadding: 2,
              counterClockwise: !0,
              value: r,
            }),
            o.createElement(m.hU, null),
          );
        }
        function _(e) {
          return o.createElement(
            s.dL,
            { parent_path: "/user/head" },
            o.createElement(
              s.dL,
              { translation: { z: -0.5, y: -0.2 } },
              o.createElement(s.FN, null, e),
            ),
          );
        }
        function C(e) {
          return _(
            o.createElement(
              s.Zk,
              { width: 0.08, debug_name: "recenter_countdown" },
              o.createElement(g, Object.assign({}, e)),
            ),
          );
        }
        class L extends o.Component {
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
          onProgressIndicatorEvent(e, t, n, i, o) {
            let r = this.state;
            null == r.sCurrentAction &&
              0 != e &&
              ((r.sCurrentAction = o), (r.sDevicePath = n), (r.sInputPath = i)),
              r.sCurrentAction == o &&
                (0 == e
                  ? ((r.sCurrentAction = void 0), (r.flProgress = 0))
                  : (r.flProgress = e)),
              this.setState(r);
          }
          onDeviceEvent(e, t, n) {
            e == s.ku.Deactivated &&
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
              const i =
                  "/user/head" == this.state.sDevicePath ||
                  "/input/system" == this.state.sInputPath ||
                  e,
                r = (100 * (t - 0.5)) / 0.5,
                a =
                  "/actions/quickrecenter/in/recenter" ==
                    this.state.sCurrentAction || e,
                l = 1 == t || e;
              let d = o.createElement(
                s.Zk,
                { width: 0.08, debug_name: "progressindicator" },
                o.createElement(
                  "div",
                  { className: (0, v.FH)("ProgressContainer", ["Throb", l]) },
                  o.createElement(h.QF, {
                    background: !0,
                    backgroundPadding: 2,
                    value: r,
                  }),
                  a && o.createElement(m.hU, null),
                  !a &&
                    o.createElement("img", {
                      src: "/shared/images/steam_logo.svg",
                      className: "ProgressIcon",
                    }),
                ),
              );
              return i
                ? _(d)
                : o.createElement(
                    "div",
                    null,
                    o.createElement(
                      s.mS,
                      {
                        id: "progress_component",
                        sDevicePath: this.state.sDevicePath,
                        sInputPath: this.state.sInputPath,
                      },
                      o.createElement(
                        s.Nu,
                        { vOffset: n },
                        o.createElement(
                          s.ey,
                          {
                            fOffscreenZDepth: -0.3,
                            fOffAxisLimit: 21,
                            fTransitionLimit: 1,
                          },
                          o.createElement(s.N1, {
                            target_id: "progress_component",
                            thickness: 0.002,
                            start_buffer: 0.03,
                            end_buffer: 0.01,
                          }),
                          o.createElement(s.FN, null, d),
                        ),
                      ),
                    ),
                  );
            }
          }
        }
        (0, i.Cg)([a.o], L.prototype, "onProgressIndicatorEvent", null),
          (0, i.Cg)([a.o], L.prototype, "onDeviceEvent", null);
        const f = (0, l.PA)(function (e) {
            const { bCommitOnAccept: t = !0, bShowCancel: n = !0 } = e;
            return o.createElement(
              "div",
              { className: "RoomSetupUI" },
              o.createElement(
                "div",
                { className: "Title" },
                "Adjust Floor Height",
                " ",
              ),
              o.createElement(
                "div",
                { className: "Body" },
                "Touch the floor (or use thumbstick) to adjust.",
              ),
              o.createElement(
                "div",
                { className: "ButtonRow" },
                n &&
                  o.createElement(
                    u.$,
                    {
                      className: "ButtonControl",
                      onClick: () => {
                        null === VRHTML ||
                          void 0 === VRHTML ||
                          VRHTML.VRChaperoneSetup.ResetPlayspaceFloorHeight(
                            s._1.Inactive,
                          ),
                          null == e || e.onCancel();
                      },
                    },
                    o.createElement(m.bm, null),
                    " ",
                    "Cancel",
                  ),
                o.createElement(
                  u.$,
                  {
                    className: "ButtonControl",
                    onClick: () => {
                      null === VRHTML ||
                        void 0 === VRHTML ||
                        VRHTML.VRChaperoneSetup.ResetPlayspaceFloorHeight(
                          s._1.PendingReset,
                        );
                    },
                  },
                  "Reset",
                ),
                o.createElement(
                  u.$,
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
            return o.createElement(
              "div",
              { className: "RoomSetupUI" },
              o.createElement(
                "div",
                { className: "Title" },
                "Adjust Playspace",
              ),
              o.createElement(
                "div",
                { className: "Body" },
                "Drag to adjust size",
              ),
              o.createElement(
                "div",
                { className: "ButtonRow" },
                t &&
                  o.createElement(
                    u.$,
                    {
                      className: "ButtonControl",
                      onClick: null == e ? void 0 : e.onCancel,
                    },
                    o.createElement(m.bm, null),
                    " ",
                    "Cancel",
                  ),
                !!(null == e ? void 0 : e.onBack) &&
                  o.createElement(
                    u.$,
                    {
                      className: "ButtonControl",
                      onClick: null == e ? void 0 : e.onBack,
                    },
                    "Back",
                  ),
                o.createElement(
                  u.$,
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
              o.createElement(
                "div",
                { className: "ButtonRow" },
                !!(null == e ? void 0 : e.onAdvanced) &&
                  o.createElement(
                    u.$,
                    {
                      className: "ButtonControl",
                      onClick: null == e ? void 0 : e.onAdvanced,
                    },
                    o.createElement(m.DO, null),
                    " ",
                    "Advanced",
                  ),
              ),
            );
          }),
          S = (0, l.PA)(function (e) {
            const { bShowCancel: t = !0 } = e;
            return o.createElement(
              "div",
              { className: "RoomSetupUI" },
              o.createElement(
                "div",
                { className: "Title" },
                "Draw Playspace (Advanced)",
              ),
              o.createElement(
                "div",
                { className: "Body" },
                "Use your controller to draw the safe playspace bounds.",
              ),
              o.createElement(
                "div",
                { className: "ButtonRow" },
                t &&
                  o.createElement(
                    u.$,
                    {
                      className: "ButtonControl",
                      onClick: null == e ? void 0 : e.onCancel,
                    },
                    o.createElement(m.bm, null),
                    " ",
                    "Cancel",
                  ),
                o.createElement(
                  u.$,
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
                  o.createElement(
                    u.$,
                    {
                      className: "ButtonControl",
                      onClick: null == e ? void 0 : e.onBack,
                    },
                    "Back",
                  ),
                o.createElement(
                  u.$,
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
          y = (0, l.PA)(function (e) {
            if (0 == d.H.roomSetupStep || 6 == d.H.roomSetupStep) return null;
            const t = () => {
                console.assert(
                  d.H.roomSetupAllowsCancel,
                  "RoomSetupPanel onCancel triggered even though roomsetup mode doesn't allow it",
                ),
                  d.H.setRoomSetupStep(0, !0);
              },
              n = 1 != d.H.roomSetupStep;
            return o.createElement(
              s.Zk,
              {
                id: null == e ? void 0 : e.id,
                meters_per_pixel: 0.5 * c.iZ,
                interactive: n,
                scrollable: !1,
                debug_name: "room-setup-ui",
              },
              2 == d.H.roomSetupStep &&
                o.createElement(f, {
                  onAccept: () => {
                    d.H.setRoomSetupStep(0);
                  },
                  onCancel: t,
                  bCommitOnAccept: !0,
                  bShowCancel: d.H.roomSetupAllowsCancel,
                }),
              3 == d.H.roomSetupStep &&
                o.createElement(f, {
                  onAccept: () => {
                    d.H.setRoomSetupStep(4);
                  },
                  onCancel: t,
                  bCommitOnAccept: !1,
                  bShowCancel: d.H.roomSetupAllowsCancel,
                }),
              4 == d.H.roomSetupStep &&
                o.createElement(b, {
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
                o.createElement(S, {
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
            return o.createElement(
              "div",
              { className: "RoomSetupUI Slim" },
              o.createElement(
                "div",
                { className: "ButtonRow" },
                o.createElement(
                  u.$,
                  {
                    className: "ButtonControl",
                    onClick: () => {
                      d.H.m_bOkOutsideOfPlayspace = !0;
                    },
                  },
                  o.createElement(m.bm, null),
                ),
                o.createElement(
                  u.$,
                  {
                    className: "ButtonControl Colorful",
                    onClick: () => {
                      d.H.setRoomSetupStep(3);
                    },
                  },
                  o.createElement(m.DO, null),
                  " ",
                  "Setup Playspace",
                ),
              ),
            );
          }),
          R = (0, l.PA)(function () {
            try {
              if (
                !!!(null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRProperties.GetBoolProperty(
                      "/user/head",
                      s.fD.VRLinkClientHMDSupportsRoomSetupRequests_Bool,
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
              : o.createElement(
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
                      lock_to_horizon: !0,
                    },
                    o.createElement(
                      s.dL,
                      { translation: { x: 0, y: -0.75, z: -0.9 } },
                      o.createElement(
                        s.FN,
                        null,
                        o.createElement(
                          s.Zk,
                          {
                            meters_per_pixel: 0.4 * c.iZ,
                            interactive: !0,
                            debug_name: "chaperone-popup",
                          },
                          o.createElement(E, null),
                        ),
                      ),
                    ),
                  ),
                );
          }),
          M = (0, l.PA)(function () {
            if (0 == d.H.roomSetupStep) return null;
            if (1 == d.H.roomSetupStep)
              return o.createElement(C, {
                onTrigger: () => {
                  d.H.setRoomSetupStep(0),
                    null === VRHTML ||
                      void 0 === VRHTML ||
                      VRHTML.VRChaperone.ResetZeroPose();
                },
              });
            if (6 == d.H.roomSetupStep)
              return o.createElement(
                o.Fragment,
                null,
                o.createElement(p.pF, null),
                o.createElement(p.VJ, {
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
                i = 20,
                r = (0, s.nX)(c.C6, "Floor-AdjustPlayspace-Receiver"),
                a = 1.25,
                l = 0.547,
                u = 0.55;
              return o.createElement(
                o.Fragment,
                null,
                o.createElement(
                  s.dL,
                  { parent_path: "/user/head" },
                  o.createElement(
                    s.m$,
                    {
                      start_angle_threshold: 30,
                      stop_angle_threshold: 10,
                      ease_out_angle_threshold: 90,
                      min_angular_velocity: 105,
                      ease_in_power: 1.5,
                      lock_to_horizon: !0,
                    },
                    o.createElement(
                      s.dL,
                      { translation: { y: -0.15 * a, z: -1 * a } },
                      o.createElement(y, null),
                    ),
                  ),
                  o.createElement(
                    s._$,
                    {
                      projection_constraint: s.Qc.WorldDynamicFloor,
                      inital_guess_alpha: 0.5,
                    },
                    o.createElement(
                      s.dL,
                      { rotation: { x: -90 } },
                      o.createElement(
                        s.Zk,
                        {
                          width: 50,
                          height: 50,
                          interactive: !0,
                          scrollable: !1,
                          debug_name: "playspace-laser-receiver-invisible",
                          id: r,
                          visibility: s.Fi.InvisibleButIntersectable,
                          lasermouse_filtering: s.o3.Low,
                          hide_lasermouse_when_clicking: !0,
                        },
                        o.createElement(
                          "div",
                          { className: "AdjustPlayspaceRoot" },
                          o.createElement("div", {
                            className: "AdjustPlayspaceRoot Invalid",
                          }),
                        ),
                      ),
                    ),
                  ),
                ),
                e &&
                  o.createElement(p.pF, {
                    target_id: r,
                    head_interaction_radius: 2.5,
                    inactive_alpha_scale: 0.5,
                    dot_radius: 0.04,
                    dot_color_hsv: [l, u, 0.8],
                    dot_inner_alpha: 1,
                    dot_outer_alpha: 0.2,
                    axis_radius: 0.001,
                    axis_color_hsv: [l, u, 1],
                    rings_color_hsv: [l, u, 0.8],
                    rings_radius: 0.004,
                    rings_half_width: 0.001,
                    rings_hue_amplitude: 0,
                    rings_hue_speed: 1,
                  }),
                !1,
                t &&
                  o.createElement(p.rm, {
                    target_id: r,
                    radius_range: [n, i],
                    center_selection_radius: 0.1,
                  }),
                t &&
                  o.createElement(p.$6, {
                    "generic-geo": [0.001, 0.01],
                    "outline-color-hsv": [0.5, 0.95, 0.8],
                    "hue-amplitude": 0.1,
                    "hue-speed": 4 == d.H.roomSetupStep ? 2 : 1.25,
                    "outline-shadow-alpha": [1, 0.5],
                    "shadow-radius-delta": 0.01,
                    "center-dot-radius": 4 == d.H.roomSetupStep ? 0.1 : 0.04,
                    "center-color-hsv": [l, 1, 0.65],
                  }),
                o.createElement(p.VJ, {
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
        var w = n(3746),
          I = n(1333),
          k = n(3714);
        function V(e, t, n, i, o) {
          return t == n ? 0 : ((e - t) / (n - t)) * (o - i) + i;
        }
        class T extends o.Component {
          constructor(e) {
            super(e),
              (this.m_fadeStartTimeout = void 0),
              (this.m_fadeFinishTimeout = void 0),
              (this.m_mountTime = 0);
            const t =
                null === s.Ay || void 0 === s.Ay
                  ? void 0
                  : s.Ay.VRProperties.GetFloatProperty(
                      s.Gz,
                      s.fD.UserIpdMeters_Float,
                    ),
              n = 0.1 * Math.round(1e4 * (null != t ? t : 0.065));
            (this.state = { ipdValue: n, visible: !1, fading: !1 }),
              null === s.Ay ||
                void 0 === s.Ay ||
                s.Ay.RegisterForIPDEvents(this.IPDChanged);
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
                T.kFadeDurationMs,
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
                T.kFadeDelayMs,
              )),
              window.clearTimeout(this.m_fadeFinishTimeout),
              (this.m_fadeFinishTimeout = 0),
              this.setState({ ipdValue: t, visible: !0, fading: !1 }));
          }
          ipdLensSpacer() {
            return o.createElement("div", {
              className: "IPDLensSpacer",
              style: { minWidth: "32px" },
            });
          }
          render() {
            var e, t, n;
            let i = I.HR.settings.get(c.au);
            if (!this.state.visible || !i) return null;
            let r = ["IPDParent"];
            this.state.fading && r.push("Fading");
            const a =
                0.9 *
                (null !==
                  (e =
                    null === s.Ay || void 0 === s.Ay
                      ? void 0
                      : s.Ay.VRProperties.GetFloatProperty(
                          s.Gz,
                          s.fD.DashboardScale_Float,
                        )) && void 0 !== e
                  ? e
                  : 1),
              l =
                1e3 *
                (null !==
                  (t =
                    null === s.Ay || void 0 === s.Ay
                      ? void 0
                      : s.Ay.VRProperties.GetFloatProperty(
                          s.Gz,
                          s.fD.IpdUIRangeMinMeters_Float,
                        )) && void 0 !== t
                  ? t
                  : 0.058),
              d =
                1e3 *
                (null !==
                  (n =
                    null === s.Ay || void 0 === s.Ay
                      ? void 0
                      : s.Ay.VRProperties.GetFloatProperty(
                          s.Gz,
                          s.fD.IpdUIRangeMaxMeters_Float,
                        )) && void 0 !== n
                  ? n
                  : 0.07),
              u = (function (e, t, n, i, r) {
                if (
                  !(
                    isFinite(e) &&
                    isFinite(t) &&
                    isFinite(n) &&
                    isFinite(i) &&
                    isFinite(r)
                  )
                )
                  return null;
                const a = 10,
                  s = [],
                  l = t / 25,
                  d = 10 * l,
                  c = d - 5 * l,
                  u = d - 10 * l,
                  m = d + 10 * l,
                  p = d + 5 * l;
                for (let t = i; t <= r; t += 0.5) {
                  const n = V(t, i, r, a, e - a);
                  s.push(
                    o.createElement("circle", {
                      key: "pip" + t,
                      cx: n,
                      cy: d,
                      r: "0.75",
                      stroke: "none",
                      fill: "rgb(128,128,128)",
                    }),
                  );
                }
                for (let t = i; t <= r; t += 2) {
                  const n = V(t, i, r, a, e - a);
                  s.push(
                    o.createElement("line", {
                      key: "line" + t,
                      x1: n,
                      y1: d,
                      x2: n,
                      y2: c,
                      style: { stroke: "rgb(96,96,96)", strokeWidth: 2 },
                    }),
                  );
                }
                {
                  let t = V(64, i, r, a, e - a);
                  s.push(
                    o.createElement("line", {
                      key: "centraltick",
                      x1: t,
                      y1: d,
                      x2: t,
                      y2: u,
                      style: { stroke: "rgb(164,164,164)", strokeWidth: 2 },
                    }),
                  );
                }
                {
                  let t = V(n - 0.5, i, r, a, e - a),
                    l = V(n + 0.5, i, r, a, e - a),
                    d =
                      t +
                      "," +
                      m +
                      " " +
                      l +
                      "," +
                      m +
                      " " +
                      0.5 * (t + l) +
                      "," +
                      p;
                  s.push(
                    o.createElement("polygon", {
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
                return o.createElement(
                  "svg",
                  { width: e, height: t, viewBox: [0, 0, e, t].join(" ") },
                  s,
                );
              })(240, 50, this.state.ipdValue, l, d);
            return o.createElement(
              s.dL,
              { parent_path: "/user/head" },
              o.createElement(
                s.dL,
                {
                  translation: { y: -0.4, z: -0.87 },
                  rotation: { x: -30 },
                  scale: a,
                },
                o.createElement(
                  s.Zk,
                  {
                    width: void 0,
                    height: T.kPanelHeight,
                    interactive: !1,
                    sort_order: 1e3,
                    debug_name: "ipd",
                  },
                  o.createElement(
                    "div",
                    { className: r.join(" "), style: { width: T.kPixelWidth } },
                    o.createElement(
                      "div",
                      { className: "FlexColumn" },
                      o.createElement(
                        "div",
                        { className: "IPDNumberRow" },
                        o.createElement(
                          "div",
                          { className: "IPDNumberText" },
                          this.state.ipdValue.toFixed(1),
                        ),
                        o.createElement(
                          "div",
                          { className: "IPDLabelText" },
                          "mm",
                        ),
                      ),
                      o.createElement(
                        "div",
                        { className: "IPDSettingTextDesc" },
                        (0, k.we)("#IPD_Description"),
                      ),
                      o.createElement(
                        "div",
                        { className: "IPDLensRow" },
                        o.createElement(
                          "div",
                          { className: "IPDLens FlipImageHorizontal" },
                          " ",
                          u,
                          " ",
                        ),
                        this.ipdLensSpacer(),
                        o.createElement(
                          "div",
                          { className: "IPDLens" },
                          " ",
                          u,
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
        (T.kPanelHeight = 0.16),
          (T.kPixelWidth = 600),
          (T.kFadeDelayMs = 1e3),
          (T.kFadeDurationMs = 1e3),
          (0, i.Cg)([a.o], T.prototype, "StartFade", null),
          (0, i.Cg)([a.o], T.prototype, "HideOverlay", null),
          (0, i.Cg)([a.o], T.prototype, "IPDChanged", null);
        var H,
          D,
          x = n(1835);
        !(function (e) {
          (e[(e.Opaque = 0)] = "Opaque"),
            (e[(e.FadingIn = 1)] = "FadingIn"),
            (e[(e.FadingOut = 2)] = "FadingOut");
        })(D || (D = {}));
        let P = (H = class extends o.Component {
          constructor(e) {
            super(e),
              (this.m_hideTimeout = void 0),
              (this.m_fadeTimeout = void 0),
              (this.m_unresponsiveTimeout = void 0),
              (this.m_sceneApplicationStateChangedEventHandle = null),
              (this.m_mountedTime = void 0),
              (this.state = {
                visible: !1,
                opacity: D.Opaque,
                latchedAppName: "",
                latchedAppKey: "",
                latchedSceneApplicationState: null,
                alreadyHidDashboard: !1,
              }),
              I.HR.Init(!1);
          }
          componentDidMount() {
            (this.m_sceneApplicationStateChangedEventHandle =
              null === s.Ay || void 0 === s.Ay
                ? void 0
                : s.Ay.RegisterForSceneApplicationStateChangedEvents(
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
            const t = s.Ay.VRApplications.GetStartingApplicationKey();
            t &&
              t != H.k_sHomeAppKey &&
              (s.Ay.VRDashboardManager.HideDashboard(e),
              this.setState({ alreadyHidDashboard: !0 }));
          }
          updateTransitionState() {
            if (
              !(null === s.Ay || void 0 === s.Ay ? void 0 : s.Ay.VRApplications)
            )
              return;
            let e = s.Ay.VRApplications.GetSceneApplicationState();
            e == s.HW.Starting
              ? (this.state.latchedSceneApplicationState == s.HW.Quitting &&
                  this.resetLatchedValued(),
                this.setState({ latchedSceneApplicationState: e }),
                this.updateLatchedValues(),
                this.show(!1),
                this.cancelUnresponsiveTimeout(),
                this.maybeHideDashboard("transition_app_starting"))
              : e == s.HW.Quitting
                ? (this.state.latchedSceneApplicationState == s.HW.Starting &&
                    this.resetLatchedValued(),
                  this.setState({ latchedSceneApplicationState: e }),
                  this.updateLatchedValues(),
                  this.show(!1),
                  this.cancelUnresponsiveTimeout(),
                  this.maybeHideDashboard("transition_app_quitting"))
                : e == s.HW.Running
                  ? (this.cancelUnresponsiveTimeout(),
                    this.state.visible && this.startFadeOut())
                  : e == s.HW.None
                    ? (this.cancelUnresponsiveTimeout(),
                      this.state.visible && this.hideSoon())
                    : e == s.HW.Waiting &&
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
              this.setState({ latchedSceneApplicationState: s.HW.Waiting }),
              this.show(!0),
              this.updateLatchedValues();
          }
          updateLatchedValues() {
            if (null === s.Ay || void 0 === s.Ay ? void 0 : s.Ay.VRApplications)
              if (
                s.Ay.VRApplications.GetSceneApplicationState() == s.HW.Starting
              ) {
                let e = s.Ay.VRApplications.GetStartingApplicationKey();
                e && e.length > 0 && this.setState({ latchedAppKey: e });
                let t = s.Ay.GetStartingAppName();
                t && t.length > 0 && this.setState({ latchedAppName: t });
              } else {
                let e = s.Ay.VRApplications.GetSceneApplicationKey();
                e && e.length > 0 && this.setState({ latchedAppKey: e });
                let t = s.Ay.GetCurrentSceneFocusAppName();
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
                  this.setState({ visible: !0, opacity: D.FadingIn })
                : this.setState({ visible: !0, opacity: D.Opaque });
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
              this.setState({ opacity: D.FadingOut }),
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
                opacity: D.Opaque,
                alreadyHidDashboard: !1,
              });
          }
          render() {
            if (!this.state.visible) return null;
            if (x.SW.m_bDashboardVisible) return null;
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
              i = !1,
              r = "";
            switch (this.state.latchedSceneApplicationState) {
              case s.HW.Quitting:
                r = (0, k.we)("#Now_Quitting");
                break;
              case s.HW.Starting:
                r = (0, k.we)(n ? "" : "#Now_Starting");
                break;
              case s.HW.Waiting:
                (r = (0, k.we)("#Now_Waiting")), (i = !0);
            }
            let a = r.length > 0,
              l = ["TransitionAppImage"],
              d = ["TransitionAppLabels"],
              c = ["TransitionAppSpinner"];
            this.state.opacity == D.FadingIn
              ? (l.push("FadingIn"), d.push("FadingIn"), c.push("FadingIn"))
              : this.state.opacity == D.FadingOut &&
                (l.push("FadingOut"), d.push("FadingOut"), c.push("FadingOut")),
              i && l.push("Waiting");
            let u = null;
            return (
              e.includes("revive.app") && (u = 310),
              o.createElement(
                s.sJ,
                null,
                o.createElement(
                  s.dL,
                  {
                    translation: { y: -0.1125, z: -x.SW.dashboardDistance },
                    scale: 0.244,
                  },
                  o.createElement(
                    s.Zk,
                    {
                      width: 1.5,
                      height: void 0,
                      interactive: !1,
                      origin: s.Oi.BottomCenter,
                      reflect: 0.05,
                      debug_name: "transition",
                    },
                    o.createElement(
                      "div",
                      {
                        className: l.join(" "),
                        style: {
                          backgroundImage: e ? "url('" + e + "')" : null,
                          height: u,
                        },
                      },
                      " ",
                      t,
                      " ",
                    ),
                  ),
                  a &&
                    o.createElement(
                      s.dL,
                      { translation: { y: 0.08, z: -0.08 } },
                      o.createElement(
                        s.Zk,
                        {
                          width: 1.275,
                          height: void 0,
                          interactive: !1,
                          origin: s.Oi.TopCenter,
                          debug_name: "transition-appstatus",
                        },
                        o.createElement(
                          "div",
                          { className: d.join(" ") },
                          o.createElement("div", { className: "AppStatus" }, r),
                        ),
                      ),
                    ),
                  i &&
                    o.createElement(
                      s.dL,
                      { translation: { y: 0.35, z: 0.05 } },
                      o.createElement(
                        s.Zk,
                        {
                          width: 1.5 * 0.1,
                          height: void 0,
                          interactive: !1,
                          debug_name: "transition-waiting",
                        },
                        o.createElement(
                          "div",
                          { className: c.join(" ") },
                          o.createElement(O, null),
                        ),
                      ),
                    ),
                ),
              )
            );
          }
        });
        function O() {
          return o.createElement(
            "div",
            { className: "ActivitySpinner" },
            o.createElement("div", { className: "Bar" }),
            o.createElement("div", { className: "Bar" }),
            o.createElement("div", { className: "Bar" }),
          );
        }
        (P.k_sHomeAppKey = "openvr.tool.steamvr_environments"),
          (P.kHideDelayMs = 5e3),
          (P.kUnresponsiveDelayMs = 2e3),
          (P.kFadeoutTimeMs = 550),
          (0, i.Cg)([a.o], P.prototype, "startUnresponsiveTimer", null),
          (0, i.Cg)([a.o], P.prototype, "cancelUnresponsiveTimeout", null),
          (0, i.Cg)([a.o], P.prototype, "onUnresponsiveTimeout", null),
          (0, i.Cg)([a.o], P.prototype, "updateLatchedValues", null),
          (0, i.Cg)([a.o], P.prototype, "onSceneApplicationStateChanged", null),
          (0, i.Cg)([a.o], P.prototype, "show", null),
          (0, i.Cg)([a.o], P.prototype, "cancelFadeOutTimers", null),
          (0, i.Cg)([a.o], P.prototype, "hideSoon", null),
          (0, i.Cg)([a.o], P.prototype, "startFadeOut", null),
          (0, i.Cg)([a.o], P.prototype, "resetLatchedValued", null),
          (0, i.Cg)([a.o], P.prototype, "hideAndResetLatchedValues", null),
          (P = H = (0, i.Cg)([l.PA], P));
        var F = n(7813),
          A = n(998),
          N = n(4963),
          B = n(9118),
          Z = n(5802),
          U = n(1532),
          W = n(6646),
          z = n(5572),
          G = n.n(z),
          K = n(6379);
        const j = (0, l.PA)(function () {
          const e = K.c.m_bRoomViewStreaming || !1,
            t = x.SW.m_bTrackingRecording;
          return e || t
            ? o.createElement(
                s.dL,
                { parent_path: "/user/head" },
                o.createElement(
                  s.dL,
                  {
                    translation: { x: 0.2, y: 0.42, z: -0.87 },
                    rotation: { x: 30 },
                    scale: 1,
                  },
                  o.createElement(
                    s.Zk,
                    {
                      meters_per_pixel: c.iZ,
                      sort_order: 1e3,
                      debug_name: "persistent_notifications",
                      key: "persistent_notifications",
                    },
                    o.createElement(
                      "div",
                      { className: G().PersistentNotificationsContainer },
                      e &&
                        o.createElement(
                          "div",
                          { className: G().RemoteStreamingNotification },
                          o.createElement(m.WM, null),
                        ),
                      t &&
                        o.createElement(
                          "div",
                          { className: G().TrackingDataRecordingNotification },
                          o.createElement(m.Kj, null),
                        ),
                    ),
                  ),
                ),
              )
            : null;
        });
        var $ = n(9728);
        const J = 0.0508,
          Q = 0.0015875;
        let q = class extends o.Component {
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
            var e, t, n, i;
            const r =
                null !==
                  (e = I.HR.settings.get(
                    "/settings/dashboard/enableLTCReflections",
                  )) &&
                void 0 !== e &&
                e,
              a =
                null !==
                  (t = I.HR.settings.get(
                    "/settings/dashboard/theaterModeReflection",
                  )) && void 0 !== t
                  ? t
                  : 0.5,
              l =
                null !==
                  (n = I.HR.settings.get(
                    "/settings/dashboard/theaterModeBrightness",
                  )) && void 0 !== n
                  ? n
                  : 0.5,
              c = Math.pow(a, 2.2),
              u = Math.pow(l, 2.2),
              m = $.G.Instance.SceneApplicationState !== s.HW.None,
              p = x.SW.sceneAppDimmingActive,
              h = x.SW.isGroupMode;
            let v, g;
            K.c.m_eCameraExposure == s.Yu.ECameraExposure_HighExposure
              ? ((g = [0.06, 0.08, 0.3]),
                (v = x.SW.m_bDashboardVisible
                  ? [0.35, 0.35, 0.35]
                  : [0.6, 0.6, 0.6]))
              : ((g = [0.09, 0.12, 0.6 * 0.75]),
                (v = x.SW.m_bDashboardVisible ? [0.6, 0.6, 0.6] : [1, 1, 1]));
            let _,
              C = [];
            if (
              (0 == d.H.roomSetupStep
                ? C.push(s.vz.QuickRecenter)
                : (2 != d.H.roomSetupStep && 3 != d.H.roomSetupStep) ||
                  C.push(s.vz.RoomSetupFloor),
              0 != d.H.roomSetupStep && 1 != d.H.roomSetupStep)
            )
              return o.createElement(
                o.Fragment,
                null,
                o.createElement(s.oi, {
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
              ((_ = m
                ? p
                  ? 0.15
                  : 1
                : {
                    channel: s.KI.TheaterSlow,
                    from: 1,
                    to: u,
                    interp: s.$.SmoothStep,
                  }),
              !d.H.m_bShowFloor)
            ) {
              const e =
                0.2 *
                (null !==
                  (i = I.HR.settings.get(
                    "/settings/dashboard/theaterModeSharpness",
                  )) && void 0 !== i
                  ? i
                  : 0.5);
              return o.createElement(
                o.Fragment,
                null,
                o.createElement(s.oi, {
                  "scene-color-mult": _,
                  "floor-color-mult": _,
                  "skydome-mult": 1,
                  "scene-reflection-mult": {
                    channel: s.KI.TheaterSlow,
                    from: 1,
                    to: c,
                    interp: s.$.SmoothStep,
                  },
                  "roomview-mult": { to: [1, 1, 1] },
                  "allowed-action-sets": C,
                }),
                r &&
                  x.SW.isTheaterMode &&
                  o.createElement(s.B4, {
                    "tile-size": 0.05588,
                    "tile-gap": Q,
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
            return o.createElement(
              "div",
              { className: "Construct" },
              o.createElement(s.oi, {
                "scene-color-mult": _,
                "floor-color-mult": _,
                "skydome-mult": {
                  channel: s.KI.TheaterSlow,
                  from: 1,
                  to: 0,
                  interp: s.$.SmoothStep,
                },
                "scene-reflection-mult": {
                  channel: s.KI.TheaterSlow,
                  from: 1,
                  to: c,
                  interp: s.$.SmoothStep,
                },
                "roomview-mult": {
                  channel: s.KI.TheaterSlow,
                  from: v,
                  to: g,
                  interp: s.$.SmoothStep,
                },
                "allowed-action-sets": C,
              }),
              o.createElement(
                s.dL,
                { parent_path: h ? "/system/locomotion/inverse" : void 0 },
                o.createElement(
                  s.dL,
                  { transform_path: h ? "/remote/spawn/inverse" : void 0 },
                  r &&
                    d.H.m_bShowFloor &&
                    o.createElement(s.B4, {
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
                    !x.SW.isTheaterMode &&
                    o.createElement(s.B4, {
                      "tile-size": 1.016,
                      "tile-gap": 3 * Q,
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
        q = (0, i.Cg)([l.PA], q);
        var X = n(3246),
          Y = n(4007),
          ee = n(1909),
          te = n(2156),
          ne = n(7600),
          ie = n(582);
        function oe() {
          return o.createElement(
            "div",
            { className: "LoadingThrobberContainer" },
            o.createElement("div", { className: "LoadingThrobber" }),
          );
        }
        function re() {
          return o.createElement(
            "div",
            { className: "RoomSetupUI" },
            o.createElement(
              "div",
              { className: "Title" },
              '"Error Loading Steam"',
            ),
            o.createElement(
              "div",
              { className: "Body" },
              "Steam timed out while starting.",
              o.createElement("p", null),
              "Please restart to try again, and contact support if the problem persists.",
            ),
            o.createElement(
              "div",
              { className: "ButtonRow" },
              o.createElement(
                u.$,
                {
                  className: "ButtonControl",
                  onClick: () => {
                    VRHTML.SystemRestartMachine();
                  },
                },
                o.createElement(m.bm, null),
                " ",
                "Restart",
              ),
            ),
          );
        }
        const ae = (0, l.PA)(function () {
          var e, t;
          const [n, i] = o.useState(!1),
            r = null != x.SW.bootFrame,
            a = x.SW.showLoadingThrobberOrBootOverlay,
            l = o.useRef(null),
            d = o.useRef(r),
            u = o.useCallback(() => {
              l.current && clearTimeout(l.current),
                i(!1),
                (l.current = setTimeout(() => {
                  console.error(
                    "SteamLoadingThrobber timed out after",
                    120,
                    "seconds",
                  ),
                    i(!0);
                }, 12e4));
            }, [120]),
            m = o.useCallback(() => {
              i(!1), l.current && (clearTimeout(l.current), (l.current = null));
            }, []);
          return (
            o.useEffect(
              () => (
                a && !r && u(),
                () => {
                  l.current && clearTimeout(l.current);
                }
              ),
              [a, r, u],
            ),
            o.useEffect(() => {
              const e = d.current,
                t = r;
              t ? m() : !t && e && u(), (d.current = t);
            }, [r, m, u]),
            o.useEffect(() => {
              a ? r || l.current || u() : m();
            }, [a, r, m, u]),
            a
              ? o.createElement(
                  ne.tH,
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
                        { translation: x.SW.dashboardTranslation },
                        o.createElement(
                          s.dL,
                          { scale: x.SW.dashboardScale },
                          !r &&
                            o.createElement(
                              s.Zk,
                              {
                                meters_per_pixel: c.iZ,
                                interactive: n,
                                debug_name: "steam-loading-throbber",
                              },
                              !n && o.createElement(oe, null),
                              n && o.createElement(re, null),
                            ),
                          r &&
                            o.createElement(s.Zk, {
                              overlay_key:
                                null ===
                                  (t =
                                    null === (e = x.SW.bootFrame) ||
                                    void 0 === e
                                      ? void 0
                                      : e.activePage) || void 0 === t
                                  ? void 0
                                  : t.summonOverlayKey,
                              meters_per_pixel: c.iZ,
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
        var se = n(3689),
          le = n(795),
          de = n(296);
        n(9256), n(3481), n(3514), n(9383), n(5323);
        (0, de.PA)(function (e) {
          var t;
          const n = "num_test_frames",
            [i, r] = o.useState(
              Number.parseInt(
                null !== (t = sessionStorage.getItem(n)) && void 0 !== t
                  ? t
                  : "1",
              ),
            );
          o.useEffect(() => sessionStorage.setItem(n, i.toString()), [i]);
          const [a, s] = o.useState(!0);
          return null;
        });
        var ce = n(3732),
          ue = n(2495),
          me = n(4734),
          pe = n(9978),
          he = n(8037),
          ve = n(7261);
        const ge = (0, l.PA)(function (e) {
          const { window: t } = e,
            [n, i] = o.useState(void 0);
          o.useEffect(() => {
            if (n)
              return (
                me.Q.OnDesktopWindowFrameCreated(n),
                () => me.Q.OnDesktopWindowFrameDestroyed(n)
              );
          }, [n]);
          const r = Y.Q.GetOverlayInfo(t.overlay_key);
          return r
            ? 1 != r.eOverlayType
              ? null
              : r.unFlags & s.NB.VisibleInDashboard
                ? o.createElement(
                    le.wI,
                    {
                      title: t.title,
                      iconEnum: 18,
                      iconHWND: Number.parseInt(t.hwnd),
                      showTabInDashboardBar: !0,
                      ref: i,
                    },
                    o.createElement(
                      le.P9,
                      {
                        summonOverlayKey: t.overlay_key,
                        renderChildren: "always",
                      },
                      o.createElement(
                        s.Zk,
                        {
                          interactive: !0,
                          overlay_key: r.sOverlayKey,
                          height: 2,
                          curvature_origin_id: c.ge,
                          origin: s.Oi.BottomCenter,
                          debug_name: r.sOverlayKey,
                          scale_index: (0, he.HX)(ve.$z.Dashboard),
                        },
                        o.createElement(le.gU, null),
                      ),
                    ),
                  )
                : null
            : null;
        });
        function _e(e) {
          return (0, pe.useObserver)(() =>
            me.Q.windows.filter((e) => e.overlay_key),
          ).map((e) => o.createElement(ge, { key: e.hwnd, window: e }));
        }
        var Ce;
        (0, F.configure)({ enforceActions: "never" });
        class Le extends o.Component {
          constructor(e) {
            var t;
            super(e),
              (this.m_mailbox = new s._n()),
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
            return o.createElement(
              s.JK,
              { visibleIn0DOF: !0, visibleIn3DOF: !0, visibleIn6DOF: !1 },
              this.state.bWakingBaseStations &&
                o.createElement(
                  s.dL,
                  { parent_path: "/user/head", translation: { z: -2.75 } },
                  o.createElement(
                    s.Zk,
                    {
                      width: 2,
                      height: void 0,
                      interactive: !1,
                      debug_name: "basestation-1",
                    },
                    o.createElement(
                      "div",
                      {
                        className:
                          "WakingBaseStationsPanel" + (e ? " Loaded" : ""),
                      },
                      o.createElement("img", {
                        className: "Rainbow",
                        src: "/dashboard/images/rainbow.png",
                        onLoad: this.onImageLoaded,
                      }),
                      o.createElement("div", { className: "Ground" }),
                    ),
                  ),
                  o.createElement(
                    s.dL,
                    { translation: { z: 0.23 } },
                    o.createElement(
                      s.Zk,
                      {
                        width: 2,
                        height: void 0,
                        interactive: !1,
                        debug_name: "basestation-2",
                      },
                      o.createElement(
                        "div",
                        {
                          className:
                            "WakingBaseStationsPanel" + (e ? " Loaded" : ""),
                        },
                        o.createElement("img", {
                          className: "Base",
                          src: "/dashboard/images/base.png",
                          onLoad: this.onImageLoaded,
                        }),
                        o.createElement(
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
        (0, i.Cg)(
          [a.o],
          Le.prototype,
          "onWakingBaseStationsStateChanged",
          null,
        ),
          (0, i.Cg)([a.o], Le.prototype, "onImageLoaded", null);
        let fe = (Ce = class extends o.Component {
          static bootstrap(e) {
            return (0, i.sH)(this, void 0, void 0, function* () {
              var t, n;
              console.log("Bootstrap START");
              let i = document.querySelector(e);
              if (!i)
                return void console.error(
                  "Unable to boostrap systemUI because " + e + " was not found",
                );
              if ((0, s.R$)() != s.OH.Overlay)
                return void console.error(
                  "Unable to boostrap systemUI because CurrentEnvironment() returns " +
                    s.OH[(0, s.R$)()],
                );
              console.log("Bootstrapping " + e, i);
              const a = 1e3 * (null !== (t = 1762994191) ? t : 0);
              console.log(
                "SteamVR Version Info: " +
                  JSON.stringify({
                    nWebpackTimestampMS: a,
                    sWebpackTimestampUTC: new Date(a).toUTCString(),
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
                N.u.Instance.preloadSounds(),
                null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.VROverlay.SetFlag(
                    VRHTML.VROverlay.ThisOverlayHandle(),
                    s.NB.MakeOverlaysInteractiveIfVisible,
                    !0,
                  ),
                null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.VROverlay.SetInputMethod(
                    VRHTML.VROverlay.ThisOverlayHandle(),
                    s.Rk.Mouse,
                  );
              try {
                yield Promise.all([
                  (0, k.uV)(
                    ["vrmonitor", "dashboard", "bindingui"],
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.GetSteamLanguage(),
                  ),
                  I.HR.Init(!0),
                  B.W.Init(!0),
                  Z.B$.Init(),
                  U.s.Init(),
                  W.X.Init(),
                ]),
                  yield Promise.all([
                    ce.D.Init(),
                    Y.Q.Init(),
                    me.Q.Init(),
                    se.g.Init(),
                    x.SW.Init(),
                    X.r.Init(),
                    K.c.Init(),
                    d.H.Init(),
                    le.JJ.Init(),
                  ]),
                  yield (0, ee.I)();
              } catch (e) {
                console.error("Failed to initialize systemui:", e);
              }
              (0, ie.aj)().Init("SteamVR", CLSTAMP, (0, ie.d4)()),
                r
                  .H(i)
                  .render(
                    o.createElement(s.O5, null, o.createElement(Ce, null)),
                  );
            });
          }
          constructor(e) {
            super(e),
              (this.m_DashboardRequestedCallbackHandle = null),
              (this.m_mailbox = new s._n()),
              (this.m_DashboardRef = null),
              (this.m_DeviceEventCallbackHandle = null),
              (this.m_DashboardRef = o.createRef()),
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
            e == s.ku.Activated &&
              (null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRSystem.GetTrackedDeviceClasses().some(
                    (e) => e.unIndex == n && e.eClass == s.mo.Controller,
                  )) &&
              this.forceUpdate();
          }
          render() {
            let e = [];
            e.push(
              o.createElement(
                ne.tH,
                { key: "loading" },
                o.createElement(ae, null),
              ),
            ),
              e.push(
                o.createElement(
                  ne.tH,
                  { key: "dashboard" },
                  o.createElement(w.cQ, { ref: this.m_DashboardRef }),
                ),
              ),
              e.push(
                o.createElement(
                  ne.tH,
                  { key: "desktopframes" },
                  o.createElement(ue.B, null),
                ),
              ),
              e.push(
                o.createElement(
                  ne.tH,
                  { key: "desktopwindowframes" },
                  o.createElement(_e, null),
                ),
              ),
              e.push(
                o.createElement(
                  ne.tH,
                  { key: "transition" },
                  o.createElement(P, null),
                ),
              ),
              e.push(
                o.createElement(
                  ne.tH,
                  { key: "basestationstatus" },
                  o.createElement(Le, null),
                ),
              );
            let t = 0;
            return (
              VRHTML.VRSystem.GetTrackedDeviceClasses().some(
                (n) => (
                  n.eClass == s.mo.Controller &&
                    (t++,
                    e.push(
                      o.createElement(
                        ne.tH,
                        { key: "controllerstatus_" + n.unIndex },
                        o.createElement(A.C, { trackedDeviceIndex: n.unIndex }),
                      ),
                    )),
                  t >= 8
                ),
              ),
              (null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRProperties.GetBoolProperty(
                    s.Gz,
                    s.fD.DriverProvidedIPDVisibility_Bool,
                  )) ||
                e.push(
                  o.createElement(
                    ne.tH,
                    { key: "ipd" },
                    o.createElement(T, null),
                  ),
                ),
              e.push(
                o.createElement(
                  ne.tH,
                  { key: "progressindicator" },
                  o.createElement(L, null),
                ),
              ),
              e.push(
                o.createElement(
                  ne.tH,
                  { key: "chaperonesafety" },
                  o.createElement(R, null),
                ),
              ),
              e.push(
                o.createElement(
                  ne.tH,
                  { key: "pooledpopups" },
                  o.createElement(te.F, null),
                ),
              ),
              e.push(
                o.createElement(
                  ne.tH,
                  { key: "construct" },
                  o.createElement(q, null),
                ),
              ),
              e.push(
                o.createElement(
                  ne.tH,
                  { key: "roomsetup" },
                  o.createElement(M, null),
                ),
              ),
              e.push(
                o.createElement(
                  ne.tH,
                  { key: "persistentnotifications" },
                  o.createElement(j, null),
                ),
              ),
              o.createElement("span", null, e)
            );
          }
        });
        (0, i.Cg)([a.o], fe.prototype, "DeviceEvent", null),
          (fe = Ce = (0, i.Cg)([l.PA], fe)),
          console.log("systemui.tsx is running CL", CLSTAMP),
          fe.bootstrap("#root");
      },
      9471: (e, t, n) => {
        "use strict";
        n.d(t, {
          bm: () => _,
          Pq: () => h,
          Xj: () => v,
          DO: () => u,
          FG: () => d,
          YN: () => c,
          hU: () => m,
          WM: () => p,
          fr: () => g,
          Kj: () => C,
        });
        var i = n(1635),
          o = n(6540);
        let r = 0;
        function a() {
          const e = o.useRef(void 0);
          return (
            void 0 === e.current && (e.current = "svgid_" + r++),
            [e.current, `url(#${e.current})`]
          );
        }
        var s = n(108),
          l = n.n(s);
        function d(e) {
          return o.createElement(
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
            o.createElement(
              "g",
              null,
              o.createElement("path", {
                d: "M93.8,50v28.1c0,8.6-7,15.6-15.6,15.6H21.9c-8.6,0-15.6-7-15.6-15.6V21.9c0-8.6,7-15.6,15.6-15.6H50c1.7,0,3.1,1.4,3.1,3.1\n\t\t\t\ts-1.4,3.1-3.1,3.1H21.9c-5.2,0-9.4,4.2-9.4,9.4v56.3c0,5.2,4.2,9.4,9.4,9.4h56.3c5.2,0,9.4-4.2,9.4-9.4V50c0-1.7,1.4-3.1,3.1-3.1\n\t\t\t\tS93.8,48.3,93.8,50z M68.8,12.5h14.3L47.8,47.8c-1.2,1.2-1.2,3.2,0,4.4c0,0,0,0,0,0c1.2,1.2,3.2,1.2,4.4,0c0,0,0,0,0,0l35.3-35.3\n\t\t\t\tv14.3c0,1.7,1.4,3.1,3.1,3.1l0,0c1.7,0,3.1-1.4,3.1-3.1V9.4c0-0.8-0.3-1.6-0.9-2.2c-0.6-0.6-1.4-0.9-2.2-0.9H68.8\n\t\t\t\tc-1.7,0-3.1,1.4-3.1,3.1S67,12.5,68.8,12.5z",
              }),
            ),
          );
        }
        function c(e) {
          return o.createElement(
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
            o.createElement("path", {
              d: "M0 0v8h8v-2h-1v1h-6v-6h1v-1h-2zm4 0l1.5 1.5-2.5 2.5 1 1 2.5-2.5 1.5 1.5v-4h-4z",
            }),
          );
        }
        function u(e) {
          return o.createElement(
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
            o.createElement("path", {
              fill: "currentColor",
              d: "M15.6615 10.25C15.3525 10.7125 15.1875 11.2562 15.1875 11.8125C15.1867 12.1821 15.2589 12.5482 15.3999 12.8898C15.541 13.2314 15.7481 13.5417 16.0094 13.8031C16.2708 14.0644 16.5811 14.2715 16.9227 14.4126C17.2643 14.5536 17.6304 14.6258 18 14.625C18.5563 14.625 19.1 14.4601 19.5625 14.151C20.0251 13.842 20.3855 13.4027 20.5984 12.8888C20.8113 12.3749 20.867 11.8094 20.7585 11.2638C20.6499 10.7182 20.3821 10.2171 19.9887 9.82376C19.5954 9.43043 19.0943 9.16256 18.5487 9.05404C18.0031 8.94552 17.4376 9.00122 16.9237 9.21409C16.4098 9.42696 15.9705 9.78745 15.6615 10.25Z",
            }),
            o.createElement("path", {
              fill: "currentColor",
              d: "M14.4645 17.9645C15.4021 17.0268 16.6739 16.5 18 16.5C19.3261 16.5 20.5979 17.0268 21.5355 17.9645C22.4732 18.9021 23 20.1739 23 21.5V24H21L20.5 29H15.5L15 24H13V21.5C13 20.1739 13.5268 18.9021 14.4645 17.9645Z",
            }),
            o.createElement("path", {
              fill: "currentColor",
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M18 0L35 7.00016V29L18 36L1 29V7.00016L18 0ZM4 27.7647V9.76471L18 4L32 9.76471V27.7647L24.6111 24.7222L24.1734 27.7864L27.1208 29L18 32.7556L8.87919 29L11.8266 27.7864L11.3889 24.7222L4 27.7647Z",
            }),
          );
        }
        function m(e) {
          return o.createElement(
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
            o.createElement("path", {
              fill: "currentColor",
              d: "M14.7261 2.74994C14.2934 3.39746 14.0625 4.15874 14.0625 4.9375C14.0613 5.45491 14.1624 5.96744 14.3599 6.44568C14.5573 6.92392 14.8473 7.35845 15.2132 7.72431C15.5791 8.09017 16.0136 8.38016 16.4918 8.57763C16.9701 8.7751 17.4826 8.87616 18 8.875C18.7788 8.875 19.54 8.64407 20.1876 8.21141C20.8351 7.77876 21.3398 7.1638 21.6378 6.44432C21.9358 5.72483 22.0138 4.93313 21.8618 4.16933C21.7099 3.40553 21.3349 2.70394 20.7842 2.15327C20.2336 1.6026 19.532 1.22759 18.7682 1.07566C18.0044 0.92373 17.2127 1.00171 16.4932 1.29973C15.7737 1.59775 15.1587 2.10243 14.7261 2.74994Z",
            }),
            o.createElement("path", {
              fill: "currentColor",
              d: "M13.0503 13.5503C14.363 12.2375 16.1435 11.5 18 11.5C19.8565 11.5 21.637 12.2375 22.9497 13.5503C24.2625 14.863 25 16.6435 25 18.5V22H22.2L21.5 29H14.5L13.8 22H11V18.5C11 16.6435 11.7375 14.863 13.0503 13.5503Z",
            }),
            o.createElement("path", {
              fill: "currentColor",
              d: "M3 29C3 26.5645 5.66517 24.4196 9.70869 23.1656L10.0112 26.224C9.52728 26.393 9.07639 26.5754 8.66205 26.7688C6.18364 27.9254 6 28.9249 6 29C6 29.0751 6.18364 30.0746 8.66205 31.2312C10.8969 32.2741 14.1952 33 18 33C21.8048 33 25.1031 32.2741 27.3379 31.2312C29.8164 30.0746 30 29.0751 30 29C30 28.9249 29.8164 27.9254 27.3379 26.7688C26.9236 26.5754 26.4727 26.393 25.9888 26.224L26.2913 23.1656C30.3348 24.4196 33 26.5645 33 29C33 32.866 26.2843 36 18 36C9.71573 36 3 32.866 3 29Z",
            }),
          );
        }
        function p(e) {
          return o.createElement(
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
            o.createElement("path", {
              fill: "currentColor",
              d: "M11 9H29V19H26.6585C26.8797 19.6256 27 20.2987 27 21C27 21.3407 26.9716 21.6748 26.917 22H32V6H8V15.083C8.32521 15.0284 8.65929 15 9 15C9.70126 15 10.3744 15.1203 11 15.3415V9Z",
            }),
            o.createElement("path", {
              fill: "currentColor",
              d: "M9 24C10.6569 24 12 22.6569 12 21C12 19.3431 10.6569 18 9 18C7.34315 18 6 19.3431 6 21C6 22.6569 7.34315 24 9 24Z",
            }),
            o.createElement("path", {
              fill: "currentColor",
              d: "M21 24C22.6569 24 24 22.6569 24 21C24 19.3431 22.6569 18 21 18C19.3431 18 18 19.3431 18 21C18 22.6569 19.3431 24 21 24Z",
            }),
            o.createElement("path", {
              fill: "currentColor",
              d: "M26 30C26 27.2386 23.7614 25 21 25C18.2386 25 16 27.2386 16 30V32H26V30Z",
            }),
            o.createElement("path", {
              fill: "currentColor",
              d: "M14 30C14 27.2386 11.7614 25 9 25C6.23858 25 4 27.2386 4 30V32H14V30Z",
            }),
          );
        }
        function h(e) {
          const { none: t, partial: n, right: r, left: a } = e,
            s = (0, i.Tt)(e, ["none", "partial", "right", "left"]);
          return t
            ? o.createElement(
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
                o.createElement("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M33.5871 3.5268L31.4417 1.38135L26.6841 6.13886C24.4873 5.49306 21.6236 5 18 5C7.5 5 3.38 9.14 3.38 9.14C3.38 9.14 0 20.56 0 25.2C0 27.1825 1.62275 28.7886 3.01931 29.8037L0.370949 32.452L2.5164 34.5975L33.5871 3.5268ZM23.2678 19.2678C23.0842 19.4513 22.8735 19.6049 22.6433 19.7232L17.3666 25H25L31 31C31 31 36 28.68 36 25.2C36 21.1218 33.3889 11.806 32.7566 9.60992L29.8137 12.5529C29.9361 12.852 30 13.1736 30 13.5C30 14.163 29.7366 14.7989 29.2678 15.2678C28.7989 15.7366 28.163 16 27.5 16C27.1736 16 26.852 15.9361 26.5529 15.8137L23.7232 18.6433C23.6049 18.8735 23.4513 19.0842 23.2678 19.2678ZM15 17H12V20H9V17H6V14H9V11H12V14H15V17Z",
                }),
              )
            : n || r
              ? o.createElement(
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
                  o.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M32.62 9.14C32.62 9.14 28.5 5 18 5V25H25L31 31C31 31 36 28.68 36 25.2C36 20.56 32.62 9.14 32.62 9.14ZM21.5 20C21.0055 20 20.5222 19.8534 20.1111 19.5787C19.7 19.304 19.3795 18.9135 19.1903 18.4567C19.0011 17.9999 18.9516 17.4972 19.048 17.0123C19.1445 16.5273 19.3826 16.0819 19.7322 15.7322C20.0819 15.3826 20.5273 15.1445 21.0123 15.048C21.4972 14.9516 21.9999 15.0011 22.4567 15.1903C22.9135 15.3795 23.304 15.7 23.5787 16.1111C23.8534 16.5222 24 17.0055 24 17.5C24 17.8283 23.9353 18.1534 23.8097 18.4567C23.6841 18.76 23.4999 19.0356 23.2678 19.2678C23.0356 19.4999 22.76 19.6841 22.4567 19.8097C22.1534 19.9353 21.8283 20 21.5 20ZM27.5 16C27.0055 16 26.5222 15.8534 26.1111 15.5787C25.7 15.304 25.3795 14.9135 25.1903 14.4567C25.0011 13.9999 24.9516 13.4972 25.048 13.0123C25.1445 12.5273 25.3826 12.0819 25.7322 11.7322C26.0819 11.3826 26.5273 11.1445 27.0123 11.048C27.4972 10.9516 27.9999 11.0011 28.4567 11.1903C28.9135 11.3795 29.304 11.7 29.5787 12.1111C29.8534 12.5222 30 13.0055 30 13.5C30 14.163 29.7366 14.7989 29.2678 15.2678C28.7989 15.7366 28.163 16 27.5 16Z",
                  }),
                  o.createElement("path", {
                    fill: "currentColor",
                    opacity: "0.5",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3.38 9.14C3.38 9.14 0 20.56 0 25.2C0 28.68 5 31 5 31L11 25H18V5C7.5 5 3.38 9.14 3.38 9.14ZM15 17H12V20H9V17H6V14H9V11H12V14H15V17Z",
                  }),
                )
              : a
                ? o.createElement(
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
                    o.createElement("path", {
                      fill: "currentColor",
                      opacity: "0.5",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M32.62 9.14C32.62 9.14 28.5 5 18 5V25H25L31 31C31 31 36 28.68 36 25.2C36 20.56 32.62 9.14 32.62 9.14ZM21.5 20C21.0055 20 20.5222 19.8534 20.1111 19.5787C19.7 19.304 19.3795 18.9135 19.1903 18.4567C19.0011 17.9999 18.9516 17.4972 19.048 17.0123C19.1445 16.5273 19.3826 16.0819 19.7322 15.7322C20.0819 15.3826 20.5273 15.1445 21.0123 15.048C21.4972 14.9516 21.9999 15.0011 22.4567 15.1903C22.9135 15.3795 23.304 15.7 23.5787 16.1111C23.8534 16.5222 24 17.0055 24 17.5C24 17.8283 23.9353 18.1534 23.8097 18.4567C23.6841 18.76 23.4999 19.0356 23.2678 19.2678C23.0356 19.4999 22.76 19.6841 22.4567 19.8097C22.1534 19.9353 21.8283 20 21.5 20ZM27.5 16C27.0055 16 26.5222 15.8534 26.1111 15.5787C25.7 15.304 25.3795 14.9135 25.1903 14.4567C25.0011 13.9999 24.9516 13.4972 25.048 13.0123C25.1445 12.5273 25.3826 12.0819 25.7322 11.7322C26.0819 11.3826 26.5273 11.1445 27.0123 11.048C27.4972 10.9516 27.9999 11.0011 28.4567 11.1903C28.9135 11.3795 29.304 11.7 29.5787 12.1111C29.8534 12.5222 30 13.0055 30 13.5C30 14.163 29.7366 14.7989 29.2678 15.2678C28.7989 15.7366 28.163 16 27.5 16Z",
                    }),
                    o.createElement("path", {
                      fill: "currentColor",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M3.38 9.14C3.38 9.14 0 20.56 0 25.2C0 28.68 5 31 5 31L11 25H18V5C7.5 5 3.38 9.14 3.38 9.14ZM15 17H12V20H9V17H6V14H9V11H12V14H15V17Z",
                    }),
                  )
                : o.createElement(
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
                    o.createElement("path", {
                      fill: "currentColor",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M32.62 9.14C32.62 9.14 28.5 5 18 5C7.5 5 3.38 9.14 3.38 9.14C3.38 9.14 0 20.56 0 25.2C0 28.68 5 31 5 31L11 25H25L31 31C31 31 36 28.68 36 25.2C36 20.56 32.62 9.14 32.62 9.14ZM15 17H12V20H9V17H6V14H9V11H12V14H15V17ZM21.5 20C21.0055 20 20.5222 19.8534 20.1111 19.5787C19.7 19.304 19.3795 18.9135 19.1903 18.4567C19.0011 17.9999 18.9516 17.4972 19.048 17.0123C19.1445 16.5273 19.3826 16.0819 19.7322 15.7322C20.0819 15.3826 20.5273 15.1445 21.0123 15.048C21.4972 14.9516 21.9999 15.0011 22.4567 15.1903C22.9135 15.3795 23.304 15.7 23.5787 16.1111C23.8534 16.5222 24 17.0055 24 17.5C24 17.8283 23.9353 18.1534 23.8097 18.4567C23.6841 18.76 23.4999 19.0356 23.2678 19.2678C23.0356 19.4999 22.76 19.6841 22.4567 19.8097C22.1534 19.9353 21.8283 20 21.5 20ZM27.5 16C27.0055 16 26.5222 15.8534 26.1111 15.5787C25.7 15.304 25.3795 14.9135 25.1903 14.4567C25.0011 13.9999 24.9516 13.4972 25.048 13.0123C25.1445 12.5273 25.3826 12.0819 25.7322 11.7322C26.0819 11.3826 26.5273 11.1445 27.0123 11.048C27.4972 10.9516 27.9999 11.0011 28.4567 11.1903C28.9135 11.3795 29.304 11.7 29.5787 12.1111C29.8534 12.5222 30 13.0055 30 13.5C30 14.163 29.7366 14.7989 29.2678 15.2678C28.7989 15.7366 28.163 16 27.5 16Z",
                    }),
                  );
        }
        function v(e) {
          return o.createElement(
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
            o.createElement("path", {
              d: "M32 27V32H4V27H32ZM29 10.77L25.48 7.22998L18 14.72L10.5 7.22998L7 10.77L18 21.77L29 10.77Z",
              fill: "currentColor",
            }),
          );
        }
        function g(e) {
          return o.createElement(
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
            o.createElement("path", {
              fill: "currentColor",
              d: "M18 1C8.4375 1 1 3 1 3V23C1 23 5.70777 21.734 12.448 21.2165L18.0004 15.6641L23.5529 21.2166C30.2926 21.7342 35 23 35 23V3C35 3 27.5625 1 18 1Z",
            }),
            o.createElement("path", {
              fill: "currentColor",
              d: "M8 31.3209L11.2 34.5391L18 27.73L24.8182 34.5391L28 31.3209L18 21.3209L8 31.3209Z",
            }),
          );
        }
        function _(e) {
          return o.createElement(
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
            o.createElement("path", {
              d: "M32.12 7.41L28.59 3.88L18 14.46L7.41 3.88L3.88 7.41L14.46 18L3.88 28.59L7.41 32.12L18 21.54L28.59 32.12L32.12 28.59L21.54 18L32.12 7.41Z",
              fill: "currentColor",
            }),
          );
        }
        function C(e) {
          const [t, n] = a(),
            [i, r] = a();
          return o.createElement(
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
            o.createElement(
              "g",
              { clipPath: r },
              o.createElement(
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
                o.createElement("path", {
                  fill: "white",
                  d: "M500 0H0V250H500V0Z",
                }),
              ),
              o.createElement(
                "g",
                { mask: n },
                o.createElement("path", {
                  fill: "#323232EE",
                  d: "M375 0H125C55.9644 0 0 55.9644 0 125C0 194.036 55.9644 250 125 250H375C444.036 250 500 194.036 500 125C500 55.9644 444.036 0 375 0Z",
                }),
                o.createElement("path", {
                  fill: "black",
                  d: "M310.749 58.0107C321.991 58.0522 333.222 58.2335 344.453 58.9082L345.688 58.9844C358.47 59.7916 371.932 61.2894 384.305 64.8662L384.905 65.042C397.49 68.7656 409.658 74.9172 418.358 85.415L418.564 85.667C427.273 96.3129 431.026 109.475 431.828 122.783L431.851 123.191C432.306 131.63 431.341 139.668 429.338 147.856L429.241 148.253C427.178 156.567 424.026 164.173 418.677 171.01L418.421 171.335C407.052 185.613 390.364 190.677 373.375 191.612L372.974 191.634C370.365 191.764 367.761 191.789 365.147 191.661L364.624 191.634C361.417 191.451 358.273 191.047 355.142 190.289C352.096 189.555 349.228 188.524 346.434 187.117L346.164 186.979C340.19 183.91 335.864 179.679 331.881 174.433C330.428 172.525 329.071 170.552 327.725 168.573L326.379 166.594C324.575 163.95 322.765 161.333 320.641 158.925C318.353 156.327 316.032 154.326 313.392 152.972C310.753 151.618 307.793 150.911 304.227 150.904C297.097 150.917 292.141 153.731 287.566 158.925C285.707 161.032 284.089 163.3 282.505 165.604L281.829 166.594C280.031 169.231 278.263 171.889 276.326 174.433L275.586 175.389C271.867 180.114 267.789 183.969 262.323 186.835L262.044 186.979C259.255 188.411 256.394 189.463 253.36 190.217L253.066 190.289C250.032 191.023 246.987 191.425 243.884 191.616L243.584 191.634C240.795 191.792 238.017 191.773 235.234 191.634C218.107 190.756 201.245 185.726 189.787 171.335C184.368 164.523 181.164 156.94 179.067 148.648L178.967 148.253C176.866 139.795 175.863 131.507 176.38 122.783L176.399 122.469C177.247 109.163 181.062 96.0212 189.85 85.415L190.058 85.166C198.882 74.6545 211.204 68.5422 223.902 64.8662L224.501 64.6943C237.109 61.1275 250.813 59.6846 263.755 58.9082L264.39 58.8711C275.722 58.2187 291.472 58.0466 304.078 58.0088C304.084 58.0032 304.092 58 304.101 58L306.624 58.001C306.865 58.0012 307.105 58.0016 307.345 58.002C308.51 58.0003 309.638 58 310.724 58C310.734 58 310.743 58.004 310.749 58.0107Z",
                }),
                o.createElement("path", {
                  fill: "white",
                  d: "M310.749 58.0107L306.448 62.0367C307.557 63.2216 309.105 63.8966 310.728 63.9026L310.749 58.0107ZM344.453 58.9082L344.815 53.0275L344.806 53.0269L344.453 58.9082ZM345.688 58.9844L346.059 53.1042L346.051 53.1037L345.688 58.9844ZM384.305 64.8662L385.963 59.2123C385.956 59.2102 385.948 59.2081 385.941 59.2061L384.305 64.8662ZM384.905 65.042L386.576 59.3922C386.572 59.3908 386.567 59.3894 386.562 59.3881L384.905 65.042ZM418.358 85.415L422.919 81.685C422.911 81.6752 422.903 81.6653 422.894 81.6555L418.358 85.415ZM418.564 85.667L414.003 89.397L414.004 89.3977L418.564 85.667ZM431.828 122.783L437.71 122.445C437.709 122.44 437.709 122.434 437.709 122.429L431.828 122.783ZM431.851 123.191L437.734 122.874C437.734 122.867 437.734 122.86 437.733 122.854L431.851 123.191ZM429.338 147.856L435.059 149.266L435.062 149.256L429.338 147.856ZM429.241 148.253L434.959 149.672L434.962 149.662L429.241 148.253ZM418.677 171.01L423.308 174.653C423.311 174.649 423.314 174.645 423.318 174.64L418.677 171.01ZM418.421 171.335L423.031 175.005C423.038 174.996 423.045 174.987 423.052 174.978L418.421 171.335ZM373.375 191.612L373.69 197.496L373.699 197.495L373.375 191.612ZM372.974 191.634L373.268 197.518C373.275 197.518 373.282 197.518 373.289 197.517L372.974 191.634ZM365.147 191.661L364.84 197.545C364.846 197.545 364.853 197.546 364.86 197.546L365.147 191.661ZM364.624 191.634L364.288 197.516C364.297 197.517 364.307 197.517 364.316 197.518L364.624 191.634ZM355.142 190.289L356.528 184.562L356.523 184.561L355.142 190.289ZM346.434 187.117L343.761 192.368C343.769 192.372 343.776 192.376 343.784 192.379L346.434 187.117ZM346.164 186.979L343.471 192.22C343.477 192.223 343.484 192.227 343.491 192.23L346.164 186.979ZM331.881 174.433L336.574 170.87L336.568 170.863L331.881 174.433ZM326.379 166.594L331.252 163.281L331.246 163.273L326.379 166.594ZM320.641 158.925L316.22 162.819L316.222 162.822L320.641 158.925ZM304.227 150.904L304.237 145.012C304.231 145.012 304.224 145.012 304.217 145.012L304.227 150.904ZM287.566 158.925L291.985 162.822L291.987 162.819L287.566 158.925ZM282.505 165.604L277.65 162.267L277.643 162.278L282.505 165.604ZM281.829 166.594L276.966 163.267L276.96 163.275L281.829 166.594ZM276.326 174.433L280.987 178.037C280.995 178.025 281.004 178.014 281.013 178.003L276.326 174.433ZM275.586 175.389L280.216 179.032C280.227 179.019 280.237 179.006 280.247 178.993L275.586 175.389ZM262.323 186.835L265.038 192.064C265.045 192.06 265.052 192.057 265.059 192.053L262.323 186.835ZM262.044 186.979L264.735 192.221C264.743 192.217 264.751 192.213 264.76 192.208L262.044 186.979ZM253.36 190.217L254.766 195.938L254.779 195.935L253.36 190.217ZM253.066 190.289L254.452 196.016C254.459 196.014 254.466 196.012 254.473 196.011L253.066 190.289ZM243.884 191.616L244.229 197.498C244.235 197.498 244.24 197.497 244.246 197.497L243.884 191.616ZM243.584 191.634L243.917 197.516H243.929L243.584 191.634ZM235.234 191.634L234.932 197.518H234.94L235.234 191.634ZM189.787 171.335L185.176 175.003L185.177 175.005L189.787 171.335ZM179.067 148.648L173.353 150.087L173.355 150.093L179.067 148.648ZM178.967 148.253L173.249 149.674C173.251 149.68 173.252 149.686 173.254 149.692L178.967 148.253ZM176.38 122.783L182.262 123.132V123.13L176.38 122.783ZM176.399 122.469L170.519 122.094C170.518 122.103 170.518 122.112 170.517 122.122L176.399 122.469ZM189.85 85.415L185.328 81.6379C185.323 81.6439 185.318 81.6499 185.313 81.656L189.85 85.415ZM190.058 85.166L185.545 81.3778C185.542 81.3815 185.539 81.3852 185.536 81.3889L190.058 85.166ZM223.902 64.8662L222.278 59.2024C222.273 59.2039 222.268 59.2053 222.263 59.2067L223.902 64.8662ZM224.501 64.6943L222.898 59.025C222.891 59.0268 222.884 59.0287 222.878 59.0306L224.501 64.6943ZM263.755 58.9082L263.411 53.0264L263.403 53.0269L263.755 58.9082ZM264.39 58.8711L264.051 52.989L264.046 52.9893L264.39 58.8711ZM304.078 58.0088L304.095 63.9006C305.56 63.8962 306.972 63.3461 308.053 62.3574L304.078 58.0088ZM304.101 58L304.103 52.1081H304.101V58ZM306.624 58.001L306.631 52.1091H306.627L306.624 58.001ZM307.345 58.002L307.336 63.8938C307.342 63.8938 307.348 63.8938 307.353 63.8938L307.345 58.002ZM310.724 58L310.731 52.1081H310.724V58ZM310.749 58.0107L310.728 63.9026C321.929 63.9439 333.032 64.1246 344.099 64.7895L344.453 58.9082L344.806 53.0269C333.412 52.3424 322.053 52.1606 310.771 52.1189L310.749 58.0107ZM344.453 58.9082L344.09 64.7889L345.325 64.8651L345.688 58.9844L346.051 53.1037L344.815 53.0275L344.453 58.9082ZM345.688 58.9844L345.317 64.8645C357.955 65.6626 370.913 67.1279 382.669 70.5263L384.305 64.8662L385.941 59.2061C372.951 55.4509 358.986 53.9206 346.059 53.1042L345.688 58.9844ZM384.305 64.8662L382.648 70.5201L383.247 70.6959L384.905 65.042L386.562 59.3881L385.963 59.2123L384.305 64.8662ZM384.905 65.042L383.233 70.6918C395.184 74.2276 406.136 79.9016 413.821 89.1746L418.358 85.415L422.894 81.6555C413.179 69.9329 399.796 63.3036 386.576 59.3922L384.905 65.042ZM418.358 85.415L413.797 89.145L414.003 89.397L418.564 85.667L423.125 81.937L422.919 81.685L418.358 85.415ZM418.564 85.667L414.004 89.3977C421.703 98.8088 425.195 110.654 425.946 123.137L431.828 122.783L437.709 122.429C436.858 108.296 432.844 93.8169 423.124 81.9362L418.564 85.667ZM431.828 122.783L425.945 123.121L425.969 123.529L431.851 123.191L437.733 122.854L437.71 122.445L431.828 122.783ZM431.851 123.191L425.968 123.509C426.387 131.272 425.506 138.725 423.615 146.457L429.338 147.856L435.062 149.256C437.176 140.611 438.226 131.988 437.734 122.874L431.851 123.191ZM429.338 147.856L423.617 146.447L423.52 146.844L429.241 148.253L434.962 149.662L435.059 149.266L429.338 147.856ZM429.241 148.253L423.522 146.834C421.599 154.587 418.74 161.368 414.037 167.379L418.677 171.01L423.318 174.64C429.312 166.978 432.757 158.547 434.959 149.672L429.241 148.253ZM418.677 171.01L414.047 167.367L413.791 167.692L418.421 171.335L423.052 174.978L423.308 174.653L418.677 171.01ZM418.421 171.335L413.812 167.665C403.912 180.099 389.182 184.841 373.052 185.729L373.375 191.612L373.699 197.495C391.545 196.513 410.193 191.128 423.031 175.005L418.421 171.335ZM373.375 191.612L373.061 185.729L372.659 185.75L372.974 191.634L373.289 197.517L373.69 197.496L373.375 191.612ZM372.974 191.634L372.68 185.749C370.229 185.872 367.821 185.893 365.434 185.776L365.147 191.661L364.86 197.546C367.7 197.684 370.501 197.656 373.268 197.518L372.974 191.634ZM365.147 191.661L365.454 185.777L364.931 185.75L364.624 191.634L364.316 197.518L364.84 197.545L365.147 191.661ZM364.624 191.634L364.959 185.751C362.027 185.584 359.245 185.22 356.528 184.562L355.142 190.289L353.756 196.016C357.302 196.874 360.807 197.317 364.288 197.516L364.624 191.634ZM355.142 190.289L356.523 184.561C353.891 183.927 351.451 183.047 349.084 181.855L346.434 187.117L343.784 192.379C347.005 194.001 350.302 195.183 353.762 196.017L355.142 190.289ZM346.434 187.117L349.107 181.866L348.836 181.729L346.164 186.979L343.491 192.23L343.761 192.368L346.434 187.117ZM346.164 186.979L348.856 181.739C343.902 179.193 340.211 175.661 336.574 170.87L331.881 174.433L327.189 177.995C331.517 183.696 336.478 188.627 343.471 192.22L346.164 186.979ZM331.881 174.433L336.568 170.863C335.22 169.092 333.941 167.235 332.597 165.26L327.725 168.573L322.853 171.886C324.202 173.868 325.636 175.957 327.194 178.003L331.881 174.433ZM327.725 168.573L332.598 165.261L331.252 163.281L326.379 166.594L321.507 169.906L322.853 171.886L327.725 168.573ZM326.379 166.594L331.246 163.273C329.455 160.648 327.457 157.746 325.06 155.027L320.641 158.925L316.222 162.822C318.074 164.921 319.695 167.252 321.513 169.915L326.379 166.594ZM320.641 158.925L325.062 155.03C322.471 152.088 319.587 149.528 316.081 147.729L313.392 152.972L310.703 158.214C312.476 159.124 314.235 160.566 316.22 162.819L320.641 158.925ZM313.392 152.972L316.081 147.729C312.522 145.904 308.628 145.02 304.237 145.012L304.227 150.904L304.217 156.796C306.958 156.801 308.983 157.332 310.703 158.214L313.392 152.972ZM304.227 150.904L304.217 145.012C295.074 145.029 288.602 148.836 283.145 155.03L287.566 158.925L291.987 162.819C295.68 158.627 299.121 156.805 304.237 156.796L304.227 150.904ZM287.566 158.925L283.147 155.027C281.04 157.416 279.257 159.929 277.65 162.267L282.505 165.604L287.361 168.942C288.922 166.67 290.374 164.648 291.985 162.822L287.566 158.925ZM282.505 165.604L277.643 162.278L276.966 163.267L281.829 166.594L286.691 169.92L287.368 168.931L282.505 165.604ZM281.829 166.594L276.96 163.275C275.108 165.993 273.456 168.477 271.638 170.863L276.326 174.433L281.013 178.003C283.07 175.301 284.954 172.469 286.697 169.912L281.829 166.594ZM276.326 174.433L271.665 170.829L270.925 171.785L275.586 175.389L280.247 178.993L280.987 178.037L276.326 174.433ZM275.586 175.389L270.956 171.745C267.595 176.017 264.122 179.238 259.586 181.617L262.323 186.835L265.059 192.053C271.455 188.699 276.14 184.212 280.216 179.032L275.586 175.389ZM262.323 186.835L259.607 181.606L259.329 181.751L262.044 186.979L264.76 192.208L265.038 192.064L262.323 186.835ZM262.044 186.979L259.354 181.738C256.989 182.951 254.558 183.849 251.94 184.498L253.36 190.217L254.779 195.935C258.231 195.078 261.521 193.871 264.735 192.221L262.044 186.979ZM253.36 190.217L251.953 184.495L251.659 184.568L253.066 190.289L254.473 196.011L254.766 195.938L253.36 190.217ZM253.066 190.289L251.68 184.562C249.048 185.199 246.354 185.561 243.522 185.735L243.884 191.616L244.246 197.497C247.62 197.289 251.017 196.847 254.452 196.016L253.066 190.289ZM243.884 191.616L243.539 185.734L243.24 185.752L243.584 191.634L243.929 197.516L244.229 197.498L243.884 191.616ZM243.584 191.634L243.252 185.751C240.708 185.895 238.143 185.88 235.527 185.749L235.234 191.634L234.94 197.518C237.891 197.666 240.881 197.688 243.917 197.516L243.584 191.634ZM235.234 191.634L235.535 185.75C219.259 184.916 204.374 180.196 194.396 167.665L189.787 171.335L185.177 175.005C198.117 191.255 216.956 196.597 234.932 197.518L235.234 191.634ZM189.787 171.335L194.398 167.667C189.633 161.678 186.732 154.923 184.779 147.204L179.067 148.648L173.355 150.093C175.597 158.956 179.102 167.367 185.176 175.003L189.787 171.335ZM179.067 148.648L184.78 147.209L184.681 146.814L178.967 148.253L173.254 149.692L173.353 150.087L179.067 148.648ZM178.967 148.253L184.685 146.832C182.7 138.841 181.786 131.157 182.262 123.132L176.38 122.783L170.499 122.434C169.94 131.858 171.032 140.749 173.249 149.674L178.967 148.253ZM176.38 122.783L182.262 123.13L182.281 122.816L176.399 122.469L170.517 122.122L170.499 122.436L176.38 122.783ZM176.399 122.469L182.279 122.844C183.074 110.369 186.62 98.5479 194.387 89.1741L189.85 85.415L185.313 81.656C175.504 93.4945 171.42 107.957 170.519 122.094L176.399 122.469ZM189.85 85.415L194.372 89.1922L194.58 88.9431L190.058 85.166L185.536 81.3889L185.328 81.6379L189.85 85.415ZM190.058 85.166L194.571 88.9543C202.369 79.6648 213.47 74.0202 225.54 70.5257L223.902 64.8662L222.263 59.2067C208.939 63.0641 195.396 69.6443 185.545 81.3778L190.058 85.166ZM223.902 64.8662L225.525 70.53L226.125 70.3581L224.501 64.6943L222.878 59.0306L222.278 59.2024L223.902 64.8662ZM224.501 64.6943L226.105 70.3637C238.097 66.9713 251.298 65.558 264.108 64.7895L263.755 58.9082L263.403 53.0269C250.328 53.8113 236.122 55.2838 222.898 59.025L224.501 64.6943ZM263.755 58.9082L264.099 64.79L264.734 64.7529L264.39 58.8711L264.046 52.9893L263.411 53.0264L263.755 58.9082ZM264.39 58.8711L264.729 64.7532C275.882 64.1111 291.486 63.9384 304.095 63.9006L304.078 58.0088L304.06 52.1169C291.458 52.1547 275.561 52.3263 264.051 52.989L264.39 58.8711ZM304.078 58.0088L308.053 62.3574C306.911 63.4009 305.478 63.8919 304.101 63.8919V58V52.1081C302.707 52.1081 301.256 52.6055 300.102 53.6601L304.078 58.0088ZM304.101 58L304.099 63.8919L306.622 63.8928L306.624 58.001L306.627 52.1091L304.103 52.1081L304.101 58ZM306.624 58.001L306.618 63.8928C306.857 63.8931 307.096 63.8935 307.336 63.8938L307.345 58.002L307.354 52.1101C307.114 52.1097 306.872 52.1094 306.631 52.1091L306.624 58.001ZM307.345 58.002L307.353 63.8938C308.514 63.8922 309.639 63.8919 310.724 63.8919V58V52.1081C309.637 52.1081 308.506 52.1085 307.337 52.1101L307.345 58.002ZM310.724 58L310.717 63.8919C309.155 63.8901 307.591 63.2586 306.448 62.0367L310.749 58.0107L315.051 53.9848C313.895 52.7495 312.313 52.1099 310.731 52.1081L310.724 58Z",
                }),
                o.createElement("path", {
                  className: l().recordingCircle,
                  fill: "#FF0000",
                  d: "M100.936 151.816C115.816 151.816 127.879 139.753 127.879 124.873C127.879 109.993 115.816 97.9297 100.936 97.9297C86.0556 97.9297 73.9927 109.993 73.9927 124.873C73.9927 139.753 86.0556 151.816 100.936 151.816Z",
                }),
                o.createElement("path", {
                  className: l().recordingCircle,
                  stroke: "#FF0000",
                  d: "M100.934 164.073C122.583 164.073 140.133 146.523 140.133 124.874C140.133 103.225 122.583 85.6752 100.934 85.6752C79.2851 85.6752 61.7352 103.225 61.7352 124.874C61.7352 146.523 79.2851 164.073 100.934 164.073Z",
                  strokeWidth: "4.67767",
                }),
              ),
            ),
            o.createElement(
              "defs",
              null,
              o.createElement(
                "clipPath",
                { id: i },
                o.createElement("rect", {
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
        n.d(t, { I: () => h, p: () => v });
        var i = n(1635),
          o = n(6090),
          r = n(4074),
          a = n(1526),
          s = n(4999),
          l = n(776),
          d = n(3606),
          c = n(7813);
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
            (this.m_SteamVR_Provider = new r.tC(this, s.f5)),
              (this.m_Steam_Client = new r.$k(this)),
              (this.m_Steam_ClientMethods = new s.oT(this.m_Steam_Client)),
              (this.m_mailbox = new o._n()),
              (this.m_bSteamWebsocketConnected = !1),
              (this.m_unNextVRGamepadUIMessageId =
                1e6 * Math.floor((Math.random() * r.Cg) / 1e6)),
              (0, c.makeObservable)(this);
          }
          Init() {
            return (0, i.sH)(this, void 0, void 0, function* () {
              var e;
              try {
                this.m_bSteamWebsocketConnected =
                  null !==
                    (e =
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.VRPathProperties.GetBoolPathProperty(d.r4)) &&
                  void 0 !== e &&
                  e;
              } catch (e) {
                this.Log.Debug(e);
              }
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRPathProperties.RegisterForBoolPathPropertyChangedEvents(
                  d.r4,
                  (e) => {
                    (this.m_bSteamWebsocketConnected = e),
                      this.m_Steam_Client.NotifyConnectionStateChanged(e);
                  },
                ),
                (0, c.autorun)(() =>
                  this.m_Steam_Client.NotifyConnectionStateChanged(
                    this.IsConnected(),
                  ),
                ),
                yield this.m_mailbox.Init("vrgamepadui_messages"),
                this.m_mailbox.RegisterHandler("vrgamepadui_message", (e) => {
                  const t = (0, r.D7)(e.header);
                  t &&
                    ((0, r.hC)(t)
                      ? this.m_SteamVR_Provider.HandleVRGamepadUIMessageRequest(
                          t,
                          e.payload,
                        )
                      : (0, r.fb)(t)
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
                this.m_unNextVRGamepadUIMessageId % (r.Cg - 1)),
              this.m_unNextVRGamepadUIMessageId++
            );
          }
          SendVRGamepadUIMessage(e, t) {
            let n, i;
            try {
              n = a.DX.fromObject(e).serializeBase64String();
            } catch (e) {
              return r.Y7.HeaderSerializationFailure;
            }
            try {
              i = t.serializeBase64String();
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
                    payload: i,
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
            return this.m_bSteamWebsocketConnected && this.m_mailbox.connected;
          }
        }
        (0, i.Cg)(
          [c.observable],
          m.prototype,
          "m_bSteamWebsocketConnected",
          void 0,
        );
        const p = new m();
        window.VRGamepadUIMessages = p;
        const h = () => p.Init(),
          v = p;
      },
    },
    n = {};
  function i(e) {
    var o = n[e];
    if (void 0 !== o) return o.exports;
    var r = (n[e] = { exports: {} });
    return t[e].call(r.exports, r, r.exports, i), r.exports;
  }
  (i.m = t),
    (e = []),
    (i.O = (t, n, o, r) => {
      if (!n) {
        var a = 1 / 0;
        for (c = 0; c < e.length; c++) {
          for (var [n, o, r] = e[c], s = !0, l = 0; l < n.length; l++)
            (!1 & r || a >= r) && Object.keys(i.O).every((e) => i.O[e](n[l]))
              ? n.splice(l--, 1)
              : ((s = !1), r < a && (a = r));
          if (s) {
            e.splice(c--, 1);
            var d = o();
            void 0 !== d && (t = d);
          }
        }
        return t;
      }
      r = r || 0;
      for (var c = e.length; c > 0 && e[c - 1][2] > r; c--) e[c] = e[c - 1];
      e[c] = [n, o, r];
    }),
    (i.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return i.d(t, { a: t }), t;
    }),
    (i.d = (e, t) => {
      for (var n in t)
        i.o(t, n) &&
          !i.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (i.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e = { 378: 0, 170: 0, 797: 0, 527: 0, 500: 0, 17: 0 };
      i.O.j = (t) => 0 === e[t];
      var t = (t, n) => {
          var o,
            r,
            [a, s, l] = n,
            d = 0;
          if (a.some((t) => 0 !== e[t])) {
            for (o in s) i.o(s, o) && (i.m[o] = s[o]);
            if (l) var c = l(i);
          }
          for (t && t(n); d < a.length; d++)
            (r = a[d]), i.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
          return i.O(c);
        },
        n = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var o = i.O(
    void 0,
    [967, 991, 267, 305, 527, 452, 537, 500, 554, 458, 17],
    () => i(5345),
  );
  o = i.O(o);
})(); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/systemui.js.map
