var CLSTAMP = "10590646";
(() => {
  "use strict";
  var e,
    t = {
      6090: (e, t, s) => {
        s.d(t, {
          Ay: () => l,
          GM: () => i.GM,
          I0: () => o.I0,
          M9: () => o.M9,
          OH: () => a.OH,
          R$: () => a.R$,
          Zk: () => r.Zk,
          _n: () => o._n,
          dL: () => n.d,
        });
        var o = s(2824),
          n = (s(3389), s(4120), s(1230), s(5830), s(6186), s(3361)),
          i = (s(111), s(5723), s(3496)),
          r =
            (s(5178),
            s(428),
            s(9011),
            s(7350),
            s(6847),
            s(5227),
            s(10),
            s(1808),
            s(7019)),
          a =
            (s(1988),
            s(2527),
            s(9864),
            s(4189),
            s(322),
            s(1977),
            s(6417),
            s(2303),
            s(8715),
            s(4397),
            s(5459),
            s(8472),
            s(1184),
            s(3725));
        s(4367);
        const l = VRHTML;
      },
      2824: (e, t, s) => {
        s.d(t, { I0: () => c, M9: () => l, _n: () => h });
        var o = s(1635),
          n = s(7813),
          i = s(3236),
          r = s(1295),
          a = s(776);
        const l = "vrwebui_dashboardstore",
          c = "binding_callouts/main";
        class h {
          constructor() {
            (this.m_wsWebSocketToServer = void 0),
              (this.connected = !1),
              (this.m_oHandlers = {}),
              (this.m_oWaits = {}),
              (this.m_oConnectWaits = []),
              (this.m_nNextMessageNumber = 1),
              (this.Log = new a.wd("Mailbox", () => this.m_sMailboxName)),
              (0, n.makeObservable)(this);
          }
          OpenWebSocketToHost() {
            return new Promise((e, t) => {
              this.Log.Info("Opening Web Socket...");
              let s = "ws://127.0.0.1:27062";
              this.m_sWebSecret && (s += "?secret=" + this.m_sWebSecret),
                this.m_wsWebSocketToServer &&
                  (this.Log.Error(
                    "OpenWebSocketToHost called on existing connection",
                  ),
                  this.CloseWebSocket());
              let o = !1;
              (this.m_wsWebSocketToServer = new WebSocket(s)),
                this.m_wsWebSocketToServer.addEventListener("open", (t) => {
                  this.OnWebSocketOpen(t), o || e(), (o = !0);
                }),
                this.m_wsWebSocketToServer.addEventListener(
                  "message",
                  this.OnWebSocketMessage,
                ),
                this.m_wsWebSocketToServer.addEventListener(
                  "close",
                  this.OnWebSocketClose,
                ),
                this.m_wsWebSocketToServer.addEventListener("error", (e) => {
                  this.OnWebSocketError(e), o || t(), (o = !0);
                });
            });
          }
          CloseWebSocket() {
            this.m_wsWebSocketToServer.removeEventListener(
              "message",
              this.OnWebSocketMessage,
            ),
              this.m_wsWebSocketToServer.removeEventListener(
                "close",
                this.OnWebSocketClose,
              ),
              this.m_wsWebSocketToServer.close(),
              (this.m_wsWebSocketToServer = void 0),
              (this.connected = !1);
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
            return (0, o.sH)(this, void 0, void 0, function* () {
              return (
                (this.m_sMailboxName = h.EnsureUniqueName(e)),
                (this.m_sWebSecret = t),
                (this.connected = !1),
                this.OpenWebSocketToHost()
              );
            });
          }
          Destroy() {
            this.CloseWebSocket();
          }
          get name() {
            return this.m_sMailboxName;
          }
          OnWebSocketOpen(e) {
            (this.connected = !0),
              this.Log.Info("Web Socket Opened"),
              this.WebSocketSend("mailbox_open " + this.m_sMailboxName),
              window.addEventListener("beforeunload", () => {
                this.WebSocketSend("websocket_close");
              });
            for (let e of this.m_oConnectWaits) e();
            this.m_oConnectWaits = [];
          }
          OnWebSocketClose(e) {
            return (0, o.sH)(this, void 0, void 0, function* () {
              this.Log.Warning("Lost connection to host. code:", e.code),
                (this.connected = !1),
                (this.m_wsWebSocketToServer = void 0),
                yield (0, r.IP)(1e3),
                this.OpenWebSocketToHost();
            });
          }
          OnWebSocketError(e) {
            return (0, o.sH)(this, void 0, void 0, function* () {
              this.Log.ErrorOnceThenWarn(
                "OnWebSocketError",
                "Mailbox error:",
                e.type,
              ),
                (this.connected = !1);
            });
          }
          WebSocketSend(e) {
            return (
              null != this.m_wsWebSocketToServer &&
              1 == this.m_wsWebSocketToServer.readyState &&
              (this.m_wsWebSocketToServer.send(e), !0)
            );
          }
          OnWebSocketMessage(e) {
            let t = JSON.parse(e.data),
              s = !1;
            if (
              (this.m_oHandlers.hasOwnProperty(t.type) &&
                (this.m_oHandlers[t.type](t), (s = !0)),
              this.m_oWaits.hasOwnProperty(t.type))
            ) {
              let e = !1;
              for (let s of this.m_oWaits[t.type])
                s.nMessageId == t.message_id && (s.callback(t), (e = !0));
              e
                ? (this.m_oWaits[t.type] = this.m_oWaits[t.type].filter(
                    (e) => e.nMessageId != t.message_id,
                  ))
                : this.Log.Error(
                    `Received a ${t.type} message, but didn't have a matching message_id. Did the other end forget to mirror message_id?`,
                  ),
                (s = !0);
            }
            s ||
              this.Log.ErrorOnceThenWarn(
                "OnWebsocket283",
                "Received unhandled message: ",
                t.type,
                t,
              );
          }
          RegisterHandler(e, t) {
            this.m_oHandlers[e] = t;
          }
          SendMessage(e, t) {
            return this.WebSocketSend(
              "mailbox_send " + e + " " + JSON.stringify(t),
            );
          }
          WaitForMessage(e, t) {
            return new Promise((s, o) => {
              this.m_oWaits[e] || (this.m_oWaits[e] = []),
                this.m_oWaits[e].push({ callback: s, nMessageId: t });
            });
          }
          WaitForConnect() {
            return new Promise((e, t) => {
              this.connected ? e() : this.m_oConnectWaits.push(e);
            });
          }
          WaitForMailbox(e) {
            return (0, o.sH)(this, void 0, void 0, function* () {
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
          SendMessageAndWaitForResponse(e, t, s) {
            let o = Object.assign({}, t);
            null == o.returnAddress && (o.returnAddress = this.m_sMailboxName),
              (o.message_id = this.m_nNextMessageNumber++);
            const n = this.WaitForMessage(s, o.message_id);
            return this.SendMessage(e, o), n;
          }
          SendResponse(e, t) {
            if (!e.returnAddress)
              throw new Error("Missing return address on message");
            let s = Object.assign(Object.assign({}, t), {
              message_id: e.message_id,
            });
            (s.message_id = e.message_id), this.SendMessage(e.returnAddress, s);
          }
          SendDebugIllegalMsg() {
            this.WebSocketSend("debug_send_illegal_msg");
          }
          SendDebugCloseMsg() {
            this.WebSocketSend("debug_close");
          }
        }
        (h.s_nNextMailboxNumber = 1),
          (0, o.Cg)([n.observable], h.prototype, "connected", void 0),
          (0, o.Cg)([i.o], h.prototype, "OpenWebSocketToHost", null),
          (0, o.Cg)([i.o], h.prototype, "OnWebSocketOpen", null),
          (0, o.Cg)([i.o], h.prototype, "OnWebSocketClose", null),
          (0, o.Cg)([i.o], h.prototype, "OnWebSocketError", null),
          (0, o.Cg)([i.o], h.prototype, "WebSocketSend", null),
          (0, o.Cg)([i.o], h.prototype, "OnWebSocketMessage", null);
      },
      4358: (e, t, s) => {
        var o = s(1635),
          n = s(6540),
          i = s(5338),
          r = s(3236),
          a = s(6090),
          l = s(2505),
          c = s.n(l);
        class h {
          constructor() {
            (this.m_mapTokens = new Map()),
              (this.m_mapFallbackTokens = new Map());
          }
          InitFromObjects(e, t, s, o) {
            this.m_mapTokens.clear();
            let n = [t, e, o, s];
            for (let e in n) {
              let t = n[e];
              for (let e in t) {
                let s = t[e];
                for (let e in s) {
                  let t = e.toLowerCase();
                  this.m_mapTokens.has(t) || this.m_mapTokens.set(t, s[e]);
                }
              }
            }
          }
          LocalizeString(e) {
            if (!e || 0 == e.length || "#" != e.charAt(0)) return "";
            let t = this.m_mapTokens.get(e.substring(1).toLowerCase());
            return void 0 === t ? "" : t;
          }
          LocalizeStringFromFallback(e) {
            if (!e || 0 == e.length || "#" != e.charAt(0)) return "";
            let t = this.m_mapFallbackTokens.get(e.substring(1).toLowerCase());
            return void 0 === t ? "" : t;
          }
          static GetLocale() {
            const e = navigator.languages[0];
            try {
              const t =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.GetSystemLocale();
              if (!t) return e;
              h.s_Date.toLocaleTimeString(t);
              return t;
            } catch (t) {
              return e;
            }
          }
        }
        h.s_Date = new Date();
        const d = new h();
        window.LocalizationManager = d;
        var m = s(1333),
          u = s(7813),
          b = s(582);
        (0, u.configure)({ enforceActions: "never" });
        class g extends n.Component {
          constructor(e) {
            super(e),
              (this.m_toastMailbox = new a._n()),
              (this.state = { visible: !1, title: "", header: "", text: "" }),
              this.m_toastMailbox.Init("toast_renderer/main"),
              this.m_toastMailbox.RegisterHandler(
                "render_toast",
                this.OnRenderToast,
              ),
              m.HR.Init(!1);
          }
          OnRenderToast(e) {
            var t;
            let s =
              null ===
                (t =
                  null === a.Ay || void 0 === a.Ay
                    ? void 0
                    : a.Ay.VROverlayInternal) || void 0 === t
                ? void 0
                : t.GetToastInfo(e.notification_id);
            s
              ? this.setState({
                  visible: !0,
                  title: s.sTitle,
                  header: s.sHeader || "",
                  text: s.sText,
                  image: s.sImageData,
                })
              : this.setState({
                  visible: !1,
                  title: "",
                  header: "",
                  text: "",
                  image: null,
                });
          }
          render() {
            return this.state.visible
              ? n.createElement(
                  "div",
                  { className: "VRNotificationRoot" },
                  n.createElement(
                    "div",
                    { className: "VRNotificationApplicationName" },
                    this.state.title,
                  ),
                  n.createElement(
                    "div",
                    { className: "VRNotificationFrame" },
                    n.createElement("div", {
                      className: "VRToastImage",
                      style: {
                        backgroundImage: this.state.image
                          ? "url('" + this.state.image + "')"
                          : "url('/dashboard/images/icons/notification_steamcog.png')",
                      },
                    }),
                    n.createElement(
                      "div",
                      { className: "VRNotificationTextWrapper" },
                      n.createElement(
                        "div",
                        { className: "VRNotificationHeader" },
                        this.state.header,
                      ),
                      n.createElement(
                        "div",
                        { className: "VRNotificationText" },
                        this.state.text,
                      ),
                    ),
                  ),
                )
              : null;
          }
        }
        (0, o.Cg)([r.o], g.prototype, "OnRenderToast", null),
          (function (e, t) {
            t ||
              (t = (function () {
                let e = new Map([
                  ["en", "english"],
                  ["de", "german"],
                  ["fr", "french"],
                  ["it", "italian"],
                  ["ko", "korean"],
                  ["es-419", "latam"],
                  ["es", "spanish"],
                  ["zh-CN", "schinese"],
                  ["zh-TW", "tchinese"],
                  ["ru", "russian"],
                  ["th", "thai"],
                  ["ja", "japanese"],
                  ["pt", "portuguese"],
                  ["pl", "polish"],
                  ["da", "danish"],
                  ["nl", "dutch"],
                  ["fi", "finnish"],
                  ["no", "norwegian"],
                  ["sv", "swedish"],
                  ["hu", "hungarian"],
                  ["cs", "czech"],
                  ["ro", "romanian"],
                  ["tr", "turkish"],
                  ["pt-BR", "brazilian"],
                  ["bg", "bulgarian"],
                  ["el", "greek"],
                  ["uk", "ukranian"],
                  ["vi", "vietnamese"],
                ]);
                for (let t of navigator.languages) {
                  let s = t.split("-");
                  if (e.has(t)) return e.get(t);
                  if (e.has(s[0])) return e.get(s[0]);
                }
                return "english";
              })());
            let s = [],
              o = (e, t, s) => {
                let o,
                  n = Date.now().toString();
                return (
                  (o =
                    "drivers" == e
                      ? `/input/localization.json?t=${n}`
                      : "webhelper" == e
                        ? `/dashboard/localization/${e}_${t}.json?t=${n}`
                        : `localization/${e}_${t}.json?t=${n}`),
                  c()
                    .get(o)
                    .then((e) => {
                      s(e.data);
                    })
                    .catch(() => {})
                );
              },
              n = [],
              i = [],
              r = [],
              a = [];
            for (let i of e)
              s.push(
                o(i, t, (e) => {
                  n.push(e);
                }),
              ),
                "english" != t &&
                  s.push(
                    o(i, "english", (e) => {
                      r.push(e);
                    }),
                  );
            for (let e of ["webhelper"])
              s.push(
                o(e, t, (e) => {
                  i.push(e);
                }),
              ),
                "english" != t &&
                  s.push(
                    o(e, "english", (e) => {
                      a.push(e);
                    }),
                  );
            return (
              s.push(
                o("drivers", "", (e) => {
                  n.push(e);
                }),
              ),
              Promise.all(s).then(() => {
                d.InitFromObjects(n, i, r, a);
              })
            );
          })(
            [],
            null === a.Ay || void 0 === a.Ay ? void 0 : a.Ay.GetSteamLanguage(),
          )
            .then(() => {
              (0, b.aj)().Init("SteamVR", CLSTAMP, (0, b.d4)()),
                i
                  .H(document.getElementById("root"))
                  .render(n.createElement(g, null));
            })
            .catch((e) =>
              console.error("Failed to initialize notification toast:", e),
            );
      },
    },
    s = {};
  function o(e) {
    var n = s[e];
    if (void 0 !== n) return n.exports;
    var i = (s[e] = { exports: {} });
    return t[e].call(i.exports, i, i.exports, o), i.exports;
  }
  (o.m = t),
    (e = []),
    (o.O = (t, s, n, i) => {
      if (!s) {
        var r = 1 / 0;
        for (h = 0; h < e.length; h++) {
          for (var [s, n, i] = e[h], a = !0, l = 0; l < s.length; l++)
            (!1 & i || r >= i) && Object.keys(o.O).every((e) => o.O[e](s[l]))
              ? s.splice(l--, 1)
              : ((a = !1), i < r && (r = i));
          if (a) {
            e.splice(h--, 1);
            var c = n();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      i = i || 0;
      for (var h = e.length; h > 0 && e[h - 1][2] > i; h--) e[h] = e[h - 1];
      e[h] = [s, n, i];
    }),
    (o.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return o.d(t, { a: t }), t;
    }),
    (o.d = (e, t) => {
      for (var s in t)
        o.o(t, s) &&
          !o.o(e, s) &&
          Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
    }),
    (o.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = { 915: 0, 527: 0, 500: 0 };
      o.O.j = (t) => 0 === e[t];
      var t = (t, s) => {
          var n,
            i,
            [r, a, l] = s,
            c = 0;
          if (r.some((t) => 0 !== e[t])) {
            for (n in a) o.o(a, n) && (o.m[n] = a[n]);
            if (l) var h = l(o);
          }
          for (t && t(s); c < r.length; c++)
            (i = r[c]), o.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return o.O(h);
        },
        s = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      s.forEach(t.bind(null, 0)), (s.push = t.bind(null, s.push.bind(s)));
    })();
  var n = o.O(
    void 0,
    [967, 352, 211, 154, 305, 527, 797, 148, 500, 554, 198, 384],
    () => o(4358),
  );
  n = o.O(n);
})(); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/notificationtoast.js.map
