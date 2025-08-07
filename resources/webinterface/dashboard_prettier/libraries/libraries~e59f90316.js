var CLSTAMP = "9958488";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [908],
  {
    5471: (e, t, n) => {
      "use strict";
      n.d(t, { Ay: () => Dt });
      var r =
          "undefined" != typeof window &&
          "undefined" != typeof document &&
          "undefined" != typeof navigator,
        o = (function () {
          for (
            var e = ["Edge", "Trident", "Firefox"], t = 0;
            t < e.length;
            t += 1
          )
            if (r && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
          return 0;
        })();
      var i =
        r && window.Promise
          ? function (e) {
              var t = !1;
              return function () {
                t ||
                  ((t = !0),
                  window.Promise.resolve().then(function () {
                    (t = !1), e();
                  }));
              };
            }
          : function (e) {
              var t = !1;
              return function () {
                t ||
                  ((t = !0),
                  setTimeout(function () {
                    (t = !1), e();
                  }, o));
              };
            };
      function a(e) {
        return e && "[object Function]" === {}.toString.call(e);
      }
      function s(e, t) {
        if (1 !== e.nodeType) return [];
        var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
        return t ? n[t] : n;
      }
      function u(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host;
      }
      function c(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
          case "HTML":
          case "BODY":
            return e.ownerDocument.body;
          case "#document":
            return e.body;
        }
        var t = s(e),
          n = t.overflow,
          r = t.overflowX,
          o = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + o + r) ? e : c(u(e));
      }
      function f(e) {
        return e && e.referenceNode ? e.referenceNode : e;
      }
      var p = r && !(!window.MSInputMethodContext || !document.documentMode),
        l = r && /MSIE 10/.test(navigator.userAgent);
      function d(e) {
        return 11 === e ? p : 10 === e ? l : p || l;
      }
      function m(e) {
        if (!e) return document.documentElement;
        for (
          var t = d(10) ? document.body : null, n = e.offsetParent || null;
          n === t && e.nextElementSibling;
        )
          n = (e = e.nextElementSibling).offsetParent;
        var r = n && n.nodeName;
        return r && "BODY" !== r && "HTML" !== r
          ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) &&
            "static" === s(n, "position")
            ? m(n)
            : n
          : e
            ? e.ownerDocument.documentElement
            : document.documentElement;
      }
      function h(e) {
        return null !== e.parentNode ? h(e.parentNode) : e;
      }
      function v(e, t) {
        if (!(e && e.nodeType && t && t.nodeType))
          return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
          r = n ? e : t,
          o = n ? t : e,
          i = document.createRange();
        i.setStart(r, 0), i.setEnd(o, 0);
        var a,
          s,
          u = i.commonAncestorContainer;
        if ((e !== u && t !== u) || r.contains(o))
          return "BODY" === (s = (a = u).nodeName) ||
            ("HTML" !== s && m(a.firstElementChild) !== a)
            ? m(u)
            : u;
        var c = h(e);
        return c.host ? v(c.host, t) : v(e, h(t).host);
      }
      function y(e) {
        var t =
            "top" ===
            (arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "top")
              ? "scrollTop"
              : "scrollLeft",
          n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
          var r = e.ownerDocument.documentElement;
          return (e.ownerDocument.scrollingElement || r)[t];
        }
        return e[t];
      }
      function b(e, t) {
        var n = "x" === t ? "Left" : "Top",
          r = "Left" === n ? "Right" : "Bottom";
        return (
          parseFloat(e["border" + n + "Width"]) +
          parseFloat(e["border" + r + "Width"])
        );
      }
      function g(e, t, n, r) {
        return Math.max(
          t["offset" + e],
          t["scroll" + e],
          n["client" + e],
          n["offset" + e],
          n["scroll" + e],
          d(10)
            ? parseInt(n["offset" + e]) +
                parseInt(r["margin" + ("Height" === e ? "Top" : "Left")]) +
                parseInt(r["margin" + ("Height" === e ? "Bottom" : "Right")])
            : 0,
        );
      }
      function w(e) {
        var t = e.body,
          n = e.documentElement,
          r = d(10) && getComputedStyle(n);
        return { height: g("Height", t, n, r), width: g("Width", t, n, r) };
      }
      var E = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        O = function (e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        },
        x =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          };
      function T(e) {
        return x({}, e, { right: e.left + e.width, bottom: e.top + e.height });
      }
      function S(e) {
        var t = {};
        try {
          if (d(10)) {
            t = e.getBoundingClientRect();
            var n = y(e, "top"),
              r = y(e, "left");
            (t.top += n), (t.left += r), (t.bottom += n), (t.right += r);
          } else t = e.getBoundingClientRect();
        } catch (e) {}
        var o = {
            left: t.left,
            top: t.top,
            width: t.right - t.left,
            height: t.bottom - t.top,
          },
          i = "HTML" === e.nodeName ? w(e.ownerDocument) : {},
          a = i.width || e.clientWidth || o.width,
          u = i.height || e.clientHeight || o.height,
          c = e.offsetWidth - a,
          f = e.offsetHeight - u;
        if (c || f) {
          var p = s(e);
          (c -= b(p, "x")), (f -= b(p, "y")), (o.width -= c), (o.height -= f);
        }
        return T(o);
      }
      function A(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = d(10),
          o = "HTML" === t.nodeName,
          i = S(e),
          a = S(t),
          u = c(e),
          f = s(t),
          p = parseFloat(f.borderTopWidth),
          l = parseFloat(f.borderLeftWidth);
        n &&
          o &&
          ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
        var m = T({
          top: i.top - a.top - p,
          left: i.left - a.left - l,
          width: i.width,
          height: i.height,
        });
        if (((m.marginTop = 0), (m.marginLeft = 0), !r && o)) {
          var h = parseFloat(f.marginTop),
            v = parseFloat(f.marginLeft);
          (m.top -= p - h),
            (m.bottom -= p - h),
            (m.left -= l - v),
            (m.right -= l - v),
            (m.marginTop = h),
            (m.marginLeft = v);
        }
        return (
          (r && !n ? t.contains(u) : t === u && "BODY" !== u.nodeName) &&
            (m = (function (e, t) {
              var n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                r = y(t, "top"),
                o = y(t, "left"),
                i = n ? -1 : 1;
              return (
                (e.top += r * i),
                (e.bottom += r * i),
                (e.left += o * i),
                (e.right += o * i),
                e
              );
            })(m, t)),
          m
        );
      }
      function C(e) {
        var t = e.nodeName;
        if ("BODY" === t || "HTML" === t) return !1;
        if ("fixed" === s(e, "position")) return !0;
        var n = u(e);
        return !!n && C(n);
      }
      function k(e) {
        if (!e || !e.parentElement || d()) return document.documentElement;
        for (var t = e.parentElement; t && "none" === s(t, "transform"); )
          t = t.parentElement;
        return t || document.documentElement;
      }
      function _(e, t, n, r) {
        var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          i = { top: 0, left: 0 },
          a = o ? k(e) : v(e, f(t));
        if ("viewport" === r)
          i = (function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = e.ownerDocument.documentElement,
              r = A(e, n),
              o = Math.max(n.clientWidth, window.innerWidth || 0),
              i = Math.max(n.clientHeight, window.innerHeight || 0),
              a = t ? 0 : y(n),
              s = t ? 0 : y(n, "left");
            return T({
              top: a - r.top + r.marginTop,
              left: s - r.left + r.marginLeft,
              width: o,
              height: i,
            });
          })(a, o);
        else {
          var s = void 0;
          "scrollParent" === r
            ? "BODY" === (s = c(u(t))).nodeName &&
              (s = e.ownerDocument.documentElement)
            : (s = "window" === r ? e.ownerDocument.documentElement : r);
          var p = A(s, a, o);
          if ("HTML" !== s.nodeName || C(a)) i = p;
          else {
            var l = w(e.ownerDocument),
              d = l.height,
              m = l.width;
            (i.top += p.top - p.marginTop),
              (i.bottom = d + p.top),
              (i.left += p.left - p.marginLeft),
              (i.right = m + p.left);
          }
        }
        var h = "number" == typeof (n = n || 0);
        return (
          (i.left += h ? n : n.left || 0),
          (i.top += h ? n : n.top || 0),
          (i.right -= h ? n : n.right || 0),
          (i.bottom -= h ? n : n.bottom || 0),
          i
        );
      }
      function L(e, t, n, r, o) {
        var i =
          arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var a = _(n, r, i, o),
          s = {
            top: { width: a.width, height: t.top - a.top },
            right: { width: a.right - t.right, height: a.height },
            bottom: { width: a.width, height: a.bottom - t.bottom },
            left: { width: t.left - a.left, height: a.height },
          },
          u = Object.keys(s)
            .map(function (e) {
              return x({ key: e }, s[e], {
                area: ((t = s[e]), t.width * t.height),
              });
              var t;
            })
            .sort(function (e, t) {
              return t.area - e.area;
            }),
          c = u.filter(function (e) {
            var t = e.width,
              r = e.height;
            return t >= n.clientWidth && r >= n.clientHeight;
          }),
          f = c.length > 0 ? c[0].key : u[0].key,
          p = e.split("-")[1];
        return f + (p ? "-" + p : "");
      }
      function D(e, t, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        return A(n, r ? k(t) : v(t, f(n)), r);
      }
      function M(e) {
        var t = e.ownerDocument.defaultView.getComputedStyle(e),
          n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
          r = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return { width: e.offsetWidth + r, height: e.offsetHeight + n };
      }
      function P(e) {
        var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
        return e.replace(/left|right|bottom|top/g, function (e) {
          return t[e];
        });
      }
      function I(e, t, n) {
        n = n.split("-")[0];
        var r = M(e),
          o = { width: r.width, height: r.height },
          i = -1 !== ["right", "left"].indexOf(n),
          a = i ? "top" : "left",
          s = i ? "left" : "top",
          u = i ? "height" : "width",
          c = i ? "width" : "height";
        return (
          (o[a] = t[a] + t[u] / 2 - r[u] / 2),
          (o[s] = n === s ? t[s] - r[c] : t[P(s)]),
          o
        );
      }
      function N(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0];
      }
      function j(e, t, n) {
        return (
          (void 0 === n
            ? e
            : e.slice(
                0,
                (function (e, t, n) {
                  if (Array.prototype.findIndex)
                    return e.findIndex(function (e) {
                      return e[t] === n;
                    });
                  var r = N(e, function (e) {
                    return e[t] === n;
                  });
                  return e.indexOf(r);
                })(e, "name", n),
              )
          ).forEach(function (e) {
            e.function &&
              console.warn(
                "`modifier.function` is deprecated, use `modifier.fn`!",
              );
            var n = e.function || e.fn;
            e.enabled &&
              a(n) &&
              ((t.offsets.popper = T(t.offsets.popper)),
              (t.offsets.reference = T(t.offsets.reference)),
              (t = n(t, e)));
          }),
          t
        );
      }
      function R() {
        if (!this.state.isDestroyed) {
          var e = {
            instance: this,
            styles: {},
            arrowStyles: {},
            attributes: {},
            flipped: !1,
            offsets: {},
          };
          (e.offsets.reference = D(
            this.state,
            this.popper,
            this.reference,
            this.options.positionFixed,
          )),
            (e.placement = L(
              this.options.placement,
              e.offsets.reference,
              this.popper,
              this.reference,
              this.options.modifiers.flip.boundariesElement,
              this.options.modifiers.flip.padding,
            )),
            (e.originalPlacement = e.placement),
            (e.positionFixed = this.options.positionFixed),
            (e.offsets.popper = I(
              this.popper,
              e.offsets.reference,
              e.placement,
            )),
            (e.offsets.popper.position = this.options.positionFixed
              ? "fixed"
              : "absolute"),
            (e = j(this.modifiers, e)),
            this.state.isCreated
              ? this.options.onUpdate(e)
              : ((this.state.isCreated = !0), this.options.onCreate(e));
        }
      }
      function F(e, t) {
        return e.some(function (e) {
          var n = e.name;
          return e.enabled && n === t;
        });
      }
      function B(e) {
        for (
          var t = [!1, "ms", "Webkit", "Moz", "O"],
            n = e.charAt(0).toUpperCase() + e.slice(1),
            r = 0;
          r < t.length;
          r++
        ) {
          var o = t[r],
            i = o ? "" + o + n : e;
          if (void 0 !== document.body.style[i]) return i;
        }
        return null;
      }
      function U() {
        return (
          (this.state.isDestroyed = !0),
          F(this.modifiers, "applyStyle") &&
            (this.popper.removeAttribute("x-placement"),
            (this.popper.style.position = ""),
            (this.popper.style.top = ""),
            (this.popper.style.left = ""),
            (this.popper.style.right = ""),
            (this.popper.style.bottom = ""),
            (this.popper.style.willChange = ""),
            (this.popper.style[B("transform")] = "")),
          this.disableEventListeners(),
          this.options.removeOnDestroy &&
            this.popper.parentNode.removeChild(this.popper),
          this
        );
      }
      function H(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window;
      }
      function V(e, t, n, r) {
        var o = "BODY" === e.nodeName,
          i = o ? e.ownerDocument.defaultView : e;
        i.addEventListener(t, n, { passive: !0 }),
          o || V(c(i.parentNode), t, n, r),
          r.push(i);
      }
      function W(e, t, n, r) {
        (n.updateBound = r),
          H(e).addEventListener("resize", n.updateBound, { passive: !0 });
        var o = c(e);
        return (
          V(o, "scroll", n.updateBound, n.scrollParents),
          (n.scrollElement = o),
          (n.eventsEnabled = !0),
          n
        );
      }
      function q() {
        this.state.eventsEnabled ||
          (this.state = W(
            this.reference,
            this.options,
            this.state,
            this.scheduleUpdate,
          ));
      }
      function $() {
        var e, t;
        this.state.eventsEnabled &&
          (cancelAnimationFrame(this.scheduleUpdate),
          (this.state =
            ((e = this.reference),
            (t = this.state),
            H(e).removeEventListener("resize", t.updateBound),
            t.scrollParents.forEach(function (e) {
              e.removeEventListener("scroll", t.updateBound);
            }),
            (t.updateBound = null),
            (t.scrollParents = []),
            (t.scrollElement = null),
            (t.eventsEnabled = !1),
            t)));
      }
      function z(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
      }
      function Y(e, t) {
        Object.keys(t).forEach(function (n) {
          var r = "";
          -1 !==
            ["width", "height", "top", "right", "bottom", "left"].indexOf(n) &&
            z(t[n]) &&
            (r = "px"),
            (e.style[n] = t[n] + r);
        });
      }
      var K = r && /Firefox/i.test(navigator.userAgent);
      function G(e, t, n) {
        var r = N(e, function (e) {
            return e.name === t;
          }),
          o =
            !!r &&
            e.some(function (e) {
              return e.name === n && e.enabled && e.order < r.order;
            });
        if (!o) {
          var i = "`" + t + "`",
            a = "`" + n + "`";
          console.warn(
            a +
              " modifier is required by " +
              i +
              " modifier in order to work, be sure to include it before " +
              i +
              "!",
          );
        }
        return o;
      }
      var X = [
          "auto-start",
          "auto",
          "auto-end",
          "top-start",
          "top",
          "top-end",
          "right-start",
          "right",
          "right-end",
          "bottom-end",
          "bottom",
          "bottom-start",
          "left-end",
          "left",
          "left-start",
        ],
        J = X.slice(3);
      function Q(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = J.indexOf(e),
          r = J.slice(n + 1).concat(J.slice(0, n));
        return t ? r.reverse() : r;
      }
      var Z = "flip",
        ee = "clockwise",
        te = "counterclockwise";
      function ne(e, t, n, r) {
        var o = [0, 0],
          i = -1 !== ["right", "left"].indexOf(r),
          a = e.split(/(\+|\-)/).map(function (e) {
            return e.trim();
          }),
          s = a.indexOf(
            N(a, function (e) {
              return -1 !== e.search(/,|\s/);
            }),
          );
        a[s] &&
          -1 === a[s].indexOf(",") &&
          console.warn(
            "Offsets separated by white space(s) are deprecated, use a comma (,) instead.",
          );
        var u = /\s*,\s*|\s+/,
          c =
            -1 !== s
              ? [
                  a.slice(0, s).concat([a[s].split(u)[0]]),
                  [a[s].split(u)[1]].concat(a.slice(s + 1)),
                ]
              : [a];
        return (
          (c = c.map(function (e, r) {
            var o = (1 === r ? !i : i) ? "height" : "width",
              a = !1;
            return e
              .reduce(function (e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t)
                  ? ((e[e.length - 1] = t), (a = !0), e)
                  : a
                    ? ((e[e.length - 1] += t), (a = !1), e)
                    : e.concat(t);
              }, [])
              .map(function (e) {
                return (function (e, t, n, r) {
                  var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                    i = +o[1],
                    a = o[2];
                  if (!i) return e;
                  if (0 === a.indexOf("%")) {
                    return (T("%p" === a ? n : r)[t] / 100) * i;
                  }
                  if ("vh" === a || "vw" === a)
                    return (
                      (("vh" === a
                        ? Math.max(
                            document.documentElement.clientHeight,
                            window.innerHeight || 0,
                          )
                        : Math.max(
                            document.documentElement.clientWidth,
                            window.innerWidth || 0,
                          )) /
                        100) *
                      i
                    );
                  return i;
                })(e, o, t, n);
              });
          })),
          c.forEach(function (e, t) {
            e.forEach(function (n, r) {
              z(n) && (o[t] += n * ("-" === e[r - 1] ? -1 : 1));
            });
          }),
          o
        );
      }
      var re = {
          shift: {
            order: 100,
            enabled: !0,
            fn: function (e) {
              var t = e.placement,
                n = t.split("-")[0],
                r = t.split("-")[1];
              if (r) {
                var o = e.offsets,
                  i = o.reference,
                  a = o.popper,
                  s = -1 !== ["bottom", "top"].indexOf(n),
                  u = s ? "left" : "top",
                  c = s ? "width" : "height",
                  f = {
                    start: O({}, u, i[u]),
                    end: O({}, u, i[u] + i[c] - a[c]),
                  };
                e.offsets.popper = x({}, a, f[r]);
              }
              return e;
            },
          },
          offset: {
            order: 200,
            enabled: !0,
            fn: function (e, t) {
              var n = t.offset,
                r = e.placement,
                o = e.offsets,
                i = o.popper,
                a = o.reference,
                s = r.split("-")[0],
                u = void 0;
              return (
                (u = z(+n) ? [+n, 0] : ne(n, i, a, s)),
                "left" === s
                  ? ((i.top += u[0]), (i.left -= u[1]))
                  : "right" === s
                    ? ((i.top += u[0]), (i.left += u[1]))
                    : "top" === s
                      ? ((i.left += u[0]), (i.top -= u[1]))
                      : "bottom" === s && ((i.left += u[0]), (i.top += u[1])),
                (e.popper = i),
                e
              );
            },
            offset: 0,
          },
          preventOverflow: {
            order: 300,
            enabled: !0,
            fn: function (e, t) {
              var n = t.boundariesElement || m(e.instance.popper);
              e.instance.reference === n && (n = m(n));
              var r = B("transform"),
                o = e.instance.popper.style,
                i = o.top,
                a = o.left,
                s = o[r];
              (o.top = ""), (o.left = ""), (o[r] = "");
              var u = _(
                e.instance.popper,
                e.instance.reference,
                t.padding,
                n,
                e.positionFixed,
              );
              (o.top = i), (o.left = a), (o[r] = s), (t.boundaries = u);
              var c = t.priority,
                f = e.offsets.popper,
                p = {
                  primary: function (e) {
                    var n = f[e];
                    return (
                      f[e] < u[e] &&
                        !t.escapeWithReference &&
                        (n = Math.max(f[e], u[e])),
                      O({}, e, n)
                    );
                  },
                  secondary: function (e) {
                    var n = "right" === e ? "left" : "top",
                      r = f[n];
                    return (
                      f[e] > u[e] &&
                        !t.escapeWithReference &&
                        (r = Math.min(
                          f[n],
                          u[e] - ("right" === e ? f.width : f.height),
                        )),
                      O({}, n, r)
                    );
                  },
                };
              return (
                c.forEach(function (e) {
                  var t =
                    -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                  f = x({}, f, p[t](e));
                }),
                (e.offsets.popper = f),
                e
              );
            },
            priority: ["left", "right", "top", "bottom"],
            padding: 5,
            boundariesElement: "scrollParent",
          },
          keepTogether: {
            order: 400,
            enabled: !0,
            fn: function (e) {
              var t = e.offsets,
                n = t.popper,
                r = t.reference,
                o = e.placement.split("-")[0],
                i = Math.floor,
                a = -1 !== ["top", "bottom"].indexOf(o),
                s = a ? "right" : "bottom",
                u = a ? "left" : "top",
                c = a ? "width" : "height";
              return (
                n[s] < i(r[u]) && (e.offsets.popper[u] = i(r[u]) - n[c]),
                n[u] > i(r[s]) && (e.offsets.popper[u] = i(r[s])),
                e
              );
            },
          },
          arrow: {
            order: 500,
            enabled: !0,
            fn: function (e, t) {
              var n;
              if (!G(e.instance.modifiers, "arrow", "keepTogether")) return e;
              var r = t.element;
              if ("string" == typeof r) {
                if (!(r = e.instance.popper.querySelector(r))) return e;
              } else if (!e.instance.popper.contains(r))
                return (
                  console.warn(
                    "WARNING: `arrow.element` must be child of its popper element!",
                  ),
                  e
                );
              var o = e.placement.split("-")[0],
                i = e.offsets,
                a = i.popper,
                u = i.reference,
                c = -1 !== ["left", "right"].indexOf(o),
                f = c ? "height" : "width",
                p = c ? "Top" : "Left",
                l = p.toLowerCase(),
                d = c ? "left" : "top",
                m = c ? "bottom" : "right",
                h = M(r)[f];
              u[m] - h < a[l] && (e.offsets.popper[l] -= a[l] - (u[m] - h)),
                u[l] + h > a[m] && (e.offsets.popper[l] += u[l] + h - a[m]),
                (e.offsets.popper = T(e.offsets.popper));
              var v = u[l] + u[f] / 2 - h / 2,
                y = s(e.instance.popper),
                b = parseFloat(y["margin" + p]),
                g = parseFloat(y["border" + p + "Width"]),
                w = v - e.offsets.popper[l] - b - g;
              return (
                (w = Math.max(Math.min(a[f] - h, w), 0)),
                (e.arrowElement = r),
                (e.offsets.arrow =
                  (O((n = {}), l, Math.round(w)), O(n, d, ""), n)),
                e
              );
            },
            element: "[x-arrow]",
          },
          flip: {
            order: 600,
            enabled: !0,
            fn: function (e, t) {
              if (F(e.instance.modifiers, "inner")) return e;
              if (e.flipped && e.placement === e.originalPlacement) return e;
              var n = _(
                  e.instance.popper,
                  e.instance.reference,
                  t.padding,
                  t.boundariesElement,
                  e.positionFixed,
                ),
                r = e.placement.split("-")[0],
                o = P(r),
                i = e.placement.split("-")[1] || "",
                a = [];
              switch (t.behavior) {
                case Z:
                  a = [r, o];
                  break;
                case ee:
                  a = Q(r);
                  break;
                case te:
                  a = Q(r, !0);
                  break;
                default:
                  a = t.behavior;
              }
              return (
                a.forEach(function (s, u) {
                  if (r !== s || a.length === u + 1) return e;
                  (r = e.placement.split("-")[0]), (o = P(r));
                  var c = e.offsets.popper,
                    f = e.offsets.reference,
                    p = Math.floor,
                    l =
                      ("left" === r && p(c.right) > p(f.left)) ||
                      ("right" === r && p(c.left) < p(f.right)) ||
                      ("top" === r && p(c.bottom) > p(f.top)) ||
                      ("bottom" === r && p(c.top) < p(f.bottom)),
                    d = p(c.left) < p(n.left),
                    m = p(c.right) > p(n.right),
                    h = p(c.top) < p(n.top),
                    v = p(c.bottom) > p(n.bottom),
                    y =
                      ("left" === r && d) ||
                      ("right" === r && m) ||
                      ("top" === r && h) ||
                      ("bottom" === r && v),
                    b = -1 !== ["top", "bottom"].indexOf(r),
                    g =
                      !!t.flipVariations &&
                      ((b && "start" === i && d) ||
                        (b && "end" === i && m) ||
                        (!b && "start" === i && h) ||
                        (!b && "end" === i && v)),
                    w =
                      !!t.flipVariationsByContent &&
                      ((b && "start" === i && m) ||
                        (b && "end" === i && d) ||
                        (!b && "start" === i && v) ||
                        (!b && "end" === i && h)),
                    E = g || w;
                  (l || y || E) &&
                    ((e.flipped = !0),
                    (l || y) && (r = a[u + 1]),
                    E &&
                      (i = (function (e) {
                        return "end" === e
                          ? "start"
                          : "start" === e
                            ? "end"
                            : e;
                      })(i)),
                    (e.placement = r + (i ? "-" + i : "")),
                    (e.offsets.popper = x(
                      {},
                      e.offsets.popper,
                      I(e.instance.popper, e.offsets.reference, e.placement),
                    )),
                    (e = j(e.instance.modifiers, e, "flip")));
                }),
                e
              );
            },
            behavior: "flip",
            padding: 5,
            boundariesElement: "viewport",
            flipVariations: !1,
            flipVariationsByContent: !1,
          },
          inner: {
            order: 700,
            enabled: !1,
            fn: function (e) {
              var t = e.placement,
                n = t.split("-")[0],
                r = e.offsets,
                o = r.popper,
                i = r.reference,
                a = -1 !== ["left", "right"].indexOf(n),
                s = -1 === ["top", "left"].indexOf(n);
              return (
                (o[a ? "left" : "top"] =
                  i[n] - (s ? o[a ? "width" : "height"] : 0)),
                (e.placement = P(t)),
                (e.offsets.popper = T(o)),
                e
              );
            },
          },
          hide: {
            order: 800,
            enabled: !0,
            fn: function (e) {
              if (!G(e.instance.modifiers, "hide", "preventOverflow")) return e;
              var t = e.offsets.reference,
                n = N(e.instance.modifiers, function (e) {
                  return "preventOverflow" === e.name;
                }).boundaries;
              if (
                t.bottom < n.top ||
                t.left > n.right ||
                t.top > n.bottom ||
                t.right < n.left
              ) {
                if (!0 === e.hide) return e;
                (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
              } else {
                if (!1 === e.hide) return e;
                (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
              }
              return e;
            },
          },
          computeStyle: {
            order: 850,
            enabled: !0,
            fn: function (e, t) {
              var n = t.x,
                r = t.y,
                o = e.offsets.popper,
                i = N(e.instance.modifiers, function (e) {
                  return "applyStyle" === e.name;
                }).gpuAcceleration;
              void 0 !== i &&
                console.warn(
                  "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!",
                );
              var a = void 0 !== i ? i : t.gpuAcceleration,
                s = m(e.instance.popper),
                u = S(s),
                c = { position: o.position },
                f = (function (e, t) {
                  var n = e.offsets,
                    r = n.popper,
                    o = n.reference,
                    i = Math.round,
                    a = Math.floor,
                    s = function (e) {
                      return e;
                    },
                    u = i(o.width),
                    c = i(r.width),
                    f = -1 !== ["left", "right"].indexOf(e.placement),
                    p = -1 !== e.placement.indexOf("-"),
                    l = t ? (f || p || u % 2 == c % 2 ? i : a) : s,
                    d = t ? i : s;
                  return {
                    left: l(
                      u % 2 == 1 && c % 2 == 1 && !p && t ? r.left - 1 : r.left,
                    ),
                    top: d(r.top),
                    bottom: d(r.bottom),
                    right: l(r.right),
                  };
                })(e, window.devicePixelRatio < 2 || !K),
                p = "bottom" === n ? "top" : "bottom",
                l = "right" === r ? "left" : "right",
                d = B("transform"),
                h = void 0,
                v = void 0;
              if (
                ((v =
                  "bottom" === p
                    ? "HTML" === s.nodeName
                      ? -s.clientHeight + f.bottom
                      : -u.height + f.bottom
                    : f.top),
                (h =
                  "right" === l
                    ? "HTML" === s.nodeName
                      ? -s.clientWidth + f.right
                      : -u.width + f.right
                    : f.left),
                a && d)
              )
                (c[d] = "translate3d(" + h + "px, " + v + "px, 0)"),
                  (c[p] = 0),
                  (c[l] = 0),
                  (c.willChange = "transform");
              else {
                var y = "bottom" === p ? -1 : 1,
                  b = "right" === l ? -1 : 1;
                (c[p] = v * y), (c[l] = h * b), (c.willChange = p + ", " + l);
              }
              var g = { "x-placement": e.placement };
              return (
                (e.attributes = x({}, g, e.attributes)),
                (e.styles = x({}, c, e.styles)),
                (e.arrowStyles = x({}, e.offsets.arrow, e.arrowStyles)),
                e
              );
            },
            gpuAcceleration: !0,
            x: "bottom",
            y: "right",
          },
          applyStyle: {
            order: 900,
            enabled: !0,
            fn: function (e) {
              var t, n;
              return (
                Y(e.instance.popper, e.styles),
                (t = e.instance.popper),
                (n = e.attributes),
                Object.keys(n).forEach(function (e) {
                  !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e);
                }),
                e.arrowElement &&
                  Object.keys(e.arrowStyles).length &&
                  Y(e.arrowElement, e.arrowStyles),
                e
              );
            },
            onLoad: function (e, t, n, r, o) {
              var i = D(o, t, e, n.positionFixed),
                a = L(
                  n.placement,
                  i,
                  t,
                  e,
                  n.modifiers.flip.boundariesElement,
                  n.modifiers.flip.padding,
                );
              return (
                t.setAttribute("x-placement", a),
                Y(t, { position: n.positionFixed ? "fixed" : "absolute" }),
                n
              );
            },
            gpuAcceleration: void 0,
          },
        },
        oe = {
          placement: "bottom",
          positionFixed: !1,
          eventsEnabled: !0,
          removeOnDestroy: !1,
          onCreate: function () {},
          onUpdate: function () {},
          modifiers: re,
        },
        ie = (function () {
          function e(t, n) {
            var r = this,
              o =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.scheduleUpdate = function () {
                return requestAnimationFrame(r.update);
              }),
              (this.update = i(this.update.bind(this))),
              (this.options = x({}, e.Defaults, o)),
              (this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: [],
              }),
              (this.reference = t && t.jquery ? t[0] : t),
              (this.popper = n && n.jquery ? n[0] : n),
              (this.options.modifiers = {}),
              Object.keys(x({}, e.Defaults.modifiers, o.modifiers)).forEach(
                function (t) {
                  r.options.modifiers[t] = x(
                    {},
                    e.Defaults.modifiers[t] || {},
                    o.modifiers ? o.modifiers[t] : {},
                  );
                },
              ),
              (this.modifiers = Object.keys(this.options.modifiers)
                .map(function (e) {
                  return x({ name: e }, r.options.modifiers[e]);
                })
                .sort(function (e, t) {
                  return e.order - t.order;
                })),
              this.modifiers.forEach(function (e) {
                e.enabled &&
                  a(e.onLoad) &&
                  e.onLoad(r.reference, r.popper, r.options, e, r.state);
              }),
              this.update();
            var s = this.options.eventsEnabled;
            s && this.enableEventListeners(), (this.state.eventsEnabled = s);
          }
          return (
            E(e, [
              {
                key: "update",
                value: function () {
                  return R.call(this);
                },
              },
              {
                key: "destroy",
                value: function () {
                  return U.call(this);
                },
              },
              {
                key: "enableEventListeners",
                value: function () {
                  return q.call(this);
                },
              },
              {
                key: "disableEventListeners",
                value: function () {
                  return $.call(this);
                },
              },
            ]),
            e
          );
        })();
      (ie.Utils = ("undefined" != typeof window ? window : n.g).PopperUtils),
        (ie.placements = X),
        (ie.Defaults = oe);
      const ae = ie;
      function se() {
        return (
          (se =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          se.apply(this, arguments)
        );
      }
      var ue = "5.2.1";
      function ce(e, t) {
        e.innerHTML = t;
      }
      function fe(e) {
        return !(!e || !e._tippy || e._tippy.reference !== e);
      }
      function pe(e, t) {
        return {}.hasOwnProperty.call(e, t);
      }
      function le(e) {
        return ve(e)
          ? [e]
          : (function (e) {
                return he(e, "NodeList");
              })(e)
            ? Te(e)
            : Array.isArray(e)
              ? e
              : Te(document.querySelectorAll(e));
      }
      function de(e, t, n) {
        if (Array.isArray(e)) {
          var r = e[t];
          return null == r ? (Array.isArray(n) ? n[t] : n) : r;
        }
        return e;
      }
      function me(e, t) {
        return e && e.modifiers && e.modifiers[t];
      }
      function he(e, t) {
        var n = {}.toString.call(e);
        return 0 === n.indexOf("[object") && n.indexOf(t + "]") > -1;
      }
      function ve(e) {
        return he(e, "Element");
      }
      function ye(e, t) {
        return "function" == typeof e ? e.apply(void 0, t) : e;
      }
      function be(e, t, n, r) {
        e.filter(function (e) {
          return e.name === t;
        })[0][n] = r;
      }
      function ge() {
        return document.createElement("div");
      }
      function we(e, t) {
        e.forEach(function (e) {
          e && (e.style.transitionDuration = t + "ms");
        });
      }
      function Ee(e, t) {
        e.forEach(function (e) {
          e && e.setAttribute("data-state", t);
        });
      }
      function Oe(e, t) {
        return 0 === t
          ? e
          : function (r) {
              clearTimeout(n),
                (n = setTimeout(function () {
                  e(r);
                }, t));
            };
        var n;
      }
      function xe(e, t, n) {
        e && e !== t && e.apply(void 0, n);
      }
      function Te(e) {
        return [].slice.call(e);
      }
      function Se(e, t) {
        return e.indexOf(t) > -1;
      }
      function Ae(e) {
        return e.split(/\s+/).filter(Boolean);
      }
      function Ce(e, t) {
        return void 0 !== e ? e : t;
      }
      function ke(e) {
        return [].concat(e);
      }
      function _e(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function Le(e) {
        return "number" == typeof e ? e : parseFloat(e);
      }
      function De(e, t, n) {
        void 0 === t && (t = 5);
        var r = { top: 0, right: 0, bottom: 0, left: 0 };
        return Object.keys(r).reduce(function (r, o) {
          return (
            (r[o] = "number" == typeof t ? t : t[o]),
            e === o && (r[o] = "number" == typeof t ? t + n : t[e] + n),
            r
          );
        }, r);
      }
      var Me = se(
          {
            allowHTML: !0,
            animation: "fade",
            appendTo: function () {
              return document.body;
            },
            aria: "describedby",
            arrow: !0,
            boundary: "scrollParent",
            content: "",
            delay: 0,
            distance: 10,
            duration: [300, 250],
            flip: !0,
            flipBehavior: "flip",
            flipOnUpdate: !1,
            hideOnClick: !0,
            ignoreAttributes: !1,
            inertia: !1,
            interactive: !1,
            interactiveBorder: 2,
            interactiveDebounce: 0,
            lazy: !0,
            maxWidth: 350,
            multiple: !1,
            offset: 0,
            onAfterUpdate: function () {},
            onBeforeUpdate: function () {},
            onCreate: function () {},
            onDestroy: function () {},
            onHidden: function () {},
            onHide: function () {},
            onMount: function () {},
            onShow: function () {},
            onShown: function () {},
            onTrigger: function () {},
            onUntrigger: function () {},
            placement: "top",
            plugins: [],
            popperOptions: {},
            role: "tooltip",
            showOnCreate: !1,
            theme: "",
            touch: !0,
            trigger: "mouseenter focus",
            triggerTarget: null,
            updateDuration: 0,
            zIndex: 9999,
          },
          {
            animateFill: !1,
            followCursor: !1,
            inlinePositioning: !1,
            sticky: !1,
          },
        ),
        Pe = Object.keys(Me),
        Ie = [
          "arrow",
          "boundary",
          "distance",
          "flip",
          "flipBehavior",
          "flipOnUpdate",
          "offset",
          "placement",
          "popperOptions",
        ],
        Ne = function (e) {
          Object.keys(e).forEach(function (t) {
            Me[t] = e[t];
          });
        };
      function je(e) {
        var t = (e.plugins || []).reduce(function (t, n) {
          var r = n.name,
            o = n.defaultValue;
          return r && (t[r] = void 0 !== e[r] ? e[r] : o), t;
        }, {});
        return se({}, e, {}, t);
      }
      function Re(e, t) {
        var n = se(
          {},
          t,
          { content: ye(t.content, [e]) },
          t.ignoreAttributes
            ? {}
            : (function (e, t) {
                return (
                  t ? Object.keys(je(se({}, Me, { plugins: t }))) : Pe
                ).reduce(function (t, n) {
                  var r = (e.getAttribute("data-tippy-" + n) || "").trim();
                  if (!r) return t;
                  if ("content" === n) t[n] = r;
                  else
                    try {
                      t[n] = JSON.parse(r);
                    } catch (e) {
                      t[n] = r;
                    }
                  return t;
                }, {});
              })(e, t.plugins),
        );
        return n.interactive && (n.aria = null), n;
      }
      var Fe = { passive: !0 },
        Be = "tippy-popper",
        Ue = "tippy-tooltip",
        He = "tippy-content",
        Ve = "tippy-arrow",
        We = "tippy-svg-arrow",
        qe = "." + Be,
        $e = "." + Ue,
        ze = "." + He,
        Ye = "." + Ve,
        Ke = "." + We,
        Ge = { isTouch: !1 },
        Xe = 0;
      function Je() {
        Ge.isTouch ||
          ((Ge.isTouch = !0),
          window.performance && document.addEventListener("mousemove", Qe));
      }
      function Qe() {
        var e = performance.now();
        e - Xe < 20 &&
          ((Ge.isTouch = !1), document.removeEventListener("mousemove", Qe)),
          (Xe = e);
      }
      function Ze() {
        var e = document.activeElement;
        if (fe(e)) {
          var t = e._tippy;
          e.blur && !t.state.isVisible && e.blur();
        }
      }
      var et = "undefined" != typeof window && "undefined" != typeof document,
        tt = et ? navigator.userAgent : "",
        nt = /MSIE |Trident\//.test(tt),
        rt = et && /iPhone|iPad|iPod/.test(navigator.platform);
      function ot(e) {
        var t = e && rt && Ge.isTouch;
        document.body.classList[t ? "add" : "remove"]("tippy-iOS");
      }
      function it(e) {
        return e.split("-")[0];
      }
      function at(e) {
        e.setAttribute("data-inertia", "");
      }
      function st(e) {
        e.setAttribute("data-interactive", "");
      }
      function ut(e, t) {
        if (ve(t.content)) ce(e, ""), e.appendChild(t.content);
        else if ("function" != typeof t.content) {
          e[t.allowHTML ? "innerHTML" : "textContent"] = t.content;
        }
      }
      function ct(e) {
        return {
          tooltip: e.querySelector($e),
          content: e.querySelector(ze),
          arrow: e.querySelector(Ye) || e.querySelector(Ke),
        };
      }
      function ft(e) {
        var t = ge();
        return (
          !0 === e
            ? (t.className = Ve)
            : ((t.className = We), ve(e) ? t.appendChild(e) : ce(t, e)),
          t
        );
      }
      function pt(e, t) {
        var n = ge();
        (n.className = Be),
          (n.style.position = "absolute"),
          (n.style.top = "0"),
          (n.style.left = "0");
        var r = ge();
        (r.className = Ue),
          (r.id = "tippy-" + e),
          r.setAttribute("data-state", "hidden"),
          r.setAttribute("tabindex", "-1"),
          mt(r, "add", t.theme);
        var o = ge();
        return (
          (o.className = He),
          o.setAttribute("data-state", "hidden"),
          t.interactive && st(r),
          t.arrow &&
            (r.setAttribute("data-arrow", ""), r.appendChild(ft(t.arrow))),
          t.inertia && at(r),
          ut(o, t),
          r.appendChild(o),
          n.appendChild(r),
          lt(n, t, t),
          n
        );
      }
      function lt(e, t, n) {
        var r,
          o = ct(e),
          i = o.tooltip,
          a = o.content,
          s = o.arrow;
        (e.style.zIndex = "" + n.zIndex),
          i.setAttribute("data-animation", n.animation),
          (i.style.maxWidth =
            "number" == typeof (r = n.maxWidth) ? r + "px" : r),
          n.role ? i.setAttribute("role", n.role) : i.removeAttribute("role"),
          t.content !== n.content && ut(a, n),
          !t.arrow && n.arrow
            ? (i.appendChild(ft(n.arrow)), i.setAttribute("data-arrow", ""))
            : t.arrow && !n.arrow
              ? (i.removeChild(s), i.removeAttribute("data-arrow"))
              : t.arrow !== n.arrow &&
                (i.removeChild(s), i.appendChild(ft(n.arrow))),
          !t.interactive && n.interactive
            ? st(i)
            : t.interactive &&
              !n.interactive &&
              (function (e) {
                e.removeAttribute("data-interactive");
              })(i),
          !t.inertia && n.inertia
            ? at(i)
            : t.inertia &&
              !n.inertia &&
              (function (e) {
                e.removeAttribute("data-inertia");
              })(i),
          t.theme !== n.theme &&
            (mt(i, "remove", t.theme), mt(i, "add", n.theme));
      }
      function dt(e, t, n) {
        ["transitionend", "webkitTransitionEnd"].forEach(function (r) {
          e[t + "EventListener"](r, n);
        });
      }
      function mt(e, t, n) {
        Ae(n).forEach(function (n) {
          e.classList[t](n + "-theme");
        });
      }
      var ht = 1,
        vt = [],
        yt = [];
      function bt(e, t) {
        var n,
          r,
          o,
          i = Re(e, se({}, Me, {}, je(t)));
        if (!i.multiple && e._tippy) return null;
        var a,
          s,
          u,
          c,
          f,
          p,
          l,
          d = !1,
          m = !1,
          h = !1,
          v = 0,
          y = [],
          b = Oe(z, i.interactiveDebounce),
          g =
            ((f = i.triggerTarget || e),
            ((p = ke(f)[0]) && p.ownerDocument) || document),
          w = ht++,
          E = pt(w, i),
          O = ct(E),
          x = (l = i.plugins).filter(function (e, t) {
            return l.indexOf(e) === t;
          }),
          T = O.tooltip,
          S = O.content,
          A = [T, S],
          C = {
            id: w,
            reference: e,
            popper: E,
            popperChildren: O,
            popperInstance: null,
            props: i,
            state: {
              currentPlacement: null,
              isEnabled: !0,
              isVisible: !1,
              isDestroyed: !1,
              isMounted: !1,
              isShown: !1,
            },
            plugins: x,
            clearDelayTimeouts: function () {
              clearTimeout(n), clearTimeout(r), cancelAnimationFrame(o);
            },
            setProps: function (t) {
              0;
              if (C.state.isDestroyed) return;
              0;
              I("onBeforeUpdate", [C, t]), q();
              var n = C.props,
                r = Re(e, se({}, C.props, {}, t, { ignoreAttributes: !0 }));
              (r.ignoreAttributes = Ce(t.ignoreAttributes, n.ignoreAttributes)),
                (C.props = r),
                W(),
                n.interactiveDebounce !== r.interactiveDebounce &&
                  (R(), (b = Oe(z, r.interactiveDebounce)));
              lt(E, n, r),
                (C.popperChildren = ct(E)),
                n.triggerTarget && !r.triggerTarget
                  ? ke(n.triggerTarget).forEach(function (e) {
                      e.removeAttribute("aria-expanded");
                    })
                  : r.triggerTarget && e.removeAttribute("aria-expanded");
              if ((j(), C.popperInstance))
                if (
                  Ie.some(function (e) {
                    return pe(t, e) && t[e] !== n[e];
                  })
                ) {
                  var o = C.popperInstance.reference;
                  C.popperInstance.destroy(),
                    X(),
                    (C.popperInstance.reference = o),
                    C.state.isVisible &&
                      C.popperInstance.enableEventListeners();
                } else C.popperInstance.update();
              I("onAfterUpdate", [C, t]);
            },
            setContent: function (e) {
              C.setProps({ content: e });
            },
            show: function (e) {
              void 0 === e && (e = de(C.props.duration, 0, Me.duration));
              0;
              var t = C.state.isVisible,
                n = C.state.isDestroyed,
                r = !C.state.isEnabled,
                o = Ge.isTouch && !C.props.touch;
              if (t || n || r || o) return;
              if (M().hasAttribute("disabled")) return;
              C.popperInstance || X();
              if ((I("onShow", [C], !1), !1 === C.props.onShow(C))) return;
              B(),
                (E.style.visibility = "visible"),
                (C.state.isVisible = !0),
                C.state.isMounted || we(A.concat(E), 0);
              (s = function () {
                C.state.isVisible &&
                  (we([E], C.props.updateDuration),
                  we(A, e),
                  Ee(A, "visible"),
                  N(),
                  j(),
                  _e(yt, C),
                  ot(!0),
                  (C.state.isMounted = !0),
                  I("onMount", [C]),
                  (function (e, t) {
                    H(e, t);
                  })(e, function () {
                    (C.state.isShown = !0), I("onShown", [C]);
                  }));
              }),
                (function () {
                  v = 0;
                  var e,
                    t = C.props.appendTo,
                    n = M();
                  e =
                    (C.props.interactive && t === Me.appendTo) || "parent" === t
                      ? n.parentNode
                      : ye(t, [n]);
                  e.contains(E) || e.appendChild(E);
                  0;
                  be(
                    C.popperInstance.modifiers,
                    "flip",
                    "enabled",
                    C.props.flip,
                  ),
                    C.popperInstance.enableEventListeners(),
                    C.popperInstance.update();
                })();
            },
            hide: function (e) {
              void 0 === e && (e = de(C.props.duration, 1, Me.duration));
              0;
              var t = !C.state.isVisible && !d,
                n = C.state.isDestroyed,
                r = !C.state.isEnabled && !d;
              if (t || n || r) return;
              if ((I("onHide", [C], !1), !1 === C.props.onHide(C) && !d))
                return;
              U(),
                (E.style.visibility = "hidden"),
                (C.state.isVisible = !1),
                (C.state.isShown = !1),
                we(A, e),
                Ee(A, "hidden"),
                N(),
                j(),
                (function (e, t) {
                  H(e, function () {
                    !C.state.isVisible &&
                      E.parentNode &&
                      E.parentNode.contains(E) &&
                      t();
                  });
                })(e, function () {
                  C.popperInstance.disableEventListeners(),
                    (C.popperInstance.options.placement = C.props.placement),
                    E.parentNode.removeChild(E),
                    0 ===
                      (yt = yt.filter(function (e) {
                        return e !== C;
                      })).length && ot(!1),
                    (C.state.isMounted = !1),
                    I("onHidden", [C]);
                });
            },
            enable: function () {
              C.state.isEnabled = !0;
            },
            disable: function () {
              C.hide(), (C.state.isEnabled = !1);
            },
            destroy: function () {
              0;
              if (C.state.isDestroyed) return;
              (d = !0),
                C.clearDelayTimeouts(),
                C.hide(0),
                q(),
                delete e._tippy,
                C.popperInstance && C.popperInstance.destroy();
              (d = !1), (C.state.isDestroyed = !0), I("onDestroy", [C]);
            },
          };
        (e._tippy = C), (E._tippy = C);
        var k = x.map(function (e) {
            return e.fn(C);
          }),
          _ = e.hasAttribute("aria-expanded");
        return (
          W(),
          j(),
          i.lazy || X(),
          I("onCreate", [C]),
          i.showOnCreate && Q(),
          E.addEventListener("mouseenter", function () {
            C.props.interactive && C.state.isVisible && C.clearDelayTimeouts();
          }),
          E.addEventListener("mouseleave", function (e) {
            C.props.interactive &&
              Se(C.props.trigger, "mouseenter") &&
              (b(e), g.addEventListener("mousemove", b));
          }),
          C
        );
        function L() {
          var e = C.props.touch;
          return Array.isArray(e) ? e : [e, 0];
        }
        function D() {
          return "hold" === L()[0];
        }
        function M() {
          return c || e;
        }
        function P(e) {
          return (C.state.isMounted && !C.state.isVisible) ||
            Ge.isTouch ||
            (a && "focus" === a.type)
            ? 0
            : de(C.props.delay, e ? 0 : 1, Me.delay);
        }
        function I(e, t, n) {
          var r;
          (void 0 === n && (n = !0),
          k.forEach(function (n) {
            pe(n, e) && n[e].apply(n, t);
          }),
          n) && (r = C.props)[e].apply(r, t);
        }
        function N() {
          var t = C.props.aria;
          if (t) {
            var n = "aria-" + t,
              r = T.id;
            ke(C.props.triggerTarget || e).forEach(function (e) {
              var t = e.getAttribute(n);
              if (C.state.isVisible) e.setAttribute(n, t ? t + " " + r : r);
              else {
                var o = t && t.replace(r, "").trim();
                o ? e.setAttribute(n, o) : e.removeAttribute(n);
              }
            });
          }
        }
        function j() {
          _ ||
            ke(C.props.triggerTarget || e).forEach(function (e) {
              C.props.interactive
                ? e.setAttribute(
                    "aria-expanded",
                    C.state.isVisible && e === M() ? "true" : "false",
                  )
                : e.removeAttribute("aria-expanded");
            });
        }
        function R() {
          g.body.removeEventListener("mouseleave", Z),
            g.removeEventListener("mousemove", b),
            (vt = vt.filter(function (e) {
              return e !== b;
            }));
        }
        function F(e) {
          if (!C.props.interactive || !E.contains(e.target)) {
            if (M().contains(e.target)) {
              if (Ge.isTouch) return;
              if (C.state.isVisible && Se(C.props.trigger, "click")) return;
            }
            !0 === C.props.hideOnClick &&
              ((m = !1),
              C.clearDelayTimeouts(),
              C.hide(),
              (h = !0),
              setTimeout(function () {
                h = !1;
              }),
              C.state.isMounted || U());
          }
        }
        function B() {
          g.addEventListener("mousedown", F, !0);
        }
        function U() {
          g.removeEventListener("mousedown", F, !0);
        }
        function H(e, t) {
          function n(e) {
            e.target === T && (dt(T, "remove", n), t());
          }
          if (0 === e) return t();
          dt(T, "remove", u), dt(T, "add", n), (u = n);
        }
        function V(t, n, r) {
          void 0 === r && (r = !1),
            ke(C.props.triggerTarget || e).forEach(function (e) {
              e.addEventListener(t, n, r),
                y.push({ node: e, eventType: t, handler: n, options: r });
            });
        }
        function W() {
          D() && (V("touchstart", $, Fe), V("touchend", Y, Fe)),
            Ae(C.props.trigger).forEach(function (e) {
              if ("manual" !== e)
                switch ((V(e, $), e)) {
                  case "mouseenter":
                    V("mouseleave", Y);
                    break;
                  case "focus":
                    V(nt ? "focusout" : "blur", K);
                    break;
                  case "focusin":
                    V("focusout", K);
                }
            });
        }
        function q() {
          y.forEach(function (e) {
            var t = e.node,
              n = e.eventType,
              r = e.handler,
              o = e.options;
            t.removeEventListener(n, r, o);
          }),
            (y = []);
        }
        function $(e) {
          var t = !1;
          if (C.state.isEnabled && !G(e) && !h) {
            if (
              ((a = e),
              (c = e.currentTarget),
              j(),
              !C.state.isVisible &&
                (function (e) {
                  return he(e, "MouseEvent");
                })(e) &&
                vt.forEach(function (t) {
                  return t(e);
                }),
              "click" !== e.type ||
                (Se(C.props.trigger, "mouseenter") && !m) ||
                !1 === C.props.hideOnClick ||
                !C.state.isVisible)
            ) {
              var r = L(),
                o = r[0],
                i = r[1];
              Ge.isTouch && "hold" === o && i
                ? (n = setTimeout(function () {
                    Q(e);
                  }, i))
                : Q(e);
            } else t = !0;
            "click" === e.type && (m = !t), t && Z(e);
          }
        }
        function z(t) {
          var n = (function (e, t) {
            for (; e; ) {
              if (t(e)) return e;
              e = e.parentElement;
            }
            return null;
          })(t.target, function (t) {
            return t === e || t === E;
          });
          if ("mousemove" !== t.type || !n) {
            var r = Te(E.querySelectorAll(qe))
              .concat(E)
              .map(function (e) {
                var t = e._tippy,
                  n = t.popperChildren.tooltip,
                  r = t.props.interactiveBorder;
                return {
                  popperRect: e.getBoundingClientRect(),
                  tooltipRect: n.getBoundingClientRect(),
                  interactiveBorder: r,
                };
              });
            (function (e, t) {
              var n = t.clientX,
                r = t.clientY;
              return e.every(function (e) {
                var t = e.popperRect,
                  o = e.tooltipRect,
                  i = e.interactiveBorder,
                  a = Math.min(t.top, o.top),
                  s = Math.max(t.right, o.right),
                  u = Math.max(t.bottom, o.bottom),
                  c = Math.min(t.left, o.left);
                return a - r > i || r - u > i || c - n > i || n - s > i;
              });
            })(r, t) && (R(), Z(t));
          }
        }
        function Y(e) {
          if (!(G(e) || (Se(C.props.trigger, "click") && m)))
            return C.props.interactive
              ? (g.body.addEventListener("mouseleave", Z),
                g.addEventListener("mousemove", b),
                _e(vt, b),
                void b(e))
              : void Z(e);
        }
        function K(e) {
          (Se(C.props.trigger, "focusin") || e.target === M()) &&
            ((C.props.interactive &&
              e.relatedTarget &&
              E.contains(e.relatedTarget)) ||
              Z(e));
        }
        function G(e) {
          var t = "ontouchstart" in window,
            n = Se(e.type, "touch"),
            r = D();
          return (t && Ge.isTouch && r && !n) || (Ge.isTouch && !r && n);
        }
        function X() {
          var t,
            n = C.props.popperOptions,
            r = C.popperChildren.arrow,
            o = me(n, "flip"),
            i = me(n, "preventOverflow");
          function a(e) {
            var n = C.state.currentPlacement;
            (C.state.currentPlacement = e.placement),
              C.props.flip &&
                !C.props.flipOnUpdate &&
                (e.flipped &&
                  (C.popperInstance.options.placement = e.placement),
                be(C.popperInstance.modifiers, "flip", "enabled", !1)),
              T.setAttribute("data-placement", e.placement),
              !1 !== e.attributes["x-out-of-boundaries"]
                ? T.setAttribute("data-out-of-boundaries", "")
                : T.removeAttribute("data-out-of-boundaries");
            var r = it(e.placement),
              o = Se(["top", "bottom"], r),
              i = Se(["bottom", "right"], r);
            (T.style.top = "0"),
              (T.style.left = "0"),
              (T.style[o ? "top" : "left"] = (i ? 1 : -1) * t + "px"),
              n && n !== e.placement && C.popperInstance.update();
          }
          var s = se({ eventsEnabled: !1, placement: C.props.placement }, n, {
            modifiers: se({}, n && n.modifiers, {
              tippyDistance: {
                enabled: !0,
                order: 0,
                fn: function (e) {
                  t = (function (e, t) {
                    var n = "string" == typeof t && Se(t, "rem"),
                      r = e.documentElement;
                    return r && n
                      ? parseFloat(getComputedStyle(r).fontSize || String(16)) *
                          Le(t)
                      : Le(t);
                  })(g, C.props.distance);
                  var n = it(e.placement),
                    r = De(n, i && i.padding, t),
                    a = De(n, o && o.padding, t),
                    s = C.popperInstance.modifiers;
                  return (
                    be(s, "preventOverflow", "padding", r),
                    be(s, "flip", "padding", a),
                    e
                  );
                },
              },
              preventOverflow: se({ boundariesElement: C.props.boundary }, i),
              flip: se(
                { enabled: C.props.flip, behavior: C.props.flipBehavior },
                o,
              ),
              arrow: se({ element: r, enabled: !!r }, me(n, "arrow")),
              offset: se({ offset: C.props.offset }, me(n, "offset")),
            }),
            onCreate: function (e) {
              a(e), xe(n && n.onCreate, s.onCreate, [e]), J();
            },
            onUpdate: function (e) {
              a(e), xe(n && n.onUpdate, s.onUpdate, [e]), J();
            },
          });
          C.popperInstance = new ae(e, E, s);
        }
        function J() {
          0 === v
            ? (v++, C.popperInstance.update())
            : s &&
              1 === v &&
              (v++,
              (function (e) {
                e.offsetHeight;
              })(E),
              s());
        }
        function Q(e) {
          C.clearDelayTimeouts(),
            C.popperInstance || X(),
            e && I("onTrigger", [C, e]),
            B();
          var t = P(!0);
          t
            ? (n = setTimeout(function () {
                C.show();
              }, t))
            : C.show();
        }
        function Z(e) {
          if (
            (C.clearDelayTimeouts(),
            I("onUntrigger", [C, e]),
            C.state.isVisible)
          ) {
            if (
              !(
                Se(C.props.trigger, "mouseenter") &&
                Se(C.props.trigger, "click") &&
                Se(["mouseleave", "mousemove"], e.type) &&
                m
              )
            ) {
              var t = P(!1);
              t
                ? (r = setTimeout(function () {
                    C.state.isVisible && C.hide();
                  }, t))
                : (o = requestAnimationFrame(function () {
                    C.hide();
                  }));
            }
          } else U();
        }
      }
      function gt(e, t, n) {
        void 0 === t && (t = {}),
          void 0 === n && (n = []),
          (n = Me.plugins.concat(t.plugins || n)),
          document.addEventListener(
            "touchstart",
            Je,
            se({}, Fe, { capture: !0 }),
          ),
          window.addEventListener("blur", Ze);
        var r = se({}, t, { plugins: n }),
          o = le(e).reduce(function (e, t) {
            var n = t && bt(t, r);
            return n && e.push(n), e;
          }, []);
        return ve(e) ? o[0] : o;
      }
      (gt.version = ue),
        (gt.defaultProps = Me),
        (gt.setDefaultProps = Ne),
        (gt.currentInput = Ge);
      var wt = n(6540),
        Et = n(961);
      function Ot() {
        return (
          (Ot =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          Ot.apply(this, arguments)
        );
      }
      function xt(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      }
      var Tt = "undefined" != typeof window && "undefined" != typeof document;
      function St(e, t) {
        e &&
          ("function" == typeof e && e(t),
          {}.hasOwnProperty.call(e, "current") && (e.current = t));
      }
      function At(e, t, n) {
        n.split(/\s+/).forEach(function (n) {
          n && e.classList[t](n);
        });
      }
      var Ct = Tt ? wt.useLayoutEffect : wt.useEffect;
      function kt(e, t, n) {
        Ct(function () {
          var n = e.instance.popperChildren.tooltip;
          if (t)
            return (
              At(n, "add", t),
              function () {
                At(n, "remove", t);
              }
            );
        }, [t].concat(n));
      }
      function _t(e) {
        var t = (0, wt.useRef)();
        return (
          t.current || (t.current = "function" == typeof e ? e() : e), t.current
        );
      }
      function Lt(e) {
        var t = e.children,
          n = e.content,
          r = e.className,
          o = e.visible,
          i = e.singleton,
          a = e.enabled,
          s = void 0 === a || a,
          u = e.multiple,
          c = void 0 === u || u,
          f = e.ignoreAttributes,
          p = void 0 === f || f,
          l =
            (e.__source,
            e.__self,
            xt(e, [
              "children",
              "content",
              "className",
              "visible",
              "singleton",
              "enabled",
              "multiple",
              "ignoreAttributes",
              "__source",
              "__self",
            ])),
          d = void 0 !== o,
          m = void 0 !== i,
          h = (0, wt.useState)(!1),
          v = h[0],
          y = h[1],
          b = _t(function () {
            return {
              container: Tt && document.createElement("div"),
              renders: 1,
            };
          }),
          g = Ot({ ignoreAttributes: p, multiple: c }, l, {
            content: b.container,
          });
        d && (g.trigger = "manual"), m && (s = !1);
        var w = [t.type];
        return (
          Ct(function () {
            var e = gt(b.ref, g);
            return (
              (b.instance = e),
              s || e.disable(),
              o && e.show(),
              m && i(e),
              y(!0),
              function () {
                e.destroy();
              }
            );
          }, w),
          Ct(function () {
            if (1 !== b.renders) {
              var e = b.instance;
              e.setProps(g),
                s ? e.enable() : e.disable(),
                d && (o ? e.show() : e.hide());
            } else b.renders++;
          }),
          kt(b, r, w),
          wt.createElement(
            wt.Fragment,
            null,
            (0, wt.cloneElement)(t, {
              ref: function (e) {
                (b.ref = e), St(t.ref, e);
              },
            }),
            v && (0, Et.createPortal)(n, b.container),
          )
        );
      }
      const Dt = (0, wt.forwardRef)(function (e, t) {
        var n = e.children,
          r = xt(e, ["children"]);
        return wt.createElement(
          Lt,
          r,
          (0, wt.cloneElement)(n, {
            ref: function (e) {
              St(t, e), St(n.ref, e);
            },
          }),
        );
      });
    },
    7750: () => {},
    2694: (e, t, n) => {
      "use strict";
      var r = n(6925);
      function o() {}
      function i() {}
      (i.resetWarningCache = o),
        (e.exports = function () {
          function e(e, t, n, o, i, a) {
            if (a !== r) {
              var s = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
              );
              throw ((s.name = "Invariant Violation"), s);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: i,
            resetWarningCache: o,
          };
          return (n.PropTypes = n), n;
        });
    },
    5556: (e, t, n) => {
      e.exports = n(2694)();
    },
    6925: (e) => {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    3068: (e) => {
      var t = 0;
      e.exports = {
        resetUniqueIds: function () {
          t = 0;
        },
        enableUniqueIds: function (e) {
          var n;
          arguments.length > 1 &&
            "string" != typeof (n = arguments[1]) &&
            (console.log(
              "Warning: Expected string as second argument passed to `injectUniqueness`",
            ),
            (n = "" + n));
          var r = e.render,
            o = {},
            i = 0,
            a = n || ++t;
          (e.render = function () {
            return (i = 0), r.apply(e);
          }),
            (e.nextUniqueId = function () {
              return ++i, "id-" + a + "-" + i;
            }),
            (e.lastUniqueId = function () {
              return "id-" + a + "-" + i;
            }),
            (e.getUniqueId = function (e) {
              return (
                "string" != typeof e &&
                  (console.log(
                    "Warning: Expected string identifer passed to `getUniqueId`",
                  ),
                  (e = "" + e)),
                o[e] || (o[e] = "id-" + a + "-" + e),
                o[e]
              );
            });
        },
      };
    },
    5287: (e, t) => {
      "use strict";
      var n = Symbol.for("react.element"),
        r = Symbol.for("react.portal"),
        o = Symbol.for("react.fragment"),
        i = Symbol.for("react.strict_mode"),
        a = Symbol.for("react.profiler"),
        s = Symbol.for("react.provider"),
        u = Symbol.for("react.context"),
        c = Symbol.for("react.forward_ref"),
        f = Symbol.for("react.suspense"),
        p = Symbol.for("react.memo"),
        l = Symbol.for("react.lazy"),
        d = Symbol.iterator;
      var m = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        h = Object.assign,
        v = {};
      function y(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = v),
          (this.updater = n || m);
      }
      function b() {}
      function g(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = v),
          (this.updater = n || m);
      }
      (y.prototype.isReactComponent = {}),
        (y.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
            );
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (y.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (b.prototype = y.prototype);
      var w = (g.prototype = new b());
      (w.constructor = g), h(w, y.prototype), (w.isPureReactComponent = !0);
      var E = Array.isArray,
        O = Object.prototype.hasOwnProperty,
        x = { current: null },
        T = { key: !0, ref: !0, __self: !0, __source: !0 };
      function S(e, t, r) {
        var o,
          i = {},
          a = null,
          s = null;
        if (null != t)
          for (o in (void 0 !== t.ref && (s = t.ref),
          void 0 !== t.key && (a = "" + t.key),
          t))
            O.call(t, o) && !T.hasOwnProperty(o) && (i[o] = t[o]);
        var u = arguments.length - 2;
        if (1 === u) i.children = r;
        else if (1 < u) {
          for (var c = Array(u), f = 0; f < u; f++) c[f] = arguments[f + 2];
          i.children = c;
        }
        if (e && e.defaultProps)
          for (o in (u = e.defaultProps)) void 0 === i[o] && (i[o] = u[o]);
        return {
          $$typeof: n,
          type: e,
          key: a,
          ref: s,
          props: i,
          _owner: x.current,
        };
      }
      function A(e) {
        return "object" == typeof e && null !== e && e.$$typeof === n;
      }
      var C = /\/+/g;
      function k(e, t) {
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
      function _(e, t, o, i, a) {
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
            (e = "" === i ? "." + k(u, 0) : i),
            E(a)
              ? ((o = ""),
                null != e && (o = e.replace(C, "$&/") + "/"),
                _(a, t, o, "", function (e) {
                  return e;
                }))
              : null != a &&
                (A(a) &&
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
                        : ("" + a.key).replace(C, "$&/") + "/") +
                      e,
                  )),
                t.push(a)),
            1
          );
        if (((u = 0), (i = "" === i ? "." : i + ":"), E(e)))
          for (var c = 0; c < e.length; c++) {
            var f = i + k((s = e[c]), c);
            u += _(s, t, o, f, a);
          }
        else if (
          ((f = (function (e) {
            return null === e || "object" != typeof e
              ? null
              : "function" == typeof (e = (d && e[d]) || e["@@iterator"])
                ? e
                : null;
          })(e)),
          "function" == typeof f)
        )
          for (e = f.call(e), c = 0; !(s = e.next()).done; )
            u += _((s = s.value), t, o, (f = i + k(s, c++)), a);
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
      function L(e, t, n) {
        if (null == e) return e;
        var r = [],
          o = 0;
        return (
          _(e, r, "", "", function (e) {
            return t.call(n, e, o++);
          }),
          r
        );
      }
      function D(e) {
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
      var M = { current: null },
        P = { transition: null },
        I = {
          ReactCurrentDispatcher: M,
          ReactCurrentBatchConfig: P,
          ReactCurrentOwner: x,
        };
      function N() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      (t.Children = {
        map: L,
        forEach: function (e, t, n) {
          L(
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
            L(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            L(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!A(e))
            throw Error(
              "React.Children.only expected to receive a single React element child.",
            );
          return e;
        },
      }),
        (t.Component = y),
        (t.Fragment = o),
        (t.Profiler = a),
        (t.PureComponent = g),
        (t.StrictMode = i),
        (t.Suspense = f),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I),
        (t.act = N),
        (t.cloneElement = function (e, t, r) {
          if (null == e)
            throw Error(
              "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                ".",
            );
          var o = h({}, e.props),
            i = e.key,
            a = e.ref,
            s = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((a = t.ref), (s = x.current)),
              void 0 !== t.key && (i = "" + t.key),
              e.type && e.type.defaultProps)
            )
              var u = e.type.defaultProps;
            for (c in t)
              O.call(t, c) &&
                !T.hasOwnProperty(c) &&
                (o[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c]);
          }
          var c = arguments.length - 2;
          if (1 === c) o.children = r;
          else if (1 < c) {
            u = Array(c);
            for (var f = 0; f < c; f++) u[f] = arguments[f + 2];
            o.children = u;
          }
          return {
            $$typeof: n,
            type: e.type,
            key: i,
            ref: a,
            props: o,
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
        (t.createElement = S),
        (t.createFactory = function (e) {
          var t = S.bind(null, e);
          return (t.type = e), t;
        }),
        (t.createRef = function () {
          return { current: null };
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: c, render: e };
        }),
        (t.isValidElement = A),
        (t.lazy = function (e) {
          return {
            $$typeof: l,
            _payload: { _status: -1, _result: e },
            _init: D,
          };
        }),
        (t.memo = function (e, t) {
          return { $$typeof: p, type: e, compare: void 0 === t ? null : t };
        }),
        (t.startTransition = function (e) {
          var t = P.transition;
          P.transition = {};
          try {
            e();
          } finally {
            P.transition = t;
          }
        }),
        (t.unstable_act = N),
        (t.useCallback = function (e, t) {
          return M.current.useCallback(e, t);
        }),
        (t.useContext = function (e) {
          return M.current.useContext(e);
        }),
        (t.useDebugValue = function () {}),
        (t.useDeferredValue = function (e) {
          return M.current.useDeferredValue(e);
        }),
        (t.useEffect = function (e, t) {
          return M.current.useEffect(e, t);
        }),
        (t.useId = function () {
          return M.current.useId();
        }),
        (t.useImperativeHandle = function (e, t, n) {
          return M.current.useImperativeHandle(e, t, n);
        }),
        (t.useInsertionEffect = function (e, t) {
          return M.current.useInsertionEffect(e, t);
        }),
        (t.useLayoutEffect = function (e, t) {
          return M.current.useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return M.current.useMemo(e, t);
        }),
        (t.useReducer = function (e, t, n) {
          return M.current.useReducer(e, t, n);
        }),
        (t.useRef = function (e) {
          return M.current.useRef(e);
        }),
        (t.useState = function (e) {
          return M.current.useState(e);
        }),
        (t.useSyncExternalStore = function (e, t, n) {
          return M.current.useSyncExternalStore(e, t, n);
        }),
        (t.useTransition = function () {
          return M.current.useTransition();
        }),
        (t.version = "18.3.1");
    },
    6725: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => m });
      var r = n(6540),
        o = n(5556),
        i = n.n(o),
        a = n(6942),
        s = n.n(a);
      function u(e, t) {
        return (
          (u = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          u(e, t)
        );
      }
      function c() {
        return (
          (c = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          c.apply(this, arguments)
        );
      }
      var f =
          "undefined" != typeof window &&
          window.navigator.userAgent.toLowerCase(),
        p = f && f.indexOf("msie 9.0") > 0,
        l = function (e) {
          var t =
              "rodal-dialog rodal-" +
              (("enter" === e.animationType
                ? e.enterAnimation
                : e.leaveAnimation) || e.animation) +
              "-" +
              e.animationType,
            n = e.showCloseButton
              ? r.createElement("span", {
                  className: "rodal-close",
                  onClick: e.onClose,
                  onKeyPress: function (t) {
                    e.onClose && 13 === t.which && e.onClose(t);
                  },
                  tabIndex: 0,
                })
              : null,
            o = e.width,
            i = e.height,
            a = e.measure,
            s = e.duration,
            u = e.customStyles,
            f = e.id,
            p = c(
              {},
              {
                width: o + a,
                height: i + a,
                animationDuration: s + "ms",
                WebkitAnimationDuration: s + "ms",
              },
              u,
            );
          return r.createElement(
            "div",
            { style: p, className: t, id: f },
            e.children,
            n,
          );
        },
        d = (function (e) {
          var t, n;
          function o() {
            for (
              var t, n = arguments.length, r = new Array(n), o = 0;
              o < n;
              o++
            )
              r[o] = arguments[o];
            return (
              ((t = e.call.apply(e, [this].concat(r)) || this).state = {
                isShow: !1,
                animationType: "leave",
              }),
              (t.onKeyUp = function (e) {
                t.props.closeOnEsc && 27 === e.keyCode && t.props.onClose(e);
              }),
              (t.animationEnd = function (e) {
                var n = t.state.animationType,
                  r = t.props,
                  o = r.closeOnEsc,
                  i = r.onAnimationEnd;
                "leave" === n ? t.setState({ isShow: !1 }) : o && t.el.focus(),
                  e.target === t.el && i && i();
              }),
              t
            );
          }
          (n = e),
            ((t = o).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            u(t, n);
          var i = o.prototype;
          return (
            (i.componentDidMount = function () {
              this.props.visible && this.enter();
            }),
            (i.componentDidUpdate = function (e) {
              this.props.visible && !e.visible && this.enter(),
                !this.props.visible && e.visible && this.leave();
            }),
            (i.enter = function () {
              this.setState({ isShow: !0, animationType: "enter" });
            }),
            (i.leave = function () {
              this.setState(p ? { isShow: !1 } : { animationType: "leave" });
            }),
            (i.render = function () {
              var e = this,
                t = this.props,
                n = t.closeMaskOnClick,
                o = t.onClose,
                i = t.customMaskStyles,
                a = t.showMask,
                u = t.duration,
                f = t.className,
                p = t.children,
                d = this.state,
                m = d.isShow,
                h = d.animationType,
                v = a
                  ? r.createElement("div", {
                      className: "rodal-mask",
                      style: i,
                      onClick: n ? o : void 0,
                    })
                  : null,
                y = {
                  display: m ? "" : "none",
                  animationDuration: u + "ms",
                  WebkitAnimationDuration: u + "ms",
                };
              return r.createElement(
                "div",
                {
                  style: y,
                  className: s()("rodal", "rodal-fade-" + h, f),
                  onAnimationEnd: this.animationEnd,
                  tabIndex: "-1",
                  ref: function (t) {
                    e.el = t;
                  },
                  onKeyUp: this.onKeyUp,
                },
                v,
                r.createElement(l, c({}, this.props, { animationType: h }), p),
              );
            }),
            o
          );
        })(r.Component);
      (d.propTypes = {
        width: i().number,
        height: i().number,
        measure: i().string,
        visible: i().bool,
        showMask: i().bool,
        closeOnEsc: i().bool,
        closeMaskOnClick: i().bool,
        showCloseButton: i().bool,
        animation: i().string,
        enterAnimation: i().string,
        leaveAnimation: i().string,
        duration: i().number,
        className: i().string,
        customStyles: i().object,
        customMaskStyles: i().object,
        onClose: i().func.isRequired,
        onAnimationEnd: i().func,
        id: i().string,
      }),
        (d.defaultProps = {
          width: 400,
          height: 240,
          measure: "px",
          visible: !1,
          showMask: !0,
          closeOnEsc: !1,
          closeMaskOnClick: !0,
          showCloseButton: !0,
          animation: "zoom",
          enterAnimation: "",
          leaveAnimation: "",
          duration: 300,
          className: "",
          customStyles: {},
          customMaskStyles: {},
        });
      const m = d;
    },
    6942: (e, t) => {
      var n;
      !(function () {
        "use strict";
        var r = {}.hasOwnProperty;
        function o() {
          for (var e = "", t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            n && (e = a(e, i(n)));
          }
          return e;
        }
        function i(e) {
          if ("string" == typeof e || "number" == typeof e) return e;
          if ("object" != typeof e) return "";
          if (Array.isArray(e)) return o.apply(null, e);
          if (
            e.toString !== Object.prototype.toString &&
            !e.toString.toString().includes("[native code]")
          )
            return e.toString();
          var t = "";
          for (var n in e) r.call(e, n) && e[n] && (t = a(t, n));
          return t;
        }
        function a(e, t) {
          return t ? (e ? e + " " + t : e + t) : e;
        }
        e.exports
          ? ((o.default = o), (e.exports = o))
          : void 0 ===
              (n = function () {
                return o;
              }.apply(t, [])) || (e.exports = n);
      })();
    },
  },
]); //# sourceMappingURL=file:///c:/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/libraries/libraries~e59f90316.js.map
