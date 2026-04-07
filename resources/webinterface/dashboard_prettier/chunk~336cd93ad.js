var CLSTAMP = "10579910";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [838],
  {
    108: (e) => {
      e.exports = {
        recordingCircle: "svg_library_recordingCircle_2ovZQ",
        AnimationFadeOutIn: "svg_library_AnimationFadeOutIn_1lEwX",
        Spinner: "svg_library_Spinner_1q9tu",
        SpinnerSpokeFade: "svg_library_SpinnerSpokeFade_2E-wW",
      };
    },
    7019: (e, t, i) => {
      "use strict";
      i.d(t, {
        Fi: () => a,
        Lr: () => D,
        MQ: () => o,
        Oi: () => r,
        Zk: () => R,
        _h: () => n,
        o3: () => s,
        xO: () => l,
      });
      var r,
        n,
        o,
        a,
        s,
        l,
        _ = i(1635),
        d = i(6540),
        p = i(3496),
        u = i(5178),
        m = i(3236),
        c = i(5723),
        h = i(7600),
        g = i(7727),
        S = i(1651);
      function v(e) {
        if (e) return [e.u, e.v];
      }
      function D(e) {
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
        })(n || (n = {})),
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
            (e[(e.Hidden = 2)] = "Hidden"),
            (e[(e.InvisibleButIntersectable = 3)] =
              "InvisibleButIntersectable");
        })(a || (a = {})),
        (function (e) {
          (e[(e.Default = 0)] = "Default"),
            (e[(e.Disabled = 1)] = "Disabled"),
            (e[(e.Low = 2)] = "Low");
        })(s || (s = {})),
        (function (e) {
          (e[(e.PixelOffset = 0)] = "PixelOffset"),
            (e[(e.ScaleAndCenter = 1)] = "ScaleAndCenter");
        })(l || (l = {}));
      class R extends p._J {
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
          const t = void 0 !== this.props.width || void 0 !== this.props.height,
            i = void 0 !== this.props.meters_per_pixel,
            r = void 0 !== this.props.target_dpi_panel_id,
            n =
              void 0 !== this.props.rendermodel_component_device_index ||
              void 0 !== this.props.rendermodel_component_name,
            o =
              void 0 !== this.props.subview_parent_panel_id ||
              void 0 !== this.props.subview_parent_panel_key;
          if (
            n &&
            (void 0 === this.props.rendermodel_component_device_index ||
              void 0 === this.props.rendermodel_component_name)
          )
            throw new Error(
              "Panel requires both rendermodel_component_device_index and rendermodel_component_name to be a rendermodel texture.",
            );
          const a = [t, i, r, n, o].filter((e) => e).length,
            s =
              "an (explicit width and/or height), an explicit meters_per_pixel, a target_panel_dpi panel ID, a rendermodel name, or a parent overlay of which to become a subview.";
          if (0 == a)
            throw new Error(`Panel requires one of the following props: ${s}.`);
          if (a > 1)
            throw new Error(
              `Panel cannot have more of the following of the following props: ${s}.`,
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
          R.s_bPanelsAreDirty = !0;
        }
        componentDidMount() {
          super.componentDidMount(),
            (this.m_resizeObserver = new ResizeObserver(this.onResizeObserved)),
            this.m_resizeObserver.observe(this.getCurrentRootElement()),
            (this.m_nEmbeddedIndex = u.O.Current().addEmbeddedPanelUVs(this)),
            (R.s_bPanelsAreDirty = !0),
            this.getCurrentRootElement().addEventListener(
              "mousedown",
              this.onPanelMouseDown,
            ),
            this.forceUpdate();
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
          this.m_resizeObserver &&
            (this.m_resizeObserver.disconnect(),
            (this.m_resizeObserver = null)),
            this.stopOverDragBlocking(),
            this.getCurrentRootElement().removeEventListener(
              "mousedown",
              this.onPanelMouseDown,
            ),
            (R.s_bPanelsAreDirty = !0),
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
          let n = document.createElement("div");
          (n.style.position = "absolute"),
            (n.style.top = t + "px"),
            (n.style.left = e + "px"),
            (n.style.width = i + "px"),
            (n.style.height = r + "px"),
            (n.style.zIndex = "90019001"),
            this.m_overdragBlockingElements.push(n),
            document.body.appendChild(n);
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
          var i, r, n, o, s, l, _, d, m, h;
          if (
            !(
              this.visibility == a.Visible ||
              this.visibility == a.InvisibleButIntersectable
            )
          )
            return [e, null];
          let g = Object.assign(Object.assign({}, e), {
              bInsideReparentedPanel: !1,
              currentPanel: this,
            }),
            S = this.createSgNode(t),
            R = { x: 0, y: 0 };
          R =
            "object" == typeof this.props.origin
              ? (0, p.PG)(this.props.origin, { x: 0, y: 0 })
              : D(this.props.origin);
          const y = this.props.overlay_key,
            C = (0, c.w5)();
          y && y.length > 0
            ? (S.properties.key = y)
            : C
              ? (S.properties.key = C)
              : (S.properties.overlay_handle = (0, c.X4)()),
            (S.properties.uv_min =
              null !== (i = v(this.m_UVsMin)) && void 0 !== i ? i : void 0),
            (S.properties.uv_max =
              null !== (r = v(this.m_UVsMax)) && void 0 !== r ? r : void 0);
          const f = 1 / u.O.Current().m_fCurrentScale;
          let I = this.props.frame_resize_scale_factor;
          return (
            this.props.is_frame_page_main_panel && (I = null != I ? I : 1),
            (S.properties.width =
              null !== (n = this.props.width) && void 0 !== n ? n : void 0),
            (S.properties.height =
              null !== (o = this.props.height) && void 0 !== o ? o : void 0),
            (S.properties["scale-index"] =
              null !== (s = this.props.scale_index) && void 0 !== s ? s : 0),
            (S.properties["min-width"] =
              null !== (l = this.props.min_width) && void 0 !== l ? l : void 0),
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
                ? this.props.meters_per_pixel * f
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
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _.lasermouse_filtering),
            (S.properties["hide-laser-when-clicking"] =
              this.props.hide_lasermouse_when_clicking),
            (S.properties["hide-laser-intersection"] =
              null === (d = this.props) || void 0 === d
                ? void 0
                : d.hide_laser_intersection),
            (S.properties["make-overlays-interactive-if-visible"] =
              this.props.make_overlays_interactive_if_visible),
            (S.properties["is-grab-handle"] = this.props.is_grab_handle),
            (S.properties["embedded-uv-index"] = this.m_nEmbeddedIndex),
            (S.properties.origin = (0, p.Hm)(R)),
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
            (S.properties["frame-resize-scale-factor"] = I),
            (S.properties["main-panel-for-frame-page"] =
              this.props.is_frame_page_main_panel),
            (S.properties["steam-input-appid"] =
              null === (m = this.props.inputFocusParams) || void 0 === m
                ? void 0
                : m.unSteamInputAppID),
            (S.properties["vr-input-pid"] =
              null === (h = this.props.inputFocusParams) || void 0 === h
                ? void 0
                : h.unVRInputPID),
            [g, S]
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
          return d.createElement(
            "vsg-node",
            { style: { display: this.visibility == a.Hidden ? "none" : null } },
            d.createElement(h.tH, null, this.props.children),
            this.props.is_frame_page_main_panel &&
              d.createElement(y, { panel: this, panelID: this.getID() }),
          );
        }
      }
      function y(e) {
        const { panel: t, panelID: i } = e,
          { page: r } = (0, g.N)();
        return (
          d.useEffect(() => {
            const { Unset: e } = null == r ? void 0 : r.SetMainPanel(t);
            return e;
          }, [r, t, i]),
          null
        );
      }
      (R.s_bPanelsAreDirty = !1),
        (0, _.Cg)([m.o], R.prototype, "onResizeObserved", null),
        (0, _.Cg)([m.o], R.prototype, "onPanelMouseDown", null),
        (0, _.Cg)([m.o], R.prototype, "onWindowMouseUp", null),
        (0, _.Cg)([m.o], R.prototype, "buildNode", null);
    },
    5178: (e, t, i) => {
      "use strict";
      i.d(t, { O: () => d });
      var r = i(1635),
        n = i(6540),
        o = i(7019),
        a = i(3236),
        s = i(5723);
      const l = new (i(776).wd)("EmbeddedPixels");
      var _;
      !(function (e) {
        (e[(e.Canvas = 0)] = "Canvas"), (e[(e.Image = 1)] = "Image");
      })(_ || (_ = {}));
      class d extends n.Component {
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
                ? _.Canvas
                : _.Image,
            }),
            (this.m_DomRef = n.createRef()),
            (this.m_scalingDomRef = n.createRef()),
            (this.m_CanvasRef = n.createRef()),
            (this.m_EmbeddedDataImgRef = n.createRef()),
            (this.m_DebugPointerRef = n.createRef());
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
          (o.Zk.s_bPanelsAreDirty = !0),
            this.setState({
              nForcedUpdateNumber: this.state.nForcedUpdateNumber + 1,
            });
        }
        componentDidMount() {
          let e = this.m_DomRef.current.ownerDocument,
            t = e.defaultView;
          e.body.classList.add("SGApp"),
            document.documentElement.classList.add("VROverlay"),
            (window.SGApp = this),
            (this.m_nEmbeddedDataWidth = t.innerWidth);
          let i = Math.max(0, Math.floor((this.m_nEmbeddedDataWidth - 1) / 3));
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
              (0, s.Oe)(
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
          const e = this.state.eRenderMode == _.Image,
            t = this.state.eRenderMode == _.Canvas;
          let i = [];
          return (
            this.state.bShowDebugPointer && i.push("ShowDebugPointer"),
            n.createElement(
              "vsg-app",
              {
                class: i.join(" "),
                ref: this.m_DomRef,
                "sg-forced-update-number": this.state.nForcedUpdateNumber,
              },
              n.createElement("div", {
                className: "DebugPointer",
                ref: this.m_DebugPointerRef,
              }),
              e &&
                n.createElement("img", {
                  ref: this.m_EmbeddedDataImgRef,
                  className: "EmbeddedData",
                  height: d.k_EmbeddedDataRows,
                }),
              t &&
                n.createElement("canvas", {
                  ref: this.m_CanvasRef,
                  className: "EmbeddedData",
                  height: d.k_EmbeddedDataRows,
                }),
              n.createElement(
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
          this.state.eRenderMode == _.Image
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
            : this.state.eRenderMode == _.Canvas &&
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
            r = t.height / this.m_fCurrentScale,
            n = { x: e.innerWidth / i, y: e.innerHeight / r },
            a = Math.min(n.x, n.y, 1);
          a != this.m_fCurrentScale &&
            (1 != a
              ? this.m_scalingDomRef.current.setAttribute(
                  "style",
                  "transform: scale(" + a + "); transform-origin: top left",
                )
              : this.m_scalingDomRef.current.removeAttribute("style"),
            (this.m_fCurrentScale = a),
            (o.Zk.s_bPanelsAreDirty = !0)),
            o.Zk.s_bPanelsAreDirty &&
              (this.m_mapPanels.forEach((e) => e.updateLayoutValues()),
              (0, s.my)(),
              (o.Zk.s_bPanelsAreDirty = !1),
              this.updateEmbeddedData());
        }
        updateEmbeddedData() {
          var e;
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
              l.Debug("UPDATE EMBEDDED DATA ------------------"),
              this.m_mapPanels.forEach((e, t) => {
                const i = e.m_Rect.x,
                  r = e.m_Rect.x + e.m_Rect.width,
                  n = e.m_Rect.y,
                  o = e.m_Rect.y + e.m_Rect.height,
                  a = e.getEmbeddedIndex(),
                  s = 1 + 3 * a;
                let _ = [0, 0, 0, 0, 0, 0, 0, 0, 0],
                  d = !1;
                if (e.isExternal() || i >= r || n >= o)
                  for (let e = 0; e < 3; e++) this.setPixel(s + 1, 0, 0, 0, 0);
                else
                  (d = !0),
                    (_[0] = (65280 & i) >> 8),
                    (_[1] = 255 & i),
                    (_[2] = 254),
                    (_[3] = (65280 & r) >> 8),
                    (_[4] = 255 & r),
                    (_[5] = 255 & n),
                    (_[6] = (65280 & o) >> 8),
                    (_[7] = 255 & o),
                    (_[8] = (65280 & n) >> 8),
                    this.setPixel(s, _[0], _[1], _[2]),
                    this.setPixel(s + 1, _[3], _[4], _[5]),
                    this.setPixel(s + 2, _[6], _[7], _[8]);
                l.Debug(
                  "panel",
                  d ? "" : "XX",
                  e.props.debug_name,
                  "uvs",
                  i,
                  n,
                  r,
                  o,
                  "nPixelOffset",
                  s,
                  "emIdx",
                  a,
                  _,
                  e.getCurrentRootElement(),
                );
              }),
              this.m_EmbeddedDataImgRef && this.state.eRenderMode == _.Image)
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
            } else if (this.m_CanvasRef && this.state.eRenderMode == _.Canvas) {
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
        setPixel(e, t, i, r, n = 255) {
          if (
            this.m_EmbeddedDataImgRGBBuffer &&
            this.state.eRenderMode == _.Image
          ) {
            const o = new DataView(this.m_EmbeddedDataImgRGBBuffer);
            o.setUint8(4 * e + 0, t),
              o.setUint8(4 * e + 1, i),
              o.setUint8(4 * e + 2, r),
              o.setUint8(4 * e + 3, n);
          } else
            this.m_Pixels &&
              this.state.eRenderMode == _.Canvas &&
              ((this.m_Pixels.data[4 * e + 0] = t),
              (this.m_Pixels.data[4 * e + 1] = i),
              (this.m_Pixels.data[4 * e + 2] = r),
              (this.m_Pixels.data[4 * e + 3] = n),
              (-1 === this.m_nDirtyXMin || e < this.m_nDirtyXMin) &&
                (this.m_nDirtyXMin = e),
              (-1 === this.m_nDirtyXMax || e > this.m_nDirtyXMax) &&
                (this.m_nDirtyXMax = e));
        }
      }
      (d.s_Current = null),
        (d.k_EmbeddedDataRows = 1),
        (0, r.Cg)([a.o], d.prototype, "toggleDebugPointer", null),
        (0, r.Cg)([a.o], d.prototype, "onMouseMove", null),
        (0, r.Cg)([a.o], d.prototype, "forceLayoutUpdate", null),
        (0, r.Cg)([a.o], d.prototype, "onMutation", null);
    },
    3361: (e, t, i) => {
      "use strict";
      i.d(t, { d: () => s });
      var r,
        n = i(6540),
        o = i(3496),
        a = i(6292);
      !(function (e) {
        (e[(e.Seated = 0)] = "Seated"),
          (e[(e.Standing = 1)] = "Standing"),
          (e[(e.Raw = 2)] = "Raw");
      })(r || (r = {}));
      class s extends o._J {
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
          let t, i, s;
          this.props.transform
            ? ((t = (0, o.j_)(this.props.transform.translation)),
              (i = this.props.transform.rotation),
              (s = this.props.transform.scale))
            : ((t = (0, o.XI)(this.props.translation)
                ? null === (e = (0, o.UM)(this.props.translation)) ||
                  void 0 === e
                  ? void 0
                  : e.join(" ")
                : (0, o.j_)(
                    (0, o.Wi)(this.props.translation, { x: 0, y: 0, z: 0 }),
                  )),
              (i =
                this.props.rotation && "w" in this.props.rotation
                  ? this.props.rotation
                  : (0, a.Fb)(
                      (0, a.tx)(
                        (0, o.Wi)(this.props.rotation, { x: 0, y: 0, z: 0 }),
                        Math.PI / 180,
                      ),
                    )),
              (s =
                "number" == typeof this.props.scale
                  ? {
                      x: this.props.scale,
                      y: this.props.scale,
                      z: this.props.scale,
                    }
                  : (0, o.Wi)(this.props.scale, { x: 1, y: 1, z: 1 })));
          let l = (0, o.hi)(i),
            _ = (0, o.j_)(s);
          return n.createElement(
            "vsg-transform",
            {
              translation: t,
              rotation: l,
              scale: _,
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
    3725: (e, t, i) => {
      "use strict";
      var r, n, o, a;
      function s() {
        var e;
        return null !==
          (e =
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.Environment()) && void 0 !== e
          ? e
          : r.Unknown;
      }
      i.d(t, {
        Ee: () => y,
        GQ: () => w,
        Gz: () => _,
        HW: () => g,
        MV: () => o,
        OH: () => r,
        R$: () => s,
        Rk: () => m,
        Xl: () => v,
        Yu: () => C,
        _1: () => F,
        _E: () => l,
        b: () => D,
        gN: () => f,
        k2: () => M,
        kG: () => I,
        ku: () => u,
        mo: () => c,
        mu: () => a,
        ne: () => d,
        pM: () => n,
        rx: () => b,
      }),
        (function (e) {
          (e[(e.Desktop = 1)] = "Desktop"),
            (e[(e.Overlay = 2)] = "Overlay"),
            (e[(e.Unknown = 100)] = "Unknown");
        })(r || (r = {})),
        window.hasOwnProperty("VRHTML") || (window.VRHTML = null),
        (function (e) {
          (e[(e.Auto = 0)] = "Auto"),
            (e[(e.Low = 1)] = "Low"),
            (e[(e.Medium = 2)] = "Medium"),
            (e[(e.High = 3)] = "High");
        })(n || (n = {})),
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
        _ = 0,
        d = 4294967295;
      var p, u, m, c, h, g, S, v, D, R, y, C, f, I, B, M, b, P, F, E, w;
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
      })(p || (p = {})),
        (function (e) {
          (e[(e.Activated = 0)] = "Activated"),
            (e[(e.Deactivated = 1)] = "Deactivated");
        })(u || (u = {})),
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
        })(c || (c = {})),
        (function (e) {
          (e[(e.Unknown = 0)] = "Unknown"),
            (e[(e.NVIDIA = 1)] = "NVIDIA"),
            (e[(e.AMD = 2)] = "AMD");
        })(h || (h = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Starting = 1)] = "Starting"),
            (e[(e.Quitting = 2)] = "Quitting"),
            (e[(e.Running = 3)] = "Running"),
            (e[(e.Waiting = 4)] = "Waiting");
        })(g || (g = {})),
        (function (e) {
          (e[(e.ButtonPress_0 = 0)] = "ButtonPress_0"),
            (e[(e.ButtonPress_1 = 1)] = "ButtonPress_1"),
            (e[(e.ButtonPress_2 = 2)] = "ButtonPress_2"),
            (e[(e.ButtonPress_3 = 3)] = "ButtonPress_3"),
            (e[(e.CouldntFindSystemOverlay = 4)] = "CouldntFindSystemOverlay"),
            (e[(e.CouldntFindOrCreateClientOverlay = 5)] =
              "CouldntFindOrCreateClientOverlay"),
            (e[(e.ApplicationQuit = 6)] = "ApplicationQuit");
        })(S || (S = {})),
        (function (e) {
          (e[(e.Normal = 0)] = "Normal"),
            (e[(e.Password = 1)] = "Password"),
            (e[(e.Submit = 2)] = "Submit");
        })(v || (v = {})),
        (function (e) {
          (e[(e.SingleLine = 0)] = "SingleLine"),
            (e[(e.MultipleLines = 1)] = "MultipleLines");
        })(D || (D = {})),
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
        })(R || (R = {})),
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
        })(C || (C = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.ThisSteamVR = 1)] = "ThisSteamVR"),
            (e[(e.AnotherSteamVR = 2)] = "AnotherSteamVR"),
            (e[(e.AnotherRuntime = 3)] = "AnotherRuntime"),
            (e[(e.Error = -1)] = "Error");
        })(f || (f = {})),
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
        })(I || (I = {})),
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
        })(B || (B = {})),
        (function (e) {
          e[(e.Hostname = 0)] = "Hostname";
        })(M || (M = {})),
        (function (e) {
          (e[(e.Unavailable = 0)] = "Unavailable"),
            (e[(e.Active = 1)] = "Active"),
            (e[(e.Off = 2)] = "Off");
        })(b || (b = {})),
        (function (e) {
          (e[(e.Default = 1)] = "Default"), (e[(e.Floor = 2)] = "Floor");
        })(P || (P = {})),
        (function (e) {
          (e[(e.Inactive = 0)] = "Inactive"),
            (e[(e.PendingReset = 1)] = "PendingReset"),
            (e[(e.PendingResetIfNeeded = 2)] = "PendingResetIfNeeded"),
            (e[(e.Default = 3)] = "Default"),
            (e[(e.CV = 4)] = "CV"),
            (e[(e.Manual = 5)] = "Manual");
        })(F || (F = {})),
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
        })(E || (E = {})),
        (function (e) {
          (e[(e.Small = 0)] = "Small"),
            (e[(e.Medium = 1)] = "Medium"),
            (e[(e.Large = 2)] = "Large"),
            (e[(e.Gigantic = 3)] = "Gigantic"),
            (e[(e.Standing = 4)] = "Standing");
        })(w || (w = {}));
    },
    4367: (e, t, i) => {
      "use strict";
      var r, n, o, a, s, l, _, d, p, u, m, c, h, g;
      i.d(t, {
        $: () => d,
        $Z: () => p,
        Fz: () => g,
        KI: () => _,
        QR: () => a,
        en: () => o,
        eo: () => u,
        fD: () => r,
        fk: () => m,
        um: () => h,
        yW: () => c,
      }),
        (function (e) {
          (e[(e.Invalid = 0)] = "Invalid"),
            (e[(e.TrackingSystemName_String = 1e3)] =
              "TrackingSystemName_String"),
            (e[(e.ModelNumber_String = 1001)] = "ModelNumber_String"),
            (e[(e.SerialNumber_String = 1002)] = "SerialNumber_String"),
            (e[(e.RenderModelName_String = 1003)] = "RenderModelName_String"),
            (e[(e.WillDriftInYaw_Bool = 1004)] = "WillDriftInYaw_Bool"),
            (e[(e.ManufacturerName_String = 1005)] = "ManufacturerName_String"),
            (e[(e.TrackingFirmwareVersion_String = 1006)] =
              "TrackingFirmwareVersion_String"),
            (e[(e.HardwareRevision_String = 1007)] = "HardwareRevision_String"),
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
            (e[(e.HardwareRevision_Uint64 = 1017)] = "HardwareRevision_Uint64"),
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
            (e[(e.InputProfilePath_String = 1037)] = "InputProfilePath_String"),
            (e[(e.NeverTracked_Bool = 1038)] = "NeverTracked_Bool"),
            (e[(e.NumCameras_Int32 = 1039)] = "NumCameras_Int32"),
            (e[(e.CameraFrameLayout_Int32 = 1040)] = "CameraFrameLayout_Int32"),
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
            (e[(e.DisplayGCPrescale_Float = 2020)] = "DisplayGCPrescale_Float"),
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
            (e[(e.AttachedDeviceId_String = 3e3)] = "AttachedDeviceId_String"),
            (e[(e.SupportedButtons_Uint64 = 3001)] = "SupportedButtons_Uint64"),
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
            (e[(e.HasCameraComponent_Bool = 6004)] = "HasCameraComponent_Bool"),
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
        })(r || (r = {})),
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
            (e[(e.k_EButton_Dashboard_Back = 2)] = "k_EButton_Dashboard_Back"),
            (e[(e.k_EButton_IndexController_A = 2)] =
              "k_EButton_IndexController_A"),
            (e[(e.k_EButton_IndexController_B = 1)] =
              "k_EButton_IndexController_B"),
            (e[(e.k_EButton_IndexController_JoyStick = 35)] =
              "k_EButton_IndexController_JoyStick"),
            (e[(e.k_EButton_Reserved0 = 50)] = "k_EButton_Reserved0"),
            (e[(e.k_EButton_Reserved1 = 51)] = "k_EButton_Reserved1"),
            (e[(e.k_EButton_Max = 64)] = "k_EButton_Max");
        })(n || (n = {})),
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
            (e[(e.ShowArrowKeys = 4)] = "ShowArrowKeys"),
            (e[(e.HideDoneKey = 8)] = "HideDoneKey");
        })(a || (a = {})),
        (function (e) {
          (e[(e.Unknown = -1)] = "Unknown"),
            (e[(e.Idle = 0)] = "Idle"),
            (e[(e.UserInteraction = 1)] = "UserInteraction"),
            (e[(e.UserInteraction_Timeout = 2)] = "UserInteraction_Timeout"),
            (e[(e.Standby = 3)] = "Standby"),
            (e[(e.Idle_Timeout = 4)] = "Idle_Timeout");
        })(s || (s = {})),
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
        })(_ || (_ = {})),
        (function (e) {
          (e[(e.Constant = 0)] = "Constant"),
            (e[(e.Nearest = 1)] = "Nearest"),
            (e[(e.Linear = 2)] = "Linear"),
            (e[(e.SmoothStep = 3)] = "SmoothStep"),
            (e[(e.SmootherStep = 4)] = "SmootherStep");
        })(d || (d = {})),
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
        })(u || (u = {})),
        (function (e) {
          (e[(e.__LocalSteamVR = 0)] = "__LocalSteamVR"),
            (e[(e.__LocalSteam = 1)] = "__LocalSteam"),
            (e[(e.__RemoteSteamVR = 2)] = "__RemoteSteamVR"),
            (e[(e.__RemoteSteam = 3)] = "__RemoteSteam"),
            (e[(e.MutualLocal = 4)] = "MutualLocal"),
            (e[(e.MutualSteamVR = 5)] = "MutualSteamVR"),
            (e[(e.MutualSteam = 6)] = "MutualSteam");
        })(m || (m = {})),
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
        })(h || (h = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.ThirdPartyClient = 1)] = "ThirdPartyClient"),
            (e[(e.SteamVRClientUnified = 2)] = "SteamVRClientUnified"),
            (e[(e.SteamVRClientLegacyDual = 3)] = "SteamVRClientLegacyDual");
        })(g || (g = {}));
    },
    6185: (e, t, i) => {
      "use strict";
      i.d(t, { l: () => o });
      var r = i(6540);
      let n = 0;
      function o() {
        const e = r.useRef(void 0);
        return (
          void 0 === e.current && (e.current = "svgid_" + n++),
          [e.current, `url(#${e.current})`]
        );
      }
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~336cd93ad.js.map
