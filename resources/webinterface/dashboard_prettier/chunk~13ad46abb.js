var CLSTAMP = "10630260";
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
      i.d(t, { Lr: () => y, Zk: () => w });
      var r,
        s,
        n,
        o,
        p,
        a,
        l = i(1635),
        h = i(6540),
        d = i(3496),
        u = i(5178),
        c = i(3236),
        m = i(5723),
        _ = i(7600),
        v = i(7727),
        g = i(1651),
        b = i(7813);
      function f(e) {
        if (e) return [e.u, e.v];
      }
      function y(e) {
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
      class w extends d._J {
        constructor(e) {
          super(e),
            (this.m_Rect = { x: 0, y: 0, width: 0, height: 0 }),
            (this.m_nEmbeddedIndex = void 0),
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
          w.s_bPanelsAreDirty = !0;
        }
        componentDidMount() {
          super.componentDidMount(),
            (this.m_resizeObserver = new ResizeObserver(this.onResizeObserved)),
            this.m_resizeObserver.observe(this.getCurrentRootElement()),
            (this.m_nEmbeddedIndex = u.O.Current().addEmbeddedPanelUVs(this)),
            (w.s_bPanelsAreDirty = !0),
            this.getCurrentRootElement().addEventListener(
              "mousedown",
              this.onPanelMouseDown,
            ),
            this.forceUpdate(),
            w.s_setAllPanels.add(this);
        }
        onResizeObserved(e, t) {
          u.O.Current().forceLayoutUpdate(),
            (this.m_LastDOMContentSize = {
              clientWidth: e[0].contentRect.width,
              clientHeight: e[0].contentRect.height,
            }),
            this.m_DOMContentSizeChangedCallbacks.Dispatch(
              this.m_LastDOMContentSize,
            );
        }
        componentWillUnmount() {
          w.s_setAllPanels.delete(this),
            this.m_resizeObserver &&
              (this.m_resizeObserver.disconnect(),
              (this.m_resizeObserver = null)),
            this.stopOverDragBlocking(),
            this.getCurrentRootElement().removeEventListener(
              "mousedown",
              this.onPanelMouseDown,
            ),
            (w.s_bPanelsAreDirty = !0),
            u.O.Current().removeEmbeddedPanelUVs(this),
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
          var i, r, s, n, p, a, l, h, c, _, v, g;
          if (
            !(
              this.visibility == o.Visible ||
              this.visibility == o.InvisibleButIntersectable
            )
          )
            return [e, null];
          let b = Object.assign(Object.assign({}, e), {
              bInsideReparentedPanel: !1,
              currentPanel: this,
            }),
            w = this.createSgNode(t),
            C = { x: 0, y: 0 };
          C =
            "object" == typeof this.props.origin
              ? (0, d.PG)(this.props.origin, { x: 0, y: 0 })
              : y(this.props.origin);
          const x = this.props.overlay_key,
            k = (0, m.w5)();
          x && x.length > 0
            ? (w.properties.key = x)
            : k
              ? (w.properties.key = k)
              : (w.properties.overlay_handle = (0, m.X4)()),
            this.m_UVsMin &&
              (w.properties.uv_min =
                null !== (i = f(this.m_UVsMin)) && void 0 !== i ? i : void 0),
            this.m_UVsMax &&
              (w.properties.uv_max =
                null !== (r = f(this.m_UVsMax)) && void 0 !== r ? r : void 0);
          const O = 1 / u.O.Current().m_fCurrentScale;
          let P = this.props.frame_resize_scale_factor;
          return (
            this.props.is_frame_page_main_panel && (P = null != P ? P : 1),
            (w.properties.width =
              null !== (s = this.props.width) && void 0 !== s ? s : void 0),
            (w.properties.height =
              null !== (n = this.props.height) && void 0 !== n ? n : void 0),
            (w.properties["scale-index"] =
              null !== (p = this.props.scale_index) && void 0 !== p ? p : 0),
            (w.properties["min-width"] =
              null !== (a = this.props.min_width) && void 0 !== a ? a : void 0),
            (w.properties["target-width-anchor-id"] = (0, m.bl)(
              this.props.target_width_anchor_id,
            )),
            (w.properties["target-dpi-panel-id"] = (0, m.bl)(
              this.props.target_dpi_panel_id,
            )),
            (w.properties["target-dpi-multiplier"] =
              this.props.target_dpi_multiplier),
            (w.properties["meters-per-pixel"] =
              null != this.props.meters_per_pixel
                ? this.props.meters_per_pixel * O
                : void 0),
            (w.properties["subview-parent-panel-key"] =
              this.props.subview_parent_panel_key),
            (w.properties["subview-parent-panel-id"] =
              this.props.subview_parent_panel_id),
            (w.properties["subview-sizing"] = this.props.subview_sizing),
            (w.properties.curvature = this.props.curvature),
            (w.properties["curvature-origin-id"] = (0, m.bl)(
              this.props.curvature_origin_id,
            )),
            (w.properties.spherical = this.props.spherical),
            (w.properties.interactive = this.props.interactive),
            (w.properties.scrollable = this.props.scrollable),
            (w.properties.undocked = this.props.undocked),
            (w.properties.modal = this.props.modal),
            (w.properties["only-visible-with-laser"] =
              this.props.only_visible_with_laser),
            (w.properties["allow-input-capture"] =
              this.props.allow_input_capture),
            (w.properties["lasermouse-filtering"] =
              null === (l = this.props) || void 0 === l
                ? void 0
                : l.lasermouse_filtering),
            (w.properties["hide-laser-when-clicking"] =
              this.props.hide_lasermouse_when_clicking),
            (w.properties["hide-laser-intersection"] =
              null === (h = this.props) || void 0 === h
                ? void 0
                : h.hide_laser_intersection),
            (w.properties["make-overlays-interactive-if-visible"] =
              this.props.make_overlays_interactive_if_visible),
            (w.properties["is-grab-handle"] = this.props.is_grab_handle),
            (w.properties["embedded-uv-index"] = this.m_nEmbeddedIndex),
            (w.properties.origin = (0, d.Hm)(C)),
            (w.properties.debug_name = this.props.debug_name),
            (w.properties.sampler = this.props.sampler),
            (w.properties.reflect = this.props.reflect),
            (w.properties.stereoscopy = this.props.stereoscopy),
            (w.properties.rendermodel_component_device_index =
              this.props.rendermodel_component_device_index),
            (w.properties.rendermodel_component_name =
              this.props.rendermodel_component_name),
            (w.properties["texture-id"] = (0, m.bl)(this.props.texture_id)),
            (w.properties["sort-order"] = this.props.sort_order),
            (w.properties["sort-depth-bias"] = this.props.sort_depth_bias),
            (w.properties.visibility = this.visibility),
            (w.properties["frame-resize-scale-factor"] = P),
            (w.properties["main-panel-for-frame-page"] =
              this.props.is_frame_page_main_panel),
            (w.properties["steam-input-appid"] =
              null === (c = this.inputFocusParams) || void 0 === c
                ? void 0
                : c.unSteamInputAppID),
            (w.properties["vr-input-pid"] =
              null === (_ = this.inputFocusParams) || void 0 === _
                ? void 0
                : _.unVRInputPID),
            (w.properties["can-take-keyboard-focus"] =
              null ===
                (g =
                  null === (v = this.inputFocusParams) || void 0 === v
                    ? void 0
                    : v.bCanTakeKeyboardFocus) ||
              void 0 === g ||
              g),
            [b, w]
          );
        }
        scaleLocalUVToGlobal(e) {
          if (!this.m_UVsMin || !this.m_UVsMax) return;
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
          e &&
            ((this.m_UVsMin = {
              u: this.m_Rect.x / e.innerWidth,
              v: this.m_Rect.y / e.innerHeight,
            }),
            (this.m_UVsMax = {
              u: (this.m_Rect.x + this.m_Rect.width) / e.innerWidth,
              v: (this.m_Rect.y + this.m_Rect.height) / e.innerHeight,
            }));
        }
        PanelContextValue() {
          return this;
        }
        BCanUseStableSGIDs() {
          return !0;
        }
        internalRender() {
          return h.createElement(
            "vsg-node",
            { style: { display: this.visibility == o.Hidden ? "none" : null } },
            h.createElement(_.tH, null, this.props.children),
            this.props.is_frame_page_main_panel &&
              h.createElement(C, { panel: this, panelID: this.getID() }),
          );
        }
        get inputFocusParams() {
          return Object.assign(
            { bCanTakeKeyboardFocus: this.props.interactive },
            this.props.inputFocusParams,
          );
        }
        get isInputFocusable() {
          var e, t, i;
          return (
            (null === (e = this.inputFocusParams) || void 0 === e
              ? void 0
              : e.unSteamInputAppID) ||
            (null === (t = this.inputFocusParams) || void 0 === t
              ? void 0
              : t.unVRInputPID) ||
            (null === (i = this.inputFocusParams) || void 0 === i
              ? void 0
              : i.bCanTakeKeyboardFocus)
          );
        }
      }
      function C(e) {
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
      (w.s_bPanelsAreDirty = !1),
        (w.s_setAllPanels = new b.ObservableSet()),
        (0, l.Cg)([c.o], w.prototype, "onResizeObserved", null),
        (0, l.Cg)([c.o], w.prototype, "onPanelMouseDown", null),
        (0, l.Cg)([c.o], w.prototype, "onWindowMouseUp", null),
        (0, l.Cg)([c.o], w.prototype, "buildNode", null),
        (window.s_setAllPanels = w.s_setAllPanels);
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
