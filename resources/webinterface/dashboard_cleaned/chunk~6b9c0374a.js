var CLSTAMP = "steamdb";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [743],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = (_) =>
        _.createElement("div", {
          style: {
            position: "fixed",
            left: _._,
            top: _._,
            width: _.width,
            height: _.height,
            zIndex: 90019001,
          },
        });
      class _ extends _.Component {
        render() {
          const _ = document.body.getBoundingClientRect();
          let _ = null;
          if (this.props.element) {
            const _ = this.props.element.getBoundingClientRect();
            _ = _.createElement(
              _.Fragment,
              null,
              _.createElement(_, {
                _: 0,
                _: 0,
                width: _.width,
                height: _._,
              }),
              _.createElement(_, {
                _: 0,
                _: _._ + _.height,
                width: _.width,
                height: _.height - _.height - _._,
              }),
              _.createElement(_, {
                _: 0,
                _: _._,
                width: _._,
                height: _.height,
              }),
              _.createElement(_, {
                _: _._ + _.width,
                _: _._,
                width: _.width - _.width - _._,
                height: _.height,
              }),
            );
          } else
            _ = _.createElement(
              _.Fragment,
              null,
              _.createElement(_, {
                _: 0,
                _: 0,
                width: _.width,
                height: _.height,
              }),
            );
          return _.createPortal(_, document.body);
        }
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      let _ = (_ = class extends _.Component {
        constructor(_) {
          super(_),
            (this.m_refParentPortal = _.createRef()),
            (this.state = {
              elemBoundingParent: window.document.body,
              bInDOM: !1,
            });
        }
        componentDidMount() {
          var _, _;
          this.setState({
            elemBoundingParent: (0, _._)(
              [
                "body",
                "[vsg-type=panel]",
                ...(null !== (_ = this.props.allowableParentSelectors) &&
                void 0 !== _
                  ? _
                  : []),
              ],
              null === (_ = this.m_refParentPortal.current) || void 0 === _
                ? void 0
                : _.anchorElement,
            ),
            bInDOM: !0,
          });
        }
        render() {
          var _;
          const _ = this.state.elemBoundingParent.getBoundingClientRect();
          let _ = Object.assign({}, this.props);
          return (
            delete _.onDismissRequested,
            delete _.backdropClassName,
            delete _.allowableParentSelectors,
            _.createElement(
              _._,
              {
                ref: this.m_refParentPortal,
                allowableParentSelectors: [
                  "body",
                  "vsg-app",
                  "vsg-mountable",
                  "[vsg-type=panel]",
                  ".ModalParentPortalContainer",
                  ...(null !== (_ = this.props.allowableParentSelectors) &&
                  void 0 !== _
                    ? _
                    : []),
                ],
              },
              _.createElement(
                _._,
                Object.assign({}, _, {
                  shouldDismissOnClickAnywhere: !1,
                  shouldDismissOnClickInViewStack: !0,
                  fadesViewsBelow: !0,
                  onDismissRequested: this.props.onDismissRequested,
                  className: (0, _._)("Modal", this.props.className),
                  style: {
                    maxWidth: _.width - 2 * _.MODAL_BOUNDS_MARGIN,
                    maxHeight: _.height - 2 * _.MODAL_BOUNDS_MARGIN,
                  },
                }),
                this.state.bInDOM && this.props.children,
              ),
            )
          );
        }
      });
      (_.MODAL_BOUNDS_MARGIN = 10), (_ = _ = (0, _._)([_._], _));
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _,
        _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      !(function (_) {
        (_[(_.None = 0)] = "None"),
          (_[(_.Vertical = 1)] = "Vertical"),
          (_[(_.Horizontal = 2)] = "Horizontal");
      })(_ || (_ = {})),
        (function (_) {
          (_[(_.Default = 0)] = "Default"),
            (_[(_.MouseDown = 1)] = "MouseDown"),
            (_[(_.Dragging = 2)] = "Dragging"),
            (_[(_.Thrown = 3)] = "Thrown");
        })(_ || (_ = {}));
      class _ extends _.Component {
        static get isScrollingSuppressed() {
          return _.s_setScrollingSuppressors.size > 0;
        }
        static get userIsDragging() {
          return !!_.m_CurrentlyDraggingPanel;
        }
        static suppressScrolling(_) {
          _.s_setScrollingSuppressors.add(_);
        }
        static unsuppressScrolling(_) {
          _.s_setScrollingSuppressors.delete(_);
        }
        constructor(_) {
          super(_),
            (this.m_ref = _.createRef()),
            (this.m_initialMousePosition = null),
            (this.m_initialScrollPosition = null),
            (this.m_mostRecentScrollSamples = []),
            (this.m_thrownVelocityPerSecond = null),
            (this.m_animationFrameRequestHandle = 0),
            (this.state = {
              eScrollState: _.Default,
              bAtEdge: null,
            }),
            (0, _.makeObservable)(this);
        }
        componentWillUnmount() {
          this.stopMouseTracking(),
            window.cancelAnimationFrame(this.m_animationFrameRequestHandle);
        }
        componentDidMount() {
          this.setState({
            bAtEdge: this.currentlyAtEdge,
          });
        }
        componentDidUpdate(_, _) {
          this.state.bAtEdge &&
            !1 === _.bAtEdge &&
            _._.Instance.triggerHaptic(_._.SlidingEdge);
        }
        onWindowMouseMove(_) {
          this.updateMouseTracking({
            _: _.clientX,
            _: _.clientY,
          });
        }
        onWindowMouseUp(_) {
          this.stopMouseTracking();
        }
        onMouseDown(_) {
          var _, _;
          null === (_ = (_ = this.props).onMouseDown) ||
            void 0 === _ ||
            __webpack_require__.call(_, _),
            this.startMouseTracking({
              _: _.clientX,
              _: _.clientY,
            });
        }
        onMouseUp(_) {
          var _, _;
          null === (_ = (_ = this.props).onMouseUp) ||
            void 0 === _ ||
            __webpack_require__.call(_, _);
        }
        onScroll(_) {
          var _, _;
          null === (_ = (_ = this.props).onScroll) ||
            void 0 === _ ||
            __webpack_require__.call(_, _),
            this.setState({
              bAtEdge: this.currentlyAtEdge,
            });
        }
        get div() {
          return this.m_ref.current;
        }
        get currentlyAtEdge() {
          const _ = this.m_ref.current;
          return _
            ? this.scrollsVertically
              ? 0 == _.scrollTop ||
                _.scrollTop + _.clientHeight == _.scrollHeight
              : 0 == _.scrollLeft ||
                _.scrollLeft + _.clientWidth == _.scrollWidth
            : null;
        }
        startMouseTracking(_) {
          this.setState({
            eScrollState: _.MouseDown,
          }),
            (this.m_initialMousePosition = _),
            window.document.addEventListener(
              "mousemove",
              this.onWindowMouseMove,
            ),
            window.document.addEventListener("mouseup", this.onWindowMouseUp);
        }
        updateMouseTracking(_) {
          const _ = (0, _._)(this.m_initialMousePosition, _);
          switch (this.state.eScrollState) {
            case _.MouseDown:
              if (this.props.scrollDirection == _.None) break;
              Math.abs(this.scrollsHorizontally ? _._ : _._) >
                (this.scrollsHorizontally
                  ? _.MIN_HORIZONTAL_DRAG_DISTANCE
                  : _.MIN_VERTICAL_DRAG_DISTANCE) && this.startDragging(_);
              break;
            case _.Dragging:
              if ((this.logScrollSample(), _.m_CurrentlyDraggingPanel)) {
                if (_.m_CurrentlyDraggingPanel != this) break;
              } else _.m_CurrentlyDraggingPanel = this;
              this.m_ref.current &&
                (this.scrollsHorizontally
                  ? (this.m_ref.current.scrollLeft =
                      this.m_initialScrollPosition._ + _._)
                  : (this.m_ref.current.scrollTop =
                      this.m_initialScrollPosition._ + _._));
          }
        }
        requestNextAnimationFrame() {
          (this.m_animationFrameRequestHandle = window.requestAnimationFrame(
            this.onAnimationFrame,
          )),
            (this.m_lastAnimationFrameTimeMs = performance.now());
        }
        onAnimationFrame() {
          if (this.state.eScrollState != _.Thrown || !this.m_ref.current)
            return;
          const _ = (performance.now() - this.m_lastAnimationFrameTimeMs) / 1e3;
          (this.m_ref.current.scrollLeft +=
            this.m_thrownVelocityPerSecond._ * _),
            (this.m_ref.current.scrollTop +=
              this.m_thrownVelocityPerSecond._ * _);
          const _ = Math.sign(this.m_thrownVelocityPerSecond._),
            _ = Math.sign(this.m_thrownVelocityPerSecond._),
            _ =
              850 +
              (((0, _._)(this.m_thrownVelocityPerSecond) - 500) / 1e4) * 49150,
            _ = Math.min(5e4, Math.max(850, _));
          this.m_thrownVelocityPerSecond = {
            _: this.m_thrownVelocityPerSecond._ - _ * _ * _,
            _: this.m_thrownVelocityPerSecond._ - _ * _ * _,
          };
          Math.sign(this.m_thrownVelocityPerSecond._) != _ ||
          Math.sign(this.m_thrownVelocityPerSecond._) != _ ||
          (0, _._)(this.m_thrownVelocityPerSecond) <= 1
            ? this.setState({
                eScrollState: _.Default,
              })
            : this.requestNextAnimationFrame();
        }
        startDragging(_) {
          !_.isScrollingSuppressed &&
            this.m_ref.current &&
            (0, _._)() == _._.Overlay &&
            (this.setState({
              eScrollState: _.Dragging,
            }),
            (this.m_initialMousePosition = _),
            (this.m_initialScrollPosition = {
              _: this.m_ref.current.scrollLeft,
              _: this.m_ref.current.scrollTop,
            }),
            this.logScrollSample());
        }
        startThrowing() {
          (this.m_thrownVelocityPerSecond = this.calculateThrowStartVelocity()),
            this.setState({
              eScrollState: _.Thrown,
            }),
            this.requestNextAnimationFrame();
        }
        cancelThrowing(_) {
          this.setState(
            (_, _) =>
              _.eScrollState == _.Thrown
                ? (window.cancelAnimationFrame(
                    this.m_animationFrameRequestHandle,
                  ),
                  {
                    eScrollState: _.Default,
                  })
                : null,
            _,
          );
        }
        get isThrown() {
          return this.state.eScrollState == _.Thrown;
        }
        calculateThrowStartVelocity() {
          if (this.m_mostRecentScrollSamples.length < 2)
            return {
              _: 0,
              _: 0,
            };
          let _ = null,
            _ = 0;
          for (let _ = 1; _ < this.m_mostRecentScrollSamples.length; _++) {
            const _ = this.m_mostRecentScrollSamples[_ - 1],
              _ = this.m_mostRecentScrollSamples[_],
              _ = (_.timeMs - _.timeMs) / 1e3,
              _ = {
                _: (_.scrollPosition._ - _.scrollPosition._) / _,
                _: (_.scrollPosition._ - _.scrollPosition._) / _,
              };
            _
              ? ((_._ = (_._ * _ + _._) / (_ + 1)),
                (_._ = (_._ * _ + _._) / (_ + 1)))
              : (_ = _),
              _++;
          }
          const _ = (0, _._)(_);
          return (
            _ > _.MAX_PIXELS_PER_SECOND &&
              (_ = (0, _._)(_, _.MAX_PIXELS_PER_SECOND / _)),
            _ < _.MIN_THROW_VELOCITY_PER_SECOND && (_ = null),
            null != _
              ? _
              : {
                  _: 0,
                  _: 0,
                }
          );
        }
        logScrollSample() {
          for (
            this.m_ref.current &&
            this.m_mostRecentScrollSamples.push({
              scrollPosition: {
                _: this.m_ref.current.scrollLeft,
                _: this.m_ref.current.scrollTop,
              },
              timeMs: performance.now(),
            });
            this.m_mostRecentScrollSamples.length > _.MAX_SCROLL_SAMPLES;
          )
            this.m_mostRecentScrollSamples.shift();
        }
        clearScrollSamples() {
          this.m_mostRecentScrollSamples = [];
        }
        stopMouseTracking() {
          _.m_CurrentlyDraggingPanel == this
            ? (this.startThrowing(),
              _._.temporarilySuppressSoundEffect(),
              setTimeout(() => {
                _.m_CurrentlyDraggingPanel = null;
              }, 0))
            : this.setState({
                eScrollState: _.Default,
              }),
            this.clearScrollSamples(),
            (this.m_initialMousePosition = null),
            (this.m_initialScrollPosition = null),
            window.document.removeEventListener(
              "mousemove",
              this.onWindowMouseMove,
            ),
            window.document.removeEventListener(
              "mouseup",
              this.onWindowMouseUp,
            );
        }
        get scrollsHorizontally() {
          return this.props.scrollDirection == _.Horizontal;
        }
        get scrollsVertically() {
          return this.props.scrollDirection == _.Vertical;
        }
        render() {
          let _ = Object.assign({}, this.props);
          delete _.scrollDirection, delete _.alwaysShowScrollbars;
          const _ = this.props.alwaysShowScrollbars ? "scroll" : "auto";
          return _.createElement(
            _.Fragment,
            null,
            this.state.eScrollState == _.Dragging && _.createElement(_._, null),
            _.createElement(
              "div",
              Object.assign({}, _, {
                className: (0, _._)("ScrollPanel", _.className),
                style: Object.assign(Object.assign({}, _.style), {
                  overflowX:
                    this.props.scrollDirection == _.Horizontal ? _ : "hidden",
                  overflowY:
                    this.props.scrollDirection == _.Vertical ? _ : "hidden",
                }),
                onMouseDown: this.onMouseDown,
                onMouseUp: this.onMouseUp,
                onScroll: this.onScroll,
                ref: this.m_ref,
              }),
              this.props.children,
            ),
          );
        }
        get scrollTop() {
          var _;
          return null === (_ = this.m_ref.current) || void 0 === _
            ? void 0
            : _.scrollTop;
        }
        set scrollTop(_) {
          this.m_ref.current &&
            ((this.m_ref.current.scrollTop = _), this.cancelThrowing());
        }
        get scrollLeft() {
          var _;
          return null === (_ = this.m_ref.current) || void 0 === _
            ? void 0
            : _.scrollLeft;
        }
        set scrollLeft(_) {
          this.m_ref.current &&
            ((this.m_ref.current.scrollLeft = _), this.cancelThrowing());
        }
        scrollTo(_) {
          const _ = () => {
            var _;
            null === (_ = this.m_ref.current) || void 0 === _ || _.scrollTo(_);
          };
          this.state.eScrollState == _.Thrown ? this.cancelThrowing(_) : _();
        }
        get children() {
          var _;
          return null === (_ = this.m_ref.current) || void 0 === _
            ? void 0
            : _.children;
        }
        getBoundingClientRect() {
          var _;
          return null === (_ = this.m_ref.current) || void 0 === _
            ? void 0
            : _.getBoundingClientRect();
        }
        get clientWidth() {
          var _;
          return null === (_ = this.m_ref.current) || void 0 === _
            ? void 0
            : _.clientWidth;
        }
        get clientHeight() {
          var _;
          return null === (_ = this.m_ref.current) || void 0 === _
            ? void 0
            : _.clientHeight;
        }
        get scrollWidth() {
          var _;
          return null === (_ = this.m_ref.current) || void 0 === _
            ? void 0
            : _.scrollWidth;
        }
        get scrollHeight() {
          var _;
          return null === (_ = this.m_ref.current) || void 0 === _
            ? void 0
            : _.scrollHeight;
        }
        get style() {
          var _;
          return null === (_ = this.m_ref.current) || void 0 === _
            ? void 0
            : _.style;
        }
        contains(_) {
          var _;
          return null === (_ = this.m_ref.current) || void 0 === _
            ? void 0
            : _.contains(_);
        }
      }
      (_.s_setScrollingSuppressors = _.observable.set()),
        (_.MAX_SCROLL_SAMPLES = 4),
        (_.MAX_PIXELS_PER_SECOND = 1e4),
        (_.MIN_THROW_VELOCITY_PER_SECOND = 1e3),
        (_.MIN_VERTICAL_DRAG_DISTANCE = 80),
        (_.MIN_HORIZONTAL_DRAG_DISTANCE = 40),
        (0, _._)([_._], _.prototype, "onWindowMouseMove", null),
        (0, _._)([_._], _.prototype, "onWindowMouseUp", null),
        (0, _._)([_._], _.prototype, "onMouseDown", null),
        (0, _._)([_._], _.prototype, "onMouseUp", null),
        (0, _._)([_._], _.prototype, "onScroll", null),
        (0, _._)([_._], _.prototype, "onAnimationFrame", null),
        (0, _._)([_.computed], _, "isScrollingSuppressed", null),
        (0, _._)([_.computed], _, "userIsDragging", null),
        (0, _._)([_.action], _, "suppressScrolling", null),
        (0, _._)([_.action], _, "unsuppressScrolling", null);
      class _ {
        constructor() {
          (this.m_CurrentlyDraggingPanel = null), (0, _.makeObservable)(this);
        }
      }
      (0, _._)([_.observable], _.prototype, "m_CurrentlyDraggingPanel", void 0);
      const _ = new _();
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      function _(_) {
        if (
          ((0, _.isObservable)(_) && (_ = (0, _.toJS)(_)),
          null === _ || null == _)
        )
          return _;
        if (Array.isArray(_)) return _.map(_);
        if (_ instanceof Map) {
          const _ = {};
          for (const _ of _.keys()) _[_] = _(_.get(_));
          return _;
        }
        if ("object" == typeof _) {
          const _ = {};
          for (const _ of Object.keys(_)) _[_] = _(_[_]);
          return _;
        }
        return _;
      }
      function _(..._) {
        const [_, ..._] = _;
        return JSON.stringify(_(_), ..._);
      }
      (window.toJS = _.toJS),
        (window.jsonit = (_) => JSON.parse(JSON.stringify(_)));
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      class _ {
        constructor() {
          (this.contents = _.observable.map()), (0, _.makeObservable)(this);
        }
      }
      (0, _._)([_.observable], _.prototype, "contents", void 0);
      class _ {
        constructor() {
          (this.m_Containers = _.observable.map()), (0, _.makeObservable)(this);
        }
        Init() {
          return (0, _._)(this, void 0, void 0, function* () {
            this.AddSubscribedContainer("25769803776"),
              yield this.UpdatePaths();
          });
        }
        AddSubscribedContainer(_) {
          if (!this.m_Containers.has(_)) {
            let _ = new _();
            (_.handle = _), this.m_Containers.set(_, _);
          }
        }
        UpdateContainer(_, _) {
          this.AddSubscribedContainer(_);
          let _ = this.m_Containers.get(_);
          _.contents.clear(),
            _.entries.forEach((_) => {
              null != _.path && _.contents.set(_.path, _);
            });
        }
        QueryContainer(_) {
          return (0, _._)(this, void 0, void 0, function* () {
            return new Promise(function (_, _) {
              _()
                .get("/properties.json?container=" + _)
                .then((_) => {
                  _([_, _.data]);
                })
                .catch((_) => {
                  __webpack_require__([_, _]);
                });
            });
          });
        }
        UpdatePaths() {
          return (0, _._)(this, void 0, void 0, function* () {
            let _ = [];
            this.m_Containers.forEach((_) => {
              _.push(this.QueryContainer(_.handle));
            });
            try {
              (yield Promise.all(_)).forEach((_) => {
                2 != _.length
                  ? console.log(
                      "Failed to update container. ",
                      _.length,
                      "entries in array",
                    )
                  : "string" == typeof _[1]
                    ? console.log(
                        "Failed to update container ",
                        _[0],
                        ":",
                        _[1],
                      )
                    : this.UpdateContainer(_[0], _[1]);
              });
            } catch (_) {
              throw (console.log(_), _);
            }
          });
        }
        GetAllActions(_) {
          if (!this.m_Containers.has(_)) return;
          let _ = [];
          return (
            this.m_Containers.get(_).contents.forEach((_) => {
              "k_unActionPropertyTag" == _.type &&
                null != _.path &&
                _.push(_.path);
            }),
            _
          );
        }
        GetActionValue(_, _) {
          if (!this.m_Containers.has(_)) return;
          let _ = this.m_Containers.get(_);
          if (!_.contents.has(_)) return;
          let _ = _.contents.get(_);
          return "k_unActionPropertyTag" == _.type ? _.value : void 0;
        }
        GetAllInputValues(_) {
          if (!this.m_Containers.has(_)) return;
          let _ = [];
          return (
            this.m_Containers.get(_).contents.forEach((_) => {
              "k_unInputValuePropertyTag" == _.type &&
                null != _.path &&
                _.push(_.path);
            }),
            _
          );
        }
        GetInputValue(_, _) {
          if (!this.m_Containers.has(_)) return;
          let _ = this.m_Containers.get(_);
          if (!_.contents.has(_)) return;
          let _ = _.contents.get(_);
          if ("k_unInputValuePropertyTag" != _.type) return;
          let _ = _.value;
          return _.length < 1 ? void 0 : _[0];
        }
        GetScalarInputValue(_, _) {
          let _ = this.GetInputValue(_, _);
          return null == _ || "scalar" != _.type ? 0 : _.value;
        }
        GetBooleanInputValue(_, _) {
          let _ = this.GetInputValue(_, _);
          return null != _ && "boolean" == _.type && _.value;
        }
      }
      (0, _._)([_.observable], _.prototype, "m_Containers", void 0),
        (0, _._)([_._], _.prototype, "AddSubscribedContainer", null),
        (0, _._)([_.action], _.prototype, "UpdateContainer", null),
        (0, _._)([_._], _.prototype, "GetAllActions", null),
        (0, _._)([_._], _.prototype, "GetActionValue", null),
        (0, _._)([_._], _.prototype, "GetAllInputValues", null),
        (0, _._)([_._], _.prototype, "GetInputValue", null),
        (0, _._)([_._], _.prototype, "GetScalarInputValue", null),
        (0, _._)([_._], _.prototype, "GetBooleanInputValue", null);
      const _ = new _();
      window.paths = _;
    },
  },
]);
