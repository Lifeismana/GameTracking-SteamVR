/*!
 * (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 *
 */ !(function (e) {
  function t(t) {
    for (
      var o, a, s = t[0], l = t[1], c = t[2], p = 0, h = [];
      p < s.length;
      p++
    )
      (a = s[p]),
        Object.prototype.hasOwnProperty.call(i, a) && i[a] && h.push(i[a][0]),
        (i[a] = 0);
    for (o in l) Object.prototype.hasOwnProperty.call(l, o) && (e[o] = l[o]);
    for (d && d(t); h.length; ) h.shift()();
    return r.push.apply(r, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < r.length; t++) {
      for (var n = r[t], o = !0, s = 1; s < n.length; s++) {
        var l = n[s];
        0 !== i[l] && (o = !1);
      }
      o && (r.splice(t--, 1), (e = a((a.s = n[0]))));
    }
    return e;
  }
  var o = {},
    i = { 3: 0 },
    r = [];
  function a(t) {
    if (o[t]) return o[t].exports;
    var n = (o[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
  }
  (a.m = e),
    (a.c = o),
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
        for (var o in e)
          a.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
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
  r.push(["VyMh", 0, 1]), n();
})({
  "/i/y": function (e, t, n) {
    "use strict";
    var o = n("mrSG"),
      i = n("7wIv"),
      r = n.n(i);
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
        return Object(o.a)(this, void 0, void 0, function* () {
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
        return new Promise((n, o) => {
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
        return Object(o.a)(this, void 0, void 0, function* () {
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
        let o = Object.assign({}, t);
        return (
          null == o.returnAddress && (o.returnAddress = this.m_sMailboxName),
          (o.message_id = this.m_nNextMessageNumber++),
          this.SendMessage(e, o),
          this.WaitForMessage(n, o.message_id)
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
    function p(e, t) {
      return { x: e.x - t.x, y: e.y - t.y, z: e.z - t.z };
    }
    function h(e, t) {
      return { x: e.x * t, y: e.y * t };
    }
    function u(e, t) {
      return { x: e.x * t, y: e.y * t, z: e.z * t };
    }
    function m(e) {
      return Math.sqrt(e.x * e.x + e.y * e.y);
    }
    function b(e) {
      return Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z);
    }
    function g(e) {
      if (void 0 === e) return;
      let t = 0.5 * e.x,
        n = 0.5 * e.y,
        o = 0.5 * e.z,
        i = Math.cos(t),
        r = Math.cos(n),
        a = Math.cos(o),
        s = Math.sin(t),
        l = Math.sin(n),
        c = Math.sin(o);
      return {
        w: i * r * a + s * l * c,
        x: s * r * a + i * l * c,
        y: i * l * a - s * r * c,
        z: i * r * c - s * l * a,
      };
    }
    function _(e) {
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
    function S(e, t) {
      let n = 2 * (e.y * t.z - e.z * t.y),
        o = 2 * (e.z * t.x - e.x * t.z),
        i = 2 * (e.x * t.y - e.y * t.x);
      return {
        x: t.x + e.w * n + e.y * i - e.z * o,
        y: t.y + e.w * o + e.z * n - e.x * i,
        z: t.z + e.w * i + e.x * o - e.y * n,
      };
    }
    function v(e, t, n) {
      return [
        [e.x, e.y, e.z],
        [t.x, t.y, t.z],
        [n.x, n.y, n.z],
      ];
    }
    function y(e) {
      return S(e.rotation, { x: 0, y: 0, z: 1 });
    }
    function f(e) {
      let t = b(e);
      return { x: e.x / t, y: e.y / t, z: e.z / t };
    }
    function C(e, t) {
      return {
        x: e.y * t.z - e.z * t.y,
        y: e.z * t.x - e.x * t.z,
        z: e.x * t.y - e.y * t.x,
      };
    }
    function O(e) {
      let t = e.w * e.w + e.x * e.x + e.y * e.y + e.z * e.z;
      return { w: e.w / t, x: -e.x / t, y: -e.y / t, z: -e.z / t };
    }
    (a.s_nNextMailboxNumber = 1),
      Object(o.b)([i.bind], a.prototype, "OpenWebSocketToHost", null),
      Object(o.b)([i.bind], a.prototype, "OnWebSocketOpen", null),
      Object(o.b)([i.bind], a.prototype, "OnWebSocketClose", null),
      Object(o.b)([i.bind], a.prototype, "WebSocketSend", null),
      Object(o.b)([i.bind], a.prototype, "OnWebSocketMessage", null);
    class I {
      constructor() {
        (this.m_mailbox = new a()), this.m_mailbox.Init("sgtransformcache");
      }
      static getInstance() {
        return I.instance || (I.instance = new I()), I.instance;
      }
      requestSGTransform(e) {
        return new Promise((t, n) =>
          Object(o.a)(this, void 0, void 0, function* () {
            let o = { type: "transform_request", id: e },
              i = yield this.m_mailbox.SendMessageAndWaitForResponse(
                "vrcompositor_systemlayer",
                o,
                "transform_response"
              );
            i.id == e && i.transform
              ? t(i.transform)
              : n("requestSGTransform failed");
          })
        );
      }
    }
    var E = n("q1tI");
    function k(e, t) {
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
    function D(e, t) {
      let n = e.getAttribute(t);
      if (n && n.length > 0) return parseInt(n);
    }
    function R(e, t) {
      let n = e.getAttribute(t);
      if (n && n.length > 0)
        return (
          "true" == n ||
          (n.length > 0 && 0 != parseInt(n) && !isNaN(parseInt(n)))
        );
    }
    function w(e, t) {
      let n = e.getAttribute(t);
      if (n && n.length > 0) return n;
    }
    function T(e, t) {
      return W(w(e, t));
    }
    function B(e, t) {
      let n = { type: e, properties: {} };
      return (
        t.id && (n.properties.id = W(t.id)),
        (n.properties.sgid = D(t, "sgid")),
        n
      );
    }
    function A(e, t) {
      let [n, o] = (function (e, t) {
          let n = t.buildNode;
          if (n) return n(e, t);
          let o = Object.assign({}, e),
            i = null;
          switch (t.nodeName.toUpperCase()) {
            case "VSG-TRANSFORM":
              (i = B("transform", t)),
                (i.properties.translation = k(t, "translation")),
                (i.properties.rotation = k(t, "rotation")),
                (i.properties.scale = k(t, "scale")),
                (i.properties["parent-path"] = w(t, "parent-path")),
                (i.properties["parent-origin"] = w(t, "parent-origin")),
                (i.properties["parent-id"] = T(t, "parent-id"));
              break;
            case "VSG-TRACKING-STATE-VISIBILITY":
              (i = B("trackingstatevisibility", t)),
                (i.properties["visible-0dof"] = R(t, "visible-0dof")),
                (i.properties["visible-3dof"] = R(t, "visible-3dof")),
                (i.properties["visible-6dof"] = R(t, "visible-6dof"));
              break;
            case "VSG-ELASTIC-HEAD-TRANSFORM":
              (i = B("elasticheadtransform", t)),
                (i.properties["start-angle-threshold"] = M(
                  t,
                  "start-angle-threshold"
                )),
                (i.properties["stop-angle-threshold"] = M(
                  t,
                  "stop-angle-threshold"
                )),
                (i.properties["ease-in-time"] = M(t, "ease-in-time")),
                (i.properties["ease-in-power"] = M(t, "ease-in-power")),
                (i.properties["ease-out-angle-threshold"] = M(
                  t,
                  "ease-out-angle-threshold"
                )),
                (i.properties["ease-out-power"] = M(t, "ease-out-power")),
                (i.properties["min-angular-velocity"] = M(
                  t,
                  "min-angular-velocity"
                )),
                (i.properties["max-angular-velocity"] = M(
                  t,
                  "max-angular-velocity"
                )),
                (i.properties["lock-to-horizon"] = R(t, "lock-to-horizon")),
                (i.properties["translation-behavior"] = D(
                  t,
                  "translation-behavior"
                ));
              break;
            case "VSG-LINE":
              (i = B("line", t)),
                (i.properties["target-id"] = T(t, "target-id")),
                (i.properties.thickness = M(t, "thickness")),
                (i.properties["start-buffer"] = M(t, "start-buffer")),
                (i.properties["end-buffer"] = M(t, "end-buffer"));
              break;
            case "VSG-LINE-CONSTRAINED-TRANSFORM":
              (i = B("line-constrained-transform", t)),
                (i.properties["target-id"] = T(t, "target-id")),
                (i.properties["source-id"] = T(t, "source-id")),
                (i.properties["source-distance"] = M(t, "source-distance")),
                (i.properties["target-limit"] = M(t, "target-limit"));
              break;
            case "VSG-CALLOUT-TRANSFORM":
              (i = B("callout-transform", t)),
                (i.properties.offset = k(t, "offset"));
              break;
            case "VSG-HEAD-FACING-TRANSFORM":
              i = B("head-facing-transform", t);
              break;
            case "VSG-PIN-TO-VIEW-TRANSFORM":
              (i = B("pin-to-view-transform", t)),
                (i.properties["offscreen-z-depth"] = M(t, "offscreen-z-depth")),
                (i.properties["off-axis-limit"] = M(t, "off-axis-limit")),
                (i.properties["transition-limit"] = M(t, "transition-limit"));
          }
          return [o, i];
        })(e, t),
        i = [];
      for (let e = 0; e < t.children.length; e++) {
        let o = t.children.item(e);
        if (o.children) {
          let e = A(n, o);
          e && (i = i.concat(e));
        }
      }
      return n.bShouldAbort
        ? null
        : o
        ? (i.length > 0 && (o.children = i), [o])
        : i.length > 0
        ? 1 == i.length
          ? i
          : [{ children: i }]
        : null;
    }
    let N,
      P,
      L,
      x,
      V = [],
      j = null,
      F = null,
      H = null;
    function U(e, t) {
      return e + "::" + t;
    }
    function W(e) {
      return e
        ? (function (e) {
            return e && e.includes("::");
          })(e)
          ? e
          : U(G(), e)
        : null;
    }
    function G() {
      var e, t;
      return null !=
        (t =
          null === (e = VRHTML) || void 0 === e
            ? void 0
            : e.VROverlay.ThisOverlayKey())
        ? t
        : N;
    }
    function z() {
      x = !0;
    }
    function q(e) {
      e != H && ((H = e), K());
    }
    function K() {
      j ||
        (j = window.setTimeout(
          () =>
            Object(o.a)(this, void 0, void 0, function* () {
              let e = document.body;
              P && (e = P);
              let t = {
                type: "root",
                rootproperties: {
                  relatchDashboardTransform: x,
                  sceneCompositeMult: H,
                },
                children: A({ currentPanel: null, bShouldAbort: !1 }, e),
              };
              F ||
                (console.log("Initializing sg_mailbox"),
                (F = new a()),
                yield F.Init("sg_mailbox", L));
              let n = {
                type: "update_scene_graph",
                owning_overlay_key: G(),
                scene_graph: t,
                retired_sgids: V,
              };
              F.SendMessage("vrcompositor_systemlayer", n),
                (j = null),
                (V = []),
                (x = !1);
            }),
          0
        ));
    }
    function Y(e, t) {
      return e ? { x: e.x ? e.x : t.x, y: e.y ? e.y : t.y } : t;
    }
    function X(e, t) {
      return e
        ? { x: e.x ? e.x : t.x, y: e.y ? e.y : t.y, z: e.z ? e.z : t.z }
        : t;
    }
    function Q(e, t) {
      return e
        ? { r: e.r ? e.r : t.r, g: e.g ? e.g : t.g, b: e.b ? e.b : t.b }
        : t;
    }
    function J(e) {
      if (e) return [e.x, e.y];
    }
    function Z(e) {
      var t;
      return null ===
        (t = (function (e) {
          if (e) return [e.x, e.y, e.z];
        })(e)) || void 0 === t
        ? void 0
        : t.join(" ");
    }
    class $ extends E.Component {
      constructor(e) {
        super(e),
          (this.m_domRef = E.createRef()),
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
        return B(this.getNodeType(), e);
      }
      getCurrentRootElement() {
        return this.m_domRef.current;
      }
      componentDidMount() {
        this.m_buildNodeOverride &&
          (this.m_domRef.current.buildNode = this.m_buildNodeOverride),
          K();
      }
      componentDidUpdate() {
        K();
      }
      componentWillUnmount() {
        var e;
        (e = this.m_SGID),
          V.push(e),
          K(),
          this.m_domRef.current &&
            this.m_buildNodeOverride &&
            delete this.m_domRef.current.buildNode;
      }
      render() {
        return E.cloneElement(this.internalRender(), {
          id: this.props.id,
          "vsg-type": this.getNodeType(),
          sgid: this.m_SGID,
          ref: this.m_domRef,
        });
      }
      internalRender() {
        return this.m_buildNodeOverride
          ? E.createElement("vsg-node", null, this.props.children)
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
    Object(o.b)([r.a], ee.prototype, "buildNode", null);
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
    Object(o.b)([r.a], te.prototype, "buildNode", null);
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
        const o = this.createSgNode(t);
        return (
          (o.properties.tab_name = null != (n = this.props.tabName) ? n : ""),
          (o.properties.mountable_id = W(this.m_sMountableUnqualifiedID)),
          (o.properties.icon_uri = this.props.iconUri),
          (o.properties.icon_overlay_key = this.props.iconOverlayKey),
          (o.properties.summon_overlay_key = this.props.summonOverlayKey),
          [e, o]
        );
      }
      internalRender() {
        return E.createElement(
          "vsg-node",
          { id: this.props.id },
          E.createElement(
            ee,
            { id: this.m_sMountableUnqualifiedID },
            this.props.children
          )
        );
      }
    }
    Object(o.b)([r.a], ne.prototype, "buildNode", null);
    class oe extends $ {
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
            let e = Q(this.props.color, { r: 1, g: 1, b: 1 });
            n.properties.color = [e.r, e.g, e.b];
          }
        else n.properties.color = [1, 1, 1];
        return [e, n];
      }
    }
    Object(o.b)([r.a], oe.prototype, "buildNode", null);
    class ie extends $ {
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
    var re, ae, se, le, ce, de, pe, he, ue, me, be;
    Object(o.b)([r.a], ie.prototype, "buildNode", null),
      (function (e) {
        (e[(e.Seated = 0)] = "Seated"),
          (e[(e.Standing = 1)] = "Standing"),
          (e[(e.Raw = 2)] = "Raw");
      })(re || (re = {}));
    class ge extends $ {
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
          : ((e = X(this.props.translation, { x: 0, y: 0, z: 0 })),
            (t = g(
              u(X(this.props.rotation, { x: 0, y: 0, z: 0 }), Math.PI / 180)
            )),
            (n =
              "number" == typeof this.props.scale
                ? {
                    x: this.props.scale,
                    y: this.props.scale,
                    z: this.props.scale,
                  }
                : X(this.props.scale, { x: 1, y: 1, z: 1 })));
        let o = Z(e),
          i = (function (e) {
            if (e) return e.w + " " + e.x + " " + e.y + " " + e.z;
          })(t),
          r = Z(n);
        return E.createElement(
          "vsg-transform",
          {
            translation: o,
            rotation: i,
            scale: r,
            "parent-path": this.props.parent_path,
            "parent-origin": re[this.props.parent_origin],
            "parent-id": this.props.parent_id,
          },
          this.props.children
        );
      }
    }
    class _e extends $ {
      constructor(e) {
        super(e);
      }
      internalRender() {
        return E.createElement(
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
    function Se(e) {
      if (e) return [e.u, e.v];
    }
    function ve(e) {
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
    class ye extends $ {
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
        ye.s_bPanelsAreDirty = !0;
      }
      componentDidMount() {
        super.componentDidMount(),
          (this.m_resizeObserver = new ResizeObserver(this.onResizeObserved)),
          this.m_resizeObserver.observe(this.getCurrentRootElement()),
          (this.m_nEmbeddedIndex = fe.Current().addEmbeddedPanelUVs(this)),
          (ye.s_bPanelsAreDirty = !0),
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
          (ye.s_bPanelsAreDirty = !0),
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
      createOverdragBlockingElement(e, t, n, o) {
        let i = document.createElement("div");
        (i.style.position = "absolute"),
          (i.style.top = t + "px"),
          (i.style.left = e + "px"),
          (i.style.width = n + "px"),
          (i.style.height = o + "px"),
          (i.style.zIndex = "90019001"),
          this.m_overdragBlockingElements.push(i),
          document.body.appendChild(i);
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
        var n, o, i, r;
        if (this.visibility != ce.Visible) return [e, null];
        let a = Object.assign({}, e),
          s = this.createSgNode(t),
          l = { x: 0, y: 0 };
        l =
          "object" == typeof this.props.origin
            ? Y(this.props.origin, { x: 0, y: 0 })
            : ve(this.props.origin);
        const c = this.props.overlay_key,
          d = G();
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
          (s.properties.uv_min = null != (n = Se(this.m_UVsMin)) ? n : void 0),
          (s.properties.uv_max = null != (o = Se(this.m_UVsMax)) ? o : void 0),
          (s.properties.width = null != (i = this.props.width) ? i : void 0),
          (s.properties.height = null != (r = this.props.height) ? r : void 0),
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
          (s.properties.origin = J(l)),
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
        return E.createElement(
          "vsg-node",
          { style: { display: this.visibility == ce.Hidden ? "none" : null } },
          this.props.children
        );
      }
    }
    (ye.s_bPanelsAreDirty = !1),
      Object(o.b)([r.a], ye.prototype, "onResizeObserved", null),
      Object(o.b)([r.a], ye.prototype, "onPanelMouseDown", null),
      Object(o.b)([r.a], ye.prototype, "onWindowMouseUp", null),
      Object(o.b)([r.a], ye.prototype, "buildNode", null);
    class fe extends E.Component {
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
          (this.m_DomRef = E.createRef()),
          (this.m_scalingDomRef = E.createRef()),
          (this.m_CanvasRef = E.createRef()),
          (this.m_DebugPointerRef = E.createRef());
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
        (ye.s_bPanelsAreDirty = !0),
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
        var o, i, r;
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
            ((o = this.props.owning_overlay_key),
            (i = this.m_DomRef.current),
            (r = this.props.web_secret),
            (N = o),
            (P = i),
            (L = r),
            console.log("Setting owning overlay key to " + o));
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
          E.createElement(
            "vsg-app",
            {
              class: e.join(" "),
              ref: this.m_DomRef,
              "sg-forced-update-number": this.state.nForcedUpdateNumber,
            },
            E.createElement("div", {
              className: "DebugPointer",
              ref: this.m_DebugPointerRef,
            }),
            E.createElement("canvas", {
              ref: this.m_CanvasRef,
              className: "EmbeddedData",
              height: fe.k_EmbeddedDataRows,
            }),
            E.createElement(
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
          o = t.height / this.m_fCurrentScale,
          i = { x: e.innerWidth / n, y: e.innerHeight / o },
          r = Math.min(i.x, i.y, 1);
        r != this.m_fCurrentScale &&
          (1 != r
            ? this.m_scalingDomRef.current.setAttribute(
                "style",
                "transform: scale(" + r + "); transform-origin: top left"
              )
            : this.m_scalingDomRef.current.removeAttribute("style"),
          (this.m_fCurrentScale = r),
          (ye.s_bPanelsAreDirty = !0)),
          ye.s_bPanelsAreDirty &&
            (this.m_mapPanels.forEach((e) => e.updateLayoutValues()),
            K(),
            (ye.s_bPanelsAreDirty = !1),
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
              o = e.m_Rect.x + e.m_Rect.width,
              i = e.m_Rect.y,
              r = e.m_Rect.y + e.m_Rect.height,
              a = 1 + 3 * e.getEmbeddedIndex();
            if (e.isExternal() || n >= o || i >= r)
              for (let e = 0; e < 3; e++) this.setPixel(a + 1, 0, 0, 0, 0);
            else
              this.setPixel(a, (65280 & n) >> 8, 255 & n, 0),
                this.setPixel(a + 1, (65280 & o) >> 8, 255 & o, 255 & i),
                this.setPixel(
                  a + 2,
                  (65280 & r) >> 8,
                  255 & r,
                  (65280 & i) >> 8
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
      setPixel(e, t, n, o, i = 255) {
        (this.m_Pixels.data[4 * e + 0] = t),
          (this.m_Pixels.data[4 * e + 1] = n),
          (this.m_Pixels.data[4 * e + 2] = o),
          (this.m_Pixels.data[4 * e + 3] = i),
          (-1 === this.m_nDirtyXMin || e < this.m_nDirtyXMin) &&
            (this.m_nDirtyXMin = e),
          (-1 === this.m_nDirtyXMax || e > this.m_nDirtyXMax) &&
            (this.m_nDirtyXMax = e);
      }
    }
    (fe.s_Current = null),
      (fe.k_EmbeddedDataRows = 1),
      Object(o.b)([i.bind], fe.prototype, "toggleDebugPointer", null),
      Object(o.b)([i.bind], fe.prototype, "onMouseMove", null),
      Object(o.b)([i.bind], fe.prototype, "forceLayoutUpdate", null),
      Object(o.b)([i.bind], fe.prototype, "onMutation", null);
    Object(o.b)(
      [r.a],
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
            let t = Q(e.color, { r: 0, g: 0, b: 0 });
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
    Object(o.b)([r.a], Ce.prototype, "buildNode", null);
    class Oe extends $ {
      constructor(e) {
        super(e);
      }
      internalRender() {
        return E.createElement("vsg-line", {
          "target-id": this.props.target_id,
          thickness: this.props.thickness,
          "start-buffer": this.props.start_buffer,
          "end-buffer": this.props.end_buffer,
        });
      }
    }
    class Ie extends $ {
      constructor(e) {
        super(e);
      }
      internalRender() {
        return E.createElement(
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
    class Ee extends $ {
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
          ? (n = Y(this.props.location, { x: 0, y: 0 }))
          : "number" == typeof this.props.location &&
            (n = ve(this.props.location));
        let o = this.createSgNode(t);
        if (this.props.latched && null !== this.m_latchedPosition)
          (o.properties["anchor-u"] = this.m_latchedPosition.u),
            (o.properties["anchor-v"] = this.m_latchedPosition.v);
        else if (n) {
          const t = { u: 0.5 * n.x + 0.5, v: -0.5 * n.y + 0.5 },
            i = e.currentPanel.props.overlay_key
              ? t
              : e.currentPanel.scaleLocalUVToGlobal(t);
          (o.properties["anchor-u"] = i.u), (o.properties["anchor-v"] = i.v);
        } else {
          const n = t.ownerDocument,
            i = t.getBoundingClientRect(),
            r = i.left + i.width / 2,
            a = i.top + i.height / 2,
            s = e.currentPanel.m_Rect;
          if (r < s.x || r > s.x + s.width || a < s.y || a > s.y + s.height)
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
          (o.properties["anchor-u"] = r / l),
            (o.properties["anchor-v"] = a / c);
        }
        return (
          (this.m_latchedPosition = {
            u: o.properties["anchor-u"],
            v: o.properties["anchor-v"],
          }),
          [e, o]
        );
      }
    }
    Object(o.b)([r.a], Ee.prototype, "buildNode", null);
    !(function (e) {
      (e[(e.LockedToParent = 0)] = "LockedToParent"),
        (e[(e.LockedToWorld = 1)] = "LockedToWorld");
    })(pe || (pe = {}));
    class ke extends $ {
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
          o = this.props.min_angular_velocity
            ? (this.props.min_angular_velocity * Math.PI) / 180
            : null,
          i = this.props.max_angular_velocity
            ? (this.props.max_angular_velocity * Math.PI) / 180
            : null;
        return E.createElement(
          "vsg-elastic-head-transform",
          {
            "start-angle-threshold": e,
            "stop-angle-threshold": t,
            "ease-in-time": this.props.ease_in_time,
            "ease-in-power": this.props.ease_in_power,
            "ease-out-angle-threshold": n,
            "ease-out-power": this.props.ease_out_power,
            "min-angular-velocity": o,
            "max-angular-velocity": i,
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
        return E.createElement(
          "vsg-head-facing-transform",
          null,
          this.props.children
        );
      }
    }
    function De() {
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
      })(ue || (ue = {})),
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
      })(be || (be = {}));
    var Re, we, Te, Be, Ae, Ne, Pe, Le, xe, Ve, je, Fe, He, Ue, We, Ge, ze;
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
    })(Re || (Re = {})),
      (function (e) {
        (e[(e.Activated = 0)] = "Activated"),
          (e[(e.Deactivated = 1)] = "Deactivated");
      })(we || (we = {})),
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
      })(Te || (Te = {})),
      (function (e) {
        (e[(e.None = 0)] = "None"), (e[(e.Mouse = 1)] = "Mouse");
      })(Be || (Be = {})),
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
      })(Ae || (Ae = {})),
      (function (e) {
        (e[(e.Invalid = 0)] = "Invalid"),
          (e[(e.HMD = 1)] = "HMD"),
          (e[(e.Controller = 2)] = "Controller"),
          (e[(e.GenericTracker = 3)] = "GenericTracker"),
          (e[(e.TrackingReference = 4)] = "TrackingReference"),
          (e[(e.DisplayRedirect = 5)] = "DisplayRedirect");
      })(Ne || (Ne = {})),
      (function (e) {
        (e[(e.Unknown = 0)] = "Unknown"),
          (e[(e.NVIDIA = 1)] = "NVIDIA"),
          (e[(e.AMD = 2)] = "AMD");
      })(Pe || (Pe = {})),
      (function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Starting = 1)] = "Starting"),
          (e[(e.Quitting = 2)] = "Quitting"),
          (e[(e.Running = 3)] = "Running"),
          (e[(e.Waiting = 4)] = "Waiting");
      })(Le || (Le = {})),
      (function (e) {
        (e[(e.ButtonPress_0 = 0)] = "ButtonPress_0"),
          (e[(e.ButtonPress_1 = 1)] = "ButtonPress_1"),
          (e[(e.ButtonPress_2 = 2)] = "ButtonPress_2"),
          (e[(e.ButtonPress_3 = 3)] = "ButtonPress_3"),
          (e[(e.CouldntFindSystemOverlay = 4)] = "CouldntFindSystemOverlay"),
          (e[(e.CouldntFindOrCreateClientOverlay = 5)] =
            "CouldntFindOrCreateClientOverlay"),
          (e[(e.ApplicationQuit = 6)] = "ApplicationQuit");
      })(xe || (xe = {})),
      (function (e) {
        (e[(e.Normal = 0)] = "Normal"),
          (e[(e.Password = 1)] = "Password"),
          (e[(e.Submit = 2)] = "Submit");
      })(Ve || (Ve = {})),
      (function (e) {
        (e[(e.SingleLine = 0)] = "SingleLine"),
          (e[(e.MultipleLines = 1)] = "MultipleLines");
      })(je || (je = {})),
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
      })(He || (He = {})),
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
      })(Ge || (Ge = {})),
      (function (e) {
        (e[(e.Minimal = 1)] = "Minimal"), (e[(e.Modal = 2)] = "Modal");
      })(ze || (ze = {}));
    class qe extends E.Component {
      constructor(e) {
        super(e);
        let t = {};
        if (VRHTML)
          try {
            let e = VRHTML.VRProperties.GetStringProperty(
              this.props.sDevicePath,
              Ae.RenderModelName_String
            );
            if (e) {
              let n = VRHTML.VRRenderModelsInternal.FindComponentForInputSource(
                e,
                this.props.sInputPath
              );
              if (n) {
                let o = VRHTML.VRRenderModels.GetComponentStateForDevicePath(
                  e,
                  n,
                  this.props.sDevicePath
                );
                o && (t.xfTransform = o.xfTrackingToComponentLocal);
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
        return E.createElement(
          ge,
          {
            id: this.props.id,
            parent_path: this.props.sDevicePath,
            transform: this.state.xfTransform,
          },
          this.props.children
        );
      }
    }
    class Ke extends $ {
      constructor(e) {
        super(e);
      }
      internalRender() {
        return E.createElement(
          "vsg-callout-transform",
          { offset: Z(this.props.vOffset) },
          this.props.children
        );
      }
    }
    class Ye extends $ {
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
    Object(o.b)([r.a], Ye.prototype, "buildNode", null),
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
        return p;
      }),
      n.d(t, "U", function () {
        return h;
      }),
      n.d(t, "V", function () {
        return u;
      }),
      n.d(t, "M", function () {
        return m;
      }),
      n.d(t, "N", function () {
        return b;
      }),
      n.d(t, "I", function () {
        return g;
      }),
      n.d(t, "R", function () {
        return _;
      }),
      n.d(t, "T", function () {
        return S;
      }),
      n.d(t, "b", function () {
        return v;
      }),
      n.d(t, "J", function () {
        return y;
      }),
      n.d(t, "W", function () {
        return f;
      }),
      n.d(t, "h", function () {
        return C;
      }),
      n.d(t, "L", function () {
        return O;
      }),
      n.d(t, "fb", function () {
        return I;
      }),
      n.d(t, "j", function () {
        return ne;
      }),
      n.d(t, "jb", function () {
        return oe;
      }),
      n.d(t, "X", function () {
        return ie;
      }),
      n.d(t, "S", function () {
        return te;
      }),
      n.d(t, "B", function () {
        return re;
      }),
      n.d(t, "lb", function () {
        return ge;
      }),
      n.d(t, "kb", function () {
        return _e;
      }),
      n.d(t, "f", function () {
        return U;
      }),
      n.d(t, "cb", function () {
        return z;
      }),
      n.d(t, "gb", function () {
        return q;
      }),
      n.d(t, "Q", function () {
        return K;
      }),
      n.d(t, "eb", function () {
        return fe;
      }),
      n.d(t, "u", function () {
        return de;
      }),
      n.d(t, "db", function () {
        return Ce;
      }),
      n.d(t, "P", function () {
        return Oe;
      }),
      n.d(t, "bb", function () {
        return Ie;
      }),
      n.d(t, "Z", function () {
        return Ee;
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
        return ye;
      }),
      n.d(t, "G", function () {
        return ke;
      }),
      n.d(t, "K", function () {
        return Me;
      }),
      n.d(t, "e", function () {
        return qe;
      }),
      n.d(t, "d", function () {
        return Ke;
      }),
      n.d(t, "k", function () {
        return Ye;
      }),
      n.d(t, "H", function () {
        return he;
      }),
      n.d(t, "i", function () {
        return De;
      }),
      n.d(t, "q", function () {
        return ue;
      }),
      n.d(t, "z", function () {
        return me;
      }),
      n.d(t, "A", function () {
        return be;
      }),
      n.d(t, "ob", function () {
        return 0;
      }),
      n.d(t, "nb", function () {
        return -1;
      }),
      n.d(t, "m", function () {
        return we;
      }),
      n.d(t, "D", function () {
        return Te;
      }),
      n.d(t, "E", function () {
        return Be;
      }),
      n.d(t, "y", function () {
        return Ae;
      }),
      n.d(t, "x", function () {
        return Ne;
      }),
      n.d(t, "v", function () {
        return Le;
      }),
      n.d(t, "C", function () {
        return xe;
      }),
      n.d(t, "p", function () {
        return Ve;
      }),
      n.d(t, "o", function () {
        return je;
      }),
      n.d(t, "l", function () {
        return He;
      }),
      n.d(t, "r", function () {
        return Ue;
      }),
      n.d(t, "w", function () {
        return We;
      }),
      n.d(t, "F", function () {
        return Ge;
      }),
      n.d(t, "n", function () {
        return ze;
      });
    t.mb = VRHTML;
  },
  "8GAN": function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return p;
    }),
      n.d(t, "a", function () {
        return h;
      }),
      n.d(t, "c", function () {
        return u;
      });
    var o,
      i = n("mrSG"),
      r = n("q1tI"),
      a = n("7wIv"),
      s = n("/i/y"),
      l = n("GXif"),
      c = n("okNM"),
      d = n("hcOo");
    const p = "resetuniverseorigincountdown",
      h = "begin_reset_universe_origin_countdown";
    let u = (o = class extends r.Component {
      constructor(e) {
        super(e),
          (this.m_countdownTimeout = 0),
          (this.m_fadeFinishTimeout = 0),
          (this.m_mailbox = new s.c()),
          this.m_mailbox.Init(p).then(() => {
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
                o.kFadeDurationMs
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
        return r.createElement(
          s.lb,
          { parent_path: "/user/head" },
          r.createElement(
            s.lb,
            { translation: { y: -0.05, z: -0.9 }, scale: n },
            r.createElement(
              s.Y,
              {
                width: void 0,
                height: o.kPanelHeight,
                interactive: !1,
                sort_order: 1e3,
              },
              r.createElement(
                "div",
                {
                  className: Object(d.a)("ResetSeatedCountdownParent", [
                    "Fading",
                    this.state.fading,
                  ]),
                  style: { width: o.kPixelWidth },
                },
                r.createElement(
                  "div",
                  { className: "FlexColumn" },
                  r.createElement(
                    "div",
                    { className: "ResetSeatedCountdownRow" },
                    r.createElement(
                      "div",
                      { className: "ResetSeatedCountdownText" },
                      this.state.countdown_seconds
                    )
                  ),
                  r.createElement(
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
    (u.kPanelHeight = 0.2),
      (u.kPixelWidth = 400),
      (u.kFadeDurationMs = 1e3),
      Object(i.b)(
        [a.bind],
        u.prototype,
        "OnBeginResetUniverseOriginCountdown",
        null
      ),
      Object(i.b)([a.bind], u.prototype, "CountdownTick", null),
      Object(i.b)([a.bind], u.prototype, "HideOverlay", null),
      (u = o = Object(i.b)([c.a], u));
  },
  Ck0r: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return i;
    });
    var o = n("q1tI");
    function i(e) {
      return o.createElement(
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
        o.createElement(
          "g",
          null,
          o.createElement("path", {
            d: "M93.8,50v28.1c0,8.6-7,15.6-15.6,15.6H21.9c-8.6,0-15.6-7-15.6-15.6V21.9c0-8.6,7-15.6,15.6-15.6H50c1.7,0,3.1,1.4,3.1,3.1\r\n\t\t\t\ts-1.4,3.1-3.1,3.1H21.9c-5.2,0-9.4,4.2-9.4,9.4v56.3c0,5.2,4.2,9.4,9.4,9.4h56.3c5.2,0,9.4-4.2,9.4-9.4V50c0-1.7,1.4-3.1,3.1-3.1\r\n\t\t\t\tS93.8,48.3,93.8,50z M68.8,12.5h14.3L47.8,47.8c-1.2,1.2-1.2,3.2,0,4.4c0,0,0,0,0,0c1.2,1.2,3.2,1.2,4.4,0c0,0,0,0,0,0l35.3-35.3\r\n\t\t\t\tv14.3c0,1.7,1.4,3.1,3.1,3.1l0,0c1.7,0,3.1-1.4,3.1-3.1V9.4c0-0.8-0.3-1.6-0.9-2.2c-0.6-0.6-1.4-0.9-2.2-0.9H68.8\r\n\t\t\t\tc-1.7,0-3.1,1.4-3.1,3.1S67,12.5,68.8,12.5z",
          })
        )
      );
    }
  },
  Gmup: function (e, t, n) {
    "use strict";
    var o,
      i,
      r,
      a = n("mrSG"),
      s = n("/i/y"),
      l = n("7wIv"),
      c = n.n(l),
      d = n("q1tI"),
      p = n("6YgL"),
      h = n("7uy8"),
      u = n("GXif"),
      m = n("Q+Z6"),
      b = n("okNM"),
      g = n("YRJX"),
      _ = n("2vnA"),
      S = n("X3sx"),
      v = n("p9CI"),
      y = n("nAcY");
    var f;
    !(function (e) {
      (e[(e.Dashboard = 0)] = "Dashboard"),
        (e[(e.LeftHand = 1)] = "LeftHand"),
        (e[(e.RightHand = 2)] = "RightHand"),
        (e[(e.World = 3)] = "World");
    })(f || (f = {}));
    let C = (o = class extends d.Component {
      constructor(e) {
        super(e),
          (this.m_mailbox = new s.c()),
          (this.m_refWindowScrollPanel = d.createRef()),
          (this.state = { desktopView: null }),
          this.m_mailbox.Init(o.k_sMailboxName);
      }
      setSiblingReferences(e) {
        this.setState({ desktopView: e });
      }
      onWindowViewCreated(e, t) {
        var n, o;
        null === (n = this.m_refWindowScrollPanel.current) ||
          void 0 === n ||
          n.scrollTo({
            left:
              null === (o = this.m_refWindowScrollPanel.current) || void 0 === o
                ? void 0
                : o.scrollWidth,
            behavior: "smooth",
          });
      }
      render() {
        var e, t, n, o;
        if (
          !this.state.desktopView ||
          (null === (e = this.state.desktopView) || void 0 === e
            ? void 0
            : e.state.bIsUsingSteamDesktop)
        )
          return null;
        const i =
          this.props.bWindowViewEnabled ||
          (null === (t = this.state.desktopView) || void 0 === t
            ? void 0
            : t.state.desktopIndices.length) > 1;
        return d.createElement(
          g.f,
          Object.assign({}, this.props, {
            additionalClassNames: this.props.bWindowViewEnabled
              ? "DesktopTray FixedWidth"
              : "DesktopTray",
          }),
          i &&
            d.createElement(
              v.b,
              {
                scrollDirection: v.a.Horizontal,
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
                      return d.createElement(g.n, {
                        additionalClassNames: "ViewButton Fixed",
                        key: e,
                        label: e.toString(),
                        active:
                          (null === (t = this.state.desktopView) || void 0 === t
                            ? void 0
                            : t.currentDesktopIndex) == e,
                        title: Object(u.c)("#Desktop_X", e),
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
                  null === (o = this.state.desktopView) || void 0 === o
                    ? void 0
                    : o.state.mapWindowInfo.keys()
                ).map((e) => {
                  var t, n, o;
                  return d.createElement(g.n, {
                    additionalClassNames: "ViewButton",
                    iconUrl: "/dashboard/images/icons/svr_desktop_alt.svg",
                    key: e,
                    active:
                      (null === (t = this.state.desktopView) || void 0 === t
                        ? void 0
                        : t.state.sCurrentWindowOverlayKey) == e,
                    title:
                      null ===
                        (o = this.props.mapWindows.get(
                          null === (n = this.state.desktopView) || void 0 === n
                            ? void 0
                            : n.state.mapWindowInfo.get(e).sHwnd
                        )) || void 0 === o
                        ? void 0
                        : o.title,
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
              d.createElement(g.n, {
                iconUrl: "/dashboard/images/icons/icon_add.png",
                additionalClassNames: "AddWindow",
                title: Object(u.c)("#AddView"),
                onClick: this.props.onToggleWindowList,
                onMouseEnter: this.props.onClearPopupMenuTimeout,
                onMouseLeave: () => this.props.onStartPopupMenuTimeout(500),
              })
            ),
          d.createElement(
            "div",
            { className: "Section" },
            d.createElement(g.n, {
              iconUrl: this.props.bDarkMode
                ? "/dashboard/images/icons/svr_nightmode.svg"
                : "/dashboard/images/icons/svr_lightmode.svg",
              title: Object(u.c)("#Settings_ToggleDarkMode"),
              onClick: this.props.onToggleDarkMode,
            })
          )
        );
      }
    });
    (C.k_sMailboxName = "systemui_desktoptray"),
      (C = o = Object(a.b)([b.a], C));
    let O = (i = class extends d.Component {
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
          this.m_mailbox.Init(i.k_sMailboxName).then(() => {
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
          o = [];
        for (
          this.state.mapDesktopInfo.clear();
          null !==
          (null === (e = VRHTML) || void 0 === e
            ? void 0
            : e.VROverlay.FindOverlay("system.desktop." + n));

        )
          o.push(n),
            this.state.mapDesktopInfo.set(n, { dockLocation: f.Dashboard }),
            n++;
        (null != (t = m.d.settings.get("/settings/dashboard/desktopIndex"))
          ? t
          : 1) > o.length &&
          m.d.SetSettingsValue("/settings/dashboard/desktopIndex", 1),
          this.setState({ bIsReady: !0, desktopIndices: o });
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
              target_dpi_panel_id: g.q,
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
                  Object(u.c)("#Size")
                ),
                d.createElement(S.a, {
                  additionalClassName: "OverlayControlBarSlider",
                  min: 0.75,
                  max: 1.5,
                  value: this.desktopViewScale,
                  valueStyleVariant: S.c.OnHandle,
                  onChange: this.onDesktopScaleChange,
                  detents: [1],
                  renderValue: (e) => (100 * e).toFixed(0) + "%",
                }),
                d.createElement(g.n, {
                  iconUrl: "/dashboard/images/icons/svr_keyboard.svg",
                  additionalClassNames: "Keyboard",
                  onClick: this.ToggleKeyboard,
                }),
                d.createElement(g.n, {
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
                d.createElement(g.n, {
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
                d.createElement(g.n, {
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
                  d.createElement(g.n, {
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
            g.h,
            { visible: !0 },
            d.createElement(
              "div",
              { className: "NoDesktopFound" },
              d.createElement("h2", null, Object(u.c)("#DesktopViewsUpdating"))
            )
          );
        if (0 === this.state.desktopIndices.length)
          return d.createElement(
            g.h,
            { visible: !0 },
            d.createElement(
              "div",
              { className: "NoDesktopFound" },
              d.createElement("h2", null, Object(u.c)("#NoDesktopFound"))
            )
          );
        if (
          this.state.currentOverlayDockLocation == f.LeftHand ||
          this.state.currentOverlayDockLocation == f.RightHand
        )
          return d.createElement(
            g.h,
            { visible: !0 },
            d.createElement(
              "div",
              { className: "NoDesktopFound" },
              d.createElement(
                "h2",
                null,
                this.state.currentOverlayDockLocation == f.LeftHand &&
                  Object(u.c)("#DockedOnLeftController"),
                this.state.currentOverlayDockLocation == f.RightHand &&
                  Object(u.c)("#DockedOnRightController")
              ),
              d.createElement(
                p.a,
                {
                  className: "ButtonControl",
                  onClick: () => {
                    this.props.onDockOverlay(
                      this.sCurrentOverlayKey,
                      f.Dashboard
                    );
                  },
                },
                Object(u.c)("#DockHere")
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
                d.createElement(s.Z, { id: g.r, location: s.s.TopCenter }),
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
                d.createElement(s.Z, { id: g.r, location: s.s.TopCenter }),
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
    function I(e) {
      switch (e) {
        case f.LeftHand:
          return "/user/hand/left";
        case f.RightHand:
          return "/user/hand/right";
        default:
          return "";
      }
    }
    (O.k_sMailboxName = "systemui_desktopview"),
      Object(a.b)([_.f], O.prototype, "desktopCount", null),
      Object(a.b)([_.f], O.prototype, "sCurrentOverlayKey", null),
      Object(a.b)([_.f], O.prototype, "currentDesktopIndex", null),
      Object(a.b)([_.f], O.prototype, "currentWindowHwnd", null),
      Object(a.b)([_.f], O.prototype, "desktopViewScale", null),
      Object(a.b)([c.a], O.prototype, "dockOverlay", null),
      Object(a.b)([c.a], O.prototype, "onDesktopScaleChange", null),
      Object(a.b)([c.a], O.prototype, "onDesktopChange", null),
      Object(a.b)([c.a], O.prototype, "onDesktopViewUpdating", null),
      Object(a.b)([c.a], O.prototype, "onDesktopViewReady", null),
      Object(a.b)([c.a], O.prototype, "onWindowViewChange", null),
      Object(a.b)([c.a], O.prototype, "CloseWindow", null),
      Object(a.b)([c.a], O.prototype, "ToggleKeyboard", null),
      Object(a.b)([c.a], O.prototype, "OnKeyboardClosed", null),
      (O = i = Object(a.b)([b.a], O));
    let E = (r = class extends d.Component {
      constructor(e) {
        super(e),
          (this.state = {
            fOverlayScale: this.GetDefaultScaleForLocation(),
            xfTransform: null,
            sParent: I(this.props.dockLocation),
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
                (t = Math.min(2 * t, r.sfOverlayScaleMax)),
                (e.scale = { x: 1, y: 1, z: 1 }),
                this.setState({ xfTransform: e, fOverlayScale: t });
              break;
            }
            case f.World: {
              let e = this.props.xfInitial,
                t = this.state.fOverlayScale;
              Math.abs(e.scale.x - 1) < 0.1 &&
                (t = Math.max(t / 2, r.sfOverlayScaleMin)),
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
              sParent: I(this.props.dockLocation),
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
        let o = [];
        switch (this.state.sParent) {
          case "/user/hand/left":
            n && o.push({ pose: n, location: f.RightHand });
            break;
          case "/user/hand/right":
            t && o.push({ pose: t, location: f.LeftHand });
            break;
          case "/user/head":
            t && o.push({ pose: t, location: f.LeftHand }),
              n && o.push({ pose: n, location: f.RightHand });
        }
        if (0 == o.length)
          return void setTimeout(this.computeDestination, r.sfMovePulseMS);
        let i = VRHTML.MultiplyTransforms(
          e.xfDeviceToAbsoluteTracking,
          this.state.xfTransform
        );
        o.forEach((e) => {
          let t = VRHTML.ChangeBasis(i, e.pose.xfDeviceToAbsoluteTracking);
          Object(s.N)(t.translation) > r.sfMaxDockDist
            ? this.state.bIsOutsideMaxDist ||
              (y.b.Instance.triggerHaptic(y.a.SlidingEdge),
              this.setState({ bIsOutsideMaxDist: !0, destination: f.World }))
            : (this.state.bIsOutsideMaxDist ||
                (this.props.dockLocation == f.World &&
                  this.state.destination == f.World)) &&
              (y.b.Instance.triggerHaptic(y.a.SlidingEdge),
              this.setState({
                bIsOutsideMaxDist: !1,
                destination: e.location,
              }));
        }),
          setTimeout(this.computeDestination, r.sfMovePulseMS);
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
        let o = VRHTML.MultiplyTransforms(
            e.xfDeviceToAbsoluteTracking,
            this.state.xfTransform
          ),
          i = VRHTML.ChangeBasis(o, n.xfDeviceToAbsoluteTracking);
        this.setState(
          {
            xfTransform: i,
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
          o = {
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
            n = o;
        }
        let i = VRHTML.GetPose(this.m_nMoveDeviceIndex, s.A.Standing),
          r = VRHTML.MultiplyTransforms(
            i.xfDeviceToAbsoluteTracking,
            this.state.xfTransform
          ),
          a = VRHTML.ChangeBasis(r, n.xfDeviceToAbsoluteTracking);
        this.setState({ xfTransform: a, sParent: I(this.state.destination) }),
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
          o = (n / t.unHeight) * t.unWidth,
          i = n + r.sfOverlayTrayHeight,
          a = Math.max(o, 0.175),
          l = i / 2 - r.sfOverlayTrayHeight;
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
              scale: { x: a, y: i, z: 0.008 },
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
              height: r.sfOverlayTrayHeight,
              width: void 0,
              interactive: !0,
              origin: s.s.TopCenter,
            },
            d.createElement(
              "div",
              { className: "WindowTray" },
              d.createElement(S.a, {
                additionalClassName: "WindowTraySlider",
                min: r.sfOverlayScaleMin,
                max: r.sfOverlayScaleMax,
                value: this.state.fOverlayScale,
                valueStyleVariant: S.c.OnHandle,
                onChange: this.onOverlayScaleChanged,
                detents: [0.25, 0.5],
                renderValue: (e) => (100 * e).toFixed(0) + "%",
              }),
              d.createElement(
                p.a,
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
                p.a,
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
    (E.sfMaxDockDist = 0.4),
      (E.sfMovePulseMS = 100),
      (E.sfOverlayTrayHeight = 0.025),
      (E.sfOverlayScaleMin = 0.1),
      (E.sfOverlayScaleMax = 1),
      Object(a.b)([c.a], E.prototype, "onOverlayScaleChanged", null),
      Object(a.b)([c.a], E.prototype, "computeDestination", null),
      Object(a.b)([c.a], E.prototype, "startMove", null),
      Object(a.b)([c.a], E.prototype, "endMove", null),
      (E = r = Object(a.b)([b.a], E));
    var k,
      M = n("hcOo");
    let D = (k = class extends d.Component {
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
            (e) => !k.s_failedImages.includes(e)
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
          k.s_failedImages.push(this.m_imageSources[this.m_imageIndex]),
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
    var R;
    (D.defaultProps = {
      fallbackImageUrl: "images/appimage_default_portrait.png",
    }),
      (D.s_failedImages = []),
      Object(a.b)([l.bind], D.prototype, "loadNextImage", null),
      Object(a.b)([l.bind], D.prototype, "onLoad", null),
      Object(a.b)([l.bind], D.prototype, "onError", null),
      (D = k = Object(a.b)([b.a], D)),
      (function (e) {
        (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
      })(R || (R = {}));
    const w = (e) =>
      d.createElement(
        "div",
        {
          className: Object(M.a)("ButtonContainer", R[e.side], [
            "Disabled",
            !1 === e.enabled,
          ]),
        },
        d.createElement(
          p.a,
          { className: "ButtonControl", onClick: e.onClick },
          e.side == R.Left
            ? d.createElement(d.Fragment, null, "‹")
            : d.createElement(d.Fragment, null, "›")
        )
      );
    class T extends d.Component {
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
        const o = n.children;
        if (!o || 0 == o.length) return;
        const i = null != (t = this.props.paginationAlignmentOffset) ? t : 0,
          r = o[0],
          a = this.m_bScrolling ? this.m_nCurrentScrollTarget : n.scrollLeft,
          s = r.getBoundingClientRect().left + n.scrollLeft,
          l = r.clientWidth,
          c = n.clientWidth,
          d = Math.floor(c / l) - 1,
          p = Math.round((a - s + i + 1) / l) + d * e - 0.4999,
          h = p > 0 ? p * l + s - i : 0;
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
            className: Object(M.a)(
              "PaginatedCarousel",
              this.props.additionalClassNames
            ),
          },
          d.createElement(
            v.b,
            {
              ref: this.m_refScrollPanel,
              scrollDirection: v.a.Horizontal,
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
                d.createElement(w, {
                  side: R.Left,
                  enabled: !this.state.bScrolledToStart,
                  onClick: this.onLeftButtonClick,
                }),
              null !== this.state.bScrolledToEnd &&
                d.createElement(w, {
                  side: R.Right,
                  enabled: !this.state.bScrolledToEnd,
                  onClick: this.onRightButtonClick,
                })
            )
        );
      }
    }
    Object(a.b)([c.a], T.prototype, "onAnimationFrame", null),
      Object(a.b)([c.a], T.prototype, "onScroll", null),
      Object(a.b)([c.a], T.prototype, "onLeftButtonClick", null),
      Object(a.b)([c.a], T.prototype, "onRightButtonClick", null);
    let B = class extends d.Component {
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
              p.a,
              {
                className: "AppButton",
                ref: this.m_refButton,
                onMouseEnter: this.buttonMouseEnter,
                onMouseLeave: this.buttonMouseLeave,
                onClick: this.props.onClick,
              },
              d.createElement(D, Object.assign({}, e), this.props.children)
            )
          )
        );
      }
    };
    Object(a.b)([c.a], B.prototype, "buttonMouseEnter", null),
      Object(a.b)([c.a], B.prototype, "buttonMouseLeave", null),
      Object(a.b)([c.a], B.prototype, "onParentScrollStop", null),
      (B = Object(a.b)([b.a], B));
    const A = () =>
        d.createElement("div", { className: "AppButton Placeholder" }),
      N = (e) => {
        var t;
        const n = !!e.loading,
          o = null != (t = e.apps) ? t : [];
        let i = "AppCarousel";
        return (
          e.className && (i += " " + e.className),
          (i += " NoAnimations"),
          d.createElement(
            T,
            { additionalClassNames: i, paginationAlignmentOffset: -20 },
            n &&
              d.createElement(
                d.Fragment,
                null,
                d.createElement(A, null),
                d.createElement(A, null),
                d.createElement(A, null),
                d.createElement(A, null)
              ),
            !n &&
              o.map((e) =>
                d.createElement(B, Object.assign({ key: e.appkey }, e))
              )
          )
        );
      };
    var P = n("Ibgz"),
      L = n("vDqi"),
      x = n.n(L),
      V = n("uTck");
    function j() {
      return x.a
        .get(
          "https://steamcommunity.com/steamvr/ajaxgethomedata/?include_apps=1&include_free_apps=1&num_apps=20"
        )
        .then((e) => e.data);
    }
    const F = () =>
      d.createElement(
        p.a,
        {
          className: "ButtonControl WithIcon PanelTopRight",
          onClick: () => P.b.Instance.openBigPictureStore(null, P.a.QuickStore),
        },
        d.createElement("span", null, Object(u.c)("#BrowseAll")),
        d.createElement("img", {
          className: "Icon BlackToWhite",
          src: "/dashboard/images/icons/svr_store.svg",
        })
      );
    var H;
    !(function (e) {
      (e[(e.Free = 0)] = "Free"),
        (e[(e.Singleplayer = 1)] = "Singleplayer"),
        (e[(e.Multiplayer = 2)] = "Multiplayer");
    })(H || (H = {}));
    let U = class extends d.Component {
      constructor(e) {
        super(e), (this.state = { storeData: null });
      }
      componentDidMount() {
        j().then((e) => this.setState({ storeData: e }));
      }
      openSteamApp(e, t, n) {
        V.a.instance.RecordUIEvent(
          "QuickStoreAppClick",
          H[t].toLowerCase() + ":" + n,
          "steam.app." + e
        ),
          P.b.Instance.openBigPictureStore(e, P.a.QuickStore);
      }
      makeAppButtonList() {
        let e = [];
        switch (this.props.section) {
          case H.Free:
            e = this.state.storeData.apps_free;
            break;
          case H.Singleplayer:
            e = this.state.storeData.apps_singleplayer;
            break;
          case H.Multiplayer:
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
          ? d.createElement(N, { apps: this.makeAppButtonList() })
          : d.createElement(N, { loading: !0 });
      }
    };
    U = Object(a.b)([b.a], U);
    class W extends d.Component {
      constructor(e) {
        super(e), (this.state = {});
      }
      render() {
        return d.createElement(
          g.h,
          { visible: this.props.visible, additionalClassNames: "QuickStore" },
          d.createElement(F, null),
          d.createElement(
            "h2",
            null,
            Object(u.c)("#StoreSection_TopSingleplayer")
          ),
          d.createElement(U, { section: H.Singleplayer }),
          d.createElement(
            "h2",
            null,
            Object(u.c)("#StoreSection_TopMultiplayer")
          ),
          d.createElement(U, { section: H.Multiplayer }),
          d.createElement("h2", null, Object(u.c)("#StoreSection_TopFree")),
          d.createElement(U, { section: H.Free })
        );
      }
    }
    var G;
    const z = () =>
        d.createElement(
          p.a,
          {
            className: "ButtonControl WithIcon PanelTopRight",
            onClick: () =>
              P.b.Instance.openBigPictureLibrary(null, P.a.QuickLaunch),
          },
          d.createElement("span", null, Object(u.c)("#BrowseAll")),
          d.createElement("img", {
            className: "Icon BlackToWhite",
            src: "/dashboard/images/icons/svr_items.svg",
          })
        ),
      q = () =>
        d.createElement(
          p.a,
          {
            className: "ButtonControl Colorful WelcomeBrowseStore",
            onClick: () => {
              var e;
              return null === (e = VRHTML) || void 0 === e
                ? void 0
                : e.VROverlay.ShowDashboard(h.r);
            },
          },
          d.createElement("span", null, Object(u.c)("#WelcomeBrowseStore"))
        ),
      K = () =>
        d.createElement(
          p.a,
          {
            className: "ButtonControl Colorful WelcomeInstall",
            onClick: () =>
              P.b.Instance.openBigPictureLibrary(null, P.a.QuickLaunch),
          },
          d.createElement("span", null, Object(u.c)("#WelcomeInstall"))
        );
    class Y extends d.Component {
      constructor(e) {
        super(e), (this.state = { storeData: null });
      }
      componentDidMount() {
        j().then((e) => this.setState({ storeData: e }));
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
            let o = t.shift();
            n.add(o.appid),
              e.push(
                d.createElement(
                  p.a,
                  {
                    key: "appid_" + o.appid,
                    className:
                      "WelcomeFloatingApp WelcomeFloatingApp" + e.length,
                    onClick: () =>
                      P.b.Instance.openBigPictureStore(
                        o.appid,
                        P.a.QuickLaunch
                      ),
                  },
                  d.createElement("img", { src: o.logo })
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
              Object(u.c)("#WelcomeHeader")
            ),
            d.createElement(
              "div",
              { className: "QuickLaunchWelcomeMessage" },
              Object(u.c)("#WelcomeMessage")
            ),
            d.createElement(q, null),
            d.createElement(K, null)
          )
        );
      }
    }
    let X = (G = class extends d.Component {
      constructor(e) {
        super(e), (this.state = {});
      }
      launchApplication(e, t, n) {
        var o, i, r;
        V.a.instance.RecordUIEvent(
          "QuickLaunchAppClick",
          (t ? "top" : "bottom") + ":" + n,
          e
        ),
          null === (i = (o = this.props).onGameLaunched) ||
            void 0 === i ||
            i.call(o),
          null === (r = VRHTML) ||
            void 0 === r ||
            r.VRApplications.LaunchApplication(e);
      }
      makeAppButtonList() {
        let e = [];
        if (null != m.d.apps)
          for (let t of m.d.apps)
            t.is_internal ||
              t.is_dashboard_overlay ||
              t.is_hidden ||
              t.is_instance ||
              G.s_setBlacklistedAppkeys.has(t.key) ||
              e.push(t);
        e.sort((e, t) => t.last_launch - e.last_launch);
        const t = (e) => {
          let t = e.image_path;
          return t.startsWith("/app/image?") && (t += "&aspect=portrait"), t;
        };
        return e.map((e, n) => {
          let o = n;
          const i = n < G.TOP_ROW_LENGTH;
          return (
            i || (o -= G.TOP_ROW_LENGTH),
            {
              key: e.key,
              appkey: e.key,
              title: e.name,
              imageUrl: t(e),
              onClick: () => this.launchApplication(e.key, i, o),
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
        if (n) e = d.createElement(Y, null);
        else {
          let n = t.slice(0, G.TOP_ROW_LENGTH),
            o = t.slice(G.TOP_ROW_LENGTH);
          e = d.createElement(
            d.Fragment,
            null,
            d.createElement(z, null),
            d.createElement("h2", null, Object(u.c)("#RecentlyPlayed")),
            d.createElement(N, { className: "TopRow", apps: n }),
            d.createElement(N, { className: "BottomRow", apps: o })
          );
        }
        return d.createElement(
          g.h,
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
    (X.TOP_ROW_LENGTH = 4),
      (X.s_setBlacklistedAppkeys = new Set([
        "openvr.tool.steamvr_room_setup",
        "openvr.tool.steamvr_media_player",
        "openvr.tool.steamvr_desktop_gametheatre",
        "openvr.tool.steamvr_tutorial",
        "openvr.tool.steamvr_environments",
        "openvr.tool.steamvr_environments_tools",
        h.J,
        h.L,
      ])),
      (X = G = Object(a.b)([b.a], X));
    var Q = n("vzqD"),
      J = n("tALH"),
      Z = n("TbT/"),
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
        J.b.OpenDeepLink(J.a.Name, e);
      }
      onOpenAppVideoSettings() {
        const e = $.a.Instance.SceneAppKey;
        Q.b.OpenDeepLink(Q.c.Name, e);
      }
      render() {
        var e;
        const t = $.a.Instance.SceneAppKey,
          n = $.a.Instance.SceneAppName,
          o = $.a.Instance.SceneApplicationState,
          i = $.a.Instance.SceneAppIsHome,
          r = m.d.settings.get("/settings/dashboard/allowAppQuitting"),
          a = !(
            null != (e = m.d.settings.get("/settings/dashboard/arcadeMode")) &&
            e
          ),
          l = m.d.apps && m.d.apps.find((e) => e.key == t);
        let c = !1;
        switch (o) {
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
          g.h,
          {
            visible: this.props.visible,
            debugName: "nowplaying",
            additionalClassNames: "NowPlaying",
          },
          d.createElement(
            "div",
            { className: "ArtworkColumn" },
            d.createElement(D, { appkey: t, title: n, imageUrl: h })
          ),
          d.createElement(
            "div",
            { className: "InfoColumn" },
            d.createElement("div", { className: "NowPlayingAppTitle" }, n),
            d.createElement(
              p.a,
              {
                className: "ButtonControl Colorful",
                onClick: this.onReturnToGame,
              },
              i
                ? Object(u.c)("#Return_To_Home")
                : Object(u.c)("#Return_To_Game")
            ),
            a &&
              d.createElement(
                Z.e,
                {
                  icon: Z.f.PopOut,
                  onClick: this.onOpenAppControllerBindingSettings,
                },
                Object(u.c)("#Controller_Bindings")
              ),
            a &&
              d.createElement(
                Z.e,
                { icon: Z.f.PopOut, onClick: this.onOpenAppVideoSettings },
                Object(u.c)("#App_Video_Settings")
              ),
            !i &&
              r &&
              d.createElement(
                p.a,
                { className: "ButtonControl", onClick: this.onExitApp },
                Object(u.c)("#Exit_Game")
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
      oe,
      ie = n("Vp/w"),
      re = n("CzjV"),
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
    })(oe || (oe = {}));
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
            eShowPopupMenu: oe.None,
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
          o =
            n == s.F.AppLaunch_Unknown ||
            n == s.F.AppLaunch_Steam ||
            n == s.F.Unknown,
          i = m.d.settings.get(
            "/settings/dashboard/allowDashboardAutoLaunchWithSteamVRHome"
          ),
          r = m.d.settings.get("/settings/steamvr/enableHomeApp"),
          a = m.d.settings.get(h.m);
        ((o || (!i && r)) && !a) ||
          setTimeout(() => {
            var e;
            return null === (e = VRHTML) || void 0 === e
              ? void 0
              : e.VROverlay.ShowDashboard(null != a ? a : "");
          }, 500),
          (this.m_appStateChangedAutorunDisposer = Object(_.e)(() => {
            const e = $.a.Instance.SceneApplicationState != s.v.None;
            this.isOverlayActive(h.o) && !e && this.switchToOverlay(h.q);
          })),
          this.updateSiblingReferences();
      }
      componentDidUpdate(e, t) {
        const n = this.getActiveOverlaySummonKey();
        let o = !1;
        t.bShown !== this.state.bShown &&
          (re.b.Instance.playSound(
            this.state.bShown ? re.a.DashboardOpen : re.a.DashboardClose
          ),
          (o = !0));
        if (
          this.state.bShown &&
          !o &&
          t.sActiveOverlayID != this.state.sActiveOverlayID
        )
          switch (n) {
            case h.C:
              re.b.Instance.playSound(re.a.ThemeSettings);
              break;
            case h.k:
              re.b.Instance.playSound(re.a.ThemeDesktop);
              break;
            case h.q:
              re.b.Instance.playSound(re.a.ThemeLibrary);
              break;
            case h.r:
              re.b.Instance.playSound(re.a.ThemeStore);
              break;
            case h.o:
              re.b.Instance.playSound(re.a.ThemeNowPlaying);
          }
        if (
          t.sActiveOverlayID != this.state.sActiveOverlayID &&
          this.isOverlayActive(h.G)
        )
          switch (P.b.Instance.lastBigPictureEntryPoint) {
            case P.a.QuickLaunch:
              this.m_bQuickLaunchShouldReturnToBigPicture = !0;
              break;
            case P.a.QuickStore:
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
        const o = m.d.settings.get(h.p),
          i = o == ne.Screenshot_Only;
        return (
          (n = i ? 2 : o == ne.Near ? 0.36 : o == ne.Middle ? 0.41 : 0.47),
          i ||
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
          let o = Object.assign({}, t.setForcingBoundsVisible);
          return (
            (o[e.for_overlay_key] = new Set(o[e.for_overlay_key])),
            e.force_bounds_visible
              ? o[e.for_overlay_key].add(e.for_id)
              : o[e.for_overlay_key].delete(e.for_id),
            { setForcingBoundsVisible: o }
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
        var o, i, r;
        if (
          (null === (o = this.m_refDesktopView.current) ||
            void 0 === o ||
            o.dockOverlay(e, t),
          t == f.LeftHand || t == f.RightHand)
        ) {
          let e = [];
          this.state.mapOverlayState.forEach((n, o) => {
            n.dockLocation == t && e.push(o);
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
          let o = {
            dockLocation: t,
            refOverlayWidget: d.createRef(),
            xfInitial: n,
          };
          this.state.mapOverlayState.set(e, o);
        } else if (e.startsWith(h.K)) {
          const t = Number.parseInt(e.substring(h.K.length + 1));
          null === (i = this.m_refDesktopView.current) ||
            void 0 === i ||
            i.onDesktopChange(t);
        } else
          null === (r = this.m_refDesktopView.current) ||
            void 0 === r ||
            r.onWindowViewChange(e);
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
        var n, o, i;
        switch (e) {
          case h.G:
            P.b.Instance.latchBigPictureEntryPoint();
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
              o = "bindingui/" + s.H[Object(s.i)()];
            this.m_mailbox.SendMessage(o, t),
              (this.m_bQuickStoreShouldReturnToBigPicture = !1),
              (e = h.c);
        }
        if (e.startsWith(h.K)) {
          const t = Number.parseInt(e.substring(h.K.length + 1));
          Number.isSafeInteger(t) &&
            (null === (o = this.m_refDesktopView.current) ||
              void 0 === o ||
              o.onDesktopChange(t)),
            (e = h.k);
        }
        let r = this.findDashboardTab(e);
        return r
          ? (this.computeFilteredOverlayTabs().includes(r) &&
              m.d.SetSettingsValue(
                h.z,
                null != (i = r.summon_overlay_key) ? i : ""
              ),
            this.setState({ sActiveOverlayID: r.mountable_id }),
            V.a.instance.RecordUIEvent(
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
        V.a.instance.StartDashboardSession(e);
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
        let o = { type: te.k_sRequestDashboardTabsMessage };
        this.m_mailbox.SendMessage("vrcompositor_systemlayer", o),
          Object(s.cb)();
      }
      hide(e) {
        this.isShown() &&
          (this.setState({ bShown: !1, eShowPopupMenu: oe.None }),
          V.a.instance.EndDashboardSession(e));
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
        P.b.Instance.lastBigPictureEntryPoint == P.a.QuickLaunch &&
        !this.isOverlayActive(h.G)
          ? P.b.Instance.openBigPictureThroughLastEntryPoint()
          : this.switchToOverlay(h.q);
      }
      onQuickStoreButtonClick() {
        this.m_bQuickStoreShouldReturnToBigPicture &&
        P.b.Instance.lastBigPictureEntryPoint == P.a.QuickStore &&
        !this.isOverlayActive(h.G)
          ? P.b.Instance.openBigPictureThroughLastEntryPoint()
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
        let o = !1;
        if (VRHTML) {
          VRHTML.VROverlay.GetPrimaryDashboardDevice() >= 0 &&
            (o = VRHTML.VRProperties.GetBoolProperty(
              VRHTML.VROverlay.GetPrimaryDashboardDevice(),
              s.y.DeviceCanPowerOff_Bool
            ));
        }
        const i = $.a.Instance.SceneAppName,
          r = $.a.Instance.SceneAppIsHome;
        let a, l;
        (a = r
          ? Object(u.c)("#Exit_SteamVR_Home")
          : i
          ? Object(u.c)("#PowerMenuQuitSceneApp", i)
          : Object(u.c)("#PowerMenuQuitSceneApp_NoApp")),
          (l = r
            ? "/dashboard/images/icons/svr_svrhome_quit_alt.svg"
            : "/dashboard/images/icons/svr_app_quit.svg");
        const c = this.findDashboardTab(h.G);
        return this.renderPopupMenu(
          d.createElement(
            d.Fragment,
            null,
            c &&
              d.createElement(g.i, {
                label: Object(u.c)("#PowerMenuSteamOverlay"),
                lineBelow: !0,
                onClick: () => {
                  this.switchToOverlay(h.G), this.showPopupMenu(oe.None);
                },
              }),
            o &&
              d.createElement(g.i, {
                label: Object(u.c)("#PowerMenuTurnOffController"),
                imageUrl: "/dashboard/images/icons/svr_controller_power.svg",
                onClick: () => {
                  var e;
                  null === (e = VRHTML) ||
                    void 0 === e ||
                    e.TurnOffVRController(),
                    this.showPopupMenu(oe.None);
                },
              }),
            n &&
              t &&
              d.createElement(g.i, {
                label: a,
                imageUrl: l,
                onClick: () => {
                  var e;
                  null === (e = VRHTML) || void 0 === e || e.QuitSceneApp(),
                    this.showPopupMenu(oe.None);
                },
              }),
            d.createElement(g.i, {
              label: Object(u.c)("#PowerMenuExitVR"),
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
          this.setState({ eShowPopupMenu: oe.None });
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
          d.createElement(p.b, { className: "PowerMenuPanel" }, e)
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
              let o = n.getBoundingClientRect();
              return e >= o.left && e <= o.right && t >= o.top && t <= o.bottom;
            })(e.clientX, e.clientY, this.m_refPopupMenu.current) &&
            this.startPopupMenuTimeout(100);
      }
      renderStatusBarTitle() {
        var e, t, n, o;
        let i = this.getActiveOverlay();
        if (!i) return null;
        if (
          (i.summon_overlay_key == h.G &&
            (P.b.Instance.lastBigPictureEntryPoint == P.a.QuickLaunch
              ? (i = this.findDashboardTab(h.q))
              : P.b.Instance.lastBigPictureEntryPoint == P.a.QuickStore &&
                (i = this.findDashboardTab(h.r))),
          i.summon_overlay_key == h.k)
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
            return d.createElement(g.m, {
              name:
                null === (n = this.state.mapWindows.get(e)) || void 0 === n
                  ? void 0
                  : n.title,
              iconUrl: this.getDashboardIconUri(i),
            });
          }
          return d.createElement(g.m, {
            name:
              "Desktop " +
              (null === (o = this.m_refDesktopView.current) || void 0 === o
                ? void 0
                : o.currentDesktopIndex),
            iconUrl: this.getDashboardIconUri(i),
          });
        }
        return d.createElement(g.m, {
          name: i.tab_name,
          iconUrl: this.getDashboardIconUri(i),
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
        let o = [];
        const i = null != (t = m.d.settings.get(h.g)) ? t : 0.7;
        for (let e of n) {
          let t = Object(s.W)(Object(s.ib)(e[3], e[0])),
            n = Object(s.W)(Object(s.ib)(e[1], e[0])),
            r = Object(s.h)(t, n),
            a = Object(s.R)(Object(s.b)(t, n, r)),
            l = Object(s.N)(Object(s.ib)(e[0], e[3]));
          if (l < 0.4) continue;
          let c = Math.max(1, Math.floor(l));
          for (let t = 0; t < c; t++) {
            let n = (t + 1) / (c + 1),
              r = Object(s.g)();
            (r.rotation = a),
              (r.translation = Object(s.O)(n, e[0], e[3])),
              (r.scale = { x: 0.005, y: 0.005, z: i });
            let l = d.createElement(
              s.lb,
              { transform: r },
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
            o.push(l);
          }
          if (o.length > 20) break;
        }
        return o;
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
        let o = [];
        return (
          n && (o = this.getCollisionBoundsFadeVisualizationElements()),
          d.createElement(
            "div",
            { className: "DashboardMain" },
            n && d.createElement(le, null),
            n && d.createElement("span", null, o),
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
          ? g.r
          : this.state.sActiveOverlayID + "_TopCenter";
      }
      renderExternalOverlayControlBarButton(e) {
        const t = this.getDashboardIconUri(e),
          n = g.c.Center;
        return d.createElement(g.b, {
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
          (this.state.eShowPopupMenu == oe.None ||
            this.state.eShowPopupMenu == oe.Windows)
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
        var n, o, i, r, a, l, c, b;
        const _ = this.isDarkMode ? { r: 0.05, g: 0.05, b: 0.05 } : null,
          S = this.isDarkMode ? { r: 0.25, g: 0.25, b: 0.25 } : null,
          v = te.k_nControlBarWidthMeters,
          y =
            null ==
              (n = m.d.settings.get("/settings/dashboard/showPowerOptions")) ||
            n,
          f =
            null == (o = m.d.settings.get("/settings/dashboard/showDesktop")) ||
            o,
          O =
            null ==
              (i = m.d.settings.get("/settings/dashboard/showQuickStore")) || i,
          I = !(
            null != (r = m.d.settings.get("/settings/dashboard/arcadeMode")) &&
            r
          ),
          E = $.a.Instance.SceneApplicationState,
          k = $.a.Instance.SceneAppIsHome,
          M = $.a.Instance.SceneAppKey;
        let D = "images/appimage_default.png";
        M && (D = "/app/image?app_key=" + M);
        const R = null != (a = m.d.settings.get(h.d)) && a,
          w = null != (l = m.d.settings.get(h.e)) ? l : 0,
          T = R && w > 0;
        let B = { y: -0.25, z: 0 };
        return (
          this.isOverlayActive(h.k) && (B = { y: -0.4, z: 0 }),
          d.createElement(
            s.jb,
            { color: _ },
            d.createElement(
              s.Y,
              {
                curvature_origin_id: h.j,
                width: v,
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
                  width: v,
                  interactive: !0,
                  id: g.q,
                  debug_name: "Controls",
                },
                d.createElement(
                  p.b,
                  { className: "ControlBar MainControlBar" },
                  d.createElement(
                    "div",
                    { className: "Section Left" },
                    y &&
                      d.createElement(g.k, {
                        imageUrl: "/dashboard/images/icons/svr_menu_c.svg",
                        label: Object(u.c)("#Menu"),
                        style: g.d.Small,
                        onClick: () => this.showPopupMenu(oe.Power),
                        onMouseEnter: this.clearPopupMenuTimeout,
                        onMouseLeave: () => this.startPopupMenuTimeout(500),
                      }),
                    f &&
                      d.createElement(g.k, {
                        style: g.d.Small,
                        imageUrl: "/dashboard/images/icons/svr_desktop_alt.svg",
                        label: Object(u.c)("#Desktops"),
                        active: this.isDesktopTrayActive(),
                        onClick: () => this.switchToOverlay(h.k),
                      }),
                    d.createElement(
                      g.e,
                      { style: g.d.Small },
                      d.createElement(
                        d.Fragment,
                        null,
                        e.map(this.renderExternalOverlayControlBarButton),
                        t.length > 0 &&
                          d.createElement(g.b, {
                            imageUrl: "/dashboard/images/icons/svr_more.svg",
                            label: Object(u.c)("#X_More_Overlays", t.length),
                            active:
                              this.state.eShowPopupMenu == oe.ExternalOverlays,
                            onClick: () =>
                              this.showPopupMenu(oe.ExternalOverlays),
                            onMouseEnter: this.clearPopupMenuTimeout,
                            onMouseLeave: () => this.startPopupMenuTimeout(500),
                          })
                      )
                    )
                  ),
                  d.createElement(
                    "div",
                    { className: "Section Center" },
                    d.createElement(g.k, {
                      label: Object(u.c)("#Library"),
                      imageUrl: "/dashboard/images/icons/svr_items.svg",
                      active:
                        this.isOverlayActive(h.q) ||
                        (this.isOverlayActive(h.G) &&
                          P.b.Instance.lastBigPictureEntryPoint ==
                            P.a.QuickLaunch),
                      style: g.d.Large,
                      onClick: this.onQuickLaunchButtonClick,
                    }),
                    E != s.v.None &&
                      d.createElement(
                        "div",
                        { className: "NowPlayingSpacer" },
                        d.createElement(
                          ie.a,
                          { allowableParentSelectors: [".DashboardMain"] },
                          d.createElement(
                            s.jb,
                            { color: _ },
                            d.createElement(
                              s.lb,
                              { translation: { z: 0.02 } },
                              d.createElement(
                                s.Y,
                                {
                                  debug_name: "NowPlayingButton",
                                  interactive: !0,
                                  target_dpi_panel_id: g.q,
                                  curvature_origin_id: h.j,
                                },
                                d.createElement(
                                  "div",
                                  { className: "ControlBar" },
                                  d.createElement(g.k, {
                                    label: k
                                      ? Object(u.c)("#SteamVR_Home")
                                      : Object(u.c)("#Now_Playing"),
                                    active: this.isOverlayActive(h.o),
                                    style: g.d.App,
                                    imageUrl: D,
                                    onClick: () => this.switchToOverlay(h.o),
                                  })
                                )
                              )
                            )
                          )
                        )
                      ),
                    O &&
                      d.createElement(g.k, {
                        label: Object(u.c)("#Store"),
                        imageUrl: "/dashboard/images/icons/svr_store.svg",
                        additionalClassNames: "Store",
                        active:
                          this.isOverlayActive(h.r) ||
                          (this.isOverlayActive(h.G) &&
                            P.b.Instance.lastBigPictureEntryPoint ==
                              P.a.QuickStore),
                        style: g.d.Large,
                        onClick: this.onQuickStoreButtonClick,
                      })
                  ),
                  d.createElement(
                    "div",
                    { className: "Section Right" },
                    d.createElement(
                      g.e,
                      { style: g.d.Small },
                      d.createElement(g.j, null),
                      T &&
                        d.createElement(g.b, {
                          imageUrl: "/dashboard/images/icons/svr_eye.svg",
                          label: Object(u.c)("#Toggle_Room_View"),
                          onClick: this.onToggleRoomView,
                          active:
                            null === (c = VRHTML) || void 0 === c
                              ? void 0
                              : c.VRControlPanel.GetCameraRoomViewVisible(),
                          enabled:
                            null === (b = VRHTML) || void 0 === b
                              ? void 0
                              : b.VROverlayInternal.HasCameraRoomViewCapability(),
                        }),
                      d.createElement(g.o, {
                        active: this.state.eShowPopupMenu == oe.Volume,
                        refVolumeTray: this.m_refVolumeTray,
                        onShowTray: () => this.showPopupMenu(oe.Volume),
                        onHideTray: () => this.showPopupMenu(oe.None),
                        onMouseEnter: this.clearPopupMenuTimeout,
                        onMouseLeave: () => this.startPopupMenuTimeout(500),
                      })
                    ),
                    I &&
                      d.createElement(g.k, {
                        imageUrl: "/dashboard/images/icons/svr_settings.svg",
                        active: this.isOverlayActive(h.C),
                        enabled: this.hasOverlay(h.C),
                        label: Object(u.c)("#Settings"),
                        style: g.d.Small,
                        centerPanelAnchorID: "VolumeButton",
                        onClick: () => this.switchToOverlay(h.C),
                      })
                  )
                ),
                d.createElement(C, {
                  ref: this.m_refDesktopTray,
                  position: 0,
                  visible: this.isDesktopTrayActive(),
                  tintColor: S,
                  bDarkMode: this.state.bDesktopDarkMode,
                  onToggleDarkMode: () =>
                    this.setState({
                      bDesktopDarkMode: !this.state.bDesktopDarkMode,
                    }),
                  onToggleWindowList: () => this.showPopupMenu(oe.Windows),
                  onClearPopupMenuTimeout: () => this.clearPopupMenuTimeout(),
                  onStartPopupMenuTimeout: (e) => this.startPopupMenuTimeout(e),
                  onDockOverlay: this.onDockOverlay,
                  mapWindows: this.state.mapWindows,
                  sort_depth_bias: 0.2,
                  bWindowViewEnabled: this.state.bWindowViewEnabled,
                }),
                d.createElement(g.p, {
                  ref: this.m_refVolumeTray,
                  position: 0.337,
                  visible: this.state.eShowPopupMenu == oe.Volume,
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
              { translation: B, scale: { y: 1.5, x: 1.5 } },
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
            d.createElement(E, {
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
        var e, t, n, o;
        const i =
            null !=
            (t =
              null === (e = this.m_refDesktopView.current) || void 0 === e
                ? void 0
                : e.currentDesktopIndex)
              ? t
              : 1,
          r =
            null !=
            (o =
              null === (n = this.m_refDesktopView.current) || void 0 === n
                ? void 0
                : n.desktopCount)
              ? o
              : 1;
        return d.createElement(
          d.Fragment,
          null,
          d.createElement(
            s.j,
            {
              tabName: Object(u.c)("#Library"),
              iconUri: "/dashboard/images/icons/svr_items.svg",
              summonOverlayKey: h.q,
            },
            d.createElement(X, {
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
              tabName: Object(u.c)("#Store"),
              iconUri: "/dashboard/images/icons/svr_store.svg",
              summonOverlayKey: h.r,
            },
            d.createElement(W, {
              visible: this.state.bShown && this.isOverlayActive(h.r),
            })
          ),
          d.createElement(
            s.j,
            { tabName: Object(u.c)("#Now_Playing"), summonOverlayKey: h.o },
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
                r > 1 ? Object(u.c)("#Desktop_X", i) : Object(u.c)("#Desktop"),
              iconUri: "/dashboard/images/icons/svr_desktop_alt.svg",
            },
            d.createElement(O, {
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
        let o = [],
          i = [];
        if (t.length > 2) {
          const n = m.d.settings.get(h.z);
          (o = [
            ((e = t.find((e) => e.summon_overlay_key == n)),
            null != e ? e : t[0]),
          ]),
            (i = t.filter((e) => !o.includes(e)));
        } else o = t;
        let r = null;
        this.isDesktopOverlayActive() && (r = 2048);
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
                    target_dpi_panel_id: g.q,
                    debug_name: "StatusBar",
                    reflect: 0.1,
                  },
                  d.createElement(
                    "div",
                    { className: "StatusBar", style: { width: r } },
                    d.createElement(
                      "div",
                      { className: "Section Left" },
                      this.renderStatusBarTitle(),
                      d.createElement(g.l, {
                        role: s.w.TrackedControllerRole_LeftHand,
                        style: se.b.HorizontalPips,
                      })
                    ),
                    d.createElement(
                      "div",
                      { className: "Section Center" },
                      d.createElement(g.l, {
                        deviceIndex: s.ob,
                        style: se.b.VerticalBattery,
                      }),
                      d.createElement(g.g, null)
                    ),
                    d.createElement(
                      "div",
                      { className: "Section Right" },
                      d.createElement(g.l, {
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
                this.renderControlBar(o, i)
              ),
              this.state.eShowPopupMenu == oe.Power &&
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
              this.state.eShowPopupMenu == oe.ExternalOverlays &&
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
                        i.map((e) =>
                          d.createElement(g.i, {
                            key: e.mountable_id,
                            imageUrl: this.getDashboardIconUri(e),
                            label: e.tab_name,
                            onClick: () => {
                              this.switchToOverlay(e.summon_overlay_key),
                                this.showPopupMenu(oe.None);
                            },
                          })
                        ),
                        " "
                      )
                    )
                  )
                ),
              this.state.eShowPopupMenu == oe.Windows &&
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
                          d.createElement(g.i, {
                            key: e.hwnd,
                            imageUrl: "/dashboard/images/icons/icon_add.png",
                            label: e.title,
                            onClick: () => {
                              let t = {
                                type: "request_spawn_window_view",
                                hwnd: e.hwnd,
                              };
                              this.m_mailbox.SendMessage("desktopview", t),
                                this.showPopupMenu(oe.None);
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
      Object(a.b)([_.f], de.prototype, "isDarkMode", null),
      Object(a.b)([_.f], de.prototype, "screenshotMode", null),
      Object(a.b)(
        [l.bind],
        de.prototype,
        "renderExternalOverlayControlBarButton",
        null
      ),
      Object(a.b)([l.bind], de.prototype, "isDesktopTrayActive", null),
      Object(a.b)([l.bind], de.prototype, "isDesktopOverlayActive", null),
      Object(a.b)([_.m], de, "s_dashboardUserDistance", void 0),
      Object(a.b)([_.m], de, "s_dashboardUserScale", void 0),
      (de = te = Object(a.b)([b.a], de));
  },
  N46P: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return c;
    });
    var o = n("mrSG"),
      i = n("q1tI"),
      r = n("7wIv"),
      a = n("GXif"),
      s = n("/i/y");
    class l extends i.Component {
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
            i.createElement(
              "div",
              { className: "Label LegacyDebuggerGroup" },
              "Pressed:"
            )
          ),
          e.pressed)
        )
          for (let n of e.pressed)
            t.push(
              i.createElement(
                "div",
                { className: "Label LegacyDebuggerButtonName" },
                n
              )
            );
        else
          t.push(
            i.createElement(
              "div",
              { className: "Label LegacyDebuggerButtonName" },
              "None"
            )
          );
        if (
          (t.push(
            i.createElement(
              "div",
              { className: "Label LegacyDebuggerGroup" },
              "Touched:"
            )
          ),
          e.touched)
        )
          for (let n of e.touched)
            t.push(
              i.createElement(
                "div",
                { className: "Label LegacyDebuggerButtonName" },
                n
              )
            );
        else
          t.push(
            i.createElement(
              "div",
              { className: "Label LegacyDebuggerButtonName" },
              "None"
            )
          );
        if (
          (t.push(
            i.createElement(
              "div",
              { className: "Label LegacyDebuggerGroup" },
              "Supported:"
            )
          ),
          e.supported_buttons)
        )
          for (let n of e.supported_buttons)
            t.push(
              i.createElement(
                "div",
                { className: "Label LegacyDebuggerButtonName" },
                n
              )
            );
        else
          t.push(
            i.createElement(
              "div",
              { className: "Label LegacyDebuggerButtonName" },
              "None"
            )
          );
        t.push(
          i.createElement(
            "div",
            { className: "Label LegacyDebuggerGroup" },
            "Axis:"
          )
        );
        for (let n of e.axis)
          t.push(
            i.createElement(
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
          ? i.createElement(
              "div",
              { className: "FlexRow" },
              i.createElement(
                "div",
                { className: "FlexColumn LegacyDebuggerController" },
                i.createElement("div", { className: "Label" }, "Left"),
                this.renderController(this.state.currentState.left)
              ),
              i.createElement(
                "div",
                { className: "FlexColumn LegacyDebuggerController" },
                i.createElement("div", { className: "Label" }, "Right"),
                this.renderController(this.state.currentState.right)
              ),
              i.createElement(
                "div",
                { className: "FlexColumn LegacyDebuggerController" },
                i.createElement("div", { className: "Label" }, "HMD"),
                this.renderController(this.state.currentState.hmd)
              )
            )
          : i.createElement(
              "div",
              { className: "Label" },
              Object(a.c)("#LegacyDebugger_NoApp")
            );
      }
    }
    Object(o.b)([r.bind], l.prototype, "OnLegacyInputFrame", null);
    class c extends i.Component {
      constructor(e) {
        super(e);
      }
      render() {
        return i.createElement(
          "div",
          { className: "FlexRowWithWrap" },
          i.createElement(
            "div",
            { className: "FlexFullWidthRowCentered LegacyDebuggerWrapper" },
            i.createElement(l, null)
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
    var o,
      i = n("mrSG"),
      r = n("q1tI"),
      a = n("7wIv"),
      s = n("GXif"),
      l = n("/i/y"),
      c = n("uFkT"),
      d = n("MYgy"),
      p = n("Yd4P"),
      h = n.n(p),
      u = n("okNM"),
      m = n("2vnA"),
      b = n("TbT/"),
      g = n("GxMB");
    !(function (e) {
      (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
    })(o || (o = {}));
    class _ extends r.Component {
      constructor(e) {
        super(e),
          (this.m_containerRef = null),
          (this.m_nameRef = null),
          (this.m_svgRef = null),
          (this.m_containerRef = r.createRef()),
          (this.m_nameRef = r.createRef()),
          (this.m_svgRef = r.createRef()),
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
          r.createElement(
            "div",
            { className: "VisualizerButtonContainer" },
            r.createElement("div", { className: "VisualizerButtonBase" + e })
          )
        );
      }
      renderBar(e, t, n) {
        let o = { width: String(100 * n) + "%" };
        return r.createElement(
          "div",
          { className: "TriggerBar " + t },
          r.createElement(
            "div",
            { className: "VisualizerLabel" },
            Object(s.c)(e)
          ),
          r.createElement(
            "div",
            { className: "TriggerBarBackground" },
            r.createElement("div", { className: "TriggerBarContent", style: o })
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
            i = this.props.side == o.Right,
            r = this.m_nameRef.current.getBoundingClientRect(),
            a = this.m_containerRef.current.getBoundingClientRect(),
            s = this.GetPosition(),
            l = new d.e(0, r.top + r.height / 2);
          l.x = i ? a.left - 10 : a.right + 10;
          let c = i ? -20 : 20,
            p = l.x + c + "," + l.y + " " + s.x + "," + s.y;
          e.setAttribute("points", p);
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
          this.props.side == o.Left
            ? (e += " MenuLeftLine")
            : (e += " MenuRightLine"),
          this.IsEngaged() && (e += " MenuSVGVisible"),
          r.createElement(
            "div",
            { className: "VisualizerControl", ref: this.m_containerRef },
            r.createElement(
              "div",
              { className: "VisualizerSectionHeader" },
              r.createElement(
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
            r.createElement(
              "svg",
              {
                className: e,
                xmlns: "http://www.w3.org/2000/svg",
                ref: this.m_svgRef,
              },
              r.createElement(
                "defs",
                null,
                r.createElement(
                  "radialGradient",
                  { id: "buttonGradient" },
                  r.createElement("stop", {
                    offset: "0%",
                    stopColor: "var(--bordercolor)",
                    stopOpacity: "0.8",
                  }),
                  r.createElement("stop", {
                    offset: "100%",
                    stopColor: "var(--bordercolor)",
                    stopOpacity: "0",
                  })
                )
              ),
              r.createElement("polyline", {
                id: "SourceLine",
                stroke: "var(--bordercolor)",
                strokeWidth: "0.1rem",
                fill: "transparent",
              }),
              r.createElement("polyline", {
                id: "SourcePath",
                stroke: "var(--bordercolor)",
                strokeWidth: "0.1rem",
                fill: "transparent",
              }),
              r.createElement("circle", {
                id: "SourceCircle",
                r: "2rem",
                fill: "url(#buttonGradient)",
              })
            )
          )
        );
      }
    }
    Object(i.b)([a.bind], _.prototype, "ComponentUpdated", null),
      Object(i.b)([a.bind], _.prototype, "UpdateSVGPath", null);
    class S extends _ {
      constructor(e) {
        super(e);
      }
    }
    class v extends _ {
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
        return r.createElement(
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
    class y extends _ {
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
          r.createElement(
            "div",
            {
              className:
                "TrackpadVisualizerContainer" +
                (this.state.touch ? " Touched" : ""),
            },
            r.createElement(
              "div",
              { className: "TrackpadPosition" },
              r.createElement(
                "div",
                { className: "VisualizerLabel" },
                Object(s.c)("#SourceInputMode_Position")
              ),
              r.createElement(
                "div",
                { className: "TrackpadVisualizerContainer" },
                r.createElement(
                  "div",
                  { className: "TrackpadVisualizerBackground" },
                  e &&
                    r.createElement(
                      "div",
                      { style: e },
                      r.createElement(
                        "div",
                        { className: "TrackpadVisualizerPipContainer" },
                        r.createElement("div", { className: t })
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
    class f extends r.Component {
      constructor(e) {
        super(e),
          (this.m_imageRef = r.createRef()),
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
        let o = e + this.ControllerTypeInfo.controller_type;
        switch (t.type) {
          case "button":
            return r.createElement(S, {
              key: o,
              side: n,
              controllerType: this.ControllerTypeInfo,
              devicePath: this.props.devicePath,
              sourcePath: e,
              source: t,
              visualizer: this.props.visualizer,
              imageScale: this.GetPointScale(),
            });
          case "trigger":
            return r.createElement(v, {
              key: o,
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
            return r.createElement(y, {
              key: o,
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
            return r.createElement(
              "div",
              { key: o },
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
            ? r.createElement(
                "div",
                { className: "VisualizerImageContainer" },
                r.createElement("img", {
                  className: "VisualizerImage",
                  ref: this.m_imageRef,
                  onLoad: this.OnImageLoaded,
                  src: e,
                  style: { transform: t },
                }),
                r.createElement(h.a, { onReflow: this.OnImageReflow })
              )
            : null
        );
      }
      render() {
        let e = [],
          t = [],
          n = this.ControllerTypeInfo,
          i = 0,
          a = [];
        for (let e in n.input_source) {
          let t = n.input_source[e];
          if ("InputValueVisibility_AvailableButHidden" == t.visibility)
            continue;
          let o = this.EstimateSourceHeight(t);
          (i += o),
            a.push({
              sSourcePath: e,
              inputSource: t,
              order: t.order ? t.order : 0,
              height: o,
            });
        }
        let s = 8;
        i > 16 && (s = i / 2);
        let l = 0,
          c = a.sort((e, t) => e.order - t.order);
        for (let n of c) {
          l += n.height;
          let i = l > s ? o.Right : o.Left,
            r = this.renderSource(n.sSourcePath, n.inputSource, i);
          r && (i == o.Left ? e.push(r) : t.push(r));
        }
        return r.createElement(
          "div",
          { className: "ControllerVisualizer" },
          r.createElement(
            "div",
            { className: "VisualizerLeft ControllerVisualizerEntries" },
            e
          ),
          this.renderImage(),
          r.createElement(
            "div",
            { className: "VisualizerRight ControllerVisualizerEntries" },
            t
          )
        );
      }
    }
    Object(i.b)([a.bind], f.prototype, "OnImageLoaded", null),
      Object(i.b)([a.bind], f.prototype, "OnImageReflow", null);
    let C = class extends r.Component {
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
          return r.createElement(
            b.i,
            {
              className: "ControllerVisualizerWrapper",
              header: Object(s.c)("#TestControllerTitle", ""),
              onDismissRequested: this.props.onDismissRequested,
            },
            r.createElement(
              "div",
              { className: "VisualizerLabel" },
              Object(s.c)("#TestController_NoController")
            )
          );
        for (let o of n)
          "TrackedDeviceClass_HMD" != o.class &&
            (o.root_path == this.state.devicePath && (e = o.serial_number),
            t.push({
              value: o.root_path,
              sLabel: Object(s.c)("#" + o.root_path),
            }));
        return r.createElement(
          b.i,
          {
            className: "ControllerVisualizerWrapper",
            header: Object(s.c)("#TestControllerTitle", e),
            onDismissRequested: this.props.onDismissRequested,
            footer: r.createElement(b.j, {
              leftControls: [
                r.createElement(g.c, {
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
            r.createElement(f, {
              devicePath: this.state.devicePath,
              serialNumber: e,
              visualizer: this,
            })
        );
      }
    };
    Object(i.b)([a.bind], C.prototype, "OnConnectedDevicesChanged", null),
      Object(i.b)([a.bind], C.prototype, "OnUpdateComponentStates", null),
      (C = Object(i.b)([u.a], C));
  },
  VyMh: function (e, t, n) {
    "use strict";
    n.r(t);
    var o = n("mrSG"),
      i = n("q1tI"),
      r = n("i8i4"),
      a = n("okNM"),
      s = n("PShe"),
      l = n.n(s),
      c = (n("Wmp0"), n("/i/y")),
      d = n("hcOo"),
      p = n("GXif"),
      h = n("MYgy"),
      u = n("7wIv"),
      m = n("pYJh"),
      b = n("Yd4P"),
      g = n.n(b),
      _ = n("2vnA"),
      S = n("f5nd"),
      v = n("DwIg"),
      y = n("KgRp");
    n("Ut/D");
    let f = class extends i.Component {
      constructor(e) {
        super(e), (this.state = { bShowDeleteConfirmModal: !1 });
      }
      OnDelete() {
        this.setState({ bShowDeleteConfirmModal: !0 });
      }
      OnDeleteConfirmed() {
        this.setState({ bShowDeleteConfirmModal: !1 }),
          this.props.bReadOnly ||
            this.props.controllerWatcher.forEach((e) => {
              e.DeleteInputMode(this.props.iMode);
            });
      }
      OnDeleteCancel() {
        this.setState({ bShowDeleteConfirmModal: !1 });
      }
      OnSourceModeChanged(e) {
        this.props.controllerWatcher.forEach((t) => {
          t.SetInputMode(e, this.props.iMode);
        });
      }
      renderDeleteConfirmModal() {
        let e = this.props.controllerWatcher[0];
        return i.createElement(
          l.a,
          {
            visible: this.state.bShowDeleteConfirmModal,
            onClose: this.OnDeleteCancel,
            showCloseButton: !1,
            animation: "fade",
            className: "ModeSettingsModal",
            closeOnEsc: !0,
          },
          this.state.bShowDeleteConfirmModal &&
            i.createElement(
              "div",
              { className: "FlexFullHeightColumnCentered" },
              i.createElement(
                "div",
                { className: "Label" },
                Object(p.c)(
                  "#BindingUI_Mode_Delete_Confirm",
                  Object(p.c)(
                    "#SourceInputMode_" + e.GetMode(this.props.iMode)
                  ),
                  e.GetControllerInputName
                )
              ),
              i.createElement(
                "div",
                { className: "FlexRow" },
                i.createElement(
                  "div",
                  {
                    className: "ButtonControl",
                    onClick: this.OnDeleteConfirmed,
                  },
                  Object(p.c)("#Button_Delete")
                ),
                i.createElement(
                  "div",
                  { className: "ButtonControl", onClick: this.OnDeleteCancel },
                  Object(p.c)("#Button_Cancel")
                )
              )
            )
        );
      }
      render() {
        let e = this.props.controllerWatcher[0];
        if (!this.props.bEditMode)
          return i.createElement(
            "div",
            { className: "FlexRow BindingHeaderWrapper" },
            i.createElement(
              "div",
              { className: "Label BindingLabel ReadOnly BindingHeader" },
              Object(p.c)(
                "#SourceInputMode_UseAs",
                Object(p.c)("#SourceInputMode_" + e.GetMode(this.props.iMode))
              )
            ),
            !this.props.bReadOnly &&
              i.createElement("img", {
                className:
                  "ActionButtonImage SourceModeButtonImage FlexRightAlignChild",
                src: "images/bindingui/icon_trash.svg",
                onClick: this.OnDelete,
              }),
            this.renderDeleteConfirmModal()
          );
        let t = h.a.GetInputModesForSourceType(
          e.GetInputSourceType,
          e.GetInputSourceForceSupport
        );
        if (0 == t.length) return null;
        let n = t.map(
          (e, t) =>
            new v.b(
              e,
              Object(p.c)("#SourceInputMode_" + e),
              null,
              Object(p.c)("#SourceInputMode_" + e + "_Tooltip")
            )
        );
        n.push(new v.b("none", Object(p.c)("#SourceInputMode_none")));
        let o =
            e.GetButtonSide == h.b.eButtonSide_Left
              ? "#BindingUI_LeftHandController"
              : "#BindingUI_RightHandController",
          r = h.a.SelectedControllerTypeLocalizedName;
        e.GetButtonSide != h.b.eButtonSide_None && (r = Object(p.c)(o, r, ""));
        let a = Object(p.c)(
          "#SourceInputMode_SelectMode",
          r,
          e.GetControllerInputName
        );
        return i.createElement(
          "div",
          { className: "FlexRow BindingHeaderWrapper" },
          i.createElement(v.a, {
            sModalTitleString: a,
            vecOptions: n,
            sValueSelectedItem: e.GetMode(this.props.iMode),
            bShowOptionsOnStart: this.props.bShowModeOptionsDropDownOnStart,
            sLocalizedSelectedItem: Object(p.c)(
              "#SourceInputMode_" + e.GetMode(this.props.iMode)
            ),
            fnOptionSelected: this.OnSourceModeChanged,
          }),
          i.createElement("img", {
            className:
              "ActionButtonImage SourceModeButtonImage FlexRightAlignChild",
            src: "images/bindingui/icon_trash.svg",
            onClick: this.OnDelete,
          }),
          this.renderDeleteConfirmModal()
        );
      }
    };
    Object(o.b)([u.bind], f.prototype, "OnDelete", null),
      Object(o.b)([u.bind], f.prototype, "OnDeleteConfirmed", null),
      Object(o.b)([u.bind], f.prototype, "OnDeleteCancel", null),
      Object(o.b)([u.bind], f.prototype, "OnSourceModeChanged", null),
      Object(o.b)([u.bind], f.prototype, "renderDeleteConfirmModal", null),
      (f = Object(o.b)([a.a], f));
    class C extends i.Component {
      render() {
        let e =
            null == this.props.SelectedAction
              ? "none"
              : this.props.SelectedAction.name,
          t =
            null == this.props.SelectedAction
              ? Object(p.c)("#SourceInputAction_none")
              : this.props.SelectedAction.localized_name,
          n = "FlexRow BindingActionWrapper";
        null == this.props.SelectedAction && (n += " None");
        let o = "Label BindingLabel";
        return (
          this.props.bReadOnly && (o += " ReadOnly"),
          i.createElement(
            "div",
            { className: n },
            i.createElement(
              y.a,
              {
                content: Object(p.c)(
                  this.props.sLocalizedInputType + "_Tooltip"
                ),
                theme: I,
              },
              i.createElement(
                "div",
                { className: o },
                Object(p.c)(this.props.sLocalizedInputType)
              )
            ),
            !this.props.bReadOnly &&
              i.createElement(v.a, {
                vecOptions: this.props.vecOptions,
                sValueSelectedItem: e,
                sHeaderClass: "BindingLabelAction",
                sLocalizedSelectedItem: t,
                fnOptionSelected: this.props.fnOptionSelected,
              }),
            this.props.bReadOnly &&
              i.createElement(
                "div",
                { className: o + " BindingLabelAction" },
                t
              )
          )
        );
      }
    }
    class O extends i.Component {
      constructor(e) {
        super(e),
          (this.state = {
            bEditMode: this.props.bStartInEditMode,
            bSettingsVisible: !1,
          });
      }
      componentWillReceiveProps(e) {
        e.bReadOnly &&
          this.state.bEditMode &&
          (this.setState({ bEditMode: !1 }), this.props.ParentEdit(!1)),
          e.sActionSet != this.props.sActionSet && this.LoadDefaults();
      }
      LoadDefaults() {
        if (null == this.defaultProperties) return;
        let e = this.props.controllerWatcher[0];
        e.GetInputSourceClickSupport && e.GetClickAction(this.props.iMode);
        for (let e of this.defaultProperties)
          this.props.controllerWatcher.forEach((t) => {
            let n = t.GetParameter(this.props.iMode, e.mode, e.property);
            (n =
              null == n
                ? e.default
                : "float" == e.type
                ? parseFloat(n)
                : "int" == e.type
                ? parseInt(n)
                : "bool" == e.type
                ? "true" == n || "1" == n
                : n.toString()),
              (this.state[e.variableName] = n);
          });
      }
      EnsurePropertySet(e) {
        let t = !1;
        for (let n of this.defaultProperties)
          if (n.property == e) {
            (t = !0),
              this.props.controllerWatcher.forEach((e) => {
                if (
                  null == e.GetParameter(this.props.iMode, n.mode, n.property)
                ) {
                  console.log(
                    "Setting currently unset param to default: ",
                    e.GetParameter(this.props.iMode, n.mode, n.property),
                    this.props.iMode,
                    n.mode,
                    n.property,
                    n.default.toString()
                  ),
                    e.SetParameter(
                      this.props.iMode,
                      n.mode,
                      n.property,
                      n.default.toString()
                    );
                  let t = {};
                  (t[n.variableName] = n.default), this.setState(t);
                }
              });
            break;
          }
        t ||
          console.log(
            "Tried to ensure property value %s was set, which is not in the property map.",
            e
          );
      }
      onPropertyChanged(e, t) {
        let n = !1;
        for (let o of this.defaultProperties)
          if (o.property == e) {
            n = !0;
            let e = {};
            (e[o.variableName] = t),
              this.setState(e),
              this.props.controllerWatcher.forEach((e) => {
                e.SetParameter(
                  this.props.iMode,
                  o.mode,
                  o.property,
                  t.toString()
                );
              });
            break;
          }
        n ||
          console.log(
            "Tried to set property %s which is not in the property map.",
            e
          );
      }
      onPropertyReset(e) {
        return new Promise((t) => {
          for (let n of this.defaultProperties)
            if (n.property == e) {
              let e = {};
              (e[n.variableName] = n.default),
                this.setState(e, t),
                this.props.controllerWatcher.forEach((e) => {
                  e.SetParameter(this.props.iMode, n.mode, n.property, void 0);
                });
              break;
            }
        });
      }
      OnEdit(e) {
        this.props.bReadOnly ||
          this.state.bEditMode == e ||
          (this.setState({ bEditMode: e }),
          this.props.ParentEdit(e),
          e &&
            this.props.controllerWatcher[0].ClearNewModeIfSet(
              this.props.iMode
            ));
      }
      OnShowModeSettings() {
        this.setState({ bSettingsVisible: !0 });
      }
      CloseModeSettings() {
        this.setState({ bSettingsVisible: !1 });
      }
      BModeHasSettings() {
        return !1;
      }
      renderSettingsModal() {
        return i.createElement(
          l.a,
          {
            visible: this.state.bSettingsVisible,
            customStyles: {
              width: "80%",
              maxWidth: "40em",
              height: "fit-content",
              maxHeight: "90%",
              display: "flex",
              padding: "0px",
            },
            onClose: this.CloseModeSettings,
            showCloseButton: !1,
            animation: "fade",
            className: "ModeSettingsModal",
            closeOnEsc: !0,
          },
          this.state.bSettingsVisible && this.renderSettingsContent()
        );
      }
      renderSettingsContent() {
        return i.createElement("div", null);
      }
      renderFooter() {
        return this.props.bReadOnly
          ? i.createElement("div", {
              className: "FlexFullHeightColumnCentered SourceModeFooterWrapper",
            })
          : i.createElement(
              "div",
              {
                className:
                  "FlexFullHeightColumnCentered SourceModeFooterWrapper",
              },
              i.createElement("hr", { className: "SourceModeFooterHR" }),
              !this.state.bEditMode &&
                i.createElement("img", {
                  className:
                    "ActionButtonImage SourceModeButtonImage SourceModeFooterEdit",
                  src: "images/bindingui/icon_edit.svg",
                  onClick: (e) => {
                    this.OnEdit(!this.state.bEditMode);
                  },
                }),
              this.state.bEditMode &&
                i.createElement(
                  "div",
                  {
                    className:
                      "FlexFullWidthRowLeftJustified SourceModeFooterButtons",
                  },
                  i.createElement("img", {
                    className:
                      "ActionButtonImage SourceModeButtonImage SourceModeFooterEdit",
                    src: "images/bindingui/icon_done.svg",
                    onClick: (e) => {
                      this.OnEdit(!this.state.bEditMode);
                    },
                  }),
                  this.BModeHasSettings() &&
                    i.createElement("img", {
                      className:
                        "ActionButtonImage SourceModeButtonImage FlexRightAlignChild",
                      src: "images/bindingui/icon_settings.svg",
                      onClick: this.OnShowModeSettings,
                    })
                )
            );
      }
      renderHeader() {
        let e = this.BModeHasSettings();
        return i.createElement(
          "div",
          null,
          i.createElement(f, {
            controllerWatcher: this.props.controllerWatcher,
            iMode: this.props.iMode,
            bReadOnly: this.props.bReadOnly,
            bEditMode: this.state.bEditMode,
            bShowModeOptionsDropDownOnStart:
              this.props.bShowModeOptionsDropDownOnStart,
          }),
          e && this.renderSettingsModal()
        );
      }
      get WrapperClasses() {
        let e = "SourceModeGroup FlexColumn";
        return this.state.bEditMode && (e += " Edit"), e;
      }
      AddNoneItems(e) {
        e.push(new v.b("-blank", "")),
          e.push(new v.b("none", Object(p.c)("#SourceInputAction_none")));
      }
      AddBlankItem(e) {
        e.push(new v.b("-blank", ""));
      }
      AddNoActionsItem(e) {
        e.push(new v.b("-nonitem", Object(p.c)("#SourceInputAction_NoItems")));
      }
      AddHeaderItem(e, t) {
        e.push(new v.b("-subHeader", Object(p.c)(t)));
      }
      GetCombinedBooleanVector1DropDownItems() {
        let e = [];
        return (
          this.GetBooleanDropDownItems(e, !1),
          this.GetVector1DropDownItems(e, !1),
          this.AddNoneItems(e),
          e
        );
      }
      GetBooleanDropDownItems(e, t) {
        this.AddHeaderItem(e, "#SourceInputSubHeader_BooleanActions");
        let n = h.a.GetBooleanActionBindings.map((e, t) =>
          this.GetActionDropDownItem(e)
        );
        null == n || 0 == n.length
          ? this.AddNoActionsItem(e)
          : e.push.apply(e, n),
          this.AddBlankItem(e),
          t && this.AddNoneItems(e);
      }
      GetVector1DropDownItems(e, t) {
        this.AddHeaderItem(e, "#SourceInputSubHeader_Vector1Actions");
        let n = h.a.GetVector1ActionBindings.map((e, t) =>
          this.GetActionDropDownItem(e)
        );
        null == n || 0 == n.length
          ? this.AddNoActionsItem(e)
          : e.push.apply(e, n),
          this.AddBlankItem(e),
          t && this.AddNoneItems(e);
      }
      GetVector2DropDownItems(e, t) {
        this.AddHeaderItem(e, "#SourceInputSubHeader_Vector2Actions");
        let n = h.a.GetVector2ActionBindings.map((e, t) =>
          this.GetActionDropDownItem(e)
        );
        null == n || 0 == n.length
          ? this.AddNoActionsItem(e)
          : e.push.apply(e, n),
          this.AddBlankItem(e),
          t && this.AddNoneItems(e);
      }
      GetVector3DropDownItems(e, t) {
        this.AddHeaderItem(e, "#SourceInputSubHeader_Vector3Actions");
        let n = h.a.GetVector3ActionBindings.map((e, t) =>
          this.GetActionDropDownItem(e)
        );
        null == n || 0 == n.length
          ? this.AddNoActionsItem(e)
          : e.push.apply(e, n),
          this.AddBlankItem(e),
          t && this.AddNoneItems(e);
      }
      GetSkeletonDropDownItems(e, t) {
        this.AddHeaderItem(e, "#SourceInputSubHeader_SkeletonActions");
        let n = h.a.GetSkeletonActionBindings.map((e, t) =>
          this.GetActionDropDownItem(e)
        );
        null == n || 0 == n.length
          ? this.AddNoActionsItem(e)
          : e.push.apply(e, n),
          this.AddBlankItem(e),
          t && this.AddNoneItems(e);
      }
      GetPoseDropDownItems(e, t) {
        this.AddHeaderItem(e, "#SourceInputSubHeader_PoseActions");
        let n = h.a.GetPoseActionBindings.map((e, t) =>
          this.GetActionDropDownItem(e)
        );
        null == n || 0 == n.length
          ? this.AddNoActionsItem(e)
          : e.push.apply(e, n),
          this.AddBlankItem(e),
          t && this.AddNoneItems(e);
      }
      GetHapticsDropDownItems(e, t) {
        this.AddHeaderItem(e, "#SourceInputSubHeader_HapticsActions");
        let n = h.a.GetHapticsActionBindings.map((e, t) =>
          this.GetActionDropDownItem(e)
        );
        null == n || 0 == n.length
          ? this.AddNoActionsItem(e)
          : e.push.apply(e, n),
          this.AddBlankItem(e),
          t && this.AddNoneItems(e);
      }
      GetActionDropDownItem(e) {
        let t,
          n = e.localized_name;
        return (
          "mandatory" == e.requirement &&
            (t = " (" + Object(p.c)("#BindingUI_SelectAction_Required") + ")"),
          new v.b(e.name, n, t)
        );
      }
    }
    Object(o.b)([u.bind], O.prototype, "onPropertyChanged", null),
      Object(o.b)([u.bind], O.prototype, "onPropertyReset", null),
      Object(o.b)([u.bind], O.prototype, "OnEdit", null),
      Object(o.b)([u.bind], O.prototype, "OnShowModeSettings", null),
      Object(o.b)([u.bind], O.prototype, "CloseModeSettings", null),
      Object(o.b)([u.bind], O.prototype, "renderFooter", null),
      Object(o.b)([u.bind], O.prototype, "renderHeader", null),
      Object(o.b)([_.f], O.prototype, "WrapperClasses", null);
    h.c.eTrackPadInvert_None;
    const I = "BindingLabel";
    class E extends i.Component {
      render() {
        return i.createElement(
          "div",
          { className: "FlexRow InputSettingsRow" },
          i.createElement(
            y.a,
            {
              content: Object(p.c)(this.props.labelName + "_Tooltip"),
              theme: I,
            },
            i.createElement(
              "label",
              {
                className: "InputSettingsLabel",
                htmlFor: this.props.elementId,
              },
              Object(p.c)(this.props.labelName)
            )
          ),
          i.createElement(
            "div",
            {
              className:
                "FlexColumn InputSettingsInputContainer" +
                (this.props.halfSplit ? " HalfSplit" : ""),
            },
            i.createElement(
              "div",
              null,
              i.createElement("input", {
                id: this.props.elementId,
                type: "range",
                min: this.props.min,
                max: this.props.max,
                step: this.props.step,
                value: this.props.value,
                onChange: (e) => {
                  this.props.onChange(parseFloat(e.target.value));
                },
              })
            ),
            i.createElement(
              "div",
              { className: "Label RangeLabel" },
              this.props.renderValue(this.props.value)
            )
          ),
          this.props.onReset &&
            i.createElement(
              "div",
              {
                className: "InputSettingsResetButton",
                onClick: this.props.onReset,
              },
              Object(p.c)("#SourceInputMode_ResetParameterToDefault")
            )
        );
      }
    }
    class k extends i.Component {
      render() {
        return i.createElement(
          "div",
          { className: "FlexRow InputSettingsRow" },
          i.createElement(
            y.a,
            {
              content: Object(p.c)(this.props.labelName + "_Tooltip"),
              theme: I,
            },
            i.createElement(
              "label",
              {
                className: "InputSettingsLabel",
                htmlFor: this.props.elementId,
              },
              Object(p.c)(this.props.labelName)
            )
          ),
          i.createElement(
            "div",
            { className: "FlexColumn InputSettingsInputContainer" },
            i.createElement("input", {
              id: this.props.elementId,
              type: "checkbox",
              checked: this.props.value,
              onChange: (e) => {
                this.props.onChange(e.target.checked);
              },
            })
          ),
          i.createElement(
            "div",
            {
              className: "InputSettingsResetButton",
              onClick: this.props.onReset,
            },
            Object(p.c)("#SourceInputMode_ResetParameterToDefault")
          )
        );
      }
    }
    class M extends i.Component {
      render() {
        return i.createElement(
          "div",
          { className: "FlexRow InputSettingsRow" },
          i.createElement(
            y.a,
            {
              content: Object(p.c)(this.props.labelName + "_Tooltip"),
              theme: I,
            },
            i.createElement(
              "label",
              {
                className: "InputSettingsLabel",
                htmlFor: this.props.elementId,
              },
              Object(p.c)(this.props.labelName)
            )
          ),
          i.createElement(
            "div",
            { className: "FlexColumn InputSettingsInputContainer" },
            i.createElement(v.a, {
              vecOptions: this.props.vecValues,
              sValueSelectedItem: this.props.selectedValue,
              sHeaderClass: "BindingLabelAction",
              sLocalizedSelectedItem: this.props.selectedValueLocalized,
              fnOptionSelected: this.props.onChange,
            })
          ),
          i.createElement(
            "div",
            {
              className: "InputSettingsResetButton",
              onClick: this.props.onReset,
            },
            Object(p.c)("#SourceInputMode_ResetParameterToDefault")
          )
        );
      }
    }
    let D = class extends O {
      constructor(e) {
        super(e);
        let t = this.props.controllerWatcher[0].GetInputSource,
          n = t.value || t.force ? 0.2 : 0;
        (this.defaultProperties = [
          {
            property: "click_activate_threshold",
            default: 0.25,
            type: "float",
            variableName: "flClickActivateSensitivity",
            mode: "click",
          },
          {
            property: "touch_activate_threshold",
            default: 0.25,
            type: "float",
            variableName: "flTouchActivateSensitivity",
            mode: "touch",
          },
          {
            property: "click_deactivate_threshold",
            default: 0.2,
            type: "float",
            variableName: "flClickDeactivateSensitivity",
            mode: "click",
          },
          {
            property: "touch_deactivate_threshold",
            default: 0.2,
            type: "float",
            variableName: "flTouchDeactivateSensitivity",
            mode: "touch",
          },
          {
            property: "click_initial_state",
            default: !1,
            type: "bool",
            variableName: "bClickButtonInitialState",
            mode: "click",
          },
          {
            property: "touch_initial_state",
            default: !1,
            type: "bool",
            variableName: "bTouchButtonInitialState",
            mode: "touch",
          },
          {
            property: "force_input",
            default: "",
            type: "string",
            variableName: "strSelectedForceInput",
            mode: "cick",
          },
          {
            property: "haptic_amplitude",
            default: n,
            type: "float",
            variableName: "flHapticAmplitude",
            mode: "click",
          },
          {
            property: "haptic_frequency",
            default: 20,
            type: "float",
            variableName: "flHapticFrequency",
            mode: "click",
          },
          {
            property: "haptic_duration",
            default: 0,
            type: "float",
            variableName: "flHapticDuration",
            mode: "click",
          },
        ]),
          this.LoadDefaults(),
          this.BModeHasSettings.bind(this),
          Object(S.enableUniqueIds)(this);
      }
      OnClickActionChanged(e) {
        this.props.controllerWatcher.forEach((t) => {
          t.SetClickAction(this.props.iMode, e);
        });
      }
      OnTouchActionChanged(e) {
        this.props.controllerWatcher.forEach((t) => {
          t.SetTouchAction(this.props.iMode, e);
        });
      }
      BModeHasSettings() {
        return !0;
      }
      renderSliderValue(e) {
        return Math.round(100 * e).toString();
      }
      renderSliderRawValue(e) {
        return e.toString();
      }
      LocalizeForceInputModeString(e) {
        switch (e) {
          case "click":
            return Object(p.c)("#SourceInputMode_Click");
          case "value":
            return Object(p.c)("#SourceInputMode_Pull");
          case "force":
            return Object(p.c)("#SourceInputMode_Force");
          case "":
            return Object(p.c)("#SourceInputMode_Default");
        }
        return Object(p.c)("#SourceInputMode_Default");
      }
      get BShowClickOptions() {
        let e = this.props.controllerWatcher[0],
          t = e.GetInputSource;
        return (
          (t.value || t.force) && null != e.GetClickAction(this.props.iMode)
        );
      }
      get BShowTouchOptions() {
        let e = this.props.controllerWatcher[0];
        return (
          e.GetInputSourceTouchSupport &&
          null != e.GetTouchAction(this.props.iMode)
        );
      }
      renderSettingsContent() {
        let e = this.props.controllerWatcher[0].GetInputSource,
          t = [];
        e.click &&
          t.push(new v.b("click", this.LocalizeForceInputModeString("click"))),
          e.value &&
            t.push(
              new v.b("value", this.LocalizeForceInputModeString("value"))
            ),
          e.force &&
            t.push(
              new v.b("force", this.LocalizeForceInputModeString("force"))
            ),
          t.length > 1 &&
            t.push(new v.b("", this.LocalizeForceInputModeString("")));
        let n = void 0,
          o = void 0,
          r = void 0,
          a = this.BShowClickOptions,
          s = this.BShowTouchOptions,
          l = "";
        return (
          this.hasOwnProperty("nextUniqueId") && (l = this.nextUniqueId()),
          a &&
            (n = i.createElement(
              "div",
              { className: "FlexColumn" },
              i.createElement(E, {
                labelName: "#SourceInputMode_ClickActivateThreshold",
                elementId: l,
                min: 0,
                max: 1,
                step: 0.05,
                value: this.state.flClickActivateSensitivity,
                onReset: this.onPropertyReset.bind(
                  this,
                  "click_activate_threshold"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "click_activate_threshold"
                ),
                renderValue: this.renderSliderValue,
              }),
              i.createElement(E, {
                labelName: "#SourceInputMode_ClickDeactivateThreshold",
                elementId: l,
                min: 0,
                max: 1,
                step: 0.05,
                value: this.state.flClickDeactivateSensitivity,
                onReset: this.onPropertyReset.bind(
                  this,
                  "click_deactivate_threshold"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "click_deactivate_threshold"
                ),
                renderValue: this.renderSliderValue,
              })
            )),
          s &&
            (o = i.createElement(
              "div",
              { className: "FlexColumn" },
              i.createElement(E, {
                labelName: "#SourceInputMode_TouchActivateThreshold",
                elementId: l,
                min: 0,
                max: 1,
                step: 0.05,
                value: this.state.flTouchActivateSensitivity,
                onReset: this.onPropertyReset.bind(
                  this,
                  "touch_activate_threshold"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "touch_activate_threshold"
                ),
                renderValue: this.renderSliderValue,
              }),
              i.createElement(E, {
                labelName: "#SourceInputMode_TouchDeactivateThreshold",
                elementId: l,
                min: 0,
                max: 1,
                step: 0.05,
                value: this.state.flTouchDeactivateSensitivity,
                onReset: this.onPropertyReset.bind(
                  this,
                  "touch_deactivate_threshold"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "touch_deactivate_threshold"
                ),
                renderValue: this.renderSliderValue,
              })
            )),
          this.props.bToggleButtonMode &&
            (r = [
              i.createElement(k, {
                key: "click_initial_state",
                labelName: "#SourceInputMode_ClickInitialState",
                elementId: l,
                value: this.state.bClickButtonInitialState,
                onReset: this.onPropertyReset.bind(this, "click_initial_state"),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "click_initial_state"
                ),
              }),
              i.createElement(k, {
                key: "touch_initial_state",
                labelName: "#SourceInputMode_TouchInitialState",
                elementId: l,
                value: this.state.bTouchButtonInitialState,
                onReset: this.onPropertyReset.bind(this, "touch_initial_state"),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "touch_initial_state"
                ),
              }),
            ]),
          i.createElement(
            "div",
            { className: "InputSettingsModal" },
            i.createElement(
              "div",
              { className: "ChordBindingHeader FlexColumn" },
              i.createElement(
                "div",
                { className: "FlexFullWidthRowCentered" },
                i.createElement("img", {
                  className:
                    "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                  src: "images/bindingui/icon_modal_edit_header.svg",
                }),
                i.createElement(
                  "div",
                  { className: "Label Title TitleCenter AllCaps" },
                  Object(p.c)("#BindingSettingsModal_Title")
                )
              )
            ),
            n,
            o,
            r,
            t.length > 1 &&
              i.createElement(M, {
                labelName: "#SourceInputMode_ButtonModeInputForce_Click",
                elementId: l,
                vecValues: t,
                selectedValue: this.state.strSelectedForceInput,
                selectedValueLocalized: this.LocalizeForceInputModeString(
                  this.state.strSelectedForceInput
                ),
                onReset: this.onPropertyReset.bind(this, "force_input"),
                onChange: this.onPropertyChanged.bind(this, "force_input"),
              }),
            i.createElement(E, {
              labelName: "#SourceInputMode_HapticAmplitude",
              elementId: l,
              min: 0,
              max: 1,
              step: 0.05,
              value: this.state.flHapticAmplitude,
              onReset: this.onPropertyReset.bind(this, "haptic_amplitude"),
              onChange: this.onPropertyChanged.bind(this, "haptic_amplitude"),
              renderValue: this.renderSliderValue,
            }),
            i.createElement(E, {
              labelName: "#SourceInputMode_HapticDuration",
              elementId: l,
              min: 0,
              max: 4,
              step: 0.1,
              value: this.state.flHapticDuration,
              onReset: this.onPropertyReset.bind(this, "haptic_duration"),
              onChange: this.onPropertyChanged.bind(this, "haptic_duration"),
              renderValue: this.renderSliderRawValue,
            }),
            i.createElement(E, {
              labelName: "#SourceInputMode_HapticFrequency",
              elementId: l,
              min: 15,
              max: 3e3,
              step: 1,
              value: this.state.flHapticFrequency,
              onReset: this.onPropertyReset.bind(this, "haptic_frequency"),
              onChange: this.onPropertyChanged.bind(this, "haptic_frequency"),
              renderValue: this.renderSliderRawValue,
            }),
            i.createElement(
              "div",
              {
                className: "InputSettingsCloseButton Label AllCaps",
                onClick: this.CloseModeSettings,
              },
              Object(p.c)("#Button_Close")
            )
          )
        );
      }
      render() {
        let e = this.props.controllerWatcher[0],
          t = this.GetCombinedBooleanVector1DropDownItems();
        return i.createElement(
          "div",
          { className: this.WrapperClasses },
          this.renderHeader(),
          i.createElement(C, {
            sLocalizedInputType: "#SourceInputMode_Click",
            SelectedAction: e.GetClickAction(this.props.iMode),
            vecOptions: t,
            fnOptionSelected: this.OnClickActionChanged,
            bReadOnly: !this.state.bEditMode,
          }),
          e.GetInputSourceTouchSupport &&
            i.createElement(C, {
              sLocalizedInputType: "#SourceInputMode_Touch",
              SelectedAction: e.GetTouchAction(this.props.iMode),
              vecOptions: t,
              fnOptionSelected: this.OnTouchActionChanged,
              bReadOnly: !this.state.bEditMode,
            }),
          this.renderFooter()
        );
      }
    };
    Object(o.b)([u.bind], D.prototype, "OnClickActionChanged", null),
      Object(o.b)([u.bind], D.prototype, "OnTouchActionChanged", null),
      Object(o.b)([_.f], D.prototype, "BShowClickOptions", null),
      Object(o.b)([_.f], D.prototype, "BShowTouchOptions", null),
      (D = Object(o.b)([a.a], D));
    let R = class extends O {
      constructor(e) {
        super(e),
          (this.defaultProperties = [
            {
              property: "long_press_delay",
              default: 1,
              type: "float",
              variableName: "flLongPressDelay",
              mode: "click",
            },
            {
              property: "double_press_delay",
              default: 0.25,
              type: "float",
              variableName: "flDoublePressDelay",
              mode: "click",
            },
            {
              property: "click_activate_threshold",
              default: 0.25,
              type: "float",
              variableName: "flClickActivateSensitivity",
              mode: "click",
            },
            {
              property: "touch_activate_threshold",
              default: 0.25,
              type: "float",
              variableName: "flTouchActivateSensitivity",
              mode: "touch",
            },
            {
              property: "click_deactivate_threshold",
              default: 0.2,
              type: "float",
              variableName: "flClickDeactivateSensitivity",
              mode: "click",
            },
            {
              property: "touch_deactivate_threshold",
              default: 0.2,
              type: "float",
              variableName: "flTouchDeactivateSensitivity",
              mode: "touch",
            },
            {
              property: "click_initial_state",
              default: !1,
              type: "bool",
              variableName: "bClickButtonInitialState",
              mode: "click",
            },
            {
              property: "touch_initial_state",
              default: !1,
              type: "bool",
              variableName: "bTouchButtonInitialState",
              mode: "touch",
            },
            {
              property: "force_input",
              default: "",
              type: "string",
              variableName: "strSelectedForceInput",
              mode: "cick",
            },
            {
              property: "haptic_amplitude",
              default: 0.2,
              type: "float",
              variableName: "flHapticAmplitude",
              mode: "click",
            },
            {
              property: "haptic_frequency",
              default: 20,
              type: "float",
              variableName: "flHapticFrequency",
              mode: "click",
            },
            {
              property: "haptic_duration",
              default: 0,
              type: "float",
              variableName: "flHapticDuration",
              mode: "click",
            },
            {
              property: "touchy_click",
              default: !1,
              type: "bool",
              variableName: "bTouchyClick",
              mode: "touch",
            },
          ]),
          this.LoadDefaults();
      }
      get IsComplex() {
        let e = this.props.controllerWatcher[0];
        return !!(
          this.state.bShowAdvanced ||
          e.GetHeldAction(this.props.iMode) ||
          e.GetDoubleAction(this.props.iMode) ||
          e.GetLongAction(this.props.iMode)
        );
      }
      BModeHasSettings() {
        return !0;
      }
      renderSliderValue(e) {
        return Math.round(100 * e).toString();
      }
      renderSliderRawValue(e) {
        return e.toString();
      }
      LocalizeForceInputModeString(e) {
        switch (e) {
          case "click":
            return Object(p.c)("#SourceInputMode_Click");
          case "value":
            return Object(p.c)("#SourceInputMode_Pull");
          case "force":
            return Object(p.c)("#SourceInputMode_Force");
          case "position":
            return Object(p.c)("#SourceInputMode_Position");
          case "":
            return Object(p.c)("#SourceInputMode_Default");
        }
        return Object(p.c)("#SourceInputMode_Default");
      }
      get BShowClickOptions() {
        let e = this.props.controllerWatcher[0],
          t = this.RInputOptions,
          n = e.GetInputSource;
        return (
          n.value ||
          n.force ||
          "position" == this.state.strSelectedForceInput ||
          (1 == t.length &&
            "position" == t[0] &&
            null != e.GetClickAction(this.props.iMode))
        );
      }
      get BShowTouchOptions() {
        let e = this.props.controllerWatcher[0];
        return (
          e.GetInputSourceTouchSupport &&
          null != e.GetTouchAction(this.props.iMode)
        );
      }
      get RInputOptions() {
        let e = this.props.controllerWatcher[0].GetInputSource,
          t = [];
        return (
          e.click && t.push("click"),
          e.value && t.push("value"),
          e.force && t.push("force"),
          ("joystick" != e.type && "trackpad" != e.type) || t.push("position"),
          t
        );
      }
      renderSettingsContent() {
        let e = this.props.controllerWatcher[0],
          t = (e.GetInputSource, this.RInputOptions),
          n = [];
        t.length > 1 && t.push("");
        for (let e of t)
          n.push(new v.b(e, this.LocalizeForceInputModeString(e)));
        let o = void 0,
          r = void 0,
          a = void 0,
          s = this.BShowClickOptions,
          l = this.BShowTouchOptions,
          c = "";
        return (
          this.hasOwnProperty("nextUniqueId") && (c = this.nextUniqueId()),
          s &&
            (o = i.createElement(
              "div",
              { className: "FlexColumn" },
              i.createElement(E, {
                labelName: "#SourceInputMode_ClickActivateThreshold",
                elementId: c,
                min: 0,
                max: 1,
                step: 0.05,
                value: this.state.flClickActivateSensitivity,
                onReset: this.onPropertyReset.bind(
                  this,
                  "click_activate_threshold"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "click_activate_threshold"
                ),
                renderValue: this.renderSliderValue,
              }),
              i.createElement(E, {
                labelName: "#SourceInputMode_ClickDeactivateThreshold",
                elementId: c,
                min: 0,
                max: 1,
                step: 0.05,
                value: this.state.flClickDeactivateSensitivity,
                onReset: this.onPropertyReset.bind(
                  this,
                  "click_deactivate_threshold"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "click_deactivate_threshold"
                ),
                renderValue: this.renderSliderValue,
              })
            )),
          l &&
            (r = i.createElement(
              "div",
              { className: "FlexColumn" },
              i.createElement(E, {
                labelName: "#SourceInputMode_TouchActivateThreshold",
                elementId: c,
                min: 0,
                max: 1,
                step: 0.05,
                value: this.state.flTouchActivateSensitivity,
                onReset: this.onPropertyReset.bind(
                  this,
                  "touch_activate_threshold"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "touch_activate_threshold"
                ),
                renderValue: this.renderSliderValue,
              }),
              i.createElement(E, {
                labelName: "#SourceInputMode_TouchDeactivateThreshold",
                elementId: c,
                min: 0,
                max: 1,
                step: 0.05,
                value: this.state.flTouchDeactivateSensitivity,
                onReset: this.onPropertyReset.bind(
                  this,
                  "touch_deactivate_threshold"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "touch_deactivate_threshold"
                ),
                renderValue: this.renderSliderValue,
              })
            )),
          this.props.bToggleButtonMode &&
            (a = [
              i.createElement(k, {
                key: "click_initial_state",
                labelName: "#SourceInputMode_ClickInitialState",
                elementId: c,
                value: this.state.bClickButtonInitialState,
                onReset: this.onPropertyReset.bind(this, "click_initial_state"),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "click_initial_state"
                ),
              }),
              i.createElement(k, {
                key: "touch_initial_state",
                labelName: "#SourceInputMode_TouchInitialState",
                elementId: c,
                value: this.state.bTouchButtonInitialState,
                onReset: this.onPropertyReset.bind(this, "touch_initial_state"),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "touch_initial_state"
                ),
              }),
            ]),
          i.createElement(
            "div",
            { className: "InputSettingsModal" },
            i.createElement(
              "div",
              { className: "ChordBindingHeader FlexColumn" },
              i.createElement(
                "div",
                { className: "FlexFullWidthRowCentered" },
                i.createElement("img", {
                  className:
                    "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                  src: "images/bindingui/icon_modal_edit_header.svg",
                }),
                i.createElement(
                  "div",
                  { className: "Label Title TitleCenter AllCaps" },
                  Object(p.c)("#BindingSettingsModal_Title")
                )
              )
            ),
            o,
            r,
            a,
            n.length > 1 &&
              i.createElement(M, {
                labelName: "#SourceInputMode_ButtonModeInputForce_Click",
                elementId: c,
                vecValues: n,
                selectedValue: this.state.strSelectedForceInput,
                selectedValueLocalized: this.LocalizeForceInputModeString(
                  this.state.strSelectedForceInput
                ),
                onReset: this.onPropertyReset.bind(this, "force_input"),
                onChange: this.onPropertyChanged.bind(this, "force_input"),
              }),
            i.createElement(E, {
              labelName: "#SourceInputMode_HapticAmplitude",
              elementId: c,
              min: 0,
              max: 1,
              step: 0.05,
              value: this.state.flHapticAmplitude,
              onReset: this.onPropertyReset.bind(this, "haptic_amplitude"),
              onChange: this.onPropertyChanged.bind(this, "haptic_amplitude"),
              renderValue: this.renderSliderValue,
            }),
            i.createElement(E, {
              labelName: "#SourceInputMode_HapticDuration",
              elementId: c,
              min: 0,
              max: 4,
              step: 0.1,
              value: this.state.flHapticDuration,
              onReset: this.onPropertyReset.bind(this, "haptic_duration"),
              onChange: this.onPropertyChanged.bind(this, "haptic_duration"),
              renderValue: this.renderSliderRawValue,
            }),
            i.createElement(E, {
              labelName: "#SourceInputMode_HapticFrequency",
              elementId: c,
              min: 15,
              max: 3e3,
              step: 1,
              value: this.state.flHapticFrequency,
              onReset: this.onPropertyReset.bind(this, "haptic_frequency"),
              onChange: this.onPropertyChanged.bind(this, "haptic_frequency"),
              renderValue: this.renderSliderRawValue,
            }),
            "complex" == this.state.sSubMode &&
              i.createElement(
                "div",
                null,
                i.createElement(E, {
                  labelName: "#SourceInputMode_LongPressDelay",
                  elementId: c,
                  min: 0,
                  max: 1,
                  step: 0.05,
                  value: this.state.flLongPressDelay,
                  onReset: this.onPropertyReset.bind(this, "long_press_delay"),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "long_press_delay"
                  ),
                  renderValue: this.renderSliderValue,
                }),
                i.createElement(E, {
                  labelName: "#SourceInputMode_DoublePressDelay",
                  elementId: c,
                  min: 0,
                  max: 1,
                  step: 0.05,
                  value: this.state.flDoublePressDelay,
                  onReset: this.onPropertyReset.bind(
                    this,
                    "double_press_delay"
                  ),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "double_press_delay"
                  ),
                  renderValue: this.renderSliderValue,
                })
              ),
            e.GetInputSourceTouchSupport &&
              i.createElement(k, {
                key: "touchy_click",
                labelName: "#SourceInputMode_TouchyClick",
                elementId: c,
                value: this.state.bTouchyClick,
                onReset: this.onPropertyReset.bind(this, "touchy_click"),
                onChange: this.onPropertyChanged.bind(this, "touchy_click"),
              }),
            i.createElement(
              "div",
              {
                className: "InputSettingsCloseButton Label AllCaps",
                onClick: this.CloseModeSettings,
              },
              Object(p.c)("#Button_Close")
            )
          )
        );
      }
      OnHeldActionChanged(e) {
        this.props.controllerWatcher.forEach((t) => {
          t.SetHeldAction(this.props.iMode, e);
        });
      }
      OnLongActionChanged(e) {
        this.props.controllerWatcher.forEach((t) => {
          t.SetLongAction(this.props.iMode, e);
        });
      }
      OnSingleActionChanged(e) {
        this.props.controllerWatcher.forEach((t) => {
          t.SetSingleAction(this.props.iMode, e);
        });
      }
      OnDoubleActionChanged(e) {
        this.props.controllerWatcher.forEach((t) => {
          t.SetDoubleAction(this.props.iMode, e);
        });
      }
      OnClickActionChanged(e) {
        this.props.controllerWatcher.forEach((t) => {
          t.SetClickAction(this.props.iMode, e);
        });
      }
      OnTouchActionChanged(e) {
        this.props.controllerWatcher.forEach((t) => {
          t.SetTouchAction(this.props.iMode, e);
        });
      }
      OnToggleComplex() {
        this.state.bEditMode && this.setState({ bShowAdvanced: !0 });
      }
      render() {
        let e = this.props.controllerWatcher[0],
          t = this.GetCombinedBooleanVector1DropDownItems(),
          n = this.IsComplex;
        return i.createElement(
          "div",
          { className: this.WrapperClasses },
          this.renderHeader(),
          n &&
            i.createElement(
              "div",
              null,
              i.createElement(C, {
                sLocalizedInputType: "#SourceInputMode_Single",
                SelectedAction: e.GetClickAction(this.props.iMode),
                vecOptions: t,
                fnOptionSelected: this.OnClickActionChanged,
                bReadOnly: !this.state.bEditMode,
              }),
              i.createElement(C, {
                sLocalizedInputType: "#SourceInputMode_Double",
                SelectedAction: e.GetDoubleAction(this.props.iMode),
                vecOptions: t,
                fnOptionSelected: this.OnDoubleActionChanged,
                bReadOnly: !this.state.bEditMode,
              }),
              i.createElement(C, {
                sLocalizedInputType: "#SourceInputMode_Long",
                SelectedAction: e.GetLongAction(this.props.iMode),
                vecOptions: t,
                fnOptionSelected: this.OnLongActionChanged,
                bReadOnly: !this.state.bEditMode,
              }),
              i.createElement(C, {
                sLocalizedInputType: "#SourceInputMode_Held",
                SelectedAction: e.GetHeldAction(this.props.iMode),
                vecOptions: t,
                fnOptionSelected: this.OnHeldActionChanged,
                bReadOnly: !this.state.bEditMode,
              }),
              e.GetInputSourceTouchSupport &&
                i.createElement(C, {
                  sLocalizedInputType: "#SourceInputMode_Touch",
                  SelectedAction: e.GetTouchAction(this.props.iMode),
                  vecOptions: t,
                  fnOptionSelected: this.OnTouchActionChanged,
                  bReadOnly: !this.state.bEditMode,
                })
            ),
          !n &&
            i.createElement(
              "div",
              null,
              i.createElement(C, {
                sLocalizedInputType: "#SourceInputMode_Click",
                SelectedAction: e.GetClickAction(this.props.iMode),
                vecOptions: t,
                fnOptionSelected: this.OnClickActionChanged,
                bReadOnly: !this.state.bEditMode,
              }),
              e.GetInputSourceTouchSupport &&
                i.createElement(C, {
                  sLocalizedInputType: "#SourceInputMode_Touch",
                  SelectedAction: e.GetTouchAction(this.props.iMode),
                  vecOptions: t,
                  fnOptionSelected: this.OnTouchActionChanged,
                  bReadOnly: !this.state.bEditMode,
                }),
              i.createElement(
                "div",
                {
                  className:
                    "SourceInputShowMore" +
                    (this.state.bEditMode ? "" : " Disabled"),
                  onClick: this.OnToggleComplex,
                },
                Object(p.c)("#SourceInputMode_MoreOptions")
              )
            ),
          this.renderFooter()
        );
      }
    };
    Object(o.b)([_.f], R.prototype, "IsComplex", null),
      Object(o.b)([_.f], R.prototype, "BShowClickOptions", null),
      Object(o.b)([_.f], R.prototype, "BShowTouchOptions", null),
      Object(o.b)([_.f], R.prototype, "RInputOptions", null),
      Object(o.b)([u.bind], R.prototype, "OnHeldActionChanged", null),
      Object(o.b)([u.bind], R.prototype, "OnLongActionChanged", null),
      Object(o.b)([u.bind], R.prototype, "OnSingleActionChanged", null),
      Object(o.b)([u.bind], R.prototype, "OnDoubleActionChanged", null),
      Object(o.b)([u.bind], R.prototype, "OnClickActionChanged", null),
      Object(o.b)([u.bind], R.prototype, "OnTouchActionChanged", null),
      Object(o.b)([u.bind], R.prototype, "OnToggleComplex", null),
      (R = Object(o.b)([a.a], R));
    let w = class extends O {
      constructor(e) {
        super(e),
          (this.defaultProperties = [
            {
              property: "long_press_delay",
              default: 1,
              type: "float",
              variableName: "flLongPressDelay",
              mode: "click",
            },
            {
              property: "double_press_delay",
              default: 0.25,
              type: "float",
              variableName: "flDoublePressDelay",
              mode: "click",
            },
          ]),
          this.LoadDefaults();
      }
      BModeHasSettings() {
        return !0;
      }
      renderSliderValue(e) {
        return e.toString();
      }
      renderSettingsContent() {
        this.props.controllerWatcher[0];
        let e = "";
        return (
          this.hasOwnProperty("nextUniqueId") && (e = this.nextUniqueId()),
          i.createElement(
            "div",
            { className: "InputSettingsModal" },
            i.createElement(
              "div",
              { className: "ChordBindingHeader FlexColumn" },
              i.createElement(
                "div",
                { className: "FlexFullWidthRowCentered" },
                i.createElement("img", {
                  className:
                    "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                  src: "images/bindingui/icon_modal_edit_header.svg",
                }),
                i.createElement(
                  "div",
                  { className: "Label Title TitleCenter AllCaps" },
                  Object(p.c)("#BindingSettingsModal_Title")
                )
              )
            ),
            i.createElement(E, {
              labelName: "#SourceInputMode_LongPressDelay",
              elementId: e,
              min: 0,
              max: 1,
              step: 0.05,
              value: this.state.flLongPressDelay,
              onReset: this.onPropertyReset.bind(this, "long_press_delay"),
              onChange: this.onPropertyChanged.bind(this, "long_press_delay"),
              renderValue: this.renderSliderValue,
            }),
            i.createElement(E, {
              labelName: "#SourceInputMode_DoublePressDelay",
              elementId: e,
              min: 0,
              max: 1,
              step: 0.05,
              value: this.state.flDoublePressDelay,
              onReset: this.onPropertyReset.bind(this, "double_press_delay"),
              onChange: this.onPropertyChanged.bind(this, "double_press_delay"),
              renderValue: this.renderSliderValue,
            }),
            i.createElement(
              "div",
              {
                className: "InputSettingsCloseButton Label AllCaps",
                onClick: this.CloseModeSettings,
              },
              Object(p.c)("#Button_Close")
            )
          )
        );
      }
      OnHeldActionChanged(e) {
        this.props.controllerWatcher.forEach((t) => {
          t.SetHeldAction(this.props.iMode, e);
        });
      }
      OnLongActionChanged(e) {
        this.props.controllerWatcher.forEach((t) => {
          t.SetLongAction(this.props.iMode, e);
        });
      }
      OnSingleActionChanged(e) {
        this.props.controllerWatcher.forEach((t) => {
          t.SetSingleAction(this.props.iMode, e);
        });
      }
      OnDoubleActionChanged(e) {
        this.props.controllerWatcher.forEach((t) => {
          t.SetDoubleAction(this.props.iMode, e);
        });
      }
      OnClickActionChanged(e) {
        this.props.controllerWatcher.forEach((t) => {
          t.SetClickAction(this.props.iMode, e);
        });
      }
      OnTouchActionChanged(e) {
        this.props.controllerWatcher.forEach((t) => {
          t.SetTouchAction(this.props.iMode, e);
        });
      }
      render() {
        let e = this.props.controllerWatcher[0],
          t = this.GetCombinedBooleanVector1DropDownItems();
        return i.createElement(
          "div",
          { className: this.WrapperClasses },
          this.renderHeader(),
          i.createElement(
            "div",
            null,
            i.createElement(C, {
              sLocalizedInputType: "#SourceInputMode_Single",
              SelectedAction: e.GetSingleAction(this.props.iMode),
              vecOptions: t,
              fnOptionSelected: this.OnSingleActionChanged,
              bReadOnly: !this.state.bEditMode,
            }),
            i.createElement(C, {
              sLocalizedInputType: "#SourceInputMode_Double",
              SelectedAction: e.GetDoubleAction(this.props.iMode),
              vecOptions: t,
              fnOptionSelected: this.OnDoubleActionChanged,
              bReadOnly: !this.state.bEditMode,
            }),
            i.createElement(C, {
              sLocalizedInputType: "#SourceInputMode_Long",
              SelectedAction: e.GetLongAction(this.props.iMode),
              vecOptions: t,
              fnOptionSelected: this.OnLongActionChanged,
              bReadOnly: !this.state.bEditMode,
            }),
            i.createElement(C, {
              sLocalizedInputType: "#SourceInputMode_Held",
              SelectedAction: e.GetHeldAction(this.props.iMode),
              vecOptions: t,
              fnOptionSelected: this.OnHeldActionChanged,
              bReadOnly: !this.state.bEditMode,
            }),
            e.GetInputSourceTouchSupport &&
              i.createElement(C, {
                sLocalizedInputType: "#SourceInputMode_Touch",
                SelectedAction: e.GetTouchAction(this.props.iMode),
                vecOptions: t,
                fnOptionSelected: this.OnTouchActionChanged,
                bReadOnly: !this.state.bEditMode,
              })
          ),
          this.renderFooter()
        );
      }
    };
    Object(o.b)([u.bind], w.prototype, "OnHeldActionChanged", null),
      Object(o.b)([u.bind], w.prototype, "OnLongActionChanged", null),
      Object(o.b)([u.bind], w.prototype, "OnSingleActionChanged", null),
      Object(o.b)([u.bind], w.prototype, "OnDoubleActionChanged", null),
      Object(o.b)([u.bind], w.prototype, "OnClickActionChanged", null),
      Object(o.b)([u.bind], w.prototype, "OnTouchActionChanged", null),
      (w = Object(o.b)([a.a], w));
    let T = class extends O {
      render() {
        return i.createElement(
          "div",
          { className: this.WrapperClasses },
          this.renderHeader(),
          this.renderFooter()
        );
      }
    };
    T = Object(o.b)([a.a], T);
    let B = class extends O {
      constructor(e) {
        super(e),
          (this.defaultProperties = [
            {
              property: "sub_mode",
              default:
                "joystick" == this.props.controllerWatcher[0].GetInputSourceType
                  ? "touch"
                  : "click",
              type: "string",
              variableName: "sSubMode",
              mode: "click",
            },
            {
              property: "overlap_pct",
              default: 50,
              type: "float",
              variableName: "flOverlapPct",
              mode: "click",
            },
            {
              property: "deadzone_pct",
              default: 25,
              type: "float",
              variableName: "flDeadzonePct",
              mode: "click",
            },
            {
              property: "sticky",
              default: !1,
              type: "boolean",
              variableName: "bStickyDpad",
              mode: "click",
            },
          ]),
          this.LoadDefaults(),
          "dpad" == this.props.sMode && this.EnsurePropertySet("sub_mode");
      }
      BModeHasSettings() {
        return !0;
      }
      renderSliderValue(e) {
        return Math.round(e).toString();
      }
      renderSettingsContent() {
        this.props.controllerWatcher[0];
        let e = "";
        return (
          this.hasOwnProperty("nextUniqueId") && (e = this.nextUniqueId()),
          i.createElement(
            "div",
            { className: "InputSettingsModal" },
            i.createElement(
              "div",
              { className: "ChordBindingHeader FlexColumn" },
              i.createElement(
                "div",
                { className: "FlexFullWidthRowCentered" },
                i.createElement("img", {
                  className:
                    "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                  src: "images/bindingui/icon_modal_edit_header.svg",
                }),
                i.createElement(
                  "div",
                  { className: "Label Title TitleCenter AllCaps" },
                  Object(p.c)("#BindingSettingsModal_Title")
                )
              )
            ),
            i.createElement(E, {
              labelName: "#SourceInputMode_OverlapPercent",
              elementId: e,
              min: 0,
              max: 100,
              step: 5,
              value: this.state.flOverlapPct,
              onReset: this.onPropertyReset.bind(this, "overlap_pct"),
              onChange: this.onPropertyChanged.bind(this, "overlap_pct"),
              renderValue: this.renderSliderValue,
            }),
            i.createElement(E, {
              labelName: "#SourceInputMode_DeadzonePercent",
              elementId: e,
              min: 0,
              max: 100,
              step: 5,
              value: this.state.flDeadzonePct,
              onReset: this.onPropertyReset.bind(this, "deadzone_pct"),
              onChange: this.onPropertyChanged.bind(this, "deadzone_pct"),
              renderValue: this.renderSliderValue,
            }),
            i.createElement(k, {
              key: "click_initial_state",
              labelName: "#SourceInputMode_StickyDpad",
              elementId: e,
              value: this.state.bStickyDpad,
              onReset: this.onPropertyReset.bind(this, "sticky"),
              onChange: this.onPropertyChanged.bind(this, "sticky"),
            }),
            i.createElement(
              "div",
              {
                className: "InputSettingsCloseButton Label AllCaps",
                onClick: this.CloseModeSettings,
              },
              Object(p.c)("#Button_Close")
            )
          )
        );
      }
      OnActionChanged(e, t) {
        this.props.controllerWatcher.forEach((n) => {
          h.a.SetActionForInputModeType(
            n.GetFullInputPath,
            this.props.iMode,
            e,
            t,
            ["dpad", "dpad_click", "dpad_touch"]
          );
        });
      }
      render() {
        let e = this.props.controllerWatcher[0],
          t = this.GetCombinedBooleanVector1DropDownItems(),
          n = "dpad" == this.props.sMode,
          o = [
            new v.b("click", Object(p.c)("#SourceInputMode_Click")),
            new v.b("touch", Object(p.c)("#SourceInputMode_Touch")),
          ],
          r =
            (this.state.sSubMode,
            "click" == this.state.sSubMode
              ? Object(p.c)("#SourceInputMode_Click")
              : Object(p.c)("#SourceInputMode_Touch"));
        return i.createElement(
          "div",
          { className: this.WrapperClasses },
          this.renderHeader(),
          n &&
            i.createElement(
              "div",
              { className: "FlexRow BindingActionWrapper" },
              i.createElement(
                "div",
                { className: "Label BindingLabel" },
                Object(p.c)("#SourceInputMode_SubMode")
              ),
              i.createElement(
                "div",
                { className: "Label BindingLabel BindingAction" },
                this.state.bEditMode &&
                  i.createElement(v.a, {
                    sLocalizedSelectedItem: r,
                    sValueSelectedItem: this.state.sSubMode,
                    vecOptions: o,
                    fnOptionSelected: this.onPropertyChanged.bind(
                      this,
                      "sub_mode"
                    ),
                  }),
                !this.state.bEditMode && r
              )
            ),
          i.createElement(C, {
            sLocalizedInputType: "#SourceInputMode_North",
            SelectedAction: e.GetNorthAction(this.props.iMode),
            vecOptions: t,
            fnOptionSelected: this.OnActionChanged.bind(this, "north"),
            bReadOnly: !this.state.bEditMode,
          }),
          i.createElement(C, {
            sLocalizedInputType: "#SourceInputMode_East",
            SelectedAction: e.GetEastAction(this.props.iMode),
            vecOptions: t,
            fnOptionSelected: this.OnActionChanged.bind(this, "east"),
            bReadOnly: !this.state.bEditMode,
          }),
          i.createElement(C, {
            sLocalizedInputType: "#SourceInputMode_South",
            SelectedAction: e.GetSouthAction(this.props.iMode),
            vecOptions: t,
            fnOptionSelected: this.OnActionChanged.bind(this, "south"),
            bReadOnly: !this.state.bEditMode,
          }),
          i.createElement(C, {
            sLocalizedInputType: "#SourceInputMode_West",
            SelectedAction: e.GetWestAction(this.props.iMode),
            vecOptions: t,
            fnOptionSelected: this.OnActionChanged.bind(this, "west"),
            bReadOnly: !this.state.bEditMode,
          }),
          i.createElement(C, {
            sLocalizedInputType: "#SourceInputMode_Center",
            SelectedAction: e.GetCenterAction(this.props.iMode),
            vecOptions: t,
            fnOptionSelected: this.OnActionChanged.bind(this, "center"),
            bReadOnly: !this.state.bEditMode,
          }),
          this.renderFooter()
        );
      }
    };
    Object(o.b)([u.bind], B.prototype, "OnActionChanged", null),
      (B = Object(o.b)([a.a], B));
    let A = class extends O {
      constructor(e) {
        super(e);
        let t = this.props.controllerWatcher[0];
        (this.defaultProperties = []),
          "joystick" == this.props.sMode &&
            this.defaultProperties.push(
              {
                property: "sticky_click",
                default: !1,
                type: "boolean",
                variableName: "bStickyClick",
                mode: "joystick",
              },
              {
                property: "sticky_activate_threshold",
                default: 0.4,
                type: "float",
                variableName: "flStickyActivate",
                mode: "joystick",
              },
              {
                property: "sticky_deactivate_threshold",
                default: 0.3,
                type: "float",
                variableName: "flStickyDeactivate",
                mode: "joystick",
              }
            );
        let n = t.GetInputSourceDefaultDeadzone;
        this.defaultProperties.push(
          {
            property: "deadzone_pct",
            default: n,
            type: "float",
            variableName: "flDeadzonePct",
            mode: "joystick",
          },
          {
            property: "maxzone_pct",
            default: 100,
            type: "float",
            variableName: "flMaxzonePct",
            mode: "joystick",
          },
          {
            property: "exponent",
            default: 1,
            type: "float",
            variableName: "flExponent",
            mode: "trackpad",
          }
        ),
          this.LoadDefaults(),
          (this.state.eTrackpadInvertMode = t.GetTrackpadInvertState(
            this.props.iMode
          ));
      }
      BModeHasSettings() {
        return !0;
      }
      OnTrackpadInvertModeChanged(e, t) {
        let n = this.props.controllerWatcher[0],
          o = n.GetTrackpadInvertState(this.props.iMode);
        switch (e) {
          case "y":
            o = t
              ? o == h.c.eTrackPadInvert_X
                ? h.c.eTrackPadInvert_XY
                : h.c.eTrackPadInvert_Y
              : o == h.c.eTrackPadInvert_XY
              ? h.c.eTrackPadInvert_X
              : h.c.eTrackPadInvert_None;
            break;
          case "x":
            o = t
              ? o == h.c.eTrackPadInvert_Y
                ? h.c.eTrackPadInvert_XY
                : h.c.eTrackPadInvert_X
              : o == h.c.eTrackPadInvert_XY
              ? h.c.eTrackPadInvert_Y
              : h.c.eTrackPadInvert_None;
        }
        n.SetTrackpadInvertState(this.props.iMode, o),
          this.setState({ eTrackpadInvertMode: o });
      }
      OnTrackpadInvertModeReset() {
        this.setState({ eTrackpadInvertMode: h.c.eTrackPadInvert_None });
      }
      renderSettingsContent() {
        this.props.controllerWatcher[0];
        let e = "";
        this.hasOwnProperty("nextUniqueId") && (e = this.nextUniqueId());
        let t = [];
        return (
          "joystick" == this.props.sMode &&
            ((t = [
              i.createElement(k, {
                labelName: "#SourceInputMode_StickyClick",
                elementId: e,
                key: e,
                value: this.state.bStickyClick,
                onReset: this.onPropertyReset.bind(this, "sticky_click"),
                onChange: this.onPropertyChanged.bind(this, "sticky_click"),
              }),
            ]),
            this.state.bStickyClick &&
              (t.push(
                i.createElement(E, {
                  labelName: "#SourceInputMode_StickyClick_Activate",
                  elementId: e,
                  key: e,
                  min: 0,
                  max: 1,
                  step: 0.05,
                  value: this.state.flStickyActivate,
                  onReset: this.onPropertyReset.bind(
                    this,
                    "sticky_activate_threshold"
                  ),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "sticky_activate_threshold"
                  ),
                  renderValue: (e) => (e ? e.toString() : "-"),
                })
              ),
              t.push(
                i.createElement(E, {
                  labelName: "#SourceInputMode_StickyClick_Deactivate",
                  elementId: e,
                  key: e,
                  min: 0,
                  max: 1,
                  step: 0.05,
                  value: this.state.flStickyDeactivate,
                  onReset: this.onPropertyReset.bind(
                    this,
                    "sticky_deactivate_threshold"
                  ),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "sticky_deactivate_threshold"
                  ),
                  renderValue: (e) => (e ? e.toString() : "-"),
                })
              ))),
          i.createElement(
            "div",
            { className: "InputSettingsModal" },
            i.createElement(
              "div",
              { className: "ChordBindingHeader FlexColumn" },
              i.createElement(
                "div",
                { className: "FlexFullWidthRowCentered" },
                i.createElement("img", {
                  className:
                    "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                  src: "images/bindingui/icon_modal_edit_header.svg",
                }),
                i.createElement(
                  "div",
                  { className: "Label Title TitleCenter AllCaps" },
                  Object(p.c)("#BindingSettingsModal_Title")
                )
              )
            ),
            i.createElement(k, {
              labelName: "#SourceInputMode_InvertYAxis",
              elementId: e,
              value:
                this.state.eTrackpadInvertMode == h.c.eTrackPadInvert_Y ||
                this.state.eTrackpadInvertMode == h.c.eTrackPadInvert_XY,
              onReset: this.OnTrackpadInvertModeReset,
              onChange: this.OnTrackpadInvertModeChanged.bind(this, "y"),
            }),
            i.createElement(k, {
              labelName: "#SourceInputMode_InvertXAxis",
              elementId: e,
              value:
                this.state.eTrackpadInvertMode == h.c.eTrackPadInvert_X ||
                this.state.eTrackpadInvertMode == h.c.eTrackPadInvert_XY,
              onReset: this.OnTrackpadInvertModeReset,
              onChange: this.OnTrackpadInvertModeChanged.bind(this, "x"),
            }),
            i.createElement(E, {
              labelName: "#SourceInputMode_DeadZone",
              elementId: e,
              key: e,
              min: 0,
              max: 100,
              step: 5,
              value: this.state.flDeadzonePct,
              onReset: this.onPropertyReset.bind(this, "deadzone_pct"),
              onChange: this.onPropertyChanged.bind(this, "deadzone_pct"),
              renderValue: (e) => (e ? e.toString() : "-"),
            }),
            i.createElement(E, {
              labelName: "#SourceInputMode_MaxZone",
              elementId: e,
              key: e,
              min: 5,
              max: 100,
              step: 5,
              value: this.state.flMaxzonePct,
              onReset: this.onPropertyReset.bind(this, "maxzone_pct"),
              onChange: this.onPropertyChanged.bind(this, "maxzone_pct"),
              renderValue: (e) => (e ? e.toString() : "-"),
            }),
            i.createElement(E, {
              labelName: "#SourceInputMode_Exponent",
              elementId: e,
              key: e,
              min: 0.25,
              max: 4,
              step: 0.05,
              value: this.state.flExponent,
              onReset: this.onPropertyReset.bind(this, "exponent"),
              onChange: this.onPropertyChanged.bind(this, "exponent"),
              renderValue: (e) => (e ? e.toFixed(2) : "-"),
            }),
            t,
            i.createElement(
              "div",
              {
                className: "InputSettingsCloseButton Label AllCaps",
                onClick: this.CloseModeSettings,
              },
              Object(p.c)("#Button_Close")
            )
          )
        );
      }
      OnClickActionChanged(e) {
        this.props.controllerWatcher.forEach((t) => {
          t.SetClickAction(this.props.iMode, e);
        });
      }
      OnTouchActionChanged(e) {
        this.props.controllerWatcher.forEach((t) => {
          t.SetTouchAction(this.props.iMode, e);
        });
      }
      OnPositionActionChanged(e) {
        this.props.controllerWatcher.forEach((t) => {
          t.SetPositionAction(this.props.iMode, e);
        });
      }
      render() {
        let e = this.props.controllerWatcher[0],
          t = this.GetCombinedBooleanVector1DropDownItems(),
          n = [];
        return (
          this.GetVector2DropDownItems(n, !0),
          i.createElement(
            "div",
            { className: this.WrapperClasses },
            this.renderHeader(),
            e.GetInputSourceClickSupport &&
              i.createElement(C, {
                sLocalizedInputType: "#SourceInputMode_Click",
                SelectedAction: e.GetClickAction(this.props.iMode),
                vecOptions: t,
                fnOptionSelected: this.OnClickActionChanged,
                bReadOnly: !this.state.bEditMode,
              }),
            e.GetInputSourceTouchSupport &&
              i.createElement(C, {
                sLocalizedInputType: "#SourceInputMode_Touch",
                SelectedAction: e.GetTouchAction(this.props.iMode),
                vecOptions: t,
                fnOptionSelected: this.OnTouchActionChanged,
                bReadOnly: !this.state.bEditMode,
              }),
            i.createElement(C, {
              sLocalizedInputType: "#SourceInputMode_Position",
              SelectedAction: e.GetPositionAction(this.props.iMode),
              vecOptions: n,
              fnOptionSelected: this.OnPositionActionChanged,
              bReadOnly: !this.state.bEditMode,
            }),
            this.renderFooter()
          )
        );
      }
    };
    Object(o.b)([u.bind], A.prototype, "OnTrackpadInvertModeChanged", null),
      Object(o.b)([u.bind], A.prototype, "OnTrackpadInvertModeReset", null),
      Object(o.b)([u.bind], A.prototype, "OnClickActionChanged", null),
      Object(o.b)([u.bind], A.prototype, "OnTouchActionChanged", null),
      Object(o.b)([u.bind], A.prototype, "OnPositionActionChanged", null),
      (A = Object(o.b)([a.a], A));
    let N = class extends O {
      constructor(e) {
        super(e),
          (this.defaultProperties = [
            {
              property: "scroll_mode",
              default: "discrete",
              type: "string",
              variableName: "sScrollMode",
              mode: "touch",
            },
            {
              property: "smooth_scroll_trackpad_aspect_ratio",
              type: "float",
              default: 1,
              variableName: "fSmoothScrollTrackpadAspectRatio",
              mode: "touch",
            },
            {
              property: "smooth_scroll_multiplier",
              type: "float",
              default: 23.3,
              variableName: "fSmoothScrollMultiplier",
              mode: "touch",
            },
            {
              property: "smooth_scroll_acceleration_power",
              type: "float",
              default: 1.5,
              variableName: "fSmoothScrollAccelerationPower",
              mode: "touch",
            },
            {
              property: "smooth_scroll_haptic_notches_per_touchpad",
              type: "float",
              default: 16,
              variableName: "fSmoothScrollHapticNotchesPerTouchpad",
              mode: "touch",
            },
            {
              property: "smooth_scroll_min_scroll_start_distance",
              type: "float",
              default: 0.2,
              variableName: "fSmoothScrollMinScrollStartDistance",
              mode: "touch",
            },
            {
              property: "smooth_scroll_min_throw_velocity",
              type: "float",
              default: 1,
              variableName: "fSmoothScrollMinThrowVelocity",
              mode: "touch",
            },
            {
              property: "smooth_scroll_max_scroll_velocity",
              type: "float",
              default: 4,
              variableName: "fSmoothScrollMaxScrollVelocity",
              mode: "touch",
            },
            {
              property: "smooth_scroll_deceleration",
              type: "float",
              default: 0.975,
              variableName: "fSmoothScrollDeceleration",
              mode: "touch",
            },
            {
              property: "smooth_scroll_min_last_velocities_to_average",
              type: "float",
              default: 1,
              variableName: "unSmoothScrollMinLastVelocitiesToAverage",
              mode: "touch",
            },
            {
              property: "smooth_scroll_max_last_velocities_to_average",
              type: "float",
              default: 4,
              variableName: "unSmoothScrollMaxLastVelocitiesToAverage",
              mode: "touch",
            },
            {
              property: "smooth_scroll_thrown_termination_velocity",
              type: "float",
              default: 1,
              variableName: "fSmoothScrollThrownTerminationVelocity",
              mode: "touch",
            },
            {
              property: "smooth_scroll_edge_scroll_threshold",
              type: "float",
              default: 0.85,
              variableName: "fSmoothScrollEdgeScrollThreshold",
              mode: "touch",
            },
            {
              property: "smooth_scroll_edge_scroll_threshold_vertical_bias",
              type: "float",
              default: 0,
              variableName: "fSmoothScrollEdgeScrollThresholdVerticalBias",
              mode: "touch",
            },
            {
              property: "smooth_scroll_edge_scroll_velocity",
              type: "float",
              default: 0.77,
              variableName: "fSmoothScrollEdgeScrollVelocity",
              mode: "touch",
            },
            {
              property: "smooth_scroll_edge_min_swipe",
              type: "float",
              default: 0.5,
              variableName: "fSmoothScrollEdgeMinSwipe",
              mode: "touch",
            },
            {
              property: "smooth_scroll_min_side_scroll_ratio",
              type: "float",
              default: 3,
              variableName: "fSmoothScrollMinSideScrollRatio",
              mode: "touch",
            },
            {
              property: "smooth_scroll_joystick_max_scroll_velocity",
              type: "float",
              default: 20,
              variableName: "fSmoothScrollJoystickMaxScrollVelocity",
              mode: "touch",
            },
            {
              property: "smooth_scroll_joystick_min_input_magnitude",
              type: "float",
              default: 0.01,
              variableName: "fSmoothScrollJoystickMinInputMagnitude",
              mode: "touch",
            },
            {
              property: "discrete_scroll_trackpad_globalscalefactor",
              type: "float",
              default: 1,
              variableName: "fDiscreteScrollTrackpadGlobalScaleFactor",
              mode: "touch",
            },
            {
              property: "discrete_scroll_trackpad_haptic_on_touchstart_enabled",
              type: "bool",
              default: !1,
              variableName: "bDiscreteScrollTrackpadHapticOnTouchStartEnabled",
              mode: "click",
            },
            {
              property: "discrete_scroll_trackpad_direct_directionlock_enabled",
              type: "bool",
              default: !1,
              variableName:
                "bDiscreteScrollTrackpadLockGestureDirectionEnabled",
              mode: "click",
            },
            {
              property: "discrete_scroll_trackpad_noisethreshold_ontouch",
              type: "float",
              default: 0.15,
              variableName: "fDiscreteScrollTrackpadNoiseReductionOnTouch",
              mode: "touch",
            },
            {
              property: "discrete_scroll_trackpad_noisethreshold_onmove",
              type: "float",
              default: 0.01,
              variableName: "fDiscreteScrollTrackpadNoiseReductionOnMove",
              mode: "touch",
            },
            {
              property: "discrete_scroll_trackpad_noisethreshold_onreversal",
              type: "float",
              default: 0.045,
              variableName: "fDiscreteScrollTrackpadNoiseReductionOnReversal",
              mode: "touch",
            },
            {
              property: "discrete_scroll_trackpad_accumthreshold_ontouch",
              type: "float",
              default: 0.78,
              variableName: "fDiscreteScrollTrackpadAccumThresholdOnTouch",
              mode: "touch",
            },
            {
              property: "discrete_scroll_trackpad_accumthreshold_onmove",
              type: "float",
              default: 0.28,
              variableName: "fDiscreteScrollTrackpadAccumThresholdOnMove",
              mode: "touch",
            },
            {
              property: "discrete_scroll_trackpad_accumthreshold_onreversal",
              type: "float",
              default: 0.84,
              variableName: "fDiscreteScrollTrackpadAccumThresholdOnReversal",
              mode: "touch",
            },
            {
              property: "discrete_scroll_trackpad_flick_enabled",
              type: "bool",
              default: !0,
              variableName: "bDiscreteScrollTrackpadFlickEnabled",
              mode: "click",
            },
            {
              property: "discrete_scroll_trackpad_flick_threshold",
              type: "float",
              default: 0.0025,
              variableName: "fDiscreteScrollTrackpadFlickThreshold",
              mode: "touch",
            },
            {
              property: "discrete_scroll_trackpad_flick_multiplier",
              type: "float",
              default: 1,
              variableName: "fDiscreteScrollTrackpadFlickScrollMultiplier",
              mode: "touch",
            },
            {
              property: "discrete_scroll_trackpad_flick_speed",
              type: "float",
              default: 0.975,
              variableName: "fDiscreteScrollTrackpadFlickSpeed",
              mode: "touch",
            },
            {
              property: "discrete_scroll_trackpad_slideandhold_enabled",
              type: "bool",
              default: !0,
              variableName: "bDiscreteScrollTrackpadSlideAndHoldGestureEnabled",
              mode: "click",
            },
            {
              property: "discrete_scroll_trackpad_slideandhold_scalefactor",
              type: "float",
              default: 1,
              variableName: "fDiscreteScrollTrackpadSlideAndHoldScaleFactor",
              mode: "touch",
            },
            {
              property: "discrete_scroll_trackpad_slideandhold_pulseratefactor",
              type: "float",
              default: 1,
              variableName:
                "fDiscreteScrollTrackpadSlideAndHoldPulseRateFactor",
              mode: "touch",
            },
            {
              property: "discrete_scroll_trackpad_slideandhold_bordertop",
              type: "float",
              default: 0.55,
              variableName: "fDiscreteScrollTrackpadSlideAndHoldBorderTop",
              mode: "touch",
            },
            {
              property: "discrete_scroll_trackpad_slideandhold_borderbottom",
              type: "float",
              default: -0.65,
              variableName: "fDiscreteScrollTrackpadSlideAndHoldBorderBottom",
              mode: "touch",
            },
            {
              property: "discrete_scroll_trackpad_slideandhold_hapticenabled",
              type: "bool",
              default: !0,
              variableName: "bDiscreteScrollTrackpadSlideAndHoldHapticEnabled",
              mode: "click",
            },
            {
              property: "discrete_scroll_joystick_ratefactor",
              type: "float",
              default: 1,
              variableName: "fDiscreteScrollJoystickScrollRate",
              mode: "touch",
            },
            {
              property: "discrete_scroll_joystick_scalefactor",
              type: "float",
              default: 1,
              variableName: "fDiscreteScrollJoystickScrollScale",
              mode: "touch",
            },
            {
              property: "discrete_scroll_joystick_deadzone_horizontal",
              type: "float",
              default: 0.1,
              variableName: "fDiscreteScrollJoystickScrollDeadzoneHorizontal",
              mode: "touch",
            },
            {
              property: "discrete_scroll_joystick_deadzone_vertical",
              type: "float",
              default: 0.1,
              variableName: "fDiscreteScrollJoystickScrollDeadzoneVertical",
              mode: "touch",
            },
          ]),
          this.LoadDefaults();
      }
      OnSave() {
        this.setState({ bEditMode: !1 });
      }
      OnScrollActionChanged(e) {
        this.props.controllerWatcher.forEach((t) => {
          t.SetScrollAction(this.props.iMode, e);
        });
      }
      BModeHasSettings() {
        return !0;
      }
      renderSliderValue(e) {
        return e.toString();
      }
      LocalizeScrollModeString(e) {
        switch (e) {
          case "smooth":
            return Object(p.c)("#SourceInputMode_ScrollMode_Smooth");
          case "discrete":
            return Object(p.c)("#SourceInputMode_ScrollMode_Discrete");
        }
        return Object(p.c)("#SourceInputMode_Default");
      }
      renderSettingsContent() {
        this.props.controllerWatcher[0];
        let e = "";
        this.hasOwnProperty("nextUniqueId") && (e = this.nextUniqueId());
        let t = [
            new v.b("smooth", this.LocalizeScrollModeString("smooth")),
            new v.b("discrete", this.LocalizeScrollModeString("discrete")),
          ],
          n = "smooth" === this.state.sScrollMode,
          o = "joystick" == this.props.controllerWatcher[0].GetInputSourceType;
        return i.createElement(
          "div",
          { className: "InputSettingsModal" },
          i.createElement(
            "div",
            { className: "ChordBindingHeader FlexColumn" },
            i.createElement(
              "div",
              { className: "FlexFullWidthRowCentered" },
              i.createElement("img", {
                className:
                  "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                src: "images/bindingui/icon_modal_edit_header.svg",
              }),
              i.createElement(
                "div",
                { className: "Label Title TitleCenter AllCaps" },
                Object(p.c)("#BindingSettingsModal_Title")
              )
            )
          ),
          i.createElement(
            "div",
            { className: "InputSettingsScrollablePanel" },
            i.createElement(M, {
              labelName: "#SourceInputMode_ScrollMode",
              elementId: e,
              vecValues: t,
              selectedValue: this.state.sScrollMode,
              selectedValueLocalized: this.LocalizeScrollModeString(
                this.state.sScrollMode
              ),
              onReset: this.onPropertyReset.bind(this, "scroll_mode"),
              onChange: this.onPropertyChanged.bind(this, "scroll_mode"),
            }),
            n &&
              !o &&
              i.createElement(E, {
                labelName: "#SourceInputMode_SmoothScroll_TrackpadAspectRatio",
                elementId: e,
                min: 0.2,
                max: 5,
                step: 0.1,
                value: this.state.fSmoothScrollTrackpadAspectRatio,
                onReset: this.onPropertyReset.bind(
                  this,
                  "smooth_scroll_trackpad_aspect_ratio"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "smooth_scroll_trackpad_aspect_ratio"
                ),
                renderValue: this.renderSliderValue,
              }),
            n &&
              !o &&
              i.createElement(E, {
                labelName: "#SourceInputMode_SmoothScroll_Multiplier",
                elementId: e,
                min: 0.1,
                max: 100,
                step: 0.1,
                value: this.state.fSmoothScrollMultiplier,
                onReset: this.onPropertyReset.bind(
                  this,
                  "smooth_scroll_multiplier"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "smooth_scroll_multiplier"
                ),
                renderValue: this.renderSliderValue,
              }),
            n &&
              !o &&
              i.createElement(E, {
                labelName: "#SourceInputMode_SmoothScroll_AccelerationPower",
                elementId: e,
                min: 1,
                max: 5,
                step: 0.1,
                value: this.state.fSmoothScrollAccelerationPower,
                onReset: this.onPropertyReset.bind(
                  this,
                  "smooth_scroll_acceleration_power"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "smooth_scroll_acceleration_power"
                ),
                renderValue: this.renderSliderValue,
              }),
            n &&
              !o &&
              i.createElement(E, {
                labelName: "#SourceInputMode_SmoothScroll_NotchesPerTouchpad",
                elementId: e,
                min: 1,
                max: 64,
                step: 1,
                value: this.state.fSmoothScrollHapticNotchesPerTouchpad,
                onReset: this.onPropertyReset.bind(
                  this,
                  "smooth_scroll_haptic_notches_per_touchpad"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "smooth_scroll_haptic_notches_per_touchpad"
                ),
                renderValue: this.renderSliderValue,
              }),
            n &&
              !o &&
              i.createElement(E, {
                labelName: "#SourceInputMode_SmoothScroll_StartDistance",
                elementId: e,
                min: 0.01,
                max: 1,
                step: 0.01,
                value: this.state.fSmoothScrollMinScrollStartDistance,
                onReset: this.onPropertyReset.bind(
                  this,
                  "smooth_scroll_min_scroll_start_distance"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "smooth_scroll_min_scroll_start_distance"
                ),
                renderValue: this.renderSliderValue,
              }),
            n &&
              !o &&
              i.createElement(E, {
                labelName: "#SourceInputMode_SmoothScroll_MinThrowVelocity",
                elementId: e,
                min: 0.1,
                max: 5,
                step: 0.1,
                value: this.state.fSmoothScrollMinThrowVelocity,
                onReset: this.onPropertyReset.bind(
                  this,
                  "smooth_scroll_min_throw_velocity"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "smooth_scroll_min_throw_velocity"
                ),
                renderValue: this.renderSliderValue,
              }),
            n &&
              !o &&
              i.createElement(E, {
                labelName: "#SourceInputMode_SmoothScroll_MaxScrollVelocity",
                elementId: e,
                min: 0.5,
                max: 15,
                step: 0.1,
                value: this.state.fSmoothScrollMaxScrollVelocity,
                onReset: this.onPropertyReset.bind(
                  this,
                  "smooth_scroll_max_scroll_velocity"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "smooth_scroll_max_scroll_velocity"
                ),
                renderValue: this.renderSliderValue,
              }),
            n &&
              !o &&
              i.createElement(E, {
                labelName: "#SourceInputMode_SmoothScroll_Deceleration",
                elementId: e,
                min: 0.5,
                max: 1,
                step: 0.01,
                value: this.state.fSmoothScrollDeceleration,
                onReset: this.onPropertyReset.bind(
                  this,
                  "smooth_scroll_deceleration"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "smooth_scroll_deceleration"
                ),
                renderValue: this.renderSliderValue,
              }),
            n &&
              !o &&
              i.createElement(E, {
                labelName:
                  "#SourceInputMode_SmoothScroll_MinLastVelocitiesToAverage",
                elementId: e,
                min: 1,
                max: 10,
                step: 1,
                value: this.state.unSmoothScrollMinLastVelocitiesToAverage,
                onReset: this.onPropertyReset.bind(
                  this,
                  "smooth_scroll_min_last_velocities_to_average"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "smooth_scroll_min_last_velocities_to_average"
                ),
                renderValue: this.renderSliderValue,
              }),
            n &&
              !o &&
              i.createElement(E, {
                labelName:
                  "#SourceInputMode_SmoothScroll_MaxLastVelocitiesToAverage",
                elementId: e,
                min: 1,
                max: 20,
                step: 1,
                value: this.state.unSmoothScrollMaxLastVelocitiesToAverage,
                onReset: this.onPropertyReset.bind(
                  this,
                  "smooth_scroll_max_last_velocities_to_average"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "smooth_scroll_max_last_velocities_to_average"
                ),
                renderValue: this.renderSliderValue,
              }),
            n &&
              !o &&
              i.createElement(E, {
                labelName:
                  "#SourceInputMode_SmoothScroll_ThrownTerminationVelocity",
                elementId: e,
                min: 0.1,
                max: 5,
                step: 0.1,
                value: this.state.fSmoothScrollThrownTerminationVelocity,
                onReset: this.onPropertyReset.bind(
                  this,
                  "smooth_scroll_thrown_termination_velocity"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "smooth_scroll_thrown_termination_velocity"
                ),
                renderValue: this.renderSliderValue,
              }),
            n &&
              !o &&
              i.createElement(E, {
                labelName: "#SourceInputMode_SmoothScroll_EdgeScrollThreshold",
                elementId: e,
                min: 0.1,
                max: 2,
                step: 0.05,
                value: this.state.fSmoothScrollEdgeScrollThreshold,
                onReset: this.onPropertyReset.bind(
                  this,
                  "smooth_scroll_edge_scroll_threshold"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "smooth_scroll_edge_scroll_threshold"
                ),
                renderValue: this.renderSliderValue,
              }),
            n &&
              !o &&
              i.createElement(E, {
                labelName:
                  "#SourceInputMode_SmoothScroll_EdgeScrollThresholdVerticalBias",
                elementId: e,
                min: -1,
                max: 1,
                step: 0.01,
                value: this.state.fSmoothScrollEdgeScrollThresholdVerticalBias,
                onReset: this.onPropertyReset.bind(
                  this,
                  "smooth_scroll_edge_scroll_threshold_vertical_bias"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "smooth_scroll_edge_scroll_threshold_vertical_bias"
                ),
                renderValue: this.renderSliderValue,
              }),
            n &&
              !o &&
              i.createElement(E, {
                labelName: "#SourceInputMode_SmoothScroll_EdgeScrollVelocity",
                elementId: e,
                min: 0,
                max: 5,
                step: 0.01,
                value: this.state.fSmoothScrollEdgeScrollVelocity,
                onReset: this.onPropertyReset.bind(
                  this,
                  "smooth_scroll_edge_scroll_velocity"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "smooth_scroll_edge_scroll_velocity"
                ),
                renderValue: this.renderSliderValue,
              }),
            n &&
              !o &&
              i.createElement(E, {
                labelName: "#SourceInputMode_SmoothScroll_EdgeMinSwipe",
                elementId: e,
                min: 0,
                max: 1,
                step: 0.01,
                value: this.state.fSmoothScrollEdgeMinSwipe,
                onReset: this.onPropertyReset.bind(
                  this,
                  "smooth_scroll_edge_min_swipe"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "smooth_scroll_edge_min_swipe"
                ),
                renderValue: this.renderSliderValue,
              }),
            n &&
              !o &&
              i.createElement(E, {
                labelName: "#SourceInputMode_SmoothScroll_MinSideScrollRatio",
                elementId: e,
                min: 1,
                max: 5,
                step: 0.5,
                value: this.state.fSmoothScrollMinSideScrollRatio,
                onReset: this.onPropertyReset.bind(
                  this,
                  "smooth_scroll_min_side_scroll_ratio"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "smooth_scroll_min_side_scroll_ratio"
                ),
                renderValue: this.renderSliderValue,
              }),
            n &&
              o &&
              i.createElement(E, {
                labelName: "#SourceInputMode_SmoothScroll_MaxScrollVelocity",
                elementId: e,
                min: 0.5,
                max: 50,
                step: 0.1,
                value: this.state.fSmoothScrollJoystickMaxScrollVelocity,
                onReset: this.onPropertyReset.bind(
                  this,
                  "smooth_scroll_joystick_max_scroll_velocity"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "smooth_scroll_joystick_max_scroll_velocity"
                ),
                renderValue: this.renderSliderValue,
              }),
            n &&
              o &&
              i.createElement(E, {
                labelName:
                  "#SourceInputMode_SmoothScroll_Joystick_MinInputMagnitude",
                elementId: e,
                min: 0.005,
                max: 0.2,
                step: 0.005,
                value: this.state.fSmoothScrollJoystickMinInputMagnitude,
                onReset: this.onPropertyReset.bind(
                  this,
                  "smooth_scroll_joystick_min_input_magnitude"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "smooth_scroll_joystick_min_input_magnitude"
                ),
                renderValue: this.renderSliderValue,
              }),
            !n &&
              !o &&
              i.createElement(E, {
                elementId: e,
                renderValue: this.renderSliderValue,
                min: 0.2,
                max: 5,
                step: 0.1,
                labelName:
                  "#SourceInputMode_DiscreteScroll_Trackpad_GlobalScaleFactor",
                value: this.state.fDiscreteScrollTrackpadGlobalScaleFactor,
                onReset: this.onPropertyReset.bind(
                  this,
                  "discrete_scroll_trackpad_globalscalefactor"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "discrete_scroll_trackpad_globalscalefactor"
                ),
              }),
            !n &&
              !o &&
              i.createElement(k, {
                elementId: e,
                labelName:
                  "#SourceInputMode_DiscreteScroll_Trackpad_HapticOnTouchStart",
                key: "discrete_scroll_trackpad_haptic_on_touchstart_enabled",
                value:
                  this.state.bDiscreteScrollTrackpadHapticOnTouchStartEnabled,
                onReset: this.onPropertyReset.bind(
                  this,
                  "discrete_scroll_trackpad_haptic_on_touchstart_enabled"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "discrete_scroll_trackpad_haptic_on_touchstart_enabled"
                ),
              }),
            !n &&
              !o &&
              i.createElement(k, {
                elementId: e,
                labelName:
                  "#SourceInputMode_DiscreteScroll_Trackpad_DirectDirectionLock",
                key: "discrete_scroll_trackpad_direct_directionlock_enabled",
                value:
                  this.state.bDiscreteScrollTrackpadLockGestureDirectionEnabled,
                onReset: this.onPropertyReset.bind(
                  this,
                  "discrete_scroll_trackpad_direct_directionlock_enabled"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "discrete_scroll_trackpad_direct_directionlock_enabled"
                ),
              }),
            !n &&
              !o &&
              i.createElement(E, {
                elementId: e,
                renderValue: this.renderSliderValue,
                min: 0.01,
                max: 0.3,
                step: 0.005,
                labelName:
                  "#SourceInputMode_DiscreteScroll_Trackpad_NoiseThreshold_OnTouch",
                value: this.state.fDiscreteScrollTrackpadNoiseReductionOnTouch,
                onReset: this.onPropertyReset.bind(
                  this,
                  "discrete_scroll_trackpad_noisethreshold_ontouch"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "discrete_scroll_trackpad_noisethreshold_ontouch"
                ),
              }),
            !n &&
              !o &&
              i.createElement(E, {
                elementId: e,
                renderValue: this.renderSliderValue,
                min: 0.01,
                max: 0.3,
                step: 0.005,
                labelName:
                  "#SourceInputMode_DiscreteScroll_Trackpad_NoiseThreshold_OnMove",
                value: this.state.fDiscreteScrollTrackpadNoiseReductionOnMove,
                onReset: this.onPropertyReset.bind(
                  this,
                  "discrete_scroll_trackpad_noisethreshold_onmove"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "discrete_scroll_trackpad_noisethreshold_onmove"
                ),
              }),
            !n &&
              !o &&
              i.createElement(E, {
                elementId: e,
                renderValue: this.renderSliderValue,
                min: 0.01,
                max: 0.3,
                step: 0.005,
                labelName:
                  "#SourceInputMode_DiscreteScroll_Trackpad_NoiseThreshold_OnReversal",
                value:
                  this.state.fDiscreteScrollTrackpadNoiseReductionOnReversal,
                onReset: this.onPropertyReset.bind(
                  this,
                  "discrete_scroll_trackpad_noisethreshold_onreversal"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "discrete_scroll_trackpad_noisethreshold_onreversal"
                ),
              }),
            !n &&
              !o &&
              i.createElement(E, {
                elementId: e,
                renderValue: this.renderSliderValue,
                min: 0.1,
                max: 1,
                step: 0.01,
                labelName:
                  "#SourceInputMode_DiscreteScroll_Trackpad_AccumThreshold_OnTouch",
                value: this.state.fDiscreteScrollTrackpadAccumThresholdOnTouch,
                onReset: this.onPropertyReset.bind(
                  this,
                  "discrete_scroll_trackpad_accumthreshold_ontouch"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "discrete_scroll_trackpad_accumthreshold_ontouch"
                ),
              }),
            !n &&
              !o &&
              i.createElement(E, {
                elementId: e,
                renderValue: this.renderSliderValue,
                min: 0.1,
                max: 1,
                step: 0.01,
                labelName:
                  "#SourceInputMode_DiscreteScroll_Trackpad_AccumThreshold_OnMove",
                value: this.state.fDiscreteScrollTrackpadAccumThresholdOnMove,
                onReset: this.onPropertyReset.bind(
                  this,
                  "discrete_scroll_trackpad_accumthreshold_onmove"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "discrete_scroll_trackpad_accumthreshold_onmove"
                ),
              }),
            !n &&
              !o &&
              i.createElement(E, {
                elementId: e,
                renderValue: this.renderSliderValue,
                min: 0.1,
                max: 1,
                step: 0.01,
                labelName:
                  "#SourceInputMode_DiscreteScroll_Trackpad_AccumThreshold_OnReversal",
                value:
                  this.state.fDiscreteScrollTrackpadAccumThresholdOnReversal,
                onReset: this.onPropertyReset.bind(
                  this,
                  "discrete_scroll_trackpad_accumthreshold_onreversal"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "discrete_scroll_trackpad_accumthreshold_onreversal"
                ),
              }),
            !n &&
              !o &&
              i.createElement(k, {
                elementId: e,
                labelName:
                  "#SourceInputMode_DiscreteScroll_Trackpad_FlickEnabled",
                key: "discrete_scroll_trackpad_flick_enabled",
                value: this.state.bDiscreteScrollTrackpadFlickEnabled,
                onReset: this.onPropertyReset.bind(
                  this,
                  "discrete_scroll_trackpad_flick_enabled"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "discrete_scroll_trackpad_flick_enabled"
                ),
              }),
            !n &&
              !o &&
              i.createElement(E, {
                elementId: e,
                renderValue: this.renderSliderValue,
                min: 0.001,
                max: 0.1,
                step: 0.001,
                labelName:
                  "#SourceInputMode_DiscreteScroll_Trackpad_FlickThreshold",
                value: this.state.fDiscreteScrollTrackpadFlickThreshold,
                onReset: this.onPropertyReset.bind(
                  this,
                  "discrete_scroll_trackpad_flick_threshold"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "discrete_scroll_trackpad_flick_threshold"
                ),
              }),
            !n &&
              !o &&
              i.createElement(E, {
                elementId: e,
                renderValue: this.renderSliderValue,
                min: 0.1,
                max: 3,
                step: 0.1,
                labelName:
                  "#SourceInputMode_DiscreteScroll_Trackpad_FlickScrollMultiplier",
                value: this.state.fDiscreteScrollTrackpadFlickScrollMultiplier,
                onReset: this.onPropertyReset.bind(
                  this,
                  "discrete_scroll_trackpad_flick_multiplier"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "discrete_scroll_trackpad_flick_multiplier"
                ),
              }),
            !n &&
              !o &&
              i.createElement(E, {
                elementId: e,
                renderValue: this.renderSliderValue,
                min: 0.9,
                max: 0.999,
                step: 0.001,
                labelName:
                  "#SourceInputMode_DiscreteScroll_Trackpad_FlickThrowSpeed",
                value: this.state.fDiscreteScrollTrackpadFlickSpeed,
                onReset: this.onPropertyReset.bind(
                  this,
                  "discrete_scroll_trackpad_flick_speed"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "discrete_scroll_trackpad_flick_speed"
                ),
              }),
            !n &&
              !o &&
              i.createElement(k, {
                elementId: e,
                labelName:
                  "#SourceInputMode_DiscreteScroll_Trackpad_SlideAndHoldEnabled",
                key: "discrete_scroll_trackpad_slideandhold_enabled",
                value:
                  this.state.bDiscreteScrollTrackpadSlideAndHoldGestureEnabled,
                onReset: this.onPropertyReset.bind(
                  this,
                  "discrete_scroll_trackpad_slideandhold_enabled"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "discrete_scroll_trackpad_slideandhold_enabled"
                ),
              }),
            !n &&
              !o &&
              i.createElement(E, {
                elementId: e,
                renderValue: this.renderSliderValue,
                min: 0.02,
                max: 4,
                step: 0.01,
                labelName:
                  "#SourceInputMode_DiscreteScroll_Trackpad_SlideAndHoldScaleFactor",
                value:
                  this.state.fDiscreteScrollTrackpadSlideAndHoldScaleFactor,
                onReset: this.onPropertyReset.bind(
                  this,
                  "discrete_scroll_trackpad_slideandhold_scalefactor"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "discrete_scroll_trackpad_slideandhold_scalefactor"
                ),
              }),
            !n &&
              !o &&
              i.createElement(E, {
                elementId: e,
                renderValue: this.renderSliderValue,
                min: 0.2,
                max: 4,
                step: 0.1,
                labelName:
                  "#SourceInputMode_DiscreteScroll_Trackpad_SlideAndHoldPulseRate",
                value:
                  this.state.fDiscreteScrollTrackpadSlideAndHoldPulseRateFactor,
                onReset: this.onPropertyReset.bind(
                  this,
                  "discrete_scroll_trackpad_slideandhold_pulseratefactor"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "discrete_scroll_trackpad_slideandhold_pulseratefactor"
                ),
              }),
            !n &&
              !o &&
              i.createElement(E, {
                elementId: e,
                renderValue: this.renderSliderValue,
                min: 0,
                max: 1,
                step: 0.01,
                labelName:
                  "#SourceInputMode_DiscreteScroll_Trackpad_SlideAndHoldBorderTop",
                value: this.state.fDiscreteScrollTrackpadSlideAndHoldBorderTop,
                onReset: this.onPropertyReset.bind(
                  this,
                  "discrete_scroll_trackpad_slideandhold_bordertop"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "discrete_scroll_trackpad_slideandhold_bordertop"
                ),
              }),
            !n &&
              !o &&
              i.createElement(E, {
                elementId: e,
                renderValue: this.renderSliderValue,
                min: -1,
                max: 0,
                step: 0.01,
                labelName:
                  "#SourceInputMode_DiscreteScroll_Trackpad_SlideAndHoldBorderBottom",
                value:
                  this.state.fDiscreteScrollTrackpadSlideAndHoldBorderBottom,
                onReset: this.onPropertyReset.bind(
                  this,
                  "discrete_scroll_trackpad_slideandhold_borderbottom"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "discrete_scroll_trackpad_slideandhold_borderbottom"
                ),
              }),
            !n &&
              !o &&
              i.createElement(k, {
                elementId: e,
                labelName:
                  "#SourceInputMode_DiscreteScroll_Trackpad_SlideAndHoldHapticEnabled",
                key: "discrete_scroll_trackpad_slideandhold_hapticenabled",
                value:
                  this.state.bDiscreteScrollTrackpadSlideAndHoldHapticEnabled,
                onReset: this.onPropertyReset.bind(
                  this,
                  "discrete_scroll_trackpad_slideandhold_hapticenabled"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "discrete_scroll_trackpad_slideandhold_hapticenabled"
                ),
              }),
            !n &&
              o &&
              i.createElement(E, {
                elementId: e,
                renderValue: this.renderSliderValue,
                min: 0.01,
                max: 4,
                step: 0.01,
                labelName:
                  "#SourceInputMode_DiscreteScroll_Joystick_ScrollRateFactor",
                value: this.state.fDiscreteScrollJoystickScrollRate,
                onReset: this.onPropertyReset.bind(
                  this,
                  "discrete_scroll_joystick_ratefactor"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "discrete_scroll_joystick_ratefactor"
                ),
              }),
            !n &&
              o &&
              i.createElement(E, {
                elementId: e,
                renderValue: this.renderSliderValue,
                min: 0.01,
                max: 4,
                step: 0.01,
                labelName:
                  "#SourceInputMode_DiscreteScroll_Joystick_ScrollScaleFactor",
                value: this.state.fDiscreteScrollJoystickScrollScale,
                onReset: this.onPropertyReset.bind(
                  this,
                  "discrete_scroll_joystick_scalefactor"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "discrete_scroll_joystick_scalefactor"
                ),
              }),
            !n &&
              o &&
              i.createElement(E, {
                elementId: e,
                renderValue: this.renderSliderValue,
                min: 0.01,
                max: 0.5,
                step: 0.01,
                labelName:
                  "#SourceInputMode_DiscreteScroll_Joystick_Deadzone_Horizontal",
                value:
                  this.state.fDiscreteScrollJoystickScrollDeadzoneHorizontal,
                onReset: this.onPropertyReset.bind(
                  this,
                  "discrete_scroll_joystick_deadzone_horizontal"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "discrete_scroll_joystick_deadzone_horizontal"
                ),
              }),
            !n &&
              o &&
              i.createElement(E, {
                elementId: e,
                renderValue: this.renderSliderValue,
                min: 0.01,
                max: 0.5,
                step: 0.01,
                labelName:
                  "#SourceInputMode_DiscreteScroll_Joystick_Deadzone_Vertical",
                value: this.state.fDiscreteScrollJoystickScrollDeadzoneVertical,
                onReset: this.onPropertyReset.bind(
                  this,
                  "discrete_scroll_joystick_deadzone_vertical"
                ),
                onChange: this.onPropertyChanged.bind(
                  this,
                  "discrete_scroll_joystick_deadzone_vertical"
                ),
              })
          ),
          i.createElement(
            "div",
            {
              className: "InputSettingsCloseButton Label AllCaps",
              onClick: this.CloseModeSettings,
            },
            Object(p.c)("#Button_Close")
          )
        );
      }
      render() {
        let e = this.props.controllerWatcher[0],
          t = [];
        return (
          this.GetVector2DropDownItems(t, !0),
          i.createElement(
            "div",
            { className: this.WrapperClasses },
            this.renderHeader(),
            i.createElement(C, {
              sLocalizedInputType: "#SourceInputMode_Scroll",
              SelectedAction: e.GetScrollAction(this.props.iMode),
              vecOptions: t,
              fnOptionSelected: this.OnScrollActionChanged,
              bReadOnly: !this.state.bEditMode,
            }),
            this.renderFooter()
          )
        );
      }
    };
    Object(o.b)([u.bind], N.prototype, "OnSave", null),
      Object(o.b)([u.bind], N.prototype, "OnScrollActionChanged", null),
      (N = Object(o.b)([a.a], N));
    let P = class extends O {
      OnClickActionChanged(e) {
        this.props.controllerWatcher.forEach((t) => {
          t.SetClickAction(this.props.iMode, e);
        });
      }
      OnTouchActionChanged(e) {
        this.props.controllerWatcher.forEach((t) => {
          t.SetTouchAction(this.props.iMode, e);
        });
      }
      OnPullActionChanged(e) {
        this.props.controllerWatcher.forEach((t) => {
          t.SetPullAction(this.props.iMode, e);
        });
      }
      render() {
        let e = this.props.controllerWatcher[0],
          t = this.GetCombinedBooleanVector1DropDownItems(),
          n = [];
        return (
          this.GetVector1DropDownItems(n, !0),
          i.createElement(
            "div",
            { className: this.WrapperClasses },
            this.renderHeader(),
            e.GetInputSourceClickSupport &&
              i.createElement(C, {
                sLocalizedInputType: "#SourceInputMode_TriggerClick",
                SelectedAction: e.GetClickAction(this.props.iMode),
                vecOptions: t,
                fnOptionSelected: this.OnClickActionChanged,
                bReadOnly: !this.state.bEditMode,
              }),
            e.GetInputSourceTouchSupport &&
              i.createElement(C, {
                sLocalizedInputType: "#SourceInputMode_Touch",
                SelectedAction: e.GetTouchAction(this.props.iMode),
                vecOptions: t,
                fnOptionSelected: this.OnTouchActionChanged,
                bReadOnly: !this.state.bEditMode,
              }),
            i.createElement(C, {
              sLocalizedInputType: "#SourceInputMode_Pull",
              SelectedAction: e.GetPullAction(this.props.iMode),
              vecOptions: n,
              fnOptionSelected: this.OnPullActionChanged,
              bReadOnly: !this.state.bEditMode,
            }),
            this.renderFooter()
          )
        );
      }
    };
    Object(o.b)([u.bind], P.prototype, "OnClickActionChanged", null),
      Object(o.b)([u.bind], P.prototype, "OnTouchActionChanged", null),
      Object(o.b)([u.bind], P.prototype, "OnPullActionChanged", null),
      (P = Object(o.b)([a.a], P));
    let L = class extends O {
      OnForceActionChanged(e) {
        this.props.controllerWatcher.forEach((t) => {
          t.SetForceAction(this.props.iMode, e);
        });
      }
      render() {
        let e = this.props.controllerWatcher[0],
          t = [];
        return (
          this.GetVector1DropDownItems(t, !0),
          i.createElement(
            "div",
            { className: this.WrapperClasses },
            this.renderHeader(),
            e.GetInputSourceForceSupport &&
              i.createElement(C, {
                sLocalizedInputType: "#SourceInputMode_Force",
                SelectedAction: e.GetForceAction(this.props.iMode),
                vecOptions: t,
                fnOptionSelected: this.OnForceActionChanged,
                bReadOnly: !this.state.bEditMode,
              }),
            this.renderFooter()
          )
        );
      }
    };
    Object(o.b)([u.bind], L.prototype, "OnForceActionChanged", null),
      (L = Object(o.b)([a.a], L));
    let x = class extends O {
      constructor(e) {
        super(e),
          (this.defaultProperties = [
            {
              property: "capsense_enable_threshold",
              default: 0.8,
              type: "float",
              variableName: "flCapsenseEnableThreshold",
              mode: "grab",
            },
            {
              property: "value_hold_threshold",
              default: 0.7,
              type: "float",
              variableName: "flGrabThreshold",
              mode: "grab",
            },
            {
              property: "value_release_threshold",
              default: 0.65,
              type: "float",
              variableName: "flReleaseThreshold",
              mode: "grab",
            },
            {
              property: "force_hold_threshold",
              default: 0.1,
              type: "float",
              variableName: "flForceHoldThreshold",
              mode: "grab",
            },
            {
              property: "force_release_threshold",
              default: 0.05,
              type: "float",
              variableName: "flForceReleaseThreshold",
              mode: "grab",
            },
            {
              property: "downgrade_speed",
              default: 1,
              type: "float",
              variableName: "flDowngradeSpeed",
              mode: "grab",
            },
            {
              property: "drop_speed",
              default: 0.1,
              type: "float",
              variableName: "flDropSpeed",
              mode: "grab",
            },
            {
              property: "haptic_amplitude",
              default: 0,
              type: "float",
              variableName: "flHapticAmplitude",
              mode: "grab",
            },
            {
              property: "haptic_frequency",
              default: 20,
              type: "float",
              variableName: "flHapticFrequency",
              mode: "grab",
            },
            {
              property: "haptic_duration",
              default: 0,
              type: "float",
              variableName: "flHapticDuration",
              mode: "grab",
            },
          ]),
          this.LoadDefaults(),
          this.BModeHasSettings.bind(this),
          Object(S.enableUniqueIds)(this);
      }
      OnGrabActionChanged(e) {
        this.props.controllerWatcher.forEach((t) => {
          t.SetGrabAction(this.props.iMode, e);
        });
      }
      BModeHasSettings() {
        return !0;
      }
      renderNormalizedSliderValue(e) {
        return Math.round(100 * e).toString();
      }
      renderSliderRawValue(e) {
        return e.toString();
      }
      renderNormalizedSplitSliderValue(e, t, n) {
        let o = (e > 1 ? n : t) + ": ";
        return (e = e > 1 ? e - 1 : e), o + Math.round(100 * e).toString();
      }
      renderSpeedSliderValue(e) {
        return (
          e.toString() + " " + Object(p.c)("#MetersPerSecond_Abbreviation")
        );
      }
      renderSettingsContent() {
        let e = this.props.controllerWatcher[0],
          t = "pinch" == e.GetInputSourceType,
          n = Object(p.c)(
            "pinch" == e.GetInputSourceType
              ? "#SourceInputMode_Pull"
              : "#SourceInputMode_Proximity"
          ),
          r = !("pinch" == e.GetInputSourceType),
          a = "";
        return (
          this.hasOwnProperty("nextUniqueId") && (a = this.nextUniqueId()),
          i.createElement(
            "div",
            { className: "InputSettingsModal" },
            i.createElement(
              "div",
              { className: "ChordBindingHeader FlexColumn" },
              i.createElement(
                "div",
                { className: "FlexFullWidthRowCentered" },
                i.createElement("img", {
                  className:
                    "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                  src: "images/bindingui/icon_modal_edit_header.svg",
                }),
                i.createElement(
                  "div",
                  { className: "Label Title TitleCenter AllCaps" },
                  Object(p.c)("#BindingSettingsModal_Title")
                )
              )
            ),
            i.createElement(
              "div",
              { className: "FlexColumn" },
              t &&
                i.createElement(E, {
                  labelName: "#SourceInputMode_CapsenseEnableThreshold",
                  elementId: a,
                  min: 0,
                  max: 1,
                  step: 0.05,
                  value: this.state.flCapsenseEnableThreshold,
                  onReset: this.onPropertyReset.bind(
                    this,
                    "capsense_enable_threshold"
                  ),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "capsense_enable_threshold"
                  ),
                  renderValue: this.renderNormalizedSliderValue,
                }),
              i.createElement(E, {
                labelName: "#SourceInputMode_GrabThreshold",
                elementId: a,
                halfSplit: r,
                min: 0,
                max: r ? 2 : 1,
                step: 0.05,
                value: this.state.flGrabThreshold,
                onReset: () =>
                  Object(o.a)(this, void 0, void 0, function* () {
                    yield this.onPropertyReset("value_hold_threshold");
                    const e = this.state.flGrabThreshold;
                    this.state.flReleaseThreshold > e &&
                      this.setState({ flReleaseThreshold: e });
                  }),
                onChange: (e) => {
                  this.state.flReleaseThreshold > e &&
                    this.setState({ flReleaseThreshold: e }),
                    this.onPropertyChanged("value_hold_threshold", e);
                },
                renderValue: (e) =>
                  this.renderNormalizedSplitSliderValue(
                    e,
                    n,
                    Object(p.c)("#SourceInputMode_Force")
                  ),
              }),
              i.createElement(E, {
                labelName: "#SourceInputMode_ReleaseThreshold",
                elementId: a,
                halfSplit: r,
                min: 0,
                max: r ? 2 : 1,
                step: 0.05,
                value: this.state.flReleaseThreshold,
                onReset: () =>
                  Object(o.a)(this, void 0, void 0, function* () {
                    yield this.onPropertyReset("value_release_threshold");
                    const e = this.state.flReleaseThreshold;
                    this.state.flGrabThreshold < e &&
                      this.setState({ flGrabThreshold: e });
                  }),
                onChange: (e) => {
                  this.state.flGrabThreshold < e &&
                    this.setState({ flGrabThreshold: e }),
                    this.onPropertyChanged("value_release_threshold", e);
                },
                renderValue: (e) =>
                  this.renderNormalizedSplitSliderValue(
                    e,
                    n,
                    Object(p.c)("#SourceInputMode_Force")
                  ),
              }),
              i.createElement(
                "div",
                {
                  className: "InputSettingsCloseButton Label AllCaps",
                  onClick: () => {
                    this.setState({ bShowAdvanced: !this.state.bShowAdvanced });
                  },
                },
                Object(p.c)(
                  this.state.bShowAdvanced
                    ? "#DisplaySettings_HideAdvancedSettings"
                    : "#DisplaySettings_ShowAdvancedSettings"
                )
              ),
              this.state.bShowAdvanced &&
                i.createElement(
                  "div",
                  null,
                  !1,
                  i.createElement(E, {
                    labelName: "#SourceInputMode_ForceHoldThreshold",
                    elementId: a,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    value: this.state.flForceHoldThreshold,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "force_hold_threshold"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "force_hold_threshold"
                    ),
                    renderValue: this.renderNormalizedSliderValue,
                  }),
                  i.createElement(E, {
                    labelName: "#SourceInputMode_ForceReleaseThreshold",
                    elementId: a,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    value: this.state.flForceReleaseThreshold,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "force_release_threshold"
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "force_release_threshold"
                    ),
                    renderValue: this.renderNormalizedSliderValue,
                  }),
                  i.createElement(E, {
                    labelName: "#SourceInputMode_DowngradeSpeed",
                    elementId: a,
                    min: 0,
                    max: 10,
                    step: 0.1,
                    value: this.state.flDowngradeSpeed,
                    onReset: this.onPropertyReset.bind(this, "downgrade_speed"),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "downgrade_speed"
                    ),
                    renderValue: this.renderSpeedSliderValue,
                  }),
                  i.createElement(E, {
                    labelName: "#SourceInputMode_DropSpeed",
                    elementId: a,
                    min: 0,
                    max: 10,
                    step: 0.1,
                    value: this.state.flDropSpeed,
                    onReset: this.onPropertyReset.bind(this, "drop_speed"),
                    onChange: this.onPropertyChanged.bind(this, "drop_speed"),
                    renderValue: this.renderSpeedSliderValue,
                  })
                )
            ),
            i.createElement(
              "div",
              {
                className: "InputSettingsCloseButton Label AllCaps",
                onClick: this.CloseModeSettings,
              },
              Object(p.c)("#Button_Close")
            )
          )
        );
      }
      render() {
        let e = this.props.controllerWatcher[0],
          t = this.GetCombinedBooleanVector1DropDownItems();
        return i.createElement(
          "div",
          { className: this.WrapperClasses },
          this.renderHeader(),
          i.createElement(C, {
            sLocalizedInputType: "#SourceInputMode_Grab",
            SelectedAction: e.GetGrabAction(this.props.iMode),
            vecOptions: t,
            fnOptionSelected: this.OnGrabActionChanged,
            bReadOnly: !this.state.bEditMode,
          }),
          this.renderFooter()
        );
      }
    };
    Object(o.b)([u.bind], x.prototype, "OnGrabActionChanged", null),
      (x = Object(o.b)([a.a], x));
    let V = class extends O {
      constructor(e) {
        super(e),
          (this.defaultProperties = [
            {
              property: "on/x",
              default: 1,
              type: "float",
              variableName: "flOnX",
              mode: "scalar_constant",
            },
            {
              property: "off/x",
              default: 0,
              type: "float",
              variableName: "flOffX",
              mode: "scalar_constant",
            },
            {
              property: "on/y",
              default: 1,
              type: "float",
              variableName: "flOnY",
              mode: "scalar_constant",
            },
            {
              property: "off/y",
              default: 0,
              type: "float",
              variableName: "flOffY",
              mode: "scalar_constant",
            },
            {
              property: "on/z",
              default: 1,
              type: "float",
              variableName: "flOnZ",
              mode: "scalar_constant",
            },
            {
              property: "off/z",
              default: 0,
              type: "float",
              variableName: "flOffZ",
              mode: "scalar_constant",
            },
          ]),
          this.LoadDefaults(),
          this.BModeHasSettings.bind(this),
          Object(S.enableUniqueIds)(this);
      }
      OnValueActionChanged(e) {
        this.props.controllerWatcher.forEach((t) => {
          t.SetValueAction(this.props.iMode, e);
        });
      }
      BModeHasSettings() {
        return this.GetActionArity() >= 1;
      }
      renderNormalizedSliderValue(e) {
        return e.toFixed(1);
      }
      renderSettingsContent() {
        this.props.controllerWatcher[0];
        let e = "";
        this.hasOwnProperty("nextUniqueId") && (e = this.nextUniqueId());
        let t = this.GetActionArity();
        return i.createElement(
          "div",
          { className: "InputSettingsModal" },
          i.createElement(
            "div",
            { className: "ChordBindingHeader FlexColumn" },
            i.createElement(
              "div",
              { className: "FlexFullWidthRowCentered" },
              i.createElement("img", {
                className:
                  "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                src: "images/bindingui/icon_modal_edit_header.svg",
              }),
              i.createElement(
                "div",
                { className: "Label Title TitleCenter AllCaps" },
                Object(p.c)("#BindingSettingsModal_Title")
              )
            )
          ),
          i.createElement(
            "div",
            { className: "FlexColumn" },
            t >= 1 &&
              i.createElement(E, {
                labelName: "#SourceInputMode_ScalarOffX",
                elementId: e,
                min: -1,
                max: 1,
                step: 0.1,
                value: this.state.flOffX,
                onReset: this.onPropertyReset.bind(this, "off/x"),
                onChange: this.onPropertyChanged.bind(this, "off/x"),
                renderValue: this.renderNormalizedSliderValue,
              }),
            t >= 2 &&
              i.createElement(E, {
                labelName: "#SourceInputMode_ScalarOffY",
                elementId: e,
                min: -1,
                max: 1,
                step: 0.1,
                value: this.state.flOffY,
                onReset: this.onPropertyReset.bind(this, "off/y"),
                onChange: this.onPropertyChanged.bind(this, "off/y"),
                renderValue: this.renderNormalizedSliderValue,
              }),
            t >= 3 &&
              i.createElement(E, {
                labelName: "#SourceInputMode_ScalarOffZ",
                elementId: e,
                min: -1,
                max: 1,
                step: 0.1,
                value: this.state.flOffZ,
                onReset: this.onPropertyReset.bind(this, "off/z"),
                onChange: this.onPropertyChanged.bind(this, "off/z"),
                renderValue: this.renderNormalizedSliderValue,
              })
          ),
          i.createElement(
            "div",
            {
              className: "InputSettingsCloseButton Label AllCaps",
              onClick: this.CloseModeSettings,
            },
            Object(p.c)("#Button_Close")
          )
        );
      }
      GetActionArity() {
        let e = this.props.controllerWatcher[0].GetValueAction(
          this.props.iMode
        );
        if (!e) return 0;
        switch (e.type) {
          case "vector1":
            return 1;
          case "vector2":
            return 2;
          case "vector3":
            return 3;
          default:
            return 0;
        }
      }
      render() {
        let e = this.props.controllerWatcher[0],
          t = [];
        this.GetVector1DropDownItems(t, !1),
          this.GetVector2DropDownItems(t, !1),
          this.GetVector3DropDownItems(t, !1),
          this.AddNoneItems(t);
        let n = "";
        this.hasOwnProperty("nextUniqueId") && (n = this.nextUniqueId());
        let o = this.GetActionArity();
        return i.createElement(
          "div",
          { className: this.WrapperClasses },
          this.renderHeader(),
          i.createElement(C, {
            sLocalizedInputType: "#SourceInputMode_ScalarValue",
            SelectedAction: e.GetValueAction(this.props.iMode),
            vecOptions: t,
            fnOptionSelected: this.OnValueActionChanged,
            bReadOnly: !this.state.bEditMode,
          }),
          o >= 1 &&
            i.createElement(E, {
              labelName: "#SourceInputMode_ScalarOnX",
              elementId: n,
              min: -1,
              max: 1,
              step: 0.1,
              value: this.state.flOnX,
              onChange: this.onPropertyChanged.bind(this, "on/x"),
              renderValue: this.renderNormalizedSliderValue,
            }),
          o >= 2 &&
            i.createElement(E, {
              labelName: "#SourceInputMode_ScalarOnY",
              elementId: n,
              min: -1,
              max: 1,
              step: 0.1,
              value: this.state.flOnY,
              onChange: this.onPropertyChanged.bind(this, "on/y"),
              renderValue: this.renderNormalizedSliderValue,
            }),
          o >= 3 &&
            i.createElement(E, {
              labelName: "#SourceInputMode_ScalarOnZ",
              elementId: n,
              min: -1,
              max: 1,
              step: 0.1,
              value: this.state.flOnZ,
              onChange: this.onPropertyChanged.bind(this, "on/z"),
              renderValue: this.renderNormalizedSliderValue,
            }),
          this.renderFooter()
        );
      }
    };
    Object(o.b)([u.bind], V.prototype, "OnValueActionChanged", null),
      (V = Object(o.b)([a.a], V));
    var j = n("uFkT");
    let F = class extends i.Component {
      constructor(e) {
        super(e), (this.state = { bInEditMode: !1 });
      }
      OnEdit(e) {
        this.setState({ bInEditMode: e });
      }
      componentWillMount() {
        this.setState({
          bInEditMode: this.props.controllerWatcher[0].BHasModeSelectionPending(
            this.props.iMode
          ),
        });
      }
      componentWillReceiveProps(e) {
        e.iMode != this.props.iMode &&
          this.setState({
            bInEditMode:
              this.props.controllerWatcher[0].BHasModeSelectionPending(e.iMode),
          });
      }
      render() {
        let e = {
          controllerWatcher: this.props.controllerWatcher,
          iMode: this.props.iMode,
          sMode: this.props.sMode,
          ParentEdit: this.OnEdit,
          bReadOnly: this.props.bReadOnly,
          bStartInEditMode: this.state.bInEditMode,
          bShowModeOptionsDropDownOnStart:
            this.props.controllerWatcher[0].BHasModeSelectionPending(
              this.props.iMode
            ),
          bToggleButtonMode: "toggle_button" == this.props.sMode,
          sActionSet: h.a.SelectedActionSet,
        };
        switch (this.props.sMode) {
          case "toggle_button":
            return i.createElement(D, Object.assign({}, e));
          case "trackpad":
          case "joystick":
            return i.createElement(A, Object.assign({}, e));
          case "complex_button":
            return i.createElement(w, Object.assign({}, e));
          case "button":
            return i.createElement(R, Object.assign({}, e));
          case "dpad":
          case "dpad_touch":
          case "dpad_click":
            return i.createElement(B, Object.assign({}, e));
          case "scroll":
          case "trackpad_scroll":
            return i.createElement(N, Object.assign({}, e));
          case "trigger":
            return i.createElement(P, Object.assign({}, e));
          case "force_sensor":
            return i.createElement(L, Object.assign({}, e));
          case "grab":
            return i.createElement(x, Object.assign({}, e));
          case "scalar_constant":
            return i.createElement(V, Object.assign({}, e));
          default:
            return i.createElement(T, Object.assign({}, e));
        }
      }
    };
    Object(o.b)([u.bind], F.prototype, "OnEdit", null),
      (F = Object(o.b)([a.a], F));
    class H {
      constructor(e, t, n, o) {
        (this.x = e),
          (this.y = t),
          (this.width = n),
          (this.nPointScale = o),
          this.toString.bind(this);
      }
      toString() {
        return (
          this.x + "," + this.y + "," + this.width + "," + this.nPointScale
        );
      }
    }
    let U = class extends i.Component {
      constructor() {
        super(...arguments),
          (this.m_HTMLButton = void 0),
          (this.m_SVGElement = void 0);
      }
      AddMode() {
        this.props.controllerWatcher.forEach((e) => {
          e.AddInputMode("none");
        });
      }
      componentWillUnmount() {
        this.props.controllerWatcher.forEach((e) => {
          e.cancelWatcher();
        });
      }
      BindButtonRef(e) {
        (this.m_HTMLButton = e), this.m_HTMLButton && this.UpdateSVGPath();
      }
      BindSVGRef(e) {
        (this.m_SVGElement = e), this.UpdateSVGPath();
      }
      UpdateSVGPath() {
        if (
          this.m_HTMLButton &&
          this.m_SVGElement &&
          this.props.ptControllerImagePosition
        ) {
          let e = this.m_SVGElement.children.namedItem("SourcePath"),
            t = this.m_SVGElement.children.namedItem("SourceLine"),
            n = this.m_SVGElement.children.namedItem("SourceCircle"),
            o = this.props.controllerWatcher[0],
            i = this.props.eControllerButtonSide == h.b.eButtonSide_Right,
            r = this.props.eControllerButtonSide == h.b.eButtonSide_None,
            a = this.m_HTMLButton.getBoundingClientRect(),
            s = this.m_SVGElement.getBoundingClientRect(),
            l = o.GetSVGEndPoint();
          (l.x *= this.props.ptControllerImagePosition.nPointScale),
            (l.y *= this.props.ptControllerImagePosition.nPointScale),
            r || i || (l.x = this.props.ptControllerImagePosition.width - l.x),
            (l.x += this.props.ptControllerImagePosition.x - s.left),
            (l.y += this.props.ptControllerImagePosition.y - s.top);
          let c = new h.e(0, a.top - s.top);
          c.x = i ? a.left - 10 : a.right + 10;
          let d = i ? -20 : 20,
            p = c.x + d + "," + c.y + " " + l.x + "," + l.y;
          e.setAttribute("points", p);
          let u = c.x + "," + c.y + " " + (c.x + d) + "," + c.y;
          t.setAttribute("points", u),
            n.setAttribute("cx", l.x + ""),
            n.setAttribute("cy", l.y + "");
        }
      }
      OnMouseEnter(e) {
        this.UpdateSVGPath(),
          this.m_SVGElement &&
            this.m_SVGElement.classList.add("MenuSVGVisible");
      }
      OnMouseLeave(e) {
        this.m_SVGElement &&
          this.m_SVGElement.classList.remove("MenuSVGVisible");
      }
      render() {
        let e = this.props.strSVGClass;
        e += " MenuSVG";
        let t = this.props.controllerWatcher[0],
          n = 0,
          o = t.GetModes.map(
            (e, t) => (
              ++n,
              i.createElement(F, {
                key: t,
                sMode: e.mode,
                iMode: t,
                controllerWatcher: this.props.controllerWatcher,
                bReadOnly: this.props.bReadOnly,
              })
            )
          );
        return i.createElement(
          "div",
          {
            className: "FlexColumn BindingInputSection",
            onMouseEnter: this.OnMouseEnter,
            onMouseLeave: this.OnMouseLeave,
          },
          i.createElement(
            "div",
            { className: "FlexRow" },
            i.createElement(
              "div",
              { className: "Label Title" },
              t.GetControllerInputName
            ),
            !this.props.bReadOnly &&
              i.createElement(
                "div",
                {
                  className: "Label FlexRightAlignChild",
                  onClick: this.AddMode,
                },
                i.createElement("img", {
                  className: "ActionButtonImage",
                  src: "images/bindingui/icon_add.svg",
                })
              )
          ),
          i.createElement("hr", { ref: this.BindButtonRef }),
          n > 0 && i.createElement("div", { className: "FlexColumn" }, o),
          i.createElement(g.a, { onReflow: this.UpdateSVGPath }),
          i.createElement(
            "svg",
            {
              className: e,
              xmlns: "http://www.w3.org/2000/svg",
              ref: this.BindSVGRef,
            },
            i.createElement(
              "defs",
              null,
              i.createElement(
                "radialGradient",
                { id: "buttonGradient" },
                i.createElement("stop", {
                  offset: "0%",
                  stopColor: "var(--bordercolor)",
                  stopOpacity: "0.8",
                }),
                i.createElement("stop", {
                  offset: "100%",
                  stopColor: "var(--bordercolor)",
                  stopOpacity: "0",
                })
              )
            ),
            i.createElement("polyline", {
              id: "SourceLine",
              stroke: "var(--bordercolor)",
              strokeWidth: "0.1rem",
              fill: "transparent",
            }),
            i.createElement("polyline", {
              id: "SourcePath",
              stroke: "var(--bordercolor)",
              strokeWidth: "0.1rem",
              fill: "transparent",
            }),
            i.createElement("circle", {
              id: "SourceCircle",
              r: "2rem",
              fill: "url(#buttonGradient)",
            })
          )
        );
      }
    };
    Object(o.b)([u.bind], U.prototype, "AddMode", null),
      Object(o.b)([u.bind], U.prototype, "BindButtonRef", null),
      Object(o.b)([u.bind], U.prototype, "BindSVGRef", null),
      Object(o.b)([u.bind], U.prototype, "UpdateSVGPath", null),
      Object(o.b)([u.bind], U.prototype, "OnMouseEnter", null),
      Object(o.b)([u.bind], U.prototype, "OnMouseLeave", null),
      (U = Object(o.b)([a.a], U));
    let W = class extends i.Component {
      render() {
        let e = h.a.SelectedControllerTypeInfo;
        if (!e || !this.props.selectedActionSet) return null;
        h.a.SelectedControllerTypeLocalizedName;
        let t = [];
        Object.keys(e.input_source).forEach((n) => {
          t.push({ name: n, order: e.input_source[n].order });
        }),
          t.sort((e, t) => e.order - t.order);
        let n = t.map((t, n) => {
          let o = e.input_source[t.name];
          if ("pose" == o.type || "vibration" == o.type) return null;
          if (
            "InputValueVisibility_SteamVRInternal" == o.visibility &&
            !h.a.CurrentAppCanAccessPrivateInputs
          )
            return null;
          if (
            "InputValueVisibility_AvailableButHidden" == o.visibility &&
            !j.a.ShowHiddenInputs
          )
            return null;
          if (null != o.side)
            switch (o.side) {
              case "left":
                if (this.props.eControllerButtonSide != h.b.eButtonSide_Left)
                  return null;
                break;
              case "right":
                if (this.props.eControllerButtonSide != h.b.eButtonSide_Right)
                  return null;
            }
          let r = [];
          return (
            r.push(
              h.a.GetControllerWatcherForSourceFromControllerType(
                e,
                this.props.eControllerButtonSide,
                t.name,
                this.props.selectedActionSet.name
              )
            ),
            this.props.eControllerButtonOtherSide &&
              this.props.eControllerButtonOtherSide.valueOf() !=
                h.b.eButtonSide_None &&
              r.push(
                h.a.GetControllerWatcherForSourceFromControllerType(
                  e,
                  this.props.eControllerButtonOtherSide,
                  t.name,
                  this.props.selectedActionSet.name
                )
              ),
            i.createElement(U, {
              key: n,
              controllerWatcher: r,
              strSVGClass: this.props.strSVGClass,
              bReadOnly: this.props.bReadOnly,
              eControllerButtonSide: this.props.eControllerButtonSide,
              ptControllerImagePosition: this.props.ptControllerImagePosition,
            })
          );
        });
        return i.createElement("div", null, n);
      }
    };
    W = Object(o.b)([a.a], W);
    let G = class extends i.Component {
      constructor(e) {
        super(e),
          (this.m_LeftControllerImage = void 0),
          (this.m_RightControllerImage = void 0),
          this.props.bSingleMode
            ? (this.state = {
                bMirrorBinding: !0,
                ptLeftController: new H(0, 0, 0, 0),
                ptRightController: new H(0, 0, 0, 0),
              })
            : this.props.selectedActionSet &&
              "single" != this.props.selectedActionSet.usage
            ? ((this.state = {
                bMirrorBinding: !1,
                ptLeftController: new H(0, 0, 0, 0),
                ptRightController: new H(0, 0, 0, 0),
              }),
              this.props.fnSetMirroredMode(!1))
            : this.props.selectedActionSet &&
              ((this.state = {
                bMirrorBinding: !0,
                ptLeftController: new H(0, 0, 0, 0),
                ptRightController: new H(0, 0, 0, 0),
              }),
              this.props.fnSetMirroredMode(!0));
      }
      componentWillReceiveProps(e) {
        let t = !1,
          n = e.selectedActionSet;
        if (
          n &&
          (!this.props.selectedActionSet ||
            n.name != this.props.selectedActionSet.name)
        ) {
          if ("single" == n.usage) {
            t = !0;
            Object.keys(h.a.SelectedControllerTypeInfo.input_source).map(
              (e, o) => {
                let i = h.a.GetControllerWatcherForSourceFromControllerType(
                    h.a.SelectedControllerTypeInfo,
                    h.b.eButtonSide_Left,
                    e,
                    n.name
                  ),
                  r = h.a.GetControllerWatcherForSourceFromControllerType(
                    h.a.SelectedControllerTypeInfo,
                    h.b.eButtonSide_Right,
                    e,
                    n.name
                  );
                t = t && r.BindingsMatch(i);
              }
            );
          }
          this.setState({ bMirrorBinding: t }), this.props.fnSetMirroredMode(t);
        }
      }
      ToggleMirrorMode(e) {
        if ("single" == this.props.selectedActionSet.usage) {
          let t = this.state.bMirrorBinding;
          if (
            (this.setState({ bMirrorBinding: e }),
            this.props.fnSetMirroredMode(!this.state.bMirrorBinding),
            !t)
          ) {
            Object.keys(h.a.SelectedControllerTypeInfo.input_source).map(
              (e, t) => {
                let n = h.a.GetControllerWatcherForSourceFromControllerType(
                  h.a.SelectedControllerTypeInfo,
                  h.b.eButtonSide_Left,
                  e,
                  this.props.selectedActionSet.name
                );
                h.a
                  .GetControllerWatcherForSourceFromControllerType(
                    h.a.SelectedControllerTypeInfo,
                    h.b.eButtonSide_Right,
                    e,
                    this.props.selectedActionSet.name
                  )
                  .CopyActions(n);
              }
            );
          }
        }
      }
      UpdatePositionHelper(e) {
        let t = 1,
          n = 0,
          o = 0,
          i = 0;
        if (e) {
          let r = e.getBoundingClientRect();
          if (((i = r.width), e.naturalWidth > 0))
            return (
              (t = r.height / e.naturalHeight),
              (o = r.left),
              (n = r.top),
              new H(o, n, i, t)
            );
        }
      }
      OnUpdateControllerPicturePosition() {
        this.setState({
          ptLeftController: this.UpdatePositionHelper(
            this.m_LeftControllerImage
          ),
        }),
          this.setState({
            ptRightController: this.UpdatePositionHelper(
              this.m_RightControllerImage
            ),
          });
      }
      BindLeftControllerImage(e) {
        (this.m_LeftControllerImage = e),
          this.setState({ ptLeftController: this.UpdatePositionHelper(e) });
      }
      BindRightControllerImage(e) {
        (this.m_RightControllerImage = e),
          this.setState({ ptRightController: this.UpdatePositionHelper(e) });
      }
      render() {
        let e = h.a.SelectedControllerTypeInfo;
        if (!e) return null;
        let t = "",
          n = "";
        this.props.bSingleMode ||
          ((t = e.input_bindingui_left.transform
            ? e.input_bindingui_left.transform
            : ""),
          (n = e.input_bindingui_left.uri ? e.input_bindingui_left.uri : ""));
        let o = e.input_bindingui_right.transform
            ? e.input_bindingui_right.transform
            : "",
          r = e.input_bindingui_right.uri ? e.input_bindingui_right.uri : "",
          a = "",
          s = h.b.eButtonSide_Right,
          l = this.props.selectedActionSet,
          c = !1,
          d = h.b.eButtonSide_None;
        if (!this.props.bSingleMode) {
          if (null == l)
            return (
              console.warn(
                "ControllerBindingHandedControllers::render - Got undefined actionSet."
              ),
              null
            );
          "single" == l.usage &&
            ((a = this.state.bMirrorBinding ? "Mirrored" : ""),
            (c = !this.props.bReadOnly),
            this.state.bMirrorBinding && (d = h.b.eButtonSide_Right));
        }
        let u = h.a.SelectedControllerTypeLocalizedName,
          m = Object(p.c)("#BindingUI_LeftHandController", u),
          b = Object(p.c)("#BindingUI_RightHandController", u),
          _ = this.props.bReadOnly ? "View" : "Edit",
          S =
            h.a.SelectedActionSetChordCount > 0
              ? Object(p.c)("#BindingUI_" + _ + "Chords")
              : Object(p.c)("#BindingUI_AddChords"),
          v = h.a.BSelectedActionSetHasBoundPoses
            ? Object(p.c)("#BindingUI_" + _ + "Poses")
            : Object(p.c)("#BindingUI_AddPoses"),
          y = h.a.BSelectedActionSetHasBoundHaptics
            ? Object(p.c)("#BindingUI_" + _ + "Haptics")
            : Object(p.c)("#BindingUI_AddHaptics"),
          f = h.a.BSelectedActionSetHasBoundSkeletons
            ? Object(p.c)("#BindingUI_" + _ + "Skeleton")
            : Object(p.c)("#BindingUI_AddSkeleton"),
          C =
            !this.props.bReadOnly ||
            (h.a.SelectedActionSetChords &&
              h.a.SelectedActionSetChords.length > 0);
        return i.createElement(
          "div",
          {
            className:
              "BindingSectionWrapper " +
              (this.props.bSingleMode ? " BindingButtonRowSingleDevice" : ""),
          },
          i.createElement(
            "div",
            { className: "BindingControllerImageColumns FlexColumn" },
            i.createElement(
              "div",
              { className: "FlexRow" },
              !this.props.bSingleMode &&
                i.createElement(
                  "div",
                  { className: "FlexColumn ControllerImageColumn" },
                  i.createElement("img", {
                    className: "ControllerImage ControllerImageLeft",
                    src: n,
                    style: { transform: t },
                    ref: this.BindLeftControllerImage,
                    onLoad: this.OnUpdateControllerPicturePosition,
                  }),
                  i.createElement(g.a, {
                    onReflow: this.OnUpdateControllerPicturePosition,
                  })
                ),
              i.createElement(
                "div",
                { className: a + " ControllerImageColumn FlexColumn" },
                i.createElement("img", {
                  className: "ControllerImage ControllerImageRight",
                  src: r,
                  style: { transform: o },
                  ref: this.BindRightControllerImage,
                  onLoad: this.OnUpdateControllerPicturePosition,
                }),
                i.createElement(g.a, {
                  onReflow: this.OnUpdateControllerPicturePosition,
                })
              )
            ),
            i.createElement(
              "div",
              { className: "FlexColumnCentered ControllerImageColumnButtons" },
              i.createElement(
                "div",
                { className: "FlexFullWidthRowCentered" },
                C &&
                  i.createElement(
                    "div",
                    {
                      className: "Label TitleCenter ToggleMirror ButtonControl",
                      onClick: this.props.fnOpenChordBindingsModal,
                    },
                    S
                  ),
                h.a.BSelectedActionSetHasPoses &&
                  i.createElement(
                    "div",
                    {
                      className: "Label TitleCenter ToggleMirror ButtonControl",
                      onClick: this.props.fnOpenPoseBindingsModal,
                    },
                    v
                  ),
                h.a.BSelectedActionSetHasHaptics &&
                  i.createElement(
                    "div",
                    {
                      className: "Label TitleCenter ToggleMirror ButtonControl",
                      onClick: this.props.fnOpenHapticsBindingsModal,
                    },
                    y
                  ),
                h.a.BSelectedActionSetHasSkeletons &&
                  i.createElement(
                    "div",
                    {
                      className: "Label TitleCenter ToggleMirror ButtonControl",
                      onClick: this.props.fnOpenSkeletonBindingsModal,
                    },
                    f
                  )
              ),
              c &&
                i.createElement(
                  "div",
                  null,
                  i.createElement("input", {
                    type: "checkbox",
                    checked: this.state.bMirrorBinding,
                    onChange: (e) => {
                      this.ToggleMirrorMode(e.target.checked);
                    },
                  }),
                  i.createElement(
                    "div",
                    { className: "Label" },
                    Object(p.c)("#BindingUI_MirrorMode")
                  )
                )
            )
          ),
          this.props.bSingleMode &&
            i.createElement(
              "div",
              { className: "BindingSection FlexRow" },
              i.createElement(
                "div",
                { className: "BindingButtonRow FlexColumn" },
                i.createElement(W, {
                  eControllerButtonSide: h.b.eButtonSide_None,
                  strSVGClass: "Left",
                  bReadOnly: this.props.bReadOnly,
                  selectedActionSet: h.a.SelectedActionSetDetails,
                  ptControllerImagePosition: this.state.ptRightController,
                })
              )
            ),
          !this.props.bSingleMode &&
            i.createElement(
              "div",
              { className: "BindingSection FlexRow" },
              i.createElement(
                "div",
                { className: "BindingButtonRow FlexColumn" },
                i.createElement(
                  "div",
                  { className: "Label Title ControllerTitle" },
                  m
                ),
                i.createElement(W, {
                  eControllerButtonSide: h.b.eButtonSide_Left,
                  strSVGClass: "MenuLeftLine",
                  bReadOnly: this.props.bReadOnly,
                  eControllerButtonOtherSide: d,
                  selectedActionSet: this.props.selectedActionSet,
                  ptControllerImagePosition: this.state.ptLeftController,
                })
              ),
              i.createElement(
                "div",
                { className: "BindingButtonRow FlexColumn " + a },
                i.createElement(
                  "div",
                  { className: "Label Title ControllerTitle" },
                  b
                ),
                i.createElement(W, {
                  eControllerButtonSide: s,
                  strSVGClass: "MenuRightLine",
                  bReadOnly: this.props.bReadOnly || this.state.bMirrorBinding,
                  selectedActionSet: this.props.selectedActionSet,
                  ptControllerImagePosition: this.state.ptRightController,
                })
              )
            )
        );
      }
    };
    var z;
    Object(o.b)([u.bind], G.prototype, "ToggleMirrorMode", null),
      Object(o.b)([u.bind], G.prototype, "UpdatePositionHelper", null),
      Object(o.b)(
        [u.bind],
        G.prototype,
        "OnUpdateControllerPicturePosition",
        null
      ),
      Object(o.b)([u.bind], G.prototype, "BindLeftControllerImage", null),
      Object(o.b)([u.bind], G.prototype, "BindRightControllerImage", null),
      (G = Object(o.b)([a.a], G)),
      (function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Pose = 1)] = "Pose"),
          (e[(e.Haptics = 2)] = "Haptics"),
          (e[(e.Skeleton = 3)] = "Skeleton");
      })(z || (z = {}));
    let q = class extends i.Component {
      constructor(e) {
        super(e),
          (this.state = { SVGElement: void 0, WrapperHTMLElement: void 0 }),
          (this.currentAction = void 0);
      }
      componentDidUpdate() {
        this.UpdateSVGPath();
      }
      BindSVGRef(e) {
        this.setState({ SVGElement: e }), this.UpdateSVGPath();
      }
      BindWrapperElement(e) {
        this.setState({ WrapperHTMLElement: e }), this.UpdateSVGPath();
      }
      UpdateSVGPath() {
        if (this.state.SVGElement) {
          let e = this.state.SVGElement.children.namedItem("SourcePath"),
            t = this.state.SVGElement.children.namedItem("SourceLine"),
            n = this.state.SVGElement.children.namedItem("SourceCircle"),
            o = Object.assign({}, this.props.endPoint),
            i = Object.assign({}, this.props.startPoint);
          if (this.state.WrapperHTMLElement) {
            let e = this.state.WrapperHTMLElement.getBoundingClientRect(),
              t =
                this.state.WrapperHTMLElement.parentElement.parentElement.parentElement.getBoundingClientRect();
            i.y += e.top - t.top + e.height / 2;
          }
          let r = 20,
            a = i.x + r + "," + i.y + " " + o.x + "," + o.y;
          e.setAttribute("points", a);
          let s = i.x + "," + i.y + " " + (i.x + r) + "," + i.y;
          t.setAttribute("points", s),
            n.setAttribute("cx", o.x + ""),
            n.setAttribute("cy", o.y + "");
        }
      }
      OnActionChanged(e) {
        switch (this.props.type) {
          case "pose":
            return this.OnPoseActionChanged(e);
          case "vibration":
            return this.OnHapticsActionChanged(e);
          case "skeleton":
            return this.OnSkeletonActionChanged(e);
          default:
            console.log("Unknown type: ", this.props.type);
        }
      }
      FullInputPaths() {
        return this.props.vecDevicePathsToSet.map(
          (e) => e + this.props.sInputPath
        );
      }
      CurrentAction() {
        return this.currentAction;
      }
      OnPoseActionChanged(e) {
        this.FullInputPaths().forEach((t) => {
          h.a.SetPoseForInputPath(t, e);
        });
      }
      OnHapticsActionChanged(e) {
        this.FullInputPaths().forEach((t) => {
          h.a.SetHapticsForInputPath(t, e);
        });
      }
      OnSkeletonActionChanged(e) {
        this.FullInputPaths().forEach((t) => {
          h.a.SetSkeletonForInputPath(t, e);
        });
      }
      render() {
        let e,
          t,
          n = "",
          o = Object(p.c)("#SourceInputMode_none"),
          r = this.FullInputPaths()[0],
          a = h.a.LocalizePathNameForSelectedControllerType(r);
        switch (this.props.type) {
          case "pose":
            (e = h.a.GetPoseActionByPath(r)),
              (t = "#SourceInputSubHeader_PoseActions");
            break;
          case "skeleton":
            (e = h.a.GetSkeletonActionByPath(r)),
              (t = "#SourceInputSubHeader_SkeletonActions");
            break;
          case "vibration":
            (e = h.a.GetHapticsActionByPath(r)),
              (t = "#SourceInputSubHeader_HapticsActions");
            break;
          default:
            console.log(
              "ControllerPoseBindingItem doesn't know how to handle items of type:",
              this.props.type
            );
        }
        let s = h.a.SelectedActionSetActions.filter(
          (e) =>
            !!(
              "skeleton" != this.props.type ||
              ("skeleton" == e.type &&
                e.skeleton &&
                this.props.InputSource.skeleton &&
                e.skeleton.toLowerCase() ==
                  this.props.InputSource.skeleton.toLowerCase())
            ) && e.type == this.props.type
        ).map((t, i) => {
          let r;
          return (
            e &&
              e[0].output.toLowerCase() == t.name.toLowerCase() &&
              ((this.currentAction = t), (n = t.name), (o = t.localized_name)),
            "mandatory" == t.requirement &&
              (r =
                " (" + Object(p.c)("#BindingUI_SelectAction_Required") + ")"),
            new v.b(t.name, t.localized_name, r)
          );
        });
        (null != s && 0 != s.length) ||
          s.push(
            new v.b("-nonitem", Object(p.c)("#SourceInputAction_NoItems"))
          ),
          s.unshift(new v.b("-subHeader", Object(p.c)(t))),
          s.push(new v.b("-blank", "")),
          s.push(new v.b("none", Object(p.c)("#SourceInputMode_none")));
        return i.createElement(
          "div",
          {
            className: "PoseActionListEntryWrapper",
            ref: this.BindWrapperElement,
          },
          i.createElement(
            "div",
            { className: "FlexRow PoseActionListEntry" },
            i.createElement("div", { className: "Label PoseActionLabel" }, a),
            i.createElement(
              "div",
              null,
              i.createElement(v.a, {
                vecOptions: s,
                sValueSelectedItem: n,
                sHeaderClass: "PoseActionLabelDropdown",
                bReadOnly: !1,
                sLocalizedSelectedItem: o,
                fnOptionSelected: this.OnActionChanged,
              }),
              i.createElement(g.a, { onReflow: this.UpdateSVGPath })
            )
          ),
          null != this.CurrentAction() &&
            this.props.endPoint.x > 0 &&
            this.props.endPoint.y > 0 &&
            i.createElement(
              "svg",
              {
                className: "BindingPoseLineSVG",
                xmlns: "http://www.w3.org/2000/svg",
                ref: this.BindSVGRef,
              },
              i.createElement(
                "defs",
                null,
                i.createElement(
                  "radialGradient",
                  { id: "buttonGradient" },
                  i.createElement("stop", {
                    offset: "0%",
                    stopColor: "var(--bordercolor)",
                    stopOpacity: "0.8",
                  }),
                  i.createElement("stop", {
                    offset: "100%",
                    stopColor: "var(--bordercolor)",
                    stopOpacity: "0",
                  })
                )
              ),
              i.createElement("polyline", {
                id: "SourceLine",
                stroke: "var(--bordercolor)",
                strokeWidth: "0.1rem",
                fill: "transparent",
              }),
              i.createElement("polyline", {
                id: "SourcePath",
                stroke: "var(--bordercolor)",
                strokeWidth: "0.1rem",
                fill: "transparent",
              }),
              i.createElement("circle", {
                id: "SourceCircle",
                r: "2rem",
                fill: "url(#buttonGradient)",
              })
            ),
          this.props.bIncludeHR && i.createElement("hr", null)
        );
      }
    };
    Object(o.b)([u.bind], q.prototype, "BindSVGRef", null),
      Object(o.b)([u.bind], q.prototype, "BindWrapperElement", null),
      Object(o.b)([u.bind], q.prototype, "UpdateSVGPath", null),
      Object(o.b)([u.bind], q.prototype, "OnActionChanged", null),
      Object(o.b)([u.bind], q.prototype, "OnPoseActionChanged", null),
      Object(o.b)([u.bind], q.prototype, "OnHapticsActionChanged", null),
      Object(o.b)([u.bind], q.prototype, "OnSkeletonActionChanged", null),
      (q = Object(o.b)([a.a], q));
    let K = class extends i.Component {
      render() {
        let e = void 0;
        switch (this.props.eActionType) {
          case z.Pose:
            e = "pose";
            break;
          case z.Haptics:
            e = "vibration";
            break;
          case z.Skeleton:
            e = "skeleton";
        }
        let t = h.a.SelectedActionSetActions.filter((t) => t.type == e);
        if (0 == t.length) return null;
        let n = h.a.SelectedControllerTypeInfo,
          o = h.a.SelectedControllerTypeInfo.input_source,
          r = [];
        if (
          "controller_handed" ==
          h.a.SelectedControllerTypeInfo.input_bindingui_mode
        )
          r = ["/user/hand/left", "/user/hand/right"];
        else {
          let e = h.a.DeviceForControllerType(n.controller_type);
          e &&
            (e.root_path && r.push(e.root_path),
            e.root_path_alt && r.push(e.root_path_alt));
        }
        if (0 == r.length)
          return console.log("Missing base root path for controller"), null;
        h.a.GetPoseActionBindings;
        let a = [],
          s = 0;
        for (let n in o) {
          let l = o[n];
          for (let c of r) {
            if (l.type != e) continue;
            let d = "none";
            if (
              ("/user/hand/right" == c
                ? (d = "right")
                : "/user/hand/left" == c && (d = "left"),
              l.side && l.side != d)
            )
              continue;
            let p = c + n,
              u = "left" == d,
              m = u
                ? this.props.ptLeftController.x
                : this.props.ptRightController.x,
              b = u
                ? this.props.ptLeftController.y
                : this.props.ptRightController.y,
              g = new h.e(0, 0);
            if (
              (o.hasOwnProperty(n) &&
                ((g.x = l.binding_image_point[0]),
                (g.y = l.binding_image_point[1]),
                (g.x *= this.props.nPointScale),
                (g.y *= this.props.nPointScale)),
              u ? (g.x = m - g.x) : (g.x += m),
              (g.y += b),
              u && this.props.bSlaveSecondaryControllerBinding)
            )
              continue;
            let _ = new h.e(this.props.ptPoseListOffset.x + 5, 0),
              S = (s++, t.length, [c]);
            this.props.bSlaveSecondaryControllerBinding && (S = r),
              a.push(
                i.createElement(q, {
                  key: p,
                  InputSource: l,
                  sInputPath: n,
                  type: e,
                  vecDevicePathsToSet: S,
                  startPoint: _,
                  endPoint: g,
                })
              );
          }
        }
        let l = void 0;
        switch (this.props.eActionType) {
          case z.Pose:
            l = Object(p.c)("#BindingUI_PoseListTitle");
            break;
          case z.Haptics:
            l = Object(p.c)("#BindingUI_HapticsListTitle");
            break;
          case z.Skeleton:
            l = Object(p.c)("#BindingUI_SkeletonListTitle");
        }
        return i.createElement(
          "div",
          { className: "FlexColumn" },
          i.createElement("div", { className: "Label Title AllCaps" }, l),
          a
        );
      }
    };
    K = Object(o.b)([a.a], K);
    let Y = class extends i.Component {
      render() {
        let e = h.a.SelectedControllerTypeInfo.input_source,
          t = new h.e(
            e[this.props.vecPosePath[0]].binding_image_point[0],
            e[this.props.vecPosePath[0]].binding_image_point[1]
          );
        (t.x *= this.props.nPointScale),
          (t.y *= this.props.nPointScale),
          this.props.bLeftHandController
            ? (t.x = this.props.ptController.x - t.x)
            : (t.x += this.props.ptController.x),
          (t.y += this.props.ptController.y);
        let n = "";
        this.props.vecPosePath.map((e, t) => {
          0 != t && (n += ","),
            (n += h.a.LocalizeStringForSelectedControllerType(e));
        });
        let o = this.props.bLeftHandController ? "start" : "end",
          r = this.props.bLeftHandController ? 6 : -6;
        return i.createElement(
          "svg",
          {
            className: "BindingPosePointSVG ",
            xmlns: "http://www.w3.org/2000/svg",
          },
          i.createElement(
            "defs",
            null,
            i.createElement(
              "radialGradient",
              { id: "buttonGradient" },
              i.createElement("stop", {
                offset: "0%",
                stopColor: "var(--bordercolor)",
                stopOpacity: "1",
              }),
              i.createElement("stop", {
                offset: "100%",
                stopColor: "var(--bordercolor)",
                stopOpacity: "0",
              })
            ),
            i.createElement(
              "filter",
              {
                id: "background",
                x: "-10%",
                y: "-10%",
                width: "120%",
                height: "120%",
              },
              i.createElement("feFlood", { floodColor: "#1d4e62e0" }),
              i.createElement("feComposite", { in: "SourceGraphic" })
            ),
            i.createElement(
              "filter",
              {
                id: "shadow",
                x: "-20%",
                y: "-20%",
                width: "140%",
                height: "140%",
              },
              i.createElement("feGaussianBlur", {
                stdDeviation: "2 2",
                result: "shadow",
              }),
              i.createElement("feOffset", { dx: "1", dy: "1" })
            )
          ),
          i.createElement(
            "text",
            {
              textAnchor: o,
              filter: "url(#shadow)",
              x: t.x + r,
              y: t.y,
              style: { fill: "black", fontSize: 24 },
            },
            n
          ),
          i.createElement(
            "text",
            {
              textAnchor: o,
              filter: "url(#background)",
              x: t.x + r,
              y: t.y,
              style: { fill: "var(--descriptiontext)", fontSize: 24 },
            },
            n
          ),
          i.createElement("circle", {
            id: "SourceCircle",
            cx: t.x,
            cy: t.y,
            r: "0.5rem",
            fill: "url(#buttonGradient)",
          })
        );
      }
    };
    Y = Object(o.b)([a.a], Y);
    let X = class extends i.Component {
      constructor(e) {
        super(e),
          (this.m_LeftControllerImage = void 0),
          (this.m_RightControllerImage = void 0),
          (this.m_SVGElement = void 0),
          (this.m_PropsListDiv = void 0),
          (this.state = {
            ptLeftController: new h.e(0, 0),
            ptRightController: new h.e(0, 0),
            nPointScale: 0,
            ptDivList: new h.e(0, 0),
          });
      }
      OnUpdateControllerPicturePosition() {
        if (
          this.m_LeftControllerImage &&
          !this.props.bSlaveSecondaryControllerBinding
        ) {
          let e = 0,
            t = 0,
            n = this.m_LeftControllerImage;
          if (n) {
            let o = n.getBoundingClientRect();
            n.naturalWidth > 0 &&
              ((t =
                o.right -
                n.parentElement.parentElement.parentElement.getBoundingClientRect()
                  .left),
              (e =
                o.top -
                n.parentElement.parentElement.parentElement.getBoundingClientRect()
                  .top));
          }
          this.setState({ ptLeftController: new h.e(t, e) });
        }
        if (this.m_RightControllerImage) {
          let e = 1,
            t = 0,
            n = 0,
            o = this.m_RightControllerImage;
          if (o) {
            let i = o.getBoundingClientRect();
            o.naturalWidth > 0 &&
              ((e = i.height / o.naturalHeight),
              (n =
                i.left -
                o.parentElement.parentElement.parentElement.getBoundingClientRect()
                  .left),
              (n += (i.width - o.naturalWidth * e) / 2),
              (t =
                i.top -
                o.parentElement.parentElement.parentElement.getBoundingClientRect()
                  .top));
          }
          this.setState({ ptRightController: new h.e(n, t), nPointScale: e });
        }
        if (this.m_PropsListDiv) {
          let e = this.m_PropsListDiv.getBoundingClientRect(),
            t =
              this.m_PropsListDiv.parentElement.parentElement.getBoundingClientRect();
          this.setState({ ptDivList: new h.e(e.width, e.top - t.top) });
        }
      }
      BindLeftControllerImage(e) {
        (this.m_LeftControllerImage = e),
          this.OnUpdateControllerPicturePosition();
      }
      BindRightControllerImage(e) {
        (this.m_RightControllerImage = e),
          this.OnUpdateControllerPicturePosition();
      }
      BindPropsListDiv(e) {
        (this.m_PropsListDiv = e), this.OnUpdateControllerPicturePosition();
      }
      render() {
        let e = "",
          t = "",
          n = "",
          o = "",
          r = h.a.SelectedControllerTypeInfo,
          a = void 0,
          s = void 0;
        switch (this.props.eActionSourceType) {
          case z.Pose:
            (a = "pose"), (s = Object(p.c)("#BindingUI_PoseTitle"));
            break;
          case z.Haptics:
            (a = "vibration"), (s = Object(p.c)("#BindingUI_HapticsTitle"));
            break;
          case z.Skeleton:
            (a = "skeleton"), (s = Object(p.c)("#BindingUI_SkeletonTitle"));
        }
        (o = r.input_bindingui_right.uri),
          (t = r.input_bindingui_right.transform),
          this.props.bSlaveSecondaryControllerBinding ||
            ((e = r.input_bindingui_left.transform),
            (n = r.input_bindingui_left.uri));
        let l = function (e, t, n, o, i) {
            let r = e.input_source[o];
            if (r.type == a && (null == r.side || r.side == n)) {
              let e = new h.e(
                r.binding_image_point[0],
                r.binding_image_point[1]
              );
              t.hasOwnProperty(e.toString()) || (t[e.toString()] = []),
                t[e.toString()].push(o);
            }
          },
          c = {},
          d = {};
        Object.keys(r.input_source).forEach(l.bind(null, r, c, "left")),
          Object.keys(r.input_source).forEach(l.bind(null, r, d, "right"));
        let u = Object.keys(c).map((e, t) =>
            i.createElement(Y, {
              key: t,
              vecPosePath: c[e],
              ptController: this.state.ptLeftController,
              nPointScale: this.state.nPointScale,
              ptPoseListOffset: this.state.ptDivList,
              bLeftHandController: !0,
            })
          ),
          m = Object.keys(d).map((e, t) =>
            i.createElement(Y, {
              key: t,
              vecPosePath: d[e],
              ptController: this.state.ptRightController,
              nPointScale: this.state.nPointScale,
              ptPoseListOffset: this.state.ptDivList,
              bLeftHandController: !1,
            })
          );
        return i.createElement(
          "div",
          { className: "FlexFullHeightColumnCentered" },
          i.createElement(
            "div",
            { className: "FlexRow PoseTitleBar" },
            i.createElement("img", {
              className:
                "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
              src: "images/bindingui/icon_modal_edit_header.svg",
            }),
            i.createElement(
              "div",
              { className: "Label Title TitleCenter AllCaps" },
              s
            )
          ),
          i.createElement(
            "div",
            {
              className:
                "FlexFullWidthRowCentered PoseMainContent PositionRelative",
            },
            i.createElement(
              "div",
              { className: "PoseBindingPoints" },
              !this.props.bSlaveSecondaryControllerBinding && u,
              m
            ),
            i.createElement(
              "div",
              {
                className: "FlexColumn PoseActionsList",
                ref: this.BindPropsListDiv,
              },
              i.createElement(K, {
                eActionType: this.props.eActionSourceType,
                bSingleControllerMode: this.props.bSingleControllerMode,
                ptRightController: this.state.ptRightController,
                ptLeftController: this.state.ptLeftController,
                bReadOnly: this.props.bReadOnly,
                nPointScale: this.state.nPointScale,
                ptPoseListOffset: this.state.ptDivList,
                bSlaveSecondaryControllerBinding:
                  this.props.bSlaveSecondaryControllerBinding,
              }),
              i.createElement(g.a, {
                onReflow: this.OnUpdateControllerPicturePosition,
              })
            ),
            i.createElement(
              "div",
              { className: "FlexRow PoseControllerPictures" },
              !this.props.bSlaveSecondaryControllerBinding &&
                i.createElement(
                  "div",
                  { className: "ControllerImageContainer" },
                  i.createElement("img", {
                    className: "ControllerImage",
                    src: n,
                    style: { transform: e },
                    ref: this.BindLeftControllerImage,
                  })
                ),
              i.createElement(
                "div",
                { className: "ControllerImageContainer" },
                i.createElement("img", {
                  className: "ControllerImage",
                  src: o,
                  style: { transform: t },
                  ref: this.BindRightControllerImage,
                })
              )
            ),
            i.createElement(g.a, {
              onReflow: this.OnUpdateControllerPicturePosition,
            })
          ),
          i.createElement(
            "div",
            {
              className: "ChordBindingCloseButton Label AllCaps",
              onClick: this.props.fnCloseModal,
            },
            Object(p.c)("#Button_Close")
          )
        );
      }
    };
    Object(o.b)(
      [u.bind],
      X.prototype,
      "OnUpdateControllerPicturePosition",
      null
    ),
      Object(o.b)([u.bind], X.prototype, "BindLeftControllerImage", null),
      Object(o.b)([u.bind], X.prototype, "BindRightControllerImage", null),
      Object(o.b)([u.bind], X.prototype, "BindPropsListDiv", null),
      (X = Object(o.b)([a.a], X));
    let Q = class extends i.Component {
      OnActionOutputChanged(e) {
        h.a.SetActionForChord(this.props.chord, e);
      }
      DeleteChord() {
        h.a.DeleteChord(this.props.chord);
      }
      DeleteSourceFromChord(e, t) {
        h.a.DeleteSourceFromChord(this.props.chord, e);
      }
      AddSourceToChord() {
        let e = this.props.chord.inputs ? this.props.chord.inputs.length : 0;
        h.a.SetInputSourceForChord(
          this.props.chord,
          h.a.SelectedActionSetSources[e].path
        );
      }
      render() {
        let e = h.a.SelectedActionSetActions.filter((e) => "boolean" == e.type),
          t = "",
          n = "none",
          o = !1;
        this.props.chord.output
          ? ((t = this.props.chord.output),
            (n = this.props.chord.output.toLowerCase()))
          : (o = !0);
        let r = e.map(
            (e, n) => (
              this.props.chord.output &&
                e.name.toLowerCase() == this.props.chord.output.toLowerCase() &&
                (t = e.localized_name),
              new v.b(e.name.toLowerCase(), e.localized_name)
            )
          ),
          a = h.a.SelectedActionSetSources;
        if (!a || 0 == a.length) return null;
        let s = void 0;
        return (
          this.props.chord.inputs
            ? (s = this.props.chord.inputs.map((e, t) => {
                let n = i.createElement(
                  "div",
                  { className: "Label ChordBindingPlusLabel" },
                  i.createElement("img", {
                    className: "ActionButtonImage ChordBindingImage",
                    src: "images/bindingui/icon_plus.svg",
                  })
                );
                return i.createElement(
                  "div",
                  { className: "FlexFullHeightColumnCentered", key: t },
                  i.createElement(
                    "div",
                    { className: "FlexRow ChordBindingEntry" },
                    i.createElement(
                      "div",
                      { className: "FlexColumn" },
                      (function (e, t, n, o) {
                        let r = t
                          .filter((t) => {
                            let o = n.inputs.filter((e) => e[0] == t.path);
                            return t.path == e || 0 == o.length;
                          })
                          .map(
                            (e, t) =>
                              new v.b(
                                e.path,
                                h.a.LocalizePathNameForSelectedControllerType(
                                  e.path
                                )
                              )
                          );
                        return i.createElement(
                          "div",
                          { className: "ChordBindingInputType" },
                          i.createElement(v.a, {
                            vecOptions: r,
                            sValueSelectedItem: e,
                            sLocalizedSelectedItem:
                              h.a.LocalizePathNameForSelectedControllerType(e),
                            fnOptionSelected: function (t) {
                              h.a.SetInputSourceForChord(n, t, e);
                            },
                            bReadOnly: o,
                          })
                        );
                      })(e[0], a, this.props.chord, this.props.bReadOnly),
                      (function (e, t, n, o) {
                        let r = h.a.GetActionBinding(e, h.a.SelectedActionSet);
                        if (!r || 0 == r.length) return null;
                        let a = [],
                          s = "";
                        if (
                          (r.map((e) => {
                            let n = h.a.GetBooleanInputOptionsForMode(e.mode);
                            for (let o of n)
                              a.push({
                                sActionBindMode: e.mode,
                                sInputOption: o,
                              }),
                                o == t && (s = e.mode);
                          }),
                          0 == a.length)
                        )
                          return null;
                        let l = a.map(
                          (e, t) =>
                            new v.b(
                              e.sInputOption,
                              Object(p.c)(
                                "#SourceInputMode_" + e.sActionBindMode
                              ) +
                                " " +
                                Object(p.c)(
                                  "#SourceInputMode_" + e.sInputOption
                                )
                            )
                        );
                        return i.createElement(
                          "div",
                          { className: "ChordBindingInputType" },
                          i.createElement(v.a, {
                            vecOptions: l,
                            sValueSelectedItem: t,
                            sLocalizedSelectedItem:
                              Object(p.c)("#SourceInputMode_" + s) +
                              " " +
                              Object(p.c)("#SourceInputMode_" + t),
                            fnOptionSelected: function (t) {
                              h.a.SetInputTypeForChord(n, e, t);
                            },
                            bReadOnly: o,
                          })
                        );
                      })(e[0], e[1], this.props.chord, this.props.bReadOnly)
                    ),
                    !this.props.bReadOnly &&
                      i.createElement("img", {
                        onClick: () => {
                          this.DeleteSourceFromChord(e[0], e[1]);
                        },
                        className: "ActionButtonImage ChordBindingEntryDelete",
                        src: "images/bindingui/icon_trash.svg",
                      })
                  ),
                  t != this.props.chord.inputs.length - 1 && n
                );
              }))
            : o || this.AddSourceToChord(),
          i.createElement(
            "div",
            { className: "FlexColumn" },
            i.createElement(
              "div",
              { className: "FlexRow ChordBindingRow" },
              i.createElement(
                "div",
                { className: "FlexColumn ChordBindingSet" },
                i.createElement(v.a, {
                  sHeaderClass: "ChordBindingAction",
                  vecOptions: r,
                  sValueSelectedItem: n,
                  sModalTitleString: Object(p.c)(
                    "#BindingUI_Chord_SelectActionModalHeader"
                  ),
                  bShowOptionsOnStart: o,
                  sLocalizedSelectedItem: t,
                  fnOptionSelected: this.OnActionOutputChanged,
                  bReadOnly: this.props.bReadOnly,
                })
              ),
              i.createElement("img", {
                className: "ActionButtonImage ChordBindingImage",
                src: "images/bindingui/icon_arrow_right.svg",
              }),
              i.createElement(
                "div",
                { className: "FlexFullHeightColumnCentered ChordBindingSet" },
                s
              ),
              !this.props.bReadOnly &&
                i.createElement(
                  "div",
                  {
                    className:
                      "FlexFullHeightColumnCentered ChordEntryActionColumn",
                  },
                  i.createElement(
                    "div",
                    {
                      onClick: this.AddSourceToChord,
                      className:
                        "Label ChordManageButtons ChordBindingBigButton AllCaps",
                    },
                    i.createElement("img", {
                      className: "ActionButtonImage",
                      src: "images/bindingui/icon_add.svg",
                    }),
                    Object(p.c)("#BindingUI_AddChordInput")
                  ),
                  i.createElement(
                    "div",
                    {
                      onClick: this.DeleteChord,
                      className:
                        "Label ChordManageButtons ChordBindingBigButton AllCaps",
                    },
                    i.createElement("img", {
                      className: "ActionButtonImage",
                      src: "images/bindingui/icon_trash.svg",
                    }),
                    Object(p.c)("#BindingUI_DeleteChord")
                  )
                )
            ),
            i.createElement("div", { className: "FlexRow ChordButtonRow" })
          )
        );
      }
    };
    Object(o.b)([u.bind], Q.prototype, "OnActionOutputChanged", null),
      Object(o.b)([u.bind], Q.prototype, "DeleteChord", null),
      Object(o.b)([u.bind], Q.prototype, "DeleteSourceFromChord", null),
      Object(o.b)([u.bind], Q.prototype, "AddSourceToChord", null),
      (Q = Object(o.b)([a.a], Q));
    let J = class extends i.Component {
      constructor(e) {
        super(e);
      }
      AddChord() {
        h.a.AddChord();
      }
      render() {
        let e = [],
          t = h.a.SelectedActionSetChords;
        return (
          t &&
            t.length &&
            (e = t.map((e, n) =>
              i.createElement(
                "div",
                { key: n },
                i.createElement(Q, {
                  chord: e,
                  bReadOnly: this.props.bReadOnly,
                }),
                n != t.length - 1 && i.createElement("hr", null)
              )
            )),
          i.createElement(
            "div",
            { className: "FlexColumn ChordBindingModal" },
            i.createElement(
              "div",
              { className: "ChordBindingHeader FlexColumn" },
              i.createElement(
                "div",
                { className: "FlexFullWidthRowCentered" },
                i.createElement("img", {
                  className:
                    "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                  src: "images/bindingui/icon_modal_edit_header.svg",
                }),
                i.createElement(
                  "div",
                  { className: "Label Title TitleCenter AllCaps" },
                  Object(p.c)("#BindingUI_ChordTitle")
                )
              )
            ),
            i.createElement(
              "div",
              {
                className:
                  "FlexColumn ChordBindingContents ChordBindingChordsList",
              },
              e,
              !this.props.bReadOnly &&
                i.createElement(
                  "div",
                  {
                    className:
                      "Label ChordManageButtons ChordBindingBigButton AllCaps AddChordButton",
                    onClick: this.AddChord,
                  },
                  i.createElement("img", {
                    className: "ActionButtonImage",
                    src: "images/bindingui/icon_add.svg",
                  }),
                  Object(p.c)("#BindingUI_AddChord")
                )
            ),
            i.createElement(
              "div",
              {
                className: "ChordBindingCloseButton Label AllCaps",
                onClick: this.props.fnCloseModal,
              },
              Object(p.c)("#Button_Close")
            )
          )
        );
      }
    };
    Object(o.b)([u.bind], J.prototype, "AddChord", null),
      (J = Object(o.b)([a.a], J));
    var Z = n("Kysl"),
      $ = n("oW3A");
    let ee = class extends i.Component {
      constructor(e) {
        super(e);
      }
      CloseSaveDialog() {
        this.props.ParentClose();
      }
      render() {
        let e = [];
        return (
          h.a.ActionSets.forEach((t) => {
            h.a.GetActionSetActions(t.name).forEach((t) => {
              let n = h.a.GetAliasInfo(t.name);
              n &&
                n.hidden &&
                "vibration" != t.type &&
                "skeleton" != t.type &&
                "pose" != t.type &&
                e.push(
                  i.createElement(
                    "div",
                    { className: "FlexRow HiddenAliasRow" },
                    i.createElement(
                      "div",
                      { className: "Label HiddenAliasName" },
                      t.localized_name
                    ),
                    i.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: () => {
                          h.a.SetAliasHidden(t.name, !1);
                        },
                      },
                      Object(p.c)("#ShowActionButton")
                    )
                  )
                );
            });
          }),
          i.createElement(
            l.a,
            {
              visible: !0,
              onClose: this.CloseSaveDialog,
              animation: "fade",
              customStyles: {
                width: "fit-content",
                height: "auto",
                paddingTop: "4rem",
                maxHeight: "90%",
              },
              className: "HiddenActionsModal",
              closeOnEsc: !0,
            },
            i.createElement(
              "div",
              { className: "FlexColumn HiddenActionsWrapper" },
              e
            )
          )
        );
      }
    };
    Object(o.b)([u.bind], ee.prototype, "CloseSaveDialog", null),
      (ee = Object(o.b)([a.a], ee));
    let te = class extends i.Component {
      constructor(e) {
        super(e);
        let t = h.a.GetAliasInfo(this.props.sAction);
        this.state = t
          ? { sUserSuppliedName: t.alias_name, bHidden: t.hidden }
          : { sUserSuppliedName: "", bHidden: !1 };
      }
      onHiddenChanged(e) {
        this.setState({ bHidden: e }),
          h.a.SetAliasHidden(this.props.sAction, e);
      }
      onNameChanged(e) {
        this.setState({ sUserSuppliedName: e }),
          h.a.SetAliasName(this.props.sAction, e);
      }
      render() {
        let e = "InputOption" + this.props.sAction;
        return i.createElement(
          "div",
          { className: "FlexRow SetupLegacyRow" },
          i.createElement(
            "div",
            { className: "Label ActionAliasAction" },
            Object(p.c)(h.a.GetActionByName(this.props.sAction).localized_name)
          ),
          i.createElement("input", {
            id: e + "name",
            type: "text",
            value: this.state.sUserSuppliedName,
            onChange: (e) => {
              this.onNameChanged(e.target.value);
            },
            className: "ActionAliasUserSuppliedName",
            readOnly: this.props.readOnly,
          }),
          !this.props.readOnly &&
            i.createElement(
              "div",
              {
                className: "Label ButtonControl",
                onClick: () => {
                  h.a.SetAliasHidden(this.props.sAction, !0);
                },
              },
              Object(p.c)("#HideActionButton")
            )
        );
      }
    };
    Object(o.b)([u.bind], te.prototype, "onHiddenChanged", null),
      Object(o.b)([u.bind], te.prototype, "onNameChanged", null),
      (te = Object(o.b)([a.a], te));
    let ne = class extends i.Component {
      constructor(e) {
        super(e),
          (this.state = { bShowActionPicker: !1, bShowHiddenActions: !1 });
      }
      OnShowHidden() {
        this.setState({ bShowHiddenActions: !0 });
      }
      OnCloseHidden() {
        this.setState({ bShowHiddenActions: !1 });
      }
      render() {
        let e = [];
        return (
          h.a.ActionSets.forEach((t) => {
            h.a.GetActionSetActions(t.name).forEach((t) => {
              let n = h.a.GetAliasInfo(t.name);
              (n && n.hidden) ||
                ("vibration" != t.type &&
                  "skeleton" != t.type &&
                  "pose" != t.type &&
                  e.push(t.name));
            });
          }),
          i.createElement(
            "div",
            null,
            i.createElement(
              "div",
              { className: "FlexColumn" },
              i.createElement(
                "div",
                { className: "LegacySectionHeader Label" },
                Object(p.c)("#LegacySetup_ActionAliasesHeader")
              ),
              e.map((e, t) =>
                i.createElement(te, {
                  sAction: e,
                  key: e,
                  readOnly: this.props.readOnly,
                })
              )
            ),
            this.state.bShowHiddenActions &&
              i.createElement(ee, { ParentClose: this.OnCloseHidden }),
            !this.props.readOnly &&
              i.createElement(
                "div",
                {
                  className: "FlexRow SetupLegacyRow ActionAliasButtonWrapper",
                },
                i.createElement(
                  "div",
                  {
                    className: "Label ButtonControl",
                    onClick: this.OnShowHidden,
                  },
                  Object(p.c)("#ShowAllAliases")
                )
              )
          )
        );
      }
    };
    Object(o.b)([u.bind], ne.prototype, "OnShowHidden", null),
      Object(o.b)([u.bind], ne.prototype, "OnCloseHidden", null),
      (ne = Object(o.b)([a.a], ne));
    class oe extends i.Component {
      constructor(e) {
        super(e),
          (this.state = { bValue: h.a.GetOptionValue(this.props.sOptionName) });
      }
      onCheckboxChanged(e) {
        h.a.SetOptionValue(this.props.sOptionName, e),
          this.setState({ bValue: e });
      }
      render() {
        let e = "InputOption" + this.props.sOptionName;
        return i.createElement(
          "div",
          { className: "FlexRow SetupLegacyRow" },
          i.createElement(
            "div",
            { className: "FlexColumn" },
            i.createElement("input", {
              id: e,
              type: "checkbox",
              checked: this.state.bValue,
              value: this.props.sOptionName,
              onChange: (e) => {
                this.onCheckboxChanged(e.target.checked);
              },
              disabled: this.props.readOnly,
            })
          ),
          i.createElement(
            "label",
            { className: "InputOptionLabel", htmlFor: e },
            this.props.sOptionLocalizedName
          )
        );
      }
    }
    Object(o.b)([u.bind], oe.prototype, "onCheckboxChanged", null);
    class ie extends i.Component {
      constructor(e) {
        super(e);
        let t = h.a.GetOptionValue(this.props.sOptionName);
        t || (t = "none"), (this.state = { sValue: t });
      }
      OnControllerDropdownChanged(e) {
        h.a.SetOptionValue(this.props.sOptionName, e),
          this.setState({ sValue: e });
      }
      render() {
        let e = [];
        e.push(
          new v.b(
            "vive_controller",
            j.a.LocalizeDriverString("htc", "vive_controller")
          )
        ),
          e.push(
            new v.b(
              "oculus_touch",
              j.a.LocalizeDriverString("oculus", "oculus_touch")
            )
          ),
          e.push(
            new v.b(
              "holographic_controller",
              Object(p.c)("#holographic_controller")
            )
          ),
          e.push(new v.b("none", Object(p.c)("#None")));
        let t = "InputOption" + this.props.sOptionName;
        return i.createElement(
          "div",
          { className: "FlexRow SetupLegacyRow" },
          i.createElement(
            "div",
            { className: "FlexColumn" },
            i.createElement(v.a, {
              vecOptions: e,
              sModalClass: "PinTop",
              sValueSelectedItem: this.state.sValue,
              fnOptionSelected: this.OnControllerDropdownChanged,
            })
          ),
          i.createElement(
            "label",
            { className: "InputOptionLabel", htmlFor: t },
            this.props.sOptionLocalizedName
          )
        );
      }
    }
    Object(o.b)([u.bind], ie.prototype, "OnControllerDropdownChanged", null);
    class re extends i.Component {
      constructor(e) {
        super(e);
      }
      onCheckboxChanged(e, t) {
        h.a.SetOptionValue(e, t), this.forceUpdate();
      }
      render() {
        return this.props.options.map((e, t) => {
          switch (e.type) {
            case "bool":
              return i.createElement(oe, {
                sOptionName: e.name,
                sOptionLocalizedName: e.localized_name,
                key: e.name,
                readOnly: this.props.readOnly,
              });
            case "string":
              return "simulated_controller_type" == e.name
                ? i.createElement(ie, {
                    sOptionName: e.name,
                    sOptionLocalizedName: e.localized_name,
                    key: e.name,
                    readOnly: this.props.readOnly,
                  })
                : null;
            default:
              return null;
          }
        });
      }
    }
    Object(o.b)([u.bind], re.prototype, "onCheckboxChanged", null);
    class ae extends i.Component {
      constructor(e) {
        super(e),
          (this.state = {
            sName: this.props.simAction.name,
            sOutputAction: this.props.simAction.output
              ? this.props.simAction.output
              : "none",
          });
      }
      onNameChanged(e) {
        this.setState({ sName: e });
        let t = this.props.simAction;
        t.name = e;
        let n = h.a.ComputeSimulatedActionPathFromId(t.id);
        h.a.SetSimulatedActionByPath(n, t);
      }
      onActionChanged(e) {
        this.setState({ sOutputAction: e });
        let t = this.props.simAction;
        t.output = "none" == e ? "" : e;
        let n = h.a.ComputeSimulatedActionPathFromId(t.id);
        h.a.SetSimulatedActionByPath(n, t);
      }
      onDelete() {
        let e = h.a.ComputeSimulatedActionPathFromId(this.props.simAction.id);
        h.a.DeleteSimulatedActionByPath(e);
      }
      render() {
        let e = h.a.GetLiteralVector1ActionBindings.map(
          (e, t) => new v.b(e.name, e.localized_name)
        );
        e.push(new v.b("none", Object(p.c)("#SourceInputAction_none")));
        let t = "InputOption" + this.props.simAction.id;
        return i.createElement(
          "div",
          { className: "FlexRow SetupLegacyRow" },
          i.createElement(
            "div",
            { className: "SimulatedActionType Label" },
            Object(p.c)("#SimulatedAction_FakeTrigger")
          ),
          i.createElement("input", {
            id: t + "name",
            type: "text",
            value: this.state.sName,
            onChange: (e) => {
              this.onNameChanged(e.target.value);
            },
            className: "ActionAliasUserSuppliedName",
            readOnly: this.props.readOnly,
          }),
          i.createElement(v.a, {
            vecOptions: e,
            sValueSelectedItem: this.state.sOutputAction,
            sHeaderClass: "BindingLabelAction",
            sMainButtonClass: "SimActionTargetLabel",
            fnOptionSelected: this.onActionChanged,
            bReadOnly: this.props.readOnly,
          }),
          !this.props.readOnly &&
            i.createElement(
              "div",
              { className: "Label ButtonControl", onClick: this.onDelete },
              Object(p.c)("#DeleteSimulatedAction")
            )
        );
      }
    }
    Object(o.b)([u.bind], ae.prototype, "onNameChanged", null),
      Object(o.b)([u.bind], ae.prototype, "onActionChanged", null),
      Object(o.b)([u.bind], ae.prototype, "onDelete", null);
    class se extends i.Component {
      constructor(e) {
        super(e),
          (this.state = {
            sName: this.props.simAction.name,
            sOutputHand: this.props.simAction.output
              ? this.props.simAction.output
              : "none",
            fPositionX: this.props.simAction.position_x
              ? this.props.simAction.position_x
              : 0,
            fPositionY: this.props.simAction.position_y
              ? this.props.simAction.position_y
              : 0,
          });
      }
      onNameChanged(e) {
        this.setState({ sName: e });
        let t = this.props.simAction;
        t.name = e;
        let n = h.a.ComputeSimulatedActionPathFromId(t.id);
        h.a.SetSimulatedActionByPath(n, t);
      }
      onOutputChanged(e) {
        this.setState({ sOutputHand: e });
        let t = this.props.simAction;
        t.output = "none" == e ? "" : e;
        let n = h.a.ComputeSimulatedActionPathFromId(t.id);
        h.a.SetSimulatedActionByPath(n, t);
      }
      onDelete() {
        let e = h.a.ComputeSimulatedActionPathFromId(this.props.simAction.id);
        h.a.DeleteSimulatedActionByPath(e);
      }
      OnClickTrackpad(e) {
        let t = e.currentTarget.getBoundingClientRect(),
          n = (e.clientX - t.left) / (0.5 * t.width) - 1,
          o = -1 * ((e.clientY - t.top) / (0.5 * t.height) - 1);
        this.setState({ fPositionX: n, fPositionY: o });
        let i = this.props.simAction;
        (i.position_x = n), (i.position_y = o);
        let r = h.a.ComputeSimulatedActionPathFromId(i.id);
        h.a.SetSimulatedActionByPath(r, i);
      }
      render() {
        let e = [];
        h.a.GetOptionValue("mirror_actions") ||
          (e.push(new v.b("left", Object(p.c)("#TrackpadClickLeft"))),
          e.push(new v.b("right", Object(p.c)("#TrackpadClickRight"))),
          e.push(new v.b("none", Object(p.c)("#TrackpadClickNone"))));
        let t = "InputOption" + this.props.simAction.id,
          n = {
            left: (100 * (this.state.fPositionX + 1)) / 2 + "%",
            top: 100 - (100 * (this.state.fPositionY + 1)) / 2 + "%",
          };
        return i.createElement(
          "div",
          { className: "FlexRow SetupLegacyRow" },
          i.createElement(
            "div",
            { className: "SimulatedActionType Label" },
            Object(p.c)("#SimulatedAction_FakeTrackpadClick")
          ),
          i.createElement("input", {
            id: t + "name",
            type: "text",
            value: this.state.sName,
            onChange: (e) => {
              this.onNameChanged(e.target.value);
            },
            className: "ActionAliasUserSuppliedName",
            readOnly: this.props.readOnly,
          }),
          e.length > 0 &&
            i.createElement(v.a, {
              sMainButtonClass: "SimActionTargetLabel",
              vecOptions: e,
              sValueSelectedItem: this.state.sOutputHand,
              sHeaderClass: "BindingLabelAction",
              fnOptionSelected: this.onOutputChanged,
              bReadOnly: this.props.readOnly,
            }),
          i.createElement(
            "div",
            {
              className: "TrackpadSelectionBackground",
              onClick: this.props.readOnly
                ? null
                : (e) => this.OnClickTrackpad(e),
            },
            i.createElement("div", {
              className: "TrackpadSelectionPip",
              style: n,
            })
          ),
          !this.props.readOnly &&
            i.createElement(
              "div",
              { className: "Label ButtonControl", onClick: this.onDelete },
              Object(p.c)("#DeleteSimulatedAction")
            )
        );
      }
    }
    Object(o.b)([u.bind], se.prototype, "onNameChanged", null),
      Object(o.b)([u.bind], se.prototype, "onOutputChanged", null),
      Object(o.b)([u.bind], se.prototype, "onDelete", null),
      Object(o.b)([u.bind], se.prototype, "OnClickTrackpad", null);
    let le = class extends i.Component {
      constructor(e) {
        super(e);
      }
      OnCreateSimAction(e) {
        h.a.AddSimulatedAction(e);
      }
      CreateEntry(e) {
        switch (e.type) {
          case "fake_trigger":
            return i.createElement(ae, {
              key: e.id,
              simAction: e,
              readOnly: this.props.readOnly,
            });
          case "fake_trackpad_click":
            return i.createElement(se, {
              key: e.id,
              simAction: e,
              readOnly: this.props.readOnly,
            });
          default:
            return null;
        }
      }
      render() {
        let e = [];
        return (
          e.push(
            new v.b("fake_trigger", Object(p.c)("#SimulatedAction_FakeTrigger"))
          ),
          e.push(
            new v.b(
              "fake_trackpad_click",
              Object(p.c)("#SimulatedAction_FakeTrackpadClick")
            )
          ),
          i.createElement(
            "div",
            { className: "FlexColumn" },
            i.createElement(
              "div",
              { className: "LegacySectionHeader Label" },
              Object(p.c)("#LegacySetup_SimulatedActionHeader")
            ),
            h.a.SimulatedActions.map((e, t) => this.CreateEntry(e)),
            !this.props.readOnly &&
              i.createElement(
                "div",
                { className: "SimulatedActionsAddWrapper" },
                i.createElement(v.a, {
                  sMainButtonClass: "AddSimActionButton",
                  vecOptions: e,
                  sValueSelectedItem: "",
                  sLocalizedSelectedItem: Object(p.c)("#AddSimulatedAction"),
                  sHeaderClass: "BindingLabelAction",
                  fnOptionSelected: this.OnCreateSimAction,
                })
              )
          )
        );
      }
    };
    var ce;
    Object(o.b)([u.bind], le.prototype, "OnCreateSimAction", null),
      (le = Object(o.b)([a.a], le)),
      (function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Personal = 1)] = "Personal"),
          (e[(e.Public = 2)] = "Public"),
          (e[(e.LocalFile = 3)] = "LocalFile"),
          (e[(e.ReplaceDefault = 4)] = "ReplaceDefault"),
          (e[(e.AddNewDefault = 5)] = "AddNewDefault");
      })(ce || (ce = {}));
    let de = class extends i.Component {
      constructor(e) {
        super(e),
          (this.m_NameInput = void 0),
          (this.m_DescriptionInput = void 0),
          (this.m_NameInputCallbackHandle = void 0),
          (this.m_DescriptionCallbackHandle = void 0),
          (this.m_bSavedOnce = !1),
          (this.state = { sError: void 0 });
      }
      CloseSaveDialog() {
        null != this.m_NameInputCallbackHandle &&
          this.m_NameInputCallbackHandle.unregister(),
          null != this.m_DescriptionCallbackHandle &&
            this.m_DescriptionCallbackHandle.unregister(),
          this.props.ParentClose();
      }
      GetSaveTypeString(e) {
        switch (e) {
          default:
            return null;
          case ce.Personal:
            return "personal";
          case ce.Public:
            return "public";
          case ce.LocalFile:
            return "local_file";
          case ce.AddNewDefault:
          case ce.ReplaceDefault:
            return "replace_default";
        }
      }
      ConfirmBindingName() {
        if (this.m_bSavedOnce) return;
        (this.m_bSavedOnce = !0),
          console.log(
            "Confirmed: ",
            this.m_NameInput.value,
            this.m_DescriptionInput.value
          );
        let e = this.GetSaveTypeString(this.props.eSaveType);
        e
          ? h.a
              .SaveCurrentBinding(
                this.m_NameInput.value,
                this.m_DescriptionInput.value,
                e
              )
              .then((e) => {
                h.a.SetBindingURL(e.uri), this.CloseSaveDialog();
              })
              .catch((e) => {
                console.log("Save failed:", e), this.setState({ sError: e });
              })
          : console.error("Invalid save type: ", this.props.eSaveType);
      }
      BindNameInput(e) {
        this.m_NameInput = e;
      }
      BindDescriptionInput(e) {
        this.m_DescriptionInput = e;
      }
      OnNameFocus(e) {
        var t, n, o;
        Object(c.i)() == c.H.Overlay &&
          null == this.m_NameInputCallbackHandle &&
          (this.m_NameInput.blur(),
          (this.m_NameInputCallbackHandle =
            null === (t = VRHTML) || void 0 === t
              ? void 0
              : t.VROverlay.ShowKeyboard(
                  Object(p.c)("#BindingUI_Binding_Name"),
                  e.target.value,
                  128,
                  this.OnOverlayNameText
                )),
          null === (n = VRHTML) ||
            void 0 === n ||
            n.VROverlay.SetKeyboardPositionForOverlay(
              null === (o = VRHTML) || void 0 === o
                ? void 0
                : o.VROverlay.ThisOverlayKey(),
              {}
            ));
      }
      OnOverlayNameText(e) {
        (this.m_NameInput.value = e),
          this.m_NameInputCallbackHandle.unregister(),
          (this.m_NameInputCallbackHandle = void 0);
      }
      OnDescriptionFocus(e) {
        var t, n, o;
        Object(c.i)() == c.H.Overlay &&
          null == this.m_DescriptionCallbackHandle &&
          (this.m_DescriptionInput.blur(),
          (this.m_DescriptionCallbackHandle =
            null === (t = VRHTML) || void 0 === t
              ? void 0
              : t.VROverlay.ShowKeyboard(
                  Object(p.c)("#BindingUI_Binding_Description"),
                  e.target.value,
                  128,
                  this.OnOverlayDescriptionText
                )),
          null === (n = VRHTML) ||
            void 0 === n ||
            n.VROverlay.SetKeyboardPositionForOverlay(
              null === (o = VRHTML) || void 0 === o
                ? void 0
                : o.VROverlay.ThisOverlayKey(),
              {}
            ));
      }
      OnOverlayDescriptionText(e) {
        (this.m_DescriptionInput.value = e),
          this.m_DescriptionCallbackHandle.unregister(),
          (this.m_DescriptionCallbackHandle = void 0);
      }
      render() {
        let e = h.a.GetDefaultBindingNameForSaveType(
          this.GetSaveTypeString(this.props.eSaveType)
        );
        return i.createElement(
          l.a,
          {
            visible: !0,
            onClose: this.CloseSaveDialog,
            showCloseButton: !1,
            animation: "fade",
            customStyles: { width: "60%", height: "fit-content" },
            className: "BindingChordsModal",
            closeOnEsc: !0,
          },
          i.createElement(
            "div",
            { className: "SaveDialogWrapper FlexColumn" },
            i.createElement(
              "div",
              { className: "FlexRow SaveTitleBar" },
              i.createElement("img", {
                className:
                  "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                src: "images/bindingui/icon_download.svg",
              }),
              i.createElement(
                "div",
                { className: "Label Title TitleCenter AllCaps" },
                Object(p.c)("#BindingUI_SaveTitle")
              )
            ),
            this.state.sError &&
              i.createElement(
                "div",
                { className: "Label Error" },
                Object(p.c)(this.state.sError)
              ),
            this.props.eSaveType == ce.Personal &&
              i.createElement(
                "div",
                { className: "Label Title" },
                Object(p.c)("#BindingUI_Save_Personal")
              ),
            this.props.eSaveType == ce.Public &&
              i.createElement(
                "div",
                { className: "Label Title" },
                Object(p.c)("#BindingUI_Save_Public")
              ),
            this.props.eSaveType == ce.LocalFile &&
              i.createElement(
                "div",
                { className: "Label Title" },
                Object(p.c)("#BindingUI_Save_Export")
              ),
            (this.props.eSaveType == ce.ReplaceDefault ||
              this.props.eSaveType == ce.AddNewDefault) &&
              i.createElement(
                "div",
                { className: "Label Title" },
                Object(p.c)("#BindingUI_Save_ReplaceDefault")
              ),
            this.props.eSaveType == ce.AddNewDefault &&
              i.createElement(
                "div",
                { className: "Label" },
                Object(p.c)("#BindingUI_Save_AddNewDefault")
              ),
            i.createElement(
              "label",
              { className: "Label", htmlFor: "SaveDialogName" },
              Object(p.c)("#BindingUI_Binding_Name"),
              " "
            ),
            i.createElement("input", {
              type: "text",
              defaultValue: e,
              ref: this.BindNameInput,
              onFocus: this.OnNameFocus,
            }),
            i.createElement(
              "label",
              { className: "Label", htmlFor: "SaveDialogDescription" },
              Object(p.c)("#BindingUI_Binding_Description")
            ),
            i.createElement("textarea", {
              cols: 80,
              rows: 5,
              ref: this.BindDescriptionInput,
              defaultValue: this.props.sDescription,
              onFocus: this.OnDescriptionFocus,
              placeholder: Object(p.c)("BindingUI_SaveDescriptionPlaceholder"),
            }),
            i.createElement(
              "div",
              { className: "FlexRow SaveBottomButtonRow" },
              i.createElement(
                "div",
                {
                  onClick: this.ConfirmBindingName,
                  className: "ButtonControl",
                },
                Object(p.c)("#BindingUI_SaveBinding")
              ),
              i.createElement(
                "div",
                { onClick: this.CloseSaveDialog, className: "ButtonControl" },
                Object(p.c)("#Button_Cancel")
              )
            )
          )
        );
      }
    };
    Object(o.b)([u.bind], de.prototype, "CloseSaveDialog", null),
      Object(o.b)([u.bind], de.prototype, "ConfirmBindingName", null),
      Object(o.b)([u.bind], de.prototype, "BindNameInput", null),
      Object(o.b)([u.bind], de.prototype, "BindDescriptionInput", null),
      Object(o.b)([u.bind], de.prototype, "OnNameFocus", null),
      Object(o.b)([u.bind], de.prototype, "OnOverlayNameText", null),
      Object(o.b)([u.bind], de.prototype, "OnDescriptionFocus", null),
      Object(o.b)([u.bind], de.prototype, "OnOverlayDescriptionText", null),
      (de = Object(o.b)([a.a], de));
    let pe = class extends i.Component {
      render() {
        let e = this.props.UnboundActions.vecRequired.map((e, t) =>
            i.createElement(
              "div",
              { key: t },
              Object(p.c)(
                "#BindingUI_UnboundActions_Required",
                e.localized_name
              )
            )
          ),
          t = this.props.UnboundActions.vecSuggested.map((e, t) =>
            i.createElement(
              "div",
              { key: t },
              Object(p.c)(
                "#BindingUI_UnboundActions_Suggested",
                e.localized_name
              )
            )
          ),
          n = "UnboundActionsOverlay";
        return (
          this.props.Visible && (e.length || t.length) && (n += " Visible"),
          i.createElement(
            "div",
            { className: n },
            i.createElement(
              "div",
              { className: "FlexColumn" },
              i.createElement(
                "div",
                { className: "Label Title" },
                Object(p.c)("#BindingUI_UnboundActions_Title")
              ),
              e,
              t
            )
          )
        );
      }
    };
    var he;
    (pe = Object(o.b)([a.a], pe)),
      (function (e) {
        (e[(e.ActionSet = 0)] = "ActionSet"),
          (e[(e.LegacySetup = 1)] = "LegacySetup"),
          (e[(e.SecondaryControllerSetup = 2)] = "SecondaryControllerSetup");
      })(he || (he = {}));
    let ue = class extends i.Component {
      constructor(e) {
        super(e),
          (this.state = {
            bDeveloperOutput: !1,
            bShowPoseBindings: !1,
            bShowBindingSettings: !1,
            bBindingUIInMirroredMode: !1,
            bShowHapticsBindings: !1,
            bShowChordBindings: !1,
            eSaveType: ce.None,
            bShowSelectConfirmModal: !1,
            bShowSkeletonBindings: !1,
            bEditBindingOnSelectConfirm: !1,
            bShowUnboundActionsOverlay: !1,
            vecUnboundActions: { vecRequired: [], vecSuggested: [] },
            eTabType: he.ActionSet,
          });
      }
      OnAppDropdownChanged(e) {
        h.a.SetSelectedApp(e);
      }
      OnActionSetDropdownChanged(e) {
        this.setState({ eTabType: he.ActionSet }), h.a.SetSelectedActionSet(e);
      }
      ToggleDeveloperOutput() {
        this.setState({ bDeveloperOutput: !this.state.bDeveloperOutput });
      }
      OpenPoseBindingsModal() {
        this.setState({ bShowPoseBindings: !0 });
      }
      ClosePoseBindingsModal() {
        this.setState({ bShowPoseBindings: !1 });
      }
      OpenHapticsBindingsModal() {
        this.setState({ bShowHapticsBindings: !0 });
      }
      CloseHapticsBindingsModal() {
        this.setState({ bShowHapticsBindings: !1 });
      }
      OpenSkeletonBindingsModal() {
        this.setState({ bShowSkeletonBindings: !0 });
      }
      CloseSkeletonBindingsModal() {
        this.setState({ bShowSkeletonBindings: !1 });
      }
      OpenChordBindingsModal() {
        this.setState({ bShowChordBindings: !0 });
      }
      CloseChordBindingsModal() {
        this.setState({ bShowChordBindings: !1 });
      }
      CloseSaveModal() {
        this.setState({ eSaveType: ce.None });
      }
      ShowPublicModal() {
        this.setState({ eSaveType: ce.Public });
      }
      ShowPersonalModal() {
        this.setState({ eSaveType: ce.Personal });
      }
      ShowExportModal() {
        this.setState({ eSaveType: ce.LocalFile });
      }
      ShowReplaceDefaultModal() {
        let e =
          null !=
          h.a.GetSelectedAppDefaultBinding(
            h.a.SelectedControllerTypeInfo.controller_type
          );
        this.setState({ eSaveType: e ? ce.ReplaceDefault : ce.AddNewDefault });
      }
      ShowUnboundActionsOverlay(e) {
        this.setState({ bShowUnboundActionsOverlay: !0, vecUnboundActions: e });
      }
      HideUnboundActionsOverlay() {
        this.setState({ bShowUnboundActionsOverlay: !1 });
      }
      SetBindingUIInMirroredMode(e) {
        this.state.bBindingUIInMirroredMode != e &&
          this.setState({ bBindingUIInMirroredMode: e });
      }
      SelectThisBinding(e, t) {
        m.a.Loading = !0;
        let n = h.a.SelectedControllerTypeInfo;
        h.a
          .SelectConfig(h.a.SelectedApp, n ? n.controller_type : "", e)
          .then(() => {
            h.a.ReloadCurrentApp().then(() => {
              t ? m.a.EditCurrentBinding() : m.a.ShowBindingList(),
                setTimeout(() => {
                  m.a.Loading = !1;
                }, 1);
            });
          });
      }
      SelectWouldOverwriteAutosave() {
        let e = m.a.CurrentBinding;
        return (
          !!e &&
          this.props.bReadOnlyView &&
          "autosave" == e.type &&
          e.url != h.a.LoadedBindingURL
        );
      }
      ShouldShowSelectConfirmDialog() {
        return (
          this.ThisConfigNeedsUpgrade() || this.SelectWouldOverwriteAutosave()
        );
      }
      OnSelectBinding(e) {
        this.ShouldShowSelectConfirmDialog()
          ? this.setState({
              bShowSelectConfirmModal: !0,
              bEditBindingOnSelectConfirm: e,
            })
          : this.OnSelectConfirmed(h.a.LoadedBindingURL, e);
      }
      ThisConfigNeedsUpgrade() {
        let e = h.a.SelectedAppActions;
        return (
          h.a.CurrentBindingActionManifestVersion < e.minimum_required_version
        );
      }
      OnSelectConfirmed(e, t) {
        this.ThisConfigNeedsUpgrade()
          ? (h.a.PreserveCurrentBindingForUpgrade().then(() => {
              h.a.AutosaveBinding();
            }),
            this.OnSelectDone())
          : (this.SelectThisBinding(e, t), this.OnSelectDone());
      }
      OnSelectDone() {
        this.setState({ bShowSelectConfirmModal: !1 });
      }
      OnSaveCurrentBinding(e) {
        let t = m.a.CurrentBinding;
        h.a.SetBindingURL(t.url),
          h.a.ReloadControllerConfiguration().then(() => {
            h.a
              .SaveCurrentBinding(t.name, t.description, "personal")
              .then(() => {
                e();
              });
          });
      }
      renderSelectConfirmModal() {
        let e,
          t = null,
          n = !0,
          o = Object(p.c)("#Button_Discard");
        if (this.ThisConfigNeedsUpgrade()) {
          let i = Z.a.GetApp(h.a.SelectedApp);
          (e = Object(p.c)("#BindingUI_List_Upgrade_Confirm", i.name)),
            (n = this.SelectWouldOverwriteAutosave()),
            n
              ? (t = Object(p.c)("#BindingUI_List_Select_Confirm_Convert"))
              : (o = Object(p.c)("#Button_Import"));
        } else e = Object(p.c)("#BindingUI_List_Select_Confirm");
        let r = null;
        return (
          m.a.DesktopMode || (r = { height: "30%", width: "30%" }),
          i.createElement(
            l.a,
            {
              visible: this.state.bShowSelectConfirmModal,
              onClose: this.OnSelectDone,
              showCloseButton: !1,
              animation: "fade",
              className: "ModeSettingsModal",
              closeOnEsc: !0,
              customStyles: r,
            },
            this.state.bShowSelectConfirmModal &&
              i.createElement(
                "div",
                { className: "FlexFullHeightColumnCentered" },
                i.createElement(
                  "div",
                  { className: "Label Title" },
                  Object(p.c)("#BindingUI_ConfirmSelect_Title")
                ),
                i.createElement("div", { className: "Label" }, e),
                t &&
                  i.createElement("div", { className: "Label SecondRow" }, t),
                i.createElement(
                  "div",
                  { className: "FlexRow BottomButtons" },
                  i.createElement(
                    "div",
                    {
                      className: "ButtonControl",
                      onClick: () =>
                        this.OnSelectConfirmed(
                          h.a.LoadedBindingURL,
                          this.state.bEditBindingOnSelectConfirm
                        ),
                    },
                    o
                  ),
                  n &&
                    i.createElement(
                      "div",
                      {
                        className: "ButtonControl",
                        onClick: this.OnSaveClicked,
                      },
                      Object(p.c)("#Button_Save")
                    ),
                  i.createElement(
                    "div",
                    { className: "ButtonControl", onClick: this.OnSelectDone },
                    Object(p.c)("#Button_Cancel")
                  )
                )
              )
          )
        );
      }
      OnSaveClicked() {
        let e = h.a.LoadedBindingURL;
        this.OnSaveCurrentBinding(() =>
          this.OnSelectConfirmed(e, this.state.bEditBindingOnSelectConfirm)
        );
      }
      OnLegacySetup() {
        this.setState({ eTabType: he.LegacySetup });
      }
      OnSecondaryControllerSetup() {
        this.setState({ eTabType: he.SecondaryControllerSetup });
      }
      render() {
        let e = h.a.ActionSets,
          t = e.map((e, t) => {
            let n = "Label Tab PositionRelative",
              o = new h.g();
            h.a.UnboundActions.has(e.name) &&
              (o = h.a.UnboundActions.get(e.name));
            let r = o.vecRequired.length + o.vecSuggested.length;
            return (
              o.vecRequired.length > 0
                ? (n += " Error")
                : o.vecSuggested.length > 0 && (n += " Warning"),
              e.name == h.a.SelectedActionSet &&
                this.state.eTabType == he.ActionSet &&
                (n += " Selected"),
              i.createElement(
                "div",
                {
                  key: t,
                  className: n,
                  onMouseEnter: () => {
                    this.ShowUnboundActionsOverlay(o);
                  },
                  onMouseLeave: this.HideUnboundActionsOverlay,
                  onClick: () => {
                    this.OnActionSetDropdownChanged(e.name);
                  },
                },
                e.localized_name,
                r > 0 &&
                  i.createElement(
                    "div",
                    { className: "UnboundActionsCount" },
                    r
                  )
              )
            );
          });
        if (h.a.SelectedBindingIsLegacy || h.a.ManifestOptions.length > 0) {
          let e = "Label Tab PositionRelative";
          this.state.eTabType == he.LegacySetup && (e += " Selected"),
            t.push(
              i.createElement(
                "div",
                {
                  key: "action_aliases",
                  className: e,
                  onClick: this.OnLegacySetup,
                },
                Object(p.c)("#LegacySetupTab")
              )
            );
        }
        if (h.a.IsSecondaryController) {
          let e = "Label Tab PositionRelative";
          this.state.eTabType == he.SecondaryControllerSetup &&
            (e += " Selected"),
            t.push(
              i.createElement(
                "div",
                {
                  key: "action_aliases",
                  className: e,
                  onClick: this.OnSecondaryControllerSetup,
                },
                Object(p.c)("#SecondaryControllerTab")
              )
            );
        }
        let n = !1,
          o = !1,
          r = void 0;
        h.a.SelectedControllerTypeInfo &&
          this.state.eTabType == he.ActionSet &&
          ((r = h.a.SelectedControllerTypeInfo),
          (n = "controller_handed" == r.input_bindingui_mode),
          (o =
            "hmd" == r.input_bindingui_mode ||
            "single_device" == r.input_bindingui_mode));
        let a = this.state.bDeveloperOutput
          ? "Hide Developer output"
          : "Show Developer output";
        const s = {
          width: "60%",
          height: "auto",
          padding: "0px",
          maxHeight: "90%",
        };
        let c = Z.a.GetApp(h.a.SelectedApp),
          d = "";
        c && (d = c.name);
        let u,
          b = this.props.bReadOnlyView
            ? Object(p.c)("#BindingUI_ViewPageTitle", h.a.ConfigName)
            : Object(p.c)("#BindingUI_EditPageTitle", h.a.ConfigName),
          g = "#BindingUI_PageSubTitle",
          _ = h.a.GetOptionValue("variant");
        _ &&
          ((u = Object(p.c)("#BindingVariant_" + _)),
          (g = "#BindingUI_PageSubTitle_WithVariant"));
        let S = Object(p.c)(
            g,
            h.a.SelectedControllerTypeLocalizedName,
            d,
            Object(p.c)("#BindingUI_BindingType_" + h.a.CurrentBindingSaveType),
            u
          ),
          v = !this.ThisConfigNeedsUpgrade() && this.props.bReadOnlyView,
          y = this.ThisConfigNeedsUpgrade();
        return i.createElement(
          "div",
          { className: "FlexColumn FullPage" },
          i.createElement(
            "div",
            { className: "TopRow FlexColumn" },
            i.createElement(
              "div",
              { className: "FlexColumn DescriptionTopRow" },
              i.createElement($.a, {
                fnOnClick: m.a.ShowBindingList,
                strTitle: b,
                strSubTitle: S,
              })
            ),
            e.length > 0 &&
              i.createElement(
                "div",
                {
                  className:
                    "ActionTabContainer TabRow FlexFullWidthRowCentered",
                },
                t
              ),
            this.state.eTabType == he.ActionSet &&
              i.createElement(pe, {
                Visible: this.state.bShowUnboundActionsOverlay,
                UnboundActions: this.state.vecUnboundActions,
              }),
            h.a.SaveNoticeText &&
              i.createElement(
                "div",
                { className: "UnboundActionsOverlay Visible" },
                Object(p.c)(h.a.SaveNoticeText)
              )
          ),
          n &&
            i.createElement(G, {
              bSingleMode: !1,
              selectedActionSet: h.a.SelectedActionSetDetails,
              fnSetMirroredMode: this.SetBindingUIInMirroredMode,
              fnOpenChordBindingsModal: this.OpenChordBindingsModal,
              fnOpenHapticsBindingsModal: this.OpenHapticsBindingsModal,
              fnOpenPoseBindingsModal: this.OpenPoseBindingsModal,
              fnOpenSkeletonBindingsModal: this.OpenSkeletonBindingsModal,
              bReadOnly: this.props.bReadOnlyView,
            }),
          o &&
            i.createElement(G, {
              bSingleMode: !0,
              fnOpenChordBindingsModal: this.OpenChordBindingsModal,
              fnOpenHapticsBindingsModal: this.OpenHapticsBindingsModal,
              fnOpenPoseBindingsModal: this.OpenPoseBindingsModal,
              fnOpenSkeletonBindingsModal: this.OpenSkeletonBindingsModal,
              bReadOnly: this.props.bReadOnlyView,
            }),
          this.state.eTabType == he.LegacySetup &&
            i.createElement(
              "div",
              { className: "LegacySetupWrapper" },
              i.createElement(
                "div",
                { className: "LegacySetupContents" },
                i.createElement(re, {
                  readOnly: this.props.bReadOnlyView,
                  options: h.a.ManifestOptions,
                }),
                i.createElement(ne, { readOnly: this.props.bReadOnlyView }),
                i.createElement(le, { readOnly: this.props.bReadOnlyView })
              )
            ),
          this.state.eTabType == he.SecondaryControllerSetup &&
            i.createElement(
              "div",
              { className: "LegacySetupWrapper" },
              i.createElement(
                "div",
                { className: "LegacySetupContents" },
                i.createElement(re, {
                  readOnly: this.props.bReadOnlyView,
                  options: h.a.SecondaryControllerOptions,
                })
              )
            ),
          i.createElement(
            "div",
            { className: "BottomButtonRow" },
            i.createElement("hr", null),
            i.createElement(
              "div",
              { className: "BindingManageButtons FlexFullWidthRowCentered" },
              !this.props.bReadOnlyView &&
                i.createElement(
                  "div",
                  {
                    className: "FlexColumn ButtonControl SteamRequired",
                    onClick: this.ShowPublicModal,
                  },
                  Object(p.c)("#BindingUI_PublishToWorkshop")
                ),
              !this.props.bReadOnlyView &&
                i.createElement(
                  "div",
                  {
                    className: "FlexColumn ButtonControl SteamRequired",
                    onClick: this.ShowPersonalModal,
                  },
                  Object(p.c)("#BindingUI_SavePersonal")
                ),
              v &&
                i.createElement(
                  "div",
                  {
                    className: "FlexColumn ButtonControl",
                    onClick: () => {
                      this.OnSelectBinding(!1);
                    },
                  },
                  Object(p.c)("#BindingUI_SelectThisBinding")
                ),
              v &&
                i.createElement(
                  "div",
                  {
                    className: "FlexColumn ButtonControl",
                    onClick: () => {
                      this.OnSelectBinding(!0);
                    },
                  },
                  Object(p.c)("#BindingUI_EditThisBinding")
                ),
              y &&
                i.createElement(
                  "div",
                  {
                    className: "FlexColumn ButtonControl",
                    onClick: () => {
                      this.OnSelectBinding(!0);
                    },
                  },
                  Object(p.c)("#BindingUI_ImportThisBinding")
                ),
              j.a.BDevMode &&
                i.createElement("div", { className: "BindingManageButtonsHR" }),
              j.a.BDevMode &&
                i.createElement(
                  "div",
                  {
                    className: "FlexColumn ButtonControl",
                    onClick: this.ToggleDeveloperOutput,
                  },
                  a
                ),
              j.a.BDevMode &&
                i.createElement(
                  "div",
                  {
                    className: "FlexColumn ButtonControl",
                    onClick: this.ShowExportModal,
                  },
                  Object(p.c)("#BindingUI_ExportBindingFile")
                ),
              j.a.BDevMode &&
                !h.a.SelectedBindingIsLegacy &&
                i.createElement(
                  "div",
                  {
                    className: "FlexColumn ButtonControl",
                    onClick: this.ShowReplaceDefaultModal,
                  },
                  Object(p.c)("#BindingUI_ReplaceDefaultFile")
                ),
              h.a.BSelectedActionSetHasPoses &&
                i.createElement(
                  l.a,
                  {
                    visible: this.state.bShowPoseBindings,
                    onClose: this.ClosePoseBindingsModal,
                    showCloseButton: !1,
                    animation: "fade",
                    customStyles: s,
                    className: "BindingPosesModal",
                    closeOnEsc: !0,
                  },
                  this.state.bShowPoseBindings &&
                    i.createElement(X, {
                      fnCloseModal: this.ClosePoseBindingsModal,
                      eActionSourceType: z.Pose,
                      bSingleControllerMode: o,
                      bSlaveSecondaryControllerBinding: !(
                        n && !this.state.bBindingUIInMirroredMode
                      ),
                      bReadOnly: this.props.bReadOnlyView,
                    })
                ),
              h.a.BSelectedActionSetHasHaptics &&
                i.createElement(
                  l.a,
                  {
                    visible: this.state.bShowHapticsBindings,
                    onClose: this.CloseHapticsBindingsModal,
                    showCloseButton: !1,
                    animation: "fade",
                    customStyles: s,
                    className: "BindingPosesModal",
                    closeOnEsc: !0,
                  },
                  this.state.bShowHapticsBindings &&
                    i.createElement(X, {
                      fnCloseModal: this.CloseHapticsBindingsModal,
                      eActionSourceType: z.Haptics,
                      bSingleControllerMode: o,
                      bSlaveSecondaryControllerBinding: !(
                        n && !this.state.bBindingUIInMirroredMode
                      ),
                      bReadOnly: this.props.bReadOnlyView,
                    })
                ),
              h.a.BSelectedActionSetHasSkeletons &&
                i.createElement(
                  l.a,
                  {
                    visible: this.state.bShowSkeletonBindings,
                    onClose: this.CloseSkeletonBindingsModal,
                    showCloseButton: !1,
                    animation: "fade",
                    customStyles: s,
                    className: "BindingPosesModal",
                    closeOnEsc: !0,
                  },
                  this.state.bShowSkeletonBindings &&
                    i.createElement(X, {
                      fnCloseModal: this.CloseSkeletonBindingsModal,
                      eActionSourceType: z.Skeleton,
                      bSingleControllerMode: o,
                      bSlaveSecondaryControllerBinding: !(
                        n && !this.state.bBindingUIInMirroredMode
                      ),
                      bReadOnly: this.props.bReadOnlyView,
                    })
                ),
              i.createElement(
                l.a,
                {
                  visible: this.state.bShowChordBindings,
                  onClose: this.CloseChordBindingsModal,
                  showCloseButton: !1,
                  animation: "fade",
                  className: "BindingChordsModal",
                  closeOnEsc: !0,
                  customStyles: {
                    width: "fit-content",
                    height: "fit-content",
                    padding: "0px",
                    maxHeight: "90%",
                  },
                },
                this.state.bShowChordBindings &&
                  i.createElement(J, {
                    fnCloseModal: this.CloseChordBindingsModal,
                    bReadOnly: this.props.bReadOnlyView,
                  })
              )
            ),
            i.createElement(
              "div",
              { className: "DebugButtons FlexFullWidthRowCentered" },
              this.state.bDeveloperOutput &&
                i.createElement("textarea", {
                  readOnly: !0,
                  style: { width: "1000px", height: "400px" },
                  value: h.a.BindingConfig,
                })
            )
          ),
          this.state.eSaveType != ce.None &&
            i.createElement(de, {
              sDescription: h.a.ConfigDescription,
              eSaveType: this.state.eSaveType,
              ParentClose: this.CloseSaveModal,
            }),
          this.renderSelectConfirmModal()
        );
      }
    };
    Object(o.b)([u.bind], ue.prototype, "OnAppDropdownChanged", null),
      Object(o.b)([u.bind], ue.prototype, "OnActionSetDropdownChanged", null),
      Object(o.b)([u.bind], ue.prototype, "ToggleDeveloperOutput", null),
      Object(o.b)([u.bind], ue.prototype, "OpenPoseBindingsModal", null),
      Object(o.b)([u.bind], ue.prototype, "ClosePoseBindingsModal", null),
      Object(o.b)([u.bind], ue.prototype, "OpenHapticsBindingsModal", null),
      Object(o.b)([u.bind], ue.prototype, "CloseHapticsBindingsModal", null),
      Object(o.b)([u.bind], ue.prototype, "OpenSkeletonBindingsModal", null),
      Object(o.b)([u.bind], ue.prototype, "CloseSkeletonBindingsModal", null),
      Object(o.b)([u.bind], ue.prototype, "OpenChordBindingsModal", null),
      Object(o.b)([u.bind], ue.prototype, "CloseChordBindingsModal", null),
      Object(o.b)([u.bind], ue.prototype, "CloseSaveModal", null),
      Object(o.b)([u.bind], ue.prototype, "ShowPublicModal", null),
      Object(o.b)([u.bind], ue.prototype, "ShowPersonalModal", null),
      Object(o.b)([u.bind], ue.prototype, "ShowExportModal", null),
      Object(o.b)([u.bind], ue.prototype, "ShowReplaceDefaultModal", null),
      Object(o.b)([u.bind], ue.prototype, "ShowUnboundActionsOverlay", null),
      Object(o.b)([u.bind], ue.prototype, "HideUnboundActionsOverlay", null),
      Object(o.b)([u.bind], ue.prototype, "SetBindingUIInMirroredMode", null),
      Object(o.b)([u.bind], ue.prototype, "SelectThisBinding", null),
      Object(o.b)([u.bind], ue.prototype, "OnSelectBinding", null),
      Object(o.b)([u.bind], ue.prototype, "OnSelectConfirmed", null),
      Object(o.b)([u.bind], ue.prototype, "OnSelectDone", null),
      Object(o.b)([u.bind], ue.prototype, "OnSaveCurrentBinding", null),
      Object(o.b)([u.bind], ue.prototype, "renderSelectConfirmModal", null),
      Object(o.b)([u.bind], ue.prototype, "OnSaveClicked", null),
      Object(o.b)([u.bind], ue.prototype, "OnLegacySetup", null),
      Object(o.b)([u.bind], ue.prototype, "OnSecondaryControllerSetup", null),
      (ue = Object(o.b)([a.a], ue));
    var me = n("dO2U");
    let be = class extends i.Component {
      constructor(e) {
        super(e), (this.state = { bIsVisible: !0 });
      }
      CloseDialog() {
        this.setState({ bIsVisible: !1 });
      }
      render() {
        let e = null;
        return (
          m.a.DesktopMode || (e = { height: "30%", width: "30%" }),
          i.createElement(
            l.a,
            {
              visible: this.state.bIsVisible,
              onClose: this.CloseDialog,
              showCloseButton: !1,
              animation: "fade",
              className: "BindingChordsModal",
              closeOnEsc: !0,
              customStyles: e,
            },
            i.createElement(
              "div",
              {
                className:
                  "SaveDialogWrapper FlexColumn LoadErrorDialogWrapper",
              },
              i.createElement(
                "div",
                { className: "Label TitleCenter" },
                this.props.sError
              ),
              i.createElement(
                "div",
                {
                  className: "FlexRow SaveBottomButtonRow LoadErrorCloseButton",
                },
                i.createElement(
                  "div",
                  { onClick: this.CloseDialog, className: "ButtonControl" },
                  Object(p.c)("#Button_Close")
                )
              )
            )
          )
        );
      }
    };
    Object(o.b)([u.bind], be.prototype, "CloseDialog", null),
      (be = Object(o.b)([a.a], be));
    let ge = class extends i.Component {
      constructor(e) {
        super(e);
        let t = h.a.SelectedAppActions;
        (this.state = {
          bShowDeleteConfirmModal: !1,
          bShowUpgradeConfirmModal: !1,
          bOldVersion:
            !!t && this.props.result.actionManifestVersion < t.version,
        }),
          this.props.result.steamIDOwner.length &&
            "0" != this.props.result.steamIDOwner &&
            me.a.RequestUserInformation(this.props.result.steamIDOwner);
      }
      OnDelete() {
        this.setState({ bShowDeleteConfirmModal: !0 });
      }
      OnDeleteConfirmed() {
        this.setState({ bShowDeleteConfirmModal: !1 }),
          h.a.DeleteBinding(this.props.result.url).then(() => {
            m.a.RefreshBindingList();
          });
      }
      OnDeleteCancel() {
        this.setState({ bShowDeleteConfirmModal: !1 });
      }
      renderDeleteConfirmModal(e) {
        return i.createElement(
          l.a,
          {
            visible: this.state.bShowDeleteConfirmModal,
            onClose: this.OnDeleteCancel,
            showCloseButton: !1,
            animation: "fade",
            className: "ModeSettingsModal",
            closeOnEsc: !0,
          },
          this.state.bShowDeleteConfirmModal &&
            i.createElement(
              "div",
              { className: "FlexFullHeightColumnCentered" },
              i.createElement(
                "div",
                { className: "Label" },
                Object(p.c)("#BindingUI_List_Delete_Confirm", e.name)
              ),
              i.createElement(
                "div",
                { className: "FlexRow" },
                i.createElement(
                  "div",
                  {
                    className: "ButtonControl",
                    onClick: this.OnDeleteConfirmed,
                  },
                  Object(p.c)("#Button_Delete")
                ),
                i.createElement(
                  "div",
                  { className: "ButtonControl", onClick: this.OnDeleteCancel },
                  Object(p.c)("#Button_Cancel")
                )
              )
            )
        );
      }
      OnView() {
        this.props.fnViewBinding(
          this.props.result.url,
          !this.props.bCurrentlySelectedBinding
        );
      }
      OnSelect() {
        this.props.fnSelectBinding(this.props.result.url);
      }
      render() {
        let e = new Date(),
          t = new Date(1e3 * this.props.result.time),
          n =
            e.getTime() - t.getTime() > 1728e5
              ? t.toLocaleDateString()
              : t.toLocaleString(),
          o = this.props.result,
          r = "developer" == o.type,
          a = "0" != o.steamIDOwner && !r,
          s = Z.a.GetApp(h.a.SelectedApp),
          l = s ? s.name : "",
          c = void 0;
        r &&
          ((o.name && 0 != o.name.length) ||
            (h.a.SelectedBindingIsLegacy
              ? (o.name = Object(p.c)(
                  "#BindingUI_List_Legacy_Binding_Title",
                  l
                ))
              : (o.name = Object(p.c)(
                  "#BindingUI_List_Developer_Binding_Title",
                  l
                ))),
          (o.description && 0 != o.description.length) ||
            (h.a.SelectedBindingIsLegacy
              ? (o.description = Object(p.c)(
                  "#BindingUI_List_Legacy_Binding_Description"
                ))
              : (o.description = Object(p.c)(
                  "#BindingUI_List_Developer_Binding_Description"
                ))));
        let d = void 0;
        a &&
          ((d = me.a.GetUserInformation(o.steamIDOwner).avatar_url),
          (c = me.a.GetUserInformation(o.steamIDOwner).persona_name));
        let u = this.props.bCurrentlySelectedBinding
            ? Object(p.c)("#BindingUI_List_Edit")
            : Object(p.c)("#BindingUI_List_View"),
          m = o.name;
        "autosave" == o.type &&
          (m = Object(p.c)("#BindingUI_List_Autosave", o.name));
        let b = null;
        this.state.bOldVersion &&
          (b = this.props.bCurrentlySelectedBinding
            ? Object(p.c)("#BindingUI_List_OldVersionWarning_CurrentBinding", l)
            : Object(p.c)("#BindingUI_List_OldVersionWarning", l));
        let g = null;
        if (o.secondsPlayed > 0) {
          let e = o.secondsPlayed / 60;
          g = Object(p.c)("#BindingUI_List_MinutesPlayed", e.toFixed(0));
        }
        let _ = null;
        if (o.secondsPlayedThisMonth > 0) {
          let e = o.secondsPlayedThisMonth / 60;
          _ = Object(p.c)(
            "#BindingUI_List_MinutesPlayedThisMonth",
            e.toFixed(0)
          );
        }
        return i.createElement(
          "div",
          { className: "BindingEntry FlexRow" },
          d &&
            i.createElement("img", {
              className: "SteamCommunityProfileImage",
              src: d,
            }),
          a &&
            !d &&
            i.createElement("div", { className: "SteamCommunityProfileImage" }),
          i.createElement(
            "div",
            { className: "BindingDetails" },
            !this.props.bCurrentlySelectedBinding &&
              this.props.fnSelectBinding &&
              i.createElement(
                "div",
                {
                  className:
                    "BindingListEntryButton ButtonControl BindingSelectButton",
                  onClick: this.OnSelect,
                },
                Object(p.c)("#BindingUI_List_Select")
              ),
            !h.a.HasBindingUriFailedToLoad(o.url) &&
              i.createElement(
                "div",
                {
                  className:
                    "BindingListEntryButton ButtonControl BindingSelectButton",
                  onClick: this.OnView,
                },
                u
              ),
            o.owned &&
              !this.props.bCurrentlySelectedBinding &&
              i.createElement(
                "div",
                {
                  className:
                    "BindingListEntryButton BindingSelectButton DeleteButton ButtonControl",
                  onClick: () => {
                    this.OnDelete();
                  },
                },
                i.createElement("img", {
                  className: "ActionButtonImage",
                  src: "images/bindingui/icon_trash.svg",
                })
              ),
            i.createElement(
              "span",
              { className: "BindingName" },
              m,
              i.createElement("br", null)
            ),
            i.createElement(
              "span",
              { className: "BindingDescription" },
              o.description,
              i.createElement("br", null)
            ),
            c &&
              i.createElement(
                "span",
                { className: "BindingSteamPersonaName Label" },
                Object(p.c)("#BindingUI_List_PublishedBy", c),
                i.createElement("br", null)
              ),
            o.time > 0 &&
              i.createElement(
                "span",
                { className: "BindingLastUpdated" },
                Object(p.c)("#BindingUI_List_LastUpdated"),
                n,
                _ && " - " + _,
                g && " - " + g,
                i.createElement("br", null)
              ),
            b &&
              i.createElement(
                "span",
                { className: "ConvertWarning" },
                b,
                i.createElement("br", null)
              )
          ),
          i.createElement("div", {
            className: "FlexRow BindingEntryActionButtons",
          }),
          this.renderDeleteConfirmModal(o)
        );
      }
    };
    Object(o.b)([u.bind], ge.prototype, "OnDelete", null),
      Object(o.b)([u.bind], ge.prototype, "OnDeleteConfirmed", null),
      Object(o.b)([u.bind], ge.prototype, "OnDeleteCancel", null),
      Object(o.b)([u.bind], ge.prototype, "renderDeleteConfirmModal", null),
      Object(o.b)([u.bind], ge.prototype, "OnView", null),
      Object(o.b)([u.bind], ge.prototype, "OnSelect", null),
      (ge = Object(o.b)([a.a], ge));
    let _e = class extends i.Component {
      constructor(e) {
        super(e);
      }
      CreateBinding() {
        this.ViewBinding(h.a.SelectedBindingURL, !1);
      }
      SelectBinding(e) {
        m.a.Loading = !0;
        let t = h.a.SelectedControllerTypeInfo;
        h.a
          .SelectConfig(h.a.SelectedApp, t ? t.controller_type : "", e)
          .then(() => {
            h.a.ReloadCurrentApp();
          });
      }
      ViewBinding(e, t) {
        if (((m.a.Loading = !0), t))
          h.a.SetBindingURL(e),
            h.a.ReloadControllerConfiguration().then(() => {
              m.a.ViewCurrentBinding(),
                setTimeout(() => {
                  m.a.Loading = !1;
                }, 1);
            });
        else {
          let t = h.a.SelectedControllerTypeInfo;
          h.a
            .SelectConfig(h.a.SelectedApp, t ? t.controller_type : "", e)
            .then(() => {
              h.a.ReloadCurrentApp().then(() => {
                m.a.EditCurrentBinding(),
                  setTimeout(() => {
                    m.a.Loading = !1;
                  }, 1);
              });
            });
        }
      }
      OnControllerDropdownChanged(e) {
        h.a.SetSelectedController(e), m.a.RefreshBindingList();
      }
      ComputeResultsSection(e, t) {
        m.a.CurrentBinding && m.a.CurrentBinding.type;
        let n = m.a.BindingQueryResults,
          o = [];
        n &&
          n.length > 0 &&
          (o = n
            .filter(t)
            .map((e, t) =>
              i.createElement(ge, {
                key: t,
                currentBinding: m.a.CurrentBinding,
                result: e,
                fnViewBinding: this.ViewBinding,
                fnSelectBinding: this.SelectBinding,
                bCurrentlySelectedBinding: !1,
              })
            ));
        return (
          o.length > 0 &&
          i.createElement(
            "div",
            null,
            i.createElement(
              "div",
              { className: "BindingListSectionHeader" },
              Object(p.c)(e)
            ),
            i.createElement(
              "div",
              { className: "FlexRowWithWrap BindingListSection" },
              o
            )
          )
        );
      }
      CreateControllerTypeDropdown() {
        let e = [],
          t = Z.a.IsAppAllowedPrivateInputs(h.a.SelectedApp);
        j.a.ControllerTypes.forEach((n) => {
          (t || "InputValueVisibility_SteamVRInternal" != n.visibility) &&
            "InputValueVisibility_None" != n.visibility &&
            e.push(n);
        }),
          e.sort((e, t) => e.priority - t.priority);
        let n = [];
        e.forEach((e) => {
          n.push(
            new v.b(
              e.controller_type,
              j.a.LocalizeDriverString(e.resource_root, e.controller_type)
            )
          );
        });
        let o = "",
          r = "",
          a = h.a.SelectedControllerTypeInfo;
        a &&
          (a.input_bindingui_right.transform &&
            (o = a.input_bindingui_right.transform),
          (r = a.input_bindingui_right.uri));
        a.device_class;
        return i.createElement(
          "div",
          { className: "FlexColumn ControllerTypeWrapper" },
          i.createElement(
            "div",
            { className: "BindingListSectionHeader Label" },
            Object(p.c)("#BindingList_ControllerOption")
          ),
          i.createElement(
            "div",
            { className: "FlexRow ControllerTypeButton BindingEntry" },
            i.createElement("img", {
              className: "ControllerImage",
              src: r,
              style: { transform: o },
            }),
            i.createElement(v.a, {
              vecOptions: n,
              sModalClass: "PinTop",
              sValueSelectedItem: a ? a.controller_type : "",
              sLocalizedSelectedItem: j.a.LocalizeControllerString(
                a,
                a ? a.controller_type : ""
              ),
              fnOptionSelected: this.OnControllerDropdownChanged,
            })
          )
        );
      }
      render() {
        let e = Z.a.GetApp(h.a.SelectedApp),
          t = "";
        e && (t = e.name);
        let n = m.a.CurrentBinding,
          o = "#BindingUI_List_DeveloperSection";
        h.a.SelectedBindingIsLegacy && (o = "#BindingUI_List_LegacySection");
        let r = [];
        return (
          null != m.a.BindingQueryResults &&
            (r = m.a.BindingQueryResults.filter((e) => "autosave" != e.type)),
          i.createElement(
            "div",
            { className: "FlexColumn FullPage" },
            i.createElement($.a, {
              fnOnClick: m.a.ShowAppSelect,
              strTitle: Object(p.c)("#BindingList_PageTitle", t),
            }),
            i.createElement(
              "div",
              { className: "BindingUITopSection FlexRow" },
              i.createElement(
                "div",
                { className: "CurrentSection FlexColumn" },
                i.createElement(
                  "div",
                  { className: "BindingListSectionHeader" },
                  Object(p.c)("#BindingUI_List_CurrentSection")
                ),
                n &&
                  i.createElement(ge, {
                    result: n,
                    currentBinding: m.a.CurrentBinding,
                    fnViewBinding: this.ViewBinding,
                    bCurrentlySelectedBinding: !0,
                  })
              ),
              this.CreateControllerTypeDropdown()
            ),
            i.createElement("hr", null),
            i.createElement(
              "div",
              { className: "BindingListContent AppBindingSection" },
              this.ComputeResultsSection(
                o,
                (e) => "developer" == e.type && e.url != h.a.SelectedBindingURL
              ),
              this.ComputeResultsSection(
                "#BindingUI_List_ImportSection",
                (e) => "local_file" == e.type && e.url != h.a.SelectedBindingURL
              ),
              this.ComputeResultsSection(
                "#BindingUI_List_PersonalSection",
                (e) => "personal" == e.type && e.url != h.a.SelectedBindingURL
              ),
              this.ComputeResultsSection(
                "#BindingUI_List_OwnedSection",
                (e) =>
                  "public" == e.type &&
                  e.owned &&
                  e.url != h.a.SelectedBindingURL
              ),
              this.ComputeResultsSection(
                "#BindingUI_List_PublicSection",
                (e) =>
                  "public" == e.type &&
                  !e.owned &&
                  e.url != h.a.SelectedBindingURL
              ),
              0 == r.length &&
                i.createElement(
                  "div",
                  null,
                  i.createElement(
                    "div",
                    null,
                    i.createElement(
                      "div",
                      { className: "Label" },
                      Object(p.c)("#BindingUI_List_NoBindingsFound")
                    )
                  )
                ),
              i.createElement(
                "div",
                {
                  className: "ButtonControl DeveloperLabel Inline",
                  onClick: this.CreateBinding,
                },
                Object(p.c)("#BindingUI_List_CreateBinding")
              )
            ),
            m.a.ShowBindingListError &&
              i.createElement(be, { sError: m.a.BindingListError })
          )
        );
      }
    };
    Object(o.b)([u.bind], _e.prototype, "CreateBinding", null),
      Object(o.b)([u.bind], _e.prototype, "SelectBinding", null),
      Object(o.b)([u.bind], _e.prototype, "ViewBinding", null),
      Object(o.b)([u.bind], _e.prototype, "OnControllerDropdownChanged", null),
      Object(o.b)([u.bind], _e.prototype, "ComputeResultsSection", null),
      Object(o.b)([u.bind], _e.prototype, "CreateControllerTypeDropdown", null),
      (_e = Object(o.b)([a.a], _e));
    let Se = class extends i.Component {
      constructor(e) {
        super(e), (this.state = { bIsVisible: !0 });
      }
      CloseDialog() {
        m.a.ManifestLoadErrorClose(), this.setState({ bIsVisible: !1 });
      }
      render() {
        return i.createElement(
          l.a,
          {
            visible: this.state.bIsVisible,
            onClose: this.CloseDialog,
            showCloseButton: !1,
            animation: "fade",
            closeOnEsc: !0,
            width: 600,
          },
          i.createElement(
            "div",
            {
              className: "SaveDialogWrapper FlexColumn LoadErrorDialogWrapper",
            },
            i.createElement(
              "div",
              { className: "Label TitleCenter" },
              this.props.sError
            ),
            i.createElement(
              "div",
              { className: "Label" },
              Object(p.c)("#ActionManifestError_Path") + " " + this.props.sPath
            ),
            i.createElement(
              "div",
              { className: "FlexRow SaveBottomButtonRow LoadErrorCloseButton" },
              i.createElement(
                "div",
                { onClick: this.CloseDialog, className: "ButtonControl" },
                Object(p.c)("#Button_Close")
              )
            )
          )
        );
      }
    };
    Object(o.b)([u.bind], Se.prototype, "CloseDialog", null),
      (Se = Object(o.b)([a.a], Se));
    let ve = class extends i.Component {
      constructor(e) {
        super(e),
          (this.state = {
            strImageURL: Z.a.GetAppImageURL(this.props.app.key),
          });
      }
      componentWillReceiveProps(e) {
        e.app.key != this.props.app.key &&
          this.setState({ strImageURL: Z.a.GetAppImageURL(e.app.key) });
      }
      render() {
        return i.createElement(
          "div",
          {
            className: "AppSelectContainer",
            onClick: () => {
              this.props.fnSelectApp(this.props.app.key);
            },
          },
          i.createElement("div", {
            className: "AppImage",
            style: { backgroundImage: "url('" + this.state.strImageURL + "')" },
          }),
          i.createElement(
            "div",
            { className: "AppSelectName AllCaps" },
            this.props.app.name
          )
        );
      }
    };
    ve = Object(o.b)([a.a], ve);
    let ye = class extends i.Component {
      constructor(e) {
        super(e),
          (this.m_bInHeadset = !1),
          (this.m_bInHeadset = !!c.mb && !m.a.DesktopMode),
          (this.state = { bShowRecentApps: !1 });
      }
      SelectApplication(e) {
        h.a.SetSelectedApp(e), m.a.ShowBindingList();
      }
      OnShowMoreApps() {
        this.setState({ bShowRecentApps: !0 });
      }
      renderAppColumn() {
        let e = Z.a.GetApp("openvr.component.vrcompositor"),
          t = Z.a.GetApp("openvr.tool.steamvr_environments"),
          n = Z.a.GetRecentApps();
        t && (n = n.filter((e) => e.key != t.key));
        let o,
          r = Z.a.GetCurrentSceneProcess();
        return (
          !r && n.length > 0 && (r = n[0]),
          r && (n = n.filter((e) => e.key != r.key)),
          (o = this.state.bShowRecentApps
            ? i.createElement(
                "div",
                { className: "AppSelectList" },
                i.createElement(
                  "div",
                  { className: "AppSelectListItems" },
                  n.map((e, t) =>
                    i.createElement(ve, {
                      key: t,
                      app: e,
                      fnSelectApp: this.SelectApplication,
                    })
                  )
                )
              )
            : i.createElement(
                "div",
                {
                  className: "ButtonControl AppSelectCenter",
                  onClick: this.OnShowMoreApps,
                },
                Object(p.c)("#AppSelect_ShowMoreApps")
              )),
          i.createElement(
            "div",
            { className: "AppSelectColumn" },
            i.createElement(
              "div",
              { className: "AppSelectList" },
              i.createElement(
                "div",
                { className: "AppSelectListItems" },
                r &&
                  i.createElement(ve, {
                    app: r,
                    fnSelectApp: this.SelectApplication,
                  }),
                e &&
                  i.createElement(ve, {
                    app: e,
                    fnSelectApp: this.SelectApplication,
                  }),
                t &&
                  i.createElement(ve, {
                    app: t,
                    fnSelectApp: this.SelectApplication,
                  })
              )
            ),
            o
          )
        );
      }
      render() {
        return i.createElement(
          "div",
          { className: "AppSelectPageWrapper" },
          i.createElement($.a, {
            fnOnClick: m.a.ReturnToSettingsUI,
            strTitle: Object(p.c)("#AppSelect_EditBindings"),
            bShowBackButton: this.m_bInHeadset,
          }),
          i.createElement(
            "div",
            { className: "AppSelectColumnWrapper" },
            this.renderAppColumn()
          ),
          m.a.ShowManifestError &&
            i.createElement(Se, {
              sError: m.a.ManifestError,
              sPath: m.a.ManifestErrorPath,
            })
        );
      }
    };
    Object(o.b)([u.bind], ye.prototype, "SelectApplication", null),
      Object(o.b)([u.bind], ye.prototype, "OnShowMoreApps", null),
      (ye = Object(o.b)([a.a], ye));
    var fe,
      Ce,
      Oe,
      Ie = n("GxMB"),
      Ee = n("6YgL"),
      ke = n("lbBr");
    !(function (e) {
      (e[(e.None = 0)] = "None"),
        (e[(e.Boolean = 1)] = "Boolean"),
        (e[(e.Vector1 = 2)] = "Vector1"),
        (e[(e.Vector2 = 3)] = "Vector2"),
        (e[(e.Vector3 = 4)] = "Vector3"),
        (e[(e.Pose = 20)] = "Pose"),
        (e[(e.SimpleHaptic = 21)] = "SimpleHaptic"),
        (e[(e.Skeleton = 22)] = "Skeleton");
    })(fe || (fe = {})),
      (function (e) {
        (e[(e.Estimated = 0)] = "Estimated"),
          (e[(e.Partial = 1)] = "Partial"),
          (e[(e.Full = 2)] = "Full");
      })(Ce || (Ce = {})),
      (function (e) {
        (e[(e.Unknown = 0)] = "Unknown"),
          (e[(e.Boolean = 1)] = "Boolean"),
          (e[(e.Scalar = 2)] = "Scalar"),
          (e[(e.Pose = 3)] = "Pose"),
          (e[(e.Skeleton = 4)] = "Skeleton"),
          (e[(e.Haptic = 5)] = "Haptic");
      })(Oe || (Oe = {}));
    function Me(e) {
      return "number" != typeof e
        ? "-"
        : e >= 16777216 && e <= 33554431
        ? Object(p.c)("#InputDebugger_Priority_Overlay", e - 16777216)
        : e.toFixed(0);
    }
    class De extends i.Component {
      constructor(e) {
        var t;
        super(e),
          (this.m_mailbox = new c.c()),
          (this.m_msgNextState = null),
          this.m_mailbox.Init("input_debugger"),
          this.m_mailbox.RegisterHandler("input_frame", this.OnInputFrame),
          null === (t = VRHTML) ||
            void 0 === t ||
            t.VRProperties.SetInt32Path("/input_debugger_pid", 0),
          (this.state = {});
      }
      OnSelectApp(e) {
        var t;
        this.setState({
          sCurrentApp: e,
          latestState: null,
          actionManifest: null,
          sError: null,
          sCurrentActionSet: null,
        });
        let n = Z.a.GetApp(e);
        n.pid &&
          (null === (t = VRHTML) ||
            void 0 === t ||
            t.VRProperties.SetInt32Path("/input_debugger_pid", n.pid)),
          Object(h.f)(e)
            .then((e) => {
              this.setState({ actionManifest: e });
            })
            .catch((e) => {
              this.setState({
                sError: Object(p.c)("InputDebugger_ActionManifestFailed"),
              });
            });
      }
      OnInputFrame(e) {
        if (null == this.state.sCurrentApp) {
          let t = Z.a.FindAppByPid(e.pid);
          t && this.OnSelectApp(t.key);
        }
        !this.state.sCurrentActionSet &&
          e.actions &&
          this.SetActionSet(e.actions[0].actionSet),
          (this.m_msgNextState = e);
      }
      componentDidMount() {
        this.m_timerStateUpdate = window.setInterval(() => {
          this.m_msgNextState &&
            (this.setState({ latestState: this.m_msgNextState }),
            (this.m_msgNextState = null));
        }, 100);
      }
      componentWillUnmount() {
        var e;
        null === (e = VRHTML) ||
          void 0 === e ||
          e.VRProperties.SetInt32Path("/input_debugger_pid", 0),
          this.m_timerStateUpdate &&
            window.clearInterval(this.m_timerStateUpdate);
      }
      GetActionSetName(e) {
        let t;
        return (
          this.state.actionManifest &&
            (t = this.state.actionManifest.action_sets.find(
              (t) => t.name.toLowerCase() == e.toLowerCase()
            )),
          t ? t.localized_name : e
        );
      }
      GetActionName(e) {
        let t;
        if (this.state.actionManifest)
          for (let n of this.state.actionManifest.action_sets)
            if (
              ((t = n.actions.find(
                (t) => t.name.toLowerCase() == e.toLowerCase()
              )),
              t)
            )
              break;
        return t ? t.localized_name : e;
      }
      GetMaxPriority(e) {
        var t, n, o, i, r, a;
        return Math.max(
          null !=
            (o =
              null ===
                (n =
                  null === (t = this.state.latestState) || void 0 === t
                    ? void 0
                    : t.priorityMap) || void 0 === n
                ? void 0
                : n[e])
            ? o
            : null,
          null !=
            (a =
              null ===
                (r =
                  null === (i = this.state.latestState) || void 0 === i
                    ? void 0
                    : i.globalPriorityMap) || void 0 === r
                ? void 0
                : r[e])
            ? a
            : null
        );
      }
      renderActionSets() {
        if (!this.state.latestState.activeActionSets)
          return i.createElement(
            "div",
            { className: "Label" },
            Object(p.c)("#InputDebugger_NoActiveActionSets")
          );
        let e = [];
        for (let t of this.state.latestState.activeActionSets) {
          let n, o;
          t.secondaryActionSet
            ? ((n = t.secondaryActionSet), (o = this.GetActionSetName(n)))
            : ((o = Object(p.c)("#InputDebugger_None")), (n = ""));
          let r = this.GetActionSetName(t.actionSet),
            a = t.restrictToDevice
              ? t.restrictToDevice
              : Object(p.c)("#InputDebugger_None");
          e.push(
            i.createElement(
              "div",
              {
                className: "ActiveActionSet",
                key: t.actionSet + t.restrictToDevice,
              },
              i.createElement("div", { className: "Label ActionSetName" }, r),
              i.createElement(
                "div",
                { className: "Label ActionSetPath" },
                t.actionSet
              ),
              i.createElement(
                "div",
                { className: "Label ActionSetPriority" },
                Me(t.priority)
              ),
              i.createElement("div", { className: "Label ActionSetDevice" }, a),
              i.createElement(
                "div",
                { className: "Label ActionSetSecondaryName" },
                o
              ),
              i.createElement(
                "div",
                { className: "Label ActionSetSecondaryPath" },
                n
              )
            )
          );
        }
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(
            "div",
            { className: "Label InputDebuggerSectionHeading" },
            Object(p.c)("#InputDebugger_ActiveActionSets")
          ),
          i.createElement(
            "div",
            { className: "ActiveActionSetContainer" },
            i.createElement(
              "div",
              { className: "ActiveActionSetsHeader" },
              i.createElement(
                "div",
                { style: { gridColumn: "1 / span 2" }, className: "Label" },
                Object(p.c)("#InputDebugger_ActionSetName")
              ),
              i.createElement(
                "div",
                { style: { gridColumn: "3" }, className: "Label" },
                Object(p.c)("#InputDebugger_Priority")
              ),
              i.createElement(
                "div",
                { style: { gridColumn: "4" }, className: "Label" },
                Object(p.c)("#InputDebugger_Device")
              ),
              i.createElement(
                "div",
                { style: { gridColumn: "5 / span 2" }, className: "Label" },
                Object(p.c)("#InputDebugger_SecondaryActionSetName")
              )
            ),
            e
          )
        );
      }
      SetActionSet(e) {
        this.setState({ sCurrentActionSet: e });
      }
      ShowFilterState(e) {
        this.setState({ sFilterPath: e });
      }
      renderActionHeader(e) {
        switch (e) {
          case fe.Boolean:
            return [
              i.createElement(
                "div",
                { className: "Label ActionHeader", key: "source" },
                Object(p.c)("#InputDebugger_Source")
              ),
              i.createElement(
                "div",
                { className: "Label ActionHeader", key: "binding" },
                Object(p.c)("#InputDebugger_Binding")
              ),
              i.createElement(
                "div",
                { className: "Label ActionHeader", key: "active" },
                Object(p.c)("#InputDebugger_Active")
              ),
              i.createElement(
                "div",
                { className: "Label ActionHeader", key: "origin" },
                Object(p.c)("#InputDebugger_ActiveOrigin")
              ),
              i.createElement(
                "div",
                { className: "Label ActionHeader", key: "value" },
                Object(p.c)("#InputDebugger_Value")
              ),
            ];
          case fe.Vector1:
          case fe.Vector2:
          case fe.Vector3:
            return [
              i.createElement(
                "div",
                { className: "Label ActionHeader", key: "source" },
                Object(p.c)("#InputDebugger_Source")
              ),
              i.createElement(
                "div",
                { className: "Label ActionHeader", key: "binding" },
                Object(p.c)("#InputDebugger_Binding")
              ),
              i.createElement(
                "div",
                { className: "Label ActionHeader", key: "active" },
                Object(p.c)("#InputDebugger_Active")
              ),
              i.createElement(
                "div",
                { className: "Label ActionHeader", key: "origin" },
                Object(p.c)("#InputDebugger_ActiveOrigin")
              ),
              i.createElement(
                "div",
                { className: "Label ActionHeader", key: "value" },
                Object(p.c)("#InputDebugger_Value")
              ),
            ];
          default:
            return null;
        }
      }
      renderBoolean(e, t) {
        return i.createElement(
          "div",
          {
            className: Object(d.a)(
              "BooleanValue",
              ["IsTrue", e],
              "Label",
              "ActionEntry"
            ),
            key: t,
          },
          e ? "TRUE" : "false"
        );
      }
      renderScalar(e, t) {
        return i.createElement(
          "div",
          { className: Object(d.a)("Label", "ActionEntry"), key: t },
          e.toFixed(2)
        );
      }
      renderBinding(e, t) {
        var n, o;
        if (
          null === (n = e.binding) || void 0 === n
            ? void 0
            : n.startsWith("/filters/")
        )
          return i.createElement(
            "div",
            { className: "Label ActionEntry FilterLink", key: t + "_binding" },
            i.createElement(
              "a",
              {
                href: "#",
                onClick: () => {
                  this.ShowFilterState(e.binding);
                },
              },
              Object(p.c)("#InputDebugger_FilterDetails")
            )
          );
        {
          let t = this.GetMaxPriority(e.binding),
            n = null != (o = e.binding) ? o : "-";
          return (
            "number" == typeof t &&
              (n += " " + Object(p.c)("#InputDebugger_PriorityValue", Me(t))),
            i.createElement(
              "div",
              {
                className: "Label ActionEntry",
                key: e.inputSource + "_binding",
              },
              n
            )
          );
        }
      }
      renderActionEntry(e, t, n) {
        var o, r, a, s;
        switch (e.type) {
          case fe.Boolean:
            let e = t.data;
            return [
              i.createElement(
                "div",
                { className: "Label ActionEntry", key: n + "_source" },
                ((o = t.inputSource), null != o ? o : "-")
              ),
              this.renderBinding(t, n),
              this.renderBoolean(t.data.active, n + "_active"),
              i.createElement(
                "div",
                { className: "Label ActionEntry", key: n + "_origin" },
                ((r = t.data.activeOrigin), null != r ? r : "-")
              ),
              this.renderBoolean(e.state, n + "_value"),
            ];
          case fe.Vector1:
          case fe.Vector2:
          case fe.Vector3:
            let l = t.data,
              c = l.x.toFixed(2);
            return (
              void 0 !== l.y && (c += ", " + l.y.toFixed(2)),
              void 0 !== l.z && (c += ", " + l.z.toFixed(2)),
              [
                i.createElement(
                  "div",
                  { className: "Label ActionEntry", key: n + "_source" },
                  ((a = t.inputSource), null != a ? a : "-")
                ),
                this.renderBinding(t, n),
                this.renderBoolean(t.data.active, n + "_active"),
                i.createElement(
                  "div",
                  { className: "Label ActionEntry", key: n + "_origin" },
                  ((s = t.data.activeOrigin), null != s ? s : "-")
                ),
                i.createElement(
                  "div",
                  { className: "Label ActionEntry", key: n + "_value" },
                  c
                ),
              ]
            );
          default:
            return null;
        }
      }
      renderAction(e) {
        if (!e) return [null, 0];
        let t = this.renderActionHeader(e.type);
        if (!t) return [null, 0];
        let n = [t],
          o = 1;
        if (e.entries)
          for (let i of e.entries) {
            let r = this.renderActionEntry(e, i, (o++).toString());
            if (r) {
              if (r.length != t.length)
                throw new Error("Values must have the same length as header");
              n.push(r);
            }
          }
        let r = [];
        for (let e = 0; e < n[0].length; e++)
          for (let t = 0; t < n.length; t++) r.push(n[t][e]);
        let a = Math.max(n.length, 5);
        return [
          i.createElement(
            "div",
            { className: "Action", key: e.path },
            i.createElement(
              "div",
              {
                className: "ActionName Label",
                style: { gridColumn: "1 / " + (a + 1) },
              },
              this.GetActionName(e.path),
              i.createElement(
                "span",
                { className: "ActionPath" },
                " (",
                e.path,
                ")"
              )
            ),
            r
          ),
          a,
        ];
      }
      renderCurrentActions() {
        if (!this.state.sCurrentActionSet) return null;
        let e = new Set(),
          t = [],
          n = 0;
        for (let o of this.state.latestState.actions)
          if (o.actionSet == this.state.sCurrentActionSet) {
            let [i, r] = this.renderAction(o);
            if (!i) continue;
            (n = Math.max(r, n)), t.push(i), e.add(o.path.toLowerCase());
          }
        if (this.state.actionManifest) {
          let o = this.state.actionManifest.action_sets.find(
            (e) => e.name == this.state.sCurrentActionSet
          );
          if (o)
            for (let r of o.actions)
              e.has(r.name.toLowerCase()) ||
                ("pose" != r.type &&
                  "skeleton" != r.type &&
                  "vibration" != r.type &&
                  (t.push(
                    i.createElement(
                      "div",
                      { className: "Action", key: r.name },
                      i.createElement(
                        "div",
                        {
                          className: "ActionName Label",
                          style: { gridColumn: "1 / " + (n + 1) },
                        },
                        r.localized_name,
                        i.createElement(
                          "span",
                          { className: "ActionPath" },
                          " (",
                          r.name,
                          ")"
                        )
                      ),
                      i.createElement(
                        "div",
                        { className: "Unbound Label" },
                        Object(p.c)("#InputDebugger_ActionUnbound")
                      )
                    )
                  ),
                  e.add(r.name.toLowerCase())));
        }
        return i.createElement(
          "div",
          { className: "ActionListWrapper" },
          i.createElement("div", { className: "ActionList" }, t)
        );
      }
      renderActions() {
        if (!this.state.latestState.actions)
          return i.createElement(
            "div",
            { className: "Label" },
            Object(p.c)("#InputDebugger_NoActions")
          );
        let e = new Set();
        for (let t of this.state.latestState.actions) e.add(t.actionSet);
        let t = [];
        for (let n of e)
          t.push(
            i.createElement(
              Ee.a,
              {
                onClick: () => {
                  this.SetActionSet(n);
                },
                key: n,
                className: Object(d.a)("ActionSetButton", "ButtonControl", [
                  "Selected",
                  n == this.state.sCurrentActionSet,
                ]),
              },
              this.GetActionSetName(n)
            )
          );
        return i.createElement(
          i.Fragment,
          null,
          i.createElement(
            "div",
            { className: "Label InputDebuggerSectionHeading" },
            Object(p.c)("#InputDebugger_Actions")
          ),
          i.createElement(
            "div",
            { className: "ActionContainer" },
            i.createElement("div", { className: "ActionSetButtons" }, t),
            this.renderCurrentActions()
          )
        );
      }
      renderLatestState() {
        return this.state.latestState
          ? i.createElement(
              "div",
              { className: "DebuggerState" },
              this.renderActionSets(),
              this.renderActions()
            )
          : i.createElement(
              "div",
              { className: "Label" },
              Object(p.c)("#InputDebugger_WaitingForApp")
            );
      }
      FindFilter(e) {
        var t, n;
        if (this.state.latestState && this.state.latestState.filters)
          for (let o of this.state.latestState.filters) {
            if (
              null === (t = o.inputs) || void 0 === t
                ? void 0
                : t.find((t) => t.path == e)
            )
              return o;
            if (
              null === (n = o.outputs) || void 0 === n
                ? void 0
                : n.find((t) => t.path == e)
            )
              return o;
          }
      }
      renderFilterIO(e, t) {
        let n;
        switch (e.type) {
          case Oe.Boolean:
            n = this.renderBoolean(e.value);
            break;
          case Oe.Scalar:
            n = this.renderScalar(e.value);
            break;
          default:
            n = i.createElement("div", { className: "Label" }, Oe[e.type]);
        }
        let o = this.GetMaxPriority(e.path);
        return i.createElement(
          "div",
          { className: "FilterIO", key: e.path },
          i.createElement("div", { className: "Label" }, e.path, ": "),
          n,
          t &&
            e.path.startsWith("/filters/") &&
            i.createElement(
              "a",
              {
                href: "#",
                onClick: () => {
                  this.ShowFilterState(e.path);
                },
              },
              Object(p.c)("#InputDebugger_FilterDetails")
            ),
          "number" == typeof o &&
            i.createElement(
              "div",
              { className: "Label" },
              Object(p.c)("#InputDebugger_PriorityValue", Me(o))
            ),
          e.suppressedByPriority &&
            i.createElement(
              "div",
              { className: "Label Suppressed" },
              Object(p.c)("#InputDebugger_Suppressed")
            ),
          "}"
        );
      }
      renderFilterState() {
        if (!this.state.sFilterPath) return null;
        let e = this.FindFilter(this.state.sFilterPath),
          t = [];
        for (let n in e.parameters) {
          let o,
            r = e.parameters[n];
          switch (typeof r) {
            case "boolean":
              o = r ? "true" : "false";
              break;
            case "number":
              o = r.toFixed(2);
              break;
            default:
              o = JSON.stringify(r);
          }
          t.push(
            i.createElement("div", { className: "Label", key: n }, n, ": ", o)
          );
        }
        let n = [];
        for (let t of e.inputs) n.push(this.renderFilterIO(t, !0));
        n ||
          n.push(
            i.createElement(
              "div",
              { className: "Label", key: "none" },
              Object(p.c)("#InputDebugger_None")
            )
          );
        let o = [];
        for (let t of e.outputs) o.push(this.renderFilterIO(t, !1));
        return (
          o ||
            o.push(
              i.createElement(
                "div",
                { className: "Label", key: "none" },
                Object(p.c)("#InputDebugger_None")
              )
            ),
          i.createElement(
            ke.a,
            {
              onDismissRequested: () => {
                this.ShowFilterState(null);
              },
              className: "FilterDetails",
            },
            i.createElement(
              "div",
              { className: "Label InputDebuggerSectionHeading" },
              Object(p.c)("#InputDebugger_FilterState_Title", e.name),
              " "
            ),
            i.createElement(
              "div",
              { className: "Label" },
              Object(p.c)("#InputDebugger_FilterType"),
              e.type
            ),
            t &&
              i.createElement(
                i.Fragment,
                null,
                i.createElement(
                  "div",
                  { className: "Label InputDebuggerHeading" },
                  Object(p.c)("#InputDebugger_Parameters")
                ),
                i.createElement("div", { className: "ParameterList" }, t)
              ),
            i.createElement(
              "div",
              { className: "Label InputDebuggerHeading" },
              Object(p.c)("#InputDebugger_Inputs")
            ),
            i.createElement("div", { className: "InputList" }, n),
            i.createElement(
              "div",
              { className: "Label InputDebuggerHeading" },
              Object(p.c)("#InputDebugger_Outputs")
            ),
            i.createElement("div", { className: "OutputList" }, o)
          )
        );
      }
      render() {
        let e = Z.a.GetRunningApps(),
          t = [];
        for (let n of e)
          t.push({ value: n.key, sLabel: `${n.name} (pid: ${n.pid})` });
        return i.createElement(
          "div",
          { className: "DebuggerMain" },
          i.createElement($.a, {
            fnOnClick: m.a.ReturnToSettingsUI,
            strTitle: Object(p.c)("#InputDebugger_Title"),
          }),
          i.createElement(
            "div",
            { className: "AppDropdownWrapper" },
            i.createElement(Ie.a, {
              items: t,
              onChange: this.OnSelectApp,
              value: this.state.sCurrentApp,
              defaultLabel: Object(p.c)("#InputDebugger_SelectApplication"),
            })
          ),
          !this.state.actionManifest &&
            i.createElement(
              "div",
              { className: "Label" },
              Object(p.c)("#InputDebugger_ActionManifestLoading")
            ),
          this.state.sError &&
            i.createElement(
              "div",
              { className: "Label Error" },
              this.state.sError
            ),
          this.renderLatestState(),
          this.renderFilterState()
        );
      }
    }
    Object(o.b)([u.bind], De.prototype, "OnSelectApp", null),
      Object(o.b)([u.bind], De.prototype, "OnInputFrame", null),
      Object(o.b)([u.bind], De.prototype, "SetActionSet", null);
    var Re,
      we = n("tUsp"),
      Te = n("Q+Z6");
    let Be = class extends i.Component {
      constructor(e) {
        super(e);
      }
      render() {
        m.a.Loading
          ? document.body.classList.add("Loading")
          : document.body.classList.remove("Loading"),
          j.a.IsSteamAvailable
            ? document.body.classList.remove("SteamUnavailable")
            : document.body.classList.add("SteamUnavailable");
        return i.createElement(
          "div",
          { className: "FullPage" },
          (m.a.GetUIState == m.b.ViewBinding ||
            m.a.GetUIState == m.b.EditBinding) &&
            i.createElement(ue, {
              bReadOnlyView: m.a.GetUIState == m.b.ViewBinding,
            }),
          m.a.GetUIState == m.b.List && i.createElement(_e, null),
          m.a.GetUIState == m.b.AppSelect && i.createElement(ye, null),
          m.a.GetUIState == m.b.Debugger && i.createElement(De, null),
          m.a.GetUIState == m.b.None && i.createElement("div", null),
          i.createElement(
            l.a,
            {
              visible: h.a.SteamVRUnavailable,
              showCloseButton: !1,
              onClose: () => {},
              animation: "fade",
              className: "ModeSettingsModal",
              closeOnEsc: !1,
              customStyles: { width: "60%", height: "60%" },
            },
            i.createElement(
              "div",
              { className: "FlexFullHeightColumnCentered" },
              i.createElement(
                "div",
                { className: "Title Label" },
                Object(p.c)("#BindingUI_SteamVRUnavailable")
              )
            )
          )
        );
      }
    };
    Be = Object(o.b)([a.a], Be);
    const Ae = document.getElementById("root");
    Object(p.b)(
      ["bindingui"],
      null === (Re = VRHTML) || void 0 === Re ? void 0 : Re.GetSteamVRLanguage()
    )
      .then(() => we.a.Init())
      .then(() => Z.a.Init())
      .then(() => j.a.Init())
      .then(() => Te.d.Init(!1))
      .then(() => h.a.Init())
      .then(() =>
        (function () {
          return Object(o.a)(this, void 0, void 0, function* () {
            m.a.SetDesktopMode(Object(d.d)("desktop").length > 0),
              VRHTML &&
                !m.a.DesktopMode &&
                (document.body.parentElement.classList.add("VROverlay"),
                VRHTML.VROverlay.SetWidthInMeters(
                  VRHTML.VROverlay.ThisOverlayHandle(),
                  3
                ),
                VRHTML.VROverlay.SetFlag(
                  VRHTML.VROverlay.ThisOverlayHandle(),
                  c.D.NoDashboardTab,
                  !0
                ),
                VRHTML.VROverlay.SetFlag(
                  VRHTML.VROverlay.ThisOverlayHandle(),
                  c.D.ShowTouchPadScrollWheel,
                  !0
                ),
                VRHTML.VROverlay.SetFlag(
                  VRHTML.VROverlay.ThisOverlayHandle(),
                  c.D.SendVRSmoothScrollEvents,
                  !0
                ),
                VRHTML.VROverlay.SetInputMethod(
                  VRHTML.VROverlay.ThisOverlayHandle(),
                  c.E.Mouse
                ));
            let e = Object(d.d)("debugger");
            if (null != e && e.length > 0) return void m.a.ShowDebugger();
            let t = Object(d.d)("app");
            if (null != t && t.length > 0) {
              if (Z.a.GetApp(t)) {
                h.a.SetSelectedApp(t);
                let e = Object(d.d)("controller");
                if (null != e && e.length > 0) {
                  h.a.SetSelectedController(e);
                  let t = Object(d.d)("action_set");
                  return (
                    null != t &&
                      t.length > 0 &&
                      h.a.SetSelectedActionSet("/actions/" + t),
                    void (Object(d.d)("read_only").length > 0
                      ? m.a.ViewCurrentBinding()
                      : m.a.EditCurrentBinding())
                  );
                }
                return void m.a.ShowBindingList();
              }
            }
            m.a.ShowAppSelect();
          });
        })()
      )
      .then(() => m.a.Init())
      .then(() => {
        var e;
        (e = Be), r.render(i.createElement(e, null), Ae);
      })
      .catch((e) => console.log("FAILED TO INITIALIZE BINDINGUI " + e));
  },
  YRJX: function (e, t, n) {
    "use strict";
    n.d(t, "r", function () {
      return M;
    }),
      n.d(t, "q", function () {
        return D;
      }),
      n.d(t, "h", function () {
        return R;
      }),
      n.d(t, "a", function () {
        return w;
      }),
      n.d(t, "g", function () {
        return T;
      }),
      n.d(t, "i", function () {
        return B;
      }),
      n.d(t, "d", function () {
        return P;
      }),
      n.d(t, "c", function () {
        return L;
      }),
      n.d(t, "e", function () {
        return x;
      }),
      n.d(t, "b", function () {
        return V;
      }),
      n.d(t, "k", function () {
        return j;
      }),
      n.d(t, "l", function () {
        return F;
      }),
      n.d(t, "m", function () {
        return H;
      }),
      n.d(t, "j", function () {
        return U;
      }),
      n.d(t, "f", function () {
        return W;
      }),
      n.d(t, "p", function () {
        return G;
      }),
      n.d(t, "o", function () {
        return K;
      }),
      n.d(t, "n", function () {
        return Y;
      });
    var o,
      i,
      r = n("mrSG"),
      a = n("q1tI"),
      s = n("7wIv"),
      l = n("GXif"),
      c = n("6YgL"),
      d = n("CzjV"),
      p = n("hcOo"),
      h = n("/i/y"),
      u = n("7uy8"),
      m = n("2vnA"),
      b = n("Vp/w"),
      g = n("okNM"),
      _ = n("p9CI"),
      S = n("X3sx"),
      v = n("39GS"),
      y = n("nsy5"),
      f = n("8GAN"),
      C = n("vvDA"),
      O = n("Q+Z6"),
      I = n("/CXA"),
      E = n("aaBP"),
      k = n.n(E);
    const M = "DashboardPanelTopCenter",
      D = "DashboardControlStrip",
      R = (e) => {
        var t, n;
        const o = a.useRef(null),
          i = a.useRef(null);
        a.useEffect(() => {
          var e, t;
          return null === (e = o.current) || void 0 === e
            ? void 0
            : e.setFloatingViewStack(
                null === (t = i.current) || void 0 === t ? void 0 : t.viewStack
              );
        });
        const r = null == (t = e.scrollable) || t,
          s = null != (n = e.foregroundReflectMultiplier) ? n : 1;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            h.Y,
            {
              visibility: e.visible ? h.ab.Visible : h.ab.Hidden,
              debug_name: "homepanelbackground",
              curvature_origin_id: u.j,
              origin: h.s.BottomCenter,
              interactive: !1,
              scrollable: !1,
              target_dpi_panel_id: D,
              target_dpi_multiplier: 2,
              reflect: 0.01,
              sampler: h.t.SingleTap,
            },
            a.createElement(h.Z, { id: M, location: h.s.TopCenter }),
            a.createElement(
              I.a,
              { ref: o },
              a.createElement("div", {
                className: Object(p.a)(
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
                curvature_origin_id: u.j,
                origin: h.s.BottomCenter,
                interactive: !0,
                scrollable: r,
                target_dpi_panel_id: D,
                reflect: 0.2 * s,
              },
              a.createElement(
                I.c,
                { ref: i },
                a.createElement(
                  c.b,
                  null,
                  a.createElement(
                    _.b,
                    {
                      scrollDirection: r ? _.a.Vertical : _.a.None,
                      className: Object(p.a)(
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
    function w() {
      return a.createElement(
        "div",
        { className: "ActivitySpinner" },
        a.createElement("div", { className: "Bar" }),
        a.createElement("div", { className: "Bar" }),
        a.createElement("div", { className: "Bar" })
      );
    }
    class T extends a.Component {
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
        const o = t.toLowerCase(),
          i = Math.max(o.lastIndexOf("am"), o.lastIndexOf("pm"));
        return (
          i >= 0 && ((n = t.substring(i)), (t = t.substring(0, i - 1))),
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
    function B(e) {
      return a.createElement(
        c.a,
        { className: "PowerMenuButton", onClick: e.onClick },
        a.createElement("div", { className: "HoverGradient" }),
        a.createElement("div", { className: "ClickGradient" }),
        a.createElement("span", null, e.label),
        e.lineBelow && a.createElement("div", { className: "LineBelow" })
      );
    }
    Object(r.b)([s.bind], T.prototype, "updateTime", null);
    let A = (o = class extends a.Component {
      get isShowingTooltip() {
        return o.s_CurrentlyShownTooltip === this;
      }
      show() {
        o.s_CurrentlyShownTooltip = this;
      }
      hide() {
        this.isShowingTooltip && (o.s_CurrentlyShownTooltip = null);
      }
      render() {
        const e =
          this.props.text && (this.props.shown || this.isShowingTooltip);
        return a.createElement(
          "div",
          { style: { position: "absolute", left: "50%", top: "50%" } },
          a.createElement(
            b.a,
            { allowableParentSelectors: [".DashboardMain"] },
            a.createElement(
              h.lb,
              { translation: { y: -0.2, z: 0.05 } },
              a.createElement(
                h.Y,
                {
                  visibility: e ? h.ab.Visible : h.ab.SkipInSceneGraph,
                  target_dpi_panel_id: D,
                  curvature_origin_id: u.j,
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
    (A.s_CurrentlyShownTooltip = null),
      Object(r.b)([m.f], A.prototype, "isShowingTooltip", null),
      Object(r.b)([m.d.bound], A.prototype, "show", null),
      Object(r.b)([m.d.bound], A.prototype, "hide", null),
      Object(r.b)([m.m], A, "s_CurrentlyShownTooltip", void 0),
      (A = o = Object(r.b)([g.a], A));
    class N extends a.Component {
      static ShouldInvertThumbnail(e) {
        if (!e) return !1;
        if (((e = e.toLowerCase()), !N.s_mapShouldInvertThumbnail.has(e))) {
          let t = !1;
          e.endsWith(".svg") && (t = !0),
            e.startsWith("data:") &&
              N.k_rsThumbnailHashesToInvert.indexOf(k.a.hash(e)) >= 0 &&
              (t = !0),
            N.s_mapShouldInvertThumbnail.set(e, t);
        }
        return N.s_mapShouldInvertThumbnail.get(e);
      }
      render() {
        var e;
        const t = null != (e = this.props.shadow) && e,
          n = N.ShouldInvertThumbnail(this.props.src);
        return a.createElement(
          "div",
          { className: "Icon" },
          t &&
            a.createElement("img", {
              className: "Shadow",
              src: this.props.src,
            }),
          a.createElement("img", {
            className: Object(p.a)(["BlackToWhite", n]),
            src: this.props.src,
          })
        );
      }
    }
    var P, L;
    (N.k_rsThumbnailHashesToInvert = [
      "5cbd0ebd6459cdaf75fdcafc5051f4e0",
      "c77452e60fc29227b33773ff6e74f8a1",
      "44b62220b39ba717fbfc65e3b4225491",
      "0ea4aa3d9529b716f0f1957684247dee",
      "86bbab56235b55f6e5e7d288342931d7",
    ]),
      (N.s_mapShouldInvertThumbnail = new Map()),
      (function (e) {
        (e[(e.Large = 0)] = "Large"),
          (e[(e.Small = 1)] = "Small"),
          (e[(e.App = 2)] = "App");
      })(P || (P = {})),
      (function (e) {
        (e[(e.Center = 0)] = "Center"), (e[(e.Fill = 1)] = "Fill");
      })(L || (L = {}));
    const x = (e) =>
      a.createElement(
        "div",
        { className: Object(p.a)("ControlBarGroup", P[e.style]) },
        e.children
      );
    let V = class extends a.Component {
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
            className: Object(p.a)(
              "ControlBarButton",
              this.props.additionalClassNames,
              L[((e = this.props.imageStyle), null != e ? e : L.Center)] +
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
              a.createElement(b.a, {
                allowableParentSelectors: [".DashboardMain"],
                panelAnchorID: this.props.centerPanelAnchorID,
              })
            ),
          a.createElement(A, {
            text: this.props.label,
            ref: this.m_refTooltip,
          }),
          a.createElement(N, { src: this.props.imageUrl })
        );
      }
    };
    Object(r.b)([s.bind], V.prototype, "onMouseEnter", null),
      Object(r.b)([s.bind], V.prototype, "onMouseLeave", null),
      (V = Object(r.b)([g.a], V));
    const j = (e) =>
      a.createElement(
        x,
        { style: e.style },
        a.createElement(V, Object.assign({}, e))
      );
    class F extends a.Component {
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
                  e + F.kBatteryLevelHysteresis,
                  1
                )),
                (this.batteryLevelStable = Math.max(
                  this.batteryLevelStable,
                  e - F.kBatteryLevelHysteresis,
                  0
                )));
        }
        let o = C.a.GetBatteryIcon(
          e,
          t,
          this.batteryLevelStable,
          this.props.style
        );
        o != this.state.batteryIconPath &&
          this.setState({ batteryIconPath: o });
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
    (F.kBatteryLevelHysteresis = 0.02),
      Object(r.b)([s.bind], F.prototype, "updateControllerStatus", null),
      Object(r.b)([s.bind], F.prototype, "onBatteryStateChanged", null),
      Object(r.b)([s.bind], F.prototype, "onDeviceRoleChanged", null),
      Object(r.b)([s.bind], F.prototype, "onDeviceEvent", null);
    a.Component;
    const H = (e) =>
      a.createElement(
        "div",
        { className: "Title" },
        a.createElement(N, { src: e.iconUrl, shadow: !0 }),
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
            return a.createElement(V, {
              imageUrl: "/dashboard/images/icons/svr_reset_tracking.svg",
              label: Object(l.c)("#PowerMenuResetSeatedPosition"),
              onClick: this.onResetUniverseOrigin,
            });
          case h.A.Standing:
            return a.createElement(V, {
              imageUrl: "/dashboard/images/icons/svr_reset_tracking.svg",
              label: Object(l.c)("#PowerMenuResetStandingPosition"),
              onClick: this.onResetUniverseOrigin,
            });
          default:
            return null;
        }
      }
    }
    Object(r.b)([s.bind], U.prototype, "onTrackingSpaceChanged", null),
      Object(r.b)([s.bind], U.prototype, "onResetUniverseOrigin", null);
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
            b.b,
            {
              allowableParentSelectors: [".DashboardMain"],
              onPortalDidMount: this.onPortalDidMount,
            },
            a.createElement(
              h.jb,
              { color: this.props.tintColor },
              a.createElement(
                y.a,
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
                      curvature_origin_id: u.j,
                      origin: h.s.TopCenter,
                      interactive: !0,
                      scrollable: !0,
                      target_dpi_panel_id: D,
                      sort_depth_bias: this.props.sort_depth_bias,
                    },
                    a.createElement(
                      "div",
                      {
                        className: Object(p.a)(
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
                        curvature_origin_id: u.j,
                        origin: h.s.TopCenter,
                        interactive: !1,
                        scrollable: !1,
                        target_dpi_panel_id: D,
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
    Object(r.b)([s.bind], W.prototype, "onResizeObserved", null),
      Object(r.b)([s.bind], W.prototype, "updateBackgroundSize", null),
      Object(r.b)([s.bind], W.prototype, "onPortalDidMount", null);
    let G = class extends a.Component {
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
          O.d.settings.get(
            "/settings/audio/enablePlaybackMirrorIndependentVolume"
          ) && O.d.settings.get("/settings/audio/enablePlaybackMirror")
        );
      }
      get enableAudioMirrorControls() {
        return !!O.d.settings.get("/settings/audio/activePlaybackMirrorDevice");
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
              q,
              {
                onClick: v.a.Instance.toggleMicrophoneMute,
                title: v.a.Instance.microphoneMuted
                  ? Object(l.c)("#UnmuteMicrophone")
                  : Object(l.c)("#MuteMicrophone"),
              },
              a.createElement("img", {
                className: "BlackToWhite",
                src: v.a.Instance.microphoneMuted
                  ? "/dashboard/images/icons/svr_mic_mute.svg"
                  : "/dashboard/images/icons/svr_mic_active.svg",
              })
            ),
            a.createElement(z, {
              title: Object(l.c)("#MicrophoneVolume"),
              value: v.a.Instance.microphoneVolume,
              onChange: v.a.Instance.setMicrophoneVolume,
              onMouseEnter: this.onSliderMouseEnter,
              onMouseLeave: this.onSliderMouseLeave,
              onFinalChange: this.onSliderFinalChange,
              renderValue: (e) => Math.round(100 * e) + "%",
              valueStyleVariant: S.c.OnHandle,
              additionalClassName: Object(p.a)([
                "Muted",
                v.a.Instance.microphoneMuted,
              ]),
              interactionEndSoundEffect: d.a.VolumePreview,
            })
          ),
          this.showAudioMirrorControls &&
            a.createElement(
              "div",
              { className: "Section" },
              a.createElement(
                q,
                {
                  onClick: v.a.Instance.toggleMirrorMute,
                  enabled: this.enableAudioMirrorControls,
                  title: v.a.Instance.mirrorMuted
                    ? Object(l.c)("#UnmuteAudioMirror")
                    : Object(l.c)("#MuteAudioMirror"),
                },
                a.createElement("img", {
                  className: "BlackToWhite",
                  src: v.a.Instance.mirrorMuted
                    ? "/dashboard/images/icons/svr_volume_mirror_mute.svg"
                    : "/dashboard/images/icons/svr_volume_mirror.svg",
                })
              ),
              a.createElement(z, {
                title: Object(l.c)("#AudioMirrorVolume"),
                value: v.a.Instance.mirrorVolume,
                enabled: this.enableAudioMirrorControls,
                onChange: v.a.Instance.setMirrorVolume,
                onMouseEnter: this.onSliderMouseEnter,
                onMouseLeave: this.onSliderMouseLeave,
                onFinalChange: this.onSliderFinalChange,
                renderValue: (e) => Math.round(100 * e) + "%",
                valueStyleVariant: S.c.OnHandle,
                additionalClassName: Object(p.a)([
                  "Muted",
                  v.a.Instance.mirrorMuted,
                ]),
                interactionEndSoundEffect: d.a.VolumePreview,
              })
            ),
          a.createElement(
            "div",
            { className: "Section" },
            a.createElement(
              q,
              {
                onClick: v.a.Instance.toggleMute,
                title: v.a.Instance.muted
                  ? Object(l.c)("#Unmute_Headset")
                  : Object(l.c)("#Mute_Headset"),
              },
              a.createElement("img", {
                className: "BlackToWhite",
                src: v.a.Instance.muted
                  ? "/dashboard/images/icons/svr_volume_mute.svg"
                  : "/dashboard/images/icons/svr_volume.svg",
              })
            ),
            a.createElement(z, {
              title: Object(l.c)("#HeadsetVolume"),
              sliderRef: this.m_refSlider,
              value: v.a.Instance.volume,
              onChange: v.a.Instance.setVolume,
              onMouseEnter: this.onSliderMouseEnter,
              onMouseLeave: this.onSliderMouseLeave,
              onFinalChange: this.onSliderFinalChange,
              renderValue: (e) => Math.round(100 * e) + "%",
              valueStyleVariant: S.c.OnHandle,
              additionalClassName: Object(p.a)(["Muted", v.a.Instance.muted]),
              interactionEndSoundEffect: d.a.VolumePreview,
            })
          )
        );
      }
    };
    Object(r.b)([s.bind], G.prototype, "onSliderMouseEnter", null),
      Object(r.b)([s.bind], G.prototype, "onSliderMouseLeave", null),
      Object(r.b)([s.bind], G.prototype, "onSliderFinalChange", null),
      Object(r.b)([m.f], G.prototype, "showAudioMirrorControls", null),
      Object(r.b)([m.f], G.prototype, "enableAudioMirrorControls", null),
      (G = Object(r.b)([g.a], G));
    let z = class extends a.Component {
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
            a.createElement(A, {
              text: this.props.title,
              shown: this.state.bHover || this.state.bSliding,
            }),
          a.createElement(
            S.a,
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
    Object(r.b)([s.bind], z.prototype, "onMouseEnter", null),
      Object(r.b)([s.bind], z.prototype, "onMouseLeave", null),
      Object(r.b)([s.bind], z.prototype, "onInteractionStart", null),
      Object(r.b)([s.bind], z.prototype, "onInteractionEnd", null),
      (z = Object(r.b)([g.a], z));
    let q = class extends a.Component {
      constructor(e) {
        super(e), (this.m_refTooltip = a.createRef());
      }
      onMouseEnter(e) {
        var t, n, o;
        null === (t = this.m_refTooltip.current) || void 0 === t || t.show(),
          null === (o = (n = this.props).onMouseEnter) ||
            void 0 === o ||
            o.call(n, e);
      }
      onMouseLeave(e) {
        var t, n, o;
        null === (t = this.m_refTooltip.current) || void 0 === t || t.hide(),
          null === (o = (n = this.props).onMouseLeave) ||
            void 0 === o ||
            o.call(n, e);
      }
      render() {
        return a.createElement(
          c.a,
          Object.assign({}, this.props, {
            className: Object(p.a)(
              "ButtonControl",
              "Round",
              this.props.className
            ),
            onMouseEnter: this.onMouseEnter,
            onMouseLeave: this.onMouseLeave,
          }),
          this.props.title &&
            a.createElement(A, {
              text: this.props.title,
              ref: this.m_refTooltip,
            }),
          this.props.children
        );
      }
    };
    Object(r.b)([s.bind], q.prototype, "onMouseEnter", null),
      Object(r.b)([s.bind], q.prototype, "onMouseLeave", null),
      (q = Object(r.b)([g.a], q));
    let K = (i = class extends a.Component {
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
          i.MIN_DRAG_THRESHOLD && this.startSliding(t);
      }
      onWindowMouseUp(e) {
        this.stopSliding();
      }
      startSliding(e) {
        var t;
        null === (t = this.slider) || void 0 === t || t.startExternalSliding(e);
      }
      stopSliding() {
        var e, t, n, o;
        window.document.removeEventListener("mouseup", this.onWindowMouseUp),
          window.document.removeEventListener(
            "mousemove",
            this.onWindowMouseMove
          ),
          (null === (e = this.slider) || void 0 === e ? void 0 : e.isSliding) &&
            (null === (n = (t = this.props).onHideTray) ||
              void 0 === n ||
              n.call(t)),
          null === (o = this.slider) || void 0 === o || o.stopExternalSliding();
      }
      render() {
        return a.createElement(V, {
          imageUrl: v.a.Instance.muted
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
    (K.MIN_DRAG_THRESHOLD = 35),
      Object(r.b)([s.bind], K.prototype, "onButtonMouseDown", null),
      Object(r.b)([s.bind], K.prototype, "onWindowMouseMove", null),
      Object(r.b)([s.bind], K.prototype, "onWindowMouseUp", null),
      (K = i = Object(r.b)([g.a], K));
    const Y = (e) => {
      const t = a.useRef();
      return a.createElement(
        c.a,
        {
          className: Object(p.a)(
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
        e.title && a.createElement(A, { text: e.title, ref: t }),
        e.label && a.createElement("span", null, e.label),
        e.iconUrl &&
          a.createElement("img", {
            className: "Icon BlackToWhite",
            src: e.iconUrl,
          })
      );
    };
  },
  oW3A: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return l;
    });
    var o = n("mrSG"),
      i = n("q1tI"),
      r = n("okNM"),
      a = n("GXif"),
      s = n("uFkT");
    let l = class extends i.Component {
      render() {
        let e =
            null == this.props.bShowBackButton || this.props.bShowBackButton,
          t = "PageTitleLabel";
        return (
          this.props.strSubTitle || (t += " SingleTitle"),
          i.createElement(
            "div",
            {
              className:
                "PageTitleBar" + (s.a.IsSteamAvailable ? "" : " NoSteam"),
            },
            i.createElement(
              "div",
              { className: "FlexFullWidthRowCentered TitleBarMainRow" },
              i.createElement(
                "div",
                { className: "TitleBarSection" },
                e &&
                  i.createElement(
                    "div",
                    {
                      className:
                        "ButtonControl FlexRow PageTitleBackButton AllCaps",
                      onClick: () => {
                        this.props.fnOnClick();
                      },
                    },
                    i.createElement("img", {
                      className: "ActionButtonImage",
                      src: "images/bindingui/icon_back.svg",
                    }),
                    Object(a.c)("#Button_Back")
                  )
              ),
              i.createElement(
                "div",
                { className: "AllCaps PageTitle TitleBarSection FlexColumn" },
                i.createElement("div", { className: t }, this.props.strTitle),
                this.props.strSubTitle &&
                  i.createElement(
                    "div",
                    { className: "AllCaps PageSubTitle PageTitleLabel" },
                    this.props.strSubTitle
                  )
              ),
              i.createElement(
                "div",
                { className: "TitleBarSection RightBackButton" },
                e &&
                  i.createElement(
                    "div",
                    {
                      className:
                        "ButtonControl FlexRow PageTitleBackButton AllCaps",
                    },
                    i.createElement("img", {
                      className: "ActionButtonImage",
                      src: "images/bindingui/icon_back.svg",
                    }),
                    Object(a.c)("#Button_Back")
                  )
              )
            ),
            !s.a.IsSteamAvailable &&
              i.createElement(
                "div",
                { className: "NoSteamWarning" },
                Object(a.c)("#NoSteamWarning")
              )
          )
        );
      }
    };
    l = Object(o.b)([r.a], l);
  },
  "ru2+": function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return g;
    });
    var o = n("mrSG"),
      i = n("q1tI"),
      r = n("okNM"),
      a = n("7wIv"),
      s = n("GXif"),
      l = n("MYgy"),
      c = n("Z0gP"),
      d = n("2vnA"),
      p = n("uFkT"),
      h = n("6YgL"),
      u = n("hcOo"),
      m = n("TbT/");
    let b = class extends i.Component {
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
        return p.a.GetDeviceInfo(this.props.trackerPath);
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
        let o = null;
        return (
          this.IsConnected()
            ? this.IsIdentifiable() ||
              (o = Object(s.c)(
                "#Settings_ViveTracker_Identify_NotIdentifiable"
              ))
            : (o = Object(s.c)("#Settings_ViveTracker_Identify_NotConnected")),
          i.createElement(
            m.c,
            { className: "SettingsItem TrackerEntry" },
            i.createElement(
              "div",
              { className: "Label", title: t },
              i.createElement("span", null, n),
              i.createElement("div", {
                title: Object(s.c)(
                  this.IsConnected()
                    ? "#Settings_ViveTracker_Connected"
                    : "#Settings_ViveTracker_Disconnected"
                ),
                className: Object(u.a)(
                  "TrackerConnectionIndicator",
                  ["Connected", c.a.connected && this.IsConnected()],
                  ["Disconnected", c.a.connected && !this.IsConnected()]
                ),
              })
            ),
            i.createElement(
              "div",
              { className: Object(u.a)("SubsectionStem") },
              i.createElement(
                m.c,
                { title: o },
                i.createElement(
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
            i.createElement(
              "div",
              { className: "Subsection WithStem" },
              i.createElement(m.h, {
                label: Object(s.c)("#Settings_ViveTracker_Role"),
                items: this.props.validTrackerRoles.map((e) => ({
                  value: e,
                  sLabel: Object(s.c)("#" + e),
                })),
                value: this.trackerConfig.role,
                onChange: this.OnTrackerRoleChanged,
              }),
              e.length > 0 &&
                i.createElement(m.h, {
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
    Object(o.b)([d.f], b.prototype, "trackerConfig", null),
      Object(o.b)([a.bind], b.prototype, "OnTrackerRoleChanged", null),
      Object(o.b)([a.bind], b.prototype, "OnControllerRoleChanged", null),
      Object(o.b)([a.bind], b.prototype, "BuzzTracker", null),
      Object(o.b)([d.f], b.prototype, "deviceInfo", null),
      (b = Object(o.b)([r.a], b));
    let g = class extends i.Component {
      constructor(e) {
        super(e), (this.m_nGetInputStateIntervalHandle = 0);
      }
      componentDidMount() {
        (this.m_nGetInputStateIntervalHandle = window.setInterval(
          () => p.a.GetInputState(),
          2e3
        )),
          p.a.GetInputState();
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
              i.createElement(b, {
                key: n,
                trackerPath: t.device_path_string,
                validTrackerRoles: e.valid_roles,
              })
            )),
          i.createElement("div", { className: "TrackerEditorModal" }, t)
        );
      }
    };
    g = Object(o.b)([r.a], g);
  },
  vvDA: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return o;
    }),
      n.d(t, "a", function () {
        return l;
      });
    var o,
      i = n("mrSG"),
      r = n("q1tI"),
      a = n("7wIv"),
      s = n("/i/y");
    !(function (e) {
      (e[(e.HorizontalPips = 0)] = "HorizontalPips"),
        (e[(e.VerticalBattery = 1)] = "VerticalBattery");
    })(o || (o = {}));
    class l extends r.Component {
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
        let i = !1;
        if (t) {
          const t =
            null !=
            (e = s.mb.VRProperties.GetFloatProperty(
              this.props.trackedDeviceIndex,
              s.y.DeviceBatteryPercentage_Float
            ))
              ? e
              : 0;
          (i = s.mb.VRProperties.GetBoolProperty(
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
        let r = l.GetBatteryIcon(
            t,
            i,
            this.batteryLevelStable,
            o.HorizontalPips
          ),
          a = this.GetRoleIcon(n);
        (r == this.state.batteryIconPath && a == this.state.roleIconPath) ||
          this.setState({ batteryIconPath: r, roleIconPath: a });
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
      static GetBatteryIcon(e, t, n, i) {
        if (!e) return null;
        const r =
          i == o.VerticalBattery
            ? "images/icons/vert"
            : "images/icons/controller_model";
        return t
          ? n < 0.15
            ? r + "_charging_red.png"
            : r + "_charging.png"
          : 0 == n
          ? null
          : n < 0.15
          ? r + "_low.png"
          : n < 0.3
          ? r + "_battery_1.png"
          : n < 0.6
          ? r + "_battery_2.png"
          : n < 0.9
          ? r + "_battery_3.png"
          : r + "_battery_4.png";
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
        return r.createElement(
          s.Y,
          {
            width: void 0,
            height: void 0,
            interactive: !1,
            rendermodel_component_device_index: this.props.trackedDeviceIndex,
            rendermodel_component_name: "status",
            debug_name: "controllerstatus_" + this.props.trackedDeviceIndex,
          },
          r.createElement(
            "div",
            {
              className: "ControllerStatusRoot",
              style: { width: 256, height: 256 },
            },
            r.createElement(
              "div",
              { className: "ControllerStatusFrame" },
              r.createElement(
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
                r.createElement("img", {
                  className: "ControllerHand",
                  src: this.state.roleIconPath,
                })
              ),
              r.createElement(
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
                r.createElement("img", {
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
      Object(i.b)([a.bind], l.prototype, "OnBatteryStateChanged", null),
      Object(i.b)([a.bind], l.prototype, "OnDeviceRoleChanged", null),
      Object(i.b)([a.bind], l.prototype, "OnDeviceEvent", null);
  },
});
//# sourceMappingURL=controllerbindingui.js.map?v=5c73c75bcec94ddc0e5d