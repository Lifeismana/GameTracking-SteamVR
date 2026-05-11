var CLSTAMP = "10630260";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [554],
  {
    582: (e, t, r) => {
      r.d(t, { aj: () => z, d4: () => P });
      var n = r(1635),
        o = r(6540),
        s = r(5339),
        i = r.n(s),
        a = r(3924);
      class l extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            l.prototype.product || a.Sg(l.M()),
            s.Message.initialize(this, e, 0, -1, [3, 4], null);
        }
        static M() {
          return (
            l.sm_m ||
              (l.sm_m = {
                proto: l,
                fields: {
                  product: { n: 1, br: a.qM.readString, bw: a.gp.writeString },
                  version: { n: 2, br: a.qM.readString, bw: a.gp.writeString },
                  errors: { n: 3, c, r: !0, q: !0 },
                  tags: {
                    n: 4,
                    r: !0,
                    q: !0,
                    br: a.qM.readString,
                    bw: a.gp.writeRepeatedString,
                  },
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
          let t = new (i().BinaryReader)(e),
            r = new l();
          return l.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(l.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(l.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportClientError_Notification";
        }
      }
      class c extends s.Message {
        static ImplementsStaticInterface() {}
        constructor(e = null) {
          super(),
            c.prototype.identifier || a.Sg(c.M()),
            s.Message.initialize(this, e, 0, -1, void 0, null);
        }
        static M() {
          return (
            c.sm_m ||
              (c.sm_m = {
                proto: c,
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
          let t = new (i().BinaryReader)(e),
            r = new c();
          return c.deserializeBinaryFromReader(r, t);
        }
        static deserializeBinaryFromReader(e, t) {
          return a.zj(c.MBF(), e, t);
        }
        serializeBinary() {
          var e = new (i().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
        }
        static serializeBinaryToWriter(e, t) {
          a.i0(c.M(), e, t);
        }
        serializeBase64String() {
          var e = new (i().BinaryWriter)();
          return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
        }
        getClassName() {
          return "CClientMetrics_ReportClientError_Notification_Error";
        }
      }
      var u = r(1286);
      function p(e) {
        return (0, n.sH)(this, arguments, void 0, function* (e, t = "SHA-256") {
          let r;
          var n;
          "string" == typeof e
            ? ((n = e), (r = new TextEncoder().encode(n).buffer))
            : (r = e);
          const o = yield window.crypto.subtle.digest(t, r);
          return (
            (s = o),
            Array.prototype.map
              .call(new Uint8Array(s), (e) => ("00" + e.toString(16)).slice(-2))
              .join("")
          );
          var s;
        });
      }
      var d = r(7600);
      var m = r(1333),
        g = r(9118),
        h = r(6090);
      const f =
        window.addEventListener || (r.g && r.g.addEventListener) || (() => {});
      let _,
        y = [],
        S = (e, t, r) =>
          y.push({ error: e, cCallsitesToIgnore: t, strComponentStack: r });
      const C = !0;
      class b extends Error {
        constructor(...e) {
          super(...e), (this.name = "Assertion Failed");
        }
      }
      {
        const e = console.assert;
        console.assert = (t, r, ...n) => {
          if (!t) {
            const e = v();
            S(new b(T(r, ...n)), 2, e);
          }
          e.apply(console, [t, r, ...n]);
        };
        const t = console.error;
        (console.error = (e, ...r) => {
          const n = v();
          S(new Error(T(e, ...r)), 1, n), t.apply(console, [e, ...r]);
        }),
          (console.clogerror = (e, r, ...n) => {
            const o = v();
            S(new Error(T(r, ...n)), e + 1, o), t.apply(console, [r, ...n]);
          }),
          f("error", (e) => {
            S(e.error, 0);
          }),
          f("unhandledrejection", (e) => {
            S(e.reason, 0);
          }),
          (_ = window.setTimeout(() => {
            (y = []), (S = () => {});
          }, 3e4));
      }
      const I = { cCallsitesToIgnore: 0, bIncludeMessageInIdentifier: !1 },
        w = [
          "chrome-extension://",
          "HTMLDivElement.onreset \\(/market",
          "/.millennium/Dist",
          "Refused unauthorized RPC command",
        ];
      function v() {
        try {
          const e = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
            t =
              o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
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
      class R {
        constructor(e = !0) {
          (this.m_transport = null),
            (this.m_rgErrorQueue = []),
            (this.m_sendTimer = null),
            (this.m_bReportingPaused = !1),
            (this.m_pauseTimer = void 0),
            (this.m_fnGetReportingInterval = H),
            (this.m_bEnabled = !0),
            (this.m_bInitialized = !1),
            e
              ? (y.forEach(
                  ({ error: e, cCallsitesToIgnore: t, strComponentStack: r }) =>
                    this.ReportError(e, {
                      cCallsitesToIgnore: t,
                      strComponentStack: r,
                    }),
                ),
                (S = (e, t, r) =>
                  this.ReportError(e, {
                    cCallsitesToIgnore: t,
                    strComponentStack: r,
                  })))
              : (S = () => {}),
            (y = []),
            clearTimeout(_),
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
              (this.m_rgErrorQueue = [])),
            (Error.stackTraceLimit = 12);
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
              const r = Object.assign(Object.assign({}, I), t);
              if (!this.m_bEnabled) return null;
              0;
              const o = yield (function (e, t) {
                try {
                  return e.stack && e.stack.match(M)
                    ? (function (e, t) {
                        return (0, n.sH)(this, void 0, void 0, function* () {
                          var r, n;
                          const {
                              cCallsitesToIgnore: o,
                              bIncludeMessageInIdentifier: s,
                            } = t,
                            i =
                              null !==
                                (n =
                                  null === (r = e.stack) || void 0 === r
                                    ? void 0
                                    : r.split("\n")) && void 0 !== n
                                ? n
                                : [];
                          let a = k(i.filter((e) => !!e.match(M))[o]);
                          s && (a = `${a} ${e.message}`);
                          const l = i
                            .map((e) => {
                              const t = e.match(/(.*)\((.*):(\d+):(\d+)\)/);
                              if (!t) return e;
                              if (5 === t.length) {
                                const [e, r, n, o, s] = t,
                                  i = parseInt(o),
                                  a = parseInt(s);
                                if (!isNaN(i) && !isNaN(a)) return [r, n, i, a];
                              }
                              return e;
                            })
                            .filter((e) => !!e);
                          return {
                            identifier: a,
                            identifierHash: yield N(a),
                            message: l,
                          };
                        });
                      })(e, t)
                    : e.stack && e.stack.match(E)
                      ? (function (e, t) {
                          return (0, n.sH)(this, void 0, void 0, function* () {
                            var r, n;
                            const {
                                cCallsitesToIgnore: o,
                                bIncludeMessageInIdentifier: s,
                              } = t,
                              i =
                                null !==
                                  (n =
                                    null === (r = e.stack) || void 0 === r
                                      ? void 0
                                      : r.split("\n")) && void 0 !== n
                                  ? n
                                  : [];
                            let a = k(i.filter((e) => !!e.match(E))[o]);
                            s && (a = `${a} ${e.message}`);
                            const l = i
                              .map((e) => {
                                const t = e.match(/(.*@)?(.*):(\d+):(\d+)/);
                                if (!t) return e;
                                if (5 === t.length) {
                                  const [e, r, n, o, s] = t,
                                    i = parseInt(o),
                                    a = parseInt(s);
                                  if (!isNaN(i) && !isNaN(a))
                                    return [r, n, i, a];
                                }
                                return e;
                              })
                              .filter((e) => !!e);
                            return {
                              identifier: a,
                              identifierHash: yield N(a),
                              message: [e.message, ...l],
                            };
                          });
                        })(e, t)
                      : e.stack && e.stack.match(B)
                        ? (function (e, t) {
                            return (0, n.sH)(
                              this,
                              void 0,
                              void 0,
                              function* () {
                                var r, n;
                                const {
                                    bIncludeMessageInIdentifier: o,
                                    cCallsitesToIgnore: s,
                                  } = t,
                                  i =
                                    null !==
                                      (n =
                                        null === (r = e.stack) || void 0 === r
                                          ? void 0
                                          : r.split("\n")) && void 0 !== n
                                      ? n
                                      : [],
                                  a = i[s],
                                  l = a.split("/");
                                let c = l[l.length - 1];
                                a.indexOf("@") > -1 &&
                                  (c = a.split("@")[0] + "@" + c),
                                  o && (c = `${c} ${e.message}`);
                                const u = i
                                  .map((e) => {
                                    const t = e.match(/(.*@)?(.*):(\d+):(\d+)/);
                                    if (!t) return e;
                                    if (5 === t.length) {
                                      const [e, r, n, o, s] = t,
                                        i = parseInt(o),
                                        a = parseInt(s);
                                      if (!isNaN(i) && !isNaN(a))
                                        return [r, n, i, a];
                                    }
                                    return e;
                                  })
                                  .filter((e) => !!e);
                                return {
                                  identifier: c,
                                  identifierHash: yield N(c),
                                  message: [e.message, ...u],
                                };
                              },
                            );
                          })(e, t)
                        : (F ||
                            (console.warn(
                              "Error reporter does not know how to parse generated stack:",
                            ),
                            console.warn(e.stack),
                            (F = !0)),
                          null);
                } catch (e) {
                  return (
                    console.warn(`Failed to normalize error stack: ${e}`), null
                  );
                }
              })(e, r);
              return o
                ? (r.cCallsitesToIgnore &&
                    o.message.splice(1, r.cCallsitesToIgnore),
                  r.strComponentStack &&
                    (o.strComponentStack = r.strComponentStack),
                  this.SendErrorReport(o),
                  o)
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
                o = new c();
              return (
                o.set_count(n),
                o.set_identifier(r.identifier + " " + r.identifierHash),
                o.set_message(JSON.stringify(r.message)),
                r.strComponentStack &&
                  o.set_context(
                    JSON.stringify({ componentStack: r.strComponentStack }),
                  ),
                o
              );
            }),
            n = new l();
          n.set_product(this.m_strProduct),
            n.set_version(this.m_strVersion),
            n.set_errors(r);
          for (const e of (function () {
            const e = [];
            if (
              ((null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.HasHMD()) || e.push("no_hmd"),
              null === m.HR || void 0 === m.HR ? void 0 : m.HR.systemInfo)
            ) {
              const t = -103;
              m.HR.systemInfo.os_type > 0
                ? e.push("windows")
                : m.HR.systemInfo.os_type <= t && e.push("linux");
            }
            (null === g.W || void 0 === g.W ? void 0 : g.W.IsSteamAvailable) ||
              e.push("no_steam");
            const t =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRProperties.GetStringProperty(
                    "/user/head",
                    h.fD.ActualTrackingSystemName_String,
                  );
            return t && e.push(t), e;
          })())
            n.add_tags(e);
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
          return C;
        }
      }
      function T(e, ...t) {
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
      const M = /^\s*at .*(\S+:\d+|\(native\))/m,
        E = /(^|@)\S+:\d+/,
        B = /.*\/bundle-[a-zA-Z0-9]+:\d+:\d+/;
      let O,
        F = !1;
      function k(e) {
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
      const z = () => (O || W(new R()), O),
        W = (e) => {
          (O = e), d.tH.InstallErrorReportingStore(O);
        };
      function N(e) {
        return (0, n.sH)(this, void 0, void 0, function* () {
          try {
            return (yield p(e)).slice(0, 16);
          } catch (e) {
            return "";
          }
        });
      }
      function H() {
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
      let L;
      const P = () => (L || (L = new j("https://api.steampowered.com/")), L);
    },
    9118: (e, t, r) => {
      r.d(t, { W: () => p });
      var n = r(1635),
        o = r(7813),
        s = r(2505),
        i = r.n(s),
        a = r(3236),
        l = r(3714),
        c = r(6090);
      class u {
        constructor() {
          (this.m_InputState = void 0),
            (this.m_KnownControllerTypes = o.observable.map()),
            (this.m_mailbox = new c._n()),
            (this.m_bUpdateInputStateOnControllerTypChange = !1),
            (0, o.makeObservable)(this);
        }
        Init(e) {
          return (
            this.m_mailbox.Init("input_state"),
            this.m_mailbox.RegisterHandler(
              "controller_type_changed",
              this.OnControllerTypeChanged,
            ),
            this.m_mailbox.RegisterHandler(
              "action_bindings_reloaded",
              this.OnActionBindingsReloaded,
            ),
            null != e && (this.m_bUpdateInputStateOnControllerTypChange = e),
            this.GetInputState()
          );
        }
        OnActionBindingsReloaded() {
          this.GetInputState();
        }
        OnControllerTypeChanged(e) {
          this.UpdateControllerTypes(e.controller_types),
            this.m_InputState &&
              (this.m_InputState.controller_types = e.controller_types),
            this.m_bUpdateInputStateOnControllerTypChange &&
              this.GetInputState();
        }
        get ConnectedDevices() {
          return null == this.m_InputState
            ? []
            : this.m_InputState.devices.filter(
                (e) =>
                  "TrackedDeviceClass_Controller" == e.class ||
                  "TrackedDeviceClass_HMD" == e.class ||
                  "TrackedDeviceClass_GenericTracker" == e.class,
              );
        }
        get ControllerTypes() {
          return this.m_InputState.controller_types;
        }
        get ShouldSendSystemButtonToAllApps() {
          return this.m_InputState.send_system_button_to_all_apps;
        }
        get ShowHiddenInputs() {
          return this.m_InputState.show_hidden_inputs;
        }
        get IsSteamAvailable() {
          return !this.m_InputState || this.m_InputState.is_steam_available;
        }
        get BDevMode() {
          return this.m_InputState.dev_mode;
        }
        get IsValid() {
          return null != this.m_InputState;
        }
        get CurrentUserPersonaName() {
          return this.m_InputState.current_user_persona_name
            ? this.m_InputState.current_user_persona_name
            : null;
        }
        GetControllerTypeInfo(e) {
          return this.m_InputState.controller_types.find(
            (t) => t.controller_type == e,
          );
        }
        GetDeviceInfo(e) {
          for (let t of this.m_InputState.devices)
            if (t.root_path == e || t.device_path == e) return t;
          return null;
        }
        LocalizeControllerString(e, t) {
          let r = (0, l.we)("#" + t);
          return r != "#" + t
            ? r
            : e &&
                this.m_InputState &&
                this.m_InputState.localization.hasOwnProperty(
                  e.resource_root,
                ) &&
                this.m_InputState.localization[e.resource_root].hasOwnProperty(
                  t.toLowerCase(),
                )
              ? this.m_InputState.localization[e.resource_root][t.toLowerCase()]
              : t;
        }
        LocalizeDriverString(e, t) {
          if (
            this.m_InputState &&
            this.m_InputState.localization.hasOwnProperty(e) &&
            this.m_InputState.localization[e].hasOwnProperty(t.toLowerCase())
          )
            return this.m_InputState.localization[e][t.toLowerCase()];
          let r = (0, l.we)("#" + t);
          return r != "#" + t ? r : t;
        }
        UpdateControllerTypes(e) {
          this.m_KnownControllerTypes.clear();
          for (let t of e)
            this.m_KnownControllerTypes.set(t.controller_type, t);
        }
        GetInputState() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            yield new Promise(function (e, t) {
              i()
                .get("/input/getstate.json")
                .then((t) => {
                  e(t.data);
                })
                .catch((e) => {
                  t(e);
                });
            }).then((e) => {
              (0, o.runInAction)(() => {
                for (let t of e.controller_types)
                  t.controller_type = t.controller_type.toLowerCase();
                for (let t of e.devices)
                  t.controller_type = t.controller_type.toLowerCase();
                this.UpdateControllerTypes(e.controller_types),
                  (this.m_InputState = e);
              });
            });
          });
        }
        get KnownControllerTypes() {
          return this.m_KnownControllerTypes;
        }
        FindDeviceClassForControllerType(e) {
          let t = this.GetControllerTypeInfo(e);
          return null == t ? void 0 : t.device_class;
        }
        FindRootPathForControllerType(e) {
          for (let t of this.m_InputState.devices)
            if (t.controller_type == e) return t.root_path;
          return null;
        }
      }
      (0, n.Cg)([o.observable], u.prototype, "m_InputState", void 0),
        (0, n.Cg)(
          [o.observable],
          u.prototype,
          "m_KnownControllerTypes",
          void 0,
        ),
        (0, n.Cg)([a.o], u.prototype, "OnActionBindingsReloaded", null),
        (0, n.Cg)([a.o], u.prototype, "OnControllerTypeChanged", null),
        (0, n.Cg)([o.computed], u.prototype, "ConnectedDevices", null),
        (0, n.Cg)([o.computed], u.prototype, "ControllerTypes", null),
        (0, n.Cg)(
          [o.computed],
          u.prototype,
          "ShouldSendSystemButtonToAllApps",
          null,
        ),
        (0, n.Cg)([o.computed], u.prototype, "ShowHiddenInputs", null),
        (0, n.Cg)([o.computed], u.prototype, "IsSteamAvailable", null),
        (0, n.Cg)([o.computed], u.prototype, "BDevMode", null),
        (0, n.Cg)([o.computed], u.prototype, "IsValid", null),
        (0, n.Cg)([o.computed], u.prototype, "CurrentUserPersonaName", null),
        (0, n.Cg)([a.o], u.prototype, "GetControllerTypeInfo", null),
        (0, n.Cg)([a.o], u.prototype, "LocalizeControllerString", null),
        (0, n.Cg)([a.o], u.prototype, "LocalizeDriverString", null),
        (0, n.Cg)([o.action], u.prototype, "UpdateControllerTypes", null),
        (0, n.Cg)([o.action], u.prototype, "GetInputState", null),
        (0, n.Cg)([o.computed], u.prototype, "KnownControllerTypes", null),
        (0, n.Cg)([a.o], u.prototype, "FindDeviceClassForControllerType", null);
      const p = new u();
      window.inputState = p;
    },
    3924: (e, t, r) => {
      r.d(t, {
        BT: () => l,
        Sg: () => p,
        Uq: () => a,
        gp: () => s,
        i0: () => u,
        qM: () => o,
        w0: () => i,
        zj: () => c,
      });
      var n = r(5339);
      const o = n.BinaryReader.prototype,
        s = n.BinaryWriter.prototype;
      function i(e) {
        const t = {},
          { fields: r } = e;
        for (const e in r) {
          const n = r[e];
          t[n.n] = n;
        }
        return t;
      }
      function a(e, t) {
        const { proto: r, fields: o } = e,
          s = new r();
        if (null == t) return s;
        for (const e in o) {
          const { n: r, c: i, r: a, d: l, q: c } = o[e];
          if (!Object.prototype.hasOwnProperty.call(t, e)) continue;
          const u = t[e];
          i
            ? a
              ? n.Message.setRepeatedWrapperField(
                  s,
                  r,
                  Array.isArray(u) ? u.map((e) => i.fromObject(e)) : [],
                )
              : n.Message.setWrapperField(s, r, i.fromObject(u))
            : n.Message.setField(s, r, u);
        }
        return s;
      }
      function l(e, t, r) {
        const { proto: o, fields: s } = e,
          i = {};
        for (const e in s) {
          const { n: o, c: a, r: l, d: c, q: u } = s[e];
          if (a)
            if (l)
              i[e] = n.Message.toObjectList(
                n.Message.getRepeatedWrapperField(r, a, o),
                a.toObject,
                t,
              );
            else {
              const s = n.Message.getWrapperField(r, a, o, u ? 1 : 0);
              s && (i[e] = a.toObject(t, s));
            }
          else {
            const t = n.Message.getFieldWithDefault(
              r,
              o,
              void 0 !== c ? c : null,
            );
            (null !== t || u) && (i[e] = t);
          }
        }
        return t && (i.$jspbMessageInstance = r), i;
      }
      function c(e, t, r) {
        for (; r.nextField() && !r.isEndGroup(); ) {
          const o = e[r.getFieldNumber()];
          if (o) {
            const { n: e, c: s, r: i, d: a, q: l, br: c } = o;
            if (s) {
              const o = new s();
              r.readMessage(o, s.deserializeBinaryFromReader),
                i
                  ? n.Message.addToRepeatedWrapperField(t, e, o, s)
                  : n.Message.setWrapperField(t, e, o);
            } else if (c) {
              const o = c.call(r);
              i
                ? n.Message.addToRepeatedField(t, e, o)
                : n.Message.setField(t, e, o);
            } else
              console.assert(
                !!c,
                `Reader func not set for field number ${e} in class ${s}`,
              ),
                r.skipField();
          } else r.skipField();
        }
        return t;
      }
      function u(e, t, r) {
        const { fields: o } = e;
        for (const e in o) {
          const { n: s, c: i, r: a, d: l, q: c, bw: u } = o[e];
          if (i)
            if (a) {
              const e = n.Message.getRepeatedWrapperField(t, i, s);
              ((e && e.length) || c) &&
                r.writeRepeatedMessage(s, e, i.serializeBinaryToWriter);
            } else {
              const e = n.Message.getWrapperField(t, i, s, c ? 1 : 0);
              e && r.writeMessage(s, e, i.serializeBinaryToWriter);
            }
          else if (u) {
            const e = n.Message.getField(t, s);
            void 0 !== e && u.call(r, s, e);
          } else
            console.assert(
              !!u,
              `Writer func not set for field number ${s} in class ${i}`,
            );
        }
      }
      function p(e) {
        const t = e.proto;
        for (const r in e.fields) {
          const o = e.fields[r],
            { n: s, c: i, r: a, d: l, q: c } = o;
          Object.prototype.hasOwnProperty.call(o, "d")
            ? (t.prototype[r] = d(n.Message.getFieldWithDefault, s, l))
            : (t.prototype[r] = i
                ? a
                  ? d(n.Message.getRepeatedWrapperField, i, s)
                  : m(i, s)
                : d(n.Message.getField, s)),
            (t.prototype[`set_${r}`] = g(
              i
                ? a
                  ? n.Message.setRepeatedWrapperField
                  : n.Message.setWrapperField
                : n.Message.setField,
              s,
            )),
            a && (t.prototype[`add_${r}`] = h(s, i));
        }
      }
      function d(e, ...t) {
        return function () {
          return e(this, ...t);
        };
      }
      function m(e, t) {
        return function (r = !0) {
          return n.Message.getWrapperField(this, e, t, r ? 1 : 0);
        };
      }
      function g(e, t) {
        return function (r) {
          return e(this, t, r);
        };
      }
      function h(e, t) {
        return t
          ? function (r, o) {
              return n.Message.addToRepeatedWrapperField(this, e, r, t, o);
            }
          : function (t, r) {
              n.Message.addToRepeatedField(this, e, t, r);
            };
      }
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~56fe39318.js.map
