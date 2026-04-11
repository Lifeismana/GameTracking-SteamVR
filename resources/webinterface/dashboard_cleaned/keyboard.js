var CLSTAMP = "steamdb";
(() => {
  "use strict";
  var _,
    _ = {
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(_, {
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
            __webpack_require__("chunkid")),
          _ = __webpack_require__("chunkid");
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(_, {
          _: () => _,
        });
        var _,
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        !(function (_) {
          (_[(_.Parent = 0)] = "Parent"), (_[(_.World = 1)] = "World");
        })(_ || (_ = {}));
        class _ extends _._ {
          constructor(_) {
            super(_);
          }
          internalRender() {
            var _;
            const _ = null === (_ = this.props.enabled) || void 0 === _ || _,
              _ = this.props.rotation_start_angle_threshold
                ? (this.props.rotation_start_angle_threshold * Math._) / 180
                : null,
              _ = this.props.rotation_stop_angle_threshold
                ? (this.props.rotation_stop_angle_threshold * Math._) / 180
                : null,
              _ = this.props.rotation_ease_out_angle_threshold
                ? (this.props.rotation_ease_out_angle_threshold * Math._) / 180
                : null,
              _ = this.props.rotation_min_angular_velocity
                ? (this.props.rotation_min_angular_velocity * Math._) / 180
                : null,
              _ = this.props.rotation_max_angular_velocity
                ? (this.props.rotation_max_angular_velocity * Math._) / 180
                : null;
            return _.createElement(
              "vsg-elastic-head-transform",
              {
                "rotation-start-angle-threshold": _,
                "rotation-stop-angle-threshold": _,
                "rotation-ease-in-time": this.props.rotation_ease_in_time,
                "rotation-ease-in-power": this.props.rotation_ease_in_power,
                "rotation-ease-out-angle-threshold": _,
                "rotation-ease-out-power": this.props.rotation_ease_out_power,
                "rotation-min-angular-velocity": _,
                "rotation-max-angular-velocity": _,
                "translation-start-distance-threshold":
                  this.props.translation_start_distance_threshold,
                "translation-stop-distance-threshold":
                  this.props.translation_stop_distance_threshold,
                "translation-ease-in-time": this.props.translation_ease_in_time,
                "translation-ease-in-power":
                  this.props.translation_ease_in_power,
                "translation-ease-out-distance-threshold":
                  this.props.translation_ease_out_distance_threshold,
                "translation-ease-out-power":
                  this.props.translation_ease_out_power,
                "translation-velocity": this.props.translation_velocity,
                enabled: _,
                "lock-to-horizon": this.props.lock_to_horizon,
                "translation-parent": this.props.translation_parent,
                "rotation-translation-change-together":
                  this.props.rotation_translation_change_together,
              },
              this.props.children,
            );
          }
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(_, {
          _: () => _,
          _: () => _,
        });
        var _,
          _,
          _,
          _,
          _,
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
        function _(_) {
          if (_) return [_._, _._];
        }
        function _(_) {
          switch (_) {
            case _.TopLeft:
              return {
                _: -1,
                _: 1,
              };
            case _.TopCenter:
              return {
                _: 0,
                _: 1,
              };
            case _.TopRight:
              return {
                _: 1,
                _: 1,
              };
            case _.CenterLeft:
              return {
                _: -1,
                _: 0,
              };
            case _.Center:
              return {
                _: 0,
                _: 0,
              };
            case _.CenterRight:
              return {
                _: 1,
                _: 0,
              };
            case _.BottomLeft:
              return {
                _: -1,
                _: -1,
              };
            case _.BottomCenter:
              return {
                _: 0,
                _: -1,
              };
            case _.BottomRight:
              return {
                _: 1,
                _: -1,
              };
          }
        }
        !(function (_) {
          (_[(_.TopLeft = 0)] = "TopLeft"),
            (_[(_.TopCenter = 1)] = "TopCenter"),
            (_[(_.TopRight = 2)] = "TopRight"),
            (_[(_.CenterLeft = 3)] = "CenterLeft"),
            (_[(_.Center = 4)] = "Center"),
            (_[(_.CenterRight = 5)] = "CenterRight"),
            (_[(_.BottomLeft = 6)] = "BottomLeft"),
            (_[(_.BottomCenter = 7)] = "BottomCenter"),
            (_[(_.BottomRight = 8)] = "BottomRight");
        })(_ || (_ = {})),
          (function (_) {
            (_[(_.Auto = 0)] = "Auto"), (_[(_.SingleTap = 1)] = "SingleTap");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Mono = 0)] = "Mono"),
              (_[(_.Parallel = 1)] = "Parallel"),
              (_[(_.Crossed = 2)] = "Crossed"),
              (_[(_.Panorama = 3)] = "Panorama"),
              (_[(_.StackedPanorama = 4)] = "StackedPanorama");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Visible = 0)] = "Visible"),
              (_[(_.SkipInSceneGraph = 1)] = "SkipInSceneGraph"),
              (_[(_.Hidden = 2)] = "Hidden"),
              (_[(_.InvisibleButIntersectable = 3)] =
                "InvisibleButIntersectable");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Default = 0)] = "Default"),
              (_[(_.Disabled = 1)] = "Disabled"),
              (_[(_.Low = 2)] = "Low");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.PixelOffset = 0)] = "PixelOffset"),
              (_[(_.ScaleAndCenter = 1)] = "ScaleAndCenter");
          })(_ || (_ = {}));
        class _ extends _._ {
          constructor(_) {
            super(_),
              (this.m_Rect = {
                _: 0,
                _: 0,
                width: 0,
                height: 0,
              }),
              (this.m_nEmbeddedIndex = null),
              (this.m_LastDOMContentSize = void 0),
              (this.m_DOMContentSizeChangedCallbacks = new _._()),
              (this.m_resizeObserver = null),
              (this.m_UVsMin = void 0),
              (this.m_UVsMax = void 0),
              (this.m_bOverdragBlocking = !1),
              (this.m_overdragBlockingElements = []);
            const _ =
                void 0 !== this.props.width || void 0 !== this.props.height,
              _ = void 0 !== this.props.meters_per_pixel,
              _ = void 0 !== this.props.target_dpi_panel_id,
              _ =
                void 0 !== this.props.rendermodel_component_device_index ||
                void 0 !== this.props.rendermodel_component_name,
              _ =
                void 0 !== this.props.subview_parent_panel_id ||
                void 0 !== this.props.subview_parent_panel_key;
            if (
              _ &&
              (void 0 === this.props.rendermodel_component_device_index ||
                void 0 === this.props.rendermodel_component_name)
            )
              throw new Error(
                "Panel requires both rendermodel_component_device_index and rendermodel_component_name to be a rendermodel texture.",
              );
            const _ = [_, _, _, _, _].filter((_) => _).length,
              _ =
                "an (explicit width and/or height), an explicit meters_per_pixel, a target_panel_dpi panel ID, a rendermodel name, or a parent overlay of which to become a subview.";
            if (0 == _)
              throw new Error(
                `Panel requires one of the following props: ${_}.`,
              );
            if (_ > 1)
              throw new Error(
                `Panel cannot have more of the following of the following props: ${_}.`,
              );
            super.setBuildNodeOverride(this.buildNode);
          }
          get lastDOMContentSize() {
            return this.m_LastDOMContentSize;
          }
          RegisterForDOMContentSizeChangedCallback(_) {
            return this.m_DOMContentSizeChangedCallbacks.Register(_);
          }
          isExternal() {
            return !!this.props.overlay_key;
          }
          getExternalOverlayKey() {
            return this.props.overlay_key;
          }
          getEmbeddedIndex() {
            return this.m_nEmbeddedIndex;
          }
          componentWillReceiveProps_UNSAFE() {
            _.s_bPanelsAreDirty = !0;
          }
          componentDidMount() {
            super.componentDidMount(),
              (this.m_resizeObserver = new ResizeObserver(
                this.onResizeObserved,
              )),
              this.m_resizeObserver.observe(this.getCurrentRootElement()),
              (this.m_nEmbeddedIndex = _._.Current().addEmbeddedPanelUVs(this)),
              (_.s_bPanelsAreDirty = !0),
              this.getCurrentRootElement().addEventListener(
                "mousedown",
                this.onPanelMouseDown,
              ),
              this.forceUpdate();
          }
          onResizeObserved(_, _) {
            _._.Current().forceLayoutUpdate(),
              (this.m_LastDOMContentSize = {
                clientWidth: _[0].contentRect.width,
                clientHeight: _[0].contentRect.height,
              }),
              this.m_DOMContentSizeChangedCallbacks.Dispatch(
                this.m_LastDOMContentSize,
              );
          }
          componentWillUnmount() {
            this.m_resizeObserver &&
              (this.m_resizeObserver.disconnect(),
              (this.m_resizeObserver = null)),
              this.stopOverDragBlocking(),
              this.getCurrentRootElement().removeEventListener(
                "mousedown",
                this.onPanelMouseDown,
              ),
              (_.s_bPanelsAreDirty = !0),
              _._.Current().removeEmbeddedPanelUVs(this),
              this.m_DOMContentSizeChangedCallbacks.ClearAllCallbacks(),
              super.componentWillUnmount();
          }
          onPanelMouseDown() {
            this.startOverDragBlocking();
          }
          startOverDragBlocking() {
            if (this.m_bOverdragBlocking) return;
            const _ = document.body.getBoundingClientRect(),
              _ = this.getCurrentRootElement().getBoundingClientRect();
            this.createOverdragBlockingElement(0, 0, _.width, _._),
              this.createOverdragBlockingElement(
                0,
                _._ + _.height,
                _.width,
                _.height - _.height - _._,
              ),
              this.createOverdragBlockingElement(0, _._, _._, _.height),
              this.createOverdragBlockingElement(
                _._ + _.width,
                _._,
                _.width - _.width - _._,
                _.height,
              ),
              window.document.addEventListener("mouseup", this.onWindowMouseUp),
              (this.m_bOverdragBlocking = !0);
          }
          stopOverDragBlocking() {
            this.m_bOverdragBlocking &&
              (this.m_overdragBlockingElements.forEach((_) => {
                document.body.removeChild(_);
              }),
              (this.m_overdragBlockingElements = []),
              window.document.removeEventListener(
                "mouseup",
                this.onWindowMouseUp,
              ),
              (this.m_bOverdragBlocking = !1));
          }
          createOverdragBlockingElement(_, _, _, _) {
            let _ = document.createElement("div");
            (_.style.position = "absolute"),
              (_.style.top = _ + "px"),
              (_.style.left = _ + "px"),
              (_.style.width = _ + "px"),
              (_.style.height = _ + "px"),
              (_.style.zIndex = "90019001"),
              this.m_overdragBlockingElements.push(_),
              document.body.appendChild(_);
          }
          onWindowMouseUp(_) {
            this.stopOverDragBlocking();
          }
          getNodeType() {
            return "panel";
          }
          get visibility() {
            var _;
            return null !== (_ = this.props.visibility) && void 0 !== _
              ? _
              : _.Visible;
          }
          buildNode(_, _) {
            var _, _, _, _, _, _, _, _, _, _;
            if (
              !(
                this.visibility == _.Visible ||
                this.visibility == _.InvisibleButIntersectable
              )
            )
              return [_, null];
            let _ = Object.assign(Object.assign({}, _), {
                bInsideReparentedPanel: !1,
                currentPanel: this,
              }),
              _ = this.createSgNode(_),
              _ = {
                _: 0,
                _: 0,
              };
            _ =
              "object" == typeof this.props.origin
                ? (0, _._)(this.props.origin, {
                    _: 0,
                    _: 0,
                  })
                : _(this.props.origin);
            const _ = this.props.overlay_key,
              _ = (0, _._)();
            _ && _.length > 0
              ? (_.properties.key = _)
              : _
                ? (_.properties.key = _)
                : (_.properties.overlay_handle = (0, _._)()),
              (_.properties.uv_min =
                null !== (_ = _(this.m_UVsMin)) && void 0 !== _ ? _ : void 0),
              (_.properties.uv_max =
                null !== (_ = _(this.m_UVsMax)) && void 0 !== _ ? _ : void 0);
            const _ = 1 / _._.Current().m_fCurrentScale;
            let _ = this.props.frame_resize_scale_factor;
            return (
              this.props.is_frame_page_main_panel && (_ = null != _ ? _ : 1),
              (_.properties.width =
                null !== (_ = this.props.width) && void 0 !== _ ? _ : void 0),
              (_.properties.height =
                null !== (_ = this.props.height) && void 0 !== _ ? _ : void 0),
              (_.properties["scale-index"] =
                null !== (_ = this.props.scale_index) && void 0 !== _ ? _ : 0),
              (_.properties["min-width"] =
                null !== (_ = this.props.min_width) && void 0 !== _
                  ? _
                  : void 0),
              (_.properties["target-width-anchor-id"] = (0, _._)(
                this.props.target_width_anchor_id,
              )),
              (_.properties["target-dpi-panel-id"] = (0, _._)(
                this.props.target_dpi_panel_id,
              )),
              (_.properties["target-dpi-multiplier"] =
                this.props.target_dpi_multiplier),
              (_.properties["meters-per-pixel"] =
                null != this.props.meters_per_pixel
                  ? this.props.meters_per_pixel * _
                  : void 0),
              (_.properties["subview-parent-panel-key"] =
                this.props.subview_parent_panel_key),
              (_.properties["subview-parent-panel-id"] =
                this.props.subview_parent_panel_id),
              (_.properties["subview-sizing"] = this.props.subview_sizing),
              (_.properties.curvature = this.props.curvature),
              (_.properties["curvature-origin-id"] = (0, _._)(
                this.props.curvature_origin_id,
              )),
              (_.properties.spherical = this.props.spherical),
              (_.properties.interactive = this.props.interactive),
              (_.properties.scrollable = this.props.scrollable),
              (_.properties.undocked = this.props.undocked),
              (_.properties.modal = this.props.modal),
              (_.properties["only-visible-with-laser"] =
                this.props.only_visible_with_laser),
              (_.properties["allow-input-capture"] =
                this.props.allow_input_capture),
              (_.properties["lasermouse-filtering"] =
                null === (_ = this.props) || void 0 === _
                  ? void 0
                  : _.lasermouse_filtering),
              (_.properties["hide-laser-when-clicking"] =
                this.props.hide_lasermouse_when_clicking),
              (_.properties["hide-laser-intersection"] =
                null === (_ = this.props) || void 0 === _
                  ? void 0
                  : _.hide_laser_intersection),
              (_.properties["make-overlays-interactive-if-visible"] =
                this.props.make_overlays_interactive_if_visible),
              (_.properties["is-grab-handle"] = this.props.is_grab_handle),
              (_.properties["embedded-uv-index"] = this.m_nEmbeddedIndex),
              (_.properties.origin = (0, _._)(_)),
              (_.properties.debug_name = this.props.debug_name),
              (_.properties.sampler = this.props.sampler),
              (_.properties.reflect = this.props.reflect),
              (_.properties.stereoscopy = this.props.stereoscopy),
              (_.properties.rendermodel_component_device_index =
                this.props.rendermodel_component_device_index),
              (_.properties.rendermodel_component_name =
                this.props.rendermodel_component_name),
              (_.properties["texture-id"] = (0, _._)(this.props.texture_id)),
              (_.properties["sort-order"] = this.props.sort_order),
              (_.properties["sort-depth-bias"] = this.props.sort_depth_bias),
              (_.properties.visibility = this.visibility),
              (_.properties["frame-resize-scale-factor"] = _),
              (_.properties["main-panel-for-frame-page"] =
                this.props.is_frame_page_main_panel),
              (_.properties["steam-input-appid"] =
                null === (_ = this.props.inputFocusParams) || void 0 === _
                  ? void 0
                  : _.unSteamInputAppID),
              (_.properties["vr-input-pid"] =
                null === (_ = this.props.inputFocusParams) || void 0 === _
                  ? void 0
                  : _.unVRInputPID),
              [_, _]
            );
          }
          scaleLocalUVToGlobal(_) {
            const _ = this.m_UVsMax._ - this.m_UVsMin._,
              _ = this.m_UVsMax._ - this.m_UVsMin._;
            return {
              _: this.m_UVsMin._ + _ * _._,
              _: this.m_UVsMin._ + _ * _._,
            };
          }
          updateLayoutValues() {
            if (this.props.overlay_key)
              return (
                (this.m_UVsMin = this.props.uv_min),
                void (this.m_UVsMax = this.props.uv_max)
              );
            this.m_Rect = this.getCurrentRootElement().getBoundingClientRect();
            let _ = this.getCurrentRootElement().ownerDocument.defaultView;
            (this.m_UVsMin = {
              _: this.m_Rect._ / _.innerWidth,
              _: this.m_Rect._ / _.innerHeight,
            }),
              (this.m_UVsMax = {
                _: (this.m_Rect._ + this.m_Rect.width) / _.innerWidth,
                _: (this.m_Rect._ + this.m_Rect.height) / _.innerHeight,
              });
          }
          PanelContextValue() {
            return this;
          }
          internalRender() {
            return _.createElement(
              "vsg-node",
              {
                style: {
                  display: this.visibility == _.Hidden ? "none" : null,
                },
              },
              _.createElement(_._, null, this.props.children),
              this.props.is_frame_page_main_panel &&
                _.createElement(_, {
                  panel: this,
                  panelID: this.getID(),
                }),
            );
          }
        }
        function _(_) {
          const { panel: _, panelID: _ } = _,
            { page: _ } = (0, _._)();
          return (
            _.useEffect(() => {
              const { Unset: _ } = null == _ ? void 0 : _.SetMainPanel(_);
              return _;
            }, [_, _, _]),
            null
          );
        }
        (_.s_bPanelsAreDirty = !1),
          (0, _._)([_._], _.prototype, "onResizeObserved", null),
          (0, _._)([_._], _.prototype, "onPanelMouseDown", null),
          (0, _._)([_._], _.prototype, "onWindowMouseUp", null),
          (0, _._)([_._], _.prototype, "buildNode", null);
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
        __webpack_require__._(_, {
          _: () => _,
        });
        var _,
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        !(function (_) {
          (_[(_.Seated = 0)] = "Seated"),
            (_[(_.Standing = 1)] = "Standing"),
            (_[(_.Raw = 2)] = "Raw");
        })(_ || (_ = {}));
        class _ extends _._ {
          constructor(_) {
            super(_);
            if (
              (void 0 === _.parent_path ? 0 : 1) +
                (void 0 === _.parent_origin ? 0 : 1) +
                (void 0 === _.parent_id ? 0 : 1) >
              1
            )
              throw new Error(
                "Transform cannot have more than one parent_ property set.",
              );
          }
          internalRender() {
            var _;
            let _, _, _;
            this.props.transform
              ? ((_ = (0, _._)(this.props.transform.translation)),
                (_ = this.props.transform.rotation),
                (_ = this.props.transform.scale))
              : ((_ = (0, _._)(this.props.translation)
                  ? null === (_ = (0, _._)(this.props.translation)) ||
                    void 0 === _
                    ? void 0
                    : _.join(" ")
                  : (0, _._)(
                      (0, _._)(this.props.translation, {
                        _: 0,
                        _: 0,
                        _: 0,
                      }),
                    )),
                (_ =
                  this.props.rotation && "w" in this.props.rotation
                    ? this.props.rotation
                    : (0, _._)(
                        (0, _._)(
                          (0, _._)(this.props.rotation, {
                            _: 0,
                            _: 0,
                            _: 0,
                          }),
                          Math._ / 180,
                        ),
                      )),
                (_ =
                  "number" == typeof this.props.scale
                    ? {
                        _: this.props.scale,
                        _: this.props.scale,
                        _: this.props.scale,
                      }
                    : (0, _._)(this.props.scale, {
                        _: 1,
                        _: 1,
                        _: 1,
                      })));
            let _ = (0, _._)(_),
              _ = (0, _._)(_);
            return _.createElement(
              "vsg-transform",
              {
                translation: _,
                rotation: _,
                scale: _,
                "curvature-pitch": this.props.curvature_pitch,
                "invert-parent-panel-pitch":
                  this.props.invert_parent_panel_pitch,
                "ignore-parent-scale": this.props.ignore_parent_scale,
                "transform-path": this.props.transform_path,
                "parent-path": this.props.parent_path,
                "parent-origin": _[this.props.parent_origin],
                "parent-id": this.props.parent_id,
                "frame-resize-scale-factor":
                  this.props.frame_resize_scale_factor,
              },
              this.props.children,
            );
          }
        }
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
        __webpack_require__._(_, {
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = "systemui_dashboard_private",
          _ = "binding_callouts/main";
        class _ {
          constructor() {
            (this.m_wsWebSocketToServer = void 0),
              (this.connected = !1),
              (this.m_oHandlers = {}),
              (this.m_oWaits = {}),
              (this.m_oConnectWaits = []),
              (this.m_fnConnectResolve = void 0),
              (this.m_nNextMessageNumber = 1),
              (this.Log = new _._("Mailbox", () => this.m_sMailboxName)),
              (0, _.makeObservable)(this);
          }
          OpenWebSocketToHost() {
            return new Promise((_, _) => {
              this.Log.Info("Connecting vrmailbox...");
              let _ = "ws://127.0.0.1:27062";
              this.m_sWebSecret && (_ += "?secret=" + this.m_sWebSecret),
                (this.m_fnConnectResolve = _),
                (this.m_wsWebSocketToServer = new WebSocket(_)),
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
                ),
                this.m_wsWebSocketToServer.addEventListener(
                  "error",
                  this.OnWebSocketError,
                );
            });
          }
          static EnsureUniqueName(_) {
            if (_.includes("/")) return _;
            let _;
            return (
              (_ = VRHTML ? VRHTML.GetWebHelperId() : Date.now().toString()),
              _ + "/" + _ + "_" + this.s_nNextMailboxNumber++
            );
          }
          Init(_, _) {
            return (0, _._)(this, void 0, void 0, function* () {
              return (
                (this.m_sMailboxName = _.EnsureUniqueName(_)),
                (this.m_sWebSecret = _),
                (this.connected = !1),
                this.OpenWebSocketToHost()
              );
            });
          }
          get name() {
            return this.m_sMailboxName;
          }
          OnWebSocketOpen(_) {
            (this.connected = !0),
              this.WebSocketSend("mailbox_open " + this.m_sMailboxName),
              window.addEventListener("beforeunload", () => {
                this.WebSocketSend("websocket_close");
              }),
              this.m_fnConnectResolve &&
                (this.m_fnConnectResolve(), (this.m_fnConnectResolve = void 0));
            for (let _ of this.m_oConnectWaits) _();
            this.m_oConnectWaits = [];
          }
          OnWebSocketClose(_) {
            return (0, _._)(this, void 0, void 0, function* () {
              this.Log.Warning("Lost connection to host..."),
                (this.connected = !1),
                yield (0, _._)(1e3),
                this.OpenWebSocketToHost();
            });
          }
          OnWebSocketError(_) {
            return (0, _._)(this, void 0, void 0, function* () {
              this.Log.Error("Mailbox error:", _),
                (this.connected = !1),
                yield (0, _._)(1e3),
                this.OpenWebSocketToHost();
            });
          }
          WebSocketSend(_) {
            return (
              null != this.m_wsWebSocketToServer &&
              1 == this.m_wsWebSocketToServer.readyState &&
              (this.m_wsWebSocketToServer.send(_), !0)
            );
          }
          OnWebSocketMessage(_) {
            let _ = JSON.parse(_.data),
              _ = !1;
            if (
              (this.m_oHandlers.hasOwnProperty(_.type) &&
                (this.m_oHandlers[_.type](_), (_ = !0)),
              this.m_oWaits.hasOwnProperty(_.type))
            ) {
              let _ = !1;
              for (let _ of this.m_oWaits[_.type])
                _.nMessageId == _.message_id &&
                  (__webpack_require__.callback(_), (_ = !0));
              _
                ? (this.m_oWaits[_.type] = this.m_oWaits[_.type].filter(
                    (_) => _.nMessageId == _.message_id,
                  ))
                : this.Log.Error(
                    `Received a ${_.type} message, but didn't have a matching message_id. Did the other end forget to mirror message_id?`,
                  ),
                (_ = !0);
            }
            _ || this.Log.Error("Received unhandled message: ", _.type, _);
          }
          RegisterHandler(_, _) {
            this.m_oHandlers[_] = _;
          }
          SendMessage(_, _) {
            return this.WebSocketSend(
              "mailbox_send " + _ + " " + JSON.stringify(_),
            );
          }
          WaitForMessage(_, _) {
            return new Promise((_, _) => {
              this.m_oWaits[_] || (this.m_oWaits[_] = []),
                this.m_oWaits[_].push({
                  callback: _,
                  nMessageId: _,
                });
            });
          }
          WaitForConnect() {
            return new Promise((_, _) => {
              this.connected ? _() : this.m_oConnectWaits.push(_);
            });
          }
          WaitForMailbox(_) {
            return (0, _._)(this, void 0, void 0, function* () {
              let _ = {
                type: "request_mailbox_registration_notification",
                mailbox_name: _,
              };
              return this.SendMessageAndWaitForResponse(
                "web_server_mailbox",
                _,
                "mailbox_registered",
              );
            });
          }
          SendMessageAndWaitForResponse(_, _, _) {
            let _ = Object.assign({}, _);
            return (
              null == _.returnAddress &&
                (_.returnAddress = this.m_sMailboxName),
              (_.message_id = this.m_nNextMessageNumber++),
              this.SendMessage(_, _),
              this.WaitForMessage(_, _.message_id)
            );
          }
          SendResponse(_, _) {
            if (!_.returnAddress)
              throw new Error("Missing return address on message");
            let _ = Object.assign(Object.assign({}, _), {
              message_id: _.message_id,
            });
            (_.message_id = _.message_id), this.SendMessage(_.returnAddress, _);
          }
        }
        (_.s_nNextMailboxNumber = 1),
          (0, _._)([_.observable], _.prototype, "connected", void 0),
          (0, _._)([_._], _.prototype, "OpenWebSocketToHost", null),
          (0, _._)([_._], _.prototype, "OnWebSocketOpen", null),
          (0, _._)([_._], _.prototype, "OnWebSocketClose", null),
          (0, _._)([_._], _.prototype, "OnWebSocketError", null),
          (0, _._)([_._], _.prototype, "WebSocketSend", null),
          (0, _._)([_._], _.prototype, "OnWebSocketMessage", null);
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
        var _, _, _, _, _, _, _, _, _, _, _, _, _, _;
        __webpack_require__._(_, {
          _: () => _,
          _: () => _,
          _: () => _,
        }),
          (function (_) {
            (_[(_.Invalid = 0)] = "Invalid"),
              (_[(_.TrackingSystemName_String = 1e3)] =
                "TrackingSystemName_String"),
              (_[(_.ModelNumber_String = 1001)] = "ModelNumber_String"),
              (_[(_.SerialNumber_String = 1002)] = "SerialNumber_String"),
              (_[(_.RenderModelName_String = 1003)] = "RenderModelName_String"),
              (_[(_.WillDriftInYaw_Bool = 1004)] = "WillDriftInYaw_Bool"),
              (_[(_.ManufacturerName_String = 1005)] =
                "ManufacturerName_String"),
              (_[(_.TrackingFirmwareVersion_String = 1006)] =
                "TrackingFirmwareVersion_String"),
              (_[(_.HardwareRevision_String = 1007)] =
                "HardwareRevision_String"),
              (_[(_.AllWirelessDongleDescriptions_String = 1008)] =
                "AllWirelessDongleDescriptions_String"),
              (_[(_.ConnectedWirelessDongle_String = 1009)] =
                "ConnectedWirelessDongle_String"),
              (_[(_.DeviceIsWireless_Bool = 1010)] = "DeviceIsWireless_Bool"),
              (_[(_.DeviceIsCharging_Bool = 1011)] = "DeviceIsCharging_Bool"),
              (_[(_.DeviceBatteryPercentage_Float = 1012)] =
                "DeviceBatteryPercentage_Float"),
              (_[(_.StatusDisplayTransform_Matrix34 = 1013)] =
                "StatusDisplayTransform_Matrix34"),
              (_[(_.Firmware_UpdateAvailable_Bool = 1014)] =
                "Firmware_UpdateAvailable_Bool"),
              (_[(_.Firmware_ManualUpdate_Bool = 1015)] =
                "Firmware_ManualUpdate_Bool"),
              (_[(_.Firmware_ManualUpdateURL_String = 1016)] =
                "Firmware_ManualUpdateURL_String"),
              (_[(_.HardwareRevision_Uint64 = 1017)] =
                "HardwareRevision_Uint64"),
              (_[(_.FirmwareVersion_Uint64 = 1018)] = "FirmwareVersion_Uint64"),
              (_[(_.FPGAVersion_Uint64 = 1019)] = "FPGAVersion_Uint64"),
              (_[(_.VRCVersion_Uint64 = 1020)] = "VRCVersion_Uint64"),
              (_[(_.RadioVersion_Uint64 = 1021)] = "RadioVersion_Uint64"),
              (_[(_.DongleVersion_Uint64 = 1022)] = "DongleVersion_Uint64"),
              (_[(_.BlockServerShutdown_Bool = 1023)] =
                "BlockServerShutdown_Bool"),
              (_[(_.CanUnifyCoordinateSystemWithHmd_Bool = 1024)] =
                "CanUnifyCoordinateSystemWithHmd_Bool"),
              (_[(_.ContainsProximitySensor_Bool = 1025)] =
                "ContainsProximitySensor_Bool"),
              (_[(_.DeviceProvidesBatteryStatus_Bool = 1026)] =
                "DeviceProvidesBatteryStatus_Bool"),
              (_[(_.DeviceCanPowerOff_Bool = 1027)] = "DeviceCanPowerOff_Bool"),
              (_[(_.Firmware_ProgrammingTarget_String = 1028)] =
                "Firmware_ProgrammingTarget_String"),
              (_[(_.DeviceClass_Int32 = 1029)] = "DeviceClass_Int32"),
              (_[(_.HasCamera_Bool = 1030)] = "HasCamera_Bool"),
              (_[(_.DriverVersion_String = 1031)] = "DriverVersion_String"),
              (_[(_.Firmware_ForceUpdateRequired_Bool = 1032)] =
                "Firmware_ForceUpdateRequired_Bool"),
              (_[(_.ViveSystemButtonFixRequired_Bool = 1033)] =
                "ViveSystemButtonFixRequired_Bool"),
              (_[(_.ParentDriver_Uint64 = 1034)] = "ParentDriver_Uint64"),
              (_[(_.ResourceRoot_String = 1035)] = "ResourceRoot_String"),
              (_[(_.RegisteredDeviceType_String = 1036)] =
                "RegisteredDeviceType_String"),
              (_[(_.InputProfilePath_String = 1037)] =
                "InputProfilePath_String"),
              (_[(_.NeverTracked_Bool = 1038)] = "NeverTracked_Bool"),
              (_[(_.NumCameras_Int32 = 1039)] = "NumCameras_Int32"),
              (_[(_.CameraFrameLayout_Int32 = 1040)] =
                "CameraFrameLayout_Int32"),
              (_[(_.CameraStreamFormat_Int32 = 1041)] =
                "CameraStreamFormat_Int32"),
              (_[(_.AdditionalDeviceSettingsPath_String = 1042)] =
                "AdditionalDeviceSettingsPath_String"),
              (_[(_.DevicePowerUsage_Float = 1052)] = "DevicePowerUsage_Float"),
              (_[(_.ActualTrackingSystemName_String = 1054)] =
                "ActualTrackingSystemName_String"),
              (_[(_.AllowCameraToggle_Bool = 1055)] = "AllowCameraToggle_Bool"),
              (_[(_.AllowLightSourceFrequency_Bool = 1056)] =
                "AllowLightSourceFrequency_Bool"),
              (_[(_.HasEyeTracker_Bool = 1060)] = "HasEyeTracker_Bool"),
              (_[(_.ReportsTimeSinceVSync_Bool = 2e3)] =
                "ReportsTimeSinceVSync_Bool"),
              (_[(_.SecondsFromVsyncToPhotons_Float = 2001)] =
                "SecondsFromVsyncToPhotons_Float"),
              (_[(_.DisplayFrequency_Float = 2002)] = "DisplayFrequency_Float"),
              (_[(_.UserIpdMeters_Float = 2003)] = "UserIpdMeters_Float"),
              (_[(_.CurrentUniverseId_Uint64 = 2004)] =
                "CurrentUniverseId_Uint64"),
              (_[(_.PreviousUniverseId_Uint64 = 2005)] =
                "PreviousUniverseId_Uint64"),
              (_[(_.DisplayFirmwareVersion_Uint64 = 2006)] =
                "DisplayFirmwareVersion_Uint64"),
              (_[(_.IsOnDesktop_Bool = 2007)] = "IsOnDesktop_Bool"),
              (_[(_.DisplayMCType_Int32 = 2008)] = "DisplayMCType_Int32"),
              (_[(_.DisplayMCOffset_Float = 2009)] = "DisplayMCOffset_Float"),
              (_[(_.DisplayMCScale_Float = 2010)] = "DisplayMCScale_Float"),
              (_[(_.EdidVendorID_Int32 = 2011)] = "EdidVendorID_Int32"),
              (_[(_.DisplayMCImageLeft_String = 2012)] =
                "DisplayMCImageLeft_String"),
              (_[(_.DisplayMCImageRight_String = 2013)] =
                "DisplayMCImageRight_String"),
              (_[(_.DisplayGCBlackClamp_Float = 2014)] =
                "DisplayGCBlackClamp_Float"),
              (_[(_.EdidProductID_Int32 = 2015)] = "EdidProductID_Int32"),
              (_[(_.CameraToHeadTransform_Matrix34 = 2016)] =
                "CameraToHeadTransform_Matrix34"),
              (_[(_.DisplayGCType_Int32 = 2017)] = "DisplayGCType_Int32"),
              (_[(_.DisplayGCOffset_Float = 2018)] = "DisplayGCOffset_Float"),
              (_[(_.DisplayGCScale_Float = 2019)] = "DisplayGCScale_Float"),
              (_[(_.DisplayGCPrescale_Float = 2020)] =
                "DisplayGCPrescale_Float"),
              (_[(_.DisplayGCImage_String = 2021)] = "DisplayGCImage_String"),
              (_[(_.LensCenterLeftU_Float = 2022)] = "LensCenterLeftU_Float"),
              (_[(_.LensCenterLeftV_Float = 2023)] = "LensCenterLeftV_Float"),
              (_[(_.LensCenterRightU_Float = 2024)] = "LensCenterRightU_Float"),
              (_[(_.LensCenterRightV_Float = 2025)] = "LensCenterRightV_Float"),
              (_[(_.UserHeadToEyeDepthMeters_Float = 2026)] =
                "UserHeadToEyeDepthMeters_Float"),
              (_[(_.CameraFirmwareVersion_Uint64 = 2027)] =
                "CameraFirmwareVersion_Uint64"),
              (_[(_.CameraFirmwareDescription_String = 2028)] =
                "CameraFirmwareDescription_String"),
              (_[(_.DisplayFPGAVersion_Uint64 = 2029)] =
                "DisplayFPGAVersion_Uint64"),
              (_[(_.DisplayBootloaderVersion_Uint64 = 2030)] =
                "DisplayBootloaderVersion_Uint64"),
              (_[(_.DisplayHardwareVersion_Uint64 = 2031)] =
                "DisplayHardwareVersion_Uint64"),
              (_[(_.AudioFirmwareVersion_Uint64 = 2032)] =
                "AudioFirmwareVersion_Uint64"),
              (_[(_.CameraCompatibilityMode_Int32 = 2033)] =
                "CameraCompatibilityMode_Int32"),
              (_[(_.ScreenshotHorizontalFieldOfViewDegrees_Float = 2034)] =
                "ScreenshotHorizontalFieldOfViewDegrees_Float"),
              (_[(_.ScreenshotVerticalFieldOfViewDegrees_Float = 2035)] =
                "ScreenshotVerticalFieldOfViewDegrees_Float"),
              (_[(_.DisplaySuppressed_Bool = 2036)] = "DisplaySuppressed_Bool"),
              (_[(_.DisplayAllowNightMode_Bool = 2037)] =
                "DisplayAllowNightMode_Bool"),
              (_[(_.DisplayMCImageWidth_Int32 = 2038)] =
                "DisplayMCImageWidth_Int32"),
              (_[(_.DisplayMCImageHeight_Int32 = 2039)] =
                "DisplayMCImageHeight_Int32"),
              (_[(_.DisplayMCImageNumChannels_Int32 = 2040)] =
                "DisplayMCImageNumChannels_Int32"),
              (_[(_.DisplayMCImageData_Binary = 2041)] =
                "DisplayMCImageData_Binary"),
              (_[(_.SecondsFromPhotonsToVblank_Float = 2042)] =
                "SecondsFromPhotonsToVblank_Float"),
              (_[(_.DriverDirectModeSendsVsyncEvents_Bool = 2043)] =
                "DriverDirectModeSendsVsyncEvents_Bool"),
              (_[(_.DisplayDebugMode_Bool = 2044)] = "DisplayDebugMode_Bool"),
              (_[(_.GraphicsAdapterLuid_Uint64 = 2045)] =
                "GraphicsAdapterLuid_Uint64"),
              (_[(_.DriverProvidedChaperonePath_String = 2048)] =
                "DriverProvidedChaperonePath_String"),
              (_[(_.ExpectedTrackingReferenceCount_Int32 = 2049)] =
                "ExpectedTrackingReferenceCount_Int32"),
              (_[(_.ExpectedControllerCount_Int32 = 2050)] =
                "ExpectedControllerCount_Int32"),
              (_[(_.NamedIconPathControllerLeftDeviceOff_String = 2051)] =
                "NamedIconPathControllerLeftDeviceOff_String"),
              (_[(_.NamedIconPathControllerRightDeviceOff_String = 2052)] =
                "NamedIconPathControllerRightDeviceOff_String"),
              (_[(_.NamedIconPathTrackingReferenceDeviceOff_String = 2053)] =
                "NamedIconPathTrackingReferenceDeviceOff_String"),
              (_[(_.DoNotApplyPrediction_Bool = 2054)] =
                "DoNotApplyPrediction_Bool"),
              (_[(_.CameraToHeadTransforms_Matrix34_Array = 2055)] =
                "CameraToHeadTransforms_Matrix34_Array"),
              (_[(_.DistortionMeshResolution_Int32 = 2056)] =
                "DistortionMeshResolution_Int32"),
              (_[(_.DriverIsDrawingControllers_Bool = 2057)] =
                "DriverIsDrawingControllers_Bool"),
              (_[(_.DriverRequestsApplicationPause_Bool = 2058)] =
                "DriverRequestsApplicationPause_Bool"),
              (_[(_.DriverRequestsReducedRendering_Bool = 2059)] =
                "DriverRequestsReducedRendering_Bool"),
              (_[(_.MinimumIpdStepMeters_Float = 2060)] =
                "MinimumIpdStepMeters_Float"),
              (_[(_.AudioBridgeFirmwareVersion_Uint64 = 2061)] =
                "AudioBridgeFirmwareVersion_Uint64"),
              (_[(_.ImageBridgeFirmwareVersion_Uint64 = 2062)] =
                "ImageBridgeFirmwareVersion_Uint64"),
              (_[(_.ImuToHeadTransform_Matrix34 = 2063)] =
                "ImuToHeadTransform_Matrix34"),
              (_[(_.ImuFactoryGyroBias_Vector3 = 2064)] =
                "ImuFactoryGyroBias_Vector3"),
              (_[(_.ImuFactoryGyroScale_Vector3 = 2065)] =
                "ImuFactoryGyroScale_Vector3"),
              (_[(_.ImuFactoryAccelerometerBias_Vector3 = 2066)] =
                "ImuFactoryAccelerometerBias_Vector3"),
              (_[(_.ImuFactoryAccelerometerScale_Vector3 = 2067)] =
                "ImuFactoryAccelerometerScale_Vector3"),
              (_[(_.ConfigurationIncludesLighthouse20Features_Bool = 2069)] =
                "ConfigurationIncludesLighthouse20Features_Bool"),
              (_[(_.Prop_AdditionalRadioFeatures_Uint64 = 2070)] =
                "Prop_AdditionalRadioFeatures_Uint64"),
              (_[(_.Prop_CameraWhiteBalance_Vector4_Array = 2071)] =
                "Prop_CameraWhiteBalance_Vector4_Array"),
              (_[(_.Prop_CameraDistortionFunction_Int32_Array = 2072)] =
                "Prop_CameraDistortionFunction_Int32_Array"),
              (_[(_.Prop_CameraDistortionCoefficients_Float_Array = 2073)] =
                "Prop_CameraDistortionCoefficients_Float_Array"),
              (_[(_.Prop_ExpectedControllerType_String = 2074)] =
                "Prop_ExpectedControllerType_String"),
              (_[(_.HmdTrackingStyle_Int32 = 2075)] = "HmdTrackingStyle_Int32"),
              (_[(_.DriverProvidedChaperoneVisibility_Bool = 2076)] =
                "DriverProvidedChaperoneVisibility_Bool"),
              (_[(_.HmdColumnCorrectionSettingPrefix_String = 2077)] =
                "HmdColumnCorrectionSettingPrefix_String"),
              (_[(_.CameraSupportsCompatibilityModes_Bool = 2078)] =
                "CameraSupportsCompatibilityModes_Bool"),
              (_[(_.SupportsRoomViewDepthProjection_Bool = 2079)] =
                "SupportsRoomViewDepthProjection_Bool"),
              (_[(_.DisplayAvailableFrameRates_Float_Array = 2080)] =
                "DisplayAvailableFrameRates_Float_Array"),
              (_[(_.DisplaySupportsRuntimeFramerateChange_Bool = 2084)] =
                "DisplaySupportsRuntimeFramerateChange_Bool"),
              (_[(_.DisplaySupportsAnalogGain_Bool = 2085)] =
                "DisplaySupportsAnalogGain_Bool"),
              (_[(_.DisplayMinAnalogGain_Float = 2086)] =
                "DisplayMinAnalogGain_Float"),
              (_[(_.DisplayMaxAnalogGain_Float = 2087)] =
                "DisplayMaxAnalogGain_Float"),
              (_[(_.DashboardLinkSupport_Int32 = 2097)] =
                "DashboardLinkSupport_Int32"),
              (_[(_.DisplayMinUIAnalogGain_Float = 2098)] =
                "DisplayMinUIAnalogGain_Float"),
              (_[(_.DashboardScale_Float = 2091)] = "DashboardScale_Float"),
              (_[(_.IpdUIRangeMinMeters_Float = 2100)] =
                "IpdUIRangeMinMeters_Float"),
              (_[(_.IpdUIRangeMaxMeters_Float = 2101)] =
                "IpdUIRangeMaxMeters_Float"),
              (_[(_.Hmd_SupportsHDCP14LegacyCompat_Bool = 2102)] =
                "Hmd_SupportsHDCP14LegacyCompat_Bool"),
              (_[(_.Hmd_SupportsMicMonitoring_Bool = 2103)] =
                "Hmd_SupportsMicMonitoring_Bool"),
              (_[(_.Hmd_SupportsDisplayPortTrainingMode_Bool = 2104)] =
                "Hmd_SupportsDisplayPortTrainingMode_Bool"),
              (_[(_.Hmd_SupportsRoomViewDirect_Bool = 2105)] =
                "Hmd_SupportsRoomViewDirect_Bool"),
              (_[(_.Hmd_SupportsAppThrottling_Bool = 2106)] =
                "Hmd_SupportsAppThrottling_Bool"),
              (_[(_.Hmd_SupportsGpuBusMonitoring_Bool = 2107)] =
                "Hmd_SupportsGpuBusMonitoring_Bool"),
              (_[(_.DriverProvidedIPDVisibility_Bool = 2108)] =
                "DriverProvidedIPDVisibility_Bool"),
              (_[(_.Prop_Hmd_SupportsVRGamepadFocus_Bool = 2117)] =
                "Prop_Hmd_SupportsVRGamepadFocus_Bool"),
              (_[(_.DriverRequestedMuraCorrectionMode_Int32 = 2200)] =
                "DriverRequestedMuraCorrectionMode_Int32"),
              (_[(_.DriverRequestedMuraFeather_InnerLeft_Int32 = 2201)] =
                "DriverRequestedMuraFeather_InnerLeft_Int32"),
              (_[(_.DriverRequestedMuraFeather_InnerRight_Int32 = 2202)] =
                "DriverRequestedMuraFeather_InnerRight_Int32"),
              (_[(_.DriverRequestedMuraFeather_InnerTop_Int32 = 2203)] =
                "DriverRequestedMuraFeather_InnerTop_Int32"),
              (_[(_.DriverRequestedMuraFeather_InnerBottom_Int32 = 2204)] =
                "DriverRequestedMuraFeather_InnerBottom_Int32"),
              (_[(_.DriverRequestedMuraFeather_OuterLeft_Int32 = 2205)] =
                "DriverRequestedMuraFeather_OuterLeft_Int32"),
              (_[(_.DriverRequestedMuraFeather_OuterRight_Int32 = 2206)] =
                "DriverRequestedMuraFeather_OuterRight_Int32"),
              (_[(_.DriverRequestedMuraFeather_OuterTop_Int32 = 2207)] =
                "DriverRequestedMuraFeather_OuterTop_Int32"),
              (_[(_.DriverRequestedMuraFeather_OuterBottom_Int32 = 2208)] =
                "DriverRequestedMuraFeather_OuterBottom_Int32"),
              (_[(_.Audio_SupportsDualSpeakerAndJackOutput_Bool = 2303)] =
                "Audio_SupportsDualSpeakerAndJackOutput_Bool"),
              (_[(_.AttachedDeviceId_String = 3e3)] =
                "AttachedDeviceId_String"),
              (_[(_.SupportedButtons_Uint64 = 3001)] =
                "SupportedButtons_Uint64"),
              (_[(_.Axis0Type_Int32 = 3002)] = "Axis0Type_Int32"),
              (_[(_.Axis1Type_Int32 = 3003)] = "Axis1Type_Int32"),
              (_[(_.Axis2Type_Int32 = 3004)] = "Axis2Type_Int32"),
              (_[(_.Axis3Type_Int32 = 3005)] = "Axis3Type_Int32"),
              (_[(_.Axis4Type_Int32 = 3006)] = "Axis4Type_Int32"),
              (_[(_.ControllerRoleHint_Int32 = 3007)] =
                "ControllerRoleHint_Int32"),
              (_[(_.FieldOfViewLeftDegrees_Float = 4e3)] =
                "FieldOfViewLeftDegrees_Float"),
              (_[(_.FieldOfViewRightDegrees_Float = 4001)] =
                "FieldOfViewRightDegrees_Float"),
              (_[(_.FieldOfViewTopDegrees_Float = 4002)] =
                "FieldOfViewTopDegrees_Float"),
              (_[(_.FieldOfViewBottomDegrees_Float = 4003)] =
                "FieldOfViewBottomDegrees_Float"),
              (_[(_.TrackingRangeMinimumMeters_Float = 4004)] =
                "TrackingRangeMinimumMeters_Float"),
              (_[(_.TrackingRangeMaximumMeters_Float = 4005)] =
                "TrackingRangeMaximumMeters_Float"),
              (_[(_.ModeLabel_String = 4006)] = "ModeLabel_String"),
              (_[(_.IconPathName_String = 5e3)] = "IconPathName_String"),
              (_[(_.NamedIconPathDeviceOff_String = 5001)] =
                "NamedIconPathDeviceOff_String"),
              (_[(_.NamedIconPathDeviceSearching_String = 5002)] =
                "NamedIconPathDeviceSearching_String"),
              (_[(_.NamedIconPathDeviceSearchingAlert_String = 5003)] =
                "NamedIconPathDeviceSearchingAlert_String"),
              (_[(_.NamedIconPathDeviceReady_String = 5004)] =
                "NamedIconPathDeviceReady_String"),
              (_[(_.NamedIconPathDeviceReadyAlert_String = 5005)] =
                "NamedIconPathDeviceReadyAlert_String"),
              (_[(_.NamedIconPathDeviceNotReady_String = 5006)] =
                "NamedIconPathDeviceNotReady_String"),
              (_[(_.NamedIconPathDeviceStandby_String = 5007)] =
                "NamedIconPathDeviceStandby_String"),
              (_[(_.NamedIconPathDeviceAlertLow_String = 5008)] =
                "NamedIconPathDeviceAlertLow_String"),
              (_[(_.DisplayHiddenArea_Binary_Start = 5100)] =
                "DisplayHiddenArea_Binary_Start"),
              (_[(_.DisplayHiddenArea_Binary_End = 5150)] =
                "DisplayHiddenArea_Binary_End"),
              (_[(_.ParentContainer = 5151)] = "ParentContainer"),
              (_[(_.UserConfigPath_String = 6e3)] = "UserConfigPath_String"),
              (_[(_.InstallPath_String = 6001)] = "InstallPath_String"),
              (_[(_.HasDisplayComponent_Bool = 6002)] =
                "HasDisplayComponent_Bool"),
              (_[(_.HasControllerComponent_Bool = 6003)] =
                "HasControllerComponent_Bool"),
              (_[(_.HasCameraComponent_Bool = 6004)] =
                "HasCameraComponent_Bool"),
              (_[(_.HasDriverDirectModeComponent_Bool = 6005)] =
                "HasDriverDirectModeComponent_Bool"),
              (_[(_.HasVirtualDisplayComponent_Bool = 6006)] =
                "HasVirtualDisplayComponent_Bool"),
              (_[(_.HasSpatialAnchorsSupport_Bool = 6007)] =
                "HasSpatialAnchorsSupport_Bool"),
              (_[(_.ControllerType_String = 7e3)] = "ControllerType_String"),
              (_[(_.LegacyInputProfile_String = 7001)] =
                "LegacyInputProfile_String"),
              (_[(_.VendorSpecific_Reserved_Start = 1e4)] =
                "VendorSpecific_Reserved_Start"),
              (_[(_.VendorSpecific_Reserved_End = 10999)] =
                "VendorSpecific_Reserved_End"),
              (_[(_.SupportsInHMDRoomSetup_Bool = 11003)] =
                "SupportsInHMDRoomSetup_Bool"),
              (_[(_.VRLinkClientHMDSupportsRoomSetupRequests_Bool = 11004)] =
                "VRLinkClientHMDSupportsRoomSetupRequests_Bool"),
              (_[(_.TrackedDeviceProperty_Max = 1e6)] =
                "TrackedDeviceProperty_Max");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.k_EButton_System = 0)] = "k_EButton_System"),
              (_[(_.k_EButton_ApplicationMenu = 1)] =
                "k_EButton_ApplicationMenu"),
              (_[(_.k_EButton_Grip = 2)] = "k_EButton_Grip"),
              (_[(_.k_EButton_DPad_Left = 3)] = "k_EButton_DPad_Left"),
              (_[(_.k_EButton_DPad_Up = 4)] = "k_EButton_DPad_Up"),
              (_[(_.k_EButton_DPad_Right = 5)] = "k_EButton_DPad_Right"),
              (_[(_.k_EButton_DPad_Down = 6)] = "k_EButton_DPad_Down"),
              (_[(_.k_EButton_A = 7)] = "k_EButton_A"),
              (_[(_.k_EButton_ProximitySensor = 31)] =
                "k_EButton_ProximitySensor"),
              (_[(_.k_EButton_Axis0 = 32)] = "k_EButton_Axis0"),
              (_[(_.k_EButton_Axis1 = 33)] = "k_EButton_Axis1"),
              (_[(_.k_EButton_Axis2 = 34)] = "k_EButton_Axis2"),
              (_[(_.k_EButton_Axis3 = 35)] = "k_EButton_Axis3"),
              (_[(_.k_EButton_Axis4 = 36)] = "k_EButton_Axis4"),
              (_[(_.k_EButton_SteamVR_Touchpad = 32)] =
                "k_EButton_SteamVR_Touchpad"),
              (_[(_.k_EButton_SteamVR_Trigger = 33)] =
                "k_EButton_SteamVR_Trigger"),
              (_[(_.k_EButton_Dashboard_Back = 2)] =
                "k_EButton_Dashboard_Back"),
              (_[(_.k_EButton_IndexController_A = 2)] =
                "k_EButton_IndexController_A"),
              (_[(_.k_EButton_IndexController_B = 1)] =
                "k_EButton_IndexController_B"),
              (_[(_.k_EButton_IndexController_JoyStick = 35)] =
                "k_EButton_IndexController_JoyStick"),
              (_[(_.k_EButton_Reserved0 = 50)] = "k_EButton_Reserved0"),
              (_[(_.k_EButton_Reserved1 = 51)] = "k_EButton_Reserved1"),
              (_[(_.k_EButton_Max = 64)] = "k_EButton_Max");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.None = 0)] = "None"),
              (_[(_.ButtonEnter = 1)] = "ButtonEnter"),
              (_[(_.ButtonLeave = 2)] = "ButtonLeave"),
              (_[(_.Snap = 3)] = "Snap"),
              (_[(_.Sliding = 4)] = "Sliding"),
              (_[(_.SlidingEdge = 5)] = "SlidingEdge");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Minimal = 1)] = "Minimal"),
              (_[(_.Modal = 2)] = "Modal"),
              (_[(_.ShowArrowKeys = 4)] = "ShowArrowKeys"),
              (_[(_.HideDoneKey = 8)] = "HideDoneKey");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Unknown = -1)] = "Unknown"),
              (_[(_.Idle = 0)] = "Idle"),
              (_[(_.UserInteraction = 1)] = "UserInteraction"),
              (_[(_.UserInteraction_Timeout = 2)] = "UserInteraction_Timeout"),
              (_[(_.Standby = 3)] = "Standby"),
              (_[(_.Idle_Timeout = 4)] = "Idle_Timeout");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Notification_Shown = 600)] = "Notification_Shown"),
              (_[(_.Notification_Hidden = 601)] = "Notification_Hidden"),
              (_[(_.Notification_BeginInteraction = 602)] =
                "Notification_BeginInteraction"),
              (_[(_.Notification_Destroyed = 603)] = "Notification_Destroyed");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.TheaterFast = 0)] = "TheaterFast"),
              (_[(_.TheaterSlow = 1)] = "TheaterSlow");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Constant = 0)] = "Constant"),
              (_[(_.Nearest = 1)] = "Nearest"),
              (_[(_.Linear = 2)] = "Linear"),
              (_[(_.SmoothStep = 3)] = "SmoothStep"),
              (_[(_.SmootherStep = 4)] = "SmootherStep");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Invalid = 0)] = "Invalid"),
              (_[(_.RecenterCountdown = 1)] = "RecenterCountdown"),
              (_[(_.FloorAdjustExisting = 2)] = "FloorAdjustExisting"),
              (_[(_.RoomSetupFloor = 3)] = "RoomSetupFloor"),
              (_[(_.ClearRoomSetup = 4)] = "ClearRoomSetup"),
              (_[(_.RoomSetupFull = 5)] = "RoomSetupFull");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Near = 0)] = "Near"),
              (_[(_.Middle = 1)] = "Middle"),
              (_[(_.Far = 2)] = "Far"),
              (_[(_.VRGamepadUI = 3)] = "VRGamepadUI");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.__LocalSteamVR = 0)] = "__LocalSteamVR"),
              (_[(_.__LocalSteam = 1)] = "__LocalSteam"),
              (_[(_.__RemoteSteamVR = 2)] = "__RemoteSteamVR"),
              (_[(_.__RemoteSteam = 3)] = "__RemoteSteam"),
              (_[(_.MutualLocal = 4)] = "MutualLocal"),
              (_[(_.MutualSteamVR = 5)] = "MutualSteamVR"),
              (_[(_.MutualSteam = 6)] = "MutualSteam");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Dashboard = 1)] = "Dashboard"),
              (_[(_.LeftHand = 2)] = "LeftHand"),
              (_[(_.RightHand = 3)] = "RightHand"),
              (_[(_.World = 4)] = "World"),
              (_[(_.Theater = 5)] = "Theater"),
              (_[(_.Boot = 6)] = "Boot");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.Invalid = 0)] = "Invalid"),
              (_[(_.System = 1)] = "System"),
              (_[(_.SteamInput = 2)] = "SteamInput"),
              (_[(_.VRInput = 3)] = "VRInput");
          })(_ || (_ = {})),
          (function (_) {
            (_[(_.None = 0)] = "None"),
              (_[(_.ThirdPartyClient = 1)] = "ThirdPartyClient"),
              (_[(_.SteamVRClientUnified = 2)] = "SteamVRClientUnified"),
              (_[(_.SteamVRClientLegacyDual = 3)] = "SteamVRClientLegacyDual");
          })(_ || (_ = {}));
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(_, {
          _: () => _,
        });
        const _ = "/settings/steamvr/showAdvancedSettings";
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        __webpack_require__._(_, {
          _: () => _,
          _: () => _,
        });
        __webpack_require__("chunkid");
        var _ = __webpack_require__("chunkid"),
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
        function _(_, ..._) {
          let _ = _.LocalizeString(_);
          return _
            ? (_.length > 0 &&
                (_ = __webpack_require__.replace(/%(\d+)\$s/g, function (_, _) {
                  return void 0 !== _[_ - 1] ? String(_[_ - 1]) : _;
                })),
              _)
            : _;
        }
        _.s_Date = new Date();
        const _ = new _();
        function _(_, _) {
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
        }
        window.LocalizationManager = _;
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
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
        class _ extends _.Component {
          constructor() {
            super(...arguments), (this.m_ref = _.createRef());
          }
          get elem() {
            return this.m_ref.current;
          }
          get disabled() {
            return !1 === this.props.enabled;
          }
          onMouseDown(_) {
            var _, _, _;
            null === (_ = (_ = this.props).onMouseDown) ||
              void 0 === _ ||
              __webpack_require__.call(_, _),
              this.disabled ||
                _._.Instance.playSound(
                  null !== (_ = this.props.pressSoundEffect) && void 0 !== _
                    ? _
                    : null,
                );
          }
          onMouseUp(_) {
            var _, _;
            null === (_ = (_ = this.props).onMouseUp) ||
              void 0 === _ ||
              __webpack_require__.call(_, _);
          }
          onClick(_) {
            var _, _, _;
            this.disabled ||
              (null === (_ = (_ = this.props).onClick) ||
                void 0 === _ ||
                __webpack_require__.call(_, _),
              _.temporarilySuppressSoundEffect(),
              _._.Instance.playSound(
                null !== (_ = this.props.releaseSoundEffect) && void 0 !== _
                  ? _
                  : _._.ButtonClick,
              ));
          }
          onMouseEnter(_) {
            var _, _;
            null === (_ = (_ = this.props).onMouseEnter) ||
              void 0 === _ ||
              __webpack_require__.call(_, _),
              this.disabled ||
                ((0, _._)() == _._.Overlay &&
                  _._.Instance.triggerHaptic(_._.ButtonEnter));
          }
          onMouseLeave(_) {
            this.props.onMouseLeave && this.props.onMouseLeave(_),
              this.disabled ||
                ((0, _._)() == _._.Overlay &&
                  _._.Instance.triggerHaptic(_._.ButtonLeave));
          }
          render() {
            let _ = Object.assign({}, this.props);
            return (
              delete _.enabled,
              delete _.pressSoundEffect,
              delete _.releaseSoundEffect,
              (_.className = (function (..._) {
                return _.filter(
                  (_) => null != _ && ("string" == typeof _ || _[1]),
                )
                  .map((_) => ("string" == typeof _ ? _ : _[0]))
                  .join(" ");
              })(_.className, ["Disabled", this.disabled])),
              _.cloneElement(_.createElement("div", _, this.props.children), {
                onClick: this.onClick,
                onMouseDown: this.onMouseDown,
                onMouseUp: this.onMouseUp,
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave,
                ref: this.m_ref,
              })
            );
          }
        }
        (0, _._)([_._], _.prototype, "onMouseDown", null),
          (0, _._)([_._], _.prototype, "onMouseUp", null),
          (0, _._)([_._], _.prototype, "onClick", null),
          (0, _._)([_._], _.prototype, "onMouseEnter", null),
          (0, _._)([_._], _.prototype, "onMouseLeave", null);
        class _ extends _.Component {
          static temporarilySuppressSoundEffect() {
            window.clearTimeout(this.s_nPlaySoundEffectTimeout),
              (this.s_nPlaySoundEffectTimeout = 0),
              window.clearTimeout(this.s_nSuppressingSoundEffectsTimeout),
              (this.s_nSuppressingSoundEffectsTimeout = window.setTimeout(
                this.endSoundEffectSuppression,
                this.k_nSoundEffectSuppressionPeriod,
              ));
          }
          static get suppressingSoundEffect() {
            return this.s_nSuppressingSoundEffectsTimeout > 0;
          }
          onClick(_) {
            _.suppressingSoundEffect ||
              (window.clearTimeout(_.s_nPlaySoundEffectTimeout),
              (_.s_nPlaySoundEffectTimeout = window.setTimeout(
                _.playSoundEffect,
                _.k_nSoundEffectDelay,
              ))),
              this.props.onClick && this.props.onClick(_);
          }
          static endSoundEffectSuppression() {
            window.clearTimeout(this.s_nSuppressingSoundEffectsTimeout),
              (this.s_nSuppressingSoundEffectsTimeout = 0);
          }
          static playSoundEffect() {
            _._.Instance.playSound(_._.SurfaceClick);
          }
          render() {
            return _.cloneElement(
              _.createElement("div", this.props, this.props.children),
              {
                onClick: this.onClick,
              },
            );
          }
        }
        (_.k_nSoundEffectSuppressionPeriod = 4),
          (_.k_nSoundEffectDelay = 2),
          (_.s_nSuppressingSoundEffectsTimeout = 0),
          (_.s_nPlaySoundEffectTimeout = 0),
          (0, _._)([_._], _.prototype, "onClick", null),
          (0, _._)([_._], _, "endSoundEffectSuppression", null),
          (0, _._)([_._], _, "playSoundEffect", null);
        var _ = __webpack_require__("chunkid");
        (0, _.configure)({
          enforceActions: "never",
        });
        class _ extends _.Component {
          constructor(_) {
            super(_),
              (this.m_genid = 0),
              (this.m_language = null),
              (this.m_languageToLayout = new Map()),
              (this.m_keyTypeToHandler = null),
              (this.m_curShiftPlane = null),
              (this.m_keyElements = null),
              (this.m_KeyboardVisibilityCallbackHandle = null),
              this.initializeKeyHandlers(),
              (this.state = {
                bFading: !1,
                bVisible: !1,
                bDockedInDashboard: !1,
                bMinimalMode: !1,
                bMultilinePreview: !1,
                inputMode: _._.Normal,
                activeKey: {
                  nCol: -1,
                  nRow: -1,
                },
                presentation: "overlay",
                shiftPlaneName: "normal",
                layout: null,
                langLayout: null,
                text: "",
                textPos: 0,
                suggestions: [],
              }),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRKeyboard.LoadSuggestionsForLanguage(this.language()),
              _._.Init(!1);
          }
          componentDidMount() {
            var _;
            this.m_KeyboardVisibilityCallbackHandle =
              null ===
                (_ =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.RegisterForKeyboardInfoChangedEvents) ||
              void 0 === _
                ? void 0
                : _.call(VRHTML, this.onKeyboardInfoChanged);
          }
          componentWillUnmount() {
            var _;
            null === (_ = this.m_KeyboardVisibilityCallbackHandle) ||
              void 0 === _ ||
              _.unregister();
          }
          onKeyboardInfoChanged(_) {
            if (_.visible) {
              const _ =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRDashboardManager.GetKeyboardBuffer();
              this.setState({
                bVisible: !0,
                bDockedInDashboard: _.dockedInDashboard,
                inputMode: _.inputMode,
                bMinimalMode: !!(_._.Minimal & _.keyboardFlags),
                bMultilinePreview: _.lineMode == _._.MultipleLines,
                text: _,
                textPos: _.length,
              }),
                this.updateSuggestions(_),
                this.getLayout("base"),
                this.getLayout(this.language());
            } else
              this.setState({
                bVisible: !1,
              });
          }
          startClose() {
            this.setState({
              bVisible: !1,
            }),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRDashboardManager.CloseKeyboard();
          }
          genid() {
            return (this.m_genid += 1), "vk" + this.m_genid;
          }
          language() {
            var _;
            return (
              this.m_language ||
                (this.props.language
                  ? (this.m_language = this.props.language)
                  : (this.m_language =
                      null !==
                        (_ =
                          null === VRHTML || void 0 === VRHTML
                            ? void 0
                            : VRHTML.GetSteamLanguage()) && void 0 !== _
                        ? _
                        : "english")),
              this.m_language
            );
          }
          bShowPasswordPreview() {
            return this.state.inputMode == _._.Password;
          }
          getLayoutFile(_) {
            return (0, _._)(this, void 0, void 0, function* () {
              let _ = `/dashboard/keyboards/layout_${_}_${this.state.presentation}.json`;
              return _()
                .get(_)
                .then((_) => (200 != _.status ? null : _.data))
                .catch((_) =>
                  "english" != _ ? this.getLayoutFile("english") : null,
                );
            });
          }
          getLayout(_) {
            this.m_languageToLayout.has(_)
              ? this.onLayoutLoaded()
              : this.getLayoutFile(_).then((_) => {
                  _ &&
                    (this.m_languageToLayout.set(_, _), this.onLayoutLoaded());
                });
          }
          onLayoutLoaded() {
            this.m_languageToLayout.has("base") &&
              this.m_languageToLayout.has(this.language()) &&
              ((this.m_keyElements = null),
              this.setState({
                layout: this.m_languageToLayout.get("base"),
                langLayout: this.m_languageToLayout.get(this.language()),
                shiftPlaneName: "normal",
              }),
              this.toggleShiftPlaneWith("normal"));
          }
          initializeKeyHandlers() {
            (this.m_keyTypeToHandler = new Map()),
              this.m_keyTypeToHandler.set("key", this.handleKey),
              this.m_keyTypeToHandler.set("del", this.handleDel),
              this.m_keyTypeToHandler.set("shift", this.handleShift),
              this.m_keyTypeToHandler.set("symbols", this.handleSymbols),
              this.m_keyTypeToHandler.set("done", this.handleDone),
              this.m_keyTypeToHandler.set("cancel", this.handleCancel),
              this.m_keyTypeToHandler.set("clear", this.handleClear),
              this.m_keyTypeToHandler.set("return", this.handleReturn);
          }
          findShiftPlane(_) {
            if (!this.state.langLayout) return null;
            for (let _ of this.state.langLayout.shiftPlanes)
              if (_.name == _) return _;
            return null;
          }
          toggleShiftPlaneWith(_) {
            (this.m_curShiftPlane && this.m_curShiftPlane.name != _) ||
              (_ = "normal");
            let _ = this.findShiftPlane(_);
            _ &&
              ((this.m_curShiftPlane = _),
              this.setState({
                shiftPlaneName: _,
              }));
          }
          onKey(_, _) {
            if (
              _ < this.state.layout.geometry.length &&
              _ < this.state.layout.geometry[_].keys.length
            ) {
              let _ = this.state.layout.geometry[_].keys[_];
              if ("string" == typeof _);
              else if ("key" != _.type)
                return void this.m_keyTypeToHandler.get(_.type)(_);
            }
            if (
              this.m_curShiftPlane &&
              _ < this.m_curShiftPlane.rows.length &&
              _ < this.m_curShiftPlane.rows[_].length
            ) {
              let _ = this.m_curShiftPlane.rows[_][_];
              "string" == typeof _
                ? this.m_keyTypeToHandler.get("key")(_)
                : this.m_keyTypeToHandler.has(_.type) &&
                  this.m_keyTypeToHandler.get(_.type)(_);
            }
          }
          handleKey(_) {
            let _;
            if (
              ((_ = "string" == typeof _ ? _ : _.value),
              this.state.bMinimalMode)
            )
              this.UpdateText(_, 1);
            else {
              let _ =
                  this.state.text.substr(0, this.state.textPos) +
                  _ +
                  this.state.text.substr(this.state.textPos),
                _ = this.state.textPos + _.length;
              this.UpdateText(_, _);
            }
          }
          handleReturn() {
            this.handleKey("\n");
          }
          handleDel() {
            if (this.state.bMinimalMode) this.handleKey("\b");
            else {
              let _ = this.state.text.substr(0, this.state.textPos),
                _ = this.state.text.substr(this.state.textPos);
              if (_.length > 0) {
                let _ = _.substr(0, _.length - 1) + _,
                  _ = this.state.textPos - 1;
                this.UpdateText(_, _);
              }
            }
          }
          handleShift() {
            this.toggleShiftPlaneWith("shift");
          }
          handleSymbols() {
            this.toggleShiftPlaneWith("symbols");
          }
          UpdateText(_, _) {
            this.setState({
              text: _,
              textPos: _,
            }),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRKeyboard.SetKeyboardText(_),
              this.updateSuggestions(this.getSuggestionBase(_, _));
          }
          handleDone(_) {
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRDashboardManager.SendKeyboardDone(),
              this.startClose();
          }
          handleCancel(_) {
            this.startClose();
          }
          handleClear(_) {
            this.setState({
              text: "",
              textPos: 0,
            }),
              this.updateSuggestions("");
          }
          isWhite(_) {
            return " " == _;
          }
          findWordLimits(_, _) {
            if (
              _ < _.length &&
              this.isWhite(_[_]) &&
              (0 == _ || (_ > 1 && this.isWhite(_[_ - 1])))
            )
              return null;
            let _ = _;
            for (; _ > 0 && !this.isWhite(_[_]); ) _ -= 1;
            _ < _.length && this.isWhite(_[_]) && (_ += 1);
            let _ = _;
            for (; _ < _.length && !this.isWhite(_[_]); ) _ += 1;
            return [_, _];
          }
          getSuggestionBase(_, _) {
            let _ = this.findWordLimits(_, _);
            return _ ? _.substr(_[0], _[1] - _[0]) : null;
          }
          updateSuggestions(_) {
            var _;
            if (null != this.state.layout)
              if (this.bShowPasswordPreview())
                this.setState({
                  suggestions: [],
                });
              else if (
                (null == _ &&
                  (_ = this.getSuggestionBase(
                    this.state.text,
                    this.state.textPos,
                  )),
                null != _ && _.length > 0)
              ) {
                new Array(this.state.layout.previewSuggestionCount);
                let _ =
                  null !==
                    (_ =
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.VRKeyboard.GetSuggestions(
                            _,
                            this.state.layout.previewSuggestionCount,
                          )) && void 0 !== _
                    ? _
                    : [];
                this.setState({
                  suggestions: _,
                });
              } else
                this.setState({
                  suggestions: [],
                });
          }
          handleSuggestionClick(_) {
            if (_ >= this.state.suggestions.length) return;
            let _ = this.state.suggestions[_],
              _ = this.findWordLimits(this.state.text, this.state.textPos);
            if (_) {
              let _ = this.state.text.substr(0, _[0]);
              _ += " ";
              let _ = _ + _ + this.state.text.substr(_[1]),
                _ = _.length + _.length;
              this.UpdateText(_, _);
            }
          }
          makeKeyFaceElement(_, _) {
            let _ = "VRKBKeyFace";
            if ((_ && (_ += ` VRKBShift_${_.name}`), "string" == typeof _))
              return _.createElement(
                "span",
                {
                  key: this.genid(),
                  className: _,
                },
                _,
              );
            {
              let _ = _.text;
              _.value ? _.value : _.text;
              switch (
                (_.img &&
                  (_ = _.createElement("img", {
                    src: `/dashboard/images/vrkeyboard/${_.img}.png`,
                  })),
                "string" == typeof _ && _.startsWith("#") && (_ = (0, _._)(_)),
                _.type)
              ) {
                case "key":
                case "symbols":
                case "del":
                case "cancel":
                case "shift":
                case "return":
                  return _.createElement(
                    "span",
                    {
                      key: this.genid(),
                      className: _,
                    },
                    _,
                  );
                case "done":
                  return _.createElement(
                    "span",
                    {
                      key: this.genid(),
                      className: _ + " VRKBDone",
                    },
                    _,
                  );
                case "hole":
                  return _.createElement("span", {
                    key: this.genid(),
                    className: _,
                  });
                default:
                  return (
                    console.log(
                      "unknown key type ",
                      _.type,
                      " in keyboard layout",
                    ),
                    null
                  );
              }
            }
          }
          getKeyFaces(_, _) {
            let _ = [];
            if (
              _ < this.state.layout.geometry.length &&
              _ < this.state.layout.geometry[_].keys.length
            ) {
              "key" != this.state.layout.geometry[_].keys[_].type &&
                __webpack_require__.push(
                  this.makeKeyFaceElement(
                    this.state.layout.geometry[_].keys[_],
                    null,
                  ),
                );
            }
            if (0 == _.length)
              for (let _ of this.state.langLayout.shiftPlanes)
                _ < _.rows.length &&
                  _ < _.rows[_].length &&
                  __webpack_require__.push(
                    this.makeKeyFaceElement(_.rows[_][_], _),
                  );
            return _;
          }
          getKeyElements() {
            let _ = [];
            for (let _ = 0; _ < this.state.layout.geometry.length; ++_) {
              let _ = this.state.layout.geometry[_],
                _ = [];
              for (let _ = 0; _ < _.keys.length; ++_) {
                let _ = _.keys[_],
                  _ = {};
                _.flexGrow && (_.flexGrow = _.flexGrow),
                  _.flexShrink && (_.flexShrink = _.flexShrink),
                  this.state.shiftPlaneName == _.type &&
                    (_.background = "#000"),
                  this.state.activeKey.nCol == _ &&
                    this.state.activeKey.nRow == _ &&
                    (_.background = "#000");
                let _ = this.getKeyFaces(_, _),
                  _ = () => {
                    "done" == _.type && this.onKey(_, _);
                  },
                  _ = () => {
                    "done" != _.type &&
                      (this.setState({
                        activeKey: {
                          nRow: _,
                          nCol: _,
                        },
                      }),
                      this.onKey(_, _));
                  },
                  _ = () => {
                    "done" != _.type &&
                      this.setState({
                        activeKey: {
                          nRow: -1,
                          nCol: -1,
                        },
                      });
                  };
                _.push(
                  _.createElement(
                    _,
                    {
                      key: this.genid(),
                      className: "VRKBKey",
                      releaseSoundEffect: null,
                      onClick: _,
                      onMouseDown: _,
                      onMouseUp: _,
                      style: _,
                    },
                    _,
                  ),
                );
              }
              let _ = {};
              _.height && (_.height = _.height),
                _.push(
                  _.createElement(
                    "div",
                    {
                      key: this.genid(),
                      className: "VRKBRow",
                      style: _,
                    },
                    _,
                  ),
                );
            }
            return _.createElement(
              "div",
              {
                className: "VRKBRows",
              },
              _,
            );
          }
          makeCursor() {
            return _.createElement(
              "span",
              {
                key: this.genid(),
                className: "VRKBPreviewTextCursor",
              },
              "|",
            );
          }
          makePreviewText() {
            let _ = this.state.text.substr(0, this.state.textPos),
              _ = this.state.text.substr(this.state.textPos);
            return this.bShowPasswordPreview()
              ? ((_ = _.kPasswordChar.repeat(_.length)),
                (_ = _.kPasswordChar.repeat(_.length)),
                [
                  _.createElement(
                    "span",
                    {
                      key: this.genid(),
                      className: "VRKBPreviewTextPart",
                    },
                    _.kPasswordChar.repeat(_.length),
                  ),
                  this.makeCursor(),
                  _.createElement(
                    "span",
                    {
                      key: this.genid(),
                      className: "VRKBPreviewTextPart",
                    },
                    _.kPasswordChar.repeat(_.length),
                  ),
                ])
              : [
                  _.createElement(
                    "span",
                    {
                      key: this.genid(),
                      className: "VRKBPreviewTextPart",
                    },
                    _,
                  ),
                  this.makeCursor(),
                  _.createElement(
                    "span",
                    {
                      key: this.genid(),
                      className: "VRKBPreviewTextPart",
                    },
                    _,
                  ),
                ];
          }
          makeSuggestionElements() {
            let _ = [];
            if (this.state.suggestions)
              for (let _ = 0; _ < this.state.suggestions.length; ++_)
                _.push(
                  _.createElement(
                    "div",
                    {
                      key: this.genid(),
                      className: "VRKBSuggestion",
                      onClick: () => this.handleSuggestionClick(_),
                    },
                    this.state.suggestions[_],
                  ),
                );
            for (
              let _ = _.length;
              _ < this.state.layout.previewSuggestionCount;
              ++_
            )
              _.push(
                _.createElement("div", {
                  key: this.genid(),
                  className: "VRKBSuggestion",
                }),
              );
            return _;
          }
          renderFlatPreview() {
            return this.state.bMinimalMode
              ? null
              : _.createElement(
                  "div",
                  {
                    className: "VRKBPreviewWrapper",
                  },
                  _.createElement(
                    "div",
                    {
                      key: this.genid(),
                      className: "VRKBPreviewText",
                    },
                    this.makePreviewText(),
                  ),
                  _.createElement(
                    "div",
                    {
                      key: this.genid(),
                      className: "VRKBSuggestionWrapper",
                    },
                    this.makeSuggestionElements(),
                  ),
                );
          }
          render_flat() {
            return _.createElement(
              _._,
              {
                parent_path: "/user/head",
              },
              _.createElement(
                _._,
                null,
                _.createElement(
                  _._,
                  {
                    translation: this.state.layout.translation,
                  },
                  _.createElement(
                    _._,
                    {
                      width: void 0,
                      height: 1,
                      interactive: !0,
                      sort_depth_bias: 0.2,
                      debug_name: "keyboard-flat",
                    },
                    _.createElement(
                      "div",
                      {
                        className: `VRKBShiftState VRKBChooseShift_${this.state.shiftPlaneName}`,
                      },
                      _.createElement(
                        "div",
                        {
                          className: "VRKBBackground",
                        },
                        this.renderFlatPreview(),
                        this.m_keyElements,
                      ),
                    ),
                  ),
                ),
              ),
            );
          }
          render_overlay() {
            return _.createElement(
              "div",
              {
                className: `VRKBContainer VRKBShiftState VRKBChooseShift_${this.state.shiftPlaneName}`,
              },
              _.createElement(
                "div",
                {
                  className: "VRKBBackground",
                },
                this.renderFlatPreview(),
                this.m_keyElements,
              ),
            );
          }
          render() {
            if (!this.state.layout)
              return console.log("xxx render layout==null, bailing"), null;
            if (!this.state.bVisible)
              return console.log("xxx render !visible, so bailing"), null;
            switch (
              ((this.m_keyElements = this.getKeyElements()),
              this.state.presentation)
            ) {
              case "flat":
                return this.render_flat();
              case "overlay":
                return this.render_overlay();
              default:
                return (
                  console.log(
                    "bad keyboard presentation:",
                    this.state.presentation,
                  ),
                  null
                );
            }
          }
        }
        (_.kPasswordChar = "●"),
          (0, _._)([_._], _.prototype, "onKeyboardInfoChanged", null),
          (0, _._)([_._], _.prototype, "handleKey", null),
          (0, _._)([_._], _.prototype, "handleReturn", null),
          (0, _._)([_._], _.prototype, "handleDel", null),
          (0, _._)([_._], _.prototype, "handleShift", null),
          (0, _._)([_._], _.prototype, "handleSymbols", null),
          (0, _._)([_._], _.prototype, "handleDone", null),
          (0, _._)([_._], _.prototype, "handleCancel", null),
          (0, _._)([_._], _.prototype, "handleClear", null),
          (0, _._)([_._], _.prototype, "handleSuggestionClick", null);
        const _ =
          null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.GetSteamLanguage();
        null === VRHTML ||
          void 0 === VRHTML ||
          VRHTML.VROverlay.SetInputMethod(
            VRHTML.VROverlay.ThisOverlayHandle(),
            _._.Mouse,
          ),
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VRDashboardManager.SetKeyboardOverlayToThis(),
          (0, _._)(["systemui"], _)
            .then(() => _._.Init())
            .then(() => _._.Init())
            .then(() => {
              (0, _._)().Init("SteamVR", CLSTAMP, (0, _._)()),
                _._(document.getElementById("root")).render(
                  _.createElement(_, {
                    language: _,
                  }),
                );
            });
      },
    },
    _ = {};
  function _(_) {
    var _ = _[_];
    if (void 0 !== _) return _.exports;
    var _ = (_[_] = {
      exports: {},
    });
    return _[_].call(_.exports, _, _.exports, _), _.exports;
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
        884: 0,
        198: 0,
        384: 0,
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
  var _ = _._(
    void 0,
    [967, 352, 211, 264, 305, 527, 797, 148, 500, 554, 798],
    () => _(981),
  );
  _ = _._(_);
})();
