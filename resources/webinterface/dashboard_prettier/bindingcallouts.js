var CLSTAMP = "10050451";
(() => {
  "use strict";
  var e,
    t = {
      6035: (e, t, n) => {
        n.d(t, { P: () => p });
        var i,
          s,
          o = n(6540),
          a = n(3815),
          r = n(4452),
          l = "function" == typeof Symbol && Symbol.for,
          u =
            null !==
              (s =
                null ===
                  (i = Object.getOwnPropertyDescriptor(
                    function () {},
                    "name",
                  )) || void 0 === i
                  ? void 0
                  : i.configurable) &&
            void 0 !== s &&
            s,
          c = l
            ? Symbol.for("react.forward_ref")
            : "function" == typeof o.forwardRef &&
              (0, o.forwardRef)(function (e) {
                return null;
              }).$$typeof,
          d = l
            ? Symbol.for("react.memo")
            : "function" == typeof o.memo &&
              (0, o.memo)(function (e) {
                return null;
              }).$$typeof;
        function p(e, t) {
          var n;
          if (d && e.$$typeof === d)
            throw new Error(
              "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
            );
          if ((0, a.P)()) return e;
          var i =
              null !== (n = null == t ? void 0 : t.forwardRef) &&
              void 0 !== n &&
              n,
            s = e,
            l = e.displayName || e.name;
          if (
            c &&
            e.$$typeof === c &&
            ((i = !0), "function" != typeof (s = e.render))
          )
            throw new Error(
              "[mobx-react-lite] `render` property of ForwardRef was not a function",
            );
          var p,
            m,
            _ = function (e, t) {
              return (0, r.q)(function () {
                return s(e, t);
              }, l);
            };
          return (
            (_.displayName = e.displayName),
            u &&
              Object.defineProperty(_, "name", {
                value: e.name,
                writable: !0,
                configurable: !0,
              }),
            e.contextTypes && (_.contextTypes = e.contextTypes),
            i && (_ = (0, o.forwardRef)(_)),
            (_ = (0, o.memo)(_)),
            (p = e),
            (m = _),
            Object.keys(p).forEach(function (e) {
              h[e] ||
                Object.defineProperty(
                  m,
                  e,
                  Object.getOwnPropertyDescriptor(p, e),
                );
            }),
            _
          );
        }
        var h = {
          $$typeof: !0,
          render: !0,
          compare: !0,
          type: !0,
          displayName: !0,
        };
      },
      4452: (e, t, n) => {
        n.d(t, { q: () => c });
        var i = n(7813),
          s = n(6540),
          o = n(6356),
          a = n(3815),
          r = n(7380),
          l = n(9888);
        function u(e) {
          e.reaction = new i.Reaction("observer".concat(e.name), function () {
            var t;
            (e.stateVersion = Symbol()),
              null === (t = e.onStoreChange) || void 0 === t || t.call(e);
          });
        }
        function c(e, t) {
          if ((void 0 === t && (t = "observed"), (0, a.P)())) return e();
          var n = s.useRef(null);
          if (!n.current) {
            var i = {
              reaction: null,
              onStoreChange: null,
              stateVersion: Symbol(),
              name: t,
              subscribe: function (e) {
                return (
                  r.Y.unregister(i),
                  (i.onStoreChange = e),
                  i.reaction || (u(i), (i.stateVersion = Symbol())),
                  function () {
                    var e;
                    (i.onStoreChange = null),
                      null === (e = i.reaction) || void 0 === e || e.dispose(),
                      (i.reaction = null);
                  }
                );
              },
              getSnapshot: function () {
                return i.stateVersion;
              },
            };
            n.current = i;
          }
          var c,
            d,
            p = n.current;
          if (
            (p.reaction || (u(p), r.Y.register(n, p, p)),
            s.useDebugValue(p.reaction, o.E),
            (0, l.useSyncExternalStore)(
              p.subscribe,
              p.getSnapshot,
              p.getSnapshot,
            ),
            p.reaction.track(function () {
              try {
                c = e();
              } catch (e) {
                d = e;
              }
            }),
            d)
          )
            throw d;
          return c;
        }
      },
      6090: (e, t, n) => {
        n.d(t, {
          $: () => w.$,
          $Z: () => M.$Z,
          Ay: () => P,
          CU: () => s.CU,
          Ci: () => f.C,
          Cw: () => o.C,
          Ee: () => M.Ee,
          Em: () => c.Em,
          FN: () => v.F,
          Fb: () => s.Fb,
          Fi: () => g.Fi,
          GM: () => d.GM,
          GQ: () => M.GQ,
          Gz: () => M.Gz,
          HW: () => M.HW,
          I0: () => i.I0,
          IS: () => l.I,
          JZ: () => s.JZ,
          KI: () => w.KI,
          Ld: () => s.Ld,
          MQ: () => g.MQ,
          MV: () => M.MV,
          N: () => a.e,
          N1: () => _.N,
          NB: () => M.NB,
          NH: () => s.NH,
          Nu: () => y.N,
          O5: () => p.O,
          O6: () => s.O6,
          OH: () => M.OH,
          Oi: () => g.Oi,
          QB: () => s.QB,
          QR: () => w.QR,
          R$: () => M.R$,
          Rk: () => M.Rk,
          Se: () => s.Se,
          Uj: () => s.Uj,
          Vh: () => h.V,
          Xl: () => M.Xl,
          Y4: () => r.Y,
          Zk: () => g.Zk,
          _1: () => M._1,
          _h: () => g._h,
          _n: () => i._n,
          aX: () => h.a,
          b: () => M.b,
          b$: () => D.b,
          cB: () => E.L,
          dL: () => u.d,
          e_: () => s.e_,
          en: () => w.en,
          fD: () => w.fD,
          gN: () => M.gN,
          k2: () => M.k2,
          kG: () => M.kG,
          ku: () => M.ku,
          lq: () => m.l,
          m$: () => b.m,
          mS: () => C.m,
          mX: () => i.mX,
          mo: () => M.mo,
          mu: () => M.mu,
          nX: () => c.nX,
          ne: () => M.ne,
          nq: () => S.n,
          oN: () => s.oN,
          o_: () => s.o_,
          p0: () => s.p0,
          pM: () => M.pM,
          pg: () => i.pg,
          qF: () => s.qF,
          rF: () => l.H,
          rx: () => M.rx,
          sJ: () => R.$,
          sk: () => i.sk,
          tx: () => s.tx,
          uC: () => x.u,
          vx: () => s.vx,
        });
        var i = n(2824),
          s = n(6292),
          o = n(3389),
          a = (n(4120), n(1230)),
          r = n(5830),
          l = n(6186),
          u = n(3361),
          c = (n(111), n(5723)),
          d = n(3496),
          p = n(5178),
          h = (n(428), n(9011), n(7350)),
          m = n(6847),
          _ = n(5227),
          f = (n(10), n(1808)),
          g = n(7019),
          b = (n(1988), n(2527), n(9864)),
          v = n(4189),
          C = n(322),
          y = n(1977),
          R = n(6417),
          S = n(2303),
          E = n(8715),
          D = (n(4397), n(5459)),
          x = n(8472),
          M = (n(1184), n(3725)),
          w = n(4367);
        const P = VRHTML;
      },
      1977: (e, t, n) => {
        n.d(t, { N: () => o });
        var i = n(6540),
          s = n(3496);
        class o extends s._J {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return i.createElement(
              "vsg-callout-transform",
              { offset: (0, s.j_)(this.props.vOffset) },
              this.props.children,
            );
          }
        }
      },
      322: (e, t, n) => {
        n.d(t, { m: () => a });
        var i = n(6540),
          s = n(4367),
          o = n(3361);
        class a extends i.Component {
          constructor(e) {
            super(e);
            let t = {};
            if (VRHTML)
              try {
                let e = VRHTML.VRProperties.GetStringProperty(
                  this.props.sDevicePath,
                  s.fD.RenderModelName_String,
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
              o.d,
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
      4189: (e, t, n) => {
        n.d(t, { F: () => a });
        var i = n(1635),
          s = n(3496),
          o = n(3236);
        class a extends s._J {
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
        (0, i.Cg)([o.o], a.prototype, "buildNode", null);
      },
      5227: (e, t, n) => {
        n.d(t, { N: () => o });
        var i = n(6540),
          s = n(3496);
        class o extends s._J {
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
      1808: (e, t, n) => {
        n.d(t, { C: () => r });
        var i = n(1635),
          s = n(3496),
          o = n(7019),
          a = n(3236);
        class r extends s._J {
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
              ? (n = (0, s.PG)(this.props.location, { x: 0, y: 0 }))
              : "number" == typeof this.props.location &&
                (n = (0, o.Lr)(this.props.location));
            let i = this.createSgNode(t);
            if (this.props.latched && null !== this.m_latchedPosition)
              (i.properties["anchor-u"] = this.m_latchedPosition.u),
                (i.properties["anchor-v"] = this.m_latchedPosition.v);
            else if (n) {
              const t = { u: 0.5 * n.x + 0.5, v: -0.5 * n.y + 0.5 },
                s =
                  !e.currentPanel || e.currentPanel.props.overlay_key
                    ? t
                    : e.currentPanel.scaleLocalUVToGlobal(t);
              (i.properties["anchor-u"] = s.u),
                (i.properties["anchor-v"] = s.v);
            } else {
              if (!e.currentPanel)
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              const n = t.ownerDocument,
                s = t.getBoundingClientRect(),
                o = s.left + s.width / 2,
                a = s.top + s.height / 2,
                r = e.currentPanel.m_Rect;
              if (o < r.x || o > r.x + r.width || a < r.y || a > r.y + r.height)
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              const l = n.defaultView.innerWidth,
                u = n.defaultView.innerHeight;
              if (!(u > 0 && l > 0))
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              (i.properties["anchor-u"] = o / l),
                (i.properties["anchor-v"] = a / u);
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
        (0, i.Cg)([a.o], r.prototype, "buildNode", null);
      },
      5178: (e, t, n) => {
        n.d(t, { O: () => u });
        var i,
          s = n(1635),
          o = n(6540),
          a = n(7019),
          r = n(3236),
          l = n(5723);
        !(function (e) {
          (e[(e.Canvas = 0)] = "Canvas"), (e[(e.Image = 1)] = "Image");
        })(i || (i = {}));
        class u extends o.Component {
          static get IsSceneGraphApp() {
            return null !== u.Current();
          }
          static Current() {
            return u.s_Current;
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
              (u.s_Current = this),
              (this.state = {
                bFontsLoaded: !1,
                nForcedUpdateNumber: 0,
                bShowDebugPointer: !1,
                eRenderMode: VRHTML.VRUtil.BSupportsCEFCanvas()
                  ? i.Canvas
                  : i.Image,
              }),
              (this.m_DomRef = o.createRef()),
              (this.m_scalingDomRef = o.createRef()),
              (this.m_CanvasRef = o.createRef()),
              (this.m_EmbeddedDataImgRef = o.createRef()),
              (this.m_DebugPointerRef = o.createRef());
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
              o.createElement(
                "vsg-app",
                {
                  class: n.join(" "),
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
                    height: u.k_EmbeddedDataRows,
                  }),
                t &&
                  o.createElement("canvas", {
                    ref: this.m_CanvasRef,
                    className: "EmbeddedData",
                    height: u.k_EmbeddedDataRows,
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
                    u.k_EmbeddedDataRows,
                  ))),
              this.updateAllPanelBounds();
          }
          updateAllPanelBounds() {
            let e = this.m_DomRef.current.ownerDocument.defaultView,
              t = this.m_scalingDomRef.current.getBoundingClientRect(),
              n = t.width / this.m_fCurrentScale,
              i = t.height / this.m_fCurrentScale,
              s = { x: e.innerWidth / n, y: e.innerHeight / i },
              o = Math.min(s.x, s.y, 1);
            o != this.m_fCurrentScale &&
              (1 != o
                ? this.m_scalingDomRef.current.setAttribute(
                    "style",
                    "transform: scale(" + o + "); transform-origin: top left",
                  )
                : this.m_scalingDomRef.current.removeAttribute("style"),
              (this.m_fCurrentScale = o),
              (a.Zk.s_bPanelsAreDirty = !0)),
              a.Zk.s_bPanelsAreDirty &&
                (this.m_mapPanels.forEach((e) => e.updateLayoutValues()),
                (0, l.my)(),
                (a.Zk.s_bPanelsAreDirty = !1),
                this.updateEmbeddedData());
          }
          updateEmbeddedData() {
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
                  s = e.m_Rect.y,
                  o = e.m_Rect.y + e.m_Rect.height,
                  a = e.getEmbeddedIndex(),
                  r = 1 + 3 * a;
                let l = [0, 0, 0, 0, 0, 0, 0, 0, 0],
                  u = !1;
                if (e.isExternal() || n >= i || s >= o)
                  for (let e = 0; e < 3; e++) this.setPixel(r + 1, 0, 0, 0, 0);
                else
                  (u = !0),
                    (l[0] = (65280 & n) >> 8),
                    (l[1] = 255 & n),
                    (l[2] = 254),
                    (l[3] = (65280 & i) >> 8),
                    (l[4] = 255 & i),
                    (l[5] = 255 & s),
                    (l[6] = (65280 & o) >> 8),
                    (l[7] = 255 & o),
                    (l[8] = (65280 & s) >> 8),
                    this.setPixel(r, l[0], l[1], l[2]),
                    this.setPixel(r + 1, l[3], l[4], l[5]),
                    this.setPixel(r + 2, l[6], l[7], l[8]);
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
          setPixel(e, t, n, s, o = 255) {
            if (
              this.m_EmbeddedDataImgRGBBuffer &&
              this.state.eRenderMode == i.Image
            ) {
              const i = new DataView(this.m_EmbeddedDataImgRGBBuffer);
              i.setUint8(4 * e + 0, t),
                i.setUint8(4 * e + 1, n),
                i.setUint8(4 * e + 2, s),
                i.setUint8(4 * e + 3, o);
            } else
              this.m_Pixels &&
                this.state.eRenderMode == i.Canvas &&
                ((this.m_Pixels.data[4 * e + 0] = t),
                (this.m_Pixels.data[4 * e + 1] = n),
                (this.m_Pixels.data[4 * e + 2] = s),
                (this.m_Pixels.data[4 * e + 3] = o),
                (-1 === this.m_nDirtyXMin || e < this.m_nDirtyXMin) &&
                  (this.m_nDirtyXMin = e),
                (-1 === this.m_nDirtyXMax || e > this.m_nDirtyXMax) &&
                  (this.m_nDirtyXMax = e));
          }
        }
        (u.s_Current = null),
          (u.k_EmbeddedDataRows = 1),
          (0, s.Cg)([r.o], u.prototype, "toggleDebugPointer", null),
          (0, s.Cg)([r.o], u.prototype, "onMouseMove", null),
          (0, s.Cg)([r.o], u.prototype, "forceLayoutUpdate", null),
          (0, s.Cg)([r.o], u.prototype, "onMutation", null);
      },
      1278: (e, t, n) => {
        var i = n(1635),
          s = n(6540),
          o = n(5338),
          a = n(3236),
          r = n(6090),
          l = n(5802),
          u = n(3714),
          c = n(9118),
          d = n(1532),
          p = n(6138),
          h = n(1333),
          m = n(1370),
          _ = n(1835),
          f = n(7813),
          g = n(9125);
        function b(e, t) {
          let n = "";
          switch (t.mode) {
            case "dpad":
            case "dpad_touch":
            case "dpad_click":
              n =
                "/input/thumbstick" == t.input_path ||
                "/input/joystick" == t.input_path
                  ? "_" + t.slot
                  : "_dpad_" + t.slot;
              break;
            case "button":
              ("/input/trackpad" != t.input_path &&
                "/input/joystick" != t.input_path) ||
                (n = "_click");
          }
          switch (t.slot) {
            case "position":
              n = "_move";
              break;
            case "scroll":
              n = "_scroll";
          }
          let i = "/dashboard/images/bindingcallouts/";
          switch (t.input_path) {
            case "/input/a":
              return i + "button_a.svg";
            case "/input/b":
              return i + "button_b.svg";
            case "/input/x":
              return i + "button_x.svg";
            case "/input/y":
              return i + "button_y.svg";
            case "/input/grip":
              return i + "button_grip.svg";
            case "/input/system":
              return i + "button_system.svg";
            case "/input/application_menu":
              return i + "button_menu.svg";
            case "/input/trackpad":
              return "knuckles" == e
                ? i + "button_trackbutton" + n + ".svg"
                : i + "button_trackpad" + n + ".svg";
            case "/input/thumbstick":
            case "/input/joystick":
              return i + "button_thumbstick" + n + ".svg";
            case "/input/trigger":
              return i + "button_trigger.svg";
          }
          return null;
        }
        function v(e) {
          switch (e) {
            case "north":
            case "south":
            case "east":
            case "west":
            case "center":
              return "dpad";
            default:
              return "button";
          }
        }
        (0, f.configure)({ enforceActions: "never" });
        class C extends s.Component {
          constructor(e) {
            super(e), (this.state = {});
          }
          renderSlot(e, t) {
            let n,
              i = b(this.props.controllerType, e);
            n = i
              ? s.createElement("img", {
                  className: "BindingCalloutIcon",
                  src: i,
                })
              : s.createElement("div", { className: "BindingCalloutIcon" });
            let o,
              a = (function (e) {
                let t = "/dashboard/images/bindingcallouts/";
                switch (e.mode) {
                  case "dpad":
                  case "dpad_click":
                    return t + "modifier_click.svg";
                  case "dpad_touch":
                    return t + "modifier_touch.svg";
                }
                switch (e.slot) {
                  case "grab":
                  case "click":
                  case "single":
                    return t + "modifier_click.svg";
                  case "double":
                    return t + "modifier_doubleclick.svg";
                  case "long":
                    return t + "modifier_long.svg";
                  case "held":
                    return t + "modifier_held.svg";
                  case "scroll":
                  case "position":
                  case "touch":
                    return t + "modifier_touch.svg";
                  case "force":
                    return t + "modifier_force.svg";
                }
                return null;
              })(e);
            return (
              (o = a
                ? s.createElement("img", {
                    className: "BindingCalloutModifierIcon",
                    src: a,
                  })
                : s.createElement("div", {
                    className: "BindingCalloutModifierIcon",
                  })),
              s.createElement(
                "div",
                { className: "BindingCalloutContents", key: t },
                n,
                o,
                s.createElement(
                  "div",
                  { className: "BindingCalloutLabelContainer" },
                  s.createElement(
                    "div",
                    { className: "Label" },
                    e.localized_action_name,
                  ),
                  s.createElement(
                    "div",
                    { className: "BindingCalloutModeSlot" },
                    this.props.localizedInputName,
                    " : ",
                    (0, u.we)("#SourceInputMode_" + e.slot),
                  ),
                ),
              )
            );
          }
          render() {
            let e,
              t = "BindingCallout";
            this.props.leftAlign
              ? ((e = -0.05), (t += " AlignCalloutRight"))
              : ((e = 0.05), (t += " AlignCalloutLeft")),
              this.props.inputActive && (t += " CalloutInputActive");
            let n =
              this.props.devicePath +
              this.props.inputCallout.input_path +
              "_component";
            return s.createElement(
              "div",
              { className: "BindingCalloutContainer" },
              s.createElement(r.mS, {
                id: n,
                sDevicePath: this.props.devicePath,
                sInputPath: this.props.inputCallout.input_path,
                key: n,
              }),
              s.createElement(
                "div",
                { className: t },
                this.props.inputCallout.slot_callouts.map((e, t) =>
                  this.renderSlot(e, String(t)),
                ),
                s.createElement(
                  "div",
                  { className: "CalloutAnchorPoint" },
                  s.createElement(
                    r.Ci,
                    null,
                    this.props.inputActive &&
                      s.createElement(r.N1, {
                        target_id: n,
                        thickness: 0.002,
                        start_buffer: 0,
                        end_buffer: 0,
                      }),
                  ),
                ),
              ),
            );
          }
        }
        class y extends s.Component {
          constructor(e) {
            super(e), (this.state = {});
          }
          render() {
            let e = [],
              t = [];
            for (let n of this.props.chordCallout.inputs) {
              let i = n.device_path + n.input_path + n.slot,
                o = {
                  device_path: n.device_path,
                  input_path: n.input_path,
                  mode: v(n.slot),
                  slot: n.slot,
                  localized_action_name:
                    this.props.chordCallout.localized_action_name,
                };
              e.length > 0 &&
                e.push(
                  s.createElement(
                    "div",
                    { className: "ChordCalloutPlus", key: "plus" + e.length },
                    "+",
                  ),
                ),
                e.push(
                  s.createElement("img", {
                    className: "BindingCalloutIcon",
                    key: i + "_icon",
                    src: b(this.props.controllerType, o),
                  }),
                ),
                t.push(
                  s.createElement(
                    "div",
                    { className: "BindingCalloutModeSlot", key: i + "_text" },
                    c.W.LocalizeControllerString(
                      this.props.controllerTypeInfo,
                      n.input_path,
                    ),
                    " : ",
                    (0, u.we)("#SourceInputMode_" + n.slot),
                  ),
                );
            }
            let n = "ChordCalloutContainer";
            return (
              this.props.inputActive && (n += " CalloutInputActive"),
              s.createElement(
                "div",
                { className: n },
                s.createElement("div", { className: "ChordCalloutHeader" }, e),
                s.createElement(
                  "div",
                  { className: "ChordCalloutBody" },
                  s.createElement(
                    "div",
                    { className: "Label" },
                    this.props.chordCallout.localized_action_name,
                  ),
                  t,
                ),
              )
            );
          }
        }
        class R extends s.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new r._n()),
              (this.m_sMailboxName = void 0),
              (this.m_sMailboxName =
                "devicecallout/" +
                this.props.device.device_path.replace(/\//g, "_")),
              this.m_mailbox.Init(this.m_sMailboxName).then(() => {
                this.m_mailbox.RegisterHandler(
                  "input_active_state",
                  this.OnInputActiveState,
                );
                let e = {
                  type: "request_input_in_use_updates",
                  device_path: this.props.device.device_path,
                  mailbox: this.m_sMailboxName,
                };
                this.m_mailbox.SendMessage(r.mX, e);
              });
            let t = {};
            for (let e of Object.keys(this.props.device.input_callouts))
              t[e] = !1;
            this.state = { input_state: t };
          }
          OnInputActiveState(e) {
            let t = Object.assign({}, this.state.input_state);
            (t[e.input_path] = e.state), this.setState({ input_state: t });
          }
          componentWillUnmount() {
            let e = {
              type: "cancel_input_in_use_updates",
              device_path: this.props.device.device_path,
              mailbox: this.m_sMailboxName,
            };
            this.m_mailbox.SendMessage(r.mX, e);
          }
          render() {
            if (!VRHTML) return null;
            if (
              !VRHTML.VRSystem.IsDevicePathValid(this.props.device.device_path)
            )
              return null;
            let e = -0.05,
              t = { x: -0.08, y: 0.05, z: 0.12 },
              n = !0;
            "/user/hand/left" == this.props.device.device_path &&
              ((t.x = -t.x), (e = -e), (n = !1));
            let i = c.W.GetControllerTypeInfo(this.props.controllerType);
            if (!i) return null;
            let o = [],
              a = Object.keys(this.props.device.input_callouts);
            for (let e of a) {
              let t = this.props.device.input_callouts[e],
                r = (t.slot_callouts.length, e);
              i && (r = c.W.LocalizeControllerString(i, e));
              let l = i.input_source[e],
                u = 999;
              l && l.order && (u = l.order);
              let d = s.createElement(C, {
                devicePath: this.props.device.device_path,
                inputCallout: t,
                leftAlign: n,
                inputActive:
                  1 == a.length || this.state.input_state[t.input_path],
                localizedInputName: r,
                controllerType: this.props.controllerType,
                key: this.props.device.device_path + e,
              });
              o.push({ order: u, callout: d });
            }
            o.sort((e, t) => e.order - t.order);
            let l = o.map((e) => e.callout),
              u = [];
            for (let e of this.props.device.chords) {
              let t = !1;
              for (let n of e.inputs)
                t = t || this.state.input_state[n.input_path];
              u.push(
                s.createElement(y, {
                  controllerTypeInfo: i,
                  chordCallout: e,
                  controllerType: this.props.controllerType,
                  key: "chord_" + u.length,
                  inputActive: t,
                }),
              );
            }
            return s.createElement(
              r.dL,
              { parent_path: this.props.device.device_path },
              s.createElement(
                r.Nu,
                { vOffset: t },
                s.createElement(
                  r.FN,
                  null,
                  s.createElement(
                    r.dL,
                    { rotation: { y: n ? 7 : -7 } },
                    s.createElement(
                      r.dL,
                      { translation: { x: e } },
                      s.createElement(
                        r.Zk,
                        { width: 0.1, debug_name: "bindingcallouts-2" },
                        s.createElement(
                          "div",
                          { className: "FlexColumn BindingCalloutColumn" },
                          l,
                          u,
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            );
          }
        }
        (0, i.Cg)([a.o], R.prototype, "OnInputActiveState", null);
        class S extends s.Component {
          constructor(e) {
            super(e);
          }
          GenerateCalloutDirections(e) {
            switch (e) {
              case 0:
                return [];
              case 1:
                return [{ x: -0.05, y: 0.06 }];
              default: {
                let t = Math.PI / 8,
                  n = (7 * Math.PI) / 8,
                  i = [];
                for (let s = 0; s < e; s++) {
                  let o = t + ((n - t) * s) / (e - 1),
                    a = { x: -Math.cos(o), y: Math.sin(o) };
                  i.push(a);
                }
                return i;
              }
            }
          }
          ComputeActualRect(e, t) {
            return e.dir.x <= 0
              ? {
                  left: e.dir.x * t - e.size.x,
                  right: e.dir.x * t,
                  top: e.dir.y * t - e.size.y / 2,
                  bottom: e.dir.y * t + e.size.y / 2,
                }
              : {
                  left: e.dir.x * t,
                  right: e.dir.x * t + e.size.x,
                  top: e.dir.y * t - e.size.y / 2,
                  bottom: e.dir.y * t + e.size.y / 2,
                };
          }
          HasIntersection(e, t) {
            return (
              !(e.right < t.left || e.left > t.right) &&
              !(e.bottom < t.top || e.top > t.bottom)
            );
          }
          HasCollision(e, t) {
            for (let n = 0; n < e.length; n++)
              for (let i = 0; i < e.length; i++) {
                if (n == i) continue;
                let s = this.ComputeActualRect(e[n], t),
                  o = this.ComputeActualRect(e[i], t);
                if (this.HasIntersection(s, o)) return !0;
              }
            return !1;
          }
          FindDistanceThatFits(e, t, n) {
            let i = t;
            for (; this.HasCollision(e, i); ) i += n;
            return i;
          }
          render() {
            return this.props.devices
              ? s.createElement(
                  "div",
                  { className: "DeviceCalloutList" },
                  Object.keys(this.props.devices).map((e) =>
                    s.createElement(
                      "div",
                      { key: e, className: "DeviceCalloutListEntry" },
                      s.createElement(R, {
                        device: this.props.devices[e],
                        controllerType: this.props.controllerType,
                        key: e,
                      }),
                    ),
                  ),
                )
              : null;
          }
        }
        let E = class extends s.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new r._n()),
              this.m_mailbox.Init(r.I0).then(() => {
                this.m_mailbox.RegisterHandler(
                  "request_binding_callouts",
                  this.OnRequestBindingCallouts,
                ),
                  this.m_mailbox.RegisterHandler(
                    "cancel_binding_callouts",
                    this.OnCancelBindingCallouts,
                  ),
                  this.m_mailbox.RegisterHandler(
                    "should_show_binding_callouts",
                    this.OnShouldShowBindingCallouts,
                  ),
                  this.m_mailbox.RegisterHandler(
                    "request_tutorial_callout",
                    this.OnRequestTutorialCallout,
                  );
              }),
              h.HR.Init(!1),
              (this.state = {});
          }
          GetDefaultControllerType() {
            let e = VRHTML.VRSystem.GetTrackedDeviceClasses(),
              t = e.find((e) => e.eClass == r.mo.Controller);
            return (
              t || (t = e.find((e) => e.eClass == r.mo.HMD)),
              t
                ? VRHTML.VRProperties.GetStringProperty(
                    t.unIndex,
                    r.fD.ControllerType_String,
                  )
                : null
            );
          }
          SendShouldShowBindingCalloutsResponse(e, t) {
            let n = {
              type: "should_show_binding_callouts_response",
              app_key: e.app_key,
              has_callouts: t,
            };
            this.m_mailbox.SendResponse(e, n);
          }
          OnShouldShowBindingCallouts(e) {
            let t = this.GetDefaultControllerType();
            (0, l.xM)(e.app_key)
              .then((n) => {
                let i = "legacy" == n.category,
                  s = !i;
                if (i) {
                  s =
                    n.current_binding_url[t] !=
                    (n.default_bindings && n.default_bindings[t]);
                }
                return s
                  ? (this.SendShouldShowBindingCalloutsResponse(e, !0), null)
                  : (0, l.mQ)(e.app_key, t, n.current_binding_url[t]);
              })
              .then((t) => {
                let n = !1;
                if (t.binding_config.alias_info)
                  for (let e in t.binding_config.alias_info) {
                    let i = t.binding_config.alias_info[e];
                    if (!i.hidden && i.alias_name) {
                      n = !0;
                      break;
                    }
                  }
                t.binding_config.simulated_actions &&
                  t.binding_config.simulated_actions.length > 0 &&
                  (n = !0),
                  this.SendShouldShowBindingCalloutsResponse(e, n);
              })
              .catch((t) => {
                this.SendShouldShowBindingCalloutsResponse(e, !1);
              });
          }
          OnRequestBindingCallouts(e) {
            let t,
              n = e.controller_type
                ? e.controller_type
                : this.GetDefaultControllerType();
            (0, l.xM)(e.app_key)
              .then(
                (i) => (
                  (t = i), (0, l.mQ)(e.app_key, n, t.current_binding_url[n])
                ),
              )
              .then((i) => {
                (Object.assign({}, e).controller_type = n),
                  this.ShowCallouts(e, n, t, i.binding_config);
              })
              .catch((e) => {
                console.log("Request for bindings failed: ", e);
              });
          }
          OnCancelBindingCallouts(e) {
            this.state.sAppKey == e.app_key && this.OnCloseCallouts();
          }
          OnRequestTutorialCallout(e) {
            this.setState({
              actionManifest: null,
              bindingConfig: null,
              sActionSet: null,
              sRestrictToAction: null,
              sAppKey: e.app_key,
              sControllerType: e.controller_type,
              tutorialCallout: e,
            });
          }
          IsActionSetAllowed(e, t) {
            if (e.required_options)
              for (let n of e.required_options) if (!t.options[n]) return !1;
            if (e.forbidden_options)
              for (let n of e.forbidden_options) if (t.options[n]) return !1;
            return !0;
          }
          DoesActionSetHaveBindings(e, t) {
            if (
              t.bindings &&
              t.bindings[e.name] &&
              t.bindings[e.name].sources.length > 0
            ) {
              let t = !1;
              for (let n of e.actions)
                if (!n.hide_callout) {
                  t = !0;
                  break;
                }
              return t;
            }
            return !1;
          }
          DetermineDefaultActionSet(e, t) {
            for (let n of e.action_sets)
              if (
                this.IsActionSetAllowed(n, t) &&
                this.DoesActionSetHaveBindings(n, t)
              )
                return n.name;
          }
          ShowCallouts(e, t, n, i) {
            let s = null,
              o = null;
            if (e.action) {
              e: for (let t of n.action_sets)
                if (this.DoesActionSetHaveBindings(t, i))
                  for (let n of t.actions)
                    if (n.name.toUpperCase() == e.action.toUpperCase()) {
                      s = t.name;
                      break e;
                    }
              o = e.action.toUpperCase();
            } else
              s = e.action_sets
                ? e.action_sets[0]
                : this.DetermineDefaultActionSet(n, i);
            s &&
              this.setState({
                actionManifest: n,
                bindingConfig: i,
                sActionSet: s,
                sRestrictToAction: o,
                sAppKey: e.app_key,
                sControllerType: t,
              });
          }
          ComputeCalloutsForActionSet(e) {
            let t = [],
              n = this.state.bindingConfig.bindings[e.name];
            if (n && n.sources)
              for (let i of n.sources)
                if (i.inputs)
                  for (let n of Object.keys(i.inputs)) {
                    let s = i.inputs[n];
                    if (!s.output) continue;
                    if (
                      this.state.sRestrictToAction &&
                      s.output.toUpperCase() != this.state.sRestrictToAction
                    )
                      continue;
                    let o = i.path.indexOf("/input");
                    if (-1 == o) continue;
                    let a = {
                        device_path: i.path.substring(0, o),
                        input_path: i.path.substring(o),
                        mode: i.mode,
                        slot: n,
                        localized_action_name: null,
                      },
                      r = e.actions.find(
                        (e) => e.name.toUpperCase() == s.output.toUpperCase(),
                      );
                    if (r) {
                      if (r.hide_callout) continue;
                      let e = r.localized_name,
                        t =
                          this.state.bindingConfig.alias_info &&
                          this.state.bindingConfig.alias_info[r.name];
                      if (t && (t.alias_name && (e = t.alias_name), t.hidden))
                        continue;
                      a.localized_action_name = e;
                    } else if (s.output.startsWith("/simactions/")) {
                      let e = parseInt(
                          s.output.slice(s.output.lastIndexOf("/") + 1),
                        ),
                        t = this.state.bindingConfig.simulated_actions.find(
                          (t) => t.id == e,
                        );
                      if (!t) continue;
                      a.localized_action_name = t.name;
                    }
                    a.localized_action_name && t.push(a);
                  }
            return t;
          }
          ComputeChordCalloutsForActionSet(e) {
            let t = [],
              n = this.state.bindingConfig.bindings[e.name];
            if (n && n.chords)
              for (let i of n.chords) {
                if (!i.inputs || !i.output) continue;
                if (
                  this.state.sRestrictToAction &&
                  i.output.toUpperCase() != this.state.sRestrictToAction
                )
                  continue;
                let n = e.actions.find(
                  (e) => e.name.toUpperCase() == i.output.toUpperCase(),
                );
                if (!n) continue;
                let s = { inputs: [], localized_action_name: n.localized_name };
                for (let e of i.inputs) {
                  if (2 != e.length) continue;
                  let t = e[0].indexOf("/input");
                  if (-1 == t) continue;
                  let n = {
                    device_path: e[0].substring(0, t),
                    input_path: e[0].substring(t),
                    slot: e[1],
                  };
                  s.inputs.push(n);
                }
                s.inputs.length > 0 && t.push(s);
              }
            return t;
          }
          ComputeGroupedCallouts() {
            if (
              !(
                this.state.actionManifest &&
                this.state.bindingConfig &&
                this.state.sActionSet &&
                this.state.sAppKey &&
                this.state.sControllerType
              )
            )
              return {};
            let e = [],
              t = [];
            for (let n of this.state.actionManifest.action_sets)
              (n.name != this.state.sActionSet &&
                n.display_with != this.state.sActionSet) ||
                ((e = e.concat(this.ComputeCalloutsForActionSet(n))),
                (t = t.concat(this.ComputeChordCalloutsForActionSet(n))));
            return this.GroupCallouts(e, t);
          }
          GroupCallouts(e, t) {
            let n = {};
            for (let t of e) {
              let e = t.device_path.toLowerCase();
              n.hasOwnProperty(e) ||
                (n[e] = { device_path: e, input_callouts: {}, chords: [] });
              let i = n[e];
              i.input_callouts.hasOwnProperty(t.input_path) ||
                (i.input_callouts[t.input_path] = {
                  input_path: t.input_path,
                  slot_callouts: [],
                }),
                i.input_callouts[t.input_path].slot_callouts.push(t);
            }
            for (let e of t) {
              if (0 == e.inputs.length) continue;
              let t = e.inputs[0].device_path.toLowerCase(),
                i = !1;
              for (let n of e.inputs)
                if (n.device_path.toLowerCase() != t) {
                  i = !0;
                  break;
                }
              i
                ? console.log(
                    "chord is multi-device, which we don't know how to draw yet",
                    e,
                  )
                : n[t].chords.push(e);
            }
            return n;
          }
          OnSelectActionSet(e) {
            this.setState({ sActionSet: e });
          }
          OnCloseCallouts() {
            this.setState({
              actionManifest: void 0,
              bindingConfig: void 0,
              sActionSet: void 0,
              sRestrictToAction: void 0,
              sAppKey: void 0,
              sControllerType: void 0,
              tutorialCallout: void 0,
            });
          }
          renderTutorialCallout() {
            let e = {
                device_path: this.state.tutorialCallout.device_path,
                input_path: this.state.tutorialCallout.input_path,
                mode: this.state.tutorialCallout.mode,
                slot: this.state.tutorialCallout.slot,
                localized_action_name:
                  this.state.tutorialCallout.localized_action_name,
              },
              t = {
                input_path: this.state.tutorialCallout.input_path,
                slot_callouts: [e],
              },
              n = {
                device_path: this.state.tutorialCallout.device_path,
                input_callouts: {},
                chords: [],
              };
            n.input_callouts[this.state.tutorialCallout.input_path] = t;
            let i = {};
            return (
              (i[this.state.tutorialCallout.device_path] = n),
              s.createElement(S, {
                devices: i,
                controllerType: this.state.sControllerType,
              })
            );
          }
          render() {
            if (this.state.tutorialCallout) return this.renderTutorialCallout();
            let e = this.ComputeGroupedCallouts();
            if (0 == Object.keys(e).length) return null;
            let t = [];
            this.state.actionManifest.action_sets.forEach((e) => {
              if (
                this.IsActionSetAllowed(e, this.state.bindingConfig) &&
                !e.display_with &&
                this.DoesActionSetHaveBindings(e, this.state.bindingConfig)
              ) {
                let n = "ActionSetName ButtonControl";
                e.name == this.state.sActionSet && (n += " ActionSetSelected"),
                  t.push(
                    s.createElement(
                      p.$,
                      {
                        className: n,
                        onClick: () => {
                          this.OnSelectActionSet(e.name);
                        },
                        key: e.name,
                      },
                      e.localized_name,
                    ),
                  );
              }
            });
            let n = d.s.GetApp(this.state.sAppKey);
            return s.createElement(
              "div",
              { className: "CalloutTopLevelContainer" },
              !this.state.sRestrictToAction &&
                s.createElement(
                  "div",
                  { className: "CalloutActionSetDialogContainer" },
                  s.createElement(
                    r.dL,
                    { parent_path: "/user/head" },
                    s.createElement(
                      r.m$,
                      { start_angle_threshold: 40, stop_angle_threshold: 5 },
                      s.createElement(
                        r.dL,
                        { rotation: { x: -10, y: 10, z: 0 } },
                        s.createElement(
                          r.dL,
                          {
                            translation: {
                              x: -0,
                              y: -0,
                              z: -0.85 * _.SW.dashboardDistance,
                            },
                          },
                          s.createElement(
                            r.Zk,
                            {
                              width: 0.65 * _.SW.dashboardScale,
                              interactive: !0,
                              debug_name: "bindingcallouts-1",
                            },
                            s.createElement(
                              p.W,
                              { className: "BindingCalloutActionPanel" },
                              n &&
                                s.createElement(
                                  "div",
                                  { className: "BindingCalloutAppHeader" },
                                  s.createElement("img", {
                                    className: "BindingCalloutImage",
                                    src: d.s.GetAppImageURL(this.state.sAppKey),
                                  }),
                                  s.createElement(
                                    "div",
                                    { className: "BindingCalloutTitle" },
                                    "Controller Bindings",
                                  ),
                                  s.createElement(
                                    "div",
                                    { className: "BindingCalloutConfigName" },
                                    this.state.bindingConfig.name,
                                  ),
                                ),
                              s.createElement(
                                "div",
                                { className: "BindingCalloutActionList" },
                                t,
                                s.createElement(
                                  p.$,
                                  {
                                    className: "ButtonControl CloseButton",
                                    onClick: this.OnCloseCallouts,
                                  },
                                  "Close",
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              s.createElement(S, {
                devices: e,
                controllerType: this.state.sControllerType,
              }),
            );
          }
        };
        (0, i.Cg)([a.o], E.prototype, "OnShouldShowBindingCallouts", null),
          (0, i.Cg)([a.o], E.prototype, "OnRequestBindingCallouts", null),
          (0, i.Cg)([a.o], E.prototype, "OnCancelBindingCallouts", null),
          (0, i.Cg)([a.o], E.prototype, "OnRequestTutorialCallout", null),
          (0, i.Cg)([a.o], E.prototype, "OnCloseCallouts", null),
          (E = (0, i.Cg)([m.PA], E)),
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VROverlay.SetFlag(
              VRHTML.VROverlay.ThisOverlayHandle(),
              r.NB.MakeOverlaysInteractiveIfVisible,
              !0,
            ),
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VROverlay.SetInputMethod(
              VRHTML.VROverlay.ThisOverlayHandle(),
              r.Rk.Mouse,
            ),
          (0, u.uV)(
            ["bindingui"],
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.GetSteamLanguage(),
          )
            .then(() => c.W.Init())
            .then(() => d.s.Init())
            .then(() => {
              (0, g.aj)().Init("SteamVR", CLSTAMP, (0, g.d4)()),
                o
                  .H(document.getElementById("root"))
                  .render(
                    s.createElement(r.O5, null, s.createElement(E, null)),
                  );
            });
      },
    },
    n = {};
  function i(e) {
    var s = n[e];
    if (void 0 !== s) return s.exports;
    var o = (n[e] = { exports: {} });
    return t[e].call(o.exports, o, o.exports, i), o.exports;
  }
  (i.m = t),
    (e = []),
    (i.O = (t, n, s, o) => {
      if (!n) {
        var a = 1 / 0;
        for (c = 0; c < e.length; c++) {
          for (var [n, s, o] = e[c], r = !0, l = 0; l < n.length; l++)
            (!1 & o || a >= o) && Object.keys(i.O).every((e) => i.O[e](n[l]))
              ? n.splice(l--, 1)
              : ((r = !1), o < a && (a = o));
          if (r) {
            e.splice(c--, 1);
            var u = s();
            void 0 !== u && (t = u);
          }
        }
        return t;
      }
      o = o || 0;
      for (var c = e.length; c > 0 && e[c - 1][2] > o; c--) e[c] = e[c - 1];
      e[c] = [n, s, o];
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
      var e = { 241: 0, 797: 0, 527: 0, 500: 0 };
      i.O.j = (t) => 0 === e[t];
      var t = (t, n) => {
          var s,
            o,
            [a, r, l] = n,
            u = 0;
          if (a.some((t) => 0 !== e[t])) {
            for (s in r) i.o(r, s) && (i.m[s] = r[s]);
            if (l) var c = l(i);
          }
          for (t && t(n); u < a.length; u++)
            (o = a[u]), i.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return i.O(c);
        },
        n = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var s = i.O(
    void 0,
    [967, 991, 305, 527, 452, 170, 537, 500, 554, 458, 542],
    () => i(1278),
  );
  s = i.O(s);
})(); //# sourceMappingURL=file:///c:/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/bindingcallouts.js.map
