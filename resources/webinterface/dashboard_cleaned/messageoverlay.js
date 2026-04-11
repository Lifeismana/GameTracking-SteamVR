var CLSTAMP = "steamdb";
(() => {
  "use strict";
  var _,
    _ = {
      chunkid: (_, _) => {
        var _ = Symbol.for("react.element"),
          _ = Symbol.for("react.portal"),
          _ = Symbol.for("react.fragment"),
          _ = Symbol.for("react.strict_mode"),
          _ = Symbol.for("react.profiler"),
          _ = Symbol.for("react.provider"),
          _ = Symbol.for("react.context"),
          _ = Symbol.for("react.forward_ref"),
          _ = Symbol.for("react.suspense"),
          _ = Symbol.for("react.memo"),
          _ = Symbol.for("react.lazy"),
          _ = Symbol.iterator;
        var _ = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          _ = Object.assign,
          _ = {};
        function _(_, _, _) {
          (this.props = _),
            (this.context = _),
            (this.refs = _),
            (this.updater = _ || _);
        }
        function _() {}
        function _(_, _, _) {
          (this.props = _),
            (this.context = _),
            (this.refs = _),
            (this.updater = _ || _);
        }
        (_.prototype.isReactComponent = {}),
          (_.prototype.setState = function (_, _) {
            if ("object" != typeof _ && "function" != typeof _ && null != _)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
              );
            this.updater.enqueueSetState(this, _, _, "setState");
          }),
          (_.prototype.forceUpdate = function (_) {
            this.updater.enqueueForceUpdate(this, _, "forceUpdate");
          }),
          (_.prototype = _.prototype);
        var _ = (_.prototype = new _());
        (_.constructor = _), _(_, _.prototype), (_.isPureReactComponent = !0);
        var _ = Array.isArray,
          _ = Object.prototype.hasOwnProperty,
          _ = {
            current: null,
          },
          _ = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0,
          };
        function _(_, _, _) {
          var _,
            _ = {},
            _ = null,
            _ = null;
          if (null != _)
            for (_ in (void 0 !== _.ref && (_ = _.ref),
            void 0 !== _.key && (_ = "" + _.key),
            _))
              _.call(_, _) && !_.hasOwnProperty(_) && (_[_] = _[_]);
          var _ = arguments.length - 2;
          if (1 === _) _.children = _;
          else if (1 < _) {
            for (var _ = Array(_), _ = 0; _ < _; _++) _[_] = arguments[_ + 2];
            _.children = _;
          }
          if (_ && _.defaultProps)
            for (_ in (_ = _.defaultProps)) void 0 === _[_] && (_[_] = _[_]);
          return {
            $$typeof: _,
            type: _,
            key: _,
            ref: _,
            props: _,
            _owner: _.current,
          };
        }
        function _(_) {
          return "object" == typeof _ && null !== _ && _.$$typeof === _;
        }
        var _ = /\/+/g;
        function _(_, _) {
          return "object" == typeof _ && null !== _ && null != _.key
            ? (function (_) {
                var _ = {
                  "=": "=0",
                  ":": "=2",
                };
                return (
                  "$" +
                  _.replace(/[=:]/g, function (_) {
                    return _[_];
                  })
                );
              })("" + _.key)
            : _.toString(36);
        }
        function _(_, _, _, _, _) {
          var _ = typeof _;
          ("undefined" !== _ && "boolean" !== _) || (_ = null);
          var _ = !1;
          if (null === _) _ = !0;
          else
            switch (_) {
              case "string":
              case "number":
                _ = !0;
                break;
              case "object":
                switch (_.$$typeof) {
                  case _:
                  case _:
                    _ = !0;
                }
            }
          if (_)
            return (
              (_ = _((_ = _))),
              (_ = "" === _ ? "." + _(_, 0) : _),
              _(_)
                ? ((_ = ""),
                  null != _ && (_ = _.replace(_, "$&/") + "/"),
                  _(_, _, _, "", function (_) {
                    return _;
                  }))
                : null != _ &&
                  (_(_) &&
                    (_ = (function (_, _) {
                      return {
                        $$typeof: _,
                        type: _.type,
                        key: _,
                        ref: _.ref,
                        props: _.props,
                        _owner: _._owner,
                      };
                    })(
                      _,
                      _ +
                        (!_.key || (_ && _.key === _.key)
                          ? ""
                          : ("" + _.key).replace(_, "$&/") + "/") +
                        _,
                    )),
                  _.push(_)),
              1
            );
          if (((_ = 0), (_ = "" === _ ? "." : _ + ":"), _(_)))
            for (var _ = 0; _ < _.length; _++) {
              var _ = _ + _((_ = _[_]), _);
              _ += _(_, _, _, _, _);
            }
          else if (
            ((_ = (function (_) {
              return null === _ || "object" != typeof _
                ? null
                : "function" == typeof (_ = (_ && _[_]) || _["@@iterator"])
                  ? _
                  : null;
            })(_)),
            "function" == typeof _)
          )
            for (_ = _.call(_), _ = 0; !(_ = _.next()).done; )
              _ += _((_ = _.value), _, _, (_ = _ + _(_, _++)), _);
          else if ("object" === _)
            throw (
              ((_ = String(_)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === _
                    ? "object with keys {" + Object.keys(_).join(", ") + "}"
                    : _) +
                  "). If you meant to render a collection of children, use an array instead.",
              ))
            );
          return _;
        }
        function _(_, _, _) {
          if (null == _) return _;
          var _ = [],
            _ = 0;
          return (
            _(_, _, "", "", function (_) {
              return _.call(_, _, _++);
            }),
            _
          );
        }
        function _(_) {
          if (-1 === _._status) {
            var _ = _._result;
            (_ = _()).then(
              function (_) {
                (0 !== _._status && -1 !== _._status) ||
                  ((_._status = 1), (_._result = _));
              },
              function (_) {
                (0 !== _._status && -1 !== _._status) ||
                  ((_._status = 2), (_._result = _));
              },
            ),
              -1 === _._status && ((_._status = 0), (_._result = _));
          }
          if (1 === _._status) return _._result.default;
          throw _._result;
        }
        var _ = {
            current: null,
          },
          _ = {
            transition: null,
          },
          _ = {
            ReactCurrentDispatcher: _,
            ReactCurrentBatchConfig: _,
            ReactCurrentOwner: _,
          };
        function _() {
          throw Error(
            "act(...) is not supported in production builds of React.",
          );
        }
        (_.Children = {
          map: _,
          forEach: function (_, _, _) {
            _(
              _,
              function () {
                _.apply(this, arguments);
              },
              _,
            );
          },
          count: function (_) {
            var _ = 0;
            return (
              _(_, function () {
                _++;
              }),
              _
            );
          },
          toArray: function (_) {
            return (
              _(_, function (_) {
                return _;
              }) || []
            );
          },
          only: function (_) {
            if (!_(_))
              throw Error(
                "React.Children.only expected to receive a single React element child.",
              );
            return _;
          },
        }),
          (_.Component = _),
          (_.Fragment = _),
          (_.Profiler = _),
          (_.PureComponent = _),
          (_.StrictMode = _),
          (_.Suspense = _),
          (_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _),
          (_.act = _),
          (_.cloneElement = function (_, _, _) {
            if (null == _)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  _ +
                  ".",
              );
            var _ = _({}, _.props),
              _ = _.key,
              _ = _.ref,
              _ = _._owner;
            if (null != _) {
              if (
                (void 0 !== _.ref && ((_ = _.ref), (_ = _.current)),
                void 0 !== _.key && (_ = "" + _.key),
                _.type && _.type.defaultProps)
              )
                var _ = _.type.defaultProps;
              for (_ in _)
                _.call(_, _) &&
                  !_.hasOwnProperty(_) &&
                  (_[_] = void 0 === _[_] && void 0 !== _ ? _[_] : _[_]);
            }
            var _ = arguments.length - 2;
            if (1 === _) _.children = _;
            else if (1 < _) {
              _ = Array(_);
              for (var _ = 0; _ < _; _++) _[_] = arguments[_ + 2];
              _.children = _;
            }
            return {
              $$typeof: _,
              type: _.type,
              key: _,
              ref: _,
              props: _,
              _owner: _,
            };
          }),
          (_.createContext = function (_) {
            return (
              ((_ = {
                $$typeof: _,
                _currentValue: _,
                _currentValue2: _,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = {
                $$typeof: _,
                _context: _,
              }),
              (_.Consumer = _)
            );
          }),
          (_.createElement = _),
          (_.createFactory = function (_) {
            var _ = _.bind(null, _);
            return (_.type = _), _;
          }),
          (_.createRef = function () {
            return {
              current: null,
            };
          }),
          (_.forwardRef = function (_) {
            return {
              $$typeof: _,
              render: _,
            };
          }),
          (_.isValidElement = _),
          (_.lazy = function (_) {
            return {
              $$typeof: _,
              _payload: {
                _status: -1,
                _result: _,
              },
              _init: _,
            };
          }),
          (_.memo = function (_, _) {
            return {
              $$typeof: _,
              type: _,
              compare: void 0 === _ ? null : _,
            };
          }),
          (_.startTransition = function (_) {
            var _ = _.transition;
            _.transition = {};
            try {
              _();
            } finally {
              _.transition = _;
            }
          }),
          (_.unstable_act = _),
          (_.useCallback = function (_, _) {
            return _.current.useCallback(_, _);
          }),
          (_.useContext = function (_) {
            return _.current.useContext(_);
          }),
          (_.useDebugValue = function () {}),
          (_.useDeferredValue = function (_) {
            return _.current.useDeferredValue(_);
          }),
          (_.useEffect = function (_, _) {
            return _.current.useEffect(_, _);
          }),
          (_.useId = function () {
            return _.current.useId();
          }),
          (_.useImperativeHandle = function (_, _, _) {
            return _.current.useImperativeHandle(_, _, _);
          }),
          (_.useInsertionEffect = function (_, _) {
            return _.current.useInsertionEffect(_, _);
          }),
          (_.useLayoutEffect = function (_, _) {
            return _.current.useLayoutEffect(_, _);
          }),
          (_.useMemo = function (_, _) {
            return _.current.useMemo(_, _);
          }),
          (_.useReducer = function (_, _, _) {
            return _.current.useReducer(_, _, _);
          }),
          (_.useRef = function (_) {
            return _.current.useRef(_);
          }),
          (_.useState = function (_) {
            return _.current.useState(_);
          }),
          (_.useSyncExternalStore = function (_, _, _) {
            return _.current.useSyncExternalStore(_, _, _);
          }),
          (_.useTransition = function () {
            return _.current.useTransition();
          }),
          (_.version = "18.3.1");
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(_, {
          _: () => _,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
          _: () => _._,
        });
        var _ = __webpack_require__("chunkid"),
          _ =
            (__webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid")),
          _ =
            (__webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid")),
          _ =
            (__webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid")),
          _ =
            (__webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid"),
            __webpack_require__("chunkid")),
          _ = __webpack_require__("chunkid");
        const _ = VRHTML;
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        class _ extends _._ {
          constructor(_) {
            super(_),
              (this.m_latchedPosition = null),
              super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "panel-anchor";
          }
          relatch() {
            this.m_latchedPosition = null;
          }
          buildNode(_, _) {
            if (!_.currentPanel && !_.bInsideReparentedPanel)
              return [
                Object.assign(Object.assign({}, _), {
                  bShouldAbort: !0,
                }),
                null,
              ];
            let _ = null;
            "object" == typeof this.props.location
              ? (_ = (0, _._)(this.props.location, {
                  _: 0,
                  _: 0,
                }))
              : "number" == typeof this.props.location &&
                (_ = (0, _._)(this.props.location));
            let _ = this.createSgNode(_);
            if (this.props.latched && null !== this.m_latchedPosition)
              (_.properties["anchor-u"] = this.m_latchedPosition._),
                (_.properties["anchor-v"] = this.m_latchedPosition._);
            else if (_) {
              const _ = {
                  _: 0.5 * _._ + 0.5,
                  _: -0.5 * _._ + 0.5,
                },
                _ =
                  !_.currentPanel || _.currentPanel.props.overlay_key
                    ? _
                    : _.currentPanel.scaleLocalUVToGlobal(_);
              (_.properties["anchor-u"] = _._),
                (_.properties["anchor-v"] = _._);
            } else {
              if (!_.currentPanel)
                return [
                  Object.assign(Object.assign({}, _), {
                    bShouldAbort: !0,
                  }),
                  null,
                ];
              const _ = _.ownerDocument,
                _ = _.getBoundingClientRect(),
                _ = _.left + _.width / 2,
                _ = _.top + _.height / 2,
                _ = _.currentPanel.m_Rect;
              if (_ < _._ || _ > _._ + _.width || _ < _._ || _ > _._ + _.height)
                return [
                  Object.assign(Object.assign({}, _), {
                    bShouldAbort: !0,
                  }),
                  null,
                ];
              const _ = _.defaultView.innerWidth,
                _ = _.defaultView.innerHeight;
              if (!(_ > 0 && _ > 0))
                return [
                  Object.assign(Object.assign({}, _), {
                    bShouldAbort: !0,
                  }),
                  null,
                ];
              (_.properties["anchor-u"] = _ / _),
                (_.properties["anchor-v"] = _ / _);
            }
            return (
              (this.m_latchedPosition = {
                _: _.properties["anchor-u"],
                _: _.properties["anchor-v"],
              }),
              [_, _]
            );
          }
        }
        (0, _._)([_._], _.prototype, "buildNode", null);
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        function _(_, _) {
          return {
            _: _._ * _,
            _: _._ * _,
            _: _._ * _,
          };
        }
        function _(_) {
          if (void 0 === _) return;
          let _ = 0.5 * _._,
            _ = 0.5 * _._,
            _ = 0.5 * _._,
            _ = Math.cos(_),
            _ = Math.cos(_),
            _ = Math.cos(_),
            _ = Math.sin(_),
            _ = Math.sin(_),
            _ = Math.sin(_);
          return {
            _: _ * _ * _ + _ * _ * _,
            _: _ * _ * _ + _ * _ * _,
            _: _ * _ * _ - _ * _ * _,
            _: _ * _ * _ - _ * _ * _,
          };
        }
        __webpack_require__._(_, {
          _: () => _,
          _: () => _,
        });
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        var _, _, _, _;
        function _() {
          var _;
          return null !==
            (_ =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.Environment()) && void 0 !== _
            ? _
            : _.Unknown;
        }
        __webpack_require__._(_, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        }),
          (function (_) {
            (_[(_.Desktop = 1)] = "Desktop"),
              (_[(_.Overlay = 2)] = "Overlay"),
              (_[(_.Unknown = 100)] = "Unknown");
          })(_ || (_ = {})),
          window.hasOwnProperty("VRHTML") || (window.VRHTML = null),
          (function (_) {
            (_[(_.Auto = 0)] = "Auto"),
              (_[(_.Low = 1)] = "Low"),
              (_[(_.Medium = 2)] = "Medium"),
              (_[(_.High = 3)] = "High");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.TrackingResult_Uninitialized = 1)] =
              "TrackingResult_Uninitialized"),
              (_[(_.TrackingResult_Calibrating_InProgress = 100)] =
                "TrackingResult_Calibrating_InProgress"),
              (_[(_.TrackingResult_Calibrating_OutOfRange = 101)] =
                "TrackingResult_Calibrating_OutOfRange"),
              (_[(_.TrackingResult_Running_OK = 200)] =
                "TrackingResult_Running_OK"),
              (_[(_.TrackingResult_Running_OutOfRange = 201)] =
                "TrackingResult_Running_OutOfRange"),
              (_[(_.TrackingResult_Fallback_RotationOnly = 300)] =
                "TrackingResult_Fallback_RotationOnly");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Seated = 0)] = "Seated"),
              (_[(_.Standing = 1)] = "Standing"),
              (_[(_.RawAndUncalibrated = 2)] = "RawAndUncalibrated");
          })(_ || (_ = {}));
        let _ = 0;
        var _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _;
        !(function (_) {
          (_[(_.None = 0)] = "None"),
            (_[(_.Shown = 1)] = "Shown"),
            (_[(_.Hidden = 2)] = "Hidden"),
            (_[(_.Exposed = 3)] = "Exposed"),
            (_[(_.Moved = 4)] = "Moved"),
            (_[(_.Resized = 5)] = "Resized"),
            (_[(_.SizeChanged = 6)] = "SizeChanged"),
            (_[(_.Minimized = 7)] = "Minimized"),
            (_[(_.Maximized = 8)] = "Maximized"),
            (_[(_.Restored = 9)] = "Restored"),
            (_[(_.Enter = 10)] = "Enter"),
            (_[(_.Leave = 11)] = "Leave"),
            (_[(_.FocusGained = 12)] = "FocusGained"),
            (_[(_.FocusLost = 13)] = "FocusLost"),
            (_[(_.Close = 14)] = "Close"),
            (_[(_.TakeFocus = 15)] = "TakeFocus"),
            (_[(_.HitTest = 16)] = "HitTest");
        })(_ || (_ = {})),
          (function (_) {
            (_[(_.Activated = 0)] = "Activated"),
              (_[(_.Deactivated = 1)] = "Deactivated");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.None = 0)] = "None"), (_[(_.Mouse = 1)] = "Mouse");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Invalid = 0)] = "Invalid"),
              (_[(_.HMD = 1)] = "HMD"),
              (_[(_.Controller = 2)] = "Controller"),
              (_[(_.GenericTracker = 3)] = "GenericTracker"),
              (_[(_.TrackingReference = 4)] = "TrackingReference"),
              (_[(_.DisplayRedirect = 5)] = "DisplayRedirect");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Unknown = 0)] = "Unknown"),
              (_[(_.NVIDIA = 1)] = "NVIDIA"),
              (_[(_.AMD = 2)] = "AMD");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.None = 0)] = "None"),
              (_[(_.Starting = 1)] = "Starting"),
              (_[(_.Quitting = 2)] = "Quitting"),
              (_[(_.Running = 3)] = "Running"),
              (_[(_.Waiting = 4)] = "Waiting");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.ButtonPress_0 = 0)] = "ButtonPress_0"),
              (_[(_.ButtonPress_1 = 1)] = "ButtonPress_1"),
              (_[(_.ButtonPress_2 = 2)] = "ButtonPress_2"),
              (_[(_.ButtonPress_3 = 3)] = "ButtonPress_3"),
              (_[(_.CouldntFindSystemOverlay = 4)] =
                "CouldntFindSystemOverlay"),
              (_[(_.CouldntFindOrCreateClientOverlay = 5)] =
                "CouldntFindOrCreateClientOverlay"),
              (_[(_.ApplicationQuit = 6)] = "ApplicationQuit");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Normal = 0)] = "Normal"),
              (_[(_.Password = 1)] = "Password"),
              (_[(_.Submit = 2)] = "Submit");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.SingleLine = 0)] = "SingleLine"),
              (_[(_.MultipleLines = 1)] = "MultipleLines");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.LaserMouse = 1)] = "LaserMouse"),
              (_[(_.Keyboard = 2)] = "Keyboard"),
              (_[(_.RoomView = 4)] = "RoomView"),
              (_[(_.DisplaySuppressed = 8)] = "DisplaySuppressed"),
              (_[(_.SystemButtonDown = 16)] = "SystemButtonDown"),
              (_[(_.DriverIsDrawingControllers = 32)] =
                "DriverIsDrawingControllers"),
              (_[(_.DriverRequestsApplicationPause = 64)] =
                "DriverRequestsApplicationPause"),
              (_[(_.DriverRequestsReducedRendering = 128)] =
                "DriverRequestsReducedRendering");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.BULK_DEFAULT = 0)] = "BULK_DEFAULT"),
              (_[(_.BULK_64K_DMA = 1)] = "BULK_64K_DMA"),
              (_[(_.BULK_16K_DMA = 2)] = "BULK_16K_DMA"),
              (_[(_.BULK_8K_DMA = 3)] = "BULK_8K_DMA"),
              (_[(_.ISO_52FPS = 4)] = "ISO_52FPS"),
              (_[(_.ISO_50FPS = 5)] = "ISO_50FPS"),
              (_[(_.ISO_48FPS = 6)] = "ISO_48FPS"),
              (_[(_.ISO_46FPS = 7)] = "ISO_46FPS"),
              (_[(_.ISO_44FPS = 8)] = "ISO_44FPS"),
              (_[(_.ISO_42FPS = 9)] = "ISO_42FPS"),
              (_[(_.ISO_40FPS = 10)] = "ISO_40FPS"),
              (_[(_.ISO_35FPS = 11)] = "ISO_35FPS"),
              (_[(_.ISO_30FPS = 12)] = "ISO_30FPS"),
              (_[(_.ISO_15FPS = 13)] = "ISO_15FPS"),
              (_[(_.MAX_CAMERA_COMPAT_MODES = 14)] = "MAX_CAMERA_COMPAT_MODES");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.ECameraExposure_Unknown = 0)] = "ECameraExposure_Unknown"),
              (_[(_.ECameraExposure_Nominal = 1)] = "ECameraExposure_Nominal"),
              (_[(_.ECameraExposure_HighExposure = 2)] =
                "ECameraExposure_HighExposure");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.None = 0)] = "None"),
              (_[(_.ThisSteamVR = 1)] = "ThisSteamVR"),
              (_[(_.AnotherSteamVR = 2)] = "AnotherSteamVR"),
              (_[(_.AnotherRuntime = 3)] = "AnotherRuntime"),
              (_[(_.Error = -1)] = "Error");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.TrackedControllerRole_Invalid = 0)] =
              "TrackedControllerRole_Invalid"),
              (_[(_.TrackedControllerRole_LeftHand = 1)] =
                "TrackedControllerRole_LeftHand"),
              (_[(_.TrackedControllerRole_RightHand = 2)] =
                "TrackedControllerRole_RightHand"),
              (_[(_.TrackedControllerRole_OptOut = 3)] =
                "TrackedControllerRole_OptOut"),
              (_[(_.TrackedControllerRole_Treadmill = 4)] =
                "TrackedControllerRole_Treadmill"),
              (_[(_.TrackedControllerRole_Max = 5)] =
                "TrackedControllerRole_Max");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Unknown = 0)] = "Unknown"),
              (_[(_.Steam_VRButton = 1)] = "Steam_VRButton"),
              (_[(_.Steam_StartSteamVRApp = 2)] = "Steam_StartSteamVRApp"),
              (_[(_.Watchdog_Unknown = 10)] = "Watchdog_Unknown"),
              (_[(_.Watchdog_Controller = 11)] = "Watchdog_Controller"),
              (_[(_.Watchdog_Hmd = 12)] = "Watchdog_Hmd"),
              (_[(_.AppLaunch_Unknown = 20)] = "AppLaunch_Unknown"),
              (_[(_.AppLaunch_Steam = 21)] = "AppLaunch_Steam"),
              (_[(_.SteamVR_Restart = 30)] = "SteamVR_Restart"),
              (_[(_.SteamVR_VRStartup = 31)] = "SteamVR_VRStartup");
          })(_ || (_ = {})),
          (function (_) {
            _[(_.Hostname = 0)] = "Hostname";
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Unavailable = 0)] = "Unavailable"),
              (_[(_.Active = 1)] = "Active"),
              (_[(_.Off = 2)] = "Off");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Default = 1)] = "Default"), (_[(_.Floor = 2)] = "Floor");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Inactive = 0)] = "Inactive"),
              (_[(_.PendingReset = 1)] = "PendingReset"),
              (_[(_.PendingResetIfNeeded = 2)] = "PendingResetIfNeeded"),
              (_[(_.Default = 3)] = "Default"),
              (_[(_._ = 4)] = "CV"),
              (_[(_.Manual = 5)] = "Manual");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_._ = 1)] = "OK"),
              (_[(_.Warning = 100)] = "Warning"),
              (_[(_.Warning_BaseStationMayHaveMoved = 101)] =
                "Warning_BaseStationMayHaveMoved"),
              (_[(_.Warning_BaseStationRemoved = 102)] =
                "Warning_BaseStationRemoved"),
              (_[(_.Warning_SeatedBoundsInvalid = 103)] =
                "Warning_SeatedBoundsInvalid"),
              (_[(_.Error = 200)] = "Error"),
              (_[(_.Error_BaseStationUninitialized = 201)] =
                "Error_BaseStationUninitialized"),
              (_[(_.Error_BaseStationConflict = 202)] =
                "Error_BaseStationConflict"),
              (_[(_.Error_PlayAreaInvalid = 203)] = "Error_PlayAreaInvalid"),
              (_[(_.Error_CollisionBoundsInvalid = 204)] =
                "Error_CollisionBoundsInvalid");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Small = 0)] = "Small"),
              (_[(_.Medium = 1)] = "Medium"),
              (_[(_.Large = 2)] = "Large"),
              (_[(_.Gigantic = 3)] = "Gigantic"),
              (_[(_.Standing = 4)] = "Standing");
          })(_ || (_ = {}));
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(_, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid");
        const _ = Object.values(_._).filter((_) => "number" == typeof _);
        function _(_, _) {
          return new Set([..._, ..._]);
        }
        class _ {
          constructor() {
            this.m_mapSuppressedHaptics = new Map();
          }
          static get Instance() {
            return _.s_Instance || (_.s_Instance = new _()), _.s_Instance;
          }
          suppressHaptics(_, _) {
            const _ = new Set(_);
            this.m_mapSuppressedHaptics.has(_)
              ? this.m_mapSuppressedHaptics.set(
                  _,
                  _(this.m_mapSuppressedHaptics.get(_), _),
                )
              : this.m_mapSuppressedHaptics.set(_, _);
          }
          suppressHapticsExcept(_, _) {
            const _ = new Set(_),
              _ = new Set(_.filter((_) => !__webpack_require__.has(_)));
            this.m_mapSuppressedHaptics.has(_)
              ? this.m_mapSuppressedHaptics.set(
                  _,
                  _(this.m_mapSuppressedHaptics.get(_), _),
                )
              : this.m_mapSuppressedHaptics.set(_, _);
          }
          unsuppressHaptics(_, _) {
            const _ = new Set(_);
            var _, _;
            void 0 === _
              ? this.m_mapSuppressedHaptics.delete(_)
              : this.m_mapSuppressedHaptics.has(_) ||
                this.m_mapSuppressedHaptics.set(
                  _,
                  ((_ = this.m_mapSuppressedHaptics.get(_)),
                  (_ = _),
                  new Set([..._].filter((_) => !_.has(_)))),
                );
          }
          isHapticSuppressed(_) {
            return Array.from(this.m_mapSuppressedHaptics.values()).some((_) =>
              _.has(_),
            );
          }
          triggerHaptic(_) {
            (0, _._)() != _._.Overlay ||
              this.isHapticSuppressed(_) ||
              null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VROverlay.TriggerOverlayHapticEffect(
                VRHTML.VROverlay.ThisOverlayHandle(),
                _,
              );
          }
        }
        _.s_Instance = null;
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(_, {
          _: () => _,
          _: () => _,
        });
        var _,
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        !(function (_) {
          (_[(_.DashboardOpen = 0)] = "DashboardOpen"),
            (_[(_.DashboardClose = 1)] = "DashboardClose"),
            (_[(_.ControlBarButtonClick = 2)] = "ControlBarButtonClick"),
            (_[(_.ButtonClick = 3)] = "ButtonClick"),
            (_[(_.SurfaceClick = 4)] = "SurfaceClick"),
            (_[(_.VolumePreview = 5)] = "VolumePreview"),
            (_[(_.Grab = 6)] = "Grab"),
            (_[(_.GrabRelease = 7)] = "GrabRelease"),
            (_[(_.PagedSettingsNavigation = 8)] = "PagedSettingsNavigation");
        })(_ || (_ = {}));
        class _ {
          constructor() {
            this.m_mapSoundElems = new Map();
          }
          static get Instance() {
            return _.s_Instance || (_.s_Instance = new _()), _.s_Instance;
          }
          preloadSounds() {
            if (!((0, _._)() != _._.Overlay || this.m_mapSoundElems.size > 0))
              for (let _ in _) isNaN(Number(_)) || this.loadSounds(Number(_));
          }
          playSound(_) {
            return (0, _._)(this, void 0, void 0, function* () {
              if ((0, _._)() != _._.Overlay) return;
              if (null == _) return;
              const _ = this.getAudioElems(_);
              if (!_ || 0 == _.length) return;
              const _ = _[Math.floor(Math.random() * _.length)];
              __webpack_require__.pause(), (_.currentTime = 0);
              try {
                yield __webpack_require__.play();
              } catch (_) {
                console.error(
                  `Failed to play sound effect "${_[_]}" (${_.src}, networkState=${_.networkState}, readyState=${_.readyState})`,
                );
              }
            });
          }
          loadSounds(_) {
            const _ = _.Sources[_],
              _ = _.source;
            if (!_) return void this.m_mapSoundElems.set(_, []);
            const _ = ("string" == typeof _ ? [_] : _).map((_) => {
              var _, _;
              let _ = document.createElement("audio");
              return (
                (_.src = `${_}?t=${new Date().getTime()}`),
                (_.preload = "auto"),
                (_.volume = null !== (_ = _.volume) && void 0 !== _ ? _ : 1),
                (null === (_ = _.bRespectsGlobalVolume) || void 0 === _ || _) &&
                  (_.volume *= 1),
                _
              );
            });
            this.m_mapSoundElems.set(_, _);
          }
          getAudioElems(_) {
            return (
              this.m_mapSoundElems.has(_) ||
                (console.warn(
                  "Playing a sound which was not preloaded. Consider calling SoundEffects.Instance.preloadSounds().",
                ),
                this.loadSounds(_)),
              this.m_mapSoundElems.get(_)
            );
          }
        }
        (_.Sources = {
          [_.DashboardOpen]: {
            source: "",
          },
          [_.DashboardClose]: {
            source: "",
          },
          [_.ControlBarButtonClick]: {
            source: "/dashboard/sounds/deck_ui_misc_10.wav",
          },
          [_.ButtonClick]: {
            source: "/dashboard/sounds/deck_ui_misc_10.wav",
          },
          [_.SurfaceClick]: {
            source: "",
          },
          [_.VolumePreview]: {
            source: "/dashboard/sounds/volume_change.wav",
            bRespectsGlobalVolume: !1,
          },
          [_.Grab]: {
            source: "",
          },
          [_.GrabRelease]: {
            source: "/dashboard/sounds/deck_ui_misc_10.wav",
          },
          [_.PagedSettingsNavigation]: {
            source: "/dashboard/sounds/deck_ui_navigation.wav",
          },
        }),
          (_.s_Instance = null);
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(_, {
          _: () => _,
          _: () => _,
        });
        const _ = "system.messageoverlay",
          _ = "/settings/steamvr/showAdvancedSettings";
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(_, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = (__webpack_require__("chunkid"), __webpack_require__("chunkid")),
          _ = __webpack_require__("chunkid");
        function _(..._) {
          return _.filter((_) => null != _ && ("string" == typeof _ || _[1]))
            .map((_) => ("string" == typeof _ ? _ : _[0]))
            .join(" ");
        }
        class _ {
          constructor() {
            (this.onScroll = null),
              (this.onScrollStop = null),
              (this.m_elem = null),
              (this.m_rScrollableParents = []),
              (this.m_bScrolling = !1),
              (this.m_scrollStopTimeoutHandle = void 0),
              (0, _.makeObservable)(this);
          }
          ref(_) {
            this.m_elem && this.cleanup(),
              (this.m_elem = _),
              this.updateScrollableParents();
          }
          get isScrolling() {
            return this.m_bScrolling;
          }
          updateScrollableParents() {
            for (let _ of this.m_rScrollableParents)
              _.removeEventListener("scroll", this.onParentScroll);
            this.m_rScrollableParents = (function (_) {
              let _ = [];
              if (!_) return _;
              let _ = _.parentElement;
              for (; _; ) {
                const _ = _.scrollWidth > _.clientWidth,
                  _ = _.scrollHeight > _.clientHeight;
                (_ || _) && _.push(_), (_ = _.parentElement);
              }
              return _;
            })(this.m_elem);
            for (let _ of this.m_rScrollableParents)
              _.addEventListener("scroll", this.onParentScroll);
          }
          cleanup() {
            for (let _ of this.m_rScrollableParents)
              _.removeEventListener("scroll", this.onParentScroll);
            (this.m_rScrollableParents = []),
              (this.m_elem = null),
              this.clearScrollStopTimeout();
          }
          onParentScroll() {
            var _;
            this.clearScrollStopTimeout(),
              (this.m_bScrolling = !0),
              (this.m_scrollStopTimeoutHandle = window.setTimeout(
                this.onScrollStopTimeout,
                50,
              )),
              null === (_ = this.onScroll) || void 0 === _ || _.call(this);
          }
          clearScrollStopTimeout() {
            window.clearTimeout(this.m_scrollStopTimeoutHandle),
              (this.m_scrollStopTimeoutHandle = void 0);
          }
          onScrollStopTimeout() {
            var _;
            this.m_bScrolling &&
              (null === (_ = this.onScrollStop) ||
                void 0 === _ ||
                _.call(this)),
              (this.m_bScrolling = !1);
          }
        }
        (0, _._)([_.observable], _.prototype, "m_bScrolling", void 0),
          (0, _._)([_._], _.prototype, "ref", null),
          (0, _._)([_.computed], _.prototype, "isScrolling", null),
          (0, _._)([_._], _.prototype, "onParentScroll", null),
          (0, _._)([_._], _.prototype, "onScrollStopTimeout", null);
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        class _ {
          constructor() {
            (this.m_mapTokens = new Map()),
              (this.m_mapFallbackTokens = new Map());
          }
          InitFromObjects(_, _, _, _) {
            this.m_mapTokens.clear();
            let _ = [_, _, _, _];
            for (let _ in _) {
              let _ = _[_];
              for (let _ in _) {
                let _ = _[_];
                for (let _ in _) {
                  let _ = _.toLowerCase();
                  this.m_mapTokens.has(_) || this.m_mapTokens.set(_, _[_]);
                }
              }
            }
          }
          LocalizeString(_) {
            if (!_ || 0 == _.length || "#" != _.charAt(0)) return "";
            let _ = this.m_mapTokens.get(_.substring(1).toLowerCase());
            return void 0 === _ ? "" : _;
          }
          LocalizeStringFromFallback(_) {
            if (!_ || 0 == _.length || "#" != _.charAt(0)) return "";
            let _ = this.m_mapFallbackTokens.get(_.substring(1).toLowerCase());
            return void 0 === _ ? "" : _;
          }
          static GetLocale() {
            const _ = navigator.languages[0];
            try {
              const _ =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.GetSystemLocale();
              if (!_) return _;
              _.s_Date.toLocaleTimeString(_);
              return _;
            } catch (_) {
              return _;
            }
          }
        }
        _.s_Date = new Date();
        const _ = new _();
        window.LocalizationManager = _;
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return _.createElement(
            _._,
            {
              className: "ButtonControl",
              onClick: _.onClick,
            },
            _.label,
          );
        }
        (0, __webpack_require__("chunkid").configure)({
          enforceActions: "never",
        });
        let _ = class extends _.Component {
          constructor(_) {
            super(_),
              (this.nMaxButtons = 4),
              (this.m_mailbox = new _._()),
              (this.state = {
                unCallingProcessID: 0,
                sCaptionText: "Default Caption",
                sMessageText: "Default text.",
                sButtonTexts: ["Button0", "Button1", "Button2", "Button3"],
              }),
              this.m_mailbox.Init("message_overlay/main").then(() => {
                this.m_mailbox.RegisterHandler(
                  "render_message",
                  this.OnRenderMessageOverlay,
                ),
                  this.m_mailbox.RegisterHandler(
                    "close_requested",
                    this.OnMessageOverlayCloseRequested,
                  ),
                  this.m_mailbox.RegisterHandler(
                    "process_quit",
                    this.OnProcessQuit,
                  );
              }),
              _._.Init(!1);
          }
          ResetState() {
            this.setState({
              unCallingProcessID: 0,
              sCaptionText: "Default Caption",
              sMessageText: "Default text.",
              sButtonTexts: ["Button0", "Button1", "Button2", "Button3"],
            });
          }
          OnProcessQuit(_) {
            return this.OnMessageOverlayCloseRequested(_);
          }
          OnMessageOverlayCloseRequested(_) {
            return _.unProcessID == this.state.unCallingProcessID
              ? (console.log(
                  "Close requested from owning process " +
                    this.state.unCallingProcessID,
                ),
                null === _._ ||
                  void 0 === _._ ||
                  _._.VRDashboardManager.OnMessageOverlayResponse(
                    _._.ApplicationQuit,
                  ),
                this.ResetState(),
                !0)
              : (console.log(
                  "Error: Close requested from process " +
                    _.unProcessID +
                    ", but owning process is " +
                    this.state.unCallingProcessID,
                ),
                !1);
          }
          OnRenderMessageOverlay(_) {
            console.log(
              "Message overlay requested from process " + _.unCallingProcessID,
            ),
              this.setState({
                unCallingProcessID: _.unCallingProcessID,
                sCaptionText: _.sCaptionText,
                sMessageText: _.sMessageText,
                sButtonTexts: _.sButtonTexts,
              }),
              null === _._ ||
                void 0 === _._ ||
                _._.VRClient.ShowDashboardOverlay({
                  overlayKey: _._,
                  sReason: "OnRenderMessageOverlay",
                });
          }
          ButtonClicked(_) {
            if (!_._)
              return (
                console.log(
                  "Error: VRHTML isn't present--exiting without sending response.",
                ),
                void this.ResetState()
              );
            console.log(
              "Button " + _ + " clicked, sending OnMessageOverlayResponse.",
            ),
              null === _._ ||
                void 0 === _._ ||
                _._.VRDashboardManager.OnMessageOverlayResponse(_),
              this.ResetState();
          }
          render() {
            return _.createElement(
              "div",
              {
                className: "MessageOverlayContainer",
              },
              _.createElement(
                _._,
                {
                  className: "MessageOverlayPanel",
                },
                _.createElement(
                  "div",
                  {
                    className: "MessageOverlayTextPanel",
                  },
                  _.createElement("h1", null, this.state.sCaptionText),
                  _.createElement("p", null, this.state.sMessageText),
                ),
                _.createElement(
                  "div",
                  {
                    className: "MessageOverlayButtonContainer",
                  },
                  this.state.sButtonTexts[0] &&
                    _.createElement(_, {
                      label: this.state.sButtonTexts[0],
                      onClick: () => {
                        this.ButtonClicked(_._.ButtonPress_0);
                      },
                    }),
                  this.state.sButtonTexts[1] &&
                    _.createElement(_, {
                      label: this.state.sButtonTexts[1],
                      onClick: () => {
                        this.ButtonClicked(_._.ButtonPress_1);
                      },
                    }),
                  this.state.sButtonTexts[2] &&
                    _.createElement(_, {
                      label: this.state.sButtonTexts[2],
                      onClick: () => {
                        this.ButtonClicked(_._.ButtonPress_2);
                      },
                    }),
                  this.state.sButtonTexts[3] &&
                    _.createElement(_, {
                      label: this.state.sButtonTexts[3],
                      onClick: () => {
                        this.ButtonClicked(_._.ButtonPress_3);
                      },
                    }),
                ),
              ),
            );
          }
        };
        (0, _._)([_._], _.prototype, "OnProcessQuit", null),
          (0, _._)([_._], _.prototype, "OnMessageOverlayCloseRequested", null),
          (0, _._)([_._], _.prototype, "OnRenderMessageOverlay", null),
          (0, _._)([_._], _.prototype, "ButtonClicked", null),
          (_ = (0, _._)([_._], _)),
          null === _._ ||
            void 0 === _._ ||
            _._.VROverlay.SetWidthInMeters(
              _._.VROverlay.ThisOverlayHandle(),
              1.92,
            ),
          null === _._ ||
            void 0 === _._ ||
            _._.VROverlay.SetFlag(_._.VROverlay.ThisOverlayHandle(), 8, !0),
          null === _._ ||
            void 0 === _._ ||
            _._.VROverlay.SetInputMethod(
              _._.VROverlay.ThisOverlayHandle(),
              _._.Mouse,
            ),
          (function (_, _) {
            _ ||
              (_ = (function () {
                let _ = new Map([
                  ["en", "english"],
                  ["de", "german"],
                  ["fr", "french"],
                  ["it", "italian"],
                  ["ko", "korean"],
                  ["es-419", "latam"],
                  ["es", "spanish"],
                  ["zh-CN", "schinese"],
                  ["zh-TW", "tchinese"],
                  ["ru", "russian"],
                  ["th", "thai"],
                  ["ja", "japanese"],
                  ["pt", "portuguese"],
                  ["pl", "polish"],
                  ["da", "danish"],
                  ["nl", "dutch"],
                  ["fi", "finnish"],
                  ["no", "norwegian"],
                  ["sv", "swedish"],
                  ["hu", "hungarian"],
                  ["cs", "czech"],
                  ["ro", "romanian"],
                  ["tr", "turkish"],
                  ["pt-BR", "brazilian"],
                  ["bg", "bulgarian"],
                  ["el", "greek"],
                  ["uk", "ukranian"],
                  ["vi", "vietnamese"],
                ]);
                for (let _ of navigator.languages) {
                  let _ = _.split("-");
                  if (_.has(_)) return _.get(_);
                  if (_.has(_[0])) return _.get(_[0]);
                }
                return "english";
              })());
            let _ = [],
              _ = (_, _, _) => {
                let _,
                  _ = Date.now().toString();
                return (
                  (_ =
                    "drivers" == _
                      ? `/input/localization.json?t=${_}`
                      : "webhelper" == _
                        ? `/dashboard/localization/${_}_${_}.json?t=${_}`
                        : `localization/${_}_${_}.json?t=${_}`),
                  _()
                    .get(_)
                    .then((_) => {
                      __webpack_require__(_.data);
                    })
                    .catch(() => {})
                );
              },
              _ = [],
              _ = [],
              _ = [],
              _ = [];
            for (let _ of _)
              __webpack_require__.push(
                _(_, _, (_) => {
                  _.push(_);
                }),
              ),
                "english" != _ &&
                  __webpack_require__.push(
                    _(_, "english", (_) => {
                      _.push(_);
                    }),
                  );
            for (let _ of ["webhelper"])
              __webpack_require__.push(
                _(_, _, (_) => {
                  _.push(_);
                }),
              ),
                "english" != _ &&
                  __webpack_require__.push(
                    _(_, "english", (_) => {
                      _.push(_);
                    }),
                  );
            return (
              __webpack_require__.push(
                _("drivers", "", (_) => {
                  _.push(_);
                }),
              ),
              Promise.all(_).then(() => {
                _.InitFromObjects(_, _, _, _);
              })
            );
          })(
            [],
            null === _._ || void 0 === _._ ? void 0 : _._.GetSteamLanguage(),
          )
            .then(() => {
              _._(document.getElementById("root")).render(
                _.createElement(_, null),
              );
            })
            .catch((_) =>
              console.error("Failed to initialize message Overlay:", _),
            );
      },
    },
    _ = {};
  function _(_) {
    var _ = _[_];
    if (void 0 !== _) return _.exports;
    var _ = (_[_] = {
      exports: {},
    });
    return _[_](_, _.exports, _), _.exports;
  }
  (_._ = _),
    (_ = []),
    (_._ = (_, _, _, _) => {
      if (!_) {
        var _ = 1 / 0;
        for (_ = 0; _ < _.length; _++) {
          for (var [_, _, _] = _[_], _ = !0, _ = 0; _ < _.length; _++)
            (!1 & _ || _ >= _) && Object.keys(_._).every((_) => _._[_](_[_]))
              ? __webpack_require__.splice(_--, 1)
              : ((_ = !1), _ < _ && (_ = _));
          if (_) {
            _.splice(_--, 1);
            var _ = _();
            void 0 !== _ && (_ = _);
          }
        }
        return _;
      }
      _ = _ || 0;
      for (var _ = _.length; _ > 0 && _[_ - 1][2] > _; _--) _[_] = _[_ - 1];
      _[_] = [_, _, _];
    }),
    (_._ = (_) => {
      var _ = _ && _.__esModule ? () => _.default : () => _;
      return (
        _._(_, {
          _: _,
        }),
        _
      );
    }),
    (_._ = (_, _) => {
      for (var _ in _)
        _._(_, _) &&
          !_._(_, _) &&
          Object.defineProperty(_, _, {
            enumerable: !0,
            get: _[_],
          });
    }),
    (_._ = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (_) {
        if ("object" == typeof window) return window;
      }
    })()),
    (_._ = (_, _) => Object.prototype.hasOwnProperty.call(_, _)),
    (() => {
      var _ = {
        868: 0,
        527: 0,
        500: 0,
      };
      _._._ = (_) => 0 === _[_];
      var _ = (_, _) => {
          var _,
            _,
            [_, _, _] = _,
            _ = 0;
          if (_.some((_) => 0 !== _[_])) {
            for (_ in _) _._(_, _) && (_._[_] = _[_]);
            if (_) var _ = _(_);
          }
          for (_ && _(_); _ < _.length; _++)
            (_ = _[_]), _._(_, _) && _[_] && _[_][0](), (_[_] = 0);
          return _._(_);
        },
        _ = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      __webpack_require__.forEach(_.bind(null, 0)),
        (_.push = _.bind(null, _.push.bind(_)));
    })();
  var _ = _._(void 0, [967, 978, 655, 305, 527, 797, 148, 500, 198, 652], () =>
    _(6139),
  );
  _ = _._(_);
})();
