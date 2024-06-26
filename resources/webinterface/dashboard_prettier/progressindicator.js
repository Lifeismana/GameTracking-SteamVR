/*!
 * (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 *
 */ !(function (e) {
  function t(t) {
    for (
      var n, s, a = t[0], l = t[1], d = t[2], u = 0, p = [];
      u < a.length;
      u++
    )
      (s = a[u]),
        Object.prototype.hasOwnProperty.call(i, s) && i[s] && p.push(i[s][0]),
        (i[s] = 0);
    for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
    for (c && c(t); p.length; ) p.shift()();
    return o.push.apply(o, d || []), r();
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
    i = { 9: 0 },
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
  for (var d = 0; d < a.length; d++) t(a[d]);
  var c = l;
  o.push(["hA31", 0, 1]), r();
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
      Init(e, t) {
        return Object(n.a)(this, void 0, void 0, function* () {
          return (
            (this.m_sMailboxName = e),
            (this.m_sWebSecret = t),
            (this.connected = !1),
            this.OpenWebSocketToHost()
          );
        });
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
    function d(e, t, r) {
      return {
        x: t.x + e * (r.x - t.x),
        y: t.y + e * (r.y - t.y),
        z: t.z + e * (r.z - t.z),
      };
    }
    function c(e, t) {
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
    function _(e) {
      return Math.sqrt(e.x * e.x + e.y * e.y);
    }
    function m(e) {
      return Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z);
    }
    function g(e) {
      if (void 0 === e) return;
      let t = 0.5 * e.x,
        r = 0.5 * e.y,
        n = 0.5 * e.z,
        i = Math.cos(t),
        o = Math.cos(r),
        s = Math.cos(n),
        a = Math.sin(t),
        l = Math.sin(r),
        d = Math.sin(n);
      return {
        w: i * o * s + a * l * d,
        x: a * o * s + i * l * d,
        y: i * l * s - a * o * d,
        z: i * o * d - a * l * s,
      };
    }
    function f(e) {
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
    function b(e) {
      return v(e.rotation, { x: 0, y: 0, z: 1 });
    }
    function S(e) {
      let t = m(e);
      return { x: e.x / t, y: e.y / t, z: e.z / t };
    }
    function D(e, t) {
      return {
        x: e.y * t.z - e.z * t.y,
        y: e.z * t.x - e.x * t.z,
        z: e.x * t.y - e.y * t.x,
      };
    }
    function R(e) {
      let t = e.w * e.w + e.x * e.x + e.y * e.y + e.z * e.z;
      return { w: e.w / t, x: -e.x / t, y: -e.y / t, z: -e.z / t };
    }
    Object(n.b)([i.bind], s.prototype, "OpenWebSocketToHost", null),
      Object(n.b)([i.bind], s.prototype, "OnWebSocketOpen", null),
      Object(n.b)([i.bind], s.prototype, "OnWebSocketClose", null),
      Object(n.b)([i.bind], s.prototype, "WebSocketSend", null),
      Object(n.b)([i.bind], s.prototype, "OnWebSocketMessage", null);
    var I = r("q1tI");
    function C(e, t) {
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
    function x(e, t) {
      let r = e.getAttribute(t);
      if (r && r.length > 0) return parseInt(r);
    }
    function P(e, t) {
      let r = e.getAttribute(t);
      if (r && r.length > 0)
        return (
          "true" == r ||
          (r.length > 0 && 0 != parseInt(r) && !isNaN(parseInt(r)))
        );
    }
    function O(e, t) {
      let r = e.getAttribute(t);
      if (r && r.length > 0) return r;
    }
    function w(e, t) {
      return W(O(e, t));
    }
    function F(e, t) {
      let r = { type: e, properties: {} };
      return (
        t.id && (r.properties.id = W(t.id)),
        (r.properties.sgid = x(t, "sgid")),
        r
      );
    }
    function T(e, t) {
      let [r, n] = (function (e, t) {
          let r = t.buildNode;
          if (r) return r(e, t);
          let n = Object.assign({}, e),
            i = null;
          switch (t.nodeName.toUpperCase()) {
            case "VSG-TRANSFORM":
              (i = F("transform", t)),
                (i.properties.translation = C(t, "translation")),
                (i.properties.rotation = C(t, "rotation")),
                (i.properties.scale = C(t, "scale")),
                (i.properties["parent-path"] = O(t, "parent-path")),
                (i.properties["parent-origin"] = O(t, "parent-origin")),
                (i.properties["parent-id"] = w(t, "parent-id"));
              break;
            case "VSG-TRACKING-STATE-VISIBILITY":
              (i = F("trackingstatevisibility", t)),
                (i.properties["visible-0dof"] = P(t, "visible-0dof")),
                (i.properties["visible-3dof"] = P(t, "visible-3dof")),
                (i.properties["visible-6dof"] = P(t, "visible-6dof"));
              break;
            case "VSG-ELASTIC-HEAD-TRANSFORM":
              (i = F("elasticheadtransform", t)),
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
                (i.properties["lock-to-horizon"] = P(t, "lock-to-horizon")),
                (i.properties["translation-behavior"] = x(
                  t,
                  "translation-behavior",
                ));
              break;
            case "VSG-LINE":
              (i = F("line", t)),
                (i.properties["target-id"] = w(t, "target-id")),
                (i.properties.thickness = M(t, "thickness")),
                (i.properties["start-buffer"] = M(t, "start-buffer")),
                (i.properties["end-buffer"] = M(t, "end-buffer"));
              break;
            case "VSG-LINE-CONSTRAINED-TRANSFORM":
              (i = F("line-constrained-transform", t)),
                (i.properties["target-id"] = w(t, "target-id")),
                (i.properties["source-id"] = w(t, "source-id")),
                (i.properties["source-distance"] = M(t, "source-distance")),
                (i.properties["target-limit"] = M(t, "target-limit"));
              break;
            case "VSG-CALLOUT-TRANSFORM":
              (i = F("callout-transform", t)),
                (i.properties.offset = C(t, "offset"));
              break;
            case "VSG-HEAD-FACING-TRANSFORM":
              i = F("head-facing-transform", t);
              break;
            case "VSG-PIN-TO-VIEW-TRANSFORM":
              (i = F("pin-to-view-transform", t)),
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
          let e = T(r, n);
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
    let B,
      N,
      A,
      k,
      E = [],
      V = null,
      U = null,
      L = null;
    function H(e, t) {
      return e + "::" + t;
    }
    function W(e) {
      return e
        ? (function (e) {
            return e && e.includes("::");
          })(e)
          ? e
          : H(z(), e)
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
        : B;
    }
    function G() {
      k = !0;
    }
    function j(e) {
      e != L && ((L = e), q());
    }
    function q() {
      V ||
        (V = window.setTimeout(
          () =>
            Object(n.a)(this, void 0, void 0, function* () {
              let e = document.body;
              N && (e = N);
              let t = {
                type: "root",
                rootproperties: {
                  relatchDashboardTransform: k,
                  sceneCompositeMult: L,
                },
                children: T({ currentPanel: null, bShouldAbort: !1 }, e),
              };
              if (VRHTML) {
                let e = JSON.stringify(t);
                VRHTML.UpdateSceneGraph(e, E);
              } else {
                U ||
                  (console.log("Initializing sg_mailbox"),
                  (U = new s()),
                  yield U.Init("sg_mailbox", A));
                let e = {
                  type: "update_scene_graph",
                  owning_overlay_key: B,
                  scene_graph: t,
                  retired_sgids: E,
                };
                U.SendMessage("vrcompositor_mailbox", e);
              }
              (V = null), (E = []), (k = !1);
            }),
          0,
        ));
    }
    function K(e, t) {
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
    function Y(e) {
      var t;
      return null ===
        (t = (function (e) {
          if (e) return [e.x, e.y, e.z];
        })(e)) || void 0 === t
        ? void 0
        : t.join(" ");
    }
    class Z extends I.Component {
      constructor(e) {
        super(e),
          (this.m_domRef = I.createRef()),
          (this.m_buildNodeOverride = null),
          (this.m_SGID = Z.s_NextSGID),
          (Z.s_NextSGID = (Z.s_NextSGID + 1) % 4294967296);
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
        return F(this.getNodeType(), e);
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
          E.push(e),
          q(),
          this.m_domRef.current &&
            this.m_buildNodeOverride &&
            delete this.m_domRef.current.buildNode;
      }
      render() {
        return I.cloneElement(this.internalRender(), {
          id: this.props.id,
          "vsg-type": this.getNodeType(),
          sgid: this.m_SGID,
          ref: this.m_domRef,
        });
      }
      internalRender() {
        return this.m_buildNodeOverride
          ? I.createElement("vsg-node", null, this.props.children)
          : null;
      }
    }
    Z.s_NextSGID = 1;
    class $ extends Z {
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
    class ee extends Z {
      constructor(e) {
        super(e), super.setBuildNodeOverride(this.buildNode);
      }
      getNodeType() {
        return "mountedscenegraph";
      }
      buildNode(e, t) {
        const r = this.createSgNode(t);
        return (r.properties.mountable_id = W(this.props.mountedId)), [e, r];
      }
    }
    Object(n.b)([o.a], ee.prototype, "buildNode", null);
    class te extends Z {
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
          (n.properties.mountable_id = W(this.m_sMountableUnqualifiedID)),
          (n.properties.icon_uri = this.props.iconUri),
          (n.properties.icon_overlay_key = this.props.iconOverlayKey),
          (n.properties.summon_overlay_key = this.props.summonOverlayKey),
          [e, n]
        );
      }
      internalRender() {
        return I.createElement(
          "vsg-node",
          { id: this.props.id },
          I.createElement(
            $,
            { id: this.m_sMountableUnqualifiedID },
            this.props.children,
          ),
        );
      }
    }
    Object(n.b)([o.a], te.prototype, "buildNode", null);
    class re extends Z {
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
            let e = Q(this.props.color, { r: 1, g: 1, b: 1 });
            r.properties.color = [e.r, e.g, e.b];
          }
        else r.properties.color = [1, 1, 1];
        return [e, r];
      }
    }
    Object(n.b)([o.a], re.prototype, "buildNode", null);
    class ne extends Z {
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
    var ie, oe, se, ae, le, de, ce, ue, pe, he, _e;
    Object(n.b)([o.a], ne.prototype, "buildNode", null),
      (function (e) {
        (e[(e.Seated = 0)] = "Seated"),
          (e[(e.Standing = 1)] = "Standing"),
          (e[(e.Raw = 2)] = "Raw");
      })(ie || (ie = {}));
    class me extends Z {
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
          : ((e = X(this.props.translation, { x: 0, y: 0, z: 0 })),
            (t = g(
              h(X(this.props.rotation, { x: 0, y: 0, z: 0 }), Math.PI / 180),
            )),
            (r =
              "number" == typeof this.props.scale
                ? {
                    x: this.props.scale,
                    y: this.props.scale,
                    z: this.props.scale,
                  }
                : X(this.props.scale, { x: 1, y: 1, z: 1 })));
        let n = Y(e),
          i = (function (e) {
            if (e) return e.w + " " + e.x + " " + e.y + " " + e.z;
          })(t),
          o = Y(r);
        return I.createElement(
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
    class ge extends Z {
      constructor(e) {
        super(e);
      }
      internalRender() {
        return I.createElement(
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
    function fe(e) {
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
    class ye extends Z {
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
          (this.m_nEmbeddedIndex = be.Current().addEmbeddedPanelUVs(this)),
          (ye.s_bPanelsAreDirty = !0),
          this.getCurrentRootElement().addEventListener(
            "mousedown",
            this.onPanelMouseDown,
          ),
          this.forceUpdate();
      }
      onResizeObserved(e, t) {
        be.Current().forceLayoutUpdate();
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
          be.Current().removeEmbeddedPanelUVs(this),
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
        const d = this.props.overlay_key,
          c = z();
        return (
          d && d.length > 0
            ? (a.properties.key = d)
            : c
              ? (a.properties.key = c)
              : (a.properties.overlay_handle = (function () {
                  var e;
                  return null === (e = VRHTML) || void 0 === e
                    ? void 0
                    : e.VROverlay.ThisOverlayHandle();
                })()),
          (a.properties.uv_min = null != (r = fe(this.m_UVsMin)) ? r : void 0),
          (a.properties.uv_max = null != (n = fe(this.m_UVsMax)) ? n : void 0),
          (a.properties.width = null != (i = this.props.width) ? i : void 0),
          (a.properties.height = null != (o = this.props.height) ? o : void 0),
          (a.properties["target-dpi-panel-id"] = W(
            this.props.target_dpi_panel_id,
          )),
          (a.properties["target-dpi-multiplier"] =
            this.props.target_dpi_multiplier),
          (a.properties.curvature = this.props.curvature),
          (a.properties["curvature-origin-id"] = W(
            this.props.curvature_origin_id,
          )),
          (a.properties.interactive = this.props.interactive),
          (a.properties.scrollable = this.props.scrollable),
          (a.properties.modal = this.props.modal),
          (a.properties["embedded-uv-index"] = this.m_nEmbeddedIndex),
          (a.properties.origin = J(l)),
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
        return I.createElement(
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
    class be extends I.Component {
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
          (be.s_Current = this),
          (this.state = {
            bFontsLoaded: !1,
            nForcedUpdateNumber: 0,
            bShowDebugPointer: !1,
          }),
          (this.m_DomRef = I.createRef()),
          (this.m_scalingDomRef = I.createRef()),
          (this.m_CanvasRef = I.createRef()),
          (this.m_DebugPointerRef = I.createRef());
      }
      static Current() {
        return be.s_Current;
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
            (B = n),
            (N = i),
            (A = o),
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
          I.createElement(
            "vsg-app",
            {
              class: e.join(" "),
              ref: this.m_DomRef,
              "sg-forced-update-number": this.state.nForcedUpdateNumber,
            },
            I.createElement("div", {
              className: "DebugPointer",
              ref: this.m_DebugPointerRef,
            }),
            I.createElement("canvas", {
              ref: this.m_CanvasRef,
              className: "EmbeddedData",
              height: be.k_EmbeddedDataRows,
            }),
            I.createElement(
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
              be.k_EmbeddedDataRows,
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
    (be.s_Current = null),
      (be.k_EmbeddedDataRows = 1),
      Object(n.b)([i.bind], be.prototype, "toggleDebugPointer", null),
      Object(n.b)([i.bind], be.prototype, "onMouseMove", null),
      Object(n.b)([i.bind], be.prototype, "forceLayoutUpdate", null),
      Object(n.b)([i.bind], be.prototype, "onMutation", null);
    Object(n.b)(
      [o.a],
      class extends Z {
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
      })(de || (de = {}));
    class Se extends Z {
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
          (r.properties["texture-id"] = W(this.props["texture-id"])),
          this.props.fresnel)
        ) {
          let e = this.props.fresnel;
          if ("string" == typeof e.color) r.properties.color = e.color;
          else {
            let t = Q(e.color, { r: 0, g: 0, b: 0 });
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
    Object(n.b)([o.a], Se.prototype, "buildNode", null);
    class De extends Z {
      constructor(e) {
        super(e);
      }
      internalRender() {
        return I.createElement("vsg-line", {
          "target-id": this.props.target_id,
          thickness: this.props.thickness,
          "start-buffer": this.props.start_buffer,
          "end-buffer": this.props.end_buffer,
        });
      }
    }
    class Re extends Z {
      constructor(e) {
        super(e);
      }
      internalRender() {
        return I.createElement(
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
    class Ie extends Z {
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
            d = r.defaultView.innerHeight;
          if (!(d > 0 && l > 0))
            return [
              Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
              null,
            ];
          (n.properties["anchor-u"] = o / l),
            (n.properties["anchor-v"] = s / d);
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
    Object(n.b)([o.a], Ie.prototype, "buildNode", null);
    !(function (e) {
      (e[(e.LockedToParent = 0)] = "LockedToParent"),
        (e[(e.LockedToWorld = 1)] = "LockedToWorld");
    })(ce || (ce = {}));
    class Ce extends Z {
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
        return I.createElement(
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
    class Me extends Z {
      constructor(e) {
        super(e);
      }
      internalRender() {
        return I.createElement(
          "vsg-head-facing-transform",
          null,
          this.props.children,
        );
      }
    }
    function xe() {
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
      })(_e || (_e = {}));
    var Pe, Oe, we, Fe, Te, Be, Ne, Ae, ke, Ee, Ve, Ue, Le, He, We, ze;
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
    })(Pe || (Pe = {})),
      (function (e) {
        (e[(e.Activated = 0)] = "Activated"),
          (e[(e.Deactivated = 1)] = "Deactivated");
      })(Oe || (Oe = {})),
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
      })(Fe || (Fe = {})),
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
      })(Te || (Te = {})),
      (function (e) {
        (e[(e.Invalid = 0)] = "Invalid"),
          (e[(e.HMD = 1)] = "HMD"),
          (e[(e.Controller = 2)] = "Controller"),
          (e[(e.GenericTracker = 3)] = "GenericTracker"),
          (e[(e.TrackingReference = 4)] = "TrackingReference"),
          (e[(e.DisplayRedirect = 5)] = "DisplayRedirect");
      })(Be || (Be = {})),
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
      })(Ae || (Ae = {})),
      (function (e) {
        (e[(e.ButtonPress_0 = 0)] = "ButtonPress_0"),
          (e[(e.ButtonPress_1 = 1)] = "ButtonPress_1"),
          (e[(e.ButtonPress_2 = 2)] = "ButtonPress_2"),
          (e[(e.ButtonPress_3 = 3)] = "ButtonPress_3"),
          (e[(e.CouldntFindSystemOverlay = 4)] = "CouldntFindSystemOverlay"),
          (e[(e.CouldntFindOrCreateClientOverlay = 5)] =
            "CouldntFindOrCreateClientOverlay"),
          (e[(e.ApplicationQuit = 6)] = "ApplicationQuit");
      })(ke || (ke = {})),
      (function (e) {
        (e[(e.Normal = 0)] = "Normal"),
          (e[(e.Password = 1)] = "Password"),
          (e[(e.Submit = 2)] = "Submit");
      })(Ee || (Ee = {})),
      (function (e) {
        (e[(e.SingleLine = 0)] = "SingleLine"),
          (e[(e.MultipleLines = 1)] = "MultipleLines");
      })(Ve || (Ve = {})),
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
      })(Ue || (Ue = {})),
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
      })(Le || (Le = {})),
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
      })(He || (He = {})),
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
      })(We || (We = {})),
      (function (e) {
        (e[(e.Minimal = 1)] = "Minimal"), (e[(e.Modal = 2)] = "Modal");
      })(ze || (ze = {}));
    class Ge extends I.Component {
      constructor(e) {
        super(e);
        let t = {};
        if (VRHTML)
          try {
            let e = VRHTML.VRProperties.GetStringProperty(
              this.props.sDevicePath,
              Te.RenderModelName_String,
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
        return I.createElement(
          me,
          {
            id: this.props.id,
            parent_path: this.props.sDevicePath,
            transform: this.state.xfTransform,
          },
          this.props.children,
        );
      }
    }
    class je extends Z {
      constructor(e) {
        super(e);
      }
      internalRender() {
        return I.createElement(
          "vsg-callout-transform",
          { offset: Y(this.props.vOffset) },
          this.props.children,
        );
      }
    }
    class qe extends Z {
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
        return d;
      }),
      r.d(t, "fb", function () {
        return c;
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
        return _;
      }),
      r.d(t, "M", function () {
        return m;
      }),
      r.d(t, "G", function () {
        return g;
      }),
      r.d(t, "Q", function () {
        return f;
      }),
      r.d(t, "S", function () {
        return v;
      }),
      r.d(t, "b", function () {
        return y;
      }),
      r.d(t, "H", function () {
        return b;
      }),
      r.d(t, "V", function () {
        return S;
      }),
      r.d(t, "h", function () {
        return D;
      }),
      r.d(t, "K", function () {
        return R;
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
        return me;
      }),
      r.d(t, "ib", function () {
        return ge;
      }),
      r.d(t, "f", function () {
        return H;
      }),
      r.d(t, "bb", function () {
        return G;
      }),
      r.d(t, "eb", function () {
        return j;
      }),
      r.d(t, "P", function () {
        return q;
      }),
      r.d(t, "db", function () {
        return be;
      }),
      r.d(t, "t", function () {
        return de;
      }),
      r.d(t, "cb", function () {
        return Se;
      }),
      r.d(t, "O", function () {
        return De;
      }),
      r.d(t, "ab", function () {
        return Re;
      }),
      r.d(t, "Y", function () {
        return Ie;
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
        return Ce;
      }),
      r.d(t, "J", function () {
        return Me;
      }),
      r.d(t, "e", function () {
        return Ge;
      }),
      r.d(t, "d", function () {
        return je;
      }),
      r.d(t, "k", function () {
        return qe;
      }),
      r.d(t, "F", function () {
        return ue;
      }),
      r.d(t, "i", function () {
        return xe;
      }),
      r.d(t, "q", function () {
        return pe;
      }),
      r.d(t, "y", function () {
        return _e;
      }),
      r.d(t, "mb", function () {
        return 0;
      }),
      r.d(t, "lb", function () {
        return -1;
      }),
      r.d(t, "m", function () {
        return Oe;
      }),
      r.d(t, "B", function () {
        return we;
      }),
      r.d(t, "C", function () {
        return Fe;
      }),
      r.d(t, "x", function () {
        return Te;
      }),
      r.d(t, "w", function () {
        return Be;
      }),
      r.d(t, "I", function () {
        return Ne;
      }),
      r.d(t, "u", function () {
        return Ae;
      }),
      r.d(t, "A", function () {
        return ke;
      }),
      r.d(t, "p", function () {
        return Ee;
      }),
      r.d(t, "o", function () {
        return Ve;
      }),
      r.d(t, "l", function () {
        return Le;
      }),
      r.d(t, "v", function () {
        return He;
      }),
      r.d(t, "D", function () {
        return We;
      }),
      r.d(t, "n", function () {
        return ze;
      });
    t.kb = VRHTML;
  },
  hA31: function (e, t, r) {
    "use strict";
    r.r(t);
    var n,
      i = r("mrSG"),
      o = r("q1tI"),
      s = r("i8i4"),
      a = r("7wIv"),
      l = r("/i/y"),
      d = r("GXif"),
      c = r("sI3t"),
      u = r.n(c);
    class p extends o.Component {
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
                this.ProgressIndicatorEvent,
              )),
            (this.m_deviceEventHandle = VRHTML.RegisterForDeviceEvents(
              this.DeviceEvent,
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
      ProgressIndicatorEvent(e, t, r, n, i) {
        let o = this.state;
        null == o.sCurrentAction &&
          0 != e &&
          ((o.sCurrentAction = i), (o.sDevicePath = r), (o.sInputPath = n)),
          o.sCurrentAction == i &&
            (0 == e
              ? ((o.sCurrentAction = void 0), (o.flProgress = 0))
              : (o.flProgress = e)),
          this.setState(o);
      }
      DeviceEvent(e, t, r) {
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
          let r = (100 * (this.state.flProgress - 0.25) * 4) / 3,
            n = o.createElement(
              l.X,
              { width: t },
              o.createElement(
                "div",
                { className: "ProgressContainer" },
                o.createElement(u.a, {
                  background: !0,
                  backgroundPadding: 2,
                  percentage: r,
                }),
                o.createElement("img", {
                  src: "/shared/images/steam_logo.svg",
                  className: "ProgressIcon",
                }),
              ),
            );
          return "/user/head" == this.state.sDevicePath
            ? o.createElement(
                l.jb,
                { parent_path: "/user/head" },
                o.createElement(
                  l.jb,
                  { translation: { z: -1.2, y: -0.5 } },
                  o.createElement(l.J, null, n),
                ),
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
                      l.ab,
                      {
                        fOffscreenZDepth: -0.3,
                        fOffAxisLimit: 21,
                        fTransitionLimit: 1,
                      },
                      o.createElement(l.O, {
                        target_id: "progress_component",
                        thickness: 0.002,
                        start_buffer: 0.03,
                        end_buffer: 0.01,
                      }),
                      o.createElement(l.J, null, n),
                    ),
                  ),
                ),
              );
        }
      }
    }
    Object(i.b)([a.bind], p.prototype, "ProgressIndicatorEvent", null),
      Object(i.b)([a.bind], p.prototype, "DeviceEvent", null),
      Object(d.b)(
        [],
        null === (n = VRHTML) || void 0 === n ? void 0 : n.GetSteamVRLanguage(),
      ).then(() => {
        s.render(
          o.createElement(l.db, null, o.createElement(p, null)),
          document.getElementById("root"),
        );
      });
  },
});
//# sourceMappingURL=progressindicator.js.map?v=db2a34ec7b6eee15e1f8
