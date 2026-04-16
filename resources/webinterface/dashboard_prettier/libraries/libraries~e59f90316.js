var CLSTAMP = "10590646";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [908, 154, 264],
  {
    5471: (e, t, n) => {
      "use strict";
      n.d(t, { Ay: () => Pt });
      var r =
          "undefined" != typeof window &&
          "undefined" != typeof document &&
          "undefined" != typeof navigator,
        i = (function () {
          for (
            var e = ["Edge", "Trident", "Firefox"], t = 0;
            t < e.length;
            t += 1
          )
            if (r && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
          return 0;
        })();
      var o =
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
                  }, i));
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
          i = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + i + r) ? e : c(u(e));
      }
      function l(e) {
        return e && e.referenceNode ? e.referenceNode : e;
      }
      var f = r && !(!window.MSInputMethodContext || !document.documentMode),
        p = r && /MSIE 10/.test(navigator.userAgent);
      function d(e) {
        return 11 === e ? f : 10 === e ? p : f || p;
      }
      function h(e) {
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
            ? h(n)
            : n
          : e
            ? e.ownerDocument.documentElement
            : document.documentElement;
      }
      function v(e) {
        return null !== e.parentNode ? v(e.parentNode) : e;
      }
      function _(e, t) {
        if (!(e && e.nodeType && t && t.nodeType))
          return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
          r = n ? e : t,
          i = n ? t : e,
          o = document.createRange();
        o.setStart(r, 0), o.setEnd(i, 0);
        var a,
          s,
          u = o.commonAncestorContainer;
        if ((e !== u && t !== u) || r.contains(i))
          return "BODY" === (s = (a = u).nodeName) ||
            ("HTML" !== s && h(a.firstElementChild) !== a)
            ? h(u)
            : u;
        var c = v(e);
        return c.host ? _(c.host, t) : _(e, v(t).host);
      }
      function b(e) {
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
      function m(e, t) {
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
      function y(e) {
        var t = e.body,
          n = e.documentElement,
          r = d(10) && getComputedStyle(n);
        return { height: g("Height", t, n, r), width: g("Width", t, n, r) };
      }
      var w = (function () {
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
        S =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          };
      function A(e) {
        return S({}, e, { right: e.left + e.width, bottom: e.top + e.height });
      }
      function E(e) {
        var t = {};
        try {
          if (d(10)) {
            t = e.getBoundingClientRect();
            var n = b(e, "top"),
              r = b(e, "left");
            (t.top += n), (t.left += r), (t.bottom += n), (t.right += r);
          } else t = e.getBoundingClientRect();
        } catch (e) {}
        var i = {
            left: t.left,
            top: t.top,
            width: t.right - t.left,
            height: t.bottom - t.top,
          },
          o = "HTML" === e.nodeName ? y(e.ownerDocument) : {},
          a = o.width || e.clientWidth || i.width,
          u = o.height || e.clientHeight || i.height,
          c = e.offsetWidth - a,
          l = e.offsetHeight - u;
        if (c || l) {
          var f = s(e);
          (c -= m(f, "x")), (l -= m(f, "y")), (i.width -= c), (i.height -= l);
        }
        return A(i);
      }
      function x(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = d(10),
          i = "HTML" === t.nodeName,
          o = E(e),
          a = E(t),
          u = c(e),
          l = s(t),
          f = parseFloat(l.borderTopWidth),
          p = parseFloat(l.borderLeftWidth);
        n &&
          i &&
          ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
        var h = A({
          top: o.top - a.top - f,
          left: o.left - a.left - p,
          width: o.width,
          height: o.height,
        });
        if (((h.marginTop = 0), (h.marginLeft = 0), !r && i)) {
          var v = parseFloat(l.marginTop),
            _ = parseFloat(l.marginLeft);
          (h.top -= f - v),
            (h.bottom -= f - v),
            (h.left -= p - _),
            (h.right -= p - _),
            (h.marginTop = v),
            (h.marginLeft = _);
        }
        return (
          (r && !n ? t.contains(u) : t === u && "BODY" !== u.nodeName) &&
            (h = (function (e, t) {
              var n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                r = b(t, "top"),
                i = b(t, "left"),
                o = n ? -1 : 1;
              return (
                (e.top += r * o),
                (e.bottom += r * o),
                (e.left += i * o),
                (e.right += i * o),
                e
              );
            })(h, t)),
          h
        );
      }
      function k(e) {
        var t = e.nodeName;
        if ("BODY" === t || "HTML" === t) return !1;
        if ("fixed" === s(e, "position")) return !0;
        var n = u(e);
        return !!n && k(n);
      }
      function T(e) {
        if (!e || !e.parentElement || d()) return document.documentElement;
        for (var t = e.parentElement; t && "none" === s(t, "transform"); )
          t = t.parentElement;
        return t || document.documentElement;
      }
      function j(e, t, n, r) {
        var i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          o = { top: 0, left: 0 },
          a = i ? T(e) : _(e, l(t));
        if ("viewport" === r)
          o = (function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = e.ownerDocument.documentElement,
              r = x(e, n),
              i = Math.max(n.clientWidth, window.innerWidth || 0),
              o = Math.max(n.clientHeight, window.innerHeight || 0),
              a = t ? 0 : b(n),
              s = t ? 0 : b(n, "left");
            return A({
              top: a - r.top + r.marginTop,
              left: s - r.left + r.marginLeft,
              width: i,
              height: o,
            });
          })(a, i);
        else {
          var s = void 0;
          "scrollParent" === r
            ? "BODY" === (s = c(u(t))).nodeName &&
              (s = e.ownerDocument.documentElement)
            : (s = "window" === r ? e.ownerDocument.documentElement : r);
          var f = x(s, a, i);
          if ("HTML" !== s.nodeName || k(a)) o = f;
          else {
            var p = y(e.ownerDocument),
              d = p.height,
              h = p.width;
            (o.top += f.top - f.marginTop),
              (o.bottom = d + f.top),
              (o.left += f.left - f.marginLeft),
              (o.right = h + f.left);
          }
        }
        var v = "number" == typeof (n = n || 0);
        return (
          (o.left += v ? n : n.left || 0),
          (o.top += v ? n : n.top || 0),
          (o.right -= v ? n : n.right || 0),
          (o.bottom -= v ? n : n.bottom || 0),
          o
        );
      }
      function C(e, t, n, r, i) {
        var o =
          arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var a = j(n, r, o, i),
          s = {
            top: { width: a.width, height: t.top - a.top },
            right: { width: a.right - t.right, height: a.height },
            bottom: { width: a.width, height: a.bottom - t.bottom },
            left: { width: t.left - a.left, height: a.height },
          },
          u = Object.keys(s)
            .map(function (e) {
              return S({ key: e }, s[e], {
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
          l = c.length > 0 ? c[0].key : u[0].key,
          f = e.split("-")[1];
        return l + (f ? "-" + f : "");
      }
      function P(e, t, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        return x(n, r ? T(t) : _(t, l(n)), r);
      }
      function D(e) {
        var t = e.ownerDocument.defaultView.getComputedStyle(e),
          n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
          r = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return { width: e.offsetWidth + r, height: e.offsetHeight + n };
      }
      function L(e) {
        var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
        return e.replace(/left|right|bottom|top/g, function (e) {
          return t[e];
        });
      }
      function N(e, t, n) {
        n = n.split("-")[0];
        var r = D(e),
          i = { width: r.width, height: r.height },
          o = -1 !== ["right", "left"].indexOf(n),
          a = o ? "top" : "left",
          s = o ? "left" : "top",
          u = o ? "height" : "width",
          c = o ? "width" : "height";
        return (
          (i[a] = t[a] + t[u] / 2 - r[u] / 2),
          (i[s] = n === s ? t[s] - r[c] : t[L(s)]),
          i
        );
      }
      function M(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0];
      }
      function R(e, t, n) {
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
                  var r = M(e, function (e) {
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
              ((t.offsets.popper = A(t.offsets.popper)),
              (t.offsets.reference = A(t.offsets.reference)),
              (t = n(t, e)));
          }),
          t
        );
      }
      function V() {
        if (!this.state.isDestroyed) {
          var e = {
            instance: this,
            styles: {},
            arrowStyles: {},
            attributes: {},
            flipped: !1,
            offsets: {},
          };
          (e.offsets.reference = P(
            this.state,
            this.popper,
            this.reference,
            this.options.positionFixed,
          )),
            (e.placement = C(
              this.options.placement,
              e.offsets.reference,
              this.popper,
              this.reference,
              this.options.modifiers.flip.boundariesElement,
              this.options.modifiers.flip.padding,
            )),
            (e.originalPlacement = e.placement),
            (e.positionFixed = this.options.positionFixed),
            (e.offsets.popper = N(
              this.popper,
              e.offsets.reference,
              e.placement,
            )),
            (e.offsets.popper.position = this.options.positionFixed
              ? "fixed"
              : "absolute"),
            (e = R(this.modifiers, e)),
            this.state.isCreated
              ? this.options.onUpdate(e)
              : ((this.state.isCreated = !0), this.options.onCreate(e));
        }
      }
      function I(e, t) {
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
          var i = t[r],
            o = i ? "" + i + n : e;
          if (void 0 !== document.body.style[o]) return o;
        }
        return null;
      }
      function U() {
        return (
          (this.state.isDestroyed = !0),
          I(this.modifiers, "applyStyle") &&
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
      function W(e, t, n, r) {
        var i = "BODY" === e.nodeName,
          o = i ? e.ownerDocument.defaultView : e;
        o.addEventListener(t, n, { passive: !0 }),
          i || W(c(o.parentNode), t, n, r),
          r.push(o);
      }
      function F(e, t, n, r) {
        (n.updateBound = r),
          H(e).addEventListener("resize", n.updateBound, { passive: !0 });
        var i = c(e);
        return (
          W(i, "scroll", n.updateBound, n.scrollParents),
          (n.scrollElement = i),
          (n.eventsEnabled = !0),
          n
        );
      }
      function q() {
        this.state.eventsEnabled ||
          (this.state = F(
            this.reference,
            this.options,
            this.state,
            this.scheduleUpdate,
          ));
      }
      function K() {
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
      function G(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
      }
      function z(e, t) {
        Object.keys(t).forEach(function (n) {
          var r = "";
          -1 !==
            ["width", "height", "top", "right", "bottom", "left"].indexOf(n) &&
            G(t[n]) &&
            (r = "px"),
            (e.style[n] = t[n] + r);
        });
      }
      var $ = r && /Firefox/i.test(navigator.userAgent);
      function Y(e, t, n) {
        var r = M(e, function (e) {
            return e.name === t;
          }),
          i =
            !!r &&
            e.some(function (e) {
              return e.name === n && e.enabled && e.order < r.order;
            });
        if (!i) {
          var o = "`" + t + "`",
            a = "`" + n + "`";
          console.warn(
            a +
              " modifier is required by " +
              o +
              " modifier in order to work, be sure to include it before " +
              o +
              "!",
          );
        }
        return i;
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
        var i = [0, 0],
          o = -1 !== ["right", "left"].indexOf(r),
          a = e.split(/(\+|\-)/).map(function (e) {
            return e.trim();
          }),
          s = a.indexOf(
            M(a, function (e) {
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
            var i = (1 === r ? !o : o) ? "height" : "width",
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
                  var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                    o = +i[1],
                    a = i[2];
                  if (!o) return e;
                  if (0 === a.indexOf("%")) {
                    return (A("%p" === a ? n : r)[t] / 100) * o;
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
                      o
                    );
                  return o;
                })(e, i, t, n);
              });
          })),
          c.forEach(function (e, t) {
            e.forEach(function (n, r) {
              G(n) && (i[t] += n * ("-" === e[r - 1] ? -1 : 1));
            });
          }),
          i
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
                var i = e.offsets,
                  o = i.reference,
                  a = i.popper,
                  s = -1 !== ["bottom", "top"].indexOf(n),
                  u = s ? "left" : "top",
                  c = s ? "width" : "height",
                  l = {
                    start: O({}, u, o[u]),
                    end: O({}, u, o[u] + o[c] - a[c]),
                  };
                e.offsets.popper = S({}, a, l[r]);
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
                i = e.offsets,
                o = i.popper,
                a = i.reference,
                s = r.split("-")[0],
                u = void 0;
              return (
                (u = G(+n) ? [+n, 0] : ne(n, o, a, s)),
                "left" === s
                  ? ((o.top += u[0]), (o.left -= u[1]))
                  : "right" === s
                    ? ((o.top += u[0]), (o.left += u[1]))
                    : "top" === s
                      ? ((o.left += u[0]), (o.top -= u[1]))
                      : "bottom" === s && ((o.left += u[0]), (o.top += u[1])),
                (e.popper = o),
                e
              );
            },
            offset: 0,
          },
          preventOverflow: {
            order: 300,
            enabled: !0,
            fn: function (e, t) {
              var n = t.boundariesElement || h(e.instance.popper);
              e.instance.reference === n && (n = h(n));
              var r = B("transform"),
                i = e.instance.popper.style,
                o = i.top,
                a = i.left,
                s = i[r];
              (i.top = ""), (i.left = ""), (i[r] = "");
              var u = j(
                e.instance.popper,
                e.instance.reference,
                t.padding,
                n,
                e.positionFixed,
              );
              (i.top = o), (i.left = a), (i[r] = s), (t.boundaries = u);
              var c = t.priority,
                l = e.offsets.popper,
                f = {
                  primary: function (e) {
                    var n = l[e];
                    return (
                      l[e] < u[e] &&
                        !t.escapeWithReference &&
                        (n = Math.max(l[e], u[e])),
                      O({}, e, n)
                    );
                  },
                  secondary: function (e) {
                    var n = "right" === e ? "left" : "top",
                      r = l[n];
                    return (
                      l[e] > u[e] &&
                        !t.escapeWithReference &&
                        (r = Math.min(
                          l[n],
                          u[e] - ("right" === e ? l.width : l.height),
                        )),
                      O({}, n, r)
                    );
                  },
                };
              return (
                c.forEach(function (e) {
                  var t =
                    -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                  l = S({}, l, f[t](e));
                }),
                (e.offsets.popper = l),
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
                i = e.placement.split("-")[0],
                o = Math.floor,
                a = -1 !== ["top", "bottom"].indexOf(i),
                s = a ? "right" : "bottom",
                u = a ? "left" : "top",
                c = a ? "width" : "height";
              return (
                n[s] < o(r[u]) && (e.offsets.popper[u] = o(r[u]) - n[c]),
                n[u] > o(r[s]) && (e.offsets.popper[u] = o(r[s])),
                e
              );
            },
          },
          arrow: {
            order: 500,
            enabled: !0,
            fn: function (e, t) {
              var n;
              if (!Y(e.instance.modifiers, "arrow", "keepTogether")) return e;
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
              var i = e.placement.split("-")[0],
                o = e.offsets,
                a = o.popper,
                u = o.reference,
                c = -1 !== ["left", "right"].indexOf(i),
                l = c ? "height" : "width",
                f = c ? "Top" : "Left",
                p = f.toLowerCase(),
                d = c ? "left" : "top",
                h = c ? "bottom" : "right",
                v = D(r)[l];
              u[h] - v < a[p] && (e.offsets.popper[p] -= a[p] - (u[h] - v)),
                u[p] + v > a[h] && (e.offsets.popper[p] += u[p] + v - a[h]),
                (e.offsets.popper = A(e.offsets.popper));
              var _ = u[p] + u[l] / 2 - v / 2,
                b = s(e.instance.popper),
                m = parseFloat(b["margin" + f]),
                g = parseFloat(b["border" + f + "Width"]),
                y = _ - e.offsets.popper[p] - m - g;
              return (
                (y = Math.max(Math.min(a[l] - v, y), 0)),
                (e.arrowElement = r),
                (e.offsets.arrow =
                  (O((n = {}), p, Math.round(y)), O(n, d, ""), n)),
                e
              );
            },
            element: "[x-arrow]",
          },
          flip: {
            order: 600,
            enabled: !0,
            fn: function (e, t) {
              if (I(e.instance.modifiers, "inner")) return e;
              if (e.flipped && e.placement === e.originalPlacement) return e;
              var n = j(
                  e.instance.popper,
                  e.instance.reference,
                  t.padding,
                  t.boundariesElement,
                  e.positionFixed,
                ),
                r = e.placement.split("-")[0],
                i = L(r),
                o = e.placement.split("-")[1] || "",
                a = [];
              switch (t.behavior) {
                case Z:
                  a = [r, i];
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
                  (r = e.placement.split("-")[0]), (i = L(r));
                  var c = e.offsets.popper,
                    l = e.offsets.reference,
                    f = Math.floor,
                    p =
                      ("left" === r && f(c.right) > f(l.left)) ||
                      ("right" === r && f(c.left) < f(l.right)) ||
                      ("top" === r && f(c.bottom) > f(l.top)) ||
                      ("bottom" === r && f(c.top) < f(l.bottom)),
                    d = f(c.left) < f(n.left),
                    h = f(c.right) > f(n.right),
                    v = f(c.top) < f(n.top),
                    _ = f(c.bottom) > f(n.bottom),
                    b =
                      ("left" === r && d) ||
                      ("right" === r && h) ||
                      ("top" === r && v) ||
                      ("bottom" === r && _),
                    m = -1 !== ["top", "bottom"].indexOf(r),
                    g =
                      !!t.flipVariations &&
                      ((m && "start" === o && d) ||
                        (m && "end" === o && h) ||
                        (!m && "start" === o && v) ||
                        (!m && "end" === o && _)),
                    y =
                      !!t.flipVariationsByContent &&
                      ((m && "start" === o && h) ||
                        (m && "end" === o && d) ||
                        (!m && "start" === o && _) ||
                        (!m && "end" === o && v)),
                    w = g || y;
                  (p || b || w) &&
                    ((e.flipped = !0),
                    (p || b) && (r = a[u + 1]),
                    w &&
                      (o = (function (e) {
                        return "end" === e
                          ? "start"
                          : "start" === e
                            ? "end"
                            : e;
                      })(o)),
                    (e.placement = r + (o ? "-" + o : "")),
                    (e.offsets.popper = S(
                      {},
                      e.offsets.popper,
                      N(e.instance.popper, e.offsets.reference, e.placement),
                    )),
                    (e = R(e.instance.modifiers, e, "flip")));
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
                i = r.popper,
                o = r.reference,
                a = -1 !== ["left", "right"].indexOf(n),
                s = -1 === ["top", "left"].indexOf(n);
              return (
                (i[a ? "left" : "top"] =
                  o[n] - (s ? i[a ? "width" : "height"] : 0)),
                (e.placement = L(t)),
                (e.offsets.popper = A(i)),
                e
              );
            },
          },
          hide: {
            order: 800,
            enabled: !0,
            fn: function (e) {
              if (!Y(e.instance.modifiers, "hide", "preventOverflow")) return e;
              var t = e.offsets.reference,
                n = M(e.instance.modifiers, function (e) {
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
                i = e.offsets.popper,
                o = M(e.instance.modifiers, function (e) {
                  return "applyStyle" === e.name;
                }).gpuAcceleration;
              void 0 !== o &&
                console.warn(
                  "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!",
                );
              var a = void 0 !== o ? o : t.gpuAcceleration,
                s = h(e.instance.popper),
                u = E(s),
                c = { position: i.position },
                l = (function (e, t) {
                  var n = e.offsets,
                    r = n.popper,
                    i = n.reference,
                    o = Math.round,
                    a = Math.floor,
                    s = function (e) {
                      return e;
                    },
                    u = o(i.width),
                    c = o(r.width),
                    l = -1 !== ["left", "right"].indexOf(e.placement),
                    f = -1 !== e.placement.indexOf("-"),
                    p = t ? (l || f || u % 2 == c % 2 ? o : a) : s,
                    d = t ? o : s;
                  return {
                    left: p(
                      u % 2 == 1 && c % 2 == 1 && !f && t ? r.left - 1 : r.left,
                    ),
                    top: d(r.top),
                    bottom: d(r.bottom),
                    right: p(r.right),
                  };
                })(e, window.devicePixelRatio < 2 || !$),
                f = "bottom" === n ? "top" : "bottom",
                p = "right" === r ? "left" : "right",
                d = B("transform"),
                v = void 0,
                _ = void 0;
              if (
                ((_ =
                  "bottom" === f
                    ? "HTML" === s.nodeName
                      ? -s.clientHeight + l.bottom
                      : -u.height + l.bottom
                    : l.top),
                (v =
                  "right" === p
                    ? "HTML" === s.nodeName
                      ? -s.clientWidth + l.right
                      : -u.width + l.right
                    : l.left),
                a && d)
              )
                (c[d] = "translate3d(" + v + "px, " + _ + "px, 0)"),
                  (c[f] = 0),
                  (c[p] = 0),
                  (c.willChange = "transform");
              else {
                var b = "bottom" === f ? -1 : 1,
                  m = "right" === p ? -1 : 1;
                (c[f] = _ * b), (c[p] = v * m), (c.willChange = f + ", " + p);
              }
              var g = { "x-placement": e.placement };
              return (
                (e.attributes = S({}, g, e.attributes)),
                (e.styles = S({}, c, e.styles)),
                (e.arrowStyles = S({}, e.offsets.arrow, e.arrowStyles)),
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
                z(e.instance.popper, e.styles),
                (t = e.instance.popper),
                (n = e.attributes),
                Object.keys(n).forEach(function (e) {
                  !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e);
                }),
                e.arrowElement &&
                  Object.keys(e.arrowStyles).length &&
                  z(e.arrowElement, e.arrowStyles),
                e
              );
            },
            onLoad: function (e, t, n, r, i) {
              var o = P(i, t, e, n.positionFixed),
                a = C(
                  n.placement,
                  o,
                  t,
                  e,
                  n.modifiers.flip.boundariesElement,
                  n.modifiers.flip.padding,
                );
              return (
                t.setAttribute("x-placement", a),
                z(t, { position: n.positionFixed ? "fixed" : "absolute" }),
                n
              );
            },
            gpuAcceleration: void 0,
          },
        },
        ie = {
          placement: "bottom",
          positionFixed: !1,
          eventsEnabled: !0,
          removeOnDestroy: !1,
          onCreate: function () {},
          onUpdate: function () {},
          modifiers: re,
        },
        oe = (function () {
          function e(t, n) {
            var r = this,
              i =
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
              (this.update = o(this.update.bind(this))),
              (this.options = S({}, e.Defaults, i)),
              (this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: [],
              }),
              (this.reference = t && t.jquery ? t[0] : t),
              (this.popper = n && n.jquery ? n[0] : n),
              (this.options.modifiers = {}),
              Object.keys(S({}, e.Defaults.modifiers, i.modifiers)).forEach(
                function (t) {
                  r.options.modifiers[t] = S(
                    {},
                    e.Defaults.modifiers[t] || {},
                    i.modifiers ? i.modifiers[t] : {},
                  );
                },
              ),
              (this.modifiers = Object.keys(this.options.modifiers)
                .map(function (e) {
                  return S({ name: e }, r.options.modifiers[e]);
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
            w(e, [
              {
                key: "update",
                value: function () {
                  return V.call(this);
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
                  return K.call(this);
                },
              },
            ]),
            e
          );
        })();
      (oe.Utils = ("undefined" != typeof window ? window : n.g).PopperUtils),
        (oe.placements = X),
        (oe.Defaults = ie);
      const ae = oe;
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
      function le(e) {
        return !(!e || !e._tippy || e._tippy.reference !== e);
      }
      function fe(e, t) {
        return {}.hasOwnProperty.call(e, t);
      }
      function pe(e) {
        return _e(e)
          ? [e]
          : (function (e) {
                return ve(e, "NodeList");
              })(e)
            ? Ae(e)
            : Array.isArray(e)
              ? e
              : Ae(document.querySelectorAll(e));
      }
      function de(e, t, n) {
        if (Array.isArray(e)) {
          var r = e[t];
          return null == r ? (Array.isArray(n) ? n[t] : n) : r;
        }
        return e;
      }
      function he(e, t) {
        return e && e.modifiers && e.modifiers[t];
      }
      function ve(e, t) {
        var n = {}.toString.call(e);
        return 0 === n.indexOf("[object") && n.indexOf(t + "]") > -1;
      }
      function _e(e) {
        return ve(e, "Element");
      }
      function be(e, t) {
        return "function" == typeof e ? e.apply(void 0, t) : e;
      }
      function me(e, t, n, r) {
        e.filter(function (e) {
          return e.name === t;
        })[0][n] = r;
      }
      function ge() {
        return document.createElement("div");
      }
      function ye(e, t) {
        e.forEach(function (e) {
          e && (e.style.transitionDuration = t + "ms");
        });
      }
      function we(e, t) {
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
      function Se(e, t, n) {
        e && e !== t && e.apply(void 0, n);
      }
      function Ae(e) {
        return [].slice.call(e);
      }
      function Ee(e, t) {
        return e.indexOf(t) > -1;
      }
      function xe(e) {
        return e.split(/\s+/).filter(Boolean);
      }
      function ke(e, t) {
        return void 0 !== e ? e : t;
      }
      function Te(e) {
        return [].concat(e);
      }
      function je(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function Ce(e) {
        return "number" == typeof e ? e : parseFloat(e);
      }
      function Pe(e, t, n) {
        void 0 === t && (t = 5);
        var r = { top: 0, right: 0, bottom: 0, left: 0 };
        return Object.keys(r).reduce(function (r, i) {
          return (
            (r[i] = "number" == typeof t ? t : t[i]),
            e === i && (r[i] = "number" == typeof t ? t + n : t[e] + n),
            r
          );
        }, r);
      }
      var De = se(
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
        Le = Object.keys(De),
        Ne = [
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
        Me = function (e) {
          Object.keys(e).forEach(function (t) {
            De[t] = e[t];
          });
        };
      function Re(e) {
        var t = (e.plugins || []).reduce(function (t, n) {
          var r = n.name,
            i = n.defaultValue;
          return r && (t[r] = void 0 !== e[r] ? e[r] : i), t;
        }, {});
        return se({}, e, {}, t);
      }
      function Ve(e, t) {
        var n = se(
          {},
          t,
          { content: be(t.content, [e]) },
          t.ignoreAttributes
            ? {}
            : (function (e, t) {
                return (
                  t ? Object.keys(Re(se({}, De, { plugins: t }))) : Le
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
      var Ie = { passive: !0 },
        Be = "tippy-popper",
        Ue = "tippy-tooltip",
        He = "tippy-content",
        We = "tippy-arrow",
        Fe = "tippy-svg-arrow",
        qe = "." + Be,
        Ke = "." + Ue,
        Ge = "." + He,
        ze = "." + We,
        $e = "." + Fe,
        Ye = { isTouch: !1 },
        Xe = 0;
      function Je() {
        Ye.isTouch ||
          ((Ye.isTouch = !0),
          window.performance && document.addEventListener("mousemove", Qe));
      }
      function Qe() {
        var e = performance.now();
        e - Xe < 20 &&
          ((Ye.isTouch = !1), document.removeEventListener("mousemove", Qe)),
          (Xe = e);
      }
      function Ze() {
        var e = document.activeElement;
        if (le(e)) {
          var t = e._tippy;
          e.blur && !t.state.isVisible && e.blur();
        }
      }
      var et = "undefined" != typeof window && "undefined" != typeof document,
        tt = et ? navigator.userAgent : "",
        nt = /MSIE |Trident\//.test(tt),
        rt = et && /iPhone|iPad|iPod/.test(navigator.platform);
      function it(e) {
        var t = e && rt && Ye.isTouch;
        document.body.classList[t ? "add" : "remove"]("tippy-iOS");
      }
      function ot(e) {
        return e.split("-")[0];
      }
      function at(e) {
        e.setAttribute("data-inertia", "");
      }
      function st(e) {
        e.setAttribute("data-interactive", "");
      }
      function ut(e, t) {
        if (_e(t.content)) ce(e, ""), e.appendChild(t.content);
        else if ("function" != typeof t.content) {
          e[t.allowHTML ? "innerHTML" : "textContent"] = t.content;
        }
      }
      function ct(e) {
        return {
          tooltip: e.querySelector(Ke),
          content: e.querySelector(Ge),
          arrow: e.querySelector(ze) || e.querySelector($e),
        };
      }
      function lt(e) {
        var t = ge();
        return (
          !0 === e
            ? (t.className = We)
            : ((t.className = Fe), _e(e) ? t.appendChild(e) : ce(t, e)),
          t
        );
      }
      function ft(e, t) {
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
          ht(r, "add", t.theme);
        var i = ge();
        return (
          (i.className = He),
          i.setAttribute("data-state", "hidden"),
          t.interactive && st(r),
          t.arrow &&
            (r.setAttribute("data-arrow", ""), r.appendChild(lt(t.arrow))),
          t.inertia && at(r),
          ut(i, t),
          r.appendChild(i),
          n.appendChild(r),
          pt(n, t, t),
          n
        );
      }
      function pt(e, t, n) {
        var r,
          i = ct(e),
          o = i.tooltip,
          a = i.content,
          s = i.arrow;
        (e.style.zIndex = "" + n.zIndex),
          o.setAttribute("data-animation", n.animation),
          (o.style.maxWidth =
            "number" == typeof (r = n.maxWidth) ? r + "px" : r),
          n.role ? o.setAttribute("role", n.role) : o.removeAttribute("role"),
          t.content !== n.content && ut(a, n),
          !t.arrow && n.arrow
            ? (o.appendChild(lt(n.arrow)), o.setAttribute("data-arrow", ""))
            : t.arrow && !n.arrow
              ? (o.removeChild(s), o.removeAttribute("data-arrow"))
              : t.arrow !== n.arrow &&
                (o.removeChild(s), o.appendChild(lt(n.arrow))),
          !t.interactive && n.interactive
            ? st(o)
            : t.interactive &&
              !n.interactive &&
              (function (e) {
                e.removeAttribute("data-interactive");
              })(o),
          !t.inertia && n.inertia
            ? at(o)
            : t.inertia &&
              !n.inertia &&
              (function (e) {
                e.removeAttribute("data-inertia");
              })(o),
          t.theme !== n.theme &&
            (ht(o, "remove", t.theme), ht(o, "add", n.theme));
      }
      function dt(e, t, n) {
        ["transitionend", "webkitTransitionEnd"].forEach(function (r) {
          e[t + "EventListener"](r, n);
        });
      }
      function ht(e, t, n) {
        xe(n).forEach(function (n) {
          e.classList[t](n + "-theme");
        });
      }
      var vt = 1,
        _t = [],
        bt = [];
      function mt(e, t) {
        var n,
          r,
          i,
          o = Ve(e, se({}, De, {}, Re(t)));
        if (!o.multiple && e._tippy) return null;
        var a,
          s,
          u,
          c,
          l,
          f,
          p,
          d = !1,
          h = !1,
          v = !1,
          _ = 0,
          b = [],
          m = Oe(G, o.interactiveDebounce),
          g =
            ((l = o.triggerTarget || e),
            ((f = Te(l)[0]) && f.ownerDocument) || document),
          y = vt++,
          w = ft(y, o),
          O = ct(w),
          S = (p = o.plugins).filter(function (e, t) {
            return p.indexOf(e) === t;
          }),
          A = O.tooltip,
          E = O.content,
          x = [A, E],
          k = {
            id: y,
            reference: e,
            popper: w,
            popperChildren: O,
            popperInstance: null,
            props: o,
            state: {
              currentPlacement: null,
              isEnabled: !0,
              isVisible: !1,
              isDestroyed: !1,
              isMounted: !1,
              isShown: !1,
            },
            plugins: S,
            clearDelayTimeouts: function () {
              clearTimeout(n), clearTimeout(r), cancelAnimationFrame(i);
            },
            setProps: function (t) {
              0;
              if (k.state.isDestroyed) return;
              0;
              N("onBeforeUpdate", [k, t]), q();
              var n = k.props,
                r = Ve(e, se({}, k.props, {}, t, { ignoreAttributes: !0 }));
              (r.ignoreAttributes = ke(t.ignoreAttributes, n.ignoreAttributes)),
                (k.props = r),
                F(),
                n.interactiveDebounce !== r.interactiveDebounce &&
                  (V(), (m = Oe(G, r.interactiveDebounce)));
              pt(w, n, r),
                (k.popperChildren = ct(w)),
                n.triggerTarget && !r.triggerTarget
                  ? Te(n.triggerTarget).forEach(function (e) {
                      e.removeAttribute("aria-expanded");
                    })
                  : r.triggerTarget && e.removeAttribute("aria-expanded");
              if ((R(), k.popperInstance))
                if (
                  Ne.some(function (e) {
                    return fe(t, e) && t[e] !== n[e];
                  })
                ) {
                  var i = k.popperInstance.reference;
                  k.popperInstance.destroy(),
                    X(),
                    (k.popperInstance.reference = i),
                    k.state.isVisible &&
                      k.popperInstance.enableEventListeners();
                } else k.popperInstance.update();
              N("onAfterUpdate", [k, t]);
            },
            setContent: function (e) {
              k.setProps({ content: e });
            },
            show: function (e) {
              void 0 === e && (e = de(k.props.duration, 0, De.duration));
              0;
              var t = k.state.isVisible,
                n = k.state.isDestroyed,
                r = !k.state.isEnabled,
                i = Ye.isTouch && !k.props.touch;
              if (t || n || r || i) return;
              if (D().hasAttribute("disabled")) return;
              k.popperInstance || X();
              if ((N("onShow", [k], !1), !1 === k.props.onShow(k))) return;
              B(),
                (w.style.visibility = "visible"),
                (k.state.isVisible = !0),
                k.state.isMounted || ye(x.concat(w), 0);
              (s = function () {
                k.state.isVisible &&
                  (ye([w], k.props.updateDuration),
                  ye(x, e),
                  we(x, "visible"),
                  M(),
                  R(),
                  je(bt, k),
                  it(!0),
                  (k.state.isMounted = !0),
                  N("onMount", [k]),
                  (function (e, t) {
                    H(e, t);
                  })(e, function () {
                    (k.state.isShown = !0), N("onShown", [k]);
                  }));
              }),
                (function () {
                  _ = 0;
                  var e,
                    t = k.props.appendTo,
                    n = D();
                  e =
                    (k.props.interactive && t === De.appendTo) || "parent" === t
                      ? n.parentNode
                      : be(t, [n]);
                  e.contains(w) || e.appendChild(w);
                  0;
                  me(
                    k.popperInstance.modifiers,
                    "flip",
                    "enabled",
                    k.props.flip,
                  ),
                    k.popperInstance.enableEventListeners(),
                    k.popperInstance.update();
                })();
            },
            hide: function (e) {
              void 0 === e && (e = de(k.props.duration, 1, De.duration));
              0;
              var t = !k.state.isVisible && !d,
                n = k.state.isDestroyed,
                r = !k.state.isEnabled && !d;
              if (t || n || r) return;
              if ((N("onHide", [k], !1), !1 === k.props.onHide(k) && !d))
                return;
              U(),
                (w.style.visibility = "hidden"),
                (k.state.isVisible = !1),
                (k.state.isShown = !1),
                ye(x, e),
                we(x, "hidden"),
                M(),
                R(),
                (function (e, t) {
                  H(e, function () {
                    !k.state.isVisible &&
                      w.parentNode &&
                      w.parentNode.contains(w) &&
                      t();
                  });
                })(e, function () {
                  k.popperInstance.disableEventListeners(),
                    (k.popperInstance.options.placement = k.props.placement),
                    w.parentNode.removeChild(w),
                    0 ===
                      (bt = bt.filter(function (e) {
                        return e !== k;
                      })).length && it(!1),
                    (k.state.isMounted = !1),
                    N("onHidden", [k]);
                });
            },
            enable: function () {
              k.state.isEnabled = !0;
            },
            disable: function () {
              k.hide(), (k.state.isEnabled = !1);
            },
            destroy: function () {
              0;
              if (k.state.isDestroyed) return;
              (d = !0),
                k.clearDelayTimeouts(),
                k.hide(0),
                q(),
                delete e._tippy,
                k.popperInstance && k.popperInstance.destroy();
              (d = !1), (k.state.isDestroyed = !0), N("onDestroy", [k]);
            },
          };
        (e._tippy = k), (w._tippy = k);
        var T = S.map(function (e) {
            return e.fn(k);
          }),
          j = e.hasAttribute("aria-expanded");
        return (
          F(),
          R(),
          o.lazy || X(),
          N("onCreate", [k]),
          o.showOnCreate && Q(),
          w.addEventListener("mouseenter", function () {
            k.props.interactive && k.state.isVisible && k.clearDelayTimeouts();
          }),
          w.addEventListener("mouseleave", function (e) {
            k.props.interactive &&
              Ee(k.props.trigger, "mouseenter") &&
              (m(e), g.addEventListener("mousemove", m));
          }),
          k
        );
        function C() {
          var e = k.props.touch;
          return Array.isArray(e) ? e : [e, 0];
        }
        function P() {
          return "hold" === C()[0];
        }
        function D() {
          return c || e;
        }
        function L(e) {
          return (k.state.isMounted && !k.state.isVisible) ||
            Ye.isTouch ||
            (a && "focus" === a.type)
            ? 0
            : de(k.props.delay, e ? 0 : 1, De.delay);
        }
        function N(e, t, n) {
          var r;
          (void 0 === n && (n = !0),
          T.forEach(function (n) {
            fe(n, e) && n[e].apply(n, t);
          }),
          n) && (r = k.props)[e].apply(r, t);
        }
        function M() {
          var t = k.props.aria;
          if (t) {
            var n = "aria-" + t,
              r = A.id;
            Te(k.props.triggerTarget || e).forEach(function (e) {
              var t = e.getAttribute(n);
              if (k.state.isVisible) e.setAttribute(n, t ? t + " " + r : r);
              else {
                var i = t && t.replace(r, "").trim();
                i ? e.setAttribute(n, i) : e.removeAttribute(n);
              }
            });
          }
        }
        function R() {
          j ||
            Te(k.props.triggerTarget || e).forEach(function (e) {
              k.props.interactive
                ? e.setAttribute(
                    "aria-expanded",
                    k.state.isVisible && e === D() ? "true" : "false",
                  )
                : e.removeAttribute("aria-expanded");
            });
        }
        function V() {
          g.body.removeEventListener("mouseleave", Z),
            g.removeEventListener("mousemove", m),
            (_t = _t.filter(function (e) {
              return e !== m;
            }));
        }
        function I(e) {
          if (!k.props.interactive || !w.contains(e.target)) {
            if (D().contains(e.target)) {
              if (Ye.isTouch) return;
              if (k.state.isVisible && Ee(k.props.trigger, "click")) return;
            }
            !0 === k.props.hideOnClick &&
              ((h = !1),
              k.clearDelayTimeouts(),
              k.hide(),
              (v = !0),
              setTimeout(function () {
                v = !1;
              }),
              k.state.isMounted || U());
          }
        }
        function B() {
          g.addEventListener("mousedown", I, !0);
        }
        function U() {
          g.removeEventListener("mousedown", I, !0);
        }
        function H(e, t) {
          function n(e) {
            e.target === A && (dt(A, "remove", n), t());
          }
          if (0 === e) return t();
          dt(A, "remove", u), dt(A, "add", n), (u = n);
        }
        function W(t, n, r) {
          void 0 === r && (r = !1),
            Te(k.props.triggerTarget || e).forEach(function (e) {
              e.addEventListener(t, n, r),
                b.push({ node: e, eventType: t, handler: n, options: r });
            });
        }
        function F() {
          P() && (W("touchstart", K, Ie), W("touchend", z, Ie)),
            xe(k.props.trigger).forEach(function (e) {
              if ("manual" !== e)
                switch ((W(e, K), e)) {
                  case "mouseenter":
                    W("mouseleave", z);
                    break;
                  case "focus":
                    W(nt ? "focusout" : "blur", $);
                    break;
                  case "focusin":
                    W("focusout", $);
                }
            });
        }
        function q() {
          b.forEach(function (e) {
            var t = e.node,
              n = e.eventType,
              r = e.handler,
              i = e.options;
            t.removeEventListener(n, r, i);
          }),
            (b = []);
        }
        function K(e) {
          var t = !1;
          if (k.state.isEnabled && !Y(e) && !v) {
            if (
              ((a = e),
              (c = e.currentTarget),
              R(),
              !k.state.isVisible &&
                (function (e) {
                  return ve(e, "MouseEvent");
                })(e) &&
                _t.forEach(function (t) {
                  return t(e);
                }),
              "click" !== e.type ||
                (Ee(k.props.trigger, "mouseenter") && !h) ||
                !1 === k.props.hideOnClick ||
                !k.state.isVisible)
            ) {
              var r = C(),
                i = r[0],
                o = r[1];
              Ye.isTouch && "hold" === i && o
                ? (n = setTimeout(function () {
                    Q(e);
                  }, o))
                : Q(e);
            } else t = !0;
            "click" === e.type && (h = !t), t && Z(e);
          }
        }
        function G(t) {
          var n = (function (e, t) {
            for (; e; ) {
              if (t(e)) return e;
              e = e.parentElement;
            }
            return null;
          })(t.target, function (t) {
            return t === e || t === w;
          });
          if ("mousemove" !== t.type || !n) {
            var r = Ae(w.querySelectorAll(qe))
              .concat(w)
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
                  i = e.tooltipRect,
                  o = e.interactiveBorder,
                  a = Math.min(t.top, i.top),
                  s = Math.max(t.right, i.right),
                  u = Math.max(t.bottom, i.bottom),
                  c = Math.min(t.left, i.left);
                return a - r > o || r - u > o || c - n > o || n - s > o;
              });
            })(r, t) && (V(), Z(t));
          }
        }
        function z(e) {
          if (!(Y(e) || (Ee(k.props.trigger, "click") && h)))
            return k.props.interactive
              ? (g.body.addEventListener("mouseleave", Z),
                g.addEventListener("mousemove", m),
                je(_t, m),
                void m(e))
              : void Z(e);
        }
        function $(e) {
          (Ee(k.props.trigger, "focusin") || e.target === D()) &&
            ((k.props.interactive &&
              e.relatedTarget &&
              w.contains(e.relatedTarget)) ||
              Z(e));
        }
        function Y(e) {
          var t = "ontouchstart" in window,
            n = Ee(e.type, "touch"),
            r = P();
          return (t && Ye.isTouch && r && !n) || (Ye.isTouch && !r && n);
        }
        function X() {
          var t,
            n = k.props.popperOptions,
            r = k.popperChildren.arrow,
            i = he(n, "flip"),
            o = he(n, "preventOverflow");
          function a(e) {
            var n = k.state.currentPlacement;
            (k.state.currentPlacement = e.placement),
              k.props.flip &&
                !k.props.flipOnUpdate &&
                (e.flipped &&
                  (k.popperInstance.options.placement = e.placement),
                me(k.popperInstance.modifiers, "flip", "enabled", !1)),
              A.setAttribute("data-placement", e.placement),
              !1 !== e.attributes["x-out-of-boundaries"]
                ? A.setAttribute("data-out-of-boundaries", "")
                : A.removeAttribute("data-out-of-boundaries");
            var r = ot(e.placement),
              i = Ee(["top", "bottom"], r),
              o = Ee(["bottom", "right"], r);
            (A.style.top = "0"),
              (A.style.left = "0"),
              (A.style[i ? "top" : "left"] = (o ? 1 : -1) * t + "px"),
              n && n !== e.placement && k.popperInstance.update();
          }
          var s = se({ eventsEnabled: !1, placement: k.props.placement }, n, {
            modifiers: se({}, n && n.modifiers, {
              tippyDistance: {
                enabled: !0,
                order: 0,
                fn: function (e) {
                  t = (function (e, t) {
                    var n = "string" == typeof t && Ee(t, "rem"),
                      r = e.documentElement;
                    return r && n
                      ? parseFloat(getComputedStyle(r).fontSize || String(16)) *
                          Ce(t)
                      : Ce(t);
                  })(g, k.props.distance);
                  var n = ot(e.placement),
                    r = Pe(n, o && o.padding, t),
                    a = Pe(n, i && i.padding, t),
                    s = k.popperInstance.modifiers;
                  return (
                    me(s, "preventOverflow", "padding", r),
                    me(s, "flip", "padding", a),
                    e
                  );
                },
              },
              preventOverflow: se({ boundariesElement: k.props.boundary }, o),
              flip: se(
                { enabled: k.props.flip, behavior: k.props.flipBehavior },
                i,
              ),
              arrow: se({ element: r, enabled: !!r }, he(n, "arrow")),
              offset: se({ offset: k.props.offset }, he(n, "offset")),
            }),
            onCreate: function (e) {
              a(e), Se(n && n.onCreate, s.onCreate, [e]), J();
            },
            onUpdate: function (e) {
              a(e), Se(n && n.onUpdate, s.onUpdate, [e]), J();
            },
          });
          k.popperInstance = new ae(e, w, s);
        }
        function J() {
          0 === _
            ? (_++, k.popperInstance.update())
            : s &&
              1 === _ &&
              (_++,
              (function (e) {
                e.offsetHeight;
              })(w),
              s());
        }
        function Q(e) {
          k.clearDelayTimeouts(),
            k.popperInstance || X(),
            e && N("onTrigger", [k, e]),
            B();
          var t = L(!0);
          t
            ? (n = setTimeout(function () {
                k.show();
              }, t))
            : k.show();
        }
        function Z(e) {
          if (
            (k.clearDelayTimeouts(),
            N("onUntrigger", [k, e]),
            k.state.isVisible)
          ) {
            if (
              !(
                Ee(k.props.trigger, "mouseenter") &&
                Ee(k.props.trigger, "click") &&
                Ee(["mouseleave", "mousemove"], e.type) &&
                h
              )
            ) {
              var t = L(!1);
              t
                ? (r = setTimeout(function () {
                    k.state.isVisible && k.hide();
                  }, t))
                : (i = requestAnimationFrame(function () {
                    k.hide();
                  }));
            }
          } else U();
        }
      }
      function gt(e, t, n) {
        void 0 === t && (t = {}),
          void 0 === n && (n = []),
          (n = De.plugins.concat(t.plugins || n)),
          document.addEventListener(
            "touchstart",
            Je,
            se({}, Ie, { capture: !0 }),
          ),
          window.addEventListener("blur", Ze);
        var r = se({}, t, { plugins: n }),
          i = pe(e).reduce(function (e, t) {
            var n = t && mt(t, r);
            return n && e.push(n), e;
          }, []);
        return _e(e) ? i[0] : i;
      }
      (gt.version = ue),
        (gt.defaultProps = De),
        (gt.setDefaultProps = Me),
        (gt.currentInput = Ye);
      var yt = n(6540),
        wt = n(961);
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
      function St(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i;
      }
      var At = "undefined" != typeof window && "undefined" != typeof document;
      function Et(e, t) {
        e &&
          ("function" == typeof e && e(t),
          {}.hasOwnProperty.call(e, "current") && (e.current = t));
      }
      function xt(e, t, n) {
        n.split(/\s+/).forEach(function (n) {
          n && e.classList[t](n);
        });
      }
      var kt = At ? yt.useLayoutEffect : yt.useEffect;
      function Tt(e, t, n) {
        kt(function () {
          var n = e.instance.popperChildren.tooltip;
          if (t)
            return (
              xt(n, "add", t),
              function () {
                xt(n, "remove", t);
              }
            );
        }, [t].concat(n));
      }
      function jt(e) {
        var t = (0, yt.useRef)();
        return (
          t.current || (t.current = "function" == typeof e ? e() : e), t.current
        );
      }
      function Ct(e) {
        var t = e.children,
          n = e.content,
          r = e.className,
          i = e.visible,
          o = e.singleton,
          a = e.enabled,
          s = void 0 === a || a,
          u = e.multiple,
          c = void 0 === u || u,
          l = e.ignoreAttributes,
          f = void 0 === l || l,
          p =
            (e.__source,
            e.__self,
            St(e, [
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
          d = void 0 !== i,
          h = void 0 !== o,
          v = (0, yt.useState)(!1),
          _ = v[0],
          b = v[1],
          m = jt(function () {
            return {
              container: At && document.createElement("div"),
              renders: 1,
            };
          }),
          g = Ot({ ignoreAttributes: f, multiple: c }, p, {
            content: m.container,
          });
        d && (g.trigger = "manual"), h && (s = !1);
        var y = [t.type];
        return (
          kt(function () {
            var e = gt(m.ref, g);
            return (
              (m.instance = e),
              s || e.disable(),
              i && e.show(),
              h && o(e),
              b(!0),
              function () {
                e.destroy();
              }
            );
          }, y),
          kt(function () {
            if (1 !== m.renders) {
              var e = m.instance;
              e.setProps(g),
                s ? e.enable() : e.disable(),
                d && (i ? e.show() : e.hide());
            } else m.renders++;
          }),
          Tt(m, r, y),
          yt.createElement(
            yt.Fragment,
            null,
            (0, yt.cloneElement)(t, {
              ref: function (e) {
                (m.ref = e), Et(t.ref, e);
              },
            }),
            _ && (0, wt.createPortal)(n, m.container),
          )
        );
      }
      const Pt = (0, yt.forwardRef)(function (e, t) {
        var n = e.children,
          r = St(e, ["children"]);
        return yt.createElement(
          Ct,
          r,
          (0, yt.cloneElement)(n, {
            ref: function (e) {
              Et(t, e), Et(n.ref, e);
            },
          }),
        );
      });
    },
    2505: (e, t, n) => {
      e.exports = n(8015);
    },
    7750: () => {},
    5266: (e, t, n) => {
      "use strict";
      n.d(t, {
        _observerFinalizationRegistry: () => o.Y,
        isUsingStaticRendering: () => a.P,
        observer: () => s.P,
      });
      n(724);
      var r = n(9889),
        i = n(8909),
        o = (n(4452), n(3438)),
        a = n(3815),
        s = n(6035);
      var u;
      n(6540);
      (0, i.tl)(r.r);
      u = o.Y.finalizeAllImmediately;
    },
    3815: (e, t, n) => {
      "use strict";
      n.d(t, { P: () => i });
      var r = !1;
      function i() {
        return r;
      }
    },
    4452: (e, t, n) => {
      "use strict";
      n.d(t, { q: () => l });
      var r = n(7813),
        i = n(6540),
        o = n(6356),
        a = n(3815),
        s = n(3438),
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
        var n = i.useRef(null);
        if (!n.current) {
          var r = {
            reaction: null,
            onStoreChange: null,
            stateVersion: Symbol(),
            name: t,
            subscribe: function (e) {
              return (
                s.Y.unregister(r),
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
          f,
          p = n.current;
        if (
          (p.reaction || (c(p), s.Y.register(n, p, p)),
          i.useDebugValue(p.reaction, o.E),
          (0, u.useSyncExternalStore)(
            p.subscribe,
            p.getSnapshot,
            p.getSnapshot,
          ),
          p.reaction.track(function () {
            try {
              l = e();
            } catch (e) {
              f = e;
            }
          }),
          f)
        )
          throw f;
        return l;
      }
    },
    8909: (e, t, n) => {
      "use strict";
      n.d(t, { tl: () => o });
      var r = n(7813);
      function i(e) {
        e();
      }
      function o(e) {
        e || (e = i), (0, r.configure)({ reactionScheduler: e });
      }
    },
    3438: (e, t, n) => {
      "use strict";
      n.d(t, { Y: () => r });
      var r = new (n(2517).Xr)(function (e) {
        var t;
        null === (t = e.reaction) || void 0 === t || t.dispose(),
          (e.reaction = null);
      });
    },
    7813: (e, t, n) => {
      "use strict";
      n.d(t, {
        Reaction: () => At,
        _allowStateChanges: () => qe,
        action: () => It,
        autorun: () => Wt,
        computed: () => Ve,
        configure: () => Qt,
        getDependencyTree: () => en,
        isObservable: () => fn,
        isObservableArray: () => Bn,
        isObservableMap: () => qn,
        isObservableObject: () => er,
        makeObservable: () => kn,
        observable: () => Le,
        observe: () => pn,
        runInAction: () => Ut,
        toJS: () => vn,
        untracked: () => st,
        when: () => bn,
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
      var p = "undefined" != typeof Proxy,
        d = Object.toString();
      function h() {
        p || r("Proxy not available");
      }
      function v(e) {
        var t = !1;
        return function () {
          if (!t) return (t = !0), e.apply(this, arguments);
        };
      }
      var _ = function () {};
      function b(e) {
        return "function" == typeof e;
      }
      function m(e) {
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
      function y(e) {
        if (!g(e)) return !1;
        var t = Object.getPrototypeOf(e);
        if (null == t) return !0;
        var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n.toString() === d;
      }
      function w(e) {
        var t = null == e ? void 0 : e.constructor;
        return (
          !!t &&
          ("GeneratorFunction" === t.name ||
            "GeneratorFunction" === t.displayName)
        );
      }
      function O(e, t, n) {
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
      function E(e) {
        return (
          null != e && "[object Map]" === Object.prototype.toString.call(e)
        );
      }
      function x(e) {
        return (
          null != e && "[object Set]" === Object.prototype.toString.call(e)
        );
      }
      var k = void 0 !== Object.getOwnPropertySymbols;
      var T =
        "undefined" != typeof Reflect && Reflect.ownKeys
          ? Reflect.ownKeys
          : k
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(
                  Object.getOwnPropertySymbols(e),
                );
              }
            : Object.getOwnPropertyNames;
      function j(e) {
        return null === e ? null : "object" == typeof e ? "" + e : e;
      }
      function C(e, t) {
        return c.hasOwnProperty.call(e, t);
      }
      var P =
        Object.getOwnPropertyDescriptors ||
        function (e) {
          var t = {};
          return (
            T(e).forEach(function (n) {
              t[n] = s(e, n);
            }),
            t
          );
        };
      function D(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function L(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, B(r.key), r);
        }
      }
      function N(e, t, n) {
        return (
          t && L(e.prototype, t),
          n && L(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function M(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (n) return (n = n.call(e)).next.bind(n);
        if (
          Array.isArray(e) ||
          (n = (function (e, t) {
            if (e) {
              if ("string" == typeof e) return D(e, t);
              var n = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? D(e, t)
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
      function R() {
        return (
          (R = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          R.apply(null, arguments)
        );
      }
      function V(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          I(e, t);
      }
      function I(e, t) {
        return (
          (I = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          I(e, t)
        );
      }
      function B(e) {
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
      function H(e) {
        return Object.assign(function (t, n) {
          if (F(n)) return e.decorate_20223_(t, n);
          W(t, n, e);
        }, e);
      }
      function W(e, t, n) {
        C(e, U) || O(e, U, R({}, e[U])),
          (function (e) {
            return e.annotationType_ === J;
          })(n) || (e[U][t] = n);
      }
      function F(e) {
        return "object" == typeof e && "string" == typeof e.kind;
      }
      var q = Symbol("mobx administration"),
        K = (function () {
          function e(e) {
            void 0 === e && (e = "Atom"),
              (this.name_ = void 0),
              (this.isPendingUnobservation = !1),
              (this.isBeingObserved = !1),
              (this.observers_ = new Set()),
              (this.diffValue_ = 0),
              (this.lastAccessedBy_ = 0),
              (this.lowestObserverState_ = Qe.NOT_TRACKING_),
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
              yt(), St(this), wt();
            }),
            (t.toString = function () {
              return this.name_;
            }),
            e
          );
        })(),
        G = A("Atom", K);
      function z(e, t, n) {
        void 0 === t && (t = _), void 0 === n && (n = _);
        var r,
          i = new K(e);
        return t !== _ && $t(Kt, i, t, r), n !== _ && zt(i, n), i;
      }
      var $ = {
        identity: function (e, t) {
          return e === t;
        },
        structural: function (e, t) {
          return gr(e, t);
        },
        default: function (e, t) {
          return Object.is
            ? Object.is(e, t)
            : e === t
              ? 0 !== e || 1 / e == 1 / t
              : e != e && t != t;
        },
        shallow: function (e, t) {
          return gr(e, t, 1);
        },
      };
      function Y(e, t, n) {
        return fn(e)
          ? e
          : Array.isArray(e)
            ? Le.array(e, { name: n })
            : y(e)
              ? Le.object(e, void 0, { name: n })
              : E(e)
                ? Le.map(e, { name: n })
                : x(e)
                  ? Le.set(e, { name: n })
                  : "function" != typeof e || Ht(e) || cn(e)
                    ? e
                    : w(e)
                      ? sn(e)
                      : Bt(n, e);
      }
      function X(e) {
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
        if (Ht(n.value)) return 1;
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
          var s, u, c, l, f, p;
          if ("method" == n)
            return (
              Ht(e) ||
                ((u = e),
                (e = We(
                  null != (c = null == (l = a.options_) ? void 0 : l.name)
                    ? c
                    : i.toString(),
                  u,
                  null !=
                    (f = null == (p = a.options_) ? void 0 : p.autoAction) && f,
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
            W(this, i, a);
          });
      }
      function ne(e, t, n, r, i) {
        var o, a, s, u, c, l, f, p;
        void 0 === i && (i = _t.safeDescriptors),
          (p = r),
          t.annotationType_,
          p.value;
        var d,
          h = r.value;
        null != (o = t.options_) &&
          o.bound &&
          (h = h.bind(null != (d = e.proxy_) ? d : e.target_));
        return {
          value: We(
            null != (a = null == (s = t.options_) ? void 0 : s.name)
              ? a
              : n.toString(),
            h,
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
          (!C(e.target_, t) || !cn(e.target_[t])) &&
          null === this.extend_(e, t, n, !1)
        )
          return 0;
        if (cn(n.value)) return 1;
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
          cn(e) || (e = sn(e)),
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
        void 0 === o && (o = _t.safeDescriptors),
          (a = r),
          t.annotationType_,
          a.value;
        var s,
          u = r.value;
        (cn(u) || (u = sn(u)), i) &&
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
            R({}, this.options_, { get: n.get, set: n.set }),
            r,
          )
        );
      }
      function fe(e, t) {
        var n = this,
          r = t.name;
        return (
          (0, t.addInitializer)(function () {
            var t = Jn(this)[q],
              i = R({}, n.options_, { get: e, context: this });
            i.name || (i.name = "ObservableObject." + r.toString()),
              t.values_.set(r, new Je(i));
          }),
          function () {
            return this[q].getObservablePropValue_(r);
          }
        );
      }
      function pe(e, t) {
        return {
          annotationType_: e,
          options_: t,
          make_: de,
          extend_: he,
          decorate_20223_: ve,
        };
      }
      function de(e, t, n) {
        return null === this.extend_(e, t, n, !1) ? 0 : 1;
      }
      function he(e, t, n, r) {
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
              : Y,
            r,
          )
        );
      }
      function ve(e, t) {
        var n = this,
          r = t.kind,
          i = t.name,
          o = new WeakSet();
        function a(e, t) {
          var r,
            a,
            s = Jn(e)[q],
            u = new ze(
              t,
              null != (r = null == (a = n.options_) ? void 0 : a.enhancer)
                ? r
                : Y,
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
                this[q].getObservablePropValue_(i)
              );
            },
            set: function (e) {
              return (
                o.has(this) || a(this, e), this[q].setObservablePropValue_(i, e)
              );
            },
            init: function (e) {
              return o.has(this) || a(this, e), e;
            },
          };
      }
      var _e = "true",
        be = me();
      function me(e) {
        return {
          annotationType_: _e,
          options_: e,
          make_: ge,
          extend_: ye,
          decorate_20223_: we,
        };
      }
      function ge(e, t, n, r) {
        var i, o, a, s;
        if (n.get) return Ve.make_(e, t, n, r);
        if (n.set) {
          var c = We(t.toString(), n.set);
          return r === e.target_
            ? null ===
              e.defineProperty_(t, {
                configurable: !_t.safeDescriptors || e.isPlainObject_,
                set: c,
              })
              ? 0
              : 2
            : (u(r, t, { configurable: !0, set: c }), 2);
        }
        if (r !== e.target_ && "function" == typeof n.value)
          return w(n.value)
            ? (null != (s = this.options_) && s.autoBind ? sn.bound : sn).make_(
                e,
                t,
                n,
                r,
              )
            : (null != (a = this.options_) && a.autoBind ? Bt.bound : Bt).make_(
                e,
                t,
                n,
                r,
              );
        var l,
          f =
            !1 === (null == (i = this.options_) ? void 0 : i.deep)
              ? Le.ref
              : Le;
        "function" == typeof n.value &&
          null != (o = this.options_) &&
          o.autoBind &&
          (n.value = n.value.bind(null != (l = e.proxy_) ? l : e.target_));
        return f.make_(e, t, n, r);
      }
      function ye(e, t, n, r) {
        var i, o, a;
        if (n.get) return Ve.extend_(e, t, n, r);
        if (n.set)
          return e.defineProperty_(
            t,
            {
              configurable: !_t.safeDescriptors || e.isPlainObject_,
              set: We(t.toString(), n.set),
            },
            r,
          );
        "function" == typeof n.value &&
          null != (i = this.options_) &&
          i.autoBind &&
          (n.value = n.value.bind(null != (a = e.proxy_) ? a : e.target_));
        return (
          !1 === (null == (o = this.options_) ? void 0 : o.deep) ? Le.ref : Le
        ).extend_(e, t, n, r);
      }
      function we(e, t) {
        r("'" + this.annotationType_ + "' cannot be used as a decorator");
      }
      var Oe = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
      function Se(e) {
        return e || Oe;
      }
      Object.freeze(Oe);
      var Ae = pe("observable"),
        Ee = pe("observable.ref", { enhancer: X }),
        xe = pe("observable.shallow", {
          enhancer: function (e, t, n) {
            return null == e || er(e) || Bn(e) || qn(e) || zn(e)
              ? e
              : Array.isArray(e)
                ? Le.array(e, { name: n, deep: !1 })
                : y(e)
                  ? Le.object(e, void 0, { name: n, deep: !1 })
                  : E(e)
                    ? Le.map(e, { name: n, deep: !1 })
                    : x(e)
                      ? Le.set(e, { name: n, deep: !1 })
                      : void 0;
          },
        }),
        ke = pe("observable.struct", {
          enhancer: function (e, t) {
            return gr(e, t) ? t : e;
          },
        }),
        Te = H(Ae);
      function je(e) {
        return !0 === e.deep
          ? Y
          : !1 === e.deep
            ? X
            : (t = e.defaultDecorator) &&
                null != (n = null == (r = t.options_) ? void 0 : r.enhancer)
              ? n
              : Y;
        var t, n, r;
      }
      function Ce(e, t, n) {
        return F(t)
          ? Ae.decorate_20223_(e, t)
          : m(t)
            ? void W(e, t, Ae)
            : fn(e)
              ? e
              : y(e)
                ? Le.object(e, t, n)
                : Array.isArray(e)
                  ? Le.array(e, t)
                  : E(e)
                    ? Le.map(e, t)
                    : x(e)
                      ? Le.set(e, t)
                      : "object" == typeof e && null !== e
                        ? e
                        : Le.box(e, t);
      }
      a(Ce, Te);
      var Pe,
        De,
        Le = a(Ce, {
          box: function (e, t) {
            var n = Se(t);
            return new ze(e, je(n), n.name, !0, n.equals);
          },
          array: function (e, t) {
            var n = Se(t);
            return (!1 === _t.useProxies || !1 === n.proxy ? dr : Dn)(
              e,
              je(n),
              n.name,
            );
          },
          map: function (e, t) {
            var n = Se(t);
            return new Fn(e, je(n), n.name);
          },
          set: function (e, t) {
            var n = Se(t);
            return new Gn(e, je(n), n.name);
          },
          object: function (e, t, n) {
            return br(function () {
              return Zt(
                !1 === _t.useProxies || !1 === (null == n ? void 0 : n.proxy)
                  ? Jn({}, n)
                  : (function (e, t) {
                      var n, r;
                      return (
                        h(),
                        (e = Jn(e, t)),
                        null != (r = (n = e[q]).proxy_)
                          ? r
                          : (n.proxy_ = new Proxy(e, yn))
                      );
                    })({}, n),
                e,
                t,
              );
            });
          },
          ref: H(Ee),
          shallow: H(xe),
          deep: Te,
          struct: H(ke),
        }),
        Ne = "computed",
        Me = ue(Ne),
        Re = ue("computed.struct", { equals: $.structural }),
        Ve = function (e, t) {
          if (F(t)) return Me.decorate_20223_(e, t);
          if (m(t)) return W(e, t, Me);
          if (y(e)) return H(ue(Ne, e));
          var n = y(t) ? t : {};
          return (n.get = e), n.name || (n.name = e.name || ""), new Je(n);
        };
      Object.assign(Ve, Me), (Ve.struct = H(Re));
      var Ie = 0,
        Be = 1,
        Ue =
          null !=
            (Pe =
              null == (De = s(function () {}, "name"))
                ? void 0
                : De.configurable) && Pe,
        He = {
          value: "action",
          configurable: !0,
          writable: !1,
          enumerable: !1,
        };
      function We(e, t, n, r) {
        function i() {
          return Fe(e, n, t, r || this, arguments);
        }
        return (
          void 0 === n && (n = !1),
          (i.isMobxAction = !0),
          (i.toString = function () {
            return t.toString();
          }),
          Ue && ((He.value = e), u(i, "name", He)),
          i
        );
      }
      function Fe(e, t, n, i, o) {
        var a = (function (e, t) {
          var n = !1,
            r = 0;
          0;
          var i = _t.trackingDerivation,
            o = !t || !i;
          yt();
          var a = _t.allowStateChanges;
          o && (ut(), (a = Ke(!0)));
          var s = lt(!0),
            u = {
              runAsAction_: o,
              prevDerivation_: i,
              prevAllowStateChanges_: a,
              prevAllowStateReads_: s,
              notifySpy_: n,
              startTime_: r,
              actionId_: Be++,
              parentActionId_: Ie,
            };
          return (Ie = u.actionId_), u;
        })(0, t);
        try {
          return n.apply(i, o);
        } catch (e) {
          throw ((a.error_ = e), e);
        } finally {
          !(function (e) {
            Ie !== e.actionId_ && r(30);
            (Ie = e.parentActionId_),
              void 0 !== e.error_ && (_t.suppressReactionErrors = !0);
            Ge(e.prevAllowStateChanges_),
              ft(e.prevAllowStateReads_),
              wt(),
              e.runAsAction_ && ct(e.prevDerivation_);
            0;
            _t.suppressReactionErrors = !1;
          })(a);
        }
      }
      function qe(e, t) {
        var n = Ke(e);
        try {
          return t();
        } finally {
          Ge(n);
        }
      }
      function Ke(e) {
        var t = _t.allowStateChanges;
        return (_t.allowStateChanges = e), t;
      }
      function Ge(e) {
        _t.allowStateChanges = e;
      }
      var ze = (function (e) {
          function t(t, n, r, i, o) {
            var a;
            return (
              void 0 === r && (r = "ObservableValue"),
              void 0 === i && (i = !0),
              void 0 === o && (o = $.default),
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
          V(t, e);
          var n = t.prototype;
          return (
            (n.dehanceValue = function (e) {
              return void 0 !== this.dehancer ? this.dehancer(e) : e;
            }),
            (n.set = function (e) {
              this.value_;
              if ((e = this.prepareNewValue_(e)) !== _t.UNCHANGED) {
                0, this.setNewValue_(e);
              }
            }),
            (n.prepareNewValue_ = function (e) {
              if ((it(this), wn(this))) {
                var t = Sn(this, { object: this, type: jn, newValue: e });
                if (!t) return _t.UNCHANGED;
                e = t.newValue;
              }
              return (
                (e = this.enhancer(e, this.value_, this.name_)),
                this.equals(this.value_, e) ? _t.UNCHANGED : e
              );
            }),
            (n.setNewValue_ = function (e) {
              var t = this.value_;
              (this.value_ = e),
                this.reportChanged(),
                An(this) &&
                  xn(this, {
                    type: jn,
                    object: this,
                    newValue: e,
                    oldValue: t,
                  });
            }),
            (n.get = function () {
              return this.reportObserved(), this.dehanceValue(this.value_);
            }),
            (n.intercept_ = function (e) {
              return On(this, e);
            }),
            (n.observe_ = function (e, t) {
              return (
                t &&
                  e({
                    observableKind: "value",
                    debugObjectName: this.name_,
                    object: this,
                    type: jn,
                    newValue: this.value_,
                    oldValue: void 0,
                  }),
                En(this, e)
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
              return j(this.get());
            }),
            (n[Symbol.toPrimitive] = function () {
              return this.valueOf();
            }),
            t
          );
        })(K),
        $e = A("ObservableValue", ze);
      function Ye(e, t) {
        return !!(e & t);
      }
      function Xe(e, t, n) {
        return n ? (e |= t) : (e &= ~t), e;
      }
      var Je = (function () {
        function e(e) {
          (this.dependenciesState_ = Qe.NOT_TRACKING_),
            (this.observing_ = []),
            (this.newObserving_ = null),
            (this.observers_ = new Set()),
            (this.diffValue_ = 0),
            (this.runId_ = 0),
            (this.lastAccessedBy_ = 0),
            (this.lowestObserverState_ = Qe.UP_TO_DATE_),
            (this.unboundDepsCount_ = 0),
            (this.value_ = new tt(null)),
            (this.name_ = void 0),
            (this.triggeredBy_ = void 0),
            (this.flags_ = 0),
            (this.derivation = void 0),
            (this.setter_ = void 0),
            (this.isTracing_ = Ze.NONE),
            (this.scope_ = void 0),
            (this.equals_ = void 0),
            (this.requiresReaction_ = void 0),
            (this.keepAlive_ = void 0),
            (this.onBOL = void 0),
            (this.onBUOL = void 0),
            e.get || r(31),
            (this.derivation = e.get),
            (this.name_ = e.name || "ComputedValue"),
            e.set && (this.setter_ = We("ComputedValue-setter", e.set)),
            (this.equals_ =
              e.equals ||
              (e.compareStructural || e.struct ? $.structural : $.default)),
            (this.scope_ = e.context),
            (this.requiresReaction_ = e.requiresReaction),
            (this.keepAlive_ = !!e.keepAlive);
        }
        var t = e.prototype;
        return (
          (t.onBecomeStale_ = function () {
            !(function (e) {
              if (e.lowestObserverState_ !== Qe.UP_TO_DATE_) return;
              (e.lowestObserverState_ = Qe.POSSIBLY_STALE_),
                e.observers_.forEach(function (e) {
                  e.dependenciesState_ === Qe.UP_TO_DATE_ &&
                    ((e.dependenciesState_ = Qe.POSSIBLY_STALE_),
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
              0 !== _t.inBatch || 0 !== this.observers_.size || this.keepAlive_)
            ) {
              if ((Ot(this), rt(this))) {
                var e = _t.trackingContext;
                this.keepAlive_ && !e && (_t.trackingContext = this),
                  this.trackAndCompute() &&
                    (function (e) {
                      if (e.lowestObserverState_ === Qe.STALE_) return;
                      (e.lowestObserverState_ = Qe.STALE_),
                        e.observers_.forEach(function (t) {
                          t.dependenciesState_ === Qe.POSSIBLY_STALE_
                            ? (t.dependenciesState_ = Qe.STALE_)
                            : t.dependenciesState_ === Qe.UP_TO_DATE_ &&
                              (e.lowestObserverState_ = Qe.UP_TO_DATE_);
                        });
                    })(this),
                  (_t.trackingContext = e);
              }
            } else
              rt(this) &&
                (this.warnAboutUntrackedRead_(),
                yt(),
                (this.value_ = this.computeValue_(!1)),
                wt());
            var t = this.value_;
            if (nt(t)) throw t.cause;
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
              t = this.dependenciesState_ === Qe.NOT_TRACKING_,
              n = this.computeValue_(!0),
              r = t || nt(e) || nt(n) || !this.equals_(e, n);
            return r && (this.value_ = n), r;
          }),
          (t.computeValue_ = function (e) {
            this.isComputing = !0;
            var t,
              n = Ke(!1);
            if (e) t = ot(this, this.derivation, this.scope_);
            else if (!0 === _t.disableErrorBoundaries)
              t = this.derivation.call(this.scope_);
            else
              try {
                t = this.derivation.call(this.scope_);
              } catch (e) {
                t = new tt(e);
              }
            return Ge(n), (this.isComputing = !1), t;
          }),
          (t.suspend_ = function () {
            this.keepAlive_ || (at(this), (this.value_ = void 0));
          }),
          (t.observe_ = function (e, t) {
            var n = this,
              r = !0,
              i = void 0;
            return Wt(function () {
              var o = n.get();
              if (!r || t) {
                var a = ut();
                e({
                  observableKind: "computed",
                  debugObjectName: n.name_,
                  type: jn,
                  object: n,
                  newValue: o,
                  oldValue: i,
                }),
                  ct(a);
              }
              (r = !1), (i = o);
            });
          }),
          (t.warnAboutUntrackedRead_ = function () {}),
          (t.toString = function () {
            return this.name_ + "[" + this.derivation.toString() + "]";
          }),
          (t.valueOf = function () {
            return j(this.get());
          }),
          (t[Symbol.toPrimitive] = function () {
            return this.valueOf();
          }),
          N(e, [
            {
              key: "isComputing",
              get: function () {
                return Ye(this.flags_, e.isComputingMask_);
              },
              set: function (t) {
                this.flags_ = Xe(this.flags_, e.isComputingMask_, t);
              },
            },
            {
              key: "isRunningSetter",
              get: function () {
                return Ye(this.flags_, e.isRunningSetterMask_);
              },
              set: function (t) {
                this.flags_ = Xe(this.flags_, e.isRunningSetterMask_, t);
              },
            },
            {
              key: "isBeingObserved",
              get: function () {
                return Ye(this.flags_, e.isBeingObservedMask_);
              },
              set: function (t) {
                this.flags_ = Xe(this.flags_, e.isBeingObservedMask_, t);
              },
            },
            {
              key: "isPendingUnobservation",
              get: function () {
                return Ye(this.flags_, e.isPendingUnobservationMask_);
              },
              set: function (t) {
                this.flags_ = Xe(this.flags_, e.isPendingUnobservationMask_, t);
              },
            },
          ])
        );
      })();
      (Je.isComputingMask_ = 1),
        (Je.isRunningSetterMask_ = 2),
        (Je.isBeingObservedMask_ = 4),
        (Je.isPendingUnobservationMask_ = 8);
      var Qe,
        Ze,
        et = A("ComputedValue", Je);
      !(function (e) {
        (e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
          (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
          (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
          (e[(e.STALE_ = 2)] = "STALE_");
      })(Qe || (Qe = {})),
        (function (e) {
          (e[(e.NONE = 0)] = "NONE"),
            (e[(e.LOG = 1)] = "LOG"),
            (e[(e.BREAK = 2)] = "BREAK");
        })(Ze || (Ze = {}));
      var tt = function (e) {
        (this.cause = void 0), (this.cause = e);
      };
      function nt(e) {
        return e instanceof tt;
      }
      function rt(e) {
        switch (e.dependenciesState_) {
          case Qe.UP_TO_DATE_:
            return !1;
          case Qe.NOT_TRACKING_:
          case Qe.STALE_:
            return !0;
          case Qe.POSSIBLY_STALE_:
            for (
              var t = lt(!0), n = ut(), r = e.observing_, i = r.length, o = 0;
              o < i;
              o++
            ) {
              var a = r[o];
              if (et(a)) {
                if (_t.disableErrorBoundaries) a.get();
                else
                  try {
                    a.get();
                  } catch (e) {
                    return ct(n), ft(t), !0;
                  }
                if (e.dependenciesState_ === Qe.STALE_) return ct(n), ft(t), !0;
              }
            }
            return pt(e), ct(n), ft(t), !1;
        }
      }
      function it(e) {}
      function ot(e, t, n) {
        var r = lt(!0);
        pt(e),
          (e.newObserving_ = new Array(
            0 === e.runId_ ? 100 : e.observing_.length,
          )),
          (e.unboundDepsCount_ = 0),
          (e.runId_ = ++_t.runId);
        var i,
          o = _t.trackingDerivation;
        if (
          ((_t.trackingDerivation = e),
          _t.inBatch++,
          !0 === _t.disableErrorBoundaries)
        )
          i = t.call(n);
        else
          try {
            i = t.call(n);
          } catch (e) {
            i = new tt(e);
          }
        return (
          _t.inBatch--,
          (_t.trackingDerivation = o),
          (function (e) {
            for (
              var t = e.observing_,
                n = (e.observing_ = e.newObserving_),
                r = Qe.UP_TO_DATE_,
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
              0 === u.diffValue_ && mt(u, e), (u.diffValue_ = 0);
            }
            for (; i--; ) {
              var c = n[i];
              1 === c.diffValue_ && ((c.diffValue_ = 0), bt(c, e));
            }
            r !== Qe.UP_TO_DATE_ &&
              ((e.dependenciesState_ = r), e.onBecomeStale_());
          })(e),
          ft(r),
          i
        );
      }
      function at(e) {
        var t = e.observing_;
        e.observing_ = [];
        for (var n = t.length; n--; ) mt(t[n], e);
        e.dependenciesState_ = Qe.NOT_TRACKING_;
      }
      function st(e) {
        var t = ut();
        try {
          return e();
        } finally {
          ct(t);
        }
      }
      function ut() {
        var e = _t.trackingDerivation;
        return (_t.trackingDerivation = null), e;
      }
      function ct(e) {
        _t.trackingDerivation = e;
      }
      function lt(e) {
        var t = _t.allowStateReads;
        return (_t.allowStateReads = e), t;
      }
      function ft(e) {
        _t.allowStateReads = e;
      }
      function pt(e) {
        if (e.dependenciesState_ !== Qe.UP_TO_DATE_) {
          e.dependenciesState_ = Qe.UP_TO_DATE_;
          for (var t = e.observing_, n = t.length; n--; )
            t[n].lowestObserverState_ = Qe.UP_TO_DATE_;
        }
      }
      var dt = function () {
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
        ht = !0,
        vt = !1,
        _t = (function () {
          var e = o();
          return (
            e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (ht = !1),
            e.__mobxGlobals &&
              e.__mobxGlobals.version !== new dt().version &&
              (ht = !1),
            ht
              ? e.__mobxGlobals
                ? ((e.__mobxInstanceCount += 1),
                  e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}),
                  e.__mobxGlobals)
                : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new dt()))
              : (setTimeout(function () {
                  vt || r(35);
                }, 1),
                new dt())
          );
        })();
      function bt(e, t) {
        e.observers_.add(t),
          e.lowestObserverState_ > t.dependenciesState_ &&
            (e.lowestObserverState_ = t.dependenciesState_);
      }
      function mt(e, t) {
        e.observers_.delete(t), 0 === e.observers_.size && gt(e);
      }
      function gt(e) {
        !1 === e.isPendingUnobservation &&
          ((e.isPendingUnobservation = !0), _t.pendingUnobservations.push(e));
      }
      function yt() {
        _t.inBatch++;
      }
      function wt() {
        if (0 === --_t.inBatch) {
          kt();
          for (var e = _t.pendingUnobservations, t = 0; t < e.length; t++) {
            var n = e[t];
            (n.isPendingUnobservation = !1),
              0 === n.observers_.size &&
                (n.isBeingObserved && ((n.isBeingObserved = !1), n.onBUO()),
                n instanceof Je && n.suspend_());
          }
          _t.pendingUnobservations = [];
        }
      }
      function Ot(e) {
        var t = _t.trackingDerivation;
        return null !== t
          ? (t.runId_ !== e.lastAccessedBy_ &&
              ((e.lastAccessedBy_ = t.runId_),
              (t.newObserving_[t.unboundDepsCount_++] = e),
              !e.isBeingObserved &&
                _t.trackingContext &&
                ((e.isBeingObserved = !0), e.onBO())),
            e.isBeingObserved)
          : (0 === e.observers_.size && _t.inBatch > 0 && gt(e), !1);
      }
      function St(e) {
        e.lowestObserverState_ !== Qe.STALE_ &&
          ((e.lowestObserverState_ = Qe.STALE_),
          e.observers_.forEach(function (e) {
            e.dependenciesState_ === Qe.UP_TO_DATE_ && e.onBecomeStale_(),
              (e.dependenciesState_ = Qe.STALE_);
          }));
      }
      var At = (function () {
        function e(e, t, n, r) {
          void 0 === e && (e = "Reaction"),
            (this.name_ = void 0),
            (this.onInvalidate_ = void 0),
            (this.errorHandler_ = void 0),
            (this.requiresObservable_ = void 0),
            (this.observing_ = []),
            (this.newObserving_ = []),
            (this.dependenciesState_ = Qe.NOT_TRACKING_),
            (this.diffValue_ = 0),
            (this.runId_ = 0),
            (this.unboundDepsCount_ = 0),
            (this.isDisposed_ = !1),
            (this.isScheduled_ = !1),
            (this.isTrackPending_ = !1),
            (this.isRunning_ = !1),
            (this.isTracing_ = Ze.NONE),
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
              ((this.isScheduled_ = !0), _t.pendingReactions.push(this), kt());
          }),
          (t.isScheduled = function () {
            return this.isScheduled_;
          }),
          (t.runReaction_ = function () {
            if (!this.isDisposed_) {
              yt(), (this.isScheduled_ = !1);
              var e = _t.trackingContext;
              if (((_t.trackingContext = this), rt(this))) {
                this.isTrackPending_ = !0;
                try {
                  this.onInvalidate_();
                } catch (e) {
                  this.reportExceptionInDerivation_(e);
                }
              }
              (_t.trackingContext = e), wt();
            }
          }),
          (t.track = function (e) {
            if (!this.isDisposed_) {
              yt();
              0, (this.isRunning_ = !0);
              var t = _t.trackingContext;
              _t.trackingContext = this;
              var n = ot(this, e, void 0);
              (_t.trackingContext = t),
                (this.isRunning_ = !1),
                (this.isTrackPending_ = !1),
                this.isDisposed_ && at(this),
                nt(n) && this.reportExceptionInDerivation_(n.cause),
                wt();
            }
          }),
          (t.reportExceptionInDerivation_ = function (e) {
            var t = this;
            if (this.errorHandler_) this.errorHandler_(e, this);
            else {
              if (_t.disableErrorBoundaries) throw e;
              var n = "[mobx] uncaught error in '" + this + "'";
              _t.suppressReactionErrors || console.error(n, e),
                _t.globalReactionErrorHandlers.forEach(function (n) {
                  return n(e, t);
                });
            }
          }),
          (t.dispose = function () {
            this.isDisposed_ ||
              ((this.isDisposed_ = !0),
              this.isRunning_ || (yt(), at(this), wt()));
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
              (n[q] = this),
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
      var Et = 100,
        xt = function (e) {
          return e();
        };
      function kt() {
        _t.inBatch > 0 || _t.isRunningReactions || xt(Tt);
      }
      function Tt() {
        _t.isRunningReactions = !0;
        for (var e = _t.pendingReactions, t = 0; e.length > 0; ) {
          ++t === Et &&
            (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
          for (var n = e.splice(0), r = 0, i = n.length; r < i; r++)
            n[r].runReaction_();
        }
        _t.isRunningReactions = !1;
      }
      var jt = A("Reaction", At);
      var Ct = "action",
        Pt = "autoAction",
        Dt = "<unnamed action>",
        Lt = Q(Ct),
        Nt = Q("action.bound", { bound: !0 }),
        Mt = Q(Pt, { autoAction: !0 }),
        Rt = Q("autoAction.bound", { autoAction: !0, bound: !0 });
      function Vt(e) {
        return function (t, n) {
          return b(t)
            ? We(t.name || Dt, t, e)
            : b(n)
              ? We(t, n, e)
              : F(n)
                ? (e ? Mt : Lt).decorate_20223_(t, n)
                : m(n)
                  ? W(t, n, e ? Mt : Lt)
                  : m(t)
                    ? H(Q(e ? Pt : Ct, { name: t, autoAction: e }))
                    : void 0;
        };
      }
      var It = Vt(!1);
      Object.assign(It, Lt);
      var Bt = Vt(!0);
      function Ut(e) {
        return Fe(e.name, !1, e, this, void 0);
      }
      function Ht(e) {
        return b(e) && !0 === e.isMobxAction;
      }
      function Wt(e, t) {
        var n, r, i, o;
        void 0 === t && (t = f);
        var a,
          s = null != (n = null == (r = t) ? void 0 : r.name) ? n : "Autorun";
        if (!t.scheduler && !t.delay)
          a = new At(
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
          a = new At(
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
      Object.assign(Bt, Mt), (It.bound = H(Nt)), (Bt.bound = H(Rt));
      var Ft = function (e) {
        return e();
      };
      function qt(e) {
        return e.scheduler
          ? e.scheduler
          : e.delay
            ? function (t) {
                return setTimeout(t, e.delay);
              }
            : Ft;
      }
      var Kt = "onBO",
        Gt = "onBUO";
      function zt(e, t, n) {
        return $t(Gt, e, t, n);
      }
      function $t(e, t, n, r) {
        var i = "function" == typeof r ? hr(t, n) : hr(t),
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
      var Yt = "never",
        Xt = "always",
        Jt = "observed";
      function Qt(e) {
        !0 === e.isolateGlobalState &&
          (function () {
            if (
              ((_t.pendingReactions.length ||
                _t.inBatch ||
                _t.isRunningReactions) &&
                r(36),
              (vt = !0),
              ht)
            ) {
              var e = o();
              0 === --e.__mobxInstanceCount && (e.__mobxGlobals = void 0),
                (_t = new dt());
            }
          })();
        var t,
          n,
          i = e.useProxies,
          a = e.enforceActions;
        if (
          (void 0 !== i &&
            (_t.useProxies =
              i === Xt || (i !== Yt && "undefined" != typeof Proxy)),
          "ifavailable" === i && (_t.verifyProxies = !0),
          void 0 !== a)
        ) {
          var s = a === Xt ? Xt : a === Jt;
          (_t.enforceActions = s),
            (_t.allowStateChanges = !0 !== s && s !== Xt);
        }
        [
          "computedRequiresReaction",
          "reactionRequiresObservable",
          "observableRequiresReaction",
          "disableErrorBoundaries",
          "safeDescriptors",
        ].forEach(function (t) {
          t in e && (_t[t] = !!e[t]);
        }),
          (_t.allowStateReads = !_t.observableRequiresReaction),
          e.reactionScheduler &&
            ((t = e.reactionScheduler),
            (n = xt),
            (xt = function (e) {
              return t(function () {
                return n(e);
              });
            }));
      }
      function Zt(e, t, n, r) {
        var i = P(t);
        return (
          br(function () {
            var t = Jn(e, r)[q];
            T(i).forEach(function (e) {
              t.extend_(e, i[e], !n || !(e in n) || n[e]);
            });
          }),
          e
        );
      }
      function en(e, t) {
        return tn(hr(e, t));
      }
      function tn(e) {
        var t,
          n = { name: e.name_ };
        return (
          e.observing_ &&
            e.observing_.length > 0 &&
            (n.dependencies = ((t = e.observing_), Array.from(new Set(t))).map(
              tn,
            )),
          n
        );
      }
      var nn = 0;
      function rn() {
        this.message = "FLOW_CANCELLED";
      }
      rn.prototype = Object.create(Error.prototype);
      var on = re("flow"),
        an = re("flow.bound", { bound: !0 }),
        sn = Object.assign(function (e, t) {
          if (F(t)) return on.decorate_20223_(e, t);
          if (m(t)) return W(e, t, on);
          var n = e,
            r = n.name || "<unnamed flow>",
            i = function () {
              var e,
                t = arguments,
                i = ++nn,
                o = It(r + " - runid: " + i + " - init", n).apply(this, t),
                a = void 0,
                s = new Promise(function (t, n) {
                  var s = 0;
                  function u(e) {
                    var t;
                    a = void 0;
                    try {
                      t = It(
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
                      t = It(
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
                (s.cancel = It(r + " - runid: " + i + " - cancel", function () {
                  try {
                    a && un(a);
                    var t = o.return(void 0),
                      n = Promise.resolve(t.value);
                    n.then(_, _), un(n), e(new rn());
                  } catch (t) {
                    e(t);
                  }
                })),
                s
              );
            };
          return (i.isMobXFlow = !0), i;
        }, on);
      function un(e) {
        b(e.cancel) && e.cancel();
      }
      function cn(e) {
        return !0 === (null == e ? void 0 : e.isMobXFlow);
      }
      function ln(e, t) {
        return (
          !!e &&
          (void 0 !== t
            ? !!er(e) && e[q].values_.has(t)
            : er(e) || !!e[q] || G(e) || jt(e) || et(e))
        );
      }
      function fn(e) {
        return ln(e);
      }
      function pn(e, t, n, r) {
        return b(n)
          ? (function (e, t, n, r) {
              return vr(e, t).observe_(n, r);
            })(e, t, n, r)
          : (function (e, t, n) {
              return vr(e).observe_(t, n);
            })(e, t, n);
      }
      function dn(e, t, n) {
        return e.set(t, n), n;
      }
      function hn(e, t) {
        if (null == e || "object" != typeof e || e instanceof Date || !fn(e))
          return e;
        if ($e(e) || et(e)) return hn(e.get(), t);
        if (t.has(e)) return t.get(e);
        if (Bn(e)) {
          var n = dn(t, e, new Array(e.length));
          return (
            e.forEach(function (e, r) {
              n[r] = hn(e, t);
            }),
            n
          );
        }
        if (zn(e)) {
          var i = dn(t, e, new Set());
          return (
            e.forEach(function (e) {
              i.add(hn(e, t));
            }),
            i
          );
        }
        if (qn(e)) {
          var o = dn(t, e, new Map());
          return (
            e.forEach(function (e, n) {
              o.set(n, hn(e, t));
            }),
            o
          );
        }
        var a = dn(t, e, {});
        return (
          (function (e) {
            if (er(e)) return e[q].ownKeys_();
            r(38);
          })(e).forEach(function (n) {
            c.propertyIsEnumerable.call(e, n) && (a[n] = hn(e[n], t));
          }),
          a
        );
      }
      function vn(e, t) {
        return hn(e, new Map());
      }
      function _n(e, t) {
        void 0 === t && (t = void 0), yt();
        try {
          return e.apply(t);
        } finally {
          wt();
        }
      }
      function bn(e, t, n) {
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
                  s = mn(e, n, R({}, t, { onError: o }));
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
          : mn(e, t, n || {});
      }
      function mn(e, t, n) {
        var r;
        if ("number" == typeof n.timeout) {
          var i = new Error("WHEN_TIMEOUT");
          r = setTimeout(function () {
            if (!a[q].isDisposed_) {
              if ((a(), !n.onError)) throw i;
              n.onError(i);
            }
          }, n.timeout);
        }
        n.name = "When";
        var o = We("When-effect", t),
          a = Wt(function (t) {
            qe(!1, e) && (t.dispose(), r && clearTimeout(r), o());
          }, n);
        return a;
      }
      function gn(e) {
        return e[q];
      }
      sn.bound = H(an);
      var yn = {
        has: function (e, t) {
          return gn(e).has_(t);
        },
        get: function (e, t) {
          return gn(e).get_(t);
        },
        set: function (e, t, n) {
          var r;
          return !!m(t) && (null == (r = gn(e).set_(t, n, !0)) || r);
        },
        deleteProperty: function (e, t) {
          var n;
          return !!m(t) && (null == (n = gn(e).delete_(t, !0)) || n);
        },
        defineProperty: function (e, t, n) {
          var r;
          return null == (r = gn(e).defineProperty_(t, n)) || r;
        },
        ownKeys: function (e) {
          return gn(e).ownKeys_();
        },
        preventExtensions: function (e) {
          r(13);
        },
      };
      function wn(e) {
        return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
      }
      function On(e, t) {
        var n = e.interceptors_ || (e.interceptors_ = []);
        return (
          n.push(t),
          v(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
          })
        );
      }
      function Sn(e, t) {
        var n = ut();
        try {
          for (
            var i = [].concat(e.interceptors_ || []), o = 0, a = i.length;
            o < a && ((t = i[o](t)) && !t.type && r(14), t);
            o++
          );
          return t;
        } finally {
          ct(n);
        }
      }
      function An(e) {
        return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
      }
      function En(e, t) {
        var n = e.changeListeners_ || (e.changeListeners_ = []);
        return (
          n.push(t),
          v(function () {
            var e = n.indexOf(t);
            -1 !== e && n.splice(e, 1);
          })
        );
      }
      function xn(e, t) {
        var n = ut(),
          r = e.changeListeners_;
        if (r) {
          for (var i = 0, o = (r = r.slice()).length; i < o; i++) r[i](t);
          ct(n);
        }
      }
      function kn(e, t, n) {
        return (
          br(function () {
            var r = Jn(e, n)[q];
            null != t ||
              (t = (function (e) {
                return C(e, U) || O(e, U, R({}, e[U])), e[U];
              })(e)),
              T(t).forEach(function (e) {
                return r.make_(e, t[e]);
              });
          }),
          e
        );
      }
      var Tn = "splice",
        jn = "update",
        Cn = {
          get: function (e, t) {
            var n = e[q];
            return t === q
              ? n
              : "length" === t
                ? n.getArrayLength_()
                : "string" != typeof t || isNaN(t)
                  ? C(Ln, t)
                    ? Ln[t]
                    : e[t]
                  : n.get_(parseInt(t));
          },
          set: function (e, t, n) {
            var r = e[q];
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
        Pn = (function () {
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
              (this.atom_ = new K(e)),
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
              return On(this, e);
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
                En(this, e)
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
                this.legacyMode_ && t > 0 && pr(e + t + 1);
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
                wn(this))
              ) {
                var o = Sn(this, {
                  object: this.proxy_,
                  type: Tn,
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
                i = An(this),
                o =
                  i || r
                    ? {
                        observableKind: "array",
                        object: this.proxy_,
                        type: jn,
                        debugObjectName: this.atom_.name_,
                        index: e,
                        newValue: t,
                        oldValue: n,
                      }
                    : null;
              this.atom_.reportChanged(), i && xn(this, o);
            }),
            (t.notifyArraySplice_ = function (e, t, n) {
              var r = !this.owned_ && !1,
                i = An(this),
                o =
                  i || r
                    ? {
                        observableKind: "array",
                        object: this.proxy_,
                        debugObjectName: this.atom_.name_,
                        type: Tn,
                        index: e,
                        removed: n,
                        added: t,
                        removedCount: n.length,
                        addedCount: t.length,
                      }
                    : null;
              this.atom_.reportChanged(), i && xn(this, o);
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
                if (wn(this)) {
                  var o = Sn(this, {
                    type: jn,
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
      function Dn(e, t, n, r) {
        return (
          void 0 === n && (n = "ObservableArray"),
          void 0 === r && (r = !1),
          h(),
          br(function () {
            var i = new Pn(n, t, r, !1);
            S(i.values_, q, i);
            var o = new Proxy(i.values_, Cn);
            return (
              (i.proxy_ = o), e && e.length && i.spliceWithArray_(0, 0, e), o
            );
          })
        );
      }
      var Ln = {
        clear: function () {
          return this.splice(0);
        },
        replace: function (e) {
          var t = this[q];
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
          var o = this[q];
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
          return this[q].spliceWithArray_(e, t, n);
        },
        push: function () {
          for (
            var e = this[q], t = arguments.length, n = new Array(t), r = 0;
            r < t;
            r++
          )
            n[r] = arguments[r];
          return e.spliceWithArray_(e.values_.length, 0, n), e.values_.length;
        },
        pop: function () {
          return this.splice(Math.max(this[q].values_.length - 1, 0), 1)[0];
        },
        shift: function () {
          return this.splice(0, 1)[0];
        },
        unshift: function () {
          for (
            var e = this[q], t = arguments.length, n = new Array(t), r = 0;
            r < t;
            r++
          )
            n[r] = arguments[r];
          return e.spliceWithArray_(0, 0, n), e.values_.length;
        },
        reverse: function () {
          return (
            _t.trackingDerivation && r(37, "reverse"),
            this.replace(this.slice().reverse()),
            this
          );
        },
        sort: function () {
          _t.trackingDerivation && r(37, "sort");
          var e = this.slice();
          return e.sort.apply(e, arguments), this.replace(e), this;
        },
        remove: function (e) {
          var t = this[q],
            n = t.dehanceValues_(t.values_).indexOf(e);
          return n > -1 && (this.splice(n, 1), !0);
        },
      };
      function Nn(e, t) {
        "function" == typeof Array.prototype[e] && (Ln[e] = t(e));
      }
      function Mn(e) {
        return function () {
          var t = this[q];
          t.atom_.reportObserved();
          var n = t.dehanceValues_(t.values_);
          return n[e].apply(n, arguments);
        };
      }
      function Rn(e) {
        return function (t, n) {
          var r = this,
            i = this[q];
          return (
            i.atom_.reportObserved(),
            i.dehanceValues_(i.values_)[e](function (e, i) {
              return t.call(n, e, i, r);
            })
          );
        };
      }
      function Vn(e) {
        return function () {
          var t = this,
            n = this[q];
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
      Nn("at", Mn),
        Nn("concat", Mn),
        Nn("flat", Mn),
        Nn("includes", Mn),
        Nn("indexOf", Mn),
        Nn("join", Mn),
        Nn("lastIndexOf", Mn),
        Nn("slice", Mn),
        Nn("toString", Mn),
        Nn("toLocaleString", Mn),
        Nn("toSorted", Mn),
        Nn("toSpliced", Mn),
        Nn("with", Mn),
        Nn("every", Rn),
        Nn("filter", Rn),
        Nn("find", Rn),
        Nn("findIndex", Rn),
        Nn("findLast", Rn),
        Nn("findLastIndex", Rn),
        Nn("flatMap", Rn),
        Nn("forEach", Rn),
        Nn("map", Rn),
        Nn("some", Rn),
        Nn("toReversed", Rn),
        Nn("reduce", Vn),
        Nn("reduceRight", Vn);
      var In = A("ObservableArrayAdministration", Pn);
      function Bn(e) {
        return g(e) && In(e[q]);
      }
      var Un = {},
        Hn = "add",
        Wn = "delete",
        Fn = (function () {
          function e(e, t, n) {
            var i = this;
            void 0 === t && (t = Y),
              void 0 === n && (n = "ObservableMap"),
              (this.enhancer_ = void 0),
              (this.name_ = void 0),
              (this[q] = Un),
              (this.data_ = void 0),
              (this.hasMap_ = void 0),
              (this.keysAtom_ = void 0),
              (this.interceptors_ = void 0),
              (this.changeListeners_ = void 0),
              (this.dehancer = void 0),
              (this.enhancer_ = t),
              (this.name_ = n),
              b(Map) || r(18),
              br(function () {
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
              if (!_t.trackingDerivation) return this.has_(e);
              var n = this.hasMap_.get(e);
              if (!n) {
                var r = (n = new ze(this.has_(e), X, "ObservableMap.key?", !1));
                this.hasMap_.set(e, r),
                  zt(r, function () {
                    return t.hasMap_.delete(e);
                  });
              }
              return n.get();
            }),
            (t.set = function (e, t) {
              var n = this.has_(e);
              if (wn(this)) {
                var r = Sn(this, {
                  type: n ? jn : Hn,
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
                (this.keysAtom_, wn(this)) &&
                !Sn(this, { type: Wn, object: this, name: e })
              )
                return !1;
              if (this.has_(e)) {
                var n = An(this),
                  r = n
                    ? {
                        observableKind: "map",
                        debugObjectName: this.name_,
                        type: Wn,
                        object: this,
                        oldValue: this.data_.get(e).value_,
                        name: e,
                      }
                    : null;
                return (
                  _n(function () {
                    var n;
                    t.keysAtom_.reportChanged(),
                      null == (n = t.hasMap_.get(e)) || n.setNewValue_(!1),
                      t.data_.get(e).setNewValue_(void 0),
                      t.data_.delete(e);
                  }),
                  n && xn(this, r),
                  !0
                );
              }
              return !1;
            }),
            (t.updateValue_ = function (e, t) {
              var n = this.data_.get(e);
              if ((t = n.prepareNewValue_(t)) !== _t.UNCHANGED) {
                var r = An(this),
                  i = r
                    ? {
                        observableKind: "map",
                        debugObjectName: this.name_,
                        type: jn,
                        object: this,
                        oldValue: n.value_,
                        name: e,
                        newValue: t,
                      }
                    : null;
                0, n.setNewValue_(t), r && xn(this, i);
              }
            }),
            (t.addValue_ = function (e, t) {
              var n = this;
              this.keysAtom_,
                _n(function () {
                  var r,
                    i = new ze(t, n.enhancer_, "ObservableMap.key", !1);
                  n.data_.set(e, i),
                    (t = i.value_),
                    null == (r = n.hasMap_.get(e)) || r.setNewValue_(!0),
                    n.keysAtom_.reportChanged();
                });
              var r = An(this),
                i = r
                  ? {
                      observableKind: "map",
                      debugObjectName: this.name_,
                      type: Hn,
                      object: this,
                      name: e,
                      newValue: t,
                    }
                  : null;
              r && xn(this, i);
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
              return Or({
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
              return Or({
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
              for (var n, r = M(this); !(n = r()).done; ) {
                var i = n.value,
                  o = i[0],
                  a = i[1];
                e.call(t, a, o, this);
              }
            }),
            (t.merge = function (e) {
              var t = this;
              return (
                qn(e) && (e = new Map(e)),
                _n(function () {
                  var n, i, o;
                  y(e)
                    ? (function (e) {
                        var t = Object.keys(e);
                        if (!k) return t;
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
                      : E(e)
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
              _n(function () {
                st(function () {
                  for (var t, n = M(e.keys()); !(t = n()).done; ) {
                    var r = t.value;
                    e.delete(r);
                  }
                });
              });
            }),
            (t.replace = function (e) {
              var t = this;
              return (
                _n(function () {
                  for (
                    var n,
                      i = (function (e) {
                        if (E(e) || qn(e)) return e;
                        if (Array.isArray(e)) return new Map(e);
                        if (y(e)) {
                          var t = new Map();
                          for (var n in e) t.set(n, e[n]);
                          return t;
                        }
                        return r(21, e);
                      })(e),
                      o = new Map(),
                      a = !1,
                      s = M(t.data_.keys());
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
                  for (var l, f = M(i.entries()); !(l = f()).done; ) {
                    var p = l.value,
                      d = p[0],
                      h = p[1],
                      v = t.data_.has(d);
                    if ((t.set(d, h), t.data_.has(d))) {
                      var _ = t.data_.get(d);
                      o.set(d, _), v || (a = !0);
                    }
                  }
                  if (!a)
                    if (t.data_.size !== o.size) t.keysAtom_.reportChanged();
                    else
                      for (
                        var b = t.data_.keys(),
                          m = o.keys(),
                          g = b.next(),
                          w = m.next();
                        !g.done;
                      ) {
                        if (g.value !== w.value) {
                          t.keysAtom_.reportChanged();
                          break;
                        }
                        (g = b.next()), (w = m.next());
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
              return En(this, e);
            }),
            (t.intercept_ = function (e) {
              return On(this, e);
            }),
            N(e, [
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
        qn = A("ObservableMap", Fn);
      var Kn = {},
        Gn = (function () {
          function e(e, t, n) {
            var i = this;
            void 0 === t && (t = Y),
              void 0 === n && (n = "ObservableSet"),
              (this.name_ = void 0),
              (this[q] = Kn),
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
              br(function () {
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
              _n(function () {
                st(function () {
                  for (var t, n = M(e.data_.values()); !(t = n()).done; ) {
                    var r = t.value;
                    e.delete(r);
                  }
                });
              });
            }),
            (t.forEach = function (e, t) {
              for (var n, r = M(this); !(n = r()).done; ) {
                var i = n.value;
                e.call(t, i, i, this);
              }
            }),
            (t.add = function (e) {
              var t = this;
              if (
                (this.atom_, wn(this)) &&
                !Sn(this, { type: Hn, object: this, newValue: e })
              )
                return this;
              if (!this.has(e)) {
                _n(function () {
                  t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged();
                });
                var n = !1,
                  r = An(this),
                  i = r
                    ? {
                        observableKind: "set",
                        debugObjectName: this.name_,
                        type: Hn,
                        object: this,
                        newValue: e,
                      }
                    : null;
                n, r && xn(this, i);
              }
              return this;
            }),
            (t.delete = function (e) {
              var t = this;
              if (
                wn(this) &&
                !Sn(this, { type: Wn, object: this, oldValue: e })
              )
                return !1;
              if (this.has(e)) {
                var n = An(this),
                  r = n
                    ? {
                        observableKind: "set",
                        debugObjectName: this.name_,
                        type: Wn,
                        object: this,
                        oldValue: e,
                      }
                    : null;
                return (
                  _n(function () {
                    t.atom_.reportChanged(), t.data_.delete(e);
                  }),
                  n && xn(this, r),
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
              return Or({
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
              return Or({
                next: function () {
                  return t < n.length
                    ? { value: e.dehanceValue_(n[t++]), done: !1 }
                    : { done: !0 };
                },
              });
            }),
            (t.intersection = function (e) {
              return x(e)
                ? e.intersection(this)
                : new Set(this).intersection(e);
            }),
            (t.union = function (e) {
              return x(e) ? e.union(this) : new Set(this).union(e);
            }),
            (t.difference = function (e) {
              return new Set(this).difference(e);
            }),
            (t.symmetricDifference = function (e) {
              return x(e)
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
              return x(e)
                ? e.isDisjointFrom(this)
                : new Set(this).isDisjointFrom(e);
            }),
            (t.replace = function (e) {
              var t = this;
              return (
                zn(e) && (e = new Set(e)),
                _n(function () {
                  Array.isArray(e) || x(e)
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
              return En(this, e);
            }),
            (t.intercept_ = function (e) {
              return On(this, e);
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
            N(e, [
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
        zn = A("ObservableSet", Gn),
        $n = Object.create(null),
        Yn = "remove",
        Xn = (function () {
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
              (this.keysAtom_ = new K("ObservableObject.keys")),
              (this.isPlainObject_ = y(this.target_));
          }
          var t = e.prototype;
          return (
            (t.getObservablePropValue_ = function (e) {
              return this.values_.get(e).get();
            }),
            (t.setObservablePropValue_ = function (e, t) {
              var n = this.values_.get(e);
              if (n instanceof Je) return n.set(t), !0;
              if (wn(this)) {
                var r = Sn(this, {
                  type: jn,
                  object: this.proxy_ || this.target_,
                  name: e,
                  newValue: t,
                });
                if (!r) return null;
                t = r.newValue;
              }
              if ((t = n.prepareNewValue_(t)) !== _t.UNCHANGED) {
                var i = An(this),
                  o = i
                    ? {
                        type: jn,
                        observableKind: "object",
                        debugObjectName: this.name_,
                        object: this.proxy_ || this.target_,
                        oldValue: n.value_,
                        name: e,
                        newValue: t,
                      }
                    : null;
                0, n.setNewValue_(t), i && xn(this, o);
              }
              return !0;
            }),
            (t.get_ = function (e) {
              return (
                _t.trackingDerivation && !C(this.target_, e) && this.has_(e),
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
              if (!_t.trackingDerivation) return e in this.target_;
              this.pendingKeys_ || (this.pendingKeys_ = new Map());
              var t = this.pendingKeys_.get(e);
              return (
                t ||
                  ((t = new ze(
                    e in this.target_,
                    X,
                    "ObservableObject.key?",
                    !1,
                  )),
                  this.pendingKeys_.set(e, t)),
                t.get()
              );
            }),
            (t.make_ = function (e, t) {
              if ((!0 === t && (t = this.defaultAnnotation_), !1 !== t)) {
                if ((nr(this, t, e), !(e in this.target_))) {
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
                tr(this, t, e);
              }
            }),
            (t.extend_ = function (e, t, n, r) {
              if (
                (void 0 === r && (r = !1),
                !0 === n && (n = this.defaultAnnotation_),
                !1 === n)
              )
                return this.defineProperty_(e, t, r);
              nr(this, n, e);
              var i = n.extend_(this, e, t, r);
              return i && tr(this, n, e), i;
            }),
            (t.defineProperty_ = function (e, t, n) {
              void 0 === n && (n = !1), this.keysAtom_;
              try {
                yt();
                var r = this.delete_(e);
                if (!r) return r;
                if (wn(this)) {
                  var i = Sn(this, {
                    object: this.proxy_ || this.target_,
                    name: e,
                    type: Hn,
                    newValue: t.value,
                  });
                  if (!i) return null;
                  var o = i.newValue;
                  t.value !== o && (t = R({}, t, { value: o }));
                }
                if (n) {
                  if (!Reflect.defineProperty(this.target_, e, t)) return !1;
                } else u(this.target_, e, t);
                this.notifyPropertyAddition_(e, t.value);
              } finally {
                wt();
              }
              return !0;
            }),
            (t.defineObservableProperty_ = function (e, t, n, r) {
              void 0 === r && (r = !1), this.keysAtom_;
              try {
                yt();
                var i = this.delete_(e);
                if (!i) return i;
                if (wn(this)) {
                  var o = Sn(this, {
                    object: this.proxy_ || this.target_,
                    name: e,
                    type: Hn,
                    newValue: t,
                  });
                  if (!o) return null;
                  t = o.newValue;
                }
                var a = Zn(e),
                  s = {
                    configurable: !_t.safeDescriptors || this.isPlainObject_,
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
                wt();
              }
              return !0;
            }),
            (t.defineComputedProperty_ = function (e, t, n) {
              void 0 === n && (n = !1), this.keysAtom_;
              try {
                yt();
                var r = this.delete_(e);
                if (!r) return r;
                if (wn(this))
                  if (
                    !Sn(this, {
                      object: this.proxy_ || this.target_,
                      name: e,
                      type: Hn,
                      newValue: void 0,
                    })
                  )
                    return null;
                t.name || (t.name = "ObservableObject.key"),
                  (t.context = this.proxy_ || this.target_);
                var i = Zn(e),
                  o = {
                    configurable: !_t.safeDescriptors || this.isPlainObject_,
                    enumerable: !1,
                    get: i.get,
                    set: i.set,
                  };
                if (n) {
                  if (!Reflect.defineProperty(this.target_, e, o)) return !1;
                } else u(this.target_, e, o);
                this.values_.set(e, new Je(t)),
                  this.notifyPropertyAddition_(e, void 0);
              } finally {
                wt();
              }
              return !0;
            }),
            (t.delete_ = function (e, t) {
              if (
                (void 0 === t && (t = !1), this.keysAtom_, !C(this.target_, e))
              )
                return !0;
              if (
                wn(this) &&
                !Sn(this, {
                  object: this.proxy_ || this.target_,
                  name: e,
                  type: Yn,
                })
              )
                return null;
              try {
                var n;
                yt();
                var r,
                  i = An(this),
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
                    St(o)),
                  this.keysAtom_.reportChanged(),
                  null == (n = this.pendingKeys_) ||
                    null == (n = n.get(e)) ||
                    n.set(e in this.target_),
                  i)
                ) {
                  var u = {
                    type: Yn,
                    observableKind: "object",
                    object: this.proxy_ || this.target_,
                    debugObjectName: this.name_,
                    oldValue: a,
                    name: e,
                  };
                  0, i && xn(this, u);
                }
              } finally {
                wt();
              }
              return !0;
            }),
            (t.observe_ = function (e, t) {
              return En(this, e);
            }),
            (t.intercept_ = function (e) {
              return On(this, e);
            }),
            (t.notifyPropertyAddition_ = function (e, t) {
              var n,
                r = An(this);
              if (r) {
                var i = r
                  ? {
                      type: Hn,
                      observableKind: "object",
                      debugObjectName: this.name_,
                      object: this.proxy_ || this.target_,
                      name: e,
                      newValue: t,
                    }
                  : null;
                0, r && xn(this, i);
              }
              null == (n = this.pendingKeys_) ||
                null == (n = n.get(e)) ||
                n.set(!0),
                this.keysAtom_.reportChanged();
            }),
            (t.ownKeys_ = function () {
              return this.keysAtom_.reportObserved(), T(this.target_);
            }),
            (t.keys_ = function () {
              return this.keysAtom_.reportObserved(), Object.keys(this.target_);
            }),
            e
          );
        })();
      function Jn(e, t) {
        var n;
        if (C(e, q)) return e;
        var r =
            null != (n = null == t ? void 0 : t.name) ? n : "ObservableObject",
          i = new Xn(
            e,
            new Map(),
            String(r),
            (function (e) {
              var t;
              return e
                ? null != (t = e.defaultDecorator)
                  ? t
                  : me(e)
                : void 0;
            })(t),
          );
        return O(e, q, i), e;
      }
      var Qn = A("ObservableObjectAdministration", Xn);
      function Zn(e) {
        return (
          $n[e] ||
          ($n[e] = {
            get: function () {
              return this[q].getObservablePropValue_(e);
            },
            set: function (t) {
              return this[q].setObservablePropValue_(e, t);
            },
          })
        );
      }
      function er(e) {
        return !!g(e) && Qn(e[q]);
      }
      function tr(e, t, n) {
        var r;
        null == (r = e.target_[U]) || delete r[n];
      }
      function nr(e, t, n) {}
      var rr,
        ir,
        or = lr(0),
        ar = (function () {
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
        sr = 0,
        ur = function () {};
      (rr = ur),
        (ir = Array.prototype),
        Object.setPrototypeOf
          ? Object.setPrototypeOf(rr.prototype, ir)
          : void 0 !== rr.prototype.__proto__
            ? (rr.prototype.__proto__ = ir)
            : (rr.prototype = ir);
      var cr = (function (e) {
        function t(t, n, r, i) {
          var o;
          return (
            void 0 === r && (r = "ObservableArray"),
            void 0 === i && (i = !1),
            (o = e.call(this) || this),
            br(function () {
              var e = new Pn(r, n, i, !0);
              (e.proxy_ = o),
                S(o, q, e),
                t && t.length && o.spliceWithArray(0, 0, t),
                ar && Object.defineProperty(o, "0", or);
            }),
            o
          );
        }
        V(t, e);
        var n = t.prototype;
        return (
          (n.concat = function () {
            this[q].atom_.reportObserved();
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return Array.prototype.concat.apply(
              this.slice(),
              t.map(function (e) {
                return Bn(e) ? e.slice() : e;
              }),
            );
          }),
          (n[Symbol.iterator] = function () {
            var e = this,
              t = 0;
            return Or({
              next: function () {
                return t < e.length
                  ? { value: e[t++], done: !1 }
                  : { done: !0, value: void 0 };
              },
            });
          }),
          N(t, [
            {
              key: "length",
              get: function () {
                return this[q].getArrayLength_();
              },
              set: function (e) {
                this[q].setArrayLength_(e);
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
      })(ur);
      function lr(e) {
        return {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return this[q].get_(e);
          },
          set: function (t) {
            this[q].set_(e, t);
          },
        };
      }
      function fr(e) {
        u(cr.prototype, "" + e, lr(e));
      }
      function pr(e) {
        if (e > sr) {
          for (var t = sr; t < e + 100; t++) fr(t);
          sr = e;
        }
      }
      function dr(e, t, n) {
        return new cr(e, t, n);
      }
      function hr(e, t) {
        if ("object" == typeof e && null !== e) {
          if (Bn(e)) return void 0 !== t && r(23), e[q].atom_;
          if (zn(e)) return e.atom_;
          if (qn(e)) {
            if (void 0 === t) return e.keysAtom_;
            var n = e.data_.get(t) || e.hasMap_.get(t);
            return n || r(25, t, _r(e)), n;
          }
          if (er(e)) {
            if (!t) return r(26);
            var i = e[q].values_.get(t);
            return i || r(27, t, _r(e)), i;
          }
          if (G(e) || et(e) || jt(e)) return e;
        } else if (b(e) && jt(e[q])) return e[q];
        r(28);
      }
      function vr(e, t) {
        return (
          e || r(29),
          void 0 !== t
            ? vr(hr(e, t))
            : G(e) || et(e) || jt(e) || qn(e) || zn(e)
              ? e
              : e[q]
                ? e[q]
                : void r(24, e)
        );
      }
      function _r(e, t) {
        var n;
        if (void 0 !== t) n = hr(e, t);
        else {
          if (Ht(e)) return e.name;
          n = er(e) || qn(e) || zn(e) ? vr(e) : hr(e);
        }
        return n.name_;
      }
      function br(e) {
        var t = ut(),
          n = Ke(!0);
        yt();
        try {
          return e();
        } finally {
          wt(), Ge(n), ct(t);
        }
      }
      Object.entries(Ln).forEach(function (e) {
        var t = e[0],
          n = e[1];
        "concat" !== t && O(cr.prototype, t, n);
      }),
        pr(1e3);
      var mr = c.toString;
      function gr(e, t, n) {
        return void 0 === n && (n = -1), yr(e, t, n);
      }
      function yr(e, t, n, r, i) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return !1;
        if (e != e) return t != t;
        var o = typeof e;
        if ("function" !== o && "object" !== o && "object" != typeof t)
          return !1;
        var a = mr.call(e);
        if (a !== mr.call(t)) return !1;
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
        (e = wr(e)), (t = wr(t));
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
          for (; l--; ) if (!yr(e[l], t[l], n - 1, r, i)) return !1;
        } else {
          var f,
            p = Object.keys(e);
          if (((l = p.length), Object.keys(t).length !== l)) return !1;
          for (; l--; )
            if (!C(t, (f = p[l])) || !yr(e[f], t[f], n - 1, r, i)) return !1;
        }
        return r.pop(), i.pop(), !0;
      }
      function wr(e) {
        return Bn(e)
          ? e.slice()
          : E(e) || qn(e) || x(e) || zn(e)
            ? Array.from(e.entries())
            : e;
      }
      function Or(e) {
        return (e[Symbol.iterator] = Sr), e;
      }
      function Sr() {
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
            extras: { getDebugName: _r },
            $mobx: q,
          });
    },
    2694: (e, t, n) => {
      "use strict";
      var r = n(6925);
      function i() {}
      function o() {}
      (o.resetWarningCache = i),
        (e.exports = function () {
          function e(e, t, n, i, o, a) {
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
            checkPropTypes: o,
            resetWarningCache: i,
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
            i = {},
            o = 0,
            a = n || ++t;
          (e.render = function () {
            return (o = 0), r.apply(e);
          }),
            (e.nextUniqueId = function () {
              return ++o, "id-" + a + "-" + o;
            }),
            (e.lastUniqueId = function () {
              return "id-" + a + "-" + o;
            }),
            (e.getUniqueId = function (e) {
              return (
                "string" != typeof e &&
                  (console.log(
                    "Warning: Expected string identifer passed to `getUniqueId`",
                  ),
                  (e = "" + e)),
                i[e] || (i[e] = "id-" + a + "-" + e),
                i[e]
              );
            });
        },
      };
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
        p = Symbol.for("react.lazy"),
        d = Symbol.iterator;
      var h = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        v = Object.assign,
        _ = {};
      function b(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = _),
          (this.updater = n || h);
      }
      function m() {}
      function g(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = _),
          (this.updater = n || h);
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
        (m.prototype = b.prototype);
      var y = (g.prototype = new m());
      (y.constructor = g), v(y, b.prototype), (y.isPureReactComponent = !0);
      var w = Array.isArray,
        O = Object.prototype.hasOwnProperty,
        S = { current: null },
        A = { key: !0, ref: !0, __self: !0, __source: !0 };
      function E(e, t, r) {
        var i,
          o = {},
          a = null,
          s = null;
        if (null != t)
          for (i in (void 0 !== t.ref && (s = t.ref),
          void 0 !== t.key && (a = "" + t.key),
          t))
            O.call(t, i) && !A.hasOwnProperty(i) && (o[i] = t[i]);
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
      function x(e) {
        return "object" == typeof e && null !== e && e.$$typeof === n;
      }
      var k = /\/+/g;
      function T(e, t) {
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
      function j(e, t, i, o, a) {
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
            (e = "" === o ? "." + T(u, 0) : o),
            w(a)
              ? ((i = ""),
                null != e && (i = e.replace(k, "$&/") + "/"),
                j(a, t, i, "", function (e) {
                  return e;
                }))
              : null != a &&
                (x(a) &&
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
                        : ("" + a.key).replace(k, "$&/") + "/") +
                      e,
                  )),
                t.push(a)),
            1
          );
        if (((u = 0), (o = "" === o ? "." : o + ":"), w(e)))
          for (var c = 0; c < e.length; c++) {
            var l = o + T((s = e[c]), c);
            u += j(s, t, i, l, a);
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
          for (e = l.call(e), c = 0; !(s = e.next()).done; )
            u += j((s = s.value), t, i, (l = o + T(s, c++)), a);
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
          j(e, r, "", "", function (e) {
            return t.call(n, e, i++);
          }),
          r
        );
      }
      function P(e) {
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
      var D = { current: null },
        L = { transition: null },
        N = {
          ReactCurrentDispatcher: D,
          ReactCurrentBatchConfig: L,
          ReactCurrentOwner: S,
        };
      function M() {
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
          if (!x(e))
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
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = N),
        (t.act = M),
        (t.cloneElement = function (e, t, r) {
          if (null == e)
            throw Error(
              "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                ".",
            );
          var i = v({}, e.props),
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
              O.call(t, c) &&
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
        (t.isValidElement = x),
        (t.lazy = function (e) {
          return {
            $$typeof: p,
            _payload: { _status: -1, _result: e },
            _init: P,
          };
        }),
        (t.memo = function (e, t) {
          return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
        }),
        (t.startTransition = function (e) {
          var t = L.transition;
          L.transition = {};
          try {
            e();
          } finally {
            L.transition = t;
          }
        }),
        (t.unstable_act = M),
        (t.useCallback = function (e, t) {
          return D.current.useCallback(e, t);
        }),
        (t.useContext = function (e) {
          return D.current.useContext(e);
        }),
        (t.useDebugValue = function () {}),
        (t.useDeferredValue = function (e) {
          return D.current.useDeferredValue(e);
        }),
        (t.useEffect = function (e, t) {
          return D.current.useEffect(e, t);
        }),
        (t.useId = function () {
          return D.current.useId();
        }),
        (t.useImperativeHandle = function (e, t, n) {
          return D.current.useImperativeHandle(e, t, n);
        }),
        (t.useInsertionEffect = function (e, t) {
          return D.current.useInsertionEffect(e, t);
        }),
        (t.useLayoutEffect = function (e, t) {
          return D.current.useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return D.current.useMemo(e, t);
        }),
        (t.useReducer = function (e, t, n) {
          return D.current.useReducer(e, t, n);
        }),
        (t.useRef = function (e) {
          return D.current.useRef(e);
        }),
        (t.useState = function (e) {
          return D.current.useState(e);
        }),
        (t.useSyncExternalStore = function (e, t, n) {
          return D.current.useSyncExternalStore(e, t, n);
        }),
        (t.useTransition = function () {
          return D.current.useTransition();
        }),
        (t.version = "18.3.1");
    },
    6540: (e, t, n) => {
      "use strict";
      e.exports = n(5287);
    },
    6725: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => h });
      var r = n(6540),
        i = n(5556),
        o = n.n(i),
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
      var l =
          "undefined" != typeof window &&
          window.navigator.userAgent.toLowerCase(),
        f = l && l.indexOf("msie 9.0") > 0,
        p = function (e) {
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
            i = e.width,
            o = e.height,
            a = e.measure,
            s = e.duration,
            u = e.customStyles,
            l = e.id,
            f = c(
              {},
              {
                width: i + a,
                height: o + a,
                animationDuration: s + "ms",
                WebkitAnimationDuration: s + "ms",
              },
              u,
            );
          return r.createElement(
            "div",
            { style: f, className: t, id: l },
            e.children,
            n,
          );
        },
        d = (function (e) {
          var t, n;
          function i() {
            for (
              var t, n = arguments.length, r = new Array(n), i = 0;
              i < n;
              i++
            )
              r[i] = arguments[i];
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
                  i = r.closeOnEsc,
                  o = r.onAnimationEnd;
                "leave" === n ? t.setState({ isShow: !1 }) : i && t.el.focus(),
                  e.target === t.el && o && o();
              }),
              t
            );
          }
          (n = e),
            ((t = i).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            u(t, n);
          var o = i.prototype;
          return (
            (o.componentDidMount = function () {
              this.props.visible && this.enter();
            }),
            (o.componentDidUpdate = function (e) {
              this.props.visible && !e.visible && this.enter(),
                !this.props.visible && e.visible && this.leave();
            }),
            (o.enter = function () {
              this.setState({ isShow: !0, animationType: "enter" });
            }),
            (o.leave = function () {
              this.setState(f ? { isShow: !1 } : { animationType: "leave" });
            }),
            (o.render = function () {
              var e = this,
                t = this.props,
                n = t.closeMaskOnClick,
                i = t.onClose,
                o = t.customMaskStyles,
                a = t.showMask,
                u = t.duration,
                l = t.className,
                f = t.children,
                d = this.state,
                h = d.isShow,
                v = d.animationType,
                _ = a
                  ? r.createElement("div", {
                      className: "rodal-mask",
                      style: o,
                      onClick: n ? i : void 0,
                    })
                  : null,
                b = {
                  display: h ? "" : "none",
                  animationDuration: u + "ms",
                  WebkitAnimationDuration: u + "ms",
                };
              return r.createElement(
                "div",
                {
                  style: b,
                  className: s()("rodal", "rodal-fade-" + v, l),
                  onAnimationEnd: this.animationEnd,
                  tabIndex: "-1",
                  ref: function (t) {
                    e.el = t;
                  },
                  onKeyUp: this.onKeyUp,
                },
                _,
                r.createElement(p, c({}, this.props, { animationType: v }), f),
              );
            }),
            i
          );
        })(r.Component);
      (d.propTypes = {
        width: o().number,
        height: o().number,
        measure: o().string,
        visible: o().bool,
        showMask: o().bool,
        closeOnEsc: o().bool,
        closeMaskOnClick: o().bool,
        showCloseButton: o().bool,
        animation: o().string,
        enterAnimation: o().string,
        leaveAnimation: o().string,
        duration: o().number,
        className: o().string,
        customStyles: o().object,
        customMaskStyles: o().object,
        onClose: o().func.isRequired,
        onAnimationEnd: o().func,
        id: o().string,
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
      const h = d;
    },
    8493: (e, t, n) => {
      "use strict";
      var r = n(6540);
      var i =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        o = r.useState,
        a = r.useEffect,
        s = r.useLayoutEffect,
        u = r.useDebugValue;
      function c(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !i(e, n);
        } catch (e) {
          return !0;
        }
      }
      var l =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var n = t(),
                r = o({ inst: { value: n, getSnapshot: t } }),
                i = r[0].inst,
                l = r[1];
              return (
                s(
                  function () {
                    (i.value = n), (i.getSnapshot = t), c(i) && l({ inst: i });
                  },
                  [e, n, t],
                ),
                a(
                  function () {
                    return (
                      c(i) && l({ inst: i }),
                      e(function () {
                        c(i) && l({ inst: i });
                      })
                    );
                  },
                  [e],
                ),
                u(n),
                n
              );
            };
      t.useSyncExternalStore =
        void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : l;
    },
    9888: (e, t, n) => {
      "use strict";
      e.exports = n(8493);
    },
    6942: (e, t) => {
      var n;
      !(function () {
        "use strict";
        var r = {}.hasOwnProperty;
        function i() {
          for (var e = "", t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            n && (e = a(e, o(n)));
          }
          return e;
        }
        function o(e) {
          if ("string" == typeof e || "number" == typeof e) return e;
          if ("object" != typeof e) return "";
          if (Array.isArray(e)) return i.apply(null, e);
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
          ? ((i.default = i), (e.exports = i))
          : void 0 ===
              (n = function () {
                return i;
              }.apply(t, [])) || (e.exports = n);
      })();
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/libraries/libraries~e59f90316.js.map
