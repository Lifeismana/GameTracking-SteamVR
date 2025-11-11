var CLSTAMP = "10223590";
(() => {
  "use strict";
  var e,
    t = {
      6035: (e, t, n) => {
        n.d(t, { P: () => m });
        var r,
          o,
          s = n(6540),
          a = n(3815),
          i = n(4452),
          u = "function" == typeof Symbol && Symbol.for,
          c =
            null !==
              (o =
                null ===
                  (r = Object.getOwnPropertyDescriptor(
                    function () {},
                    "name",
                  )) || void 0 === r
                  ? void 0
                  : r.configurable) &&
            void 0 !== o &&
            o,
          l = u
            ? Symbol.for("react.forward_ref")
            : "function" == typeof s.forwardRef &&
              (0, s.forwardRef)(function (e) {
                return null;
              }).$$typeof,
          d = u
            ? Symbol.for("react.memo")
            : "function" == typeof s.memo &&
              (0, s.memo)(function (e) {
                return null;
              }).$$typeof;
        function m(e, t) {
          var n;
          if (d && e.$$typeof === d)
            throw new Error(
              "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
            );
          if ((0, a.P)()) return e;
          var r =
              null !== (n = null == t ? void 0 : t.forwardRef) &&
              void 0 !== n &&
              n,
            o = e,
            u = e.displayName || e.name;
          if (
            l &&
            e.$$typeof === l &&
            ((r = !0), "function" != typeof (o = e.render))
          )
            throw new Error(
              "[mobx-react-lite] `render` property of ForwardRef was not a function",
            );
          var m,
            f,
            p = function (e, t) {
              return (0, i.q)(function () {
                return o(e, t);
              }, u);
            };
          return (
            (p.displayName = e.displayName),
            c &&
              Object.defineProperty(p, "name", {
                value: e.name,
                writable: !0,
                configurable: !0,
              }),
            e.contextTypes && (p.contextTypes = e.contextTypes),
            r && (p = (0, s.forwardRef)(p)),
            (p = (0, s.memo)(p)),
            (m = e),
            (f = p),
            Object.keys(m).forEach(function (e) {
              h[e] ||
                Object.defineProperty(
                  f,
                  e,
                  Object.getOwnPropertyDescriptor(m, e),
                );
            }),
            p
          );
        }
        var h = {
          $$typeof: !0,
          render: !0,
          compare: !0,
          type: !0,
          displayName: !0,
        };
      },
      4452: (e, t, n) => {
        n.d(t, { q: () => l });
        var r = n(7813),
          o = n(6540),
          s = n(6356),
          a = n(3815),
          i = n(7380),
          u = n(9888);
        function c(e) {
          e.reaction = new r.Reaction("observer".concat(e.name), function () {
            var t;
            (e.stateVersion = Symbol()),
              null === (t = e.onStoreChange) || void 0 === t || t.call(e);
          });
        }
        function l(e, t) {
          if ((void 0 === t && (t = "observed"), (0, a.P)())) return e();
          var n = o.useRef(null);
          if (!n.current) {
            var r = {
              reaction: null,
              onStoreChange: null,
              stateVersion: Symbol(),
              name: t,
              subscribe: function (e) {
                return (
                  i.Y.unregister(r),
                  (r.onStoreChange = e),
                  r.reaction || (c(r), (r.stateVersion = Symbol())),
                  function () {
                    var e;
                    (r.onStoreChange = null),
                      null === (e = r.reaction) || void 0 === e || e.dispose(),
                      (r.reaction = null);
                  }
                );
              },
              getSnapshot: function () {
                return r.stateVersion;
              },
            };
            n.current = r;
          }
          var l,
            d,
            m = n.current;
          if (
            (m.reaction || (c(m), i.Y.register(n, m, m)),
            o.useDebugValue(m.reaction, s.E),
            (0, u.useSyncExternalStore)(
              m.subscribe,
              m.getSnapshot,
              m.getSnapshot,
            ),
            m.reaction.track(function () {
              try {
                l = e();
              } catch (e) {
                d = e;
              }
            }),
            d)
          )
            throw d;
          return l;
        }
      },
      5287: (e, t) => {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          s = Symbol.for("react.strict_mode"),
          a = Symbol.for("react.profiler"),
          i = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          c = Symbol.for("react.forward_ref"),
          l = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          m = Symbol.for("react.lazy"),
          h = Symbol.iterator;
        var f = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          p = Object.assign,
          _ = {};
        function S(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = _),
            (this.updater = n || f);
        }
        function g() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = _),
            (this.updater = n || f);
        }
        (S.prototype.isReactComponent = {}),
          (S.prototype.setState = function (e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (S.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (g.prototype = S.prototype);
        var y = (b.prototype = new g());
        (y.constructor = b), p(y, S.prototype), (y.isPureReactComponent = !0);
        var v = Array.isArray,
          C = Object.prototype.hasOwnProperty,
          w = { current: null },
          k = { key: !0, ref: !0, __self: !0, __source: !0 };
        function R(e, t, r) {
          var o,
            s = {},
            a = null,
            i = null;
          if (null != t)
            for (o in (void 0 !== t.ref && (i = t.ref),
            void 0 !== t.key && (a = "" + t.key),
            t))
              C.call(t, o) && !k.hasOwnProperty(o) && (s[o] = t[o]);
          var u = arguments.length - 2;
          if (1 === u) s.children = r;
          else if (1 < u) {
            for (var c = Array(u), l = 0; l < u; l++) c[l] = arguments[l + 2];
            s.children = c;
          }
          if (e && e.defaultProps)
            for (o in (u = e.defaultProps)) void 0 === s[o] && (s[o] = u[o]);
          return {
            $$typeof: n,
            type: e,
            key: a,
            ref: i,
            props: s,
            _owner: w.current,
          };
        }
        function E(e) {
          return "object" == typeof e && null !== e && e.$$typeof === n;
        }
        var O = /\/+/g;
        function M(e, t) {
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
        function T(e, t, o, s, a) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (i) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0;
                }
            }
          if (u)
            return (
              (a = a((u = e))),
              (e = "" === s ? "." + M(u, 0) : s),
              v(a)
                ? ((o = ""),
                  null != e && (o = e.replace(O, "$&/") + "/"),
                  T(a, t, o, "", function (e) {
                    return e;
                  }))
                : null != a &&
                  (E(a) &&
                    (a = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      a,
                      o +
                        (!a.key || (u && u.key === a.key)
                          ? ""
                          : ("" + a.key).replace(O, "$&/") + "/") +
                        e,
                    )),
                  t.push(a)),
              1
            );
          if (((u = 0), (s = "" === s ? "." : s + ":"), v(e)))
            for (var c = 0; c < e.length; c++) {
              var l = s + M((i = e[c]), c);
              u += T(i, t, o, l, a);
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
            for (e = l.call(e), c = 0; !(i = e.next()).done; )
              u += T((i = i.value), t, o, (l = s + M(i, c++)), a);
          else if ("object" === i)
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
        function I(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            T(e, r, "", "", function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function F(e) {
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
        var P = { current: null },
          N = { transition: null },
          W = {
            ReactCurrentDispatcher: P,
            ReactCurrentBatchConfig: N,
            ReactCurrentOwner: w,
          };
        function D() {
          throw Error(
            "act(...) is not supported in production builds of React.",
          );
        }
        (t.Children = {
          map: I,
          forEach: function (e, t, n) {
            I(
              e,
              function () {
                t.apply(this, arguments);
              },
              n,
            );
          },
          count: function (e) {
            var t = 0;
            return (
              I(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              I(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!E(e))
              throw Error(
                "React.Children.only expected to receive a single React element child.",
              );
            return e;
          },
        }),
          (t.Component = S),
          (t.Fragment = o),
          (t.Profiler = a),
          (t.PureComponent = b),
          (t.StrictMode = s),
          (t.Suspense = l),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W),
          (t.act = D),
          (t.cloneElement = function (e, t, r) {
            if (null == e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  ".",
              );
            var o = p({}, e.props),
              s = e.key,
              a = e.ref,
              i = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((a = t.ref), (i = w.current)),
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
            if (1 === c) o.children = r;
            else if (1 < c) {
              u = Array(c);
              for (var l = 0; l < c; l++) u[l] = arguments[l + 2];
              o.children = u;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: s,
              ref: a,
              props: o,
              _owner: i,
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
              }).Provider = { $$typeof: i, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = R),
          (t.createFactory = function (e) {
            var t = R.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: c, render: e };
          }),
          (t.isValidElement = E),
          (t.lazy = function (e) {
            return {
              $$typeof: m,
              _payload: { _status: -1, _result: e },
              _init: F,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = N.transition;
            N.transition = {};
            try {
              e();
            } finally {
              N.transition = t;
            }
          }),
          (t.unstable_act = D),
          (t.useCallback = function (e, t) {
            return P.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return P.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return P.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return P.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return P.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return P.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return P.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return P.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return P.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return P.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return P.current.useRef(e);
          }),
          (t.useState = function (e) {
            return P.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return P.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return P.current.useTransition();
          }),
          (t.version = "18.3.1");
      },
      6540: (e, t, n) => {
        e.exports = n(5287);
      },
      6090: (e, t, n) => {
        n.d(t, {
          $: () => k.$,
          $Z: () => w.$Z,
          Ay: () => R,
          CU: () => o.CU,
          Ci: () => _.C,
          Cw: () => s.C,
          Ee: () => w.Ee,
          Em: () => l.Em,
          Fb: () => o.Fb,
          Fi: () => S.Fi,
          GM: () => d.GM,
          GQ: () => w.GQ,
          Gz: () => w.Gz,
          HW: () => w.HW,
          I0: () => r.I0,
          IS: () => u.I,
          JZ: () => o.JZ,
          KI: () => k.KI,
          Ld: () => o.Ld,
          MQ: () => S.MQ,
          MV: () => w.MV,
          N: () => a.e,
          N1: () => p.N,
          NB: () => w.NB,
          NH: () => o.NH,
          O5: () => m.O,
          O6: () => o.O6,
          OH: () => w.OH,
          Oi: () => S.Oi,
          QB: () => o.QB,
          QR: () => k.QR,
          R$: () => w.R$,
          Se: () => o.Se,
          Uj: () => o.Uj,
          Vh: () => h.V,
          Wq: () => r.Wq,
          Xl: () => w.Xl,
          Y4: () => i.Y,
          Zk: () => S.Zk,
          _1: () => w._1,
          _h: () => S._h,
          _n: () => r._n,
          aX: () => h.a,
          b: () => w.b,
          b$: () => v.b,
          cB: () => y.L,
          dL: () => c.d,
          e_: () => o.e_,
          en: () => k.en,
          fD: () => k.fD,
          gN: () => w.gN,
          k2: () => w.k2,
          kG: () => w.kG,
          ku: () => w.ku,
          lq: () => f.l,
          mX: () => r.mX,
          mo: () => w.mo,
          mu: () => w.mu,
          nX: () => l.nX,
          ne: () => w.ne,
          nq: () => b.n,
          oN: () => o.oN,
          o_: () => o.o_,
          p0: () => o.p0,
          pM: () => w.pM,
          pg: () => r.pg,
          qF: () => o.qF,
          rF: () => u.H,
          rx: () => w.rx,
          sJ: () => g.$,
          sk: () => r.sk,
          sn: () => r.sn,
          tx: () => o.tx,
          uC: () => C.u,
          vx: () => o.vx,
        });
        var r = n(2824),
          o = n(6292),
          s = n(3389),
          a = (n(4120), n(1230)),
          i = n(5830),
          u = n(6186),
          c = n(3361),
          l = (n(111), n(5723)),
          d = n(3496),
          m = n(5178),
          h = (n(428), n(9011), n(7350)),
          f = n(6847),
          p = n(5227),
          _ = (n(10), n(1808)),
          S = n(7019),
          g = (n(1988), n(2527), n(9864), n(4189), n(322), n(1977), n(6417)),
          b = n(2303),
          y = n(8715),
          v = (n(4397), n(5459)),
          C = n(8472),
          w = (n(1184), n(3725)),
          k = n(4367);
        const R = VRHTML;
      },
      2824: (e, t, n) => {
        n.d(t, {
          I0: () => c,
          Wq: () => a,
          _n: () => d,
          mX: () => i,
          pg: () => s,
          sk: () => l,
          sn: () => u,
        });
        var r = n(1635),
          o = n(3236);
        const s = "vrcompositor_systemlayer",
          a = "vrcompositor_mailbox",
          i = "input_server",
          u = "desktop_store",
          c = "binding_callouts/main",
          l = "driver_hmd";
        class d {
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
              console.log(
                "Connecting vrmailbox " + this.m_sMailboxName + "...",
              );
              let n = "ws://127.0.0.1:27062";
              this.m_sWebSecret && (n += "?secret=" + this.m_sWebSecret),
                (this.m_fnConnectResolve = e),
                (this.m_wsWebSocketToServer = new WebSocket(n)),
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
            return (0, r.sH)(this, void 0, void 0, function* () {
              return (
                (this.m_sMailboxName = d.EnsureUniqueName(e)),
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
              n = !1;
            if (
              (this.m_oHandlers.hasOwnProperty(t.type) &&
                (this.m_oHandlers[t.type](t), (n = !0)),
              this.m_oWaits.hasOwnProperty(t.type))
            ) {
              let e = !1;
              for (let n of this.m_oWaits[t.type])
                n.nMessageId == t.message_id && (n.callback(t), (e = !0));
              e
                ? (this.m_oWaits[t.type] = this.m_oWaits[t.type].filter(
                    (e) => e.nMessageId == t.message_id,
                  ))
                : console.log(
                    `Received a ${t.type} message, but didn't have a matching message_id. Did the other end forget to mirror message_id?`,
                  ),
                (n = !0);
            }
            n || console.log("Received unhandled message: ", t);
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
            return new Promise((n, r) => {
              this.m_oWaits[e] || (this.m_oWaits[e] = []),
                this.m_oWaits[e].push({ callback: n, nMessageId: t });
            });
          }
          WaitForConnect() {
            return new Promise((e, t) => {
              this.connected ? e() : this.m_oConnectWaits.push(e);
            });
          }
          WaitForMailbox(e) {
            return (0, r.sH)(this, void 0, void 0, function* () {
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
          SendMessageAndWaitForResponse(e, t, n) {
            let r = Object.assign({}, t);
            return (
              null == r.returnAddress &&
                (r.returnAddress = this.m_sMailboxName),
              (r.message_id = this.m_nNextMessageNumber++),
              this.SendMessage(e, r),
              this.WaitForMessage(n, r.message_id)
            );
          }
          SendResponse(e, t) {
            if (!e.returnAddress)
              throw new Error("Missing return address on message");
            let n = Object.assign(Object.assign({}, t), {
              message_id: e.message_id,
            });
            (n.message_id = e.message_id), this.SendMessage(e.returnAddress, n);
          }
        }
        (d.s_nNextMailboxNumber = 1),
          (0, r.Cg)([o.o], d.prototype, "OpenWebSocketToHost", null),
          (0, r.Cg)([o.o], d.prototype, "OnWebSocketOpen", null),
          (0, r.Cg)([o.o], d.prototype, "OnWebSocketClose", null),
          (0, r.Cg)([o.o], d.prototype, "WebSocketSend", null),
          (0, r.Cg)([o.o], d.prototype, "OnWebSocketMessage", null);
      },
      3725: (e, t, n) => {
        var r, o, s, a;
        function i() {
          var e;
          return null !==
            (e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.Environment()) && void 0 !== e
            ? e
            : r.Unknown;
        }
        n.d(t, {
          $Z: () => d,
          Ee: () => w,
          GQ: () => N,
          Gz: () => c,
          HW: () => g,
          MV: () => s,
          NB: () => f,
          OH: () => r,
          R$: () => i,
          Xl: () => y,
          _1: () => F,
          _E: () => u,
          b: () => v,
          gN: () => R,
          k2: () => M,
          kG: () => E,
          ku: () => h,
          mo: () => _,
          mu: () => a,
          ne: () => l,
          pM: () => o,
          rx: () => T,
        }),
          (function (e) {
            (e[(e.Desktop = 1)] = "Desktop"),
              (e[(e.Overlay = 2)] = "Overlay"),
              (e[(e.Unknown = 100)] = "Unknown");
          })(r || (r = {})),
          window.hasOwnProperty("VRHTML") || (window.VRHTML = null),
          (function (e) {
            (e[(e.Auto = 0)] = "Auto"),
              (e[(e.Low = 1)] = "Low"),
              (e[(e.Medium = 2)] = "Medium"),
              (e[(e.High = 3)] = "High");
          })(o || (o = {})),
          (function (e) {
            (e[(e.TrackingResult_Uninitialized = 1)] =
              "TrackingResult_Uninitialized"),
              (e[(e.TrackingResult_Calibrating_InProgress = 100)] =
                "TrackingResult_Calibrating_InProgress"),
              (e[(e.TrackingResult_Calibrating_OutOfRange = 101)] =
                "TrackingResult_Calibrating_OutOfRange"),
              (e[(e.TrackingResult_Running_OK = 200)] =
                "TrackingResult_Running_OK"),
              (e[(e.TrackingResult_Running_OutOfRange = 201)] =
                "TrackingResult_Running_OutOfRange"),
              (e[(e.TrackingResult_Fallback_RotationOnly = 300)] =
                "TrackingResult_Fallback_RotationOnly");
          })(s || (s = {})),
          (function (e) {
            (e[(e.Seated = 0)] = "Seated"),
              (e[(e.Standing = 1)] = "Standing"),
              (e[(e.RawAndUncalibrated = 2)] = "RawAndUncalibrated");
          })(a || (a = {}));
        let u = 0,
          c = 0,
          l = 4294967295;
        var d, m, h, f, p, _, S, g, b, y, v, C, w, k, R, E, O, M, T, I, F, P, N;
        !(function (e) {
          (e[(e.Invalid = 0)] = "Invalid"),
            (e[(e.RecenterCountdown = 1)] = "RecenterCountdown"),
            (e[(e.FloorAdjustExisting = 2)] = "FloorAdjustExisting"),
            (e[(e.RoomSetupFloor = 3)] = "RoomSetupFloor"),
            (e[(e.ClearRoomSetup = 4)] = "ClearRoomSetup");
        })(d || (d = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.Shown = 1)] = "Shown"),
              (e[(e.Hidden = 2)] = "Hidden"),
              (e[(e.Exposed = 3)] = "Exposed"),
              (e[(e.Moved = 4)] = "Moved"),
              (e[(e.Resized = 5)] = "Resized"),
              (e[(e.SizeChanged = 6)] = "SizeChanged"),
              (e[(e.Minimized = 7)] = "Minimized"),
              (e[(e.Maximized = 8)] = "Maximized"),
              (e[(e.Restored = 9)] = "Restored"),
              (e[(e.Enter = 10)] = "Enter"),
              (e[(e.Leave = 11)] = "Leave"),
              (e[(e.FocusGained = 12)] = "FocusGained"),
              (e[(e.FocusLost = 13)] = "FocusLost"),
              (e[(e.Close = 14)] = "Close"),
              (e[(e.TakeFocus = 15)] = "TakeFocus"),
              (e[(e.HitTest = 16)] = "HitTest");
          })(m || (m = {})),
          (function (e) {
            (e[(e.Activated = 0)] = "Activated"),
              (e[(e.Deactivated = 1)] = "Deactivated");
          })(h || (h = {})),
          (function (e) {
            (e[(e.NoDashboardTab = 8)] = "NoDashboardTab"),
              (e[(e.AcceptsGamepadEvents = 16)] = "AcceptsGamepadEvents"),
              (e[(e.ShowGamepadFocus = 32)] = "ShowGamepadFocus"),
              (e[(e.SendVRDiscreteScrollEvents = 64)] =
                "SendVRDiscreteScrollEvents"),
              (e[(e.SendVRTouchpadEvents = 128)] = "SendVRTouchpadEvents"),
              (e[(e.ShowTouchPadScrollWheel = 256)] =
                "ShowTouchPadScrollWheel"),
              (e[(e.TransferOwnershipToInternalProcess = 512)] =
                "TransferOwnershipToInternalProcess"),
              (e[(e.SideBySide_Parallel = 1024)] = "SideBySide_Parallel"),
              (e[(e.SideBySide_Crossed = 2048)] = "SideBySide_Crossed"),
              (e[(e.Panorama = 4096)] = "Panorama"),
              (e[(e.StereoPanorama = 8192)] = "StereoPanorama"),
              (e[(e.SortWithNonSceneOverlays = 16384)] =
                "SortWithNonSceneOverlays"),
              (e[(e.VisibleInDashboard = 32768)] = "VisibleInDashboard"),
              (e[(e.MakeOverlaysInteractiveIfVisible = 65536)] =
                "MakeOverlaysInteractiveIfVisible"),
              (e[(e.SendVRSmoothScrollEvents = 131072)] =
                "SendVRSmoothScrollEvents"),
              (e[(e.ProtectedContent = 262144)] = "ProtectedContent"),
              (e[(e.HideLaserIntersection = 524288)] = "HideLaserIntersection"),
              (e[(e.WantsModalBehavior = 1048576)] = "WantsModalBehavior"),
              (e[(e.IsPremultiplied = 2097152)] = "IsPremultiplied"),
              (e[(e.IgnoreTextureAlpha = 4194304)] = "IgnoreTextureAlpha"),
              (e[(e.EnableControlBarKeyboard = 16777216)] =
                "EnableControlBarKeyboard"),
              (e[(e.EnableControlBarClose = 33554432)] =
                "EnableControlBarClose"),
              (e[(e.MinimalControlBar = 67108864)] = "MinimalControlBar"),
              (e[(e.EnableClickStabilization = 134217728)] =
                "EnableClickStabilization"),
              (e[(e.MultiCursor = 268435456)] = "MultiCursor");
          })(f || (f = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"), (e[(e.Mouse = 1)] = "Mouse");
          })(p || (p = {})),
          (function (e) {
            (e[(e.Invalid = 0)] = "Invalid"),
              (e[(e.HMD = 1)] = "HMD"),
              (e[(e.Controller = 2)] = "Controller"),
              (e[(e.GenericTracker = 3)] = "GenericTracker"),
              (e[(e.TrackingReference = 4)] = "TrackingReference"),
              (e[(e.DisplayRedirect = 5)] = "DisplayRedirect");
          })(_ || (_ = {})),
          (function (e) {
            (e[(e.Unknown = 0)] = "Unknown"),
              (e[(e.NVIDIA = 1)] = "NVIDIA"),
              (e[(e.AMD = 2)] = "AMD");
          })(S || (S = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.Starting = 1)] = "Starting"),
              (e[(e.Quitting = 2)] = "Quitting"),
              (e[(e.Running = 3)] = "Running"),
              (e[(e.Waiting = 4)] = "Waiting");
          })(g || (g = {})),
          (function (e) {
            (e[(e.ButtonPress_0 = 0)] = "ButtonPress_0"),
              (e[(e.ButtonPress_1 = 1)] = "ButtonPress_1"),
              (e[(e.ButtonPress_2 = 2)] = "ButtonPress_2"),
              (e[(e.ButtonPress_3 = 3)] = "ButtonPress_3"),
              (e[(e.CouldntFindSystemOverlay = 4)] =
                "CouldntFindSystemOverlay"),
              (e[(e.CouldntFindOrCreateClientOverlay = 5)] =
                "CouldntFindOrCreateClientOverlay"),
              (e[(e.ApplicationQuit = 6)] = "ApplicationQuit");
          })(b || (b = {})),
          (function (e) {
            (e[(e.Normal = 0)] = "Normal"),
              (e[(e.Password = 1)] = "Password"),
              (e[(e.Submit = 2)] = "Submit");
          })(y || (y = {})),
          (function (e) {
            (e[(e.SingleLine = 0)] = "SingleLine"),
              (e[(e.MultipleLines = 1)] = "MultipleLines");
          })(v || (v = {})),
          (function (e) {
            (e[(e.LaserMouse = 1)] = "LaserMouse"),
              (e[(e.Keyboard = 2)] = "Keyboard"),
              (e[(e.RoomView = 4)] = "RoomView"),
              (e[(e.DisplaySuppressed = 8)] = "DisplaySuppressed"),
              (e[(e.SystemButtonDown = 16)] = "SystemButtonDown"),
              (e[(e.DriverIsDrawingControllers = 32)] =
                "DriverIsDrawingControllers"),
              (e[(e.DriverRequestsApplicationPause = 64)] =
                "DriverRequestsApplicationPause"),
              (e[(e.DriverRequestsReducedRendering = 128)] =
                "DriverRequestsReducedRendering");
          })(C || (C = {})),
          (function (e) {
            (e[(e.BULK_DEFAULT = 0)] = "BULK_DEFAULT"),
              (e[(e.BULK_64K_DMA = 1)] = "BULK_64K_DMA"),
              (e[(e.BULK_16K_DMA = 2)] = "BULK_16K_DMA"),
              (e[(e.BULK_8K_DMA = 3)] = "BULK_8K_DMA"),
              (e[(e.ISO_52FPS = 4)] = "ISO_52FPS"),
              (e[(e.ISO_50FPS = 5)] = "ISO_50FPS"),
              (e[(e.ISO_48FPS = 6)] = "ISO_48FPS"),
              (e[(e.ISO_46FPS = 7)] = "ISO_46FPS"),
              (e[(e.ISO_44FPS = 8)] = "ISO_44FPS"),
              (e[(e.ISO_42FPS = 9)] = "ISO_42FPS"),
              (e[(e.ISO_40FPS = 10)] = "ISO_40FPS"),
              (e[(e.ISO_35FPS = 11)] = "ISO_35FPS"),
              (e[(e.ISO_30FPS = 12)] = "ISO_30FPS"),
              (e[(e.ISO_15FPS = 13)] = "ISO_15FPS"),
              (e[(e.MAX_CAMERA_COMPAT_MODES = 14)] = "MAX_CAMERA_COMPAT_MODES");
          })(w || (w = {})),
          (function (e) {
            (e[(e.ECameraExposure_Unknown = 0)] = "ECameraExposure_Unknown"),
              (e[(e.ECameraExposure_Nominal = 1)] = "ECameraExposure_Nominal"),
              (e[(e.ECameraExposure_HighExposure = 2)] =
                "ECameraExposure_HighExposure");
          })(k || (k = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.ThisSteamVR = 1)] = "ThisSteamVR"),
              (e[(e.AnotherSteamVR = 2)] = "AnotherSteamVR"),
              (e[(e.AnotherRuntime = 3)] = "AnotherRuntime"),
              (e[(e.Error = -1)] = "Error");
          })(R || (R = {})),
          (function (e) {
            (e[(e.TrackedControllerRole_Invalid = 0)] =
              "TrackedControllerRole_Invalid"),
              (e[(e.TrackedControllerRole_LeftHand = 1)] =
                "TrackedControllerRole_LeftHand"),
              (e[(e.TrackedControllerRole_RightHand = 2)] =
                "TrackedControllerRole_RightHand"),
              (e[(e.TrackedControllerRole_OptOut = 3)] =
                "TrackedControllerRole_OptOut"),
              (e[(e.TrackedControllerRole_Treadmill = 4)] =
                "TrackedControllerRole_Treadmill"),
              (e[(e.TrackedControllerRole_Max = 5)] =
                "TrackedControllerRole_Max");
          })(E || (E = {})),
          (function (e) {
            (e[(e.Unknown = 0)] = "Unknown"),
              (e[(e.Steam_VRButton = 1)] = "Steam_VRButton"),
              (e[(e.Steam_StartSteamVRApp = 2)] = "Steam_StartSteamVRApp"),
              (e[(e.Watchdog_Unknown = 10)] = "Watchdog_Unknown"),
              (e[(e.Watchdog_Controller = 11)] = "Watchdog_Controller"),
              (e[(e.Watchdog_Hmd = 12)] = "Watchdog_Hmd"),
              (e[(e.AppLaunch_Unknown = 20)] = "AppLaunch_Unknown"),
              (e[(e.AppLaunch_Steam = 21)] = "AppLaunch_Steam"),
              (e[(e.SteamVR_Restart = 30)] = "SteamVR_Restart"),
              (e[(e.SteamVR_VRStartup = 31)] = "SteamVR_VRStartup");
          })(O || (O = {})),
          (function (e) {
            e[(e.Hostname = 0)] = "Hostname";
          })(M || (M = {})),
          (function (e) {
            (e[(e.Unavailable = 0)] = "Unavailable"),
              (e[(e.Active = 1)] = "Active"),
              (e[(e.Off = 2)] = "Off");
          })(T || (T = {})),
          (function (e) {
            (e[(e.Default = 1)] = "Default"), (e[(e.Floor = 2)] = "Floor");
          })(I || (I = {})),
          (function (e) {
            (e[(e.Inactive = 0)] = "Inactive"),
              (e[(e.PendingReset = 1)] = "PendingReset"),
              (e[(e.PendingResetIfNeeded = 2)] = "PendingResetIfNeeded"),
              (e[(e.Default = 3)] = "Default"),
              (e[(e.CV = 4)] = "CV"),
              (e[(e.Manual = 5)] = "Manual");
          })(F || (F = {})),
          (function (e) {
            (e[(e.OK = 1)] = "OK"),
              (e[(e.Warning = 100)] = "Warning"),
              (e[(e.Warning_BaseStationMayHaveMoved = 101)] =
                "Warning_BaseStationMayHaveMoved"),
              (e[(e.Warning_BaseStationRemoved = 102)] =
                "Warning_BaseStationRemoved"),
              (e[(e.Warning_SeatedBoundsInvalid = 103)] =
                "Warning_SeatedBoundsInvalid"),
              (e[(e.Error = 200)] = "Error"),
              (e[(e.Error_BaseStationUninitialized = 201)] =
                "Error_BaseStationUninitialized"),
              (e[(e.Error_BaseStationConflict = 202)] =
                "Error_BaseStationConflict"),
              (e[(e.Error_PlayAreaInvalid = 203)] = "Error_PlayAreaInvalid"),
              (e[(e.Error_CollisionBoundsInvalid = 204)] =
                "Error_CollisionBoundsInvalid");
          })(P || (P = {})),
          (function (e) {
            (e[(e.Small = 0)] = "Small"),
              (e[(e.Medium = 1)] = "Medium"),
              (e[(e.Large = 2)] = "Large"),
              (e[(e.Gigantic = 3)] = "Gigantic"),
              (e[(e.Standing = 4)] = "Standing");
          })(N || (N = {}));
      },
      3714: (e, t, n) => {
        n.d(t, { A0: () => r, we: () => o });
        n(6540), n(2505);
        class r {
          constructor() {
            (this.m_mapTokens = new Map()),
              (this.m_mapFallbackTokens = new Map());
          }
          InitFromObjects(e, t, n, r) {
            this.m_mapTokens.clear();
            let o = [t, e, r, n];
            for (let e in o) {
              let t = o[e];
              for (let e in t) {
                let n = t[e];
                for (let e in n) {
                  let t = e.toLowerCase();
                  this.m_mapTokens.has(t) || this.m_mapTokens.set(t, n[e]);
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
              r.s_Date.toLocaleTimeString(t);
              return t;
            } catch (t) {
              return e;
            }
          }
        }
        function o(e, ...t) {
          let n = s.LocalizeString(e);
          return n
            ? (t.length > 0 &&
                (n = n.replace(/%(\d+)\$s/g, function (e, n) {
                  return void 0 !== t[n - 1] ? String(t[n - 1]) : e;
                })),
              n)
            : e;
        }
        r.s_Date = new Date();
        const s = new r();
        window.LocalizationManager = s;
      },
      9513: (e, t, n) => {
        var r = n(1635),
          o = n(6540),
          s = n(5338),
          a = n(3236),
          i = n(6090),
          u = n(7813),
          c = n(1370),
          l = n(1333);
        class d {
          constructor(e, t, n) {
            (this.keyCode = e), (this.shift = t), (this.control = n);
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
            let n = Number.parseInt(t[0]),
              r = Number.parseInt(t[1]),
              o = Number.parseInt(t[2]);
            return new d(n, r > 0, o > 0);
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
        (0, r.Cg)([u.observable], m.prototype, "shortcut", void 0);
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
            return (0, r.sH)(this, void 0, void 0, function* () {
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
            return (0, r.sH)(this, void 0, void 0, function* () {
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
                  let n = this.getCommandForName(t[0]),
                    r = d.fromSerializedString(t[1]);
                  n && r && this.bindCommandToShortcut(n, r, !1);
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
          bindCommandToShortcut(e, t, n) {
            let r = this.getCommandForShortcut(t);
            r && (r.shortcut = null),
              (e.shortcut = t),
              n && this.saveCommandShortcuts();
          }
          resetCommandShortcut(e, t) {
            let n = null;
            e.sCommand in h.k_DefaultShortcuts &&
              (n = h.k_DefaultShortcuts[e.sCommand]),
              this.bindCommandToShortcut(e, n, t);
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
          (0, r.Cg)([a.o], h.prototype, "dumpShortcuts", null),
          (0, r.Cg)([a.o], h.prototype, "resetCommandShortcut", null);
        let f = class extends o.Component {
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
              (this.mailbox = new i._n()),
              this.mailbox.Init("debugcommands").then(() =>
                (0, r.sH)(this, void 0, void 0, function* () {
                  console.log("[debugcommands] Requesting commands..");
                  let e = { type: "get_debug_commands" },
                    t = yield this.mailbox.SendMessageAndWaitForResponse(
                      i.Wq,
                      e,
                      "get_debug_commands_response",
                    ),
                    n = yield this.mailbox.SendMessageAndWaitForResponse(
                      i.pg,
                      e,
                      "get_debug_commands_response",
                    ),
                    r = t.commands.concat(n.commands);
                  try {
                    if (
                      yield l.HR.GetSettingsValue("/settings/steamvr/usePrism")
                    ) {
                      let t = yield this.mailbox.SendMessageAndWaitForResponse(
                        "prism_mailbox",
                        e,
                        "get_debug_commands_response",
                      );
                      r = r.concat(t.commands);
                    }
                  } catch (e) {}
                  let o = new h(r.map((e) => new m(e.command, e.mailbox)));
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
                        n = this.state.editingCommand === e;
                      n && t.push("Editing");
                      let r = !!e.shortcut;
                      t.push(r ? "Bound" : "Unbound");
                      let s = o.createElement("span", null, "unbound");
                      return (
                        n
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
        (0, r.Cg)([a.o], f.prototype, "onWindowFocus", null),
          (0, r.Cg)([a.o], f.prototype, "onWindowBlur", null),
          (0, r.Cg)([a.o], f.prototype, "endEdit", null),
          (0, r.Cg)([a.o], f.prototype, "onKeyDown", null),
          (0, r.Cg)([u.computed], f.prototype, "isEditing", null),
          (0, r.Cg)([a.o], f.prototype, "onSearchChanged", null),
          (0, r.Cg)([a.o], f.prototype, "clearSearch", null),
          (0, r.Cg)([a.o], f.prototype, "onResetShortcuts", null),
          (f = (0, r.Cg)([c.PA], f)),
          s.H(document.getElementById("root")).render(o.createElement(f, null)),
          (window.document.title = "Debug Commands");
      },
    },
    n = {};
  function r(e) {
    var o = n[e];
    if (void 0 !== o) return o.exports;
    var s = (n[e] = { exports: {} });
    return t[e].call(s.exports, s, s.exports, r), s.exports;
  }
  (r.m = t),
    (e = []),
    (r.O = (t, n, o, s) => {
      if (!n) {
        var a = 1 / 0;
        for (l = 0; l < e.length; l++) {
          for (var [n, o, s] = e[l], i = !0, u = 0; u < n.length; u++)
            (!1 & s || a >= s) && Object.keys(r.O).every((e) => r.O[e](n[u]))
              ? n.splice(u--, 1)
              : ((i = !1), s < a && (a = s));
          if (i) {
            e.splice(l--, 1);
            var c = o();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      s = s || 0;
      for (var l = e.length; l > 0 && e[l - 1][2] > s; l--) e[l] = e[l - 1];
      e[l] = [n, o, s];
    }),
    (r.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return r.d(t, { a: t }), t;
    }),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e = { 866: 0, 537: 0, 454: 0 };
      r.O.j = (t) => 0 === e[t];
      var t = (t, n) => {
          var o,
            s,
            [a, i, u] = n,
            c = 0;
          if (a.some((t) => 0 !== e[t])) {
            for (o in i) r.o(i, o) && (r.m[o] = i[o]);
            if (u) var l = u(r);
          }
          for (t && t(n); c < a.length; c++)
            (s = a[c]), r.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
          return r.O(l);
        },
        n = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })();
  var o = r.O(void 0, [967, 991, 305, 452, 170, 797, 906], () => r(9513));
  o = r.O(o);
})(); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_hotfix_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/debugcommands.js.map
