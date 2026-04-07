var CLSTAMP = "10579910";
(() => {
  "use strict";
  var e,
    t = {
      6090: (e, t, o) => {
        o.d(t, {
          GM: () => r.GM,
          I0: () => n.I0,
          M9: () => n.M9,
          OH: () => l.OH,
          QR: () => d.QR,
          R$: () => l.R$,
          Rk: () => l.Rk,
          Xl: () => l.Xl,
          Zk: () => s.Zk,
          _n: () => n._n,
          b: () => l.b,
          dL: () => i.d,
          en: () => d.en,
          m$: () => a.m,
        });
        var n = o(2824),
          i = (o(3389), o(4120), o(1230), o(5830), o(6186), o(3361)),
          r = (o(111), o(5723), o(3496)),
          s =
            (o(5178),
            o(428),
            o(9011),
            o(7350),
            o(6847),
            o(5227),
            o(10),
            o(1808),
            o(7019)),
          a = (o(1988), o(2527), o(9864)),
          l =
            (o(4189),
            o(322),
            o(1977),
            o(6417),
            o(2303),
            o(8715),
            o(4397),
            o(5459),
            o(8472),
            o(1184),
            o(3725)),
          d = o(4367);
      },
      9864: (e, t, o) => {
        o.d(t, { m: () => s });
        var n,
          i = o(6540),
          r = o(3496);
        !(function (e) {
          (e[(e.Parent = 0)] = "Parent"), (e[(e.World = 1)] = "World");
        })(n || (n = {}));
        class s extends r._J {
          constructor(e) {
            super(e);
          }
          internalRender() {
            var e;
            const t = null === (e = this.props.enabled) || void 0 === e || e,
              o = this.props.rotation_start_angle_threshold
                ? (this.props.rotation_start_angle_threshold * Math.PI) / 180
                : null,
              n = this.props.rotation_stop_angle_threshold
                ? (this.props.rotation_stop_angle_threshold * Math.PI) / 180
                : null,
              r = this.props.rotation_ease_out_angle_threshold
                ? (this.props.rotation_ease_out_angle_threshold * Math.PI) / 180
                : null,
              s = this.props.rotation_min_angular_velocity
                ? (this.props.rotation_min_angular_velocity * Math.PI) / 180
                : null,
              a = this.props.rotation_max_angular_velocity
                ? (this.props.rotation_max_angular_velocity * Math.PI) / 180
                : null;
            return i.createElement(
              "vsg-elastic-head-transform",
              {
                "rotation-start-angle-threshold": o,
                "rotation-stop-angle-threshold": n,
                "rotation-ease-in-time": this.props.rotation_ease_in_time,
                "rotation-ease-in-power": this.props.rotation_ease_in_power,
                "rotation-ease-out-angle-threshold": r,
                "rotation-ease-out-power": this.props.rotation_ease_out_power,
                "rotation-min-angular-velocity": s,
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
                enabled: t,
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
      7019: (e, t, o) => {
        o.d(t, { Lr: () => v, Zk: () => f });
        var n,
          i,
          r,
          s,
          a,
          l,
          d = o(1635),
          u = o(6540),
          p = o(3496),
          h = o(5178),
          _ = o(3236),
          c = o(5723),
          m = o(7600),
          g = o(7727),
          S = o(1651);
        function y(e) {
          if (e) return [e.u, e.v];
        }
        function v(e) {
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
          })(a || (a = {})),
          (function (e) {
            (e[(e.PixelOffset = 0)] = "PixelOffset"),
              (e[(e.ScaleAndCenter = 1)] = "ScaleAndCenter");
          })(l || (l = {}));
        class f extends p._J {
          constructor(e) {
            super(e),
              (this.m_Rect = { x: 0, y: 0, width: 0, height: 0 }),
              (this.m_nEmbeddedIndex = null),
              (this.m_LastDOMContentSize = void 0),
              (this.m_DOMContentSizeChangedCallbacks = new S.l()),
              (this.m_resizeObserver = null),
              (this.m_UVsMin = void 0),
              (this.m_UVsMax = void 0),
              (this.m_bOverdragBlocking = !1),
              (this.m_overdragBlockingElements = []);
            const t =
                void 0 !== this.props.width || void 0 !== this.props.height,
              o = void 0 !== this.props.meters_per_pixel,
              n = void 0 !== this.props.target_dpi_panel_id,
              i =
                void 0 !== this.props.rendermodel_component_device_index ||
                void 0 !== this.props.rendermodel_component_name,
              r =
                void 0 !== this.props.subview_parent_panel_id ||
                void 0 !== this.props.subview_parent_panel_key;
            if (
              i &&
              (void 0 === this.props.rendermodel_component_device_index ||
                void 0 === this.props.rendermodel_component_name)
            )
              throw new Error(
                "Panel requires both rendermodel_component_device_index and rendermodel_component_name to be a rendermodel texture.",
              );
            const s = [t, o, n, i, r].filter((e) => e).length,
              a =
                "an (explicit width and/or height), an explicit meters_per_pixel, a target_panel_dpi panel ID, a rendermodel name, or a parent overlay of which to become a subview.";
            if (0 == s)
              throw new Error(
                `Panel requires one of the following props: ${a}.`,
              );
            if (s > 1)
              throw new Error(
                `Panel cannot have more of the following of the following props: ${a}.`,
              );
            super.setBuildNodeOverride(this.buildNode);
          }
          get lastDOMContentSize() {
            return this.m_LastDOMContentSize;
          }
          RegisterForDOMContentSizeChangedCallback(e) {
            return this.m_DOMContentSizeChangedCallbacks.Register(e);
          }
          isExternal() {
            return !!this.props.overlay_key;
          }
          getExternalOverlayKey() {
            return this.props.overlay_key;
          }
          getEmbeddedIndex() {
            return this.m_nEmbeddedIndex;
          }
          componentWillReceiveProps_UNSAFE() {
            f.s_bPanelsAreDirty = !0;
          }
          componentDidMount() {
            super.componentDidMount(),
              (this.m_resizeObserver = new ResizeObserver(
                this.onResizeObserved,
              )),
              this.m_resizeObserver.observe(this.getCurrentRootElement()),
              (this.m_nEmbeddedIndex = h.O.Current().addEmbeddedPanelUVs(this)),
              (f.s_bPanelsAreDirty = !0),
              this.getCurrentRootElement().addEventListener(
                "mousedown",
                this.onPanelMouseDown,
              ),
              this.forceUpdate();
          }
          onResizeObserved(e, t) {
            h.O.Current().forceLayoutUpdate(),
              (this.m_LastDOMContentSize = {
                clientWidth: e[0].contentRect.width,
                clientHeight: e[0].contentRect.height,
              }),
              this.m_DOMContentSizeChangedCallbacks.Dispatch(
                this.m_LastDOMContentSize,
              );
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
              (f.s_bPanelsAreDirty = !0),
              h.O.Current().removeEmbeddedPanelUVs(this),
              this.m_DOMContentSizeChangedCallbacks.ClearAllCallbacks(),
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
          createOverdragBlockingElement(e, t, o, n) {
            let i = document.createElement("div");
            (i.style.position = "absolute"),
              (i.style.top = t + "px"),
              (i.style.left = e + "px"),
              (i.style.width = o + "px"),
              (i.style.height = n + "px"),
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
            var o, n, i, r, a, l, d, u, _, m;
            if (
              !(
                this.visibility == s.Visible ||
                this.visibility == s.InvisibleButIntersectable
              )
            )
              return [e, null];
            let g = Object.assign(Object.assign({}, e), {
                bInsideReparentedPanel: !1,
                currentPanel: this,
              }),
              S = this.createSgNode(t),
              f = { x: 0, y: 0 };
            f =
              "object" == typeof this.props.origin
                ? (0, p.PG)(this.props.origin, { x: 0, y: 0 })
                : v(this.props.origin);
            const R = this.props.overlay_key,
              C = (0, c.w5)();
            R && R.length > 0
              ? (S.properties.key = R)
              : C
                ? (S.properties.key = C)
                : (S.properties.overlay_handle = (0, c.X4)()),
              (S.properties.uv_min =
                null !== (o = y(this.m_UVsMin)) && void 0 !== o ? o : void 0),
              (S.properties.uv_max =
                null !== (n = y(this.m_UVsMax)) && void 0 !== n ? n : void 0);
            const b = 1 / h.O.Current().m_fCurrentScale;
            let M = this.props.frame_resize_scale_factor;
            return (
              this.props.is_frame_page_main_panel && (M = null != M ? M : 1),
              (S.properties.width =
                null !== (i = this.props.width) && void 0 !== i ? i : void 0),
              (S.properties.height =
                null !== (r = this.props.height) && void 0 !== r ? r : void 0),
              (S.properties["scale-index"] =
                null !== (a = this.props.scale_index) && void 0 !== a ? a : 0),
              (S.properties["min-width"] =
                null !== (l = this.props.min_width) && void 0 !== l
                  ? l
                  : void 0),
              (S.properties["target-width-anchor-id"] = (0, c.bl)(
                this.props.target_width_anchor_id,
              )),
              (S.properties["target-dpi-panel-id"] = (0, c.bl)(
                this.props.target_dpi_panel_id,
              )),
              (S.properties["target-dpi-multiplier"] =
                this.props.target_dpi_multiplier),
              (S.properties["meters-per-pixel"] =
                null != this.props.meters_per_pixel
                  ? this.props.meters_per_pixel * b
                  : void 0),
              (S.properties["subview-parent-panel-key"] =
                this.props.subview_parent_panel_key),
              (S.properties["subview-parent-panel-id"] =
                this.props.subview_parent_panel_id),
              (S.properties["subview-sizing"] = this.props.subview_sizing),
              (S.properties.curvature = this.props.curvature),
              (S.properties["curvature-origin-id"] = (0, c.bl)(
                this.props.curvature_origin_id,
              )),
              (S.properties.spherical = this.props.spherical),
              (S.properties.interactive = this.props.interactive),
              (S.properties.scrollable = this.props.scrollable),
              (S.properties.undocked = this.props.undocked),
              (S.properties.modal = this.props.modal),
              (S.properties["only-visible-with-laser"] =
                this.props.only_visible_with_laser),
              (S.properties["allow-input-capture"] =
                this.props.allow_input_capture),
              (S.properties["lasermouse-filtering"] =
                null === (d = this.props) || void 0 === d
                  ? void 0
                  : d.lasermouse_filtering),
              (S.properties["hide-laser-when-clicking"] =
                this.props.hide_lasermouse_when_clicking),
              (S.properties["hide-laser-intersection"] =
                null === (u = this.props) || void 0 === u
                  ? void 0
                  : u.hide_laser_intersection),
              (S.properties["make-overlays-interactive-if-visible"] =
                this.props.make_overlays_interactive_if_visible),
              (S.properties["is-grab-handle"] = this.props.is_grab_handle),
              (S.properties["embedded-uv-index"] = this.m_nEmbeddedIndex),
              (S.properties.origin = (0, p.Hm)(f)),
              (S.properties.debug_name = this.props.debug_name),
              (S.properties.sampler = this.props.sampler),
              (S.properties.reflect = this.props.reflect),
              (S.properties.stereoscopy = this.props.stereoscopy),
              (S.properties.rendermodel_component_device_index =
                this.props.rendermodel_component_device_index),
              (S.properties.rendermodel_component_name =
                this.props.rendermodel_component_name),
              (S.properties["texture-id"] = (0, c.bl)(this.props.texture_id)),
              (S.properties["sort-order"] = this.props.sort_order),
              (S.properties["sort-depth-bias"] = this.props.sort_depth_bias),
              (S.properties.visibility = this.visibility),
              (S.properties["frame-resize-scale-factor"] = M),
              (S.properties["main-panel-for-frame-page"] =
                this.props.is_frame_page_main_panel),
              (S.properties["steam-input-appid"] =
                null === (_ = this.props.inputFocusParams) || void 0 === _
                  ? void 0
                  : _.unSteamInputAppID),
              (S.properties["vr-input-pid"] =
                null === (m = this.props.inputFocusParams) || void 0 === m
                  ? void 0
                  : m.unVRInputPID),
              [g, S]
            );
          }
          scaleLocalUVToGlobal(e) {
            const t = this.m_UVsMax.u - this.m_UVsMin.u,
              o = this.m_UVsMax.v - this.m_UVsMin.v;
            return {
              u: this.m_UVsMin.u + t * e.u,
              v: this.m_UVsMin.v + o * e.v,
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
            return u.createElement(
              "vsg-node",
              {
                style: { display: this.visibility == s.Hidden ? "none" : null },
              },
              u.createElement(m.tH, null, this.props.children),
              this.props.is_frame_page_main_panel &&
                u.createElement(R, { panel: this, panelID: this.getID() }),
            );
          }
        }
        function R(e) {
          const { panel: t, panelID: o } = e,
            { page: n } = (0, g.N)();
          return (
            u.useEffect(() => {
              const { Unset: e } = null == n ? void 0 : n.SetMainPanel(t);
              return e;
            }, [n, t, o]),
            null
          );
        }
        (f.s_bPanelsAreDirty = !1),
          (0, d.Cg)([_.o], f.prototype, "onResizeObserved", null),
          (0, d.Cg)([_.o], f.prototype, "onPanelMouseDown", null),
          (0, d.Cg)([_.o], f.prototype, "onWindowMouseUp", null),
          (0, d.Cg)([_.o], f.prototype, "buildNode", null);
      },
      1808: (e, t, o) => {
        var n = o(1635),
          i = o(3496),
          r = o(7019),
          s = o(3236);
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
            let o = null;
            "object" == typeof this.props.location
              ? (o = (0, i.PG)(this.props.location, { x: 0, y: 0 }))
              : "number" == typeof this.props.location &&
                (o = (0, r.Lr)(this.props.location));
            let n = this.createSgNode(t);
            if (this.props.latched && null !== this.m_latchedPosition)
              (n.properties["anchor-u"] = this.m_latchedPosition.u),
                (n.properties["anchor-v"] = this.m_latchedPosition.v);
            else if (o) {
              const t = { u: 0.5 * o.x + 0.5, v: -0.5 * o.y + 0.5 },
                i =
                  !e.currentPanel || e.currentPanel.props.overlay_key
                    ? t
                    : e.currentPanel.scaleLocalUVToGlobal(t);
              (n.properties["anchor-u"] = i.u),
                (n.properties["anchor-v"] = i.v);
            } else {
              if (!e.currentPanel)
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              const o = t.ownerDocument,
                i = t.getBoundingClientRect(),
                r = i.left + i.width / 2,
                s = i.top + i.height / 2,
                a = e.currentPanel.m_Rect;
              if (r < a.x || r > a.x + a.width || s < a.y || s > a.y + a.height)
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              const l = o.defaultView.innerWidth,
                d = o.defaultView.innerHeight;
              if (!(d > 0 && l > 0))
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              (n.properties["anchor-u"] = r / l),
                (n.properties["anchor-v"] = s / d);
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
        (0, n.Cg)([s.o], a.prototype, "buildNode", null);
      },
      3361: (e, t, o) => {
        o.d(t, { d: () => a });
        var n,
          i = o(6540),
          r = o(3496),
          s = o(6292);
        !(function (e) {
          (e[(e.Seated = 0)] = "Seated"),
            (e[(e.Standing = 1)] = "Standing"),
            (e[(e.Raw = 2)] = "Raw");
        })(n || (n = {}));
        class a extends r._J {
          constructor(e) {
            super(e);
            if (
              (void 0 === e.parent_path ? 0 : 1) +
                (void 0 === e.parent_origin ? 0 : 1) +
                (void 0 === e.parent_id ? 0 : 1) >
              1
            )
              throw new Error(
                "Transform cannot have more than one parent_ property set.",
              );
          }
          internalRender() {
            var e;
            let t, o, a;
            this.props.transform
              ? ((t = (0, r.j_)(this.props.transform.translation)),
                (o = this.props.transform.rotation),
                (a = this.props.transform.scale))
              : ((t = (0, r.XI)(this.props.translation)
                  ? null === (e = (0, r.UM)(this.props.translation)) ||
                    void 0 === e
                    ? void 0
                    : e.join(" ")
                  : (0, r.j_)(
                      (0, r.Wi)(this.props.translation, { x: 0, y: 0, z: 0 }),
                    )),
                (o =
                  this.props.rotation && "w" in this.props.rotation
                    ? this.props.rotation
                    : (0, s.Fb)(
                        (0, s.tx)(
                          (0, r.Wi)(this.props.rotation, { x: 0, y: 0, z: 0 }),
                          Math.PI / 180,
                        ),
                      )),
                (a =
                  "number" == typeof this.props.scale
                    ? {
                        x: this.props.scale,
                        y: this.props.scale,
                        z: this.props.scale,
                      }
                    : (0, r.Wi)(this.props.scale, { x: 1, y: 1, z: 1 })));
            let l = (0, r.hi)(o),
              d = (0, r.j_)(a);
            return i.createElement(
              "vsg-transform",
              {
                translation: t,
                rotation: l,
                scale: d,
                "curvature-pitch": this.props.curvature_pitch,
                "invert-parent-panel-pitch":
                  this.props.invert_parent_panel_pitch,
                "ignore-parent-scale": this.props.ignore_parent_scale,
                "transform-path": this.props.transform_path,
                "parent-path": this.props.parent_path,
                "parent-origin": n[this.props.parent_origin],
                "parent-id": this.props.parent_id,
                "frame-resize-scale-factor":
                  this.props.frame_resize_scale_factor,
              },
              this.props.children,
            );
          }
        }
      },
      6292: (e, t, o) => {
        function n(e, t) {
          return { x: e.x * t, y: e.y * t, z: e.z * t };
        }
        function i(e) {
          if (void 0 === e) return;
          let t = 0.5 * e.x,
            o = 0.5 * e.y,
            n = 0.5 * e.z,
            i = Math.cos(t),
            r = Math.cos(o),
            s = Math.cos(n),
            a = Math.sin(t),
            l = Math.sin(o),
            d = Math.sin(n);
          return {
            w: i * r * s + a * l * d,
            x: a * r * s + i * l * d,
            y: i * l * s - a * r * d,
            z: i * r * d - a * l * s,
          };
        }
        o.d(t, { Fb: () => i, tx: () => n });
      },
      2824: (e, t, o) => {
        o.d(t, { I0: () => d, M9: () => l, _n: () => u });
        var n = o(1635),
          i = o(7813),
          r = o(3236),
          s = o(1295),
          a = o(776);
        const l = "systemui_dashboard_private",
          d = "binding_callouts/main";
        class u {
          constructor() {
            (this.m_wsWebSocketToServer = void 0),
              (this.connected = !1),
              (this.m_oHandlers = {}),
              (this.m_oWaits = {}),
              (this.m_oConnectWaits = []),
              (this.m_fnConnectResolve = void 0),
              (this.m_nNextMessageNumber = 1),
              (this.Log = new a.wd("Mailbox", () => this.m_sMailboxName)),
              (0, i.makeObservable)(this);
          }
          OpenWebSocketToHost() {
            return new Promise((e, t) => {
              this.Log.Info("Connecting vrmailbox...");
              let o = "ws://127.0.0.1:27062";
              this.m_sWebSecret && (o += "?secret=" + this.m_sWebSecret),
                (this.m_fnConnectResolve = e),
                (this.m_wsWebSocketToServer = new WebSocket(o)),
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
                ),
                this.m_wsWebSocketToServer.addEventListener(
                  "error",
                  this.OnWebSocketError,
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
            return (0, n.sH)(this, void 0, void 0, function* () {
              return (
                (this.m_sMailboxName = u.EnsureUniqueName(e)),
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
            return (0, n.sH)(this, void 0, void 0, function* () {
              this.Log.Warning("Lost connection to host..."),
                (this.connected = !1),
                yield (0, s.IP)(1e3),
                this.OpenWebSocketToHost();
            });
          }
          OnWebSocketError(e) {
            return (0, n.sH)(this, void 0, void 0, function* () {
              this.Log.Error("Mailbox error:", e),
                (this.connected = !1),
                yield (0, s.IP)(1e3),
                this.OpenWebSocketToHost();
            });
          }
          WebSocketSend(e) {
            return (
              null != this.m_wsWebSocketToServer &&
              1 == this.m_wsWebSocketToServer.readyState &&
              (this.m_wsWebSocketToServer.send(e), !0)
            );
          }
          OnWebSocketMessage(e) {
            let t = JSON.parse(e.data),
              o = !1;
            if (
              (this.m_oHandlers.hasOwnProperty(t.type) &&
                (this.m_oHandlers[t.type](t), (o = !0)),
              this.m_oWaits.hasOwnProperty(t.type))
            ) {
              let e = !1;
              for (let o of this.m_oWaits[t.type])
                o.nMessageId == t.message_id && (o.callback(t), (e = !0));
              e
                ? (this.m_oWaits[t.type] = this.m_oWaits[t.type].filter(
                    (e) => e.nMessageId == t.message_id,
                  ))
                : this.Log.Error(
                    `Received a ${t.type} message, but didn't have a matching message_id. Did the other end forget to mirror message_id?`,
                  ),
                (o = !0);
            }
            o || this.Log.Error("Received unhandled message: ", t.type, t);
          }
          RegisterHandler(e, t) {
            this.m_oHandlers[e] = t;
          }
          SendMessage(e, t) {
            return this.WebSocketSend(
              "mailbox_send " + e + " " + JSON.stringify(t),
            );
          }
          WaitForMessage(e, t) {
            return new Promise((o, n) => {
              this.m_oWaits[e] || (this.m_oWaits[e] = []),
                this.m_oWaits[e].push({ callback: o, nMessageId: t });
            });
          }
          WaitForConnect() {
            return new Promise((e, t) => {
              this.connected ? e() : this.m_oConnectWaits.push(e);
            });
          }
          WaitForMailbox(e) {
            return (0, n.sH)(this, void 0, void 0, function* () {
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
          SendMessageAndWaitForResponse(e, t, o) {
            let n = Object.assign({}, t);
            return (
              null == n.returnAddress &&
                (n.returnAddress = this.m_sMailboxName),
              (n.message_id = this.m_nNextMessageNumber++),
              this.SendMessage(e, n),
              this.WaitForMessage(o, n.message_id)
            );
          }
          SendResponse(e, t) {
            if (!e.returnAddress)
              throw new Error("Missing return address on message");
            let o = Object.assign(Object.assign({}, t), {
              message_id: e.message_id,
            });
            (o.message_id = e.message_id), this.SendMessage(e.returnAddress, o);
          }
        }
        (u.s_nNextMailboxNumber = 1),
          (0, n.Cg)([i.observable], u.prototype, "connected", void 0),
          (0, n.Cg)([r.o], u.prototype, "OpenWebSocketToHost", null),
          (0, n.Cg)([r.o], u.prototype, "OnWebSocketOpen", null),
          (0, n.Cg)([r.o], u.prototype, "OnWebSocketClose", null),
          (0, n.Cg)([r.o], u.prototype, "OnWebSocketError", null),
          (0, n.Cg)([r.o], u.prototype, "WebSocketSend", null),
          (0, n.Cg)([r.o], u.prototype, "OnWebSocketMessage", null);
      },
      3725: (e, t, o) => {
        var n, i, r, s;
        function a() {
          var e;
          return null !==
            (e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.Environment()) && void 0 !== e
            ? e
            : n.Unknown;
        }
        o.d(t, {
          OH: () => n,
          R$: () => a,
          Rk: () => p,
          Xl: () => g,
          _E: () => l,
          b: () => S,
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
        let l = 0;
        var d, u, p, h, _, c, m, g, S, y, v, f, R, C, b, M, k, D, w, P, T;
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
        })(d || (d = {})),
          (function (e) {
            (e[(e.Activated = 0)] = "Activated"),
              (e[(e.Deactivated = 1)] = "Deactivated");
          })(u || (u = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"), (e[(e.Mouse = 1)] = "Mouse");
          })(p || (p = {})),
          (function (e) {
            (e[(e.Invalid = 0)] = "Invalid"),
              (e[(e.HMD = 1)] = "HMD"),
              (e[(e.Controller = 2)] = "Controller"),
              (e[(e.GenericTracker = 3)] = "GenericTracker"),
              (e[(e.TrackingReference = 4)] = "TrackingReference"),
              (e[(e.DisplayRedirect = 5)] = "DisplayRedirect");
          })(h || (h = {})),
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
          })(c || (c = {})),
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
          })(m || (m = {})),
          (function (e) {
            (e[(e.Normal = 0)] = "Normal"),
              (e[(e.Password = 1)] = "Password"),
              (e[(e.Submit = 2)] = "Submit");
          })(g || (g = {})),
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
          })(v || (v = {})),
          (function (e) {
            (e[(e.ECameraExposure_Unknown = 0)] = "ECameraExposure_Unknown"),
              (e[(e.ECameraExposure_Nominal = 1)] = "ECameraExposure_Nominal"),
              (e[(e.ECameraExposure_HighExposure = 2)] =
                "ECameraExposure_HighExposure");
          })(f || (f = {})),
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
          })(C || (C = {})),
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
          })(b || (b = {})),
          (function (e) {
            e[(e.Hostname = 0)] = "Hostname";
          })(M || (M = {})),
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
          })(w || (w = {})),
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
          })(P || (P = {})),
          (function (e) {
            (e[(e.Small = 0)] = "Small"),
              (e[(e.Medium = 1)] = "Medium"),
              (e[(e.Large = 2)] = "Large"),
              (e[(e.Gigantic = 3)] = "Gigantic"),
              (e[(e.Standing = 4)] = "Standing");
          })(T || (T = {}));
      },
      4367: (e, t, o) => {
        var n, i, r, s, a, l, d, u, p, h, _, c, m, g;
        o.d(t, { QR: () => s, en: () => r, fD: () => n }),
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
              (e[(e.ActualTrackingSystemName_String = 1054)] =
                "ActualTrackingSystemName_String"),
              (e[(e.AllowCameraToggle_Bool = 1055)] = "AllowCameraToggle_Bool"),
              (e[(e.AllowLightSourceFrequency_Bool = 1056)] =
                "AllowLightSourceFrequency_Bool"),
              (e[(e.HasEyeTracker_Bool = 1060)] = "HasEyeTracker_Bool"),
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
              (e[(e.DashboardLinkSupport_Int32 = 2097)] =
                "DashboardLinkSupport_Int32"),
              (e[(e.DisplayMinUIAnalogGain_Float = 2098)] =
                "DisplayMinUIAnalogGain_Float"),
              (e[(e.DashboardScale_Float = 2091)] = "DashboardScale_Float"),
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
              (e[(e.DriverProvidedIPDVisibility_Bool = 2108)] =
                "DriverProvidedIPDVisibility_Bool"),
              (e[(e.Prop_Hmd_SupportsVRGamepadFocus_Bool = 2117)] =
                "Prop_Hmd_SupportsVRGamepadFocus_Bool"),
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
              (e[(e.SupportsInHMDRoomSetup_Bool = 11003)] =
                "SupportsInHMDRoomSetup_Bool"),
              (e[(e.VRLinkClientHMDSupportsRoomSetupRequests_Bool = 11004)] =
                "VRLinkClientHMDSupportsRoomSetupRequests_Bool"),
              (e[(e.TrackedDeviceProperty_Max = 1e6)] =
                "TrackedDeviceProperty_Max");
          })(n || (n = {})),
          (function (e) {
            (e[(e.k_EButton_System = 0)] = "k_EButton_System"),
              (e[(e.k_EButton_ApplicationMenu = 1)] =
                "k_EButton_ApplicationMenu"),
              (e[(e.k_EButton_Grip = 2)] = "k_EButton_Grip"),
              (e[(e.k_EButton_DPad_Left = 3)] = "k_EButton_DPad_Left"),
              (e[(e.k_EButton_DPad_Up = 4)] = "k_EButton_DPad_Up"),
              (e[(e.k_EButton_DPad_Right = 5)] = "k_EButton_DPad_Right"),
              (e[(e.k_EButton_DPad_Down = 6)] = "k_EButton_DPad_Down"),
              (e[(e.k_EButton_A = 7)] = "k_EButton_A"),
              (e[(e.k_EButton_ProximitySensor = 31)] =
                "k_EButton_ProximitySensor"),
              (e[(e.k_EButton_Axis0 = 32)] = "k_EButton_Axis0"),
              (e[(e.k_EButton_Axis1 = 33)] = "k_EButton_Axis1"),
              (e[(e.k_EButton_Axis2 = 34)] = "k_EButton_Axis2"),
              (e[(e.k_EButton_Axis3 = 35)] = "k_EButton_Axis3"),
              (e[(e.k_EButton_Axis4 = 36)] = "k_EButton_Axis4"),
              (e[(e.k_EButton_SteamVR_Touchpad = 32)] =
                "k_EButton_SteamVR_Touchpad"),
              (e[(e.k_EButton_SteamVR_Trigger = 33)] =
                "k_EButton_SteamVR_Trigger"),
              (e[(e.k_EButton_Dashboard_Back = 2)] =
                "k_EButton_Dashboard_Back"),
              (e[(e.k_EButton_IndexController_A = 2)] =
                "k_EButton_IndexController_A"),
              (e[(e.k_EButton_IndexController_B = 1)] =
                "k_EButton_IndexController_B"),
              (e[(e.k_EButton_IndexController_JoyStick = 35)] =
                "k_EButton_IndexController_JoyStick"),
              (e[(e.k_EButton_Reserved0 = 50)] = "k_EButton_Reserved0"),
              (e[(e.k_EButton_Reserved1 = 51)] = "k_EButton_Reserved1"),
              (e[(e.k_EButton_Max = 64)] = "k_EButton_Max");
          })(i || (i = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.ButtonEnter = 1)] = "ButtonEnter"),
              (e[(e.ButtonLeave = 2)] = "ButtonLeave"),
              (e[(e.Snap = 3)] = "Snap"),
              (e[(e.Sliding = 4)] = "Sliding"),
              (e[(e.SlidingEdge = 5)] = "SlidingEdge");
          })(r || (r = {})),
          (function (e) {
            (e[(e.Minimal = 1)] = "Minimal"),
              (e[(e.Modal = 2)] = "Modal"),
              (e[(e.ShowArrowKeys = 4)] = "ShowArrowKeys"),
              (e[(e.HideDoneKey = 8)] = "HideDoneKey");
          })(s || (s = {})),
          (function (e) {
            (e[(e.Unknown = -1)] = "Unknown"),
              (e[(e.Idle = 0)] = "Idle"),
              (e[(e.UserInteraction = 1)] = "UserInteraction"),
              (e[(e.UserInteraction_Timeout = 2)] = "UserInteraction_Timeout"),
              (e[(e.Standby = 3)] = "Standby"),
              (e[(e.Idle_Timeout = 4)] = "Idle_Timeout");
          })(a || (a = {})),
          (function (e) {
            (e[(e.Notification_Shown = 600)] = "Notification_Shown"),
              (e[(e.Notification_Hidden = 601)] = "Notification_Hidden"),
              (e[(e.Notification_BeginInteraction = 602)] =
                "Notification_BeginInteraction"),
              (e[(e.Notification_Destroyed = 603)] = "Notification_Destroyed");
          })(l || (l = {})),
          (function (e) {
            (e[(e.TheaterFast = 0)] = "TheaterFast"),
              (e[(e.TheaterSlow = 1)] = "TheaterSlow");
          })(d || (d = {})),
          (function (e) {
            (e[(e.Constant = 0)] = "Constant"),
              (e[(e.Nearest = 1)] = "Nearest"),
              (e[(e.Linear = 2)] = "Linear"),
              (e[(e.SmoothStep = 3)] = "SmoothStep"),
              (e[(e.SmootherStep = 4)] = "SmootherStep");
          })(u || (u = {})),
          (function (e) {
            (e[(e.Invalid = 0)] = "Invalid"),
              (e[(e.RecenterCountdown = 1)] = "RecenterCountdown"),
              (e[(e.FloorAdjustExisting = 2)] = "FloorAdjustExisting"),
              (e[(e.RoomSetupFloor = 3)] = "RoomSetupFloor"),
              (e[(e.ClearRoomSetup = 4)] = "ClearRoomSetup"),
              (e[(e.RoomSetupFull = 5)] = "RoomSetupFull");
          })(p || (p = {})),
          (function (e) {
            (e[(e.Near = 0)] = "Near"),
              (e[(e.Middle = 1)] = "Middle"),
              (e[(e.Far = 2)] = "Far"),
              (e[(e.VRGamepadUI = 3)] = "VRGamepadUI");
          })(h || (h = {})),
          (function (e) {
            (e[(e.__LocalSteamVR = 0)] = "__LocalSteamVR"),
              (e[(e.__LocalSteam = 1)] = "__LocalSteam"),
              (e[(e.__RemoteSteamVR = 2)] = "__RemoteSteamVR"),
              (e[(e.__RemoteSteam = 3)] = "__RemoteSteam"),
              (e[(e.MutualLocal = 4)] = "MutualLocal"),
              (e[(e.MutualSteamVR = 5)] = "MutualSteamVR"),
              (e[(e.MutualSteam = 6)] = "MutualSteam");
          })(_ || (_ = {})),
          (function (e) {
            (e[(e.Dashboard = 1)] = "Dashboard"),
              (e[(e.LeftHand = 2)] = "LeftHand"),
              (e[(e.RightHand = 3)] = "RightHand"),
              (e[(e.World = 4)] = "World"),
              (e[(e.Theater = 5)] = "Theater"),
              (e[(e.Boot = 6)] = "Boot");
          })(c || (c = {})),
          (function (e) {
            (e[(e.Invalid = 0)] = "Invalid"),
              (e[(e.System = 1)] = "System"),
              (e[(e.SteamInput = 2)] = "SteamInput"),
              (e[(e.VRInput = 3)] = "VRInput");
          })(m || (m = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.ThirdPartyClient = 1)] = "ThirdPartyClient"),
              (e[(e.SteamVRClientUnified = 2)] = "SteamVRClientUnified"),
              (e[(e.SteamVRClientLegacyDual = 3)] = "SteamVRClientLegacyDual");
          })(g || (g = {}));
      },
      3606: (e, t, o) => {
        o.d(t, { F2: () => n });
        const n = "/settings/steamvr/showAdvancedSettings";
      },
      3714: (e, t, o) => {
        o.d(t, { uV: () => l, we: () => s });
        o(6540);
        var n = o(2505),
          i = o.n(n);
        class r {
          constructor() {
            (this.m_mapTokens = new Map()),
              (this.m_mapFallbackTokens = new Map());
          }
          InitFromObjects(e, t, o, n) {
            this.m_mapTokens.clear();
            let i = [t, e, n, o];
            for (let e in i) {
              let t = i[e];
              for (let e in t) {
                let o = t[e];
                for (let e in o) {
                  let t = e.toLowerCase();
                  this.m_mapTokens.has(t) || this.m_mapTokens.set(t, o[e]);
                }
              }
            }
          }
          LocalizeString(e) {
            if (!e || 0 == e.length || "#" != e.charAt(0)) return "";
            let t = this.m_mapTokens.get(e.substring(1).toLowerCase());
            return void 0 === t ? "" : t;
          }
          LocalizeStringFromFallback(e) {
            if (!e || 0 == e.length || "#" != e.charAt(0)) return "";
            let t = this.m_mapFallbackTokens.get(e.substring(1).toLowerCase());
            return void 0 === t ? "" : t;
          }
          static GetLocale() {
            const e = navigator.languages[0];
            try {
              const t =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.GetSystemLocale();
              if (!t) return e;
              r.s_Date.toLocaleTimeString(t);
              return t;
            } catch (t) {
              return e;
            }
          }
        }
        function s(e, ...t) {
          let o = a.LocalizeString(e);
          return o
            ? (t.length > 0 &&
                (o = o.replace(/%(\d+)\$s/g, function (e, o) {
                  return void 0 !== t[o - 1] ? String(t[o - 1]) : e;
                })),
              o)
            : e;
        }
        r.s_Date = new Date();
        const a = new r();
        function l(e, t) {
          t ||
            (t = (function () {
              let e = new Map([
                ["en", "english"],
                ["de", "german"],
                ["fr", "french"],
                ["it", "italian"],
                ["ko", "korean"],
                ["es-419", "latam"],
                ["es", "spanish"],
                ["zh-CN", "schinese"],
                ["zh-TW", "tchinese"],
                ["ru", "russian"],
                ["th", "thai"],
                ["ja", "japanese"],
                ["pt", "portuguese"],
                ["pl", "polish"],
                ["da", "danish"],
                ["nl", "dutch"],
                ["fi", "finnish"],
                ["no", "norwegian"],
                ["sv", "swedish"],
                ["hu", "hungarian"],
                ["cs", "czech"],
                ["ro", "romanian"],
                ["tr", "turkish"],
                ["pt-BR", "brazilian"],
                ["bg", "bulgarian"],
                ["el", "greek"],
                ["uk", "ukranian"],
                ["vi", "vietnamese"],
              ]);
              for (let t of navigator.languages) {
                let o = t.split("-");
                if (e.has(t)) return e.get(t);
                if (e.has(o[0])) return e.get(o[0]);
              }
              return "english";
            })());
          let o = [],
            n = (e, t, o) => {
              let n,
                r = Date.now().toString();
              return (
                (n =
                  "drivers" == e
                    ? `/input/localization.json?t=${r}`
                    : "webhelper" == e
                      ? `/dashboard/localization/${e}_${t}.json?t=${r}`
                      : `localization/${e}_${t}.json?t=${r}`),
                i()
                  .get(n)
                  .then((e) => {
                    o(e.data);
                  })
                  .catch(() => {})
              );
            },
            r = [],
            s = [],
            l = [],
            d = [];
          for (let i of e)
            o.push(
              n(i, t, (e) => {
                r.push(e);
              }),
            ),
              "english" != t &&
                o.push(
                  n(i, "english", (e) => {
                    l.push(e);
                  }),
                );
          for (let e of ["webhelper"])
            o.push(
              n(e, t, (e) => {
                s.push(e);
              }),
            ),
              "english" != t &&
                o.push(
                  n(e, "english", (e) => {
                    d.push(e);
                  }),
                );
          return (
            o.push(
              n("drivers", "", (e) => {
                r.push(e);
              }),
            ),
            Promise.all(o).then(() => {
              a.InitFromObjects(r, s, l, d);
            })
          );
        }
        window.LocalizationManager = a;
      },
      981: (e, t, o) => {
        var n = o(1635),
          i = o(6540),
          r = o(5338),
          s = o(2505),
          a = o.n(s),
          l = o(3236),
          d = o(6090),
          u = o(3714),
          p = o(1333),
          h = o(9118),
          _ = o(1532),
          c = o(4963),
          m = o(6189),
          g = o(7813);
        class S {
          constructor() {
            (this.onScroll = null),
              (this.onScrollStop = null),
              (this.m_elem = null),
              (this.m_rScrollableParents = []),
              (this.m_bScrolling = !1),
              (this.m_scrollStopTimeoutHandle = void 0),
              (0, g.makeObservable)(this);
          }
          ref(e) {
            this.m_elem && this.cleanup(),
              (this.m_elem = e),
              this.updateScrollableParents();
          }
          get isScrolling() {
            return this.m_bScrolling;
          }
          updateScrollableParents() {
            for (let e of this.m_rScrollableParents)
              e.removeEventListener("scroll", this.onParentScroll);
            this.m_rScrollableParents = (function (e) {
              let t = [];
              if (!e) return t;
              let o = e.parentElement;
              for (; o; ) {
                const e = o.scrollWidth > o.clientWidth,
                  n = o.scrollHeight > o.clientHeight;
                (e || n) && t.push(o), (o = o.parentElement);
              }
              return t;
            })(this.m_elem);
            for (let e of this.m_rScrollableParents)
              e.addEventListener("scroll", this.onParentScroll);
          }
          cleanup() {
            for (let e of this.m_rScrollableParents)
              e.removeEventListener("scroll", this.onParentScroll);
            (this.m_rScrollableParents = []),
              (this.m_elem = null),
              this.clearScrollStopTimeout();
          }
          onParentScroll() {
            var e;
            this.clearScrollStopTimeout(),
              (this.m_bScrolling = !0),
              (this.m_scrollStopTimeoutHandle = window.setTimeout(
                this.onScrollStopTimeout,
                50,
              )),
              null === (e = this.onScroll) || void 0 === e || e.call(this);
          }
          clearScrollStopTimeout() {
            window.clearTimeout(this.m_scrollStopTimeoutHandle),
              (this.m_scrollStopTimeoutHandle = void 0);
          }
          onScrollStopTimeout() {
            var e;
            this.m_bScrolling &&
              (null === (e = this.onScrollStop) ||
                void 0 === e ||
                e.call(this)),
              (this.m_bScrolling = !1);
          }
        }
        (0, n.Cg)([g.observable], S.prototype, "m_bScrolling", void 0),
          (0, n.Cg)([l.o], S.prototype, "ref", null),
          (0, n.Cg)([g.computed], S.prototype, "isScrolling", null),
          (0, n.Cg)([l.o], S.prototype, "onParentScroll", null),
          (0, n.Cg)([l.o], S.prototype, "onScrollStopTimeout", null);
        class y extends i.Component {
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
            var t, o, n;
            null === (o = (t = this.props).onMouseDown) ||
              void 0 === o ||
              o.call(t, e),
              this.disabled ||
                c.u.Instance.playSound(
                  null !== (n = this.props.pressSoundEffect) && void 0 !== n
                    ? n
                    : null,
                );
          }
          onMouseUp(e) {
            var t, o;
            null === (o = (t = this.props).onMouseUp) ||
              void 0 === o ||
              o.call(t, e);
          }
          onClick(e) {
            var t, o, n;
            this.disabled ||
              (null === (o = (t = this.props).onClick) ||
                void 0 === o ||
                o.call(t, e),
              v.temporarilySuppressSoundEffect(),
              c.u.Instance.playSound(
                null !== (n = this.props.releaseSoundEffect) && void 0 !== n
                  ? n
                  : c.j.ButtonClick,
              ));
          }
          onMouseEnter(e) {
            var t, o;
            null === (o = (t = this.props).onMouseEnter) ||
              void 0 === o ||
              o.call(t, e),
              this.disabled ||
                ((0, d.R$)() == d.OH.Overlay &&
                  m.W.Instance.triggerHaptic(d.en.ButtonEnter));
          }
          onMouseLeave(e) {
            this.props.onMouseLeave && this.props.onMouseLeave(e),
              this.disabled ||
                ((0, d.R$)() == d.OH.Overlay &&
                  m.W.Instance.triggerHaptic(d.en.ButtonLeave));
          }
          render() {
            let e = Object.assign({}, this.props);
            return (
              delete e.enabled,
              delete e.pressSoundEffect,
              delete e.releaseSoundEffect,
              (e.className = (function (...e) {
                return e
                  .filter((e) => null != e && ("string" == typeof e || e[1]))
                  .map((e) => ("string" == typeof e ? e : e[0]))
                  .join(" ");
              })(e.className, ["Disabled", this.disabled])),
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
        (0, n.Cg)([l.o], y.prototype, "onMouseDown", null),
          (0, n.Cg)([l.o], y.prototype, "onMouseUp", null),
          (0, n.Cg)([l.o], y.prototype, "onClick", null),
          (0, n.Cg)([l.o], y.prototype, "onMouseEnter", null),
          (0, n.Cg)([l.o], y.prototype, "onMouseLeave", null);
        class v extends i.Component {
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
            v.suppressingSoundEffect ||
              (window.clearTimeout(v.s_nPlaySoundEffectTimeout),
              (v.s_nPlaySoundEffectTimeout = window.setTimeout(
                v.playSoundEffect,
                v.k_nSoundEffectDelay,
              ))),
              this.props.onClick && this.props.onClick(e);
          }
          static endSoundEffectSuppression() {
            window.clearTimeout(this.s_nSuppressingSoundEffectsTimeout),
              (this.s_nSuppressingSoundEffectsTimeout = 0);
          }
          static playSoundEffect() {
            c.u.Instance.playSound(c.j.SurfaceClick);
          }
          render() {
            return i.cloneElement(
              i.createElement("div", this.props, this.props.children),
              { onClick: this.onClick },
            );
          }
        }
        (v.k_nSoundEffectSuppressionPeriod = 4),
          (v.k_nSoundEffectDelay = 2),
          (v.s_nSuppressingSoundEffectsTimeout = 0),
          (v.s_nPlaySoundEffectTimeout = 0),
          (0, n.Cg)([l.o], v.prototype, "onClick", null),
          (0, n.Cg)([l.o], v, "endSoundEffectSuppression", null),
          (0, n.Cg)([l.o], v, "playSoundEffect", null);
        var f = o(582);
        (0, g.configure)({ enforceActions: "never" });
        class R extends i.Component {
          constructor(e) {
            super(e),
              (this.m_genid = 0),
              (this.m_language = null),
              (this.m_languageToLayout = new Map()),
              (this.m_keyTypeToHandler = null),
              (this.m_curShiftPlane = null),
              (this.m_keyElements = null),
              (this.m_KeyboardVisibilityCallbackHandle = null),
              this.initializeKeyHandlers(),
              (this.state = {
                bFading: !1,
                bVisible: !1,
                bDockedInDashboard: !1,
                bMinimalMode: !1,
                bMultilinePreview: !1,
                inputMode: d.Xl.Normal,
                activeKey: { nCol: -1, nRow: -1 },
                presentation: "overlay",
                shiftPlaneName: "normal",
                layout: null,
                langLayout: null,
                text: "",
                textPos: 0,
                suggestions: [],
              }),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRKeyboard.LoadSuggestionsForLanguage(this.language()),
              p.HR.Init(!1);
          }
          componentDidMount() {
            var e;
            this.m_KeyboardVisibilityCallbackHandle =
              null ===
                (e =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.RegisterForKeyboardInfoChangedEvents) ||
              void 0 === e
                ? void 0
                : e.call(VRHTML, this.onKeyboardInfoChanged);
          }
          componentWillUnmount() {
            var e;
            null === (e = this.m_KeyboardVisibilityCallbackHandle) ||
              void 0 === e ||
              e.unregister();
          }
          onKeyboardInfoChanged(e) {
            if (e.visible) {
              const t =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRDashboardManager.GetKeyboardBuffer();
              this.setState({
                bVisible: !0,
                bDockedInDashboard: e.dockedInDashboard,
                inputMode: e.inputMode,
                bMinimalMode: !!(d.QR.Minimal & e.keyboardFlags),
                bMultilinePreview: e.lineMode == d.b.MultipleLines,
                text: t,
                textPos: t.length,
              }),
                this.updateSuggestions(t),
                this.getLayout("base"),
                this.getLayout(this.language());
            } else this.setState({ bVisible: !1 });
          }
          startClose() {
            this.setState({ bVisible: !1 }),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRDashboardManager.CloseKeyboard();
          }
          genid() {
            return (this.m_genid += 1), "vk" + this.m_genid;
          }
          language() {
            var e;
            return (
              this.m_language ||
                (this.props.language
                  ? (this.m_language = this.props.language)
                  : (this.m_language =
                      null !==
                        (e =
                          null === VRHTML || void 0 === VRHTML
                            ? void 0
                            : VRHTML.GetSteamLanguage()) && void 0 !== e
                        ? e
                        : "english")),
              this.m_language
            );
          }
          bShowPasswordPreview() {
            return this.state.inputMode == d.Xl.Password;
          }
          getLayoutFile(e) {
            return (0, n.sH)(this, void 0, void 0, function* () {
              let t = `/dashboard/keyboards/layout_${e}_${this.state.presentation}.json`;
              return a()
                .get(t)
                .then((e) => (200 != e.status ? null : e.data))
                .catch((t) =>
                  "english" != e ? this.getLayoutFile("english") : null,
                );
            });
          }
          getLayout(e) {
            this.m_languageToLayout.has(e)
              ? this.onLayoutLoaded()
              : this.getLayoutFile(e).then((t) => {
                  t &&
                    (this.m_languageToLayout.set(e, t), this.onLayoutLoaded());
                });
          }
          onLayoutLoaded() {
            this.m_languageToLayout.has("base") &&
              this.m_languageToLayout.has(this.language()) &&
              ((this.m_keyElements = null),
              this.setState({
                layout: this.m_languageToLayout.get("base"),
                langLayout: this.m_languageToLayout.get(this.language()),
                shiftPlaneName: "normal",
              }),
              this.toggleShiftPlaneWith("normal"));
          }
          initializeKeyHandlers() {
            (this.m_keyTypeToHandler = new Map()),
              this.m_keyTypeToHandler.set("key", this.handleKey),
              this.m_keyTypeToHandler.set("del", this.handleDel),
              this.m_keyTypeToHandler.set("shift", this.handleShift),
              this.m_keyTypeToHandler.set("symbols", this.handleSymbols),
              this.m_keyTypeToHandler.set("done", this.handleDone),
              this.m_keyTypeToHandler.set("cancel", this.handleCancel),
              this.m_keyTypeToHandler.set("clear", this.handleClear),
              this.m_keyTypeToHandler.set("return", this.handleReturn);
          }
          findShiftPlane(e) {
            if (!this.state.langLayout) return null;
            for (let t of this.state.langLayout.shiftPlanes)
              if (t.name == e) return t;
            return null;
          }
          toggleShiftPlaneWith(e) {
            (this.m_curShiftPlane && this.m_curShiftPlane.name != e) ||
              (e = "normal");
            let t = this.findShiftPlane(e);
            t &&
              ((this.m_curShiftPlane = t),
              this.setState({ shiftPlaneName: e }));
          }
          onKey(e, t) {
            if (
              e < this.state.layout.geometry.length &&
              t < this.state.layout.geometry[e].keys.length
            ) {
              let o = this.state.layout.geometry[e].keys[t];
              if ("string" == typeof o);
              else if ("key" != o.type)
                return void this.m_keyTypeToHandler.get(o.type)(o);
            }
            if (
              this.m_curShiftPlane &&
              e < this.m_curShiftPlane.rows.length &&
              t < this.m_curShiftPlane.rows[e].length
            ) {
              let o = this.m_curShiftPlane.rows[e][t];
              "string" == typeof o
                ? this.m_keyTypeToHandler.get("key")(o)
                : this.m_keyTypeToHandler.has(o.type) &&
                  this.m_keyTypeToHandler.get(o.type)(o);
            }
          }
          handleKey(e) {
            let t;
            if (
              ((t = "string" == typeof e ? e : e.value),
              this.state.bMinimalMode)
            )
              this.UpdateText(t, 1);
            else {
              let e =
                  this.state.text.substr(0, this.state.textPos) +
                  t +
                  this.state.text.substr(this.state.textPos),
                o = this.state.textPos + t.length;
              this.UpdateText(e, o);
            }
          }
          handleReturn() {
            this.handleKey("\n");
          }
          handleDel() {
            if (this.state.bMinimalMode) this.handleKey("\b");
            else {
              let e = this.state.text.substr(0, this.state.textPos),
                t = this.state.text.substr(this.state.textPos);
              if (e.length > 0) {
                let o = e.substr(0, e.length - 1) + t,
                  n = this.state.textPos - 1;
                this.UpdateText(o, n);
              }
            }
          }
          handleShift() {
            this.toggleShiftPlaneWith("shift");
          }
          handleSymbols() {
            this.toggleShiftPlaneWith("symbols");
          }
          UpdateText(e, t) {
            this.setState({ text: e, textPos: t }),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRKeyboard.SetKeyboardText(e),
              this.updateSuggestions(this.getSuggestionBase(e, t));
          }
          handleDone(e) {
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRDashboardManager.SendKeyboardDone(),
              this.startClose();
          }
          handleCancel(e) {
            this.startClose();
          }
          handleClear(e) {
            this.setState({ text: "", textPos: 0 }), this.updateSuggestions("");
          }
          isWhite(e) {
            return " " == e;
          }
          findWordLimits(e, t) {
            if (
              t < e.length &&
              this.isWhite(e[t]) &&
              (0 == t || (t > 1 && this.isWhite(e[t - 1])))
            )
              return null;
            let o = t;
            for (; o > 0 && !this.isWhite(e[o]); ) o -= 1;
            o < e.length && this.isWhite(e[o]) && (o += 1);
            let n = o;
            for (; n < e.length && !this.isWhite(e[n]); ) n += 1;
            return [o, n];
          }
          getSuggestionBase(e, t) {
            let o = this.findWordLimits(e, t);
            return o ? e.substr(o[0], o[1] - o[0]) : null;
          }
          updateSuggestions(e) {
            var t;
            if (null != this.state.layout)
              if (this.bShowPasswordPreview())
                this.setState({ suggestions: [] });
              else if (
                (null == e &&
                  (e = this.getSuggestionBase(
                    this.state.text,
                    this.state.textPos,
                  )),
                null != e && e.length > 0)
              ) {
                new Array(this.state.layout.previewSuggestionCount);
                let o =
                  null !==
                    (t =
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.VRKeyboard.GetSuggestions(
                            e,
                            this.state.layout.previewSuggestionCount,
                          )) && void 0 !== t
                    ? t
                    : [];
                this.setState({ suggestions: o });
              } else this.setState({ suggestions: [] });
          }
          handleSuggestionClick(e) {
            if (e >= this.state.suggestions.length) return;
            let t = this.state.suggestions[e],
              o = this.findWordLimits(this.state.text, this.state.textPos);
            if (o) {
              let e = this.state.text.substr(0, o[0]);
              t += " ";
              let n = e + t + this.state.text.substr(o[1]),
                i = e.length + t.length;
              this.UpdateText(n, i);
            }
          }
          makeKeyFaceElement(e, t) {
            let o = "VRKBKeyFace";
            if ((t && (o += ` VRKBShift_${t.name}`), "string" == typeof e))
              return i.createElement(
                "span",
                { key: this.genid(), className: o },
                e,
              );
            {
              let t = e.text;
              e.value ? e.value : e.text;
              switch (
                (e.img &&
                  (t = i.createElement("img", {
                    src: `/dashboard/images/vrkeyboard/${e.img}.png`,
                  })),
                "string" == typeof t && t.startsWith("#") && (t = (0, u.we)(t)),
                e.type)
              ) {
                case "key":
                case "symbols":
                case "del":
                case "cancel":
                case "shift":
                case "return":
                  return i.createElement(
                    "span",
                    { key: this.genid(), className: o },
                    t,
                  );
                case "done":
                  return i.createElement(
                    "span",
                    { key: this.genid(), className: o + " VRKBDone" },
                    t,
                  );
                case "hole":
                  return i.createElement("span", {
                    key: this.genid(),
                    className: o,
                  });
                default:
                  return (
                    console.log(
                      "unknown key type ",
                      e.type,
                      " in keyboard layout",
                    ),
                    null
                  );
              }
            }
          }
          getKeyFaces(e, t) {
            let o = [];
            if (
              e < this.state.layout.geometry.length &&
              t < this.state.layout.geometry[e].keys.length
            ) {
              "key" != this.state.layout.geometry[e].keys[t].type &&
                o.push(
                  this.makeKeyFaceElement(
                    this.state.layout.geometry[e].keys[t],
                    null,
                  ),
                );
            }
            if (0 == o.length)
              for (let n of this.state.langLayout.shiftPlanes)
                e < n.rows.length &&
                  t < n.rows[e].length &&
                  o.push(this.makeKeyFaceElement(n.rows[e][t], n));
            return o;
          }
          getKeyElements() {
            let e = [];
            for (let t = 0; t < this.state.layout.geometry.length; ++t) {
              let o = this.state.layout.geometry[t],
                n = [];
              for (let e = 0; e < o.keys.length; ++e) {
                let r = o.keys[e],
                  s = {};
                r.flexGrow && (s.flexGrow = r.flexGrow),
                  r.flexShrink && (s.flexShrink = r.flexShrink),
                  this.state.shiftPlaneName == r.type &&
                    (s.background = "#000"),
                  this.state.activeKey.nCol == e &&
                    this.state.activeKey.nRow == t &&
                    (s.background = "#000");
                let a = this.getKeyFaces(t, e),
                  l = () => {
                    "done" == r.type && this.onKey(t, e);
                  },
                  d = () => {
                    "done" != r.type &&
                      (this.setState({ activeKey: { nRow: t, nCol: e } }),
                      this.onKey(t, e));
                  },
                  u = () => {
                    "done" != r.type &&
                      this.setState({ activeKey: { nRow: -1, nCol: -1 } });
                  };
                n.push(
                  i.createElement(
                    y,
                    {
                      key: this.genid(),
                      className: "VRKBKey",
                      releaseSoundEffect: null,
                      onClick: l,
                      onMouseDown: d,
                      onMouseUp: u,
                      style: s,
                    },
                    a,
                  ),
                );
              }
              let r = {};
              o.height && (r.height = o.height),
                e.push(
                  i.createElement(
                    "div",
                    { key: this.genid(), className: "VRKBRow", style: r },
                    n,
                  ),
                );
            }
            return i.createElement("div", { className: "VRKBRows" }, e);
          }
          makeCursor() {
            return i.createElement(
              "span",
              { key: this.genid(), className: "VRKBPreviewTextCursor" },
              "|",
            );
          }
          makePreviewText() {
            let e = this.state.text.substr(0, this.state.textPos),
              t = this.state.text.substr(this.state.textPos);
            return this.bShowPasswordPreview()
              ? ((e = R.kPasswordChar.repeat(e.length)),
                (t = R.kPasswordChar.repeat(t.length)),
                [
                  i.createElement(
                    "span",
                    { key: this.genid(), className: "VRKBPreviewTextPart" },
                    R.kPasswordChar.repeat(e.length),
                  ),
                  this.makeCursor(),
                  i.createElement(
                    "span",
                    { key: this.genid(), className: "VRKBPreviewTextPart" },
                    R.kPasswordChar.repeat(t.length),
                  ),
                ])
              : [
                  i.createElement(
                    "span",
                    { key: this.genid(), className: "VRKBPreviewTextPart" },
                    e,
                  ),
                  this.makeCursor(),
                  i.createElement(
                    "span",
                    { key: this.genid(), className: "VRKBPreviewTextPart" },
                    t,
                  ),
                ];
          }
          makeSuggestionElements() {
            let e = [];
            if (this.state.suggestions)
              for (let t = 0; t < this.state.suggestions.length; ++t)
                e.push(
                  i.createElement(
                    "div",
                    {
                      key: this.genid(),
                      className: "VRKBSuggestion",
                      onClick: () => this.handleSuggestionClick(t),
                    },
                    this.state.suggestions[t],
                  ),
                );
            for (
              let t = e.length;
              t < this.state.layout.previewSuggestionCount;
              ++t
            )
              e.push(
                i.createElement("div", {
                  key: this.genid(),
                  className: "VRKBSuggestion",
                }),
              );
            return e;
          }
          renderFlatPreview() {
            return this.state.bMinimalMode
              ? null
              : i.createElement(
                  "div",
                  { className: "VRKBPreviewWrapper" },
                  i.createElement(
                    "div",
                    { key: this.genid(), className: "VRKBPreviewText" },
                    this.makePreviewText(),
                  ),
                  i.createElement(
                    "div",
                    { key: this.genid(), className: "VRKBSuggestionWrapper" },
                    this.makeSuggestionElements(),
                  ),
                );
          }
          render_flat() {
            return i.createElement(
              d.dL,
              { parent_path: "/user/head" },
              i.createElement(
                d.m$,
                null,
                i.createElement(
                  d.dL,
                  { translation: this.state.layout.translation },
                  i.createElement(
                    d.Zk,
                    {
                      width: void 0,
                      height: 1,
                      interactive: !0,
                      sort_depth_bias: 0.2,
                      debug_name: "keyboard-flat",
                    },
                    i.createElement(
                      "div",
                      {
                        className: `VRKBShiftState VRKBChooseShift_${this.state.shiftPlaneName}`,
                      },
                      i.createElement(
                        "div",
                        { className: "VRKBBackground" },
                        this.renderFlatPreview(),
                        this.m_keyElements,
                      ),
                    ),
                  ),
                ),
              ),
            );
          }
          render_overlay() {
            return i.createElement(
              "div",
              {
                className: `VRKBContainer VRKBShiftState VRKBChooseShift_${this.state.shiftPlaneName}`,
              },
              i.createElement(
                "div",
                { className: "VRKBBackground" },
                this.renderFlatPreview(),
                this.m_keyElements,
              ),
            );
          }
          render() {
            if (!this.state.layout)
              return console.log("xxx render layout==null, bailing"), null;
            if (!this.state.bVisible)
              return console.log("xxx render !visible, so bailing"), null;
            switch (
              ((this.m_keyElements = this.getKeyElements()),
              this.state.presentation)
            ) {
              case "flat":
                return this.render_flat();
              case "overlay":
                return this.render_overlay();
              default:
                return (
                  console.log(
                    "bad keyboard presentation:",
                    this.state.presentation,
                  ),
                  null
                );
            }
          }
        }
        (R.kPasswordChar = "●"),
          (0, n.Cg)([l.o], R.prototype, "onKeyboardInfoChanged", null),
          (0, n.Cg)([l.o], R.prototype, "handleKey", null),
          (0, n.Cg)([l.o], R.prototype, "handleReturn", null),
          (0, n.Cg)([l.o], R.prototype, "handleDel", null),
          (0, n.Cg)([l.o], R.prototype, "handleShift", null),
          (0, n.Cg)([l.o], R.prototype, "handleSymbols", null),
          (0, n.Cg)([l.o], R.prototype, "handleDone", null),
          (0, n.Cg)([l.o], R.prototype, "handleCancel", null),
          (0, n.Cg)([l.o], R.prototype, "handleClear", null),
          (0, n.Cg)([l.o], R.prototype, "handleSuggestionClick", null);
        const C =
          null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.GetSteamLanguage();
        null === VRHTML ||
          void 0 === VRHTML ||
          VRHTML.VROverlay.SetInputMethod(
            VRHTML.VROverlay.ThisOverlayHandle(),
            d.Rk.Mouse,
          ),
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VRDashboardManager.SetKeyboardOverlayToThis(),
          (0, u.uV)(["systemui"], C)
            .then(() => h.W.Init())
            .then(() => _.s.Init())
            .then(() => {
              (0, f.aj)().Init("SteamVR", CLSTAMP, (0, f.d4)()),
                r
                  .H(document.getElementById("root"))
                  .render(i.createElement(R, { language: C }));
            });
      },
    },
    o = {};
  function n(e) {
    var i = o[e];
    if (void 0 !== i) return i.exports;
    var r = (o[e] = { exports: {} });
    return t[e].call(r.exports, r, r.exports, n), r.exports;
  }
  (n.m = t),
    (e = []),
    (n.O = (t, o, i, r) => {
      if (!o) {
        var s = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [o, i, r] = e[u], a = !0, l = 0; l < o.length; l++)
            (!1 & r || s >= r) && Object.keys(n.O).every((e) => n.O[e](o[l]))
              ? o.splice(l--, 1)
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
      e[u] = [o, i, r];
    }),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (n.d = (e, t) => {
      for (var o in t)
        n.o(t, o) &&
          !n.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
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
    (() => {
      var e = { 884: 0, 198: 0, 384: 0, 527: 0, 500: 0 };
      n.O.j = (t) => 0 === e[t];
      var t = (t, o) => {
          var i,
            r,
            [s, a, l] = o,
            d = 0;
          if (s.some((t) => 0 !== e[t])) {
            for (i in a) n.o(a, i) && (n.m[i] = a[i]);
            if (l) var u = l(n);
          }
          for (t && t(o); d < s.length; d++)
            (r = s[d]), n.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
          return n.O(u);
        },
        o = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var i = n.O(
    void 0,
    [967, 352, 211, 264, 305, 527, 797, 148, 500, 554, 798],
    () => n(981),
  );
  i = n.O(i);
})(); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/keyboard.js.map
