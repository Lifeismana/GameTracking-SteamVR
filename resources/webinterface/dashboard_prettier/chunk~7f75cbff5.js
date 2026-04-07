var CLSTAMP = "10579910";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [797],
  {
    1977: (e, t, s) => {
      s(6540);
      var i = s(3496);
      i._J;
    },
    322: (e, t, s) => {
      var i = s(6540);
      s(4367), s(3361);
      i.Component;
    },
    1184: (e, t, s) => {
      var i,
        r = s(1635),
        o = s(3496),
        a = s(3236);
      !(function (e) {
        (e[(e.Disabled = 0)] = "Disabled"),
          (e[(e.WorldZeroY = 1)] = "WorldZeroY"),
          (e[(e.WorldDynamicFloor = 2)] = "WorldDynamicFloor");
      })(i || (i = {}));
      class n extends o._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "constraint";
        }
        buildNode(e, t) {
          const s = this.createSgNode(t);
          return (
            (s.properties["projection-constraint"] =
              this.props.projection_constraint),
            [e, s]
          );
        }
      }
      (0, r.Cg)([a.o], n.prototype, "buildNode", null);
    },
    4120: (e, t, s) => {
      var i,
        r = s(1635),
        o = s(3496),
        a = s(3236);
      !(function (e) {
        (e[(e.RoomSetupFloor = 1)] = "RoomSetupFloor"),
          (e[(e.Locomotion = 2)] = "Locomotion"),
          (e[(e.QuickRecenter = 4)] = "QuickRecenter");
      })(i || (i = {}));
      class n extends o._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "constructglobals";
        }
        buildNode(e, t) {
          const s = this.createSgNode(t);
          return (
            (s.properties["scene-color-mult"] = (0, o.kJ)(
              this.props["scene-color-mult"],
            )),
            (s.properties["floor-color-mult"] = (0, o.kJ)(
              this.props["floor-color-mult"],
            )),
            (s.properties["scene-reflection-mult"] = (0, o.kJ)(
              this.props["scene-reflection-mult"],
            )),
            (s.properties["skydome-mult"] = (0, o.kJ)(
              this.props["skydome-mult"],
            )),
            (s.properties["roomview-mult"] = (0, o.UM)(
              this.props["roomview-mult"],
            )),
            (s.properties["allowed-action-sets"] = this.props[
              "allowed-action-sets"
            ].reduce((e, t) => e | t, 0)),
            (s.properties["inhibit-bounds-rendering"] =
              this.props["inhibit-bounds-rendering"]),
            (s.properties["pause-notifications"] =
              this.props["pause-notifications"]),
            (s.properties["roomview-enable-override"] =
              this.props["roomview-enable-override"]),
            (s.properties["systemlayer-msaa-enable-override"] =
              this.props["systemlayer-msaa-enable-override"]),
            (s.properties["construct-alpha-override"] =
              this.props["construct-alpha-override"]),
            [e, s]
          );
        }
      }
      (0, r.Cg)([a.o], n.prototype, "buildNode", null);
    },
    4189: (e, t, s) => {
      var i = s(1635),
        r = s(3496),
        o = s(3236);
      class a extends r._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "head-facing-transform";
        }
        buildNode(e, t) {
          var s;
          const i = this.createSgNode(t);
          return (
            (i.properties.up =
              null !== (s = this.props.up) && void 0 !== s ? s : "world"),
            [e, i]
          );
        }
      }
      (0, i.Cg)([o.o], a.prototype, "buildNode", null);
    },
    10: (e, t, s) => {
      s(6540);
      var i = s(3496);
      i._J;
    },
    5178: (e, t, s) => {
      s.d(t, { O: () => m });
      var i = s(1635),
        r = s(6540),
        o = s(7019),
        a = s(3236),
        n = s(5723);
      const d = new (s(776).wd)("EmbeddedPixels");
      var l;
      !(function (e) {
        (e[(e.Canvas = 0)] = "Canvas"), (e[(e.Image = 1)] = "Image");
      })(l || (l = {}));
      class m extends r.Component {
        static get IsSceneGraphApp() {
          return null !== m.Current();
        }
        static Current() {
          return m.s_Current;
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
            (m.s_Current = this),
            (this.state = {
              bFontsLoaded: !1,
              nForcedUpdateNumber: 0,
              bShowDebugPointer: !1,
              eRenderMode: (
                null === (t = VRHTML.VRUtil) || void 0 === t
                  ? void 0
                  : t.BSupportsCEFCanvas()
              )
                ? l.Canvas
                : l.Image,
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
          let s = Math.max(0, Math.floor((this.m_nEmbeddedDataWidth - 1) / 3));
          for (let e = 0; e < s; e++)
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
              (0, n.Oe)(
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
          const e = this.state.eRenderMode == l.Image,
            t = this.state.eRenderMode == l.Canvas;
          let s = [];
          return (
            this.state.bShowDebugPointer && s.push("ShowDebugPointer"),
            r.createElement(
              "vsg-app",
              {
                class: s.join(" "),
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
                  height: m.k_EmbeddedDataRows,
                }),
              t &&
                r.createElement("canvas", {
                  ref: this.m_CanvasRef,
                  className: "EmbeddedData",
                  height: m.k_EmbeddedDataRows,
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
          this.state.eRenderMode == l.Image
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
            : this.state.eRenderMode == l.Canvas &&
              ((this.m_CanvasRef.current.width = this.m_nEmbeddedDataWidth),
              (this.m_CanvasContext =
                this.m_CanvasRef.current.getContext("2d")),
              (this.m_CanvasContext.globalCompositeOperation = "copy"),
              (this.m_CanvasContext.imageSmoothingEnabled = !1),
              null === this.m_Pixels &&
                (this.m_Pixels = this.m_CanvasContext.createImageData(
                  this.m_nEmbeddedDataWidth,
                  m.k_EmbeddedDataRows,
                ))),
            this.updateAllPanelBounds();
        }
        updateAllPanelBounds() {
          let e = this.m_DomRef.current.ownerDocument.defaultView,
            t = this.m_scalingDomRef.current.getBoundingClientRect(),
            s = t.width / this.m_fCurrentScale,
            i = t.height / this.m_fCurrentScale,
            r = { x: e.innerWidth / s, y: e.innerHeight / i },
            a = Math.min(r.x, r.y, 1);
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
              (0, n.my)(),
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
              d.Debug("UPDATE EMBEDDED DATA ------------------"),
              this.m_mapPanels.forEach((e, t) => {
                const s = e.m_Rect.x,
                  i = e.m_Rect.x + e.m_Rect.width,
                  r = e.m_Rect.y,
                  o = e.m_Rect.y + e.m_Rect.height,
                  a = e.getEmbeddedIndex(),
                  n = 1 + 3 * a;
                let l = [0, 0, 0, 0, 0, 0, 0, 0, 0],
                  m = !1;
                if (e.isExternal() || s >= i || r >= o)
                  for (let e = 0; e < 3; e++) this.setPixel(n + 1, 0, 0, 0, 0);
                else
                  (m = !0),
                    (l[0] = (65280 & s) >> 8),
                    (l[1] = 255 & s),
                    (l[2] = 254),
                    (l[3] = (65280 & i) >> 8),
                    (l[4] = 255 & i),
                    (l[5] = 255 & r),
                    (l[6] = (65280 & o) >> 8),
                    (l[7] = 255 & o),
                    (l[8] = (65280 & r) >> 8),
                    this.setPixel(n, l[0], l[1], l[2]),
                    this.setPixel(n + 1, l[3], l[4], l[5]),
                    this.setPixel(n + 2, l[6], l[7], l[8]);
                d.Debug(
                  "panel",
                  m ? "" : "XX",
                  e.props.debug_name,
                  "uvs",
                  s,
                  r,
                  i,
                  o,
                  "nPixelOffset",
                  n,
                  "emIdx",
                  a,
                  l,
                  e.getCurrentRootElement(),
                );
              }),
              this.m_EmbeddedDataImgRef && this.state.eRenderMode == l.Image)
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
            } else if (this.m_CanvasRef && this.state.eRenderMode == l.Canvas) {
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
        setPixel(e, t, s, i, r = 255) {
          if (
            this.m_EmbeddedDataImgRGBBuffer &&
            this.state.eRenderMode == l.Image
          ) {
            const o = new DataView(this.m_EmbeddedDataImgRGBBuffer);
            o.setUint8(4 * e + 0, t),
              o.setUint8(4 * e + 1, s),
              o.setUint8(4 * e + 2, i),
              o.setUint8(4 * e + 3, r);
          } else
            this.m_Pixels &&
              this.state.eRenderMode == l.Canvas &&
              ((this.m_Pixels.data[4 * e + 0] = t),
              (this.m_Pixels.data[4 * e + 1] = s),
              (this.m_Pixels.data[4 * e + 2] = i),
              (this.m_Pixels.data[4 * e + 3] = r),
              (-1 === this.m_nDirtyXMin || e < this.m_nDirtyXMin) &&
                (this.m_nDirtyXMin = e),
              (-1 === this.m_nDirtyXMax || e > this.m_nDirtyXMax) &&
                (this.m_nDirtyXMax = e));
        }
      }
      (m.s_Current = null),
        (m.k_EmbeddedDataRows = 1),
        (0, i.Cg)([a.o], m.prototype, "toggleDebugPointer", null),
        (0, i.Cg)([a.o], m.prototype, "onMouseMove", null),
        (0, i.Cg)([a.o], m.prototype, "forceLayoutUpdate", null),
        (0, i.Cg)([a.o], m.prototype, "onMutation", null);
    },
    9011: (e, t, s) => {
      var i = s(1635),
        r = s(3496),
        o = s(3236);
      class a extends r._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "tilefloor";
        }
        buildNode(e, t) {
          var s, i, o, a, n, d, l;
          const m = this.createSgNode(t);
          if (
            ((m.properties["tile-size"] = this.props["tile-size"]),
            (m.properties["tile-gap"] = this.props["tile-gap"]),
            (m.properties["inner-radius"] = this.props["inner-radius"]),
            (m.properties["outer-radius"] = this.props["outer-radius"]),
            (m.properties["fade-distance"] =
              null === (s = this.props) || void 0 === s
                ? void 0
                : s["fade-distance"]),
            (m.properties["min-tile-scale-at-periphery"] =
              this.props["min-tile-scale-at-periphery"]),
            (m.properties.height = (0, r.kJ)(this.props.height)),
            (m.properties.offset = [
              null === (i = this.props.offset) || void 0 === i ? void 0 : i.x,
              null === (o = this.props.offset) || void 0 === o ? void 0 : o.y,
            ]),
            "string" == typeof this.props.color)
          )
            m.properties.color = this.props.color;
          else if (this.props.color) {
            let e = (0, r.RH)(this.props.color, { r: 0, g: 0, b: 0 });
            m.properties.color = [e.r, e.g, e.b];
          }
          return (
            (m.properties["center-randomization"] =
              null == this ? void 0 : this.props["center-randomization"]),
            this.props["luma-randomization"] &&
              ((m.properties["luma-randomization-min-gain"] =
                this.props["luma-randomization"]["min-gain"]),
              (m.properties["luma-randomization-max-gain"] =
                this.props["luma-randomization"]["max-gain"])),
            this.props["reflection-randomization"] &&
              ((m.properties["reflection-randomization-min-gain"] =
                this.props["reflection-randomization"]["min-gain"]),
              (m.properties["reflection-randomization-max-gain"] =
                this.props["reflection-randomization"]["max-gain"])),
            (m.properties["normal-randomization-degrees"] =
              null === (a = this.props) || void 0 === a
                ? void 0
                : a["normal-randomization-degrees"]),
            this.props.chevron &&
              ((m.properties["chevron-luma-scale"] =
                this.props.chevron["luma-scale"]),
              (m.properties["chevron-reflection-scale"] =
                this.props.chevron["reflection-scale"])),
            (m.properties["auto-subdivide"] =
              null === (n = this.props) || void 0 === n
                ? void 0
                : n["auto-subdivide"]),
            (m.properties["pedestal-height"] = (0, r.kJ)(
              this.props["pedestal-height"],
            )),
            (m.properties["pedestal-radius"] = (0, r.kJ)(
              this.props["pedestal-radius"],
            )),
            (m.properties["floor-aa-shader"] =
              null === (d = this.props) || void 0 === d
                ? void 0
                : d["floor-aa-shader"]),
            (m.properties["stable-fade"] =
              null === (l = this.props) || void 0 === l
                ? void 0
                : l["stable-fade"]),
            [e, m]
          );
        }
      }
      (0, i.Cg)([o.o], a.prototype, "buildNode", null);
    },
    111: (e, t, s) => {
      s(6540);
      var i = s(3496);
      i._J;
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~7f75cbff5.js.map
