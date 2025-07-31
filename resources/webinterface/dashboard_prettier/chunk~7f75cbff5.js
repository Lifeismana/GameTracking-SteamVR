var CLSTAMP = "9941881";
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
    4189: (e, t, s) => {
      var i = s(1635),
        a = s(3496),
        n = s(3236);
      class r extends a._J {
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
      (0, i.Cg)([n.o], r.prototype, "buildNode", null);
    },
    5227: (e, t, s) => {
      s.d(t, { N: () => n });
      var i = s(6540),
        a = s(3496);
      class n extends a._J {
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
    1808: (e, t, s) => {
      s.d(t, { C: () => d });
      var i = s(1635),
        a = s(3496),
        n = s(7019),
        r = s(3236);
      class d extends a._J {
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
          let s = null;
          "object" == typeof this.props.location
            ? (s = (0, a.PG)(this.props.location, { x: 0, y: 0 }))
            : "number" == typeof this.props.location &&
              (s = (0, n.Lr)(this.props.location));
          let i = this.createSgNode(t);
          if (this.props.latched && null !== this.m_latchedPosition)
            (i.properties["anchor-u"] = this.m_latchedPosition.u),
              (i.properties["anchor-v"] = this.m_latchedPosition.v);
          else if (s) {
            const t = { u: 0.5 * s.x + 0.5, v: -0.5 * s.y + 0.5 },
              a =
                !e.currentPanel || e.currentPanel.props.overlay_key
                  ? t
                  : e.currentPanel.scaleLocalUVToGlobal(t);
            (i.properties["anchor-u"] = a.u), (i.properties["anchor-v"] = a.v);
          } else {
            if (!e.currentPanel)
              return [
                Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                null,
              ];
            const s = t.ownerDocument,
              a = t.getBoundingClientRect(),
              n = a.left + a.width / 2,
              r = a.top + a.height / 2,
              d = e.currentPanel.m_Rect;
            if (n < d.x || n > d.x + d.width || r < d.y || r > d.y + d.height)
              return [
                Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                null,
              ];
            const o = s.defaultView.innerWidth,
              m = s.defaultView.innerHeight;
            if (!(m > 0 && o > 0))
              return [
                Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                null,
              ];
            (i.properties["anchor-u"] = n / o),
              (i.properties["anchor-v"] = r / m);
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
      (0, i.Cg)([r.o], d.prototype, "buildNode", null);
    },
    5178: (e, t, s) => {
      s.d(t, { O: () => m });
      var i,
        a = s(1635),
        n = s(6540),
        r = s(7019),
        d = s(3236),
        o = s(5723);
      !(function (e) {
        (e[(e.Canvas = 0)] = "Canvas"), (e[(e.Image = 1)] = "Image");
      })(i || (i = {}));
      class m extends n.Component {
        static get IsSceneGraphApp() {
          return null !== m.Current();
        }
        static Current() {
          return m.s_Current;
        }
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
            (m.s_Current = this),
            (this.state = {
              bFontsLoaded: !1,
              nForcedUpdateNumber: 0,
              bShowDebugPointer: !1,
              eRenderMode: VRHTML.VRUtil.BSupportsCEFCanvas()
                ? i.Canvas
                : i.Image,
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
          (r.Zk.s_bPanelsAreDirty = !0),
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
              (0, o.Oe)(
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
          let s = [];
          return (
            this.state.bShowDebugPointer && s.push("ShowDebugPointer"),
            n.createElement(
              "vsg-app",
              {
                class: s.join(" "),
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
                  height: m.k_EmbeddedDataRows,
                }),
              t &&
                n.createElement("canvas", {
                  ref: this.m_CanvasRef,
                  className: "EmbeddedData",
                  height: m.k_EmbeddedDataRows,
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
          this.state.eRenderMode == i.Image
            ? ((this.m_EmbeddedDataImgRef.current.width =
                this.m_nEmbeddedDataWidth),
              this.m_EmbeddedDataImgRGBBuffer ||
                (this.m_EmbeddedDataImgRGBBuffer =
                  VRHTML.VRUtil.CreateEmbeddedRGBScanline(
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
                  m.k_EmbeddedDataRows,
                ))),
            this.updateAllPanelBounds();
        }
        updateAllPanelBounds() {
          let e = this.m_DomRef.current.ownerDocument.defaultView,
            t = this.m_scalingDomRef.current.getBoundingClientRect(),
            s = t.width / this.m_fCurrentScale,
            i = t.height / this.m_fCurrentScale,
            a = { x: e.innerWidth / s, y: e.innerHeight / i },
            n = Math.min(a.x, a.y, 1);
          n != this.m_fCurrentScale &&
            (1 != n
              ? this.m_scalingDomRef.current.setAttribute(
                  "style",
                  "transform: scale(" + n + "); transform-origin: top left",
                )
              : this.m_scalingDomRef.current.removeAttribute("style"),
            (this.m_fCurrentScale = n),
            (r.Zk.s_bPanelsAreDirty = !0)),
            r.Zk.s_bPanelsAreDirty &&
              (this.m_mapPanels.forEach((e) => e.updateLayoutValues()),
              (0, o.my)(),
              (r.Zk.s_bPanelsAreDirty = !1),
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
                let s = e.m_Rect.x,
                  i = e.m_Rect.x + e.m_Rect.width,
                  a = e.m_Rect.y,
                  n = e.m_Rect.y + e.m_Rect.height,
                  r = 1 + 3 * e.getEmbeddedIndex();
                if (e.isExternal() || s >= i || a >= n)
                  for (let e = 0; e < 3; e++) this.setPixel(r + 1, 0, 0, 0, 0);
                else
                  this.setPixel(r, (65280 & s) >> 8, 255 & s, 0),
                    this.setPixel(r + 1, (65280 & i) >> 8, 255 & i, 255 & a),
                    this.setPixel(
                      r + 2,
                      (65280 & n) >> 8,
                      255 & n,
                      (65280 & a) >> 8,
                    );
              }),
              this.m_EmbeddedDataImgRef && this.state.eRenderMode == i.Image)
            ) {
              const e = VRHTML.VRUtil.GetEmbeddedScanlineAsURIImage(
                this.m_nEmbeddedDataWidth,
                1,
                4,
              );
              this.m_EmbeddedDataImgRef.current.src = e;
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
        setPixel(e, t, s, a, n = 255) {
          if (
            this.m_EmbeddedDataImgRGBBuffer &&
            this.state.eRenderMode == i.Image
          ) {
            const i = new DataView(this.m_EmbeddedDataImgRGBBuffer);
            i.setUint8(4 * e + 0, t),
              i.setUint8(4 * e + 1, s),
              i.setUint8(4 * e + 2, a),
              i.setUint8(4 * e + 3, n);
          } else
            this.m_Pixels &&
              this.state.eRenderMode == i.Canvas &&
              ((this.m_Pixels.data[4 * e + 0] = t),
              (this.m_Pixels.data[4 * e + 1] = s),
              (this.m_Pixels.data[4 * e + 2] = a),
              (this.m_Pixels.data[4 * e + 3] = n),
              (-1 === this.m_nDirtyXMin || e < this.m_nDirtyXMin) &&
                (this.m_nDirtyXMin = e),
              (-1 === this.m_nDirtyXMax || e > this.m_nDirtyXMax) &&
                (this.m_nDirtyXMax = e));
        }
      }
      (m.s_Current = null),
        (m.k_EmbeddedDataRows = 1),
        (0, a.Cg)([d.o], m.prototype, "toggleDebugPointer", null),
        (0, a.Cg)([d.o], m.prototype, "onMouseMove", null),
        (0, a.Cg)([d.o], m.prototype, "forceLayoutUpdate", null),
        (0, a.Cg)([d.o], m.prototype, "onMutation", null);
    },
  },
]); //# sourceMappingURL=file:///c:/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~7f75cbff5.js.map
