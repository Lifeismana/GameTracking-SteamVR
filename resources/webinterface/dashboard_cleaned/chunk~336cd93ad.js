var CLSTAMP = "steamdb";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [838],
  {
    chunkid: (module) => {
      module.exports = {
        recordingCircle: "svg_library_recordingCircle_2ovZQ",
        AnimationFadeOutIn: "svg_library_AnimationFadeOutIn_1lEwX",
        Spinner: "svg_library_Spinner_1q9tu",
        SpinnerSpokeFade: "svg_library_SpinnerSpokeFade_2E-wW",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _,
        _,
        _,
        _,
        _,
        _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        if (_) return [_._, _._];
      }
      function _(_) {
        switch (_) {
          case _.TopLeft:
            return {
              _: -1,
              _: 1,
            };
          case _.TopCenter:
            return {
              _: 0,
              _: 1,
            };
          case _.TopRight:
            return {
              _: 1,
              _: 1,
            };
          case _.CenterLeft:
            return {
              _: -1,
              _: 0,
            };
          case _.Center:
            return {
              _: 0,
              _: 0,
            };
          case _.CenterRight:
            return {
              _: 1,
              _: 0,
            };
          case _.BottomLeft:
            return {
              _: -1,
              _: -1,
            };
          case _.BottomCenter:
            return {
              _: 0,
              _: -1,
            };
          case _.BottomRight:
            return {
              _: 1,
              _: -1,
            };
        }
      }
      !(function (_) {
        (_[(_.TopLeft = 0)] = "TopLeft"),
          (_[(_.TopCenter = 1)] = "TopCenter"),
          (_[(_.TopRight = 2)] = "TopRight"),
          (_[(_.CenterLeft = 3)] = "CenterLeft"),
          (_[(_.Center = 4)] = "Center"),
          (_[(_.CenterRight = 5)] = "CenterRight"),
          (_[(_.BottomLeft = 6)] = "BottomLeft"),
          (_[(_.BottomCenter = 7)] = "BottomCenter"),
          (_[(_.BottomRight = 8)] = "BottomRight");
      })(_ || (_ = {})),
        (function (_) {
          (_[(_.Auto = 0)] = "Auto"), (_[(_.SingleTap = 1)] = "SingleTap");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Mono = 0)] = "Mono"),
            (_[(_.Parallel = 1)] = "Parallel"),
            (_[(_.Crossed = 2)] = "Crossed"),
            (_[(_.Panorama = 3)] = "Panorama"),
            (_[(_.StackedPanorama = 4)] = "StackedPanorama");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Visible = 0)] = "Visible"),
            (_[(_.SkipInSceneGraph = 1)] = "SkipInSceneGraph"),
            (_[(_.Hidden = 2)] = "Hidden"),
            (_[(_.InvisibleButIntersectable = 3)] =
              "InvisibleButIntersectable");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Default = 0)] = "Default"),
            (_[(_.Disabled = 1)] = "Disabled"),
            (_[(_.Low = 2)] = "Low");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.PixelOffset = 0)] = "PixelOffset"),
            (_[(_.ScaleAndCenter = 1)] = "ScaleAndCenter");
        })(_ || (_ = {}));
      class _ extends _._ {
        constructor(_) {
          super(_),
            (this.m_Rect = {
              _: 0,
              _: 0,
              width: 0,
              height: 0,
            }),
            (this.m_nEmbeddedIndex = null),
            (this.m_LastDOMContentSize = void 0),
            (this.m_DOMContentSizeChangedCallbacks = new _._()),
            (this.m_resizeObserver = null),
            (this.m_UVsMin = void 0),
            (this.m_UVsMax = void 0),
            (this.m_bOverdragBlocking = !1),
            (this.m_overdragBlockingElements = []);
          const _ = void 0 !== this.props.width || void 0 !== this.props.height,
            _ = void 0 !== this.props.meters_per_pixel,
            _ = void 0 !== this.props.target_dpi_panel_id,
            _ =
              void 0 !== this.props.rendermodel_component_device_index ||
              void 0 !== this.props.rendermodel_component_name,
            _ =
              void 0 !== this.props.subview_parent_panel_id ||
              void 0 !== this.props.subview_parent_panel_key;
          if (
            _ &&
            (void 0 === this.props.rendermodel_component_device_index ||
              void 0 === this.props.rendermodel_component_name)
          )
            throw new Error(
              "Panel requires both rendermodel_component_device_index and rendermodel_component_name to be a rendermodel texture.",
            );
          const _ = [_, _, _, _, _].filter((_) => _).length,
            _ =
              "an (explicit width and/or height), an explicit meters_per_pixel, a target_panel_dpi panel ID, a rendermodel name, or a parent overlay of which to become a subview.";
          if (0 == _)
            throw new Error(`Panel requires one of the following props: ${_}.`);
          if (_ > 1)
            throw new Error(
              `Panel cannot have more of the following of the following props: ${_}.`,
            );
          super.setBuildNodeOverride(this.buildNode);
        }
        get lastDOMContentSize() {
          return this.m_LastDOMContentSize;
        }
        RegisterForDOMContentSizeChangedCallback(_) {
          return this.m_DOMContentSizeChangedCallbacks.Register(_);
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
          _.s_bPanelsAreDirty = !0;
        }
        componentDidMount() {
          super.componentDidMount(),
            (this.m_resizeObserver = new ResizeObserver(this.onResizeObserved)),
            this.m_resizeObserver.observe(this.getCurrentRootElement()),
            (this.m_nEmbeddedIndex = _._.Current().addEmbeddedPanelUVs(this)),
            (_.s_bPanelsAreDirty = !0),
            this.getCurrentRootElement().addEventListener(
              "mousedown",
              this.onPanelMouseDown,
            ),
            this.forceUpdate();
        }
        onResizeObserved(_, _) {
          _._.Current().forceLayoutUpdate(),
            (this.m_LastDOMContentSize = {
              clientWidth: _[0].contentRect.width,
              clientHeight: _[0].contentRect.height,
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
            (_.s_bPanelsAreDirty = !0),
            _._.Current().removeEmbeddedPanelUVs(this),
            this.m_DOMContentSizeChangedCallbacks.ClearAllCallbacks(),
            super.componentWillUnmount();
        }
        onPanelMouseDown() {
          this.startOverDragBlocking();
        }
        startOverDragBlocking() {
          if (this.m_bOverdragBlocking) return;
          const _ = document.body.getBoundingClientRect(),
            _ = this.getCurrentRootElement().getBoundingClientRect();
          this.createOverdragBlockingElement(0, 0, _.width, _._),
            this.createOverdragBlockingElement(
              0,
              _._ + _.height,
              _.width,
              _.height - _.height - _._,
            ),
            this.createOverdragBlockingElement(0, _._, _._, _.height),
            this.createOverdragBlockingElement(
              _._ + _.width,
              _._,
              _.width - _.width - _._,
              _.height,
            ),
            window.document.addEventListener("mouseup", this.onWindowMouseUp),
            (this.m_bOverdragBlocking = !0);
        }
        stopOverDragBlocking() {
          this.m_bOverdragBlocking &&
            (this.m_overdragBlockingElements.forEach((_) => {
              document.body.removeChild(_);
            }),
            (this.m_overdragBlockingElements = []),
            window.document.removeEventListener(
              "mouseup",
              this.onWindowMouseUp,
            ),
            (this.m_bOverdragBlocking = !1));
        }
        createOverdragBlockingElement(_, _, _, _) {
          let _ = document.createElement("div");
          (_.style.position = "absolute"),
            (_.style.top = _ + "px"),
            (_.style.left = _ + "px"),
            (_.style.width = _ + "px"),
            (_.style.height = _ + "px"),
            (_.style.zIndex = "90019001"),
            this.m_overdragBlockingElements.push(_),
            document.body.appendChild(_);
        }
        onWindowMouseUp(_) {
          this.stopOverDragBlocking();
        }
        getNodeType() {
          return "panel";
        }
        get visibility() {
          var _;
          return null !== (_ = this.props.visibility) && void 0 !== _
            ? _
            : _.Visible;
        }
        buildNode(_, _) {
          var _, _, _, _, _, _, _, _, _, _;
          if (
            !(
              this.visibility == _.Visible ||
              this.visibility == _.InvisibleButIntersectable
            )
          )
            return [_, null];
          let _ = Object.assign(Object.assign({}, _), {
              bInsideReparentedPanel: !1,
              currentPanel: this,
            }),
            _ = this.createSgNode(_),
            _ = {
              _: 0,
              _: 0,
            };
          _ =
            "object" == typeof this.props.origin
              ? (0, _._)(this.props.origin, {
                  _: 0,
                  _: 0,
                })
              : _(this.props.origin);
          const _ = this.props.overlay_key,
            _ = (0, _._)();
          _ && _.length > 0
            ? (_.properties.key = _)
            : _
              ? (_.properties.key = _)
              : (_.properties.overlay_handle = (0, _._)()),
            (_.properties.uv_min =
              null !== (_ = _(this.m_UVsMin)) && void 0 !== _ ? _ : void 0),
            (_.properties.uv_max =
              null !== (_ = _(this.m_UVsMax)) && void 0 !== _ ? _ : void 0);
          const _ = 1 / _._.Current().m_fCurrentScale;
          let _ = this.props.frame_resize_scale_factor;
          return (
            this.props.is_frame_page_main_panel && (_ = null != _ ? _ : 1),
            (_.properties.width =
              null !== (_ = this.props.width) && void 0 !== _ ? _ : void 0),
            (_.properties.height =
              null !== (_ = this.props.height) && void 0 !== _ ? _ : void 0),
            (_.properties["scale-index"] =
              null !== (_ = this.props.scale_index) && void 0 !== _ ? _ : 0),
            (_.properties["min-width"] =
              null !== (_ = this.props.min_width) && void 0 !== _ ? _ : void 0),
            (_.properties["target-width-anchor-id"] = (0, _._)(
              this.props.target_width_anchor_id,
            )),
            (_.properties["target-dpi-panel-id"] = (0, _._)(
              this.props.target_dpi_panel_id,
            )),
            (_.properties["target-dpi-multiplier"] =
              this.props.target_dpi_multiplier),
            (_.properties["meters-per-pixel"] =
              null != this.props.meters_per_pixel
                ? this.props.meters_per_pixel * _
                : void 0),
            (_.properties["subview-parent-panel-key"] =
              this.props.subview_parent_panel_key),
            (_.properties["subview-parent-panel-id"] =
              this.props.subview_parent_panel_id),
            (_.properties["subview-sizing"] = this.props.subview_sizing),
            (_.properties.curvature = this.props.curvature),
            (_.properties["curvature-origin-id"] = (0, _._)(
              this.props.curvature_origin_id,
            )),
            (_.properties.spherical = this.props.spherical),
            (_.properties.interactive = this.props.interactive),
            (_.properties.scrollable = this.props.scrollable),
            (_.properties.undocked = this.props.undocked),
            (_.properties.modal = this.props.modal),
            (_.properties["only-visible-with-laser"] =
              this.props.only_visible_with_laser),
            (_.properties["allow-input-capture"] =
              this.props.allow_input_capture),
            (_.properties["lasermouse-filtering"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _.lasermouse_filtering),
            (_.properties["hide-laser-when-clicking"] =
              this.props.hide_lasermouse_when_clicking),
            (_.properties["hide-laser-intersection"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _.hide_laser_intersection),
            (_.properties["make-overlays-interactive-if-visible"] =
              this.props.make_overlays_interactive_if_visible),
            (_.properties["is-grab-handle"] = this.props.is_grab_handle),
            (_.properties["embedded-uv-index"] = this.m_nEmbeddedIndex),
            (_.properties.origin = (0, _._)(_)),
            (_.properties.debug_name = this.props.debug_name),
            (_.properties.sampler = this.props.sampler),
            (_.properties.reflect = this.props.reflect),
            (_.properties.stereoscopy = this.props.stereoscopy),
            (_.properties.rendermodel_component_device_index =
              this.props.rendermodel_component_device_index),
            (_.properties.rendermodel_component_name =
              this.props.rendermodel_component_name),
            (_.properties["texture-id"] = (0, _._)(this.props.texture_id)),
            (_.properties["sort-order"] = this.props.sort_order),
            (_.properties["sort-depth-bias"] = this.props.sort_depth_bias),
            (_.properties.visibility = this.visibility),
            (_.properties["frame-resize-scale-factor"] = _),
            (_.properties["main-panel-for-frame-page"] =
              this.props.is_frame_page_main_panel),
            (_.properties["steam-input-appid"] =
              null === (_ = this.props.inputFocusParams) || void 0 === _
                ? void 0
                : _.unSteamInputAppID),
            (_.properties["vr-input-pid"] =
              null === (_ = this.props.inputFocusParams) || void 0 === _
                ? void 0
                : _.unVRInputPID),
            [_, _]
          );
        }
        scaleLocalUVToGlobal(_) {
          const _ = this.m_UVsMax._ - this.m_UVsMin._,
            _ = this.m_UVsMax._ - this.m_UVsMin._;
          return {
            _: this.m_UVsMin._ + _ * _._,
            _: this.m_UVsMin._ + _ * _._,
          };
        }
        updateLayoutValues() {
          if (this.props.overlay_key)
            return (
              (this.m_UVsMin = this.props.uv_min),
              void (this.m_UVsMax = this.props.uv_max)
            );
          this.m_Rect = this.getCurrentRootElement().getBoundingClientRect();
          let _ = this.getCurrentRootElement().ownerDocument.defaultView;
          (this.m_UVsMin = {
            _: this.m_Rect._ / _.innerWidth,
            _: this.m_Rect._ / _.innerHeight,
          }),
            (this.m_UVsMax = {
              _: (this.m_Rect._ + this.m_Rect.width) / _.innerWidth,
              _: (this.m_Rect._ + this.m_Rect.height) / _.innerHeight,
            });
        }
        PanelContextValue() {
          return this;
        }
        internalRender() {
          return _.createElement(
            "vsg-node",
            {
              style: {
                display: this.visibility == _.Hidden ? "none" : null,
              },
            },
            _.createElement(_._, null, this.props.children),
            this.props.is_frame_page_main_panel &&
              _.createElement(_, {
                panel: this,
                panelID: this.getID(),
              }),
          );
        }
      }
      function _(_) {
        const { panel: _, panelID: _ } = _,
          { page: _ } = (0, _._)();
        return (
          _.useEffect(() => {
            const { Unset: _ } = null == _ ? void 0 : _.SetMainPanel(_);
            return _;
          }, [_, _, _]),
          null
        );
      }
      (_.s_bPanelsAreDirty = !1),
        (0, _._)([_._], _.prototype, "onResizeObserved", null),
        (0, _._)([_._], _.prototype, "onPanelMouseDown", null),
        (0, _._)([_._], _.prototype, "onWindowMouseUp", null),
        (0, _._)([_._], _.prototype, "buildNode", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = new (__webpack_require__("chunkid")._)("EmbeddedPixels");
      var _;
      !(function (_) {
        (_[(_.Canvas = 0)] = "Canvas"), (_[(_.Image = 1)] = "Image");
      })(_ || (_ = {}));
      class _ extends _.Component {
        static get IsSceneGraphApp() {
          return null !== _.Current();
        }
        static Current() {
          return _.s_Current;
        }
        constructor(_) {
          var _;
          super(_),
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
            (_.s_Current = this),
            (this.state = {
              bFontsLoaded: !1,
              nForcedUpdateNumber: 0,
              bShowDebugPointer: !1,
              eRenderMode: (
                null === (_ = VRHTML.VRUtil) || void 0 === _
                  ? void 0
                  : _.BSupportsCEFCanvas()
              )
                ? _.Canvas
                : _.Image,
            }),
            (this.m_DomRef = _.createRef()),
            (this.m_scalingDomRef = _.createRef()),
            (this.m_CanvasRef = _.createRef()),
            (this.m_EmbeddedDataImgRef = _.createRef()),
            (this.m_DebugPointerRef = _.createRef());
        }
        toggleDebugPointer() {
          this.setState({
            bShowDebugPointer: !this.state.bShowDebugPointer,
          });
        }
        onMouseMove(_) {
          this.state.bShowDebugPointer &&
            this.m_DebugPointerRef.current &&
            (this.m_DebugPointerRef.current.style.transform =
              "translateX( " +
              _.clientX +
              "px ) translateY( " +
              _.clientY +
              "px )");
        }
        forceLayoutUpdate() {
          (_._.s_bPanelsAreDirty = !0),
            this.setState({
              nForcedUpdateNumber: this.state.nForcedUpdateNumber + 1,
            });
        }
        componentDidMount() {
          let _ = this.m_DomRef.current.ownerDocument,
            _ = _.defaultView;
          _.body.classList.add("SGApp"),
            document.documentElement.classList.add("VROverlay"),
            (window.SGApp = this),
            (this.m_nEmbeddedDataWidth = _.innerWidth);
          let _ = Math.max(0, Math.floor((this.m_nEmbeddedDataWidth - 1) / 3));
          for (let _ = 0; _ < _; _++)
            this.m_rAvailableEmbeddedIndicesQueue.push(_);
          _.addEventListener("mousemove", this.onMouseMove),
            (this.m_Observer = new MutationObserver(this.onMutation)),
            this.m_Observer.observe(this.m_DomRef.current, {
              attributes: !0,
              attributeFilter: ["sg-forced-update-number", "overlay-key"],
              childList: !0,
              subtree: !0,
            }),
            this.createEmbeddedData(),
            _.addEventListener("load", this.forceLayoutUpdate),
            _.fonts.ready.then(() =>
              this.setState({
                bFontsLoaded: !0,
              }),
            ),
            (_.forceLayoutUpdate = this.forceLayoutUpdate),
            (_.toggleDebugPointer = this.toggleDebugPointer),
            (this.props.owning_overlay_key || this.props.web_secret) &&
              (0, _._)(
                this.props.owning_overlay_key,
                this.m_DomRef.current,
                this.props.web_secret,
              );
        }
        componentWillUnmount() {
          let _ = this.m_DomRef.current.ownerDocument;
          _.body.classList.remove("SGApp"),
            document.documentElement.classList.remove("VROverlay"),
            this.m_Observer && this.m_Observer.disconnect(),
            _.removeEventListener("mousemove", this.onMouseMove);
        }
        render() {
          const _ = this.state.eRenderMode == _.Image,
            _ = this.state.eRenderMode == _.Canvas;
          let _ = [];
          return (
            this.state.bShowDebugPointer &&
              __webpack_require__.push("ShowDebugPointer"),
            _.createElement(
              "vsg-app",
              {
                class: __webpack_require__.join(" "),
                ref: this.m_DomRef,
                "sg-forced-update-number": this.state.nForcedUpdateNumber,
              },
              _.createElement("div", {
                className: "DebugPointer",
                ref: this.m_DebugPointerRef,
              }),
              _ &&
                _.createElement("img", {
                  ref: this.m_EmbeddedDataImgRef,
                  className: "EmbeddedData",
                  height: _.k_EmbeddedDataRows,
                }),
              _ &&
                _.createElement("canvas", {
                  ref: this.m_CanvasRef,
                  className: "EmbeddedData",
                  height: _.k_EmbeddedDataRows,
                }),
              _.createElement(
                "div",
                {
                  className: "AppSceneGraph",
                  ref: this.m_scalingDomRef,
                },
                this.state.bFontsLoaded && this.props.children,
              ),
            )
          );
        }
        addEmbeddedPanelUVs(_) {
          return 0 === this.m_rAvailableEmbeddedIndicesQueue.length
            ? null
            : (this.m_mapPanels.set(_.getSGID(), _),
              this.m_rAvailableEmbeddedIndicesQueue.shift());
        }
        removeEmbeddedPanelUVs(_) {
          this.m_mapPanels.has(_.getSGID()) &&
            (this.m_mapPanels.delete(_.getSGID()),
            this.m_rAvailableEmbeddedIndicesQueue.push(_.getEmbeddedIndex()),
            this.m_rEmbeddedIndicesToClear.push(_.getEmbeddedIndex()));
        }
        onMutation(_, _) {
          this.updateAllPanelBounds();
        }
        createEmbeddedData() {
          var _;
          this.state.eRenderMode == _.Image
            ? ((this.m_EmbeddedDataImgRef.current.width =
                this.m_nEmbeddedDataWidth),
              this.m_EmbeddedDataImgRGBBuffer ||
                (this.m_EmbeddedDataImgRGBBuffer =
                  null === (_ = VRHTML.VRUtil) || void 0 === _
                    ? void 0
                    : _.CreateEmbeddedRGBScanline(
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
                  _.k_EmbeddedDataRows,
                ))),
            this.updateAllPanelBounds();
        }
        updateAllPanelBounds() {
          let _ = this.m_DomRef.current.ownerDocument.defaultView,
            _ = this.m_scalingDomRef.current.getBoundingClientRect(),
            _ = _.width / this.m_fCurrentScale,
            _ = _.height / this.m_fCurrentScale,
            _ = {
              _: _.innerWidth / _,
              _: _.innerHeight / _,
            },
            _ = Math.min(_._, _._, 1);
          _ != this.m_fCurrentScale &&
            (1 != _
              ? this.m_scalingDomRef.current.setAttribute(
                  "style",
                  "transform: scale(" + _ + "); transform-origin: top left",
                )
              : this.m_scalingDomRef.current.removeAttribute("style"),
            (this.m_fCurrentScale = _),
            (_._.s_bPanelsAreDirty = !0)),
            _._.s_bPanelsAreDirty &&
              (this.m_mapPanels.forEach((_) => _.updateLayoutValues()),
              (0, _._)(),
              (_._.s_bPanelsAreDirty = !1),
              this.updateEmbeddedData());
        }
        updateEmbeddedData() {
          var _;
          if (this.m_EmbeddedDataImgRef || this.m_CanvasRef)
            if (
              (this.setPixel(
                0,
                "V".charCodeAt(0),
                "S".charCodeAt(0),
                "G".charCodeAt(0),
              ),
              this.m_rEmbeddedIndicesToClear.forEach((_) => {
                let _ = 1 + 3 * _;
                for (let _ = 0; _ < 3; _++) this.setPixel(_ + _, 0, 0, 0, 0);
              }),
              (this.m_rEmbeddedIndicesToClear = []),
              _.Debug("UPDATE EMBEDDED DATA ------------------"),
              this.m_mapPanels.forEach((_, _) => {
                const _ = _.m_Rect._,
                  _ = _.m_Rect._ + _.m_Rect.width,
                  _ = _.m_Rect._,
                  _ = _.m_Rect._ + _.m_Rect.height,
                  _ = _.getEmbeddedIndex(),
                  _ = 1 + 3 * _;
                let _ = [0, 0, 0, 0, 0, 0, 0, 0, 0],
                  _ = !1;
                if (_.isExternal() || _ >= _ || _ >= _)
                  for (let _ = 0; _ < 3; _++) this.setPixel(_ + 1, 0, 0, 0, 0);
                else
                  (_ = !0),
                    (_[0] = (65280 & _) >> 8),
                    (_[1] = 255 & _),
                    (_[2] = 254),
                    (_[3] = (65280 & _) >> 8),
                    (_[4] = 255 & _),
                    (_[5] = 255 & _),
                    (_[6] = (65280 & _) >> 8),
                    (_[7] = 255 & _),
                    (_[8] = (65280 & _) >> 8),
                    this.setPixel(_, _[0], _[1], _[2]),
                    this.setPixel(_ + 1, _[3], _[4], _[5]),
                    this.setPixel(_ + 2, _[6], _[7], _[8]);
                _.Debug(
                  "panel",
                  _ ? "" : "XX",
                  _.props.debug_name,
                  "uvs",
                  _,
                  _,
                  _,
                  _,
                  "nPixelOffset",
                  _,
                  "emIdx",
                  _,
                  _,
                  _.getCurrentRootElement(),
                );
              }),
              this.m_EmbeddedDataImgRef && this.state.eRenderMode == _.Image)
            ) {
              const _ =
                null === (_ = VRHTML.VRUtil) || void 0 === _
                  ? void 0
                  : _.GetEmbeddedScanlineAsURIImage(
                      this.m_nEmbeddedDataWidth,
                      1,
                      4,
                    );
              this.m_EmbeddedDataImgRef.current.src = _;
            } else if (this.m_CanvasRef && this.state.eRenderMode == _.Canvas) {
              let _ = this.m_nDirtyXMax - this.m_nDirtyXMin + 1;
              this.m_CanvasContext.putImageData(
                this.m_Pixels,
                0,
                0,
                this.m_nDirtyXMin,
                0,
                _,
                this.m_Pixels.height,
              ),
                (this.m_nDirtyXMin = -1),
                (this.m_nDirtyXMax = -1);
            }
        }
        setPixel(_, _, _, _, _ = 255) {
          if (
            this.m_EmbeddedDataImgRGBBuffer &&
            this.state.eRenderMode == _.Image
          ) {
            const _ = new DataView(this.m_EmbeddedDataImgRGBBuffer);
            _.setUint8(4 * _ + 0, _),
              _.setUint8(4 * _ + 1, _),
              _.setUint8(4 * _ + 2, _),
              _.setUint8(4 * _ + 3, _);
          } else
            this.m_Pixels &&
              this.state.eRenderMode == _.Canvas &&
              ((this.m_Pixels.data[4 * _ + 0] = _),
              (this.m_Pixels.data[4 * _ + 1] = _),
              (this.m_Pixels.data[4 * _ + 2] = _),
              (this.m_Pixels.data[4 * _ + 3] = _),
              (-1 === this.m_nDirtyXMin || _ < this.m_nDirtyXMin) &&
                (this.m_nDirtyXMin = _),
              (-1 === this.m_nDirtyXMax || _ > this.m_nDirtyXMax) &&
                (this.m_nDirtyXMax = _));
        }
      }
      (_.s_Current = null),
        (_.k_EmbeddedDataRows = 1),
        (0, _._)([_._], _.prototype, "toggleDebugPointer", null),
        (0, _._)([_._], _.prototype, "onMouseMove", null),
        (0, _._)([_._], _.prototype, "forceLayoutUpdate", null),
        (0, _._)([_._], _.prototype, "onMutation", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      !(function (_) {
        (_[(_.Seated = 0)] = "Seated"),
          (_[(_.Standing = 1)] = "Standing"),
          (_[(_.Raw = 2)] = "Raw");
      })(_ || (_ = {}));
      class _ extends _._ {
        constructor(_) {
          super(_);
          if (
            (void 0 === _.parent_path ? 0 : 1) +
              (void 0 === _.parent_origin ? 0 : 1) +
              (void 0 === _.parent_id ? 0 : 1) >
            1
          )
            throw new Error(
              "Transform cannot have more than one parent_ property set.",
            );
        }
        internalRender() {
          var _;
          let _, _, _;
          this.props.transform
            ? ((_ = (0, _._)(this.props.transform.translation)),
              (_ = this.props.transform.rotation),
              (_ = this.props.transform.scale))
            : ((_ = (0, _._)(this.props.translation)
                ? null === (_ = (0, _._)(this.props.translation)) ||
                  void 0 === _
                  ? void 0
                  : _.join(" ")
                : (0, _._)(
                    (0, _._)(this.props.translation, {
                      _: 0,
                      _: 0,
                      _: 0,
                    }),
                  )),
              (_ =
                this.props.rotation && "w" in this.props.rotation
                  ? this.props.rotation
                  : (0, _._)(
                      (0, _._)(
                        (0, _._)(this.props.rotation, {
                          _: 0,
                          _: 0,
                          _: 0,
                        }),
                        Math._ / 180,
                      ),
                    )),
              (_ =
                "number" == typeof this.props.scale
                  ? {
                      _: this.props.scale,
                      _: this.props.scale,
                      _: this.props.scale,
                    }
                  : (0, _._)(this.props.scale, {
                      _: 1,
                      _: 1,
                      _: 1,
                    })));
          let _ = (0, _._)(_),
            _ = (0, _._)(_);
          return _.createElement(
            "vsg-transform",
            {
              translation: _,
              rotation: _,
              scale: _,
              "curvature-pitch": this.props.curvature_pitch,
              "invert-parent-panel-pitch": this.props.invert_parent_panel_pitch,
              "ignore-parent-scale": this.props.ignore_parent_scale,
              "transform-path": this.props.transform_path,
              "parent-path": this.props.parent_path,
              "parent-origin": _[this.props.parent_origin],
              "parent-id": this.props.parent_id,
              "frame-resize-scale-factor": this.props.frame_resize_scale_factor,
            },
            this.props.children,
          );
        }
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      var _, _, _, _;
      function _() {
        var _;
        return null !==
          (_ =
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.Environment()) && void 0 !== _
          ? _
          : _.Unknown;
      }
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      }),
        (function (_) {
          (_[(_.Desktop = 1)] = "Desktop"),
            (_[(_.Overlay = 2)] = "Overlay"),
            (_[(_.Unknown = 100)] = "Unknown");
        })(_ || (_ = {})),
        window.hasOwnProperty("VRHTML") || (window.VRHTML = null),
        (function (_) {
          (_[(_.Auto = 0)] = "Auto"),
            (_[(_.Low = 1)] = "Low"),
            (_[(_.Medium = 2)] = "Medium"),
            (_[(_.High = 3)] = "High");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.TrackingResult_Uninitialized = 1)] =
            "TrackingResult_Uninitialized"),
            (_[(_.TrackingResult_Calibrating_InProgress = 100)] =
              "TrackingResult_Calibrating_InProgress"),
            (_[(_.TrackingResult_Calibrating_OutOfRange = 101)] =
              "TrackingResult_Calibrating_OutOfRange"),
            (_[(_.TrackingResult_Running_OK = 200)] =
              "TrackingResult_Running_OK"),
            (_[(_.TrackingResult_Running_OutOfRange = 201)] =
              "TrackingResult_Running_OutOfRange"),
            (_[(_.TrackingResult_Fallback_RotationOnly = 300)] =
              "TrackingResult_Fallback_RotationOnly");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Seated = 0)] = "Seated"),
            (_[(_.Standing = 1)] = "Standing"),
            (_[(_.RawAndUncalibrated = 2)] = "RawAndUncalibrated");
        })(_ || (_ = {}));
      let _ = 0,
        _ = 0,
        _ = 4294967295;
      var _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _;
      !(function (_) {
        (_[(_.None = 0)] = "None"),
          (_[(_.Shown = 1)] = "Shown"),
          (_[(_.Hidden = 2)] = "Hidden"),
          (_[(_.Exposed = 3)] = "Exposed"),
          (_[(_.Moved = 4)] = "Moved"),
          (_[(_.Resized = 5)] = "Resized"),
          (_[(_.SizeChanged = 6)] = "SizeChanged"),
          (_[(_.Minimized = 7)] = "Minimized"),
          (_[(_.Maximized = 8)] = "Maximized"),
          (_[(_.Restored = 9)] = "Restored"),
          (_[(_.Enter = 10)] = "Enter"),
          (_[(_.Leave = 11)] = "Leave"),
          (_[(_.FocusGained = 12)] = "FocusGained"),
          (_[(_.FocusLost = 13)] = "FocusLost"),
          (_[(_.Close = 14)] = "Close"),
          (_[(_.TakeFocus = 15)] = "TakeFocus"),
          (_[(_.HitTest = 16)] = "HitTest");
      })(_ || (_ = {})),
        (function (_) {
          (_[(_.Activated = 0)] = "Activated"),
            (_[(_.Deactivated = 1)] = "Deactivated");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.None = 0)] = "None"), (_[(_.Mouse = 1)] = "Mouse");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Invalid = 0)] = "Invalid"),
            (_[(_.HMD = 1)] = "HMD"),
            (_[(_.Controller = 2)] = "Controller"),
            (_[(_.GenericTracker = 3)] = "GenericTracker"),
            (_[(_.TrackingReference = 4)] = "TrackingReference"),
            (_[(_.DisplayRedirect = 5)] = "DisplayRedirect");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Unknown = 0)] = "Unknown"),
            (_[(_.NVIDIA = 1)] = "NVIDIA"),
            (_[(_.AMD = 2)] = "AMD");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.None = 0)] = "None"),
            (_[(_.Starting = 1)] = "Starting"),
            (_[(_.Quitting = 2)] = "Quitting"),
            (_[(_.Running = 3)] = "Running"),
            (_[(_.Waiting = 4)] = "Waiting");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.ButtonPress_0 = 0)] = "ButtonPress_0"),
            (_[(_.ButtonPress_1 = 1)] = "ButtonPress_1"),
            (_[(_.ButtonPress_2 = 2)] = "ButtonPress_2"),
            (_[(_.ButtonPress_3 = 3)] = "ButtonPress_3"),
            (_[(_.CouldntFindSystemOverlay = 4)] = "CouldntFindSystemOverlay"),
            (_[(_.CouldntFindOrCreateClientOverlay = 5)] =
              "CouldntFindOrCreateClientOverlay"),
            (_[(_.ApplicationQuit = 6)] = "ApplicationQuit");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Normal = 0)] = "Normal"),
            (_[(_.Password = 1)] = "Password"),
            (_[(_.Submit = 2)] = "Submit");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.SingleLine = 0)] = "SingleLine"),
            (_[(_.MultipleLines = 1)] = "MultipleLines");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.LaserMouse = 1)] = "LaserMouse"),
            (_[(_.Keyboard = 2)] = "Keyboard"),
            (_[(_.RoomView = 4)] = "RoomView"),
            (_[(_.DisplaySuppressed = 8)] = "DisplaySuppressed"),
            (_[(_.SystemButtonDown = 16)] = "SystemButtonDown"),
            (_[(_.DriverIsDrawingControllers = 32)] =
              "DriverIsDrawingControllers"),
            (_[(_.DriverRequestsApplicationPause = 64)] =
              "DriverRequestsApplicationPause"),
            (_[(_.DriverRequestsReducedRendering = 128)] =
              "DriverRequestsReducedRendering");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.BULK_DEFAULT = 0)] = "BULK_DEFAULT"),
            (_[(_.BULK_64K_DMA = 1)] = "BULK_64K_DMA"),
            (_[(_.BULK_16K_DMA = 2)] = "BULK_16K_DMA"),
            (_[(_.BULK_8K_DMA = 3)] = "BULK_8K_DMA"),
            (_[(_.ISO_52FPS = 4)] = "ISO_52FPS"),
            (_[(_.ISO_50FPS = 5)] = "ISO_50FPS"),
            (_[(_.ISO_48FPS = 6)] = "ISO_48FPS"),
            (_[(_.ISO_46FPS = 7)] = "ISO_46FPS"),
            (_[(_.ISO_44FPS = 8)] = "ISO_44FPS"),
            (_[(_.ISO_42FPS = 9)] = "ISO_42FPS"),
            (_[(_.ISO_40FPS = 10)] = "ISO_40FPS"),
            (_[(_.ISO_35FPS = 11)] = "ISO_35FPS"),
            (_[(_.ISO_30FPS = 12)] = "ISO_30FPS"),
            (_[(_.ISO_15FPS = 13)] = "ISO_15FPS"),
            (_[(_.MAX_CAMERA_COMPAT_MODES = 14)] = "MAX_CAMERA_COMPAT_MODES");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.ECameraExposure_Unknown = 0)] = "ECameraExposure_Unknown"),
            (_[(_.ECameraExposure_Nominal = 1)] = "ECameraExposure_Nominal"),
            (_[(_.ECameraExposure_HighExposure = 2)] =
              "ECameraExposure_HighExposure");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.None = 0)] = "None"),
            (_[(_.ThisSteamVR = 1)] = "ThisSteamVR"),
            (_[(_.AnotherSteamVR = 2)] = "AnotherSteamVR"),
            (_[(_.AnotherRuntime = 3)] = "AnotherRuntime"),
            (_[(_.Error = -1)] = "Error");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.TrackedControllerRole_Invalid = 0)] =
            "TrackedControllerRole_Invalid"),
            (_[(_.TrackedControllerRole_LeftHand = 1)] =
              "TrackedControllerRole_LeftHand"),
            (_[(_.TrackedControllerRole_RightHand = 2)] =
              "TrackedControllerRole_RightHand"),
            (_[(_.TrackedControllerRole_OptOut = 3)] =
              "TrackedControllerRole_OptOut"),
            (_[(_.TrackedControllerRole_Treadmill = 4)] =
              "TrackedControllerRole_Treadmill"),
            (_[(_.TrackedControllerRole_Max = 5)] =
              "TrackedControllerRole_Max");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Unknown = 0)] = "Unknown"),
            (_[(_.Steam_VRButton = 1)] = "Steam_VRButton"),
            (_[(_.Steam_StartSteamVRApp = 2)] = "Steam_StartSteamVRApp"),
            (_[(_.Watchdog_Unknown = 10)] = "Watchdog_Unknown"),
            (_[(_.Watchdog_Controller = 11)] = "Watchdog_Controller"),
            (_[(_.Watchdog_Hmd = 12)] = "Watchdog_Hmd"),
            (_[(_.AppLaunch_Unknown = 20)] = "AppLaunch_Unknown"),
            (_[(_.AppLaunch_Steam = 21)] = "AppLaunch_Steam"),
            (_[(_.SteamVR_Restart = 30)] = "SteamVR_Restart"),
            (_[(_.SteamVR_VRStartup = 31)] = "SteamVR_VRStartup");
        })(_ || (_ = {})),
        (function (_) {
          _[(_.Hostname = 0)] = "Hostname";
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Unavailable = 0)] = "Unavailable"),
            (_[(_.Active = 1)] = "Active"),
            (_[(_.Off = 2)] = "Off");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Default = 1)] = "Default"), (_[(_.Floor = 2)] = "Floor");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Inactive = 0)] = "Inactive"),
            (_[(_.PendingReset = 1)] = "PendingReset"),
            (_[(_.PendingResetIfNeeded = 2)] = "PendingResetIfNeeded"),
            (_[(_.Default = 3)] = "Default"),
            (_[(_._ = 4)] = "CV"),
            (_[(_.Manual = 5)] = "Manual");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_._ = 1)] = "OK"),
            (_[(_.Warning = 100)] = "Warning"),
            (_[(_.Warning_BaseStationMayHaveMoved = 101)] =
              "Warning_BaseStationMayHaveMoved"),
            (_[(_.Warning_BaseStationRemoved = 102)] =
              "Warning_BaseStationRemoved"),
            (_[(_.Warning_SeatedBoundsInvalid = 103)] =
              "Warning_SeatedBoundsInvalid"),
            (_[(_.Error = 200)] = "Error"),
            (_[(_.Error_BaseStationUninitialized = 201)] =
              "Error_BaseStationUninitialized"),
            (_[(_.Error_BaseStationConflict = 202)] =
              "Error_BaseStationConflict"),
            (_[(_.Error_PlayAreaInvalid = 203)] = "Error_PlayAreaInvalid"),
            (_[(_.Error_CollisionBoundsInvalid = 204)] =
              "Error_CollisionBoundsInvalid");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Small = 0)] = "Small"),
            (_[(_.Medium = 1)] = "Medium"),
            (_[(_.Large = 2)] = "Large"),
            (_[(_.Gigantic = 3)] = "Gigantic"),
            (_[(_.Standing = 4)] = "Standing");
        })(_ || (_ = {}));
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      var _, _, _, _, _, _, _, _, _, _, _, _, _, _;
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      }),
        (function (_) {
          (_[(_.Invalid = 0)] = "Invalid"),
            (_[(_.TrackingSystemName_String = 1e3)] =
              "TrackingSystemName_String"),
            (_[(_.ModelNumber_String = 1001)] = "ModelNumber_String"),
            (_[(_.SerialNumber_String = 1002)] = "SerialNumber_String"),
            (_[(_.RenderModelName_String = 1003)] = "RenderModelName_String"),
            (_[(_.WillDriftInYaw_Bool = 1004)] = "WillDriftInYaw_Bool"),
            (_[(_.ManufacturerName_String = 1005)] = "ManufacturerName_String"),
            (_[(_.TrackingFirmwareVersion_String = 1006)] =
              "TrackingFirmwareVersion_String"),
            (_[(_.HardwareRevision_String = 1007)] = "HardwareRevision_String"),
            (_[(_.AllWirelessDongleDescriptions_String = 1008)] =
              "AllWirelessDongleDescriptions_String"),
            (_[(_.ConnectedWirelessDongle_String = 1009)] =
              "ConnectedWirelessDongle_String"),
            (_[(_.DeviceIsWireless_Bool = 1010)] = "DeviceIsWireless_Bool"),
            (_[(_.DeviceIsCharging_Bool = 1011)] = "DeviceIsCharging_Bool"),
            (_[(_.DeviceBatteryPercentage_Float = 1012)] =
              "DeviceBatteryPercentage_Float"),
            (_[(_.StatusDisplayTransform_Matrix34 = 1013)] =
              "StatusDisplayTransform_Matrix34"),
            (_[(_.Firmware_UpdateAvailable_Bool = 1014)] =
              "Firmware_UpdateAvailable_Bool"),
            (_[(_.Firmware_ManualUpdate_Bool = 1015)] =
              "Firmware_ManualUpdate_Bool"),
            (_[(_.Firmware_ManualUpdateURL_String = 1016)] =
              "Firmware_ManualUpdateURL_String"),
            (_[(_.HardwareRevision_Uint64 = 1017)] = "HardwareRevision_Uint64"),
            (_[(_.FirmwareVersion_Uint64 = 1018)] = "FirmwareVersion_Uint64"),
            (_[(_.FPGAVersion_Uint64 = 1019)] = "FPGAVersion_Uint64"),
            (_[(_.VRCVersion_Uint64 = 1020)] = "VRCVersion_Uint64"),
            (_[(_.RadioVersion_Uint64 = 1021)] = "RadioVersion_Uint64"),
            (_[(_.DongleVersion_Uint64 = 1022)] = "DongleVersion_Uint64"),
            (_[(_.BlockServerShutdown_Bool = 1023)] =
              "BlockServerShutdown_Bool"),
            (_[(_.CanUnifyCoordinateSystemWithHmd_Bool = 1024)] =
              "CanUnifyCoordinateSystemWithHmd_Bool"),
            (_[(_.ContainsProximitySensor_Bool = 1025)] =
              "ContainsProximitySensor_Bool"),
            (_[(_.DeviceProvidesBatteryStatus_Bool = 1026)] =
              "DeviceProvidesBatteryStatus_Bool"),
            (_[(_.DeviceCanPowerOff_Bool = 1027)] = "DeviceCanPowerOff_Bool"),
            (_[(_.Firmware_ProgrammingTarget_String = 1028)] =
              "Firmware_ProgrammingTarget_String"),
            (_[(_.DeviceClass_Int32 = 1029)] = "DeviceClass_Int32"),
            (_[(_.HasCamera_Bool = 1030)] = "HasCamera_Bool"),
            (_[(_.DriverVersion_String = 1031)] = "DriverVersion_String"),
            (_[(_.Firmware_ForceUpdateRequired_Bool = 1032)] =
              "Firmware_ForceUpdateRequired_Bool"),
            (_[(_.ViveSystemButtonFixRequired_Bool = 1033)] =
              "ViveSystemButtonFixRequired_Bool"),
            (_[(_.ParentDriver_Uint64 = 1034)] = "ParentDriver_Uint64"),
            (_[(_.ResourceRoot_String = 1035)] = "ResourceRoot_String"),
            (_[(_.RegisteredDeviceType_String = 1036)] =
              "RegisteredDeviceType_String"),
            (_[(_.InputProfilePath_String = 1037)] = "InputProfilePath_String"),
            (_[(_.NeverTracked_Bool = 1038)] = "NeverTracked_Bool"),
            (_[(_.NumCameras_Int32 = 1039)] = "NumCameras_Int32"),
            (_[(_.CameraFrameLayout_Int32 = 1040)] = "CameraFrameLayout_Int32"),
            (_[(_.CameraStreamFormat_Int32 = 1041)] =
              "CameraStreamFormat_Int32"),
            (_[(_.AdditionalDeviceSettingsPath_String = 1042)] =
              "AdditionalDeviceSettingsPath_String"),
            (_[(_.DevicePowerUsage_Float = 1052)] = "DevicePowerUsage_Float"),
            (_[(_.ActualTrackingSystemName_String = 1054)] =
              "ActualTrackingSystemName_String"),
            (_[(_.AllowCameraToggle_Bool = 1055)] = "AllowCameraToggle_Bool"),
            (_[(_.AllowLightSourceFrequency_Bool = 1056)] =
              "AllowLightSourceFrequency_Bool"),
            (_[(_.HasEyeTracker_Bool = 1060)] = "HasEyeTracker_Bool"),
            (_[(_.ReportsTimeSinceVSync_Bool = 2e3)] =
              "ReportsTimeSinceVSync_Bool"),
            (_[(_.SecondsFromVsyncToPhotons_Float = 2001)] =
              "SecondsFromVsyncToPhotons_Float"),
            (_[(_.DisplayFrequency_Float = 2002)] = "DisplayFrequency_Float"),
            (_[(_.UserIpdMeters_Float = 2003)] = "UserIpdMeters_Float"),
            (_[(_.CurrentUniverseId_Uint64 = 2004)] =
              "CurrentUniverseId_Uint64"),
            (_[(_.PreviousUniverseId_Uint64 = 2005)] =
              "PreviousUniverseId_Uint64"),
            (_[(_.DisplayFirmwareVersion_Uint64 = 2006)] =
              "DisplayFirmwareVersion_Uint64"),
            (_[(_.IsOnDesktop_Bool = 2007)] = "IsOnDesktop_Bool"),
            (_[(_.DisplayMCType_Int32 = 2008)] = "DisplayMCType_Int32"),
            (_[(_.DisplayMCOffset_Float = 2009)] = "DisplayMCOffset_Float"),
            (_[(_.DisplayMCScale_Float = 2010)] = "DisplayMCScale_Float"),
            (_[(_.EdidVendorID_Int32 = 2011)] = "EdidVendorID_Int32"),
            (_[(_.DisplayMCImageLeft_String = 2012)] =
              "DisplayMCImageLeft_String"),
            (_[(_.DisplayMCImageRight_String = 2013)] =
              "DisplayMCImageRight_String"),
            (_[(_.DisplayGCBlackClamp_Float = 2014)] =
              "DisplayGCBlackClamp_Float"),
            (_[(_.EdidProductID_Int32 = 2015)] = "EdidProductID_Int32"),
            (_[(_.CameraToHeadTransform_Matrix34 = 2016)] =
              "CameraToHeadTransform_Matrix34"),
            (_[(_.DisplayGCType_Int32 = 2017)] = "DisplayGCType_Int32"),
            (_[(_.DisplayGCOffset_Float = 2018)] = "DisplayGCOffset_Float"),
            (_[(_.DisplayGCScale_Float = 2019)] = "DisplayGCScale_Float"),
            (_[(_.DisplayGCPrescale_Float = 2020)] = "DisplayGCPrescale_Float"),
            (_[(_.DisplayGCImage_String = 2021)] = "DisplayGCImage_String"),
            (_[(_.LensCenterLeftU_Float = 2022)] = "LensCenterLeftU_Float"),
            (_[(_.LensCenterLeftV_Float = 2023)] = "LensCenterLeftV_Float"),
            (_[(_.LensCenterRightU_Float = 2024)] = "LensCenterRightU_Float"),
            (_[(_.LensCenterRightV_Float = 2025)] = "LensCenterRightV_Float"),
            (_[(_.UserHeadToEyeDepthMeters_Float = 2026)] =
              "UserHeadToEyeDepthMeters_Float"),
            (_[(_.CameraFirmwareVersion_Uint64 = 2027)] =
              "CameraFirmwareVersion_Uint64"),
            (_[(_.CameraFirmwareDescription_String = 2028)] =
              "CameraFirmwareDescription_String"),
            (_[(_.DisplayFPGAVersion_Uint64 = 2029)] =
              "DisplayFPGAVersion_Uint64"),
            (_[(_.DisplayBootloaderVersion_Uint64 = 2030)] =
              "DisplayBootloaderVersion_Uint64"),
            (_[(_.DisplayHardwareVersion_Uint64 = 2031)] =
              "DisplayHardwareVersion_Uint64"),
            (_[(_.AudioFirmwareVersion_Uint64 = 2032)] =
              "AudioFirmwareVersion_Uint64"),
            (_[(_.CameraCompatibilityMode_Int32 = 2033)] =
              "CameraCompatibilityMode_Int32"),
            (_[(_.ScreenshotHorizontalFieldOfViewDegrees_Float = 2034)] =
              "ScreenshotHorizontalFieldOfViewDegrees_Float"),
            (_[(_.ScreenshotVerticalFieldOfViewDegrees_Float = 2035)] =
              "ScreenshotVerticalFieldOfViewDegrees_Float"),
            (_[(_.DisplaySuppressed_Bool = 2036)] = "DisplaySuppressed_Bool"),
            (_[(_.DisplayAllowNightMode_Bool = 2037)] =
              "DisplayAllowNightMode_Bool"),
            (_[(_.DisplayMCImageWidth_Int32 = 2038)] =
              "DisplayMCImageWidth_Int32"),
            (_[(_.DisplayMCImageHeight_Int32 = 2039)] =
              "DisplayMCImageHeight_Int32"),
            (_[(_.DisplayMCImageNumChannels_Int32 = 2040)] =
              "DisplayMCImageNumChannels_Int32"),
            (_[(_.DisplayMCImageData_Binary = 2041)] =
              "DisplayMCImageData_Binary"),
            (_[(_.SecondsFromPhotonsToVblank_Float = 2042)] =
              "SecondsFromPhotonsToVblank_Float"),
            (_[(_.DriverDirectModeSendsVsyncEvents_Bool = 2043)] =
              "DriverDirectModeSendsVsyncEvents_Bool"),
            (_[(_.DisplayDebugMode_Bool = 2044)] = "DisplayDebugMode_Bool"),
            (_[(_.GraphicsAdapterLuid_Uint64 = 2045)] =
              "GraphicsAdapterLuid_Uint64"),
            (_[(_.DriverProvidedChaperonePath_String = 2048)] =
              "DriverProvidedChaperonePath_String"),
            (_[(_.ExpectedTrackingReferenceCount_Int32 = 2049)] =
              "ExpectedTrackingReferenceCount_Int32"),
            (_[(_.ExpectedControllerCount_Int32 = 2050)] =
              "ExpectedControllerCount_Int32"),
            (_[(_.NamedIconPathControllerLeftDeviceOff_String = 2051)] =
              "NamedIconPathControllerLeftDeviceOff_String"),
            (_[(_.NamedIconPathControllerRightDeviceOff_String = 2052)] =
              "NamedIconPathControllerRightDeviceOff_String"),
            (_[(_.NamedIconPathTrackingReferenceDeviceOff_String = 2053)] =
              "NamedIconPathTrackingReferenceDeviceOff_String"),
            (_[(_.DoNotApplyPrediction_Bool = 2054)] =
              "DoNotApplyPrediction_Bool"),
            (_[(_.CameraToHeadTransforms_Matrix34_Array = 2055)] =
              "CameraToHeadTransforms_Matrix34_Array"),
            (_[(_.DistortionMeshResolution_Int32 = 2056)] =
              "DistortionMeshResolution_Int32"),
            (_[(_.DriverIsDrawingControllers_Bool = 2057)] =
              "DriverIsDrawingControllers_Bool"),
            (_[(_.DriverRequestsApplicationPause_Bool = 2058)] =
              "DriverRequestsApplicationPause_Bool"),
            (_[(_.DriverRequestsReducedRendering_Bool = 2059)] =
              "DriverRequestsReducedRendering_Bool"),
            (_[(_.MinimumIpdStepMeters_Float = 2060)] =
              "MinimumIpdStepMeters_Float"),
            (_[(_.AudioBridgeFirmwareVersion_Uint64 = 2061)] =
              "AudioBridgeFirmwareVersion_Uint64"),
            (_[(_.ImageBridgeFirmwareVersion_Uint64 = 2062)] =
              "ImageBridgeFirmwareVersion_Uint64"),
            (_[(_.ImuToHeadTransform_Matrix34 = 2063)] =
              "ImuToHeadTransform_Matrix34"),
            (_[(_.ImuFactoryGyroBias_Vector3 = 2064)] =
              "ImuFactoryGyroBias_Vector3"),
            (_[(_.ImuFactoryGyroScale_Vector3 = 2065)] =
              "ImuFactoryGyroScale_Vector3"),
            (_[(_.ImuFactoryAccelerometerBias_Vector3 = 2066)] =
              "ImuFactoryAccelerometerBias_Vector3"),
            (_[(_.ImuFactoryAccelerometerScale_Vector3 = 2067)] =
              "ImuFactoryAccelerometerScale_Vector3"),
            (_[(_.ConfigurationIncludesLighthouse20Features_Bool = 2069)] =
              "ConfigurationIncludesLighthouse20Features_Bool"),
            (_[(_.Prop_AdditionalRadioFeatures_Uint64 = 2070)] =
              "Prop_AdditionalRadioFeatures_Uint64"),
            (_[(_.Prop_CameraWhiteBalance_Vector4_Array = 2071)] =
              "Prop_CameraWhiteBalance_Vector4_Array"),
            (_[(_.Prop_CameraDistortionFunction_Int32_Array = 2072)] =
              "Prop_CameraDistortionFunction_Int32_Array"),
            (_[(_.Prop_CameraDistortionCoefficients_Float_Array = 2073)] =
              "Prop_CameraDistortionCoefficients_Float_Array"),
            (_[(_.Prop_ExpectedControllerType_String = 2074)] =
              "Prop_ExpectedControllerType_String"),
            (_[(_.HmdTrackingStyle_Int32 = 2075)] = "HmdTrackingStyle_Int32"),
            (_[(_.DriverProvidedChaperoneVisibility_Bool = 2076)] =
              "DriverProvidedChaperoneVisibility_Bool"),
            (_[(_.HmdColumnCorrectionSettingPrefix_String = 2077)] =
              "HmdColumnCorrectionSettingPrefix_String"),
            (_[(_.CameraSupportsCompatibilityModes_Bool = 2078)] =
              "CameraSupportsCompatibilityModes_Bool"),
            (_[(_.SupportsRoomViewDepthProjection_Bool = 2079)] =
              "SupportsRoomViewDepthProjection_Bool"),
            (_[(_.DisplayAvailableFrameRates_Float_Array = 2080)] =
              "DisplayAvailableFrameRates_Float_Array"),
            (_[(_.DisplaySupportsRuntimeFramerateChange_Bool = 2084)] =
              "DisplaySupportsRuntimeFramerateChange_Bool"),
            (_[(_.DisplaySupportsAnalogGain_Bool = 2085)] =
              "DisplaySupportsAnalogGain_Bool"),
            (_[(_.DisplayMinAnalogGain_Float = 2086)] =
              "DisplayMinAnalogGain_Float"),
            (_[(_.DisplayMaxAnalogGain_Float = 2087)] =
              "DisplayMaxAnalogGain_Float"),
            (_[(_.DashboardLinkSupport_Int32 = 2097)] =
              "DashboardLinkSupport_Int32"),
            (_[(_.DisplayMinUIAnalogGain_Float = 2098)] =
              "DisplayMinUIAnalogGain_Float"),
            (_[(_.DashboardScale_Float = 2091)] = "DashboardScale_Float"),
            (_[(_.IpdUIRangeMinMeters_Float = 2100)] =
              "IpdUIRangeMinMeters_Float"),
            (_[(_.IpdUIRangeMaxMeters_Float = 2101)] =
              "IpdUIRangeMaxMeters_Float"),
            (_[(_.Hmd_SupportsHDCP14LegacyCompat_Bool = 2102)] =
              "Hmd_SupportsHDCP14LegacyCompat_Bool"),
            (_[(_.Hmd_SupportsMicMonitoring_Bool = 2103)] =
              "Hmd_SupportsMicMonitoring_Bool"),
            (_[(_.Hmd_SupportsDisplayPortTrainingMode_Bool = 2104)] =
              "Hmd_SupportsDisplayPortTrainingMode_Bool"),
            (_[(_.Hmd_SupportsRoomViewDirect_Bool = 2105)] =
              "Hmd_SupportsRoomViewDirect_Bool"),
            (_[(_.Hmd_SupportsAppThrottling_Bool = 2106)] =
              "Hmd_SupportsAppThrottling_Bool"),
            (_[(_.Hmd_SupportsGpuBusMonitoring_Bool = 2107)] =
              "Hmd_SupportsGpuBusMonitoring_Bool"),
            (_[(_.DriverProvidedIPDVisibility_Bool = 2108)] =
              "DriverProvidedIPDVisibility_Bool"),
            (_[(_.Prop_Hmd_SupportsVRGamepadFocus_Bool = 2117)] =
              "Prop_Hmd_SupportsVRGamepadFocus_Bool"),
            (_[(_.DriverRequestedMuraCorrectionMode_Int32 = 2200)] =
              "DriverRequestedMuraCorrectionMode_Int32"),
            (_[(_.DriverRequestedMuraFeather_InnerLeft_Int32 = 2201)] =
              "DriverRequestedMuraFeather_InnerLeft_Int32"),
            (_[(_.DriverRequestedMuraFeather_InnerRight_Int32 = 2202)] =
              "DriverRequestedMuraFeather_InnerRight_Int32"),
            (_[(_.DriverRequestedMuraFeather_InnerTop_Int32 = 2203)] =
              "DriverRequestedMuraFeather_InnerTop_Int32"),
            (_[(_.DriverRequestedMuraFeather_InnerBottom_Int32 = 2204)] =
              "DriverRequestedMuraFeather_InnerBottom_Int32"),
            (_[(_.DriverRequestedMuraFeather_OuterLeft_Int32 = 2205)] =
              "DriverRequestedMuraFeather_OuterLeft_Int32"),
            (_[(_.DriverRequestedMuraFeather_OuterRight_Int32 = 2206)] =
              "DriverRequestedMuraFeather_OuterRight_Int32"),
            (_[(_.DriverRequestedMuraFeather_OuterTop_Int32 = 2207)] =
              "DriverRequestedMuraFeather_OuterTop_Int32"),
            (_[(_.DriverRequestedMuraFeather_OuterBottom_Int32 = 2208)] =
              "DriverRequestedMuraFeather_OuterBottom_Int32"),
            (_[(_.Audio_SupportsDualSpeakerAndJackOutput_Bool = 2303)] =
              "Audio_SupportsDualSpeakerAndJackOutput_Bool"),
            (_[(_.AttachedDeviceId_String = 3e3)] = "AttachedDeviceId_String"),
            (_[(_.SupportedButtons_Uint64 = 3001)] = "SupportedButtons_Uint64"),
            (_[(_.Axis0Type_Int32 = 3002)] = "Axis0Type_Int32"),
            (_[(_.Axis1Type_Int32 = 3003)] = "Axis1Type_Int32"),
            (_[(_.Axis2Type_Int32 = 3004)] = "Axis2Type_Int32"),
            (_[(_.Axis3Type_Int32 = 3005)] = "Axis3Type_Int32"),
            (_[(_.Axis4Type_Int32 = 3006)] = "Axis4Type_Int32"),
            (_[(_.ControllerRoleHint_Int32 = 3007)] =
              "ControllerRoleHint_Int32"),
            (_[(_.FieldOfViewLeftDegrees_Float = 4e3)] =
              "FieldOfViewLeftDegrees_Float"),
            (_[(_.FieldOfViewRightDegrees_Float = 4001)] =
              "FieldOfViewRightDegrees_Float"),
            (_[(_.FieldOfViewTopDegrees_Float = 4002)] =
              "FieldOfViewTopDegrees_Float"),
            (_[(_.FieldOfViewBottomDegrees_Float = 4003)] =
              "FieldOfViewBottomDegrees_Float"),
            (_[(_.TrackingRangeMinimumMeters_Float = 4004)] =
              "TrackingRangeMinimumMeters_Float"),
            (_[(_.TrackingRangeMaximumMeters_Float = 4005)] =
              "TrackingRangeMaximumMeters_Float"),
            (_[(_.ModeLabel_String = 4006)] = "ModeLabel_String"),
            (_[(_.IconPathName_String = 5e3)] = "IconPathName_String"),
            (_[(_.NamedIconPathDeviceOff_String = 5001)] =
              "NamedIconPathDeviceOff_String"),
            (_[(_.NamedIconPathDeviceSearching_String = 5002)] =
              "NamedIconPathDeviceSearching_String"),
            (_[(_.NamedIconPathDeviceSearchingAlert_String = 5003)] =
              "NamedIconPathDeviceSearchingAlert_String"),
            (_[(_.NamedIconPathDeviceReady_String = 5004)] =
              "NamedIconPathDeviceReady_String"),
            (_[(_.NamedIconPathDeviceReadyAlert_String = 5005)] =
              "NamedIconPathDeviceReadyAlert_String"),
            (_[(_.NamedIconPathDeviceNotReady_String = 5006)] =
              "NamedIconPathDeviceNotReady_String"),
            (_[(_.NamedIconPathDeviceStandby_String = 5007)] =
              "NamedIconPathDeviceStandby_String"),
            (_[(_.NamedIconPathDeviceAlertLow_String = 5008)] =
              "NamedIconPathDeviceAlertLow_String"),
            (_[(_.DisplayHiddenArea_Binary_Start = 5100)] =
              "DisplayHiddenArea_Binary_Start"),
            (_[(_.DisplayHiddenArea_Binary_End = 5150)] =
              "DisplayHiddenArea_Binary_End"),
            (_[(_.ParentContainer = 5151)] = "ParentContainer"),
            (_[(_.UserConfigPath_String = 6e3)] = "UserConfigPath_String"),
            (_[(_.InstallPath_String = 6001)] = "InstallPath_String"),
            (_[(_.HasDisplayComponent_Bool = 6002)] =
              "HasDisplayComponent_Bool"),
            (_[(_.HasControllerComponent_Bool = 6003)] =
              "HasControllerComponent_Bool"),
            (_[(_.HasCameraComponent_Bool = 6004)] = "HasCameraComponent_Bool"),
            (_[(_.HasDriverDirectModeComponent_Bool = 6005)] =
              "HasDriverDirectModeComponent_Bool"),
            (_[(_.HasVirtualDisplayComponent_Bool = 6006)] =
              "HasVirtualDisplayComponent_Bool"),
            (_[(_.HasSpatialAnchorsSupport_Bool = 6007)] =
              "HasSpatialAnchorsSupport_Bool"),
            (_[(_.ControllerType_String = 7e3)] = "ControllerType_String"),
            (_[(_.LegacyInputProfile_String = 7001)] =
              "LegacyInputProfile_String"),
            (_[(_.VendorSpecific_Reserved_Start = 1e4)] =
              "VendorSpecific_Reserved_Start"),
            (_[(_.VendorSpecific_Reserved_End = 10999)] =
              "VendorSpecific_Reserved_End"),
            (_[(_.SupportsInHMDRoomSetup_Bool = 11003)] =
              "SupportsInHMDRoomSetup_Bool"),
            (_[(_.VRLinkClientHMDSupportsRoomSetupRequests_Bool = 11004)] =
              "VRLinkClientHMDSupportsRoomSetupRequests_Bool"),
            (_[(_.TrackedDeviceProperty_Max = 1e6)] =
              "TrackedDeviceProperty_Max");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.k_EButton_System = 0)] = "k_EButton_System"),
            (_[(_.k_EButton_ApplicationMenu = 1)] =
              "k_EButton_ApplicationMenu"),
            (_[(_.k_EButton_Grip = 2)] = "k_EButton_Grip"),
            (_[(_.k_EButton_DPad_Left = 3)] = "k_EButton_DPad_Left"),
            (_[(_.k_EButton_DPad_Up = 4)] = "k_EButton_DPad_Up"),
            (_[(_.k_EButton_DPad_Right = 5)] = "k_EButton_DPad_Right"),
            (_[(_.k_EButton_DPad_Down = 6)] = "k_EButton_DPad_Down"),
            (_[(_.k_EButton_A = 7)] = "k_EButton_A"),
            (_[(_.k_EButton_ProximitySensor = 31)] =
              "k_EButton_ProximitySensor"),
            (_[(_.k_EButton_Axis0 = 32)] = "k_EButton_Axis0"),
            (_[(_.k_EButton_Axis1 = 33)] = "k_EButton_Axis1"),
            (_[(_.k_EButton_Axis2 = 34)] = "k_EButton_Axis2"),
            (_[(_.k_EButton_Axis3 = 35)] = "k_EButton_Axis3"),
            (_[(_.k_EButton_Axis4 = 36)] = "k_EButton_Axis4"),
            (_[(_.k_EButton_SteamVR_Touchpad = 32)] =
              "k_EButton_SteamVR_Touchpad"),
            (_[(_.k_EButton_SteamVR_Trigger = 33)] =
              "k_EButton_SteamVR_Trigger"),
            (_[(_.k_EButton_Dashboard_Back = 2)] = "k_EButton_Dashboard_Back"),
            (_[(_.k_EButton_IndexController_A = 2)] =
              "k_EButton_IndexController_A"),
            (_[(_.k_EButton_IndexController_B = 1)] =
              "k_EButton_IndexController_B"),
            (_[(_.k_EButton_IndexController_JoyStick = 35)] =
              "k_EButton_IndexController_JoyStick"),
            (_[(_.k_EButton_Reserved0 = 50)] = "k_EButton_Reserved0"),
            (_[(_.k_EButton_Reserved1 = 51)] = "k_EButton_Reserved1"),
            (_[(_.k_EButton_Max = 64)] = "k_EButton_Max");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.None = 0)] = "None"),
            (_[(_.ButtonEnter = 1)] = "ButtonEnter"),
            (_[(_.ButtonLeave = 2)] = "ButtonLeave"),
            (_[(_.Snap = 3)] = "Snap"),
            (_[(_.Sliding = 4)] = "Sliding"),
            (_[(_.SlidingEdge = 5)] = "SlidingEdge");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Minimal = 1)] = "Minimal"),
            (_[(_.Modal = 2)] = "Modal"),
            (_[(_.ShowArrowKeys = 4)] = "ShowArrowKeys"),
            (_[(_.HideDoneKey = 8)] = "HideDoneKey");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Unknown = -1)] = "Unknown"),
            (_[(_.Idle = 0)] = "Idle"),
            (_[(_.UserInteraction = 1)] = "UserInteraction"),
            (_[(_.UserInteraction_Timeout = 2)] = "UserInteraction_Timeout"),
            (_[(_.Standby = 3)] = "Standby"),
            (_[(_.Idle_Timeout = 4)] = "Idle_Timeout");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Notification_Shown = 600)] = "Notification_Shown"),
            (_[(_.Notification_Hidden = 601)] = "Notification_Hidden"),
            (_[(_.Notification_BeginInteraction = 602)] =
              "Notification_BeginInteraction"),
            (_[(_.Notification_Destroyed = 603)] = "Notification_Destroyed");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.TheaterFast = 0)] = "TheaterFast"),
            (_[(_.TheaterSlow = 1)] = "TheaterSlow");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Constant = 0)] = "Constant"),
            (_[(_.Nearest = 1)] = "Nearest"),
            (_[(_.Linear = 2)] = "Linear"),
            (_[(_.SmoothStep = 3)] = "SmoothStep"),
            (_[(_.SmootherStep = 4)] = "SmootherStep");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Invalid = 0)] = "Invalid"),
            (_[(_.RecenterCountdown = 1)] = "RecenterCountdown"),
            (_[(_.FloorAdjustExisting = 2)] = "FloorAdjustExisting"),
            (_[(_.RoomSetupFloor = 3)] = "RoomSetupFloor"),
            (_[(_.ClearRoomSetup = 4)] = "ClearRoomSetup"),
            (_[(_.RoomSetupFull = 5)] = "RoomSetupFull");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Near = 0)] = "Near"),
            (_[(_.Middle = 1)] = "Middle"),
            (_[(_.Far = 2)] = "Far"),
            (_[(_.VRGamepadUI = 3)] = "VRGamepadUI");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.__LocalSteamVR = 0)] = "__LocalSteamVR"),
            (_[(_.__LocalSteam = 1)] = "__LocalSteam"),
            (_[(_.__RemoteSteamVR = 2)] = "__RemoteSteamVR"),
            (_[(_.__RemoteSteam = 3)] = "__RemoteSteam"),
            (_[(_.MutualLocal = 4)] = "MutualLocal"),
            (_[(_.MutualSteamVR = 5)] = "MutualSteamVR"),
            (_[(_.MutualSteam = 6)] = "MutualSteam");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Dashboard = 1)] = "Dashboard"),
            (_[(_.LeftHand = 2)] = "LeftHand"),
            (_[(_.RightHand = 3)] = "RightHand"),
            (_[(_.World = 4)] = "World"),
            (_[(_.Theater = 5)] = "Theater"),
            (_[(_.Boot = 6)] = "Boot");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Invalid = 0)] = "Invalid"),
            (_[(_.System = 1)] = "System"),
            (_[(_.SteamInput = 2)] = "SteamInput"),
            (_[(_.VRInput = 3)] = "VRInput");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.None = 0)] = "None"),
            (_[(_.ThirdPartyClient = 1)] = "ThirdPartyClient"),
            (_[(_.SteamVRClientUnified = 2)] = "SteamVRClientUnified"),
            (_[(_.SteamVRClientLegacyDual = 3)] = "SteamVRClientLegacyDual");
        })(_ || (_ = {}));
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      let _ = 0;
      function _() {
        const _ = _.useRef(void 0);
        return (
          void 0 === _.current && (_.current = "svgid_" + _++),
          [_.current, `url(#${_.current})`]
        );
      }
    },
  },
]);
