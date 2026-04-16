var CLSTAMP = "10590646";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [554],
  {
    582: (e, t, r) => {
      r.d(t, { aj: () => F, d4: () => j });
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
      var p = r(7600);
      const f =
        window.addEventListener || (r.g && r.g.addEventListener) || (() => {});
      let g,
        m = [],
        h = (e, t, r) =>
          m.push({ error: e, cCallsitesToIgnore: t, strComponentStack: r });
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
            const e = w();
            h(new b(M(r, ...n)), 2, e);
          }
          e.apply(console, [t, r, ...n]);
        };
        const t = console.error;
        (console.error = (e, ...r) => {
          const n = w();
          h(new Error(M(e, ...r)), 1, n), t.apply(console, [e, ...r]);
        }),
          (console.clogerror = (e, r, ...n) => {
            const i = w();
            h(new Error(M(r, ...n)), e + 1, i), t.apply(console, [r, ...n]);
          }),
          f("error", (e) => {
            h(e.error, 0);
          }),
          f("unhandledrejection", (e) => {
            h(e.reason, 0);
          }),
          (g = window.setTimeout(() => {
            (m = []), (h = () => {});
          }, 3e4));
      }
      const R = { cCallsitesToIgnore: 0, bIncludeMessageInIdentifier: !1 },
        y = [
          "chrome-extension://",
          "HTMLDivElement.onreset \\(/market",
          "/.millennium/Dist",
          "Refused unauthorized RPC command",
        ];
      function w() {
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
      class S {
        constructor(e = !0) {
          (this.m_transport = null),
            (this.m_rgErrorQueue = []),
            (this.m_sendTimer = null),
            (this.m_bReportingPaused = !1),
            (this.m_pauseTimer = void 0),
            (this.m_fnGetReportingInterval = W),
            (this.m_bEnabled = !0),
            (this.m_bInitialized = !1),
            e
              ? (m.forEach(
                  ({ error: e, cCallsitesToIgnore: t, strComponentStack: r }) =>
                    this.ReportError(e, {
                      cCallsitesToIgnore: t,
                      strComponentStack: r,
                    }),
                ),
                (h = (e, t, r) =>
                  this.ReportError(e, {
                    cCallsitesToIgnore: t,
                    strComponentStack: r,
                  })))
              : (h = () => {}),
            (m = []),
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
              const r = Object.assign(Object.assign({}, R), t);
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
                          let a = C(o.filter((e) => !!e.match(v))[i]);
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
                            identifierHash: yield k(a),
                            message: c,
                          };
                        });
                      })(e, t)
                    : e.stack && e.stack.match(I)
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
                            let a = C(o.filter((e) => !!e.match(I))[i]);
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
                              identifierHash: yield k(a),
                              message: [e.message, ...c],
                            };
                          });
                        })(e, t)
                      : e.stack && e.stack.match(E)
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
                                  identifierHash: yield k(l),
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
            for (let t of y) {
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
      function M(e, ...t) {
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
        I = /(^|@)\S+:\d+/,
        E = /.*\/bundle-[a-zA-Z0-9]+:\d+:\d+/;
      let T,
        B = !1;
      function C(e) {
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
      const F = () => (T || O(new S()), T),
        O = (e) => {
          (T = e), p.tH.InstallErrorReportingStore(T);
        };
      function k(e) {
        return (0, n.sH)(this, void 0, void 0, function* () {
          try {
            return (yield d(e)).slice(0, 16);
          } catch (e) {
            return "";
          }
        });
      }
      function W() {
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
      class N {
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
      let z;
      const j = () => (z || (z = new N("https://api.steampowered.com/")), z);
    },
    3924: (e, t, r) => {
      r.d(t, {
        BT: () => c,
        Sg: () => d,
        Uq: () => a,
        gp: () => s,
        i0: () => u,
        qM: () => i,
        w0: () => o,
        zj: () => l,
      });
      var n = r(5339);
      const i = n.BinaryReader.prototype,
        s = n.BinaryWriter.prototype;
      function o(e) {
        const t = {},
          { fields: r } = e;
        for (const e in r) {
          const n = r[e];
          t[n.n] = n;
        }
        return t;
      }
      function a(e, t) {
        const { proto: r, fields: i } = e,
          s = new r();
        if (null == t) return s;
        for (const e in i) {
          const { n: r, c: o, r: a, d: c, q: l } = i[e];
          if (!Object.prototype.hasOwnProperty.call(t, e)) continue;
          const u = t[e];
          o
            ? a
              ? n.Message.setRepeatedWrapperField(
                  s,
                  r,
                  Array.isArray(u) ? u.map((e) => o.fromObject(e)) : [],
                )
              : n.Message.setWrapperField(s, r, o.fromObject(u))
            : n.Message.setField(s, r, u);
        }
        return s;
      }
      function c(e, t, r) {
        const { proto: i, fields: s } = e,
          o = {};
        for (const e in s) {
          const { n: i, c: a, r: c, d: l, q: u } = s[e];
          if (a)
            if (c)
              o[e] = n.Message.toObjectList(
                n.Message.getRepeatedWrapperField(r, a, i),
                a.toObject,
                t,
              );
            else {
              const s = n.Message.getWrapperField(r, a, i, u ? 1 : 0);
              s && (o[e] = a.toObject(t, s));
            }
          else {
            const t = n.Message.getFieldWithDefault(
              r,
              i,
              void 0 !== l ? l : null,
            );
            (null !== t || u) && (o[e] = t);
          }
        }
        return t && (o.$jspbMessageInstance = r), o;
      }
      function l(e, t, r) {
        for (; r.nextField() && !r.isEndGroup(); ) {
          const i = e[r.getFieldNumber()];
          if (i) {
            const { n: e, c: s, r: o, d: a, q: c, br: l } = i;
            if (s) {
              const i = new s();
              r.readMessage(i, s.deserializeBinaryFromReader),
                o
                  ? n.Message.addToRepeatedWrapperField(t, e, i, s)
                  : n.Message.setWrapperField(t, e, i);
            } else if (l) {
              const i = l.call(r);
              o
                ? n.Message.addToRepeatedField(t, e, i)
                : n.Message.setField(t, e, i);
            } else
              console.assert(
                !!l,
                `Reader func not set for field number ${e} in class ${s}`,
              ),
                r.skipField();
          } else r.skipField();
        }
        return t;
      }
      function u(e, t, r) {
        const { fields: i } = e;
        for (const e in i) {
          const { n: s, c: o, r: a, d: c, q: l, bw: u } = i[e];
          if (o)
            if (a) {
              const e = n.Message.getRepeatedWrapperField(t, o, s);
              ((e && e.length) || l) &&
                r.writeRepeatedMessage(s, e, o.serializeBinaryToWriter);
            } else {
              const e = n.Message.getWrapperField(t, o, s, l ? 1 : 0);
              e && r.writeMessage(s, e, o.serializeBinaryToWriter);
            }
          else if (u) {
            const e = n.Message.getField(t, s);
            void 0 !== e && u.call(r, s, e);
          } else
            console.assert(
              !!u,
              `Writer func not set for field number ${s} in class ${o}`,
            );
        }
      }
      function d(e) {
        const t = e.proto;
        for (const r in e.fields) {
          const i = e.fields[r],
            { n: s, c: o, r: a, d: c, q: l } = i;
          Object.prototype.hasOwnProperty.call(i, "d")
            ? (t.prototype[r] = p(n.Message.getFieldWithDefault, s, c))
            : (t.prototype[r] = o
                ? a
                  ? p(n.Message.getRepeatedWrapperField, o, s)
                  : f(o, s)
                : p(n.Message.getField, s)),
            (t.prototype[`set_${r}`] = g(
              o
                ? a
                  ? n.Message.setRepeatedWrapperField
                  : n.Message.setWrapperField
                : n.Message.setField,
              s,
            )),
            a && (t.prototype[`add_${r}`] = m(s, o));
        }
      }
      function p(e, ...t) {
        return function () {
          return e(this, ...t);
        };
      }
      function f(e, t) {
        return function (r = !0) {
          return n.Message.getWrapperField(this, e, t, r ? 1 : 0);
        };
      }
      function g(e, t) {
        return function (r) {
          return e(this, t, r);
        };
      }
      function m(e, t) {
        return t
          ? function (r, i) {
              return n.Message.addToRepeatedWrapperField(this, e, r, t, i);
            }
          : function (t, r) {
              n.Message.addToRepeatedField(this, e, t, r);
            };
      }
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~56fe39318.js.map
