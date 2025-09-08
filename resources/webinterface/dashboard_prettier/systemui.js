/*! For license information please see systemui.js.LICENSE.txt */
(() => {
  var e,
    t = {
      1569: (e, t, i) => {
        "use strict";
        i.d(t, {
          A4: () => R.A,
          Bl: () => b.Bl,
          CH: () => k.C,
          Co: () => x,
          Dd: () => l.D,
          Fs: () => r.Fs,
          Fx: () => r.Fx,
          GC: () => D.GC,
          Ic: () => b.Ic,
          JR: () => r.JR,
          Kf: () => D.Kf,
          Kg: () => D.Kg,
          LL: () => D.LL,
          LY: () => r.LY,
          M9: () => r.M9,
          Nv: () => n.N,
          OK: () => u.OK,
          Op: () => D.Op,
          Oq: () => r.Oq,
          Pd: () => r.Pd,
          Pw: () => D.Pw,
          QZ: () => D.QZ,
          Qu: () => D.Qu,
          Ri: () => w.R,
          UU: () => r.UU,
          Uk: () => E.Uk,
          VW: () => s.V,
          Vv: () => b.Vv,
          XX: () => D.XX,
          Y9: () => a.Y,
          Z9: () => D.Z9,
          ZP: () => D.ZP,
          Zj: () => r.Zj,
          a0: () => D.a0,
          aB: () => r.aB,
          at: () => y.a,
          bt: () => v.b,
          dq: () => r.dq,
          eK: () => M.e,
          eQ: () => r.eQ,
          gO: () => h.g,
          gQ: () => m.g,
          hz: () => o.h,
          iC: () => S.i,
          iN: () => u.iN,
          jL: () => _.j,
          jm: () => f.j,
          kH: () => T.k,
          l0: () => D.l0,
          lx: () => D.lx,
          mT: () => r.mT,
          n0: () => p.n,
          q9: () => r.q9,
          qA: () => D.qA,
          qC: () => D.qC,
          qI: () => u.qI,
          qR: () => D.qR,
          rN: () => r.rN,
          sH: () => E.sH,
          sO: () => C.s,
          s_: () => b.s_,
          sl: () => d.s,
          tS: () => r.tS,
          ui: () => r.ui,
          vS: () => E.vS,
          wU: () => D.wU,
          wx: () => c.w,
          x1: () => g.x,
          xY: () => D.xY,
          xj: () => m.x,
          zA: () => D.zA,
          zq: () => D.zq,
        });
        var n = i(4671),
          r = i(4727),
          o = i(7500),
          a = i(2071),
          s = i(6626),
          l = i(751),
          d = i(8116),
          c = i(390),
          h = i(8257),
          u = i(233),
          p = (i(7313), i(6765)),
          m = (i(491), i(171), i(8811)),
          v = i(5157),
          g = i(5486),
          _ = i(5829),
          y = i(7973),
          b = i(2214),
          S = (i(5627), i(3841)),
          f = i(2467),
          k = i(7996),
          R = i(1364),
          M = i(5146),
          C = i(163),
          T = i(2109),
          w = i(684),
          D = i(5867),
          E = i(7074);
        const x = VRHTML;
      },
      1364: (e, t, i) => {
        "use strict";
        i.d(t, { A: () => o });
        var n = i(7294),
          r = i(7313);
        class o extends r.Mo {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return n.createElement(
              "vsg-callout-transform",
              { offset: (0, r.Kg)(this.props.vOffset) },
              this.props.children,
            );
          }
        }
      },
      7996: (e, t, i) => {
        "use strict";
        i.d(t, { C: () => a });
        var n = i(7294),
          r = i(7074),
          o = i(390);
        class a extends n.Component {
          constructor(e) {
            super(e);
            let t = {};
            if (VRHTML)
              try {
                let e = VRHTML.VRProperties.GetStringProperty(
                  this.props.sDevicePath,
                  r.Uk.RenderModelName_String,
                );
                if (e) {
                  let i =
                    VRHTML.VRRenderModelsInternal.FindComponentForInputSource(
                      e,
                      this.props.sInputPath,
                    );
                  if (i) {
                    let n =
                      VRHTML.VRRenderModels.GetComponentStateForDevicePath(
                        e,
                        i,
                        this.props.sDevicePath,
                      );
                    n && (t.xfTransform = n.xfTrackingToComponentLocal);
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
            return n.createElement(
              o.w,
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
      2071: (e, t, i) => {
        "use strict";
        i.d(t, { Y: () => d });
        var n = i(655),
          r = i(7294),
          o = i(7313),
          a = i(7056),
          s = i(233),
          l = i(8116);
        class d extends o.Mo {
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
            var i;
            const n = this.createSgNode(t);
            return (
              (n.properties.tab_name =
                null !== (i = this.props.tabName) && void 0 !== i ? i : ""),
              (n.properties.mountable_id = (0, s.Hb)(
                this.m_sMountableUnqualifiedID,
              )),
              (n.properties.icon_uri = this.props.iconUri),
              (n.properties.icon_overlay_key = this.props.iconOverlayKey),
              (n.properties.summon_overlay_key = this.props.summonOverlayKey),
              [e, n]
            );
          }
          internalRender() {
            return r.createElement(
              "vsg-node",
              { id: this.props.id },
              r.createElement(
                l.C,
                { id: this.m_sMountableUnqualifiedID },
                this.props.children,
              ),
            );
          }
        }
        (0, n.gn)([a.ZP], d.prototype, "buildNode", null);
      },
      5146: (e, t, i) => {
        "use strict";
        i.d(t, { e: () => a });
        var n = i(655),
          r = i(7313),
          o = i(7056);
        class a extends r.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "dashboardtransform";
          }
          buildNode(e, t) {
            var i, n;
            const r = this.createSgNode(t);
            return (
              (r.properties.continuous_relatch =
                null !== (i = this.props.bContinuousRelatch) &&
                void 0 !== i &&
                i),
              (r.properties.free_dashboard_transform =
                null !== (n = this.props.bFreeDashboardTransform) &&
                void 0 !== n &&
                n),
              [e, r]
            );
          }
        }
        (0, n.gn)([o.ZP], a.prototype, "buildNode", null);
      },
      3841: (e, t, i) => {
        "use strict";
        i.d(t, { i: () => a });
        var n,
          r = i(7294),
          o = i(7313);
        !(function (e) {
          (e[(e.LockedToParent = 0)] = "LockedToParent"),
            (e[(e.LockedToWorld = 1)] = "LockedToWorld");
        })(n || (n = {}));
        class a extends o.Mo {
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
              i = this.props.ease_out_angle_threshold
                ? (this.props.ease_out_angle_threshold * Math.PI) / 180
                : null,
              n = this.props.min_angular_velocity
                ? (this.props.min_angular_velocity * Math.PI) / 180
                : null,
              o = this.props.max_angular_velocity
                ? (this.props.max_angular_velocity * Math.PI) / 180
                : null;
            return r.createElement(
              "vsg-elastic-head-transform",
              {
                "start-angle-threshold": e,
                "stop-angle-threshold": t,
                "ease-in-time": this.props.ease_in_time,
                "ease-in-power": this.props.ease_in_power,
                "ease-out-angle-threshold": i,
                "ease-out-power": this.props.ease_out_power,
                "min-angular-velocity": n,
                "max-angular-velocity": o,
                "lock-to-horizon": this.props.lock_to_horizon,
                "translation-behavior": this.props.translation_behavior,
              },
              this.props.children,
            );
          }
        }
      },
      163: (e, t, i) => {
        "use strict";
        i.d(t, { s: () => o });
        var n = i(7294),
          r = i(7313);
        class o extends r.Mo {
          constructor(e) {
            super(e);
          }
          internalRender() {
            let e = (0, r.Kg)(this.props.xfCurrent.translation),
              t = (0, r.xs)(this.props.xfCurrent.rotation),
              i = (0, r.Kg)(this.props.xfCurrent.scale);
            return n.createElement(
              "vsg-grab-transform",
              {
                "parent-path": this.props.sParentPath,
                translation: e,
                rotation: t,
                scale: i,
              },
              this.props.children,
            );
          }
        }
      },
      2467: (e, t, i) => {
        "use strict";
        i.d(t, { j: () => o });
        var n = i(7294),
          r = i(7313);
        class o extends r.Mo {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return n.createElement(
              "vsg-head-facing-transform",
              null,
              this.props.children,
            );
          }
        }
      },
      5486: (e, t, i) => {
        "use strict";
        i.d(t, { x: () => o });
        var n = i(7294),
          r = i(7313);
        class o extends r.Mo {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return n.createElement("vsg-line", {
              "target-id": this.props.target_id,
              thickness: this.props.thickness,
              "start-buffer": this.props.start_buffer,
              "end-buffer": this.props.end_buffer,
            });
          }
        }
      },
      5627: (e, t, i) => {
        "use strict";
        i(7294), i(7313);
      },
      5157: (e, t, i) => {
        "use strict";
        i.d(t, { b: () => a });
        var n = i(655),
          r = i(7313),
          o = i(7056);
        class a extends r.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "ltcquad";
          }
          buildNode(e, t) {
            const i = this.createSgNode(t);
            if (
              ((i.properties.width = this.props.width),
              (i.properties.height = this.props.height),
              (i.properties["near-z"] = this.props["near-z"]),
              (i.properties["far-z"] = this.props["far-z"]),
              (i.properties.debug = this.props.debug),
              this.props.diffuse)
            ) {
              let e = this.props.diffuse;
              (i.properties["diffuse-resolution"] = e.resolution),
                (i.properties["diffuse-size"] = e.size);
            }
            if (this.props.specular) {
              let e = this.props.specular;
              if ("string" == typeof e.color) i.properties.color = e.color;
              else {
                let t = (0, r.kh)(e.color, { r: 0, g: 0, b: 0 });
                i.properties.color = [t.r, t.g, t.b];
              }
            }
            return [e, i];
          }
        }
        (0, n.gn)([o.ZP], a.prototype, "buildNode", null);
      },
      2109: (e, t, i) => {
        "use strict";
        i.d(t, { k: () => o });
        var n = i(7294),
          r = i(7313);
        class o extends r.Mo {
          constructor(e) {
            super(e);
          }
          internalRender() {
            let e = (0, r.Kg)(this.props.xfCurrent.translation),
              t = (0, r.xs)(this.props.xfCurrent.rotation),
              i = (0, r.Kg)(this.props.xfCurrent.scale);
            return n.createElement(
              "vsg-manipulation-transform",
              {
                "is-moving": this.props.bIsMoving,
                "parent-path": this.props.sParentPath,
                translation: e,
                rotation: t,
                scale: i,
              },
              this.props.children,
            );
          }
        }
      },
      8116: (e, t, i) => {
        "use strict";
        i.d(t, { C: () => s, s: () => l });
        var n = i(655),
          r = i(7313),
          o = i(7056),
          a = i(233);
        class s extends r.Mo {
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
        (0, n.gn)([o.ZP], s.prototype, "buildNode", null);
        class l extends r.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "mountedscenegraph";
          }
          buildNode(e, t) {
            const i = this.createSgNode(t);
            return (
              (i.properties.mountable_id = (0, a.Hb)(this.props.mountedId)),
              this.props.fDashboardScale &&
                (i.properties.dashboard_scale = this.props.fDashboardScale),
              [e, i]
            );
          }
        }
        (0, n.gn)([o.ZP], l.prototype, "buildNode", null);
      },
      751: (e, t, i) => {
        "use strict";
        i.d(t, { D: () => a });
        var n = i(655),
          r = i(7313),
          o = i(7056);
        class a extends r.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "opacity";
          }
          buildNode(e, t) {
            const i = this.createSgNode(t);
            return (i.properties.opacity = this.props.value), [e, i];
          }
        }
        (0, n.gn)([o.ZP], a.prototype, "buildNode", null);
      },
      2214: (e, t, i) => {
        "use strict";
        i.d(t, {
          Bl: () => a,
          Ic: () => n,
          Lb: () => m,
          Vv: () => r,
          s_: () => v,
        });
        var n,
          r,
          o,
          a,
          s = i(655),
          l = i(7294),
          d = i(7313),
          c = i(6765),
          h = i(7056),
          u = i(233);
        function p(e) {
          if (e) return [e.u, e.v];
        }
        function m(e) {
          switch (e) {
            case n.TopLeft:
              return { x: -1, y: 1 };
            case n.TopCenter:
              return { x: 0, y: 1 };
            case n.TopRight:
              return { x: 1, y: 1 };
            case n.CenterLeft:
              return { x: -1, y: 0 };
            case n.Center:
              return { x: 0, y: 0 };
            case n.CenterRight:
              return { x: 1, y: 0 };
            case n.BottomLeft:
              return { x: -1, y: -1 };
            case n.BottomCenter:
              return { x: 0, y: -1 };
            case n.BottomRight:
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
        })(n || (n = {})),
          (function (e) {
            (e[(e.Auto = 0)] = "Auto"), (e[(e.SingleTap = 1)] = "SingleTap");
          })(r || (r = {})),
          (function (e) {
            (e[(e.Mono = 0)] = "Mono"),
              (e[(e.Parallel = 1)] = "Parallel"),
              (e[(e.Crossed = 2)] = "Crossed"),
              (e[(e.Panorama = 3)] = "Panorama"),
              (e[(e.StackedPanorama = 4)] = "StackedPanorama");
          })(o || (o = {})),
          (function (e) {
            (e[(e.Visible = 0)] = "Visible"),
              (e[(e.SkipInSceneGraph = 1)] = "SkipInSceneGraph"),
              (e[(e.Hidden = 2)] = "Hidden");
          })(a || (a = {}));
        class v extends d.Mo {
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
              void 0 !== this.props.rendermodel_component_device_index ||
              void 0 !== this.props.rendermodel_component_name;
            if (
              t &&
              (void 0 === this.props.rendermodel_component_device_index ||
                void 0 === this.props.rendermodel_component_name)
            )
              throw new Error(
                "Panel requires both rendermodel_component_device_index and rendermodel_component_name to be a rendermodel texture.",
              );
            if (
              void 0 === this.props.width &&
              void 0 === this.props.height &&
              void 0 === this.props.target_dpi_panel_id &&
              !t
            )
              throw new Error(
                "Panel requires either an explicit width, an explicit height, both an explicit width and height, a target_panel_dpi, or be a rendermodel panel.",
              );
            if (
              (void 0 !== this.props.width || void 0 !== this.props.height) &&
              void 0 !== this.props.target_dpi_panel_id
            )
              throw new Error(
                "Panel cannot have both an explicit width/height and target_panel_dpi.",
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
            v.s_bPanelsAreDirty = !0;
          }
          componentDidMount() {
            super.componentDidMount(),
              (this.m_resizeObserver = new ResizeObserver(
                this.onResizeObserved,
              )),
              this.m_resizeObserver.observe(this.getCurrentRootElement()),
              (this.m_nEmbeddedIndex = c.n.Current().addEmbeddedPanelUVs(this)),
              (v.s_bPanelsAreDirty = !0),
              this.getCurrentRootElement().addEventListener(
                "mousedown",
                this.onPanelMouseDown,
              ),
              this.forceUpdate();
          }
          onResizeObserved(e, t) {
            c.n.Current().forceLayoutUpdate();
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
              (v.s_bPanelsAreDirty = !0),
              c.n.Current().removeEmbeddedPanelUVs(this),
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
          createOverdragBlockingElement(e, t, i, n) {
            let r = document.createElement("div");
            (r.style.position = "absolute"),
              (r.style.top = t + "px"),
              (r.style.left = e + "px"),
              (r.style.width = i + "px"),
              (r.style.height = n + "px"),
              (r.style.zIndex = "90019001"),
              this.m_overdragBlockingElements.push(r),
              document.body.appendChild(r);
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
            var i, n, r, o, s;
            if (this.visibility != a.Visible) return [e, null];
            let l = Object.assign({}, e),
              c = this.createSgNode(t),
              h = { x: 0, y: 0 };
            h =
              "object" == typeof this.props.origin
                ? (0, d.QE)(this.props.origin, { x: 0, y: 0 })
                : m(this.props.origin);
            const v = this.props.overlay_key,
              g = (0, u.Gv)();
            return (
              v && v.length > 0
                ? (c.properties.key = v)
                : g
                  ? (c.properties.key = g)
                  : (c.properties.overlay_handle = (0, u.Mb)()),
              (c.properties.uv_min =
                null !== (i = p(this.m_UVsMin)) && void 0 !== i ? i : void 0),
              (c.properties.uv_max =
                null !== (n = p(this.m_UVsMax)) && void 0 !== n ? n : void 0),
              (c.properties.width =
                null !== (r = this.props.width) && void 0 !== r ? r : void 0),
              (c.properties.height =
                null !== (o = this.props.height) && void 0 !== o ? o : void 0),
              (c.properties["min-width"] =
                null !== (s = this.props.min_width) && void 0 !== s
                  ? s
                  : void 0),
              (c.properties["target-width-anchor-id"] = (0, u.Hb)(
                this.props.target_width_anchor_id,
              )),
              (c.properties["target-dpi-panel-id"] = (0, u.Hb)(
                this.props.target_dpi_panel_id,
              )),
              (c.properties["target-dpi-multiplier"] =
                this.props.target_dpi_multiplier),
              (c.properties["subview-parent-panel-id"] = (0, u.Hb)(
                this.props.subview_parent_panel_id,
              )),
              (c.properties.curvature = this.props.curvature),
              (c.properties["curvature-origin-id"] = (0, u.Hb)(
                this.props.curvature_origin_id,
              )),
              (c.properties.interactive = this.props.interactive),
              (c.properties.scrollable = this.props.scrollable),
              (c.properties.undocked = this.props.undocked),
              (c.properties.modal = this.props.modal),
              (c.properties["hide-laser-when-clicking"] =
                this.props.hide_lasermouse_when_clicking),
              (c.properties["embedded-uv-index"] = this.m_nEmbeddedIndex),
              (c.properties.origin = (0, d.D1)(h)),
              (c.properties.debug_name = this.props.debug_name),
              (c.properties.sampler = this.props.sampler),
              (c.properties.reflect = this.props.reflect),
              (c.properties.stereoscopy = this.props.stereoscopy),
              (c.properties.rendermodel_component_device_index =
                this.props.rendermodel_component_device_index),
              (c.properties.rendermodel_component_name =
                this.props.rendermodel_component_name),
              (c.properties["texture-id"] = (0, u.Hb)(this.props.texture_id)),
              (c.properties["sort-order"] = this.props.sort_order),
              (c.properties["sort-depth-bias"] = this.props.sort_depth_bias),
              (l.currentPanel = this),
              [l, c]
            );
          }
          scaleLocalUVToGlobal(e) {
            const t = this.m_UVsMax.u - this.m_UVsMin.u,
              i = this.m_UVsMax.v - this.m_UVsMin.v;
            return {
              u: this.m_UVsMin.u + t * e.u,
              v: this.m_UVsMin.v + i * e.v,
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
          internalRender() {
            return l.createElement(
              "vsg-node",
              {
                style: { display: this.visibility == a.Hidden ? "none" : null },
              },
              this.props.children,
            );
          }
        }
        (v.s_bPanelsAreDirty = !1),
          (0, s.gn)([h.ZP], v.prototype, "onResizeObserved", null),
          (0, s.gn)([h.ZP], v.prototype, "onPanelMouseDown", null),
          (0, s.gn)([h.ZP], v.prototype, "onWindowMouseUp", null),
          (0, s.gn)([h.ZP], v.prototype, "buildNode", null);
      },
      7973: (e, t, i) => {
        "use strict";
        i.d(t, { a: () => s });
        var n = i(655),
          r = i(7313),
          o = i(2214),
          a = i(7056);
        class s extends r.Mo {
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
            if (!e.currentPanel)
              return [
                Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                null,
              ];
            let i = null;
            "object" == typeof this.props.location
              ? (i = (0, r.QE)(this.props.location, { x: 0, y: 0 }))
              : "number" == typeof this.props.location &&
                (i = (0, o.Lb)(this.props.location));
            let n = this.createSgNode(t);
            if (this.props.latched && null !== this.m_latchedPosition)
              (n.properties["anchor-u"] = this.m_latchedPosition.u),
                (n.properties["anchor-v"] = this.m_latchedPosition.v);
            else if (i) {
              const t = { u: 0.5 * i.x + 0.5, v: -0.5 * i.y + 0.5 },
                r = e.currentPanel.props.overlay_key
                  ? t
                  : e.currentPanel.scaleLocalUVToGlobal(t);
              (n.properties["anchor-u"] = r.u),
                (n.properties["anchor-v"] = r.v);
            } else {
              const i = t.ownerDocument,
                r = t.getBoundingClientRect(),
                o = r.left + r.width / 2,
                a = r.top + r.height / 2,
                s = e.currentPanel.m_Rect;
              if (o < s.x || o > s.x + s.width || a < s.y || a > s.y + s.height)
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              const l = i.defaultView.innerWidth,
                d = i.defaultView.innerHeight;
              if (!(d > 0 && l > 0))
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              (n.properties["anchor-u"] = o / l),
                (n.properties["anchor-v"] = a / d);
            }
            return (
              (this.m_latchedPosition = {
                u: n.properties["anchor-u"],
                v: n.properties["anchor-v"],
              }),
              [e, n]
            );
          }
        }
        (0, n.gn)([a.ZP], s.prototype, "buildNode", null);
      },
      5829: (e, t, i) => {
        "use strict";
        i.d(t, { j: () => o });
        var n = i(7294),
          r = i(7313);
        class o extends r.Mo {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return n.createElement(
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
      8811: (e, t, i) => {
        "use strict";
        i.d(t, { g: () => l, x: () => n });
        var n,
          r = i(655),
          o = i(7313),
          a = i(7056),
          s = i(233);
        !(function (e) {
          (e[(e.None = 0)] = "None"), (e[(e.Backface = 1)] = "Backface");
        })(n || (n = {}));
        class l extends o.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "rendermodel";
          }
          buildNode(e, t) {
            const i = this.createSgNode(t);
            if (
              ((i.properties.source = this.props.source),
              (i.properties["texture-id"] = (0, s.Hb)(
                this.props["texture-id"],
              )),
              (i.properties["input-path"] = this.props["input-path"]),
              this.props.fresnel)
            ) {
              let e = this.props.fresnel;
              if ("string" == typeof e.color) i.properties.color = e.color;
              else {
                let t = (0, o.kh)(e.color, { r: 0, g: 0, b: 0 });
                i.properties.color = [t.r, t.g, t.b];
              }
              (i.properties.opacity = e.opacity ? e.opacity : 1),
                (i.properties.strength = e.strength ? e.strength : 1);
            }
            return (
              (i.properties.wireframe = this.props.wireframe),
              (i.properties.solid = this.props.solid),
              (i.properties.culling = this.props.culling),
              (i.properties.stencil_mask = this.props.stencil_mask),
              (i.properties["no-depth-write"] = this.props["no-depth-write"]),
              (i.properties["no-depth-test"] = this.props["no-depth-test"]),
              [e, i]
            );
          }
        }
        (0, r.gn)([a.ZP], l.prototype, "buildNode", null);
      },
      6765: (e, t, i) => {
        "use strict";
        i.d(t, { n: () => d });
        var n,
          r = i(655),
          o = i(7294),
          a = i(2214),
          s = i(7056),
          l = i(233);
        !(function (e) {
          (e[(e.Canvas = 0)] = "Canvas"), (e[(e.Image = 1)] = "Image");
        })(n || (n = {}));
        class d extends o.Component {
          constructor(e) {
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
                eRenderMode: VRHTML.VRUtil.BSupportsCEFCanvas()
                  ? n.Canvas
                  : n.Image,
              }),
              (this.m_DomRef = o.createRef()),
              (this.m_scalingDomRef = o.createRef()),
              (this.m_CanvasRef = o.createRef()),
              (this.m_EmbeddedDataImgRef = o.createRef()),
              (this.m_DebugPointerRef = o.createRef());
          }
          static get IsSceneGraphApp() {
            return null !== d.Current();
          }
          static Current() {
            return d.s_Current;
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
            (a.s_.s_bPanelsAreDirty = !0),
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
            let i = Math.max(
              0,
              Math.floor((this.m_nEmbeddedDataWidth - 1) / 3),
            );
            for (let e = 0; e < i; e++)
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
                (0, l.mK)(
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
            const e = this.state.eRenderMode == n.Image,
              t = this.state.eRenderMode == n.Canvas;
            let i = [];
            return (
              this.state.bShowDebugPointer && i.push("ShowDebugPointer"),
              o.createElement(
                "vsg-app",
                {
                  class: i.join(" "),
                  ref: this.m_DomRef,
                  "sg-forced-update-number": this.state.nForcedUpdateNumber,
                },
                o.createElement("div", {
                  className: "DebugPointer",
                  ref: this.m_DebugPointerRef,
                }),
                e &&
                  o.createElement("img", {
                    ref: this.m_EmbeddedDataImgRef,
                    className: "EmbeddedData",
                    height: d.k_EmbeddedDataRows,
                  }),
                t &&
                  o.createElement("canvas", {
                    ref: this.m_CanvasRef,
                    className: "EmbeddedData",
                    height: d.k_EmbeddedDataRows,
                  }),
                o.createElement(
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
            this.state.eRenderMode == n.Image
              ? ((this.m_EmbeddedDataImgRef.current.width =
                  this.m_nEmbeddedDataWidth),
                this.m_EmbeddedDataImgRGBBuffer ||
                  (this.m_EmbeddedDataImgRGBBuffer =
                    VRHTML.VRUtil.CreateEmbeddedRGBScanline(
                      this.m_nEmbeddedDataWidth,
                      1,
                      4,
                    )))
              : this.state.eRenderMode == n.Canvas &&
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
              i = t.width / this.m_fCurrentScale,
              n = t.height / this.m_fCurrentScale,
              r = { x: e.innerWidth / i, y: e.innerHeight / n },
              o = Math.min(r.x, r.y, 1);
            o != this.m_fCurrentScale &&
              (1 != o
                ? this.m_scalingDomRef.current.setAttribute(
                    "style",
                    "transform: scale(" + o + "); transform-origin: top left",
                  )
                : this.m_scalingDomRef.current.removeAttribute("style"),
              (this.m_fCurrentScale = o),
              (a.s_.s_bPanelsAreDirty = !0)),
              a.s_.s_bPanelsAreDirty &&
                (this.m_mapPanels.forEach((e) => e.updateLayoutValues()),
                (0, l.k7)(),
                (a.s_.s_bPanelsAreDirty = !1),
                this.updateEmbeddedData());
          }
          updateEmbeddedData() {
            if (this.m_EmbeddedDataImgRef || this.m_CanvasRef)
              if (
                (this.setPixel(
                  0,
                  "V".charCodeAt(0),
                  "S".charCodeAt(0),
                  "G".charCodeAt(0),
                ),
                this.m_rEmbeddedIndicesToClear.forEach((e) => {
                  let t = 1 + 3 * e;
                  for (let e = 0; e < 3; e++) this.setPixel(t + e, 0, 0, 0, 0);
                }),
                (this.m_rEmbeddedIndicesToClear = []),
                this.m_mapPanels.forEach((e, t) => {
                  let i = e.m_Rect.x,
                    n = e.m_Rect.x + e.m_Rect.width,
                    r = e.m_Rect.y,
                    o = e.m_Rect.y + e.m_Rect.height,
                    a = 1 + 3 * e.getEmbeddedIndex();
                  if (e.isExternal() || i >= n || r >= o)
                    for (let e = 0; e < 3; e++)
                      this.setPixel(a + 1, 0, 0, 0, 0);
                  else
                    this.setPixel(a, (65280 & i) >> 8, 255 & i, 0),
                      this.setPixel(a + 1, (65280 & n) >> 8, 255 & n, 255 & r),
                      this.setPixel(
                        a + 2,
                        (65280 & o) >> 8,
                        255 & o,
                        (65280 & r) >> 8,
                      );
                }),
                this.m_EmbeddedDataImgRef && this.state.eRenderMode == n.Image)
              ) {
                const e = VRHTML.VRUtil.GetEmbeddedScanlineAsURIImage(
                  this.m_nEmbeddedDataWidth,
                  1,
                  4,
                );
                this.m_EmbeddedDataImgRef.current.src = e;
              } else if (
                this.m_CanvasRef &&
                this.state.eRenderMode == n.Canvas
              ) {
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
          setPixel(e, t, i, r, o = 255) {
            if (
              this.m_EmbeddedDataImgRGBBuffer &&
              this.state.eRenderMode == n.Image
            ) {
              const n = new DataView(this.m_EmbeddedDataImgRGBBuffer);
              n.setUint8(4 * e + 0, t),
                n.setUint8(4 * e + 1, i),
                n.setUint8(4 * e + 2, r),
                n.setUint8(4 * e + 3, o);
            } else
              this.m_Pixels &&
                this.state.eRenderMode == n.Canvas &&
                ((this.m_Pixels.data[4 * e + 0] = t),
                (this.m_Pixels.data[4 * e + 1] = i),
                (this.m_Pixels.data[4 * e + 2] = r),
                (this.m_Pixels.data[4 * e + 3] = o),
                (-1 === this.m_nDirtyXMin || e < this.m_nDirtyXMin) &&
                  (this.m_nDirtyXMin = e),
                (-1 === this.m_nDirtyXMax || e > this.m_nDirtyXMax) &&
                  (this.m_nDirtyXMax = e));
          }
        }
        (d.s_Current = null),
          (d.k_EmbeddedDataRows = 1),
          (0, r.gn)([s.ak], d.prototype, "toggleDebugPointer", null),
          (0, r.gn)([s.ak], d.prototype, "onMouseMove", null),
          (0, r.gn)([s.ak], d.prototype, "forceLayoutUpdate", null),
          (0, r.gn)([s.ak], d.prototype, "onMutation", null);
      },
      7313: (e, t, i) => {
        "use strict";
        i.d(t, {
          D1: () => l,
          Kg: () => d,
          Mo: () => h,
          QE: () => o,
          Uq: () => a,
          kh: () => s,
          xs: () => c,
        });
        var n = i(7294),
          r = i(233);
        function o(e, t) {
          return e ? { x: e.x ? e.x : t.x, y: e.y ? e.y : t.y } : t;
        }
        function a(e, t) {
          return e
            ? { x: e.x ? e.x : t.x, y: e.y ? e.y : t.y, z: e.z ? e.z : t.z }
            : t;
        }
        function s(e, t) {
          return e
            ? { r: e.r ? e.r : t.r, g: e.g ? e.g : t.g, b: e.b ? e.b : t.b }
            : t;
        }
        function l(e) {
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
        function c(e) {
          if (e) return e.w + " " + e.x + " " + e.y + " " + e.z;
        }
        class h extends n.Component {
          constructor(e) {
            super(e),
              (this.m_domRef = n.createRef()),
              (this.m_buildNodeOverride = null),
              (this.m_SGID = h.s_NextSGID),
              (h.s_NextSGID = (h.s_NextSGID + 1) % 4294967296);
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
            return (0, r.ac)(this.getNodeType(), e);
          }
          getCurrentRootElement() {
            return this.m_domRef.current;
          }
          componentDidMount() {
            this.m_buildNodeOverride &&
              (this.m_domRef.current.buildNode = this.m_buildNodeOverride),
              (0, r.k7)();
          }
          componentDidUpdate() {
            (0, r.k7)();
          }
          componentWillUnmount() {
            (0, r.sX)(this.m_SGID),
              this.m_domRef.current &&
                this.m_buildNodeOverride &&
                delete this.m_domRef.current.buildNode;
          }
          render() {
            return n.cloneElement(this.internalRender(), {
              id: this.props.id,
              "vsg-type": this.getNodeType(),
              sgid: this.m_SGID,
              ref: this.m_domRef,
            });
          }
          internalRender() {
            return this.m_buildNodeOverride
              ? n.createElement("vsg-node", null, this.props.children)
              : null;
          }
        }
        h.s_NextSGID = 1;
      },
      233: (e, t, i) => {
        "use strict";
        i.d(t, {
          Gv: () => C,
          Hb: () => M,
          Mb: () => u,
          OK: () => D,
          ac: () => h,
          iN: () => R,
          k7: () => E,
          mK: () => k,
          qI: () => w,
          sX: () => T,
        });
        var n = i(655),
          r = i(4671);
        function o(e, t) {
          let i = e.getAttribute(t);
          if (i && i.length > 0) {
            if ("undefined" == i) return;
            let e = [];
            for (let t of i.split(" ")) 0 != t.length && e.push(parseFloat(t));
            if (e.length > 0) return e;
          }
        }
        function a(e, t) {
          let i = e.getAttribute(t);
          if (i && i.length > 0) return parseFloat(i);
        }
        function s(e, t) {
          let i = e.getAttribute(t);
          if (i && i.length > 0) return parseInt(i);
        }
        function l(e, t) {
          let i = e.getAttribute(t);
          if (i && i.length > 0)
            return (
              "true" == i ||
              (i.length > 0 && 0 != parseInt(i) && !isNaN(parseInt(i)))
            );
        }
        function d(e, t) {
          let i = e.getAttribute(t);
          if (i && i.length > 0) return i;
        }
        function c(e, t) {
          return M(d(e, t));
        }
        function h(e, t) {
          let i = { type: e, properties: {} };
          return (
            t.id && (i.properties.id = M(t.id)),
            (i.properties.sgid = s(t, "sgid")),
            i
          );
        }
        function u() {
          return null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.VROverlay.ThisOverlayHandle();
        }
        function p(e, t) {
          let [i, n] = (function (e, t) {
              let i = t.buildNode;
              if (i) return i(e, t);
              let n = Object.assign({}, e),
                r = null;
              switch (t.nodeName.toUpperCase()) {
                case "VSG-TRANSFORM":
                  (r = h("transform", t)),
                    (r.properties.translation = o(t, "translation")),
                    (r.properties.rotation = o(t, "rotation")),
                    (r.properties.scale = o(t, "scale")),
                    (r.properties["curvature-pitch"] = a(t, "curvature-pitch")),
                    (r.properties["transform-path"] = d(t, "transform-path")),
                    (r.properties["parent-path"] = d(t, "parent-path")),
                    (r.properties["parent-origin"] = d(t, "parent-origin")),
                    (r.properties["parent-id"] = c(t, "parent-id"));
                  break;
                case "VSG-TRACKING-STATE-VISIBILITY":
                  (r = h("trackingstatevisibility", t)),
                    (r.properties["visible-0dof"] = l(t, "visible-0dof")),
                    (r.properties["visible-3dof"] = l(t, "visible-3dof")),
                    (r.properties["visible-6dof"] = l(t, "visible-6dof"));
                  break;
                case "VSG-ELASTIC-HEAD-TRANSFORM":
                  (r = h("elasticheadtransform", t)),
                    (r.properties["start-angle-threshold"] = a(
                      t,
                      "start-angle-threshold",
                    )),
                    (r.properties["stop-angle-threshold"] = a(
                      t,
                      "stop-angle-threshold",
                    )),
                    (r.properties["ease-in-time"] = a(t, "ease-in-time")),
                    (r.properties["ease-in-power"] = a(t, "ease-in-power")),
                    (r.properties["ease-out-angle-threshold"] = a(
                      t,
                      "ease-out-angle-threshold",
                    )),
                    (r.properties["ease-out-power"] = a(t, "ease-out-power")),
                    (r.properties["min-angular-velocity"] = a(
                      t,
                      "min-angular-velocity",
                    )),
                    (r.properties["max-angular-velocity"] = a(
                      t,
                      "max-angular-velocity",
                    )),
                    (r.properties["lock-to-horizon"] = l(t, "lock-to-horizon")),
                    (r.properties["translation-behavior"] = s(
                      t,
                      "translation-behavior",
                    ));
                  break;
                case "VSG-LINE":
                  (r = h("line", t)),
                    (r.properties["target-id"] = c(t, "target-id")),
                    (r.properties.thickness = a(t, "thickness")),
                    (r.properties["start-buffer"] = a(t, "start-buffer")),
                    (r.properties["end-buffer"] = a(t, "end-buffer"));
                  break;
                case "VSG-LINE-CONSTRAINED-TRANSFORM":
                  (r = h("line-constrained-transform", t)),
                    (r.properties["target-id"] = c(t, "target-id")),
                    (r.properties["source-id"] = c(t, "source-id")),
                    (r.properties["source-distance"] = a(t, "source-distance")),
                    (r.properties["target-limit"] = a(t, "target-limit"));
                  break;
                case "VSG-CALLOUT-TRANSFORM":
                  (r = h("callout-transform", t)),
                    (r.properties.offset = o(t, "offset"));
                  break;
                case "VSG-HEAD-FACING-TRANSFORM":
                  r = h("head-facing-transform", t);
                  break;
                case "VSG-PIN-TO-VIEW-TRANSFORM":
                  (r = h("pin-to-view-transform", t)),
                    (r.properties["offscreen-z-depth"] = a(
                      t,
                      "offscreen-z-depth",
                    )),
                    (r.properties["off-axis-limit"] = a(t, "off-axis-limit")),
                    (r.properties["transition-limit"] = a(
                      t,
                      "transition-limit",
                    ));
                  break;
                case "VSG-MANIPULATION-TRANSFORM":
                  (r = h("manipulation-transform", t)),
                    (r.properties["is-moving"] = l(t, "is-moving")),
                    (r.properties["parent-path"] = d(t, "parent-path")),
                    (r.properties.translation = o(t, "translation")),
                    (r.properties.rotation = o(t, "rotation")),
                    (r.properties.scale = o(t, "scale"));
                  break;
                case "VSG-GRAB-TRANSFORM":
                  (r = h("grab-transform", t)),
                    (r.properties["parent-path"] = d(t, "parent-path")),
                    (r.properties.translation = o(t, "translation")),
                    (r.properties.rotation = o(t, "rotation")),
                    (r.properties.scale = o(t, "scale"));
              }
              return [n, r];
            })(e, t),
            r = [];
          for (let e = 0; e < t.children.length; e++) {
            let n = t.children.item(e);
            if (n.children) {
              let e = p(i, n);
              e && (r = r.concat(e));
            }
          }
          return i.bShouldAbort
            ? null
            : n
              ? (r.length > 0 && (n.children = r), [n])
              : r.length > 0
                ? 1 == r.length
                  ? r
                  : [{ children: r }]
                : null;
        }
        let m,
          v,
          g,
          _,
          y = [],
          b = null,
          S = null,
          f = null;
        function k(e, t, i) {
          (m = e),
            (v = t),
            (g = i),
            console.log("Setting owning overlay key to " + e);
        }
        function R(e, t) {
          return e + "::" + t;
        }
        function M(e) {
          return e
            ? (function (e) {
                return e && e.includes("::");
              })(e)
              ? e
              : R(C(), e)
            : null;
        }
        function C() {
          var e;
          return null !==
            (e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VROverlay.ThisOverlayKey()) && void 0 !== e
            ? e
            : m;
        }
        function T(e) {
          y.push(e), E();
        }
        function w() {
          _ = !0;
        }
        function D(e) {
          var t, i;
          (i = e),
            (null == (t = f) || null == i
              ? t == i
              : t.color_mult == i.color_mult &&
                t.reflection_mult == i.reflection_mult &&
                t.roomview_mult.toString() == i.roomview_mult.toString() &&
                t.allow_skydome == i.allow_skydome) || ((f = e), E());
        }
        function E() {
          b ||
            (b = window.setTimeout(
              () =>
                (0, n.mG)(this, void 0, void 0, function* () {
                  let e = document.body;
                  v && (e = v);
                  let t = {
                    type: "root",
                    rootproperties: {
                      relatchDashboardTransform: _,
                      allowDismissOnClick: true,
                      sceneColorCorrection: f,
                    },
                    children: p({ currentPanel: null, bShouldAbort: !1 }, e),
                  };
                  S ||
                    (console.log("Initializing sg_mailbox"),
                    (S = new r.N()),
                    yield S.Init("sg_mailbox", g));
                  let i = {
                    type: "update_scene_graph",
                    owning_overlay_key: C(),
                    scene_graph: t,
                    retired_sgids: y,
                  };
                  S.SendMessage("vrcompositor_systemlayer", i),
                    (b = null),
                    (y = []),
                    (_ = !1);
                }),
              0,
            ));
        }
      },
      491: (e, t, i) => {
        "use strict";
        var n = i(655),
          r = i(7313),
          o = i(7056);
        class a extends r.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "texture";
          }
          buildNode(e, t) {
            const i = this.createSgNode(t);
            return (
              (i.properties.id = this.props.id),
              (i.properties.source = this.props.source),
              [e, i]
            );
          }
        }
        (0, n.gn)([o.ZP], a.prototype, "buildNode", null);
      },
      171: (e, t, i) => {
        "use strict";
        var n = i(655),
          r = i(7313),
          o = i(7056);
        class a extends r.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "tilefloor";
          }
          buildNode(e, t) {
            const i = this.createSgNode(t);
            if (
              ((i.properties["tile-size"] = this.props["tile-size"]),
              (i.properties["tile-gap"] = this.props["tile-gap"]),
              (i.properties["inner-radius"] = this.props["inner-radius"]),
              (i.properties["outer-radius"] = this.props["outer-radius"]),
              (i.properties["fade-distance"] = this.props["fade-distance"]),
              (i.properties["min-tile-scale-at-periphery"] =
                this.props["min-tile-scale-at-periphery"]),
              (i.properties.height = this.props.height),
              (i.properties.offset = [
                this.props.offset.x,
                this.props.offset.y,
              ]),
              "string" == typeof this.props.color)
            )
              i.properties.color = this.props.color;
            else if (this.props.color) {
              let e = (0, r.kh)(this.props.color, { r: 0, g: 0, b: 0 });
              i.properties.color = [e.r, e.g, e.b];
            }
            return (
              (i.properties["center-randomization"] =
                this.props["center-randomization"]),
              (i.properties["luma-randomization-min-gain"] =
                this.props["luma-randomization"]["min-gain"]),
              (i.properties["luma-randomization-max-gain"] =
                this.props["luma-randomization"]["max-gain"]),
              (i.properties["reflection-randomization-min-gain"] =
                this.props["reflection-randomization"]["min-gain"]),
              (i.properties["reflection-randomization-max-gain"] =
                this.props["reflection-randomization"]["max-gain"]),
              (i.properties["normal-randomization-degrees"] =
                this.props["normal-randomization-degrees"]),
              this.props.chevron &&
                ((i.properties["chevron-luma-scale"] =
                  this.props.chevron["luma-scale"]),
                (i.properties["chevron-reflection-scale"] =
                  this.props.chevron["reflection-scale"])),
              (i.properties["auto-subdivide"] = this.props["auto-subdivide"]),
              [e, i]
            );
          }
        }
        (0, n.gn)([o.ZP], a.prototype, "buildNode", null);
      },
      6626: (e, t, i) => {
        "use strict";
        i.d(t, { V: () => a });
        var n = i(655),
          r = i(7313),
          o = i(7056);
        class a extends r.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "tint";
          }
          buildNode(e, t) {
            const i = this.createSgNode(t);
            if (this.props.color)
              if ("string" == typeof this.props.color)
                i.properties.color = this.props.color;
              else {
                let e = (0, r.kh)(this.props.color, { r: 1, g: 1, b: 1 });
                i.properties.color = [e.r, e.g, e.b];
              }
            else i.properties.color = [1, 1, 1];
            return [e, i];
          }
        }
        (0, n.gn)([o.ZP], a.prototype, "buildNode", null);
      },
      8257: (e, t, i) => {
        "use strict";
        i.d(t, { g: () => o });
        var n = i(7294),
          r = i(7313);
        class o extends r.Mo {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return n.createElement(
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
      390: (e, t, i) => {
        "use strict";
        i.d(t, { w: () => s });
        var n,
          r = i(7294),
          o = i(7313),
          a = i(4727);
        !(function (e) {
          (e[(e.Seated = 0)] = "Seated"),
            (e[(e.Standing = 1)] = "Standing"),
            (e[(e.Raw = 2)] = "Raw");
        })(n || (n = {}));
        class s extends o.Mo {
          constructor(e) {
            if (
              (super(e),
              (void 0 === e.parent_path ? 0 : 1) +
                (void 0 === e.parent_origin ? 0 : 1) +
                (void 0 === e.parent_id ? 0 : 1) >
                1)
            )
              throw new Error(
                "Transform cannot have more than one parent_ property set.",
              );
          }
          internalRender() {
            let e, t, i;
            this.props.transform
              ? ((e = this.props.transform.translation),
                (t = this.props.transform.rotation),
                (i = this.props.transform.scale))
              : ((e = (0, o.Uq)(this.props.translation, { x: 0, y: 0, z: 0 })),
                (t = (0, a.UU)(
                  (0, a.mT)(
                    (0, o.Uq)(this.props.rotation, { x: 0, y: 0, z: 0 }),
                    Math.PI / 180,
                  ),
                )),
                (i =
                  "number" == typeof this.props.scale
                    ? {
                        x: this.props.scale,
                        y: this.props.scale,
                        z: this.props.scale,
                      }
                    : (0, o.Uq)(this.props.scale, { x: 1, y: 1, z: 1 })));
            let s = (0, o.Kg)(e),
              l = (0, o.xs)(t),
              d = (0, o.Kg)(i);
            return r.createElement(
              "vsg-transform",
              {
                translation: s,
                rotation: l,
                scale: d,
                "curvature-pitch": this.props.curvature_pitch,
                "transform-path": this.props.transform_path,
                "parent-path": this.props.parent_path,
                "parent-origin": n[this.props.parent_origin],
                "parent-id": this.props.parent_id,
              },
              this.props.children,
            );
          }
        }
      },
      684: (e, t, i) => {
        "use strict";
        i.d(t, { R: () => a });
        var n = i(655),
          r = i(7313),
          o = i(7056);
        class a extends r.Mo {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "videocapturequad";
          }
          buildNode(e, t) {
            const i = this.createSgNode(t);
            return (
              (i.properties.width = this.props.width),
              (i.properties.height = this.props.height),
              (i.properties["near-z"] = this.props["near-z"]),
              (i.properties["far-z"] = this.props["far-z"]),
              (i.properties.debug = this.props.debug),
              [e, i]
            );
          }
        }
        (0, n.gn)([o.ZP], a.prototype, "buildNode", null);
      },
      4727: (e, t, i) => {
        "use strict";
        function n() {
          return {
            translation: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
          };
        }
        function r(e, t) {
          return { x: e.x + t.x, y: e.y + t.y, z: e.z + t.z };
        }
        function o(e, t, i) {
          return {
            x: t.x + e * (i.x - t.x),
            y: t.y + e * (i.y - t.y),
            z: t.z + e * (i.z - t.z),
          };
        }
        function a(e, t) {
          return { x: e.x - t.x, y: e.y - t.y };
        }
        function s(e, t) {
          return { x: e.x - t.x, y: e.y - t.y, z: e.z - t.z };
        }
        function l(e, t) {
          return { x: e.x * t, y: e.y * t };
        }
        function d(e, t) {
          return { x: e.x * t, y: e.y * t, z: e.z * t };
        }
        function c(e) {
          return Math.sqrt(e.x * e.x + e.y * e.y);
        }
        function h(e) {
          return Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z);
        }
        function u(e) {
          if (void 0 === e) return;
          let t = 0.5 * e.x,
            i = 0.5 * e.y,
            n = 0.5 * e.z,
            r = Math.cos(t),
            o = Math.cos(i),
            a = Math.cos(n),
            s = Math.sin(t),
            l = Math.sin(i),
            d = Math.sin(n);
          return {
            w: r * o * a + s * l * d,
            x: s * o * a + r * l * d,
            y: r * l * a - s * o * d,
            z: r * o * d - s * l * a,
          };
        }
        function p(e) {
          let t = e[0][0] + e[1][1] + e[2][2];
          if (t > 0) {
            let i = 2 * Math.sqrt(t + 1);
            return {
              w: 0.25 * i,
              x: (e[1][2] - e[2][1]) / i,
              y: (e[2][0] - e[0][2]) / i,
              z: (e[0][1] - e[1][0]) / i,
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
          let i = 2 * (e.y * t.z - e.z * t.y),
            n = 2 * (e.z * t.x - e.x * t.z),
            r = 2 * (e.x * t.y - e.y * t.x);
          return {
            x: t.x + e.w * i + e.y * r - e.z * n,
            y: t.y + e.w * n + e.z * i - e.x * r,
            z: t.z + e.w * r + e.x * n - e.y * i,
          };
        }
        function v(e, t, i) {
          return [
            [e.x, e.y, e.z],
            [t.x, t.y, t.z],
            [i.x, i.y, i.z],
          ];
        }
        function g(e) {
          return m(e.rotation, { x: 0, y: 0, z: 1 });
        }
        function _(e) {
          let t = h(e);
          return { x: e.x / t, y: e.y / t, z: e.z / t };
        }
        function y(e, t) {
          return {
            x: e.y * t.z - e.z * t.y,
            y: e.z * t.x - e.x * t.z,
            z: e.x * t.y - e.y * t.x,
          };
        }
        function b(e) {
          let t = e.w * e.w + e.x * e.x + e.y * e.y + e.z * e.z;
          return { w: e.w / t, x: -e.x / t, y: -e.y / t, z: -e.z / t };
        }
        i.d(t, {
          Fs: () => l,
          Fx: () => m,
          JR: () => c,
          LY: () => h,
          M9: () => _,
          Oq: () => n,
          Pd: () => p,
          UU: () => u,
          Zj: () => a,
          aB: () => g,
          dq: () => y,
          eQ: () => s,
          mT: () => d,
          q9: () => o,
          rN: () => b,
          tS: () => v,
          ui: () => r,
        });
      },
      7500: (e, t, i) => {
        "use strict";
        i.d(t, { h: () => o });
        var n = i(655),
          r = i(4671);
        class o {
          constructor() {
            (this.m_mailbox = new r.N()),
              this.m_mailbox.Init("sgtransformcache");
          }
          static getInstance() {
            return o.instance || (o.instance = new o()), o.instance;
          }
          requestSGTransform(e, t = 0) {
            return new Promise((i, r) =>
              (0, n.mG)(this, void 0, void 0, function* () {
                let n = { type: "transform_request", id: e, flPushDistance: t },
                  o = yield this.m_mailbox.SendMessageAndWaitForResponse(
                    "vrcompositor_systemlayer",
                    n,
                    "transform_response",
                  );
                o.id == e && o.transform
                  ? i(o.transform)
                  : r("requestSGTransform failed");
              }),
            );
          }
        }
      },
      4671: (e, t, i) => {
        "use strict";
        i.d(t, { N: () => o });
        var n = i(655),
          r = i(7056);
        class o {
          constructor() {
            (this.m_wsWebSocketToServer = void 0),
              (this.m_oHandlers = {}),
              (this.m_oWaits = {}),
              (this.m_oConnectWaits = []),
              (this.m_fnConnectResolve = void 0),
              (this.m_nNextMessageNumber = 1);
          }
          OpenWebSocketToHost() {
            return new Promise((e, t) => {
              console.log(
                "Connecting vrmailbox " + this.m_sMailboxName + "...",
              );
              let i = "ws://localhost:27062";
              this.m_sWebSecret && (i += "?secret=" + this.m_sWebSecret),
                (this.m_fnConnectResolve = e),
                (this.m_wsWebSocketToServer = new WebSocket(i)),
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
          static EnsureUniqueName(e) {
            if (e.includes("/")) return e;
            let t;
            return (
              (t = VRHTML ? VRHTML.GetWebHelperId() : Date.now().toString()),
              e + "/" + t + "_" + this.s_nNextMailboxNumber++
            );
          }
          Init(e, t) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return (
                (this.m_sMailboxName = o.EnsureUniqueName(e)),
                (this.m_sWebSecret = t),
                (this.connected = !1),
                this.OpenWebSocketToHost()
              );
            });
          }
          get name() {
            return this.m_sMailboxName;
          }
          OnWebSocketOpen(e) {
            (this.connected = !0),
              this.WebSocketSend("mailbox_open " + this.m_sMailboxName),
              window.addEventListener("beforeunload", () => {
                this.WebSocketSend("websocket_close");
              }),
              this.m_fnConnectResolve &&
                (this.m_fnConnectResolve(), (this.m_fnConnectResolve = void 0));
            for (let e of this.m_oConnectWaits) e();
            this.m_oConnectWaits = [];
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
            let t = JSON.parse(e.data),
              i = !1;
            if (
              (this.m_oHandlers.hasOwnProperty(t.type) &&
                (this.m_oHandlers[t.type](t), (i = !0)),
              this.m_oWaits.hasOwnProperty(t.type))
            ) {
              let e = !1;
              for (let i of this.m_oWaits[t.type])
                i.nMessageId == t.message_id && (i.callback(t), (e = !0));
              e
                ? (this.m_oWaits[t.type] = this.m_oWaits[t.type].filter(
                    (e) => e.nMessageId == t.message_id,
                  ))
                : console.log(
                    `Received a ${t.type} message, but didn't have a matching message_id. Did the other end forget to mirror message_id?`,
                  ),
                (i = !0);
            }
            i || console.log("Received unhandled message: ", t);
          }
          RegisterHandler(e, t) {
            this.m_oHandlers[e] = t;
          }
          SendMessage(e, t) {
            this.WebSocketSend("mailbox_send " + e + " " + JSON.stringify(t));
          }
          WaitForMessage(e, t) {
            return new Promise((i, n) => {
              this.m_oWaits[e] || (this.m_oWaits[e] = []),
                this.m_oWaits[e].push({ callback: i, nMessageId: t });
            });
          }
          WaitForConnect() {
            return new Promise((e, t) => {
              this.connected ? e() : this.m_oConnectWaits.push(e);
            });
          }
          WaitForMailbox(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              let t = {
                type: "request_mailbox_registration_notification",
                mailbox_name: e,
              };
              return this.SendMessageAndWaitForResponse(
                "web_server_mailbox",
                t,
                "mailbox_registered",
              );
            });
          }
          SendMessageAndWaitForResponse(e, t, i) {
            let n = Object.assign({}, t);
            return (
              null == n.returnAddress &&
                (n.returnAddress = this.m_sMailboxName),
              (n.message_id = this.m_nNextMessageNumber++),
              this.SendMessage(e, n),
              this.WaitForMessage(i, n.message_id)
            );
          }
          SendResponse(e, t) {
            if (!e.returnAddress)
              throw new Error("Missing return address on message");
            let i = Object.assign(Object.assign({}, t), {
              message_id: e.message_id,
            });
            (i.message_id = e.message_id), this.SendMessage(e.returnAddress, i);
          }
        }
        (o.s_nNextMailboxNumber = 1),
          (0, n.gn)([r.ak], o.prototype, "OpenWebSocketToHost", null),
          (0, n.gn)([r.ak], o.prototype, "OnWebSocketOpen", null),
          (0, n.gn)([r.ak], o.prototype, "OnWebSocketClose", null),
          (0, n.gn)([r.ak], o.prototype, "WebSocketSend", null),
          (0, n.gn)([r.ak], o.prototype, "OnWebSocketMessage", null);
      },
      5867: (e, t, i) => {
        "use strict";
        var n, r, o, a;
        function s() {
          var e;
          return null !==
            (e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.Environment()) && void 0 !== e
            ? e
            : n.Unknown;
        }
        i.d(t, {
          GC: () => R,
          Kf: () => d,
          Kg: () => M,
          LL: () => r,
          Op: () => s,
          Pw: () => b,
          QZ: () => o,
          Qu: () => w,
          XX: () => h,
          Z9: () => u,
          ZP: () => p,
          a0: () => C,
          l0: () => S,
          lx: () => k,
          qA: () => n,
          qC: () => m,
          qR: () => v,
          wU: () => l,
          xY: () => _,
          zA: () => T,
          zq: () => a,
        }),
          (function (e) {
            (e[(e.Desktop = 1)] = "Desktop"),
              (e[(e.Overlay = 2)] = "Overlay"),
              (e[(e.Unknown = 100)] = "Unknown");
          })(n || (n = {})),
          window.hasOwnProperty("VRHTML") || (window.VRHTML = null),
          (function (e) {
            (e[(e.Auto = 0)] = "Auto"),
              (e[(e.Low = 1)] = "Low"),
              (e[(e.Medium = 2)] = "Medium"),
              (e[(e.High = 3)] = "High");
          })(r || (r = {})),
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
          })(o || (o = {})),
          (function (e) {
            (e[(e.Seated = 0)] = "Seated"),
              (e[(e.Standing = 1)] = "Standing"),
              (e[(e.RawAndUncalibrated = 2)] = "RawAndUncalibrated");
          })(a || (a = {}));
        let l = 0,
          d = -1;
        var c, h, u, p, m, v, g, _, y, b, S, f, k, R, M, C, T, w;
        !(function (e) {
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
        })(c || (c = {})),
          (function (e) {
            (e[(e.Activated = 0)] = "Activated"),
              (e[(e.Deactivated = 1)] = "Deactivated");
          })(h || (h = {})),
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
              (e[(e.EnableControlBar = 8388608)] = "EnableControlBar"),
              (e[(e.EnableControlBarKeyboard = 16777216)] =
                "EnableControlBarKeyboard"),
              (e[(e.EnableControlBarClose = 33554432)] =
                "EnableControlBarClose"),
              (e[(e.EnableSteamUIButtons = 67108864)] = "EnableSteamUIButtons");
          })(u || (u = {})),
          (function (e) {
            (e[(e.HomeMenu = 50)] = "HomeMenu"),
              (e[(e.QuickMenu = 51)] = "QuickMenu");
          })(p || (p = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"), (e[(e.Mouse = 1)] = "Mouse");
          })(m || (m = {})),
          (function (e) {
            (e[(e.Invalid = 0)] = "Invalid"),
              (e[(e.HMD = 1)] = "HMD"),
              (e[(e.Controller = 2)] = "Controller"),
              (e[(e.GenericTracker = 3)] = "GenericTracker"),
              (e[(e.TrackingReference = 4)] = "TrackingReference"),
              (e[(e.DisplayRedirect = 5)] = "DisplayRedirect");
          })(v || (v = {})),
          (function (e) {
            (e[(e.Unknown = 0)] = "Unknown"),
              (e[(e.NVIDIA = 1)] = "NVIDIA"),
              (e[(e.AMD = 2)] = "AMD");
          })(g || (g = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.Starting = 1)] = "Starting"),
              (e[(e.Quitting = 2)] = "Quitting"),
              (e[(e.Running = 3)] = "Running"),
              (e[(e.Waiting = 4)] = "Waiting");
          })(_ || (_ = {})),
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
          })(y || (y = {})),
          (function (e) {
            (e[(e.Normal = 0)] = "Normal"),
              (e[(e.Password = 1)] = "Password"),
              (e[(e.Submit = 2)] = "Submit");
          })(b || (b = {})),
          (function (e) {
            (e[(e.SingleLine = 0)] = "SingleLine"),
              (e[(e.MultipleLines = 1)] = "MultipleLines");
          })(S || (S = {})),
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
          })(f || (f = {})),
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
          })(k || (k = {})),
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
          })(C || (C = {})),
          (function (e) {
            (e[(e.Hostname = 0)] = "Hostname"),
              (e[(e.IP = 1)] = "IP"),
              (e[(e.Version = 2)] = "Version"),
              (e[(e.NetworkConnections = 3)] = "NetworkConnections"),
              (e[(e.XRS_CalibrationDate = 4)] = "XRS_CalibrationDate");
          })(T || (T = {})),
          (function (e) {
            (e[(e.Unavailable = 0)] = "Unavailable"),
              (e[(e.Active = 1)] = "Active"),
              (e[(e.Off = 2)] = "Off");
          })(w || (w = {}));
      },
      7074: (e, t, i) => {
        "use strict";
        var n, r, o, a;
        i.d(t, { Uk: () => n, sH: () => o, vS: () => a }),
          (function (e) {
            (e[(e.Invalid = 0)] = "Invalid"),
              (e[(e.TrackingSystemName_String = 1e3)] =
                "TrackingSystemName_String"),
              (e[(e.ModelNumber_String = 1001)] = "ModelNumber_String"),
              (e[(e.SerialNumber_String = 1002)] = "SerialNumber_String"),
              (e[(e.RenderModelName_String = 1003)] = "RenderModelName_String"),
              (e[(e.WillDriftInYaw_Bool = 1004)] = "WillDriftInYaw_Bool"),
              (e[(e.ManufacturerName_String = 1005)] =
                "ManufacturerName_String"),
              (e[(e.TrackingFirmwareVersion_String = 1006)] =
                "TrackingFirmwareVersion_String"),
              (e[(e.HardwareRevision_String = 1007)] =
                "HardwareRevision_String"),
              (e[(e.AllWirelessDongleDescriptions_String = 1008)] =
                "AllWirelessDongleDescriptions_String"),
              (e[(e.ConnectedWirelessDongle_String = 1009)] =
                "ConnectedWirelessDongle_String"),
              (e[(e.DeviceIsWireless_Bool = 1010)] = "DeviceIsWireless_Bool"),
              (e[(e.DeviceIsCharging_Bool = 1011)] = "DeviceIsCharging_Bool"),
              (e[(e.DeviceBatteryPercentage_Float = 1012)] =
                "DeviceBatteryPercentage_Float"),
              (e[(e.StatusDisplayTransform_Matrix34 = 1013)] =
                "StatusDisplayTransform_Matrix34"),
              (e[(e.Firmware_UpdateAvailable_Bool = 1014)] =
                "Firmware_UpdateAvailable_Bool"),
              (e[(e.Firmware_ManualUpdate_Bool = 1015)] =
                "Firmware_ManualUpdate_Bool"),
              (e[(e.Firmware_ManualUpdateURL_String = 1016)] =
                "Firmware_ManualUpdateURL_String"),
              (e[(e.HardwareRevision_Uint64 = 1017)] =
                "HardwareRevision_Uint64"),
              (e[(e.FirmwareVersion_Uint64 = 1018)] = "FirmwareVersion_Uint64"),
              (e[(e.FPGAVersion_Uint64 = 1019)] = "FPGAVersion_Uint64"),
              (e[(e.VRCVersion_Uint64 = 1020)] = "VRCVersion_Uint64"),
              (e[(e.RadioVersion_Uint64 = 1021)] = "RadioVersion_Uint64"),
              (e[(e.DongleVersion_Uint64 = 1022)] = "DongleVersion_Uint64"),
              (e[(e.BlockServerShutdown_Bool = 1023)] =
                "BlockServerShutdown_Bool"),
              (e[(e.CanUnifyCoordinateSystemWithHmd_Bool = 1024)] =
                "CanUnifyCoordinateSystemWithHmd_Bool"),
              (e[(e.ContainsProximitySensor_Bool = 1025)] =
                "ContainsProximitySensor_Bool"),
              (e[(e.DeviceProvidesBatteryStatus_Bool = 1026)] =
                "DeviceProvidesBatteryStatus_Bool"),
              (e[(e.DeviceCanPowerOff_Bool = 1027)] = "DeviceCanPowerOff_Bool"),
              (e[(e.Firmware_ProgrammingTarget_String = 1028)] =
                "Firmware_ProgrammingTarget_String"),
              (e[(e.DeviceClass_Int32 = 1029)] = "DeviceClass_Int32"),
              (e[(e.HasCamera_Bool = 1030)] = "HasCamera_Bool"),
              (e[(e.DriverVersion_String = 1031)] = "DriverVersion_String"),
              (e[(e.Firmware_ForceUpdateRequired_Bool = 1032)] =
                "Firmware_ForceUpdateRequired_Bool"),
              (e[(e.ViveSystemButtonFixRequired_Bool = 1033)] =
                "ViveSystemButtonFixRequired_Bool"),
              (e[(e.ParentDriver_Uint64 = 1034)] = "ParentDriver_Uint64"),
              (e[(e.ResourceRoot_String = 1035)] = "ResourceRoot_String"),
              (e[(e.RegisteredDeviceType_String = 1036)] =
                "RegisteredDeviceType_String"),
              (e[(e.InputProfilePath_String = 1037)] =
                "InputProfilePath_String"),
              (e[(e.NeverTracked_Bool = 1038)] = "NeverTracked_Bool"),
              (e[(e.NumCameras_Int32 = 1039)] = "NumCameras_Int32"),
              (e[(e.CameraFrameLayout_Int32 = 1040)] =
                "CameraFrameLayout_Int32"),
              (e[(e.CameraStreamFormat_Int32 = 1041)] =
                "CameraStreamFormat_Int32"),
              (e[(e.AdditionalDeviceSettingsPath_String = 1042)] =
                "AdditionalDeviceSettingsPath_String"),
              (e[(e.DevicePowerUsage_Float = 1052)] = "DevicePowerUsage_Float"),
              (e[(e.ReportsTimeSinceVSync_Bool = 2e3)] =
                "ReportsTimeSinceVSync_Bool"),
              (e[(e.SecondsFromVsyncToPhotons_Float = 2001)] =
                "SecondsFromVsyncToPhotons_Float"),
              (e[(e.DisplayFrequency_Float = 2002)] = "DisplayFrequency_Float"),
              (e[(e.UserIpdMeters_Float = 2003)] = "UserIpdMeters_Float"),
              (e[(e.CurrentUniverseId_Uint64 = 2004)] =
                "CurrentUniverseId_Uint64"),
              (e[(e.PreviousUniverseId_Uint64 = 2005)] =
                "PreviousUniverseId_Uint64"),
              (e[(e.DisplayFirmwareVersion_Uint64 = 2006)] =
                "DisplayFirmwareVersion_Uint64"),
              (e[(e.IsOnDesktop_Bool = 2007)] = "IsOnDesktop_Bool"),
              (e[(e.DisplayMCType_Int32 = 2008)] = "DisplayMCType_Int32"),
              (e[(e.DisplayMCOffset_Float = 2009)] = "DisplayMCOffset_Float"),
              (e[(e.DisplayMCScale_Float = 2010)] = "DisplayMCScale_Float"),
              (e[(e.EdidVendorID_Int32 = 2011)] = "EdidVendorID_Int32"),
              (e[(e.DisplayMCImageLeft_String = 2012)] =
                "DisplayMCImageLeft_String"),
              (e[(e.DisplayMCImageRight_String = 2013)] =
                "DisplayMCImageRight_String"),
              (e[(e.DisplayGCBlackClamp_Float = 2014)] =
                "DisplayGCBlackClamp_Float"),
              (e[(e.EdidProductID_Int32 = 2015)] = "EdidProductID_Int32"),
              (e[(e.CameraToHeadTransform_Matrix34 = 2016)] =
                "CameraToHeadTransform_Matrix34"),
              (e[(e.DisplayGCType_Int32 = 2017)] = "DisplayGCType_Int32"),
              (e[(e.DisplayGCOffset_Float = 2018)] = "DisplayGCOffset_Float"),
              (e[(e.DisplayGCScale_Float = 2019)] = "DisplayGCScale_Float"),
              (e[(e.DisplayGCPrescale_Float = 2020)] =
                "DisplayGCPrescale_Float"),
              (e[(e.DisplayGCImage_String = 2021)] = "DisplayGCImage_String"),
              (e[(e.LensCenterLeftU_Float = 2022)] = "LensCenterLeftU_Float"),
              (e[(e.LensCenterLeftV_Float = 2023)] = "LensCenterLeftV_Float"),
              (e[(e.LensCenterRightU_Float = 2024)] = "LensCenterRightU_Float"),
              (e[(e.LensCenterRightV_Float = 2025)] = "LensCenterRightV_Float"),
              (e[(e.UserHeadToEyeDepthMeters_Float = 2026)] =
                "UserHeadToEyeDepthMeters_Float"),
              (e[(e.CameraFirmwareVersion_Uint64 = 2027)] =
                "CameraFirmwareVersion_Uint64"),
              (e[(e.CameraFirmwareDescription_String = 2028)] =
                "CameraFirmwareDescription_String"),
              (e[(e.DisplayFPGAVersion_Uint64 = 2029)] =
                "DisplayFPGAVersion_Uint64"),
              (e[(e.DisplayBootloaderVersion_Uint64 = 2030)] =
                "DisplayBootloaderVersion_Uint64"),
              (e[(e.DisplayHardwareVersion_Uint64 = 2031)] =
                "DisplayHardwareVersion_Uint64"),
              (e[(e.AudioFirmwareVersion_Uint64 = 2032)] =
                "AudioFirmwareVersion_Uint64"),
              (e[(e.CameraCompatibilityMode_Int32 = 2033)] =
                "CameraCompatibilityMode_Int32"),
              (e[(e.ScreenshotHorizontalFieldOfViewDegrees_Float = 2034)] =
                "ScreenshotHorizontalFieldOfViewDegrees_Float"),
              (e[(e.ScreenshotVerticalFieldOfViewDegrees_Float = 2035)] =
                "ScreenshotVerticalFieldOfViewDegrees_Float"),
              (e[(e.DisplaySuppressed_Bool = 2036)] = "DisplaySuppressed_Bool"),
              (e[(e.DisplayAllowNightMode_Bool = 2037)] =
                "DisplayAllowNightMode_Bool"),
              (e[(e.DisplayMCImageWidth_Int32 = 2038)] =
                "DisplayMCImageWidth_Int32"),
              (e[(e.DisplayMCImageHeight_Int32 = 2039)] =
                "DisplayMCImageHeight_Int32"),
              (e[(e.DisplayMCImageNumChannels_Int32 = 2040)] =
                "DisplayMCImageNumChannels_Int32"),
              (e[(e.DisplayMCImageData_Binary = 2041)] =
                "DisplayMCImageData_Binary"),
              (e[(e.SecondsFromPhotonsToVblank_Float = 2042)] =
                "SecondsFromPhotonsToVblank_Float"),
              (e[(e.DriverDirectModeSendsVsyncEvents_Bool = 2043)] =
                "DriverDirectModeSendsVsyncEvents_Bool"),
              (e[(e.DisplayDebugMode_Bool = 2044)] = "DisplayDebugMode_Bool"),
              (e[(e.GraphicsAdapterLuid_Uint64 = 2045)] =
                "GraphicsAdapterLuid_Uint64"),
              (e[(e.DriverProvidedChaperonePath_String = 2048)] =
                "DriverProvidedChaperonePath_String"),
              (e[(e.ExpectedTrackingReferenceCount_Int32 = 2049)] =
                "ExpectedTrackingReferenceCount_Int32"),
              (e[(e.ExpectedControllerCount_Int32 = 2050)] =
                "ExpectedControllerCount_Int32"),
              (e[(e.NamedIconPathControllerLeftDeviceOff_String = 2051)] =
                "NamedIconPathControllerLeftDeviceOff_String"),
              (e[(e.NamedIconPathControllerRightDeviceOff_String = 2052)] =
                "NamedIconPathControllerRightDeviceOff_String"),
              (e[(e.NamedIconPathTrackingReferenceDeviceOff_String = 2053)] =
                "NamedIconPathTrackingReferenceDeviceOff_String"),
              (e[(e.DoNotApplyPrediction_Bool = 2054)] =
                "DoNotApplyPrediction_Bool"),
              (e[(e.CameraToHeadTransforms_Matrix34_Array = 2055)] =
                "CameraToHeadTransforms_Matrix34_Array"),
              (e[(e.DistortionMeshResolution_Int32 = 2056)] =
                "DistortionMeshResolution_Int32"),
              (e[(e.DriverIsDrawingControllers_Bool = 2057)] =
                "DriverIsDrawingControllers_Bool"),
              (e[(e.DriverRequestsApplicationPause_Bool = 2058)] =
                "DriverRequestsApplicationPause_Bool"),
              (e[(e.DriverRequestsReducedRendering_Bool = 2059)] =
                "DriverRequestsReducedRendering_Bool"),
              (e[(e.MinimumIpdStepMeters_Float = 2060)] =
                "MinimumIpdStepMeters_Float"),
              (e[(e.AudioBridgeFirmwareVersion_Uint64 = 2061)] =
                "AudioBridgeFirmwareVersion_Uint64"),
              (e[(e.ImageBridgeFirmwareVersion_Uint64 = 2062)] =
                "ImageBridgeFirmwareVersion_Uint64"),
              (e[(e.ImuToHeadTransform_Matrix34 = 2063)] =
                "ImuToHeadTransform_Matrix34"),
              (e[(e.ImuFactoryGyroBias_Vector3 = 2064)] =
                "ImuFactoryGyroBias_Vector3"),
              (e[(e.ImuFactoryGyroScale_Vector3 = 2065)] =
                "ImuFactoryGyroScale_Vector3"),
              (e[(e.ImuFactoryAccelerometerBias_Vector3 = 2066)] =
                "ImuFactoryAccelerometerBias_Vector3"),
              (e[(e.ImuFactoryAccelerometerScale_Vector3 = 2067)] =
                "ImuFactoryAccelerometerScale_Vector3"),
              (e[(e.ConfigurationIncludesLighthouse20Features_Bool = 2069)] =
                "ConfigurationIncludesLighthouse20Features_Bool"),
              (e[(e.Prop_AdditionalRadioFeatures_Uint64 = 2070)] =
                "Prop_AdditionalRadioFeatures_Uint64"),
              (e[(e.Prop_CameraWhiteBalance_Vector4_Array = 2071)] =
                "Prop_CameraWhiteBalance_Vector4_Array"),
              (e[(e.Prop_CameraDistortionFunction_Int32_Array = 2072)] =
                "Prop_CameraDistortionFunction_Int32_Array"),
              (e[(e.Prop_CameraDistortionCoefficients_Float_Array = 2073)] =
                "Prop_CameraDistortionCoefficients_Float_Array"),
              (e[(e.Prop_ExpectedControllerType_String = 2074)] =
                "Prop_ExpectedControllerType_String"),
              (e[(e.HmdTrackingStyle_Int32 = 2075)] = "HmdTrackingStyle_Int32"),
              (e[(e.DriverProvidedChaperoneVisibility_Bool = 2076)] =
                "DriverProvidedChaperoneVisibility_Bool"),
              (e[(e.HmdColumnCorrectionSettingPrefix_String = 2077)] =
                "HmdColumnCorrectionSettingPrefix_String"),
              (e[(e.CameraSupportsCompatibilityModes_Bool = 2078)] =
                "CameraSupportsCompatibilityModes_Bool"),
              (e[(e.SupportsRoomViewDepthProjection_Bool = 2079)] =
                "SupportsRoomViewDepthProjection_Bool"),
              (e[(e.DisplayAvailableFrameRates_Float_Array = 2080)] =
                "DisplayAvailableFrameRates_Float_Array"),
              (e[(e.DisplaySupportsRuntimeFramerateChange_Bool = 2084)] =
                "DisplaySupportsRuntimeFramerateChange_Bool"),
              (e[(e.DisplaySupportsAnalogGain_Bool = 2085)] =
                "DisplaySupportsAnalogGain_Bool"),
              (e[(e.DisplayMinAnalogGain_Float = 2086)] =
                "DisplayMinAnalogGain_Float"),
              (e[(e.DisplayMaxAnalogGain_Float = 2087)] =
                "DisplayMaxAnalogGain_Float"),
              (e[(e.DashboardScale_Float = 2091)] = "DashboardScale_Float"),
              (e[(e.PeerButtonInfo_String = 2092)] = "PeerButtonInfo_String"),
              (e[(e.IpdUIRangeMinMeters_Float = 2100)] =
                "IpdUIRangeMinMeters_Float"),
              (e[(e.IpdUIRangeMaxMeters_Float = 2101)] =
                "IpdUIRangeMaxMeters_Float"),
              (e[(e.Hmd_SupportsHDCP14LegacyCompat_Bool = 2102)] =
                "Hmd_SupportsHDCP14LegacyCompat_Bool"),
              (e[(e.Hmd_SupportsMicMonitoring_Bool = 2103)] =
                "Hmd_SupportsMicMonitoring_Bool"),
              (e[(e.Hmd_SupportsDisplayPortTrainingMode_Bool = 2104)] =
                "Hmd_SupportsDisplayPortTrainingMode_Bool"),
              (e[(e.Hmd_SupportsRoomViewDirect_Bool = 2105)] =
                "Hmd_SupportsRoomViewDirect_Bool"),
              (e[(e.Hmd_SupportsAppThrottling_Bool = 2106)] =
                "Hmd_SupportsAppThrottling_Bool"),
              (e[(e.Hmd_SupportsGpuBusMonitoring_Bool = 2107)] =
                "Hmd_SupportsGpuBusMonitoring_Bool"),
              (e[(e.DriverRequestedMuraCorrectionMode_Int32 = 2200)] =
                "DriverRequestedMuraCorrectionMode_Int32"),
              (e[(e.DriverRequestedMuraFeather_InnerLeft_Int32 = 2201)] =
                "DriverRequestedMuraFeather_InnerLeft_Int32"),
              (e[(e.DriverRequestedMuraFeather_InnerRight_Int32 = 2202)] =
                "DriverRequestedMuraFeather_InnerRight_Int32"),
              (e[(e.DriverRequestedMuraFeather_InnerTop_Int32 = 2203)] =
                "DriverRequestedMuraFeather_InnerTop_Int32"),
              (e[(e.DriverRequestedMuraFeather_InnerBottom_Int32 = 2204)] =
                "DriverRequestedMuraFeather_InnerBottom_Int32"),
              (e[(e.DriverRequestedMuraFeather_OuterLeft_Int32 = 2205)] =
                "DriverRequestedMuraFeather_OuterLeft_Int32"),
              (e[(e.DriverRequestedMuraFeather_OuterRight_Int32 = 2206)] =
                "DriverRequestedMuraFeather_OuterRight_Int32"),
              (e[(e.DriverRequestedMuraFeather_OuterTop_Int32 = 2207)] =
                "DriverRequestedMuraFeather_OuterTop_Int32"),
              (e[(e.DriverRequestedMuraFeather_OuterBottom_Int32 = 2208)] =
                "DriverRequestedMuraFeather_OuterBottom_Int32"),
              (e[(e.Audio_SupportsDualSpeakerAndJackOutput_Bool = 2303)] =
                "Audio_SupportsDualSpeakerAndJackOutput_Bool"),
              (e[(e.AttachedDeviceId_String = 3e3)] =
                "AttachedDeviceId_String"),
              (e[(e.SupportedButtons_Uint64 = 3001)] =
                "SupportedButtons_Uint64"),
              (e[(e.Axis0Type_Int32 = 3002)] = "Axis0Type_Int32"),
              (e[(e.Axis1Type_Int32 = 3003)] = "Axis1Type_Int32"),
              (e[(e.Axis2Type_Int32 = 3004)] = "Axis2Type_Int32"),
              (e[(e.Axis3Type_Int32 = 3005)] = "Axis3Type_Int32"),
              (e[(e.Axis4Type_Int32 = 3006)] = "Axis4Type_Int32"),
              (e[(e.ControllerRoleHint_Int32 = 3007)] =
                "ControllerRoleHint_Int32"),
              (e[(e.FieldOfViewLeftDegrees_Float = 4e3)] =
                "FieldOfViewLeftDegrees_Float"),
              (e[(e.FieldOfViewRightDegrees_Float = 4001)] =
                "FieldOfViewRightDegrees_Float"),
              (e[(e.FieldOfViewTopDegrees_Float = 4002)] =
                "FieldOfViewTopDegrees_Float"),
              (e[(e.FieldOfViewBottomDegrees_Float = 4003)] =
                "FieldOfViewBottomDegrees_Float"),
              (e[(e.TrackingRangeMinimumMeters_Float = 4004)] =
                "TrackingRangeMinimumMeters_Float"),
              (e[(e.TrackingRangeMaximumMeters_Float = 4005)] =
                "TrackingRangeMaximumMeters_Float"),
              (e[(e.ModeLabel_String = 4006)] = "ModeLabel_String"),
              (e[(e.IconPathName_String = 5e3)] = "IconPathName_String"),
              (e[(e.NamedIconPathDeviceOff_String = 5001)] =
                "NamedIconPathDeviceOff_String"),
              (e[(e.NamedIconPathDeviceSearching_String = 5002)] =
                "NamedIconPathDeviceSearching_String"),
              (e[(e.NamedIconPathDeviceSearchingAlert_String = 5003)] =
                "NamedIconPathDeviceSearchingAlert_String"),
              (e[(e.NamedIconPathDeviceReady_String = 5004)] =
                "NamedIconPathDeviceReady_String"),
              (e[(e.NamedIconPathDeviceReadyAlert_String = 5005)] =
                "NamedIconPathDeviceReadyAlert_String"),
              (e[(e.NamedIconPathDeviceNotReady_String = 5006)] =
                "NamedIconPathDeviceNotReady_String"),
              (e[(e.NamedIconPathDeviceStandby_String = 5007)] =
                "NamedIconPathDeviceStandby_String"),
              (e[(e.NamedIconPathDeviceAlertLow_String = 5008)] =
                "NamedIconPathDeviceAlertLow_String"),
              (e[(e.DisplayHiddenArea_Binary_Start = 5100)] =
                "DisplayHiddenArea_Binary_Start"),
              (e[(e.DisplayHiddenArea_Binary_End = 5150)] =
                "DisplayHiddenArea_Binary_End"),
              (e[(e.ParentContainer = 5151)] = "ParentContainer"),
              (e[(e.UserConfigPath_String = 6e3)] = "UserConfigPath_String"),
              (e[(e.InstallPath_String = 6001)] = "InstallPath_String"),
              (e[(e.HasDisplayComponent_Bool = 6002)] =
                "HasDisplayComponent_Bool"),
              (e[(e.HasControllerComponent_Bool = 6003)] =
                "HasControllerComponent_Bool"),
              (e[(e.HasCameraComponent_Bool = 6004)] =
                "HasCameraComponent_Bool"),
              (e[(e.HasDriverDirectModeComponent_Bool = 6005)] =
                "HasDriverDirectModeComponent_Bool"),
              (e[(e.HasVirtualDisplayComponent_Bool = 6006)] =
                "HasVirtualDisplayComponent_Bool"),
              (e[(e.HasSpatialAnchorsSupport_Bool = 6007)] =
                "HasSpatialAnchorsSupport_Bool"),
              (e[(e.ControllerType_String = 7e3)] = "ControllerType_String"),
              (e[(e.LegacyInputProfile_String = 7001)] =
                "LegacyInputProfile_String"),
              (e[(e.VendorSpecific_Reserved_Start = 1e4)] =
                "VendorSpecific_Reserved_Start"),
              (e[(e.VendorSpecific_Reserved_End = 10999)] =
                "VendorSpecific_Reserved_End"),
              (e[(e.TrackedDeviceProperty_Max = 1e6)] =
                "TrackedDeviceProperty_Max");
          })(n || (n = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.SecondaryClick = 1)] = "SecondaryClick"),
              (e[(e.PrimaryClick = 2)] = "PrimaryClick");
          })(r || (r = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.ButtonEnter = 1)] = "ButtonEnter"),
              (e[(e.ButtonLeave = 2)] = "ButtonLeave"),
              (e[(e.Snap = 3)] = "Snap"),
              (e[(e.Sliding = 4)] = "Sliding"),
              (e[(e.SlidingEdge = 5)] = "SlidingEdge");
          })(o || (o = {})),
          (function (e) {
            (e[(e.Minimal = 1)] = "Minimal"),
              (e[(e.Modal = 2)] = "Modal"),
              (e[(e.Rich = 4)] = "Rich"),
              (e[(e.ShowArrowKeys = 8)] = "ShowArrowKeys"),
              (e[(e.ShowDoneKey = 16)] = "ShowDoneKey");
          })(a || (a = {}));
      },
      5928: (e, t, i) => {
        "use strict";
        i.d(t, { L: () => f });
        var n,
          r = i(655),
          o = i(7294),
          a = i(7056),
          s = i(3568),
          l = i(1569),
          d = i(9809),
          c = i(5211),
          h = i(2893),
          u = i(7062),
          p = i(2188),
          m = i(9595),
          v = i(3010);
        !(function (e) {
          (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
        })(n || (n = {}));
        class g extends o.Component {
          constructor(e) {
            super(e),
              (this.m_containerRef = null),
              (this.m_nameRef = null),
              (this.m_svgRef = null),
              (this.m_containerRef = o.createRef()),
              (this.m_nameRef = o.createRef()),
              (this.m_svgRef = o.createRef()),
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
          ComponentUpdated(e, t, i) {
            e == this.props.devicePath &&
              (t == this.props.sourcePath + "/click" &&
                this.setState({ click: i }),
              t == this.props.sourcePath + "/touch" &&
                this.setState({ touch: i }),
              t == this.props.sourcePath + "/x" && this.setState({ x: i }),
              t == this.props.sourcePath + "/y" && this.setState({ y: i }),
              t == this.props.sourcePath + "/value" &&
                this.setState({ value: i }),
              t == this.props.sourcePath + "/force" &&
                this.setState({ force: i }));
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
              o.createElement(
                "div",
                { className: "VisualizerButtonContainer" },
                o.createElement("div", {
                  className: "VisualizerButtonBase" + e,
                }),
              )
            );
          }
          renderBar(e, t, i) {
            let n = { width: String(100 * i) + "%" };
            return o.createElement(
              "div",
              { className: "TriggerBar " + t },
              o.createElement(
                "div",
                { className: "VisualizerLabel" },
                (0, s.Xx)(e),
              ),
              o.createElement(
                "div",
                { className: "TriggerBarBackground" },
                o.createElement("div", {
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
                i = this.m_svgRef.current.children.namedItem("SourceCircle"),
                r = this.props.side == n.Right,
                o = this.m_nameRef.current.getBoundingClientRect(),
                a = this.m_containerRef.current.getBoundingClientRect(),
                s = this.GetPosition(),
                l = new c.E9(0, o.top + o.height / 2);
              l.x = r ? a.left - 10 : a.right + 10;
              let d = r ? -20 : 20,
                h = l.x + d + "," + l.y + " " + s.x + "," + s.y;
              e.setAttribute("points", h);
              let u = l.x + "," + l.y + " " + (l.x + d) + "," + l.y;
              t.setAttribute("points", u),
                i.setAttribute("cx", s.x + ""),
                i.setAttribute("cy", s.y + "");
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
              this.props.side == n.Left
                ? (e += " MenuLeftLine")
                : (e += " MenuRightLine"),
              this.IsEngaged() && (e += " MenuSVGVisible"),
              o.createElement(
                "div",
                { className: "VisualizerControl", ref: this.m_containerRef },
                o.createElement(
                  "div",
                  { className: "VisualizerSectionHeader" },
                  o.createElement(
                    "div",
                    { className: "Label Title", ref: this.m_nameRef },
                    d.I.LocalizeControllerString(
                      this.props.controllerType,
                      this.props.sourcePath,
                    ),
                  ),
                  this.renderHeaderVisualization(),
                ),
                this.renderBodyVisualization(),
                o.createElement(
                  "svg",
                  {
                    className: e,
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: this.m_svgRef,
                  },
                  o.createElement(
                    "defs",
                    null,
                    o.createElement(
                      "radialGradient",
                      { id: "buttonGradient" },
                      o.createElement("stop", {
                        offset: "0%",
                        stopColor: "var(--bordercolor)",
                        stopOpacity: "0.8",
                      }),
                      o.createElement("stop", {
                        offset: "100%",
                        stopColor: "var(--bordercolor)",
                        stopOpacity: "0",
                      }),
                    ),
                  ),
                  o.createElement("polyline", {
                    id: "SourceLine",
                    stroke: "var(--bordercolor)",
                    strokeWidth: "0.1rem",
                    fill: "transparent",
                  }),
                  o.createElement("polyline", {
                    id: "SourcePath",
                    stroke: "var(--bordercolor)",
                    strokeWidth: "0.1rem",
                    fill: "transparent",
                  }),
                  o.createElement("circle", {
                    id: "SourceCircle",
                    r: "2rem",
                    fill: "url(#buttonGradient)",
                  }),
                ),
              )
            );
          }
        }
        (0, r.gn)([a.ak], g.prototype, "ComponentUpdated", null),
          (0, r.gn)([a.ak], g.prototype, "UpdateSVGPath", null);
        class _ extends g {
          constructor(e) {
            super(e);
          }
        }
        class y extends g {
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
            return o.createElement(
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
        class b extends g {
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
              o.createElement(
                "div",
                {
                  className:
                    "TrackpadVisualizerContainer" +
                    (this.state.touch ? " Touched" : ""),
                },
                o.createElement(
                  "div",
                  { className: "TrackpadPosition" },
                  o.createElement(
                    "div",
                    { className: "VisualizerLabel" },
                    (0, s.Xx)("#SourceInputMode_Position"),
                  ),
                  o.createElement(
                    "div",
                    { className: "TrackpadVisualizerContainer" },
                    o.createElement(
                      "div",
                      { className: "TrackpadVisualizerBackground" },
                      e &&
                        o.createElement(
                          "div",
                          { style: e },
                          o.createElement(
                            "div",
                            { className: "TrackpadVisualizerPipContainer" },
                            o.createElement("div", { className: t }),
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
        class S extends o.Component {
          constructor(e) {
            super(e),
              (this.m_imageRef = o.createRef()),
              (this.state = { imageScale: this.GetPointScale() });
          }
          get ControllerTypeInfo() {
            let e = d.I.GetDeviceInfo(this.props.devicePath);
            return d.I.GetControllerTypeInfo(e.controller_type);
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
          renderSource(e, t, i) {
            let n = e + this.ControllerTypeInfo.controller_type;
            switch (t.type) {
              case "button":
                return o.createElement(_, {
                  key: n,
                  side: i,
                  controllerType: this.ControllerTypeInfo,
                  devicePath: this.props.devicePath,
                  sourcePath: e,
                  source: t,
                  visualizer: this.props.visualizer,
                  imageScale: this.GetPointScale(),
                });
              case "trigger":
                return o.createElement(y, {
                  key: n,
                  side: i,
                  controllerType: this.ControllerTypeInfo,
                  devicePath: this.props.devicePath,
                  sourcePath: e,
                  source: t,
                  visualizer: this.props.visualizer,
                  imageScale: this.GetPointScale(),
                });
              case "joystick":
              case "trackpad":
                return o.createElement(b, {
                  key: n,
                  side: i,
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
                return o.createElement(
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
              i = this.ControllerTypeInfo;
            return (
              "/user/hand/left" == this.props.devicePath
                ? i.input_bindingui_left &&
                  ((e = i.input_bindingui_left.uri),
                  (t = i.input_bindingui_left.transform
                    ? i.input_bindingui_left.transform
                    : ""))
                : "/user/hand/right" == this.props.devicePath
                  ? i.input_bindingui_right &&
                    ((e = i.input_bindingui_right.uri),
                    (t = i.input_bindingui_right.transform
                      ? i.input_bindingui_right.transform
                      : ""))
                  : i.input_bindingui_left
                    ? ((e = i.input_bindingui_left.uri),
                      (t = i.input_bindingui_left.transform
                        ? i.input_bindingui_left.transform
                        : ""))
                    : i.input_bindingui_right &&
                      ((e = i.input_bindingui_right.uri),
                      (t = i.input_bindingui_right.transform
                        ? i.input_bindingui_right.transform
                        : "")),
              e
                ? o.createElement(
                    "div",
                    { className: "VisualizerImageContainer" },
                    o.createElement("img", {
                      className: "VisualizerImage",
                      ref: this.m_imageRef,
                      onLoad: this.OnImageLoaded,
                      src: e,
                      style: { transform: t },
                    }),
                    o.createElement(h.Z, { onReflow: this.OnImageReflow }),
                  )
                : null
            );
          }
          render() {
            let e = [],
              t = [],
              i = this.ControllerTypeInfo,
              r = 0,
              a = [];
            for (let e in i.input_source) {
              let t = i.input_source[e];
              if ("InputValueVisibility_AvailableButHidden" == t.visibility)
                continue;
              let n = this.EstimateSourceHeight(t);
              (r += n),
                a.push({
                  sSourcePath: e,
                  inputSource: t,
                  order: t.order ? t.order : 0,
                  height: n,
                });
            }
            let s = 8;
            r > 16 && (s = r / 2);
            let l = 0,
              d = a.sort((e, t) => e.order - t.order);
            for (let i of d) {
              l += i.height;
              let r = l > s ? n.Right : n.Left,
                o = this.renderSource(i.sSourcePath, i.inputSource, r);
              o && (r == n.Left ? e.push(o) : t.push(o));
            }
            return o.createElement(
              "div",
              { className: "ControllerVisualizer" },
              o.createElement(
                "div",
                { className: "VisualizerLeft ControllerVisualizerEntries" },
                e,
              ),
              this.renderImage(),
              o.createElement(
                "div",
                { className: "VisualizerRight ControllerVisualizerEntries" },
                t,
              ),
            );
          }
        }
        (0, r.gn)([a.ak], S.prototype, "OnImageLoaded", null),
          (0, r.gn)([a.ak], S.prototype, "OnImageReflow", null);
        let f = class extends o.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new l.Nv()),
              (this.m_componentRegistrations = {}),
              (this.m_observeDisposer = null),
              this.m_mailbox.RegisterHandler(
                "update_component_states",
                this.OnUpdateComponentStates,
              ),
              this.m_mailbox
                .Init("controller_visualizer")
                .then(
                  () => (
                    this.UpdateDeviceInputStateSubscriptions(),
                    (this.m_observeDisposer = (0, p.N7)(
                      d.I,
                      "ConnectedDevices",
                      this.OnConnectedDevicesChanged,
                    )),
                    this.SetDefaultDeviceIfNecessary(),
                    null
                  ),
                ),
              (this.state = { devicePath: null });
          }
          componentWillUnmount() {
            this.m_observeDisposer && this.m_observeDisposer();
            for (let e of d.I.ConnectedDevices) {
              let t = {
                type: "cancel_input_state_updates",
                device_path: e.root_path,
                returnAddress: this.m_mailbox.name,
              };
              this.m_mailbox.SendMessage("input_server", t);
            }
          }
          UpdateDeviceInputStateSubscriptions() {
            for (let e of d.I.ConnectedDevices) {
              let t = {
                type: "request_input_state_updates",
                device_path: e.root_path,
                returnAddress: this.m_mailbox.name,
              };
              this.m_mailbox.SendMessage("input_server", t);
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
              let i = e.device + t;
              this.m_componentRegistrations[i] &&
                this.m_componentRegistrations[i](e.device, t, e.components[t]);
            }
          }
          RegisterSourceVisualizer(e, t, i) {
            this.m_componentRegistrations[e + t] = i;
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
            return d.I.ConnectedDevices.sort(
              (e, t) => this.GetDeviceSortOrder(e) - this.GetDeviceSortOrder(t),
            );
          }
          render() {
            let e,
              t = [],
              i = this.GetSortedDevices();
            if (!i)
              return o.createElement(
                m.TB,
                {
                  className: "ControllerVisualizerWrapper",
                  header: (0, s.Xx)("#TestControllerTitle", ""),
                  onDismissRequested: this.props.onDismissRequested,
                },
                o.createElement(
                  "div",
                  { className: "VisualizerLabel" },
                  (0, s.Xx)("#TestController_NoController"),
                ),
              );
            for (let n of i)
              "TrackedDeviceClass_HMD" != n.class &&
                (n.root_path == this.state.devicePath && (e = n.serial_number),
                t.push({
                  value: n.root_path,
                  sLabel: (0, s.Xx)("#" + n.root_path),
                }));
            return o.createElement(
              m.TB,
              {
                className: "ControllerVisualizerWrapper",
                header: (0, s.Xx)("#TestControllerTitle", e),
                onDismissRequested: this.props.onDismissRequested,
                footer: o.createElement(m.U5, {
                  leftControls: [
                    o.createElement(v.hu, {
                      key: "dropdown",
                      items: t,
                      value: this.state.devicePath,
                      defaultLabel: (0, s.Xx)("#" + this.state.devicePath),
                      onChange: (e) => {
                        this.setState({ devicePath: e });
                      },
                    }),
                  ],
                  onDismissRequested: this.props.onDismissRequested,
                }),
              },
              this.state.devicePath &&
                o.createElement(S, {
                  devicePath: this.state.devicePath,
                  serialNumber: e,
                  visualizer: this,
                }),
            );
          }
        };
        (0, r.gn)([a.ak], f.prototype, "OnConnectedDevicesChanged", null),
          (0, r.gn)([a.ak], f.prototype, "OnUpdateComponentStates", null),
          (f = (0, r.gn)([u.Pi], f));
      },
      9671: (e, t, i) => {
        "use strict";
        i.d(t, { V: () => d });
        var n = i(655),
          r = i(7294),
          o = i(7056),
          a = i(3568),
          s = i(1569);
        class l extends r.Component {
          constructor(e) {
            if (
              (super(e),
              (this.m_mailbox = new s.Nv()),
              this.m_mailbox.Init("legacy_debugger"),
              this.m_mailbox.RegisterHandler(
                "legacy_input_frame",
                this.OnLegacyInputFrame,
              ),
              VRHTML)
            ) {
              let e = VRHTML.VRApplications.GetCurrentSceneProcessId();
              VRHTML.VRProperties.SetInt32Path("/legacy_debugger_pid", e);
            }
            this.state = { currentState: null };
          }
          componentWillUnmount() {
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRProperties.SetInt32Path("/legacy_debugger_pid", 0);
          }
          OnLegacyInputFrame(e) {
            this.setState({ currentState: e });
          }
          renderController(e) {
            let t = [];
            if (
              (t.push(
                r.createElement(
                  "div",
                  { className: "Label LegacyDebuggerGroup" },
                  "Pressed:",
                ),
              ),
              e.pressed)
            )
              for (let i of e.pressed)
                t.push(
                  r.createElement(
                    "div",
                    { className: "Label LegacyDebuggerButtonName" },
                    i,
                  ),
                );
            else
              t.push(
                r.createElement(
                  "div",
                  { className: "Label LegacyDebuggerButtonName" },
                  "None",
                ),
              );
            if (
              (t.push(
                r.createElement(
                  "div",
                  { className: "Label LegacyDebuggerGroup" },
                  "Touched:",
                ),
              ),
              e.touched)
            )
              for (let i of e.touched)
                t.push(
                  r.createElement(
                    "div",
                    { className: "Label LegacyDebuggerButtonName" },
                    i,
                  ),
                );
            else
              t.push(
                r.createElement(
                  "div",
                  { className: "Label LegacyDebuggerButtonName" },
                  "None",
                ),
              );
            if (
              (t.push(
                r.createElement(
                  "div",
                  { className: "Label LegacyDebuggerGroup" },
                  "Supported:",
                ),
              ),
              e.supported_buttons)
            )
              for (let i of e.supported_buttons)
                t.push(
                  r.createElement(
                    "div",
                    { className: "Label LegacyDebuggerButtonName" },
                    i,
                  ),
                );
            else
              t.push(
                r.createElement(
                  "div",
                  { className: "Label LegacyDebuggerButtonName" },
                  "None",
                ),
              );
            t.push(
              r.createElement(
                "div",
                { className: "Label LegacyDebuggerGroup" },
                "Axis:",
              ),
            );
            for (let i of e.axis)
              t.push(
                r.createElement(
                  "div",
                  { className: "Label LegacyDebuggerButtonName" },
                  "X: ",
                  i.x.toFixed(2),
                  " Y: ",
                  i.y.toFixed(2),
                ),
              );
            return t;
          }
          render() {
            return this.state.currentState
              ? r.createElement(
                  "div",
                  { className: "FlexRow" },
                  r.createElement(
                    "div",
                    { className: "FlexColumn LegacyDebuggerController" },
                    r.createElement("div", { className: "Label" }, "Left"),
                    this.renderController(this.state.currentState.left),
                  ),
                  r.createElement(
                    "div",
                    { className: "FlexColumn LegacyDebuggerController" },
                    r.createElement("div", { className: "Label" }, "Right"),
                    this.renderController(this.state.currentState.right),
                  ),
                  r.createElement(
                    "div",
                    { className: "FlexColumn LegacyDebuggerController" },
                    r.createElement("div", { className: "Label" }, "HMD"),
                    this.renderController(this.state.currentState.hmd),
                  ),
                )
              : r.createElement(
                  "div",
                  { className: "Label" },
                  (0, a.Xx)("#LegacyDebugger_NoApp"),
                );
          }
        }
        (0, n.gn)([o.ak], l.prototype, "OnLegacyInputFrame", null);
        class d extends r.Component {
          constructor(e) {
            super(e);
          }
          render() {
            return r.createElement(
              "div",
              { className: "FlexRowWithWrap" },
              r.createElement(
                "div",
                { className: "FlexFullWidthRowCentered LegacyDebuggerWrapper" },
                r.createElement(l, null),
              ),
            );
          }
        }
      },
      7726: (e, t, i) => {
        "use strict";
        i.d(t, { A: () => n, X: () => l });
        var n,
          r = i(655),
          o = i(7294),
          a = i(7056),
          s = i(1569);
        !(function (e) {
          (e[(e.HorizontalPips = 0)] = "HorizontalPips"),
            (e[(e.VerticalBattery = 1)] = "VerticalBattery");
        })(n || (n = {}));
        class l extends o.Component {
          constructor(e) {
            super(e),
              (this.m_BatteryStateChangedCallbackHandle = null),
              (this.m_DeviceRoleChangedCallbackHandle = null),
              (this.m_DeviceEventCallbackHandle = null),
              (this.batteryLevelStable = null),
              (this.state = { batteryIconPath: null, roleIconPath: null });
          }
          componentDidMount() {
            (this.m_BatteryStateChangedCallbackHandle =
              null === s.Co || void 0 === s.Co
                ? void 0
                : s.Co.RegisterForBatteryStateChangedEvents(
                    this.OnBatteryStateChanged,
                  )),
              (this.m_DeviceRoleChangedCallbackHandle =
                null === s.Co || void 0 === s.Co
                  ? void 0
                  : s.Co.RegisterForDeviceRoleChangedEvents(
                      this.OnDeviceRoleChanged,
                    )),
              (this.m_DeviceEventCallbackHandle =
                null === s.Co || void 0 === s.Co
                  ? void 0
                  : s.Co.RegisterForDeviceEvents(this.OnDeviceEvent)),
              this.UpdateControllerStatus();
          }
          componentWillUnmount() {
            this.m_BatteryStateChangedCallbackHandle &&
              (this.m_BatteryStateChangedCallbackHandle.unregister(),
              (this.m_BatteryStateChangedCallbackHandle = null)),
              this.m_DeviceRoleChangedCallbackHandle &&
                (this.m_DeviceRoleChangedCallbackHandle.unregister(),
                (this.m_DeviceRoleChangedCallbackHandle = null)),
              this.m_DeviceEventCallbackHandle &&
                (this.m_DeviceEventCallbackHandle.unregister(),
                (this.m_DeviceEventCallbackHandle = null));
          }
          UpdateControllerStatus() {
            var e;
            if (!s.Co) return;
            const t = s.Co.VRProperties.GetBoolProperty(
                this.props.trackedDeviceIndex,
                s.Uk.DeviceProvidesBatteryStatus_Bool,
              ),
              i = s.Co.VRSystem.GetControllerRoleForTrackedDeviceIndex(
                this.props.trackedDeviceIndex,
              );
            let r = !1;
            if (t) {
              const t =
                null !==
                  (e = s.Co.VRProperties.GetFloatProperty(
                    this.props.trackedDeviceIndex,
                    s.Uk.DeviceBatteryPercentage_Float,
                  )) && void 0 !== e
                  ? e
                  : 0;
              (r = s.Co.VRProperties.GetBoolProperty(
                this.props.trackedDeviceIndex,
                s.Uk.DeviceIsCharging_Bool,
              )),
                null == this.batteryLevelStable || 0 == this.batteryLevelStable
                  ? (this.batteryLevelStable = t)
                  : ((this.batteryLevelStable = Math.min(
                      this.batteryLevelStable,
                      t + l.kBatteryLevelHysteresis,
                      1,
                    )),
                    (this.batteryLevelStable = Math.max(
                      this.batteryLevelStable,
                      t - l.kBatteryLevelHysteresis,
                      0,
                    )));
            }
            let o = l.GetBatteryIcon(
                t,
                r,
                this.batteryLevelStable,
                n.HorizontalPips,
              ),
              a = this.GetRoleIcon(i);
            (o == this.state.batteryIconPath && a == this.state.roleIconPath) ||
              this.setState({ batteryIconPath: o, roleIconPath: a });
          }
          GetRoleIcon(e) {
            switch (e) {
              case s.Kg.TrackedControllerRole_RightHand:
                return "images/icons/controller_model_right.png";
              case s.Kg.TrackedControllerRole_LeftHand:
                return "images/icons/controller_model_left.png";
            }
            return null;
          }
          static GetBatteryIcon(e, t, i, r) {
            if (!e) return null;
            const o =
              r == n.VerticalBattery
                ? "images/icons/vert"
                : "images/icons/controller_model";
            return t
              ? i < 0.15
                ? o + "_charging_red.png"
                : o + "_charging.png"
              : 0 == i
                ? null
                : i < 0.15
                  ? o + "_low.png"
                  : i < 0.3
                    ? o + "_battery_1.png"
                    : i < 0.6
                      ? o + "_battery_2.png"
                      : i < 0.9
                        ? o + "_battery_3.png"
                        : o + "_battery_4.png";
          }
          OnBatteryStateChanged(e) {
            e == this.props.trackedDeviceIndex && this.UpdateControllerStatus();
          }
          OnDeviceRoleChanged() {
            this.UpdateControllerStatus();
          }
          OnDeviceEvent(e, t, i) {
            e == s.XX.Activated &&
              i == this.props.trackedDeviceIndex &&
              this.UpdateControllerStatus();
          }
          render() {
            return o.createElement(
              s.s_,
              {
                width: void 0,
                height: void 0,
                interactive: !1,
                rendermodel_component_device_index:
                  this.props.trackedDeviceIndex,
                rendermodel_component_name: "status",
                debug_name: "controllerstatus_" + this.props.trackedDeviceIndex,
              },
              o.createElement(
                "div",
                {
                  className: "ControllerStatusRoot",
                  style: { width: 256, height: 256 },
                },
                o.createElement(
                  "div",
                  { className: "ControllerStatusFrame" },
                  o.createElement(
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
                    o.createElement("img", {
                      className: "ControllerHand",
                      src: this.state.roleIconPath,
                    }),
                  ),
                  o.createElement(
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
                    o.createElement("img", {
                      className: "ControllerBattery",
                      src: this.state.batteryIconPath,
                    }),
                  ),
                ),
              ),
            );
          }
        }
        (l.kBatteryLevelHysteresis = 0.02),
          (0, r.gn)([a.ak], l.prototype, "OnBatteryStateChanged", null),
          (0, r.gn)([a.ak], l.prototype, "OnDeviceRoleChanged", null),
          (0, r.gn)([a.ak], l.prototype, "OnDeviceEvent", null);
      },
      5365: (e, t, i) => {
        "use strict";
        i.d(t, { g: () => me, _: () => de });
        var n,
          r,
          o = i(655),
          a = i(1569),
          s = i(7056),
          l = i(2188),
          d = i(7294),
          c = i(3081),
          h = i(5177),
          u = i(4979),
          p = i(3107),
          m = i(7176),
          v = i(3568),
          g = i(8495),
          _ = i(7008),
          y = i(9942),
          b = i(8583),
          S = i(1628),
          f = i(7062),
          k = i(7726),
          R = i(424);
        function M(e) {
          switch (e) {
            case r.LeftHand:
              return "/user/hand/left";
            case r.RightHand:
              return "/user/hand/right";
            default:
              return "";
          }
        }
        !(function (e) {
          (e[(e.Dashboard = 0)] = "Dashboard"),
            (e[(e.LeftHand = 1)] = "LeftHand"),
            (e[(e.RightHand = 2)] = "RightHand"),
            (e[(e.World = 3)] = "World"),
            (e[(e.Theater = 4)] = "Theater");
        })(r || (r = {}));
        let C = (n = class extends d.Component {
          constructor(e) {
            super(e),
              (this.state = {
                fOverlayScale: this.getDefaultScaleForLocation(),
                xfTransform: (0, a.Oq)(),
                sParent: M(this.props.dockLocation),
                bIsOutsideMaxDist: !1,
                destination: this.props.dockLocation,
                bIsMoving: !1,
              }),
              (this.m_nMoveDeviceIndex = a.Kf),
              (this.m_moveDeviceRole = a.Kg.TrackedControllerRole_Invalid);
          }
          componentDidMount() {
            this.setInitialTransformForLocation();
          }
          componentDidUpdate(e, t) {
            e.dockLocation != this.props.dockLocation &&
              this.setState(
                {
                  sParent: M(this.props.dockLocation),
                  xfTransform: (0, a.Oq)(),
                  bIsOutsideMaxDist: !1,
                  destination: this.props.dockLocation,
                },
                this.setInitialTransformForLocation,
              );
          }
          getDefaultScaleForLocation() {
            switch (this.props.dockLocation) {
              case r.Dashboard:
              case r.LeftHand:
              case r.RightHand:
                return 0.25;
              case r.World:
                return 0.5;
              case r.Theater:
                return 1;
            }
          }
          setInitialTransformForLocation() {
            if (this.props.xfInitial) {
              switch (this.props.dockLocation) {
                case r.LeftHand:
                case r.RightHand: {
                  let e = this.props.xfInitial,
                    t = this.state.fOverlayScale;
                  Math.abs(e.scale.x - 2) < 0.1 &&
                    (t = Math.min(2 * t, n.sfOverlayScaleMax)),
                    (e.scale = { x: 1, y: 1, z: 1 }),
                    this.setState({ xfTransform: e, fOverlayScale: t });
                  break;
                }
                case r.World: {
                  let e = this.props.xfInitial,
                    t = this.state.fOverlayScale;
                  Math.abs(e.scale.x - 1) < 0.1 &&
                    (t = Math.max(t / 2, n.sfOverlayScaleMin)),
                    (e.scale = { x: 2, y: 2, z: 1 }),
                    this.setState({ xfTransform: e, fOverlayScale: t });
                  break;
                }
              }
              return;
            }
            let e = (0, a.Oq)();
            switch (
              ((e.rotation = (0, a.UU)({ x: -45, y: 0, z: 0 })),
              this.props.dockLocation)
            ) {
              case r.Dashboard:
              case r.LeftHand:
              case r.RightHand:
                this.setState({ xfTransform: e });
                break;
              case r.World:
                let t = 0;
                a.hz
                  .getInstance()
                  .requestSGTransform(
                    "system.systemui::active_overlay_transform",
                    t,
                  )
                  .then((t) => {
                    (e.rotation = t.rotation),
                      (e.scale = { x: 2, y: 2, z: 1 }),
                      (e.translation = {
                        x: t.translation.x,
                        y: t.translation.y,
                        z: t.translation.z,
                      }),
                      this.setState({ xfTransform: e });
                  });
                break;
              case r.Theater:
                (e = (0, a.Oq)()),
                  (e.translation.y = 0.2),
                  (e.translation.z = -3),
                  this.setState({ xfTransform: e });
            }
          }
          onOverlayScaleChanged(e) {
            this.setState({ fOverlayScale: e });
          }
          computeDestination() {
            if (!this.state.bIsMoving) return;
            let e = VRHTML.GetPose(this.m_nMoveDeviceIndex, a.zq.Standing),
              t = null;
            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
              a.Kg.TrackedControllerRole_LeftHand,
            ) != a.Kf && (t = VRHTML.GetPose("/user/hand/left", a.zq.Standing));
            let i = null;
            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
              a.Kg.TrackedControllerRole_RightHand,
            ) != a.Kf &&
              (i = VRHTML.GetPose("/user/hand/right", a.zq.Standing));
            let o = [];
            switch (this.state.sParent) {
              case "/user/hand/left":
                i && o.push({ pose: i, location: r.RightHand });
                break;
              case "/user/hand/right":
                t && o.push({ pose: t, location: r.LeftHand });
                break;
              case "/user/head":
                t && o.push({ pose: t, location: r.LeftHand }),
                  i && o.push({ pose: i, location: r.RightHand });
            }
            if (0 == o.length)
              return void setTimeout(this.computeDestination, n.sfMovePulseMS);
            let s = VRHTML.MultiplyTransforms(
              e.xfDeviceToAbsoluteTracking,
              this.state.xfTransform,
            );
            o.forEach((e) => {
              let t = VRHTML.ChangeBasis(s, e.pose.xfDeviceToAbsoluteTracking);
              (0, a.LY)(t.translation) > n.sfMaxDockDist
                ? this.state.bIsOutsideMaxDist ||
                  (R.L.Instance.triggerHaptic(a.sH.SlidingEdge),
                  this.setState({
                    bIsOutsideMaxDist: !0,
                    destination: r.World,
                  }))
                : (this.state.bIsOutsideMaxDist ||
                    (this.props.dockLocation == r.World &&
                      this.state.destination == r.World)) &&
                  (R.L.Instance.triggerHaptic(a.sH.SlidingEdge),
                  this.setState({
                    bIsOutsideMaxDist: !1,
                    destination: e.location,
                  }));
            }),
              setTimeout(this.computeDestination, n.sfMovePulseMS);
          }
          startMove() {
            if (this.state.bIsMoving) return;
            if (
              (console.log(
                "Starting to move " + this.props.sOverlayKey + "...\n",
              ),
              (this.m_nMoveDeviceIndex =
                VRHTML.VROverlay.GetPrimaryDashboardDevice()),
              this.m_nMoveDeviceIndex == a.Kf)
            )
              return;
            this.m_moveDeviceRole =
              VRHTML.VRSystem.GetControllerRoleForTrackedDeviceIndex(
                this.m_nMoveDeviceIndex,
              );
            let e,
              t,
              i = VRHTML.GetPose(this.m_nMoveDeviceIndex, a.zq.Standing);
            switch (this.props.dockLocation) {
              case r.LeftHand:
                if (
                  VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                    a.Kg.TrackedControllerRole_LeftHand,
                  ) == a.Kf
                )
                  return;
                e = VRHTML.GetPose("/user/hand/left", a.zq.Standing);
                break;
              case r.RightHand:
                if (
                  VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                    a.Kg.TrackedControllerRole_RightHand,
                  ) == a.Kf
                )
                  return;
                e = VRHTML.GetPose("/user/hand/right", a.zq.Standing);
                break;
              default:
                e = {
                  xfDeviceToAbsoluteTracking: (0, a.Oq)(),
                  vVelocity: { x: 0, y: 0, z: 0 },
                  eTrackingResult: a.QZ.TrackingResult_Running_OK,
                  bPoseIsValid: !0,
                };
            }
            switch (this.m_moveDeviceRole) {
              case a.Kg.TrackedControllerRole_LeftHand:
                t = "/user/hand/left";
                break;
              case a.Kg.TrackedControllerRole_RightHand:
                t = "/user/hand/right";
                break;
              default:
                t = "/user/head";
            }
            let n = VRHTML.MultiplyTransforms(
                e.xfDeviceToAbsoluteTracking,
                this.state.xfTransform,
              ),
              o = VRHTML.ChangeBasis(n, i.xfDeviceToAbsoluteTracking);
            this.setState(
              {
                xfTransform: o,
                sParent: t,
                bIsOutsideMaxDist: this.props.dockLocation == r.World,
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
              this.state.destination == r.LeftHand
            ) {
              if (
                VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                  a.Kg.TrackedControllerRole_LeftHand,
                ) == a.Kf
              )
                return;
              e = VRHTML.GetPose("/user/hand/left", a.zq.Standing);
            }
            if (
              "/user/hand/right" == this.state.sParent ||
              this.state.destination == r.RightHand
            ) {
              if (
                VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                  a.Kg.TrackedControllerRole_RightHand,
                ) == a.Kf
              )
                return;
              t = VRHTML.GetPose("/user/hand/right", a.zq.Standing);
            }
            let i,
              n = {
                xfDeviceToAbsoluteTracking: (0, a.Oq)(),
                vVelocity: { x: 0, y: 0, z: 0 },
                eTrackingResult: a.QZ.TrackingResult_Running_OK,
                bPoseIsValid: !0,
              };
            switch (this.state.destination) {
              case r.LeftHand:
                i = e;
                break;
              case r.RightHand:
                i = t;
                break;
              default:
                i = n;
            }
            let o = VRHTML.GetPose(this.m_nMoveDeviceIndex, a.zq.Standing),
              s = VRHTML.MultiplyTransforms(
                o.xfDeviceToAbsoluteTracking,
                this.state.xfTransform,
              ),
              l = VRHTML.ChangeBasis(s, i.xfDeviceToAbsoluteTracking);
            this.setState({
              xfTransform: l,
              sParent: M(this.state.destination),
              bIsMoving: !1,
            }),
              this.props.onDockOverlay(
                this.props.sOverlayKey,
                this.state.destination,
                l,
              ),
              window.removeEventListener("mouseup", this.endMove);
          }
          render() {
            var e, t;
            if ("" == this.props.sOverlayKey || null == this.state.xfTransform)
              return null;
            let i = VRHTML.VROverlay.FindOverlay(this.props.sOverlayKey);
            if (!i) return null;
            let o = { x: 0, y: 0 };
            try {
              o = VRHTML.VROverlay.GetOverlayMouseScale(i);
            } catch (e) {
              return console.log(JSON.stringify(e)), null;
            }
            let s =
                (null !== (e = VRHTML.VROverlay.GetWidthInMeters(i)) &&
                void 0 !== e
                  ? e
                  : 1) * this.state.fOverlayScale,
              l = (s * o.y) / o.x,
              c = !this.props.bDashboardShown;
            if (this.props.dockLocation == r.Theater) {
              if (this.props.bHasSceneApp) return null;
              c = !0;
            }
            if (c) {
              let e =
                  null !==
                    (t = S.G3.settings.get(
                      "/settings/dashboard/enableLTCReflections",
                    )) &&
                  void 0 !== t &&
                  t,
                i = 0.05;
              return d.createElement(
                a.wx,
                {
                  parent_path: this.state.sParent,
                  transform: this.state.xfTransform,
                  id: "xf_widget",
                },
                d.createElement(
                  a.s_,
                  {
                    overlay_key: this.props.sOverlayKey,
                    height: l,
                    width: void 0,
                    interactive: !0,
                    undocked: !0,
                    origin: a.Ic.BottomCenter,
                  },
                  d.createElement(a.sl, {
                    mountedId: (0, a.iN)(
                      m.GN,
                      this.props.sOverlayKey + ".cursor",
                    ),
                  }),
                ),
                this.props.bDarkMode &&
                  e &&
                  d.createElement(
                    a.wx,
                    { translation: { y: 0.5 * l } },
                    d.createElement(a.bt, {
                      width: s,
                      height: l,
                      "near-z": -0.1,
                      "far-z": 0.1,
                      debug: !1,
                      specular: { color: { r: i, g: i, b: i } },
                      diffuse: { size: 10, resolution: 512 },
                    }),
                  ),
                this.props.bCaptureVideo &&
                  d.createElement(
                    a.wx,
                    { translation: { y: 0.5 * l } },
                    d.createElement(a.Ri, {
                      width: s,
                      height: l,
                      "near-z": -0.1,
                      "far-z": 0.1,
                      debug: !1,
                    }),
                  ),
              );
            }
            let p = l + n.sfOverlayTrayHeight,
              v = Math.max(s, 0.175),
              g = p / 2 - n.sfOverlayTrayHeight;
            return d.createElement(
              a.kH,
              {
                sParentPath: this.state.sParent,
                bIsMoving: this.state.bIsMoving,
                xfCurrent: this.state.xfTransform,
                id: "xf_widget",
              },
              d.createElement(
                a.wx,
                {
                  translation: { y: g, z: -0.005 },
                  scale: { x: v, y: p, z: 0.008 },
                },
                d.createElement(
                  a.VW,
                  { color: { r: 0.016, g: 0.017, b: 0.02 } },
                  d.createElement(a.gQ, { solid: !0, source: "unit_cube" }),
                ),
              ),
              d.createElement(
                a.s_,
                {
                  overlay_key: this.props.sOverlayKey,
                  height: l,
                  width: void 0,
                  interactive: !0,
                  undocked: !0,
                  origin: a.Ic.BottomCenter,
                },
                d.createElement(a.sl, {
                  mountedId: (0, a.iN)(
                    m.GN,
                    this.props.sOverlayKey + ".cursor",
                  ),
                }),
              ),
              d.createElement(
                a.s_,
                {
                  height: n.sfOverlayTrayHeight,
                  width: void 0,
                  interactive: !0,
                  origin: a.Ic.TopCenter,
                },
                d.createElement(
                  "div",
                  { className: "WindowTray" },
                  d.createElement(u.iR, {
                    additionalClassName: "WindowTraySlider",
                    min: n.sfOverlayScaleMin,
                    max: n.sfOverlayScaleMax,
                    value: this.state.fOverlayScale,
                    valueStyleVariant: u.px.OnHandle,
                    onChange: this.onOverlayScaleChanged,
                    detents: [0.25, 0.5, 1],
                    renderValue: (e) => (100 * e).toFixed(0) + "%",
                  }),
                  d.createElement(
                    h.z,
                    {
                      className: "WindowTrayButton",
                      key: "move",
                      onMouseDown: this.startMove,
                      onMouseUp: this.endMove,
                      style: { padding: "0.5em", paddingBottom: "0.25em" },
                    },
                    d.createElement("img", {
                      className: "Icon BlackToWhite",
                      src: "/dashboard/images/icons/icon_move.png",
                    }),
                  ),
                  d.createElement(
                    h.z,
                    {
                      className: "WindowTrayButton",
                      key: "undock",
                      style: { padding: "0.5em", paddingBottom: "0.25em" },
                      title: "Return to Dashboard",
                      onClick: () => {
                        this.props.onDockOverlay(
                          this.props.sOverlayKey,
                          r.Dashboard,
                        );
                      },
                    },
                    d.createElement("img", {
                      className: "Icon",
                      src: "/dashboard/images/icons/icon_return.png",
                    }),
                  ),
                ),
              ),
              this.state.bIsMoving &&
                !this.state.bIsOutsideMaxDist &&
                d.createElement(
                  d.Fragment,
                  null,
                  d.createElement(
                    a.wx,
                    {
                      parent_path:
                        this.state.destination == r.LeftHand
                          ? "/user/hand/left"
                          : "/user/hand/right",
                    },
                    d.createElement(a.x1, {
                      target_id: "xf_widget",
                      thickness: 0.001,
                      start_buffer: 0.01,
                      end_buffer: 0.01,
                    }),
                  ),
                ),
            );
          }
        });
        (C.sfMaxDockDist = 0.4),
          (C.sfMovePulseMS = 100),
          (C.sfOverlayTrayHeight = 0.025),
          (C.sfOverlayScaleMin = 0.1),
          (C.sfOverlayScaleMax = 2),
          (0, o.gn)([s.ZP], C.prototype, "onOverlayScaleChanged", null),
          (0, o.gn)([s.ZP], C.prototype, "computeDestination", null),
          (0, o.gn)([s.ZP], C.prototype, "startMove", null),
          (0, o.gn)([s.ZP], C.prototype, "endMove", null),
          (C = n = (0, o.gn)([f.Pi], C));
        var T,
          w,
          D = i(6459),
          E = i(7475);
        let x = (T = class extends d.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new a.Nv()),
              (this.m_refWindowScrollPanel = d.createRef()),
              (this.state = { desktopView: null }),
              this.m_mailbox.Init(T.k_sMailboxName);
          }
          setSiblingReferences(e) {
            this.setState({ desktopView: e });
          }
          onWindowViewCreated(e, t) {
            var i, n;
            null === (i = this.m_refWindowScrollPanel.current) ||
              void 0 === i ||
              i.scrollTo({
                left:
                  null === (n = this.m_refWindowScrollPanel.current) ||
                  void 0 === n
                    ? void 0
                    : n.scrollWidth,
                behavior: "smooth",
              });
          }
          render() {
            var e, t, i, n;
            if (
              !this.state.desktopView ||
              (null === (e = this.state.desktopView) || void 0 === e
                ? void 0
                : e.state.bIsUsingSteamDesktop)
            )
              return null;
            const r =
              this.props.bWindowViewEnabled ||
              (null === (t = this.state.desktopView) || void 0 === t
                ? void 0
                : t.state.desktopIndices.length) > 1;
            return d.createElement(
              D.j4,
              Object.assign({}, this.props, {
                additionalClassNames: this.props.bWindowViewEnabled
                  ? "DesktopTray FixedWidth"
                  : "DesktopTray",
              }),
              r &&
                d.createElement(
                  E.P,
                  {
                    scrollDirection: E.I.Horizontal,
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
                    null === (i = this.state.desktopView) || void 0 === i
                      ? void 0
                      : i.state.desktopIndices.map((e) => {
                          var t;
                          return d.createElement(D.zN, {
                            additionalClassNames: "ViewButton Fixed",
                            key: e,
                            label: e.toString(),
                            active:
                              (null === (t = this.state.desktopView) ||
                              void 0 === t
                                ? void 0
                                : t.currentDesktopIndex) == e,
                            title: (0, v.Xx)("#Desktop_X", e),
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
                        : n.state.mapWindowInfo.keys(),
                    ).map((e) => {
                      var t, i, n;
                      return d.createElement(D.zN, {
                        additionalClassNames: "ViewButton",
                        iconUrl: "/dashboard/images/icons/svr_desktop_alt.svg",
                        key: e,
                        active:
                          (null === (t = this.state.desktopView) || void 0 === t
                            ? void 0
                            : t.state.sCurrentWindowOverlayKey) == e,
                        title:
                          null ===
                            (n = this.props.mapWindows.get(
                              null === (i = this.state.desktopView) ||
                                void 0 === i
                                ? void 0
                                : i.state.mapWindowInfo.get(e).sHwnd,
                            )) || void 0 === n
                            ? void 0
                            : n.title,
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
                  d.createElement(D.zN, {
                    iconUrl: "/dashboard/images/icons/icon_add.png",
                    additionalClassNames: "AddWindow",
                    title: (0, v.Xx)("#AddView"),
                    onClick: this.props.onToggleWindowList,
                    onMouseEnter: this.props.onClearPopoverMenuTimeout,
                    onMouseLeave: () =>
                      this.props.onStartPopoverMenuTimeout(500),
                  }),
                ),
            );
          }
        });
        (x.k_sMailboxName = "systemui_desktoptray"),
          (x = T = (0, o.gn)([f.Pi], x));
        let I = (w = class extends d.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new a.Nv()),
              (this.state = {
                bIsUsingSteamDesktop: !1,
                bIsReady: !1,
                desktopIndices: [],
                mapWindowInfo: new Map(),
                sCurrentWindowOverlayKey: "",
              }),
              this.m_mailbox.Init(w.k_sMailboxName).then(() => {});
          }
          componentDidMount() {
            null ===
            (null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VROverlay.FindOverlay("valve.steam.desktop"))
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
              : this.setState({ bIsUsingSteamDesktop: !0 });
          }
          get desktopCount() {
            return this.state.desktopIndices.length;
          }
          get sCurrentOverlayKey() {
            return "" != this.state.sCurrentWindowOverlayKey
              ? this.state.sCurrentWindowOverlayKey
              : "system.desktop." + this.currentDesktopIndex;
          }
          get currentDesktopIndex() {
            var e;
            return "" != this.state.sCurrentWindowOverlayKey
              ? -1
              : null !==
                    (e = S.G3.settings.get(
                      "/settings/dashboard/desktopIndex",
                    )) && void 0 !== e
                ? e
                : 1;
          }
          get currentWindowHwnd() {
            return "" == this.state.sCurrentWindowOverlayKey
              ? ""
              : this.state.mapWindowInfo.get(
                  this.state.sCurrentWindowOverlayKey,
                ).sHwnd;
          }
          onDesktopScaleChange(e) {
            this.currentDesktopIndex > 0 &&
              S.G3.SetSettingsValue(
                "/settings/dashboard/desktopScale" + this.currentDesktopIndex,
                e,
              );
          }
          onDesktopChange(e) {
            S.G3.SetSettingsValue("/settings/dashboard/desktopIndex", e),
              this.setState({ sCurrentWindowOverlayKey: "" });
          }
          onDesktopViewUpdating() {
            this.setState({ bIsReady: !1, desktopIndices: [] });
          }
          onDesktopViewReady() {
            this.updateDesktopIndices();
          }
          onWindowViewCreated(e, t) {
            this.state.mapWindowInfo.set(e, { sHwnd: t }),
              this.setState({ sCurrentWindowOverlayKey: e });
          }
          onWindowViewClosed(e) {
            this.state.sCurrentWindowOverlayKey == e && this.onDesktopChange(1);
          }
          onWindowViewDestroyed(e) {
            this.state.mapWindowInfo.delete(e);
          }
          onWindowViewChange(e) {
            this.setState({ sCurrentWindowOverlayKey: e });
          }
          updateDesktopIndices() {
            var e;
            let t = 1,
              i = [];
            for (
              ;
              null !==
              (null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VROverlay.FindOverlay("system.desktop." + t));
            )
              i.push(t), t++;
            (null !==
              (e = S.G3.settings.get("/settings/dashboard/desktopIndex")) &&
            void 0 !== e
              ? e
              : 1) > i.length &&
              S.G3.SetSettingsValue("/settings/dashboard/desktopIndex", 1),
              this.setState({ bIsReady: !0, desktopIndices: i });
          }
          ShowDesktop() {
            this.m_mailbox.SendMessage("desktopview", {
              type: "request_show_desktop",
            });
          }
          renderControlBarButtons(e) {
            return d.createElement(
              d.Fragment,
              null,
              "" == this.state.sCurrentWindowOverlayKey &&
                d.createElement(D.zN, {
                  iconUrl: "/dashboard/images/icons/icon_showdesktop.png",
                  title: "Show Desktop",
                  tooltipTranslation: e,
                  onClick: this.ShowDesktop,
                }),
            );
          }
          render() {
            var e;
            const t =
              null ===
                (e = S.G3.settings.get("/settings/dashboard/allowCurvature")) ||
              void 0 === e ||
              e
                ? m.ml
                : null;
            return this.props.visible
              ? this.state.bIsUsingSteamDesktop
                ? d.createElement(a.sl, {
                    mountedId: (0, a.iN)(m.GN, "valve.steam.desktop"),
                  })
                : this.state.bIsReady
                  ? 0 === this.state.desktopIndices.length
                    ? d.createElement(
                        D.lL,
                        { visible: !0, summonOverlayKey: m.gB },
                        d.createElement(
                          "div",
                          { className: "NoDesktopFound" },
                          d.createElement(
                            "h2",
                            null,
                            (0, v.Xx)("#NoDesktopFound"),
                          ),
                        ),
                      )
                    : -1 == this.currentDesktopIndex
                      ? d.createElement(
                          d.Fragment,
                          null,
                          d.createElement(
                            a.s_,
                            {
                              overlay_key: this.state.sCurrentWindowOverlayKey,
                              height:
                                this.props.fActiveOverlayScale *
                                w.k_nDesktopPanelBaseHeight,
                              curvature_origin_id: t,
                              interactive: !0,
                              origin: a.Ic.BottomCenter,
                              debug_name: "System Desktop",
                            },
                            d.createElement(D.Yd, { summonOverlayKey: m.gB }),
                            d.createElement(a.sl, {
                              mountedId: (0, a.iN)(
                                m.GN,
                                this.state.sCurrentWindowOverlayKey + ".cursor",
                              ),
                            }),
                          ),
                        )
                      : d.createElement(
                          d.Fragment,
                          null,
                          d.createElement(
                            a.s_,
                            {
                              overlay_key:
                                "system.desktop." + this.currentDesktopIndex,
                              height:
                                this.props.fActiveOverlayScale *
                                w.k_nDesktopPanelBaseHeight,
                              curvature_origin_id: t,
                              interactive: !0,
                              origin: a.Ic.BottomCenter,
                              debug_name: "System Desktop",
                            },
                            d.createElement(D.Yd, { summonOverlayKey: m.gB }),
                            d.createElement(a.sl, {
                              mountedId: (0, a.iN)(
                                m.GN,
                                "system.desktop." +
                                  this.currentDesktopIndex +
                                  ".cursor",
                              ),
                            }),
                          ),
                        )
                  : d.createElement(
                      D.lL,
                      { visible: !0, summonOverlayKey: m.gB },
                      d.createElement(
                        "div",
                        { className: "NoDesktopFound" },
                        d.createElement(
                          "h2",
                          null,
                          (0, v.Xx)("#DesktopViewsUpdating"),
                        ),
                      ),
                    )
              : null;
          }
        });
        (I.k_sMailboxName = "systemui_desktopview"),
          (I.k_nDesktopPanelBaseHeight = 2),
          (0, o.gn)([l.Fl], I.prototype, "desktopCount", null),
          (0, o.gn)([l.Fl], I.prototype, "sCurrentOverlayKey", null),
          (0, o.gn)([l.Fl], I.prototype, "currentDesktopIndex", null),
          (0, o.gn)([l.Fl], I.prototype, "currentWindowHwnd", null),
          (0, o.gn)([s.ZP], I.prototype, "onDesktopScaleChange", null),
          (0, o.gn)([s.ZP], I.prototype, "onDesktopChange", null),
          (0, o.gn)([s.ZP], I.prototype, "onDesktopViewUpdating", null),
          (0, o.gn)([s.ZP], I.prototype, "onDesktopViewReady", null),
          (0, o.gn)([s.ZP], I.prototype, "onWindowViewChange", null),
          (0, o.gn)([s.ZP], I.prototype, "ShowDesktop", null),
          (I = w = (0, o.gn)([f.Pi], I));
        var P,
          V = i(2743),
          O = i(7095),
          L = i(8980);
        let H = (P = class extends d.Component {
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
              this.props.fallbackImageUrl &&
                e.push(this.props.fallbackImageUrl),
              (this.m_imageSources = e.filter(
                (e) => !P.s_failedImages.includes(e),
              )),
              (this.m_imageIndex = -1);
          }
          componentDidMount() {
            this.m_imageIndex < 0 &&
              ((this.m_loadingImage = new window.Image()),
              this.loadNextImage());
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
              P.s_failedImages.push(this.m_imageSources[this.m_imageIndex]),
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
              t = d.createElement("div", { className: "Icon", style: e });
            return (
              this.state.width / this.state.height != 600 / 900 &&
                (t = d.createElement(
                  d.Fragment,
                  null,
                  d.createElement("div", {
                    className: "IconBackgroundBlur",
                    style: e,
                  }),
                  t,
                )),
              d.createElement(
                "div",
                {
                  className: (0, L.LJ)("PortraitAppImageContainer", [
                    "Fallback",
                    this.state.isFallback,
                  ]),
                },
                this.state.image && t,
                d.createElement(
                  "div",
                  { className: "Title" },
                  this.props.title,
                ),
                this.props.children && this.props.children,
              )
            );
          }
        });
        (H.defaultProps = {
          fallbackImageUrl: "images/appimage_default_portrait.png",
        }),
          (H.s_failedImages = []),
          (0, o.gn)([s.ak], H.prototype, "loadNextImage", null),
          (0, o.gn)([s.ak], H.prototype, "onLoad", null),
          (0, o.gn)([s.ak], H.prototype, "onError", null),
          (H = P = (0, o.gn)([f.Pi], H));
        var B,
          N = i(9595);
        class A extends d.Component {
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
            const e = y.H.Instance.SceneAppKey;
            O.f.OpenDeepLink(O.P.Name, e);
          }
          onOpenAppVideoSettings() {
            const e = y.H.Instance.SceneAppKey;
            V.Ux.OpenDeepLink(V.Yw.Name, e);
          }
          render() {
            var e;
            const t = y.H.Instance.SceneAppKey,
              i = y.H.Instance.SceneAppName,
              n = y.H.Instance.SceneApplicationState,
              r = y.H.Instance.SceneAppIsHome,
              o = S.G3.settings.get("/settings/dashboard/allowAppQuitting"),
              s = !(
                null !==
                  (e = S.G3.settings.get("/settings/dashboard/arcadeMode")) &&
                void 0 !== e &&
                e
              ),
              l = S.G3.apps && S.G3.apps.find((e) => e.key == t);
            let c = !1;
            switch (n) {
              case a.xY.Quitting:
              case a.xY.Starting:
              case a.xY.Waiting:
                c = !0;
            }
            const u = ((e) => {
              if (null == e) return "";
              let t = e.image_path;
              return (
                t.startsWith("/app/image?") && (t += "&aspect=portrait"), t
              );
            })(l);
            return d.createElement(
              D.lL,
              {
                visible: this.props.visible,
                debugName: "nowplaying",
                additionalClassNames: "NowPlaying",
                summonOverlayKey: m.PF,
              },
              d.createElement(
                "div",
                { className: "ArtworkColumn" },
                d.createElement(H, { appkey: t, title: i, imageUrl: u }),
              ),
              d.createElement(
                "div",
                { className: "InfoColumn" },
                d.createElement("div", { className: "NowPlayingAppTitle" }, i),
                d.createElement(
                  h.z,
                  {
                    className: "ButtonControl Colorful",
                    onClick: this.onReturnToGame,
                  },
                  r
                    ? (0, v.Xx)("#Return_To_Home")
                    : (0, v.Xx)("#Return_To_Game"),
                ),
                s &&
                  d.createElement(
                    N.ls,
                    {
                      icon: N.uc.PopOut,
                      onClick: this.onOpenAppControllerBindingSettings,
                    },
                    (0, v.Xx)("#Controller_Bindings"),
                  ),
                s &&
                  d.createElement(
                    N.ls,
                    { icon: N.uc.PopOut, onClick: this.onOpenAppVideoSettings },
                    (0, v.Xx)("#App_Video_Settings"),
                  ),
                !r &&
                  o &&
                  d.createElement(
                    h.z,
                    { className: "ButtonControl", onClick: this.onExitApp },
                    (0, v.Xx)("#Exit_Game"),
                  ),
              ),
            );
          }
        }
        (0, o.gn)([s.ak], A.prototype, "onExitApp", null),
          (0, o.gn)([s.ak], A.prototype, "onReturnToGame", null),
          (0, o.gn)(
            [s.ak],
            A.prototype,
            "onOpenAppControllerBindingSettings",
            null,
          ),
          (0, o.gn)([s.ak], A.prototype, "onOpenAppVideoSettings", null),
          (function (e) {
            (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
          })(B || (B = {}));
        const F = (e) =>
          d.createElement(
            "div",
            {
              className: (0, L.LJ)("ButtonContainer", B[e.side], [
                "Disabled",
                !1 === e.enabled,
              ]),
            },
            d.createElement(
              h.z,
              { className: "ButtonControl", onClick: e.onClick },
              e.side == B.Left
                ? d.createElement(d.Fragment, null, "‹")
                : d.createElement(d.Fragment, null, "›"),
            ),
          );
        class U extends d.Component {
          constructor(e) {
            super(e),
              (this.m_refScrollPanel = d.createRef()),
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
                (this.updateButtonVisibilities(),
                (this.m_nLastScrollWidth = e));
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
            const i = this.m_refScrollPanel.current;
            if (!i) return;
            if (i.isThrown)
              return void i.cancelThrowing(() => {
                (this.m_bScrolling = !1), this.scroll(e);
              });
            const n = i.children;
            if (!n || 0 == n.length) return;
            const r =
                null !== (t = this.props.paginationAlignmentOffset) &&
                void 0 !== t
                  ? t
                  : 0,
              o = n[0],
              a = this.m_bScrolling
                ? this.m_nCurrentScrollTarget
                : i.scrollLeft,
              s = o.getBoundingClientRect().left + i.scrollLeft,
              l = o.clientWidth,
              d = i.clientWidth,
              c = Math.floor(d / l) - 1,
              h = Math.round((a - s + r + 1) / l) + c * e - 0.4999,
              u = h > 0 ? h * l + s - r : 0;
            this.scrollToPosition(u);
          }
          scrollToPosition(e) {
            const t = this.m_refScrollPanel.current;
            t &&
              (t.scrollTo({ left: e, behavior: "smooth" }),
              (this.m_bScrolling = !0),
              (this.m_nCurrentScrollTarget = e));
          }
          render() {
            return d.createElement(
              "div",
              {
                className: (0, L.LJ)(
                  "PaginatedCarousel",
                  this.props.additionalClassNames,
                ),
              },
              d.createElement(
                E.P,
                {
                  ref: this.m_refScrollPanel,
                  scrollDirection: E.I.Horizontal,
                  onScroll: this.onScroll,
                },
                this.props.children,
              ),
              (!1 === this.state.bScrolledToStart ||
                !1 === this.state.bScrolledToEnd) &&
                d.createElement(
                  "div",
                  { className: "PaginationButtons" },
                  null !== this.state.bScrolledToStart &&
                    d.createElement(F, {
                      side: B.Left,
                      enabled: !this.state.bScrolledToStart,
                      onClick: this.onLeftButtonClick,
                    }),
                  null !== this.state.bScrolledToEnd &&
                    d.createElement(F, {
                      side: B.Right,
                      enabled: !this.state.bScrolledToEnd,
                      onClick: this.onRightButtonClick,
                    }),
                ),
            );
          }
        }
        (0, o.gn)([s.ZP], U.prototype, "onAnimationFrame", null),
          (0, o.gn)([s.ZP], U.prototype, "onScroll", null),
          (0, o.gn)([s.ZP], U.prototype, "onLeftButtonClick", null),
          (0, o.gn)([s.ZP], U.prototype, "onRightButtonClick", null);
        let W = class extends d.Component {
          constructor(e) {
            super(e),
              (this.m_scrollWatcher = new L.cB()),
              (this.m_refAnchoredParentPortal = d.createRef()),
              (this.m_refButton = d.createRef()),
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
              d.createElement(
                "div",
                {
                  className: (0, L.LJ)(
                    "AppButtonContainer",
                    [
                      "AppOwned",
                      S.G3.probablyOwnedAppkeys.has(this.props.appkey),
                    ],
                    ["ShowingPopovers", this.shouldShowHoverContents],
                  ),
                },
                d.createElement(
                  h.z,
                  {
                    className: "AppButton",
                    ref: this.m_refButton,
                    onMouseEnter: this.buttonMouseEnter,
                    onMouseLeave: this.buttonMouseLeave,
                    onClick: this.props.onClick,
                  },
                  d.createElement(H, Object.assign({}, e), this.props.children),
                ),
              )
            );
          }
        };
        (0, o.gn)([s.ZP], W.prototype, "buttonMouseEnter", null),
          (0, o.gn)([s.ZP], W.prototype, "buttonMouseLeave", null),
          (0, o.gn)([s.ZP], W.prototype, "onParentScrollStop", null),
          (W = (0, o.gn)([f.Pi], W));
        const z = () =>
            d.createElement("div", { className: "AppButton Placeholder" }),
          G = (e) => {
            var t;
            const i = !!e.loading,
              n = null !== (t = e.apps) && void 0 !== t ? t : [];
            let r = "AppCarousel";
            return (
              e.className && (r += " " + e.className),
              (r += " NoAnimations"),
              d.createElement(
                U,
                { additionalClassNames: r, paginationAlignmentOffset: -20 },
                i &&
                  d.createElement(
                    d.Fragment,
                    null,
                    d.createElement(z, null),
                    d.createElement(z, null),
                    d.createElement(z, null),
                    d.createElement(z, null),
                  ),
                !i &&
                  n.map((e) =>
                    d.createElement(W, Object.assign({ key: e.appkey }, e)),
                  ),
              )
            );
          };
        var K = i(9669),
          q = i.n(K);
        function X() {
          return q()
            .get(
              "https://steamcommunity.com/steamvr/ajaxgethomedata/?include_apps=1&include_free_apps=1&num_apps=20",
            )
            .then((e) => e.data);
        }
        const Q = () =>
          d.createElement(
            h.z,
            {
              className: "ButtonControl WithIcon PanelTopRight",
              onClick: () =>
                b.y.Instance.openBigPictureStore(null, b.b.QuickStore),
            },
            d.createElement("span", null, (0, v.Xx)("#BrowseAll")),
            d.createElement("img", {
              className: "Icon BlackToWhite",
              src: "/dashboard/images/icons/svr_store.svg",
            }),
          );
        var j;
        !(function (e) {
          (e[(e.Free = 0)] = "Free"),
            (e[(e.Singleplayer = 1)] = "Singleplayer"),
            (e[(e.Multiplayer = 2)] = "Multiplayer");
        })(j || (j = {}));
        let Y = class extends d.Component {
          constructor(e) {
            super(e), (this.state = { storeData: null });
          }
          componentDidMount() {
            X().then((e) => this.setState({ storeData: e }));
          }
          openSteamApp(e, t, i) {
            g.e.instance.RecordUIEvent(
              "QuickStoreAppClick",
              j[t].toLowerCase() + ":" + i,
              `steam.app.${e}`,
            ),
              b.y.Instance.openBigPictureStore(e, b.b.QuickStore);
          }
          makeAppButtonList() {
            let e = [];
            switch (this.props.section) {
              case j.Free:
                e = this.state.storeData.apps_free;
                break;
              case j.Singleplayer:
                e = this.state.storeData.apps_singleplayer;
                break;
              case j.Multiplayer:
                e = this.state.storeData.apps_multiplayer;
            }
            return e.map((e, t) => {
              const i = `steam.app.${e.appid}`;
              return {
                key: i,
                appkey: i,
                title: e.name,
                imageUrl: e.logo,
                onClick: () =>
                  this.openSteamApp(e.appid, this.props.section, t),
              };
            });
          }
          render() {
            return this.state.storeData
              ? d.createElement(G, { apps: this.makeAppButtonList() })
              : d.createElement(G, { loading: !0 });
          }
        };
        Y = (0, o.gn)([f.Pi], Y);
        class Z extends d.Component {
          constructor(e) {
            super(e), (this.state = {});
          }
          render() {
            return d.createElement(
              D.lL,
              {
                visible: this.props.visible,
                additionalClassNames: "QuickStore",
                summonOverlayKey: m.wB,
              },
              d.createElement(Q, null),
              d.createElement(
                "h2",
                null,
                (0, v.Xx)("#StoreSection_TopSingleplayer"),
              ),
              d.createElement(Y, { section: j.Singleplayer }),
              d.createElement(
                "h2",
                null,
                (0, v.Xx)("#StoreSection_TopMultiplayer"),
              ),
              d.createElement(Y, { section: j.Multiplayer }),
              d.createElement("h2", null, (0, v.Xx)("#StoreSection_TopFree")),
              d.createElement(Y, { section: j.Free }),
            );
          }
        }
        var J;
        const $ = () =>
            d.createElement(
              h.z,
              {
                className: "ButtonControl WithIcon PanelTopRight",
                onClick: () =>
                  b.y.Instance.openBigPictureLibrary(null, b.b.QuickLaunch),
              },
              d.createElement("span", null, (0, v.Xx)("#BrowseAll")),
              d.createElement("img", {
                className: "Icon BlackToWhite",
                src: "/dashboard/images/icons/svr_items.svg",
              }),
            ),
          ee = () =>
            d.createElement(
              h.z,
              {
                className: "ButtonControl Colorful WelcomeBrowseStore",
                onClick: () =>
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VROverlay.ShowDashboard(m.wB),
              },
              d.createElement("span", null, (0, v.Xx)("#WelcomeBrowseStore")),
            ),
          te = () =>
            d.createElement(
              h.z,
              {
                className: "ButtonControl Colorful WelcomeInstall",
                onClick: () =>
                  b.y.Instance.openBigPictureLibrary(null, b.b.QuickLaunch),
              },
              d.createElement("span", null, (0, v.Xx)("#WelcomeInstall")),
            );
        class ie extends d.Component {
          constructor(e) {
            super(e), (this.state = { storeData: null });
          }
          componentDidMount() {
            X().then((e) => this.setState({ storeData: e }));
          }
          render() {
            let e = [];
            if (this.state.storeData) {
              let t = this.state.storeData.apps_singleplayer.flatMap((e, t) => [
                  this.state.storeData.apps_singleplayer[t],
                  this.state.storeData.apps_multiplayer[t],
                  this.state.storeData.apps_free[t],
                ]),
                i = new Set();
              for (; e.length < 12 && t.length; ) {
                for (; i.has(t[0].appid); ) t.shift();
                let n = t.shift();
                i.add(n.appid),
                  e.push(
                    d.createElement(
                      h.z,
                      {
                        key: `appid_${n.appid}`,
                        className: `WelcomeFloatingApp WelcomeFloatingApp${e.length}`,
                        onClick: () =>
                          b.y.Instance.openBigPictureStore(
                            n.appid,
                            b.b.QuickLaunch,
                          ),
                      },
                      d.createElement("img", { src: n.logo }),
                    ),
                  );
              }
            }
            return d.createElement(
              "div",
              { className: "QuickLaunchWelcome" },
              e,
              d.createElement(
                "div",
                { className: "QuickLaunchWelcomePrompt" },
                d.createElement(
                  "div",
                  { className: "QuickLaunchWelcomeHeader" },
                  (0, v.Xx)("#WelcomeHeader"),
                ),
                d.createElement(
                  "div",
                  { className: "QuickLaunchWelcomeMessage" },
                  (0, v.Xx)("#WelcomeMessage"),
                ),
                d.createElement(ee, null),
                d.createElement(te, null),
              ),
            );
          }
        }
        let ne = (J = class extends d.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new a.Nv()),
              (this.state = {}),
              this.m_mailbox.Init("systemui_quicklaunch");
          }
          launchApplication(e, t, i) {
            var n, r;
            g.e.instance.RecordUIEvent(
              "QuickLaunchAppClick",
              (t ? "top" : "bottom") + ":" + i,
              e.key,
            ),
              null === (r = (n = this.props).onGameLaunched) ||
                void 0 === r ||
                r.call(n, e),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRApplications.LaunchApplication(e.key);
          }
          makeAppButtonList() {
            let e = [];
            if (null != S.G3.apps)
              for (let t of S.G3.apps)
                t.is_internal ||
                  (t.is_dashboard_overlay && !t.show_overlay_in_quicklaunch) ||
                  t.is_hidden ||
                  t.is_instance ||
                  J.s_setBlacklistedAppkeys.has(t.key) ||
                  e.push(t);
            e.sort((e, t) => {
              let i = t.library_priority - e.library_priority;
              return 0 == i && (i = t.last_launch - e.last_launch), i;
            });
            const t = (e) => {
              let t = e.image_path;
              return (
                t.startsWith("/app/image?") && (t += "&aspect=portrait"), t
              );
            };
            return e.map((e, i) => {
              let n = i;
              const r = i < J.TOP_ROW_LENGTH;
              return (
                r || (n -= J.TOP_ROW_LENGTH),
                {
                  key: e.key,
                  appkey: e.key,
                  title: e.name,
                  imageUrl: t(e),
                  onClick: () => this.launchApplication(e, r, n),
                  children: d.createElement(
                    d.Fragment,
                    null,
                    d.createElement("div", { className: "PlayIconFade" }),
                    d.createElement("img", {
                      className: "PlayIcon",
                      src: "/dashboard/images/icons/svr_play.svg",
                    }),
                  ),
                }
              );
            });
          }
          onRoomSetup() {
            VRHTML.VRDashboardManager.HideDashboard("RoomSetup"),
              this.m_mailbox.SendMessage("driver_hmd", { type: "room_setup" });
          }
          render() {
            var e;
            let t,
              i = this.makeAppButtonList();
            const n =
                0 == i.length ||
                S.G3.settings.get("/settings/dashboard/forceWelcomeScreen"),
              r =
                0 == i.length ||
                S.G3.settings.get("/settings/dashboard/hideBigPictureLibrary"),
              o =
                0 == i.length ||
                (null !==
                  (e = S.G3.settings.get(
                    "/settings/dashboard/showRoomSetup",
                  )) &&
                  void 0 !== e &&
                  e);
            if (n) t = d.createElement(ie, null);
            else {
              let e = i.slice(0, J.TOP_ROW_LENGTH),
                n = i.slice(J.TOP_ROW_LENGTH);
              t = d.createElement(
                d.Fragment,
                null,
                !r && d.createElement($, null),
                o &&
                  d.createElement(
                    h.z,
                    {
                      className: "ButtonControl WithIcon PanelTopRight",
                      onClick: this.onRoomSetup,
                    },
                    d.createElement("span", null, (0, v.Xx)("#RoomSetup")),
                    d.createElement("img", {
                      className: "Icon BlackToWhite",
                      src: "/dashboard/images/icons/svr_recenter.svg",
                    }),
                  ),
                d.createElement("h2", null, (0, v.Xx)("#RecentlyPlayed")),
                d.createElement(G, { className: "TopRow", apps: e }),
                d.createElement(G, { className: "BottomRow", apps: n }),
              );
            }
            return d.createElement(
              D.lL,
              {
                visible: this.props.visible,
                scrollable: !n,
                debugName: "homepanel",
                additionalClassNames: "QuickLaunch",
                summonOverlayKey: m.O5,
              },
              t,
            );
          }
        });
        (ne.TOP_ROW_LENGTH = 4),
          (ne.s_setBlacklistedAppkeys = new Set([
            "openvr.tool.steamvr_room_setup",
            "openvr.tool.steamvr_media_player",
            "openvr.tool.steamvr_desktop_gametheatre",
            "openvr.tool.steamvr_tutorial",
            "openvr.tool.steamvr_environments",
            "openvr.tool.steamvr_environments_tools",
            m.W4,
            m.jW,
          ])),
          (0, o.gn)([s.ak], ne.prototype, "onRoomSetup", null),
          (ne = J = (0, o.gn)([f.Pi], ne));
        var re = i(16);
        const oe = d.createContext(void 0);
        let ae = class extends d.Component {
          constructor(e) {
            super(e), (this.state = { xfTransform: (0, a.Oq)(), sParent: "" });
          }
          render() {
            return d.createElement(
              a.sO,
              {
                sParentPath: this.state.sParent,
                xfCurrent: this.state.xfTransform,
                id: this.props.id,
              },
              d.createElement(
                oe.Provider,
                { value: this },
                this.props.children,
              ),
            );
          }
        };
        ae = (0, o.gn)([f.Pi], ae);
        let se = class extends d.Component {
          constructor(e) {
            super(e),
              (this.state = {
                xfTransform: this.props.xfTransform
                  ? this.props.xfTransform
                  : (0, a.Oq)(),
                bActive: !1,
              });
          }
          componentDidUpdate(e, t) {
            e.bVisible != this.props.bVisible &&
              (this.props.bVisible || this.endMove()),
              e.xfTransform != this.props.xfTransform &&
                this.setState({
                  xfTransform: this.props.xfTransform
                    ? this.props.xfTransform
                    : (0, a.Oq)(),
                });
          }
          startMove() {
            let e,
              t = VRHTML.VROverlay.GetPrimaryDashboardDevice();
            if (t != a.Kf) {
              switch (
                VRHTML.VRSystem.GetControllerRoleForTrackedDeviceIndex(t)
              ) {
                case a.Kg.TrackedControllerRole_LeftHand:
                  e = "/user/hand/left/pose/tip";
                  break;
                case a.Kg.TrackedControllerRole_RightHand:
                  e = "/user/hand/right/pose/tip";
                  break;
                default:
                  e = "/user/head";
              }
              this.context.setState({ sParent: e }),
                this.setState({ bActive: !0 }),
                window.addEventListener("mouseup", this.endMove),
                this.props.onStartMove && this.props.onStartMove();
            }
          }
          endMove() {
            this.context.setState({ sParent: "", nHandleSGID: 0 }),
              this.setState({ bActive: !1 }),
              window.removeEventListener("mouseup", this.endMove),
              this.props.onEndMove && this.props.onEndMove();
          }
          render() {
            return null == this.state.xfTransform
              ? null
              : d.createElement(
                  d.Fragment,
                  null,
                  " ",
                  this.props.bVisible &&
                    d.createElement(
                      a.wx,
                      null,
                      d.createElement(
                        a.Dd,
                        { value: this.props.opacity },
                        " ",
                        d.createElement(
                          a.VW,
                          { color: this.props.tint },
                          d.createElement(
                            a.s_,
                            {
                              width: 0.25 * me.k_nControlBarWidthMeters,
                              interactive: !0,
                              debug_name: "DashboardGrabHandle",
                              origin: a.Ic.BottomCenter,
                              curvature_origin_id:
                                this.props.curvature_origin_id,
                              hide_lasermouse_when_clicking: !0,
                            },
                            d.createElement(
                              h.z,
                              {
                                className: "GrabHandleButton",
                                key: "move",
                                onMouseDown: this.startMove,
                                onMouseUp: this.endMove,
                              },
                              d.createElement("div", {
                                className: (0, L.LJ)("GrabHandleBar", [
                                  "ForceActive",
                                  this.state.bActive,
                                ]),
                              }),
                            ),
                          ),
                        ),
                        " ",
                      ),
                      " ",
                    ),
                  " ",
                );
          }
        };
        (se.contextType = oe),
          (0, o.gn)([s.ZP], se.prototype, "startMove", null),
          (0, o.gn)([s.ZP], se.prototype, "endMove", null),
          (se = (0, o.gn)([f.Pi], se));
        var le,
          de,
          ce,
          he = i(3619),
          ue = i(4138);
        i(9462),
          (function (e) {
            (e[(e.Near = 0)] = "Near"),
              (e[(e.Middle = 1)] = "Middle"),
              (e[(e.Far = 2)] = "Far"),
              (e[(e.Screenshot_Only = 255)] = "Screenshot_Only");
          })(de || (de = {}));
        class pe extends d.Component {
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
        !(function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Power = 1)] = "Power"),
            (e[(e.ExternalOverlays = 2)] = "ExternalOverlays"),
            (e[(e.Volume = 3)] = "Volume"),
            (e[(e.Windows = 4)] = "Windows");
        })(ce || (ce = {}));
        let me = (le = class extends d.Component {
          constructor(e) {
            super(e),
              (this.m_mapExternalOverlays = {}),
              (this.m_setSuppressingFade = new Set()),
              (this.m_mailbox = new a.Nv()),
              (this.m_timeoutPopoverMenuHide = 0),
              (this.m_refPopoverMenu = d.createRef()),
              (this.m_appStateChangedAutorunDisposer = null),
              (this.m_refDesktopView = d.createRef()),
              (this.m_refDesktopTray = d.createRef()),
              (this.m_refOverlayTransform = d.createRef()),
              (this.m_refVolumeTray = d.createRef()),
              (this.m_activeOverlayThatVanished = void 0),
              (this.m_bUserManuallySwitchToOldLibrary = !1),
              (this.m_bWaitingOnInitialOverlayToAutoShow = !1),
              (this.m_bQuickLaunchShouldReturnToBigPicture = !1),
              (this.m_bQuickStoreShouldReturnToBigPicture = !1),
              (this.m_roomViewChangedEventHandle = null),
              (this.m_linkStreamActiveEventHandle = null),
              (this.m_dashboardThumbnailsChangedEventHandle = null),
              (this.m_miscEventHandles = []),
              (this.state = {
                bShown: !1,
                sActiveOverlayID: null,
                bDarkMode: !1,
                bMuted: !1,
                bGrabbed: !1,
                sLastShownAppKey: "",
                eIncognitoMode: a.Qu.Unavailable,
                bStreamVideo: !1,
                eShowPopoverMenu: ce.None,
                setForcingBoundsVisible: {},
                mapWindows: new Map(),
                desktopViewDebugInfo: {
                  inputFrameTime: 0,
                  mapOverlayFrameTimes: new Map(),
                },
                bWindowViewEnabled: !1,
                mapOverlayState: new Map(),
                bLaserMouseSuppressionActive: !1,
                bPlacementModeActive: !1,
                bLinkStreamActive: !1,
                mapPortals: new Map(),
              }),
              (window.setDashboardScale = (e) => (le.s_dashboardUserScale = e)),
              (window.setDashboardDistance = (e) =>
                (le.s_dashboardUserDistance = e)),
              S.G3.Init(!1),
              a.hz.getInstance(),
              this.m_mailbox.Init(le.k_sDashboardMailboxName).then(() => {
                this.m_mailbox.RegisterHandler(
                  le.k_sSetDashboardFadeSupressionMessage,
                  this.onSetDashboardFadeSuppression,
                ),
                  this.m_mailbox.RegisterHandler(
                    le.k_sDashboardOverlayCreatedMessage,
                    this.onDashboardOverlayCreated,
                  ),
                  this.m_mailbox.RegisterHandler(
                    le.k_sDashboardOverlayDestroyedMessage,
                    this.onDashboardOverlayDestroyed,
                  ),
                  this.m_mailbox.RegisterHandler(
                    le.k_sUpdateDashboardTabsMessage,
                    this.onUpdateDashboardTabs,
                  ),
                  this.m_mailbox.RegisterHandler(
                    le.k_sWindowViewCreatedMessage,
                    this.onWindowViewCreated,
                  ),
                  this.m_mailbox.RegisterHandler(
                    le.k_sWindowViewDestroyedMessage,
                    this.onWindowViewDestroyed,
                  ),
                  this.m_mailbox.RegisterHandler(
                    le.k_sUpdateWindowListMessage,
                    this.onUpdateWindowList,
                  ),
                  this.m_mailbox.RegisterHandler(
                    le.k_sUpdateDebugInfoMessage,
                    this.onUpdateDebugInfo,
                  ),
                  this.m_mailbox.RegisterHandler(
                    le.k_sSetDashboardForceBoundsVisible,
                    this.onSetDashboardForceBoundsVisible,
                  ),
                  this.m_mailbox.RegisterHandler(
                    le.k_sLaserMouseSuppressionUpdate,
                    this.onLaserMouseSuppressionUpdate,
                  ),
                  this.m_mailbox.RegisterHandler(
                    "show_dashboard_requested",
                    this.onShowDashboardRequested,
                  ),
                  this.m_mailbox.RegisterHandler(
                    "hide_dashboard_requested",
                    this.onHideDashboardRequested,
                  ),
                  this.m_mailbox.RegisterHandler(
                    "hide_theater_mode",
                    this.onHideTheaterMode,
                  );
              });
          }
          componentDidMount() {
            (window.Dashboard = this),
              (this.m_roomViewChangedEventHandle =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRCompositor.RegisterForRoomViewChangedEvents(
                      this.onRoomViewChanged,
                    )),
              (this.m_linkStreamActiveEventHandle =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.RegisterForLinkStreamActiveEvents(
                      this.onLinkStreamActiveEvents,
                    )),
              (this.m_dashboardThumbnailsChangedEventHandle =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.RegisterForOverlayThumbnailsChanged(() =>
                      this.forceUpdate(),
                    ));
            const e =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.GetVRStartupReason(),
              t =
                e == a.a0.AppLaunch_Unknown ||
                e == a.a0.AppLaunch_Steam ||
                e == a.a0.Unknown,
              i = S.G3.settings.get(
                "/settings/dashboard/allowDashboardAutoLaunchWithSteamVRHome",
              ),
              n = S.G3.settings.get("/settings/steamvr/enableHomeApp"),
              r = S.G3.settings.get(m.y3);
            ((t || (!i && n)) && !r) ||
              ((this.m_bWaitingOnInitialOverlayToAutoShow = !0),
              setTimeout(
                () =>
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VROverlay.ShowDashboard(null != r ? r : ""),
                500,
              )),
              (this.m_appStateChangedAutorunDisposer = (0, l.EH)(() => {
                const e = y.H.Instance.SceneApplicationState != a.xY.None;
                this.isOverlayActive(m.PF) && !e && this.switchToHomeOverlay();
              })),
              VRHTML.VRDashboardManager.GetDashboardOverlayKeys().forEach(
                (e) => {
                  this.initializeOverlayState(e);
                },
              ),
              this.updateSiblingReferences();
          }
          componentDidUpdate(e, t) {
            var i;
            const n = this.getActiveOverlaySummonKey();
            let r = !1;
            if (
              (t.bShown !== this.state.bShown &&
                (p.G.Instance.playSound(
                  this.state.bShown ? p.y.DashboardOpen : p.y.DashboardClose,
                ),
                (r = !0)),
              this.state.bShown &&
                !r &&
                t.sActiveOverlayID != this.state.sActiveOverlayID)
            )
              switch (n) {
                case m.A4:
                  p.G.Instance.playSound(p.y.ThemeSettings);
                  break;
                case m.gB:
                  p.G.Instance.playSound(p.y.ThemeDesktop);
                  break;
                case m.O5:
                  p.G.Instance.playSound(p.y.ThemeLibrary);
                  break;
                case m.wB:
                  p.G.Instance.playSound(p.y.ThemeStore);
                  break;
                case m.PF:
                  p.G.Instance.playSound(p.y.ThemeNowPlaying);
              }
            const o = this.getActiveOverlayKey(),
              a = o ? this.state.mapOverlayState.get(o) : null,
              s = o ? t.mapOverlayState.get(o) : null,
              l = a && s && a.fScale != s.fScale;
            if (
              ((t.sActiveOverlayID != this.state.sActiveOverlayID || l) &&
                a &&
                this.isDesktopOverlayActive() &&
                (null === (i = this.m_refDesktopView.current) ||
                  void 0 === i ||
                  i.onDesktopScaleChange(a.fScale)),
              t.sActiveOverlayID != this.state.sActiveOverlayID &&
                this.isOverlayActive(m.Y8))
            )
              switch (b.y.Instance.lastBigPictureEntryPoint) {
                case b.b.QuickLaunch:
                  this.m_bQuickLaunchShouldReturnToBigPicture = !0;
                  break;
                case b.b.QuickStore:
                  this.m_bQuickStoreShouldReturnToBigPicture = !0;
              }
            t.bLinkStreamActive,
              this.state.bLinkStreamActive,
              this.updateSiblingReferences();
          }
          initializeOverlayState(e) {
            S.G3.GetAppInfo(e).then((t) => {
              var i;
              let n = 1;
              if (e.startsWith("system.desktop.")) {
                let t = "/settings/dashboard/desktopScale" + e.split(".")[2];
                n = null !== (i = S.G3.settings.get(t)) && void 0 !== i ? i : 1;
              }
              let o = {
                dockLocation: r.Dashboard,
                refOverlayWidget: d.createRef(),
                xfInitial: null,
                fScale: n,
              };
              ((null == t ? void 0 : t.starts_theater_mode) ||
                "steamlink_openvr-overlay" == e) &&
                (this.state.mapOverlayState.forEach((e, t) => {
                  e.dockLocation == r.Theater && (e.dockLocation = r.Dashboard);
                }),
                (o.dockLocation = r.Theater),
                "steamlink_openvr-overlay" == e &&
                  (null === VRHTML ||
                    void 0 === VRHTML ||
                    VRHTML.VRDashboardManager.HideDashboard("theater_mode"))),
                this.state.mapOverlayState.set(e, o);
            });
          }
          updateSiblingReferences() {
            var e;
            null === (e = this.m_refDesktopTray.current) ||
              void 0 === e ||
              e.setSiblingReferences(this.m_refDesktopView.current);
          }
          componentWillUnmount() {
            var e, t;
            clearTimeout(this.m_timeoutHoverStateEnd),
              clearTimeout(this.m_timeoutPopoverMenuHide),
              this.m_appStateChangedAutorunDisposer &&
                (this.m_appStateChangedAutorunDisposer(),
                (this.m_appStateChangedAutorunDisposer = null)),
              (0, a.OK)({
                color_mult: 1,
                reflection_mult: 1,
                roomview_mult: [1, 1, 1],
                allow_skydome: !0,
              }),
              this.m_roomViewChangedEventHandle &&
                (this.m_roomViewChangedEventHandle.unregister(),
                (this.m_roomViewChangedEventHandle = null)),
              null === (e = this.m_linkStreamActiveEventHandle) ||
                void 0 === e ||
                e.unregister(),
              (this.m_linkStreamActiveEventHandle = null),
              null === (t = this.m_dashboardThumbnailsChangedEventHandle) ||
                void 0 === t ||
                t.unregister(),
              (this.m_dashboardThumbnailsChangedEventHandle = null);
          }
          static getDashboardDistance() {
            if (le.s_dashboardUserDistance) return le.s_dashboardUserDistance;
            const e = S.G3.settings.get(m.o1);
            return e == de.Near
              ? 0.925
              : e == de.Screenshot_Only
                ? 5
                : e == de.Middle
                  ? 1.05
                  : 1.2;
          }
          static getDashboardVerticalPosition() {
            var e;
            const t =
                0.01 *
                (null !==
                  (e = S.G3.settings.get(
                    "/settings/dashboard/verticalOffsetCm_2",
                  )) && void 0 !== e
                  ? e
                  : 0),
              i = S.G3.settings.get(m.o1);
            return i == de.Screenshot_Only
              ? -0.57
              : i == de.Near
                ? -0.07 + t
                : i == de.Middle
                  ? -0.08 + t
                  : -0.09 + t;
          }
          static getDashboardScale() {
            var e;
            if (le.s_dashboardUserScale) return le.s_dashboardUserScale;
            let t = 1;
            const i = S.G3.settings.get(m.o1),
              n = i == de.Screenshot_Only;
            return (
              (t = n ? 2 : i == de.Near ? 0.36 : i == de.Middle ? 0.41 : 0.47),
              n ||
                (t *=
                  null !==
                    (e =
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.VRProperties.GetFloatProperty(
                            a.wU,
                            a.Uk.DashboardScale_Float,
                          )) && void 0 !== e
                    ? e
                    : 1),
              t
            );
          }
          onSetDashboardFadeSuppression(e) {
            e.suppress_dashboard_fade
              ? this.m_setSuppressingFade.add(e.for_id)
              : this.m_setSuppressingFade.delete(e.for_id),
              this.forceUpdate();
          }
          onRoomViewChanged() {
            this.forceUpdate();
          }
          onLinkStreamActiveEvents(e) {
            this.setState({ bLinkStreamActive: e });
          }
          onGrabStart() {
            this.setState({ bGrabbed: !0 });
          }
          onGrabEnd() {
            this.setState({ bGrabbed: !1 });
          }
          onSetDashboardForceBoundsVisible(e) {
            this.setState((t, i) => {
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
          onLaserMouseSuppressionUpdate(e) {
            this.setState({
              bLaserMouseSuppressionActive: e.suppression_active,
            });
          }
          onDashboardOverlayCreated(e) {
            this.initializeOverlayState(e.overlay_key);
          }
          onDashboardOverlayDestroyed(e) {
            var t;
            e.overlay_key.startsWith("system.window.")
              ? null === (t = this.m_refDesktopView.current) ||
                void 0 === t ||
                t.onWindowViewDestroyed(e.overlay_key)
              : e.overlay_key == this.getActiveOverlayKey() &&
                this.switchToHomeOverlay(),
              this.state.mapOverlayState.has(e.overlay_key) &&
                this.state.mapOverlayState.delete(e.overlay_key);
          }
          onUpdateDashboardTabs(e) {
            const t = this.getActiveOverlaySummonKey();
            (this.m_mapExternalOverlays = {}),
              e.tabs.forEach((e) => {
                e.mountable_id &&
                  (this.m_mapExternalOverlays[e.mountable_id] = e);
              }),
              this.autoSwitchOverlayIfNeeded(),
              this.m_activeOverlayThatVanished &&
                this.hasDashboardOverlay(
                  this.m_activeOverlayThatVanished.sSummonKey,
                ) &&
                (this.m_activeOverlayThatVanished = null);
            const i = S.G3.settings.get(m.y3);
            this.m_bWaitingOnInitialOverlayToAutoShow &&
              this.hasDashboardOverlay(i) &&
              (this.m_bWaitingOnInitialOverlayToAutoShow = !1),
              t &&
                !this.hasDashboardOverlay(t) &&
                (this.switchToHomeOverlay(),
                (this.m_activeOverlayThatVanished = {
                  sSummonKey: t,
                  timeVanished: new Date(),
                })),
              this.forceUpdate();
          }
          onWindowViewCreated(e) {
            var t, i;
            this.switchToOverlayInternal(m.gB),
              null === (t = this.m_refDesktopView.current) ||
                void 0 === t ||
                t.onWindowViewCreated(e.overlay_key, e.hwnd),
              null === (i = this.m_refDesktopTray.current) ||
                void 0 === i ||
                i.onWindowViewCreated(e.overlay_key, e.hwnd);
          }
          onWindowViewDestroyed(e) {}
          onUpdateWindowList(e) {
            var t;
            let i = new Map();
            e.windows.forEach((e) => {
              i.set(e.hwnd, e);
            }),
              this.setState({
                mapWindows: i,
                bWindowViewEnabled:
                  null === (t = S.G3.settings.get(m.fj)) || void 0 === t || t,
              });
          }
          onUpdateDebugInfo(e) {}
          onDockOverlay(e, t, i) {
            var n, o;
            if (
              ((t != r.LeftHand && t != r.RightHand && t != r.Theater) ||
                this.state.mapOverlayState.forEach((e, i) => {
                  e.dockLocation == t && (e.dockLocation = r.Dashboard);
                }),
              (this.state.mapOverlayState.get(e).dockLocation = t),
              (this.state.mapOverlayState.get(e).xfInitial = i),
              t === r.Dashboard)
            )
              if (e.startsWith(m.r4)) {
                const t = Number.parseInt(e.substring(m.r4.length + 1));
                null === (n = this.m_refDesktopView.current) ||
                  void 0 === n ||
                  n.onDesktopChange(t);
              } else
                e.startsWith(m.Vq) &&
                  (null === (o = this.m_refDesktopView.current) ||
                    void 0 === o ||
                    o.onWindowViewChange(e));
            this.forceUpdate();
          }
          renderActiveOverlay() {
            if (null === this.state.sActiveOverlayID) return null;
            const e = this.getActiveOverlayKey(),
              t = this.hasVRGamepadUIOverlay(),
              i = this.getActiveOverlay();
            if (!i) return null;
            const n = this.state.mapOverlayState.get(e),
              r = n ? n.fScale : 1;
            return d.createElement(
              d.Fragment,
              null,
              d.createElement(a.sl, {
                mountedId: i.mountable_id,
                fDashboardScale: r,
              }),
              t && this.renderVRGamepadUIPanels(),
            );
          }
          computeFilteredOverlayTabs() {
            if (this.isScreenshotMode) return [];
            let e = [];
            for (let n in this.m_mapExternalOverlays) {
              const r = this.m_mapExternalOverlays[n];
              (void 0 === r.icon_overlay_key && null == r.icon_uri) ||
                (r.summon_overlay_key &&
                  r.summon_overlay_key != m.A4 &&
                  r.summon_overlay_key != m.Y8 &&
                  r.summon_overlay_key != m.Xl &&
                  (r.summon_overlay_key.startsWith(m.r4) ||
                    r.summon_overlay_key.startsWith(m.Vq) ||
                    r.summon_overlay_key.startsWith(m.MZ) ||
                    (void 0,
                    (null !==
                      (i =
                        null == (t = r.summon_overlay_key)
                          ? void 0
                          : t.startsWith(m.MI)) &&
                      void 0 !== i &&
                      i) ||
                      e.push(r))));
            }
            var t, i;
            return (
              (e = e.sort((e, t) => e.tab_name.localeCompare(t.tab_name))), e
            );
          }
          findDashboardTab(e) {
            for (let t in this.m_mapExternalOverlays) {
              let i = this.m_mapExternalOverlays[t];
              if (i.summon_overlay_key == e) return i;
            }
            return null;
          }
          hasTenfootOverlay() {
            return this.hasDashboardOverlay(m.Y8);
          }
          hasVRGamepadUIOverlay() {
            return this.hasDashboardOverlay(m.T2);
          }
          switchToHomeOverlay() {
            let e;
            (e = this.hasVRGamepadUIOverlay() ? m.T2 : m.O5),
              this.switchToOverlayInternal(e, "switchToDashboardLibrary");
          }
          switchToSteamOverlay() {
            let e = "";
            if (this.hasVRGamepadUIOverlay()) e = m.T2;
            else {
              if (!this.hasTenfootOverlay()) return;
              e = m.Y8;
            }
            this.switchToOverlayInternal(e, "switchToSteamOverlay");
          }
          switchToOverlayInternal(e, t) {
            var i, n;
            switch (e) {
              case m.Y8:
                b.y.Instance.latchBigPictureEntryPoint();
                break;
              case m.O5:
                this.m_bQuickLaunchShouldReturnToBigPicture = !1;
                break;
              case m.wB:
                this.m_bQuickStoreShouldReturnToBigPicture = !1;
                break;
              case m.Us:
                let t = {
                    type: "show_app_binding",
                    app_key:
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.VRApplications.GetSceneApplicationKey(),
                  },
                  i = "bindingui/" + a.qA[(0, a.Op)()];
                this.m_mailbox.SendMessage(i, t),
                  (this.m_bQuickStoreShouldReturnToBigPicture = !1),
                  (e = m.RM);
            }
            if (e.startsWith(m.r4)) {
              const t = Number.parseInt(e.substring(m.r4.length + 1));
              Number.isSafeInteger(t) &&
                (null === (i = this.m_refDesktopView.current) ||
                  void 0 === i ||
                  i.onDesktopChange(t)),
                (e = m.gB);
            }
            let r = this.findDashboardTab(e);
            return (
              !!r &&
              (this.computeFilteredOverlayTabs().includes(r) &&
                S.G3.SetSettingsValue(
                  m.nf,
                  null !== (n = r.summon_overlay_key) && void 0 !== n ? n : "",
                ),
              (this.m_activeOverlayThatVanished = null),
              this.setState({ sActiveOverlayID: r.mountable_id }),
              g.e.instance.RecordUIEvent(
                "SetDashboardOverlay",
                null != t ? t : "Button",
                e,
              ),
              !0)
            );
          }
          autoSwitchOverlayIfNeeded() {
            const e = [],
              t = this.getActiveOverlaySummonKey();
            this.m_bWaitingOnInitialOverlayToAutoShow &&
              e.push(S.G3.settings.get(m.y3)),
              this.m_activeOverlayThatVanished &&
                (new Date().getTime() -
                  this.m_activeOverlayThatVanished.timeVanished.getTime()) /
                  1e3 <
                  le.k_nTimeLimitToReturnToActiveOverlayThatVanishedSeconds &&
                e.push(this.m_activeOverlayThatVanished.sSummonKey),
              (null == t ||
                (t == m.O5 && !this.m_bUserManuallySwitchToOldLibrary) ||
                t == m.wB) &&
                e.push(m.T2),
              null == t && e.push(m.O5);
            const i = e.find(this.hasDashboardOverlay);
            i && this.switchToOverlayInternal(i);
          }
          getActiveOverlay() {
            var e;
            return this.state.sActiveOverlayID &&
              null !==
                (e = this.m_mapExternalOverlays[this.state.sActiveOverlayID]) &&
              void 0 !== e
              ? e
              : null;
          }
          getActiveOverlaySummonKey() {
            var e, t;
            return null !==
              (t =
                null === (e = this.getActiveOverlay()) || void 0 === e
                  ? void 0
                  : e.summon_overlay_key) && void 0 !== t
              ? t
              : null;
          }
          getActiveOverlayKey() {
            var e;
            let t = this.getActiveOverlaySummonKey();
            return t == m.gB
              ? null === (e = this.m_refDesktopView.current) || void 0 === e
                ? void 0
                : e.sCurrentOverlayKey
              : t;
          }
          hideMessageOverlay() {
            this.getActiveOverlaySummonKey() == m.f8 &&
              this.switchToHomeOverlay();
          }
          onShowDashboardRequested(e) {
            var t;
            S.G3.settings.get("/settings/dashboard/enableDashboard") &&
              ((e.overlay_key &&
                this.state.mapOverlayState.has(e.overlay_key) &&
                this.state.mapOverlayState.get(e.overlay_key).dockLocation ==
                  r.Theater) ||
                (this.show(
                  null !== (t = e.reason) && void 0 !== t ? t : "unknown",
                ),
                e.overlay_key
                  ? this.switchToOverlayInternal(e.overlay_key)
                  : this.autoSwitchOverlayIfNeeded(),
                this.setDashboardVisibility(
                  !0,
                  e.tracked_device_index,
                  e.reason,
                )));
          }
          onHideTheaterMode() {
            let e = this.getActiveOverlayKey();
            this.onDockOverlay(e, r.Theater),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRDashboardManager.HideDashboard("theater_mode");
            let t = this.getActiveOverlayKey();
            this.onDockOverlay(t, r.Dashboard);
          }
          onHideDashboardRequested(e) {
            VRHTML.VRDashboardManager.HasMessageOverlay()
              ? this.switchToOverlayInternal(m.f8)
              : (this.hideMessageOverlay(),
                VRHTML.VRDashboardManager.CloseKeyboard(),
                this.hide(e.reason),
                this.setDashboardVisibility(!1, void 0, e.reason));
          }
          setDashboardVisibility(e, t, i) {
            let n = {
              type: "set_dashboard_visibility",
              tracked_device_index: t,
              visible: e,
              reason: i,
            };
            this.m_mailbox.SendMessage("vrcompositor_systemlayer", n);
          }
          show(e) {
            if (this.isShown()) return;
            g.e.instance.StartDashboardSession(e),
              this.m_mailbox.SendMessage("desktopview", {
                type: "request_window_list_update",
              });
            const t = y.H.Instance.SceneAppKey,
              i = y.H.Instance.SceneAppIsHome;
            t &&
              t != this.state.sLastShownAppKey &&
              (this.setState({ sLastShownAppKey: t }),
              i
                ? this.switchToHomeOverlay()
                : this.switchToOverlayInternal(m.PF)),
              (this.m_activeOverlayThatVanished = null),
              this.setState({ bShown: !0 });
            let n = { type: le.k_sRequestDashboardTabsMessage };
            this.m_mailbox.SendMessage("vrcompositor_systemlayer", n),
              (0, a.qI)();
          }
          hide(e) {
            this.isShown() &&
              ((this.m_activeOverlayThatVanished = null),
              this.setState({ bShown: !1, eShowPopoverMenu: ce.None }),
              g.e.instance.EndDashboardSession(e));
          }
          isShown() {
            return this.state.bShown;
          }
          setPlacementModeActive(e) {
            this.setState({ bPlacementModeActive: e });
          }
          onToggleRoomView() {
            const e = VRHTML.VRControlPanel.GetCameraRoomViewVisible();
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRControlPanel.SetCameraRoomViewVisible(!e);
          }
          onQuickLaunchButtonClick() {
            this.m_bQuickLaunchShouldReturnToBigPicture &&
            b.y.Instance.lastBigPictureEntryPoint == b.b.QuickLaunch &&
            !this.isOverlayActive(m.Y8)
              ? b.y.Instance.openBigPictureThroughLastEntryPoint()
              : this.switchToOverlayInternal(m.O5);
          }
          onQuickStoreButtonClick() {
            this.m_bQuickStoreShouldReturnToBigPicture &&
            b.y.Instance.lastBigPictureEntryPoint == b.b.QuickStore &&
            !this.isOverlayActive(m.Y8)
              ? b.y.Instance.openBigPictureThroughLastEntryPoint()
              : this.switchToOverlayInternal(m.wB);
          }
          onRecenterClick() {
            this.state.bLinkStreamActive && VRHTML.BIsLinkServer()
              ? (this.m_mailbox.SendMessage("svl", { type: "handle_recenter" }),
                VRHTML.VRDashboardManager.HideDashboard(
                  "onRecenterClick stream active",
                ))
              : this.m_mailbox.SendMessage(re.BB, {
                  type: re.KU,
                  countdown_seconds: 3,
                });
          }
          onImmersiveRoomSetupClick() {
            this.m_mailbox.SendMessage("driver_hmd", { type: "room_setup" });
          }
          onToggleGamepadFocus() {}
          getDashboardIconUri(e) {
            try {
              if ("turn_signal_menu.thumb" == e.icon_overlay_key)
                return "/dashboard/images/icons/turnsignal.svg";
              if (e.icon_uri) return e.icon_uri;
              if (e.icon_overlay_key)
                return null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRDashboardManager.GetOverlayImage(
                      e.icon_overlay_key,
                    );
            } catch (e) {}
            return null;
          }
          renderPowerMenu() {
            const e = !!(null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.SceneAppRunning()),
              t = S.G3.settings.get("/settings/dashboard/allowAppQuitting"),
              i = S.G3.settings.get("/settings/dashboard/allowSystemShutdown");
            let n = !1;
            VRHTML &&
              VRHTML.VROverlay.GetPrimaryDashboardDevice() >= 0 &&
              (n = VRHTML.VRProperties.GetBoolProperty(
                VRHTML.VROverlay.GetPrimaryDashboardDevice(),
                a.Uk.DeviceCanPowerOff_Bool,
              ));
            const r = y.H.Instance.SceneAppName,
              o = y.H.Instance.SceneAppIsHome;
            let s, l;
            return (
              (s = o
                ? (0, v.Xx)("#Exit_SteamVR_Home")
                : r
                  ? (0, v.Xx)("#PowerMenuQuitSceneApp", r)
                  : (0, v.Xx)("#PowerMenuQuitSceneApp_NoApp")),
              (l = o
                ? "/dashboard/images/icons/svr_svrhome_quit_alt.svg"
                : "/dashboard/images/icons/svr_app_quit.svg"),
              this.renderPopoverMenu(
                d.createElement(
                  d.Fragment,
                  null,
                  !!this.hasVRGamepadUIOverlay() &&
                    d.createElement(D.dy, {
                      label: "Old Library",
                      lineBelow: !0,
                      onClick: () => {
                        (this.m_bUserManuallySwitchToOldLibrary = !0),
                          this.switchToOverlayInternal(m.O5),
                          this.showPopoverMenu(ce.None);
                      },
                    }),
                  this.hasTenfootOverlay() &&
                    d.createElement(D.dy, {
                      label: (0, v.Xx)("#PowerMenuSteamOverlay"),
                      lineBelow: !0,
                      onClick: () => {
                        this.switchToOverlayInternal(m.Y8),
                          this.showPopoverMenu(ce.None);
                      },
                    }),
                  n &&
                    d.createElement(D.dy, {
                      label: (0, v.Xx)("#PowerMenuTurnOffController"),
                      imageUrl:
                        "/dashboard/images/icons/svr_controller_power.svg",
                      onClick: () => {
                        null === VRHTML ||
                          void 0 === VRHTML ||
                          VRHTML.TurnOffVRController(),
                          this.showPopoverMenu(ce.None);
                      },
                    }),
                  t &&
                    e &&
                    d.createElement(D.dy, {
                      label: s,
                      imageUrl: l,
                      onClick: () => {
                        null === VRHTML ||
                          void 0 === VRHTML ||
                          VRHTML.QuitSceneApp(),
                          this.showPopoverMenu(ce.None);
                      },
                    }),
                  d.createElement(D.dy, {
                    label: (0, v.Xx)("#PowerMenuExitVR"),
                    imageUrl: "/dashboard/images/icons/svr_svr_quit_alt.svg",
                    onClick: () =>
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.QuitOpenVR(),
                  }),
                  i &&
                    d.createElement(D.dy, {
                      label: (0, v.Xx)("#PowerMenuShutdown"),
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
              this.setState({ eShowPopoverMenu: ce.None });
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
            return d.createElement(
              "div",
              {
                className: "PowerMenuContainer",
                onMouseLeave: this.popoverMenuMouseLeave,
                onMouseEnter: this.clearPopoverMenuTimeout,
                ref: this.m_refPopoverMenu,
              },
              d.createElement(h.q, { className: "PowerMenuPanel" }, e),
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
                !(function (e, t, i) {
                  let n = i.getBoundingClientRect();
                  return (
                    e >= n.left && e <= n.right && t >= n.top && t <= n.bottom
                  );
                })(e.clientX, e.clientY, this.m_refPopoverMenu.current) &&
                this.startPopoverMenuTimeout(100);
          }
          renderStatusBarTitle() {
            var e, t, i, n;
            let r = this.getActiveOverlay();
            if (!r) return null;
            if (
              (r.summon_overlay_key == m.Y8 &&
                (b.y.Instance.lastBigPictureEntryPoint == b.b.QuickLaunch
                  ? (r = this.findDashboardTab(m.O5))
                  : b.y.Instance.lastBigPictureEntryPoint == b.b.QuickStore &&
                    (r = this.findDashboardTab(m.wB))),
              r.summon_overlay_key == m.gB)
            ) {
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
                return d.createElement(D.Rk, {
                  name:
                    null === (i = this.state.mapWindows.get(e)) || void 0 === i
                      ? void 0
                      : i.title,
                  iconUrl: this.getDashboardIconUri(r),
                });
              }
              return d.createElement(D.Rk, {
                name:
                  "Desktop " +
                  (null === (n = this.m_refDesktopView.current) || void 0 === n
                    ? void 0
                    : n.currentDesktopIndex),
                iconUrl: this.getDashboardIconUri(r),
              });
            }
            if (r.summon_overlay_key == m.RM)
              return d.createElement(D.Rk, {
                name: (0, v.Xx)("#BindingUI_WindowTitle_ControllerBinding"),
                iconUrl: "/dashboard/images/icons/svr_settings.svg",
              });
            let o = r.tab_name;
            return d.createElement(D.Rk, {
              name: o,
              iconUrl: this.getDashboardIconUri(r),
            });
          }
          get isDarkMode() {
            return this.state.bDarkMode;
          }
          get isScreenshotMode() {
            return S.G3.settings.get(m.o1) == de.Screenshot_Only;
          }
          get isGroupMode() {
            return !1;
          }
          getCollisionBoundsFadeVisualizationElements() {
            var e;
            const t =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRChaperoneSetup.GetLiveCollisionBoundsInfo();
            if (!t) return [];
            let i = [];
            const n =
              null !== (e = S.G3.settings.get(m.yQ)) && void 0 !== e ? e : 0.7;
            for (let e of t) {
              let t = (0, a.M9)((0, a.eQ)(e[3], e[0])),
                r = (0, a.M9)((0, a.eQ)(e[1], e[0])),
                o = (0, a.dq)(t, r),
                s = (0, a.Pd)((0, a.tS)(t, r, o)),
                l = (0, a.LY)((0, a.eQ)(e[0], e[3]));
              if (l < 0.4) continue;
              let c = Math.max(1, Math.floor(l));
              for (let t = 0; t < c; t++) {
                let r = (t + 1) / (c + 1),
                  o = (0, a.Oq)();
                (o.rotation = s),
                  (o.translation = (0, a.q9)(r, e[0], e[3])),
                  (o.scale = { x: 0.005, y: 0.005, z: n });
                let l = d.createElement(
                  a.wx,
                  { transform: o },
                  d.createElement(
                    a.Dd,
                    { value: 0.25 },
                    d.createElement(
                      a.VW,
                      { color: { r: 0.2, g: 0.2, b: 0.2 } },
                      d.createElement(a.gQ, {
                        source: "laser_pointer",
                        wireframe: !1,
                        culling: a.xj.Backface,
                      }),
                    ),
                  ),
                );
                i.push(l);
              }
              if (i.length > 20) break;
            }
            return i;
          }
          render() {
            var e, t;
            const i = y.H.Instance.SceneApplicationState !== a.xY.None;
            if (this.isDarkMode && !i) {
              const i =
                  null !==
                    (e = S.G3.settings.get(
                      "/settings/dashboard/theaterModeBrightness",
                    )) && void 0 !== e
                    ? e
                    : 1,
                n =
                  null !==
                    (t = S.G3.settings.get(
                      "/settings/dashboard/theaterModeReflection",
                    )) && void 0 !== t
                    ? t
                    : 1;
              (0, a.OK)({
                color_mult: Math.pow(i, 2.2),
                reflection_mult: Math.pow(n, 2.2),
                roomview_mult: [0.12, 0.16, 0.6],
                allow_skydome: !1,
              });
            } else if (this.state.bShown) {
              const e =
                  this.m_setSuppressingFade.size > 0 &&
                  this.getActiveOverlaySummonKey() == m.A4,
                t = S.G3.settings.get(
                  "/settings/dashboard/omitDashboardFadeWithSteamVRHome",
                ),
                n = !y.H.Instance.SceneAppIsHome || !t;
              this.isScreenshotMode
                ? (0, a.OK)({
                    color_mult: 0,
                    reflection_mult: 0,
                    roomview_mult: [1, 1, 1],
                    allow_skydome: !0,
                  })
                : n && !e && i
                  ? (0, a.OK)({
                      color_mult: 0.15,
                      reflection_mult: 1,
                      roomview_mult: [1, 1, 1],
                      allow_skydome: !0,
                    })
                  : (0, a.OK)({
                      color_mult: 1,
                      reflection_mult: 1,
                      roomview_mult: [1, 1, 1],
                      allow_skydome: !0,
                    });
            } else
              (0, a.OK)({
                color_mult: 1,
                reflection_mult: 1,
                roomview_mult: [1, 1, 1],
                allow_skydome: !0,
              });
            const n = this.getActiveOverlaySummonKey(),
              r = this.state.bShown && this.state.setForcingBoundsVisible[n],
              o = r && r.size > 0;
            let s = [];
            return (
              o && (s = this.getCollisionBoundsFadeVisualizationElements()),
              d.createElement(
                "div",
                { className: "DashboardMain" },
                o && d.createElement(pe, null),
                o && d.createElement("span", null, s),
                this.state.bShown && this.renderDashboard(),
                this.renderInternalOverlays(),
                this.renderOverlayWidgets(),
                !1,
              )
            );
          }
          hasDashboardOverlay(e) {
            return Object.values(this.m_mapExternalOverlays).some(
              (t) => t.summon_overlay_key == e,
            );
          }
          isOverlayActive(e) {
            return (
              !!this.state.sActiveOverlayID &&
              this.getActiveOverlaySummonKey() == e
            );
          }
          GetActiveOverlayAnchorIDs() {
            const e = this.getActiveOverlayKey(),
              t =
                (this.state.mapOverlayState.has(e) &&
                  (this.state.mapOverlayState.get(e).dockLocation ==
                    r.LeftHand ||
                    (this.state.mapOverlayState.get(e).dockLocation,
                    r.RightHand)),
                this.getActiveOverlaySummonKey());
            return D.Eu.has(t)
              ? D.Eu.get(t)
              : {
                  strTopCenterAnchorID:
                    this.state.sActiveOverlayID + "_TopCenter",
                  strCenterLeftAnchorID:
                    this.state.sActiveOverlayID + "_CenterLeft",
                  strCenterRightAnchorID:
                    this.state.sActiveOverlayID + "_CenterRight",
                  strBottomCenterAnchorID:
                    this.state.sActiveOverlayID + "_BottomCenter",
                };
          }
          renderExternalOverlayControlBarButton(e) {
            const t = this.getDashboardIconUri(e),
              i = D.IO.Center;
            return d.createElement(D.B8, {
              key: e.mountable_id,
              label: e.tab_name,
              imageUrl: t,
              imageStyle: i,
              active: this.isOverlayActive(e.summon_overlay_key),
              onClick: () => this.switchToOverlayInternal(e.summon_overlay_key),
            });
          }
          isDesktopTrayActive() {
            var e;
            return (
              (this.isOverlayActive(m.gB) ||
                (null === (e = this.getActiveOverlaySummonKey()) || void 0 === e
                  ? void 0
                  : e.startsWith("system.window"))) &&
              (this.state.eShowPopoverMenu == ce.None ||
                this.state.eShowPopoverMenu == ce.Windows)
            );
          }
          isSteamOverlayActive() {
            return (
              (this.isOverlayActive(m.Y8) || this.isOverlayActive(m.T2)) &&
              this.state.eShowPopoverMenu == ce.None
            );
          }
          isDesktopOverlayActive() {
            var e;
            return (
              this.isOverlayActive(m.gB) ||
              (null === (e = this.getActiveOverlaySummonKey()) || void 0 === e
                ? void 0
                : e.startsWith("system.window"))
            );
          }
          showIncognitoMode() {
            var e;
            return (
              this.state.eIncognitoMode != a.Qu.Unavailable &&
              null !==
                (e = S.G3.settings.get(
                  "/settings/dashboard/allowIncognitoMode",
                )) &&
              void 0 !== e &&
              e
            );
          }
          getPeerButtonInfo() {
            const e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRProperties.GetStringProperty(
                    0,
                    a.Uk.PeerButtonInfo_String,
                  );
            if (e) return JSON.parse(e);
          }
          handlePeerButton() {
            const e = this.getPeerButtonInfo();
            if (!e) return;
            let t = { type: e.sMessageType };
            (t.whichDevice = VRHTML.VROverlay.GetPrimaryDashboardDevice()),
              this.m_mailbox.SendMessage(e.sMailbox, t);
          }
          ToggleIncognitoMode() {
            this.m_mailbox.SendMessage("web_steam_mailbox", {
              type: "toggle_voicechat",
            });
          }
          ToggleVideoStream() {
            this.m_mailbox.SendMessage("web_steam_mailbox", {
              type: "toggle_videostream",
            });
          }
          renderVRGamepadUIPanels() {
            var e;
            const t =
                null ===
                  (e = S.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === e ||
                e
                  ? m.ml
                  : null,
              i = S.G3.settings.get("/settings/dashboard/theaterPosition");
            let n = le.k_nControlBarWidthMeters / 2;
            i == de.Near ||
              (i == de.Middle ? (n *= 1.5) : i == de.Far && (n *= 1.85));
            const r = (le.k_nControlBarWidthMeters / 1920) * 400,
              o = this.GetActiveOverlayAnchorIDs();
            return d.createElement(
              d.Fragment,
              null,
              d.createElement(
                a.wx,
                { parent_id: o.strTopCenterAnchorID, translation: { y: 0.01 } },
                d.createElement(
                  a.Dd,
                  { value: this.state.bLaserMouseSuppressionActive ? 0.1 : 1 },
                  d.createElement(
                    a.s_,
                    {
                      id: "VRGamepadUI-Header-Panel",
                      debug_name: "VRGamepadUI-Header-Panel",
                      interactive: !0,
                      curvature_origin_id: t,
                      overlay_key: m.rl,
                      origin: a.Ic.BottomCenter,
                      width: 2.667,
                    },
                    d.createElement(a.at, {
                      id: "VRGamepadUI-Header-Panel-TopCenter",
                      location: a.Ic.TopCenter,
                    }),
                  ),
                ),
              ),
              !this.state.bLaserMouseSuppressionActive &&
                d.createElement(
                  a.wx,
                  {
                    parent_id: o.strCenterLeftAnchorID,
                    translation: { x: -0.08 },
                    rotation: { y: 20 },
                  },
                  d.createElement(a.s_, {
                    id: "VRGamepadUI-MainMenu-Panel",
                    debug_name: "VRGamepadUI-MainMenu-Panel",
                    interactive: !0,
                    curvature_origin_id: t,
                    overlay_key: m.v2,
                    origin: a.Ic.CenterRight,
                    width: r,
                  }),
                ),
              !this.state.bLaserMouseSuppressionActive &&
                d.createElement(
                  a.wx,
                  {
                    parent_id: o.strCenterRightAnchorID,
                    translation: { x: 0.08 },
                    rotation: { y: -20 },
                  },
                  d.createElement(a.s_, {
                    id: "VRGamepadUI-QuickAccessMenu-Panel",
                    debug_name: "VRGamepadUI-QuickAccessMenu-Panel",
                    interactive: !0,
                    curvature_origin_id: t,
                    overlay_key: m.Tn,
                    origin: a.Ic.CenterLeft,
                    width: r,
                  }),
                ),
            );
          }
          renderControlBar(e, t) {
            var i, n, r, o, s, l, c, u;
            const p = this.state.bLaserMouseSuppressionActive ? 0.1 : 1,
              g = this.isDarkMode ? { r: 0.05, g: 0.05, b: 0.05 } : null,
              f = this.isDarkMode ? { r: 0.25, g: 0.25, b: 0.25 } : null,
              k = this.isDarkMode ? 0.02 : 0.05,
              R = le.k_nControlBarWidthMeters,
              M =
                null ===
                  (i = S.G3.settings.get(
                    "/settings/dashboard/showPowerOptions",
                  )) ||
                void 0 === i ||
                i,
              C =
                null ===
                  (n = S.G3.settings.get("/settings/dashboard/showDesktop")) ||
                void 0 === n ||
                n,
              T = this.hasVRGamepadUIOverlay(),
              w = !this.hasVRGamepadUIOverlay() && !0,
              E =
                !this.hasVRGamepadUIOverlay() &&
                (null ===
                  (r = S.G3.settings.get(
                    "/settings/dashboard/showQuickStore",
                  )) ||
                  void 0 === r ||
                  r),
              I = !(
                null !==
                  (o = S.G3.settings.get("/settings/dashboard/arcadeMode")) &&
                void 0 !== o &&
                o
              ),
              P = this.getPeerButtonInfo(),
              V = VRHTML.BIsLinkServer(),
              O = VRHTML.BIsLinkClient(),
              L = y.H.Instance.SceneApplicationState,
              H = y.H.Instance.SceneAppIsHome,
              B =
                null ===
                  (s = S.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === s ||
                s
                  ? m.ml
                  : null,
              N = y.H.Instance.SceneAppKey;
            let A = "images/appimage_default.png";
            N && (A = "/app/image?app_key=" + N);
            const F =
                null !== (l = S.G3.settings.get(m.Av)) && void 0 !== l && l,
              U =
                null !== (c = S.G3.settings.get(m.k_)) && void 0 !== c ? c : 0;
            let W = F && U > 0,
              z =
                null !==
                  (u = S.G3.settings.get(
                    "/settings/dashboard/allowTheaterMode",
                  )) &&
                void 0 !== u &&
                u,
              G = O || this.state.bLinkStreamActive;
            this.state.bLinkStreamActive && ((z = !1), V && (W = !1));
            let K = { y: -0.25, z: 0 };
            return (
              this.isOverlayActive(m.gB) && (K = { y: -0.4, z: 0 }),
              d.createElement(
                a.Dd,
                { value: p },
                d.createElement(
                  a.VW,
                  { color: g },
                  d.createElement(
                    a.s_,
                    {
                      curvature_origin_id: B,
                      width: R,
                      interactive: !1,
                      debug_name: "ControlBarBackground",
                      sampler: a.Vv.SingleTap,
                      reflect: k,
                    },
                    d.createElement("div", {
                      className: "ControlBarBackground",
                    }),
                  ),
                  d.createElement(
                    a.wx,
                    { translation: { z: 1e-5 } },
                    d.createElement(
                      a.s_,
                      {
                        curvature_origin_id: B,
                        width: R,
                        interactive: !0,
                        id: m.WR,
                        debug_name: "Controls",
                      },
                      d.createElement(
                        h.q,
                        { className: "ControlBar MainControlBar" },
                        d.createElement(
                          "div",
                          { className: "Section Left" },
                          M &&
                            d.createElement(D.NT, {
                              imageUrl:
                                "/dashboard/images/icons/svr_menu_c.svg",
                              label: (0, v.Xx)("#Menu"),
                              style: D.zk.Small,
                              onClick: () => this.showPopoverMenu(ce.Power),
                              onMouseEnter: this.clearPopoverMenuTimeout,
                              onMouseLeave: () =>
                                this.startPopoverMenuTimeout(500),
                            }),
                          d.createElement(
                            D.dw,
                            { style: D.zk.Small },
                            T &&
                              d.createElement(D.B8, {
                                imageUrl:
                                  "/dashboard/images/icons/vr_steam.svg",
                                label: (0, v.Xx)("#Steam"),
                                active: this.isSteamOverlayActive(),
                                onClick: () => this.switchToSteamOverlay(),
                              }),
                            !1,
                          ),
                          C &&
                            d.createElement(D.NT, {
                              style: D.zk.Small,
                              imageUrl:
                                "/dashboard/images/icons/svr_desktop_alt.svg",
                              label: (0, v.Xx)("#Desktops"),
                              active: this.isDesktopTrayActive(),
                              onClick: () => this.switchToOverlayInternal(m.gB),
                            }),
                          d.createElement(
                            D.dw,
                            { style: D.zk.Small },
                            d.createElement(
                              d.Fragment,
                              null,
                              e.map(this.renderExternalOverlayControlBarButton),
                              t.length > 0 &&
                                d.createElement(D.B8, {
                                  imageUrl:
                                    "/dashboard/images/icons/svr_more.svg",
                                  label: (0, v.Xx)(
                                    "#X_More_Overlays",
                                    t.length,
                                  ),
                                  active:
                                    this.state.eShowPopoverMenu ==
                                    ce.ExternalOverlays,
                                  onClick: () =>
                                    this.showPopoverMenu(ce.ExternalOverlays),
                                  onMouseEnter: this.clearPopoverMenuTimeout,
                                  onMouseLeave: () =>
                                    this.startPopoverMenuTimeout(500),
                                }),
                            ),
                          ),
                        ),
                        d.createElement(
                          "div",
                          { className: "Section Center" },
                          w &&
                            d.createElement(D.NT, {
                              label: (0, v.Xx)("#Library"),
                              imageUrl: "/dashboard/images/icons/svr_items.svg",
                              active:
                                this.isOverlayActive(m.O5) ||
                                (this.isOverlayActive(m.Y8) &&
                                  b.y.Instance.lastBigPictureEntryPoint ==
                                    b.b.QuickLaunch),
                              style: D.zk.Large,
                              onClick: this.onQuickLaunchButtonClick,
                            }),
                          L != a.xY.None &&
                            d.createElement(
                              "div",
                              { className: "NowPlayingSpacer" },
                              d.createElement(
                                _.d,
                                {
                                  allowableParentSelectors: [".DashboardMain"],
                                },
                                d.createElement(
                                  a.VW,
                                  { color: g },
                                  d.createElement(
                                    a.wx,
                                    { translation: { z: 0.02 } },
                                    d.createElement(
                                      a.s_,
                                      {
                                        debug_name: "NowPlayingButton",
                                        interactive: !0,
                                        target_dpi_panel_id: m.WR,
                                        curvature_origin_id: B,
                                      },
                                      d.createElement(
                                        "div",
                                        { className: "ControlBar" },
                                        d.createElement(D.NT, {
                                          label: H
                                            ? (0, v.Xx)("#SteamVR_Home")
                                            : (0, v.Xx)("#Now_Playing"),
                                          active: this.isOverlayActive(m.PF),
                                          style: D.zk.App,
                                          imageUrl: A,
                                          onClick: () =>
                                            this.switchToOverlayInternal(m.PF),
                                        }),
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          E &&
                            d.createElement(D.NT, {
                              label: (0, v.Xx)("#Store"),
                              imageUrl: "/dashboard/images/icons/svr_store.svg",
                              additionalClassNames: "Store",
                              active:
                                this.isOverlayActive(m.wB) ||
                                (this.isOverlayActive(m.Y8) &&
                                  b.y.Instance.lastBigPictureEntryPoint ==
                                    b.b.QuickStore),
                              style: D.zk.Large,
                              onClick: this.onQuickStoreButtonClick,
                            }),
                        ),
                        d.createElement(
                          "div",
                          { className: "Section Right" },
                          d.createElement(
                            D.dw,
                            { style: D.zk.Small },
                            !1,
                            !1,
                            z &&
                              d.createElement(D.B8, {
                                imageUrl: this.state.bDarkMode
                                  ? "/dashboard/images/icons/svr_nightmode.svg"
                                  : "/dashboard/images/icons/svr_lightmode.svg",
                                label: (0, v.Xx)("#Settings_ToggleDarkMode"),
                                onClick: () =>
                                  this.setState({
                                    bDarkMode: !this.state.bDarkMode,
                                  }),
                                active: this.state.bDarkMode,
                              }),
                            d.createElement(D.B8, {
                              imageUrl:
                                "/dashboard/images/icons/svr_recenter.svg",
                              additionalClassNames: "CenterImageLarge",
                              label: (0, v.Xx)("#Button_Recenter"),
                              onClick: this.onRecenterClick,
                            }),
                            G &&
                              d.createElement(D.B8, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_room_setup.svg",
                                additionalClassNames: "CenterImageLarge",
                                label: "Room Setup",
                                onClick: this.onImmersiveRoomSetupClick,
                              }),
                            W &&
                              d.createElement(D.B8, {
                                imageUrl: "/dashboard/images/icons/svr_eye.svg",
                                label: (0, v.Xx)("#Toggle_Room_View"),
                                onClick: this.onToggleRoomView,
                                active:
                                  null === VRHTML || void 0 === VRHTML
                                    ? void 0
                                    : VRHTML.VRControlPanel.GetCameraRoomViewVisible(),
                                enabled:
                                  null === VRHTML || void 0 === VRHTML
                                    ? void 0
                                    : VRHTML.VROverlayInternal.HasCameraRoomViewCapability(),
                              }),
                            d.createElement(D.D6, {
                              active: this.state.eShowPopoverMenu == ce.Volume,
                              refVolumeTray: this.m_refVolumeTray,
                              onShowTray: () => this.showPopoverMenu(ce.Volume),
                              onHideTray: () => this.showPopoverMenu(ce.None),
                              onMouseEnter: this.clearPopoverMenuTimeout,
                              onMouseLeave: () =>
                                this.startPopoverMenuTimeout(500),
                            }),
                          ),
                          I &&
                            d.createElement(D.NT, {
                              imageUrl:
                                "/dashboard/images/icons/svr_settings.svg",
                              active: this.isOverlayActive(m.A4),
                              enabled: this.hasDashboardOverlay(m.A4),
                              label: (0, v.Xx)("#Settings"),
                              style: D.zk.Small,
                              centerPanelAnchorID: "VolumeButton",
                              onClick: () => this.switchToOverlayInternal(m.A4),
                            }),
                          this.state.bLinkStreamActive &&
                            P &&
                            d.createElement(D.NT, {
                              imageUrl: P.sIcon,
                              active: !1,
                              enabled: !0,
                              label: (0, v.Xx)(P.sButtonName),
                              style: D.zk.Small,
                              centerPanelAnchorID: "VolumeButton",
                              onClick: () => this.handlePeerButton(),
                            }),
                        ),
                      ),
                      d.createElement(x, {
                        ref: this.m_refDesktopTray,
                        position: 0,
                        visible:
                          this.isDesktopTrayActive() &&
                          !this.state.bLaserMouseSuppressionActive,
                        tintColor: f,
                        onToggleWindowList: () =>
                          this.showPopoverMenu(ce.Windows),
                        onClearPopoverMenuTimeout: () =>
                          this.clearPopoverMenuTimeout(),
                        onStartPopoverMenuTimeout: (e) =>
                          this.startPopoverMenuTimeout(e),
                        mapWindows: this.state.mapWindows,
                        sort_depth_bias: 0.2,
                        bWindowViewEnabled: this.state.bWindowViewEnabled,
                      }),
                      d.createElement(D.z, {
                        ref: this.m_refVolumeTray,
                        position: 0.337,
                        visible:
                          this.state.eShowPopoverMenu == ce.Volume &&
                          !this.state.bLaserMouseSuppressionActive,
                        tintColor: f,
                        onFinalChangeMouseOutside: () => {
                          this.startPopoverMenuTimeout(800);
                        },
                        onMouseMove: this.clearPopoverMenuTimeout,
                        onMouseLeave: this.popoverMenuMouseLeave,
                        sort_depth_bias: 0.4,
                      }),
                    ),
                  ),
                ),
                d.createElement(
                  a.wx,
                  { translation: K, scale: { y: 1.5, x: 1.5 } },
                  d.createElement(a.sl, { mountedId: (0, a.iN)(m.GN, m.gC) }),
                  d.createElement(a.sl, { mountedId: (0, a.iN)(m.GN, m.jw) }),
                ),
              )
            );
          }
          renderOverlayWidgets() {
            let e = Array.from(this.state.mapOverlayState, ([e, t]) => ({
              sOverlayKey: e,
              overlayState: t,
            })).filter((e) => e.overlayState.dockLocation != r.Dashboard);
            return d.createElement(
              d.Fragment,
              null,
              e.map((e) =>
                d.createElement(C, {
                  bDashboardShown: this.state.bShown,
                  bHasSceneApp:
                    y.H.Instance.SceneApplicationState !== a.xY.None,
                  bCaptureVideo: !1,
                  bDarkMode: this.state.bDarkMode,
                  bGroupMode: !1,
                  dockLocation: e.overlayState.dockLocation,
                  onDockOverlay: this.onDockOverlay,
                  sOverlayKey: e.sOverlayKey,
                  xfInitial: e.overlayState.xfInitial,
                  key: e.sOverlayKey,
                  ref: e.overlayState.refOverlayWidget,
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
          isDesktopViewVisible() {
            let e = this.getActiveOverlayKey(),
              t =
                !this.state.mapOverlayState.has(e) ||
                this.state.mapOverlayState.get(e).dockLocation == r.Dashboard;
            return this.state.bShown && this.isOverlayActive(m.gB) && t;
          }
          onGameLaunched(e) {
            (!e.is_dashboard_overlay ||
              (e.is_dashboard_overlay && !e.show_overlay_in_quicklaunch)) &&
              (null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRDashboardManager.HideDashboard("game_launched"));
          }
          renderInternalOverlays() {
            var e, t, i, n;
            const r =
                null !==
                  (t =
                    null === (e = this.m_refDesktopView.current) || void 0 === e
                      ? void 0
                      : e.currentDesktopIndex) && void 0 !== t
                  ? t
                  : 1,
              o =
                null !==
                  (n =
                    null === (i = this.m_refDesktopView.current) || void 0 === i
                      ? void 0
                      : i.desktopCount) && void 0 !== n
                  ? n
                  : 1;
            return d.createElement(
              d.Fragment,
              null,
              d.createElement(
                a.Y9,
                {
                  tabName: (0, v.Xx)("#Library"),
                  iconUri: "/dashboard/images/icons/svr_items.svg",
                  summonOverlayKey: m.O5,
                },
                d.createElement(ne, {
                  visible: this.state.bShown && this.isOverlayActive(m.O5),
                  onGameLaunched: this.onGameLaunched,
                }),
              ),
              d.createElement(
                a.Y9,
                {
                  tabName: (0, v.Xx)("#Store"),
                  iconUri: "/dashboard/images/icons/svr_store.svg",
                  summonOverlayKey: m.wB,
                },
                d.createElement(Z, {
                  visible: this.state.bShown && this.isOverlayActive(m.wB),
                }),
              ),
              d.createElement(
                a.Y9,
                { tabName: (0, v.Xx)("#Now_Playing"), summonOverlayKey: m.PF },
                d.createElement(A, {
                  visible: this.state.bShown && this.isOverlayActive(m.PF),
                  onExitGame: () => this.switchToHomeOverlay(),
                }),
              ),
              d.createElement(
                a.Y9,
                {
                  summonOverlayKey: m.gB,
                  tabName:
                    o > 1 ? (0, v.Xx)("#Desktop_X", r) : (0, v.Xx)("#Desktop"),
                  iconUri: "/dashboard/images/icons/svr_desktop_alt.svg",
                },
                d.createElement(I, {
                  visible: this.isDesktopViewVisible(),
                  fActiveOverlayScale: this.activeOverlayScale,
                  mapWindows: this.state.mapWindows,
                  bWindowViewEnabled: this.state.bWindowViewEnabled,
                  ref: this.m_refDesktopView,
                }),
              ),
              d.createElement(c._, {
                visible: this.state.bShown && this.isOverlayActive(m.A4),
              }),
              !1,
            );
          }
          onAddPortal(e, t) {}
          onRemovePortal(e) {}
          get activeOverlayScale() {
            let e = 1;
            if (this.getActiveOverlayKey()) {
              let t = this.state.mapOverlayState.get(
                this.getActiveOverlayKey(),
              );
              t && (e = t.fScale);
            }
            return e;
          }
          onActiveOverlayScaleChange(e) {
            this.setState((t) => {
              const i = new Map(t.mapOverlayState),
                n = Object.assign(
                  Object.assign({}, i.get(this.getActiveOverlayKey())),
                  { fScale: e },
                );
              return { mapOverlayState: i.set(this.getActiveOverlayKey(), n) };
            });
          }
          onActiveOverlayClosed() {
            var e;
            const t = this.getActiveOverlayKey();
            t &&
              (t.startsWith("system.window.")
                ? null === (e = this.m_refDesktopView.current) ||
                  void 0 === e ||
                  e.onWindowViewClosed(t)
                : this.switchToHomeOverlay(),
              VRHTML.VRDashboardManager.SendOverlayClosed(t));
          }
          onSteamButtonPressed(e) {
            const t = this.getActiveOverlayKey();
            t &&
              (VRHTML.VRDashboardManager.SendOverlayButtonPress(t, e),
              VRHTML.VRDashboardManager.SendOverlayButtonUnpress(t, e));
          }
          renderOverlayControlBar() {
            var e, t, i, n, o;
            const s = this.isDarkMode ? { r: 0.1, g: 0.1, b: 0.1 } : null,
              l = this.isDarkMode ? 0 : 0.1;
            let c = !1,
              h = !1,
              p = !1,
              g = this.getActiveOverlayKey();
            if (g) {
              let e = VRHTML.VROverlay.FindOverlay(g);
              (c =
                !!e &&
                VRHTML.VROverlay.GetFlag(e, a.Z9.EnableControlBarKeyboard)),
                (h =
                  !!e &&
                  VRHTML.VROverlay.GetFlag(e, a.Z9.EnableControlBarClose)),
                (p =
                  !!e &&
                  VRHTML.VROverlay.GetFlag(e, a.Z9.EnableSteamUIButtons));
            }
            const _ =
                null !==
                  (e = S.G3.settings.get(
                    "/settings/dashboard/scaleSliderMin",
                  )) && void 0 !== e
                  ? e
                  : 0.75,
              y =
                null !==
                  (t = S.G3.settings.get(
                    "/settings/dashboard/scaleSliderMax",
                  )) && void 0 !== t
                  ? t
                  : 1.5,
              b =
                null ===
                  (i = S.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === i ||
                i,
              f =
                null !==
                  (n = S.G3.settings.get(
                    "/settings/dashboard/allowTheaterMode",
                  )) &&
                void 0 !== n &&
                n,
              k = b ? m.ml : null,
              R = { x: 0, y: -0.15, z: 0.1 },
              M = this.GetActiveOverlayAnchorIDs();
            return d.createElement(
              d.Fragment,
              null,
              d.createElement(
                a.wx,
                {
                  parent_id: M.strBottomCenterAnchorID,
                  translation: { y: 0.003 },
                },
                d.createElement(
                  a.VW,
                  { color: s },
                  d.createElement(
                    a.s_,
                    {
                      curvature_origin_id: k,
                      origin: a.Ic.TopCenter,
                      interactive: !1,
                      target_width_anchor_id: M.strBottomCenterAnchorID,
                      height: 0.15,
                      min_width: 1.66,
                      debug_name: "ActiveOverlayControlBarBackground",
                      sampler: a.Vv.SingleTap,
                      reflect: l,
                    },
                    d.createElement("div", {
                      className: "OverlayControlBarBackground",
                    }),
                  ),
                ),
              ),
              d.createElement(
                a.wx,
                {
                  parent_id: M.strBottomCenterAnchorID,
                  translation: { y: 0.003, z: 0.001 },
                },
                d.createElement(
                  a.VW,
                  { color: s },
                  d.createElement(
                    a.s_,
                    {
                      curvature_origin_id: k,
                      origin: a.Ic.TopCenter,
                      interactive: !0,
                      target_dpi_panel_id: m.WR,
                      debug_name: "ActiveOverlayControlBar",
                    },
                    d.createElement(
                      "div",
                      { className: "OverlayControlBar" },
                      d.createElement(
                        "div",
                        { className: "Section" },
                        d.createElement(
                          "div",
                          { className: "Label" },
                          (0, v.Xx)("#Size"),
                        ),
                        d.createElement(u.iR, {
                          additionalClassName: "OverlayControlBarSlider",
                          min: _,
                          max: y,
                          value: this.activeOverlayScale,
                          valueStyleVariant: u.px.OnHandle,
                          onChange: this.onActiveOverlayScaleChange,
                          detents: [1],
                          renderValue: (e) => (100 * e).toFixed(0) + "%",
                        }),
                        p &&
                          d.createElement(D.zN, {
                            icon: d.createElement(he.VC, {
                              button: ue.F.HomeMenu,
                              type: he.yV.Knockout,
                              size: he.iM.Medium,
                              additionalClassName: "DashboardActionGlyph",
                            }),
                            title: (0, v.Xx)("#ShowSteamUI_Steam"),
                            tooltipTranslation: R,
                            onClick: () => {
                              this.onSteamButtonPressed(a.ZP.HomeMenu);
                            },
                            additionalClassNames: "ButtonControlFixedHeight",
                          }),
                        p &&
                          d.createElement(D.zN, {
                            icon: d.createElement(he.VC, {
                              button: ue.F.QuickMenu,
                              type: he.yV.Knockout,
                              size: he.iM.Medium,
                              additionalClassName: "DashboardActionGlyph",
                            }),
                            title: (0, v.Xx)("#ShowSteamUI_QAM"),
                            tooltipTranslation: R,
                            onClick: () => {
                              this.onSteamButtonPressed(a.ZP.QuickMenu);
                            },
                            additionalClassNames: "ButtonControlFixedHeight",
                          }),
                        !1,
                        c &&
                          d.createElement(D.CS, {
                            tooltipTranslation: R,
                            activeOverlayKey: this.getActiveOverlayKey(),
                          }),
                        d.createElement(D.zN, {
                          iconUrl: "/dashboard/images/icons/mirror_left.png",
                          title: (0, v.Xx)("#DockOnLeftController"),
                          tooltipTranslation: R,
                          onClick: () => {
                            let e = this.getActiveOverlayKey();
                            this.state.mapOverlayState.has(e) &&
                            this.state.mapOverlayState.get(e).dockLocation ==
                              r.LeftHand
                              ? this.onDockOverlay(e, r.Dashboard)
                              : this.onDockOverlay(e, r.LeftHand);
                          },
                          enabled:
                            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                              a.Kg.TrackedControllerRole_LeftHand,
                            ) != a.Kf,
                          active:
                            this.state.mapOverlayState.has(
                              this.getActiveOverlayKey(),
                            ) &&
                            this.state.mapOverlayState.get(
                              this.getActiveOverlayKey(),
                            ).dockLocation == r.LeftHand,
                        }),
                        d.createElement(D.zN, {
                          iconUrl: "/dashboard/images/icons/mirror_right.png",
                          title: (0, v.Xx)("#DockOnRightController"),
                          tooltipTranslation: R,
                          onClick: () => {
                            let e = this.getActiveOverlayKey();
                            this.state.mapOverlayState.has(e) &&
                            this.state.mapOverlayState.get(e).dockLocation ==
                              r.RightHand
                              ? this.onDockOverlay(e, r.Dashboard)
                              : this.onDockOverlay(e, r.RightHand);
                          },
                          enabled:
                            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                              a.Kg.TrackedControllerRole_RightHand,
                            ) != a.Kf,
                          active:
                            this.state.mapOverlayState.has(
                              this.getActiveOverlayKey(),
                            ) &&
                            this.state.mapOverlayState.get(
                              this.getActiveOverlayKey(),
                            ).dockLocation == r.RightHand,
                        }),
                        d.createElement(D.zN, {
                          iconUrl: "/dashboard/images/icons/icon_move.png",
                          title: (0, v.Xx)("#FloatInWorld"),
                          tooltipTranslation: R,
                          onClick: () => {
                            let e = this.getActiveOverlayKey();
                            this.state.mapOverlayState.has(e) &&
                            this.state.mapOverlayState.get(e).dockLocation ==
                              r.World
                              ? this.onDockOverlay(e, r.Dashboard)
                              : this.onDockOverlay(e, r.World);
                          },
                          active:
                            this.state.mapOverlayState.has(
                              this.getActiveOverlayKey(),
                            ) &&
                            this.state.mapOverlayState.get(
                              this.getActiveOverlayKey(),
                            ).dockLocation == r.World,
                        }),
                        f &&
                          d.createElement(D.zN, {
                            iconUrl: "/dashboard/images/icons/svr_theater.svg",
                            title: "Toggle Theater Mode",
                            tooltipTranslation: R,
                            onClick: () => {
                              let e = this.getActiveOverlayKey();
                              this.state.mapOverlayState.has(e) &&
                              this.state.mapOverlayState.get(e).dockLocation ==
                                r.Theater
                                ? this.onDockOverlay(e, r.Dashboard)
                                : (this.onDockOverlay(e, r.Theater),
                                  null === VRHTML ||
                                    void 0 === VRHTML ||
                                    VRHTML.VRDashboardManager.HideDashboard(
                                      "theater_mode",
                                    ));
                            },
                            active:
                              this.state.mapOverlayState.has(
                                this.getActiveOverlayKey(),
                              ) &&
                              this.state.mapOverlayState.get(
                                this.getActiveOverlayKey(),
                              ).dockLocation == r.Theater,
                          }),
                        h &&
                          d.createElement(D.zN, {
                            iconUrl:
                              "/dashboard/images/icons/icon_close_black.png",
                            title: (0, v.Xx)("#CloseOverlay"),
                            tooltipTranslation: R,
                            onClick: this.onActiveOverlayClosed,
                          }),
                        this.isDesktopOverlayActive() &&
                          (null === (o = this.m_refDesktopView.current) ||
                          void 0 === o
                            ? void 0
                            : o.renderControlBarButtons(R)),
                      ),
                    ),
                  ),
                ),
              ),
            );
          }
          renderDashboard() {
            var e, t, i, n;
            const o = this.computeFilteredOverlayTabs(),
              s = this.hasVRGamepadUIOverlay(),
              l = this.isDarkMode ? { r: 0.02, g: 0.02, b: 0.02 } : null,
              c = this.isDarkMode ? 0 : 0.1,
              u = !s && !this.isDarkMode,
              p = !s && !this.isDarkMode,
              g = !s;
            let _ = [],
              y = [],
              b =
                null !== (e = S.G3.settings.get(m.FM)) && void 0 !== e ? e : 2;
            if (o.length > b) {
              const e = S.G3.settings.get(m.nf);
              (_ = [
                null !== (t = o.find((t) => t.summon_overlay_key == e)) &&
                void 0 !== t
                  ? t
                  : o[0],
              ]),
                (y = o.filter((e) => !_.includes(e)));
            } else _ = o;
            let f = null;
            this.isDesktopOverlayActive() && (f = 2048);
            let R = [];
            this.state.mapWindows.forEach((e) => {
              "" == e.overlay_key && R.push(e);
            });
            const M = this.isScreenshotMode,
              C = M ? 2.5 : 1.8;
            let T = !1,
              w = !0,
              E = !1,
              x = this.getActiveOverlayKey();
            if (x) {
              let e = VRHTML.VROverlay.FindOverlay(x);
              (E = !!e && VRHTML.VROverlay.GetFlag(e, a.Z9.EnableControlBar)),
                (w =
                  !this.state.mapOverlayState.has(x) ||
                  this.state.mapOverlayState.get(x).dockLocation ==
                    r.Dashboard),
                (T =
                  this.state.mapOverlayState.has(x) &&
                  this.state.mapOverlayState.get(x).dockLocation == r.World);
            }
            this.state.bLaserMouseSuppressionActive && (E = !1);
            let I = 2,
              P = 2.5;
            const V = S.G3.settings.get("/settings/dashboard/theaterPosition");
            V == de.Near
              ? ((I *= 0.5), (P *= 0.5))
              : V == de.Middle
                ? ((I *= 1), (P *= 1))
                : V == de.Far && ((I *= 4), (P *= 2.5)),
              S.G3.settings.get("/settings/dashboard/theaterVerticalOffsetCm");
            const O =
                null ===
                  (i = S.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === i ||
                i,
              L = O ? m.ml : null;
            let H = { y: E ? -0.9 : -1.03375, z: 0.05 },
              B = { y: -1.2, z: 0.15 };
            const N = this.state.bLaserMouseSuppressionActive ? 0.1 : 1,
              A = this.isDarkMode ? { r: 0.05, g: 0.05, b: 0.05 } : null;
            let F = O ? 1 : 0;
            const U =
                null !==
                  (n = S.G3.settings.get(
                    "/settings/dashboard/allowFreeTransform",
                  )) &&
                void 0 !== n &&
                n,
              W = this.GetActiveOverlayAnchorIDs(),
              z = s
                ? "VRGamepadUI-Header-Panel-TopCenter"
                : W.strTopCenterAnchorID;
            return d.createElement(
              a.eK,
              {
                bContinuousRelatch: this.state.bPlacementModeActive,
                bFreeDashboardTransform: U && this.state.bPlacementModeActive,
              },
              d.createElement(
                a.wx,
                { translation: {}, parent_path: undefined },
                d.createElement(
                  ae,
                  null,
                  !1,
                  d.createElement(a.wx, { id: L, translation: { z: C } }),
                  d.createElement(
                    a.wx,
                    {
                      translation: {
                        x: M ? 0.1 : 0,
                        y: le.getDashboardVerticalPosition(),
                        z: -le.getDashboardDistance() * (M ? 1.1 : 1),
                      },
                      rotation: { x: M ? -20 : 0 },
                      scale: le.getDashboardScale(),
                    },
                    !s &&
                      d.createElement(
                        a.wx,
                        { parent_id: z, translation: { y: 0.008 } },
                        d.createElement(
                          a.VW,
                          { color: l },
                          d.createElement(
                            a.s_,
                            {
                              curvature_origin_id: L,
                              origin: a.Ic.BottomCenter,
                              interactive: !1,
                              target_dpi_panel_id: m.WR,
                              debug_name: "StatusBar",
                              reflect: c,
                            },
                            d.createElement(
                              "div",
                              { className: "StatusBar", style: { width: f } },
                              d.createElement(
                                "div",
                                { className: "Section Left" },
                                u && this.renderStatusBarTitle(),
                                d.createElement(D.j6, {
                                  role: a.Kg.TrackedControllerRole_LeftHand,
                                  style: k.A.HorizontalPips,
                                }),
                              ),
                              d.createElement(
                                "div",
                                { className: "Section Center" },
                                d.createElement(D.j6, {
                                  deviceIndex: a.wU,
                                  style: k.A.VerticalBattery,
                                }),
                                g && d.createElement(D.M3, null),
                              ),
                              d.createElement(
                                "div",
                                { className: "Section Right" },
                                d.createElement(D.j6, {
                                  role: a.Kg.TrackedControllerRole_RightHand,
                                  style: k.A.HorizontalPips,
                                }),
                                p &&
                                  d.createElement(
                                    "div",
                                    { className: "SteamLogo" },
                                    d.createElement("img", {
                                      src: "/dashboard/images/icons/vr_steam.svg",
                                    }),
                                  ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    d.createElement(
                      a.wx,
                      {
                        id: "active_overlay_transform",
                        translation: H,
                        ref: this.m_refOverlayTransform,
                      },
                      !T && w && this.renderActiveOverlay(),
                      !T &&
                        !w &&
                        d.createElement(
                          D.lL,
                          {
                            additionalClassNames: E ? "WithControlBar" : "",
                            visible: !0,
                          },
                          d.createElement(
                            "div",
                            { className: "NoDesktopFound" },
                            d.createElement(
                              "h2",
                              null,
                              this.state.mapOverlayState.get(x).dockLocation ==
                                r.LeftHand &&
                                (0, v.Xx)("#DockedOnLeftController"),
                              this.state.mapOverlayState.get(x).dockLocation ==
                                r.RightHand &&
                                (0, v.Xx)("#DockedOnRightController"),
                            ),
                            d.createElement(
                              h.z,
                              {
                                className: "ButtonControl",
                                onClick: () => {
                                  this.onDockOverlay(x, r.Dashboard);
                                },
                              },
                              (0, v.Xx)("#DockHere"),
                            ),
                          ),
                        ),
                    ),
                    E && w && this.renderOverlayControlBar(),
                    !1,
                    d.createElement(
                      a.wx,
                      { translation: { x: B.x, y: B.y + 0.08, z: B.z - 0.12 } },
                      d.createElement(se, {
                        bVisible: !0,
                        curvature_origin_id: L,
                        tint: A,
                        opacity: N,
                        onStartMove: this.onGrabStart,
                        onEndMove: this.onGrabEnd,
                      }),
                    ),
                    d.createElement(
                      a.wx,
                      { translation: B, scale: { x: 1, y: 1, z: 1 }, id: m.Qg },
                      d.createElement(
                        a.wx,
                        { rotation: { x: -35 }, curvature_pitch: -35 },
                        this.renderControlBar(_, y),
                      ),
                      this.state.eShowPopoverMenu == ce.Power &&
                        d.createElement(
                          a.wx,
                          {
                            translation: { x: -0.4, y: 0.15, z: 0.05 },
                            rotation: { y: 19 * F },
                          },
                          d.createElement(
                            a.s_,
                            {
                              curvature_origin_id: L,
                              height: void 0,
                              width: 0.925,
                              interactive: !0,
                              origin: a.Ic.BottomRight,
                              debug_name: "Power Menu",
                              sort_depth_bias: -0.1,
                            },
                            this.renderPowerMenu(),
                          ),
                        ),
                      this.state.eShowPopoverMenu == ce.ExternalOverlays &&
                        d.createElement(
                          a.wx,
                          {
                            translation: { x: 0.2, y: 0.15, z: 0.05 },
                            rotation: { y: 6 * F },
                          },
                          d.createElement(
                            a.s_,
                            {
                              curvature_origin_id: L,
                              height: void 0,
                              width: 0.925,
                              interactive: !0,
                              origin: a.Ic.BottomRight,
                              debug_name: "OverlaysList",
                              sort_depth_bias: -0.1,
                            },
                            this.renderPopoverMenu(
                              d.createElement(
                                d.Fragment,
                                null,
                                " ",
                                y.map((e) =>
                                  d.createElement(D.dy, {
                                    key: e.mountable_id,
                                    imageUrl: this.getDashboardIconUri(e),
                                    label: e.tab_name,
                                    onClick: () => {
                                      this.switchToOverlayInternal(
                                        e.summon_overlay_key,
                                      ),
                                        this.showPopoverMenu(ce.None);
                                    },
                                  }),
                                ),
                                " ",
                              ),
                            ),
                          ),
                        ),
                      this.state.eShowPopoverMenu == ce.Windows &&
                        d.createElement(
                          a.wx,
                          {
                            translation: { x: 1.25, y: -0.1, z: 0.35 },
                            rotation: { y: -16 * F },
                          },
                          d.createElement(
                            a.s_,
                            {
                              curvature_origin_id: L,
                              height: void 0,
                              width: 0.925,
                              interactive: !0,
                              origin: a.Ic.BottomRight,
                              debug_name: "WindowList",
                              sort_depth_bias: -0.1,
                            },
                            this.renderPopoverMenu(
                              d.createElement(
                                d.Fragment,
                                null,
                                " ",
                                R.map((e) =>
                                  d.createElement(D.dy, {
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
                                        this.showPopoverMenu(ce.None);
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
            );
          }
        });
        (me.k_sDashboardMailboxName = "systemui_dashboard"),
          (me.k_sSetDashboardFadeSupressionMessage =
            "set_dashboard_fade_suppression"),
          (me.k_sDashboardOverlayCreatedMessage = "dashboard_overlay_created"),
          (me.k_sDashboardOverlayDestroyedMessage =
            "dashboard_overlay_destroyed"),
          (me.k_sUpdateDashboardTabsMessage = "update_dashboard_tabs"),
          (me.k_sRequestDashboardTabsMessage = "request_dashboard_tabs"),
          (me.k_sWindowViewCreatedMessage = "window_view_created"),
          (me.k_sWindowViewDestroyedMessage = "window_view_destroyed"),
          (me.k_sUpdateWindowListMessage = "update_window_list"),
          (me.k_sUpdateDebugInfoMessage = "update_debug_info"),
          (me.k_sSetDashboardForceBoundsVisible =
            "set_dashboard_force_bounds_visible"),
          (me.k_sLaserMouseSuppressionUpdate =
            "laser_mouse_suppression_update"),
          (me.k_nControlBarWidthMeters = 2.667),
          (me.k_nTimeLimitToReturnToActiveOverlayThatVanishedSeconds = 3),
          (me.s_dashboardUserDistance = void 0),
          (me.s_dashboardUserScale = void 0),
          (0, o.gn)(
            [s.ak],
            me.prototype,
            "onSetDashboardFadeSuppression",
            null,
          ),
          (0, o.gn)([s.ak], me.prototype, "onRoomViewChanged", null),
          (0, o.gn)([s.ak], me.prototype, "onLinkStreamActiveEvents", null),
          (0, o.gn)([s.ak], me.prototype, "onGrabStart", null),
          (0, o.gn)([s.ak], me.prototype, "onGrabEnd", null),
          (0, o.gn)(
            [s.ak],
            me.prototype,
            "onSetDashboardForceBoundsVisible",
            null,
          ),
          (0, o.gn)(
            [s.ak],
            me.prototype,
            "onLaserMouseSuppressionUpdate",
            null,
          ),
          (0, o.gn)([s.ak], me.prototype, "onDashboardOverlayCreated", null),
          (0, o.gn)([s.ak], me.prototype, "onDashboardOverlayDestroyed", null),
          (0, o.gn)([s.ak], me.prototype, "onUpdateDashboardTabs", null),
          (0, o.gn)([s.ak], me.prototype, "onWindowViewCreated", null),
          (0, o.gn)([s.ak], me.prototype, "onWindowViewDestroyed", null),
          (0, o.gn)([s.ak], me.prototype, "onUpdateWindowList", null),
          (0, o.gn)([s.ak], me.prototype, "onUpdateDebugInfo", null),
          (0, o.gn)([s.ak], me.prototype, "onDockOverlay", null),
          (0, o.gn)([s.ak], me.prototype, "onShowDashboardRequested", null),
          (0, o.gn)([s.ak], me.prototype, "onHideTheaterMode", null),
          (0, o.gn)([s.ak], me.prototype, "onHideDashboardRequested", null),
          (0, o.gn)([s.ak], me.prototype, "show", null),
          (0, o.gn)([s.ak], me.prototype, "hide", null),
          (0, o.gn)([s.ak], me.prototype, "setPlacementModeActive", null),
          (0, o.gn)([s.ak], me.prototype, "onToggleRoomView", null),
          (0, o.gn)([s.ak], me.prototype, "onQuickLaunchButtonClick", null),
          (0, o.gn)([s.ak], me.prototype, "onQuickStoreButtonClick", null),
          (0, o.gn)([s.ak], me.prototype, "onRecenterClick", null),
          (0, o.gn)([s.ak], me.prototype, "onImmersiveRoomSetupClick", null),
          (0, o.gn)([s.ak], me.prototype, "onToggleGamepadFocus", null),
          (0, o.gn)([s.ak], me.prototype, "renderPowerMenu", null),
          (0, o.gn)([s.ak], me.prototype, "startPopoverMenuTimeout", null),
          (0, o.gn)([s.ak], me.prototype, "clearPopoverMenuTimeout", null),
          (0, o.gn)([s.ak], me.prototype, "showPopoverMenu", null),
          (0, o.gn)([s.ak], me.prototype, "popoverMenuMouseLeave", null),
          (0, o.gn)([s.ak], me.prototype, "popoverMenuMouseUp", null),
          (0, o.gn)([l.Fl], me.prototype, "isScreenshotMode", null),
          (0, o.gn)([s.ak], me.prototype, "hasDashboardOverlay", null),
          (0, o.gn)(
            [s.ak],
            me.prototype,
            "renderExternalOverlayControlBarButton",
            null,
          ),
          (0, o.gn)([s.ak], me.prototype, "isDesktopTrayActive", null),
          (0, o.gn)([s.ak], me.prototype, "isSteamOverlayActive", null),
          (0, o.gn)([s.ak], me.prototype, "isDesktopOverlayActive", null),
          (0, o.gn)([s.ak], me.prototype, "showIncognitoMode", null),
          (0, o.gn)([s.ak], me.prototype, "handlePeerButton", null),
          (0, o.gn)([s.ak], me.prototype, "ToggleIncognitoMode", null),
          (0, o.gn)([s.ak], me.prototype, "ToggleVideoStream", null),
          (0, o.gn)([s.ak], me.prototype, "getRenderModelForShape", null),
          (0, o.gn)([s.ak], me.prototype, "isDesktopViewVisible", null),
          (0, o.gn)([s.ak], me.prototype, "onGameLaunched", null),
          (0, o.gn)([s.ak], me.prototype, "onAddPortal", null),
          (0, o.gn)([s.ak], me.prototype, "onRemovePortal", null),
          (0, o.gn)([l.Fl], me.prototype, "activeOverlayScale", null),
          (0, o.gn)([s.ak], me.prototype, "onActiveOverlayScaleChange", null),
          (0, o.gn)([s.ak], me.prototype, "onActiveOverlayClosed", null),
          (0, o.gn)([s.ak], me.prototype, "onSteamButtonPressed", null),
          (0, o.gn)([l.LO], me, "s_dashboardUserDistance", void 0),
          (0, o.gn)([l.LO], me, "s_dashboardUserScale", void 0),
          (me = le = (0, o.gn)([f.Pi], me));
      },
      6459: (e, t, i) => {
        "use strict";
        i.d(t, {
          B8: () => B,
          CS: () => X,
          D6: () => K,
          Eu: () => T,
          IO: () => L,
          M3: () => x,
          NT: () => N,
          Rk: () => F,
          Yd: () => w,
          dw: () => H,
          dy: () => I,
          j4: () => U,
          j6: () => A,
          lL: () => D,
          wC: () => E,
          z: () => W,
          zN: () => q,
          zk: () => O,
        });
        var n,
          r,
          o = i(655),
          a = i(1569),
          s = i(7056),
          l = i(2188),
          d = i(7062),
          c = i(7294),
          h = i(5177),
          u = i(9755),
          p = i(7475),
          m = i(4979),
          v = i(3107),
          g = i(2749),
          _ = i(7176),
          y = i(3568),
          b = i(7008),
          S = i(8980),
          f = i(9897),
          k = i(1628),
          R = i(8322),
          M = i.n(R),
          C = i(7726);
        const T = new l.vP();
        function w(e) {
          const { summonOverlayKey: t } = e,
            { ids: i, anchors: n } = c.useMemo(() => {
              const e = "DashboardPanel_" + t,
                i = {
                  strTopCenterAnchorID: e + "_TopCenter",
                  strCenterLeftAnchorID: e + "_CenterLeft",
                  strCenterRightAnchorID: e + "_CenterRight",
                  strBottomCenterAnchorID: e + "_BottomCenter",
                };
              return {
                ids: i,
                anchors: c.createElement(
                  c.Fragment,
                  null,
                  c.createElement(a.at, {
                    id: i.strTopCenterAnchorID,
                    location: a.Ic.TopCenter,
                  }),
                  c.createElement(a.at, {
                    id: i.strCenterLeftAnchorID,
                    location: a.Ic.CenterLeft,
                  }),
                  c.createElement(a.at, {
                    id: i.strCenterRightAnchorID,
                    location: a.Ic.CenterRight,
                  }),
                  c.createElement(a.at, {
                    id: i.strBottomCenterAnchorID,
                    location: a.Ic.BottomCenter,
                  }),
                ),
              };
            }, [t]);
          return (
            c.useEffect(
              () => (
                T.set(t, i),
                () => {
                  T.get(t) === i && T.delete(t);
                }
              ),
              [t, i],
            ),
            t ? n : null
          );
        }
        const D = (e) => {
          var t, i, n;
          const r = c.useRef(null),
            o = c.useRef(null);
          c.useEffect(() => {
            var e, t;
            return null === (e = r.current) || void 0 === e
              ? void 0
              : e.setFloatingViewStack(
                  null === (t = o.current) || void 0 === t
                    ? void 0
                    : t.viewStack,
                );
          });
          const s = null === (t = e.scrollable) || void 0 === t || t,
            l =
              null !== (i = e.foregroundReflectMultiplier) && void 0 !== i
                ? i
                : 1,
            d =
              null ===
                (n = k.G3.settings.get("/settings/dashboard/allowCurvature")) ||
              void 0 === n ||
              n
                ? _.ml
                : null;
          return c.createElement(
            c.Fragment,
            null,
            c.createElement(
              a.s_,
              {
                visibility: e.visible ? a.Bl.Visible : a.Bl.Hidden,
                debug_name: "homepanelbackground",
                curvature_origin_id: d,
                origin: a.Ic.BottomCenter,
                interactive: !1,
                scrollable: !1,
                target_dpi_panel_id: _.WR,
                target_dpi_multiplier: 2,
                reflect: 0.01,
                sampler: a.Vv.SingleTap,
              },
              c.createElement(w, { summonOverlayKey: e.summonOverlayKey }),
              c.createElement(
                u.vz,
                { ref: r },
                c.createElement("div", {
                  className: (0, S.LJ)(
                    "DashboardPanelBackground",
                    e.additionalClassNames,
                  ),
                  style: e.additionalStyle,
                }),
              ),
            ),
            c.createElement(
              a.wx,
              { translation: { z: 1e-5 } },
              c.createElement(
                a.s_,
                {
                  visibility: e.visible ? a.Bl.Visible : a.Bl.Hidden,
                  debug_name: e.debugName,
                  curvature_origin_id: d,
                  origin: a.Ic.BottomCenter,
                  interactive: !0,
                  scrollable: s,
                  target_dpi_panel_id: _.WR,
                  reflect: 0.2 * l,
                },
                c.createElement(
                  u.sC,
                  { ref: o },
                  c.createElement(
                    h.q,
                    null,
                    c.createElement(
                      p.P,
                      {
                        scrollDirection: s ? p.I.Vertical : p.I.None,
                        className: (0, S.LJ)(
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
        function E() {
          return c.createElement(
            "div",
            { className: "ActivitySpinner" },
            c.createElement("div", { className: "Bar" }),
            c.createElement("div", { className: "Bar" }),
            c.createElement("div", { className: "Bar" }),
          );
        }
        class x extends c.Component {
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
            const e = y.LJ.GetLocale();
            let t = this.state.time.toLocaleTimeString(e, {
                hour: "numeric",
                minute: "2-digit",
              }),
              i = null;
            const n = t.toLowerCase(),
              r = Math.max(n.lastIndexOf("am"), n.lastIndexOf("pm"));
            return (
              r >= 0 && ((i = t.substring(r)), (t = t.substring(0, r - 1))),
              c.createElement(
                "div",
                { className: "ClockContainer" },
                c.createElement(
                  "div",
                  { className: "Clock" },
                  t,
                  " ",
                  c.createElement("span", { className: "Suffix" }, i),
                ),
              )
            );
          }
        }
        function I(e) {
          return c.createElement(
            h.z,
            { className: "PowerMenuButton", onClick: e.onClick },
            c.createElement("div", { className: "HoverGradient" }),
            c.createElement("div", { className: "ClickGradient" }),
            c.createElement("span", null, e.label),
            e.lineBelow && c.createElement("div", { className: "LineBelow" }),
          );
        }
        (0, o.gn)([s.ak], x.prototype, "updateTime", null);
        let P = (n = class extends c.Component {
          get isShowingTooltip() {
            return n.s_CurrentlyShownTooltip === this;
          }
          show() {
            n.s_CurrentlyShownTooltip = this;
          }
          hide() {
            this.isShowingTooltip && (n.s_CurrentlyShownTooltip = null);
          }
          render() {
            var e;
            const t =
                this.props.text && (this.props.shown || this.isShowingTooltip),
              i = this.props.translation
                ? this.props.translation
                : { x: 0, y: -0.2, z: 0.05 },
              n =
                null ===
                  (e = k.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === e ||
                e
                  ? _.ml
                  : null;
            return c.createElement(
              "div",
              { style: { position: "absolute", left: "50%", top: "50%" } },
              c.createElement(
                b.d,
                { allowableParentSelectors: [".DashboardMain"] },
                c.createElement(
                  a.wx,
                  { translation: i },
                  c.createElement(
                    a.s_,
                    {
                      visibility: t ? a.Bl.Visible : a.Bl.SkipInSceneGraph,
                      target_dpi_panel_id: _.WR,
                      curvature_origin_id: n,
                    },
                    c.createElement(
                      "div",
                      { className: "ControlBarButtonTooltip" },
                      this.props.text,
                    ),
                  ),
                ),
              ),
            );
          }
        });
        (P.s_CurrentlyShownTooltip = null),
          (0, o.gn)([l.Fl], P.prototype, "isShowingTooltip", null),
          (0, o.gn)([l.aD.bound], P.prototype, "show", null),
          (0, o.gn)([l.aD.bound], P.prototype, "hide", null),
          (0, o.gn)([l.LO], P, "s_CurrentlyShownTooltip", void 0),
          (P = n = (0, o.gn)([d.Pi], P));
        class V extends c.Component {
          static ShouldInvertThumbnail(e) {
            if (!e) return !1;
            if (((e = e.toLowerCase()), !V.s_mapShouldInvertThumbnail.has(e))) {
              let t = !1;
              e.endsWith(".svg") && (t = !0),
                e.startsWith("data:") &&
                  V.k_rsThumbnailHashesToInvert.indexOf(M().hash(e)) >= 0 &&
                  (t = !0),
                V.s_mapShouldInvertThumbnail.set(e, t);
            }
            return V.s_mapShouldInvertThumbnail.get(e);
          }
          render() {
            var e;
            const t = null !== (e = this.props.shadow) && void 0 !== e && e,
              i = V.ShouldInvertThumbnail(this.props.src);
            return c.createElement(
              "div",
              { className: "Icon" },
              t &&
                c.createElement("img", {
                  className: "Shadow",
                  src: this.props.src,
                }),
              c.createElement("img", {
                className: (0, S.LJ)(["BlackToWhite", i]),
                src: this.props.src,
              }),
            );
          }
        }
        var O, L;
        (V.k_rsThumbnailHashesToInvert = [
          "5cbd0ebd6459cdaf75fdcafc5051f4e0",
          "c77452e60fc29227b33773ff6e74f8a1",
          "44b62220b39ba717fbfc65e3b4225491",
          "0ea4aa3d9529b716f0f1957684247dee",
          "86bbab56235b55f6e5e7d288342931d7",
        ]),
          (V.s_mapShouldInvertThumbnail = new Map()),
          (function (e) {
            (e[(e.Large = 0)] = "Large"),
              (e[(e.Small = 1)] = "Small"),
              (e[(e.App = 2)] = "App");
          })(O || (O = {})),
          (function (e) {
            (e[(e.Center = 0)] = "Center"), (e[(e.Fill = 1)] = "Fill");
          })(L || (L = {}));
        const H = (e) =>
          c.createElement(
            "div",
            { className: (0, S.LJ)("ControlBarGroup", O[e.style]) },
            e.children,
          );
        let B = class extends c.Component {
          constructor(e) {
            super(e), (this.m_refTooltip = c.createRef());
          }
          onMouseEnter() {
            var e, t, i;
            null === (e = this.m_refTooltip.current) ||
              void 0 === e ||
              e.show(),
              null === (i = (t = this.props).onMouseEnter) ||
                void 0 === i ||
                i.call(t);
          }
          onMouseLeave() {
            var e, t, i;
            null === (e = this.m_refTooltip.current) ||
              void 0 === e ||
              e.hide(),
              null === (i = (t = this.props).onMouseLeave) ||
                void 0 === i ||
                i.call(t);
          }
          render() {
            var e;
            return c.createElement(
              h.z,
              {
                className: (0, S.LJ)(
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
                pressSoundEffect: v.y.ControlBarButtonPress,
                releaseSoundEffect: v.y.ControlBarButtonRelease,
              },
              this.props.centerPanelAnchorID &&
                c.createElement(
                  "div",
                  { style: { position: "absolute", left: "50%", top: "50%" } },
                  c.createElement(b.d, {
                    allowableParentSelectors: [".DashboardMain"],
                    panelAnchorID: this.props.centerPanelAnchorID,
                  }),
                ),
              c.createElement(P, {
                text: this.props.label,
                ref: this.m_refTooltip,
              }),
              c.createElement(V, { src: this.props.imageUrl }),
            );
          }
        };
        (0, o.gn)([s.ak], B.prototype, "onMouseEnter", null),
          (0, o.gn)([s.ak], B.prototype, "onMouseLeave", null),
          (B = (0, o.gn)([d.Pi], B));
        const N = (e) =>
          c.createElement(
            H,
            { style: e.style },
            c.createElement(B, Object.assign({}, e)),
          );
        class A extends c.Component {
          constructor(e) {
            super(e),
              (this.m_BatteryStateChangedCallbackHandle = null),
              (this.m_DeviceRoleChangedCallbackHandle = null),
              (this.m_DeviceEventCallbackHandle = null),
              (this.deviceIndex = a.Kf),
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
            this.m_BatteryStateChangedCallbackHandle &&
              (this.m_BatteryStateChangedCallbackHandle.unregister(),
              (this.m_BatteryStateChangedCallbackHandle = null)),
              this.m_DeviceRoleChangedCallbackHandle &&
                (this.m_DeviceRoleChangedCallbackHandle.unregister(),
                (this.m_DeviceRoleChangedCallbackHandle = null)),
              this.m_DeviceEventCallbackHandle &&
                (this.m_DeviceEventCallbackHandle.unregister(),
                (this.m_DeviceEventCallbackHandle = null));
          }
          updateControllerStatus() {
            if (!VRHTML) return;
            let e = !1,
              t = !1,
              i = a.Kf;
            if (
              (void 0 !== this.props.role
                ? (i = VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                    this.props.role,
                  ))
                : void 0 !== this.props.deviceIndex &&
                  (i = this.props.deviceIndex),
              i != this.deviceIndex &&
                ((this.batteryLevelStable = null),
                (this.devicePowerUsage = null),
                (this.deviceIndex = i)),
              i != a.Kf)
            ) {
              if (
                ((e = VRHTML.VRProperties.GetBoolProperty(
                  i,
                  a.Uk.DeviceProvidesBatteryStatus_Bool,
                )),
                e)
              ) {
                const e = VRHTML.VRProperties.GetFloatProperty(
                  i,
                  a.Uk.DeviceBatteryPercentage_Float,
                );
                (t = VRHTML.VRProperties.GetBoolProperty(
                  i,
                  a.Uk.DeviceIsCharging_Bool,
                )),
                  null == this.batteryLevelStable ||
                  0 == this.batteryLevelStable
                    ? (this.batteryLevelStable = e)
                    : ((this.batteryLevelStable = Math.min(
                        this.batteryLevelStable,
                        e + A.kBatteryLevelHysteresis,
                        1,
                      )),
                      (this.batteryLevelStable = Math.max(
                        this.batteryLevelStable,
                        e - A.kBatteryLevelHysteresis,
                        0,
                      )));
              }
              this.devicePowerUsage = VRHTML.VRProperties.GetFloatProperty(
                i,
                a.Uk.DevicePowerUsage_Float,
              );
            }
            let n = C.X.GetBatteryIcon(
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
          onDeviceEvent(e, t, i) {
            (e != a.XX.Activated && e != a.XX.Deactivated) || this.update();
          }
          render() {
            return c.createElement(
              "div",
              { className: "BatteryStatus" },
              this.devicePowerUsage &&
                c.createElement(
                  "div",
                  { className: "Label" },
                  " ",
                  Math.round(10 * this.devicePowerUsage) / 10,
                  " W ",
                ),
              c.createElement("img", { src: this.state.batteryIconPath }),
            );
          }
        }
        (A.kBatteryLevelHysteresis = 0.02),
          (0, o.gn)([s.ak], A.prototype, "updateControllerStatus", null),
          (0, o.gn)([s.ak], A.prototype, "onBatteryStateChanged", null),
          (0, o.gn)([s.ak], A.prototype, "onDeviceRoleChanged", null),
          (0, o.gn)([s.ak], A.prototype, "onDeviceEvent", null),
          c.Component;
        const F = (e) =>
          c.createElement(
            "div",
            { className: "Title" },
            c.createElement(V, { src: e.iconUrl, shadow: !0 }),
            c.createElement("span", { className: "NoWrapText" }, e.name),
          );
        class U extends c.Component {
          constructor() {
            super(...arguments),
              (this.m_sAnchorID = Math.round(1e7 * Math.random()).toString()),
              (this.m_resizeObserver = null),
              (this.m_refPanelElem = c.createRef()),
              (this.m_refBackgroundElem = c.createRef());
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
            var e;
            const t = this.props.position,
              i = Math.asin(t) / Math.PI,
              n =
                null ===
                  (e = k.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === e ||
                e
                  ? _.ml
                  : null;
            return c.createElement(
              c.Fragment,
              null,
              c.createElement(
                a.at,
                { location: { x: t, y: -1 } },
                c.createElement(a.wx, {
                  id: this.m_sAnchorID,
                  translation: {
                    y: 0.01 * Math.abs(i),
                    z: -0.03 * Math.abs(i),
                  },
                  rotation: { y: 15 * i, z: 2 * i },
                }),
              ),
              c.createElement(
                b.R,
                {
                  allowableParentSelectors: [".DashboardMain"],
                  onPortalDidMount: this.onPortalDidMount,
                },
                c.createElement(
                  a.VW,
                  { color: this.props.tintColor },
                  c.createElement(
                    g.Ti,
                    {
                      additionalClassName: "ControlBarTrayAnimation",
                      visible: this.props.visible,
                      duration: 0.25,
                      onStartShowing: this.updateBackgroundSize,
                      onShown: this.updateBackgroundSize,
                    },
                    c.createElement(
                      a.wx,
                      {
                        parent_id: this.m_sAnchorID,
                        translation: { y: 0.04, z: -0.01 },
                      },
                      c.createElement(
                        a.s_,
                        {
                          curvature_origin_id: n,
                          origin: a.Ic.TopCenter,
                          interactive: !0,
                          scrollable: !0,
                          target_dpi_panel_id: _.WR,
                          sort_depth_bias: this.props.sort_depth_bias,
                        },
                        c.createElement(
                          "div",
                          {
                            className: (0, S.LJ)(
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
                      c.createElement(
                        a.wx,
                        { translation: { z: -1e-5 } },
                        c.createElement(
                          a.s_,
                          {
                            curvature_origin_id: n,
                            origin: a.Ic.TopCenter,
                            interactive: !1,
                            scrollable: !1,
                            target_dpi_panel_id: _.WR,
                            target_dpi_multiplier: 2,
                            reflect: 0.04,
                            sampler: a.Vv.SingleTap,
                            sort_depth_bias: this.props.sort_depth_bias,
                          },
                          c.createElement("div", {
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
        (0, o.gn)([s.ak], U.prototype, "onResizeObserved", null),
          (0, o.gn)([s.ak], U.prototype, "updateBackgroundSize", null),
          (0, o.gn)([s.ak], U.prototype, "onPortalDidMount", null);
        let W = class extends c.Component {
          constructor() {
            super(...arguments),
              (this.m_refSlider = c.createRef()),
              (this.m_refTray = c.createRef()),
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
              k.G3.settings.get(
                "/settings/audio/enablePlaybackMirrorIndependentVolume",
              ) && k.G3.settings.get("/settings/audio/enablePlaybackMirror")
            );
          }
          get enableAudioMirrorControls() {
            return !!k.G3.settings.get(
              "/settings/audio/activePlaybackMirrorDevice",
            );
          }
          render() {
            const e =
              (this.showAudioMirrorControls ? 3 : 2) >= 3
                ? 0
                : this.props.position;
            return c.createElement(
              U,
              Object.assign({}, this.props, {
                position: e,
                ref: this.m_refTray,
                additionalClassNames: "VolumeTray",
              }),
              c.createElement(
                "div",
                { className: "Section" },
                c.createElement(
                  G,
                  {
                    onClick: f.f.Instance.toggleMicrophoneMute,
                    title: f.f.Instance.microphoneMuted
                      ? (0, y.Xx)("#UnmuteMicrophone")
                      : (0, y.Xx)("#MuteMicrophone"),
                  },
                  c.createElement("img", {
                    className: "BlackToWhite",
                    src: f.f.Instance.microphoneMuted
                      ? "/dashboard/images/icons/svr_mic_mute.svg"
                      : "/dashboard/images/icons/svr_mic_active.svg",
                  }),
                ),
                c.createElement(z, {
                  title: (0, y.Xx)("#MicrophoneVolume"),
                  value: f.f.Instance.microphoneVolume,
                  onChange: f.f.Instance.setMicrophoneVolume,
                  onMouseEnter: this.onSliderMouseEnter,
                  onMouseLeave: this.onSliderMouseLeave,
                  onFinalChange: this.onSliderFinalChange,
                  renderValue: (e) => Math.round(100 * e) + "%",
                  valueStyleVariant: m.px.OnHandle,
                  additionalClassName: (0, S.LJ)([
                    "Muted",
                    f.f.Instance.microphoneMuted,
                  ]),
                  interactionEndSoundEffect: v.y.VolumePreview,
                }),
              ),
              this.showAudioMirrorControls &&
                c.createElement(
                  "div",
                  { className: "Section" },
                  c.createElement(
                    G,
                    {
                      onClick: f.f.Instance.toggleMirrorMute,
                      enabled: this.enableAudioMirrorControls,
                      title: f.f.Instance.mirrorMuted
                        ? (0, y.Xx)("#UnmuteAudioMirror")
                        : (0, y.Xx)("#MuteAudioMirror"),
                    },
                    c.createElement("img", {
                      className: "BlackToWhite",
                      src: f.f.Instance.mirrorMuted
                        ? "/dashboard/images/icons/svr_volume_mirror_mute.svg"
                        : "/dashboard/images/icons/svr_volume_mirror.svg",
                    }),
                  ),
                  c.createElement(z, {
                    title: (0, y.Xx)("#AudioMirrorVolume"),
                    value: f.f.Instance.mirrorVolume,
                    enabled: this.enableAudioMirrorControls,
                    onChange: f.f.Instance.setMirrorVolume,
                    onMouseEnter: this.onSliderMouseEnter,
                    onMouseLeave: this.onSliderMouseLeave,
                    onFinalChange: this.onSliderFinalChange,
                    renderValue: (e) => Math.round(100 * e) + "%",
                    valueStyleVariant: m.px.OnHandle,
                    additionalClassName: (0, S.LJ)([
                      "Muted",
                      f.f.Instance.mirrorMuted,
                    ]),
                    interactionEndSoundEffect: v.y.VolumePreview,
                  }),
                ),
              c.createElement(
                "div",
                { className: "Section" },
                c.createElement(
                  G,
                  {
                    onClick: f.f.Instance.toggleMute,
                    title: f.f.Instance.muted
                      ? (0, y.Xx)("#Unmute_Headset")
                      : (0, y.Xx)("#Mute_Headset"),
                  },
                  c.createElement("img", {
                    className: "BlackToWhite",
                    src: f.f.Instance.muted
                      ? "/dashboard/images/icons/svr_volume_mute.svg"
                      : "/dashboard/images/icons/svr_volume.svg",
                  }),
                ),
                c.createElement(z, {
                  title: (0, y.Xx)("#HeadsetVolume"),
                  sliderRef: this.m_refSlider,
                  value: f.f.Instance.volume,
                  onChange: f.f.Instance.setVolume,
                  onMouseEnter: this.onSliderMouseEnter,
                  onMouseLeave: this.onSliderMouseLeave,
                  onFinalChange: this.onSliderFinalChange,
                  renderValue: (e) => Math.round(100 * e) + "%",
                  valueStyleVariant: m.px.OnHandle,
                  additionalClassName: (0, S.LJ)(["Muted", f.f.Instance.muted]),
                  interactionEndSoundEffect: v.y.VolumePreview,
                }),
              ),
            );
          }
        };
        (0, o.gn)([s.ak], W.prototype, "onSliderMouseEnter", null),
          (0, o.gn)([s.ak], W.prototype, "onSliderMouseLeave", null),
          (0, o.gn)([s.ak], W.prototype, "onSliderFinalChange", null),
          (0, o.gn)([l.Fl], W.prototype, "showAudioMirrorControls", null),
          (0, o.gn)([l.Fl], W.prototype, "enableAudioMirrorControls", null),
          (W = (0, o.gn)([d.Pi], W));
        let z = class extends c.Component {
          constructor(e) {
            super(e), (this.state = { bSliding: !1, bHover: !1 });
          }
          onMouseEnter(e) {
            var t, i;
            this.setState({ bHover: !0 }),
              null === (i = (t = this.props).onMouseEnter) ||
                void 0 === i ||
                i.call(t, e);
          }
          onMouseLeave(e) {
            var t, i;
            this.setState({ bHover: !1 }),
              null === (i = (t = this.props).onMouseLeave) ||
                void 0 === i ||
                i.call(t, e);
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
            return c.createElement(
              "div",
              { className: "SliderContainer" },
              this.props.title &&
                c.createElement(P, {
                  text: this.props.title,
                  shown: this.state.bHover || this.state.bSliding,
                }),
              c.createElement(
                m.iR,
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
        (0, o.gn)([s.ak], z.prototype, "onMouseEnter", null),
          (0, o.gn)([s.ak], z.prototype, "onMouseLeave", null),
          (0, o.gn)([s.ak], z.prototype, "onInteractionStart", null),
          (0, o.gn)([s.ak], z.prototype, "onInteractionEnd", null),
          (z = (0, o.gn)([d.Pi], z));
        let G = class extends c.Component {
          constructor(e) {
            super(e), (this.m_refTooltip = c.createRef());
          }
          onMouseEnter(e) {
            var t, i, n;
            null === (t = this.m_refTooltip.current) ||
              void 0 === t ||
              t.show(),
              null === (n = (i = this.props).onMouseEnter) ||
                void 0 === n ||
                n.call(i, e);
          }
          onMouseLeave(e) {
            var t, i, n;
            null === (t = this.m_refTooltip.current) ||
              void 0 === t ||
              t.hide(),
              null === (n = (i = this.props).onMouseLeave) ||
                void 0 === n ||
                n.call(i, e);
          }
          render() {
            return c.createElement(
              h.z,
              Object.assign({}, this.props, {
                className: (0, S.LJ)(
                  "ButtonControl",
                  "Round",
                  this.props.className,
                ),
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave,
              }),
              this.props.title &&
                c.createElement(P, {
                  text: this.props.title,
                  ref: this.m_refTooltip,
                }),
              this.props.children,
            );
          }
        };
        (0, o.gn)([s.ak], G.prototype, "onMouseEnter", null),
          (0, o.gn)([s.ak], G.prototype, "onMouseLeave", null),
          (G = (0, o.gn)([d.Pi], G));
        let K = (r = class extends c.Component {
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
            var t, i;
            (this.m_vecOriginalMousePosition = { x: e.clientX, y: e.clientY }),
              window.document.addEventListener("mouseup", this.onWindowMouseUp),
              window.document.addEventListener(
                "mousemove",
                this.onWindowMouseMove,
              ),
              null === (i = (t = this.props).onShowTray) ||
                void 0 === i ||
                i.call(t);
          }
          onWindowMouseMove(e) {
            if (!this.slider || this.slider.isSliding) return;
            const t = { x: e.clientX, y: e.clientY };
            (0, a.JR)((0, a.Zj)(t, this.m_vecOriginalMousePosition)) >
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
            var e, t, i, n;
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
                (null === (i = (t = this.props).onHideTray) ||
                  void 0 === i ||
                  i.call(t)),
              null === (n = this.slider) ||
                void 0 === n ||
                n.stopExternalSliding();
          }
          render() {
            return c.createElement(B, {
              imageUrl: f.f.Instance.muted
                ? "/dashboard/images/icons/svr_volume_mute.svg"
                : "/dashboard/images/icons/svr_volume.svg",
              active: this.props.active,
              label: this.props.active ? null : (0, y.Xx)("#Volume"),
              onMouseDown: this.onButtonMouseDown,
              onMouseEnter: this.props.onMouseEnter,
              onMouseLeave: this.props.onMouseLeave,
            });
          }
        });
        (K.MIN_DRAG_THRESHOLD = 35),
          (0, o.gn)([s.ak], K.prototype, "onButtonMouseDown", null),
          (0, o.gn)([s.ak], K.prototype, "onWindowMouseMove", null),
          (0, o.gn)([s.ak], K.prototype, "onWindowMouseUp", null),
          (K = r = (0, o.gn)([d.Pi], K));
        const q = (e) => {
          const t = c.useRef();
          return c.createElement(
            h.z,
            {
              className: (0, S.LJ)(
                "ButtonControl",
                ["Active", e.active],
                ["WithIcon", !!e.iconUrl],
                e.additionalClassNames,
              ),
              onClick: e.onClick,
              onMouseDown: e.onMouseDown,
              onMouseUp: e.onMouseUp,
              onMouseEnter: () => {
                var i;
                null === (i = t.current) || void 0 === i || i.show(),
                  e.onMouseEnter && e.onMouseEnter();
              },
              onMouseLeave: () => {
                var i;
                null === (i = t.current) || void 0 === i || i.hide(),
                  e.onMouseLeave && e.onMouseLeave();
              },
              enabled: e.enabled,
            },
            e.title &&
              c.createElement(P, {
                text: e.title,
                translation: e.tooltipTranslation,
                ref: t,
              }),
            e.label && c.createElement("span", null, e.label),
            e.iconUrl &&
              c.createElement("img", {
                className: "Icon BlackToWhite",
                src: e.iconUrl,
              }),
            e.icon,
          );
        };
        function X(e) {
          var t;
          const i = (0, S.aB)(),
            n =
              null !== (t = null == i ? void 0 : i.visible) &&
              void 0 !== t &&
              t,
            r = c.useRef(!1);
          return c.createElement(
            q,
            Object.assign(
              {
                iconUrl: "/dashboard/images/icons/svr_keyboard.svg",
                title: n
                  ? (0, y.Xx)("#HideKeyboardTooltip")
                  : (0, y.Xx)("#ShowKeyboardTooltip"),
                additionalClassNames: "Keyboard",
                onMouseDown: () => {
                  r.current = n;
                },
                onClick: () => {
                  r.current
                    ? VRHTML.VROverlay.HideKeyboard()
                    : (VRHTML.VROverlay.ShowKeyboardForOverlay(
                        e.activeOverlayKey,
                        a.Pw.Normal,
                        a.l0.SingleLine,
                        a.vS.Minimal,
                        "Desktop Text",
                        1024,
                        "",
                        0,
                      ),
                      VRHTML.VROverlay.SetKeyboardPositionForOverlay(
                        e.activeOverlayKey,
                        {},
                      ));
                },
                active: n,
              },
              e,
            ),
          );
        }
      },
      16: (e, t, i) => {
        "use strict";
        i.d(t, { BB: () => u, KU: () => p, Y6: () => m });
        var n,
          r = i(655),
          o = i(7294),
          a = i(7056),
          s = i(1569),
          l = i(3568),
          d = i(7062),
          c = i(8980),
          h = i(1628);
        const u = "resetuniverseorigincountdown",
          p = "begin_reset_universe_origin_countdown";
        let m = (n = class extends o.Component {
          constructor(e) {
            super(e),
              (this.m_countdownTimeout = 0),
              (this.m_fadeFinishTimeout = 0),
              (this.m_mailbox = new s.Nv()),
              this.m_mailbox.Init(u).then(() => {
                this.m_mailbox.RegisterHandler(
                  p,
                  this.OnBeginResetUniverseOriginCountdown,
                );
              }),
              (this.state = {
                visible: !1,
                fading: !1,
                countdown_seconds: 0,
                bDashboardPlacementActive: !1,
              });
          }
          componentWillUnmount() {
            clearTimeout(this.m_countdownTimeout),
              (this.m_countdownTimeout = setTimeout(this.CountdownTick, 1e3)),
              clearTimeout(this.m_fadeFinishTimeout),
              (this.m_fadeFinishTimeout = 0);
          }
          OnBeginResetUniverseOriginCountdown(e) {
            clearTimeout(this.m_countdownTimeout),
              (this.m_countdownTimeout = setTimeout(this.CountdownTick, 1e3)),
              clearTimeout(this.m_fadeFinishTimeout),
              (this.m_fadeFinishTimeout = 0);
            let t = !1;
            if (
              h.G3.settings.get(
                "/settings/dashboard/allowPlacementDuringRecenter",
              )
            ) {
              const e =
                null === s.Co || void 0 === s.Co
                  ? void 0
                  : s.Co.VRApplications.GetSceneApplicationKey();
              t = !e || "system.generated.xrservice" == e;
            }
            t
              ? this.props.dashboardRef.current &&
                this.props.dashboardRef.current.setPlacementModeActive(!0)
              : null === s.Co ||
                void 0 === s.Co ||
                s.Co.VRDashboardManager.HideDashboard("reset_universe_origin"),
              this.setState({
                visible: !0,
                fading: !1,
                countdown_seconds: e.countdown_seconds,
                bDashboardPlacementActive: t,
              });
          }
          CountdownTick() {
            clearTimeout(this.m_countdownTimeout),
              1 == this.state.countdown_seconds
                ? ((this.m_countdownTimeout = 0),
                  this.state.bDashboardPlacementActive &&
                    this.props.dashboardRef.current &&
                    this.props.dashboardRef.current.setPlacementModeActive(!1),
                  null === s.Co ||
                    void 0 === s.Co ||
                    s.Co.VRChaperone.ResetZeroPose(s.zq.Seated),
                  null === s.Co ||
                    void 0 === s.Co ||
                    s.Co.VRChaperone.ResetZeroPose(s.zq.Standing),
                  clearTimeout(this.m_fadeFinishTimeout),
                  (this.m_fadeFinishTimeout = setTimeout(
                    this.HideOverlay,
                    n.kFadeDurationMs,
                  )),
                  this.setState({
                    visible: !0,
                    fading: !0,
                    countdown_seconds: 0,
                    bDashboardPlacementActive: !1,
                  }))
                : ((this.m_countdownTimeout = setTimeout(
                    this.CountdownTick,
                    1e3,
                  )),
                  this.setState({
                    visible: !0,
                    fading: !1,
                    countdown_seconds: this.state.countdown_seconds - 1,
                  }));
          }
          HideOverlay() {
            clearTimeout(this.m_fadeFinishTimeout),
              (this.m_fadeFinishTimeout = 0),
              this.setState({ visible: !1, fading: !1, countdown_seconds: 0 });
          }
          renderPanel() {
            return o.createElement(
              s.s_,
              {
                width: void 0,
                height: n.kPanelHeight,
                interactive: !1,
                sort_order: 1e3,
              },
              o.createElement(
                "div",
                {
                  className: (0, c.LJ)("ResetSeatedCountdownParent", [
                    "Fading",
                    this.state.fading,
                  ]),
                  style: { width: n.kPixelWidth },
                },
                o.createElement(
                  "div",
                  { className: "FlexColumn" },
                  o.createElement(
                    "div",
                    { className: "ResetSeatedCountdownRow" },
                    o.createElement(
                      "div",
                      { className: "ResetSeatedCountdownText" },
                      this.state.countdown_seconds,
                    ),
                  ),
                  o.createElement(
                    "div",
                    { className: "ResetSeatedCountdownTextDesc" },
                    (0, l.Xx)("#Recentering_Countdown"),
                  ),
                ),
              ),
            );
          }
          render() {
            var e, t;
            if (!this.state.visible) return null;
            let i =
                0.8 *
                (null !==
                  (e =
                    null === s.Co || void 0 === s.Co
                      ? void 0
                      : s.Co.VRProperties.GetFloatProperty(
                          s.wU,
                          s.Uk.DashboardScale_Float,
                        )) && void 0 !== e
                  ? e
                  : 1),
              n =
                null !==
                  (t = h.G3.settings.get(
                    "/settings/dashboard/allowFreeTransform",
                  )) &&
                void 0 !== t &&
                t;
            return this.state.bDashboardPlacementActive
              ? o.createElement(
                  s.eK,
                  { bContinuousRelatch: !0, bFreeDashboardTransform: n },
                  o.createElement(
                    s.wx,
                    { translation: { y: -0.05, z: -0.9 }, scale: i },
                    this.renderPanel(),
                  ),
                )
              : o.createElement(
                  s.wx,
                  { parent_path: "/user/head" },
                  o.createElement(
                    s.wx,
                    { translation: { y: -0.05, z: -0.9 }, scale: i },
                    this.renderPanel(),
                  ),
                );
          }
        });
        (m.kPanelHeight = 0.2),
          (m.kPixelWidth = 400),
          (m.kFadeDurationMs = 1e3),
          (0, r.gn)(
            [a.ak],
            m.prototype,
            "OnBeginResetUniverseOriginCountdown",
            null,
          ),
          (0, r.gn)([a.ak], m.prototype, "CountdownTick", null),
          (0, r.gn)([a.ak], m.prototype, "HideOverlay", null),
          (m = n = (0, r.gn)([d.Pi], m));
      },
      4113: (e, t, i) => {
        "use strict";
        var n,
          r = i(655),
          o = i(7294),
          a = i(3935),
          s = i(7056),
          l = i(1569),
          d = i(7062),
          c = i(8980);
        let h = (n = class extends o.Component {
          constructor(e) {
            super(e),
              (this.m_fadeFinishTimeout = 0),
              (this.m_countdownTimeout = 0),
              (this.m_mailbox = new l.Nv()),
              this.m_mailbox.Init("roomsetup-ui").then(() => {
                this.m_mailbox.RegisterHandler(
                  "floorHeightUpdated",
                  this.OnFloorHeightUpdated,
                ),
                  this.m_mailbox.RegisterHandler(
                    "secondsRemainingUpdate",
                    this.OnSecondRemainingUpdate,
                  ),
                  this.m_mailbox.RegisterHandler(
                    "hideRoomSetupUI",
                    this.StartFadeout,
                  ),
                  this.m_mailbox.RegisterHandler("showRoomSetupUI", this.Show);
              }),
              (this.state = {
                visible: !1,
                fading: !1,
                secondsRemaining: null,
                floorId: null,
              });
          }
          componentWillUnmount() {
            clearTimeout(this.m_fadeFinishTimeout),
              (this.m_fadeFinishTimeout = 0);
          }
          OnFloorHeightUpdated(e) {
            null ===
            ("number" == typeof e.floorHeightAtHead
              ? e.floorHeightAtHead
              : null)
              ? this.StartFadeout()
              : e.floorId != this.state.floorId &&
                "number" == typeof e.floorId &&
                this.setState({
                  visible: !0,
                  fading: !1,
                  floorId: e.floorId,
                  secondsRemaining: null,
                });
          }
          OnSecondRemainingUpdate(e) {
            this.setState({ secondsRemaining: e.timeRemaining });
          }
          StartFadeout() {
            this.state.visible &&
              !this.state.fading &&
              (clearTimeout(this.m_fadeFinishTimeout),
              (this.m_fadeFinishTimeout = setTimeout(
                this.HideImmediate,
                n.kFadeDurationMs,
              )),
              this.setState({ visible: !0, fading: !0 }));
          }
          Show() {
            this.setState({ visible: !0, fading: !1 });
          }
          HideImmediate() {
            clearTimeout(this.m_fadeFinishTimeout),
              clearTimeout(this.m_countdownTimeout),
              (this.m_fadeFinishTimeout = 0),
              (this.m_countdownTimeout = 0),
              this.setState({ visible: !1, fading: !1 });
          }
          onRecenterButtonClick() {
            this.m_mailbox.SendMessage("roomsetup-controller", {
              type: "onRecenterButtonClick",
            }),
              this.StartFadeout();
          }
          onAdjustButtonClick() {
            this.m_mailbox.SendMessage("roomsetup-controller", {
              type: "onAdjustButtonClick",
            }),
              this.StartFadeout();
          }
          render() {
            return this.state.visible
              ? (console.log(
                  "Render: fading " + JSON.stringify(this.state.fading),
                ),
                o.createElement(
                  l.wx,
                  { parent_path: "/user/head" },
                  o.createElement(
                    l.wx,
                    {
                      translation: {
                        y: -0.4 * n.kOverlayMetersScaler,
                        z: -1 * n.kOverlayMetersScaler,
                      },
                      rotation: { x: -28 },
                    },
                    o.createElement(
                      l.s_,
                      { width: void 0, height: 0.15, interactive: !0 },
                      o.createElement(
                        "div",
                        {
                          className: (0, c.LJ)("ResetSeatedCountdownParent", [
                            "Fading",
                            this.state.fading,
                          ]),
                        },
                        o.createElement(
                          "div",
                          { className: "FlexColumn" },
                          o.createElement(
                            "div",
                            {
                              className: "Label IPDSettingTextDesc",
                              style: { padding: "10px" },
                            },
                            " Floor Was Updated ",
                          ),
                          o.createElement(
                            "div",
                            { className: "FlexRow" },
                            o.createElement(
                              "div",
                              {
                                className: "Label ButtonControl",
                                onClick: this.onAdjustButtonClick,
                              },
                              " Adjust ",
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ))
              : null;
          }
        });
        var u;
        (h.kFadeDurationMs = 1e3),
          (h.kOverlayMetersScaler = 0.75),
          (0, r.gn)([s.ak], h.prototype, "OnFloorHeightUpdated", null),
          (0, r.gn)([s.ak], h.prototype, "OnSecondRemainingUpdate", null),
          (0, r.gn)([s.ak], h.prototype, "StartFadeout", null),
          (0, r.gn)([s.ak], h.prototype, "Show", null),
          (0, r.gn)([s.ak], h.prototype, "HideImmediate", null),
          (0, r.gn)([s.ak], h.prototype, "onRecenterButtonClick", null),
          (0, r.gn)([s.ak], h.prototype, "onAdjustButtonClick", null),
          (h = n = (0, r.gn)([d.Pi], h)),
          (function (e) {
            (e[(e.FindFloor_Touch = 0)] = "FindFloor_Touch"),
              (e[(e.FindFloor_Height = 1)] = "FindFloor_Height"),
              (e[(e.Room_Walls = 2)] = "Room_Walls"),
              (e[(e.SaveSuccessful = 3)] = "SaveSuccessful"),
              (e[(e.SaveFailed = 4)] = "SaveFailed");
          })(u || (u = {}));
        class p extends o.Component {
          constructor(e) {
            if ((super(e), !VRHTML)) throw new Error("VRHTML is required.");
            (this.state = {
              phase: u.FindFloor_Touch,
              qRawFromRoom: { w: 1, x: 0, y: 0, z: 0 },
              qRoomFromRaw: { w: 1, x: 0, y: 0, z: 0 },
              vMin: { x: 0, y: 0, z: 0 },
              vMax: { x: 0, y: 0, z: 0 },
              vStartingHmdPosition: { x: 0, y: 0, z: 0 },
              fUserHeight: 196,
            }),
              (this.animationFrameHandle = window.requestAnimationFrame(
                this.onAnimationFrame,
              ));
          }
          componentDidMount() {
            this.computeDirectionFromHeadset(), this.resetBoundsToDefault(!0);
          }
          componentWillUnmount() {
            window.cancelAnimationFrame(this.animationFrameHandle),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRChaperone.ForceBoundsVisible(!1),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRChaperoneSetup.HideWorkingSetPreview(),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRChaperoneSetup.RevertWorkingCopy();
          }
          updateLimitsUsingDevice(e) {
            let t = null;
            try {
              t = VRHTML.GetPose(e, l.zq.RawAndUncalibrated);
            } catch (e) {
              return;
            }
            if (!t.bPoseIsValid) return;
            let i = t.xfDeviceToAbsoluteTracking,
              n = (0, l.Fx)(this.state.qRoomFromRaw, i.translation);
            switch (this.state.phase) {
              case u.FindFloor_Touch:
                n.y < this.state.vMin.y &&
                  this.setState({
                    vMin: {
                      x: this.state.vMin.x,
                      y: n.y,
                      z: this.state.vMin.z,
                    },
                  }),
                  n.y > this.state.vMax.y &&
                    this.setState({
                      vMax: {
                        x: this.state.vMax.x,
                        y: n.y,
                        z: this.state.vMax.z,
                      },
                    });
                break;
              case u.Room_Walls:
                n.x < this.state.vMin.x &&
                  this.setState({
                    vMin: {
                      x: n.x,
                      y: this.state.vMin.y,
                      z: this.state.vMin.z,
                    },
                  }),
                  n.x > this.state.vMax.x &&
                    this.setState({
                      vMax: {
                        x: n.x,
                        y: this.state.vMax.y,
                        z: this.state.vMax.z,
                      },
                    }),
                  n.z < this.state.vMin.z &&
                    this.setState({
                      vMin: {
                        x: this.state.vMin.x,
                        y: this.state.vMin.y,
                        z: n.z,
                      },
                    }),
                  n.z > this.state.vMax.z &&
                    this.setState({
                      vMax: {
                        x: this.state.vMax.x,
                        y: this.state.vMax.y,
                        z: n.z,
                      },
                    });
            }
          }
          onAnimationFrame() {
            if (VRHTML) {
              switch (this.state.phase) {
                case u.FindFloor_Touch:
                case u.Room_Walls:
                  this.updateLimitsUsingDevice("/user/head"),
                    this.updateLimitsUsingDevice("/user/hand/right"),
                    this.updateLimitsUsingDevice("/user/hand/left");
              }
              this.animationFrameHandle = window.requestAnimationFrame(
                this.onAnimationFrame,
              );
            }
          }
          componentDidUpdate() {
            this.updatePreview();
          }
          updatePreview() {
            if (!VRHTML) return;
            let e = this.state.vMax.x - this.state.vMin.x,
              t = this.state.vMax.z - this.state.vMin.z;
            VRHTML.VRChaperoneSetup.SetWorkingPlayAreaSize(e, t);
            let i = (0, l.mT)((0, l.ui)(this.state.vMin, this.state.vMax), 0.5),
              n = { x: i.x, y: this.state.vMin.y, z: i.z },
              r = (0, l.Oq)();
            (r.rotation = this.state.qRawFromRoom),
              (r.translation = (0, l.Fx)(this.state.qRawFromRoom, n)),
              VRHTML.VRChaperoneSetup.SetWorkingStandingZeroPoseToRawTrackingPose(
                r,
              );
            let o = [];
            o.push({ x: -e / 2, y: -t / 2 }),
              o.push({ x: e / 2, y: -t / 2 }),
              o.push({ x: e / 2, y: t / 2 }),
              o.push({ x: -e / 2, y: t / 2 }),
              VRHTML.VRChaperoneSetup.SetWorkingPerimeter(o),
              VRHTML.VRChaperoneSetup.ShowWorkingSetPreview();
          }
          computeDirectionFromHeadset() {
            if (!VRHTML) return;
            let e = VRHTML.GetPose("/user/head", l.zq.RawAndUncalibrated),
              t = (0, l.aB)(e.xfDeviceToAbsoluteTracking);
            (t.y = 0), (t = (0, l.M9)(t));
            let i = Math.atan2(t.x, t.z),
              n = (0, l.UU)({ x: 0, y: i, z: 0 }),
              r = (0, l.rN)(n),
              o = (0, l.Fx)(r, e.xfDeviceToAbsoluteTracking.translation);
            this.setState({
              qRawFromRoom: n,
              qRoomFromRaw: r,
              vStartingHmdPosition: o,
            });
          }
          resetBoundsToDefault(e) {
            if (!VRHTML) return;
            let t = 1,
              i = 1;
            e || ((t = 1.5), (i = 1.1));
            let n = VRHTML.GetPose("/user/head", l.zq.RawAndUncalibrated),
              r = (0, l.Fx)(
                this.state.qRoomFromRaw,
                n.xfDeviceToAbsoluteTracking.translation,
              ),
              o = (0, l.ui)(r, { x: -t / 2, y: 0, z: -i / 2 }),
              a = (0, l.ui)(r, { x: t / 2, y: 0, z: i / 2 });
            (o.y = this.state.vMin.y),
              (a.y = this.state.vMax.y),
              this.setState({ vMin: o, vMax: a, vStartingHmdPosition: r });
          }
          resetWalls() {
            this.resetBoundsToDefault(this.state.phase == u.Room_Walls);
          }
          resetFloorToDefault() {
            if (!VRHTML) return;
            let e = VRHTML.GetPose("/user/head", l.zq.RawAndUncalibrated),
              t = (0, l.Fx)(
                this.state.qRoomFromRaw,
                e.xfDeviceToAbsoluteTracking.translation,
              ),
              i = this.state.vMin;
            i.y = t.y - 1;
            let n = this.state.vMax;
            (n.y = t.y + 0.5),
              this.setState({ vMin: i, vMax: n, vStartingHmdPosition: t });
          }
          onSkipWalls() {
            this.resetBoundsToDefault(!0),
              this.setState({}, () => {
                this.saveSetup();
              });
          }
          restartSetup() {
            VRHTML.VRChaperoneSetup.RevertWorkingCopy(),
              this.setState({ phase: u.FindFloor_Touch });
          }
          onFindFloorFromHeight() {
            this.resetFloorToDefault(),
              this.setState({ phase: u.FindFloor_Height });
          }
          onFindFloorFromTouch() {
            this.resetFloorToDefault(),
              this.setState({ phase: u.FindFloor_Touch });
          }
          onConfirmFloor() {
            this.computeDirectionFromHeadset(),
              this.resetBoundsToDefault(!1),
              this.updatePreview(),
              this.setState({ phase: u.Room_Walls });
          }
          confirmWalls() {
            this.saveSetup();
          }
          onConfirmHeight() {
            let e = null;
            try {
              e = VRHTML.GetPose("/user/head", l.zq.RawAndUncalibrated);
            } catch (e) {
              return void this.setState({ phase: u.Room_Walls });
            }
            if (!e.bPoseIsValid)
              return void this.setState({ phase: u.Room_Walls });
            let t = e.xfDeviceToAbsoluteTracking.translation;
            this.computeDirectionFromHeadset(),
              this.setState({
                phase: u.Room_Walls,
                vMin: {
                  x: this.state.vMin.x,
                  y: t.y + 0.08 - this.state.fUserHeight / 100,
                  z: this.state.vMin.z,
                },
              });
          }
          saveSetup() {
            VRHTML.VRChaperoneSetup.CommitWorkingCopy()
              ? this.setState({ phase: u.SaveSuccessful })
              : this.setState({ phase: u.SaveFailed }),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRChaperone.ForceBoundsVisible(!1),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRChaperoneSetup.HideWorkingSetPreview();
          }
          onSliderChange(e) {
            let t = parseFloat(e.target.value);
            this.setState({ fUserHeight: t });
          }
          onSetRoomNow() {
            this.setState({ phase: u.Room_Walls });
          }
          onSetRoomLater() {
            this.saveSetup();
          }
          renderMainUI() {
            let e = this.state.fUserHeight / 2.54,
              t = Math.floor(e / 12),
              i = Math.round(e - 12 * t);
            switch (this.state.phase) {
              case u.FindFloor_Touch:
                return o.createElement(
                  l.s_,
                  { width: 1, interactive: !0 },
                  o.createElement(
                    "div",
                    { className: "FlexColumn panel RoomSetupControls" },
                    o.createElement(
                      "div",
                      { className: "RoomSetupText" },
                      "Hello there! To give you the best Virtual Reality experience (and keep you safe) we need to know a few things about your room.",
                    ),
                    o.createElement(
                      "div",
                      { className: "RoomSetupText" },
                      'Let\'s start with where your floor is. Please touch the floor with one of your controllers and click "Done".',
                    ),
                    o.createElement(
                      "div",
                      { className: "RoomSetupText" },
                      'If would rather estimate the floor\'s position from your own height, you can click the "use my height" button below to do that instead.',
                    ),
                    o.createElement(
                      "div",
                      { className: "FlexRow" },
                      o.createElement(
                        "div",
                        {
                          className: "Label ButtonControl",
                          onClick: this.onConfirmFloor,
                        },
                        "Done",
                      ),
                      o.createElement(
                        "div",
                        {
                          className: "Label ButtonControl",
                          onClick: this.onFindFloorFromHeight,
                        },
                        "Let me tell you how tall I am",
                      ),
                    ),
                    o.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: this.props.returnToMenu,
                      },
                      "Exit",
                    ),
                  ),
                );
              case u.FindFloor_Height:
                return o.createElement(
                  l.s_,
                  { width: 1, interactive: !0 },
                  o.createElement(
                    "div",
                    { className: "FlexColumn panel RoomSetupControls" },
                    o.createElement(
                      "div",
                      { className: "RoomSetupText" },
                      "Maybe your VR system can't see your floor? Or maybe you just don't want to touch the floor with your controller. No problem, we can figure it out if you tell us how tall you are. ",
                    ),
                    o.createElement(
                      "div",
                      { className: "RoomSetupText" },
                      'Please select your height using the slider below, stand up straight, and click "Done" when you\'re finished.',
                    ),
                    o.createElement(
                      "div",
                      { className: "RoomSetupText" },
                      "Height: ",
                      this.state.fUserHeight,
                      " cm (",
                      t,
                      "ft ",
                      i,
                      "in)",
                    ),
                    o.createElement(
                      "div",
                      { className: "FlexColumn HeightSlider" },
                      o.createElement("input", {
                        type: "range",
                        min: 100,
                        max: 250,
                        step: 1,
                        value: this.state.fUserHeight,
                        onChange: this.onSliderChange,
                      }),
                    ),
                    o.createElement(
                      "div",
                      { className: "FlexRow" },
                      o.createElement(
                        "div",
                        {
                          className: "Label ButtonControl",
                          onClick: this.onConfirmHeight,
                        },
                        "Done",
                      ),
                      o.createElement(
                        "div",
                        {
                          className: "Label ButtonControl",
                          onClick: this.onFindFloorFromTouch,
                        },
                        "Let me touch the floor instead",
                      ),
                    ),
                    o.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: this.props.returnToMenu,
                      },
                      "Exit",
                    ),
                  ),
                );
              case u.Room_Walls:
                return o.createElement(
                  l.s_,
                  { width: 1, interactive: !0 },
                  o.createElement(
                    "div",
                    { className: "FlexColumn panel RoomSetupControls" },
                    o.createElement(
                      "div",
                      { className: "RoomSetupText" },
                      "Please reach out with your controllers to stretch the room to include your clear space.",
                    ),
                    o.createElement(
                      "div",
                      { className: "FlexRow" },
                      o.createElement(
                        "div",
                        {
                          className: "Label ButtonControl",
                          onClick: this.computeDirectionFromHeadset,
                        },
                        "Set Forward Direction",
                      ),
                      o.createElement(
                        "div",
                        {
                          className: "Label ButtonControl",
                          onClick: this.resetWalls,
                        },
                        "Reset Walls",
                      ),
                      o.createElement(
                        "div",
                        {
                          className: "Label ButtonControl",
                          onClick: this.confirmWalls,
                        },
                        "Done",
                      ),
                    ),
                    o.createElement(
                      "div",
                      { className: "FlexRow" },
                      o.createElement(
                        "div",
                        {
                          className: "Label ButtonControl",
                          onClick: this.onSkipWalls,
                        },
                        "Skip",
                      ),
                      o.createElement(
                        "div",
                        {
                          className: "Label ButtonControl",
                          onClick: this.onFindFloorFromTouch,
                        },
                        "Back",
                      ),
                      o.createElement(
                        "div",
                        {
                          className: "Label ButtonControl",
                          onClick: this.props.returnToMenu,
                        },
                        "Exit",
                      ),
                    ),
                  ),
                );
              case u.SaveSuccessful:
                return o.createElement(
                  l.s_,
                  { width: 1, interactive: !0 },
                  o.createElement(
                    "div",
                    { className: "FlexColumn panel RoomSetupControls" },
                    o.createElement(
                      "div",
                      { className: "RoomSetupText" },
                      "Your new room setup has been saved.",
                    ),
                    o.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: this.props.returnToMenu,
                      },
                      "Exit",
                    ),
                  ),
                );
              case u.SaveFailed:
                return o.createElement(
                  l.s_,
                  { width: 1, interactive: !0 },
                  o.createElement(
                    "div",
                    { className: "FlexColumn panel RoomSetupControls" },
                    o.createElement(
                      "div",
                      { className: "RoomSetupText" },
                      "Your new room setup could not be saved for some reason. Maybe your hard drive is full?",
                    ),
                    o.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: this.props.returnToMenu,
                      },
                      "Exit",
                    ),
                  ),
                );
            }
            return null;
          }
          render() {
            return o.createElement(
              l.wx,
              { parent_path: "/user/head" },
              o.createElement(
                l.iC,
                {
                  start_angle_threshold: 40,
                  stop_angle_threshold: 17,
                  ease_out_angle_threshold: 90,
                  min_angular_velocity: 105,
                  ease_in_power: 1.5,
                },
                o.createElement(
                  l.wx,
                  { translation: { z: -1 } },
                  this.renderMainUI(),
                ),
              ),
            );
          }
        }
        (0, r.gn)([s.ak], p.prototype, "onAnimationFrame", null),
          (0, r.gn)([s.ak], p.prototype, "updatePreview", null),
          (0, r.gn)([s.ak], p.prototype, "computeDirectionFromHeadset", null),
          (0, r.gn)([s.ak], p.prototype, "resetWalls", null),
          (0, r.gn)([s.ak], p.prototype, "resetFloorToDefault", null),
          (0, r.gn)([s.ak], p.prototype, "onSkipWalls", null),
          (0, r.gn)([s.ak], p.prototype, "restartSetup", null),
          (0, r.gn)([s.ak], p.prototype, "onFindFloorFromHeight", null),
          (0, r.gn)([s.ak], p.prototype, "onFindFloorFromTouch", null),
          (0, r.gn)([s.ak], p.prototype, "onConfirmFloor", null),
          (0, r.gn)([s.ak], p.prototype, "confirmWalls", null),
          (0, r.gn)([s.ak], p.prototype, "onConfirmHeight", null),
          (0, r.gn)([s.ak], p.prototype, "saveSetup", null),
          (0, r.gn)([s.ak], p.prototype, "onSliderChange", null),
          (0, r.gn)([s.ak], p.prototype, "onSetRoomNow", null),
          (0, r.gn)([s.ak], p.prototype, "onSetRoomLater", null);
        var m = i(5365),
          v = i(1628),
          g = i(5774);
        class _ extends o.Component {
          constructor(e) {
            super(e),
              (this.m_deviceEventHandle = null),
              (this.m_progressIndicatorEventHandle = null);
            this.state = {
              sIconPath: "",
              sDevicePath: "",
              sInputPath: "",
              sCurrentAction: void 0,
              flProgress: 0,
            };
          }
          componentDidMount() {
            VRHTML
              ? ((this.m_progressIndicatorEventHandle =
                  VRHTML.RegisterForProgressIndicatorEvents(
                    this.ProgressIndicatorEvent,
                  )),
                (this.m_deviceEventHandle = VRHTML.RegisterForDeviceEvents(
                  this.DeviceEvent,
                )))
              : this.setState({
                  sCurrentAction: "/actions/foo/bar",
                  flProgress: 0.63,
                });
          }
          componentWillUnmount() {
            this.m_progressIndicatorEventHandle &&
              this.m_progressIndicatorEventHandle.unregister(),
              this.m_deviceEventHandle && this.m_deviceEventHandle.unregister();
          }
          ProgressIndicatorEvent(e, t, i, n, r) {
            let o = this.state;
            null == o.sCurrentAction &&
              0 != e &&
              ((o.sCurrentAction = r), (o.sDevicePath = i), (o.sInputPath = n)),
              o.sCurrentAction == r &&
                (0 == e
                  ? ((o.sCurrentAction = void 0), (o.flProgress = 0))
                  : (o.flProgress = e)),
              this.setState(o);
          }
          DeviceEvent(e, t, i) {
            e == l.XX.Deactivated &&
              t == this.state.sDevicePath &&
              this.setState({ sCurrentAction: null, flProgress: 0 });
          }
          render() {
            if (!this.state.sCurrentAction || this.state.flProgress < 0.25)
              return null;
            {
              let e = { x: -0.05, y: 0.06, z: 0.02 };
              "/user/hand/left" == this.state.sDevicePath && (e.x = -e.x);
              let t = 0.05;
              "/user/head" == this.state.sDevicePath && (t = 0.15);
              let i = (100 * (this.state.flProgress - 0.25) * 4) / 3,
                n = o.createElement(
                  l.s_,
                  { width: t },
                  o.createElement(
                    "div",
                    { className: "ProgressContainer" },
                    o.createElement(g.Ip, {
                      background: !0,
                      backgroundPadding: 2,
                      value: i,
                    }),
                    o.createElement("img", {
                      src: "/shared/images/steam_logo.svg",
                      className: "ProgressIcon",
                    }),
                  ),
                );
              return "/user/head" == this.state.sDevicePath
                ? o.createElement(
                    l.wx,
                    { parent_path: "/user/head" },
                    o.createElement(
                      l.wx,
                      { translation: { z: -1.2, y: -0.5 } },
                      o.createElement(l.jm, null, n),
                    ),
                  )
                : o.createElement(
                    "div",
                    null,
                    o.createElement(
                      l.CH,
                      {
                        id: "progress_component",
                        sDevicePath: this.state.sDevicePath,
                        sInputPath: this.state.sInputPath,
                      },
                      o.createElement(
                        l.A4,
                        { vOffset: e },
                        o.createElement(
                          l.jL,
                          {
                            fOffscreenZDepth: -0.3,
                            fOffAxisLimit: 21,
                            fTransitionLimit: 1,
                          },
                          o.createElement(l.x1, {
                            target_id: "progress_component",
                            thickness: 0.002,
                            start_buffer: 0.03,
                            end_buffer: 0.01,
                          }),
                          o.createElement(l.jm, null, n),
                        ),
                      ),
                    ),
                  );
            }
          }
        }
        (0, r.gn)([s.ak], _.prototype, "ProgressIndicatorEvent", null),
          (0, r.gn)([s.ak], _.prototype, "DeviceEvent", null);
        var y,
          b = i(3568);
        function S(e, t, i, n, r) {
          return t == i ? 0 : ((e - t) / (i - t)) * (r - n) + n;
        }
        let f = (y = class extends o.Component {
          constructor(e) {
            var t;
            super(e),
              (this.m_fadeStartTimeout = void 0),
              (this.m_fadeFinishTimeout = void 0);
            const i =
              1e3 *
              (null !==
                (t =
                  null === l.Co || void 0 === l.Co
                    ? void 0
                    : l.Co.VRProperties.GetFloatProperty(
                        l.wU,
                        l.Uk.UserIpdMeters_Float,
                      )) && void 0 !== t
                ? t
                : 0.065);
            (this.state = { ipdValue: i, visible: !1, fading: !1 }),
              null === l.Co ||
                void 0 === l.Co ||
                l.Co.RegisterForIPDEvents(this.IPDChanged),
              v.G3.Init(!1);
          }
          StartFade() {
            clearTimeout(this.m_fadeStartTimeout),
              (this.m_fadeStartTimeout = 0),
              clearTimeout(this.m_fadeFinishTimeout),
              (this.m_fadeFinishTimeout = setTimeout(
                this.HideOverlay,
                y.kFadeDurationMs,
              )),
              this.setState({ fading: !0 });
          }
          HideOverlay() {
            this.setState({ visible: !1 });
          }
          IPDChanged(e) {
            clearTimeout(this.m_fadeStartTimeout),
              (this.m_fadeStartTimeout = setTimeout(
                this.StartFade,
                y.kFadeDelayMs,
              )),
              clearTimeout(this.m_fadeFinishTimeout),
              (this.m_fadeFinishTimeout = 0),
              this.setState({
                ipdValue: 1e3 * (null != e ? e : 0.065),
                visible: !0,
                fading: !1,
              });
          }
          ipdLensSpacer() {
            return o.createElement("div", {
              className: "IPDLensSpacer",
              style: { minWidth: "32px" },
            });
          }
          render() {
            var e, t, i;
            if (!this.state.visible) return null;
            let n = ["IPDParent"];
            this.state.fading && n.push("Fading");
            const r =
                0.9 *
                (null !==
                  (e =
                    null === l.Co || void 0 === l.Co
                      ? void 0
                      : l.Co.VRProperties.GetFloatProperty(
                          l.wU,
                          l.Uk.DashboardScale_Float,
                        )) && void 0 !== e
                  ? e
                  : 1),
              a =
                1e3 *
                (null !==
                  (t =
                    null === l.Co || void 0 === l.Co
                      ? void 0
                      : l.Co.VRProperties.GetFloatProperty(
                          l.wU,
                          l.Uk.IpdUIRangeMinMeters_Float,
                        )) && void 0 !== t
                  ? t
                  : 0.058),
              s =
                1e3 *
                (null !==
                  (i =
                    null === l.Co || void 0 === l.Co
                      ? void 0
                      : l.Co.VRProperties.GetFloatProperty(
                          l.wU,
                          l.Uk.IpdUIRangeMaxMeters_Float,
                        )) && void 0 !== i
                  ? i
                  : 0.07),
              d = (function (e, t, i, n, r) {
                if (
                  !(
                    isFinite(e) &&
                    isFinite(t) &&
                    isFinite(i) &&
                    isFinite(n) &&
                    isFinite(r)
                  )
                )
                  return null;
                const a = 10,
                  s = [],
                  l = t / 25,
                  d = 10 * l,
                  c = d - 5 * l,
                  h = d - 10 * l,
                  u = d + 10 * l,
                  p = d + 5 * l;
                for (let t = n; t <= r; t += 0.5) {
                  const i = S(t, n, r, a, e - a);
                  s.push(
                    o.createElement("circle", {
                      key: "pip" + t,
                      cx: i,
                      cy: d,
                      r: "0.75",
                      stroke: "none",
                      fill: "rgb(128,128,128)",
                    }),
                  );
                }
                for (let t = n; t <= r; t += 2) {
                  const i = S(t, n, r, a, e - a);
                  s.push(
                    o.createElement("line", {
                      key: "line" + t,
                      x1: i,
                      y1: d,
                      x2: i,
                      y2: c,
                      style: { stroke: "rgb(96,96,96)", strokeWidth: 2 },
                    }),
                  );
                }
                {
                  let t = S(64, n, r, a, e - a);
                  s.push(
                    o.createElement("line", {
                      key: "centraltick",
                      x1: t,
                      y1: d,
                      x2: t,
                      y2: h,
                      style: { stroke: "rgb(164,164,164)", strokeWidth: 2 },
                    }),
                  );
                }
                {
                  let t = S(i - 0.5, n, r, a, e - a),
                    l = S(i + 0.5, n, r, a, e - a),
                    d =
                      t +
                      "," +
                      u +
                      " " +
                      l +
                      "," +
                      u +
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
              })(240, 50, this.state.ipdValue, a, s);
            return o.createElement(
              l.wx,
              { parent_path: "/user/head" },
              o.createElement(
                l.wx,
                {
                  translation: { y: -0.3, z: -0.87 },
                  rotation: { x: -28 },
                  scale: r,
                },
                o.createElement(
                  l.s_,
                  {
                    width: void 0,
                    height: y.kPanelHeight,
                    interactive: !1,
                    sort_order: 1e3,
                  },
                  o.createElement(
                    "div",
                    { className: n.join(" "), style: { width: y.kPixelWidth } },
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
                        (0, b.Xx)("#IPD_Description"),
                      ),
                      o.createElement(
                        "div",
                        { className: "IPDLensRow" },
                        o.createElement(
                          "div",
                          { className: "IPDLens FlipImageHorizontal" },
                          " ",
                          d,
                          " ",
                        ),
                        this.ipdLensSpacer(),
                        o.createElement(
                          "div",
                          { className: "IPDLens" },
                          " ",
                          d,
                          " ",
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            );
          }
        });
        (f.kPanelHeight = 0.2),
          (f.kPixelWidth = 600),
          (f.kFadeDelayMs = 1e3),
          (f.kFadeDurationMs = 1e3),
          (0, r.gn)([s.ak], f.prototype, "StartFade", null),
          (0, r.gn)([s.ak], f.prototype, "HideOverlay", null),
          (0, r.gn)([s.ak], f.prototype, "IPDChanged", null),
          (f = y = (0, r.gn)([d.Pi], f));
        var k,
          R,
          M = i(6459);
        !(function (e) {
          (e[(e.Opaque = 0)] = "Opaque"),
            (e[(e.FadingIn = 1)] = "FadingIn"),
            (e[(e.FadingOut = 2)] = "FadingOut");
        })(R || (R = {}));
        let C = (k = class extends o.Component {
          constructor(e) {
            super(e),
              (this.m_hideTimeout = void 0),
              (this.m_fadeTimeout = void 0),
              (this.m_unresponsiveTimeout = void 0),
              (this.m_sceneApplicationStateChangedEventHandle = null),
              (this.m_mountedTime = void 0),
              (this.state = {
                visible: !1,
                opacity: R.Opaque,
                latchedAppName: "",
                latchedAppKey: "",
                latchedSceneApplicationState: null,
                alreadyHidDashboard: !1,
              }),
              v.G3.Init(!1);
          }
          componentDidMount() {
            (this.m_sceneApplicationStateChangedEventHandle =
              null === l.Co || void 0 === l.Co
                ? void 0
                : l.Co.RegisterForSceneApplicationStateChangedEvents(
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
            this.m_unresponsiveTimeout &&
              (clearTimeout(this.m_unresponsiveTimeout),
              (this.m_unresponsiveTimeout = void 0)),
              this.m_fadeTimeout &&
                (clearTimeout(this.m_fadeTimeout),
                (this.m_fadeTimeout = void 0)),
              this.m_hideTimeout &&
                (clearTimeout(this.m_hideTimeout),
                (this.m_hideTimeout = void 0)),
              this.m_sceneApplicationStateChangedEventHandle &&
                (this.m_sceneApplicationStateChangedEventHandle.unregister(),
                (this.m_sceneApplicationStateChangedEventHandle = null));
          }
          maybeHideDashboard(e) {
            if (this.state.alreadyHidDashboard) return;
            const t = l.Co.VRApplications.GetStartingApplicationKey();
            t &&
              t != k.k_sHomeAppKey &&
              (l.Co.VRDashboardManager.HideDashboard(e),
              this.setState({ alreadyHidDashboard: !0 }));
          }
          updateTransitionState() {
            if (!l.Co) return;
            let e = l.Co.VRApplications.GetSceneApplicationState();
            e == l.xY.Starting
              ? (this.state.latchedSceneApplicationState == l.xY.Quitting &&
                  this.resetLatchedValued(),
                this.setState({ latchedSceneApplicationState: e }),
                this.updateLatchedValues(),
                this.show(!1),
                this.cancelUnresponsiveTimeout(),
                this.maybeHideDashboard("transition_app_starting"))
              : e == l.xY.Quitting
                ? (this.state.latchedSceneApplicationState == l.xY.Starting &&
                    this.resetLatchedValued(),
                  this.setState({ latchedSceneApplicationState: e }),
                  this.updateLatchedValues(),
                  this.show(!1),
                  this.cancelUnresponsiveTimeout(),
                  this.maybeHideDashboard("transition_app_quitting"))
                : e == l.xY.Running
                  ? (this.cancelUnresponsiveTimeout(),
                    this.state.visible && this.startFadeOut())
                  : e == l.xY.None
                    ? (this.cancelUnresponsiveTimeout(),
                      this.state.visible && this.hideSoon())
                    : e == l.xY.Waiting &&
                      (this.state.visible
                        ? (this.cancelUnresponsiveTimeout(), this.show(!0))
                        : this.startUnresponsiveTimer());
          }
          startUnresponsiveTimer() {
            null == this.m_unresponsiveTimeout &&
              (this.m_unresponsiveTimeout = setTimeout(
                this.onUnresponsiveTimeout,
                k.kUnresponsiveDelayMs,
              ));
          }
          cancelUnresponsiveTimeout() {
            this.m_unresponsiveTimeout &&
              (clearTimeout(this.m_unresponsiveTimeout),
              (this.m_unresponsiveTimeout = void 0));
          }
          onUnresponsiveTimeout() {
            clearTimeout(this.m_unresponsiveTimeout),
              (this.m_unresponsiveTimeout = void 0),
              this.setState({ latchedSceneApplicationState: l.xY.Waiting }),
              this.show(!0),
              this.updateLatchedValues();
          }
          updateLatchedValues() {
            if (l.Co)
              if (
                l.Co.VRApplications.GetSceneApplicationState() == l.xY.Starting
              ) {
                let e = l.Co.VRApplications.GetStartingApplicationKey();
                e && e.length > 0 && this.setState({ latchedAppKey: e });
                let t = l.Co.GetStartingAppName();
                t && t.length > 0 && this.setState({ latchedAppName: t });
              } else {
                let e = l.Co.VRApplications.GetSceneApplicationKey();
                e && e.length > 0 && this.setState({ latchedAppKey: e });
                let t = l.Co.GetCurrentSceneFocusAppName();
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
                  this.setState({ visible: !0, opacity: R.FadingIn })
                : this.setState({ visible: !0, opacity: R.Opaque });
          }
          cancelFadeOutTimers() {
            this.m_fadeTimeout && clearTimeout(this.m_fadeTimeout),
              this.m_hideTimeout && clearTimeout(this.m_hideTimeout),
              (this.m_fadeTimeout = 0),
              (this.m_hideTimeout = 0);
          }
          hideSoon() {
            this.m_hideTimeout ||
              this.m_fadeTimeout ||
              (this.m_fadeTimeout = setTimeout(
                this.startFadeOut,
                k.kHideDelayMs,
              ));
          }
          startFadeOut() {
            this.m_fadeTimeout &&
              (clearTimeout(this.m_fadeTimeout), (this.m_fadeTimeout = 0)),
              this.setState({ opacity: R.FadingOut }),
              (this.m_hideTimeout = setTimeout(
                this.hideAndResetLatchedValues,
                k.kFadeoutTimeMs,
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
                opacity: R.Opaque,
                alreadyHidDashboard: !1,
              });
          }
          render() {
            if (!this.state.visible) return null;
            if (
              !this.props.dashboardRef.current ||
              this.props.dashboardRef.current.isShown()
            )
              return null;
            let e = "",
              t = "";
            if (
              this.state.latchedAppKey &&
              this.state.latchedAppKey.length > 0 &&
              !this.state.latchedAppKey.includes("system.generated")
            )
              e = "/app/image?app_key=" + this.state.latchedAppKey;
            else {
              let i = 8;
              if (
                ((e =
                  "images/dynamictitle.000" +
                  (Math.abs(
                    (function (e) {
                      let t = 0,
                        i = 0;
                      for (; t < e.length; t++)
                        i = (Math.imul(31, i) + e.charCodeAt(t)) | 0;
                      return i;
                    })(this.state.latchedAppKey),
                  ) %
                    i) +
                  ".png"),
                (t = this.state.latchedAppName),
                !t)
              )
                return null;
            }
            let i = this.state.latchedAppKey === k.k_sHomeAppKey,
              n = !1,
              r = "";
            switch (this.state.latchedSceneApplicationState) {
              case l.xY.Quitting:
                r = (0, b.Xx)("#Now_Quitting");
                break;
              case l.xY.Starting:
                r = (0, b.Xx)(i ? "" : "#Now_Starting");
                break;
              case l.xY.Waiting:
                (r = (0, b.Xx)("#Now_Waiting")), (n = !0);
            }
            let a = r.length > 0,
              s = ["TransitionAppImage"],
              d = ["TransitionAppLabels"],
              c = ["TransitionAppSpinner"];
            this.state.opacity == R.FadingIn
              ? (s.push("FadingIn"), d.push("FadingIn"), c.push("FadingIn"))
              : this.state.opacity == R.FadingOut &&
                (s.push("FadingOut"), d.push("FadingOut"), c.push("FadingOut")),
              n && s.push("Waiting");
            let h = null;
            e.includes("revive.app") && (h = 310);
            const u = m.g.getDashboardDistance();
            return o.createElement(
              l.eK,
              null,
              o.createElement(
                l.wx,
                { translation: { y: -0.1125, z: -u }, scale: 0.244 },
                o.createElement(
                  l.s_,
                  {
                    width: 1.5,
                    height: void 0,
                    interactive: !1,
                    origin: l.Ic.BottomCenter,
                    reflect: 0.05,
                  },
                  o.createElement(
                    "div",
                    {
                      className: s.join(" "),
                      style: {
                        backgroundImage: e ? "url('" + e + "')" : null,
                        height: h,
                      },
                    },
                    " ",
                    t,
                    " ",
                  ),
                ),
                a &&
                  o.createElement(
                    l.wx,
                    { translation: { y: 0.08, z: -0.08 } },
                    o.createElement(
                      l.s_,
                      {
                        width: 1.275,
                        height: void 0,
                        interactive: !1,
                        origin: l.Ic.TopCenter,
                      },
                      o.createElement(
                        "div",
                        { className: d.join(" ") },
                        o.createElement("div", { className: "AppStatus" }, r),
                      ),
                    ),
                  ),
                n &&
                  o.createElement(
                    l.wx,
                    { translation: { y: 0.35, z: 0.05 } },
                    o.createElement(
                      l.s_,
                      { width: 1.5 * 0.1, height: void 0, interactive: !1 },
                      o.createElement(
                        "div",
                        { className: c.join(" ") },
                        o.createElement(M.wC, null),
                      ),
                    ),
                  ),
              ),
            );
          }
        });
        (C.k_sHomeAppKey = "openvr.tool.steamvr_environments"),
          (C.kHideDelayMs = 5e3),
          (C.kUnresponsiveDelayMs = 2e3),
          (C.kFadeoutTimeMs = 550),
          (0, r.gn)([s.ak], C.prototype, "startUnresponsiveTimer", null),
          (0, r.gn)([s.ak], C.prototype, "cancelUnresponsiveTimeout", null),
          (0, r.gn)([s.ak], C.prototype, "onUnresponsiveTimeout", null),
          (0, r.gn)([s.ak], C.prototype, "updateLatchedValues", null),
          (0, r.gn)(
            [s.ak],
            C.prototype,
            "onSceneApplicationStateChanged",
            null,
          ),
          (0, r.gn)([s.ak], C.prototype, "show", null),
          (0, r.gn)([s.ak], C.prototype, "cancelFadeOutTimers", null),
          (0, r.gn)([s.ak], C.prototype, "hideSoon", null),
          (0, r.gn)([s.ak], C.prototype, "startFadeOut", null),
          (0, r.gn)([s.ak], C.prototype, "resetLatchedValued", null),
          (0, r.gn)([s.ak], C.prototype, "hideAndResetLatchedValues", null),
          (C = k = (0, r.gn)([d.Pi], C));
        class T extends o.Component {
          constructor(e) {
            super(e), (this.state = {});
          }
          render() {
            if (!VRHTML) return null;
            let e = VRHTML.VRSystem.GetTrackedDeviceClasses(),
              t = [];
            return (
              e.forEach((e) => {
                e.eClass == l.qR.TrackingReference &&
                  e.sDevicePath &&
                  t.push(
                    o.createElement(
                      l.wx,
                      { parent_path: e.sDevicePath },
                      o.createElement(
                        l.jm,
                        null,
                        o.createElement(
                          l.s_,
                          { width: 0.5 },
                          o.createElement(
                            "div",
                            { className: "FlexColumn" },
                            o.createElement(
                              "div",
                              { className: "Label" },
                              VRHTML.VRProperties.GetStringProperty(
                                e.sDevicePath,
                                l.Uk.SerialNumber_String,
                              ),
                            ),
                            o.createElement(
                              "div",
                              { className: "Label" },
                              VRHTML.VRProperties.GetStringProperty(
                                e.sDevicePath,
                                l.Uk.ManufacturerName_String,
                              ),
                            ),
                            o.createElement(
                              "div",
                              { className: "Label" },
                              VRHTML.VRProperties.GetStringProperty(
                                e.sDevicePath,
                                l.Uk.ModelNumber_String,
                              ),
                            ),
                            o.createElement(
                              "div",
                              { className: "Label" },
                              "Channel: ",
                              VRHTML.VRProperties.GetStringProperty(
                                e.sDevicePath,
                                l.Uk.ModeLabel_String,
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  );
              }),
              o.createElement(
                "div",
                { className: "CalloutTopLevelContainer" },
                t,
              )
            );
          }
        }
        var w,
          D,
          E = i(2188),
          x = i(7726),
          I = i(5177),
          P = i(9942),
          V = i(16),
          O = i(3107),
          L = i(7176),
          H = i(9809),
          B = i(5211),
          N = i(1380),
          A = i(4285);
        class F extends o.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new l.Nv()),
              this.m_mailbox.Init("systemui_devpanel");
          }
          onShowSceneAppBindings() {
            const e = P.H.Instance.SceneAppKey;
            if (e) {
              let t = { type: "request_binding_callouts", app_key: e };
              this.m_mailbox.SendMessage(L.Ml, t);
            }
          }
          onShowDashboardBindings() {
            this.m_mailbox.SendMessage(L.Ml, {
              type: "request_binding_callouts",
              app_key: "openvr.component.vrcompositor",
            });
          }
          onCrashRenderer() {
            null === VRHTML || void 0 === VRHTML || VRHTML.CrashRenderer();
          }
          onHangRenderer() {
            for (;;);
          }
          render() {
            return o.createElement(
              l.Y9,
              {
                id: "dev_panel",
                tabName: "Dev Panel",
                iconUri: "/dashboard/images/icons/icon_settings.png",
                summonOverlayKey: "system.devpanel",
              },
              o.createElement(
                l.s_,
                {
                  height: void 0,
                  width: 2,
                  interactive: !0,
                  scrollable: !0,
                  origin: l.Ic.BottomCenter,
                  debug_name: "DevPanel",
                },
                o.createElement(
                  I.q,
                  { className: "panel DevPanel" },
                  o.createElement("h1", null, "Developer Panel"),
                  o.createElement(
                    I.z,
                    {
                      className: "ButtonControl",
                      onClick: this.props.onStartRoomSetup,
                    },
                    "Start Room Setup",
                  ),
                  o.createElement(
                    I.z,
                    {
                      className: "ButtonControl",
                      onClick: this.props.onToggleBaseInfo,
                    },
                    "Show Basestation Info",
                  ),
                  o.createElement(
                    I.z,
                    {
                      className: "ButtonControl",
                      onClick: this.onShowSceneAppBindings,
                    },
                    "Show Scene App Bindings",
                  ),
                  o.createElement(
                    I.z,
                    {
                      className: "ButtonControl",
                      onClick: this.onShowDashboardBindings,
                    },
                    "Show Dashboard Bindings",
                  ),
                  o.createElement(
                    I.z,
                    {
                      className: "ButtonControl",
                      onClick: this.onCrashRenderer,
                    },
                    "Crash Renderer",
                  ),
                  o.createElement(
                    I.z,
                    {
                      className: "ButtonControl",
                      onClick: this.onHangRenderer,
                    },
                    "Hang Renderer",
                  ),
                  o.createElement(
                    I.z,
                    {
                      className: "ButtonControl",
                      onClick: () => l.n0.Current().toggleDebugPointer(),
                    },
                    "Toggle Debug Pointer",
                  ),
                ),
              ),
            );
          }
        }
        (0, r.gn)([s.ak], F.prototype, "onShowSceneAppBindings", null),
          (0, r.gn)([s.ak], F.prototype, "onShowDashboardBindings", null),
          (0, r.gn)([s.ak], F.prototype, "onCrashRenderer", null),
          (0, r.gn)([s.ak], F.prototype, "onHangRenderer", null);
        class U extends o.Component {
          constructor(e) {
            var t;
            super(e),
              (this.m_mailbox = new l.Nv()),
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
              l.gO,
              { visibleIn0DOF: !0, visibleIn3DOF: !0, visibleIn6DOF: !1 },
              this.state.bWakingBaseStations &&
                o.createElement(
                  l.wx,
                  { parent_path: "/user/head", translation: { z: -2.75 } },
                  o.createElement(
                    l.s_,
                    { width: 2, height: void 0, interactive: !1 },
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
                    l.wx,
                    { translation: { z: 0.23 } },
                    o.createElement(
                      l.s_,
                      { width: 2, height: void 0, interactive: !1 },
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
                          (0, b.Xx)("#WakingUpBaseStations"),
                        ),
                      ),
                    ),
                  ),
                ),
            );
          }
        }
        (0, r.gn)(
          [s.ak],
          U.prototype,
          "onWakingBaseStationsStateChanged",
          null,
        ),
          (0, r.gn)([s.ak], U.prototype, "onImageLoaded", null),
          (function (e) {
            (e[(e.Normal = 0)] = "Normal"),
              (e[(e.RoomSetup = 1)] = "RoomSetup");
          })(D || (D = {}));
        let W = (w = class extends o.Component {
          constructor(e) {
            super(e),
              (this.m_DashboardRequestedCallbackHandle = null),
              (this.m_mailbox = new l.Nv()),
              (this.m_DashboardRef = null),
              (this.m_fidelitySettingsObserver = null),
              (this.m_DeviceEventCallbackHandle = null),
              (this.m_DashboardRef = o.createRef()),
              this.m_mailbox.Init("systemui").then(() => {}),
              (this.state = { mode: D.Normal, bShowBaseInfo: !1 });
          }
          static bootstrap(e) {
            return (0, r.mG)(this, void 0, void 0, function* () {
              let t = document.querySelector(e);
              if (t)
                if ((0, l.Op)() == l.qA.Overlay) {
                  console.log("Bootstrapping " + e),
                    O.G.Instance.preloadSounds(),
                    null === VRHTML ||
                      void 0 === VRHTML ||
                      VRHTML.VROverlay.SetFlag(
                        VRHTML.VROverlay.ThisOverlayHandle(),
                        l.Z9.MakeOverlaysInteractiveIfVisible,
                        !0,
                      ),
                    null === VRHTML ||
                      void 0 === VRHTML ||
                      VRHTML.VROverlay.SetInputMethod(
                        VRHTML.VROverlay.ThisOverlayHandle(),
                        l.qC.Mouse,
                      );
                  try {
                    yield Promise.all([
                      (0, b.CK)(
                        ["vrmonitor", "dashboard", "bindingui"],
                        null === VRHTML || void 0 === VRHTML
                          ? void 0
                          : VRHTML.GetSteamVRLanguage(),
                      ),
                      v.G3.Init(!0),
                      H.I.Init(!0),
                      B.c6.Init(),
                      N.S.Init(),
                      A.E.Init(),
                    ]);
                  } catch (e) {
                    console.error("Failed to initialize systemui:", e);
                  }
                  a.render(
                    o.createElement(l.n0, null, o.createElement(w, null)),
                    t,
                  );
                } else
                  console.error(
                    "Unable to boostrap systemUI because CurrentEnvironment() returns " +
                      l.qA[(0, l.Op)()],
                  );
              else
                console.error(
                  "Unable to boostrap systemUI because " + e + " was not found",
                );
            });
          }
          componentDidMount() {
            (window.toggleDevPanel = this.toggleDevPanel),
              (this.m_DeviceEventCallbackHandle =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.RegisterForDeviceEvents(this.DeviceEvent)),
              (this.m_fidelitySettingsObserver = new c.kB());
          }
          componentWillUnmount() {
            var e, t, i;
            null === (e = this.m_DashboardRequestedCallbackHandle) ||
              void 0 === e ||
              e.unregister(),
              (this.m_DashboardRequestedCallbackHandle = null),
              null === (t = this.m_DeviceEventCallbackHandle) ||
                void 0 === t ||
                t.unregister(),
              (this.m_DeviceEventCallbackHandle = null),
              null === (i = this.m_fidelitySettingsObserver) ||
                void 0 === i ||
                i.cleanup(),
              (this.m_fidelitySettingsObserver = null);
          }
          onOpenRoomSetup() {
            this.setState({ mode: D.RoomSetup });
          }
          toggleDevPanel() {
            this.setDevPanelVisible(!this.devPanelVisible);
          }
          get devPanelVisible() {
            return v.G3.settings.get(w.k_sPropShowDevPanel);
          }
          setDevPanelVisible(e) {
            v.G3.SetSettingsValue(w.k_sPropShowDevPanel, e);
          }
          onToggleBaseInfo() {
            this.setState({ bShowBaseInfo: !this.state.bShowBaseInfo });
          }
          onExitMode() {
            this.setState({ mode: D.Normal });
          }
          DeviceEvent(e, t, i) {
            e == l.XX.Activated &&
              (null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRSystem.GetTrackedDeviceClasses().some(
                    (e) => e.unIndex == i && e.eClass == l.qR.Controller,
                  )) &&
              this.forceUpdate();
          }
          render() {
            let e = [],
              t = 0;
            return (
              VRHTML.VRSystem.GetTrackedDeviceClasses().some(
                (i) => (
                  i.eClass == l.qR.Controller &&
                    (t++,
                    e.push(
                      o.createElement(x.X, {
                        key: "controllerstatus_" + i.unIndex,
                        trackedDeviceIndex: i.unIndex,
                      }),
                    )),
                  t >= 8
                ),
              ),
              e.push(o.createElement(U, { key: "basestationstatus" })),
              e.push(
                o.createElement(m.g, {
                  key: "dashboard",
                  ref: this.m_DashboardRef,
                }),
              ),
              e.push(
                o.createElement(C, {
                  key: "transition",
                  dashboardRef: this.m_DashboardRef,
                }),
              ),
              this.devPanelVisible &&
                e.push(
                  o.createElement(F, {
                    key: "devpanel",
                    onCloseDevPanel: () => this.setDevPanelVisible(!1),
                    onStartRoomSetup: this.onOpenRoomSetup,
                    onToggleBaseInfo: this.onToggleBaseInfo,
                  }),
                ),
              this.state.mode === D.RoomSetup &&
                e.push(
                  o.createElement(p, {
                    key: "roomsetup",
                    returnToMenu: this.onExitMode,
                  }),
                ),
              this.state.bShowBaseInfo && e.push(o.createElement(T, null)),
              e.push(
                o.createElement(V.Y6, {
                  key: "resetseatedcountdown",
                  dashboardRef: this.m_DashboardRef,
                }),
              ),
              e.push(o.createElement(f, { key: "ipd" })),
              e.push(o.createElement(_, { key: "progressindicator" })),
              e.push(o.createElement(h, { key: "roomsetup" })),
              o.createElement("span", null, e)
            );
          }
        });
        (W.k_sPropShowDevPanel = "/settings/dashboard/showDevPanel"),
          (0, r.gn)([s.ak], W.prototype, "onOpenRoomSetup", null),
          (0, r.gn)([s.ak], W.prototype, "toggleDevPanel", null),
          (0, r.gn)([E.Fl], W.prototype, "devPanelVisible", null),
          (0, r.gn)([s.ak], W.prototype, "setDevPanelVisible", null),
          (0, r.gn)([s.ak], W.prototype, "onToggleBaseInfo", null),
          (0, r.gn)([s.ak], W.prototype, "onExitMode", null),
          (0, r.gn)([s.ak], W.prototype, "DeviceEvent", null),
          (W = w = (0, r.gn)([d.Pi], W)),
          console.log("systemui.tsx is running"),
          W.bootstrap("SystemUIRoot");
      },
      1283: (e, t, i) => {
        "use strict";
        i.d(t, { s: () => g });
        var n = i(655),
          r = i(7294),
          o = i(7062),
          a = i(7056),
          s = i(3568),
          l = i(5211),
          d = i(4285),
          c = i(2188),
          h = i(9809),
          u = i(5177),
          p = i(8980),
          m = i(9595);
        let v = class extends r.Component {
          constructor(e) {
            super(e), (this.state = { deviceStatus: null });
          }
          get trackerConfig() {
            return l.c6.GetTrackerBinding(this.props.trackerPath);
          }
          OnTrackerRoleChanged(e) {
            l.c6.SetTrackerBinding(
              this.props.trackerPath,
              e,
              this.trackerConfig.controller_role,
            );
          }
          OnControllerRoleChanged(e) {
            l.c6.SetTrackerBinding(
              this.props.trackerPath,
              this.trackerConfig.role,
              e,
            );
          }
          BuzzTracker() {
            l.c6.PulseHaptics(this.trackerConfig.device_path_handle);
          }
          get deviceInfo() {
            return h.I.GetDeviceInfo(this.props.trackerPath);
          }
          IsConnected() {
            return !(!this.deviceInfo || !this.deviceInfo.is_connected);
          }
          IsIdentifiable() {
            return !(!this.IsConnected() || !this.deviceInfo.is_identifiable);
          }
          render() {
            let e = [];
            "TrackerRole_Handed" == this.trackerConfig.role &&
              (e = [
                "TrackedControllerRole_Invalid",
                "TrackedControllerRole_LeftHand",
                "TrackedControllerRole_RightHand",
              ].map((e) => ({ value: e, sLabel: (0, s.Xx)("#" + e) })));
            const t = this.trackerConfig.device_path_string;
            let i = t;
            const n = "vive_tracker";
            i.includes(n) &&
              (i = i.substring(i.indexOf(n) + n.length, i.length));
            let o = null;
            return (
              this.IsConnected()
                ? this.IsIdentifiable() ||
                  (o = (0, s.Xx)(
                    "#Settings_ViveTracker_Identify_NotIdentifiable",
                  ))
                : (o = (0, s.Xx)(
                    "#Settings_ViveTracker_Identify_NotConnected",
                  )),
              r.createElement(
                m.GV,
                { className: "SettingsItem TrackerEntry" },
                r.createElement(
                  "div",
                  { className: "Label", title: t },
                  r.createElement("span", null, i),
                  r.createElement("div", {
                    title: (0, s.Xx)(
                      this.IsConnected()
                        ? "#Settings_ViveTracker_Connected"
                        : "#Settings_ViveTracker_Disconnected",
                    ),
                    className: (0, p.LJ)(
                      "TrackerConnectionIndicator",
                      ["Connected", d.E.connected && this.IsConnected()],
                      ["Disconnected", d.E.connected && !this.IsConnected()],
                    ),
                  }),
                ),
                r.createElement(
                  "div",
                  { className: (0, p.LJ)("SubsectionStem") },
                  r.createElement(
                    m.GV,
                    { title: o },
                    r.createElement(
                      u.z,
                      {
                        className: "ButtonControl",
                        enabled: this.IsIdentifiable(),
                        onClick: this.BuzzTracker,
                      },
                      (0, s.Xx)("#TrackerEditor_BuzzTracker"),
                    ),
                  ),
                ),
                r.createElement(
                  "div",
                  { className: "Subsection WithStem" },
                  r.createElement(m.Xp, {
                    label: (0, s.Xx)("#Settings_ViveTracker_Role"),
                    items: this.props.validTrackerRoles.map((e) => ({
                      value: e,
                      sLabel: (0, s.Xx)("#" + e),
                    })),
                    value: this.trackerConfig.role,
                    onChange: this.OnTrackerRoleChanged,
                  }),
                  e.length > 0 &&
                    r.createElement(m.Xp, {
                      label: (0, s.Xx)("#Settings_ViveTracker_Hand"),
                      items: e,
                      value: this.trackerConfig.controller_role,
                      onChange: this.OnControllerRoleChanged,
                    }),
                ),
              )
            );
          }
        };
        (0, n.gn)([c.Fl], v.prototype, "trackerConfig", null),
          (0, n.gn)([a.ak], v.prototype, "OnTrackerRoleChanged", null),
          (0, n.gn)([a.ak], v.prototype, "OnControllerRoleChanged", null),
          (0, n.gn)([a.ak], v.prototype, "BuzzTracker", null),
          (0, n.gn)([c.Fl], v.prototype, "deviceInfo", null),
          (v = (0, n.gn)([o.Pi], v));
        let g = class extends r.Component {
          constructor(e) {
            super(e), (this.m_nGetInputStateIntervalHandle = 0);
          }
          componentDidMount() {
            (this.m_nGetInputStateIntervalHandle = window.setInterval(
              () => h.I.GetInputState(),
              2e3,
            )),
              h.I.GetInputState();
          }
          componentWillUnmount() {
            window.clearInterval(this.m_nGetInputStateIntervalHandle);
          }
          render() {
            let e,
              t = l.c6.TrackerBindings;
            return (
              t &&
                t.trackers &&
                (e = t.trackers.map((e, i) =>
                  r.createElement(v, {
                    key: i,
                    trackerPath: e.device_path_string,
                    validTrackerRoles: t.valid_roles,
                  }),
                )),
              r.createElement("div", { className: "TrackerEditorModal" }, e)
            );
          }
        };
        g = (0, n.gn)([o.Pi], g);
      },
      6698: (e, t, i) => {
        "use strict";
        i.d(t, { u: () => r });
        var n = i(7294);
        function r(e) {
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
      },
      9462: () => {},
    },
    i = {};
  function n(e) {
    var r = i[e];
    if (void 0 !== r) return r.exports;
    var o = (i[e] = { id: e, exports: {} });
    return t[e](o, o.exports, n), o.exports;
  }
  (n.m = t),
    (e = []),
    (n.O = (t, i, r, o) => {
      if (!i) {
        var a = 1 / 0;
        for (c = 0; c < e.length; c++) {
          for (var [i, r, o] = e[c], s = !0, l = 0; l < i.length; l++)
            (!1 & o || a >= o) && Object.keys(n.O).every((e) => n.O[e](i[l]))
              ? i.splice(l--, 1)
              : ((s = !1), o < a && (a = o));
          if (s) {
            e.splice(c--, 1);
            var d = r();
            void 0 !== d && (t = d);
          }
        }
        return t;
      }
      o = o || 0;
      for (var c = e.length; c > 0 && e[c - 1][2] > o; c--) e[c] = e[c - 1];
      e[c] = [i, r, o];
    }),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (n.d = (e, t) => {
      for (var i in t)
        n.o(t, i) &&
          !n.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.j = 929),
    (() => {
      var e = { 929: 0 };
      n.O.j = (t) => 0 === e[t];
      var t = (t, i) => {
          var r,
            o,
            [a, s, l] = i,
            d = 0;
          if (a.some((t) => 0 !== e[t])) {
            for (r in s) n.o(s, r) && (n.m[r] = s[r]);
            if (l) var c = l(n);
          }
          for (t && t(i); d < a.length; d++)
            (o = a[d]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return n.O(c);
        },
        i = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      i.forEach(t.bind(null, 0)), (i.push = t.bind(null, i.push.bind(i)));
    })(),
    (n.nc = void 0);
  var r = n.O(void 0, [968, 683], () => n(4113));
  r = n.O(r);
})();
//# sourceMappingURL=systemui.js.map?v=1942fa61a67313069a18
