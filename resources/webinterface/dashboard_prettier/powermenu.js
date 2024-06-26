/*!
 * (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 *
 */ !(function (e) {
  function t(t) {
    for (
      var n, a, s = t[0], l = t[1], u = t[2], d = 0, p = [];
      d < s.length;
      d++
    )
      (a = s[d]),
        Object.prototype.hasOwnProperty.call(i, a) && i[a] && p.push(i[a][0]),
        (i[a] = 0);
    for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
    for (c && c(t); p.length; ) p.shift()();
    return o.push.apply(o, u || []), r();
  }
  function r() {
    for (var e, t = 0; t < o.length; t++) {
      for (var r = o[t], n = !0, s = 1; s < r.length; s++) {
        var l = r[s];
        0 !== i[l] && (n = !1);
      }
      n && (o.splice(t--, 1), (e = a((a.s = r[0]))));
    }
    return e;
  }
  var n = {},
    i = { 9: 0 },
    o = [];
  function a(t) {
    if (n[t]) return n[t].exports;
    var r = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, a), (r.l = !0), r.exports;
  }
  (a.m = e),
    (a.c = n),
    (a.d = function (e, t, r) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (a.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.t = function (e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (a.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          a.d(
            r,
            n,
            function (t) {
              return e[t];
            }.bind(null, n),
          );
      return r;
    }),
    (a.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return a.d(t, "a", t), t;
    }),
    (a.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.p = "");
  var s = (window.webpackJsonp = window.webpackJsonp || []),
    l = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var u = 0; u < s.length; u++) t(s[u]);
  var c = l;
  o.push(["C6m/", 0, 1]), r();
})({
  "C6m/": function (e, t, r) {
    "use strict";
    r.r(t);
    var n = r("mrSG"),
      i = r("q1tI"),
      o = r("i8i4"),
      a = r("okNM"),
      s = r("7wIv"),
      l = r("EUJ1"),
      u = r.n(l),
      c = r("GXif"),
      d = r("6YgL");
    function p(e) {
      return i.createElement(
        d.a,
        { className: "ButtonControl", onClick: e.onClick },
        i.createElement("div", { className: "HoverGradient" }),
        i.createElement("div", { className: "ClickGradient" }),
        i.createElement("span", null, e.label),
      );
    }
    let f = class extends i.Component {
      constructor(e) {
        super(e),
          (this.state = {
            sCurrentSceneApp: void 0,
            bSceneAppRunning: !1,
            bArcadeMode: !1,
            bHasHMDCamera: !1,
            nTrackingSpaceType: l.ETrackingUniverseOrigin.Seated,
            bCanPowerOffVRController: !1,
          }),
          u.a.IsAvailable() &&
            u.a.RegisterForOverlayStateEvents(this.OnOverlayStateChanged);
      }
      Tick() {
        if (u.a.IsAvailable()) {
          let e = !1;
          if (
            u.a.VROverlay &&
            u.a.VROverlay.ThisOverlayHandle() != l.k_ulOverlayHandleInvalid
          ) {
            let t = u.a.VROverlay.GetPrimaryDashboardDevice();
            e = u.a.VRProperties.GetBoolProperty(
              t,
              l.ETrackedDeviceProperty.DeviceCanPowerOff_Bool,
            );
          }
          this.setState({
            sCurrentSceneApp: u.a.GetCurrentSceneFocusAppName(),
            bSceneAppRunning: u.a.SceneAppRunning(),
            bArcadeMode: u.a.VRSettings.GetBool("dashboard", "arcadeMode"),
            bHasHMDCamera: u.a.HasHMDCamera(),
            nTrackingSpaceType: u.a.VRCompositor.GetTrackingSpace(),
            bCanPowerOffVRController: e,
          });
        }
      }
      OnOverlayStateChanged(e) {
        this.Tick(),
          e
            ? (this.m_nTimerID = setInterval(this.Tick, 1e3))
            : clearInterval(this.m_nTimerID);
      }
      DismissDashboard() {
        u.a.IsAvailable() && u.a.DismissDashboard();
      }
      QuitOpenVR() {
        u.a.IsAvailable() && u.a.QuitOpenVR();
      }
      QuitSceneApp() {
        u.a.IsAvailable() && u.a.QuitSceneApp();
      }
      TurnOffVRController() {
        u.a.IsAvailable() && u.a.TurnOffVRController();
      }
      ResetSeatedOrigin() {
        u.a.IsAvailable() && u.a.ResetSeatedOrigin();
      }
      render() {
        let e = this.state.sCurrentSceneApp
          ? Object(c.b)("#PowerMenuQuitSceneApp", this.state.sCurrentSceneApp)
          : Object(c.b)("#PowerMenuQuitSceneApp_NoApp");
        return i.createElement(
          "div",
          { className: "PowerMenuContainer" },
          i.createElement(
            d.b,
            { className: "PowerMenuPanel" },
            this.state.nTrackingSpaceType == l.ETrackingUniverseOrigin.Seated &&
              i.createElement(p, {
                label: Object(c.b)("#PowerMenuResetSeatedPosition"),
                onClick: () => {
                  this.ResetSeatedOrigin(), this.DismissDashboard();
                },
              }),
            this.state.bCanPowerOffVRController &&
              i.createElement(p, {
                label: Object(c.b)("#PowerMenuTurnOffController"),
                onClick: () => {
                  this.TurnOffVRController(), this.DismissDashboard();
                },
              }),
            this.state.bSceneAppRunning &&
              i.createElement(p, {
                label: e,
                onClick: () => {
                  this.QuitSceneApp(), this.DismissDashboard();
                },
              }),
            i.createElement(p, {
              label: Object(c.b)("#PowerMenuExitVR"),
              onClick: () => {
                this.QuitOpenVR();
              },
            }),
            i.createElement(p, {
              label: Object(c.b)("#PowerMenuCancel"),
              onClick: () => {
                this.DismissDashboard();
              },
            }),
          ),
        );
      }
    };
    Object(n.b)([s.bind], f.prototype, "Tick", null),
      Object(n.b)([s.bind], f.prototype, "OnOverlayStateChanged", null),
      Object(n.b)([s.bind], f.prototype, "DismissDashboard", null),
      Object(n.b)([s.bind], f.prototype, "QuitOpenVR", null),
      Object(n.b)([s.bind], f.prototype, "QuitSceneApp", null),
      Object(n.b)([s.bind], f.prototype, "TurnOffVRController", null),
      Object(n.b)([s.bind], f.prototype, "ResetSeatedOrigin", null),
      (f = Object(n.b)([a.a], f));
    let h = null;
    u.a.IsAvailable() &&
      (u.a.VROverlay.ThisOverlayHandle() != l.k_ulOverlayHandleInvalid &&
        (u.a.VROverlay.SetWidthInMeters(u.a.VROverlay.ThisOverlayHandle(), 1.5),
        u.a.VROverlay.SetFlag(
          u.a.VROverlay.ThisOverlayHandle(),
          l.EVROverlayFlags.NoDashboardTab,
          !0,
        ),
        u.a.VROverlay.SetInputMethod(
          u.a.VROverlay.ThisOverlayHandle(),
          l.EVROverlayInputMethod.Mouse,
        )),
      (h = u.a.GetSteamVRLanguage())),
      Object(c.a)([], h)
        .then(() => {
          o.render(i.createElement(f, null), document.getElementById("root"));
        })
        .catch((e) => console.error("Failed to initialize power menu:", e));
  },
  EUJ1: function (e, t, r) {
    window,
      (e.exports = (function (e) {
        var t = {};
        function r(n) {
          if (t[n]) return t[n].exports;
          var i = (t[n] = { i: n, l: !1, exports: {} });
          return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
        }
        return (
          (r.m = e),
          (r.c = t),
          (r.d = function (e, t, n) {
            r.o(e, t) ||
              Object.defineProperty(e, t, { enumerable: !0, get: n });
          }),
          (r.r = function (e) {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          }),
          (r.t = function (e, t) {
            if ((1 & t && (e = r(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (
              (r.r(n),
              Object.defineProperty(n, "default", { enumerable: !0, value: e }),
              2 & t && "string" != typeof e)
            )
              for (var i in e)
                r.d(
                  n,
                  i,
                  function (t) {
                    return e[t];
                  }.bind(null, i),
                );
            return n;
          }),
          (r.n = function (e) {
            var t =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return r.d(t, "a", t), t;
          }),
          (r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (r.p = ""),
          r((r.s = 4))
        );
      })([
        function (e, t, r) {
          "use strict";
          e.exports = r(2);
        },
        function (e, t, r) {
          "use strict";
          var n;
          function i(e, t, r) {
            if (!r || typeof r.value !== n.typeOfFunction)
              throw new TypeError(
                "Only methods can be decorated with @bind. <" +
                  t +
                  "> is not a method!",
              );
            return {
              configurable: n.boolTrue,
              get: function () {
                var e = r.value.bind(this);
                return (
                  Object.defineProperty(this, t, {
                    value: e,
                    configurable: n.boolTrue,
                    writable: n.boolTrue,
                  }),
                  e
                );
              },
            };
          }
          Object.defineProperty(t, "__esModule", { value: !0 }),
            (function (e) {
              (e.typeOfFunction = "function"), (e.boolTrue = !0);
            })(n || (n = {})),
            (t.bind = i),
            (t.default = i);
        },
        function (e, t, r) {
          "use strict";
          /** @license React v16.10.2
           * react.production.min.js
           *
           * Copyright (c) Facebook, Inc. and its affiliates.
           *
           * This source code is licensed under the MIT license found in the
           * LICENSE file in the root directory of this source tree.
           */ var n = r(3),
            i = "function" == typeof Symbol && Symbol.for,
            o = i ? Symbol.for("react.element") : 60103,
            a = i ? Symbol.for("react.portal") : 60106,
            s = i ? Symbol.for("react.fragment") : 60107,
            l = i ? Symbol.for("react.strict_mode") : 60108,
            u = i ? Symbol.for("react.profiler") : 60114,
            c = i ? Symbol.for("react.provider") : 60109,
            d = i ? Symbol.for("react.context") : 60110,
            p = i ? Symbol.for("react.forward_ref") : 60112,
            f = i ? Symbol.for("react.suspense") : 60113,
            h = i ? Symbol.for("react.suspense_list") : 60120,
            m = i ? Symbol.for("react.memo") : 60115,
            _ = i ? Symbol.for("react.lazy") : 60116;
          i && Symbol.for("react.fundamental"),
            i && Symbol.for("react.responder"),
            i && Symbol.for("react.scope");
          var y = "function" == typeof Symbol && Symbol.iterator;
          function g(e) {
            for (
              var t = e.message,
                r =
                  "https://reactjs.org/docs/error-decoder.html?invariant=" + t,
                n = 1;
              n < arguments.length;
              n++
            )
              r += "&args[]=" + encodeURIComponent(arguments[n]);
            return (
              (e.message =
                "Minified React error #" +
                t +
                "; visit " +
                r +
                " for the full message or use the non-minified dev environment for full errors and additional helpful warnings. "),
              e
            );
          }
          var v = {
              isMounted: function () {
                return !1;
              },
              enqueueForceUpdate: function () {},
              enqueueReplaceState: function () {},
              enqueueSetState: function () {},
            },
            S = {};
          function b(e, t, r) {
            (this.props = e),
              (this.context = t),
              (this.refs = S),
              (this.updater = r || v);
          }
          function D() {}
          function R(e, t, r) {
            (this.props = e),
              (this.context = t),
              (this.refs = S),
              (this.updater = r || v);
          }
          (b.prototype.isReactComponent = {}),
            (b.prototype.setState = function (e, t) {
              if ("object" != typeof e && "function" != typeof e && null != e)
                throw g(Error(85));
              this.updater.enqueueSetState(this, e, t, "setState");
            }),
            (b.prototype.forceUpdate = function (e) {
              this.updater.enqueueForceUpdate(this, e, "forceUpdate");
            }),
            (D.prototype = b.prototype);
          var C = (R.prototype = new D());
          (C.constructor = R), n(C, b.prototype), (C.isPureReactComponent = !0);
          var I = { current: null },
            x = { suspense: null },
            w = { current: null },
            P = Object.prototype.hasOwnProperty,
            M = { key: !0, ref: !0, __self: !0, __source: !0 };
          function O(e, t, r) {
            var n,
              i = {},
              a = null,
              s = null;
            if (null != t)
              for (n in (void 0 !== t.ref && (s = t.ref),
              void 0 !== t.key && (a = "" + t.key),
              t))
                P.call(t, n) && !M.hasOwnProperty(n) && (i[n] = t[n]);
            var l = arguments.length - 2;
            if (1 === l) i.children = r;
            else if (1 < l) {
              for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
              i.children = u;
            }
            if (e && e.defaultProps)
              for (n in (l = e.defaultProps)) void 0 === i[n] && (i[n] = l[n]);
            return {
              $$typeof: o,
              type: e,
              key: a,
              ref: s,
              props: i,
              _owner: w.current,
            };
          }
          function T(e) {
            return "object" == typeof e && null !== e && e.$$typeof === o;
          }
          var F = /\/+/g,
            V = [];
          function A(e, t, r, n) {
            if (V.length) {
              var i = V.pop();
              return (
                (i.result = e),
                (i.keyPrefix = t),
                (i.func = r),
                (i.context = n),
                (i.count = 0),
                i
              );
            }
            return { result: e, keyPrefix: t, func: r, context: n, count: 0 };
          }
          function k(e) {
            (e.result = null),
              (e.keyPrefix = null),
              (e.func = null),
              (e.context = null),
              (e.count = 0),
              10 > V.length && V.push(e);
          }
          function E(e, t, r) {
            return null == e
              ? 0
              : (function e(t, r, n, i) {
                  var s = typeof t;
                  ("undefined" !== s && "boolean" !== s) || (t = null);
                  var l = !1;
                  if (null === t) l = !0;
                  else
                    switch (s) {
                      case "string":
                      case "number":
                        l = !0;
                        break;
                      case "object":
                        switch (t.$$typeof) {
                          case o:
                          case a:
                            l = !0;
                        }
                    }
                  if (l) return n(i, t, "" === r ? "." + B(t, 0) : r), 1;
                  if (
                    ((l = 0), (r = "" === r ? "." : r + ":"), Array.isArray(t))
                  )
                    for (var u = 0; u < t.length; u++) {
                      var c = r + B((s = t[u]), u);
                      l += e(s, c, n, i);
                    }
                  else if (
                    "function" ==
                    typeof (c =
                      null === t || "object" != typeof t
                        ? null
                        : "function" ==
                            typeof (c = (y && t[y]) || t["@@iterator"])
                          ? c
                          : null)
                  )
                    for (t = c.call(t), u = 0; !(s = t.next()).done; )
                      l += e((s = s.value), (c = r + B(s, u++)), n, i);
                  else if ("object" === s)
                    throw (
                      ((n = "" + t),
                      g(
                        Error(31),
                        "[object Object]" === n
                          ? "object with keys {" +
                              Object.keys(t).join(", ") +
                              "}"
                          : n,
                        "",
                      ))
                    );
                  return l;
                })(e, "", t, r);
          }
          function B(e, t) {
            return "object" == typeof e && null !== e && null != e.key
              ? (function (e) {
                  var t = { "=": "=0", ":": "=2" };
                  return (
                    "$" +
                    ("" + e).replace(/[=:]/g, function (e) {
                      return t[e];
                    })
                  );
                })(e.key)
              : t.toString(36);
          }
          function L(e, t) {
            e.func.call(e.context, t, e.count++);
          }
          function N(e, t, r) {
            var n = e.result,
              i = e.keyPrefix;
            (e = e.func.call(e.context, t, e.count++)),
              Array.isArray(e)
                ? U(e, n, r, function (e) {
                    return e;
                  })
                : null != e &&
                  (T(e) &&
                    (e = (function (e, t) {
                      return {
                        $$typeof: o,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      e,
                      i +
                        (!e.key || (t && t.key === e.key)
                          ? ""
                          : ("" + e.key).replace(F, "$&/") + "/") +
                        r,
                    )),
                  n.push(e));
          }
          function U(e, t, r, n, i) {
            var o = "";
            null != r && (o = ("" + r).replace(F, "$&/") + "/"),
              E(e, N, (t = A(t, o, n, i))),
              k(t);
          }
          function z() {
            var e = I.current;
            if (null === e) throw g(Error(321));
            return e;
          }
          var H = {
              Children: {
                map: function (e, t, r) {
                  if (null == e) return e;
                  var n = [];
                  return U(e, n, null, t, r), n;
                },
                forEach: function (e, t, r) {
                  if (null == e) return e;
                  E(e, L, (t = A(null, null, t, r))), k(t);
                },
                count: function (e) {
                  return E(
                    e,
                    function () {
                      return null;
                    },
                    null,
                  );
                },
                toArray: function (e) {
                  var t = [];
                  return (
                    U(e, t, null, function (e) {
                      return e;
                    }),
                    t
                  );
                },
                only: function (e) {
                  if (!T(e)) throw g(Error(143));
                  return e;
                },
              },
              createRef: function () {
                return { current: null };
              },
              Component: b,
              PureComponent: R,
              createContext: function (e, t) {
                return (
                  void 0 === t && (t = null),
                  ((e = {
                    $$typeof: d,
                    _calculateChangedBits: t,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                  }).Provider = { $$typeof: c, _context: e }),
                  (e.Consumer = e)
                );
              },
              forwardRef: function (e) {
                return { $$typeof: p, render: e };
              },
              lazy: function (e) {
                return { $$typeof: _, _ctor: e, _status: -1, _result: null };
              },
              memo: function (e, t) {
                return {
                  $$typeof: m,
                  type: e,
                  compare: void 0 === t ? null : t,
                };
              },
              useCallback: function (e, t) {
                return z().useCallback(e, t);
              },
              useContext: function (e, t) {
                return z().useContext(e, t);
              },
              useEffect: function (e, t) {
                return z().useEffect(e, t);
              },
              useImperativeHandle: function (e, t, r) {
                return z().useImperativeHandle(e, t, r);
              },
              useDebugValue: function () {},
              useLayoutEffect: function (e, t) {
                return z().useLayoutEffect(e, t);
              },
              useMemo: function (e, t) {
                return z().useMemo(e, t);
              },
              useReducer: function (e, t, r) {
                return z().useReducer(e, t, r);
              },
              useRef: function (e) {
                return z().useRef(e);
              },
              useState: function (e) {
                return z().useState(e);
              },
              Fragment: s,
              Profiler: u,
              StrictMode: l,
              Suspense: f,
              unstable_SuspenseList: h,
              createElement: O,
              cloneElement: function (e, t, r) {
                if (null == e) throw g(Error(267), e);
                var i = n({}, e.props),
                  a = e.key,
                  s = e.ref,
                  l = e._owner;
                if (null != t) {
                  if (
                    (void 0 !== t.ref && ((s = t.ref), (l = w.current)),
                    void 0 !== t.key && (a = "" + t.key),
                    e.type && e.type.defaultProps)
                  )
                    var u = e.type.defaultProps;
                  for (c in t)
                    P.call(t, c) &&
                      !M.hasOwnProperty(c) &&
                      (i[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c]);
                }
                var c = arguments.length - 2;
                if (1 === c) i.children = r;
                else if (1 < c) {
                  u = Array(c);
                  for (var d = 0; d < c; d++) u[d] = arguments[d + 2];
                  i.children = u;
                }
                return {
                  $$typeof: o,
                  type: e.type,
                  key: a,
                  ref: s,
                  props: i,
                  _owner: l,
                };
              },
              createFactory: function (e) {
                var t = O.bind(null, e);
                return (t.type = e), t;
              },
              isValidElement: T,
              version: "16.10.2",
              unstable_withSuspenseConfig: function (e, t) {
                var r = x.suspense;
                x.suspense = void 0 === t ? null : t;
                try {
                  e();
                } finally {
                  x.suspense = r;
                }
              },
              __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
                ReactCurrentDispatcher: I,
                ReactCurrentBatchConfig: x,
                ReactCurrentOwner: w,
                IsSomeRendererActing: { current: !1 },
                assign: n,
              },
            },
            G = { default: H },
            W = (G && H) || G;
          e.exports = W.default || W;
        },
        function (e, t, r) {
          "use strict";
          /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var n = Object.getOwnPropertySymbols,
            i = Object.prototype.hasOwnProperty,
            o = Object.prototype.propertyIsEnumerable;
          function a(e) {
            if (null == e)
              throw new TypeError(
                "Object.assign cannot be called with null or undefined",
              );
            return Object(e);
          }
          e.exports = (function () {
            try {
              if (!Object.assign) return !1;
              var e = new String("abc");
              if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
                return !1;
              for (var t = {}, r = 0; r < 10; r++)
                t["_" + String.fromCharCode(r)] = r;
              if (
                "0123456789" !==
                Object.getOwnPropertyNames(t)
                  .map(function (e) {
                    return t[e];
                  })
                  .join("")
              )
                return !1;
              var n = {};
              return (
                "abcdefghijklmnopqrst".split("").forEach(function (e) {
                  n[e] = e;
                }),
                "abcdefghijklmnopqrst" ===
                  Object.keys(Object.assign({}, n)).join("")
              );
            } catch (e) {
              return !1;
            }
          })()
            ? Object.assign
            : function (e, t) {
                for (var r, s, l = a(e), u = 1; u < arguments.length; u++) {
                  for (var c in (r = Object(arguments[u])))
                    i.call(r, c) && (l[c] = r[c]);
                  if (n) {
                    s = n(r);
                    for (var d = 0; d < s.length; d++)
                      o.call(r, s[d]) && (l[s[d]] = r[s[d]]);
                  }
                }
                return l;
              };
        },
        function (e, t, r) {
          "use strict";
          function n(e, t, r, n) {
            var i,
              o = arguments.length,
              a =
                o < 3
                  ? t
                  : null === n
                    ? (n = Object.getOwnPropertyDescriptor(t, r))
                    : n;
            if (
              "object" == typeof Reflect &&
              "function" == typeof Reflect.decorate
            )
              a = Reflect.decorate(e, t, r, n);
            else
              for (var s = e.length - 1; s >= 0; s--)
                (i = e[s]) &&
                  (a = (o < 3 ? i(a) : o > 3 ? i(t, r, a) : i(t, r)) || a);
            return o > 3 && a && Object.defineProperty(t, r, a), a;
          }
          function i(e, t, r, n) {
            return new (r || (r = Promise))(function (i, o) {
              function a(e) {
                try {
                  l(n.next(e));
                } catch (e) {
                  o(e);
                }
              }
              function s(e) {
                try {
                  l(n.throw(e));
                } catch (e) {
                  o(e);
                }
              }
              function l(e) {
                e.done
                  ? i(e.value)
                  : new r(function (t) {
                      t(e.value);
                    }).then(a, s);
              }
              l((n = n.apply(e, t || [])).next());
            });
          }
          r.r(t);
          var o = r(1);
          class a {
            constructor() {
              (this.m_wsWebSocketToServer = void 0),
                (this.m_oHandlers = {}),
                (this.m_oWaits = {}),
                (this.m_fnConnectResolve = void 0);
            }
            OpenWebSocketToHost() {
              return new Promise((e, t) => {
                console.log("Connecting..."),
                  (this.m_fnConnectResolve = e),
                  (this.m_wsWebSocketToServer = new WebSocket(
                    "ws://" + window.location.host,
                  )),
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
            Init(e) {
              return i(this, void 0, void 0, function* () {
                return (
                  (this.m_sMailboxName = e),
                  (this.connected = !1),
                  this.OpenWebSocketToHost()
                );
              });
            }
            OnWebSocketOpen(e) {
              (this.connected = !0),
                this.WebSocketSend("mailbox_open " + this.m_sMailboxName),
                window.addEventListener("beforeunload", () => {
                  this.WebSocketSend("websocket_close");
                }),
                this.m_fnConnectResolve &&
                  (this.m_fnConnectResolve(),
                  (this.m_fnConnectResolve = void 0));
            }
            OnWebSocketClose(e) {
              console.log("Lost connection to host..."),
                (this.connected = !1),
                this.OpenWebSocketToHost();
            }
            WebSocketSend(e) {
              null != this.m_wsWebSocketToServer &&
                1 == this.m_wsWebSocketToServer.readyState &&
                this.m_wsWebSocketToServer.send(e);
            }
            OnWebSocketMessage(e) {
              let t = JSON.parse(e.data),
                r = !1;
              if (
                (this.m_oHandlers.hasOwnProperty(t.type) &&
                  (this.m_oHandlers[t.type](t), (r = !0)),
                this.m_oWaits.hasOwnProperty(t.type))
              ) {
                for (let e of this.m_oWaits[t.type]) e(t);
                (this.m_oWaits[t.type] = []), (r = !0);
              }
              r || console.log("Received unhandled message: ", t);
            }
            RegisterHandler(e, t) {
              this.m_oHandlers[e] = t;
            }
            SendMessage(e, t) {
              this.WebSocketSend("mailbox_send " + e + " " + JSON.stringify(t));
            }
            WaitForMessage(e) {
              return new Promise((t, r) => {
                this.m_oWaits[e] || (this.m_oWaits[e] = []),
                  this.m_oWaits[e].push(t);
              });
            }
            SendMessageAndWaitForResponse(e, t, r) {
              let n = Object.assign({}, t);
              return (
                null == n.returnAddress &&
                  (n.returnAddress = this.m_sMailboxName),
                this.SendMessage(e, n),
                this.WaitForMessage(r)
              );
            }
          }
          function s() {
            return {
              translation: { x: 0, y: 0, z: 0 },
              rotation: { w: 1, x: 0, y: 0, z: 0 },
              scale: { x: 1, y: 1, z: 1 },
            };
          }
          function l(e, t) {
            return { x: e.x + t.x, y: e.y + t.y, z: e.z + t.z };
          }
          function u(e, t) {
            return { x: e.x - t.x, y: e.y - t.y, z: e.z - t.z };
          }
          function c(e, t) {
            return { x: e.x * t.x, y: e.y * t.y, z: e.z * t.z };
          }
          function d(e, t) {
            return { x: e.x * t, y: e.y * t, z: e.z * t };
          }
          function p(e) {
            return Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z);
          }
          function f(e) {
            if (void 0 === e) return;
            let t = 0.5 * e.x,
              r = 0.5 * e.y,
              n = 0.5 * e.z,
              i = Math.cos(t),
              o = Math.cos(r),
              a = Math.cos(n),
              s = Math.sin(t),
              l = Math.sin(r),
              u = Math.sin(n);
            return {
              w: i * o * a + s * l * u,
              x: s * o * a + i * l * u,
              y: i * l * a - s * o * u,
              z: i * o * u - s * l * a,
            };
          }
          function h(e) {
            let t = p(e);
            if (0 == t) return { w: 1, x: 0, y: 0, z: 0 };
            {
              let r = 0.5 * t,
                n = Math.sin(r) / t;
              return { w: Math.cos(r), x: n * e.x, y: n * e.y, z: n * e.z };
            }
          }
          function m(e) {
            let t = [];
            for (let r = 0; r < e.length; r++)
              for (let n = 0; n < e[r].length; n++)
                0 == r && (t[n] = []), (t[n][r] = e[r][n]);
            return t;
          }
          function _(e) {
            let t = e[0][0] + e[1][1] + e[2][2];
            if (t > 0) {
              let r = 2 * Math.sqrt(t + 1);
              return {
                w: 0.25 * r,
                x: (e[1][2] - e[2][1]) / r,
                y: (e[2][0] - e[0][2]) / r,
                z: (e[0][1] - e[1][0]) / r,
              };
            }
            if (e[0][0] > e[1][1] && e[0][0] > e[2][2]) {
              let t = 2 * Math.sqrt(1 + e[0][0] - e[1][1] - e[2][2]);
              return {
                w: (e[1][2] - e[2][1]) / t,
                x: 0.25 * t,
                y: (e[1][0] + e[0][1]) / t,
                z: (e[2][2] + e[0][2]) / t,
              };
            }
            if (e[1][1] > e[2][2]) {
              let t = 2 * Math.sqrt(1 + e[1][1] - e[0][0] - e[2][2]);
              return {
                w: (e[2][0] - e[0][2]) / t,
                x: (e[1][0] + e[0][1]) / t,
                y: 0.25 * t,
                z: (e[2][1] + e[1][2]) / t,
              };
            }
            {
              let t = 2 * Math.sqrt(1 + e[2][2] - e[0][0] - e[1][1]);
              return {
                w: (e[0][1] - e[1][0]) / t,
                x: (e[2][0] + e[0][2]) / t,
                y: (e[2][1] + e[1][2]) / t,
                z: 0.25 * t,
              };
            }
          }
          function y(e, t) {
            let r = 2 * (e.y * t.z - e.z * t.y),
              n = 2 * (e.z * t.x - e.x * t.z),
              i = 2 * (e.x * t.y - e.y * t.x);
            return {
              x: t.x + e.w * r + e.y * i - e.z * n,
              y: t.y + e.w * n + e.z * r - e.x * i,
              z: t.z + e.w * i + e.x * n - e.y * r,
            };
          }
          function g(e, t) {
            return {
              w: t.w * e.w - t.x * e.x - t.y * e.y - t.z * e.z,
              x: t.w * e.x + t.x * e.w - t.y * e.z + t.z * e.y,
              y: t.w * e.y + t.x * e.z + t.y * e.w - t.z * e.x,
              z: t.w * e.z - t.x * e.y + t.y * e.x + t.z * e.w,
            };
          }
          function v(e, t, r) {
            return [
              [e.x, e.y, e.z],
              [t.x, t.y, t.z],
              [r.x, r.y, r.z],
            ];
          }
          function S(e) {
            return y(e.rotation, { x: 0, y: 0, z: 1 });
          }
          function b(e) {
            let t = p(e);
            return { x: e.x / t, y: e.y / t, z: e.z / t };
          }
          function D(e) {
            return { x: -e.x, y: -e.y, z: -e.z };
          }
          function R(e, t) {
            return {
              x: e.y * t.z - e.z * t.y,
              y: e.z * t.x - e.x * t.z,
              z: e.x * t.y - e.y * t.x,
            };
          }
          function C(e, t) {
            return e.x * t.x + e.y * t.y + e.z * t.z;
          }
          function I(e) {
            return { w: e.w, x: -e.x, y: -e.y, z: -e.z };
          }
          function x(e) {
            let t = e.w * e.w + e.x * e.x + e.y * e.y + e.z * e.z;
            return { w: e.w / t, x: -e.x / t, y: -e.y / t, z: -e.z / t };
          }
          function w(e) {
            const t = { x: 0, y: 1, z: 0 };
            let r = y(e.rotation, { x: 0, y: 0, z: -1 });
            (r.y = 0), (r = b(r));
            const n = v(b(R(r, t)), t, D(r));
            return {
              translation: e.translation,
              rotation: _(n),
              scale: e.scale,
            };
          }
          n([o.bind], a.prototype, "OpenWebSocketToHost", null),
            n([o.bind], a.prototype, "OnWebSocketOpen", null),
            n([o.bind], a.prototype, "OnWebSocketClose", null),
            n([o.bind], a.prototype, "WebSocketSend", null),
            n([o.bind], a.prototype, "OnWebSocketMessage", null);
          var P = r(0);
          function M(e, t) {
            let r = e.getAttribute(t);
            if (r && r.length > 0) {
              if ("undefined" == r) return;
              let e = [];
              for (let t of r.split(" "))
                0 != t.length && e.push(parseFloat(t));
              if (e.length > 0) return e;
            }
          }
          function O(e, t) {
            let r = e.getAttribute(t);
            if (r && r.length > 0) return parseFloat(r);
          }
          function T(e, t) {
            let r = e.getAttribute(t);
            if (r && r.length > 0) return parseInt(r);
          }
          function F(e, t) {
            let r = e.getAttribute(t);
            if (r && r.length > 0)
              return (
                "true" == r ||
                (r.length > 0 && 0 != parseInt(r) && !isNaN(parseInt(r)))
              );
          }
          function V(e, t) {
            let r = e.getAttribute(t);
            if (r && r.length > 0) return r;
          }
          function A(e, t) {
            let r = { type: e, properties: {} };
            return (
              t.id && (r.properties.id = t.id),
              (r.properties.sgid = T(t, "sgid")),
              r
            );
          }
          function k(e) {
            let t = (function e(t) {
              let r = (function (e) {
                  let t;
                  switch (e.nodeName.toUpperCase()) {
                    case "VSG-TRANSFORM":
                      return (
                        ((t = A("transform", e)).properties.translation = M(
                          e,
                          "translation",
                        )),
                        (t.properties.rotation = M(e, "rotation")),
                        (t.properties.scale = M(e, "scale")),
                        (t.properties["parent-path"] = V(e, "parent-path")),
                        (t.properties["parent-origin"] = V(e, "parent-origin")),
                        t
                      );
                    case "VSG-TRACKING-STATE-VISIBILITY":
                      return (
                        ((t = A("trackingstatevisibility", e)).properties[
                          "visible-0dof"
                        ] = F(e, "visible-0dof")),
                        (t.properties["visible-3dof"] = F(e, "visible-3dof")),
                        (t.properties["visible-6dof"] = F(e, "visible-6dof")),
                        t
                      );
                    case "VSG-ELASTIC-HEAD-TRANSFORM":
                      return (
                        ((t = A("elasticheadtransform", e)).properties[
                          "start-angle-threshold"
                        ] = O(e, "start-angle-threshold")),
                        (t.properties["stop-angle-threshold"] = O(
                          e,
                          "stop-angle-threshold",
                        )),
                        (t.properties["ease-in-time"] = O(e, "ease-in-time")),
                        (t.properties["ease-in-power"] = O(e, "ease-in-power")),
                        (t.properties["ease-out-angle-threshold"] = O(
                          e,
                          "ease-out-angle-threshold",
                        )),
                        (t.properties["ease-out-power"] = O(
                          e,
                          "ease-out-power",
                        )),
                        (t.properties["min-angular-velocity"] = O(
                          e,
                          "min-angular-velocity",
                        )),
                        (t.properties["max-angular-velocity"] = O(
                          e,
                          "max-angular-velocity",
                        )),
                        (t.properties["lock-to-horizon"] = F(
                          e,
                          "lock-to-horizon",
                        )),
                        (t.properties["translation-behavior"] = T(
                          e,
                          "translation-behavior",
                        )),
                        t
                      );
                    case "VSG-RENDERMODEL":
                      return (
                        ((t = A("rendermodel", e)).properties.source = V(
                          e,
                          "source",
                        )),
                        t
                      );
                    case "VSG-PANEL":
                      t = A("panel", e);
                      let r = e.getAttribute("overlay-key");
                      return (
                        r && r.length > 0
                          ? (t.properties.key = r)
                          : E
                            ? (t.properties.key = E)
                            : (t.properties.overlay_handle =
                                VRHTML.IsAvailable()
                                  ? VRHTML.VROverlay.ThisOverlayHandle()
                                  : void 0),
                        (t.properties.uv_min = M(e, "uv-min")),
                        (t.properties.uv_max = M(e, "uv-max")),
                        (t.properties.width = O(e, "width")),
                        (t.properties.height = O(e, "height")),
                        (t.properties.curvature = O(e, "curvature")),
                        (t.properties["curvature-origin-id"] = V(
                          e,
                          "curvature-origin-id",
                        )),
                        (t.properties.interactive = F(e, "interactive")),
                        (t.properties.scrollable = F(e, "scrollable")),
                        (t.properties["embedded-uv-index"] = T(
                          e,
                          "embedded-uv-index",
                        )),
                        (t.properties.origin = M(e, "origin")),
                        t
                      );
                    case "VSG-LINE":
                      return (
                        ((t = A("line", e)).properties["target-id"] = V(
                          e,
                          "target-id",
                        )),
                        (t.properties.thickness = O(e, "thickness")),
                        (t.properties["start-buffer"] = O(e, "start-buffer")),
                        (t.properties["end-buffer"] = O(e, "end-buffer")),
                        t
                      );
                    case "VSG-LINE-CONSTRAINED-TRANSFORM":
                      return (
                        ((t = A("line-constrained-transform", e)).properties[
                          "target-id"
                        ] = V(e, "target-id")),
                        (t.properties["source-id"] = V(e, "source-id")),
                        (t.properties["source-distance"] = O(
                          e,
                          "source-distance",
                        )),
                        (t.properties["target-limit"] = O(e, "target-limit")),
                        t
                      );
                    case "VSG-CALLOUT-TRANSFORM":
                      return (
                        ((t = A("callout-transform", e)).properties.offset = M(
                          e,
                          "offset",
                        )),
                        t
                      );
                    case "VSG-HEAD-FACING-TRANSFORM":
                      return A("head-facing-transform", e);
                    case "VSG-PIN-TO-VIEW-TRANSFORM":
                      return (
                        ((t = A("pin-to-view-transform", e)).properties[
                          "offscreen-z-depth"
                        ] = O(e, "offscreen-z-depth")),
                        (t.properties["off-axis-limit"] = O(
                          e,
                          "off-axis-limit",
                        )),
                        (t.properties["transition-limit"] = O(
                          e,
                          "transition-limit",
                        )),
                        t
                      );
                    case "VSG-PANEL-ANCHOR":
                      t = A("panel-anchor", e);
                      let n = e.getBoundingClientRect(),
                        i = document.defaultView.innerWidth,
                        o = document.defaultView.innerHeight;
                      return (
                        o > 0 &&
                          i > 0 &&
                          ((t.properties["anchor-u"] =
                            (n.left + n.width / 2) / i),
                          (t.properties["anchor-v"] =
                            (n.top + n.height / 2) / o)),
                        t
                      );
                    default:
                      return null;
                  }
                })(t),
                n = [];
              for (let r = 0; r < t.children.length; r++) {
                let i = t.children.item(r);
                if (i instanceof HTMLElement) {
                  let t = e(i);
                  t && (n = n.concat(t));
                }
              }
              return r
                ? (n.length > 0 && (r.children = n), [r])
                : n.length > 0
                  ? 1 == n.length
                    ? n
                    : [{ type: "transform", children: n }]
                  : null;
            })(e);
            return t
              ? 1 == t.length
                ? t[0]
                : { type: "transform", children: t }
              : null;
          }
          let E,
            B = [],
            L = null,
            N = null;
          function U(e) {
            E = e;
          }
          function z(e) {
            B.push(e), H();
          }
          function H() {
            L ||
              (L = window.setTimeout(
                () =>
                  i(this, void 0, void 0, function* () {
                    let e = k(document.body);
                    if (VRHTML.IsAvailable()) {
                      let t = JSON.stringify(e);
                      VRHTML.UpdateSceneGraph(t, B);
                    } else {
                      N || ((N = new a()), yield N.Init("sg_mailbox"));
                      let t = {
                        type: "update_scene_graph",
                        owning_overlay_key: E,
                        scene_graph: e,
                        retired_sgids: B,
                      };
                      N.SendMessage("vrcompositor_mailbox", t);
                    }
                    (L = null), (B = []);
                  }),
                0,
              ));
          }
          function G(e, t) {
            return e ? { x: e.x ? e.x : t.x, y: e.y ? e.y : t.y } : t;
          }
          function W(e, t) {
            return e
              ? { x: e.x ? e.x : t.x, y: e.y ? e.y : t.y, z: e.z ? e.z : t.z }
              : t;
          }
          function j(e) {
            if (e) return e.x + " " + e.y;
          }
          function q(e) {
            if (e) return e.x + " " + e.y + " " + e.z;
          }
          function Q(e) {
            if (e) return e.w + " " + e.x + " " + e.y + " " + e.z;
          }
          class $ extends P.Component {
            constructor(e) {
              super(e),
                (this.m_SGID = $.s_NextSGID),
                ($.s_NextSGID = ($.s_NextSGID + 1) % 4294967296);
            }
            getSGID() {
              return this.m_SGID;
            }
            componentDidMount() {
              H();
            }
            componentDidUpdate() {
              H();
            }
            componentWillUnmount() {
              z(this.m_SGID);
            }
            render() {
              return P.cloneElement(this.internalRender(), {
                id: this.props.id,
                sgid: this.m_SGID,
              });
            }
            internalRender() {
              return null;
            }
          }
          var X, K, J, Y, Z, ee, te, re, ne, ie, oe, ae, se, le, ue, ce, de, pe;
          ($.s_NextSGID = 1),
            (function (e) {
              (e[(e.Seated = 0)] = "Seated"),
                (e[(e.Standing = 1)] = "Standing"),
                (e[(e.Raw = 2)] = "Raw");
            })(X || (X = {}));
          class fe extends $ {
            constructor(e) {
              super(e);
            }
            internalRender() {
              let e, t, r;
              this.props.transform
                ? ((e = this.props.transform.translation),
                  (t = this.props.transform.rotation),
                  (r = this.props.transform.scale))
                : ((e = W(this.props.translation, { x: 0, y: 0, z: 0 })),
                  (t = f(
                    d(
                      W(this.props.rotation, { x: 0, y: 0, z: 0 }),
                      Math.PI / 180,
                    ),
                  )),
                  (r =
                    "number" == typeof this.props.scale
                      ? {
                          x: this.props.scale,
                          y: this.props.scale,
                          z: this.props.scale,
                        }
                      : W(this.props.scale, { x: 1, y: 1, z: 1 })));
              let n = q(e),
                i = Q(t),
                o = q(r);
              return P.createElement(
                "vsg-transform",
                {
                  translation: n,
                  rotation: i,
                  scale: o,
                  "parent-path": this.props.parent_path,
                  "parent-origin": X[this.props.parent_origin],
                },
                this.props.children,
              );
            }
          }
          class he extends $ {
            constructor(e) {
              super(e);
            }
            internalRender() {
              return P.createElement(
                "vsg-tracking-state-visibility",
                {
                  "visible-0dof": this.props.visibleIn0DOF,
                  "visible-3dof": this.props.visibleIn3DOF,
                  "visible-6dof": this.props.visibleIn6DOF,
                },
                this.props.children,
              );
            }
          }
          function me(e) {
            if (e) return e.u + " " + e.v;
          }
          !(function (e) {
            (e[(e.TopLeft = 0)] = "TopLeft"),
              (e[(e.TopCenter = 1)] = "TopCenter"),
              (e[(e.TopRight = 2)] = "TopRight"),
              (e[(e.CenterLeft = 3)] = "CenterLeft"),
              (e[(e.Center = 4)] = "Center"),
              (e[(e.CenterRight = 5)] = "CenterRight"),
              (e[(e.BottomLeft = 6)] = "BottomLeft"),
              (e[(e.BottomCenter = 7)] = "BottomCenter"),
              (e[(e.BottomRight = 8)] = "BottomRight");
          })(K || (K = {}));
          class _e extends $ {
            constructor(e) {
              super(e),
                (this.m_domRef = null),
                (this.m_Rect = { x: 0, y: 0, width: 0, height: 0 }),
                (this.m_nEmbeddedIndex = null),
                (this.m_nEmbeddedIndex = ye
                  .Current()
                  .addEmbeddedPanelUVs(this)),
                (this.m_domRef = P.createRef());
            }
            isExternal() {
              return !!this.props.overlay_key;
            }
            getEmbeddedIndex() {
              return this.m_nEmbeddedIndex;
            }
            componentWillReceiveProps() {
              _e.s_bPanelsAreDirty = !0;
            }
            componentDidMount() {
              (_e.s_bPanelsAreDirty = !0), super.componentDidMount();
            }
            componentWillUnmount() {
              (_e.s_bPanelsAreDirty = !0),
                ye.Current().removeEmbeddedPanelUVs(this),
                super.componentWillUnmount();
            }
            updateLayoutValues() {
              if (this.props.overlay_key)
                return (
                  this.m_domRef.current.setAttribute(
                    "uv-min",
                    me(this.props.uv_min),
                  ),
                  void this.m_domRef.current.setAttribute(
                    "uv-max",
                    me(this.props.uv_max),
                  )
                );
              this.m_Rect = this.m_domRef.current.getBoundingClientRect();
              let e = {
                  u: this.m_Rect.x / window.outerWidth,
                  v: this.m_Rect.y / window.outerHeight,
                },
                t = {
                  u: (this.m_Rect.x + this.m_Rect.width) / window.outerWidth,
                  v: (this.m_Rect.y + this.m_Rect.height) / window.outerHeight,
                };
              this.m_domRef.current.setAttribute("uv-min", me(e)),
                this.m_domRef.current.setAttribute("uv-max", me(t));
            }
            internalRender() {
              let e = { x: 0, y: 0 };
              if ("object" == typeof this.props.origin)
                e = G(this.props.origin, { x: 0, y: 0 });
              else
                switch (this.props.origin) {
                  case K.TopLeft:
                    e = { x: -1, y: 1 };
                    break;
                  case K.TopCenter:
                    e = { x: 0, y: 1 };
                    break;
                  case K.TopRight:
                    e = { x: 1, y: 1 };
                    break;
                  case K.CenterLeft:
                    e = { x: -1, y: 0 };
                    break;
                  case K.Center:
                    e = { x: 0, y: 0 };
                    break;
                  case K.CenterRight:
                    e = { x: 1, y: 0 };
                    break;
                  case K.BottomLeft:
                    e = { x: -1, y: -1 };
                    break;
                  case K.BottomCenter:
                    e = { x: 0, y: -1 };
                    break;
                  case K.BottomRight:
                    e = { x: 1, y: -1 };
                }
              return P.createElement(
                "vsg-panel",
                {
                  ref: this.m_domRef,
                  "overlay-key": this.props.overlay_key,
                  "uv-min": me(this.props.uv_min),
                  "uv-max": me(this.props.uv_max),
                  "embedded-uv-index": this.m_nEmbeddedIndex.toString(),
                  width: this.props.width,
                  height: this.props.height,
                  curvature: this.props.curvature,
                  "curvature-origin-id": this.props.curvature_origin_id,
                  interactive: this.props.interactive,
                  scrollable: this.props.scrollable,
                  origin: j(e),
                },
                this.props.children,
              );
            }
          }
          _e.s_bPanelsAreDirty = !1;
          class ye extends P.Component {
            constructor(e) {
              super(e),
                (this.m_DomRef = null),
                (this.m_scalingDomRef = null),
                (this.m_CanvasRef = null),
                (this.m_DebugPointerRef = null),
                (this.m_Observer = null),
                (this.m_nEmbeddedDataWidth = 0),
                (this.m_nPixelX = 0),
                (this.m_CanvasContext = null),
                (this.m_Pixels = null),
                (this.m_mapPanels = new Map()),
                (this.m_rAvailableEmbeddedIndicesQueue = []),
                (this.m_rEmbeddedIndicesToClear = []),
                (this.m_nDirtyXMin = -1),
                (this.m_nDirtyXMax = -1),
                (this.m_fCurrentScale = 1),
                (ye.s_Current = this),
                (this.state = {
                  bFontsLoaded: !1,
                  nForcedUpdateNumber: 0,
                  bShowDebugPointer: !1,
                }),
                this.props.owning_overlay_key &&
                  U(this.props.owning_overlay_key),
                (this.m_DomRef = P.createRef()),
                (this.m_scalingDomRef = P.createRef()),
                (this.m_CanvasRef = P.createRef()),
                (this.m_DebugPointerRef = P.createRef()),
                (this.m_nEmbeddedDataWidth = window.outerWidth);
              let t = Math.max(
                0,
                Math.floor((this.m_nEmbeddedDataWidth - 1) / 3),
              );
              for (let e = 0; e < t; e++)
                this.m_rAvailableEmbeddedIndicesQueue.push(e);
              document.addEventListener("mousemove", this.onMouseMove);
            }
            static Current() {
              return ye.s_Current;
            }
            toggleDebugPointer() {
              this.setState({
                bShowDebugPointer: !this.state.bShowDebugPointer,
              });
            }
            onMouseMove(e) {
              this.state.bShowDebugPointer &&
                this.m_DebugPointerRef.current &&
                (this.m_DebugPointerRef.current.style.transform =
                  "translateX( " +
                  e.clientX +
                  "px ) translateY( " +
                  e.clientY +
                  "px )");
            }
            forceLayoutUpdate() {
              (_e.s_bPanelsAreDirty = !0),
                this.setState({
                  nForcedUpdateNumber: this.state.nForcedUpdateNumber + 1,
                });
            }
            componentDidMount() {
              document.body.classList.add("SGApp"),
                (this.m_Observer = new MutationObserver(this.onMutation)),
                this.m_Observer.observe(this.m_DomRef.current, {
                  attributes: !0,
                  attributeFilter: ["sg-forced-update-number", "overlay-key"],
                  childList: !0,
                  subtree: !0,
                }),
                this.createEmbeddedData(),
                window.addEventListener("load", this.forceLayoutUpdate),
                document.fonts.ready.then(() =>
                  this.setState({ bFontsLoaded: !0 }),
                ),
                (window.forceLayoutUpdate = this.forceLayoutUpdate),
                (window.toggleDebugPointer = this.toggleDebugPointer);
            }
            componentWillUnmount() {
              document.body.classList.remove("SGApp"),
                this.m_Observer && this.m_Observer.disconnect(),
                document.removeEventListener("mousemove", this.onMouseMove);
            }
            render() {
              let e = [];
              return (
                this.state.bShowDebugPointer && e.push("ShowDebugPointer"),
                P.createElement(
                  "vsg-app",
                  {
                    class: e.join(" "),
                    ref: this.m_DomRef,
                    "sg-forced-update-number": this.state.nForcedUpdateNumber,
                  },
                  P.createElement("div", {
                    className: "DebugPointer",
                    ref: this.m_DebugPointerRef,
                  }),
                  P.createElement("canvas", {
                    ref: this.m_CanvasRef,
                    className: "EmbeddedData",
                    height: ye.k_EmbeddedDataRows,
                  }),
                  P.createElement(
                    "div",
                    { ref: this.m_scalingDomRef },
                    this.state.bFontsLoaded && this.props.children,
                  ),
                )
              );
            }
            addEmbeddedPanelUVs(e) {
              return 0 === this.m_rAvailableEmbeddedIndicesQueue.length
                ? null
                : (this.m_mapPanels.set(e.getSGID(), e),
                  this.m_rAvailableEmbeddedIndicesQueue.shift());
            }
            removeEmbeddedPanelUVs(e) {
              this.m_mapPanels.has(e.getSGID()) &&
                (this.m_mapPanels.delete(e.getSGID()),
                this.m_rAvailableEmbeddedIndicesQueue.push(
                  e.getEmbeddedIndex(),
                ),
                this.m_rEmbeddedIndicesToClear.push(e.getEmbeddedIndex()));
            }
            onMutation(e, t) {
              this.updateAllPanelBounds();
            }
            createEmbeddedData() {
              (this.m_CanvasRef.current.width = this.m_nEmbeddedDataWidth),
                (this.m_CanvasContext =
                  this.m_CanvasRef.current.getContext("2d")),
                (this.m_CanvasContext.globalCompositeOperation = "copy"),
                (this.m_CanvasContext.imageSmoothingEnabled = !1),
                null === this.m_Pixels &&
                  (this.m_Pixels = this.m_CanvasContext.createImageData(
                    this.m_nEmbeddedDataWidth,
                    ye.k_EmbeddedDataRows,
                  )),
                this.updateAllPanelBounds();
            }
            updateAllPanelBounds() {
              let e = this.m_scalingDomRef.current.getBoundingClientRect(),
                t = e.width / this.m_fCurrentScale,
                r = e.height / this.m_fCurrentScale,
                n = { x: window.innerWidth / t, y: window.innerHeight / r },
                i = Math.min(n.x, n.y, 1);
              i != this.m_fCurrentScale &&
                (1 != i
                  ? this.m_scalingDomRef.current.setAttribute(
                      "style",
                      "transform: scale(" + i + "); transform-origin: top left",
                    )
                  : this.m_scalingDomRef.current.removeAttribute("style"),
                (this.m_fCurrentScale = i),
                (_e.s_bPanelsAreDirty = !0)),
                _e.s_bPanelsAreDirty &&
                  (this.m_mapPanels.forEach((e) => e.updateLayoutValues()),
                  H(),
                  (_e.s_bPanelsAreDirty = !1),
                  this.updateEmbeddedData());
            }
            updateEmbeddedData() {
              if (!this.m_CanvasRef) return;
              (this.m_nPixelX = 0),
                this.setPixel(
                  0,
                  "V".charCodeAt(0),
                  "S".charCodeAt(0),
                  "G".charCodeAt(0),
                ),
                this.m_rEmbeddedIndicesToClear.forEach((e) => {
                  let t = 1 + 3 * e;
                  for (let e = 0; e < 3; e++) this.setPixel(t + e, 0, 0, 0, 0);
                }),
                (this.m_rEmbeddedIndicesToClear = []),
                this.m_mapPanels.forEach((e, t) => {
                  let r = e.m_Rect.x,
                    n = e.m_Rect.x + e.m_Rect.width,
                    i = e.m_Rect.y,
                    o = e.m_Rect.y + e.m_Rect.height,
                    a = 1 + 3 * e.getEmbeddedIndex();
                  if (e.isExternal())
                    for (let e = 0; e < 3; e++)
                      this.setPixel(a + 1, 0, 0, 0, 0);
                  else
                    this.setPixel(a, (65280 & r) >> 8, 255 & r, 0),
                      this.setPixel(a + 1, (65280 & n) >> 8, 255 & n, 255 & i),
                      this.setPixel(
                        a + 2,
                        (65280 & o) >> 8,
                        255 & o,
                        (65280 & i) >> 8,
                      );
                });
              let e = this.m_nDirtyXMax - this.m_nDirtyXMin + 1;
              this.m_CanvasContext.putImageData(
                this.m_Pixels,
                0,
                0,
                this.m_nDirtyXMin,
                0,
                e,
                this.m_Pixels.height,
              ),
                (this.m_nDirtyXMin = -1),
                (this.m_nDirtyXMax = -1);
            }
            setPixel(e, t, r, n, i = 255) {
              (this.m_Pixels.data[4 * e + 0] = t),
                (this.m_Pixels.data[4 * e + 1] = r),
                (this.m_Pixels.data[4 * e + 2] = n),
                (this.m_Pixels.data[4 * e + 3] = i),
                (-1 === this.m_nDirtyXMin || e < this.m_nDirtyXMin) &&
                  (this.m_nDirtyXMin = e),
                (-1 === this.m_nDirtyXMax || e > this.m_nDirtyXMax) &&
                  (this.m_nDirtyXMax = e);
            }
          }
          (ye.s_Current = null),
            (ye.k_EmbeddedDataRows = 1),
            n([o.bind], ye.prototype, "toggleDebugPointer", null),
            n([o.bind], ye.prototype, "onMouseMove", null),
            n([o.bind], ye.prototype, "forceLayoutUpdate", null),
            n([o.bind], ye.prototype, "onMutation", null);
          class ge extends $ {
            constructor(e) {
              super(e);
            }
            internalRender() {
              return P.createElement(
                "vsg-rendermodel",
                { source: this.props.source },
                this.props.children,
              );
            }
          }
          class ve extends $ {
            constructor(e) {
              super(e);
            }
            internalRender() {
              return P.createElement("vsg-line", {
                "target-id": this.props.target_id,
                thickness: this.props.thickness,
                "start-buffer": this.props.start_buffer,
                "end-buffer": this.props.end_buffer,
              });
            }
          }
          class Se extends $ {
            constructor(e) {
              super(e);
            }
            internalRender() {
              return P.createElement(
                "vsg-pin-to-view-transform",
                {
                  "offscreen-z-depth": this.props.fOffscreenZDepth,
                  "off-axis-limit": this.props.fOffAxisLimit,
                  "transition-limit": this.props.fTransitionLimit,
                },
                this.props.children,
              );
            }
          }
          class be extends $ {
            constructor(e) {
              super(e);
            }
            internalRender() {
              return P.createElement(
                "vsg-panel-anchor",
                null,
                null != this.props && this.props.children,
              );
            }
          }
          class De extends $ {
            constructor(e) {
              super(e);
            }
            internalRender() {
              return P.createElement(
                "vsg-line-constrained-transform",
                {
                  sgid: this.getSGID(),
                  "target-id": this.props.sTargetId,
                  "source-id": this.props.sSourceId,
                  "source-distance": this.props.fSourceDistance,
                  "target-limit": this.props.fTargetLimit,
                },
                this.props.children,
              );
            }
          }
          !(function (e) {
            (e[(e.LockedToParent = 0)] = "LockedToParent"),
              (e[(e.LockedToWorld = 1)] = "LockedToWorld");
          })(J || (J = {}));
          class Re extends $ {
            constructor(e) {
              super(e);
            }
            internalRender() {
              let e = this.props.start_angle_threshold
                  ? (this.props.start_angle_threshold * Math.PI) / 180
                  : null,
                t = this.props.stop_angle_threshold
                  ? (this.props.stop_angle_threshold * Math.PI) / 180
                  : null,
                r = this.props.ease_out_angle_threshold
                  ? (this.props.ease_out_angle_threshold * Math.PI) / 180
                  : null,
                n = this.props.min_angular_velocity
                  ? (this.props.min_angular_velocity * Math.PI) / 180
                  : null,
                i = this.props.max_angular_velocity
                  ? (this.props.max_angular_velocity * Math.PI) / 180
                  : null;
              return P.createElement(
                "vsg-elastic-head-transform",
                {
                  "start-angle-threshold": e,
                  "stop-angle-threshold": t,
                  "ease-in-time": this.props.ease_in_time,
                  "ease-in-power": this.props.ease_in_power,
                  "ease-out-angle-threshold": r,
                  "ease-out-power": this.props.ease_out_power,
                  "min-angular-velocity": n,
                  "max-angular-velocity": i,
                  "lock-to-horizon": this.props.lock_to_horizon,
                  "translation-behavior": this.props.translation_behavior,
                },
                this.props.children,
              );
            }
          }
          class Ce extends $ {
            constructor(e) {
              super(e);
            }
            internalRender() {
              return P.createElement(
                "vsg-head-facing-transform",
                null,
                this.props.children,
              );
            }
          }
          !(function (e) {
            (e[(e.Browser = 0)] = "Browser"),
              (e[(e.Desktop = 1)] = "Desktop"),
              (e[(e.Overlay = 2)] = "Overlay");
          })(Y || (Y = {})),
            window.hasOwnProperty("VRHTML") ||
              (window.VRHTML = {
                IsAvailable: () => !1,
                Environment: () => Y.Browser,
                OpenSteamWorkshop: (e) => {
                  window.open(
                    "https://steamcommunity.com/app/" + e + "/workshop",
                  );
                },
              }),
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
            })(Z || (Z = {})),
            (function (e) {
              (e[(e.Seated = 0)] = "Seated"),
                (e[(e.Standing = 1)] = "Standing"),
                (e[(e.RawAndUncalibrated = 2)] = "RawAndUncalibrated");
            })(ee || (ee = {})),
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
            })(te || (te = {})),
            (function (e) {
              (e[(e.Activated = 0)] = "Activated"),
                (e[(e.Deactivated = 1)] = "Deactivated");
            })(re || (re = {})),
            (function (e) {
              (e[(e.None = 0)] = "None"),
                (e[(e.Curved = 1)] = "Curved"),
                (e[(e.RGSS4X = 2)] = "RGSS4X"),
                (e[(e.NoDashboardTab = 3)] = "NoDashboardTab"),
                (e[(e.AcceptsGamepadEvents = 4)] = "AcceptsGamepadEvents"),
                (e[(e.ShowGamepadFocus = 5)] = "ShowGamepadFocus"),
                (e[(e.SendVRDiscreteScrollEvents = 6)] =
                  "SendVRDiscreteScrollEvents"),
                (e[(e.SendVRTouchpadEvents = 7)] = "SendVRTouchpadEvents"),
                (e[(e.ShowTouchPadScrollWheel = 8)] =
                  "ShowTouchPadScrollWheel"),
                (e[(e.TransferOwnershipToInternalProcess = 9)] =
                  "TransferOwnershipToInternalProcess"),
                (e[(e.SideBySide_Parallel = 10)] = "SideBySide_Parallel"),
                (e[(e.SideBySide_Crossed = 11)] = "SideBySide_Crossed"),
                (e[(e.Panorama = 12)] = "Panorama"),
                (e[(e.StereoPanorama = 13)] = "StereoPanorama"),
                (e[(e.SortWithNonSceneOverlays = 14)] =
                  "SortWithNonSceneOverlays"),
                (e[(e.VisibleInDashboard = 15)] = "VisibleInDashboard"),
                (e[(e.MakeOverlaysInteractiveIfVisible = 16)] =
                  "MakeOverlaysInteractiveIfVisible"),
                (e[(e.SendVRSmoothScrollEvents = 17)] =
                  "SendVRSmoothScrollEvents");
            })(ne || (ne = {})),
            (function (e) {
              (e[(e.None = 0)] = "None"),
                (e[(e.Mouse = 1)] = "Mouse"),
                (e[(e.DualAnalog = 2)] = "DualAnalog");
            })(ie || (ie = {})),
            (function (e) {
              (e[(e.Invalid = 0)] = "Invalid"),
                (e[(e.TrackingSystemName_String = 1e3)] =
                  "TrackingSystemName_String"),
                (e[(e.ModelNumber_String = 1001)] = "ModelNumber_String"),
                (e[(e.SerialNumber_String = 1002)] = "SerialNumber_String"),
                (e[(e.RenderModelName_String = 1003)] =
                  "RenderModelName_String"),
                (e[(e.WillDriftInYaw_Bool = 1004)] = "WillDriftInYaw_Bool"),
                (e[(e.ManufacturerName_String = 1005)] =
                  "ManufacturerName_String"),
                (e[(e.TrackingFirmwareVersion_String = 1006)] =
                  "TrackingFirmwareVersion_String"),
                (e[(e.HardwareRevision_String = 1007)] =
                  "HardwareRevision_String"),
                (e[(e.AllWirelessDongleDescriptions_String = 1008)] =
                  "AllWirelessDongleDescriptions_String"),
                (e[(e.ConnectedWirelessDongle_String = 1009)] =
                  "ConnectedWirelessDongle_String"),
                (e[(e.DeviceIsWireless_Bool = 1010)] = "DeviceIsWireless_Bool"),
                (e[(e.DeviceIsCharging_Bool = 1011)] = "DeviceIsCharging_Bool"),
                (e[(e.DeviceBatteryPercentage_Float = 1012)] =
                  "DeviceBatteryPercentage_Float"),
                (e[(e.StatusDisplayTransform_Matrix34 = 1013)] =
                  "StatusDisplayTransform_Matrix34"),
                (e[(e.Firmware_UpdateAvailable_Bool = 1014)] =
                  "Firmware_UpdateAvailable_Bool"),
                (e[(e.Firmware_ManualUpdate_Bool = 1015)] =
                  "Firmware_ManualUpdate_Bool"),
                (e[(e.Firmware_ManualUpdateURL_String = 1016)] =
                  "Firmware_ManualUpdateURL_String"),
                (e[(e.HardwareRevision_Uint64 = 1017)] =
                  "HardwareRevision_Uint64"),
                (e[(e.FirmwareVersion_Uint64 = 1018)] =
                  "FirmwareVersion_Uint64"),
                (e[(e.FPGAVersion_Uint64 = 1019)] = "FPGAVersion_Uint64"),
                (e[(e.VRCVersion_Uint64 = 1020)] = "VRCVersion_Uint64"),
                (e[(e.RadioVersion_Uint64 = 1021)] = "RadioVersion_Uint64"),
                (e[(e.DongleVersion_Uint64 = 1022)] = "DongleVersion_Uint64"),
                (e[(e.BlockServerShutdown_Bool = 1023)] =
                  "BlockServerShutdown_Bool"),
                (e[(e.CanUnifyCoordinateSystemWithHmd_Bool = 1024)] =
                  "CanUnifyCoordinateSystemWithHmd_Bool"),
                (e[(e.ContainsProximitySensor_Bool = 1025)] =
                  "ContainsProximitySensor_Bool"),
                (e[(e.DeviceProvidesBatteryStatus_Bool = 1026)] =
                  "DeviceProvidesBatteryStatus_Bool"),
                (e[(e.DeviceCanPowerOff_Bool = 1027)] =
                  "DeviceCanPowerOff_Bool"),
                (e[(e.Firmware_ProgrammingTarget_String = 1028)] =
                  "Firmware_ProgrammingTarget_String"),
                (e[(e.DeviceClass_Int32 = 1029)] = "DeviceClass_Int32"),
                (e[(e.HasCamera_Bool = 1030)] = "HasCamera_Bool"),
                (e[(e.DriverVersion_String = 1031)] = "DriverVersion_String"),
                (e[(e.Firmware_ForceUpdateRequired_Bool = 1032)] =
                  "Firmware_ForceUpdateRequired_Bool"),
                (e[(e.ViveSystemButtonFixRequired_Bool = 1033)] =
                  "ViveSystemButtonFixRequired_Bool"),
                (e[(e.ParentDriver_Uint64 = 1034)] = "ParentDriver_Uint64"),
                (e[(e.ResourceRoot_String = 1035)] = "ResourceRoot_String"),
                (e[(e.RegisteredDeviceType_String = 1036)] =
                  "RegisteredDeviceType_String"),
                (e[(e.InputProfilePath_String = 1037)] =
                  "InputProfilePath_String"),
                (e[(e.NeverTracked_Bool = 1038)] = "NeverTracked_Bool"),
                (e[(e.NumCameras_Int32 = 1039)] = "NumCameras_Int32"),
                (e[(e.CameraFrameLayout_Int32 = 1040)] =
                  "CameraFrameLayout_Int32"),
                (e[(e.CameraStreamFormat_Int32 = 1041)] =
                  "CameraStreamFormat_Int32"),
                (e[(e.AdditionalDeviceSettingsPath_String = 1042)] =
                  "AdditionalDeviceSettingsPath_String"),
                (e[(e.ReportsTimeSinceVSync_Bool = 2e3)] =
                  "ReportsTimeSinceVSync_Bool"),
                (e[(e.SecondsFromVsyncToPhotons_Float = 2001)] =
                  "SecondsFromVsyncToPhotons_Float"),
                (e[(e.DisplayFrequency_Float = 2002)] =
                  "DisplayFrequency_Float"),
                (e[(e.UserIpdMeters_Float = 2003)] = "UserIpdMeters_Float"),
                (e[(e.CurrentUniverseId_Uint64 = 2004)] =
                  "CurrentUniverseId_Uint64"),
                (e[(e.PreviousUniverseId_Uint64 = 2005)] =
                  "PreviousUniverseId_Uint64"),
                (e[(e.DisplayFirmwareVersion_Uint64 = 2006)] =
                  "DisplayFirmwareVersion_Uint64"),
                (e[(e.IsOnDesktop_Bool = 2007)] = "IsOnDesktop_Bool"),
                (e[(e.DisplayMCType_Int32 = 2008)] = "DisplayMCType_Int32"),
                (e[(e.DisplayMCOffset_Float = 2009)] = "DisplayMCOffset_Float"),
                (e[(e.DisplayMCScale_Float = 2010)] = "DisplayMCScale_Float"),
                (e[(e.EdidVendorID_Int32 = 2011)] = "EdidVendorID_Int32"),
                (e[(e.DisplayMCImageLeft_String = 2012)] =
                  "DisplayMCImageLeft_String"),
                (e[(e.DisplayMCImageRight_String = 2013)] =
                  "DisplayMCImageRight_String"),
                (e[(e.DisplayGCBlackClamp_Float = 2014)] =
                  "DisplayGCBlackClamp_Float"),
                (e[(e.EdidProductID_Int32 = 2015)] = "EdidProductID_Int32"),
                (e[(e.CameraToHeadTransform_Matrix34 = 2016)] =
                  "CameraToHeadTransform_Matrix34"),
                (e[(e.DisplayGCType_Int32 = 2017)] = "DisplayGCType_Int32"),
                (e[(e.DisplayGCOffset_Float = 2018)] = "DisplayGCOffset_Float"),
                (e[(e.DisplayGCScale_Float = 2019)] = "DisplayGCScale_Float"),
                (e[(e.DisplayGCPrescale_Float = 2020)] =
                  "DisplayGCPrescale_Float"),
                (e[(e.DisplayGCImage_String = 2021)] = "DisplayGCImage_String"),
                (e[(e.LensCenterLeftU_Float = 2022)] = "LensCenterLeftU_Float"),
                (e[(e.LensCenterLeftV_Float = 2023)] = "LensCenterLeftV_Float"),
                (e[(e.LensCenterRightU_Float = 2024)] =
                  "LensCenterRightU_Float"),
                (e[(e.LensCenterRightV_Float = 2025)] =
                  "LensCenterRightV_Float"),
                (e[(e.UserHeadToEyeDepthMeters_Float = 2026)] =
                  "UserHeadToEyeDepthMeters_Float"),
                (e[(e.CameraFirmwareVersion_Uint64 = 2027)] =
                  "CameraFirmwareVersion_Uint64"),
                (e[(e.CameraFirmwareDescription_String = 2028)] =
                  "CameraFirmwareDescription_String"),
                (e[(e.DisplayFPGAVersion_Uint64 = 2029)] =
                  "DisplayFPGAVersion_Uint64"),
                (e[(e.DisplayBootloaderVersion_Uint64 = 2030)] =
                  "DisplayBootloaderVersion_Uint64"),
                (e[(e.DisplayHardwareVersion_Uint64 = 2031)] =
                  "DisplayHardwareVersion_Uint64"),
                (e[(e.AudioFirmwareVersion_Uint64 = 2032)] =
                  "AudioFirmwareVersion_Uint64"),
                (e[(e.CameraCompatibilityMode_Int32 = 2033)] =
                  "CameraCompatibilityMode_Int32"),
                (e[(e.ScreenshotHorizontalFieldOfViewDegrees_Float = 2034)] =
                  "ScreenshotHorizontalFieldOfViewDegrees_Float"),
                (e[(e.ScreenshotVerticalFieldOfViewDegrees_Float = 2035)] =
                  "ScreenshotVerticalFieldOfViewDegrees_Float"),
                (e[(e.DisplaySuppressed_Bool = 2036)] =
                  "DisplaySuppressed_Bool"),
                (e[(e.DisplayAllowNightMode_Bool = 2037)] =
                  "DisplayAllowNightMode_Bool"),
                (e[(e.DisplayMCImageWidth_Int32 = 2038)] =
                  "DisplayMCImageWidth_Int32"),
                (e[(e.DisplayMCImageHeight_Int32 = 2039)] =
                  "DisplayMCImageHeight_Int32"),
                (e[(e.DisplayMCImageNumChannels_Int32 = 2040)] =
                  "DisplayMCImageNumChannels_Int32"),
                (e[(e.DisplayMCImageData_Binary = 2041)] =
                  "DisplayMCImageData_Binary"),
                (e[(e.SecondsFromPhotonsToVblank_Float = 2042)] =
                  "SecondsFromPhotonsToVblank_Float"),
                (e[(e.DriverDirectModeSendsVsyncEvents_Bool = 2043)] =
                  "DriverDirectModeSendsVsyncEvents_Bool"),
                (e[(e.DisplayDebugMode_Bool = 2044)] = "DisplayDebugMode_Bool"),
                (e[(e.GraphicsAdapterLuid_Uint64 = 2045)] =
                  "GraphicsAdapterLuid_Uint64"),
                (e[(e.DriverProvidedChaperonePath_String = 2048)] =
                  "DriverProvidedChaperonePath_String"),
                (e[(e.ExpectedTrackingReferenceCount_Int32 = 2049)] =
                  "ExpectedTrackingReferenceCount_Int32"),
                (e[(e.ExpectedControllerCount_Int32 = 2050)] =
                  "ExpectedControllerCount_Int32"),
                (e[(e.NamedIconPathControllerLeftDeviceOff_String = 2051)] =
                  "NamedIconPathControllerLeftDeviceOff_String"),
                (e[(e.NamedIconPathControllerRightDeviceOff_String = 2052)] =
                  "NamedIconPathControllerRightDeviceOff_String"),
                (e[(e.NamedIconPathTrackingReferenceDeviceOff_String = 2053)] =
                  "NamedIconPathTrackingReferenceDeviceOff_String"),
                (e[(e.DoNotApplyPrediction_Bool = 2054)] =
                  "DoNotApplyPrediction_Bool"),
                (e[(e.CameraToHeadTransforms_Matrix34_Array = 2055)] =
                  "CameraToHeadTransforms_Matrix34_Array"),
                (e[(e.DistortionMeshResolution_Int32 = 2056)] =
                  "DistortionMeshResolution_Int32"),
                (e[(e.DriverIsDrawingControllers_Bool = 2057)] =
                  "DriverIsDrawingControllers_Bool"),
                (e[(e.DriverRequestsApplicationPause_Bool = 2058)] =
                  "DriverRequestsApplicationPause_Bool"),
                (e[(e.DriverRequestsReducedRendering_Bool = 2059)] =
                  "DriverRequestsReducedRendering_Bool"),
                (e[(e.MinimumIpdStepMeters_Float = 2060)] =
                  "MinimumIpdStepMeters_Float"),
                (e[(e.AudioBridgeFirmwareVersion_Uint64 = 2061)] =
                  "AudioBridgeFirmwareVersion_Uint64"),
                (e[(e.ImageBridgeFirmwareVersion_Uint64 = 2062)] =
                  "ImageBridgeFirmwareVersion_Uint64"),
                (e[(e.ImuToHeadTransform_Matrix34 = 2063)] =
                  "ImuToHeadTransform_Matrix34"),
                (e[(e.ImuFactoryGyroBias_Vector3 = 2064)] =
                  "ImuFactoryGyroBias_Vector3"),
                (e[(e.ImuFactoryGyroScale_Vector3 = 2065)] =
                  "ImuFactoryGyroScale_Vector3"),
                (e[(e.ImuFactoryAccelerometerBias_Vector3 = 2066)] =
                  "ImuFactoryAccelerometerBias_Vector3"),
                (e[(e.ImuFactoryAccelerometerScale_Vector3 = 2067)] =
                  "ImuFactoryAccelerometerScale_Vector3"),
                (e[(e.ConfigurationIncludesLighthouse20Features_Bool = 2069)] =
                  "ConfigurationIncludesLighthouse20Features_Bool"),
                (e[(e.Prop_AdditionalRadioFeatures_Uint64 = 2070)] =
                  "Prop_AdditionalRadioFeatures_Uint64"),
                (e[(e.Prop_CameraWhiteBalance_Vector4_Array = 2071)] =
                  "Prop_CameraWhiteBalance_Vector4_Array"),
                (e[(e.Prop_CameraDistortionFunction_Int32_Array = 2072)] =
                  "Prop_CameraDistortionFunction_Int32_Array"),
                (e[(e.Prop_CameraDistortionCoefficients_Float_Array = 2073)] =
                  "Prop_CameraDistortionCoefficients_Float_Array"),
                (e[(e.Prop_ExpectedControllerType_String = 2074)] =
                  "Prop_ExpectedControllerType_String"),
                (e[(e.Prop_DisplayAvailableFrameRates_Float_Array = 2080)] =
                  "Prop_DisplayAvailableFrameRates_Float_Array"),
                (e[(e.DashboardScale_Float = 2091)] = "DashboardScale_Float"),
                (e[(e.IpdUIRangeMinMeters_Float = 2100)] =
                  "IpdUIRangeMinMeters_Float"),
                (e[(e.IpdUIRangeMaxMeters_Float = 2101)] =
                  "IpdUIRangeMaxMeters_Float"),
                (e[(e.DriverRequestedMuraCorrectionMode_Int32 = 2200)] =
                  "DriverRequestedMuraCorrectionMode_Int32"),
                (e[(e.DriverRequestedMuraFeather_InnerLeft_Int32 = 2201)] =
                  "DriverRequestedMuraFeather_InnerLeft_Int32"),
                (e[(e.DriverRequestedMuraFeather_InnerRight_Int32 = 2202)] =
                  "DriverRequestedMuraFeather_InnerRight_Int32"),
                (e[(e.DriverRequestedMuraFeather_InnerTop_Int32 = 2203)] =
                  "DriverRequestedMuraFeather_InnerTop_Int32"),
                (e[(e.DriverRequestedMuraFeather_InnerBottom_Int32 = 2204)] =
                  "DriverRequestedMuraFeather_InnerBottom_Int32"),
                (e[(e.DriverRequestedMuraFeather_OuterLeft_Int32 = 2205)] =
                  "DriverRequestedMuraFeather_OuterLeft_Int32"),
                (e[(e.DriverRequestedMuraFeather_OuterRight_Int32 = 2206)] =
                  "DriverRequestedMuraFeather_OuterRight_Int32"),
                (e[(e.DriverRequestedMuraFeather_OuterTop_Int32 = 2207)] =
                  "DriverRequestedMuraFeather_OuterTop_Int32"),
                (e[(e.DriverRequestedMuraFeather_OuterBottom_Int32 = 2208)] =
                  "DriverRequestedMuraFeather_OuterBottom_Int32"),
                (e[(e.AttachedDeviceId_String = 3e3)] =
                  "AttachedDeviceId_String"),
                (e[(e.SupportedButtons_Uint64 = 3001)] =
                  "SupportedButtons_Uint64"),
                (e[(e.Axis0Type_Int32 = 3002)] = "Axis0Type_Int32"),
                (e[(e.Axis1Type_Int32 = 3003)] = "Axis1Type_Int32"),
                (e[(e.Axis2Type_Int32 = 3004)] = "Axis2Type_Int32"),
                (e[(e.Axis3Type_Int32 = 3005)] = "Axis3Type_Int32"),
                (e[(e.Axis4Type_Int32 = 3006)] = "Axis4Type_Int32"),
                (e[(e.ControllerRoleHint_Int32 = 3007)] =
                  "ControllerRoleHint_Int32"),
                (e[(e.FieldOfViewLeftDegrees_Float = 4e3)] =
                  "FieldOfViewLeftDegrees_Float"),
                (e[(e.FieldOfViewRightDegrees_Float = 4001)] =
                  "FieldOfViewRightDegrees_Float"),
                (e[(e.FieldOfViewTopDegrees_Float = 4002)] =
                  "FieldOfViewTopDegrees_Float"),
                (e[(e.FieldOfViewBottomDegrees_Float = 4003)] =
                  "FieldOfViewBottomDegrees_Float"),
                (e[(e.TrackingRangeMinimumMeters_Float = 4004)] =
                  "TrackingRangeMinimumMeters_Float"),
                (e[(e.TrackingRangeMaximumMeters_Float = 4005)] =
                  "TrackingRangeMaximumMeters_Float"),
                (e[(e.ModeLabel_String = 4006)] = "ModeLabel_String"),
                (e[(e.IconPathName_String = 5e3)] = "IconPathName_String"),
                (e[(e.NamedIconPathDeviceOff_String = 5001)] =
                  "NamedIconPathDeviceOff_String"),
                (e[(e.NamedIconPathDeviceSearching_String = 5002)] =
                  "NamedIconPathDeviceSearching_String"),
                (e[(e.NamedIconPathDeviceSearchingAlert_String = 5003)] =
                  "NamedIconPathDeviceSearchingAlert_String"),
                (e[(e.NamedIconPathDeviceReady_String = 5004)] =
                  "NamedIconPathDeviceReady_String"),
                (e[(e.NamedIconPathDeviceReadyAlert_String = 5005)] =
                  "NamedIconPathDeviceReadyAlert_String"),
                (e[(e.NamedIconPathDeviceNotReady_String = 5006)] =
                  "NamedIconPathDeviceNotReady_String"),
                (e[(e.NamedIconPathDeviceStandby_String = 5007)] =
                  "NamedIconPathDeviceStandby_String"),
                (e[(e.NamedIconPathDeviceAlertLow_String = 5008)] =
                  "NamedIconPathDeviceAlertLow_String"),
                (e[(e.DisplayHiddenArea_Binary_Start = 5100)] =
                  "DisplayHiddenArea_Binary_Start"),
                (e[(e.DisplayHiddenArea_Binary_End = 5150)] =
                  "DisplayHiddenArea_Binary_End"),
                (e[(e.ParentContainer = 5151)] = "ParentContainer"),
                (e[(e.UserConfigPath_String = 6e3)] = "UserConfigPath_String"),
                (e[(e.InstallPath_String = 6001)] = "InstallPath_String"),
                (e[(e.HasDisplayComponent_Bool = 6002)] =
                  "HasDisplayComponent_Bool"),
                (e[(e.HasControllerComponent_Bool = 6003)] =
                  "HasControllerComponent_Bool"),
                (e[(e.HasCameraComponent_Bool = 6004)] =
                  "HasCameraComponent_Bool"),
                (e[(e.HasDriverDirectModeComponent_Bool = 6005)] =
                  "HasDriverDirectModeComponent_Bool"),
                (e[(e.HasVirtualDisplayComponent_Bool = 6006)] =
                  "HasVirtualDisplayComponent_Bool"),
                (e[(e.HasSpatialAnchorsSupport_Bool = 6007)] =
                  "HasSpatialAnchorsSupport_Bool"),
                (e[(e.ControllerType_String = 7e3)] = "ControllerType_String"),
                (e[(e.LegacyInputProfile_String = 7001)] =
                  "LegacyInputProfile_String"),
                (e[(e.VendorSpecific_Reserved_Start = 1e4)] =
                  "VendorSpecific_Reserved_Start"),
                (e[(e.VendorSpecific_Reserved_End = 10999)] =
                  "VendorSpecific_Reserved_End"),
                (e[(e.TrackedDeviceProperty_Max = 1e6)] =
                  "TrackedDeviceProperty_Max");
            })(oe || (oe = {})),
            (function (e) {
              (e[(e.Invalid = 0)] = "Invalid"),
                (e[(e.HMD = 1)] = "HMD"),
                (e[(e.Controller = 2)] = "Controller"),
                (e[(e.GenericTracker = 3)] = "GenericTracker"),
                (e[(e.TrackingReference = 4)] = "TrackingReference"),
                (e[(e.DisplayRedirect = 5)] = "DisplayRedirect");
            })(ae || (ae = {})),
            (function (e) {
              (e[(e.Unknown = 0)] = "Unknown"),
                (e[(e.NVIDIA = 1)] = "NVIDIA"),
                (e[(e.AMD = 2)] = "AMD");
            })(se || (se = {})),
            (function (e) {
              (e[(e.None = 0)] = "None"),
                (e[(e.Starting = 1)] = "Starting"),
                (e[(e.Quitting = 2)] = "Quitting"),
                (e[(e.Running = 3)] = "Running"),
                (e[(e.Running_NotSubmitting_Expected = 4)] =
                  "Running_NotSubmitting_Expected"),
                (e[(e.Running_NotSubmitting_Unexpected = 5)] =
                  "Running_NotSubmitting_Unexpected");
            })(le || (le = {})),
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
            })(ue || (ue = {})),
            (function (e) {
              (e[(e.Normal = 0)] = "Normal"),
                (e[(e.Password = 1)] = "Password"),
                (e[(e.Submit = 2)] = "Submit");
            })(ce || (ce = {})),
            (function (e) {
              (e[(e.SingleLine = 0)] = "SingleLine"),
                (e[(e.MultipleLines = 1)] = "MultipleLines");
            })(de || (de = {})),
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
            })(pe || (pe = {}));
          class Ie extends P.Component {
            constructor(e) {
              super(e);
              let t = {};
              if (VRHTML.IsAvailable())
                try {
                  let e = VRHTML.VRProperties.GetStringProperty(
                    this.props.sDevicePath,
                    oe.RenderModelName_String,
                  );
                  if (e) {
                    let r =
                      VRHTML.VRRenderModelsInternal.FindComponentForInputSource(
                        e,
                        this.props.sInputPath,
                      );
                    if (r) {
                      let n =
                        VRHTML.VRRenderModels.GetComponentStateForDevicePath(
                          e,
                          r,
                          this.props.sDevicePath,
                        );
                      n && (t.xfTransform = n.xfTrackingToComponentLocal);
                    }
                  }
                } catch (e) {
                  console.log(
                    "Component transform invalid for ",
                    this.props.sDevicePath,
                  );
                }
              this.state = t;
            }
            render() {
              return P.createElement(
                fe,
                {
                  id: this.props.id,
                  parent_path: this.props.sDevicePath,
                  transform: this.state.xfTransform,
                },
                this.props.children,
              );
            }
          }
          class xe extends $ {
            constructor(e) {
              super(e);
            }
            internalRender() {
              return P.createElement(
                "vsg-callout-transform",
                { offset: q(this.props.vOffset) },
                this.props.children,
              );
            }
          }
          r.d(t, "CVRMailbox", function () {
            return a;
          }),
            r.d(t, "CreateIdentityTransform", function () {
              return s;
            }),
            r.d(t, "AddVector3", function () {
              return l;
            }),
            r.d(t, "SubtractVector3", function () {
              return u;
            }),
            r.d(t, "MultiplyVector3", function () {
              return c;
            }),
            r.d(t, "MultiplyVector3Scalar", function () {
              return d;
            }),
            r.d(t, "LengthOfVector3", function () {
              return p;
            }),
            r.d(t, "EulerToQuaternion", function () {
              return f;
            }),
            r.d(t, "AxisAngleVectorToQuaternion", function () {
              return h;
            }),
            r.d(t, "TransposeMatrix", function () {
              return m;
            }),
            r.d(t, "MatrixToQuaternion", function () {
              return _;
            }),
            r.d(t, "MultiplyQuaternionVector", function () {
              return y;
            }),
            r.d(t, "MultiplyQuaternion", function () {
              return g;
            }),
            r.d(t, "BasesToMatrix3", function () {
              return v;
            }),
            r.d(t, "GetTransformBack", function () {
              return S;
            }),
            r.d(t, "NormalizeVector3", function () {
              return b;
            }),
            r.d(t, "NegateVector3", function () {
              return D;
            }),
            r.d(t, "CrossVector", function () {
              return R;
            }),
            r.d(t, "DotVector3", function () {
              return C;
            }),
            r.d(t, "ConjugateQuaternion", function () {
              return I;
            }),
            r.d(t, "InvertQuaterion", function () {
              return x;
            }),
            r.d(t, "RemovePitchAndRoll", function () {
              return w;
            }),
            r.d(t, "ETransformOrigin", function () {
              return X;
            }),
            r.d(t, "Transform", function () {
              return fe;
            }),
            r.d(t, "TrackingStateVisibility", function () {
              return he;
            }),
            r.d(t, "SetOwningOverlayKey", function () {
              return U;
            }),
            r.d(t, "RetireSgid", function () {
              return z;
            }),
            r.d(t, "MarkSceneGraphDirty", function () {
              return H;
            }),
            r.d(t, "FillOptionalVector2", function () {
              return G;
            }),
            r.d(t, "FillOptionalVector3", function () {
              return W;
            }),
            r.d(t, "Vector2ToString", function () {
              return j;
            }),
            r.d(t, "Vector3ToString", function () {
              return q;
            }),
            r.d(t, "QuaternionToString", function () {
              return Q;
            }),
            r.d(t, "SGBase", function () {
              return $;
            }),
            r.d(t, "SGApp", function () {
              return ye;
            }),
            r.d(t, "RenderModel", function () {
              return ge;
            }),
            r.d(t, "Line", function () {
              return ve;
            }),
            r.d(t, "PinToViewTransform", function () {
              return Se;
            }),
            r.d(t, "PanelAnchor", function () {
              return be;
            }),
            r.d(t, "EPanelOrigin", function () {
              return K;
            }),
            r.d(t, "Panel", function () {
              return _e;
            }),
            r.d(t, "LineConstrainedTransform", function () {
              return De;
            }),
            r.d(t, "ETranslationBehavior", function () {
              return J;
            }),
            r.d(t, "ElasticHeadTransform", function () {
              return Re;
            }),
            r.d(t, "HeadFacingTransform", function () {
              return Ce;
            }),
            r.d(t, "ComponentTransform", function () {
              return Ie;
            }),
            r.d(t, "CalloutTransform", function () {
              return xe;
            }),
            r.d(t, "VRHTMLEnvironment", function () {
              return Y;
            }),
            r.d(t, "ETrackingResult", function () {
              return Z;
            }),
            r.d(t, "ETrackingUniverseOrigin", function () {
              return ee;
            }),
            r.d(t, "k_ulOverlayHandleInvalid", function () {
              return "0";
            }),
            r.d(t, "k_unTrackedDeviceIndex_Hmd", function () {
              return 0;
            }),
            r.d(t, "ESDLWindowEvent", function () {
              return te;
            }),
            r.d(t, "EDeviceEvent", function () {
              return re;
            }),
            r.d(t, "EVROverlayFlags", function () {
              return ne;
            }),
            r.d(t, "EVROverlayInputMethod", function () {
              return ie;
            }),
            r.d(t, "ETrackedDeviceProperty", function () {
              return oe;
            }),
            r.d(t, "ETrackedDeviceClass", function () {
              return ae;
            }),
            r.d(t, "GraphicsHardwareVendor", function () {
              return se;
            }),
            r.d(t, "ESceneApplicationState", function () {
              return le;
            }),
            r.d(t, "EVRMessageOverlayResponse", function () {
              return ue;
            }),
            r.d(t, "EKeyboardTextInputMode", function () {
              return ce;
            }),
            r.d(t, "EKeyboardTextInputLineMode", function () {
              return de;
            }),
            r.d(t, "ESystemBehaviorFlags", function () {
              return pe;
            }),
            (t.default = VRHTML);
        },
      ]));
  },
});
//# sourceMappingURL=powermenu.js.map?v=f7b42b9726366170fa34
