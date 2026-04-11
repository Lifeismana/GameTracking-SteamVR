var CLSTAMP = "steamdb";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [798],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
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
      __webpack_require__._(module_exports, {
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
          (this.m_Applications = _.observable.map()),
            (this.m_sceneApplicationStateChangedEventHandle = null),
            (0, _.makeObservable)(this);
        }
        Init() {
          return (0, _._)(this, void 0, void 0, function* () {
            (this.m_sceneApplicationStateChangedEventHandle =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.RegisterForSceneApplicationStateChangedEvents(
                    this.onSceneApplicationStateChanged,
                  )),
              yield this.UpdateApplications();
          });
        }
        onSceneApplicationStateChanged() {
          this.UpdateApplications();
        }
        SetApplicationMap(_) {
          var _;
          this.m_Applications.clear(),
            null === (_ = _.apps) ||
              void 0 === _ ||
              _.forEach((_) => {
                this.m_Applications.set(_.key, _);
              });
        }
        UpdateApplications() {
          return (0, _._)(this, void 0, void 0, function* () {
            yield this.QueryApplications().then((_) => {
              this.SetApplicationMap(_);
            });
          });
        }
        QueryApplications() {
          return new Promise(function (_, _) {
            _()
              .get("/app/list.json")
              .then((_) => {
                _(_.data);
              })
              .catch((_) => {
                _(_);
              });
          });
        }
        GetAppImageURL(_) {
          var _;
          return (
            "/app/image?app_key=" +
            _ +
            "&version=" +
            (null !==
              (_ =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.SteamVRVersion()) && void 0 !== _
              ? _
              : "0")
          );
        }
        GetApp(_) {
          return this.m_Applications.has(_)
            ? this.m_Applications.get(_)
            : void 0;
        }
        GetRecentApps() {
          let _ = [];
          return (
            this.m_Applications.forEach((_) => {
              _.is_internal || _.push(_);
            }),
            _.sort((_, _) =>
              _.last_launch < _.last_launch
                ? 1
                : _.last_launch > _.last_launch
                  ? -1
                  : _.name < _.name
                    ? 1
                    : _.name > _.name
                      ? -1
                      : 0,
            ),
            _
          );
        }
        GetCurrentSceneProcess() {
          let _;
          return (
            this.m_Applications.forEach((_) => {
              _.current_scene_process && !_.is_internal && (_ = _);
            }),
            _
          );
        }
        GetRunningApps() {
          let _ = [];
          for (let _ of this.m_Applications.values()) _.pid && _.push(_);
          return _;
        }
        FindAppByPid(_) {
          for (let _ of this.m_Applications.values()) if (_.pid == _) return _;
        }
        IsAppAllowedPrivateInputs(_) {
          return "openvr.component.vrcompositor" == _;
        }
        ShouldShowBindingFailureForApp(_) {
          if (null == _ || "" == _) return !1;
          if ("openvr.component.vrcompositor" == _) return !0;
          if (null == this.GetApp(_)) return !1;
          let _ = this.GetCurrentSceneProcess();
          return null != _ && _.key == _;
        }
      }
      (0, _._)([_.observable], _.prototype, "m_Applications", void 0),
        (0, _._)([_._], _.prototype, "onSceneApplicationStateChanged", null),
        (0, _._)([_.action], _.prototype, "SetApplicationMap", null),
        (0, _._)([_._], _.prototype, "QueryApplications", null),
        (0, _._)([_._], _.prototype, "GetAppImageURL", null),
        (0, _._)([_._], _.prototype, "GetApp", null),
        (0, _._)([_._], _.prototype, "GetRecentApps", null),
        (0, _._)([_._], _.prototype, "GetCurrentSceneProcess", null),
        (0, _._)([_._], _.prototype, "IsAppAllowedPrivateInputs", null),
        (0, _._)([_._], _.prototype, "ShouldShowBindingFailureForApp", null);
      const _ = new _();
      window.applications = _;
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
        _ = __webpack_require__("chunkid");
      class _ {
        constructor() {
          (this.m_InputState = void 0),
            (this.m_KnownControllerTypes = _.observable.map()),
            (this.m_mailbox = new _._()),
            (this.m_bUpdateInputStateOnControllerTypChange = !1),
            (0, _.makeObservable)(this);
        }
        Init(_) {
          return (
            this.m_mailbox.Init("input_state"),
            this.m_mailbox.RegisterHandler(
              "controller_type_changed",
              this.OnControllerTypeChanged,
            ),
            this.m_mailbox.RegisterHandler(
              "action_bindings_reloaded",
              this.OnActionBindingsReloaded,
            ),
            null != _ && (this.m_bUpdateInputStateOnControllerTypChange = _),
            this.GetInputState()
          );
        }
        OnActionBindingsReloaded() {
          this.GetInputState();
        }
        OnControllerTypeChanged(_) {
          this.UpdateControllerTypes(_.controller_types),
            this.m_InputState &&
              (this.m_InputState.controller_types = _.controller_types),
            this.m_bUpdateInputStateOnControllerTypChange &&
              this.GetInputState();
        }
        get ConnectedDevices() {
          return null == this.m_InputState
            ? []
            : this.m_InputState.devices.filter(
                (_) =>
                  "TrackedDeviceClass_Controller" == _.class ||
                  "TrackedDeviceClass_HMD" == _.class ||
                  "TrackedDeviceClass_GenericTracker" == _.class,
              );
        }
        get ControllerTypes() {
          return this.m_InputState.controller_types;
        }
        get ShouldSendSystemButtonToAllApps() {
          return this.m_InputState.send_system_button_to_all_apps;
        }
        get ShowHiddenInputs() {
          return this.m_InputState.show_hidden_inputs;
        }
        get IsSteamAvailable() {
          return !this.m_InputState || this.m_InputState.is_steam_available;
        }
        get BDevMode() {
          return this.m_InputState.dev_mode;
        }
        get IsValid() {
          return null != this.m_InputState;
        }
        get CurrentUserPersonaName() {
          return this.m_InputState.current_user_persona_name
            ? this.m_InputState.current_user_persona_name
            : null;
        }
        GetControllerTypeInfo(_) {
          return this.m_InputState.controller_types.find(
            (_) => _.controller_type == _,
          );
        }
        GetDeviceInfo(_) {
          for (let _ of this.m_InputState.devices)
            if (_.root_path == _ || _.device_path == _) return _;
          return null;
        }
        LocalizeControllerString(_, _) {
          let _ = (0, _._)("#" + _);
          return _ != "#" + _
            ? _
            : _ &&
                this.m_InputState &&
                this.m_InputState.localization.hasOwnProperty(
                  _.resource_root,
                ) &&
                this.m_InputState.localization[_.resource_root].hasOwnProperty(
                  _.toLowerCase(),
                )
              ? this.m_InputState.localization[_.resource_root][_.toLowerCase()]
              : _;
        }
        LocalizeDriverString(_, _) {
          if (
            this.m_InputState &&
            this.m_InputState.localization.hasOwnProperty(_) &&
            this.m_InputState.localization[_].hasOwnProperty(_.toLowerCase())
          )
            return this.m_InputState.localization[_][_.toLowerCase()];
          let _ = (0, _._)("#" + _);
          return _ != "#" + _ ? _ : _;
        }
        UpdateControllerTypes(_) {
          this.m_KnownControllerTypes.clear();
          for (let _ of _)
            this.m_KnownControllerTypes.set(_.controller_type, _);
        }
        GetInputState() {
          return (0, _._)(this, void 0, void 0, function* () {
            yield new Promise(function (_, _) {
              _()
                .get("/input/getstate.json")
                .then((_) => {
                  _(_.data);
                })
                .catch((_) => {
                  _(_);
                });
            }).then((_) => {
              (0, _.runInAction)(() => {
                for (let _ of _.controller_types)
                  _.controller_type = _.controller_type.toLowerCase();
                for (let _ of _.devices)
                  _.controller_type = _.controller_type.toLowerCase();
                this.UpdateControllerTypes(_.controller_types),
                  (this.m_InputState = _);
              });
            });
          });
        }
        get KnownControllerTypes() {
          return this.m_KnownControllerTypes;
        }
        FindDeviceClassForControllerType(_) {
          let _ = this.GetControllerTypeInfo(_);
          return null == _ ? void 0 : _.device_class;
        }
        FindRootPathForControllerType(_) {
          for (let _ of this.m_InputState.devices)
            if (_.controller_type == _) return _.root_path;
          return null;
        }
      }
      (0, _._)([_.observable], _.prototype, "m_InputState", void 0),
        (0, _._)([_.observable], _.prototype, "m_KnownControllerTypes", void 0),
        (0, _._)([_._], _.prototype, "OnActionBindingsReloaded", null),
        (0, _._)([_._], _.prototype, "OnControllerTypeChanged", null),
        (0, _._)([_.computed], _.prototype, "ConnectedDevices", null),
        (0, _._)([_.computed], _.prototype, "ControllerTypes", null),
        (0, _._)(
          [_.computed],
          _.prototype,
          "ShouldSendSystemButtonToAllApps",
          null,
        ),
        (0, _._)([_.computed], _.prototype, "ShowHiddenInputs", null),
        (0, _._)([_.computed], _.prototype, "IsSteamAvailable", null),
        (0, _._)([_.computed], _.prototype, "BDevMode", null),
        (0, _._)([_.computed], _.prototype, "IsValid", null),
        (0, _._)([_.computed], _.prototype, "CurrentUserPersonaName", null),
        (0, _._)([_._], _.prototype, "GetControllerTypeInfo", null),
        (0, _._)([_._], _.prototype, "LocalizeControllerString", null),
        (0, _._)([_._], _.prototype, "LocalizeDriverString", null),
        (0, _._)([_.action], _.prototype, "UpdateControllerTypes", null),
        (0, _._)([_.action], _.prototype, "GetInputState", null),
        (0, _._)([_.computed], _.prototype, "KnownControllerTypes", null),
        (0, _._)([_._], _.prototype, "FindDeviceClassForControllerType", null);
      const _ = new _();
      window.inputState = _;
    },
  },
]);
