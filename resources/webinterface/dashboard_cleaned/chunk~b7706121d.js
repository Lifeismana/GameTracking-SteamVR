var CLSTAMP = "steamdb";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [148],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _._ {
        constructor(_) {
          super(_), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "audiosource";
        }
        buildNode(_, _) {
          const _ = this.createSgNode(_);
          return (
            (_.properties.name = this.props.name),
            (_.properties.channel = this.props.channel),
            (_.properties.debug = this.props.debug),
            [_, _]
          );
        }
      }
      (0, _._)([_._], _.prototype, "buildNode", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _._ {
        constructor(_) {
          super(_), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "dashboardtransform";
        }
        buildNode(_, _) {
          var _, _;
          const _ = this.createSgNode(_);
          return (
            (_.properties.continuous_relatch =
              null !== (_ = this.props.bContinuousRelatch) &&
              void 0 !== _ &&
              _),
            (_.properties.free_dashboard_transform =
              null !== (_ = this.props.bFreeDashboardTransform) &&
              void 0 !== _ &&
              _),
            [_, _]
          );
        }
      }
      (0, _._)([_._], _.prototype, "buildNode", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__("chunkid");
      var _ = __webpack_require__("chunkid");
      _._;
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__("chunkid");
      var _ = __webpack_require__("chunkid");
      _._;
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _._ {
        constructor(_) {
          super(_), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "ltcquad";
        }
        buildNode(_, _) {
          const _ = this.createSgNode(_);
          if (
            ((_.properties.width = this.props.width),
            (_.properties.height = this.props.height),
            (_.properties["target-id"] = this.props.target_id),
            (_.properties["near-z"] = this.props["near-z"]),
            (_.properties["far-z"] = this.props["far-z"]),
            (_.properties.debug = this.props.debug),
            this.props.diffuse)
          ) {
            let _ = this.props.diffuse;
            (_.properties["diffuse-resolution"] = _.resolution),
              (_.properties["diffuse-size"] = _.size);
          }
          if (this.props.specular) {
            let _ = this.props.specular;
            if ("string" == typeof _.color) _.properties.color = _.color;
            else {
              let _ = (0, _._)(_.color, {
                _: 0,
                _: 0,
                _: 0,
              });
              _.properties.color = [_._, _._, _._];
            }
          }
          return [_, _];
        }
      }
      (0, _._)([_._], _.prototype, "buildNode", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _._ {
        constructor(_) {
          super(_), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "mountable";
        }
        buildNode(_, _) {
          return [_, this.createSgNode(_)];
        }
      }
      (0, _._)([_._], _.prototype, "buildNode", null);
      class _ extends _._ {
        constructor(_) {
          super(_), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "mountedscenegraph";
        }
        buildNode(_, _) {
          const _ = this.createSgNode(_);
          return (
            (_.properties.mountable_id = (0, _._)(this.props.mountedId)), [_, _]
          );
        }
      }
      (0, _._)([_._], _.prototype, "buildNode", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _._ {
        constructor(_) {
          super(_), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "opacity";
        }
        buildNode(_, _) {
          const _ = this.createSgNode(_);
          return (_.properties.opacity = (0, _._)(this.props.value)), [_, _];
        }
      }
      (0, _._)([_._], _.prototype, "buildNode", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      var _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      !(function (_) {
        (_[(_.None = 0)] = "None"), (_[(_.Backface = 1)] = "Backface");
      })(_ || (_ = {}));
      class _ extends _._ {
        constructor(_) {
          super(_), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "rendermodel";
        }
        buildNode(_, _) {
          const _ = this.createSgNode(_);
          if (
            ((_.properties.source = this.props.source),
            (_.properties["texture-id"] = (0, _._)(this.props["texture-id"])),
            (_.properties["input-path"] = this.props["input-path"]),
            this.props.fresnel)
          ) {
            let _ = this.props.fresnel;
            if ("string" == typeof _.color) _.properties.color = _.color;
            else {
              let _ = (0, _._)(_.color, {
                _: 0,
                _: 0,
                _: 0,
              });
              _.properties.color = [_._, _._, _._];
            }
            (_.properties.opacity = _.opacity ? _.opacity : 1),
              (_.properties.strength = _.strength ? _.strength : 1);
          }
          return (
            (_.properties.wireframe = this.props.wireframe),
            (_.properties.solid = this.props.solid),
            (_.properties.culling = this.props.culling),
            (_.properties.stencil_mask = this.props.stencil_mask),
            (_.properties["no-depth-write"] = this.props["no-depth-write"]),
            (_.properties["no-depth-test"] = this.props["no-depth-test"]),
            [_, _]
          );
        }
      }
      (0, _._)([_._], _.prototype, "buildNode", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _._ {
        constructor(_) {
          super(_), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "reparent-to-panel";
        }
        buildNode(_, _) {
          const _ = this.createSgNode(_),
            _ = Object.assign(Object.assign({}, _), {
              bInsideReparentedPanel: !0,
              currentPanel: null,
            });
          return (
            this.props.parent_overlay_key &&
              (_.properties["parent-overlay-key"] =
                this.props.parent_overlay_key),
            [_, _]
          );
        }
      }
      (0, _._)([_._], _.prototype, "buildNode", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _._ {
        constructor(_) {
          super(_), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "resize-handle";
        }
        buildNode(_, _) {
          const _ = this.createSgNode(_);
          return (
            (_.properties["target-id"] = this.props.target_id),
            (_.properties["is-active"] = this.props.is_active),
            [_, _]
          );
        }
      }
      (0, _._)([_._], _.prototype, "buildNode", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _) {
        let _ = _.getAttribute(_);
        if (_ && _.length > 0) {
          if ("undefined" == _) return;
          let _ = [];
          for (let _ of __webpack_require__.split(" "))
            0 != _.length && _.push(parseFloat(_));
          if (_.length > 0) return _;
        }
      }
      function _(_, _) {
        let _ = _.getAttribute(_);
        if (_ && _.length > 0) return parseFloat(_);
      }
      function _(_, _) {
        let _ = _.getAttribute(_);
        if (_ && _.length > 0) return parseInt(_);
      }
      function _(_, _) {
        let _ = _.getAttribute(_);
        if (_ && _.length > 0)
          return (
            "true" == _ ||
            (_.length > 0 && 0 != parseInt(_) && !isNaN(parseInt(_)))
          );
      }
      function _(_, _) {
        let _ = _.getAttribute(_);
        if (_ && _.length > 0) return _;
      }
      function _(_, _) {
        return _(_(_, _));
      }
      function _(_, _) {
        let _ = {
          type: _,
          properties: {},
        };
        return (
          _._ && (_.properties._ = _(_._)),
          (_.properties.sgid = _(_, "sgid")),
          _
        );
      }
      function _() {
        return null === VRHTML || void 0 === VRHTML
          ? void 0
          : VRHTML.VROverlay.ThisOverlayHandle();
      }
      function _(_, _) {
        let [_, _] = (function (_, _) {
            let _ = _.buildNode;
            if (_) return __webpack_require__(_, _);
            let _ = Object.assign({}, _),
              _ = null;
            switch (_.nodeName.toUpperCase()) {
              case "VSG-TRANSFORM":
                (_ = _("transform", _)),
                  (_.properties.translation = _(_, "translation")),
                  (_.properties.rotation = _(_, "rotation")),
                  (_.properties.scale = _(_, "scale")),
                  (_.properties["curvature-pitch"] = _(_, "curvature-pitch")),
                  (_.properties["transform-path"] = _(_, "transform-path")),
                  (_.properties["projection-constraint"] = _(
                    _,
                    "projection-constraint",
                  )),
                  (_.properties["invert-parent-panel-pitch"] = _(
                    _,
                    "invert-parent-panel-pitch",
                  )),
                  (_.properties["ignore-parent-scale"] = _(
                    _,
                    "ignore-parent-scale",
                  )),
                  (_.properties["parent-path"] = _(_, "parent-path")),
                  (_.properties["parent-origin"] = _(_, "parent-origin")),
                  (_.properties["parent-id"] = _(_, "parent-id")),
                  (_.properties["frame-resize-scale-factor"] = _(
                    _,
                    "frame-resize-scale-factor",
                  ));
                break;
              case "VSG-TRACKING-STATE-VISIBILITY":
                (_ = _("trackingstatevisibility", _)),
                  (_.properties["visible-0dof"] = _(_, "visible-0dof")),
                  (_.properties["visible-3dof"] = _(_, "visible-3dof")),
                  (_.properties["visible-6dof"] = _(_, "visible-6dof"));
                break;
              case "VSG-ELASTIC-HEAD-TRANSFORM":
                (_ = _("elasticheadtransform", _)),
                  (_.properties["rotation-start-angle-threshold"] = _(
                    _,
                    "rotation-start-angle-threshold",
                  )),
                  (_.properties["rotation-stop-angle-threshold"] = _(
                    _,
                    "rotation-stop-angle-threshold",
                  )),
                  (_.properties["rotation-ease-in-time"] = _(
                    _,
                    "rotation-ease-in-time",
                  )),
                  (_.properties["rotation-ease-in-power"] = _(
                    _,
                    "rotation-ease-in-power",
                  )),
                  (_.properties["rotation-ease-out-angle-threshold"] = _(
                    _,
                    "rotation-ease-out-angle-threshold",
                  )),
                  (_.properties["rotation-ease-out-power"] = _(
                    _,
                    "rotation-ease-out-power",
                  )),
                  (_.properties["rotation-min-angular-velocity"] = _(
                    _,
                    "rotation-min-angular-velocity",
                  )),
                  (_.properties["rotation-max-angular-velocity"] = _(
                    _,
                    "rotation-max-angular-velocity",
                  )),
                  (_.properties["translation-start-distance-threshold"] = _(
                    _,
                    "translation-start-distance-threshold",
                  )),
                  (_.properties["translation-stop-distance-threshold"] = _(
                    _,
                    "translation-stop-distance-threshold",
                  )),
                  (_.properties["translation-ease-in-time"] = _(
                    _,
                    "translation-ease-in-time",
                  )),
                  (_.properties["translation-ease-in-power"] = _(
                    _,
                    "translation-ease-in-power",
                  )),
                  (_.properties["translation-ease-out-distance-threshold"] = _(
                    _,
                    "translation-ease-out-distance-threshold",
                  )),
                  (_.properties["translation-ease-out-power"] = _(
                    _,
                    "translation-ease-out-power",
                  )),
                  (_.properties["translation-velocity"] = _(
                    _,
                    "translation-velocity",
                  )),
                  (_.properties.enabled = _(_, "enabled")),
                  (_.properties["lock-to-horizon"] = _(_, "lock-to-horizon")),
                  (_.properties["translation-parent"] = _(
                    _,
                    "translation-parent",
                  )),
                  (_.properties["rotation-translation-change-together"] = _(
                    _,
                    "rotation-translation-change-together",
                  ));
                break;
              case "VSG-LINE":
                (_ = _("line", _)),
                  (_.properties["target-id"] = _(_, "target-id")),
                  (_.properties.thickness = _(_, "thickness")),
                  (_.properties["start-buffer"] = _(_, "start-buffer")),
                  (_.properties["end-buffer"] = _(_, "end-buffer"));
                break;
              case "VSG-LINE-CONSTRAINED-TRANSFORM":
                (_ = _("line-constrained-transform", _)),
                  (_.properties["target-id"] = _(_, "target-id")),
                  (_.properties["source-id"] = _(_, "source-id")),
                  (_.properties["source-distance"] = _(_, "source-distance")),
                  (_.properties["target-limit"] = _(_, "target-limit"));
                break;
              case "VSG-CALLOUT-TRANSFORM":
                (_ = _("callout-transform", _)),
                  (_.properties.offset = _(_, "offset"));
                break;
              case "VSG-HEAD-FACING-TRANSFORM":
                _ = _("head-facing-transform", _);
                break;
              case "VSG-PIN-TO-VIEW-TRANSFORM":
                (_ = _("pin-to-view-transform", _)),
                  (_.properties["offscreen-z-depth"] = _(
                    _,
                    "offscreen-z-depth",
                  )),
                  (_.properties["off-axis-limit"] = _(_, "off-axis-limit")),
                  (_.properties["transition-limit"] = _(_, "transition-limit"));
                break;
              case "VSG-GRAB-TRANSFORM":
                (_ = _("grab-transform", _)),
                  (_.properties["parent-path"] = _(_, "parent-path")),
                  (_.properties.translation = _(_, "translation")),
                  (_.properties.rotation = _(_, "rotation")),
                  (_.properties.scale = _(_, "scale")),
                  (_.properties["should-head-align"] = _(
                    _,
                    "should-head-align",
                  )),
                  (_.properties["stop-distance"] = _(_, "stop-distance")),
                  (_.properties["start-angle"] = _(_, "start-angle")),
                  (_.properties["start-quat-difference"] = _(
                    _,
                    "start-quat-difference",
                  )),
                  (_.properties["stop-quat-difference"] = _(
                    _,
                    "stop-quat-difference",
                  )),
                  (_.properties["scale-margin"] = _(_, "scale-margin")),
                  (_.properties["lerp-speed"] = _(_, "lerp-speed")),
                  (_.properties["min-distance"] = _(_, "min-distance")),
                  (_.properties["max-distance"] = _(_, "max-distance")),
                  (_.properties["one-to-one-radius"] = _(
                    _,
                    "one-to-one-radius",
                  )),
                  (_.properties["max-x-squared-contribution"] = _(
                    _,
                    "max-x-squared-contribution",
                  )),
                  (_.properties["acceleration-factor-x-coefficient"] = _(
                    _,
                    "acceleration-factor-x-coefficient",
                  )),
                  (_.properties["acceleration-factor-x-squared-coefficient"] =
                    _(_, "acceleration-factor-x-squared-coefficient")),
                  (_.properties["acceleration-factor-scale-term"] = _(
                    _,
                    "acceleration-factor-scale-term",
                  )),
                  (_.properties["remote-transform-tx"] = _(
                    _,
                    "remote-transform-tx",
                  )),
                  (_.properties["reset-on-recenter"] = _(
                    _,
                    "reset-on-recenter",
                  ));
            }
            return [_, _];
          })(_, _),
          _ = [];
        for (let _ = 0; _ < _.children.length; _++) {
          let _ = _.children.item(_);
          if (_.children) {
            let _ = _(_, _);
            _ && (_ = _.concat(_));
          }
        }
        return _.bShouldAbort
          ? null
          : _
            ? (_.length > 0 && (_.children = _), [_])
            : _.length > 0
              ? 1 == _.length
                ? _
                : [
                    {
                      children: _,
                    },
                  ]
              : null;
      }
      let _,
        _,
        _,
        _,
        _ = [],
        _ = null,
        _ = null,
        _ = !0,
        _ = null;
      function _(_, _, _) {
        (_ = _),
          (_ = _),
          (_ = _),
          console.log("Setting owning overlay key to " + _);
      }
      function _(_) {
        return _
          ? (function (_) {
              return _ && _.includes("::");
            })(_)
            ? _
            : _() + "::" + _
          : null;
      }
      function _() {
        var _;
        return null !==
          (_ =
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VROverlay.ThisOverlayKey()) && void 0 !== _
          ? _
          : _;
      }
      function _(_) {
        _.push(_), _();
      }
      function _() {
        _ ||
          (_ = window.setTimeout(
            () =>
              (0, _._)(this, void 0, void 0, function* () {
                let _ = document.body;
                _ && (_ = _);
                let _ = {
                  type: "root",
                  rootproperties: {
                    relatchDashboardTransform: _,
                    allowDismissOnClick: _,
                    sceneColorCorrection: _,
                  },
                  children: _(
                    {
                      currentPanel: null,
                      bInsideReparentedPanel: !1,
                      bShouldAbort: !1,
                    },
                    _,
                  ),
                };
                _ ||
                  (console.log("Initializing sg_mailbox"),
                  (_ = new _._()),
                  yield _.Init("sg_mailbox", _));
                let _ = {
                  type: "update_scene_graph",
                  owning_overlay_key: _(),
                  scene_graph: _,
                  retired_sgids: _,
                };
                _.SendMessage("vrcompositor_systemlayer", _),
                  (_ = null),
                  (_ = []),
                  (_ = !1);
              }),
            0,
          ));
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _._ {
        constructor(_) {
          super(_), super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return Array.isArray(this.props.color) && this.props.color.length > 1
            ? "tint-anim"
            : "tint";
        }
        buildNode(_, _) {
          const _ = this.createSgNode(_);
          return (
            this.props.color
              ? "string" == typeof this.props.color
                ? (_.properties.color = this.props.color)
                : Array.isArray(this.props.color)
                  ? (this.props.color.length > 0 &&
                    "string" == typeof this.props.color[0]
                      ? (_.properties.color =
                          this.props.color.length > 1
                            ? this.props.color
                            : this.props.color[0])
                      : (_.properties.color = this.props.color
                          .map((_) => [_._, _._, _._])
                          .reduce((_, _) => _.concat(_), [])),
                    (_.properties["animation-seconds"] =
                      this.props.animationSeconds))
                  : (_.properties.color = [
                      this.props.color._,
                      this.props.color._,
                      this.props.color._,
                    ])
              : (_.properties.color = [1, 1, 1]),
            [_, _]
          );
        }
      }
      (0, _._)([_._], _.prototype, "buildNode", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__("chunkid");
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      _ = (_) => {
        throw new Error(_.errorStr);
      };
      var _;
      class _ extends _.Component {
        constructor(_) {
          super(_), (this.state = {}), (this.state.lastErrorKey = _.errorKey);
        }
        static InstallErrorReportingStore(_) {
          this.sm_ErrorReportingStore = _;
        }
        componentDidCatch(_, _) {
          const _ = _.sm_ErrorReportingStore;
          _
            ? __webpack_require__
                .ReportError(_, {
                  strComponentStack: _.componentStack || void 0,
                })
                .then(
                  (_) =>
                    _ &&
                    this.setState({
                      identifierHash: _.identifierHash,
                    }),
                )
            : console.warn(
                "No ErrorReportingStore - use ErrorReportingStore().Init() to configure error reporting to server",
              ),
            this.setState({
              error: {
                error: _,
                info: _,
              },
              lastErrorKey: this.props.errorKey,
            });
        }
        Reset() {
          this.setState({
            error: void 0,
          });
        }
        render() {
          const { children: _, fallback: _, errorKey: _ } = this.props,
            { error: _, identifierHash: _, lastErrorKey: _ } = this.state;
          return _ && _ == _
            ? void 0 !== _
              ? "function" == typeof _
                ? _(_.error)
                : _
              : _.sm_ErrorReportingStore &&
                  _.sm_ErrorReportingStore.reporting_enabled
                ? _.createElement(_, {
                    error: _,
                    identifierHash: _,
                    store: _.sm_ErrorReportingStore,
                    onRefresh: this.Reset,
                  })
                : _.createElement(_, {
                    error: _,
                    onDismiss: this.Reset,
                  })
            : _ || null;
        }
      }
      function _(_) {
        const { enabled: _ } = _,
          [_, _] = _.useState(_),
          [_, _] = _.useState(_._);
        _.useEffect(() => {
          const _ = setTimeout(() => {
            _ &&
              (_ > 1
                ? _(_ - 1)
                : (console.warn(
                    "Auto-reloading due to triggered ErrorBoundary...",
                  ),
                  window.location.reload()));
          }, 1e3);
          return () => clearTimeout(_);
        }, [_, _]);
        const _ = _.useCallback(() => {
          console.log("Auto-reload canceled."), _(!1);
        }, []);
        return (
          _.useEffect(() => {
            const _ = () => {
              _();
            };
            return (
              document.addEventListener("click", _),
              () => document.removeEventListener("click", _)
            );
          }, [_]),
          _
            ? _
              ? _.createElement(
                  _.Fragment,
                  null,
                  _.createElement(
                    _,
                    null,
                    "Reloading UI in ",
                    _,
                    " seconds...",
                  ),
                  "   ",
                  _.createElement(
                    "span",
                    {
                      style: {
                        textDecoration: "underline",
                        cursor: "pointer",
                      },
                      onClick: _,
                    },
                    "Cancel",
                  ),
                  _.createElement("br", null),
                )
              : _.createElement(
                  _.Fragment,
                  null,
                  _.createElement(_, null, "Auto-reload canceled."),
                  "   ",
                  _.createElement(
                    "span",
                    {
                      style: {
                        textDecoration: "underline",
                        cursor: "pointer",
                      },
                      onClick: () => window.location.reload(),
                    },
                    "Reload now",
                  ),
                  _.createElement("br", null),
                )
            : null
        );
      }
      (0, _._)([_._], _.prototype, "Reset", null);
      const _ = ({ error: _, onDismiss: _ }) => {
          let _ = _.error ? _.error.stack : "Stack missing",
            _ = _.info ? _.info.componentStack : "",
            _ = (_.error && _.error.message) || "unknown error";
          const _ = _.useContext(_._);
          return _.createElement(
            _,
            null,
            _.createElement(_, null, 'Error: "', _, '"'),
            "   ",
            _.createElement(
              "span",
              {
                style: {
                  textDecoration: "underline",
                  cursor: "pointer",
                },
                onClick: _,
              },
              "(x) Dismiss",
            ),
            _.createElement("br", null),
            _.createElement(_, {
              enabled: null == _,
            }),
            _.createElement(_, null, _),
            _.createElement(_, null, "The error occurred while rendering:", _),
          );
        },
        _ = (_) => {
          const { error: _, onRefresh: _, identifierHash: _, store: _ } = _,
            _ = (_.error && _.error.message) || "unknown error",
            _ = `${_.product}_${_.version}_${_}`,
            _ = _.useContext(_._);
          return _.createElement(
            _,
            null,
            _.createElement(
              _,
              null,
              "Something went wrong while displaying this content. ",
              _.createElement(
                "span",
                {
                  style: {
                    textDecoration: "underline",
                    cursor: "pointer",
                  },
                  onClick: _,
                },
                "Refresh",
              ),
            ),
            _.createElement(_, {
              enabled: null == _,
            }),
            _.createElement(_, null, "Error Reference: ", _),
            _.createElement(_, null, _),
          );
        };
      function _(_) {
        return _.useContext(_._) || (0, _._)() != _._.Overlay
          ? _.createElement(_, Object.assign({}, _))
          : _.createElement(
              _._,
              {
                parent_path: "/user/head",
                translation: {
                  _: -0.5,
                  _: -0.9,
                },
                rotation: {
                  _: -20,
                },
              },
              _.createElement(
                _._,
                {
                  debug_name: "vr_error_container",
                  meters_per_pixel: 75e-5,
                  origin: {
                    _: -0.5,
                    _: -1,
                  },
                  interactive: !0,
                },
                _.createElement(_, Object.assign({}, _)),
              ),
            );
      }
      const _ = ({ children: _ }) =>
          _.createElement(
            "div",
            {
              style: {
                overflow: "auto",
                marginLeft: "15px",
                color: "white",
                fontSize: "16px",
                userSelect: "auto",
                backgroundColor: "black",
              },
              className: "ErrorBoundary",
            },
            _,
          ),
        _ = ({ children: _ }) =>
          _.createElement(
            "h1",
            {
              style: {
                fontSize: "20px",
                display: "inline-block",
                marginTop: "15px",
                userSelect: "auto",
              },
            },
            _,
          ),
        _ = ({ children: _ }) =>
          _.createElement(
            "pre",
            {
              style: {
                marginTop: "15px",
                opacity: 0.7,
                userSelect: "auto",
              },
            },
            _,
          );
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = (__webpack_require__("chunkid"), __webpack_require__("chunkid"));
      class _ {
        constructor() {
          this.m_vecCallbacks = [];
        }
        Register(_) {
          this.m_vecCallbacks.push(_);
          return {
            Unregister: () => {
              const _ = this.m_vecCallbacks.indexOf(_);
              _ >= 0 && this.m_vecCallbacks.splice(_, 1);
            },
          };
        }
        Dispatch(..._) {
          for (const _ of Array.from(this.m_vecCallbacks)) _(..._);
        }
        ClearAllCallbacks() {
          this.m_vecCallbacks = [];
        }
        CountRegistered() {
          return this.m_vecCallbacks.length;
        }
      }
      (0, _._)([_._], _.prototype, "Dispatch", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      function _(_) {
        return new Promise((_) => setTimeout(_, _));
      }
      __webpack_require__._(module_exports, {
        _: () => _,
      });
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = "change_route";
      class _ {
        constructor() {
          (this.m_wsWebSocketToServer = void 0),
            (this.m_mailbox = new _._()),
            (this.connected = !1),
            (this.settingsSchema = void 0),
            (this.settings = _.observable.map()),
            (this.systemInfo = void 0),
            (this.audioDevices = void 0),
            (this.apps = []),
            (this.probablyOwnedAppkeys = new Set()),
            (this.showInternalSettings = !1),
            (this.workshopStateChangedCanary = 1),
            (this.onRestartRequired = null),
            (this.onAppRestartRequired = null),
            (this.pendingChanges = new Map()),
            (this.route = []),
            (this.m_mapSettingsLastWriteInfo = new Map()),
            (this.m_bIsSettingApp = !1),
            (this.m_bInitStarted = !1),
            (this.GetAppList = function () {
              return new Promise(function (_, _) {
                _()
                  .get("/app/list.json")
                  .then((_) => {
                    _(_.data.apps);
                  })
                  .catch((_) => {
                    _(_);
                  });
              });
            }),
            (this.GetSettingsUGC = function () {
              return new Promise(function (_, _) {
                _()
                  .get("/settings_getugc")
                  .then((_) => {
                    _(_.data);
                  })
                  .catch((_) => {
                    _(_);
                  });
              });
            }),
            (this.ReloadSettingsSchema = function () {
              return new Promise(function (_, _) {
                _()
                  .get("/settings_reloadschema")
                  .then((_) => {
                    _(_.data);
                  })
                  .catch((_) => {
                    _(_);
                  });
              });
            }),
            (this.GetSettingsInfo = function () {
              return new Promise(function (_, _) {
                _()
                  .get("/settings_getinfo")
                  .then((_) => {
                    _(_.data);
                  })
                  .catch((_) => {
                    _(_);
                  });
              });
            }),
            (0, _.makeObservable)(this);
        }
        OpenWebSocketToHost() {
          return new Promise((_, _) => {
            console.log("Connecting vrsettings..."),
              (this.m_wsWebSocketToServer = new WebSocket(
                "ws://" + window.location.host,
              )),
              this.m_wsWebSocketToServer.addEventListener("open", (_) => {
                this.OnWebSocketOpen(_), _();
              }),
              this.m_wsWebSocketToServer.addEventListener(
                "message",
                this.OnWebSocketMessage,
              ),
              this.m_wsWebSocketToServer.addEventListener(
                "close",
                this.OnWebSocketClose,
              );
          });
        }
        Init(_) {
          return (0, _._)(this, void 0, void 0, function* () {
            if (this.m_bInitStarted) return;
            (this.m_bInitStarted = !0),
              (this.m_bIsSettingApp = _),
              this.m_bIsSettingApp &&
                (window.addEventListener("hashchange", this.onHashChanged),
                this.onHashChanged()),
              (0, _.autorun)(
                () => {
                  let _ = [];
                  if (0 != this.pendingChanges.size) {
                    for (const [_, _] of this.pendingChanges.entries())
                      _.push({
                        name: _,
                        value: _,
                      });
                    this.pendingChanges.clear(),
                      _()
                        .post("/settings_set.action", _)
                        .then((_) => {})
                        .catch((_) => {
                          console.log(
                            "Failed to save settings! This usually happens when type is set incorrectly on one of the keys in the schema. ",
                            _,
                          );
                        });
                  }
                },
                {
                  delay: 300,
                },
              ),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.RegisterForDisplayModeNotSupportedEvents(
                  this.SetRestartRequired,
                );
            let _ = [];
            this.m_mailbox.connected || _.push(this.ConnectMailbox()),
              _.push(this.OpenWebSocketToHost()),
              _.push(this.AwaitInitialSettingsSchema()),
              yield Promise.all(_);
          });
        }
        get MailboxName() {
          if (!this.m_bIsSettingApp) return "settings";
          switch ((0, _._)()) {
            case _._.Overlay:
              return "settings/overlay";
            case _._.Desktop:
              return "settings/desktop";
            default:
              return "settings/unknown";
          }
        }
        ConnectMailbox() {
          return (0, _._)(this, void 0, void 0, function* () {
            try {
              yield this.m_mailbox.Init(this.MailboxName),
                this.m_mailbox.RegisterHandler(
                  "workshop_state_changed",
                  this.OnWorkshopStateChangedMessage,
                ),
                this.m_mailbox.RegisterHandler(_, this.OnChangeRouteMessage),
                this.m_mailbox.RegisterHandler(
                  "app_config_changed",
                  this.OnAppConfigChangedMessage,
                ),
                this.m_mailbox.RegisterHandler(
                  "refresh_rate_change",
                  this.OnRefreshRateChangeMessage,
                );
            } catch (_) {
              console.log("Failed to open settings mailbox:" + _);
            }
          });
        }
        OnWorkshopStateChangedMessage(_) {
          this.workshopStateChangedCanary++;
        }
        OnChangeRouteMessage(_) {
          this.m_bIsSettingApp &&
            this.setRoute(_.page, _.section, _.sectionParams);
        }
        OnAppConfigChangedMessage(_) {
          return (0, _._)(this, void 0, void 0, function* () {
            if (_.deleted_appkeys.length)
              for (let _ = this.apps.length - 1; _ >= 0; _--)
                _.deleted_appkeys.indexOf(this.apps[_].key) >= 0 &&
                  this.apps.splice(_, 1);
            for (let _ of _.updated_apps) {
              for (let _ = 0; _ < this.apps.length; _++)
                if (this.apps[_].key == _.key) {
                  !this.apps[_].is_autolaunch &&
                    _.is_autolaunch &&
                    this.SetRestartRequired(),
                    (this.apps[_] = Object.assign(
                      Object.assign(Object.assign({}, this.apps[_]), {
                        current_scene_process: !1,
                      }),
                      _,
                    )),
                    (_ = null);
                  break;
                }
              _ && (this.apps.push(_), this.probablyOwnedAppkeys.add(_.key));
            }
          });
        }
        OnRefreshRateChangeMessage(_) {
          this.onAppRestartRequired &&
            this.onAppRestartRequired(_.app_supports);
        }
        onHashChanged() {
          if (!this.m_bIsSettingApp) return;
          const _ = window.location.hash;
          0 === _.indexOf("#")
            ? (this.route = _.substring(1).split("/"))
            : (this.route = []);
        }
        get routePage() {
          return this.route.length >= 1 ? this.route[0] : null;
        }
        get routePageSection() {
          return this.route.length >= 2 ? this.route[1] : null;
        }
        get routePageSectionParams() {
          return this.route.slice(2);
        }
        setRoutePage(_) {
          this.setRoute(_);
        }
        setRoutePageSection(_) {
          this.setRoute(this.routePage, _);
        }
        setRoutePageSectionParams(_) {
          this.setRoute(this.routePage, this.routePageSection, _);
        }
        setRoute(_, _, _) {
          if (this.m_bIsSettingApp) {
            (_ = null != _ ? _ : ""), (_ = null != _ ? _ : []);
            const _ = _ ? [_, _, ..._] : [_],
              _ = _.join("/");
            window.location.hash.substring(1) != _ &&
              ((window.location.hash = _), (this.route = _));
          } else
            this.m_mailbox.connected &&
              this.m_mailbox.SendMessage(this.MailboxName, {
                type: _,
                page: _,
                section: _,
                sectionParams: _,
              });
        }
        SetDashboardFadeSupression(_, _) {
          this.m_mailbox.connected &&
            this.m_mailbox.SendMessage(_._, {
              type: _._,
              suppress_dashboard_fade: _,
              for_id: _,
            });
        }
        SetDashboardForceBoundsVisible(_, _, _) {
          this.m_mailbox.connected &&
            this.m_mailbox.SendMessage(_._, {
              type: _._,
              force_bounds_visible: _,
              for_overlay_key: _,
              for_id: _,
            });
        }
        SetRestartRequired() {
          this.onRestartRequired && this.onRestartRequired();
        }
        OnWebSocketOpen(_) {
          (this.connected = !0),
            this.WebSocketSend("settings_open"),
            window.addEventListener("beforeunload", () => {
              this.WebSocketSend("settings_close");
            }),
            _.GetSettingsInfo().then((_) => {
              this.systemInfo = _;
            }),
            _.GetAppList().then((_) => {
              this.OnVRAppList({
                jsonid: "vr_app_list",
                apps: _,
              });
            });
        }
        OnWebSocketClose(_) {
          console.log("Lost connection to host..."),
            (this.connected = !1),
            this.OpenWebSocketToHost();
        }
        WebSocketSend(_) {
          null != this.m_wsWebSocketToServer &&
            1 == this.m_wsWebSocketToServer.readyState &&
            this.m_wsWebSocketToServer.send(_);
        }
        OnWebSocketMessage(_) {
          let _ = JSON.parse(_.data);
          switch (_.jsonid) {
            case "vr_settings":
              this.OnVRSettings(_);
              break;
            case "vr_settings_schema":
              this.OnVRSettingsSchema(_);
              break;
            case "vr_audio_devices":
              this.OnVRAudioDevices(_);
              break;
            case "vr_app_list":
              this.OnVRAppList(_);
              break;
            default:
              _.jsonid
                ? console.log("Received unhandled event: " + _.jsonid)
                : console.log("Received unknown message: ", _);
          }
        }
        OnVRSettings(_) {
          for (let _ in _.values) {
            const _ = _.values[_];
            if (
              this.settings.get(_) != _ ||
              this.m_mapSettingsLastWriteInfo.has(_)
            ) {
              if (this.settingsSchema) {
                const _ = this.GetSettingSchema(_);
                _ && _.requires_restart && this.SetRestartRequired();
              }
              this.SetSettingValueFromServer(_, _);
            }
          }
        }
        SetSettingValueFromServer(_, _) {
          const _ = 1e3 * _.SERVER_SETTING_MERGE_DEFER_DURATION;
          if (this.m_mapSettingsLastWriteInfo.has(_)) {
            let _ = this.m_mapSettingsLastWriteInfo.get(_);
            if (new Date().getTime() - _.nLastUserUpdateTime < _)
              return (
                window.clearTimeout(_.nPendingServerValueUpdateTimeout),
                void (_.nPendingServerValueUpdateTimeout = window.setTimeout(
                  () => {
                    this.SetSettingValueFromServer(_, _);
                  },
                  _,
                ))
              );
            window.clearTimeout(_.nPendingServerValueUpdateTimeout),
              this.m_mapSettingsLastWriteInfo.delete(_);
          }
          this.settings.set(_, _);
        }
        UpdateLastUserWriteTimeForSetting(_) {
          const _ = new Date().getTime();
          this.m_mapSettingsLastWriteInfo.has(_)
            ? (this.m_mapSettingsLastWriteInfo.get(_).nLastUserUpdateTime = _)
            : this.m_mapSettingsLastWriteInfo.set(_, {
                nLastUserUpdateTime: _,
                nPendingServerValueUpdateTimeout: 0,
              });
        }
        OnVRSettingsSchema(_) {
          null == this.settingsSchema &&
            (console.log("Got vr settings schema"),
            (this.settingsSchema = _.schema),
            (this.showInternalSettings = _.is_steamvr_main));
        }
        AwaitInitialSettingsSchema() {
          return (0, _._)(this, void 0, void 0, function* () {
            return (0, _.when)(() => !!this.settingsSchema);
          });
        }
        OnVRAudioDevices(_) {
          console.log("Got audio devices"), (this.audioDevices = _);
        }
        OnVRAppList(_) {
          (this.apps = _.apps),
            _.apps.map((_) => this.probablyOwnedAppkeys.add(_.key));
        }
        SettingNameMatches(_, _) {
          if (_ && _.endsWith("*")) {
            let _ = _.length - 1;
            return _.substr(0, _) == _.substr(0, _);
          }
          return _ == _;
        }
        GetSettingSchema(_) {
          for (let _ of this.settingsSchema)
            if (_.values)
              for (let _ of _.values)
                if (_ && this.SettingNameMatches(_, _.name)) return _;
          return null;
        }
        ResetSettingsValue(_) {
          this.SetSettingsValue(_, null);
        }
        ResetSettingsValues(..._) {
          _.forEach(this.ResetSettingsValue);
        }
        SetSettingsValue(_, _) {
          let _ = this.GetSettingSchema(_);
          null != _
            ? (null != _ &&
                ("int" == _.type
                  ? (_ = parseInt(_))
                  : "float" == _.type
                    ? (_ = parseFloat(_))
                    : "string" == _.type
                      ? (_ = "" + _)
                      : "bool" == _.type && (_ = !!_)),
              _.requires_restart && this.SetRestartRequired(),
              this.SetSettingsStringValueWithoutSchema(_, _))
            : console.log(
                "Tried to set setting " +
                  _ +
                  " but it's not in the schema! Aborting",
              );
        }
        SetSettingsStringValueWithoutSchema(_, _) {
          if (VRHTML) {
            const _ = _.split("/");
            if (4 != _.length || "" != _[0] || "settings" != _[1])
              throw new Error("bad settings path " + _);
            VRHTML.VRSettings.Set(_[2], _[3], _),
              this.settings.set(_, VRHTML.VRSettings.Get(_[2], _[3]));
          } else
            null != _ && this.settings.set(_, _), this.pendingChanges.set(_, _);
          this.UpdateLastUserWriteTimeForSetting(_);
        }
        GetSettingsValue(_) {
          return (0, _._)(this, void 0, void 0, function* () {
            return new Promise(function (_, _) {
              _()
                .get("/settings_get", {
                  params: {
                    name: _,
                  },
                })
                .then((_) => {
                  _(_.data);
                })
                .catch((_) => {
                  __webpack_require__(null);
                });
            });
          });
        }
        ResetAppSettings(_) {
          return _()
            .post("/app/resetsettings", {
              app: _,
            })
            .then((_) => this.GetAppSettings(_))
            .catch((_) => {});
        }
        ResetAllAppResolutionScales() {
          return _()
            .post("/app/resetallresolutionscales")
            .then((_) => !0)
            .catch((_) => {});
        }
        SetAppSettings(_, _) {
          let _ = Object.assign(Object.assign({}, _), {
            app: _,
          });
          _().post("/app/setsettings", _);
          for (let _ = 0; _ < this.apps.length; _++)
            if (this.apps[_].key == _.app) {
              !this.apps[_].is_autolaunch &&
                _.is_autolaunch &&
                this.SetRestartRequired(),
                (this.apps[_] = Object.assign(
                  Object.assign({}, this.apps[_]),
                  _,
                ));
              break;
            }
        }
        GetAppSettings(_) {
          return (0, _._)(this, void 0, void 0, function* () {
            return new Promise(function (_, _) {
              _()
                .get("/app/getsettings", {
                  params: {
                    app: _,
                  },
                })
                .then((_) => {
                  _(_.data);
                })
                .catch((_) => {
                  __webpack_require__(null);
                });
            });
          });
        }
        GetAppInfo(_) {
          return (0, _._)(this, void 0, void 0, function* () {
            return new Promise(function (_, _) {
              _()
                .get("/app/getinfo", {
                  params: {
                    app: _,
                  },
                })
                .then((_) => {
                  _(_.data);
                })
                .catch((_) => {
                  __webpack_require__(null);
                });
            });
          });
        }
        GetAppName(_) {
          var _;
          return null === (_ = this.apps.find((_) => _.key == _)) ||
            void 0 === _
            ? void 0
            : _.name;
        }
        get NumSupersamplingSteps() {
          return Math.floor(4.81 / 0.02);
        }
        SliderposToSupersample(_) {
          return _ > 5 ? 5 : _ < 0.2 ? 0.2 : _;
        }
        get showAdvancedSettings() {
          return this.settings.get(_._);
        }
        set showAdvancedSettings(_) {
          this.SetSettingsValue(_._, _);
        }
        showBindingCallouts(_) {
          let _ = {
            type: "request_binding_callouts",
            app_key: _,
          };
          this.m_mailbox.SendMessage(_._, _);
        }
      }
      (_.SERVER_SETTING_MERGE_DEFER_DURATION = 1),
        (0, _._)([_.observable], _.prototype, "connected", void 0),
        (0, _._)([_.observable], _.prototype, "settingsSchema", void 0),
        (0, _._)([_.observable], _.prototype, "settings", void 0),
        (0, _._)([_.observable], _.prototype, "systemInfo", void 0),
        (0, _._)([_.observable], _.prototype, "audioDevices", void 0),
        (0, _._)([_.observable], _.prototype, "apps", void 0),
        (0, _._)([_.observable], _.prototype, "probablyOwnedAppkeys", void 0),
        (0, _._)([_.observable], _.prototype, "showInternalSettings", void 0),
        (0, _._)(
          [_.observable],
          _.prototype,
          "workshopStateChangedCanary",
          void 0,
        ),
        (0, _._)([_.observable], _.prototype, "pendingChanges", void 0),
        (0, _._)([_.observable], _.prototype, "route", void 0),
        (0, _._)([_._], _.prototype, "OpenWebSocketToHost", null),
        (0, _._)([_._], _.prototype, "OnWorkshopStateChangedMessage", null),
        (0, _._)([_._], _.prototype, "OnChangeRouteMessage", null),
        (0, _._)([_._], _.prototype, "OnAppConfigChangedMessage", null),
        (0, _._)([_._], _.prototype, "OnRefreshRateChangeMessage", null),
        (0, _._)([_.action.bound], _.prototype, "onHashChanged", null),
        (0, _._)([_.computed], _.prototype, "routePage", null),
        (0, _._)([_.computed], _.prototype, "routePageSection", null),
        (0, _._)([_.computed], _.prototype, "routePageSectionParams", null),
        (0, _._)([_.action], _.prototype, "setRoutePage", null),
        (0, _._)([_.action], _.prototype, "setRoutePageSection", null),
        (0, _._)([_.action], _.prototype, "setRoutePageSectionParams", null),
        (0, _._)([_.action], _.prototype, "setRoute", null),
        (0, _._)([_._], _.prototype, "SetDashboardFadeSupression", null),
        (0, _._)([_._], _.prototype, "SetDashboardForceBoundsVisible", null),
        (0, _._)([_._], _.prototype, "SetRestartRequired", null),
        (0, _._)([_._], _.prototype, "OnWebSocketOpen", null),
        (0, _._)([_._], _.prototype, "OnWebSocketClose", null),
        (0, _._)([_._], _.prototype, "WebSocketSend", null),
        (0, _._)([_._], _.prototype, "OnWebSocketMessage", null),
        (0, _._)([_.action], _.prototype, "OnVRSettings", null),
        (0, _._)([_.action], _.prototype, "SetSettingValueFromServer", null),
        (0, _._)([_.action], _.prototype, "OnVRSettingsSchema", null),
        (0, _._)([_.action.bound], _.prototype, "ResetSettingsValue", null),
        (0, _._)([_.action], _.prototype, "ResetSettingsValues", null),
        (0, _._)([_.action], _.prototype, "SetSettingsValue", null),
        (0, _._)(
          [_.action],
          _.prototype,
          "SetSettingsStringValueWithoutSchema",
          null,
        ),
        (0, _._)([_.computed], _.prototype, "NumSupersamplingSteps", null);
      const _ = new _();
      window.VRSettingsState = _;
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid");
      const _ = _.createContext({
        frame: void 0,
        page: void 0,
      });
      function _() {
        return _.useContext(_);
      }
    },
  },
]);
