var CLSTAMP = "10075201";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [537],
  {
    2824: (e, t, s) => {
      s.d(t, {
        I0: () => a,
        _n: () => h,
        mX: () => r,
        pg: () => i,
        sk: () => l,
      });
      var n = s(1635),
        o = s(3236);
      const i = "vrcompositor_systemlayer",
        r = "input_server",
        a = "binding_callouts/main",
        l = "driver_hmd";
      class h {
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
            let s = "ws://127.0.0.1:27062";
            this.m_sWebSecret && (s += "?secret=" + this.m_sWebSecret),
              (this.m_fnConnectResolve = e),
              (this.m_wsWebSocketToServer = new WebSocket(s)),
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
          return (0, n.sH)(this, void 0, void 0, function* () {
            return (
              (this.m_sMailboxName = h.EnsureUniqueName(e)),
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
                  (e) => e.nMessageId == t.message_id,
                ))
              : console.log(
                  `Received a ${t.type} message, but didn't have a matching message_id. Did the other end forget to mirror message_id?`,
                ),
              (s = !0);
          }
          s || console.log("Received unhandled message: ", t);
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
          return new Promise((s, n) => {
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
          return (0, n.sH)(this, void 0, void 0, function* () {
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
          let n = Object.assign({}, t);
          return (
            null == n.returnAddress && (n.returnAddress = this.m_sMailboxName),
            (n.message_id = this.m_nNextMessageNumber++),
            this.SendMessage(e, n),
            this.WaitForMessage(s, n.message_id)
          );
        }
        SendResponse(e, t) {
          if (!e.returnAddress)
            throw new Error("Missing return address on message");
          let s = Object.assign(Object.assign({}, t), {
            message_id: e.message_id,
          });
          (s.message_id = e.message_id), this.SendMessage(e.returnAddress, s);
        }
      }
      (h.s_nNextMailboxNumber = 1),
        (0, n.Cg)([o.o], h.prototype, "OpenWebSocketToHost", null),
        (0, n.Cg)([o.o], h.prototype, "OnWebSocketOpen", null),
        (0, n.Cg)([o.o], h.prototype, "OnWebSocketClose", null),
        (0, n.Cg)([o.o], h.prototype, "WebSocketSend", null),
        (0, n.Cg)([o.o], h.prototype, "OnWebSocketMessage", null);
    },
    3714: (e, t, s) => {
      s.d(t, { A0: () => i, uV: () => l, we: () => r });
      s(6540);
      var n = s(2505),
        o = s.n(n);
      class i {
        constructor() {
          (this.m_mapTokens = new Map()),
            (this.m_mapFallbackTokens = new Map());
        }
        InitFromObjects(e, t, s, n) {
          this.m_mapTokens.clear();
          let o = [t, e, n, s];
          for (let e in o) {
            let t = o[e];
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
      function l(e, t) {
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
          n = (e, t, s) => {
            let n,
              i = Date.now().toString();
            return (
              (n =
                "drivers" == e
                  ? `/input/localization.json?t=${i}`
                  : "webhelper" == e
                    ? `/dashboard/localization/${e}_${t}.json?t=${i}`
                    : `localization/${e}_${t}.json?t=${i}`),
              o()
                .get(n)
                .then((e) => {
                  s(e.data);
                })
                .catch(() => {})
            );
          },
          i = [],
          r = [],
          l = [],
          h = [];
        for (let o of e)
          s.push(
            n(o, t, (e) => {
              i.push(e);
            }),
          ),
            "english" != t &&
              s.push(
                n(o, "english", (e) => {
                  l.push(e);
                }),
              );
        for (let e of ["webhelper"])
          s.push(
            n(e, t, (e) => {
              r.push(e);
            }),
          ),
            "english" != t &&
              s.push(
                n(e, "english", (e) => {
                  h.push(e);
                }),
              );
        return (
          s.push(
            n("drivers", "", (e) => {
              i.push(e);
            }),
          ),
          Promise.all(s).then(() => {
            a.InitFromObjects(i, r, l, h);
          })
        );
      }
      window.LocalizationManager = a;
    },
  },
]); //# sourceMappingURL=file:///c:/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~35466222c.js.map
