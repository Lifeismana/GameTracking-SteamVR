var CLSTAMP = "10233197";
(() => {
  "use strict";
  var e,
    t = {
      6035: (e, t, i) => {
        i.d(t, { P: () => p });
        var n,
          s,
          o = i(6540),
          a = i(3815),
          r = i(4452),
          l = "function" == typeof Symbol && Symbol.for,
          u =
            null !==
              (s =
                null ===
                  (n = Object.getOwnPropertyDescriptor(
                    function () {},
                    "name",
                  )) || void 0 === n
                  ? void 0
                  : n.configurable) &&
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
          var i;
          if (d && e.$$typeof === d)
            throw new Error(
              "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
            );
          if ((0, a.P)()) return e;
          var n =
              null !== (i = null == t ? void 0 : t.forwardRef) &&
              void 0 !== i &&
              i,
            s = e,
            l = e.displayName || e.name;
          if (
            c &&
            e.$$typeof === c &&
            ((n = !0), "function" != typeof (s = e.render))
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
            n && (_ = (0, o.forwardRef)(_)),
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
      4452: (e, t, i) => {
        i.d(t, { q: () => c });
        var n = i(7813),
          s = i(6540),
          o = i(6356),
          a = i(3815),
          r = i(7380),
          l = i(9888);
        function u(e) {
          e.reaction = new n.Reaction("observer".concat(e.name), function () {
            var t;
            (e.stateVersion = Symbol()),
              null === (t = e.onStoreChange) || void 0 === t || t.call(e);
          });
        }
        function c(e, t) {
          if ((void 0 === t && (t = "observed"), (0, a.P)())) return e();
          var i = s.useRef(null);
          if (!i.current) {
            var n = {
              reaction: null,
              onStoreChange: null,
              stateVersion: Symbol(),
              name: t,
              subscribe: function (e) {
                return (
                  r.Y.unregister(n),
                  (n.onStoreChange = e),
                  n.reaction || (u(n), (n.stateVersion = Symbol())),
                  function () {
                    var e;
                    (n.onStoreChange = null),
                      null === (e = n.reaction) || void 0 === e || e.dispose(),
                      (n.reaction = null);
                  }
                );
              },
              getSnapshot: function () {
                return n.stateVersion;
              },
            };
            i.current = n;
          }
          var c,
            d,
            p = i.current;
          if (
            (p.reaction || (u(p), r.Y.register(i, p, p)),
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
      6090: (e, t, i) => {
        i.d(t, {
          $: () => w.$,
          $Z: () => M.$Z,
          Ay: () => A,
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
          I0: () => n.I0,
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
          _n: () => n._n,
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
          mX: () => n.mX,
          mo: () => M.mo,
          mu: () => M.mu,
          nX: () => c.nX,
          ne: () => M.ne,
          nq: () => S.n,
          oN: () => s.oN,
          o_: () => s.o_,
          p0: () => s.p0,
          pM: () => M.pM,
          pg: () => n.pg,
          qF: () => s.qF,
          rF: () => l.H,
          rx: () => M.rx,
          sJ: () => R.$,
          sk: () => n.sk,
          sn: () => n.sn,
          tx: () => s.tx,
          uC: () => x.u,
          vx: () => s.vx,
        });
        var n = i(2824),
          s = i(6292),
          o = i(3389),
          a = (i(4120), i(1230)),
          r = i(5830),
          l = i(6186),
          u = i(3361),
          c = (i(111), i(5723)),
          d = i(3496),
          p = i(5178),
          h = (i(428), i(9011), i(7350)),
          m = i(6847),
          _ = i(5227),
          f = (i(10), i(1808)),
          g = i(7019),
          b = (i(1988), i(2527), i(9864)),
          v = i(4189),
          C = i(322),
          y = i(1977),
          R = i(6417),
          S = i(2303),
          E = i(8715),
          D = (i(4397), i(5459)),
          x = i(8472),
          M = (i(1184), i(3725)),
          w = i(4367);
        const A = VRHTML;
      },
      1977: (e, t, i) => {
        i.d(t, { N: () => o });
        var n = i(6540),
          s = i(3496);
        class o extends s._J {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return n.createElement(
              "vsg-callout-transform",
              { offset: (0, s.j_)(this.props.vOffset) },
              this.props.children,
            );
          }
        }
      },
      322: (e, t, i) => {
        i.d(t, { m: () => a });
        var n = i(6540),
          s = i(4367),
          o = i(3361);
        class a extends n.Component {
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
      4189: (e, t, i) => {
        i.d(t, { F: () => a });
        var n = i(1635),
          s = i(3496),
          o = i(3236);
        class a extends s._J {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "head-facing-transform";
          }
          buildNode(e, t) {
            var i;
            const n = this.createSgNode(t);
            return (
              (n.properties.up =
                null !== (i = this.props.up) && void 0 !== i ? i : "world"),
              [e, n]
            );
          }
        }
        (0, n.Cg)([o.o], a.prototype, "buildNode", null);
      },
      5227: (e, t, i) => {
        i.d(t, { N: () => o });
        var n = i(6540),
          s = i(3496);
        class o extends s._J {
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
      1808: (e, t, i) => {
        i.d(t, { C: () => r });
        var n = i(1635),
          s = i(3496),
          o = i(7019),
          a = i(3236);
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
            let i = null;
            "object" == typeof this.props.location
              ? (i = (0, s.PG)(this.props.location, { x: 0, y: 0 }))
              : "number" == typeof this.props.location &&
                (i = (0, o.Lr)(this.props.location));
            let n = this.createSgNode(t);
            if (this.props.latched && null !== this.m_latchedPosition)
              (n.properties["anchor-u"] = this.m_latchedPosition.u),
                (n.properties["anchor-v"] = this.m_latchedPosition.v);
            else if (i) {
              const t = { u: 0.5 * i.x + 0.5, v: -0.5 * i.y + 0.5 },
                s =
                  !e.currentPanel || e.currentPanel.props.overlay_key
                    ? t
                    : e.currentPanel.scaleLocalUVToGlobal(t);
              (n.properties["anchor-u"] = s.u),
                (n.properties["anchor-v"] = s.v);
            } else {
              if (!e.currentPanel)
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              const i = t.ownerDocument,
                s = t.getBoundingClientRect(),
                o = s.left + s.width / 2,
                a = s.top + s.height / 2,
                r = e.currentPanel.m_Rect;
              if (o < r.x || o > r.x + r.width || a < r.y || a > r.y + r.height)
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              const l = i.defaultView.innerWidth,
                u = i.defaultView.innerHeight;
              if (!(u > 0 && l > 0))
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              (n.properties["anchor-u"] = o / l),
                (n.properties["anchor-v"] = a / u);
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
        (0, n.Cg)([a.o], r.prototype, "buildNode", null);
      },
      5178: (e, t, i) => {
        i.d(t, { O: () => u });
        var n,
          s = i(1635),
          o = i(6540),
          a = i(7019),
          r = i(3236),
          l = i(5723);
        !(function (e) {
          (e[(e.Canvas = 0)] = "Canvas"), (e[(e.Image = 1)] = "Image");
        })(n || (n = {}));
        class u extends o.Component {
          static get IsSceneGraphApp() {
            return null !== u.Current();
          }
          static Current() {
            return u.s_Current;
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
              (u.s_Current = this),
              (this.state = {
                bFontsLoaded: !1,
                nForcedUpdateNumber: 0,
                bShowDebugPointer: !1,
                eRenderMode: (
                  null === (t = VRHTML.VRUtil) || void 0 === t
                    ? void 0
                    : t.BSupportsCEFCanvas()
                )
                  ? n.Canvas
                  : n.Image,
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
            var e;
            this.state.eRenderMode == n.Image
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
              : this.state.eRenderMode == n.Canvas &&
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
              i = t.width / this.m_fCurrentScale,
              n = t.height / this.m_fCurrentScale,
              s = { x: e.innerWidth / i, y: e.innerHeight / n },
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
            var e;
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
                const i = e.m_Rect.x,
                  n = e.m_Rect.x + e.m_Rect.width,
                  s = e.m_Rect.y,
                  o = e.m_Rect.y + e.m_Rect.height,
                  a = e.getEmbeddedIndex(),
                  r = 1 + 3 * a;
                let l = [0, 0, 0, 0, 0, 0, 0, 0, 0],
                  u = !1;
                if (e.isExternal() || i >= n || s >= o)
                  for (let e = 0; e < 3; e++) this.setPixel(r + 1, 0, 0, 0, 0);
                else
                  (u = !0),
                    (l[0] = (65280 & i) >> 8),
                    (l[1] = 255 & i),
                    (l[2] = 254),
                    (l[3] = (65280 & n) >> 8),
                    (l[4] = 255 & n),
                    (l[5] = 255 & s),
                    (l[6] = (65280 & o) >> 8),
                    (l[7] = 255 & o),
                    (l[8] = (65280 & s) >> 8),
                    this.setPixel(r, l[0], l[1], l[2]),
                    this.setPixel(r + 1, l[3], l[4], l[5]),
                    this.setPixel(r + 2, l[6], l[7], l[8]);
              }),
              this.m_EmbeddedDataImgRef && this.state.eRenderMode == n.Image)
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
            } else if (this.m_CanvasRef && this.state.eRenderMode == n.Canvas) {
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
          setPixel(e, t, i, s, o = 255) {
            if (
              this.m_EmbeddedDataImgRGBBuffer &&
              this.state.eRenderMode == n.Image
            ) {
              const n = new DataView(this.m_EmbeddedDataImgRGBBuffer);
              n.setUint8(4 * e + 0, t),
                n.setUint8(4 * e + 1, i),
                n.setUint8(4 * e + 2, s),
                n.setUint8(4 * e + 3, o);
            } else
              this.m_Pixels &&
                this.state.eRenderMode == n.Canvas &&
                ((this.m_Pixels.data[4 * e + 0] = t),
                (this.m_Pixels.data[4 * e + 1] = i),
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
      1278: (e, t, i) => {
        var n = i(1635),
          s = i(6540),
          o = i(5338),
          a = i(3236),
          r = i(6090),
          l = i(5802),
          u = i(3714),
          c = i(9118),
          d = i(1532),
          p = i(6138),
          h = i(1333),
          m = i(1370),
          _ = i(1835),
          f = i(7813),
          g = i(582);
        function b(e, t) {
          let i = "";
          switch (t.mode) {
            case "dpad":
            case "dpad_touch":
            case "dpad_click":
              i =
                "/input/thumbstick" == t.input_path ||
                "/input/joystick" == t.input_path
                  ? "_" + t.slot
                  : "_dpad_" + t.slot;
              break;
            case "button":
              ("/input/trackpad" != t.input_path &&
                "/input/joystick" != t.input_path) ||
                (i = "_click");
          }
          switch (t.slot) {
            case "position":
              i = "_move";
              break;
            case "scroll":
              i = "_scroll";
          }
          let n = "/dashboard/images/bindingcallouts/";
          switch (t.input_path) {
            case "/input/a":
              return n + "button_a.svg";
            case "/input/b":
              return n + "button_b.svg";
            case "/input/x":
              return n + "button_x.svg";
            case "/input/y":
              return n + "button_y.svg";
            case "/input/grip":
              return n + "button_grip.svg";
            case "/input/system":
              return n + "button_system.svg";
            case "/input/application_menu":
              return n + "button_menu.svg";
            case "/input/trackpad":
              return "knuckles" == e
                ? n + "button_trackbutton" + i + ".svg"
                : n + "button_trackpad" + i + ".svg";
            case "/input/thumbstick":
            case "/input/joystick":
              return n + "button_thumbstick" + i + ".svg";
            case "/input/trigger":
              return n + "button_trigger.svg";
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
            let i,
              n = b(this.props.controllerType, e);
            i = n
              ? s.createElement("img", {
                  className: "BindingCalloutIcon",
                  src: n,
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
                i,
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
            let i =
              this.props.devicePath +
              this.props.inputCallout.input_path +
              "_component";
            return s.createElement(
              "div",
              { className: "BindingCalloutContainer" },
              s.createElement(r.mS, {
                id: i,
                sDevicePath: this.props.devicePath,
                sInputPath: this.props.inputCallout.input_path,
                key: i,
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
                        target_id: i,
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
            for (let i of this.props.chordCallout.inputs) {
              let n = i.device_path + i.input_path + i.slot,
                o = {
                  device_path: i.device_path,
                  input_path: i.input_path,
                  mode: v(i.slot),
                  slot: i.slot,
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
                    key: n + "_icon",
                    src: b(this.props.controllerType, o),
                  }),
                ),
                t.push(
                  s.createElement(
                    "div",
                    { className: "BindingCalloutModeSlot", key: n + "_text" },
                    c.W.LocalizeControllerString(
                      this.props.controllerTypeInfo,
                      i.input_path,
                    ),
                    " : ",
                    (0, u.we)("#SourceInputMode_" + i.slot),
                  ),
                );
            }
            let i = "ChordCalloutContainer";
            return (
              this.props.inputActive && (i += " CalloutInputActive"),
              s.createElement(
                "div",
                { className: i },
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
              i = !0;
            "/user/hand/left" == this.props.device.device_path &&
              ((t.x = -t.x), (e = -e), (i = !1));
            let n = c.W.GetControllerTypeInfo(this.props.controllerType);
            if (!n) return null;
            let o = [],
              a = Object.keys(this.props.device.input_callouts);
            for (let e of a) {
              let t = this.props.device.input_callouts[e],
                r = (t.slot_callouts.length, e);
              n && (r = c.W.LocalizeControllerString(n, e));
              let l = n.input_source[e],
                u = 999;
              l && l.order && (u = l.order);
              let d = s.createElement(C, {
                devicePath: this.props.device.device_path,
                inputCallout: t,
                leftAlign: i,
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
              for (let i of e.inputs)
                t = t || this.state.input_state[i.input_path];
              u.push(
                s.createElement(y, {
                  controllerTypeInfo: n,
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
                    { rotation: { y: i ? 7 : -7 } },
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
        (0, n.Cg)([a.o], R.prototype, "OnInputActiveState", null);
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
                  i = (7 * Math.PI) / 8,
                  n = [];
                for (let s = 0; s < e; s++) {
                  let o = t + ((i - t) * s) / (e - 1),
                    a = { x: -Math.cos(o), y: Math.sin(o) };
                  n.push(a);
                }
                return n;
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
            for (let i = 0; i < e.length; i++)
              for (let n = 0; n < e.length; n++) {
                if (i == n) continue;
                let s = this.ComputeActualRect(e[i], t),
                  o = this.ComputeActualRect(e[n], t);
                if (this.HasIntersection(s, o)) return !0;
              }
            return !1;
          }
          FindDistanceThatFits(e, t, i) {
            let n = t;
            for (; this.HasCollision(e, n); ) n += i;
            return n;
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
            let i = {
              type: "should_show_binding_callouts_response",
              app_key: e.app_key,
              has_callouts: t,
            };
            this.m_mailbox.SendResponse(e, i);
          }
          OnShouldShowBindingCallouts(e) {
            let t = this.GetDefaultControllerType();
            (0, l.xM)(e.app_key)
              .then((i) => {
                let n = "legacy" == i.category,
                  s = !n;
                if (n) {
                  s =
                    i.current_binding_url[t] !=
                    (i.default_bindings && i.default_bindings[t]);
                }
                return s
                  ? (this.SendShouldShowBindingCalloutsResponse(e, !0), null)
                  : (0, l.mQ)(e.app_key, t, i.current_binding_url[t]);
              })
              .then((t) => {
                let i = !1;
                if (t.binding_config.alias_info)
                  for (let e in t.binding_config.alias_info) {
                    let n = t.binding_config.alias_info[e];
                    if (!n.hidden && n.alias_name) {
                      i = !0;
                      break;
                    }
                  }
                t.binding_config.simulated_actions &&
                  t.binding_config.simulated_actions.length > 0 &&
                  (i = !0),
                  this.SendShouldShowBindingCalloutsResponse(e, i);
              })
              .catch((t) => {
                this.SendShouldShowBindingCalloutsResponse(e, !1);
              });
          }
          OnRequestBindingCallouts(e) {
            let t,
              i = e.controller_type
                ? e.controller_type
                : this.GetDefaultControllerType();
            (0, l.xM)(e.app_key)
              .then(
                (n) => (
                  (t = n), (0, l.mQ)(e.app_key, i, t.current_binding_url[i])
                ),
              )
              .then((n) => {
                (Object.assign({}, e).controller_type = i),
                  this.ShowCallouts(e, i, t, n.binding_config);
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
              for (let i of e.required_options) if (!t.options[i]) return !1;
            if (e.forbidden_options)
              for (let i of e.forbidden_options) if (t.options[i]) return !1;
            return !0;
          }
          DoesActionSetHaveBindings(e, t) {
            var i, n;
            const s =
              null ===
                (n =
                  null === (i = t.bindings) || void 0 === i
                    ? void 0
                    : i[e.name]) || void 0 === n
                ? void 0
                : n.sources;
            if (Array.isArray(s) && s.length > 0) {
              let t = !1;
              for (let i of e.actions)
                if (!i.hide_callout) {
                  t = !0;
                  break;
                }
              return t;
            }
            return !1;
          }
          DetermineDefaultActionSet(e, t) {
            for (let i of e.action_sets)
              if (
                this.IsActionSetAllowed(i, t) &&
                this.DoesActionSetHaveBindings(i, t)
              )
                return i.name;
          }
          ShowCallouts(e, t, i, n) {
            let s = null,
              o = null;
            if (e.action) {
              e: for (let t of i.action_sets)
                if (this.DoesActionSetHaveBindings(t, n))
                  for (let i of t.actions)
                    if (i.name.toUpperCase() == e.action.toUpperCase()) {
                      s = t.name;
                      break e;
                    }
              o = e.action.toUpperCase();
            } else
              s = e.action_sets
                ? e.action_sets[0]
                : this.DetermineDefaultActionSet(i, n);
            s &&
              this.setState({
                actionManifest: i,
                bindingConfig: n,
                sActionSet: s,
                sRestrictToAction: o,
                sAppKey: e.app_key,
                sControllerType: t,
              });
          }
          ComputeCalloutsForActionSet(e) {
            let t = [],
              i = this.state.bindingConfig.bindings[e.name];
            if (i && i.sources)
              for (let n of i.sources)
                if (n.inputs)
                  for (let i of Object.keys(n.inputs)) {
                    let s = n.inputs[i];
                    if (!s.output) continue;
                    if (
                      this.state.sRestrictToAction &&
                      s.output.toUpperCase() != this.state.sRestrictToAction
                    )
                      continue;
                    let o = n.path.indexOf("/input");
                    if (-1 == o) continue;
                    let a = {
                        device_path: n.path.substring(0, o),
                        input_path: n.path.substring(o),
                        mode: n.mode,
                        slot: i,
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
              i = this.state.bindingConfig.bindings[e.name];
            if (i && i.chords)
              for (let n of i.chords) {
                if (!n.inputs || !n.output) continue;
                if (
                  this.state.sRestrictToAction &&
                  n.output.toUpperCase() != this.state.sRestrictToAction
                )
                  continue;
                let i = e.actions.find(
                  (e) => e.name.toUpperCase() == n.output.toUpperCase(),
                );
                if (!i) continue;
                let s = { inputs: [], localized_action_name: i.localized_name };
                for (let e of n.inputs) {
                  if (2 != e.length) continue;
                  let t = e[0].indexOf("/input");
                  if (-1 == t) continue;
                  let i = {
                    device_path: e[0].substring(0, t),
                    input_path: e[0].substring(t),
                    slot: e[1],
                  };
                  s.inputs.push(i);
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
            for (let i of this.state.actionManifest.action_sets)
              (i.name != this.state.sActionSet &&
                i.display_with != this.state.sActionSet) ||
                ((e = e.concat(this.ComputeCalloutsForActionSet(i))),
                (t = t.concat(this.ComputeChordCalloutsForActionSet(i))));
            return this.GroupCallouts(e, t);
          }
          GroupCallouts(e, t) {
            let i = {};
            for (let t of e) {
              let e = t.device_path.toLowerCase();
              i.hasOwnProperty(e) ||
                (i[e] = { device_path: e, input_callouts: {}, chords: [] });
              let n = i[e];
              n.input_callouts.hasOwnProperty(t.input_path) ||
                (n.input_callouts[t.input_path] = {
                  input_path: t.input_path,
                  slot_callouts: [],
                }),
                n.input_callouts[t.input_path].slot_callouts.push(t);
            }
            for (let e of t) {
              if (0 == e.inputs.length) continue;
              let t = e.inputs[0].device_path.toLowerCase(),
                n = !1;
              for (let i of e.inputs)
                if (i.device_path.toLowerCase() != t) {
                  n = !0;
                  break;
                }
              n
                ? console.log(
                    "chord is multi-device, which we don't know how to draw yet",
                    e,
                  )
                : i[t].chords.push(e);
            }
            return i;
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
              i = {
                device_path: this.state.tutorialCallout.device_path,
                input_callouts: {},
                chords: [],
              };
            i.input_callouts[this.state.tutorialCallout.input_path] = t;
            let n = {};
            return (
              (n[this.state.tutorialCallout.device_path] = i),
              s.createElement(S, {
                devices: n,
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
                let i = "ActionSetName ButtonControl";
                e.name == this.state.sActionSet && (i += " ActionSetSelected"),
                  t.push(
                    s.createElement(
                      p.$,
                      {
                        className: i,
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
            let i = d.s.GetApp(this.state.sAppKey);
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
                              i &&
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
        (0, n.Cg)([a.o], E.prototype, "OnShouldShowBindingCallouts", null),
          (0, n.Cg)([a.o], E.prototype, "OnRequestBindingCallouts", null),
          (0, n.Cg)([a.o], E.prototype, "OnCancelBindingCallouts", null),
          (0, n.Cg)([a.o], E.prototype, "OnRequestTutorialCallout", null),
          (0, n.Cg)([a.o], E.prototype, "OnCloseCallouts", null),
          (E = (0, n.Cg)([m.PA], E)),
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
    i = {};
  function n(e) {
    var s = i[e];
    if (void 0 !== s) return s.exports;
    var o = (i[e] = { exports: {} });
    return t[e].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.m = t),
    (e = []),
    (n.O = (t, i, s, o) => {
      if (!i) {
        var a = 1 / 0;
        for (c = 0; c < e.length; c++) {
          for (var [i, s, o] = e[c], r = !0, l = 0; l < i.length; l++)
            (!1 & o || a >= o) && Object.keys(n.O).every((e) => n.O[e](i[l]))
              ? i.splice(l--, 1)
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
      e[c] = [i, s, o];
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
    (n.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e = { 241: 0, 797: 0, 527: 0, 500: 0 };
      n.O.j = (t) => 0 === e[t];
      var t = (t, i) => {
          var s,
            o,
            [a, r, l] = i,
            u = 0;
          if (a.some((t) => 0 !== e[t])) {
            for (s in r) n.o(r, s) && (n.m[s] = r[s]);
            if (l) var c = l(n);
          }
          for (t && t(i); u < a.length; u++)
            (o = a[u]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return n.O(c);
        },
        i = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      i.forEach(t.bind(null, 0)), (i.push = t.bind(null, i.push.bind(i)));
    })();
  var s = n.O(
    void 0,
    [967, 991, 305, 527, 452, 170, 537, 500, 554, 458, 542],
    () => n(1278),
  );
  s = n.O(s);
})(); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/bindingcallouts.js.map
