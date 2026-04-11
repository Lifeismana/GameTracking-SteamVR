var CLSTAMP = "steamdb";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [978],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _,
        _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = "function" == typeof Symbol && Symbol.for,
        _ =
          null !==
            (_ =
              null ===
                (_ = Object.getOwnPropertyDescriptor(function () {}, "name")) ||
              void 0 === _
                ? void 0
                : _.configurable) &&
          void 0 !== _ &&
          _,
        _ = _
          ? Symbol.for("react.forward_ref")
          : "function" == typeof _.forwardRef &&
            (0, _.forwardRef)(function (_) {
              return null;
            }).$$typeof,
        _ = _
          ? Symbol.for("react.memo")
          : "function" == typeof _.memo &&
            (0, _.memo)(function (_) {
              return null;
            }).$$typeof;
      function _(_, _) {
        var _;
        if (_ && _.$$typeof === _)
          throw new Error(
            "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
          );
        if ((0, _._)()) return _;
        var _ =
            null !== (_ = null == _ ? void 0 : _.forwardRef) &&
            void 0 !== _ &&
            _,
          _ = _,
          _ = _.displayName || _.name;
        if (
          _ &&
          _.$$typeof === _ &&
          ((_ = !0), "function" != typeof (_ = _.render))
        )
          throw new Error(
            "[mobx-react-lite] `render` property of ForwardRef was not a function",
          );
        var _,
          _,
          _ = function (_, _) {
            return (0, _._)(function () {
              return _(_, _);
            }, _);
          };
        return (
          (_.displayName = _.displayName),
          _ &&
            Object.defineProperty(_, "name", {
              value: _.name,
              writable: !0,
              configurable: !0,
            }),
          _.contextTypes && (_.contextTypes = _.contextTypes),
          _ && (_ = (0, _.forwardRef)(_)),
          (_ = (0, _.memo)(_)),
          (_ = _),
          (_ = _),
          Object.keys(_).forEach(function (_) {
            _[_] ||
              Object.defineProperty(
                _,
                _,
                Object.getOwnPropertyDescriptor(_, _),
              );
          }),
          _
        );
      }
      var _ = {
        $$typeof: !0,
        render: !0,
        compare: !0,
        type: !0,
        displayName: !0,
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = (function () {
          function _(_) {
            var _ = this;
            Object.defineProperty(this, "finalize", {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: _,
            }),
              Object.defineProperty(this, "registrations", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new Map(),
              }),
              Object.defineProperty(this, "sweepTimeout", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0,
              }),
              Object.defineProperty(this, "sweep", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function (_) {
                  void 0 === _ && (_ = 1e4),
                    clearTimeout(_.sweepTimeout),
                    (_.sweepTimeout = void 0);
                  var _ = Date.now();
                  _.registrations.forEach(function (_, _) {
                    _ - _.registeredAt >= _ &&
                      (_.finalize(_.value), _.registrations.delete(_));
                  }),
                    _.registrations.size > 0 && _.scheduleSweep();
                },
              }),
              Object.defineProperty(this, "finalizeAllImmediately", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: function () {
                  _.sweep(0);
                },
              });
          }
          return (
            Object.defineProperty(_.prototype, "register", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (_, _, _) {
                this.registrations.set(_, {
                  value: _,
                  registeredAt: Date.now(),
                }),
                  this.scheduleSweep();
              },
            }),
            Object.defineProperty(_.prototype, "unregister", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function (_) {
                this.registrations.delete(_);
              },
            }),
            Object.defineProperty(_.prototype, "scheduleSweep", {
              enumerable: !1,
              configurable: !0,
              writable: !0,
              value: function () {
                void 0 === this.sweepTimeout &&
                  (this.sweepTimeout = setTimeout(this.sweep, 1e4));
              },
            }),
            _
          );
        })(),
        _ =
          "undefined" != typeof FinalizationRegistry ? FinalizationRegistry : _;
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      var _ = __webpack_require__("chunkid");
      if (!__webpack_require__("chunkid").useState)
        throw new Error("mobx-react-lite requires React with Hooks support");
      if (!_.makeObservable)
        throw new Error(
          "mobx-react-lite@3 requires mobx at least version 6 to be available",
        );
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      function _(_) {
        return (0, _.getDependencyTree)(_);
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _.unstable_batchedUpdates,
      });
      var _ = __webpack_require__("chunkid");
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _) {
        return _ === _ ? 0 !== _ || 1 / _ == 1 / _ : _ != _ && _ != _;
      }
      var _ = Symbol("patchMixins"),
        _ = Symbol("patchedDefinition");
      function _(_, _) {
        for (
          var _ = this,
            _ = arguments.length,
            _ = new Array(_ > 2 ? _ - 2 : 0),
            _ = 2;
          _ < _;
          _++
        )
          _[_ - 2] = arguments[_];
        _.locks++;
        try {
          var _;
          return null != _ && (_ = _.apply(this, _)), _;
        } finally {
          _.locks--,
            0 === _.locks &&
              _.methods.forEach(function (_) {
                _.apply(_, _);
              });
        }
      }
      function _(_, _) {
        return function () {
          for (var _ = arguments.length, _ = new Array(_), _ = 0; _ < _; _++)
            _[_] = arguments[_];
          _.call.apply(_, [this, _, _].concat(_));
        };
      }
      function _(_, _, _) {
        var _ = (function (_, _) {
          var _ = (_[_] = _[_] || {}),
            _ = (_[_] = _[_] || {});
          return (_.locks = _.locks || 0), (_.methods = _.methods || []), _;
        })(_, _);
        _.methods.indexOf(_) < 0 && _.methods.push(_);
        var _ = Object.getOwnPropertyDescriptor(_, _);
        if (!_ || !_[_]) {
          var _ = _[_],
            _ = _(_, _, _ ? _.enumerable : void 0, _, _);
          Object.defineProperty(_, _, _);
        }
      }
      function _(_, _, _, _, _) {
        var _,
          _ = _(_, _);
        return (
          ((_ = {})[_] = !0),
          (_.get = function () {
            return _;
          }),
          (_.set = function (_) {
            if (this === _) _ = _(_, _);
            else {
              var _ = _(this, _, _, _, _);
              Object.defineProperty(this, _, _);
            }
          }),
          (_.configurable = !0),
          (_.enumerable = _),
          _
        );
      }
      var _ = Symbol("ObserverAdministration"),
        _ = Symbol("isMobXReactObserver");
      function _(_) {
        var _;
        return null != (_ = _[_])
          ? _
          : (_[_] = {
              reaction: null,
              mounted: !1,
              reactionInvalidatedBeforeMount: !1,
              forceUpdate: null,
              name: _(_.constructor),
              state: void 0,
              props: void 0,
              context: void 0,
            });
      }
      function _(_) {
        return _.displayName || _.name || "<component>";
      }
      function _(_) {
        var _ = _.bind(this),
          _ = _(this);
        return function () {
          _.reaction ||
            ((_.reaction = (function (_) {
              return new _.Reaction(_.name + ".render()", function () {
                if (_.mounted)
                  try {
                    null == _.forceUpdate || _.forceUpdate();
                  } catch (_) {
                    var _;
                    null == (_ = _.reaction) || _.dispose(),
                      (_.reaction = null);
                  }
                else _.reactionInvalidatedBeforeMount = !0;
              });
            })(_)),
            _.mounted ||
              _._observerFinalizationRegistry.register(this, _, this));
          var _ = void 0,
            _ = void 0;
          if (
            (_.reaction.track(function () {
              try {
                _ = (0, _._allowStateChanges)(!1, _);
              } catch (_) {
                _ = _;
              }
            }),
            _)
          )
            throw _;
          return _;
        };
      }
      function _(_, _) {
        return (
          (0, _.isUsingStaticRendering)() &&
            console.warn(
              "[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.",
            ),
          this.state !== _ ||
            !(function (_, _) {
              if (_(_, _)) return !0;
              if (
                "object" != typeof _ ||
                null === _ ||
                "object" != typeof _ ||
                null === _
              )
                return !1;
              var _ = Object.keys(_),
                _ = Object.keys(_);
              if (_.length !== _.length) return !1;
              for (var _ = 0; _ < _.length; _++)
                if (
                  !Object.hasOwnProperty.call(_, _[_]) ||
                  !_(_[_[_]], _[_[_]])
                )
                  return !1;
              return !0;
            })(this.props, _)
        );
      }
      function _(_, _) {
        if (_ && "class" !== _.kind)
          throw new Error(
            "The @observer decorator can be used on classes only",
          );
        return (
          !0 === _.isMobxInjector &&
            console.warn(
              "Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`",
            ),
          Object.prototype.isPrototypeOf.call(_.Component, _) ||
          Object.prototype.isPrototypeOf.call(_.PureComponent, _)
            ? (function (_) {
                var _ = _.prototype;
                if (_[_]) {
                  var _ = _(_);
                  throw new Error(
                    "The provided component class (" +
                      _ +
                      ") has already been declared as an observer component.",
                  );
                }
                if (((_[_] = !0), _.componentWillReact))
                  throw new Error(
                    "The componentWillReact life-cycle event is no longer supported",
                  );
                if (_.__proto__ !== _.PureComponent)
                  if (_.shouldComponentUpdate) {
                    if (_.shouldComponentUpdate !== _)
                      throw new Error(
                        "It is not allowed to use shouldComponentUpdate in observer based components.",
                      );
                  } else _.shouldComponentUpdate = _;
                var _ = _.render;
                if ("function" != typeof _) {
                  var _ = _(_);
                  throw new Error(
                    "[mobx-react] class component (" +
                      _ +
                      ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.",
                  );
                }
                _.render = function () {
                  return (
                    Object.defineProperty(this, "render", {
                      configurable: !1,
                      writable: !1,
                      value: (0, _.isUsingStaticRendering)()
                        ? _
                        : _.call(this, _),
                    }),
                    this.render()
                  );
                };
                var _ = _.componentDidMount;
                return (
                  (_.componentDidMount = function () {
                    var _ = this,
                      _ = _(this);
                    return (
                      (_.mounted = !0),
                      _._observerFinalizationRegistry.unregister(this),
                      (_.forceUpdate = function () {
                        return _.forceUpdate();
                      }),
                      (_.reaction && !_.reactionInvalidatedBeforeMount) ||
                        _.forceUpdate(),
                      null == _ ? void 0 : _.apply(this, arguments)
                    );
                  }),
                  _(_, "componentWillUnmount", function () {
                    var _;
                    if (!(0, _.isUsingStaticRendering)()) {
                      var _ = _(this);
                      null == (_ = _.reaction) || _.dispose(),
                        (_.reaction = null),
                        (_.forceUpdate = null),
                        (_.mounted = !1),
                        (_.reactionInvalidatedBeforeMount = !1);
                    }
                  }),
                  _
                );
              })(_)
            : (0, _.observer)(_)
        );
      }
      _.version.split(".")[0];
      if (!_.Component)
        throw new Error("mobx-react requires React to be available");
      if (!_.observable)
        throw new Error("mobx-react requires mobx to be available");
    },
  },
]);
