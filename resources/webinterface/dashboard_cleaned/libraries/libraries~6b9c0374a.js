var CLSTAMP = "steamdb";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [705],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      !(function _() {
        if (
          "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        )
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_);
          } catch (_) {
            console.error(_);
          }
      })(),
        (module.exports = __webpack_require__("chunkid"));
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      var _,
        _ =
          Object.assign ||
          function (_) {
            for (var _ = 1; _ < arguments.length; _++) {
              var _ = arguments[_];
              for (var _ in _)
                Object.prototype.hasOwnProperty.call(_, _) && (_[_] = _[_]);
            }
            return _;
          },
        _ = (function () {
          function _(_, _) {
            for (var _ = 0; _ < _.length; _++) {
              var _ = _[_];
              (_.enumerable = _.enumerable || !1),
                (_.configurable = !0),
                "value" in _ && (_.writable = !0),
                Object.defineProperty(_, _.key, _);
            }
          }
          return function (_, _, _) {
            return _ && _(_.prototype, _), _ && _(_, _), _;
          };
        })(),
        _ = __webpack_require__("chunkid"),
        _ =
          (_ = _) && _.__esModule
            ? _
            : {
                default: _,
              };
      var _ = {
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
        _ = {
          position: "absolute",
          left: 0,
          top: 0,
          transition: "0s",
        };
      var _ = (function (_) {
        function _(_, _) {
          !(function (_, _) {
            if (!(_ instanceof _))
              throw new TypeError("Cannot call a class as a function");
          })(this, _);
          var _ = (function (_, _) {
            if (!_)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return !_ || ("object" != typeof _ && "function" != typeof _)
              ? _
              : _;
          })(this, (_.__proto__ || Object.getPrototypeOf(_)).call(this, _, _));
          return (
            (_._expandRef = null),
            (_._shrinkRef = null),
            (_._node = null),
            (_._lastRect = {}),
            (_._handleScroll = _._handleScroll.bind(_)),
            (_._reflow = _._reflow.bind(_)),
            (_._handleRef = _._handleRef.bind(_)),
            (_._handleExpandRef = _._handleExpandRef.bind(_)),
            (_._handleShrinkRef = _._handleShrinkRef.bind(_)),
            _
          );
        }
        return (
          (function (_, _) {
            if ("function" != typeof _ && null !== _)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof _,
              );
            (_.prototype = Object.create(_ && _.prototype, {
              constructor: {
                value: _,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              _ &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(_, _)
                  : (_.__proto__ = _));
          })(_, _),
          _(_, null, [
            {
              key: "_handleScroll",
              value: function (_) {
                for (var _ = _._scrollListeners.length, _ = 0; _ < _; _++)
                  _._scrollListeners[_].call(void 0, _);
              },
            },
            {
              key: "_handleResize",
              value: function (_) {
                for (var _ = _._resizeListeners.length, _ = 0; _ < _; _++)
                  _._resizeListeners[_].call(void 0, _);
              },
            },
            {
              key: "addScrollListener",
              value: function (_) {
                0 === _._scrollListeners.length &&
                  document.addEventListener("scroll", _._handleScroll, !0);
                var _ = !0;
                return (
                  _._scrollListeners.push(_),
                  function () {
                    _ &&
                      ((_ = !1),
                      _._scrollListeners.splice(
                        _._scrollListeners.indexOf(_),
                        1,
                      ),
                      0 === _._scrollListeners.length &&
                        document.removeEventListener(
                          "scroll",
                          _._handleScroll,
                          !0,
                        ));
                  }
                );
              },
            },
            {
              key: "addResizeListener",
              value: function (_) {
                0 === _._resizeListeners.length &&
                  window.addEventListener("resize", _._handleResize, !0);
                var _ = !0;
                return (
                  _._resizeListeners.push(_),
                  function () {
                    _ &&
                      ((_ = !1),
                      _._resizeListeners.splice(
                        _._resizeListeners.indexOf(_),
                        1,
                      ),
                      0 === _._resizeListeners.length &&
                        window.removeEventListener(
                          "resize",
                          _._handleResize,
                          !0,
                        ));
                  }
                );
              },
            },
          ]),
          _(_, [
            {
              key: "componentDidMount",
              value: function () {
                this._reflow(),
                  (this._removeScroll = _.addScrollListener(
                    this._handleScroll,
                  )),
                  (this.props.onPosition || this.props.onReflow) &&
                    (this._removeResize = _.addResizeListener(this._reflow));
              },
            },
            {
              key: "componentWillReceiveProps",
              value: function (_) {
                (!_.onPosition && !_.onReflow) || this._removeResize
                  ? _.onPosition ||
                    _.onReflow ||
                    !this._removeResize ||
                    (this._removeResize(), (this._removeResize = null))
                  : (this._removeResize = _.addResizeListener(this._reflow));
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
              value: function (_) {
                (this.props.onPosition ||
                  this.props.onReflow ||
                  this.props.onResize) &&
                  (this._globalScollTarget(_.target) ||
                    this._refScrollTarget(_.target) ||
                    this._ancestorScollTarget(_.target)) &&
                  this._reflow();
              },
            },
            {
              key: "_globalScollTarget",
              value: function (_) {
                return (
                  (this.props.onPosition || this.props.onReflow) &&
                  (_ === document ||
                    _ === document.documentElement ||
                    _ === document.body)
                );
              },
            },
            {
              key: "_refScrollTarget",
              value: function (_) {
                if (_ === this._expandRef || _ === this._shrinkRef) {
                  var _ = _.offsetWidth,
                    _ = _.offsetHeight;
                  if (_ !== this._lastWidth || _ !== this._lastHeight)
                    return (
                      (this._lastWidth = _),
                      (this._lastHeight = _),
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
              value: function (_) {
                return (
                  (this.props.onPosition || this.props.onReflow) &&
                  this._node &&
                  (function (_, _) {
                    for (var _ = _.parentNode; _; ) {
                      if (_ === _) return !0;
                      _ = _.parentNode;
                    }
                    return !1;
                  })(this._node, _)
                );
              },
            },
            {
              key: "_reflow",
              value: function () {
                if (this._node && this._node.parentNode instanceof Element) {
                  var _ = this._node.parentNode.getBoundingClientRect(),
                    _ =
                      _.width !== this._lastRect.width ||
                      _.height !== this._lastRect.height,
                    _ =
                      _.top !== this._lastRect.top ||
                      _.left !== this._lastRect.left;
                  (this._lastRect = _),
                    _ && this.props.onResize && this.props.onResize(_),
                    _ && this.props.onPosition && this.props.onPosition(_),
                    (_ || _) && this.props.onReflow && this.props.onReflow(_);
                }
              },
            },
            {
              key: "_reset",
              value: function (_) {
                _ && ((_.scrollLeft = 1e5), (_.scrollTop = 1e5));
              },
            },
            {
              key: "_handleRef",
              value: function (_) {
                this._node = _;
              },
            },
            {
              key: "_handleExpandRef",
              value: function (_) {
                this._reset(_), (this._expandRef = _);
              },
            },
            {
              key: "_handleShrinkRef",
              value: function (_) {
                this._reset(_), (this._shrinkRef = _);
              },
            },
            {
              key: "render",
              value: function () {
                return this.props.onResize || this.props.onReflow
                  ? _.default.createElement(
                      "div",
                      {
                        style: _,
                        ref: this._handleRef,
                      },
                      _.default.createElement(
                        "div",
                        {
                          ref: this._handleExpandRef,
                          style: _,
                        },
                        _.default.createElement("div", {
                          style: _({}, _, {
                            width: 1e5,
                            height: 1e5,
                          }),
                        }),
                      ),
                      _.default.createElement(
                        "div",
                        {
                          ref: this._handleShrinkRef,
                          style: _,
                        },
                        _.default.createElement("div", {
                          style: _({}, _, {
                            width: "200%",
                            height: "200%",
                          }),
                        }),
                      ),
                    )
                  : _.default.createElement("noscript", {
                      ref: this._handleRef,
                    });
              },
            },
          ]),
          _
        );
      })(_.default.Component);
      (_.displayName = "ResizeObserver"),
        (_._scrollListeners = []),
        (_._resizeListeners = []),
        (module_exports._ = _);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
      });
      function _(_, _) {
        var _ = {};
        for (var _ in _)
          Object.prototype.hasOwnProperty.call(_, _) &&
            _.indexOf(_) < 0 &&
            (_[_] = _[_]);
        if (null != _ && "function" == typeof Object.getOwnPropertySymbols) {
          var _ = 0;
          for (_ = Object.getOwnPropertySymbols(_); _ < _.length; _++)
            _.indexOf(_[_]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(_, _[_]) &&
              (_[_[_]] = _[_[_]]);
        }
        return _;
      }
      function _(_, _, _, _) {
        var _,
          _ = arguments.length,
          _ =
            _ < 3
              ? _
              : null === _
                ? (_ = Object.getOwnPropertyDescriptor(_, _))
                : _;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          _ = Reflect.decorate(_, _, _, _);
        else
          for (var _ = _.length - 1; _ >= 0; _--)
            (_ = _[_]) &&
              (_ = (_ < 3 ? _(_) : _ > 3 ? _(_, _, _) : _(_, _)) || _);
        return _ > 3 && _ && Object.defineProperty(_, _, _), _;
      }
      function _(_, _, _, _) {
        return new (_ || (_ = Promise))(function (_, _) {
          function _(_) {
            try {
              _(_.next(_));
            } catch (_) {
              _(_);
            }
          }
          function _(_) {
            try {
              _(_.throw(_));
            } catch (_) {
              _(_);
            }
          }
          function _(_) {
            var _;
            _.done
              ? _(_.value)
              : ((_ = _.value),
                _ instanceof _
                  ? _
                  : new _(function (_) {
                      _(_);
                    })).then(_, _);
          }
          _((_ = _.apply(_, _ || [])).next());
        });
      }
      Object.create;
      Object.create;
      "function" == typeof SuppressedError && SuppressedError;
    },
  },
]);
