/*!
 * (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 *
 */ !(function (e) {
  function t(t) {
    for (
      var i, s, a = t[0], l = t[1], c = t[2], u = 0, p = [];
      u < a.length;
      u++
    )
      (s = a[u]),
        Object.prototype.hasOwnProperty.call(r, s) && r[s] && p.push(r[s][0]),
        (r[s] = 0);
    for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i]);
    for (d && d(t); p.length; ) p.shift()();
    return o.push.apply(o, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < o.length; t++) {
      for (var n = o[t], i = !0, a = 1; a < n.length; a++) {
        var l = n[a];
        0 !== r[l] && (i = !1);
      }
      i && (o.splice(t--, 1), (e = s((s.s = n[0]))));
    }
    return e;
  }
  var i = {},
    r = { 2: 0 },
    o = [];
  function s(t) {
    if (i[t]) return i[t].exports;
    var n = (i[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.m = e),
    (s.c = i),
    (s.d = function (e, t, n) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (s.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (s.t = function (e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (s.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          s.d(
            n,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return n;
    }),
    (s.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return s.d(t, "a", t), t;
    }),
    (s.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = "");
  var a = (window.webpackJsonp = window.webpackJsonp || []),
    l = a.push.bind(a);
  (a.push = t), (a = a.slice());
  for (var c = 0; c < a.length; c++) t(a[c]);
  var d = l;
  o.push(["Lkzh", 0, 1]), n();
})({
  "/i/y": function (e, t, n) {
    "use strict";
    var i = n("mrSG"),
      r = n("7wIv"),
      o = n.n(r);
    class s {
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
            (this.m_sMailboxName = s.EnsureUniqueName(e)),
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
    function a() {
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
    function p(e, t) {
      return { x: e.x * t, y: e.y * t };
    }
    function h(e, t) {
      return { x: e.x * t, y: e.y * t, z: e.z * t };
    }
    function m(e) {
      return Math.sqrt(e.x * e.x + e.y * e.y);
    }
    function g(e) {
      return Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z);
    }
    function _(e) {
      if (void 0 === e) return;
      let t = 0.5 * e.x,
        n = 0.5 * e.y,
        i = 0.5 * e.z,
        r = Math.cos(t),
        o = Math.cos(n),
        s = Math.cos(i),
        a = Math.sin(t),
        l = Math.sin(n),
        c = Math.sin(i);
      return {
        w: r * o * s + a * l * c,
        x: a * o * s + r * l * c,
        y: r * l * s - a * o * c,
        z: r * o * c - a * l * s,
      };
    }
    function b(e) {
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
    function v(e, t) {
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
    function f(e) {
      return v(e.rotation, { x: 0, y: 0, z: 1 });
    }
    function S(e) {
      let t = g(e);
      return { x: e.x / t, y: e.y / t, z: e.z / t };
    }
    function C(e, t) {
      return {
        x: e.y * t.z - e.z * t.y,
        y: e.z * t.x - e.x * t.z,
        z: e.x * t.y - e.y * t.x,
      };
    }
    function k(e) {
      let t = e.w * e.w + e.x * e.x + e.y * e.y + e.z * e.z;
      return { w: e.w / t, x: -e.x / t, y: -e.y / t, z: -e.z / t };
    }
    (s.s_nNextMailboxNumber = 1),
      Object(i.b)([r.bind], s.prototype, "OpenWebSocketToHost", null),
      Object(i.b)([r.bind], s.prototype, "OnWebSocketOpen", null),
      Object(i.b)([r.bind], s.prototype, "OnWebSocketClose", null),
      Object(i.b)([r.bind], s.prototype, "WebSocketSend", null),
      Object(i.b)([r.bind], s.prototype, "OnWebSocketMessage", null);
    class O {
      constructor() {
        (this.m_mailbox = new s()), this.m_mailbox.Init("sgtransformcache");
      }
      static getInstance() {
        return O.instance || (O.instance = new O()), O.instance;
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
    var D = n("q1tI");
    function w(e, t) {
      let n = e.getAttribute(t);
      if (n && n.length > 0) {
        if ("undefined" == n) return;
        let e = [];
        for (let t of n.split(" ")) 0 != t.length && e.push(parseFloat(t));
        if (e.length > 0) return e;
      }
    }
    function M(e, t) {
      let n = e.getAttribute(t);
      if (n && n.length > 0) return parseFloat(n);
    }
    function R(e, t) {
      let n = e.getAttribute(t);
      if (n && n.length > 0) return parseInt(n);
    }
    function E(e, t) {
      let n = e.getAttribute(t);
      if (n && n.length > 0)
        return (
          "true" == n ||
          (n.length > 0 && 0 != parseInt(n) && !isNaN(parseInt(n)))
        );
    }
    function T(e, t) {
      let n = e.getAttribute(t);
      if (n && n.length > 0) return n;
    }
    function I(e, t) {
      return W(T(e, t));
    }
    function P(e, t) {
      let n = { type: e, properties: {} };
      return (
        t.id && (n.properties.id = W(t.id)),
        (n.properties.sgid = R(t, "sgid")),
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
                (r.properties["parent-path"] = T(t, "parent-path")),
                (r.properties["parent-origin"] = T(t, "parent-origin")),
                (r.properties["parent-id"] = I(t, "parent-id"));
              break;
            case "VSG-TRACKING-STATE-VISIBILITY":
              (r = P("trackingstatevisibility", t)),
                (r.properties["visible-0dof"] = E(t, "visible-0dof")),
                (r.properties["visible-3dof"] = E(t, "visible-3dof")),
                (r.properties["visible-6dof"] = E(t, "visible-6dof"));
              break;
            case "VSG-ELASTIC-HEAD-TRANSFORM":
              (r = P("elasticheadtransform", t)),
                (r.properties["start-angle-threshold"] = M(
                  t,
                  "start-angle-threshold"
                )),
                (r.properties["stop-angle-threshold"] = M(
                  t,
                  "stop-angle-threshold"
                )),
                (r.properties["ease-in-time"] = M(t, "ease-in-time")),
                (r.properties["ease-in-power"] = M(t, "ease-in-power")),
                (r.properties["ease-out-angle-threshold"] = M(
                  t,
                  "ease-out-angle-threshold"
                )),
                (r.properties["ease-out-power"] = M(t, "ease-out-power")),
                (r.properties["min-angular-velocity"] = M(
                  t,
                  "min-angular-velocity"
                )),
                (r.properties["max-angular-velocity"] = M(
                  t,
                  "max-angular-velocity"
                )),
                (r.properties["lock-to-horizon"] = E(t, "lock-to-horizon")),
                (r.properties["translation-behavior"] = R(
                  t,
                  "translation-behavior"
                ));
              break;
            case "VSG-LINE":
              (r = P("line", t)),
                (r.properties["target-id"] = I(t, "target-id")),
                (r.properties.thickness = M(t, "thickness")),
                (r.properties["start-buffer"] = M(t, "start-buffer")),
                (r.properties["end-buffer"] = M(t, "end-buffer"));
              break;
            case "VSG-LINE-CONSTRAINED-TRANSFORM":
              (r = P("line-constrained-transform", t)),
                (r.properties["target-id"] = I(t, "target-id")),
                (r.properties["source-id"] = I(t, "source-id")),
                (r.properties["source-distance"] = M(t, "source-distance")),
                (r.properties["target-limit"] = M(t, "target-limit"));
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
                (r.properties["offscreen-z-depth"] = M(t, "offscreen-z-depth")),
                (r.properties["off-axis-limit"] = M(t, "off-axis-limit")),
                (r.properties["transition-limit"] = M(t, "transition-limit"));
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
      B,
      N,
      A = [],
      H = null,
      F = null,
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
      N = !0;
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
                  relatchDashboardTransform: N,
                  sceneCompositeMult: j,
                },
                children: x({ currentPanel: null, bShouldAbort: !1 }, e),
              };
              F ||
                (console.log("Initializing sg_mailbox"),
                (F = new s()),
                yield F.Init("sg_mailbox", B));
              let n = {
                type: "update_scene_graph",
                owning_overlay_key: z(),
                scene_graph: t,
                retired_sgids: A,
              };
              F.SendMessage("vrcompositor_systemlayer", n),
                (H = null),
                (A = []),
                (N = !1);
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
    class $ extends D.Component {
      constructor(e) {
        super(e),
          (this.m_domRef = D.createRef()),
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
          A.push(e),
          q(),
          this.m_domRef.current &&
            this.m_buildNodeOverride &&
            delete this.m_domRef.current.buildNode;
      }
      render() {
        return D.cloneElement(this.internalRender(), {
          id: this.props.id,
          "vsg-type": this.getNodeType(),
          sgid: this.m_SGID,
          ref: this.m_domRef,
        });
      }
      internalRender() {
        return this.m_buildNodeOverride
          ? D.createElement("vsg-node", null, this.props.children)
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
        return D.createElement(
          "vsg-node",
          { id: this.props.id },
          D.createElement(
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
    var oe, se, ae, le, ce, de, ue, pe, he, me, ge;
    Object(i.b)([o.a], re.prototype, "buildNode", null),
      (function (e) {
        (e[(e.Seated = 0)] = "Seated"),
          (e[(e.Standing = 1)] = "Standing"),
          (e[(e.Raw = 2)] = "Raw");
      })(oe || (oe = {}));
    class _e extends $ {
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
            (t = _(
              h(Y(this.props.rotation, { x: 0, y: 0, z: 0 }), Math.PI / 180)
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
        return D.createElement(
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
    class be extends $ {
      constructor(e) {
        super(e);
      }
      internalRender() {
        return D.createElement(
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
    function ve(e) {
      if (e) return [e.u, e.v];
    }
    function ye(e) {
      switch (e) {
        case se.TopLeft:
          return { x: -1, y: 1 };
        case se.TopCenter:
          return { x: 0, y: 1 };
        case se.TopRight:
          return { x: 1, y: 1 };
        case se.CenterLeft:
          return { x: -1, y: 0 };
        case se.Center:
          return { x: 0, y: 0 };
        case se.CenterRight:
          return { x: 1, y: 0 };
        case se.BottomLeft:
          return { x: -1, y: -1 };
        case se.BottomCenter:
          return { x: 0, y: -1 };
        case se.BottomRight:
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
    })(se || (se = {})),
      (function (e) {
        (e[(e.Auto = 0)] = "Auto"), (e[(e.SingleTap = 1)] = "SingleTap");
      })(ae || (ae = {})),
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
    class fe extends $ {
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
        fe.s_bPanelsAreDirty = !0;
      }
      componentDidMount() {
        super.componentDidMount(),
          (this.m_resizeObserver = new ResizeObserver(this.onResizeObserved)),
          this.m_resizeObserver.observe(this.getCurrentRootElement()),
          (this.m_nEmbeddedIndex = Se.Current().addEmbeddedPanelUVs(this)),
          (fe.s_bPanelsAreDirty = !0),
          this.getCurrentRootElement().addEventListener(
            "mousedown",
            this.onPanelMouseDown
          ),
          this.forceUpdate();
      }
      onResizeObserved(e, t) {
        Se.Current().forceLayoutUpdate();
      }
      componentWillUnmount() {
        this.m_resizeObserver &&
          (this.m_resizeObserver.disconnect(), (this.m_resizeObserver = null)),
          this.stopOverDragBlocking(),
          this.getCurrentRootElement().removeEventListener(
            "mousedown",
            this.onPanelMouseDown
          ),
          (fe.s_bPanelsAreDirty = !0),
          Se.Current().removeEmbeddedPanelUVs(this),
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
        let s = Object.assign({}, e),
          a = this.createSgNode(t),
          l = { x: 0, y: 0 };
        l =
          "object" == typeof this.props.origin
            ? Q(this.props.origin, { x: 0, y: 0 })
            : ye(this.props.origin);
        const c = this.props.overlay_key,
          d = z();
        return (
          c && c.length > 0
            ? (a.properties.key = c)
            : d
            ? (a.properties.key = d)
            : (a.properties.overlay_handle = (function () {
                var e;
                return null === (e = VRHTML) || void 0 === e
                  ? void 0
                  : e.VROverlay.ThisOverlayHandle();
              })()),
          (a.properties.uv_min = null != (n = ve(this.m_UVsMin)) ? n : void 0),
          (a.properties.uv_max = null != (i = ve(this.m_UVsMax)) ? i : void 0),
          (a.properties.width = null != (r = this.props.width) ? r : void 0),
          (a.properties.height = null != (o = this.props.height) ? o : void 0),
          (a.properties["target-dpi-panel-id"] = W(
            this.props.target_dpi_panel_id
          )),
          (a.properties["target-dpi-multiplier"] =
            this.props.target_dpi_multiplier),
          (a.properties.curvature = this.props.curvature),
          (a.properties["curvature-origin-id"] = W(
            this.props.curvature_origin_id
          )),
          (a.properties.interactive = this.props.interactive),
          (a.properties.scrollable = this.props.scrollable),
          (a.properties.modal = this.props.modal),
          (a.properties["embedded-uv-index"] = this.m_nEmbeddedIndex),
          (a.properties.origin = Z(l)),
          (a.properties.debug_name = this.props.debug_name),
          (a.properties.sampler = this.props.sampler),
          (a.properties.reflect = this.props.reflect),
          (a.properties.stereoscopy = this.props.stereoscopy),
          (a.properties.rendermodel_component_device_index =
            this.props.rendermodel_component_device_index),
          (a.properties.rendermodel_component_name =
            this.props.rendermodel_component_name),
          (a.properties["texture-id"] = W(this.props.texture_id)),
          (a.properties["sort-order"] = this.props.sort_order),
          (a.properties["sort-depth-bias"] = this.props.sort_depth_bias),
          (s.currentPanel = this),
          [s, a]
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
        return D.createElement(
          "vsg-node",
          { style: { display: this.visibility == ce.Hidden ? "none" : null } },
          this.props.children
        );
      }
    }
    (fe.s_bPanelsAreDirty = !1),
      Object(i.b)([o.a], fe.prototype, "onResizeObserved", null),
      Object(i.b)([o.a], fe.prototype, "onPanelMouseDown", null),
      Object(i.b)([o.a], fe.prototype, "onWindowMouseUp", null),
      Object(i.b)([o.a], fe.prototype, "buildNode", null);
    class Se extends D.Component {
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
          (Se.s_Current = this),
          (this.state = {
            bFontsLoaded: !1,
            nForcedUpdateNumber: 0,
            bShowDebugPointer: !1,
          }),
          (this.m_DomRef = D.createRef()),
          (this.m_scalingDomRef = D.createRef()),
          (this.m_CanvasRef = D.createRef()),
          (this.m_DebugPointerRef = D.createRef());
      }
      static get IsSceneGraphApp() {
        return null !== Se.Current();
      }
      static Current() {
        return Se.s_Current;
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
        (fe.s_bPanelsAreDirty = !0),
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
            (B = o),
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
          D.createElement(
            "vsg-app",
            {
              class: e.join(" "),
              ref: this.m_DomRef,
              "sg-forced-update-number": this.state.nForcedUpdateNumber,
            },
            D.createElement("div", {
              className: "DebugPointer",
              ref: this.m_DebugPointerRef,
            }),
            D.createElement("canvas", {
              ref: this.m_CanvasRef,
              className: "EmbeddedData",
              height: Se.k_EmbeddedDataRows,
            }),
            D.createElement(
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
              Se.k_EmbeddedDataRows
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
          (fe.s_bPanelsAreDirty = !0)),
          fe.s_bPanelsAreDirty &&
            (this.m_mapPanels.forEach((e) => e.updateLayoutValues()),
            q(),
            (fe.s_bPanelsAreDirty = !1),
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
              s = 1 + 3 * e.getEmbeddedIndex();
            if (e.isExternal() || n >= i || r >= o)
              for (let e = 0; e < 3; e++) this.setPixel(s + 1, 0, 0, 0, 0);
            else
              this.setPixel(s, (65280 & n) >> 8, 255 & n, 0),
                this.setPixel(s + 1, (65280 & i) >> 8, 255 & i, 255 & r),
                this.setPixel(
                  s + 2,
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
    (Se.s_Current = null),
      (Se.k_EmbeddedDataRows = 1),
      Object(i.b)([r.bind], Se.prototype, "toggleDebugPointer", null),
      Object(i.b)([r.bind], Se.prototype, "onMouseMove", null),
      Object(i.b)([r.bind], Se.prototype, "forceLayoutUpdate", null),
      Object(i.b)([r.bind], Se.prototype, "onMutation", null);
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
    class Ce extends $ {
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
    Object(i.b)([o.a], Ce.prototype, "buildNode", null);
    class ke extends $ {
      constructor(e) {
        super(e);
      }
      internalRender() {
        return D.createElement("vsg-line", {
          "target-id": this.props.target_id,
          thickness: this.props.thickness,
          "start-buffer": this.props.start_buffer,
          "end-buffer": this.props.end_buffer,
        });
      }
    }
    class Oe extends $ {
      constructor(e) {
        super(e);
      }
      internalRender() {
        return D.createElement(
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
    class De extends $ {
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
            s = r.top + r.height / 2,
            a = e.currentPanel.m_Rect;
          if (o < a.x || o > a.x + a.width || s < a.y || s > a.y + a.height)
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
            (i.properties["anchor-v"] = s / c);
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
    Object(i.b)([o.a], De.prototype, "buildNode", null);
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
        return D.createElement(
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
    class Me extends $ {
      constructor(e) {
        super(e);
      }
      internalRender() {
        return D.createElement(
          "vsg-head-facing-transform",
          null,
          this.props.children
        );
      }
    }
    function Re() {
      var e, t;
      return null !=
        (t = null === (e = VRHTML) || void 0 === e ? void 0 : e.Environment())
        ? t
        : pe.Unknown;
    }
    !(function (e) {
      (e[(e.Desktop = 1)] = "Desktop"),
        (e[(e.Overlay = 2)] = "Overlay"),
        (e[(e.Unknown = 100)] = "Unknown");
    })(pe || (pe = {})),
      window.hasOwnProperty("VRHTML") || (window.VRHTML = null),
      (function (e) {
        (e[(e.Auto = 0)] = "Auto"),
          (e[(e.Low = 1)] = "Low"),
          (e[(e.Medium = 2)] = "Medium"),
          (e[(e.High = 3)] = "High");
      })(he || (he = {})),
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
      })(ge || (ge = {}));
    var Ee, Te, Ie, Pe, xe, Ve, Le, Be, Ne, Ae, He, Fe, je, Ue, We, ze, Ge;
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
    })(Ee || (Ee = {})),
      (function (e) {
        (e[(e.Activated = 0)] = "Activated"),
          (e[(e.Deactivated = 1)] = "Deactivated");
      })(Te || (Te = {})),
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
      })(Be || (Be = {})),
      (function (e) {
        (e[(e.ButtonPress_0 = 0)] = "ButtonPress_0"),
          (e[(e.ButtonPress_1 = 1)] = "ButtonPress_1"),
          (e[(e.ButtonPress_2 = 2)] = "ButtonPress_2"),
          (e[(e.ButtonPress_3 = 3)] = "ButtonPress_3"),
          (e[(e.CouldntFindSystemOverlay = 4)] = "CouldntFindSystemOverlay"),
          (e[(e.CouldntFindOrCreateClientOverlay = 5)] =
            "CouldntFindOrCreateClientOverlay"),
          (e[(e.ApplicationQuit = 6)] = "ApplicationQuit");
      })(Ne || (Ne = {})),
      (function (e) {
        (e[(e.Normal = 0)] = "Normal"),
          (e[(e.Password = 1)] = "Password"),
          (e[(e.Submit = 2)] = "Submit");
      })(Ae || (Ae = {})),
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
      })(Fe || (Fe = {})),
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
    class Ke extends D.Component {
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
        return D.createElement(
          _e,
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
        return D.createElement(
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
        return s;
      }),
      n.d(t, "g", function () {
        return a;
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
        return p;
      }),
      n.d(t, "V", function () {
        return h;
      }),
      n.d(t, "M", function () {
        return m;
      }),
      n.d(t, "N", function () {
        return g;
      }),
      n.d(t, "I", function () {
        return _;
      }),
      n.d(t, "R", function () {
        return b;
      }),
      n.d(t, "T", function () {
        return v;
      }),
      n.d(t, "b", function () {
        return y;
      }),
      n.d(t, "J", function () {
        return f;
      }),
      n.d(t, "W", function () {
        return S;
      }),
      n.d(t, "h", function () {
        return C;
      }),
      n.d(t, "L", function () {
        return k;
      }),
      n.d(t, "fb", function () {
        return O;
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
        return _e;
      }),
      n.d(t, "kb", function () {
        return be;
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
        return Se;
      }),
      n.d(t, "u", function () {
        return de;
      }),
      n.d(t, "db", function () {
        return Ce;
      }),
      n.d(t, "P", function () {
        return ke;
      }),
      n.d(t, "bb", function () {
        return Oe;
      }),
      n.d(t, "Z", function () {
        return De;
      }),
      n.d(t, "s", function () {
        return se;
      }),
      n.d(t, "t", function () {
        return ae;
      }),
      n.d(t, "ab", function () {
        return ce;
      }),
      n.d(t, "Y", function () {
        return fe;
      }),
      n.d(t, "G", function () {
        return we;
      }),
      n.d(t, "K", function () {
        return Me;
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
        return pe;
      }),
      n.d(t, "i", function () {
        return Re;
      }),
      n.d(t, "q", function () {
        return he;
      }),
      n.d(t, "z", function () {
        return me;
      }),
      n.d(t, "A", function () {
        return ge;
      }),
      n.d(t, "ob", function () {
        return 0;
      }),
      n.d(t, "nb", function () {
        return -1;
      }),
      n.d(t, "m", function () {
        return Te;
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
        return Be;
      }),
      n.d(t, "C", function () {
        return Ne;
      }),
      n.d(t, "p", function () {
        return Ae;
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
        return p;
      }),
      n.d(t, "c", function () {
        return h;
      });
    var i,
      r = n("mrSG"),
      o = n("q1tI"),
      s = n("7wIv"),
      a = n("/i/y"),
      l = n("GXif"),
      c = n("okNM"),
      d = n("hcOo");
    const u = "resetuniverseorigincountdown",
      p = "begin_reset_universe_origin_countdown";
    let h = (i = class extends o.Component {
      constructor(e) {
        super(e),
          (this.m_countdownTimeout = 0),
          (this.m_fadeFinishTimeout = 0),
          (this.m_mailbox = new a.c()),
          this.m_mailbox.Init(u).then(() => {
            this.m_mailbox.RegisterHandler(
              p,
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
              null === (e = a.mb) ||
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
            null === (e = a.mb) || void 0 === e
              ? void 0
              : e.VRProperties.GetFloatProperty(a.ob, a.y.DashboardScale_Float))
            ? t
            : 1);
        return o.createElement(
          a.lb,
          { parent_path: "/user/head" },
          o.createElement(
            a.lb,
            { translation: { y: -0.05, z: -0.9 }, scale: n },
            o.createElement(
              a.Y,
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
    (h.kPanelHeight = 0.2),
      (h.kPixelWidth = 400),
      (h.kFadeDurationMs = 1e3),
      Object(r.b)(
        [s.bind],
        h.prototype,
        "OnBeginResetUniverseOriginCountdown",
        null
      ),
      Object(r.b)([s.bind], h.prototype, "CountdownTick", null),
      Object(r.b)([s.bind], h.prototype, "HideOverlay", null),
      (h = i = Object(r.b)([c.a], h));
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
      s = n("mrSG"),
      a = n("/i/y"),
      l = n("7wIv"),
      c = n.n(l),
      d = n("q1tI"),
      u = n("6YgL"),
      p = n("7uy8"),
      h = n("GXif"),
      m = n("Q+Z6"),
      g = n("okNM"),
      _ = n("YRJX"),
      b = n("2vnA"),
      v = n("X3sx"),
      y = n("p9CI"),
      f = n("nAcY");
    var S;
    !(function (e) {
      (e[(e.Dashboard = 0)] = "Dashboard"),
        (e[(e.LeftHand = 1)] = "LeftHand"),
        (e[(e.RightHand = 2)] = "RightHand"),
        (e[(e.World = 3)] = "World");
    })(S || (S = {}));
    let C = (i = class extends d.Component {
      constructor(e) {
        super(e),
          (this.m_mailbox = new a.c()),
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
          _.f,
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
                      return d.createElement(_.n, {
                        additionalClassNames: "ViewButton Fixed",
                        key: e,
                        label: e.toString(),
                        active:
                          (null === (t = this.state.desktopView) || void 0 === t
                            ? void 0
                            : t.currentDesktopIndex) == e,
                        title: Object(h.c)("#Desktop_X", e),
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
                  return d.createElement(_.n, {
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
              d.createElement(_.n, {
                iconUrl: "/dashboard/images/icons/icon_add.png",
                additionalClassNames: "AddWindow",
                title: Object(h.c)("#AddView"),
                onClick: this.props.onToggleWindowList,
                onMouseEnter: this.props.onClearPopupMenuTimeout,
                onMouseLeave: () => this.props.onStartPopupMenuTimeout(500),
              })
            ),
          d.createElement(
            "div",
            { className: "Section" },
            d.createElement(_.n, {
              iconUrl: this.props.bDarkMode
                ? "/dashboard/images/icons/svr_nightmode.svg"
                : "/dashboard/images/icons/svr_lightmode.svg",
              title: Object(h.c)("#Settings_ToggleDarkMode"),
              onClick: this.props.onToggleDarkMode,
            })
          )
        );
      }
    });
    (C.k_sMailboxName = "systemui_desktoptray"),
      (C = i = Object(s.b)([g.a], C));
    let k = (r = class extends d.Component {
      constructor(e) {
        super(e),
          (this.m_mailbox = new a.c()),
          (this.state = {
            bIsUsingSteamDesktop: !1,
            bIsReady: !1,
            desktopIndices: [],
            mapWindowInfo: new Map(),
            mapDesktopInfo: new Map(),
            sCurrentWindowOverlayKey: "",
            currentOverlayDockLocation: S.Dashboard,
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
              a.p.Normal,
              a.o.SingleLine,
              a.n.Minimal,
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
        (t != S.LeftHand && t != S.RightHand) ||
          (this.state.mapDesktopInfo.forEach((e) => {
            e.dockLocation == t && (e.dockLocation = S.Dashboard);
          }),
          this.state.mapWindowInfo.forEach((e) => {
            e.dockLocation == t && (e.dockLocation = S.Dashboard);
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
          dockLocation: S.Dashboard,
        }),
          this.setState({
            sCurrentWindowOverlayKey: e,
            currentOverlayDockLocation: S.Dashboard,
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
            this.state.mapDesktopInfo.set(n, { dockLocation: S.Dashboard }),
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
          a.lb,
          { parent_id: "DesktopControlBar" },
          d.createElement(
            a.Y,
            {
              curvature_origin_id: p.j,
              origin: a.s.TopCenter,
              interactive: !0,
              target_dpi_panel_id: _.q,
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
                  Object(h.c)("#Size")
                ),
                d.createElement(v.a, {
                  additionalClassName: "OverlayControlBarSlider",
                  min: 0.75,
                  max: 1.5,
                  value: this.desktopViewScale,
                  valueStyleVariant: v.c.OnHandle,
                  onChange: this.onDesktopScaleChange,
                  detents: [1],
                  renderValue: (e) => (100 * e).toFixed(0) + "%",
                }),
                d.createElement(_.n, {
                  iconUrl: "/dashboard/images/icons/svr_keyboard.svg",
                  additionalClassNames: "Keyboard",
                  onClick: this.ToggleKeyboard,
                }),
                d.createElement(_.n, {
                  iconUrl: "/dashboard/images/icons/mirror_left.png",
                  onClick: () => {
                    this.state.currentOverlayDockLocation != S.LeftHand
                      ? this.props.onDockOverlay(
                          this.sCurrentOverlayKey,
                          S.LeftHand
                        )
                      : this.props.onDockOverlay(
                          this.sCurrentOverlayKey,
                          S.Dashboard
                        );
                  },
                  enabled:
                    VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                      a.w.TrackedControllerRole_LeftHand
                    ) != a.nb,
                  active: this.state.currentOverlayDockLocation == S.LeftHand,
                }),
                d.createElement(_.n, {
                  iconUrl: "/dashboard/images/icons/mirror_right.png",
                  onClick: () => {
                    this.state.currentOverlayDockLocation != S.RightHand
                      ? this.props.onDockOverlay(
                          this.sCurrentOverlayKey,
                          S.RightHand
                        )
                      : this.props.onDockOverlay(
                          this.sCurrentOverlayKey,
                          S.Dashboard
                        );
                  },
                  enabled:
                    VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                      a.w.TrackedControllerRole_RightHand
                    ) != a.nb,
                  active: this.state.currentOverlayDockLocation == S.RightHand,
                }),
                d.createElement(_.n, {
                  iconUrl: "/dashboard/images/icons/icon_globe.png",
                  onClick: () => {
                    this.state.currentOverlayDockLocation != S.World
                      ? this.props.onDockOverlay(
                          this.sCurrentOverlayKey,
                          S.World
                        )
                      : this.props.onDockOverlay(
                          this.sCurrentOverlayKey,
                          S.Dashboard
                        );
                  },
                  active: this.state.currentOverlayDockLocation == S.World,
                }),
                this.props.bWindowViewEnabled &&
                  d.createElement(_.n, {
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
          this.state.currentOverlayDockLocation == S.World
        )
          return null;
        if (this.state.bIsUsingSteamDesktop)
          return d.createElement(a.S, {
            mountedId: Object(a.f)(p.E, "valve.steam.desktop"),
          });
        if (!this.state.bIsReady)
          return d.createElement(
            _.h,
            { visible: !0 },
            d.createElement(
              "div",
              { className: "NoDesktopFound" },
              d.createElement("h2", null, Object(h.c)("#DesktopViewsUpdating"))
            )
          );
        if (0 === this.state.desktopIndices.length)
          return d.createElement(
            _.h,
            { visible: !0 },
            d.createElement(
              "div",
              { className: "NoDesktopFound" },
              d.createElement("h2", null, Object(h.c)("#NoDesktopFound"))
            )
          );
        if (
          this.state.currentOverlayDockLocation == S.LeftHand ||
          this.state.currentOverlayDockLocation == S.RightHand
        )
          return d.createElement(
            _.h,
            { visible: !0 },
            d.createElement(
              "div",
              { className: "NoDesktopFound" },
              d.createElement(
                "h2",
                null,
                this.state.currentOverlayDockLocation == S.LeftHand &&
                  Object(h.c)("#DockedOnLeftController"),
                this.state.currentOverlayDockLocation == S.RightHand &&
                  Object(h.c)("#DockedOnRightController")
              ),
              d.createElement(
                u.a,
                {
                  className: "ButtonControl",
                  onClick: () => {
                    this.props.onDockOverlay(
                      this.sCurrentOverlayKey,
                      S.Dashboard
                    );
                  },
                },
                Object(h.c)("#DockHere")
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
                a.Y,
                {
                  overlay_key: this.state.sCurrentWindowOverlayKey,
                  height: 2 * t,
                  curvature_origin_id: p.j,
                  interactive: !0,
                  origin: a.s.BottomCenter,
                  debug_name: "System Desktop",
                },
                d.createElement(a.Z, { id: _.r, location: a.s.TopCenter }),
                d.createElement(a.S, {
                  mountedId: Object(a.f)(
                    p.E,
                    this.state.sCurrentWindowOverlayKey + ".cursor"
                  ),
                }),
                d.createElement(a.Z, {
                  id: "DesktopControlBar",
                  location: a.s.BottomCenter,
                })
              ),
              this.renderControlBar()
            )
          : d.createElement(
              d.Fragment,
              null,
              d.createElement(
                a.Y,
                {
                  overlay_key: "system.desktop." + this.currentDesktopIndex,
                  height: 2 * t,
                  curvature_origin_id: p.j,
                  interactive: !0,
                  origin: a.s.BottomCenter,
                  debug_name: "System Desktop",
                },
                d.createElement(a.Z, { id: _.r, location: a.s.TopCenter }),
                d.createElement(a.S, {
                  mountedId: Object(a.f)(
                    p.E,
                    "system.desktop." + this.currentDesktopIndex + ".cursor"
                  ),
                }),
                d.createElement(a.Z, {
                  id: "DesktopControlBar",
                  location: a.s.BottomCenter,
                })
              ),
              this.renderControlBar()
            );
      }
    });
    function O(e) {
      switch (e) {
        case S.LeftHand:
          return "/user/hand/left";
        case S.RightHand:
          return "/user/hand/right";
        default:
          return "";
      }
    }
    (k.k_sMailboxName = "systemui_desktopview"),
      Object(s.b)([b.f], k.prototype, "desktopCount", null),
      Object(s.b)([b.f], k.prototype, "sCurrentOverlayKey", null),
      Object(s.b)([b.f], k.prototype, "currentDesktopIndex", null),
      Object(s.b)([b.f], k.prototype, "currentWindowHwnd", null),
      Object(s.b)([b.f], k.prototype, "desktopViewScale", null),
      Object(s.b)([c.a], k.prototype, "dockOverlay", null),
      Object(s.b)([c.a], k.prototype, "onDesktopScaleChange", null),
      Object(s.b)([c.a], k.prototype, "onDesktopChange", null),
      Object(s.b)([c.a], k.prototype, "onDesktopViewUpdating", null),
      Object(s.b)([c.a], k.prototype, "onDesktopViewReady", null),
      Object(s.b)([c.a], k.prototype, "onWindowViewChange", null),
      Object(s.b)([c.a], k.prototype, "CloseWindow", null),
      Object(s.b)([c.a], k.prototype, "ToggleKeyboard", null),
      Object(s.b)([c.a], k.prototype, "OnKeyboardClosed", null),
      (k = r = Object(s.b)([g.a], k));
    let D = (o = class extends d.Component {
      constructor(e) {
        super(e),
          (this.state = {
            fOverlayScale: this.GetDefaultScaleForLocation(),
            xfTransform: null,
            sParent: O(this.props.dockLocation),
            bIsOutsideMaxDist: !1,
            destination: this.props.dockLocation,
          }),
          (this.m_bIsMoving = !1),
          (this.m_nMoveDeviceIndex = a.nb),
          (this.m_moveDeviceRole = a.w.TrackedControllerRole_Invalid);
      }
      GetDefaultScaleForLocation() {
        switch (this.props.dockLocation) {
          case S.Dashboard:
          case S.LeftHand:
          case S.RightHand:
            return 0.25;
          case S.World:
            return 0.5;
        }
      }
      SetInitialTransformForLocation() {
        if (this.props.xfInitial) {
          switch (this.props.dockLocation) {
            case S.LeftHand:
            case S.RightHand: {
              let e = this.props.xfInitial,
                t = this.state.fOverlayScale;
              Math.abs(e.scale.x - 2) < 0.1 &&
                (t = Math.min(2 * t, o.sfOverlayScaleMax)),
                (e.scale = { x: 1, y: 1, z: 1 }),
                this.setState({ xfTransform: e, fOverlayScale: t });
              break;
            }
            case S.World: {
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
        let e = Object(a.g)();
        switch (
          ((e.rotation = Object(a.I)({ x: -45, y: 0, z: 0 })),
          this.props.dockLocation)
        ) {
          case S.Dashboard:
          case S.LeftHand:
          case S.RightHand:
            this.setState({ xfTransform: e });
            break;
          case S.World:
            a.fb
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
              sParent: O(this.props.dockLocation),
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
        let e = VRHTML.GetPose(this.m_nMoveDeviceIndex, a.A.Standing),
          t = null;
        VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
          a.w.TrackedControllerRole_LeftHand
        ) != a.nb && (t = VRHTML.GetPose("/user/hand/left", a.A.Standing));
        let n = null;
        VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
          a.w.TrackedControllerRole_RightHand
        ) != a.nb && (n = VRHTML.GetPose("/user/hand/right", a.A.Standing));
        let i = [];
        switch (this.state.sParent) {
          case "/user/hand/left":
            n && i.push({ pose: n, location: S.RightHand });
            break;
          case "/user/hand/right":
            t && i.push({ pose: t, location: S.LeftHand });
            break;
          case "/user/head":
            t && i.push({ pose: t, location: S.LeftHand }),
              n && i.push({ pose: n, location: S.RightHand });
        }
        if (0 == i.length)
          return void setTimeout(this.computeDestination, o.sfMovePulseMS);
        let r = VRHTML.MultiplyTransforms(
          e.xfDeviceToAbsoluteTracking,
          this.state.xfTransform
        );
        i.forEach((e) => {
          let t = VRHTML.ChangeBasis(r, e.pose.xfDeviceToAbsoluteTracking);
          Object(a.N)(t.translation) > o.sfMaxDockDist
            ? this.state.bIsOutsideMaxDist ||
              (f.b.Instance.triggerHaptic(f.a.SlidingEdge),
              this.setState({ bIsOutsideMaxDist: !0, destination: S.World }))
            : (this.state.bIsOutsideMaxDist ||
                (this.props.dockLocation == S.World &&
                  this.state.destination == S.World)) &&
              (f.b.Instance.triggerHaptic(f.a.SlidingEdge),
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
          this.m_nMoveDeviceIndex == a.nb)
        )
          return;
        this.m_moveDeviceRole =
          VRHTML.VRSystem.GetControllerRoleForTrackedDeviceIndex(
            this.m_nMoveDeviceIndex
          );
        let e,
          t,
          n = VRHTML.GetPose(this.m_nMoveDeviceIndex, a.A.Standing);
        switch (this.props.dockLocation) {
          case S.LeftHand:
            if (
              VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                a.w.TrackedControllerRole_LeftHand
              ) == a.nb
            )
              return;
            e = VRHTML.GetPose("/user/hand/left", a.A.Standing);
            break;
          case S.RightHand:
            if (
              VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                a.w.TrackedControllerRole_RightHand
              ) == a.nb
            )
              return;
            e = VRHTML.GetPose("/user/hand/right", a.A.Standing);
            break;
          default:
            e = {
              xfDeviceToAbsoluteTracking: Object(a.g)(),
              vVelocity: { x: 0, y: 0, z: 0 },
              eTrackingResult: a.z.TrackingResult_Running_OK,
              bPoseIsValid: !0,
            };
        }
        switch (this.m_moveDeviceRole) {
          case a.w.TrackedControllerRole_LeftHand:
            t = "/user/hand/left";
            break;
          case a.w.TrackedControllerRole_RightHand:
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
            bIsOutsideMaxDist: this.props.dockLocation == S.World,
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
          this.state.destination == S.LeftHand
        ) {
          if (
            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
              a.w.TrackedControllerRole_LeftHand
            ) == a.nb
          )
            return;
          e = VRHTML.GetPose("/user/hand/left", a.A.Standing);
        }
        if (
          "/user/hand/right" == this.state.sParent ||
          this.state.destination == S.RightHand
        ) {
          if (
            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
              a.w.TrackedControllerRole_RightHand
            ) == a.nb
          )
            return;
          t = VRHTML.GetPose("/user/hand/right", a.A.Standing);
        }
        let n,
          i = {
            xfDeviceToAbsoluteTracking: Object(a.g)(),
            vVelocity: { x: 0, y: 0, z: 0 },
            eTrackingResult: a.z.TrackingResult_Running_OK,
            bPoseIsValid: !0,
          };
        switch (this.state.destination) {
          case S.LeftHand:
            n = e;
            break;
          case S.RightHand:
            n = t;
            break;
          default:
            n = i;
        }
        let r = VRHTML.GetPose(this.m_nMoveDeviceIndex, a.A.Standing),
          o = VRHTML.MultiplyTransforms(
            r.xfDeviceToAbsoluteTracking,
            this.state.xfTransform
          ),
          s = VRHTML.ChangeBasis(o, n.xfDeviceToAbsoluteTracking);
        this.setState({ xfTransform: s, sParent: O(this.state.destination) }),
          (this.m_bIsMoving = !1),
          this.props.onDockOverlay(
            this.props.sOverlayKey,
            this.state.destination,
            s
          ),
          window.removeEventListener("mouseup", this.endMove);
      }
      render() {
        if ("" == this.props.sOverlayKey || null == this.state.xfTransform)
          return null;
        if (!this.props.bVisible)
          return d.createElement(
            a.lb,
            {
              parent_path: this.state.sParent,
              transform: this.state.xfTransform,
              id: "xf_widget",
            },
            d.createElement(
              a.Y,
              {
                overlay_key: this.props.sOverlayKey,
                height: this.state.fOverlayScale,
                width: void 0,
                interactive: !0,
                origin: a.s.BottomCenter,
              },
              d.createElement(a.S, {
                mountedId: Object(a.f)(p.E, this.props.sOverlayKey + ".cursor"),
              })
            )
          );
        let e = VRHTML.VROverlay.FindOverlay(this.props.sOverlayKey),
          t = VRHTML.VROverlay.GetOverlayTextureSize(e),
          n = this.state.fOverlayScale,
          i = (n / t.unHeight) * t.unWidth,
          r = n + o.sfOverlayTrayHeight,
          s = Math.max(i, 0.175),
          l = r / 2 - o.sfOverlayTrayHeight;
        return d.createElement(
          a.lb,
          {
            parent_path: this.state.sParent,
            transform: this.state.xfTransform,
            id: "xf_widget",
          },
          d.createElement(
            a.lb,
            {
              translation: { y: l, z: -0.005 },
              scale: { x: s, y: r, z: 0.008 },
            },
            d.createElement(
              a.jb,
              { color: { r: 0.016, g: 0.017, b: 0.02 } },
              d.createElement(a.db, { solid: !0, source: "unit_cube" })
            )
          ),
          d.createElement(
            a.Y,
            {
              overlay_key: this.props.sOverlayKey,
              height: this.state.fOverlayScale,
              width: void 0,
              interactive: !0,
              origin: a.s.BottomCenter,
            },
            d.createElement(a.S, {
              mountedId: Object(a.f)(p.E, this.props.sOverlayKey + ".cursor"),
            })
          ),
          d.createElement(
            a.Y,
            {
              height: o.sfOverlayTrayHeight,
              width: void 0,
              interactive: !0,
              origin: a.s.TopCenter,
            },
            d.createElement(
              "div",
              { className: "WindowTray" },
              d.createElement(v.a, {
                additionalClassName: "WindowTraySlider",
                min: o.sfOverlayScaleMin,
                max: o.sfOverlayScaleMax,
                value: this.state.fOverlayScale,
                valueStyleVariant: v.c.OnHandle,
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
                      S.Dashboard
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
                a.lb,
                {
                  parent_path:
                    this.state.destination == S.LeftHand
                      ? "/user/hand/left"
                      : "/user/hand/right",
                },
                d.createElement(a.P, {
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
    (D.sfMaxDockDist = 0.4),
      (D.sfMovePulseMS = 100),
      (D.sfOverlayTrayHeight = 0.025),
      (D.sfOverlayScaleMin = 0.1),
      (D.sfOverlayScaleMax = 1),
      Object(s.b)([c.a], D.prototype, "onOverlayScaleChanged", null),
      Object(s.b)([c.a], D.prototype, "computeDestination", null),
      Object(s.b)([c.a], D.prototype, "startMove", null),
      Object(s.b)([c.a], D.prototype, "endMove", null),
      (D = o = Object(s.b)([g.a], D));
    var w,
      M = n("hcOo");
    let R = (w = class extends d.Component {
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
              className: Object(M.a)("PortraitAppImageContainer", [
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
    var E;
    (R.defaultProps = {
      fallbackImageUrl: "images/appimage_default_portrait.png",
    }),
      (R.s_failedImages = []),
      Object(s.b)([l.bind], R.prototype, "loadNextImage", null),
      Object(s.b)([l.bind], R.prototype, "onLoad", null),
      Object(s.b)([l.bind], R.prototype, "onError", null),
      (R = w = Object(s.b)([g.a], R)),
      (function (e) {
        (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
      })(E || (E = {}));
    const T = (e) =>
      d.createElement(
        "div",
        {
          className: Object(M.a)("ButtonContainer", E[e.side], [
            "Disabled",
            !1 === e.enabled,
          ]),
        },
        d.createElement(
          u.a,
          { className: "ButtonControl", onClick: e.onClick },
          e.side == E.Left
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
          s = this.m_bScrolling ? this.m_nCurrentScrollTarget : n.scrollLeft,
          a = o.getBoundingClientRect().left + n.scrollLeft,
          l = o.clientWidth,
          c = n.clientWidth,
          d = Math.floor(c / l) - 1,
          u = Math.round((s - a + r + 1) / l) + d * e - 0.4999,
          p = u > 0 ? u * l + a - r : 0;
        this.scrollToPosition(p);
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
            className: Object(M.a)(
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
                d.createElement(T, {
                  side: E.Left,
                  enabled: !this.state.bScrolledToStart,
                  onClick: this.onLeftButtonClick,
                }),
              null !== this.state.bScrolledToEnd &&
                d.createElement(T, {
                  side: E.Right,
                  enabled: !this.state.bScrolledToEnd,
                  onClick: this.onRightButtonClick,
                })
            )
        );
      }
    }
    Object(s.b)([c.a], I.prototype, "onAnimationFrame", null),
      Object(s.b)([c.a], I.prototype, "onScroll", null),
      Object(s.b)([c.a], I.prototype, "onLeftButtonClick", null),
      Object(s.b)([c.a], I.prototype, "onRightButtonClick", null);
    let P = class extends d.Component {
      constructor(e) {
        super(e),
          (this.m_scrollWatcher = new M.e()),
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
              className: Object(M.a)(
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
              d.createElement(R, Object.assign({}, e), this.props.children)
            )
          )
        );
      }
    };
    Object(s.b)([c.a], P.prototype, "buttonMouseEnter", null),
      Object(s.b)([c.a], P.prototype, "buttonMouseLeave", null),
      Object(s.b)([c.a], P.prototype, "onParentScrollStop", null),
      (P = Object(s.b)([g.a], P));
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
      B = n("vDqi"),
      N = n.n(B),
      A = n("uTck");
    function H() {
      return N.a
        .get(
          "https://steamcommunity.com/steamvr/ajaxgethomedata/?include_apps=1&include_free_apps=1&num_apps=20"
        )
        .then((e) => e.data);
    }
    const F = () =>
      d.createElement(
        u.a,
        {
          className: "ButtonControl WithIcon PanelTopRight",
          onClick: () => L.b.Instance.openBigPictureStore(null, L.a.QuickStore),
        },
        d.createElement("span", null, Object(h.c)("#BrowseAll")),
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
        A.a.instance.RecordUIEvent(
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
    U = Object(s.b)([g.a], U);
    class W extends d.Component {
      constructor(e) {
        super(e), (this.state = {});
      }
      render() {
        return d.createElement(
          _.h,
          { visible: this.props.visible, additionalClassNames: "QuickStore" },
          d.createElement(F, null),
          d.createElement(
            "h2",
            null,
            Object(h.c)("#StoreSection_TopSingleplayer")
          ),
          d.createElement(U, { section: j.Singleplayer }),
          d.createElement(
            "h2",
            null,
            Object(h.c)("#StoreSection_TopMultiplayer")
          ),
          d.createElement(U, { section: j.Multiplayer }),
          d.createElement("h2", null, Object(h.c)("#StoreSection_TopFree")),
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
          d.createElement("span", null, Object(h.c)("#BrowseAll")),
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
                : e.VROverlay.ShowDashboard(p.r);
            },
          },
          d.createElement("span", null, Object(h.c)("#WelcomeBrowseStore"))
        ),
      q = () =>
        d.createElement(
          u.a,
          {
            className: "ButtonControl Colorful WelcomeInstall",
            onClick: () =>
              L.b.Instance.openBigPictureLibrary(null, L.a.QuickLaunch),
          },
          d.createElement("span", null, Object(h.c)("#WelcomeInstall"))
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
              Object(h.c)("#WelcomeHeader")
            ),
            d.createElement(
              "div",
              { className: "QuickLaunchWelcomeMessage" },
              Object(h.c)("#WelcomeMessage")
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
        A.a.instance.RecordUIEvent(
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
            d.createElement("h2", null, Object(h.c)("#RecentlyPlayed")),
            d.createElement(V, { className: "TopRow", apps: n }),
            d.createElement(V, { className: "BottomRow", apps: i })
          );
        }
        return d.createElement(
          _.h,
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
        p.J,
        p.L,
      ])),
      (Y = z = Object(s.b)([g.a], Y));
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
          s = !(
            null != (e = m.d.settings.get("/settings/dashboard/arcadeMode")) &&
            e
          ),
          l = m.d.apps && m.d.apps.find((e) => e.key == t);
        let c = !1;
        switch (i) {
          case a.v.Quitting:
          case a.v.Starting:
          case a.v.Waiting:
            c = !0;
        }
        const p = ((e) => {
          if (null == e) return "";
          let t = e.image_path;
          return t.startsWith("/app/image?") && (t += "&aspect=portrait"), t;
        })(l);
        return d.createElement(
          _.h,
          {
            visible: this.props.visible,
            debugName: "nowplaying",
            additionalClassNames: "NowPlaying",
          },
          d.createElement(
            "div",
            { className: "ArtworkColumn" },
            d.createElement(R, { appkey: t, title: n, imageUrl: p })
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
                ? Object(h.c)("#Return_To_Home")
                : Object(h.c)("#Return_To_Game")
            ),
            s &&
              d.createElement(
                J.e,
                {
                  icon: J.f.PopOut,
                  onClick: this.onOpenAppControllerBindingSettings,
                },
                Object(h.c)("#Controller_Bindings")
              ),
            s &&
              d.createElement(
                J.e,
                { icon: J.f.PopOut, onClick: this.onOpenAppVideoSettings },
                Object(h.c)("#App_Video_Settings")
              ),
            !r &&
              o &&
              d.createElement(
                u.a,
                { className: "ButtonControl", onClick: this.onExitApp },
                Object(h.c)("#Exit_Game")
              )
          )
        );
      }
    }
    Object(s.b)([l.bind], ee.prototype, "onExitApp", null),
      Object(s.b)([l.bind], ee.prototype, "onReturnToGame", null),
      Object(s.b)(
        [l.bind],
        ee.prototype,
        "onOpenAppControllerBindingSettings",
        null
      ),
      Object(s.b)([l.bind], ee.prototype, "onOpenAppVideoSettings", null);
    var te,
      ne,
      ie,
      re = n("Vp/w"),
      oe = n("CzjV"),
      se = n("5/du"),
      ae = n("vvDA");
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
          (n = null === (t = e) || void 0 === t ? void 0 : t.startsWith(p.n)) &&
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
          (this.m_mailbox = new a.c()),
          (this.m_timeoutPopupMenuHide = 0),
          (this.m_refPopupMenu = d.createRef()),
          (this.m_appStateChangedAutorunDisposer = null),
          (this.m_refDesktopView = d.createRef()),
          (this.m_refDesktopTray = d.createRef()),
          (this.m_refOverlayTransform = d.createRef()),
          (this.m_refVolumeTray = d.createRef()),
          (this.m_sOverlayToSwitchToOnLoad = p.q),
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
          a.fb.getInstance(),
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
            n == a.F.AppLaunch_Unknown ||
            n == a.F.AppLaunch_Steam ||
            n == a.F.Unknown,
          r = m.d.settings.get(
            "/settings/dashboard/allowDashboardAutoLaunchWithSteamVRHome"
          ),
          o = m.d.settings.get("/settings/steamvr/enableHomeApp"),
          s = m.d.settings.get(p.m);
        ((i || (!r && o)) && !s) ||
          setTimeout(() => {
            var e;
            return null === (e = VRHTML) || void 0 === e
              ? void 0
              : e.VROverlay.ShowDashboard(null != s ? s : "");
          }, 500),
          (this.m_appStateChangedAutorunDisposer = Object(b.e)(() => {
            const e = $.a.Instance.SceneApplicationState != a.v.None;
            this.isOverlayActive(p.o) && !e && this.switchToOverlay(p.q);
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
            case p.C:
              oe.b.Instance.playSound(oe.a.ThemeSettings);
              break;
            case p.k:
              oe.b.Instance.playSound(oe.a.ThemeDesktop);
              break;
            case p.q:
              oe.b.Instance.playSound(oe.a.ThemeLibrary);
              break;
            case p.r:
              oe.b.Instance.playSound(oe.a.ThemeStore);
              break;
            case p.o:
              oe.b.Instance.playSound(oe.a.ThemeNowPlaying);
          }
        if (
          t.sActiveOverlayID != this.state.sActiveOverlayID &&
          this.isOverlayActive(p.G)
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
          Object(a.gb)(1),
          this.m_roomViewChangedEventHandle &&
            (this.m_roomViewChangedEventHandle.unregister(),
            (this.m_roomViewChangedEventHandle = null));
      }
      static getDashboardDistance() {
        if (te.s_dashboardUserDistance) return te.s_dashboardUserDistance;
        const e = m.d.settings.get(p.p);
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
          n = m.d.settings.get(p.p);
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
        const i = m.d.settings.get(p.p),
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
                      a.ob,
                      a.y.DashboardScale_Float
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
        this.switchToOverlay(p.k),
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
            bWindowViewEnabled: ((t = m.d.settings.get(p.v)), null == t || t),
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
          t == S.LeftHand || t == S.RightHand)
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
          t != S.Dashboard)
        ) {
          let i = {
            dockLocation: t,
            refOverlayWidget: d.createRef(),
            xfInitial: n,
          };
          this.state.mapOverlayState.set(e, i);
        } else if (e.startsWith(p.K)) {
          const t = Number.parseInt(e.substring(p.K.length + 1));
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
          a.lb,
          { scale: { x: 1, y: 1 } },
          d.createElement(a.S, { mountedId: e.mountable_id })
        );
      }
      computeFilteredOverlayTabs() {
        if (this.screenshotMode) return [];
        let e = [];
        for (let t in this.m_mapExternalOverlays) {
          const n = this.m_mapExternalOverlays[t];
          (void 0 === n.icon_overlay_key && null == n.icon_uri) ||
            (n.summon_overlay_key &&
              n.summon_overlay_key != p.C &&
              n.summon_overlay_key != p.G &&
              n.summon_overlay_key != p.H &&
              (n.summon_overlay_key.startsWith(p.K) ||
                n.summon_overlay_key.startsWith(p.M) ||
                n.summon_overlay_key.startsWith(p.I) ||
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
          case p.G:
            L.b.Instance.latchBigPictureEntryPoint();
            break;
          case p.q:
            this.m_bQuickLaunchShouldReturnToBigPicture = !1;
            break;
          case p.r:
            this.m_bQuickStoreShouldReturnToBigPicture = !1;
            break;
          case p.h:
            let t = {
                type: "show_app_binding",
                app_key:
                  null === (n = VRHTML) || void 0 === n
                    ? void 0
                    : n.VRApplications.GetSceneApplicationKey(),
              },
              i = "bindingui/" + a.H[Object(a.i)()];
            this.m_mailbox.SendMessage(i, t),
              (this.m_bQuickStoreShouldReturnToBigPicture = !1),
              (e = p.c);
        }
        if (e.startsWith(p.K)) {
          const t = Number.parseInt(e.substring(p.K.length + 1));
          Number.isSafeInteger(t) &&
            (null === (i = this.m_refDesktopView.current) ||
              void 0 === i ||
              i.onDesktopChange(t)),
            (e = p.k);
        }
        let o = this.findDashboardTab(e);
        return o
          ? (this.computeFilteredOverlayTabs().includes(o) &&
              m.d.SetSettingsValue(
                p.z,
                null != (r = o.summon_overlay_key) ? r : ""
              ),
            this.setState({ sActiveOverlayID: o.mountable_id }),
            A.a.instance.RecordUIEvent(
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
        this.getActiveOverlaySummonKey() == p.A && this.switchToOverlay(p.q);
      }
      show(e) {
        if (this.isShown()) return;
        A.a.instance.StartDashboardSession(e);
        this.m_mailbox.SendMessage("desktopview", {
          type: "request_window_list_update",
        });
        const t = $.a.Instance.SceneAppKey,
          n = $.a.Instance.SceneAppIsHome;
        t &&
          t != this.state.sLastShownAppKey &&
          (this.setState({ sLastShownAppKey: t }),
          this.switchToOverlay(n ? p.q : p.o)),
          this.setState({ bShown: !0 });
        let i = { type: te.k_sRequestDashboardTabsMessage };
        this.m_mailbox.SendMessage("vrcompositor_systemlayer", i),
          Object(a.cb)();
      }
      hide(e) {
        this.isShown() &&
          (this.setState({ bShown: !1, eShowPopupMenu: ie.None }),
          A.a.instance.EndDashboardSession(e));
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
        !this.isOverlayActive(p.G)
          ? L.b.Instance.openBigPictureThroughLastEntryPoint()
          : this.switchToOverlay(p.q);
      }
      onQuickStoreButtonClick() {
        this.m_bQuickStoreShouldReturnToBigPicture &&
        L.b.Instance.lastBigPictureEntryPoint == L.a.QuickStore &&
        !this.isOverlayActive(p.G)
          ? L.b.Instance.openBigPictureThroughLastEntryPoint()
          : this.switchToOverlay(p.r);
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
              a.y.DeviceCanPowerOff_Bool
            ));
        }
        const r = $.a.Instance.SceneAppName,
          o = $.a.Instance.SceneAppIsHome;
        let s, l;
        (s = o
          ? Object(h.c)("#Exit_SteamVR_Home")
          : r
          ? Object(h.c)("#PowerMenuQuitSceneApp", r)
          : Object(h.c)("#PowerMenuQuitSceneApp_NoApp")),
          (l = o
            ? "/dashboard/images/icons/svr_svrhome_quit_alt.svg"
            : "/dashboard/images/icons/svr_app_quit.svg");
        const c = this.findDashboardTab(p.G);
        return this.renderPopupMenu(
          d.createElement(
            d.Fragment,
            null,
            c &&
              d.createElement(_.i, {
                label: Object(h.c)("#PowerMenuSteamOverlay"),
                lineBelow: !0,
                onClick: () => {
                  this.switchToOverlay(p.G), this.showPopupMenu(ie.None);
                },
              }),
            i &&
              d.createElement(_.i, {
                label: Object(h.c)("#PowerMenuTurnOffController"),
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
              d.createElement(_.i, {
                label: s,
                imageUrl: l,
                onClick: () => {
                  var e;
                  null === (e = VRHTML) || void 0 === e || e.QuitSceneApp(),
                    this.showPopupMenu(ie.None);
                },
              }),
            d.createElement(_.i, {
              label: Object(h.c)("#PowerMenuExitVR"),
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
          (r.summon_overlay_key == p.G &&
            (L.b.Instance.lastBigPictureEntryPoint == L.a.QuickLaunch
              ? (r = this.findDashboardTab(p.q))
              : L.b.Instance.lastBigPictureEntryPoint == L.a.QuickStore &&
                (r = this.findDashboardTab(p.r))),
          r.summon_overlay_key == p.k)
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
            return d.createElement(_.m, {
              name:
                null === (n = this.state.mapWindows.get(e)) || void 0 === n
                  ? void 0
                  : n.title,
              iconUrl: this.getDashboardIconUri(r),
            });
          }
          return d.createElement(_.m, {
            name:
              "Desktop " +
              (null === (i = this.m_refDesktopView.current) || void 0 === i
                ? void 0
                : i.currentDesktopIndex),
            iconUrl: this.getDashboardIconUri(r),
          });
        }
        return d.createElement(_.m, {
          name: r.tab_name,
          iconUrl: this.getDashboardIconUri(r),
        });
      }
      get isDarkMode() {
        return this.state.bDesktopDarkMode && this.isOverlayActive(p.k);
      }
      get screenshotMode() {
        return m.d.settings.get(p.p) == ne.Screenshot_Only;
      }
      getCollisionBoundsFadeVisualizationElements() {
        var e, t;
        const n =
          null === (e = VRHTML) || void 0 === e
            ? void 0
            : e.VRChaperoneSetup.GetLiveCollisionBoundsInfo();
        if (!n) return [];
        let i = [];
        const r = null != (t = m.d.settings.get(p.g)) ? t : 0.7;
        for (let e of n) {
          let t = Object(a.W)(Object(a.ib)(e[3], e[0])),
            n = Object(a.W)(Object(a.ib)(e[1], e[0])),
            o = Object(a.h)(t, n),
            s = Object(a.R)(Object(a.b)(t, n, o)),
            l = Object(a.N)(Object(a.ib)(e[0], e[3]));
          if (l < 0.4) continue;
          let c = Math.max(1, Math.floor(l));
          for (let t = 0; t < c; t++) {
            let n = (t + 1) / (c + 1),
              o = Object(a.g)();
            (o.rotation = s),
              (o.translation = Object(a.O)(n, e[0], e[3])),
              (o.scale = { x: 0.005, y: 0.005, z: r });
            let l = d.createElement(
              a.lb,
              { transform: o },
              d.createElement(
                a.X,
                { value: 0.25 },
                d.createElement(
                  a.jb,
                  { color: { r: 0.2, g: 0.2, b: 0.2 } },
                  d.createElement(a.db, {
                    source: "laser_pointer",
                    wireframe: !1,
                    culling: a.u.Backface,
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
              this.getActiveOverlaySummonKey() == p.C,
            t = m.d.settings.get(
              "/settings/dashboard/omitDashboardFadeWithSteamVRHome"
            ),
            n = !$.a.Instance.SceneAppIsHome || !t;
          this.screenshotMode
            ? Object(a.gb)(0)
            : n && !e
            ? Object(a.gb)(this.isDarkMode ? 0.02 : 0.15)
            : Object(a.gb)(1);
        } else Object(a.gb)(1);
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
          ? _.r
          : this.state.sActiveOverlayID + "_TopCenter";
      }
      renderExternalOverlayControlBarButton(e) {
        const t = this.getDashboardIconUri(e),
          n = _.c.Center;
        return d.createElement(_.b, {
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
          (this.isOverlayActive(p.k) ||
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
          this.isOverlayActive(p.k) ||
          (null === (e = this.getActiveOverlaySummonKey()) || void 0 === e
            ? void 0
            : e.startsWith("system.window"))
        );
      }
      renderControlBar(e, t) {
        var n, i, r, o, s, l, c, g;
        const b = this.isDarkMode ? { r: 0.05, g: 0.05, b: 0.05 } : null,
          v = this.isDarkMode ? { r: 0.25, g: 0.25, b: 0.25 } : null,
          y = te.k_nControlBarWidthMeters,
          f =
            null ==
              (n = m.d.settings.get("/settings/dashboard/showPowerOptions")) ||
            n,
          S =
            null == (i = m.d.settings.get("/settings/dashboard/showDesktop")) ||
            i,
          k =
            null ==
              (r = m.d.settings.get("/settings/dashboard/showQuickStore")) || r,
          O = !(
            null != (o = m.d.settings.get("/settings/dashboard/arcadeMode")) &&
            o
          ),
          D = $.a.Instance.SceneApplicationState,
          w = $.a.Instance.SceneAppIsHome,
          M = $.a.Instance.SceneAppKey;
        let R = "images/appimage_default.png";
        M && (R = "/app/image?app_key=" + M);
        const E = null != (s = m.d.settings.get(p.d)) && s,
          T = null != (l = m.d.settings.get(p.e)) ? l : 0,
          I = E && T > 0;
        let P = { y: -0.25, z: 0 };
        return (
          this.isOverlayActive(p.k) && (P = { y: -0.4, z: 0 }),
          d.createElement(
            a.jb,
            { color: b },
            d.createElement(
              a.Y,
              {
                curvature_origin_id: p.j,
                width: y,
                interactive: !1,
                debug_name: "ControlBarBackground",
                sampler: a.t.SingleTap,
                reflect: 0.05,
              },
              d.createElement("div", { className: "ControlBarBackground" })
            ),
            d.createElement(
              a.lb,
              { translation: { z: 1e-5 } },
              d.createElement(
                a.Y,
                {
                  curvature_origin_id: p.j,
                  width: y,
                  interactive: !0,
                  id: _.q,
                  debug_name: "Controls",
                },
                d.createElement(
                  u.b,
                  { className: "ControlBar MainControlBar" },
                  d.createElement(
                    "div",
                    { className: "Section Left" },
                    f &&
                      d.createElement(_.k, {
                        imageUrl: "/dashboard/images/icons/svr_menu_c.svg",
                        label: Object(h.c)("#Menu"),
                        style: _.d.Small,
                        onClick: () => this.showPopupMenu(ie.Power),
                        onMouseEnter: this.clearPopupMenuTimeout,
                        onMouseLeave: () => this.startPopupMenuTimeout(500),
                      }),
                    S &&
                      d.createElement(_.k, {
                        style: _.d.Small,
                        imageUrl: "/dashboard/images/icons/svr_desktop_alt.svg",
                        label: Object(h.c)("#Desktops"),
                        active: this.isDesktopTrayActive(),
                        onClick: () => this.switchToOverlay(p.k),
                      }),
                    d.createElement(
                      _.e,
                      { style: _.d.Small },
                      d.createElement(
                        d.Fragment,
                        null,
                        e.map(this.renderExternalOverlayControlBarButton),
                        t.length > 0 &&
                          d.createElement(_.b, {
                            imageUrl: "/dashboard/images/icons/svr_more.svg",
                            label: Object(h.c)("#X_More_Overlays", t.length),
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
                    d.createElement(_.k, {
                      label: Object(h.c)("#Library"),
                      imageUrl: "/dashboard/images/icons/svr_items.svg",
                      active:
                        this.isOverlayActive(p.q) ||
                        (this.isOverlayActive(p.G) &&
                          L.b.Instance.lastBigPictureEntryPoint ==
                            L.a.QuickLaunch),
                      style: _.d.Large,
                      onClick: this.onQuickLaunchButtonClick,
                    }),
                    D != a.v.None &&
                      d.createElement(
                        "div",
                        { className: "NowPlayingSpacer" },
                        d.createElement(
                          re.a,
                          { allowableParentSelectors: [".DashboardMain"] },
                          d.createElement(
                            a.jb,
                            { color: b },
                            d.createElement(
                              a.lb,
                              { translation: { z: 0.02 } },
                              d.createElement(
                                a.Y,
                                {
                                  debug_name: "NowPlayingButton",
                                  interactive: !0,
                                  target_dpi_panel_id: _.q,
                                  curvature_origin_id: p.j,
                                },
                                d.createElement(
                                  "div",
                                  { className: "ControlBar" },
                                  d.createElement(_.k, {
                                    label: w
                                      ? Object(h.c)("#SteamVR_Home")
                                      : Object(h.c)("#Now_Playing"),
                                    active: this.isOverlayActive(p.o),
                                    style: _.d.App,
                                    imageUrl: R,
                                    onClick: () => this.switchToOverlay(p.o),
                                  })
                                )
                              )
                            )
                          )
                        )
                      ),
                    k &&
                      d.createElement(_.k, {
                        label: Object(h.c)("#Store"),
                        imageUrl: "/dashboard/images/icons/svr_store.svg",
                        additionalClassNames: "Store",
                        active:
                          this.isOverlayActive(p.r) ||
                          (this.isOverlayActive(p.G) &&
                            L.b.Instance.lastBigPictureEntryPoint ==
                              L.a.QuickStore),
                        style: _.d.Large,
                        onClick: this.onQuickStoreButtonClick,
                      })
                  ),
                  d.createElement(
                    "div",
                    { className: "Section Right" },
                    d.createElement(
                      _.e,
                      { style: _.d.Small },
                      d.createElement(_.j, null),
                      I &&
                        d.createElement(_.b, {
                          imageUrl: "/dashboard/images/icons/svr_eye.svg",
                          label: Object(h.c)("#Toggle_Room_View"),
                          onClick: this.onToggleRoomView,
                          active:
                            null === (c = VRHTML) || void 0 === c
                              ? void 0
                              : c.VRControlPanel.GetCameraRoomViewVisible(),
                          enabled:
                            null === (g = VRHTML) || void 0 === g
                              ? void 0
                              : g.VROverlayInternal.HasCameraRoomViewCapability(),
                        }),
                      d.createElement(_.o, {
                        active: this.state.eShowPopupMenu == ie.Volume,
                        refVolumeTray: this.m_refVolumeTray,
                        onShowTray: () => this.showPopupMenu(ie.Volume),
                        onHideTray: () => this.showPopupMenu(ie.None),
                        onMouseEnter: this.clearPopupMenuTimeout,
                        onMouseLeave: () => this.startPopupMenuTimeout(500),
                      })
                    ),
                    O &&
                      d.createElement(_.k, {
                        imageUrl: "/dashboard/images/icons/svr_settings.svg",
                        active: this.isOverlayActive(p.C),
                        enabled: this.hasOverlay(p.C),
                        label: Object(h.c)("#Settings"),
                        style: _.d.Small,
                        centerPanelAnchorID: "VolumeButton",
                        onClick: () => this.switchToOverlay(p.C),
                      })
                  )
                ),
                d.createElement(C, {
                  ref: this.m_refDesktopTray,
                  position: 0,
                  visible: this.isDesktopTrayActive(),
                  tintColor: v,
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
                d.createElement(_.p, {
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
              a.lb,
              { translation: P, scale: { y: 1.5, x: 1.5 } },
              d.createElement(a.S, {
                mountedId: Object(a.f)(p.E, "system.keyboard"),
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
            d.createElement(D, {
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
            a.j,
            {
              tabName: Object(h.c)("#Library"),
              iconUri: "/dashboard/images/icons/svr_items.svg",
              summonOverlayKey: p.q,
            },
            d.createElement(Y, {
              visible: this.state.bShown && this.isOverlayActive(p.q),
              onGameLaunched: () => {
                var e;
                null === (e = VRHTML) ||
                  void 0 === e ||
                  e.VRDashboardManager.HideDashboard("game_launched");
              },
            })
          ),
          d.createElement(
            a.j,
            {
              tabName: Object(h.c)("#Store"),
              iconUri: "/dashboard/images/icons/svr_store.svg",
              summonOverlayKey: p.r,
            },
            d.createElement(W, {
              visible: this.state.bShown && this.isOverlayActive(p.r),
            })
          ),
          d.createElement(
            a.j,
            { tabName: Object(h.c)("#Now_Playing"), summonOverlayKey: p.o },
            d.createElement(ee, {
              visible: this.state.bShown && this.isOverlayActive(p.o),
              onExitGame: () => this.switchToOverlay(p.q),
            })
          ),
          d.createElement(
            a.j,
            {
              summonOverlayKey: p.k,
              tabName:
                o > 1 ? Object(h.c)("#Desktop_X", r) : Object(h.c)("#Desktop"),
              iconUri: "/dashboard/images/icons/svr_desktop_alt.svg",
            },
            d.createElement(k, {
              visible: this.state.bShown && this.isOverlayActive(p.k),
              onDockOverlay: this.onDockOverlay,
              mapWindows: this.state.mapWindows,
              bWindowViewEnabled: this.state.bWindowViewEnabled,
              ref: this.m_refDesktopView,
            })
          ),
          d.createElement(se.a, {
            visible: this.state.bShown && this.isOverlayActive(p.C),
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
          const n = m.d.settings.get(p.z);
          (i = [
            ((e = t.find((e) => e.summon_overlay_key == n)),
            null != e ? e : t[0]),
          ]),
            (r = t.filter((e) => !i.includes(e)));
        } else i = t;
        let o = null;
        this.isDesktopOverlayActive() && (o = 2048);
        let s = [];
        this.state.mapWindows.forEach((e) => {
          "" == e.overlay_key && s.push(e);
        });
        const l = this.screenshotMode,
          c = l ? 2.5 : 1.8;
        return d.createElement(
          a.k,
          null,
          d.createElement(a.lb, { id: p.j, translation: { z: c } }),
          d.createElement(
            a.lb,
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
              a.lb,
              { parent_id: this.statusBarAnchorID, translation: { y: 0.008 } },
              d.createElement(
                a.jb,
                { color: n },
                d.createElement(
                  a.Y,
                  {
                    curvature_origin_id: p.j,
                    origin: a.s.BottomCenter,
                    interactive: !1,
                    target_dpi_panel_id: _.q,
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
                      d.createElement(_.l, {
                        role: a.w.TrackedControllerRole_LeftHand,
                        style: ae.b.HorizontalPips,
                      })
                    ),
                    d.createElement(
                      "div",
                      { className: "Section Center" },
                      d.createElement(_.l, {
                        deviceIndex: a.ob,
                        style: ae.b.VerticalBattery,
                      }),
                      d.createElement(_.g, null)
                    ),
                    d.createElement(
                      "div",
                      { className: "Section Right" },
                      d.createElement(_.l, {
                        role: a.w.TrackedControllerRole_RightHand,
                        style: ae.b.HorizontalPips,
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
              a.lb,
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
              a.lb,
              { translation: { y: -1.2, z: 0.15 } },
              d.createElement(
                a.lb,
                { rotation: { x: -35 } },
                this.renderControlBar(i, r)
              ),
              this.state.eShowPopupMenu == ie.Power &&
                d.createElement(
                  a.lb,
                  {
                    translation: { x: -0.4, y: 0.15, z: 0.05 },
                    rotation: { y: 19 },
                  },
                  d.createElement(
                    a.Y,
                    {
                      curvature_origin_id: p.j,
                      height: void 0,
                      width: 0.925,
                      interactive: !0,
                      origin: a.s.BottomRight,
                      debug_name: "Power Menu",
                      sort_depth_bias: -0.1,
                    },
                    this.renderPowerMenu()
                  )
                ),
              this.state.eShowPopupMenu == ie.ExternalOverlays &&
                d.createElement(
                  a.lb,
                  {
                    translation: { x: 0.2, y: 0.15, z: 0.05 },
                    rotation: { y: 6 },
                  },
                  d.createElement(
                    a.Y,
                    {
                      curvature_origin_id: p.j,
                      height: void 0,
                      width: 0.925,
                      interactive: !0,
                      origin: a.s.BottomRight,
                      debug_name: "OverlaysList",
                      sort_depth_bias: -0.1,
                    },
                    this.renderPopupMenu(
                      d.createElement(
                        d.Fragment,
                        null,
                        " ",
                        r.map((e) =>
                          d.createElement(_.i, {
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
                  a.lb,
                  {
                    translation: { x: 1.25, y: -0.1, z: 0.35 },
                    rotation: { y: -16 },
                  },
                  d.createElement(
                    a.Y,
                    {
                      curvature_origin_id: p.j,
                      height: void 0,
                      width: 0.925,
                      interactive: !0,
                      origin: a.s.BottomRight,
                      debug_name: "WindowList",
                      sort_depth_bias: -0.1,
                    },
                    this.renderPopupMenu(
                      d.createElement(
                        d.Fragment,
                        null,
                        " ",
                        s.map((e) =>
                          d.createElement(_.i, {
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
      Object(s.b)(
        [l.bind],
        de.prototype,
        "OnSetDashboardFadeSuppression",
        null
      ),
      Object(s.b)([l.bind], de.prototype, "onRoomViewChanged", null),
      Object(s.b)(
        [l.bind],
        de.prototype,
        "OnSetDashboardForceBoundsVisible",
        null
      ),
      Object(s.b)([l.bind], de.prototype, "onUpdateDashboardTabs", null),
      Object(s.b)([l.bind], de.prototype, "onWindowViewCreated", null),
      Object(s.b)([l.bind], de.prototype, "onWindowViewDestroyed", null),
      Object(s.b)([l.bind], de.prototype, "onUpdateWindowList", null),
      Object(s.b)([l.bind], de.prototype, "onUpdateDebugInfo", null),
      Object(s.b)([l.bind], de.prototype, "onDockOverlay", null),
      Object(s.b)([l.bind], de.prototype, "show", null),
      Object(s.b)([l.bind], de.prototype, "hide", null),
      Object(s.b)([l.bind], de.prototype, "onToggleRoomView", null),
      Object(s.b)([l.bind], de.prototype, "onQuickLaunchButtonClick", null),
      Object(s.b)([l.bind], de.prototype, "onQuickStoreButtonClick", null),
      Object(s.b)([l.bind], de.prototype, "renderPowerMenu", null),
      Object(s.b)([l.bind], de.prototype, "startPopupMenuTimeout", null),
      Object(s.b)([l.bind], de.prototype, "clearPopupMenuTimeout", null),
      Object(s.b)([l.bind], de.prototype, "showPopupMenu", null),
      Object(s.b)([l.bind], de.prototype, "popupMenuMouseLeave", null),
      Object(s.b)([l.bind], de.prototype, "popupMenuMouseUp", null),
      Object(s.b)([b.f], de.prototype, "isDarkMode", null),
      Object(s.b)([b.f], de.prototype, "screenshotMode", null),
      Object(s.b)(
        [l.bind],
        de.prototype,
        "renderExternalOverlayControlBarButton",
        null
      ),
      Object(s.b)([l.bind], de.prototype, "isDesktopTrayActive", null),
      Object(s.b)([l.bind], de.prototype, "isDesktopOverlayActive", null),
      Object(s.b)([b.m], de, "s_dashboardUserDistance", void 0),
      Object(s.b)([b.m], de, "s_dashboardUserScale", void 0),
      (de = te = Object(s.b)([g.a], de));
  },
  Lkzh: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "BindingDeviceCallouts", function () {
        return O;
      }),
      n.d(t, "BindingCallouts", function () {
        return D;
      }),
      n.d(t, "BindingCalloutContainer", function () {
        return w;
      });
    var i,
      r,
      o,
      s = n("mrSG"),
      a = n("q1tI"),
      l = n("i8i4"),
      c = n("7wIv"),
      d = n("/i/y"),
      u = n("MYgy"),
      p = n("GXif"),
      h = n("uFkT"),
      m = n("Kysl"),
      g = n("6YgL"),
      _ = n("Gmup"),
      b = n("Q+Z6"),
      v = n("okNM"),
      y = n("7uy8");
    function f(e, t) {
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
    function S(e) {
      switch (e) {
        case "north":
        case "south":
        case "east":
        case "west":
        case "center":
          return "dpad";
        case "click":
        case "single":
        case "double":
        case "long":
        case "held":
        default:
          return "button";
      }
    }
    class C extends a.Component {
      constructor(e) {
        super(e), (this.state = {});
      }
      renderSlot(e, t) {
        let n,
          i = f(this.props.controllerType, e);
        n = i
          ? a.createElement("img", { className: "BindingCalloutIcon", src: i })
          : a.createElement("div", { className: "BindingCalloutIcon" });
        let r,
          o = (function (e) {
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
          (r = o
            ? a.createElement("img", {
                className: "BindingCalloutModifierIcon",
                src: o,
              })
            : a.createElement("div", {
                className: "BindingCalloutModifierIcon",
              })),
          a.createElement(
            "div",
            { className: "BindingCalloutContents", key: t },
            n,
            r,
            a.createElement(
              "div",
              { className: "BindingCalloutLabelContainer" },
              a.createElement(
                "div",
                { className: "Label" },
                e.localized_action_name
              ),
              a.createElement(
                "div",
                { className: "BindingCalloutModeSlot" },
                this.props.localizedInputName,
                " : ",
                Object(p.c)("#SourceInputMode_" + e.slot)
              )
            )
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
        return a.createElement(
          "div",
          { className: "BindingCalloutContainer" },
          a.createElement(d.e, {
            id: n,
            sDevicePath: this.props.devicePath,
            sInputPath: this.props.inputCallout.input_path,
            key: n,
          }),
          a.createElement(
            "div",
            { className: t },
            this.props.inputCallout.slot_callouts.map((e, t) =>
              this.renderSlot(e, String(t))
            ),
            a.createElement(
              "div",
              { className: "CalloutAnchorPoint" },
              a.createElement(
                d.Z,
                null,
                this.props.inputActive &&
                  a.createElement(d.P, {
                    target_id: n,
                    thickness: 0.002,
                    start_buffer: 0,
                    end_buffer: 0,
                  })
              )
            )
          )
        );
      }
    }
    class k extends a.Component {
      constructor(e) {
        super(e), (this.state = {});
      }
      render() {
        let e = [],
          t = [];
        for (let n of this.props.chordCallout.inputs) {
          let i = n.device_path + n.input_path + n.slot,
            r = {
              device_path: n.device_path,
              input_path: n.input_path,
              mode: S(n.slot),
              slot: n.slot,
              localized_action_name:
                this.props.chordCallout.localized_action_name,
            };
          e.length > 0 &&
            e.push(
              a.createElement(
                "div",
                { className: "ChordCalloutPlus", key: "plus" + e.length },
                "+"
              )
            ),
            e.push(
              a.createElement("img", {
                className: "BindingCalloutIcon",
                key: i + "_icon",
                src: f(this.props.controllerType, r),
              })
            ),
            t.push(
              a.createElement(
                "div",
                { className: "BindingCalloutModeSlot", key: i + "_text" },
                h.a.LocalizeControllerString(
                  this.props.controllerTypeInfo,
                  n.input_path
                ),
                " : ",
                Object(p.c)("#SourceInputMode_" + n.slot)
              )
            );
        }
        let n = "ChordCalloutContainer";
        return (
          this.props.inputActive && (n += " CalloutInputActive"),
          a.createElement(
            "div",
            { className: n },
            a.createElement("div", { className: "ChordCalloutHeader" }, e),
            a.createElement(
              "div",
              { className: "ChordCalloutBody" },
              a.createElement(
                "div",
                { className: "Label" },
                this.props.chordCallout.localized_action_name
              ),
              t
            )
          )
        );
      }
    }
    class O extends a.Component {
      constructor(e) {
        super(e),
          (this.m_mailbox = new d.c()),
          (this.m_sMailboxName = void 0),
          (this.m_sMailboxName =
            "devicecallout/" +
            this.props.device.device_path.replace(/\//g, "_")),
          this.m_mailbox.Init(this.m_sMailboxName).then(() => {
            this.m_mailbox.RegisterHandler(
              "input_active_state",
              this.OnInputActiveState
            );
            let e = {
              type: "request_input_in_use_updates",
              device_path: this.props.device.device_path,
              mailbox: this.m_sMailboxName,
            };
            this.m_mailbox.SendMessage("input_server", e);
          });
        let t = {};
        for (let e of Object.keys(this.props.device.input_callouts)) t[e] = !1;
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
        this.m_mailbox.SendMessage("input_server", e);
      }
      render() {
        if (!VRHTML) return null;
        if (!VRHTML.VRSystem.IsDevicePathValid(this.props.device.device_path))
          return null;
        let e = -0.05,
          t = { x: -0.08, y: 0.05, z: 0.12 },
          n = !0;
        "/user/hand/left" == this.props.device.device_path &&
          ((t.x = -t.x), (e = -e), (n = !1));
        let i = h.a.GetControllerTypeInfo(this.props.controllerType);
        if (!i) return null;
        let r = [],
          o = Object.keys(this.props.device.input_callouts);
        for (let e of o) {
          let t = this.props.device.input_callouts[e],
            s = (t.slot_callouts.length, e);
          i && (s = h.a.LocalizeControllerString(i, e));
          let l = i.input_source[e],
            c = 999;
          l && l.order && (c = l.order);
          let d = a.createElement(C, {
            devicePath: this.props.device.device_path,
            inputCallout: t,
            leftAlign: n,
            inputActive: 1 == o.length || this.state.input_state[t.input_path],
            localizedInputName: s,
            controllerType: this.props.controllerType,
            key: this.props.device.device_path + e,
          });
          r.push({ order: c, callout: d });
        }
        r.sort((e, t) => e.order - t.order);
        let s = r.map((e) => e.callout),
          l = [];
        for (let e of this.props.device.chords) {
          let t = !1;
          for (let n of e.inputs) t = t || this.state.input_state[n.input_path];
          l.push(
            a.createElement(k, {
              controllerTypeInfo: i,
              chordCallout: e,
              controllerType: this.props.controllerType,
              key: "chord_" + l.length,
              inputActive: t,
            })
          );
        }
        return a.createElement(
          d.lb,
          { parent_path: this.props.device.device_path },
          a.createElement(
            d.d,
            { vOffset: t },
            a.createElement(
              d.K,
              null,
              a.createElement(
                d.lb,
                { rotation: { y: n ? 7 : -7 } },
                a.createElement(
                  d.lb,
                  { translation: { x: e } },
                  a.createElement(
                    d.Y,
                    { width: 0.1 },
                    a.createElement(
                      "div",
                      { className: "FlexColumn BindingCalloutColumn" },
                      s,
                      l
                    )
                  )
                )
              )
            )
          )
        );
      }
    }
    Object(s.b)([c.bind], O.prototype, "OnInputActiveState", null);
    class D extends a.Component {
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
            for (let r = 0; r < e; r++) {
              let o = t + ((n - t) * r) / (e - 1),
                s = { x: -Math.cos(o), y: Math.sin(o) };
              i.push(s);
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
            let r = this.ComputeActualRect(e[n], t),
              o = this.ComputeActualRect(e[i], t);
            if (this.HasIntersection(r, o)) return !0;
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
          ? a.createElement(
              "div",
              { className: "DeviceCalloutList" },
              Object.keys(this.props.devices).map((e) =>
                a.createElement(
                  "div",
                  { key: e, className: "DeviceCalloutListEntry" },
                  a.createElement(O, {
                    device: this.props.devices[e],
                    controllerType: this.props.controllerType,
                    key: e,
                  })
                )
              )
            )
          : null;
      }
    }
    let w = class extends a.Component {
      constructor(e) {
        super(e),
          (this.m_mailbox = new d.c()),
          this.m_mailbox.Init(y.b).then(() => {
            this.m_mailbox.RegisterHandler(
              "request_binding_callouts",
              this.OnRequestBindingCallouts
            ),
              this.m_mailbox.RegisterHandler(
                "cancel_binding_callouts",
                this.OnCancelBindingCallouts
              ),
              this.m_mailbox.RegisterHandler(
                "should_show_binding_callouts",
                this.OnShouldShowBindingCallouts
              ),
              this.m_mailbox.RegisterHandler(
                "request_tutorial_callout",
                this.OnRequestTutorialCallout
              );
          }),
          b.d.Init(!1),
          (this.state = {});
      }
      GetDefaultControllerType() {
        let e = VRHTML.VRSystem.GetTrackedDeviceClasses(),
          t = e.find((e) => e.eClass == d.x.Controller);
        return (
          t || (t = e.find((e) => e.eClass == d.x.HMD)),
          t
            ? VRHTML.VRProperties.GetStringProperty(
                t.unIndex,
                d.y.ControllerType_String
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
        Object(u.f)(e.app_key)
          .then((n) => {
            let i = !n.legacy;
            if (n.legacy) {
              i =
                n.current_binding_url[t] !=
                (n.default_bindings && n.default_bindings[t]);
            }
            return i
              ? (this.SendShouldShowBindingCalloutsResponse(e, !0), null)
              : Object(u.d)(e.app_key, t, n.current_binding_url[t]);
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
        Object(u.f)(e.app_key)
          .then(
            (i) => (
              (t = i), Object(u.d)(e.app_key, n, t.current_binding_url[n])
            )
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
        let r = null,
          o = null;
        if (e.action) {
          e: for (let t of n.action_sets)
            if (this.DoesActionSetHaveBindings(t, i))
              for (let n of t.actions)
                if (n.name.toUpperCase() == e.action.toUpperCase()) {
                  r = t.name;
                  break e;
                }
          o = e.action.toUpperCase();
        } else
          r = e.action_sets
            ? e.action_sets[0]
            : this.DetermineDefaultActionSet(n, i);
        r &&
          this.setState({
            actionManifest: n,
            bindingConfig: i,
            sActionSet: r,
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
                let r = i.inputs[n];
                if (!r.output) continue;
                if (
                  this.state.sRestrictToAction &&
                  r.output.toUpperCase() != this.state.sRestrictToAction
                )
                  continue;
                let o = i.path.indexOf("/input");
                if (-1 == o) continue;
                let s = {
                    device_path: i.path.substring(0, o),
                    input_path: i.path.substring(o),
                    mode: i.mode,
                    slot: n,
                    localized_action_name: null,
                  },
                  a = e.actions.find(
                    (e) => e.name.toUpperCase() == r.output.toUpperCase()
                  );
                if (a) {
                  if (a.hide_callout) continue;
                  let e = a.localized_name,
                    t =
                      this.state.bindingConfig.alias_info &&
                      this.state.bindingConfig.alias_info[a.name];
                  if (t && (t.alias_name && (e = t.alias_name), t.hidden))
                    continue;
                  s.localized_action_name = e;
                } else if (r.output.startsWith("/simactions/")) {
                  let e = parseInt(
                      r.output.slice(r.output.lastIndexOf("/") + 1)
                    ),
                    t = this.state.bindingConfig.simulated_actions.find(
                      (t) => t.id == e
                    );
                  if (!t) continue;
                  s.localized_action_name = t.name;
                }
                s.localized_action_name && t.push(s);
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
              (e) => e.name.toUpperCase() == i.output.toUpperCase()
            );
            if (!n) continue;
            let r = { inputs: [], localized_action_name: n.localized_name };
            for (let e of i.inputs) {
              if (2 != e.length) continue;
              let t = e[0].indexOf("/input");
              if (-1 == t) continue;
              let n = {
                device_path: e[0].substring(0, t),
                input_path: e[0].substring(t),
                slot: e[1],
              };
              r.inputs.push(n);
            }
            r.inputs.length > 0 && t.push(r);
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
                e
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
          a.createElement(D, {
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
                a.createElement(
                  g.a,
                  {
                    className: n,
                    onClick: () => {
                      this.OnSelectActionSet(e.name);
                    },
                    key: e.name,
                  },
                  e.localized_name
                )
              );
          }
        });
        let n = m.a.GetApp(this.state.sAppKey);
        return a.createElement(
          "div",
          { className: "CalloutTopLevelContainer" },
          !this.state.sRestrictToAction &&
            a.createElement(
              "div",
              { className: "CalloutActionSetDialogContainer" },
              a.createElement(
                d.lb,
                { parent_path: "/user/head" },
                a.createElement(
                  d.G,
                  { start_angle_threshold: 40, stop_angle_threshold: 5 },
                  a.createElement(
                    d.lb,
                    { rotation: { x: -10, y: 10, z: 0 } },
                    a.createElement(
                      d.lb,
                      {
                        translation: {
                          x: -0,
                          y: -0,
                          z: -0.85 * _.a.getDashboardDistance(),
                        },
                      },
                      a.createElement(
                        d.Y,
                        {
                          width: 0.65 * _.a.getDashboardScale(),
                          interactive: !0,
                        },
                        a.createElement(
                          g.b,
                          { className: "BindingCalloutActionPanel" },
                          n &&
                            a.createElement(
                              "div",
                              { className: "BindingCalloutAppHeader" },
                              a.createElement("img", {
                                className: "BindingCalloutImage",
                                src: m.a.GetAppImageURL(this.state.sAppKey),
                              }),
                              a.createElement(
                                "div",
                                { className: "BindingCalloutTitle" },
                                "Controller Bindings"
                              ),
                              a.createElement(
                                "div",
                                { className: "BindingCalloutConfigName" },
                                this.state.bindingConfig.name
                              )
                            ),
                          a.createElement(
                            "div",
                            { className: "BindingCalloutActionList" },
                            t,
                            a.createElement(
                              g.a,
                              {
                                className: "ButtonControl CloseButton",
                                onClick: this.OnCloseCallouts,
                              },
                              "Close"
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            ),
          a.createElement(D, {
            devices: e,
            controllerType: this.state.sControllerType,
          })
        );
      }
    };
    Object(s.b)([c.bind], w.prototype, "OnShouldShowBindingCallouts", null),
      Object(s.b)([c.bind], w.prototype, "OnRequestBindingCallouts", null),
      Object(s.b)([c.bind], w.prototype, "OnCancelBindingCallouts", null),
      Object(s.b)([c.bind], w.prototype, "OnRequestTutorialCallout", null),
      Object(s.b)([c.bind], w.prototype, "OnCloseCallouts", null),
      (w = Object(s.b)([v.a], w)),
      null === (i = VRHTML) ||
        void 0 === i ||
        i.VROverlay.SetFlag(
          VRHTML.VROverlay.ThisOverlayHandle(),
          d.D.MakeOverlaysInteractiveIfVisible,
          !0
        ),
      null === (r = VRHTML) ||
        void 0 === r ||
        r.VROverlay.SetInputMethod(
          VRHTML.VROverlay.ThisOverlayHandle(),
          d.E.Mouse
        ),
      Object(p.b)(
        ["bindingui"],
        null === (o = VRHTML) || void 0 === o ? void 0 : o.GetSteamVRLanguage()
      )
        .then(() => h.a.Init())
        .then(() => m.a.Init())
        .then(() => {
          l.render(
            a.createElement(d.eb, null, a.createElement(w, null)),
            document.getElementById("root")
          );
        });
  },
  N46P: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return c;
    });
    var i = n("mrSG"),
      r = n("q1tI"),
      o = n("7wIv"),
      s = n("GXif"),
      a = n("/i/y");
    class l extends r.Component {
      constructor(e) {
        if (
          (super(e),
          (this.m_mailbox = new a.c()),
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
              Object(s.c)("#LegacyDebugger_NoApp")
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
      return C;
    });
    var i,
      r = n("mrSG"),
      o = n("q1tI"),
      s = n("7wIv"),
      a = n("GXif"),
      l = n("/i/y"),
      c = n("uFkT"),
      d = n("MYgy"),
      u = n("Yd4P"),
      p = n.n(u),
      h = n("okNM"),
      m = n("2vnA"),
      g = n("TbT/"),
      _ = n("GxMB");
    !(function (e) {
      (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
    })(i || (i = {}));
    class b extends o.Component {
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
            Object(a.c)(e)
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
            s = this.m_containerRef.current.getBoundingClientRect(),
            a = this.GetPosition(),
            l = new d.e(0, o.top + o.height / 2);
          l.x = r ? s.left - 10 : s.right + 10;
          let c = r ? -20 : 20,
            u = l.x + c + "," + l.y + " " + a.x + "," + a.y;
          e.setAttribute("points", u);
          let p = l.x + "," + l.y + " " + (l.x + c) + "," + l.y;
          t.setAttribute("points", p),
            n.setAttribute("cx", a.x + ""),
            n.setAttribute("cy", a.y + "");
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
    Object(r.b)([s.bind], b.prototype, "ComponentUpdated", null),
      Object(r.b)([s.bind], b.prototype, "UpdateSVGPath", null);
    class v extends b {
      constructor(e) {
        super(e);
      }
    }
    class y extends b {
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
    class f extends b {
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
                Object(a.c)("#SourceInputMode_Position")
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
    class S extends o.Component {
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
            return o.createElement(v, {
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
            return o.createElement(f, {
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
                o.createElement(p.a, { onReflow: this.OnImageReflow })
              )
            : null
        );
      }
      render() {
        let e = [],
          t = [],
          n = this.ControllerTypeInfo,
          r = 0,
          s = [];
        for (let e in n.input_source) {
          let t = n.input_source[e];
          if ("InputValueVisibility_AvailableButHidden" == t.visibility)
            continue;
          let i = this.EstimateSourceHeight(t);
          (r += i),
            s.push({
              sSourcePath: e,
              inputSource: t,
              order: t.order ? t.order : 0,
              height: i,
            });
        }
        let a = 8;
        r > 16 && (a = r / 2);
        let l = 0,
          c = s.sort((e, t) => e.order - t.order);
        for (let n of c) {
          l += n.height;
          let r = l > a ? i.Right : i.Left,
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
    Object(r.b)([s.bind], S.prototype, "OnImageLoaded", null),
      Object(r.b)([s.bind], S.prototype, "OnImageReflow", null);
    let C = class extends o.Component {
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
            g.i,
            {
              className: "ControllerVisualizerWrapper",
              header: Object(a.c)("#TestControllerTitle", ""),
              onDismissRequested: this.props.onDismissRequested,
            },
            o.createElement(
              "div",
              { className: "VisualizerLabel" },
              Object(a.c)("#TestController_NoController")
            )
          );
        for (let i of n)
          "TrackedDeviceClass_HMD" != i.class &&
            (i.root_path == this.state.devicePath && (e = i.serial_number),
            t.push({
              value: i.root_path,
              sLabel: Object(a.c)("#" + i.root_path),
            }));
        return o.createElement(
          g.i,
          {
            className: "ControllerVisualizerWrapper",
            header: Object(a.c)("#TestControllerTitle", e),
            onDismissRequested: this.props.onDismissRequested,
            footer: o.createElement(g.j, {
              leftControls: [
                o.createElement(_.c, {
                  key: "dropdown",
                  items: t,
                  value: this.state.devicePath,
                  defaultLabel: Object(a.c)("#" + this.state.devicePath),
                  onChange: (e) => {
                    this.setState({ devicePath: e });
                  },
                }),
              ],
              onDismissRequested: this.props.onDismissRequested,
            }),
          },
          this.state.devicePath &&
            o.createElement(S, {
              devicePath: this.state.devicePath,
              serialNumber: e,
              visualizer: this,
            })
        );
      }
    };
    Object(r.b)([s.bind], C.prototype, "OnConnectedDevicesChanged", null),
      Object(r.b)([s.bind], C.prototype, "OnUpdateComponentStates", null),
      (C = Object(r.b)([h.a], C));
  },
  YRJX: function (e, t, n) {
    "use strict";
    n.d(t, "r", function () {
      return M;
    }),
      n.d(t, "q", function () {
        return R;
      }),
      n.d(t, "h", function () {
        return E;
      }),
      n.d(t, "a", function () {
        return T;
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
        return B;
      }),
      n.d(t, "e", function () {
        return N;
      }),
      n.d(t, "b", function () {
        return A;
      }),
      n.d(t, "k", function () {
        return H;
      }),
      n.d(t, "l", function () {
        return F;
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
      s = n("q1tI"),
      a = n("7wIv"),
      l = n("GXif"),
      c = n("6YgL"),
      d = n("CzjV"),
      u = n("hcOo"),
      p = n("/i/y"),
      h = n("7uy8"),
      m = n("2vnA"),
      g = n("Vp/w"),
      _ = n("okNM"),
      b = n("p9CI"),
      v = n("X3sx"),
      y = n("39GS"),
      f = n("nsy5"),
      S = n("8GAN"),
      C = n("vvDA"),
      k = n("Q+Z6"),
      O = n("/CXA"),
      D = n("aaBP"),
      w = n.n(D);
    const M = "DashboardPanelTopCenter",
      R = "DashboardControlStrip",
      E = (e) => {
        var t, n;
        const i = s.useRef(null),
          r = s.useRef(null);
        s.useEffect(() => {
          var e, t;
          return null === (e = i.current) || void 0 === e
            ? void 0
            : e.setFloatingViewStack(
                null === (t = r.current) || void 0 === t ? void 0 : t.viewStack
              );
        });
        const o = null == (t = e.scrollable) || t,
          a = null != (n = e.foregroundReflectMultiplier) ? n : 1;
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(
            p.Y,
            {
              visibility: e.visible ? p.ab.Visible : p.ab.Hidden,
              debug_name: "homepanelbackground",
              curvature_origin_id: h.j,
              origin: p.s.BottomCenter,
              interactive: !1,
              scrollable: !1,
              target_dpi_panel_id: R,
              target_dpi_multiplier: 2,
              reflect: 0.01,
              sampler: p.t.SingleTap,
            },
            s.createElement(p.Z, { id: M, location: p.s.TopCenter }),
            s.createElement(
              O.a,
              { ref: i },
              s.createElement("div", {
                className: Object(u.a)(
                  "DashboardPanelBackground",
                  e.additionalClassNames
                ),
                style: e.additionalStyle,
              })
            )
          ),
          s.createElement(
            p.lb,
            { translation: { z: 1e-5 } },
            s.createElement(
              p.Y,
              {
                visibility: e.visible ? p.ab.Visible : p.ab.Hidden,
                debug_name: e.debugName,
                curvature_origin_id: h.j,
                origin: p.s.BottomCenter,
                interactive: !0,
                scrollable: o,
                target_dpi_panel_id: R,
                reflect: 0.2 * a,
              },
              s.createElement(
                O.c,
                { ref: r },
                s.createElement(
                  c.b,
                  null,
                  s.createElement(
                    b.b,
                    {
                      scrollDirection: o ? b.a.Vertical : b.a.None,
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
    function T() {
      return s.createElement(
        "div",
        { className: "ActivitySpinner" },
        s.createElement("div", { className: "Bar" }),
        s.createElement("div", { className: "Bar" }),
        s.createElement("div", { className: "Bar" })
      );
    }
    class I extends s.Component {
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
          s.createElement(
            "div",
            { className: "ClockContainer" },
            s.createElement(
              "div",
              { className: "Clock" },
              t,
              " ",
              s.createElement("span", { className: "Suffix" }, n)
            )
          )
        );
      }
    }
    function P(e) {
      return s.createElement(
        c.a,
        { className: "PowerMenuButton", onClick: e.onClick },
        s.createElement("div", { className: "HoverGradient" }),
        s.createElement("div", { className: "ClickGradient" }),
        s.createElement("span", null, e.label),
        e.lineBelow && s.createElement("div", { className: "LineBelow" })
      );
    }
    Object(o.b)([a.bind], I.prototype, "updateTime", null);
    let x = (i = class extends s.Component {
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
        return s.createElement(
          "div",
          { style: { position: "absolute", left: "50%", top: "50%" } },
          s.createElement(
            g.a,
            { allowableParentSelectors: [".DashboardMain"] },
            s.createElement(
              p.lb,
              { translation: { y: -0.2, z: 0.05 } },
              s.createElement(
                p.Y,
                {
                  visibility: e ? p.ab.Visible : p.ab.SkipInSceneGraph,
                  target_dpi_panel_id: R,
                  curvature_origin_id: h.j,
                },
                s.createElement(
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
      (x = i = Object(o.b)([_.a], x));
    class V extends s.Component {
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
        return s.createElement(
          "div",
          { className: "Icon" },
          t &&
            s.createElement("img", {
              className: "Shadow",
              src: this.props.src,
            }),
          s.createElement("img", {
            className: Object(u.a)(["BlackToWhite", n]),
            src: this.props.src,
          })
        );
      }
    }
    var L, B;
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
      })(B || (B = {}));
    const N = (e) =>
      s.createElement(
        "div",
        { className: Object(u.a)("ControlBarGroup", L[e.style]) },
        e.children
      );
    let A = class extends s.Component {
      constructor(e) {
        super(e), (this.m_refTooltip = s.createRef());
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
        return s.createElement(
          c.a,
          {
            className: Object(u.a)(
              "ControlBarButton",
              this.props.additionalClassNames,
              B[((e = this.props.imageStyle), null != e ? e : B.Center)] +
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
            s.createElement(
              "div",
              { style: { position: "absolute", left: "50%", top: "50%" } },
              s.createElement(g.a, {
                allowableParentSelectors: [".DashboardMain"],
                panelAnchorID: this.props.centerPanelAnchorID,
              })
            ),
          s.createElement(x, {
            text: this.props.label,
            ref: this.m_refTooltip,
          }),
          s.createElement(V, { src: this.props.imageUrl })
        );
      }
    };
    Object(o.b)([a.bind], A.prototype, "onMouseEnter", null),
      Object(o.b)([a.bind], A.prototype, "onMouseLeave", null),
      (A = Object(o.b)([_.a], A));
    const H = (e) =>
      s.createElement(
        N,
        { style: e.style },
        s.createElement(A, Object.assign({}, e))
      );
    class F extends s.Component {
      constructor(e) {
        super(e),
          (this.m_BatteryStateChangedCallbackHandle = null),
          (this.m_DeviceRoleChangedCallbackHandle = null),
          (this.m_DeviceEventCallbackHandle = null),
          (this.deviceIndex = p.nb),
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
          n = p.nb;
        if (
          (void 0 !== this.props.role
            ? (n = VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                this.props.role
              ))
            : void 0 !== this.props.deviceIndex && (n = this.props.deviceIndex),
          n != this.deviceIndex &&
            ((this.batteryLevelStable = null), (this.deviceIndex = n)),
          n != p.nb &&
            ((e = VRHTML.VRProperties.GetBoolProperty(
              n,
              p.y.DeviceProvidesBatteryStatus_Bool
            )),
            e))
        ) {
          const e = VRHTML.VRProperties.GetFloatProperty(
            n,
            p.y.DeviceBatteryPercentage_Float
          );
          (t = VRHTML.VRProperties.GetBoolProperty(
            n,
            p.y.DeviceIsCharging_Bool
          )),
            null == this.batteryLevelStable || 0 == this.batteryLevelStable
              ? (this.batteryLevelStable = e)
              : ((this.batteryLevelStable = Math.min(
                  this.batteryLevelStable,
                  e + F.kBatteryLevelHysteresis,
                  1
                )),
                (this.batteryLevelStable = Math.max(
                  this.batteryLevelStable,
                  e - F.kBatteryLevelHysteresis,
                  0
                )));
        }
        let i = C.a.GetBatteryIcon(
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
        (e != p.m.Activated && e != p.m.Deactivated) || this.update();
      }
      render() {
        return s.createElement(
          "div",
          { className: "BatteryStatus" },
          s.createElement("img", { src: this.state.batteryIconPath })
        );
      }
    }
    (F.kBatteryLevelHysteresis = 0.02),
      Object(o.b)([a.bind], F.prototype, "updateControllerStatus", null),
      Object(o.b)([a.bind], F.prototype, "onBatteryStateChanged", null),
      Object(o.b)([a.bind], F.prototype, "onDeviceRoleChanged", null),
      Object(o.b)([a.bind], F.prototype, "onDeviceEvent", null);
    s.Component;
    const j = (e) =>
      s.createElement(
        "div",
        { className: "Title" },
        s.createElement(V, { src: e.iconUrl, shadow: !0 }),
        s.createElement("span", { className: "NoWrapText" }, e.name)
      );
    class U extends s.Component {
      constructor(e) {
        var t, n;
        super(e),
          (this.m_trackingStateChangedEventHandle = null),
          (this.m_mailbox = new p.c()),
          this.m_mailbox.Init("dashboard_resetseatedbutton"),
          (this.state = {
            eTrackingUniverseOrigin:
              ((n =
                null === (t = VRHTML) || void 0 === t
                  ? void 0
                  : t.VRCompositor.GetTrackingSpace()),
              null != n ? n : p.A.Standing),
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
            null != t ? t : p.A.Standing),
        });
      }
      onResetUniverseOrigin() {
        var e;
        null === (e = VRHTML) ||
          void 0 === e ||
          e.VRDashboardManager.HideDashboard("reset_universe_origin");
        let t = {
          type: S.a,
          countdown_seconds: 3,
          universe: this.state.eTrackingUniverseOrigin,
        };
        this.m_mailbox.SendMessage(S.b, t);
      }
      render() {
        switch (this.state.eTrackingUniverseOrigin) {
          case p.A.Seated:
            return s.createElement(A, {
              imageUrl: "/dashboard/images/icons/svr_reset_tracking.svg",
              label: Object(l.c)("#PowerMenuResetSeatedPosition"),
              onClick: this.onResetUniverseOrigin,
            });
          case p.A.Standing:
            return s.createElement(A, {
              imageUrl: "/dashboard/images/icons/svr_reset_tracking.svg",
              label: Object(l.c)("#PowerMenuResetStandingPosition"),
              onClick: this.onResetUniverseOrigin,
            });
          default:
            return null;
        }
      }
    }
    Object(o.b)([a.bind], U.prototype, "onTrackingSpaceChanged", null),
      Object(o.b)([a.bind], U.prototype, "onResetUniverseOrigin", null);
    class W extends s.Component {
      constructor() {
        super(...arguments),
          (this.m_sAnchorID = Math.round(1e7 * Math.random()).toString()),
          (this.m_resizeObserver = null),
          (this.m_refPanelElem = s.createRef()),
          (this.m_refBackgroundElem = s.createRef());
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
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(
            p.Z,
            { location: { x: e, y: -1 } },
            s.createElement(p.lb, {
              id: this.m_sAnchorID,
              translation: { y: 0.01 * Math.abs(t), z: -0.03 * Math.abs(t) },
              rotation: { y: 15 * t, z: 2 * t },
            })
          ),
          s.createElement(
            g.b,
            {
              allowableParentSelectors: [".DashboardMain"],
              onPortalDidMount: this.onPortalDidMount,
            },
            s.createElement(
              p.jb,
              { color: this.props.tintColor },
              s.createElement(
                f.a,
                {
                  additionalClassName: "ControlBarTrayAnimation",
                  visible: this.props.visible,
                  duration: 0.25,
                  onStartShowing: this.updateBackgroundSize,
                  onShown: this.updateBackgroundSize,
                },
                s.createElement(
                  p.lb,
                  {
                    parent_id: this.m_sAnchorID,
                    translation: { y: 0.04, z: -0.01 },
                  },
                  s.createElement(
                    p.Y,
                    {
                      curvature_origin_id: h.j,
                      origin: p.s.TopCenter,
                      interactive: !0,
                      scrollable: !0,
                      target_dpi_panel_id: R,
                      sort_depth_bias: this.props.sort_depth_bias,
                    },
                    s.createElement(
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
                  s.createElement(
                    p.lb,
                    { translation: { z: -1e-5 } },
                    s.createElement(
                      p.Y,
                      {
                        curvature_origin_id: h.j,
                        origin: p.s.TopCenter,
                        interactive: !1,
                        scrollable: !1,
                        target_dpi_panel_id: R,
                        target_dpi_multiplier: 2,
                        reflect: 0.04,
                        sampler: p.t.SingleTap,
                        sort_depth_bias: this.props.sort_depth_bias,
                      },
                      s.createElement("div", {
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
    Object(o.b)([a.bind], W.prototype, "onResizeObserved", null),
      Object(o.b)([a.bind], W.prototype, "updateBackgroundSize", null),
      Object(o.b)([a.bind], W.prototype, "onPortalDidMount", null);
    let z = class extends s.Component {
      constructor() {
        super(...arguments),
          (this.m_refSlider = s.createRef()),
          (this.m_refTray = s.createRef()),
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
          k.d.settings.get(
            "/settings/audio/enablePlaybackMirrorIndependentVolume"
          ) && k.d.settings.get("/settings/audio/enablePlaybackMirror")
        );
      }
      get enableAudioMirrorControls() {
        return !!k.d.settings.get("/settings/audio/activePlaybackMirrorDevice");
      }
      render() {
        const e =
          (this.showAudioMirrorControls ? 3 : 2) >= 3 ? 0 : this.props.position;
        return s.createElement(
          W,
          Object.assign({}, this.props, {
            position: e,
            ref: this.m_refTray,
            additionalClassNames: "VolumeTray",
          }),
          s.createElement(
            "div",
            { className: "Section" },
            s.createElement(
              K,
              {
                onClick: y.a.Instance.toggleMicrophoneMute,
                title: y.a.Instance.microphoneMuted
                  ? Object(l.c)("#UnmuteMicrophone")
                  : Object(l.c)("#MuteMicrophone"),
              },
              s.createElement("img", {
                className: "BlackToWhite",
                src: y.a.Instance.microphoneMuted
                  ? "/dashboard/images/icons/svr_mic_mute.svg"
                  : "/dashboard/images/icons/svr_mic_active.svg",
              })
            ),
            s.createElement(G, {
              title: Object(l.c)("#MicrophoneVolume"),
              value: y.a.Instance.microphoneVolume,
              onChange: y.a.Instance.setMicrophoneVolume,
              onMouseEnter: this.onSliderMouseEnter,
              onMouseLeave: this.onSliderMouseLeave,
              onFinalChange: this.onSliderFinalChange,
              renderValue: (e) => Math.round(100 * e) + "%",
              valueStyleVariant: v.c.OnHandle,
              additionalClassName: Object(u.a)([
                "Muted",
                y.a.Instance.microphoneMuted,
              ]),
              interactionEndSoundEffect: d.a.VolumePreview,
            })
          ),
          this.showAudioMirrorControls &&
            s.createElement(
              "div",
              { className: "Section" },
              s.createElement(
                K,
                {
                  onClick: y.a.Instance.toggleMirrorMute,
                  enabled: this.enableAudioMirrorControls,
                  title: y.a.Instance.mirrorMuted
                    ? Object(l.c)("#UnmuteAudioMirror")
                    : Object(l.c)("#MuteAudioMirror"),
                },
                s.createElement("img", {
                  className: "BlackToWhite",
                  src: y.a.Instance.mirrorMuted
                    ? "/dashboard/images/icons/svr_volume_mirror_mute.svg"
                    : "/dashboard/images/icons/svr_volume_mirror.svg",
                })
              ),
              s.createElement(G, {
                title: Object(l.c)("#AudioMirrorVolume"),
                value: y.a.Instance.mirrorVolume,
                enabled: this.enableAudioMirrorControls,
                onChange: y.a.Instance.setMirrorVolume,
                onMouseEnter: this.onSliderMouseEnter,
                onMouseLeave: this.onSliderMouseLeave,
                onFinalChange: this.onSliderFinalChange,
                renderValue: (e) => Math.round(100 * e) + "%",
                valueStyleVariant: v.c.OnHandle,
                additionalClassName: Object(u.a)([
                  "Muted",
                  y.a.Instance.mirrorMuted,
                ]),
                interactionEndSoundEffect: d.a.VolumePreview,
              })
            ),
          s.createElement(
            "div",
            { className: "Section" },
            s.createElement(
              K,
              {
                onClick: y.a.Instance.toggleMute,
                title: y.a.Instance.muted
                  ? Object(l.c)("#Unmute_Headset")
                  : Object(l.c)("#Mute_Headset"),
              },
              s.createElement("img", {
                className: "BlackToWhite",
                src: y.a.Instance.muted
                  ? "/dashboard/images/icons/svr_volume_mute.svg"
                  : "/dashboard/images/icons/svr_volume.svg",
              })
            ),
            s.createElement(G, {
              title: Object(l.c)("#HeadsetVolume"),
              sliderRef: this.m_refSlider,
              value: y.a.Instance.volume,
              onChange: y.a.Instance.setVolume,
              onMouseEnter: this.onSliderMouseEnter,
              onMouseLeave: this.onSliderMouseLeave,
              onFinalChange: this.onSliderFinalChange,
              renderValue: (e) => Math.round(100 * e) + "%",
              valueStyleVariant: v.c.OnHandle,
              additionalClassName: Object(u.a)(["Muted", y.a.Instance.muted]),
              interactionEndSoundEffect: d.a.VolumePreview,
            })
          )
        );
      }
    };
    Object(o.b)([a.bind], z.prototype, "onSliderMouseEnter", null),
      Object(o.b)([a.bind], z.prototype, "onSliderMouseLeave", null),
      Object(o.b)([a.bind], z.prototype, "onSliderFinalChange", null),
      Object(o.b)([m.f], z.prototype, "showAudioMirrorControls", null),
      Object(o.b)([m.f], z.prototype, "enableAudioMirrorControls", null),
      (z = Object(o.b)([_.a], z));
    let G = class extends s.Component {
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
        return s.createElement(
          "div",
          { className: "SliderContainer" },
          this.props.title &&
            s.createElement(x, {
              text: this.props.title,
              shown: this.state.bHover || this.state.bSliding,
            }),
          s.createElement(
            v.a,
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
    Object(o.b)([a.bind], G.prototype, "onMouseEnter", null),
      Object(o.b)([a.bind], G.prototype, "onMouseLeave", null),
      Object(o.b)([a.bind], G.prototype, "onInteractionStart", null),
      Object(o.b)([a.bind], G.prototype, "onInteractionEnd", null),
      (G = Object(o.b)([_.a], G));
    let K = class extends s.Component {
      constructor(e) {
        super(e), (this.m_refTooltip = s.createRef());
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
        return s.createElement(
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
            s.createElement(x, {
              text: this.props.title,
              ref: this.m_refTooltip,
            }),
          this.props.children
        );
      }
    };
    Object(o.b)([a.bind], K.prototype, "onMouseEnter", null),
      Object(o.b)([a.bind], K.prototype, "onMouseLeave", null),
      (K = Object(o.b)([_.a], K));
    let q = (r = class extends s.Component {
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
        Object(p.M)(Object(p.hb)(t, this.m_vecOriginalMousePosition)) >
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
        return s.createElement(A, {
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
      Object(o.b)([a.bind], q.prototype, "onButtonMouseDown", null),
      Object(o.b)([a.bind], q.prototype, "onWindowMouseMove", null),
      Object(o.b)([a.bind], q.prototype, "onWindowMouseUp", null),
      (q = r = Object(o.b)([_.a], q));
    const Q = (e) => {
      const t = s.useRef();
      return s.createElement(
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
        e.title && s.createElement(x, { text: e.title, ref: t }),
        e.label && s.createElement("span", null, e.label),
        e.iconUrl &&
          s.createElement("img", {
            className: "Icon BlackToWhite",
            src: e.iconUrl,
          })
      );
    };
  },
  "ru2+": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return _;
    });
    var i = n("mrSG"),
      r = n("q1tI"),
      o = n("okNM"),
      s = n("7wIv"),
      a = n("GXif"),
      l = n("MYgy"),
      c = n("Z0gP"),
      d = n("2vnA"),
      u = n("uFkT"),
      p = n("6YgL"),
      h = n("hcOo"),
      m = n("TbT/");
    let g = class extends r.Component {
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
          ].map((e) => ({ value: e, sLabel: Object(a.c)("#" + e) }));
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
              (i = Object(a.c)(
                "#Settings_ViveTracker_Identify_NotIdentifiable"
              ))
            : (i = Object(a.c)("#Settings_ViveTracker_Identify_NotConnected")),
          r.createElement(
            m.c,
            { className: "SettingsItem TrackerEntry" },
            r.createElement(
              "div",
              { className: "Label", title: t },
              r.createElement("span", null, n),
              r.createElement("div", {
                title: Object(a.c)(
                  this.IsConnected()
                    ? "#Settings_ViveTracker_Connected"
                    : "#Settings_ViveTracker_Disconnected"
                ),
                className: Object(h.a)(
                  "TrackerConnectionIndicator",
                  ["Connected", c.a.connected && this.IsConnected()],
                  ["Disconnected", c.a.connected && !this.IsConnected()]
                ),
              })
            ),
            r.createElement(
              "div",
              { className: Object(h.a)("SubsectionStem") },
              r.createElement(
                m.c,
                { title: i },
                r.createElement(
                  p.a,
                  {
                    className: "ButtonControl",
                    enabled: this.IsIdentifiable(),
                    onClick: this.BuzzTracker,
                  },
                  Object(a.c)("#TrackerEditor_BuzzTracker")
                )
              )
            ),
            r.createElement(
              "div",
              { className: "Subsection WithStem" },
              r.createElement(m.h, {
                label: Object(a.c)("#Settings_ViveTracker_Role"),
                items: this.props.validTrackerRoles.map((e) => ({
                  value: e,
                  sLabel: Object(a.c)("#" + e),
                })),
                value: this.trackerConfig.role,
                onChange: this.OnTrackerRoleChanged,
              }),
              e.length > 0 &&
                r.createElement(m.h, {
                  label: Object(a.c)("#Settings_ViveTracker_Hand"),
                  items: e,
                  value: this.trackerConfig.controller_role,
                  onChange: this.OnControllerRoleChanged,
                })
            )
          )
        );
      }
    };
    Object(i.b)([d.f], g.prototype, "trackerConfig", null),
      Object(i.b)([s.bind], g.prototype, "OnTrackerRoleChanged", null),
      Object(i.b)([s.bind], g.prototype, "OnControllerRoleChanged", null),
      Object(i.b)([s.bind], g.prototype, "BuzzTracker", null),
      Object(i.b)([d.f], g.prototype, "deviceInfo", null),
      (g = Object(i.b)([o.a], g));
    let _ = class extends r.Component {
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
              r.createElement(g, {
                key: n,
                trackerPath: t.device_path_string,
                validTrackerRoles: e.valid_roles,
              })
            )),
          r.createElement("div", { className: "TrackerEditorModal" }, t)
        );
      }
    };
    _ = Object(i.b)([o.a], _);
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
      s = n("7wIv"),
      a = n("/i/y");
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
          null === (e = a.mb) || void 0 === e
            ? void 0
            : e.RegisterForBatteryStateChangedEvents(
                this.OnBatteryStateChanged
              )),
          (this.m_DeviceRoleChangedCallbackHandle =
            null === (t = a.mb) || void 0 === t
              ? void 0
              : t.RegisterForDeviceRoleChangedEvents(this.OnDeviceRoleChanged)),
          (this.m_DeviceEventCallbackHandle =
            null === (n = a.mb) || void 0 === n
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
        if (!a.mb) return;
        const t = a.mb.VRProperties.GetBoolProperty(
            this.props.trackedDeviceIndex,
            a.y.DeviceProvidesBatteryStatus_Bool
          ),
          n = a.mb.VRSystem.GetControllerRoleForTrackedDeviceIndex(
            this.props.trackedDeviceIndex
          );
        let r = !1;
        if (t) {
          const t =
            null !=
            (e = a.mb.VRProperties.GetFloatProperty(
              this.props.trackedDeviceIndex,
              a.y.DeviceBatteryPercentage_Float
            ))
              ? e
              : 0;
          (r = a.mb.VRProperties.GetBoolProperty(
            this.props.trackedDeviceIndex,
            a.y.DeviceIsCharging_Bool
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
          s = this.GetRoleIcon(n);
        (o == this.state.batteryIconPath && s == this.state.roleIconPath) ||
          this.setState({ batteryIconPath: o, roleIconPath: s });
      }
      GetRoleIcon(e) {
        switch (e) {
          case a.w.TrackedControllerRole_RightHand:
            return "images/icons/controller_model_right.png";
          case a.w.TrackedControllerRole_LeftHand:
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
        e == a.m.Activated &&
          n == this.props.trackedDeviceIndex &&
          this.UpdateControllerStatus();
      }
      render() {
        return o.createElement(
          a.Y,
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
      Object(r.b)([s.bind], l.prototype, "OnBatteryStateChanged", null),
      Object(r.b)([s.bind], l.prototype, "OnDeviceRoleChanged", null),
      Object(r.b)([s.bind], l.prototype, "OnDeviceEvent", null);
  },
});
//# sourceMappingURL=bindingcallouts.js.map?v=c18f46550ffb10641827