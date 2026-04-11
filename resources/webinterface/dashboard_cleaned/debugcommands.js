var CLSTAMP = "steamdb";
(() => {
  "use strict";
  var _,
    _ = {
      chunkid: (_, _) => {
        var _ = Symbol.for("react.element"),
          _ = Symbol.for("react.portal"),
          _ = Symbol.for("react.fragment"),
          _ = Symbol.for("react.strict_mode"),
          _ = Symbol.for("react.profiler"),
          _ = Symbol.for("react.provider"),
          _ = Symbol.for("react.context"),
          _ = Symbol.for("react.forward_ref"),
          _ = Symbol.for("react.suspense"),
          _ = Symbol.for("react.memo"),
          _ = Symbol.for("react.lazy"),
          _ = Symbol.iterator;
        var _ = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          _ = Object.assign,
          _ = {};
        function _(_, _, _) {
          (this.props = _),
            (this.context = _),
            (this.refs = _),
            (this.updater = _ || _);
        }
        function _() {}
        function _(_, _, _) {
          (this.props = _),
            (this.context = _),
            (this.refs = _),
            (this.updater = _ || _);
        }
        (_.prototype.isReactComponent = {}),
          (_.prototype.setState = function (_, _) {
            if ("object" != typeof _ && "function" != typeof _ && null != _)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, _, _, "setState");
          }),
          (_.prototype.forceUpdate = function (_) {
            this.updater.enqueueForceUpdate(this, _, "forceUpdate");
          }),
          (_.prototype = _.prototype);
        var _ = (_.prototype = new _());
        (_.constructor = _), _(_, _.prototype), (_.isPureReactComponent = !0);
        var _ = Array.isArray,
          _ = Object.prototype.hasOwnProperty,
          _ = {
            current: null,
          },
          _ = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0,
          };
        function _(_, _, _) {
          var _,
            _ = {},
            _ = null,
            _ = null;
          if (null != _)
            for (_ in (void 0 !== _.ref && (_ = _.ref),
            void 0 !== _.key && (_ = "" + _.key),
            _))
              _.call(_, _) && !_.hasOwnProperty(_) && (_[_] = _[_]);
          var _ = arguments.length - 2;
          if (1 === _) _.children = _;
          else if (1 < _) {
            for (var _ = Array(_), _ = 0; _ < _; _++) _[_] = arguments[_ + 2];
            _.children = _;
          }
          if (_ && _.defaultProps)
            for (_ in (_ = _.defaultProps)) void 0 === _[_] && (_[_] = _[_]);
          return {
            $$typeof: _,
            type: _,
            key: _,
            ref: _,
            props: _,
            _owner: _.current,
          };
        }
        function _(_) {
          return "object" == typeof _ && null !== _ && _.$$typeof === _;
        }
        var _ = /\/+/g;
        function _(_, _) {
          return "object" == typeof _ && null !== _ && null != _.key
            ? (function (_) {
                var _ = {
                  "=": "=0",
                  ":": "=2",
                };
                return (
                  "$" +
                  _.replace(/[=:]/g, function (_) {
                    return _[_];
                  })
                );
              })("" + _.key)
            : _.toString(36);
        }
        function _(_, _, _, _, _) {
          var _ = typeof _;
          ("undefined" !== _ && "boolean" !== _) || (_ = null);
          var _ = !1;
          if (null === _) _ = !0;
          else
            switch (_) {
              case "string":
              case "number":
                _ = !0;
                break;
              case "object":
                switch (_.$$typeof) {
                  case _:
                  case _:
                    _ = !0;
                }
            }
          if (_)
            return (
              (_ = _((_ = _))),
              (_ = "" === _ ? "." + _(_, 0) : _),
              _(_)
                ? ((_ = ""),
                  null != _ && (_ = _.replace(_, "$&/") + "/"),
                  _(_, _, _, "", function (_) {
                    return _;
                  }))
                : null != _ &&
                  (_(_) &&
                    (_ = (function (_, _) {
                      return {
                        $$typeof: _,
                        type: _.type,
                        key: _,
                        ref: _.ref,
                        props: _.props,
                        _owner: _._owner,
                      };
                    })(
                      _,
                      _ +
                        (!_.key || (_ && _.key === _.key)
                          ? ""
                          : ("" + _.key).replace(_, "$&/") + "/") +
                        _,
                    )),
                  _.push(_)),
              1
            );
          if (((_ = 0), (_ = "" === _ ? "." : _ + ":"), _(_)))
            for (var _ = 0; _ < _.length; _++) {
              var _ = _ + _((_ = _[_]), _);
              _ += _(_, _, _, _, _);
            }
          else if (
            ((_ = (function (_) {
              return null === _ || "object" != typeof _
                ? null
                : "function" == typeof (_ = (_ && _[_]) || _["@@iterator"])
                  ? _
                  : null;
            })(_)),
            "function" == typeof _)
          )
            for (_ = _.call(_), _ = 0; !(_ = _.next()).done; )
              _ += _((_ = _.value), _, _, (_ = _ + _(_, _++)), _);
          else if ("object" === _)
            throw (
              ((_ = String(_)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === _
                    ? "object with keys {" + Object.keys(_).join(", ") + "}"
                    : _) +
                  "). If you meant to render a collection of children, use an array instead.",
              ))
            );
          return _;
        }
        function _(_, _, _) {
          if (null == _) return _;
          var _ = [],
            _ = 0;
          return (
            _(_, _, "", "", function (_) {
              return _.call(_, _, _++);
            }),
            _
          );
        }
        function _(_) {
          if (-1 === _._status) {
            var _ = _._result;
            (_ = _()).then(
              function (_) {
                (0 !== _._status && -1 !== _._status) ||
                  ((_._status = 1), (_._result = _));
              },
              function (_) {
                (0 !== _._status && -1 !== _._status) ||
                  ((_._status = 2), (_._result = _));
              },
            ),
              -1 === _._status && ((_._status = 0), (_._result = _));
          }
          if (1 === _._status) return _._result.default;
          throw _._result;
        }
        var _ = {
            current: null,
          },
          _ = {
            transition: null,
          },
          _ = {
            ReactCurrentDispatcher: _,
            ReactCurrentBatchConfig: _,
            ReactCurrentOwner: _,
          };
        function _() {
          throw Error(
            "act(...) is not supported in production builds of React.",
          );
        }
        (_.Children = {
          map: _,
          forEach: function (_, _, _) {
            _(
              _,
              function () {
                _.apply(this, arguments);
              },
              _,
            );
          },
          count: function (_) {
            var _ = 0;
            return (
              _(_, function () {
                _++;
              }),
              _
            );
          },
          toArray: function (_) {
            return (
              _(_, function (_) {
                return _;
              }) || []
            );
          },
          only: function (_) {
            if (!_(_))
              throw Error(
                "React.Children.only expected to receive a single React element child.",
              );
            return _;
          },
        }),
          (_.Component = _),
          (_.Fragment = _),
          (_.Profiler = _),
          (_.PureComponent = _),
          (_.StrictMode = _),
          (_.Suspense = _),
          (_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _),
          (_.act = _),
          (_.cloneElement = function (_, _, _) {
            if (null == _)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  _ +
                  ".",
              );
            var _ = _({}, _.props),
              _ = _.key,
              _ = _.ref,
              _ = _._owner;
            if (null != _) {
              if (
                (void 0 !== _.ref && ((_ = _.ref), (_ = _.current)),
                void 0 !== _.key && (_ = "" + _.key),
                _.type && _.type.defaultProps)
              )
                var _ = _.type.defaultProps;
              for (_ in _)
                _.call(_, _) &&
                  !_.hasOwnProperty(_) &&
                  (_[_] = void 0 === _[_] && void 0 !== _ ? _[_] : _[_]);
            }
            var _ = arguments.length - 2;
            if (1 === _) _.children = _;
            else if (1 < _) {
              _ = Array(_);
              for (var _ = 0; _ < _; _++) _[_] = arguments[_ + 2];
              _.children = _;
            }
            return {
              $$typeof: _,
              type: _.type,
              key: _,
              ref: _,
              props: _,
              _owner: _,
            };
          }),
          (_.createContext = function (_) {
            return (
              ((_ = {
                $$typeof: _,
                _currentValue: _,
                _currentValue2: _,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = {
                $$typeof: _,
                _context: _,
              }),
              (_.Consumer = _)
            );
          }),
          (_.createElement = _),
          (_.createFactory = function (_) {
            var _ = _.bind(null, _);
            return (_.type = _), _;
          }),
          (_.createRef = function () {
            return {
              current: null,
            };
          }),
          (_.forwardRef = function (_) {
            return {
              $$typeof: _,
              render: _,
            };
          }),
          (_.isValidElement = _),
          (_.lazy = function (_) {
            return {
              $$typeof: _,
              _payload: {
                _status: -1,
                _result: _,
              },
              _init: _,
            };
          }),
          (_.memo = function (_, _) {
            return {
              $$typeof: _,
              type: _,
              compare: void 0 === _ ? null : _,
            };
          }),
          (_.startTransition = function (_) {
            var _ = _.transition;
            _.transition = {};
            try {
              _();
            } finally {
              _.transition = _;
            }
          }),
          (_.unstable_act = _),
          (_.useCallback = function (_, _) {
            return _.current.useCallback(_, _);
          }),
          (_.useContext = function (_) {
            return _.current.useContext(_);
          }),
          (_.useDebugValue = function () {}),
          (_.useDeferredValue = function (_) {
            return _.current.useDeferredValue(_);
          }),
          (_.useEffect = function (_, _) {
            return _.current.useEffect(_, _);
          }),
          (_.useId = function () {
            return _.current.useId();
          }),
          (_.useImperativeHandle = function (_, _, _) {
            return _.current.useImperativeHandle(_, _, _);
          }),
          (_.useInsertionEffect = function (_, _) {
            return _.current.useInsertionEffect(_, _);
          }),
          (_.useLayoutEffect = function (_, _) {
            return _.current.useLayoutEffect(_, _);
          }),
          (_.useMemo = function (_, _) {
            return _.current.useMemo(_, _);
          }),
          (_.useReducer = function (_, _, _) {
            return _.current.useReducer(_, _, _);
          }),
          (_.useRef = function (_) {
            return _.current.useRef(_);
          }),
          (_.useState = function (_) {
            return _.current.useState(_);
          }),
          (_.useSyncExternalStore = function (_, _, _) {
            return _.current.useSyncExternalStore(_, _, _);
          }),
          (_.useTransition = function () {
            return _.current.useTransition();
          }),
          (_.version = "18.3.1");
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(_, {
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
        });
        var _ = __webpack_require__("chunkid"),
          _ =
            (__webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid")),
          _ =
            (__webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid")),
          _ =
            (__webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid")),
          _ =
            (__webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"));
        __webpack_require__("chunkid");
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(_, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = "vrcompositor_systemlayer",
          _ = "vrcompositor_mailbox",
          _ = "systemui_dashboard_private",
          _ = "binding_callouts/main";
        class _ {
          constructor() {
            (this.m_wsWebSocketToServer = void 0),
              (this.connected = !1),
              (this.m_oHandlers = {}),
              (this.m_oWaits = {}),
              (this.m_oConnectWaits = []),
              (this.m_fnConnectResolve = void 0),
              (this.m_nNextMessageNumber = 1),
              (this.Log = new _._("Mailbox", () => this.m_sMailboxName)),
              (0, _.makeObservable)(this);
          }
          OpenWebSocketToHost() {
            return new Promise((_, _) => {
              this.Log.Info("Connecting vrmailbox...");
              let _ = "ws://127.0.0.1:27062";
              this.m_sWebSecret && (_ += "?secret=" + this.m_sWebSecret),
                (this.m_fnConnectResolve = _),
                (this.m_wsWebSocketToServer = new WebSocket(_)),
                this.m_wsWebSocketToServer.addEventListener("open", (_) => {
                  this.OnWebSocketOpen(_), _();
                }),
                this.m_wsWebSocketToServer.addEventListener(
                  "message",
                  this.OnWebSocketMessage,
                ),
                this.m_wsWebSocketToServer.addEventListener(
                  "close",
                  this.OnWebSocketClose,
                ),
                this.m_wsWebSocketToServer.addEventListener(
                  "error",
                  this.OnWebSocketError,
                );
            });
          }
          static EnsureUniqueName(_) {
            if (_.includes("/")) return _;
            let _;
            return (
              (_ = VRHTML ? VRHTML.GetWebHelperId() : Date.now().toString()),
              _ + "/" + _ + "_" + this.s_nNextMailboxNumber++
            );
          }
          Init(_, _) {
            return (0, _._)(this, void 0, void 0, function* () {
              return (
                (this.m_sMailboxName = _.EnsureUniqueName(_)),
                (this.m_sWebSecret = _),
                (this.connected = !1),
                this.OpenWebSocketToHost()
              );
            });
          }
          get name() {
            return this.m_sMailboxName;
          }
          OnWebSocketOpen(_) {
            (this.connected = !0),
              this.WebSocketSend("mailbox_open " + this.m_sMailboxName),
              window.addEventListener("beforeunload", () => {
                this.WebSocketSend("websocket_close");
              }),
              this.m_fnConnectResolve &&
                (this.m_fnConnectResolve(), (this.m_fnConnectResolve = void 0));
            for (let _ of this.m_oConnectWaits) _();
            this.m_oConnectWaits = [];
          }
          OnWebSocketClose(_) {
            return (0, _._)(this, void 0, void 0, function* () {
              this.Log.Warning("Lost connection to host..."),
                (this.connected = !1),
                yield (0, _._)(1e3),
                this.OpenWebSocketToHost();
            });
          }
          OnWebSocketError(_) {
            return (0, _._)(this, void 0, void 0, function* () {
              this.Log.Error("Mailbox error:", _),
                (this.connected = !1),
                yield (0, _._)(1e3),
                this.OpenWebSocketToHost();
            });
          }
          WebSocketSend(_) {
            return (
              null != this.m_wsWebSocketToServer &&
              1 == this.m_wsWebSocketToServer.readyState &&
              (this.m_wsWebSocketToServer.send(_), !0)
            );
          }
          OnWebSocketMessage(_) {
            let _ = JSON.parse(_.data),
              _ = !1;
            if (
              (this.m_oHandlers.hasOwnProperty(_.type) &&
                (this.m_oHandlers[_.type](_), (_ = !0)),
              this.m_oWaits.hasOwnProperty(_.type))
            ) {
              let _ = !1;
              for (let _ of this.m_oWaits[_.type])
                _.nMessageId == _.message_id &&
                  (__webpack_require__.callback(_), (_ = !0));
              _
                ? (this.m_oWaits[_.type] = this.m_oWaits[_.type].filter(
                    (_) => _.nMessageId == _.message_id,
                  ))
                : this.Log.Error(
                    `Received a ${_.type} message, but didn't have a matching message_id. Did the other end forget to mirror message_id?`,
                  ),
                (_ = !0);
            }
            _ || this.Log.Error("Received unhandled message: ", _.type, _);
          }
          RegisterHandler(_, _) {
            this.m_oHandlers[_] = _;
          }
          SendMessage(_, _) {
            return this.WebSocketSend(
              "mailbox_send " + _ + " " + JSON.stringify(_),
            );
          }
          WaitForMessage(_, _) {
            return new Promise((_, _) => {
              this.m_oWaits[_] || (this.m_oWaits[_] = []),
                this.m_oWaits[_].push({
                  callback: _,
                  nMessageId: _,
                });
            });
          }
          WaitForConnect() {
            return new Promise((_, _) => {
              this.connected ? _() : this.m_oConnectWaits.push(_);
            });
          }
          WaitForMailbox(_) {
            return (0, _._)(this, void 0, void 0, function* () {
              let _ = {
                type: "request_mailbox_registration_notification",
                mailbox_name: _,
              };
              return this.SendMessageAndWaitForResponse(
                "web_server_mailbox",
                _,
                "mailbox_registered",
              );
            });
          }
          SendMessageAndWaitForResponse(_, _, _) {
            let _ = Object.assign({}, _);
            return (
              null == _.returnAddress &&
                (_.returnAddress = this.m_sMailboxName),
              (_.message_id = this.m_nNextMessageNumber++),
              this.SendMessage(_, _),
              this.WaitForMessage(_, _.message_id)
            );
          }
          SendResponse(_, _) {
            if (!_.returnAddress)
              throw new Error("Missing return address on message");
            let _ = Object.assign(Object.assign({}, _), {
              message_id: _.message_id,
            });
            (_.message_id = _.message_id), this.SendMessage(_.returnAddress, _);
          }
        }
        (_.s_nNextMailboxNumber = 1),
          (0, _._)([_.observable], _.prototype, "connected", void 0),
          (0, _._)([_._], _.prototype, "OpenWebSocketToHost", null),
          (0, _._)([_._], _.prototype, "OnWebSocketOpen", null),
          (0, _._)([_._], _.prototype, "OnWebSocketClose", null),
          (0, _._)([_._], _.prototype, "OnWebSocketError", null),
          (0, _._)([_._], _.prototype, "WebSocketSend", null),
          (0, _._)([_._], _.prototype, "OnWebSocketMessage", null);
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        class _ {
          constructor(_, _, _) {
            (this.keyCode = _), (this.shift = _), (this.control = _);
          }
          equals(_) {
            return (
              _ &&
              this.keyCode === _.keyCode &&
              this.shift === _.shift &&
              this.control === _.control
            );
          }
          get isValid() {
            return (
              ((_ = this.keyCode) > 47 && _ < 58) ||
              32 == _ ||
              13 == _ ||
              (_ > 64 && _ < 91) ||
              (_ > 95 && _ < 112) ||
              (_ > 185 && _ < 193) ||
              (_ > 218 && _ < 223) ||
              (function (_) {
                return _ >= 37 && _ <= 40;
              })(this.keyCode)
            );
            var _;
          }
          get character() {
            switch (this.keyCode) {
              case 8:
                return "Backspace";
              case 9:
                return "Tab";
              case 13:
                return "Enter";
              case 16:
                return "Shift";
              case 17:
                return "Ctrl";
              case 18:
                return "Alt";
              case 19:
                return "Pause/Break";
              case 20:
                return "Caps Lock";
              case 27:
                return "Esc";
              case 32:
                return "Space";
              case 33:
                return "Page Up";
              case 34:
                return "Page Down";
              case 35:
                return "End";
              case 36:
                return "Home";
              case 37:
                return "Left";
              case 38:
                return "Up";
              case 39:
                return "Right";
              case 40:
                return "Down";
              case 45:
                return "Insert";
              case 46:
                return "Delete";
              case 91:
                return "Windows";
              case 93:
                return "Right Click";
              case 96:
                return "Numpad 0";
              case 97:
                return "Numpad 1";
              case 98:
                return "Numpad 2";
              case 99:
                return "Numpad 3";
              case 100:
                return "Numpad 4";
              case 101:
                return "Numpad 5";
              case 102:
                return "Numpad 6";
              case 103:
                return "Numpad 7";
              case 104:
                return "Numpad 8";
              case 105:
                return "Numpad 9";
              case 106:
                return "Numpad *";
              case 107:
                return "Numpad +";
              case 109:
                return "Numpad -";
              case 110:
                return "Numpad .";
              case 111:
                return "Numpad /";
              case 112:
                return "F1";
              case 113:
                return "F2";
              case 114:
                return "F3";
              case 115:
                return "F4";
              case 116:
                return "F5";
              case 117:
                return "F6";
              case 118:
                return "F7";
              case 119:
                return "F8";
              case 120:
                return "F9";
              case 121:
                return "F10";
              case 122:
                return "F11";
              case 123:
                return "F12";
              case 144:
                return "Num Lock";
              case 145:
                return "Scroll Lock";
              case 182:
                return "My Computer";
              case 183:
                return "My Calculator";
              case 186:
                return ";";
              case 187:
                return "=";
              case 188:
                return ",";
              case 189:
                return "-";
              case 190:
                return ".";
              case 191:
                return "/";
              case 192:
                return "`";
              case 219:
                return "[";
              case 220:
                return "\\";
              case 221:
                return "]";
              case 222:
                return "'";
              default:
                return String.fromCharCode(this.keyCode);
            }
          }
          static fromSerializedString(_) {
            let _ = _.split(",");
            if (3 !== _.length) return null;
            let _ = Number.parseInt(_[0]),
              _ = Number.parseInt(_[1]),
              _ = Number.parseInt(_[2]);
            return new _(_, _ > 0, _ > 0);
          }
          toSerializedString() {
            return [
              this.keyCode,
              this.shift ? 1 : 0,
              this.control ? 1 : 0,
            ].join(",");
          }
          toString() {
            let _ = this.character;
            return (
              this.shift && (_ = "shift + " + _),
              this.control && (_ = "ctrl + " + _),
              _
            );
          }
          render() {
            return _.createElement(
              "span",
              null,
              this.control && "control",
              this.control &&
                _.createElement(
                  "span",
                  {
                    className: "Plus",
                  },
                  " + ",
                ),
              this.shift && "shift",
              this.shift &&
                _.createElement(
                  "span",
                  {
                    className: "Plus",
                  },
                  " + ",
                ),
              this.character,
            );
          }
        }
        class _ {
          constructor(_, _) {
            (this.shortcut = void 0),
              (this.sCommand = _),
              (this.sMailbox = _),
              (this.refButton = _.createRef()),
              (0, _.makeObservable)(this);
          }
        }
        (0, _._)([_.observable], _.prototype, "shortcut", void 0);
        class _ {
          dumpShortcuts() {
            let _ = ["Defaults:"];
            this.rCommands.forEach((_) => {
              _.shortcut &&
                _.push(
                  '"' +
                    _.sCommand +
                    '": new KeyboardShortcut( ' +
                    _.shortcut.keyCode +
                    ", " +
                    (_.shortcut.shift ? "true" : "false") +
                    ", " +
                    (_.shortcut.control ? "true" : "false") +
                    " ), // " +
                    _.shortcut.toString().toLowerCase(),
                );
            }),
              console.log(_.join("\n"));
          }
          constructor(_) {
            (this.rCommands = []),
              (this.rCommands = _),
              (window.dumpShortcuts = this.dumpShortcuts);
          }
          initializeKeyboardShortcuts() {
            return (0, _._)(this, void 0, void 0, function* () {
              this.resetCommandShortcuts(!1), yield this.loadCommandShortcuts();
            });
          }
          getCommandForShortcut(_) {
            if (!_) return null;
            let _ = this.rCommands.filter((_) => _.equals(_.shortcut));
            return _.length > 0 ? _[0] : null;
          }
          resetCommandShortcuts(_) {
            this.rCommands.forEach((_) => this.resetCommandShortcut(_, !1)),
              _ && this.saveCommandShortcuts();
          }
          getCommandForName(_) {
            let _ = this.rCommands.filter((_) => _.sCommand === _);
            return _.length > 0 ? _[0] : null;
          }
          loadCommandShortcuts() {
            return (0, _._)(this, void 0, void 0, function* () {
              let _;
              try {
                _ = yield _._.GetSettingsValue(_.k_sPropDebugCommandShortcuts);
              } catch (_) {
                return;
              }
              _ &&
                _.split(";").forEach((_) => {
                  let _ = _.split(":");
                  if (2 !== _.length) return;
                  let _ = this.getCommandForName(_[0]),
                    _ = _.fromSerializedString(_[1]);
                  _ && _ && this.bindCommandToShortcut(_, _, !1);
                });
            });
          }
          saveCommandShortcuts() {
            let _ = this.rCommands
              .filter(
                (_) =>
                  !(
                    !_.shortcut ||
                    (_.sCommand in _.k_DefaultShortcuts &&
                      _.k_DefaultShortcuts[_.sCommand].equals(_.shortcut))
                  ),
              )
              .map((_) => _.sCommand + ":" + _.shortcut.toSerializedString())
              .join(";");
            _._.SetSettingsStringValueWithoutSchema(
              _.k_sPropDebugCommandShortcuts,
              _,
            );
          }
          bindCommandToShortcut(_, _, _) {
            let _ = this.getCommandForShortcut(_);
            _ && (_.shortcut = null),
              (_.shortcut = _),
              _ && this.saveCommandShortcuts();
          }
          resetCommandShortcut(_, _) {
            let _ = null;
            _.sCommand in _.k_DefaultShortcuts &&
              (_ = _.k_DefaultShortcuts[_.sCommand]),
              this.bindCommandToShortcut(_, _, _);
          }
        }
        (_.k_sPropDebugCommandShortcuts =
          "/settings/steamvr/debugCommandShortcuts"),
          (_.k_DefaultShortcuts = {
            application_render_model_visibility_toggle: new _(69, !1, !1),
            application_throttling_frame_count_cycle: new _(82, !1, !1),
            application_throttling_toggle: new _(82, !0, !1),
            async_mode_running_start_toggle: new _(85, !1, !1),
            async_mode_toggle: new _(65, !0, !1),
            black_clamp_toggle: new _(75, !1, !1),
            camera_room_view_toggle: new _(67, !1, !1),
            collision_bounds_center_marker_toggle: new _(73, !1, !1),
            collision_bounds_ground_perimeter_toggle: new _(80, !1, !1),
            collision_bounds_play_space_toggle: new _(79, !1, !1),
            collision_bounds_style_cycle: new _(72, !1, !1),
            debug_counter_increment: new _(32, !1, !1),
            flip_universe_transform_toggle: new _(70, !0, !1),
            gpu_profiler_capture: new _(86, !1, !1),
            grid_mode_cycle: new _(71, !1, !1),
            ipd_offset_decrement: new _(189, !1, !1),
            ipd_offset_increment: new _(187, !1, !1),
            latency_testing_toggle: new _(190, !0, !1),
            motion_vector_debug_mode_toggle: new _(74, !0, !1),
            pixel_line_double_sim_toggle: new _(89, !1, !1),
            reflection_map_reload: new _(88, !1, !1),
            screenshot_all_request: new _(83, !0, !1),
            screenshot_request: new _(83, !1, !1),
            seated_position_reset: new _(90, !1, !1),
            shaders_force_reload: new _(220, !1, !1),
            simulate_3dof_toggle: new _(84, !1, !1),
            single_frame_stepping_request: new _(190, !1, !1),
            user_brightness_decrement: new _(186, !1, !1),
            user_brightness_increment: new _(222, !1, !1),
            vsync_to_photons_big_decrement: new _(219, !0, !1),
            vsync_to_photons_big_increment: new _(221, !0, !1),
            vsync_to_photons_decrement: new _(219, !1, !1),
            vsync_to_photons_increment: new _(221, !1, !1),
          }),
          (0, _._)([_._], _.prototype, "dumpShortcuts", null),
          (0, _._)([_._], _.prototype, "resetCommandShortcut", null);
        let _ = class extends _.Component {
          constructor(_) {
            super(_),
              (this.previousOnKeyDown = null),
              (this.refSearchInput = null),
              (this.state = {
                commands: new _([]),
                editingCommand: null,
                sSearch: sessionStorage.getItem("search") || "",
                bFocused: document.hasFocus(),
              }),
              (this.refSearchInput = _.createRef()),
              _._.Init(!1),
              (this.mailbox = new _._()),
              this.mailbox.Init("debugcommands").then(() =>
                (0, _._)(this, void 0, void 0, function* () {
                  console.log("[debugcommands] Requesting commands..");
                  let _ = {
                      type: "get_debug_commands",
                    },
                    _ = yield this.mailbox.SendMessageAndWaitForResponse(
                      _._,
                      _,
                      "get_debug_commands_response",
                    ),
                    _ = yield this.mailbox.SendMessageAndWaitForResponse(
                      _._,
                      _,
                      "get_debug_commands_response",
                    ),
                    _ = _.commands.concat(_.commands);
                  try {
                    if (
                      yield _._.GetSettingsValue("/settings/steamvr/usePrism")
                    ) {
                      let _ = yield this.mailbox.SendMessageAndWaitForResponse(
                        "prism_mailbox",
                        _,
                        "get_debug_commands_response",
                      );
                      _ = _.concat(_.commands);
                    }
                  } catch (_) {}
                  let _ = new _(_.map((_) => new _(_.command, _.mailbox)));
                  yield _.initializeKeyboardShortcuts(),
                    this.setState({
                      commands: _,
                    });
                }),
              );
          }
          componentDidMount() {
            (this.previousOnKeyDown = window.onkeypress),
              (window.onkeydown = this.onKeyDown),
              window.addEventListener("focus", this.onWindowFocus),
              window.addEventListener("blur", this.onWindowBlur);
          }
          componentWillUnmount() {
            (window.onkeydown = this.previousOnKeyDown),
              window.removeEventListener("focus", this.onWindowFocus),
              window.removeEventListener("blur", this.onWindowBlur);
          }
          onWindowFocus() {
            setTimeout(
              () =>
                this.setState({
                  bFocused: !0,
                }),
              0,
            );
          }
          onWindowBlur() {
            setTimeout(
              () =>
                this.setState({
                  bFocused: !1,
                }),
              0,
            ),
              this.endEdit();
          }
          startEdit(_) {
            this.setState({
              editingCommand: _,
            });
          }
          endEdit() {
            this.setState({
              editingCommand: null,
            });
          }
          sendDebugCommand(_) {
            console.log("Sending debug command: " + _.sCommand),
              _.refButton.current &&
                (_.refButton.current.classList.add("Active"),
                setTimeout(() => {
                  _.refButton.current.classList.remove("Active");
                }, 150));
            let _ = {
              type: _.sCommand,
            };
            this.mailbox.SendMessage(_.sMailbox, _);
          }
          onKeyDown(_) {
            if (
              this.refSearchInput.current &&
              this.refSearchInput.current === document.activeElement
            )
              return void (
                "Escape" === _.key && this.refSearchInput.current.blur()
              );
            if ("Escape" === _.key && this.isEditing)
              return void this.endEdit();
            let _ = new _(_.keyCode, _.shiftKey, _.ctrlKey);
            if (_.isValid) {
              if (this.isEditing)
                this.state.commands.bindCommandToShortcut(
                  this.state.editingCommand,
                  _,
                  !0,
                ),
                  this.endEdit();
              else {
                let _ = this.state.commands.getCommandForShortcut(_);
                _ && this.sendDebugCommand(_);
              }
              switch (_.keyCode) {
                case 37:
                case 38:
                case 39:
                case 40:
                case 32:
                  _.preventDefault();
              }
            }
          }
          get isEditing() {
            return null !== this.state.editingCommand;
          }
          setSearch(_) {
            sessionStorage.setItem("search", _),
              this.setState({
                sSearch: _,
              });
          }
          onSearchChanged() {
            this.refSearchInput.current &&
              this.setSearch(this.refSearchInput.current.value);
          }
          clearSearch() {
            this.refSearchInput.current &&
              ((this.refSearchInput.current.value = ""),
              setTimeout(() => this.refSearchInput.current.focus(), 0)),
              this.setSearch("");
          }
          onResetShortcuts() {
            this.state.commands.resetCommandShortcuts(!0);
          }
          render() {
            let _ = ["DebugCommandsList"];
            return (
              this.isEditing && _.push("Editing"),
              _.createElement(
                "div",
                {
                  className: "DebugCommands",
                },
                _.createElement(
                  "div",
                  {
                    className: "Header",
                  },
                  _.createElement(
                    "div",
                    {
                      className: "InnerContainer",
                    },
                    _.createElement("input", {
                      type: "text",
                      placeholder: "Search debug commands",
                      ref: this.refSearchInput,
                      onChange: this.onSearchChanged,
                      value: this.state.sSearch || "",
                    }),
                    this.state.sSearch &&
                      _.createElement(
                        "div",
                        {
                          className: "ClearSearchButton",
                          onClick: this.clearSearch,
                        },
                        "×",
                      ),
                    _.createElement(
                      "div",
                      {
                        className: "ButtonControl",
                        onClick: this.onResetShortcuts,
                      },
                      _.createElement("span", null, "Reset Shortcuts"),
                    ),
                  ),
                ),
                _.createElement(
                  "div",
                  {
                    className: _.join(" "),
                  },
                  this.state.commands.rCommands
                    .filter(
                      (_) =>
                        !this.state.sSearch ||
                        _.sCommand
                          .toLowerCase()
                          .indexOf(this.state.sSearch.toLocaleLowerCase()) >= 0,
                    )
                    .map((_) => {
                      let _ = ["ButtonControl", "DebugCommandButton"],
                        _ = this.state.editingCommand === _;
                      _ && _.push("Editing");
                      let _ = !!_.shortcut;
                      _.push(_ ? "Bound" : "Unbound");
                      let _ = _.createElement("span", null, "unbound");
                      return (
                        _
                          ? (_ = _.createElement(
                              "span",
                              null,
                              "type shortcut...",
                            ))
                          : _.shortcut && (_ = _.shortcut.render()),
                        _.createElement(
                          "div",
                          {
                            key: _.sCommand,
                            ref: _.refButton,
                            onClick: () => this.sendDebugCommand(_),
                            className: _.join(" "),
                          },
                          _.createElement(
                            "div",
                            {
                              className: "CommandName",
                            },
                            _.sCommand,
                          ),
                          _.createElement(
                            "div",
                            {
                              className: "KeyboardShortcut",
                              onClick: (_) => {
                                _.stopPropagation(), this.startEdit(_);
                              },
                            },
                            _,
                          ),
                        )
                      );
                    }),
                ),
                this.isEditing &&
                  _.createElement("div", {
                    className: "EditingFade",
                    onClick: this.endEdit,
                  }),
                !this.state.bFocused &&
                  _.createElement(
                    "div",
                    {
                      className: "Footer",
                    },
                    _.createElement(
                      "h1",
                      null,
                      "Click to enable keyboard shortcuts",
                    ),
                  ),
              )
            );
          }
        };
        (0, _._)([_._], _.prototype, "onWindowFocus", null),
          (0, _._)([_._], _.prototype, "onWindowBlur", null),
          (0, _._)([_._], _.prototype, "endEdit", null),
          (0, _._)([_._], _.prototype, "onKeyDown", null),
          (0, _._)([_.computed], _.prototype, "isEditing", null),
          (0, _._)([_._], _.prototype, "onSearchChanged", null),
          (0, _._)([_._], _.prototype, "clearSearch", null),
          (0, _._)([_._], _.prototype, "onResetShortcuts", null),
          (_ = (0, _._)([_._], _)),
          _._(document.getElementById("root")).render(_.createElement(_, null)),
          (window.document.title = "Debug Commands");
      },
    },
    _ = {};
  function _(_) {
    var _ = _[_];
    if (void 0 !== _) return _.exports;
    var _ = (_[_] = {
      exports: {},
    });
    return _[_](_, _.exports, _), _.exports;
  }
  (_._ = _),
    (_ = []),
    (_._ = (_, _, _, _) => {
      if (!_) {
        var _ = 1 / 0;
        for (_ = 0; _ < _.length; _++) {
          for (var [_, _, _] = _[_], _ = !0, _ = 0; _ < _.length; _++)
            (!1 & _ || _ >= _) && Object.keys(_._).every((_) => _._[_](_[_]))
              ? __webpack_require__.splice(_--, 1)
              : ((_ = !1), _ < _ && (_ = _));
          if (_) {
            _.splice(_--, 1);
            var _ = _();
            void 0 !== _ && (_ = _);
          }
        }
        return _;
      }
      _ = _ || 0;
      for (var _ = _.length; _ > 0 && _[_ - 1][2] > _; _--) _[_] = _[_ - 1];
      _[_] = [_, _, _];
    }),
    (_._ = (_) => {
      var _ = _ && _.__esModule ? () => _.default : () => _;
      return (
        _._(_, {
          _: _,
        }),
        _
      );
    }),
    (_._ = (_, _) => {
      for (var _ in _)
        _._(_, _) &&
          !_._(_, _) &&
          Object.defineProperty(_, _, {
            enumerable: !0,
            get: _[_],
          });
    }),
    (_._ = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (_) {
        if ("object" == typeof window) return window;
      }
    })()),
    (_._ = (_, _) => Object.prototype.hasOwnProperty.call(_, _)),
    (() => {
      var _ = {
        866: 0,
      };
      _._._ = (_) => 0 === _[_];
      var _ = (_, _) => {
          var _,
            _,
            [_, _, _] = _,
            _ = 0;
          if (_.some((_) => 0 !== _[_])) {
            for (_ in _) _._(_, _) && (_._[_] = _[_]);
            if (_) var _ = _(_);
          }
          for (_ && _(_); _ < _.length; _++)
            (_ = _[_]), _._(_, _) && _[_] && _[_][0](), (_[_] = 0);
          return _._(_);
        },
        _ = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      __webpack_require__.forEach(_.bind(null, 0)),
        (_.push = _.bind(null, _.push.bind(_)));
    })();
  var _ = _._(void 0, [967, 978, 655, 305, 797, 148, 198, 384], () => _(9513));
  _ = _._(_);
})();
