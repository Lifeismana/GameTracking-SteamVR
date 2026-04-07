var CLSTAMP = "10579910";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [305],
  {
    1988: (e, t, o) => {
      var n = o(1635),
        r = o(3496),
        s = o(3236);
      class i extends r._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "context";
        }
        buildNode(e, t) {
          const o = this.createSgNode(t);
          return (o.properties.construct = this.props.construct), [e, o];
        }
      }
      (0, n.Cg)([s.o], i.prototype, "buildNode", null);
    },
    2527: (e, t, o) => {
      o(6540);
      var n = o(3496);
      n._J;
    },
    3496: (e, t, o) => {
      o.d(t, {
        GM: () => p,
        Hm: () => l,
        PG: () => i,
        RH: () => g,
        UM: () => b,
        Wi: () => a,
        XI: () => c,
        _J: () => m,
        hi: () => u,
        j_: () => d,
        kJ: () => h,
      });
      var n = o(6540),
        r = o(3725),
        s = o(5723);
      function i(e, t) {
        return e ? { x: e.x ? e.x : t.x, y: e.y ? e.y : t.y } : t;
      }
      function a(e, t) {
        return e
          ? { x: e.x ? e.x : t.x, y: e.y ? e.y : t.y, z: e.z ? e.z : t.z }
          : t;
      }
      function g(e, t) {
        return e
          ? { r: e.r ? e.r : t.r, g: e.g ? e.g : t.g, b: e.b ? e.b : t.b }
          : t;
      }
      function l(e) {
        if (e) return [e.x, e.y];
      }
      function d(e) {
        var t;
        return null ===
          (t = (function (e) {
            if (e) return [e.x, e.y, e.z];
          })(e)) || void 0 === t
          ? void 0
          : t.join(" ");
      }
      function u(e) {
        if (e) return e.w + " " + e.x + " " + e.y + " " + e.z;
      }
      function c(e) {
        return e && void 0 !== e.to;
      }
      function h(e) {
        return "number" == typeof e
          ? e
          : (t = e) && void 0 !== t.to
            ? [e.channel, e.interp, e.from, e.to]
            : void 0;
        var t;
      }
      function b(e) {
        return c(e)
          ? [
              e.channel,
              e.interp,
              e.from ? e.from[0] : void 0,
              e.from ? e.from[1] : void 0,
              e.from ? e.from[2] : void 0,
              e.to ? e.to[0] : void 0,
              e.to ? e.to[1] : void 0,
              e.to ? e.to[2] : void 0,
            ]
          : void 0;
      }
      class m extends n.Component {
        constructor(e) {
          var t;
          super(e),
            (this.m_domRef = n.createRef()),
            (this.m_buildNodeOverride = null),
            (this.m_SGID =
              null !==
                (t =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.NextSGID()) && void 0 !== t
                ? t
                : r._E);
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
        getID() {
          return this.props.id;
        }
        createSgNode(e) {
          return (0, s.Tu)(this.getNodeType(), e);
        }
        getCurrentRootElement() {
          return this.m_domRef.current;
        }
        componentDidMount() {
          this.m_buildNodeOverride &&
            (this.m_domRef.current.buildNode = this.m_buildNodeOverride),
            (0, s.my)();
        }
        componentDidUpdate() {
          (0, s.my)();
        }
        componentWillUnmount() {
          (0, s.Lx)(this.m_SGID),
            this.m_domRef.current &&
              this.m_buildNodeOverride &&
              delete this.m_domRef.current.buildNode;
        }
        PanelContextValue() {}
        render() {
          return n.createElement(
            p.Provider,
            { value: this.PanelContextValue() },
            n.cloneElement(this.internalRender(), {
              id: this.props.id,
              "vsg-type": this.getNodeType(),
              sgid: this.m_SGID,
              ref: this.m_domRef,
            }),
          );
        }
        internalRender() {
          return this.m_buildNodeOverride
            ? n.createElement("vsg-node", null, this.props.children)
            : null;
        }
      }
      const p = n.createContext(void 0);
    },
    428: (e, t, o) => {
      var n = o(1635),
        r = o(3496),
        s = o(3236);
      class i extends r._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "texture";
        }
        buildNode(e, t) {
          const o = this.createSgNode(t);
          return (
            (o.properties.id = this.props.id),
            (o.properties.source = this.props.source),
            [e, o]
          );
        }
      }
      (0, n.Cg)([s.o], i.prototype, "buildNode", null);
    },
    4397: (e, t, o) => {
      var n = o(1635),
        r = o(3496),
        s = o(3236);
      class i extends r._J {
        constructor(e) {
          super(e), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "videocapturequad";
        }
        buildNode(e, t) {
          const o = this.createSgNode(t);
          return (
            (o.properties.width = this.props.width),
            (o.properties.height = this.props.height),
            (o.properties["target-id"] = this.props.target_id),
            (o.properties["near-z"] = this.props["near-z"]),
            (o.properties["far-z"] = this.props["far-z"]),
            (o.properties.debug = this.props.debug),
            [e, o]
          );
        }
      }
      (0, n.Cg)([s.o], i.prototype, "buildNode", null);
    },
    2402: (e, t, o) => {
      o.d(t, { E: () => r, Q: () => n });
      const n = "set_dashboard_force_bounds_visible",
        r = "set_dashboard_fade_suppression";
    },
    1286: (e, t, o) => {
      o.d(t, { b: () => n });
      const n = 6;
    },
    3236: (e, t, o) => {
      function n(e, t, o) {
        return {
          get() {
            let e = o.value.bind(this);
            return (
              Object.prototype.hasOwnProperty.call(this, t) ||
                Object.defineProperty(this, t, { value: e }),
              e
            );
          },
        };
      }
      o.d(t, { o: () => n });
    },
    776: (e, t, o) => {
      o.d(t, { wd: () => l });
      var n = o(1635),
        r = o(3236);
      class s {
        GetObject(e, t) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            try {
              const o = yield this.GetString(e);
              return o ? JSON.parse(o, t) : null;
            } catch (e) {
              return null;
            }
          });
        }
        StoreObject(e, t) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            return this.StoreString(e, JSON.stringify(t));
          });
        }
      }
      class i extends s {
        GetString(e) {
          return Promise.resolve(localStorage.getItem(e));
        }
        StoreString(e, t) {
          return localStorage.setItem(e, t), Promise.resolve();
        }
        RemoveObject(e) {
          return localStorage.removeItem(e), Promise.resolve();
        }
      }
      var a,
        g = o(1651);
      !(function (e) {
        (e[(e.Debug = 0)] = "Debug"),
          (e[(e.Info = 1)] = "Info"),
          (e[(e.Warning = 2)] = "Warning"),
          (e[(e.Error = 3)] = "Error");
      })(a || (a = {}));
      class l {
        constructor(e, t) {
          (this.m_fnIdGenerator = void 0),
            (this.m_sName = e),
            (this.m_fnIdGenerator = t),
            d.Get().RegisterLogName(e);
        }
        Debug(...e) {
          this.Log(a.Debug, ...e);
        }
        Info(...e) {
          this.Log(a.Info, ...e);
        }
        Warning(...e) {
          this.Log(a.Warning, ...e);
        }
        Error(...e) {
          this.Log(a.Error, ...e);
        }
        Assert(e, ...t) {
          e || this.Log(a.Error, "Assertion failed:", ...t);
        }
        DebugOnce(e, ...t) {
          this.LogOnce(e, a.Debug, ...t);
        }
        InfoOnce(e, ...t) {
          this.LogOnce(e, a.Info, ...t);
        }
        WarningOnce(e, ...t) {
          this.LogOnce(e, a.Warning, ...t);
        }
        ErrorOnce(e, ...t) {
          this.LogOnce(e, a.Error, ...t);
        }
        IsDebugEnabled() {
          return d.Get().IsDebugLogEnabled(this.m_sName);
        }
        Log(e, ...t) {
          var o, n;
          const r = d.Get().IsDebugLogEnabled(this.m_sName);
          if (e == a.Debug && !r) return;
          let s = this.m_sName;
          const i =
            null !==
              (n =
                null === (o = this.m_fnIdGenerator) || void 0 === o
                  ? void 0
                  : o.call(this)) && void 0 !== n
              ? n
              : null;
          null != i && (s += " (" + i + ")");
          u(e, r, d.Get().IncludeBacktraceInLog, s, this.m_sName, ...t);
        }
        LogOnce(e, t, ...o) {
          d.Get().ShouldLogOnce(`${this.m_sName}:${e}`) && this.Log(t, ...o);
        }
      }
      (0, n.Cg)([r.o], l.prototype, "Debug", null),
        (0, n.Cg)([r.o], l.prototype, "Info", null),
        (0, n.Cg)([r.o], l.prototype, "Warning", null),
        (0, n.Cg)([r.o], l.prototype, "Error", null),
        (0, n.Cg)([r.o], l.prototype, "Assert", null),
        (0, n.Cg)([r.o], l.prototype, "DebugOnce", null),
        (0, n.Cg)([r.o], l.prototype, "InfoOnce", null),
        (0, n.Cg)([r.o], l.prototype, "WarningOnce", null),
        (0, n.Cg)([r.o], l.prototype, "ErrorOnce", null);
      class d {
        constructor() {
          (this.m_Storage = null),
            (this.m_setKnownDebugLogs = new Set()),
            (this.m_setEnabledDebugLogs = new Set()),
            (this.m_bIncludeBacktraceInLog = !1),
            (this.m_SettingsChangedCallback = new g.l()),
            (this.m_bLoading = !1),
            (this.m_setOnceKeys = new Set()),
            (this.m_Storage = new i()),
            this.LoadSettings();
        }
        LogAsLogManager(...e) {
          u(
            a.Info,
            !0,
            this.IncludeBacktraceInLog,
            "LogManager",
            "LogManager",
            ...e,
          );
        }
        LoadSettings() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            var e, t;
            (this.m_bLoading = !0),
              (this.m_bIncludeBacktraceInLog = !!(yield null ===
                (e = this.m_Storage) || void 0 === e
                ? void 0
                : e.GetObject(d.k_IncludeBacktraceInLog_StorageKey)));
            const o = yield null === (t = this.m_Storage) || void 0 === t
              ? void 0
              : t.GetObject(d.k_EnabledLogNames_StorageKey);
            if (Array.isArray(o)) {
              this.m_setEnabledDebugLogs = new Set(o);
              for (const e of o) this.m_setKnownDebugLogs.add(e);
              this.LogAsLogManager(
                "Loaded debug enabled log names. Will print log messages for:",
                Array.from(this.m_setEnabledDebugLogs),
              );
            } else 0;
            (this.m_bLoading = !1), this.m_SettingsChangedCallback.Dispatch();
          });
        }
        SaveSettings() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            var e, t;
            yield null === (e = this.m_Storage) || void 0 === e
              ? void 0
              : e.StoreObject(
                  d.k_EnabledLogNames_StorageKey,
                  Array.from(this.m_setEnabledDebugLogs),
                ),
              yield null === (t = this.m_Storage) || void 0 === t
                ? void 0
                : t.StoreObject(
                    d.k_IncludeBacktraceInLog_StorageKey,
                    this.m_bIncludeBacktraceInLog,
                  ),
              this.LogAsLogManager(
                "Saved enabled debug log names. Will print log messages for:",
                Array.from(this.m_setEnabledDebugLogs),
              );
          });
        }
        PrintEnabledLogs() {
          this.LogAsLogManager(
            "Will print log messages for:",
            Array.from(this.m_setEnabledDebugLogs),
          );
        }
        static Get() {
          return (
            null == d.s_Singleton && (d.s_Singleton = new d()), d.s_Singleton
          );
        }
        get Loading() {
          return this.m_bLoading;
        }
        get LogNames() {
          return this.m_setKnownDebugLogs.values();
        }
        RegisterLogName(e) {
          this.m_setKnownDebugLogs.add(e);
        }
        IsLogName(e) {
          return this.m_setKnownDebugLogs.has(e);
        }
        IsDebugLogEnabled(e) {
          return this.m_setEnabledDebugLogs.has(e);
        }
        ToggleDebugLogEnabled(e) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            this.SetDebugLogEnabled(e, !this.IsDebugLogEnabled(e));
          });
        }
        SetDebugLogEnabled(e, t) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            t
              ? this.m_setEnabledDebugLogs.add(e)
              : this.m_setEnabledDebugLogs.delete(e),
              this.m_SettingsChangedCallback.Dispatch(),
              yield this.SaveSettings();
          });
        }
        SetAllDebugLogsEnabled(e) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            (this.m_setEnabledDebugLogs = e
              ? new Set(this.m_setKnownDebugLogs)
              : new Set()),
              this.m_SettingsChangedCallback.Dispatch(),
              yield this.SaveSettings();
          });
        }
        RegisterForSettingsChanges(e) {
          return this.m_SettingsChangedCallback.Register(e);
        }
        get IncludeBacktraceInLog() {
          return this.m_bIncludeBacktraceInLog;
        }
        SetIncludeBacktraceInLog(e) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            (this.m_bIncludeBacktraceInLog = e),
              this.m_SettingsChangedCallback.Dispatch(),
              yield this.SaveSettings();
          });
        }
        ShouldLogOnce(e) {
          return !this.m_setOnceKeys.has(e) && (this.m_setOnceKeys.add(e), !0);
        }
      }
      function u(e, t, o, n, r, ...s) {
        const i = (function (e) {
            let t = 0;
            for (let o = 0; o < e.length; o++)
              t = e.charCodeAt(o) + ((t << 5) - t);
            return [255 & t, (t >> 8) & 255, (t >> 16) & 255];
          })(r).map((e, t) =>
            Math.round(
              Math.max(0, Math.min(255, 255 * (0.8 * (e / 255 - 0.5) + 0.15))),
            ),
          ),
          g = (299 * (l = i)[0] + 587 * l[1] + 114 * l[2]) / 1e3 >= 128;
        var l;
        let d = n;
        o &&
          (d =
            (function (e) {
              switch (e) {
                case a.Debug:
                  return String.fromCodePoint(128027);
                case a.Info:
                  return String.fromCodePoint(8505);
                case a.Warning:
                  return String.fromCodePoint(9888);
                case a.Error:
                  return String.fromCodePoint(128165);
              }
            })(e) +
            " " +
            d);
        const u =
            s.length >= 1 && "string" == typeof s[0] && s[0].includes("%c"),
          c = u && s.shift();
        let h;
        if (
          ((h = t
            ? [
                `%c${d}%c:${u ? " %c" + c : ""}`,
                `color: ${g ? "black" : "white"}; background: rgb(${i.join(",")}); padding: 0 1ch; border-radius: 3px;`,
                "color: transparent; margin-right: -1ch",
                ...(u ? [""] : []),
                ...s,
              ]
            : [`[${d}]`, ...s]),
          o)
        )
          console.groupCollapsed(...h),
            console.trace("Callstack"),
            console.groupEnd();
        else
          switch (e) {
            case a.Debug:
            case a.Info:
              console.log(...h);
              break;
            case a.Warning:
              console.warn(...h);
              break;
            case a.Error:
              console.clogerror
                ? console.clogerror(3, ...h)
                : console.error(...h);
          }
      }
      (d.k_EnabledLogNames_StorageKey = "EnabledWebLogs"),
        (d.k_IncludeBacktraceInLog_StorageKey = "IncludeBacktraceInLog"),
        (d.s_Singleton = null);
      const c = () => [...d.Get().LogNames].sort(),
        h = (e, t) => {
          d.Get().IsLogName(e)
            ? d.Get().SetDebugLogEnabled(e, t)
            : console.warn(`No log named "${e}", available logs:`, c());
        };
      (window.DebugLogEnable = (...e) => e.forEach((e) => h(e, !0))),
        (window.DebugLogDisable = (...e) => e.forEach((e) => h(e, !1))),
        (window.DebugLogEnableAll = () => d.Get().SetAllDebugLogsEnabled(!0)),
        (window.DebugLogDisableAll = () => d.Get().SetAllDebugLogsEnabled(!1)),
        (window.DebugLogEnableBacktrace = () =>
          d.Get().SetIncludeBacktraceInLog(!0)),
        (window.DebugLogDisableBacktrace = () =>
          d.Get().SetIncludeBacktraceInLog(!1)),
        (window.DebugLogNames = c),
        (window.DebugLogEnabled = (...e) => {
          e.length > 0 &&
            console.warn(
              `Use DebugLogEnable( '${e.join("', '")}' ) to enable a log. This function tells you what's enabled.`,
            ),
            d.Get().PrintEnabledLogs();
        });
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~8012d0c89.js.map
