var CLSTAMP = "10579910";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [705],
  {
    961: (e, t, n) => {
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
    7960: (e, t, n) => {
      var o,
        r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          },
        i = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })(),
        s = n(6540),
        l = (o = s) && o.__esModule ? o : { default: o };
      var a = {
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
          zIndex: -1,
          visibility: "hidden",
          pointerEvents: "none",
        },
        c = { position: "absolute", left: 0, top: 0, transition: "0s" };
      var f = (function (e) {
        function t(e, n) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          var o = (function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
          return (
            (o._expandRef = null),
            (o._shrinkRef = null),
            (o._node = null),
            (o._lastRect = {}),
            (o._handleScroll = o._handleScroll.bind(o)),
            (o._reflow = o._reflow.bind(o)),
            (o._handleRef = o._handleRef.bind(o)),
            (o._handleExpandRef = o._handleExpandRef.bind(o)),
            (o._handleShrinkRef = o._handleShrinkRef.bind(o)),
            o
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t,
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          i(t, null, [
            {
              key: "_handleScroll",
              value: function (e) {
                for (var n = t._scrollListeners.length, o = 0; o < n; o++)
                  t._scrollListeners[o].call(void 0, e);
              },
            },
            {
              key: "_handleResize",
              value: function (e) {
                for (var n = t._resizeListeners.length, o = 0; o < n; o++)
                  t._resizeListeners[o].call(void 0, e);
              },
            },
            {
              key: "addScrollListener",
              value: function (e) {
                0 === t._scrollListeners.length &&
                  document.addEventListener("scroll", t._handleScroll, !0);
                var n = !0;
                return (
                  t._scrollListeners.push(e),
                  function () {
                    n &&
                      ((n = !1),
                      t._scrollListeners.splice(
                        t._scrollListeners.indexOf(e),
                        1,
                      ),
                      0 === t._scrollListeners.length &&
                        document.removeEventListener(
                          "scroll",
                          t._handleScroll,
                          !0,
                        ));
                  }
                );
              },
            },
            {
              key: "addResizeListener",
              value: function (e) {
                0 === t._resizeListeners.length &&
                  window.addEventListener("resize", t._handleResize, !0);
                var n = !0;
                return (
                  t._resizeListeners.push(e),
                  function () {
                    n &&
                      ((n = !1),
                      t._resizeListeners.splice(
                        t._resizeListeners.indexOf(e),
                        1,
                      ),
                      0 === t._resizeListeners.length &&
                        window.removeEventListener(
                          "resize",
                          t._handleResize,
                          !0,
                        ));
                  }
                );
              },
            },
          ]),
          i(t, [
            {
              key: "componentDidMount",
              value: function () {
                this._reflow(),
                  (this._removeScroll = t.addScrollListener(
                    this._handleScroll,
                  )),
                  (this.props.onPosition || this.props.onReflow) &&
                    (this._removeResize = t.addResizeListener(this._reflow));
              },
            },
            {
              key: "componentWillReceiveProps",
              value: function (e) {
                (!e.onPosition && !e.onReflow) || this._removeResize
                  ? e.onPosition ||
                    e.onReflow ||
                    !this._removeResize ||
                    (this._removeResize(), (this._removeResize = null))
                  : (this._removeResize = t.addResizeListener(this._reflow));
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this._removeScroll &&
                  (this._removeScroll(), (this._removeScroll = null)),
                  this._removeResize &&
                    (this._removeResize(), (this._removeResize = null));
              },
            },
            {
              key: "_handleScroll",
              value: function (e) {
                (this.props.onPosition ||
                  this.props.onReflow ||
                  this.props.onResize) &&
                  (this._globalScollTarget(e.target) ||
                    this._refScrollTarget(e.target) ||
                    this._ancestorScollTarget(e.target)) &&
                  this._reflow();
              },
            },
            {
              key: "_globalScollTarget",
              value: function (e) {
                return (
                  (this.props.onPosition || this.props.onReflow) &&
                  (e === document ||
                    e === document.documentElement ||
                    e === document.body)
                );
              },
            },
            {
              key: "_refScrollTarget",
              value: function (e) {
                if (e === this._expandRef || e === this._shrinkRef) {
                  var t = e.offsetWidth,
                    n = e.offsetHeight;
                  if (t !== this._lastWidth || n !== this._lastHeight)
                    return (
                      (this._lastWidth = t),
                      (this._lastHeight = n),
                      this._reset(this._expandRef),
                      this._reset(this._shrinkRef),
                      !0
                    );
                }
                return !1;
              },
            },
            {
              key: "_ancestorScollTarget",
              value: function (e) {
                return (
                  (this.props.onPosition || this.props.onReflow) &&
                  this._node &&
                  (function (e, t) {
                    for (var n = e.parentNode; n; ) {
                      if (n === t) return !0;
                      n = n.parentNode;
                    }
                    return !1;
                  })(this._node, e)
                );
              },
            },
            {
              key: "_reflow",
              value: function () {
                if (this._node && this._node.parentNode instanceof Element) {
                  var e = this._node.parentNode.getBoundingClientRect(),
                    t =
                      e.width !== this._lastRect.width ||
                      e.height !== this._lastRect.height,
                    n =
                      e.top !== this._lastRect.top ||
                      e.left !== this._lastRect.left;
                  (this._lastRect = e),
                    t && this.props.onResize && this.props.onResize(e),
                    n && this.props.onPosition && this.props.onPosition(e),
                    (t || n) && this.props.onReflow && this.props.onReflow(e);
                }
              },
            },
            {
              key: "_reset",
              value: function (e) {
                e && ((e.scrollLeft = 1e5), (e.scrollTop = 1e5));
              },
            },
            {
              key: "_handleRef",
              value: function (e) {
                this._node = e;
              },
            },
            {
              key: "_handleExpandRef",
              value: function (e) {
                this._reset(e), (this._expandRef = e);
              },
            },
            {
              key: "_handleShrinkRef",
              value: function (e) {
                this._reset(e), (this._shrinkRef = e);
              },
            },
            {
              key: "render",
              value: function () {
                return this.props.onResize || this.props.onReflow
                  ? l.default.createElement(
                      "div",
                      { style: a, ref: this._handleRef },
                      l.default.createElement(
                        "div",
                        { ref: this._handleExpandRef, style: a },
                        l.default.createElement("div", {
                          style: r({}, c, { width: 1e5, height: 1e5 }),
                        }),
                      ),
                      l.default.createElement(
                        "div",
                        { ref: this._handleShrinkRef, style: a },
                        l.default.createElement("div", {
                          style: r({}, c, { width: "200%", height: "200%" }),
                        }),
                      ),
                    )
                  : l.default.createElement("noscript", {
                      ref: this._handleRef,
                    });
              },
            },
          ]),
          t
        );
      })(l.default.Component);
      (f.displayName = "ResizeObserver"),
        (f._scrollListeners = []),
        (f._resizeListeners = []),
        (t.A = f);
    },
    1635: (e, t, n) => {
      n.d(t, { Cg: () => r, Tt: () => o, sH: () => i });
      function o(e, t) {
        var n = {};
        for (var o in e)
          Object.prototype.hasOwnProperty.call(e, o) &&
            t.indexOf(o) < 0 &&
            (n[o] = e[o]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
            t.indexOf(o[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
              (n[o[r]] = e[o[r]]);
        }
        return n;
      }
      function r(e, t, n, o) {
        var r,
          i = arguments.length,
          s =
            i < 3
              ? t
              : null === o
                ? (o = Object.getOwnPropertyDescriptor(t, n))
                : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          s = Reflect.decorate(e, t, n, o);
        else
          for (var l = e.length - 1; l >= 0; l--)
            (r = e[l]) &&
              (s = (i < 3 ? r(s) : i > 3 ? r(t, n, s) : r(t, n)) || s);
        return i > 3 && s && Object.defineProperty(t, n, s), s;
      }
      function i(e, t, n, o) {
        return new (n || (n = Promise))(function (r, i) {
          function s(e) {
            try {
              a(o.next(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            try {
              a(o.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function a(e) {
            var t;
            e.done
              ? r(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(s, l);
          }
          a((o = o.apply(e, t || [])).next());
        });
      }
      Object.create;
      Object.create;
      "function" == typeof SuppressedError && SuppressedError;
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/libraries/libraries~6b9c0374a.js.map
