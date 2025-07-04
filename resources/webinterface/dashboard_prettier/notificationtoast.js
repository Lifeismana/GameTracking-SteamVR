var CLSTAMP = "9839182";
(() => {
  "use strict";
  var e,
    t = {
      5287: (e, t) => {
        var r = Symbol.for("react.element"),
          n = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          u = Symbol.for("react.profiler"),
          i = Symbol.for("react.provider"),
          s = Symbol.for("react.context"),
          c = Symbol.for("react.forward_ref"),
          l = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          p = Symbol.for("react.lazy"),
          d = Symbol.iterator;
        var y = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          h = {};
        function v(e, t, r) {
          (this.props = e),
            (this.context = t),
            (this.refs = h),
            (this.updater = r || y);
        }
        function b() {}
        function _(e, t, r) {
          (this.props = e),
            (this.context = t),
            (this.refs = h),
            (this.updater = r || y);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (b.prototype = v.prototype);
        var g = (_.prototype = new b());
        (g.constructor = _), m(g, v.prototype), (g.isPureReactComponent = !0);
        var R = Array.isArray,
          S = Object.prototype.hasOwnProperty,
          E = { current: null },
          k = { key: !0, ref: !0, __self: !0, __source: !0 };
        function O(e, t, n) {
          var o,
            a = {},
            u = null,
            i = null;
          if (null != t)
            for (o in (void 0 !== t.ref && (i = t.ref),
            void 0 !== t.key && (u = "" + t.key),
            t))
              S.call(t, o) && !k.hasOwnProperty(o) && (a[o] = t[o]);
          var s = arguments.length - 2;
          if (1 === s) a.children = n;
          else if (1 < s) {
            for (var c = Array(s), l = 0; l < s; l++) c[l] = arguments[l + 2];
            a.children = c;
          }
          if (e && e.defaultProps)
            for (o in (s = e.defaultProps)) void 0 === a[o] && (a[o] = s[o]);
          return {
            $$typeof: r,
            type: e,
            key: u,
            ref: i,
            props: a,
            _owner: E.current,
          };
        }
        function w(e) {
          return "object" == typeof e && null !== e && e.$$typeof === r;
        }
        var x = /\/+/g;
        function C(e, t) {
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
        function $(e, t, o, a, u) {
          var i = typeof e;
          ("undefined" !== i && "boolean" !== i) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (i) {
              case "string":
              case "number":
                s = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case r:
                  case n:
                    s = !0;
                }
            }
          if (s)
            return (
              (u = u((s = e))),
              (e = "" === a ? "." + C(s, 0) : a),
              R(u)
                ? ((o = ""),
                  null != e && (o = e.replace(x, "$&/") + "/"),
                  $(u, t, o, "", function (e) {
                    return e;
                  }))
                : null != u &&
                  (w(u) &&
                    (u = (function (e, t) {
                      return {
                        $$typeof: r,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      u,
                      o +
                        (!u.key || (s && s.key === u.key)
                          ? ""
                          : ("" + u.key).replace(x, "$&/") + "/") +
                        e,
                    )),
                  t.push(u)),
              1
            );
          if (((s = 0), (a = "" === a ? "." : a + ":"), R(e)))
            for (var c = 0; c < e.length; c++) {
              var l = a + C((i = e[c]), c);
              s += $(i, t, o, l, u);
            }
          else if (
            ((l = (function (e) {
              return null === e || "object" != typeof e
                ? null
                : "function" == typeof (e = (d && e[d]) || e["@@iterator"])
                  ? e
                  : null;
            })(e)),
            "function" == typeof l)
          )
            for (e = l.call(e), c = 0; !(i = e.next()).done; )
              s += $((i = i.value), t, o, (l = a + C(i, c++)), u);
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
          return s;
        }
        function N(e, t, r) {
          if (null == e) return e;
          var n = [],
            o = 0;
          return (
            $(e, n, "", "", function (e) {
              return t.call(r, e, o++);
            }),
            n
          );
        }
        function j(e) {
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
        var I = { current: null },
          V = { transition: null },
          T = {
            ReactCurrentDispatcher: I,
            ReactCurrentBatchConfig: V,
            ReactCurrentOwner: E,
          };
        function M() {
          throw Error(
            "act(...) is not supported in production builds of React.",
          );
        }
        (t.Children = {
          map: N,
          forEach: function (e, t, r) {
            N(
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
              N(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              N(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!w(e))
              throw Error(
                "React.Children.only expected to receive a single React element child.",
              );
            return e;
          },
        }),
          (t.Component = v),
          (t.Fragment = o),
          (t.Profiler = u),
          (t.PureComponent = _),
          (t.StrictMode = a),
          (t.Suspense = l),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T),
          (t.act = M),
          (t.cloneElement = function (e, t, n) {
            if (null == e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  ".",
              );
            var o = m({}, e.props),
              a = e.key,
              u = e.ref,
              i = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((u = t.ref), (i = E.current)),
                void 0 !== t.key && (a = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (c in t)
                S.call(t, c) &&
                  !k.hasOwnProperty(c) &&
                  (o[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) o.children = n;
            else if (1 < c) {
              s = Array(c);
              for (var l = 0; l < c; l++) s[l] = arguments[l + 2];
              o.children = s;
            }
            return {
              $$typeof: r,
              type: e.type,
              key: a,
              ref: u,
              props: o,
              _owner: i,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
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
          (t.createElement = O),
          (t.createFactory = function (e) {
            var t = O.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: c, render: e };
          }),
          (t.isValidElement = w),
          (t.lazy = function (e) {
            return {
              $$typeof: p,
              _payload: { _status: -1, _result: e },
              _init: j,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = V.transition;
            V.transition = {};
            try {
              e();
            } finally {
              V.transition = t;
            }
          }),
          (t.unstable_act = M),
          (t.useCallback = function (e, t) {
            return I.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return I.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return I.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return I.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return I.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, r) {
            return I.current.useImperativeHandle(e, t, r);
          }),
          (t.useInsertionEffect = function (e, t) {
            return I.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return I.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return I.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, r) {
            return I.current.useReducer(e, t, r);
          }),
          (t.useRef = function (e) {
            return I.current.useRef(e);
          }),
          (t.useState = function (e) {
            return I.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, r) {
            return I.current.useSyncExternalStore(e, t, r);
          }),
          (t.useTransition = function () {
            return I.current.useTransition();
          }),
          (t.version = "18.3.1");
      },
      6090: (e, t, r) => {
        r.d(t, {
          $: () => k.$,
          $Z: () => E.$Z,
          Ay: () => O,
          CU: () => o.CU,
          Ci: () => h.C,
          Cw: () => a.C,
          Ee: () => E.Ee,
          Em: () => f.Em,
          Fb: () => o.Fb,
          Fi: () => v.Fi,
          GQ: () => E.GQ,
          Gz: () => E.Gz,
          HW: () => E.HW,
          I0: () => n.I0,
          JZ: () => o.JZ,
          KI: () => k.KI,
          Ld: () => o.Ld,
          MQ: () => v.MQ,
          MV: () => E.MV,
          N: () => i.e,
          N1: () => m.N,
          NB: () => E.NB,
          NH: () => o.NH,
          O5: () => p.O,
          O6: () => o.O6,
          OH: () => E.OH,
          Oi: () => v.Oi,
          QB: () => o.QB,
          QR: () => k.QR,
          R$: () => E.R$,
          Se: () => o.Se,
          Uj: () => o.Uj,
          Vh: () => d.V,
          Xl: () => E.Xl,
          Y4: () => s.Y,
          Zk: () => v.Zk,
          _1: () => E._1,
          _h: () => v._h,
          _n: () => n._n,
          aX: () => d.a,
          b: () => E.b,
          b$: () => R.b,
          cB: () => g.L,
          dL: () => l.d,
          e_: () => o.e_,
          en: () => k.en,
          fD: () => k.fD,
          gN: () => E.gN,
          gO: () => u.g,
          k2: () => E.k2,
          kG: () => E.kG,
          ku: () => E.ku,
          lq: () => y.l,
          mX: () => n.mX,
          mo: () => E.mo,
          mu: () => E.mu,
          nX: () => f.nX,
          ne: () => E.ne,
          nq: () => _.n,
          oN: () => o.oN,
          o_: () => o.o_,
          p0: () => o.p0,
          pM: () => E.pM,
          pg: () => n.pg,
          qF: () => o.qF,
          rF: () => c.H,
          rx: () => E.rx,
          sJ: () => b.$,
          sk: () => n.sk,
          tx: () => o.tx,
          uC: () => S.u,
          vx: () => o.vx,
        });
        var n = r(2824),
          o = r(6292),
          a = r(3389),
          u = (r(4120), r(9424)),
          i = r(1230),
          s = r(5830),
          c = r(6186),
          l = r(3361),
          f = (r(111), r(5723)),
          p = (r(3496), r(5178)),
          d = (r(428), r(9011), r(7350)),
          y = r(6847),
          m = r(5227),
          h = (r(10), r(1808)),
          v = r(7019),
          b = (r(1988), r(2527), r(9864), r(4189), r(322), r(1977), r(6417)),
          _ = r(2303),
          g = r(8715),
          R = (r(4397), r(5459)),
          S = r(8472),
          E = (r(1184), r(3725)),
          k = r(4367);
        const O = VRHTML;
      },
      4170: (e, t, r) => {
        var n = r(1635),
          o = r(6540),
          a = r(5338),
          u = r(3236),
          i = r(6090),
          s = r(3714),
          c = r(1333);
        class l extends o.Component {
          constructor(e) {
            super(e),
              (this.m_toastMailbox = new i._n()),
              (this.state = { visible: !1, title: "", header: "", text: "" }),
              this.m_toastMailbox.Init("toast_renderer/main"),
              this.m_toastMailbox.RegisterHandler(
                "render_toast",
                this.OnRenderToast,
              ),
              c.HR.Init(!1);
          }
          OnRenderToast(e) {
            let t = i.Ay.VROverlayInternal.GetToastInfo(e.notification_id);
            t
              ? this.setState({
                  visible: !0,
                  title: t.sTitle,
                  header: t.sHeader || "",
                  text: t.sText,
                  image: t.sImageData,
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
              ? o.createElement(
                  "div",
                  { className: "VRNotificationRoot" },
                  o.createElement(
                    "div",
                    { className: "VRNotificationApplicationName" },
                    this.state.title,
                  ),
                  o.createElement(
                    "div",
                    { className: "VRNotificationFrame" },
                    o.createElement("div", {
                      className: "VRToastImage",
                      style: {
                        backgroundImage: this.state.image
                          ? "url('" + this.state.image + "')"
                          : "url('/dashboard/images/icons/notification_steamcog.png')",
                      },
                    }),
                    o.createElement(
                      "div",
                      { className: "VRNotificationTextWrapper" },
                      o.createElement(
                        "div",
                        { className: "VRNotificationHeader" },
                        this.state.header,
                      ),
                      o.createElement(
                        "div",
                        { className: "VRNotificationText" },
                        this.state.text,
                      ),
                    ),
                  ),
                )
              : null;
          }
        }
        (0, n.Cg)([u.o], l.prototype, "OnRenderToast", null),
          (0, s.uV)(
            [],
            null === i.Ay || void 0 === i.Ay ? void 0 : i.Ay.GetSteamLanguage(),
          )
            .then(() => {
              a.H(document.getElementById("root")).render(
                o.createElement(l, null),
              );
            })
            .catch((e) =>
              console.error("Failed to initialize notification toast:", e),
            );
      },
    },
    r = {};
  function n(e) {
    var o = r[e];
    if (void 0 !== o) return o.exports;
    var a = (r[e] = { exports: {} });
    return t[e].call(a.exports, a, a.exports, n), a.exports;
  }
  (n.m = t),
    (e = []),
    (n.O = (t, r, o, a) => {
      if (!r) {
        var u = 1 / 0;
        for (l = 0; l < e.length; l++) {
          for (var [r, o, a] = e[l], i = !0, s = 0; s < r.length; s++)
            (!1 & a || u >= a) && Object.keys(n.O).every((e) => n.O[e](r[s]))
              ? r.splice(s--, 1)
              : ((i = !1), a < u && (u = a));
          if (i) {
            e.splice(l--, 1);
            var c = o();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      a = a || 0;
      for (var l = e.length; l > 0 && e[l - 1][2] > a; l--) e[l] = e[l - 1];
      e[l] = [r, o, a];
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
      var e = { 915: 0, 270: 0, 171: 0 };
      n.O.j = (t) => 0 === e[t];
      var t = (t, r) => {
          var o,
            a,
            [u, i, s] = r,
            c = 0;
          if (u.some((t) => 0 !== e[t])) {
            for (o in i) n.o(i, o) && (n.m[o] = i[o]);
            if (s) var l = s(n);
          }
          for (t && t(r); c < u.length; c++)
            (a = u[c]), n.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
          return n.O(l);
        },
        r = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var o = n.O(
    void 0,
    [498, 299, 804, 270, 582, 510, 844, 723, 177, 171, 496, 57],
    () => n(4170),
  );
  o = n.O(o);
})(); //# sourceMappingURL=file:///c:/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/notificationtoast.js.map
