var CLSTAMP = "10590646";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [148],
  {
    8472: (e, t, r) => {
      var s = r(1635),
        o = r(3236),
        n = r(3496);
      class i extends n._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "audiosource";
        }
        buildNode(e, t) {
          const r = this.createSgNode(t);
          return (
            (r.properties.name = this.props.name),
            (r.properties.channel = this.props.channel),
            (r.properties.debug = this.props.debug),
            [e, r]
          );
        }
      }
      (0, s.Cg)([o.o], i.prototype, "buildNode", null);
    },
    6417: (e, t, r) => {
      var s = r(1635),
        o = r(3496),
        n = r(3236);
      class i extends o._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "dashboardtransform";
        }
        buildNode(e, t) {
          var r, s;
          const o = this.createSgNode(t);
          return (
            (o.properties.continuous_relatch =
              null !== (r = this.props.bContinuousRelatch) &&
              void 0 !== r &&
              r),
            (o.properties.free_dashboard_transform =
              null !== (s = this.props.bFreeDashboardTransform) &&
              void 0 !== s &&
              s),
            [e, o]
          );
        }
      }
      (0, s.Cg)([n.o], i.prototype, "buildNode", null);
    },
    2303: (e, t, r) => {
      r(6540);
      var s = r(3496);
      s._J;
    },
    5227: (e, t, r) => {
      r(6540);
      var s = r(3496);
      s._J;
    },
    6847: (e, t, r) => {
      var s = r(1635),
        o = r(3496),
        n = r(3236);
      class i extends o._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "ltcquad";
        }
        buildNode(e, t) {
          const r = this.createSgNode(t);
          if (
            ((r.properties.width = this.props.width),
            (r.properties.height = this.props.height),
            (r.properties["target-id"] = this.props.target_id),
            (r.properties["near-z"] = this.props["near-z"]),
            (r.properties["far-z"] = this.props["far-z"]),
            (r.properties.debug = this.props.debug),
            this.props.diffuse)
          ) {
            let e = this.props.diffuse;
            (r.properties["diffuse-resolution"] = e.resolution),
              (r.properties["diffuse-size"] = e.size);
          }
          if (this.props.specular) {
            let e = this.props.specular;
            if ("string" == typeof e.color) r.properties.color = e.color;
            else {
              let t = (0, o.RH)(e.color, { r: 0, g: 0, b: 0 });
              r.properties.color = [t.r, t.g, t.b];
            }
          }
          return [e, r];
        }
      }
      (0, s.Cg)([n.o], i.prototype, "buildNode", null);
    },
    6186: (e, t, r) => {
      var s = r(1635),
        o = r(3496),
        n = r(3236),
        i = r(5723);
      class a extends o._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "mountable";
        }
        buildNode(e, t) {
          return [e, this.createSgNode(t)];
        }
      }
      (0, s.Cg)([n.o], a.prototype, "buildNode", null);
      class p extends o._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "mountedscenegraph";
        }
        buildNode(e, t) {
          const r = this.createSgNode(t);
          return (
            (r.properties.mountable_id = (0, i.bl)(this.props.mountedId)),
            [e, r]
          );
        }
      }
      (0, s.Cg)([n.o], p.prototype, "buildNode", null);
    },
    5830: (e, t, r) => {
      var s = r(1635),
        o = r(3496),
        n = r(3236);
      class i extends o._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "opacity";
        }
        buildNode(e, t) {
          const r = this.createSgNode(t);
          return (r.properties.opacity = (0, o.kJ)(this.props.value)), [e, r];
        }
      }
      (0, s.Cg)([n.o], i.prototype, "buildNode", null);
    },
    7350: (e, t, r) => {
      var s,
        o = r(1635),
        n = r(3496),
        i = r(3236),
        a = r(5723);
      !(function (e) {
        (e[(e.None = 0)] = "None"), (e[(e.Backface = 1)] = "Backface");
      })(s || (s = {}));
      class p extends n._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "rendermodel";
        }
        buildNode(e, t) {
          const r = this.createSgNode(t);
          if (
            ((r.properties.source = this.props.source),
            (r.properties["texture-id"] = (0, a.bl)(this.props["texture-id"])),
            (r.properties["input-path"] = this.props["input-path"]),
            this.props.fresnel)
          ) {
            let e = this.props.fresnel;
            if ("string" == typeof e.color) r.properties.color = e.color;
            else {
              let t = (0, n.RH)(e.color, { r: 0, g: 0, b: 0 });
              r.properties.color = [t.r, t.g, t.b];
            }
            (r.properties.opacity = e.opacity ? e.opacity : 1),
              (r.properties.strength = e.strength ? e.strength : 1);
          }
          return (
            (r.properties.wireframe = this.props.wireframe),
            (r.properties.solid = this.props.solid),
            (r.properties.culling = this.props.culling),
            (r.properties.stencil_mask = this.props.stencil_mask),
            (r.properties["no-depth-write"] = this.props["no-depth-write"]),
            (r.properties["no-depth-test"] = this.props["no-depth-test"]),
            [e, r]
          );
        }
      }
      (0, o.Cg)([i.o], p.prototype, "buildNode", null);
    },
    5459: (e, t, r) => {
      var s = r(1635),
        o = r(3496),
        n = r(3236);
      class i extends o._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "reparent-to-panel";
        }
        buildNode(e, t) {
          const r = this.createSgNode(t),
            s = Object.assign(Object.assign({}, e), {
              bInsideReparentedPanel: !0,
              currentPanel: null,
            });
          return (
            this.props.parent_overlay_key &&
              (r.properties["parent-overlay-key"] =
                this.props.parent_overlay_key),
            [s, r]
          );
        }
      }
      (0, s.Cg)([n.o], i.prototype, "buildNode", null);
    },
    8715: (e, t, r) => {
      var s = r(1635),
        o = r(3496),
        n = r(3236);
      class i extends o._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "resize-handle";
        }
        buildNode(e, t) {
          const r = this.createSgNode(t);
          return (
            (r.properties["target-id"] = this.props.target_id),
            (r.properties["is-active"] = this.props.is_active),
            [e, r]
          );
        }
      }
      (0, s.Cg)([n.o], i.prototype, "buildNode", null);
    },
    5723: (e, t, r) => {
      r.d(t, {
        Lx: () => N,
        Oe: () => C,
        Tu: () => u,
        X4: () => d,
        bl: () => k,
        my: () => O,
        w5: () => w,
      });
      var s = r(1635),
        o = r(2824);
      function n(e, t) {
        let r = e.getAttribute(t);
        if (r && r.length > 0) {
          if ("undefined" == r) return;
          let e = [];
          for (let t of r.split(" ")) 0 != t.length && e.push(parseFloat(t));
          if (e.length > 0) return e;
        }
      }
      function i(e, t) {
        let r = e.getAttribute(t);
        if (r && r.length > 0) return parseFloat(r);
      }
      function a(e, t) {
        let r = e.getAttribute(t);
        if (r && r.length > 0) return parseInt(r);
      }
      function p(e, t) {
        let r = e.getAttribute(t);
        if (r && r.length > 0)
          return (
            "true" == r ||
            (r.length > 0 && 0 != parseInt(r) && !isNaN(parseInt(r)))
          );
      }
      function l(e, t) {
        let r = e.getAttribute(t);
        if (r && r.length > 0) return r;
      }
      function c(e, t) {
        return k(l(e, t));
      }
      function u(e, t) {
        let r = { type: e, properties: {} };
        return (
          t.id && (r.properties.id = k(t.id)),
          (r.properties.sgid = a(t, "sgid")),
          r
        );
      }
      function d() {
        return null === VRHTML || void 0 === VRHTML
          ? void 0
          : VRHTML.VROverlay.ThisOverlayHandle();
      }
      function h(e, t) {
        let [r, s] = (function (e, t) {
            let r = t.buildNode;
            if (r) return r(e, t);
            let s = Object.assign({}, e),
              o = null;
            switch (t.nodeName.toUpperCase()) {
              case "VSG-TRANSFORM":
                (o = u("transform", t)),
                  (o.properties.translation = n(t, "translation")),
                  (o.properties.rotation = n(t, "rotation")),
                  (o.properties.scale = n(t, "scale")),
                  (o.properties["curvature-pitch"] = i(t, "curvature-pitch")),
                  (o.properties["transform-path"] = l(t, "transform-path")),
                  (o.properties["projection-constraint"] = a(
                    t,
                    "projection-constraint",
                  )),
                  (o.properties["invert-parent-panel-pitch"] = p(
                    t,
                    "invert-parent-panel-pitch",
                  )),
                  (o.properties["ignore-parent-scale"] = p(
                    t,
                    "ignore-parent-scale",
                  )),
                  (o.properties["parent-path"] = l(t, "parent-path")),
                  (o.properties["parent-origin"] = l(t, "parent-origin")),
                  (o.properties["parent-id"] = c(t, "parent-id")),
                  (o.properties["frame-resize-scale-factor"] = i(
                    t,
                    "frame-resize-scale-factor",
                  ));
                break;
              case "VSG-TRACKING-STATE-VISIBILITY":
                (o = u("trackingstatevisibility", t)),
                  (o.properties["visible-0dof"] = p(t, "visible-0dof")),
                  (o.properties["visible-3dof"] = p(t, "visible-3dof")),
                  (o.properties["visible-6dof"] = p(t, "visible-6dof"));
                break;
              case "VSG-ELASTIC-HEAD-TRANSFORM":
                (o = u("elasticheadtransform", t)),
                  (o.properties["rotation-start-angle-threshold"] = i(
                    t,
                    "rotation-start-angle-threshold",
                  )),
                  (o.properties["rotation-stop-angle-threshold"] = i(
                    t,
                    "rotation-stop-angle-threshold",
                  )),
                  (o.properties["rotation-ease-in-time"] = i(
                    t,
                    "rotation-ease-in-time",
                  )),
                  (o.properties["rotation-ease-in-power"] = i(
                    t,
                    "rotation-ease-in-power",
                  )),
                  (o.properties["rotation-ease-out-angle-threshold"] = i(
                    t,
                    "rotation-ease-out-angle-threshold",
                  )),
                  (o.properties["rotation-ease-out-power"] = i(
                    t,
                    "rotation-ease-out-power",
                  )),
                  (o.properties["rotation-min-angular-velocity"] = i(
                    t,
                    "rotation-min-angular-velocity",
                  )),
                  (o.properties["rotation-max-angular-velocity"] = i(
                    t,
                    "rotation-max-angular-velocity",
                  )),
                  (o.properties["translation-start-distance-threshold"] = i(
                    t,
                    "translation-start-distance-threshold",
                  )),
                  (o.properties["translation-stop-distance-threshold"] = i(
                    t,
                    "translation-stop-distance-threshold",
                  )),
                  (o.properties["translation-ease-in-time"] = i(
                    t,
                    "translation-ease-in-time",
                  )),
                  (o.properties["translation-ease-in-power"] = i(
                    t,
                    "translation-ease-in-power",
                  )),
                  (o.properties["translation-ease-out-distance-threshold"] = i(
                    t,
                    "translation-ease-out-distance-threshold",
                  )),
                  (o.properties["translation-ease-out-power"] = i(
                    t,
                    "translation-ease-out-power",
                  )),
                  (o.properties["translation-velocity"] = i(
                    t,
                    "translation-velocity",
                  )),
                  (o.properties.enabled = p(t, "enabled")),
                  (o.properties["lock-to-horizon"] = p(t, "lock-to-horizon")),
                  (o.properties["translation-parent"] = a(
                    t,
                    "translation-parent",
                  )),
                  (o.properties["rotation-translation-change-together"] = p(
                    t,
                    "rotation-translation-change-together",
                  ));
                break;
              case "VSG-LINE":
                (o = u("line", t)),
                  (o.properties["target-id"] = c(t, "target-id")),
                  (o.properties.thickness = i(t, "thickness")),
                  (o.properties["start-buffer"] = i(t, "start-buffer")),
                  (o.properties["end-buffer"] = i(t, "end-buffer"));
                break;
              case "VSG-LINE-CONSTRAINED-TRANSFORM":
                (o = u("line-constrained-transform", t)),
                  (o.properties["target-id"] = c(t, "target-id")),
                  (o.properties["source-id"] = c(t, "source-id")),
                  (o.properties["source-distance"] = i(t, "source-distance")),
                  (o.properties["target-limit"] = i(t, "target-limit"));
                break;
              case "VSG-CALLOUT-TRANSFORM":
                (o = u("callout-transform", t)),
                  (o.properties.offset = n(t, "offset"));
                break;
              case "VSG-HEAD-FACING-TRANSFORM":
                o = u("head-facing-transform", t);
                break;
              case "VSG-PIN-TO-VIEW-TRANSFORM":
                (o = u("pin-to-view-transform", t)),
                  (o.properties["offscreen-z-depth"] = i(
                    t,
                    "offscreen-z-depth",
                  )),
                  (o.properties["off-axis-limit"] = i(t, "off-axis-limit")),
                  (o.properties["transition-limit"] = i(t, "transition-limit"));
                break;
              case "VSG-GRAB-TRANSFORM":
                (o = u("grab-transform", t)),
                  (o.properties["parent-path"] = l(t, "parent-path")),
                  (o.properties.translation = n(t, "translation")),
                  (o.properties.rotation = n(t, "rotation")),
                  (o.properties.scale = n(t, "scale")),
                  (o.properties["should-head-align"] = p(
                    t,
                    "should-head-align",
                  )),
                  (o.properties["stop-distance"] = i(t, "stop-distance")),
                  (o.properties["start-angle"] = i(t, "start-angle")),
                  (o.properties["start-quat-difference"] = i(
                    t,
                    "start-quat-difference",
                  )),
                  (o.properties["stop-quat-difference"] = i(
                    t,
                    "stop-quat-difference",
                  )),
                  (o.properties["scale-margin"] = i(t, "scale-margin")),
                  (o.properties["lerp-speed"] = i(t, "lerp-speed")),
                  (o.properties["min-distance"] = i(t, "min-distance")),
                  (o.properties["max-distance"] = i(t, "max-distance")),
                  (o.properties["one-to-one-radius"] = i(
                    t,
                    "one-to-one-radius",
                  )),
                  (o.properties["max-x-squared-contribution"] = i(
                    t,
                    "max-x-squared-contribution",
                  )),
                  (o.properties["acceleration-factor-x-coefficient"] = i(
                    t,
                    "acceleration-factor-x-coefficient",
                  )),
                  (o.properties["acceleration-factor-x-squared-coefficient"] =
                    i(t, "acceleration-factor-x-squared-coefficient")),
                  (o.properties["acceleration-factor-scale-term"] = i(
                    t,
                    "acceleration-factor-scale-term",
                  )),
                  (o.properties["remote-transform-tx"] = i(
                    t,
                    "remote-transform-tx",
                  )),
                  (o.properties["reset-on-recenter"] = p(
                    t,
                    "reset-on-recenter",
                  ));
            }
            return [s, o];
          })(e, t),
          o = [];
        for (let e = 0; e < t.children.length; e++) {
          let s = t.children.item(e);
          if (s.children) {
            let e = h(r, s);
            e && (o = o.concat(e));
          }
        }
        return r.bShouldAbort
          ? null
          : s
            ? (o.length > 0 && (s.children = o), [s])
            : o.length > 0
              ? 1 == o.length
                ? o
                : [{ children: o }]
              : null;
      }
      let g,
        m,
        S,
        f,
        b = [],
        v = null,
        y = null,
        _ = !0,
        R = null;
      function C(e, t, r) {
        (g = e),
          (m = t),
          (S = r),
          console.log("Setting owning overlay key to " + e);
      }
      function k(e) {
        return e
          ? (function (e) {
              return e && e.includes("::");
            })(e)
            ? e
            : w() + "::" + e
          : null;
      }
      function w() {
        var e;
        return null !==
          (e =
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VROverlay.ThisOverlayKey()) && void 0 !== e
          ? e
          : g;
      }
      function N(e) {
        b.push(e), O();
      }
      function O() {
        v ||
          (v = window.setTimeout(
            () =>
              (0, s.sH)(this, void 0, void 0, function* () {
                let e = document.body;
                m && (e = m);
                let t = {
                  type: "root",
                  rootproperties: {
                    relatchDashboardTransform: f,
                    allowDismissOnClick: _,
                    sceneColorCorrection: R,
                  },
                  children: h(
                    {
                      currentPanel: null,
                      bInsideReparentedPanel: !1,
                      bShouldAbort: !1,
                    },
                    e,
                  ),
                };
                y ||
                  (console.log("Initializing sg_mailbox"),
                  (y = new o._n()),
                  yield y.Init("sg_mailbox", S));
                let r = {
                  type: "update_scene_graph",
                  owning_overlay_key: w(),
                  scene_graph: t,
                  retired_sgids: b,
                };
                y.SendMessage("vrcompositor_systemlayer", r),
                  (v = null),
                  (b = []),
                  (f = !1);
              }),
            0,
          ));
      }
    },
    1230: (e, t, r) => {
      var s = r(1635),
        o = r(3496),
        n = r(3236);
      class i extends o._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return Array.isArray(this.props.color) && this.props.color.length > 1
            ? "tint-anim"
            : "tint";
        }
        buildNode(e, t) {
          const r = this.createSgNode(t);
          return (
            this.props.color
              ? "string" == typeof this.props.color
                ? (r.properties.color = this.props.color)
                : Array.isArray(this.props.color)
                  ? (this.props.color.length > 0 &&
                    "string" == typeof this.props.color[0]
                      ? (r.properties.color =
                          this.props.color.length > 1
                            ? this.props.color
                            : this.props.color[0])
                      : (r.properties.color = this.props.color
                          .map((e) => [e.r, e.g, e.b])
                          .reduce((e, t) => e.concat(t), [])),
                    (r.properties["animation-seconds"] =
                      this.props.animationSeconds))
                  : (r.properties.color = [
                      this.props.color.r,
                      this.props.color.g,
                      this.props.color.b,
                    ])
              : (r.properties.color = [1, 1, 1]),
            [e, r]
          );
        }
      }
      (0, s.Cg)([n.o], i.prototype, "buildNode", null);
    },
    3389: (e, t, r) => {
      r(2824);
    },
    7600: (e, t, r) => {
      r.d(t, { tH: () => l });
      var s = r(1635),
        o = r(6540),
        n = r(6090),
        i = r(1286),
        a = r(3236);
      p = (e) => {
        throw new Error(e.errorStr);
      };
      var p;
      class l extends o.Component {
        constructor(e) {
          super(e), (this.state = {}), (this.state.lastErrorKey = e.errorKey);
        }
        static InstallErrorReportingStore(e) {
          this.sm_ErrorReportingStore = e;
        }
        componentDidCatch(e, t) {
          const r = l.sm_ErrorReportingStore;
          r
            ? r
                .ReportError(e, {
                  strComponentStack: t.componentStack || void 0,
                })
                .then(
                  (e) =>
                    e && this.setState({ identifierHash: e.identifierHash }),
                )
            : console.warn(
                "No ErrorReportingStore - use ErrorReportingStore().Init() to configure error reporting to server",
              ),
            this.setState({
              error: { error: e, info: t },
              lastErrorKey: this.props.errorKey,
            });
        }
        Reset() {
          this.setState({ error: void 0 });
        }
        render() {
          const { children: e, fallback: t, errorKey: r } = this.props,
            { error: s, identifierHash: n, lastErrorKey: i } = this.state;
          return s && r == i
            ? void 0 !== t
              ? "function" == typeof t
                ? t(s.error)
                : t
              : l.sm_ErrorReportingStore &&
                  l.sm_ErrorReportingStore.reporting_enabled
                ? o.createElement(d, {
                    error: s,
                    identifierHash: n,
                    store: l.sm_ErrorReportingStore,
                    onRefresh: this.Reset,
                  })
                : o.createElement(u, { error: s, onDismiss: this.Reset })
            : e || null;
        }
      }
      function c(e) {
        const { enabled: t } = e,
          [r, s] = o.useState(t),
          [n, a] = o.useState(i.b);
        o.useEffect(() => {
          const e = setTimeout(() => {
            r &&
              (n > 1
                ? a(n - 1)
                : (console.warn(
                    "Auto-reloading due to triggered ErrorBoundary...",
                  ),
                  window.location.reload()));
          }, 1e3);
          return () => clearTimeout(e);
        }, [r, n]);
        const p = o.useCallback(() => {
          console.log("Auto-reload canceled."), s(!1);
        }, []);
        return (
          o.useEffect(() => {
            const e = () => {
              p();
            };
            return (
              document.addEventListener("click", e),
              () => document.removeEventListener("click", e)
            );
          }, [p]),
          t
            ? r
              ? o.createElement(
                  o.Fragment,
                  null,
                  o.createElement(
                    m,
                    null,
                    "Reloading UI in ",
                    n,
                    " seconds...",
                  ),
                  "   ",
                  o.createElement(
                    "span",
                    {
                      style: { textDecoration: "underline", cursor: "pointer" },
                      onClick: p,
                    },
                    "Cancel",
                  ),
                  o.createElement("br", null),
                )
              : o.createElement(
                  o.Fragment,
                  null,
                  o.createElement(m, null, "Auto-reload canceled."),
                  "   ",
                  o.createElement(
                    "span",
                    {
                      style: { textDecoration: "underline", cursor: "pointer" },
                      onClick: () => window.location.reload(),
                    },
                    "Reload now",
                  ),
                  o.createElement("br", null),
                )
            : null
        );
      }
      (0, s.Cg)([a.o], l.prototype, "Reset", null);
      const u = ({ error: e, onDismiss: t }) => {
          let r = e.error ? e.error.stack : "Stack missing",
            s = e.info ? e.info.componentStack : "",
            i = (e.error && e.error.message) || "unknown error";
          const a = o.useContext(n.GM);
          return o.createElement(
            h,
            null,
            o.createElement(m, null, 'Error: "', i, '"'),
            "   ",
            o.createElement(
              "span",
              {
                style: { textDecoration: "underline", cursor: "pointer" },
                onClick: t,
              },
              "(x) Dismiss",
            ),
            o.createElement("br", null),
            o.createElement(c, { enabled: null == a }),
            o.createElement(S, null, r),
            o.createElement(S, null, "The error occurred while rendering:", s),
          );
        },
        d = (e) => {
          const { error: t, onRefresh: r, identifierHash: s, store: i } = e,
            a = (t.error && t.error.message) || "unknown error",
            p = `${i.product}_${i.version}_${s}`,
            l = o.useContext(n.GM);
          return o.createElement(
            h,
            null,
            o.createElement(
              m,
              null,
              "Something went wrong while displaying this content. ",
              o.createElement(
                "span",
                {
                  style: { textDecoration: "underline", cursor: "pointer" },
                  onClick: r,
                },
                "Refresh",
              ),
            ),
            o.createElement(c, { enabled: null == l }),
            o.createElement(S, null, "Error Reference: ", p),
            o.createElement(S, null, a),
          );
        };
      function h(e) {
        return o.useContext(n.GM) || (0, n.R$)() != n.OH.Overlay
          ? o.createElement(g, Object.assign({}, e))
          : o.createElement(
              n.dL,
              {
                parent_path: "/user/head",
                translation: { y: -0.5, z: -0.9 },
                rotation: { x: -20 },
              },
              o.createElement(
                n.Zk,
                {
                  debug_name: "vr_error_container",
                  meters_per_pixel: 75e-5,
                  origin: { x: -0.5, y: -1 },
                  interactive: !0,
                },
                o.createElement(g, Object.assign({}, e)),
              ),
            );
      }
      const g = ({ children: e }) =>
          o.createElement(
            "div",
            {
              style: {
                overflow: "auto",
                marginLeft: "15px",
                color: "white",
                fontSize: "16px",
                userSelect: "auto",
                backgroundColor: "black",
              },
              className: "ErrorBoundary",
            },
            e,
          ),
        m = ({ children: e }) =>
          o.createElement(
            "h1",
            {
              style: {
                fontSize: "20px",
                display: "inline-block",
                marginTop: "15px",
                userSelect: "auto",
              },
            },
            e,
          ),
        S = ({ children: e }) =>
          o.createElement(
            "pre",
            { style: { marginTop: "15px", opacity: 0.7, userSelect: "auto" } },
            e,
          );
    },
    1651: (e, t, r) => {
      r.d(t, { l: () => n });
      var s = r(1635),
        o = (r(6540), r(3236));
      class n {
        constructor() {
          this.m_vecCallbacks = [];
        }
        Register(e) {
          this.m_vecCallbacks.push(e);
          return {
            Unregister: () => {
              const t = this.m_vecCallbacks.indexOf(e);
              t >= 0 && this.m_vecCallbacks.splice(t, 1);
            },
          };
        }
        Dispatch(...e) {
          for (const t of Array.from(this.m_vecCallbacks)) t(...e);
        }
        ClearAllCallbacks() {
          this.m_vecCallbacks = [];
        }
        CountRegistered() {
          return this.m_vecCallbacks.length;
        }
      }
      (0, s.Cg)([o.o], n.prototype, "Dispatch", null);
    },
    1295: (e, t, r) => {
      function s(e) {
        return new Promise((t) => setTimeout(t, e));
      }
      r.d(t, { IP: () => s });
    },
    1333: (e, t, r) => {
      r.d(t, { HR: () => h });
      var s = r(1635),
        o = r(3236),
        n = r(2505),
        i = r.n(n),
        a = r(7813),
        p = r(6090),
        l = r(3606),
        c = r(2402);
      const u = "change_route";
      class d {
        constructor() {
          (this.m_wsWebSocketToServer = void 0),
            (this.m_mailbox = new p._n()),
            (this.connected = !1),
            (this.settingsSchema = void 0),
            (this.settings = a.observable.map()),
            (this.systemInfo = void 0),
            (this.audioDevices = void 0),
            (this.apps = []),
            (this.probablyOwnedAppkeys = new Set()),
            (this.showInternalSettings = !1),
            (this.workshopStateChangedCanary = 1),
            (this.onRestartRequired = null),
            (this.onAppRestartRequired = null),
            (this.pendingChanges = new Map()),
            (this.route = []),
            (this.m_mapSettingsLastWriteInfo = new Map()),
            (this.m_bIsSettingApp = !1),
            (this.m_bInitStarted = !1),
            (this.GetAppList = function () {
              return new Promise(function (e, t) {
                i()
                  .get("/app/list.json")
                  .then((t) => {
                    e(t.data.apps);
                  })
                  .catch((e) => {
                    t(e);
                  });
              });
            }),
            (this.GetSettingsUGC = function () {
              return new Promise(function (e, t) {
                i()
                  .get("/settings_getugc")
                  .then((t) => {
                    e(t.data);
                  })
                  .catch((e) => {
                    t(e);
                  });
              });
            }),
            (this.ReloadSettingsSchema = function () {
              return new Promise(function (e, t) {
                i()
                  .get("/settings_reloadschema")
                  .then((t) => {
                    e(t.data);
                  })
                  .catch((e) => {
                    t(e);
                  });
              });
            }),
            (this.GetSettingsInfo = function () {
              return new Promise(function (e, t) {
                i()
                  .get("/settings_getinfo")
                  .then((t) => {
                    e(t.data);
                  })
                  .catch((e) => {
                    t(e);
                  });
              });
            }),
            (0, a.makeObservable)(this);
        }
        OpenWebSocketToHost() {
          return new Promise((e, t) => {
            console.log("Connecting vrsettings..."),
              (this.m_wsWebSocketToServer = new WebSocket(
                "ws://" + window.location.host,
              )),
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
              );
          });
        }
        Init(e) {
          return (0, s.sH)(this, void 0, void 0, function* () {
            if (this.m_bInitStarted) return;
            (this.m_bInitStarted = !0),
              (this.m_bIsSettingApp = e),
              this.m_bIsSettingApp &&
                (window.addEventListener("hashchange", this.onHashChanged),
                this.onHashChanged()),
              (0, a.autorun)(
                () => {
                  let e = [];
                  if (0 != this.pendingChanges.size) {
                    for (const [t, r] of this.pendingChanges.entries())
                      e.push({ name: t, value: r });
                    this.pendingChanges.clear(),
                      i()
                        .post("/settings_set.action", e)
                        .then((e) => {})
                        .catch((t) => {
                          console.log(
                            "Failed to save settings! This usually happens when type is set incorrectly on one of the keys in the schema. ",
                            e,
                          );
                        });
                  }
                },
                { delay: 300 },
              ),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.RegisterForDisplayModeNotSupportedEvents(
                  this.SetRestartRequired,
                );
            let t = [];
            this.m_mailbox.connected || t.push(this.ConnectMailbox()),
              t.push(this.OpenWebSocketToHost()),
              t.push(this.AwaitInitialSettingsSchema()),
              yield Promise.all(t);
          });
        }
        get MailboxName() {
          if (!this.m_bIsSettingApp) return "settings";
          switch ((0, p.R$)()) {
            case p.OH.Overlay:
              return "settings/overlay";
            case p.OH.Desktop:
              return "settings/desktop";
            default:
              return "settings/unknown";
          }
        }
        ConnectMailbox() {
          return (0, s.sH)(this, void 0, void 0, function* () {
            try {
              yield this.m_mailbox.Init(this.MailboxName),
                this.m_mailbox.RegisterHandler(
                  "workshop_state_changed",
                  this.OnWorkshopStateChangedMessage,
                ),
                this.m_mailbox.RegisterHandler(u, this.OnChangeRouteMessage),
                this.m_mailbox.RegisterHandler(
                  "app_config_changed",
                  this.OnAppConfigChangedMessage,
                ),
                this.m_mailbox.RegisterHandler(
                  "refresh_rate_change",
                  this.OnRefreshRateChangeMessage,
                );
            } catch (e) {
              console.log("Failed to open settings mailbox:" + e);
            }
          });
        }
        OnWorkshopStateChangedMessage(e) {
          this.workshopStateChangedCanary++;
        }
        OnChangeRouteMessage(e) {
          this.m_bIsSettingApp &&
            this.setRoute(e.page, e.section, e.sectionParams);
        }
        OnAppConfigChangedMessage(e) {
          return (0, s.sH)(this, void 0, void 0, function* () {
            if (e.deleted_appkeys.length)
              for (let t = this.apps.length - 1; t >= 0; t--)
                e.deleted_appkeys.indexOf(this.apps[t].key) >= 0 &&
                  this.apps.splice(t, 1);
            for (let t of e.updated_apps) {
              for (let e = 0; e < this.apps.length; e++)
                if (this.apps[e].key == t.key) {
                  !this.apps[e].is_autolaunch &&
                    t.is_autolaunch &&
                    this.SetRestartRequired(),
                    (this.apps[e] = Object.assign(
                      Object.assign(Object.assign({}, this.apps[e]), {
                        current_scene_process: !1,
                      }),
                      t,
                    )),
                    (t = null);
                  break;
                }
              t && (this.apps.push(t), this.probablyOwnedAppkeys.add(t.key));
            }
          });
        }
        OnRefreshRateChangeMessage(e) {
          this.onAppRestartRequired &&
            this.onAppRestartRequired(e.app_supports);
        }
        onHashChanged() {
          if (!this.m_bIsSettingApp) return;
          const e = window.location.hash;
          0 === e.indexOf("#")
            ? (this.route = e.substring(1).split("/"))
            : (this.route = []);
        }
        get routePage() {
          return this.route.length >= 1 ? this.route[0] : null;
        }
        get routePageSection() {
          return this.route.length >= 2 ? this.route[1] : null;
        }
        get routePageSectionParams() {
          return this.route.slice(2);
        }
        setRoutePage(e) {
          this.setRoute(e);
        }
        setRoutePageSection(e) {
          this.setRoute(this.routePage, e);
        }
        setRoutePageSectionParams(e) {
          this.setRoute(this.routePage, this.routePageSection, e);
        }
        setRoute(e, t, r) {
          if (this.m_bIsSettingApp) {
            (e = null != e ? e : ""), (r = null != r ? r : []);
            const s = t ? [e, t, ...r] : [e],
              o = s.join("/");
            window.location.hash.substring(1) != o &&
              ((window.location.hash = o), (this.route = s));
          } else
            this.m_mailbox.connected &&
              this.m_mailbox.SendMessage(this.MailboxName, {
                type: u,
                page: e,
                section: t,
                sectionParams: r,
              });
        }
        SetDashboardFadeSupression(e, t) {
          this.m_mailbox.connected &&
            this.m_mailbox.SendMessage(p.M9, {
              type: c.E,
              suppress_dashboard_fade: t,
              for_id: e,
            });
        }
        SetDashboardForceBoundsVisible(e, t, r) {
          this.m_mailbox.connected &&
            this.m_mailbox.SendMessage(p.M9, {
              type: c.Q,
              force_bounds_visible: r,
              for_overlay_key: e,
              for_id: t,
            });
        }
        SetRestartRequired() {
          this.onRestartRequired && this.onRestartRequired();
        }
        OnWebSocketOpen(e) {
          (this.connected = !0),
            this.WebSocketSend("settings_open"),
            window.addEventListener("beforeunload", () => {
              this.WebSocketSend("settings_close");
            }),
            h.GetSettingsInfo().then((e) => {
              this.systemInfo = e;
            }),
            h.GetAppList().then((e) => {
              this.OnVRAppList({ jsonid: "vr_app_list", apps: e });
            });
        }
        OnWebSocketClose(e) {
          console.log("Lost connection to host..."),
            (this.connected = !1),
            this.OpenWebSocketToHost();
        }
        WebSocketSend(e) {
          null != this.m_wsWebSocketToServer &&
            1 == this.m_wsWebSocketToServer.readyState &&
            this.m_wsWebSocketToServer.send(e);
        }
        OnWebSocketMessage(e) {
          let t = JSON.parse(e.data);
          switch (t.jsonid) {
            case "vr_settings":
              this.OnVRSettings(t);
              break;
            case "vr_settings_schema":
              this.OnVRSettingsSchema(t);
              break;
            case "vr_audio_devices":
              this.OnVRAudioDevices(t);
              break;
            case "vr_app_list":
              this.OnVRAppList(t);
              break;
            default:
              t.jsonid
                ? console.log("Received unhandled event: " + t.jsonid)
                : console.log("Received unknown message: ", t);
          }
        }
        OnVRSettings(e) {
          for (let t in e.values) {
            const r = e.values[t];
            if (
              this.settings.get(t) != r ||
              this.m_mapSettingsLastWriteInfo.has(t)
            ) {
              if (this.settingsSchema) {
                const e = this.GetSettingSchema(t);
                e && e.requires_restart && this.SetRestartRequired();
              }
              this.SetSettingValueFromServer(t, r);
            }
          }
        }
        SetSettingValueFromServer(e, t) {
          const r = 1e3 * d.SERVER_SETTING_MERGE_DEFER_DURATION;
          if (this.m_mapSettingsLastWriteInfo.has(e)) {
            let s = this.m_mapSettingsLastWriteInfo.get(e);
            if (new Date().getTime() - s.nLastUserUpdateTime < r)
              return (
                window.clearTimeout(s.nPendingServerValueUpdateTimeout),
                void (s.nPendingServerValueUpdateTimeout = window.setTimeout(
                  () => {
                    this.SetSettingValueFromServer(e, t);
                  },
                  r,
                ))
              );
            window.clearTimeout(s.nPendingServerValueUpdateTimeout),
              this.m_mapSettingsLastWriteInfo.delete(e);
          }
          this.settings.set(e, t);
        }
        UpdateLastUserWriteTimeForSetting(e) {
          const t = new Date().getTime();
          this.m_mapSettingsLastWriteInfo.has(e)
            ? (this.m_mapSettingsLastWriteInfo.get(e).nLastUserUpdateTime = t)
            : this.m_mapSettingsLastWriteInfo.set(e, {
                nLastUserUpdateTime: t,
                nPendingServerValueUpdateTimeout: 0,
              });
        }
        OnVRSettingsSchema(e) {
          null == this.settingsSchema &&
            (console.log("Got vr settings schema"),
            (this.settingsSchema = e.schema),
            (this.showInternalSettings = e.is_steamvr_main));
        }
        AwaitInitialSettingsSchema() {
          return (0, s.sH)(this, void 0, void 0, function* () {
            return (0, a.when)(() => !!this.settingsSchema);
          });
        }
        OnVRAudioDevices(e) {
          console.log("Got audio devices"), (this.audioDevices = e);
        }
        OnVRAppList(e) {
          (this.apps = e.apps),
            e.apps.map((e) => this.probablyOwnedAppkeys.add(e.key));
        }
        SettingNameMatches(e, t) {
          if (t && t.endsWith("*")) {
            let r = t.length - 1;
            return e.substr(0, r) == t.substr(0, r);
          }
          return e == t;
        }
        GetSettingSchema(e) {
          for (let t of this.settingsSchema)
            if (t.values)
              for (let r of t.values)
                if (r && this.SettingNameMatches(e, r.name)) return r;
          return null;
        }
        ResetSettingsValue(e) {
          this.SetSettingsValue(e, null);
        }
        ResetSettingsValues(...e) {
          e.forEach(this.ResetSettingsValue);
        }
        SetSettingsValue(e, t) {
          let r = this.GetSettingSchema(e);
          null != r
            ? (null != t &&
                ("int" == r.type
                  ? (t = parseInt(t))
                  : "float" == r.type
                    ? (t = parseFloat(t))
                    : "string" == r.type
                      ? (t = "" + t)
                      : "bool" == r.type && (t = !!t)),
              r.requires_restart && this.SetRestartRequired(),
              this.SetSettingsStringValueWithoutSchema(e, t))
            : console.log(
                "Tried to set setting " +
                  e +
                  " but it's not in the schema! Aborting",
              );
        }
        SetSettingsStringValueWithoutSchema(e, t) {
          if (VRHTML) {
            const r = e.split("/");
            if (4 != r.length || "" != r[0] || "settings" != r[1])
              throw new Error("bad settings path " + e);
            VRHTML.VRSettings.Set(r[2], r[3], t),
              this.settings.set(e, VRHTML.VRSettings.Get(r[2], r[3]));
          } else
            null != t && this.settings.set(e, t), this.pendingChanges.set(e, t);
          this.UpdateLastUserWriteTimeForSetting(e);
        }
        GetSettingsValue(e) {
          return (0, s.sH)(this, void 0, void 0, function* () {
            return new Promise(function (t, r) {
              i()
                .get("/settings_get", { params: { name: e } })
                .then((e) => {
                  t(e.data);
                })
                .catch((e) => {
                  r(null);
                });
            });
          });
        }
        ResetAppSettings(e) {
          return i()
            .post("/app/resetsettings", { app: e })
            .then((t) => this.GetAppSettings(e))
            .catch((e) => {});
        }
        ResetAllAppResolutionScales() {
          return i()
            .post("/app/resetallresolutionscales")
            .then((e) => !0)
            .catch((e) => {});
        }
        SetAppSettings(e, t) {
          let r = Object.assign(Object.assign({}, t), { app: e });
          i().post("/app/setsettings", r);
          for (let e = 0; e < this.apps.length; e++)
            if (this.apps[e].key == r.app) {
              !this.apps[e].is_autolaunch &&
                t.is_autolaunch &&
                this.SetRestartRequired(),
                (this.apps[e] = Object.assign(
                  Object.assign({}, this.apps[e]),
                  t,
                ));
              break;
            }
        }
        GetAppSettings(e) {
          return (0, s.sH)(this, void 0, void 0, function* () {
            return new Promise(function (t, r) {
              i()
                .get("/app/getsettings", { params: { app: e } })
                .then((e) => {
                  t(e.data);
                })
                .catch((e) => {
                  r(null);
                });
            });
          });
        }
        GetAppInfo(e) {
          return (0, s.sH)(this, void 0, void 0, function* () {
            return new Promise(function (t, r) {
              i()
                .get("/app/getinfo", { params: { app: e } })
                .then((e) => {
                  t(e.data);
                })
                .catch((e) => {
                  r(null);
                });
            });
          });
        }
        GetAppName(e) {
          var t;
          return null === (t = this.apps.find((t) => t.key == e)) ||
            void 0 === t
            ? void 0
            : t.name;
        }
        get NumSupersamplingSteps() {
          return Math.floor(4.81 / 0.02);
        }
        SliderposToSupersample(e) {
          return e > 5 ? 5 : e < 0.2 ? 0.2 : e;
        }
        get showAdvancedSettings() {
          return this.settings.get(l.F2);
        }
        set showAdvancedSettings(e) {
          this.SetSettingsValue(l.F2, e);
        }
        showBindingCallouts(e) {
          let t = { type: "request_binding_callouts", app_key: e };
          this.m_mailbox.SendMessage(p.I0, t);
        }
      }
      (d.SERVER_SETTING_MERGE_DEFER_DURATION = 1),
        (0, s.Cg)([a.observable], d.prototype, "connected", void 0),
        (0, s.Cg)([a.observable], d.prototype, "settingsSchema", void 0),
        (0, s.Cg)([a.observable], d.prototype, "settings", void 0),
        (0, s.Cg)([a.observable], d.prototype, "systemInfo", void 0),
        (0, s.Cg)([a.observable], d.prototype, "audioDevices", void 0),
        (0, s.Cg)([a.observable], d.prototype, "apps", void 0),
        (0, s.Cg)([a.observable], d.prototype, "probablyOwnedAppkeys", void 0),
        (0, s.Cg)([a.observable], d.prototype, "showInternalSettings", void 0),
        (0, s.Cg)(
          [a.observable],
          d.prototype,
          "workshopStateChangedCanary",
          void 0,
        ),
        (0, s.Cg)([a.observable], d.prototype, "pendingChanges", void 0),
        (0, s.Cg)([a.observable], d.prototype, "route", void 0),
        (0, s.Cg)([o.o], d.prototype, "OpenWebSocketToHost", null),
        (0, s.Cg)([o.o], d.prototype, "OnWorkshopStateChangedMessage", null),
        (0, s.Cg)([o.o], d.prototype, "OnChangeRouteMessage", null),
        (0, s.Cg)([o.o], d.prototype, "OnAppConfigChangedMessage", null),
        (0, s.Cg)([o.o], d.prototype, "OnRefreshRateChangeMessage", null),
        (0, s.Cg)([a.action.bound], d.prototype, "onHashChanged", null),
        (0, s.Cg)([a.computed], d.prototype, "routePage", null),
        (0, s.Cg)([a.computed], d.prototype, "routePageSection", null),
        (0, s.Cg)([a.computed], d.prototype, "routePageSectionParams", null),
        (0, s.Cg)([a.action], d.prototype, "setRoutePage", null),
        (0, s.Cg)([a.action], d.prototype, "setRoutePageSection", null),
        (0, s.Cg)([a.action], d.prototype, "setRoutePageSectionParams", null),
        (0, s.Cg)([a.action], d.prototype, "setRoute", null),
        (0, s.Cg)([o.o], d.prototype, "SetDashboardFadeSupression", null),
        (0, s.Cg)([o.o], d.prototype, "SetDashboardForceBoundsVisible", null),
        (0, s.Cg)([o.o], d.prototype, "SetRestartRequired", null),
        (0, s.Cg)([o.o], d.prototype, "OnWebSocketOpen", null),
        (0, s.Cg)([o.o], d.prototype, "OnWebSocketClose", null),
        (0, s.Cg)([o.o], d.prototype, "WebSocketSend", null),
        (0, s.Cg)([o.o], d.prototype, "OnWebSocketMessage", null),
        (0, s.Cg)([a.action], d.prototype, "OnVRSettings", null),
        (0, s.Cg)([a.action], d.prototype, "SetSettingValueFromServer", null),
        (0, s.Cg)([a.action], d.prototype, "OnVRSettingsSchema", null),
        (0, s.Cg)([a.action.bound], d.prototype, "ResetSettingsValue", null),
        (0, s.Cg)([a.action], d.prototype, "ResetSettingsValues", null),
        (0, s.Cg)([a.action], d.prototype, "SetSettingsValue", null),
        (0, s.Cg)(
          [a.action],
          d.prototype,
          "SetSettingsStringValueWithoutSchema",
          null,
        ),
        (0, s.Cg)([a.computed], d.prototype, "NumSupersamplingSteps", null);
      const h = new d();
      window.VRSettingsState = h;
    },
    7727: (e, t, r) => {
      r.d(t, { N: () => n });
      var s = r(6540);
      const o = s.createContext({ frame: void 0, page: void 0 });
      function n() {
        return s.useContext(o);
      }
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~b7706121d.js.map
