/*!
 * (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 *
 */ !(function (e) {
  function t(t) {
    for (
      var n, s, a = t[0], l = t[1], c = t[2], u = 0, p = [];
      u < a.length;
      u++
    )
      (s = a[u]),
        Object.prototype.hasOwnProperty.call(i, s) && i[s] && p.push(i[s][0]),
        (i[s] = 0);
    for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
    for (d && d(t); p.length; ) p.shift()();
    return o.push.apply(o, c || []), r();
  }
  function r() {
    for (var e, t = 0; t < o.length; t++) {
      for (var r = o[t], n = !0, a = 1; a < r.length; a++) {
        var l = r[a];
        0 !== i[l] && (n = !1);
      }
      n && (o.splice(t--, 1), (e = s((s.s = r[0]))));
    }
    return e;
  }
  var n = {},
    i = { 10: 0 },
    o = [];
  function s(t) {
    if (n[t]) return n[t].exports;
    var r = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, s), (r.l = !0), r.exports;
  }
  (s.m = e),
    (s.c = n),
    (s.d = function (e, t, r) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
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
      var r = Object.create(null);
      if (
        (s.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          s.d(
            r,
            n,
            function (t) {
              return e[t];
            }.bind(null, n),
          );
      return r;
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
  o.push(["2uOv", 0, 1]), r();
})({
  "/i/y": function (e, t, r) {
    "use strict";
    var n = r("mrSG"),
      i = r("7wIv"),
      o = r.n(i);
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
          let r = "ws://localhost:27062";
          this.m_sWebSecret && (r += "?secret=" + this.m_sWebSecret),
            (this.m_fnConnectResolve = e),
            (this.m_wsWebSocketToServer = new WebSocket(r)),
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
      static EnsureUniqueName(e) {
        if (e.includes("/")) return e;
        let t;
        return (
          (t = VRHTML ? VRHTML.GetWebHelperId() : Date.now().toString()),
          e + "/" + t + "_" + this.s_nNextMailboxNumber++
        );
      }
      Init(e, t) {
        return Object(n.a)(this, void 0, void 0, function* () {
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
          r = !1;
        if (
          (this.m_oHandlers.hasOwnProperty(t.type) &&
            (this.m_oHandlers[t.type](t), (r = !0)),
          this.m_oWaits.hasOwnProperty(t.type))
        ) {
          let e = !1;
          for (let r of this.m_oWaits[t.type])
            r.nMessageId == t.message_id && (r.callback(t), (e = !0));
          e
            ? (this.m_oWaits[t.type] = this.m_oWaits[t.type].filter(
                (e) => e.nMessageId == t.message_id,
              ))
            : console.log(
                `Received a ${t.type} message, but didn't have a ` +
                  "matching message_id. Did the other end forget to mirror message_id?",
              ),
            (r = !0);
        }
        r || console.log("Received unhandled message: ", t);
      }
      RegisterHandler(e, t) {
        this.m_oHandlers[e] = t;
      }
      SendMessage(e, t) {
        this.WebSocketSend("mailbox_send " + e + " " + JSON.stringify(t));
      }
      WaitForMessage(e, t) {
        return new Promise((r, n) => {
          this.m_oWaits[e] || (this.m_oWaits[e] = []),
            this.m_oWaits[e].push({ callback: r, nMessageId: t });
        });
      }
      WaitForConnect() {
        return new Promise((e, t) => {
          this.connected ? e() : this.m_oConnectWaits.push(e);
        });
      }
      WaitForMailbox(e) {
        return Object(n.a)(this, void 0, void 0, function* () {
          let t = {
            type: "request_mailbox_registration_notification",
            mailbox_name: e,
          };
          return this.SendMessageAndWaitForResponse(
            "web_server_mailbox",
            t,
            "mailbox_registered",
          );
        });
      }
      SendMessageAndWaitForResponse(e, t, r) {
        let n = Object.assign({}, t);
        return (
          null == n.returnAddress && (n.returnAddress = this.m_sMailboxName),
          (n.message_id = this.m_nNextMessageNumber++),
          this.SendMessage(e, n),
          this.WaitForMessage(r, n.message_id)
        );
      }
      SendResponse(e, t) {
        if (!e.returnAddress)
          throw new Error("Missing return address on message");
        let r = Object.assign(Object.assign({}, t), {
          message_id: e.message_id,
        });
        (r.message_id = e.message_id), this.SendMessage(e.returnAddress, r);
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
    function c(e, t, r) {
      return {
        x: t.x + e * (r.x - t.x),
        y: t.y + e * (r.y - t.y),
        z: t.z + e * (r.z - t.z),
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
        r = 0.5 * e.y,
        n = 0.5 * e.z,
        i = Math.cos(t),
        o = Math.cos(r),
        s = Math.cos(n),
        a = Math.sin(t),
        l = Math.sin(r),
        c = Math.sin(n);
      return {
        w: i * o * s + a * l * c,
        x: a * o * s + i * l * c,
        y: i * l * s - a * o * c,
        z: i * o * c - a * l * s,
      };
    }
    function b(e) {
      let t = e[0][0] + e[1][1] + e[2][2];
      if (t > 0) {
        let r = 2 * Math.sqrt(t + 1);
        return {
          w: 0.25 * r,
          x: (e[1][2] - e[2][1]) / r,
          y: (e[2][0] - e[0][2]) / r,
          z: (e[0][1] - e[1][0]) / r,
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
      let r = 2 * (e.y * t.z - e.z * t.y),
        n = 2 * (e.z * t.x - e.x * t.z),
        i = 2 * (e.x * t.y - e.y * t.x);
      return {
        x: t.x + e.w * r + e.y * i - e.z * n,
        y: t.y + e.w * n + e.z * r - e.x * i,
        z: t.z + e.w * i + e.x * n - e.y * r,
      };
    }
    function y(e, t, r) {
      return [
        [e.x, e.y, e.z],
        [t.x, t.y, t.z],
        [r.x, r.y, r.z],
      ];
    }
    function S(e) {
      return v(e.rotation, { x: 0, y: 0, z: 1 });
    }
    function f(e) {
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
    function O(e) {
      let t = e.w * e.w + e.x * e.x + e.y * e.y + e.z * e.z;
      return { w: e.w / t, x: -e.x / t, y: -e.y / t, z: -e.z / t };
    }
    (s.s_nNextMailboxNumber = 1),
      Object(n.b)([i.bind], s.prototype, "OpenWebSocketToHost", null),
      Object(n.b)([i.bind], s.prototype, "OnWebSocketOpen", null),
      Object(n.b)([i.bind], s.prototype, "OnWebSocketClose", null),
      Object(n.b)([i.bind], s.prototype, "WebSocketSend", null),
      Object(n.b)([i.bind], s.prototype, "OnWebSocketMessage", null);
    var D = r("q1tI");
    function k(e, t) {
      let r = e.getAttribute(t);
      if (r && r.length > 0) {
        if ("undefined" == r) return;
        let e = [];
        for (let t of r.split(" ")) 0 != t.length && e.push(parseFloat(t));
        if (e.length > 0) return e;
      }
    }
    function M(e, t) {
      let r = e.getAttribute(t);
      if (r && r.length > 0) return parseFloat(r);
    }
    function E(e, t) {
      let r = e.getAttribute(t);
      if (r && r.length > 0) return parseInt(r);
    }
    function R(e, t) {
      let r = e.getAttribute(t);
      if (r && r.length > 0)
        return (
          "true" == r ||
          (r.length > 0 && 0 != parseInt(r) && !isNaN(parseInt(r)))
        );
    }
    function I(e, t) {
      let r = e.getAttribute(t);
      if (r && r.length > 0) return r;
    }
    function w(e, t) {
      return H(I(e, t));
    }
    function T(e, t) {
      let r = { type: e, properties: {} };
      return (
        t.id && (r.properties.id = H(t.id)),
        (r.properties.sgid = E(t, "sgid")),
        r
      );
    }
    function P(e, t) {
      let [r, n] = (function (e, t) {
          let r = t.buildNode;
          if (r) return r(e, t);
          let n = Object.assign({}, e),
            i = null;
          switch (t.nodeName.toUpperCase()) {
            case "VSG-TRANSFORM":
              (i = T("transform", t)),
                (i.properties.translation = k(t, "translation")),
                (i.properties.rotation = k(t, "rotation")),
                (i.properties.scale = k(t, "scale")),
                (i.properties["parent-path"] = I(t, "parent-path")),
                (i.properties["parent-origin"] = I(t, "parent-origin")),
                (i.properties["parent-id"] = w(t, "parent-id"));
              break;
            case "VSG-TRACKING-STATE-VISIBILITY":
              (i = T("trackingstatevisibility", t)),
                (i.properties["visible-0dof"] = R(t, "visible-0dof")),
                (i.properties["visible-3dof"] = R(t, "visible-3dof")),
                (i.properties["visible-6dof"] = R(t, "visible-6dof"));
              break;
            case "VSG-ELASTIC-HEAD-TRANSFORM":
              (i = T("elasticheadtransform", t)),
                (i.properties["start-angle-threshold"] = M(
                  t,
                  "start-angle-threshold",
                )),
                (i.properties["stop-angle-threshold"] = M(
                  t,
                  "stop-angle-threshold",
                )),
                (i.properties["ease-in-time"] = M(t, "ease-in-time")),
                (i.properties["ease-in-power"] = M(t, "ease-in-power")),
                (i.properties["ease-out-angle-threshold"] = M(
                  t,
                  "ease-out-angle-threshold",
                )),
                (i.properties["ease-out-power"] = M(t, "ease-out-power")),
                (i.properties["min-angular-velocity"] = M(
                  t,
                  "min-angular-velocity",
                )),
                (i.properties["max-angular-velocity"] = M(
                  t,
                  "max-angular-velocity",
                )),
                (i.properties["lock-to-horizon"] = R(t, "lock-to-horizon")),
                (i.properties["translation-behavior"] = E(
                  t,
                  "translation-behavior",
                ));
              break;
            case "VSG-LINE":
              (i = T("line", t)),
                (i.properties["target-id"] = w(t, "target-id")),
                (i.properties.thickness = M(t, "thickness")),
                (i.properties["start-buffer"] = M(t, "start-buffer")),
                (i.properties["end-buffer"] = M(t, "end-buffer"));
              break;
            case "VSG-LINE-CONSTRAINED-TRANSFORM":
              (i = T("line-constrained-transform", t)),
                (i.properties["target-id"] = w(t, "target-id")),
                (i.properties["source-id"] = w(t, "source-id")),
                (i.properties["source-distance"] = M(t, "source-distance")),
                (i.properties["target-limit"] = M(t, "target-limit"));
              break;
            case "VSG-CALLOUT-TRANSFORM":
              (i = T("callout-transform", t)),
                (i.properties.offset = k(t, "offset"));
              break;
            case "VSG-HEAD-FACING-TRANSFORM":
              i = T("head-facing-transform", t);
              break;
            case "VSG-PIN-TO-VIEW-TRANSFORM":
              (i = T("pin-to-view-transform", t)),
                (i.properties["offscreen-z-depth"] = M(t, "offscreen-z-depth")),
                (i.properties["off-axis-limit"] = M(t, "off-axis-limit")),
                (i.properties["transition-limit"] = M(t, "transition-limit"));
          }
          return [n, i];
        })(e, t),
        i = [];
      for (let e = 0; e < t.children.length; e++) {
        let n = t.children.item(e);
        if (n.children) {
          let e = P(r, n);
          e && (i = i.concat(e));
        }
      }
      return r.bShouldAbort
        ? null
        : n
          ? (i.length > 0 && (n.children = i), [n])
          : i.length > 0
            ? 1 == i.length
              ? i
              : [{ children: i }]
            : null;
    }
    let x,
      N,
      V,
      B,
      L = [],
      F = null,
      A = null,
      j = null;
    function U(e, t) {
      return e + "::" + t;
    }
    function H(e) {
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
        : x;
    }
    function W() {
      B = !0;
    }
    function G(e) {
      e != j && ((j = e), q());
    }
    function q() {
      F ||
        (F = window.setTimeout(
          () =>
            Object(n.a)(this, void 0, void 0, function* () {
              let e = document.body;
              N && (e = N);
              let t = {
                type: "root",
                rootproperties: {
                  relatchDashboardTransform: B,
                  sceneCompositeMult: j,
                },
                children: P({ currentPanel: null, bShouldAbort: !1 }, e),
              };
              if (VRHTML) {
                let e = JSON.stringify(t);
                VRHTML.UpdateSceneGraph(e, L);
              } else {
                A ||
                  (console.log("Initializing sg_mailbox"),
                  (A = new s()),
                  yield A.Init("sg_mailbox", V));
                let e = {
                  type: "update_scene_graph",
                  owning_overlay_key: x,
                  scene_graph: t,
                  retired_sgids: L,
                };
                A.SendMessage("vrcompositor_mailbox", e);
              }
              (F = null), (L = []), (B = !1);
            }),
          0,
        ));
    }
    function K(e, t) {
      return e ? { x: e.x ? e.x : t.x, y: e.y ? e.y : t.y } : t;
    }
    function Q(e, t) {
      return e
        ? { x: e.x ? e.x : t.x, y: e.y ? e.y : t.y, z: e.z ? e.z : t.z }
        : t;
    }
    function X(e, t) {
      return e
        ? { r: e.r ? e.r : t.r, g: e.g ? e.g : t.g, b: e.b ? e.b : t.b }
        : t;
    }
    function Y(e) {
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
    class J extends D.Component {
      constructor(e) {
        super(e),
          (this.m_domRef = D.createRef()),
          (this.m_buildNodeOverride = null),
          (this.m_SGID = J.s_NextSGID),
          (J.s_NextSGID = (J.s_NextSGID + 1) % 4294967296);
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
        return T(this.getNodeType(), e);
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
          L.push(e),
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
    J.s_NextSGID = 1;
    class $ extends J {
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
    Object(n.b)([o.a], $.prototype, "buildNode", null);
    class ee extends J {
      constructor(e) {
        super(e), super.setBuildNodeOverride(this.buildNode);
      }
      getNodeType() {
        return "mountedscenegraph";
      }
      buildNode(e, t) {
        const r = this.createSgNode(t);
        return (r.properties.mountable_id = H(this.props.mountedId)), [e, r];
      }
    }
    Object(n.b)([o.a], ee.prototype, "buildNode", null);
    class te extends J {
      constructor(e) {
        var t;
        if (
          (super(e),
          void 0 !== this.props.iconUri && void 0 !== this.props.iconOverlayKey)
        )
          throw new Error(
            "DashboardTab cannot have both an explicit iconUri and iconOverlayKey set in props.",
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
        var r;
        const n = this.createSgNode(t);
        return (
          (n.properties.tab_name = null != (r = this.props.tabName) ? r : ""),
          (n.properties.mountable_id = H(this.m_sMountableUnqualifiedID)),
          (n.properties.icon_uri = this.props.iconUri),
          (n.properties.icon_overlay_key = this.props.iconOverlayKey),
          (n.properties.summon_overlay_key = this.props.summonOverlayKey),
          [e, n]
        );
      }
      internalRender() {
        return D.createElement(
          "vsg-node",
          { id: this.props.id },
          D.createElement(
            $,
            { id: this.m_sMountableUnqualifiedID },
            this.props.children,
          ),
        );
      }
    }
    Object(n.b)([o.a], te.prototype, "buildNode", null);
    class re extends J {
      constructor(e) {
        super(e), super.setBuildNodeOverride(this.buildNode);
      }
      getNodeType() {
        return "tint";
      }
      buildNode(e, t) {
        const r = this.createSgNode(t);
        if (this.props.color)
          if ("string" == typeof this.props.color)
            r.properties.color = this.props.color;
          else {
            let e = X(this.props.color, { r: 1, g: 1, b: 1 });
            r.properties.color = [e.r, e.g, e.b];
          }
        else r.properties.color = [1, 1, 1];
        return [e, r];
      }
    }
    Object(n.b)([o.a], re.prototype, "buildNode", null);
    class ne extends J {
      constructor(e) {
        super(e), super.setBuildNodeOverride(this.buildNode);
      }
      getNodeType() {
        return "opacity";
      }
      buildNode(e, t) {
        const r = this.createSgNode(t);
        return (r.properties.opacity = this.props.value), [e, r];
      }
    }
    var ie, oe, se, ae, le, ce, de, ue, pe, he, me;
    Object(n.b)([o.a], ne.prototype, "buildNode", null),
      (function (e) {
        (e[(e.Seated = 0)] = "Seated"),
          (e[(e.Standing = 1)] = "Standing"),
          (e[(e.Raw = 2)] = "Raw");
      })(ie || (ie = {}));
    class ge extends J {
      constructor(e) {
        if (
          (super(e),
          (void 0 === e.parent_path ? 0 : 1) +
            (void 0 === e.parent_origin ? 0 : 1) +
            (void 0 === e.parent_id ? 0 : 1) >
            1)
        )
          throw new Error(
            "Transform cannot have more than one parent_ property set.",
          );
      }
      internalRender() {
        let e, t, r;
        this.props.transform
          ? ((e = this.props.transform.translation),
            (t = this.props.transform.rotation),
            (r = this.props.transform.scale))
          : ((e = Q(this.props.translation, { x: 0, y: 0, z: 0 })),
            (t = _(
              h(Q(this.props.rotation, { x: 0, y: 0, z: 0 }), Math.PI / 180),
            )),
            (r =
              "number" == typeof this.props.scale
                ? {
                    x: this.props.scale,
                    y: this.props.scale,
                    z: this.props.scale,
                  }
                : Q(this.props.scale, { x: 1, y: 1, z: 1 })));
        let n = Z(e),
          i = (function (e) {
            if (e) return e.w + " " + e.x + " " + e.y + " " + e.z;
          })(t),
          o = Z(r);
        return D.createElement(
          "vsg-transform",
          {
            translation: n,
            rotation: i,
            scale: o,
            "parent-path": this.props.parent_path,
            "parent-origin": ie[this.props.parent_origin],
            "parent-id": this.props.parent_id,
          },
          this.props.children,
        );
      }
    }
    class _e extends J {
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
          this.props.children,
        );
      }
    }
    function be(e) {
      if (e) return [e.u, e.v];
    }
    function ve(e) {
      switch (e) {
        case oe.TopLeft:
          return { x: -1, y: 1 };
        case oe.TopCenter:
          return { x: 0, y: 1 };
        case oe.TopRight:
          return { x: 1, y: 1 };
        case oe.CenterLeft:
          return { x: -1, y: 0 };
        case oe.Center:
          return { x: 0, y: 0 };
        case oe.CenterRight:
          return { x: 1, y: 0 };
        case oe.BottomLeft:
          return { x: -1, y: -1 };
        case oe.BottomCenter:
          return { x: 0, y: -1 };
        case oe.BottomRight:
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
    })(oe || (oe = {})),
      (function (e) {
        (e[(e.Auto = 0)] = "Auto"), (e[(e.SingleTap = 1)] = "SingleTap");
      })(se || (se = {})),
      (function (e) {
        (e[(e.Mono = 0)] = "Mono"),
          (e[(e.Parallel = 1)] = "Parallel"),
          (e[(e.Crossed = 2)] = "Crossed"),
          (e[(e.Panorama = 3)] = "Panorama"),
          (e[(e.StackedPanorama = 4)] = "StackedPanorama");
      })(ae || (ae = {})),
      (function (e) {
        (e[(e.Visible = 0)] = "Visible"),
          (e[(e.SkipInSceneGraph = 1)] = "SkipInSceneGraph"),
          (e[(e.Hidden = 2)] = "Hidden");
      })(le || (le = {}));
    class ye extends J {
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
            "Panel requires both rendermodel_component_device_index and rendermodel_component_name to be a rendermodel texture.",
          );
        if (
          void 0 === this.props.width &&
          void 0 === this.props.height &&
          void 0 === this.props.target_dpi_panel_id &&
          !t
        )
          throw new Error(
            "Panel requires either an explicit width, an explicit height, both an explicit width and height, a target_panel_dpi, or be a rendermodel panel.",
          );
        if (
          (void 0 !== this.props.width || void 0 !== this.props.height) &&
          void 0 !== this.props.target_dpi_panel_id
        )
          throw new Error(
            "Panel cannot have both an explicit width/height and target_panel_dpi.",
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
          (this.m_nEmbeddedIndex = Se.Current().addEmbeddedPanelUVs(this)),
          (ye.s_bPanelsAreDirty = !0),
          this.getCurrentRootElement().addEventListener(
            "mousedown",
            this.onPanelMouseDown,
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
            this.onPanelMouseDown,
          ),
          (ye.s_bPanelsAreDirty = !0),
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
            e.height - t.height - t.y,
          ),
          this.createOverdragBlockingElement(0, t.y, t.x, t.height),
          this.createOverdragBlockingElement(
            t.x + t.width,
            t.y,
            e.width - t.width - t.x,
            t.height,
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
      createOverdragBlockingElement(e, t, r, n) {
        let i = document.createElement("div");
        (i.style.position = "absolute"),
          (i.style.top = t + "px"),
          (i.style.left = e + "px"),
          (i.style.width = r + "px"),
          (i.style.height = n + "px"),
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
        return null != (e = this.props.visibility) ? e : le.Visible;
      }
      buildNode(e, t) {
        var r, n, i, o;
        if (this.visibility != le.Visible) return [e, null];
        let s = Object.assign({}, e),
          a = this.createSgNode(t),
          l = { x: 0, y: 0 };
        l =
          "object" == typeof this.props.origin
            ? K(this.props.origin, { x: 0, y: 0 })
            : ve(this.props.origin);
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
          (a.properties.uv_min = null != (r = be(this.m_UVsMin)) ? r : void 0),
          (a.properties.uv_max = null != (n = be(this.m_UVsMax)) ? n : void 0),
          (a.properties.width = null != (i = this.props.width) ? i : void 0),
          (a.properties.height = null != (o = this.props.height) ? o : void 0),
          (a.properties["target-dpi-panel-id"] = H(
            this.props.target_dpi_panel_id,
          )),
          (a.properties["target-dpi-multiplier"] =
            this.props.target_dpi_multiplier),
          (a.properties.curvature = this.props.curvature),
          (a.properties["curvature-origin-id"] = H(
            this.props.curvature_origin_id,
          )),
          (a.properties.interactive = this.props.interactive),
          (a.properties.scrollable = this.props.scrollable),
          (a.properties.modal = this.props.modal),
          (a.properties["embedded-uv-index"] = this.m_nEmbeddedIndex),
          (a.properties.origin = Y(l)),
          (a.properties.debug_name = this.props.debug_name),
          (a.properties.sampler = this.props.sampler),
          (a.properties.reflect = this.props.reflect),
          (a.properties.stereoscopy = this.props.stereoscopy),
          (a.properties.rendermodel_component_device_index =
            this.props.rendermodel_component_device_index),
          (a.properties.rendermodel_component_name =
            this.props.rendermodel_component_name),
          (a.properties["texture-id"] = H(this.props.texture_id)),
          (a.properties["sort-order"] = this.props.sort_order),
          (a.properties["sort-depth-bias"] = this.props.sort_depth_bias),
          (s.currentPanel = this),
          [s, a]
        );
      }
      scaleLocalUVToGlobal(e) {
        const t = this.m_UVsMax.u - this.m_UVsMin.u,
          r = this.m_UVsMax.v - this.m_UVsMin.v;
        return { u: this.m_UVsMin.u + t * e.u, v: this.m_UVsMin.v + r * e.v };
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
          { style: { display: this.visibility == le.Hidden ? "none" : null } },
          this.props.children,
        );
      }
    }
    (ye.s_bPanelsAreDirty = !1),
      Object(n.b)([o.a], ye.prototype, "onResizeObserved", null),
      Object(n.b)([o.a], ye.prototype, "onPanelMouseDown", null),
      Object(n.b)([o.a], ye.prototype, "onWindowMouseUp", null),
      Object(n.b)([o.a], ye.prototype, "buildNode", null);
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
        let r = Math.max(0, Math.floor((this.m_nEmbeddedDataWidth - 1) / 3));
        for (let e = 0; e < r; e++)
          this.m_rAvailableEmbeddedIndicesQueue.push(e);
        var n, i, o;
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
            ((n = this.props.owning_overlay_key),
            (i = this.m_DomRef.current),
            (o = this.props.web_secret),
            (x = n),
            (N = i),
            (V = o),
            console.log("Setting owning overlay key to " + n));
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
        (this.m_CanvasRef.current.width = this.m_nEmbeddedDataWidth),
          (this.m_CanvasContext = this.m_CanvasRef.current.getContext("2d")),
          (this.m_CanvasContext.globalCompositeOperation = "copy"),
          (this.m_CanvasContext.imageSmoothingEnabled = !1),
          null === this.m_Pixels &&
            (this.m_Pixels = this.m_CanvasContext.createImageData(
              this.m_nEmbeddedDataWidth,
              Se.k_EmbeddedDataRows,
            )),
          this.updateAllPanelBounds();
      }
      updateAllPanelBounds() {
        let e = this.m_DomRef.current.ownerDocument.defaultView,
          t = this.m_scalingDomRef.current.getBoundingClientRect(),
          r = t.width / this.m_fCurrentScale,
          n = t.height / this.m_fCurrentScale,
          i = { x: e.innerWidth / r, y: e.innerHeight / n },
          o = Math.min(i.x, i.y, 1);
        o != this.m_fCurrentScale &&
          (1 != o
            ? this.m_scalingDomRef.current.setAttribute(
                "style",
                "transform: scale(" + o + "); transform-origin: top left",
              )
            : this.m_scalingDomRef.current.removeAttribute("style"),
          (this.m_fCurrentScale = o),
          (ye.s_bPanelsAreDirty = !0)),
          ye.s_bPanelsAreDirty &&
            (this.m_mapPanels.forEach((e) => e.updateLayoutValues()),
            q(),
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
            "G".charCodeAt(0),
          ),
          this.m_rEmbeddedIndicesToClear.forEach((e) => {
            let t = 1 + 3 * e;
            for (let e = 0; e < 3; e++) this.setPixel(t + e, 0, 0, 0, 0);
          }),
          (this.m_rEmbeddedIndicesToClear = []),
          this.m_mapPanels.forEach((e, t) => {
            let r = e.m_Rect.x,
              n = e.m_Rect.x + e.m_Rect.width,
              i = e.m_Rect.y,
              o = e.m_Rect.y + e.m_Rect.height,
              s = 1 + 3 * e.getEmbeddedIndex();
            if (e.isExternal() || r >= n || i >= o)
              for (let e = 0; e < 3; e++) this.setPixel(s + 1, 0, 0, 0, 0);
            else
              this.setPixel(s, (65280 & r) >> 8, 255 & r, 0),
                this.setPixel(s + 1, (65280 & n) >> 8, 255 & n, 255 & i),
                this.setPixel(
                  s + 2,
                  (65280 & o) >> 8,
                  255 & o,
                  (65280 & i) >> 8,
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
          this.m_Pixels.height,
        ),
          (this.m_nDirtyXMin = -1),
          (this.m_nDirtyXMax = -1);
      }
      setPixel(e, t, r, n, i = 255) {
        (this.m_Pixels.data[4 * e + 0] = t),
          (this.m_Pixels.data[4 * e + 1] = r),
          (this.m_Pixels.data[4 * e + 2] = n),
          (this.m_Pixels.data[4 * e + 3] = i),
          (-1 === this.m_nDirtyXMin || e < this.m_nDirtyXMin) &&
            (this.m_nDirtyXMin = e),
          (-1 === this.m_nDirtyXMax || e > this.m_nDirtyXMax) &&
            (this.m_nDirtyXMax = e);
      }
    }
    (Se.s_Current = null),
      (Se.k_EmbeddedDataRows = 1),
      Object(n.b)([i.bind], Se.prototype, "toggleDebugPointer", null),
      Object(n.b)([i.bind], Se.prototype, "onMouseMove", null),
      Object(n.b)([i.bind], Se.prototype, "forceLayoutUpdate", null),
      Object(n.b)([i.bind], Se.prototype, "onMutation", null);
    Object(n.b)(
      [o.a],
      class extends J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "texture";
        }
        buildNode(e, t) {
          const r = this.createSgNode(t);
          return (
            (r.properties.id = this.props.id),
            (r.properties.source = this.props.source),
            [e, r]
          );
        }
      }.prototype,
      "buildNode",
      null,
    ),
      (function (e) {
        (e[(e.None = 0)] = "None"), (e[(e.Backface = 1)] = "Backface");
      })(ce || (ce = {}));
    class fe extends J {
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
          (r.properties["texture-id"] = H(this.props["texture-id"])),
          this.props.fresnel)
        ) {
          let e = this.props.fresnel;
          if ("string" == typeof e.color) r.properties.color = e.color;
          else {
            let t = X(e.color, { r: 0, g: 0, b: 0 });
            r.properties.color = [t.r, t.g, t.b];
          }
          (r.properties.opacity = e.opacity ? e.opacity : 1),
            (r.properties.strength = e.strength ? e.strength : 1);
        }
        return (
          (r.properties.wireframe = this.props.wireframe),
          (r.properties.solid = this.props.solid),
          (r.properties.culling = this.props.culling),
          (r.properties["no-depth-write"] = this.props["no-depth-write"]),
          (r.properties["no-depth-test"] = this.props["no-depth-test"]),
          [e, r]
        );
      }
    }
    Object(n.b)([o.a], fe.prototype, "buildNode", null);
    class Ce extends J {
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
    class Oe extends J {
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
          this.props.children,
        );
      }
    }
    class De extends J {
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
        let r = null;
        "object" == typeof this.props.location
          ? (r = K(this.props.location, { x: 0, y: 0 }))
          : "number" == typeof this.props.location &&
            (r = ve(this.props.location));
        let n = this.createSgNode(t);
        if (this.props.latched && null !== this.m_latchedPosition)
          (n.properties["anchor-u"] = this.m_latchedPosition.u),
            (n.properties["anchor-v"] = this.m_latchedPosition.v);
        else if (r) {
          const t = { u: 0.5 * r.x + 0.5, v: -0.5 * r.y + 0.5 },
            i = e.currentPanel.props.overlay_key
              ? t
              : e.currentPanel.scaleLocalUVToGlobal(t);
          (n.properties["anchor-u"] = i.u), (n.properties["anchor-v"] = i.v);
        } else {
          const r = t.ownerDocument,
            i = t.getBoundingClientRect(),
            o = i.left + i.width / 2,
            s = i.top + i.height / 2,
            a = e.currentPanel.m_Rect;
          if (o < a.x || o > a.x + a.width || s < a.y || s > a.y + a.height)
            return [
              Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
              null,
            ];
          const l = r.defaultView.innerWidth,
            c = r.defaultView.innerHeight;
          if (!(c > 0 && l > 0))
            return [
              Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
              null,
            ];
          (n.properties["anchor-u"] = o / l),
            (n.properties["anchor-v"] = s / c);
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
    Object(n.b)([o.a], De.prototype, "buildNode", null);
    !(function (e) {
      (e[(e.LockedToParent = 0)] = "LockedToParent"),
        (e[(e.LockedToWorld = 1)] = "LockedToWorld");
    })(de || (de = {}));
    class ke extends J {
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
          r = this.props.ease_out_angle_threshold
            ? (this.props.ease_out_angle_threshold * Math.PI) / 180
            : null,
          n = this.props.min_angular_velocity
            ? (this.props.min_angular_velocity * Math.PI) / 180
            : null,
          i = this.props.max_angular_velocity
            ? (this.props.max_angular_velocity * Math.PI) / 180
            : null;
        return D.createElement(
          "vsg-elastic-head-transform",
          {
            "start-angle-threshold": e,
            "stop-angle-threshold": t,
            "ease-in-time": this.props.ease_in_time,
            "ease-in-power": this.props.ease_in_power,
            "ease-out-angle-threshold": r,
            "ease-out-power": this.props.ease_out_power,
            "min-angular-velocity": n,
            "max-angular-velocity": i,
            "lock-to-horizon": this.props.lock_to_horizon,
            "translation-behavior": this.props.translation_behavior,
          },
          this.props.children,
        );
      }
    }
    class Me extends J {
      constructor(e) {
        super(e);
      }
      internalRender() {
        return D.createElement(
          "vsg-head-facing-transform",
          null,
          this.props.children,
        );
      }
    }
    function Ee() {
      var e, t;
      return null !=
        (t = null === (e = VRHTML) || void 0 === e ? void 0 : e.Environment())
        ? t
        : ue.Unknown;
    }
    !(function (e) {
      (e[(e.Desktop = 1)] = "Desktop"),
        (e[(e.Overlay = 2)] = "Overlay"),
        (e[(e.Unknown = 100)] = "Unknown");
    })(ue || (ue = {})),
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
      })(he || (he = {})),
      (function (e) {
        (e[(e.Seated = 0)] = "Seated"),
          (e[(e.Standing = 1)] = "Standing"),
          (e[(e.RawAndUncalibrated = 2)] = "RawAndUncalibrated");
      })(me || (me = {}));
    var Re, Ie, we, Te, Pe, xe, Ne, Ve, Be, Le, Fe, Ae, je, Ue, He, ze;
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
      })(Ie || (Ie = {})),
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
      })(we || (we = {})),
      (function (e) {
        (e[(e.None = 0)] = "None"), (e[(e.Mouse = 1)] = "Mouse");
      })(Te || (Te = {})),
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
      })(Pe || (Pe = {})),
      (function (e) {
        (e[(e.Invalid = 0)] = "Invalid"),
          (e[(e.HMD = 1)] = "HMD"),
          (e[(e.Controller = 2)] = "Controller"),
          (e[(e.GenericTracker = 3)] = "GenericTracker"),
          (e[(e.TrackingReference = 4)] = "TrackingReference"),
          (e[(e.DisplayRedirect = 5)] = "DisplayRedirect");
      })(xe || (xe = {})),
      (function (e) {
        (e[(e.Unknown = 0)] = "Unknown"),
          (e[(e.NVIDIA = 1)] = "NVIDIA"),
          (e[(e.AMD = 2)] = "AMD");
      })(Ne || (Ne = {})),
      (function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Starting = 1)] = "Starting"),
          (e[(e.Quitting = 2)] = "Quitting"),
          (e[(e.Running = 3)] = "Running"),
          (e[(e.Waiting = 4)] = "Waiting");
      })(Ve || (Ve = {})),
      (function (e) {
        (e[(e.ButtonPress_0 = 0)] = "ButtonPress_0"),
          (e[(e.ButtonPress_1 = 1)] = "ButtonPress_1"),
          (e[(e.ButtonPress_2 = 2)] = "ButtonPress_2"),
          (e[(e.ButtonPress_3 = 3)] = "ButtonPress_3"),
          (e[(e.CouldntFindSystemOverlay = 4)] = "CouldntFindSystemOverlay"),
          (e[(e.CouldntFindOrCreateClientOverlay = 5)] =
            "CouldntFindOrCreateClientOverlay"),
          (e[(e.ApplicationQuit = 6)] = "ApplicationQuit");
      })(Be || (Be = {})),
      (function (e) {
        (e[(e.Normal = 0)] = "Normal"),
          (e[(e.Password = 1)] = "Password"),
          (e[(e.Submit = 2)] = "Submit");
      })(Le || (Le = {})),
      (function (e) {
        (e[(e.SingleLine = 0)] = "SingleLine"),
          (e[(e.MultipleLines = 1)] = "MultipleLines");
      })(Fe || (Fe = {})),
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
      })(Ue || (Ue = {})),
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
      })(He || (He = {})),
      (function (e) {
        (e[(e.Minimal = 1)] = "Minimal"), (e[(e.Modal = 2)] = "Modal");
      })(ze || (ze = {}));
    class We extends D.Component {
      constructor(e) {
        super(e);
        let t = {};
        if (VRHTML)
          try {
            let e = VRHTML.VRProperties.GetStringProperty(
              this.props.sDevicePath,
              Pe.RenderModelName_String,
            );
            if (e) {
              let r = VRHTML.VRRenderModelsInternal.FindComponentForInputSource(
                e,
                this.props.sInputPath,
              );
              if (r) {
                let n = VRHTML.VRRenderModels.GetComponentStateForDevicePath(
                  e,
                  r,
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
        return D.createElement(
          ge,
          {
            id: this.props.id,
            parent_path: this.props.sDevicePath,
            transform: this.state.xfTransform,
          },
          this.props.children,
        );
      }
    }
    class Ge extends J {
      constructor(e) {
        super(e);
      }
      internalRender() {
        return D.createElement(
          "vsg-callout-transform",
          { offset: Z(this.props.vOffset) },
          this.props.children,
        );
      }
    }
    class qe extends J {
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
    Object(n.b)([o.a], qe.prototype, "buildNode", null),
      r.d(t, "c", function () {
        return s;
      }),
      r.d(t, "g", function () {
        return a;
      }),
      r.d(t, "a", function () {
        return l;
      }),
      r.d(t, "N", function () {
        return c;
      }),
      r.d(t, "fb", function () {
        return d;
      }),
      r.d(t, "gb", function () {
        return u;
      }),
      r.d(t, "T", function () {
        return p;
      }),
      r.d(t, "U", function () {
        return h;
      }),
      r.d(t, "L", function () {
        return m;
      }),
      r.d(t, "M", function () {
        return g;
      }),
      r.d(t, "G", function () {
        return _;
      }),
      r.d(t, "Q", function () {
        return b;
      }),
      r.d(t, "S", function () {
        return v;
      }),
      r.d(t, "b", function () {
        return y;
      }),
      r.d(t, "H", function () {
        return S;
      }),
      r.d(t, "V", function () {
        return f;
      }),
      r.d(t, "h", function () {
        return C;
      }),
      r.d(t, "K", function () {
        return O;
      }),
      r.d(t, "j", function () {
        return te;
      }),
      r.d(t, "hb", function () {
        return re;
      }),
      r.d(t, "W", function () {
        return ne;
      }),
      r.d(t, "R", function () {
        return ee;
      }),
      r.d(t, "z", function () {
        return ie;
      }),
      r.d(t, "jb", function () {
        return ge;
      }),
      r.d(t, "ib", function () {
        return _e;
      }),
      r.d(t, "f", function () {
        return U;
      }),
      r.d(t, "bb", function () {
        return W;
      }),
      r.d(t, "eb", function () {
        return G;
      }),
      r.d(t, "P", function () {
        return q;
      }),
      r.d(t, "db", function () {
        return Se;
      }),
      r.d(t, "t", function () {
        return ce;
      }),
      r.d(t, "cb", function () {
        return fe;
      }),
      r.d(t, "O", function () {
        return Ce;
      }),
      r.d(t, "ab", function () {
        return Oe;
      }),
      r.d(t, "Y", function () {
        return De;
      }),
      r.d(t, "r", function () {
        return oe;
      }),
      r.d(t, "s", function () {
        return se;
      }),
      r.d(t, "Z", function () {
        return le;
      }),
      r.d(t, "X", function () {
        return ye;
      }),
      r.d(t, "E", function () {
        return ke;
      }),
      r.d(t, "J", function () {
        return Me;
      }),
      r.d(t, "e", function () {
        return We;
      }),
      r.d(t, "d", function () {
        return Ge;
      }),
      r.d(t, "k", function () {
        return qe;
      }),
      r.d(t, "F", function () {
        return ue;
      }),
      r.d(t, "i", function () {
        return Ee;
      }),
      r.d(t, "q", function () {
        return pe;
      }),
      r.d(t, "y", function () {
        return me;
      }),
      r.d(t, "mb", function () {
        return 0;
      }),
      r.d(t, "lb", function () {
        return -1;
      }),
      r.d(t, "m", function () {
        return Ie;
      }),
      r.d(t, "B", function () {
        return we;
      }),
      r.d(t, "C", function () {
        return Te;
      }),
      r.d(t, "x", function () {
        return Pe;
      }),
      r.d(t, "w", function () {
        return xe;
      }),
      r.d(t, "I", function () {
        return Ne;
      }),
      r.d(t, "u", function () {
        return Ve;
      }),
      r.d(t, "A", function () {
        return Be;
      }),
      r.d(t, "p", function () {
        return Le;
      }),
      r.d(t, "o", function () {
        return Fe;
      }),
      r.d(t, "l", function () {
        return je;
      }),
      r.d(t, "v", function () {
        return Ue;
      }),
      r.d(t, "D", function () {
        return He;
      }),
      r.d(t, "n", function () {
        return ze;
      });
    t.kb = VRHTML;
  },
  "2uOv": function (e, t, r) {
    "use strict";
    r.r(t);
    var n,
      i = r("q1tI"),
      o = r("i8i4"),
      s = r("/i/y"),
      a = r("GXif"),
      l = r("Q+Z6"),
      c = r("uFkT"),
      d = r("Kysl"),
      u = r("MYgy"),
      p = r("Z0gP"),
      h = r("CzjV"),
      m = r("5/du");
    Object(s.i)() == s.F.Overlay &&
      document.body.parentElement.classList.add("VROverlay"),
      h.b.Instance.preloadSounds(),
      Promise.all([
        Object(a.b)(
          ["vrmonitor", "bindingui"],
          null === (n = s.kb) || void 0 === n ? void 0 : n.GetSteamVRLanguage(),
        ),
        l.d.Init(!0),
        c.a.Init(!0),
        u.a.Init(),
        d.a.Init(),
        p.a.Init(),
      ])
        .then(() => {
          const e =
            Object(s.i)() == s.F.Overlay
              ? i.createElement(s.db, null, i.createElement(m.a, null))
              : i.createElement(m.a, null);
          o.render(e, document.getElementById("settingsRoot"));
        })
        .catch((e) => console.error("Failed to initialize vr settings:", e));
  },
  "8GAN": function (e, t, r) {
    "use strict";
    r.d(t, "b", function () {
      return u;
    }),
      r.d(t, "a", function () {
        return p;
      }),
      r.d(t, "c", function () {
        return h;
      });
    var n,
      i = r("mrSG"),
      o = r("q1tI"),
      s = r("7wIv"),
      a = r("/i/y"),
      l = r("GXif"),
      c = r("okNM"),
      d = r("hcOo");
    const u = "resetseatedorigincountdown",
      p = "begin_reset_seated_origin_countdown";
    let h = (n = class extends o.Component {
      constructor(e) {
        super(e),
          (this.m_countdownTimeout = 0),
          (this.m_fadeFinishTimeout = 0),
          (this.m_mailbox = new a.c()),
          this.m_mailbox.Init(u).then(() => {
            this.m_mailbox.RegisterHandler(
              p,
              this.OnBeginResetSeatedOriginCountdown,
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
      OnBeginResetSeatedOriginCountdown(e) {
        clearTimeout(this.m_countdownTimeout),
          (this.m_countdownTimeout = setTimeout(this.CountdownTick, 1e3)),
          clearTimeout(this.m_fadeFinishTimeout),
          (this.m_fadeFinishTimeout = 0),
          this.setState({
            visible: !0,
            fading: !1,
            countdown_seconds: e.countdown_seconds,
          });
      }
      CountdownTick() {
        var e;
        clearTimeout(this.m_countdownTimeout),
          1 == this.state.countdown_seconds
            ? ((this.m_countdownTimeout = 0),
              null === (e = a.kb) || void 0 === e || e.ResetSeatedOrigin(),
              clearTimeout(this.m_fadeFinishTimeout),
              (this.m_fadeFinishTimeout = setTimeout(
                this.HideOverlay,
                n.kFadeDurationMs,
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
        let r =
          0.8 *
          (null !=
          (t =
            null === (e = a.kb) || void 0 === e
              ? void 0
              : e.VRProperties.GetFloatProperty(a.mb, a.x.DashboardScale_Float))
            ? t
            : 1);
        return o.createElement(
          a.jb,
          { parent_path: "/user/head" },
          o.createElement(
            a.jb,
            { translation: { y: -0.05, z: -0.9 }, scale: r },
            o.createElement(
              a.X,
              {
                width: void 0,
                height: n.kPanelHeight,
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
                  style: { width: n.kPixelWidth },
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
                      this.state.countdown_seconds,
                    ),
                  ),
                  o.createElement(
                    "div",
                    { className: "ResetSeatedCountdownTextDesc" },
                    Object(l.c)("#Resetting_Seated_Origin"),
                  ),
                ),
              ),
            ),
          ),
        );
      }
    });
    (h.kPanelHeight = 0.2),
      (h.kPixelWidth = 400),
      (h.kFadeDurationMs = 1e3),
      Object(i.b)(
        [s.bind],
        h.prototype,
        "OnBeginResetSeatedOriginCountdown",
        null,
      ),
      Object(i.b)([s.bind], h.prototype, "CountdownTick", null),
      Object(i.b)([s.bind], h.prototype, "HideOverlay", null),
      (h = n = Object(i.b)([c.a], h));
  },
  Ck0r: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return i;
    });
    var n = r("q1tI");
    function i(e) {
      return n.createElement(
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
          e,
        ),
        n.createElement(
          "g",
          null,
          n.createElement("path", {
            d: "M93.8,50v28.1c0,8.6-7,15.6-15.6,15.6H21.9c-8.6,0-15.6-7-15.6-15.6V21.9c0-8.6,7-15.6,15.6-15.6H50c1.7,0,3.1,1.4,3.1,3.1\r\n\t\t\t\ts-1.4,3.1-3.1,3.1H21.9c-5.2,0-9.4,4.2-9.4,9.4v56.3c0,5.2,4.2,9.4,9.4,9.4h56.3c5.2,0,9.4-4.2,9.4-9.4V50c0-1.7,1.4-3.1,3.1-3.1\r\n\t\t\t\tS93.8,48.3,93.8,50z M68.8,12.5h14.3L47.8,47.8c-1.2,1.2-1.2,3.2,0,4.4c0,0,0,0,0,0c1.2,1.2,3.2,1.2,4.4,0c0,0,0,0,0,0l35.3-35.3\r\n\t\t\t\tv14.3c0,1.7,1.4,3.1,3.1,3.1l0,0c1.7,0,3.1-1.4,3.1-3.1V9.4c0-0.8-0.3-1.6-0.9-2.2c-0.6-0.6-1.4-0.9-2.2-0.9H68.8\r\n\t\t\t\tc-1.7,0-3.1,1.4-3.1,3.1S67,12.5,68.8,12.5z",
          }),
        ),
      );
    }
  },
  Gmup: function (e, t, r) {
    "use strict";
    var n = r("mrSG"),
      i = r("/i/y"),
      o = r("7wIv"),
      s = r.n(o),
      a = r("q1tI"),
      l = r("6YgL"),
      c = r("7uy8"),
      d = r("GXif"),
      u = r("Q+Z6"),
      p = r("okNM"),
      h = r("YRJX"),
      m = r("2vnA"),
      g = r("X3sx"),
      _ = r("p9CI");
    let b = class extends a.Component {
      constructor(e) {
        super(e), (this.state = { desktopView: null, bKeyboardVisible: !1 });
      }
      setDesktopView(e) {
        this.setState({ desktopView: e });
      }
      componentDidUpdate(e, t) {
        var r;
        if (
          (!this.props.visible &&
            this.state.bKeyboardVisible &&
            this.setState({ bKeyboardVisible: !1 }),
          t.bKeyboardVisible != this.state.bKeyboardVisible)
        )
          if (this.state.bKeyboardVisible) {
            let e =
              "system.desktop." +
              (null === (r = this.state.desktopView) || void 0 === r
                ? void 0
                : r.currentDesktopIndex);
            VRHTML.VROverlay.ShowKeyboardForOverlay(
              e,
              i.p.Normal,
              i.o.SingleLine,
              i.n.Minimal,
              "Desktop Text",
              1024,
              "",
              0,
            ),
              VRHTML.VROverlay.SetKeyboardPositionForOverlay(e, {});
          } else VRHTML.VROverlay.HideKeyboard();
      }
      ToggleKeyboard() {
        this.setState((e) => ({ bKeyboardVisible: !e.bKeyboardVisible }));
      }
      render() {
        var e, t, r, n, i;
        if (
          !this.state.desktopView ||
          (null === (e = this.state.desktopView) || void 0 === e
            ? void 0
            : e.state.bIsUsingSteamDesktop)
        )
          return null;
        const o =
          (null === (t = this.state.desktopView) || void 0 === t
            ? void 0
            : t.state.desktopIndices.length) > 1;
        return a.createElement(
          h.f,
          Object.assign({}, this.props, {
            additionalClassNames: "DesktopTray",
          }),
          o &&
            a.createElement(
              _.b,
              { scrollDirection: _.a.Horizontal, className: "Section" },
              null === (r = this.state.desktopView) || void 0 === r
                ? void 0
                : r.state.desktopIndices.map((e) => {
                    var t;
                    return a.createElement(h.o, {
                      key: e,
                      label: e.toString(),
                      active:
                        (null === (t = this.state.desktopView) || void 0 === t
                          ? void 0
                          : t.currentDesktopIndex) == e,
                      title: Object(d.c)("#Desktop_X", e),
                      onClick: () => {
                        var t;
                        return null === (t = this.state.desktopView) ||
                          void 0 === t
                          ? void 0
                          : t.onDesktopChange(e);
                      },
                    });
                  }),
            ),
          a.createElement(
            "div",
            { className: "Section Grow" },
            a.createElement(
              "div",
              { className: "Label" },
              Object(d.c)("#Size"),
            ),
            a.createElement(g.a, {
              min: 0.75,
              max: 1.5,
              value:
                null === (n = this.state.desktopView) || void 0 === n
                  ? void 0
                  : n.desktopViewScale,
              onChange:
                null === (i = this.state.desktopView) || void 0 === i
                  ? void 0
                  : i.onDesktopScaleChange,
              valueStyleVariant: g.c.OnHandle,
              detents: [1],
              renderValue: (e) => (100 * e).toFixed(0) + "%",
            }),
            a.createElement(h.o, {
              iconUrl: "/dashboard/images/icons/svr_keyboard.svg",
              title: this.state.bKeyboardVisible
                ? Object(d.c)("#HideKeyboardTooltip")
                : Object(d.c)("#ShowKeyboardTooltip"),
              additionalClassNames: "Keyboard",
              onClick: this.ToggleKeyboard,
            }),
            a.createElement(h.o, {
              iconUrl: this.props.darkMode
                ? "/dashboard/images/icons/svr_nightmode.svg"
                : "/dashboard/images/icons/svr_lightmode.svg",
              title: Object(d.c)("#Settings_ToggleDarkMode"),
              onClick: this.props.onToggleDarkMode,
            }),
          ),
        );
      }
    };
    Object(n.b)([s.a], b.prototype, "ToggleKeyboard", null),
      (b = Object(n.b)([p.a], b));
    let v = class extends a.Component {
      constructor(e) {
        super(e),
          (this.state = { bIsUsingSteamDesktop: !1, desktopIndices: [] });
      }
      componentDidMount() {
        var e, t;
        if (
          null !==
          (null === (e = VRHTML) || void 0 === e
            ? void 0
            : e.VROverlay.FindOverlay("valve.steam.desktop"))
        )
          return void this.setState({ bIsUsingSteamDesktop: !0 });
        let r = 1,
          n = [];
        for (
          ;
          null !==
          (null === (t = VRHTML) || void 0 === t
            ? void 0
            : t.VROverlay.FindOverlay("system.desktop." + r));
        )
          n.push(r), r++;
        this.setState({ bIsUsingSteamDesktop: !1, desktopIndices: n });
      }
      get desktopViewScaleSettingKey() {
        return "/settings/dashboard/desktopScale" + this.currentDesktopIndex;
      }
      get desktopCount() {
        return this.state.desktopIndices.length;
      }
      get currentDesktopIndex() {
        var e;
        return null !=
          (e = u.d.settings.get("/settings/dashboard/desktopIndex"))
          ? e
          : 1;
      }
      get desktopViewScale() {
        var e;
        return null != (e = u.d.settings.get(this.desktopViewScaleSettingKey))
          ? e
          : 1;
      }
      onDesktopScaleChange(e) {
        u.d.SetSettingsValue(this.desktopViewScaleSettingKey, e);
      }
      onDesktopChange(e) {
        u.d.SetSettingsValue("/settings/dashboard/desktopIndex", e);
      }
      render() {
        var e;
        if (!this.props.visible) return null;
        if (this.state.bIsUsingSteamDesktop)
          return a.createElement(i.R, {
            mountedId: Object(i.f)(c.A, "valve.steam.desktop"),
          });
        if (0 === this.state.desktopIndices.length)
          return a.createElement(
            h.h,
            null,
            a.createElement(
              "div",
              { className: "NoDesktopFound" },
              a.createElement("h2", null, "No desktop found."),
            ),
          );
        let t =
          null != (e = u.d.settings.get(this.desktopViewScaleSettingKey))
            ? e
            : 1;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            i.X,
            {
              overlay_key: "system.desktop." + this.currentDesktopIndex,
              height: 2 * t,
              curvature_origin_id: c.h,
              interactive: !0,
              origin: i.r.BottomCenter,
              debug_name: "System Desktop",
            },
            a.createElement(i.Y, { id: h.s, location: i.r.TopCenter }),
            a.createElement(i.R, {
              mountedId: Object(i.f)(
                c.A,
                "desktopcursor" + this.currentDesktopIndex,
              ),
            }),
          ),
        );
      }
    };
    Object(n.b)([m.f], v.prototype, "desktopCount", null),
      Object(n.b)([m.f], v.prototype, "currentDesktopIndex", null),
      Object(n.b)([m.f], v.prototype, "desktopViewScale", null),
      Object(n.b)([s.a], v.prototype, "onDesktopScaleChange", null),
      Object(n.b)([s.a], v.prototype, "onDesktopChange", null),
      (v = Object(n.b)([p.a], v));
    var y,
      S = r("hcOo");
    let f = (y = class extends a.Component {
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
            "library_600x900.jpg",
          );
        t !== this.props.imageUrl &&
          (e.push(t),
          e.push(this.props.imageUrl.replace(/header\.jpg$/, "portrait.png"))),
          e.push(this.props.imageUrl),
          this.props.fallbackImageUrl && e.push(this.props.fallbackImageUrl),
          (this.m_imageSources = e.filter(
            (e) => !y.s_failedImages.includes(e),
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
          y.s_failedImages.push(this.m_imageSources[this.m_imageIndex]),
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
          t = a.createElement("div", { className: "Icon", style: e });
        return (
          this.state.width / this.state.height != 600 / 900 &&
            (t = a.createElement(
              a.Fragment,
              null,
              a.createElement("div", {
                className: "IconBackgroundBlur",
                style: e,
              }),
              t,
            )),
          a.createElement(
            "div",
            {
              className: Object(S.a)("PortraitAppImageContainer", [
                "Fallback",
                this.state.isFallback,
              ]),
            },
            this.state.image && t,
            a.createElement("div", { className: "Title" }, this.props.title),
            this.props.children && this.props.children,
          )
        );
      }
    });
    var C;
    (f.defaultProps = {
      fallbackImageUrl: "images/appimage_default_portrait.png",
    }),
      (f.s_failedImages = []),
      Object(n.b)([o.bind], f.prototype, "loadNextImage", null),
      Object(n.b)([o.bind], f.prototype, "onLoad", null),
      Object(n.b)([o.bind], f.prototype, "onError", null),
      (f = y = Object(n.b)([p.a], f)),
      (function (e) {
        (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
      })(C || (C = {}));
    const O = (e) =>
      a.createElement(
        "div",
        {
          className: Object(S.a)("ButtonContainer", C[e.side], [
            "Disabled",
            !1 === e.enabled,
          ]),
        },
        a.createElement(
          l.a,
          { className: "ButtonControl", onClick: e.onClick },
          e.side == C.Left
            ? a.createElement(a.Fragment, null, "‹")
            : a.createElement(a.Fragment, null, "›"),
        ),
      );
    class D extends a.Component {
      constructor(e) {
        super(e),
          (this.m_refScrollPanel = a.createRef()),
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
          this.onAnimationFrame,
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
        const r = this.m_refScrollPanel.current;
        if (!r) return;
        if (r.isThrown)
          return void r.cancelThrowing(() => {
            (this.m_bScrolling = !1), this.scroll(e);
          });
        const n = r.children;
        if (!n || 0 == n.length) return;
        const i = null != (t = this.props.paginationAlignmentOffset) ? t : 0,
          o = n[0],
          s = this.m_bScrolling ? this.m_nCurrentScrollTarget : r.scrollLeft,
          a = o.getBoundingClientRect().left + r.scrollLeft,
          l = o.clientWidth,
          c = r.clientWidth,
          d = Math.floor(c / l) - 1,
          u = Math.round((s - a + i + 1) / l) + d * e - 0.4999,
          p = u > 0 ? u * l + a - i : 0;
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
        return a.createElement(
          "div",
          {
            className: Object(S.a)(
              "PaginatedCarousel",
              this.props.additionalClassNames,
            ),
          },
          a.createElement(
            _.b,
            {
              ref: this.m_refScrollPanel,
              scrollDirection: _.a.Horizontal,
              onScroll: this.onScroll,
            },
            this.props.children,
          ),
          (!1 === this.state.bScrolledToStart ||
            !1 === this.state.bScrolledToEnd) &&
            a.createElement(
              "div",
              { className: "PaginationButtons" },
              null !== this.state.bScrolledToStart &&
                a.createElement(O, {
                  side: C.Left,
                  enabled: !this.state.bScrolledToStart,
                  onClick: this.onLeftButtonClick,
                }),
              null !== this.state.bScrolledToEnd &&
                a.createElement(O, {
                  side: C.Right,
                  enabled: !this.state.bScrolledToEnd,
                  onClick: this.onRightButtonClick,
                }),
            ),
        );
      }
    }
    Object(n.b)([s.a], D.prototype, "onAnimationFrame", null),
      Object(n.b)([s.a], D.prototype, "onScroll", null),
      Object(n.b)([s.a], D.prototype, "onLeftButtonClick", null),
      Object(n.b)([s.a], D.prototype, "onRightButtonClick", null);
    let k = class extends a.Component {
      constructor(e) {
        super(e),
          (this.m_scrollWatcher = new S.e()),
          (this.m_refAnchoredParentPortal = a.createRef()),
          (this.m_refButton = a.createRef()),
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
          a.createElement(
            "div",
            {
              className: Object(S.a)(
                "AppButtonContainer",
                ["AppOwned", u.d.probablyOwnedAppkeys.has(this.props.appkey)],
                ["ShowingPopovers", this.shouldShowHoverContents],
              ),
            },
            a.createElement(
              l.a,
              {
                className: "AppButton",
                ref: this.m_refButton,
                onMouseEnter: this.buttonMouseEnter,
                onMouseLeave: this.buttonMouseLeave,
                onClick: this.props.onClick,
              },
              a.createElement(f, Object.assign({}, e), this.props.children),
            ),
          )
        );
      }
    };
    Object(n.b)([s.a], k.prototype, "buttonMouseEnter", null),
      Object(n.b)([s.a], k.prototype, "buttonMouseLeave", null),
      Object(n.b)([s.a], k.prototype, "onParentScrollStop", null),
      (k = Object(n.b)([p.a], k));
    const M = () =>
        a.createElement("div", { className: "AppButton Placeholder" }),
      E = (e) => {
        var t;
        const r = !!e.loading,
          n = null != (t = e.apps) ? t : [];
        let i = "AppCarousel";
        return (
          e.className && (i += " " + e.className),
          (i += " NoAnimations"),
          a.createElement(
            D,
            { additionalClassNames: i, paginationAlignmentOffset: -20 },
            r &&
              a.createElement(
                a.Fragment,
                null,
                a.createElement(M, null),
                a.createElement(M, null),
                a.createElement(M, null),
                a.createElement(M, null),
              ),
            !r &&
              n.map((e) =>
                a.createElement(k, Object.assign({ key: e.appkey }, e)),
              ),
          )
        );
      };
    var R = r("Ibgz"),
      I = r("vDqi"),
      w = r.n(I),
      T = r("uTck");
    function P() {
      return w.a
        .get(
          "https://steamcommunity.com/steamvr/ajaxgethomedata/?include_apps=1&include_free_apps=1&num_apps=20",
        )
        .then((e) => e.data);
    }
    const x = () =>
      a.createElement(
        l.a,
        {
          className: "ButtonControl WithIcon PanelTopRight",
          onClick: () => R.b.Instance.openBigPictureStore(null, R.a.QuickStore),
        },
        a.createElement("span", null, Object(d.c)("#BrowseAll")),
        a.createElement("img", {
          className: "Icon BlackToWhite",
          src: "/dashboard/images/icons/svr_store.svg",
        }),
      );
    var N;
    !(function (e) {
      (e[(e.Free = 0)] = "Free"),
        (e[(e.Singleplayer = 1)] = "Singleplayer"),
        (e[(e.Multiplayer = 2)] = "Multiplayer");
    })(N || (N = {}));
    let V = class extends a.Component {
      constructor(e) {
        super(e), (this.state = { storeData: null });
      }
      componentDidMount() {
        P().then((e) => this.setState({ storeData: e }));
      }
      openSteamApp(e, t, r) {
        T.a.instance.RecordUIEvent(
          "QuickStoreAppClick",
          N[t].toLowerCase() + ":" + r,
          `steam.app.${e}`,
        ),
          R.b.Instance.openBigPictureStore(e, R.a.QuickStore);
      }
      makeAppButtonList() {
        let e = [];
        switch (this.props.section) {
          case N.Free:
            e = this.state.storeData.apps_free;
            break;
          case N.Singleplayer:
            e = this.state.storeData.apps_singleplayer;
            break;
          case N.Multiplayer:
            e = this.state.storeData.apps_multiplayer;
        }
        return e.map((e, t) => {
          const r = `steam.app.${e.appid}`;
          return {
            key: r,
            appkey: r,
            title: e.name,
            imageUrl: e.logo,
            onClick: () => this.openSteamApp(e.appid, this.props.section, t),
          };
        });
      }
      render() {
        return this.state.storeData
          ? a.createElement(E, { apps: this.makeAppButtonList() })
          : a.createElement(E, { loading: !0 });
      }
    };
    V = Object(n.b)([p.a], V);
    class B extends a.Component {
      constructor(e) {
        super(e), (this.state = {});
      }
      render() {
        return a.createElement(
          h.h,
          { visible: this.props.visible, additionalClassNames: "QuickStore" },
          a.createElement(x, null),
          a.createElement(
            "h2",
            null,
            Object(d.c)("#StoreSection_TopSingleplayer"),
          ),
          a.createElement(V, { section: N.Singleplayer }),
          a.createElement(
            "h2",
            null,
            Object(d.c)("#StoreSection_TopMultiplayer"),
          ),
          a.createElement(V, { section: N.Multiplayer }),
          a.createElement("h2", null, Object(d.c)("#StoreSection_TopFree")),
          a.createElement(V, { section: N.Free }),
        );
      }
    }
    var L;
    const F = () =>
        a.createElement(
          l.a,
          {
            className: "ButtonControl WithIcon PanelTopRight",
            onClick: () =>
              R.b.Instance.openBigPictureLibrary(null, R.a.QuickLaunch),
          },
          a.createElement("span", null, Object(d.c)("#BrowseAll")),
          a.createElement("img", {
            className: "Icon BlackToWhite",
            src: "/dashboard/images/icons/svr_items.svg",
          }),
        ),
      A = () =>
        a.createElement(
          l.a,
          {
            className: "ButtonControl Colorful WelcomeBrowseStore",
            onClick: () => {
              var e;
              return null === (e = VRHTML) || void 0 === e
                ? void 0
                : e.VROverlay.ShowDashboard(c.p);
            },
          },
          a.createElement("span", null, Object(d.c)("#WelcomeBrowseStore")),
        ),
      j = () =>
        a.createElement(
          l.a,
          {
            className: "ButtonControl Colorful WelcomeInstall",
            onClick: () =>
              R.b.Instance.openBigPictureLibrary(null, R.a.QuickLaunch),
          },
          a.createElement("span", null, Object(d.c)("#WelcomeInstall")),
        );
    class U extends a.Component {
      constructor(e) {
        super(e), (this.state = { storeData: null });
      }
      componentDidMount() {
        P().then((e) => this.setState({ storeData: e }));
      }
      render() {
        let e = [];
        if (this.state.storeData) {
          let t = this.state.storeData.apps_singleplayer.flatMap((e, t) => [
              this.state.storeData.apps_singleplayer[t],
              this.state.storeData.apps_multiplayer[t],
              this.state.storeData.apps_free[t],
            ]),
            r = new Set();
          for (; e.length < 12 && t.length; ) {
            for (; r.has(t[0].appid); ) t.shift();
            let n = t.shift();
            r.add(n.appid),
              e.push(
                a.createElement(
                  l.a,
                  {
                    key: `appid_${n.appid}`,
                    className: `WelcomeFloatingApp WelcomeFloatingApp${e.length}`,
                    onClick: () =>
                      R.b.Instance.openBigPictureStore(
                        n.appid,
                        R.a.QuickLaunch,
                      ),
                  },
                  a.createElement("img", { src: n.logo }),
                ),
              );
          }
        }
        return a.createElement(
          "div",
          { className: "QuickLaunchWelcome" },
          e,
          a.createElement(
            "div",
            { className: "QuickLaunchWelcomePrompt" },
            a.createElement(
              "div",
              { className: "QuickLaunchWelcomeHeader" },
              Object(d.c)("#WelcomeHeader"),
            ),
            a.createElement(
              "div",
              { className: "QuickLaunchWelcomeMessage" },
              Object(d.c)("#WelcomeMessage"),
            ),
            a.createElement(A, null),
            a.createElement(j, null),
          ),
        );
      }
    }
    let H = (L = class extends a.Component {
      constructor(e) {
        super(e), (this.state = {});
      }
      launchApplication(e, t, r) {
        var n, i, o;
        T.a.instance.RecordUIEvent(
          "QuickLaunchAppClick",
          (t ? "top" : "bottom") + ":" + r,
          e,
        ),
          null === (i = (n = this.props).onGameLaunched) ||
            void 0 === i ||
            i.call(n),
          null === (o = VRHTML) ||
            void 0 === o ||
            o.VRApplications.LaunchApplication(e);
      }
      makeAppButtonList() {
        let e = [];
        if (null != u.d.apps)
          for (let t of u.d.apps)
            t.is_internal ||
              t.is_dashboard_overlay ||
              t.is_hidden ||
              t.is_instance ||
              L.s_setBlacklistedAppkeys.has(t.key) ||
              e.push(t);
        e.sort((e, t) => t.last_launch - e.last_launch);
        const t = (e) => {
          let t = e.image_path;
          return t.startsWith("/app/image?") && (t += "&aspect=portrait"), t;
        };
        return e.map((e, r) => {
          let n = r;
          const i = r < L.TOP_ROW_LENGTH;
          return (
            i || (n -= L.TOP_ROW_LENGTH),
            {
              key: e.key,
              appkey: e.key,
              title: e.name,
              imageUrl: t(e),
              onClick: () => this.launchApplication(e.key, i, n),
              children: a.createElement(
                a.Fragment,
                null,
                a.createElement("div", { className: "PlayIconFade" }),
                a.createElement("img", {
                  className: "PlayIcon",
                  src: "/dashboard/images/icons/svr_play.svg",
                }),
              ),
            }
          );
        });
      }
      render() {
        let e,
          t = this.makeAppButtonList();
        const r =
          0 == t.length ||
          u.d.settings.get("/settings/dashboard/forceWelcomeScreen");
        if (r) e = a.createElement(U, null);
        else {
          let r = t.slice(0, L.TOP_ROW_LENGTH),
            n = t.slice(L.TOP_ROW_LENGTH);
          e = a.createElement(
            a.Fragment,
            null,
            a.createElement(F, null),
            a.createElement("h2", null, Object(d.c)("#RecentlyPlayed")),
            a.createElement(E, { className: "TopRow", apps: r }),
            a.createElement(E, { className: "BottomRow", apps: n }),
          );
        }
        return a.createElement(
          h.h,
          {
            visible: this.props.visible,
            scrollable: !r,
            debugName: "homepanel",
            additionalClassNames: "QuickLaunch",
          },
          e,
        );
      }
    });
    (H.TOP_ROW_LENGTH = 4),
      (H.s_setBlacklistedAppkeys = new Set([
        "openvr.tool.steamvr_room_setup",
        "openvr.tool.steamvr_media_player",
        "openvr.tool.steamvr_desktop_gametheatre",
        "openvr.tool.steamvr_tutorial",
        "openvr.tool.steamvr_environments",
        "openvr.tool.steamvr_environments_tools",
        c.F,
        c.H,
      ])),
      (H = L = Object(n.b)([p.a], H));
    var z = r("vzqD"),
      W = r("tALH"),
      G = r("TbT/"),
      q = r("P8UO");
    const K = (e) => {
      if (null == e) return "";
      let t = e.image_path;
      return t.startsWith("/app/image?") && (t += "&aspect=portrait"), t;
    };
    class Q extends a.Component {
      constructor(e) {
        super(e), (this.state = {});
      }
      onExitApp() {
        var e, t, r;
        null === (e = VRHTML) || void 0 === e || e.QuitSceneApp(),
          null === (r = (t = this.props).onExitGame) ||
            void 0 === r ||
            r.call(t);
      }
      onReturnToGame() {
        var e;
        null === (e = VRHTML) ||
          void 0 === e ||
          e.VRDashboardManager.HideDashboard("return_to_game");
      }
      onOpenAppControllerBindingSettings() {
        const e = q.a.Instance.SceneAppKey;
        W.b.OpenDeepLink(W.a.Name, e);
      }
      onOpenAppVideoSettings() {
        const e = q.a.Instance.SceneAppKey;
        z.b.OpenDeepLink(z.c.Name, e);
      }
      render() {
        var e;
        const t = q.a.Instance.SceneAppKey,
          r = q.a.Instance.SceneAppName,
          n = q.a.Instance.SceneApplicationState,
          o = q.a.Instance.SceneAppIsHome,
          s = u.d.settings.get("/settings/dashboard/allowAppQuitting"),
          c = !(
            null != (e = u.d.settings.get("/settings/dashboard/arcadeMode")) &&
            e
          ),
          p = u.d.apps && u.d.apps.find((e) => e.key == t);
        let m = !1;
        switch (n) {
          case i.u.Quitting:
          case i.u.Starting:
          case i.u.Waiting:
            m = !0;
        }
        const g = K(p);
        return a.createElement(
          h.h,
          {
            visible: this.props.visible,
            debugName: "nowplaying",
            additionalClassNames: "NowPlaying",
          },
          a.createElement(
            "div",
            { className: "ArtworkColumn" },
            a.createElement(f, { appkey: t, title: r, imageUrl: g }),
          ),
          a.createElement(
            "div",
            { className: "InfoColumn" },
            a.createElement("div", { className: "NowPlayingAppTitle" }, r),
            a.createElement(
              l.a,
              {
                className: "ButtonControl Colorful",
                onClick: this.onReturnToGame,
              },
              o
                ? Object(d.c)("#Return_To_Home")
                : Object(d.c)("#Return_To_Game"),
            ),
            c &&
              a.createElement(
                G.e,
                {
                  icon: G.f.PopOut,
                  onClick: this.onOpenAppControllerBindingSettings,
                },
                Object(d.c)("#Controller_Bindings"),
              ),
            c &&
              a.createElement(
                G.e,
                { icon: G.f.PopOut, onClick: this.onOpenAppVideoSettings },
                Object(d.c)("#App_Video_Settings"),
              ),
            !o &&
              s &&
              a.createElement(
                l.a,
                { className: "ButtonControl", onClick: this.onExitApp },
                Object(d.c)("#Exit_Game"),
              ),
          ),
        );
      }
    }
    Object(n.b)([o.bind], Q.prototype, "onExitApp", null),
      Object(n.b)([o.bind], Q.prototype, "onReturnToGame", null),
      Object(n.b)(
        [o.bind],
        Q.prototype,
        "onOpenAppControllerBindingSettings",
        null,
      ),
      Object(n.b)([o.bind], Q.prototype, "onOpenAppVideoSettings", null);
    var X,
      Y,
      Z,
      J = r("Vp/w"),
      $ = r("CzjV");
    r.d(t, "b", function () {
      return Y;
    }),
      r.d(t, "a", function () {
        return re;
      }),
      (function (e) {
        (e[(e.Near = 0)] = "Near"),
          (e[(e.Middle = 1)] = "Middle"),
          (e[(e.Far = 2)] = "Far"),
          (e[(e.Screenshot_Only = 255)] = "Screenshot_Only");
      })(Y || (Y = {}));
    class ee extends a.Component {
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
    function te(e) {
      var t, r;
      return (
        null !=
          (r = null === (t = e) || void 0 === t ? void 0 : t.startsWith(c.l)) &&
        r
      );
    }
    !(function (e) {
      (e[(e.None = 0)] = "None"),
        (e[(e.Power = 1)] = "Power"),
        (e[(e.ExternalOverlays = 2)] = "ExternalOverlays"),
        (e[(e.Volume = 3)] = "Volume");
    })(Z || (Z = {}));
    let re = (X = class extends a.Component {
      constructor(e) {
        super(e),
          (this.m_mapExternalOverlays = {}),
          (this.m_setSuppressingFade = new Set()),
          (this.m_mailbox = new i.c()),
          (this.m_timeoutPopupMenuHide = 0),
          (this.m_refPopupMenu = a.createRef()),
          (this.m_appStateChangedAutorunDisposer = null),
          (this.m_refDesktopView = a.createRef()),
          (this.m_refDesktopTray = a.createRef()),
          (this.m_refVolumeTray = a.createRef()),
          (this.m_sOverlayToSwitchToOnLoad = c.o),
          (this.m_bQuickLaunchShouldReturnToBigPicture = !1),
          (this.m_bQuickStoreShouldReturnToBigPicture = !1),
          (this.state = {
            bShown: !1,
            sActiveOverlayID: null,
            bDesktopDarkMode: !1,
            bMuted: !1,
            sLastShownAppKey: "",
            eShowPopupMenu: Z.None,
            setForcingBoundsVisible: {},
          }),
          (window.setDashboardScale = (e) => (X.s_dashboardUserScale = e)),
          (window.setDashboardDistance = (e) =>
            (X.s_dashboardUserDistance = e)),
          u.d.Init(!1),
          this.m_mailbox.Init(X.k_sDashboardMailboxName).then(() => {
            this.m_mailbox.RegisterHandler(
              X.k_sSetDashboardFadeSupressionMessage,
              this.OnSetDashboardFadeSuppression,
            ),
              this.m_mailbox.RegisterHandler(
                X.k_sUpdateDashboardTabsMessage,
                this.onUpdateDashboardTabs,
              ),
              this.m_mailbox.RegisterHandler(
                X.k_sSetDashboardForceBoundsVisible,
                this.OnSetDashboardForceBoundsVisible,
              );
          });
      }
      componentDidMount() {
        var e;
        window.Dashboard = this;
        const t =
            null === (e = VRHTML) || void 0 === e
              ? void 0
              : e.GetVRStartupReason(),
          r =
            t == i.D.AppLaunch_Unknown ||
            t == i.D.AppLaunch_Steam ||
            t == i.D.Unknown,
          n = u.d.settings.get(
            "/settings/dashboard/allowDashboardAutoLaunchWithSteamVRHome",
          ),
          o = u.d.settings.get("/settings/steamvr/enableHomeApp"),
          s = u.d.settings.get(c.k);
        ((r || (!n && o)) && !s) ||
          setTimeout(() => {
            var e;
            return null === (e = VRHTML) || void 0 === e
              ? void 0
              : e.VROverlay.ShowDashboard(null != s ? s : "");
          }, 500),
          (this.m_appStateChangedAutorunDisposer = Object(m.e)(() => {
            const e = q.a.Instance.SceneApplicationState != i.u.None;
            this.isOverlayActive(c.m) && !e && this.switchToOverlay(c.o);
          })),
          this.updateSiblingReferences();
      }
      componentDidUpdate(e, t) {
        const r = this.getActiveOverlaySummonKey();
        let n = !1;
        if (
          (t.bShown !== this.state.bShown &&
            ($.b.Instance.playSound(
              this.state.bShown ? $.a.DashboardOpen : $.a.DashboardClose,
            ),
            (n = !0)),
          this.state.bShown &&
            !n &&
            t.sActiveOverlayID != this.state.sActiveOverlayID)
        )
          switch (r) {
            case c.y:
              $.b.Instance.playSound($.a.ThemeSettings);
              break;
            case c.i:
              $.b.Instance.playSound($.a.ThemeDesktop);
              break;
            case c.o:
              $.b.Instance.playSound($.a.ThemeLibrary);
              break;
            case c.p:
              $.b.Instance.playSound($.a.ThemeStore);
              break;
            case c.m:
              $.b.Instance.playSound($.a.ThemeNowPlaying);
          }
        if (
          t.sActiveOverlayID != this.state.sActiveOverlayID &&
          this.isOverlayActive(c.C)
        )
          switch (R.b.Instance.lastBigPictureEntryPoint) {
            case R.a.QuickLaunch:
              this.m_bQuickLaunchShouldReturnToBigPicture = !0;
              break;
            case R.a.QuickStore:
              this.m_bQuickStoreShouldReturnToBigPicture = !0;
          }
        this.updateSiblingReferences();
      }
      updateSiblingReferences() {
        var e;
        null === (e = this.m_refDesktopTray.current) ||
          void 0 === e ||
          e.setDesktopView(this.m_refDesktopView.current);
      }
      componentWillUnmount() {
        clearTimeout(this.m_timeoutHoverStateEnd),
          clearTimeout(this.m_timeoutPopupMenuHide),
          this.m_appStateChangedAutorunDisposer &&
            (this.m_appStateChangedAutorunDisposer(),
            (this.m_appStateChangedAutorunDisposer = null)),
          Object(i.eb)(1);
      }
      static getDashboardDistance() {
        if (X.s_dashboardUserDistance) return X.s_dashboardUserDistance;
        const e = u.d.settings.get(c.n);
        return e == Y.Near
          ? 0.925
          : e == Y.Screenshot_Only
            ? 5
            : e == Y.Middle
              ? 1.05
              : 1.2;
      }
      static getDashboardVerticalPosition() {
        var e;
        const t =
            0.01 *
            (null !=
            (e = u.d.settings.get("/settings/dashboard/verticalOffsetCm_2"))
              ? e
              : 0),
          r = u.d.settings.get(c.n);
        return r == Y.Screenshot_Only
          ? -0.57
          : r == Y.Near
            ? -0.07 + t
            : r == Y.Middle
              ? -0.08 + t
              : -0.09 + t;
      }
      static getDashboardScale() {
        var e, t;
        if (X.s_dashboardUserScale) return X.s_dashboardUserScale;
        let r = 1;
        const n = u.d.settings.get(c.n),
          o = n == Y.Screenshot_Only;
        return (
          (r = o ? 2 : n == Y.Near ? 0.36 : n == Y.Middle ? 0.41 : 0.47),
          o ||
            (r *=
              null !=
              (t =
                null === (e = VRHTML) || void 0 === e
                  ? void 0
                  : e.VRProperties.GetFloatProperty(
                      i.mb,
                      i.x.DashboardScale_Float,
                    ))
                ? t
                : 1),
          r
        );
      }
      OnSetDashboardFadeSuppression(e) {
        e.suppress_dashboard_fade
          ? this.m_setSuppressingFade.add(e.for_id)
          : this.m_setSuppressingFade.delete(e.for_id),
          this.forceUpdate();
      }
      OnSetDashboardForceBoundsVisible(e) {
        this.setState((t, r) => {
          let n = Object.assign({}, t.setForcingBoundsVisible);
          return (
            (n[e.for_overlay_key] = new Set(n[e.for_overlay_key])),
            e.force_bounds_visible
              ? n[e.for_overlay_key].add(e.for_id)
              : n[e.for_overlay_key].delete(e.for_id),
            { setForcingBoundsVisible: n }
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
      renderActiveOverlay() {
        if (null === this.state.sActiveOverlayID) return null;
        const e = this.getActiveOverlay();
        if (!e) return null;
        return a.createElement(
          i.jb,
          { scale: { x: 1, y: 1 } },
          a.createElement(i.R, { mountedId: e.mountable_id }),
        );
      }
      computeFilteredOverlayTabs() {
        if (this.screenshotMode) return [];
        let e = [];
        for (let t in this.m_mapExternalOverlays) {
          const r = this.m_mapExternalOverlays[t];
          (void 0 === r.icon_overlay_key && null == r.icon_uri) ||
            (r.summon_overlay_key &&
              r.summon_overlay_key != c.y &&
              r.summon_overlay_key != c.C &&
              r.summon_overlay_key != c.D &&
              (r.summon_overlay_key.startsWith(c.G) ||
                r.summon_overlay_key.startsWith(c.E) ||
                te(r.summon_overlay_key) ||
                e.push(r)));
        }
        return (e = e.sort((e, t) => e.tab_name.localeCompare(t.tab_name))), e;
      }
      findDashboardTab(e) {
        for (let t in this.m_mapExternalOverlays) {
          let r = this.m_mapExternalOverlays[t];
          if (r.summon_overlay_key == e) return r;
        }
        return null;
      }
      switchToOverlay(e, t) {
        var r, n, o;
        switch (e) {
          case c.C:
            R.b.Instance.latchBigPictureEntryPoint();
            break;
          case c.o:
            this.m_bQuickLaunchShouldReturnToBigPicture = !1;
            break;
          case c.p:
            this.m_bQuickStoreShouldReturnToBigPicture = !1;
            break;
          case c.f:
            let t = {
                type: "show_app_binding",
                app_key:
                  null === (r = VRHTML) || void 0 === r
                    ? void 0
                    : r.VRApplications.GetSceneApplicationKey(),
              },
              n = "bindingui/" + i.F[Object(i.i)()];
            this.m_mailbox.WaitForMailbox(n).then(() => {
              this.m_mailbox.SendMessage(n, t);
            }),
              (this.m_bQuickStoreShouldReturnToBigPicture = !1),
              (e = c.c);
        }
        if (e.startsWith(c.G)) {
          const t = Number.parseInt(e.substring(c.G.length + 1));
          Number.isSafeInteger(t) &&
            (null === (n = this.m_refDesktopView.current) ||
              void 0 === n ||
              n.onDesktopChange(t)),
            (e = c.i);
        }
        let s = this.findDashboardTab(e);
        return s
          ? (this.computeFilteredOverlayTabs().includes(s) &&
              u.d.SetSettingsValue(
                c.w,
                null != (o = s.summon_overlay_key) ? o : "",
              ),
            this.setState({ sActiveOverlayID: s.mountable_id }),
            T.a.instance.RecordUIEvent(
              "SetDashboardOverlay",
              null != t ? t : "Button",
              e,
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
      show(e) {
        if (this.isShown()) return;
        T.a.instance.StartDashboardSession(e);
        const t = q.a.Instance.SceneAppKey,
          r = q.a.Instance.SceneAppIsHome;
        t &&
          t != this.state.sLastShownAppKey &&
          (this.setState({ sLastShownAppKey: t }),
          this.switchToOverlay(r ? c.o : c.m)),
          this.setState({ bShown: !0 });
        let n = { type: X.k_sRequestDashboardTabsMessage };
        this.m_mailbox.SendMessage("vrcompositor_mailbox", n), Object(i.bb)();
      }
      hide(e) {
        this.isShown() &&
          (this.setState({ bShown: !1, eShowPopupMenu: Z.None }),
          T.a.instance.EndDashboardSession(e));
      }
      isShown() {
        return this.state.bShown;
      }
      onToggleRoomView() {
        var e;
        null === (e = VRHTML) ||
          void 0 === e ||
          e.VRControlPanel.SetCameraRoomViewVisible(
            !VRHTML.VRControlPanel.GetCameraRoomViewVisible(),
          );
      }
      onQuickLaunchButtonClick() {
        this.m_bQuickLaunchShouldReturnToBigPicture &&
        R.b.Instance.lastBigPictureEntryPoint == R.a.QuickLaunch &&
        !this.isOverlayActive(c.C)
          ? R.b.Instance.openBigPictureThroughLastEntryPoint()
          : this.switchToOverlay(c.o);
      }
      onQuickStoreButtonClick() {
        this.m_bQuickStoreShouldReturnToBigPicture &&
        R.b.Instance.lastBigPictureEntryPoint == R.a.QuickStore &&
        !this.isOverlayActive(c.C)
          ? R.b.Instance.openBigPictureThroughLastEntryPoint()
          : this.switchToOverlay(c.p);
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
          r = u.d.settings.get("/settings/dashboard/allowAppQuitting");
        let n = !1;
        if (VRHTML) {
          VRHTML.VROverlay.GetPrimaryDashboardDevice() >= 0 &&
            (n = VRHTML.VRProperties.GetBoolProperty(
              VRHTML.VROverlay.GetPrimaryDashboardDevice(),
              i.x.DeviceCanPowerOff_Bool,
            ));
        }
        const o = q.a.Instance.SceneAppName,
          s = q.a.Instance.SceneAppIsHome;
        let l, p;
        (l = s
          ? Object(d.c)("#Exit_SteamVR_Home")
          : o
            ? Object(d.c)("#PowerMenuQuitSceneApp", o)
            : Object(d.c)("#PowerMenuQuitSceneApp_NoApp")),
          (p = s
            ? "/dashboard/images/icons/svr_svrhome_quit_alt.svg"
            : "/dashboard/images/icons/svr_app_quit.svg");
        const m = this.findDashboardTab(c.C);
        return this.renderPopupMenu(
          a.createElement(
            a.Fragment,
            null,
            m &&
              a.createElement(h.i, {
                label: Object(d.c)("#PowerMenuSteamOverlay"),
                lineBelow: !0,
                onClick: () => {
                  this.switchToOverlay(c.C), this.showPopupMenu(Z.None);
                },
              }),
            n &&
              a.createElement(h.i, {
                label: Object(d.c)("#PowerMenuTurnOffController"),
                imageUrl: "/dashboard/images/icons/svr_controller_power.svg",
                onClick: () => {
                  var e;
                  null === (e = VRHTML) ||
                    void 0 === e ||
                    e.TurnOffVRController(),
                    this.showPopupMenu(Z.None);
                },
              }),
            r &&
              t &&
              a.createElement(h.i, {
                label: l,
                imageUrl: p,
                onClick: () => {
                  var e;
                  null === (e = VRHTML) || void 0 === e || e.QuitSceneApp(),
                    this.showPopupMenu(Z.None);
                },
              }),
            a.createElement(h.i, {
              label: Object(d.c)("#PowerMenuExitVR"),
              imageUrl: "/dashboard/images/icons/svr_svr_quit_alt.svg",
              onClick: () => {
                var e;
                return null === (e = VRHTML) || void 0 === e
                  ? void 0
                  : e.QuitOpenVR();
              },
            }),
          ),
        );
      }
      startPopupMenuTimeout(e) {
        this.m_timeoutPopupMenuHide = window.setTimeout(() => {
          this.setState({ eShowPopupMenu: Z.None });
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
        return a.createElement(
          "div",
          {
            className: "PowerMenuContainer",
            onMouseLeave: this.popupMenuMouseLeave,
            onMouseEnter: this.clearPopupMenuTimeout,
            ref: this.m_refPopupMenu,
          },
          a.createElement(l.b, { className: "PowerMenuPanel" }, e),
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
            !(function (e, t, r) {
              let n = r.getBoundingClientRect();
              return e >= n.left && e <= n.right && t >= n.top && t <= n.bottom;
            })(e.clientX, e.clientY, this.m_refPopupMenu.current) &&
            this.startPopupMenuTimeout(100);
      }
      renderStatusBarTitle() {
        var e, t;
        const r = this.getActiveOverlay();
        if (!r) return null;
        const n =
          null !=
            (t =
              null === (e = this.getDashboardIconUri(r)) || void 0 === e
                ? void 0
                : e.endsWith(".svg")) && t;
        return a.createElement(h.m, {
          name: r.tab_name,
          iconStyle: n ? h.n.BlackToWhite : h.n.Default,
          iconUrl: this.getDashboardIconUri(r),
        });
      }
      get isDarkMode() {
        return this.state.bDesktopDarkMode && this.isOverlayActive(c.i);
      }
      get screenshotMode() {
        return u.d.settings.get(c.n) == Y.Screenshot_Only;
      }
      getCollisionBoundsFadeVisualizationElements() {
        var e, t;
        const r =
          null === (e = VRHTML) || void 0 === e
            ? void 0
            : e.VRChaperoneSetup.GetLiveCollisionBoundsInfo();
        if (!r) return [];
        let n = [];
        const o = null != (t = u.d.settings.get(c.e)) ? t : 0.7;
        for (let e of r) {
          let t = Object(i.V)(Object(i.gb)(e[3], e[0])),
            r = Object(i.V)(Object(i.gb)(e[1], e[0])),
            s = Object(i.h)(t, r),
            l = Object(i.Q)(Object(i.b)(t, r, s)),
            c = Object(i.M)(Object(i.gb)(e[0], e[3]));
          if (c < 0.4) continue;
          let d = Math.max(1, Math.floor(c));
          for (let t = 0; t < d; t++) {
            let r = (t + 1) / (d + 1),
              s = Object(i.g)();
            (s.rotation = l),
              (s.translation = Object(i.N)(r, e[0], e[3])),
              (s.scale = { x: 0.005, y: 0.005, z: o });
            let c = a.createElement(
              i.jb,
              { transform: s },
              a.createElement(
                i.W,
                { value: 0.25 },
                a.createElement(
                  i.hb,
                  { color: { r: 0.2, g: 0.2, b: 0.2 } },
                  a.createElement(i.cb, {
                    source: "laser_pointer",
                    wireframe: !1,
                    culling: i.t.Backface,
                  }),
                ),
              ),
            );
            n.push(c);
          }
          if (n.length > 20) break;
        }
        return n;
      }
      render() {
        var e;
        if (this.state.bShown) {
          const t =
              this.m_setSuppressingFade.size > 0 &&
              (null === (e = this.state.sActiveOverlayID) || void 0 === e
                ? void 0
                : e.startsWith(c.y)),
            r = u.d.settings.get(
              "/settings/dashboard/omitDashboardFadeWithSteamVRHome",
            ),
            n = !q.a.Instance.SceneAppIsHome || !r;
          this.screenshotMode
            ? Object(i.eb)(0)
            : n && !t
              ? Object(i.eb)(this.isDarkMode ? 0.02 : 0.15)
              : Object(i.eb)(1);
        } else Object(i.eb)(1);
        const t = this.state.sActiveOverlayID
            ? this.state.sActiveOverlayID.split("::")[0]
            : "",
          r = this.state.bShown && this.state.setForcingBoundsVisible[t],
          n = r && r.size > 0;
        let o = [];
        return (
          n && (o = this.getCollisionBoundsFadeVisualizationElements()),
          a.createElement(
            "div",
            { className: "DashboardMain" },
            n && a.createElement(ee, null),
            n && a.createElement("span", null, o),
            this.renderInternalOverlays(),
            this.state.bShown && this.renderDashboard(),
          )
        );
      }
      hasOverlay(e) {
        return Object.values(this.m_mapExternalOverlays).some(
          (t) => t.summon_overlay_key == e,
        );
      }
      isOverlayActive(e) {
        return (
          !!this.state.sActiveOverlayID && this.getActiveOverlaySummonKey() == e
        );
      }
      get statusBarAnchorID() {
        return te(this.getActiveOverlaySummonKey())
          ? h.s
          : this.state.sActiveOverlayID + "_TopCenter";
      }
      renderExternalOverlayControlBarButton(e) {
        var t, r;
        const n = this.getDashboardIconUri(e),
          i =
            ((r =
              null === (t = n) || void 0 === t ? void 0 : t.endsWith(".svg")),
            h.c.Center);
        return a.createElement(h.b, {
          key: e.mountable_id,
          label: e.tab_name,
          imageUrl: n,
          imageStyle: i,
          active: this.isOverlayActive(e.summon_overlay_key),
          onClick: () => this.switchToOverlay(e.summon_overlay_key),
        });
      }
      renderControlBar(e, t) {
        var r, n, o, s;
        const p = this.isDarkMode ? { r: 0.05, g: 0.05, b: 0.05 } : null,
          m = this.isDarkMode ? { r: 0.25, g: 0.25, b: 0.25 } : null,
          g = X.k_nControlBarWidthMeters,
          _ =
            null ==
              (r = u.d.settings.get("/settings/dashboard/showPowerOptions")) ||
            r,
          v =
            null == (n = u.d.settings.get("/settings/dashboard/showDesktop")) ||
            n,
          y = !(
            null != (o = u.d.settings.get("/settings/dashboard/arcadeMode")) &&
            o
          ),
          S = q.a.Instance.SceneApplicationState,
          f = q.a.Instance.SceneAppIsHome,
          C = q.a.Instance.SceneAppKey;
        let O = "images/appimage_default.png";
        C && (O = "/app/image?app_key=" + C);
        const D =
          null === (s = VRHTML) || void 0 === s
            ? void 0
            : s.VRDashboardManager.IsRoomViewAvailableAndEnabled();
        let k = { y: -0.25, z: 0 };
        return (
          this.isOverlayActive(c.i) && (k = { y: -0.4, z: 0 }),
          a.createElement(
            i.hb,
            { color: p },
            a.createElement(
              i.X,
              {
                curvature_origin_id: c.h,
                width: g,
                interactive: !1,
                debug_name: "ControlBarBackground",
                sampler: i.s.SingleTap,
                reflect: 0.05,
              },
              a.createElement("div", { className: "ControlBarBackground" }),
            ),
            a.createElement(
              i.jb,
              { translation: { z: 1e-5 } },
              a.createElement(
                i.X,
                {
                  curvature_origin_id: c.h,
                  width: g,
                  interactive: !0,
                  id: h.r,
                  debug_name: "Controls",
                },
                a.createElement(
                  l.b,
                  { className: "ControlBar MainControlBar" },
                  a.createElement(
                    "div",
                    { className: "Section Left" },
                    _ &&
                      a.createElement(h.k, {
                        imageUrl: "/dashboard/images/icons/svr_menu_c.svg",
                        label: Object(d.c)("#Menu"),
                        style: h.d.Small,
                        onClick: () => this.showPopupMenu(Z.Power),
                        onMouseEnter: this.clearPopupMenuTimeout,
                        onMouseLeave: () => this.startPopupMenuTimeout(500),
                      }),
                    v &&
                      a.createElement(h.k, {
                        style: h.d.Small,
                        imageUrl: "/dashboard/images/icons/svr_desktop_alt.svg",
                        label: Object(d.c)("#Desktops"),
                        active: this.isOverlayActive(c.i),
                        onClick: () => this.switchToOverlay(c.i),
                      }),
                    a.createElement(
                      h.e,
                      { style: h.d.Small },
                      a.createElement(
                        a.Fragment,
                        null,
                        e.map(this.renderExternalOverlayControlBarButton),
                        t.length > 0 &&
                          a.createElement(h.b, {
                            imageUrl: "/dashboard/images/icons/svr_more.svg",
                            label: Object(d.c)("#X_More_Overlays", t.length),
                            active:
                              this.state.eShowPopupMenu == Z.ExternalOverlays,
                            onClick: () =>
                              this.showPopupMenu(Z.ExternalOverlays),
                            onMouseEnter: this.clearPopupMenuTimeout,
                            onMouseLeave: () => this.startPopupMenuTimeout(500),
                          }),
                      ),
                    ),
                  ),
                  a.createElement(
                    "div",
                    { className: "Section Center" },
                    a.createElement(h.k, {
                      label: Object(d.c)("#Library"),
                      imageUrl: "/dashboard/images/icons/svr_items.svg",
                      active:
                        this.isOverlayActive(c.o) ||
                        (this.isOverlayActive(c.C) &&
                          R.b.Instance.lastBigPictureEntryPoint ==
                            R.a.QuickLaunch),
                      style: h.d.Large,
                      onClick: this.onQuickLaunchButtonClick,
                    }),
                    S != i.u.None &&
                      a.createElement(
                        "div",
                        { className: "NowPlayingSpacer" },
                        a.createElement(
                          J.a,
                          { allowableParentSelectors: [".DashboardMain"] },
                          a.createElement(
                            i.hb,
                            { color: p },
                            a.createElement(
                              i.jb,
                              { translation: { z: 0.02 } },
                              a.createElement(
                                i.X,
                                {
                                  debug_name: "NowPlayingButton",
                                  interactive: !0,
                                  target_dpi_panel_id: h.r,
                                  curvature_origin_id: c.h,
                                },
                                a.createElement(
                                  "div",
                                  { className: "ControlBar" },
                                  a.createElement(h.k, {
                                    label: f
                                      ? Object(d.c)("#SteamVR_Home")
                                      : Object(d.c)("#Now_Playing"),
                                    active: this.isOverlayActive(c.m),
                                    style: h.d.App,
                                    imageUrl: O,
                                    onClick: () => this.switchToOverlay(c.m),
                                  }),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    a.createElement(h.k, {
                      label: Object(d.c)("#Store"),
                      imageUrl: "/dashboard/images/icons/svr_store.svg",
                      additionalClassNames: "Store",
                      active:
                        this.isOverlayActive(c.p) ||
                        (this.isOverlayActive(c.C) &&
                          R.b.Instance.lastBigPictureEntryPoint ==
                            R.a.QuickStore),
                      style: h.d.Large,
                      onClick: this.onQuickStoreButtonClick,
                    }),
                  ),
                  a.createElement(
                    "div",
                    { className: "Section Right" },
                    a.createElement(
                      h.e,
                      { style: h.d.Small },
                      a.createElement(h.j, null),
                      D &&
                        a.createElement(h.b, {
                          imageUrl: "/dashboard/images/icons/svr_eye.svg",
                          label: Object(d.c)("#Toggle_Room_View"),
                          onClick: this.onToggleRoomView,
                        }),
                      a.createElement(h.p, {
                        active: this.state.eShowPopupMenu == Z.Volume,
                        refVolumeTray: this.m_refVolumeTray,
                        onShowTray: () => this.showPopupMenu(Z.Volume),
                        onHideTray: () => this.showPopupMenu(Z.None),
                        onMouseEnter: this.clearPopupMenuTimeout,
                        onMouseLeave: () => this.startPopupMenuTimeout(500),
                      }),
                    ),
                    y &&
                      a.createElement(h.k, {
                        imageUrl: "/dashboard/images/icons/svr_settings.svg",
                        active: this.isOverlayActive(c.y),
                        enabled: this.hasOverlay(c.y),
                        label: Object(d.c)("#Settings"),
                        style: h.d.Small,
                        centerPanelAnchorID: "VolumeButton",
                        onClick: () => {
                          var e;
                          return null === (e = VRHTML) || void 0 === e
                            ? void 0
                            : e.VROverlay.ShowDashboard(c.y);
                        },
                      }),
                  ),
                ),
                a.createElement(b, {
                  ref: this.m_refDesktopTray,
                  position: 0,
                  visible:
                    this.isOverlayActive(c.i) &&
                    this.state.eShowPopupMenu == Z.None,
                  tintColor: m,
                  darkMode: this.state.bDesktopDarkMode,
                  onToggleDarkMode: () =>
                    this.setState({
                      bDesktopDarkMode: !this.state.bDesktopDarkMode,
                    }),
                  sort_depth_bias: 0.2,
                }),
                a.createElement(h.q, {
                  ref: this.m_refVolumeTray,
                  position: 0.337,
                  visible: this.state.eShowPopupMenu == Z.Volume,
                  onFinalChangeMouseOutside: () => {
                    this.startPopupMenuTimeout(800);
                  },
                  onMouseMove: this.clearPopupMenuTimeout,
                  onMouseLeave: this.popupMenuMouseLeave,
                  sort_depth_bias: 0.4,
                }),
              ),
            ),
            a.createElement(
              i.jb,
              { translation: k, scale: { y: 1.5, x: 1.5 } },
              a.createElement(i.R, {
                mountedId: Object(i.f)(c.A, "system.keyboard"),
              }),
            ),
          )
        );
      }
      renderInternalOverlays() {
        var e, t, r, n;
        const o =
            null !=
            (t =
              null === (e = this.m_refDesktopView.current) || void 0 === e
                ? void 0
                : e.currentDesktopIndex)
              ? t
              : 1,
          s =
            null !=
            (n =
              null === (r = this.m_refDesktopView.current) || void 0 === r
                ? void 0
                : r.desktopCount)
              ? n
              : 1;
        return a.createElement(
          a.Fragment,
          null,
          a.createElement(
            i.j,
            {
              tabName: Object(d.c)("#Library"),
              iconUri: "/dashboard/images/icons/svr_items.svg",
              summonOverlayKey: c.o,
            },
            a.createElement(H, {
              visible: this.state.bShown && this.isOverlayActive(c.o),
              onGameLaunched: () => {
                var e;
                null === (e = VRHTML) ||
                  void 0 === e ||
                  e.VRDashboardManager.HideDashboard("game_launched");
              },
            }),
          ),
          a.createElement(
            i.j,
            {
              tabName: Object(d.c)("#Store"),
              iconUri: "/dashboard/images/icons/svr_store.svg",
              summonOverlayKey: c.p,
            },
            a.createElement(B, {
              visible: this.state.bShown && this.isOverlayActive(c.p),
            }),
          ),
          a.createElement(
            i.j,
            { tabName: Object(d.c)("#Now_Playing"), summonOverlayKey: c.m },
            a.createElement(Q, {
              visible: this.state.bShown && this.isOverlayActive(c.m),
              onExitGame: () => this.switchToOverlay(c.o),
            }),
          ),
          a.createElement(
            i.j,
            {
              summonOverlayKey: c.i,
              tabName:
                s > 1 ? Object(d.c)("#Desktop_X", o) : Object(d.c)("#Desktop"),
              iconUri: "/dashboard/images/icons/svr_desktop_alt.svg",
            },
            a.createElement(v, {
              visible: this.state.bShown && this.isOverlayActive(c.i),
              ref: this.m_refDesktopView,
            }),
          ),
        );
      }
      renderDashboard() {
        var e;
        const t = this.computeFilteredOverlayTabs(),
          r = this.isDarkMode ? { r: 0.02, g: 0.02, b: 0.02 } : null;
        let n = [],
          o = [];
        if (t.length > 2) {
          const r = u.d.settings.get(c.w);
          (n = [
            ((e = t.find((e) => e.summon_overlay_key == r)),
            null != e ? e : t[0]),
          ]),
            (o = t.filter((e) => !n.includes(e)));
        } else n = t;
        let s = null;
        this.isOverlayActive(c.i) && (s = 2048);
        const l = this.screenshotMode,
          d = l ? 2.5 : 1.8;
        return a.createElement(
          i.k,
          null,
          a.createElement(i.jb, { id: c.h, translation: { z: d } }),
          a.createElement(
            i.jb,
            {
              translation: {
                x: l ? 0.1 : 0,
                y: X.getDashboardVerticalPosition(),
                z: -X.getDashboardDistance() * (l ? 1.1 : 1),
              },
              rotation: { x: l ? -20 : 0 },
              scale: X.getDashboardScale(),
            },
            a.createElement(
              i.jb,
              { parent_id: this.statusBarAnchorID, translation: { y: 0.008 } },
              a.createElement(
                i.hb,
                { color: r },
                a.createElement(
                  i.X,
                  {
                    curvature_origin_id: c.h,
                    origin: i.r.BottomCenter,
                    interactive: !1,
                    target_dpi_panel_id: h.r,
                    debug_name: "StatusBar",
                    reflect: 0.1,
                  },
                  a.createElement(
                    "div",
                    { className: "StatusBar", style: { width: s } },
                    a.createElement(
                      "div",
                      { className: "Section Left" },
                      this.renderStatusBarTitle(),
                      a.createElement(h.l, {
                        role: i.v.TrackedControllerRole_LeftHand,
                      }),
                    ),
                    a.createElement(
                      "div",
                      { className: "Section Center" },
                      a.createElement(h.g, null),
                    ),
                    a.createElement(
                      "div",
                      { className: "Section Right" },
                      a.createElement(h.l, {
                        role: i.v.TrackedControllerRole_RightHand,
                      }),
                      a.createElement(
                        "div",
                        { className: "SteamLogo" },
                        a.createElement("img", {
                          src: "/dashboard/images/icons/vr_steam.svg",
                        }),
                      ),
                    ),
                  ),
                ),
              ),
            ),
            a.createElement(
              i.jb,
              { translation: { y: -1.03375, z: 0.05 } },
              this.renderActiveOverlay(),
            ),
            a.createElement(
              i.jb,
              { translation: { y: -1.2, z: 0.15 } },
              a.createElement(
                i.jb,
                { rotation: { x: -35 } },
                this.renderControlBar(n, o),
              ),
              this.state.eShowPopupMenu == Z.Power &&
                a.createElement(
                  i.jb,
                  {
                    translation: { x: -0.4, y: 0.15, z: 0.05 },
                    rotation: { y: 19 },
                  },
                  a.createElement(
                    i.X,
                    {
                      curvature_origin_id: c.h,
                      height: void 0,
                      width: 0.925,
                      interactive: !0,
                      origin: i.r.BottomRight,
                      debug_name: "Power Menu",
                      sort_depth_bias: -0.1,
                    },
                    this.renderPowerMenu(),
                  ),
                ),
              this.state.eShowPopupMenu == Z.ExternalOverlays &&
                a.createElement(
                  i.jb,
                  {
                    translation: { x: 0.2, y: 0.15, z: 0.05 },
                    rotation: { y: 6 },
                  },
                  a.createElement(
                    i.X,
                    {
                      curvature_origin_id: c.h,
                      height: void 0,
                      width: 0.925,
                      interactive: !0,
                      origin: i.r.BottomRight,
                      debug_name: "OverlaysList",
                      sort_depth_bias: -0.1,
                    },
                    this.renderPopupMenu(
                      a.createElement(
                        a.Fragment,
                        null,
                        " ",
                        o.map((e) =>
                          a.createElement(h.i, {
                            key: e.mountable_id,
                            imageUrl: this.getDashboardIconUri(e),
                            label: e.tab_name,
                            onClick: () => {
                              this.switchToOverlay(e.summon_overlay_key),
                                this.showPopupMenu(Z.None);
                            },
                          }),
                        ),
                        " ",
                      ),
                    ),
                  ),
                ),
            ),
          ),
        );
      }
    });
    (re.k_sDashboardMailboxName = "systemui_dashboard"),
      (re.k_sSetDashboardFadeSupressionMessage =
        "set_dashboard_fade_suppression"),
      (re.k_sUpdateDashboardTabsMessage = "update_dashboard_tabs"),
      (re.k_sRequestDashboardTabsMessage = "request_dashboard_tabs"),
      (re.k_sSetDashboardForceBoundsVisible =
        "set_dashboard_force_bounds_visible"),
      (re.k_nControlBarWidthMeters = 2.667),
      (re.s_dashboardUserDistance = void 0),
      (re.s_dashboardUserScale = void 0),
      Object(n.b)(
        [o.bind],
        re.prototype,
        "OnSetDashboardFadeSuppression",
        null,
      ),
      Object(n.b)(
        [o.bind],
        re.prototype,
        "OnSetDashboardForceBoundsVisible",
        null,
      ),
      Object(n.b)([o.bind], re.prototype, "onUpdateDashboardTabs", null),
      Object(n.b)([o.bind], re.prototype, "show", null),
      Object(n.b)([o.bind], re.prototype, "hide", null),
      Object(n.b)([o.bind], re.prototype, "onToggleRoomView", null),
      Object(n.b)([o.bind], re.prototype, "onQuickLaunchButtonClick", null),
      Object(n.b)([o.bind], re.prototype, "onQuickStoreButtonClick", null),
      Object(n.b)([o.bind], re.prototype, "renderPowerMenu", null),
      Object(n.b)([o.bind], re.prototype, "startPopupMenuTimeout", null),
      Object(n.b)([o.bind], re.prototype, "clearPopupMenuTimeout", null),
      Object(n.b)([o.bind], re.prototype, "showPopupMenu", null),
      Object(n.b)([o.bind], re.prototype, "popupMenuMouseLeave", null),
      Object(n.b)([o.bind], re.prototype, "popupMenuMouseUp", null),
      Object(n.b)([m.f], re.prototype, "isDarkMode", null),
      Object(n.b)([m.f], re.prototype, "screenshotMode", null),
      Object(n.b)(
        [o.bind],
        re.prototype,
        "renderExternalOverlayControlBarButton",
        null,
      ),
      Object(n.b)([m.m], re, "s_dashboardUserDistance", void 0),
      Object(n.b)([m.m], re, "s_dashboardUserScale", void 0),
      (re = X = Object(n.b)([p.a], re));
  },
  N46P: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return c;
    });
    var n = r("mrSG"),
      i = r("q1tI"),
      o = r("7wIv"),
      s = r("GXif"),
      a = r("/i/y");
    class l extends i.Component {
      constructor(e) {
        if (
          (super(e),
          (this.m_mailbox = new a.c()),
          this.m_mailbox.Init("legacy_debugger"),
          this.m_mailbox.RegisterHandler(
            "legacy_input_frame",
            this.OnLegacyInputFrame,
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
              "Pressed:",
            ),
          ),
          e.pressed)
        )
          for (let r of e.pressed)
            t.push(
              i.createElement(
                "div",
                { className: "Label LegacyDebuggerButtonName" },
                r,
              ),
            );
        else
          t.push(
            i.createElement(
              "div",
              { className: "Label LegacyDebuggerButtonName" },
              "None",
            ),
          );
        if (
          (t.push(
            i.createElement(
              "div",
              { className: "Label LegacyDebuggerGroup" },
              "Touched:",
            ),
          ),
          e.touched)
        )
          for (let r of e.touched)
            t.push(
              i.createElement(
                "div",
                { className: "Label LegacyDebuggerButtonName" },
                r,
              ),
            );
        else
          t.push(
            i.createElement(
              "div",
              { className: "Label LegacyDebuggerButtonName" },
              "None",
            ),
          );
        if (
          (t.push(
            i.createElement(
              "div",
              { className: "Label LegacyDebuggerGroup" },
              "Supported:",
            ),
          ),
          e.supported_buttons)
        )
          for (let r of e.supported_buttons)
            t.push(
              i.createElement(
                "div",
                { className: "Label LegacyDebuggerButtonName" },
                r,
              ),
            );
        else
          t.push(
            i.createElement(
              "div",
              { className: "Label LegacyDebuggerButtonName" },
              "None",
            ),
          );
        t.push(
          i.createElement(
            "div",
            { className: "Label LegacyDebuggerGroup" },
            "Axis:",
          ),
        );
        for (let r of e.axis)
          t.push(
            i.createElement(
              "div",
              { className: "Label LegacyDebuggerButtonName" },
              "X: ",
              r.x.toFixed(2),
              " Y: ",
              r.y.toFixed(2),
            ),
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
                this.renderController(this.state.currentState.left),
              ),
              i.createElement(
                "div",
                { className: "FlexColumn LegacyDebuggerController" },
                i.createElement("div", { className: "Label" }, "Right"),
                this.renderController(this.state.currentState.right),
              ),
              i.createElement(
                "div",
                { className: "FlexColumn LegacyDebuggerController" },
                i.createElement("div", { className: "Label" }, "HMD"),
                this.renderController(this.state.currentState.hmd),
              ),
            )
          : i.createElement(
              "div",
              { className: "Label" },
              Object(s.c)("#LegacyDebugger_NoApp"),
            );
      }
    }
    Object(n.b)([o.bind], l.prototype, "OnLegacyInputFrame", null);
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
            i.createElement(l, null),
          ),
        );
      }
    }
  },
  V1oe: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return C;
    });
    var n,
      i = r("mrSG"),
      o = r("q1tI"),
      s = r("7wIv"),
      a = r("GXif"),
      l = r("/i/y"),
      c = r("uFkT"),
      d = r("MYgy"),
      u = r("Yd4P"),
      p = r.n(u),
      h = r("okNM"),
      m = r("2vnA"),
      g = r("TbT/"),
      _ = r("GxMB");
    !(function (e) {
      (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
    })(n || (n = {}));
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
            this.ComponentUpdated,
          ),
          this.props.source.touch &&
            this.props.visualizer.RegisterSourceVisualizer(
              this.props.devicePath,
              this.props.sourcePath + "/touch",
              this.ComponentUpdated,
            ),
          this.props.source.value &&
            this.props.visualizer.RegisterSourceVisualizer(
              this.props.devicePath,
              this.props.sourcePath + "/value",
              this.ComponentUpdated,
            ),
          ("joystick" != this.props.source.type &&
            "trackpad" != this.props.source.type) ||
            (this.props.visualizer.RegisterSourceVisualizer(
              this.props.devicePath,
              this.props.sourcePath + "/x",
              this.ComponentUpdated,
            ),
            this.props.visualizer.RegisterSourceVisualizer(
              this.props.devicePath,
              this.props.sourcePath + "/y",
              this.ComponentUpdated,
            )),
          this.props.source.force &&
            this.props.visualizer.RegisterSourceVisualizer(
              this.props.devicePath,
              this.props.sourcePath + "/force",
              this.ComponentUpdated,
            );
      }
      UnregisterForSourceUpdates() {
        this.props.source.click &&
          this.props.visualizer.UnregisterSourceVisualizer(
            this.props.devicePath,
            this.props.sourcePath + "/click",
          ),
          this.props.source.touch &&
            this.props.visualizer.UnregisterSourceVisualizer(
              this.props.devicePath,
              this.props.sourcePath + "/touch",
            ),
          this.props.source.value &&
            this.props.visualizer.UnregisterSourceVisualizer(
              this.props.devicePath,
              this.props.sourcePath + "/value",
            ),
          ("joystick" != this.props.source.type &&
            "trackpad" != this.props.source.type) ||
            (this.props.visualizer.UnregisterSourceVisualizer(
              this.props.devicePath,
              this.props.sourcePath,
            ),
            this.props.visualizer.UnregisterSourceVisualizer(
              this.props.devicePath,
              this.props.sourcePath,
            )),
          this.props.source.force &&
            this.props.visualizer.UnregisterSourceVisualizer(
              this.props.devicePath,
              this.props.sourcePath + "/force",
            );
      }
      ComponentUpdated(e, t, r) {
        e == this.props.devicePath &&
          (t == this.props.sourcePath + "/click" && this.setState({ click: r }),
          t == this.props.sourcePath + "/touch" && this.setState({ touch: r }),
          t == this.props.sourcePath + "/x" && this.setState({ x: r }),
          t == this.props.sourcePath + "/y" && this.setState({ y: r }),
          t == this.props.sourcePath + "/value" && this.setState({ value: r }),
          t == this.props.sourcePath + "/force" && this.setState({ force: r }));
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
            o.createElement("div", { className: "VisualizerButtonBase" + e }),
          )
        );
      }
      renderBar(e, t, r) {
        let n = { width: String(100 * r) + "%" };
        return o.createElement(
          "div",
          { className: "TriggerBar " + t },
          o.createElement(
            "div",
            { className: "VisualizerLabel" },
            Object(a.c)(e),
          ),
          o.createElement(
            "div",
            { className: "TriggerBarBackground" },
            o.createElement("div", {
              className: "TriggerBarContent",
              style: n,
            }),
          ),
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
            r = this.m_svgRef.current.children.namedItem("SourceCircle"),
            i = this.props.side == n.Right,
            o = this.m_nameRef.current.getBoundingClientRect(),
            s = this.m_containerRef.current.getBoundingClientRect(),
            a = this.GetPosition(),
            l = new d.e(0, o.top + o.height / 2);
          l.x = i ? s.left - 10 : s.right + 10;
          let c = i ? -20 : 20,
            u = l.x + c + "," + l.y + " " + a.x + "," + a.y;
          e.setAttribute("points", u);
          let p = l.x + "," + l.y + " " + (l.x + c) + "," + l.y;
          t.setAttribute("points", p),
            r.setAttribute("cx", a.x + ""),
            r.setAttribute("cy", a.y + "");
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
          this.props.side == n.Left
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
                  this.props.sourcePath,
                ),
              ),
              this.renderHeaderVisualization(),
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
                  }),
                ),
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
              }),
            ),
          )
        );
      }
    }
    Object(i.b)([s.bind], b.prototype, "ComponentUpdated", null),
      Object(i.b)([s.bind], b.prototype, "UpdateSVGPath", null);
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
              this.state.value,
            ),
          this.props.source.force &&
            this.renderBar(
              "#SourceInputMode_Force",
              "TriggerForce",
              this.state.force,
            ),
        );
      }
    }
    class S extends b {
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
                Object(a.c)("#SourceInputMode_Position"),
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
                        o.createElement("div", { className: t }),
                      ),
                    ),
                ),
              ),
            ),
            this.props.source.force &&
              this.renderBar(
                "#SourceInputMode_Force",
                "TriggerForce",
                this.state.force,
              ),
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
      renderSource(e, t, r) {
        let n = e + this.ControllerTypeInfo.controller_type;
        switch (t.type) {
          case "button":
            return o.createElement(v, {
              key: n,
              side: r,
              controllerType: this.ControllerTypeInfo,
              devicePath: this.props.devicePath,
              sourcePath: e,
              source: t,
              visualizer: this.props.visualizer,
              imageScale: this.GetPointScale(),
            });
          case "trigger":
            return o.createElement(y, {
              key: n,
              side: r,
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
              key: n,
              side: r,
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
              { key: n },
              "Need to add visualizer for ",
              t.type,
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
          r = this.ControllerTypeInfo;
        return (
          "/user/hand/left" == this.props.devicePath
            ? r.input_bindingui_left &&
              ((e = r.input_bindingui_left.uri),
              (t = r.input_bindingui_left.transform
                ? r.input_bindingui_left.transform
                : ""))
            : "/user/hand/right" == this.props.devicePath
              ? r.input_bindingui_right &&
                ((e = r.input_bindingui_right.uri),
                (t = r.input_bindingui_right.transform
                  ? r.input_bindingui_right.transform
                  : ""))
              : r.input_bindingui_left
                ? ((e = r.input_bindingui_left.uri),
                  (t = r.input_bindingui_left.transform
                    ? r.input_bindingui_left.transform
                    : ""))
                : r.input_bindingui_right &&
                  ((e = r.input_bindingui_right.uri),
                  (t = r.input_bindingui_right.transform
                    ? r.input_bindingui_right.transform
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
                o.createElement(p.a, { onReflow: this.OnImageReflow }),
              )
            : null
        );
      }
      render() {
        let e = [],
          t = [],
          r = this.ControllerTypeInfo,
          i = 0,
          s = [];
        for (let e in r.input_source) {
          let t = r.input_source[e];
          if ("InputValueVisibility_AvailableButHidden" == t.visibility)
            continue;
          let n = this.EstimateSourceHeight(t);
          (i += n),
            s.push({
              sSourcePath: e,
              inputSource: t,
              order: t.order ? t.order : 0,
              height: n,
            });
        }
        let a = 8;
        i > 16 && (a = i / 2);
        let l = 0,
          c = s.sort((e, t) => e.order - t.order);
        for (let r of c) {
          l += r.height;
          let i = l > a ? n.Right : n.Left,
            o = this.renderSource(r.sSourcePath, r.inputSource, i);
          o && (i == n.Left ? e.push(o) : t.push(o));
        }
        return o.createElement(
          "div",
          { className: "ControllerVisualizer" },
          o.createElement(
            "div",
            { className: "VisualizerLeft ControllerVisualizerEntries" },
            e,
          ),
          this.renderImage(),
          o.createElement(
            "div",
            { className: "VisualizerRight ControllerVisualizerEntries" },
            t,
          ),
        );
      }
    }
    Object(i.b)([s.bind], f.prototype, "OnImageLoaded", null),
      Object(i.b)([s.bind], f.prototype, "OnImageReflow", null);
    let C = class extends o.Component {
      constructor(e) {
        super(e),
          (this.m_mailbox = new l.c()),
          (this.m_componentRegistrations = {}),
          (this.m_observeDisposer = null),
          this.m_mailbox.RegisterHandler(
            "update_component_states",
            this.OnUpdateComponentStates,
          ),
          this.m_mailbox
            .Init("controller_visualizer")
            .then(
              () => (
                this.UpdateDeviceInputStateSubscriptions(),
                (this.m_observeDisposer = Object(m.n)(
                  c.a,
                  "ConnectedDevices",
                  this.OnConnectedDevicesChanged,
                )),
                this.SetDefaultDeviceIfNecessary(),
                null
              ),
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
          let r = e.device + t;
          this.m_componentRegistrations[r] &&
            this.m_componentRegistrations[r](e.device, t, e.components[t]);
        }
      }
      RegisterSourceVisualizer(e, t, r) {
        this.m_componentRegistrations[e + t] = r;
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
          (e, t) => this.GetDeviceSortOrder(e) - this.GetDeviceSortOrder(t),
        );
      }
      render() {
        let e,
          t = [],
          r = this.GetSortedDevices();
        if (!r)
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
              Object(a.c)("#TestController_NoController"),
            ),
          );
        for (let n of r)
          "TrackedDeviceClass_HMD" != n.class &&
            (n.root_path == this.state.devicePath && (e = n.serial_number),
            t.push({
              value: n.root_path,
              sLabel: Object(a.c)("#" + n.root_path),
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
            o.createElement(f, {
              devicePath: this.state.devicePath,
              serialNumber: e,
              visualizer: this,
            }),
        );
      }
    };
    Object(i.b)([s.bind], C.prototype, "OnConnectedDevicesChanged", null),
      Object(i.b)([s.bind], C.prototype, "OnUpdateComponentStates", null),
      (C = Object(i.b)([h.a], C));
  },
  YRJX: function (e, t, r) {
    "use strict";
    r.d(t, "s", function () {
      return D;
    }),
      r.d(t, "r", function () {
        return k;
      }),
      r.d(t, "h", function () {
        return M;
      }),
      r.d(t, "a", function () {
        return E;
      }),
      r.d(t, "g", function () {
        return R;
      }),
      r.d(t, "i", function () {
        return I;
      }),
      r.d(t, "d", function () {
        return T;
      }),
      r.d(t, "c", function () {
        return P;
      }),
      r.d(t, "e", function () {
        return x;
      }),
      r.d(t, "b", function () {
        return N;
      }),
      r.d(t, "k", function () {
        return V;
      }),
      r.d(t, "l", function () {
        return B;
      }),
      r.d(t, "n", function () {
        return L;
      }),
      r.d(t, "m", function () {
        return F;
      }),
      r.d(t, "j", function () {
        return A;
      }),
      r.d(t, "f", function () {
        return j;
      }),
      r.d(t, "q", function () {
        return U;
      }),
      r.d(t, "p", function () {
        return W;
      }),
      r.d(t, "o", function () {
        return G;
      });
    var n,
      i,
      o = r("mrSG"),
      s = r("q1tI"),
      a = r("7wIv"),
      l = r("GXif"),
      c = r("6YgL"),
      d = r("CzjV"),
      u = r("hcOo"),
      p = r("/i/y"),
      h = r("7uy8"),
      m = r("2vnA"),
      g = r("Vp/w"),
      _ = r("okNM"),
      b = r("p9CI"),
      v = r("X3sx"),
      y = r("39GS"),
      S = r("nsy5"),
      f = r("8GAN"),
      C = r("vvDA"),
      O = r("Q+Z6");
    const D = "DashboardPanelTopCenter",
      k = "DashboardControlStrip",
      M = (e) => {
        var t;
        const r = null == (t = e.scrollable) || t;
        return s.createElement(
          s.Fragment,
          null,
          s.createElement(
            p.jb,
            { translation: { z: 1e-5 } },
            s.createElement(
              p.X,
              {
                visibility: e.visible ? p.Z.Visible : p.Z.Hidden,
                debug_name: e.debugName,
                curvature_origin_id: h.h,
                origin: p.r.BottomCenter,
                interactive: !0,
                scrollable: r,
                target_dpi_panel_id: k,
                reflect: 0.2,
              },
              s.createElement(
                c.b,
                null,
                s.createElement(
                  b.b,
                  {
                    scrollDirection: r ? b.a.Vertical : b.a.None,
                    className: Object(u.a)(
                      "DashboardPanel",
                      e.additionalClassNames,
                    ),
                    style: e.additionalStyle,
                  },
                  e.children,
                ),
              ),
            ),
          ),
          s.createElement(
            p.X,
            {
              visibility: e.visible ? p.Z.Visible : p.Z.Hidden,
              debug_name: "homepanelbackground",
              curvature_origin_id: h.h,
              origin: p.r.BottomCenter,
              interactive: !1,
              scrollable: !1,
              target_dpi_panel_id: k,
              target_dpi_multiplier: 2,
              reflect: 0.01,
              sampler: p.s.SingleTap,
            },
            s.createElement(p.Y, { id: D, location: p.r.TopCenter }),
            s.createElement("div", {
              className: Object(u.a)(
                "DashboardPanelBackground",
                e.additionalClassNames,
              ),
              style: e.additionalStyle,
            }),
          ),
        );
      };
    function E() {
      return s.createElement(
        "div",
        { className: "ActivitySpinner" },
        s.createElement("div", { className: "Bar" }),
        s.createElement("div", { className: "Bar" }),
        s.createElement("div", { className: "Bar" }),
      );
    }
    class R extends s.Component {
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
          r = null;
        const n = t.toLowerCase(),
          i = Math.max(n.lastIndexOf("am"), n.lastIndexOf("pm"));
        return (
          i >= 0 && ((r = t.substring(i)), (t = t.substring(0, i - 1))),
          s.createElement(
            "div",
            { className: "ClockContainer" },
            s.createElement(
              "div",
              { className: "Clock" },
              t,
              " ",
              s.createElement("span", { className: "Suffix" }, r),
            ),
          )
        );
      }
    }
    function I(e) {
      return s.createElement(
        c.a,
        { className: "PowerMenuButton", onClick: e.onClick },
        s.createElement("div", { className: "HoverGradient" }),
        s.createElement("div", { className: "ClickGradient" }),
        s.createElement("span", null, e.label),
        e.lineBelow && s.createElement("div", { className: "LineBelow" }),
      );
    }
    Object(o.b)([a.bind], R.prototype, "updateTime", null);
    let w = (n = class extends s.Component {
      get isShowingTooltip() {
        return n.s_CurrentlyShownTooltip === this;
      }
      show() {
        n.s_CurrentlyShownTooltip = this;
      }
      hide() {
        this.isShowingTooltip && (n.s_CurrentlyShownTooltip = null);
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
              p.jb,
              { translation: { y: -0.2, z: 0.05 } },
              s.createElement(
                p.X,
                {
                  visibility: e ? p.Z.Visible : p.Z.SkipInSceneGraph,
                  target_dpi_panel_id: k,
                  curvature_origin_id: h.h,
                },
                s.createElement(
                  "div",
                  { className: "ControlBarButtonTooltip" },
                  this.props.text,
                ),
              ),
            ),
          ),
        );
      }
    });
    var T, P;
    (w.s_CurrentlyShownTooltip = null),
      Object(o.b)([m.f], w.prototype, "isShowingTooltip", null),
      Object(o.b)([m.d.bound], w.prototype, "show", null),
      Object(o.b)([m.d.bound], w.prototype, "hide", null),
      Object(o.b)([m.m], w, "s_CurrentlyShownTooltip", void 0),
      (w = n = Object(o.b)([_.a], w)),
      (function (e) {
        (e[(e.Large = 0)] = "Large"),
          (e[(e.Small = 1)] = "Small"),
          (e[(e.App = 2)] = "App");
      })(T || (T = {})),
      (function (e) {
        (e[(e.Center = 0)] = "Center"), (e[(e.Fill = 1)] = "Fill");
      })(P || (P = {}));
    const x = (e) =>
      s.createElement(
        "div",
        { className: Object(u.a)("ControlBarGroup", T[e.style]) },
        e.children,
      );
    let N = class extends s.Component {
      constructor(e) {
        super(e), (this.m_refTooltip = s.createRef());
      }
      onMouseEnter() {
        var e, t, r;
        null === (e = this.m_refTooltip.current) || void 0 === e || e.show(),
          null === (r = (t = this.props).onMouseEnter) ||
            void 0 === r ||
            r.call(t);
      }
      onMouseLeave() {
        var e, t, r;
        null === (e = this.m_refTooltip.current) || void 0 === e || e.hide(),
          null === (r = (t = this.props).onMouseLeave) ||
            void 0 === r ||
            r.call(t);
      }
      render() {
        var e;
        return s.createElement(
          c.a,
          {
            className: Object(u.a)(
              "ControlBarButton",
              this.props.additionalClassNames,
              P[((e = this.props.imageStyle), null != e ? e : P.Center)] +
                "Image",
              ["Disabled", !1 === this.props.enabled],
              ["Active", !!this.props.active],
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
              }),
            ),
          s.createElement(w, {
            text: this.props.label,
            ref: this.m_refTooltip,
          }),
          s.createElement("img", { src: this.props.imageUrl }),
        );
      }
    };
    Object(o.b)([a.bind], N.prototype, "onMouseEnter", null),
      Object(o.b)([a.bind], N.prototype, "onMouseLeave", null),
      (N = Object(o.b)([_.a], N));
    const V = (e) =>
      s.createElement(
        x,
        { style: e.style },
        s.createElement(N, Object.assign({}, e)),
      );
    class B extends s.Component {
      constructor(e) {
        super(e),
          (this.m_BatteryStateChangedCallbackHandle = null),
          (this.m_DeviceRoleChangedCallbackHandle = null),
          (this.m_DeviceEventCallbackHandle = null),
          (this.deviceIndex = p.lb),
          (this.batteryLevelStable = null),
          (this.state = { batteryIconPath: null });
      }
      componentDidMount() {
        var e, t, r;
        (this.m_BatteryStateChangedCallbackHandle =
          null === (e = VRHTML) || void 0 === e
            ? void 0
            : e.RegisterForBatteryStateChangedEvents(
                this.onBatteryStateChanged,
              )),
          (this.m_DeviceRoleChangedCallbackHandle =
            null === (t = VRHTML) || void 0 === t
              ? void 0
              : t.RegisterForDeviceRoleChangedEvents(this.onDeviceRoleChanged)),
          (this.m_DeviceEventCallbackHandle =
            null === (r = VRHTML) || void 0 === r
              ? void 0
              : r.RegisterForDeviceEvents(this.onDeviceEvent)),
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
          t = !1;
        const r = VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
          this.props.role,
        );
        if (
          (r != this.deviceIndex &&
            ((this.batteryLevelStable = null), (this.deviceIndex = r)),
          r != p.lb &&
            ((e = VRHTML.VRProperties.GetBoolProperty(
              r,
              p.x.DeviceProvidesBatteryStatus_Bool,
            )),
            e))
        ) {
          const e = VRHTML.VRProperties.GetFloatProperty(
            r,
            p.x.DeviceBatteryPercentage_Float,
          );
          (t = VRHTML.VRProperties.GetBoolProperty(
            r,
            p.x.DeviceIsCharging_Bool,
          )),
            null == this.batteryLevelStable || 0 == this.batteryLevelStable
              ? (this.batteryLevelStable = e)
              : ((this.batteryLevelStable = Math.min(
                  this.batteryLevelStable,
                  e + B.kBatteryLevelHysteresis,
                  1,
                )),
                (this.batteryLevelStable = Math.max(
                  this.batteryLevelStable,
                  e - B.kBatteryLevelHysteresis,
                  0,
                )));
        }
        let n = C.a.GetBatteryIcon(e, t, this.batteryLevelStable);
        n != this.state.batteryIconPath &&
          this.setState({ batteryIconPath: n });
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
      onDeviceEvent(e, t, r) {
        (e != p.m.Activated && e != p.m.Deactivated) || this.update();
      }
      render() {
        return s.createElement(
          "div",
          { className: "BatteryStatus" },
          s.createElement("img", { src: this.state.batteryIconPath }),
        );
      }
    }
    (B.kBatteryLevelHysteresis = 0.02),
      Object(o.b)([a.bind], B.prototype, "updateControllerStatus", null),
      Object(o.b)([a.bind], B.prototype, "onBatteryStateChanged", null),
      Object(o.b)([a.bind], B.prototype, "onDeviceRoleChanged", null),
      Object(o.b)([a.bind], B.prototype, "onDeviceEvent", null);
    s.Component;
    var L;
    !(function (e) {
      (e[(e.Default = 0)] = "Default"),
        (e[(e.BlackToWhite = 1)] = "BlackToWhite");
    })(L || (L = {}));
    const F = (e) => {
      var t;
      const r = null != (t = e.iconStyle) ? t : L.Default;
      let n = null;
      if (e.iconUrl)
        switch (r) {
          case L.BlackToWhite:
            n = s.createElement(
              "div",
              { className: "Icon" },
              s.createElement("img", { className: "Shadow", src: e.iconUrl }),
              s.createElement("img", {
                className: "BlackToWhite",
                src: e.iconUrl,
              }),
            );
            break;
          default:
            n = s.createElement(
              "div",
              { className: "Icon" },
              s.createElement("img", { src: e.iconUrl }),
            );
        }
      return s.createElement("div", { className: "Title" }, n, e.name);
    };
    class A extends s.Component {
      constructor(e) {
        var t, r;
        super(e),
          (this.m_trackingStateChangedEventHandle = null),
          (this.m_mailbox = new p.c()),
          this.m_mailbox.Init("dashboard_resetseatedbutton"),
          (this.state = {
            eTrackingUniverseOrigin:
              ((r =
                null === (t = VRHTML) || void 0 === t
                  ? void 0
                  : t.VRCompositor.GetTrackingSpace()),
              null != r ? r : p.y.Standing),
          });
      }
      componentDidMount() {
        var e;
        (this.m_trackingStateChangedEventHandle =
          null === (e = VRHTML) || void 0 === e
            ? void 0
            : e.VRCompositor.RegisterForTrackingSpaceChangedEvents(
                this.onTrackingSpaceChanged,
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
            null != t ? t : p.y.Standing),
        });
      }
      onResetSeatedOrigin() {
        var e;
        null === (e = VRHTML) ||
          void 0 === e ||
          e.VRDashboardManager.HideDashboard("reset_seated_zero");
        let t = { type: f.a, countdown_seconds: 3 };
        this.m_mailbox.SendMessage(f.b, t);
      }
      render() {
        return this.state.eTrackingUniverseOrigin != p.y.Seated
          ? null
          : s.createElement(N, {
              imageUrl: "/dashboard/images/icons/svr_reset_tracking.svg",
              label: Object(l.c)("#PowerMenuResetSeatedPosition"),
              onClick: this.onResetSeatedOrigin,
            });
      }
    }
    Object(o.b)([a.bind], A.prototype, "onTrackingSpaceChanged", null),
      Object(o.b)([a.bind], A.prototype, "onResetSeatedOrigin", null);
    class j extends s.Component {
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
        if (!this.m_refPanelElem.current || !this.m_refBackgroundElem.current)
          return;
        const e = this.m_refPanelElem.current.getBoundingClientRect();
        (this.m_refBackgroundElem.current.style.width = e.width / 2 + "px"),
          (this.m_refBackgroundElem.current.style.height = e.height / 2 + "px");
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
            p.Y,
            { location: { x: e, y: -1 } },
            s.createElement(p.jb, {
              id: this.m_sAnchorID,
              translation: { y: 0.01 * Math.abs(t), z: -0.03 * Math.abs(t) },
              rotation: { y: 15 * t, z: 2 * t },
            }),
          ),
          s.createElement(
            g.b,
            {
              allowableParentSelectors: [".DashboardMain"],
              onPortalDidMount: this.onPortalDidMount,
            },
            s.createElement(
              p.hb,
              { color: this.props.tintColor },
              s.createElement(
                S.a,
                {
                  additionalClassName: "ControlBarTrayAnimation",
                  visible: this.props.visible,
                  duration: 0.25,
                  onStartShowing: this.updateBackgroundSize,
                },
                s.createElement(
                  p.jb,
                  {
                    parent_id: this.m_sAnchorID,
                    translation: { y: 0.04, z: -0.01 },
                  },
                  s.createElement(
                    p.X,
                    {
                      curvature_origin_id: h.h,
                      origin: p.r.TopCenter,
                      interactive: !0,
                      scrollable: !1,
                      target_dpi_panel_id: k,
                      sort_depth_bias: this.props.sort_depth_bias,
                    },
                    s.createElement(
                      "div",
                      {
                        className: Object(u.a)(
                          "ControlBarTray",
                          this.props.additionalClassNames,
                        ),
                        onMouseEnter: this.props.onMouseEnter,
                        onMouseMove: this.props.onMouseMove,
                        onMouseLeave: this.props.onMouseLeave,
                        ref: this.m_refPanelElem,
                      },
                      this.props.children,
                    ),
                  ),
                  s.createElement(
                    p.jb,
                    { translation: { z: -1e-5 } },
                    s.createElement(
                      p.X,
                      {
                        curvature_origin_id: h.h,
                        origin: p.r.TopCenter,
                        interactive: !1,
                        scrollable: !1,
                        target_dpi_panel_id: k,
                        target_dpi_multiplier: 2,
                        reflect: 0.04,
                        sampler: p.s.SingleTap,
                        sort_depth_bias: this.props.sort_depth_bias,
                      },
                      s.createElement("div", {
                        className: "ControlBarTrayBackground",
                        ref: this.m_refBackgroundElem,
                      }),
                    ),
                  ),
                ),
              ),
            ),
          ),
        );
      }
    }
    Object(o.b)([a.bind], j.prototype, "onResizeObserved", null),
      Object(o.b)([a.bind], j.prototype, "updateBackgroundSize", null),
      Object(o.b)([a.bind], j.prototype, "onPortalDidMount", null);
    let U = class extends s.Component {
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
          O.d.settings.get(
            "/settings/audio/enablePlaybackMirrorIndependentVolume",
          ) && O.d.settings.get("/settings/audio/enablePlaybackMirror")
        );
      }
      get enableAudioMirrorControls() {
        return !!O.d.settings.get("/settings/audio/activePlaybackMirrorDevice");
      }
      render() {
        const e =
          (this.showAudioMirrorControls ? 3 : 2) >= 3 ? 0 : this.props.position;
        return s.createElement(
          j,
          Object.assign({}, this.props, {
            position: e,
            ref: this.m_refTray,
            additionalClassNames: "VolumeTray",
          }),
          s.createElement(
            "div",
            { className: "Section" },
            s.createElement(
              z,
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
              }),
            ),
            s.createElement(H, {
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
            }),
          ),
          this.showAudioMirrorControls &&
            s.createElement(
              "div",
              { className: "Section" },
              s.createElement(
                z,
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
                }),
              ),
              s.createElement(H, {
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
              }),
            ),
          s.createElement(
            "div",
            { className: "Section" },
            s.createElement(
              z,
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
              }),
            ),
            s.createElement(H, {
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
            }),
          ),
        );
      }
    };
    Object(o.b)([a.bind], U.prototype, "onSliderMouseEnter", null),
      Object(o.b)([a.bind], U.prototype, "onSliderMouseLeave", null),
      Object(o.b)([a.bind], U.prototype, "onSliderFinalChange", null),
      Object(o.b)([m.f], U.prototype, "showAudioMirrorControls", null),
      Object(o.b)([m.f], U.prototype, "enableAudioMirrorControls", null),
      (U = Object(o.b)([_.a], U));
    let H = class extends s.Component {
      constructor(e) {
        super(e), (this.state = { bSliding: !1, bHover: !1 });
      }
      onMouseEnter(e) {
        var t, r;
        this.setState({ bHover: !0 }),
          null === (r = (t = this.props).onMouseEnter) ||
            void 0 === r ||
            r.call(t, e);
      }
      onMouseLeave(e) {
        var t, r;
        this.setState({ bHover: !1 }),
          null === (r = (t = this.props).onMouseLeave) ||
            void 0 === r ||
            r.call(t, e);
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
        return (
          delete e.title,
          s.createElement(
            "div",
            { className: "SliderContainer" },
            this.props.title &&
              s.createElement(w, {
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
              }),
            ),
          )
        );
      }
    };
    Object(o.b)([a.bind], H.prototype, "onMouseEnter", null),
      Object(o.b)([a.bind], H.prototype, "onMouseLeave", null),
      Object(o.b)([a.bind], H.prototype, "onInteractionStart", null),
      Object(o.b)([a.bind], H.prototype, "onInteractionEnd", null),
      (H = Object(o.b)([_.a], H));
    let z = class extends s.Component {
      constructor(e) {
        super(e), (this.m_refTooltip = s.createRef());
      }
      onMouseEnter(e) {
        var t, r, n;
        null === (t = this.m_refTooltip.current) || void 0 === t || t.show(),
          null === (n = (r = this.props).onMouseEnter) ||
            void 0 === n ||
            n.call(r, e);
      }
      onMouseLeave(e) {
        var t, r, n;
        null === (t = this.m_refTooltip.current) || void 0 === t || t.hide(),
          null === (n = (r = this.props).onMouseLeave) ||
            void 0 === n ||
            n.call(r, e);
      }
      render() {
        return s.createElement(
          c.a,
          Object.assign({}, this.props, {
            className: Object(u.a)(
              "ButtonControl",
              "Round",
              this.props.className,
            ),
            onMouseEnter: this.onMouseEnter,
            onMouseLeave: this.onMouseLeave,
          }),
          this.props.title &&
            s.createElement(w, {
              text: this.props.title,
              ref: this.m_refTooltip,
            }),
          this.props.children,
        );
      }
    };
    Object(o.b)([a.bind], z.prototype, "onMouseEnter", null),
      Object(o.b)([a.bind], z.prototype, "onMouseLeave", null),
      (z = Object(o.b)([_.a], z));
    let W = (i = class extends s.Component {
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
        var t, r;
        (this.m_vecOriginalMousePosition = { x: e.clientX, y: e.clientY }),
          window.document.addEventListener("mouseup", this.onWindowMouseUp),
          window.document.addEventListener("mousemove", this.onWindowMouseMove),
          null === (r = (t = this.props).onShowTray) ||
            void 0 === r ||
            r.call(t);
      }
      onWindowMouseMove(e) {
        if (!this.slider || this.slider.isSliding) return;
        const t = { x: e.clientX, y: e.clientY };
        Object(p.L)(Object(p.fb)(t, this.m_vecOriginalMousePosition)) >
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
        var e, t, r, n;
        window.document.removeEventListener("mouseup", this.onWindowMouseUp),
          window.document.removeEventListener(
            "mousemove",
            this.onWindowMouseMove,
          ),
          (null === (e = this.slider) || void 0 === e ? void 0 : e.isSliding) &&
            (null === (r = (t = this.props).onHideTray) ||
              void 0 === r ||
              r.call(t)),
          null === (n = this.slider) || void 0 === n || n.stopExternalSliding();
      }
      render() {
        return s.createElement(N, {
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
    (W.MIN_DRAG_THRESHOLD = 35),
      Object(o.b)([a.bind], W.prototype, "onButtonMouseDown", null),
      Object(o.b)([a.bind], W.prototype, "onWindowMouseMove", null),
      Object(o.b)([a.bind], W.prototype, "onWindowMouseUp", null),
      (W = i = Object(o.b)([_.a], W));
    const G = (e) => {
      const t = s.useRef();
      return s.createElement(
        c.a,
        {
          className: Object(u.a)(
            "ButtonControl",
            ["Active", e.active],
            ["WithIcon", !!e.iconUrl],
            e.additionalClassNames,
          ),
          onClick: e.onClick,
          onMouseEnter: () => {
            var e;
            return null === (e = t.current) || void 0 === e ? void 0 : e.show();
          },
          onMouseLeave: () => {
            var e;
            return null === (e = t.current) || void 0 === e ? void 0 : e.hide();
          },
        },
        e.title && s.createElement(w, { text: e.title, ref: t }),
        e.label && s.createElement("span", null, e.label),
        e.iconUrl &&
          s.createElement("img", {
            className: "Icon BlackToWhite",
            src: e.iconUrl,
          }),
      );
    };
  },
  "ru2+": function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return _;
    });
    var n = r("mrSG"),
      i = r("q1tI"),
      o = r("okNM"),
      s = r("7wIv"),
      a = r("GXif"),
      l = r("MYgy"),
      c = r("Z0gP"),
      d = r("2vnA"),
      u = r("uFkT"),
      p = r("6YgL"),
      h = r("hcOo"),
      m = r("TbT/");
    let g = class extends i.Component {
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
          this.trackerConfig.controller_role,
        );
      }
      OnControllerRoleChanged(e) {
        l.a.SetTrackerBinding(
          this.props.trackerPath,
          this.trackerConfig.role,
          e,
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
        let r = t;
        r.includes("vive_tracker") &&
          (r = r.substring(
            r.indexOf("vive_tracker") + "vive_tracker".length,
            r.length,
          ));
        let n = null;
        return (
          this.IsConnected()
            ? this.IsIdentifiable() ||
              (n = Object(a.c)(
                "#Settings_ViveTracker_Identify_NotIdentifiable",
              ))
            : (n = Object(a.c)("#Settings_ViveTracker_Identify_NotConnected")),
          i.createElement(
            m.c,
            { className: "SettingsItem TrackerEntry" },
            i.createElement(
              "div",
              { className: "Label", title: t },
              i.createElement("span", null, r),
              i.createElement("div", {
                title: Object(a.c)(
                  this.IsConnected()
                    ? "#Settings_ViveTracker_Connected"
                    : "#Settings_ViveTracker_Disconnected",
                ),
                className: Object(h.a)(
                  "TrackerConnectionIndicator",
                  ["Connected", c.a.connected && this.IsConnected()],
                  ["Disconnected", c.a.connected && !this.IsConnected()],
                ),
              }),
            ),
            i.createElement(
              "div",
              { className: Object(h.a)("SubsectionStem") },
              i.createElement(
                m.c,
                { title: n },
                i.createElement(
                  p.a,
                  {
                    className: "ButtonControl",
                    enabled: this.IsIdentifiable(),
                    onClick: this.BuzzTracker,
                  },
                  Object(a.c)("#TrackerEditor_BuzzTracker"),
                ),
              ),
            ),
            i.createElement(
              "div",
              { className: "Subsection WithStem" },
              i.createElement(m.h, {
                label: Object(a.c)("#Settings_ViveTracker_Role"),
                items: this.props.validTrackerRoles.map((e) => ({
                  value: e,
                  sLabel: Object(a.c)("#" + e),
                })),
                value: this.trackerConfig.role,
                onChange: this.OnTrackerRoleChanged,
              }),
              e.length > 0 &&
                i.createElement(m.h, {
                  label: Object(a.c)("#Settings_ViveTracker_Hand"),
                  items: e,
                  value: this.trackerConfig.controller_role,
                  onChange: this.OnControllerRoleChanged,
                }),
            ),
          )
        );
      }
    };
    Object(n.b)([d.f], g.prototype, "trackerConfig", null),
      Object(n.b)([s.bind], g.prototype, "OnTrackerRoleChanged", null),
      Object(n.b)([s.bind], g.prototype, "OnControllerRoleChanged", null),
      Object(n.b)([s.bind], g.prototype, "BuzzTracker", null),
      Object(n.b)([d.f], g.prototype, "deviceInfo", null),
      (g = Object(n.b)([o.a], g));
    let _ = class extends i.Component {
      constructor(e) {
        super(e), (this.m_nGetInputStateIntervalHandle = 0);
      }
      componentDidMount() {
        (this.m_nGetInputStateIntervalHandle = window.setInterval(
          () => u.a.GetInputState(),
          2e3,
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
            (t = e.trackers.map((t, r) =>
              i.createElement(g, {
                key: r,
                trackerPath: t.device_path_string,
                validTrackerRoles: e.valid_roles,
              }),
            )),
          i.createElement("div", { className: "TrackerEditorModal" }, t)
        );
      }
    };
    _ = Object(n.b)([o.a], _);
  },
  vvDA: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return a;
    });
    var n = r("mrSG"),
      i = r("q1tI"),
      o = r("7wIv"),
      s = r("/i/y");
    class a extends i.Component {
      constructor(e) {
        super(e),
          (this.m_BatteryStateChangedCallbackHandle = null),
          (this.m_DeviceRoleChangedCallbackHandle = null),
          (this.m_DeviceEventCallbackHandle = null),
          (this.batteryLevelStable = null),
          (this.state = { batteryIconPath: null, roleIconPath: null });
      }
      componentDidMount() {
        var e, t, r;
        (this.m_BatteryStateChangedCallbackHandle =
          null === (e = s.kb) || void 0 === e
            ? void 0
            : e.RegisterForBatteryStateChangedEvents(
                this.OnBatteryStateChanged,
              )),
          (this.m_DeviceRoleChangedCallbackHandle =
            null === (t = s.kb) || void 0 === t
              ? void 0
              : t.RegisterForDeviceRoleChangedEvents(this.OnDeviceRoleChanged)),
          (this.m_DeviceEventCallbackHandle =
            null === (r = s.kb) || void 0 === r
              ? void 0
              : r.RegisterForDeviceEvents(this.OnDeviceEvent)),
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
        if (!s.kb) return;
        const t = s.kb.VRProperties.GetBoolProperty(
            this.props.trackedDeviceIndex,
            s.x.DeviceProvidesBatteryStatus_Bool,
          ),
          r = s.kb.VRSystem.GetControllerRoleForTrackedDeviceIndex(
            this.props.trackedDeviceIndex,
          );
        let n = !1;
        if (t) {
          const t =
            null !=
            (e = s.kb.VRProperties.GetFloatProperty(
              this.props.trackedDeviceIndex,
              s.x.DeviceBatteryPercentage_Float,
            ))
              ? e
              : 0;
          (n = s.kb.VRProperties.GetBoolProperty(
            this.props.trackedDeviceIndex,
            s.x.DeviceIsCharging_Bool,
          )),
            null == this.batteryLevelStable || 0 == this.batteryLevelStable
              ? (this.batteryLevelStable = t)
              : ((this.batteryLevelStable = Math.min(
                  this.batteryLevelStable,
                  t + a.kBatteryLevelHysteresis,
                  1,
                )),
                (this.batteryLevelStable = Math.max(
                  this.batteryLevelStable,
                  t - a.kBatteryLevelHysteresis,
                  0,
                )));
        }
        let i = a.GetBatteryIcon(t, n, this.batteryLevelStable),
          o = this.GetRoleIcon(r);
        (i == this.state.batteryIconPath && o == this.state.roleIconPath) ||
          this.setState({ batteryIconPath: i, roleIconPath: o });
      }
      GetRoleIcon(e) {
        switch (e) {
          case s.v.TrackedControllerRole_RightHand:
            return "images/icons/controller_model_right.png";
          case s.v.TrackedControllerRole_LeftHand:
            return "images/icons/controller_model_left.png";
        }
        return null;
      }
      static GetBatteryIcon(e, t, r) {
        return e
          ? t
            ? r < 0.15
              ? "images/icons/controller_model_charging_red.png"
              : "images/icons/controller_model_charging.png"
            : 0 == r
              ? null
              : r < 0.15
                ? "images/icons/controller_model_low.png"
                : r < 0.3
                  ? "images/icons/controller_model_battery_1.png"
                  : r < 0.6
                    ? "images/icons/controller_model_battery_2.png"
                    : r < 0.9
                      ? "images/icons/controller_model_battery_3.png"
                      : "images/icons/controller_model_battery_4.png"
          : null;
      }
      OnBatteryStateChanged(e) {
        e == this.props.trackedDeviceIndex && this.UpdateControllerStatus();
      }
      OnDeviceRoleChanged() {
        this.UpdateControllerStatus();
      }
      OnDeviceEvent(e, t, r) {
        e == s.m.Activated &&
          r == this.props.trackedDeviceIndex &&
          this.UpdateControllerStatus();
      }
      render() {
        return i.createElement(
          s.X,
          {
            width: void 0,
            height: void 0,
            interactive: !1,
            rendermodel_component_device_index: this.props.trackedDeviceIndex,
            rendermodel_component_name: "status",
            debug_name: "controllerstatus_" + this.props.trackedDeviceIndex,
          },
          i.createElement(
            "div",
            {
              className: "ControllerStatusRoot",
              style: { width: 256, height: 256 },
            },
            i.createElement(
              "div",
              { className: "ControllerStatusFrame" },
              i.createElement(
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
                i.createElement("img", {
                  className: "ControllerHand",
                  src: this.state.roleIconPath,
                }),
              ),
              i.createElement(
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
                i.createElement("img", {
                  className: "ControllerBattery",
                  src: this.state.batteryIconPath,
                }),
              ),
            ),
          ),
        );
      }
    }
    (a.kBatteryLevelHysteresis = 0.02),
      Object(n.b)([o.bind], a.prototype, "OnBatteryStateChanged", null),
      Object(n.b)([o.bind], a.prototype, "OnDeviceRoleChanged", null),
      Object(n.b)([o.bind], a.prototype, "OnDeviceEvent", null);
  },
});
//# sourceMappingURL=settings.js.map?v=637fc1790e04a9d7c195
