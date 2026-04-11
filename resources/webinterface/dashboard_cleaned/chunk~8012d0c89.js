var CLSTAMP = "steamdb";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [305],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _._ {
        constructor(_) {
          super(_), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "context";
        }
        buildNode(_, _) {
          const _ = this.createSgNode(_);
          return (_.properties.construct = this.props.construct), [_, _];
        }
      }
      (0, _._)([_._], _.prototype, "buildNode", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__("chunkid");
      var _ = __webpack_require__("chunkid");
      _._;
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _) {
        return _
          ? {
              _: _._ ? _._ : _._,
              _: _._ ? _._ : _._,
            }
          : _;
      }
      function _(_, _) {
        return _
          ? {
              _: _._ ? _._ : _._,
              _: _._ ? _._ : _._,
              _: _._ ? _._ : _._,
            }
          : _;
      }
      function _(_, _) {
        return _
          ? {
              _: _._ ? _._ : _._,
              _: _._ ? _._ : _._,
              _: _._ ? _._ : _._,
            }
          : _;
      }
      function _(_) {
        if (_) return [_._, _._];
      }
      function _(_) {
        var _;
        return null ===
          (_ = (function (_) {
            if (_) return [_._, _._, _._];
          })(_)) || void 0 === _
          ? void 0
          : _.join(" ");
      }
      function _(_) {
        if (_) return _._ + " " + _._ + " " + _._ + " " + _._;
      }
      function _(_) {
        return _ && void 0 !== _._;
      }
      function _(_) {
        return "number" == typeof _
          ? _
          : (_ = _) && void 0 !== _._
            ? [_.channel, _.interp, _.from, _._]
            : void 0;
        var _;
      }
      function _(_) {
        return _(_)
          ? [
              _.channel,
              _.interp,
              _.from ? _.from[0] : void 0,
              _.from ? _.from[1] : void 0,
              _.from ? _.from[2] : void 0,
              _._ ? _._[0] : void 0,
              _._ ? _._[1] : void 0,
              _._ ? _._[2] : void 0,
            ]
          : void 0;
      }
      class _ extends _.Component {
        constructor(_) {
          var _;
          super(_),
            (this.m_domRef = _.createRef()),
            (this.m_buildNodeOverride = null),
            (this.m_SGID =
              null !==
                (_ =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.NextSGID()) && void 0 !== _
                ? _
                : _._);
        }
        setBuildNodeOverride(_) {
          this.m_buildNodeOverride = _;
        }
        getSGID() {
          return this.m_SGID;
        }
        getNodeType() {
          return "base";
        }
        getID() {
          return this.props._;
        }
        createSgNode(_) {
          return (0, _._)(this.getNodeType(), _);
        }
        getCurrentRootElement() {
          return this.m_domRef.current;
        }
        componentDidMount() {
          this.m_buildNodeOverride &&
            (this.m_domRef.current.buildNode = this.m_buildNodeOverride),
            (0, _._)();
        }
        componentDidUpdate() {
          (0, _._)();
        }
        componentWillUnmount() {
          (0, _._)(this.m_SGID),
            this.m_domRef.current &&
              this.m_buildNodeOverride &&
              delete this.m_domRef.current.buildNode;
        }
        PanelContextValue() {}
        render() {
          return _.createElement(
            _.Provider,
            {
              value: this.PanelContextValue(),
            },
            _.cloneElement(this.internalRender(), {
              _: this.props._,
              "vsg-type": this.getNodeType(),
              sgid: this.m_SGID,
              ref: this.m_domRef,
            }),
          );
        }
        internalRender() {
          return this.m_buildNodeOverride
            ? _.createElement("vsg-node", null, this.props.children)
            : null;
        }
      }
      const _ = _.createContext(void 0);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _._ {
        constructor(_) {
          super(_), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "texture";
        }
        buildNode(_, _) {
          const _ = this.createSgNode(_);
          return (
            (_.properties._ = this.props._),
            (_.properties.source = this.props.source),
            [_, _]
          );
        }
      }
      (0, _._)([_._], _.prototype, "buildNode", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _._ {
        constructor(_) {
          super(_), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "videocapturequad";
        }
        buildNode(_, _) {
          const _ = this.createSgNode(_);
          return (
            (_.properties.width = this.props.width),
            (_.properties.height = this.props.height),
            (_.properties["target-id"] = this.props.target_id),
            (_.properties["near-z"] = this.props["near-z"]),
            (_.properties["far-z"] = this.props["far-z"]),
            (_.properties.debug = this.props.debug),
            [_, _]
          );
        }
      }
      (0, _._)([_._], _.prototype, "buildNode", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      const _ = "set_dashboard_force_bounds_visible",
        _ = "set_dashboard_fade_suppression";
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      const _ = 6;
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      function _(_, _, _) {
        return {
          get() {
            let _ = _.value.bind(this);
            return (
              Object.prototype.hasOwnProperty.call(this, _) ||
                Object.defineProperty(this, _, {
                  value: _,
                }),
              _
            );
          },
        };
      }
      __webpack_require__._(module_exports, {
        _: () => _,
      });
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        GetObject(_, _) {
          return (0, _._)(this, void 0, void 0, function* () {
            try {
              const _ = yield this.GetString(_);
              return _ ? JSON.parse(_, _) : null;
            } catch (_) {
              return null;
            }
          });
        }
        StoreObject(_, _) {
          return (0, _._)(this, void 0, void 0, function* () {
            return this.StoreString(_, JSON.stringify(_));
          });
        }
      }
      class _ extends _ {
        GetString(_) {
          return Promise.resolve(localStorage.getItem(_));
        }
        StoreString(_, _) {
          return localStorage.setItem(_, _), Promise.resolve();
        }
        RemoveObject(_) {
          return localStorage.removeItem(_), Promise.resolve();
        }
      }
      var _,
        _ = __webpack_require__("chunkid");
      !(function (_) {
        (_[(_.Debug = 0)] = "Debug"),
          (_[(_.Info = 1)] = "Info"),
          (_[(_.Warning = 2)] = "Warning"),
          (_[(_.Error = 3)] = "Error");
      })(_ || (_ = {}));
      class _ {
        constructor(_, _) {
          (this.m_fnIdGenerator = void 0),
            (this.m_sName = _),
            (this.m_fnIdGenerator = _),
            _.Get().RegisterLogName(_);
        }
        Debug(..._) {
          this.Log(_.Debug, ..._);
        }
        Info(..._) {
          this.Log(_.Info, ..._);
        }
        Warning(..._) {
          this.Log(_.Warning, ..._);
        }
        Error(..._) {
          this.Log(_.Error, ..._);
        }
        Assert(_, ..._) {
          _ || this.Log(_.Error, "Assertion failed:", ..._);
        }
        DebugOnce(_, ..._) {
          this.LogOnce(_, _.Debug, ..._);
        }
        InfoOnce(_, ..._) {
          this.LogOnce(_, _.Info, ..._);
        }
        WarningOnce(_, ..._) {
          this.LogOnce(_, _.Warning, ..._);
        }
        ErrorOnce(_, ..._) {
          this.LogOnce(_, _.Error, ..._);
        }
        IsDebugEnabled() {
          return _.Get().IsDebugLogEnabled(this.m_sName);
        }
        Log(_, ..._) {
          var _, _;
          const _ = _.Get().IsDebugLogEnabled(this.m_sName);
          if (_ == _.Debug && !_) return;
          let _ = this.m_sName;
          const _ =
            null !==
              (_ =
                null === (_ = this.m_fnIdGenerator) || void 0 === _
                  ? void 0
                  : __webpack_require__.call(this)) && void 0 !== _
              ? _
              : null;
          null != _ && (_ += " (" + _ + ")");
          _(_, _, _.Get().IncludeBacktraceInLog, _, this.m_sName, ..._);
        }
        LogOnce(_, _, ..._) {
          _.Get().ShouldLogOnce(`${this.m_sName}:${_}`) && this.Log(_, ..._);
        }
      }
      (0, _._)([_._], _.prototype, "Debug", null),
        (0, _._)([_._], _.prototype, "Info", null),
        (0, _._)([_._], _.prototype, "Warning", null),
        (0, _._)([_._], _.prototype, "Error", null),
        (0, _._)([_._], _.prototype, "Assert", null),
        (0, _._)([_._], _.prototype, "DebugOnce", null),
        (0, _._)([_._], _.prototype, "InfoOnce", null),
        (0, _._)([_._], _.prototype, "WarningOnce", null),
        (0, _._)([_._], _.prototype, "ErrorOnce", null);
      class _ {
        constructor() {
          (this.m_Storage = null),
            (this.m_setKnownDebugLogs = new Set()),
            (this.m_setEnabledDebugLogs = new Set()),
            (this.m_bIncludeBacktraceInLog = !1),
            (this.m_SettingsChangedCallback = new _._()),
            (this.m_bLoading = !1),
            (this.m_setOnceKeys = new Set()),
            (this.m_Storage = new _()),
            this.LoadSettings();
        }
        LogAsLogManager(..._) {
          _(
            _.Info,
            !0,
            this.IncludeBacktraceInLog,
            "LogManager",
            "LogManager",
            ..._,
          );
        }
        LoadSettings() {
          return (0, _._)(this, void 0, void 0, function* () {
            var _, _;
            (this.m_bLoading = !0),
              (this.m_bIncludeBacktraceInLog = !!(yield null ===
                (_ = this.m_Storage) || void 0 === _
                ? void 0
                : _.GetObject(_.k_IncludeBacktraceInLog_StorageKey)));
            const _ = yield null === (_ = this.m_Storage) || void 0 === _
              ? void 0
              : _.GetObject(_.k_EnabledLogNames_StorageKey);
            if (Array.isArray(_)) {
              this.m_setEnabledDebugLogs = new Set(_);
              for (const _ of _) this.m_setKnownDebugLogs.add(_);
              this.LogAsLogManager(
                "Loaded debug enabled log names. Will print log messages for:",
                Array.from(this.m_setEnabledDebugLogs),
              );
            } else 0;
            (this.m_bLoading = !1), this.m_SettingsChangedCallback.Dispatch();
          });
        }
        SaveSettings() {
          return (0, _._)(this, void 0, void 0, function* () {
            var _, _;
            yield null === (_ = this.m_Storage) || void 0 === _
              ? void 0
              : _.StoreObject(
                  _.k_EnabledLogNames_StorageKey,
                  Array.from(this.m_setEnabledDebugLogs),
                ),
              yield null === (_ = this.m_Storage) || void 0 === _
                ? void 0
                : _.StoreObject(
                    _.k_IncludeBacktraceInLog_StorageKey,
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
            null == _.s_Singleton && (_.s_Singleton = new _()), _.s_Singleton
          );
        }
        get Loading() {
          return this.m_bLoading;
        }
        get LogNames() {
          return this.m_setKnownDebugLogs.values();
        }
        RegisterLogName(_) {
          this.m_setKnownDebugLogs.add(_);
        }
        IsLogName(_) {
          return this.m_setKnownDebugLogs.has(_);
        }
        IsDebugLogEnabled(_) {
          return this.m_setEnabledDebugLogs.has(_);
        }
        ToggleDebugLogEnabled(_) {
          return (0, _._)(this, void 0, void 0, function* () {
            this.SetDebugLogEnabled(_, !this.IsDebugLogEnabled(_));
          });
        }
        SetDebugLogEnabled(_, _) {
          return (0, _._)(this, void 0, void 0, function* () {
            _
              ? this.m_setEnabledDebugLogs.add(_)
              : this.m_setEnabledDebugLogs.delete(_),
              this.m_SettingsChangedCallback.Dispatch(),
              yield this.SaveSettings();
          });
        }
        SetAllDebugLogsEnabled(_) {
          return (0, _._)(this, void 0, void 0, function* () {
            (this.m_setEnabledDebugLogs = _
              ? new Set(this.m_setKnownDebugLogs)
              : new Set()),
              this.m_SettingsChangedCallback.Dispatch(),
              yield this.SaveSettings();
          });
        }
        RegisterForSettingsChanges(_) {
          return this.m_SettingsChangedCallback.Register(_);
        }
        get IncludeBacktraceInLog() {
          return this.m_bIncludeBacktraceInLog;
        }
        SetIncludeBacktraceInLog(_) {
          return (0, _._)(this, void 0, void 0, function* () {
            (this.m_bIncludeBacktraceInLog = _),
              this.m_SettingsChangedCallback.Dispatch(),
              yield this.SaveSettings();
          });
        }
        ShouldLogOnce(_) {
          return !this.m_setOnceKeys.has(_) && (this.m_setOnceKeys.add(_), !0);
        }
      }
      function _(_, _, _, _, _, ..._) {
        const _ = (function (_) {
            let _ = 0;
            for (let _ = 0; _ < _.length; _++)
              _ = _.charCodeAt(_) + ((_ << 5) - _);
            return [255 & _, (_ >> 8) & 255, (_ >> 16) & 255];
          })(_).map((_, _) =>
            Math.round(
              Math.max(0, Math.min(255, 255 * (0.8 * (_ / 255 - 0.5) + 0.15))),
            ),
          ),
          _ = (299 * (_ = _)[0] + 587 * _[1] + 114 * _[2]) / 1e3 >= 128;
        var _;
        let _ = _;
        _ &&
          (_ =
            (function (_) {
              switch (_) {
                case _.Debug:
                  return String.fromCodePoint(128027);
                case _.Info:
                  return String.fromCodePoint(8505);
                case _.Warning:
                  return String.fromCodePoint(9888);
                case _.Error:
                  return String.fromCodePoint(128165);
              }
            })(_) +
            " " +
            _);
        const _ =
            _.length >= 1 && "string" == typeof _[0] && _[0].includes("%c"),
          _ = _ && _.shift();
        let _;
        if (
          ((_ = _
            ? [
                `%c${_}%c:${_ ? " %c" + _ : ""}`,
                `color: ${_ ? "black" : "white"}; background: rgb(${_.join(",")}); padding: 0 1ch; border-radius: 3px;`,
                "color: transparent; margin-right: -1ch",
                ...(_ ? [""] : []),
                ..._,
              ]
            : [`[${_}]`, ..._]),
          _)
        )
          console.groupCollapsed(..._),
            console.trace("Callstack"),
            console.groupEnd();
        else
          switch (_) {
            case _.Debug:
            case _.Info:
              console.log(..._);
              break;
            case _.Warning:
              console.warn(..._);
              break;
            case _.Error:
              console.clogerror
                ? console.clogerror(3, ..._)
                : console.error(..._);
          }
      }
      (_.k_EnabledLogNames_StorageKey = "EnabledWebLogs"),
        (_.k_IncludeBacktraceInLog_StorageKey = "IncludeBacktraceInLog"),
        (_.s_Singleton = null);
      const _ = () => [..._.Get().LogNames].sort(),
        _ = (_, _) => {
          _.Get().IsLogName(_)
            ? _.Get().SetDebugLogEnabled(_, _)
            : console.warn(`No log named "${_}", available logs:`, _());
        };
      (window.DebugLogEnable = (..._) => _.forEach((_) => _(_, !0))),
        (window.DebugLogDisable = (..._) => _.forEach((_) => _(_, !1))),
        (window.DebugLogEnableAll = () => _.Get().SetAllDebugLogsEnabled(!0)),
        (window.DebugLogDisableAll = () => _.Get().SetAllDebugLogsEnabled(!1)),
        (window.DebugLogEnableBacktrace = () =>
          _.Get().SetIncludeBacktraceInLog(!0)),
        (window.DebugLogDisableBacktrace = () =>
          _.Get().SetIncludeBacktraceInLog(!1)),
        (window.DebugLogNames = _),
        (window.DebugLogEnabled = (..._) => {
          _.length > 0 &&
            console.warn(
              `Use DebugLogEnable( '${_.join("', '")}' ) to enable a log. This function tells you what's enabled.`,
            ),
            _.Get().PrintEnabledLogs();
        });
    },
  },
]);
