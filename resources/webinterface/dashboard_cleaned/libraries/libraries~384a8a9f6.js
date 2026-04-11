var CLSTAMP = "steamdb";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [264, 154],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        action: () => _,
        autorun: () => _,
        computed: () => _,
        configure: () => _,
        makeObservable: () => _,
        observable: () => _,
        runInAction: () => _,
        when: () => _,
      });
      function _(_) {
        for (
          var _ = arguments.length, _ = new Array(_ > 1 ? _ - 1 : 0), _ = 1;
          _ < _;
          _++
        )
          _[_ - 1] = arguments[_];
        throw new Error(
          "number" == typeof _
            ? "[MobX] minified error nr: " +
                _ +
                (_.length
                  ? " " + __webpack_require__.map(String).join(",")
                  : "") +
                ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts"
            : "[MobX] " + _,
        );
      }
      var _ = {};
      function _() {
        return "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof window
            ? window
            : void 0 !== _._
              ? _._
              : "undefined" != typeof self
                ? self
                : _;
      }
      var _ = Object.assign,
        _ = Object.getOwnPropertyDescriptor,
        _ = Object.defineProperty,
        _ = Object.prototype,
        _ = [];
      Object.freeze(_);
      var _ = {};
      Object.freeze(_);
      var _ = "undefined" != typeof Proxy,
        _ = Object.toString();
      function _() {
        _ || _("Proxy not available");
      }
      function _(_) {
        var _ = !1;
        return function () {
          if (!_) return (_ = !0), _.apply(this, arguments);
        };
      }
      var _ = function () {};
      function _(_) {
        return "function" == typeof _;
      }
      function _(_) {
        switch (typeof _) {
          case "string":
          case "symbol":
          case "number":
            return !0;
        }
        return !1;
      }
      function _(_) {
        return null !== _ && "object" == typeof _;
      }
      function _(_) {
        if (!_(_)) return !1;
        var _ = Object.getPrototypeOf(_);
        if (null == _) return !0;
        var _ = Object.hasOwnProperty.call(_, "constructor") && _.constructor;
        return "function" == typeof _ && __webpack_require__.toString() === _;
      }
      function _(_) {
        var _ = null == _ ? void 0 : _.constructor;
        return (
          !!_ &&
          ("GeneratorFunction" === _.name ||
            "GeneratorFunction" === _.displayName)
        );
      }
      function _(_, _, _) {
        _(_, _, {
          enumerable: !1,
          writable: !0,
          configurable: !0,
          value: _,
        });
      }
      function _(_, _, _) {
        _(_, _, {
          enumerable: !1,
          writable: !1,
          configurable: !0,
          value: _,
        });
      }
      function _(_, _) {
        var _ = "isMobX" + _;
        return (
          (_.prototype[_] = !0),
          function (_) {
            return _(_) && !0 === _[_];
          }
        );
      }
      function _(_) {
        return (
          null != _ && "[object Map]" === Object.prototype.toString.call(_)
        );
      }
      function _(_) {
        return (
          null != _ && "[object Set]" === Object.prototype.toString.call(_)
        );
      }
      var _ = void 0 !== Object.getOwnPropertySymbols;
      var _ =
        "undefined" != typeof Reflect && Reflect.ownKeys
          ? Reflect.ownKeys
          : _
            ? function (_) {
                return Object.getOwnPropertyNames(_).concat(
                  Object.getOwnPropertySymbols(_),
                );
              }
            : Object.getOwnPropertyNames;
      function _(_) {
        return null === _ ? null : "object" == typeof _ ? "" + _ : _;
      }
      function _(_, _) {
        return _.hasOwnProperty.call(_, _);
      }
      var _ =
        Object.getOwnPropertyDescriptors ||
        function (_) {
          var _ = {};
          return (
            _(_).forEach(function (_) {
              _[_] = _(_, _);
            }),
            _
          );
        };
      function _(_, _) {
        (null == _ || _ > _.length) && (_ = _.length);
        for (var _ = 0, _ = Array(_); _ < _; _++) _[_] = _[_];
        return _;
      }
      function _(_, _) {
        for (var _ = 0; _ < _.length; _++) {
          var _ = _[_];
          (_.enumerable = _.enumerable || !1),
            (_.configurable = !0),
            "value" in _ && (_.writable = !0),
            Object.defineProperty(_, _(_.key), _);
        }
      }
      function _(_, _, _) {
        return (
          _ && _(_.prototype, _),
          _ && _(_, _),
          Object.defineProperty(_, "prototype", {
            writable: !1,
          }),
          _
        );
      }
      function _(_, _) {
        var _ =
          ("undefined" != typeof Symbol && _[Symbol.iterator]) ||
          _["@@iterator"];
        if (_) return (_ = __webpack_require__.call(_)).next.bind(_);
        if (
          Array.isArray(_) ||
          (_ = (function (_, _) {
            if (_) {
              if ("string" == typeof _) return _(_, _);
              var _ = {}.toString.call(_).slice(8, -1);
              return (
                "Object" === _ && _.constructor && (_ = _.constructor.name),
                "Map" === _ || "Set" === _
                  ? Array.from(_)
                  : "Arguments" === _ ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_)
                    ? _(_, _)
                    : void 0
              );
            }
          })(_)) ||
          (_ && _ && "number" == typeof _.length)
        ) {
          _ && (_ = _);
          var _ = 0;
          return function () {
            return _ >= _.length
              ? {
                  done: !0,
                }
              : {
                  done: !1,
                  value: _[_++],
                };
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
      }
      function _() {
        return (
          (_ = Object.assign
            ? Object.assign.bind()
            : function (_) {
                for (var _ = 1; _ < arguments.length; _++) {
                  var _ = arguments[_];
                  for (var _ in _)
                    ({}).hasOwnProperty.call(_, _) && (_[_] = _[_]);
                }
                return _;
              }),
          _.apply(null, arguments)
        );
      }
      function _(_, _) {
        (_.prototype = Object.create(_.prototype)),
          (_.prototype.constructor = _),
          _(_, _);
      }
      function _(_, _) {
        return (
          (_ = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (_, _) {
                return (_.__proto__ = _), _;
              }),
          _(_, _)
        );
      }
      function _(_) {
        var _ = (function (_, _) {
          if ("object" != typeof _ || !_) return _;
          var _ = _[Symbol.toPrimitive];
          if (void 0 !== _) {
            var _ = __webpack_require__.call(_, _ || "default");
            if ("object" != typeof _) return _;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === _ ? String : Number)(_);
        })(_, "string");
        return "symbol" == typeof _ ? _ : _ + "";
      }
      var _ = Symbol("mobx-stored-annotations");
      function _(_) {
        return Object.assign(function (_, _) {
          if (_(_)) return _.decorate_20223_(_, _);
          _(_, _, _);
        }, _);
      }
      function _(_, _, _) {
        _(_, _) || _(_, _, _({}, _[_])),
          (function (_) {
            return _.annotationType_ === _;
          })(_) || (_[_][_] = _);
      }
      function _(_) {
        return "object" == typeof _ && "string" == typeof _.kind;
      }
      var _ = Symbol("mobx administration"),
        _ = (function () {
          function _(_) {
            void 0 === _ && (_ = "Atom"),
              (this.name_ = void 0),
              (this.isPendingUnobservation = !1),
              (this.isBeingObserved = !1),
              (this.observers_ = new Set()),
              (this.diffValue_ = 0),
              (this.lastAccessedBy_ = 0),
              (this.lowestObserverState_ = _.NOT_TRACKING_),
              (this.onBOL = void 0),
              (this.onBUOL = void 0),
              (this.name_ = _);
          }
          var _ = _.prototype;
          return (
            (_.onBO = function () {
              this.onBOL &&
                this.onBOL.forEach(function (_) {
                  return _();
                });
            }),
            (_.onBUO = function () {
              this.onBUOL &&
                this.onBUOL.forEach(function (_) {
                  return _();
                });
            }),
            (_.reportObserved = function () {
              return _(this);
            }),
            (_.reportChanged = function () {
              _(), _(this), _();
            }),
            (_.toString = function () {
              return this.name_;
            }),
            _
          );
        })(),
        _ = _("Atom", _);
      function _(_, _, _) {
        void 0 === _ && (_ = _), void 0 === _ && (_ = _);
        var _,
          _ = new _(_);
        return _ !== _ && _(_, _, _, _), _ !== _ && _(_, _), _;
      }
      var _ = {
        identity: function (_, _) {
          return _ === _;
        },
        structural: function (_, _) {
          return _(_, _);
        },
        default: function (_, _) {
          return Object._
            ? Object._(_, _)
            : _ === _
              ? 0 !== _ || 1 / _ == 1 / _
              : _ != _ && _ != _;
        },
        shallow: function (_, _) {
          return _(_, _, 1);
        },
      };
      function _(_, _, _) {
        return _(_)
          ? _
          : Array.isArray(_)
            ? _.array(_, {
                name: _,
              })
            : _(_)
              ? _.object(_, void 0, {
                  name: _,
                })
              : _(_)
                ? _.map(_, {
                    name: _,
                  })
                : _(_)
                  ? _.set(_, {
                      name: _,
                    })
                  : "function" != typeof _ || _(_) || _(_)
                    ? _
                    : _(_)
                      ? _(_)
                      : _(_, _);
      }
      function _(_) {
        return _;
      }
      var _ = "override";
      function _(_, _) {
        return {
          annotationType_: _,
          options_: _,
          make_: _,
          extend_: _,
          decorate_20223_: _,
        };
      }
      function _(_, _, _, _) {
        var _;
        if (null != (_ = this.options_) && _.bound)
          return null === this.extend_(_, _, _, !1) ? 0 : 1;
        if (_ === _.target_) return null === this.extend_(_, _, _, !1) ? 0 : 2;
        if (_(_.value)) return 1;
        var _ = _(_, this, _, _, !1);
        return _(_, _, _), 2;
      }
      function _(_, _, _, _) {
        var _ = _(_, this, _, _);
        return _.defineProperty_(_, _, _);
      }
      function _(_, _) {
        var _ = _.kind,
          _ = _.name,
          _ = _.addInitializer,
          _ = this;
        if ("field" != _) {
          var _, _, _, _, _, _;
          if ("method" == _)
            return (
              _(_) ||
                ((_ = _),
                (_ = _(
                  null != (_ = null == (_ = _.options_) ? void 0 : _.name)
                    ? _
                    : _.toString(),
                  _,
                  null !=
                    (_ = null == (_ = _.options_) ? void 0 : _.autoAction) && _,
                ))),
              null != (_ = this.options_) &&
                _.bound &&
                _(function () {
                  var _ = this,
                    _ = _[_].bind(_);
                  (_.isMobxAction = !0), (_[_] = _);
                }),
              _
            );
          _(
            "Cannot apply '" +
              _.annotationType_ +
              "' to '" +
              String(_) +
              "' (kind: " +
              _ +
              "):\n'" +
              _.annotationType_ +
              "' can only be used on properties with a function value.",
          );
        } else
          _(function () {
            _(this, _, _);
          });
      }
      function _(_, _, _, _, _) {
        var _, _, _, _, _, _, _, _;
        void 0 === _ && (_ = _.safeDescriptors),
          (_ = _),
          _.annotationType_,
          _.value;
        var _,
          _ = _.value;
        null != (_ = _.options_) &&
          _.bound &&
          (_ = _.bind(null != (_ = _.proxy_) ? _ : _.target_));
        return {
          value: _(
            null != (_ = null == (_ = _.options_) ? void 0 : _.name)
              ? _
              : __webpack_require__.toString(),
            _,
            null != (_ = null == (_ = _.options_) ? void 0 : _.autoAction) && _,
            null != (_ = _.options_) && _.bound
              ? null != (_ = _.proxy_)
                ? _
                : _.target_
              : void 0,
          ),
          configurable: !_ || _.isPlainObject_,
          enumerable: !1,
          writable: !_,
        };
      }
      function _(_, _) {
        return {
          annotationType_: _,
          options_: _,
          make_: _,
          extend_: _,
          decorate_20223_: _,
        };
      }
      function _(_, _, _, _) {
        var _;
        if (_ === _.target_) return null === this.extend_(_, _, _, !1) ? 0 : 2;
        if (
          null != (_ = this.options_) &&
          _.bound &&
          (!_(_.target_, _) || !_(_.target_[_])) &&
          null === this.extend_(_, _, _, !1)
        )
          return 0;
        if (_(_.value)) return 1;
        var _ = _(_, this, _, _, !1, !1);
        return _(_, _, _), 2;
      }
      function _(_, _, _, _) {
        var _,
          _ = _(_, this, _, _, null == (_ = this.options_) ? void 0 : _.bound);
        return _.defineProperty_(_, _, _);
      }
      function _(_, _) {
        var _;
        var _ = _.name,
          _ = _.addInitializer;
        return (
          _(_) || (_ = _(_)),
          null != (_ = this.options_) &&
            _.bound &&
            _(function () {
              var _ = this,
                _ = _[_].bind(_);
              (_.isMobXFlow = !0), (_[_] = _);
            }),
          _
        );
      }
      function _(_, _, _, _, _, _) {
        var _;
        void 0 === _ && (_ = _.safeDescriptors),
          (_ = _),
          _.annotationType_,
          _.value;
        var _,
          _ = _.value;
        (_(_) || (_ = _(_)), _) &&
          ((_ = _.bind(null != (_ = _.proxy_) ? _ : _.target_)).isMobXFlow =
            !0);
        return {
          value: _,
          configurable: !_ || _.isPlainObject_,
          enumerable: !1,
          writable: !_,
        };
      }
      function _(_, _) {
        return {
          annotationType_: _,
          options_: _,
          make_: _,
          extend_: _,
          decorate_20223_: _,
        };
      }
      function _(_, _, _) {
        return null === this.extend_(_, _, _, !1) ? 0 : 1;
      }
      function _(_, _, _, _) {
        return (
          (function (_, _, _, _) {
            _.annotationType_, _.get;
            0;
          })(0, this, 0, _),
          _.defineComputedProperty_(
            _,
            _({}, this.options_, {
              get: _.get,
              set: _.set,
            }),
            _,
          )
        );
      }
      function _(_, _) {
        var _ = this,
          _ = _.name;
        return (
          (0, _.addInitializer)(function () {
            var _ = _(this)[_],
              _ = _({}, _.options_, {
                get: _,
                context: this,
              });
            _.name || (_.name = "ObservableObject." + _.toString()),
              _.values_.set(_, new _(_));
          }),
          function () {
            return this[_].getObservablePropValue_(_);
          }
        );
      }
      function _(_, _) {
        return {
          annotationType_: _,
          options_: _,
          make_: _,
          extend_: _,
          decorate_20223_: _,
        };
      }
      function _(_, _, _) {
        return null === this.extend_(_, _, _, !1) ? 0 : 1;
      }
      function _(_, _, _, _) {
        var _, _;
        return (
          (function (_, _) {
            _.annotationType_;
            0;
          })(0, this),
          _.defineObservableProperty_(
            _,
            _.value,
            null != (_ = null == (_ = this.options_) ? void 0 : _.enhancer)
              ? _
              : _,
            _,
          )
        );
      }
      function _(_, _) {
        var _ = this,
          _ = _.kind,
          _ = _.name,
          _ = new WeakSet();
        function _(_, _) {
          var _,
            _,
            _ = _(_)[_],
            _ = new _(
              _,
              null != (_ = null == (_ = _.options_) ? void 0 : _.enhancer)
                ? _
                : _,
              "ObservableObject." + _.toString(),
              !1,
            );
          _.values_.set(_, _), _.add(_);
        }
        if ("accessor" == _)
          return {
            get: function () {
              return (
                _.has(this) || _(this, _.get.call(this)),
                this[_].getObservablePropValue_(_)
              );
            },
            set: function (_) {
              return (
                _.has(this) || _(this, _), this[_].setObservablePropValue_(_, _)
              );
            },
            init: function (_) {
              return _.has(this) || _(this, _), _;
            },
          };
      }
      var _ = "true",
        _ = _();
      function _(_) {
        return {
          annotationType_: _,
          options_: _,
          make_: _,
          extend_: _,
          decorate_20223_: _,
        };
      }
      function _(_, _, _, _) {
        var _, _, _, _;
        if (_.get) return _.make_(_, _, _, _);
        if (_.set) {
          var _ = _(_.toString(), _.set);
          return _ === _.target_
            ? null ===
              _.defineProperty_(_, {
                configurable: !_.safeDescriptors || _.isPlainObject_,
                set: _,
              })
              ? 0
              : 2
            : (_(_, _, {
                configurable: !0,
                set: _,
              }),
              2);
        }
        if (_ !== _.target_ && "function" == typeof _.value)
          return _(_.value)
            ? (null != (_ = this.options_) && _.autoBind ? _.bound : _).make_(
                _,
                _,
                _,
                _,
              )
            : (null != (_ = this.options_) && _.autoBind ? _.bound : _).make_(
                _,
                _,
                _,
                _,
              );
        var _,
          _ =
            !1 === (null == (_ = this.options_) ? void 0 : _.deep) ? _.ref : _;
        "function" == typeof _.value &&
          null != (_ = this.options_) &&
          _.autoBind &&
          (_.value = _.value.bind(null != (_ = _.proxy_) ? _ : _.target_));
        return _.make_(_, _, _, _);
      }
      function _(_, _, _, _) {
        var _, _, _;
        if (_.get) return _.extend_(_, _, _, _);
        if (_.set)
          return _.defineProperty_(
            _,
            {
              configurable: !_.safeDescriptors || _.isPlainObject_,
              set: _(_.toString(), _.set),
            },
            _,
          );
        "function" == typeof _.value &&
          null != (_ = this.options_) &&
          _.autoBind &&
          (_.value = _.value.bind(null != (_ = _.proxy_) ? _ : _.target_));
        return (
          !1 === (null == (_ = this.options_) ? void 0 : _.deep) ? _.ref : _
        ).extend_(_, _, _, _);
      }
      function _(_, _) {
        _("'" + this.annotationType_ + "' cannot be used as a decorator");
      }
      var _ = {
        deep: !0,
        name: void 0,
        defaultDecorator: void 0,
        proxy: !0,
      };
      function _(_) {
        return _ || _;
      }
      Object.freeze(_);
      var _ = _("observable"),
        _ = _("observable.ref", {
          enhancer: _,
        }),
        _ = _("observable.shallow", {
          enhancer: function (_, _, _) {
            return null == _ || _(_) || _(_) || _(_) || _(_)
              ? _
              : Array.isArray(_)
                ? _.array(_, {
                    name: _,
                    deep: !1,
                  })
                : _(_)
                  ? _.object(_, void 0, {
                      name: _,
                      deep: !1,
                    })
                  : _(_)
                    ? _.map(_, {
                        name: _,
                        deep: !1,
                      })
                    : _(_)
                      ? _.set(_, {
                          name: _,
                          deep: !1,
                        })
                      : void 0;
          },
        }),
        _ = _("observable.struct", {
          enhancer: function (_, _) {
            return _(_, _) ? _ : _;
          },
        }),
        _ = _(_);
      function _(_) {
        return !0 === _.deep
          ? _
          : !1 === _.deep
            ? _
            : (_ = _.defaultDecorator) &&
                null != (_ = null == (_ = _.options_) ? void 0 : _.enhancer)
              ? _
              : _;
        var _, _, _;
      }
      function _(_, _, _) {
        return _(_)
          ? _.decorate_20223_(_, _)
          : _(_)
            ? void _(_, _, _)
            : _(_)
              ? _
              : _(_)
                ? _.object(_, _, _)
                : Array.isArray(_)
                  ? _.array(_, _)
                  : _(_)
                    ? _.map(_, _)
                    : _(_)
                      ? _.set(_, _)
                      : "object" == typeof _ && null !== _
                        ? _
                        : _.box(_, _);
      }
      _(_, _);
      var _,
        _,
        _ = _(_, {
          box: function (_, _) {
            var _ = _(_);
            return new _(_, _(_), _.name, !0, _.equals);
          },
          array: function (_, _) {
            var _ = _(_);
            return (!1 === _.useProxies || !1 === _.proxy ? _ : _)(
              _,
              _(_),
              _.name,
            );
          },
          map: function (_, _) {
            var _ = _(_);
            return new _(_, _(_), _.name);
          },
          set: function (_, _) {
            var _ = _(_);
            return new _(_, _(_), _.name);
          },
          object: function (_, _, _) {
            return _(function () {
              return _(
                !1 === _.useProxies || !1 === (null == _ ? void 0 : _.proxy)
                  ? _({}, _)
                  : (function (_, _) {
                      var _, _;
                      return (
                        _(),
                        (_ = _(_, _)),
                        null != (_ = (_ = _[_]).proxy_)
                          ? _
                          : (_.proxy_ = new Proxy(_, _))
                      );
                    })({}, _),
                _,
                _,
              );
            });
          },
          ref: _(_),
          shallow: _(_),
          deep: _,
          struct: _(_),
        }),
        _ = "computed",
        _ = _(_),
        _ = _("computed.struct", {
          equals: _.structural,
        }),
        _ = function (_, _) {
          if (_(_)) return _.decorate_20223_(_, _);
          if (_(_)) return _(_, _, _);
          if (_(_)) return _(_(_, _));
          var _ = _(_) ? _ : {};
          return (_.get = _), _.name || (_.name = _.name || ""), new _(_);
        };
      Object.assign(_, _), (_.struct = _(_));
      var _ = 0,
        _ = 1,
        _ =
          null !=
            (_ =
              null == (_ = _(function () {}, "name"))
                ? void 0
                : _.configurable) && _,
        _ = {
          value: "action",
          configurable: !0,
          writable: !1,
          enumerable: !1,
        };
      function _(_, _, _, _) {
        function _() {
          return _(_, _, _, _ || this, arguments);
        }
        return (
          void 0 === _ && (_ = !1),
          (_.isMobxAction = !0),
          (_.toString = function () {
            return _.toString();
          }),
          _ && ((_.value = _), _(_, "name", _)),
          _
        );
      }
      function _(_, _, _, _, _) {
        var _ = (function (_, _) {
          var _ = !1,
            _ = 0;
          0;
          var _ = _.trackingDerivation,
            _ = !_ || !_;
          _();
          var _ = _.allowStateChanges;
          _ && (_(), (_ = _(!0)));
          var _ = _(!0),
            _ = {
              runAsAction_: _,
              prevDerivation_: _,
              prevAllowStateChanges_: _,
              prevAllowStateReads_: _,
              notifySpy_: _,
              startTime_: _,
              actionId_: _++,
              parentActionId_: _,
            };
          return (_ = _.actionId_), _;
        })(0, _);
        try {
          return __webpack_require__.apply(_, _);
        } catch (_) {
          throw ((_.error_ = _), _);
        } finally {
          !(function (_) {
            _ !== _.actionId_ && _(30);
            (_ = _.parentActionId_),
              void 0 !== _.error_ && (_.suppressReactionErrors = !0);
            _(_.prevAllowStateChanges_),
              _(_.prevAllowStateReads_),
              _(),
              _.runAsAction_ && _(_.prevDerivation_);
            0;
            _.suppressReactionErrors = !1;
          })(_);
        }
      }
      function _(_, _) {
        var _ = _(_);
        try {
          return _();
        } finally {
          _(_);
        }
      }
      function _(_) {
        var _ = _.allowStateChanges;
        return (_.allowStateChanges = _), _;
      }
      function _(_) {
        _.allowStateChanges = _;
      }
      var _ = (function (_) {
        function _(_, _, _, _, _) {
          var _;
          return (
            void 0 === _ && (_ = "ObservableValue"),
            void 0 === _ && (_ = !0),
            void 0 === _ && (_ = _.default),
            ((_ = _.call(this, _) || this).enhancer = void 0),
            (_.name_ = void 0),
            (_.equals = void 0),
            (_.hasUnreportedChange_ = !1),
            (_.interceptors_ = void 0),
            (_.changeListeners_ = void 0),
            (_.value_ = void 0),
            (_.dehancer = void 0),
            (_.enhancer = _),
            (_.name_ = _),
            (_.equals = _),
            (_.value_ = __webpack_require__(_, void 0, _)),
            _
          );
        }
        _(_, _);
        var _ = _.prototype;
        return (
          (_.dehanceValue = function (_) {
            return void 0 !== this.dehancer ? this.dehancer(_) : _;
          }),
          (_.set = function (_) {
            this.value_;
            if ((_ = this.prepareNewValue_(_)) !== _.UNCHANGED) {
              0, this.setNewValue_(_);
            }
          }),
          (_.prepareNewValue_ = function (_) {
            if ((_(this), _(this))) {
              var _ = _(this, {
                object: this,
                type: _,
                newValue: _,
              });
              if (!_) return _.UNCHANGED;
              _ = _.newValue;
            }
            return (
              (_ = this.enhancer(_, this.value_, this.name_)),
              this.equals(this.value_, _) ? _.UNCHANGED : _
            );
          }),
          (_.setNewValue_ = function (_) {
            var _ = this.value_;
            (this.value_ = _),
              this.reportChanged(),
              _(this) &&
                _(this, {
                  type: _,
                  object: this,
                  newValue: _,
                  oldValue: _,
                });
          }),
          (_.get = function () {
            return this.reportObserved(), this.dehanceValue(this.value_);
          }),
          (_.intercept_ = function (_) {
            return _(this, _);
          }),
          (_.observe_ = function (_, _) {
            return (
              _ &&
                _({
                  observableKind: "value",
                  debugObjectName: this.name_,
                  object: this,
                  type: _,
                  newValue: this.value_,
                  oldValue: void 0,
                }),
              _(this, _)
            );
          }),
          (_.raw = function () {
            return this.value_;
          }),
          (_.toJSON = function () {
            return this.get();
          }),
          (_.toString = function () {
            return this.name_ + "[" + this.value_ + "]";
          }),
          (_.valueOf = function () {
            return _(this.get());
          }),
          (_[Symbol.toPrimitive] = function () {
            return this.valueOf();
          }),
          _
        );
      })(_);
      function _(_, _) {
        return !!(_ & _);
      }
      function _(_, _, _) {
        return _ ? (_ |= _) : (_ &= ~_), _;
      }
      var _ = (function () {
        function _(_) {
          (this.dependenciesState_ = _.NOT_TRACKING_),
            (this.observing_ = []),
            (this.newObserving_ = null),
            (this.observers_ = new Set()),
            (this.diffValue_ = 0),
            (this.runId_ = 0),
            (this.lastAccessedBy_ = 0),
            (this.lowestObserverState_ = _.UP_TO_DATE_),
            (this.unboundDepsCount_ = 0),
            (this.value_ = new _(null)),
            (this.name_ = void 0),
            (this.triggeredBy_ = void 0),
            (this.flags_ = 0),
            (this.derivation = void 0),
            (this.setter_ = void 0),
            (this.isTracing_ = _.NONE),
            (this.scope_ = void 0),
            (this.equals_ = void 0),
            (this.requiresReaction_ = void 0),
            (this.keepAlive_ = void 0),
            (this.onBOL = void 0),
            (this.onBUOL = void 0),
            _.get || _(31),
            (this.derivation = _.get),
            (this.name_ = _.name || "ComputedValue"),
            _.set && (this.setter_ = _("ComputedValue-setter", _.set)),
            (this.equals_ =
              _.equals ||
              (_.compareStructural || _.struct ? _.structural : _.default)),
            (this.scope_ = _.context),
            (this.requiresReaction_ = _.requiresReaction),
            (this.keepAlive_ = !!_.keepAlive);
        }
        var _ = _.prototype;
        return (
          (_.onBecomeStale_ = function () {
            !(function (_) {
              if (_.lowestObserverState_ !== _.UP_TO_DATE_) return;
              (_.lowestObserverState_ = _.POSSIBLY_STALE_),
                _.observers_.forEach(function (_) {
                  _.dependenciesState_ === _.UP_TO_DATE_ &&
                    ((_.dependenciesState_ = _.POSSIBLY_STALE_),
                    _.onBecomeStale_());
                });
            })(this);
          }),
          (_.onBO = function () {
            this.onBOL &&
              this.onBOL.forEach(function (_) {
                return _();
              });
          }),
          (_.onBUO = function () {
            this.onBUOL &&
              this.onBUOL.forEach(function (_) {
                return _();
              });
          }),
          (_.get = function () {
            if (
              (this.isComputing && _(32, this.name_, this.derivation),
              0 !== _.inBatch || 0 !== this.observers_.size || this.keepAlive_)
            ) {
              if ((_(this), _(this))) {
                var _ = _.trackingContext;
                this.keepAlive_ && !_ && (_.trackingContext = this),
                  this.trackAndCompute() &&
                    (function (_) {
                      if (_.lowestObserverState_ === _.STALE_) return;
                      (_.lowestObserverState_ = _.STALE_),
                        _.observers_.forEach(function (_) {
                          _.dependenciesState_ === _.POSSIBLY_STALE_
                            ? (_.dependenciesState_ = _.STALE_)
                            : _.dependenciesState_ === _.UP_TO_DATE_ &&
                              (_.lowestObserverState_ = _.UP_TO_DATE_);
                        });
                    })(this),
                  (_.trackingContext = _);
              }
            } else
              _(this) &&
                (this.warnAboutUntrackedRead_(),
                _(),
                (this.value_ = this.computeValue_(!1)),
                _());
            var _ = this.value_;
            if (_(_)) throw _.cause;
            return _;
          }),
          (_.set = function (_) {
            if (this.setter_) {
              this.isRunningSetter && _(33, this.name_),
                (this.isRunningSetter = !0);
              try {
                this.setter_.call(this.scope_, _);
              } finally {
                this.isRunningSetter = !1;
              }
            } else _(34, this.name_);
          }),
          (_.trackAndCompute = function () {
            var _ = this.value_,
              _ = this.dependenciesState_ === _.NOT_TRACKING_,
              _ = this.computeValue_(!0),
              _ = _ || _(_) || _(_) || !this.equals_(_, _);
            return _ && (this.value_ = _), _;
          }),
          (_.computeValue_ = function (_) {
            this.isComputing = !0;
            var _,
              _ = _(!1);
            if (_) _ = _(this, this.derivation, this.scope_);
            else if (!0 === _.disableErrorBoundaries)
              _ = this.derivation.call(this.scope_);
            else
              try {
                _ = this.derivation.call(this.scope_);
              } catch (_) {
                _ = new _(_);
              }
            return _(_), (this.isComputing = !1), _;
          }),
          (_.suspend_ = function () {
            this.keepAlive_ || (_(this), (this.value_ = void 0));
          }),
          (_.observe_ = function (_, _) {
            var _ = this,
              _ = !0,
              _ = void 0;
            return _(function () {
              var _ = __webpack_require__.get();
              if (!_ || _) {
                var _ = _();
                _({
                  observableKind: "computed",
                  debugObjectName: _.name_,
                  type: _,
                  object: _,
                  newValue: _,
                  oldValue: _,
                }),
                  _(_);
              }
              (_ = !1), (_ = _);
            });
          }),
          (_.warnAboutUntrackedRead_ = function () {}),
          (_.toString = function () {
            return this.name_ + "[" + this.derivation.toString() + "]";
          }),
          (_.valueOf = function () {
            return _(this.get());
          }),
          (_[Symbol.toPrimitive] = function () {
            return this.valueOf();
          }),
          _(_, [
            {
              key: "isComputing",
              get: function () {
                return _(this.flags_, _.isComputingMask_);
              },
              set: function (_) {
                this.flags_ = _(this.flags_, _.isComputingMask_, _);
              },
            },
            {
              key: "isRunningSetter",
              get: function () {
                return _(this.flags_, _.isRunningSetterMask_);
              },
              set: function (_) {
                this.flags_ = _(this.flags_, _.isRunningSetterMask_, _);
              },
            },
            {
              key: "isBeingObserved",
              get: function () {
                return _(this.flags_, _.isBeingObservedMask_);
              },
              set: function (_) {
                this.flags_ = _(this.flags_, _.isBeingObservedMask_, _);
              },
            },
            {
              key: "isPendingUnobservation",
              get: function () {
                return _(this.flags_, _.isPendingUnobservationMask_);
              },
              set: function (_) {
                this.flags_ = _(this.flags_, _.isPendingUnobservationMask_, _);
              },
            },
          ])
        );
      })();
      (_.isComputingMask_ = 1),
        (_.isRunningSetterMask_ = 2),
        (_.isBeingObservedMask_ = 4),
        (_.isPendingUnobservationMask_ = 8);
      var _,
        _,
        _ = _("ComputedValue", _);
      !(function (_) {
        (_[(_.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
          (_[(_.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
          (_[(_.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
          (_[(_.STALE_ = 2)] = "STALE_");
      })(_ || (_ = {})),
        (function (_) {
          (_[(_.NONE = 0)] = "NONE"),
            (_[(_.LOG = 1)] = "LOG"),
            (_[(_.BREAK = 2)] = "BREAK");
        })(_ || (_ = {}));
      var _ = function (_) {
        (this.cause = void 0), (this.cause = _);
      };
      function _(_) {
        return _ instanceof _;
      }
      function _(_) {
        switch (_.dependenciesState_) {
          case _.UP_TO_DATE_:
            return !1;
          case _.NOT_TRACKING_:
          case _.STALE_:
            return !0;
          case _.POSSIBLY_STALE_:
            for (
              var _ = _(!0), _ = _(), _ = _.observing_, _ = _.length, _ = 0;
              _ < _;
              _++
            ) {
              var _ = _[_];
              if (_(_)) {
                if (_.disableErrorBoundaries) _.get();
                else
                  try {
                    _.get();
                  } catch (_) {
                    return _(_), _(_), !0;
                  }
                if (_.dependenciesState_ === _.STALE_) return _(_), _(_), !0;
              }
            }
            return _(_), _(_), _(_), !1;
        }
      }
      function _(_) {}
      function _(_, _, _) {
        var _ = _(!0);
        _(_),
          (_.newObserving_ = new Array(
            0 === _.runId_ ? 100 : _.observing_.length,
          )),
          (_.unboundDepsCount_ = 0),
          (_.runId_ = ++_.runId);
        var _,
          _ = _.trackingDerivation;
        if (
          ((_.trackingDerivation = _),
          _.inBatch++,
          !0 === _.disableErrorBoundaries)
        )
          _ = _.call(_);
        else
          try {
            _ = _.call(_);
          } catch (_) {
            _ = new _(_);
          }
        return (
          _.inBatch--,
          (_.trackingDerivation = _),
          (function (_) {
            for (
              var _ = _.observing_,
                _ = (_.observing_ = _.newObserving_),
                _ = _.UP_TO_DATE_,
                _ = 0,
                _ = _.unboundDepsCount_,
                _ = 0;
              _ < _;
              _++
            ) {
              var _ = _[_];
              0 === _.diffValue_ &&
                ((_.diffValue_ = 1), _ !== _ && (_[_] = _), _++),
                _.dependenciesState_ > _ && (_ = _.dependenciesState_);
            }
            (_.length = _), (_.newObserving_ = null), (_ = _.length);
            for (; _--; ) {
              var _ = _[_];
              0 === _.diffValue_ && _(_, _), (_.diffValue_ = 0);
            }
            for (; _--; ) {
              var _ = _[_];
              1 === _.diffValue_ && ((_.diffValue_ = 0), _(_, _));
            }
            _ !== _.UP_TO_DATE_ &&
              ((_.dependenciesState_ = _), _.onBecomeStale_());
          })(_),
          _(_),
          _
        );
      }
      function _(_) {
        var _ = _.observing_;
        _.observing_ = [];
        for (var _ = _.length; _--; ) _(_[_], _);
        _.dependenciesState_ = _.NOT_TRACKING_;
      }
      function _(_) {
        var _ = _();
        try {
          return _();
        } finally {
          _(_);
        }
      }
      function _() {
        var _ = _.trackingDerivation;
        return (_.trackingDerivation = null), _;
      }
      function _(_) {
        _.trackingDerivation = _;
      }
      function _(_) {
        var _ = _.allowStateReads;
        return (_.allowStateReads = _), _;
      }
      function _(_) {
        _.allowStateReads = _;
      }
      function _(_) {
        if (_.dependenciesState_ !== _.UP_TO_DATE_) {
          _.dependenciesState_ = _.UP_TO_DATE_;
          for (var _ = _.observing_, _ = _.length; _--; )
            _[_].lowestObserverState_ = _.UP_TO_DATE_;
        }
      }
      var _ = function () {
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
        _ = !0,
        _ = !1,
        _ = (function () {
          var _ = _();
          return (
            _.__mobxInstanceCount > 0 && !_.__mobxGlobals && (_ = !1),
            _.__mobxGlobals &&
              _.__mobxGlobals.version !== new _().version &&
              (_ = !1),
            _
              ? _.__mobxGlobals
                ? ((_.__mobxInstanceCount += 1),
                  _.__mobxGlobals.UNCHANGED || (_.__mobxGlobals.UNCHANGED = {}),
                  _.__mobxGlobals)
                : ((_.__mobxInstanceCount = 1), (_.__mobxGlobals = new _()))
              : (setTimeout(function () {
                  _ || _(35);
                }, 1),
                new _())
          );
        })();
      function _(_, _) {
        _.observers_.add(_),
          _.lowestObserverState_ > _.dependenciesState_ &&
            (_.lowestObserverState_ = _.dependenciesState_);
      }
      function _(_, _) {
        _.observers_.delete(_), 0 === _.observers_.size && _(_);
      }
      function _(_) {
        !1 === _.isPendingUnobservation &&
          ((_.isPendingUnobservation = !0), _.pendingUnobservations.push(_));
      }
      function _() {
        _.inBatch++;
      }
      function _() {
        if (0 === --_.inBatch) {
          _();
          for (var _ = _.pendingUnobservations, _ = 0; _ < _.length; _++) {
            var _ = _[_];
            (_.isPendingUnobservation = !1),
              0 === _.observers_.size &&
                (_.isBeingObserved &&
                  ((_.isBeingObserved = !1), __webpack_require__.onBUO()),
                _ instanceof _ && __webpack_require__.suspend_());
          }
          _.pendingUnobservations = [];
        }
      }
      function _(_) {
        var _ = _.trackingDerivation;
        return null !== _
          ? (_.runId_ !== _.lastAccessedBy_ &&
              ((_.lastAccessedBy_ = _.runId_),
              (_.newObserving_[_.unboundDepsCount_++] = _),
              !_.isBeingObserved &&
                _.trackingContext &&
                ((_.isBeingObserved = !0), _.onBO())),
            _.isBeingObserved)
          : (0 === _.observers_.size && _.inBatch > 0 && _(_), !1);
      }
      function _(_) {
        _.lowestObserverState_ !== _.STALE_ &&
          ((_.lowestObserverState_ = _.STALE_),
          _.observers_.forEach(function (_) {
            _.dependenciesState_ === _.UP_TO_DATE_ && _.onBecomeStale_(),
              (_.dependenciesState_ = _.STALE_);
          }));
      }
      var _ = (function () {
        function _(_, _, _, _) {
          void 0 === _ && (_ = "Reaction"),
            (this.name_ = void 0),
            (this.onInvalidate_ = void 0),
            (this.errorHandler_ = void 0),
            (this.requiresObservable_ = void 0),
            (this.observing_ = []),
            (this.newObserving_ = []),
            (this.dependenciesState_ = _.NOT_TRACKING_),
            (this.diffValue_ = 0),
            (this.runId_ = 0),
            (this.unboundDepsCount_ = 0),
            (this.isDisposed_ = !1),
            (this.isScheduled_ = !1),
            (this.isTrackPending_ = !1),
            (this.isRunning_ = !1),
            (this.isTracing_ = _.NONE),
            (this.name_ = _),
            (this.onInvalidate_ = _),
            (this.errorHandler_ = _),
            (this.requiresObservable_ = _);
        }
        var _ = _.prototype;
        return (
          (_.onBecomeStale_ = function () {
            this.schedule_();
          }),
          (_.schedule_ = function () {
            this.isScheduled_ ||
              ((this.isScheduled_ = !0), _.pendingReactions.push(this), _());
          }),
          (_.isScheduled = function () {
            return this.isScheduled_;
          }),
          (_.runReaction_ = function () {
            if (!this.isDisposed_) {
              _(), (this.isScheduled_ = !1);
              var _ = _.trackingContext;
              if (((_.trackingContext = this), _(this))) {
                this.isTrackPending_ = !0;
                try {
                  this.onInvalidate_();
                } catch (_) {
                  this.reportExceptionInDerivation_(_);
                }
              }
              (_.trackingContext = _), _();
            }
          }),
          (_.track = function (_) {
            if (!this.isDisposed_) {
              _();
              0, (this.isRunning_ = !0);
              var _ = _.trackingContext;
              _.trackingContext = this;
              var _ = _(this, _, void 0);
              (_.trackingContext = _),
                (this.isRunning_ = !1),
                (this.isTrackPending_ = !1),
                this.isDisposed_ && _(this),
                _(_) && this.reportExceptionInDerivation_(_.cause),
                _();
            }
          }),
          (_.reportExceptionInDerivation_ = function (_) {
            var _ = this;
            if (this.errorHandler_) this.errorHandler_(_, this);
            else {
              if (_.disableErrorBoundaries) throw _;
              var _ = "[mobx] uncaught error in '" + this + "'";
              _.suppressReactionErrors || console.error(_, _),
                _.globalReactionErrorHandlers.forEach(function (_) {
                  return __webpack_require__(_, _);
                });
            }
          }),
          (_.dispose = function () {
            this.isDisposed_ ||
              ((this.isDisposed_ = !0), this.isRunning_ || (_(), _(this), _()));
          }),
          (_.getDisposer_ = function (_) {
            var _ = this,
              _ = function _() {
                _.dispose(),
                  null == _ ||
                    null == _.removeEventListener ||
                    _.removeEventListener("abort", _);
              };
            return (
              null == _ ||
                null == _.addEventListener ||
                _.addEventListener("abort", _),
              (_[_] = this),
              _
            );
          }),
          (_.toString = function () {
            return "Reaction[" + this.name_ + "]";
          }),
          (_.trace = function (_) {
            void 0 === _ && (_ = !1);
          }),
          _
        );
      })();
      var _ = 100,
        _ = function (_) {
          return _();
        };
      function _() {
        _.inBatch > 0 || _.isRunningReactions || _(_);
      }
      function _() {
        _.isRunningReactions = !0;
        for (var _ = _.pendingReactions, _ = 0; _.length > 0; ) {
          ++_ === _ &&
            (console.error("[mobx] cycle in reaction: " + _[0]), _.splice(0));
          for (var _ = _.splice(0), _ = 0, _ = _.length; _ < _; _++)
            _[_].runReaction_();
        }
        _.isRunningReactions = !1;
      }
      var _ = _("Reaction", _);
      var _ = "action",
        _ = "autoAction",
        _ = "<unnamed action>",
        _ = _(_),
        _ = _("action.bound", {
          bound: !0,
        }),
        _ = _(_, {
          autoAction: !0,
        }),
        _ = _("autoAction.bound", {
          autoAction: !0,
          bound: !0,
        });
      function _(_) {
        return function (_, _) {
          return _(_)
            ? _(_.name || _, _, _)
            : _(_)
              ? _(_, _, _)
              : _(_)
                ? (_ ? _ : _).decorate_20223_(_, _)
                : _(_)
                  ? _(_, _, _ ? _ : _)
                  : _(_)
                    ? _(
                        _(_ ? _ : _, {
                          name: _,
                          autoAction: _,
                        }),
                      )
                    : void 0;
        };
      }
      var _ = _(!1);
      Object.assign(_, _);
      var _ = _(!0);
      function _(_) {
        return _(_.name, !1, _, this, void 0);
      }
      function _(_) {
        return _(_) && !0 === _.isMobxAction;
      }
      function _(_, _) {
        var _, _, _, _;
        void 0 === _ && (_ = _);
        var _,
          _ = null != (_ = null == (_ = _) ? void 0 : _.name) ? _ : "Autorun";
        if (!_.scheduler && !_.delay)
          _ = new _(
            _,
            function () {
              this.track(_);
            },
            _.onError,
            _.requiresObservable,
          );
        else {
          var _ = _(_),
            _ = !1;
          _ = new _(
            _,
            function () {
              _ ||
                ((_ = !0),
                _(function () {
                  (_ = !1), _.isDisposed_ || _.track(_);
                }));
            },
            _.onError,
            _.requiresObservable,
          );
        }
        function _() {
          _(_);
        }
        return (
          (null != (_ = _) && null != (_ = _.signal) && _.aborted) ||
            _.schedule_(),
          _.getDisposer_(null == (_ = _) ? void 0 : _.signal)
        );
      }
      Object.assign(_, _), (_.bound = _(_)), (_.bound = _(_));
      var _ = function (_) {
        return _();
      };
      function _(_) {
        return _.scheduler
          ? _.scheduler
          : _.delay
            ? function (_) {
                return setTimeout(_, _.delay);
              }
            : _;
      }
      var _ = "onBO",
        _ = "onBUO";
      function _(_, _, _) {
        return _(_, _, _, _);
      }
      function _(_, _, _, _) {
        var _ = "function" == typeof _ ? _(_, _) : _(_),
          _ = _(_) ? _ : _,
          _ = _ + "L";
        return (
          _[_] ? _[_].add(_) : (_[_] = new Set([_])),
          function () {
            var _ = _[_];
            _ && (_.delete(_), 0 === _.size && delete _[_]);
          }
        );
      }
      var _ = "never",
        _ = "always",
        _ = "observed";
      function _(_) {
        !0 === _.isolateGlobalState &&
          (function () {
            if (
              ((_.pendingReactions.length ||
                _.inBatch ||
                _.isRunningReactions) &&
                _(36),
              (_ = !0),
              _)
            ) {
              var _ = _();
              0 === --_.__mobxInstanceCount && (_.__mobxGlobals = void 0),
                (_ = new _());
            }
          })();
        var _,
          _,
          _ = _.useProxies,
          _ = _.enforceActions;
        if (
          (void 0 !== _ &&
            (_.useProxies =
              _ === _ || (_ !== _ && "undefined" != typeof Proxy)),
          "ifavailable" === _ && (_.verifyProxies = !0),
          void 0 !== _)
        ) {
          var _ = _ === _ ? _ : _ === _;
          (_.enforceActions = _), (_.allowStateChanges = !0 !== _ && _ !== _);
        }
        [
          "computedRequiresReaction",
          "reactionRequiresObservable",
          "observableRequiresReaction",
          "disableErrorBoundaries",
          "safeDescriptors",
        ].forEach(function (_) {
          _ in _ && (_[_] = !!_[_]);
        }),
          (_.allowStateReads = !_.observableRequiresReaction),
          _.reactionScheduler &&
            ((_ = _.reactionScheduler),
            (_ = _),
            (_ = function (_) {
              return _(function () {
                return __webpack_require__(_);
              });
            }));
      }
      function _(_, _, _, _) {
        var _ = _(_);
        return (
          _(function () {
            var _ = _(_, _)[_];
            _(_).forEach(function (_) {
              _.extend_(_, _[_], !_ || !(_ in _) || _[_]);
            });
          }),
          _
        );
      }
      var _ = 0;
      function _() {
        this.message = "FLOW_CANCELLED";
      }
      _.prototype = Object.create(Error.prototype);
      var _ = _("flow"),
        _ = _("flow.bound", {
          bound: !0,
        }),
        _ = Object.assign(function (_, _) {
          if (_(_)) return _.decorate_20223_(_, _);
          if (_(_)) return _(_, _, _);
          var _ = _,
            _ = _.name || "<unnamed flow>",
            _ = function () {
              var _,
                _ = arguments,
                _ = ++_,
                _ = _(_ + " - runid: " + _ + " - init", _).apply(this, _),
                _ = void 0,
                _ = new Promise(function (_, _) {
                  var _ = 0;
                  function _(_) {
                    var _;
                    _ = void 0;
                    try {
                      _ = _(
                        _ + " - runid: " + _ + " - yield " + _++,
                        _.next,
                      ).call(_, _);
                    } catch (_) {
                      return __webpack_require__(_);
                    }
                    _(_);
                  }
                  function _(_) {
                    var _;
                    _ = void 0;
                    try {
                      _ = _(
                        _ + " - runid: " + _ + " - yield " + _++,
                        _.throw,
                      ).call(_, _);
                    } catch (_) {
                      return __webpack_require__(_);
                    }
                    _(_);
                  }
                  function _(_) {
                    if (!_(null == _ ? void 0 : _.then))
                      return _.done
                        ? _(_.value)
                        : (_ = Promise.resolve(_.value)).then(_, _);
                    _.then(_, _);
                  }
                  (_ = _), _(void 0);
                });
              return (
                (_.cancel = _(_ + " - runid: " + _ + " - cancel", function () {
                  try {
                    _ && _(_);
                    var _ = _.return(void 0),
                      _ = Promise.resolve(_.value);
                    __webpack_require__.then(_, _), _(_), _(new _());
                  } catch (_) {
                    _(_);
                  }
                })),
                _
              );
            };
          return (_.isMobXFlow = !0), _;
        }, _);
      function _(_) {
        _(_.cancel) && _.cancel();
      }
      function _(_) {
        return !0 === (null == _ ? void 0 : _.isMobXFlow);
      }
      function _(_, _) {
        return (
          !!_ &&
          (void 0 !== _
            ? !!_(_) && _[_].values_.has(_)
            : _(_) || !!_[_] || _(_) || _(_) || _(_))
        );
      }
      function _(_) {
        return _(_);
      }
      function _(_, _) {
        void 0 === _ && (_ = void 0), _();
        try {
          return _.apply(_);
        } finally {
          _();
        }
      }
      function _(_, _, _) {
        return 1 === arguments.length || (_ && "object" == typeof _)
          ? (function (_, _) {
              var _, _, _;
              0;
              if (null != _ && null != (_ = _.signal) && _.aborted)
                return Object.assign(
                  Promise.reject(new Error("WHEN_ABORTED")),
                  {
                    cancel: function () {
                      return null;
                    },
                  },
                );
              var _ = new Promise(function (_, _) {
                var _,
                  _ = _(
                    _,
                    _,
                    _({}, _, {
                      onError: _,
                    }),
                  );
                (_ = function () {
                  _(), _(new Error("WHEN_CANCELLED"));
                }),
                  (_ = function () {
                    _(), _(new Error("WHEN_ABORTED"));
                  }),
                  null == _ ||
                    null == (_ = _.signal) ||
                    null == _.addEventListener ||
                    _.addEventListener("abort", _);
              }).finally(function () {
                var _;
                return null == _ ||
                  null == (_ = _.signal) ||
                  null == _.removeEventListener
                  ? void 0
                  : _.removeEventListener("abort", _);
              });
              return (_.cancel = _), _;
            })(_, _)
          : _(_, _, _ || {});
      }
      function _(_, _, _) {
        var _;
        if ("number" == typeof _.timeout) {
          var _ = new Error("WHEN_TIMEOUT");
          _ = setTimeout(function () {
            if (!_[_].isDisposed_) {
              if ((_(), !_.onError)) throw _;
              __webpack_require__.onError(_);
            }
          }, _.timeout);
        }
        _.name = "When";
        var _ = _("When-effect", _),
          _ = _(function (_) {
            _(!1, _) && (_.dispose(), _ && clearTimeout(_), _());
          }, _);
        return _;
      }
      function _(_) {
        return _[_];
      }
      _.bound = _(_);
      var _ = {
        has: function (_, _) {
          return _(_).has_(_);
        },
        get: function (_, _) {
          return _(_).get_(_);
        },
        set: function (_, _, _) {
          var _;
          return !!_(_) && (null == (_ = _(_).set_(_, _, !0)) || _);
        },
        deleteProperty: function (_, _) {
          var _;
          return !!_(_) && (null == (_ = _(_).delete_(_, !0)) || _);
        },
        defineProperty: function (_, _, _) {
          var _;
          return null == (_ = _(_).defineProperty_(_, _)) || _;
        },
        ownKeys: function (_) {
          return _(_).ownKeys_();
        },
        preventExtensions: function (_) {
          _(13);
        },
      };
      function _(_) {
        return void 0 !== _.interceptors_ && _.interceptors_.length > 0;
      }
      function _(_, _) {
        var _ = _.interceptors_ || (_.interceptors_ = []);
        return (
          __webpack_require__.push(_),
          _(function () {
            var _ = __webpack_require__.indexOf(_);
            -1 !== _ && __webpack_require__.splice(_, 1);
          })
        );
      }
      function _(_, _) {
        var _ = _();
        try {
          for (
            var _ = [].concat(_.interceptors_ || []), _ = 0, _ = _.length;
            _ < _ && ((_ = _[_](_)) && !_.type && _(14), _);
            _++
          );
          return _;
        } finally {
          _(_);
        }
      }
      function _(_) {
        return void 0 !== _.changeListeners_ && _.changeListeners_.length > 0;
      }
      function _(_, _) {
        var _ = _.changeListeners_ || (_.changeListeners_ = []);
        return (
          __webpack_require__.push(_),
          _(function () {
            var _ = __webpack_require__.indexOf(_);
            -1 !== _ && __webpack_require__.splice(_, 1);
          })
        );
      }
      function _(_, _) {
        var _ = _(),
          _ = _.changeListeners_;
        if (_) {
          for (var _ = 0, _ = (_ = _.slice()).length; _ < _; _++) _[_](_);
          _(_);
        }
      }
      function _(_, _, _) {
        return (
          _(function () {
            var _ = _(_, _)[_];
            null != _ ||
              (_ = (function (_) {
                return _(_, _) || _(_, _, _({}, _[_])), _[_];
              })(_)),
              _(_).forEach(function (_) {
                return _.make_(_, _[_]);
              });
          }),
          _
        );
      }
      var _ = "splice",
        _ = "update",
        _ = {
          get: function (_, _) {
            var _ = _[_];
            return _ === _
              ? _
              : "length" === _
                ? __webpack_require__.getArrayLength_()
                : "string" != typeof _ || isNaN(_)
                  ? _(_, _)
                    ? _[_]
                    : _[_]
                  : __webpack_require__.get_(parseInt(_));
          },
          set: function (_, _, _) {
            var _ = _[_];
            return (
              "length" === _ && _.setArrayLength_(_),
              "symbol" == typeof _ || isNaN(_)
                ? (_[_] = _)
                : _.set_(parseInt(_), _),
              !0
            );
          },
          preventExtensions: function () {
            _(15);
          },
        },
        _ = (function () {
          function _(_, _, _, _) {
            void 0 === _ && (_ = "ObservableArray"),
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
              (this.owned_ = _),
              (this.legacyMode_ = _),
              (this.atom_ = new _(_)),
              (this.enhancer_ = function (_, _) {
                return _(_, _, "ObservableArray[..]");
              });
          }
          var _ = _.prototype;
          return (
            (_.dehanceValue_ = function (_) {
              return void 0 !== this.dehancer ? this.dehancer(_) : _;
            }),
            (_.dehanceValues_ = function (_) {
              return void 0 !== this.dehancer && _.length > 0
                ? _.map(this.dehancer)
                : _;
            }),
            (_.intercept_ = function (_) {
              return _(this, _);
            }),
            (_.observe_ = function (_, _) {
              return (
                void 0 === _ && (_ = !1),
                _ &&
                  _({
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
                _(this, _)
              );
            }),
            (_.getArrayLength_ = function () {
              return this.atom_.reportObserved(), this.values_.length;
            }),
            (_.setArrayLength_ = function (_) {
              ("number" != typeof _ || isNaN(_) || _ < 0) &&
                _("Out of range: " + _);
              var _ = this.values_.length;
              if (_ !== _)
                if (_ > _) {
                  for (var _ = new Array(_ - _), _ = 0; _ < _ - _; _++)
                    _[_] = void 0;
                  this.spliceWithArray_(_, 0, _);
                } else this.spliceWithArray_(_, _ - _);
            }),
            (_.updateArrayLength_ = function (_, _) {
              _ !== this.lastKnownLength_ && _(16),
                (this.lastKnownLength_ += _),
                this.legacyMode_ && _ > 0 && _(_ + _ + 1);
            }),
            (_.spliceWithArray_ = function (_, _, _) {
              var _ = this;
              this.atom_;
              var _ = this.values_.length;
              if (
                (void 0 === _
                  ? (_ = 0)
                  : _ > _
                    ? (_ = _)
                    : _ < 0 && (_ = Math.max(0, _ + _)),
                (_ =
                  1 === arguments.length
                    ? _ - _
                    : null == _
                      ? 0
                      : Math.max(0, Math.min(_, _ - _))),
                void 0 === _ && (_ = _),
                _(this))
              ) {
                var _ = _(this, {
                  object: this.proxy_,
                  type: _,
                  index: _,
                  removedCount: _,
                  added: _,
                });
                if (!_) return _;
                (_ = _.removedCount), (_ = _.added);
              }
              if (
                ((_ =
                  0 === _.length
                    ? _
                    : __webpack_require__.map(function (_) {
                        return _.enhancer_(_, void 0);
                      })),
                this.legacyMode_)
              ) {
                var _ = _.length - _;
                this.updateArrayLength_(_, _);
              }
              var _ = this.spliceItemsIntoValues_(_, _, _);
              return (
                (0 === _ && 0 === _.length) || this.notifyArraySplice_(_, _, _),
                this.dehanceValues_(_)
              );
            }),
            (_.spliceItemsIntoValues_ = function (_, _, _) {
              var _;
              if (_.length < 1e4)
                return (_ = this.values_).splice.apply(_, [_, _].concat(_));
              var _ = this.values_.slice(_, _ + _),
                _ = this.values_.slice(_ + _);
              this.values_.length += _.length - _;
              for (var _ = 0; _ < _.length; _++) this.values_[_ + _] = _[_];
              for (var _ = 0; _ < _.length; _++)
                this.values_[_ + _.length + _] = _[_];
              return _;
            }),
            (_.notifyArrayChildUpdate_ = function (_, _, _) {
              var _ = !this.owned_ && !1,
                _ = _(this),
                _ =
                  _ || _
                    ? {
                        observableKind: "array",
                        object: this.proxy_,
                        type: _,
                        debugObjectName: this.atom_.name_,
                        index: _,
                        newValue: _,
                        oldValue: _,
                      }
                    : null;
              this.atom_.reportChanged(), _ && _(this, _);
            }),
            (_.notifyArraySplice_ = function (_, _, _) {
              var _ = !this.owned_ && !1,
                _ = _(this),
                _ =
                  _ || _
                    ? {
                        observableKind: "array",
                        object: this.proxy_,
                        debugObjectName: this.atom_.name_,
                        type: _,
                        index: _,
                        removed: _,
                        added: _,
                        removedCount: _.length,
                        addedCount: _.length,
                      }
                    : null;
              this.atom_.reportChanged(), _ && _(this, _);
            }),
            (_.get_ = function (_) {
              if (!(this.legacyMode_ && _ >= this.values_.length))
                return (
                  this.atom_.reportObserved(),
                  this.dehanceValue_(this.values_[_])
                );
              console.warn("[mobx] Out of bounds read: " + _);
            }),
            (_.set_ = function (_, _) {
              var _ = this.values_;
              if (
                (this.legacyMode_ && _ > _.length && _(17, _, _.length),
                _ < _.length)
              ) {
                this.atom_;
                var _ = _[_];
                if (_(this)) {
                  var _ = _(this, {
                    type: _,
                    object: this.proxy_,
                    index: _,
                    newValue: _,
                  });
                  if (!_) return;
                  _ = _.newValue;
                }
                (_ = this.enhancer_(_, _)) !== _ &&
                  ((_[_] = _), this.notifyArrayChildUpdate_(_, _, _));
              } else {
                for (
                  var _ = new Array(_ + 1 - _.length), _ = 0;
                  _ < _.length - 1;
                  _++
                )
                  _[_] = void 0;
                (_[_.length - 1] = _), this.spliceWithArray_(_.length, 0, _);
              }
            }),
            _
          );
        })();
      function _(_, _, _, _) {
        return (
          void 0 === _ && (_ = "ObservableArray"),
          void 0 === _ && (_ = !1),
          _(),
          _(function () {
            var _ = new _(_, _, _, !1);
            _(_.values_, _, _);
            var _ = new Proxy(_.values_, _);
            return (
              (_.proxy_ = _), _ && _.length && _.spliceWithArray_(0, 0, _), _
            );
          })
        );
      }
      var _ = {
        clear: function () {
          return this.splice(0);
        },
        replace: function (_) {
          var _ = this[_];
          return _.spliceWithArray_(0, _.values_.length, _);
        },
        toJSON: function () {
          return this.slice();
        },
        splice: function (_, _) {
          for (
            var _ = arguments.length, _ = new Array(_ > 2 ? _ - 2 : 0), _ = 2;
            _ < _;
            _++
          )
            _[_ - 2] = arguments[_];
          var _ = this[_];
          switch (arguments.length) {
            case 0:
              return [];
            case 1:
              return _.spliceWithArray_(_);
            case 2:
              return _.spliceWithArray_(_, _);
          }
          return _.spliceWithArray_(_, _, _);
        },
        spliceWithArray: function (_, _, _) {
          return this[_].spliceWithArray_(_, _, _);
        },
        push: function () {
          for (
            var _ = this[_], _ = arguments.length, _ = new Array(_), _ = 0;
            _ < _;
            _++
          )
            _[_] = arguments[_];
          return _.spliceWithArray_(_.values_.length, 0, _), _.values_.length;
        },
        pop: function () {
          return this.splice(Math.max(this[_].values_.length - 1, 0), 1)[0];
        },
        shift: function () {
          return this.splice(0, 1)[0];
        },
        unshift: function () {
          for (
            var _ = this[_], _ = arguments.length, _ = new Array(_), _ = 0;
            _ < _;
            _++
          )
            _[_] = arguments[_];
          return _.spliceWithArray_(0, 0, _), _.values_.length;
        },
        reverse: function () {
          return (
            _.trackingDerivation && _(37, "reverse"),
            this.replace(this.slice().reverse()),
            this
          );
        },
        sort: function () {
          _.trackingDerivation && _(37, "sort");
          var _ = this.slice();
          return _.sort.apply(_, arguments), this.replace(_), this;
        },
        remove: function (_) {
          var _ = this[_],
            _ = _.dehanceValues_(_.values_).indexOf(_);
          return _ > -1 && (this.splice(_, 1), !0);
        },
      };
      function _(_, _) {
        "function" == typeof Array.prototype[_] && (_[_] = _(_));
      }
      function _(_) {
        return function () {
          var _ = this[_];
          _.atom_.reportObserved();
          var _ = _.dehanceValues_(_.values_);
          return _[_].apply(_, arguments);
        };
      }
      function _(_) {
        return function (_, _) {
          var _ = this,
            _ = this[_];
          return (
            _.atom_.reportObserved(),
            _.dehanceValues_(_.values_)[_](function (_, _) {
              return _.call(_, _, _, _);
            })
          );
        };
      }
      function _(_) {
        return function () {
          var _ = this,
            _ = this[_];
          _.atom_.reportObserved();
          var _ = __webpack_require__.dehanceValues_(_.values_),
            _ = arguments[0];
          return (
            (arguments[0] = function (_, _, _) {
              return _(_, _, _, _);
            }),
            _[_].apply(_, arguments)
          );
        };
      }
      _("at", _),
        _("concat", _),
        _("flat", _),
        _("includes", _),
        _("indexOf", _),
        _("join", _),
        _("lastIndexOf", _),
        _("slice", _),
        _("toString", _),
        _("toLocaleString", _),
        _("toSorted", _),
        _("toSpliced", _),
        _("with", _),
        _("every", _),
        _("filter", _),
        _("find", _),
        _("findIndex", _),
        _("findLast", _),
        _("findLastIndex", _),
        _("flatMap", _),
        _("forEach", _),
        _("map", _),
        _("some", _),
        _("toReversed", _),
        _("reduce", _),
        _("reduceRight", _);
      var _ = _("ObservableArrayAdministration", _);
      function _(_) {
        return _(_) && _(_[_]);
      }
      var _ = {},
        _ = "add",
        _ = "delete",
        _ = (function () {
          function _(_, _, _) {
            var _ = this;
            void 0 === _ && (_ = _),
              void 0 === _ && (_ = "ObservableMap"),
              (this.enhancer_ = void 0),
              (this.name_ = void 0),
              (this[_] = _),
              (this.data_ = void 0),
              (this.hasMap_ = void 0),
              (this.keysAtom_ = void 0),
              (this.interceptors_ = void 0),
              (this.changeListeners_ = void 0),
              (this.dehancer = void 0),
              (this.enhancer_ = _),
              (this.name_ = _),
              _(Map) || _(18),
              _(function () {
                (_.keysAtom_ = _("ObservableMap.keys()")),
                  (_.data_ = new Map()),
                  (_.hasMap_ = new Map()),
                  _ && _.merge(_);
              });
          }
          var _ = _.prototype;
          return (
            (_.has_ = function (_) {
              return this.data_.has(_);
            }),
            (_.has = function (_) {
              var _ = this;
              if (!_.trackingDerivation) return this.has_(_);
              var _ = this.hasMap_.get(_);
              if (!_) {
                var _ = (_ = new _(this.has_(_), _, "ObservableMap.key?", !1));
                this.hasMap_.set(_, _),
                  _(_, function () {
                    return _.hasMap_.delete(_);
                  });
              }
              return __webpack_require__.get();
            }),
            (_.set = function (_, _) {
              var _ = this.has_(_);
              if (_(this)) {
                var _ = _(this, {
                  type: _ ? _ : _,
                  object: this,
                  newValue: _,
                  name: _,
                });
                if (!_) return this;
                _ = _.newValue;
              }
              return _ ? this.updateValue_(_, _) : this.addValue_(_, _), this;
            }),
            (_.delete = function (_) {
              var _ = this;
              if (
                (this.keysAtom_, _(this)) &&
                !_(this, {
                  type: _,
                  object: this,
                  name: _,
                })
              )
                return !1;
              if (this.has_(_)) {
                var _ = _(this),
                  _ = _
                    ? {
                        observableKind: "map",
                        debugObjectName: this.name_,
                        type: _,
                        object: this,
                        oldValue: this.data_.get(_).value_,
                        name: _,
                      }
                    : null;
                return (
                  _(function () {
                    var _;
                    _.keysAtom_.reportChanged(),
                      null == (_ = _.hasMap_.get(_)) ||
                        __webpack_require__.setNewValue_(!1),
                      _.data_.get(_).setNewValue_(void 0),
                      _.data_.delete(_);
                  }),
                  _ && _(this, _),
                  !0
                );
              }
              return !1;
            }),
            (_.updateValue_ = function (_, _) {
              var _ = this.data_.get(_);
              if (
                (_ = __webpack_require__.prepareNewValue_(_)) !== _.UNCHANGED
              ) {
                var _ = _(this),
                  _ = _
                    ? {
                        observableKind: "map",
                        debugObjectName: this.name_,
                        type: _,
                        object: this,
                        oldValue: _.value_,
                        name: _,
                        newValue: _,
                      }
                    : null;
                0, __webpack_require__.setNewValue_(_), _ && _(this, _);
              }
            }),
            (_.addValue_ = function (_, _) {
              var _ = this;
              this.keysAtom_,
                _(function () {
                  var _,
                    _ = new _(_, _.enhancer_, "ObservableMap.key", !1);
                  _.data_.set(_, _),
                    (_ = _.value_),
                    null == (_ = _.hasMap_.get(_)) || _.setNewValue_(!0),
                    _.keysAtom_.reportChanged();
                });
              var _ = _(this),
                _ = _
                  ? {
                      observableKind: "map",
                      debugObjectName: this.name_,
                      type: _,
                      object: this,
                      name: _,
                      newValue: _,
                    }
                  : null;
              _ && _(this, _);
            }),
            (_.get = function (_) {
              return this.has(_)
                ? this.dehanceValue_(this.data_.get(_).get())
                : this.dehanceValue_(void 0);
            }),
            (_.dehanceValue_ = function (_) {
              return void 0 !== this.dehancer ? this.dehancer(_) : _;
            }),
            (_.keys = function () {
              return this.keysAtom_.reportObserved(), this.data_.keys();
            }),
            (_.values = function () {
              var _ = this,
                _ = this.keys();
              return _({
                next: function () {
                  var _ = _.next(),
                    _ = _.done,
                    _ = _.value;
                  return {
                    done: _,
                    value: _ ? void 0 : _.get(_),
                  };
                },
              });
            }),
            (_.entries = function () {
              var _ = this,
                _ = this.keys();
              return _({
                next: function () {
                  var _ = _.next(),
                    _ = _.done,
                    _ = _.value;
                  return {
                    done: _,
                    value: _ ? void 0 : [_, _.get(_)],
                  };
                },
              });
            }),
            (_[Symbol.iterator] = function () {
              return this.entries();
            }),
            (_.forEach = function (_, _) {
              for (var _, _ = _(this); !(_ = _()).done; ) {
                var _ = _.value,
                  _ = _[0],
                  _ = _[1];
                _.call(_, _, _, this);
              }
            }),
            (_.merge = function (_) {
              var _ = this;
              return (
                _(_) && (_ = new Map(_)),
                _(function () {
                  var _, _, _;
                  _(_)
                    ? (function (_) {
                        var _ = Object.keys(_);
                        if (!_) return _;
                        var _ = Object.getOwnPropertySymbols(_);
                        return _.length
                          ? [].concat(
                              _,
                              __webpack_require__.filter(function (_) {
                                return _.propertyIsEnumerable.call(_, _);
                              }),
                            )
                          : _;
                      })(_).forEach(function (_) {
                        return _.set(_, _[_]);
                      })
                    : Array.isArray(_)
                      ? _.forEach(function (_) {
                          var _ = _[0],
                            _ = _[1];
                          return _.set(_, _);
                        })
                      : _(_)
                        ? ((_ = _),
                          (_ = Object.getPrototypeOf(_)),
                          (_ = Object.getPrototypeOf(_)),
                          null !== Object.getPrototypeOf(_) && _(19, _),
                          _.forEach(function (_, _) {
                            return _.set(_, _);
                          }))
                        : null != _ && _(20, _);
                }),
                this
              );
            }),
            (_.clear = function () {
              var _ = this;
              _(function () {
                _(function () {
                  for (
                    var _, _ = _(_.keys());
                    !(_ = __webpack_require__()).done;
                  ) {
                    var _ = _.value;
                    _.delete(_);
                  }
                });
              });
            }),
            (_.replace = function (_) {
              var _ = this;
              return (
                _(function () {
                  for (
                    var _,
                      _ = (function (_) {
                        if (_(_) || _(_)) return _;
                        if (Array.isArray(_)) return new Map(_);
                        if (_(_)) {
                          var _ = new Map();
                          for (var _ in _) _.set(_, _[_]);
                          return _;
                        }
                        return _(21, _);
                      })(_),
                      _ = new Map(),
                      _ = !1,
                      _ = _(_.data_.keys());
                    !(_ = _()).done;
                  ) {
                    var _ = _.value;
                    if (!_.has(_))
                      if (_.delete(_)) _ = !0;
                      else {
                        var _ = _.data_.get(_);
                        _.set(_, _);
                      }
                  }
                  for (var _, _ = _(_.entries()); !(_ = _()).done; ) {
                    var _ = _.value,
                      _ = _[0],
                      _ = _[1],
                      _ = _.data_.has(_);
                    if ((_.set(_, _), _.data_.has(_))) {
                      var _ = _.data_.get(_);
                      _.set(_, _), _ || (_ = !0);
                    }
                  }
                  if (!_)
                    if (_.data_.size !== _.size) _.keysAtom_.reportChanged();
                    else
                      for (
                        var _ = _.data_.keys(),
                          _ = _.keys(),
                          _ = _.next(),
                          _ = _.next();
                        !_.done;
                      ) {
                        if (_.value !== _.value) {
                          _.keysAtom_.reportChanged();
                          break;
                        }
                        (_ = _.next()), (_ = _.next());
                      }
                  _.data_ = _;
                }),
                this
              );
            }),
            (_.toString = function () {
              return "[object ObservableMap]";
            }),
            (_.toJSON = function () {
              return Array.from(this);
            }),
            (_.observe_ = function (_, _) {
              return _(this, _);
            }),
            (_.intercept_ = function (_) {
              return _(this, _);
            }),
            _(_, [
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
        _ = _("ObservableMap", _);
      var _ = {},
        _ = (function () {
          function _(_, _, _) {
            var _ = this;
            void 0 === _ && (_ = _),
              void 0 === _ && (_ = "ObservableSet"),
              (this.name_ = void 0),
              (this[_] = _),
              (this.data_ = new Set()),
              (this.atom_ = void 0),
              (this.changeListeners_ = void 0),
              (this.interceptors_ = void 0),
              (this.dehancer = void 0),
              (this.enhancer_ = void 0),
              (this.name_ = _),
              _(Set) || _(22),
              (this.enhancer_ = function (_, _) {
                return _(_, _, _);
              }),
              _(function () {
                (_.atom_ = _(_.name_)), _ && _.replace(_);
              });
          }
          var _ = _.prototype;
          return (
            (_.dehanceValue_ = function (_) {
              return void 0 !== this.dehancer ? this.dehancer(_) : _;
            }),
            (_.clear = function () {
              var _ = this;
              _(function () {
                _(function () {
                  for (
                    var _, _ = _(_.data_.values());
                    !(_ = __webpack_require__()).done;
                  ) {
                    var _ = _.value;
                    _.delete(_);
                  }
                });
              });
            }),
            (_.forEach = function (_, _) {
              for (var _, _ = _(this); !(_ = _()).done; ) {
                var _ = _.value;
                _.call(_, _, _, this);
              }
            }),
            (_.add = function (_) {
              var _ = this;
              if (
                (this.atom_, _(this)) &&
                !_(this, {
                  type: _,
                  object: this,
                  newValue: _,
                })
              )
                return this;
              if (!this.has(_)) {
                _(function () {
                  _.data_.add(_.enhancer_(_, void 0)), _.atom_.reportChanged();
                });
                var _ = !1,
                  _ = _(this),
                  _ = _
                    ? {
                        observableKind: "set",
                        debugObjectName: this.name_,
                        type: _,
                        object: this,
                        newValue: _,
                      }
                    : null;
                _, _ && _(this, _);
              }
              return this;
            }),
            (_.delete = function (_) {
              var _ = this;
              if (
                _(this) &&
                !_(this, {
                  type: _,
                  object: this,
                  oldValue: _,
                })
              )
                return !1;
              if (this.has(_)) {
                var _ = _(this),
                  _ = _
                    ? {
                        observableKind: "set",
                        debugObjectName: this.name_,
                        type: _,
                        object: this,
                        oldValue: _,
                      }
                    : null;
                return (
                  _(function () {
                    _.atom_.reportChanged(), _.data_.delete(_);
                  }),
                  _ && _(this, _),
                  !0
                );
              }
              return !1;
            }),
            (_.has = function (_) {
              return (
                this.atom_.reportObserved(),
                this.data_.has(this.dehanceValue_(_))
              );
            }),
            (_.entries = function () {
              var _ = 0,
                _ = Array.from(this.keys()),
                _ = Array.from(this.values());
              return _({
                next: function () {
                  var _ = _;
                  return (
                    (_ += 1),
                    _ < _.length
                      ? {
                          value: [_[_], _[_]],
                          done: !1,
                        }
                      : {
                          done: !0,
                        }
                  );
                },
              });
            }),
            (_.keys = function () {
              return this.values();
            }),
            (_.values = function () {
              this.atom_.reportObserved();
              var _ = this,
                _ = 0,
                _ = Array.from(this.data_.values());
              return _({
                next: function () {
                  return _ < _.length
                    ? {
                        value: _.dehanceValue_(_[_++]),
                        done: !1,
                      }
                    : {
                        done: !0,
                      };
                },
              });
            }),
            (_.intersection = function (_) {
              return _(_)
                ? _.intersection(this)
                : new Set(this).intersection(_);
            }),
            (_.union = function (_) {
              return _(_) ? _.union(this) : new Set(this).union(_);
            }),
            (_.difference = function (_) {
              return new Set(this).difference(_);
            }),
            (_.symmetricDifference = function (_) {
              return _(_)
                ? _.symmetricDifference(this)
                : new Set(this).symmetricDifference(_);
            }),
            (_.isSubsetOf = function (_) {
              return new Set(this).isSubsetOf(_);
            }),
            (_.isSupersetOf = function (_) {
              return new Set(this).isSupersetOf(_);
            }),
            (_.isDisjointFrom = function (_) {
              return _(_)
                ? _.isDisjointFrom(this)
                : new Set(this).isDisjointFrom(_);
            }),
            (_.replace = function (_) {
              var _ = this;
              return (
                _(_) && (_ = new Set(_)),
                _(function () {
                  Array.isArray(_) || _(_)
                    ? (_.clear(),
                      _.forEach(function (_) {
                        return _.add(_);
                      }))
                    : null != _ && _("Cannot initialize set from " + _);
                }),
                this
              );
            }),
            (_.observe_ = function (_, _) {
              return _(this, _);
            }),
            (_.intercept_ = function (_) {
              return _(this, _);
            }),
            (_.toJSON = function () {
              return Array.from(this);
            }),
            (_.toString = function () {
              return "[object ObservableSet]";
            }),
            (_[Symbol.iterator] = function () {
              return this.values();
            }),
            _(_, [
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
        _ = _("ObservableSet", _),
        _ = Object.create(null),
        _ = "remove",
        _ = (function () {
          function _(_, _, _, _) {
            void 0 === _ && (_ = new Map()),
              void 0 === _ && (_ = _),
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
              (this.target_ = _),
              (this.values_ = _),
              (this.name_ = _),
              (this.defaultAnnotation_ = _),
              (this.keysAtom_ = new _("ObservableObject.keys")),
              (this.isPlainObject_ = _(this.target_));
          }
          var _ = _.prototype;
          return (
            (_.getObservablePropValue_ = function (_) {
              return this.values_.get(_).get();
            }),
            (_.setObservablePropValue_ = function (_, _) {
              var _ = this.values_.get(_);
              if (_ instanceof _) return __webpack_require__.set(_), !0;
              if (_(this)) {
                var _ = _(this, {
                  type: _,
                  object: this.proxy_ || this.target_,
                  name: _,
                  newValue: _,
                });
                if (!_) return null;
                _ = _.newValue;
              }
              if (
                (_ = __webpack_require__.prepareNewValue_(_)) !== _.UNCHANGED
              ) {
                var _ = _(this),
                  _ = _
                    ? {
                        type: _,
                        observableKind: "object",
                        debugObjectName: this.name_,
                        object: this.proxy_ || this.target_,
                        oldValue: _.value_,
                        name: _,
                        newValue: _,
                      }
                    : null;
                0, __webpack_require__.setNewValue_(_), _ && _(this, _);
              }
              return !0;
            }),
            (_.get_ = function (_) {
              return (
                _.trackingDerivation && !_(this.target_, _) && this.has_(_),
                this.target_[_]
              );
            }),
            (_.set_ = function (_, _, _) {
              return (
                void 0 === _ && (_ = !1),
                _(this.target_, _)
                  ? this.values_.has(_)
                    ? this.setObservablePropValue_(_, _)
                    : _
                      ? Reflect.set(this.target_, _, _)
                      : ((this.target_[_] = _), !0)
                  : this.extend_(
                      _,
                      {
                        value: _,
                        enumerable: !0,
                        writable: !0,
                        configurable: !0,
                      },
                      this.defaultAnnotation_,
                      _,
                    )
              );
            }),
            (_.has_ = function (_) {
              if (!_.trackingDerivation) return _ in this.target_;
              this.pendingKeys_ || (this.pendingKeys_ = new Map());
              var _ = this.pendingKeys_.get(_);
              return (
                _ ||
                  ((_ = new _(
                    _ in this.target_,
                    _,
                    "ObservableObject.key?",
                    !1,
                  )),
                  this.pendingKeys_.set(_, _)),
                _.get()
              );
            }),
            (_.make_ = function (_, _) {
              if ((!0 === _ && (_ = this.defaultAnnotation_), !1 !== _)) {
                if ((_(this, _, _), !(_ in this.target_))) {
                  var _;
                  if (null != (_ = this.target_[_]) && _[_]) return;
                  _(1, _.annotationType_, this.name_ + "." + _.toString());
                }
                for (var _ = this.target_; _ && _ !== _; ) {
                  var _ = _(_, _);
                  if (_) {
                    var _ = _.make_(this, _, _, _);
                    if (0 === _) return;
                    if (1 === _) break;
                  }
                  _ = Object.getPrototypeOf(_);
                }
                _(this, _, _);
              }
            }),
            (_.extend_ = function (_, _, _, _) {
              if (
                (void 0 === _ && (_ = !1),
                !0 === _ && (_ = this.defaultAnnotation_),
                !1 === _)
              )
                return this.defineProperty_(_, _, _);
              _(this, _, _);
              var _ = __webpack_require__.extend_(this, _, _, _);
              return _ && _(this, _, _), _;
            }),
            (_.defineProperty_ = function (_, _, _) {
              void 0 === _ && (_ = !1), this.keysAtom_;
              try {
                _();
                var _ = this.delete_(_);
                if (!_) return _;
                if (_(this)) {
                  var _ = _(this, {
                    object: this.proxy_ || this.target_,
                    name: _,
                    type: _,
                    newValue: _.value,
                  });
                  if (!_) return null;
                  var _ = _.newValue;
                  _.value !== _ &&
                    (_ = _({}, _, {
                      value: _,
                    }));
                }
                if (_) {
                  if (!Reflect.defineProperty(this.target_, _, _)) return !1;
                } else _(this.target_, _, _);
                this.notifyPropertyAddition_(_, _.value);
              } finally {
                _();
              }
              return !0;
            }),
            (_.defineObservableProperty_ = function (_, _, _, _) {
              void 0 === _ && (_ = !1), this.keysAtom_;
              try {
                _();
                var _ = this.delete_(_);
                if (!_) return _;
                if (_(this)) {
                  var _ = _(this, {
                    object: this.proxy_ || this.target_,
                    name: _,
                    type: _,
                    newValue: _,
                  });
                  if (!_) return null;
                  _ = _.newValue;
                }
                var _ = _(_),
                  _ = {
                    configurable: !_.safeDescriptors || this.isPlainObject_,
                    enumerable: !0,
                    get: _.get,
                    set: _.set,
                  };
                if (_) {
                  if (!Reflect.defineProperty(this.target_, _, _)) return !1;
                } else _(this.target_, _, _);
                var _ = new _(_, _, "ObservableObject.key", !1);
                this.values_.set(_, _),
                  this.notifyPropertyAddition_(_, _.value_);
              } finally {
                _();
              }
              return !0;
            }),
            (_.defineComputedProperty_ = function (_, _, _) {
              void 0 === _ && (_ = !1), this.keysAtom_;
              try {
                _();
                var _ = this.delete_(_);
                if (!_) return _;
                if (_(this))
                  if (
                    !_(this, {
                      object: this.proxy_ || this.target_,
                      name: _,
                      type: _,
                      newValue: void 0,
                    })
                  )
                    return null;
                _.name || (_.name = "ObservableObject.key"),
                  (_.context = this.proxy_ || this.target_);
                var _ = _(_),
                  _ = {
                    configurable: !_.safeDescriptors || this.isPlainObject_,
                    enumerable: !1,
                    get: _.get,
                    set: _.set,
                  };
                if (_) {
                  if (!Reflect.defineProperty(this.target_, _, _)) return !1;
                } else _(this.target_, _, _);
                this.values_.set(_, new _(_)),
                  this.notifyPropertyAddition_(_, void 0);
              } finally {
                _();
              }
              return !0;
            }),
            (_.delete_ = function (_, _) {
              if (
                (void 0 === _ && (_ = !1), this.keysAtom_, !_(this.target_, _))
              )
                return !0;
              if (
                _(this) &&
                !_(this, {
                  object: this.proxy_ || this.target_,
                  name: _,
                  type: _,
                })
              )
                return null;
              try {
                var _;
                _();
                var _,
                  _ = _(this),
                  _ = this.values_.get(_),
                  _ = void 0;
                if (!_ && _)
                  _ = null == (_ = _(this.target_, _)) ? void 0 : _.value;
                if (_) {
                  if (!Reflect.deleteProperty(this.target_, _)) return !1;
                } else delete this.target_[_];
                if (
                  (_ &&
                    (this.values_.delete(_),
                    _ instanceof _ && (_ = _.value_),
                    _(_)),
                  this.keysAtom_.reportChanged(),
                  null == (_ = this.pendingKeys_) ||
                    null == (_ = __webpack_require__.get(_)) ||
                    __webpack_require__.set(_ in this.target_),
                  _)
                ) {
                  var _ = {
                    type: _,
                    observableKind: "object",
                    object: this.proxy_ || this.target_,
                    debugObjectName: this.name_,
                    oldValue: _,
                    name: _,
                  };
                  0, _ && _(this, _);
                }
              } finally {
                _();
              }
              return !0;
            }),
            (_.observe_ = function (_, _) {
              return _(this, _);
            }),
            (_.intercept_ = function (_) {
              return _(this, _);
            }),
            (_.notifyPropertyAddition_ = function (_, _) {
              var _,
                _ = _(this);
              if (_) {
                var _ = _
                  ? {
                      type: _,
                      observableKind: "object",
                      debugObjectName: this.name_,
                      object: this.proxy_ || this.target_,
                      name: _,
                      newValue: _,
                    }
                  : null;
                0, _ && _(this, _);
              }
              null == (_ = this.pendingKeys_) ||
                null == (_ = __webpack_require__.get(_)) ||
                __webpack_require__.set(!0),
                this.keysAtom_.reportChanged();
            }),
            (_.ownKeys_ = function () {
              return this.keysAtom_.reportObserved(), _(this.target_);
            }),
            (_.keys_ = function () {
              return this.keysAtom_.reportObserved(), Object.keys(this.target_);
            }),
            _
          );
        })();
      function _(_, _) {
        var _;
        if (_(_, _)) return _;
        var _ =
            null != (_ = null == _ ? void 0 : _.name) ? _ : "ObservableObject",
          _ = new _(
            _,
            new Map(),
            String(_),
            (function (_) {
              var _;
              return _ ? (null != (_ = _.defaultDecorator) ? _ : _(_)) : void 0;
            })(_),
          );
        return _(_, _, _), _;
      }
      var _ = _("ObservableObjectAdministration", _);
      function _(_) {
        return (
          _[_] ||
          (_[_] = {
            get: function () {
              return this[_].getObservablePropValue_(_);
            },
            set: function (_) {
              return this[_].setObservablePropValue_(_, _);
            },
          })
        );
      }
      function _(_) {
        return !!_(_) && _(_[_]);
      }
      function _(_, _, _) {
        var _;
        null == (_ = _.target_[_]) || delete _[_];
      }
      function _(_, _, _) {}
      var _,
        _,
        _ = _(0),
        _ = (function () {
          var _ = !1,
            _ = {};
          return (
            Object.defineProperty(_, "0", {
              set: function () {
                _ = !0;
              },
            }),
            (Object.create(_)[0] = 1),
            !1 === _
          );
        })(),
        _ = 0,
        _ = function () {};
      (_ = _),
        (_ = Array.prototype),
        Object.setPrototypeOf
          ? Object.setPrototypeOf(_.prototype, _)
          : void 0 !== _.prototype.__proto__
            ? (_.prototype.__proto__ = _)
            : (_.prototype = _);
      var _ = (function (_) {
        function _(_, _, _, _) {
          var _;
          return (
            void 0 === _ && (_ = "ObservableArray"),
            void 0 === _ && (_ = !1),
            (_ = _.call(this) || this),
            _(function () {
              var _ = new _(_, _, _, !0);
              (_.proxy_ = _),
                _(_, _, _),
                _ && _.length && _.spliceWithArray(0, 0, _),
                _ && Object.defineProperty(_, "0", _);
            }),
            _
          );
        }
        _(_, _);
        var _ = _.prototype;
        return (
          (_.concat = function () {
            this[_].atom_.reportObserved();
            for (var _ = arguments.length, _ = new Array(_), _ = 0; _ < _; _++)
              _[_] = arguments[_];
            return Array.prototype.concat.apply(
              this.slice(),
              _.map(function (_) {
                return _(_) ? _.slice() : _;
              }),
            );
          }),
          (_[Symbol.iterator] = function () {
            var _ = this,
              _ = 0;
            return _({
              next: function () {
                return _ < _.length
                  ? {
                      value: _[_++],
                      done: !1,
                    }
                  : {
                      done: !0,
                      value: void 0,
                    };
              },
            });
          }),
          _(_, [
            {
              key: "length",
              get: function () {
                return this[_].getArrayLength_();
              },
              set: function (_) {
                this[_].setArrayLength_(_);
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
      })(_);
      function _(_) {
        return {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return this[_].get_(_);
          },
          set: function (_) {
            this[_].set_(_, _);
          },
        };
      }
      function _(_) {
        _(_.prototype, "" + _, _(_));
      }
      function _(_) {
        if (_ > _) {
          for (var _ = _; _ < _ + 100; _++) _(_);
          _ = _;
        }
      }
      function _(_, _, _) {
        return new _(_, _, _);
      }
      function _(_, _) {
        if ("object" == typeof _ && null !== _) {
          if (_(_)) return void 0 !== _ && _(23), _[_].atom_;
          if (_(_)) return _.atom_;
          if (_(_)) {
            if (void 0 === _) return _.keysAtom_;
            var _ = _.data_.get(_) || _.hasMap_.get(_);
            return _ || _(25, _, _(_)), _;
          }
          if (_(_)) {
            if (!_) return _(26);
            var _ = _[_].values_.get(_);
            return _ || _(27, _, _(_)), _;
          }
          if (_(_) || _(_) || _(_)) return _;
        } else if (_(_) && _(_[_])) return _[_];
        _(28);
      }
      function _(_, _) {
        return (
          _ || _(29),
          void 0 !== _
            ? _(_(_, _))
            : _(_) || _(_) || _(_) || _(_) || _(_)
              ? _
              : _[_]
                ? _[_]
                : void _(24, _)
        );
      }
      function _(_, _) {
        var _;
        if (void 0 !== _) _ = _(_, _);
        else {
          if (_(_)) return _.name;
          _ = _(_) || _(_) || _(_) ? _(_) : _(_);
        }
        return _.name_;
      }
      function _(_) {
        var _ = _(),
          _ = _(!0);
        _();
        try {
          return _();
        } finally {
          _(), _(_), _(_);
        }
      }
      Object.entries(_).forEach(function (_) {
        var _ = _[0],
          _ = _[1];
        "concat" !== _ && _(_.prototype, _, _);
      }),
        _(1e3);
      var _ = _.toString;
      function _(_, _, _) {
        return void 0 === _ && (_ = -1), _(_, _, _);
      }
      function _(_, _, _, _, _) {
        if (_ === _) return 0 !== _ || 1 / _ == 1 / _;
        if (null == _ || null == _) return !1;
        if (_ != _) return _ != _;
        var _ = typeof _;
        if ("function" !== _ && "object" !== _ && "object" != typeof _)
          return !1;
        var _ = _.call(_);
        if (_ !== _.call(_)) return !1;
        switch (_) {
          case "[object RegExp]":
          case "[object String]":
            return "" + _ == "" + _;
          case "[object Number]":
            return +_ != +_ ? +_ != +_ : 0 === +_ ? 1 / +_ == 1 / _ : +_ === +_;
          case "[object Date]":
          case "[object Boolean]":
            return +_ === +_;
          case "[object Symbol]":
            return (
              "undefined" != typeof Symbol &&
              Symbol.valueOf.call(_) === Symbol.valueOf.call(_)
            );
          case "[object Map]":
          case "[object Set]":
            _ >= 0 && _++;
        }
        (_ = _(_)), (_ = _(_));
        var _ = "[object Array]" === _;
        if (!_) {
          if ("object" != typeof _ || "object" != typeof _) return !1;
          var _ = _.constructor,
            _ = _.constructor;
          if (
            _ !== _ &&
            !(_(_) && _ instanceof _ && _(_) && _ instanceof _) &&
            "constructor" in _ &&
            "constructor" in _
          )
            return !1;
        }
        if (0 === _) return !1;
        _ < 0 && (_ = -1), (_ = _ || []);
        for (var _ = (_ = _ || []).length; _--; )
          if (_[_] === _) return _[_] === _;
        if ((_.push(_), _.push(_), _)) {
          if ((_ = _.length) !== _.length) return !1;
          for (; _--; ) if (!_(_[_], _[_], _ - 1, _, _)) return !1;
        } else {
          var _,
            _ = Object.keys(_);
          if (((_ = _.length), Object.keys(_).length !== _)) return !1;
          for (; _--; )
            if (!_(_, (_ = _[_])) || !_(_[_], _[_], _ - 1, _, _)) return !1;
        }
        return _.pop(), _.pop(), !0;
      }
      function _(_) {
        return _(_)
          ? _.slice()
          : _(_) || _(_) || _(_) || _(_)
            ? Array.from(_.entries())
            : _;
      }
      function _(_) {
        return (_[Symbol.iterator] = _), _;
      }
      function _() {
        return this;
      }
      ["Symbol", "Map", "Set"].forEach(function (_) {
        void 0 === _()[_] &&
          _("MobX requires global '" + _ + "' to be available or polyfilled");
      }),
        "object" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
          __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
            spy: function (_) {
              return (
                console.warn("[mobx.spy] Is a no-op in production builds"),
                function () {}
              );
            },
            extras: {
              getDebugName: _,
            },
            $mobx: _,
          });
    },
  },
]);
