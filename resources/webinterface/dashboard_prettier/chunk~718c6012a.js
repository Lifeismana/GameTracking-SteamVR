var CLSTAMP = "10624569";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [737],
  {
    2824: (e, t, s) => {
      s.d(t, { I0: () => h, M9: () => c, _n: () => l });
      var o = s(1635),
        n = s(7813),
        i = s(3236),
        r = s(1295),
        a = s(776);
      const c = "vrwebui_dashboardstore",
        h = "binding_callouts/main";
      class l {
        constructor() {
          (this.m_wsWebSocketToServer = void 0),
            (this.connected = !1),
            (this.m_sMailboxName = ""),
            (this.m_oHandlers = {}),
            (this.m_oWaits = {}),
            (this.m_oConnectWaits = []),
            (this.m_sWebSecret = ""),
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
          this.m_wsWebSocketToServer &&
            (this.m_wsWebSocketToServer.removeEventListener(
              "message",
              this.OnWebSocketMessage,
            ),
            this.m_wsWebSocketToServer.removeEventListener(
              "close",
              this.OnWebSocketClose,
            ),
            this.m_wsWebSocketToServer.close(),
            (this.m_wsWebSocketToServer = void 0)),
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
              (this.m_sMailboxName = l.EnsureUniqueName(e)),
              (this.m_sWebSecret = null != t ? t : ""),
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
      (l.s_nNextMailboxNumber = 1),
        (0, o.Cg)([n.observable], l.prototype, "connected", void 0),
        (0, o.Cg)([i.o], l.prototype, "OpenWebSocketToHost", null),
        (0, o.Cg)([i.o], l.prototype, "OnWebSocketOpen", null),
        (0, o.Cg)([i.o], l.prototype, "OnWebSocketClose", null),
        (0, o.Cg)([i.o], l.prototype, "OnWebSocketError", null),
        (0, o.Cg)([i.o], l.prototype, "WebSocketSend", null),
        (0, o.Cg)([i.o], l.prototype, "OnWebSocketMessage", null);
    },
    3606: (e, t, s) => {
      s.d(t, { F2: () => o });
      const o = "/settings/steamvr/showAdvancedSettings";
    },
    3714: (e, t, s) => {
      s.d(t, { uV: () => c, we: () => r });
      s(6540);
      var o = s(2505),
        n = s.n(o);
      class i {
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
            i.s_Date.toLocaleTimeString(t);
            return t;
          } catch (t) {
            return e;
          }
        }
      }
      function r(e, ...t) {
        let s = a.LocalizeString(e);
        return s
          ? (t.length > 0 &&
              (s = s.replace(/%(\d+)\$s/g, function (e, s) {
                return void 0 !== t[s - 1] ? String(t[s - 1]) : e;
              })),
            s)
          : e;
      }
      i.s_Date = new Date();
      const a = new i();
      function c(e, t) {
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
              i = Date.now().toString();
            return (
              (o =
                "drivers" == e
                  ? `/input/localization.json?t=${i}`
                  : "webhelper" == e
                    ? `/dashboard/localization/${e}_${t}.json?t=${i}`
                    : `localization/${e}_${t}.json?t=${i}`),
              n()
                .get(o)
                .then((e) => {
                  s(e.data);
                })
                .catch(() => {})
            );
          },
          i = [],
          r = [],
          c = [],
          h = [];
        for (let n of e)
          s.push(
            o(n, t, (e) => {
              i.push(e);
            }),
          ),
            "english" != t &&
              s.push(
                o(n, "english", (e) => {
                  c.push(e);
                }),
              );
        for (let e of ["webhelper"])
          s.push(
            o(e, t, (e) => {
              r.push(e);
            }),
          ),
            "english" != t &&
              s.push(
                o(e, "english", (e) => {
                  h.push(e);
                }),
              );
        return (
          s.push(
            o("drivers", "", (e) => {
              i.push(e);
            }),
          ),
          Promise.all(s).then(() => {
            a.InitFromObjects(i, r, c, h);
          })
        );
      }
      window.LocalizationManager = a;
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~718c6012a.js.map
