var CLSTAMP = "10233197";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [554],
  {
    582: (e, t, r) => {
      r.d(t, { aj: () => k, d4: () => P });
      var n = r(1635),
        i = r(6540),
        s = r(5339),
        o = r.n(s),
        a = r(3924);
      class c extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.product || a.Sg(c.M()),
            s.Message.initialize(this, e, 0, -1, [3], null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
                fields: {
                  product: { n: 1, br: a.qM.readString, bw: a.gp.writeString },
                  version: { n: 2, br: a.qM.readString, bw: a.gp.writeString },
                  errors: { n: 3, c: l, r: !0, q: !0 },
                },
              }),
            c.sm_m
          );
        }
        static MBF() {
          return c.sm_mbf || (c.sm_mbf = a.w0(c.M())), c.sm_mbf;
        }
        toObject(e = !1) {
          return c.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(c.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(c.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportClientError_Notification";
        }
      }
      class l extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.identifier || a.Sg(l.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  identifier: {
                    n: 1,
                    br: a.qM.readString,
                    bw: a.gp.writeString,
                  },
                  message: { n: 2, br: a.qM.readString, bw: a.gp.writeString },
                  count: { n: 3, br: a.qM.readUint32, bw: a.gp.writeUint32 },
                  context: { n: 4, br: a.qM.readString, bw: a.gp.writeString },
                },
              }),
            l.sm_m
          );
        }
        static MBF() {
          return l.sm_mbf || (l.sm_mbf = a.w0(l.M())), l.sm_mbf;
        }
        toObject(e = !1) {
          return l.toObject(e, this);
        }
        static toObject(e, t) {
          return a.BT(l.M(), e, t);
        }
        static fromObject(e) {
          return a.Uq(l.M(), e);
        }
        static deserializeBinary(e) {
          let t = new (o().BinaryReader)(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (o().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new (o().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportClientError_Notification_Error";
        }
      }
      var u = r(1286);
      function d(e) {
        return (0, n.sH)(this, arguments, void 0, function* (e, t = "SHA-256") {
          let r;
          var n;
          "string" == typeof e
            ? ((n = e), (r = new TextEncoder().encode(n).buffer))
            : (r = e);
          const i = yield window.crypto.subtle.digest(t, r);
          return (
            (s = i),
            Array.prototype.map
              .call(new Uint8Array(s), (e) => ("00" + e.toString(16)).slice(-2))
              .join("")
          );
          var s;
        });
      }
      var m = r(7600);
      const p =
        window.addEventListener || (r.g && r.g.addEventListener) || (() => {});
      let g,
        h = [],
        f = (e, t, r) =>
          h.push({ error: e, cCallsitesToIgnore: t, strComponentStack: r });
      const _ = !0;
      class b extends Error {
        constructor(...e) {
          super(...e), (this.name = "Assertion Failed");
        }
      }
      {
        const e = console.assert;
        console.assert = (t, r, ...n) => {
          if (!t) {
            const e = R();
            f(new b(I(r, ...n)), 2, e);
          }
          e.apply(console, [t, r, ...n]);
        };
        const t = console.error;
        (console.error = (e, ...r) => {
          const n = R();
          f(new Error(I(e, ...r)), 1, n), t.apply(console, [e, ...r]);
        }),
          (console.clogerror = (e, r, ...n) => {
            const i = R();
            f(new Error(I(r, ...n)), e + 1, i), t.apply(console, [r, ...n]);
          }),
          p("error", (e) => {
            f(e.error, 0);
          }),
          p("unhandledrejection", (e) => {
            f(e.reason, 0);
          }),
          (g = window.setTimeout(() => {
            (h = []), (f = () => {});
          }, 3e4));
      }
      const S = { cCallsitesToIgnore: 0, bIncludeMessageInIdentifier: !1 },
        w = [
          "chrome-extension://",
          "HTMLDivElement.onreset \\(/market",
          "/.millennium/Dist",
          "Refused unauthorized RPC command",
        ];
      function R() {
        try {
          const e = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
            t =
              i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
          if (
            e &&
            "object" == typeof e &&
            "object" == typeof e.ReactDebugCurrentFrame &&
            "function" == typeof e.ReactDebugCurrentFrame.getCurrentStack
          ) {
            const t = e.ReactDebugCurrentFrame.getCurrentStack();
            if ("string" == typeof t) return t;
          } else if (
            t &&
            "object" == typeof t &&
            "function" == typeof t.getCurrentStack
          ) {
            const e = t.getCurrentStack();
            if ("string" == typeof e) return e;
          }
        } catch (e) {}
      }
      class y {
        constructor(e = !0) {
          (this.m_transport = null),
            (this.m_rgErrorQueue = []),
            (this.m_sendTimer = null),
            (this.m_bReportingPaused = !1),
            (this.m_pauseTimer = void 0),
            (this.m_fnGetReportingInterval = z),
            (this.m_bEnabled = !0),
            (this.m_bInitialized = !1),
            e
              ? (h.forEach(
                  ({ error: e, cCallsitesToIgnore: t, strComponentStack: r }) =>
                    this.ReportError(e, {
                      cCallsitesToIgnore: t,
                      strComponentStack: r,
                    }),
                ),
                (f = (e, t, r) =>
                  this.ReportError(e, {
                    cCallsitesToIgnore: t,
                    strComponentStack: r,
                  })))
              : (f = () => {}),
            (h = []),
            clearTimeout(g),
            window.setTimeout(() => {
              this.m_bInitialized ||
                ((this.m_bEnabled = !1), (this.m_rgErrorQueue = []));
            }, 3e4);
        }
        Init(e, t, r, n = {}) {
          (this.m_bInitialized = !0),
            (this.m_strProduct = e),
            (this.m_strVersion = t),
            (this.m_transport = r),
            n.fnGetReportingInterval &&
              (this.m_fnGetReportingInterval = n.fnGetReportingInterval),
            this.m_bEnabled ||
              (console.error(
                "Error reporting was initialized after being disabled, possibly dropping errors.",
              ),
              (this.m_bEnabled = !0)),
            this.m_rgErrorQueue.length &&
              (this.SendErrorReports(this.m_rgErrorQueue),
              (this.m_rgErrorQueue = []));
        }
        ReportError(e, t) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            if (!e)
              return (
                console.warn(
                  "Failed to report error: ReportError() was called without an error to report.",
                ),
                null
              );
            try {
              const r = Object.assign(Object.assign({}, S), t);
              if (!this.m_bEnabled) return null;
              0;
              const i = yield (function (e, t) {
                try {
                  return e.stack && e.stack.match(v)
                    ? (function (e, t) {
                        return (0, n.sH)(this, void 0, void 0, function* () {
                          var r, n;
                          const {
                              cCallsitesToIgnore: i,
                              bIncludeMessageInIdentifier: s,
                            } = t,
                            o =
                              null !==
                                (n =
                                  null === (r = e.stack) || void 0 === r
                                    ? void 0
                                    : r.split("\n")) && void 0 !== n
                                ? n
                                : [];
                          let a = M(o.filter((e) => !!e.match(v))[i]);
                          s && (a = `${a} ${e.message}`);
                          const c = o
                            .map((e) => {
                              const t = e.match(/(.*)\((.*):(\d+):(\d+)\)/);
                              if (!t) return e;
                              if (5 === t.length) {
                                const [e, r, n, i, s] = t,
                                  o = parseInt(i),
                                  a = parseInt(s);
                                if (!isNaN(o) && !isNaN(a)) return [r, n, o, a];
                              }
                              return e;
                            })
                            .filter((e) => !!e);
                          return {
                            identifier: a,
                            identifierHash: yield O(a),
                            message: c,
                          };
                        });
                      })(e, t)
                    : e.stack && e.stack.match(E)
                      ? (function (e, t) {
                          return (0, n.sH)(this, void 0, void 0, function* () {
                            var r, n;
                            const {
                                cCallsitesToIgnore: i,
                                bIncludeMessageInIdentifier: s,
                              } = t,
                              o =
                                null !==
                                  (n =
                                    null === (r = e.stack) || void 0 === r
                                      ? void 0
                                      : r.split("\n")) && void 0 !== n
                                  ? n
                                  : [];
                            let a = M(o.filter((e) => !!e.match(E))[i]);
                            s && (a = `${a} ${e.message}`);
                            const c = o
                              .map((e) => {
                                const t = e.match(/(.*@)?(.*):(\d+):(\d+)/);
                                if (!t) return e;
                                if (5 === t.length) {
                                  const [e, r, n, i, s] = t,
                                    o = parseInt(i),
                                    a = parseInt(s);
                                  if (!isNaN(o) && !isNaN(a))
                                    return [r, n, o, a];
                                }
                                return e;
                              })
                              .filter((e) => !!e);
                            return {
                              identifier: a,
                              identifierHash: yield O(a),
                              message: [e.message, ...c],
                            };
                          });
                        })(e, t)
                      : e.stack && e.stack.match(C)
                        ? (function (e, t) {
                            return (0, n.sH)(
                              this,
                              void 0,
                              void 0,
                              function* () {
                                var r, n;
                                const {
                                    bIncludeMessageInIdentifier: i,
                                    cCallsitesToIgnore: s,
                                  } = t,
                                  o =
                                    null !==
                                      (n =
                                        null === (r = e.stack) || void 0 === r
                                          ? void 0
                                          : r.split("\n")) && void 0 !== n
                                      ? n
                                      : [],
                                  a = o[s],
                                  c = a.split("/");
                                let l = c[c.length - 1];
                                a.indexOf("@") > -1 &&
                                  (l = a.split("@")[0] + "@" + l),
                                  i && (l = `${l} ${e.message}`);
                                const u = o
                                  .map((e) => {
                                    const t = e.match(/(.*@)?(.*):(\d+):(\d+)/);
                                    if (!t) return e;
                                    if (5 === t.length) {
                                      const [e, r, n, i, s] = t,
                                        o = parseInt(i),
                                        a = parseInt(s);
                                      if (!isNaN(o) && !isNaN(a))
                                        return [r, n, o, a];
                                    }
                                    return e;
                                  })
                                  .filter((e) => !!e);
                                return {
                                  identifier: l,
                                  identifierHash: yield O(l),
                                  message: [e.message, ...u],
                                };
                              },
                            );
                          })(e, t)
                        : (B ||
                            (console.warn(
                              "Error reporter does not know how to parse generated stack:",
                            ),
                            console.warn(e.stack),
                            (B = !0)),
                          null);
                } catch (e) {
                  return (
                    console.warn(`Failed to normalize error stack: ${e}`), null
                  );
                }
              })(e, r);
              return i
                ? (r.cCallsitesToIgnore &&
                    i.message.splice(1, r.cCallsitesToIgnore),
                  r.strComponentStack &&
                    (i.strComponentStack = r.strComponentStack),
                  this.SendErrorReport(i),
                  i)
                : null;
            } catch (e) {
              return console.log(`Failed to report error: ${e}`), null;
            }
          });
        }
        PauseReportingForDuration(e) {
          this.PauseReporting(),
            (this.m_pauseTimer = window.setTimeout(
              () => this.ResumeReporting(),
              e,
            ));
        }
        PauseReporting() {
          (this.m_bReportingPaused = !0),
            window.clearTimeout(this.m_pauseTimer);
        }
        ResumeReporting() {
          (this.m_bReportingPaused = !1),
            window.clearTimeout(this.m_pauseTimer),
            this.ScheduleSend();
        }
        BIsBlacklisted(e) {
          for (let t of e.message) {
            let r = JSON.stringify(t);
            for (let t of w) {
              const n = new RegExp(t);
              if (r.match(n))
                return console.warn("Report", e, "matched regex", t), !0;
            }
          }
          return !1;
        }
        SendErrorReport(e) {
          this.BIsBlacklisted(e) ||
            (this.m_transport
              ? this.QueueReport(e)
              : this.m_rgErrorQueue.push(e));
        }
        QueueReport(e) {
          this.m_rgErrorQueue.push(e),
            this.m_bReportingPaused || this.ScheduleSend();
        }
        ScheduleSend() {
          this.m_sendTimer ||
            (this.m_sendTimer = window.setTimeout(() => {
              this.SendErrorReports(this.m_rgErrorQueue),
                (this.m_rgErrorQueue = []),
                (this.m_sendTimer = null);
            }, this.m_fnGetReportingInterval()));
        }
        SendErrorReports(e) {
          if (!e || !e.length) return;
          const t = e.reduce(
              (e, t) => (
                e[t.identifier]
                  ? e[t.identifier].count++
                  : (e[t.identifier] = { report: t, count: 1 }),
                e
              ),
              {},
            ),
            r = Object.keys(t).map((e) => {
              const { report: r, count: n } = t[e],
                i = new l();
              return (
                i.set_count(n),
                i.set_identifier(r.identifier + " " + r.identifierHash),
                i.set_message(JSON.stringify(r.message)),
                r.strComponentStack &&
                  i.set_context(
                    JSON.stringify({ componentStack: r.strComponentStack }),
                  ),
                i
              );
            }),
            n = new c();
          n.set_product(this.m_strProduct),
            n.set_version(this.m_strVersion),
            n.set_errors(r),
            this.m_transport.SendNoResponse(
              "ClientMetrics.ReportClientError#1",
              n.serializeBase64String(),
            );
        }
        get version() {
          return this.m_strVersion;
        }
        get product() {
          return this.m_strProduct;
        }
        get reporting_enabled() {
          return _;
        }
      }
      function I(e, ...t) {
        if ("string" == typeof e && 0 === t.length) return e;
        return [e, ...t]
          .map((e) => {
            try {
              let t = String(e);
              return "[object Object]" == t && (t = JSON.stringify(e)), t;
            } catch (e) {
              return "[Stringify Error]";
            }
          })
          .join(", ");
      }
      const v = /^\s*at .*(\S+:\d+|\(native\))/m,
        E = /(^|@)\S+:\d+/,
        C = /.*\/bundle-[a-zA-Z0-9]+:\d+:\d+/;
      let T,
        B = !1;
      function M(e) {
        return (function (e) {
          const t = "https://",
            r = e.indexOf(t);
          if (-1 === r) return e;
          const n = e.indexOf("/", r + t.length);
          return -1 === n ? e : e.slice(0, r) + e.slice(n);
        })(
          (function (e) {
            const t = e.lastIndexOf("?");
            if (-1 === t) return e;
            const r = e.indexOf(":", t);
            return -1 === r ? e : e.slice(0, t) + e.slice(r);
          })(e),
        );
      }
      const k = () => (T || N(new y()), T),
        N = (e) => {
          (T = e), m.tH.InstallErrorReportingStore(T);
        };
      function O(e) {
        return (0, n.sH)(this, void 0, void 0, function* () {
          try {
            return (yield d(e)).slice(0, 16);
          } catch (e) {
            return "";
          }
        });
      }
      function z() {
        return (
          1e3 *
          ((e = 1),
          (t = u.b - 1),
          (e = Math.ceil(e)),
          (t = Math.floor(t)),
          Math.floor(Math.random() * (t - e + 1)) + e)
        );
        var e, t;
      }
      class j {
        constructor(e) {
          this.m_strWebAPIBaseURL = e;
        }
        CreateWebAPIURL(e) {
          let t = e.match(/([^\.]+)\.(.+)#(\d+)/);
          return t && 4 == t.length
            ? `${this.m_strWebAPIBaseURL}I${t[1]}Service/${t[2]}/v${t[3]}`
            : null;
        }
        SendNoResponse(e, t) {
          let r = this.CreateWebAPIURL(e);
          if (!r) return void console.warn("Couldn't find service name " + e);
          const n = new FormData();
          n.append("input_protobuf_encoded", t),
            fetch(r, { method: "POST", body: n, mode: "no-cors" })
              .then((e) => {})
              .catch((e) => {});
        }
      }
      let F;
      const P = () => (F || (F = new j("https://api.steampowered.com/")), F);
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~56fe39318.js.map
