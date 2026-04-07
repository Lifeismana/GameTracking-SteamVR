var CLSTAMP = "10579910";
(() => {
  "use strict";
  var e,
    t = {
      5287: (e, t) => {
        var r = Symbol.for("react.element"),
          n = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          s = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          a = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          c = Symbol.for("react.forward_ref"),
          l = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          m = Symbol.for("react.lazy"),
          h = Symbol.iterator;
        var p = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          f = Object.assign,
          _ = {};
        function g(e, t, r) {
          (this.props = e),
            (this.context = t),
            (this.refs = _),
            (this.updater = r || p);
        }
        function b() {}
        function S(e, t, r) {
          (this.props = e),
            (this.context = t),
            (this.refs = _),
            (this.updater = r || p);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (b.prototype = g.prototype);
        var y = (S.prototype = new b());
        (y.constructor = S), f(y, g.prototype), (y.isPureReactComponent = !0);
        var v = Array.isArray,
          C = Object.prototype.hasOwnProperty,
          w = { current: null },
          k = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, n) {
          var o,
            s = {},
            i = null,
            a = null;
          if (null != t)
            for (o in (void 0 !== t.ref && (a = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              C.call(t, o) && !k.hasOwnProperty(o) && (s[o] = t[o]);
          var u = arguments.length - 2;
          if (1 === u) s.children = n;
          else if (1 < u) {
            for (var c = Array(u), l = 0; l < u; l++) c[l] = arguments[l + 2];
            s.children = c;
          }
          if (e && e.defaultProps)
            for (o in (u = e.defaultProps)) void 0 === s[o] && (s[o] = u[o]);
          return {
            $$typeof: r,
            type: e,
            key: i,
            ref: a,
            props: s,
            _owner: w.current,
          };
        }
        function W(e) {
          return "object" == typeof e && null !== e && e.$$typeof === r;
        }
        var O = /\/+/g;
        function N(e, t) {
          return "object" == typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function R(e, t, o, s, i) {
          var a = typeof e;
          ("undefined" !== a && "boolean" !== a) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (a) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case r:
                  case n:
                    u = !0;
                }
            }
          if (u)
            return (
              (i = i((u = e))),
              (e = "" === s ? "." + N(u, 0) : s),
              v(i)
                ? ((o = ""),
                  null != e && (o = e.replace(O, "$&/") + "/"),
                  R(i, t, o, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (W(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: r,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      o +
                        (!i.key || (u && u.key === i.key)
                          ? ""
                          : ("" + i.key).replace(O, "$&/") + "/") +
                        e,
                    )),
                  t.push(i)),
              1
            );
          if (((u = 0), (s = "" === s ? "." : s + ":"), v(e)))
            for (var c = 0; c < e.length; c++) {
              var l = s + N((a = e[c]), c);
              u += R(a, t, o, l, i);
            }
          else if (
            ((l = (function (e) {
              return null === e || "object" != typeof e
                ? null
                : "function" == typeof (e = (h && e[h]) || e["@@iterator"])
                  ? e
                  : null;
            })(e)),
            "function" == typeof l)
          )
            for (e = l.call(e), c = 0; !(a = e.next()).done; )
              u += R((a = a.value), t, o, (l = s + N(a, c++)), i);
          else if ("object" === a)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead.",
              ))
            );
          return u;
        }
        function x(e, t, r) {
          if (null == e) return e;
          var n = [],
            o = 0;
          return (
            R(e, n, "", "", function (e) {
              return t.call(r, e, o++);
            }),
            n
          );
        }
        function M(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              },
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var F = { current: null },
          I = { transition: null },
          L = {
            ReactCurrentDispatcher: F,
            ReactCurrentBatchConfig: I,
            ReactCurrentOwner: w,
          };
        function D() {
          throw Error(
            "act(...) is not supported in production builds of React.",
          );
        }
        (t.Children = {
          map: x,
          forEach: function (e, t, r) {
            x(
              e,
              function () {
                t.apply(this, arguments);
              },
              r,
            );
          },
          count: function (e) {
            var t = 0;
            return (
              x(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              x(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!W(e))
              throw Error(
                "React.Children.only expected to receive a single React element child.",
              );
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = o),
          (t.Profiler = i),
          (t.PureComponent = S),
          (t.StrictMode = s),
          (t.Suspense = l),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L),
          (t.act = D),
          (t.cloneElement = function (e, t, n) {
            if (null == e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  ".",
              );
            var o = f({}, e.props),
              s = e.key,
              i = e.ref,
              a = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (a = w.current)),
                void 0 !== t.key && (s = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (c in t)
                C.call(t, c) &&
                  !k.hasOwnProperty(c) &&
                  (o[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) o.children = n;
            else if (1 < c) {
              u = Array(c);
              for (var l = 0; l < c; l++) u[l] = arguments[l + 2];
              o.children = u;
            }
            return {
              $$typeof: r,
              type: e.type,
              key: s,
              ref: i,
              props: o,
              _owner: a,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: a, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: c, render: e };
          }),
          (t.isValidElement = W),
          (t.lazy = function (e) {
            return {
              $$typeof: m,
              _payload: { _status: -1, _result: e },
              _init: M,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = I.transition;
            I.transition = {};
            try {
              e();
            } finally {
              I.transition = t;
            }
          }),
          (t.unstable_act = D),
          (t.useCallback = function (e, t) {
            return F.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return F.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return F.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return F.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return F.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, r) {
            return F.current.useImperativeHandle(e, t, r);
          }),
          (t.useInsertionEffect = function (e, t) {
            return F.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return F.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return F.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, r) {
            return F.current.useReducer(e, t, r);
          }),
          (t.useRef = function (e) {
            return F.current.useRef(e);
          }),
          (t.useState = function (e) {
            return F.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, r) {
            return F.current.useSyncExternalStore(e, t, r);
          }),
          (t.useTransition = function () {
            return F.current.useTransition();
          }),
          (t.version = "18.3.1");
      },
      6090: (e, t, r) => {
        r.d(t, {
          GM: () => s.GM,
          I0: () => n.I0,
          M9: () => n.M9,
          OH: () => a.OH,
          R$: () => a.R$,
          Wq: () => n.Wq,
          Zk: () => i.Zk,
          _n: () => n._n,
          dL: () => o.d,
          pg: () => n.pg,
        });
        var n = r(2824),
          o = (r(3389), r(4120), r(1230), r(5830), r(6186), r(3361)),
          s = (r(111), r(5723), r(3496)),
          i =
            (r(5178),
            r(428),
            r(9011),
            r(7350),
            r(6847),
            r(5227),
            r(10),
            r(1808),
            r(7019)),
          a =
            (r(1988),
            r(2527),
            r(9864),
            r(4189),
            r(322),
            r(1977),
            r(6417),
            r(2303),
            r(8715),
            r(4397),
            r(5459),
            r(8472),
            r(1184),
            r(3725));
        r(4367);
      },
      2824: (e, t, r) => {
        r.d(t, {
          I0: () => d,
          M9: () => l,
          Wq: () => c,
          _n: () => m,
          pg: () => u,
        });
        var n = r(1635),
          o = r(7813),
          s = r(3236),
          i = r(1295),
          a = r(776);
        const u = "vrcompositor_systemlayer",
          c = "vrcompositor_mailbox",
          l = "systemui_dashboard_private",
          d = "binding_callouts/main";
        class m {
          constructor() {
            (this.m_wsWebSocketToServer = void 0),
              (this.connected = !1),
              (this.m_oHandlers = {}),
              (this.m_oWaits = {}),
              (this.m_oConnectWaits = []),
              (this.m_fnConnectResolve = void 0),
              (this.m_nNextMessageNumber = 1),
              (this.Log = new a.wd("Mailbox", () => this.m_sMailboxName)),
              (0, o.makeObservable)(this);
          }
          OpenWebSocketToHost() {
            return new Promise((e, t) => {
              this.Log.Info("Connecting vrmailbox...");
              let r = "ws://127.0.0.1:27062";
              this.m_sWebSecret && (r += "?secret=" + this.m_sWebSecret),
                (this.m_fnConnectResolve = e),
                (this.m_wsWebSocketToServer = new WebSocket(r)),
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
                ),
                this.m_wsWebSocketToServer.addEventListener(
                  "error",
                  this.OnWebSocketError,
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
                (this.m_sMailboxName = m.EnsureUniqueName(e)),
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
            return (0, n.sH)(this, void 0, void 0, function* () {
              this.Log.Warning("Lost connection to host..."),
                (this.connected = !1),
                yield (0, i.IP)(1e3),
                this.OpenWebSocketToHost();
            });
          }
          OnWebSocketError(e) {
            return (0, n.sH)(this, void 0, void 0, function* () {
              this.Log.Error("Mailbox error:", e),
                (this.connected = !1),
                yield (0, i.IP)(1e3),
                this.OpenWebSocketToHost();
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
              r = !1;
            if (
              (this.m_oHandlers.hasOwnProperty(t.type) &&
                (this.m_oHandlers[t.type](t), (r = !0)),
              this.m_oWaits.hasOwnProperty(t.type))
            ) {
              let e = !1;
              for (let r of this.m_oWaits[t.type])
                r.nMessageId == t.message_id && (r.callback(t), (e = !0));
              e
                ? (this.m_oWaits[t.type] = this.m_oWaits[t.type].filter(
                    (e) => e.nMessageId == t.message_id,
                  ))
                : this.Log.Error(
                    `Received a ${t.type} message, but didn't have a matching message_id. Did the other end forget to mirror message_id?`,
                  ),
                (r = !0);
            }
            r || this.Log.Error("Received unhandled message: ", t.type, t);
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
            return new Promise((r, n) => {
              this.m_oWaits[e] || (this.m_oWaits[e] = []),
                this.m_oWaits[e].push({ callback: r, nMessageId: t });
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
          SendMessageAndWaitForResponse(e, t, r) {
            let n = Object.assign({}, t);
            return (
              null == n.returnAddress &&
                (n.returnAddress = this.m_sMailboxName),
              (n.message_id = this.m_nNextMessageNumber++),
              this.SendMessage(e, n),
              this.WaitForMessage(r, n.message_id)
            );
          }
          SendResponse(e, t) {
            if (!e.returnAddress)
              throw new Error("Missing return address on message");
            let r = Object.assign(Object.assign({}, t), {
              message_id: e.message_id,
            });
            (r.message_id = e.message_id), this.SendMessage(e.returnAddress, r);
          }
        }
        (m.s_nNextMailboxNumber = 1),
          (0, n.Cg)([o.observable], m.prototype, "connected", void 0),
          (0, n.Cg)([s.o], m.prototype, "OpenWebSocketToHost", null),
          (0, n.Cg)([s.o], m.prototype, "OnWebSocketOpen", null),
          (0, n.Cg)([s.o], m.prototype, "OnWebSocketClose", null),
          (0, n.Cg)([s.o], m.prototype, "OnWebSocketError", null),
          (0, n.Cg)([s.o], m.prototype, "WebSocketSend", null),
          (0, n.Cg)([s.o], m.prototype, "OnWebSocketMessage", null);
      },
      9513: (e, t, r) => {
        var n = r(1635),
          o = r(6540),
          s = r(5338),
          i = r(3236),
          a = r(6090),
          u = r(7813),
          c = r(1370),
          l = r(1333);
        class d {
          constructor(e, t, r) {
            (this.keyCode = e), (this.shift = t), (this.control = r);
          }
          equals(e) {
            return (
              e &&
              this.keyCode === e.keyCode &&
              this.shift === e.shift &&
              this.control === e.control
            );
          }
          get isValid() {
            return (
              ((e = this.keyCode) > 47 && e < 58) ||
              32 == e ||
              13 == e ||
              (e > 64 && e < 91) ||
              (e > 95 && e < 112) ||
              (e > 185 && e < 193) ||
              (e > 218 && e < 223) ||
              (function (e) {
                return e >= 37 && e <= 40;
              })(this.keyCode)
            );
            var e;
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
          static fromSerializedString(e) {
            let t = e.split(",");
            if (3 !== t.length) return null;
            let r = Number.parseInt(t[0]),
              n = Number.parseInt(t[1]),
              o = Number.parseInt(t[2]);
            return new d(r, n > 0, o > 0);
          }
          toSerializedString() {
            return [
              this.keyCode,
              this.shift ? 1 : 0,
              this.control ? 1 : 0,
            ].join(",");
          }
          toString() {
            let e = this.character;
            return (
              this.shift && (e = "shift + " + e),
              this.control && (e = "ctrl + " + e),
              e
            );
          }
          render() {
            return o.createElement(
              "span",
              null,
              this.control && "control",
              this.control &&
                o.createElement("span", { className: "Plus" }, " + "),
              this.shift && "shift",
              this.shift &&
                o.createElement("span", { className: "Plus" }, " + "),
              this.character,
            );
          }
        }
        class m {
          constructor(e, t) {
            (this.shortcut = void 0),
              (this.sCommand = e),
              (this.sMailbox = t),
              (this.refButton = o.createRef()),
              (0, u.makeObservable)(this);
          }
        }
        (0, n.Cg)([u.observable], m.prototype, "shortcut", void 0);
        class h {
          dumpShortcuts() {
            let e = ["Defaults:"];
            this.rCommands.forEach((t) => {
              t.shortcut &&
                e.push(
                  '"' +
                    t.sCommand +
                    '": new KeyboardShortcut( ' +
                    t.shortcut.keyCode +
                    ", " +
                    (t.shortcut.shift ? "true" : "false") +
                    ", " +
                    (t.shortcut.control ? "true" : "false") +
                    " ), // " +
                    t.shortcut.toString().toLowerCase(),
                );
            }),
              console.log(e.join("\n"));
          }
          constructor(e) {
            (this.rCommands = []),
              (this.rCommands = e),
              (window.dumpShortcuts = this.dumpShortcuts);
          }
          initializeKeyboardShortcuts() {
            return (0, n.sH)(this, void 0, void 0, function* () {
              this.resetCommandShortcuts(!1), yield this.loadCommandShortcuts();
            });
          }
          getCommandForShortcut(e) {
            if (!e) return null;
            let t = this.rCommands.filter((t) => e.equals(t.shortcut));
            return t.length > 0 ? t[0] : null;
          }
          resetCommandShortcuts(e) {
            this.rCommands.forEach((e) => this.resetCommandShortcut(e, !1)),
              e && this.saveCommandShortcuts();
          }
          getCommandForName(e) {
            let t = this.rCommands.filter((t) => t.sCommand === e);
            return t.length > 0 ? t[0] : null;
          }
          loadCommandShortcuts() {
            return (0, n.sH)(this, void 0, void 0, function* () {
              let e;
              try {
                e = yield l.HR.GetSettingsValue(h.k_sPropDebugCommandShortcuts);
              } catch (e) {
                return;
              }
              e &&
                e.split(";").forEach((e) => {
                  let t = e.split(":");
                  if (2 !== t.length) return;
                  let r = this.getCommandForName(t[0]),
                    n = d.fromSerializedString(t[1]);
                  r && n && this.bindCommandToShortcut(r, n, !1);
                });
            });
          }
          saveCommandShortcuts() {
            let e = this.rCommands
              .filter(
                (e) =>
                  !(
                    !e.shortcut ||
                    (e.sCommand in h.k_DefaultShortcuts &&
                      h.k_DefaultShortcuts[e.sCommand].equals(e.shortcut))
                  ),
              )
              .map((e) => e.sCommand + ":" + e.shortcut.toSerializedString())
              .join(";");
            l.HR.SetSettingsStringValueWithoutSchema(
              h.k_sPropDebugCommandShortcuts,
              e,
            );
          }
          bindCommandToShortcut(e, t, r) {
            let n = this.getCommandForShortcut(t);
            n && (n.shortcut = null),
              (e.shortcut = t),
              r && this.saveCommandShortcuts();
          }
          resetCommandShortcut(e, t) {
            let r = null;
            e.sCommand in h.k_DefaultShortcuts &&
              (r = h.k_DefaultShortcuts[e.sCommand]),
              this.bindCommandToShortcut(e, r, t);
          }
        }
        (h.k_sPropDebugCommandShortcuts =
          "/settings/steamvr/debugCommandShortcuts"),
          (h.k_DefaultShortcuts = {
            application_render_model_visibility_toggle: new d(69, !1, !1),
            application_throttling_frame_count_cycle: new d(82, !1, !1),
            application_throttling_toggle: new d(82, !0, !1),
            async_mode_running_start_toggle: new d(85, !1, !1),
            async_mode_toggle: new d(65, !0, !1),
            black_clamp_toggle: new d(75, !1, !1),
            camera_room_view_toggle: new d(67, !1, !1),
            collision_bounds_center_marker_toggle: new d(73, !1, !1),
            collision_bounds_ground_perimeter_toggle: new d(80, !1, !1),
            collision_bounds_play_space_toggle: new d(79, !1, !1),
            collision_bounds_style_cycle: new d(72, !1, !1),
            debug_counter_increment: new d(32, !1, !1),
            flip_universe_transform_toggle: new d(70, !0, !1),
            gpu_profiler_capture: new d(86, !1, !1),
            grid_mode_cycle: new d(71, !1, !1),
            ipd_offset_decrement: new d(189, !1, !1),
            ipd_offset_increment: new d(187, !1, !1),
            latency_testing_toggle: new d(190, !0, !1),
            motion_vector_debug_mode_toggle: new d(74, !0, !1),
            pixel_line_double_sim_toggle: new d(89, !1, !1),
            reflection_map_reload: new d(88, !1, !1),
            screenshot_all_request: new d(83, !0, !1),
            screenshot_request: new d(83, !1, !1),
            seated_position_reset: new d(90, !1, !1),
            shaders_force_reload: new d(220, !1, !1),
            simulate_3dof_toggle: new d(84, !1, !1),
            single_frame_stepping_request: new d(190, !1, !1),
            user_brightness_decrement: new d(186, !1, !1),
            user_brightness_increment: new d(222, !1, !1),
            vsync_to_photons_big_decrement: new d(219, !0, !1),
            vsync_to_photons_big_increment: new d(221, !0, !1),
            vsync_to_photons_decrement: new d(219, !1, !1),
            vsync_to_photons_increment: new d(221, !1, !1),
          }),
          (0, n.Cg)([i.o], h.prototype, "dumpShortcuts", null),
          (0, n.Cg)([i.o], h.prototype, "resetCommandShortcut", null);
        let p = class extends o.Component {
          constructor(e) {
            super(e),
              (this.previousOnKeyDown = null),
              (this.refSearchInput = null),
              (this.state = {
                commands: new h([]),
                editingCommand: null,
                sSearch: sessionStorage.getItem("search") || "",
                bFocused: document.hasFocus(),
              }),
              (this.refSearchInput = o.createRef()),
              l.HR.Init(!1),
              (this.mailbox = new a._n()),
              this.mailbox.Init("debugcommands").then(() =>
                (0, n.sH)(this, void 0, void 0, function* () {
                  console.log("[debugcommands] Requesting commands..");
                  let e = { type: "get_debug_commands" },
                    t = yield this.mailbox.SendMessageAndWaitForResponse(
                      a.Wq,
                      e,
                      "get_debug_commands_response",
                    ),
                    r = yield this.mailbox.SendMessageAndWaitForResponse(
                      a.pg,
                      e,
                      "get_debug_commands_response",
                    ),
                    n = t.commands.concat(r.commands);
                  try {
                    if (
                      yield l.HR.GetSettingsValue("/settings/steamvr/usePrism")
                    ) {
                      let t = yield this.mailbox.SendMessageAndWaitForResponse(
                        "prism_mailbox",
                        e,
                        "get_debug_commands_response",
                      );
                      n = n.concat(t.commands);
                    }
                  } catch (e) {}
                  let o = new h(n.map((e) => new m(e.command, e.mailbox)));
                  yield o.initializeKeyboardShortcuts(),
                    this.setState({ commands: o });
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
            setTimeout(() => this.setState({ bFocused: !0 }), 0);
          }
          onWindowBlur() {
            setTimeout(() => this.setState({ bFocused: !1 }), 0),
              this.endEdit();
          }
          startEdit(e) {
            this.setState({ editingCommand: e });
          }
          endEdit() {
            this.setState({ editingCommand: null });
          }
          sendDebugCommand(e) {
            console.log("Sending debug command: " + e.sCommand),
              e.refButton.current &&
                (e.refButton.current.classList.add("Active"),
                setTimeout(() => {
                  e.refButton.current.classList.remove("Active");
                }, 150));
            let t = { type: e.sCommand };
            this.mailbox.SendMessage(e.sMailbox, t);
          }
          onKeyDown(e) {
            if (
              this.refSearchInput.current &&
              this.refSearchInput.current === document.activeElement
            )
              return void (
                "Escape" === e.key && this.refSearchInput.current.blur()
              );
            if ("Escape" === e.key && this.isEditing)
              return void this.endEdit();
            let t = new d(e.keyCode, e.shiftKey, e.ctrlKey);
            if (t.isValid) {
              if (this.isEditing)
                this.state.commands.bindCommandToShortcut(
                  this.state.editingCommand,
                  t,
                  !0,
                ),
                  this.endEdit();
              else {
                let e = this.state.commands.getCommandForShortcut(t);
                e && this.sendDebugCommand(e);
              }
              switch (e.keyCode) {
                case 37:
                case 38:
                case 39:
                case 40:
                case 32:
                  e.preventDefault();
              }
            }
          }
          get isEditing() {
            return null !== this.state.editingCommand;
          }
          setSearch(e) {
            sessionStorage.setItem("search", e), this.setState({ sSearch: e });
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
            let e = ["DebugCommandsList"];
            return (
              this.isEditing && e.push("Editing"),
              o.createElement(
                "div",
                { className: "DebugCommands" },
                o.createElement(
                  "div",
                  { className: "Header" },
                  o.createElement(
                    "div",
                    { className: "InnerContainer" },
                    o.createElement("input", {
                      type: "text",
                      placeholder: "Search debug commands",
                      ref: this.refSearchInput,
                      onChange: this.onSearchChanged,
                      value: this.state.sSearch || "",
                    }),
                    this.state.sSearch &&
                      o.createElement(
                        "div",
                        {
                          className: "ClearSearchButton",
                          onClick: this.clearSearch,
                        },
                        "×",
                      ),
                    o.createElement(
                      "div",
                      {
                        className: "ButtonControl",
                        onClick: this.onResetShortcuts,
                      },
                      o.createElement("span", null, "Reset Shortcuts"),
                    ),
                  ),
                ),
                o.createElement(
                  "div",
                  { className: e.join(" ") },
                  this.state.commands.rCommands
                    .filter(
                      (e) =>
                        !this.state.sSearch ||
                        e.sCommand
                          .toLowerCase()
                          .indexOf(this.state.sSearch.toLocaleLowerCase()) >= 0,
                    )
                    .map((e) => {
                      let t = ["ButtonControl", "DebugCommandButton"],
                        r = this.state.editingCommand === e;
                      r && t.push("Editing");
                      let n = !!e.shortcut;
                      t.push(n ? "Bound" : "Unbound");
                      let s = o.createElement("span", null, "unbound");
                      return (
                        r
                          ? (s = o.createElement(
                              "span",
                              null,
                              "type shortcut...",
                            ))
                          : e.shortcut && (s = e.shortcut.render()),
                        o.createElement(
                          "div",
                          {
                            key: e.sCommand,
                            ref: e.refButton,
                            onClick: () => this.sendDebugCommand(e),
                            className: t.join(" "),
                          },
                          o.createElement(
                            "div",
                            { className: "CommandName" },
                            e.sCommand,
                          ),
                          o.createElement(
                            "div",
                            {
                              className: "KeyboardShortcut",
                              onClick: (t) => {
                                t.stopPropagation(), this.startEdit(e);
                              },
                            },
                            s,
                          ),
                        )
                      );
                    }),
                ),
                this.isEditing &&
                  o.createElement("div", {
                    className: "EditingFade",
                    onClick: this.endEdit,
                  }),
                !this.state.bFocused &&
                  o.createElement(
                    "div",
                    { className: "Footer" },
                    o.createElement(
                      "h1",
                      null,
                      "Click to enable keyboard shortcuts",
                    ),
                  ),
              )
            );
          }
        };
        (0, n.Cg)([i.o], p.prototype, "onWindowFocus", null),
          (0, n.Cg)([i.o], p.prototype, "onWindowBlur", null),
          (0, n.Cg)([i.o], p.prototype, "endEdit", null),
          (0, n.Cg)([i.o], p.prototype, "onKeyDown", null),
          (0, n.Cg)([u.computed], p.prototype, "isEditing", null),
          (0, n.Cg)([i.o], p.prototype, "onSearchChanged", null),
          (0, n.Cg)([i.o], p.prototype, "clearSearch", null),
          (0, n.Cg)([i.o], p.prototype, "onResetShortcuts", null),
          (p = (0, n.Cg)([c.PA], p)),
          s.H(document.getElementById("root")).render(o.createElement(p, null)),
          (window.document.title = "Debug Commands");
      },
    },
    r = {};
  function n(e) {
    var o = r[e];
    if (void 0 !== o) return o.exports;
    var s = (r[e] = { exports: {} });
    return t[e](s, s.exports, n), s.exports;
  }
  (n.m = t),
    (e = []),
    (n.O = (t, r, o, s) => {
      if (!r) {
        var i = 1 / 0;
        for (l = 0; l < e.length; l++) {
          for (var [r, o, s] = e[l], a = !0, u = 0; u < r.length; u++)
            (!1 & s || i >= s) && Object.keys(n.O).every((e) => n.O[e](r[u]))
              ? r.splice(u--, 1)
              : ((a = !1), s < i && (i = s));
          if (a) {
            e.splice(l--, 1);
            var c = o();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      s = s || 0;
      for (var l = e.length; l > 0 && e[l - 1][2] > s; l--) e[l] = e[l - 1];
      e[l] = [r, o, s];
    }),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = { 866: 0 };
      n.O.j = (t) => 0 === e[t];
      var t = (t, r) => {
          var o,
            s,
            [i, a, u] = r,
            c = 0;
          if (i.some((t) => 0 !== e[t])) {
            for (o in a) n.o(a, o) && (n.m[o] = a[o]);
            if (u) var l = u(n);
          }
          for (t && t(r); c < i.length; c++)
            (s = i[c]), n.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
          return n.O(l);
        },
        r = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var o = n.O(void 0, [967, 978, 655, 305, 797, 148, 198, 384], () => n(9513));
  o = n.O(o);
})(); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/debugcommands.js.map
