/*!
 * (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 *
 */ !(function (e) {
  function t(t) {
    for (
      var i, a, s = t[0], l = t[1], c = t[2], u = 0, h = [];
      u < s.length;
      u++
    )
      (a = s[u]),
        Object.prototype.hasOwnProperty.call(r, a) && r[a] && h.push(r[a][0]),
        (r[a] = 0);
    for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i]);
    for (d && d(t); h.length; ) h.shift()();
    return o.push.apply(o, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < o.length; t++) {
      for (var n = o[t], i = !0, s = 1; s < n.length; s++) {
        var l = n[s];
        0 !== r[l] && (i = !1);
      }
      i && (o.splice(t--, 1), (e = a((a.s = n[0]))));
    }
    return e;
  }
  var i = {},
    r = { 12: 0 },
    o = [];
  function a(t) {
    if (i[t]) return i[t].exports;
    var n = (i[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
  }
  (a.m = e),
    (a.c = i),
    (a.d = function (e, t, n) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (a.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.t = function (e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (a.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          a.d(
            n,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return n;
    }),
    (a.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return a.d(t, "a", t), t;
    }),
    (a.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.p = "");
  var s = (window.webpackJsonp = window.webpackJsonp || []),
    l = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var c = 0; c < s.length; c++) t(s[c]);
  var d = l;
  o.push(["ptmX", 0, 1]), n();
})({
  "/i/y": function (e, t, n) {
    "use strict";
    var i = n("mrSG"),
      r = n("7wIv"),
      o = n.n(r);
    class a {
      constructor() {
        (this.m_wsWebSocketToServer = void 0),
          (this.m_oHandlers = {}),
          (this.m_oWaits = {}),
          (this.m_oConnectWaits = []),
          (this.m_fnConnectResolve = void 0),
          (this.m_nNextMessageNumber = 1);
      }
      OpenWebSocketToHost() {
        return new Promise((e, t) => {
          console.log("Connecting vrmailbox " + this.m_sMailboxName + "...");
          let n = "ws://localhost:27062";
          this.m_sWebSecret && (n += "?secret=" + this.m_sWebSecret),
            (this.m_fnConnectResolve = e),
            (this.m_wsWebSocketToServer = new WebSocket(n)),
            this.m_wsWebSocketToServer.addEventListener("open", (t) => {
              this.OnWebSocketOpen(t), e();
            }),
            this.m_wsWebSocketToServer.addEventListener(
              "message",
              this.OnWebSocketMessage
            ),
            this.m_wsWebSocketToServer.addEventListener(
              "close",
              this.OnWebSocketClose
            );
        });
      }
      static EnsureUniqueName(e) {
        if (e.includes("/")) return e;
        let t;
        return (
          (t = VRHTML ? VRHTML.GetWebHelperId() : Date.now().toString()),
          e + "/" + t + "_" + this.s_nNextMailboxNumber++
        );
      }
      Init(e, t) {
        return Object(i.a)(this, void 0, void 0, function* () {
          return (
            (this.m_sMailboxName = a.EnsureUniqueName(e)),
            (this.m_sWebSecret = t),
            (this.connected = !1),
            this.OpenWebSocketToHost()
          );
        });
      }
      get name() {
        return this.m_sMailboxName;
      }
      OnWebSocketOpen(e) {
        (this.connected = !0),
          this.WebSocketSend("mailbox_open " + this.m_sMailboxName),
          window.addEventListener("beforeunload", () => {
            this.WebSocketSend("websocket_close");
          }),
          this.m_fnConnectResolve &&
            (this.m_fnConnectResolve(), (this.m_fnConnectResolve = void 0));
        for (let e of this.m_oConnectWaits) e();
        this.m_oConnectWaits = [];
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
        let t = JSON.parse(e.data),
          n = !1;
        if (
          (this.m_oHandlers.hasOwnProperty(t.type) &&
            (this.m_oHandlers[t.type](t), (n = !0)),
          this.m_oWaits.hasOwnProperty(t.type))
        ) {
          let e = !1;
          for (let n of this.m_oWaits[t.type])
            n.nMessageId == t.message_id && (n.callback(t), (e = !0));
          e
            ? (this.m_oWaits[t.type] = this.m_oWaits[t.type].filter(
                (e) => e.nMessageId == t.message_id
              ))
            : console.log(
                `Received a ${t.type} message, but didn't have a matching message_id. Did the other end forget to mirror message_id?`
              ),
            (n = !0);
        }
        n || console.log("Received unhandled message: ", t);
      }
      RegisterHandler(e, t) {
        this.m_oHandlers[e] = t;
      }
      SendMessage(e, t) {
        this.WebSocketSend("mailbox_send " + e + " " + JSON.stringify(t));
      }
      WaitForMessage(e, t) {
        return new Promise((n, i) => {
          this.m_oWaits[e] || (this.m_oWaits[e] = []),
            this.m_oWaits[e].push({ callback: n, nMessageId: t });
        });
      }
      WaitForConnect() {
        return new Promise((e, t) => {
          this.connected ? e() : this.m_oConnectWaits.push(e);
        });
      }
      WaitForMailbox(e) {
        return Object(i.a)(this, void 0, void 0, function* () {
          let t = {
            type: "request_mailbox_registration_notification",
            mailbox_name: e,
          };
          return this.SendMessageAndWaitForResponse(
            "web_server_mailbox",
            t,
            "mailbox_registered"
          );
        });
      }
      SendMessageAndWaitForResponse(e, t, n) {
        let i = Object.assign({}, t);
        return (
          null == i.returnAddress && (i.returnAddress = this.m_sMailboxName),
          (i.message_id = this.m_nNextMessageNumber++),
          this.SendMessage(e, i),
          this.WaitForMessage(n, i.message_id)
        );
      }
      SendResponse(e, t) {
        if (!e.returnAddress)
          throw new Error("Missing return address on message");
        let n = Object.assign(Object.assign({}, t), {
          message_id: e.message_id,
        });
        (n.message_id = e.message_id), this.SendMessage(e.returnAddress, n);
      }
    }
    function s() {
      return {
        translation: { x: 0, y: 0, z: 0 },
        rotation: { w: 1, x: 0, y: 0, z: 0 },
        scale: { x: 1, y: 1, z: 1 },
      };
    }
    function l(e, t) {
      return { x: e.x + t.x, y: e.y + t.y, z: e.z + t.z };
    }
    function c(e, t, n) {
      return {
        x: t.x + e * (n.x - t.x),
        y: t.y + e * (n.y - t.y),
        z: t.z + e * (n.z - t.z),
      };
    }
    function d(e, t) {
      return { x: e.x - t.x, y: e.y - t.y };
    }
    function u(e, t) {
      return { x: e.x - t.x, y: e.y - t.y, z: e.z - t.z };
    }
    function h(e, t) {
      return { x: e.x * t, y: e.y * t };
    }
    function p(e, t) {
      return { x: e.x * t, y: e.y * t, z: e.z * t };
    }
    function m(e) {
      return Math.sqrt(e.x * e.x + e.y * e.y);
    }
    function v(e) {
      return Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z);
    }
    function b(e) {
      if (void 0 === e) return;
      let t = 0.5 * e.x,
        n = 0.5 * e.y,
        i = 0.5 * e.z,
        r = Math.cos(t),
        o = Math.cos(n),
        a = Math.cos(i),
        s = Math.sin(t),
        l = Math.sin(n),
        c = Math.sin(i);
      return {
        w: r * o * a + s * l * c,
        x: s * o * a + r * l * c,
        y: r * l * a - s * o * c,
        z: r * o * c - s * l * a,
      };
    }
    function g(e) {
      let t = e[0][0] + e[1][1] + e[2][2];
      if (t > 0) {
        let n = 2 * Math.sqrt(t + 1);
        return {
          w: 0.25 * n,
          x: (e[1][2] - e[2][1]) / n,
          y: (e[2][0] - e[0][2]) / n,
          z: (e[0][1] - e[1][0]) / n,
        };
      }
      if (e[0][0] > e[1][1] && e[0][0] > e[2][2]) {
        let t = 2 * Math.sqrt(1 + e[0][0] - e[1][1] - e[2][2]);
        return {
          w: (e[1][2] - e[2][1]) / t,
          x: 0.25 * t,
          y: (e[1][0] + e[0][1]) / t,
          z: (e[2][2] + e[0][2]) / t,
        };
      }
      if (e[1][1] > e[2][2]) {
        let t = 2 * Math.sqrt(1 + e[1][1] - e[0][0] - e[2][2]);
        return {
          w: (e[2][0] - e[0][2]) / t,
          x: (e[1][0] + e[0][1]) / t,
          y: 0.25 * t,
          z: (e[2][1] + e[1][2]) / t,
        };
      }
      {
        let t = 2 * Math.sqrt(1 + e[2][2] - e[0][0] - e[1][1]);
        return {
          w: (e[0][1] - e[1][0]) / t,
          x: (e[2][0] + e[0][2]) / t,
          y: (e[2][1] + e[1][2]) / t,
          z: 0.25 * t,
        };
      }
    }
    function _(e, t) {
      let n = 2 * (e.y * t.z - e.z * t.y),
        i = 2 * (e.z * t.x - e.x * t.z),
        r = 2 * (e.x * t.y - e.y * t.x);
      return {
        x: t.x + e.w * n + e.y * r - e.z * i,
        y: t.y + e.w * i + e.z * n - e.x * r,
        z: t.z + e.w * r + e.x * i - e.y * n,
      };
    }
    function y(e, t, n) {
      return [
        [e.x, e.y, e.z],
        [t.x, t.y, t.z],
        [n.x, n.y, n.z],
      ];
    }
    function S(e) {
      return _(e.rotation, { x: 0, y: 0, z: 1 });
    }
    function f(e) {
      let t = v(e);
      return { x: e.x / t, y: e.y / t, z: e.z / t };
    }
    function k(e, t) {
      return {
        x: e.y * t.z - e.z * t.y,
        y: e.z * t.x - e.x * t.z,
        z: e.x * t.y - e.y * t.x,
      };
    }
    function C(e) {
      let t = e.w * e.w + e.x * e.x + e.y * e.y + e.z * e.z;
      return { w: e.w / t, x: -e.x / t, y: -e.y / t, z: -e.z / t };
    }
    (a.s_nNextMailboxNumber = 1),
      Object(i.b)([r.bind], a.prototype, "OpenWebSocketToHost", null),
      Object(i.b)([r.bind], a.prototype, "OnWebSocketOpen", null),
      Object(i.b)([r.bind], a.prototype, "OnWebSocketClose", null),
      Object(i.b)([r.bind], a.prototype, "WebSocketSend", null),
      Object(i.b)([r.bind], a.prototype, "OnWebSocketMessage", null);
    class D {
      constructor() {
        (this.m_mailbox = new a()), this.m_mailbox.Init("sgtransformcache");
      }
      static getInstance() {
        return D.instance || (D.instance = new D()), D.instance;
      }
      requestSGTransform(e) {
        return new Promise((t, n) =>
          Object(i.a)(this, void 0, void 0, function* () {
            let i = { type: "transform_request", id: e },
              r = yield this.m_mailbox.SendMessageAndWaitForResponse(
                "vrcompositor_systemlayer",
                i,
                "transform_response"
              );
            r.id == e && r.transform
              ? t(r.transform)
              : n("requestSGTransform failed");
          })
        );
      }
    }
    var O = n("q1tI");
    function w(e, t) {
      let n = e.getAttribute(t);
      if (n && n.length > 0) {
        if ("undefined" == n) return;
        let e = [];
        for (let t of n.split(" ")) 0 != t.length && e.push(parseFloat(t));
        if (e.length > 0) return e;
      }
    }
    function R(e, t) {
      let n = e.getAttribute(t);
      if (n && n.length > 0) return parseFloat(n);
    }
    function M(e, t) {
      let n = e.getAttribute(t);
      if (n && n.length > 0) return parseInt(n);
    }
    function T(e, t) {
      let n = e.getAttribute(t);
      if (n && n.length > 0)
        return (
          "true" == n ||
          (n.length > 0 && 0 != parseInt(n) && !isNaN(parseInt(n)))
        );
    }
    function E(e, t) {
      let n = e.getAttribute(t);
      if (n && n.length > 0) return n;
    }
    function I(e, t) {
      return W(E(e, t));
    }
    function P(e, t) {
      let n = { type: e, properties: {} };
      return (
        t.id && (n.properties.id = W(t.id)),
        (n.properties.sgid = M(t, "sgid")),
        n
      );
    }
    function x(e, t) {
      let [n, i] = (function (e, t) {
          let n = t.buildNode;
          if (n) return n(e, t);
          let i = Object.assign({}, e),
            r = null;
          switch (t.nodeName.toUpperCase()) {
            case "VSG-TRANSFORM":
              (r = P("transform", t)),
                (r.properties.translation = w(t, "translation")),
                (r.properties.rotation = w(t, "rotation")),
                (r.properties.scale = w(t, "scale")),
                (r.properties["parent-path"] = E(t, "parent-path")),
                (r.properties["parent-origin"] = E(t, "parent-origin")),
                (r.properties["parent-id"] = I(t, "parent-id"));
              break;
            case "VSG-TRACKING-STATE-VISIBILITY":
              (r = P("trackingstatevisibility", t)),
                (r.properties["visible-0dof"] = T(t, "visible-0dof")),
                (r.properties["visible-3dof"] = T(t, "visible-3dof")),
                (r.properties["visible-6dof"] = T(t, "visible-6dof"));
              break;
            case "VSG-ELASTIC-HEAD-TRANSFORM":
              (r = P("elasticheadtransform", t)),
                (r.properties["start-angle-threshold"] = R(
                  t,
                  "start-angle-threshold"
                )),
                (r.properties["stop-angle-threshold"] = R(
                  t,
                  "stop-angle-threshold"
                )),
                (r.properties["ease-in-time"] = R(t, "ease-in-time")),
                (r.properties["ease-in-power"] = R(t, "ease-in-power")),
                (r.properties["ease-out-angle-threshold"] = R(
                  t,
                  "ease-out-angle-threshold"
                )),
                (r.properties["ease-out-power"] = R(t, "ease-out-power")),
                (r.properties["min-angular-velocity"] = R(
                  t,
                  "min-angular-velocity"
                )),
                (r.properties["max-angular-velocity"] = R(
                  t,
                  "max-angular-velocity"
                )),
                (r.properties["lock-to-horizon"] = T(t, "lock-to-horizon")),
                (r.properties["translation-behavior"] = M(
                  t,
                  "translation-behavior"
                ));
              break;
            case "VSG-LINE":
              (r = P("line", t)),
                (r.properties["target-id"] = I(t, "target-id")),
                (r.properties.thickness = R(t, "thickness")),
                (r.properties["start-buffer"] = R(t, "start-buffer")),
                (r.properties["end-buffer"] = R(t, "end-buffer"));
              break;
            case "VSG-LINE-CONSTRAINED-TRANSFORM":
              (r = P("line-constrained-transform", t)),
                (r.properties["target-id"] = I(t, "target-id")),
                (r.properties["source-id"] = I(t, "source-id")),
                (r.properties["source-distance"] = R(t, "source-distance")),
                (r.properties["target-limit"] = R(t, "target-limit"));
              break;
            case "VSG-CALLOUT-TRANSFORM":
              (r = P("callout-transform", t)),
                (r.properties.offset = w(t, "offset"));
              break;
            case "VSG-HEAD-FACING-TRANSFORM":
              r = P("head-facing-transform", t);
              break;
            case "VSG-PIN-TO-VIEW-TRANSFORM":
              (r = P("pin-to-view-transform", t)),
                (r.properties["offscreen-z-depth"] = R(t, "offscreen-z-depth")),
                (r.properties["off-axis-limit"] = R(t, "off-axis-limit")),
                (r.properties["transition-limit"] = R(t, "transition-limit"));
          }
          return [i, r];
        })(e, t),
        r = [];
      for (let e = 0; e < t.children.length; e++) {
        let i = t.children.item(e);
        if (i.children) {
          let e = x(n, i);
          e && (r = r.concat(e));
        }
      }
      return n.bShouldAbort
        ? null
        : i
        ? (r.length > 0 && (i.children = r), [i])
        : r.length > 0
        ? 1 == r.length
          ? r
          : [{ children: r }]
        : null;
    }
    let V,
      L,
      N,
      F,
      B = [],
      H = null,
      A = null,
      j = null;
    function U(e, t) {
      return e + "::" + t;
    }
    function W(e) {
      return e
        ? (function (e) {
            return e && e.includes("::");
          })(e)
          ? e
          : U(z(), e)
        : null;
    }
    function z() {
      var e, t;
      return null !=
        (t =
          null === (e = VRHTML) || void 0 === e
            ? void 0
            : e.VROverlay.ThisOverlayKey())
        ? t
        : V;
    }
    function G() {
      F = !0;
    }
    function K(e) {
      e != j && ((j = e), q());
    }
    function q() {
      H ||
        (H = window.setTimeout(
          () =>
            Object(i.a)(this, void 0, void 0, function* () {
              let e = document.body;
              L && (e = L);
              let t = {
                type: "root",
                rootproperties: {
                  relatchDashboardTransform: F,
                  sceneCompositeMult: j,
                },
                children: x({ currentPanel: null, bShouldAbort: !1 }, e),
              };
              A ||
                (console.log("Initializing sg_mailbox"),
                (A = new a()),
                yield A.Init("sg_mailbox", N));
              let n = {
                type: "update_scene_graph",
                owning_overlay_key: z(),
                scene_graph: t,
                retired_sgids: B,
              };
              A.SendMessage("vrcompositor_systemlayer", n),
                (H = null),
                (B = []),
                (F = !1);
            }),
          0
        ));
    }
    function Q(e, t) {
      return e ? { x: e.x ? e.x : t.x, y: e.y ? e.y : t.y } : t;
    }
    function Y(e, t) {
      return e
        ? { x: e.x ? e.x : t.x, y: e.y ? e.y : t.y, z: e.z ? e.z : t.z }
        : t;
    }
    function X(e, t) {
      return e
        ? { r: e.r ? e.r : t.r, g: e.g ? e.g : t.g, b: e.b ? e.b : t.b }
        : t;
    }
    function Z(e) {
      if (e) return [e.x, e.y];
    }
    function J(e) {
      var t;
      return null ===
        (t = (function (e) {
          if (e) return [e.x, e.y, e.z];
        })(e)) || void 0 === t
        ? void 0
        : t.join(" ");
    }
    class $ extends O.Component {
      constructor(e) {
        super(e),
          (this.m_domRef = O.createRef()),
          (this.m_buildNodeOverride = null),
          (this.m_SGID = $.s_NextSGID),
          ($.s_NextSGID = ($.s_NextSGID + 1) % 4294967296);
      }
      setBuildNodeOverride(e) {
        this.m_buildNodeOverride = e;
      }
      getSGID() {
        return this.m_SGID;
      }
      getNodeType() {
        return "base";
      }
      createSgNode(e) {
        return P(this.getNodeType(), e);
      }
      getCurrentRootElement() {
        return this.m_domRef.current;
      }
      componentDidMount() {
        this.m_buildNodeOverride &&
          (this.m_domRef.current.buildNode = this.m_buildNodeOverride),
          q();
      }
      componentDidUpdate() {
        q();
      }
      componentWillUnmount() {
        var e;
        (e = this.m_SGID),
          B.push(e),
          q(),
          this.m_domRef.current &&
            this.m_buildNodeOverride &&
            delete this.m_domRef.current.buildNode;
      }
      render() {
        return O.cloneElement(this.internalRender(), {
          id: this.props.id,
          "vsg-type": this.getNodeType(),
          sgid: this.m_SGID,
          ref: this.m_domRef,
        });
      }
      internalRender() {
        return this.m_buildNodeOverride
          ? O.createElement("vsg-node", null, this.props.children)
          : null;
      }
    }
    $.s_NextSGID = 1;
    class ee extends $ {
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
    Object(i.b)([o.a], ee.prototype, "buildNode", null);
    class te extends $ {
      constructor(e) {
        super(e), super.setBuildNodeOverride(this.buildNode);
      }
      getNodeType() {
        return "mountedscenegraph";
      }
      buildNode(e, t) {
        const n = this.createSgNode(t);
        return (n.properties.mountable_id = W(this.props.mountedId)), [e, n];
      }
    }
    Object(i.b)([o.a], te.prototype, "buildNode", null);
    class ne extends $ {
      constructor(e) {
        var t;
        if (
          (super(e),
          void 0 !== this.props.iconUri && void 0 !== this.props.iconOverlayKey)
        )
          throw new Error(
            "DashboardTab cannot have both an explicit iconUri and iconOverlayKey set in props."
          );
        super.setBuildNodeOverride(this.buildNode),
          (this.m_sMountableUnqualifiedID =
            null != (t = e.mountableUnqualifiedID)
              ? t
              : this.getSGID() + "_mountable");
      }
      getNodeType() {
        return "dashboardtab";
      }
      buildNode(e, t) {
        var n;
        const i = this.createSgNode(t);
        return (
          (i.properties.tab_name = null != (n = this.props.tabName) ? n : ""),
          (i.properties.mountable_id = W(this.m_sMountableUnqualifiedID)),
          (i.properties.icon_uri = this.props.iconUri),
          (i.properties.icon_overlay_key = this.props.iconOverlayKey),
          (i.properties.summon_overlay_key = this.props.summonOverlayKey),
          [e, i]
        );
      }
      internalRender() {
        return O.createElement(
          "vsg-node",
          { id: this.props.id },
          O.createElement(
            ee,
            { id: this.m_sMountableUnqualifiedID },
            this.props.children
          )
        );
      }
    }
    Object(i.b)([o.a], ne.prototype, "buildNode", null);
    class ie extends $ {
      constructor(e) {
        super(e), super.setBuildNodeOverride(this.buildNode);
      }
      getNodeType() {
        return "tint";
      }
      buildNode(e, t) {
        const n = this.createSgNode(t);
        if (this.props.color)
          if ("string" == typeof this.props.color)
            n.properties.color = this.props.color;
          else {
            let e = X(this.props.color, { r: 1, g: 1, b: 1 });
            n.properties.color = [e.r, e.g, e.b];
          }
        else n.properties.color = [1, 1, 1];
        return [e, n];
      }
    }
    Object(i.b)([o.a], ie.prototype, "buildNode", null);
    class re extends $ {
      constructor(e) {
        super(e), super.setBuildNodeOverride(this.buildNode);
      }
      getNodeType() {
        return "opacity";
      }
      buildNode(e, t) {
        const n = this.createSgNode(t);
        return (n.properties.opacity = this.props.value), [e, n];
      }
    }
    var oe, ae, se, le, ce, de, ue, he, pe, me, ve;
    Object(i.b)([o.a], re.prototype, "buildNode", null),
      (function (e) {
        (e[(e.Seated = 0)] = "Seated"),
          (e[(e.Standing = 1)] = "Standing"),
          (e[(e.Raw = 2)] = "Raw");
      })(oe || (oe = {}));
    class be extends $ {
      constructor(e) {
        super(e);
        if (
          (void 0 === e.parent_path ? 0 : 1) +
            (void 0 === e.parent_origin ? 0 : 1) +
            (void 0 === e.parent_id ? 0 : 1) >
          1
        )
          throw new Error(
            "Transform cannot have more than one parent_ property set."
          );
      }
      internalRender() {
        let e, t, n;
        this.props.transform
          ? ((e = this.props.transform.translation),
            (t = this.props.transform.rotation),
            (n = this.props.transform.scale))
          : ((e = Y(this.props.translation, { x: 0, y: 0, z: 0 })),
            (t = b(
              p(Y(this.props.rotation, { x: 0, y: 0, z: 0 }), Math.PI / 180)
            )),
            (n =
              "number" == typeof this.props.scale
                ? {
                    x: this.props.scale,
                    y: this.props.scale,
                    z: this.props.scale,
                  }
                : Y(this.props.scale, { x: 1, y: 1, z: 1 })));
        let i = J(e),
          r = (function (e) {
            if (e) return e.w + " " + e.x + " " + e.y + " " + e.z;
          })(t),
          o = J(n);
        return O.createElement(
          "vsg-transform",
          {
            translation: i,
            rotation: r,
            scale: o,
            "parent-path": this.props.parent_path,
            "parent-origin": oe[this.props.parent_origin],
            "parent-id": this.props.parent_id,
          },
          this.props.children
        );
      }
    }
    class ge extends $ {
      constructor(e) {
        super(e);
      }
      internalRender() {
        return O.createElement(
          "vsg-tracking-state-visibility",
          {
            "visible-0dof": this.props.visibleIn0DOF,
            "visible-3dof": this.props.visibleIn3DOF,
            "visible-6dof": this.props.visibleIn6DOF,
          },
          this.props.children
        );
      }
    }
    function _e(e) {
      if (e) return [e.u, e.v];
    }
    function ye(e) {
      switch (e) {
        case ae.TopLeft:
          return { x: -1, y: 1 };
        case ae.TopCenter:
          return { x: 0, y: 1 };
        case ae.TopRight:
          return { x: 1, y: 1 };
        case ae.CenterLeft:
          return { x: -1, y: 0 };
        case ae.Center:
          return { x: 0, y: 0 };
        case ae.CenterRight:
          return { x: 1, y: 0 };
        case ae.BottomLeft:
          return { x: -1, y: -1 };
        case ae.BottomCenter:
          return { x: 0, y: -1 };
        case ae.BottomRight:
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
    })(ae || (ae = {})),
      (function (e) {
        (e[(e.Auto = 0)] = "Auto"), (e[(e.SingleTap = 1)] = "SingleTap");
      })(se || (se = {})),
      (function (e) {
        (e[(e.Mono = 0)] = "Mono"),
          (e[(e.Parallel = 1)] = "Parallel"),
          (e[(e.Crossed = 2)] = "Crossed"),
          (e[(e.Panorama = 3)] = "Panorama"),
          (e[(e.StackedPanorama = 4)] = "StackedPanorama");
      })(le || (le = {})),
      (function (e) {
        (e[(e.Visible = 0)] = "Visible"),
          (e[(e.SkipInSceneGraph = 1)] = "SkipInSceneGraph"),
          (e[(e.Hidden = 2)] = "Hidden");
      })(ce || (ce = {}));
    class Se extends $ {
      constructor(e) {
        super(e),
          (this.m_Rect = { x: 0, y: 0, width: 0, height: 0 }),
          (this.m_nEmbeddedIndex = null),
          (this.m_resizeObserver = null),
          (this.m_UVsMin = void 0),
          (this.m_UVsMax = void 0),
          (this.m_bOverdragBlocking = !1),
          (this.m_overdragBlockingElements = []);
        const t =
          void 0 !== this.props.rendermodel_component_device_index ||
          void 0 !== this.props.rendermodel_component_name;
        if (
          t &&
          (void 0 === this.props.rendermodel_component_device_index ||
            void 0 === this.props.rendermodel_component_name)
        )
          throw new Error(
            "Panel requires both rendermodel_component_device_index and rendermodel_component_name to be a rendermodel texture."
          );
        if (
          void 0 === this.props.width &&
          void 0 === this.props.height &&
          void 0 === this.props.target_dpi_panel_id &&
          !t
        )
          throw new Error(
            "Panel requires either an explicit width, an explicit height, both an explicit width and height, a target_panel_dpi, or be a rendermodel panel."
          );
        if (
          (void 0 !== this.props.width || void 0 !== this.props.height) &&
          void 0 !== this.props.target_dpi_panel_id
        )
          throw new Error(
            "Panel cannot have both an explicit width/height and target_panel_dpi."
          );
        super.setBuildNodeOverride(this.buildNode);
      }
      isExternal() {
        return !!this.props.overlay_key;
      }
      getEmbeddedIndex() {
        return this.m_nEmbeddedIndex;
      }
      componentWillReceiveProps_UNSAFE() {
        Se.s_bPanelsAreDirty = !0;
      }
      componentDidMount() {
        super.componentDidMount(),
          (this.m_resizeObserver = new ResizeObserver(this.onResizeObserved)),
          this.m_resizeObserver.observe(this.getCurrentRootElement()),
          (this.m_nEmbeddedIndex = fe.Current().addEmbeddedPanelUVs(this)),
          (Se.s_bPanelsAreDirty = !0),
          this.getCurrentRootElement().addEventListener(
            "mousedown",
            this.onPanelMouseDown
          ),
          this.forceUpdate();
      }
      onResizeObserved(e, t) {
        fe.Current().forceLayoutUpdate();
      }
      componentWillUnmount() {
        this.m_resizeObserver &&
          (this.m_resizeObserver.disconnect(), (this.m_resizeObserver = null)),
          this.stopOverDragBlocking(),
          this.getCurrentRootElement().removeEventListener(
            "mousedown",
            this.onPanelMouseDown
          ),
          (Se.s_bPanelsAreDirty = !0),
          fe.Current().removeEmbeddedPanelUVs(this),
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
            e.height - t.height - t.y
          ),
          this.createOverdragBlockingElement(0, t.y, t.x, t.height),
          this.createOverdragBlockingElement(
            t.x + t.width,
            t.y,
            e.width - t.width - t.x,
            t.height
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
          window.document.removeEventListener("mouseup", this.onWindowMouseUp),
          (this.m_bOverdragBlocking = !1));
      }
      createOverdragBlockingElement(e, t, n, i) {
        let r = document.createElement("div");
        (r.style.position = "absolute"),
          (r.style.top = t + "px"),
          (r.style.left = e + "px"),
          (r.style.width = n + "px"),
          (r.style.height = i + "px"),
          (r.style.zIndex = "90019001"),
          this.m_overdragBlockingElements.push(r),
          document.body.appendChild(r);
      }
      onWindowMouseUp(e) {
        this.stopOverDragBlocking();
      }
      getNodeType() {
        return "panel";
      }
      get visibility() {
        var e;
        return null != (e = this.props.visibility) ? e : ce.Visible;
      }
      buildNode(e, t) {
        var n, i, r, o;
        if (this.visibility != ce.Visible) return [e, null];
        let a = Object.assign({}, e),
          s = this.createSgNode(t),
          l = { x: 0, y: 0 };
        l =
          "object" == typeof this.props.origin
            ? Q(this.props.origin, { x: 0, y: 0 })
            : ye(this.props.origin);
        const c = this.props.overlay_key,
          d = z();
        return (
          c && c.length > 0
            ? (s.properties.key = c)
            : d
            ? (s.properties.key = d)
            : (s.properties.overlay_handle = (function () {
                var e;
                return null === (e = VRHTML) || void 0 === e
                  ? void 0
                  : e.VROverlay.ThisOverlayHandle();
              })()),
          (s.properties.uv_min = null != (n = _e(this.m_UVsMin)) ? n : void 0),
          (s.properties.uv_max = null != (i = _e(this.m_UVsMax)) ? i : void 0),
          (s.properties.width = null != (r = this.props.width) ? r : void 0),
          (s.properties.height = null != (o = this.props.height) ? o : void 0),
          (s.properties["target-dpi-panel-id"] = W(
            this.props.target_dpi_panel_id
          )),
          (s.properties["target-dpi-multiplier"] =
            this.props.target_dpi_multiplier),
          (s.properties.curvature = this.props.curvature),
          (s.properties["curvature-origin-id"] = W(
            this.props.curvature_origin_id
          )),
          (s.properties.interactive = this.props.interactive),
          (s.properties.scrollable = this.props.scrollable),
          (s.properties.modal = this.props.modal),
          (s.properties["embedded-uv-index"] = this.m_nEmbeddedIndex),
          (s.properties.origin = Z(l)),
          (s.properties.debug_name = this.props.debug_name),
          (s.properties.sampler = this.props.sampler),
          (s.properties.reflect = this.props.reflect),
          (s.properties.stereoscopy = this.props.stereoscopy),
          (s.properties.rendermodel_component_device_index =
            this.props.rendermodel_component_device_index),
          (s.properties.rendermodel_component_name =
            this.props.rendermodel_component_name),
          (s.properties["texture-id"] = W(this.props.texture_id)),
          (s.properties["sort-order"] = this.props.sort_order),
          (s.properties["sort-depth-bias"] = this.props.sort_depth_bias),
          (a.currentPanel = this),
          [a, s]
        );
      }
      scaleLocalUVToGlobal(e) {
        const t = this.m_UVsMax.u - this.m_UVsMin.u,
          n = this.m_UVsMax.v - this.m_UVsMin.v;
        return { u: this.m_UVsMin.u + t * e.u, v: this.m_UVsMin.v + n * e.v };
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
      internalRender() {
        return O.createElement(
          "vsg-node",
          { style: { display: this.visibility == ce.Hidden ? "none" : null } },
          this.props.children
        );
      }
    }
    (Se.s_bPanelsAreDirty = !1),
      Object(i.b)([o.a], Se.prototype, "onResizeObserved", null),
      Object(i.b)([o.a], Se.prototype, "onPanelMouseDown", null),
      Object(i.b)([o.a], Se.prototype, "onWindowMouseUp", null),
      Object(i.b)([o.a], Se.prototype, "buildNode", null);
    class fe extends O.Component {
      constructor(e) {
        super(e),
          (this.m_DomRef = null),
          (this.m_scalingDomRef = null),
          (this.m_CanvasRef = null),
          (this.m_DebugPointerRef = null),
          (this.m_Observer = null),
          (this.m_nEmbeddedDataWidth = 0),
          (this.m_nPixelX = 0),
          (this.m_CanvasContext = null),
          (this.m_Pixels = null),
          (this.m_mapPanels = new Map()),
          (this.m_rAvailableEmbeddedIndicesQueue = []),
          (this.m_rEmbeddedIndicesToClear = []),
          (this.m_nDirtyXMin = -1),
          (this.m_nDirtyXMax = -1),
          (this.m_fCurrentScale = 1),
          (fe.s_Current = this),
          (this.state = {
            bFontsLoaded: !1,
            nForcedUpdateNumber: 0,
            bShowDebugPointer: !1,
          }),
          (this.m_DomRef = O.createRef()),
          (this.m_scalingDomRef = O.createRef()),
          (this.m_CanvasRef = O.createRef()),
          (this.m_DebugPointerRef = O.createRef());
      }
      static get IsSceneGraphApp() {
        return null !== fe.Current();
      }
      static Current() {
        return fe.s_Current;
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
        (Se.s_bPanelsAreDirty = !0),
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
        let n = Math.max(0, Math.floor((this.m_nEmbeddedDataWidth - 1) / 3));
        for (let e = 0; e < n; e++)
          this.m_rAvailableEmbeddedIndicesQueue.push(e);
        var i, r, o;
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
            ((i = this.props.owning_overlay_key),
            (r = this.m_DomRef.current),
            (o = this.props.web_secret),
            (V = i),
            (L = r),
            (N = o),
            console.log("Setting owning overlay key to " + i));
      }
      componentWillUnmount() {
        let e = this.m_DomRef.current.ownerDocument;
        e.body.classList.remove("SGApp"),
          document.documentElement.classList.remove("VROverlay"),
          this.m_Observer && this.m_Observer.disconnect(),
          e.removeEventListener("mousemove", this.onMouseMove);
      }
      render() {
        let e = [];
        return (
          this.state.bShowDebugPointer && e.push("ShowDebugPointer"),
          O.createElement(
            "vsg-app",
            {
              class: e.join(" "),
              ref: this.m_DomRef,
              "sg-forced-update-number": this.state.nForcedUpdateNumber,
            },
            O.createElement("div", {
              className: "DebugPointer",
              ref: this.m_DebugPointerRef,
            }),
            O.createElement("canvas", {
              ref: this.m_CanvasRef,
              className: "EmbeddedData",
              height: fe.k_EmbeddedDataRows,
            }),
            O.createElement(
              "div",
              { className: "AppSceneGraph", ref: this.m_scalingDomRef },
              this.state.bFontsLoaded && this.props.children
            )
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
        (this.m_CanvasRef.current.width = this.m_nEmbeddedDataWidth),
          (this.m_CanvasContext = this.m_CanvasRef.current.getContext("2d")),
          (this.m_CanvasContext.globalCompositeOperation = "copy"),
          (this.m_CanvasContext.imageSmoothingEnabled = !1),
          null === this.m_Pixels &&
            (this.m_Pixels = this.m_CanvasContext.createImageData(
              this.m_nEmbeddedDataWidth,
              fe.k_EmbeddedDataRows
            )),
          this.updateAllPanelBounds();
      }
      updateAllPanelBounds() {
        let e = this.m_DomRef.current.ownerDocument.defaultView,
          t = this.m_scalingDomRef.current.getBoundingClientRect(),
          n = t.width / this.m_fCurrentScale,
          i = t.height / this.m_fCurrentScale,
          r = { x: e.innerWidth / n, y: e.innerHeight / i },
          o = Math.min(r.x, r.y, 1);
        o != this.m_fCurrentScale &&
          (1 != o
            ? this.m_scalingDomRef.current.setAttribute(
                "style",
                "transform: scale(" + o + "); transform-origin: top left"
              )
            : this.m_scalingDomRef.current.removeAttribute("style"),
          (this.m_fCurrentScale = o),
          (Se.s_bPanelsAreDirty = !0)),
          Se.s_bPanelsAreDirty &&
            (this.m_mapPanels.forEach((e) => e.updateLayoutValues()),
            q(),
            (Se.s_bPanelsAreDirty = !1),
            this.updateEmbeddedData());
      }
      updateEmbeddedData() {
        if (!this.m_CanvasRef) return;
        (this.m_nPixelX = 0),
          this.setPixel(
            0,
            "V".charCodeAt(0),
            "S".charCodeAt(0),
            "G".charCodeAt(0)
          ),
          this.m_rEmbeddedIndicesToClear.forEach((e) => {
            let t = 1 + 3 * e;
            for (let e = 0; e < 3; e++) this.setPixel(t + e, 0, 0, 0, 0);
          }),
          (this.m_rEmbeddedIndicesToClear = []),
          this.m_mapPanels.forEach((e, t) => {
            let n = e.m_Rect.x,
              i = e.m_Rect.x + e.m_Rect.width,
              r = e.m_Rect.y,
              o = e.m_Rect.y + e.m_Rect.height,
              a = 1 + 3 * e.getEmbeddedIndex();
            if (e.isExternal() || n >= i || r >= o)
              for (let e = 0; e < 3; e++) this.setPixel(a + 1, 0, 0, 0, 0);
            else
              this.setPixel(a, (65280 & n) >> 8, 255 & n, 0),
                this.setPixel(a + 1, (65280 & i) >> 8, 255 & i, 255 & r),
                this.setPixel(
                  a + 2,
                  (65280 & o) >> 8,
                  255 & o,
                  (65280 & r) >> 8
                );
          });
        let e = this.m_nDirtyXMax - this.m_nDirtyXMin + 1;
        this.m_CanvasContext.putImageData(
          this.m_Pixels,
          0,
          0,
          this.m_nDirtyXMin,
          0,
          e,
          this.m_Pixels.height
        ),
          (this.m_nDirtyXMin = -1),
          (this.m_nDirtyXMax = -1);
      }
      setPixel(e, t, n, i, r = 255) {
        (this.m_Pixels.data[4 * e + 0] = t),
          (this.m_Pixels.data[4 * e + 1] = n),
          (this.m_Pixels.data[4 * e + 2] = i),
          (this.m_Pixels.data[4 * e + 3] = r),
          (-1 === this.m_nDirtyXMin || e < this.m_nDirtyXMin) &&
            (this.m_nDirtyXMin = e),
          (-1 === this.m_nDirtyXMax || e > this.m_nDirtyXMax) &&
            (this.m_nDirtyXMax = e);
      }
    }
    (fe.s_Current = null),
      (fe.k_EmbeddedDataRows = 1),
      Object(i.b)([r.bind], fe.prototype, "toggleDebugPointer", null),
      Object(i.b)([r.bind], fe.prototype, "onMouseMove", null),
      Object(i.b)([r.bind], fe.prototype, "forceLayoutUpdate", null),
      Object(i.b)([r.bind], fe.prototype, "onMutation", null);
    Object(i.b)(
      [o.a],
      class extends $ {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "texture";
        }
        buildNode(e, t) {
          const n = this.createSgNode(t);
          return (
            (n.properties.id = this.props.id),
            (n.properties.source = this.props.source),
            [e, n]
          );
        }
      }.prototype,
      "buildNode",
      null
    ),
      (function (e) {
        (e[(e.None = 0)] = "None"), (e[(e.Backface = 1)] = "Backface");
      })(de || (de = {}));
    class ke extends $ {
      constructor(e) {
        super(e), super.setBuildNodeOverride(this.buildNode);
      }
      getNodeType() {
        return "rendermodel";
      }
      buildNode(e, t) {
        const n = this.createSgNode(t);
        if (
          ((n.properties.source = this.props.source),
          (n.properties["texture-id"] = W(this.props["texture-id"])),
          this.props.fresnel)
        ) {
          let e = this.props.fresnel;
          if ("string" == typeof e.color) n.properties.color = e.color;
          else {
            let t = X(e.color, { r: 0, g: 0, b: 0 });
            n.properties.color = [t.r, t.g, t.b];
          }
          (n.properties.opacity = e.opacity ? e.opacity : 1),
            (n.properties.strength = e.strength ? e.strength : 1);
        }
        return (
          (n.properties.wireframe = this.props.wireframe),
          (n.properties.solid = this.props.solid),
          (n.properties.culling = this.props.culling),
          (n.properties["no-depth-write"] = this.props["no-depth-write"]),
          (n.properties["no-depth-test"] = this.props["no-depth-test"]),
          [e, n]
        );
      }
    }
    Object(i.b)([o.a], ke.prototype, "buildNode", null);
    class Ce extends $ {
      constructor(e) {
        super(e);
      }
      internalRender() {
        return O.createElement("vsg-line", {
          "target-id": this.props.target_id,
          thickness: this.props.thickness,
          "start-buffer": this.props.start_buffer,
          "end-buffer": this.props.end_buffer,
        });
      }
    }
    class De extends $ {
      constructor(e) {
        super(e);
      }
      internalRender() {
        return O.createElement(
          "vsg-pin-to-view-transform",
          {
            "offscreen-z-depth": this.props.fOffscreenZDepth,
            "off-axis-limit": this.props.fOffAxisLimit,
            "transition-limit": this.props.fTransitionLimit,
          },
          this.props.children
        );
      }
    }
    class Oe extends $ {
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
        if (!e.currentPanel)
          return [
            Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
            null,
          ];
        let n = null;
        "object" == typeof this.props.location
          ? (n = Q(this.props.location, { x: 0, y: 0 }))
          : "number" == typeof this.props.location &&
            (n = ye(this.props.location));
        let i = this.createSgNode(t);
        if (this.props.latched && null !== this.m_latchedPosition)
          (i.properties["anchor-u"] = this.m_latchedPosition.u),
            (i.properties["anchor-v"] = this.m_latchedPosition.v);
        else if (n) {
          const t = { u: 0.5 * n.x + 0.5, v: -0.5 * n.y + 0.5 },
            r = e.currentPanel.props.overlay_key
              ? t
              : e.currentPanel.scaleLocalUVToGlobal(t);
          (i.properties["anchor-u"] = r.u), (i.properties["anchor-v"] = r.v);
        } else {
          const n = t.ownerDocument,
            r = t.getBoundingClientRect(),
            o = r.left + r.width / 2,
            a = r.top + r.height / 2,
            s = e.currentPanel.m_Rect;
          if (o < s.x || o > s.x + s.width || a < s.y || a > s.y + s.height)
            return [
              Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
              null,
            ];
          const l = n.defaultView.innerWidth,
            c = n.defaultView.innerHeight;
          if (!(c > 0 && l > 0))
            return [
              Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
              null,
            ];
          (i.properties["anchor-u"] = o / l),
            (i.properties["anchor-v"] = a / c);
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
    Object(i.b)([o.a], Oe.prototype, "buildNode", null);
    !(function (e) {
      (e[(e.LockedToParent = 0)] = "LockedToParent"),
        (e[(e.LockedToWorld = 1)] = "LockedToWorld");
    })(ue || (ue = {}));
    class we extends $ {
      constructor(e) {
        super(e);
      }
      internalRender() {
        let e = this.props.start_angle_threshold
            ? (this.props.start_angle_threshold * Math.PI) / 180
            : null,
          t = this.props.stop_angle_threshold
            ? (this.props.stop_angle_threshold * Math.PI) / 180
            : null,
          n = this.props.ease_out_angle_threshold
            ? (this.props.ease_out_angle_threshold * Math.PI) / 180
            : null,
          i = this.props.min_angular_velocity
            ? (this.props.min_angular_velocity * Math.PI) / 180
            : null,
          r = this.props.max_angular_velocity
            ? (this.props.max_angular_velocity * Math.PI) / 180
            : null;
        return O.createElement(
          "vsg-elastic-head-transform",
          {
            "start-angle-threshold": e,
            "stop-angle-threshold": t,
            "ease-in-time": this.props.ease_in_time,
            "ease-in-power": this.props.ease_in_power,
            "ease-out-angle-threshold": n,
            "ease-out-power": this.props.ease_out_power,
            "min-angular-velocity": i,
            "max-angular-velocity": r,
            "lock-to-horizon": this.props.lock_to_horizon,
            "translation-behavior": this.props.translation_behavior,
          },
          this.props.children
        );
      }
    }
    class Re extends $ {
      constructor(e) {
        super(e);
      }
      internalRender() {
        return O.createElement(
          "vsg-head-facing-transform",
          null,
          this.props.children
        );
      }
    }
    function Me() {
      var e, t;
      return null !=
        (t = null === (e = VRHTML) || void 0 === e ? void 0 : e.Environment())
        ? t
        : he.Unknown;
    }
    !(function (e) {
      (e[(e.Desktop = 1)] = "Desktop"),
        (e[(e.Overlay = 2)] = "Overlay"),
        (e[(e.Unknown = 100)] = "Unknown");
    })(he || (he = {})),
      window.hasOwnProperty("VRHTML") || (window.VRHTML = null),
      (function (e) {
        (e[(e.Auto = 0)] = "Auto"),
          (e[(e.Low = 1)] = "Low"),
          (e[(e.Medium = 2)] = "Medium"),
          (e[(e.High = 3)] = "High");
      })(pe || (pe = {})),
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
      })(me || (me = {})),
      (function (e) {
        (e[(e.Seated = 0)] = "Seated"),
          (e[(e.Standing = 1)] = "Standing"),
          (e[(e.RawAndUncalibrated = 2)] = "RawAndUncalibrated");
      })(ve || (ve = {}));
    var Te, Ee, Ie, Pe, xe, Ve, Le, Ne, Fe, Be, He, Ae, je, Ue, We, ze, Ge;
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
    })(Te || (Te = {})),
      (function (e) {
        (e[(e.Activated = 0)] = "Activated"),
          (e[(e.Deactivated = 1)] = "Deactivated");
      })(Ee || (Ee = {})),
      (function (e) {
        (e[(e.NoDashboardTab = 8)] = "NoDashboardTab"),
          (e[(e.AcceptsGamepadEvents = 16)] = "AcceptsGamepadEvents"),
          (e[(e.ShowGamepadFocus = 32)] = "ShowGamepadFocus"),
          (e[(e.SendVRDiscreteScrollEvents = 64)] =
            "SendVRDiscreteScrollEvents"),
          (e[(e.SendVRTouchpadEvents = 128)] = "SendVRTouchpadEvents"),
          (e[(e.ShowTouchPadScrollWheel = 256)] = "ShowTouchPadScrollWheel"),
          (e[(e.TransferOwnershipToInternalProcess = 512)] =
            "TransferOwnershipToInternalProcess"),
          (e[(e.SideBySide_Parallel = 1024)] = "SideBySide_Parallel"),
          (e[(e.SideBySide_Crossed = 2048)] = "SideBySide_Crossed"),
          (e[(e.Panorama = 4096)] = "Panorama"),
          (e[(e.StereoPanorama = 8192)] = "StereoPanorama"),
          (e[(e.SortWithNonSceneOverlays = 16384)] =
            "SortWithNonSceneOverlays"),
          (e[(e.VisibleInDashboard = 32768)] = "VisibleInDashboard"),
          (e[(e.MakeOverlaysInteractiveIfVisible = 65536)] =
            "MakeOverlaysInteractiveIfVisible"),
          (e[(e.SendVRSmoothScrollEvents = 131072)] =
            "SendVRSmoothScrollEvents"),
          (e[(e.ProtectedContent = 262144)] = "ProtectedContent"),
          (e[(e.HideLaserIntersection = 524288)] = "HideLaserIntersection"),
          (e[(e.WantsModalBehavior = 1048576)] = "WantsModalBehavior");
      })(Ie || (Ie = {})),
      (function (e) {
        (e[(e.None = 0)] = "None"), (e[(e.Mouse = 1)] = "Mouse");
      })(Pe || (Pe = {})),
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
          (e[(e.BlockServerShutdown_Bool = 1023)] = "BlockServerShutdown_Bool"),
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
          (e[(e.CameraStreamFormat_Int32 = 1041)] = "CameraStreamFormat_Int32"),
          (e[(e.AdditionalDeviceSettingsPath_String = 1042)] =
            "AdditionalDeviceSettingsPath_String"),
          (e[(e.ReportsTimeSinceVSync_Bool = 2e3)] =
            "ReportsTimeSinceVSync_Bool"),
          (e[(e.SecondsFromVsyncToPhotons_Float = 2001)] =
            "SecondsFromVsyncToPhotons_Float"),
          (e[(e.DisplayFrequency_Float = 2002)] = "DisplayFrequency_Float"),
          (e[(e.UserIpdMeters_Float = 2003)] = "UserIpdMeters_Float"),
          (e[(e.CurrentUniverseId_Uint64 = 2004)] = "CurrentUniverseId_Uint64"),
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
          (e[(e.Audio_SupportsDualSpeakerAndJackOutput_Bool = 2303)] =
            "Audio_SupportsDualSpeakerAndJackOutput_Bool"),
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
          (e[(e.AttachedDeviceId_String = 3e3)] = "AttachedDeviceId_String"),
          (e[(e.SupportedButtons_Uint64 = 3001)] = "SupportedButtons_Uint64"),
          (e[(e.Axis0Type_Int32 = 3002)] = "Axis0Type_Int32"),
          (e[(e.Axis1Type_Int32 = 3003)] = "Axis1Type_Int32"),
          (e[(e.Axis2Type_Int32 = 3004)] = "Axis2Type_Int32"),
          (e[(e.Axis3Type_Int32 = 3005)] = "Axis3Type_Int32"),
          (e[(e.Axis4Type_Int32 = 3006)] = "Axis4Type_Int32"),
          (e[(e.ControllerRoleHint_Int32 = 3007)] = "ControllerRoleHint_Int32"),
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
          (e[(e.HasDisplayComponent_Bool = 6002)] = "HasDisplayComponent_Bool"),
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
          (e[(e.TrackedDeviceProperty_Max = 1e6)] =
            "TrackedDeviceProperty_Max");
      })(xe || (xe = {})),
      (function (e) {
        (e[(e.Invalid = 0)] = "Invalid"),
          (e[(e.HMD = 1)] = "HMD"),
          (e[(e.Controller = 2)] = "Controller"),
          (e[(e.GenericTracker = 3)] = "GenericTracker"),
          (e[(e.TrackingReference = 4)] = "TrackingReference"),
          (e[(e.DisplayRedirect = 5)] = "DisplayRedirect");
      })(Ve || (Ve = {})),
      (function (e) {
        (e[(e.Unknown = 0)] = "Unknown"),
          (e[(e.NVIDIA = 1)] = "NVIDIA"),
          (e[(e.AMD = 2)] = "AMD");
      })(Le || (Le = {})),
      (function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Starting = 1)] = "Starting"),
          (e[(e.Quitting = 2)] = "Quitting"),
          (e[(e.Running = 3)] = "Running"),
          (e[(e.Waiting = 4)] = "Waiting");
      })(Ne || (Ne = {})),
      (function (e) {
        (e[(e.ButtonPress_0 = 0)] = "ButtonPress_0"),
          (e[(e.ButtonPress_1 = 1)] = "ButtonPress_1"),
          (e[(e.ButtonPress_2 = 2)] = "ButtonPress_2"),
          (e[(e.ButtonPress_3 = 3)] = "ButtonPress_3"),
          (e[(e.CouldntFindSystemOverlay = 4)] = "CouldntFindSystemOverlay"),
          (e[(e.CouldntFindOrCreateClientOverlay = 5)] =
            "CouldntFindOrCreateClientOverlay"),
          (e[(e.ApplicationQuit = 6)] = "ApplicationQuit");
      })(Fe || (Fe = {})),
      (function (e) {
        (e[(e.Normal = 0)] = "Normal"),
          (e[(e.Password = 1)] = "Password"),
          (e[(e.Submit = 2)] = "Submit");
      })(Be || (Be = {})),
      (function (e) {
        (e[(e.SingleLine = 0)] = "SingleLine"),
          (e[(e.MultipleLines = 1)] = "MultipleLines");
      })(He || (He = {})),
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
      })(Ae || (Ae = {})),
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
      })(je || (je = {})),
      (function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.ThisSteamVR = 1)] = "ThisSteamVR"),
          (e[(e.AnotherSteamVR = 2)] = "AnotherSteamVR"),
          (e[(e.AnotherRuntime = 3)] = "AnotherRuntime"),
          (e[(e.Error = -1)] = "Error");
      })(Ue || (Ue = {})),
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
          (e[(e.TrackedControllerRole_Max = 5)] = "TrackedControllerRole_Max");
      })(We || (We = {})),
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
      })(ze || (ze = {})),
      (function (e) {
        (e[(e.Minimal = 1)] = "Minimal"), (e[(e.Modal = 2)] = "Modal");
      })(Ge || (Ge = {}));
    class Ke extends O.Component {
      constructor(e) {
        super(e);
        let t = {};
        if (VRHTML)
          try {
            let e = VRHTML.VRProperties.GetStringProperty(
              this.props.sDevicePath,
              xe.RenderModelName_String
            );
            if (e) {
              let n = VRHTML.VRRenderModelsInternal.FindComponentForInputSource(
                e,
                this.props.sInputPath
              );
              if (n) {
                let i = VRHTML.VRRenderModels.GetComponentStateForDevicePath(
                  e,
                  n,
                  this.props.sDevicePath
                );
                i && (t.xfTransform = i.xfTrackingToComponentLocal);
              }
            }
          } catch (e) {
            console.log(
              "Component transform invalid for ",
              this.props.sDevicePath
            );
          }
        this.state = t;
      }
      render() {
        return O.createElement(
          be,
          {
            id: this.props.id,
            parent_path: this.props.sDevicePath,
            transform: this.state.xfTransform,
          },
          this.props.children
        );
      }
    }
    class qe extends $ {
      constructor(e) {
        super(e);
      }
      internalRender() {
        return O.createElement(
          "vsg-callout-transform",
          { offset: J(this.props.vOffset) },
          this.props.children
        );
      }
    }
    class Qe extends $ {
      constructor(e) {
        super(e), super.setBuildNodeOverride(this.buildNode);
      }
      getNodeType() {
        return "dashboardtransform";
      }
      buildNode(e, t) {
        return [e, this.createSgNode(t)];
      }
    }
    Object(i.b)([o.a], Qe.prototype, "buildNode", null),
      n.d(t, "c", function () {
        return a;
      }),
      n.d(t, "g", function () {
        return s;
      }),
      n.d(t, "a", function () {
        return l;
      }),
      n.d(t, "O", function () {
        return c;
      }),
      n.d(t, "hb", function () {
        return d;
      }),
      n.d(t, "ib", function () {
        return u;
      }),
      n.d(t, "U", function () {
        return h;
      }),
      n.d(t, "V", function () {
        return p;
      }),
      n.d(t, "M", function () {
        return m;
      }),
      n.d(t, "N", function () {
        return v;
      }),
      n.d(t, "I", function () {
        return b;
      }),
      n.d(t, "R", function () {
        return g;
      }),
      n.d(t, "T", function () {
        return _;
      }),
      n.d(t, "b", function () {
        return y;
      }),
      n.d(t, "J", function () {
        return S;
      }),
      n.d(t, "W", function () {
        return f;
      }),
      n.d(t, "h", function () {
        return k;
      }),
      n.d(t, "L", function () {
        return C;
      }),
      n.d(t, "fb", function () {
        return D;
      }),
      n.d(t, "j", function () {
        return ne;
      }),
      n.d(t, "jb", function () {
        return ie;
      }),
      n.d(t, "X", function () {
        return re;
      }),
      n.d(t, "S", function () {
        return te;
      }),
      n.d(t, "B", function () {
        return oe;
      }),
      n.d(t, "lb", function () {
        return be;
      }),
      n.d(t, "kb", function () {
        return ge;
      }),
      n.d(t, "f", function () {
        return U;
      }),
      n.d(t, "cb", function () {
        return G;
      }),
      n.d(t, "gb", function () {
        return K;
      }),
      n.d(t, "Q", function () {
        return q;
      }),
      n.d(t, "eb", function () {
        return fe;
      }),
      n.d(t, "u", function () {
        return de;
      }),
      n.d(t, "db", function () {
        return ke;
      }),
      n.d(t, "P", function () {
        return Ce;
      }),
      n.d(t, "bb", function () {
        return De;
      }),
      n.d(t, "Z", function () {
        return Oe;
      }),
      n.d(t, "s", function () {
        return ae;
      }),
      n.d(t, "t", function () {
        return se;
      }),
      n.d(t, "ab", function () {
        return ce;
      }),
      n.d(t, "Y", function () {
        return Se;
      }),
      n.d(t, "G", function () {
        return we;
      }),
      n.d(t, "K", function () {
        return Re;
      }),
      n.d(t, "e", function () {
        return Ke;
      }),
      n.d(t, "d", function () {
        return qe;
      }),
      n.d(t, "k", function () {
        return Qe;
      }),
      n.d(t, "H", function () {
        return he;
      }),
      n.d(t, "i", function () {
        return Me;
      }),
      n.d(t, "q", function () {
        return pe;
      }),
      n.d(t, "z", function () {
        return me;
      }),
      n.d(t, "A", function () {
        return ve;
      }),
      n.d(t, "ob", function () {
        return 0;
      }),
      n.d(t, "nb", function () {
        return -1;
      }),
      n.d(t, "m", function () {
        return Ee;
      }),
      n.d(t, "D", function () {
        return Ie;
      }),
      n.d(t, "E", function () {
        return Pe;
      }),
      n.d(t, "y", function () {
        return xe;
      }),
      n.d(t, "x", function () {
        return Ve;
      }),
      n.d(t, "v", function () {
        return Ne;
      }),
      n.d(t, "C", function () {
        return Fe;
      }),
      n.d(t, "p", function () {
        return Be;
      }),
      n.d(t, "o", function () {
        return He;
      }),
      n.d(t, "l", function () {
        return je;
      }),
      n.d(t, "r", function () {
        return Ue;
      }),
      n.d(t, "w", function () {
        return We;
      }),
      n.d(t, "F", function () {
        return ze;
      }),
      n.d(t, "n", function () {
        return Ge;
      });
    t.mb = VRHTML;
  },
  "8GAN": function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return u;
    }),
      n.d(t, "a", function () {
        return h;
      }),
      n.d(t, "c", function () {
        return p;
      });
    var i,
      r = n("mrSG"),
      o = n("q1tI"),
      a = n("7wIv"),
      s = n("/i/y"),
      l = n("GXif"),
      c = n("okNM"),
      d = n("hcOo");
    const u = "resetuniverseorigincountdown",
      h = "begin_reset_universe_origin_countdown";
    let p = (i = class extends o.Component {
      constructor(e) {
        super(e),
          (this.m_countdownTimeout = 0),
          (this.m_fadeFinishTimeout = 0),
          (this.m_mailbox = new s.c()),
          this.m_mailbox.Init(u).then(() => {
            this.m_mailbox.RegisterHandler(
              h,
              this.OnBeginResetUniverseOriginCountdown
            );
          }),
          (this.state = { visible: !1, fading: !1, countdown_seconds: 0 });
      }
      componentWillUnmount() {
        clearTimeout(this.m_countdownTimeout),
          (this.m_countdownTimeout = setTimeout(this.CountdownTick, 1e3)),
          clearTimeout(this.m_fadeFinishTimeout),
          (this.m_fadeFinishTimeout = 0);
      }
      OnBeginResetUniverseOriginCountdown(e) {
        clearTimeout(this.m_countdownTimeout),
          (this.m_countdownTimeout = setTimeout(this.CountdownTick, 1e3)),
          clearTimeout(this.m_fadeFinishTimeout),
          (this.m_fadeFinishTimeout = 0),
          this.setState({
            visible: !0,
            fading: !1,
            countdown_seconds: e.countdown_seconds,
            universe: e.universe,
          });
      }
      CountdownTick() {
        var e;
        clearTimeout(this.m_countdownTimeout),
          1 == this.state.countdown_seconds
            ? ((this.m_countdownTimeout = 0),
              null === (e = s.mb) ||
                void 0 === e ||
                e.VRChaperone.ResetZeroPose(this.state.universe),
              clearTimeout(this.m_fadeFinishTimeout),
              (this.m_fadeFinishTimeout = setTimeout(
                this.HideOverlay,
                i.kFadeDurationMs
              )),
              this.setState({ visible: !0, fading: !0, countdown_seconds: 0 }))
            : ((this.m_countdownTimeout = setTimeout(this.CountdownTick, 1e3)),
              this.setState({
                visible: !0,
                fading: !1,
                countdown_seconds: this.state.countdown_seconds - 1,
              }));
      }
      HideOverlay() {
        clearTimeout(this.m_fadeFinishTimeout),
          (this.m_fadeFinishTimeout = 0),
          this.setState({ visible: !1, fading: !1, countdown_seconds: 0 });
      }
      render() {
        var e, t;
        if (!this.state.visible) return null;
        let n =
          0.8 *
          (null !=
          (t =
            null === (e = s.mb) || void 0 === e
              ? void 0
              : e.VRProperties.GetFloatProperty(s.ob, s.y.DashboardScale_Float))
            ? t
            : 1);
        return o.createElement(
          s.lb,
          { parent_path: "/user/head" },
          o.createElement(
            s.lb,
            { translation: { y: -0.05, z: -0.9 }, scale: n },
            o.createElement(
              s.Y,
              {
                width: void 0,
                height: i.kPanelHeight,
                interactive: !1,
                sort_order: 1e3,
              },
              o.createElement(
                "div",
                {
                  className: Object(d.a)("ResetSeatedCountdownParent", [
                    "Fading",
                    this.state.fading,
                  ]),
                  style: { width: i.kPixelWidth },
                },
                o.createElement(
                  "div",
                  { className: "FlexColumn" },
                  o.createElement(
                    "div",
                    { className: "ResetSeatedCountdownRow" },
                    o.createElement(
                      "div",
                      { className: "ResetSeatedCountdownText" },
                      this.state.countdown_seconds
                    )
                  ),
                  o.createElement(
                    "div",
                    { className: "ResetSeatedCountdownTextDesc" },
                    Object(l.c)("#Resetting_Countdown")
                  )
                )
              )
            )
          )
        );
      }
    });
    (p.kPanelHeight = 0.2),
      (p.kPixelWidth = 400),
      (p.kFadeDurationMs = 1e3),
      Object(r.b)(
        [a.bind],
        p.prototype,
        "OnBeginResetUniverseOriginCountdown",
        null
      ),
      Object(r.b)([a.bind], p.prototype, "CountdownTick", null),
      Object(r.b)([a.bind], p.prototype, "HideOverlay", null),
      (p = i = Object(r.b)([c.a], p));
  },
  Ck0r: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    });
    var i = n("q1tI");
    function r(e) {
      return i.createElement(
        "svg",
        Object.assign(
          {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            x: "0px",
            y: "0px",
            viewBox: "0 0 100 100",
            xmlSpace: "preserve",
          },
          e
        ),
        i.createElement(
          "g",
          null,
          i.createElement("path", {
            d: "M93.8,50v28.1c0,8.6-7,15.6-15.6,15.6H21.9c-8.6,0-15.6-7-15.6-15.6V21.9c0-8.6,7-15.6,15.6-15.6H50c1.7,0,3.1,1.4,3.1,3.1\r\n\t\t\t\ts-1.4,3.1-3.1,3.1H21.9c-5.2,0-9.4,4.2-9.4,9.4v56.3c0,5.2,4.2,9.4,9.4,9.4h56.3c5.2,0,9.4-4.2,9.4-9.4V50c0-1.7,1.4-3.1,3.1-3.1\r\n\t\t\t\tS93.8,48.3,93.8,50z M68.8,12.5h14.3L47.8,47.8c-1.2,1.2-1.2,3.2,0,4.4c0,0,0,0,0,0c1.2,1.2,3.2,1.2,4.4,0c0,0,0,0,0,0l35.3-35.3\r\n\t\t\t\tv14.3c0,1.7,1.4,3.1,3.1,3.1l0,0c1.7,0,3.1-1.4,3.1-3.1V9.4c0-0.8-0.3-1.6-0.9-2.2c-0.6-0.6-1.4-0.9-2.2-0.9H68.8\r\n\t\t\t\tc-1.7,0-3.1,1.4-3.1,3.1S67,12.5,68.8,12.5z",
          })
        )
      );
    }
  },
  Gmup: function (e, t, n) {
    "use strict";
    var i,
      r,
      o,
      a = n("mrSG"),
      s = n("/i/y"),
      l = n("7wIv"),
      c = n.n(l),
      d = n("q1tI"),
      u = n("6YgL"),
      h = n("7uy8"),
      p = n("GXif"),
      m = n("Q+Z6"),
      v = n("okNM"),
      b = n("YRJX"),
      g = n("2vnA"),
      _ = n("X3sx"),
      y = n("p9CI"),
      S = n("nAcY");
    var f;
    !(function (e) {
      (e[(e.Dashboard = 0)] = "Dashboard"),
        (e[(e.LeftHand = 1)] = "LeftHand"),
        (e[(e.RightHand = 2)] = "RightHand"),
        (e[(e.World = 3)] = "World");
    })(f || (f = {}));
    let k = (i = class extends d.Component {
      constructor(e) {
        super(e),
          (this.m_mailbox = new s.c()),
          (this.m_refWindowScrollPanel = d.createRef()),
          (this.state = { desktopView: null }),
          this.m_mailbox.Init(i.k_sMailboxName);
      }
      setSiblingReferences(e) {
        this.setState({ desktopView: e });
      }
      onWindowViewCreated(e, t) {
        var n, i;
        null === (n = this.m_refWindowScrollPanel.current) ||
          void 0 === n ||
          n.scrollTo({
            left:
              null === (i = this.m_refWindowScrollPanel.current) || void 0 === i
                ? void 0
                : i.scrollWidth,
            behavior: "smooth",
          });
      }
      render() {
        var e, t, n, i;
        if (
          !this.state.desktopView ||
          (null === (e = this.state.desktopView) || void 0 === e
            ? void 0
            : e.state.bIsUsingSteamDesktop)
        )
          return null;
        const r =
          this.props.bWindowViewEnabled ||
          (null === (t = this.state.desktopView) || void 0 === t
            ? void 0
            : t.state.desktopIndices.length) > 1;
        return d.createElement(
          b.f,
          Object.assign({}, this.props, {
            additionalClassNames: this.props.bWindowViewEnabled
              ? "DesktopTray FixedWidth"
              : "DesktopTray",
          }),
          r &&
            d.createElement(
              y.b,
              {
                scrollDirection: y.a.Horizontal,
                className: "Section Grow",
                style: { marginRight: 0, marginLeft: "9px" },
                ref: this.m_refWindowScrollPanel,
              },
              d.createElement(
                "div",
                {
                  style: {
                    paddingRight: "16px",
                    display: "flex",
                    flexDirection: "row",
                    margin: 0,
                  },
                },
                null === (n = this.state.desktopView) || void 0 === n
                  ? void 0
                  : n.state.desktopIndices.map((e) => {
                      var t;
                      return d.createElement(b.n, {
                        additionalClassNames: "ViewButton Fixed",
                        key: e,
                        label: e.toString(),
                        active:
                          (null === (t = this.state.desktopView) || void 0 === t
                            ? void 0
                            : t.currentDesktopIndex) == e,
                        title: Object(p.c)("#Desktop_X", e),
                        onClick: () => {
                          var t;
                          return null === (t = this.state.desktopView) ||
                            void 0 === t
                            ? void 0
                            : t.onDesktopChange(e);
                        },
                      });
                    }),
                Array.from(
                  null === (i = this.state.desktopView) || void 0 === i
                    ? void 0
                    : i.state.mapWindowInfo.keys()
                ).map((e) => {
                  var t, n, i;
                  return d.createElement(b.n, {
                    additionalClassNames: "ViewButton",
                    iconUrl: "/dashboard/images/icons/svr_desktop_alt.svg",
                    key: e,
                    active:
                      (null === (t = this.state.desktopView) || void 0 === t
                        ? void 0
                        : t.state.sCurrentWindowOverlayKey) == e,
                    title:
                      null ===
                        (i = this.props.mapWindows.get(
                          null === (n = this.state.desktopView) || void 0 === n
                            ? void 0
                            : n.state.mapWindowInfo.get(e).sHwnd
                        )) || void 0 === i
                        ? void 0
                        : i.title,
                    onClick: () => {
                      var t;
                      return null === (t = this.state.desktopView) ||
                        void 0 === t
                        ? void 0
                        : t.onWindowViewChange(e);
                    },
                  });
                })
              )
            ),
          this.props.bWindowViewEnabled &&
            d.createElement(
              "div",
              { className: "Section", style: { marginRight: 0 } },
              d.createElement(b.n, {
                iconUrl: "/dashboard/images/icons/icon_add.png",
                additionalClassNames: "AddWindow",
                title: Object(p.c)("#AddView"),
                onClick: this.props.onToggleWindowList,
                onMouseEnter: this.props.onClearPopupMenuTimeout,
                onMouseLeave: () => this.props.onStartPopupMenuTimeout(500),
              })
            ),
          d.createElement(
            "div",
            { className: "Section" },
            d.createElement(b.n, {
              iconUrl: this.props.bDarkMode
                ? "/dashboard/images/icons/svr_nightmode.svg"
                : "/dashboard/images/icons/svr_lightmode.svg",
              title: Object(p.c)("#Settings_ToggleDarkMode"),
              onClick: this.props.onToggleDarkMode,
            })
          )
        );
      }
    });
    (k.k_sMailboxName = "systemui_desktoptray"),
      (k = i = Object(a.b)([v.a], k));
    let C = (r = class extends d.Component {
      constructor(e) {
        super(e),
          (this.m_mailbox = new s.c()),
          (this.state = {
            bIsUsingSteamDesktop: !1,
            bIsReady: !1,
            desktopIndices: [],
            mapWindowInfo: new Map(),
            mapDesktopInfo: new Map(),
            sCurrentWindowOverlayKey: "",
            currentOverlayDockLocation: f.Dashboard,
            bKeyboardVisible: !1,
          }),
          this.m_mailbox.Init(r.k_sMailboxName).then(() => {
            this.m_mailbox.RegisterHandler(
              "desktop_keyboard_closed",
              this.OnKeyboardClosed
            );
          });
      }
      componentDidMount() {
        var e, t, n;
        null ===
        (null === (e = VRHTML) || void 0 === e
          ? void 0
          : e.VROverlay.FindOverlay("valve.steam.desktop"))
          ? (null === (t = VRHTML) ||
              void 0 === t ||
              t.RegisterForDesktopViewReadyEvents(this.onDesktopViewReady),
            null === (n = VRHTML) ||
              void 0 === n ||
              n.RegisterForDesktopViewUpdatingEvents(
                this.onDesktopViewUpdating
              ),
            this.updateDesktopIndices())
          : this.setState({ bIsUsingSteamDesktop: !0 });
      }
      componentDidUpdate(e, t) {
        if (
          (!this.props.visible &&
            this.state.bKeyboardVisible &&
            this.setState({ bKeyboardVisible: !1 }),
          t.bKeyboardVisible != this.state.bKeyboardVisible)
        )
          if (this.state.bKeyboardVisible) {
            let e =
              "" != this.state.sCurrentWindowOverlayKey
                ? this.state.sCurrentWindowOverlayKey
                : "system.desktop." + this.currentDesktopIndex;
            VRHTML.VROverlay.ShowKeyboardForOverlay(
              e,
              s.p.Normal,
              s.o.SingleLine,
              s.n.Minimal,
              "Desktop Text",
              1024,
              "",
              0
            ),
              VRHTML.VROverlay.SetKeyboardPositionForOverlay(e, {});
          } else VRHTML.VROverlay.HideKeyboard();
      }
      get desktopViewScaleSettingKey() {
        return "/settings/dashboard/desktopScale" + this.currentDesktopIndex;
      }
      get desktopCount() {
        return this.state.desktopIndices.length;
      }
      get sCurrentOverlayKey() {
        return "" != this.state.sCurrentWindowOverlayKey
          ? this.state.sCurrentWindowOverlayKey
          : "system.desktop." + this.currentDesktopIndex;
      }
      get currentDesktopIndex() {
        var e;
        return "" != this.state.sCurrentWindowOverlayKey
          ? -1
          : null != (e = m.d.settings.get("/settings/dashboard/desktopIndex"))
          ? e
          : 1;
      }
      get currentWindowHwnd() {
        return "" == this.state.sCurrentWindowOverlayKey
          ? ""
          : this.state.mapWindowInfo.get(this.state.sCurrentWindowOverlayKey)
              .sHwnd;
      }
      get desktopViewScale() {
        var e;
        return null != (e = m.d.settings.get(this.desktopViewScaleSettingKey))
          ? e
          : 1;
      }
      dockOverlay(e, t) {
        (t != f.LeftHand && t != f.RightHand) ||
          (this.state.mapDesktopInfo.forEach((e) => {
            e.dockLocation == t && (e.dockLocation = f.Dashboard);
          }),
          this.state.mapWindowInfo.forEach((e) => {
            e.dockLocation == t && (e.dockLocation = f.Dashboard);
          })),
          e.startsWith("system.desktop.")
            ? (this.state.mapDesktopInfo.get(
                parseInt(e.charAt(e.length - 1))
              ).dockLocation = t)
            : (this.state.mapWindowInfo.get(e).dockLocation = t),
          (this.currentDesktopIndex != parseInt(e.charAt(e.length - 1)) &&
            this.state.sCurrentWindowOverlayKey != e) ||
            this.setState({ currentOverlayDockLocation: t });
      }
      onDesktopScaleChange(e) {
        m.d.SetSettingsValue(this.desktopViewScaleSettingKey, e);
      }
      onDesktopChange(e) {
        m.d.SetSettingsValue("/settings/dashboard/desktopIndex", e),
          this.setState({
            sCurrentWindowOverlayKey: "",
            currentOverlayDockLocation:
              this.state.mapDesktopInfo.get(e).dockLocation,
          });
      }
      onDesktopViewUpdating() {
        this.setState({ bIsReady: !1, desktopIndices: [] });
      }
      onDesktopViewReady() {
        this.updateDesktopIndices();
      }
      onWindowViewCreated(e, t) {
        this.state.mapWindowInfo.set(e, {
          sHwnd: t,
          dockLocation: f.Dashboard,
        }),
          this.setState({
            sCurrentWindowOverlayKey: e,
            currentOverlayDockLocation: f.Dashboard,
          });
      }
      onWindowViewDestroyed(e) {
        this.state.sCurrentWindowOverlayKey == e && this.onDesktopChange(1),
          this.state.mapWindowInfo.delete(e);
      }
      onWindowViewChange(e) {
        this.setState({
          sCurrentWindowOverlayKey: e,
          currentOverlayDockLocation:
            this.state.mapWindowInfo.get(e).dockLocation,
        });
      }
      updateDesktopIndices() {
        var e, t;
        let n = 1,
          i = [];
        for (
          this.state.mapDesktopInfo.clear();
          null !==
          (null === (e = VRHTML) || void 0 === e
            ? void 0
            : e.VROverlay.FindOverlay("system.desktop." + n));

        )
          i.push(n),
            this.state.mapDesktopInfo.set(n, { dockLocation: f.Dashboard }),
            n++;
        (null != (t = m.d.settings.get("/settings/dashboard/desktopIndex"))
          ? t
          : 1) > i.length &&
          m.d.SetSettingsValue("/settings/dashboard/desktopIndex", 1),
          this.setState({ bIsReady: !0, desktopIndices: i });
      }
      CloseWindow() {
        let e = "";
        this.props.mapWindows.forEach((t) => {
          t.overlay_key == this.state.sCurrentWindowOverlayKey && (e = t.hwnd);
        });
        let t = { type: "request_destroy_window_view", hwnd: e };
        this.m_mailbox.SendMessage("desktopview", t);
      }
      ToggleKeyboard() {
        this.setState((e) => ({ bKeyboardVisible: !e.bKeyboardVisible }));
      }
      OnKeyboardClosed() {
        this.setState({ bKeyboardVisible: !1 });
      }
      currentOverlayWidth() {
        return 2048;
      }
      renderControlBar() {
        return d.createElement(
          s.lb,
          { parent_id: "DesktopControlBar" },
          d.createElement(
            s.Y,
            {
              curvature_origin_id: h.j,
              origin: s.s.TopCenter,
              interactive: !0,
              target_dpi_panel_id: b.q,
              debug_name: "DesktopControlBar",
              reflect: 0.1,
            },
            d.createElement(
              "div",
              {
                className: "OverlayControlBar",
                style: { width: this.currentOverlayWidth() },
              },
              d.createElement(
                "div",
                { className: "Section" },
                d.createElement(
                  "div",
                  { className: "Label" },
                  Object(p.c)("#Size")
                ),
                d.createElement(_.a, {
                  additionalClassName: "OverlayControlBarSlider",
                  min: 0.75,
                  max: 1.5,
                  value: this.desktopViewScale,
                  valueStyleVariant: _.c.OnHandle,
                  onChange: this.onDesktopScaleChange,
                  detents: [1],
                  renderValue: (e) => (100 * e).toFixed(0) + "%",
                }),
                d.createElement(b.n, {
                  iconUrl: "/dashboard/images/icons/svr_keyboard.svg",
                  additionalClassNames: "Keyboard",
                  onClick: this.ToggleKeyboard,
                }),
                d.createElement(b.n, {
                  iconUrl: "/dashboard/images/icons/mirror_left.png",
                  onClick: () => {
                    this.state.currentOverlayDockLocation != f.LeftHand
                      ? this.props.onDockOverlay(
                          this.sCurrentOverlayKey,
                          f.LeftHand
                        )
                      : this.props.onDockOverlay(
                          this.sCurrentOverlayKey,
                          f.Dashboard
                        );
                  },
                  enabled:
                    VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                      s.w.TrackedControllerRole_LeftHand
                    ) != s.nb,
                  active: this.state.currentOverlayDockLocation == f.LeftHand,
                }),
                d.createElement(b.n, {
                  iconUrl: "/dashboard/images/icons/mirror_right.png",
                  onClick: () => {
                    this.state.currentOverlayDockLocation != f.RightHand
                      ? this.props.onDockOverlay(
                          this.sCurrentOverlayKey,
                          f.RightHand
                        )
                      : this.props.onDockOverlay(
                          this.sCurrentOverlayKey,
                          f.Dashboard
                        );
                  },
                  enabled:
                    VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                      s.w.TrackedControllerRole_RightHand
                    ) != s.nb,
                  active: this.state.currentOverlayDockLocation == f.RightHand,
                }),
                d.createElement(b.n, {
                  iconUrl: "/dashboard/images/icons/icon_globe.png",
                  onClick: () => {
                    this.state.currentOverlayDockLocation != f.World
                      ? this.props.onDockOverlay(
                          this.sCurrentOverlayKey,
                          f.World
                        )
                      : this.props.onDockOverlay(
                          this.sCurrentOverlayKey,
                          f.Dashboard
                        );
                  },
                  active: this.state.currentOverlayDockLocation == f.World,
                }),
                this.props.bWindowViewEnabled &&
                  d.createElement(b.n, {
                    additionalClassNames: "CloseWindow",
                    iconUrl: "/dashboard/images/icons/icon_close_black.png",
                    onClick: this.CloseWindow,
                    enabled: "" != this.state.sCurrentWindowOverlayKey,
                  })
              )
            )
          )
        );
      }
      render() {
        var e;
        if (
          !this.props.visible ||
          this.state.currentOverlayDockLocation == f.World
        )
          return null;
        if (this.state.bIsUsingSteamDesktop)
          return d.createElement(s.S, {
            mountedId: Object(s.f)(h.E, "valve.steam.desktop"),
          });
        if (!this.state.bIsReady)
          return d.createElement(
            b.h,
            { visible: !0 },
            d.createElement(
              "div",
              { className: "NoDesktopFound" },
              d.createElement("h2", null, Object(p.c)("#DesktopViewsUpdating"))
            )
          );
        if (0 === this.state.desktopIndices.length)
          return d.createElement(
            b.h,
            { visible: !0 },
            d.createElement(
              "div",
              { className: "NoDesktopFound" },
              d.createElement("h2", null, Object(p.c)("#NoDesktopFound"))
            )
          );
        if (
          this.state.currentOverlayDockLocation == f.LeftHand ||
          this.state.currentOverlayDockLocation == f.RightHand
        )
          return d.createElement(
            b.h,
            { visible: !0 },
            d.createElement(
              "div",
              { className: "NoDesktopFound" },
              d.createElement(
                "h2",
                null,
                this.state.currentOverlayDockLocation == f.LeftHand &&
                  Object(p.c)("#DockedOnLeftController"),
                this.state.currentOverlayDockLocation == f.RightHand &&
                  Object(p.c)("#DockedOnRightController")
              ),
              d.createElement(
                u.a,
                {
                  className: "ButtonControl",
                  onClick: () => {
                    this.props.onDockOverlay(
                      this.sCurrentOverlayKey,
                      f.Dashboard
                    );
                  },
                },
                Object(p.c)("#DockHere")
              )
            )
          );
        let t =
          null != (e = m.d.settings.get(this.desktopViewScaleSettingKey))
            ? e
            : 1;
        return -1 == this.currentDesktopIndex
          ? d.createElement(
              d.Fragment,
              null,
              d.createElement(
                s.Y,
                {
                  overlay_key: this.state.sCurrentWindowOverlayKey,
                  height: 2 * t,
                  curvature_origin_id: h.j,
                  interactive: !0,
                  origin: s.s.BottomCenter,
                  debug_name: "System Desktop",
                },
                d.createElement(s.Z, { id: b.r, location: s.s.TopCenter }),
                d.createElement(s.S, {
                  mountedId: Object(s.f)(
                    h.E,
                    this.state.sCurrentWindowOverlayKey + ".cursor"
                  ),
                }),
                d.createElement(s.Z, {
                  id: "DesktopControlBar",
                  location: s.s.BottomCenter,
                })
              ),
              this.renderControlBar()
            )
          : d.createElement(
              d.Fragment,
              null,
              d.createElement(
                s.Y,
                {
                  overlay_key: "system.desktop." + this.currentDesktopIndex,
                  height: 2 * t,
                  curvature_origin_id: h.j,
                  interactive: !0,
                  origin: s.s.BottomCenter,
                  debug_name: "System Desktop",
                },
                d.createElement(s.Z, { id: b.r, location: s.s.TopCenter }),
                d.createElement(s.S, {
                  mountedId: Object(s.f)(
                    h.E,
                    "system.desktop." + this.currentDesktopIndex + ".cursor"
                  ),
                }),
                d.createElement(s.Z, {
                  id: "DesktopControlBar",
                  location: s.s.BottomCenter,
                })
              ),
              this.renderControlBar()
            );
      }
    });
    function D(e) {
      switch (e) {
        case f.LeftHand:
          return "/user/hand/left";
        case f.RightHand:
          return "/user/hand/right";
        default:
          return "";
      }
    }
    (C.k_sMailboxName = "systemui_desktopview"),
      Object(a.b)([g.f], C.prototype, "desktopCount", null),
      Object(a.b)([g.f], C.prototype, "sCurrentOverlayKey", null),
      Object(a.b)([g.f], C.prototype, "currentDesktopIndex", null),
      Object(a.b)([g.f], C.prototype, "currentWindowHwnd", null),
      Object(a.b)([g.f], C.prototype, "desktopViewScale", null),
      Object(a.b)([c.a], C.prototype, "dockOverlay", null),
      Object(a.b)([c.a], C.prototype, "onDesktopScaleChange", null),
      Object(a.b)([c.a], C.prototype, "onDesktopChange", null),
      Object(a.b)([c.a], C.prototype, "onDesktopViewUpdating", null),
      Object(a.b)([c.a], C.prototype, "onDesktopViewReady", null),
      Object(a.b)([c.a], C.prototype, "onWindowViewChange", null),
      Object(a.b)([c.a], C.prototype, "CloseWindow", null),
      Object(a.b)([c.a], C.prototype, "ToggleKeyboard", null),
      Object(a.b)([c.a], C.prototype, "OnKeyboardClosed", null),
      (C = r = Object(a.b)([v.a], C));
    let O = (o = class extends d.Component {
      constructor(e) {
        super(e),
          (this.state = {
            fOverlayScale: this.GetDefaultScaleForLocation(),
            xfTransform: null,
            sParent: D(this.props.dockLocation),
            bIsOutsideMaxDist: !1,
            destination: this.props.dockLocation,
          }),
          (this.m_bIsMoving = !1),
          (this.m_nMoveDeviceIndex = s.nb),
          (this.m_moveDeviceRole = s.w.TrackedControllerRole_Invalid);
      }
      GetDefaultScaleForLocation() {
        switch (this.props.dockLocation) {
          case f.Dashboard:
          case f.LeftHand:
          case f.RightHand:
            return 0.25;
          case f.World:
            return 0.5;
        }
      }
      SetInitialTransformForLocation() {
        if (this.props.xfInitial) {
          switch (this.props.dockLocation) {
            case f.LeftHand:
            case f.RightHand: {
              let e = this.props.xfInitial,
                t = this.state.fOverlayScale;
              Math.abs(e.scale.x - 2) < 0.1 &&
                (t = Math.min(2 * t, o.sfOverlayScaleMax)),
                (e.scale = { x: 1, y: 1, z: 1 }),
                this.setState({ xfTransform: e, fOverlayScale: t });
              break;
            }
            case f.World: {
              let e = this.props.xfInitial,
                t = this.state.fOverlayScale;
              Math.abs(e.scale.x - 1) < 0.1 &&
                (t = Math.max(t / 2, o.sfOverlayScaleMin)),
                (e.scale = { x: 2, y: 2, z: 1 }),
                this.setState({ xfTransform: e, fOverlayScale: t });
              break;
            }
          }
          return;
        }
        let e = Object(s.g)();
        switch (
          ((e.rotation = Object(s.I)({ x: -45, y: 0, z: 0 })),
          this.props.dockLocation)
        ) {
          case f.Dashboard:
          case f.LeftHand:
          case f.RightHand:
            this.setState({ xfTransform: e });
            break;
          case f.World:
            s.fb
              .getInstance()
              .requestSGTransform("system.systemui::active_overlay_transform")
              .then((t) => {
                (e.rotation = t.rotation),
                  (e.scale = { x: 2, y: 2, z: 1 }),
                  (e.translation = {
                    x: t.translation.x,
                    y: t.translation.y,
                    z: t.translation.z - 0.05,
                  }),
                  this.setState({ xfTransform: e });
              });
        }
      }
      componentDidMount() {
        this.SetInitialTransformForLocation();
      }
      componentDidUpdate(e, t) {
        e.dockLocation != this.props.dockLocation &&
          this.setState(
            {
              sParent: D(this.props.dockLocation),
              xfTransform: null,
              bIsOutsideMaxDist: !1,
              destination: this.props.dockLocation,
            },
            this.SetInitialTransformForLocation
          );
      }
      onOverlayScaleChanged(e) {
        this.setState({ fOverlayScale: e });
      }
      computeDestination() {
        if (!this.m_bIsMoving) return;
        let e = VRHTML.GetPose(this.m_nMoveDeviceIndex, s.A.Standing),
          t = null;
        VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
          s.w.TrackedControllerRole_LeftHand
        ) != s.nb && (t = VRHTML.GetPose("/user/hand/left", s.A.Standing));
        let n = null;
        VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
          s.w.TrackedControllerRole_RightHand
        ) != s.nb && (n = VRHTML.GetPose("/user/hand/right", s.A.Standing));
        let i = [];
        switch (this.state.sParent) {
          case "/user/hand/left":
            n && i.push({ pose: n, location: f.RightHand });
            break;
          case "/user/hand/right":
            t && i.push({ pose: t, location: f.LeftHand });
            break;
          case "/user/head":
            t && i.push({ pose: t, location: f.LeftHand }),
              n && i.push({ pose: n, location: f.RightHand });
        }
        if (0 == i.length)
          return void setTimeout(this.computeDestination, o.sfMovePulseMS);
        let r = VRHTML.MultiplyTransforms(
          e.xfDeviceToAbsoluteTracking,
          this.state.xfTransform
        );
        i.forEach((e) => {
          let t = VRHTML.ChangeBasis(r, e.pose.xfDeviceToAbsoluteTracking);
          Object(s.N)(t.translation) > o.sfMaxDockDist
            ? this.state.bIsOutsideMaxDist ||
              (S.b.Instance.triggerHaptic(S.a.SlidingEdge),
              this.setState({ bIsOutsideMaxDist: !0, destination: f.World }))
            : (this.state.bIsOutsideMaxDist ||
                (this.props.dockLocation == f.World &&
                  this.state.destination == f.World)) &&
              (S.b.Instance.triggerHaptic(S.a.SlidingEdge),
              this.setState({
                bIsOutsideMaxDist: !1,
                destination: e.location,
              }));
        }),
          setTimeout(this.computeDestination, o.sfMovePulseMS);
      }
      startMove() {
        if (this.m_bIsMoving) return;
        if (
          (console.log("Starting to move " + this.props.sOverlayKey + "...\n"),
          (this.m_nMoveDeviceIndex =
            VRHTML.VROverlay.GetPrimaryDashboardDevice()),
          this.m_nMoveDeviceIndex == s.nb)
        )
          return;
        this.m_moveDeviceRole =
          VRHTML.VRSystem.GetControllerRoleForTrackedDeviceIndex(
            this.m_nMoveDeviceIndex
          );
        let e,
          t,
          n = VRHTML.GetPose(this.m_nMoveDeviceIndex, s.A.Standing);
        switch (this.props.dockLocation) {
          case f.LeftHand:
            if (
              VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                s.w.TrackedControllerRole_LeftHand
              ) == s.nb
            )
              return;
            e = VRHTML.GetPose("/user/hand/left", s.A.Standing);
            break;
          case f.RightHand:
            if (
              VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                s.w.TrackedControllerRole_RightHand
              ) == s.nb
            )
              return;
            e = VRHTML.GetPose("/user/hand/right", s.A.Standing);
            break;
          default:
            e = {
              xfDeviceToAbsoluteTracking: Object(s.g)(),
              vVelocity: { x: 0, y: 0, z: 0 },
              eTrackingResult: s.z.TrackingResult_Running_OK,
              bPoseIsValid: !0,
            };
        }
        switch (this.m_moveDeviceRole) {
          case s.w.TrackedControllerRole_LeftHand:
            t = "/user/hand/left";
            break;
          case s.w.TrackedControllerRole_RightHand:
            t = "/user/hand/right";
            break;
          default:
            t = "/user/head";
        }
        this.m_bIsMoving = !0;
        let i = VRHTML.MultiplyTransforms(
            e.xfDeviceToAbsoluteTracking,
            this.state.xfTransform
          ),
          r = VRHTML.ChangeBasis(i, n.xfDeviceToAbsoluteTracking);
        this.setState(
          {
            xfTransform: r,
            sParent: t,
            bIsOutsideMaxDist: this.props.dockLocation == f.World,
          },
          this.computeDestination
        ),
          window.addEventListener("mouseup", this.endMove);
      }
      endMove() {
        if (!this.m_bIsMoving) return;
        let e, t;
        if (
          "/user/hand/left" == this.state.sParent ||
          this.state.destination == f.LeftHand
        ) {
          if (
            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
              s.w.TrackedControllerRole_LeftHand
            ) == s.nb
          )
            return;
          e = VRHTML.GetPose("/user/hand/left", s.A.Standing);
        }
        if (
          "/user/hand/right" == this.state.sParent ||
          this.state.destination == f.RightHand
        ) {
          if (
            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
              s.w.TrackedControllerRole_RightHand
            ) == s.nb
          )
            return;
          t = VRHTML.GetPose("/user/hand/right", s.A.Standing);
        }
        let n,
          i = {
            xfDeviceToAbsoluteTracking: Object(s.g)(),
            vVelocity: { x: 0, y: 0, z: 0 },
            eTrackingResult: s.z.TrackingResult_Running_OK,
            bPoseIsValid: !0,
          };
        switch (this.state.destination) {
          case f.LeftHand:
            n = e;
            break;
          case f.RightHand:
            n = t;
            break;
          default:
            n = i;
        }
        let r = VRHTML.GetPose(this.m_nMoveDeviceIndex, s.A.Standing),
          o = VRHTML.MultiplyTransforms(
            r.xfDeviceToAbsoluteTracking,
            this.state.xfTransform
          ),
          a = VRHTML.ChangeBasis(o, n.xfDeviceToAbsoluteTracking);
        this.setState({ xfTransform: a, sParent: D(this.state.destination) }),
          (this.m_bIsMoving = !1),
          this.props.onDockOverlay(
            this.props.sOverlayKey,
            this.state.destination,
            a
          ),
          window.removeEventListener("mouseup", this.endMove);
      }
      render() {
        if ("" == this.props.sOverlayKey || null == this.state.xfTransform)
          return null;
        if (!this.props.bVisible)
          return d.createElement(
            s.lb,
            {
              parent_path: this.state.sParent,
              transform: this.state.xfTransform,
              id: "xf_widget",
            },
            d.createElement(
              s.Y,
              {
                overlay_key: this.props.sOverlayKey,
                height: this.state.fOverlayScale,
                width: void 0,
                interactive: !0,
                origin: s.s.BottomCenter,
              },
              d.createElement(s.S, {
                mountedId: Object(s.f)(h.E, this.props.sOverlayKey + ".cursor"),
              })
            )
          );
        let e = VRHTML.VROverlay.FindOverlay(this.props.sOverlayKey),
          t = VRHTML.VROverlay.GetOverlayTextureSize(e),
          n = this.state.fOverlayScale,
          i = (n / t.unHeight) * t.unWidth,
          r = n + o.sfOverlayTrayHeight,
          a = Math.max(i, 0.175),
          l = r / 2 - o.sfOverlayTrayHeight;
        return d.createElement(
          s.lb,
          {
            parent_path: this.state.sParent,
            transform: this.state.xfTransform,
            id: "xf_widget",
          },
          d.createElement(
            s.lb,
            {
              translation: { y: l, z: -0.005 },
              scale: { x: a, y: r, z: 0.008 },
            },
            d.createElement(
              s.jb,
              { color: { r: 0.016, g: 0.017, b: 0.02 } },
              d.createElement(s.db, { solid: !0, source: "unit_cube" })
            )
          ),
          d.createElement(
            s.Y,
            {
              overlay_key: this.props.sOverlayKey,
              height: this.state.fOverlayScale,
              width: void 0,
              interactive: !0,
              origin: s.s.BottomCenter,
            },
            d.createElement(s.S, {
              mountedId: Object(s.f)(h.E, this.props.sOverlayKey + ".cursor"),
            })
          ),
          d.createElement(
            s.Y,
            {
              height: o.sfOverlayTrayHeight,
              width: void 0,
              interactive: !0,
              origin: s.s.TopCenter,
            },
            d.createElement(
              "div",
              { className: "WindowTray" },
              d.createElement(_.a, {
                additionalClassName: "WindowTraySlider",
                min: o.sfOverlayScaleMin,
                max: o.sfOverlayScaleMax,
                value: this.state.fOverlayScale,
                valueStyleVariant: _.c.OnHandle,
                onChange: this.onOverlayScaleChanged,
                detents: [0.25, 0.5],
                renderValue: (e) => (100 * e).toFixed(0) + "%",
              }),
              d.createElement(
                u.a,
                {
                  className: "WindowTrayButton",
                  key: "move",
                  onMouseDown: this.startMove,
                  onMouseUp: this.endMove,
                  style: { padding: "0.5em", paddingBottom: "0.25em" },
                },
                d.createElement("img", {
                  className: "Icon",
                  src: "/dashboard/images/icons/icon_move.png",
                })
              ),
              d.createElement(
                u.a,
                {
                  className: "WindowTrayButton",
                  key: "undock",
                  style: { padding: "0.5em", paddingBottom: "0.25em" },
                  title: "Return to Dashboard",
                  onClick: () => {
                    this.props.onDockOverlay(
                      this.props.sOverlayKey,
                      f.Dashboard
                    );
                  },
                },
                d.createElement("img", {
                  className: "Icon",
                  src: "/dashboard/images/icons/icon_return.png",
                })
              )
            )
          ),
          this.m_bIsMoving &&
            !this.state.bIsOutsideMaxDist &&
            d.createElement(
              d.Fragment,
              null,
              d.createElement(
                s.lb,
                {
                  parent_path:
                    this.state.destination == f.LeftHand
                      ? "/user/hand/left"
                      : "/user/hand/right",
                },
                d.createElement(s.P, {
                  target_id: "xf_widget",
                  thickness: 0.001,
                  start_buffer: 0.01,
                  end_buffer: 0.01,
                })
              )
            )
        );
      }
    });
    (O.sfMaxDockDist = 0.4),
      (O.sfMovePulseMS = 100),
      (O.sfOverlayTrayHeight = 0.025),
      (O.sfOverlayScaleMin = 0.1),
      (O.sfOverlayScaleMax = 1),
      Object(a.b)([c.a], O.prototype, "onOverlayScaleChanged", null),
      Object(a.b)([c.a], O.prototype, "computeDestination", null),
      Object(a.b)([c.a], O.prototype, "startMove", null),
      Object(a.b)([c.a], O.prototype, "endMove", null),
      (O = o = Object(a.b)([v.a], O));
    var w,
      R = n("hcOo");
    let M = (w = class extends d.Component {
      constructor(e) {
        super(e),
          (this.m_imageSources = []),
          (this.m_imageIndex = -1),
          this.updateImageSources(),
          (this.state = { image: null });
      }
      updateImageSources() {
        let e = [],
          t = this.props.imageUrl.replace(
            /header\.jpg$/,
            "library_600x900.jpg"
          );
        t !== this.props.imageUrl &&
          (e.push(t),
          e.push(this.props.imageUrl.replace(/header\.jpg$/, "portrait.png"))),
          e.push(this.props.imageUrl),
          this.props.fallbackImageUrl && e.push(this.props.fallbackImageUrl),
          (this.m_imageSources = e.filter(
            (e) => !w.s_failedImages.includes(e)
          )),
          (this.m_imageIndex = -1);
      }
      componentDidMount() {
        this.m_imageIndex < 0 &&
          ((this.m_loadingImage = new window.Image()), this.loadNextImage());
      }
      componentWillUnmount() {
        this.m_loadingImage &&
          ((this.m_loadingImage.onerror = null),
          (this.m_loadingImage.onload = null),
          (this.m_loadingImage = null));
      }
      componentDidUpdate(e) {
        this.props.imageUrl != e.imageUrl &&
          (this.setState({ image: null }),
          this.updateImageSources(),
          this.loadNextImage());
      }
      loadNextImage() {
        this.m_imageIndex >= 0 &&
          this.m_imageIndex < this.m_imageSources.length &&
          w.s_failedImages.push(this.m_imageSources[this.m_imageIndex]),
          this.m_imageIndex++,
          this.m_imageIndex < this.m_imageSources.length
            ? ((this.m_loadingImage.onerror = this.loadNextImage),
              (this.m_loadingImage.onload = this.onLoad),
              (this.m_loadingImage.src =
                this.m_imageSources[this.m_imageIndex]))
            : this.onError();
      }
      onLoad() {
        this.setState({
          image: this.m_loadingImage.src,
          width: this.m_loadingImage.width,
          height: this.m_loadingImage.height,
          isFallback:
            this.props.fallbackImageUrl &&
            this.m_imageIndex == this.m_imageSources.length - 1,
        });
      }
      onError() {
        this.setState({ isFallback: !0 });
      }
      render() {
        let e = { backgroundImage: `url(${this.state.image})` },
          t = d.createElement("div", { className: "Icon", style: e });
        return (
          this.state.width / this.state.height != 600 / 900 &&
            (t = d.createElement(
              d.Fragment,
              null,
              d.createElement("div", {
                className: "IconBackgroundBlur",
                style: e,
              }),
              t
            )),
          d.createElement(
            "div",
            {
              className: Object(R.a)("PortraitAppImageContainer", [
                "Fallback",
                this.state.isFallback,
              ]),
            },
            this.state.image && t,
            d.createElement("div", { className: "Title" }, this.props.title),
            this.props.children && this.props.children
          )
        );
      }
    });
    var T;
    (M.defaultProps = {
      fallbackImageUrl: "images/appimage_default_portrait.png",
    }),
      (M.s_failedImages = []),
      Object(a.b)([l.bind], M.prototype, "loadNextImage", null),
      Object(a.b)([l.bind], M.prototype, "onLoad", null),
      Object(a.b)([l.bind], M.prototype, "onError", null),
      (M = w = Object(a.b)([v.a], M)),
      (function (e) {
        (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
      })(T || (T = {}));
    const E = (e) =>
      d.createElement(
        "div",
        {
          className: Object(R.a)("ButtonContainer", T[e.side], [
            "Disabled",
            !1 === e.enabled,
          ]),
        },
        d.createElement(
          u.a,
          { className: "ButtonControl", onClick: e.onClick },
          e.side == T.Left
            ? d.createElement(d.Fragment, null, "‹")
            : d.createElement(d.Fragment, null, "›")
        )
      );
    class I extends d.Component {
      constructor(e) {
        super(e),
          (this.m_refScrollPanel = d.createRef()),
          (this.m_nLastScrollWidth = 0),
          (this.m_nLastScrollLeft = 0),
          (this.m_bScrolling = !1),
          (this.m_nCurrentScrollTarget = null),
          (this.m_animationFrameRequestHandle = 0),
          (this.state = { bScrolledToStart: null, bScrolledToEnd: null });
      }
      componentDidMount() {
        this.updateButtonVisibilities(), this.requestAnimationFrame();
      }
      componentWillUnmount() {
        window.cancelAnimationFrame(this.m_animationFrameRequestHandle);
      }
      requestAnimationFrame() {
        this.m_animationFrameRequestHandle = window.requestAnimationFrame(
          this.onAnimationFrame
        );
      }
      onAnimationFrame() {
        if (this.m_refScrollPanel.current) {
          const e = this.m_refScrollPanel.current.scrollWidth;
          e != this.m_nLastScrollWidth &&
            (this.updateButtonVisibilities(), (this.m_nLastScrollWidth = e));
          const t = this.m_refScrollPanel.current.scrollLeft;
          (this.m_bScrolling = t != this.m_nLastScrollLeft),
            this.m_bScrolling && (this.m_nLastScrollLeft = t);
        }
        this.requestAnimationFrame();
      }
      onScroll(e) {
        this.updateButtonVisibilities();
      }
      updateButtonVisibilities() {
        const e = this.m_refScrollPanel.current;
        e &&
          this.setState({
            bScrolledToStart: 0 == e.scrollLeft,
            bScrolledToEnd: e.scrollLeft + e.clientWidth == e.scrollWidth,
          });
      }
      onLeftButtonClick() {
        this.scroll(-1);
      }
      onRightButtonClick() {
        this.scroll(1);
      }
      scroll(e) {
        var t;
        const n = this.m_refScrollPanel.current;
        if (!n) return;
        if (n.isThrown)
          return void n.cancelThrowing(() => {
            (this.m_bScrolling = !1), this.scroll(e);
          });
        const i = n.children;
        if (!i || 0 == i.length) return;
        const r = null != (t = this.props.paginationAlignmentOffset) ? t : 0,
          o = i[0],
          a = this.m_bScrolling ? this.m_nCurrentScrollTarget : n.scrollLeft,
          s = o.getBoundingClientRect().left + n.scrollLeft,
          l = o.clientWidth,
          c = n.clientWidth,
          d = Math.floor(c / l) - 1,
          u = Math.round((a - s + r + 1) / l) + d * e - 0.4999,
          h = u > 0 ? u * l + s - r : 0;
        this.scrollToPosition(h);
      }
      scrollToPosition(e) {
        const t = this.m_refScrollPanel.current;
        t &&
          (t.scrollTo({ left: e, behavior: "smooth" }),
          (this.m_bScrolling = !0),
          (this.m_nCurrentScrollTarget = e));
      }
      render() {
        return d.createElement(
          "div",
          {
            className: Object(R.a)(
              "PaginatedCarousel",
              this.props.additionalClassNames
            ),
          },
          d.createElement(
            y.b,
            {
              ref: this.m_refScrollPanel,
              scrollDirection: y.a.Horizontal,
              onScroll: this.onScroll,
            },
            this.props.children
          ),
          (!1 === this.state.bScrolledToStart ||
            !1 === this.state.bScrolledToEnd) &&
            d.createElement(
              "div",
              { className: "PaginationButtons" },
              null !== this.state.bScrolledToStart &&
                d.createElement(E, {
                  side: T.Left,
                  enabled: !this.state.bScrolledToStart,
                  onClick: this.onLeftButtonClick,
                }),
              null !== this.state.bScrolledToEnd &&
                d.createElement(E, {
                  side: T.Right,
                  enabled: !this.state.bScrolledToEnd,
                  onClick: this.onRightButtonClick,
                })
            )
        );
      }
    }
    Object(a.b)([c.a], I.prototype, "onAnimationFrame", null),
      Object(a.b)([c.a], I.prototype, "onScroll", null),
      Object(a.b)([c.a], I.prototype, "onLeftButtonClick", null),
      Object(a.b)([c.a], I.prototype, "onRightButtonClick", null);
    let P = class extends d.Component {
      constructor(e) {
        super(e),
          (this.m_scrollWatcher = new R.e()),
          (this.m_refAnchoredParentPortal = d.createRef()),
          (this.m_refButton = d.createRef()),
          (this.state = { bShowPlay: !1 }),
          (this.m_scrollWatcher.onScrollStop = this.onParentScrollStop);
      }
      componentDidUpdate() {
        this.m_scrollWatcher.updateScrollableParents();
      }
      componentWillUnmount() {
        this.m_scrollWatcher.cleanup();
      }
      buttonMouseEnter() {
        var e, t;
        this.setState({ bShowPlay: !0 }),
          null ===
            (t =
              null === (e = this.m_refAnchoredParentPortal.current) ||
              void 0 === e
                ? void 0
                : e.panelAnchor) ||
            void 0 === t ||
            t.relatch();
      }
      buttonMouseLeave() {
        this.setState({ bShowPlay: !1 });
      }
      onParentScrollStop() {
        var e, t;
        null ===
          (t =
            null === (e = this.m_refAnchoredParentPortal.current) ||
            void 0 === e
              ? void 0
              : e.panelAnchor) ||
          void 0 === t ||
          t.relatch();
      }
      get shouldShowHoverContents() {
        return !this.m_scrollWatcher.isScrolling && this.state.bShowPlay;
      }
      render() {
        let e = Object.assign({}, this.props);
        return (
          delete e.onClick,
          d.createElement(
            "div",
            {
              className: Object(R.a)(
                "AppButtonContainer",
                ["AppOwned", m.d.probablyOwnedAppkeys.has(this.props.appkey)],
                ["ShowingPopovers", this.shouldShowHoverContents]
              ),
            },
            d.createElement(
              u.a,
              {
                className: "AppButton",
                ref: this.m_refButton,
                onMouseEnter: this.buttonMouseEnter,
                onMouseLeave: this.buttonMouseLeave,
                onClick: this.props.onClick,
              },
              d.createElement(M, Object.assign({}, e), this.props.children)
            )
          )
        );
      }
    };
    Object(a.b)([c.a], P.prototype, "buttonMouseEnter", null),
      Object(a.b)([c.a], P.prototype, "buttonMouseLeave", null),
      Object(a.b)([c.a], P.prototype, "onParentScrollStop", null),
      (P = Object(a.b)([v.a], P));
    const x = () =>
        d.createElement("div", { className: "AppButton Placeholder" }),
      V = (e) => {
        var t;
        const n = !!e.loading,
          i = null != (t = e.apps) ? t : [];
        let r = "AppCarousel";
        return (
          e.className && (r += " " + e.className),
          (r += " NoAnimations"),
          d.createElement(
            I,
            { additionalClassNames: r, paginationAlignmentOffset: -20 },
            n &&
              d.createElement(
                d.Fragment,
                null,
                d.createElement(x, null),
                d.createElement(x, null),
                d.createElement(x, null),
                d.createElement(x, null)
              ),
            !n &&
              i.map((e) =>
                d.createElement(P, Object.assign({ key: e.appkey }, e))
              )
          )
        );
      };
    var L = n("Ibgz"),
      N = n("vDqi"),
      F = n.n(N),
      B = n("uTck");
    function H() {
      return F.a
        .get(
          "https://steamcommunity.com/steamvr/ajaxgethomedata/?include_apps=1&include_free_apps=1&num_apps=20"
        )
        .then((e) => e.data);
    }
    const A = () =>
      d.createElement(
        u.a,
        {
          className: "ButtonControl WithIcon PanelTopRight",
          onClick: () => L.b.Instance.openBigPictureStore(null, L.a.QuickStore),
        },
        d.createElement("span", null, Object(p.c)("#BrowseAll")),
        d.createElement("img", {
          className: "Icon BlackToWhite",
          src: "/dashboard/images/icons/svr_store.svg",
        })
      );
    var j;
    !(function (e) {
      (e[(e.Free = 0)] = "Free"),
        (e[(e.Singleplayer = 1)] = "Singleplayer"),
        (e[(e.Multiplayer = 2)] = "Multiplayer");
    })(j || (j = {}));
    let U = class extends d.Component {
      constructor(e) {
        super(e), (this.state = { storeData: null });
      }
      componentDidMount() {
        H().then((e) => this.setState({ storeData: e }));
      }
      openSteamApp(e, t, n) {
        B.a.instance.RecordUIEvent(
          "QuickStoreAppClick",
          j[t].toLowerCase() + ":" + n,
          "steam.app." + e
        ),
          L.b.Instance.openBigPictureStore(e, L.a.QuickStore);
      }
      makeAppButtonList() {
        let e = [];
        switch (this.props.section) {
          case j.Free:
            e = this.state.storeData.apps_free;
            break;
          case j.Singleplayer:
            e = this.state.storeData.apps_singleplayer;
            break;
          case j.Multiplayer:
            e = this.state.storeData.apps_multiplayer;
        }
        return e.map((e, t) => {
          const n = "steam.app." + e.appid;
          return {
            key: n,
            appkey: n,
            title: e.name,
            imageUrl: e.logo,
            onClick: () => this.openSteamApp(e.appid, this.props.section, t),
          };
        });
      }
      render() {
        return this.state.storeData
          ? d.createElement(V, { apps: this.makeAppButtonList() })
          : d.createElement(V, { loading: !0 });
      }
    };
    U = Object(a.b)([v.a], U);
    class W extends d.Component {
      constructor(e) {
        super(e), (this.state = {});
      }
      render() {
        return d.createElement(
          b.h,
          { visible: this.props.visible, additionalClassNames: "QuickStore" },
          d.createElement(A, null),
          d.createElement(
            "h2",
            null,
            Object(p.c)("#StoreSection_TopSingleplayer")
          ),
          d.createElement(U, { section: j.Singleplayer }),
          d.createElement(
            "h2",
            null,
            Object(p.c)("#StoreSection_TopMultiplayer")
          ),
          d.createElement(U, { section: j.Multiplayer }),
          d.createElement("h2", null, Object(p.c)("#StoreSection_TopFree")),
          d.createElement(U, { section: j.Free })
        );
      }
    }
    var z;
    const G = () =>
        d.createElement(
          u.a,
          {
            className: "ButtonControl WithIcon PanelTopRight",
            onClick: () =>
              L.b.Instance.openBigPictureLibrary(null, L.a.QuickLaunch),
          },
          d.createElement("span", null, Object(p.c)("#BrowseAll")),
          d.createElement("img", {
            className: "Icon BlackToWhite",
            src: "/dashboard/images/icons/svr_items.svg",
          })
        ),
      K = () =>
        d.createElement(
          u.a,
          {
            className: "ButtonControl Colorful WelcomeBrowseStore",
            onClick: () => {
              var e;
              return null === (e = VRHTML) || void 0 === e
                ? void 0
                : e.VROverlay.ShowDashboard(h.r);
            },
          },
          d.createElement("span", null, Object(p.c)("#WelcomeBrowseStore"))
        ),
      q = () =>
        d.createElement(
          u.a,
          {
            className: "ButtonControl Colorful WelcomeInstall",
            onClick: () =>
              L.b.Instance.openBigPictureLibrary(null, L.a.QuickLaunch),
          },
          d.createElement("span", null, Object(p.c)("#WelcomeInstall"))
        );
    class Q extends d.Component {
      constructor(e) {
        super(e), (this.state = { storeData: null });
      }
      componentDidMount() {
        H().then((e) => this.setState({ storeData: e }));
      }
      render() {
        let e = [];
        if (this.state.storeData) {
          let t = this.state.storeData.apps_singleplayer.flatMap((e, t) => [
              this.state.storeData.apps_singleplayer[t],
              this.state.storeData.apps_multiplayer[t],
              this.state.storeData.apps_free[t],
            ]),
            n = new Set();
          for (; e.length < 12 && t.length; ) {
            for (; n.has(t[0].appid); ) t.shift();
            let i = t.shift();
            n.add(i.appid),
              e.push(
                d.createElement(
                  u.a,
                  {
                    key: "appid_" + i.appid,
                    className:
                      "WelcomeFloatingApp WelcomeFloatingApp" + e.length,
                    onClick: () =>
                      L.b.Instance.openBigPictureStore(
                        i.appid,
                        L.a.QuickLaunch
                      ),
                  },
                  d.createElement("img", { src: i.logo })
                )
              );
          }
        }
        return d.createElement(
          "div",
          { className: "QuickLaunchWelcome" },
          e,
          d.createElement(
            "div",
            { className: "QuickLaunchWelcomePrompt" },
            d.createElement(
              "div",
              { className: "QuickLaunchWelcomeHeader" },
              Object(p.c)("#WelcomeHeader")
            ),
            d.createElement(
              "div",
              { className: "QuickLaunchWelcomeMessage" },
              Object(p.c)("#WelcomeMessage")
            ),
            d.createElement(K, null),
            d.createElement(q, null)
          )
        );
      }
    }
    let Y = (z = class extends d.Component {
      constructor(e) {
        super(e), (this.state = {});
      }
      launchApplication(e, t, n) {
        var i, r, o;
        B.a.instance.RecordUIEvent(
          "QuickLaunchAppClick",
          (t ? "top" : "bottom") + ":" + n,
          e
        ),
          null === (r = (i = this.props).onGameLaunched) ||
            void 0 === r ||
            r.call(i),
          null === (o = VRHTML) ||
            void 0 === o ||
            o.VRApplications.LaunchApplication(e);
      }
      makeAppButtonList() {
        let e = [];
        if (null != m.d.apps)
          for (let t of m.d.apps)
            t.is_internal ||
              t.is_dashboard_overlay ||
              t.is_hidden ||
              t.is_instance ||
              z.s_setBlacklistedAppkeys.has(t.key) ||
              e.push(t);
        e.sort((e, t) => t.last_launch - e.last_launch);
        const t = (e) => {
          let t = e.image_path;
          return t.startsWith("/app/image?") && (t += "&aspect=portrait"), t;
        };
        return e.map((e, n) => {
          let i = n;
          const r = n < z.TOP_ROW_LENGTH;
          return (
            r || (i -= z.TOP_ROW_LENGTH),
            {
              key: e.key,
              appkey: e.key,
              title: e.name,
              imageUrl: t(e),
              onClick: () => this.launchApplication(e.key, r, i),
              children: d.createElement(
                d.Fragment,
                null,
                d.createElement("div", { className: "PlayIconFade" }),
                d.createElement("img", {
                  className: "PlayIcon",
                  src: "/dashboard/images/icons/svr_play.svg",
                })
              ),
            }
          );
        });
      }
      render() {
        let e,
          t = this.makeAppButtonList();
        const n =
          0 == t.length ||
          m.d.settings.get("/settings/dashboard/forceWelcomeScreen");
        if (n) e = d.createElement(Q, null);
        else {
          let n = t.slice(0, z.TOP_ROW_LENGTH),
            i = t.slice(z.TOP_ROW_LENGTH);
          e = d.createElement(
            d.Fragment,
            null,
            d.createElement(G, null),
            d.createElement("h2", null, Object(p.c)("#RecentlyPlayed")),
            d.createElement(V, { className: "TopRow", apps: n }),
            d.createElement(V, { className: "BottomRow", apps: i })
          );
        }
        return d.createElement(
          b.h,
          {
            visible: this.props.visible,
            scrollable: !n,
            debugName: "homepanel",
            additionalClassNames: "QuickLaunch",
          },
          e
        );
      }
    });
    (Y.TOP_ROW_LENGTH = 4),
      (Y.s_setBlacklistedAppkeys = new Set([
        "openvr.tool.steamvr_room_setup",
        "openvr.tool.steamvr_media_player",
        "openvr.tool.steamvr_desktop_gametheatre",
        "openvr.tool.steamvr_tutorial",
        "openvr.tool.steamvr_environments",
        "openvr.tool.steamvr_environments_tools",
        h.J,
        h.L,
      ])),
      (Y = z = Object(a.b)([v.a], Y));
    var X = n("vzqD"),
      Z = n("tALH"),
      J = n("TbT/"),
      $ = n("P8UO");
    class ee extends d.Component {
      constructor(e) {
        super(e), (this.state = {});
      }
      onExitApp() {
        var e, t, n;
        null === (e = VRHTML) || void 0 === e || e.QuitSceneApp(),
          null === (n = (t = this.props).onExitGame) ||
            void 0 === n ||
            n.call(t);
      }
      onReturnToGame() {
        var e;
        null === (e = VRHTML) ||
          void 0 === e ||
          e.VRDashboardManager.HideDashboard("return_to_game");
      }
      onOpenAppControllerBindingSettings() {
        const e = $.a.Instance.SceneAppKey;
        Z.b.OpenDeepLink(Z.a.Name, e);
      }
      onOpenAppVideoSettings() {
        const e = $.a.Instance.SceneAppKey;
        X.b.OpenDeepLink(X.c.Name, e);
      }
      render() {
        var e;
        const t = $.a.Instance.SceneAppKey,
          n = $.a.Instance.SceneAppName,
          i = $.a.Instance.SceneApplicationState,
          r = $.a.Instance.SceneAppIsHome,
          o = m.d.settings.get("/settings/dashboard/allowAppQuitting"),
          a = !(
            null != (e = m.d.settings.get("/settings/dashboard/arcadeMode")) &&
            e
          ),
          l = m.d.apps && m.d.apps.find((e) => e.key == t);
        let c = !1;
        switch (i) {
          case s.v.Quitting:
          case s.v.Starting:
          case s.v.Waiting:
            c = !0;
        }
        const h = ((e) => {
          if (null == e) return "";
          let t = e.image_path;
          return t.startsWith("/app/image?") && (t += "&aspect=portrait"), t;
        })(l);
        return d.createElement(
          b.h,
          {
            visible: this.props.visible,
            debugName: "nowplaying",
            additionalClassNames: "NowPlaying",
          },
          d.createElement(
            "div",
            { className: "ArtworkColumn" },
            d.createElement(M, { appkey: t, title: n, imageUrl: h })
          ),
          d.createElement(
            "div",
            { className: "InfoColumn" },
            d.createElement("div", { className: "NowPlayingAppTitle" }, n),
            d.createElement(
              u.a,
              {
                className: "ButtonControl Colorful",
                onClick: this.onReturnToGame,
              },
              r
                ? Object(p.c)("#Return_To_Home")
                : Object(p.c)("#Return_To_Game")
            ),
            a &&
              d.createElement(
                J.e,
                {
                  icon: J.f.PopOut,
                  onClick: this.onOpenAppControllerBindingSettings,
                },
                Object(p.c)("#Controller_Bindings")
              ),
            a &&
              d.createElement(
                J.e,
                { icon: J.f.PopOut, onClick: this.onOpenAppVideoSettings },
                Object(p.c)("#App_Video_Settings")
              ),
            !r &&
              o &&
              d.createElement(
                u.a,
                { className: "ButtonControl", onClick: this.onExitApp },
                Object(p.c)("#Exit_Game")
              )
          )
        );
      }
    }
    Object(a.b)([l.bind], ee.prototype, "onExitApp", null),
      Object(a.b)([l.bind], ee.prototype, "onReturnToGame", null),
      Object(a.b)(
        [l.bind],
        ee.prototype,
        "onOpenAppControllerBindingSettings",
        null
      ),
      Object(a.b)([l.bind], ee.prototype, "onOpenAppVideoSettings", null);
    var te,
      ne,
      ie,
      re = n("Vp/w"),
      oe = n("CzjV"),
      ae = n("5/du"),
      se = n("vvDA");
    n.d(t, "b", function () {
      return ne;
    }),
      n.d(t, "a", function () {
        return de;
      }),
      (function (e) {
        (e[(e.Near = 0)] = "Near"),
          (e[(e.Middle = 1)] = "Middle"),
          (e[(e.Far = 2)] = "Far"),
          (e[(e.Screenshot_Only = 255)] = "Screenshot_Only");
      })(ne || (ne = {}));
    class le extends d.Component {
      componentDidMount() {
        var e;
        null === (e = VRHTML) ||
          void 0 === e ||
          e.VRChaperone.ForceBoundsVisible(!0);
      }
      componentWillUnmount() {
        var e;
        null === (e = VRHTML) ||
          void 0 === e ||
          e.VRChaperone.ForceBoundsVisible(!1);
      }
      render() {
        return null;
      }
    }
    function ce(e) {
      var t, n;
      return (
        null !=
          (n = null === (t = e) || void 0 === t ? void 0 : t.startsWith(h.n)) &&
        n
      );
    }
    !(function (e) {
      (e[(e.None = 0)] = "None"),
        (e[(e.Power = 1)] = "Power"),
        (e[(e.ExternalOverlays = 2)] = "ExternalOverlays"),
        (e[(e.Volume = 3)] = "Volume"),
        (e[(e.Windows = 4)] = "Windows");
    })(ie || (ie = {}));
    let de = (te = class extends d.Component {
      constructor(e) {
        super(e),
          (this.m_mapExternalOverlays = {}),
          (this.m_setSuppressingFade = new Set()),
          (this.m_mailbox = new s.c()),
          (this.m_timeoutPopupMenuHide = 0),
          (this.m_refPopupMenu = d.createRef()),
          (this.m_appStateChangedAutorunDisposer = null),
          (this.m_refDesktopView = d.createRef()),
          (this.m_refDesktopTray = d.createRef()),
          (this.m_refOverlayTransform = d.createRef()),
          (this.m_refVolumeTray = d.createRef()),
          (this.m_sOverlayToSwitchToOnLoad = h.q),
          (this.m_bQuickLaunchShouldReturnToBigPicture = !1),
          (this.m_bQuickStoreShouldReturnToBigPicture = !1),
          (this.m_roomViewChangedEventHandle = null),
          (this.state = {
            bShown: !1,
            sActiveOverlayID: null,
            bDesktopDarkMode: !1,
            bMuted: !1,
            sLastShownAppKey: "",
            eShowPopupMenu: ie.None,
            setForcingBoundsVisible: {},
            mapWindows: new Map(),
            desktopViewDebugInfo: {
              inputFrameTime: 0,
              mapOverlayFrameTimes: new Map(),
            },
            bWindowViewEnabled: !1,
            mapOverlayState: new Map(),
          }),
          (window.setDashboardScale = (e) => (te.s_dashboardUserScale = e)),
          (window.setDashboardDistance = (e) =>
            (te.s_dashboardUserDistance = e)),
          m.d.Init(!1),
          s.fb.getInstance(),
          this.m_mailbox.Init(te.k_sDashboardMailboxName).then(() => {
            this.m_mailbox.RegisterHandler(
              te.k_sSetDashboardFadeSupressionMessage,
              this.OnSetDashboardFadeSuppression
            ),
              this.m_mailbox.RegisterHandler(
                te.k_sUpdateDashboardTabsMessage,
                this.onUpdateDashboardTabs
              ),
              this.m_mailbox.RegisterHandler(
                te.k_sWindowViewCreatedMessage,
                this.onWindowViewCreated
              ),
              this.m_mailbox.RegisterHandler(
                te.k_sWindowViewDestroyedMessage,
                this.onWindowViewDestroyed
              ),
              this.m_mailbox.RegisterHandler(
                te.k_sUpdateWindowListMessage,
                this.onUpdateWindowList
              ),
              this.m_mailbox.RegisterHandler(
                te.k_sUpdateDebugInfoMessage,
                this.onUpdateDebugInfo
              ),
              this.m_mailbox.RegisterHandler(
                te.k_sSetDashboardForceBoundsVisible,
                this.OnSetDashboardForceBoundsVisible
              );
          });
      }
      componentDidMount() {
        var e, t;
        (window.Dashboard = this),
          (this.m_roomViewChangedEventHandle =
            null === (e = VRHTML) || void 0 === e
              ? void 0
              : e.VRCompositor.RegisterForRoomViewChangedEvents(
                  this.onRoomViewChanged
                ));
        const n =
            null === (t = VRHTML) || void 0 === t
              ? void 0
              : t.GetVRStartupReason(),
          i =
            n == s.F.AppLaunch_Unknown ||
            n == s.F.AppLaunch_Steam ||
            n == s.F.Unknown,
          r = m.d.settings.get(
            "/settings/dashboard/allowDashboardAutoLaunchWithSteamVRHome"
          ),
          o = m.d.settings.get("/settings/steamvr/enableHomeApp"),
          a = m.d.settings.get(h.m);
        ((i || (!r && o)) && !a) ||
          setTimeout(() => {
            var e;
            return null === (e = VRHTML) || void 0 === e
              ? void 0
              : e.VROverlay.ShowDashboard(null != a ? a : "");
          }, 500),
          (this.m_appStateChangedAutorunDisposer = Object(g.e)(() => {
            const e = $.a.Instance.SceneApplicationState != s.v.None;
            this.isOverlayActive(h.o) && !e && this.switchToOverlay(h.q);
          })),
          this.updateSiblingReferences();
      }
      componentDidUpdate(e, t) {
        const n = this.getActiveOverlaySummonKey();
        let i = !1;
        t.bShown !== this.state.bShown &&
          (oe.b.Instance.playSound(
            this.state.bShown ? oe.a.DashboardOpen : oe.a.DashboardClose
          ),
          (i = !0));
        if (
          this.state.bShown &&
          !i &&
          t.sActiveOverlayID != this.state.sActiveOverlayID
        )
          switch (n) {
            case h.C:
              oe.b.Instance.playSound(oe.a.ThemeSettings);
              break;
            case h.k:
              oe.b.Instance.playSound(oe.a.ThemeDesktop);
              break;
            case h.q:
              oe.b.Instance.playSound(oe.a.ThemeLibrary);
              break;
            case h.r:
              oe.b.Instance.playSound(oe.a.ThemeStore);
              break;
            case h.o:
              oe.b.Instance.playSound(oe.a.ThemeNowPlaying);
          }
        if (
          t.sActiveOverlayID != this.state.sActiveOverlayID &&
          this.isOverlayActive(h.G)
        )
          switch (L.b.Instance.lastBigPictureEntryPoint) {
            case L.a.QuickLaunch:
              this.m_bQuickLaunchShouldReturnToBigPicture = !0;
              break;
            case L.a.QuickStore:
              this.m_bQuickStoreShouldReturnToBigPicture = !0;
          }
        this.updateSiblingReferences();
      }
      updateSiblingReferences() {
        var e;
        null === (e = this.m_refDesktopTray.current) ||
          void 0 === e ||
          e.setSiblingReferences(this.m_refDesktopView.current);
      }
      componentWillUnmount() {
        clearTimeout(this.m_timeoutHoverStateEnd),
          clearTimeout(this.m_timeoutPopupMenuHide),
          this.m_appStateChangedAutorunDisposer &&
            (this.m_appStateChangedAutorunDisposer(),
            (this.m_appStateChangedAutorunDisposer = null)),
          Object(s.gb)(1),
          this.m_roomViewChangedEventHandle &&
            (this.m_roomViewChangedEventHandle.unregister(),
            (this.m_roomViewChangedEventHandle = null));
      }
      static getDashboardDistance() {
        if (te.s_dashboardUserDistance) return te.s_dashboardUserDistance;
        const e = m.d.settings.get(h.p);
        return e == ne.Near
          ? 0.925
          : e == ne.Screenshot_Only
          ? 5
          : e == ne.Middle
          ? 1.05
          : 1.2;
      }
      static getDashboardVerticalPosition() {
        var e;
        const t =
            0.01 *
            (null !=
            (e = m.d.settings.get("/settings/dashboard/verticalOffsetCm_2"))
              ? e
              : 0),
          n = m.d.settings.get(h.p);
        return n == ne.Screenshot_Only
          ? -0.57
          : n == ne.Near
          ? -0.07 + t
          : n == ne.Middle
          ? -0.08 + t
          : -0.09 + t;
      }
      static getDashboardScale() {
        var e, t;
        if (te.s_dashboardUserScale) return te.s_dashboardUserScale;
        let n = 1;
        const i = m.d.settings.get(h.p),
          r = i == ne.Screenshot_Only;
        return (
          (n = r ? 2 : i == ne.Near ? 0.36 : i == ne.Middle ? 0.41 : 0.47),
          r ||
            (n *=
              null !=
              (t =
                null === (e = VRHTML) || void 0 === e
                  ? void 0
                  : e.VRProperties.GetFloatProperty(
                      s.ob,
                      s.y.DashboardScale_Float
                    ))
                ? t
                : 1),
          n
        );
      }
      OnSetDashboardFadeSuppression(e) {
        e.suppress_dashboard_fade
          ? this.m_setSuppressingFade.add(e.for_id)
          : this.m_setSuppressingFade.delete(e.for_id),
          this.forceUpdate();
      }
      onRoomViewChanged() {
        this.forceUpdate();
      }
      OnSetDashboardForceBoundsVisible(e) {
        this.setState((t, n) => {
          let i = Object.assign({}, t.setForcingBoundsVisible);
          return (
            (i[e.for_overlay_key] = new Set(i[e.for_overlay_key])),
            e.force_bounds_visible
              ? i[e.for_overlay_key].add(e.for_id)
              : i[e.for_overlay_key].delete(e.for_id),
            { setForcingBoundsVisible: i }
          );
        });
      }
      onUpdateDashboardTabs(e) {
        (this.m_mapExternalOverlays = {}),
          e.tabs.forEach((e) => {
            e.mountable_id && (this.m_mapExternalOverlays[e.mountable_id] = e);
          }),
          this.m_sOverlayToSwitchToOnLoad &&
            this.hasOverlay(this.m_sOverlayToSwitchToOnLoad) &&
            (this.switchToOverlay(this.m_sOverlayToSwitchToOnLoad),
            (this.m_sOverlayToSwitchToOnLoad = null)),
          this.forceUpdate();
      }
      onWindowViewCreated(e) {
        var t, n;
        this.switchToOverlay(h.k),
          null === (t = this.m_refDesktopView.current) ||
            void 0 === t ||
            t.onWindowViewCreated(e.overlay_key, e.hwnd),
          null === (n = this.m_refDesktopTray.current) ||
            void 0 === n ||
            n.onWindowViewCreated(e.overlay_key, e.hwnd);
      }
      onWindowViewDestroyed(e) {
        var t;
        null === (t = this.m_refDesktopView.current) ||
          void 0 === t ||
          t.onWindowViewDestroyed(e.overlay_key),
          this.state.mapOverlayState.has(e.overlay_key) &&
            (this.state.mapOverlayState.delete(e.overlay_key),
            this.forceUpdate());
      }
      onUpdateWindowList(e) {
        var t;
        let n = new Map();
        e.windows.forEach((e) => {
          n.set(e.hwnd, e);
        }),
          this.setState({
            mapWindows: n,
            bWindowViewEnabled: ((t = m.d.settings.get(h.v)), null == t || t),
          });
      }
      onUpdateDebugInfo(e) {
        let t = {
          inputFrameTime: e.input_frame_time,
          mapOverlayFrameTimes: new Map(),
        };
        e.overlay_frame_times.forEach((e) => {
          t.mapOverlayFrameTimes.set(e.overlay_key, e.frame_time);
        }),
          this.setState({ desktopViewDebugInfo: t });
      }
      onDockOverlay(e, t, n) {
        var i, r, o;
        if (
          (null === (i = this.m_refDesktopView.current) ||
            void 0 === i ||
            i.dockOverlay(e, t),
          t == f.LeftHand || t == f.RightHand)
        ) {
          let e = [];
          this.state.mapOverlayState.forEach((n, i) => {
            n.dockLocation == t && e.push(i);
          }),
            e.forEach((e) => {
              this.state.mapOverlayState.delete(e);
            });
        }
        if (
          (this.state.mapOverlayState.has(e) &&
            this.state.mapOverlayState.get(e).dockLocation != t &&
            this.state.mapOverlayState.delete(e),
          t != f.Dashboard)
        ) {
          let i = {
            dockLocation: t,
            refOverlayWidget: d.createRef(),
            xfInitial: n,
          };
          this.state.mapOverlayState.set(e, i);
        } else if (e.startsWith(h.K)) {
          const t = Number.parseInt(e.substring(h.K.length + 1));
          null === (r = this.m_refDesktopView.current) ||
            void 0 === r ||
            r.onDesktopChange(t);
        } else
          null === (o = this.m_refDesktopView.current) ||
            void 0 === o ||
            o.onWindowViewChange(e);
        this.forceUpdate();
      }
      renderActiveOverlay() {
        if (null === this.state.sActiveOverlayID) return null;
        const e = this.getActiveOverlay();
        if (!e) return null;
        return d.createElement(
          s.lb,
          { scale: { x: 1, y: 1 } },
          d.createElement(s.S, { mountedId: e.mountable_id })
        );
      }
      computeFilteredOverlayTabs() {
        if (this.screenshotMode) return [];
        let e = [];
        for (let t in this.m_mapExternalOverlays) {
          const n = this.m_mapExternalOverlays[t];
          (void 0 === n.icon_overlay_key && null == n.icon_uri) ||
            (n.summon_overlay_key &&
              n.summon_overlay_key != h.C &&
              n.summon_overlay_key != h.G &&
              n.summon_overlay_key != h.H &&
              (n.summon_overlay_key.startsWith(h.K) ||
                n.summon_overlay_key.startsWith(h.M) ||
                n.summon_overlay_key.startsWith(h.I) ||
                ce(n.summon_overlay_key) ||
                e.push(n)));
        }
        return (e = e.sort((e, t) => e.tab_name.localeCompare(t.tab_name))), e;
      }
      findDashboardTab(e) {
        for (let t in this.m_mapExternalOverlays) {
          let n = this.m_mapExternalOverlays[t];
          if (n.summon_overlay_key == e) return n;
        }
        return null;
      }
      switchToOverlay(e, t) {
        var n, i, r;
        switch (e) {
          case h.G:
            L.b.Instance.latchBigPictureEntryPoint();
            break;
          case h.q:
            this.m_bQuickLaunchShouldReturnToBigPicture = !1;
            break;
          case h.r:
            this.m_bQuickStoreShouldReturnToBigPicture = !1;
            break;
          case h.h:
            let t = {
                type: "show_app_binding",
                app_key:
                  null === (n = VRHTML) || void 0 === n
                    ? void 0
                    : n.VRApplications.GetSceneApplicationKey(),
              },
              i = "bindingui/" + s.H[Object(s.i)()];
            this.m_mailbox.SendMessage(i, t),
              (this.m_bQuickStoreShouldReturnToBigPicture = !1),
              (e = h.c);
        }
        if (e.startsWith(h.K)) {
          const t = Number.parseInt(e.substring(h.K.length + 1));
          Number.isSafeInteger(t) &&
            (null === (i = this.m_refDesktopView.current) ||
              void 0 === i ||
              i.onDesktopChange(t)),
            (e = h.k);
        }
        let o = this.findDashboardTab(e);
        return o
          ? (this.computeFilteredOverlayTabs().includes(o) &&
              m.d.SetSettingsValue(
                h.z,
                null != (r = o.summon_overlay_key) ? r : ""
              ),
            this.setState({ sActiveOverlayID: o.mountable_id }),
            B.a.instance.RecordUIEvent(
              "SetDashboardOverlay",
              null != t ? t : "Button",
              e
            ),
            !0)
          : ((this.m_sOverlayToSwitchToOnLoad = e), !1);
      }
      getActiveOverlay() {
        var e;
        return this.state.sActiveOverlayID
          ? null !=
            (e = this.m_mapExternalOverlays[this.state.sActiveOverlayID])
            ? e
            : null
          : null;
      }
      getActiveOverlaySummonKey() {
        var e, t;
        return null !=
          (t =
            null === (e = this.getActiveOverlay()) || void 0 === e
              ? void 0
              : e.summon_overlay_key)
          ? t
          : null;
      }
      hideMessageOverlay() {
        this.getActiveOverlaySummonKey() == h.A && this.switchToOverlay(h.q);
      }
      show(e) {
        if (this.isShown()) return;
        B.a.instance.StartDashboardSession(e);
        this.m_mailbox.SendMessage("desktopview", {
          type: "request_window_list_update",
        });
        const t = $.a.Instance.SceneAppKey,
          n = $.a.Instance.SceneAppIsHome;
        t &&
          t != this.state.sLastShownAppKey &&
          (this.setState({ sLastShownAppKey: t }),
          this.switchToOverlay(n ? h.q : h.o)),
          this.setState({ bShown: !0 });
        let i = { type: te.k_sRequestDashboardTabsMessage };
        this.m_mailbox.SendMessage("vrcompositor_systemlayer", i),
          Object(s.cb)();
      }
      hide(e) {
        this.isShown() &&
          (this.setState({ bShown: !1, eShowPopupMenu: ie.None }),
          B.a.instance.EndDashboardSession(e));
      }
      isShown() {
        return this.state.bShown;
      }
      onToggleRoomView() {
        var e;
        null === (e = VRHTML) ||
          void 0 === e ||
          e.VRControlPanel.SetCameraRoomViewVisible(
            !VRHTML.VRControlPanel.GetCameraRoomViewVisible()
          );
      }
      onQuickLaunchButtonClick() {
        this.m_bQuickLaunchShouldReturnToBigPicture &&
        L.b.Instance.lastBigPictureEntryPoint == L.a.QuickLaunch &&
        !this.isOverlayActive(h.G)
          ? L.b.Instance.openBigPictureThroughLastEntryPoint()
          : this.switchToOverlay(h.q);
      }
      onQuickStoreButtonClick() {
        this.m_bQuickStoreShouldReturnToBigPicture &&
        L.b.Instance.lastBigPictureEntryPoint == L.a.QuickStore &&
        !this.isOverlayActive(h.G)
          ? L.b.Instance.openBigPictureThroughLastEntryPoint()
          : this.switchToOverlay(h.r);
      }
      getDashboardIconUri(e) {
        var t;
        try {
          if ("turn_signal_menu.thumb" == e.icon_overlay_key)
            return "/dashboard/images/icons/turnsignal.svg";
          if (e.icon_uri) return e.icon_uri;
          if (e.icon_overlay_key)
            return null === (t = VRHTML) || void 0 === t
              ? void 0
              : t.VRDashboardManager.GetOverlayImage(e.icon_overlay_key);
        } catch (e) {}
        return null;
      }
      renderPowerMenu() {
        var e;
        const t = !!(null === (e = VRHTML) || void 0 === e
            ? void 0
            : e.SceneAppRunning()),
          n = m.d.settings.get("/settings/dashboard/allowAppQuitting");
        let i = !1;
        if (VRHTML) {
          VRHTML.VROverlay.GetPrimaryDashboardDevice() >= 0 &&
            (i = VRHTML.VRProperties.GetBoolProperty(
              VRHTML.VROverlay.GetPrimaryDashboardDevice(),
              s.y.DeviceCanPowerOff_Bool
            ));
        }
        const r = $.a.Instance.SceneAppName,
          o = $.a.Instance.SceneAppIsHome;
        let a, l;
        (a = o
          ? Object(p.c)("#Exit_SteamVR_Home")
          : r
          ? Object(p.c)("#PowerMenuQuitSceneApp", r)
          : Object(p.c)("#PowerMenuQuitSceneApp_NoApp")),
          (l = o
            ? "/dashboard/images/icons/svr_svrhome_quit_alt.svg"
            : "/dashboard/images/icons/svr_app_quit.svg");
        const c = this.findDashboardTab(h.G);
        return this.renderPopupMenu(
          d.createElement(
            d.Fragment,
            null,
            c &&
              d.createElement(b.i, {
                label: Object(p.c)("#PowerMenuSteamOverlay"),
                lineBelow: !0,
                onClick: () => {
                  this.switchToOverlay(h.G), this.showPopupMenu(ie.None);
                },
              }),
            i &&
              d.createElement(b.i, {
                label: Object(p.c)("#PowerMenuTurnOffController"),
                imageUrl: "/dashboard/images/icons/svr_controller_power.svg",
                onClick: () => {
                  var e;
                  null === (e = VRHTML) ||
                    void 0 === e ||
                    e.TurnOffVRController(),
                    this.showPopupMenu(ie.None);
                },
              }),
            n &&
              t &&
              d.createElement(b.i, {
                label: a,
                imageUrl: l,
                onClick: () => {
                  var e;
                  null === (e = VRHTML) || void 0 === e || e.QuitSceneApp(),
                    this.showPopupMenu(ie.None);
                },
              }),
            d.createElement(b.i, {
              label: Object(p.c)("#PowerMenuExitVR"),
              imageUrl: "/dashboard/images/icons/svr_svr_quit_alt.svg",
              onClick: () => {
                var e;
                return null === (e = VRHTML) || void 0 === e
                  ? void 0
                  : e.QuitOpenVR();
              },
            })
          )
        );
      }
      startPopupMenuTimeout(e) {
        this.m_timeoutPopupMenuHide = window.setTimeout(() => {
          this.setState({ eShowPopupMenu: ie.None });
        }, e);
      }
      clearPopupMenuTimeout() {
        this.m_timeoutPopupMenuHide &&
          (clearTimeout(this.m_timeoutPopupMenuHide),
          (this.m_timeoutPopupMenuHide = 0));
      }
      showPopupMenu(e) {
        this.setState({ eShowPopupMenu: e }), this.clearPopupMenuTimeout();
      }
      renderPopupMenu(e) {
        return d.createElement(
          "div",
          {
            className: "PowerMenuContainer",
            onMouseLeave: this.popupMenuMouseLeave,
            onMouseEnter: this.clearPopupMenuTimeout,
            ref: this.m_refPopupMenu,
          },
          d.createElement(u.b, { className: "PowerMenuPanel" }, e)
        );
      }
      popupMenuMouseLeave(e) {
        0 == e.buttons
          ? this.startPopupMenuTimeout(100)
          : window.document.addEventListener("mouseup", this.popupMenuMouseUp);
      }
      popupMenuMouseUp(e) {
        window.document.removeEventListener("mouseup", this.popupMenuMouseUp),
          this.m_refPopupMenu.current &&
            !(function (e, t, n) {
              let i = n.getBoundingClientRect();
              return e >= i.left && e <= i.right && t >= i.top && t <= i.bottom;
            })(e.clientX, e.clientY, this.m_refPopupMenu.current) &&
            this.startPopupMenuTimeout(100);
      }
      renderStatusBarTitle() {
        var e, t, n, i;
        let r = this.getActiveOverlay();
        if (!r) return null;
        if (
          (r.summon_overlay_key == h.G &&
            (L.b.Instance.lastBigPictureEntryPoint == L.a.QuickLaunch
              ? (r = this.findDashboardTab(h.q))
              : L.b.Instance.lastBigPictureEntryPoint == L.a.QuickStore &&
                (r = this.findDashboardTab(h.r))),
          r.summon_overlay_key == h.k)
        ) {
          if (
            -1 ==
            (null === (e = this.m_refDesktopView.current) || void 0 === e
              ? void 0
              : e.currentDesktopIndex)
          ) {
            let e =
              null === (t = this.m_refDesktopView.current) || void 0 === t
                ? void 0
                : t.currentWindowHwnd;
            return d.createElement(b.m, {
              name:
                null === (n = this.state.mapWindows.get(e)) || void 0 === n
                  ? void 0
                  : n.title,
              iconUrl: this.getDashboardIconUri(r),
            });
          }
          return d.createElement(b.m, {
            name:
              "Desktop " +
              (null === (i = this.m_refDesktopView.current) || void 0 === i
                ? void 0
                : i.currentDesktopIndex),
            iconUrl: this.getDashboardIconUri(r),
          });
        }
        return d.createElement(b.m, {
          name: r.tab_name,
          iconUrl: this.getDashboardIconUri(r),
        });
      }
      get isDarkMode() {
        return this.state.bDesktopDarkMode && this.isOverlayActive(h.k);
      }
      get screenshotMode() {
        return m.d.settings.get(h.p) == ne.Screenshot_Only;
      }
      getCollisionBoundsFadeVisualizationElements() {
        var e, t;
        const n =
          null === (e = VRHTML) || void 0 === e
            ? void 0
            : e.VRChaperoneSetup.GetLiveCollisionBoundsInfo();
        if (!n) return [];
        let i = [];
        const r = null != (t = m.d.settings.get(h.g)) ? t : 0.7;
        for (let e of n) {
          let t = Object(s.W)(Object(s.ib)(e[3], e[0])),
            n = Object(s.W)(Object(s.ib)(e[1], e[0])),
            o = Object(s.h)(t, n),
            a = Object(s.R)(Object(s.b)(t, n, o)),
            l = Object(s.N)(Object(s.ib)(e[0], e[3]));
          if (l < 0.4) continue;
          let c = Math.max(1, Math.floor(l));
          for (let t = 0; t < c; t++) {
            let n = (t + 1) / (c + 1),
              o = Object(s.g)();
            (o.rotation = a),
              (o.translation = Object(s.O)(n, e[0], e[3])),
              (o.scale = { x: 0.005, y: 0.005, z: r });
            let l = d.createElement(
              s.lb,
              { transform: o },
              d.createElement(
                s.X,
                { value: 0.25 },
                d.createElement(
                  s.jb,
                  { color: { r: 0.2, g: 0.2, b: 0.2 } },
                  d.createElement(s.db, {
                    source: "laser_pointer",
                    wireframe: !1,
                    culling: s.u.Backface,
                  })
                )
              )
            );
            i.push(l);
          }
          if (i.length > 20) break;
        }
        return i;
      }
      render() {
        if (this.state.bShown) {
          const e =
              this.m_setSuppressingFade.size > 0 &&
              this.getActiveOverlaySummonKey() == h.C,
            t = m.d.settings.get(
              "/settings/dashboard/omitDashboardFadeWithSteamVRHome"
            ),
            n = !$.a.Instance.SceneAppIsHome || !t;
          this.screenshotMode
            ? Object(s.gb)(0)
            : n && !e
            ? Object(s.gb)(this.isDarkMode ? 0.02 : 0.15)
            : Object(s.gb)(1);
        } else Object(s.gb)(1);
        const e = this.getActiveOverlaySummonKey(),
          t = this.state.bShown && this.state.setForcingBoundsVisible[e],
          n = t && t.size > 0;
        let i = [];
        return (
          n && (i = this.getCollisionBoundsFadeVisualizationElements()),
          d.createElement(
            "div",
            { className: "DashboardMain" },
            n && d.createElement(le, null),
            n && d.createElement("span", null, i),
            this.state.bShown && this.renderDashboard(),
            this.renderInternalOverlays(),
            this.renderOverlayWidgets()
          )
        );
      }
      hasOverlay(e) {
        return Object.values(this.m_mapExternalOverlays).some(
          (t) => t.summon_overlay_key == e
        );
      }
      isOverlayActive(e) {
        return (
          !!this.state.sActiveOverlayID && this.getActiveOverlaySummonKey() == e
        );
      }
      get statusBarAnchorID() {
        return ce(this.getActiveOverlaySummonKey())
          ? b.r
          : this.state.sActiveOverlayID + "_TopCenter";
      }
      renderExternalOverlayControlBarButton(e) {
        const t = this.getDashboardIconUri(e),
          n = b.c.Center;
        return d.createElement(b.b, {
          key: e.mountable_id,
          label: e.tab_name,
          imageUrl: t,
          imageStyle: n,
          active: this.isOverlayActive(e.summon_overlay_key),
          onClick: () => this.switchToOverlay(e.summon_overlay_key),
        });
      }
      isDesktopTrayActive() {
        var e;
        return (
          (this.isOverlayActive(h.k) ||
            (null === (e = this.getActiveOverlaySummonKey()) || void 0 === e
              ? void 0
              : e.startsWith("system.window"))) &&
          (this.state.eShowPopupMenu == ie.None ||
            this.state.eShowPopupMenu == ie.Windows)
        );
      }
      isDesktopOverlayActive() {
        var e;
        return (
          this.isOverlayActive(h.k) ||
          (null === (e = this.getActiveOverlaySummonKey()) || void 0 === e
            ? void 0
            : e.startsWith("system.window"))
        );
      }
      renderControlBar(e, t) {
        var n, i, r, o, a, l, c, v;
        const g = this.isDarkMode ? { r: 0.05, g: 0.05, b: 0.05 } : null,
          _ = this.isDarkMode ? { r: 0.25, g: 0.25, b: 0.25 } : null,
          y = te.k_nControlBarWidthMeters,
          S =
            null ==
              (n = m.d.settings.get("/settings/dashboard/showPowerOptions")) ||
            n,
          f =
            null == (i = m.d.settings.get("/settings/dashboard/showDesktop")) ||
            i,
          C =
            null ==
              (r = m.d.settings.get("/settings/dashboard/showQuickStore")) || r,
          D = !(
            null != (o = m.d.settings.get("/settings/dashboard/arcadeMode")) &&
            o
          ),
          O = $.a.Instance.SceneApplicationState,
          w = $.a.Instance.SceneAppIsHome,
          R = $.a.Instance.SceneAppKey;
        let M = "images/appimage_default.png";
        R && (M = "/app/image?app_key=" + R);
        const T = null != (a = m.d.settings.get(h.d)) && a,
          E = null != (l = m.d.settings.get(h.e)) ? l : 0,
          I = T && E > 0;
        let P = { y: -0.25, z: 0 };
        return (
          this.isOverlayActive(h.k) && (P = { y: -0.4, z: 0 }),
          d.createElement(
            s.jb,
            { color: g },
            d.createElement(
              s.Y,
              {
                curvature_origin_id: h.j,
                width: y,
                interactive: !1,
                debug_name: "ControlBarBackground",
                sampler: s.t.SingleTap,
                reflect: 0.05,
              },
              d.createElement("div", { className: "ControlBarBackground" })
            ),
            d.createElement(
              s.lb,
              { translation: { z: 1e-5 } },
              d.createElement(
                s.Y,
                {
                  curvature_origin_id: h.j,
                  width: y,
                  interactive: !0,
                  id: b.q,
                  debug_name: "Controls",
                },
                d.createElement(
                  u.b,
                  { className: "ControlBar MainControlBar" },
                  d.createElement(
                    "div",
                    { className: "Section Left" },
                    S &&
                      d.createElement(b.k, {
                        imageUrl: "/dashboard/images/icons/svr_menu_c.svg",
                        label: Object(p.c)("#Menu"),
                        style: b.d.Small,
                        onClick: () => this.showPopupMenu(ie.Power),
                        onMouseEnter: this.clearPopupMenuTimeout,
                        onMouseLeave: () => this.startPopupMenuTimeout(500),
                      }),
                    f &&
                      d.createElement(b.k, {
                        style: b.d.Small,
                        imageUrl: "/dashboard/images/icons/svr_desktop_alt.svg",
                        label: Object(p.c)("#Desktops"),
                        active: this.isDesktopTrayActive(),
                        onClick: () => this.switchToOverlay(h.k),
                      }),
                    d.createElement(
                      b.e,
                      { style: b.d.Small },
                      d.createElement(
                        d.Fragment,
                        null,
                        e.map(this.renderExternalOverlayControlBarButton),
                        t.length > 0 &&
                          d.createElement(b.b, {
                            imageUrl: "/dashboard/images/icons/svr_more.svg",
                            label: Object(p.c)("#X_More_Overlays", t.length),
                            active:
                              this.state.eShowPopupMenu == ie.ExternalOverlays,
                            onClick: () =>
                              this.showPopupMenu(ie.ExternalOverlays),
                            onMouseEnter: this.clearPopupMenuTimeout,
                            onMouseLeave: () => this.startPopupMenuTimeout(500),
                          })
                      )
                    )
                  ),
                  d.createElement(
                    "div",
                    { className: "Section Center" },
                    d.createElement(b.k, {
                      label: Object(p.c)("#Library"),
                      imageUrl: "/dashboard/images/icons/svr_items.svg",
                      active:
                        this.isOverlayActive(h.q) ||
                        (this.isOverlayActive(h.G) &&
                          L.b.Instance.lastBigPictureEntryPoint ==
                            L.a.QuickLaunch),
                      style: b.d.Large,
                      onClick: this.onQuickLaunchButtonClick,
                    }),
                    O != s.v.None &&
                      d.createElement(
                        "div",
                        { className: "NowPlayingSpacer" },
                        d.createElement(
                          re.a,
                          { allowableParentSelectors: [".DashboardMain"] },
                          d.createElement(
                            s.jb,
                            { color: g },
                            d.createElement(
                              s.lb,
                              { translation: { z: 0.02 } },
                              d.createElement(
                                s.Y,
                                {
                                  debug_name: "NowPlayingButton",
                                  interactive: !0,
                                  target_dpi_panel_id: b.q,
                                  curvature_origin_id: h.j,
                                },
                                d.createElement(
                                  "div",
                                  { className: "ControlBar" },
                                  d.createElement(b.k, {
                                    label: w
                                      ? Object(p.c)("#SteamVR_Home")
                                      : Object(p.c)("#Now_Playing"),
                                    active: this.isOverlayActive(h.o),
                                    style: b.d.App,
                                    imageUrl: M,
                                    onClick: () => this.switchToOverlay(h.o),
                                  })
                                )
                              )
                            )
                          )
                        )
                      ),
                    C &&
                      d.createElement(b.k, {
                        label: Object(p.c)("#Store"),
                        imageUrl: "/dashboard/images/icons/svr_store.svg",
                        additionalClassNames: "Store",
                        active:
                          this.isOverlayActive(h.r) ||
                          (this.isOverlayActive(h.G) &&
                            L.b.Instance.lastBigPictureEntryPoint ==
                              L.a.QuickStore),
                        style: b.d.Large,
                        onClick: this.onQuickStoreButtonClick,
                      })
                  ),
                  d.createElement(
                    "div",
                    { className: "Section Right" },
                    d.createElement(
                      b.e,
                      { style: b.d.Small },
                      d.createElement(b.j, null),
                      I &&
                        d.createElement(b.b, {
                          imageUrl: "/dashboard/images/icons/svr_eye.svg",
                          label: Object(p.c)("#Toggle_Room_View"),
                          onClick: this.onToggleRoomView,
                          active:
                            null === (c = VRHTML) || void 0 === c
                              ? void 0
                              : c.VRControlPanel.GetCameraRoomViewVisible(),
                          enabled:
                            null === (v = VRHTML) || void 0 === v
                              ? void 0
                              : v.VROverlayInternal.HasCameraRoomViewCapability(),
                        }),
                      d.createElement(b.o, {
                        active: this.state.eShowPopupMenu == ie.Volume,
                        refVolumeTray: this.m_refVolumeTray,
                        onShowTray: () => this.showPopupMenu(ie.Volume),
                        onHideTray: () => this.showPopupMenu(ie.None),
                        onMouseEnter: this.clearPopupMenuTimeout,
                        onMouseLeave: () => this.startPopupMenuTimeout(500),
                      })
                    ),
                    D &&
                      d.createElement(b.k, {
                        imageUrl: "/dashboard/images/icons/svr_settings.svg",
                        active: this.isOverlayActive(h.C),
                        enabled: this.hasOverlay(h.C),
                        label: Object(p.c)("#Settings"),
                        style: b.d.Small,
                        centerPanelAnchorID: "VolumeButton",
                        onClick: () => this.switchToOverlay(h.C),
                      })
                  )
                ),
                d.createElement(k, {
                  ref: this.m_refDesktopTray,
                  position: 0,
                  visible: this.isDesktopTrayActive(),
                  tintColor: _,
                  bDarkMode: this.state.bDesktopDarkMode,
                  onToggleDarkMode: () =>
                    this.setState({
                      bDesktopDarkMode: !this.state.bDesktopDarkMode,
                    }),
                  onToggleWindowList: () => this.showPopupMenu(ie.Windows),
                  onClearPopupMenuTimeout: () => this.clearPopupMenuTimeout(),
                  onStartPopupMenuTimeout: (e) => this.startPopupMenuTimeout(e),
                  onDockOverlay: this.onDockOverlay,
                  mapWindows: this.state.mapWindows,
                  sort_depth_bias: 0.2,
                  bWindowViewEnabled: this.state.bWindowViewEnabled,
                }),
                d.createElement(b.p, {
                  ref: this.m_refVolumeTray,
                  position: 0.337,
                  visible: this.state.eShowPopupMenu == ie.Volume,
                  onFinalChangeMouseOutside: () => {
                    this.startPopupMenuTimeout(800);
                  },
                  onMouseMove: this.clearPopupMenuTimeout,
                  onMouseLeave: this.popupMenuMouseLeave,
                  sort_depth_bias: 0.4,
                })
              )
            ),
            d.createElement(
              s.lb,
              { translation: P, scale: { y: 1.5, x: 1.5 } },
              d.createElement(s.S, {
                mountedId: Object(s.f)(h.E, "system.keyboard"),
              })
            )
          )
        );
      }
      renderOverlayWidgets() {
        let e = Array.from(this.state.mapOverlayState, ([e, t]) => ({
          sOverlayKey: e,
          overlayState: t,
        }));
        return d.createElement(
          d.Fragment,
          null,
          e.map((e) =>
            d.createElement(O, {
              bVisible: this.state.bShown,
              dockLocation: e.overlayState.dockLocation,
              onDockOverlay: this.onDockOverlay,
              sOverlayKey: e.sOverlayKey,
              xfInitial: e.overlayState.xfInitial,
              key: e.sOverlayKey,
              ref: e.overlayState.refOverlayWidget,
            })
          )
        );
      }
      renderInternalOverlays() {
        var e, t, n, i;
        const r =
            null !=
            (t =
              null === (e = this.m_refDesktopView.current) || void 0 === e
                ? void 0
                : e.currentDesktopIndex)
              ? t
              : 1,
          o =
            null !=
            (i =
              null === (n = this.m_refDesktopView.current) || void 0 === n
                ? void 0
                : n.desktopCount)
              ? i
              : 1;
        return d.createElement(
          d.Fragment,
          null,
          d.createElement(
            s.j,
            {
              tabName: Object(p.c)("#Library"),
              iconUri: "/dashboard/images/icons/svr_items.svg",
              summonOverlayKey: h.q,
            },
            d.createElement(Y, {
              visible: this.state.bShown && this.isOverlayActive(h.q),
              onGameLaunched: () => {
                var e;
                null === (e = VRHTML) ||
                  void 0 === e ||
                  e.VRDashboardManager.HideDashboard("game_launched");
              },
            })
          ),
          d.createElement(
            s.j,
            {
              tabName: Object(p.c)("#Store"),
              iconUri: "/dashboard/images/icons/svr_store.svg",
              summonOverlayKey: h.r,
            },
            d.createElement(W, {
              visible: this.state.bShown && this.isOverlayActive(h.r),
            })
          ),
          d.createElement(
            s.j,
            { tabName: Object(p.c)("#Now_Playing"), summonOverlayKey: h.o },
            d.createElement(ee, {
              visible: this.state.bShown && this.isOverlayActive(h.o),
              onExitGame: () => this.switchToOverlay(h.q),
            })
          ),
          d.createElement(
            s.j,
            {
              summonOverlayKey: h.k,
              tabName:
                o > 1 ? Object(p.c)("#Desktop_X", r) : Object(p.c)("#Desktop"),
              iconUri: "/dashboard/images/icons/svr_desktop_alt.svg",
            },
            d.createElement(C, {
              visible: this.state.bShown && this.isOverlayActive(h.k),
              onDockOverlay: this.onDockOverlay,
              mapWindows: this.state.mapWindows,
              bWindowViewEnabled: this.state.bWindowViewEnabled,
              ref: this.m_refDesktopView,
            })
          ),
          d.createElement(ae.a, {
            visible: this.state.bShown && this.isOverlayActive(h.C),
          })
        );
      }
      renderDashboard() {
        var e;
        const t = this.computeFilteredOverlayTabs(),
          n = this.isDarkMode ? { r: 0.02, g: 0.02, b: 0.02 } : null;
        let i = [],
          r = [];
        if (t.length > 2) {
          const n = m.d.settings.get(h.z);
          (i = [
            ((e = t.find((e) => e.summon_overlay_key == n)),
            null != e ? e : t[0]),
          ]),
            (r = t.filter((e) => !i.includes(e)));
        } else i = t;
        let o = null;
        this.isDesktopOverlayActive() && (o = 2048);
        let a = [];
        this.state.mapWindows.forEach((e) => {
          "" == e.overlay_key && a.push(e);
        });
        const l = this.screenshotMode,
          c = l ? 2.5 : 1.8;
        return d.createElement(
          s.k,
          null,
          d.createElement(s.lb, { id: h.j, translation: { z: c } }),
          d.createElement(
            s.lb,
            {
              translation: {
                x: l ? 0.1 : 0,
                y: te.getDashboardVerticalPosition(),
                z: -te.getDashboardDistance() * (l ? 1.1 : 1),
              },
              rotation: { x: l ? -20 : 0 },
              scale: te.getDashboardScale(),
            },
            d.createElement(
              s.lb,
              { parent_id: this.statusBarAnchorID, translation: { y: 0.008 } },
              d.createElement(
                s.jb,
                { color: n },
                d.createElement(
                  s.Y,
                  {
                    curvature_origin_id: h.j,
                    origin: s.s.BottomCenter,
                    interactive: !1,
                    target_dpi_panel_id: b.q,
                    debug_name: "StatusBar",
                    reflect: 0.1,
                  },
                  d.createElement(
                    "div",
                    { className: "StatusBar", style: { width: o } },
                    d.createElement(
                      "div",
                      { className: "Section Left" },
                      this.renderStatusBarTitle(),
                      d.createElement(b.l, {
                        role: s.w.TrackedControllerRole_LeftHand,
                        style: se.b.HorizontalPips,
                      })
                    ),
                    d.createElement(
                      "div",
                      { className: "Section Center" },
                      d.createElement(b.l, {
                        deviceIndex: s.ob,
                        style: se.b.VerticalBattery,
                      }),
                      d.createElement(b.g, null)
                    ),
                    d.createElement(
                      "div",
                      { className: "Section Right" },
                      d.createElement(b.l, {
                        role: s.w.TrackedControllerRole_RightHand,
                        style: se.b.HorizontalPips,
                      }),
                      d.createElement(
                        "div",
                        { className: "SteamLogo" },
                        d.createElement("img", {
                          src: "/dashboard/images/icons/vr_steam.svg",
                        })
                      )
                    )
                  )
                )
              )
            ),
            d.createElement(
              s.lb,
              {
                id: "active_overlay_transform",
                translation: this.isDesktopOverlayActive()
                  ? { y: -0.9, z: 0.05 }
                  : { y: -1.03375, z: 0.05 },
                ref: this.m_refOverlayTransform,
              },
              this.renderActiveOverlay()
            ),
            d.createElement(
              s.lb,
              { translation: { y: -1.2, z: 0.15 } },
              d.createElement(
                s.lb,
                { rotation: { x: -35 } },
                this.renderControlBar(i, r)
              ),
              this.state.eShowPopupMenu == ie.Power &&
                d.createElement(
                  s.lb,
                  {
                    translation: { x: -0.4, y: 0.15, z: 0.05 },
                    rotation: { y: 19 },
                  },
                  d.createElement(
                    s.Y,
                    {
                      curvature_origin_id: h.j,
                      height: void 0,
                      width: 0.925,
                      interactive: !0,
                      origin: s.s.BottomRight,
                      debug_name: "Power Menu",
                      sort_depth_bias: -0.1,
                    },
                    this.renderPowerMenu()
                  )
                ),
              this.state.eShowPopupMenu == ie.ExternalOverlays &&
                d.createElement(
                  s.lb,
                  {
                    translation: { x: 0.2, y: 0.15, z: 0.05 },
                    rotation: { y: 6 },
                  },
                  d.createElement(
                    s.Y,
                    {
                      curvature_origin_id: h.j,
                      height: void 0,
                      width: 0.925,
                      interactive: !0,
                      origin: s.s.BottomRight,
                      debug_name: "OverlaysList",
                      sort_depth_bias: -0.1,
                    },
                    this.renderPopupMenu(
                      d.createElement(
                        d.Fragment,
                        null,
                        " ",
                        r.map((e) =>
                          d.createElement(b.i, {
                            key: e.mountable_id,
                            imageUrl: this.getDashboardIconUri(e),
                            label: e.tab_name,
                            onClick: () => {
                              this.switchToOverlay(e.summon_overlay_key),
                                this.showPopupMenu(ie.None);
                            },
                          })
                        ),
                        " "
                      )
                    )
                  )
                ),
              this.state.eShowPopupMenu == ie.Windows &&
                d.createElement(
                  s.lb,
                  {
                    translation: { x: 1.25, y: -0.1, z: 0.35 },
                    rotation: { y: -16 },
                  },
                  d.createElement(
                    s.Y,
                    {
                      curvature_origin_id: h.j,
                      height: void 0,
                      width: 0.925,
                      interactive: !0,
                      origin: s.s.BottomRight,
                      debug_name: "WindowList",
                      sort_depth_bias: -0.1,
                    },
                    this.renderPopupMenu(
                      d.createElement(
                        d.Fragment,
                        null,
                        " ",
                        a.map((e) =>
                          d.createElement(b.i, {
                            key: e.hwnd,
                            imageUrl: "/dashboard/images/icons/icon_add.png",
                            label: e.title,
                            onClick: () => {
                              let t = {
                                type: "request_spawn_window_view",
                                hwnd: e.hwnd,
                              };
                              this.m_mailbox.SendMessage("desktopview", t),
                                this.showPopupMenu(ie.None);
                            },
                          })
                        ),
                        " "
                      )
                    )
                  )
                )
            )
          )
        );
      }
    });
    (de.k_sDashboardMailboxName = "systemui_dashboard"),
      (de.k_sSetDashboardFadeSupressionMessage =
        "set_dashboard_fade_suppression"),
      (de.k_sUpdateDashboardTabsMessage = "update_dashboard_tabs"),
      (de.k_sRequestDashboardTabsMessage = "request_dashboard_tabs"),
      (de.k_sWindowViewCreatedMessage = "window_view_created"),
      (de.k_sWindowViewDestroyedMessage = "window_view_destroyed"),
      (de.k_sUpdateWindowListMessage = "update_window_list"),
      (de.k_sUpdateDebugInfoMessage = "update_debug_info"),
      (de.k_sSetDashboardForceBoundsVisible =
        "set_dashboard_force_bounds_visible"),
      (de.k_nControlBarWidthMeters = 2.667),
      (de.s_dashboardUserDistance = void 0),
      (de.s_dashboardUserScale = void 0),
      Object(a.b)(
        [l.bind],
        de.prototype,
        "OnSetDashboardFadeSuppression",
        null
      ),
      Object(a.b)([l.bind], de.prototype, "onRoomViewChanged", null),
      Object(a.b)(
        [l.bind],
        de.prototype,
        "OnSetDashboardForceBoundsVisible",
        null
      ),
      Object(a.b)([l.bind], de.prototype, "onUpdateDashboardTabs", null),
      Object(a.b)([l.bind], de.prototype, "onWindowViewCreated", null),
      Object(a.b)([l.bind], de.prototype, "onWindowViewDestroyed", null),
      Object(a.b)([l.bind], de.prototype, "onUpdateWindowList", null),
      Object(a.b)([l.bind], de.prototype, "onUpdateDebugInfo", null),
      Object(a.b)([l.bind], de.prototype, "onDockOverlay", null),
      Object(a.b)([l.bind], de.prototype, "show", null),
      Object(a.b)([l.bind], de.prototype, "hide", null),
      Object(a.b)([l.bind], de.prototype, "onToggleRoomView", null),
      Object(a.b)([l.bind], de.prototype, "onQuickLaunchButtonClick", null),
      Object(a.b)([l.bind], de.prototype, "onQuickStoreButtonClick", null),
      Object(a.b)([l.bind], de.prototype, "renderPowerMenu", null),
      Object(a.b)([l.bind], de.prototype, "startPopupMenuTimeout", null),
      Object(a.b)([l.bind], de.prototype, "clearPopupMenuTimeout", null),
      Object(a.b)([l.bind], de.prototype, "showPopupMenu", null),
      Object(a.b)([l.bind], de.prototype, "popupMenuMouseLeave", null),
      Object(a.b)([l.bind], de.prototype, "popupMenuMouseUp", null),
      Object(a.b)([g.f], de.prototype, "isDarkMode", null),
      Object(a.b)([g.f], de.prototype, "screenshotMode", null),
      Object(a.b)(
        [l.bind],
        de.prototype,
        "renderExternalOverlayControlBarButton",
        null
      ),
      Object(a.b)([l.bind], de.prototype, "isDesktopTrayActive", null),
      Object(a.b)([l.bind], de.prototype, "isDesktopOverlayActive", null),
      Object(a.b)([g.m], de, "s_dashboardUserDistance", void 0),
      Object(a.b)([g.m], de, "s_dashboardUserScale", void 0),
      (de = te = Object(a.b)([v.a], de));
  },
  N46P: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return c;
    });
    var i = n("mrSG"),
      r = n("q1tI"),
      o = n("7wIv"),
      a = n("GXif"),
      s = n("/i/y");
    class l extends r.Component {
      constructor(e) {
        if (
          (super(e),
          (this.m_mailbox = new s.c()),
          this.m_mailbox.Init("legacy_debugger"),
          this.m_mailbox.RegisterHandler(
            "legacy_input_frame",
            this.OnLegacyInputFrame
          ),
          VRHTML)
        ) {
          let e = VRHTML.VRApplications.GetCurrentSceneProcessId();
          VRHTML.VRProperties.SetInt32Path("/legacy_debugger_pid", e);
        }
        this.state = { currentState: null };
      }
      componentWillUnmount() {
        var e;
        null === (e = VRHTML) ||
          void 0 === e ||
          e.VRProperties.SetInt32Path("/legacy_debugger_pid", 0);
      }
      OnLegacyInputFrame(e) {
        this.setState({ currentState: e });
      }
      renderController(e) {
        let t = [];
        if (
          (t.push(
            r.createElement(
              "div",
              { className: "Label LegacyDebuggerGroup" },
              "Pressed:"
            )
          ),
          e.pressed)
        )
          for (let n of e.pressed)
            t.push(
              r.createElement(
                "div",
                { className: "Label LegacyDebuggerButtonName" },
                n
              )
            );
        else
          t.push(
            r.createElement(
              "div",
              { className: "Label LegacyDebuggerButtonName" },
              "None"
            )
          );
        if (
          (t.push(
            r.createElement(
              "div",
              { className: "Label LegacyDebuggerGroup" },
              "Touched:"
            )
          ),
          e.touched)
        )
          for (let n of e.touched)
            t.push(
              r.createElement(
                "div",
                { className: "Label LegacyDebuggerButtonName" },
                n
              )
            );
        else
          t.push(
            r.createElement(
              "div",
              { className: "Label LegacyDebuggerButtonName" },
              "None"
            )
          );
        if (
          (t.push(
            r.createElement(
              "div",
              { className: "Label LegacyDebuggerGroup" },
              "Supported:"
            )
          ),
          e.supported_buttons)
        )
          for (let n of e.supported_buttons)
            t.push(
              r.createElement(
                "div",
                { className: "Label LegacyDebuggerButtonName" },
                n
              )
            );
        else
          t.push(
            r.createElement(
              "div",
              { className: "Label LegacyDebuggerButtonName" },
              "None"
            )
          );
        t.push(
          r.createElement(
            "div",
            { className: "Label LegacyDebuggerGroup" },
            "Axis:"
          )
        );
        for (let n of e.axis)
          t.push(
            r.createElement(
              "div",
              { className: "Label LegacyDebuggerButtonName" },
              "X: ",
              n.x.toFixed(2),
              " Y: ",
              n.y.toFixed(2)
            )
          );
        return t;
      }
      render() {
        return this.state.currentState
          ? r.createElement(
              "div",
              { className: "FlexRow" },
              r.createElement(
                "div",
                { className: "FlexColumn LegacyDebuggerController" },
                r.createElement("div", { className: "Label" }, "Left"),
                this.renderController(this.state.currentState.left)
              ),
              r.createElement(
                "div",
                { className: "FlexColumn LegacyDebuggerController" },
                r.createElement("div", { className: "Label" }, "Right"),
                this.renderController(this.state.currentState.right)
              ),
              r.createElement(
                "div",
                { className: "FlexColumn LegacyDebuggerController" },
                r.createElement("div", { className: "Label" }, "HMD"),
                this.renderController(this.state.currentState.hmd)
              )
            )
          : r.createElement(
              "div",
              { className: "Label" },
              Object(a.c)("#LegacyDebugger_NoApp")
            );
      }
    }
    Object(i.b)([o.bind], l.prototype, "OnLegacyInputFrame", null);
    class c extends r.Component {
      constructor(e) {
        super(e);
      }
      render() {
        return r.createElement(
          "div",
          { className: "FlexRowWithWrap" },
          r.createElement(
            "div",
            { className: "FlexFullWidthRowCentered LegacyDebuggerWrapper" },
            r.createElement(l, null)
          )
        );
      }
    }
  },
  V1oe: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return k;
    });
    var i,
      r = n("mrSG"),
      o = n("q1tI"),
      a = n("7wIv"),
      s = n("GXif"),
      l = n("/i/y"),
      c = n("uFkT"),
      d = n("MYgy"),
      u = n("Yd4P"),
      h = n.n(u),
      p = n("okNM"),
      m = n("2vnA"),
      v = n("TbT/"),
      b = n("GxMB");
    !(function (e) {
      (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
    })(i || (i = {}));
    class g extends o.Component {
      constructor(e) {
        super(e),
          (this.m_containerRef = null),
          (this.m_nameRef = null),
          (this.m_svgRef = null),
          (this.m_containerRef = o.createRef()),
          (this.m_nameRef = o.createRef()),
          (this.m_svgRef = o.createRef()),
          (this.state = {
            click: !1,
            touch: !1,
            x: 0,
            y: 0,
            value: 0,
            force: 0,
          });
      }
      componentDidMount() {
        this.RegisterForSourceUpdates();
      }
      componentWillUnmount() {
        this.UnregisterForSourceUpdates();
      }
      componentWillUpdate() {
        this.RegisterForSourceUpdates();
      }
      GetHeightEstimate() {
        return 1;
      }
      RegisterForSourceUpdates() {
        this.props.source.click &&
          this.props.visualizer.RegisterSourceVisualizer(
            this.props.devicePath,
            this.props.sourcePath + "/click",
            this.ComponentUpdated
          ),
          this.props.source.touch &&
            this.props.visualizer.RegisterSourceVisualizer(
              this.props.devicePath,
              this.props.sourcePath + "/touch",
              this.ComponentUpdated
            ),
          this.props.source.value &&
            this.props.visualizer.RegisterSourceVisualizer(
              this.props.devicePath,
              this.props.sourcePath + "/value",
              this.ComponentUpdated
            ),
          ("joystick" != this.props.source.type &&
            "trackpad" != this.props.source.type) ||
            (this.props.visualizer.RegisterSourceVisualizer(
              this.props.devicePath,
              this.props.sourcePath + "/x",
              this.ComponentUpdated
            ),
            this.props.visualizer.RegisterSourceVisualizer(
              this.props.devicePath,
              this.props.sourcePath + "/y",
              this.ComponentUpdated
            )),
          this.props.source.force &&
            this.props.visualizer.RegisterSourceVisualizer(
              this.props.devicePath,
              this.props.sourcePath + "/force",
              this.ComponentUpdated
            );
      }
      UnregisterForSourceUpdates() {
        this.props.source.click &&
          this.props.visualizer.UnregisterSourceVisualizer(
            this.props.devicePath,
            this.props.sourcePath + "/click"
          ),
          this.props.source.touch &&
            this.props.visualizer.UnregisterSourceVisualizer(
              this.props.devicePath,
              this.props.sourcePath + "/touch"
            ),
          this.props.source.value &&
            this.props.visualizer.UnregisterSourceVisualizer(
              this.props.devicePath,
              this.props.sourcePath + "/value"
            ),
          ("joystick" != this.props.source.type &&
            "trackpad" != this.props.source.type) ||
            (this.props.visualizer.UnregisterSourceVisualizer(
              this.props.devicePath,
              this.props.sourcePath
            ),
            this.props.visualizer.UnregisterSourceVisualizer(
              this.props.devicePath,
              this.props.sourcePath
            )),
          this.props.source.force &&
            this.props.visualizer.UnregisterSourceVisualizer(
              this.props.devicePath,
              this.props.sourcePath + "/force"
            );
      }
      ComponentUpdated(e, t, n) {
        e == this.props.devicePath &&
          (t == this.props.sourcePath + "/click" && this.setState({ click: n }),
          t == this.props.sourcePath + "/touch" && this.setState({ touch: n }),
          t == this.props.sourcePath + "/x" && this.setState({ x: n }),
          t == this.props.sourcePath + "/y" && this.setState({ y: n }),
          t == this.props.sourcePath + "/value" && this.setState({ value: n }),
          t == this.props.sourcePath + "/force" && this.setState({ force: n }));
      }
      GetPositionStyle() {
        let e;
        return (
          (e =
            "/user/hand/left" == this.props.devicePath
              ? this.props.imageScale.right -
                this.props.imageScale.scale *
                  this.props.source.binding_image_point[0]
              : this.props.imageScale.left +
                this.props.imageScale.scale *
                  this.props.source.binding_image_point[0]),
          {
            position: "absolute",
            left: e,
            top:
              this.props.imageScale.scale *
                this.props.source.binding_image_point[1] +
              this.props.imageScale.top,
          }
        );
      }
      GetPosition() {
        let e;
        return (
          (e =
            "/user/hand/left" == this.props.devicePath
              ? this.props.imageScale.right -
                this.props.imageScale.scale *
                  this.props.source.binding_image_point[0]
              : this.props.imageScale.left +
                this.props.imageScale.scale *
                  this.props.source.binding_image_point[0]),
          {
            x: e,
            y:
              this.props.imageScale.scale *
                this.props.source.binding_image_point[1] +
              this.props.imageScale.top,
          }
        );
      }
      renderHeaderVisualization() {
        return this.props.source.touch || this.props.source.click
          ? this.renderTouchClickVisualization()
          : null;
      }
      renderBodyVisualization() {
        return null;
      }
      renderTouchClickVisualization() {
        let e = "";
        return (
          this.state.click && (e += " Clicked"),
          this.state.touch && (e += " Touched"),
          o.createElement(
            "div",
            { className: "VisualizerButtonContainer" },
            o.createElement("div", { className: "VisualizerButtonBase" + e })
          )
        );
      }
      renderBar(e, t, n) {
        let i = { width: String(100 * n) + "%" };
        return o.createElement(
          "div",
          { className: "TriggerBar " + t },
          o.createElement(
            "div",
            { className: "VisualizerLabel" },
            Object(s.c)(e)
          ),
          o.createElement(
            "div",
            { className: "TriggerBarBackground" },
            o.createElement("div", { className: "TriggerBarContent", style: i })
          )
        );
      }
      UpdateSVGPath() {
        if (
          this.m_nameRef &&
          this.m_nameRef.current &&
          this.m_containerRef &&
          this.m_containerRef.current &&
          this.m_svgRef &&
          this.m_svgRef.current
        ) {
          let e = this.m_svgRef.current.children.namedItem("SourcePath"),
            t = this.m_svgRef.current.children.namedItem("SourceLine"),
            n = this.m_svgRef.current.children.namedItem("SourceCircle"),
            r = this.props.side == i.Right,
            o = this.m_nameRef.current.getBoundingClientRect(),
            a = this.m_containerRef.current.getBoundingClientRect(),
            s = this.GetPosition(),
            l = new d.e(0, o.top + o.height / 2);
          l.x = r ? a.left - 10 : a.right + 10;
          let c = r ? -20 : 20,
            u = l.x + c + "," + l.y + " " + s.x + "," + s.y;
          e.setAttribute("points", u);
          let h = l.x + "," + l.y + " " + (l.x + c) + "," + l.y;
          t.setAttribute("points", h),
            n.setAttribute("cx", s.x + ""),
            n.setAttribute("cy", s.y + "");
        }
      }
      componentDidUpdate() {
        this.UpdateSVGPath();
      }
      IsEngaged() {
        return (
          this.state.touch ||
          this.state.click ||
          (this.state.value && this.state.value > 0.1) ||
          (this.state.force && this.state.force > 0.1) ||
          (this.state.x && Math.abs(this.state.x) > 0.1) ||
          (this.state.y && Math.abs(this.state.x) > 0.1)
        );
      }
      render() {
        let e = "MenuSVG";
        return (
          this.props.side == i.Left
            ? (e += " MenuLeftLine")
            : (e += " MenuRightLine"),
          this.IsEngaged() && (e += " MenuSVGVisible"),
          o.createElement(
            "div",
            { className: "VisualizerControl", ref: this.m_containerRef },
            o.createElement(
              "div",
              { className: "VisualizerSectionHeader" },
              o.createElement(
                "div",
                { className: "Label Title", ref: this.m_nameRef },
                c.a.LocalizeControllerString(
                  this.props.controllerType,
                  this.props.sourcePath
                )
              ),
              this.renderHeaderVisualization()
            ),
            this.renderBodyVisualization(),
            o.createElement(
              "svg",
              {
                className: e,
                xmlns: "http://www.w3.org/2000/svg",
                ref: this.m_svgRef,
              },
              o.createElement(
                "defs",
                null,
                o.createElement(
                  "radialGradient",
                  { id: "buttonGradient" },
                  o.createElement("stop", {
                    offset: "0%",
                    stopColor: "var(--bordercolor)",
                    stopOpacity: "0.8",
                  }),
                  o.createElement("stop", {
                    offset: "100%",
                    stopColor: "var(--bordercolor)",
                    stopOpacity: "0",
                  })
                )
              ),
              o.createElement("polyline", {
                id: "SourceLine",
                stroke: "var(--bordercolor)",
                strokeWidth: "0.1rem",
                fill: "transparent",
              }),
              o.createElement("polyline", {
                id: "SourcePath",
                stroke: "var(--bordercolor)",
                strokeWidth: "0.1rem",
                fill: "transparent",
              }),
              o.createElement("circle", {
                id: "SourceCircle",
                r: "2rem",
                fill: "url(#buttonGradient)",
              })
            )
          )
        );
      }
    }
    Object(r.b)([a.bind], g.prototype, "ComponentUpdated", null),
      Object(r.b)([a.bind], g.prototype, "UpdateSVGPath", null);
    class _ extends g {
      constructor(e) {
        super(e);
      }
    }
    class y extends g {
      constructor(e) {
        super(e);
      }
      GetHeightEstimate() {
        let e = 1;
        return (
          this.props.source.value && e++, this.props.source.force && e++, e
        );
      }
      renderBodyVisualization() {
        return o.createElement(
          "div",
          { className: "TriggerVisualizerContainer" },
          this.props.source.value &&
            this.renderBar(
              "#SourceInputMode_Pull",
              "TriggerValue",
              this.state.value
            ),
          this.props.source.force &&
            this.renderBar(
              "#SourceInputMode_Force",
              "TriggerForce",
              this.state.force
            )
        );
      }
    }
    class S extends g {
      constructor(e) {
        super(e);
      }
      renderBodyVisualization() {
        let e = null,
          t = "TrackpadVisualizerPip";
        return (
          (!this.state.touch &&
            (this.props.source.touch ||
              (0 == this.state.x && 0 == this.state.y))) ||
            ((e = {
              position: "absolute",
              top: String(2 * (1 - this.state.y)) + "rem",
              left: String(2 * (1 + this.state.x)) + "rem",
            }),
            this.state.click && (t += " Clicked")),
          o.createElement(
            "div",
            {
              className:
                "TrackpadVisualizerContainer" +
                (this.state.touch ? " Touched" : ""),
            },
            o.createElement(
              "div",
              { className: "TrackpadPosition" },
              o.createElement(
                "div",
                { className: "VisualizerLabel" },
                Object(s.c)("#SourceInputMode_Position")
              ),
              o.createElement(
                "div",
                { className: "TrackpadVisualizerContainer" },
                o.createElement(
                  "div",
                  { className: "TrackpadVisualizerBackground" },
                  e &&
                    o.createElement(
                      "div",
                      { style: e },
                      o.createElement(
                        "div",
                        { className: "TrackpadVisualizerPipContainer" },
                        o.createElement("div", { className: t })
                      )
                    )
                )
              )
            ),
            this.props.source.force &&
              this.renderBar(
                "#SourceInputMode_Force",
                "TriggerForce",
                this.state.force
              )
          )
        );
      }
    }
    class f extends o.Component {
      constructor(e) {
        super(e),
          (this.m_imageRef = o.createRef()),
          (this.state = { imageScale: this.GetPointScale() });
      }
      get ControllerTypeInfo() {
        let e = c.a.GetDeviceInfo(this.props.devicePath);
        return c.a.GetControllerTypeInfo(e.controller_type);
      }
      componentDidMount() {
        this.setState({ imageScale: this.GetPointScale() });
      }
      EstimateSourceHeight(e) {
        let t;
        switch (e.type) {
          case "button":
            return 1;
          case "trigger":
            return (t = 1), e.force && t++, e.value && t++, t;
          case "joystick":
          case "trackpad":
            return (t = 3), e.force && t++, t;
          case "pose":
          case "pinch":
          case "skeleton":
          case "vibration":
            return 0;
          default:
            return 1;
        }
      }
      renderSource(e, t, n) {
        let i = e + this.ControllerTypeInfo.controller_type;
        switch (t.type) {
          case "button":
            return o.createElement(_, {
              key: i,
              side: n,
              controllerType: this.ControllerTypeInfo,
              devicePath: this.props.devicePath,
              sourcePath: e,
              source: t,
              visualizer: this.props.visualizer,
              imageScale: this.GetPointScale(),
            });
          case "trigger":
            return o.createElement(y, {
              key: i,
              side: n,
              controllerType: this.ControllerTypeInfo,
              devicePath: this.props.devicePath,
              sourcePath: e,
              source: t,
              visualizer: this.props.visualizer,
              imageScale: this.GetPointScale(),
            });
          case "joystick":
          case "trackpad":
            return o.createElement(S, {
              key: i,
              side: n,
              controllerType: this.ControllerTypeInfo,
              devicePath: this.props.devicePath,
              sourcePath: e,
              source: t,
              visualizer: this.props.visualizer,
              imageScale: this.GetPointScale(),
            });
          case "pose":
          case "pinch":
          case "skeleton":
          case "vibration":
            return null;
          default:
            return o.createElement(
              "div",
              { key: i },
              "Need to add visualizer for ",
              t.type
            );
        }
      }
      GetPointScale() {
        let e = { scale: 1, left: 0, right: 0, top: 0 };
        if (
          this.m_imageRef.current &&
          this.m_imageRef.current.naturalWidth > 0
        ) {
          let t = this.m_imageRef.current.getBoundingClientRect();
          (e.scale = t.height / this.m_imageRef.current.naturalHeight),
            (e.left = t.left + window.scrollX),
            (e.right = t.right + window.scrollX),
            (e.top = t.top + window.scrollY);
        }
        return e;
      }
      OnImageLoaded() {
        this.setState({ imageScale: this.GetPointScale() });
      }
      OnImageReflow() {
        this.setState({ imageScale: this.GetPointScale() });
      }
      renderImage() {
        let e = null,
          t = null,
          n = this.ControllerTypeInfo;
        return (
          "/user/hand/left" == this.props.devicePath
            ? n.input_bindingui_left &&
              ((e = n.input_bindingui_left.uri),
              (t = n.input_bindingui_left.transform
                ? n.input_bindingui_left.transform
                : ""))
            : "/user/hand/right" == this.props.devicePath
            ? n.input_bindingui_right &&
              ((e = n.input_bindingui_right.uri),
              (t = n.input_bindingui_right.transform
                ? n.input_bindingui_right.transform
                : ""))
            : n.input_bindingui_left
            ? ((e = n.input_bindingui_left.uri),
              (t = n.input_bindingui_left.transform
                ? n.input_bindingui_left.transform
                : ""))
            : n.input_bindingui_right &&
              ((e = n.input_bindingui_right.uri),
              (t = n.input_bindingui_right.transform
                ? n.input_bindingui_right.transform
                : "")),
          e
            ? o.createElement(
                "div",
                { className: "VisualizerImageContainer" },
                o.createElement("img", {
                  className: "VisualizerImage",
                  ref: this.m_imageRef,
                  onLoad: this.OnImageLoaded,
                  src: e,
                  style: { transform: t },
                }),
                o.createElement(h.a, { onReflow: this.OnImageReflow })
              )
            : null
        );
      }
      render() {
        let e = [],
          t = [],
          n = this.ControllerTypeInfo,
          r = 0,
          a = [];
        for (let e in n.input_source) {
          let t = n.input_source[e];
          if ("InputValueVisibility_AvailableButHidden" == t.visibility)
            continue;
          let i = this.EstimateSourceHeight(t);
          (r += i),
            a.push({
              sSourcePath: e,
              inputSource: t,
              order: t.order ? t.order : 0,
              height: i,
            });
        }
        let s = 8;
        r > 16 && (s = r / 2);
        let l = 0,
          c = a.sort((e, t) => e.order - t.order);
        for (let n of c) {
          l += n.height;
          let r = l > s ? i.Right : i.Left,
            o = this.renderSource(n.sSourcePath, n.inputSource, r);
          o && (r == i.Left ? e.push(o) : t.push(o));
        }
        return o.createElement(
          "div",
          { className: "ControllerVisualizer" },
          o.createElement(
            "div",
            { className: "VisualizerLeft ControllerVisualizerEntries" },
            e
          ),
          this.renderImage(),
          o.createElement(
            "div",
            { className: "VisualizerRight ControllerVisualizerEntries" },
            t
          )
        );
      }
    }
    Object(r.b)([a.bind], f.prototype, "OnImageLoaded", null),
      Object(r.b)([a.bind], f.prototype, "OnImageReflow", null);
    let k = class extends o.Component {
      constructor(e) {
        super(e),
          (this.m_mailbox = new l.c()),
          (this.m_componentRegistrations = {}),
          (this.m_observeDisposer = null),
          this.m_mailbox.RegisterHandler(
            "update_component_states",
            this.OnUpdateComponentStates
          ),
          this.m_mailbox
            .Init("controller_visualizer")
            .then(
              () => (
                this.UpdateDeviceInputStateSubscriptions(),
                (this.m_observeDisposer = Object(m.n)(
                  c.a,
                  "ConnectedDevices",
                  this.OnConnectedDevicesChanged
                )),
                this.SetDefaultDeviceIfNecessary(),
                null
              )
            ),
          (this.state = { devicePath: null });
      }
      componentWillUnmount() {
        this.m_observeDisposer && this.m_observeDisposer();
        for (let e of c.a.ConnectedDevices) {
          let t = {
            type: "cancel_input_state_updates",
            device_path: e.root_path,
            returnAddress: this.m_mailbox.name,
          };
          this.m_mailbox.SendMessage("input_server", t);
        }
      }
      UpdateDeviceInputStateSubscriptions() {
        for (let e of c.a.ConnectedDevices) {
          let t = {
            type: "request_input_state_updates",
            device_path: e.root_path,
            returnAddress: this.m_mailbox.name,
          };
          this.m_mailbox.SendMessage("input_server", t);
        }
      }
      SetDefaultDeviceIfNecessary() {
        let e = this.GetSortedDevices();
        !this.state.devicePath &&
          e &&
          this.setState({ devicePath: e[0].root_path });
      }
      OnConnectedDevicesChanged() {
        this.UpdateDeviceInputStateSubscriptions();
      }
      OnUpdateComponentStates(e) {
        for (let t in e.components) {
          let n = e.device + t;
          this.m_componentRegistrations[n] &&
            this.m_componentRegistrations[n](e.device, t, e.components[t]);
        }
      }
      RegisterSourceVisualizer(e, t, n) {
        this.m_componentRegistrations[e + t] = n;
      }
      UnregisterSourceVisualizer(e, t) {
        delete this.m_componentRegistrations[e + t];
      }
      GetDeviceSortOrder(e) {
        switch (e.root_path) {
          case "/user/hand/left":
            return 0;
          case "/user/hand/right":
            return 1;
          default:
            return 2;
        }
      }
      GetSortedDevices() {
        return c.a.ConnectedDevices.sort(
          (e, t) => this.GetDeviceSortOrder(e) - this.GetDeviceSortOrder(t)
        );
      }
      render() {
        let e,
          t = [],
          n = this.GetSortedDevices();
        if (!n)
          return o.createElement(
            v.i,
            {
              className: "ControllerVisualizerWrapper",
              header: Object(s.c)("#TestControllerTitle", ""),
              onDismissRequested: this.props.onDismissRequested,
            },
            o.createElement(
              "div",
              { className: "VisualizerLabel" },
              Object(s.c)("#TestController_NoController")
            )
          );
        for (let i of n)
          "TrackedDeviceClass_HMD" != i.class &&
            (i.root_path == this.state.devicePath && (e = i.serial_number),
            t.push({
              value: i.root_path,
              sLabel: Object(s.c)("#" + i.root_path),
            }));
        return o.createElement(
          v.i,
          {
            className: "ControllerVisualizerWrapper",
            header: Object(s.c)("#TestControllerTitle", e),
            onDismissRequested: this.props.onDismissRequested,
            footer: o.createElement(v.j, {
              leftControls: [
                o.createElement(b.c, {
                  key: "dropdown",
                  items: t,
                  value: this.state.devicePath,
                  defaultLabel: Object(s.c)("#" + this.state.devicePath),
                  onChange: (e) => {
                    this.setState({ devicePath: e });
                  },
                }),
              ],
              onDismissRequested: this.props.onDismissRequested,
            }),
          },
          this.state.devicePath &&
            o.createElement(f, {
              devicePath: this.state.devicePath,
              serialNumber: e,
              visualizer: this,
            })
        );
      }
    };
    Object(r.b)([a.bind], k.prototype, "OnConnectedDevicesChanged", null),
      Object(r.b)([a.bind], k.prototype, "OnUpdateComponentStates", null),
      (k = Object(r.b)([p.a], k));
  },
  YRJX: function (e, t, n) {
    "use strict";
    n.d(t, "r", function () {
      return R;
    }),
      n.d(t, "q", function () {
        return M;
      }),
      n.d(t, "h", function () {
        return T;
      }),
      n.d(t, "a", function () {
        return E;
      }),
      n.d(t, "g", function () {
        return I;
      }),
      n.d(t, "i", function () {
        return P;
      }),
      n.d(t, "d", function () {
        return L;
      }),
      n.d(t, "c", function () {
        return N;
      }),
      n.d(t, "e", function () {
        return F;
      }),
      n.d(t, "b", function () {
        return B;
      }),
      n.d(t, "k", function () {
        return H;
      }),
      n.d(t, "l", function () {
        return A;
      }),
      n.d(t, "m", function () {
        return j;
      }),
      n.d(t, "j", function () {
        return U;
      }),
      n.d(t, "f", function () {
        return W;
      }),
      n.d(t, "p", function () {
        return z;
      }),
      n.d(t, "o", function () {
        return q;
      }),
      n.d(t, "n", function () {
        return Q;
      });
    var i,
      r,
      o = n("mrSG"),
      a = n("q1tI"),
      s = n("7wIv"),
      l = n("GXif"),
      c = n("6YgL"),
      d = n("CzjV"),
      u = n("hcOo"),
      h = n("/i/y"),
      p = n("7uy8"),
      m = n("2vnA"),
      v = n("Vp/w"),
      b = n("okNM"),
      g = n("p9CI"),
      _ = n("X3sx"),
      y = n("39GS"),
      S = n("nsy5"),
      f = n("8GAN"),
      k = n("vvDA"),
      C = n("Q+Z6"),
      D = n("/CXA"),
      O = n("aaBP"),
      w = n.n(O);
    const R = "DashboardPanelTopCenter",
      M = "DashboardControlStrip",
      T = (e) => {
        var t, n;
        const i = a.useRef(null),
          r = a.useRef(null);
        a.useEffect(() => {
          var e, t;
          return null === (e = i.current) || void 0 === e
            ? void 0
            : e.setFloatingViewStack(
                null === (t = r.current) || void 0 === t ? void 0 : t.viewStack
              );
        });
        const o = null == (t = e.scrollable) || t,
          s = null != (n = e.foregroundReflectMultiplier) ? n : 1;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            h.Y,
            {
              visibility: e.visible ? h.ab.Visible : h.ab.Hidden,
              debug_name: "homepanelbackground",
              curvature_origin_id: p.j,
              origin: h.s.BottomCenter,
              interactive: !1,
              scrollable: !1,
              target_dpi_panel_id: M,
              target_dpi_multiplier: 2,
              reflect: 0.01,
              sampler: h.t.SingleTap,
            },
            a.createElement(h.Z, { id: R, location: h.s.TopCenter }),
            a.createElement(
              D.a,
              { ref: i },
              a.createElement("div", {
                className: Object(u.a)(
                  "DashboardPanelBackground",
                  e.additionalClassNames
                ),
                style: e.additionalStyle,
              })
            )
          ),
          a.createElement(
            h.lb,
            { translation: { z: 1e-5 } },
            a.createElement(
              h.Y,
              {
                visibility: e.visible ? h.ab.Visible : h.ab.Hidden,
                debug_name: e.debugName,
                curvature_origin_id: p.j,
                origin: h.s.BottomCenter,
                interactive: !0,
                scrollable: o,
                target_dpi_panel_id: M,
                reflect: 0.2 * s,
              },
              a.createElement(
                D.c,
                { ref: r },
                a.createElement(
                  c.b,
                  null,
                  a.createElement(
                    g.b,
                    {
                      scrollDirection: o ? g.a.Vertical : g.a.None,
                      className: Object(u.a)(
                        "DashboardPanel",
                        e.additionalClassNames
                      ),
                      style: e.additionalStyle,
                    },
                    e.children
                  )
                )
              )
            )
          )
        );
      };
    function E() {
      return a.createElement(
        "div",
        { className: "ActivitySpinner" },
        a.createElement("div", { className: "Bar" }),
        a.createElement("div", { className: "Bar" }),
        a.createElement("div", { className: "Bar" })
      );
    }
    class I extends a.Component {
      constructor(e) {
        super(e), (this.state = { time: new Date() });
      }
      componentDidMount() {
        let e = 60 - (new Date().getSeconds() % 60) + 0.01;
        this.m_clockUpdateTimeout = window.setTimeout(this.updateTime, 1e3 * e);
      }
      componentWillUnmount() {
        clearTimeout(this.m_clockUpdateTimeout);
      }
      updateTime() {
        this.setState({ time: new Date() }),
          (this.m_clockUpdateTimeout = window.setTimeout(this.updateTime, 6e4));
      }
      render() {
        const e = l.a.GetLocale();
        let t = this.state.time.toLocaleTimeString(e, {
            hour: "numeric",
            minute: "2-digit",
          }),
          n = null;
        const i = t.toLowerCase(),
          r = Math.max(i.lastIndexOf("am"), i.lastIndexOf("pm"));
        return (
          r >= 0 && ((n = t.substring(r)), (t = t.substring(0, r - 1))),
          a.createElement(
            "div",
            { className: "ClockContainer" },
            a.createElement(
              "div",
              { className: "Clock" },
              t,
              " ",
              a.createElement("span", { className: "Suffix" }, n)
            )
          )
        );
      }
    }
    function P(e) {
      return a.createElement(
        c.a,
        { className: "PowerMenuButton", onClick: e.onClick },
        a.createElement("div", { className: "HoverGradient" }),
        a.createElement("div", { className: "ClickGradient" }),
        a.createElement("span", null, e.label),
        e.lineBelow && a.createElement("div", { className: "LineBelow" })
      );
    }
    Object(o.b)([s.bind], I.prototype, "updateTime", null);
    let x = (i = class extends a.Component {
      get isShowingTooltip() {
        return i.s_CurrentlyShownTooltip === this;
      }
      show() {
        i.s_CurrentlyShownTooltip = this;
      }
      hide() {
        this.isShowingTooltip && (i.s_CurrentlyShownTooltip = null);
      }
      render() {
        const e =
          this.props.text && (this.props.shown || this.isShowingTooltip);
        return a.createElement(
          "div",
          { style: { position: "absolute", left: "50%", top: "50%" } },
          a.createElement(
            v.a,
            { allowableParentSelectors: [".DashboardMain"] },
            a.createElement(
              h.lb,
              { translation: { y: -0.2, z: 0.05 } },
              a.createElement(
                h.Y,
                {
                  visibility: e ? h.ab.Visible : h.ab.SkipInSceneGraph,
                  target_dpi_panel_id: M,
                  curvature_origin_id: p.j,
                },
                a.createElement(
                  "div",
                  { className: "ControlBarButtonTooltip" },
                  this.props.text
                )
              )
            )
          )
        );
      }
    });
    (x.s_CurrentlyShownTooltip = null),
      Object(o.b)([m.f], x.prototype, "isShowingTooltip", null),
      Object(o.b)([m.d.bound], x.prototype, "show", null),
      Object(o.b)([m.d.bound], x.prototype, "hide", null),
      Object(o.b)([m.m], x, "s_CurrentlyShownTooltip", void 0),
      (x = i = Object(o.b)([b.a], x));
    class V extends a.Component {
      static ShouldInvertThumbnail(e) {
        if (!e) return !1;
        if (((e = e.toLowerCase()), !V.s_mapShouldInvertThumbnail.has(e))) {
          let t = !1;
          e.endsWith(".svg") && (t = !0),
            e.startsWith("data:") &&
              V.k_rsThumbnailHashesToInvert.indexOf(w.a.hash(e)) >= 0 &&
              (t = !0),
            V.s_mapShouldInvertThumbnail.set(e, t);
        }
        return V.s_mapShouldInvertThumbnail.get(e);
      }
      render() {
        var e;
        const t = null != (e = this.props.shadow) && e,
          n = V.ShouldInvertThumbnail(this.props.src);
        return a.createElement(
          "div",
          { className: "Icon" },
          t &&
            a.createElement("img", {
              className: "Shadow",
              src: this.props.src,
            }),
          a.createElement("img", {
            className: Object(u.a)(["BlackToWhite", n]),
            src: this.props.src,
          })
        );
      }
    }
    var L, N;
    (V.k_rsThumbnailHashesToInvert = [
      "5cbd0ebd6459cdaf75fdcafc5051f4e0",
      "c77452e60fc29227b33773ff6e74f8a1",
      "44b62220b39ba717fbfc65e3b4225491",
      "0ea4aa3d9529b716f0f1957684247dee",
      "86bbab56235b55f6e5e7d288342931d7",
    ]),
      (V.s_mapShouldInvertThumbnail = new Map()),
      (function (e) {
        (e[(e.Large = 0)] = "Large"),
          (e[(e.Small = 1)] = "Small"),
          (e[(e.App = 2)] = "App");
      })(L || (L = {})),
      (function (e) {
        (e[(e.Center = 0)] = "Center"), (e[(e.Fill = 1)] = "Fill");
      })(N || (N = {}));
    const F = (e) =>
      a.createElement(
        "div",
        { className: Object(u.a)("ControlBarGroup", L[e.style]) },
        e.children
      );
    let B = class extends a.Component {
      constructor(e) {
        super(e), (this.m_refTooltip = a.createRef());
      }
      onMouseEnter() {
        var e, t, n;
        null === (e = this.m_refTooltip.current) || void 0 === e || e.show(),
          null === (n = (t = this.props).onMouseEnter) ||
            void 0 === n ||
            n.call(t);
      }
      onMouseLeave() {
        var e, t, n;
        null === (e = this.m_refTooltip.current) || void 0 === e || e.hide(),
          null === (n = (t = this.props).onMouseLeave) ||
            void 0 === n ||
            n.call(t);
      }
      render() {
        var e;
        return a.createElement(
          c.a,
          {
            className: Object(u.a)(
              "ControlBarButton",
              this.props.additionalClassNames,
              N[((e = this.props.imageStyle), null != e ? e : N.Center)] +
                "Image",
              ["Disabled", !1 === this.props.enabled],
              ["Active", !!this.props.active]
            ),
            style: {
              "--image-url": this.props.imageUrl
                ? "url('" + this.props.imageUrl + "')"
                : void 0,
            },
            onClick: this.props.onClick,
            onMouseDown: this.props.onMouseDown,
            onMouseEnter: this.onMouseEnter,
            onMouseLeave: this.onMouseLeave,
            pressSoundEffect: d.a.ControlBarButtonPress,
            releaseSoundEffect: d.a.ControlBarButtonRelease,
          },
          this.props.centerPanelAnchorID &&
            a.createElement(
              "div",
              { style: { position: "absolute", left: "50%", top: "50%" } },
              a.createElement(v.a, {
                allowableParentSelectors: [".DashboardMain"],
                panelAnchorID: this.props.centerPanelAnchorID,
              })
            ),
          a.createElement(x, {
            text: this.props.label,
            ref: this.m_refTooltip,
          }),
          a.createElement(V, { src: this.props.imageUrl })
        );
      }
    };
    Object(o.b)([s.bind], B.prototype, "onMouseEnter", null),
      Object(o.b)([s.bind], B.prototype, "onMouseLeave", null),
      (B = Object(o.b)([b.a], B));
    const H = (e) =>
      a.createElement(
        F,
        { style: e.style },
        a.createElement(B, Object.assign({}, e))
      );
    class A extends a.Component {
      constructor(e) {
        super(e),
          (this.m_BatteryStateChangedCallbackHandle = null),
          (this.m_DeviceRoleChangedCallbackHandle = null),
          (this.m_DeviceEventCallbackHandle = null),
          (this.deviceIndex = h.nb),
          (this.batteryLevelStable = null),
          (this.state = { batteryIconPath: null });
      }
      componentDidMount() {
        var e, t, n;
        (this.m_BatteryStateChangedCallbackHandle =
          null === (e = VRHTML) || void 0 === e
            ? void 0
            : e.RegisterForBatteryStateChangedEvents(
                this.onBatteryStateChanged
              )),
          (this.m_DeviceRoleChangedCallbackHandle =
            null === (t = VRHTML) || void 0 === t
              ? void 0
              : t.RegisterForDeviceRoleChangedEvents(this.onDeviceRoleChanged)),
          (this.m_DeviceEventCallbackHandle =
            null === (n = VRHTML) || void 0 === n
              ? void 0
              : n.RegisterForDeviceEvents(this.onDeviceEvent)),
          this.update();
      }
      componentWillUnmount() {
        this.m_BatteryStateChangedCallbackHandle &&
          (this.m_BatteryStateChangedCallbackHandle.unregister(),
          (this.m_BatteryStateChangedCallbackHandle = null)),
          this.m_DeviceRoleChangedCallbackHandle &&
            (this.m_DeviceRoleChangedCallbackHandle.unregister(),
            (this.m_DeviceRoleChangedCallbackHandle = null)),
          this.m_DeviceEventCallbackHandle &&
            (this.m_DeviceEventCallbackHandle.unregister(),
            (this.m_DeviceEventCallbackHandle = null));
      }
      updateControllerStatus() {
        if (!VRHTML) return;
        let e = !1,
          t = !1,
          n = h.nb;
        if (
          (void 0 !== this.props.role
            ? (n = VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                this.props.role
              ))
            : void 0 !== this.props.deviceIndex && (n = this.props.deviceIndex),
          n != this.deviceIndex &&
            ((this.batteryLevelStable = null), (this.deviceIndex = n)),
          n != h.nb &&
            ((e = VRHTML.VRProperties.GetBoolProperty(
              n,
              h.y.DeviceProvidesBatteryStatus_Bool
            )),
            e))
        ) {
          const e = VRHTML.VRProperties.GetFloatProperty(
            n,
            h.y.DeviceBatteryPercentage_Float
          );
          (t = VRHTML.VRProperties.GetBoolProperty(
            n,
            h.y.DeviceIsCharging_Bool
          )),
            null == this.batteryLevelStable || 0 == this.batteryLevelStable
              ? (this.batteryLevelStable = e)
              : ((this.batteryLevelStable = Math.min(
                  this.batteryLevelStable,
                  e + A.kBatteryLevelHysteresis,
                  1
                )),
                (this.batteryLevelStable = Math.max(
                  this.batteryLevelStable,
                  e - A.kBatteryLevelHysteresis,
                  0
                )));
        }
        let i = k.a.GetBatteryIcon(
          e,
          t,
          this.batteryLevelStable,
          this.props.style
        );
        i != this.state.batteryIconPath &&
          this.setState({ batteryIconPath: i });
      }
      update() {
        window.setTimeout(this.updateControllerStatus, 0);
      }
      onBatteryStateChanged(e) {
        this.update();
      }
      onDeviceRoleChanged() {
        this.update();
      }
      onDeviceEvent(e, t, n) {
        (e != h.m.Activated && e != h.m.Deactivated) || this.update();
      }
      render() {
        return a.createElement(
          "div",
          { className: "BatteryStatus" },
          a.createElement("img", { src: this.state.batteryIconPath })
        );
      }
    }
    (A.kBatteryLevelHysteresis = 0.02),
      Object(o.b)([s.bind], A.prototype, "updateControllerStatus", null),
      Object(o.b)([s.bind], A.prototype, "onBatteryStateChanged", null),
      Object(o.b)([s.bind], A.prototype, "onDeviceRoleChanged", null),
      Object(o.b)([s.bind], A.prototype, "onDeviceEvent", null);
    a.Component;
    const j = (e) =>
      a.createElement(
        "div",
        { className: "Title" },
        a.createElement(V, { src: e.iconUrl, shadow: !0 }),
        a.createElement("span", { className: "NoWrapText" }, e.name)
      );
    class U extends a.Component {
      constructor(e) {
        var t, n;
        super(e),
          (this.m_trackingStateChangedEventHandle = null),
          (this.m_mailbox = new h.c()),
          this.m_mailbox.Init("dashboard_resetseatedbutton"),
          (this.state = {
            eTrackingUniverseOrigin:
              ((n =
                null === (t = VRHTML) || void 0 === t
                  ? void 0
                  : t.VRCompositor.GetTrackingSpace()),
              null != n ? n : h.A.Standing),
          });
      }
      componentDidMount() {
        var e;
        (this.m_trackingStateChangedEventHandle =
          null === (e = VRHTML) || void 0 === e
            ? void 0
            : e.VRCompositor.RegisterForTrackingSpaceChangedEvents(
                this.onTrackingSpaceChanged
              )),
          this.onTrackingSpaceChanged();
      }
      componentWillUnmount() {
        this.m_trackingStateChangedEventHandle &&
          (this.m_trackingStateChangedEventHandle.unregister(),
          (this.m_trackingStateChangedEventHandle = null));
      }
      onTrackingSpaceChanged() {
        var e, t;
        this.setState({
          eTrackingUniverseOrigin:
            ((t =
              null === (e = VRHTML) || void 0 === e
                ? void 0
                : e.VRCompositor.GetTrackingSpace()),
            null != t ? t : h.A.Standing),
        });
      }
      onResetUniverseOrigin() {
        var e;
        null === (e = VRHTML) ||
          void 0 === e ||
          e.VRDashboardManager.HideDashboard("reset_universe_origin");
        let t = {
          type: f.a,
          countdown_seconds: 3,
          universe: this.state.eTrackingUniverseOrigin,
        };
        this.m_mailbox.SendMessage(f.b, t);
      }
      render() {
        switch (this.state.eTrackingUniverseOrigin) {
          case h.A.Seated:
            return a.createElement(B, {
              imageUrl: "/dashboard/images/icons/svr_reset_tracking.svg",
              label: Object(l.c)("#PowerMenuResetSeatedPosition"),
              onClick: this.onResetUniverseOrigin,
            });
          case h.A.Standing:
            return a.createElement(B, {
              imageUrl: "/dashboard/images/icons/svr_reset_tracking.svg",
              label: Object(l.c)("#PowerMenuResetStandingPosition"),
              onClick: this.onResetUniverseOrigin,
            });
          default:
            return null;
        }
      }
    }
    Object(o.b)([s.bind], U.prototype, "onTrackingSpaceChanged", null),
      Object(o.b)([s.bind], U.prototype, "onResetUniverseOrigin", null);
    class W extends a.Component {
      constructor() {
        super(...arguments),
          (this.m_sAnchorID = Math.round(1e7 * Math.random()).toString()),
          (this.m_resizeObserver = null),
          (this.m_refPanelElem = a.createRef()),
          (this.m_refBackgroundElem = a.createRef());
      }
      componentWillUnmount() {
        this.m_resizeObserver &&
          (this.m_resizeObserver.disconnect(), (this.m_resizeObserver = null));
      }
      componentDidUpdate() {
        this.updateBackgroundSize();
      }
      onResizeObserved(e, t) {
        this.updateBackgroundSize();
      }
      updateBackgroundSize() {
        this.m_refPanelElem.current &&
          this.m_refBackgroundElem.current &&
          ((this.m_refBackgroundElem.current.style.width =
            this.m_refPanelElem.current.clientWidth / 2 + "px"),
          (this.m_refBackgroundElem.current.style.height =
            this.m_refPanelElem.current.clientHeight / 2 + "px"));
      }
      onPortalDidMount() {
        this.m_refPanelElem.current &&
          ((this.m_resizeObserver = new ResizeObserver(this.onResizeObserved)),
          this.m_resizeObserver.observe(this.m_refPanelElem.current),
          this.updateBackgroundSize());
      }
      render() {
        const e = this.props.position,
          t = Math.asin(e) / Math.PI;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            h.Z,
            { location: { x: e, y: -1 } },
            a.createElement(h.lb, {
              id: this.m_sAnchorID,
              translation: { y: 0.01 * Math.abs(t), z: -0.03 * Math.abs(t) },
              rotation: { y: 15 * t, z: 2 * t },
            })
          ),
          a.createElement(
            v.b,
            {
              allowableParentSelectors: [".DashboardMain"],
              onPortalDidMount: this.onPortalDidMount,
            },
            a.createElement(
              h.jb,
              { color: this.props.tintColor },
              a.createElement(
                S.a,
                {
                  additionalClassName: "ControlBarTrayAnimation",
                  visible: this.props.visible,
                  duration: 0.25,
                  onStartShowing: this.updateBackgroundSize,
                  onShown: this.updateBackgroundSize,
                },
                a.createElement(
                  h.lb,
                  {
                    parent_id: this.m_sAnchorID,
                    translation: { y: 0.04, z: -0.01 },
                  },
                  a.createElement(
                    h.Y,
                    {
                      curvature_origin_id: p.j,
                      origin: h.s.TopCenter,
                      interactive: !0,
                      scrollable: !0,
                      target_dpi_panel_id: M,
                      sort_depth_bias: this.props.sort_depth_bias,
                    },
                    a.createElement(
                      "div",
                      {
                        className: Object(u.a)(
                          "ControlBarTray",
                          this.props.additionalClassNames
                        ),
                        onMouseEnter: this.props.onMouseEnter,
                        onMouseMove: this.props.onMouseMove,
                        onMouseLeave: this.props.onMouseLeave,
                        ref: this.m_refPanelElem,
                      },
                      this.props.children
                    )
                  ),
                  a.createElement(
                    h.lb,
                    { translation: { z: -1e-5 } },
                    a.createElement(
                      h.Y,
                      {
                        curvature_origin_id: p.j,
                        origin: h.s.TopCenter,
                        interactive: !1,
                        scrollable: !1,
                        target_dpi_panel_id: M,
                        target_dpi_multiplier: 2,
                        reflect: 0.04,
                        sampler: h.t.SingleTap,
                        sort_depth_bias: this.props.sort_depth_bias,
                      },
                      a.createElement("div", {
                        className: "ControlBarTrayBackground",
                        ref: this.m_refBackgroundElem,
                      })
                    )
                  )
                )
              )
            )
          )
        );
      }
    }
    Object(o.b)([s.bind], W.prototype, "onResizeObserved", null),
      Object(o.b)([s.bind], W.prototype, "updateBackgroundSize", null),
      Object(o.b)([s.bind], W.prototype, "onPortalDidMount", null);
    let z = class extends a.Component {
      constructor() {
        super(...arguments),
          (this.m_refSlider = a.createRef()),
          (this.m_refTray = a.createRef()),
          (this.m_bMouseInSlider = !1);
      }
      get slider() {
        return this.m_refSlider.current;
      }
      onSliderMouseEnter() {
        this.m_bMouseInSlider = !0;
      }
      onSliderMouseLeave() {
        this.m_bMouseInSlider = !1;
      }
      onSliderFinalChange() {
        var e, t;
        this.m_bMouseInSlider ||
          null === (t = (e = this.props).onFinalChangeMouseOutside) ||
          void 0 === t ||
          t.call(e);
      }
      get showAudioMirrorControls() {
        return (
          C.d.settings.get(
            "/settings/audio/enablePlaybackMirrorIndependentVolume"
          ) && C.d.settings.get("/settings/audio/enablePlaybackMirror")
        );
      }
      get enableAudioMirrorControls() {
        return !!C.d.settings.get("/settings/audio/activePlaybackMirrorDevice");
      }
      render() {
        const e =
          (this.showAudioMirrorControls ? 3 : 2) >= 3 ? 0 : this.props.position;
        return a.createElement(
          W,
          Object.assign({}, this.props, {
            position: e,
            ref: this.m_refTray,
            additionalClassNames: "VolumeTray",
          }),
          a.createElement(
            "div",
            { className: "Section" },
            a.createElement(
              K,
              {
                onClick: y.a.Instance.toggleMicrophoneMute,
                title: y.a.Instance.microphoneMuted
                  ? Object(l.c)("#UnmuteMicrophone")
                  : Object(l.c)("#MuteMicrophone"),
              },
              a.createElement("img", {
                className: "BlackToWhite",
                src: y.a.Instance.microphoneMuted
                  ? "/dashboard/images/icons/svr_mic_mute.svg"
                  : "/dashboard/images/icons/svr_mic_active.svg",
              })
            ),
            a.createElement(G, {
              title: Object(l.c)("#MicrophoneVolume"),
              value: y.a.Instance.microphoneVolume,
              onChange: y.a.Instance.setMicrophoneVolume,
              onMouseEnter: this.onSliderMouseEnter,
              onMouseLeave: this.onSliderMouseLeave,
              onFinalChange: this.onSliderFinalChange,
              renderValue: (e) => Math.round(100 * e) + "%",
              valueStyleVariant: _.c.OnHandle,
              additionalClassName: Object(u.a)([
                "Muted",
                y.a.Instance.microphoneMuted,
              ]),
              interactionEndSoundEffect: d.a.VolumePreview,
            })
          ),
          this.showAudioMirrorControls &&
            a.createElement(
              "div",
              { className: "Section" },
              a.createElement(
                K,
                {
                  onClick: y.a.Instance.toggleMirrorMute,
                  enabled: this.enableAudioMirrorControls,
                  title: y.a.Instance.mirrorMuted
                    ? Object(l.c)("#UnmuteAudioMirror")
                    : Object(l.c)("#MuteAudioMirror"),
                },
                a.createElement("img", {
                  className: "BlackToWhite",
                  src: y.a.Instance.mirrorMuted
                    ? "/dashboard/images/icons/svr_volume_mirror_mute.svg"
                    : "/dashboard/images/icons/svr_volume_mirror.svg",
                })
              ),
              a.createElement(G, {
                title: Object(l.c)("#AudioMirrorVolume"),
                value: y.a.Instance.mirrorVolume,
                enabled: this.enableAudioMirrorControls,
                onChange: y.a.Instance.setMirrorVolume,
                onMouseEnter: this.onSliderMouseEnter,
                onMouseLeave: this.onSliderMouseLeave,
                onFinalChange: this.onSliderFinalChange,
                renderValue: (e) => Math.round(100 * e) + "%",
                valueStyleVariant: _.c.OnHandle,
                additionalClassName: Object(u.a)([
                  "Muted",
                  y.a.Instance.mirrorMuted,
                ]),
                interactionEndSoundEffect: d.a.VolumePreview,
              })
            ),
          a.createElement(
            "div",
            { className: "Section" },
            a.createElement(
              K,
              {
                onClick: y.a.Instance.toggleMute,
                title: y.a.Instance.muted
                  ? Object(l.c)("#Unmute_Headset")
                  : Object(l.c)("#Mute_Headset"),
              },
              a.createElement("img", {
                className: "BlackToWhite",
                src: y.a.Instance.muted
                  ? "/dashboard/images/icons/svr_volume_mute.svg"
                  : "/dashboard/images/icons/svr_volume.svg",
              })
            ),
            a.createElement(G, {
              title: Object(l.c)("#HeadsetVolume"),
              sliderRef: this.m_refSlider,
              value: y.a.Instance.volume,
              onChange: y.a.Instance.setVolume,
              onMouseEnter: this.onSliderMouseEnter,
              onMouseLeave: this.onSliderMouseLeave,
              onFinalChange: this.onSliderFinalChange,
              renderValue: (e) => Math.round(100 * e) + "%",
              valueStyleVariant: _.c.OnHandle,
              additionalClassName: Object(u.a)(["Muted", y.a.Instance.muted]),
              interactionEndSoundEffect: d.a.VolumePreview,
            })
          )
        );
      }
    };
    Object(o.b)([s.bind], z.prototype, "onSliderMouseEnter", null),
      Object(o.b)([s.bind], z.prototype, "onSliderMouseLeave", null),
      Object(o.b)([s.bind], z.prototype, "onSliderFinalChange", null),
      Object(o.b)([m.f], z.prototype, "showAudioMirrorControls", null),
      Object(o.b)([m.f], z.prototype, "enableAudioMirrorControls", null),
      (z = Object(o.b)([b.a], z));
    let G = class extends a.Component {
      constructor(e) {
        super(e), (this.state = { bSliding: !1, bHover: !1 });
      }
      onMouseEnter(e) {
        var t, n;
        this.setState({ bHover: !0 }),
          null === (n = (t = this.props).onMouseEnter) ||
            void 0 === n ||
            n.call(t, e);
      }
      onMouseLeave(e) {
        var t, n;
        this.setState({ bHover: !1 }),
          null === (n = (t = this.props).onMouseLeave) ||
            void 0 === n ||
            n.call(t, e);
      }
      onInteractionStart() {
        var e, t;
        this.setState({ bSliding: !0 }),
          null === (t = (e = this.props).onInteractionStart) ||
            void 0 === t ||
            t.call(e);
      }
      onInteractionEnd() {
        var e, t;
        this.setState({ bSliding: !1 }),
          null === (t = (e = this.props).onInteractionEnd) ||
            void 0 === t ||
            t.call(e);
      }
      render() {
        let e = Object.assign({}, this.props);
        return a.createElement(
          "div",
          { className: "SliderContainer" },
          this.props.title &&
            a.createElement(x, {
              text: this.props.title,
              shown: this.state.bHover || this.state.bSliding,
            }),
          a.createElement(
            _.a,
            Object.assign({}, e, {
              onMouseEnter: this.onMouseEnter,
              onMouseLeave: this.onMouseLeave,
              onInteractionStart: this.onInteractionStart,
              onInteractionEnd: this.onInteractionEnd,
              ref: this.props.sliderRef,
            })
          )
        );
      }
    };
    Object(o.b)([s.bind], G.prototype, "onMouseEnter", null),
      Object(o.b)([s.bind], G.prototype, "onMouseLeave", null),
      Object(o.b)([s.bind], G.prototype, "onInteractionStart", null),
      Object(o.b)([s.bind], G.prototype, "onInteractionEnd", null),
      (G = Object(o.b)([b.a], G));
    let K = class extends a.Component {
      constructor(e) {
        super(e), (this.m_refTooltip = a.createRef());
      }
      onMouseEnter(e) {
        var t, n, i;
        null === (t = this.m_refTooltip.current) || void 0 === t || t.show(),
          null === (i = (n = this.props).onMouseEnter) ||
            void 0 === i ||
            i.call(n, e);
      }
      onMouseLeave(e) {
        var t, n, i;
        null === (t = this.m_refTooltip.current) || void 0 === t || t.hide(),
          null === (i = (n = this.props).onMouseLeave) ||
            void 0 === i ||
            i.call(n, e);
      }
      render() {
        return a.createElement(
          c.a,
          Object.assign({}, this.props, {
            className: Object(u.a)(
              "ButtonControl",
              "Round",
              this.props.className
            ),
            onMouseEnter: this.onMouseEnter,
            onMouseLeave: this.onMouseLeave,
          }),
          this.props.title &&
            a.createElement(x, {
              text: this.props.title,
              ref: this.m_refTooltip,
            }),
          this.props.children
        );
      }
    };
    Object(o.b)([s.bind], K.prototype, "onMouseEnter", null),
      Object(o.b)([s.bind], K.prototype, "onMouseLeave", null),
      (K = Object(o.b)([b.a], K));
    let q = (r = class extends a.Component {
      constructor() {
        super(...arguments), (this.m_vecOriginalMousePosition = null);
      }
      componentWillUnmount() {
        this.stopSliding();
      }
      get slider() {
        var e;
        return null === (e = this.props.refVolumeTray.current) || void 0 === e
          ? void 0
          : e.slider;
      }
      onButtonMouseDown(e) {
        var t, n;
        (this.m_vecOriginalMousePosition = { x: e.clientX, y: e.clientY }),
          window.document.addEventListener("mouseup", this.onWindowMouseUp),
          window.document.addEventListener("mousemove", this.onWindowMouseMove),
          null === (n = (t = this.props).onShowTray) ||
            void 0 === n ||
            n.call(t);
      }
      onWindowMouseMove(e) {
        if (!this.slider || this.slider.isSliding) return;
        const t = { x: e.clientX, y: e.clientY };
        Object(h.M)(Object(h.hb)(t, this.m_vecOriginalMousePosition)) >
          r.MIN_DRAG_THRESHOLD && this.startSliding(t);
      }
      onWindowMouseUp(e) {
        this.stopSliding();
      }
      startSliding(e) {
        var t;
        null === (t = this.slider) || void 0 === t || t.startExternalSliding(e);
      }
      stopSliding() {
        var e, t, n, i;
        window.document.removeEventListener("mouseup", this.onWindowMouseUp),
          window.document.removeEventListener(
            "mousemove",
            this.onWindowMouseMove
          ),
          (null === (e = this.slider) || void 0 === e ? void 0 : e.isSliding) &&
            (null === (n = (t = this.props).onHideTray) ||
              void 0 === n ||
              n.call(t)),
          null === (i = this.slider) || void 0 === i || i.stopExternalSliding();
      }
      render() {
        return a.createElement(B, {
          imageUrl: y.a.Instance.muted
            ? "/dashboard/images/icons/svr_volume_mute.svg"
            : "/dashboard/images/icons/svr_volume.svg",
          active: this.props.active,
          label: this.props.active ? null : Object(l.c)("#Volume"),
          onMouseDown: this.onButtonMouseDown,
          onMouseEnter: this.props.onMouseEnter,
          onMouseLeave: this.props.onMouseLeave,
        });
      }
    });
    (q.MIN_DRAG_THRESHOLD = 35),
      Object(o.b)([s.bind], q.prototype, "onButtonMouseDown", null),
      Object(o.b)([s.bind], q.prototype, "onWindowMouseMove", null),
      Object(o.b)([s.bind], q.prototype, "onWindowMouseUp", null),
      (q = r = Object(o.b)([b.a], q));
    const Q = (e) => {
      const t = a.useRef();
      return a.createElement(
        c.a,
        {
          className: Object(u.a)(
            "ButtonControl",
            ["Active", e.active],
            ["WithIcon", !!e.iconUrl],
            e.additionalClassNames
          ),
          onClick: e.onClick,
          onMouseEnter: () => {
            var n;
            null === (n = t.current) || void 0 === n || n.show(),
              e.onMouseEnter && e.onMouseEnter();
          },
          onMouseLeave: () => {
            var n;
            null === (n = t.current) || void 0 === n || n.hide(),
              e.onMouseLeave && e.onMouseLeave();
          },
          enabled: e.enabled,
        },
        e.title && a.createElement(x, { text: e.title, ref: t }),
        e.label && a.createElement("span", null, e.label),
        e.iconUrl &&
          a.createElement("img", {
            className: "Icon BlackToWhite",
            src: e.iconUrl,
          })
      );
    };
  },
  ptmX: function (e, t, n) {
    "use strict";
    n.r(t);
    var i,
      r = n("mrSG"),
      o = n("q1tI"),
      a = n("i8i4"),
      s = n("7wIv"),
      l = n("/i/y");
    !(function (e) {
      (e[(e.FindFloor_Touch = 0)] = "FindFloor_Touch"),
        (e[(e.FindFloor_Height = 1)] = "FindFloor_Height"),
        (e[(e.Room_Walls = 2)] = "Room_Walls"),
        (e[(e.SaveSuccessful = 3)] = "SaveSuccessful"),
        (e[(e.SaveFailed = 4)] = "SaveFailed");
    })(i || (i = {}));
    class c extends o.Component {
      constructor(e) {
        if ((super(e), !VRHTML)) throw new Error("VRHTML is required.");
        (this.state = {
          phase: i.FindFloor_Touch,
          qRawFromRoom: { w: 1, x: 0, y: 0, z: 0 },
          qRoomFromRaw: { w: 1, x: 0, y: 0, z: 0 },
          vMin: { x: 0, y: 0, z: 0 },
          vMax: { x: 0, y: 0, z: 0 },
          vStartingHmdPosition: { x: 0, y: 0, z: 0 },
          fUserHeight: 196,
        }),
          (this.animationFrameHandle = window.requestAnimationFrame(
            this.onAnimationFrame
          ));
      }
      componentDidMount() {
        this.computeDirectionFromHeadset(), this.resetBoundsToDefault(!0);
      }
      componentWillUnmount() {
        var e, t, n;
        window.cancelAnimationFrame(this.animationFrameHandle),
          null === (e = VRHTML) ||
            void 0 === e ||
            e.VRChaperone.ForceBoundsVisible(!1),
          null === (t = VRHTML) ||
            void 0 === t ||
            t.VRChaperoneSetup.HideWorkingSetPreview(),
          null === (n = VRHTML) ||
            void 0 === n ||
            n.VRChaperoneSetup.RevertWorkingCopy();
      }
      updateLimitsUsingDevice(e) {
        let t = null;
        try {
          t = VRHTML.GetPose(e, l.A.RawAndUncalibrated);
        } catch (e) {
          return;
        }
        if (!t.bPoseIsValid) return;
        let n = t.xfDeviceToAbsoluteTracking,
          r = Object(l.T)(this.state.qRoomFromRaw, n.translation);
        switch (this.state.phase) {
          case i.FindFloor_Touch:
            r.y < this.state.vMin.y &&
              this.setState({
                vMin: { x: this.state.vMin.x, y: r.y, z: this.state.vMin.z },
              }),
              r.y > this.state.vMax.y &&
                this.setState({
                  vMax: { x: this.state.vMax.x, y: r.y, z: this.state.vMax.z },
                });
            break;
          case i.Room_Walls:
            r.x < this.state.vMin.x &&
              this.setState({
                vMin: { x: r.x, y: this.state.vMin.y, z: this.state.vMin.z },
              }),
              r.x > this.state.vMax.x &&
                this.setState({
                  vMax: { x: r.x, y: this.state.vMax.y, z: this.state.vMax.z },
                }),
              r.z < this.state.vMin.z &&
                this.setState({
                  vMin: { x: this.state.vMin.x, y: this.state.vMin.y, z: r.z },
                }),
              r.z > this.state.vMax.z &&
                this.setState({
                  vMax: { x: this.state.vMax.x, y: this.state.vMax.y, z: r.z },
                });
        }
      }
      onAnimationFrame() {
        if (VRHTML) {
          switch (this.state.phase) {
            case i.FindFloor_Touch:
            case i.Room_Walls:
              this.updateLimitsUsingDevice("/user/head"),
                this.updateLimitsUsingDevice("/user/hand/right"),
                this.updateLimitsUsingDevice("/user/hand/left");
          }
          this.animationFrameHandle = window.requestAnimationFrame(
            this.onAnimationFrame
          );
        }
      }
      componentDidUpdate() {
        this.updatePreview();
      }
      updatePreview() {
        if (!VRHTML) return;
        let e = this.state.vMax.x - this.state.vMin.x,
          t = this.state.vMax.z - this.state.vMin.z;
        VRHTML.VRChaperoneSetup.SetWorkingPlayAreaSize(e, t);
        let n = Object(l.V)(Object(l.a)(this.state.vMin, this.state.vMax), 0.5),
          i = { x: n.x, y: this.state.vMin.y, z: n.z },
          r = Object(l.g)();
        (r.rotation = this.state.qRawFromRoom),
          (r.translation = Object(l.T)(this.state.qRawFromRoom, i)),
          VRHTML.VRChaperoneSetup.SetWorkingStandingZeroPoseToRawTrackingPose(
            r
          );
        let o = [];
        o.push({ x: -e / 2, y: -t / 2 }),
          o.push({ x: e / 2, y: -t / 2 }),
          o.push({ x: e / 2, y: t / 2 }),
          o.push({ x: -e / 2, y: t / 2 }),
          VRHTML.VRChaperoneSetup.SetWorkingPerimeter(o),
          VRHTML.VRChaperoneSetup.ShowWorkingSetPreview();
      }
      computeDirectionFromHeadset() {
        if (!VRHTML) return;
        let e = VRHTML.GetPose("/user/head", l.A.RawAndUncalibrated),
          t = Object(l.J)(e.xfDeviceToAbsoluteTracking);
        (t.y = 0), (t = Object(l.W)(t));
        let n = Math.atan2(t.x, t.z),
          i = Object(l.I)({ x: 0, y: n, z: 0 }),
          r = Object(l.L)(i),
          o = Object(l.T)(r, e.xfDeviceToAbsoluteTracking.translation);
        this.setState({
          qRawFromRoom: i,
          qRoomFromRaw: r,
          vStartingHmdPosition: o,
        });
      }
      resetBoundsToDefault(e) {
        if (!VRHTML) return;
        let t = 1,
          n = 1;
        e || ((t = 1.5), (n = 1.1));
        let i = VRHTML.GetPose("/user/head", l.A.RawAndUncalibrated),
          r = Object(l.T)(
            this.state.qRoomFromRaw,
            i.xfDeviceToAbsoluteTracking.translation
          ),
          o = Object(l.a)(r, { x: -t / 2, y: 0, z: -n / 2 }),
          a = Object(l.a)(r, { x: t / 2, y: 0, z: n / 2 });
        (o.y = this.state.vMin.y),
          (a.y = this.state.vMax.y),
          this.setState({ vMin: o, vMax: a, vStartingHmdPosition: r });
      }
      resetWalls() {
        this.resetBoundsToDefault(this.state.phase == i.Room_Walls);
      }
      resetFloorToDefault() {
        if (!VRHTML) return;
        let e = VRHTML.GetPose("/user/head", l.A.RawAndUncalibrated),
          t = Object(l.T)(
            this.state.qRoomFromRaw,
            e.xfDeviceToAbsoluteTracking.translation
          ),
          n = this.state.vMin;
        n.y = t.y - 1;
        let i = this.state.vMax;
        (i.y = t.y + 0.5),
          this.setState({ vMin: n, vMax: i, vStartingHmdPosition: t });
      }
      onSkipWalls() {
        this.resetBoundsToDefault(!0),
          this.setState({}, () => {
            this.saveSetup();
          });
      }
      restartSetup() {
        VRHTML.VRChaperoneSetup.RevertWorkingCopy(),
          this.setState({ phase: i.FindFloor_Touch });
      }
      onFindFloorFromHeight() {
        this.resetFloorToDefault(),
          this.setState({ phase: i.FindFloor_Height });
      }
      onFindFloorFromTouch() {
        this.resetFloorToDefault(), this.setState({ phase: i.FindFloor_Touch });
      }
      onConfirmFloor() {
        this.computeDirectionFromHeadset(),
          this.resetBoundsToDefault(!1),
          this.updatePreview(),
          this.setState({ phase: i.Room_Walls });
      }
      confirmWalls() {
        this.saveSetup();
      }
      onConfirmHeight() {
        let e = null;
        try {
          e = VRHTML.GetPose("/user/head", l.A.RawAndUncalibrated);
        } catch (e) {
          return void this.setState({ phase: i.Room_Walls });
        }
        if (!e.bPoseIsValid) return void this.setState({ phase: i.Room_Walls });
        let t = e.xfDeviceToAbsoluteTracking.translation;
        this.computeDirectionFromHeadset(),
          this.setState({
            phase: i.Room_Walls,
            vMin: {
              x: this.state.vMin.x,
              y: t.y + 0.08 - this.state.fUserHeight / 100,
              z: this.state.vMin.z,
            },
          });
      }
      saveSetup() {
        var e, t;
        VRHTML.VRChaperoneSetup.CommitWorkingCopy()
          ? this.setState({ phase: i.SaveSuccessful })
          : this.setState({ phase: i.SaveFailed }),
          null === (e = VRHTML) ||
            void 0 === e ||
            e.VRChaperone.ForceBoundsVisible(!1),
          null === (t = VRHTML) ||
            void 0 === t ||
            t.VRChaperoneSetup.HideWorkingSetPreview();
      }
      onSliderChange(e) {
        let t = parseFloat(e.target.value);
        this.setState({ fUserHeight: t });
      }
      onSetRoomNow() {
        this.setState({ phase: i.Room_Walls });
      }
      onSetRoomLater() {
        this.saveSetup();
      }
      renderMainUI() {
        let e = this.state.fUserHeight / 2.54,
          t = Math.floor(e / 12),
          n = Math.round(e - 12 * t);
        switch (this.state.phase) {
          case i.FindFloor_Touch:
            return o.createElement(
              l.Y,
              { width: 1, interactive: !0 },
              o.createElement(
                "div",
                { className: "FlexColumn panel RoomSetupControls" },
                o.createElement(
                  "div",
                  { className: "RoomSetupText" },
                  "Hello there! To give you the best Virtual Reality experience (and keep you safe) we need to know a few things about your room."
                ),
                o.createElement(
                  "div",
                  { className: "RoomSetupText" },
                  'Let\'s start with where your floor is. Please touch the floor with one of your controllers and click "Done".'
                ),
                o.createElement(
                  "div",
                  { className: "RoomSetupText" },
                  'If would rather estimate the floor\'s position from your own height, you can click the "use my height" button below to do that instead.'
                ),
                o.createElement(
                  "div",
                  { className: "FlexRow" },
                  o.createElement(
                    "div",
                    {
                      className: "Label ButtonControl",
                      onClick: this.onConfirmFloor,
                    },
                    "Done"
                  ),
                  o.createElement(
                    "div",
                    {
                      className: "Label ButtonControl",
                      onClick: this.onFindFloorFromHeight,
                    },
                    "Let me tell you how tall I am"
                  )
                ),
                o.createElement(
                  "div",
                  {
                    className: "Label ButtonControl",
                    onClick: this.props.returnToMenu,
                  },
                  "Exit"
                )
              )
            );
          case i.FindFloor_Height:
            return o.createElement(
              l.Y,
              { width: 1, interactive: !0 },
              o.createElement(
                "div",
                { className: "FlexColumn panel RoomSetupControls" },
                o.createElement(
                  "div",
                  { className: "RoomSetupText" },
                  "Maybe your VR system can't see your floor? Or maybe you just don't want to touch the floor with your controller. No problem, we can figure it out if you tell us how tall you are. "
                ),
                o.createElement(
                  "div",
                  { className: "RoomSetupText" },
                  'Please select your height using the slider below, stand up straight, and click "Done" when you\'re finished.'
                ),
                o.createElement(
                  "div",
                  { className: "RoomSetupText" },
                  "Height: ",
                  this.state.fUserHeight,
                  " cm (",
                  t,
                  "ft ",
                  n,
                  "in)"
                ),
                o.createElement(
                  "div",
                  { className: "FlexColumn HeightSlider" },
                  o.createElement("input", {
                    type: "range",
                    min: 100,
                    max: 250,
                    step: 1,
                    value: this.state.fUserHeight,
                    onChange: this.onSliderChange,
                  })
                ),
                o.createElement(
                  "div",
                  { className: "FlexRow" },
                  o.createElement(
                    "div",
                    {
                      className: "Label ButtonControl",
                      onClick: this.onConfirmHeight,
                    },
                    "Done"
                  ),
                  o.createElement(
                    "div",
                    {
                      className: "Label ButtonControl",
                      onClick: this.onFindFloorFromTouch,
                    },
                    "Let me touch the floor instead"
                  )
                ),
                o.createElement(
                  "div",
                  {
                    className: "Label ButtonControl",
                    onClick: this.props.returnToMenu,
                  },
                  "Exit"
                )
              )
            );
          case i.Room_Walls:
            return o.createElement(
              l.Y,
              { width: 1, interactive: !0 },
              o.createElement(
                "div",
                { className: "FlexColumn panel RoomSetupControls" },
                o.createElement(
                  "div",
                  { className: "RoomSetupText" },
                  "Please reach out with your controllers to stretch the room to include your clear space."
                ),
                o.createElement(
                  "div",
                  { className: "FlexRow" },
                  o.createElement(
                    "div",
                    {
                      className: "Label ButtonControl",
                      onClick: this.computeDirectionFromHeadset,
                    },
                    "Set Forward Direction"
                  ),
                  o.createElement(
                    "div",
                    {
                      className: "Label ButtonControl",
                      onClick: this.resetWalls,
                    },
                    "Reset Walls"
                  ),
                  o.createElement(
                    "div",
                    {
                      className: "Label ButtonControl",
                      onClick: this.confirmWalls,
                    },
                    "Done"
                  )
                ),
                o.createElement(
                  "div",
                  { className: "FlexRow" },
                  o.createElement(
                    "div",
                    {
                      className: "Label ButtonControl",
                      onClick: this.onSkipWalls,
                    },
                    "Skip"
                  ),
                  o.createElement(
                    "div",
                    {
                      className: "Label ButtonControl",
                      onClick: this.onFindFloorFromTouch,
                    },
                    "Back"
                  ),
                  o.createElement(
                    "div",
                    {
                      className: "Label ButtonControl",
                      onClick: this.props.returnToMenu,
                    },
                    "Exit"
                  )
                )
              )
            );
          case i.SaveSuccessful:
            return o.createElement(
              l.Y,
              { width: 1, interactive: !0 },
              o.createElement(
                "div",
                { className: "FlexColumn panel RoomSetupControls" },
                o.createElement(
                  "div",
                  { className: "RoomSetupText" },
                  "Your new room setup has been saved."
                ),
                o.createElement(
                  "div",
                  {
                    className: "Label ButtonControl",
                    onClick: this.props.returnToMenu,
                  },
                  "Exit"
                )
              )
            );
          case i.SaveFailed:
            return o.createElement(
              l.Y,
              { width: 1, interactive: !0 },
              o.createElement(
                "div",
                { className: "FlexColumn panel RoomSetupControls" },
                o.createElement(
                  "div",
                  { className: "RoomSetupText" },
                  "Your new room setup could not be saved for some reason. Maybe your hard drive is full?"
                ),
                o.createElement(
                  "div",
                  {
                    className: "Label ButtonControl",
                    onClick: this.props.returnToMenu,
                  },
                  "Exit"
                )
              )
            );
        }
        return null;
      }
      render() {
        return o.createElement(
          l.lb,
          { parent_path: "/user/head" },
          o.createElement(
            l.G,
            {
              start_angle_threshold: 40,
              stop_angle_threshold: 17,
              ease_out_angle_threshold: 90,
              min_angular_velocity: 105,
              ease_in_power: 1.5,
            },
            o.createElement(
              l.lb,
              { translation: { z: -1 } },
              this.renderMainUI()
            )
          )
        );
      }
    }
    Object(r.b)([s.bind], c.prototype, "onAnimationFrame", null),
      Object(r.b)([s.bind], c.prototype, "updatePreview", null),
      Object(r.b)([s.bind], c.prototype, "computeDirectionFromHeadset", null),
      Object(r.b)([s.bind], c.prototype, "resetWalls", null),
      Object(r.b)([s.bind], c.prototype, "resetFloorToDefault", null),
      Object(r.b)([s.bind], c.prototype, "onSkipWalls", null),
      Object(r.b)([s.bind], c.prototype, "restartSetup", null),
      Object(r.b)([s.bind], c.prototype, "onFindFloorFromHeight", null),
      Object(r.b)([s.bind], c.prototype, "onFindFloorFromTouch", null),
      Object(r.b)([s.bind], c.prototype, "onConfirmFloor", null),
      Object(r.b)([s.bind], c.prototype, "confirmWalls", null),
      Object(r.b)([s.bind], c.prototype, "onConfirmHeight", null),
      Object(r.b)([s.bind], c.prototype, "saveSetup", null),
      Object(r.b)([s.bind], c.prototype, "onSliderChange", null),
      Object(r.b)([s.bind], c.prototype, "onSetRoomNow", null),
      Object(r.b)([s.bind], c.prototype, "onSetRoomLater", null);
    var d = n("Gmup"),
      u = n("Q+Z6"),
      h = n("sI3t"),
      p = n.n(h);
    class m extends o.Component {
      constructor(e) {
        super(e),
          (this.m_deviceEventHandle = null),
          (this.m_progressIndicatorEventHandle = null);
        let t = {
          sIconPath: "",
          sDevicePath: "",
          sInputPath: "",
          sCurrentAction: void 0,
          flProgress: 0,
        };
        this.state = t;
      }
      componentDidMount() {
        VRHTML
          ? ((this.m_progressIndicatorEventHandle =
              VRHTML.RegisterForProgressIndicatorEvents(
                this.ProgressIndicatorEvent
              )),
            (this.m_deviceEventHandle = VRHTML.RegisterForDeviceEvents(
              this.DeviceEvent
            )))
          : this.setState({
              sCurrentAction: "/actions/foo/bar",
              flProgress: 0.63,
            });
      }
      componentWillUnmount() {
        this.m_progressIndicatorEventHandle &&
          this.m_progressIndicatorEventHandle.unregister(),
          this.m_deviceEventHandle && this.m_deviceEventHandle.unregister();
      }
      ProgressIndicatorEvent(e, t, n, i, r) {
        let o = this.state;
        null == o.sCurrentAction &&
          0 != e &&
          ((o.sCurrentAction = r), (o.sDevicePath = n), (o.sInputPath = i)),
          o.sCurrentAction == r &&
            (0 == e
              ? ((o.sCurrentAction = void 0), (o.flProgress = 0))
              : (o.flProgress = e)),
          this.setState(o);
      }
      DeviceEvent(e, t, n) {
        e == l.m.Deactivated &&
          t == this.state.sDevicePath &&
          this.setState({ sCurrentAction: null, flProgress: 0 });
      }
      render() {
        if (!this.state.sCurrentAction || this.state.flProgress < 0.25)
          return null;
        {
          let e = { x: -0.05, y: 0.06, z: 0.02 };
          "/user/hand/left" == this.state.sDevicePath && (e.x = -e.x);
          let t = 0.05;
          "/user/head" == this.state.sDevicePath && (t = 0.15);
          let n = (100 * (this.state.flProgress - 0.25) * 4) / 3,
            i = o.createElement(
              l.Y,
              { width: t },
              o.createElement(
                "div",
                { className: "ProgressContainer" },
                o.createElement(p.a, {
                  background: !0,
                  backgroundPadding: 2,
                  percentage: n,
                }),
                o.createElement("img", {
                  src: "/shared/images/steam_logo.svg",
                  className: "ProgressIcon",
                })
              )
            );
          return "/user/head" == this.state.sDevicePath
            ? o.createElement(
                l.lb,
                { parent_path: "/user/head" },
                o.createElement(
                  l.lb,
                  { translation: { z: -1.2, y: -0.5 } },
                  o.createElement(l.K, null, i)
                )
              )
            : o.createElement(
                "div",
                null,
                o.createElement(
                  l.e,
                  {
                    id: "progress_component",
                    sDevicePath: this.state.sDevicePath,
                    sInputPath: this.state.sInputPath,
                  },
                  o.createElement(
                    l.d,
                    { vOffset: e },
                    o.createElement(
                      l.bb,
                      {
                        fOffscreenZDepth: -0.3,
                        fOffAxisLimit: 21,
                        fTransitionLimit: 1,
                      },
                      o.createElement(l.P, {
                        target_id: "progress_component",
                        thickness: 0.002,
                        start_buffer: 0.03,
                        end_buffer: 0.01,
                      }),
                      o.createElement(l.K, null, i)
                    )
                  )
                )
              );
        }
      }
    }
    Object(r.b)([s.bind], m.prototype, "ProgressIndicatorEvent", null),
      Object(r.b)([s.bind], m.prototype, "DeviceEvent", null);
    var v,
      b = n("GXif"),
      g = n("okNM");
    function _(e, t, n, i, r) {
      return t == n ? 0 : ((e - t) / (n - t)) * (r - i) + i;
    }
    let y = (v = class extends o.Component {
      constructor(e) {
        var t, n, i;
        super(e),
          (this.m_fadeStartTimeout = void 0),
          (this.m_fadeFinishTimeout = void 0);
        const r =
          1e3 *
          (null !=
          (n =
            null === (t = l.mb) || void 0 === t
              ? void 0
              : t.VRProperties.GetFloatProperty(l.ob, l.y.UserIpdMeters_Float))
            ? n
            : 0.065);
        (this.state = { ipdValue: r, visible: !1, fading: !1 }),
          null === (i = l.mb) ||
            void 0 === i ||
            i.RegisterForIPDEvents(this.IPDChanged),
          u.d.Init(!1);
      }
      StartFade() {
        clearTimeout(this.m_fadeStartTimeout),
          (this.m_fadeStartTimeout = 0),
          clearTimeout(this.m_fadeFinishTimeout),
          (this.m_fadeFinishTimeout = setTimeout(
            this.HideOverlay,
            v.kFadeDurationMs
          )),
          this.setState({ fading: !0 });
      }
      HideOverlay() {
        this.setState({ visible: !1 });
      }
      IPDChanged(e) {
        clearTimeout(this.m_fadeStartTimeout),
          (this.m_fadeStartTimeout = setTimeout(
            this.StartFade,
            v.kFadeDelayMs
          )),
          clearTimeout(this.m_fadeFinishTimeout),
          (this.m_fadeFinishTimeout = 0),
          this.setState({
            ipdValue: 1e3 * (null != e ? e : 0.065),
            visible: !0,
            fading: !1,
          });
      }
      ipdLensSpacer() {
        return o.createElement("div", {
          className: "IPDLensSpacer",
          style: { minWidth: "32px" },
        });
      }
      render() {
        var e, t, n, i, r, a;
        if (!this.state.visible) return null;
        let s = ["IPDParent"];
        this.state.fading && s.push("Fading");
        const c =
            0.9 *
            (null !=
            (t =
              null === (e = l.mb) || void 0 === e
                ? void 0
                : e.VRProperties.GetFloatProperty(
                    l.ob,
                    l.y.DashboardScale_Float
                  ))
              ? t
              : 1),
          d =
            1e3 *
            (null !=
            (i =
              null === (n = l.mb) || void 0 === n
                ? void 0
                : n.VRProperties.GetFloatProperty(
                    l.ob,
                    l.y.IpdUIRangeMinMeters_Float
                  ))
              ? i
              : 0.058),
          u =
            1e3 *
            (null !=
            (a =
              null === (r = l.mb) || void 0 === r
                ? void 0
                : r.VRProperties.GetFloatProperty(
                    l.ob,
                    l.y.IpdUIRangeMaxMeters_Float
                  ))
              ? a
              : 0.07),
          h = (function (e, t, n, i, r) {
            if (
              !(
                isFinite(e) &&
                isFinite(t) &&
                isFinite(n) &&
                isFinite(i) &&
                isFinite(r)
              )
            )
              return null;
            const a = [],
              s = t / 25,
              l = 10 * s,
              c = l - 5 * s,
              d = l - 10 * s,
              u = l + 10 * s,
              h = l + 5 * s;
            for (let t = i; t <= r; t += 0.5) {
              const n = _(t, i, r, 10, e - 10);
              a.push(
                o.createElement("circle", {
                  key: "pip" + t,
                  cx: n,
                  cy: l,
                  r: "0.75",
                  stroke: "none",
                  fill: "rgb(128,128,128)",
                })
              );
            }
            for (let t = i; t <= r; t += 2) {
              const n = _(t, i, r, 10, e - 10);
              a.push(
                o.createElement("line", {
                  key: "line" + t,
                  x1: n,
                  y1: l,
                  x2: n,
                  y2: c,
                  style: { stroke: "rgb(96,96,96)", strokeWidth: 2 },
                })
              );
            }
            {
              let t = _(64, i, r, 10, e - 10);
              a.push(
                o.createElement("line", {
                  key: "centraltick",
                  x1: t,
                  y1: l,
                  x2: t,
                  y2: d,
                  style: { stroke: "rgb(164,164,164)", strokeWidth: 2 },
                })
              );
            }
            {
              let t = _(n - 0.5, i, r, 10, e - 10),
                s = _(n + 0.5, i, r, 10, e - 10),
                l =
                  t +
                  "," +
                  u +
                  " " +
                  s +
                  "," +
                  u +
                  " " +
                  0.5 * (t + s) +
                  "," +
                  h;
              a.push(
                o.createElement("polygon", {
                  key: "triangle",
                  points: l,
                  style: {
                    stroke: "rgb(128,128,128)",
                    strokeWidth: 1.5,
                    fill: "rgb(30,30,30)",
                  },
                })
              );
            }
            return o.createElement(
              "svg",
              { width: e, height: t, viewBox: [0, 0, e, t].join(" ") },
              a
            );
          })(240, 50, this.state.ipdValue, d, u);
        return o.createElement(
          l.lb,
          { parent_path: "/user/head" },
          o.createElement(
            l.lb,
            {
              translation: { y: -0.3, z: -0.87 },
              rotation: { x: -28 },
              scale: c,
            },
            o.createElement(
              l.Y,
              {
                width: void 0,
                height: v.kPanelHeight,
                interactive: !1,
                sort_order: 1e3,
              },
              o.createElement(
                "div",
                { className: s.join(" "), style: { width: v.kPixelWidth } },
                o.createElement(
                  "div",
                  { className: "FlexColumn" },
                  o.createElement(
                    "div",
                    { className: "IPDNumberRow" },
                    o.createElement(
                      "div",
                      { className: "IPDNumberText" },
                      this.state.ipdValue.toFixed(1)
                    ),
                    o.createElement("div", { className: "IPDLabelText" }, "mm")
                  ),
                  o.createElement(
                    "div",
                    { className: "IPDSettingTextDesc" },
                    Object(b.c)("#IPD_Description")
                  ),
                  o.createElement(
                    "div",
                    { className: "IPDLensRow" },
                    o.createElement(
                      "div",
                      { className: "IPDLens FlipImageHorizontal" },
                      " ",
                      h,
                      " "
                    ),
                    this.ipdLensSpacer(),
                    o.createElement(
                      "div",
                      { className: "IPDLens" },
                      " ",
                      h,
                      " "
                    )
                  )
                )
              )
            )
          )
        );
      }
    });
    (y.kPanelHeight = 0.2),
      (y.kPixelWidth = 600),
      (y.kFadeDelayMs = 1e3),
      (y.kFadeDurationMs = 1e3),
      Object(r.b)([s.bind], y.prototype, "StartFade", null),
      Object(r.b)([s.bind], y.prototype, "HideOverlay", null),
      Object(r.b)([s.bind], y.prototype, "IPDChanged", null),
      (y = v = Object(r.b)([g.a], y));
    var S,
      f,
      k = n("YRJX");
    !(function (e) {
      (e[(e.Opaque = 0)] = "Opaque"),
        (e[(e.FadingIn = 1)] = "FadingIn"),
        (e[(e.FadingOut = 2)] = "FadingOut");
    })(f || (f = {}));
    let C = (S = class extends o.Component {
      constructor(e) {
        super(e),
          (this.m_hideTimeout = void 0),
          (this.m_fadeTimeout = void 0),
          (this.m_unresponsiveTimeout = void 0),
          (this.m_sceneApplicationStateChangedEventHandle = null),
          (this.m_mountedTime = void 0),
          (this.state = {
            visible: !1,
            opacity: f.Opaque,
            latchedAppName: "",
            latchedAppKey: "",
            latchedSceneApplicationState: null,
            alreadyHidDashboard: !1,
          }),
          u.d.Init(!1);
      }
      componentDidMount() {
        var e;
        (this.m_sceneApplicationStateChangedEventHandle =
          null === (e = l.mb) || void 0 === e
            ? void 0
            : e.RegisterForSceneApplicationStateChangedEvents(
                this.onSceneApplicationStateChanged
              )),
          (this.m_mountedTime = new Date().getTime()),
          this.updateTransitionState();
      }
      log(e) {
        let t = (new Date().getTime() - this.m_mountedTime) / 1e3;
        console.log("[transition] " + t + " " + e);
      }
      componentWillUnmount() {
        this.m_unresponsiveTimeout &&
          (clearTimeout(this.m_unresponsiveTimeout),
          (this.m_unresponsiveTimeout = void 0)),
          this.m_fadeTimeout &&
            (clearTimeout(this.m_fadeTimeout), (this.m_fadeTimeout = void 0)),
          this.m_hideTimeout &&
            (clearTimeout(this.m_hideTimeout), (this.m_hideTimeout = void 0)),
          this.m_sceneApplicationStateChangedEventHandle &&
            (this.m_sceneApplicationStateChangedEventHandle.unregister(),
            (this.m_sceneApplicationStateChangedEventHandle = null));
      }
      maybeHideDashboard(e) {
        if (this.state.alreadyHidDashboard) return;
        const t = l.mb.VRApplications.GetStartingApplicationKey();
        t &&
          t != S.k_sHomeAppKey &&
          (l.mb.VRDashboardManager.HideDashboard(e),
          this.setState({ alreadyHidDashboard: !0 }));
      }
      updateTransitionState() {
        if (!l.mb) return;
        let e = l.mb.VRApplications.GetSceneApplicationState();
        e == l.v.Starting
          ? (this.state.latchedSceneApplicationState == l.v.Quitting &&
              this.resetLatchedValued(),
            this.setState({ latchedSceneApplicationState: e }),
            this.updateLatchedValues(),
            this.show(!1),
            this.cancelUnresponsiveTimeout(),
            this.maybeHideDashboard("transition_app_starting"))
          : e == l.v.Quitting
          ? (this.state.latchedSceneApplicationState == l.v.Starting &&
              this.resetLatchedValued(),
            this.setState({ latchedSceneApplicationState: e }),
            this.updateLatchedValues(),
            this.show(!1),
            this.cancelUnresponsiveTimeout(),
            this.maybeHideDashboard("transition_app_quitting"))
          : e == l.v.Running
          ? (this.cancelUnresponsiveTimeout(),
            this.state.visible && this.startFadeOut())
          : e == l.v.None
          ? (this.cancelUnresponsiveTimeout(),
            this.state.visible && this.hideSoon())
          : e == l.v.Waiting &&
            (this.state.visible
              ? (this.cancelUnresponsiveTimeout(), this.show(!0))
              : this.startUnresponsiveTimer());
      }
      startUnresponsiveTimer() {
        null == this.m_unresponsiveTimeout &&
          (this.m_unresponsiveTimeout = setTimeout(
            this.onUnresponsiveTimeout,
            S.kUnresponsiveDelayMs
          ));
      }
      cancelUnresponsiveTimeout() {
        this.m_unresponsiveTimeout &&
          (clearTimeout(this.m_unresponsiveTimeout),
          (this.m_unresponsiveTimeout = void 0));
      }
      onUnresponsiveTimeout() {
        clearTimeout(this.m_unresponsiveTimeout),
          (this.m_unresponsiveTimeout = void 0),
          this.setState({ latchedSceneApplicationState: l.v.Waiting }),
          this.show(!0),
          this.updateLatchedValues();
      }
      updateLatchedValues() {
        if (l.mb)
          if (l.mb.VRApplications.GetSceneApplicationState() == l.v.Starting) {
            let e = l.mb.VRApplications.GetStartingApplicationKey();
            e && e.length > 0 && this.setState({ latchedAppKey: e });
            let t = l.mb.GetStartingAppName();
            t && t.length > 0 && this.setState({ latchedAppName: t });
          } else {
            let e = l.mb.VRApplications.GetSceneApplicationKey();
            e && e.length > 0 && this.setState({ latchedAppKey: e });
            let t = l.mb.GetCurrentSceneFocusAppName();
            t && t.length > 0 && this.setState({ latchedAppName: t });
          }
      }
      onSceneApplicationStateChanged() {
        this.updateTransitionState();
      }
      show(e) {
        this.cancelFadeOutTimers(),
          e
            ? this.state.visible ||
              this.setState({ visible: !0, opacity: f.FadingIn })
            : this.setState({ visible: !0, opacity: f.Opaque });
      }
      cancelFadeOutTimers() {
        this.m_fadeTimeout && clearTimeout(this.m_fadeTimeout),
          this.m_hideTimeout && clearTimeout(this.m_hideTimeout),
          (this.m_fadeTimeout = 0),
          (this.m_hideTimeout = 0);
      }
      hideSoon() {
        this.m_hideTimeout ||
          this.m_fadeTimeout ||
          (this.m_fadeTimeout = setTimeout(this.startFadeOut, S.kHideDelayMs));
      }
      startFadeOut() {
        this.m_fadeTimeout &&
          (clearTimeout(this.m_fadeTimeout), (this.m_fadeTimeout = 0)),
          this.setState({ opacity: f.FadingOut }),
          (this.m_hideTimeout = setTimeout(
            this.hideAndResetLatchedValues,
            S.kFadeoutTimeMs
          ));
      }
      resetLatchedValued() {
        this.setState({
          latchedAppName: "",
          latchedAppKey: "",
          latchedSceneApplicationState: null,
        });
      }
      hideAndResetLatchedValues() {
        this.cancelFadeOutTimers(),
          this.resetLatchedValued(),
          this.setState({
            visible: !1,
            opacity: f.Opaque,
            alreadyHidDashboard: !1,
          });
      }
      render() {
        if (!this.state.visible) return null;
        if (
          !this.props.dashboardRef.current ||
          this.props.dashboardRef.current.isShown()
        )
          return null;
        let e = "",
          t = "";
        if (
          this.state.latchedAppKey &&
          this.state.latchedAppKey.length > 0 &&
          !this.state.latchedAppKey.includes("system.generated")
        )
          e = "/app/image?app_key=" + this.state.latchedAppKey;
        else {
          let n = 8;
          if (
            ((e =
              "images/dynamictitle.000" +
              (Math.abs(
                (function (e) {
                  let t = 0,
                    n = 0;
                  for (; t < e.length; t++)
                    n = (Math.imul(31, n) + e.charCodeAt(t)) | 0;
                  return n;
                })(this.state.latchedAppKey)
              ) %
                n) +
              ".png"),
            (t = this.state.latchedAppName),
            !t)
          )
            return null;
        }
        let n = this.state.latchedAppKey === S.k_sHomeAppKey,
          i = !1,
          r = "";
        switch (this.state.latchedSceneApplicationState) {
          case l.v.Quitting:
            r = Object(b.c)("#Now_Quitting");
            break;
          case l.v.Starting:
            r = Object(b.c)(n ? "" : "#Now_Starting");
            break;
          case l.v.Waiting:
            (r = Object(b.c)("#Now_Waiting")), (i = !0);
        }
        let a = r.length > 0,
          s = ["TransitionAppImage"],
          c = ["TransitionAppLabels"],
          u = ["TransitionAppSpinner"];
        this.state.opacity == f.FadingIn
          ? (s.push("FadingIn"), c.push("FadingIn"), u.push("FadingIn"))
          : this.state.opacity == f.FadingOut &&
            (s.push("FadingOut"), c.push("FadingOut"), u.push("FadingOut")),
          i && s.push("Waiting");
        let h = null;
        e.includes("revive.app") && (h = 310);
        const p = d.a.getDashboardDistance();
        return o.createElement(
          l.k,
          null,
          o.createElement(
            l.lb,
            { translation: { y: -0.1125, z: -p }, scale: 0.244 },
            o.createElement(
              l.Y,
              {
                width: 1.5,
                height: void 0,
                interactive: !1,
                origin: l.s.BottomCenter,
                reflect: 0.05,
              },
              o.createElement(
                "div",
                {
                  className: s.join(" "),
                  style: {
                    backgroundImage: e ? "url('" + e + "')" : null,
                    height: h,
                  },
                },
                " ",
                t,
                " "
              )
            ),
            a &&
              o.createElement(
                l.lb,
                { translation: { y: 0.08, z: -0.08 } },
                o.createElement(
                  l.Y,
                  {
                    width: 1.275,
                    height: void 0,
                    interactive: !1,
                    origin: l.s.TopCenter,
                  },
                  o.createElement(
                    "div",
                    { className: c.join(" ") },
                    o.createElement("div", { className: "AppStatus" }, r)
                  )
                )
              ),
            i &&
              o.createElement(
                l.lb,
                { translation: { y: 0.35, z: 0.05 } },
                o.createElement(
                  l.Y,
                  { width: 1.5 * 0.1, height: void 0, interactive: !1 },
                  o.createElement(
                    "div",
                    { className: u.join(" ") },
                    o.createElement(k.a, null)
                  )
                )
              )
          )
        );
      }
    });
    (C.k_sHomeAppKey = "openvr.tool.steamvr_environments"),
      (C.kHideDelayMs = 5e3),
      (C.kUnresponsiveDelayMs = 2e3),
      (C.kFadeoutTimeMs = 550),
      Object(r.b)([s.bind], C.prototype, "startUnresponsiveTimer", null),
      Object(r.b)([s.bind], C.prototype, "cancelUnresponsiveTimeout", null),
      Object(r.b)([s.bind], C.prototype, "onUnresponsiveTimeout", null),
      Object(r.b)([s.bind], C.prototype, "updateLatchedValues", null),
      Object(r.b)(
        [s.bind],
        C.prototype,
        "onSceneApplicationStateChanged",
        null
      ),
      Object(r.b)([s.bind], C.prototype, "show", null),
      Object(r.b)([s.bind], C.prototype, "cancelFadeOutTimers", null),
      Object(r.b)([s.bind], C.prototype, "hideSoon", null),
      Object(r.b)([s.bind], C.prototype, "startFadeOut", null),
      Object(r.b)([s.bind], C.prototype, "resetLatchedValued", null),
      Object(r.b)([s.bind], C.prototype, "hideAndResetLatchedValues", null),
      (C = S = Object(r.b)([g.a], C));
    class D extends o.Component {
      constructor(e) {
        super(e), (this.state = {});
      }
      render() {
        if (!VRHTML) return null;
        let e = VRHTML.VRSystem.GetTrackedDeviceClasses(),
          t = [];
        return (
          e.map((e, n) => {
            e.eClass == l.x.TrackingReference &&
              e.sDevicePath &&
              t.push(
                o.createElement(
                  l.lb,
                  { parent_path: e.sDevicePath },
                  o.createElement(
                    l.K,
                    null,
                    o.createElement(
                      l.Y,
                      { width: 0.5 },
                      o.createElement(
                        "div",
                        { className: "FlexColumn" },
                        o.createElement(
                          "div",
                          { className: "Label" },
                          VRHTML.VRProperties.GetStringProperty(
                            e.sDevicePath,
                            l.y.SerialNumber_String
                          )
                        ),
                        o.createElement(
                          "div",
                          { className: "Label" },
                          VRHTML.VRProperties.GetStringProperty(
                            e.sDevicePath,
                            l.y.ManufacturerName_String
                          )
                        ),
                        o.createElement(
                          "div",
                          { className: "Label" },
                          VRHTML.VRProperties.GetStringProperty(
                            e.sDevicePath,
                            l.y.ModelNumber_String
                          )
                        ),
                        o.createElement(
                          "div",
                          { className: "Label" },
                          "Channel: ",
                          VRHTML.VRProperties.GetStringProperty(
                            e.sDevicePath,
                            l.y.ModeLabel_String
                          )
                        )
                      )
                    )
                  )
                )
              );
          }),
          o.createElement("div", { className: "CalloutTopLevelContainer" }, t)
        );
      }
    }
    var O,
      w,
      R = n("2vnA"),
      M = n("vvDA"),
      T = n("6YgL"),
      E = n("P8UO"),
      I = n("8GAN"),
      P = n("CzjV"),
      x = n("hcOo"),
      V = n("7uy8"),
      L = n("uFkT"),
      N = n("MYgy"),
      F = n("Kysl"),
      B = n("Z0gP");
    n.d(t, "DevPanel", function () {
      return H;
    }),
      n.d(t, "SystemUIMain", function () {
        return j;
      });
    class H extends o.Component {
      constructor(e) {
        super(e),
          (this.m_mailbox = new l.c()),
          this.m_mailbox.Init("systemui_devpanel");
      }
      onShowSceneAppBindings() {
        const e = E.a.Instance.SceneAppKey;
        if (e) {
          let t = { type: "request_binding_callouts", app_key: e };
          this.m_mailbox.SendMessage(V.b, t);
        }
      }
      onShowDashboardBindings() {
        this.m_mailbox.SendMessage(V.b, {
          type: "request_binding_callouts",
          app_key: "openvr.component.vrcompositor",
        });
      }
      onCrashRenderer() {
        var e;
        null === (e = VRHTML) || void 0 === e || e.CrashRenderer();
      }
      onHangRenderer() {
        for (;;);
      }
      render() {
        return o.createElement(
          l.j,
          {
            id: "dev_panel",
            tabName: "Dev Panel",
            iconUri: "/dashboard/images/icons/icon_settings.png",
            summonOverlayKey: "system.devpanel",
          },
          o.createElement(
            l.Y,
            {
              height: void 0,
              width: 2,
              interactive: !0,
              scrollable: !0,
              origin: l.s.BottomCenter,
              debug_name: "DevPanel",
            },
            o.createElement(
              T.b,
              { className: "panel DevPanel" },
              o.createElement("h1", null, "Developer Panel"),
              o.createElement(
                T.a,
                {
                  className: "ButtonControl",
                  onClick: this.props.onStartRoomSetup,
                },
                "Start Room Setup"
              ),
              o.createElement(
                T.a,
                {
                  className: "ButtonControl",
                  onClick: this.props.onToggleBaseInfo,
                },
                "Show Basestation Info"
              ),
              o.createElement(
                T.a,
                {
                  className: "ButtonControl",
                  onClick: this.onShowSceneAppBindings,
                },
                "Show Scene App Bindings"
              ),
              o.createElement(
                T.a,
                {
                  className: "ButtonControl",
                  onClick: this.onShowDashboardBindings,
                },
                "Show Dashboard Bindings"
              ),
              o.createElement(
                T.a,
                { className: "ButtonControl", onClick: this.onCrashRenderer },
                "Crash Renderer"
              ),
              o.createElement(
                T.a,
                { className: "ButtonControl", onClick: this.onHangRenderer },
                "Hang Renderer"
              ),
              o.createElement(
                T.a,
                {
                  className: "ButtonControl",
                  onClick: () => l.eb.Current().toggleDebugPointer(),
                },
                "Toggle Debug Pointer"
              )
            )
          )
        );
      }
    }
    Object(r.b)([s.bind], H.prototype, "onShowSceneAppBindings", null),
      Object(r.b)([s.bind], H.prototype, "onShowDashboardBindings", null),
      Object(r.b)([s.bind], H.prototype, "onCrashRenderer", null),
      Object(r.b)([s.bind], H.prototype, "onHangRenderer", null);
    class A extends o.Component {
      constructor(e) {
        var t, n;
        super(e),
          (this.m_mailbox = new l.c()),
          this.m_mailbox.Init("base_station_status_overlay").then(() => {
            this.m_mailbox.RegisterHandler(
              "waking_base_stations_state_changed",
              this.onWakingBaseStationsStateChanged
            );
          }),
          (this.state = {
            bWakingBaseStations:
              ((n =
                null === (t = VRHTML) || void 0 === t
                  ? void 0
                  : t.MonitorController.GetWakingBaseStationsState()),
              null != n && n),
            nImagesLoaded: 0,
          });
      }
      onWakingBaseStationsStateChanged(e) {
        this.setState({ bWakingBaseStations: !!e.waking_base_stations });
      }
      onImageLoaded() {
        this.setState({ nImagesLoaded: this.state.nImagesLoaded + 1 });
      }
      render() {
        let e = this.state.nImagesLoaded >= 2;
        return o.createElement(
          l.kb,
          { visibleIn0DOF: !0, visibleIn3DOF: !0, visibleIn6DOF: !1 },
          this.state.bWakingBaseStations &&
            o.createElement(
              l.lb,
              { parent_path: "/user/head", translation: { z: -2.75 } },
              o.createElement(
                l.Y,
                { width: 2, height: void 0, interactive: !1 },
                o.createElement(
                  "div",
                  {
                    className: "WakingBaseStationsPanel" + (e ? " Loaded" : ""),
                  },
                  o.createElement("img", {
                    className: "Rainbow",
                    src: "/dashboard/images/rainbow.png",
                    onLoad: this.onImageLoaded,
                  }),
                  o.createElement("div", { className: "Ground" })
                )
              ),
              o.createElement(
                l.lb,
                { translation: { z: 0.23 } },
                o.createElement(
                  l.Y,
                  { width: 2, height: void 0, interactive: !1 },
                  o.createElement(
                    "div",
                    {
                      className:
                        "WakingBaseStationsPanel" + (e ? " Loaded" : ""),
                    },
                    o.createElement("img", {
                      className: "Base",
                      src: "/dashboard/images/base.png",
                      onLoad: this.onImageLoaded,
                    }),
                    o.createElement(
                      "h1",
                      null,
                      Object(b.c)("#WakingUpBaseStations")
                    )
                  )
                )
              )
            )
        );
      }
    }
    Object(r.b)(
      [s.bind],
      A.prototype,
      "onWakingBaseStationsStateChanged",
      null
    ),
      Object(r.b)([s.bind], A.prototype, "onImageLoaded", null),
      (function (e) {
        (e[(e.Normal = 0)] = "Normal"), (e[(e.RoomSetup = 1)] = "RoomSetup");
      })(w || (w = {}));
    let j = (O = class extends o.Component {
      constructor(e) {
        super(e),
          (this.m_DashboardRequestedCallbackHandle = null),
          (this.m_mailbox = new l.c()),
          (this.m_DashboardRef = null),
          (this.m_fidelitySettingsObserver = null),
          (this.m_DeviceEventCallbackHandle = null),
          (this.m_DashboardRef = o.createRef()),
          this.m_mailbox.Init("systemui").then(() => {
            this.m_mailbox.RegisterHandler(
              "show_dashboard_requested",
              this.onShowDashboardRequested
            ),
              this.m_mailbox.RegisterHandler(
                "hide_dashboard_requested",
                this.onHideDashboardRequested
              );
          }),
          (this.state = { mode: w.Normal, bShowBaseInfo: !1 });
      }
      static bootstrap(e) {
        var t, n, i;
        return Object(r.a)(this, void 0, void 0, function* () {
          let r = document.querySelector(e);
          if (r && Object(l.i)() == l.H.Overlay) {
            console.log("Bootstrapping " + e),
              P.b.Instance.preloadSounds(),
              null === (t = VRHTML) ||
                void 0 === t ||
                t.VROverlay.SetFlag(
                  VRHTML.VROverlay.ThisOverlayHandle(),
                  l.D.MakeOverlaysInteractiveIfVisible,
                  !0
                ),
              null === (n = VRHTML) ||
                void 0 === n ||
                n.VROverlay.SetInputMethod(
                  VRHTML.VROverlay.ThisOverlayHandle(),
                  l.E.Mouse
                );
            try {
              yield Promise.all([
                Object(b.b)(
                  ["vrmonitor", "dashboard", "bindingui"],
                  null === (i = VRHTML) || void 0 === i
                    ? void 0
                    : i.GetSteamVRLanguage()
                ),
                u.d.Init(!0),
                L.a.Init(!0),
                N.a.Init(),
                F.a.Init(),
                B.a.Init(),
              ]);
            } catch (e) {
              console.error("Failed to initialize systemui:", e);
            }
            a.render(o.createElement(l.eb, null, o.createElement(O, null)), r);
          }
        });
      }
      componentDidMount() {
        var e;
        (window.toggleDevPanel = this.toggleDevPanel),
          (this.m_DeviceEventCallbackHandle =
            null === (e = VRHTML) || void 0 === e
              ? void 0
              : e.RegisterForDeviceEvents(this.DeviceEvent)),
          (this.m_fidelitySettingsObserver = new x.b());
      }
      componentWillUnmount() {
        var e, t, n;
        null === (e = this.m_DashboardRequestedCallbackHandle) ||
          void 0 === e ||
          e.unregister(),
          (this.m_DashboardRequestedCallbackHandle = null),
          null === (t = this.m_DeviceEventCallbackHandle) ||
            void 0 === t ||
            t.unregister(),
          (this.m_DeviceEventCallbackHandle = null),
          null === (n = this.m_fidelitySettingsObserver) ||
            void 0 === n ||
            n.cleanup(),
          (this.m_fidelitySettingsObserver = null);
      }
      onOpenRoomSetup() {
        this.setState({ mode: w.RoomSetup });
      }
      onShowDashboardRequested(e) {
        var t;
        u.d.settings.get("/settings/dashboard/enableDashboard") &&
          this.m_DashboardRef.current &&
          (this.m_DashboardRef.current.show(
            null != (t = e.summoned_by) ? t : "unknown"
          ),
          e.overlay_key &&
            this.m_DashboardRef.current.switchToOverlay(e.overlay_key),
          this.setDashboardVisibility(!0, e.tracked_device_index));
      }
      onHideDashboardRequested(e) {
        if (!this.m_DashboardRef.current) return;
        if (VRHTML.VRDashboardManager.HasMessageOverlay())
          return void this.m_DashboardRef.current.switchToOverlay(V.A);
        this.m_DashboardRef.current.hideMessageOverlay();
        this.m_mailbox.SendMessage("keyboard", { type: "hide_keyboard" }),
          this.m_DashboardRef.current.hide(e.reason),
          this.setDashboardVisibility(!1);
      }
      setDashboardVisibility(e, t) {
        let n = {
          type: "set_dashboard_visibility",
          tracked_device_index: t,
          visible: e,
        };
        this.m_mailbox.SendMessage("vrcompositor_systemlayer", n);
      }
      toggleDevPanel() {
        this.setDevPanelVisible(!this.devPanelVisible);
      }
      get devPanelVisible() {
        return u.d.settings.get(O.k_sPropShowDevPanel);
      }
      setDevPanelVisible(e) {
        u.d.SetSettingsValue(O.k_sPropShowDevPanel, e);
      }
      onToggleBaseInfo() {
        this.setState({ bShowBaseInfo: !this.state.bShowBaseInfo });
      }
      onExitMode() {
        this.setState({ mode: w.Normal });
      }
      DeviceEvent(e, t, n) {
        var i;
        e == l.m.Activated &&
          (null === (i = VRHTML) || void 0 === i
            ? void 0
            : i.VRSystem.GetTrackedDeviceClasses().some(
                (e) => e.unIndex == n && e.eClass == l.x.Controller
              )) &&
          this.forceUpdate();
      }
      render() {
        let e = [],
          t = 0;
        switch (
          (VRHTML.VRSystem.GetTrackedDeviceClasses().some(
            (n) => (
              n.eClass == l.x.Controller &&
                (t++,
                e.push(
                  o.createElement(M.a, {
                    key: "controllerstatus_" + n.unIndex,
                    trackedDeviceIndex: n.unIndex,
                  })
                )),
              t >= 8
            )
          ),
          e.push(o.createElement(A, { key: "basestationstatus" })),
          e.push(
            o.createElement(d.a, { key: "dashboard", ref: this.m_DashboardRef })
          ),
          e.push(
            o.createElement(C, {
              key: "transition",
              dashboardRef: this.m_DashboardRef,
            })
          ),
          this.devPanelVisible &&
            e.push(
              o.createElement(H, {
                key: "devpanel",
                onCloseDevPanel: () => this.setDevPanelVisible(!1),
                onStartRoomSetup: this.onOpenRoomSetup,
                onToggleBaseInfo: this.onToggleBaseInfo,
              })
            ),
          this.state.mode)
        ) {
          case w.RoomSetup:
            e.push(
              o.createElement(c, {
                key: "roomsetup",
                returnToMenu: this.onExitMode,
              })
            );
        }
        return (
          this.state.bShowBaseInfo && e.push(o.createElement(D, null)),
          e.push(o.createElement(I.c, { key: "resetseatedcountdown" })),
          e.push(o.createElement(y, { key: "ipd" })),
          e.push(o.createElement(m, { key: "progressindicator" })),
          o.createElement("span", null, e)
        );
      }
    });
    (j.k_sPropShowDevPanel = "/settings/dashboard/showDevPanel"),
      Object(r.b)([s.bind], j.prototype, "onOpenRoomSetup", null),
      Object(r.b)([s.bind], j.prototype, "onShowDashboardRequested", null),
      Object(r.b)([s.bind], j.prototype, "onHideDashboardRequested", null),
      Object(r.b)([s.bind], j.prototype, "toggleDevPanel", null),
      Object(r.b)([R.f], j.prototype, "devPanelVisible", null),
      Object(r.b)([s.bind], j.prototype, "setDevPanelVisible", null),
      Object(r.b)([s.bind], j.prototype, "onToggleBaseInfo", null),
      Object(r.b)([s.bind], j.prototype, "onExitMode", null),
      Object(r.b)([s.bind], j.prototype, "DeviceEvent", null),
      (j = O = Object(r.b)([g.a], j)),
      j.bootstrap("SystemUIRoot");
  },
  "ru2+": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return b;
    });
    var i = n("mrSG"),
      r = n("q1tI"),
      o = n("okNM"),
      a = n("7wIv"),
      s = n("GXif"),
      l = n("MYgy"),
      c = n("Z0gP"),
      d = n("2vnA"),
      u = n("uFkT"),
      h = n("6YgL"),
      p = n("hcOo"),
      m = n("TbT/");
    let v = class extends r.Component {
      constructor(e) {
        super(e), (this.state = { deviceStatus: null });
      }
      get trackerConfig() {
        return l.a.GetTrackerBinding(this.props.trackerPath);
      }
      OnTrackerRoleChanged(e) {
        l.a.SetTrackerBinding(
          this.props.trackerPath,
          e,
          this.trackerConfig.controller_role
        );
      }
      OnControllerRoleChanged(e) {
        l.a.SetTrackerBinding(
          this.props.trackerPath,
          this.trackerConfig.role,
          e
        );
      }
      BuzzTracker() {
        l.a.PulseHaptics(this.trackerConfig.device_path_handle);
      }
      get deviceInfo() {
        return u.a.GetDeviceInfo(this.props.trackerPath);
      }
      IsConnected() {
        return !(!this.deviceInfo || !this.deviceInfo.is_connected);
      }
      IsIdentifiable() {
        return !(!this.IsConnected() || !this.deviceInfo.is_identifiable);
      }
      render() {
        let e = [];
        if ("TrackerRole_Handed" == this.trackerConfig.role) {
          e = [
            "TrackedControllerRole_Invalid",
            "TrackedControllerRole_LeftHand",
            "TrackedControllerRole_RightHand",
          ].map((e) => ({ value: e, sLabel: Object(s.c)("#" + e) }));
        }
        const t = this.trackerConfig.device_path_string;
        let n = t;
        n.includes("vive_tracker") &&
          (n = n.substring(
            n.indexOf("vive_tracker") + "vive_tracker".length,
            n.length
          ));
        let i = null;
        return (
          this.IsConnected()
            ? this.IsIdentifiable() ||
              (i = Object(s.c)(
                "#Settings_ViveTracker_Identify_NotIdentifiable"
              ))
            : (i = Object(s.c)("#Settings_ViveTracker_Identify_NotConnected")),
          r.createElement(
            m.c,
            { className: "SettingsItem TrackerEntry" },
            r.createElement(
              "div",
              { className: "Label", title: t },
              r.createElement("span", null, n),
              r.createElement("div", {
                title: Object(s.c)(
                  this.IsConnected()
                    ? "#Settings_ViveTracker_Connected"
                    : "#Settings_ViveTracker_Disconnected"
                ),
                className: Object(p.a)(
                  "TrackerConnectionIndicator",
                  ["Connected", c.a.connected && this.IsConnected()],
                  ["Disconnected", c.a.connected && !this.IsConnected()]
                ),
              })
            ),
            r.createElement(
              "div",
              { className: Object(p.a)("SubsectionStem") },
              r.createElement(
                m.c,
                { title: i },
                r.createElement(
                  h.a,
                  {
                    className: "ButtonControl",
                    enabled: this.IsIdentifiable(),
                    onClick: this.BuzzTracker,
                  },
                  Object(s.c)("#TrackerEditor_BuzzTracker")
                )
              )
            ),
            r.createElement(
              "div",
              { className: "Subsection WithStem" },
              r.createElement(m.h, {
                label: Object(s.c)("#Settings_ViveTracker_Role"),
                items: this.props.validTrackerRoles.map((e) => ({
                  value: e,
                  sLabel: Object(s.c)("#" + e),
                })),
                value: this.trackerConfig.role,
                onChange: this.OnTrackerRoleChanged,
              }),
              e.length > 0 &&
                r.createElement(m.h, {
                  label: Object(s.c)("#Settings_ViveTracker_Hand"),
                  items: e,
                  value: this.trackerConfig.controller_role,
                  onChange: this.OnControllerRoleChanged,
                })
            )
          )
        );
      }
    };
    Object(i.b)([d.f], v.prototype, "trackerConfig", null),
      Object(i.b)([a.bind], v.prototype, "OnTrackerRoleChanged", null),
      Object(i.b)([a.bind], v.prototype, "OnControllerRoleChanged", null),
      Object(i.b)([a.bind], v.prototype, "BuzzTracker", null),
      Object(i.b)([d.f], v.prototype, "deviceInfo", null),
      (v = Object(i.b)([o.a], v));
    let b = class extends r.Component {
      constructor(e) {
        super(e), (this.m_nGetInputStateIntervalHandle = 0);
      }
      componentDidMount() {
        (this.m_nGetInputStateIntervalHandle = window.setInterval(
          () => u.a.GetInputState(),
          2e3
        )),
          u.a.GetInputState();
      }
      componentWillUnmount() {
        window.clearInterval(this.m_nGetInputStateIntervalHandle);
      }
      render() {
        let e = l.a.TrackerBindings,
          t = void 0;
        return (
          e &&
            e.trackers &&
            (t = e.trackers.map((t, n) =>
              r.createElement(v, {
                key: n,
                trackerPath: t.device_path_string,
                validTrackerRoles: e.valid_roles,
              })
            )),
          r.createElement("div", { className: "TrackerEditorModal" }, t)
        );
      }
    };
    b = Object(i.b)([o.a], b);
  },
  vvDA: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return i;
    }),
      n.d(t, "a", function () {
        return l;
      });
    var i,
      r = n("mrSG"),
      o = n("q1tI"),
      a = n("7wIv"),
      s = n("/i/y");
    !(function (e) {
      (e[(e.HorizontalPips = 0)] = "HorizontalPips"),
        (e[(e.VerticalBattery = 1)] = "VerticalBattery");
    })(i || (i = {}));
    class l extends o.Component {
      constructor(e) {
        super(e),
          (this.m_BatteryStateChangedCallbackHandle = null),
          (this.m_DeviceRoleChangedCallbackHandle = null),
          (this.m_DeviceEventCallbackHandle = null),
          (this.batteryLevelStable = null),
          (this.state = { batteryIconPath: null, roleIconPath: null });
      }
      componentDidMount() {
        var e, t, n;
        (this.m_BatteryStateChangedCallbackHandle =
          null === (e = s.mb) || void 0 === e
            ? void 0
            : e.RegisterForBatteryStateChangedEvents(
                this.OnBatteryStateChanged
              )),
          (this.m_DeviceRoleChangedCallbackHandle =
            null === (t = s.mb) || void 0 === t
              ? void 0
              : t.RegisterForDeviceRoleChangedEvents(this.OnDeviceRoleChanged)),
          (this.m_DeviceEventCallbackHandle =
            null === (n = s.mb) || void 0 === n
              ? void 0
              : n.RegisterForDeviceEvents(this.OnDeviceEvent)),
          this.UpdateControllerStatus();
      }
      componentWillUnmount() {
        this.m_BatteryStateChangedCallbackHandle &&
          (this.m_BatteryStateChangedCallbackHandle.unregister(),
          (this.m_BatteryStateChangedCallbackHandle = null)),
          this.m_DeviceRoleChangedCallbackHandle &&
            (this.m_DeviceRoleChangedCallbackHandle.unregister(),
            (this.m_DeviceRoleChangedCallbackHandle = null)),
          this.m_DeviceEventCallbackHandle &&
            (this.m_DeviceEventCallbackHandle.unregister(),
            (this.m_DeviceEventCallbackHandle = null));
      }
      UpdateControllerStatus() {
        var e;
        if (!s.mb) return;
        const t = s.mb.VRProperties.GetBoolProperty(
            this.props.trackedDeviceIndex,
            s.y.DeviceProvidesBatteryStatus_Bool
          ),
          n = s.mb.VRSystem.GetControllerRoleForTrackedDeviceIndex(
            this.props.trackedDeviceIndex
          );
        let r = !1;
        if (t) {
          const t =
            null !=
            (e = s.mb.VRProperties.GetFloatProperty(
              this.props.trackedDeviceIndex,
              s.y.DeviceBatteryPercentage_Float
            ))
              ? e
              : 0;
          (r = s.mb.VRProperties.GetBoolProperty(
            this.props.trackedDeviceIndex,
            s.y.DeviceIsCharging_Bool
          )),
            null == this.batteryLevelStable || 0 == this.batteryLevelStable
              ? (this.batteryLevelStable = t)
              : ((this.batteryLevelStable = Math.min(
                  this.batteryLevelStable,
                  t + l.kBatteryLevelHysteresis,
                  1
                )),
                (this.batteryLevelStable = Math.max(
                  this.batteryLevelStable,
                  t - l.kBatteryLevelHysteresis,
                  0
                )));
        }
        let o = l.GetBatteryIcon(
            t,
            r,
            this.batteryLevelStable,
            i.HorizontalPips
          ),
          a = this.GetRoleIcon(n);
        (o == this.state.batteryIconPath && a == this.state.roleIconPath) ||
          this.setState({ batteryIconPath: o, roleIconPath: a });
      }
      GetRoleIcon(e) {
        switch (e) {
          case s.w.TrackedControllerRole_RightHand:
            return "images/icons/controller_model_right.png";
          case s.w.TrackedControllerRole_LeftHand:
            return "images/icons/controller_model_left.png";
        }
        return null;
      }
      static GetBatteryIcon(e, t, n, r) {
        if (!e) return null;
        const o =
          r == i.VerticalBattery
            ? "images/icons/vert"
            : "images/icons/controller_model";
        return t
          ? n < 0.15
            ? o + "_charging_red.png"
            : o + "_charging.png"
          : 0 == n
          ? null
          : n < 0.15
          ? o + "_low.png"
          : n < 0.3
          ? o + "_battery_1.png"
          : n < 0.6
          ? o + "_battery_2.png"
          : n < 0.9
          ? o + "_battery_3.png"
          : o + "_battery_4.png";
      }
      OnBatteryStateChanged(e) {
        e == this.props.trackedDeviceIndex && this.UpdateControllerStatus();
      }
      OnDeviceRoleChanged() {
        this.UpdateControllerStatus();
      }
      OnDeviceEvent(e, t, n) {
        e == s.m.Activated &&
          n == this.props.trackedDeviceIndex &&
          this.UpdateControllerStatus();
      }
      render() {
        return o.createElement(
          s.Y,
          {
            width: void 0,
            height: void 0,
            interactive: !1,
            rendermodel_component_device_index: this.props.trackedDeviceIndex,
            rendermodel_component_name: "status",
            debug_name: "controllerstatus_" + this.props.trackedDeviceIndex,
          },
          o.createElement(
            "div",
            {
              className: "ControllerStatusRoot",
              style: { width: 256, height: 256 },
            },
            o.createElement(
              "div",
              { className: "ControllerStatusFrame" },
              o.createElement(
                "div",
                {
                  className: "ControllerHandFrame",
                  style: {
                    width: 210,
                    marginLeft: 23,
                    height: 110,
                    marginTop: 18,
                  },
                },
                o.createElement("img", {
                  className: "ControllerHand",
                  src: this.state.roleIconPath,
                })
              ),
              o.createElement(
                "div",
                {
                  className: "ControllerBatteryFrame",
                  style: {
                    width: 210,
                    marginLeft: 23,
                    height: 110,
                    marginTop: 18,
                    opacity: 0.85,
                  },
                },
                o.createElement("img", {
                  className: "ControllerBattery",
                  src: this.state.batteryIconPath,
                })
              )
            )
          )
        );
      }
    }
    (l.kBatteryLevelHysteresis = 0.02),
      Object(r.b)([a.bind], l.prototype, "OnBatteryStateChanged", null),
      Object(r.b)([a.bind], l.prototype, "OnDeviceRoleChanged", null),
      Object(r.b)([a.bind], l.prototype, "OnDeviceEvent", null);
  },
});
//# sourceMappingURL=systemui.js.map?v=8f633aa478a236008f93