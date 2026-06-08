var CLSTAMP = "10715262";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [148],
  {
    8472: (e, t, s) => {
      var r = s(1635),
        o = s(3236),
        i = s(3496),
        n = s(4367);
      class a extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "audiosource";
        }
        buildNode(e, t) {
          const s = this.createSgNode(t);
          return (
            (s.properties.name = this.props.name),
            (s.properties.channel = this.props.channel),
            (s.properties.debug = this.props.debug),
            (s.properties["dock-location"] =
              this.props.dockLocation || n.yW.Dashboard),
            [e, s]
          );
        }
      }
      (0, r.Cg)([o.o], a.prototype, "buildNode", null);
    },
    6417: (e, t, s) => {
      var r = s(1635),
        o = s(3496),
        i = s(3236);
      class n extends o._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "dashboardtransform";
        }
        buildNode(e, t) {
          var s, r;
          const o = this.createSgNode(t);
          return (
            (o.properties.continuous_relatch =
              null !== (s = this.props.bContinuousRelatch) &&
              void 0 !== s &&
              s),
            (o.properties.free_dashboard_transform =
              null !== (r = this.props.bFreeDashboardTransform) &&
              void 0 !== r &&
              r),
            [e, o]
          );
        }
      }
      (0, r.Cg)([i.o], n.prototype, "buildNode", null);
    },
    1321: (e, t, s) => {
      var r = s(1635),
        o = s(3496),
        i = s(3236);
      class n extends o._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "grab-scale";
        }
        buildNode(e, t) {
          var s, r, o, i, n, a;
          const p = this.createSgNode(t);
          return (
            (p.properties["event-panel-sgid"] =
              null === (s = this.props) || void 0 === s
                ? void 0
                : s.event_panel_sgid),
            (p.properties["is-active"] =
              null === (r = this.props) || void 0 === r ? void 0 : r.is_active),
            (p.properties["base-distance"] =
              null === (o = this.props) || void 0 === o
                ? void 0
                : o.base_distance),
            (p.properties["scroll-speed"] =
              null === (i = this.props) || void 0 === i
                ? void 0
                : i.scroll_speed),
            (p.properties["min-distance"] =
              null === (n = this.props) || void 0 === n
                ? void 0
                : n.min_distance),
            (p.properties["max-distance"] =
              null === (a = this.props) || void 0 === a
                ? void 0
                : a.max_distance),
            [e, p]
          );
        }
      }
      (0, r.Cg)([i.o], n.prototype, "buildNode", null);
    },
    2303: (e, t, s) => {
      s(6540);
      var r = s(3496);
      r._J;
    },
    5227: (e, t, s) => {
      s(6540);
      var r = s(3496);
      r._J;
    },
    6847: (e, t, s) => {
      var r = s(1635),
        o = s(3496),
        i = s(3236);
      class n extends o._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "ltcquad";
        }
        buildNode(e, t) {
          const s = this.createSgNode(t);
          if (
            ((s.properties.width = this.props.width),
            (s.properties.height = this.props.height),
            (s.properties["target-id"] = this.props.target_id),
            (s.properties["near-z"] = this.props["near-z"]),
            (s.properties["far-z"] = this.props["far-z"]),
            (s.properties.debug = this.props.debug),
            this.props.diffuse)
          ) {
            let e = this.props.diffuse;
            (s.properties["diffuse-resolution"] = e.resolution),
              (s.properties["diffuse-size"] = e.size);
          }
          if (this.props.specular) {
            let e = this.props.specular;
            if ("string" == typeof e.color) s.properties.color = e.color;
            else {
              let t = (0, o.RH)(e.color, { r: 0, g: 0, b: 0 });
              s.properties.color = [t.r, t.g, t.b];
            }
          }
          return [e, s];
        }
      }
      (0, r.Cg)([i.o], n.prototype, "buildNode", null);
    },
    6186: (e, t, s) => {
      var r = s(1635),
        o = s(3496),
        i = s(3236),
        n = s(5723);
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
      (0, r.Cg)([i.o], a.prototype, "buildNode", null);
      class p extends o._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "mountedscenegraph";
        }
        buildNode(e, t) {
          const s = this.createSgNode(t);
          return (
            (s.properties.mountable_id = (0, n.bl)(this.props.mountedId)),
            [e, s]
          );
        }
      }
      (0, r.Cg)([i.o], p.prototype, "buildNode", null);
    },
    5830: (e, t, s) => {
      var r = s(1635),
        o = s(3496),
        i = s(3236);
      class n extends o._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "opacity";
        }
        buildNode(e, t) {
          const s = this.createSgNode(t);
          return (s.properties.opacity = (0, o.kJ)(this.props.value)), [e, s];
        }
      }
      (0, r.Cg)([i.o], n.prototype, "buildNode", null);
    },
    7350: (e, t, s) => {
      var r,
        o = s(1635),
        i = s(3496),
        n = s(3236),
        a = s(5723);
      !(function (e) {
        (e[(e.None = 0)] = "None"), (e[(e.Backface = 1)] = "Backface");
      })(r || (r = {}));
      class p extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "rendermodel";
        }
        buildNode(e, t) {
          const s = this.createSgNode(t);
          if (
            ((s.properties.source = this.props.source),
            (s.properties["texture-id"] = (0, a.bl)(this.props["texture-id"])),
            (s.properties["input-path"] = this.props["input-path"]),
            this.props.fresnel)
          ) {
            let e = this.props.fresnel;
            if ("string" == typeof e.color) s.properties.color = e.color;
            else {
              let t = (0, i.RH)(null == e ? void 0 : e.color, {
                r: 0,
                g: 0,
                b: 0,
              });
              s.properties.color = [t.r, t.g, t.b];
            }
            (s.properties.opacity = e.opacity ? e.opacity : 1),
              (s.properties.strength = e.strength ? e.strength : 1);
          }
          return (
            (s.properties.wireframe = this.props.wireframe),
            (s.properties.solid = this.props.solid),
            (s.properties.culling = this.props.culling),
            (s.properties.stencil_mask = this.props.stencil_mask),
            (s.properties["no-depth-write"] = this.props["no-depth-write"]),
            (s.properties["no-depth-test"] = this.props["no-depth-test"]),
            [e, s]
          );
        }
      }
      (0, o.Cg)([n.o], p.prototype, "buildNode", null);
      class l extends i._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "rendermodel-component-overrides";
        }
        buildNode(e, t) {
          const {
              action_name: s,
              throbbing: r,
              throbColor: o = "#1a9fff",
              throbPeriod: i = 1.25,
              throbContrast: n = 2,
              throbMinBlend: a = 0,
              throbMaxBlend: p = 1,
            } = this.props,
            l = this.createSgNode(t);
          return (
            (l.properties["action-name"] = s),
            (l.properties.throbbing = r),
            (l.properties["throb-color"] = o),
            (l.properties["throb-period"] = i),
            (l.properties["throb-contrast"] = n),
            (l.properties["throb-min-blend"] = a),
            (l.properties["throb-max-blend"] = p),
            [e, l]
          );
        }
      }
      (0, o.Cg)([n.o], l.prototype, "buildNode", null);
    },
    5459: (e, t, s) => {
      var r = s(1635),
        o = s(3496),
        i = s(3236);
      class n extends o._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "reparent-to-panel";
        }
        buildNode(e, t) {
          const s = this.createSgNode(t),
            r = Object.assign(Object.assign({}, e), {
              bInsideReparentedPanel: !0,
              currentPanel: void 0,
            });
          return (
            this.props.parent_overlay_key &&
              (s.properties["parent-overlay-key"] =
                this.props.parent_overlay_key),
            [r, s]
          );
        }
      }
      (0, r.Cg)([i.o], n.prototype, "buildNode", null);
    },
    8715: (e, t, s) => {
      var r = s(1635),
        o = s(3496),
        i = s(3236);
      class n extends o._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "resize-handle";
        }
        buildNode(e, t) {
          const s = this.createSgNode(t);
          return (
            (s.properties["target-id"] = this.props.target_id),
            (s.properties["is-active"] = this.props.is_active),
            [e, s]
          );
        }
      }
      (0, r.Cg)([i.o], n.prototype, "buildNode", null);
    },
    5723: (e, t, s) => {
      s.d(t, {
        Lx: () => N,
        Oe: () => C,
        Tu: () => u,
        X4: () => d,
        bl: () => w,
        my: () => T,
        w5: () => k,
      });
      var r = s(1635),
        o = s(2824);
      function i(e, t) {
        let s = e.getAttribute(t);
        if (s && s.length > 0) {
          if ("undefined" == s) return;
          let e = [];
          for (let t of s.split(" ")) 0 != t.length && e.push(parseFloat(t));
          if (e.length > 0) return e;
        }
      }
      function n(e, t) {
        let s = e.getAttribute(t);
        if (s && s.length > 0) return parseFloat(s);
      }
      function a(e, t) {
        let s = e.getAttribute(t);
        if (s && s.length > 0) return parseInt(s);
      }
      function p(e, t) {
        let s = e.getAttribute(t);
        if (s && s.length > 0)
          return (
            "true" == s ||
            (s.length > 0 && 0 != parseInt(s) && !isNaN(parseInt(s)))
          );
      }
      function l(e, t) {
        let s = e.getAttribute(t);
        if (s && s.length > 0) return s;
      }
      function c(e, t) {
        return w(l(e, t));
      }
      function u(e, t) {
        var s;
        let r = { type: e, properties: {} };
        return (
          t.id &&
            (r.properties.id =
              null !== (s = w(t.id)) && void 0 !== s ? s : void 0),
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
        let [s, r] = (function (e, t) {
            let s = t.buildNode;
            if (s) return s(e, t);
            let r = Object.assign({}, e),
              o = null;
            switch (t.nodeName.toUpperCase()) {
              case "VSG-TRANSFORM":
                (o = u("transform", t)),
                  (o.properties.translation = i(t, "translation")),
                  (o.properties.rotation = i(t, "rotation")),
                  (o.properties.scale = i(t, "scale")),
                  (o.properties["curvature-pitch"] = n(t, "curvature-pitch")),
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
                  (o.properties["frame-resize-scale-factor"] = n(
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
                  (o.properties["rotation-start-angle-threshold"] = n(
                    t,
                    "rotation-start-angle-threshold",
                  )),
                  (o.properties["rotation-stop-angle-threshold"] = n(
                    t,
                    "rotation-stop-angle-threshold",
                  )),
                  (o.properties["rotation-ease-in-time"] = n(
                    t,
                    "rotation-ease-in-time",
                  )),
                  (o.properties["rotation-ease-in-power"] = n(
                    t,
                    "rotation-ease-in-power",
                  )),
                  (o.properties["rotation-ease-out-angle-threshold"] = n(
                    t,
                    "rotation-ease-out-angle-threshold",
                  )),
                  (o.properties["rotation-ease-out-power"] = n(
                    t,
                    "rotation-ease-out-power",
                  )),
                  (o.properties["rotation-min-angular-velocity"] = n(
                    t,
                    "rotation-min-angular-velocity",
                  )),
                  (o.properties["rotation-max-angular-velocity"] = n(
                    t,
                    "rotation-max-angular-velocity",
                  )),
                  (o.properties["translation-start-distance-threshold"] = n(
                    t,
                    "translation-start-distance-threshold",
                  )),
                  (o.properties["translation-stop-distance-threshold"] = n(
                    t,
                    "translation-stop-distance-threshold",
                  )),
                  (o.properties["translation-ease-in-time"] = n(
                    t,
                    "translation-ease-in-time",
                  )),
                  (o.properties["translation-ease-in-power"] = n(
                    t,
                    "translation-ease-in-power",
                  )),
                  (o.properties["translation-ease-out-distance-threshold"] = n(
                    t,
                    "translation-ease-out-distance-threshold",
                  )),
                  (o.properties["translation-ease-out-power"] = n(
                    t,
                    "translation-ease-out-power",
                  )),
                  (o.properties["translation-velocity"] = n(
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
                  (o.properties.thickness = n(t, "thickness")),
                  (o.properties["start-buffer"] = n(t, "start-buffer")),
                  (o.properties["end-buffer"] = n(t, "end-buffer"));
                break;
              case "VSG-LINE-CONSTRAINED-TRANSFORM":
                (o = u("line-constrained-transform", t)),
                  (o.properties["target-id"] = c(t, "target-id")),
                  (o.properties["source-id"] = c(t, "source-id")),
                  (o.properties["source-distance"] = n(t, "source-distance")),
                  (o.properties["target-limit"] = n(t, "target-limit"));
                break;
              case "VSG-CALLOUT-TRANSFORM":
                (o = u("callout-transform", t)),
                  (o.properties.offset = i(t, "offset"));
                break;
              case "VSG-HEAD-FACING-TRANSFORM":
                o = u("head-facing-transform", t);
                break;
              case "VSG-PIN-TO-VIEW-TRANSFORM":
                (o = u("pin-to-view-transform", t)),
                  (o.properties["offscreen-z-depth"] = n(
                    t,
                    "offscreen-z-depth",
                  )),
                  (o.properties["off-axis-limit"] = n(t, "off-axis-limit")),
                  (o.properties["transition-limit"] = n(t, "transition-limit"));
                break;
              case "VSG-GRAB-TRANSFORM":
                (o = u("grab-transform", t)),
                  (o.properties["parent-path"] = l(t, "parent-path")),
                  (o.properties.translation = i(t, "translation")),
                  (o.properties.rotation = i(t, "rotation")),
                  (o.properties.scale = i(t, "scale")),
                  (o.properties["should-head-align"] = p(
                    t,
                    "should-head-align",
                  )),
                  (o.properties["stop-distance"] = n(t, "stop-distance")),
                  (o.properties["start-angle"] = n(t, "start-angle")),
                  (o.properties["start-quat-difference"] = n(
                    t,
                    "start-quat-difference",
                  )),
                  (o.properties["stop-quat-difference"] = n(
                    t,
                    "stop-quat-difference",
                  )),
                  (o.properties["scale-margin"] = n(t, "scale-margin")),
                  (o.properties["lerp-speed"] = n(t, "lerp-speed")),
                  (o.properties["min-distance"] = n(t, "min-distance")),
                  (o.properties["max-distance"] = n(t, "max-distance")),
                  (o.properties["one-to-one-radius"] = n(
                    t,
                    "one-to-one-radius",
                  )),
                  (o.properties["max-x-squared-contribution"] = n(
                    t,
                    "max-x-squared-contribution",
                  )),
                  (o.properties["acceleration-factor-x-coefficient"] = n(
                    t,
                    "acceleration-factor-x-coefficient",
                  )),
                  (o.properties["acceleration-factor-x-squared-coefficient"] =
                    n(t, "acceleration-factor-x-squared-coefficient")),
                  (o.properties["acceleration-factor-scale-term"] = n(
                    t,
                    "acceleration-factor-scale-term",
                  )),
                  (o.properties["remote-transform-tx"] = n(
                    t,
                    "remote-transform-tx",
                  )),
                  (o.properties["reset-on-recenter"] = p(
                    t,
                    "reset-on-recenter",
                  )),
                  (o.properties["event-panel-sgid"] = a(t, "event-panel-sgid"));
            }
            return [r, o];
          })(e, t),
          o = [];
        for (let e = 0; e < t.children.length; e++) {
          let r = t.children.item(e);
          if (r.children) {
            let e = h(s, r);
            e && (o = o.concat(e));
          }
        }
        return s.bShouldAbort
          ? null
          : r
            ? (o.length > 0 && (r.children = o), [r])
            : o.length > 0
              ? 1 == o.length
                ? o
                : [{ children: o }]
              : null;
      }
      let g,
        m,
        b,
        f,
        S,
        v,
        _ = [],
        y = null,
        R = !0;
      function C(e, t, s) {
        (m = e),
          (b = t),
          (f = s),
          console.log("Setting owning overlay key to " + e);
      }
      function w(e) {
        return e
          ? (function (e) {
              return e && e.includes("::");
            })(e)
            ? e
            : k() + "::" + e
          : null;
      }
      function k() {
        var e;
        return null !==
          (e =
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VROverlay.ThisOverlayKey()) && void 0 !== e
          ? e
          : m;
      }
      function N(e) {
        _.push(e), T();
      }
      function T() {
        y ||
          (y = window.setTimeout(
            () =>
              (0, r.sH)(this, void 0, void 0, function* () {
                let e = document.body;
                b && (e = b);
                let t = {
                  type: "root",
                  rootproperties: {
                    relatchDashboardTransform: S,
                    allowDismissOnClick: R,
                    sceneColorCorrection: v,
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
                g ||
                  (console.log("Initializing sg_mailbox"),
                  (g = new o._n()),
                  yield g.Init("sg_mailbox", f));
                let s = {
                  type: "update_scene_graph",
                  owning_overlay_key: k(),
                  scene_graph: t,
                  retired_sgids: _,
                };
                g.SendMessage("vrcompositor_systemlayer", s),
                  (y = null),
                  (_ = []),
                  (S = !1);
              }),
            0,
          ));
      }
    },
    1230: (e, t, s) => {
      var r = s(1635),
        o = s(3496),
        i = s(3236);
      class n extends o._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return Array.isArray(this.props.color) && this.props.color.length > 1
            ? "tint-anim"
            : "tint";
        }
        buildNode(e, t) {
          const s = this.createSgNode(t);
          return (
            this.props.color
              ? "string" == typeof this.props.color
                ? (s.properties.color = this.props.color)
                : Array.isArray(this.props.color)
                  ? (this.props.color.length > 0 &&
                    "string" == typeof this.props.color[0]
                      ? (s.properties.color =
                          this.props.color.length > 1
                            ? this.props.color
                            : this.props.color[0])
                      : (s.properties.color = this.props.color
                          .map((e) => [e.r, e.g, e.b])
                          .reduce((e, t) => e.concat(t), [])),
                    (s.properties["animation-seconds"] =
                      this.props.animationSeconds))
                  : (s.properties.color = [
                      this.props.color.r,
                      this.props.color.g,
                      this.props.color.b,
                    ])
              : (s.properties.color = [1, 1, 1]),
            [e, s]
          );
        }
      }
      (0, r.Cg)([i.o], n.prototype, "buildNode", null);
    },
    119: (e, t, s) => {
      var r = s(1635),
        o = s(1651),
        i = s(2824),
        n = s(776),
        a = s(3236),
        p = s(5723);
      const l = new n.wd("SGQueryService");
      class c {
        constructor() {
          (this.m_mailbox = new i._n()),
            (this.m_mapPanelHeightSubscriptions = new Map()),
            (this.m_setPanelSubscriptionsToAdd = new Set()),
            (this.m_setPanelSubscriptionsToRemove = new Set()),
            (this.m_bHasPendingSubscriptionUpdates = !1),
            (this.m_bInitializedPanelSubscriptions = !1),
            this.m_mailbox.Init("sgqueryservice").then(() => {
              this.m_mailbox.RegisterHandler(
                "panel_height_update",
                this.OnPanelHeightUpdate,
              );
            });
        }
        static getInstance() {
          return (
            c.instance ||
              ((c.instance = new c()), (window.SGQueryService = c.instance)),
            c.instance
          );
        }
        SubscribeToPanelHeight(e, t) {
          e = (0, p.bl)(e);
          let s = this.m_mapPanelHeightSubscriptions.get(e);
          s ||
            ((s = { m_Callbacks: new o.l(), m_lastMeasurement: void 0 }),
            this.m_mapPanelHeightSubscriptions.set(e, s)),
            0 == s.m_Callbacks.CountRegistered() &&
              (this.m_setPanelSubscriptionsToAdd.add(e),
              this.m_setPanelSubscriptionsToRemove.delete(e),
              this.QueueSubscriptionUpdates());
          const r = s.m_Callbacks.Register(t),
            i = {
              Unregister: () => {
                r.Unregister(),
                  0 == s.m_Callbacks.CountRegistered() &&
                    (this.m_setPanelSubscriptionsToRemove.add(e),
                    this.m_setPanelSubscriptionsToAdd.delete(e),
                    this.QueueSubscriptionUpdates());
              },
            };
          return (
            s.m_lastMeasurement &&
              setTimeout(
                () =>
                  t(
                    Object.assign(Object.assign({}, s.m_lastMeasurement), {
                      m_bStale: !0,
                    }),
                  ),
                0,
              ),
            i
          );
        }
        OnPanelHeightUpdate(e) {
          l.Debug("Received panel height updates:", e.panels);
          for (const t of e.panels) {
            const e = this.m_mapPanelHeightSubscriptions.get(t.panel_id);
            e &&
              ((e.m_lastMeasurement = {
                m_flRawPanelHeight: t.panel_height,
                m_flTransformScaleDuringMeasure:
                  t.transform_scale_during_measure,
              }),
              e.m_Callbacks.Dispatch(
                Object.assign(Object.assign({}, e.m_lastMeasurement), {
                  m_bStale: !1,
                }),
              ));
          }
        }
        QueueSubscriptionUpdates() {
          return (0, r.sH)(this, void 0, void 0, function* () {
            if (this.m_bHasPendingSubscriptionUpdates) return;
            (this.m_bHasPendingSubscriptionUpdates = !0),
              yield this.m_mailbox.WaitForConnect();
            const e = !this.m_bInitializedPanelSubscriptions;
            if (
              this.m_setPanelSubscriptionsToAdd.size > 0 ||
              this.m_setPanelSubscriptionsToRemove.size > 0 ||
              e
            ) {
              const t = {
                type: "update_panel_height_subscriptions",
                subscribe_panel_ids: Array.from(
                  this.m_setPanelSubscriptionsToAdd,
                ),
                unsubscribe_panel_ids: Array.from(
                  this.m_setPanelSubscriptionsToRemove,
                ),
                unsubscribe_all: e,
              };
              l.Debug(`Sending ${t.type} message:`, t),
                this.m_mailbox.SendMessage(i.Jv, t);
            }
            this.m_setPanelSubscriptionsToAdd.clear(),
              this.m_setPanelSubscriptionsToRemove.clear(),
              (this.m_bHasPendingSubscriptionUpdates = !1),
              (this.m_bInitializedPanelSubscriptions = !0);
          });
        }
        requestSGTransform(e) {
          return (0, r.sH)(
            this,
            arguments,
            void 0,
            function* (e, t = 0, s = 0) {
              if (!e || e.toLowerCase().includes("undefined"))
                return Promise.reject("Invalid transform ID");
              const r = {
                  type: "transform_request",
                  id: e,
                  flPushDistance: t,
                  timeoutSec: s,
                },
                o = yield this.m_mailbox.SendMessageAndWaitForResponse(
                  i.pg,
                  r,
                  "transform_response",
                );
              return o.id == e && o.transform
                ? o.transform
                : Promise.reject("requestSGTransform failed");
            },
          );
        }
        requestSGTransformRelative(e, t) {
          return (0, r.sH)(this, arguments, void 0, function* (e, t, s = 0) {
            var r;
            if (
              !e ||
              e.toLowerCase().includes("undefined") ||
              !t ||
              t.toLowerCase().includes("undefined")
            )
              return Promise.reject("Invalid transform ID");
            const o = {
                type: "transform_request",
                from_id: e,
                id: t,
                timeoutSec: s,
              },
              n = yield this.m_mailbox.SendMessageAndWaitForResponse(
                i.pg,
                o,
                "transform_response",
              );
            return n.from_id == e && n.id == t && n.transform
              ? n.transform
              : Promise.reject(
                  null !== (r = n.error) && void 0 !== r
                    ? r
                    : "requestSGTransform failed",
                );
          });
        }
      }
      (0, r.Cg)([a.o], c.prototype, "OnPanelHeightUpdate", null);
    },
    7600: (e, t, s) => {
      s.d(t, { tH: () => l });
      var r = s(1635),
        o = s(6540),
        i = s(6090),
        n = s(1286),
        a = s(3236);
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
          const s = l.sm_ErrorReportingStore;
          s
            ? s
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
          const { children: e, fallback: t, errorKey: s } = this.props,
            { error: r, identifierHash: i, lastErrorKey: n } = this.state;
          return r && s == n
            ? void 0 !== t
              ? "function" == typeof t
                ? t(r.error)
                : t
              : l.sm_ErrorReportingStore &&
                  l.sm_ErrorReportingStore.reporting_enabled
                ? o.createElement(d, {
                    error: r,
                    identifierHash: i,
                    store: l.sm_ErrorReportingStore,
                    onRefresh: this.Reset,
                  })
                : o.createElement(u, { error: r, onDismiss: this.Reset })
            : e || null;
        }
      }
      function c(e) {
        const { enabled: t } = e,
          [s, r] = o.useState(t),
          [i, a] = o.useState(n.b);
        o.useEffect(() => {
          const e = setTimeout(() => {
            s &&
              (i > 1
                ? a(i - 1)
                : (console.warn(
                    "Auto-reloading due to triggered ErrorBoundary...",
                  ),
                  window.location.reload()));
          }, 1e3);
          return () => clearTimeout(e);
        }, [s, i]);
        const p = o.useCallback(() => {
          console.log("Auto-reload canceled."), r(!1);
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
            ? s
              ? o.createElement(
                  o.Fragment,
                  null,
                  o.createElement(
                    m,
                    null,
                    "Reloading UI in ",
                    i,
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
      (0, r.Cg)([a.o], l.prototype, "Reset", null);
      const u = ({ error: e, onDismiss: t }) => {
          let s = e.error ? e.error.stack : "Stack missing",
            r = e.info ? e.info.componentStack : "",
            n = (e.error && e.error.message) || "unknown error";
          const a = o.useContext(i.GM);
          return o.createElement(
            h,
            null,
            o.createElement(m, null, 'Error: "', n, '"'),
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
            o.createElement(b, null, s),
            o.createElement(b, null, "The error occurred while rendering:", r),
          );
        },
        d = (e) => {
          const { error: t, onRefresh: s, identifierHash: r, store: n } = e,
            a = (t.error && t.error.message) || "unknown error",
            p = `${n.product}_${n.version}_${r}`,
            l = o.useContext(i.GM);
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
                  onClick: s,
                },
                "Refresh",
              ),
            ),
            o.createElement(c, { enabled: null == l }),
            o.createElement(b, null, "Error Reference: ", p),
            o.createElement(b, null, a),
          );
        };
      function h(e) {
        return o.useContext(i.GM) || (0, i.R$)() != i.OH.Overlay
          ? o.createElement(g, Object.assign({}, e))
          : o.createElement(
              i.dL,
              {
                parent_path: "/user/head",
                translation: { y: -0.5, z: -0.9 },
                rotation: { x: -20 },
              },
              o.createElement(
                i.Zk,
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
        b = ({ children: e }) =>
          o.createElement(
            "pre",
            { style: { marginTop: "15px", opacity: 0.7, userSelect: "auto" } },
            e,
          );
    },
    1651: (e, t, s) => {
      s.d(t, { l: () => i });
      var r = s(1635),
        o = (s(6540), s(3236));
      class i {
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
      (0, r.Cg)([o.o], i.prototype, "Dispatch", null);
    },
    1295: (e, t, s) => {
      function r(e) {
        return new Promise((t) => setTimeout(t, e));
      }
      s.d(t, { IP: () => r });
    },
    1333: (e, t, s) => {
      s.d(t, { HR: () => h });
      var r = s(1635),
        o = s(3236),
        i = s(2505),
        n = s.n(i),
        a = s(7813),
        p = s(6090),
        l = s(3606),
        c = s(2402);
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
            (this.m_appFrameLimits = []),
            (this.m_mapRefreshRatesForFrameLimit = new Map()),
            (this.GetAppList = function () {
              return new Promise(function (e, t) {
                n()
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
                n()
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
                n()
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
                n()
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
          return (0, r.sH)(this, void 0, void 0, function* () {
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
                    for (const [t, s] of this.pendingChanges.entries())
                      e.push({ name: t, value: s });
                    this.pendingChanges.clear(),
                      n()
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
          return (0, r.sH)(this, void 0, void 0, function* () {
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
          return (0, r.sH)(this, void 0, void 0, function* () {
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
        setRoute(e, t, s) {
          if (this.m_bIsSettingApp) {
            (e = null != e ? e : ""), (s = null != s ? s : []);
            const r = t ? [e, t, ...s] : [e],
              o = r.join("/");
            window.location.hash.substring(1) != o &&
              ((window.location.hash = o), (this.route = r));
          } else
            this.m_mailbox.connected &&
              this.m_mailbox.SendMessage(this.MailboxName, {
                type: u,
                page: e,
                section: t,
                sectionParams: s,
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
        SetDashboardForceBoundsVisible(e, t, s) {
          this.m_mailbox.connected &&
            this.m_mailbox.SendMessage(p.M9, {
              type: c.Q,
              force_bounds_visible: s,
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
              this.OnVRSystemInfo(e);
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
            const s = e.values[t];
            if (
              this.settings.get(t) != s ||
              this.m_mapSettingsLastWriteInfo.has(t)
            ) {
              if (this.settingsSchema) {
                const e = this.GetSettingSchema(t);
                e && e.requires_restart && this.SetRestartRequired();
              }
              this.SetSettingValueFromServer(t, s);
            }
          }
        }
        SetSettingValueFromServer(e, t) {
          const s = 1e3 * d.SERVER_SETTING_MERGE_DEFER_DURATION;
          if (this.m_mapSettingsLastWriteInfo.has(e)) {
            let r = this.m_mapSettingsLastWriteInfo.get(e);
            if (new Date().getTime() - r.nLastUserUpdateTime < s)
              return (
                window.clearTimeout(r.nPendingServerValueUpdateTimeout),
                void (r.nPendingServerValueUpdateTimeout = window.setTimeout(
                  () => {
                    this.SetSettingValueFromServer(e, t);
                  },
                  s,
                ))
              );
            window.clearTimeout(r.nPendingServerValueUpdateTimeout),
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
          return (0, r.sH)(this, void 0, void 0, function* () {
            return (0, a.when)(() => !!this.settingsSchema);
          });
        }
        OnVRAudioDevices(e) {
          console.log("Got audio devices"), (this.audioDevices = e);
        }
        OnVRSystemInfo(e) {
          this.systemInfo = e;
          const t = e.refresh_rates.supported_rates.map((e) => Math.round(e));
          if (t.length > 1) {
            this.m_mapRefreshRatesForFrameLimit.clear(),
              (this.m_appFrameLimits = t.slice());
            for (const e of t)
              for (let t = 1; t <= 4; t++) {
                const s = Math.round(e / t);
                if (s < 30) break;
                const r = this.m_mapRefreshRatesForFrameLimit.get(s);
                r ? r.push(e) : this.m_mapRefreshRatesForFrameLimit.set(s, [e]);
                for (let e = 0; e < this.m_appFrameLimits.length; e++) {
                  if (this.m_appFrameLimits[e] > s) {
                    this.m_appFrameLimits.splice(e, 0, s);
                    break;
                  }
                  if (this.m_appFrameLimits[e] === s) break;
                }
              }
          }
        }
        OnVRAppList(e) {
          (this.apps = e.apps),
            e.apps.map((e) => this.probablyOwnedAppkeys.add(e.key));
        }
        SettingNameMatches(e, t) {
          if (t && t.endsWith("*")) {
            let s = t.length - 1;
            return e.substr(0, s) == t.substr(0, s);
          }
          return e == t;
        }
        GetSettingSchema(e) {
          for (let t of this.settingsSchema)
            if (t.values)
              for (let s of t.values)
                if (s && this.SettingNameMatches(e, s.name)) return s;
          return null;
        }
        get appFrameLimits() {
          return this.m_appFrameLimits;
        }
        GetRefreshRatesForFrameLimit(e) {
          var t;
          return null !== (t = this.m_mapRefreshRatesForFrameLimit.get(e)) &&
            void 0 !== t
            ? t
            : [e];
        }
        ResetSettingsValue(e) {
          this.SetSettingsValue(e, null);
        }
        ResetSettingsValues(...e) {
          e.forEach(this.ResetSettingsValue);
        }
        SetSettingsValue(e, t) {
          let s = this.GetSettingSchema(e);
          null != s
            ? (null != t &&
                ("int" == s.type
                  ? (t = parseInt(t))
                  : "float" == s.type
                    ? (t = parseFloat(t))
                    : "string" == s.type
                      ? (t = "" + t)
                      : "bool" == s.type && (t = !!t)),
              s.requires_restart && this.SetRestartRequired(),
              this.SetSettingsStringValueWithoutSchema(e, t))
            : console.log(
                "Tried to set setting " +
                  e +
                  " but it's not in the schema! Aborting",
              );
        }
        SetSettingsStringValueWithoutSchema(e, t) {
          if (VRHTML) {
            const s = e.split("/");
            if (4 != s.length || "" != s[0] || "settings" != s[1])
              throw new Error("bad settings path " + e);
            VRHTML.VRSettings.Set(s[2], s[3], t),
              this.settings.set(e, VRHTML.VRSettings.Get(s[2], s[3]));
          } else
            null != t && this.settings.set(e, t), this.pendingChanges.set(e, t);
          this.UpdateLastUserWriteTimeForSetting(e);
        }
        GetSettingsValue(e) {
          return (0, r.sH)(this, void 0, void 0, function* () {
            return new Promise(function (t, s) {
              n()
                .get("/settings_get", { params: { name: e } })
                .then((e) => {
                  t(e.data);
                })
                .catch((e) => {
                  s(null);
                });
            });
          });
        }
        ResetAppSettings(e) {
          return n()
            .post("/app/resetsettings", { app: e })
            .then((t) => this.GetAppSettings(e))
            .catch((e) => {});
        }
        ResetAllAppResolutionScales() {
          return n()
            .post("/app/resetallresolutionscales")
            .then((e) => !0)
            .catch((e) => {});
        }
        SetAppSettings(e, t) {
          let s = Object.assign(Object.assign({}, t), { app: e });
          n().post("/app/setsettings", s);
          for (let e = 0; e < this.apps.length; e++)
            if (this.apps[e].key == s.app) {
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
          return (0, r.sH)(this, void 0, void 0, function* () {
            return new Promise(function (t, s) {
              n()
                .get("/app/getsettings", { params: { app: e } })
                .then((e) => {
                  t(e.data);
                })
                .catch((e) => {
                  s(null);
                });
            });
          });
        }
        GetAppInfo(e) {
          return (0, r.sH)(this, void 0, void 0, function* () {
            return new Promise(function (t, s) {
              n()
                .get("/app/getinfo", { params: { app: e } })
                .then((e) => {
                  t(e.data);
                })
                .catch((e) => {
                  s(null);
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
        (0, r.Cg)([a.observable], d.prototype, "connected", void 0),
        (0, r.Cg)([a.observable], d.prototype, "settingsSchema", void 0),
        (0, r.Cg)([a.observable], d.prototype, "settings", void 0),
        (0, r.Cg)([a.observable], d.prototype, "systemInfo", void 0),
        (0, r.Cg)([a.observable], d.prototype, "audioDevices", void 0),
        (0, r.Cg)([a.observable], d.prototype, "apps", void 0),
        (0, r.Cg)([a.observable], d.prototype, "probablyOwnedAppkeys", void 0),
        (0, r.Cg)([a.observable], d.prototype, "showInternalSettings", void 0),
        (0, r.Cg)(
          [a.observable],
          d.prototype,
          "workshopStateChangedCanary",
          void 0,
        ),
        (0, r.Cg)([a.observable], d.prototype, "pendingChanges", void 0),
        (0, r.Cg)([a.observable], d.prototype, "route", void 0),
        (0, r.Cg)([o.o], d.prototype, "OpenWebSocketToHost", null),
        (0, r.Cg)([o.o], d.prototype, "OnWorkshopStateChangedMessage", null),
        (0, r.Cg)([o.o], d.prototype, "OnChangeRouteMessage", null),
        (0, r.Cg)([o.o], d.prototype, "OnAppConfigChangedMessage", null),
        (0, r.Cg)([o.o], d.prototype, "OnRefreshRateChangeMessage", null),
        (0, r.Cg)([a.action.bound], d.prototype, "onHashChanged", null),
        (0, r.Cg)([a.computed], d.prototype, "routePage", null),
        (0, r.Cg)([a.computed], d.prototype, "routePageSection", null),
        (0, r.Cg)([a.computed], d.prototype, "routePageSectionParams", null),
        (0, r.Cg)([a.action], d.prototype, "setRoutePage", null),
        (0, r.Cg)([a.action], d.prototype, "setRoutePageSection", null),
        (0, r.Cg)([a.action], d.prototype, "setRoutePageSectionParams", null),
        (0, r.Cg)([a.action], d.prototype, "setRoute", null),
        (0, r.Cg)([o.o], d.prototype, "SetDashboardFadeSupression", null),
        (0, r.Cg)([o.o], d.prototype, "SetDashboardForceBoundsVisible", null),
        (0, r.Cg)([o.o], d.prototype, "SetRestartRequired", null),
        (0, r.Cg)([o.o], d.prototype, "OnWebSocketOpen", null),
        (0, r.Cg)([o.o], d.prototype, "OnWebSocketClose", null),
        (0, r.Cg)([o.o], d.prototype, "WebSocketSend", null),
        (0, r.Cg)([o.o], d.prototype, "OnWebSocketMessage", null),
        (0, r.Cg)([a.action], d.prototype, "OnVRSettings", null),
        (0, r.Cg)([a.action], d.prototype, "SetSettingValueFromServer", null),
        (0, r.Cg)([a.action], d.prototype, "OnVRSettingsSchema", null),
        (0, r.Cg)([a.action.bound], d.prototype, "ResetSettingsValue", null),
        (0, r.Cg)([a.action], d.prototype, "ResetSettingsValues", null),
        (0, r.Cg)([a.action], d.prototype, "SetSettingsValue", null),
        (0, r.Cg)(
          [a.action],
          d.prototype,
          "SetSettingsStringValueWithoutSchema",
          null,
        );
      const h = new d();
      window.VRSettingsState = h;
    },
    7727: (e, t, s) => {
      s.d(t, { N: () => i });
      var r = s(6540);
      const o = r.createContext({ frame: void 0, page: void 0 });
      function i() {
        return r.useContext(o);
      }
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~b7706121d.js.map
