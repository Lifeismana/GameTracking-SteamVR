var CLSTAMP = "10590646";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [798],
  {
    6189: (t, e, n) => {
      n.d(e, { W: () => a });
      var o = n(6090);
      const s = Object.values(o.en).filter((t) => "number" == typeof t);
      function r(t, e) {
        return new Set([...t, ...e]);
      }
      class a {
        constructor() {
          this.m_mapSuppressedHaptics = new Map();
        }
        static get Instance() {
          return a.s_Instance || (a.s_Instance = new a()), a.s_Instance;
        }
        suppressHaptics(t, e) {
          const n = new Set(e);
          this.m_mapSuppressedHaptics.has(t)
            ? this.m_mapSuppressedHaptics.set(
                t,
                r(this.m_mapSuppressedHaptics.get(t), n),
              )
            : this.m_mapSuppressedHaptics.set(t, n);
        }
        suppressHapticsExcept(t, e) {
          const n = new Set(e),
            o = new Set(s.filter((t) => !n.has(t)));
          this.m_mapSuppressedHaptics.has(t)
            ? this.m_mapSuppressedHaptics.set(
                t,
                r(this.m_mapSuppressedHaptics.get(t), o),
              )
            : this.m_mapSuppressedHaptics.set(t, o);
        }
        unsuppressHaptics(t, e) {
          const n = new Set(e);
          var o, s;
          void 0 === e
            ? this.m_mapSuppressedHaptics.delete(t)
            : this.m_mapSuppressedHaptics.has(t) ||
              this.m_mapSuppressedHaptics.set(
                t,
                ((o = this.m_mapSuppressedHaptics.get(t)),
                (s = n),
                new Set([...o].filter((t) => !s.has(t)))),
              );
        }
        isHapticSuppressed(t) {
          return Array.from(this.m_mapSuppressedHaptics.values()).some((e) =>
            e.has(t),
          );
        }
        triggerHaptic(t) {
          (0, o.R$)() != o.OH.Overlay ||
            this.isHapticSuppressed(t) ||
            null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VROverlay.TriggerOverlayHapticEffect(
              VRHTML.VROverlay.ThisOverlayHandle(),
              t,
            );
        }
      }
      a.s_Instance = null;
    },
    4963: (t, e, n) => {
      n.d(e, { j: () => o, u: () => a });
      var o,
        s = n(1635),
        r = n(6090);
      !(function (t) {
        (t[(t.DashboardOpen = 0)] = "DashboardOpen"),
          (t[(t.DashboardClose = 1)] = "DashboardClose"),
          (t[(t.ControlBarButtonClick = 2)] = "ControlBarButtonClick"),
          (t[(t.ButtonClick = 3)] = "ButtonClick"),
          (t[(t.SurfaceClick = 4)] = "SurfaceClick"),
          (t[(t.VolumePreview = 5)] = "VolumePreview"),
          (t[(t.Grab = 6)] = "Grab"),
          (t[(t.GrabRelease = 7)] = "GrabRelease"),
          (t[(t.PagedSettingsNavigation = 8)] = "PagedSettingsNavigation");
      })(o || (o = {}));
      class a {
        constructor() {
          this.m_mapSoundElems = new Map();
        }
        static get Instance() {
          return a.s_Instance || (a.s_Instance = new a()), a.s_Instance;
        }
        preloadSounds() {
          if (!((0, r.R$)() != r.OH.Overlay || this.m_mapSoundElems.size > 0))
            for (let t in o) isNaN(Number(t)) || this.loadSounds(Number(t));
        }
        playSound(t) {
          return (0, s.sH)(this, void 0, void 0, function* () {
            if ((0, r.R$)() != r.OH.Overlay) return;
            if (null == t) return;
            const e = this.getAudioElems(t);
            if (!e || 0 == e.length) return;
            const n = e[Math.floor(Math.random() * e.length)];
            n.pause(), (n.currentTime = 0);
            try {
              yield n.play();
            } catch (e) {
              console.error(
                `Failed to play sound effect "${o[t]}" (${n.src}, networkState=${n.networkState}, readyState=${n.readyState})`,
              );
            }
          });
        }
        loadSounds(t) {
          const e = a.Sources[t],
            n = e.source;
          if (!n) return void this.m_mapSoundElems.set(t, []);
          const o = ("string" == typeof n ? [n] : n).map((t) => {
            var n, o;
            let s = document.createElement("audio");
            return (
              (s.src = `${t}?t=${(new Date()).getTime()}`),
              (s.preload = "auto"),
              (s.volume = null !== (n = e.volume) && void 0 !== n ? n : 1),
              (null === (o = e.bRespectsGlobalVolume) || void 0 === o || o) &&
                (s.volume *= 1),
              s
            );
          });
          this.m_mapSoundElems.set(t, o);
        }
        getAudioElems(t) {
          return (
            this.m_mapSoundElems.has(t) ||
              (console.warn(
                "Playing a sound which was not preloaded. Consider calling SoundEffects.Instance.preloadSounds().",
              ),
              this.loadSounds(t)),
            this.m_mapSoundElems.get(t)
          );
        }
      }
      (a.Sources = {
        [o.DashboardOpen]: { source: "" },
        [o.DashboardClose]: { source: "" },
        [o.ControlBarButtonClick]: {
          source: "/dashboard/sounds/deck_ui_misc_10.wav",
        },
        [o.ButtonClick]: { source: "/dashboard/sounds/deck_ui_misc_10.wav" },
        [o.SurfaceClick]: { source: "" },
        [o.VolumePreview]: {
          source: "/dashboard/sounds/volume_change.wav",
          bRespectsGlobalVolume: !1,
        },
        [o.Grab]: { source: "" },
        [o.GrabRelease]: { source: "/dashboard/sounds/deck_ui_misc_10.wav" },
        [o.PagedSettingsNavigation]: {
          source: "/dashboard/sounds/deck_ui_navigation.wav",
        },
      }),
        (a.s_Instance = null);
    },
    1532: (t, e, n) => {
      n.d(e, { s: () => p });
      var o = n(1635),
        s = n(3236),
        r = n(2505),
        a = n.n(r),
        l = n(7813);
      class i {
        constructor() {
          (this.m_Applications = l.observable.map()),
            (this.m_sceneApplicationStateChangedEventHandle = null),
            (0, l.makeObservable)(this);
        }
        Init() {
          return (0, o.sH)(this, void 0, void 0, function* () {
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
        SetApplicationMap(t) {
          var e;
          this.m_Applications.clear(),
            null === (e = t.apps) ||
              void 0 === e ||
              e.forEach((t) => {
                this.m_Applications.set(t.key, t);
              });
        }
        UpdateApplications() {
          return (0, o.sH)(this, void 0, void 0, function* () {
            yield this.QueryApplications().then((t) => {
              this.SetApplicationMap(t);
            });
          });
        }
        QueryApplications() {
          return new Promise(function (t, e) {
            a()
              .get("/app/list.json")
              .then((e) => {
                t(e.data);
              })
              .catch((t) => {
                e(t);
              });
          });
        }
        GetAppImageURL(t) {
          var e;
          return (
            "/app/image?app_key=" +
            t +
            "&version=" +
            (null !==
              (e =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.SteamVRVersion()) && void 0 !== e
              ? e
              : "0")
          );
        }
        GetApp(t) {
          return this.m_Applications.has(t)
            ? this.m_Applications.get(t)
            : void 0;
        }
        GetRecentApps() {
          let t = [];
          return (
            this.m_Applications.forEach((e) => {
              e.is_internal || t.push(e);
            }),
            t.sort((t, e) =>
              t.last_launch < e.last_launch
                ? 1
                : t.last_launch > e.last_launch
                  ? -1
                  : t.name < e.name
                    ? 1
                    : t.name > e.name
                      ? -1
                      : 0,
            ),
            t
          );
        }
        GetCurrentSceneProcess() {
          let t;
          return (
            this.m_Applications.forEach((e) => {
              e.current_scene_process && !e.is_internal && (t = e);
            }),
            t
          );
        }
        GetRunningApps() {
          let t = [];
          for (let e of this.m_Applications.values()) e.pid && t.push(e);
          return t;
        }
        FindAppByPid(t) {
          for (let e of this.m_Applications.values()) if (e.pid == t) return e;
        }
        IsAppAllowedPrivateInputs(t) {
          return "openvr.component.vrcompositor" == t;
        }
        ShouldShowBindingFailureForApp(t) {
          if (null == t || "" == t) return !1;
          if ("openvr.component.vrcompositor" == t) return !0;
          if (null == this.GetApp(t)) return !1;
          let e = this.GetCurrentSceneProcess();
          return null != e && e.key == t;
        }
      }
      (0, o.Cg)([l.observable], i.prototype, "m_Applications", void 0),
        (0, o.Cg)([s.o], i.prototype, "onSceneApplicationStateChanged", null),
        (0, o.Cg)([l.action], i.prototype, "SetApplicationMap", null),
        (0, o.Cg)([s.o], i.prototype, "QueryApplications", null),
        (0, o.Cg)([s.o], i.prototype, "GetAppImageURL", null),
        (0, o.Cg)([s.o], i.prototype, "GetApp", null),
        (0, o.Cg)([s.o], i.prototype, "GetRecentApps", null),
        (0, o.Cg)([s.o], i.prototype, "GetCurrentSceneProcess", null),
        (0, o.Cg)([s.o], i.prototype, "IsAppAllowedPrivateInputs", null),
        (0, o.Cg)([s.o], i.prototype, "ShouldShowBindingFailureForApp", null);
      const p = new i();
      window.applications = p;
    },
    9118: (t, e, n) => {
      n.d(e, { W: () => c });
      var o = n(1635),
        s = n(7813),
        r = n(2505),
        a = n.n(r),
        l = n(3236),
        i = n(3714),
        p = n(6090);
      class u {
        constructor() {
          (this.m_InputState = void 0),
            (this.m_KnownControllerTypes = s.observable.map()),
            (this.m_mailbox = new p._n()),
            (this.m_bUpdateInputStateOnControllerTypChange = !1),
            (0, s.makeObservable)(this);
        }
        Init(t) {
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
            null != t && (this.m_bUpdateInputStateOnControllerTypChange = t),
            this.GetInputState()
          );
        }
        OnActionBindingsReloaded() {
          this.GetInputState();
        }
        OnControllerTypeChanged(t) {
          this.UpdateControllerTypes(t.controller_types),
            this.m_InputState &&
              (this.m_InputState.controller_types = t.controller_types),
            this.m_bUpdateInputStateOnControllerTypChange &&
              this.GetInputState();
        }
        get ConnectedDevices() {
          return null == this.m_InputState
            ? []
            : this.m_InputState.devices.filter(
                (t) =>
                  "TrackedDeviceClass_Controller" == t.class ||
                  "TrackedDeviceClass_HMD" == t.class ||
                  "TrackedDeviceClass_GenericTracker" == t.class,
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
        GetControllerTypeInfo(t) {
          return this.m_InputState.controller_types.find(
            (e) => e.controller_type == t,
          );
        }
        GetDeviceInfo(t) {
          for (let e of this.m_InputState.devices)
            if (e.root_path == t || e.device_path == t) return e;
          return null;
        }
        LocalizeControllerString(t, e) {
          let n = (0, i.we)("#" + e);
          return n != "#" + e
            ? n
            : t &&
                this.m_InputState &&
                this.m_InputState.localization.hasOwnProperty(
                  t.resource_root,
                ) &&
                this.m_InputState.localization[t.resource_root].hasOwnProperty(
                  e.toLowerCase(),
                )
              ? this.m_InputState.localization[t.resource_root][e.toLowerCase()]
              : e;
        }
        LocalizeDriverString(t, e) {
          if (
            this.m_InputState &&
            this.m_InputState.localization.hasOwnProperty(t) &&
            this.m_InputState.localization[t].hasOwnProperty(e.toLowerCase())
          )
            return this.m_InputState.localization[t][e.toLowerCase()];
          let n = (0, i.we)("#" + e);
          return n != "#" + e ? n : e;
        }
        UpdateControllerTypes(t) {
          this.m_KnownControllerTypes.clear();
          for (let e of t)
            this.m_KnownControllerTypes.set(e.controller_type, e);
        }
        GetInputState() {
          return (0, o.sH)(this, void 0, void 0, function* () {
            yield new Promise(function (t, e) {
              a()
                .get("/input/getstate.json")
                .then((e) => {
                  t(e.data);
                })
                .catch((t) => {
                  e(t);
                });
            }).then((t) => {
              (0, s.runInAction)(() => {
                for (let e of t.controller_types)
                  e.controller_type = e.controller_type.toLowerCase();
                for (let e of t.devices)
                  e.controller_type = e.controller_type.toLowerCase();
                this.UpdateControllerTypes(t.controller_types),
                  (this.m_InputState = t);
              });
            });
          });
        }
        get KnownControllerTypes() {
          return this.m_KnownControllerTypes;
        }
        FindDeviceClassForControllerType(t) {
          let e = this.GetControllerTypeInfo(t);
          return null == e ? void 0 : e.device_class;
        }
        FindRootPathForControllerType(t) {
          for (let e of this.m_InputState.devices)
            if (e.controller_type == t) return e.root_path;
          return null;
        }
      }
      (0, o.Cg)([s.observable], u.prototype, "m_InputState", void 0),
        (0, o.Cg)(
          [s.observable],
          u.prototype,
          "m_KnownControllerTypes",
          void 0,
        ),
        (0, o.Cg)([l.o], u.prototype, "OnActionBindingsReloaded", null),
        (0, o.Cg)([l.o], u.prototype, "OnControllerTypeChanged", null),
        (0, o.Cg)([s.computed], u.prototype, "ConnectedDevices", null),
        (0, o.Cg)([s.computed], u.prototype, "ControllerTypes", null),
        (0, o.Cg)(
          [s.computed],
          u.prototype,
          "ShouldSendSystemButtonToAllApps",
          null,
        ),
        (0, o.Cg)([s.computed], u.prototype, "ShowHiddenInputs", null),
        (0, o.Cg)([s.computed], u.prototype, "IsSteamAvailable", null),
        (0, o.Cg)([s.computed], u.prototype, "BDevMode", null),
        (0, o.Cg)([s.computed], u.prototype, "IsValid", null),
        (0, o.Cg)([s.computed], u.prototype, "CurrentUserPersonaName", null),
        (0, o.Cg)([l.o], u.prototype, "GetControllerTypeInfo", null),
        (0, o.Cg)([l.o], u.prototype, "LocalizeControllerString", null),
        (0, o.Cg)([l.o], u.prototype, "LocalizeDriverString", null),
        (0, o.Cg)([s.action], u.prototype, "UpdateControllerTypes", null),
        (0, o.Cg)([s.action], u.prototype, "GetInputState", null),
        (0, o.Cg)([s.computed], u.prototype, "KnownControllerTypes", null),
        (0, o.Cg)([l.o], u.prototype, "FindDeviceClassForControllerType", null);
      const c = new u();
      window.inputState = c;
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~ea7821330.js.map
