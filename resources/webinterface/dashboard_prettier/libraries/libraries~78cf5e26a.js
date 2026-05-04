var CLSTAMP = "10624569";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [211, 526],
  {
    2505: (e, t, n) => {
      e.exports = n(8015);
    },
    7813: (e, t, n) => {
      "use strict";
      n.d(t, {
        ObservableSet: () => In,
        action: () => Bt,
        autorun: () => Kt,
        computed: () => Be,
        configure: () => Jt,
        makeObservable: () => mn,
        observable: () => Ve,
        runInAction: () => It,
        when: () => ln,
      });
      function r(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        throw new Error(
          "number" == typeof e
            ? "[MobX] minified error nr: " +
                e +
                (n.length ? " " + n.map(String).join(",") : "") +
                ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts"
            : "[MobX] " + e,
        );
      }
      var i = {};
      function o() {
        return "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof window
            ? window
            : void 0 !== n.g
              ? n.g
              : "undefined" != typeof self
                ? self
                : i;
      }
      var a = Object.assign,
        s = Object.getOwnPropertyDescriptor,
        u = Object.defineProperty,
        c = Object.prototype,
        l = [];
      Object.freeze(l);
      var f = {};
      Object.freeze(f);
      var h = "undefined" != typeof Proxy,
        _ = Object.toString();
      function v() {
        h || r("Proxy not available");
      }
      function d(e) {
        var t = !1;
        return function () {
          if (!t) return (t = !0), e.apply(this, arguments);
        };
      }
      var p = function () {};
      function b(e) {
        return "function" == typeof e;
      }
      function y(e) {
        switch (typeof e) {
          case "string":
          case "symbol":
          case "number":
            return !0;
        }
        return !1;
      }
      function g(e) {
        return null !== e && "object" == typeof e;
      }
      function m(e) {
        if (!g(e)) return !1;
        var t = Object.getPrototypeOf(e);
        if (null == t) return !0;
        var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n.toString() === _;
      }
      function O(e) {
        var t = null == e ? void 0 : e.constructor;
        return (
          !!t &&
          ("GeneratorFunction" === t.name ||
            "GeneratorFunction" === t.displayName)
        );
      }
      function w(e, t, n) {
        u(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
      }
      function S(e, t, n) {
        u(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
      }
      function A(e, t) {
        var n = "isMobX" + e;
        return (
          (t.prototype[n] = !0),
          function (e) {
            return g(e) && !0 === e[n];
          }
        );
      }
      function j(e) {
        return (
          null != e && "[object Map]" === Object.prototype.toString.call(e)
        );
      }
      function k(e) {
        return (
          null != e && "[object Set]" === Object.prototype.toString.call(e)
        );
      }
      var x = void 0 !== Object.getOwnPropertySymbols;
      var E =
        "undefined" != typeof Reflect && Reflect.ownKeys
          ? Reflect.ownKeys
          : x
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(
                  Object.getOwnPropertySymbols(e),
                );
              }
            : Object.getOwnPropertyNames;
      function P(e) {
        return null === e ? null : "object" == typeof e ? "" + e : e;
      }
      function C(e, t) {
        return c.hasOwnProperty.call(e, t);
      }
      var R =
        Object.getOwnPropertyDescriptors ||
        function (e) {
          var t = {};
          return (
            E(e).forEach(function (n) {
              t[n] = s(e, n);
            }),
            t
          );
        };
      function T(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function V(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, I(r.key), r);
        }
      }
      function L(e, t, n) {
        return (
          t && V(e.prototype, t),
          n && V(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function D(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (n) return (n = n.call(e)).next.bind(n);
        if (
          Array.isArray(e) ||
          (n = (function (e, t) {
            if (e) {
              if ("string" == typeof e) return T(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? T(e, t)
                    : void 0
              );
            }
          })(e)) ||
          (t && e && "number" == typeof e.length)
        ) {
          n && (e = n);
          var r = 0;
          return function () {
            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      }
      function N() {
        return (
          (N = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          N.apply(null, arguments)
        );
      }
      function B(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          M(e, t);
      }
      function M(e, t) {
        return (
          (M = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          M(e, t)
        );
      }
      function I(e) {
        var t = (function (e, t) {
          if ("object" != typeof e || !e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == typeof t ? t : t + "";
      }
      var U = Symbol("mobx-stored-annotations");
      function K(e) {
        return Object.assign(function (t, n) {
          if (q(n)) return e.decorate_20223_(t, n);
          G(t, n, e);
        }, e);
      }
      function G(e, t, n) {
        C(e, U) || w(e, U, N({}, e[U])),
          (function (e) {
            return e.annotationType_ === J;
          })(n) || (e[U][t] = n);
      }
      function q(e) {
        return "object" == typeof e && "string" == typeof e.kind;
      }
      var H = Symbol("mobx administration"),
        $ = (function () {
          function e(e) {
            void 0 === e && (e = "Atom"),
              (this.name_ = void 0),
              (this.isPendingUnobservation = !1),
              (this.isBeingObserved = !1),
              (this.observers_ = new Set()),
              (this.diffValue_ = 0),
              (this.lastAccessedBy_ = 0),
              (this.lowestObserverState_ = Je.NOT_TRACKING_),
              (this.onBOL = void 0),
              (this.onBUOL = void 0),
              (this.name_ = e);
          }
          var t = e.prototype;
          return (
            (t.onBO = function () {
              this.onBOL &&
                this.onBOL.forEach(function (e) {
                  return e();
                });
            }),
            (t.onBUO = function () {
              this.onBUOL &&
                this.onBUOL.forEach(function (e) {
                  return e();
                });
            }),
            (t.reportObserved = function () {
              return Ot(this);
            }),
            (t.reportChanged = function () {
              gt(), wt(this), mt();
            }),
            (t.toString = function () {
              return this.name_;
            }),
            e
          );
        })(),
        W = A("Atom", $);
      function z(e, t, n) {
        void 0 === t && (t = p), void 0 === n && (n = p);
        var r,
          i = new $(e);
        return t !== p && zt(Ht, i, t, r), n !== p && Wt(i, n), i;
      }
      var F = {
        identity: function (e, t) {
          return e === t;
        },
        structural: function (e, t) {
          return hr(e, t);
        },
        default: function (e, t) {
          return Object.is
            ? Object.is(e, t)
            : e === t
              ? 0 !== e || 1 / e == 1 / t
              : e != e && t != t;
        },
        shallow: function (e, t) {
          return hr(e, t, 1);
        },
      };
      function X(e, t, n) {
        return un(e)
          ? e
          : Array.isArray(e)
            ? Ve.array(e, { name: n })
            : m(e)
              ? Ve.object(e, void 0, { name: n })
              : j(e)
                ? Ve.map(e, { name: n })
                : k(e)
                  ? Ve.set(e, { name: n })
                  : "function" != typeof e || Ut(e) || an(e)
                    ? e
                    : O(e)
                      ? rn(e)
                      : Mt(n, e);
      }
      function Y(e) {
        return e;
      }
      var J = "override";
      function Q(e, t) {
        return {
          annotationType_: e,
          options_: t,
          make_: Z,
          extend_: ee,
          decorate_20223_: te,
        };
      }
      function Z(e, t, n, r) {
        var i;
        if (null != (i = this.options_) && i.bound)
          return null === this.extend_(e, t, n, !1) ? 0 : 1;
        if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
        if (Ut(n.value)) return 1;
        var o = ne(e, this, t, n, !1);
        return u(r, t, o), 2;
      }
      function ee(e, t, n, r) {
        var i = ne(e, this, t, n);
        return e.defineProperty_(t, i, r);
      }
      function te(e, t) {
        var n = t.kind,
          i = t.name,
          o = t.addInitializer,
          a = this;
        if ("field" != n) {
          var s, u, c, l, f, h;
          if ("method" == n)
            return (
              Ut(e) ||
                ((u = e),
                (e = Ge(
                  null != (c = null == (l = a.options_) ? void 0 : l.name)
                    ? c
                    : i.toString(),
                  u,
                  null !=
                    (f = null == (h = a.options_) ? void 0 : h.autoAction) && f,
                ))),
              null != (s = this.options_) &&
                s.bound &&
                o(function () {
                  var e = this,
                    t = e[i].bind(e);
                  (t.isMobxAction = !0), (e[i] = t);
                }),
              e
            );
          r(
            "Cannot apply '" +
              a.annotationType_ +
              "' to '" +
              String(i) +
              "' (kind: " +
              n +
              "):\n'" +
              a.annotationType_ +
              "' can only be used on properties with a function value.",
          );
        } else
          o(function () {
            G(this, i, a);
          });
      }
      function ne(e, t, n, r, i) {
        var o, a, s, u, c, l, f, h;
        void 0 === i && (i = dt.safeDescriptors),
          (h = r),
          t.annotationType_,
          h.value;
        var _,
          v = r.value;
        null != (o = t.options_) &&
          o.bound &&
          (v = v.bind(null != (_ = e.proxy_) ? _ : e.target_));
        return {
          value: Ge(
            null != (a = null == (s = t.options_) ? void 0 : s.name)
              ? a
              : n.toString(),
            v,
            null != (u = null == (c = t.options_) ? void 0 : c.autoAction) && u,
            null != (l = t.options_) && l.bound
              ? null != (f = e.proxy_)
                ? f
                : e.target_
              : void 0,
          ),
          configurable: !i || e.isPlainObject_,
          enumerable: !1,
          writable: !i,
        };
      }
      function re(e, t) {
        return {
          annotationType_: e,
          options_: t,
          make_: ie,
          extend_: oe,
          decorate_20223_: ae,
        };
      }
      function ie(e, t, n, r) {
        var i;
        if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
        if (
          null != (i = this.options_) &&
          i.bound &&
          (!C(e.target_, t) || !an(e.target_[t])) &&
          null === this.extend_(e, t, n, !1)
        )
          return 0;
        if (an(n.value)) return 1;
        var o = se(e, this, t, n, !1, !1);
        return u(r, t, o), 2;
      }
      function oe(e, t, n, r) {
        var i,
          o = se(e, this, t, n, null == (i = this.options_) ? void 0 : i.bound);
        return e.defineProperty_(t, o, r);
      }
      function ae(e, t) {
        var n;
        var r = t.name,
          i = t.addInitializer;
        return (
          an(e) || (e = rn(e)),
          null != (n = this.options_) &&
            n.bound &&
            i(function () {
              var e = this,
                t = e[r].bind(e);
              (t.isMobXFlow = !0), (e[r] = t);
            }),
          e
        );
      }
      function se(e, t, n, r, i, o) {
        var a;
        void 0 === o && (o = dt.safeDescriptors),
          (a = r),
          t.annotationType_,
          a.value;
        var s,
          u = r.value;
        (an(u) || (u = rn(u)), i) &&
          ((u = u.bind(null != (s = e.proxy_) ? s : e.target_)).isMobXFlow =
            !0);
        return {
          value: u,
          configurable: !o || e.isPlainObject_,
          enumerable: !1,
          writable: !o,
        };
      }
      function ue(e, t) {
        return {
          annotationType_: e,
          options_: t,
          make_: ce,
          extend_: le,
          decorate_20223_: fe,
        };
      }
      function ce(e, t, n) {
        return null === this.extend_(e, t, n, !1) ? 0 : 1;
      }
      function le(e, t, n, r) {
        return (
          (function (e, t, n, r) {
            t.annotationType_, r.get;
            0;
          })(0, this, 0, n),
          e.defineComputedProperty_(
            t,
            N({}, this.options_, { get: n.get, set: n.set }),
            r,
          )
        );
      }
      function fe(e, t) {
        var n = this,
          r = t.name;
        return (
          (0, t.addInitializer)(function () {
            var t = Hn(this)[H],
              i = N({}, n.options_, { get: e, context: this });
            i.name || (i.name = "ObservableObject." + r.toString()),
              t.values_.set(r, new Ye(i));
          }),
          function () {
            return this[H].getObservablePropValue_(r);
          }
        );
      }
      function he(e, t) {
        return {
          annotationType_: e,
          options_: t,
          make_: _e,
          extend_: ve,
          decorate_20223_: de,
        };
      }
      function _e(e, t, n) {
        return null === this.extend_(e, t, n, !1) ? 0 : 1;
      }
      function ve(e, t, n, r) {
        var i, o;
        return (
          (function (e, t) {
            t.annotationType_;
            0;
          })(0, this),
          e.defineObservableProperty_(
            t,
            n.value,
            null != (i = null == (o = this.options_) ? void 0 : o.enhancer)
              ? i
              : X,
            r,
          )
        );
      }
      function de(e, t) {
        var n = this,
          r = t.kind,
          i = t.name,
          o = new WeakSet();
        function a(e, t) {
          var r,
            a,
            s = Hn(e)[H],
            u = new ze(
              t,
              null != (r = null == (a = n.options_) ? void 0 : a.enhancer)
                ? r
                : X,
              "ObservableObject." + i.toString(),
              !1,
            );
          s.values_.set(i, u), o.add(e);
        }
        if ("accessor" == r)
          return {
            get: function () {
              return (
                o.has(this) || a(this, e.get.call(this)),
                this[H].getObservablePropValue_(i)
              );
            },
            set: function (e) {
              return (
                o.has(this) || a(this, e), this[H].setObservablePropValue_(i, e)
              );
            },
            init: function (e) {
              return o.has(this) || a(this, e), e;
            },
          };
      }
      var pe = "true",
        be = ye();
      function ye(e) {
        return {
          annotationType_: pe,
          options_: e,
          make_: ge,
          extend_: me,
          decorate_20223_: Oe,
        };
      }
      function ge(e, t, n, r) {
        var i, o, a, s;
        if (n.get) return Be.make_(e, t, n, r);
        if (n.set) {
          var c = Ge(t.toString(), n.set);
          return r === e.target_
            ? null ===
              e.defineProperty_(t, {
                configurable: !dt.safeDescriptors || e.isPlainObject_,
                set: c,
              })
              ? 0
              : 2
            : (u(r, t, { configurable: !0, set: c }), 2);
        }
        if (r !== e.target_ && "function" == typeof n.value)
          return O(n.value)
            ? (null != (s = this.options_) && s.autoBind ? rn.bound : rn).make_(
                e,
                t,
                n,
                r,
              )
            : (null != (a = this.options_) && a.autoBind ? Mt.bound : Mt).make_(
                e,
                t,
                n,
                r,
              );
        var l,
          f =
            !1 === (null == (i = this.options_) ? void 0 : i.deep)
              ? Ve.ref
              : Ve;
        "function" == typeof n.value &&
          null != (o = this.options_) &&
          o.autoBind &&
          (n.value = n.value.bind(null != (l = e.proxy_) ? l : e.target_));
        return f.make_(e, t, n, r);
      }
      function me(e, t, n, r) {
        var i, o, a;
        if (n.get) return Be.extend_(e, t, n, r);
        if (n.set)
          return e.defineProperty_(
            t,
            {
              configurable: !dt.safeDescriptors || e.isPlainObject_,
              set: Ge(t.toString(), n.set),
            },
            r,
          );
        "function" == typeof n.value &&
          null != (i = this.options_) &&
          i.autoBind &&
          (n.value = n.value.bind(null != (a = e.proxy_) ? a : e.target_));
        return (
          !1 === (null == (o = this.options_) ? void 0 : o.deep) ? Ve.ref : Ve
        ).extend_(e, t, n, r);
      }
      function Oe(e, t) {
        r("'" + this.annotationType_ + "' cannot be used as a decorator");
      }
      var we = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
      function Se(e) {
        return e || we;
      }
      Object.freeze(we);
      var Ae = he("observable"),
        je = he("observable.ref", { enhancer: Y }),
        ke = he("observable.shallow", {
          enhancer: function (e, t, n) {
            return null == e || zn(e) || Tn(e) || Bn(e) || Un(e)
              ? e
              : Array.isArray(e)
                ? Ve.array(e, { name: n, deep: !1 })
                : m(e)
                  ? Ve.object(e, void 0, { name: n, deep: !1 })
                  : j(e)
                    ? Ve.map(e, { name: n, deep: !1 })
                    : k(e)
                      ? Ve.set(e, { name: n, deep: !1 })
                      : void 0;
          },
        }),
        xe = he("observable.struct", {
          enhancer: function (e, t) {
            return hr(e, t) ? t : e;
          },
        }),
        Ee = K(Ae);
      function Pe(e) {
        return !0 === e.deep
          ? X
          : !1 === e.deep
            ? Y
            : (t = e.defaultDecorator) &&
                null != (n = null == (r = t.options_) ? void 0 : r.enhancer)
              ? n
              : X;
        var t, n, r;
      }
      function Ce(e, t, n) {
        return q(t)
          ? Ae.decorate_20223_(e, t)
          : y(t)
            ? void G(e, t, Ae)
            : un(e)
              ? e
              : m(e)
                ? Ve.object(e, t, n)
                : Array.isArray(e)
                  ? Ve.array(e, t)
                  : j(e)
                    ? Ve.map(e, t)
                    : k(e)
                      ? Ve.set(e, t)
                      : "object" == typeof e && null !== e
                        ? e
                        : Ve.box(e, t);
      }
      a(Ce, Ee);
      var Re,
        Te,
        Ve = a(Ce, {
          box: function (e, t) {
            var n = Se(t);
            return new ze(e, Pe(n), n.name, !0, n.equals);
          },
          array: function (e, t) {
            var n = Se(t);
            return (!1 === dt.useProxies || !1 === n.proxy ? ar : jn)(
              e,
              Pe(n),
              n.name,
            );
          },
          map: function (e, t) {
            var n = Se(t);
            return new Nn(e, Pe(n), n.name);
          },
          set: function (e, t) {
            var n = Se(t);
            return new In(e, Pe(n), n.name);
          },
          object: function (e, t, n) {
            return lr(function () {
              return Qt(
                !1 === dt.useProxies || !1 === (null == n ? void 0 : n.proxy)
                  ? Hn({}, n)
                  : (function (e, t) {
                      var n, r;
                      return (
                        v(),
                        (e = Hn(e, t)),
                        null != (r = (n = e[H]).proxy_)
                          ? r
                          : (n.proxy_ = new Proxy(e, _n))
                      );
                    })({}, n),
                e,
                t,
              );
            });
          },
          ref: K(je),
          shallow: K(ke),
          deep: Ee,
          struct: K(xe),
        }),
        Le = "computed",
        De = ue(Le),
        Ne = ue("computed.struct", { equals: F.structural }),
        Be = function (e, t) {
          if (q(t)) return De.decorate_20223_(e, t);
          if (y(t)) return G(e, t, De);
          if (m(e)) return K(ue(Le, e));
          var n = m(t) ? t : {};
          return (n.get = e), n.name || (n.name = e.name || ""), new Ye(n);
        };
      Object.assign(Be, De), (Be.struct = K(Ne));
      var Me = 0,
        Ie = 1,
        Ue =
          null !=
            (Re =
              null == (Te = s(function () {}, "name"))
                ? void 0
                : Te.configurable) && Re,
        Ke = {
          value: "action",
          configurable: !0,
          writable: !1,
          enumerable: !1,
        };
      function Ge(e, t, n, r) {
        function i() {
          return qe(e, n, t, r || this, arguments);
        }
        return (
          void 0 === n && (n = !1),
          (i.isMobxAction = !0),
          (i.toString = function () {
            return t.toString();
          }),
          Ue && ((Ke.value = e), u(i, "name", Ke)),
          i
        );
      }
      function qe(e, t, n, i, o) {
        var a = (function (e, t) {
          var n = !1,
            r = 0;
          0;
          var i = dt.trackingDerivation,
            o = !t || !i;
          gt();
          var a = dt.allowStateChanges;
          o && (st(), (a = $e(!0)));
          var s = ct(!0),
            u = {
              runAsAction_: o,
              prevDerivation_: i,
              prevAllowStateChanges_: a,
              prevAllowStateReads_: s,
              notifySpy_: n,
              startTime_: r,
              actionId_: Ie++,
              parentActionId_: Me,
            };
          return (Me = u.actionId_), u;
        })(0, t);
        try {
          return n.apply(i, o);
        } catch (e) {
          throw ((a.error_ = e), e);
        } finally {
          !(function (e) {
            Me !== e.actionId_ && r(30);
            (Me = e.parentActionId_),
              void 0 !== e.error_ && (dt.suppressReactionErrors = !0);
            We(e.prevAllowStateChanges_),
              lt(e.prevAllowStateReads_),
              mt(),
              e.runAsAction_ && ut(e.prevDerivation_);
            0;
            dt.suppressReactionErrors = !1;
          })(a);
        }
      }
      function He(e, t) {
        var n = $e(e);
        try {
          return t();
        } finally {
          We(n);
        }
      }
      function $e(e) {
        var t = dt.allowStateChanges;
        return (dt.allowStateChanges = e), t;
      }
      function We(e) {
        dt.allowStateChanges = e;
      }
      var ze = (function (e) {
        function t(t, n, r, i, o) {
          var a;
          return (
            void 0 === r && (r = "ObservableValue"),
            void 0 === i && (i = !0),
            void 0 === o && (o = F.default),
            ((a = e.call(this, r) || this).enhancer = void 0),
            (a.name_ = void 0),
            (a.equals = void 0),
            (a.hasUnreportedChange_ = !1),
            (a.interceptors_ = void 0),
            (a.changeListeners_ = void 0),
            (a.value_ = void 0),
            (a.dehancer = void 0),
            (a.enhancer = n),
            (a.name_ = r),
            (a.equals = o),
            (a.value_ = n(t, void 0, r)),
            a
          );
        }
        B(t, e);
        var n = t.prototype;
        return (
          (n.dehanceValue = function (e) {
            return void 0 !== this.dehancer ? this.dehancer(e) : e;
          }),
          (n.set = function (e) {
            this.value_;
            if ((e = this.prepareNewValue_(e)) !== dt.UNCHANGED) {
              0, this.setNewValue_(e);
            }
          }),
          (n.prepareNewValue_ = function (e) {
            if ((rt(this), vn(this))) {
              var t = pn(this, { object: this, type: wn, newValue: e });
              if (!t) return dt.UNCHANGED;
              e = t.newValue;
            }
            return (
              (e = this.enhancer(e, this.value_, this.name_)),
              this.equals(this.value_, e) ? dt.UNCHANGED : e
            );
          }),
          (n.setNewValue_ = function (e) {
            var t = this.value_;
            (this.value_ = e),
              this.reportChanged(),
              bn(this) &&
                gn(this, { type: wn, object: this, newValue: e, oldValue: t });
          }),
          (n.get = function () {
            return this.reportObserved(), this.dehanceValue(this.value_);
          }),
          (n.intercept_ = function (e) {
            return dn(this, e);
          }),
          (n.observe_ = function (e, t) {
            return (
              t &&
                e({
                  observableKind: "value",
                  debugObjectName: this.name_,
                  object: this,
                  type: wn,
                  newValue: this.value_,
                  oldValue: void 0,
                }),
              yn(this, e)
            );
          }),
          (n.raw = function () {
            return this.value_;
          }),
          (n.toJSON = function () {
            return this.get();
          }),
          (n.toString = function () {
            return this.name_ + "[" + this.value_ + "]";
          }),
          (n.valueOf = function () {
            return P(this.get());
          }),
          (n[Symbol.toPrimitive] = function () {
            return this.valueOf();
          }),
          t
        );
      })($);
      function Fe(e, t) {
        return !!(e & t);
      }
      function Xe(e, t, n) {
        return n ? (e |= t) : (e &= ~t), e;
      }
      var Ye = (function () {
        function e(e) {
          (this.dependenciesState_ = Je.NOT_TRACKING_),
            (this.observing_ = []),
            (this.newObserving_ = null),
            (this.observers_ = new Set()),
            (this.diffValue_ = 0),
            (this.runId_ = 0),
            (this.lastAccessedBy_ = 0),
            (this.lowestObserverState_ = Je.UP_TO_DATE_),
            (this.unboundDepsCount_ = 0),
            (this.value_ = new et(null)),
            (this.name_ = void 0),
            (this.triggeredBy_ = void 0),
            (this.flags_ = 0),
            (this.derivation = void 0),
            (this.setter_ = void 0),
            (this.isTracing_ = Qe.NONE),
            (this.scope_ = void 0),
            (this.equals_ = void 0),
            (this.requiresReaction_ = void 0),
            (this.keepAlive_ = void 0),
            (this.onBOL = void 0),
            (this.onBUOL = void 0),
            e.get || r(31),
            (this.derivation = e.get),
            (this.name_ = e.name || "ComputedValue"),
            e.set && (this.setter_ = Ge("ComputedValue-setter", e.set)),
            (this.equals_ =
              e.equals ||
              (e.compareStructural || e.struct ? F.structural : F.default)),
            (this.scope_ = e.context),
            (this.requiresReaction_ = e.requiresReaction),
            (this.keepAlive_ = !!e.keepAlive);
        }
        var t = e.prototype;
        return (
          (t.onBecomeStale_ = function () {
            !(function (e) {
              if (e.lowestObserverState_ !== Je.UP_TO_DATE_) return;
              (e.lowestObserverState_ = Je.POSSIBLY_STALE_),
                e.observers_.forEach(function (e) {
                  e.dependenciesState_ === Je.UP_TO_DATE_ &&
                    ((e.dependenciesState_ = Je.POSSIBLY_STALE_),
                    e.onBecomeStale_());
                });
            })(this);
          }),
          (t.onBO = function () {
            this.onBOL &&
              this.onBOL.forEach(function (e) {
                return e();
              });
          }),
          (t.onBUO = function () {
            this.onBUOL &&
              this.onBUOL.forEach(function (e) {
                return e();
              });
          }),
          (t.get = function () {
            if (
              (this.isComputing && r(32, this.name_, this.derivation),
              0 !== dt.inBatch || 0 !== this.observers_.size || this.keepAlive_)
            ) {
              if ((Ot(this), nt(this))) {
                var e = dt.trackingContext;
                this.keepAlive_ && !e && (dt.trackingContext = this),
                  this.trackAndCompute() &&
                    (function (e) {
                      if (e.lowestObserverState_ === Je.STALE_) return;
                      (e.lowestObserverState_ = Je.STALE_),
                        e.observers_.forEach(function (t) {
                          t.dependenciesState_ === Je.POSSIBLY_STALE_
                            ? (t.dependenciesState_ = Je.STALE_)
                            : t.dependenciesState_ === Je.UP_TO_DATE_ &&
                              (e.lowestObserverState_ = Je.UP_TO_DATE_);
                        });
                    })(this),
                  (dt.trackingContext = e);
              }
            } else
              nt(this) &&
                (this.warnAboutUntrackedRead_(),
                gt(),
                (this.value_ = this.computeValue_(!1)),
                mt());
            var t = this.value_;
            if (tt(t)) throw t.cause;
            return t;
          }),
          (t.set = function (e) {
            if (this.setter_) {
              this.isRunningSetter && r(33, this.name_),
                (this.isRunningSetter = !0);
              try {
                this.setter_.call(this.scope_, e);
              } finally {
                this.isRunningSetter = !1;
              }
            } else r(34, this.name_);
          }),
          (t.trackAndCompute = function () {
            var e = this.value_,
              t = this.dependenciesState_ === Je.NOT_TRACKING_,
              n = this.computeValue_(!0),
              r = t || tt(e) || tt(n) || !this.equals_(e, n);
            return r && (this.value_ = n), r;
          }),
          (t.computeValue_ = function (e) {
            this.isComputing = !0;
            var t,
              n = $e(!1);
            if (e) t = it(this, this.derivation, this.scope_);
            else if (!0 === dt.disableErrorBoundaries)
              t = this.derivation.call(this.scope_);
            else
              try {
                t = this.derivation.call(this.scope_);
              } catch (e) {
                t = new et(e);
              }
            return We(n), (this.isComputing = !1), t;
          }),
          (t.suspend_ = function () {
            this.keepAlive_ || (ot(this), (this.value_ = void 0));
          }),
          (t.observe_ = function (e, t) {
            var n = this,
              r = !0,
              i = void 0;
            return Kt(function () {
              var o = n.get();
              if (!r || t) {
                var a = st();
                e({
                  observableKind: "computed",
                  debugObjectName: n.name_,
                  type: wn,
                  object: n,
                  newValue: o,
                  oldValue: i,
                }),
                  ut(a);
              }
              (r = !1), (i = o);
            });
          }),
          (t.warnAboutUntrackedRead_ = function () {}),
          (t.toString = function () {
            return this.name_ + "[" + this.derivation.toString() + "]";
          }),
          (t.valueOf = function () {
            return P(this.get());
          }),
          (t[Symbol.toPrimitive] = function () {
            return this.valueOf();
          }),
          L(e, [
            {
              key: "isComputing",
              get: function () {
                return Fe(this.flags_, e.isComputingMask_);
              },
              set: function (t) {
                this.flags_ = Xe(this.flags_, e.isComputingMask_, t);
              },
            },
            {
              key: "isRunningSetter",
              get: function () {
                return Fe(this.flags_, e.isRunningSetterMask_);
              },
              set: function (t) {
                this.flags_ = Xe(this.flags_, e.isRunningSetterMask_, t);
              },
            },
            {
              key: "isBeingObserved",
              get: function () {
                return Fe(this.flags_, e.isBeingObservedMask_);
              },
              set: function (t) {
                this.flags_ = Xe(this.flags_, e.isBeingObservedMask_, t);
              },
            },
            {
              key: "isPendingUnobservation",
              get: function () {
                return Fe(this.flags_, e.isPendingUnobservationMask_);
              },
              set: function (t) {
                this.flags_ = Xe(this.flags_, e.isPendingUnobservationMask_, t);
              },
            },
          ])
        );
      })();
      (Ye.isComputingMask_ = 1),
        (Ye.isRunningSetterMask_ = 2),
        (Ye.isBeingObservedMask_ = 4),
        (Ye.isPendingUnobservationMask_ = 8);
      var Je,
        Qe,
        Ze = A("ComputedValue", Ye);
      !(function (e) {
        (e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
          (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
          (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
          (e[(e.STALE_ = 2)] = "STALE_");
      })(Je || (Je = {})),
        (function (e) {
          (e[(e.NONE = 0)] = "NONE"),
            (e[(e.LOG = 1)] = "LOG"),
            (e[(e.BREAK = 2)] = "BREAK");
        })(Qe || (Qe = {}));
      var et = function (e) {
        (this.cause = void 0), (this.cause = e);
      };
      function tt(e) {
        return e instanceof et;
      }
      function nt(e) {
        switch (e.dependenciesState_) {
          case Je.UP_TO_DATE_:
            return !1;
          case Je.NOT_TRACKING_:
          case Je.STALE_:
            return !0;
          case Je.POSSIBLY_STALE_:
            for (
              var t = ct(!0), n = st(), r = e.observing_, i = r.length, o = 0;
              o < i;
              o++
            ) {
              var a = r[o];
              if (Ze(a)) {
                if (dt.disableErrorBoundaries) a.get();
                else
                  try {
                    a.get();
                  } catch (e) {
                    return ut(n), lt(t), !0;
                  }
                if (e.dependenciesState_ === Je.STALE_) return ut(n), lt(t), !0;
              }
            }
            return ft(e), ut(n), lt(t), !1;
        }
      }
      function rt(e) {}
      function it(e, t, n) {
        var r = ct(!0);
        ft(e),
          (e.newObserving_ = new Array(
            0 === e.runId_ ? 100 : e.observing_.length,
          )),
          (e.unboundDepsCount_ = 0),
          (e.runId_ = ++dt.runId);
        var i,
          o = dt.trackingDerivation;
        if (
          ((dt.trackingDerivation = e),
          dt.inBatch++,
          !0 === dt.disableErrorBoundaries)
        )
          i = t.call(n);
        else
          try {
            i = t.call(n);
          } catch (e) {
            i = new et(e);
          }
        return (
          dt.inBatch--,
          (dt.trackingDerivation = o),
          (function (e) {
            for (
              var t = e.observing_,
                n = (e.observing_ = e.newObserving_),
                r = Je.UP_TO_DATE_,
                i = 0,
                o = e.unboundDepsCount_,
                a = 0;
              a < o;
              a++
            ) {
              var s = n[a];
              0 === s.diffValue_ &&
                ((s.diffValue_ = 1), i !== a && (n[i] = s), i++),
                s.dependenciesState_ > r && (r = s.dependenciesState_);
            }
            (n.length = i), (e.newObserving_ = null), (o = t.length);
            for (; o--; ) {
              var u = t[o];
              0 === u.diffValue_ && bt(u, e), (u.diffValue_ = 0);
            }
            for (; i--; ) {
              var c = n[i];
              1 === c.diffValue_ && ((c.diffValue_ = 0), pt(c, e));
            }
            r !== Je.UP_TO_DATE_ &&
              ((e.dependenciesState_ = r), e.onBecomeStale_());
          })(e),
          lt(r),
          i
        );
      }
      function ot(e) {
        var t = e.observing_;
        e.observing_ = [];
        for (var n = t.length; n--; ) bt(t[n], e);
        e.dependenciesState_ = Je.NOT_TRACKING_;
      }
      function at(e) {
        var t = st();
        try {
          return e();
        } finally {
          ut(t);
        }
      }
      function st() {
        var e = dt.trackingDerivation;
        return (dt.trackingDerivation = null), e;
      }
      function ut(e) {
        dt.trackingDerivation = e;
      }
      function ct(e) {
        var t = dt.allowStateReads;
        return (dt.allowStateReads = e), t;
      }
      function lt(e) {
        dt.allowStateReads = e;
      }
      function ft(e) {
        if (e.dependenciesState_ !== Je.UP_TO_DATE_) {
          e.dependenciesState_ = Je.UP_TO_DATE_;
          for (var t = e.observing_, n = t.length; n--; )
            t[n].lowestObserverState_ = Je.UP_TO_DATE_;
        }
      }
      var ht = function () {
          (this.version = 6),
            (this.UNCHANGED = {}),
            (this.trackingDerivation = null),
            (this.trackingContext = null),
            (this.runId = 0),
            (this.mobxGuid = 0),
            (this.inBatch = 0),
            (this.pendingUnobservations = []),
            (this.pendingReactions = []),
            (this.isRunningReactions = !1),
            (this.allowStateChanges = !1),
            (this.allowStateReads = !0),
            (this.enforceActions = !0),
            (this.spyListeners = []),
            (this.globalReactionErrorHandlers = []),
            (this.computedRequiresReaction = !1),
            (this.reactionRequiresObservable = !1),
            (this.observableRequiresReaction = !1),
            (this.disableErrorBoundaries = !1),
            (this.suppressReactionErrors = !1),
            (this.useProxies = !0),
            (this.verifyProxies = !1),
            (this.safeDescriptors = !0);
        },
        _t = !0,
        vt = !1,
        dt = (function () {
          var e = o();
          return (
            e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (_t = !1),
            e.__mobxGlobals &&
              e.__mobxGlobals.version !== new ht().version &&
              (_t = !1),
            _t
              ? e.__mobxGlobals
                ? ((e.__mobxInstanceCount += 1),
                  e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
                  e.__mobxGlobals)
                : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new ht()))
              : (setTimeout(function () {
                  vt || r(35);
                }, 1),
                new ht())
          );
        })();
      function pt(e, t) {
        e.observers_.add(t),
          e.lowestObserverState_ > t.dependenciesState_ &&
            (e.lowestObserverState_ = t.dependenciesState_);
      }
      function bt(e, t) {
        e.observers_.delete(t), 0 === e.observers_.size && yt(e);
      }
      function yt(e) {
        !1 === e.isPendingUnobservation &&
          ((e.isPendingUnobservation = !0), dt.pendingUnobservations.push(e));
      }
      function gt() {
        dt.inBatch++;
      }
      function mt() {
        if (0 === --dt.inBatch) {
          kt();
          for (var e = dt.pendingUnobservations, t = 0; t < e.length; t++) {
            var n = e[t];
            (n.isPendingUnobservation = !1),
              0 === n.observers_.size &&
                (n.isBeingObserved && ((n.isBeingObserved = !1), n.onBUO()),
                n instanceof Ye && n.suspend_());
          }
          dt.pendingUnobservations = [];
        }
      }
      function Ot(e) {
        var t = dt.trackingDerivation;
        return null !== t
          ? (t.runId_ !== e.lastAccessedBy_ &&
              ((e.lastAccessedBy_ = t.runId_),
              (t.newObserving_[t.unboundDepsCount_++] = e),
              !e.isBeingObserved &&
                dt.trackingContext &&
                ((e.isBeingObserved = !0), e.onBO())),
            e.isBeingObserved)
          : (0 === e.observers_.size && dt.inBatch > 0 && yt(e), !1);
      }
      function wt(e) {
        e.lowestObserverState_ !== Je.STALE_ &&
          ((e.lowestObserverState_ = Je.STALE_),
          e.observers_.forEach(function (e) {
            e.dependenciesState_ === Je.UP_TO_DATE_ && e.onBecomeStale_(),
              (e.dependenciesState_ = Je.STALE_);
          }));
      }
      var St = (function () {
        function e(e, t, n, r) {
          void 0 === e && (e = "Reaction"),
            (this.name_ = void 0),
            (this.onInvalidate_ = void 0),
            (this.errorHandler_ = void 0),
            (this.requiresObservable_ = void 0),
            (this.observing_ = []),
            (this.newObserving_ = []),
            (this.dependenciesState_ = Je.NOT_TRACKING_),
            (this.diffValue_ = 0),
            (this.runId_ = 0),
            (this.unboundDepsCount_ = 0),
            (this.isDisposed_ = !1),
            (this.isScheduled_ = !1),
            (this.isTrackPending_ = !1),
            (this.isRunning_ = !1),
            (this.isTracing_ = Qe.NONE),
            (this.name_ = e),
            (this.onInvalidate_ = t),
            (this.errorHandler_ = n),
            (this.requiresObservable_ = r);
        }
        var t = e.prototype;
        return (
          (t.onBecomeStale_ = function () {
            this.schedule_();
          }),
          (t.schedule_ = function () {
            this.isScheduled_ ||
              ((this.isScheduled_ = !0), dt.pendingReactions.push(this), kt());
          }),
          (t.isScheduled = function () {
            return this.isScheduled_;
          }),
          (t.runReaction_ = function () {
            if (!this.isDisposed_) {
              gt(), (this.isScheduled_ = !1);
              var e = dt.trackingContext;
              if (((dt.trackingContext = this), nt(this))) {
                this.isTrackPending_ = !0;
                try {
                  this.onInvalidate_();
                } catch (e) {
                  this.reportExceptionInDerivation_(e);
                }
              }
              (dt.trackingContext = e), mt();
            }
          }),
          (t.track = function (e) {
            if (!this.isDisposed_) {
              gt();
              0, (this.isRunning_ = !0);
              var t = dt.trackingContext;
              dt.trackingContext = this;
              var n = it(this, e, void 0);
              (dt.trackingContext = t),
                (this.isRunning_ = !1),
                (this.isTrackPending_ = !1),
                this.isDisposed_ && ot(this),
                tt(n) && this.reportExceptionInDerivation_(n.cause),
                mt();
            }
          }),
          (t.reportExceptionInDerivation_ = function (e) {
            var t = this;
            if (this.errorHandler_) this.errorHandler_(e, this);
            else {
              if (dt.disableErrorBoundaries) throw e;
              var n = "[mobx] uncaught error in '" + this + "'";
              dt.suppressReactionErrors || console.error(n, e),
                dt.globalReactionErrorHandlers.forEach(function (n) {
                  return n(e, t);
                });
            }
          }),
          (t.dispose = function () {
            this.isDisposed_ ||
              ((this.isDisposed_ = !0),
              this.isRunning_ || (gt(), ot(this), mt()));
          }),
          (t.getDisposer_ = function (e) {
            var t = this,
              n = function n() {
                t.dispose(),
                  null == e ||
                    null == e.removeEventListener ||
                    e.removeEventListener("abort", n);
              };
            return (
              null == e ||
                null == e.addEventListener ||
                e.addEventListener("abort", n),
              (n[H] = this),
              n
            );
          }),
          (t.toString = function () {
            return "Reaction[" + this.name_ + "]";
          }),
          (t.trace = function (e) {
            void 0 === e && (e = !1);
          }),
          e
        );
      })();
      var At = 100,
        jt = function (e) {
          return e();
        };
      function kt() {
        dt.inBatch > 0 || dt.isRunningReactions || jt(xt);
      }
      function xt() {
        dt.isRunningReactions = !0;
        for (var e = dt.pendingReactions, t = 0; e.length > 0; ) {
          ++t === At &&
            (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
          for (var n = e.splice(0), r = 0, i = n.length; r < i; r++)
            n[r].runReaction_();
        }
        dt.isRunningReactions = !1;
      }
      var Et = A("Reaction", St);
      var Pt = "action",
        Ct = "autoAction",
        Rt = "<unnamed action>",
        Tt = Q(Pt),
        Vt = Q("action.bound", { bound: !0 }),
        Lt = Q(Ct, { autoAction: !0 }),
        Dt = Q("autoAction.bound", { autoAction: !0, bound: !0 });
      function Nt(e) {
        return function (t, n) {
          return b(t)
            ? Ge(t.name || Rt, t, e)
            : b(n)
              ? Ge(t, n, e)
              : q(n)
                ? (e ? Lt : Tt).decorate_20223_(t, n)
                : y(n)
                  ? G(t, n, e ? Lt : Tt)
                  : y(t)
                    ? K(Q(e ? Ct : Pt, { name: t, autoAction: e }))
                    : void 0;
        };
      }
      var Bt = Nt(!1);
      Object.assign(Bt, Tt);
      var Mt = Nt(!0);
      function It(e) {
        return qe(e.name, !1, e, this, void 0);
      }
      function Ut(e) {
        return b(e) && !0 === e.isMobxAction;
      }
      function Kt(e, t) {
        var n, r, i, o;
        void 0 === t && (t = f);
        var a,
          s = null != (n = null == (r = t) ? void 0 : r.name) ? n : "Autorun";
        if (!t.scheduler && !t.delay)
          a = new St(
            s,
            function () {
              this.track(l);
            },
            t.onError,
            t.requiresObservable,
          );
        else {
          var u = qt(t),
            c = !1;
          a = new St(
            s,
            function () {
              c ||
                ((c = !0),
                u(function () {
                  (c = !1), a.isDisposed_ || a.track(l);
                }));
            },
            t.onError,
            t.requiresObservable,
          );
        }
        function l() {
          e(a);
        }
        return (
          (null != (i = t) && null != (i = i.signal) && i.aborted) ||
            a.schedule_(),
          a.getDisposer_(null == (o = t) ? void 0 : o.signal)
        );
      }
      Object.assign(Mt, Lt), (Bt.bound = K(Vt)), (Mt.bound = K(Dt));
      var Gt = function (e) {
        return e();
      };
      function qt(e) {
        return e.scheduler
          ? e.scheduler
          : e.delay
            ? function (t) {
                return setTimeout(t, e.delay);
              }
            : Gt;
      }
      var Ht = "onBO",
        $t = "onBUO";
      function Wt(e, t, n) {
        return zt($t, e, t, n);
      }
      function zt(e, t, n, r) {
        var i = "function" == typeof r ? sr(t, n) : sr(t),
          o = b(r) ? r : n,
          a = e + "L";
        return (
          i[a] ? i[a].add(o) : (i[a] = new Set([o])),
          function () {
            var e = i[a];
            e && (e.delete(o), 0 === e.size && delete i[a]);
          }
        );
      }
      var Ft = "never",
        Xt = "always",
        Yt = "observed";
      function Jt(e) {
        !0 === e.isolateGlobalState &&
          (function () {
            if (
              ((dt.pendingReactions.length ||
                dt.inBatch ||
                dt.isRunningReactions) &&
                r(36),
              (vt = !0),
              _t)
            ) {
              var e = o();
              0 === --e.__mobxInstanceCount && (e.__mobxGlobals = void 0),
                (dt = new ht());
            }
          })();
        var t,
          n,
          i = e.useProxies,
          a = e.enforceActions;
        if (
          (void 0 !== i &&
            (dt.useProxies =
              i === Xt || (i !== Ft && "undefined" != typeof Proxy)),
          "ifavailable" === i && (dt.verifyProxies = !0),
          void 0 !== a)
        ) {
          var s = a === Xt ? Xt : a === Yt;
          (dt.enforceActions = s),
            (dt.allowStateChanges = !0 !== s && s !== Xt);
        }
        [
          "computedRequiresReaction",
          "reactionRequiresObservable",
          "observableRequiresReaction",
          "disableErrorBoundaries",
          "safeDescriptors",
        ].forEach(function (t) {
          t in e && (dt[t] = !!e[t]);
        }),
          (dt.allowStateReads = !dt.observableRequiresReaction),
          e.reactionScheduler &&
            ((t = e.reactionScheduler),
            (n = jt),
            (jt = function (e) {
              return t(function () {
                return n(e);
              });
            }));
      }
      function Qt(e, t, n, r) {
        var i = R(t);
        return (
          lr(function () {
            var t = Hn(e, r)[H];
            E(i).forEach(function (e) {
              t.extend_(e, i[e], !n || !(e in n) || n[e]);
            });
          }),
          e
        );
      }
      var Zt = 0;
      function en() {
        this.message = "FLOW_CANCELLED";
      }
      en.prototype = Object.create(Error.prototype);
      var tn = re("flow"),
        nn = re("flow.bound", { bound: !0 }),
        rn = Object.assign(function (e, t) {
          if (q(t)) return tn.decorate_20223_(e, t);
          if (y(t)) return G(e, t, tn);
          var n = e,
            r = n.name || "<unnamed flow>",
            i = function () {
              var e,
                t = arguments,
                i = ++Zt,
                o = Bt(r + " - runid: " + i + " - init", n).apply(this, t),
                a = void 0,
                s = new Promise(function (t, n) {
                  var s = 0;
                  function u(e) {
                    var t;
                    a = void 0;
                    try {
                      t = Bt(
                        r + " - runid: " + i + " - yield " + s++,
                        o.next,
                      ).call(o, e);
                    } catch (e) {
                      return n(e);
                    }
                    l(t);
                  }
                  function c(e) {
                    var t;
                    a = void 0;
                    try {
                      t = Bt(
                        r + " - runid: " + i + " - yield " + s++,
                        o.throw,
                      ).call(o, e);
                    } catch (e) {
                      return n(e);
                    }
                    l(t);
                  }
                  function l(e) {
                    if (!b(null == e ? void 0 : e.then))
                      return e.done
                        ? t(e.value)
                        : (a = Promise.resolve(e.value)).then(u, c);
                    e.then(l, n);
                  }
                  (e = n), u(void 0);
                });
              return (
                (s.cancel = Bt(r + " - runid: " + i + " - cancel", function () {
                  try {
                    a && on(a);
                    var t = o.return(void 0),
                      n = Promise.resolve(t.value);
                    n.then(p, p), on(n), e(new en());
                  } catch (t) {
                    e(t);
                  }
                })),
                s
              );
            };
          return (i.isMobXFlow = !0), i;
        }, tn);
      function on(e) {
        b(e.cancel) && e.cancel();
      }
      function an(e) {
        return !0 === (null == e ? void 0 : e.isMobXFlow);
      }
      function sn(e, t) {
        return (
          !!e &&
          (void 0 !== t
            ? !!zn(e) && e[H].values_.has(t)
            : zn(e) || !!e[H] || W(e) || Et(e) || Ze(e))
        );
      }
      function un(e) {
        return sn(e);
      }
      function cn(e, t) {
        void 0 === t && (t = void 0), gt();
        try {
          return e.apply(t);
        } finally {
          mt();
        }
      }
      function ln(e, t, n) {
        return 1 === arguments.length || (t && "object" == typeof t)
          ? (function (e, t) {
              var n, r, i;
              0;
              if (null != t && null != (n = t.signal) && n.aborted)
                return Object.assign(
                  Promise.reject(new Error("WHEN_ABORTED")),
                  {
                    cancel: function () {
                      return null;
                    },
                  },
                );
              var o = new Promise(function (n, o) {
                var a,
                  s = fn(e, n, N({}, t, { onError: o }));
                (r = function () {
                  s(), o(new Error("WHEN_CANCELLED"));
                }),
                  (i = function () {
                    s(), o(new Error("WHEN_ABORTED"));
                  }),
                  null == t ||
                    null == (a = t.signal) ||
                    null == a.addEventListener ||
                    a.addEventListener("abort", i);
              }).finally(function () {
                var e;
                return null == t ||
                  null == (e = t.signal) ||
                  null == e.removeEventListener
                  ? void 0
                  : e.removeEventListener("abort", i);
              });
              return (o.cancel = r), o;
            })(e, t)
          : fn(e, t, n || {});
      }
      function fn(e, t, n) {
        var r;
        if ("number" == typeof n.timeout) {
          var i = new Error("WHEN_TIMEOUT");
          r = setTimeout(function () {
            if (!a[H].isDisposed_) {
              if ((a(), !n.onError)) throw i;
              n.onError(i);
            }
          }, n.timeout);
        }
        n.name = "When";
        var o = Ge("When-effect", t),
          a = Kt(function (t) {
            He(!1, e) && (t.dispose(), r && clearTimeout(r), o());
          }, n);
        return a;
      }
      function hn(e) {
        return e[H];
      }
      rn.bound = K(nn);
      var _n = {
        has: function (e, t) {
          return hn(e).has_(t);
        },
        get: function (e, t) {
          return hn(e).get_(t);
        },
        set: function (e, t, n) {
          var r;
          return !!y(t) && (null == (r = hn(e).set_(t, n, !0)) || r);
        },
        deleteProperty: function (e, t) {
          var n;
          return !!y(t) && (null == (n = hn(e).delete_(t, !0)) || n);
        },
        defineProperty: function (e, t, n) {
          var r;
          return null == (r = hn(e).defineProperty_(t, n)) || r;
        },
        ownKeys: function (e) {
          return hn(e).ownKeys_();
        },
        preventExtensions: function (e) {
          r(13);
        },
      };
      function vn(e) {
        return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
      }
      function dn(e, t) {
        var n = e.interceptors_ || (e.interceptors_ = []);
        return (
          n.push(t),
          d(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
          })
        );
      }
      function pn(e, t) {
        var n = st();
        try {
          for (
            var i = [].concat(e.interceptors_ || []), o = 0, a = i.length;
            o < a && ((t = i[o](t)) && !t.type && r(14), t);
            o++
          );
          return t;
        } finally {
          ut(n);
        }
      }
      function bn(e) {
        return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
      }
      function yn(e, t) {
        var n = e.changeListeners_ || (e.changeListeners_ = []);
        return (
          n.push(t),
          d(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
          })
        );
      }
      function gn(e, t) {
        var n = st(),
          r = e.changeListeners_;
        if (r) {
          for (var i = 0, o = (r = r.slice()).length; i < o; i++) r[i](t);
          ut(n);
        }
      }
      function mn(e, t, n) {
        return (
          lr(function () {
            var r = Hn(e, n)[H];
            null != t ||
              (t = (function (e) {
                return C(e, U) || w(e, U, N({}, e[U])), e[U];
              })(e)),
              E(t).forEach(function (e) {
                return r.make_(e, t[e]);
              });
          }),
          e
        );
      }
      var On = "splice",
        wn = "update",
        Sn = {
          get: function (e, t) {
            var n = e[H];
            return t === H
              ? n
              : "length" === t
                ? n.getArrayLength_()
                : "string" != typeof t || isNaN(t)
                  ? C(kn, t)
                    ? kn[t]
                    : e[t]
                  : n.get_(parseInt(t));
          },
          set: function (e, t, n) {
            var r = e[H];
            return (
              "length" === t && r.setArrayLength_(n),
              "symbol" == typeof t || isNaN(t)
                ? (e[t] = n)
                : r.set_(parseInt(t), n),
              !0
            );
          },
          preventExtensions: function () {
            r(15);
          },
        },
        An = (function () {
          function e(e, t, n, r) {
            void 0 === e && (e = "ObservableArray"),
              (this.owned_ = void 0),
              (this.legacyMode_ = void 0),
              (this.atom_ = void 0),
              (this.values_ = []),
              (this.interceptors_ = void 0),
              (this.changeListeners_ = void 0),
              (this.enhancer_ = void 0),
              (this.dehancer = void 0),
              (this.proxy_ = void 0),
              (this.lastKnownLength_ = 0),
              (this.owned_ = n),
              (this.legacyMode_ = r),
              (this.atom_ = new $(e)),
              (this.enhancer_ = function (e, n) {
                return t(e, n, "ObservableArray[..]");
              });
          }
          var t = e.prototype;
          return (
            (t.dehanceValue_ = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.dehanceValues_ = function (e) {
              return void 0 !== this.dehancer && e.length > 0
                ? e.map(this.dehancer)
                : e;
            }),
            (t.intercept_ = function (e) {
              return dn(this, e);
            }),
            (t.observe_ = function (e, t) {
              return (
                void 0 === t && (t = !1),
                t &&
                  e({
                    observableKind: "array",
                    object: this.proxy_,
                    debugObjectName: this.atom_.name_,
                    type: "splice",
                    index: 0,
                    added: this.values_.slice(),
                    addedCount: this.values_.length,
                    removed: [],
                    removedCount: 0,
                  }),
                yn(this, e)
              );
            }),
            (t.getArrayLength_ = function () {
              return this.atom_.reportObserved(), this.values_.length;
            }),
            (t.setArrayLength_ = function (e) {
              ("number" != typeof e || isNaN(e) || e < 0) &&
                r("Out of range: " + e);
              var t = this.values_.length;
              if (e !== t)
                if (e > t) {
                  for (var n = new Array(e - t), i = 0; i < e - t; i++)
                    n[i] = void 0;
                  this.spliceWithArray_(t, 0, n);
                } else this.spliceWithArray_(e, t - e);
            }),
            (t.updateArrayLength_ = function (e, t) {
              e !== this.lastKnownLength_ && r(16),
                (this.lastKnownLength_ += t),
                this.legacyMode_ && t > 0 && or(e + t + 1);
            }),
            (t.spliceWithArray_ = function (e, t, n) {
              var r = this;
              this.atom_;
              var i = this.values_.length;
              if (
                (void 0 === e
                  ? (e = 0)
                  : e > i
                    ? (e = i)
                    : e < 0 && (e = Math.max(0, i + e)),
                (t =
                  1 === arguments.length
                    ? i - e
                    : null == t
                      ? 0
                      : Math.max(0, Math.min(t, i - e))),
                void 0 === n && (n = l),
                vn(this))
              ) {
                var o = pn(this, {
                  object: this.proxy_,
                  type: On,
                  index: e,
                  removedCount: t,
                  added: n,
                });
                if (!o) return l;
                (t = o.removedCount), (n = o.added);
              }
              if (
                ((n =
                  0 === n.length
                    ? n
                    : n.map(function (e) {
                        return r.enhancer_(e, void 0);
                      })),
                this.legacyMode_)
              ) {
                var a = n.length - t;
                this.updateArrayLength_(i, a);
              }
              var s = this.spliceItemsIntoValues_(e, t, n);
              return (
                (0 === t && 0 === n.length) || this.notifyArraySplice_(e, n, s),
                this.dehanceValues_(s)
              );
            }),
            (t.spliceItemsIntoValues_ = function (e, t, n) {
              var r;
              if (n.length < 1e4)
                return (r = this.values_).splice.apply(r, [e, t].concat(n));
              var i = this.values_.slice(e, e + t),
                o = this.values_.slice(e + t);
              this.values_.length += n.length - t;
              for (var a = 0; a < n.length; a++) this.values_[e + a] = n[a];
              for (var s = 0; s < o.length; s++)
                this.values_[e + n.length + s] = o[s];
              return i;
            }),
            (t.notifyArrayChildUpdate_ = function (e, t, n) {
              var r = !this.owned_ && !1,
                i = bn(this),
                o =
                  i || r
                    ? {
                        observableKind: "array",
                        object: this.proxy_,
                        type: wn,
                        debugObjectName: this.atom_.name_,
                        index: e,
                        newValue: t,
                        oldValue: n,
                      }
                    : null;
              this.atom_.reportChanged(), i && gn(this, o);
            }),
            (t.notifyArraySplice_ = function (e, t, n) {
              var r = !this.owned_ && !1,
                i = bn(this),
                o =
                  i || r
                    ? {
                        observableKind: "array",
                        object: this.proxy_,
                        debugObjectName: this.atom_.name_,
                        type: On,
                        index: e,
                        removed: n,
                        added: t,
                        removedCount: n.length,
                        addedCount: t.length,
                      }
                    : null;
              this.atom_.reportChanged(), i && gn(this, o);
            }),
            (t.get_ = function (e) {
              if (!(this.legacyMode_ && e >= this.values_.length))
                return (
                  this.atom_.reportObserved(),
                  this.dehanceValue_(this.values_[e])
                );
              console.warn("[mobx] Out of bounds read: " + e);
            }),
            (t.set_ = function (e, t) {
              var n = this.values_;
              if (
                (this.legacyMode_ && e > n.length && r(17, e, n.length),
                e < n.length)
              ) {
                this.atom_;
                var i = n[e];
                if (vn(this)) {
                  var o = pn(this, {
                    type: wn,
                    object: this.proxy_,
                    index: e,
                    newValue: t,
                  });
                  if (!o) return;
                  t = o.newValue;
                }
                (t = this.enhancer_(t, i)) !== i &&
                  ((n[e] = t), this.notifyArrayChildUpdate_(e, t, i));
              } else {
                for (
                  var a = new Array(e + 1 - n.length), s = 0;
                  s < a.length - 1;
                  s++
                )
                  a[s] = void 0;
                (a[a.length - 1] = t), this.spliceWithArray_(n.length, 0, a);
              }
            }),
            e
          );
        })();
      function jn(e, t, n, r) {
        return (
          void 0 === n && (n = "ObservableArray"),
          void 0 === r && (r = !1),
          v(),
          lr(function () {
            var i = new An(n, t, r, !1);
            S(i.values_, H, i);
            var o = new Proxy(i.values_, Sn);
            return (
              (i.proxy_ = o), e && e.length && i.spliceWithArray_(0, 0, e), o
            );
          })
        );
      }
      var kn = {
        clear: function () {
          return this.splice(0);
        },
        replace: function (e) {
          var t = this[H];
          return t.spliceWithArray_(0, t.values_.length, e);
        },
        toJSON: function () {
          return this.slice();
        },
        splice: function (e, t) {
          for (
            var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2;
            i < n;
            i++
          )
            r[i - 2] = arguments[i];
          var o = this[H];
          switch (arguments.length) {
            case 0:
              return [];
            case 1:
              return o.spliceWithArray_(e);
            case 2:
              return o.spliceWithArray_(e, t);
          }
          return o.spliceWithArray_(e, t, r);
        },
        spliceWithArray: function (e, t, n) {
          return this[H].spliceWithArray_(e, t, n);
        },
        push: function () {
          for (
            var e = this[H], t = arguments.length, n = new Array(t), r = 0;
            r < t;
            r++
          )
            n[r] = arguments[r];
          return e.spliceWithArray_(e.values_.length, 0, n), e.values_.length;
        },
        pop: function () {
          return this.splice(Math.max(this[H].values_.length - 1, 0), 1)[0];
        },
        shift: function () {
          return this.splice(0, 1)[0];
        },
        unshift: function () {
          for (
            var e = this[H], t = arguments.length, n = new Array(t), r = 0;
            r < t;
            r++
          )
            n[r] = arguments[r];
          return e.spliceWithArray_(0, 0, n), e.values_.length;
        },
        reverse: function () {
          return (
            dt.trackingDerivation && r(37, "reverse"),
            this.replace(this.slice().reverse()),
            this
          );
        },
        sort: function () {
          dt.trackingDerivation && r(37, "sort");
          var e = this.slice();
          return e.sort.apply(e, arguments), this.replace(e), this;
        },
        remove: function (e) {
          var t = this[H],
            n = t.dehanceValues_(t.values_).indexOf(e);
          return n > -1 && (this.splice(n, 1), !0);
        },
      };
      function xn(e, t) {
        "function" == typeof Array.prototype[e] && (kn[e] = t(e));
      }
      function En(e) {
        return function () {
          var t = this[H];
          t.atom_.reportObserved();
          var n = t.dehanceValues_(t.values_);
          return n[e].apply(n, arguments);
        };
      }
      function Pn(e) {
        return function (t, n) {
          var r = this,
            i = this[H];
          return (
            i.atom_.reportObserved(),
            i.dehanceValues_(i.values_)[e](function (e, i) {
              return t.call(n, e, i, r);
            })
          );
        };
      }
      function Cn(e) {
        return function () {
          var t = this,
            n = this[H];
          n.atom_.reportObserved();
          var r = n.dehanceValues_(n.values_),
            i = arguments[0];
          return (
            (arguments[0] = function (e, n, r) {
              return i(e, n, r, t);
            }),
            r[e].apply(r, arguments)
          );
        };
      }
      xn("at", En),
        xn("concat", En),
        xn("flat", En),
        xn("includes", En),
        xn("indexOf", En),
        xn("join", En),
        xn("lastIndexOf", En),
        xn("slice", En),
        xn("toString", En),
        xn("toLocaleString", En),
        xn("toSorted", En),
        xn("toSpliced", En),
        xn("with", En),
        xn("every", Pn),
        xn("filter", Pn),
        xn("find", Pn),
        xn("findIndex", Pn),
        xn("findLast", Pn),
        xn("findLastIndex", Pn),
        xn("flatMap", Pn),
        xn("forEach", Pn),
        xn("map", Pn),
        xn("some", Pn),
        xn("toReversed", Pn),
        xn("reduce", Cn),
        xn("reduceRight", Cn);
      var Rn = A("ObservableArrayAdministration", An);
      function Tn(e) {
        return g(e) && Rn(e[H]);
      }
      var Vn = {},
        Ln = "add",
        Dn = "delete",
        Nn = (function () {
          function e(e, t, n) {
            var i = this;
            void 0 === t && (t = X),
              void 0 === n && (n = "ObservableMap"),
              (this.enhancer_ = void 0),
              (this.name_ = void 0),
              (this[H] = Vn),
              (this.data_ = void 0),
              (this.hasMap_ = void 0),
              (this.keysAtom_ = void 0),
              (this.interceptors_ = void 0),
              (this.changeListeners_ = void 0),
              (this.dehancer = void 0),
              (this.enhancer_ = t),
              (this.name_ = n),
              b(Map) || r(18),
              lr(function () {
                (i.keysAtom_ = z("ObservableMap.keys()")),
                  (i.data_ = new Map()),
                  (i.hasMap_ = new Map()),
                  e && i.merge(e);
              });
          }
          var t = e.prototype;
          return (
            (t.has_ = function (e) {
              return this.data_.has(e);
            }),
            (t.has = function (e) {
              var t = this;
              if (!dt.trackingDerivation) return this.has_(e);
              var n = this.hasMap_.get(e);
              if (!n) {
                var r = (n = new ze(this.has_(e), Y, "ObservableMap.key?", !1));
                this.hasMap_.set(e, r),
                  Wt(r, function () {
                    return t.hasMap_.delete(e);
                  });
              }
              return n.get();
            }),
            (t.set = function (e, t) {
              var n = this.has_(e);
              if (vn(this)) {
                var r = pn(this, {
                  type: n ? wn : Ln,
                  object: this,
                  newValue: t,
                  name: e,
                });
                if (!r) return this;
                t = r.newValue;
              }
              return n ? this.updateValue_(e, t) : this.addValue_(e, t), this;
            }),
            (t.delete = function (e) {
              var t = this;
              if (
                (this.keysAtom_, vn(this)) &&
                !pn(this, { type: Dn, object: this, name: e })
              )
                return !1;
              if (this.has_(e)) {
                var n = bn(this),
                  r = n
                    ? {
                        observableKind: "map",
                        debugObjectName: this.name_,
                        type: Dn,
                        object: this,
                        oldValue: this.data_.get(e).value_,
                        name: e,
                      }
                    : null;
                return (
                  cn(function () {
                    var n;
                    t.keysAtom_.reportChanged(),
                      null == (n = t.hasMap_.get(e)) || n.setNewValue_(!1),
                      t.data_.get(e).setNewValue_(void 0),
                      t.data_.delete(e);
                  }),
                  n && gn(this, r),
                  !0
                );
              }
              return !1;
            }),
            (t.updateValue_ = function (e, t) {
              var n = this.data_.get(e);
              if ((t = n.prepareNewValue_(t)) !== dt.UNCHANGED) {
                var r = bn(this),
                  i = r
                    ? {
                        observableKind: "map",
                        debugObjectName: this.name_,
                        type: wn,
                        object: this,
                        oldValue: n.value_,
                        name: e,
                        newValue: t,
                      }
                    : null;
                0, n.setNewValue_(t), r && gn(this, i);
              }
            }),
            (t.addValue_ = function (e, t) {
              var n = this;
              this.keysAtom_,
                cn(function () {
                  var r,
                    i = new ze(t, n.enhancer_, "ObservableMap.key", !1);
                  n.data_.set(e, i),
                    (t = i.value_),
                    null == (r = n.hasMap_.get(e)) || r.setNewValue_(!0),
                    n.keysAtom_.reportChanged();
                });
              var r = bn(this),
                i = r
                  ? {
                      observableKind: "map",
                      debugObjectName: this.name_,
                      type: Ln,
                      object: this,
                      name: e,
                      newValue: t,
                    }
                  : null;
              r && gn(this, i);
            }),
            (t.get = function (e) {
              return this.has(e)
                ? this.dehanceValue_(this.data_.get(e).get())
                : this.dehanceValue_(void 0);
            }),
            (t.dehanceValue_ = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.keys = function () {
              return this.keysAtom_.reportObserved(), this.data_.keys();
            }),
            (t.values = function () {
              var e = this,
                t = this.keys();
              return dr({
                next: function () {
                  var n = t.next(),
                    r = n.done,
                    i = n.value;
                  return { done: r, value: r ? void 0 : e.get(i) };
                },
              });
            }),
            (t.entries = function () {
              var e = this,
                t = this.keys();
              return dr({
                next: function () {
                  var n = t.next(),
                    r = n.done,
                    i = n.value;
                  return { done: r, value: r ? void 0 : [i, e.get(i)] };
                },
              });
            }),
            (t[Symbol.iterator] = function () {
              return this.entries();
            }),
            (t.forEach = function (e, t) {
              for (var n, r = D(this); !(n = r()).done; ) {
                var i = n.value,
                  o = i[0],
                  a = i[1];
                e.call(t, a, o, this);
              }
            }),
            (t.merge = function (e) {
              var t = this;
              return (
                Bn(e) && (e = new Map(e)),
                cn(function () {
                  var n, i, o;
                  m(e)
                    ? (function (e) {
                        var t = Object.keys(e);
                        if (!x) return t;
                        var n = Object.getOwnPropertySymbols(e);
                        return n.length
                          ? [].concat(
                              t,
                              n.filter(function (t) {
                                return c.propertyIsEnumerable.call(e, t);
                              }),
                            )
                          : t;
                      })(e).forEach(function (n) {
                        return t.set(n, e[n]);
                      })
                    : Array.isArray(e)
                      ? e.forEach(function (e) {
                          var n = e[0],
                            r = e[1];
                          return t.set(n, r);
                        })
                      : j(e)
                        ? ((n = e),
                          (i = Object.getPrototypeOf(n)),
                          (o = Object.getPrototypeOf(i)),
                          null !== Object.getPrototypeOf(o) && r(19, e),
                          e.forEach(function (e, n) {
                            return t.set(n, e);
                          }))
                        : null != e && r(20, e);
                }),
                this
              );
            }),
            (t.clear = function () {
              var e = this;
              cn(function () {
                at(function () {
                  for (var t, n = D(e.keys()); !(t = n()).done; ) {
                    var r = t.value;
                    e.delete(r);
                  }
                });
              });
            }),
            (t.replace = function (e) {
              var t = this;
              return (
                cn(function () {
                  for (
                    var n,
                      i = (function (e) {
                        if (j(e) || Bn(e)) return e;
                        if (Array.isArray(e)) return new Map(e);
                        if (m(e)) {
                          var t = new Map();
                          for (var n in e) t.set(n, e[n]);
                          return t;
                        }
                        return r(21, e);
                      })(e),
                      o = new Map(),
                      a = !1,
                      s = D(t.data_.keys());
                    !(n = s()).done;
                  ) {
                    var u = n.value;
                    if (!i.has(u))
                      if (t.delete(u)) a = !0;
                      else {
                        var c = t.data_.get(u);
                        o.set(u, c);
                      }
                  }
                  for (var l, f = D(i.entries()); !(l = f()).done; ) {
                    var h = l.value,
                      _ = h[0],
                      v = h[1],
                      d = t.data_.has(_);
                    if ((t.set(_, v), t.data_.has(_))) {
                      var p = t.data_.get(_);
                      o.set(_, p), d || (a = !0);
                    }
                  }
                  if (!a)
                    if (t.data_.size !== o.size) t.keysAtom_.reportChanged();
                    else
                      for (
                        var b = t.data_.keys(),
                          y = o.keys(),
                          g = b.next(),
                          O = y.next();
                        !g.done;
                      ) {
                        if (g.value !== O.value) {
                          t.keysAtom_.reportChanged();
                          break;
                        }
                        (g = b.next()), (O = y.next());
                      }
                  t.data_ = o;
                }),
                this
              );
            }),
            (t.toString = function () {
              return "[object ObservableMap]";
            }),
            (t.toJSON = function () {
              return Array.from(this);
            }),
            (t.observe_ = function (e, t) {
              return yn(this, e);
            }),
            (t.intercept_ = function (e) {
              return dn(this, e);
            }),
            L(e, [
              {
                key: "size",
                get: function () {
                  return this.keysAtom_.reportObserved(), this.data_.size;
                },
              },
              {
                key: Symbol.toStringTag,
                get: function () {
                  return "Map";
                },
              },
            ])
          );
        })(),
        Bn = A("ObservableMap", Nn);
      var Mn = {},
        In = (function () {
          function e(e, t, n) {
            var i = this;
            void 0 === t && (t = X),
              void 0 === n && (n = "ObservableSet"),
              (this.name_ = void 0),
              (this[H] = Mn),
              (this.data_ = new Set()),
              (this.atom_ = void 0),
              (this.changeListeners_ = void 0),
              (this.interceptors_ = void 0),
              (this.dehancer = void 0),
              (this.enhancer_ = void 0),
              (this.name_ = n),
              b(Set) || r(22),
              (this.enhancer_ = function (e, r) {
                return t(e, r, n);
              }),
              lr(function () {
                (i.atom_ = z(i.name_)), e && i.replace(e);
              });
          }
          var t = e.prototype;
          return (
            (t.dehanceValue_ = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (t.clear = function () {
              var e = this;
              cn(function () {
                at(function () {
                  for (var t, n = D(e.data_.values()); !(t = n()).done; ) {
                    var r = t.value;
                    e.delete(r);
                  }
                });
              });
            }),
            (t.forEach = function (e, t) {
              for (var n, r = D(this); !(n = r()).done; ) {
                var i = n.value;
                e.call(t, i, i, this);
              }
            }),
            (t.add = function (e) {
              var t = this;
              if (
                (this.atom_, vn(this)) &&
                !pn(this, { type: Ln, object: this, newValue: e })
              )
                return this;
              if (!this.has(e)) {
                cn(function () {
                  t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged();
                });
                var n = !1,
                  r = bn(this),
                  i = r
                    ? {
                        observableKind: "set",
                        debugObjectName: this.name_,
                        type: Ln,
                        object: this,
                        newValue: e,
                      }
                    : null;
                n, r && gn(this, i);
              }
              return this;
            }),
            (t.delete = function (e) {
              var t = this;
              if (
                vn(this) &&
                !pn(this, { type: Dn, object: this, oldValue: e })
              )
                return !1;
              if (this.has(e)) {
                var n = bn(this),
                  r = n
                    ? {
                        observableKind: "set",
                        debugObjectName: this.name_,
                        type: Dn,
                        object: this,
                        oldValue: e,
                      }
                    : null;
                return (
                  cn(function () {
                    t.atom_.reportChanged(), t.data_.delete(e);
                  }),
                  n && gn(this, r),
                  !0
                );
              }
              return !1;
            }),
            (t.has = function (e) {
              return (
                this.atom_.reportObserved(),
                this.data_.has(this.dehanceValue_(e))
              );
            }),
            (t.entries = function () {
              var e = 0,
                t = Array.from(this.keys()),
                n = Array.from(this.values());
              return dr({
                next: function () {
                  var r = e;
                  return (
                    (e += 1),
                    r < n.length
                      ? { value: [t[r], n[r]], done: !1 }
                      : { done: !0 }
                  );
                },
              });
            }),
            (t.keys = function () {
              return this.values();
            }),
            (t.values = function () {
              this.atom_.reportObserved();
              var e = this,
                t = 0,
                n = Array.from(this.data_.values());
              return dr({
                next: function () {
                  return t < n.length
                    ? { value: e.dehanceValue_(n[t++]), done: !1 }
                    : { done: !0 };
                },
              });
            }),
            (t.intersection = function (e) {
              return k(e)
                ? e.intersection(this)
                : new Set(this).intersection(e);
            }),
            (t.union = function (e) {
              return k(e) ? e.union(this) : new Set(this).union(e);
            }),
            (t.difference = function (e) {
              return new Set(this).difference(e);
            }),
            (t.symmetricDifference = function (e) {
              return k(e)
                ? e.symmetricDifference(this)
                : new Set(this).symmetricDifference(e);
            }),
            (t.isSubsetOf = function (e) {
              return new Set(this).isSubsetOf(e);
            }),
            (t.isSupersetOf = function (e) {
              return new Set(this).isSupersetOf(e);
            }),
            (t.isDisjointFrom = function (e) {
              return k(e)
                ? e.isDisjointFrom(this)
                : new Set(this).isDisjointFrom(e);
            }),
            (t.replace = function (e) {
              var t = this;
              return (
                Un(e) && (e = new Set(e)),
                cn(function () {
                  Array.isArray(e) || k(e)
                    ? (t.clear(),
                      e.forEach(function (e) {
                        return t.add(e);
                      }))
                    : null != e && r("Cannot initialize set from " + e);
                }),
                this
              );
            }),
            (t.observe_ = function (e, t) {
              return yn(this, e);
            }),
            (t.intercept_ = function (e) {
              return dn(this, e);
            }),
            (t.toJSON = function () {
              return Array.from(this);
            }),
            (t.toString = function () {
              return "[object ObservableSet]";
            }),
            (t[Symbol.iterator] = function () {
              return this.values();
            }),
            L(e, [
              {
                key: "size",
                get: function () {
                  return this.atom_.reportObserved(), this.data_.size;
                },
              },
              {
                key: Symbol.toStringTag,
                get: function () {
                  return "Set";
                },
              },
            ])
          );
        })(),
        Un = A("ObservableSet", In),
        Kn = Object.create(null),
        Gn = "remove",
        qn = (function () {
          function e(e, t, n, r) {
            void 0 === t && (t = new Map()),
              void 0 === r && (r = be),
              (this.target_ = void 0),
              (this.values_ = void 0),
              (this.name_ = void 0),
              (this.defaultAnnotation_ = void 0),
              (this.keysAtom_ = void 0),
              (this.changeListeners_ = void 0),
              (this.interceptors_ = void 0),
              (this.proxy_ = void 0),
              (this.isPlainObject_ = void 0),
              (this.appliedAnnotations_ = void 0),
              (this.pendingKeys_ = void 0),
              (this.target_ = e),
              (this.values_ = t),
              (this.name_ = n),
              (this.defaultAnnotation_ = r),
              (this.keysAtom_ = new $("ObservableObject.keys")),
              (this.isPlainObject_ = m(this.target_));
          }
          var t = e.prototype;
          return (
            (t.getObservablePropValue_ = function (e) {
              return this.values_.get(e).get();
            }),
            (t.setObservablePropValue_ = function (e, t) {
              var n = this.values_.get(e);
              if (n instanceof Ye) return n.set(t), !0;
              if (vn(this)) {
                var r = pn(this, {
                  type: wn,
                  object: this.proxy_ || this.target_,
                  name: e,
                  newValue: t,
                });
                if (!r) return null;
                t = r.newValue;
              }
              if ((t = n.prepareNewValue_(t)) !== dt.UNCHANGED) {
                var i = bn(this),
                  o = i
                    ? {
                        type: wn,
                        observableKind: "object",
                        debugObjectName: this.name_,
                        object: this.proxy_ || this.target_,
                        oldValue: n.value_,
                        name: e,
                        newValue: t,
                      }
                    : null;
                0, n.setNewValue_(t), i && gn(this, o);
              }
              return !0;
            }),
            (t.get_ = function (e) {
              return (
                dt.trackingDerivation && !C(this.target_, e) && this.has_(e),
                this.target_[e]
              );
            }),
            (t.set_ = function (e, t, n) {
              return (
                void 0 === n && (n = !1),
                C(this.target_, e)
                  ? this.values_.has(e)
                    ? this.setObservablePropValue_(e, t)
                    : n
                      ? Reflect.set(this.target_, e, t)
                      : ((this.target_[e] = t), !0)
                  : this.extend_(
                      e,
                      {
                        value: t,
                        enumerable: !0,
                        writable: !0,
                        configurable: !0,
                      },
                      this.defaultAnnotation_,
                      n,
                    )
              );
            }),
            (t.has_ = function (e) {
              if (!dt.trackingDerivation) return e in this.target_;
              this.pendingKeys_ || (this.pendingKeys_ = new Map());
              var t = this.pendingKeys_.get(e);
              return (
                t ||
                  ((t = new ze(
                    e in this.target_,
                    Y,
                    "ObservableObject.key?",
                    !1,
                  )),
                  this.pendingKeys_.set(e, t)),
                t.get()
              );
            }),
            (t.make_ = function (e, t) {
              if ((!0 === t && (t = this.defaultAnnotation_), !1 !== t)) {
                if ((Xn(this, t, e), !(e in this.target_))) {
                  var n;
                  if (null != (n = this.target_[U]) && n[e]) return;
                  r(1, t.annotationType_, this.name_ + "." + e.toString());
                }
                for (var i = this.target_; i && i !== c; ) {
                  var o = s(i, e);
                  if (o) {
                    var a = t.make_(this, e, o, i);
                    if (0 === a) return;
                    if (1 === a) break;
                  }
                  i = Object.getPrototypeOf(i);
                }
                Fn(this, t, e);
              }
            }),
            (t.extend_ = function (e, t, n, r) {
              if (
                (void 0 === r && (r = !1),
                !0 === n && (n = this.defaultAnnotation_),
                !1 === n)
              )
                return this.defineProperty_(e, t, r);
              Xn(this, n, e);
              var i = n.extend_(this, e, t, r);
              return i && Fn(this, n, e), i;
            }),
            (t.defineProperty_ = function (e, t, n) {
              void 0 === n && (n = !1), this.keysAtom_;
              try {
                gt();
                var r = this.delete_(e);
                if (!r) return r;
                if (vn(this)) {
                  var i = pn(this, {
                    object: this.proxy_ || this.target_,
                    name: e,
                    type: Ln,
                    newValue: t.value,
                  });
                  if (!i) return null;
                  var o = i.newValue;
                  t.value !== o && (t = N({}, t, { value: o }));
                }
                if (n) {
                  if (!Reflect.defineProperty(this.target_, e, t)) return !1;
                } else u(this.target_, e, t);
                this.notifyPropertyAddition_(e, t.value);
              } finally {
                mt();
              }
              return !0;
            }),
            (t.defineObservableProperty_ = function (e, t, n, r) {
              void 0 === r && (r = !1), this.keysAtom_;
              try {
                gt();
                var i = this.delete_(e);
                if (!i) return i;
                if (vn(this)) {
                  var o = pn(this, {
                    object: this.proxy_ || this.target_,
                    name: e,
                    type: Ln,
                    newValue: t,
                  });
                  if (!o) return null;
                  t = o.newValue;
                }
                var a = Wn(e),
                  s = {
                    configurable: !dt.safeDescriptors || this.isPlainObject_,
                    enumerable: !0,
                    get: a.get,
                    set: a.set,
                  };
                if (r) {
                  if (!Reflect.defineProperty(this.target_, e, s)) return !1;
                } else u(this.target_, e, s);
                var c = new ze(t, n, "ObservableObject.key", !1);
                this.values_.set(e, c),
                  this.notifyPropertyAddition_(e, c.value_);
              } finally {
                mt();
              }
              return !0;
            }),
            (t.defineComputedProperty_ = function (e, t, n) {
              void 0 === n && (n = !1), this.keysAtom_;
              try {
                gt();
                var r = this.delete_(e);
                if (!r) return r;
                if (vn(this))
                  if (
                    !pn(this, {
                      object: this.proxy_ || this.target_,
                      name: e,
                      type: Ln,
                      newValue: void 0,
                    })
                  )
                    return null;
                t.name || (t.name = "ObservableObject.key"),
                  (t.context = this.proxy_ || this.target_);
                var i = Wn(e),
                  o = {
                    configurable: !dt.safeDescriptors || this.isPlainObject_,
                    enumerable: !1,
                    get: i.get,
                    set: i.set,
                  };
                if (n) {
                  if (!Reflect.defineProperty(this.target_, e, o)) return !1;
                } else u(this.target_, e, o);
                this.values_.set(e, new Ye(t)),
                  this.notifyPropertyAddition_(e, void 0);
              } finally {
                mt();
              }
              return !0;
            }),
            (t.delete_ = function (e, t) {
              if (
                (void 0 === t && (t = !1), this.keysAtom_, !C(this.target_, e))
              )
                return !0;
              if (
                vn(this) &&
                !pn(this, {
                  object: this.proxy_ || this.target_,
                  name: e,
                  type: Gn,
                })
              )
                return null;
              try {
                var n;
                gt();
                var r,
                  i = bn(this),
                  o = this.values_.get(e),
                  a = void 0;
                if (!o && i)
                  a = null == (r = s(this.target_, e)) ? void 0 : r.value;
                if (t) {
                  if (!Reflect.deleteProperty(this.target_, e)) return !1;
                } else delete this.target_[e];
                if (
                  (o &&
                    (this.values_.delete(e),
                    o instanceof ze && (a = o.value_),
                    wt(o)),
                  this.keysAtom_.reportChanged(),
                  null == (n = this.pendingKeys_) ||
                    null == (n = n.get(e)) ||
                    n.set(e in this.target_),
                  i)
                ) {
                  var u = {
                    type: Gn,
                    observableKind: "object",
                    object: this.proxy_ || this.target_,
                    debugObjectName: this.name_,
                    oldValue: a,
                    name: e,
                  };
                  0, i && gn(this, u);
                }
              } finally {
                mt();
              }
              return !0;
            }),
            (t.observe_ = function (e, t) {
              return yn(this, e);
            }),
            (t.intercept_ = function (e) {
              return dn(this, e);
            }),
            (t.notifyPropertyAddition_ = function (e, t) {
              var n,
                r = bn(this);
              if (r) {
                var i = r
                  ? {
                      type: Ln,
                      observableKind: "object",
                      debugObjectName: this.name_,
                      object: this.proxy_ || this.target_,
                      name: e,
                      newValue: t,
                    }
                  : null;
                0, r && gn(this, i);
              }
              null == (n = this.pendingKeys_) ||
                null == (n = n.get(e)) ||
                n.set(!0),
                this.keysAtom_.reportChanged();
            }),
            (t.ownKeys_ = function () {
              return this.keysAtom_.reportObserved(), E(this.target_);
            }),
            (t.keys_ = function () {
              return this.keysAtom_.reportObserved(), Object.keys(this.target_);
            }),
            e
          );
        })();
      function Hn(e, t) {
        var n;
        if (C(e, H)) return e;
        var r =
            null != (n = null == t ? void 0 : t.name) ? n : "ObservableObject",
          i = new qn(
            e,
            new Map(),
            String(r),
            (function (e) {
              var t;
              return e
                ? null != (t = e.defaultDecorator)
                  ? t
                  : ye(e)
                : void 0;
            })(t),
          );
        return w(e, H, i), e;
      }
      var $n = A("ObservableObjectAdministration", qn);
      function Wn(e) {
        return (
          Kn[e] ||
          (Kn[e] = {
            get: function () {
              return this[H].getObservablePropValue_(e);
            },
            set: function (t) {
              return this[H].setObservablePropValue_(e, t);
            },
          })
        );
      }
      function zn(e) {
        return !!g(e) && $n(e[H]);
      }
      function Fn(e, t, n) {
        var r;
        null == (r = e.target_[U]) || delete r[n];
      }
      function Xn(e, t, n) {}
      var Yn,
        Jn,
        Qn = rr(0),
        Zn = (function () {
          var e = !1,
            t = {};
          return (
            Object.defineProperty(t, "0", {
              set: function () {
                e = !0;
              },
            }),
            (Object.create(t)[0] = 1),
            !1 === e
          );
        })(),
        er = 0,
        tr = function () {};
      (Yn = tr),
        (Jn = Array.prototype),
        Object.setPrototypeOf
          ? Object.setPrototypeOf(Yn.prototype, Jn)
          : void 0 !== Yn.prototype.__proto__
            ? (Yn.prototype.__proto__ = Jn)
            : (Yn.prototype = Jn);
      var nr = (function (e) {
        function t(t, n, r, i) {
          var o;
          return (
            void 0 === r && (r = "ObservableArray"),
            void 0 === i && (i = !1),
            (o = e.call(this) || this),
            lr(function () {
              var e = new An(r, n, i, !0);
              (e.proxy_ = o),
                S(o, H, e),
                t && t.length && o.spliceWithArray(0, 0, t),
                Zn && Object.defineProperty(o, "0", Qn);
            }),
            o
          );
        }
        B(t, e);
        var n = t.prototype;
        return (
          (n.concat = function () {
            this[H].atom_.reportObserved();
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return Array.prototype.concat.apply(
              this.slice(),
              t.map(function (e) {
                return Tn(e) ? e.slice() : e;
              }),
            );
          }),
          (n[Symbol.iterator] = function () {
            var e = this,
              t = 0;
            return dr({
              next: function () {
                return t < e.length
                  ? { value: e[t++], done: !1 }
                  : { done: !0, value: void 0 };
              },
            });
          }),
          L(t, [
            {
              key: "length",
              get: function () {
                return this[H].getArrayLength_();
              },
              set: function (e) {
                this[H].setArrayLength_(e);
              },
            },
            {
              key: Symbol.toStringTag,
              get: function () {
                return "Array";
              },
            },
          ])
        );
      })(tr);
      function rr(e) {
        return {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return this[H].get_(e);
          },
          set: function (t) {
            this[H].set_(e, t);
          },
        };
      }
      function ir(e) {
        u(nr.prototype, "" + e, rr(e));
      }
      function or(e) {
        if (e > er) {
          for (var t = er; t < e + 100; t++) ir(t);
          er = e;
        }
      }
      function ar(e, t, n) {
        return new nr(e, t, n);
      }
      function sr(e, t) {
        if ("object" == typeof e && null !== e) {
          if (Tn(e)) return void 0 !== t && r(23), e[H].atom_;
          if (Un(e)) return e.atom_;
          if (Bn(e)) {
            if (void 0 === t) return e.keysAtom_;
            var n = e.data_.get(t) || e.hasMap_.get(t);
            return n || r(25, t, cr(e)), n;
          }
          if (zn(e)) {
            if (!t) return r(26);
            var i = e[H].values_.get(t);
            return i || r(27, t, cr(e)), i;
          }
          if (W(e) || Ze(e) || Et(e)) return e;
        } else if (b(e) && Et(e[H])) return e[H];
        r(28);
      }
      function ur(e, t) {
        return (
          e || r(29),
          void 0 !== t
            ? ur(sr(e, t))
            : W(e) || Ze(e) || Et(e) || Bn(e) || Un(e)
              ? e
              : e[H]
                ? e[H]
                : void r(24, e)
        );
      }
      function cr(e, t) {
        var n;
        if (void 0 !== t) n = sr(e, t);
        else {
          if (Ut(e)) return e.name;
          n = zn(e) || Bn(e) || Un(e) ? ur(e) : sr(e);
        }
        return n.name_;
      }
      function lr(e) {
        var t = st(),
          n = $e(!0);
        gt();
        try {
          return e();
        } finally {
          mt(), We(n), ut(t);
        }
      }
      Object.entries(kn).forEach(function (e) {
        var t = e[0],
          n = e[1];
        "concat" !== t && w(nr.prototype, t, n);
      }),
        or(1e3);
      var fr = c.toString;
      function hr(e, t, n) {
        return void 0 === n && (n = -1), _r(e, t, n);
      }
      function _r(e, t, n, r, i) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return !1;
        if (e != e) return t != t;
        var o = typeof e;
        if ("function" !== o && "object" !== o && "object" != typeof t)
          return !1;
        var a = fr.call(e);
        if (a !== fr.call(t)) return !1;
        switch (a) {
          case "[object RegExp]":
          case "[object String]":
            return "" + e == "" + t;
          case "[object Number]":
            return +e != +e ? +t != +t : 0 === +e ? 1 / +e == 1 / t : +e === +t;
          case "[object Date]":
          case "[object Boolean]":
            return +e === +t;
          case "[object Symbol]":
            return (
              "undefined" != typeof Symbol &&
              Symbol.valueOf.call(e) === Symbol.valueOf.call(t)
            );
          case "[object Map]":
          case "[object Set]":
            n >= 0 && n++;
        }
        (e = vr(e)), (t = vr(t));
        var s = "[object Array]" === a;
        if (!s) {
          if ("object" != typeof e || "object" != typeof t) return !1;
          var u = e.constructor,
            c = t.constructor;
          if (
            u !== c &&
            !(b(u) && u instanceof u && b(c) && c instanceof c) &&
            "constructor" in e &&
            "constructor" in t
          )
            return !1;
        }
        if (0 === n) return !1;
        n < 0 && (n = -1), (i = i || []);
        for (var l = (r = r || []).length; l--; )
          if (r[l] === e) return i[l] === t;
        if ((r.push(e), i.push(t), s)) {
          if ((l = e.length) !== t.length) return !1;
          for (; l--; ) if (!_r(e[l], t[l], n - 1, r, i)) return !1;
        } else {
          var f,
            h = Object.keys(e);
          if (((l = h.length), Object.keys(t).length !== l)) return !1;
          for (; l--; )
            if (!C(t, (f = h[l])) || !_r(e[f], t[f], n - 1, r, i)) return !1;
        }
        return r.pop(), i.pop(), !0;
      }
      function vr(e) {
        return Tn(e)
          ? e.slice()
          : j(e) || Bn(e) || k(e) || Un(e)
            ? Array.from(e.entries())
            : e;
      }
      function dr(e) {
        return (e[Symbol.iterator] = pr), e;
      }
      function pr() {
        return this;
      }
      ["Symbol", "Map", "Set"].forEach(function (e) {
        void 0 === o()[e] &&
          r("MobX requires global '" + e + "' to be available or polyfilled");
      }),
        "object" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
          __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
            spy: function (e) {
              return (
                console.warn("[mobx.spy] Is a no-op in production builds"),
                function () {}
              );
            },
            extras: { getDebugName: cr },
            $mobx: H,
          });
    },
    961: (e, t, n) => {
      "use strict";
      !(function e() {
        if (
          "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        )
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
          } catch (e) {
            console.error(e);
          }
      })(),
        (e.exports = n(2551));
    },
    5287: (e, t) => {
      "use strict";
      var n = Symbol.for("react.element"),
        r = Symbol.for("react.portal"),
        i = Symbol.for("react.fragment"),
        o = Symbol.for("react.strict_mode"),
        a = Symbol.for("react.profiler"),
        s = Symbol.for("react.provider"),
        u = Symbol.for("react.context"),
        c = Symbol.for("react.forward_ref"),
        l = Symbol.for("react.suspense"),
        f = Symbol.for("react.memo"),
        h = Symbol.for("react.lazy"),
        _ = Symbol.iterator;
      var v = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        d = Object.assign,
        p = {};
      function b(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = p),
          (this.updater = n || v);
      }
      function y() {}
      function g(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = p),
          (this.updater = n || v);
      }
      (b.prototype.isReactComponent = {}),
        (b.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
            );
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (b.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (y.prototype = b.prototype);
      var m = (g.prototype = new y());
      (m.constructor = g), d(m, b.prototype), (m.isPureReactComponent = !0);
      var O = Array.isArray,
        w = Object.prototype.hasOwnProperty,
        S = { current: null },
        A = { key: !0, ref: !0, __self: !0, __source: !0 };
      function j(e, t, r) {
        var i,
          o = {},
          a = null,
          s = null;
        if (null != t)
          for (i in (void 0 !== t.ref && (s = t.ref),
          void 0 !== t.key && (a = "" + t.key),
          t))
            w.call(t, i) && !A.hasOwnProperty(i) && (o[i] = t[i]);
        var u = arguments.length - 2;
        if (1 === u) o.children = r;
        else if (1 < u) {
          for (var c = Array(u), l = 0; l < u; l++) c[l] = arguments[l + 2];
          o.children = c;
        }
        if (e && e.defaultProps)
          for (i in (u = e.defaultProps)) void 0 === o[i] && (o[i] = u[i]);
        return {
          $$typeof: n,
          type: e,
          key: a,
          ref: s,
          props: o,
          _owner: S.current,
        };
      }
      function k(e) {
        return "object" == typeof e && null !== e && e.$$typeof === n;
      }
      var x = /\/+/g;
      function E(e, t) {
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
      function P(e, t, i, o, a) {
        var s = typeof e;
        ("undefined" !== s && "boolean" !== s) || (e = null);
        var u = !1;
        if (null === e) u = !0;
        else
          switch (s) {
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
            (e = "" === o ? "." + E(u, 0) : o),
            O(a)
              ? ((i = ""),
                null != e && (i = e.replace(x, "$&/") + "/"),
                P(a, t, i, "", function (e) {
                  return e;
                }))
              : null != a &&
                (k(a) &&
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
                    i +
                      (!a.key || (u && u.key === a.key)
                        ? ""
                        : ("" + a.key).replace(x, "$&/") + "/") +
                      e,
                  )),
                t.push(a)),
            1
          );
        if (((u = 0), (o = "" === o ? "." : o + ":"), O(e)))
          for (var c = 0; c < e.length; c++) {
            var l = o + E((s = e[c]), c);
            u += P(s, t, i, l, a);
          }
        else if (
          ((l = (function (e) {
            return null === e || "object" != typeof e
              ? null
              : "function" == typeof (e = (_ && e[_]) || e["@@iterator"])
                ? e
                : null;
          })(e)),
          "function" == typeof l)
        )
          for (e = l.call(e), c = 0; !(s = e.next()).done; )
            u += P((s = s.value), t, i, (l = o + E(s, c++)), a);
        else if ("object" === s)
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
      function C(e, t, n) {
        if (null == e) return e;
        var r = [],
          i = 0;
        return (
          P(e, r, "", "", function (e) {
            return t.call(n, e, i++);
          }),
          r
        );
      }
      function R(e) {
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
      var T = { current: null },
        V = { transition: null },
        L = {
          ReactCurrentDispatcher: T,
          ReactCurrentBatchConfig: V,
          ReactCurrentOwner: S,
        };
      function D() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      (t.Children = {
        map: C,
        forEach: function (e, t, n) {
          C(
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
            C(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            C(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!k(e))
            throw Error(
              "React.Children.only expected to receive a single React element child.",
            );
          return e;
        },
      }),
        (t.Component = b),
        (t.Fragment = i),
        (t.Profiler = a),
        (t.PureComponent = g),
        (t.StrictMode = o),
        (t.Suspense = l),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L),
        (t.act = D),
        (t.cloneElement = function (e, t, r) {
          if (null == e)
            throw Error(
              "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                ".",
            );
          var i = d({}, e.props),
            o = e.key,
            a = e.ref,
            s = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((a = t.ref), (s = S.current)),
              void 0 !== t.key && (o = "" + t.key),
              e.type && e.type.defaultProps)
            )
              var u = e.type.defaultProps;
            for (c in t)
              w.call(t, c) &&
                !A.hasOwnProperty(c) &&
                (i[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c]);
          }
          var c = arguments.length - 2;
          if (1 === c) i.children = r;
          else if (1 < c) {
            u = Array(c);
            for (var l = 0; l < c; l++) u[l] = arguments[l + 2];
            i.children = u;
          }
          return {
            $$typeof: n,
            type: e.type,
            key: o,
            ref: a,
            props: i,
            _owner: s,
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
            }).Provider = { $$typeof: s, _context: e }),
            (e.Consumer = e)
          );
        }),
        (t.createElement = j),
        (t.createFactory = function (e) {
          var t = j.bind(null, e);
          return (t.type = e), t;
        }),
        (t.createRef = function () {
          return { current: null };
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: c, render: e };
        }),
        (t.isValidElement = k),
        (t.lazy = function (e) {
          return {
            $$typeof: h,
            _payload: { _status: -1, _result: e },
            _init: R,
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
        (t.unstable_act = D),
        (t.useCallback = function (e, t) {
          return T.current.useCallback(e, t);
        }),
        (t.useContext = function (e) {
          return T.current.useContext(e);
        }),
        (t.useDebugValue = function () {}),
        (t.useDeferredValue = function (e) {
          return T.current.useDeferredValue(e);
        }),
        (t.useEffect = function (e, t) {
          return T.current.useEffect(e, t);
        }),
        (t.useId = function () {
          return T.current.useId();
        }),
        (t.useImperativeHandle = function (e, t, n) {
          return T.current.useImperativeHandle(e, t, n);
        }),
        (t.useInsertionEffect = function (e, t) {
          return T.current.useInsertionEffect(e, t);
        }),
        (t.useLayoutEffect = function (e, t) {
          return T.current.useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return T.current.useMemo(e, t);
        }),
        (t.useReducer = function (e, t, n) {
          return T.current.useReducer(e, t, n);
        }),
        (t.useRef = function (e) {
          return T.current.useRef(e);
        }),
        (t.useState = function (e) {
          return T.current.useState(e);
        }),
        (t.useSyncExternalStore = function (e, t, n) {
          return T.current.useSyncExternalStore(e, t, n);
        }),
        (t.useTransition = function () {
          return T.current.useTransition();
        }),
        (t.version = "18.3.1");
    },
    6540: (e, t, n) => {
      "use strict";
      e.exports = n(5287);
    },
    1635: (e, t, n) => {
      "use strict";
      n.d(t, { Cg: () => r, sH: () => i });
      function r(e, t, n, r) {
        var i,
          o = arguments.length,
          a =
            o < 3
              ? t
              : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, n))
                : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          a = Reflect.decorate(e, t, n, r);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (i = e[s]) &&
              (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
        return o > 3 && a && Object.defineProperty(t, n, a), a;
      }
      function i(e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(e) {
            try {
              u(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function s(e) {
            try {
              u(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, s);
          }
          u((r = r.apply(e, t || [])).next());
        });
      }
      Object.create;
      Object.create;
      "function" == typeof SuppressedError && SuppressedError;
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/libraries/libraries~78cf5e26a.js.map
