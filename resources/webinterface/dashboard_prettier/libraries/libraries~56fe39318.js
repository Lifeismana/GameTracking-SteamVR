var CLSTAMP = "10585170";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [352],
  {
    5339: function (t, o) {
      var r =
          "function" == typeof Object.defineProperties
            ? Object.defineProperty
            : function (t, o, r) {
                t != Array.prototype &&
                  t != Object.prototype &&
                  (t[o] = r.value);
              },
        e =
          "undefined" != typeof window && window === this
            ? this
            : "undefined" != typeof global && null != global
              ? global
              : this;
      function i() {
        (i = function () {}), e.Symbol || (e.Symbol = a);
      }
      function n(t, o) {
        (this.a = t),
          r(this, "description", { configurable: !0, writable: !0, value: o });
      }
      n.prototype.toString = function () {
        return this.a;
      };
      var p,
        a =
          ((p = 0),
          function t(o) {
            if (this instanceof t)
              throw new TypeError("Symbol is not a constructor");
            return new n("jscomp_symbol_" + (o || "") + "_" + p++, o);
          });
      function s() {
        i();
        var t = e.Symbol.iterator;
        t || (t = e.Symbol.iterator = e.Symbol("Symbol.iterator")),
          "function" != typeof Array.prototype[t] &&
            r(Array.prototype, t, {
              configurable: !0,
              writable: !0,
              value: function () {
                return (function (t) {
                  return (
                    s(),
                    (t = { next: t }),
                    (t[e.Symbol.iterator] = function () {
                      return this;
                    }),
                    t
                  );
                })(
                  (function (t) {
                    var o = 0;
                    return function () {
                      return o < t.length
                        ? { done: !1, value: t[o++] }
                        : { done: !0 };
                    };
                  })(this),
                );
              },
            }),
          (s = function () {});
      }
      !(function (t, o) {
        if (o) {
          var i = e;
          t = t.split(".");
          for (var n = 0; n < t.length - 1; n++) {
            var p = t[n];
            p in i || (i[p] = {}), (i = i[p]);
          }
          (o = o((n = i[(t = t[t.length - 1])]))) != n &&
            null != o &&
            r(i, t, { configurable: !0, writable: !0, value: o });
        }
      })("Array.prototype.entries", function (t) {
        return (
          t ||
          function () {
            return (function (t, o) {
              s(), t instanceof String && (t += "");
              var r = 0,
                e = {
                  next: function () {
                    if (r < t.length) {
                      var i = r++;
                      return { value: o(i, t[i]), done: !1 };
                    }
                    return (
                      (e.next = function () {
                        return { done: !0, value: void 0 };
                      }),
                      e.next()
                    );
                  },
                };
              return (
                (e[Symbol.iterator] = function () {
                  return e;
                }),
                e
              );
            })(this, function (t, o) {
              return [t, o];
            });
          }
        );
      });
      var h = this || self;
      function u(t, o, r) {
        (t = t.split(".")),
          (r = r || h),
          t[0] in r || void 0 === r.execScript || r.execScript("var " + t[0]);
        for (var e; t.length && (e = t.shift()); )
          t.length || void 0 === o
            ? (r = r[e] && r[e] !== Object.prototype[e] ? r[e] : (r[e] = {}))
            : (r[e] = o);
      }
      function y(t) {
        var o = typeof t;
        if ("object" == o) {
          if (!t) return "null";
          if (t instanceof Array) return "array";
          if (t instanceof Object) return o;
          var r = Object.prototype.toString.call(t);
          if ("[object Window]" == r) return "object";
          if (
            "[object Array]" == r ||
            ("number" == typeof t.length &&
              void 0 !== t.splice &&
              void 0 !== t.propertyIsEnumerable &&
              !t.propertyIsEnumerable("splice"))
          )
            return "array";
          if (
            "[object Function]" == r ||
            (void 0 !== t.call &&
              void 0 !== t.propertyIsEnumerable &&
              !t.propertyIsEnumerable("call"))
          )
            return "function";
        } else if ("function" == o && void 0 === t.call) return "object";
        return o;
      }
      function f(t) {
        var o = typeof t;
        return ("object" == o && null != t) || "function" == o;
      }
      var c =
        "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
          " ",
        );
      var l = Array.prototype.forEach
          ? function (t, o) {
              Array.prototype.forEach.call(t, o, void 0);
            }
          : function (t, o) {
              for (
                var r = t.length,
                  e = "string" == typeof t ? t.split("") : t,
                  i = 0;
                i < r;
                i++
              )
                i in e && o.call(void 0, e[i], i, t);
            },
        d = Array.prototype.map
          ? function (t, o) {
              return Array.prototype.map.call(t, o, void 0);
            }
          : function (t, o) {
              for (
                var r = t.length,
                  e = Array(r),
                  i = "string" == typeof t ? t.split("") : t,
                  n = 0;
                n < r;
                n++
              )
                n in i && (e[n] = o.call(void 0, i[n], n, t));
              return e;
            };
      function g(t, o, r) {
        return 2 >= arguments.length
          ? Array.prototype.slice.call(t, o)
          : Array.prototype.slice.call(t, o, r);
      }
      function b(t, o, r, e) {
        var i = "Assertion failed";
        if (r) {
          i += ": " + r;
          var n = e;
        } else t && ((i += ": " + t), (n = o));
        throw Error(i, n || []);
      }
      function v(t, o, r) {
        for (var e = [], i = 2; i < arguments.length; ++i)
          e[i - 2] = arguments[i];
        return t || b("", null, o, e), t;
      }
      function w(t, o) {
        for (var r = [], e = 1; e < arguments.length; ++e)
          r[e - 1] = arguments[e];
        throw Error("Failure" + (t ? ": " + t : ""), r);
      }
      function S(t, o, r, e) {
        for (var i = [], n = 3; n < arguments.length; ++n)
          i[n - 3] = arguments[n];
        t instanceof o ||
          b("Expected instanceof %s but got %s.", [j(o), j(t)], r, i);
      }
      function j(t) {
        return t instanceof Function
          ? t.displayName || t.name || "unknown type name"
          : t instanceof Object
            ? t.constructor.displayName ||
              t.constructor.name ||
              Object.prototype.toString.call(t)
            : null === t
              ? "null"
              : typeof t;
      }
      function x(t, o) {
        if (
          ((this.c = t),
          (this.b = o),
          (this.a = {}),
          (this.arrClean = !0),
          0 < this.c.length)
        ) {
          for (t = 0; t < this.c.length; t++) {
            var r = (o = this.c[t])[0];
            this.a[r.toString()] = new A(r, o[1]);
          }
          this.arrClean = !0;
        }
      }
      function F(t) {
        (this.a = 0), (this.b = t);
      }
      function m(t, o) {
        return t.b ? (o.a || (o.a = new t.b(o.value)), o.a) : o.value;
      }
      function k(t) {
        t = t.a;
        var o,
          r = [];
        for (o in t) Object.prototype.hasOwnProperty.call(t, o) && r.push(o);
        return r;
      }
      function A(t, o) {
        (this.key = t), (this.value = o), (this.a = void 0);
      }
      function C(t) {
        if (8192 >= t.length) return String.fromCharCode.apply(null, t);
        for (var o = "", r = 0; r < t.length; r += 8192)
          o += String.fromCharCode.apply(null, g(t, r, r + 8192));
        return o;
      }
      u("jspb.Map", x, void 0),
        (x.prototype.g = function () {
          if (this.arrClean) {
            if (this.b) {
              var t,
                o = this.a;
              for (t in o)
                if (Object.prototype.hasOwnProperty.call(o, t)) {
                  var r = o[t].a;
                  r && r.g();
                }
            }
          } else {
            for (
              this.c.length = 0, (o = k(this)).sort(), t = 0;
              t < o.length;
              t++
            ) {
              var e = this.a[o[t]];
              (r = e.a) && r.g(), this.c.push([e.key, e.value]);
            }
            this.arrClean = !0;
          }
          return this.c;
        }),
        (x.prototype.toArray = x.prototype.g),
        (x.prototype.Mc = function (t, o) {
          for (var r = this.g(), e = [], i = 0; i < r.length; i++) {
            var n = this.a[r[i][0].toString()];
            m(this, n);
            var p = n.a;
            p ? (v(o), e.push([n.key, o(t, p)])) : e.push([n.key, n.value]);
          }
          return e;
        }),
        (x.prototype.toObject = x.prototype.Mc),
        (x.fromObject = function (t, o, r) {
          o = new x([], o);
          for (var e = 0; e < t.length; e++) {
            var i = t[e][0],
              n = r(t[e][1]);
            o.set(i, n);
          }
          return o;
        }),
        (F.prototype.next = function () {
          return this.a < this.b.length
            ? { done: !1, value: this.b[this.a++] }
            : { done: !0, value: void 0 };
        }),
        "undefined" != typeof Symbol &&
          (F.prototype[Symbol.iterator] = function () {
            return this;
          }),
        (x.prototype.Jb = function () {
          return k(this).length;
        }),
        (x.prototype.getLength = x.prototype.Jb),
        (x.prototype.clear = function () {
          (this.a = {}), (this.arrClean = !1);
        }),
        (x.prototype.clear = x.prototype.clear),
        (x.prototype.Cb = function (t) {
          t = t.toString();
          var o = this.a.hasOwnProperty(t);
          return delete this.a[t], (this.arrClean = !1), o;
        }),
        (x.prototype.del = x.prototype.Cb),
        (x.prototype.Eb = function () {
          var t = [],
            o = k(this);
          o.sort();
          for (var r = 0; r < o.length; r++) {
            var e = this.a[o[r]];
            t.push([e.key, e.value]);
          }
          return t;
        }),
        (x.prototype.getEntryList = x.prototype.Eb),
        (x.prototype.entries = function () {
          var t = [],
            o = k(this);
          o.sort();
          for (var r = 0; r < o.length; r++) {
            var e = this.a[o[r]];
            t.push([e.key, m(this, e)]);
          }
          return new F(t);
        }),
        (x.prototype.entries = x.prototype.entries),
        (x.prototype.keys = function () {
          var t = [],
            o = k(this);
          o.sort();
          for (var r = 0; r < o.length; r++) t.push(this.a[o[r]].key);
          return new F(t);
        }),
        (x.prototype.keys = x.prototype.keys),
        (x.prototype.values = function () {
          var t = [],
            o = k(this);
          o.sort();
          for (var r = 0; r < o.length; r++) t.push(m(this, this.a[o[r]]));
          return new F(t);
        }),
        (x.prototype.values = x.prototype.values),
        (x.prototype.forEach = function (t, o) {
          var r = k(this);
          r.sort();
          for (var e = 0; e < r.length; e++) {
            var i = this.a[r[e]];
            t.call(o, m(this, i), i.key, this);
          }
        }),
        (x.prototype.forEach = x.prototype.forEach),
        (x.prototype.set = function (t, o) {
          var r = new A(t);
          return (
            this.b ? ((r.a = o), (r.value = o.g())) : (r.value = o),
            (this.a[t.toString()] = r),
            (this.arrClean = !1),
            this
          );
        }),
        (x.prototype.set = x.prototype.set),
        (x.prototype.get = function (t) {
          if ((t = this.a[t.toString()])) return m(this, t);
        }),
        (x.prototype.get = x.prototype.get),
        (x.prototype.has = function (t) {
          return t.toString() in this.a;
        }),
        (x.prototype.has = x.prototype.has),
        (x.prototype.Jc = function (t, o, r, e, i) {
          var n = k(this);
          n.sort();
          for (var p = 0; p < n.length; p++) {
            var a = this.a[n[p]];
            o.Va(t),
              r.call(o, 1, a.key),
              this.b ? e.call(o, 2, m(this, a), i) : e.call(o, 2, a.value),
              o.Ya();
          }
        }),
        (x.prototype.serializeBinary = x.prototype.Jc),
        (x.deserializeBinary = function (t, o, r, e, i, n, p) {
          for (; o.oa() && !o.bb(); ) {
            var a = o.c;
            1 == a
              ? (n = r.call(o))
              : 2 == a &&
                (t.b
                  ? (v(i), p || (p = new t.b()), e.call(o, p, i))
                  : (p = e.call(o)));
          }
          v(null != n), v(null != p), t.set(n, p);
        });
      var M = {
          "\0": "\\0",
          "\b": "\\b",
          "\f": "\\f",
          "\n": "\\n",
          "\r": "\\r",
          "\t": "\\t",
          "\v": "\\x0B",
          '"': '\\"',
          "\\": "\\\\",
          "<": "\\u003C",
        },
        P = { "'": "\\'" },
        E = {},
        I = null;
      function B(t, o) {
        void 0 === o && (o = 0), U(), (o = E[o]);
        for (var r = [], e = 0; e < t.length; e += 3) {
          var i = t[e],
            n = e + 1 < t.length,
            p = n ? t[e + 1] : 0,
            a = e + 2 < t.length,
            s = a ? t[e + 2] : 0,
            h = i >> 2;
          (i = ((3 & i) << 4) | (p >> 4)),
            (p = ((15 & p) << 2) | (s >> 6)),
            (s &= 63),
            a || ((s = 64), n || (p = 64)),
            r.push(o[h], o[i], o[p] || "", o[s] || "");
        }
        return r.join("");
      }
      function O(t) {
        var o = t.length,
          r = (3 * o) / 4;
        r % 3
          ? (r = Math.floor(r))
          : -1 != "=.".indexOf(t[o - 1]) &&
            (r = -1 != "=.".indexOf(t[o - 2]) ? r - 2 : r - 1);
        var e = new Uint8Array(r),
          i = 0;
        return (
          (function (t, o) {
            function r(o) {
              for (; e < t.length; ) {
                var r = t.charAt(e++),
                  i = I[r];
                if (null != i) return i;
                if (!/^[\s\xa0]*$/.test(r))
                  throw Error("Unknown base64 encoding at char: " + r);
              }
              return o;
            }
            U();
            for (var e = 0; ; ) {
              var i = r(-1),
                n = r(0),
                p = r(64),
                a = r(64);
              if (64 === a && -1 === i) break;
              o((i << 2) | (n >> 4)),
                64 != p &&
                  (o(((n << 4) & 240) | (p >> 2)),
                  64 != a && o(((p << 6) & 192) | a));
            }
          })(t, function (t) {
            e[i++] = t;
          }),
          e.subarray(0, i)
        );
      }
      function U() {
        if (!I) {
          I = {};
          for (
            var t =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(
                  "",
                ),
              o = ["+/=", "+/", "-_=", "-_.", "-_"],
              r = 0;
            5 > r;
            r++
          ) {
            var e = t.concat(o[r].split(""));
            E[r] = e;
            for (var i = 0; i < e.length; i++) {
              var n = e[i];
              void 0 === I[n] && (I[n] = i);
            }
          }
        }
      }
      u("jspb.ConstBinaryMessage", function () {}, void 0),
        u("jspb.BinaryMessage", function () {}, void 0),
        u(
          "jspb.BinaryConstants.FieldType",
          {
            yb: -1,
            ee: 1,
            FLOAT: 2,
            ke: 3,
            te: 4,
            je: 5,
            xb: 6,
            wb: 7,
            BOOL: 8,
            re: 9,
            ie: 10,
            le: 11,
            ce: 12,
            se: 13,
            ge: 14,
            me: 15,
            ne: 16,
            oe: 17,
            pe: 18,
            he: 30,
            ve: 31,
          },
          void 0,
        ),
        u(
          "jspb.BinaryConstants.WireType",
          { yb: -1, ue: 0, xb: 1, de: 2, qe: 3, fe: 4, wb: 5 },
          void 0,
        ),
        u(
          "jspb.BinaryConstants.FieldTypeToWireType",
          function (t) {
            switch (t) {
              case 5:
              case 3:
              case 13:
              case 4:
              case 17:
              case 18:
              case 8:
              case 14:
              case 31:
                return 0;
              case 1:
              case 6:
              case 16:
              case 30:
                return 1;
              case 9:
              case 11:
              case 12:
                return 2;
              case 2:
              case 7:
              case 15:
                return 5;
              default:
                return -1;
            }
          },
          void 0,
        ),
        u("jspb.BinaryConstants.INVALID_FIELD_NUMBER", -1, void 0),
        u("jspb.BinaryConstants.FLOAT32_EPS", 1401298464324817e-60, void 0),
        u("jspb.BinaryConstants.FLOAT32_MIN", 11754943508222875e-54, void 0),
        u("jspb.BinaryConstants.FLOAT32_MAX", 34028234663852886e22, void 0),
        u("jspb.BinaryConstants.FLOAT64_EPS", 5e-324, void 0),
        u("jspb.BinaryConstants.FLOAT64_MIN", 22250738585072014e-324, void 0),
        u("jspb.BinaryConstants.FLOAT64_MAX", 17976931348623157e292, void 0),
        u("jspb.BinaryConstants.TWO_TO_20", 1048576, void 0),
        u("jspb.BinaryConstants.TWO_TO_23", 8388608, void 0),
        u("jspb.BinaryConstants.TWO_TO_31", 2147483648, void 0),
        u("jspb.BinaryConstants.TWO_TO_32", 4294967296, void 0),
        u("jspb.BinaryConstants.TWO_TO_52", 4503599627370496, void 0),
        u("jspb.BinaryConstants.TWO_TO_63", 0x8000000000000000, void 0),
        u("jspb.BinaryConstants.TWO_TO_64", 0x10000000000000000, void 0),
        u("jspb.BinaryConstants.ZERO_HASH", "\0\0\0\0\0\0\0\0", void 0);
      var T = 0,
        R = 0;
      function V(t) {
        var o = t >>> 0;
        (t = Math.floor((t - o) / 4294967296) >>> 0), (T = o), (R = t);
      }
      function H(t) {
        var o = 0 > t,
          r = (t = Math.abs(t)) >>> 0;
        (t = Math.floor((t - r) / 4294967296)),
          (t >>>= 0),
          o &&
            ((t = ~t >>> 0),
            4294967295 < (r = (~r >>> 0) + 1) &&
              ((r = 0), 4294967295 < ++t && (t = 0))),
          (T = r),
          (R = t);
      }
      function N(t) {
        var o = 0 > t;
        V((t = 2 * Math.abs(t))), (t = T);
        var r = R;
        o &&
          (0 == t
            ? 0 == r
              ? (r = t = 4294967295)
              : (r--, (t = 4294967295))
            : t--),
          (T = t),
          (R = r);
      }
      function D(t) {
        var o = 0 > t ? 1 : 0;
        if (0 === (t = o ? -t : t))
          0 < 1 / t ? (T = R = 0) : ((R = 0), (T = 2147483648));
        else if (isNaN(t)) (R = 0), (T = 2147483647);
        else if (34028234663852886e22 < t)
          (R = 0), (T = ((o << 31) | 2139095040) >>> 0);
        else if (11754943508222875e-54 > t)
          (t = Math.round(t / Math.pow(2, -149))),
            (R = 0),
            (T = ((o << 31) | t) >>> 0);
        else {
          var r = Math.floor(Math.log(t) / Math.LN2);
          (t *= Math.pow(2, -r)),
            16777216 <= (t = Math.round(8388608 * t)) && ++r,
            (R = 0),
            (T = ((o << 31) | ((r + 127) << 23) | (8388607 & t)) >>> 0);
        }
      }
      function L(t) {
        var o = 0 > t ? 1 : 0;
        if (0 === (t = o ? -t : t)) (R = 0 < 1 / t ? 0 : 2147483648), (T = 0);
        else if (isNaN(t)) (R = 2147483647), (T = 4294967295);
        else if (17976931348623157e292 < t)
          (R = ((o << 31) | 2146435072) >>> 0), (T = 0);
        else if (22250738585072014e-324 > t)
          (t /= Math.pow(2, -1074)),
            (R = ((o << 31) | (t / 4294967296)) >>> 0),
            (T = t >>> 0);
        else {
          var r = t,
            e = 0;
          if (2 <= r) for (; 2 <= r && 1023 > e; ) e++, (r /= 2);
          else for (; 1 > r && -1022 < e; ) (r *= 2), e--;
          (t *= Math.pow(2, -e)),
            (R =
              ((o << 31) | ((e + 1023) << 20) | ((1048576 * t) & 1048575)) >>>
              0),
            (T = (4503599627370496 * t) >>> 0);
        }
      }
      function z(t) {
        var o = t.charCodeAt(4),
          r = t.charCodeAt(5),
          e = t.charCodeAt(6),
          i = t.charCodeAt(7);
        (T =
          (t.charCodeAt(0) +
            (t.charCodeAt(1) << 8) +
            (t.charCodeAt(2) << 16) +
            (t.charCodeAt(3) << 24)) >>>
          0),
          (R = (o + (r << 8) + (e << 16) + (i << 24)) >>> 0);
      }
      function W(t, o) {
        return 4294967296 * o + (t >>> 0);
      }
      function Z(t, o) {
        var r = 2147483648 & o;
        return (
          r &&
            ((o = ~o >>> 0), 0 == (t = (1 + ~t) >>> 0) && (o = (o + 1) >>> 0)),
          (t = W(t, o)),
          r ? -t : t
        );
      }
      function _(t, o, r) {
        var e = o >> 31;
        return r((t << 1) ^ e, ((o << 1) | (t >>> 31)) ^ e);
      }
      function G(t, o) {
        return J(t, o, Z);
      }
      function J(t, o, r) {
        var e = -(1 & t);
        return r(((t >>> 1) | (o << 31)) ^ e, (o >>> 1) ^ e);
      }
      function $(t) {
        var o = 2 * (t >> 31) + 1,
          r = (t >>> 23) & 255;
        return (
          (t &= 8388607),
          255 == r
            ? t
              ? NaN
              : (1 / 0) * o
            : 0 == r
              ? o * Math.pow(2, -149) * t
              : o * Math.pow(2, r - 150) * (t + Math.pow(2, 23))
        );
      }
      function K(t, o) {
        var r = 2 * (o >> 31) + 1,
          e = (o >>> 20) & 2047;
        return (
          (t = 4294967296 * (1048575 & o) + t),
          2047 == e
            ? t
              ? NaN
              : (1 / 0) * r
            : 0 == e
              ? r * Math.pow(2, -1074) * t
              : r * Math.pow(2, e - 1075) * (t + 4503599627370496)
        );
      }
      function X(t, o) {
        return String.fromCharCode(
          (t >>> 0) & 255,
          (t >>> 8) & 255,
          (t >>> 16) & 255,
          (t >>> 24) & 255,
          (o >>> 0) & 255,
          (o >>> 8) & 255,
          (o >>> 16) & 255,
          (o >>> 24) & 255,
        );
      }
      function Y(t, o) {
        function r(t, o) {
          return (
            (t = t ? String(t) : ""), o ? "0000000".slice(t.length) + t : t
          );
        }
        if (2097151 >= o) return "" + W(t, o);
        var e = (((t >>> 24) | (o << 8)) >>> 0) & 16777215;
        return (
          (t =
            (16777215 & t) + 6777216 * e + 6710656 * (o = (o >> 16) & 65535)),
          (e += 8147497 * o),
          (o *= 2),
          1e7 <= t && ((e += Math.floor(t / 1e7)), (t %= 1e7)),
          1e7 <= e && ((o += Math.floor(e / 1e7)), (e %= 1e7)),
          r(o, 0) + r(e, o) + r(t, 1)
        );
      }
      function q(t, o) {
        var r = 2147483648 & o;
        return (
          r && (o = (~o + (0 == (t = (1 + ~t) >>> 0) ? 1 : 0)) >>> 0),
          (t = Y(t, o)),
          r ? "-" + t : t
        );
      }
      function Q(t, o) {
        z(t), (t = T);
        var r = R;
        return o ? q(t, r) : Y(t, r);
      }
      function tt(t) {
        function o(t, o) {
          for (var r = 0; 8 > r && (1 !== t || 0 < o); r++)
            (o = t * e[r] + o), (e[r] = 255 & o), (o >>>= 8);
        }
        v(0 < t.length);
        var r = !1;
        "-" === t[0] && ((r = !0), (t = t.slice(1)));
        for (var e = [0, 0, 0, 0, 0, 0, 0, 0], i = 0; i < t.length; i++)
          o(10, t.charCodeAt(i) - 48);
        return (
          r &&
            ((function () {
              for (var t = 0; 8 > t; t++) e[t] = 255 & ~e[t];
            })(),
            o(1, 1)),
          C(e)
        );
      }
      function ot(t) {
        return String.fromCharCode(10 > t ? 48 + t : 87 + t);
      }
      function rt(t) {
        return 97 <= t ? t - 97 + 10 : t - 48;
      }
      function et(t, o, r, e, i) {
        var n = 0;
        if (128 > e) for (; o < r && t[o++] == e; ) n++, (o += i);
        else
          for (; o < r; ) {
            for (var p = e; 128 < p; ) {
              if (t[o++] != ((127 & p) | 128)) return n;
              p >>= 7;
            }
            if (t[o++] != p) break;
            n++, (o += i);
          }
        return n;
      }
      function it(t) {
        return t.constructor === Uint8Array
          ? t
          : t.constructor === ArrayBuffer || t.constructor === Array
            ? new Uint8Array(t)
            : t.constructor === String
              ? O(t)
              : t instanceof Uint8Array
                ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
                : (w("Type not convertible to Uint8Array."), new Uint8Array(0));
      }
      function nt(t, o, r) {
        (this.b = null),
          (this.a = this.c = this.h = 0),
          (this.v = !1),
          t && this.H(t, o, r);
      }
      u(
        "jspb.utils.getSplit64Low",
        function () {
          return T;
        },
        void 0,
      ),
        u(
          "jspb.utils.getSplit64High",
          function () {
            return R;
          },
          void 0,
        ),
        u("jspb.utils.splitUint64", V, void 0),
        u("jspb.utils.splitInt64", H, void 0),
        u("jspb.utils.splitZigzag64", N, void 0),
        u("jspb.utils.splitFloat32", D, void 0),
        u("jspb.utils.splitFloat64", L, void 0),
        u("jspb.utils.splitHash64", z, void 0),
        u("jspb.utils.joinUint64", W, void 0),
        u("jspb.utils.joinInt64", Z, void 0),
        u("jspb.utils.toZigzag64", _, void 0),
        u("jspb.utils.joinZigzag64", G, void 0),
        u("jspb.utils.fromZigzag64", J, void 0),
        u("jspb.utils.joinFloat32", $, void 0),
        u("jspb.utils.joinFloat64", K, void 0),
        u("jspb.utils.joinHash64", X, void 0),
        u("jspb.utils.DIGITS", "0123456789abcdef".split(""), void 0),
        u("jspb.utils.joinUnsignedDecimalString", Y, void 0),
        u("jspb.utils.joinSignedDecimalString", q, void 0),
        u("jspb.utils.hash64ToDecimalString", Q, void 0),
        u(
          "jspb.utils.hash64ArrayToDecimalStrings",
          function (t, o) {
            for (var r = Array(t.length), e = 0; e < t.length; e++)
              r[e] = Q(t[e], o);
            return r;
          },
          void 0,
        ),
        u("jspb.utils.decimalStringToHash64", tt, void 0),
        u(
          "jspb.utils.splitDecimalString",
          function (t) {
            z(tt(t));
          },
          void 0,
        ),
        u(
          "jspb.utils.hash64ToHexString",
          function (t) {
            var o = Array(18);
            (o[0] = "0"), (o[1] = "x");
            for (var r = 0; 8 > r; r++) {
              var e = t.charCodeAt(7 - r);
              (o[2 * r + 2] = ot(e >> 4)), (o[2 * r + 3] = ot(15 & e));
            }
            return o.join("");
          },
          void 0,
        ),
        u(
          "jspb.utils.hexStringToHash64",
          function (t) {
            v(18 == (t = t.toLowerCase()).length),
              v("0" == t[0]),
              v("x" == t[1]);
            for (var o = "", r = 0; 8 > r; r++)
              o =
                String.fromCharCode(
                  16 * rt(t.charCodeAt(2 * r + 2)) +
                    rt(t.charCodeAt(2 * r + 3)),
                ) + o;
            return o;
          },
          void 0,
        ),
        u(
          "jspb.utils.hash64ToNumber",
          function (t, o) {
            z(t), (t = T);
            var r = R;
            return o ? Z(t, r) : W(t, r);
          },
          void 0,
        ),
        u(
          "jspb.utils.numberToHash64",
          function (t) {
            return H(t), X(T, R);
          },
          void 0,
        ),
        u(
          "jspb.utils.countVarints",
          function (t, o, r) {
            for (var e = 0, i = o; i < r; i++) e += t[i] >> 7;
            return r - o - e;
          },
          void 0,
        ),
        u(
          "jspb.utils.countVarintFields",
          function (t, o, r, e) {
            var i = 0;
            if (128 > (e *= 8))
              for (; o < r && t[o++] == e; )
                for (i++; ; ) {
                  var n = t[o++];
                  if (!(128 & n)) break;
                }
            else
              for (; o < r; ) {
                for (n = e; 128 < n; ) {
                  if (t[o] != ((127 & n) | 128)) return i;
                  o++, (n >>= 7);
                }
                if (t[o++] != n) break;
                for (i++; 128 & (n = t[o++]); );
              }
            return i;
          },
          void 0,
        ),
        u(
          "jspb.utils.countFixed32Fields",
          function (t, o, r, e) {
            return et(t, o, r, 8 * e + 5, 4);
          },
          void 0,
        ),
        u(
          "jspb.utils.countFixed64Fields",
          function (t, o, r, e) {
            return et(t, o, r, 8 * e + 1, 8);
          },
          void 0,
        ),
        u(
          "jspb.utils.countDelimitedFields",
          function (t, o, r, e) {
            var i = 0;
            for (e = 8 * e + 2; o < r; ) {
              for (var n = e; 128 < n; ) {
                if (t[o++] != ((127 & n) | 128)) return i;
                n >>= 7;
              }
              if (t[o++] != n) break;
              i++;
              for (
                var p = 0, a = 1;
                (p += (127 & (n = t[o++])) * a), (a *= 128), 128 & n;
              );
              o += p;
            }
            return i;
          },
          void 0,
        ),
        u(
          "jspb.utils.debugBytesToTextFormat",
          function (t) {
            var o = '"';
            if (t) {
              t = it(t);
              for (var r = 0; r < t.length; r++)
                (o += "\\x"), 16 > t[r] && (o += "0"), (o += t[r].toString(16));
            }
            return o + '"';
          },
          void 0,
        ),
        u(
          "jspb.utils.debugScalarToTextFormat",
          function (t) {
            if ("string" == typeof t) {
              t = String(t);
              for (var o = ['"'], r = 0; r < t.length; r++) {
                var e,
                  i = t.charAt(r),
                  n = i.charCodeAt(0),
                  p = r + 1;
                (e = M[i]) ||
                  ((31 < n && 127 > n) ||
                    ((n = i) in P
                      ? (i = P[n])
                      : n in M
                        ? (i = P[n] = M[n])
                        : (31 < (e = n.charCodeAt(0)) && 127 > e
                            ? (i = n)
                            : (256 > e
                                ? ((i = "\\x"),
                                  (16 > e || 256 < e) && (i += "0"))
                                : ((i = "\\u"), 4096 > e && (i += "0")),
                              (i += e.toString(16).toUpperCase())),
                          (i = P[n] = i))),
                  (e = i)),
                  (o[p] = e);
              }
              o.push('"'), (t = o.join(""));
            } else t = t.toString();
            return t;
          },
          void 0,
        ),
        u(
          "jspb.utils.stringToByteArray",
          function (t) {
            for (var o = new Uint8Array(t.length), r = 0; r < t.length; r++) {
              var e = t.charCodeAt(r);
              if (255 < e)
                throw Error(
                  "Conversion error: string contains codepoint outside of byte range",
                );
              o[r] = e;
            }
            return o;
          },
          void 0,
        ),
        u("jspb.utils.byteSourceToUint8Array", it, void 0),
        u("jspb.BinaryDecoder", nt, void 0);
      var pt = [];
      function at(t, o, r) {
        if (pt.length) {
          var e = pt.pop();
          return t && e.H(t, o, r), e;
        }
        return new nt(t, o, r);
      }
      function st(t, o, r) {
        (this.a = at(t, o, r)),
          (this.O = this.a.B()),
          (this.b = this.c = -1),
          (this.h = !1),
          (this.v = null);
      }
      (nt.getInstanceCacheLength = function () {
        return pt.length;
      }),
        (nt.alloc = at),
        (nt.prototype.Ca = function () {
          this.clear(), 100 > pt.length && pt.push(this);
        }),
        (nt.prototype.free = nt.prototype.Ca),
        (nt.prototype.clone = function () {
          return at(this.b, this.h, this.c - this.h);
        }),
        (nt.prototype.clone = nt.prototype.clone),
        (nt.prototype.clear = function () {
          (this.b = null), (this.a = this.c = this.h = 0), (this.v = !1);
        }),
        (nt.prototype.clear = nt.prototype.clear),
        (nt.prototype.Y = function () {
          return this.b;
        }),
        (nt.prototype.getBuffer = nt.prototype.Y),
        (nt.prototype.H = function (t, o, r) {
          (this.b = it(t)),
            (this.h = void 0 !== o ? o : 0),
            (this.c = void 0 !== r ? this.h + r : this.b.length),
            (this.a = this.h);
        }),
        (nt.prototype.setBlock = nt.prototype.H),
        (nt.prototype.Db = function () {
          return this.c;
        }),
        (nt.prototype.getEnd = nt.prototype.Db),
        (nt.prototype.setEnd = function (t) {
          this.c = t;
        }),
        (nt.prototype.setEnd = nt.prototype.setEnd),
        (nt.prototype.reset = function () {
          this.a = this.h;
        }),
        (nt.prototype.reset = nt.prototype.reset),
        (nt.prototype.B = function () {
          return this.a;
        }),
        (nt.prototype.getCursor = nt.prototype.B),
        (nt.prototype.Ma = function (t) {
          this.a = t;
        }),
        (nt.prototype.setCursor = nt.prototype.Ma),
        (nt.prototype.advance = function (t) {
          (this.a += t), v(this.a <= this.c);
        }),
        (nt.prototype.advance = nt.prototype.advance),
        (nt.prototype.ya = function () {
          return this.a == this.c;
        }),
        (nt.prototype.atEnd = nt.prototype.ya),
        (nt.prototype.Qb = function () {
          return this.a > this.c;
        }),
        (nt.prototype.pastEnd = nt.prototype.Qb),
        (nt.prototype.getError = function () {
          return this.v || 0 > this.a || this.a > this.c;
        }),
        (nt.prototype.getError = nt.prototype.getError),
        (nt.prototype.w = function (t) {
          for (var o = 128, r = 0, e = 0, i = 0; 4 > i && 128 <= o; i++)
            r |= (127 & (o = this.b[this.a++])) << (7 * i);
          if (
            (128 <= o &&
              ((r |= (127 & (o = this.b[this.a++])) << 28),
              (e |= (127 & o) >> 4)),
            128 <= o)
          )
            for (i = 0; 5 > i && 128 <= o; i++)
              e |= (127 & (o = this.b[this.a++])) << (7 * i + 3);
          if (128 > o) return t(r >>> 0, e >>> 0);
          w("Failed to read varint, encoding is invalid."), (this.v = !0);
        }),
        (nt.prototype.readSplitVarint64 = nt.prototype.w),
        (nt.prototype.ea = function (t) {
          return this.w(function (o, r) {
            return J(o, r, t);
          });
        }),
        (nt.prototype.readSplitZigzagVarint64 = nt.prototype.ea),
        (nt.prototype.ta = function (t) {
          var o = this.b,
            r = this.a;
          this.a += 8;
          for (var e = 0, i = 0, n = r + 7; n >= r; n--)
            (e = (e << 8) | o[n]), (i = (i << 8) | o[n + 4]);
          return t(e, i);
        }),
        (nt.prototype.readSplitFixed64 = nt.prototype.ta),
        (nt.prototype.kb = function () {
          for (; 128 & this.b[this.a]; ) this.a++;
          this.a++;
        }),
        (nt.prototype.skipVarint = nt.prototype.kb),
        (nt.prototype.mb = function (t) {
          for (; 128 < t; ) this.a--, (t >>>= 7);
          this.a--;
        }),
        (nt.prototype.unskipVarint = nt.prototype.mb),
        (nt.prototype.o = function () {
          var t = this.b,
            o = t[this.a],
            r = 127 & o;
          return 128 > o
            ? ((this.a += 1), v(this.a <= this.c), r)
            : ((r |= (127 & (o = t[this.a + 1])) << 7),
              128 > o
                ? ((this.a += 2), v(this.a <= this.c), r)
                : ((r |= (127 & (o = t[this.a + 2])) << 14),
                  128 > o
                    ? ((this.a += 3), v(this.a <= this.c), r)
                    : ((r |= (127 & (o = t[this.a + 3])) << 21),
                      128 > o
                        ? ((this.a += 4), v(this.a <= this.c), r)
                        : ((r |= (15 & (o = t[this.a + 4])) << 28),
                          128 > o
                            ? ((this.a += 5), v(this.a <= this.c), r >>> 0)
                            : ((this.a += 5),
                              128 <= t[this.a++] &&
                                128 <= t[this.a++] &&
                                128 <= t[this.a++] &&
                                128 <= t[this.a++] &&
                                128 <= t[this.a++] &&
                                v(!1),
                              v(this.a <= this.c),
                              r)))));
        }),
        (nt.prototype.readUnsignedVarint32 = nt.prototype.o),
        (nt.prototype.da = function () {
          return ~~this.o();
        }),
        (nt.prototype.readSignedVarint32 = nt.prototype.da),
        (nt.prototype.O = function () {
          return this.o().toString();
        }),
        (nt.prototype.Ea = function () {
          return this.da().toString();
        }),
        (nt.prototype.readSignedVarint32String = nt.prototype.Ea),
        (nt.prototype.Ia = function () {
          var t = this.o();
          return (t >>> 1) ^ -(1 & t);
        }),
        (nt.prototype.readZigzagVarint32 = nt.prototype.Ia),
        (nt.prototype.Ga = function () {
          return this.w(W);
        }),
        (nt.prototype.readUnsignedVarint64 = nt.prototype.Ga),
        (nt.prototype.Ha = function () {
          return this.w(Y);
        }),
        (nt.prototype.readUnsignedVarint64String = nt.prototype.Ha),
        (nt.prototype.sa = function () {
          return this.w(Z);
        }),
        (nt.prototype.readSignedVarint64 = nt.prototype.sa),
        (nt.prototype.Fa = function () {
          return this.w(q);
        }),
        (nt.prototype.readSignedVarint64String = nt.prototype.Fa),
        (nt.prototype.Ja = function () {
          return this.w(G);
        }),
        (nt.prototype.readZigzagVarint64 = nt.prototype.Ja),
        (nt.prototype.fb = function () {
          return this.ea(X);
        }),
        (nt.prototype.readZigzagVarintHash64 = nt.prototype.fb),
        (nt.prototype.Ka = function () {
          return this.ea(q);
        }),
        (nt.prototype.readZigzagVarint64String = nt.prototype.Ka),
        (nt.prototype.Gc = function () {
          var t = this.b[this.a];
          return (this.a += 1), v(this.a <= this.c), t;
        }),
        (nt.prototype.readUint8 = nt.prototype.Gc),
        (nt.prototype.Ec = function () {
          var t = this.b[this.a],
            o = this.b[this.a + 1];
          return (this.a += 2), v(this.a <= this.c), t | (o << 8);
        }),
        (nt.prototype.readUint16 = nt.prototype.Ec),
        (nt.prototype.m = function () {
          var t = this.b[this.a],
            o = this.b[this.a + 1],
            r = this.b[this.a + 2],
            e = this.b[this.a + 3];
          return (
            (this.a += 4),
            v(this.a <= this.c),
            (t | (o << 8) | (r << 16) | (e << 24)) >>> 0
          );
        }),
        (nt.prototype.readUint32 = nt.prototype.m),
        (nt.prototype.ga = function () {
          return W(this.m(), this.m());
        }),
        (nt.prototype.readUint64 = nt.prototype.ga),
        (nt.prototype.ha = function () {
          return Y(this.m(), this.m());
        }),
        (nt.prototype.readUint64String = nt.prototype.ha),
        (nt.prototype.Xb = function () {
          var t = this.b[this.a];
          return (this.a += 1), v(this.a <= this.c), (t << 24) >> 24;
        }),
        (nt.prototype.readInt8 = nt.prototype.Xb),
        (nt.prototype.Vb = function () {
          var t = this.b[this.a],
            o = this.b[this.a + 1];
          return (
            (this.a += 2), v(this.a <= this.c), ((t | (o << 8)) << 16) >> 16
          );
        }),
        (nt.prototype.readInt16 = nt.prototype.Vb),
        (nt.prototype.P = function () {
          var t = this.b[this.a],
            o = this.b[this.a + 1],
            r = this.b[this.a + 2],
            e = this.b[this.a + 3];
          return (
            (this.a += 4),
            v(this.a <= this.c),
            t | (o << 8) | (r << 16) | (e << 24)
          );
        }),
        (nt.prototype.readInt32 = nt.prototype.P),
        (nt.prototype.ba = function () {
          return Z(this.m(), this.m());
        }),
        (nt.prototype.readInt64 = nt.prototype.ba),
        (nt.prototype.ca = function () {
          return q(this.m(), this.m());
        }),
        (nt.prototype.readInt64String = nt.prototype.ca),
        (nt.prototype.aa = function () {
          return $(this.m());
        }),
        (nt.prototype.readFloat = nt.prototype.aa),
        (nt.prototype.Z = function () {
          return K(this.m(), this.m());
        }),
        (nt.prototype.readDouble = nt.prototype.Z),
        (nt.prototype.pa = function () {
          return !!this.b[this.a++];
        }),
        (nt.prototype.readBool = nt.prototype.pa),
        (nt.prototype.ra = function () {
          return this.da();
        }),
        (nt.prototype.readEnum = nt.prototype.ra),
        (nt.prototype.fa = function (t) {
          var o = this.b,
            r = this.a;
          t = r + t;
          for (var e = [], i = ""; r < t; ) {
            var n = o[r++];
            if (128 > n) e.push(n);
            else {
              if (192 > n) continue;
              if (224 > n) {
                var p = o[r++];
                e.push(((31 & n) << 6) | (63 & p));
              } else if (240 > n) {
                p = o[r++];
                var a = o[r++];
                e.push(((15 & n) << 12) | ((63 & p) << 6) | (63 & a));
              } else if (248 > n) {
                (n =
                  ((7 & n) << 18) |
                  ((63 & (p = o[r++])) << 12) |
                  ((63 & (a = o[r++])) << 6) |
                  (63 & o[r++])),
                  (n -= 65536),
                  e.push(55296 + ((n >> 10) & 1023), 56320 + (1023 & n));
              }
            }
            8192 <= e.length &&
              ((i += String.fromCharCode.apply(null, e)), (e.length = 0));
          }
          return (i += C(e)), (this.a = r), i;
        }),
        (nt.prototype.readString = nt.prototype.fa),
        (nt.prototype.Dc = function () {
          var t = this.o();
          return this.fa(t);
        }),
        (nt.prototype.readStringWithLength = nt.prototype.Dc),
        (nt.prototype.qa = function (t) {
          if (0 > t || this.a + t > this.b.length)
            return (this.v = !0), w("Invalid byte length!"), new Uint8Array(0);
          var o = this.b.subarray(this.a, this.a + t);
          return (this.a += t), v(this.a <= this.c), o;
        }),
        (nt.prototype.readBytes = nt.prototype.qa),
        (nt.prototype.ia = function () {
          return this.w(X);
        }),
        (nt.prototype.readVarintHash64 = nt.prototype.ia),
        (nt.prototype.$ = function () {
          var t = this.b,
            o = this.a,
            r = t[o],
            e = t[o + 1],
            i = t[o + 2],
            n = t[o + 3],
            p = t[o + 4],
            a = t[o + 5],
            s = t[o + 6];
          return (
            (t = t[o + 7]),
            (this.a += 8),
            String.fromCharCode(r, e, i, n, p, a, s, t)
          );
        }),
        (nt.prototype.readFixedHash64 = nt.prototype.$),
        u("jspb.BinaryReader", st, void 0);
      var ht = [];
      function ut(t, o, r) {
        if (ht.length) {
          var e = ht.pop();
          return t && e.a.H(t, o, r), e;
        }
        return new st(t, o, r);
      }
      function yt(t, o) {
        v(2 == t.b);
        var r = t.a.o();
        r = t.a.B() + r;
        for (var e = []; t.a.B() < r; ) e.push(o.call(t.a));
        return e;
      }
      function ft(t, o, r, e, i) {
        (this.ma = t),
          (this.Ba = o),
          (this.la = r),
          (this.Na = e),
          (this.na = i);
      }
      function ct(t, o, r, e, i, n) {
        (this.Za = t),
          (this.za = o),
          (this.Aa = r),
          (this.Wa = e),
          (this.Ab = i),
          (this.Nb = n);
      }
      function lt() {}
      (st.clearInstanceCache = function () {
        ht = [];
      }),
        (st.getInstanceCacheLength = function () {
          return ht.length;
        }),
        (st.alloc = ut),
        (st.prototype.zb = ut),
        (st.prototype.alloc = st.prototype.zb),
        (st.prototype.Ca = function () {
          this.a.clear(),
            (this.b = this.c = -1),
            (this.h = !1),
            (this.v = null),
            100 > ht.length && ht.push(this);
        }),
        (st.prototype.free = st.prototype.Ca),
        (st.prototype.Fb = function () {
          return this.O;
        }),
        (st.prototype.getFieldCursor = st.prototype.Fb),
        (st.prototype.B = function () {
          return this.a.B();
        }),
        (st.prototype.getCursor = st.prototype.B),
        (st.prototype.Y = function () {
          return this.a.Y();
        }),
        (st.prototype.getBuffer = st.prototype.Y),
        (st.prototype.Hb = function () {
          return this.c;
        }),
        (st.prototype.getFieldNumber = st.prototype.Hb),
        (st.prototype.Lb = function () {
          return this.b;
        }),
        (st.prototype.getWireType = st.prototype.Lb),
        (st.prototype.Mb = function () {
          return 2 == this.b;
        }),
        (st.prototype.isDelimited = st.prototype.Mb),
        (st.prototype.bb = function () {
          return 4 == this.b;
        }),
        (st.prototype.isEndGroup = st.prototype.bb),
        (st.prototype.getError = function () {
          return this.h || this.a.getError();
        }),
        (st.prototype.getError = st.prototype.getError),
        (st.prototype.H = function (t, o, r) {
          this.a.H(t, o, r), (this.b = this.c = -1);
        }),
        (st.prototype.setBlock = st.prototype.H),
        (st.prototype.reset = function () {
          this.a.reset(), (this.b = this.c = -1);
        }),
        (st.prototype.reset = st.prototype.reset),
        (st.prototype.advance = function (t) {
          this.a.advance(t);
        }),
        (st.prototype.advance = st.prototype.advance),
        (st.prototype.oa = function () {
          if (this.a.ya()) return !1;
          if (this.getError()) return w("Decoder hit an error"), !1;
          this.O = this.a.B();
          var t = this.a.o(),
            o = t >>> 3;
          return 0 != (t &= 7) && 5 != t && 1 != t && 2 != t && 3 != t && 4 != t
            ? (w("Invalid wire type: %s (at position %s)", t, this.O),
              (this.h = !0),
              !1)
            : ((this.c = o), (this.b = t), !0);
        }),
        (st.prototype.nextField = st.prototype.oa),
        (st.prototype.Oa = function () {
          this.a.mb((this.c << 3) | this.b);
        }),
        (st.prototype.unskipHeader = st.prototype.Oa),
        (st.prototype.Lc = function () {
          var t = this.c;
          for (this.Oa(); this.oa() && this.c == t; ) this.C();
          this.a.ya() || this.Oa();
        }),
        (st.prototype.skipMatchingFields = st.prototype.Lc),
        (st.prototype.lb = function () {
          0 != this.b
            ? (w("Invalid wire type for skipVarintField"), this.C())
            : this.a.kb();
        }),
        (st.prototype.skipVarintField = st.prototype.lb),
        (st.prototype.gb = function () {
          if (2 != this.b)
            w("Invalid wire type for skipDelimitedField"), this.C();
          else {
            var t = this.a.o();
            this.a.advance(t);
          }
        }),
        (st.prototype.skipDelimitedField = st.prototype.gb),
        (st.prototype.hb = function () {
          5 != this.b
            ? (w("Invalid wire type for skipFixed32Field"), this.C())
            : this.a.advance(4);
        }),
        (st.prototype.skipFixed32Field = st.prototype.hb),
        (st.prototype.ib = function () {
          1 != this.b
            ? (w("Invalid wire type for skipFixed64Field"), this.C())
            : this.a.advance(8);
        }),
        (st.prototype.skipFixed64Field = st.prototype.ib),
        (st.prototype.jb = function () {
          for (var t = this.c; ; ) {
            if (!this.oa()) {
              w("Unmatched start-group tag: stream EOF"), (this.h = !0);
              break;
            }
            if (4 == this.b) {
              this.c != t && (w("Unmatched end-group tag"), (this.h = !0));
              break;
            }
            this.C();
          }
        }),
        (st.prototype.skipGroup = st.prototype.jb),
        (st.prototype.C = function () {
          switch (this.b) {
            case 0:
              this.lb();
              break;
            case 1:
              this.ib();
              break;
            case 2:
              this.gb();
              break;
            case 5:
              this.hb();
              break;
            case 3:
              this.jb();
              break;
            default:
              w("Invalid wire encoding for field.");
          }
        }),
        (st.prototype.skipField = st.prototype.C),
        (st.prototype.Hc = function (t, o) {
          null === this.v && (this.v = {}), v(!this.v[t]), (this.v[t] = o);
        }),
        (st.prototype.registerReadCallback = st.prototype.Hc),
        (st.prototype.Ic = function (t) {
          return v(null !== this.v), v((t = this.v[t])), t(this);
        }),
        (st.prototype.runReadCallback = st.prototype.Ic),
        (st.prototype.Yb = function (t, o) {
          v(2 == this.b);
          var r = this.a.c,
            e = this.a.o();
          (e = this.a.B() + e),
            this.a.setEnd(e),
            o(t, this),
            this.a.Ma(e),
            this.a.setEnd(r);
        }),
        (st.prototype.readMessage = st.prototype.Yb),
        (st.prototype.Ub = function (t, o, r) {
          v(3 == this.b),
            v(this.c == t),
            r(o, this),
            this.h ||
              4 == this.b ||
              (w("Group submessage did not end with an END_GROUP tag"),
              (this.h = !0));
        }),
        (st.prototype.readGroup = st.prototype.Ub),
        (st.prototype.Gb = function () {
          v(2 == this.b);
          var t = this.a.o(),
            o = this.a.B(),
            r = o + t;
          return (t = at(this.a.Y(), o, t)), this.a.Ma(r), t;
        }),
        (st.prototype.getFieldDecoder = st.prototype.Gb),
        (st.prototype.P = function () {
          return v(0 == this.b), this.a.da();
        }),
        (st.prototype.readInt32 = st.prototype.P),
        (st.prototype.Wb = function () {
          return v(0 == this.b), this.a.Ea();
        }),
        (st.prototype.readInt32String = st.prototype.Wb),
        (st.prototype.ba = function () {
          return v(0 == this.b), this.a.sa();
        }),
        (st.prototype.readInt64 = st.prototype.ba),
        (st.prototype.ca = function () {
          return v(0 == this.b), this.a.Fa();
        }),
        (st.prototype.readInt64String = st.prototype.ca),
        (st.prototype.m = function () {
          return v(0 == this.b), this.a.o();
        }),
        (st.prototype.readUint32 = st.prototype.m),
        (st.prototype.Fc = function () {
          return v(0 == this.b), this.a.O();
        }),
        (st.prototype.readUint32String = st.prototype.Fc),
        (st.prototype.ga = function () {
          return v(0 == this.b), this.a.Ga();
        }),
        (st.prototype.readUint64 = st.prototype.ga),
        (st.prototype.ha = function () {
          return v(0 == this.b), this.a.Ha();
        }),
        (st.prototype.readUint64String = st.prototype.ha),
        (st.prototype.zc = function () {
          return v(0 == this.b), this.a.Ia();
        }),
        (st.prototype.readSint32 = st.prototype.zc),
        (st.prototype.Ac = function () {
          return v(0 == this.b), this.a.Ja();
        }),
        (st.prototype.readSint64 = st.prototype.Ac),
        (st.prototype.Bc = function () {
          return v(0 == this.b), this.a.Ka();
        }),
        (st.prototype.readSint64String = st.prototype.Bc),
        (st.prototype.Rb = function () {
          return v(5 == this.b), this.a.m();
        }),
        (st.prototype.readFixed32 = st.prototype.Rb),
        (st.prototype.Sb = function () {
          return v(1 == this.b), this.a.ga();
        }),
        (st.prototype.readFixed64 = st.prototype.Sb),
        (st.prototype.Tb = function () {
          return v(1 == this.b), this.a.ha();
        }),
        (st.prototype.readFixed64String = st.prototype.Tb),
        (st.prototype.vc = function () {
          return v(5 == this.b), this.a.P();
        }),
        (st.prototype.readSfixed32 = st.prototype.vc),
        (st.prototype.wc = function () {
          return v(5 == this.b), this.a.P().toString();
        }),
        (st.prototype.readSfixed32String = st.prototype.wc),
        (st.prototype.xc = function () {
          return v(1 == this.b), this.a.ba();
        }),
        (st.prototype.readSfixed64 = st.prototype.xc),
        (st.prototype.yc = function () {
          return v(1 == this.b), this.a.ca();
        }),
        (st.prototype.readSfixed64String = st.prototype.yc),
        (st.prototype.aa = function () {
          return v(5 == this.b), this.a.aa();
        }),
        (st.prototype.readFloat = st.prototype.aa),
        (st.prototype.Z = function () {
          return v(1 == this.b), this.a.Z();
        }),
        (st.prototype.readDouble = st.prototype.Z),
        (st.prototype.pa = function () {
          return v(0 == this.b), !!this.a.o();
        }),
        (st.prototype.readBool = st.prototype.pa),
        (st.prototype.ra = function () {
          return v(0 == this.b), this.a.sa();
        }),
        (st.prototype.readEnum = st.prototype.ra),
        (st.prototype.fa = function () {
          v(2 == this.b);
          var t = this.a.o();
          return this.a.fa(t);
        }),
        (st.prototype.readString = st.prototype.fa),
        (st.prototype.qa = function () {
          v(2 == this.b);
          var t = this.a.o();
          return this.a.qa(t);
        }),
        (st.prototype.readBytes = st.prototype.qa),
        (st.prototype.ia = function () {
          return v(0 == this.b), this.a.ia();
        }),
        (st.prototype.readVarintHash64 = st.prototype.ia),
        (st.prototype.Cc = function () {
          return v(0 == this.b), this.a.fb();
        }),
        (st.prototype.readSintHash64 = st.prototype.Cc),
        (st.prototype.w = function (t) {
          return v(0 == this.b), this.a.w(t);
        }),
        (st.prototype.readSplitVarint64 = st.prototype.w),
        (st.prototype.ea = function (t) {
          return (
            v(0 == this.b),
            this.a.w(function (o, r) {
              return J(o, r, t);
            })
          );
        }),
        (st.prototype.readSplitZigzagVarint64 = st.prototype.ea),
        (st.prototype.$ = function () {
          return v(1 == this.b), this.a.$();
        }),
        (st.prototype.readFixedHash64 = st.prototype.$),
        (st.prototype.ta = function (t) {
          return v(1 == this.b), this.a.ta(t);
        }),
        (st.prototype.readSplitFixed64 = st.prototype.ta),
        (st.prototype.gc = function () {
          return yt(this, this.a.da);
        }),
        (st.prototype.readPackedInt32 = st.prototype.gc),
        (st.prototype.hc = function () {
          return yt(this, this.a.Ea);
        }),
        (st.prototype.readPackedInt32String = st.prototype.hc),
        (st.prototype.ic = function () {
          return yt(this, this.a.sa);
        }),
        (st.prototype.readPackedInt64 = st.prototype.ic),
        (st.prototype.jc = function () {
          return yt(this, this.a.Fa);
        }),
        (st.prototype.readPackedInt64String = st.prototype.jc),
        (st.prototype.qc = function () {
          return yt(this, this.a.o);
        }),
        (st.prototype.readPackedUint32 = st.prototype.qc),
        (st.prototype.rc = function () {
          return yt(this, this.a.O);
        }),
        (st.prototype.readPackedUint32String = st.prototype.rc),
        (st.prototype.sc = function () {
          return yt(this, this.a.Ga);
        }),
        (st.prototype.readPackedUint64 = st.prototype.sc),
        (st.prototype.tc = function () {
          return yt(this, this.a.Ha);
        }),
        (st.prototype.readPackedUint64String = st.prototype.tc),
        (st.prototype.nc = function () {
          return yt(this, this.a.Ia);
        }),
        (st.prototype.readPackedSint32 = st.prototype.nc),
        (st.prototype.oc = function () {
          return yt(this, this.a.Ja);
        }),
        (st.prototype.readPackedSint64 = st.prototype.oc),
        (st.prototype.pc = function () {
          return yt(this, this.a.Ka);
        }),
        (st.prototype.readPackedSint64String = st.prototype.pc),
        (st.prototype.bc = function () {
          return yt(this, this.a.m);
        }),
        (st.prototype.readPackedFixed32 = st.prototype.bc),
        (st.prototype.cc = function () {
          return yt(this, this.a.ga);
        }),
        (st.prototype.readPackedFixed64 = st.prototype.cc),
        (st.prototype.dc = function () {
          return yt(this, this.a.ha);
        }),
        (st.prototype.readPackedFixed64String = st.prototype.dc),
        (st.prototype.kc = function () {
          return yt(this, this.a.P);
        }),
        (st.prototype.readPackedSfixed32 = st.prototype.kc),
        (st.prototype.lc = function () {
          return yt(this, this.a.ba);
        }),
        (st.prototype.readPackedSfixed64 = st.prototype.lc),
        (st.prototype.mc = function () {
          return yt(this, this.a.ca);
        }),
        (st.prototype.readPackedSfixed64String = st.prototype.mc),
        (st.prototype.fc = function () {
          return yt(this, this.a.aa);
        }),
        (st.prototype.readPackedFloat = st.prototype.fc),
        (st.prototype.$b = function () {
          return yt(this, this.a.Z);
        }),
        (st.prototype.readPackedDouble = st.prototype.$b),
        (st.prototype.Zb = function () {
          return yt(this, this.a.pa);
        }),
        (st.prototype.readPackedBool = st.prototype.Zb),
        (st.prototype.ac = function () {
          return yt(this, this.a.ra);
        }),
        (st.prototype.readPackedEnum = st.prototype.ac),
        (st.prototype.uc = function () {
          return yt(this, this.a.ia);
        }),
        (st.prototype.readPackedVarintHash64 = st.prototype.uc),
        (st.prototype.ec = function () {
          return yt(this, this.a.$);
        }),
        (st.prototype.readPackedFixedHash64 = st.prototype.ec),
        u("jspb.ExtensionFieldInfo", ft, void 0),
        u("jspb.ExtensionFieldBinaryInfo", ct, void 0),
        (ft.prototype.F = function () {
          return !!this.la;
        }),
        (ft.prototype.isMessageType = ft.prototype.F),
        u("jspb.Message", lt, void 0),
        (lt.GENERATE_TO_OBJECT = !0),
        (lt.GENERATE_FROM_OBJECT = !0);
      var dt = "function" == typeof Uint8Array;
      (lt.prototype.Ib = function () {
        return this.b;
      }),
        (lt.prototype.getJsPbMessageId = lt.prototype.Ib),
        (lt.initialize = function (t, o, r, e, i, n) {
          if (
            ((t.f = null),
            o || (o = r ? [r] : []),
            (t.b = r ? String(r) : void 0),
            (t.D = 0 === r ? -1 : 0),
            (t.u = o),
            (o = -1),
            !(r = t.u.length) ||
            ((o = r - 1),
            null === (r = t.u[o]) ||
              "object" != typeof r ||
              Array.isArray(r) ||
              (dt && r instanceof Uint8Array))
              ? -1 < e
                ? ((t.G = Math.max(e, o + 1 - t.D)), (t.i = null))
                : (t.G = Number.MAX_VALUE)
              : ((t.G = o - t.D), (t.i = r)),
            (t.a = {}),
            i)
          )
            for (e = 0; e < i.length; e++)
              (o = i[e]) < t.G
                ? ((o += t.D), (t.u[o] = t.u[o] || gt))
                : (bt(t), (t.i[o] = t.i[o] || gt));
          if (n && n.length) for (e = 0; e < n.length; e++) Pt(t, n[e]);
        });
      var gt = Object.freeze ? Object.freeze([]) : [];
      function bt(t) {
        var o = t.G + t.D;
        t.u[o] || (t.i = t.u[o] = {});
      }
      function vt(t, o, r) {
        for (var e = [], i = 0; i < t.length; i++) e[i] = o.call(t[i], r, t[i]);
        return e;
      }
      function wt(t, o) {
        if (o < t.G) {
          o += t.D;
          var r = t.u[o];
          return r === gt ? (t.u[o] = []) : r;
        }
        if (t.i) return (r = t.i[o]) === gt ? (t.i[o] = []) : r;
      }
      function St(t, o) {
        return null == (t = wt(t, o)) ? t : +t;
      }
      function jt(t, o) {
        return null == (t = wt(t, o)) ? t : !!t;
      }
      function xt(t) {
        return null == t || "string" == typeof t
          ? t
          : dt && t instanceof Uint8Array
            ? B(t)
            : (w("Cannot coerce to b64 string: " + y(t)), null);
      }
      function Ft(t) {
        return null == t || t instanceof Uint8Array
          ? t
          : "string" == typeof t
            ? O(t)
            : (w("Cannot coerce to Uint8Array: " + y(t)), null);
      }
      function mt(t) {
        if (t && 1 < t.length) {
          var o = y(t[0]);
          l(t, function (t) {
            y(t) != o &&
              w(
                "Inconsistent type in JSPB repeated field array. Got " +
                  y(t) +
                  " expected " +
                  o,
              );
          });
        }
      }
      function kt(t, o, r) {
        return null == (t = wt(t, o)) ? r : t;
      }
      function At(t, o, r) {
        return (
          S(t, lt), o < t.G ? (t.u[o + t.D] = r) : (bt(t), (t.i[o] = r)), t
        );
      }
      function Ct(t, o, r, e) {
        return (
          S(t, lt),
          r !== e
            ? At(t, o, r)
            : o < t.G
              ? (t.u[o + t.D] = null)
              : (bt(t), delete t.i[o]),
          t
        );
      }
      function Mt(t, o, r, e) {
        return (
          S(t, lt),
          (r = Pt(t, r)) &&
            r !== o &&
            void 0 !== e &&
            (t.f && r in t.f && (t.f[r] = void 0), At(t, r, void 0)),
          At(t, o, e)
        );
      }
      function Pt(t, o) {
        for (var r, e, i = 0; i < o.length; i++) {
          var n = o[i],
            p = wt(t, n);
          null != p && ((r = n), (e = p), At(t, n, void 0));
        }
        return r ? (At(t, r, e), r) : 0;
      }
      function Et(t, o, r) {
        if ((t.f || (t.f = {}), !t.f[r])) {
          for (var e = wt(t, r), i = [], n = 0; n < e.length; n++)
            i[n] = new o(e[n]);
          t.f[r] = i;
        }
      }
      function It(t) {
        if (t.f)
          for (var o in t.f) {
            var r = t.f[o];
            if (Array.isArray(r))
              for (var e = 0; e < r.length; e++) r[e] && r[e].g();
            else r && r.g();
          }
      }
      function Bt(t, o) {
        (t = t || {}), (o = o || {});
        var r,
          e = {};
        for (r in t) e[r] = 0;
        for (r in o) e[r] = 0;
        for (r in e) if (!Ot(t[r], o[r])) return !1;
        return !0;
      }
      function Ot(t, o) {
        if (t == o) return !0;
        if (!f(t) || !f(o))
          return (
            !!(
              ("number" == typeof t && isNaN(t)) ||
              ("number" == typeof o && isNaN(o))
            ) && String(t) == String(o)
          );
        if (t.constructor != o.constructor) return !1;
        if (dt && t.constructor === Uint8Array) {
          if (t.length != o.length) return !1;
          for (var r = 0; r < t.length; r++) if (t[r] != o[r]) return !1;
          return !0;
        }
        if (t.constructor === Array) {
          var e = void 0,
            i = void 0,
            n = Math.max(t.length, o.length);
          for (r = 0; r < n; r++) {
            var p = t[r],
              a = o[r];
            if (
              (p &&
                p.constructor == Object &&
                (v(void 0 === e), v(r === t.length - 1), (e = p), (p = void 0)),
              a &&
                a.constructor == Object &&
                (v(void 0 === i), v(r === o.length - 1), (i = a), (a = void 0)),
              !Ot(p, a))
            )
              return !1;
          }
          return (!e && !i) || Bt((e = e || {}), (i = i || {}));
        }
        if (t.constructor === Object) return Bt(t, o);
        throw Error("Invalid type in JSPB array");
      }
      function Ut(t) {
        return new t.constructor(Tt(t.g()));
      }
      function Tt(t) {
        if (Array.isArray(t)) {
          for (var o = Array(t.length), r = 0; r < t.length; r++) {
            var e = t[r];
            null != e && (o[r] = "object" == typeof e ? Tt(v(e)) : e);
          }
          return o;
        }
        if (dt && t instanceof Uint8Array) return new Uint8Array(t);
        for (r in ((o = {}), t))
          null != (e = t[r]) && (o[r] = "object" == typeof e ? Tt(v(e)) : e);
        return o;
      }
      (lt.toObjectList = vt),
        (lt.toObjectExtension = function (t, o, r, e, i) {
          for (var n in r) {
            var p = r[n],
              a = e.call(t, p);
            if (null != a) {
              for (var s in p.Ba) if (p.Ba.hasOwnProperty(s)) break;
              o[s] = p.Na ? (p.na ? vt(a, p.Na, i) : p.Na(i, a)) : a;
            }
          }
        }),
        (lt.serializeBinaryExtensions = function (t, o, r, e) {
          for (var i in r) {
            var n = r[i],
              p = n.Za;
            if (!n.Aa)
              throw Error(
                "Message extension present that was generated without binary serialization support",
              );
            var a = e.call(t, p);
            if (null != a)
              if (p.F()) {
                if (!n.Wa)
                  throw Error(
                    "Message extension present holding submessage without binary support enabled, and message is being serialized to binary format",
                  );
                n.Aa.call(o, p.ma, a, n.Wa);
              } else n.Aa.call(o, p.ma, a);
          }
        }),
        (lt.readBinaryExtension = function (t, o, r, e, i) {
          var n = r[o.c];
          if (n) {
            if (((r = n.Za), !n.za))
              throw Error(
                "Deserializing extension whose generated code does not support binary format",
              );
            if (r.F()) {
              var p = new r.la();
              n.za.call(o, p, n.Ab);
            } else p = n.za.call(o);
            r.na && !n.Nb
              ? (o = e.call(t, r))
                ? o.push(p)
                : i.call(t, r, [p])
              : i.call(t, r, p);
          } else o.C();
        }),
        (lt.getField = wt),
        (lt.getRepeatedField = function (t, o) {
          return wt(t, o);
        }),
        (lt.getOptionalFloatingPointField = St),
        (lt.getBooleanField = jt),
        (lt.getRepeatedFloatingPointField = function (t, o) {
          var r = wt(t, o);
          if ((t.a || (t.a = {}), !t.a[o])) {
            for (var e = 0; e < r.length; e++) r[e] = +r[e];
            t.a[o] = !0;
          }
          return r;
        }),
        (lt.getRepeatedBooleanField = function (t, o) {
          var r = wt(t, o);
          if ((t.a || (t.a = {}), !t.a[o])) {
            for (var e = 0; e < r.length; e++) r[e] = !!r[e];
            t.a[o] = !0;
          }
          return r;
        }),
        (lt.bytesAsB64 = xt),
        (lt.bytesAsU8 = Ft),
        (lt.bytesListAsB64 = function (t) {
          return mt(t), t.length && "string" != typeof t[0] ? d(t, xt) : t;
        }),
        (lt.bytesListAsU8 = function (t) {
          return mt(t), !t.length || t[0] instanceof Uint8Array ? t : d(t, Ft);
        }),
        (lt.getFieldWithDefault = kt),
        (lt.getBooleanFieldWithDefault = function (t, o, r) {
          return null == (t = jt(t, o)) ? r : t;
        }),
        (lt.getFloatingPointFieldWithDefault = function (t, o, r) {
          return null == (t = St(t, o)) ? r : t;
        }),
        (lt.getFieldProto3 = kt),
        (lt.getMapField = function (t, o, r, e) {
          if ((t.f || (t.f = {}), o in t.f)) return t.f[o];
          var i = wt(t, o);
          if (!i) {
            if (r) return;
            At(t, o, (i = []));
          }
          return (t.f[o] = new x(i, e));
        }),
        (lt.setField = At),
        (lt.setProto3IntField = function (t, o, r) {
          return Ct(t, o, r, 0);
        }),
        (lt.setProto3FloatField = function (t, o, r) {
          return Ct(t, o, r, 0);
        }),
        (lt.setProto3BooleanField = function (t, o, r) {
          return Ct(t, o, r, !1);
        }),
        (lt.setProto3StringField = function (t, o, r) {
          return Ct(t, o, r, "");
        }),
        (lt.setProto3BytesField = function (t, o, r) {
          return Ct(t, o, r, "");
        }),
        (lt.setProto3EnumField = function (t, o, r) {
          return Ct(t, o, r, 0);
        }),
        (lt.setProto3StringIntField = function (t, o, r) {
          return Ct(t, o, r, "0");
        }),
        (lt.addToRepeatedField = function (t, o, r, e) {
          return (
            S(t, lt),
            (o = wt(t, o)),
            null != e ? o.splice(e, 0, r) : o.push(r),
            t
          );
        }),
        (lt.setOneofField = Mt),
        (lt.computeOneofCase = Pt),
        (lt.getWrapperField = function (t, o, r, e) {
          if ((t.f || (t.f = {}), !t.f[r])) {
            var i = wt(t, r);
            (e || i) && (t.f[r] = new o(i));
          }
          return t.f[r];
        }),
        (lt.getRepeatedWrapperField = function (t, o, r) {
          return Et(t, o, r), (o = t.f[r]) == gt && (o = t.f[r] = []), o;
        }),
        (lt.setWrapperField = function (t, o, r) {
          S(t, lt), t.f || (t.f = {});
          var e = r ? r.g() : r;
          return (t.f[o] = r), At(t, o, e);
        }),
        (lt.setOneofWrapperField = function (t, o, r, e) {
          S(t, lt), t.f || (t.f = {});
          var i = e ? e.g() : e;
          return (t.f[o] = e), Mt(t, o, r, i);
        }),
        (lt.setRepeatedWrapperField = function (t, o, r) {
          S(t, lt), t.f || (t.f = {}), (r = r || []);
          for (var e = [], i = 0; i < r.length; i++) e[i] = r[i].g();
          return (t.f[o] = r), At(t, o, e);
        }),
        (lt.addToRepeatedWrapperField = function (t, o, r, e, i) {
          Et(t, e, o);
          var n = t.f[o];
          return (
            n || (n = t.f[o] = []),
            (r = r || new e()),
            (t = wt(t, o)),
            null != i
              ? (n.splice(i, 0, r), t.splice(i, 0, r.g()))
              : (n.push(r), t.push(r.g())),
            r
          );
        }),
        (lt.toMap = function (t, o, r, e) {
          for (var i = {}, n = 0; n < t.length; n++)
            i[o.call(t[n])] = r ? r.call(t[n], e, t[n]) : t[n];
          return i;
        }),
        (lt.prototype.g = function () {
          return It(this), this.u;
        }),
        (lt.prototype.toArray = lt.prototype.g),
        (lt.prototype.toString = function () {
          return It(this), this.u.toString();
        }),
        (lt.prototype.getExtension = function (t) {
          if (this.i) {
            this.f || (this.f = {});
            var o = t.ma;
            if (t.na) {
              if (t.F())
                return (
                  this.f[o] ||
                    (this.f[o] = d(this.i[o] || [], function (o) {
                      return new t.la(o);
                    })),
                  this.f[o]
                );
            } else if (t.F())
              return (
                !this.f[o] && this.i[o] && (this.f[o] = new t.la(this.i[o])),
                this.f[o]
              );
            return this.i[o];
          }
        }),
        (lt.prototype.getExtension = lt.prototype.getExtension),
        (lt.prototype.Kc = function (t, o) {
          this.f || (this.f = {}), bt(this);
          var r = t.ma;
          return (
            t.na
              ? ((o = o || []),
                t.F()
                  ? ((this.f[r] = o),
                    (this.i[r] = d(o, function (t) {
                      return t.g();
                    })))
                  : (this.i[r] = o))
              : t.F()
                ? ((this.f[r] = o), (this.i[r] = o ? o.g() : o))
                : (this.i[r] = o),
            this
          );
        }),
        (lt.prototype.setExtension = lt.prototype.Kc),
        (lt.difference = function (t, o) {
          if (!(t instanceof o.constructor))
            throw Error("Messages have different types.");
          var r = t.g();
          o = o.g();
          var e = [],
            i = 0,
            n = r.length > o.length ? r.length : o.length;
          for (t.b && ((e[0] = t.b), (i = 1)); i < n; i++)
            Ot(r[i], o[i]) || (e[i] = o[i]);
          return new t.constructor(e);
        }),
        (lt.equals = function (t, o) {
          return (
            t == o ||
            (!(!t || !o) && t instanceof o.constructor && Ot(t.g(), o.g()))
          );
        }),
        (lt.compareExtensions = Bt),
        (lt.compareFields = Ot),
        (lt.prototype.Bb = function () {
          return Ut(this);
        }),
        (lt.prototype.cloneMessage = lt.prototype.Bb),
        (lt.prototype.clone = function () {
          return Ut(this);
        }),
        (lt.prototype.clone = lt.prototype.clone),
        (lt.clone = function (t) {
          return Ut(t);
        }),
        (lt.copyInto = function (t, o) {
          S(t, lt),
            S(o, lt),
            v(
              t.constructor == o.constructor,
              "Copy source and target message should have the same type.",
            ),
            (t = Ut(t));
          for (var r = o.g(), e = t.g(), i = (r.length = 0); i < e.length; i++)
            r[i] = e[i];
          (o.f = t.f), (o.i = t.i);
        }),
        (lt.registerMessageType = function (t, o) {
          o.we = t;
        });
      var Rt = {
        dump: function (t) {
          return (
            S(t, lt, "jspb.Message instance expected"),
            v(
              t.getExtension,
              "Only unobfuscated and unoptimized compilation modes supported.",
            ),
            Rt.X(t)
          );
        },
      };
      function Vt() {
        this.a = [];
      }
      function Ht(t, o) {
        (this.lo = t), (this.hi = o);
      }
      function Nt(t, o) {
        var r = 65535 & t,
          e = 65535 & o,
          i = o >>> 16;
        for (
          o =
            r * e +
            65536 * ((r * i) & 65535) +
            65536 * (((t >>>= 16) * e) & 65535),
            r = t * i + ((r * i) >>> 16) + ((t * e) >>> 16);
          4294967296 <= o;
        )
          (o -= 4294967296), (r += 1);
        return new Ht(o >>> 0, r >>> 0);
      }
      function Dt(t) {
        for (var o = new Ht(0, 0), r = new Ht(0, 0), e = 0; e < t.length; e++) {
          if ("0" > t[e] || "9" < t[e]) return null;
          (r.lo = parseInt(t[e], 10)), (o = o.eb(10).add(r));
        }
        return o;
      }
      function Lt(t, o) {
        (this.lo = t), (this.hi = o);
      }
      function zt(t) {
        var o = 0 < t.length && "-" == t[0];
        return (
          o && (t = t.substring(1)),
          null === (t = Dt(t))
            ? null
            : (o && (t = new Ht(0, 0).sub(t)), new Lt(t.lo, t.hi))
        );
      }
      function Wt() {
        (this.c = []), (this.b = 0), (this.a = new Vt()), (this.h = []);
      }
      function Zt(t, o) {
        var r = t.a.end();
        t.c.push(r), t.c.push(o), (t.b += r.length + o.length);
      }
      function _t(t, o) {
        return (
          Jt(t, o, 2),
          (o = t.a.end()),
          t.c.push(o),
          (t.b += o.length),
          o.push(t.b),
          o
        );
      }
      function Gt(t, o) {
        var r = o.pop();
        for (v(0 <= (r = t.b + t.a.length() - r)); 127 < r; )
          o.push((127 & r) | 128), (r >>>= 7), t.b++;
        o.push(r), t.b++;
      }
      function Jt(t, o, r) {
        v(1 <= o && o == Math.floor(o)), t.a.j(8 * o + r);
      }
      function $t(t, o, r) {
        null != r && (Jt(t, o, 0), t.a.j(r));
      }
      function Kt(t, o, r) {
        null != r && (Jt(t, o, 0), t.a.M(r));
      }
      u("jspb.debug.dump", Rt.dump, void 0),
        (Rt.X = function (t) {
          var o = y(t);
          if (
            "number" == o ||
            "string" == o ||
            "boolean" == o ||
            "null" == o ||
            "undefined" == o ||
            ("undefined" != typeof Uint8Array && t instanceof Uint8Array)
          )
            return t;
          if ("array" == o)
            return (
              (function (t, o, r) {
                for (var e = [], i = 2; i < arguments.length; ++i)
                  e[i - 2] = arguments[i];
                Array.isArray(t) ||
                  b("Expected array but got %s: %s.", [y(t), t], o, e);
              })(t),
              d(t, Rt.X)
            );
          if (t instanceof x) {
            for (
              var r = {}, e = (t = t.entries()).next();
              !e.done;
              e = t.next()
            )
              r[e.value[0]] = Rt.X(e.value[1]);
            return r;
          }
          S(t, lt, "Only messages expected: " + t);
          var i = { $name: (o = t.constructor).name || o.displayName };
          for (a in o.prototype) {
            var n = /^get([A-Z]\w*)/.exec(a);
            if (n && "getExtension" != a && "getJsPbMessageId" != a) {
              var p = "has" + n[1];
              (t[p] && !t[p]()) || ((p = t[a]()), (i[Rt.$a(n[1])] = Rt.X(p)));
            }
          }
          if (t.extensionObject_)
            return (
              (i.$extensions =
                "Recursive dumping of extensions not supported in compiled code. Switch to uncompiled or dump extension object directly"),
              i
            );
          for (e in o.extensions)
            if (/^\d+$/.test(e)) {
              p = o.extensions[e];
              var a = t.getExtension(p);
              (n = void 0), (p = p.Ba);
              var s = [],
                h = 0;
              for (n in p) s[h++] = n;
              (n = s[0]),
                null != a &&
                  (r || (r = i.$extensions = {}), (r[Rt.$a(n)] = Rt.X(a)));
            }
          return i;
        }),
        (Rt.$a = function (t) {
          return t.replace(/^[A-Z]/, function (t) {
            return t.toLowerCase();
          });
        }),
        u("jspb.BinaryEncoder", Vt, void 0),
        (Vt.prototype.length = function () {
          return this.a.length;
        }),
        (Vt.prototype.length = Vt.prototype.length),
        (Vt.prototype.end = function () {
          var t = this.a;
          return (this.a = []), t;
        }),
        (Vt.prototype.end = Vt.prototype.end),
        (Vt.prototype.l = function (t, o) {
          for (
            v(t == Math.floor(t)),
              v(o == Math.floor(o)),
              v(0 <= t && 4294967296 > t),
              v(0 <= o && 4294967296 > o);
            0 < o || 127 < t;
          )
            this.a.push((127 & t) | 128),
              (t = ((t >>> 7) | (o << 25)) >>> 0),
              (o >>>= 7);
          this.a.push(t);
        }),
        (Vt.prototype.writeSplitVarint64 = Vt.prototype.l),
        (Vt.prototype.A = function (t, o) {
          v(t == Math.floor(t)),
            v(o == Math.floor(o)),
            v(0 <= t && 4294967296 > t),
            v(0 <= o && 4294967296 > o),
            this.s(t),
            this.s(o);
        }),
        (Vt.prototype.writeSplitFixed64 = Vt.prototype.A),
        (Vt.prototype.j = function (t) {
          for (v(t == Math.floor(t)), v(0 <= t && 4294967296 > t); 127 < t; )
            this.a.push((127 & t) | 128), (t >>>= 7);
          this.a.push(t);
        }),
        (Vt.prototype.writeUnsignedVarint32 = Vt.prototype.j),
        (Vt.prototype.M = function (t) {
          if (
            (v(t == Math.floor(t)),
            v(-2147483648 <= t && 2147483648 > t),
            0 <= t)
          )
            this.j(t);
          else {
            for (var o = 0; 9 > o; o++) this.a.push((127 & t) | 128), (t >>= 7);
            this.a.push(1);
          }
        }),
        (Vt.prototype.writeSignedVarint32 = Vt.prototype.M),
        (Vt.prototype.va = function (t) {
          v(t == Math.floor(t)),
            v(0 <= t && 0x10000000000000000 > t),
            H(t),
            this.l(T, R);
        }),
        (Vt.prototype.writeUnsignedVarint64 = Vt.prototype.va),
        (Vt.prototype.ua = function (t) {
          v(t == Math.floor(t)),
            v(-0x8000000000000000 <= t && 0x8000000000000000 > t),
            H(t),
            this.l(T, R);
        }),
        (Vt.prototype.writeSignedVarint64 = Vt.prototype.ua),
        (Vt.prototype.wa = function (t) {
          v(t == Math.floor(t)),
            v(-2147483648 <= t && 2147483648 > t),
            this.j(((t << 1) ^ (t >> 31)) >>> 0);
        }),
        (Vt.prototype.writeZigzagVarint32 = Vt.prototype.wa),
        (Vt.prototype.xa = function (t) {
          v(t == Math.floor(t)),
            v(-0x8000000000000000 <= t && 0x8000000000000000 > t),
            N(t),
            this.l(T, R);
        }),
        (Vt.prototype.writeZigzagVarint64 = Vt.prototype.xa),
        (Vt.prototype.Ta = function (t) {
          this.W(tt(t));
        }),
        (Vt.prototype.writeZigzagVarint64String = Vt.prototype.Ta),
        (Vt.prototype.W = function (t) {
          var o = this;
          z(t),
            _(T, R, function (t, r) {
              o.l(t >>> 0, r >>> 0);
            });
        }),
        (Vt.prototype.writeZigzagVarintHash64 = Vt.prototype.W),
        (Vt.prototype.be = function (t) {
          v(t == Math.floor(t)),
            v(0 <= t && 256 > t),
            this.a.push((t >>> 0) & 255);
        }),
        (Vt.prototype.writeUint8 = Vt.prototype.be),
        (Vt.prototype.ae = function (t) {
          v(t == Math.floor(t)),
            v(0 <= t && 65536 > t),
            this.a.push((t >>> 0) & 255),
            this.a.push((t >>> 8) & 255);
        }),
        (Vt.prototype.writeUint16 = Vt.prototype.ae),
        (Vt.prototype.s = function (t) {
          v(t == Math.floor(t)),
            v(0 <= t && 4294967296 > t),
            this.a.push((t >>> 0) & 255),
            this.a.push((t >>> 8) & 255),
            this.a.push((t >>> 16) & 255),
            this.a.push((t >>> 24) & 255);
        }),
        (Vt.prototype.writeUint32 = Vt.prototype.s),
        (Vt.prototype.V = function (t) {
          v(t == Math.floor(t)),
            v(0 <= t && 0x10000000000000000 > t),
            V(t),
            this.s(T),
            this.s(R);
        }),
        (Vt.prototype.writeUint64 = Vt.prototype.V),
        (Vt.prototype.Qc = function (t) {
          v(t == Math.floor(t)),
            v(-128 <= t && 128 > t),
            this.a.push((t >>> 0) & 255);
        }),
        (Vt.prototype.writeInt8 = Vt.prototype.Qc),
        (Vt.prototype.Pc = function (t) {
          v(t == Math.floor(t)),
            v(-32768 <= t && 32768 > t),
            this.a.push((t >>> 0) & 255),
            this.a.push((t >>> 8) & 255);
        }),
        (Vt.prototype.writeInt16 = Vt.prototype.Pc),
        (Vt.prototype.S = function (t) {
          v(t == Math.floor(t)),
            v(-2147483648 <= t && 2147483648 > t),
            this.a.push((t >>> 0) & 255),
            this.a.push((t >>> 8) & 255),
            this.a.push((t >>> 16) & 255),
            this.a.push((t >>> 24) & 255);
        }),
        (Vt.prototype.writeInt32 = Vt.prototype.S),
        (Vt.prototype.T = function (t) {
          v(t == Math.floor(t)),
            v(-0x8000000000000000 <= t && 0x8000000000000000 > t),
            H(t),
            this.A(T, R);
        }),
        (Vt.prototype.writeInt64 = Vt.prototype.T),
        (Vt.prototype.ka = function (t) {
          v(t == Math.floor(t)),
            v(-0x8000000000000000 <= +t && 0x8000000000000000 > +t),
            z(tt(t)),
            this.A(T, R);
        }),
        (Vt.prototype.writeInt64String = Vt.prototype.ka),
        (Vt.prototype.L = function (t) {
          v(
            1 / 0 === t ||
              -1 / 0 === t ||
              isNaN(t) ||
              (-34028234663852886e22 <= t && 34028234663852886e22 >= t),
          ),
            D(t),
            this.s(T);
        }),
        (Vt.prototype.writeFloat = Vt.prototype.L),
        (Vt.prototype.J = function (t) {
          v(
            1 / 0 === t ||
              -1 / 0 === t ||
              isNaN(t) ||
              (-17976931348623157e292 <= t && 17976931348623157e292 >= t),
          ),
            L(t),
            this.s(T),
            this.s(R);
        }),
        (Vt.prototype.writeDouble = Vt.prototype.J),
        (Vt.prototype.I = function (t) {
          v("boolean" == typeof t || "number" == typeof t),
            this.a.push(t ? 1 : 0);
        }),
        (Vt.prototype.writeBool = Vt.prototype.I),
        (Vt.prototype.R = function (t) {
          v(t == Math.floor(t)),
            v(-2147483648 <= t && 2147483648 > t),
            this.M(t);
        }),
        (Vt.prototype.writeEnum = Vt.prototype.R),
        (Vt.prototype.ja = function (t) {
          this.a.push.apply(this.a, t);
        }),
        (Vt.prototype.writeBytes = Vt.prototype.ja),
        (Vt.prototype.N = function (t) {
          z(t), this.l(T, R);
        }),
        (Vt.prototype.writeVarintHash64 = Vt.prototype.N),
        (Vt.prototype.K = function (t) {
          z(t), this.s(T), this.s(R);
        }),
        (Vt.prototype.writeFixedHash64 = Vt.prototype.K),
        (Vt.prototype.U = function (t) {
          var o = this.a.length;
          !(function (t, o, r) {
            for (var e = [], i = 2; i < arguments.length; ++i)
              e[i - 2] = arguments[i];
            "string" != typeof t &&
              b("Expected string but got %s: %s.", [y(t), t], o, e);
          })(t);
          for (var r = 0; r < t.length; r++) {
            var e = t.charCodeAt(r);
            if (128 > e) this.a.push(e);
            else if (2048 > e)
              this.a.push((e >> 6) | 192), this.a.push((63 & e) | 128);
            else if (65536 > e)
              if (55296 <= e && 56319 >= e && r + 1 < t.length) {
                var i = t.charCodeAt(r + 1);
                56320 <= i &&
                  57343 >= i &&
                  ((e = 1024 * (e - 55296) + i - 56320 + 65536),
                  this.a.push((e >> 18) | 240),
                  this.a.push(((e >> 12) & 63) | 128),
                  this.a.push(((e >> 6) & 63) | 128),
                  this.a.push((63 & e) | 128),
                  r++);
              } else
                this.a.push((e >> 12) | 224),
                  this.a.push(((e >> 6) & 63) | 128),
                  this.a.push((63 & e) | 128);
          }
          return this.a.length - o;
        }),
        (Vt.prototype.writeString = Vt.prototype.U),
        u("jspb.arith.UInt64", Ht, void 0),
        (Ht.prototype.cmp = function (t) {
          return this.hi < t.hi || (this.hi == t.hi && this.lo < t.lo)
            ? -1
            : this.hi == t.hi && this.lo == t.lo
              ? 0
              : 1;
        }),
        (Ht.prototype.cmp = Ht.prototype.cmp),
        (Ht.prototype.La = function () {
          return new Ht(
            ((this.lo >>> 1) | ((1 & this.hi) << 31)) >>> 0,
            (this.hi >>> 1) >>> 0,
          );
        }),
        (Ht.prototype.rightShift = Ht.prototype.La),
        (Ht.prototype.Da = function () {
          return new Ht(
            (this.lo << 1) >>> 0,
            ((this.hi << 1) | (this.lo >>> 31)) >>> 0,
          );
        }),
        (Ht.prototype.leftShift = Ht.prototype.Da),
        (Ht.prototype.cb = function () {
          return !!(2147483648 & this.hi);
        }),
        (Ht.prototype.msb = Ht.prototype.cb),
        (Ht.prototype.Ob = function () {
          return !!(1 & this.lo);
        }),
        (Ht.prototype.lsb = Ht.prototype.Ob),
        (Ht.prototype.Ua = function () {
          return 0 == this.lo && 0 == this.hi;
        }),
        (Ht.prototype.zero = Ht.prototype.Ua),
        (Ht.prototype.add = function (t) {
          return new Ht(
            (((this.lo + t.lo) & 4294967295) >>> 0) >>> 0,
            ((((this.hi + t.hi) & 4294967295) >>> 0) +
              (4294967296 <= this.lo + t.lo ? 1 : 0)) >>>
              0,
          );
        }),
        (Ht.prototype.add = Ht.prototype.add),
        (Ht.prototype.sub = function (t) {
          return new Ht(
            (((this.lo - t.lo) & 4294967295) >>> 0) >>> 0,
            ((((this.hi - t.hi) & 4294967295) >>> 0) -
              (0 > this.lo - t.lo ? 1 : 0)) >>>
              0,
          );
        }),
        (Ht.prototype.sub = Ht.prototype.sub),
        (Ht.mul32x32 = Nt),
        (Ht.prototype.eb = function (t) {
          var o = Nt(this.lo, t);
          return ((t = Nt(this.hi, t)).hi = t.lo), (t.lo = 0), o.add(t);
        }),
        (Ht.prototype.mul = Ht.prototype.eb),
        (Ht.prototype.Xa = function (t) {
          if (0 == t) return [];
          var o = new Ht(0, 0),
            r = new Ht(this.lo, this.hi);
          t = new Ht(t, 0);
          for (var e = new Ht(1, 0); !t.cb(); ) (t = t.Da()), (e = e.Da());
          for (; !e.Ua(); )
            0 >= t.cmp(r) && ((o = o.add(e)), (r = r.sub(t))),
              (t = t.La()),
              (e = e.La());
          return [o, r];
        }),
        (Ht.prototype.div = Ht.prototype.Xa),
        (Ht.prototype.toString = function () {
          for (var t = "", o = this; !o.Ua(); ) {
            var r = (o = o.Xa(10))[0];
            (t = o[1].lo + t), (o = r);
          }
          return "" == t && (t = "0"), t;
        }),
        (Ht.prototype.toString = Ht.prototype.toString),
        (Ht.fromString = Dt),
        (Ht.prototype.clone = function () {
          return new Ht(this.lo, this.hi);
        }),
        (Ht.prototype.clone = Ht.prototype.clone),
        u("jspb.arith.Int64", Lt, void 0),
        (Lt.prototype.add = function (t) {
          return new Lt(
            (((this.lo + t.lo) & 4294967295) >>> 0) >>> 0,
            ((((this.hi + t.hi) & 4294967295) >>> 0) +
              (4294967296 <= this.lo + t.lo ? 1 : 0)) >>>
              0,
          );
        }),
        (Lt.prototype.add = Lt.prototype.add),
        (Lt.prototype.sub = function (t) {
          return new Lt(
            (((this.lo - t.lo) & 4294967295) >>> 0) >>> 0,
            ((((this.hi - t.hi) & 4294967295) >>> 0) -
              (0 > this.lo - t.lo ? 1 : 0)) >>>
              0,
          );
        }),
        (Lt.prototype.sub = Lt.prototype.sub),
        (Lt.prototype.clone = function () {
          return new Lt(this.lo, this.hi);
        }),
        (Lt.prototype.clone = Lt.prototype.clone),
        (Lt.prototype.toString = function () {
          var t = !!(2147483648 & this.hi),
            o = new Ht(this.lo, this.hi);
          return t && (o = new Ht(0, 0).sub(o)), (t ? "-" : "") + o.toString();
        }),
        (Lt.prototype.toString = Lt.prototype.toString),
        (Lt.fromString = zt),
        u("jspb.BinaryWriter", Wt, void 0),
        (Wt.prototype.pb = function (t, o, r) {
          Zt(this, t.subarray(o, r));
        }),
        (Wt.prototype.writeSerializedMessage = Wt.prototype.pb),
        (Wt.prototype.Pb = function (t, o, r) {
          null != t && null != o && null != r && this.pb(t, o, r);
        }),
        (Wt.prototype.maybeWriteSerializedMessage = Wt.prototype.Pb),
        (Wt.prototype.reset = function () {
          (this.c = []), this.a.end(), (this.b = 0), (this.h = []);
        }),
        (Wt.prototype.reset = Wt.prototype.reset),
        (Wt.prototype.ab = function () {
          v(0 == this.h.length);
          for (
            var t = new Uint8Array(this.b + this.a.length()),
              o = this.c,
              r = o.length,
              e = 0,
              i = 0;
            i < r;
            i++
          ) {
            var n = o[i];
            t.set(n, e), (e += n.length);
          }
          return (
            (o = this.a.end()),
            t.set(o, e),
            v((e += o.length) == t.length),
            (this.c = [t]),
            t
          );
        }),
        (Wt.prototype.getResultBuffer = Wt.prototype.ab),
        (Wt.prototype.Kb = function (t) {
          return B(this.ab(), t);
        }),
        (Wt.prototype.getResultBase64String = Wt.prototype.Kb),
        (Wt.prototype.Va = function (t) {
          this.h.push(_t(this, t));
        }),
        (Wt.prototype.beginSubMessage = Wt.prototype.Va),
        (Wt.prototype.Ya = function () {
          v(0 <= this.h.length), Gt(this, this.h.pop());
        }),
        (Wt.prototype.endSubMessage = Wt.prototype.Ya),
        (Wt.prototype.Nc = function (t, o, r) {
          switch (t) {
            case 1:
              this.J(o, r);
              break;
            case 2:
              this.L(o, r);
              break;
            case 3:
              this.T(o, r);
              break;
            case 4:
              this.V(o, r);
              break;
            case 5:
              this.S(o, r);
              break;
            case 6:
              this.Qa(o, r);
              break;
            case 7:
              this.Pa(o, r);
              break;
            case 8:
              this.I(o, r);
              break;
            case 9:
              this.U(o, r);
              break;
            case 10:
              w("Group field type not supported in writeAny()");
              break;
            case 11:
              w("Message field type not supported in writeAny()");
              break;
            case 12:
              this.ja(o, r);
              break;
            case 13:
              this.s(o, r);
              break;
            case 14:
              this.R(o, r);
              break;
            case 15:
              this.Ra(o, r);
              break;
            case 16:
              this.Sa(o, r);
              break;
            case 17:
              this.rb(o, r);
              break;
            case 18:
              this.sb(o, r);
              break;
            case 30:
              this.K(o, r);
              break;
            case 31:
              this.N(o, r);
              break;
            default:
              w("Invalid field type in writeAny()");
          }
        }),
        (Wt.prototype.writeAny = Wt.prototype.Nc),
        (Wt.prototype.S = function (t, o) {
          null != o && (v(-2147483648 <= o && 2147483648 > o), Kt(this, t, o));
        }),
        (Wt.prototype.writeInt32 = Wt.prototype.S),
        (Wt.prototype.ob = function (t, o) {
          null != o &&
            (v(-2147483648 <= (o = parseInt(o, 10)) && 2147483648 > o),
            Kt(this, t, o));
        }),
        (Wt.prototype.writeInt32String = Wt.prototype.ob),
        (Wt.prototype.T = function (t, o) {
          null != o &&
            (v(-0x8000000000000000 <= o && 0x8000000000000000 > o),
            null != o && (Jt(this, t, 0), this.a.ua(o)));
        }),
        (Wt.prototype.writeInt64 = Wt.prototype.T),
        (Wt.prototype.ka = function (t, o) {
          null != o && ((o = zt(o)), Jt(this, t, 0), this.a.l(o.lo, o.hi));
        }),
        (Wt.prototype.writeInt64String = Wt.prototype.ka),
        (Wt.prototype.s = function (t, o) {
          null != o && (v(0 <= o && 4294967296 > o), $t(this, t, o));
        }),
        (Wt.prototype.writeUint32 = Wt.prototype.s),
        (Wt.prototype.ub = function (t, o) {
          null != o &&
            (v(0 <= (o = parseInt(o, 10)) && 4294967296 > o), $t(this, t, o));
        }),
        (Wt.prototype.writeUint32String = Wt.prototype.ub),
        (Wt.prototype.V = function (t, o) {
          null != o &&
            (v(0 <= o && 0x10000000000000000 > o),
            null != o && (Jt(this, t, 0), this.a.va(o)));
        }),
        (Wt.prototype.writeUint64 = Wt.prototype.V),
        (Wt.prototype.vb = function (t, o) {
          null != o && ((o = Dt(o)), Jt(this, t, 0), this.a.l(o.lo, o.hi));
        }),
        (Wt.prototype.writeUint64String = Wt.prototype.vb),
        (Wt.prototype.rb = function (t, o) {
          null != o &&
            (v(-2147483648 <= o && 2147483648 > o),
            null != o && (Jt(this, t, 0), this.a.wa(o)));
        }),
        (Wt.prototype.writeSint32 = Wt.prototype.rb),
        (Wt.prototype.sb = function (t, o) {
          null != o &&
            (v(-0x8000000000000000 <= o && 0x8000000000000000 > o),
            null != o && (Jt(this, t, 0), this.a.xa(o)));
        }),
        (Wt.prototype.writeSint64 = Wt.prototype.sb),
        (Wt.prototype.$d = function (t, o) {
          null != o && null != o && (Jt(this, t, 0), this.a.W(o));
        }),
        (Wt.prototype.writeSintHash64 = Wt.prototype.$d),
        (Wt.prototype.Zd = function (t, o) {
          null != o && null != o && (Jt(this, t, 0), this.a.Ta(o));
        }),
        (Wt.prototype.writeSint64String = Wt.prototype.Zd),
        (Wt.prototype.Pa = function (t, o) {
          null != o &&
            (v(0 <= o && 4294967296 > o), Jt(this, t, 5), this.a.s(o));
        }),
        (Wt.prototype.writeFixed32 = Wt.prototype.Pa),
        (Wt.prototype.Qa = function (t, o) {
          null != o &&
            (v(0 <= o && 0x10000000000000000 > o), Jt(this, t, 1), this.a.V(o));
        }),
        (Wt.prototype.writeFixed64 = Wt.prototype.Qa),
        (Wt.prototype.nb = function (t, o) {
          null != o && ((o = Dt(o)), Jt(this, t, 1), this.a.A(o.lo, o.hi));
        }),
        (Wt.prototype.writeFixed64String = Wt.prototype.nb),
        (Wt.prototype.Ra = function (t, o) {
          null != o &&
            (v(-2147483648 <= o && 2147483648 > o),
            Jt(this, t, 5),
            this.a.S(o));
        }),
        (Wt.prototype.writeSfixed32 = Wt.prototype.Ra),
        (Wt.prototype.Sa = function (t, o) {
          null != o &&
            (v(-0x8000000000000000 <= o && 0x8000000000000000 > o),
            Jt(this, t, 1),
            this.a.T(o));
        }),
        (Wt.prototype.writeSfixed64 = Wt.prototype.Sa),
        (Wt.prototype.qb = function (t, o) {
          null != o && ((o = zt(o)), Jt(this, t, 1), this.a.A(o.lo, o.hi));
        }),
        (Wt.prototype.writeSfixed64String = Wt.prototype.qb),
        (Wt.prototype.L = function (t, o) {
          null != o && (Jt(this, t, 5), this.a.L(o));
        }),
        (Wt.prototype.writeFloat = Wt.prototype.L),
        (Wt.prototype.J = function (t, o) {
          null != o && (Jt(this, t, 1), this.a.J(o));
        }),
        (Wt.prototype.writeDouble = Wt.prototype.J),
        (Wt.prototype.I = function (t, o) {
          null != o &&
            (v("boolean" == typeof o || "number" == typeof o),
            Jt(this, t, 0),
            this.a.I(o));
        }),
        (Wt.prototype.writeBool = Wt.prototype.I),
        (Wt.prototype.R = function (t, o) {
          null != o &&
            (v(-2147483648 <= o && 2147483648 > o),
            Jt(this, t, 0),
            this.a.M(o));
        }),
        (Wt.prototype.writeEnum = Wt.prototype.R),
        (Wt.prototype.U = function (t, o) {
          null != o && ((t = _t(this, t)), this.a.U(o), Gt(this, t));
        }),
        (Wt.prototype.writeString = Wt.prototype.U),
        (Wt.prototype.ja = function (t, o) {
          null != o &&
            ((o = it(o)), Jt(this, t, 2), this.a.j(o.length), Zt(this, o));
        }),
        (Wt.prototype.writeBytes = Wt.prototype.ja),
        (Wt.prototype.Rc = function (t, o, r) {
          null != o && ((t = _t(this, t)), r(o, this), Gt(this, t));
        }),
        (Wt.prototype.writeMessage = Wt.prototype.Rc),
        (Wt.prototype.Sc = function (t, o, r) {
          null != o &&
            (Jt(this, 1, 3),
            Jt(this, 2, 0),
            this.a.M(t),
            (t = _t(this, 3)),
            r(o, this),
            Gt(this, t),
            Jt(this, 1, 4));
        }),
        (Wt.prototype.writeMessageSet = Wt.prototype.Sc),
        (Wt.prototype.Oc = function (t, o, r) {
          null != o && (Jt(this, t, 3), r(o, this), Jt(this, t, 4));
        }),
        (Wt.prototype.writeGroup = Wt.prototype.Oc),
        (Wt.prototype.K = function (t, o) {
          null != o && (v(8 == o.length), Jt(this, t, 1), this.a.K(o));
        }),
        (Wt.prototype.writeFixedHash64 = Wt.prototype.K),
        (Wt.prototype.N = function (t, o) {
          null != o && (v(8 == o.length), Jt(this, t, 0), this.a.N(o));
        }),
        (Wt.prototype.writeVarintHash64 = Wt.prototype.N),
        (Wt.prototype.A = function (t, o, r) {
          Jt(this, t, 1), this.a.A(o, r);
        }),
        (Wt.prototype.writeSplitFixed64 = Wt.prototype.A),
        (Wt.prototype.l = function (t, o, r) {
          Jt(this, t, 0), this.a.l(o, r);
        }),
        (Wt.prototype.writeSplitVarint64 = Wt.prototype.l),
        (Wt.prototype.tb = function (t, o, r) {
          Jt(this, t, 0);
          var e = this.a;
          _(o, r, function (t, o) {
            e.l(t >>> 0, o >>> 0);
          });
        }),
        (Wt.prototype.writeSplitZigzagVarint64 = Wt.prototype.tb),
        (Wt.prototype.Ed = function (t, o) {
          if (null != o) for (var r = 0; r < o.length; r++) Kt(this, t, o[r]);
        }),
        (Wt.prototype.writeRepeatedInt32 = Wt.prototype.Ed),
        (Wt.prototype.Fd = function (t, o) {
          if (null != o) for (var r = 0; r < o.length; r++) this.ob(t, o[r]);
        }),
        (Wt.prototype.writeRepeatedInt32String = Wt.prototype.Fd),
        (Wt.prototype.Gd = function (t, o) {
          if (null != o)
            for (var r = 0; r < o.length; r++) {
              var e = o[r];
              null != e && (Jt(this, t, 0), this.a.ua(e));
            }
        }),
        (Wt.prototype.writeRepeatedInt64 = Wt.prototype.Gd),
        (Wt.prototype.Qd = function (t, o, r, e) {
          if (null != o)
            for (var i = 0; i < o.length; i++) this.A(t, r(o[i]), e(o[i]));
        }),
        (Wt.prototype.writeRepeatedSplitFixed64 = Wt.prototype.Qd),
        (Wt.prototype.Rd = function (t, o, r, e) {
          if (null != o)
            for (var i = 0; i < o.length; i++) this.l(t, r(o[i]), e(o[i]));
        }),
        (Wt.prototype.writeRepeatedSplitVarint64 = Wt.prototype.Rd),
        (Wt.prototype.Sd = function (t, o, r, e) {
          if (null != o)
            for (var i = 0; i < o.length; i++) this.tb(t, r(o[i]), e(o[i]));
        }),
        (Wt.prototype.writeRepeatedSplitZigzagVarint64 = Wt.prototype.Sd),
        (Wt.prototype.Hd = function (t, o) {
          if (null != o) for (var r = 0; r < o.length; r++) this.ka(t, o[r]);
        }),
        (Wt.prototype.writeRepeatedInt64String = Wt.prototype.Hd),
        (Wt.prototype.Ud = function (t, o) {
          if (null != o) for (var r = 0; r < o.length; r++) $t(this, t, o[r]);
        }),
        (Wt.prototype.writeRepeatedUint32 = Wt.prototype.Ud),
        (Wt.prototype.Vd = function (t, o) {
          if (null != o) for (var r = 0; r < o.length; r++) this.ub(t, o[r]);
        }),
        (Wt.prototype.writeRepeatedUint32String = Wt.prototype.Vd),
        (Wt.prototype.Wd = function (t, o) {
          if (null != o)
            for (var r = 0; r < o.length; r++) {
              var e = o[r];
              null != e && (Jt(this, t, 0), this.a.va(e));
            }
        }),
        (Wt.prototype.writeRepeatedUint64 = Wt.prototype.Wd),
        (Wt.prototype.Xd = function (t, o) {
          if (null != o) for (var r = 0; r < o.length; r++) this.vb(t, o[r]);
        }),
        (Wt.prototype.writeRepeatedUint64String = Wt.prototype.Xd),
        (Wt.prototype.Md = function (t, o) {
          if (null != o)
            for (var r = 0; r < o.length; r++) {
              var e = o[r];
              null != e && (Jt(this, t, 0), this.a.wa(e));
            }
        }),
        (Wt.prototype.writeRepeatedSint32 = Wt.prototype.Md),
        (Wt.prototype.Nd = function (t, o) {
          if (null != o)
            for (var r = 0; r < o.length; r++) {
              var e = o[r];
              null != e && (Jt(this, t, 0), this.a.xa(e));
            }
        }),
        (Wt.prototype.writeRepeatedSint64 = Wt.prototype.Nd),
        (Wt.prototype.Od = function (t, o) {
          if (null != o)
            for (var r = 0; r < o.length; r++) {
              var e = o[r];
              null != e && (Jt(this, t, 0), this.a.Ta(e));
            }
        }),
        (Wt.prototype.writeRepeatedSint64String = Wt.prototype.Od),
        (Wt.prototype.Pd = function (t, o) {
          if (null != o)
            for (var r = 0; r < o.length; r++) {
              var e = o[r];
              null != e && (Jt(this, t, 0), this.a.W(e));
            }
        }),
        (Wt.prototype.writeRepeatedSintHash64 = Wt.prototype.Pd),
        (Wt.prototype.yd = function (t, o) {
          if (null != o) for (var r = 0; r < o.length; r++) this.Pa(t, o[r]);
        }),
        (Wt.prototype.writeRepeatedFixed32 = Wt.prototype.yd),
        (Wt.prototype.zd = function (t, o) {
          if (null != o) for (var r = 0; r < o.length; r++) this.Qa(t, o[r]);
        }),
        (Wt.prototype.writeRepeatedFixed64 = Wt.prototype.zd),
        (Wt.prototype.Ad = function (t, o) {
          if (null != o) for (var r = 0; r < o.length; r++) this.nb(t, o[r]);
        }),
        (Wt.prototype.writeRepeatedFixed64String = Wt.prototype.Ad),
        (Wt.prototype.Jd = function (t, o) {
          if (null != o) for (var r = 0; r < o.length; r++) this.Ra(t, o[r]);
        }),
        (Wt.prototype.writeRepeatedSfixed32 = Wt.prototype.Jd),
        (Wt.prototype.Kd = function (t, o) {
          if (null != o) for (var r = 0; r < o.length; r++) this.Sa(t, o[r]);
        }),
        (Wt.prototype.writeRepeatedSfixed64 = Wt.prototype.Kd),
        (Wt.prototype.Ld = function (t, o) {
          if (null != o) for (var r = 0; r < o.length; r++) this.qb(t, o[r]);
        }),
        (Wt.prototype.writeRepeatedSfixed64String = Wt.prototype.Ld),
        (Wt.prototype.Cd = function (t, o) {
          if (null != o) for (var r = 0; r < o.length; r++) this.L(t, o[r]);
        }),
        (Wt.prototype.writeRepeatedFloat = Wt.prototype.Cd),
        (Wt.prototype.wd = function (t, o) {
          if (null != o) for (var r = 0; r < o.length; r++) this.J(t, o[r]);
        }),
        (Wt.prototype.writeRepeatedDouble = Wt.prototype.wd),
        (Wt.prototype.ud = function (t, o) {
          if (null != o) for (var r = 0; r < o.length; r++) this.I(t, o[r]);
        }),
        (Wt.prototype.writeRepeatedBool = Wt.prototype.ud),
        (Wt.prototype.xd = function (t, o) {
          if (null != o) for (var r = 0; r < o.length; r++) this.R(t, o[r]);
        }),
        (Wt.prototype.writeRepeatedEnum = Wt.prototype.xd),
        (Wt.prototype.Td = function (t, o) {
          if (null != o) for (var r = 0; r < o.length; r++) this.U(t, o[r]);
        }),
        (Wt.prototype.writeRepeatedString = Wt.prototype.Td),
        (Wt.prototype.vd = function (t, o) {
          if (null != o) for (var r = 0; r < o.length; r++) this.ja(t, o[r]);
        }),
        (Wt.prototype.writeRepeatedBytes = Wt.prototype.vd),
        (Wt.prototype.Id = function (t, o, r) {
          if (null != o)
            for (var e = 0; e < o.length; e++) {
              var i = _t(this, t);
              r(o[e], this), Gt(this, i);
            }
        }),
        (Wt.prototype.writeRepeatedMessage = Wt.prototype.Id),
        (Wt.prototype.Dd = function (t, o, r) {
          if (null != o)
            for (var e = 0; e < o.length; e++)
              Jt(this, t, 3), r(o[e], this), Jt(this, t, 4);
        }),
        (Wt.prototype.writeRepeatedGroup = Wt.prototype.Dd),
        (Wt.prototype.Bd = function (t, o) {
          if (null != o) for (var r = 0; r < o.length; r++) this.K(t, o[r]);
        }),
        (Wt.prototype.writeRepeatedFixedHash64 = Wt.prototype.Bd),
        (Wt.prototype.Yd = function (t, o) {
          if (null != o) for (var r = 0; r < o.length; r++) this.N(t, o[r]);
        }),
        (Wt.prototype.writeRepeatedVarintHash64 = Wt.prototype.Yd),
        (Wt.prototype.ad = function (t, o) {
          if (null != o && o.length) {
            t = _t(this, t);
            for (var r = 0; r < o.length; r++) this.a.M(o[r]);
            Gt(this, t);
          }
        }),
        (Wt.prototype.writePackedInt32 = Wt.prototype.ad),
        (Wt.prototype.bd = function (t, o) {
          if (null != o && o.length) {
            t = _t(this, t);
            for (var r = 0; r < o.length; r++) this.a.M(parseInt(o[r], 10));
            Gt(this, t);
          }
        }),
        (Wt.prototype.writePackedInt32String = Wt.prototype.bd),
        (Wt.prototype.cd = function (t, o) {
          if (null != o && o.length) {
            t = _t(this, t);
            for (var r = 0; r < o.length; r++) this.a.ua(o[r]);
            Gt(this, t);
          }
        }),
        (Wt.prototype.writePackedInt64 = Wt.prototype.cd),
        (Wt.prototype.md = function (t, o, r, e) {
          if (null != o) {
            t = _t(this, t);
            for (var i = 0; i < o.length; i++) this.a.A(r(o[i]), e(o[i]));
            Gt(this, t);
          }
        }),
        (Wt.prototype.writePackedSplitFixed64 = Wt.prototype.md),
        (Wt.prototype.nd = function (t, o, r, e) {
          if (null != o) {
            t = _t(this, t);
            for (var i = 0; i < o.length; i++) this.a.l(r(o[i]), e(o[i]));
            Gt(this, t);
          }
        }),
        (Wt.prototype.writePackedSplitVarint64 = Wt.prototype.nd),
        (Wt.prototype.od = function (t, o, r, e) {
          if (null != o) {
            t = _t(this, t);
            for (var i = this.a, n = 0; n < o.length; n++)
              _(r(o[n]), e(o[n]), function (t, o) {
                i.l(t >>> 0, o >>> 0);
              });
            Gt(this, t);
          }
        }),
        (Wt.prototype.writePackedSplitZigzagVarint64 = Wt.prototype.od),
        (Wt.prototype.dd = function (t, o) {
          if (null != o && o.length) {
            t = _t(this, t);
            for (var r = 0; r < o.length; r++) {
              var e = zt(o[r]);
              this.a.l(e.lo, e.hi);
            }
            Gt(this, t);
          }
        }),
        (Wt.prototype.writePackedInt64String = Wt.prototype.dd),
        (Wt.prototype.pd = function (t, o) {
          if (null != o && o.length) {
            t = _t(this, t);
            for (var r = 0; r < o.length; r++) this.a.j(o[r]);
            Gt(this, t);
          }
        }),
        (Wt.prototype.writePackedUint32 = Wt.prototype.pd),
        (Wt.prototype.qd = function (t, o) {
          if (null != o && o.length) {
            t = _t(this, t);
            for (var r = 0; r < o.length; r++) this.a.j(parseInt(o[r], 10));
            Gt(this, t);
          }
        }),
        (Wt.prototype.writePackedUint32String = Wt.prototype.qd),
        (Wt.prototype.rd = function (t, o) {
          if (null != o && o.length) {
            t = _t(this, t);
            for (var r = 0; r < o.length; r++) this.a.va(o[r]);
            Gt(this, t);
          }
        }),
        (Wt.prototype.writePackedUint64 = Wt.prototype.rd),
        (Wt.prototype.sd = function (t, o) {
          if (null != o && o.length) {
            t = _t(this, t);
            for (var r = 0; r < o.length; r++) {
              var e = Dt(o[r]);
              this.a.l(e.lo, e.hi);
            }
            Gt(this, t);
          }
        }),
        (Wt.prototype.writePackedUint64String = Wt.prototype.sd),
        (Wt.prototype.hd = function (t, o) {
          if (null != o && o.length) {
            t = _t(this, t);
            for (var r = 0; r < o.length; r++) this.a.wa(o[r]);
            Gt(this, t);
          }
        }),
        (Wt.prototype.writePackedSint32 = Wt.prototype.hd),
        (Wt.prototype.jd = function (t, o) {
          if (null != o && o.length) {
            t = _t(this, t);
            for (var r = 0; r < o.length; r++) this.a.xa(o[r]);
            Gt(this, t);
          }
        }),
        (Wt.prototype.writePackedSint64 = Wt.prototype.jd),
        (Wt.prototype.kd = function (t, o) {
          if (null != o && o.length) {
            t = _t(this, t);
            for (var r = 0; r < o.length; r++) this.a.W(tt(o[r]));
            Gt(this, t);
          }
        }),
        (Wt.prototype.writePackedSint64String = Wt.prototype.kd),
        (Wt.prototype.ld = function (t, o) {
          if (null != o && o.length) {
            t = _t(this, t);
            for (var r = 0; r < o.length; r++) this.a.W(o[r]);
            Gt(this, t);
          }
        }),
        (Wt.prototype.writePackedSintHash64 = Wt.prototype.ld),
        (Wt.prototype.Wc = function (t, o) {
          if (null != o && o.length)
            for (
              Jt(this, t, 2), this.a.j(4 * o.length), t = 0;
              t < o.length;
              t++
            )
              this.a.s(o[t]);
        }),
        (Wt.prototype.writePackedFixed32 = Wt.prototype.Wc),
        (Wt.prototype.Xc = function (t, o) {
          if (null != o && o.length)
            for (
              Jt(this, t, 2), this.a.j(8 * o.length), t = 0;
              t < o.length;
              t++
            )
              this.a.V(o[t]);
        }),
        (Wt.prototype.writePackedFixed64 = Wt.prototype.Xc),
        (Wt.prototype.Yc = function (t, o) {
          if (null != o && o.length)
            for (
              Jt(this, t, 2), this.a.j(8 * o.length), t = 0;
              t < o.length;
              t++
            ) {
              var r = Dt(o[t]);
              this.a.A(r.lo, r.hi);
            }
        }),
        (Wt.prototype.writePackedFixed64String = Wt.prototype.Yc),
        (Wt.prototype.ed = function (t, o) {
          if (null != o && o.length)
            for (
              Jt(this, t, 2), this.a.j(4 * o.length), t = 0;
              t < o.length;
              t++
            )
              this.a.S(o[t]);
        }),
        (Wt.prototype.writePackedSfixed32 = Wt.prototype.ed),
        (Wt.prototype.fd = function (t, o) {
          if (null != o && o.length)
            for (
              Jt(this, t, 2), this.a.j(8 * o.length), t = 0;
              t < o.length;
              t++
            )
              this.a.T(o[t]);
        }),
        (Wt.prototype.writePackedSfixed64 = Wt.prototype.fd),
        (Wt.prototype.gd = function (t, o) {
          if (null != o && o.length)
            for (
              Jt(this, t, 2), this.a.j(8 * o.length), t = 0;
              t < o.length;
              t++
            )
              this.a.ka(o[t]);
        }),
        (Wt.prototype.writePackedSfixed64String = Wt.prototype.gd),
        (Wt.prototype.$c = function (t, o) {
          if (null != o && o.length)
            for (
              Jt(this, t, 2), this.a.j(4 * o.length), t = 0;
              t < o.length;
              t++
            )
              this.a.L(o[t]);
        }),
        (Wt.prototype.writePackedFloat = Wt.prototype.$c),
        (Wt.prototype.Uc = function (t, o) {
          if (null != o && o.length)
            for (
              Jt(this, t, 2), this.a.j(8 * o.length), t = 0;
              t < o.length;
              t++
            )
              this.a.J(o[t]);
        }),
        (Wt.prototype.writePackedDouble = Wt.prototype.Uc),
        (Wt.prototype.Tc = function (t, o) {
          if (null != o && o.length)
            for (Jt(this, t, 2), this.a.j(o.length), t = 0; t < o.length; t++)
              this.a.I(o[t]);
        }),
        (Wt.prototype.writePackedBool = Wt.prototype.Tc),
        (Wt.prototype.Vc = function (t, o) {
          if (null != o && o.length) {
            t = _t(this, t);
            for (var r = 0; r < o.length; r++) this.a.R(o[r]);
            Gt(this, t);
          }
        }),
        (Wt.prototype.writePackedEnum = Wt.prototype.Vc),
        (Wt.prototype.Zc = function (t, o) {
          if (null != o && o.length)
            for (
              Jt(this, t, 2), this.a.j(8 * o.length), t = 0;
              t < o.length;
              t++
            )
              this.a.K(o[t]);
        }),
        (Wt.prototype.writePackedFixedHash64 = Wt.prototype.Zc),
        (Wt.prototype.td = function (t, o) {
          if (null != o && o.length) {
            t = _t(this, t);
            for (var r = 0; r < o.length; r++) this.a.N(o[r]);
            Gt(this, t);
          }
        }),
        (Wt.prototype.writePackedVarintHash64 = Wt.prototype.td),
        "object" == typeof o &&
          ((o.debug = Rt),
          (o.Map = x),
          (o.Message = lt),
          (o.BinaryReader = st),
          (o.BinaryWriter = Wt),
          (o.ExtensionFieldInfo = ft),
          (o.ExtensionFieldBinaryInfo = ct),
          (o.exportSymbol = function (t, o, r) {
            u(t, o, r);
          }),
          (o.inherits = function (t, o) {
            function r() {}
            (r.prototype = o.prototype),
              (t.prototype = new r()),
              (t.prototype.constructor = t);
          }),
          (o.object = {
            extend: function (t, o) {
              for (var r, e, i = 1; i < arguments.length; i++) {
                for (r in (e = arguments[i])) t[r] = e[r];
                for (var n = 0; n < c.length; n++)
                  (r = c[n]),
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              }
            },
          }),
          (o.typeOf = y));
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/libraries/libraries~56fe39318.js.map
