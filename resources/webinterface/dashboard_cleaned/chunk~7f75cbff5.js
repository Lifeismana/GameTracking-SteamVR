var CLSTAMP = "steamdb";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [797],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__("chunkid");
      var _ = __webpack_require__("chunkid");
      _._;
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      var _ = __webpack_require__("chunkid");
      __webpack_require__("chunkid"), __webpack_require__("chunkid");
      _.Component;
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      var _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      !(function (_) {
        (_[(_.Disabled = 0)] = "Disabled"),
          (_[(_.WorldZeroY = 1)] = "WorldZeroY"),
          (_[(_.WorldDynamicFloor = 2)] = "WorldDynamicFloor");
      })(_ || (_ = {}));
      class _ extends _._ {
        constructor(_) {
          super(_), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "constraint";
        }
        buildNode(_, _) {
          const _ = this.createSgNode(_);
          return (
            (_.properties["projection-constraint"] =
              this.props.projection_constraint),
            [_, _]
          );
        }
      }
      (0, _._)([_._], _.prototype, "buildNode", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      var _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      !(function (_) {
        (_[(_.RoomSetupFloor = 1)] = "RoomSetupFloor"),
          (_[(_.Locomotion = 2)] = "Locomotion"),
          (_[(_.QuickRecenter = 4)] = "QuickRecenter");
      })(_ || (_ = {}));
      class _ extends _._ {
        constructor(_) {
          super(_), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "constructglobals";
        }
        buildNode(_, _) {
          const _ = this.createSgNode(_);
          return (
            (_.properties["scene-color-mult"] = (0, _._)(
              this.props["scene-color-mult"],
            )),
            (_.properties["floor-color-mult"] = (0, _._)(
              this.props["floor-color-mult"],
            )),
            (_.properties["scene-reflection-mult"] = (0, _._)(
              this.props["scene-reflection-mult"],
            )),
            (_.properties["skydome-mult"] = (0, _._)(
              this.props["skydome-mult"],
            )),
            (_.properties["roomview-mult"] = (0, _._)(
              this.props["roomview-mult"],
            )),
            (_.properties["allowed-action-sets"] = this.props[
              "allowed-action-sets"
            ].reduce((_, _) => _ | _, 0)),
            (_.properties["inhibit-bounds-rendering"] =
              this.props["inhibit-bounds-rendering"]),
            (_.properties["pause-notifications"] =
              this.props["pause-notifications"]),
            (_.properties["roomview-enable-override"] =
              this.props["roomview-enable-override"]),
            (_.properties["systemlayer-msaa-enable-override"] =
              this.props["systemlayer-msaa-enable-override"]),
            (_.properties["construct-alpha-override"] =
              this.props["construct-alpha-override"]),
            [_, _]
          );
        }
      }
      (0, _._)([_._], _.prototype, "buildNode", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _._ {
        constructor(_) {
          super(_), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "head-facing-transform";
        }
        buildNode(_, _) {
          var _;
          const _ = this.createSgNode(_);
          return (
            (_.properties._ =
              null !== (_ = this.props._) && void 0 !== _ ? _ : "world"),
            [_, _]
          );
        }
      }
      (0, _._)([_._], _.prototype, "buildNode", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__("chunkid");
      var _ = __webpack_require__("chunkid");
      _._;
    },
    chunkid: (module, module_exports, __webpack_require__) => {
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
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _._ {
        constructor(_) {
          super(_), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "tilefloor";
        }
        buildNode(_, _) {
          var _, _, _, _, _, _, _;
          const _ = this.createSgNode(_);
          if (
            ((_.properties["tile-size"] = this.props["tile-size"]),
            (_.properties["tile-gap"] = this.props["tile-gap"]),
            (_.properties["inner-radius"] = this.props["inner-radius"]),
            (_.properties["outer-radius"] = this.props["outer-radius"]),
            (_.properties["fade-distance"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _["fade-distance"]),
            (_.properties["min-tile-scale-at-periphery"] =
              this.props["min-tile-scale-at-periphery"]),
            (_.properties.height = (0, _._)(this.props.height)),
            (_.properties.offset = [
              null === (_ = this.props.offset) || void 0 === _ ? void 0 : _._,
              null === (_ = this.props.offset) || void 0 === _ ? void 0 : _._,
            ]),
            "string" == typeof this.props.color)
          )
            _.properties.color = this.props.color;
          else if (this.props.color) {
            let _ = (0, _._)(this.props.color, {
              _: 0,
              _: 0,
              _: 0,
            });
            _.properties.color = [_._, _._, _._];
          }
          return (
            (_.properties["center-randomization"] =
              null == this ? void 0 : this.props["center-randomization"]),
            this.props["luma-randomization"] &&
              ((_.properties["luma-randomization-min-gain"] =
                this.props["luma-randomization"]["min-gain"]),
              (_.properties["luma-randomization-max-gain"] =
                this.props["luma-randomization"]["max-gain"])),
            this.props["reflection-randomization"] &&
              ((_.properties["reflection-randomization-min-gain"] =
                this.props["reflection-randomization"]["min-gain"]),
              (_.properties["reflection-randomization-max-gain"] =
                this.props["reflection-randomization"]["max-gain"])),
            (_.properties["normal-randomization-degrees"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _["normal-randomization-degrees"]),
            this.props.chevron &&
              ((_.properties["chevron-luma-scale"] =
                this.props.chevron["luma-scale"]),
              (_.properties["chevron-reflection-scale"] =
                this.props.chevron["reflection-scale"])),
            (_.properties["auto-subdivide"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _["auto-subdivide"]),
            (_.properties["pedestal-height"] = (0, _._)(
              this.props["pedestal-height"],
            )),
            (_.properties["pedestal-radius"] = (0, _._)(
              this.props["pedestal-radius"],
            )),
            (_.properties["floor-aa-shader"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _["floor-aa-shader"]),
            (_.properties["stable-fade"] =
              null === (_ = this.props) || void 0 === _
                ? void 0
                : _["stable-fade"]),
            [_, _]
          );
        }
      }
      (0, _._)([_._], _.prototype, "buildNode", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__("chunkid");
      var _ = __webpack_require__("chunkid");
      _._;
    },
  },
]);
