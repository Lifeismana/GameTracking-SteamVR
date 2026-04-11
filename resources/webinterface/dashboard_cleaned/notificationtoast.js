var CLSTAMP = "steamdb";
(() => {
  "use strict";
  var _,
    _ = {
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(_, {
          _: () => _,
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
        const _ = VRHTML;
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(_, {
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = "systemui_dashboard_private",
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
          _ = __webpack_require__._(_);
        class _ {
          constructor() {
            (this.m_mapTokens = new Map()),
              (this.m_mapFallbackTokens = new Map());
          }
          InitFromObjects(_, _, _, _) {
            this.m_mapTokens.clear();
            let _ = [_, _, _, _];
            for (let _ in _) {
              let _ = _[_];
              for (let _ in _) {
                let _ = _[_];
                for (let _ in _) {
                  let _ = _.toLowerCase();
                  this.m_mapTokens.has(_) || this.m_mapTokens.set(_, _[_]);
                }
              }
            }
          }
          LocalizeString(_) {
            if (!_ || 0 == _.length || "#" != _.charAt(0)) return "";
            let _ = this.m_mapTokens.get(_.substring(1).toLowerCase());
            return void 0 === _ ? "" : _;
          }
          LocalizeStringFromFallback(_) {
            if (!_ || 0 == _.length || "#" != _.charAt(0)) return "";
            let _ = this.m_mapFallbackTokens.get(_.substring(1).toLowerCase());
            return void 0 === _ ? "" : _;
          }
          static GetLocale() {
            const _ = navigator.languages[0];
            try {
              const _ =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.GetSystemLocale();
              if (!_) return _;
              _.s_Date.toLocaleTimeString(_);
              return _;
            } catch (_) {
              return _;
            }
          }
        }
        _.s_Date = new Date();
        const _ = new _();
        window.LocalizationManager = _;
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        (0, _.configure)({
          enforceActions: "never",
        });
        class _ extends _.Component {
          constructor(_) {
            super(_),
              (this.m_toastMailbox = new _._()),
              (this.state = {
                visible: !1,
                title: "",
                header: "",
                text: "",
              }),
              this.m_toastMailbox.Init("toast_renderer/main"),
              this.m_toastMailbox.RegisterHandler(
                "render_toast",
                this.OnRenderToast,
              ),
              _._.Init(!1);
          }
          OnRenderToast(_) {
            var _;
            let _ =
              null ===
                (_ =
                  null === _._ || void 0 === _._
                    ? void 0
                    : _._.VROverlayInternal) || void 0 === _
                ? void 0
                : _.GetToastInfo(_.notification_id);
            _
              ? this.setState({
                  visible: !0,
                  title: _.sTitle,
                  header: _.sHeader || "",
                  text: _.sText,
                  image: _.sImageData,
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
              ? _.createElement(
                  "div",
                  {
                    className: "VRNotificationRoot",
                  },
                  _.createElement(
                    "div",
                    {
                      className: "VRNotificationApplicationName",
                    },
                    this.state.title,
                  ),
                  _.createElement(
                    "div",
                    {
                      className: "VRNotificationFrame",
                    },
                    _.createElement("div", {
                      className: "VRToastImage",
                      style: {
                        backgroundImage: this.state.image
                          ? "url('" + this.state.image + "')"
                          : "url('/dashboard/images/icons/notification_steamcog.png')",
                      },
                    }),
                    _.createElement(
                      "div",
                      {
                        className: "VRNotificationTextWrapper",
                      },
                      _.createElement(
                        "div",
                        {
                          className: "VRNotificationHeader",
                        },
                        this.state.header,
                      ),
                      _.createElement(
                        "div",
                        {
                          className: "VRNotificationText",
                        },
                        this.state.text,
                      ),
                    ),
                  ),
                )
              : null;
          }
        }
        (0, _._)([_._], _.prototype, "OnRenderToast", null),
          (function (_, _) {
            _ ||
              (_ = (function () {
                let _ = new Map([
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
                for (let _ of navigator.languages) {
                  let _ = _.split("-");
                  if (_.has(_)) return _.get(_);
                  if (_.has(_[0])) return _.get(_[0]);
                }
                return "english";
              })());
            let _ = [],
              _ = (_, _, _) => {
                let _,
                  _ = Date.now().toString();
                return (
                  (_ =
                    "drivers" == _
                      ? `/input/localization.json?t=${_}`
                      : "webhelper" == _
                        ? `/dashboard/localization/${_}_${_}.json?t=${_}`
                        : `localization/${_}_${_}.json?t=${_}`),
                  _()
                    .get(_)
                    .then((_) => {
                      __webpack_require__(_.data);
                    })
                    .catch(() => {})
                );
              },
              _ = [],
              _ = [],
              _ = [],
              _ = [];
            for (let _ of _)
              __webpack_require__.push(
                _(_, _, (_) => {
                  _.push(_);
                }),
              ),
                "english" != _ &&
                  __webpack_require__.push(
                    _(_, "english", (_) => {
                      _.push(_);
                    }),
                  );
            for (let _ of ["webhelper"])
              __webpack_require__.push(
                _(_, _, (_) => {
                  _.push(_);
                }),
              ),
                "english" != _ &&
                  __webpack_require__.push(
                    _(_, "english", (_) => {
                      _.push(_);
                    }),
                  );
            return (
              __webpack_require__.push(
                _("drivers", "", (_) => {
                  _.push(_);
                }),
              ),
              Promise.all(_).then(() => {
                _.InitFromObjects(_, _, _, _);
              })
            );
          })(
            [],
            null === _._ || void 0 === _._ ? void 0 : _._.GetSteamLanguage(),
          )
            .then(() => {
              (0, _._)().Init("SteamVR", CLSTAMP, (0, _._)()),
                _._(document.getElementById("root")).render(
                  _.createElement(_, null),
                );
            })
            .catch((_) =>
              console.error("Failed to initialize notification toast:", _),
            );
      },
    },
    _ = {};
  function _(_) {
    var _ = _[_];
    if (void 0 !== _) return _.exports;
    var _ = (_[_] = {
      exports: {},
    });
    return _[_].call(_.exports, _, _.exports, _), _.exports;
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
        915: 0,
        527: 0,
        500: 0,
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
  var _ = _._(
    void 0,
    [967, 352, 211, 154, 305, 527, 797, 148, 500, 554, 198, 384],
    () => _(4358),
  );
  _ = _._(_);
})();
