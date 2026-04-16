var CLSTAMP = "10590646";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [198],
  {
    9864: (e, t, i) => {
      i(6540);
      var r,
        s = i(3496);
      !(function (e) {
        (e[(e.Parent = 0)] = "Parent"), (e[(e.World = 1)] = "World");
      })(r || (r = {}));
      s._J;
    },
    7019: (e, t, i) => {
      i.d(t, { Lr: () => f, Zk: () => y });
      var r,
        s,
        n,
        o,
        p,
        a,
        l = i(1635),
        h = i(6540),
        d = i(3496),
        c = i(5178),
        u = i(3236),
        m = i(5723),
        _ = i(7600),
        v = i(7727),
        g = i(1651);
      function b(e) {
        if (e) return [e.u, e.v];
      }
      function f(e) {
        switch (e) {
          case r.TopLeft:
            return { x: -1, y: 1 };
          case r.TopCenter:
            return { x: 0, y: 1 };
          case r.TopRight:
            return { x: 1, y: 1 };
          case r.CenterLeft:
            return { x: -1, y: 0 };
          case r.Center:
            return { x: 0, y: 0 };
          case r.CenterRight:
            return { x: 1, y: 0 };
          case r.BottomLeft:
            return { x: -1, y: -1 };
          case r.BottomCenter:
            return { x: 0, y: -1 };
          case r.BottomRight:
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
      })(r || (r = {})),
        (function (e) {
          (e[(e.Auto = 0)] = "Auto"), (e[(e.SingleTap = 1)] = "SingleTap");
        })(s || (s = {})),
        (function (e) {
          (e[(e.Mono = 0)] = "Mono"),
            (e[(e.Parallel = 1)] = "Parallel"),
            (e[(e.Crossed = 2)] = "Crossed"),
            (e[(e.Panorama = 3)] = "Panorama"),
            (e[(e.StackedPanorama = 4)] = "StackedPanorama");
        })(n || (n = {})),
        (function (e) {
          (e[(e.Visible = 0)] = "Visible"),
            (e[(e.SkipInSceneGraph = 1)] = "SkipInSceneGraph"),
            (e[(e.Hidden = 2)] = "Hidden"),
            (e[(e.InvisibleButIntersectable = 3)] =
              "InvisibleButIntersectable");
        })(o || (o = {})),
        (function (e) {
          (e[(e.Default = 0)] = "Default"),
            (e[(e.Disabled = 1)] = "Disabled"),
            (e[(e.Low = 2)] = "Low");
        })(p || (p = {})),
        (function (e) {
          (e[(e.PixelOffset = 0)] = "PixelOffset"),
            (e[(e.ScaleAndCenter = 1)] = "ScaleAndCenter");
        })(a || (a = {}));
      class y extends d._J {
        constructor(e) {
          super(e),
            (this.m_Rect = { x: 0, y: 0, width: 0, height: 0 }),
            (this.m_nEmbeddedIndex = null),
            (this.m_LastDOMContentSize = void 0),
            (this.m_DOMContentSizeChangedCallbacks = new g.l()),
            (this.m_resizeObserver = null),
            (this.m_UVsMin = void 0),
            (this.m_UVsMax = void 0),
            (this.m_bOverdragBlocking = !1),
            (this.m_overdragBlockingElements = []);
          const t = void 0 !== this.props.width || void 0 !== this.props.height,
            i = void 0 !== this.props.meters_per_pixel,
            r = void 0 !== this.props.target_dpi_panel_id,
            s =
              void 0 !== this.props.rendermodel_component_device_index ||
              void 0 !== this.props.rendermodel_component_name,
            n =
              void 0 !== this.props.subview_parent_panel_id ||
              void 0 !== this.props.subview_parent_panel_key;
          if (
            s &&
            (void 0 === this.props.rendermodel_component_device_index ||
              void 0 === this.props.rendermodel_component_name)
          )
            throw new Error(
              "Panel requires both rendermodel_component_device_index and rendermodel_component_name to be a rendermodel texture.",
            );
          const o = [t, i, r, s, n].filter((e) => e).length,
            p =
              "an (explicit width and/or height), an explicit meters_per_pixel, a target_panel_dpi panel ID, a rendermodel name, or a parent overlay of which to become a subview.";
          if (0 == o)
            throw new Error(`Panel requires one of the following props: ${p}.`);
          if (o > 1)
            throw new Error(
              `Panel cannot have more of the following of the following props: ${p}.`,
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
          y.s_bPanelsAreDirty = !0;
        }
        componentDidMount() {
          super.componentDidMount(),
            (this.m_resizeObserver = new ResizeObserver(this.onResizeObserved)),
            this.m_resizeObserver.observe(this.getCurrentRootElement()),
            (this.m_nEmbeddedIndex = c.O.Current().addEmbeddedPanelUVs(this)),
            (y.s_bPanelsAreDirty = !0),
            this.getCurrentRootElement().addEventListener(
              "mousedown",
              this.onPanelMouseDown,
            ),
            this.forceUpdate();
        }
        onResizeObserved(e, t) {
          c.O.Current().forceLayoutUpdate(),
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
            (y.s_bPanelsAreDirty = !0),
            c.O.Current().removeEmbeddedPanelUVs(this),
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
        createOverdragBlockingElement(e, t, i, r) {
          let s = document.createElement("div");
          (s.style.position = "absolute"),
            (s.style.top = t + "px"),
            (s.style.left = e + "px"),
            (s.style.width = i + "px"),
            (s.style.height = r + "px"),
            (s.style.zIndex = "90019001"),
            this.m_overdragBlockingElements.push(s),
            document.body.appendChild(s);
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
            : o.Visible;
        }
        buildNode(e, t) {
          var i, r, s, n, p, a, l, h, u, _;
          if (
            !(
              this.visibility == o.Visible ||
              this.visibility == o.InvisibleButIntersectable
            )
          )
            return [e, null];
          let v = Object.assign(Object.assign({}, e), {
              bInsideReparentedPanel: !1,
              currentPanel: this,
            }),
            g = this.createSgNode(t),
            y = { x: 0, y: 0 };
          y =
            "object" == typeof this.props.origin
              ? (0, d.PG)(this.props.origin, { x: 0, y: 0 })
              : f(this.props.origin);
          const w = this.props.overlay_key,
            x = (0, m.w5)();
          w && w.length > 0
            ? (g.properties.key = w)
            : x
              ? (g.properties.key = x)
              : (g.properties.overlay_handle = (0, m.X4)()),
            (g.properties.uv_min =
              null !== (i = b(this.m_UVsMin)) && void 0 !== i ? i : void 0),
            (g.properties.uv_max =
              null !== (r = b(this.m_UVsMax)) && void 0 !== r ? r : void 0);
          const C = 1 / c.O.Current().m_fCurrentScale;
          let k = this.props.frame_resize_scale_factor;
          return (
            this.props.is_frame_page_main_panel && (k = null != k ? k : 1),
            (g.properties.width =
              null !== (s = this.props.width) && void 0 !== s ? s : void 0),
            (g.properties.height =
              null !== (n = this.props.height) && void 0 !== n ? n : void 0),
            (g.properties["scale-index"] =
              null !== (p = this.props.scale_index) && void 0 !== p ? p : 0),
            (g.properties["min-width"] =
              null !== (a = this.props.min_width) && void 0 !== a ? a : void 0),
            (g.properties["target-width-anchor-id"] = (0, m.bl)(
              this.props.target_width_anchor_id,
            )),
            (g.properties["target-dpi-panel-id"] = (0, m.bl)(
              this.props.target_dpi_panel_id,
            )),
            (g.properties["target-dpi-multiplier"] =
              this.props.target_dpi_multiplier),
            (g.properties["meters-per-pixel"] =
              null != this.props.meters_per_pixel
                ? this.props.meters_per_pixel * C
                : void 0),
            (g.properties["subview-parent-panel-key"] =
              this.props.subview_parent_panel_key),
            (g.properties["subview-parent-panel-id"] =
              this.props.subview_parent_panel_id),
            (g.properties["subview-sizing"] = this.props.subview_sizing),
            (g.properties.curvature = this.props.curvature),
            (g.properties["curvature-origin-id"] = (0, m.bl)(
              this.props.curvature_origin_id,
            )),
            (g.properties.spherical = this.props.spherical),
            (g.properties.interactive = this.props.interactive),
            (g.properties.scrollable = this.props.scrollable),
            (g.properties.undocked = this.props.undocked),
            (g.properties.modal = this.props.modal),
            (g.properties["only-visible-with-laser"] =
              this.props.only_visible_with_laser),
            (g.properties["allow-input-capture"] =
              this.props.allow_input_capture),
            (g.properties["lasermouse-filtering"] =
              null === (l = this.props) || void 0 === l
                ? void 0
                : l.lasermouse_filtering),
            (g.properties["hide-laser-when-clicking"] =
              this.props.hide_lasermouse_when_clicking),
            (g.properties["hide-laser-intersection"] =
              null === (h = this.props) || void 0 === h
                ? void 0
                : h.hide_laser_intersection),
            (g.properties["make-overlays-interactive-if-visible"] =
              this.props.make_overlays_interactive_if_visible),
            (g.properties["is-grab-handle"] = this.props.is_grab_handle),
            (g.properties["embedded-uv-index"] = this.m_nEmbeddedIndex),
            (g.properties.origin = (0, d.Hm)(y)),
            (g.properties.debug_name = this.props.debug_name),
            (g.properties.sampler = this.props.sampler),
            (g.properties.reflect = this.props.reflect),
            (g.properties.stereoscopy = this.props.stereoscopy),
            (g.properties.rendermodel_component_device_index =
              this.props.rendermodel_component_device_index),
            (g.properties.rendermodel_component_name =
              this.props.rendermodel_component_name),
            (g.properties["texture-id"] = (0, m.bl)(this.props.texture_id)),
            (g.properties["sort-order"] = this.props.sort_order),
            (g.properties["sort-depth-bias"] = this.props.sort_depth_bias),
            (g.properties.visibility = this.visibility),
            (g.properties["frame-resize-scale-factor"] = k),
            (g.properties["main-panel-for-frame-page"] =
              this.props.is_frame_page_main_panel),
            (g.properties["steam-input-appid"] =
              null === (u = this.props.inputFocusParams) || void 0 === u
                ? void 0
                : u.unSteamInputAppID),
            (g.properties["vr-input-pid"] =
              null === (_ = this.props.inputFocusParams) || void 0 === _
                ? void 0
                : _.unVRInputPID),
            [v, g]
          );
        }
        scaleLocalUVToGlobal(e) {
          const t = this.m_UVsMax.u - this.m_UVsMin.u,
            i = this.m_UVsMax.v - this.m_UVsMin.v;
          return { u: this.m_UVsMin.u + t * e.u, v: this.m_UVsMin.v + i * e.v };
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
          return h.createElement(
            "vsg-node",
            { style: { display: this.visibility == o.Hidden ? "none" : null } },
            h.createElement(_.tH, null, this.props.children),
            this.props.is_frame_page_main_panel &&
              h.createElement(w, { panel: this, panelID: this.getID() }),
          );
        }
      }
      function w(e) {
        const { panel: t, panelID: i } = e,
          { page: r } = (0, v.N)();
        return (
          h.useEffect(() => {
            const { Unset: e } = null == r ? void 0 : r.SetMainPanel(t);
            return e;
          }, [r, t, i]),
          null
        );
      }
      (y.s_bPanelsAreDirty = !1),
        (0, l.Cg)([u.o], y.prototype, "onResizeObserved", null),
        (0, l.Cg)([u.o], y.prototype, "onPanelMouseDown", null),
        (0, l.Cg)([u.o], y.prototype, "onWindowMouseUp", null),
        (0, l.Cg)([u.o], y.prototype, "buildNode", null);
    },
    3361: (e, t, i) => {
      i.d(t, { d: () => p });
      var r,
        s = i(6540),
        n = i(3496),
        o = i(6292);
      !(function (e) {
        (e[(e.Seated = 0)] = "Seated"),
          (e[(e.Standing = 1)] = "Standing"),
          (e[(e.Raw = 2)] = "Raw");
      })(r || (r = {}));
      class p extends n._J {
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
          let t, i, p;
          this.props.transform
            ? ((t = (0, n.j_)(this.props.transform.translation)),
              (i = this.props.transform.rotation),
              (p = this.props.transform.scale))
            : ((t = (0, n.XI)(this.props.translation)
                ? null === (e = (0, n.UM)(this.props.translation)) ||
                  void 0 === e
                  ? void 0
                  : e.join(" ")
                : (0, n.j_)(
                    (0, n.Wi)(this.props.translation, { x: 0, y: 0, z: 0 }),
                  )),
              (i =
                this.props.rotation && "w" in this.props.rotation
                  ? this.props.rotation
                  : (0, o.Fb)(
                      (0, o.tx)(
                        (0, n.Wi)(this.props.rotation, { x: 0, y: 0, z: 0 }),
                        Math.PI / 180,
                      ),
                    )),
              (p =
                "number" == typeof this.props.scale
                  ? {
                      x: this.props.scale,
                      y: this.props.scale,
                      z: this.props.scale,
                    }
                  : (0, n.Wi)(this.props.scale, { x: 1, y: 1, z: 1 })));
          let a = (0, n.hi)(i),
            l = (0, n.j_)(p);
          return s.createElement(
            "vsg-transform",
            {
              translation: t,
              rotation: a,
              scale: l,
              "curvature-pitch": this.props.curvature_pitch,
              "invert-parent-panel-pitch": this.props.invert_parent_panel_pitch,
              "ignore-parent-scale": this.props.ignore_parent_scale,
              "transform-path": this.props.transform_path,
              "parent-path": this.props.parent_path,
              "parent-origin": r[this.props.parent_origin],
              "parent-id": this.props.parent_id,
              "frame-resize-scale-factor": this.props.frame_resize_scale_factor,
            },
            this.props.children,
          );
        }
      }
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~13ad46abb.js.map
