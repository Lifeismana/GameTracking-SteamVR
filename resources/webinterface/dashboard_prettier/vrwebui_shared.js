/*!
 * (c) Valve Corporation. Use is governed by the terms of the Steam Subscriber Agreement http://store.steampowered.com/subscriber_agreement/.
 *
 */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    "/CXA": function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return p;
      }),
        n.d(t, "c", function () {
          return h;
        }),
        n.d(t, "a", function () {
          return m;
        });
      var i,
        o = n("mrSG"),
        s = n("q1tI"),
        r = n("7wIv"),
        a = n("hcOo"),
        l = n("2vnA"),
        c = n("okNM");
      const d = s.createContext(null);
      class u {
        constructor() {
          (this.m_stack = l.m.array([])),
            (this.m_bSViewtackWasChangedInThisCallStack = !0),
            (this.m_nCallStackClearedTimeout = 0),
            window.addEventListener("keydown", this.onWindowKeyDown),
            window.addEventListener("click", this.onWindowClick);
        }
        cleanup() {
          clearTimeout(this.m_nCallStackClearedTimeout),
            window.removeEventListener("keydown", this.onWindowKeyDown),
            window.removeEventListener("click", this.onWindowClick);
        }
        onWindowKeyDown(e) {
          "Escape" == e.key && this.dismissTopView();
        }
        onWindowClick(e) {
          const t = this.topView;
          t &&
            t.div &&
            !this.m_bSViewtackWasChangedInThisCallStack &&
            (t.shouldDismissOnClickAnywhere ||
              t.shouldDismissOnClickInViewStack) &&
            !t.isPointInDiv(e.clientX, e.clientY) &&
            (t.shouldDismissOnClickAnywhere ||
              t == this.bottomView ||
              t
                .getViewsBelow()
                .some((t) => t.isPointInDiv(e.clientX, e.clientY))) &&
            t.dismissView();
        }
        get size() {
          return this.m_stack.length;
        }
        dismissTopView() {
          var e;
          null === (e = this.topView) || void 0 === e || e.dismissView();
        }
        get hasViews() {
          return this.m_stack.length > 0;
        }
        get bottomView() {
          return this.hasViews ? this.m_stack[0] : null;
        }
        get topView() {
          return this.hasViews ? this.m_stack[this.m_stack.length - 1] : null;
        }
        getViewsBelow(e) {
          const t = this.m_stack.indexOf(e);
          return t < 0 ? [] : this.m_stack.slice(0, t);
        }
        getViewsAbove(e) {
          const t = this.m_stack.indexOf(e);
          return t < 0 ? [] : this.m_stack.slice(t + 1);
        }
        getViewLevel(e) {
          return this.m_stack.indexOf(e);
        }
        pushView(e) {
          this.m_stack.push(e), this.setViewJustAddedOrRemoved();
        }
        removeView(e) {
          this.m_stack.splice(this.m_stack.indexOf(e), 1),
            this.setViewJustAddedOrRemoved();
        }
        setViewJustAddedOrRemoved() {
          clearTimeout(this.m_nCallStackClearedTimeout),
            (this.m_bSViewtackWasChangedInThisCallStack = !0),
            (this.m_nCallStackClearedTimeout = setTimeout(
              () => (this.m_bSViewtackWasChangedInThisCallStack = !1),
              0
            ));
        }
      }
      Object(o.b)([r.bind], u.prototype, "cleanup", null),
        Object(o.b)([r.bind], u.prototype, "onWindowKeyDown", null),
        Object(o.b)([r.bind], u.prototype, "onWindowClick", null),
        Object(o.b)([l.f], u.prototype, "size", null),
        Object(o.b)([l.d.bound], u.prototype, "dismissTopView", null),
        Object(o.b)([l.f], u.prototype, "hasViews", null),
        Object(o.b)([l.f], u.prototype, "bottomView", null),
        Object(o.b)([l.f], u.prototype, "topView", null),
        Object(o.b)([l.d], u.prototype, "pushView", null),
        Object(o.b)([l.d], u.prototype, "removeView", null);
      let p = (i = class extends s.Component {
        constructor(e) {
          super(e),
            (this.m_viewRef = s.createRef()),
            (this.m_newViewStack = null);
        }
        get viewStack() {
          return this.context
            ? this.context
            : (null === this.m_newViewStack && (this.m_newViewStack = new u()),
              this.m_newViewStack);
        }
        get isTopView() {
          return this.viewStack.topView == this;
        }
        getViewsBelow() {
          return this.viewStack.getViewsBelow(this);
        }
        getViewsAbove() {
          return this.viewStack.getViewsAbove(this);
        }
        get viewLevel() {
          return this.viewStack.getViewLevel(this);
        }
        get viewShouldFadeForModal() {
          return this.getViewsAbove().some((e) => e.fadesViewsBelow);
        }
        get shouldDismissOnClickInViewStack() {
          var e;
          return null != (e = this.props.shouldDismissOnClickInViewStack) && e;
        }
        get shouldDismissOnClickAnywhere() {
          var e;
          return null != (e = this.props.shouldDismissOnClickAnywhere) && e;
        }
        get fadesViewsBelow() {
          var e;
          return null != (e = this.props.fadesViewsBelow) && e;
        }
        dismissView() {
          var e, t;
          null === (t = (e = this.props).onDismissRequested) ||
            void 0 === t ||
            t.call(e);
        }
        get div() {
          return this.m_viewRef.current;
        }
        isPointInDiv(e, t) {
          if (!this.div) return !1;
          const n = this.div.getBoundingClientRect();
          return e >= n.left && e <= n.right && t >= n.top && t <= n.bottom;
        }
        componentDidMount() {
          this.viewStack.pushView(this);
        }
        componentWillUnmount() {
          var e;
          this.viewStack.removeView(this),
            null === (e = this.m_newViewStack) || void 0 === e || e.cleanup();
        }
        render() {
          let e = Object.assign({}, this.props);
          delete e.shouldDismissOnClickAnywhere,
            delete e.shouldDismissOnClickInViewStack,
            delete e.fadesViewsBelow,
            delete e.onDismissRequested;
          const t = s.createElement(
            "div",
            Object.assign({}, e, {
              className: Object(a.a)(
                "View",
                [i.k_FadedForModalClassName, this.viewShouldFadeForModal],
                e.className
              ),
              style: Object.assign(Object.assign({}, e.style), {
                zIndex: 3e3 + this.viewLevel,
              }),
              ref: this.m_viewRef,
            }),
            e.children
          );
          return null === this.context
            ? s.createElement(d.Provider, { value: this.viewStack }, t)
            : t;
        }
      });
      (p.k_FadedForModalClassName = "FadedForModal"),
        (p.contextType = d),
        Object(o.b)([l.f], p.prototype, "viewStack", null),
        Object(o.b)([l.f], p.prototype, "isTopView", null),
        Object(o.b)([l.f], p.prototype, "viewLevel", null),
        Object(o.b)([l.f], p.prototype, "viewShouldFadeForModal", null),
        Object(o.b)([r.bind], p.prototype, "dismissView", null),
        (p = i = Object(o.b)([c.a], p));
      const h = s.forwardRef((e, t) =>
        s.createElement(p, Object.assign({}, e, { ref: t }), e.children)
      );
      let m = class extends s.Component {
        constructor(e) {
          super(e), (this.state = { viewStack: null });
        }
        setFloatingViewStack(e) {
          this.setState({ viewStack: e });
        }
        render() {
          var e, t, n;
          const i =
            null !=
              (n =
                null ===
                  (t =
                    null === (e = this.state.viewStack) || void 0 === e
                      ? void 0
                      : e.bottomView) || void 0 === t
                  ? void 0
                  : t.viewShouldFadeForModal) && n;
          return s.createElement(
            "div",
            Object.assign({}, this.props, {
              className: Object(a.a)(
                "View",
                [p.k_FadedForModalClassName, i],
                this.props.className
              ),
            }),
            this.props.children
          );
        }
      };
      m = Object(o.b)([c.a], m);
    },
    "39GS": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var i = n("mrSG"),
        o = n("7wIv"),
        s = n.n(o),
        r = n("2vnA");
      class a {
        constructor() {
          var e;
          (this.m_volumeChangedEventHandle = null),
            (this.m_nVolume = 0),
            (this.m_nMirrorVolume = 0),
            (this.m_nMicrophoneVolume = 0),
            (this.m_bMuted = !1),
            (this.m_bMirrorMuted = !1),
            (this.m_bMicrophoneMuted = !1),
            (this.m_volumeChangedEventHandle =
              null === (e = VRHTML) || void 0 === e
                ? void 0
                : e.VRAudioDevices.RegisterForVolumeChangedEvents(
                    this.onSystemVolumeChanged
                  )),
            this.onSystemVolumeChanged();
        }
        static get Instance() {
          return a.s_Instance || (a.s_Instance = new a()), a.s_Instance;
        }
        get muted() {
          return this.m_bMuted;
        }
        get mirrorMuted() {
          return this.m_bMirrorMuted;
        }
        get microphoneMuted() {
          return this.m_bMicrophoneMuted;
        }
        get volume() {
          return this.m_nVolume;
        }
        get mirrorVolume() {
          return this.m_nMirrorVolume;
        }
        get microphoneVolume() {
          return this.m_nMicrophoneVolume;
        }
        cleanup() {
          this.m_volumeChangedEventHandle &&
            (this.m_volumeChangedEventHandle.unregister(),
            (this.m_volumeChangedEventHandle = null));
        }
        toggleMute() {
          var e;
          (this.m_bMuted = !this.m_bMuted),
            null === (e = VRHTML) ||
              void 0 === e ||
              e.VRAudioDevices.SetMasterSoundVolumeMute(this.m_bMuted);
        }
        toggleMirrorMute() {
          var e;
          (this.m_bMirrorMuted = !this.m_bMirrorMuted),
            null === (e = VRHTML) ||
              void 0 === e ||
              e.VRAudioDevices.SetMirrorSoundVolumeMute(this.m_bMirrorMuted);
        }
        toggleMicrophoneMute() {
          var e;
          (this.m_bMicrophoneMuted = !this.m_bMicrophoneMuted),
            null === (e = VRHTML) ||
              void 0 === e ||
              e.VRAudioDevices.SetMasterMicrophoneMute(this.m_bMicrophoneMuted);
        }
        setVolume(e) {
          var t, n;
          (e = Math.max(0, Math.min(1, e))) != this.m_nVolume &&
            ((this.m_nVolume = e),
            (this.m_bMuted = 0 == e),
            null === (t = VRHTML) ||
              void 0 === t ||
              t.VRAudioDevices.SetMasterSoundVolume(this.m_nVolume),
            null === (n = VRHTML) ||
              void 0 === n ||
              n.VRAudioDevices.SetMasterSoundVolumeMute(this.m_bMuted));
        }
        setMirrorVolume(e) {
          var t, n;
          (e = Math.max(0, Math.min(1, e))) != this.m_nMirrorVolume &&
            ((this.m_nMirrorVolume = e),
            (this.m_bMirrorMuted = 0 == e),
            null === (t = VRHTML) ||
              void 0 === t ||
              t.VRAudioDevices.SetMirrorSoundVolume(this.m_nMirrorVolume),
            null === (n = VRHTML) ||
              void 0 === n ||
              n.VRAudioDevices.SetMirrorSoundVolumeMute(this.m_bMirrorMuted));
        }
        setMicrophoneVolume(e) {
          var t, n;
          (e = Math.max(0, Math.min(1, e))) != this.m_nMicrophoneVolume &&
            ((this.m_nMicrophoneVolume = e),
            (this.m_bMicrophoneMuted = 0 == e),
            null === (t = VRHTML) ||
              void 0 === t ||
              t.VRAudioDevices.SetMasterMicrophoneVolume(
                this.m_nMicrophoneVolume
              ),
            null === (n = VRHTML) ||
              void 0 === n ||
              n.VRAudioDevices.SetMasterMicrophoneMute(
                this.m_bMicrophoneMuted
              ));
        }
        onSystemVolumeChanged() {
          VRHTML &&
            ((this.m_nVolume = VRHTML.VRAudioDevices.GetMasterSoundVolume()),
            (this.m_bMuted = VRHTML.VRAudioDevices.IsMasterSoundVolumeMute()),
            (this.m_nMirrorVolume =
              VRHTML.VRAudioDevices.GetMirrorSoundVolume()),
            (this.m_bMirrorMuted =
              VRHTML.VRAudioDevices.IsMirrorSoundVolumeMute()),
            (this.m_nMicrophoneVolume =
              VRHTML.VRAudioDevices.GetMasterMicrophoneVolume()),
            (this.m_bMicrophoneMuted =
              VRHTML.VRAudioDevices.IsMasterMicrophoneMute()));
        }
      }
      (a.s_Instance = null),
        Object(i.b)([r.m], a.prototype, "m_nVolume", void 0),
        Object(i.b)([r.m], a.prototype, "m_nMirrorVolume", void 0),
        Object(i.b)([r.m], a.prototype, "m_nMicrophoneVolume", void 0),
        Object(i.b)([r.m], a.prototype, "m_bMuted", void 0),
        Object(i.b)([r.m], a.prototype, "m_bMirrorMuted", void 0),
        Object(i.b)([r.m], a.prototype, "m_bMicrophoneMuted", void 0),
        Object(i.b)([r.f], a.prototype, "muted", null),
        Object(i.b)([r.f], a.prototype, "mirrorMuted", null),
        Object(i.b)([r.f], a.prototype, "microphoneMuted", null),
        Object(i.b)([r.f], a.prototype, "volume", null),
        Object(i.b)([r.f], a.prototype, "mirrorVolume", null),
        Object(i.b)([r.f], a.prototype, "microphoneVolume", null),
        Object(i.b)([s.a], a.prototype, "toggleMute", null),
        Object(i.b)([s.a], a.prototype, "toggleMirrorMute", null),
        Object(i.b)([s.a], a.prototype, "toggleMicrophoneMute", null),
        Object(i.b)([s.a], a.prototype, "setVolume", null),
        Object(i.b)([s.a], a.prototype, "setMirrorVolume", null),
        Object(i.b)([s.a], a.prototype, "setMicrophoneVolume", null),
        Object(i.b)([s.a], a.prototype, "onSystemVolumeChanged", null);
    },
    "5/du": function (e, t, n) {
      "use strict";
      var i = n("mrSG"),
        o = n("q1tI"),
        s = n.n(o),
        r = n("okNM"),
        a = n("/i/y"),
        l = n("GXif"),
        c = n("Q+Z6"),
        d = n("TbT/"),
        u = n("7wIv"),
        p = n.n(u),
        h = n("GxMB");
      let m = class extends d.b {
        constructor(e) {
          super(e),
            (this.m_audioDeviceChangedEventHandle = null),
            (this.state = this.defaultState);
        }
        get defaultState() {
          return {};
        }
        componentDidMount() {
          var e;
          this.m_audioDeviceChangedEventHandle =
            null === (e = VRHTML) || void 0 === e
              ? void 0
              : e.VRAudioDevices.RegisterForDeviceChangedEvents(
                  this.onAudioDeviceChanged
                );
        }
        onAudioDeviceChanged() {}
        getHmdAudioSettingsKey(e) {
          return (
            "/settings/audio/" +
            c.d.audioDevices.hmd_settings_key.replace("{setting}", e)
          );
        }
        temporaryDropdownOverride(e, t) {
          e.indexOf("Mirror") >= 0
            ? (c.d.audioDevices.selected_mirror_device = t)
            : e.indexOf("playback") >= 0
            ? (c.d.audioDevices.selected_playback_device = t)
            : e.indexOf("recording") >= 0 &&
              (c.d.audioDevices.selected_recording_device = t);
        }
        setDeviceSetting(e, t, n) {
          n &&
            (c.d.SetSettingsValue(e, n.guid),
            c.d.SetSettingsValue(t, n.name),
            this.temporaryDropdownOverride(e, n.guid));
        }
        setDeviceOverride(e, t) {
          this.setDeviceSetting(
            this.getHmdAudioSettingsKey(e),
            this.getHmdAudioSettingsKey(e + "Name"),
            t
          );
        }
        getAudioDevice(e) {
          return e
            ? c.d.audioDevices.playback_devices
                .concat(c.d.audioDevices.record_devices)
                .find((t) => t.guid == e)
            : { guid: "", name: "" };
        }
        onOverrideDeviceDropdownChanged(e, t) {
          this.setDeviceOverride(e, this.getAudioDevice(t));
        }
        onMirrorDeviceDropdownChanged(e) {
          this.setDeviceSetting(
            "/settings/audio/playbackMirrorDevice",
            "/settings/audio/playbackMirrorDeviceName",
            this.getAudioDevice(e)
          );
        }
        makeDeviceChoiceList(e) {
          let t = [];
          t.push({ value: "", sLabel: Object(l.c)("#Settings_Audio_Default") }),
            t.push(h.b.Separator);
          for (let n of e) t.push({ value: n.guid, sLabel: n.name });
          return t;
        }
        render() {
          var e, t, n, i;
          if (!this.props.active) return null;
          if (void 0 === c.d.audioDevices) return null;
          let s =
              null !=
                (t =
                  null === (e = VRHTML) || void 0 === e
                    ? void 0
                    : e.VRProperties.GetBoolProperty(
                        "/user/head",
                        a.y.Audio_SupportsDualSpeakerAndJackOutput_Bool
                      )) && t,
            r =
              null !=
                (i =
                  null === (n = VRHTML) || void 0 === n
                    ? void 0
                    : n.VRProperties.GetBoolProperty(
                        "/user/head",
                        a.y.Hmd_SupportsMicMonitoring_Bool
                      )) && i,
            u = !1;
          try {
            u =
              "htc" ==
                c.d.settings
                  .get("/settings/LastKnown/HMDManufacturer")
                  .toLowerCase() &&
              c.d.settings
                .get("/settings/LastKnown/HMDModel")
                .toLowerCase()
                .indexOf("vive") >= 0;
          } catch (e) {}
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(d.n, {
              name: this.getHmdAudioSettingsKey("enablePlaybackDeviceOverride"),
              label: Object(l.c)("#Settings_Audio_Playback_Automatic_Label"),
              offLabel: Object(l.c)("#Settings_Audio_Headset"),
              onLabel: Object(l.c)("#Settings_Audio_Manual"),
              onSubsection: o.createElement(d.h, {
                items: this.makeDeviceChoiceList(
                  c.d.audioDevices.playback_devices
                ),
                value: c.d.audioDevices.selected_playback_device,
                onChange: this.onOverrideDeviceDropdownChanged.bind(
                  this,
                  "playbackDeviceOverride"
                ),
                defaultLabel: Object(l.c)(
                  "#Settings_Audio_Current_Setting_Unknown"
                ),
              }),
            }),
            o.createElement(d.n, {
              name: this.getHmdAudioSettingsKey(
                "enableRecordingDeviceOverride"
              ),
              label: Object(l.c)("#Settings_Audio_Recording_Automatic_Label"),
              offLabel: Object(l.c)("#Settings_Audio_Headset"),
              onLabel: Object(l.c)("#Settings_Audio_Manual"),
              onSubsection: o.createElement(d.h, {
                items: this.makeDeviceChoiceList(
                  c.d.audioDevices.record_devices
                ),
                value: c.d.audioDevices.selected_recording_device,
                onChange: this.onOverrideDeviceDropdownChanged.bind(
                  this,
                  "recordingDeviceOverride"
                ),
                defaultLabel: Object(l.c)(
                  "#Settings_Audio_Current_Setting_Unknown"
                ),
              }),
            }),
            o.createElement(d.n, {
              name: "/settings/audio/enablePlaybackMirror",
              label: Object(l.c)("#Settings_Audio_Mirroring_Label"),
              onSubsection: o.createElement(
                o.Fragment,
                null,
                o.createElement(d.h, {
                  items: this.makeDeviceChoiceList(
                    c.d.audioDevices.playback_devices
                  ),
                  value: c.d.audioDevices.selected_mirror_device,
                  onChange: this.onMirrorDeviceDropdownChanged,
                  defaultLabel: Object(l.c)(
                    "#Settings_Audio_Current_Setting_Unknown"
                  ),
                }),
                o.createElement(d.n, {
                  name: "/settings/audio/enablePlaybackMirrorIndependentVolume",
                  label: Object(l.c)(
                    "#Settings_Audio_Mirroring_Independent_Volume_Label"
                  ),
                  visibility: d.d.Advanced,
                })
              ),
            }),
            u &&
              o.createElement(d.n, {
                name: "/settings/audio/viveHDMIGain",
                label: Object(l.c)("#Settings_Audio_HDMIGain"),
              }),
            s &&
              o.createElement(d.n, {
                name: "/settings/audio/dualSpeakerAndJackOutput",
                label: Object(l.c)("#Settings_Audio_SpeakerJackOutput"),
                offLabel: Object(l.c)("#Settings_Audio_Single"),
                onLabel: Object(l.c)("#Settings_Audio_Dual"),
                title: Object(l.c)("#Settings_Audio_SpeakerJackOutput_Title"),
              }),
            r &&
              o.createElement(d.n, {
                name: "/settings/audio/muteMicMonitor",
                label: Object(l.c)("#Settings_Audio_MicMonitor"),
                offLabel: Object(l.c)("#Settings_Audio_Active"),
                onLabel: Object(l.c)("#Settings_Audio_Muted"),
              })
          );
        }
      };
      (m.Name = "audio_settings"),
        Object(i.b)([u.bind], m.prototype, "onAudioDeviceChanged", null),
        Object(i.b)(
          [u.bind],
          m.prototype,
          "onOverrideDeviceDropdownChanged",
          null
        ),
        Object(i.b)(
          [u.bind],
          m.prototype,
          "onMirrorDeviceDropdownChanged",
          null
        ),
        (m = Object(i.b)([r.a], m));
      var b,
        g,
        S = n("vzqD"),
        _ = n("6YgL"),
        f = n("7uy8"),
        v = n("2vnA"),
        y = n("X3sx");
      !(function (e) {
        (e[(e.DEFAULT = 0)] = "DEFAULT"),
          (e[(e.EDGE_A = 1)] = "EDGE_A"),
          (e[(e.EDGE_B = 2)] = "EDGE_B"),
          (e[(e.VIDEO_TRANSLUCENT = 3)] = "VIDEO_TRANSLUCENT"),
          (e[(e.VIDEO_OPAQUE = 4)] = "VIDEO_OPAQUE"),
          (e[(e.COUNT = 5)] = "COUNT");
      })(b || (b = {})),
        (function (e) {
          (e[(e.Evaluating = 0)] = "Evaluating"),
            (e[(e.Success = 1)] = "Success"),
            (e[(e.Failure = 2)] = "Failure");
        })(g || (g = {}));
      class O extends o.Component {
        constructor(e) {
          super(e),
            (this.m_imageRef = o.createRef()),
            (this.m_cameraFrameCount = 0),
            (this.state = O.DefaultState);
        }
        static get DefaultState() {
          return {
            bShowTest: !1,
            streamingProgress: g.Evaluating,
            trackingProgress: g.Evaluating,
          };
        }
        componentWillUnmount() {
          this.stopTest();
        }
        updateStatus() {
          let e = Date.now() - this.m_startTestTime;
          this.state.streamingProgress == g.Evaluating &&
            (this.m_cameraFrameCount > 0
              ? this.setState({ streamingProgress: g.Success })
              : e > 5e3 && this.setState({ streamingProgress: g.Failure }));
          let t = VRHTML.GetPose(a.ob, a.A.Standing);
          if (this.m_cameraFrameCount > 0) {
            t.bPoseIsValid || this.setState({ trackingProgress: g.Failure }),
              Date.now() - this.m_firstFrameTime > 2e3 &&
                this.state.trackingProgress == g.Evaluating &&
                this.setState({ trackingProgress: g.Success });
          }
        }
        onUpdateCameraFrame() {
          let e = "";
          try {
            (e = VRHTML.VRTrackedCameraInternal.GetCameraTestFrame()),
              0 == this.m_cameraFrameCount &&
                (this.m_firstFrameTime = Date.now()),
              this.m_cameraFrameCount++;
          } catch (e) {}
          this.m_imageRef.current && (this.m_imageRef.current.src = e),
            this.updateStatus();
        }
        startTest() {
          this.setState({ bShowTest: !0 }),
            VRHTML.VRTrackedCameraInternal.StartCameraTest(),
            (this.m_startTestTime = Date.now()),
            (this.m_cameraFrameCount = 0),
            this.m_imageRef.current && (this.m_imageRef.current.src = ""),
            (this.m_updateInterval = window.setInterval(
              this.onUpdateCameraFrame,
              100
            )),
            this.onUpdateCameraFrame();
        }
        stopTest() {
          this.setState(O.DefaultState),
            VRHTML.VRTrackedCameraInternal.StopCameraTest(),
            window.clearInterval(this.m_updateInterval),
            (this.m_updateInterval = void 0);
        }
        renderStatusLine() {
          return this.state.streamingProgress == g.Evaluating
            ? o.createElement(
                "h1",
                { className: "CameraStatus Evaluating" },
                Object(l.c)("#CameraTest_CheckingCamera")
              )
            : this.state.streamingProgress == g.Failure
            ? o.createElement(
                "h1",
                { className: "CameraStatus Failure" },
                Object(l.c)("#CameraTest_CameraFailed")
              )
            : this.state.trackingProgress == g.Evaluating
            ? o.createElement(
                "h1",
                { className: "CameraStatus Evaluating" },
                Object(l.c)("#CameraTest_CheckingTracking")
              )
            : this.state.trackingProgress == g.Failure
            ? o.createElement(
                "h1",
                { className: "CameraStatus Failure" },
                Object(l.c)("#CameraTest_TrackingFailed")
              )
            : o.createElement(
                "h1",
                { className: "CameraStatus Success" },
                Object(l.c)("#CameraTest_Success")
              );
        }
        render() {
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              "div",
              { className: "SettingsItem CameraTestSettingsItem" },
              o.createElement(
                "div",
                { className: "Label" },
                Object(l.c)("#Settings_CameraTest")
              ),
              o.createElement(
                _.a,
                { className: "ButtonControl", onClick: this.startTest },
                Object(l.c)("#Settings_StartCameraTest")
              )
            ),
            this.state.bShowTest &&
              o.createElement(
                d.i,
                {
                  className: "CameraTest",
                  header: this.renderStatusLine(),
                  onDismissRequested: this.stopTest,
                },
                o.createElement("img", { ref: this.m_imageRef })
              )
          );
        }
      }
      var A;
      Object(i.b)([u.bind], O.prototype, "onUpdateCameraFrame", null),
        Object(i.b)([u.bind], O.prototype, "startTest", null),
        Object(i.b)([u.bind], O.prototype, "stopTest", null),
        (function (e) {
          (e[(e.Off = 0)] = "Off"),
            (e[(e.On2D = 1)] = "On2D"),
            (e[(e.On3D = 2)] = "On3D");
        })(A || (A = {}));
      const C = Object(r.a)(() => {
        var e, t;
        const n =
          null !=
            (t =
              null === (e = VRHTML) || void 0 === e
                ? void 0
                : e.VRProperties.GetBoolProperty(
                    "/user/head",
                    a.y.SupportsRoomViewDepthProjection_Bool
                  )) && t;
        let i = c.d.settings.get(f.e),
          s = [
            { value: A.Off, sLabel: Object(l.c)("#Settings_ToggleButton_Off") },
          ];
        return (
          n || i == A.On3D
            ? (s.push({ value: A.On2D, sLabel: Object(l.c)("#Settings_2D") }),
              s.push({ value: A.On3D, sLabel: Object(l.c)("#Settings_3D") }))
            : s.push({
                value: A.On2D,
                sLabel: Object(l.c)("#Settings_ToggleButton_On"),
              }),
          o.createElement(d.l, {
            label: Object(l.c)("#Settings_Camera_AllowCameraForRoomView"),
            title: Object(l.c)("#Settings_Camera_AllowCameraForRoomView_Desc"),
            items: s,
            value: i,
            onChange: (e) => {
              c.d.SetSettingsValue(f.e, e);
            },
          })
        );
      });
      let w = class extends d.b {
        constructor(e) {
          super(e),
            (this.state = {
              cameraRateValue: this.fetchCameraRate(),
              showCameraTest: !1,
            });
        }
        cameraEnabled() {
          return c.d.settings.get(f.d);
        }
        get cameraSupportsRates() {
          var e, t;
          return (
            null !=
              (t =
                null === (e = VRHTML) || void 0 === e
                  ? void 0
                  : e.VRProperties.GetBoolProperty(
                      "/user/head",
                      a.y.CameraSupportsCompatibilityModes_Bool
                    )) && t
          );
        }
        fetchCameraRate() {
          var e, t;
          if (!this.cameraSupportsRates) return 0;
          return (function (e) {
            switch (e) {
              case a.l.ISO_30FPS:
                return 30;
              case a.l.ISO_35FPS:
                return 35;
              case a.l.ISO_40FPS:
                return 40;
              case a.l.ISO_46FPS:
                return 45;
              case a.l.ISO_50FPS:
                return 50;
              case a.l.BULK_8K_DMA:
                return 55;
              default:
              case a.l.BULK_DEFAULT:
                return 60;
            }
          })(
            null !=
              (t =
                null === (e = VRHTML) || void 0 === e
                  ? void 0
                  : e.VRProperties.GetInt32Property(
                      "/user/head",
                      a.y.CameraCompatibilityMode_Int32
                    ))
              ? t
              : a.l.BULK_DEFAULT
          );
        }
        setCameraRate(e) {
          let t = (function (e) {
            switch (e) {
              case 30:
                return a.l.ISO_30FPS;
              case 35:
                return a.l.ISO_35FPS;
              case 40:
                return a.l.ISO_40FPS;
              case 45:
                return a.l.ISO_46FPS;
              case 50:
                return a.l.ISO_50FPS;
              case 55:
                return a.l.BULK_8K_DMA;
              default:
              case 60:
                return a.l.BULK_DEFAULT;
            }
          })(e);
          VRHTML.VRTrackedCameraInternal.SetCameraCompatibilityMode(t) &&
            c.d.SetRestartRequired();
        }
        onCameraEnabled(e) {
          c.d.SetSettingsValue("/settings/camera/enableCamera", e),
            this.forceUpdate(),
            e || this.onStopCameraTest();
        }
        onCameraRateChanged(e, t) {
          this.setState({ cameraRateValue: t }), this.setCameraRate(t);
        }
        onStartCameraTest() {
          this.setState({ showCameraTest: !0 });
        }
        onStopCameraTest() {
          this.setState({ showCameraTest: !1 });
        }
        get currentRoomViewStyle() {
          let e = c.d.settings.get(f.f);
          return e == b.DEFAULT && (e = b.EDGE_B), e;
        }
        renderEnabledSettings() {
          var e, t;
          let n = !1,
            i = !1;
          switch (this.currentRoomViewStyle) {
            case b.EDGE_A:
              (i = !0), (n = !0);
              break;
            case b.EDGE_B:
              n = !0;
          }
          const s = this.state.cameraRateValue > 0,
            r = c.d.settings.get(f.e),
            u =
              c.d.settings.get(
                "/settings/camera/enableCameraForCollisionBounds"
              ) || r != A.Off;
          let p = [
            {
              value: b.EDGE_A,
              sLabel: Object(l.c)("#Settings_Camera_RoomViewStyle_EdgeA"),
            },
            {
              value: b.EDGE_B,
              sLabel: Object(l.c)("#Settings_Camera_RoomViewStyle_EdgeB"),
            },
            {
              value: b.VIDEO_TRANSLUCENT,
              sLabel: Object(l.c)(
                "#Settings_Camera_RoomViewStyle_VideoTranslucent"
              ),
            },
            {
              value: b.VIDEO_OPAQUE,
              sLabel: Object(l.c)("#Settings_Camera_RoomViewStyle_VideoOpaque"),
            },
          ];
          const h =
            null !=
              (t =
                null === (e = VRHTML) || void 0 === e
                  ? void 0
                  : e.VRProperties.GetBoolProperty(
                      "/user/head",
                      a.y.SupportsRoomViewDepthProjection_Bool
                    )) && t;
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(C, null),
            h &&
              r == A.On3D &&
              o.createElement(
                "div",
                { className: "SettingsItemValueLabel" },
                Object(l.c)("#Settings_Camera_RoomView3D_Experimental")
              ),
            !h &&
              r == A.On3D &&
              o.createElement(
                "div",
                { className: "SettingsItemValueLabel" },
                Object(l.c)("#Settings_Camera_RoomView3D_Unsupported")
              ),
            s &&
              o.createElement(d.m, {
                label: Object(l.c)("#Settings_Camera_Rate_Hz"),
                title: Object(l.c)("#Settings_Camera_CompatibilityExplanation"),
                min: 30,
                max: 60,
                step: 5,
                value: this.state.cameraRateValue,
                onChange: this.onCameraRateChanged.bind(
                  this,
                  "click_activate_threshold"
                ),
                valueStyleVariant: y.c.OnHandle,
                renderValue: (e) => this.state.cameraRateValue.toString(),
              }),
            u &&
              o.createElement(d.h, {
                value: this.currentRoomViewStyle,
                onChange: (e) => c.d.SetSettingsValue(f.f, e),
                label: Object(l.c)("#Settings_Camera_RoomViewStyle"),
                items: p,
                subsection:
                  (i || n) &&
                  o.createElement(
                    o.Fragment,
                    null,
                    n &&
                      o.createElement(d.p, {
                        nameR: "/settings/camera/cameraBoundsColorGammaR",
                        nameG: "/settings/camera/cameraBoundsColorGammaG",
                        nameB: "/settings/camera/cameraBoundsColorGammaB",
                        label: Object(l.c)("#Settings_Chaperone_BoundsColor"),
                      }),
                    i &&
                      o.createElement(d.o, {
                        name: "/settings/camera/cameraBoundsColorGammaA",
                        min: 76.5,
                        max: 255,
                        label: Object(l.c)(
                          "#Settings_Chaperone_BoundsTransparency"
                        ),
                        color: {
                          r: c.d.settings.get(
                            "/settings/camera/cameraBoundsColorGammaR"
                          ),
                          g: c.d.settings.get(
                            "/settings/camera/cameraBoundsColorGammaG"
                          ),
                          b: c.d.settings.get(
                            "/settings/camera/cameraBoundsColorGammaB"
                          ),
                        },
                      })
                  ),
              }),
            o.createElement(d.n, {
              name: "/settings/camera/showOnController",
              label: Object(l.c)("#Settings_Camera_ShowOnController"),
              title: Object(l.c)("#Settings_Camera_ShowOnController_Desc"),
            }),
            o.createElement(d.n, {
              name: "/settings/camera/enableCameraForCollisionBounds",
              label: Object(l.c)(
                "#Settings_Camera_AllowCameraForChaperoneBounds"
              ),
              title: Object(l.c)(
                "#Settings_Camera_AllowCameraForChaperoneBounds_Desc"
              ),
            }),
            o.createElement("hr", null)
          );
        }
        render() {
          return this.props.active
            ? o.createElement(
                o.Fragment,
                null,
                this.cameraEnabled() && this.renderEnabledSettings(),
                this.cameraEnabled() && this.GetComponentsForGroup("dev"),
                o.createElement(d.n, {
                  label: Object(l.c)("#Settings_Camera_EnableCamera"),
                  value: this.cameraEnabled(),
                  requiresRestart: !0,
                  onChange: this.onCameraEnabled,
                  offLabel: Object(l.c)("#Settings_ToggleButton_Disable"),
                  onLabel: Object(l.c)("#Settings_ToggleButton_Enable"),
                }),
                this.cameraEnabled() && o.createElement(O, null),
                this.makeResetToDefaultButton()
              )
            : null;
        }
      };
      (w.Name = "camera_settings"),
        Object(i.b)([u.bind], w.prototype, "onCameraEnabled", null),
        Object(i.b)([u.bind], w.prototype, "onCameraRateChanged", null),
        Object(i.b)([u.bind], w.prototype, "onStartCameraTest", null),
        Object(i.b)([u.bind], w.prototype, "onStopCameraTest", null),
        Object(i.b)([v.f], w.prototype, "currentRoomViewStyle", null),
        (w = Object(i.b)([r.a], w));
      var j = n("Gmup");
      let M = class extends d.b {
        constructor(e) {
          super(e);
        }
        render() {
          return this.props.active
            ? o.createElement(
                o.Fragment,
                null,
                o.createElement(S.d, null),
                o.createElement(S.a, null),
                o.createElement(S.g, null),
                o.createElement(S.f, null),
                o.createElement(S.e, null),
                o.createElement(d.h, {
                  name: f.p,
                  label: Object(l.c)("#Settings_Dashboard_Position"),
                  items: [
                    { value: j.b.Near, sLabel: Object(l.c)("#Settings_Near") },
                    {
                      value: j.b.Middle,
                      sLabel: Object(l.c)("#Settings_Middle"),
                    },
                    { value: j.b.Far, sLabel: Object(l.c)("#Settings_Far") },
                  ],
                }),
                o.createElement(d.n, {
                  name: "/settings/notifications/DoNotDisturb",
                  label: Object(l.c)("#Settings_General_Notifications_Label"),
                  title: Object(l.c)("#Settings_General_Notifications_Text"),
                  swapOnOff: !0,
                }),
                o.createElement(d.n, {
                  name: "/settings/userinterface/StatusAlwaysOnTop",
                  label: Object(l.c)("#Settings_StatusWindowAlwaysOnTop_Text"),
                  visibility: d.d.Desktop,
                }),
                o.createElement(d.n, {
                  name: "/settings/steamvr/allowDisplayLockedMode",
                  label: Object(l.c)("#Settings_PauseOnLocked"),
                  swapOnOff: !0,
                  visibility: d.d.Advanced,
                }),
                o.createElement(d.n, {
                  name: "/settings/steamvr/enableHomeApp",
                  label: Object(l.c)("#Settings_HomeAppCheck"),
                  title: Object(l.c)("#Settings_HomeAppDesc"),
                  visibility: d.d.Advanced,
                })
              )
            : null;
        }
      };
      (M.Name = "general_settings"), (M = Object(i.b)([r.a], M));
      var T = n("tALH");
      function R() {
        const [e, t] = o.useState();
        return o.createElement(
          d.c,
          { className: "SettingsItem" },
          o.createElement(
            _.a,
            {
              className: "ButtonControl Spanning",
              onClick: () =>
                Object(i.a)(this, void 0, void 0, function* () {
                  t(null);
                  try {
                    (yield c.d.ReloadSettingsSchema()).success
                      ? window.location.reload()
                      : t(
                          "Failed to reload schema. File might not be found, or might be invalid."
                        );
                  } catch (e) {
                    t(e.message);
                  }
                }),
            },
            "Reload Settings Schema"
          ),
          e && o.createElement("div", { className: "Subsection Label" }, e)
        );
      }
      function E() {
        if (!VRHTML) return null;
        const e = VRHTML.VRPathRegistry.GetRuntimePathHistory().map((e) => ({
          value: e,
          sLabel: e,
        }));
        return o.createElement(
          d.c,
          { className: "SettingsItem" },
          o.createElement(d.h, {
            defaultLabel: "Restart with Another SteamVR Install",
            items: e,
            onChange: (e) => {
              VRHTML.VRPathRegistry.SetRuntimePath(e),
                VRHTML.RestartSteamVR(!1);
            },
          })
        );
      }
      const k = Object(r.a)(() =>
          o.createElement(
            d.c,
            { className: "SettingsItem" },
            o.createElement(d.h, {
              label: "Auto-Show Dashboard",
              name: f.m,
              items: [
                { value: "", sLabel: "Default" },
                h.b.Separator,
                { value: f.q, sLabel: "Library" },
                { value: f.o, sLabel: "Now Playing" },
                { value: f.r, sLabel: "Store" },
                h.b.Separator,
                { value: f.k, sLabel: "Desktop View" },
                { value: f.K + ".1", sLabel: "Desktop 1" },
                { value: f.K + ".2", sLabel: "Desktop 2" },
                h.b.Separator,
                { value: f.C, sLabel: "Settings" },
              ],
            })
          )
        ),
        I = (e) => {
          const [t, n] = o.useState(1),
            [i, s] = o.useState(1),
            [r, a] = o.useState(1),
            [l, c] = o.useState(1),
            [u, p] = o.useState(!1);
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(d.l, {
              label: "Segmented Control",
              items: [
                { sLabel: "One", value: 1 },
                { sLabel: "Two", value: 2 },
              ],
              value: t,
              onChange: n,
            }),
            o.createElement(d.l, {
              label: "Segmented Control",
              items: [
                { sLabel: "One", value: 1 },
                { sLabel: "Two", value: 2 },
                { sLabel: "Three", value: 3 },
              ],
              value: i,
              onChange: s,
            }),
            o.createElement(d.l, {
              label: "Segmented Control",
              items: [
                { sLabel: "One", value: 1 },
                { sLabel: "Two", value: 2 },
                { sLabel: "Three", value: 3 },
                { sLabel: "Four", value: 4 },
              ],
              value: r,
              onChange: a,
            }),
            o.createElement(d.l, {
              label: "Segmented Control",
              items: [
                { sLabel: "1", value: 1 },
                { sLabel: "2", value: 2 },
                { sLabel: "3", value: 3 },
                { sLabel: "4", value: 4 },
                { sLabel: "5", value: 5 },
              ],
              value: l,
              onChange: c,
            }),
            o.createElement("hr", null),
            o.createElement(d.n, {
              label: "Standard Toggle",
              value: u,
              onChange: p,
            }),
            o.createElement(d.n, {
              label: "Inverted Toggle",
              value: u,
              onChange: p,
              swapOnOff: !0,
            })
          );
        },
        D = (e) => {
          const [t, n] = o.useState(1);
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(d.k, {
              label: "Radio Buttons",
              items: [
                { sLabel: "1", value: 1 },
                { sLabel: "2", value: 2 },
                { sLabel: "3", value: 3 },
                { sLabel: "4", value: 4 },
              ],
              value: t,
              onChange: n,
            })
          );
        },
        B = (e) => {
          const [t, n] = o.useState(1);
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(d.h, {
              label: "Dropdown",
              items: [
                { sLabel: "One", value: 1 },
                { sLabel: "Two", value: 2 },
                { sLabel: "Three", value: 3 },
                { sLabel: "Four", value: 4 },
              ],
              value: t,
              onChange: n,
            })
          );
        },
        P = Object(r.a)(() => {
          const e = "settingscontrolzoo" == c.d.routePageSection;
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              "div",
              { className: "SettingsItem Button" },
              o.createElement(
                _.a,
                {
                  className: "ButtonControl",
                  onClick: () => c.d.setRoutePageSection("settingscontrolzoo"),
                },
                "Zoo of Settings Controls"
              )
            ),
            e &&
              o.createElement(
                d.i,
                {
                  header: "Settings Controls",
                  onDismissRequested: () => c.d.setRoutePageSection(null),
                },
                o.createElement(I, null),
                o.createElement("hr", null),
                o.createElement(D, null),
                o.createElement("hr", null),
                o.createElement(B, null)
              )
          );
        });
      let L = class extends d.b {
        constructor(e) {
          super(e);
        }
        render() {
          return this.props.active
            ? o.createElement(
                o.Fragment,
                null,
                this.schemaComponents,
                o.createElement(d.m, {
                  name: "/settings/dashboard/verticalOffsetCm_2",
                  label: "Vertical Offset (cm)",
                  min: -9,
                  max: 9,
                  valueStyleVariant: y.c.OnHandle,
                  detents: [0],
                  renderValue: (e) => e.toFixed(0) + " cm",
                  step: 1,
                }),
                o.createElement(d.n, {
                  label: "Enable Per-App Refresh Rate",
                  name: "/settings/internal/enablePerAppFPS",
                }),
                o.createElement(d.n, {
                  label: "Allow Dashboard auto-launch with SteamVR Home",
                  name: "/settings/dashboard/allowDashboardAutoLaunchWithSteamVRHome",
                }),
                o.createElement(d.n, {
                  label: "Skip the Dashboard BG fade during SteamVR Home",
                  name: "/settings/dashboard/omitDashboardFadeWithSteamVRHome",
                }),
                o.createElement(d.n, {
                  label: "Haptics on Button Exit",
                  name: "/settings/steamvr/noEdgeExitHaptics",
                  swapOnOff: !0,
                }),
                o.createElement(d.n, {
                  label: "Force Welcome in Quicklaunch",
                  name: "/settings/dashboard/forceWelcomeScreen",
                }),
                o.createElement(d.n, {
                  name: f.l,
                  swapOnOff: !0,
                  label: Object(l.c)("#Settings_Animations"),
                }),
                o.createElement(k, null),
                o.createElement(R, null),
                o.createElement(E, null),
                o.createElement(P, null),
                this.makeResetToDefaultButton()
              )
            : null;
        }
      };
      (L.Name = "internal_settings"), (L = Object(i.b)([r.a], L));
      var V = n("hcOo");
      let N = class extends d.b {
        constructor(e) {
          super(e);
        }
        OnSetAsOpenXRRuntime() {
          var e;
          null === (e = VRHTML) ||
            void 0 === e ||
            e.XRRuntimeManager.SetThisRuntimeToCurrent(),
            this.forceUpdate();
        }
        render() {
          var e, t, n;
          if (!this.props.active) return null;
          let [i, s] =
            null !=
            (t =
              null === (e = VRHTML) || void 0 === e
                ? void 0
                : e.XRRuntimeManager.GetCurrentRuntime())
              ? t
              : [a.r.Error, ""];
          a.r.ThisSteamVR;
          switch (i) {
            case a.r.AnotherSteamVR:
              s = "#OpenXR_AnotherSteamVR";
              break;
            case a.r.ThisSteamVR:
              s = "#OpenXR_SteamVR";
              break;
            default:
            case a.r.Error:
              s = "#OpenXR_Error";
              break;
            case a.r.None:
              s = "#OpenXR_None";
              break;
            case a.r.AnotherRuntime:
              switch (s) {
                case "Oculus OpenXR":
                  s = "#OpenXR_OculusRuntime";
                  break;
                case "MixedRealityRuntime":
                  s = "#OpenXR_WindowsMixedReality";
              }
          }
          return (
            s.startsWith("#") && (s = Object(l.c)(s)),
            o.createElement(
              o.Fragment,
              null,
              this.schemaComponents,
              o.createElement(
                "div",
                { className: "SettingsItem" },
                o.createElement(
                  "div",
                  { className: "OpenXRRuntimeLabel" },
                  Object(l.c)("#Settings_CurrentOpenXRRuntime")
                ),
                o.createElement(
                  "div",
                  { className: "OpenXRRuntimeValue" },
                  " ",
                  s,
                  " "
                )
              ),
              !(null === (n = VRHTML) || void 0 === n
                ? void 0
                : n.XRRuntimeManager.IsThisRuntimeCurrent()) &&
                o.createElement(
                  "div",
                  { className: "SettingsItem Button ResetDefaultButton" },
                  o.createElement(
                    _.a,
                    {
                      className: "ButtonControl",
                      onClick: this.OnSetAsOpenXRRuntime,
                    },
                    Object(l.c)("#Settings_SetAsOpenXRRuntime")
                  )
                ),
              this.makeResetToDefaultButton()
            )
          );
        }
      };
      (N.Name = "developer_settings"),
        Object(i.b)([u.bind], N.prototype, "OnSetAsOpenXRRuntime", null),
        (N = Object(i.b)([r.a], N));
      var F = n("uFkT");
      let G = class extends o.Component {
        constructor(e) {
          super(e),
            (this.m_refSelectedButton = o.createRef()),
            (this.state = { bShowModal: !1, rBackgroundUGCItems: [] });
        }
        updateUGCItems() {
          c.d.GetSettingsUGC().then((e) => {
            null != e.items && this.setState({ rBackgroundUGCItems: e.items });
          });
        }
        componentDidMount() {
          this.updateUGCItems(),
            (this.m_workshopStateChangedCanaryDisposer = Object(v.n)(
              c.d,
              "workshopStateChangedCanary",
              this.updateUGCItems
            ));
        }
        componentWillUnmount() {
          this.m_workshopStateChangedCanaryDisposer(),
            (this.m_workshopStateChangedCanaryDisposer = null);
        }
        setBackground(e) {
          c.d.systemInfo && e === c.d.systemInfo.default_background && (e = ""),
            c.d.SetSettingsValue("/settings/steamvr/background", e),
            this.hideModal();
        }
        hideModal() {
          this.setState({ bShowModal: !1 });
        }
        showModal() {
          this.setState({ bShowModal: !0 });
        }
        componentDidUpdate(e, t) {
          this.state.bShowModal &&
            !t.bShowModal &&
            setTimeout(() => {
              this.m_refSelectedButton.current &&
                this.m_refSelectedButton.current.elem.scrollIntoView({
                  block: "center",
                });
            }, 0);
        }
        get currentBackgroundPath() {
          const e = c.d.settings.get("/settings/steamvr/background");
          return e || c.d.systemInfo.default_background;
        }
        render() {
          const e = this.currentBackgroundPath,
            t = [
              {
                file: "#A0A0A0FF",
                tags: "background",
                preview: "/dashboard/images/background_light_thumbnail.png",
                publishedfileid: null,
              },
              {
                file: "#0D0D0DFF",
                tags: "background",
                preview: "/dashboard/images/background_dark_thumbnail.png",
                publishedfileid: null,
              },
              ...this.state.rBackgroundUGCItems.filter(
                (e, t) => e.tags && -1 != e.tags.indexOf("background")
              ),
            ],
            n = t.find((t) => t.file == e) || null,
            i = n ? n.preview : null;
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              d.c,
              {
                className: "SettingsItem Background",
                title: Object(l.c)("#Settings_Appearance_BackgroundDesc"),
              },
              o.createElement(
                "div",
                { className: "Label" },
                Object(l.c)("#Settings_Appearance_Background")
              ),
              o.createElement(
                _.a,
                {
                  className: Object(V.a)("ButtonControl", ["Background", !!i]),
                  style: {
                    "--background-url-value": i ? 'url("' + i + '")' : null,
                  },
                  onClick: this.showModal,
                },
                !i && Object(l.c)("#Settings_Appearance_Background_Select")
              )
            ),
            this.state.bShowModal &&
              o.createElement(
                d.i,
                {
                  onDismissRequested: this.hideModal,
                  className: "Backgrounds",
                  header: Object(l.c)("#Settings_Appearance_Background"),
                  subheader: F.a.IsSteamAvailable
                    ? null
                    : Object(l.c)("#Settings_Appearance_Background_NoSteam"),
                },
                o.createElement(
                  "div",
                  { className: "BackgroundsGrid" },
                  t.map((t, n) =>
                    o.createElement(_.a, {
                      className: Object(V.a)("ButtonControl", "Background", [
                        "Selected",
                        t.file == e,
                      ]),
                      style: {
                        "--background-url-value": t.preview
                          ? 'url("' + t.preview + '")'
                          : null,
                      },
                      key: "backgroundelement_" + t.preview,
                      ref: t.file == e ? this.m_refSelectedButton : null,
                      title: t.file.startsWith("#") ? null : t.file,
                      onClick: () => this.setBackground(t.file),
                    })
                  )
                )
              )
          );
        }
      };
      Object(i.b)([p.a], G.prototype, "updateUGCItems", null),
        Object(i.b)([p.a], G.prototype, "setBackground", null),
        Object(i.b)([p.a], G.prototype, "hideModal", null),
        Object(i.b)([p.a], G.prototype, "showModal", null),
        Object(i.b)([v.f], G.prototype, "currentBackgroundPath", null),
        (G = Object(i.b)([r.a], G));
      class H extends o.Component {
        constructor() {
          super(...arguments),
            (this.m_sUniqueIdForForceBoundsVisible = Math.random().toString());
        }
        componentDidMount() {
          c.d.SetDashboardForceBoundsVisible(
            f.C,
            this.m_sUniqueIdForForceBoundsVisible,
            !0
          );
        }
        componentWillUnmount() {
          c.d.SetDashboardForceBoundsVisible(
            f.C,
            this.m_sUniqueIdForForceBoundsVisible,
            !1
          );
        }
        render() {
          return null;
        }
      }
      let x = class extends d.b {
        constructor(e) {
          super(e);
        }
        render() {
          var e;
          if (!this.props.active) return null;
          const t = c.d.settings.get("/settings/steamvr/background"),
            n = !!t && !t.startsWith("#"),
            i = null != (e = c.d.settings.get(f.g)) ? e : 0.7;
          let s;
          return (
            (s =
              i < 0.5
                ? Object(l.c)("#Settings_Chaperone_SuitableForSmall")
                : i < 1
                ? Object(l.c)("#Settings_Chaperone_SuitableForMedium")
                : Object(l.c)("#Settings_Chaperone_SuitableForLarge")),
            o.createElement(
              o.Fragment,
              null,
              o.createElement(H, null),
              o.createElement(d.h, {
                name: "/settings/collisionBounds/CollisionBoundsStyle",
                label: Object(l.c)("#Settings_Chaperone_Style"),
                items: [
                  {
                    value: 0,
                    sLabel: Object(l.c)("#Settings_Chaperone_Style_0"),
                  },
                  {
                    value: 1,
                    sLabel: Object(l.c)("#Settings_Chaperone_Style_1"),
                  },
                  {
                    value: 3,
                    sLabel: Object(l.c)("#Settings_Chaperone_Style_3"),
                  },
                  {
                    value: 2,
                    sLabel: Object(l.c)("#Settings_Chaperone_Style_2"),
                  },
                  {
                    value: 4,
                    sLabel: Object(l.c)("#Settings_Chaperone_Style_4"),
                  },
                ],
                subsection: o.createElement(
                  o.Fragment,
                  null,
                  o.createElement(d.g, {
                    label: Object(l.c)("#Settings_Chaperone_Color"),
                    nameR:
                      "/settings/collisionBounds/CollisionBoundsColorGammaR",
                    nameG:
                      "/settings/collisionBounds/CollisionBoundsColorGammaG",
                    nameB:
                      "/settings/collisionBounds/CollisionBoundsColorGammaB",
                    nameA:
                      "/settings/collisionBounds/CollisionBoundsColorGammaA",
                    minA: 0.3,
                    alphaScale: 255,
                  }),
                  o.createElement(d.n, {
                    name: "/settings/collisionBounds/CollisionBoundsGroundPerimeterOn",
                    label: Object(l.c)(
                      "#Settings_Appearance_Chaperone_CollisionBoundsGroundPerimeterOn"
                    ),
                    title: Object(l.c)(
                      "#Settings_Appearance_Chaperone_CollisionBoundsGroundPerimeterOnDesc"
                    ),
                  }),
                  o.createElement(d.m, {
                    min: 0.1,
                    max: 3,
                    detents: [2.4],
                    name: "/settings/collisionBounds/CollisionBoundsWallHeight",
                    label: Object(l.c)("#Settings_Chaperone_WallHeight"),
                    renderValue: (e) => e.toFixed(2),
                    valueStyleVariant: y.c.OnHandle,
                  }),
                  o.createElement(d.m, {
                    min: 0.2,
                    max: 1.4,
                    detents: [0.7],
                    name: f.g,
                    label: Object(l.c)(
                      "#Settings_Chaperone_ActivationDistance"
                    ),
                    renderValue: (e) => e.toFixed(2),
                    valueStyleVariant: y.c.OnHandle,
                  }),
                  o.createElement(
                    "div",
                    { className: "SettingsItemValueLabel" },
                    s
                  )
                ),
              }),
              o.createElement(d.g, {
                label: Object(l.c)("#Settings_Appearance_PlayArea_FloorColor"),
                name: "/settings/steamvr/playAreaColor",
              }),
              o.createElement(G, null),
              n &&
                o.createElement(d.n, {
                  name: "/settings/steamvr/backgroundUseDomeProjection",
                  label: Object(l.c)("#Settings_Appearance_UseDomeProjection"),
                  title: Object(l.c)(
                    "#Settings_Appearance_UseDomeProjectionDesc"
                  ),
                  onSubsection: o.createElement(
                    o.Fragment,
                    null,
                    o.createElement(d.m, {
                      min: 1,
                      max: 10,
                      detents: [1.6],
                      name: f.s,
                      label: Object(l.c)(
                        "#Settings_Appearance_DomeCameraHeight"
                      ),
                      title: Object(l.c)(
                        "#Settings_Appearance_DomeCameraHeightDesc"
                      ),
                      exponent: 2,
                    }),
                    o.createElement(d.m, {
                      min: 2,
                      max: 250,
                      specialMaxValue: 0,
                      name: f.t,
                      label: Object(l.c)(
                        "#Settings_Appearance_DomeCameraRadius"
                      ),
                      title: Object(l.c)(
                        "#Settings_Appearance_DomeCameraRadiusDesc"
                      ),
                      exponent: 5,
                    }),
                    o.createElement(
                      d.c,
                      { className: "SettingsItem" },
                      o.createElement(
                        _.a,
                        {
                          className: "ButtonControl",
                          onClick: () => c.d.ResetSettingsValues(f.s, f.t),
                        },
                        Object(l.c)(
                          "#Settings_Appearance_ResetDomeProjectionSettings"
                        )
                      )
                    )
                  ),
                }),
              this.makeResetToDefaultButton()
            )
          );
        }
      };
      (x.Name = "playarea_settings"), (x = Object(i.b)([r.a], x));
      var W,
        U = n("vDqi"),
        q = n.n(U);
      class z {
        constructor() {
          (this.driverNameToIdMap = new Map()),
            q.a.get("/drivers/list.json").then((e) => {
              const t = e.data.drivers;
              (this.driverList = t),
                console.log(t),
                t.map((e, t) => {
                  this.driverNameToIdMap.set(e.manifest.name, t);
                });
            });
        }
        prettyName(e) {
          return z.driverPrettyNames[e] || e;
        }
        unBlock(e) {
          c.d.SetRestartRequired(),
            (this.driverList[
              this.driverNameToIdMap.get(e)
            ].blocked_by_safe_mode = !1);
          let t = { driver: e };
          return q.a.post("/drivers/unblock", t);
        }
        setEnabled(e, t) {
          c.d.SetRestartRequired(),
            (this.driverList[this.driverNameToIdMap.get(e)].enabled = t);
          let n = { driver: e, enable: t };
          return q.a.post("/drivers/setenable", n);
        }
        get visibleDriverList() {
          return this.driverList.filter(
            (e) =>
              !e.manifest.resourceOnly &&
              (e.enabled_by_default != e.enabled ||
                !!e.blocked_by_safe_mode ||
                !e.on_safemode_whitelist)
          );
        }
        get numBlockedDrivers() {
          return this.visibleDriverList.filter((e) => e.blocked_by_safe_mode)
            .length;
        }
        get numDisabledDrivers() {
          return this.visibleDriverList.filter((e) => !e.enabled).length;
        }
        get numUserManuallyDisenabledDrivers() {
          return this.visibleDriverList.filter(
            (e) => e.enabled_by_default != e.enabled
          ).length;
        }
      }
      (z.driverPrettyNames = {
        lighthouse: "Lighthouse (Index, Vive, ...)",
        oculus: "Oculus (Rift, Rift S, Quest)",
        oculus_legacy: "Legacy Oculus (DK1, DK2)",
        gamepad: "Gamepad Support",
        null: "No HMD",
        holographic: "Windows MR / Holographic",
        "00natural": "Natural Locomotion",
        "00inputemulator": "OpenVR-InputEmulator",
        aapvr: "Pimax",
        ivry: "iVRy (Phone, PSVR)",
        kinoni: "Kinoni (Phone)",
        amdwvr: "AMD ReLive for VR (Wireless)",
        alvr: "ALVR - Air Light VR (Gear VR, Oculus Go, Quest)",
        VirtualDesktop: "Virtual Desktop Streamer (Quest)",
      }),
        Object(i.b)([v.m], z.prototype, "driverList", void 0),
        Object(i.b)([v.f], z.prototype, "visibleDriverList", null),
        Object(i.b)([v.f], z.prototype, "numBlockedDrivers", null),
        Object(i.b)([v.f], z.prototype, "numDisabledDrivers", null),
        Object(i.b)(
          [v.f],
          z.prototype,
          "numUserManuallyDisenabledDrivers",
          null
        );
      const K = new z(),
        X = Object(r.a)(() =>
          s.a.createElement(
            _.a,
            {
              className: "ButtonControl",
              title: Object(l.c)("#Settings_Drivers_UnblockAllTip"),
              onClick: () =>
                Object(i.a)(void 0, void 0, void 0, function* () {
                  const e = K.driverList
                    .filter((e) => e.blocked_by_safe_mode)
                    .map((e) => e.manifest.name);
                  for (let t = 0; t < e.length; ++t) yield K.unBlock(e[t]);
                }),
            },
            Object(l.c)("#Settings_Drivers_UnblockAll")
          )
        );
      function Q(e) {
        return e.blocked
          ? s.a.createElement(
              d.c,
              { className: "SettingsItem", title: e.title },
              s.a.createElement("div", { className: "Label" }, e.label),
              s.a.createElement(
                _.a,
                {
                  className: "ButtonControl",
                  title: e.title,
                  onClick: e.onUnblock,
                },
                Object(l.c)("#Settings_Drivers_Unblock")
              )
            )
          : s.a.createElement(d.n, {
              label: e.label,
              title: e.title,
              onChange: e.onToggleEnable,
              value: e.enabled,
            });
      }
      const Y = Object(r.a)(() =>
        s.a.createElement(
          s.a.Fragment,
          null,
          K.visibleDriverList.map((e) =>
            s.a.createElement(Q, {
              key: e.manifest.name,
              label: K.prettyName(e.manifest.name),
              title: e.manifest.name,
              blocked: e.blocked_by_safe_mode,
              enabled: e.enabled,
              onToggleEnable: (t) => {
                return (n = e.manifest.name), (i = t), void K.setEnabled(n, i);
                var n, i;
              },
              onUnblock: () => {
                return (t = e.manifest.name), void K.unBlock(t);
                var t;
              },
            })
          )
        )
      );
      let J = (W = class extends s.a.Component {
        constructor(e) {
          super(e);
        }
        render() {
          const e = K.numBlockedDrivers,
            t = K.numDisabledDrivers,
            n =
              c.d.showAdvancedSettings ||
              e ||
              K.numUserManuallyDisenabledDrivers,
            i = c.d.routePageSection == W.PAGE_SECTION;
          return s.a.createElement(
            s.a.Fragment,
            null,
            !!n &&
              s.a.createElement(
                "div",
                { className: "SettingsItem Button" },
                s.a.createElement(
                  _.a,
                  {
                    className: "ButtonControl",
                    onClick: () => c.d.setRoutePageSection(W.PAGE_SECTION),
                  },
                  Object(l.c)("#Settings_Drivers_ShowDriverManagerUI"),
                  0 != e &&
                    s.a.createElement(
                      "div",
                      { className: "Badge DriversBlocked" },
                      Object(l.c)("#Settings_Drivers_Number_Blocked", e)
                    ),
                  0 == e &&
                    0 != t &&
                    s.a.createElement(
                      "div",
                      { className: "Badge DriversDisabled" },
                      Object(l.c)("#Settings_Drivers_Number_Disabled", t)
                    )
                )
              ),
            i &&
              K.driverList &&
              s.a.createElement(
                d.i,
                {
                  header: Object(l.c)("#Settings_Drivers_Header"),
                  subheader:
                    0 == e
                      ? null
                      : s.a.createElement(
                          "div",
                          { className: "BlockedSubheader" },
                          s.a.createElement(
                            "div",
                            { className: "Label" },
                            Object(l.c)("#Settings_Drivers_SomeBlocked")
                          ),
                          s.a.createElement(X, null)
                        ),
                  onDismissRequested: () => c.d.setRoutePageSection(null),
                },
                s.a.createElement(Y, null)
              )
          );
        }
      });
      (J.PAGE_SECTION = "drivermanager"), (J = W = Object(i.b)([r.a], J));
      let $ = class extends o.Component {
        constructor(e) {
          super(e), (this.state = { bShowingModal: !1 });
        }
        show() {
          this.setState({ bShowingModal: !0 });
        }
        hide() {
          this.setState({ bShowingModal: !1 });
        }
        render() {
          const e = !!c.d.apps,
            t = e
              ? c.d.apps.filter(
                  (e) =>
                    e.is_dashboard_overlay && e.key != f.F && !e.is_internal
                )
              : [],
            n = t.filter((e) => e.is_autolaunch);
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              d.c,
              {
                className: "SettingsItem",
                title: e ? null : Object(l.c)("#Settings_Loading"),
              },
              o.createElement(
                _.a,
                { className: "ButtonControl", enabled: e, onClick: this.show },
                Object(l.c)("#Settings_ChooseStartupOverlayApps"),
                e &&
                  o.createElement(
                    "div",
                    { className: "Badge" },
                    Object(l.c)("#Settings_Number_Selected", n.length)
                  )
              )
            ),
            this.state.bShowingModal &&
              o.createElement(
                d.i,
                {
                  className: "OverlayAutoLaunchModal",
                  header: Object(l.c)(
                    "#Settings_StartTheseOverlayAppsOnLaunch"
                  ),
                  onDismissRequested: this.hide,
                },
                t.map((e) =>
                  o.createElement(d.n, {
                    key: e.key,
                    label: e.name,
                    value: e.is_autolaunch,
                    onChange: (t) =>
                      c.d.SetAppSettings(e.key, { is_autolaunch: t }),
                  })
                ),
                !t.length &&
                  o.createElement(
                    "div",
                    { className: "ModalPlaceholder" },
                    Object(l.c)(
                      "#Settings_ChooseStartupOverlayApps_NoOverlayAppsInstalled"
                    )
                  )
              )
          );
        }
      };
      Object(i.b)([p.a], $.prototype, "show", null),
        Object(i.b)([p.a], $.prototype, "hide", null),
        ($ = Object(i.b)([r.a], $));
      let Z = class extends d.b {
        constructor(e) {
          super(e);
        }
        render() {
          return this.props.active
            ? o.createElement(
                o.Fragment,
                null,
                o.createElement($, null),
                o.createElement(J, null),
                o.createElement("hr", null),
                this.schemaComponents,
                this.makeResetToDefaultButton()
              )
            : null;
        }
      };
      (Z.Name = "startupshutdown_settings"), (Z = Object(i.b)([r.a], Z));
      let ee = class extends o.Component {
        constructor(e) {
          super(e),
            (this.state = {
              m_nValue: c.d.settings.get("/settings/dashboard/dashboardScale"),
            });
        }
        componentDidMount() {
          this.m_settingObserverAutorunDisposer = Object(v.e)(() => {
            this.setState({
              m_nValue: c.d.settings.get("/settings/dashboard/dashboardScale"),
            });
          });
        }
        componentWillUnmount() {
          this.m_settingObserverAutorunDisposer &&
            (this.m_settingObserverAutorunDisposer(),
            (this.m_settingObserverAutorunDisposer = null));
        }
        render() {
          return o.createElement(d.m, {
            label: Object(l.c)("#Settings_DashboardScale"),
            min: 0.75,
            max: 1.5,
            valueStyleVariant: y.c.OnHandle,
            renderValue: (e) => (100 * e).toFixed(0) + "%",
            value: this.state.m_nValue,
            detents: [1],
            onChange: (e) => {
              this.setState({ m_nValue: e }),
                Object(a.i)() != a.H.Overlay &&
                  c.d.SetSettingsValue("/settings/dashboard/dashboardScale", e);
            },
            onFinalChange: (e) =>
              c.d.SetSettingsValue("/settings/dashboard/dashboardScale", e),
          });
        }
      };
      ee = Object(i.b)([r.a], ee);
      let te = class extends d.b {
        constructor(e) {
          super(e);
        }
        render() {
          return this.props.active
            ? o.createElement(
                o.Fragment,
                null,
                o.createElement(d.h, {
                  name: f.p,
                  label: Object(l.c)("#Settings_Dashboard_Position"),
                  items: [
                    { value: j.b.Near, sLabel: Object(l.c)("#Settings_Near") },
                    {
                      value: j.b.Middle,
                      sLabel: Object(l.c)("#Settings_Middle"),
                    },
                    { value: j.b.Far, sLabel: Object(l.c)("#Settings_Far") },
                  ],
                }),
                o.createElement(d.n, {
                  name: "/settings/dashboard/showPowerOptions",
                  label: Object(l.c)("#Settings_ShowPowerMenu"),
                  visibility: d.d.Advanced,
                }),
                o.createElement(d.n, {
                  name: "/settings/dashboard/showDesktop",
                  label: Object(l.c)("#Settings_ShowDesktopViews"),
                  visibility: d.d.Advanced,
                }),
                o.createElement(d.n, {
                  name: "/settings/dashboard/allowAppQuitting",
                  label: Object(l.c)("#Settings_AllowAppQuitting"),
                  visibility: d.d.Advanced,
                }),
                o.createElement(d.n, {
                  name: "/settings/dashboard/arcadeMode",
                  label: Object(l.c)("#Settings_ShowSettingsInDashboard"),
                  swapOnOff: !0,
                  visibility: d.d.Advanced,
                }),
                o.createElement(d.n, {
                  name: "/settings/dashboard/enableDashboard",
                  title: Object(l.c)("#Settings_EnableDashboardDesc"),
                  label: Object(l.c)("#Settings_EnableDashboard"),
                  visibility: d.d.Advanced,
                }),
                this.makeResetToDefaultButton()
              )
            : null;
        }
      };
      (te.Name = "dashboard_settings"), (te = Object(i.b)([r.a], te));
      var ne,
        ie = n("YRJX"),
        oe = n("p9CI"),
        se = n("/CXA");
      n.d(t, "a", function () {
        return ae;
      });
      class re extends o.Component {
        constructor(e) {
          super(e),
            (this.state = {
              bRestartAnimation: !1,
              bShowSteamVRRestartRequired: !1,
              bShowAppRestartRequired: !1,
            });
        }
        get enabled() {
          const e = Object(a.i)() == a.H.Overlay;
          return this.props.standalonePanel == e;
        }
        onExitApp() {
          var e;
          null === (e = a.mb) || void 0 === e || e.QuitSceneApp();
        }
        onRestartSteamVR() {
          a.mb
            ? a.mb.RestartSteamVR(!1)
            : window.open("vrmonitor://restartsystem");
        }
        onRestartRequired() {
          this.setState(
            { bShowSteamVRRestartRequired: !0, bRestartAnimation: !0 },
            () => {
              setTimeout(() => {
                this.setState({ bRestartAnimation: !1 });
              }, 10);
            }
          );
        }
        onAppRestartRequired(e) {
          this.setState(
            { bShowAppRestartRequired: !e, bRestartAnimation: !0 },
            () => {
              setTimeout(() => {
                this.setState({ bRestartAnimation: !1 });
              }, 10);
            }
          );
        }
        componentDidMount() {
          this.enabled &&
            ((c.d.onRestartRequired = this.onRestartRequired),
            (c.d.onAppRestartRequired = this.onAppRestartRequired));
        }
        componentWillUnmount() {
          this.enabled &&
            (c.d.onRestartRequired == this.onRestartRequired &&
              (c.d.onRestartRequired = null),
            c.d.onAppRestartRequired == this.onAppRestartRequired &&
              (c.d.onAppRestartRequired = null));
        }
        render() {
          if (!this.enabled) return null;
          let e = null;
          if (
            (this.state.bShowSteamVRRestartRequired
              ? (e = o.createElement(
                  _.b,
                  {
                    className:
                      "SettingsRestartRequiredBanner Shown" +
                      (this.state.bRestartAnimation ? " ReShimmer" : ""),
                  },
                  o.createElement(
                    "div",
                    { className: "Label" },
                    Object(l.c)("#Settings_MustRestart_Description")
                  ),
                  o.createElement(
                    _.a,
                    {
                      className: "ButtonControl",
                      onClick: this.onRestartSteamVR,
                    },
                    Object(l.c)("#Settings_MustRestart_RestartSteamVR_Button")
                  )
                ))
              : this.state.bShowAppRestartRequired &&
                (e = o.createElement(
                  _.b,
                  {
                    className:
                      "SettingsRestartRequiredBanner Shown" +
                      (this.state.bRestartAnimation ? " ReShimmer" : ""),
                  },
                  o.createElement(
                    "div",
                    { className: "Label" },
                    Object(l.c)("#Settings_MustQuitApp_Description")
                  ),
                  o.createElement(
                    _.a,
                    { className: "ButtonControl", onClick: this.onExitApp },
                    Object(l.c)("#Settings_MustQuitApp_QuitCurrentGame_Button")
                  )
                )),
            this.props.standalonePanel)
          ) {
            if (null === e) return null;
            const t = "mainmountable" + "_TopCenter";
            return o.createElement(
              a.lb,
              { parent_id: t, translation: { y: 0.2, z: -0.05 } },
              o.createElement(
                a.Y,
                {
                  debug_name: "settingsrestartbanner",
                  curvature_origin_id: f.i,
                  origin: a.s.BottomCenter,
                  interactive: !0,
                  target_dpi_panel_id: ie.q,
                  reflect: 0.1,
                },
                e
              )
            );
          }
          return e;
        }
      }
      Object(i.b)([u.bind], re.prototype, "onExitApp", null),
        Object(i.b)([u.bind], re.prototype, "onRestartSteamVR", null),
        Object(i.b)([u.bind], re.prototype, "onRestartRequired", null),
        Object(i.b)([u.bind], re.prototype, "onAppRestartRequired", null);
      let ae = (ne = class extends o.Component {
        constructor(e) {
          super(e),
            (this.m_refSettingsPageContainer = o.createRef()),
            (this.m_routeObservingAutorunDisposer = null),
            (this.m_fidelitySettingsObserver = null),
            (this.state = { sActiveSettingSection: null });
        }
        componentDidMount() {
          (this.m_routeObservingAutorunDisposer = Object(v.e)(() => {
            c.d.routePage
              ? this.setState({ sActiveSettingSection: c.d.routePage })
              : c.d.setRoutePage(
                  c.d.settingsSchema.filter(ne.shouldShowSection)[0].controller
                );
          })),
            (this.m_fidelitySettingsObserver = new V.b()),
            this.ListenForHomeEnabledChanges();
        }
        componentDidUpdate(e, t) {
          this.state.sActiveSettingSection !== t.sActiveSettingSection &&
            this.m_refSettingsPageContainer.current &&
            (this.m_refSettingsPageContainer.current.scrollTop = 0);
        }
        componentWillUnmount() {
          var e, t;
          null === (e = this.m_routeObservingAutorunDisposer) ||
            void 0 === e ||
            e.call(this),
            (this.m_routeObservingAutorunDisposer = null),
            null === (t = this.m_fidelitySettingsObserver) ||
              void 0 === t ||
              t.cleanup(),
            (this.m_fidelitySettingsObserver = null);
        }
        render() {
          const e = !c.d.connected || !c.d.settingsSchema;
          let t = null;
          e && Object(a.i)() != a.H.Overlay
            ? (t = o.createElement(
                "div",
                { className: "Label" },
                Object(l.c)("#Settings_Loading")
              ))
            : e ||
              ((Object(a.i)() != a.H.Overlay || this.props.visible) &&
                (t = this.renderSettingsPanelContents()));
          let n = null;
          if (Object(a.i)() == a.H.Overlay) {
            const e = "mainmountable",
              i = e + "_TopCenter";
            n = o.createElement(
              a.j,
              {
                id: "settingstab",
                tabName: Object(l.c)("#VRMonitor_Nav_Settings"),
                iconUri: "/dashboard/images/icons/svr_settings.svg",
                summonOverlayKey: f.C,
                mountableUnqualifiedID: e,
              },
              t && o.createElement(re, { standalonePanel: !0 }),
              t &&
                o.createElement(
                  ie.h,
                  {
                    visible: !0,
                    debugName: "settings",
                    additionalClassNames: "Settings",
                    foregroundReflectMultiplier: 0.25,
                  },
                  o.createElement(a.Z, { id: i, location: a.s.TopCenter }),
                  t
                )
            );
          } else n = t;
          return o.createElement(
            "div",
            {
              className: Object(V.a)(
                "SettingsMain",
                Object(a.i)() == a.H.Overlay ? "Overlay" : "Desktop",
                ["Loading", e]
              ),
            },
            n
          );
        }
        renderSettingsPanelContents() {
          const e = c.d.settingsSchema.filter(ne.shouldShowSection);
          return o.createElement(
            _.b,
            { className: "SettingsMainPanel" },
            o.createElement(re, { standalonePanel: !1 }),
            o.createElement(
              "div",
              { className: "SettingsSidebarPageModalContainer" },
              o.createElement(
                se.c,
                { className: "SettingsSidebarPageContainer" },
                o.createElement(
                  "div",
                  { className: Object(V.a)("SettingsSidebar") },
                  e.map(this.renderSectionButton),
                  o.createElement("div", { className: "Spacer" }),
                  o.createElement(
                    "div",
                    {
                      className: Object(V.a)(
                        "Bottom",
                        "AdvancedSettingsToggle",
                        ["Fadable", !c.d.showAdvancedSettings]
                      ),
                    },
                    o.createElement(d.n, {
                      label: Object(l.c)("#Settings_AdvancedSettings"),
                      value: c.d.showAdvancedSettings,
                      onChange: (e) => (c.d.showAdvancedSettings = e),
                      onLabel: Object(l.c)("#Settings_Show"),
                      offLabel: Object(l.c)("#Settings_Hide"),
                    })
                  )
                ),
                o.createElement(
                  oe.b,
                  {
                    scrollDirection: oe.a.Vertical,
                    alwaysShowScrollbars: !0,
                    className: Object(V.a)("SettingsPageContainer"),
                    ref: this.m_refSettingsPageContainer,
                  },
                  e.map(this.renderSectionPage)
                )
              )
            )
          );
        }
        renderSectionButton(e) {
          let t = ["SettingsSidebarButton"];
          return (
            this.state.sActiveSettingSection === e.controller &&
              t.push("Active"),
            o.createElement(
              _.a,
              {
                key: e.title,
                className: t.join(" "),
                onClick: () => c.d.setRoutePage(e.controller),
              },
              o.createElement(
                "div",
                { className: "Label" },
                Object(l.c)(e.title)
              )
            )
          );
        }
        renderSectionPage(e) {
          const t = e.controller ? e.controller : "generic",
            n = this.state.sActiveSettingSection === e.controller,
            i =
              [m, Z, x, S.c, w, M, te, N, L, T.a].find((e) => e.Name === t) ||
              d.b;
          return o.createElement(i, { key: e.title, section: e, active: n });
        }
        static shouldShowSection(e) {
          var t, n;
          if (
            e.internal_only &&
            !c.d.showInternalSettings &&
            !c.d.settings.get(ne.k_sShowInternalSettings)
          )
            return !1;
          if (
            !e.show_without_hmd &&
            !(null === (t = a.mb) || void 0 === t ? void 0 : t.HasHMD())
          )
            return !1;
          if (e.desktop_only && Object(a.i)() == a.H.Overlay) return !1;
          if (e.advanced_only && !c.d.showAdvancedSettings) return !1;
          if (
            e.controller == w.Name &&
            !(null === (n = a.mb) || void 0 === n
              ? void 0
              : n.VRProperties.GetBoolProperty(
                  "/user/head",
                  a.y.HasCamera_Bool
                ))
          )
            return !1;
          if (e.controller == m.Name) {
            if (!(c.d.systemInfo && c.d.systemInfo.os_type >= 0)) return !1;
          }
          return !(!a.mb && e.web_helper_only);
        }
        ListenForHomeEnabledChanges() {
          return Object(i.a)(this, void 0, void 0, function* () {
            if (Object(a.i)() != a.H.Overlay) return;
            let e = yield c.d.GetSettingsValue(f.u);
            a.mb &&
              Object(v.e)(() => {
                let t = c.d.settings.get(f.u);
                void 0 !== t &&
                  t != e &&
                  (t && !a.mb.VRApplications.GetSceneApplicationKey()
                    ? a.mb.VRApplications.LaunchApplication(f.x)
                    : t ||
                      a.mb.VRApplications.GetSceneApplicationKey() != f.x ||
                      a.mb.QuitSceneApp(),
                  (e = t));
              });
          });
        }
      });
      (ae.k_sShowInternalSettings = "/settings/steamvr/showInternalSettings"),
        Object(i.b)([u.bind], ae.prototype, "renderSectionButton", null),
        Object(i.b)([u.bind], ae.prototype, "renderSectionPage", null),
        (ae = ne = Object(i.b)([r.a], ae));
    },
    "6YgL": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      }),
        n.d(t, "b", function () {
          return u;
        });
      var i = n("mrSG"),
        o = n("q1tI"),
        s = n("7wIv"),
        r = n("CzjV"),
        a = n("/i/y"),
        l = n("nAcY"),
        c = n("hcOo");
      class d extends o.Component {
        constructor() {
          super(...arguments), (this.m_ref = o.createRef());
        }
        get elem() {
          return this.m_ref.current;
        }
        get disabled() {
          return !1 === this.props.enabled;
        }
        onMouseDown(e) {
          var t, n, i;
          null === (n = (t = this.props).onMouseDown) ||
            void 0 === n ||
            n.call(t, e),
            this.disabled ||
              r.b.Instance.playSound(
                null != (i = this.props.pressSoundEffect) ? i : null
              );
        }
        onMouseUp(e) {
          var t, n;
          null === (n = (t = this.props).onMouseUp) ||
            void 0 === n ||
            n.call(t, e);
        }
        onClick(e) {
          var t, n, i;
          this.disabled ||
            (null === (n = (t = this.props).onClick) ||
              void 0 === n ||
              n.call(t, e),
            u.temporarilySuppressSoundEffect(),
            r.b.Instance.playSound(
              null != (i = this.props.releaseSoundEffect) ? i : r.a.ButtonClick
            ));
        }
        onMouseEnter(e) {
          var t, n;
          null === (n = (t = this.props).onMouseEnter) ||
            void 0 === n ||
            n.call(t, e),
            this.disabled ||
              (Object(a.i)() == a.H.Overlay &&
                l.b.Instance.triggerHaptic(l.a.ButtonEnter));
        }
        onMouseLeave(e) {
          this.props.onMouseLeave && this.props.onMouseLeave(e),
            this.disabled ||
              (Object(a.i)() == a.H.Overlay &&
                l.b.Instance.triggerHaptic(l.a.ButtonLeave));
        }
        render() {
          let e = Object.assign({}, this.props);
          return (
            delete e.enabled,
            delete e.pressSoundEffect,
            delete e.releaseSoundEffect,
            (e.className = Object(c.a)(e.className, [
              "Disabled",
              this.disabled,
            ])),
            o.cloneElement(o.createElement("div", e, this.props.children), {
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
      Object(i.b)([s.bind], d.prototype, "onMouseDown", null),
        Object(i.b)([s.bind], d.prototype, "onMouseUp", null),
        Object(i.b)([s.bind], d.prototype, "onClick", null),
        Object(i.b)([s.bind], d.prototype, "onMouseEnter", null),
        Object(i.b)([s.bind], d.prototype, "onMouseLeave", null);
      class u extends o.Component {
        static temporarilySuppressSoundEffect() {
          window.clearTimeout(this.s_nPlaySoundEffectTimeout),
            (this.s_nPlaySoundEffectTimeout = 0),
            window.clearTimeout(this.s_nSuppressingSoundEffectsTimeout),
            (this.s_nSuppressingSoundEffectsTimeout = window.setTimeout(
              this.endSoundEffectSuppression,
              this.k_nSoundEffectSuppressionPeriod
            ));
        }
        static get suppressingSoundEffect() {
          return this.s_nSuppressingSoundEffectsTimeout > 0;
        }
        onClick(e) {
          u.suppressingSoundEffect ||
            (window.clearTimeout(u.s_nPlaySoundEffectTimeout),
            (u.s_nPlaySoundEffectTimeout = window.setTimeout(
              u.playSoundEffect,
              u.k_nSoundEffectDelay
            ))),
            this.props.onClick && this.props.onClick(e);
        }
        static endSoundEffectSuppression() {
          window.clearTimeout(this.s_nSuppressingSoundEffectsTimeout),
            (this.s_nSuppressingSoundEffectsTimeout = 0);
        }
        static playSoundEffect() {
          r.b.Instance.playSound(r.a.SurfaceClick);
        }
        render() {
          return o.cloneElement(
            o.createElement("div", this.props, this.props.children),
            { onClick: this.onClick }
          );
        }
      }
      (u.k_nSoundEffectSuppressionPeriod = 4),
        (u.k_nSoundEffectDelay = 2),
        (u.s_nSuppressingSoundEffectsTimeout = 0),
        (u.s_nPlaySoundEffectTimeout = 0),
        Object(i.b)([s.bind], u.prototype, "onClick", null),
        Object(i.b)([s.bind], u, "endSoundEffectSuppression", null),
        Object(i.b)([s.bind], u, "playSoundEffect", null);
    },
    "7uy8": function (e, t, n) {
      "use strict";
      n.d(t, "x", function () {
        return i;
      }),
        n.d(t, "F", function () {
          return o;
        }),
        n.d(t, "J", function () {
          return s;
        }),
        n.d(t, "L", function () {
          return r;
        }),
        n.d(t, "n", function () {
          return a;
        }),
        n.d(t, "q", function () {
          return l;
        }),
        n.d(t, "r", function () {
          return c;
        }),
        n.d(t, "o", function () {
          return d;
        }),
        n.d(t, "k", function () {
          return u;
        }),
        n.d(t, "h", function () {
          return p;
        }),
        n.d(t, "E", function () {
          return h;
        }),
        n.d(t, "P", function () {
          return m;
        }),
        n.d(t, "C", function () {
          return b;
        }),
        n.d(t, "G", function () {
          return g;
        }),
        n.d(t, "H", function () {
          return S;
        }),
        n.d(t, "c", function () {
          return _;
        }),
        n.d(t, "A", function () {
          return f;
        }),
        n.d(t, "K", function () {
          return v;
        }),
        n.d(t, "M", function () {
          return y;
        }),
        n.d(t, "I", function () {
          return O;
        }),
        n.d(t, "j", function () {
          return A;
        }),
        n.d(t, "i", function () {
          return C;
        }),
        n.d(t, "u", function () {
          return w;
        }),
        n.d(t, "N", function () {
          return j;
        }),
        n.d(t, "O", function () {
          return M;
        }),
        n.d(t, "w", function () {
          return T;
        }),
        n.d(t, "f", function () {
          return R;
        }),
        n.d(t, "s", function () {
          return E;
        }),
        n.d(t, "t", function () {
          return k;
        }),
        n.d(t, "a", function () {
          return I;
        }),
        n.d(t, "y", function () {
          return D;
        }),
        n.d(t, "D", function () {
          return B;
        }),
        n.d(t, "z", function () {
          return P;
        }),
        n.d(t, "m", function () {
          return L;
        }),
        n.d(t, "p", function () {
          return V;
        }),
        n.d(t, "l", function () {
          return N;
        }),
        n.d(t, "B", function () {
          return F;
        }),
        n.d(t, "g", function () {
          return G;
        }),
        n.d(t, "e", function () {
          return H;
        }),
        n.d(t, "d", function () {
          return x;
        }),
        n.d(t, "v", function () {
          return W;
        }),
        n.d(t, "b", function () {
          return U;
        });
      const i = "openvr.tool.steamvr_environments",
        o = "system.generated.steam.exe",
        s = "steam.app.250820",
        r = "steam.app.330050",
        a = "system.dashboard.",
        l = a + "quicklaunch",
        c = a + "quickstore",
        d = a + "nowplaying",
        u = a + "desktop",
        p = "current.scene.app.binding.list",
        h = "system.standalone",
        m = "system.systemui",
        b = "system.settings",
        g = "valve.steam.bigpicture",
        S = "valve.steam.desktop",
        _ = "system.vrwebhelper.controllerbinding",
        f = "system.messageoverlay",
        v = "system.desktop",
        y = "system.window",
        O = "valve.steam",
        A = "DashboardCurvatureOrigin",
        C = m + "::" + A,
        w = "/settings/steamvr/enableHomeApp",
        j = "/settings/steamvr/supersampleManualOverride",
        M = "/settings/steamvr/supersampleScale",
        T = "/settings/GpuSpeed/gpuSpeedRenderTargetScale",
        R = "/settings/camera/roomViewStyle",
        E = "/settings/steamvr/backgroundCameraHeight",
        k = "/settings/steamvr/backgroundDomeRadius",
        I = "/settings/steamvr/analogGain",
        D = "/settings/driver_lighthouse/indexHmdColumnCorrection",
        B = "/settings/steamvr/showAdvancedSettings",
        P = "/settings/dashboard/lastAccessedExternalOverlayKey",
        L = "/settings/internal/dashboardInitialOverlay",
        V = "/settings/dashboard/position_2",
        N = "/settings/dashboard/disableAnimations",
        F = "/settings/steamvr/overlayRenderQuality_2",
        G = "/settings/collisionBounds/CollisionBoundsFadeDistance",
        H = "/settings/camera/roomView",
        x = "/settings/camera/enableCamera",
        W = "/settings/dashboard/enableWindowView",
        U = "binding_callouts/main";
    },
    CzjV: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "b", function () {
          return r;
        });
      var i,
        o = n("mrSG"),
        s = n("/i/y");
      !(function (e) {
        (e[(e.DashboardLoaded = 0)] = "DashboardLoaded"),
          (e[(e.DashboardLoading = 1)] = "DashboardLoading"),
          (e[(e.DashboardOpen = 2)] = "DashboardOpen"),
          (e[(e.DashboardClose = 3)] = "DashboardClose"),
          (e[(e.DashboardIdle = 4)] = "DashboardIdle"),
          (e[(e.DashboardLaunch = 5)] = "DashboardLaunch"),
          (e[(e.DashboardKill = 6)] = "DashboardKill"),
          (e[(e.DashboardFailure = 7)] = "DashboardFailure"),
          (e[(e.ControlBarButtonPress = 8)] = "ControlBarButtonPress"),
          (e[(e.ControlBarButtonRelease = 9)] = "ControlBarButtonRelease"),
          (e[(e.KeyboardClick = 10)] = "KeyboardClick"),
          (e[(e.WindowTransition = 11)] = "WindowTransition"),
          (e[(e.WindowAppear = 12)] = "WindowAppear"),
          (e[(e.WindowDisappear = 13)] = "WindowDisappear"),
          (e[(e.MajorTransition = 14)] = "MajorTransition"),
          (e[(e.Notification = 15)] = "Notification"),
          (e[(e.ButtonClick = 16)] = "ButtonClick"),
          (e[(e.Fiddle_03 = 17)] = "Fiddle_03"),
          (e[(e.Fiddle_04 = 18)] = "Fiddle_04"),
          (e[(e.SurfaceClick = 19)] = "SurfaceClick"),
          (e[(e.VolumePreview = 20)] = "VolumePreview"),
          (e[(e.Grab = 21)] = "Grab"),
          (e[(e.GrabRelease = 22)] = "GrabRelease"),
          (e[(e.ThemeStore = 23)] = "ThemeStore"),
          (e[(e.ThemeDesktop = 24)] = "ThemeDesktop"),
          (e[(e.ThemeLibrary = 25)] = "ThemeLibrary"),
          (e[(e.ThemeSettings = 26)] = "ThemeSettings"),
          (e[(e.ThemeNowPlaying = 27)] = "ThemeNowPlaying"),
          (e[(e.TraySlideOut = 28)] = "TraySlideOut"),
          (e[(e.TraySlideIn = 29)] = "TraySlideIn");
      })(i || (i = {}));
      class r {
        constructor() {
          this.m_mapSoundElems = new Map();
        }
        static get Instance() {
          return r.s_Instance || (r.s_Instance = new r()), r.s_Instance;
        }
        preloadSounds() {
          if (!(Object(s.i)() != s.H.Overlay || this.m_mapSoundElems.size > 0))
            for (let e in i) isNaN(Number(e)) || this.loadSounds(Number(e));
        }
        playSound(e) {
          return Object(o.a)(this, void 0, void 0, function* () {
            if (Object(s.i)() != s.H.Overlay) return;
            if (null == e) return;
            const t = this.getAudioElems(e);
            if (!t || 0 == t.length) return;
            const n = t[Math.floor(Math.random() * t.length)];
            n.pause(), (n.currentTime = 0);
            try {
              yield n.play();
            } catch (t) {
              console.error(
                `Failed to play sound effect "${i[e]}" (${n.src}, networkState=${n.networkState}, readyState=${n.readyState})`
              );
            }
          });
        }
        loadSounds(e) {
          const t = r.Sources[e],
            n = t.source;
          if (!n) return void this.m_mapSoundElems.set(e, []);
          const i = ("string" == typeof n ? [n] : n).map((e) => {
            var n, i;
            let o = document.createElement("audio");
            return (
              (o.src = `${e}?t=${new Date().getTime()}`),
              (o.preload = "auto"),
              (o.volume = null != (n = t.volume) ? n : 1),
              (null == (i = t.bRespectsGlobalVolume) || i) && (o.volume *= 1),
              o
            );
          });
          this.m_mapSoundElems.set(e, i);
        }
        getAudioElems(e) {
          return (
            this.m_mapSoundElems.has(e) ||
              (console.warn(
                "Playing a sound which was not preloaded. Consider calling SoundEffects.Instance.preloadSounds()."
              ),
              this.loadSounds(e)),
            this.m_mapSoundElems.get(e)
          );
        }
      }
      (r.Sources = {
        [i.DashboardLoaded]: { source: "" },
        [i.DashboardLoading]: { source: "" },
        [i.DashboardOpen]: { source: "", volume: 0.5 },
        [i.DashboardClose]: { source: "", volume: 0.2 },
        [i.DashboardIdle]: { source: "" },
        [i.DashboardLaunch]: { source: "" },
        [i.DashboardKill]: { source: "" },
        [i.DashboardFailure]: { source: "" },
        [i.ControlBarButtonPress]: { source: "", volume: 1 },
        [i.ControlBarButtonRelease]: {
          source: "/dashboard/sounds/activation.wav",
        },
        [i.KeyboardClick]: { source: "" },
        [i.WindowTransition]: { source: "" },
        [i.WindowAppear]: { source: "" },
        [i.WindowDisappear]: { source: "" },
        [i.MajorTransition]: { source: "" },
        [i.Notification]: { source: "" },
        [i.ButtonClick]: { source: "/dashboard/sounds/activation.wav" },
        [i.Fiddle_03]: { source: "" },
        [i.Fiddle_04]: { source: "" },
        [i.SurfaceClick]: {
          source: "/dashboard/sounds/activation_change_fail.wav",
        },
        [i.VolumePreview]: {
          source: "/dashboard/sounds/volume_change.wav",
          bRespectsGlobalVolume: !1,
        },
        [i.Grab]: { source: "" },
        [i.GrabRelease]: { source: "/dashboard/sounds/activation.wav" },
        [i.ThemeStore]: { source: "" },
        [i.ThemeDesktop]: { source: "" },
        [i.ThemeLibrary]: { source: "" },
        [i.ThemeSettings]: { source: "" },
        [i.ThemeNowPlaying]: { source: "" },
        [i.TraySlideOut]: { source: "" },
        [i.TraySlideIn]: { source: "" },
      }),
        (r.s_Instance = null);
    },
    DwIg: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return c;
      }),
        n.d(t, "a", function () {
          return d;
        });
      var i = n("mrSG"),
        o = n("q1tI"),
        s = n("PShe"),
        r = n.n(s),
        a = (n("Wmp0"), n("7wIv")),
        l = n("KgRp");
      n("Ut/D");
      class c {
        constructor(e, t, n, i) {
          (this.sValue = e),
            (this.sLocalized = t),
            (this.sRequiredLocalized = n),
            (this.sLocalizedDescription = i);
        }
      }
      class d extends o.Component {
        constructor(e) {
          super(e),
            (this.state = {
              sSelectedOption: this.props.sValueSelectedItem,
              bVisible: !1,
            });
        }
        componentWillMount() {
          null != this.props.bShowOptionsOnStart &&
            this.setState({ bVisible: this.props.bShowOptionsOnStart });
        }
        componentWillReceiveProps(e) {
          null != e.bShowOptionsOnStart &&
            e.bShowOptionsOnStart != this.props.bShowOptionsOnStart &&
            this.setState({ bVisible: e.bShowOptionsOnStart });
        }
        Show(e) {
          this.setState({ bVisible: !0 }), e.stopPropagation();
        }
        Hide(e) {
          this.setState({ bVisible: !1 }), e && e.stopPropagation();
        }
        OnOptionChanged(e, t) {
          this.setState({ sSelectedOption: t }),
            this.props.fnOptionSelected(t),
            this.Hide(e);
        }
        render() {
          let e = this.props.vecOptions.map((e, t) => {
              if ("-" == e.sValue)
                return o.createElement("div", {
                  key: t,
                  className: "InlineSeparator",
                });
              if ("-blank" == e.sValue)
                return o.createElement(
                  "div",
                  { key: t, className: "InlineBlankSeparator" },
                  e.sLocalized
                );
              if ("-nonitem" == e.sValue)
                return o.createElement(
                  "div",
                  { key: t, className: "InlineNonItemSeparator" },
                  e.sLocalized
                );
              if ("-subHeader" == e.sValue)
                return o.createElement(
                  "div",
                  { key: t, className: "InlineSubHeaderSeparator" },
                  e.sLocalized
                );
              {
                let n,
                  i,
                  s = "InlineDropdownItem";
                return (
                  this.props.sValueSelectedItem == e.sValue &&
                    (s += " Selected"),
                  null != e.sRequiredLocalized &&
                    (n = o.createElement(
                      "span",
                      { className: "BindingLabelActionRequirement" },
                      e.sRequiredLocalized
                    )),
                  null != e.sLocalizedDescription &&
                    (i = o.createElement(
                      l.a,
                      {
                        content: e.sLocalizedDescription,
                        theme: "SourceModes",
                      },
                      o.createElement(
                        "span",
                        { className: "SourceModeHelp" },
                        "?"
                      )
                    )),
                  o.createElement(
                    "div",
                    {
                      key: t,
                      className: s,
                      onClick: (t) => {
                        this.OnOptionChanged(t, e.sValue);
                      },
                    },
                    e.sLocalized,
                    n,
                    i
                  )
                );
              }
            }),
            t =
              "InlineDropdownLabel " +
              (null == this.props.sHeaderClass ? "" : this.props.sHeaderClass),
            n =
              "InlineOptionsDropDownRodal " +
              (null == this.props.sModalClass ? "" : this.props.sModalClass);
          let i = this.props.sLocalizedSelectedItem;
          !i &&
            this.state.sSelectedOption &&
            this.props.vecOptions.forEach((e) => {
              e.sValue == this.state.sSelectedOption && (i = e.sLocalized);
            });
          let s = this.props.bReadOnly ? () => {} : this.Show;
          return o.createElement(
            "div",
            { className: t, onClick: s },
            i &&
              o.createElement(
                "div",
                { className: this.props.sMainButtonClass },
                i
              ),
            o.createElement(
              r.a,
              {
                visible: this.state.bVisible,
                onClose: this.Hide,
                customStyles: {
                  width: "60%",
                  height: "fit-content",
                  maxHeight: "90%",
                  display: "flex",
                },
                showCloseButton: !1,
                animation: "fade",
                className: n,
                closeOnEsc: !0,
              },
              this.state.bVisible &&
                o.createElement(
                  "div",
                  { className: "FlexColumn InlineDropdownModalWrapper" },
                  this.props.sModalTitleString &&
                    o.createElement(
                      "div",
                      { className: "Label ModalHeader" },
                      this.props.sModalTitleString
                    ),
                  o.createElement(
                    "div",
                    { className: "FlexColumn InlineDropdownItemWrapper" },
                    e
                  )
                )
            )
          );
        }
      }
      Object(i.b)([a.bind], d.prototype, "Show", null),
        Object(i.b)([a.bind], d.prototype, "Hide", null),
        Object(i.b)([a.bind], d.prototype, "OnOptionChanged", null);
    },
    GXif: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      }),
        n.d(t, "c", function () {
          return r;
        }),
        n.d(t, "b", function () {
          return l;
        });
      n("q1tI");
      var i = n("vDqi"),
        o = n.n(i);
      class s {
        constructor() {
          (this.m_mapTokens = new Map()),
            (this.m_mapFallbackTokens = new Map());
        }
        InitFromObjects(e, t, n, i) {
          this.m_mapTokens.clear();
          let o = [t, e, i, n];
          for (let e in o) {
            let t = o[e];
            for (let e in t) {
              let n = t[e];
              for (let e in n) {
                let t = e.toLowerCase();
                this.m_mapTokens.has(t) || this.m_mapTokens.set(t, n[e]);
              }
            }
          }
        }
        LocalizeString(e) {
          if (!e || 0 == e.length || "#" != e.charAt(0)) return "";
          let t = this.m_mapTokens.get(e.substring(1).toLowerCase());
          return void 0 === t ? "" : t;
        }
        LocalizeStringFromFallback(e) {
          if (!e || 0 == e.length || "#" != e.charAt(0)) return "";
          let t = this.m_mapFallbackTokens.get(e.substring(1).toLowerCase());
          return void 0 === t ? "" : t;
        }
        static GetLocale() {
          var e;
          const t = navigator.languages[0];
          try {
            const n =
              null === (e = VRHTML) || void 0 === e
                ? void 0
                : e.GetSystemLocale();
            if (!n) return t;
            s.s_Date.toLocaleTimeString(n);
            return n;
          } catch (e) {
            return t;
          }
        }
      }
      function r(e, ...t) {
        let n = a.LocalizeString(e);
        return n
          ? (t.length > 0 &&
              (n = n.replace(/%(\d+)\$s/g, function (e, n) {
                return void 0 !== t[n - 1] ? String(t[n - 1]) : e;
              })),
            n)
          : e;
      }
      s.s_Date = new Date();
      const a = new s();
      function l(e, t) {
        t ||
          (t = (function () {
            let e = new Map([
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
            for (let t of navigator.languages) {
              let n = t.split("-");
              if (e.has(t)) return e.get(t);
              if (e.has(n[0])) return e.get(n[0]);
            }
            return "english";
          })());
        let n = [],
          i = (e, t, n) => {
            let i,
              s = Date.now().toString();
            return (
              (i =
                "webhelper" == e
                  ? `/dashboard/localization/${e}_${t}.json?t=${s}`
                  : `localization/${e}_${t}.json?t=${s}`),
              o.a
                .get(i)
                .then((e) => {
                  n(e.data);
                })
                .catch(() => {})
            );
          },
          s = [],
          r = [],
          l = [],
          c = [];
        for (let o of e)
          n.push(
            i(o, t, (e) => {
              s.push(e);
            })
          ),
            "english" != t &&
              n.push(
                i(o, "english", (e) => {
                  l.push(e);
                })
              );
        for (let e of ["webhelper"])
          n.push(
            i(e, t, (e) => {
              r.push(e);
            })
          ),
            "english" != t &&
              n.push(
                i(e, "english", (e) => {
                  c.push(e);
                })
              );
        return Promise.all(n).then(() => {
          a.InitFromObjects(s, r, l, c);
        });
      }
      window.LocalizationManager = a;
    },
    GxMB: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return i;
      }),
        n.d(t, "a", function () {
          return g;
        }),
        n.d(t, "c", function () {
          return S;
        });
      var i,
        o = n("mrSG"),
        s = n("q1tI"),
        r = n("6YgL"),
        a = n("hcOo"),
        l = n("7wIv"),
        c = n.n(l),
        d = n("2vnA"),
        u = n("GXif"),
        p = n("p9CI"),
        h = n("/CXA"),
        m = n("Vp/w");
      !(function (e) {
        e[(e.Separator = 0)] = "Separator";
      })(i || (i = {}));
      class b extends s.Component {
        constructor() {
          super(...arguments),
            (this.m_refView = s.createRef()),
            (this.m_refScrollPanel = s.createRef()),
            (this.m_refSelectedButton = s.createRef()),
            (this.m_refParentPortal = s.createRef()),
            (this.m_elemBoundingParent = window.document.body);
        }
        renderDropdownItem(e, t) {
          switch (typeof e) {
            case "number":
              return this.renderDropdownSpecialItem(e, t);
            case "object":
              return this.renderDropdownValueItem(e);
          }
        }
        renderDropdownSpecialItem(e, t) {
          switch (e) {
            case i.Separator:
              return s.createElement("div", {
                className: "Separator",
                key: "separator" + t,
              });
            default:
              return null;
          }
        }
        renderDropdownValueItem(e) {
          return s.createElement(
            r.a,
            {
              key: JSON.stringify(e.value),
              ref:
                e == this.props.selectedItem ? this.m_refSelectedButton : null,
              className: Object(a.a)("DropdownPopoverButton", [
                "Selected",
                e == this.props.selectedItem,
              ]),
              onClick: () => this.setValue(e.value),
            },
            e.sLabel
          );
        }
        setValue(e) {
          var t, n;
          this.props.onChange && this.props.onChange(e),
            null === (n = (t = this.props).onDismissRequested) ||
              void 0 === n ||
              n.call(t);
        }
        render() {
          return s.createElement(
            m.b,
            {
              ref: this.m_refParentPortal,
              allowableParentSelectors: [
                "body",
                ".SettingsMain",
                ".DesktopHandWidget",
                "vsg-app",
                "vsg-mountable",
                "[vsg-type=panel]",
              ],
              onPortalDidMount: this.updateLayout,
            },
            s.createElement(
              h.b,
              {
                ref: this.m_refView,
                shouldDismissOnClickAnywhere: !0,
                shouldDismissOnClickInViewStack: !0,
                fadesViewsBelow: !1,
                onDismissRequested: this.props.onDismissRequested,
                className: Object(a.a)("Dropdown", "Popover"),
              },
              s.createElement(
                p.b,
                { scrollDirection: p.a.Vertical, ref: this.m_refScrollPanel },
                this.props.items.map(this.renderDropdownItem)
              )
            )
          );
        }
        componentDidMount() {
          var e;
          this.m_elemBoundingParent = Object(a.c)(
            ["body", "[vsg-type=panel]", ".SettingsSidebarPageModalContainer"],
            null === (e = this.m_refParentPortal.current) || void 0 === e
              ? void 0
              : e.anchorElement
          );
        }
        updateLayout() {
          var e, t, n, i;
          const o =
              null === (e = this.m_refView.current) || void 0 === e
                ? void 0
                : e.div,
            s =
              null === (t = this.m_refScrollPanel.current) || void 0 === t
                ? void 0
                : t.div;
          if (!o || !s) return;
          const r =
              null !=
              (i =
                null === (n = this.props.buttonRef.current) || void 0 === n
                  ? void 0
                  : n.elem.clientWidth)
                ? i
                : 0,
            a = this.m_elemBoundingParent.getBoundingClientRect();
          (s.style.minWidth = r + "px"),
            (s.style.maxWidth = a.width - 2 * b.POPOVER_BOUNDS_MARGIN + "px"),
            (s.style.maxHeight = a.height - 2 * b.POPOVER_BOUNDS_MARGIN + "px");
          const l = this.props.buttonRef.current.elem.getBoundingClientRect();
          let c = l.left,
            d = l.top;
          const u = o.getBoundingClientRect(),
            p = this.m_elemBoundingParent.getBoundingClientRect(),
            h = p.left + b.POPOVER_BOUNDS_MARGIN,
            m = p.right - b.POPOVER_BOUNDS_MARGIN,
            g = p.top + b.POPOVER_BOUNDS_MARGIN,
            S = p.bottom - b.POPOVER_BOUNDS_MARGIN;
          if (this.m_refSelectedButton.current) {
            d -=
              this.m_refSelectedButton.current.elem.getBoundingClientRect()
                .top - u.top;
          }
          const _ = d;
          c < h && (c = h),
            c + u.width > m && (c = m - u.width),
            d < g && (d = g),
            d + u.height > S && (d = S - u.height),
            (c = Math.round(c)),
            (d = Math.round(d)),
            (o.scrollTop = d - _),
            (o.style.transform =
              "translateX(" + c + "px) translateY(" + d + "px)");
        }
      }
      (b.POPOVER_BOUNDS_MARGIN = 10),
        Object(o.b)([c.a], b.prototype, "renderDropdownItem", null),
        Object(o.b)([c.a], b.prototype, "renderDropdownSpecialItem", null),
        Object(o.b)([c.a], b.prototype, "renderDropdownValueItem", null),
        Object(o.b)([c.a], b.prototype, "setValue", null),
        Object(o.b)([c.a], b.prototype, "updateLayout", null);
      class g extends s.Component {
        constructor(e) {
          super(e),
            (this.m_refButton = s.createRef()),
            (this.m_scrollWatcher = new a.e()),
            (this.state = { bShowingOptions: !1 }),
            (this.m_scrollWatcher.onScroll = this.onParentScroll);
        }
        componentWillUnmount() {
          this.m_scrollWatcher.cleanup();
        }
        componentDidUpdate(e, t) {
          this.state.bShowingOptions &&
            !t.bShowingOptions &&
            this.m_scrollWatcher.updateScrollableParents();
        }
        onParentScroll() {
          this.hideDropdown();
        }
        get value() {
          return void 0 !== this.props.value ? this.props.value : null;
        }
        get selectedItem() {
          const e = this.value;
          for (let t of this.props.items)
            if ("object" == typeof t && t.value == e) return t;
          return null;
        }
        showDropdown() {
          this.setState({ bShowingOptions: !0 });
        }
        hideDropdown() {
          this.setState({ bShowingOptions: !1 });
        }
        render() {
          const e = this.selectedItem,
            t =
              void 0 !== this.props.defaultLabel
                ? this.props.defaultLabel
                : Object(u.c)("#Settings_SelectAnOption"),
            n = e ? e.sLabel : t;
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(
              r.a,
              {
                ref: this.m_refButton,
                className: "ButtonControl Dropdown",
                onClick: this.showDropdown,
                enabled:
                  this.props.items &&
                  (this.props.items.length > 1 ||
                    (1 == this.props.items.length && !this.props.value)),
                style: {
                  pointerEvents: this.state.bShowingOptions
                    ? "none"
                    : "initial",
                },
              },
              s.createElement("span", { ref: this.m_scrollWatcher.ref }, n)
            ),
            this.state.bShowingOptions &&
              s.createElement(
                b,
                Object.assign({}, this.props, {
                  selectedItem: e,
                  buttonRef: this.m_refButton,
                  onDismissRequested: this.hideDropdown,
                })
              )
          );
        }
      }
      Object(o.b)([c.a], g.prototype, "onParentScroll", null),
        Object(o.b)([d.f], g.prototype, "value", null),
        Object(o.b)([d.f], g.prototype, "selectedItem", null),
        Object(o.b)([c.a], g.prototype, "showDropdown", null),
        Object(o.b)([c.a], g.prototype, "hideDropdown", null);
      class S extends s.Component {
        constructor(e) {
          super(e),
            (this.state = { value: void 0 === e.value ? null : e.value });
        }
        onChange(e) {
          this.setState({ value: e }),
            this.props.onChange && this.props.onChange(e);
        }
        render() {
          let e = Object.assign({}, this.props);
          return (
            (e.onChange = this.onChange),
            (e.value = this.state.value),
            s.createElement(g, Object.assign({}, e))
          );
        }
      }
      Object(o.b)([c.a], S.prototype, "onChange", null);
    },
    Ibgz: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "b", function () {
          return c;
        });
      var i,
        o = n("mrSG"),
        s = n("2vnA"),
        r = n("7wIv"),
        a = n.n(r),
        l = n("7uy8");
      !(function (e) {
        (e[(e.QuickStore = 0)] = "QuickStore"),
          (e[(e.QuickLaunch = 1)] = "QuickLaunch"),
          (e[(e.Unknown = 2)] = "Unknown");
      })(i || (i = {}));
      class c {
        constructor() {
          (this.m_LastBPEntryPoint = i.Unknown),
            (this.m_NextBPEntryPoint = i.Unknown),
            (this.m_NextBPEntryPointTimeout = 0);
        }
        static get Instance() {
          return c.s_Instance || (c.s_Instance = new c()), c.s_Instance;
        }
        get lastBigPictureEntryPoint() {
          return this.m_LastBPEntryPoint;
        }
        openBigPictureStore(e, t) {
          let n = e ? "open/bigpicture/store" : "open/bigpicture/storefront";
          e && (n += "/" + e),
            this.setNextEntryPoint(null != t ? t : i.Unknown),
            this.openSteamURL(n, {
              backstack_token: this.getBackstackTokenForEntryPoint(
                this.m_NextBPEntryPoint
              ),
            });
        }
        openBigPictureLibrary(e, t) {
          let n = e
            ? "open/bigpicture/librarydetails"
            : "open/bigpicture/games";
          e && (n += "/" + e),
            this.setNextEntryPoint(null != t ? t : i.Unknown),
            this.openSteamURL(n, {
              backstack_token: this.getBackstackTokenForEntryPoint(
                this.m_NextBPEntryPoint
              ),
            });
        }
        openBigPictureThroughLastEntryPoint() {
          var e;
          this.setNextEntryPoint(this.m_LastBPEntryPoint),
            null === (e = VRHTML) ||
              void 0 === e ||
              e.VROverlay.ShowDashboard(l.G);
        }
        getBackstackTokenForEntryPoint(e) {
          switch (e) {
            case i.QuickStore:
              return l.r;
            case i.QuickLaunch:
              return l.q;
            case i.Unknown:
              return null;
          }
        }
        latchBigPictureEntryPoint() {
          this.m_LastBPEntryPoint = this.m_NextBPEntryPoint;
        }
        setNextEntryPoint(e) {
          this.clearNextEntryPoint(),
            (this.m_NextBPEntryPointTimeout = setTimeout(
              this.clearNextEntryPoint,
              1e3
            )),
            (this.m_NextBPEntryPoint = e);
        }
        clearNextEntryPoint() {
          (this.m_NextBPEntryPoint = i.Unknown),
            window.clearTimeout(this.m_NextBPEntryPointTimeout);
        }
        openSteamURL(e, t) {
          var n;
          let i = "";
          if (t) {
            const e = Object.keys(null != t ? t : {})
              .filter((e) => void 0 !== t[e] && null !== t[e])
              .map((e) => e + "=" + t[e])
              .join("&");
            e && (i = "?" + e);
          }
          const o = "steam://" + e + i;
          console.log("Opening Steam URI: " + o),
            null === (n = VRHTML) || void 0 === n || n.OpenURL(o);
        }
      }
      (c.s_Instance = null),
        Object(o.b)([s.m], c.prototype, "m_LastBPEntryPoint", void 0),
        Object(o.b)([s.f], c.prototype, "lastBigPictureEntryPoint", null),
        Object(o.b)([s.d], c.prototype, "latchBigPictureEntryPoint", null),
        Object(o.b)([a.a], c.prototype, "clearNextEntryPoint", null);
    },
    Kysl: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      });
      var i = n("mrSG"),
        o = n("7wIv"),
        s = n("vDqi"),
        r = n.n(s),
        a = n("2vnA");
      class l {
        constructor() {
          (this.m_Applications = a.m.map()),
            (this.m_sceneApplicationStateChangedEventHandle = null);
        }
        Init() {
          var e;
          return Object(i.a)(this, void 0, void 0, function* () {
            (this.m_sceneApplicationStateChangedEventHandle =
              null === (e = VRHTML) || void 0 === e
                ? void 0
                : e.RegisterForSceneApplicationStateChangedEvents(
                    this.onSceneApplicationStateChanged
                  )),
              yield this.UpdateApplications();
          });
        }
        onSceneApplicationStateChanged() {
          this.UpdateApplications();
        }
        SetApplicationMap(e) {
          this.m_Applications.clear(),
            e.apps.forEach((e) => {
              this.m_Applications.set(e.key, e);
            });
        }
        UpdateApplications() {
          return Object(i.a)(this, void 0, void 0, function* () {
            yield this.QueryApplications().then((e) => {
              this.SetApplicationMap(e);
            });
          });
        }
        QueryApplications() {
          return new Promise(function (e, t) {
            r.a
              .get("/app/list.json")
              .then((t) => {
                e(t.data);
              })
              .catch((e) => {
                t(e);
              });
          });
        }
        GetAppImageURL(e) {
          var t, n;
          return (
            "/app/image?app_key=" +
            e +
            "&version=" +
            (null !=
            (n =
              null === (t = VRHTML) || void 0 === t
                ? void 0
                : t.SteamVRVersion())
              ? n
              : "0")
          );
        }
        GetApp(e) {
          return this.m_Applications.has(e)
            ? this.m_Applications.get(e)
            : void 0;
        }
        GetRecentApps() {
          let e = [];
          return (
            this.m_Applications.forEach((t) => {
              t.is_internal || e.push(t);
            }),
            e.sort((e, t) =>
              e.last_launch < t.last_launch
                ? 1
                : e.last_launch > t.last_launch
                ? -1
                : e.name < t.name
                ? 1
                : e.name > t.name
                ? -1
                : 0
            ),
            e
          );
        }
        GetCurrentSceneProcess() {
          let e = void 0;
          return (
            this.m_Applications.forEach((t) => {
              t.current_scene_process && !t.is_internal && (e = t);
            }),
            e
          );
        }
        GetRunningApps() {
          let e = [];
          for (let t of this.m_Applications.values()) t.pid && e.push(t);
          return e;
        }
        FindAppByPid(e) {
          for (let t of this.m_Applications.values()) if (t.pid == e) return t;
        }
        IsAppAllowedPrivateInputs(e) {
          return "openvr.component.vrcompositor" == e;
        }
        ShouldShowBindingFailureForApp(e) {
          if (null == e || "" == e) return !1;
          if ("openvr.component.vrcompositor" == e) return !0;
          if (null == this.GetApp(e)) return !1;
          let t = this.GetCurrentSceneProcess();
          return null != t && t.key == e;
        }
      }
      Object(i.b)([a.m], l.prototype, "m_Applications", void 0),
        Object(i.b)(
          [o.bind],
          l.prototype,
          "onSceneApplicationStateChanged",
          null
        ),
        Object(i.b)([a.d], l.prototype, "SetApplicationMap", null),
        Object(i.b)([o.bind], l.prototype, "QueryApplications", null),
        Object(i.b)([o.bind], l.prototype, "GetAppImageURL", null),
        Object(i.b)([o.bind], l.prototype, "GetApp", null),
        Object(i.b)([o.bind], l.prototype, "GetRecentApps", null),
        Object(i.b)([o.bind], l.prototype, "GetCurrentSceneProcess", null),
        Object(i.b)([o.bind], l.prototype, "IsAppAllowedPrivateInputs", null),
        Object(i.b)(
          [o.bind],
          l.prototype,
          "ShouldShowBindingFailureForApp",
          null
        );
      const c = new l();
      window.applications = c;
    },
    MYgy: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return i;
      }),
        n.d(t, "c", function () {
          return o;
        }),
        n.d(t, "g", function () {
          return O;
        }),
        n.d(t, "f", function () {
          return w;
        }),
        n.d(t, "d", function () {
          return j;
        }),
        n.d(t, "e", function () {
          return M;
        }),
        n.d(t, "a", function () {
          return k;
        });
      var i,
        o,
        s,
        r = n("mrSG"),
        a = n("7wIv"),
        l = n("vDqi"),
        c = n.n(l),
        d = n("2vnA"),
        u = n("GXif"),
        p = n("/i/y"),
        h = n("pYJh"),
        m = n("Kysl"),
        b = n("uFkT");
      class g {}
      Object(r.b)([d.m], g.prototype, "path", void 0),
        Object(r.b)([d.m], g.prototype, "mode", void 0),
        Object(r.b)([d.m], g.prototype, "parameters", void 0),
        Object(r.b)([d.m], g.prototype, "inputs", void 0);
      class S {}
      Object(r.b)([d.m], S.prototype, "path", void 0),
        Object(r.b)([d.m], S.prototype, "output", void 0);
      class _ {}
      Object(r.b)([d.m], _.prototype, "path", void 0),
        Object(r.b)([d.m], _.prototype, "output", void 0);
      class f {}
      Object(r.b)([d.m], f.prototype, "path", void 0),
        Object(r.b)([d.m], f.prototype, "output", void 0);
      class v {}
      Object(r.b)([d.m], v.prototype, "output", void 0),
        Object(r.b)([d.m], v.prototype, "inputs", void 0);
      class y {}
      Object(r.b)([d.m], y.prototype, "chords", void 0),
        Object(r.b)([d.m], y.prototype, "poses", void 0),
        Object(r.b)([d.m], y.prototype, "haptics", void 0),
        Object(r.b)([d.m], y.prototype, "sources", void 0),
        Object(r.b)([d.m], y.prototype, "skeleton", void 0),
        (function (e) {
          (e[(e.eButtonSide_None = 0)] = "eButtonSide_None"),
            (e[(e.eButtonSide_Left = 1)] = "eButtonSide_Left"),
            (e[(e.eButtonSide_Right = 2)] = "eButtonSide_Right");
        })(i || (i = {})),
        (function (e) {
          (e.eTrackPadInvert_None = ""),
            (e.eTrackPadInvert_X = "x"),
            (e.eTrackPadInvert_Y = "y"),
            (e.eTrackPadInvert_XY = "xy");
        })(o || (o = {}));
      class O {
        constructor() {
          (this.vecRequired = []), (this.vecSuggested = []);
        }
      }
      class A {}
      Object(r.b)([d.m], A.prototype, "device_path_string", void 0),
        Object(r.b)([d.m], A.prototype, "device_path_handle", void 0),
        Object(r.b)([d.m], A.prototype, "role", void 0),
        Object(r.b)([d.m], A.prototype, "controller_role", void 0);
      class C {}
      function w(e) {
        return new Promise(function (t, n) {
          c.a
            .get("/input/getactions.json?app_key=" + e)
            .then((n) => {
              console.log("Loaded action manifest for ", e), t(n.data);
            })
            .catch((e) => {
              n(e);
            });
        });
      }
      function j(e, t, n) {
        return Object(r.a)(this, void 0, void 0, function* () {
          let i = (yield c.a.get(
            "/input/loadbindingfromurl.json?binding_url=" +
              encodeURI(n) +
              "&controller_type=" +
              encodeURI(t) +
              "&app_key=" +
              encodeURI(e)
          )).data;
          if (i.success) return i;
          throw new Error(i.error);
        });
      }
      Object(r.b)([d.m], C.prototype, "trackers", void 0),
        Object(r.b)([d.m], C.prototype, "valid_roles", void 0);
      class M {
        constructor(e, t) {
          (this.x = e), (this.y = t), this.toString.bind(this);
        }
        toString() {
          return this.x + "," + this.y;
        }
      }
      class T {
        constructor(e, t, n, i, o) {
          (this.m_BindingUISource = void 0),
            (this.m_ControllerProfile = void 0),
            (this.m_sDeviceInputPath = void 0),
            (this.m_eButtonSide = void 0),
            (this.m_sInputPath = void 0),
            (this.m_sActionSet = void 0),
            (this.m_BindingStoreObserverDisposer = void 0),
            (this.m_iNewSourceEntry = -1),
            (this.m_sDeviceInputPath = e),
            (this.m_ControllerProfile = t),
            (this.m_eButtonSide = n),
            (this.m_sInputPath = i),
            (this.m_sActionSet = o),
            (this.m_BindingStoreObserverDisposer = Object(d.n)(k, (e) => {
              "m_LoadedBinding" == e.name && this.UpdateBindingSource();
            })),
            this.UpdateBindingSource(),
            k.RegisterBindingWatcher(this.UpdateBindingSource.bind(this));
        }
        cancelWatcher() {
          this.m_BindingStoreObserverDisposer(),
            k.UnregisterBindingWatcher(this.UpdateBindingSource);
        }
        UpdateBindingSource() {
          this.m_BindingUISource = k.GetActionBinding(
            this.GetFullInputPath,
            this.m_sActionSet
          );
        }
        get GetFullInputPath() {
          let e = this.m_sDeviceInputPath + this.m_sInputPath;
          return (e = e.replace(/([^:]\/)\/+/g, "$1")), e;
        }
        GetSVGEndPoint() {
          return new M(
            this.m_ControllerProfile.input_source[
              this.m_sInputPath
            ].binding_image_point[0],
            this.m_ControllerProfile.input_source[
              this.m_sInputPath
            ].binding_image_point[1]
          );
        }
        get GetButtonSide() {
          return this.m_eButtonSide;
        }
        get GetNumModes() {
          return this.m_BindingUISource ? this.m_BindingUISource.length : 0;
        }
        GetActionForInputType(e, t) {
          if (
            this.m_BindingUISource &&
            this.m_BindingUISource[e].inputs &&
            this.m_BindingUISource[e].inputs.has(t)
          ) {
            let n = this.m_BindingUISource[e].inputs.get(t).output,
              i = k.GetActionByName(n);
            if (!i) {
              let e = k.GetSimulatedActionByPath(n);
              e && (i = k.CreateActionDefinitionForSimulatedAction(e));
            }
            let o = k.GetAliasInfo(n);
            return (
              i &&
                o &&
                o.alias_name &&
                ((i = Object.assign({}, i)), (i.localized_name = o.alias_name)),
              i
            );
          }
        }
        GetClickAction(e) {
          return this.GetActionForInputType(e, "click");
        }
        GetTouchAction(e) {
          return this.GetActionForInputType(e, "touch");
        }
        GetPositionAction(e) {
          return this.GetActionForInputType(e, "position");
        }
        GetHeldAction(e) {
          return this.GetActionForInputType(e, "held");
        }
        GetLongAction(e) {
          return this.GetActionForInputType(e, "long");
        }
        GetSingleAction(e) {
          return this.GetActionForInputType(e, "single");
        }
        GetDoubleAction(e) {
          return this.GetActionForInputType(e, "double");
        }
        GetNorthAction(e) {
          return this.GetActionForInputType(e, "north");
        }
        GetEastAction(e) {
          return this.GetActionForInputType(e, "east");
        }
        GetSouthAction(e) {
          return this.GetActionForInputType(e, "south");
        }
        GetWestAction(e) {
          return this.GetActionForInputType(e, "west");
        }
        GetCenterAction(e) {
          return this.GetActionForInputType(e, "center");
        }
        GetScrollAction(e) {
          return this.GetActionForInputType(e, "scroll");
        }
        GetPullAction(e) {
          return this.GetActionForInputType(e, "pull");
        }
        GetForceAction(e) {
          return this.GetActionForInputType(e, "force");
        }
        GetGrabAction(e) {
          return this.GetActionForInputType(e, "grab");
        }
        GetValueAction(e) {
          return this.GetActionForInputType(e, "value");
        }
        get GetControllerInputName() {
          return b.a.LocalizeDriverString(
            this.m_ControllerProfile.resource_root,
            this.m_sInputPath
          );
        }
        get GetModes() {
          return this.m_BindingUISource ? this.m_BindingUISource : [];
        }
        GetMode(e) {
          return this.m_BindingUISource &&
            e >= 0 &&
            e < this.m_BindingUISource.length
            ? this.m_BindingUISource[e].mode
            : "none";
        }
        get GetInputSourceType() {
          return this.m_ControllerProfile.input_source[this.m_sInputPath].type;
        }
        get GetInputSource() {
          return this.m_ControllerProfile.input_source[this.m_sInputPath];
        }
        get GetInputSourceClickSupport() {
          return (
            !(
              this.m_ControllerProfile.input_source[this.m_sInputPath].force &&
              !this.m_ControllerProfile.input_source[this.m_sInputPath].click
            ) &&
            ("knuckles" != this.m_ControllerProfile.controller_type ||
              "/input/trackpad" != this.m_sInputPath) &&
            !(
              !this.m_ControllerProfile.input_source[this.m_sInputPath].click &&
              !this.m_ControllerProfile.input_source[this.m_sInputPath].touch
            ) &&
            (this.m_ControllerProfile.input_source[this.m_sInputPath].click ||
              this.m_ControllerProfile.input_source[this.m_sInputPath].touch)
          );
        }
        get GetInputSourceTouchSupport() {
          return (
            !(
              !this.m_ControllerProfile.input_source[this.m_sInputPath].touch &&
              !this.m_ControllerProfile.input_source[this.m_sInputPath]
                .proximity
            ) &&
            (this.m_ControllerProfile.input_source[this.m_sInputPath].touch ||
              this.m_ControllerProfile.input_source[this.m_sInputPath]
                .proximity)
          );
        }
        get GetInputSourceForceSupport() {
          return (
            !!this.m_ControllerProfile.input_source[this.m_sInputPath].force &&
            this.m_ControllerProfile.input_source[this.m_sInputPath].force
          );
        }
        get GetInputSourceDefaultDeadzone() {
          return this.m_ControllerProfile.input_source[this.m_sInputPath]
            .default_dead_zone_pct
            ? this.m_ControllerProfile.input_source[this.m_sInputPath]
                .default_dead_zone_pct
            : 0;
        }
        SetInputMode(e, t) {
          !this.m_BindingUISource || t < 0 || t >= this.m_BindingUISource.length
            ? console.error("SetInputMode: Invalid mode index for new mode")
            : (this.ClearNewModeIfSet(t),
              k.SetInputModeForInputSource(this.GetFullInputPath, t, e));
        }
        AddInputMode(e) {
          this.m_iNewSourceEntry = k.AddInputModeForSource(
            this.GetFullInputPath,
            e
          );
        }
        DeleteInputMode(e) {
          !this.m_BindingUISource || e < 0 || e >= this.m_BindingUISource.length
            ? console.error("SetInputMode: Invalid mode index for new mode")
            : k.DeleteInputModeForSource(this.GetFullInputPath, e);
        }
        ClearNewModeIfSet(e) {
          -1 != this.m_iNewSourceEntry &&
            this.m_iNewSourceEntry == e &&
            (this.m_iNewSourceEntry = -1);
        }
        BHasModeSelectionPending(e) {
          return -1 != this.m_iNewSourceEntry && this.m_iNewSourceEntry == e;
        }
        SetClickAction(e, t) {
          k.SetActionForInputModeType(this.GetFullInputPath, e, "click", t, [
            "button",
            "trackpad",
            "joystick",
            "trigger",
            "toggle_button",
            "complex_button",
          ]);
        }
        SetTouchAction(e, t) {
          k.SetActionForInputModeType(this.GetFullInputPath, e, "touch", t, [
            "button",
            "trackpad",
            "joystick",
            "trigger",
            "toggle_button",
            "complex_button",
          ]);
        }
        SetHeldAction(e, t) {
          k.SetActionForInputModeType(this.GetFullInputPath, e, "held", t, [
            "button",
            "complex_button",
          ]);
        }
        SetLongAction(e, t) {
          k.SetActionForInputModeType(this.GetFullInputPath, e, "long", t, [
            "button",
            "complex_button",
          ]);
        }
        SetSingleAction(e, t) {
          k.SetActionForInputModeType(this.GetFullInputPath, e, "single", t, [
            "button",
            "complex_button",
          ]);
        }
        SetDoubleAction(e, t) {
          k.SetActionForInputModeType(this.GetFullInputPath, e, "double", t, [
            "button",
            "complex_button",
          ]);
        }
        SetPositionAction(e, t) {
          k.SetActionForInputModeType(this.GetFullInputPath, e, "position", t, [
            "trackpad",
            "joystick",
          ]);
        }
        SetNorthAction(e, t) {
          k.SetActionForInputModeType(this.GetFullInputPath, e, "north", t, [
            "dpad",
            "dpad_click",
            "dpad_touch",
          ]);
        }
        SetEastAction(e, t) {
          k.SetActionForInputModeType(this.GetFullInputPath, e, "east", t, [
            "dpad",
            "dpad_click",
            "dpad_touch",
          ]);
        }
        SetSouthAction(e, t) {
          k.SetActionForInputModeType(this.GetFullInputPath, e, "south", t, [
            "dpad",
            "dpad_click",
            "dpad_touch",
          ]);
        }
        SetWestAction(e, t) {
          k.SetActionForInputModeType(this.GetFullInputPath, e, "west", t, [
            "dpad",
            "dpad_click",
            "dpad_touch",
          ]);
        }
        SetCenterAction(e, t) {
          k.SetActionForInputModeType(this.GetFullInputPath, e, "center", t, [
            "dpad",
            "dpad_click",
            "dpad_touch",
          ]);
        }
        SetScrollAction(e, t) {
          k.SetActionForInputModeType(this.GetFullInputPath, e, "scroll", t, [
            "scroll",
          ]);
        }
        SetPullAction(e, t) {
          k.SetActionForInputModeType(this.GetFullInputPath, e, "pull", t, [
            "trigger",
          ]);
        }
        SetForceAction(e, t) {
          k.SetActionForInputModeType(this.GetFullInputPath, e, "force", t, [
            "force_sensor",
          ]);
        }
        SetGrabAction(e, t) {
          k.SetActionForInputModeType(this.GetFullInputPath, e, "grab", t, [
            "grab",
          ]);
        }
        SetValueAction(e, t) {
          k.SetActionForInputModeType(this.GetFullInputPath, e, "value", t, [
            "scalar_constant",
          ]);
        }
        CopyActions(e) {
          k.ClearModesForInputPath(this.GetFullInputPath),
            e.GetModes.map((e, t) => {
              k.AddInputModeForSource(this.GetFullInputPath, e.mode),
                e.inputs.forEach((e, n) => {
                  k.SetActionForInputModeType(
                    this.GetFullInputPath,
                    t,
                    n,
                    e.output,
                    []
                  );
                });
            });
        }
        BindingsMatch(e) {
          let t = e.GetModes;
          if (this.GetModes.length != t.length) return !1;
          for (let e = 0; e < t.length; e++) {
            let n = t[e],
              i = this.GetModes.filter((e) => e.mode == n.mode);
            if (i.length > 0) {
              let e = !0;
              return (
                i[0].inputs.forEach((t, i) => {
                  (n.inputs.has(i) && n.inputs.get(i).output == t.output) ||
                    (e = !1);
                }),
                e
              );
            }
            return !1;
          }
          return !0;
        }
        SetClickParameter(e, t, n) {
          k.SetParameterForInputModeType(
            this.GetFullInputPath,
            e,
            "click",
            t,
            n
          );
        }
        SetTouchParameter(e, t, n) {
          k.SetParameterForInputModeType(
            this.GetFullInputPath,
            e,
            "touch",
            t,
            n
          );
        }
        SetParameter(e, t, n, i) {
          k.SetParameterForInputModeType(this.GetFullInputPath, e, t, n, i);
        }
        GetClickParameter(e, t) {
          return k.GetParameterForInputModeType(
            this.GetFullInputPath,
            e,
            "click",
            t
          );
        }
        GetTouchParameter(e, t) {
          return k.GetParameterForInputModeType(
            this.GetFullInputPath,
            e,
            "touch",
            t
          );
        }
        GetParameter(e, t, n) {
          return k.GetParameterForInputModeType(this.GetFullInputPath, e, t, n);
        }
        GetTrackpadInvertState(e) {
          switch (
            k.GetParameterForInputModeType(
              this.GetFullInputPath,
              e,
              "trackpad",
              "invert"
            )
          ) {
            case "x":
              return o.eTrackPadInvert_X;
            case "y":
              return o.eTrackPadInvert_Y;
            case "xy":
              return o.eTrackPadInvert_XY;
            default:
              return o.eTrackPadInvert_None;
          }
        }
        SetTrackpadInvertState(e, t) {
          let n = "";
          switch (t) {
            case o.eTrackPadInvert_X:
              n = "x";
              break;
            case o.eTrackPadInvert_Y:
              n = "y";
              break;
            case o.eTrackPadInvert_XY:
              n = "xy";
          }
          k.SetParameterForInputModeType(
            this.GetFullInputPath,
            e,
            "trackpad",
            "invert",
            n
          );
        }
      }
      Object(r.b)([d.m], T.prototype, "m_BindingUISource", void 0),
        Object(r.b)([d.m], T.prototype, "m_ControllerProfile", void 0),
        Object(r.b)([d.m], T.prototype, "m_sDeviceInputPath", void 0),
        Object(r.b)([d.m], T.prototype, "m_eButtonSide", void 0),
        Object(r.b)([d.m], T.prototype, "m_sInputPath", void 0),
        Object(r.b)([d.m], T.prototype, "m_sActionSet", void 0),
        Object(r.b)([a.bind], T.prototype, "cancelWatcher", null),
        Object(r.b)([d.d], T.prototype, "UpdateBindingSource", null),
        Object(r.b)([d.f], T.prototype, "GetFullInputPath", null),
        Object(r.b)([a.bind], T.prototype, "GetSVGEndPoint", null),
        Object(r.b)([d.f], T.prototype, "GetButtonSide", null),
        Object(r.b)([d.f], T.prototype, "GetNumModes", null),
        Object(r.b)([a.bind], T.prototype, "GetActionForInputType", null),
        Object(r.b)([a.bind], T.prototype, "GetClickAction", null),
        Object(r.b)([a.bind], T.prototype, "GetTouchAction", null),
        Object(r.b)([a.bind], T.prototype, "GetPositionAction", null),
        Object(r.b)([a.bind], T.prototype, "GetHeldAction", null),
        Object(r.b)([a.bind], T.prototype, "GetLongAction", null),
        Object(r.b)([a.bind], T.prototype, "GetSingleAction", null),
        Object(r.b)([a.bind], T.prototype, "GetDoubleAction", null),
        Object(r.b)([a.bind], T.prototype, "GetNorthAction", null),
        Object(r.b)([a.bind], T.prototype, "GetEastAction", null),
        Object(r.b)([a.bind], T.prototype, "GetSouthAction", null),
        Object(r.b)([a.bind], T.prototype, "GetWestAction", null),
        Object(r.b)([a.bind], T.prototype, "GetCenterAction", null),
        Object(r.b)([a.bind], T.prototype, "GetScrollAction", null),
        Object(r.b)([a.bind], T.prototype, "GetPullAction", null),
        Object(r.b)([a.bind], T.prototype, "GetForceAction", null),
        Object(r.b)([a.bind], T.prototype, "GetGrabAction", null),
        Object(r.b)([a.bind], T.prototype, "GetValueAction", null),
        Object(r.b)([d.f], T.prototype, "GetControllerInputName", null),
        Object(r.b)([d.f], T.prototype, "GetModes", null),
        Object(r.b)([a.bind], T.prototype, "GetMode", null),
        Object(r.b)([d.f], T.prototype, "GetInputSourceType", null),
        Object(r.b)([d.f], T.prototype, "GetInputSource", null),
        Object(r.b)([d.f], T.prototype, "GetInputSourceClickSupport", null),
        Object(r.b)([d.f], T.prototype, "GetInputSourceTouchSupport", null),
        Object(r.b)([d.f], T.prototype, "GetInputSourceForceSupport", null),
        Object(r.b)([d.f], T.prototype, "GetInputSourceDefaultDeadzone", null),
        Object(r.b)([d.d], T.prototype, "SetInputMode", null),
        Object(r.b)([d.d], T.prototype, "AddInputMode", null),
        Object(r.b)([d.d], T.prototype, "DeleteInputMode", null),
        Object(r.b)([a.bind], T.prototype, "ClearNewModeIfSet", null),
        Object(r.b)([a.bind], T.prototype, "BHasModeSelectionPending", null),
        Object(r.b)([d.d], T.prototype, "SetClickAction", null),
        Object(r.b)([d.d], T.prototype, "SetTouchAction", null),
        Object(r.b)([d.d], T.prototype, "SetHeldAction", null),
        Object(r.b)([d.d], T.prototype, "SetLongAction", null),
        Object(r.b)([d.d], T.prototype, "SetSingleAction", null),
        Object(r.b)([d.d], T.prototype, "SetDoubleAction", null),
        Object(r.b)([d.d], T.prototype, "SetPositionAction", null),
        Object(r.b)([d.d], T.prototype, "SetNorthAction", null),
        Object(r.b)([d.d], T.prototype, "SetEastAction", null),
        Object(r.b)([d.d], T.prototype, "SetSouthAction", null),
        Object(r.b)([d.d], T.prototype, "SetWestAction", null),
        Object(r.b)([d.d], T.prototype, "SetCenterAction", null),
        Object(r.b)([d.d], T.prototype, "SetScrollAction", null),
        Object(r.b)([d.d], T.prototype, "SetPullAction", null),
        Object(r.b)([d.d], T.prototype, "SetForceAction", null),
        Object(r.b)([d.d], T.prototype, "SetGrabAction", null),
        Object(r.b)([d.d], T.prototype, "SetValueAction", null),
        Object(r.b)([d.d], T.prototype, "CopyActions", null),
        Object(r.b)([a.bind], T.prototype, "BindingsMatch", null),
        Object(r.b)([d.d], T.prototype, "SetClickParameter", null),
        Object(r.b)([d.d], T.prototype, "SetTouchParameter", null),
        Object(r.b)([d.d], T.prototype, "SetParameter", null),
        Object(r.b)([d.d], T.prototype, "GetClickParameter", null),
        Object(r.b)([d.d], T.prototype, "GetTouchParameter", null),
        Object(r.b)([d.d], T.prototype, "GetParameter", null),
        Object(r.b)([a.bind], T.prototype, "GetTrackpadInvertState", null),
        Object(r.b)([d.d], T.prototype, "SetTrackpadInvertState", null);
      class R {
        constructor(e, t, n) {
          (this.m_sSaveType = e),
            (this.m_OutstandingSaveBindingResolve = t),
            (this.m_OutstandingSaveBindingReject = n);
        }
        resolve(e) {
          this.m_OutstandingSaveBindingResolve(e);
        }
        reject(e) {
          this.m_OutstandingSaveBindingReject(e);
        }
        get SaveType() {
          return this.m_sSaveType;
        }
      }
      Object(r.b)([a.bind], R.prototype, "resolve", null),
        Object(r.b)([a.bind], R.prototype, "reject", null),
        (function (e) {
          (e[(e.eWebSocketState_Unknown = 0)] = "eWebSocketState_Unknown"),
            (e[(e.eWebSocketState_Disconnected = 1)] =
              "eWebSocketState_Disconnected"),
            (e[(e.eWebSocketState_Connecting = 2)] =
              "eWebSocketState_Connecting"),
            (e[(e.eWebSocketState_Connected = 3)] =
              "eWebSocketState_Connected");
        })(s || (s = {}));
      class E {
        constructor() {
          (this.m_wsWebSocketToServer = void 0),
            (this.m_eWebSocketState = s.eWebSocketState_Unknown),
            (this.m_timerWebSocket = void 0),
            (this.m_dateStartTime = new Date()),
            (this.m_sLoadedBindingURI = void 0),
            (this.m_LoadedBinding = void 0),
            (this.m_ModifiedBindingSet = d.m.map()),
            (this.m_ModifiedOptions = d.m.map()),
            (this.m_ModifiedAliases = d.m.map()),
            (this.m_sName = void 0),
            (this.m_sDescription = void 0),
            (this.m_SelectedApp = void 0),
            (this.m_SelectedAppActions = void 0),
            (this.m_sSelectedActionSet = void 0),
            (this.m_sSelectedControllerType = void 0),
            (this.m_TrackerBindingSetup = void 0),
            (this.m_bControllerTypeSelectedByUser = !1),
            (this.m_OutstandingSaveBindingCalls = []),
            (this.m_vecBindingSetWatchers = Array()),
            (this.m_mapUnoundActions = new Map()),
            (this.m_bIsMissingRequiredActions = !1),
            (this.m_rKnownFailedBindingUris = []),
            (this.m_ControllerWatchers = new Map()),
            (this.m_ModifiedSimulatedActions = d.m.map()),
            (this.m_nNextSimulatedActionId = 1),
            (this.m_nBindingSubscriptionChangedCanary = 1);
        }
        OpenWebSocketToHost() {
          return new Promise((e, t) => {
            this.m_eWebSocketState != s.eWebSocketState_Connecting &&
              this.m_eWebSocketState != s.eWebSocketState_Connected &&
              (this.m_wsWebSocketToServer && delete this.m_wsWebSocketToServer,
              (this.m_wsWebSocketToServer = new WebSocket(
                "ws://" + window.location.host
              )),
              this.m_wsWebSocketToServer.addEventListener("open", (t) => {
                this.OnWebSocketOpen(t), e();
              }),
              this.m_wsWebSocketToServer.addEventListener("message", (e) => {
                this.OnWebSocketMessage(e);
              }),
              this.m_wsWebSocketToServer.addEventListener("close", (e) => {
                this.OnWebSocketClose(e);
              }),
              (this.m_eWebSocketState = s.eWebSocketState_Connecting)),
              this.m_timerWebSocket ||
                (this.m_timerWebSocket = window.setTimeout(
                  this.OpenWebSocketToHost,
                  1e3
                ));
          });
        }
        Init() {
          return Object(r.a)(this, void 0, void 0, function* () {
            yield this.OpenWebSocketToHost(), yield this.RefreshInputState();
          });
        }
        CountDevicesWithControllerType(e) {
          let t = 0;
          return (
            b.a.ConnectedDevices.forEach((n) => {
              n.controller_type == e && t++;
            }),
            t
          );
        }
        ComputeControllerTypeScore(e) {
          var t, n;
          let i = this.CountDevicesWithControllerType(e.controller_type),
            o =
              ((null === (t = p.mb) || void 0 === t ? void 0 : t.HasHMD())
                ? null === (n = p.mb) || void 0 === n
                  ? void 0
                  : n.VRProperties.GetStringProperty(
                      "/user/head",
                      p.y.Prop_ExpectedControllerType_String
                    )
                : void 0) == e.controller_type
                ? 2
                : 1;
          return 1e3 * (999 - e.priority) + 10 * i + o;
        }
        GetBestControllerType() {
          let e,
            t = 0;
          return (
            b.a.ControllerTypes.forEach((n) => {
              let i = this.ComputeControllerTypeScore(n);
              i > t && ((e = n), (t = i));
            }),
            e
          );
        }
        RefreshInputState() {
          return Object(r.a)(this, void 0, void 0, function* () {
            let e = b.a.KnownControllerTypes.size;
            return b.a.GetInputState().then(() => {
              this.m_SelectedApp &&
                e != b.a.KnownControllerTypes.size &&
                this.ReloadCurrentApp();
              let t = !1;
              const n = this.GetBestControllerType();
              let i = b.a.FindDeviceClassForControllerType(
                this.m_sSelectedControllerType
              );
              if (
                null != n &&
                this.m_sSelectedControllerType != n.controller_type &&
                !this.m_bControllerTypeSelectedByUser
              ) {
                let e = b.a.FindDeviceClassForControllerType(n.controller_type);
                h.a.IsSafeToResetControllerType(i, e) &&
                  ((this.m_sSelectedControllerType = n.controller_type),
                  (t = !0),
                  null != i && h.a.RefreshBindingList());
              }
              return t ? this.ReloadControllerConfiguration() : null;
            });
          });
        }
        get SteamVRUnavailable() {
          return this.m_eWebSocketState == s.eWebSocketState_Connecting ||
            this.m_eWebSocketState == s.eWebSocketState_Unknown
            ? Date.now() - this.m_dateStartTime.getTime() > 1e4
            : this.m_eWebSocketState != s.eWebSocketState_Connected;
        }
        get ActionSets() {
          if (
            null == this.m_SelectedAppActions ||
            null == this.m_SelectedAppActions.action_sets
          )
            return [];
          let e = [];
          return (
            this.m_SelectedAppActions.action_sets.forEach((t) => {
              if ("hidden" != t.usage) {
                let n = !0;
                t.required_options &&
                  t.required_options.forEach((e) => {
                    this.GetOptionValue(e) || (n = !1);
                  });
                let i = !1;
                t.forbidden_options &&
                  t.forbidden_options.forEach((e) => {
                    this.GetOptionValue(e) && (i = !0);
                  }),
                  n && !i && e.push(t);
              }
            }),
            e
          );
        }
        get ManifestOptions() {
          return null == this.m_SelectedAppActions ||
            null == this.m_SelectedAppActions.action_sets ||
            null == this.m_SelectedAppActions.options
            ? []
            : this.m_SelectedAppActions.options;
        }
        get SecondaryControllerOptions() {
          return [
            {
              name: "returnBindingsWithLeftHand",
              localized_name: Object(u.c)(
                "#SecondaryController_ReturnWithLeftHand"
              ),
              type: "bool",
              default: !1,
            },
            {
              name: "returnBindingsWithRightHand",
              localized_name: Object(u.c)(
                "#SecondaryController_ReturnWithRightHand"
              ),
              type: "bool",
              default: !1,
            },
            {
              name: "returnBindingsWithHead",
              localized_name: Object(u.c)(
                "#SecondaryController_ReturnWithHead"
              ),
              type: "bool",
              default: !1,
            },
          ];
        }
        GetOptionDefault(e) {
          let t = !1;
          return (
            this.ManifestOptions.forEach((n) => {
              n.name == e && (t = n.default);
            }),
            t
          );
        }
        GetOptionValue(e) {
          return this.m_ModifiedOptions.has(e)
            ? this.m_ModifiedOptions.get(e)
            : void 0;
        }
        SetOptionValue(e, t) {
          this.m_ModifiedOptions.set(e, t), this.NotifyWatchersOfChange();
        }
        GetAliasInfo(e) {
          return this.m_ModifiedAliases.has(e)
            ? this.m_ModifiedAliases.get(e)
            : null;
        }
        SetAliasName(e, t) {
          if (this.m_ModifiedAliases.has(e)) {
            let n = this.m_ModifiedAliases.get(e);
            (n.alias_name = t),
              this.m_ModifiedAliases.set(e, n),
              this.NotifyWatchersOfChange();
          } else {
            let n = { alias_name: t, hidden: !1 };
            this.m_ModifiedAliases.set(e, n), this.NotifyWatchersOfChange();
          }
        }
        SetAliasHidden(e, t) {
          if (this.m_ModifiedAliases.has(e)) {
            let n = this.m_ModifiedAliases.get(e);
            (n.hidden = t),
              this.m_ModifiedAliases.set(e, n),
              this.NotifyWatchersOfChange();
          } else {
            let n = { alias_name: "", hidden: t };
            this.m_ModifiedAliases.set(e, n), this.NotifyWatchersOfChange();
          }
        }
        ComputeSimulatedActionPathFromId(e) {
          return "/simactions/" + e;
        }
        GetSimulatedActionByPath(e) {
          return this.m_ModifiedSimulatedActions.has(e)
            ? this.m_ModifiedSimulatedActions.get(e)
            : void 0;
        }
        SetSimulatedActionByPath(e, t) {
          this.m_ModifiedSimulatedActions.set(e, t),
            this.NotifyWatchersOfChange();
        }
        AddSimulatedAction(e) {
          let t = {
              name: "",
              type: e,
              id: this.m_nNextSimulatedActionId++,
              output: "",
            },
            n = this.ComputeSimulatedActionPathFromId(t.id);
          this.m_ModifiedSimulatedActions.set(n, t),
            this.NotifyWatchersOfChange();
        }
        DeleteSimulatedActionByPath(e) {
          this.m_ModifiedSimulatedActions.delete(e),
            this.NotifyWatchersOfChange();
        }
        get SimulatedActions() {
          return Array.from(this.m_ModifiedSimulatedActions.values());
        }
        get SelectedApp() {
          return this.m_SelectedApp ? this.m_SelectedApp.key : void 0;
        }
        get SelectedAppActions() {
          return this.m_SelectedAppActions;
        }
        get CurrentAppCanAccessPrivateInputs() {
          return (
            m.a.IsAppAllowedPrivateInputs(this.m_SelectedApp.key) ||
            b.a.ShouldSendSystemButtonToAllApps
          );
        }
        get SelectedControllerTypeInfo() {
          if (b.a.IsValid && null != this.m_sSelectedControllerType)
            return b.a.GetControllerTypeInfo(this.m_sSelectedControllerType);
        }
        DeviceForControllerType(e, t) {
          let n = b.a.GetControllerTypeInfo(e);
          if (!n) return;
          let o = !1,
            s = b.a.ConnectedDevices.find((s) => {
              if (s.controller_type == e) {
                if (((o = !0), !t)) return !0;
                if ("controller_handed" != n.input_bindingui_mode) return !0;
                let e = t == i.eButtonSide_Left ? "/left" : "/right";
                if (s.root_path && s.root_path.indexOf(e) >= 0) return !0;
              }
              return !1;
            });
          return (
            s ||
            (o
              ? b.a.ConnectedDevices.find((t) => t.controller_type == e)
              : void 0)
          );
        }
        get CurrentBindingSaveType() {
          if (null != this.m_LoadedBinding)
            return "developer" == this.m_LoadedBinding.save_type &&
              k.SelectedBindingIsLegacy
              ? "developer_legacy"
              : this.m_LoadedBinding.save_type;
        }
        get CurrentBindingActionManifestVersion() {
          return this.m_LoadedBinding &&
            this.m_LoadedBinding.binding_config &&
            this.m_LoadedBinding.binding_config.action_manifest_version
            ? this.m_LoadedBinding.binding_config.action_manifest_version
            : 0;
        }
        get SelectedActionSet() {
          return this.m_sSelectedActionSet;
        }
        get SelectedActionSetDetails() {
          if (
            null != this.m_SelectedAppActions &&
            null != this.m_sSelectedActionSet
          )
            return this.m_SelectedAppActions.action_sets.find(
              (e) => e.name == this.m_sSelectedActionSet
            );
        }
        get SelectedActionSetActions() {
          return this.GetActionSetActions(this.m_sSelectedActionSet);
        }
        GetSelectedAppDefaultBinding(e) {
          if (null != this.m_SelectedAppActions)
            return this.m_SelectedAppActions.default_bindings &&
              this.m_SelectedAppActions.default_bindings.hasOwnProperty(e)
              ? this.m_SelectedAppActions.default_bindings[e]
              : void 0;
        }
        GetActionSetActions(e) {
          if (null == this.m_SelectedAppActions || null == e) return [];
          let t = this.m_SelectedAppActions.action_sets.find(
            (t) => t.name == e
          );
          return t ? t.actions : [];
        }
        GetActionByName(e) {
          if (
            null == this.m_SelectedApp ||
            !this.m_SelectedAppActions.action_sets
          )
            return;
          let t = e.toLowerCase(),
            n = void 0;
          return (
            this.m_SelectedAppActions.action_sets.forEach((e) => {
              if (!e.actions) return;
              let i = e.actions.find((e) => e.name.toLowerCase() == t);
              i && (n = i);
            }),
            n
          );
        }
        get UnboundActions() {
          this.m_bIsMissingRequiredActions = !1;
          for (let e of this.ActionSets) {
            let t = [],
              n = [];
            if (!e.actions) break;
            for (let i of e.actions)
              if (
                "optional" != i.requirement &&
                !this.IsActionBound(e, i.name)
              ) {
                let e = this.GetAliasInfo(i.name);
                if (e) {
                  if (e.hidden) continue;
                  e.alias_name &&
                    ((i = Object.assign({}, i)),
                    (i.localized_name = e.alias_name));
                }
                "mandatory" == i.requirement ? t.push(i) : n.push(i);
              }
            if (
              (t.length > 0 && (this.m_bIsMissingRequiredActions = !0),
              this.m_mapUnoundActions.has(e.name))
            ) {
              let i = this.m_mapUnoundActions.get(e.name);
              (i.vecRequired = t), (i.vecSuggested = n);
            } else
              this.m_mapUnoundActions.set(e.name, {
                vecRequired: t,
                vecSuggested: n,
              });
          }
          let e = this.SelectedControllerTypeInfo;
          return (
            e &&
              "TrackedDeviceClass_HMD" == e.device_class &&
              (this.m_bIsMissingRequiredActions = !1),
            this.IsSecondaryController &&
              (this.m_bIsMissingRequiredActions = !1),
            this.m_mapUnoundActions
          );
        }
        get HasUnboundActions() {
          return this.UnboundActions, this.m_bIsMissingRequiredActions;
        }
        IsActionBound(e, t) {
          t = t.toLowerCase();
          let n = this.GetActionSetSources(e.name);
          if (n)
            for (let e of n) {
              let n = !1;
              if (
                (e.inputs.forEach((e) => {
                  e.output.toLowerCase() == t && (n = !0);
                }),
                n)
              )
                return !0;
            }
          let i = this.GetActionSetChords(e.name);
          if (i)
            for (let e of i)
              if (e.output && e.output.toLowerCase() == t) return !0;
          let o = this.GetActionSetPoses(e.name);
          if (o)
            for (let e of o)
              if (e.output && e.output.toLowerCase() == t) return !0;
          let s = this.GetActionSetHaptics(e.name);
          if (s)
            for (let e of s)
              if (e.output && e.output.toLowerCase() == t) return !0;
          let r = this.GetActionSetSkeleton(e.name);
          if (r)
            for (let e of r)
              if (e.output && e.output.toLowerCase() == t) return !0;
          return !1;
        }
        GetActionSetPoses(e) {
          return this.m_ModifiedBindingSet.has(e)
            ? this.m_ModifiedBindingSet.get(e).poses
            : [];
        }
        get SelectedActionSetPoses() {
          return this.GetActionSetPoses(this.m_sSelectedActionSet);
        }
        GetActionSetHaptics(e) {
          return this.m_ModifiedBindingSet.has(e)
            ? this.m_ModifiedBindingSet.get(e).haptics
            : [];
        }
        get SelectedActionSetHaptics() {
          return this.GetActionSetHaptics(this.m_sSelectedActionSet);
        }
        GetActionSetSkeleton(e) {
          return this.m_ModifiedBindingSet.has(e)
            ? this.m_ModifiedBindingSet.get(e).skeleton
            : [];
        }
        get SelectedActionSetSkeletons() {
          return this.GetActionSetSkeleton(this.m_sSelectedActionSet);
        }
        GetActionSetChords(e) {
          return this.m_ModifiedBindingSet.has(e)
            ? this.m_ModifiedBindingSet.get(e).chords
            : [];
        }
        get SelectedActionSetChords() {
          return this.GetActionSetChords(this.m_sSelectedActionSet);
        }
        get SelectedActionSetChordCount() {
          let e = this.SelectedActionSetChords;
          return e ? e.length : 0;
        }
        GetActionSetSources(e) {
          if (null == this.m_ModifiedBindingSet || null == e) return;
          let t = this.m_ModifiedBindingSet;
          return t.has(e) ? t.get(e).sources : void 0;
        }
        get SelectedActionSetSources() {
          return this.GetActionSetSources(this.m_sSelectedActionSet);
        }
        get BSelectedActionSetHasPoses() {
          return (
            null != this.m_LoadedBinding &&
            null != this.m_sSelectedActionSet &&
            null != this.SelectedActionSetActions &&
            this.SelectedActionSetActions.filter((e) => "pose" == e.type)
              .length > 0
          );
        }
        get BSelectedActionSetHasBoundPoses() {
          if (
            !this.BSelectedActionSetHasPoses ||
            !this.SelectedActionSetPoses ||
            null == this.SelectedActionSetActions
          )
            return !1;
          for (let e of this.SelectedActionSetPoses)
            if (e.output && "none" != e.output) return !0;
          return !1;
        }
        get BSelectedActionSetHasHaptics() {
          return (
            null != this.m_LoadedBinding &&
            null != this.m_sSelectedActionSet &&
            null != this.SelectedActionSetActions &&
            this.SelectedActionSetActions.filter((e) => "vibration" == e.type)
              .length > 0
          );
        }
        get BSelectedActionSetHasBoundHaptics() {
          if (
            !this.BSelectedActionSetHasHaptics ||
            !this.SelectedActionSetHaptics ||
            null == this.SelectedActionSetActions
          )
            return !1;
          for (let e of this.SelectedActionSetHaptics)
            if (e.output && "none" != e.output) return !0;
          return !1;
        }
        get BSelectedActionSetHasSkeletons() {
          if (
            null == this.m_LoadedBinding ||
            null == this.m_sSelectedActionSet ||
            null == this.SelectedActionSetActions
          )
            return !1;
          if (
            0 ==
            this.SelectedActionSetActions.filter((e) => "skeleton" == e.type)
              .length
          )
            return !1;
          return (
            null != this.SelectedControllerTypeInfo &&
            !!this.GetFirstInputSourceOfType("skeleton")
          );
        }
        get BSelectedActionSetHasBoundSkeletons() {
          if (
            !this.BSelectedActionSetHasSkeletons ||
            !this.SelectedActionSetSkeletons ||
            null == this.SelectedActionSetActions
          )
            return !1;
          for (let e of this.SelectedActionSetSkeletons)
            if (e.output && "none" != e.output) return !0;
          return !1;
        }
        SetSelectedApp(e, t) {
          if (null == this.m_SelectedApp || e != this.m_SelectedApp.key) {
            (this.m_rKnownFailedBindingUris = []),
              this.m_ControllerWatchers.clear();
            let n = m.a.GetApp(e);
            n && ((this.m_SelectedApp = n), t || this.ReloadCurrentApp());
          }
        }
        ReloadCurrentApp() {
          return Object(r.a)(this, void 0, void 0, function* () {
            (this.m_sLoadedBindingURI = void 0),
              (this.m_sSelectedActionSet = void 0),
              yield this.LoadActionManifest();
            let e = this.ActionSets;
            e.length > 0 &&
              (null == this.m_sSelectedActionSet ||
                !this.m_SelectedAppActions.action_sets.hasOwnProperty(
                  this.m_sSelectedActionSet
                )) &&
              (this.m_sSelectedActionSet = e[0].name),
              yield this.ReloadControllerConfiguration();
          });
        }
        SetSelectedController(e, t) {
          if (e != this.m_sSelectedControllerType) {
            let n = b.a.GetControllerTypeInfo(e);
            n &&
              (this.m_ControllerWatchers.clear(),
              (this.m_sSelectedControllerType = n.controller_type),
              (this.m_bControllerTypeSelectedByUser = !0),
              (this.m_sLoadedBindingURI = void 0),
              t || this.ReloadControllerConfiguration());
          }
        }
        SetSelectedActionSet(e) {
          e != this.m_sSelectedActionSet && (this.m_sSelectedActionSet = e);
        }
        LocalizeStringForSelectedControllerType(e) {
          let t = this.SelectedControllerTypeInfo;
          return t && t.resource_root
            ? b.a.LocalizeDriverString(t.resource_root, e)
            : e;
        }
        LocalizePathNameForSelectedControllerType(e) {
          let t = void 0;
          return (
            [
              "/user/hand/secondary",
              "/user/hand/primary",
              "/user/hand/left",
              "/user/hand/right",
              "/user/head",
            ].forEach((n) => {
              0 != e.indexOf(n) || (t = n);
            }),
            t
              ? Object(u.c)("#" + t) +
                " " +
                this.LocalizeStringForSelectedControllerType(e.replace(t, ""))
              : e
          );
        }
        get SelectedControllerTypeLocalizedName() {
          let e = this.SelectedControllerTypeInfo;
          return e
            ? e.resource_root
              ? b.a.LocalizeDriverString(e.resource_root, e.controller_type)
              : e.controller_type
            : "";
        }
        RegisterBindingWatcher(e) {
          null == this.m_vecBindingSetWatchers.find((t) => t == e) &&
            this.m_vecBindingSetWatchers.push(e);
        }
        UnregisterBindingWatcher(e) {
          let t = this.m_vecBindingSetWatchers.indexOf(e);
          t >= 0 && this.m_vecBindingSetWatchers.splice(t, 1);
        }
        GetActionBinding(e, t) {
          if (null == this.m_ModifiedBindingSet) return;
          let n = this.m_ModifiedBindingSet;
          if (n.has(t)) {
            let i = n.get(t).sources;
            if (i) {
              let t = i.filter((t) => t.path == e);
              if (t) return t;
            }
          }
        }
        GetInputModesForSourceType(e, t) {
          let n = [];
          switch (e) {
            case "button":
              n = ["button", "-", "toggle_button", "scalar_constant"];
              break;
            case "trackpad":
              n = [
                "trackpad",
                "dpad",
                "-",
                "scroll",
                "radial",
                "button",
                "toggle_button",
              ];
              break;
            case "trigger":
              n = [
                "trigger",
                "button",
                "-",
                "toggle_button",
                "scalar_constant",
              ];
              break;
            case "joystick":
              n = [
                "joystick",
                "dpad",
                "-",
                "scroll",
                "radial",
                "button",
                "toggle_button",
              ];
              break;
            case "pinch":
              n = ["grab"];
              break;
            default:
              n = [];
          }
          return (
            t && (n.push("force_sensor"), "trigger" == e && n.push("grab")), n
          );
        }
        GetBooleanInputOptionsForMode(e) {
          switch (e) {
            case "button":
            case "toggle_button":
              return ["click", "touch"];
            case "button":
              return ["single", "double", "held", "long", "click", "touch"];
            case "trackpad":
              return ["click", "touch"];
            case "dpad_click":
            case "dpad_touch":
            case "dpad":
              return ["west", "east", "north", "south", "center"];
            case "trackpad_scroll":
              return [];
            case "trigger":
              return ["click", "touch"];
            case "grab":
              return ["grab"];
            case "force_sensor":
            default:
              return [];
          }
        }
        GetActionBindingsOfType(e, t) {
          if (
            null == this.m_SelectedApp ||
            null == this.m_sSelectedActionSet ||
            null == this.m_SelectedAppActions.action_sets
          )
            return [];
          let n = this.SelectedActionSetDetails;
          if (!n) return [];
          if (null == n.actions) return [];
          let i = [];
          return (
            n.actions.forEach((n) => {
              let o = this.m_ModifiedAliases.get(n.name);
              if (n.type == e && (!o || !o.hidden || t))
                if (o && o.alias_name) {
                  let e = Object.assign({}, n);
                  (e.localized_name = o.alias_name), i.push(e);
                } else i.push(n);
            }),
            t ||
              this.m_ModifiedSimulatedActions.forEach((t) => {
                if (this.GetActionTypeFromSimulatedActionType(t.type) == e) {
                  this.ComputeSimulatedActionPathFromId(t.id),
                    t.name ? t.name : (Object(u.c)("UnnamedSimAction"), t.id);
                  i.push(this.CreateActionDefinitionForSimulatedAction(t));
                }
              }),
            i
          );
        }
        GetActionTypeFromSimulatedActionType(e) {
          switch (e) {
            case "fake_trigger":
            case "fake_trackpad_click":
              return "boolean";
            default:
              return "unknown";
          }
        }
        CreateActionDefinitionForSimulatedAction(e) {
          return {
            name: this.ComputeSimulatedActionPathFromId(e.id),
            localized_name: e.name
              ? e.name
              : Object(u.c)("UnnamedSimAction") + e.id,
            type: this.GetActionTypeFromSimulatedActionType(e.type),
          };
        }
        get GetBooleanActionBindings() {
          return this.GetActionBindingsOfType("boolean");
        }
        get GetVector1ActionBindings() {
          return this.GetActionBindingsOfType("vector1");
        }
        get GetLiteralVector1ActionBindings() {
          return this.GetActionBindingsOfType("vector1", !0);
        }
        get GetVector2ActionBindings() {
          return this.GetActionBindingsOfType("vector2");
        }
        get GetVector3ActionBindings() {
          return this.GetActionBindingsOfType("vector3");
        }
        get GetPoseActionBindings() {
          return this.GetActionBindingsOfType("pose");
        }
        get GetHapticsActionBindings() {
          return this.GetActionBindingsOfType("vibration");
        }
        get GetSkeletonActionBindings() {
          return this.GetActionBindingsOfType("skeleton");
        }
        get ConfigName() {
          return this.m_sName;
        }
        get ConfigDescription() {
          return this.m_sDescription;
        }
        GetPoseAction(e) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) return;
          let t = this.m_ModifiedBindingSet.get(
            this.m_sSelectedActionSet
          ).poses;
          if (null == t) return;
          let n = t.filter((t) => t.output.toLowerCase() == e.toLowerCase());
          return n.length ? n : void 0;
        }
        GetPoseActionByPath(e) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) return;
          let t = this.m_ModifiedBindingSet.get(
            this.m_sSelectedActionSet
          ).poses;
          if (null == t) return;
          let n = t.filter((t) => t.path.toLowerCase() == e.toLowerCase());
          return n.length ? n : void 0;
        }
        GetHapticsAction(e) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) return;
          let t = this.m_ModifiedBindingSet.get(
            this.m_sSelectedActionSet
          ).haptics;
          if (null == t) return;
          let n = t.filter((t) => t.output.toLowerCase() == e.toLowerCase());
          return n.length ? n : void 0;
        }
        GetHapticsActionByPath(e) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) return;
          let t = this.m_ModifiedBindingSet.get(
            this.m_sSelectedActionSet
          ).haptics;
          if (null == t) return;
          let n = t.filter((t) => t.path.toLowerCase() == e.toLowerCase());
          return n.length ? n : void 0;
        }
        GetSkeletonAction(e) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) return;
          let t = this.m_ModifiedBindingSet.get(
            this.m_sSelectedActionSet
          ).skeleton;
          if (null == t) return;
          let n = t.filter((t) => t.output.toLowerCase() == e.toLowerCase());
          return n.length ? n : void 0;
        }
        GetSkeletonActionByPath(e) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) return;
          let t = this.m_ModifiedBindingSet.get(
            this.m_sSelectedActionSet
          ).skeleton;
          if (null == t) return;
          let n = t.filter((t) => t.path.toLowerCase() == e.toLowerCase());
          return n.length ? n : void 0;
        }
        NotifyWatchersOfChange() {
          console.log("Binding file changed"),
            this.m_vecBindingSetWatchers.forEach((e) => {
              e();
            }),
            this.AutosaveBinding();
        }
        SetActionForInputModeType(e, t, n, i, o) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetActionForInputModeType: Invalid action set specified"
            );
          class s {
            constructor(e, t) {
              (this.mode = e), (this.sourceIdx = t);
            }
          }
          let r = [];
          if (
            (this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.filter((t, n) => {
                t.path == e && r.push(new s(t, n));
              }),
            r.length <= t)
          )
            return void console.warn(
              "Invalid mode index (",
              t,
              ") for path ",
              e
            );
          let a = r[t].sourceIdx;
          if (a >= 0) {
            let e = this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
              .sources[a];
            if (e.inputs && e.inputs.has(n) && e.inputs.get(n).output == i)
              return void console.log(
                "Trying to set new action to old action for type",
                n,
                " action is ",
                i
              );
            if (o.length > 0 && !o.find((t) => t == e.mode))
              return void console.log(
                "Trying to set invalid input type of ",
                n,
                " for current mode ",
                e.mode
              );
            e.inputs || (e.inputs = d.m.map()),
              "none" == i
                ? e.inputs.has(n) && e.inputs.delete(n)
                : e.inputs.has(n)
                ? (e.inputs.get(n).output = i)
                : e.inputs.set(n, { output: i }),
              this.NotifyWatchersOfChange();
          }
        }
        SetParameterForInputModeType(e, t, n, i, o) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetParameterForInputModeType: Invalid action set specified"
            );
          let s = [];
          if (
            (this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.filter((t, n) => {
                t.path == e && s.push(n);
              }),
            s.length <= t)
          )
            return void console.warn(
              "Invalid mode index (",
              t,
              ") for path ",
              e
            );
          let r = s[t];
          if (r >= 0) {
            let e = this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
              .sources[r];
            if (!e.inputs)
              return void console.log(
                "SetParameterForInputModeType: Trying to set parameter for missing input type of ",
                n,
                " for current mode ",
                e.mode
              );
            e.parameters || (e.parameters = d.m.map()),
              e.parameters.get(i) != o &&
                (null == o ? e.parameters.delete(i) : e.parameters.set(i, o),
                this.NotifyWatchersOfChange());
          }
        }
        GetParameterForInputModeType(e, t, n, i) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return (
              console.error(
                "SetParameterForInputModeType: Invalid action set specified"
              ),
              null
            );
          let o = [];
          if (
            (this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.filter((t, n) => {
                t.path == e && o.push(n);
              }),
            o.length <= t)
          )
            return (
              console.warn("Invalid mode index (", t, ") for path ", e), null
            );
          let s = o[t];
          if (s >= 0) {
            let e = this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
              .sources[s];
            return e.inputs
              ? e.parameters && e.parameters.has(i)
                ? e.parameters.get(i)
                : null
              : (console.log(
                  "GetParameterForInputModeType: Trying to get parameter for missing input type of ",
                  n,
                  " for current mode ",
                  e.mode
                ),
                null);
          }
          return null;
        }
        AddActionSetIfRequired() {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) {
            let e = new y();
            (e.sources = []),
              this.m_ModifiedBindingSet.set(this.m_sSelectedActionSet, e);
          }
        }
        AddInputModeForSource(e, t) {
          this.AddActionSetIfRequired();
          let n = new g();
          return (
            (n.mode = t),
            (n.path = e),
            (n.inputs = d.m.map()),
            this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.push(n),
            this.NotifyWatchersOfChange(),
            this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.filter((t) => t.path.toLowerCase() == e.toLowerCase())
              .length - 1
          );
        }
        DeleteInputModeForSource(e, t) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "AddInputModeForType: Invalid action set specified"
            );
          let n = [];
          if (
            (this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.filter((t, i) => {
                t.path.toLowerCase() == e.toLowerCase() && n.push(i);
              }),
            n.length <= t)
          )
            return void console.warn(
              "Invalid mode index (",
              t,
              ") for path ",
              e
            );
          let i = n[t];
          -1 != i
            ? (this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .sources.splice(i, 1),
              this.NotifyWatchersOfChange())
            : console.error(
                "DeleteInputModeForSource: Mode not found for source"
              );
        }
        SetInputModeForInputSource(e, t, n) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetActionForInputModeType: Invalid action set specified"
            );
          let i = [];
          if (
            (this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.filter((t, n) => {
                t.path.toLowerCase() == e.toLowerCase() && i.push(n);
              }),
            i.length <= t)
          )
            return void console.warn(
              "Invalid mode index (",
              t,
              ") for path ",
              e
            );
          let o = i[t];
          if (-1 != o) {
            let t = this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
              .sources[o];
            if (t.path == e) {
              if (t.mode == n)
                return void console.log(
                  "Trying to set new input mode to old mode!"
                );
              let i = JSON.parse(JSON.stringify(t)),
                s = new g();
              switch (((s.mode = n), (s.path = e), (s.inputs = d.m.map()), n)) {
                case "button":
                case "toggle_button":
                  switch (i.mode) {
                    case "complex_button":
                      i.inputs.single &&
                        (s.inputs.set("single", i.inputs.single),
                        s.inputs.set("click", i.inputs.single)),
                        i.inputs.long && s.inputs.set("long", i.inputs.long),
                        i.inputs.press && s.inputs.set("press", i.inputs.press),
                        i.inputs.double &&
                          s.inputs.set("double", i.inputs.double),
                        i.inputs.touch && s.inputs.set("touch", i.inputs.touch);
                      break;
                    case "button":
                    case "toggle_button":
                    case "trackpad":
                    case "trigger":
                      i.inputs.click && s.inputs.set("click", i.inputs.click),
                        i.inputs.touch && s.inputs.set("touch", i.inputs.touch);
                  }
                  break;
                case "complex_button":
                  switch (i.mode) {
                    case "toggle_button":
                    case "button":
                      i.inputs.click && s.inputs.set("single", i.inputs.click);
                      break;
                    case "trackpad":
                    case "trigger":
                      i.inputs.click && s.inputs.set("single", i.inputs.click);
                  }
                  break;
                case "trackpad":
                  switch (i.mode) {
                    case "complex_button":
                      i.inputs.single && s.inputs.set("click", i.inputs.single);
                      break;
                    case "toggle_button":
                    case "button":
                    case "trigger":
                      i.inputs.click && s.inputs.set("click", i.inputs.click),
                        i.inputs.touch && s.inputs.set("touch", i.inputs.touch);
                  }
                  break;
                case "trigger":
                  switch (i.mode) {
                    case "complex_button":
                      i.inputs.single && s.inputs.set("click", i.inputs.single);
                      break;
                    case "toggle_button":
                    case "trackpad":
                    case "button":
                      i.inputs.click && s.inputs.set("click", i.inputs.click),
                        i.inputs.touch && s.inputs.set("touch", i.inputs.touch);
                  }
              }
              return (
                (this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet
                ).sources[o] = s),
                void this.NotifyWatchersOfChange()
              );
            }
          } else
            console.error(
              "SetActionForInputModeType: trying to change a mode for a source that we don't have already"
            );
        }
        ClearModesForInputPath(e) {
          this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)
            ? (this.m_ModifiedBindingSet.get(
                this.m_sSelectedActionSet
              ).sources = this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .sources.filter((t) => t.path.toLowerCase() != e.toLowerCase()))
            : console.error(
                "ClearModesForInputPath: Invalid action set specified"
              );
        }
        SetInputPathForPose(e, t) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetActionForPose: Invalid action set specified"
            );
          this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses ||
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses =
              new Array());
          let n = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .poses.findIndex(
              (t) =>
                t.path.toLowerCase() == e.path.toLowerCase() &&
                t.output.toLowerCase() == e.output.toLowerCase()
            );
          -1 == n &&
            ((n =
              this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .poses.push(new S()) - 1),
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses[
              n
            ].output = e.output)),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses[n]
              .path != t
              ? ((this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet
                ).poses[n].path = t),
                this.NotifyWatchersOfChange())
              : console.log(
                  "Trying to set new pose action path to old action path!"
                );
        }
        SetPoseForInputPath(e, t) {
          if (
            (this.AddActionSetIfRequired(),
            !this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
          )
            return void console.error(
              "SetActionForPose: Invalid action set specified"
            );
          this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses ||
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses =
              new Array());
          let n = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .poses.findIndex((t) => t.path.toLowerCase() == e.toLowerCase());
          -1 == n &&
            ((n =
              this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .poses.push(new S()) - 1),
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses[
              n
            ].path = e)),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses[n]
              .output != t
              ? ((this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet
                ).poses[n].output = t),
                this.NotifyWatchersOfChange())
              : console.log(
                  "Trying to set new pose action path to old action path!"
                );
        }
        GetFirstInputSourceOfType(e) {
          let t = this.SelectedControllerTypeInfo;
          if (null != t)
            for (let n of Object.keys(t.input_source)) {
              if (t.input_source[n].type == e) return n;
            }
        }
        AddDefaultPose(e, t) {
          if (
            (this.AddActionSetIfRequired(),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses ||
              (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses =
                new Array()),
            null == this.SelectedControllerTypeInfo)
          )
            return;
          let n = this.GetFirstInputSourceOfType("pose");
          if (!n) return;
          let i = new (class {})();
          (i.output = e), (i.path = n), this.SetInputPathForPose(i, n);
        }
        SetInputPathForHaptics(e, t) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetInputPathForHaptics: Invalid action set specified"
            );
          this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics ||
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics =
              new Array());
          let n = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .haptics.findIndex(
              (t) =>
                t.path.toLowerCase() == e.path.toLowerCase() &&
                t.output.toLowerCase() == e.output.toLowerCase()
            );
          -1 == n &&
            ((n =
              this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .haptics.push(new _()) - 1),
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics[
              n
            ].output = e.output)),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics[n]
              .path != t
              ? ((this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet
                ).haptics[n].path = t),
                this.NotifyWatchersOfChange())
              : console.log(
                  "Trying to set new haptics action path to old action path!"
                );
        }
        SetHapticsForInputPath(e, t) {
          if (
            (this.AddActionSetIfRequired(),
            !this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
          )
            return void console.error(
              "SetHapticsForInputPath: Invalid action set specified"
            );
          this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics ||
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics =
              new Array());
          let n = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .haptics.findIndex((t) => t.path.toLowerCase() == e.toLowerCase());
          -1 == n &&
            ((n =
              this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .haptics.push(new S()) - 1),
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics[
              n
            ].path = e)),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics[n]
              .output != t
              ? ((this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet
                ).haptics[n].output = t),
                this.NotifyWatchersOfChange())
              : console.log(
                  "Trying to set new haptic action path to old action path!"
                );
        }
        AddDefaultHaptics(e, t) {
          this.AddActionSetIfRequired(),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics ||
              (this.m_ModifiedBindingSet.get(
                this.m_sSelectedActionSet
              ).haptics = new Array());
          let n = this.GetFirstInputSourceOfType("haptic");
          if (!n) return;
          let i = t + n;
          let o = new (class {})();
          (o.output = e), (o.path = i), this.SetInputPathForHaptics(o, i);
        }
        SetInputPathForSkeleton(e, t) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetInputPathForSkeleton: Invalid action set specified"
            );
          this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton ||
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton =
              new Array());
          let n = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .skeleton.findIndex(
              (t) =>
                t.path.toLowerCase() == e.path.toLowerCase() &&
                t.output.toLowerCase() == e.output.toLowerCase()
            );
          -1 == n &&
            ((n =
              this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .skeleton.push(new f()) - 1),
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton[
              n
            ].output = e.output)),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton[n]
              .path != t
              ? ((this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet
                ).skeleton[n].path = t),
                this.NotifyWatchersOfChange())
              : console.log(
                  "Trying to set new skeleton action path to old action path!"
                );
        }
        SetSkeletonForInputPath(e, t) {
          if (
            (this.AddActionSetIfRequired(),
            !this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
          )
            return void console.error(
              "SetSkeletonForInputPath: Invalid action set specified"
            );
          this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton ||
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton =
              new Array());
          let n = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .skeleton.findIndex((t) => t.path.toLowerCase() == e.toLowerCase());
          -1 == n &&
            ((n =
              this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .skeleton.push(new S()) - 1),
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton[
              n
            ].path = e)),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton[n]
              .output != t
              ? ((this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet
                ).skeleton[n].output = t),
                this.NotifyWatchersOfChange())
              : console.log(
                  "Trying to set new skeleton action path to old action path!"
                );
        }
        AddDefaultSkeleton(e, t) {
          this.AddActionSetIfRequired(),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton ||
              (this.m_ModifiedBindingSet.get(
                this.m_sSelectedActionSet
              ).skeleton = new Array());
          let n = this.GetFirstInputSourceOfType("skeleton");
          if (!n) return;
          let i = t + n;
          let o = new (class {})();
          (o.output = e), (o.path = i), this.SetInputPathForSkeleton(o, i);
        }
        SetActionForChord(e, t) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetActionForChord: Invalid action set specified"
            );
          let n = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .chords.findIndex((t) => t == e);
          -1 != n
            ? this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[n]
                .output != t
              ? ((this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet
                ).chords[n].output = t),
                this.NotifyWatchersOfChange())
              : console.log("Trying to set new chord action to old action!")
            : console.error("SetActionForChord: Invalid chord  specified ", e);
        }
        DeleteChord(e) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "DeleteChordForSource: Invalid action set specified"
            );
          let t = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .chords.findIndex((t) => t == e);
          -1 != t
            ? (this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .chords.splice(t, 1),
              this.NotifyWatchersOfChange())
            : console.error(
                "DeleteChordForSource: Invalid chord  specified ",
                e
              );
        }
        AddChord() {
          this.AddActionSetIfRequired(),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords ||
              (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords =
                new Array());
          this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .chords.push(new v());
          this.NotifyWatchersOfChange();
        }
        DeleteSourceFromChord(e, t) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "DeleteSourceFromChord: Invalid action set specified"
            );
          let n = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .chords.findIndex((t) => t == e);
          if (-1 != n) {
            let e = this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .chords[n].inputs.findIndex((e) => e[0] == t);
            -1 != e &&
              (this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .chords[n].inputs.splice(e, 1),
              this.NotifyWatchersOfChange());
          } else
            console.error(
              "DeleteSourceFromChord: Invalid chord  specified ",
              e
            );
        }
        SetInputTypeForChord(e, t, n) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetInputsForChord: Invalid action set specified"
            );
          let i = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .chords.findIndex((t) => t == e);
          if (-1 != i) {
            let e = this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .chords[i].inputs.findIndex((e) => e[0] == t);
            if (-1 == e)
              return void console.log(
                "Invalid bounds for new input chord, trying to add type without source"
              );
            if (
              this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[i]
                .inputs[e][1] == n
            )
              return void console.log(
                "Trying to set new chord inputs to old inputs!"
              );
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[
              i
            ].inputs[e][1] = n),
              this.NotifyWatchersOfChange();
          } else
            console.error("SetInputsForChord: Invalid chord  specified ", e);
        }
        SetInputSourceForChord(e, t, n) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetInputsForChord: Invalid action set specified"
            );
          let i = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .chords.findIndex((t) => t == e);
          if (-1 != i) {
            let e = this.GetActionBinding(t, this.SelectedActionSet);
            if (!e)
              return void console.log("Failed to find action binding for path");
            let o = "click";
            if (
              (e.length &&
                (o = this.GetBooleanInputOptionsForMode(e[0].mode)[0]),
              null == n)
            )
              this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[i]
                .inputs ||
                (this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet
                ).chords[i].inputs = new Array()),
                this.m_ModifiedBindingSet
                  .get(this.m_sSelectedActionSet)
                  .chords[i].inputs.push([t, o]);
            else {
              let e = this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .chords[i].inputs.findIndex((e) => e[0] == n);
              if (-1 == e)
                return void console.log(
                  "Trying to set replace chord input path when we didn't have that path!"
                );
              if (
                this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[
                  i
                ].inputs[e][0] == t
              )
                return void console.log(
                  "Trying to set new chord inputs to old inputs!"
                );
              (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[
                i
              ].inputs[e][0] = t),
                (this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet
                ).chords[i].inputs[e][1] = o);
            }
            this.NotifyWatchersOfChange();
          } else
            console.error("SetInputsForChord: Invalid chord  specified ", e);
        }
        LoadActionManifest() {
          return Object(r.a)(this, void 0, void 0, function* () {
            return new Promise((e, t) => {
              w(this.m_SelectedApp.key).then((t) => {
                null == t.error
                  ? ((this.m_SelectedAppActions = t),
                    null == this.m_sLoadedBindingURI &&
                      t.current_binding_url.hasOwnProperty(
                        this.m_sSelectedControllerType
                      ) &&
                      (this.m_sLoadedBindingURI =
                        t.current_binding_url[this.m_sSelectedControllerType]))
                  : ((this.m_SelectedAppActions = void 0),
                    (this.m_sLoadedBindingURI = void 0)),
                  e();
              });
            });
          });
        }
        get SelectedBindingURL() {
          return null != this.m_sSelectedControllerType &&
            null != this.m_SelectedAppActions &&
            null != this.m_SelectedAppActions.current_binding_url &&
            this.m_SelectedAppActions.current_binding_url.hasOwnProperty(
              this.m_sSelectedControllerType
            )
            ? this.m_SelectedAppActions.current_binding_url[
                this.m_sSelectedControllerType
              ]
            : void 0;
        }
        get LoadedBindingURL() {
          return this.m_sLoadedBindingURI;
        }
        get SelectedBindingIsLegacy() {
          return !this.m_SelectedAppActions || this.m_SelectedAppActions.legacy;
        }
        get IsSecondaryController() {
          if (!this.m_sSelectedControllerType) return !1;
          let e = b.a.FindRootPathForControllerType(
            this.m_sSelectedControllerType
          );
          return (
            "/user/treadmill" == e ||
            "/user/gamepad" == e ||
            "/user/stylus" == e
          );
        }
        ReloadControllerConfiguration() {
          return Object(r.a)(this, void 0, void 0, function* () {
            if (
              !(
                this.m_SelectedAppActions &&
                this.m_sLoadedBindingURI &&
                this.SelectedApp &&
                this.SelectedControllerTypeInfo
              )
            )
              return;
            let e = yield j(
              this.m_SelectedApp.key,
              this.SelectedControllerTypeInfo.controller_type,
              this.m_sLoadedBindingURI
            );
            this.OnBindingConfigLoaded(e);
          });
        }
        UpdateTrackerBindings() {
          return Object(r.a)(this, void 0, void 0, function* () {
            let e = yield this.GetTrackerBindings();
            this.m_TrackerBindingSetup = e;
          });
        }
        get TrackerBindings() {
          return (
            null == this.m_TrackerBindingSetup && this.UpdateTrackerBindings(),
            this.m_TrackerBindingSetup
          );
        }
        GetTrackerBindings() {
          return Object(r.a)(this, void 0, void 0, function* () {
            return new Promise(function (e, t) {
              c.a
                .get("/input/gettrackerbindings.json")
                .then((t) => {
                  e(t.data);
                })
                .catch((e) => {
                  t(e);
                });
            });
          });
        }
        GetTrackerBinding(e) {
          for (let t of this.m_TrackerBindingSetup.trackers)
            if (t.device_path_string == e) return t;
          return null;
        }
        SetTrackerBinding(e, t, n) {
          let i = { device_path: e, role: t, controller_role: n },
            o = JSON.stringify(i);
          console.log("Saving tracker binding " + e),
            c.a
              .post("/input/settrackerbinding.action", o)
              .then((e) => {
                console.log("SetTrackerBinding response: ", e.data),
                  this.UpdateTrackerBindings();
              })
              .catch((e) => {});
        }
        PulseHaptics(e) {
          let t = { path_handle: e },
            n = JSON.stringify(t);
          c.a
            .post("/input/pulsehaptics.action", n)
            .then((e) => {
              console.log("PulseHaptics response: ", e.data);
            })
            .catch((e) => {});
        }
        get KnownControllerTypes() {
          let e = [];
          return (
            b.a.KnownControllerTypes.forEach((t) => {
              e.push(t);
            }),
            e
          );
        }
        PreserveCurrentBindingForUpgrade() {
          let e = h.a.CurrentBinding;
          return e && "autosave" == e.type
            ? this.SaveCurrentBinding(
                Object(u.c)("#PreservedAutosaveName"),
                "",
                "personal"
              )
            : Promise.resolve(null);
        }
        GetDefaultBindingNameForSaveType(e) {
          let t = k.SelectedControllerTypeInfo,
            n = b.a.LocalizeControllerString(t, t ? t.controller_type : "");
          switch (e) {
            default:
            case "autosave":
              return Object(u.c)(
                "#BindingUI_SaveDefaultName",
                this.m_SelectedApp.name,
                n
              );
            case "personal":
              return Object(u.c)(
                "#BindingUI_SaveDefaultName_Personal",
                this.m_SelectedApp.name,
                n
              );
            case "public":
              return Object(u.c)(
                "#BindingUI_SaveDefaultName_Public",
                b.a.CurrentUserPersonaName
              );
            case "replace_default":
              return k.ConfigName;
          }
        }
        AutosaveBinding() {
          this.m_sName ||
            (this.m_sName = this.GetDefaultBindingNameForSaveType("autosave")),
            this.SaveCurrentBinding(
              this.m_sName,
              this.m_sDescription,
              "autosave"
            ).then((e) => {
              k.SetBindingURL(e.uri);
            });
        }
        SaveCurrentBinding(e, t, n) {
          return Object(r.a)(this, void 0, void 0, function* () {
            if (this.HasUnboundActions)
              return (
                console.log(
                  "Aborting save: Missing at least one required action"
                ),
                new Promise((e, t) => {
                  t();
                })
              );
            (this.m_sName = e), (this.m_sDescription = t);
            let i = {
              app_key: this.SelectedApp,
              controller_type: this.SelectedControllerTypeInfo.controller_type,
              save_type: n,
            };
            i.binding = {
              name: e,
              description: t,
              action_manifest_version: this.m_SelectedAppActions.version,
              category: this.SelectedBindingIsLegacy
                ? "legacy"
                : "steamvr_input",
              controller_type: this.SelectedControllerTypeInfo.controller_type,
              bindings: this.m_ModifiedBindingSet,
              options: this.m_ModifiedOptions,
              alias_info: this.m_ModifiedAliases,
              simulated_actions: Array.from(
                this.m_ModifiedSimulatedActions.values()
              ),
              app_key: this.SelectedApp,
            };
            let o = JSON.stringify(i);
            return (
              console.log(
                "Saving binding " + e + " for app " + this.SelectedApp
              ),
              new Promise((e, t) => {
                let i = new R(n, e, t);
                this.m_OutstandingSaveBindingCalls.push(i),
                  c.a
                    .post("/input/savebinding.action", o)
                    .then((e) => {
                      e.data.error
                        ? (console.log(
                            "SaveCurrentBinding failed:",
                            e.data.error
                          ),
                          t(e.data.error))
                        : console.log("SaveCurrentBinding Successful");
                    })
                    .catch((e) => {
                      t(e);
                    });
              })
            );
          });
        }
        PublishBindingToWorkshop(e) {
          return Object(r.a)(this, void 0, void 0, function* () {
            let t = { app_key: this.SelectedApp, description: e };
            t.binding = {
              bindings: this.m_ModifiedBindingSet,
              controller_type: this.SelectedControllerTypeInfo.controller_type,
            };
            let n = JSON.stringify(t);
            yield new Promise(function (e, t) {
              c.a
                .post("/input/submitworkshopbinding.action", n)
                .then((t) => {
                  console.log("PublishBindingToWorkshop response: ", t), e();
                })
                .catch((e) => {
                  t(e);
                });
            });
          });
        }
        OnWebSocketOpen(e) {
          console.log("Websocket connected"),
            (this.m_eWebSocketState = s.eWebSocketState_Connected),
            this.WebSocketSend("input_open"),
            this.m_timerWebSocket && clearTimeout(this.m_timerWebSocket),
            window.addEventListener("beforeunload", () => {
              this.WebSocketSend("input_close");
            });
        }
        OnWebSocketClose(e) {
          console.log("Websocket closed ", e),
            (this.m_eWebSocketState = s.eWebSocketState_Disconnected),
            this.OpenWebSocketToHost();
        }
        WebSocketSend(e) {
          null != this.m_wsWebSocketToServer &&
            1 == this.m_wsWebSocketToServer.readyState &&
            this.m_wsWebSocketToServer.send(e);
        }
        OnWorkshopUploadComplete(e) {
          if (
            (console.log("OnWorkshopUploadComplete: ", e),
            e.app_key != this.SelectedApp)
          )
            return void console.log(
              "Ignoring binding load for an app we aren't viewing"
            );
          if (this.m_OutstandingSaveBindingCalls.length <= 0)
            return void console.log(
              "Got workshop upload result without pending resolve"
            );
          let t = this.m_OutstandingSaveBindingCalls.shift();
          e.success ? (t.resolve(e), this.LoadActionManifest()) : t.reject(e);
        }
        OnPendingFileSaved(e) {
          console.log("OnPendingFileSaved: ", e),
            e.app_key == this.SelectedApp ||
              console.log(
                "Ignoring pending file saved for an app we aren't viewing"
              );
        }
        get SaveNoticeText() {
          if (this.m_OutstandingSaveBindingCalls.length > 0) {
            let e = !1;
            return (
              this.m_OutstandingSaveBindingCalls.forEach((t) => {
                ("personal" != t.SaveType && "public" != t.SaveType) ||
                  (e = !0);
              }),
              e ? "#SaveNotice_Uploading" : "#SaveNotice_Saving"
            );
          }
        }
        OnBindingConfigLoaded(e) {
          if (
            (console.log(
              "OnBindingConfigLoaded: ",
              e,
              " selected action set:",
              this.m_sSelectedActionSet
            ),
            e.app_key != this.SelectedApp)
          )
            return void console.log(
              "Ignoring binding load for an app we aren't viewing"
            );
          if (e.uri != this.m_sLoadedBindingURI)
            return void console.log(
              `Ignoring binding load for an config url ${e.uri} we aren't viewing ${this.m_sLoadedBindingURI}`
            );
          this.m_ControllerWatchers.clear(),
            (this.m_LoadedBinding = e),
            (this.m_ModifiedBindingSet = d.m.map());
          let t = Object(u.c)("#unknown_application"),
            n = m.a.GetApp(k.SelectedApp);
          if (
            (n && (t = n.name),
            (this.m_sName = ""),
            (this.m_sDescription = ""),
            e.binding_config &&
              (e.binding_config.hasOwnProperty("name") &&
                (this.m_sName = e.binding_config.name),
              e.binding_config.hasOwnProperty("description") &&
                (this.m_sDescription = e.binding_config.description)),
            "" == this.m_sName)
          ) {
            let e = k.SelectedControllerTypeInfo,
              n = b.a.LocalizeControllerString(e, e ? e.controller_type : "");
            this.m_sName = Object(u.c)("#BindingUI_SaveDefaultName", t, n);
          }
          e.binding_config &&
            e.binding_config.bindings &&
            (Object.keys(e.binding_config.bindings).forEach((t) => {
              let n = new y();
              (n.chords = e.binding_config.bindings[t].chords),
                (n.poses = e.binding_config.bindings[t].poses),
                (n.haptics = e.binding_config.bindings[t].haptics),
                (n.skeleton = e.binding_config.bindings[t].skeleton),
                (n.sources = new Array()),
                e.binding_config.bindings[t].sources.forEach((e) => {
                  let t = new g();
                  (t.mode = e.mode),
                    (t.path = e.path),
                    (t.inputs = d.m.map()),
                    e.hasOwnProperty("inputs") &&
                      Object.keys(e.inputs).forEach((n) => {
                        t.inputs.set(n, e.inputs[n]);
                      }),
                    null != e.parameters &&
                      Object.keys(e.parameters).length > 0 &&
                      ((t.parameters = d.m.map()),
                      e.hasOwnProperty("parameters") &&
                        Object.keys(e.parameters).forEach((n) => {
                          t.parameters.set(n, e.parameters[n]);
                        })),
                    n.sources.push(t);
                }),
                this.m_ModifiedBindingSet.set(t, n);
            }),
            this.m_ModifiedOptions.clear(),
            e.binding_config.options &&
              (Object.keys(e.binding_config.options).forEach((t) => {
                this.m_ModifiedOptions.set(t, e.binding_config.options[t]);
              }),
              this.ManifestOptions.forEach((e) => {
                this.m_ModifiedOptions.has(e.name) ||
                  this.m_ModifiedOptions.set(e.name, e.default);
              })),
            this.m_ModifiedAliases.clear(),
            e.binding_config.alias_info &&
              Object.keys(e.binding_config.alias_info).forEach((t) => {
                this.m_ModifiedAliases.set(t, e.binding_config.alias_info[t]);
              }),
            this.m_ModifiedSimulatedActions.clear(),
            e.binding_config.simulated_actions &&
              e.binding_config.simulated_actions.forEach((e) => {
                let t = this.ComputeSimulatedActionPathFromId(e.id);
                this.m_ModifiedSimulatedActions.set(t, e),
                  e.id >= this.m_nNextSimulatedActionId &&
                    (this.m_nNextSimulatedActionId = e.id + 1);
              })),
            this.m_vecBindingSetWatchers.forEach((e) => {
              e();
            });
        }
        QueryBindingList(e, t) {
          return (
            null != this.m_OutstandingQueryResolve &&
              console.warn(
                "About to start second binding list query when one is already pending",
                this.m_OutstandingQueryResolve
              ),
            new Promise((n, i) => {
              (this.m_OutstandingQueryResolve = n),
                c.a
                  .get(
                    `/input/queryworkshopbindings.json?app_key=${e}&controller_type=${t}`
                  )
                  .then((e) => {
                    console.log("QueryBindingList: ajax request successful");
                  })
                  .catch((e) => {
                    i(e);
                  });
            })
          );
        }
        DeleteBinding(e) {
          null != this.m_OutstandingDeleteResolve &&
            console.warn(
              "About to start second binding delete when one is already pending",
              this.m_OutstandingDeleteResolve
            );
          let t = { url: e },
            n = JSON.stringify(t);
          return new Promise((t, i) => {
            (this.m_OutstandingDeleteResolve = t),
              (this.m_sOutstandingDeleteURL = e),
              c.a
                .post("/input/deleteconfig.action", n)
                .then((e) => {
                  console.log("Delete ajax request successful");
                })
                .catch((e) => {
                  i(e);
                });
          });
        }
        OnBindingDeleteComplete(e) {
          null != this.m_OutstandingDeleteResolve
            ? e.url == this.m_sOutstandingDeleteURL &&
              ((this.m_sOutstandingDeleteURL = void 0),
              this.m_OutstandingDeleteResolve(e),
              (this.m_OutstandingDeleteResolve = void 0),
              console.log("OnDeleteComplete: ", e))
            : console.warn(
                "Missing outstanding query resolve for binding delete"
              );
        }
        ShouldShowBindingFailureForControllerType(e) {
          if (null == e || "" == e) return !1;
          let t = b.a.GetControllerTypeInfo(e);
          return !!t && !!t.should_show_binding_errors;
        }
        HasBindingUriFailedToLoad(e) {
          return -1 != this.m_rKnownFailedBindingUris.indexOf(e);
        }
        RememberFailedLoadUri(e) {
          this.m_rKnownFailedBindingUris.push(e);
        }
        OnQueryResults(e) {
          console.log("OnQueryResults: ", e),
            null != this.m_OutstandingQueryResolve
              ? (this.m_OutstandingQueryResolve(e),
                (this.m_OutstandingQueryResolve = void 0))
              : console.warn(
                  "Missing outstanding query resolve for binding query"
                );
        }
        SelectConfig(e, t, n) {
          if (
            ((this.m_sLoadedBindingURI = n),
            console.log("Selecting config " + n + " for app " + e),
            this.SelectedBindingURL == n)
          )
            return (
              console.debug("Selecting the config we already have set", n),
              new Promise((e, t) => {
                e();
              })
            );
          let i = { app_key: e, controller_type: t, url: n },
            o = JSON.stringify(i);
          return (
            null != this.m_OutstandingSelectConfigResolve &&
              console.warn(
                "About to start second select config when one is already pending",
                this.m_OutstandingSelectConfigResolve
              ),
            new Promise((e, t) => {
              (this.m_OutstandingSelectConfigResolve = e),
                c.a
                  .post("/input/selectconfig.action", o)
                  .then((e) => {
                    console.log("selectconfig ajax request successful");
                  })
                  .catch((e) => {
                    t(e);
                  });
            })
          );
        }
        OnSelectConfigComplete(e) {
          null != this.m_OutstandingSelectConfigResolve
            ? (this.m_OutstandingSelectConfigResolve(),
              (this.m_OutstandingSelectConfigResolve = void 0),
              console.log("OnSelectConfigComplete: ", e))
            : e.error_to_show
            ? h.a.ShowBindingList(e.error_to_show)
            : console.warn(
                "Missing outstanding query resolve for select config"
              );
        }
        OnTrackersBindingChanged(e) {
          this.GetTrackerBindings().then((e) => {
            this.m_TrackerBindingSetup = e;
          });
        }
        OnActionManifestReloaded(e) {
          e.app_key == this.SelectedApp && this.ReloadCurrentApp();
        }
        SetBindingURL(e) {
          this.m_sLoadedBindingURI = e;
        }
        OnActionBindingsReloaded(e) {
          this.RefreshInputState();
        }
        GetControllerWatcherForSourceFromControllerType(e, t, n, o) {
          let s = "" + e.controller_type + t + n + o;
          if (!this.m_ControllerWatchers.has(s)) {
            let r = "";
            if ("controller_handed" == e.input_bindingui_mode)
              switch (t) {
                case i.eButtonSide_Left:
                  r = "/user/hand/left";
                  break;
                case i.eButtonSide_Right:
                  r = "/user/hand/right";
              }
            else {
              let t = b.a.ConnectedDevices.find(
                (t) => t.controller_type == e.controller_type
              );
              t && t.root_path
                ? (r = t.root_path)
                : console.log(
                    "Unable to find device path for controller type ",
                    e
                  );
            }
            this.m_ControllerWatchers.set(s, new T(r, e, t, n, o));
          }
          return this.m_ControllerWatchers.get(s);
        }
        OnWebSocketMessage(e) {
          let t = JSON.parse(e.data);
          if ("jsonid" in t && "vr_input_get_notifications" == t.jsonid)
            for (let e in t.notifications) {
              let n = t.notifications[e];
              switch (n.type) {
                case "pending_file_saved":
                  this.OnPendingFileSaved(n);
                  break;
                case "workshop_upload_complete":
                  this.OnWorkshopUploadComplete(n);
                  break;
                case "query_results":
                  this.OnQueryResults(n);
                  break;
                case "action_bindings_reloaded":
                  this.OnActionBindingsReloaded(n);
                  break;
                case "delete_binding_complete":
                  this.OnBindingDeleteComplete(n);
                  break;
                case "select_config_complete":
                  this.OnSelectConfigComplete(n);
                  break;
                case "trackers_binding_changed":
                  this.OnTrackersBindingChanged(n);
                  break;
                case "action_manifest_reloaded":
                  this.OnActionManifestReloaded(n);
                  break;
                case "refresh_input_state":
                  this.RefreshInputState();
                  break;
                case "binding_subscription_changed":
                  this.m_nBindingSubscriptionChangedCanary++;
              }
            }
        }
        get BindingConfig() {
          return null == this.m_ModifiedBindingSet
            ? ""
            : JSON.stringify(this.m_ModifiedBindingSet, null, "\t");
        }
        get BindingSubscriptionChangedCanary() {
          return this.m_nBindingSubscriptionChangedCanary;
        }
      }
      Object(r.b)([d.m], E.prototype, "m_eWebSocketState", void 0),
        Object(r.b)([d.m], E.prototype, "m_sLoadedBindingURI", void 0),
        Object(r.b)([d.m], E.prototype, "m_LoadedBinding", void 0),
        Object(r.b)([d.m], E.prototype, "m_ModifiedBindingSet", void 0),
        Object(r.b)([d.m], E.prototype, "m_ModifiedOptions", void 0),
        Object(r.b)([d.m], E.prototype, "m_ModifiedAliases", void 0),
        Object(r.b)([d.m], E.prototype, "m_sName", void 0),
        Object(r.b)([d.m], E.prototype, "m_sDescription", void 0),
        Object(r.b)([d.m], E.prototype, "m_SelectedApp", void 0),
        Object(r.b)([d.m], E.prototype, "m_SelectedAppActions", void 0),
        Object(r.b)([d.m], E.prototype, "m_sSelectedActionSet", void 0),
        Object(r.b)([d.m], E.prototype, "m_sSelectedControllerType", void 0),
        Object(r.b)([d.m], E.prototype, "m_TrackerBindingSetup", void 0),
        Object(r.b)(
          [d.m],
          E.prototype,
          "m_OutstandingSaveBindingCalls",
          void 0
        ),
        Object(r.b)([d.m], E.prototype, "m_ModifiedSimulatedActions", void 0),
        Object(r.b)(
          [d.m],
          E.prototype,
          "m_nBindingSubscriptionChangedCanary",
          void 0
        ),
        Object(r.b)([a.bind], E.prototype, "OpenWebSocketToHost", null),
        Object(r.b)([d.f], E.prototype, "SteamVRUnavailable", null),
        Object(r.b)([d.f], E.prototype, "ActionSets", null),
        Object(r.b)([d.f], E.prototype, "ManifestOptions", null),
        Object(r.b)([d.f], E.prototype, "SecondaryControllerOptions", null),
        Object(r.b)([d.d], E.prototype, "SetOptionValue", null),
        Object(r.b)([d.d], E.prototype, "AddSimulatedAction", null),
        Object(r.b)([d.d], E.prototype, "DeleteSimulatedActionByPath", null),
        Object(r.b)([d.f], E.prototype, "SelectedApp", null),
        Object(r.b)([d.f], E.prototype, "SelectedAppActions", null),
        Object(r.b)(
          [d.f],
          E.prototype,
          "CurrentAppCanAccessPrivateInputs",
          null
        ),
        Object(r.b)([d.f], E.prototype, "SelectedControllerTypeInfo", null),
        Object(r.b)([d.f], E.prototype, "CurrentBindingSaveType", null),
        Object(r.b)(
          [d.f],
          E.prototype,
          "CurrentBindingActionManifestVersion",
          null
        ),
        Object(r.b)([d.f], E.prototype, "SelectedActionSet", null),
        Object(r.b)([d.f], E.prototype, "SelectedActionSetDetails", null),
        Object(r.b)([d.f], E.prototype, "SelectedActionSetActions", null),
        Object(r.b)(
          [a.bind],
          E.prototype,
          "GetSelectedAppDefaultBinding",
          null
        ),
        Object(r.b)([a.bind], E.prototype, "GetActionByName", null),
        Object(r.b)([d.f], E.prototype, "SelectedActionSetPoses", null),
        Object(r.b)([d.f], E.prototype, "SelectedActionSetHaptics", null),
        Object(r.b)([d.f], E.prototype, "SelectedActionSetSkeletons", null),
        Object(r.b)([d.f], E.prototype, "SelectedActionSetChords", null),
        Object(r.b)([d.f], E.prototype, "SelectedActionSetChordCount", null),
        Object(r.b)([d.f], E.prototype, "SelectedActionSetSources", null),
        Object(r.b)([d.f], E.prototype, "BSelectedActionSetHasPoses", null),
        Object(r.b)(
          [d.f],
          E.prototype,
          "BSelectedActionSetHasBoundPoses",
          null
        ),
        Object(r.b)([d.f], E.prototype, "BSelectedActionSetHasHaptics", null),
        Object(r.b)(
          [d.f],
          E.prototype,
          "BSelectedActionSetHasBoundHaptics",
          null
        ),
        Object(r.b)([d.f], E.prototype, "BSelectedActionSetHasSkeletons", null),
        Object(r.b)(
          [d.f],
          E.prototype,
          "BSelectedActionSetHasBoundSkeletons",
          null
        ),
        Object(r.b)([d.d], E.prototype, "SetSelectedApp", null),
        Object(r.b)([d.d], E.prototype, "SetSelectedController", null),
        Object(r.b)([d.d], E.prototype, "SetSelectedActionSet", null),
        Object(r.b)(
          [a.bind],
          E.prototype,
          "LocalizeStringForSelectedControllerType",
          null
        ),
        Object(r.b)(
          [a.bind],
          E.prototype,
          "LocalizePathNameForSelectedControllerType",
          null
        ),
        Object(r.b)(
          [d.f],
          E.prototype,
          "SelectedControllerTypeLocalizedName",
          null
        ),
        Object(r.b)([d.d], E.prototype, "RegisterBindingWatcher", null),
        Object(r.b)([d.d], E.prototype, "UnregisterBindingWatcher", null),
        Object(r.b)([d.d], E.prototype, "GetActionBinding", null),
        Object(r.b)([a.bind], E.prototype, "GetInputModesForSourceType", null),
        Object(r.b)(
          [a.bind],
          E.prototype,
          "GetBooleanInputOptionsForMode",
          null
        ),
        Object(r.b)([a.bind], E.prototype, "GetActionBindingsOfType", null),
        Object(r.b)([d.f], E.prototype, "GetBooleanActionBindings", null),
        Object(r.b)([d.f], E.prototype, "GetVector1ActionBindings", null),
        Object(r.b)(
          [d.f],
          E.prototype,
          "GetLiteralVector1ActionBindings",
          null
        ),
        Object(r.b)([d.f], E.prototype, "GetVector2ActionBindings", null),
        Object(r.b)([d.f], E.prototype, "GetVector3ActionBindings", null),
        Object(r.b)([d.f], E.prototype, "GetPoseActionBindings", null),
        Object(r.b)([d.f], E.prototype, "GetHapticsActionBindings", null),
        Object(r.b)([d.f], E.prototype, "GetSkeletonActionBindings", null),
        Object(r.b)([d.f], E.prototype, "ConfigName", null),
        Object(r.b)([d.f], E.prototype, "ConfigDescription", null),
        Object(r.b)([a.bind], E.prototype, "GetPoseAction", null),
        Object(r.b)([a.bind], E.prototype, "GetPoseActionByPath", null),
        Object(r.b)([a.bind], E.prototype, "GetHapticsAction", null),
        Object(r.b)([a.bind], E.prototype, "GetHapticsActionByPath", null),
        Object(r.b)([a.bind], E.prototype, "GetSkeletonAction", null),
        Object(r.b)([a.bind], E.prototype, "GetSkeletonActionByPath", null),
        Object(r.b)([a.bind], E.prototype, "NotifyWatchersOfChange", null),
        Object(r.b)([d.d], E.prototype, "SetActionForInputModeType", null),
        Object(r.b)([d.d], E.prototype, "SetParameterForInputModeType", null),
        Object(r.b)([a.bind], E.prototype, "AddActionSetIfRequired", null),
        Object(r.b)([d.d], E.prototype, "AddInputModeForSource", null),
        Object(r.b)([d.d], E.prototype, "DeleteInputModeForSource", null),
        Object(r.b)([d.d], E.prototype, "SetInputModeForInputSource", null),
        Object(r.b)([d.d], E.prototype, "ClearModesForInputPath", null),
        Object(r.b)([d.d], E.prototype, "SetInputPathForPose", null),
        Object(r.b)([d.d], E.prototype, "SetPoseForInputPath", null),
        Object(r.b)([d.d], E.prototype, "AddDefaultPose", null),
        Object(r.b)([d.d], E.prototype, "SetInputPathForHaptics", null),
        Object(r.b)([d.d], E.prototype, "SetHapticsForInputPath", null),
        Object(r.b)([d.d], E.prototype, "AddDefaultHaptics", null),
        Object(r.b)([d.d], E.prototype, "SetInputPathForSkeleton", null),
        Object(r.b)([d.d], E.prototype, "SetSkeletonForInputPath", null),
        Object(r.b)([d.d], E.prototype, "AddDefaultSkeleton", null),
        Object(r.b)([d.d], E.prototype, "SetActionForChord", null),
        Object(r.b)([d.d], E.prototype, "DeleteChord", null),
        Object(r.b)([d.d], E.prototype, "AddChord", null),
        Object(r.b)([d.d], E.prototype, "DeleteSourceFromChord", null),
        Object(r.b)([d.d], E.prototype, "SetInputTypeForChord", null),
        Object(r.b)([d.d], E.prototype, "SetInputSourceForChord", null),
        Object(r.b)([d.d], E.prototype, "LoadActionManifest", null),
        Object(r.b)([d.f], E.prototype, "SelectedBindingURL", null),
        Object(r.b)([d.f], E.prototype, "LoadedBindingURL", null),
        Object(r.b)([d.f], E.prototype, "SelectedBindingIsLegacy", null),
        Object(r.b)([d.f], E.prototype, "IsSecondaryController", null),
        Object(r.b)([d.f], E.prototype, "TrackerBindings", null),
        Object(r.b)([d.d], E.prototype, "GetTrackerBindings", null),
        Object(r.b)([a.bind], E.prototype, "SetTrackerBinding", null),
        Object(r.b)([a.bind], E.prototype, "PulseHaptics", null),
        Object(r.b)([d.f], E.prototype, "KnownControllerTypes", null),
        Object(r.b)([a.bind], E.prototype, "AutosaveBinding", null),
        Object(r.b)([a.bind], E.prototype, "OnWebSocketOpen", null),
        Object(r.b)([a.bind], E.prototype, "OnWebSocketClose", null),
        Object(r.b)([a.bind], E.prototype, "WebSocketSend", null),
        Object(r.b)([a.bind], E.prototype, "OnWorkshopUploadComplete", null),
        Object(r.b)([a.bind], E.prototype, "OnPendingFileSaved", null),
        Object(r.b)([d.f], E.prototype, "SaveNoticeText", null),
        Object(r.b)([a.bind], E.prototype, "QueryBindingList", null),
        Object(r.b)([a.bind], E.prototype, "DeleteBinding", null),
        Object(r.b)([a.bind], E.prototype, "OnBindingDeleteComplete", null),
        Object(r.b)(
          [a.bind],
          E.prototype,
          "ShouldShowBindingFailureForControllerType",
          null
        ),
        Object(r.b)([a.bind], E.prototype, "OnQueryResults", null),
        Object(r.b)([a.bind], E.prototype, "SelectConfig", null),
        Object(r.b)([a.bind], E.prototype, "OnSelectConfigComplete", null),
        Object(r.b)([a.bind], E.prototype, "OnTrackersBindingChanged", null),
        Object(r.b)([a.bind], E.prototype, "OnActionManifestReloaded", null),
        Object(r.b)([a.bind], E.prototype, "SetBindingURL", null),
        Object(r.b)([a.bind], E.prototype, "OnActionBindingsReloaded", null),
        Object(r.b)(
          [a.bind],
          E.prototype,
          "GetControllerWatcherForSourceFromControllerType",
          null
        ),
        Object(r.b)([a.bind], E.prototype, "OnWebSocketMessage", null),
        Object(r.b)([d.f], E.prototype, "BindingConfig", null),
        Object(r.b)(
          [d.f],
          E.prototype,
          "BindingSubscriptionChangedCanary",
          null
        );
      const k = new E();
      window.controllerBindingStore = k;
    },
    P8UO: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      });
      var i = n("mrSG"),
        o = n("/i/y"),
        s = n("2vnA"),
        r = n("7wIv"),
        a = n.n(r),
        l = n("7uy8");
      class c {
        constructor() {
          var e;
          (this.m_sceneApplicationState = o.v.None),
            (this.m_sceneAppName = ""),
            (this.m_sceneAppKey = ""),
            (this.m_sceneApplicationStateChangedEventHandle = null),
            (this.m_unresponsiveTimeout = void 0),
            (this.m_noAppTimeout = void 0),
            (this.m_mountedTime = void 0),
            (this.m_mountedTime = new Date().getTime()),
            (this.m_sceneApplicationStateChangedEventHandle =
              null === (e = VRHTML) || void 0 === e
                ? void 0
                : e.RegisterForSceneApplicationStateChangedEvents(
                    this.updateTransitionState
                  )),
            this.updateTransitionState();
        }
        get SceneApplicationState() {
          return this.m_sceneApplicationState;
        }
        get SceneAppName() {
          return this.m_sceneAppName;
        }
        get SceneAppKey() {
          return this.m_sceneAppKey;
        }
        get SceneAppIsHome() {
          return this.m_sceneAppKey == l.x;
        }
        static get Instance() {
          return c.s_Instance || (c.s_Instance = new c()), c.s_Instance;
        }
        updateTransitionState() {
          if (!VRHTML) return;
          let e = VRHTML.VRApplications.GetSceneApplicationState();
          e == o.v.Starting
            ? (this.m_sceneApplicationState == o.v.Quitting &&
                this.resetLatchedValued(),
              (this.m_sceneApplicationState = e),
              this.updateLatchedValues(),
              this.cancelUnresponsiveTimeout(),
              this.cancelNoAppTimeout())
            : e == o.v.Quitting
            ? (this.m_sceneApplicationState == o.v.Starting &&
                this.resetLatchedValued(),
              (this.m_sceneApplicationState = e),
              this.updateLatchedValues(),
              this.cancelUnresponsiveTimeout(),
              this.cancelNoAppTimeout())
            : e == o.v.Running
            ? ((this.m_sceneApplicationState = e),
              this.cancelUnresponsiveTimeout(),
              this.cancelNoAppTimeout(),
              this.updateLatchedValues())
            : e == o.v.None
            ? (this.cancelUnresponsiveTimeout(),
              this.m_sceneApplicationState != o.v.None &&
                this.startNoAppTimer())
            : e == o.v.Waiting &&
              (this.m_sceneApplicationState != o.v.Waiting &&
                this.startUnresponsiveTimer(),
              this.cancelNoAppTimeout()),
            this.log("updateTransitionState: " + o.v[e]),
            this.log("this.m_sceneAppKey: " + this.m_sceneAppKey),
            this.log("this.m_sceneAppName: " + this.m_sceneAppName),
            this.log(
              "this.m_sceneApplicationState: " + this.m_sceneApplicationState
            );
        }
        onUnresponsiveTimeout() {
          clearTimeout(this.m_unresponsiveTimeout),
            (this.m_unresponsiveTimeout = void 0),
            (this.m_sceneApplicationState = o.v.Waiting),
            this.updateLatchedValues();
        }
        onNoAppTimeout() {
          clearTimeout(this.m_noAppTimeout),
            (this.m_noAppTimeout = void 0),
            VRHTML.VRApplications.GetSceneApplicationState() == o.v.None &&
              this.resetLatchedValued();
        }
        updateLatchedValues() {
          if (VRHTML)
            if (
              VRHTML.VRApplications.GetSceneApplicationState() == o.v.Starting
            ) {
              let e = VRHTML.VRApplications.GetStartingApplicationKey();
              e && e.length > 0 && (this.m_sceneAppKey = e);
              let t = VRHTML.GetStartingAppName();
              t && t.length > 0 && (this.m_sceneAppName = t);
            } else {
              let e = VRHTML.VRApplications.GetSceneApplicationKey();
              e && e.length > 0 && (this.m_sceneAppKey = e);
              let t = VRHTML.GetCurrentSceneFocusAppName();
              t && t.length > 0 && (this.m_sceneAppName = t);
            }
        }
        resetLatchedValued() {
          (this.m_sceneAppName = ""),
            (this.m_sceneAppKey = ""),
            (this.m_sceneApplicationState = o.v.None);
        }
        cancelUnresponsiveTimeout() {
          this.m_unresponsiveTimeout &&
            (clearTimeout(this.m_unresponsiveTimeout),
            (this.m_unresponsiveTimeout = void 0));
        }
        startUnresponsiveTimer() {
          void 0 === this.m_unresponsiveTimeout &&
            (this.m_unresponsiveTimeout = setTimeout(
              this.onUnresponsiveTimeout,
              c.kUnresponsiveDelayMs
            ));
        }
        startNoAppTimer() {
          void 0 === this.m_noAppTimeout &&
            (this.m_noAppTimeout = setTimeout(
              this.onNoAppTimeout,
              c.kUnresponsiveDelayMs
            ));
        }
        cancelNoAppTimeout() {
          this.m_noAppTimeout &&
            (clearTimeout(this.m_noAppTimeout), (this.m_noAppTimeout = void 0));
        }
        log(e) {
          new Date().getTime(), this.m_mountedTime;
        }
      }
      (c.s_Instance = null),
        (c.kUnresponsiveDelayMs = 2e3),
        (c.kNoAppDelayMs = 2e3),
        Object(i.b)([s.f], c.prototype, "SceneApplicationState", null),
        Object(i.b)([s.f], c.prototype, "SceneAppName", null),
        Object(i.b)([s.f], c.prototype, "SceneAppKey", null),
        Object(i.b)([s.f], c.prototype, "SceneAppIsHome", null),
        Object(i.b)([s.m], c.prototype, "m_sceneApplicationState", void 0),
        Object(i.b)([s.m], c.prototype, "m_sceneAppName", void 0),
        Object(i.b)([s.m], c.prototype, "m_sceneAppKey", void 0),
        Object(i.b)([a.a], c.prototype, "updateTransitionState", null),
        Object(i.b)([a.a], c.prototype, "onUnresponsiveTimeout", null),
        Object(i.b)([a.a], c.prototype, "onNoAppTimeout", null),
        Object(i.b)([a.a], c.prototype, "updateLatchedValues", null),
        Object(i.b)([a.a], c.prototype, "resetLatchedValued", null),
        Object(i.b)([a.a], c.prototype, "cancelUnresponsiveTimeout", null),
        Object(i.b)([a.a], c.prototype, "startUnresponsiveTimer", null),
        Object(i.b)([a.a], c.prototype, "startNoAppTimer", null),
        Object(i.b)([a.a], c.prototype, "cancelNoAppTimeout", null),
        Object(i.b)([a.a], c.prototype, "log", null);
    },
    "Q+Z6": function (e, t, n) {
      "use strict";
      n.d(t, "e", function () {
        return u;
      }),
        n.d(t, "b", function () {
          return p;
        }),
        n.d(t, "a", function () {
          return h;
        }),
        n.d(t, "c", function () {
          return m;
        }),
        n.d(t, "d", function () {
          return g;
        });
      var i = n("mrSG"),
        o = n("7wIv"),
        s = n("vDqi"),
        r = n.n(s),
        a = n("2vnA"),
        l = n("/i/y"),
        c = n("Gmup"),
        d = n("7uy8");
      const u = 16,
        p = 0.2,
        h = 5,
        m = 0.02;
      class b {
        constructor() {
          (this.m_wsWebSocketToServer = void 0),
            (this.m_mailbox = new l.c()),
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
              return new Promise(function (e, t) {
                r.a
                  .get("/app/list.json")
                  .then((t) => {
                    e(t.data.apps);
                  })
                  .catch((e) => {
                    t(e);
                  });
              });
            }),
            (this.GetSettingsUGC = function () {
              return new Promise(function (e, t) {
                r.a
                  .get("/settings_getugc")
                  .then((t) => {
                    e(t.data);
                  })
                  .catch((e) => {
                    t(e);
                  });
              });
            }),
            (this.ReloadSettingsSchema = function () {
              return new Promise(function (e, t) {
                r.a
                  .get("/settings_reloadschema")
                  .then((t) => {
                    e(t.data);
                  })
                  .catch((e) => {
                    t(e);
                  });
              });
            }),
            (this.GetSettingsInfo = function () {
              return new Promise(function (e, t) {
                r.a
                  .get("/settings_getinfo")
                  .then((t) => {
                    e(t.data);
                  })
                  .catch((e) => {
                    t(e);
                  });
              });
            });
        }
        OpenWebSocketToHost() {
          return new Promise((e, t) => {
            console.log("Connecting vrsettings..."),
              (this.m_wsWebSocketToServer = new WebSocket(
                "ws://" + window.location.host
              )),
              this.m_wsWebSocketToServer.addEventListener("open", (t) => {
                this.OnWebSocketOpen(t), e();
              }),
              this.m_wsWebSocketToServer.addEventListener(
                "message",
                this.OnWebSocketMessage
              ),
              this.m_wsWebSocketToServer.addEventListener(
                "close",
                this.OnWebSocketClose
              );
          });
        }
        Init(e) {
          var t;
          return Object(i.a)(this, void 0, void 0, function* () {
            if (this.m_bInitStarted) return;
            (this.m_bInitStarted = !0),
              (this.m_bIsSettingApp = e),
              (this.connected = !1),
              (this.settings = new Map()),
              this.m_bIsSettingApp &&
                (window.addEventListener("hashchange", this.onHashChanged),
                this.onHashChanged()),
              Object(a.e)(
                () => {
                  let e = [];
                  if (0 != this.pendingChanges.size) {
                    for (const [t, n] of this.pendingChanges.entries())
                      e.push({ name: t, value: n });
                    this.pendingChanges.clear(),
                      r.a
                        .post("/settings_set.action", e)
                        .then((e) => {})
                        .catch((t) => {
                          console.log(
                            "Failed to save settings! This usually happens when type is set incorrectly on one of the keys in the schema. ",
                            e
                          );
                        });
                  }
                },
                { delay: 300 }
              ),
              null === (t = VRHTML) ||
                void 0 === t ||
                t.RegisterForDisplayModeNotSupportedEvents(
                  this.SetRestartRequired
                );
            let n = [];
            this.m_mailbox.connected || n.push(this.ConnectMailbox()),
              n.push(this.OpenWebSocketToHost()),
              n.push(this.AwaitInitialSettingsSchema()),
              yield Promise.all(n);
          });
        }
        get MailboxName() {
          if (!this.m_bIsSettingApp) return "settings";
          switch (Object(l.i)()) {
            case l.H.Overlay:
              return "settings/overlay";
            case l.H.Desktop:
              return "settings/desktop";
            default:
              return "settings/unknown";
          }
        }
        ConnectMailbox() {
          return Object(i.a)(this, void 0, void 0, function* () {
            try {
              yield this.m_mailbox.Init(this.MailboxName),
                this.m_mailbox.RegisterHandler(
                  "workshop_state_changed",
                  this.OnWorkshopStateChangedMessage
                ),
                this.m_mailbox.RegisterHandler(
                  "change_route",
                  this.OnChangeRouteMessage
                ),
                this.m_mailbox.RegisterHandler(
                  "app_config_changed",
                  this.OnAppConfigChangedMessage
                ),
                this.m_mailbox.RegisterHandler(
                  "refresh_rate_change",
                  this.OnRefreshRateChangeMessage
                );
            } catch (e) {
              console.log("Failed to open settings mailbox:" + e);
            }
          });
        }
        OnWorkshopStateChangedMessage(e) {
          this.workshopStateChangedCanary++;
        }
        OnChangeRouteMessage(e) {
          this.m_bIsSettingApp &&
            this.setRoute(e.page, e.section, e.sectionParams);
        }
        OnAppConfigChangedMessage(e) {
          return Object(i.a)(this, void 0, void 0, function* () {
            if (e.deleted_appkeys.length)
              for (let t = this.apps.length - 1; t >= 0; t--)
                e.deleted_appkeys.indexOf(this.apps[t].key) >= 0 &&
                  this.apps.splice(t, 1);
            for (let t of e.updated_apps) {
              for (let e = 0; e < this.apps.length; e++)
                if (this.apps[e].key == t.key) {
                  !this.apps[e].is_autolaunch &&
                    t.is_autolaunch &&
                    this.SetRestartRequired(),
                    (this.apps[e] = Object.assign(
                      Object.assign(Object.assign({}, this.apps[e]), {
                        current_scene_process: !1,
                      }),
                      t
                    )),
                    (t = null);
                  break;
                }
              t && (this.apps.push(t), this.probablyOwnedAppkeys.add(t.key));
            }
          });
        }
        OnRefreshRateChangeMessage(e) {
          this.onAppRestartRequired &&
            this.onAppRestartRequired(e.app_supports);
        }
        onHashChanged() {
          if (!this.m_bIsSettingApp) return;
          const e = window.location.hash;
          0 === e.indexOf("#")
            ? (this.route = e.substring(1).split("/"))
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
        setRoutePage(e) {
          this.setRoute(e);
        }
        setRoutePageSection(e) {
          this.setRoute(this.routePage, e);
        }
        setRoutePageSectionParams(e) {
          this.setRoute(this.routePage, this.routePageSection, e);
        }
        setRoute(e, t, n) {
          if (this.m_bIsSettingApp) {
            (e = null != e ? e : ""), (n = null != n ? n : []);
            const i = t ? [e, t, ...n] : [e],
              o = i.join("/");
            window.location.hash.substring(1) != o &&
              ((window.location.hash = o), (this.route = i));
          } else
            this.m_mailbox.connected &&
              this.m_mailbox.SendMessage(this.MailboxName, {
                type: "change_route",
                page: e,
                section: t,
                sectionParams: n,
              });
        }
        SetDashboardFadeSupression(e, t) {
          this.m_mailbox.connected &&
            this.m_mailbox.SendMessage(c.a.k_sDashboardMailboxName, {
              type: c.a.k_sSetDashboardFadeSupressionMessage,
              suppress_dashboard_fade: t,
              for_id: e,
            });
        }
        SetDashboardForceBoundsVisible(e, t, n) {
          this.m_mailbox.connected &&
            this.m_mailbox.SendMessage(c.a.k_sDashboardMailboxName, {
              type: c.a.k_sSetDashboardForceBoundsVisible,
              force_bounds_visible: n,
              for_overlay_key: e,
              for_id: t,
            });
        }
        SetRestartRequired() {
          this.onRestartRequired && this.onRestartRequired();
        }
        OnWebSocketOpen(e) {
          (this.connected = !0),
            this.WebSocketSend("settings_open"),
            window.addEventListener("beforeunload", () => {
              this.WebSocketSend("settings_close");
            }),
            g.GetSettingsInfo().then((e) => {
              this.systemInfo = e;
            }),
            g.GetAppList().then((e) => {
              this.OnVRAppList({ jsonid: "vr_app_list", apps: e });
            });
        }
        OnWebSocketClose(e) {
          console.log("Lost connection to host..."),
            (this.connected = !1),
            this.OpenWebSocketToHost();
        }
        WebSocketSend(e) {
          null != this.m_wsWebSocketToServer &&
            1 == this.m_wsWebSocketToServer.readyState &&
            this.m_wsWebSocketToServer.send(e);
        }
        OnWebSocketMessage(e) {
          let t = JSON.parse(e.data);
          switch (t.jsonid) {
            case "vr_settings":
              this.OnVRSettings(t);
              break;
            case "vr_settings_schema":
              this.OnVRSettingsSchema(t);
              break;
            case "vr_audio_devices":
              this.OnVRAudioDevices(t);
              break;
            case "vr_app_list":
              this.OnVRAppList(t);
              break;
            default:
              t.jsonid
                ? console.log("Received unhandled event: " + t.jsonid)
                : console.log("Received unknown message: ", t);
          }
        }
        OnVRSettings(e) {
          for (let t in e.values) {
            const n = e.values[t];
            if (
              this.settings.get(t) != n ||
              this.m_mapSettingsLastWriteInfo.has(t)
            ) {
              if (this.settingsSchema) {
                const e = this.GetSettingSchema(t);
                e && e.requires_restart && this.SetRestartRequired();
              }
              this.SetSettingValueFromServer(t, n);
            }
          }
        }
        SetSettingValueFromServer(e, t) {
          const n = 1e3 * b.SERVER_SETTING_MERGE_DEFER_DURATION;
          if (this.m_mapSettingsLastWriteInfo.has(e)) {
            let i = this.m_mapSettingsLastWriteInfo.get(e);
            if (new Date().getTime() - i.nLastUserUpdateTime < n)
              return (
                window.clearTimeout(i.nPendingServerValueUpdateTimeout),
                void (i.nPendingServerValueUpdateTimeout = window.setTimeout(
                  () => {
                    this.SetSettingValueFromServer(e, t);
                  },
                  n
                ))
              );
            window.clearTimeout(i.nPendingServerValueUpdateTimeout),
              this.m_mapSettingsLastWriteInfo.delete(e);
          }
          this.settings.set(e, t);
        }
        UpdateLastUserWriteTimeForSetting(e) {
          const t = new Date().getTime();
          this.m_mapSettingsLastWriteInfo.has(e)
            ? (this.m_mapSettingsLastWriteInfo.get(e).nLastUserUpdateTime = t)
            : this.m_mapSettingsLastWriteInfo.set(e, {
                nLastUserUpdateTime: t,
                nPendingServerValueUpdateTimeout: 0,
              });
        }
        OnVRSettingsSchema(e) {
          null == this.settingsSchema &&
            (console.log("Got vr settings schema"),
            (this.settingsSchema = e.schema),
            (this.showInternalSettings = e.is_steamvr_main));
        }
        AwaitInitialSettingsSchema() {
          return Object(i.a)(this, void 0, void 0, function* () {
            return Object(a.q)(() => !!this.settingsSchema);
          });
        }
        OnVRAudioDevices(e) {
          console.log("Got audio devices"), (this.audioDevices = e);
        }
        OnVRAppList(e) {
          (this.apps = e.apps),
            e.apps.map((e) => this.probablyOwnedAppkeys.add(e.key));
        }
        SettingNameMatches(e, t) {
          if (t.endsWith("*")) {
            let n = t.length - 1;
            return e.substr(0, n) == t.substr(0, n);
          }
          return e == t;
        }
        GetSettingSchema(e) {
          for (let t of this.settingsSchema)
            if (t.values)
              for (let n of t.values)
                if (this.SettingNameMatches(e, n.name)) return n;
          return null;
        }
        ResetSettingsValue(e) {
          this.SetSettingsValue(e, null);
        }
        ResetSettingsValues(...e) {
          e.forEach(this.ResetSettingsValue);
        }
        SetSettingsValue(e, t) {
          let n = this.GetSettingSchema(e);
          null != n
            ? (null != t &&
                ("int" == n.type
                  ? (t = parseInt(t))
                  : "float" == n.type
                  ? (t = parseFloat(t))
                  : "string" == n.type
                  ? (t = "" + t)
                  : "bool" == n.type && (t = !!t)),
              n.requires_restart && this.SetRestartRequired(),
              this.SetSettingsStringValueWithoutSchema(e, t))
            : console.log(
                "Tried to set setting " +
                  e +
                  " but it's not in the schema! Aborting"
              );
        }
        SetSettingsStringValueWithoutSchema(e, t) {
          if (VRHTML) {
            const n = e.split("/");
            if (4 != n.length || "" != n[0] || "settings" != n[1])
              throw new Error("bad settings path " + e);
            VRHTML.VRSettings.Set(n[2], n[3], t),
              this.settings.set(e, VRHTML.VRSettings.Get(n[2], n[3]));
          } else
            null != t && this.settings.set(e, t), this.pendingChanges.set(e, t);
          this.UpdateLastUserWriteTimeForSetting(e);
        }
        GetSettingsValue(e) {
          return Object(i.a)(this, void 0, void 0, function* () {
            return new Promise(function (t, n) {
              r.a
                .get("/settings_get", { params: { name: e } })
                .then((e) => {
                  t(e.data);
                })
                .catch((e) => {
                  n(null);
                });
            });
          });
        }
        ResetAppSettings(e) {
          return r.a
            .post("/app/resetsettings", { app: e })
            .then((t) => this.GetAppSettings(e))
            .catch((e) => {});
        }
        SetAppSettings(e, t) {
          let n = Object.assign(Object.assign({}, t), { app: e });
          r.a.post("/app/setsettings", n);
          for (let e = 0; e < this.apps.length; e++)
            if (this.apps[e].key == n.app) {
              !this.apps[e].is_autolaunch &&
                t.is_autolaunch &&
                this.SetRestartRequired(),
                (this.apps[e] = Object.assign(
                  Object.assign({}, this.apps[e]),
                  t
                ));
              break;
            }
        }
        GetAppSettings(e) {
          return Object(i.a)(this, void 0, void 0, function* () {
            return new Promise(function (t, n) {
              r.a
                .get("/app/getsettings", { params: { app: e } })
                .then((e) => {
                  t(e.data);
                })
                .catch((e) => {
                  n(null);
                });
            });
          });
        }
        get NumSupersamplingSteps() {
          return Math.floor((h - p + 0.5 * m) / m);
        }
        SliderposToSupersample(e) {
          return e > h ? h : e < p ? p : e;
        }
        get showAdvancedSettings() {
          return this.settings.get(d.D);
        }
        set showAdvancedSettings(e) {
          this.SetSettingsValue(d.D, e);
        }
        showBindingCallouts(e) {
          let t = { type: "request_binding_callouts", app_key: e };
          this.m_mailbox.SendMessage(d.b, t);
        }
      }
      (b.SERVER_SETTING_MERGE_DEFER_DURATION = 1),
        Object(i.b)([a.m], b.prototype, "connected", void 0),
        Object(i.b)([a.m], b.prototype, "settingsSchema", void 0),
        Object(i.b)([a.m], b.prototype, "settings", void 0),
        Object(i.b)([a.m], b.prototype, "systemInfo", void 0),
        Object(i.b)([a.m], b.prototype, "audioDevices", void 0),
        Object(i.b)([a.m], b.prototype, "apps", void 0),
        Object(i.b)([a.m], b.prototype, "probablyOwnedAppkeys", void 0),
        Object(i.b)([a.m], b.prototype, "showInternalSettings", void 0),
        Object(i.b)([a.m], b.prototype, "workshopStateChangedCanary", void 0),
        Object(i.b)([a.m], b.prototype, "pendingChanges", void 0),
        Object(i.b)([a.m], b.prototype, "route", void 0),
        Object(i.b)([o.bind], b.prototype, "OpenWebSocketToHost", null),
        Object(i.b)(
          [o.bind],
          b.prototype,
          "OnWorkshopStateChangedMessage",
          null
        ),
        Object(i.b)([o.bind], b.prototype, "OnChangeRouteMessage", null),
        Object(i.b)([o.bind], b.prototype, "OnAppConfigChangedMessage", null),
        Object(i.b)([o.bind], b.prototype, "OnRefreshRateChangeMessage", null),
        Object(i.b)([a.d.bound], b.prototype, "onHashChanged", null),
        Object(i.b)([a.f], b.prototype, "routePage", null),
        Object(i.b)([a.f], b.prototype, "routePageSection", null),
        Object(i.b)([a.f], b.prototype, "routePageSectionParams", null),
        Object(i.b)([a.d], b.prototype, "setRoutePage", null),
        Object(i.b)([a.d], b.prototype, "setRoutePageSection", null),
        Object(i.b)([a.d], b.prototype, "setRoutePageSectionParams", null),
        Object(i.b)([a.d], b.prototype, "setRoute", null),
        Object(i.b)([o.bind], b.prototype, "SetDashboardFadeSupression", null),
        Object(i.b)(
          [o.bind],
          b.prototype,
          "SetDashboardForceBoundsVisible",
          null
        ),
        Object(i.b)([o.bind], b.prototype, "SetRestartRequired", null),
        Object(i.b)([o.bind], b.prototype, "OnWebSocketOpen", null),
        Object(i.b)([o.bind], b.prototype, "OnWebSocketClose", null),
        Object(i.b)([o.bind], b.prototype, "WebSocketSend", null),
        Object(i.b)([o.bind], b.prototype, "OnWebSocketMessage", null),
        Object(i.b)([a.d], b.prototype, "OnVRSettings", null),
        Object(i.b)([a.d], b.prototype, "SetSettingValueFromServer", null),
        Object(i.b)([a.d], b.prototype, "OnVRSettingsSchema", null),
        Object(i.b)([a.d.bound], b.prototype, "ResetSettingsValue", null),
        Object(i.b)([a.d], b.prototype, "ResetSettingsValues", null),
        Object(i.b)([a.d], b.prototype, "SetSettingsValue", null),
        Object(i.b)(
          [a.d],
          b.prototype,
          "SetSettingsStringValueWithoutSchema",
          null
        ),
        Object(i.b)([a.f], b.prototype, "NumSupersamplingSteps", null);
      const g = new b();
      window.VRSettingsState = g;
    },
    "TbT/": function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return o;
      }),
        n.d(t, "c", function () {
          return A;
        }),
        n.d(t, "b", function () {
          return C;
        }),
        n.d(t, "l", function () {
          return j;
        }),
        n.d(t, "n", function () {
          return M;
        }),
        n.d(t, "h", function () {
          return T;
        }),
        n.d(t, "k", function () {
          return R;
        }),
        n.d(t, "m", function () {
          return E;
        }),
        n.d(t, "p", function () {
          return I;
        }),
        n.d(t, "o", function () {
          return D;
        }),
        n.d(t, "g", function () {
          return P;
        }),
        n.d(t, "a", function () {
          return V;
        }),
        n.d(t, "i", function () {
          return N;
        }),
        n.d(t, "j", function () {
          return F;
        }),
        n.d(t, "f", function () {
          return G;
        }),
        n.d(t, "e", function () {
          return H;
        });
      var i,
        o,
        s = n("mrSG"),
        r = n("q1tI"),
        a = n("7wIv"),
        l = n("GXif"),
        c = n("2vnA"),
        d = n("okNM"),
        u = n("Q+Z6"),
        p = n("/i/y"),
        h = n("CzjV"),
        m = n("6YgL"),
        b = n("hcOo"),
        g = n("lbBr"),
        S = n("nAcY"),
        _ = n("GxMB"),
        f = n("7uy8"),
        v = n("Ck0r"),
        y = n("X3sx"),
        O = n("p9CI");
      !(function (e) {
        (e[(e.Normal = 0)] = "Normal"),
          (e[(e.Advanced = 1)] = "Advanced"),
          (e[(e.Desktop = 2)] = "Desktop"),
          (e[(e.VR = 3)] = "VR");
      })(o || (o = {}));
      let A = class extends r.Component {
        constructor(e) {
          super(e);
        }
        render() {
          let e = Object.assign({}, this.props);
          delete e.label, delete e.subsection, delete e.visibility;
          let t = this.props.visibility == o.Advanced;
          switch (this.props.visibility) {
            case o.Desktop:
              t = Object(p.i)() != p.H.Desktop;
              break;
            case o.VR:
              t = Object(p.i)() != p.H.Overlay;
          }
          return t && !u.d.showAdvancedSettings
            ? null
            : (this.props.visibility == o.Advanced &&
                (e.className = Object(b.a)(e.className, "Advanced")),
              r.createElement("div", e, this.props.children));
        }
      };
      A = Object(s.b)([d.a], A);
      class C extends r.Component {
        constructor(e) {
          super(e);
        }
        makeSettingComponent(e) {
          if (e.requires)
            for (let t in e.requires) {
              let n = e.requires[t];
              if (u.d.settings.get(t) != n) return null;
            }
          switch (e.control) {
            case "checkbox":
              return r.createElement(w, {
                key: e.name,
                name: e.name,
                label: e.label ? Object(l.c)(e.label) : "",
                title: e.text ? Object(l.c)(e.text) : "",
              });
            case "toggle":
              return r.createElement(M, {
                key: e.name,
                name: e.name,
                swapOnOff: e.inverted,
                label: e.label ? Object(l.c)(e.label) : "",
                title: e.text ? Object(l.c)(e.text) : "",
              });
            case "select":
              let t = e.options
                .filter((e) => null != e)
                .map((e, t) => ({
                  value: e.value,
                  sLabel: Object(l.c)(e.label),
                }));
              return r.createElement(T, {
                key: e.name,
                name: e.name,
                label: e.label ? Object(l.c)(e.label) : "",
                title: e.text ? Object(l.c)(e.text) : "",
                items: t,
              });
            case "radio":
              let n = e.options
                .filter((e) => null != e)
                .map((e, t) => ({
                  sValue: e.value,
                  sTitle: Object(l.c)(e.label),
                }));
              return r.createElement(R, {
                key: e.name,
                name: e.name,
                label: e.label ? Object(l.c)(e.label) : "",
                items: n,
              });
            case "scale":
              return r.createElement("div", { key: e.name });
            case "slider":
              return r.createElement(E, {
                key: e.name,
                name: e.name,
                label: e.label ? Object(l.c)(e.label) : "",
                min: e.min ? e.min : 0,
                max: e.max ? e.max : 100,
                step: e.step ? e.step : 5,
                renderValue: (e) =>
                  "number" == typeof e ? e.toString() : JSON.stringify(e),
              });
            case "none":
            default:
              return r.createElement("div", { key: e.name });
          }
        }
        makeResetToDefaultButton() {
          return r.createElement(
            "div",
            { className: "SettingsItem Button ResetDefaultButton" },
            r.createElement(
              m.a,
              { className: "ButtonControl", onClick: this.ResetToDefaults },
              Object(l.c)("#Settings_ResetPageToDefault")
            )
          );
        }
        ResetToDefaults() {
          for (let e of this.props.section.values)
            null != e.name && u.d.SetSettingsValue(e.name, null);
        }
        get schemaComponents() {
          if (!this.props.section.values) return null;
          let e = [];
          for (let t of this.props.section.values)
            if (t.control) {
              let n = this.makeSettingComponent(t);
              n && e.push(n);
            }
          return e;
        }
        GetComponentsForGroup(e) {
          let t = [];
          for (let n of this.props.section.values)
            if (n.control && n.group == e) {
              let e = this.makeSettingComponent(n);
              e && t.push(e);
            }
          return r.createElement("div", null, t);
        }
        render() {
          return this.props.active
            ? r.createElement(
                r.Fragment,
                null,
                this.schemaComponents,
                this.makeResetToDefaultButton()
              )
            : null;
        }
      }
      Object(s.b)([a.bind], C.prototype, "ResetToDefaults", null),
        Object(s.b)([c.f], C.prototype, "schemaComponents", null);
      let w = class extends r.Component {
        constructor(e) {
          if (
            (super(e),
            void 0 !== this.props.name && void 0 !== this.props.value)
          )
            throw new Error(
              "SettingsCheckbox cannot have both an explicit value and a settings name set in props."
            );
        }
        handleChange(e) {
          let t = e.target.checked;
          this.props.name && u.d.SetSettingsValue(this.props.name, t),
            this.props.onChange && this.props.onChange(t),
            m.b.temporarilySuppressSoundEffect(),
            h.b.Instance.playSound(h.a.ButtonClick);
        }
        render() {
          let e = !!this.props.value;
          return (
            this.props.name && (e = !!u.d.settings.get(this.props.name)),
            r.createElement(
              "div",
              { className: "FlexRow SettingsItem Checkbox" },
              r.createElement(
                "label",
                { className: "SettingsCheckboxContainer FlexRow" },
                r.createElement("input", {
                  type: "checkbox",
                  checked: e,
                  onChange: this.handleChange,
                }),
                r.createElement(
                  "div",
                  { className: "FlexColumn" },
                  this.props.label &&
                    r.createElement(
                      "div",
                      { className: "Label" },
                      this.props.label
                    ),
                  this.props.title &&
                    r.createElement(
                      "div",
                      { className: "Label Description" },
                      this.props.title
                    )
                )
              )
            )
          );
        }
      };
      Object(s.b)([a.bind], w.prototype, "handleChange", null),
        (w = Object(s.b)([d.a], w));
      let j = class extends r.Component {
        constructor(e) {
          if (
            (super(e),
            (this.state = { nMouseDownIndex: 0 }),
            void 0 !== this.props.name && void 0 !== this.props.value)
          )
            throw new Error(
              "SettingsSegmentedControl cannot have both an explicit value and a settings name set in props."
            );
          if (
            void 0 !== this.props.subsection &&
            void 0 !== this.props.valueSubsections
          )
            throw new Error(
              "SettingsSegmentedControl cannot have both a constantly-visible subsection and value-dependent subsections (valueSubsections) set in props."
            );
        }
        getCurrentValue() {
          return this.props.name
            ? u.d.settings.get(this.props.name)
            : this.props.value;
        }
        onItemClick(e) {
          let t = e.value;
          if (this.ValuesAreEqual(t, this.getCurrentValue())) {
            if (2 != this.props.items.length) return;
            t = this.props.items.find(
              (e) => !this.ValuesAreEqual(e.value, t)
            ).value;
          }
          this.props.name && u.d.SetSettingsValue(this.props.name, t),
            this.props.onChange && this.props.onChange(t),
            Object(p.i)() == p.H.Overlay &&
              (m.b.temporarilySuppressSoundEffect(),
              h.b.Instance.playSound(h.a.ButtonClick)),
            this.props.requiresRestart && u.d.SetRestartRequired();
        }
        onGroupMouseEnter() {
          2 == this.props.items.length &&
            Object(p.i)() == p.H.Overlay &&
            S.b.Instance.triggerHaptic(S.a.ButtonEnter);
        }
        onGroupMouseLeave() {
          2 == this.props.items.length &&
            Object(p.i)() == p.H.Overlay &&
            S.b.Instance.triggerHaptic(S.a.ButtonLeave);
        }
        onOptionMouseEnter() {
          2 != this.props.items.length &&
            Object(p.i)() == p.H.Overlay &&
            S.b.Instance.triggerHaptic(S.a.ButtonEnter);
        }
        onOptionMouseLeave() {
          2 != this.props.items.length &&
            Object(p.i)() == p.H.Overlay &&
            S.b.Instance.triggerHaptic(S.a.ButtonLeave);
        }
        ValuesAreEqual(e, t) {
          return (
            ("boolean" != typeof e && "boolean" != typeof t) ||
              ((e = !!e), (t = !!t)),
            e === t
          );
        }
        render() {
          var e, t, n;
          const i = this.getCurrentValue(),
            o = this.props.items.findIndex((e) =>
              this.ValuesAreEqual(e.value, i)
            ),
            s =
              null !=
              (n =
                null ===
                  (t =
                    null === (e = this.props.valueSubsections) || void 0 === e
                      ? void 0
                      : e.find((e) => this.ValuesAreEqual(e.value, i))) ||
                void 0 === t
                  ? void 0
                  : t.subsection)
                ? n
                : this.props.subsection,
            a = !!s;
          return r.createElement(
            A,
            {
              className: Object(b.a)("SettingsItem", "SegmentedControl"),
              title: this.props.title,
              visibility: this.props.visibility,
            },
            r.createElement("div", { className: "Label" }, this.props.label),
            r.createElement(
              "div",
              { className: Object(b.a)("SubsectionStem", ["Hidden", !a]) },
              r.createElement(
                "div",
                {
                  className: Object(b.a)("SegmentedControlGroup", [
                    "DualValue",
                    2 == this.props.items.length,
                  ]),
                  style: {
                    "--item-count": this.props.items.length,
                    "--item-value-index": o,
                    "--toggle-control-translate-x-direction":
                      0 == o
                        ? 1
                        : o == this.props.items.length - 1
                        ? -1
                        : this.state.nMouseDownIndex > o
                        ? 1
                        : this.state.nMouseDownIndex < o
                        ? -1
                        : 0,
                  },
                  onMouseEnter: this.onGroupMouseEnter,
                  onMouseLeave: this.onGroupMouseLeave,
                },
                this.props.items.map((e, t) =>
                  r.createElement(
                    "div",
                    {
                      key: t,
                      className: Object(b.a)("SegmentedControlGroupOption", [
                        "Active",
                        this.ValuesAreEqual(e.value, i),
                      ]),
                      onClick: () => this.onItemClick(e),
                      onMouseDown: () => this.setState({ nMouseDownIndex: t }),
                      onMouseEnter: this.onOptionMouseEnter,
                      onMouseLeave: this.onOptionMouseLeave,
                    },
                    r.createElement("span", null, e.sLabel)
                  )
                )
              )
            ),
            !!s &&
              r.createElement("div", { className: "Subsection WithStem" }, s)
          );
        }
      };
      Object(s.b)([a.bind], j.prototype, "onGroupMouseEnter", null),
        Object(s.b)([a.bind], j.prototype, "onGroupMouseLeave", null),
        Object(s.b)([a.bind], j.prototype, "onOptionMouseEnter", null),
        Object(s.b)([a.bind], j.prototype, "onOptionMouseLeave", null),
        (j = Object(s.b)([d.a], j));
      let M = class extends r.Component {
        constructor(e) {
          if (
            (super(e),
            void 0 !== this.props.name && void 0 !== this.props.value)
          )
            throw new Error(
              "SettingsToggle cannot have both an explicit value and a settings name set in props."
            );
          if (
            void 0 !== this.props.subsection &&
            (void 0 !== this.props.onSubsection ||
              void 0 !== this.props.offSubsection)
          )
            throw new Error(
              "SettingsToggle cannot have both a constantly-visible subsection and an onSubsection/offSubsection set in props."
            );
        }
        render() {
          var e, t;
          const n = !!this.props.swapOnOff,
            i = !this.props.swapOnOff;
          return r.createElement(j, {
            name: this.props.name,
            label: this.props.label,
            title: this.props.title,
            items: [
              {
                value: n,
                sLabel:
                  ((e = this.props.offLabel),
                  null != e ? e : Object(l.c)("#Settings_ToggleButton_Off")),
              },
              {
                value: i,
                sLabel:
                  ((t = this.props.onLabel),
                  null != t ? t : Object(l.c)("#Settings_ToggleButton_On")),
              },
            ],
            value: this.props.value,
            onChange: this.props.onChange,
            requiresRestart: this.props.requiresRestart,
            subsection: this.props.subsection,
            valueSubsections: this.props.subsection
              ? void 0
              : [
                  { value: n, subsection: this.props.offSubsection },
                  { value: i, subsection: this.props.onSubsection },
                ],
            visibility: this.props.visibility,
          });
        }
      };
      M = Object(s.b)([d.a], M);
      let T = class extends r.Component {
        constructor(e) {
          if (
            (super(e),
            void 0 !== this.props.name && void 0 !== this.props.value)
          )
            throw new Error(
              "SettingsDropdown cannot have both an explicit value and a settings name set in props."
            );
        }
        get value() {
          return this.props.name
            ? u.d.settings.get(this.props.name)
            : void 0 !== this.props.value
            ? this.props.value
            : null;
        }
        onChange(e) {
          this.props.name &&
            u.d.SetSettingsValue(this.props.name, e.toString()),
            this.props.onChange && this.props.onChange(e),
            this.props.requiresRestart && u.d.SetRestartRequired();
        }
        render() {
          let e = Object.assign({}, this.props);
          return (
            (e.onChange = this.onChange),
            (e.value = this.value),
            r.createElement(
              A,
              {
                className: "SettingsItem",
                title: this.props.title,
                visibility: this.props.visibility,
              },
              this.props.label &&
                r.createElement(
                  "div",
                  {
                    className: Object(b.a)("Label", [
                      "Spanning",
                      this.props.fullWidth,
                    ]),
                  },
                  this.props.label
                ),
              r.createElement(
                "div",
                {
                  className: Object(b.a)("SubsectionStem", [
                    "Hidden",
                    !this.props.subsection,
                  ]),
                },
                r.createElement(_.a, Object.assign({}, e))
              ),
              !!this.props.subsection &&
                r.createElement(
                  "div",
                  { className: "Subsection WithStem" },
                  this.props.subsection
                )
            )
          );
        }
      };
      Object(s.b)([c.f], T.prototype, "value", null),
        Object(s.b)([a.bind], T.prototype, "onChange", null),
        (T = Object(s.b)([d.a], T));
      let R = class extends r.Component {
        constructor(e) {
          if (
            (super(e),
            void 0 !== this.props.name && void 0 !== this.props.value)
          )
            throw new Error(
              "SettingsRadioButtons cannot have both an explicit value and a settings name set in props."
            );
        }
        get value() {
          return this.props.name
            ? u.d.settings.get(this.props.name)
            : void 0 !== this.props.value
            ? this.props.value
            : null;
        }
        onChange(e) {
          this.props.name &&
            u.d.SetSettingsValue(this.props.name, e.toString()),
            this.props.onChange && this.props.onChange(e);
        }
        render() {
          const e = this.props.items.map((e, t) => {
            const n = e.value == this.value;
            return r.createElement(
              m.a,
              {
                className: Object(b.a)("RadioButton", ["Selected", n]),
                key: t,
                enabled: !n,
                onClick: () => this.onChange(e.value),
              },
              r.createElement("div", { className: "Label" }, e.sLabel)
            );
          });
          return r.createElement(
            A,
            {
              className: Object(b.a)("SettingsItem", "RadioButtons"),
              title: this.props.title,
            },
            r.createElement("div", { className: "Label" }, this.props.label),
            r.createElement("div", { className: "RadioButtonsSet" }, e)
          );
        }
      };
      Object(s.b)([c.f], R.prototype, "value", null),
        Object(s.b)([a.bind], R.prototype, "onChange", null),
        (R = Object(s.b)([d.a], R));
      let E = class extends r.Component {
        constructor(e) {
          if (
            (super(e),
            void 0 !== this.props.name && void 0 !== this.props.value)
          )
            throw new Error(
              "SettingsSlider cannot have both an explicit value and a settings name set in props."
            );
          (this.state = {}),
            (this.m_sUniqueIdForFadeSupression = Math.random().toString());
        }
        onInteractionStart() {
          var e, t;
          this.props.dashboardFadeSupression &&
            u.d.SetDashboardFadeSupression(
              this.m_sUniqueIdForFadeSupression,
              !0
            ),
            null === (t = (e = this.props).onInteractionStart) ||
              void 0 === t ||
              t.call(e);
        }
        onInteractionEnd() {
          var e, t;
          this.props.dashboardFadeSupression &&
            u.d.SetDashboardFadeSupression(
              this.m_sUniqueIdForFadeSupression,
              !1
            ),
            null === (t = (e = this.props).onInteractionEnd) ||
              void 0 === t ||
              t.call(e);
        }
        get value() {
          if (this.props.name) {
            let e = u.d.settings.get(this.props.name);
            return e || 0;
          }
          return this.props.value;
        }
        onChange(e) {
          var t, n;
          this.props.name &&
            u.d.SetSettingsValue(this.props.name, e.toString()),
            null === (n = (t = this.props).onChange) ||
              void 0 === n ||
              n.call(t, e);
        }
        render() {
          let e = Object.assign({}, this.props);
          return (
            (e.onInteractionStart = this.onInteractionStart),
            (e.onInteractionEnd = this.onInteractionEnd),
            (e.onChange = this.onChange),
            (e.value = this.value),
            r.createElement(
              A,
              {
                className: Object(b.a)(
                  "SettingsItem",
                  "Slider",
                  this.props.additionalClassName
                ),
                title: this.props.title,
              },
              this.props.label &&
                r.createElement(
                  "label",
                  {
                    className: Object(b.a)("Label", [
                      "Spanning",
                      this.props.labelSpans,
                    ]),
                  },
                  this.props.label
                ),
              r.createElement(y.a, Object.assign({}, e))
            )
          );
        }
      };
      function k(e) {
        return (
          "#" +
          ("0" + Math.floor(e.r).toString(16)).slice(-2) +
          ("0" + Math.floor(e.g).toString(16)).slice(-2) +
          ("0" + Math.floor(e.b).toString(16)).slice(-2) +
          ("0" + Math.floor(255 * e.a).toString(16)).slice(-2)
        ).toUpperCase();
      }
      Object(s.b)([a.bind], E.prototype, "onInteractionStart", null),
        Object(s.b)([a.bind], E.prototype, "onInteractionEnd", null),
        Object(s.b)([c.f], E.prototype, "value", null),
        Object(s.b)([a.bind], E.prototype, "onChange", null),
        (E = Object(s.b)([d.a], E));
      let I = (i = class extends r.Component {
        static HueToRGB(e, t, n) {
          return 6 * (n = (n + 1) % 1) < 1
            ? e + (t - e) * n * 6
            : 2 * n < 1
            ? t
            : 3 * n < 2
            ? e + (t - e) * (2 / 3 - n) * 6
            : e;
        }
        static HSLToRGB(e, t, n) {
          e /= 360;
          let o = n <= 0.5 ? n * (1 + t) : n + t - n * t,
            s = 2 * n - o;
          return [
            i.HueToRGB(s, o, e + 1 / 3),
            i.HueToRGB(s, o, e),
            i.HueToRGB(s, o, e - 1 / 3),
          ];
        }
        static RGBtoHueLuminance(e, t, n) {
          (e /= 255), (t /= 255), (n /= 255);
          let i = Math.max(e, t, n),
            o = Math.min(e, t, n),
            s = 0,
            r = (i + o) / 2;
          if (i != o) {
            let r = i - o;
            switch (i) {
              case e:
                s = (t - n) / r + (t < n ? 6 : 0);
                break;
              case t:
                s = (n - e) / r + 2;
                break;
              case n:
                s = (e - t) / r + 4;
            }
            s /= 6;
          }
          return { hue: 360 * s, luminance: r };
        }
        onSliderChanged(e) {
          let t = [255, 255, 255];
          if (
            (e <= 360 && (t = i.HSLToRGB(e, 1, 0.5).map((e) => 255 * e)),
            this.props.name)
          ) {
            const e =
              "#" +
              (t[2] | (t[1] << 8) | (t[0] << 16)).toString(16).padStart(6, "0");
            u.d.SetSettingsValue(this.props.name, e);
          }
          this.props.nameR &&
            this.props.nameG &&
            this.props.nameB &&
            (u.d.SetSettingsValue(this.props.nameR, t[0]),
            u.d.SetSettingsValue(this.props.nameG, t[1]),
            u.d.SetSettingsValue(this.props.nameB, t[2])),
            this.props.onChange &&
              this.props.onChange({ r: t[0], g: t[1], b: t[2] });
        }
        render() {
          let e, t, n;
          this.props.nameR && this.props.nameG && this.props.nameB
            ? ((e = u.d.settings.get(this.props.nameR)),
              (t = u.d.settings.get(this.props.nameG)),
              (n = u.d.settings.get(this.props.nameB)))
            : this.props.value &&
              ((e = this.props.value.r),
              (t = this.props.value.g),
              (n = this.props.value.b));
          const o = i.RGBtoHueLuminance(e, t, n),
            s = 360 / (1 - i.WHITE_SIZE_PERCENT),
            a = 255 == e && 255 == t && 255 == n ? s : o.hue;
          return r.createElement(E, {
            additionalClassName: "Hue",
            label: this.props.label,
            labelSpans: !0,
            title: this.props.text,
            styleVariant: y.b.Color,
            renderValue: (e) =>
              e > 360 ? "white" : "hsl(" + e + ", 100%, 50%)",
            max: s,
            value: a,
            onChange: this.onSliderChanged,
          });
        }
      });
      (I.WHITE_SIZE_PERCENT = 0.03),
        Object(s.b)([a.bind], I.prototype, "onSliderChanged", null),
        (I = i = Object(s.b)([d.a], I));
      let D = class extends r.Component {
        get value() {
          return this.props.name
            ? u.d.settings.get(this.props.name)
            : this.props.value;
        }
        onSliderChanged(e) {
          this.props.onChange && this.props.onChange(e),
            this.props.name && u.d.SetSettingsValue(this.props.name, e);
        }
        render() {
          const e = this.props.color
            ? this.props.color
            : { r: 255, g: 255, b: 255 };
          return r.createElement(E, {
            additionalClassName: "Alpha",
            label: this.props.label,
            title: this.props.text,
            labelSpans: !0,
            styleVariant: y.b.Color,
            renderValue: (t) =>
              "rgba(" +
              (e.r * t) / this.props.max +
              "," +
              (e.g * t) / this.props.max +
              "," +
              (e.b * t) / this.props.max +
              ",1)",
            sliderColor: "rgb(" + e.r + "," + e.g + "," + e.b + ")",
            min: this.props.min,
            max: this.props.max,
            value: this.value,
            onChange: this.onSliderChanged,
          });
        }
      };
      Object(s.b)([c.f], D.prototype, "value", null),
        Object(s.b)([a.bind], D.prototype, "onSliderChanged", null),
        (D = Object(s.b)([d.a], D));
      let B,
        P = class extends r.Component {
          constructor(e) {
            super(e), (this.state = { bShowingModal: !1 });
          }
          get value() {
            if (this.props.name)
              return (e = u.d.settings.get(this.props.name))
                ? {
                    r: parseInt(e.slice(1, 3), 16),
                    g: parseInt(e.slice(3, 5), 16),
                    b: parseInt(e.slice(5, 7), 16),
                    a: parseInt(e.slice(7, 9), 16) / 255,
                  }
                : { r: 0, g: 0, b: 0, a: 0 };
            if (
              this.props.nameR ||
              this.props.nameG ||
              this.props.nameB ||
              this.props.nameA
            ) {
              let e = { r: 0, g: 0, b: 0, a: 1 };
              return (
                this.props.nameR && (e.r = u.d.settings.get(this.props.nameR)),
                this.props.nameG && (e.g = u.d.settings.get(this.props.nameG)),
                this.props.nameB && (e.b = u.d.settings.get(this.props.nameB)),
                this.props.nameA &&
                  (e.a = u.d.settings.get(this.props.nameA) / this.alphaScale),
                e
              );
            }
            return this.props.value;
            var e;
          }
          get alphaScale() {
            return void 0 === this.props.alphaScale ? 1 : this.props.alphaScale;
          }
          onAlphaChange(e) {
            const t = this.value,
              n = { r: t.r, g: t.g, b: t.b, a: e };
            this.props.name && u.d.SetSettingsValue(this.props.name, k(n)),
              this.props.nameA &&
                u.d.SetSettingsValue(this.props.nameA, e * this.alphaScale),
              this.props.onChange && this.props.onChange(n);
          }
          get minA() {
            return void 0 === this.props.minA ? 0 : this.props.minA;
          }
          get maxA() {
            return void 0 === this.props.maxA ? 1 : this.props.maxA;
          }
          onColorChange(e) {
            const t = { r: e.r, g: e.g, b: e.b, a: this.value.a };
            this.props.name && u.d.SetSettingsValue(this.props.name, k(t)),
              this.props.nameR && u.d.SetSettingsValue(this.props.nameR, t.r),
              this.props.nameG && u.d.SetSettingsValue(this.props.nameG, t.g),
              this.props.nameB && u.d.SetSettingsValue(this.props.nameB, t.b),
              this.props.onChange && this.props.onChange(t);
          }
          showModal() {
            this.setState({ bShowingModal: !0 });
          }
          hideModal() {
            this.setState({ bShowingModal: !1 });
          }
          render() {
            const e = this.value;
            return r.createElement(
              A,
              {
                className: "SettingsItem ColorPicker",
                title: this.props.title,
              },
              this.props.label &&
                r.createElement(
                  "div",
                  { className: "Label" },
                  this.props.label
                ),
              r.createElement(m.a, {
                className: "ButtonControl",
                onClick: this.showModal,
                style: {
                  "--color-value-rgb": e.r + "," + e.g + "," + e.b,
                  "--color-value-a": e.a,
                },
              }),
              this.state.bShowingModal &&
                r.createElement(
                  N,
                  {
                    onDismissRequested: this.hideModal,
                    header: this.props.label,
                  },
                  r.createElement(I, {
                    label: Object(l.c)("#Settings_Chaperone_BoundsColor"),
                    onChange: this.onColorChange,
                    value: e,
                  }),
                  r.createElement(D, {
                    label: Object(l.c)(
                      "#Settings_Chaperone_BoundsTransparency"
                    ),
                    min: this.minA,
                    max: this.maxA,
                    onChange: this.onAlphaChange,
                    color: e,
                    value: e.a,
                  })
                )
            );
          }
        };
      Object(s.b)([c.f], P.prototype, "value", null),
        Object(s.b)([c.f], P.prototype, "alphaScale", null),
        Object(s.b)([a.bind], P.prototype, "onAlphaChange", null),
        Object(s.b)([c.f], P.prototype, "minA", null),
        Object(s.b)([c.f], P.prototype, "maxA", null),
        Object(s.b)([a.bind], P.prototype, "onColorChange", null),
        Object(s.b)([a.bind], P.prototype, "showModal", null),
        Object(s.b)([a.bind], P.prototype, "hideModal", null),
        (P = Object(s.b)([d.a], P));
      class L {
        constructor() {
          var e;
          (this.m_sceneApplicationStateChangedEventHandle = null),
            (this.m_mapSelectedAppKeys = {}),
            (this.m_mapCallbacks = {}),
            (this.m_sceneApplicationStateChangedEventHandle =
              null === (e = VRHTML) || void 0 === e
                ? void 0
                : e.RegisterForSceneApplicationStateChangedEvents(
                    this.onSceneApplicationStateChanged
                  )),
            this.onSceneApplicationStateChanged();
        }
        theresNoDestructor() {
          this.m_sceneApplicationStateChangedEventHandle &&
            (this.m_sceneApplicationStateChangedEventHandle.unregister(),
            (this.m_sceneApplicationStateChangedEventHandle = null));
        }
        register(e, t) {
          (this.m_mapCallbacks[e] = t),
            t(this.m_mapSelectedAppKeys[e] || this.runningAppKey);
        }
        unregister(e) {
          delete this.m_mapCallbacks[e];
        }
        setAppKey(e, t) {
          this.m_mapSelectedAppKeys[e] = t;
        }
        onSceneApplicationStateChanged() {
          var e, t;
          const n =
            null !=
            (t =
              null === (e = VRHTML) || void 0 === e
                ? void 0
                : e.VRApplications.GetSceneApplicationKey())
              ? t
              : null;
          n !== this.runningAppKey &&
            ((this.runningAppKey = n),
            (this.m_mapSelectedAppKeys = {}),
            Object.values(this.m_mapCallbacks).forEach((e) => {
              e(this.runningAppKey);
            }));
        }
      }
      Object(s.b)([c.m], L.prototype, "runningAppKey", void 0),
        Object(s.b)(
          [a.bind],
          L.prototype,
          "onSceneApplicationStateChanged",
          null
        );
      class V extends r.Component {
        constructor(e) {
          B || (B = new L()), super(e), (this.state = { currentApp: null });
        }
        componentDidMount() {
          B.register(this.props.stateKey, this.onSceneApplicationStateChanged);
        }
        componentWillUnmount() {
          B.unregister(this.props.stateKey);
        }
        onSceneApplicationStateChanged(e) {
          var t, n;
          const i = this.props.showCompositor
              ? "openvr.component.vrcompositor"
              : null,
            o =
              null != (n = null != (t = this.props.defaultAppKey) ? t : e)
                ? n
                : i;
          this.setCurrentApp(o);
        }
        setCurrentApp(e) {
          const t = u.d.apps && u.d.apps.find((t) => t.key == e);
          this.setState((e, n) => {
            var i, o;
            return (null === (i = e.currentApp) || void 0 === i
              ? void 0
              : i.key) === (null === (o = t) || void 0 === o ? void 0 : o.key)
              ? null
              : (this.props.onChange && this.props.onChange(t),
                { currentApp: t });
          });
        }
        makeAppChoiceList() {
          let e = [],
            t = " " + Object(l.c)("#Settings_PerApplication_DashboardSuffix");
          if (null != u.d.apps)
            for (let n of u.d.apps) {
              let i = !0;
              "openvr.component.vrcompositor" == n.key
                ? (i = !!this.props.showCompositor)
                : n.key == f.F
                ? (i = !!this.props.showSteam)
                : n.key == f.J || n.key == f.L
                ? (i = !!this.props.showSteamVR)
                : n.key.startsWith("system.generated")
                ? (i = !!this.props.showGenerated)
                : n.is_internal
                ? (i = !!this.props.showInternal)
                : n.is_dashboard_overlay && (i = !!this.props.showOverlays),
                (i || n.current_scene_process) &&
                  e.push({
                    value: n.key,
                    sLabel: n.name + (n.is_dashboard_overlay ? t : ""),
                  });
            }
          const n = (e) =>
              e.value == B.runningAppKey ||
              "openvr.component.vrcompositor" == e.value,
            i = e.filter(n),
            o = e.filter((e) => !n(e));
          return (
            i.sort((e, t) =>
              e.value == B.runningAppKey
                ? -1
                : t.value == B.runningAppKey
                ? 1
                : "openvr.component.vrcompositor" == e.value
                ? -1
                : "openvr.component.vrcompositor" == t.value
                ? 1
                : e.sLabel.localeCompare(t.sLabel)
            ),
            o.sort((e, t) => e.sLabel.localeCompare(t.sLabel)),
            i.length > 0 && o.length > 0
              ? [...i, _.b.Separator, ...o]
              : i.length > 0
              ? i
              : o
          );
        }
        onControllerDropdownChanged(e) {
          B.setAppKey(this.props.stateKey, e), this.setCurrentApp(e);
        }
        render() {
          const e = this.makeAppChoiceList(),
            t = this.state.currentApp ? this.state.currentApp.key : null;
          return r.createElement(T, {
            label: this.props.label,
            items: e,
            value: t,
            defaultLabel:
              this.props.defaultLabel ||
              Object(l.c)("#Settings_PerApplication_ChooseApplication"),
            onChange: this.onControllerDropdownChanged,
            fullWidth: !0,
          });
        }
      }
      Object(s.b)(
        [a.bind],
        V.prototype,
        "onSceneApplicationStateChanged",
        null
      ),
        Object(s.b)([a.bind], V.prototype, "onControllerDropdownChanged", null);
      const N = (e) => {
          let t = Object.assign({}, e),
            n = t.header;
          "string" == typeof n && (n = r.createElement("h1", null, n));
          let i = t.subheader;
          "string" == typeof i &&
            (i = r.createElement("div", { className: "Label" }, i));
          let o = t.footer;
          void 0 === o &&
            (o = r.createElement(F, {
              onDismissRequested: t.onDismissRequested,
            }));
          const s = t.allowableParentSelectors || [];
          return (
            p.eb.IsSceneGraphApp ||
              (t.allowableParentSelectors = [
                ...s,
                ".SettingsSidebarPageModalContainer",
              ]),
            r.createElement(
              g.a,
              Object.assign({}, t),
              n && r.createElement("div", { className: "Subsection Top" }, n),
              i &&
                r.createElement(
                  "div",
                  { className: "Subsection Top Subheader" },
                  i
                ),
              e.children &&
                r.createElement(
                  O.b,
                  {
                    scrollDirection: O.a.Vertical,
                    className: "Subsection Body",
                  },
                  t.children
                ),
              o && r.createElement("div", { className: "Subsection Bottom" }, o)
            )
          );
        },
        F = (e) => {
          let t = e.leftControls ? e.leftControls : [];
          e.showResetButton &&
            t.push(
              r.createElement(
                m.a,
                {
                  key: "reset",
                  className: "ButtonControl",
                  onClick: e.onResetRequested,
                },
                Object(l.c)("#Settings_ResetToDefault")
              )
            );
          let n = [
            r.createElement(
              m.a,
              {
                key: "close",
                className: "ButtonControl",
                onClick: e.onDismissRequested,
              },
              Object(l.c)("#Settings_General_Close")
            ),
          ];
          return r.createElement(
            "div",
            { className: "SettingsItem ButtonRow" },
            t,
            t.length > 0 &&
              n.length > 0 &&
              r.createElement("div", { className: "Spacer" }),
            n
          );
        };
      var G;
      !(function (e) {
        e[(e.PopOut = 0)] = "PopOut";
      })(G || (G = {}));
      const H = (e) => {
        let t = null;
        if (void 0 !== e.icon)
          switch (e.icon) {
            case G.PopOut:
              t = r.createElement(v.a, { className: "Icon" });
          }
        return r.createElement(
          m.a,
          Object.assign(
            {
              className: Object(b.a)("ButtonControl", ["WithIcon", null !== t]),
            },
            e
          ),
          r.createElement("span", null, e.children),
          t
        );
      };
    },
    "Vp/w": function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "a", function () {
          return l;
        });
      var i = n("q1tI"),
        o = n("i8i4"),
        s = n("hcOo"),
        r = n("/i/y");
      class a extends i.Component {
        constructor(e) {
          super(e),
            (this.m_elemPortalContainer = null),
            (this.m_elemPortal = null),
            (this.m_refAnchor = i.createRef()),
            (this.state = { bInDOM: !1 }),
            (this.m_elemPortal = document.createElement("div")),
            this.m_elemPortal.classList.add(a.ELEM_CLASS);
        }
        get anchorElement() {
          return this.m_refAnchor.current;
        }
        get portalContainer() {
          var e;
          return this.m_refAnchor.current
            ? (null === this.m_elemPortalContainer &&
                (this.m_elemPortalContainer = Object(s.c)(
                  [
                    "body",
                    "vsg-app",
                    "vsg-mountable",
                    ...((e = this.props.allowableParentSelectors),
                    null != e ? e : []),
                  ],
                  this.m_refAnchor.current
                )),
              this.m_elemPortalContainer)
            : null;
        }
        componentDidMount() {
          this.portalContainer.appendChild(this.m_elemPortal),
            this.setState({ bInDOM: !0 }, this.props.onPortalDidMount);
        }
        componentWillUnmount() {
          this.portalContainer.removeChild(this.m_elemPortal);
        }
        render() {
          if (!this.props.children) return null;
          return (
            delete Object.assign({}, this.props).allowableParentSelectors,
            i.createElement(
              i.Fragment,
              null,
              i.createElement("div", {
                className: "ParentPortalAnchor",
                ref: this.m_refAnchor,
              }),
              this.m_elemPortal &&
                this.state.bInDOM &&
                this.props.children &&
                o.createPortal(this.props.children, this.m_elemPortal)
            )
          );
        }
      }
      a.ELEM_CLASS = "v-parent-portal";
      class l extends i.Component {
        constructor(e) {
          var t;
          super(e),
            (this.m_refPanelAnchor = i.createRef()),
            (this.m_sPanelAnchorID =
              null != (t = e.panelAnchorID)
                ? t
                : Math.random().toString().substring(2));
        }
        get panelAnchor() {
          return this.m_refPanelAnchor.current;
        }
        render() {
          return i.createElement(
            r.Z,
            { ref: this.m_refPanelAnchor, latched: this.props.latched },
            i.createElement(r.lb, { id: this.m_sPanelAnchorID }),
            i.createElement(
              a,
              Object.assign({}, this.props),
              i.createElement(
                r.lb,
                { parent_id: this.m_sPanelAnchorID },
                this.props.children
              )
            )
          );
        }
      }
    },
    X3sx: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return o;
      }),
        n.d(t, "c", function () {
          return s;
        }),
        n.d(t, "a", function () {
          return _;
        });
      var i,
        o,
        s,
        r = n("mrSG"),
        a = n("q1tI"),
        l = n("7wIv"),
        c = n("2vnA"),
        d = n("okNM"),
        u = n("/i/y"),
        p = n("CzjV"),
        h = n("6YgL"),
        m = n("hcOo"),
        b = n("nAcY"),
        g = n("p9CI"),
        S = n("iHhG");
      !(function (e) {
        (e[(e.Value = 0)] = "Value"), (e[(e.Color = 1)] = "Color");
      })(o || (o = {})),
        (function (e) {
          (e[(e.Below = 0)] = "Below"), (e[(e.OnHandle = 1)] = "OnHandle");
        })(s || (s = {}));
      let _ = (i = class extends a.Component {
        constructor(e) {
          super(e),
            (this.m_sScrollSuppressedIdentifier = Math.round(
              1e6 * Math.random()
            ).toString()),
            (this.m_refSlider = a.createRef()),
            (this.m_refSliderDefaultHandle = a.createRef()),
            (this.m_nAnimationFrameCallback = 0),
            (this.m_dragStartTime = null),
            (this.m_setDetentsToIgnore = new Set()),
            (this.m_nCurrentNearestSnappableDetent = null),
            (this.m_nValueOffset = 0),
            (this.state = { m_bSliding: !1 });
        }
        get isSliding() {
          return this.state.m_bSliding;
        }
        get isVertical() {
          var e;
          return null != (e = this.props.vertical) && e;
        }
        componentDidMount() {
          window.document.addEventListener("mousemove", this.onWindowMouseMove),
            window.document.addEventListener("mouseup", this.onWindowMouseUp),
            this.setDragElapsedSecondsCSSProperty(0);
        }
        componentWillUnmount() {
          window.document.removeEventListener(
            "mousemove",
            this.onWindowMouseMove
          ),
            window.document.removeEventListener(
              "mouseup",
              this.onWindowMouseUp
            ),
            window.cancelAnimationFrame(this.m_nAnimationFrameCallback),
            b.b.Instance.unsuppressHaptics(this),
            g.b.unsuppressScrolling(this.m_sScrollSuppressedIdentifier);
        }
        get sliderHandleElement() {
          var e, t;
          return null !=
            (t =
              null === (e = this.props.customHandleComponentRef) || void 0 === e
                ? void 0
                : e.current)
            ? t
            : this.m_refSliderDefaultHandle.current;
        }
        onSliderMouseDown(e) {
          this.m_refSlider.current &&
            this.sliderHandleElement &&
            ((this.m_nValueOffset = 0),
            this.startSliding({ x: e.clientX, y: e.clientY }));
        }
        onWindowMouseMove(e) {
          if (
            !this.state.m_bSliding ||
            !this.m_refSlider.current ||
            !this.sliderHandleElement
          )
            return;
          const t = this.isVertical ? e.clientY : e.clientX;
          this.updateValueForMousePosition(t, !1);
        }
        onSliderMouseEnter(e) {
          var t, n;
          null === (n = (t = this.props).onMouseEnter) ||
            void 0 === n ||
            n.call(t, e),
            Object(u.i)() != u.H.Overlay ||
              this.state.m_bSliding ||
              b.b.Instance.triggerHaptic(b.a.ButtonEnter);
        }
        onSliderMouseLeave(e) {
          var t, n;
          null === (n = (t = this.props).onMouseLeave) ||
            void 0 === n ||
            n.call(t, e),
            Object(u.i)() != u.H.Overlay ||
              this.state.m_bSliding ||
              b.b.Instance.triggerHaptic(b.a.ButtonLeave);
        }
        getNormalizedValueForMousePosition(e) {
          const t = this.m_refSlider.current.getBoundingClientRect(),
            n = this.sliderHandleElement.getBoundingClientRect(),
            i = this.isVertical ? t.bottom : t.left,
            o = this.isVertical ? n.height : n.width,
            s = this.isVertical ? t.height : t.width;
          return ((this.isVertical ? i - e + i : e) - (i + o / 2)) / (s - o);
        }
        updateValueForMousePosition(e, t) {
          const n = this.normalizedValue;
          let o =
            this.getNormalizedValueForMousePosition(e) + this.m_nValueOffset;
          const s = this.getClosestSnappableDetent(o),
            r = this.normalizedDetents;
          for (let e = 0; e < r.length; e++) {
            const t = r[e];
            Math.abs(o - t) > i.DETENT_UNIGNORE_DISTANCE &&
              this.m_setDetentsToIgnore.delete(t);
          }
          t && s === n && this.m_setDetentsToIgnore.add(s),
            null === s || this.m_setDetentsToIgnore.has(s) || (o = s),
            this.m_nCurrentNearestSnappableDetent !== s &&
              ((this.m_dragStartTime = new Date()),
              null !== this.m_nCurrentNearestSnappableDetent &&
                this.m_setDetentsToIgnore.add(
                  this.m_nCurrentNearestSnappableDetent
                ),
              null === s ||
                this.m_setDetentsToIgnore.has(s) ||
                b.b.Instance.triggerHaptic(b.a.Snap)),
            (this.m_nCurrentNearestSnappableDetent = s),
            this.setNormalizedValue(o);
        }
        get isSnappedToDetent() {
          return (
            null !== this.m_nCurrentNearestSnappableDetent &&
            !this.m_setDetentsToIgnore.has(
              this.m_nCurrentNearestSnappableDetent
            )
          );
        }
        onWindowMouseUp(e) {
          this.stopSliding();
        }
        startExternalSliding(e) {
          if (!this.m_refSlider.current || !this.sliderHandleElement) return;
          const t = this.isVertical ? e.y : e.x;
          (this.m_nValueOffset =
            -this.getNormalizedValueForMousePosition(t) + this.normalizedValue),
            this.startSliding(e);
        }
        stopExternalSliding() {
          this.stopSliding();
        }
        startSliding(e) {
          var t, n, i;
          const o = this.isVertical ? e.y : e.x;
          this.setState({ m_bSliding: !0 }),
            this.updateValueForMousePosition(o, !0),
            this.setDragElapsedSecondsCSSProperty(0),
            b.b.Instance.suppressHapticsExcept(this, [
              b.a.Sliding,
              b.a.SlidingEdge,
              b.a.Snap,
            ]),
            (this.m_dragStartTime = new Date()),
            (this.m_nAnimationFrameCallback = window.requestAnimationFrame(
              this.onDragAnimationFrame
            )),
            g.b.suppressScrolling(this.m_sScrollSuppressedIdentifier),
            p.b.Instance.playSound(
              null != (t = this.props.interactionStartSoundEffect)
                ? t
                : p.a.Grab
            ),
            null === (i = (n = this.props).onInteractionStart) ||
              void 0 === i ||
              i.call(n);
        }
        stopSliding() {
          var e, t, n, i, o;
          this.state.m_bSliding &&
            (this.setState({ m_bSliding: !1 }),
            window.cancelAnimationFrame(this.m_nAnimationFrameCallback),
            this.setDragElapsedSecondsCSSProperty(0),
            this.m_setDetentsToIgnore.clear(),
            b.b.Instance.unsuppressHaptics(this),
            null === (t = (e = this.props).onInteractionEnd) ||
              void 0 === t ||
              t.call(e),
            null === (i = (n = this.props).onFinalChange) ||
              void 0 === i ||
              i.call(n, this.normalizedToExternal(this.normalizedValue)),
            h.b.temporarilySuppressSoundEffect(),
            p.b.Instance.playSound(
              null != (o = this.props.interactionEndSoundEffect)
                ? o
                : p.a.GrabRelease
            ),
            g.b.unsuppressScrolling(this.m_sScrollSuppressedIdentifier));
        }
        getClosestSnappableDetent(e) {
          const t = this.normalizedDetents;
          t.sort((t, n) => (Math.abs(e - t) > Math.abs(e - n) ? 1 : -1));
          for (let n = 0; n < t.length; n++) {
            const o = t[n];
            if (Math.abs(e - o) < i.DETENT_SNAP_DISTANCE) return o;
          }
          return null;
        }
        get styleVariant() {
          return void 0 === this.props.styleVariant
            ? o.Value
            : this.props.styleVariant;
        }
        get valueStyleVariant() {
          return void 0 === this.props.valueStyleVariant
            ? s.Below
            : this.props.valueStyleVariant;
        }
        get externalRangeMin() {
          return void 0 === this.props.min ? 0 : this.props.min;
        }
        get externalRangeMax() {
          return void 0 === this.props.max ? 1 : this.props.max;
        }
        get normalizedStep() {
          if (void 0 !== this.props.step)
            return (
              this.props.step / (this.externalRangeMax - this.externalRangeMin)
            );
        }
        get exponent() {
          return void 0 === this.props.exponent ? 1 : this.props.exponent;
        }
        get normalizedDetents() {
          let e = this.props.detents || [];
          if (this.props.showDetentsForSnaps && this.props.step)
            for (
              let t = this.externalRangeMin;
              t <= this.externalRangeMax;
              t += this.props.step
            )
              e.push(t);
          return e.map(this.externalToNormalized);
        }
        externalToNormalized(e) {
          return e === this.props.specialMaxValue
            ? 1
            : e === this.props.specialMinValue
            ? 0
            : Math.pow(
                (e - this.externalRangeMin) /
                  (this.externalRangeMax - this.externalRangeMin),
                1 / this.exponent
              );
        }
        normalizedToExternal(e) {
          return 0 == e && void 0 !== this.props.specialMinValue
            ? this.props.specialMinValue
            : 1 == e && void 0 !== this.props.specialMaxValue
            ? this.props.specialMaxValue
            : this.externalRangeMin +
              Math.pow(e, this.exponent) *
                (this.externalRangeMax - this.externalRangeMin);
        }
        get normalizedValue() {
          return this.externalToNormalized(this.externalValue);
        }
        get externalValue() {
          return this.props.value;
        }
        get shouldTriggerHapticOnSnap() {
          const e = this.normalizedStep;
          return e > 0 && e >= 1 / 40;
        }
        setNormalizedValue(e) {
          e < 0 && (e = 0), e > 1 && (e = 1);
          let t = !1;
          const n = this.normalizedStep,
            i = this.normalizedValue;
          if (n && ((e = Math.round(e / n) * n), Math.abs(e - i) > 1e-4)) {
            const i = 1 % n,
              o = Math.abs(i - n) < 1e-5 ? 1 : 1 - (1 % n);
            (0 == e || Math.abs(e - o) < 0.001) &&
              !t &&
              (b.b.Instance.triggerHaptic(b.a.SlidingEdge), (t = !0)),
              !this.shouldTriggerHapticOnSnap ||
                this.isSnappedToDetent ||
                Object(u.i)() != u.H.Overlay ||
                t ||
                (b.b.Instance.triggerHaptic(b.a.Snap), (t = !0));
          }
          if (
            !this.shouldTriggerHapticOnSnap &&
            i >= 0 &&
            i <= 1 &&
            !this.isSnappedToDetent
          ) {
            (0 == e || 1 == e) &&
              i > 0 &&
              i < 1 &&
              !t &&
              (b.b.Instance.triggerHaptic(b.a.SlidingEdge), (t = !0));
            const n = 40;
            Math.floor(i * n) == Math.floor(e * n) ||
              t ||
              (b.b.Instance.triggerHaptic(b.a.Sliding), (t = !0));
          }
          const o = this.normalizedToExternal(e);
          this.props.onChange && this.props.onChange(o);
        }
        setDragElapsedSecondsCSSProperty(e) {
          this.m_refSlider.current &&
            this.m_refSlider.current.style.setProperty(
              "--drag-elapsed-seconds",
              e.toString()
            );
        }
        onDragAnimationFrame() {
          let e = (new Date().getTime() - this.m_dragStartTime.getTime()) / 1e3;
          this.normalizedStep > 0.1 && (e = 0),
            this.setDragElapsedSecondsCSSProperty(e),
            (this.m_nAnimationFrameCallback = window.requestAnimationFrame(
              this.onDragAnimationFrame
            ));
        }
        render() {
          var e;
          const t =
              void 0 !== this.props.renderValue
                ? this.props.renderValue(this.externalValue)
                : null,
            n = this.styleVariant == o.Value && t,
            i = n && this.valueStyleVariant == s.OnHandle,
            r = n && this.valueStyleVariant == s.Below,
            l = this.styleVariant == o.Value && !i,
            c = this.normalizedValue,
            d = i && t.length >= 4,
            u =
              null != (e = this.props.customHandleComponent)
                ? e
                : a.createElement(
                    "div",
                    { className: "HandleContainer" },
                    a.createElement(
                      "div",
                      {
                        className: Object(m.a)("Handle", ["SmallerText", d]),
                        ref: this.m_refSliderDefaultHandle,
                        style: {
                          backgroundColor:
                            this.props.styleVariant == o.Color ? t : null,
                        },
                      },
                      l &&
                        a.createElement("div", { className: "HandleCircle" }),
                      i &&
                        a.createElement("div", { className: "RangeLabel" }, t)
                    )
                  );
          return a.createElement(
            a.Fragment,
            null,
            this.state.m_bSliding &&
              a.createElement(S.a, { element: this.m_refSlider.current }),
            a.createElement(
              "div",
              {
                className: Object(m.a)(
                  "SliderControl",
                  ["Vertical", this.isVertical],
                  ["Color", this.styleVariant == o.Color],
                  ["Sliding", this.state.m_bSliding],
                  ["Disabled", !1 === this.props.enabled],
                  ["ValueOnHandle", i],
                  this.props.additionalClassName
                ),
                style: {
                  "--slider-value": c,
                  "--slider-color":
                    this.props.styleVariant == o.Color
                      ? this.props.sliderColor
                      : null,
                },
                ref: this.m_refSlider,
                onMouseDown: this.onSliderMouseDown,
                onMouseEnter: this.onSliderMouseEnter,
                onMouseLeave: this.onSliderMouseLeave,
              },
              a.createElement(
                "div",
                { className: "Track" },
                this.normalizedDetents.map((e) =>
                  a.createElement("div", {
                    key: "detent-" + e,
                    className: "Detent",
                    style: { "--detent-value": e.toString() },
                  })
                )
              ),
              u
            ),
            r && a.createElement("div", { className: "RangeLabel" }, t)
          );
        }
      });
      (_.DETENT_SNAP_DISTANCE = 0.05),
        (_.DETENT_UNIGNORE_DISTANCE = 0.15),
        Object(r.b)([l.bind], _.prototype, "onSliderMouseDown", null),
        Object(r.b)([l.bind], _.prototype, "onWindowMouseMove", null),
        Object(r.b)([l.bind], _.prototype, "onSliderMouseEnter", null),
        Object(r.b)([l.bind], _.prototype, "onSliderMouseLeave", null),
        Object(r.b)([c.f], _.prototype, "isSnappedToDetent", null),
        Object(r.b)([l.bind], _.prototype, "onWindowMouseUp", null),
        Object(r.b)([c.f], _.prototype, "styleVariant", null),
        Object(r.b)([c.f], _.prototype, "valueStyleVariant", null),
        Object(r.b)([c.f], _.prototype, "externalRangeMin", null),
        Object(r.b)([c.f], _.prototype, "externalRangeMax", null),
        Object(r.b)([c.f], _.prototype, "normalizedStep", null),
        Object(r.b)([c.f], _.prototype, "exponent", null),
        Object(r.b)([c.f], _.prototype, "normalizedDetents", null),
        Object(r.b)([l.bind], _.prototype, "externalToNormalized", null),
        Object(r.b)([l.bind], _.prototype, "normalizedToExternal", null),
        Object(r.b)([c.f], _.prototype, "normalizedValue", null),
        Object(r.b)([c.f], _.prototype, "externalValue", null),
        Object(r.b)([c.f], _.prototype, "shouldTriggerHapticOnSnap", null),
        Object(r.b)([l.bind], _.prototype, "onDragAnimationFrame", null),
        (_ = i = Object(r.b)([d.a], _));
    },
    Z0gP: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      });
      var i = n("mrSG"),
        o = n("7wIv"),
        s = n("vDqi"),
        r = n.n(s),
        a = n("2vnA");
      class l {
        constructor() {
          (this.m_wsWebSocketToServer = void 0),
            (this.IdentifyController = function (e) {
              return e
                ? new Promise(function (t, n) {
                    r.a
                      .get("/identify_controller.action?serial=" + e)
                      .then((e) => {
                        t();
                      })
                      .catch((e) => {
                        n(e);
                      });
                  })
                : null;
            }),
            (this.GetUSBDeviceList = function () {
              return new Promise(function (e, t) {
                r.a
                  .get("/usb_topology.action")
                  .then((t) => {
                    e(t.data);
                  })
                  .catch((e) => {
                    t(e);
                  });
              });
            }),
            (this.ToggleRoomOverview = function (e) {
              return new Promise(function (t, n) {
                r.a
                  .get(
                    "/toggle_room_overview_feed.action?enabled=" +
                      (e ? "1" : "0")
                  )
                  .then((e) => {
                    t();
                  })
                  .catch((e) => {
                    n(e);
                  });
              });
            });
        }
        OpenWebSocketToHost() {
          return new Promise((e, t) => {
            console.log("Connecting vrsystem..."),
              (this.m_wsWebSocketToServer = new WebSocket(
                "ws://" + window.location.host
              )),
              this.m_wsWebSocketToServer.addEventListener("open", (t) => {
                this.OnWebSocketOpen(t), e();
              }),
              this.m_wsWebSocketToServer.addEventListener(
                "message",
                this.OnWebSocketMessage
              ),
              this.m_wsWebSocketToServer.addEventListener(
                "close",
                this.OnWebSocketClose
              );
          });
        }
        Init() {
          return Object(i.a)(this, void 0, void 0, function* () {
            (this.connected = !1),
              (this.framerate = []),
              (this.status = {
                jsonid: "",
                startup_info: "",
                status_string: "",
                is_main: !1,
                is_perforce: !1,
                hostname: "",
                states: [],
              }),
              (this.roomoverview = {
                jsonid: "",
                collision: [],
                playarea: [],
                devices: [],
                bounds_visible: !1,
                compositor_available: !1,
              }),
              yield this.OpenWebSocketToHost();
          });
        }
        OnWebSocketOpen(e) {
          (this.connected = !0),
            this.WebSocketSend("websocket_open"),
            window.addEventListener("beforeunload", () => {
              this.WebSocketSend("websocket_close");
            });
        }
        OnWebSocketClose(e) {
          console.log("Lost connection to host..."),
            (this.connected = !1),
            this.OpenWebSocketToHost();
        }
        WebSocketSend(e) {
          null != this.m_wsWebSocketToServer &&
            1 == this.m_wsWebSocketToServer.readyState &&
            this.m_wsWebSocketToServer.send(e);
        }
        OnWebSocketMessage(e) {
          let t = JSON.parse(e.data);
          switch (t.jsonid) {
            case "vr_system_status":
              this.OnSystemStatusMessage(t);
              break;
            case "vr_framerate":
              this.OnFramerateMessage(t);
              break;
            case "vr_notifications":
              this.OnNotificationsMessage(t);
              break;
            case "vr_room_overview":
              this.OnRoomOverviewMessage(t);
              break;
            default:
              t.jsonid
                ? console.log("Received unhandled event: " + t.jsonid)
                : console.log("Received unknown message: ", t);
          }
        }
        OnSystemStatusMessage(e) {
          this.status = e;
        }
        OnFramerateMessage(e) {
          for (this.framerate.unshift(e); this.framerate.length > 60; )
            this.framerate.pop();
        }
        OnNotificationsMessage(e) {
          let t = e.notifications.map((e, t) => ({
            title: e.sTitle,
            description: e.sDescription,
            timestamp: e.sTimeStamp,
          }));
          this.notifications = t;
        }
        OnRoomOverviewMessage(e) {
          this.roomoverview = e;
        }
        LaunchApplication(e) {
          return new Promise(function (t, n) {
            r.a
              .get("/steamvr_launch_application.action?param1=" + e)
              .then((e) => {
                t();
              })
              .catch((e) => {
                n(e);
              });
          });
        }
        TEMP_RegisterPollingWebsocketMessage(e, t) {
          setInterval(() => {
            r.a
              .get(e)
              .then((e) => {
                this.OnWebSocketMessage({ data: JSON.stringify(e.data) });
              })
              .catch((e) => {});
          }, t);
        }
      }
      Object(i.b)([a.m], l.prototype, "status", void 0),
        Object(i.b)([a.m], l.prototype, "framerate", void 0),
        Object(i.b)([a.m], l.prototype, "notifications", void 0),
        Object(i.b)([a.m], l.prototype, "roomoverview", void 0),
        Object(i.b)([a.m], l.prototype, "connected", void 0),
        Object(i.b)([o.bind], l.prototype, "OpenWebSocketToHost", null),
        Object(i.b)([o.bind], l.prototype, "OnWebSocketOpen", null),
        Object(i.b)([o.bind], l.prototype, "OnWebSocketClose", null),
        Object(i.b)([o.bind], l.prototype, "WebSocketSend", null),
        Object(i.b)([o.bind], l.prototype, "OnWebSocketMessage", null),
        Object(i.b)(
          [o.bind],
          l.prototype,
          "TEMP_RegisterPollingWebsocketMessage",
          null
        );
      const c = new l();
      window.VRSystemState = c;
    },
    dGfu: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var i = n("mrSG"),
        o = n("7wIv"),
        s = n("2vnA");
      class r {
        constructor() {
          (this.m_wsWebSocketToServer = void 0),
            (this.vecMessageBuffer = s.m.array());
        }
        OpenWebSocketToHost() {
          return new Promise((e, t) => {
            console.log("Connecting vconsole..."),
              (this.m_wsWebSocketToServer = new WebSocket(
                "ws://" + window.location.host
              )),
              this.m_wsWebSocketToServer.addEventListener("open", (t) => {
                this.OnWebSocketOpen(t), e();
              }),
              this.m_wsWebSocketToServer.addEventListener("message", (e) => {
                this.OnWebSocketMessage(e);
              }),
              this.m_wsWebSocketToServer.addEventListener("close", (e) => {
                this.OnWebSocketClose(e);
              });
          });
        }
        Init() {
          return Object(i.a)(this, void 0, void 0, function* () {
            this.connected ||
              ((this.vecMessages = []),
              Object(s.e)(
                () => {
                  this.vecMessages = this.vecMessages
                    .concat(
                      this.vecMessageBuffer.splice(
                        0,
                        this.vecMessageBuffer.length
                      )
                    )
                    .map((e, t) => ({ item: e, index: t }))
                    .sort(
                      (e, t) =>
                        e.item.nTimestamp - t.item.nTimestamp ||
                        e.index - t.index
                    )
                    .map(({ item: e }) => e);
                },
                { delay: 300 }
              ),
              yield this.OpenWebSocketToHost());
          });
        }
        OnWebSocketOpen(e) {
          (this.connected = !0),
            this.WebSocketSend("console_open"),
            window.addEventListener("beforeunload", () => {
              this.WebSocketSend("console_close");
            });
        }
        OnWebSocketClose(e) {
          console.log("Lost connection to host..."),
            (this.connected = !1),
            this.OpenWebSocketToHost();
        }
        WebSocketSend(e) {
          null != this.m_wsWebSocketToServer &&
            1 == this.m_wsWebSocketToServer.readyState &&
            this.m_wsWebSocketToServer.send(e);
        }
        OnWebSocketMessage(e) {
          let t = JSON.parse(e.data);
          this.OnConsoleMessage(t);
        }
        OnConsoleMessage(e) {
          let t = e.sMessage.indexOf("-");
          (e.sTimestamp = e.sMessage.substr(0, t)),
            (e.sMessage = e.sMessage.substr(t + 1)),
            this.vecMessageBuffer.push(e);
        }
      }
      Object(i.b)([s.m], r.prototype, "connected", void 0),
        Object(i.b)([s.m], r.prototype, "vecMessages", void 0),
        Object(i.b)([o.bind], r.prototype, "OpenWebSocketToHost", null),
        Object(i.b)([o.bind], r.prototype, "OnWebSocketOpen", null),
        Object(i.b)([o.bind], r.prototype, "OnWebSocketClose", null),
        Object(i.b)([o.bind], r.prototype, "WebSocketSend", null),
        Object(i.b)([o.bind], r.prototype, "OnWebSocketMessage", null);
      const a = new r();
      window.VRConsoleState = a;
    },
    dO2U: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      var i = n("mrSG"),
        o = n("7wIv"),
        s = n("vDqi"),
        r = n.n(s),
        a = n("2vnA");
      class l {
        constructor(e) {
          (this.m_communityData = void 0),
            (this.m_bLoadingData = !1),
            (this.m_sSteamID = void 0),
            (this.m_dateLastUpdate = void 0),
            (this.m_sSteamID = e),
            e.length > 0 && this.EnsureCommunityDataLoaded();
        }
        get community_data_ready() {
          return void 0 !== this.m_communityData;
        }
        get avatar_url() {
          return this.m_communityData && this.m_communityData.avatar_url;
        }
        get persona_name() {
          return this.m_communityData && this.m_communityData.persona_name;
        }
        get player_level() {
          return this.m_communityData && this.m_communityData.level;
        }
        get player_level_class() {
          return this.m_communityData && this.m_communityData.level_class;
        }
        get player_badge() {
          return this.m_communityData && this.m_communityData.favorite_badge;
        }
        get player_in_game() {
          return this.m_communityData && this.m_communityData.in_game;
        }
        EnsureCommunityDataLoaded() {
          if (void 0 === this.m_communityData && !this.m_bLoadingData) {
            this.m_bLoadingData = !0;
            let e = "https://steamcommunity.com/";
            r.a
              .get(e + "miniprofile/s" + this.m_sSteamID + "/json")
              .then((e) => {
                let t = e.data;
                t &&
                  t.avatar_url &&
                  ((this.m_communityData = t),
                  (this.m_dateLastUpdate = new Date())),
                  (this.m_bLoadingData = !1);
              })
              .catch((e) => {
                console.log(e), (this.m_bLoadingData = !1);
              });
          }
        }
      }
      Object(i.b)([a.m], l.prototype, "m_communityData", void 0),
        Object(i.b)([o.bind], l.prototype, "EnsureCommunityDataLoaded", null);
      class c {
        constructor() {
          this.m_SteamCommunityUsers = a.m.map();
        }
        GetUserInformation(e) {
          return (
            this.m_SteamCommunityUsers.has(e) || this.RequestUserInformation(e),
            this.m_SteamCommunityUsers.get(e)
          );
        }
        RequestUserInformation(e) {
          this.m_SteamCommunityUsers.hasOwnProperty(e) ||
            this.m_SteamCommunityUsers.set(e, new l(e));
        }
      }
      Object(i.b)([a.m], c.prototype, "m_SteamCommunityUsers", void 0),
        Object(i.b)([o.bind], c.prototype, "GetUserInformation", null),
        Object(i.b)([o.bind], c.prototype, "RequestUserInformation", null);
      const d = new c();
      window.steamcommunity = d;
    },
    hcOo: function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return d;
      }),
        n.d(t, "a", function () {
          return u;
        }),
        n.d(t, "c", function () {
          return p;
        }),
        n.d(t, "e", function () {
          return h;
        }),
        n.d(t, "b", function () {
          return m;
        });
      var i = n("mrSG"),
        o = (n("q1tI"), n("7wIv")),
        s = n.n(o),
        r = n("2vnA"),
        a = n("Q+Z6"),
        l = n("7uy8"),
        c = n("/i/y");
      function d(e) {
        let t = window.location.search.substring(1).split("&");
        for (let n = 0; n < t.length; n++) {
          let i = t[n].split("=");
          if (decodeURIComponent(i[0]).toUpperCase() == e.toUpperCase())
            return decodeURIComponent(i[1]);
        }
        return "";
      }
      function u(...e) {
        return e
          .filter((e) => null != e && ("string" == typeof e || e[1]))
          .map((e) => ("string" == typeof e ? e : e[0]))
          .join(" ");
      }
      function p(e, t) {
        let n = t;
        for (; n.parentElement && !e.some((e) => n.matches(e)); )
          n = n.parentElement;
        return n;
      }
      class h {
        constructor() {
          (this.onScroll = null),
            (this.onScrollStop = null),
            (this.m_elem = null),
            (this.m_rScrollableParents = []),
            (this.m_bScrolling = !1),
            (this.m_scrollStopTimeoutHandle = 0);
        }
        ref(e) {
          this.m_elem && this.cleanup(),
            (this.m_elem = e),
            this.updateScrollableParents();
        }
        get isScrolling() {
          return this.m_bScrolling;
        }
        updateScrollableParents() {
          for (let e of this.m_rScrollableParents)
            e.removeEventListener("scroll", this.onParentScroll);
          this.m_rScrollableParents = (function (e) {
            let t = [];
            if (!e) return t;
            let n = e.parentElement;
            for (; n; ) {
              const e = n.scrollWidth > n.clientWidth,
                i = n.scrollHeight > n.clientHeight;
              (e || i) && t.push(n), (n = n.parentElement);
            }
            return t;
          })(this.m_elem);
          for (let e of this.m_rScrollableParents)
            e.addEventListener("scroll", this.onParentScroll);
        }
        cleanup() {
          for (let e of this.m_rScrollableParents)
            e.removeEventListener("scroll", this.onParentScroll);
          (this.m_rScrollableParents = []),
            (this.m_elem = null),
            this.clearScrollStopTimeout();
        }
        onParentScroll() {
          var e;
          this.clearScrollStopTimeout(),
            (this.m_bScrolling = !0),
            (this.m_scrollStopTimeoutHandle = setTimeout(
              this.onScrollStopTimeout,
              50
            )),
            null === (e = this.onScroll) || void 0 === e || e.call(this);
        }
        clearScrollStopTimeout() {
          clearTimeout(this.m_scrollStopTimeoutHandle),
            (this.m_scrollStopTimeoutHandle = 0);
        }
        onScrollStopTimeout() {
          var e;
          this.m_bScrolling &&
            (null === (e = this.onScrollStop) || void 0 === e || e.call(this)),
            (this.m_bScrolling = !1);
        }
      }
      Object(i.b)([r.m], h.prototype, "m_bScrolling", void 0),
        Object(i.b)([s.a], h.prototype, "ref", null),
        Object(i.b)([r.f], h.prototype, "isScrolling", null),
        Object(i.b)([s.a], h.prototype, "onParentScroll", null),
        Object(i.b)([s.a], h.prototype, "onScrollStopTimeout", null);
      class m {
        constructor() {
          (this.m_settingsSchemaPromiseCancel = null),
            (this.m_autorunDisposer = null),
            this.start();
        }
        start() {
          return Object(i.a)(this, void 0, void 0, function* () {
            const [e, t] = (function (e) {
              let t = !1;
              return [
                new Promise((n, i) => {
                  e.then((e) => (t ? i({ canceled: !0 }) : n(e))).catch((e) =>
                    i(t ? { canceled: !0 } : e)
                  );
                }),
                () => (t = !0),
              ];
            })(a.d.AwaitInitialSettingsSchema());
            (this.m_settingsSchemaPromiseCancel = t),
              yield e,
              (this.m_autorunDisposer = Object(r.e)(this.updateFidelity));
          });
        }
        updateFidelity() {
          var e, t, n;
          let i = null != (e = a.d.settings.get(l.B)) ? e : c.q.Auto;
          i == c.q.Auto &&
            (i =
              null !=
              (n =
                null === (t = VRHTML) || void 0 === t
                  ? void 0
                  : t.GetRecommendedOverlayRenderQuality())
                ? n
                : c.q.High);
          Object(c.i)() == c.H.Overlay && i != c.q.High
            ? document.documentElement.classList.add(m.AnimationsDisabledClass)
            : document.documentElement.classList.remove(
                m.AnimationsDisabledClass
              );
        }
        cleanup() {
          var e, t;
          null === (e = this.m_settingsSchemaPromiseCancel) ||
            void 0 === e ||
            e.call(this),
            (this.m_settingsSchemaPromiseCancel = null),
            null === (t = this.m_autorunDisposer) ||
              void 0 === t ||
              t.call(this),
            (this.m_autorunDisposer = null),
            document.documentElement.classList.remove(
              m.AnimationsDisabledClass
            );
        }
      }
      (m.AnimationsDisabledClass = "NoAnimations"),
        Object(i.b)([s.a], m.prototype, "updateFidelity", null);
    },
    iHhG: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var i = n("q1tI"),
        o = n("i8i4");
      const s = (e) =>
        i.createElement("div", {
          style: {
            position: "fixed",
            left: e.x,
            top: e.y,
            width: e.width,
            height: e.height,
            zIndex: 90019001,
          },
        });
      class r extends i.Component {
        render() {
          const e = document.body.getBoundingClientRect();
          let t = null;
          if (this.props.element) {
            const n = this.props.element.getBoundingClientRect();
            t = i.createElement(
              i.Fragment,
              null,
              i.createElement(s, { x: 0, y: 0, width: e.width, height: n.y }),
              i.createElement(s, {
                x: 0,
                y: n.y + n.height,
                width: e.width,
                height: e.height - n.height - n.y,
              }),
              i.createElement(s, {
                x: 0,
                y: n.y,
                width: n.x,
                height: n.height,
              }),
              i.createElement(s, {
                x: n.x + n.width,
                y: n.y,
                width: e.width - n.width - n.x,
                height: n.height,
              })
            );
          } else
            t = i.createElement(
              i.Fragment,
              null,
              i.createElement(s, {
                x: 0,
                y: 0,
                width: e.width,
                height: e.height,
              })
            );
          return o.createPortal(t, document.body);
        }
      }
    },
    lbBr: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      var i,
        o = n("mrSG"),
        s = n("q1tI"),
        r = n("hcOo"),
        a = n("okNM"),
        l = n("/CXA"),
        c = n("Vp/w");
      let d = (i = class extends s.Component {
        constructor(e) {
          super(e),
            (this.m_refParentPortal = s.createRef()),
            (this.state = {
              elemBoundingParent: window.document.body,
              bInDOM: !1,
            });
        }
        componentDidMount() {
          var e, t;
          this.setState({
            elemBoundingParent: Object(r.c)(
              [
                "body",
                "[vsg-type=panel]",
                ...((e = this.props.allowableParentSelectors),
                null != e ? e : []),
              ],
              null === (t = this.m_refParentPortal.current) || void 0 === t
                ? void 0
                : t.anchorElement
            ),
            bInDOM: !0,
          });
        }
        render() {
          var e;
          const t = this.state.elemBoundingParent.getBoundingClientRect();
          let n = Object.assign({}, this.props);
          return (
            delete n.onDismissRequested,
            delete n.backdropClassName,
            delete n.allowableParentSelectors,
            s.createElement(
              c.b,
              {
                ref: this.m_refParentPortal,
                allowableParentSelectors: [
                  "body",
                  "vsg-app",
                  "vsg-mountable",
                  "[vsg-type=panel]",
                  ...((e = this.props.allowableParentSelectors),
                  null != e ? e : []),
                ],
              },
              s.createElement(
                l.b,
                Object.assign({}, n, {
                  shouldDismissOnClickAnywhere: !1,
                  shouldDismissOnClickInViewStack: !0,
                  fadesViewsBelow: !0,
                  onDismissRequested: this.props.onDismissRequested,
                  className: Object(r.a)("Modal", this.props.className),
                  style: {
                    maxWidth: t.width - 2 * i.MODAL_BOUNDS_MARGIN,
                    maxHeight: t.height - 2 * i.MODAL_BOUNDS_MARGIN,
                  },
                }),
                this.state.bInDOM && this.props.children
              )
            )
          );
        }
      });
      (d.MODAL_BOUNDS_MARGIN = 10), (d = i = Object(o.b)([a.a], d));
    },
    nAcY: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "b", function () {
          return a;
        });
      var i,
        o = n("/i/y");
      !(function (e) {
        (e[(e.ButtonEnter = 0)] = "ButtonEnter"),
          (e[(e.ButtonLeave = 1)] = "ButtonLeave"),
          (e[(e.Snap = 2)] = "Snap"),
          (e[(e.Sliding = 3)] = "Sliding"),
          (e[(e.SlidingEdge = 4)] = "SlidingEdge");
      })(i || (i = {}));
      const s = Object.values(i).filter((e) => "number" == typeof e);
      function r(e, t) {
        return new Set([...e, ...t]);
      }
      class a {
        constructor() {
          this.m_mapSuppressedHaptics = new Map();
        }
        static get Instance() {
          return a.s_Instance || (a.s_Instance = new a()), a.s_Instance;
        }
        suppressHaptics(e, t) {
          const n = new Set(t);
          this.m_mapSuppressedHaptics.has(e)
            ? this.m_mapSuppressedHaptics.set(
                e,
                r(this.m_mapSuppressedHaptics.get(e), n)
              )
            : this.m_mapSuppressedHaptics.set(e, n);
        }
        suppressHapticsExcept(e, t) {
          const n = new Set(t),
            i = new Set(s.filter((e) => !n.has(e)));
          this.m_mapSuppressedHaptics.has(e)
            ? this.m_mapSuppressedHaptics.set(
                e,
                r(this.m_mapSuppressedHaptics.get(e), i)
              )
            : this.m_mapSuppressedHaptics.set(e, i);
        }
        unsuppressHaptics(e, t) {
          const n = new Set(t);
          var i, o;
          void 0 === t
            ? this.m_mapSuppressedHaptics.delete(e)
            : this.m_mapSuppressedHaptics.has(e) ||
              this.m_mapSuppressedHaptics.set(
                e,
                ((i = this.m_mapSuppressedHaptics.get(e)),
                (o = n),
                new Set([...i].filter((e) => !o.has(e))))
              );
        }
        isHapticSuppressed(e) {
          return Array.from(this.m_mapSuppressedHaptics.values()).some((t) =>
            t.has(e)
          );
        }
        triggerHaptic(e) {
          var t, n;
          if (Object(o.i)() != o.H.Overlay || this.isHapticSuppressed(e))
            return;
          if (e == i.ButtonLeave) return;
          let s = 0,
            r = 0,
            a = 0;
          switch (e) {
            case i.ButtonEnter:
              (s = 0), (r = 1), (a = 0.16);
              break;
            case i.Snap:
              (s = 0), (r = 1), (a = 0.2);
              break;
            case i.Sliding:
              (s = 0), (r = 1), (a = 0.08);
              break;
            case i.SlidingEdge:
              (s = 0), (r = 1), (a = 1.8);
          }
          "Oculus Rift CV1" ==
            (null === (t = VRHTML) || void 0 === t
              ? void 0
              : t.VRProperties.GetStringProperty(
                  "/user/head",
                  o.y.ModelNumber_String
                )) && (a *= 1.8),
            a > 0 &&
              (null === (n = VRHTML) ||
                void 0 === n ||
                n.VROverlay.TriggerLaserMouseHapticVibration(
                  VRHTML.VROverlay.ThisOverlayHandle(),
                  s,
                  r,
                  a
                ));
        }
      }
      a.s_Instance = null;
    },
    nsy5: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      var i,
        o,
        s = n("mrSG"),
        r = n("q1tI"),
        a = n("hcOo"),
        l = n("7wIv"),
        c = n.n(l);
      !(function (e) {
        e[(e.Fade = 0)] = "Fade";
      })(i || (i = {})),
        (function (e) {
          (e[(e.Hidden = 0)] = "Hidden"),
            (e[(e.Showing = 1)] = "Showing"),
            (e[(e.Shown = 2)] = "Shown"),
            (e[(e.Hiding = 3)] = "Hiding");
        })(o || (o = {}));
      class d extends r.Component {
        constructor(e) {
          super(e),
            (this.m_nNextStateTimeoutHandle = 0),
            (this.state = { eAnimationState: e.visible ? o.Shown : o.Hidden });
        }
        componentDidMount() {
          this.emitStateCallback();
        }
        componentWillUnmount() {
          this.cancelTimeout();
        }
        cancelTimeout() {
          clearTimeout(this.m_nNextStateTimeoutHandle);
        }
        emitStateCallback() {
          var e, t, n, i, s, r, a, l;
          switch (this.state.eAnimationState) {
            case o.Showing:
              null === (t = (e = this.props).onStartShowing) ||
                void 0 === t ||
                t.call(e);
              break;
            case o.Shown:
              null === (i = (n = this.props).onShown) ||
                void 0 === i ||
                i.call(n);
              break;
            case o.Hiding:
              null === (r = (s = this.props).onStartHiding) ||
                void 0 === r ||
                r.call(s);
              break;
            case o.Hidden:
              null === (l = (a = this.props).onHidden) ||
                void 0 === l ||
                l.call(a);
          }
        }
        componentDidUpdate(e, t) {
          this.state.eAnimationState != t.eAnimationState &&
            this.emitStateCallback(),
            this.props.visible != e.visible &&
              (this.cancelTimeout(),
              (this.m_nNextStateTimeoutHandle = setTimeout(
                this.finishAnimation,
                1e3 * this.props.duration
              )),
              this.setState({
                eAnimationState: this.props.visible ? o.Showing : o.Hiding,
              }));
        }
        static getDerivedStateFromProps(e, t) {
          return {};
        }
        finishAnimation() {
          this.setState((e) => {
            switch (e.eAnimationState) {
              case o.Showing:
                return { eAnimationState: o.Shown };
              case o.Hiding:
                return { eAnimationState: o.Hidden };
            }
            return null;
          });
        }
        render() {
          return this.state.eAnimationState == o.Hidden
            ? null
            : r.createElement(
                "div",
                {
                  className: Object(a.a)(
                    "ShowHideAnimation",
                    o[this.state.eAnimationState],
                    [
                      "Preset-" + i[this.props.preset],
                      void 0 !== this.props.preset,
                    ],
                    this.props.additionalClassName
                  ),
                  style: { "--show-hide-duration": this.props.duration + "s" },
                },
                this.props.children
              );
        }
      }
      Object(s.b)([c.a], d.prototype, "cancelTimeout", null),
        Object(s.b)([c.a], d.prototype, "finishAnimation", null);
    },
    p9CI: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "b", function () {
          return m;
        });
      var i,
        o,
        s = n("mrSG"),
        r = n("q1tI"),
        a = n("7wIv"),
        l = n("/i/y"),
        c = n("nAcY"),
        d = n("hcOo"),
        u = n("2vnA"),
        p = n("6YgL"),
        h = n("iHhG");
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Vertical = 1)] = "Vertical"),
          (e[(e.Horizontal = 2)] = "Horizontal");
      })(i || (i = {})),
        (function (e) {
          (e[(e.Default = 0)] = "Default"),
            (e[(e.MouseDown = 1)] = "MouseDown"),
            (e[(e.Dragging = 2)] = "Dragging"),
            (e[(e.Thrown = 3)] = "Thrown");
        })(o || (o = {}));
      class m extends r.Component {
        constructor(e) {
          super(e),
            (this.m_ref = r.createRef()),
            (this.m_initialMousePosition = null),
            (this.m_initialScrollPosition = null),
            (this.m_mostRecentScrollSamples = []),
            (this.m_thrownVelocityPerSecond = null),
            (this.m_animationFrameRequestHandle = 0),
            (this.state = { eScrollState: o.Default, bAtEdge: null });
        }
        static get isScrollingSuppressed() {
          return m.s_setScrollingSuppressors.size > 0;
        }
        static get userIsDragging() {
          return !!m.s_CurrentlyDraggingPanel;
        }
        static suppressScrolling(e) {
          m.s_setScrollingSuppressors.add(e);
        }
        static unsuppressScrolling(e) {
          m.s_setScrollingSuppressors.delete(e);
        }
        componentWillUnmount() {
          this.stopMouseTracking(),
            window.cancelAnimationFrame(this.m_animationFrameRequestHandle);
        }
        componentDidMount() {
          this.setState({ bAtEdge: this.currentlyAtEdge });
        }
        componentDidUpdate(e, t) {
          this.state.bAtEdge &&
            !1 === t.bAtEdge &&
            c.b.Instance.triggerHaptic(c.a.SlidingEdge);
        }
        onWindowMouseMove(e) {
          this.updateMouseTracking({ x: e.clientX, y: e.clientY });
        }
        onWindowMouseUp(e) {
          this.stopMouseTracking();
        }
        onMouseDown(e) {
          var t, n;
          null === (n = (t = this.props).onMouseDown) ||
            void 0 === n ||
            n.call(t, e),
            this.startMouseTracking({ x: e.clientX, y: e.clientY });
        }
        onMouseUp(e) {
          var t, n;
          null === (n = (t = this.props).onMouseUp) ||
            void 0 === n ||
            n.call(t, e),
            e.stopPropagation();
        }
        onScroll(e) {
          var t, n;
          null === (n = (t = this.props).onScroll) ||
            void 0 === n ||
            n.call(t, e),
            this.setState({ bAtEdge: this.currentlyAtEdge });
        }
        get div() {
          return this.m_ref.current;
        }
        get currentlyAtEdge() {
          const e = this.m_ref.current;
          return e
            ? this.scrollsVertically
              ? 0 == e.scrollTop ||
                e.scrollTop + e.clientHeight == e.scrollHeight
              : 0 == e.scrollLeft ||
                e.scrollLeft + e.clientWidth == e.scrollWidth
            : null;
        }
        startMouseTracking(e) {
          this.setState({ eScrollState: o.MouseDown }),
            (this.m_initialMousePosition = e),
            window.document.addEventListener(
              "mousemove",
              this.onWindowMouseMove
            ),
            window.document.addEventListener("mouseup", this.onWindowMouseUp);
        }
        updateMouseTracking(e) {
          const t = Object(l.hb)(this.m_initialMousePosition, e);
          switch (this.state.eScrollState) {
            case o.MouseDown:
              if (this.props.scrollDirection == i.None) break;
              Math.abs(this.scrollsHorizontally ? t.x : t.y) >
                (this.scrollsHorizontally
                  ? m.MIN_HORIZONTAL_DRAG_DISTANCE
                  : m.MIN_VERTICAL_DRAG_DISTANCE) && this.startDragging(e);
              break;
            case o.Dragging:
              if ((this.logScrollSample(), m.s_CurrentlyDraggingPanel)) {
                if (m.s_CurrentlyDraggingPanel != this) break;
              } else m.s_CurrentlyDraggingPanel = this;
              this.scrollsHorizontally
                ? (this.m_ref.current.scrollLeft =
                    this.m_initialScrollPosition.x + t.x)
                : (this.m_ref.current.scrollTop =
                    this.m_initialScrollPosition.y + t.y);
          }
        }
        requestNextAnimationFrame() {
          (this.m_animationFrameRequestHandle = window.requestAnimationFrame(
            this.onAnimationFrame
          )),
            (this.m_lastAnimationFrameTimeMs = performance.now());
        }
        onAnimationFrame() {
          if (this.state.eScrollState != o.Thrown) return;
          const e = (performance.now() - this.m_lastAnimationFrameTimeMs) / 1e3;
          (this.m_ref.current.scrollLeft +=
            this.m_thrownVelocityPerSecond.x * e),
            (this.m_ref.current.scrollTop +=
              this.m_thrownVelocityPerSecond.y * e);
          const t = Math.sign(this.m_thrownVelocityPerSecond.x),
            n = Math.sign(this.m_thrownVelocityPerSecond.y),
            i =
              850 +
              ((Object(l.M)(this.m_thrownVelocityPerSecond) - 500) / 1e4) *
                49150,
            s = Math.min(5e4, Math.max(850, i));
          this.m_thrownVelocityPerSecond = {
            x: this.m_thrownVelocityPerSecond.x - t * s * e,
            y: this.m_thrownVelocityPerSecond.y - n * s * e,
          };
          Math.sign(this.m_thrownVelocityPerSecond.x) != t ||
          Math.sign(this.m_thrownVelocityPerSecond.y) != n ||
          Object(l.M)(this.m_thrownVelocityPerSecond) <= 1
            ? this.setState({ eScrollState: o.Default })
            : this.requestNextAnimationFrame();
        }
        startDragging(e) {
          m.isScrollingSuppressed ||
            (Object(l.i)() == l.H.Overlay &&
              (this.setState({ eScrollState: o.Dragging }),
              (this.m_initialMousePosition = e),
              (this.m_initialScrollPosition = {
                x: this.m_ref.current.scrollLeft,
                y: this.m_ref.current.scrollTop,
              }),
              this.logScrollSample()));
        }
        startThrowing() {
          (this.m_thrownVelocityPerSecond = this.calculateThrowStartVelocity()),
            this.setState({ eScrollState: o.Thrown }),
            this.requestNextAnimationFrame();
        }
        cancelThrowing(e) {
          this.setState(
            (e, t) =>
              e.eScrollState == o.Thrown
                ? (window.cancelAnimationFrame(
                    this.m_animationFrameRequestHandle
                  ),
                  { eScrollState: o.Default })
                : null,
            e
          );
        }
        get isThrown() {
          return this.state.eScrollState == o.Thrown;
        }
        calculateThrowStartVelocity() {
          let e = null,
            t = 0;
          for (let n = 1; n < this.m_mostRecentScrollSamples.length; n++) {
            const i = this.m_mostRecentScrollSamples[n - 1],
              o = this.m_mostRecentScrollSamples[n],
              s = (o.timeMs - i.timeMs) / 1e3,
              r = {
                x: (o.scrollPosition.x - i.scrollPosition.x) / s,
                y: (o.scrollPosition.y - i.scrollPosition.y) / s,
              };
            e
              ? ((e.x = (e.x * t + r.x) / (t + 1)),
                (e.y = (e.y * t + r.y) / (t + 1)))
              : (e = r),
              t++;
          }
          const n = Object(l.M)(e);
          return (
            n > m.MAX_PIXELS_PER_SECOND &&
              (e = Object(l.U)(e, m.MAX_PIXELS_PER_SECOND / n)),
            n < m.MIN_THROW_VELOCITY_PER_SECOND && (e = null),
            null != e ? e : { x: 0, y: 0 }
          );
        }
        logScrollSample() {
          for (
            this.m_mostRecentScrollSamples.push({
              scrollPosition: {
                x: this.m_ref.current.scrollLeft,
                y: this.m_ref.current.scrollTop,
              },
              timeMs: performance.now(),
            });
            this.m_mostRecentScrollSamples.length > m.MAX_SCROLL_SAMPLES;

          )
            this.m_mostRecentScrollSamples.shift();
        }
        clearScrollSamples() {
          this.m_mostRecentScrollSamples = [];
        }
        stopMouseTracking() {
          m.s_CurrentlyDraggingPanel == this
            ? (this.startThrowing(),
              p.b.temporarilySuppressSoundEffect(),
              setTimeout(() => {
                m.s_CurrentlyDraggingPanel = null;
              }, 0))
            : this.setState({ eScrollState: o.Default }),
            this.clearScrollSamples(),
            (this.m_initialMousePosition = null),
            (this.m_initialScrollPosition = null),
            window.document.removeEventListener(
              "mousemove",
              this.onWindowMouseMove
            ),
            window.document.removeEventListener(
              "mouseup",
              this.onWindowMouseUp
            );
        }
        get scrollsHorizontally() {
          return this.props.scrollDirection == i.Horizontal;
        }
        get scrollsVertically() {
          return this.props.scrollDirection == i.Vertical;
        }
        render() {
          let e = Object.assign({}, this.props);
          delete e.scrollDirection, delete e.alwaysShowScrollbars;
          const t = this.props.alwaysShowScrollbars ? "scroll" : "auto";
          return r.createElement(
            r.Fragment,
            null,
            this.state.eScrollState == o.Dragging && r.createElement(h.a, null),
            r.createElement(
              "div",
              Object.assign({}, e, {
                className: Object(d.a)("ScrollPanel", e.className),
                style: Object.assign(Object.assign({}, e.style), {
                  overflowX:
                    this.props.scrollDirection == i.Horizontal ? t : "hidden",
                  overflowY:
                    this.props.scrollDirection == i.Vertical ? t : "hidden",
                }),
                onMouseDown: this.onMouseDown,
                onMouseUp: this.onMouseUp,
                onScroll: this.onScroll,
                ref: this.m_ref,
              }),
              this.props.children
            )
          );
        }
        get scrollTop() {
          var e;
          return null === (e = this.m_ref.current) || void 0 === e
            ? void 0
            : e.scrollTop;
        }
        set scrollTop(e) {
          this.m_ref.current &&
            ((this.m_ref.current.scrollTop = e), this.cancelThrowing());
        }
        get scrollLeft() {
          var e;
          return null === (e = this.m_ref.current) || void 0 === e
            ? void 0
            : e.scrollLeft;
        }
        set scrollLeft(e) {
          this.m_ref.current &&
            ((this.m_ref.current.scrollLeft = e), this.cancelThrowing());
        }
        scrollTo(e) {
          const t = () => {
            var t;
            null === (t = this.m_ref.current) || void 0 === t || t.scrollTo(e);
          };
          this.state.eScrollState == o.Thrown ? this.cancelThrowing(t) : t();
        }
        get children() {
          var e;
          return null === (e = this.m_ref.current) || void 0 === e
            ? void 0
            : e.children;
        }
        getBoundingClientRect() {
          var e;
          return null === (e = this.m_ref.current) || void 0 === e
            ? void 0
            : e.getBoundingClientRect();
        }
        get clientWidth() {
          var e;
          return null === (e = this.m_ref.current) || void 0 === e
            ? void 0
            : e.clientWidth;
        }
        get clientHeight() {
          var e;
          return null === (e = this.m_ref.current) || void 0 === e
            ? void 0
            : e.clientHeight;
        }
        get scrollWidth() {
          var e;
          return null === (e = this.m_ref.current) || void 0 === e
            ? void 0
            : e.scrollWidth;
        }
        get scrollHeight() {
          var e;
          return null === (e = this.m_ref.current) || void 0 === e
            ? void 0
            : e.scrollHeight;
        }
        get style() {
          var e;
          return null === (e = this.m_ref.current) || void 0 === e
            ? void 0
            : e.style;
        }
        contains(e) {
          var t;
          return null === (t = this.m_ref.current) || void 0 === t
            ? void 0
            : t.contains(e);
        }
      }
      (m.s_CurrentlyDraggingPanel = null),
        (m.s_setScrollingSuppressors = u.m.set()),
        (m.MAX_SCROLL_SAMPLES = 4),
        (m.MAX_PIXELS_PER_SECOND = 1e4),
        (m.MIN_THROW_VELOCITY_PER_SECOND = 1e3),
        (m.MIN_VERTICAL_DRAG_DISTANCE = 80),
        (m.MIN_HORIZONTAL_DRAG_DISTANCE = 40),
        Object(s.b)([a.bind], m.prototype, "onWindowMouseMove", null),
        Object(s.b)([a.bind], m.prototype, "onWindowMouseUp", null),
        Object(s.b)([a.bind], m.prototype, "onMouseDown", null),
        Object(s.b)([a.bind], m.prototype, "onMouseUp", null),
        Object(s.b)([a.bind], m.prototype, "onScroll", null),
        Object(s.b)([a.bind], m.prototype, "onAnimationFrame", null),
        Object(s.b)([u.m], m, "s_CurrentlyDraggingPanel", void 0),
        Object(s.b)([u.f], m, "isScrollingSuppressed", null),
        Object(s.b)([u.f], m, "userIsDragging", null),
        Object(s.b)([u.d], m, "suppressScrolling", null),
        Object(s.b)([u.d], m, "unsuppressScrolling", null);
    },
    pYJh: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return i;
      }),
        n.d(t, "a", function () {
          return m;
        });
      var i,
        o = n("mrSG"),
        s = n("uFkT"),
        r = n("7wIv"),
        a = n("2vnA"),
        l = n("/i/y"),
        c = n("GXif"),
        d = n("MYgy"),
        u = n("Kysl"),
        p = n("tUsp");
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.List = 1)] = "List"),
          (e[(e.ViewBinding = 2)] = "ViewBinding"),
          (e[(e.EditBinding = 3)] = "EditBinding"),
          (e[(e.AppSelect = 4)] = "AppSelect"),
          (e[(e.Debugger = 5)] = "Debugger");
      })(i || (i = {}));
      class h {
        constructor() {
          (this.m_State = i.None),
            (this.m_bLoading = !1),
            (this.m_rBindingList = void 0),
            (this.m_bShowBindingListError = !1),
            (this.m_sBindingListError = void 0),
            (this.m_timeoutLoading = void 0),
            (this.m_pathUpdateTimer = void 0),
            (this.m_bShowManifestError = !1),
            (this.m_sManifestError = void 0),
            (this.m_sManifestErrorPath = void 0),
            (this.m_bStandaloneSettingsPage = !1),
            (this.m_bDesktopMode = !1);
        }
        Init() {
          window.addEventListener("popstate", this.OnPopState),
            history.pushState({ direction: "back" }, "back"),
            history.pushState({ direction: "current" }, "current"),
            history.pushState({ direction: "forward" }, "forward"),
            history.back();
          let e = "bindingui/" + l.H[Object(l.i)()];
          (this.m_mailbox = new l.c()),
            this.m_mailbox.Init(e),
            this.m_mailbox.RegisterHandler(
              "show_app_select",
              this.OnShowAppSelect
            ),
            this.m_mailbox.RegisterHandler(
              "show_app_binding",
              this.OnShowAppBinding
            ),
            this.m_mailbox.RegisterHandler(
              "show_input_debugger",
              this.OnShowInputDebugger
            ),
            this.m_mailbox.RegisterHandler(
              "binding_load_failed",
              this.OnBindingLoadFailed
            ),
            this.m_mailbox.RegisterHandler(
              "action_manifest_load_failed",
              this.OnActionManifestLoadFailed
            ),
            Object(a.e)(this.UpdateWindowTitle);
        }
        ShowOverlayInDashboard() {
          var e;
          null === (e = l.mb) ||
            void 0 === e ||
            e.VROverlay.ShowDashboard("system.vrwebhelper.controllerbinding");
        }
        OnShowAppSelect(e) {
          (this.m_bStandaloneSettingsPage = !1), this.ShowAppSelect();
        }
        OnShowInputDebugger(e) {
          (this.m_bStandaloneSettingsPage = !1), this.ShowDebugger();
        }
        OnShowAppBinding(e) {
          (this.m_bStandaloneSettingsPage = !1),
            (this.Loading = !0),
            u.a.UpdateApplications().then(() => {
              if (
                (Object(l.i)() == l.H.Overlay
                  ? this.ShowOverlayInDashboard()
                  : Object(l.i)() == l.H.Desktop && l.mb.ShowBindingUI(!0),
                !u.a.GetApp(e.app_key))
              )
                return (
                  console.log(
                    "Warning: Could not find app key: " +
                      e.app_key +
                      " showing app select."
                  ),
                  void this.ShowAppSelect()
                );
              d.a.SetSelectedApp(e.app_key, !0),
                d.a.ReloadCurrentApp().then(() => {
                  if (e.controller_type)
                    return (
                      d.a.SetSelectedController(e.controller_type, !0),
                      void d.a.ReloadControllerConfiguration().then(() => {
                        e.action_set && d.a.SetSelectedActionSet(e.action_set),
                          (this.Loading = !1),
                          this.EditCurrentBinding();
                      })
                    );
                  (this.Loading = !1), this.ShowBindingList();
                });
            });
        }
        OnBindingLoadFailed(e) {
          console.log(
            "OnBindingLoadFailed: " +
              e.app_key +
              " " +
              e.controller_type +
              " " +
              e.error
          ),
            u.a.UpdateApplications().then(() => {
              var t;
              if (!u.a.ShouldShowBindingFailureForApp(e.app_key)) return;
              if (
                !d.a.ShouldShowBindingFailureForControllerType(
                  e.controller_type
                )
              )
                return;
              d.a.RememberFailedLoadUri(e.uri),
                d.a.SetSelectedApp(e.app_key),
                d.a.SetSelectedController(e.controller_type);
              let n = u.a.GetApp(e.app_key),
                i = s.a.GetControllerTypeInfo(e.controller_type);
              if (!i) return;
              let o = s.a.LocalizeControllerString(i, e.controller_type);
              this.ShowBindingList(
                Object(c.c)(
                  e.error,
                  n ? n.name : Object(c.c)("#unknown_application"),
                  o
                )
              ),
                null === (t = l.mb) || void 0 === t || t.ShowBindingUI(!1);
            });
        }
        OnActionManifestLoadFailed(e) {
          this.ShowActionManifestLoadFailed(
            e.app_key,
            e.error,
            e.error_param,
            e.path
          );
        }
        SetStandaloneSettingsPage(e) {
          this.m_bStandaloneSettingsPage = e;
        }
        SetDesktopMode(e) {
          this.m_bDesktopMode = e;
        }
        get DesktopMode() {
          return this.m_bDesktopMode;
        }
        SetBindingListError(e) {
          (this.m_bShowBindingListError = null != e),
            (this.m_sBindingListError = e);
        }
        get ShowBindingListError() {
          return this.m_bShowBindingListError;
        }
        get BindingListError() {
          return this.m_sBindingListError;
        }
        OnPopState(e) {
          let t = "";
          e.state && e.state.direction && (t = e.state.direction),
            "back" == t
              ? (this.m_bStandaloneSettingsPage &&
                  (this.SetStandaloneSettingsPage(!1),
                  this.ReturnToSettingsUI()),
                this.GoBackPage(),
                history.forward())
              : "forward" == t && (history.back(), this.GoForwardPage());
        }
        GoBackPage() {
          switch (this.m_State) {
            default:
            case i.None:
            case i.AppSelect:
              break;
            case i.Debugger:
            case i.List:
              this.ShowAppSelect();
              break;
            case i.EditBinding:
            case i.ViewBinding:
              this.ShowBindingList();
          }
        }
        GoForwardPage() {
          switch (this.m_State) {
            default:
            case i.None:
            case i.AppSelect:
              this.ShowBindingList();
              break;
            case i.List:
              this.CurrentBinding.url == d.a.LoadedBindingURL
                ? this.EditCurrentBinding()
                : this.ViewCurrentBinding();
              break;
            case i.EditBinding:
            case i.ViewBinding:
          }
        }
        get GetUIState() {
          return this.m_State;
        }
        get BindingQueryResults() {
          return this.m_rBindingList;
        }
        get Loading() {
          return this.m_bLoading;
        }
        set Loading(e) {
          (this.m_bLoading = e),
            e
              ? (this.m_timeoutLoading && clearTimeout(this.m_timeoutLoading),
                (this.m_timeoutLoading = window.setTimeout(() => {
                  this.Loading = !1;
                }, 1e4)))
              : this.m_timeoutLoading && clearTimeout(this.m_timeoutLoading);
        }
        IsSafeToResetControllerType(e, t) {
          return (
            this.m_State == i.AppSelect ||
            this.m_State == i.None ||
            ("TrackedDeviceClass_HMD" == e &&
              "TrackedDeviceClass_Controller" == t)
          );
        }
        EditCurrentBinding() {
          this.m_State = i.EditBinding;
        }
        ViewCurrentBinding() {
          this.m_State = i.ViewBinding;
        }
        ShowBindingList(e) {
          (this.m_bStandaloneSettingsPage = !1),
            (this.Loading = !0),
            this.RefreshBindingList()
              .then(() => {
                this.SetBindingListError(e),
                  (this.Loading = !1),
                  (this.m_State = i.List);
              })
              .catch(() => {
                this.Loading = !1;
              });
        }
        get CurrentBinding() {
          if (this.BindingQueryResults)
            return m.BindingQueryResults.find(
              (e) => e.url == d.a.SelectedBindingURL
            );
        }
        ReturnToSettingsUI() {
          var e;
          this.ShowAppSelect(),
            null === (e = l.mb) || void 0 === e || e.ShowSettingsUI();
        }
        ShowAppSelect() {
          (this.m_bStandaloneSettingsPage = !1),
            (this.Loading = !0),
            u.a
              .UpdateApplications()
              .then(() => {
                (this.Loading = !1), (this.m_State = i.AppSelect);
              })
              .catch(() => {
                this.Loading = !1;
              });
        }
        UpdatePathsTimeout() {
          try {
            p.a.UpdatePaths().then(() => {
              this.m_State == i.Debugger
                ? (this.m_pathUpdateTimer = window.setTimeout(
                    this.UpdatePathsTimeout,
                    500
                  ))
                : (this.m_pathUpdateTimer = void 0);
            });
          } catch (e) {
            console.log("Stopping debugger timer because", e);
          }
        }
        ShowDebugger() {
          (this.Loading = !0),
            u.a
              .UpdateApplications()
              .then(() => {
                this.Loading = !1;
                let e = u.a.GetApp(d.a.SelectedApp);
                e &&
                  e.client_container_handle &&
                  p.a.AddSubscribedContainer(e.client_container_handle),
                  (this.m_State = i.Debugger),
                  (this.m_pathUpdateTimer = window.setTimeout(
                    this.UpdatePathsTimeout,
                    500
                  )),
                  l.mb.ShowBindingUI(Object(l.i)() == l.H.Desktop);
              })
              .catch(() => {
                this.Loading = !1;
              });
        }
        RefreshBindingList() {
          return Object(o.a)(this, void 0, void 0, function* () {
            (this.Loading = !0),
              yield new Promise((e, t) => {
                let n = d.a.SelectedControllerTypeInfo;
                d.a
                  .QueryBindingList(d.a.SelectedApp, n ? n.controller_type : "")
                  .then((t) => {
                    t.success &&
                      ((this.m_rBindingList = t.results),
                      (this.Loading = !1),
                      e());
                  })
                  .catch(() => {
                    this.Loading = !1;
                  });
              });
          });
        }
        ShowActionManifestLoadFailed(e, t, n, i) {
          var o;
          let s = u.a.GetApp(e);
          (this.m_sManifestError = Object(c.c)(t, s ? s.name : e, n)),
            (this.m_sManifestErrorPath = i),
            (this.m_bShowManifestError = !0),
            this.ShowAppSelect(),
            null === (o = l.mb) || void 0 === o || o.ShowBindingUI(!1);
        }
        ManifestLoadErrorClose() {
          (this.m_sManifestError = void 0),
            (this.m_sManifestErrorPath = void 0),
            (this.m_bShowManifestError = !1);
        }
        get ShowManifestError() {
          return this.m_bShowManifestError;
        }
        get ManifestError() {
          return this.m_sManifestError;
        }
        get ManifestErrorPath() {
          return this.m_sManifestErrorPath;
        }
        UpdateWindowTitle() {
          setTimeout(() => {
            switch (this.GetUIState) {
              case i.AppSelect:
              case i.Debugger:
              case i.EditBinding:
              case i.List:
              case i.None:
              case i.ViewBinding:
                document.title = Object(c.c)(
                  "#BindingUI_WindowTitle_ControllerBinding"
                );
            }
          }, 0);
        }
      }
      Object(o.b)([a.m], h.prototype, "m_State", void 0),
        Object(o.b)([a.m], h.prototype, "m_bLoading", void 0),
        Object(o.b)([a.m], h.prototype, "m_rBindingList", void 0),
        Object(o.b)([a.m], h.prototype, "m_bShowBindingListError", void 0),
        Object(o.b)([a.m], h.prototype, "m_sBindingListError", void 0),
        Object(o.b)([a.m], h.prototype, "m_bShowManifestError", void 0),
        Object(o.b)([a.m], h.prototype, "m_sManifestError", void 0),
        Object(o.b)([a.m], h.prototype, "m_sManifestErrorPath", void 0),
        Object(o.b)([a.m], h.prototype, "m_bDesktopMode", void 0),
        Object(o.b)([r.bind], h.prototype, "OnShowAppSelect", null),
        Object(o.b)([r.bind], h.prototype, "OnShowInputDebugger", null),
        Object(o.b)([r.bind], h.prototype, "OnShowAppBinding", null),
        Object(o.b)([r.bind], h.prototype, "OnBindingLoadFailed", null),
        Object(o.b)([r.bind], h.prototype, "OnActionManifestLoadFailed", null),
        Object(o.b)([a.f], h.prototype, "DesktopMode", null),
        Object(o.b)([r.bind], h.prototype, "SetBindingListError", null),
        Object(o.b)([a.f], h.prototype, "ShowBindingListError", null),
        Object(o.b)([a.f], h.prototype, "BindingListError", null),
        Object(o.b)([r.bind], h.prototype, "OnPopState", null),
        Object(o.b)([r.bind], h.prototype, "GoBackPage", null),
        Object(o.b)([r.bind], h.prototype, "GoForwardPage", null),
        Object(o.b)([a.f], h.prototype, "GetUIState", null),
        Object(o.b)([a.f], h.prototype, "BindingQueryResults", null),
        Object(o.b)([a.f], h.prototype, "Loading", null),
        Object(o.b)([r.bind], h.prototype, "IsSafeToResetControllerType", null),
        Object(o.b)([r.bind], h.prototype, "EditCurrentBinding", null),
        Object(o.b)([r.bind], h.prototype, "ViewCurrentBinding", null),
        Object(o.b)([r.bind], h.prototype, "ShowBindingList", null),
        Object(o.b)([a.f], h.prototype, "CurrentBinding", null),
        Object(o.b)([r.bind], h.prototype, "ReturnToSettingsUI", null),
        Object(o.b)([r.bind], h.prototype, "ShowAppSelect", null),
        Object(o.b)([r.bind], h.prototype, "UpdatePathsTimeout", null),
        Object(o.b)([r.bind], h.prototype, "ShowDebugger", null),
        Object(o.b)([r.bind], h.prototype, "RefreshBindingList", null),
        Object(o.b)([a.d], h.prototype, "ShowActionManifestLoadFailed", null),
        Object(o.b)([a.d], h.prototype, "ManifestLoadErrorClose", null),
        Object(o.b)([a.f], h.prototype, "ShowManifestError", null),
        Object(o.b)([a.f], h.prototype, "ManifestError", null),
        Object(o.b)([a.f], h.prototype, "ManifestErrorPath", null),
        Object(o.b)([r.bind], h.prototype, "UpdateWindowTitle", null);
      const m = new h();
      window.inputUI = m;
    },
    tALH: function (e, t, n) {
      "use strict";
      var i = n("mrSG"),
        o = n("q1tI"),
        s = n("7wIv"),
        r = n("okNM"),
        a = n("GXif"),
        l = n("Q+Z6"),
        c = n("TbT/"),
        d = n("6YgL"),
        u = n("/i/y"),
        p = n("uFkT"),
        h = n("MYgy"),
        m = n("2vnA"),
        b = n("ru2+");
      class g extends o.Component {
        constructor(e) {
          super(e),
            (this.m_mailbox = new u.c()),
            (this.m_deviceDetails = null),
            (this.m_controllerType = null),
            (this.m_thumbstickSourceName = null),
            (this.m_lastX = 0),
            (this.m_lastY = 0),
            (this.m_addedPoint = !1),
            (this.m_edgeValues = []),
            (this.m_deviceDetails = p.a.GetDeviceInfo(this.props.devicePath)),
            (this.m_controllerType = p.a.GetControllerTypeInfo(
              this.m_deviceDetails.controller_type
            ));
          for (let e in this.m_controllerType.input_source) {
            if ("joystick" == this.m_controllerType.input_source[e].type) {
              this.m_thumbstickSourceName = e;
              break;
            }
          }
          this.m_mailbox.RegisterHandler(
            "update_component_states",
            this.OnUpdateComponentStates
          ),
            this.m_mailbox.Init("calibrate_thumbstick").then(() => {
              if (this.m_thumbstickSourceName) {
                let e = {
                  type: "request_input_state_updates",
                  device_path: this.props.devicePath,
                  returnAddress: this.m_mailbox.name,
                };
                return this.m_mailbox.SendMessage("input_server", e), null;
              }
            }),
            (this.state = { edgeValue: [] });
        }
        componentWillUnmount() {
          let e = {
            type: "cancel_input_state_updates",
            device_path: this.props.devicePath,
            returnAddress: this.m_mailbox.name,
          };
          this.m_mailbox.SendMessage("input_server", e);
        }
        OnUpdateComponentStates(e) {
          let t = !1;
          for (let n in e.components) {
            let i = e.components[n];
            n == this.m_thumbstickSourceName + "/x"
              ? ((this.m_lastX = i), (t = !0))
              : n == this.m_thumbstickSourceName + "/y" &&
                ((this.m_lastY = i), (t = !0));
          }
          if (t) {
            let e = Math.sqrt(
              this.m_lastX * this.m_lastX + this.m_lastY * this.m_lastY
            );
            this.m_addedPoint
              ? e < 0.2 && (this.m_addedPoint = !1)
              : e > 0.95 &&
                ((this.m_addedPoint = !0),
                this.m_edgeValues.push({ x: this.m_lastX, y: this.m_lastY }),
                this.setState({ edgeValue: this.m_edgeValues }));
          }
        }
        OnCancel() {
          this.props.fnCloseCalibrator();
        }
        ComputeCalibration() {
          if (this.m_edgeValues.length < 5) return null;
          {
            let e = [];
            for (let t of this.m_edgeValues) {
              let n = -Math.atan2(t.x, t.y);
              e.push((180 * n) / Math.PI);
            }
            return e.sort((e, t) => e - t), e[Math.floor(e.length / 2)];
          }
        }
        OnConfirm() {
          this.props.fnUpdateThumbstickCalibration(
            this.props.devicePath,
            this.ComputeCalibration()
          ),
            this.props.fnCloseCalibrator();
        }
        render() {
          let e = [],
            t = 0;
          for (let n of this.state.edgeValue) {
            let i = 60 * n.x + 60,
              s = 60 * -n.y + 60;
            e.push(
              o.createElement("polyline", {
                key: t++,
                points: "60,60 " + i.toFixed(0) + "," + s.toFixed(0),
                strokeWidth: "0.1rem",
                fill: "transparent",
              })
            );
          }
          let n = this.ComputeCalibration(),
            i = null;
          return (
            (i = n
              ? Object(a.c)("#Settings_General_InviteMoreSamples", n.toFixed(2))
              : Object(a.c)(
                  "#Settings_General_NotEnoughSamples",
                  5 - this.m_edgeValues.length
                )),
            o.createElement(
              c.i,
              {
                onDismissRequested: this.props.fnCloseCalibrator,
                header: Object(a.c)("#Settings_General_CalibrateThumbstick"),
                footer: o.createElement(
                  "div",
                  { className: "SettingsItem ButtonRow" },
                  o.createElement(
                    d.a,
                    {
                      key: "cancel",
                      className: "ButtonControl",
                      onClick: this.OnCancel,
                    },
                    Object(a.c)("#Settings_General_Cancel")
                  ),
                  o.createElement("div", { className: "Spacer" }),
                  o.createElement(
                    d.a,
                    {
                      key: "confirm",
                      className: "ButtonControl",
                      enabled: !!n,
                      onClick: this.OnConfirm,
                    },
                    Object(a.c)("#Settings_General_Confirm")
                  )
                ),
              },
              o.createElement(
                "div",
                { className: "ThumbstickCalibrateBody" },
                o.createElement(
                  "div",
                  { className: "ThumbstickContainer" },
                  o.createElement(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: [0, 0, 120, 120].join(" "),
                    },
                    o.createElement("circle", {
                      cx: 60,
                      cy: 60,
                      r: 60,
                      strokeWidth: "0.1rem",
                    }),
                    e
                  )
                ),
                o.createElement(
                  "div",
                  { className: "Label ThumbstickAngle" },
                  i
                )
              )
            )
          );
        }
      }
      Object(i.b)([s.bind], g.prototype, "OnUpdateComponentStates", null),
        Object(i.b)([s.bind], g.prototype, "OnCancel", null),
        Object(i.b)([s.bind], g.prototype, "OnConfirm", null);
      var S,
        _,
        f = n("N46P"),
        v = n("V1oe"),
        y = n("X3sx"),
        O = n("7uy8");
      n.d(t, "b", function () {
        return R;
      }),
        n.d(t, "a", function () {
          return k;
        });
      const A = Object(r.a)(() => {
          var e;
          if (
            !(null === (e = VRHTML) || void 0 === e
              ? void 0
              : e.VRDashboardManager.ShouldShowTrackerUI())
          )
            return null;
          const t = "managevivetrackers" == l.d.routePageSection;
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              "div",
              { className: "SettingsItem Button" },
              o.createElement(
                d.a,
                {
                  className: "ButtonControl",
                  onClick: () => l.d.setRoutePageSection("managevivetrackers"),
                },
                Object(a.c)("#Settings_General_ShowTrackerUI")
              )
            ),
            t &&
              o.createElement(
                c.i,
                {
                  header: Object(a.c)("#Settings_ViveTrackers"),
                  onDismissRequested: () => l.d.setRoutePageSection(null),
                },
                o.createElement(b.a, null)
              )
          );
        }),
        C = Object(r.a)(() => {
          if (!p.a.BDevMode) return null;
          const e = "debuglegacyinput" == l.d.routePageSection;
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              "div",
              { className: "SettingsItem Button" },
              o.createElement(
                d.a,
                {
                  className: "ButtonControl",
                  enabled: !!VRHTML,
                  onClick: () => l.d.setRoutePageSection("debuglegacyinput"),
                },
                Object(a.c)("#AppSelect_LegacyDebug")
              )
            ),
            e &&
              o.createElement(
                c.i,
                {
                  header: Object(a.c)("#AppSelect_LegacyDebug"),
                  onDismissRequested: () => l.d.setRoutePageSection(null),
                },
                o.createElement(f.a, null)
              )
          );
        }),
        w = Object(r.a)(() => {
          const e = "testcontrollers" == l.d.routePageSection;
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              "div",
              { className: "SettingsItem Button" },
              o.createElement(
                d.a,
                {
                  className: "ButtonControl",
                  onClick: () => l.d.setRoutePageSection("testcontrollers"),
                },
                Object(a.c)("#AppSelect_ControllerTester")
              )
            ),
            e &&
              o.createElement(v.a, {
                onDismissRequested: () => l.d.setRoutePageSection(null),
              })
          );
        });
      function j() {
        return o.createElement(
          c.c,
          { visibility: c.d.Advanced, className: "SettingsItem Button" },
          o.createElement(
            c.e,
            {
              icon: c.f.PopOut,
              onClick: function () {
                if (VRHTML)
                  switch (Object(u.i)()) {
                    case u.H.Desktop:
                      VRHTML.ShowBindingUI(!0);
                      break;
                    case u.H.Overlay:
                      VRHTML.ShowBindingUI(!1), VRHTML.ShowBindingUIAppSelect();
                  }
                else window.open("/dashboard/controllerbinding.html");
              },
            },
            Object(a.c)("#Settings_ShowOldBindingUI")
          )
        );
      }
      function M(e) {
        if (!p.a.BDevMode) return null;
        return o.createElement(
          c.c,
          { className: "SettingsItem Button" },
          o.createElement(
            c.e,
            {
              icon: c.f.PopOut,
              onClick: function () {
                if (VRHTML) {
                  switch (Object(u.i)()) {
                    case u.H.Desktop:
                      VRHTML.ShowBindingUI(!0);
                      break;
                    case u.H.Overlay:
                      VRHTML.ShowBindingUI(!1);
                  }
                  let t = "bindingui/" + u.H[Object(u.i)()];
                  e.mailbox.SendMessage(t, { type: "show_input_debugger" });
                } else
                  window.open(
                    "/dashboard/controllerbinding.html?debugger=true"
                  );
              },
            },
            Object(a.c)("#BindingUI_InputDebugger")
          )
        );
      }
      let T = (S = class extends o.Component {
        constructor(e) {
          super(e),
            (this.state = { bShowingModal: !1, sDeviceToCalibrate: null });
        }
        resetToDefaults() {
          S.devices.forEach((e) => {
            this.updateCalibration(e.sDevicePath, 0);
          });
        }
        closeCalibrator() {
          this.setState({ sDeviceToCalibrate: null });
        }
        updateCalibration(e, t) {
          this.closeCalibrator(),
            S.devices.some(
              (n) =>
                n.sDevicePath == e &&
                (l.d.SetSettingsValue(this.getThumbstickRotationSetting(e), t),
                !0)
            );
        }
        getThumbstickRotationSetting(e) {
          let t = null;
          return (
            S.devices.some((n) => {
              if (n.sDevicePath == e) {
                const i = p.a.GetDeviceInfo(e);
                return (
                  i &&
                    (t =
                      n.sThumbstickAngleSettingPathPrefix + i.controller_type),
                  !0
                );
              }
              return !1;
            }),
            t
          );
        }
        shouldShowThumbstickCalibrateForHand(e) {
          const t = p.a.GetDeviceInfo(e);
          if (!t) return !1;
          const n = p.a.GetControllerTypeInfo(t.controller_type);
          if (!n) return !1;
          for (let e in n.input_source)
            if ("joystick" == n.input_source[e].type) return !0;
          return !1;
        }
        showCalibration(e) {
          this.setState({ sDeviceToCalibrate: e });
        }
        GetThumbstickDeadzoneSetting() {
          let e = p.a.GetDeviceInfo("/user/hand/left");
          return (
            e || (e = p.a.GetDeviceInfo("/user/hand/right")),
            e &&
            (this.shouldShowThumbstickCalibrateForHand("/user/hand/left") ||
              this.shouldShowThumbstickCalibrateForHand("/user/hand/right"))
              ? "/settings/input/thumbstickDeadzone_" + e.controller_type
              : null
          );
        }
        show() {
          this.setState({ bShowingModal: !0 });
        }
        hide() {
          this.closeCalibrator(), this.setState({ bShowingModal: !1 });
        }
        render() {
          let e = this.GetThumbstickDeadzoneSetting(),
            t = 0;
          return (
            e && l.d.settings.has(e) && (t = l.d.settings.get(e)),
            o.createElement(
              o.Fragment,
              null,
              o.createElement(
                c.c,
                { className: "SettingsItem" },
                o.createElement(
                  d.a,
                  { className: "ButtonControl", onClick: this.show },
                  Object(a.c)("#Settings_ShowThumbstickSettings")
                )
              ),
              this.state.bShowingModal &&
                o.createElement(
                  c.i,
                  {
                    header: Object(a.c)("#Settings_ThumbstickSettings"),
                    onDismissRequested: this.hide,
                  },
                  null !== this.state.sDeviceToCalibrate &&
                    o.createElement(g, {
                      devicePath: this.state.sDeviceToCalibrate,
                      fnCloseCalibrator: this.closeCalibrator,
                      fnUpdateThumbstickCalibration: this.updateCalibration,
                    }),
                  S.devices.map((e) => {
                    if (
                      !this.shouldShowThumbstickCalibrateForHand(e.sDevicePath)
                    )
                      return o.createElement(
                        c.c,
                        {
                          key: e.sDevicePath,
                          title: Object(a.c)(
                            "#Settings_General_CalibrateThumbstick_ConnectAController"
                          ),
                          className: "SettingsItem CalibrateThumbstickItem",
                        },
                        o.createElement(
                          "div",
                          { className: "Label" },
                          Object(a.c)(
                            e.sThumbstickAngleLabelPlaceholderUnlocalized
                          )
                        ),
                        o.createElement(
                          d.a,
                          { className: "ButtonControl", enabled: !1 },
                          Object(a.c)("#Settings_General_Calibrate")
                        )
                      );
                    let t = l.d.settings.get(
                      this.getThumbstickRotationSetting(e.sDevicePath)
                    );
                    return (
                      null == t && (t = 0),
                      o.createElement(
                        c.c,
                        {
                          key: e.sDevicePath,
                          className: "SettingsItem CalibrateThumbstickItem",
                        },
                        o.createElement(
                          "div",
                          { className: "Label" },
                          Object(a.c)(
                            e.sThumbstickAngleLabelUnlocalized,
                            t.toFixed(1)
                          )
                        ),
                        o.createElement(
                          d.a,
                          {
                            className: "ButtonControl",
                            onClick: () => {
                              this.showCalibration(e.sDevicePath);
                            },
                          },
                          Object(a.c)("#Settings_General_Calibrate")
                        )
                      )
                    );
                  }),
                  e &&
                    o.createElement(c.m, {
                      min: 0,
                      max: 0.5,
                      step: 0.01,
                      valueStyleVariant: y.c.OnHandle,
                      renderValue: (e) => (100 * e).toFixed(0) + "%",
                      name: e,
                      label: Object(a.c)("#Settings_ThumbstickDeadzone_Text"),
                      title: Object(a.c)("#Settings_ThumbstickDeadzone_Desc"),
                    })
                )
            )
          );
        }
      });
      (T.devices = [
        {
          sDevicePath: "/user/hand/left",
          sThumbstickAngleSettingPathPrefix:
            "/settings/input/leftThumbstickRotation_",
          sThumbstickAngleLabelUnlocalized:
            "#Settings_General_LeftThumbstickAngle",
          sThumbstickAngleLabelPlaceholderUnlocalized:
            "#Settings_General_LeftThumbstickAngle_NoValue",
        },
        {
          sDevicePath: "/user/hand/right",
          sThumbstickAngleSettingPathPrefix:
            "/settings/input/rightThumbstickRotation_",
          sThumbstickAngleLabelUnlocalized:
            "#Settings_General_RightThumbstickAngle",
          sThumbstickAngleLabelPlaceholderUnlocalized:
            "#Settings_General_RightThumbstickAngle_NoValue",
        },
      ]),
        Object(i.b)([s.bind], T.prototype, "resetToDefaults", null),
        Object(i.b)([s.bind], T.prototype, "closeCalibrator", null),
        Object(i.b)([s.bind], T.prototype, "updateCalibration", null),
        Object(i.b)([s.bind], T.prototype, "showCalibration", null),
        Object(i.b)([s.bind], T.prototype, "show", null),
        Object(i.b)([s.bind], T.prototype, "hide", null),
        (T = S = Object(i.b)([r.a], T));
      let R = (_ = class extends o.Component {
        constructor(e) {
          super(e),
            (this.m_mailbox = new u.c()),
            (this.m_routeObservingAutorunDisposer = null),
            (this.m_refAppSelectDropdown = o.createRef()),
            (this.state = {
              currentBindingApp: null,
              currentControllerType: h.a.GetBestControllerType(),
              currentActionManifest: null,
              currentBinding: null,
              rCurrentBindingList: null,
              bForceToggleToCustom: !1,
              eDominantHand: null,
            }),
            this.m_mailbox.Init("settings_binding_manager");
        }
        componentDidMount() {
          this.setState({ currentControllerType: h.a.GetBestControllerType() }),
            (this.m_bindingSubscriptionChangedCanaryDisposer = Object(m.n)(
              h.a,
              "BindingSubscriptionChangedCanary",
              (e) => {
                this.updateStateForApp(this.state.currentBindingApp);
              }
            )),
            (this.m_routeObservingAutorunDisposer = Object(m.e)(() => {
              var e;
              if (this.shouldShowModal) {
                const t = this.currentRouteAppKey;
                t &&
                  (null === (e = this.m_refAppSelectDropdown.current) ||
                    void 0 === e ||
                    e.setCurrentApp(t));
              }
            }));
        }
        componentWillUnmount() {
          this.m_bindingSubscriptionChangedCanaryDisposer &&
            (this.m_bindingSubscriptionChangedCanaryDisposer(),
            (this.m_bindingSubscriptionChangedCanaryDisposer = null)),
            this.m_routeObservingAutorunDisposer &&
              (this.m_routeObservingAutorunDisposer(),
              (this.m_routeObservingAutorunDisposer = null));
        }
        static OpenDeepLink(e, t) {
          var n;
          l.d.setRoute(e, _.PAGE_SECTION, t ? [t] : null),
            null === (n = VRHTML) || void 0 === n || n.ShowSettingsUI();
        }
        get shouldShowModal() {
          return l.d.routePageSection == _.PAGE_SECTION;
        }
        get currentRouteAppKey() {
          const e = l.d.routePageSectionParams;
          return e.length >= 1 ? e[0] : null;
        }
        loadAppActionManifest(e) {
          return Object(i.a)(this, void 0, void 0, function* () {
            let t = yield Object(h.f)(e);
            if (t.error) throw new Error(t.error);
            return t;
          });
        }
        loadBindingConfig(e, t) {
          return Object(i.a)(this, void 0, void 0, function* () {
            return (yield Object(h.d)(
              e,
              this.state.currentControllerType.controller_type,
              t.current_binding_url[
                this.state.currentControllerType.controller_type
              ]
            )).binding_config;
          });
        }
        updateStateForApp(e) {
          return Object(i.a)(this, void 0, void 0, function* () {
            (this.state.currentBindingApp &&
              e.key == this.state.currentBindingApp.key) ||
              this.setState({
                currentBindingApp: e,
                currentActionManifest: null,
                currentBinding: null,
                rCurrentBindingList: null,
                bForceToggleToCustom: !1,
              });
            let t = yield this.loadAppActionManifest(e.key);
            if (
              (this.setState({
                currentActionManifest: t,
                bForceToggleToCustom: !1,
              }),
              t.supports_dominant_hand_setting)
            ) {
              let t = yield l.d.GetAppSettings(e.key);
              this.setState({ eDominantHand: t.dominant_hand });
            } else this.setState({ eDominantHand: void 0 });
            let n = yield this.loadBindingConfig(e.key, t);
            this.setState({ currentBinding: n });
          });
        }
        loadBindingListForApp(e) {
          return Object(i.a)(this, void 0, void 0, function* () {
            let t = this.state.currentControllerType,
              n = yield h.a.QueryBindingList(e.key, t ? t.controller_type : "");
            if (!n.success) throw new Error(n.error);
            return n.results;
          });
        }
        onApplicationDropdownChange(e) {
          return Object(i.a)(this, void 0, void 0, function* () {
            this.setState((t, n) => {
              var i, o;
              if (t.currentBindingApp === e) return null;
              e && this.updateStateForApp(e),
                l.d.setRoutePageSectionParams([
                  ((o = null === (i = e) || void 0 === i ? void 0 : i.key),
                  null != o ? o : ""),
                ]);
            });
          });
        }
        onToggleDefaultCustomBinding(e) {
          return Object(i.a)(this, void 0, void 0, function* () {
            const t = (
              e
                ? this.state.currentActionManifest.previous_binding_url
                : this.state.currentActionManifest.default_bindings
            )[this.state.currentControllerType.controller_type];
            t
              ? yield h.a.SelectConfig(
                  this.state.currentBindingApp.key,
                  this.state.currentControllerType.controller_type,
                  t
                )
              : this.setState({ bForceToggleToCustom: !0 });
          });
        }
        showBindingDetail(e) {
          let t = {
            type: "show_app_binding",
            app_key: this.state.currentBindingApp.key,
          };
          e &&
            (t.controller_type =
              this.state.currentControllerType.controller_type);
          let n = "bindingui/" + u.H[Object(u.i)()];
          this.m_mailbox.SendMessage(n, t);
        }
        show() {
          l.d.setRoutePageSection(_.PAGE_SECTION);
        }
        close() {
          l.d.setRoutePageSection(null);
        }
        showBindingCallouts() {
          var e, t, n;
          let i =
              null !=
              (e = this.state.currentBindingApp
                ? this.state.currentBindingApp.key
                : null)
                ? e
                : null !=
                  (n =
                    null === (t = VRHTML) || void 0 === t
                      ? void 0
                      : t.VRApplications.GetSceneApplicationKey())
                ? n
                : "openvr.component.vrcompositor",
            o = {
              type: "request_binding_callouts",
              returnAddress: this.m_mailbox.name,
              app_key: i,
              controller_type: this.state.currentControllerType.controller_type,
            };
          this.m_mailbox.SendMessage(O.b, o);
        }
        onToggleDominantHand(e) {
          let t = e
            ? u.w.TrackedControllerRole_RightHand
            : u.w.TrackedControllerRole_LeftHand;
          this.setAppState("dominant_hand", t),
            this.setState({ eDominantHand: t });
        }
        setAppState(e, t) {
          if (null != this.state.currentBindingApp) {
            let n = {};
            (n[e] = t), l.d.SetAppSettings(this.state.currentBindingApp.key, n);
          }
        }
        render() {
          var e, t, n;
          let i = "",
            s = "";
          try {
            (i =
              this.state.currentActionManifest.current_binding_url[
                this.state.currentControllerType.controller_type
              ]),
              (s =
                this.state.currentActionManifest.default_bindings[
                  this.state.currentControllerType.controller_type
                ]);
          } catch (e) {}
          const r = this.state.bForceToggleToCustom || (s && s != i),
            l =
              (null === (e = this.state.currentActionManifest) || void 0 === e
                ? void 0
                : e.supports_dominant_hand_setting) &&
              null != this.state.eDominantHand,
            h = this.state.eDominantHand == u.w.TrackedControllerRole_RightHand;
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(
              c.c,
              { className: "SettingsItem" },
              o.createElement(
                d.a,
                { className: "ButtonControl", onClick: this.show },
                Object(a.c)("#Settings_Controller_AdvancedControllerSettings")
              )
            ),
            this.shouldShowModal &&
              o.createElement(
                c.i,
                {
                  className: "BindingsModal",
                  header: o.createElement(
                    o.Fragment,
                    null,
                    o.createElement(
                      "h1",
                      null,
                      Object(a.c)(
                        "#Settings_ManageControllerBindingSettingsForApp"
                      )
                    ),
                    o.createElement(c.a, {
                      ref: this.m_refAppSelectDropdown,
                      defaultAppKey:
                        ((t = this.currentRouteAppKey),
                        null != t
                          ? t
                          : null === (n = VRHTML) || void 0 === n
                          ? void 0
                          : n.VRApplications.GetSceneApplicationKey()),
                      stateKey: "settings_controller_binding",
                      showCompositor: !0,
                      defaultLabel: Object(a.c)(
                        "#Settings_PerApplication_ChooseApplication"
                      ),
                      onChange: this.onApplicationDropdownChange,
                    })
                  ),
                  subheader: p.a.IsSteamAvailable
                    ? null
                    : Object(a.c)("#Settings_NeedSteamTo_ViewAndEditBindings"),
                  onDismissRequested: this.close,
                },
                this.state.currentControllerType &&
                  o.createElement(
                    c.c,
                    { className: "SettingsItem" },
                    o.createElement(
                      "div",
                      { className: "Label" },
                      Object(a.c)("#Settings_ActiveController")
                    ),
                    o.createElement(
                      "div",
                      { className: "Label" },
                      p.a.LocalizeDriverString(
                        this.state.currentControllerType.resource_root,
                        this.state.currentControllerType.controller_type
                      )
                    )
                  ),
                !i &&
                  o.createElement(
                    "div",
                    { className: "Subsection" },
                    Object(a.c)("#Settings_Loading_CurrentBinding")
                  ),
                !p.a.IsSteamAvailable &&
                  this.state.currentBinding &&
                  o.createElement(
                    c.c,
                    { className: "SettingsItem" },
                    o.createElement(
                      "div",
                      { className: "Label" },
                      Object(a.c)("#Settings_ActiveBinding")
                    ),
                    o.createElement(
                      "div",
                      { className: "Label" },
                      this.state.currentBinding.name
                    )
                  ),
                p.a.IsSteamAvailable &&
                  i &&
                  o.createElement(c.n, {
                    label: Object(a.c)("#Settings_ActiveControllerBinding"),
                    offLabel: Object(a.c)(
                      "#Settings_Controller_DefaultBinding"
                    ),
                    onLabel: Object(a.c)("#Settings_Controller_CustomBinding"),
                    onChange: this.onToggleDefaultCustomBinding,
                    value: r,
                    onSubsection: o.createElement(
                      o.Fragment,
                      null,
                      p.a.IsSteamAvailable &&
                        i &&
                        !this.state.currentBinding &&
                        o.createElement(
                          "div",
                          { className: "SettingsItem Label" },
                          Object(a.c)("#Settings_Loading_CurrentBinding")
                        ),
                      o.createElement(
                        "div",
                        { className: "SettingsItem Label" },
                        !p.a.IsSteamAvailable &&
                          !this.state.currentBinding &&
                          o.createElement(
                            o.Fragment,
                            null,
                            Object(a.c)(
                              "#Settings_NeedSteamTo_SeeCurrentBinding"
                            )
                          ),
                        this.state.currentBinding &&
                          o.createElement(
                            o.Fragment,
                            null,
                            this.state.currentBinding.name
                          ),
                        o.createElement("br", null)
                      ),
                      r &&
                        o.createElement(
                          "div",
                          {
                            className:
                              "SettingsItem ButtonRow BindingButtonRow",
                          },
                          o.createElement(
                            c.e,
                            {
                              icon: c.f.PopOut,
                              onClick: this.showBindingDetail.bind(this, !0),
                            },
                            Object(a.c)("#Settings_EditBinding")
                          ),
                          o.createElement(
                            c.e,
                            {
                              icon: c.f.PopOut,
                              enabled: p.a.IsSteamAvailable,
                              onClick: this.showBindingDetail.bind(this, !1),
                            },
                            Object(a.c)("#Settings_EditBinding_ChooseAnother")
                          )
                        )
                    ),
                  }),
                o.createElement("div", { className: "Spacer" }),
                this.state.currentBindingApp &&
                  o.createElement(E, {
                    appKey: this.state.currentBindingApp.key,
                  }),
                l &&
                  o.createElement(c.n, {
                    label: Object(a.c)("#Settings_DominantHand"),
                    offLabel: Object(a.c)("#Settings_DominantHand_Left"),
                    onLabel: Object(a.c)("#Settings_DominantHand_Right"),
                    onChange: this.onToggleDominantHand,
                    value: h,
                  })
              )
          );
        }
      });
      (R.PAGE_SECTION = "appcontrollerbindings"),
        Object(i.b)([m.f], R.prototype, "shouldShowModal", null),
        Object(i.b)([m.f], R.prototype, "currentRouteAppKey", null),
        Object(i.b)([s.bind], R.prototype, "onApplicationDropdownChange", null),
        Object(i.b)(
          [s.bind],
          R.prototype,
          "onToggleDefaultCustomBinding",
          null
        ),
        Object(i.b)([s.bind], R.prototype, "showBindingDetail", null),
        Object(i.b)([s.bind], R.prototype, "show", null),
        Object(i.b)([s.bind], R.prototype, "close", null),
        Object(i.b)([s.bind], R.prototype, "showBindingCallouts", null),
        Object(i.b)([s.bind], R.prototype, "onToggleDominantHand", null),
        (R = _ = Object(i.b)([r.a], R));
      const E = (e) =>
        o.createElement(
          c.c,
          { className: "SettingsItem" },
          o.createElement(
            d.a,
            {
              className: "ButtonControl",
              onClick: () => {
                var t, n, i;
                return l.d.showBindingCallouts(
                  null != (t = e.appKey)
                    ? t
                    : null !=
                      (i =
                        null === (n = VRHTML) || void 0 === n
                          ? void 0
                          : n.VRApplications.GetSceneApplicationKey())
                    ? i
                    : "openvr.component.vrcompositor"
                );
              },
            },
            Object(a.c)(
              Object(u.i)() == u.H.Overlay
                ? "#Settings_Controller_ShowBindingCallouts"
                : "#Settings_Controller_ShowBindingCalloutsInVR"
            )
          )
        );
      let k = class extends c.b {
        constructor(e) {
          super(e),
            (this.m_mailbox = new u.c()),
            (this.m_refControllerSettingsSection = o.createRef()),
            this.m_mailbox.Init("settings_controller_page");
        }
        ResetToDefaults() {
          super.ResetToDefaults(),
            this.m_refControllerSettingsSection.current &&
              this.m_refControllerSettingsSection.current.resetToDefaults();
        }
        render() {
          return this.props.active
            ? o.createElement(
                o.Fragment,
                null,
                o.createElement(E, null),
                o.createElement(R, null),
                o.createElement(j, null),
                o.createElement(T, {
                  ref: this.m_refControllerSettingsSection,
                }),
                o.createElement(w, null),
                o.createElement(A, null),
                o.createElement(C, null),
                o.createElement(M, { mailbox: this.m_mailbox })
              )
            : null;
        }
      };
      (k.Name = "controller_settings"),
        Object(i.b)([s.bind], k.prototype, "ResetToDefaults", null),
        (k = Object(i.b)([r.a], k));
    },
    tUsp: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      var i = n("mrSG"),
        o = n("7wIv"),
        s = n("vDqi"),
        r = n.n(s),
        a = n("2vnA");
      class l {
        constructor() {
          this.contents = a.m.map();
        }
      }
      Object(i.b)([a.m], l.prototype, "contents", void 0);
      class c {
        constructor() {
          this.m_Containers = a.m.map();
        }
        Init() {
          return Object(i.a)(this, void 0, void 0, function* () {
            this.AddSubscribedContainer("25769803776"),
              yield this.UpdatePaths();
          });
        }
        AddSubscribedContainer(e) {
          if (!this.m_Containers.has(e)) {
            let t = new l();
            (t.handle = e), this.m_Containers.set(e, t);
          }
        }
        UpdateContainer(e, t) {
          this.AddSubscribedContainer(e);
          let n = this.m_Containers.get(e);
          n.contents.clear(),
            t.entries.forEach((e) => {
              null != e.path && n.contents.set(e.path, e);
            });
        }
        QueryContainer(e) {
          return Object(i.a)(this, void 0, void 0, function* () {
            return new Promise(function (t, n) {
              r.a
                .get("/properties.json?container=" + e)
                .then((n) => {
                  t([e, n.data]);
                })
                .catch((t) => {
                  n([e, t]);
                });
            });
          });
        }
        UpdatePaths() {
          return Object(i.a)(this, void 0, void 0, function* () {
            let e = [];
            this.m_Containers.forEach((t) => {
              e.push(this.QueryContainer(t.handle));
            });
            try {
              (yield Promise.all(e)).forEach((e) => {
                2 != e.length
                  ? console.log(
                      "Failed to update container. ",
                      e.length,
                      "entries in array"
                    )
                  : "string" == typeof e[1]
                  ? console.log("Failed to update container ", e[0], ":", e[1])
                  : this.UpdateContainer(e[0], e[1]);
              });
            } catch (e) {
              throw (console.log(e), e);
            }
          });
        }
        GetAllActions(e) {
          if (!this.m_Containers.has(e)) return;
          let t = [];
          return (
            this.m_Containers.get(e).contents.forEach((e) => {
              "k_unActionPropertyTag" == e.type &&
                null != e.path &&
                t.push(e.path);
            }),
            t
          );
        }
        GetActionValue(e, t) {
          if (!this.m_Containers.has(e)) return;
          let n = this.m_Containers.get(e);
          if (!n.contents.has(t)) return;
          let i = n.contents.get(t);
          return "k_unActionPropertyTag" == i.type ? i.value : void 0;
        }
        GetAllInputValues(e) {
          if (!this.m_Containers.has(e)) return;
          let t = [];
          return (
            this.m_Containers.get(e).contents.forEach((e) => {
              "k_unInputValuePropertyTag" == e.type &&
                null != e.path &&
                t.push(e.path);
            }),
            t
          );
        }
        GetInputValue(e, t) {
          if (!this.m_Containers.has(e)) return;
          let n = this.m_Containers.get(e);
          if (!n.contents.has(t)) return;
          let i = n.contents.get(t);
          if ("k_unInputValuePropertyTag" != i.type) return;
          let o = i.value;
          return o.length < 1 ? void 0 : o[0];
        }
        GetScalarInputValue(e, t) {
          let n = this.GetInputValue(e, t);
          return null == n || "scalar" != n.type ? 0 : n.value;
        }
        GetBooleanInputValue(e, t) {
          let n = this.GetInputValue(e, t);
          return null != n && "boolean" == n.type && n.value;
        }
      }
      Object(i.b)([a.m], c.prototype, "m_Containers", void 0),
        Object(i.b)([o.bind], c.prototype, "AddSubscribedContainer", null),
        Object(i.b)([a.d], c.prototype, "UpdateContainer", null),
        Object(i.b)([o.bind], c.prototype, "GetAllActions", null),
        Object(i.b)([o.bind], c.prototype, "GetActionValue", null),
        Object(i.b)([o.bind], c.prototype, "GetAllInputValues", null),
        Object(i.b)([o.bind], c.prototype, "GetInputValue", null),
        Object(i.b)([o.bind], c.prototype, "GetScalarInputValue", null),
        Object(i.b)([o.bind], c.prototype, "GetBooleanInputValue", null);
      const d = new c();
      window.paths = d;
    },
    uFkT: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return u;
      });
      var i = n("mrSG"),
        o = n("2vnA"),
        s = n("vDqi"),
        r = n.n(s),
        a = n("7wIv"),
        l = n("GXif"),
        c = n("/i/y");
      class d {
        constructor() {
          (this.m_InputState = void 0),
            (this.m_KnownControllerTypes = o.m.map()),
            (this.m_mailbox = new c.c()),
            (this.m_bUpdateInputStateOnControllerTypChange = !1);
        }
        Init(e) {
          return (
            this.m_mailbox.Init("input_state"),
            this.m_mailbox.RegisterHandler(
              "controller_type_changed",
              this.OnControllerTypeChanged
            ),
            this.m_mailbox.RegisterHandler(
              "action_bindings_reloaded",
              this.OnActionBindingsReloaded
            ),
            null != e && (this.m_bUpdateInputStateOnControllerTypChange = e),
            this.GetInputState()
          );
        }
        OnActionBindingsReloaded() {
          this.GetInputState();
        }
        OnControllerTypeChanged(e) {
          this.UpdateControllerTypes(e.controller_types),
            (this.m_InputState.controller_types = e.controller_types),
            this.m_bUpdateInputStateOnControllerTypChange &&
              this.GetInputState();
        }
        get ConnectedDevices() {
          return null == this.m_InputState
            ? Array()
            : this.m_InputState.devices.filter(
                (e) =>
                  "TrackedDeviceClass_Controller" == e.class ||
                  "TrackedDeviceClass_HMD" == e.class ||
                  "TrackedDeviceClass_GenericTracker" == e.class
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
        GetControllerTypeInfo(e) {
          return this.m_InputState.controller_types.find(
            (t) => t.controller_type == e
          );
        }
        GetDeviceInfo(e) {
          for (let t of this.m_InputState.devices)
            if (t.root_path == e || t.device_path == e) return t;
          return null;
        }
        LocalizeControllerString(e, t) {
          let n = Object(l.c)("#" + t);
          return n != "#" + t
            ? n
            : e &&
              this.m_InputState &&
              this.m_InputState.localization.hasOwnProperty(e.resource_root) &&
              this.m_InputState.localization[e.resource_root].hasOwnProperty(
                t.toLowerCase()
              )
            ? this.m_InputState.localization[e.resource_root][t.toLowerCase()]
            : t;
        }
        LocalizeDriverString(e, t) {
          let n = Object(l.c)("#" + t);
          return n != "#" + t
            ? n
            : this.m_InputState &&
              this.m_InputState.localization.hasOwnProperty(e) &&
              this.m_InputState.localization[e].hasOwnProperty(t.toLowerCase())
            ? this.m_InputState.localization[e][t.toLowerCase()]
            : t;
        }
        UpdateControllerTypes(e) {
          this.m_KnownControllerTypes.clear();
          for (let t of e)
            this.m_KnownControllerTypes.set(t.controller_type, t);
        }
        GetInputState() {
          return Object(i.a)(this, void 0, void 0, function* () {
            yield new Promise(function (e, t) {
              r.a
                .get("/input/getstate.json")
                .then((t) => {
                  e(t.data);
                })
                .catch((e) => {
                  t(e);
                });
            }).then((e) => {
              for (let t of e.controller_types)
                t.controller_type = t.controller_type.toLowerCase();
              for (let t of e.devices)
                t.controller_type = t.controller_type.toLowerCase();
              this.UpdateControllerTypes(e.controller_types),
                (this.m_InputState = e);
            });
          });
        }
        get KnownControllerTypes() {
          return this.m_KnownControllerTypes;
        }
        FindDeviceClassForControllerType(e) {
          let t = this.GetControllerTypeInfo(e);
          return null == t ? void 0 : t.device_class;
        }
        FindRootPathForControllerType(e) {
          for (let t of this.m_InputState.devices)
            if (t.controller_type == e) return t.root_path;
          return null;
        }
      }
      Object(i.b)([o.m], d.prototype, "m_InputState", void 0),
        Object(i.b)([o.m], d.prototype, "m_KnownControllerTypes", void 0),
        Object(i.b)([a.bind], d.prototype, "OnActionBindingsReloaded", null),
        Object(i.b)([a.bind], d.prototype, "OnControllerTypeChanged", null),
        Object(i.b)([o.f], d.prototype, "ConnectedDevices", null),
        Object(i.b)([o.f], d.prototype, "ControllerTypes", null),
        Object(i.b)(
          [o.f],
          d.prototype,
          "ShouldSendSystemButtonToAllApps",
          null
        ),
        Object(i.b)([o.f], d.prototype, "ShowHiddenInputs", null),
        Object(i.b)([o.f], d.prototype, "IsSteamAvailable", null),
        Object(i.b)([o.f], d.prototype, "BDevMode", null),
        Object(i.b)([o.f], d.prototype, "IsValid", null),
        Object(i.b)([o.f], d.prototype, "CurrentUserPersonaName", null),
        Object(i.b)([a.bind], d.prototype, "GetControllerTypeInfo", null),
        Object(i.b)([a.bind], d.prototype, "LocalizeControllerString", null),
        Object(i.b)([a.bind], d.prototype, "LocalizeDriverString", null),
        Object(i.b)([o.d], d.prototype, "UpdateControllerTypes", null),
        Object(i.b)([o.d], d.prototype, "GetInputState", null),
        Object(i.b)([o.f], d.prototype, "KnownControllerTypes", null),
        Object(i.b)(
          [a.bind],
          d.prototype,
          "FindDeviceClassForControllerType",
          null
        );
      const u = new d();
      window.inputState = u;
    },
    uTck: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      var i = n("mrSG"),
        o = n("/i/y"),
        s = n("7wIv"),
        r = n.n(s),
        a = n("7uy8"),
        l = n("Q+Z6"),
        c = n("Gmup");
      class d {
        constructor() {
          var e, t;
          (this.m_mailbox = new o.c()),
            (this.m_dashboardSession = null),
            (this.m_dashboardSessionCount = 0),
            (this.m_lastDashboardSessionId = 0),
            this.m_mailbox.Init(
              null !=
                (t =
                  "ogs_client/" +
                  (null === (e = VRHTML) || void 0 === e
                    ? void 0
                    : e.VROverlay.ThisOverlayKey()))
                ? t
                : "unknown"
            ),
            this.m_mailbox.RegisterHandler(
              "set_dashboard_session_id",
              this.onSetDashboardSessionId
            );
        }
        static get instance() {
          return u || (u = new d()), u;
        }
        onSetDashboardSessionId(e) {
          var t;
          (null === (t = VRHTML) || void 0 === t
            ? void 0
            : t.VROverlay.ThisOverlayKey()) != a.P &&
            (this.m_lastDashboardSessionId = e.id);
        }
        AddRow(e, t) {
          if ("object" != typeof t)
            throw new Error(
              "COGS.AddRow requires an object for its fields argument"
            );
          let n = { type: "add_ogs_row", table: e, fields: t };
          this.m_mailbox.SendMessage("ogs", n);
        }
        GetSource() {
          var e;
          switch (
            null === (e = VRHTML) || void 0 === e ? void 0 : e.Environment()
          ) {
            case o.H.Desktop:
              return "desktop";
            case o.H.Overlay:
              return VRHTML.VROverlay.ThisOverlayKey();
            default:
              return "unknown";
          }
        }
        RecordUIEvent(e, t, n) {
          this.AddRow("SteamVRUIEvent", {
            Source: this.GetSource(),
            DashboardSessionId: this.m_lastDashboardSessionId,
            EventNameID: e,
            Cause: t,
            Param: n,
          });
        }
        StartDashboardSession(e) {
          var t;
          this.m_dashboardSession && this.CommitDashboardSession();
          const n = l.d.settings.get(a.p);
          (this.m_lastDashboardSessionId = ++this.m_dashboardSessionCount),
            (this.m_dashboardSession = {
              dashboardSessionId: this.m_lastDashboardSessionId,
              summonedBy: e,
              appAtStart:
                null === (t = VRHTML) || void 0 === t
                  ? void 0
                  : t.VRApplications.GetSceneApplicationKey(),
              position: null != n ? c.b[n] : void 0,
            }),
            (this.m_dashboardStartTime = new Date().getTime()),
            this.BroadcastDashboardSessionId();
        }
        EndDashboardSession(e) {
          this.m_dashboardSession
            ? this.m_dashboardEndTimer
              ? console.log("Somebody called EndDashboardSession twice")
              : (this.RecordDashboardSessionDuration(),
                (this.m_dashboardSession.dismissedBy = e),
                (this.m_dashboardEndTimer = setTimeout(() => {
                  this.CommitDashboardSession();
                }, 5e3)))
            : console.log(
                "Somebody called EndDashboardSession when one wasn't running"
              );
        }
        RecordDashboardSessionDuration() {
          this.m_dashboardSession.duration ||
            (this.m_dashboardSession.duration = Math.round(
              (new Date().getTime() - this.m_dashboardStartTime) / 1e3
            ));
        }
        CommitDashboardSession() {
          var e;
          this.m_dashboardEndTimer &&
            (clearTimeout(this.m_dashboardEndTimer),
            (this.m_dashboardEndTimer = null)),
            (this.m_dashboardSession.appAtEnd =
              null === (e = VRHTML) || void 0 === e
                ? void 0
                : e.VRApplications.GetSceneApplicationKey()),
            this.AddRow("SteamVRDashboardSession", this.m_dashboardSession),
            (this.m_dashboardSession = null),
            (this.m_dashboardStartTime = null),
            (this.m_lastDashboardSessionId = 0);
        }
        BroadcastDashboardSessionId() {
          let e = {
            type: "set_dashboard_session_id",
            id: this.m_dashboardSession
              ? this.m_dashboardSession.dashboardSessionId
              : 0,
          };
          this.m_mailbox.SendMessage("ogs_client", e);
        }
      }
      Object(i.b)([r.a], d.prototype, "onSetDashboardSessionId", null);
      let u = null;
    },
    vzqD: function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return f;
      }),
        n.d(t, "e", function () {
          return v;
        }),
        n.d(t, "a", function () {
          return O;
        }),
        n.d(t, "g", function () {
          return C;
        }),
        n.d(t, "f", function () {
          return w;
        }),
        n.d(t, "b", function () {
          return R;
        }),
        n.d(t, "c", function () {
          return E;
        });
      var i,
        o = n("mrSG"),
        s = n("q1tI"),
        r = n("2vnA"),
        a = n("7wIv"),
        l = n("GXif"),
        c = n("Q+Z6"),
        d = n("TbT/"),
        u = n("6YgL"),
        p = n("/i/y"),
        h = n("okNM"),
        m = n("hcOo"),
        b = n("7uy8"),
        g = n("GxMB"),
        S = n("X3sx");
      function _() {
        VRHTML
          ? VRHTML.PromptUserForDirectMode(!0)
          : window.open("vrmonitor://directmode/enable");
      }
      const f = Object(h.a)(() => {
          if (
            !c.d.systemInfo ||
            0 == c.d.systemInfo.refresh_rates.actual_display_frequency
          )
            return null;
          if (c.d.systemInfo.refresh_rates.supported_rates.length > 1)
            return s.createElement(d.k, {
              name: "/settings/steamvr/preferredRefreshRate",
              label: Object(l.c)("#Settings_Video_RefreshRate_Label_Hz"),
              items: c.d.systemInfo.refresh_rates.supported_rates.map((e) => ({
                value: e,
                sLabel: Math.round(e).toString(),
              })),
            });
          {
            const e = c.d.systemInfo.refresh_rates.supports_multiple_rates,
              t = c.d.systemInfo.extended_mode,
              n = Math.round(
                c.d.systemInfo.refresh_rates.actual_display_frequency
              );
            return s.createElement(
              d.c,
              {
                className: "SettingsItem",
                title: e
                  ? null
                  : Object(l.c)("#Settings_Video_RefreshRate_OneSupported"),
              },
              s.createElement(
                "div",
                { className: "Label" },
                Object(l.c)("#Settings_Video_RefreshRate_Header")
              ),
              s.createElement(
                "div",
                { className: Object(m.a)("Label", ["SubsectionStem", e]) },
                n + Object(l.c)("#Settings_Video_RefreshRate_HzSuffix")
              ),
              e &&
                s.createElement(
                  "div",
                  { className: "Subsection WithStem" },
                  t &&
                    Object(l.c)(
                      "#Settings_Video_RefreshRate_NotAvailableExtended"
                    ),
                  t &&
                    Object(p.i)() != p.H.Overlay &&
                    s.createElement(
                      u.a,
                      { className: "ButtonControl", onClick: _ },
                      Object(l.c)(
                        "#Settings_Video_RefreshRate_EnableDirectModeAction"
                      )
                    ),
                  !t && Object(l.c)("#Settings_Video_RefreshRate_NotFound")
                )
            );
          }
        }),
        v = Object(h.a)(() => {
          const e = c.d.settings.get(b.N),
            t = c.d.settings.get(b.O);
          let n = [],
            i = c.d.settings.get(b.w);
          if ((i > 0 ? n.push(i) : n.push(1), null === e || null === t))
            return null;
          let o = null;
          if (
            c.d.systemInfo &&
            null != c.d.systemInfo.render_target_size.width &&
            0 != c.d.systemInfo.render_target_size.height
          ) {
            const e = c.d.SliderposToSupersample(t);
            let n = Math.max(
                512,
                Math.floor(
                  c.d.systemInfo.render_target_size.width * Math.sqrt(e) + 0.5
                )
              ),
              i = Math.max(
                512,
                Math.floor(
                  c.d.systemInfo.render_target_size.height * Math.sqrt(e) + 0.5
                )
              );
            (n = 4 * Math.trunc(n / 4)),
              (i = 4 * Math.trunc(i / 4)),
              (o = Object(l.c)(
                "#Settings_Advanced_Supersampling_WidthByHeight",
                n,
                i
              ));
          }
          return s.createElement(d.n, {
            name: b.N,
            label: Object(l.c)("#Settings_Advanced_Supersampling_Header"),
            onLabel: Object(l.c)("#Settings_Advanced_Supersampling_Auto"),
            offLabel: Object(l.c)("#Settings_Advanced_Supersampling_Custom"),
            title: e ? "" : Object(l.c)("#Explanation_Supersampling_Header"),
            swapOnOff: !0,
            offSubsection: s.createElement(
              s.Fragment,
              null,
              s.createElement(
                d.c,
                { className: "SettingsItem" },
                s.createElement(
                  "div",
                  { className: "Label" },
                  Object(l.c)(
                    "#Settings_Advanced_Supersampline_ResolutionPerEye"
                  )
                ),
                s.createElement(
                  "div",
                  { className: "Label Right Resolution" },
                  s.createElement("div", { className: "Dimensions" }, o),
                  s.createElement(
                    "div",
                    { className: "Percentage" },
                    Math.round(100 * t).toString() + "%"
                  )
                ),
                s.createElement(d.m, {
                  min: 0.2,
                  max: 5,
                  step: 0.02,
                  detents: n,
                  value: t,
                  onChange: (e) => c.d.SetSettingsValue(b.O, e),
                })
              )
            ),
          });
        });
      let y = class extends s.Component {
        constructor(e) {
          super(e),
            (this.state = { bShowingModal: !1 }),
            (this.m_sUniqueIdForFadeSupression = Math.random().toString());
        }
        componentWillUnmount() {
          this.state.bShowingModal &&
            c.d.SetDashboardFadeSupression(
              this.m_sUniqueIdForFadeSupression,
              !1
            );
        }
        showModal() {
          this.setState({ bShowingModal: !0 }),
            c.d.SetDashboardFadeSupression(
              this.m_sUniqueIdForFadeSupression,
              !0
            );
        }
        hideModal() {
          this.setState({ bShowingModal: !1 }),
            c.d.SetDashboardFadeSupression(
              this.m_sUniqueIdForFadeSupression,
              !1
            );
        }
        render() {
          if (!VRHTML) return null;
          const e = VRHTML.VRProperties.GetStringProperty(
            "/user/head",
            p.y.HmdColumnCorrectionSettingPrefix_String
          );
          if (!e) return null;
          if ("firmware_update_required" == e)
            return s.createElement(
              d.c,
              {
                title: Object(l.c)("#DisplaySettings_ColumnCorrectionDesc"),
                className: "SettingsItem",
                visibility: this.props.visibility,
              },
              s.createElement(
                "div",
                { className: "Label" },
                Object(l.c)("#DisplaySettings_ColumnCorrection")
              ),
              s.createElement(
                "div",
                { className: "Subsection WithStem" },
                s.createElement(
                  "div",
                  { className: "Label" },
                  Object(l.c)("#DisplaySettings_Error_FirmwareUpdateNeeded")
                )
              )
            );
          {
            let t = c.d.settings.get(b.y);
            const n = "/settings/driver_lighthouse/" + e + "_L",
              i = "/settings/driver_lighthouse/" + e + "_R";
            let o = c.d.settings.get(n);
            null == o && (o = 0);
            let r = c.d.settings.get(i);
            return (
              null == r && (r = 0),
              s.createElement(
                d.c,
                {
                  className: "SettingsItem",
                  title: Object(l.c)("#DisplaySettings_ColumnCorrectionDesc"),
                  visibility: this.props.visibility,
                },
                s.createElement(
                  "div",
                  { className: "Label" },
                  Object(l.c)("#DisplaySettings_IndexColumnCorrection")
                ),
                s.createElement(
                  u.a,
                  { className: "ButtonControl", onClick: this.showModal },
                  Object(l.c)("#DisplaySettings_ColumnCorrectionEdit")
                ),
                this.state.bShowingModal &&
                  s.createElement(
                    d.i,
                    {
                      onDismissRequested: this.hideModal,
                      allowableParentSelectors: [".SettingsMain"],
                      header: Object(l.c)(
                        "#DisplaySettings_IndexColumnCorrection"
                      ),
                      footer: s.createElement(d.j, {
                        showResetButton: !0,
                        onResetRequested: () => {
                          c.d.SetSettingsValue(b.y, 1),
                            c.d.SetSettingsValue(n, 0),
                            c.d.SetSettingsValue(i, 0);
                        },
                        onDismissRequested: this.hideModal,
                      }),
                    },
                    s.createElement(d.n, {
                      value: 0 != t,
                      title: Object(l.c)(
                        "#DisplaySettings_ColumnCorrectionDesc"
                      ),
                      label: Object(l.c)("#DisplaySettings_ColumnCorrection"),
                      offLabel: Object(l.c)(
                        "#DisplaySettings_ColumnCorrectionOff"
                      ),
                      onLabel: Object(l.c)(
                        "#DisplaySettings_ColumnCorrectionAuto"
                      ),
                      onChange: (e) => c.d.SetSettingsValue(b.y, e ? 1 : 0),
                    }),
                    s.createElement(d.m, {
                      label: Object(l.c)(
                        "#DisplaySettings_ColumnCorrectionBiasLeft"
                      ),
                      min: -10,
                      max: 10,
                      step: 1,
                      value: o,
                      detents: [0],
                      valueStyleVariant: S.c.OnHandle,
                      renderValue: (e) => e.toFixed(0),
                      onChange: (e) => c.d.SetSettingsValue(n, e),
                    }),
                    s.createElement(d.m, {
                      label: Object(l.c)(
                        "#DisplaySettings_ColumnCorrectionBiasRight"
                      ),
                      min: -10,
                      max: 10,
                      step: 1,
                      value: r,
                      detents: [0],
                      valueStyleVariant: S.c.OnHandle,
                      renderValue: (e) => e.toFixed(0),
                      onChange: (e) => c.d.SetSettingsValue(i, e),
                    })
                  )
              )
            );
          }
        }
      };
      Object(o.b)([a.bind], y.prototype, "showModal", null),
        Object(o.b)([a.bind], y.prototype, "hideModal", null),
        (y = Object(o.b)([h.a], y));
      const O = Object(h.a)(() => {
        var e;
        if (!VRHTML) return null;
        if (
          !VRHTML.VRProperties.GetBoolProperty(
            "/user/head",
            p.y.DisplaySupportsAnalogGain_Bool
          )
        )
          return null;
        let t = c.d.settings.get(b.a);
        null == t && (t = 1);
        const n =
          null !=
          (e = VRHTML.VRProperties.GetFloatProperty(
            "/user/head",
            p.y.DisplayMaxAnalogGain_Float
          ))
            ? e
            : 1;
        return s.createElement(
          d.c,
          { className: "SettingsItem" },
          s.createElement(
            "div",
            { className: "Label" },
            Object(l.c)("#DisplaySettings_DisplayBrightness")
          ),
          s.createElement(d.m, {
            min: 20,
            max: 100 * n,
            value:
              ((i = t),
              i < 0 ? 0 : i < 1 ? 100 * Math.pow(i, 1 / 2.2) : 100 * i),
            detents: [100],
            valueStyleVariant: S.c.OnHandle,
            renderValue: (e) => e.toFixed(0) + "%",
            onChange: (e) =>
              c.d.SetSettingsValue(
                b.a,
                (function (e) {
                  return e < 100 ? Math.pow(e / 100, 2.2) : e / 100;
                })(e)
              ),
            dashboardFadeSupression: !0,
          })
        );
        var i;
      });
      class A extends s.Component {
        constructor(e) {
          super(e);
        }
        render() {
          var e;
          const t =
            null === (e = VRHTML) || void 0 === e
              ? void 0
              : e.GetRecommendedOverlayRenderQuality();
          return s.createElement(d.h, {
            name: "/settings/steamvr/overlayRenderQuality_2",
            label: Object(l.c)("#Settings_OverlayRenderQuality"),
            items: [
              {
                value: p.q.Auto,
                sLabel:
                  void 0 !== t
                    ? Object(l.c)(
                        "#Settings_Auto_Parenthesized",
                        Object(l.c)("#Settings_" + p.q[t])
                      )
                    : Object(l.c)("#Settings_Auto"),
              },
              g.b.Separator,
              { value: p.q.Low, sLabel: Object(l.c)("#Settings_Low") },
              { value: p.q.Medium, sLabel: Object(l.c)("#Settings_Medium") },
              { value: p.q.High, sLabel: Object(l.c)("#Settings_High") },
            ],
            visibility: d.d.Advanced,
          });
        }
      }
      class C extends s.Component {
        constructor(e) {
          super(e);
        }
        render() {
          return VRHTML &&
            VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              p.y.DisplayAllowNightMode_Bool
            )
            ? s.createElement(d.n, {
                label: Object(l.c)("#Settings_NightModeCheck"),
                title: Object(l.c)("#Settings_NightModeDesc"),
                value: VRHTML.VRDashboardManager.GetNightModeEnabled(),
                onChange: (e) => {
                  var t;
                  null === (t = VRHTML) ||
                    void 0 === t ||
                    t.VRDashboardManager.SetNightModeEnabled(e),
                    this.forceUpdate();
                },
              })
            : null;
        }
      }
      const w = () => {
        if (!VRHTML) return null;
        if (
          VRHTML.VRProperties.GetBoolProperty(
            "/user/head",
            p.y.HasDriverDirectModeComponent_Bool
          )
        ) {
          return "oculus" ===
            VRHTML.VRProperties.GetStringProperty(
              "/user/head",
              p.y.TrackingSystemName_String
            )
            ? null
            : s.createElement(d.n, {
                name: "/settings/steamvr/motionSmoothing",
                label: Object(l.c)("#Settings_Advanced_MotionSmoothing_Header"),
                title: Object(l.c)(
                  "#Settings_Advanced_MotionSmoothing_Description"
                ),
              });
        }
        if (
          VRHTML.VRClientInternal.GetGraphicsHardwareVendorInfo()
            .bSupportsMotionSmoothing
        )
          return s.createElement(d.n, {
            name: "/settings/steamvr/motionSmoothing",
            label: Object(l.c)("#Settings_Advanced_MotionSmoothing_Header"),
            title: Object(l.c)(
              "#Settings_Advanced_MotionSmoothing_Description"
            ),
          });
        const e =
            c.d.systemInfo &&
            c.d.systemInfo.os_type > 0 &&
            c.d.systemInfo.os_type < c.e,
          t = Object(l.c)(
            e
              ? "#Settings_Advanced_MotionSmoothing_Disabled_Win7"
              : "#Settings_Advanced_MotionSmoothing_Disabled"
          );
        return s.createElement(
          d.c,
          { className: "SettingsItem", title: t },
          s.createElement(
            "div",
            { className: "Label" },
            Object(l.c)("#Settings_Advanced_MotionSmoothing_Header")
          ),
          s.createElement(
            "div",
            { className: "Label Right" },
            Object(l.c)("#Settings_NotSupported")
          )
        );
      };
      var j, M;
      !(function (e) {
        (e[(e.UseGlobal = 0)] = "UseGlobal"),
          (e[(e.ForceOn = 1)] = "ForceOn"),
          (e[(e.ForceOff = 2)] = "ForceOff"),
          (e[(e.ForceAlwaysOn = 3)] = "ForceAlwaysOn");
      })(j || (j = {})),
        (function (e) {
          (e[(e.Off = 0)] = "Off"),
            (e[(e.Fine = 1)] = "Fine"),
            (e[(e.Normal = 2)] = "Normal"),
            (e[(e.Extreme = 3)] = "Extreme");
        })(M || (M = {}));
      const T = {
        [M.Fine]: { min: 0.8, max: 1.25, step: 0.001 },
        [M.Normal]: { min: 0.5, max: 2, step: 0.01 },
        [M.Extreme]: { min: 0.1, max: 10, step: 0.1 },
        [M.Off]: { min: 0, max: 100, step: 1 },
      };
      let R = (i = class extends s.Component {
        constructor(e) {
          super(e),
            (this.m_routeObservingAutorunDisposer = null),
            (this.m_refAppSelectDropdown = s.createRef()),
            (this.m_initialAppState = null),
            (this.state = {
              currentApp: null,
              nResolutionMultiplier: null,
              nFovScaleMultiplier: null,
              bShowRefreshRateOptions: null,
              nPreferredRefreshRate: null,
              eSmoothingMode: null,
              disableAsyncReprojection: null,
              bShowThrottleOptions: null,
              nFramesToThrottle: null,
              nAdditionalPrediction: null,
              eWorldScaleRange: M.Off,
              flWorldScaleMultiplier: null,
            });
        }
        componentDidMount() {
          this.m_routeObservingAutorunDisposer = Object(r.e)(() => {
            var e;
            if (this.shouldShowModal) {
              const t = this.currentRouteAppKey;
              t &&
                (null === (e = this.m_refAppSelectDropdown.current) ||
                  void 0 === e ||
                  e.setCurrentApp(t));
            }
          });
        }
        componentWillUnmount() {
          this.m_routeObservingAutorunDisposer &&
            (this.m_routeObservingAutorunDisposer(),
            (this.m_routeObservingAutorunDisposer = null));
        }
        static OpenDeepLink(e, t) {
          var n;
          c.d.setRoute(e, i.PAGE_SECTION, t ? [t] : null),
            null === (n = VRHTML) || void 0 === n || n.ShowSettingsUI();
        }
        get shouldShowModal() {
          return c.d.routePageSection == i.PAGE_SECTION;
        }
        get currentRouteAppKey() {
          const e = c.d.routePageSectionParams;
          return e.length >= 1 ? e[0] : null;
        }
        get enableThrottleOverrideSettings() {
          if (!VRHTML) return !1;
          if (
            VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              p.y.HasDriverDirectModeComponent_Bool
            )
          ) {
            return (
              "lighthouse" ===
              VRHTML.VRProperties.GetStringProperty(
                "/user/head",
                p.y.TrackingSystemName_String
              )
            );
          }
          return !0;
        }
        get enableMotionSmoothingOverrideSettings() {
          if (!VRHTML) return !1;
          if (
            VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              p.y.HasDriverDirectModeComponent_Bool
            )
          ) {
            return (
              "oculus" !==
              VRHTML.VRProperties.GetStringProperty(
                "/user/head",
                p.y.TrackingSystemName_String
              )
            );
          }
          return VRHTML.VRClientInternal.GetGraphicsHardwareVendorInfo()
            .bSupportsMotionSmoothing;
        }
        get enableLegacyReprojectionSettings() {
          return (
            !!VRHTML &&
            !VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              p.y.HasDriverDirectModeComponent_Bool
            )
          );
        }
        get worldScaleRangeMin() {
          return T[this.state.eWorldScaleRange].min;
        }
        get worldScaleRangeMax() {
          return T[this.state.eWorldScaleRange].max;
        }
        get worldScaleRangeStep() {
          return T[this.state.eWorldScaleRange].step;
        }
        onApplicationDropdownChange(e) {
          this.setState((t, n) => {
            var i, o;
            return t.currentApp === e
              ? null
              : (e && this.fetchAppState(e.key),
                c.d.setRoutePageSectionParams([
                  ((o = null === (i = e) || void 0 === i ? void 0 : i.key),
                  null != o ? o : ""),
                ]),
                {
                  currentApp: e,
                  nResolutionMultiplier: null,
                  nFovScaleMultiplier: null,
                  bShowRefreshRateOptions: null,
                  nPreferredRefreshRate: null,
                  eSmoothingMode: null,
                  disableAsyncReprojection: null,
                });
          });
        }
        updateAppState(e) {
          var t, n;
          if (void 0 !== e.resolution) {
            let i = null != (t = e.throttling) ? t : 0,
              o = null != (n = e.prediction) ? n : 0,
              s = M.Off;
            1 !== e.worldscale &&
              (s =
                Math.round(1e3 * e.worldscale) % 10 != 0
                  ? M.Fine
                  : e.worldscale < T[M.Normal].min ||
                    e.worldscale > T[M.Normal].max
                  ? M.Extreme
                  : M.Normal),
              (this.m_initialAppState = {
                nResolutionMultiplier: e.resolution / 100,
                nFovScaleMultiplier: e.fovscale / 100,
                bShowRefreshRateOptions: e.preferred_refresh_rate > 0,
                nPreferredRefreshRate: e.preferred_refresh_rate,
                eSmoothingMode: e.smoothing,
                disableAsyncReprojection: e.disable_async_reprojection,
                bShowThrottleOptions:
                  void 0 !== e.throttling || void 0 !== e.prediction,
                nFramesToThrottle: i,
                nAdditionalPrediction: o - i,
                eWorldScaleRange: s,
                flWorldScaleMultiplier: e.worldscale ? e.worldscale : 1,
              }),
              this.setState(this.m_initialAppState);
          }
        }
        fetchAppState(e) {
          c.d.GetAppSettings(e).then(this.updateAppState);
        }
        setAppState(e, t) {
          if (null != this.state.currentApp) {
            let n = {};
            (n[e] = t), c.d.SetAppSettings(this.state.currentApp.key, n);
          }
        }
        get computedResolution() {
          let e = c.d.settings.get(b.N)
            ? c.d.settings.get(b.O)
            : c.d.settings.get(b.w);
          if (null == e || null == this.state.nResolutionMultiplier) return "";
          let t = c.d.SliderposToSupersample(this.state.nResolutionMultiplier);
          if (
            c.d.systemInfo &&
            null != c.d.systemInfo.render_target_size.width &&
            0 != c.d.systemInfo.render_target_size.height
          ) {
            let n = Math.max(
                512,
                Math.floor(
                  c.d.systemInfo.render_target_size.width * Math.sqrt(e * t) +
                    0.5
                )
              ),
              i = Math.max(
                512,
                Math.floor(
                  c.d.systemInfo.render_target_size.height * Math.sqrt(e * t) +
                    0.5
                )
              );
            return (
              (n = 4 * Math.trunc(n / 4)),
              (i = 4 * Math.trunc(i / 4)),
              Object(l.c)(
                "#Settings_Advanced_Supersampling_WidthByHeight",
                n,
                i
              )
            );
          }
          return "";
        }
        onResolutionSliderChange(e) {
          this.setState({ nResolutionMultiplier: e }),
            this.setAppState("resolution", 100 * e);
        }
        onFovScaleSliderChange(e) {
          this.setState({ nFovScaleMultiplier: e }),
            this.setAppState("fovscale", 100 * e);
        }
        onMotionSmoothChange(e) {
          this.setState({ eSmoothingMode: e }),
            this.setAppState("smoothing", e);
        }
        onRefreshRateOverrideChange(e) {
          this.allowPerAppRefreshRate &&
            (this.setState({ bShowRefreshRateOptions: e }),
            this.setAppState(
              "preferred_refresh_rate",
              e ? this.state.nPreferredRefreshRate : 0
            ));
        }
        onRefreshRateChange(e) {
          this.allowPerAppRefreshRate &&
            (this.setState({ nPreferredRefreshRate: e }),
            this.setAppState(
              "preferred_refresh_rate",
              this.state.bShowRefreshRateOptions ? e : 0
            ));
        }
        onDisableAsyncReprojection(e) {
          this.setState({ disableAsyncReprojection: e }),
            this.setAppState("disable_async_reprojection", e);
        }
        onShowThrottleOptions(e) {
          var t, n;
          if (
            (this.setState({ bShowThrottleOptions: e }),
            this.setAppState("override_throttling", e),
            e)
          ) {
            let e = null != (t = this.state.nFramesToThrottle) ? t : 0,
              i = null != (n = this.state.nAdditionalPrediction) ? n : 0;
            this.setAppState("throttling", e),
              this.setAppState("prediction", e + i);
          }
        }
        onThrottleSliderChange(e) {
          var t;
          this.setState({ nFramesToThrottle: e }),
            this.setAppState("throttling", e);
          let n = null != (t = this.state.nAdditionalPrediction) ? t : 0;
          this.setAppState("prediction", e + n);
        }
        onPredictionSliderChange(e) {
          var t;
          this.setState({ nAdditionalPrediction: e });
          let n = null != (t = this.state.nFramesToThrottle) ? t : 0;
          this.setAppState("prediction", e + n);
        }
        onWorldScaleRangeChange(e) {
          this.setState({
            eWorldScaleRange: e,
            flWorldScaleMultiplier: Math.max(
              T[e].min,
              Math.min(T[e].max, this.state.flWorldScaleMultiplier)
            ),
          }),
            this.setAppState(
              "worldscale",
              e == M.Off ? 1 : this.state.flWorldScaleMultiplier
            );
        }
        onWorldScaleMultiplierSliderChange(e) {
          this.setState({ flWorldScaleMultiplier: e }),
            this.setAppState("worldscale", e);
        }
        hasCurrentApp() {
          return null != this.state.currentApp;
        }
        resetAppToDefaults() {
          c.d
            .ResetAppSettings(this.state.currentApp.key)
            .then(this.updateAppState);
        }
        show() {
          c.d.setRoutePageSection(i.PAGE_SECTION);
        }
        close() {
          c.d.setRoutePageSection(null);
        }
        get allowPerAppRefreshRate() {
          return !!c.d.settings.get("/settings/internal/enablePerAppFPS");
        }
        get currentRefreshRate() {
          return c.d.settings.get("/settings/steamvr/preferredRefreshRate");
        }
        render() {
          var e, t;
          let n = null;
          return (
            this.state.eSmoothingMode == j.ForceAlwaysOn &&
              (n = s.createElement(
                s.Fragment,
                null,
                Object(l.c)(
                  "#Settings_PerApplication_MotionSmoothing_AlwaysOn_Desc"
                )
              )),
            s.createElement(
              s.Fragment,
              null,
              s.createElement(
                d.c,
                { className: "SettingsItem" },
                s.createElement(
                  u.a,
                  { className: "ButtonControl", onClick: this.show },
                  Object(l.c)("#Settings_PerApplication_VideoSettings")
                )
              ),
              this.shouldShowModal &&
                s.createElement(
                  d.i,
                  {
                    className: "AppVideoModal",
                    onDismissRequested: this.close,
                    header: s.createElement(
                      s.Fragment,
                      null,
                      s.createElement(
                        "h1",
                        null,
                        Object(l.c)("#Settings_ManageVideoSettingsForApp")
                      ),
                      s.createElement(d.a, {
                        ref: this.m_refAppSelectDropdown,
                        stateKey: "settings_applications",
                        defaultAppKey:
                          ((e = this.currentRouteAppKey),
                          null != e
                            ? e
                            : null === (t = VRHTML) || void 0 === t
                            ? void 0
                            : t.VRApplications.GetSceneApplicationKey()),
                        showOverlays: !1,
                        defaultLabel: Object(l.c)(
                          "#Settings_PerApplication_ChooseApplication"
                        ),
                        onChange: this.onApplicationDropdownChange,
                      })
                    ),
                    footer: s.createElement(d.j, {
                      showResetButton: this.hasCurrentApp(),
                      onResetRequested: this.resetAppToDefaults,
                      onDismissRequested: this.close,
                    }),
                  },
                  this.hasCurrentApp() &&
                    s.createElement(
                      s.Fragment,
                      null,
                      this.enableMotionSmoothingOverrideSettings &&
                        null !== this.state.eSmoothingMode &&
                        !this.state.disableAsyncReprojection &&
                        s.createElement(d.h, {
                          label: Object(l.c)(
                            "#Settings_Advanced_MotionSmoothing_Header"
                          ),
                          items: [
                            {
                              value: j.UseGlobal,
                              sLabel: Object(l.c)(
                                "#Settings_PerApplication_MotionSmoothing_Global"
                              ),
                            },
                            {
                              value: j.ForceOn,
                              sLabel: Object(l.c)(
                                "#Settings_PerApplication_MotionSmoothing_On"
                              ),
                            },
                            {
                              value: j.ForceOff,
                              sLabel: Object(l.c)(
                                "#Settings_PerApplication_MotionSmoothing_Off"
                              ),
                            },
                            {
                              value: j.ForceAlwaysOn,
                              sLabel: Object(l.c)(
                                "#Settings_PerApplication_MotionSmoothing_AlwaysOn"
                              ),
                            },
                          ],
                          value: this.state.eSmoothingMode,
                          onChange: this.onMotionSmoothChange,
                          subsection: n,
                        }),
                      null !== this.state.nResolutionMultiplier &&
                        s.createElement(
                          d.c,
                          {
                            title: Object(l.c)(
                              "#Settings_PerApplication_AppResHeader",
                              Object(l.c)("#Settings_SectionTitle_General")
                            ),
                            className: "SettingsItem",
                          },
                          s.createElement(
                            "div",
                            { className: "Label" },
                            Object(l.c)("#Settings_PerApplication_AppResTitle")
                          ),
                          s.createElement(
                            "div",
                            { className: "SubsectionStem Label Resolution" },
                            s.createElement(
                              "div",
                              { className: "Dimensions" },
                              this.computedResolution
                            ),
                            s.createElement(
                              "div",
                              { className: "Percentage" },
                              Math.round(
                                100 * this.state.nResolutionMultiplier
                              ).toString() + "%"
                            )
                          ),
                          s.createElement(
                            "div",
                            { className: "Subsection WithStem" },
                            s.createElement(d.m, {
                              min: c.b,
                              max: c.a,
                              step: c.c,
                              value: this.state.nResolutionMultiplier,
                              detents: [1],
                              onChange: this.onResolutionSliderChange,
                            })
                          )
                        ),
                      null !== this.state.nFovScaleMultiplier &&
                        (c.d.showAdvancedSettings ||
                          (this.m_initialAppState &&
                            1 != this.m_initialAppState.nFovScaleMultiplier)) &&
                        s.createElement(
                          d.c,
                          {
                            title: Object(l.c)(
                              "#Settings_PerApplication_FovScale_Description"
                            ),
                            className: "SettingsItem Advanced",
                          },
                          s.createElement(
                            "div",
                            { className: "Label" },
                            Object(l.c)(
                              "#Settings_PerApplication_FovScale_Label"
                            )
                          ),
                          s.createElement(
                            "div",
                            { className: "SubsectionStem Label Resolution" },
                            s.createElement(
                              "div",
                              { className: "Dimensions" },
                              Object(l.c)(
                                "#Settings_PerApplication_FovScale_Multiplier"
                              )
                            ),
                            s.createElement(
                              "div",
                              { className: "Percentage" },
                              Math.round(
                                100 * this.state.nFovScaleMultiplier
                              ).toString() + "%"
                            )
                          ),
                          s.createElement(
                            "div",
                            { className: "Subsection WithStem" },
                            s.createElement(d.m, {
                              min: 0.5,
                              max: 1,
                              step: 0.01,
                              value: this.state.nFovScaleMultiplier,
                              onChange: this.onFovScaleSliderChange,
                            })
                          )
                        ),
                      null !== this.state.flWorldScaleMultiplier &&
                        (c.d.showAdvancedSettings ||
                          (this.m_initialAppState &&
                            this.m_initialAppState.eWorldScaleRange !==
                              M.Off)) &&
                        s.createElement(
                          d.c,
                          {
                            title: Object(l.c)(
                              "#Settings_PerApplication_WorldScale_Description"
                            ),
                            className: "SettingsItem Advanced",
                          },
                          s.createElement(
                            "div",
                            { className: "Label" },
                            Object(l.c)(
                              "#Settings_PerApplication_WorldScale_Label"
                            )
                          ),
                          s.createElement(d.h, {
                            items: [
                              {
                                value: M.Off,
                                sLabel: Object(l.c)(
                                  "#Settings_PerApplication_WorldScale_Off"
                                ),
                              },
                              {
                                value: M.Fine,
                                sLabel: Object(l.c)(
                                  "#Settings_PerApplication_WorldScale_Fine"
                                ),
                              },
                              {
                                value: M.Normal,
                                sLabel: Object(l.c)(
                                  "#Settings_PerApplication_WorldScale_Normal"
                                ),
                              },
                              {
                                value: M.Extreme,
                                sLabel: Object(l.c)(
                                  "#Settings_PerApplication_WorldScale_Extreme"
                                ),
                              },
                            ],
                            value: this.state.eWorldScaleRange,
                            onChange: this.onWorldScaleRangeChange,
                          })
                        ),
                      this.state.eWorldScaleRange !== M.Off &&
                        s.createElement(
                          d.c,
                          { className: "SettingsItem Advanced" },
                          s.createElement("div", { className: "Label" }),
                          s.createElement(
                            "div",
                            { className: "SubsectionStem Label Resolution" },
                            s.createElement(
                              "div",
                              { className: "Dimensions" },
                              Object(l.c)(
                                "#Settings_PerApplication_WorldScale_Range",
                                100 * this.worldScaleRangeMin,
                                100 * this.worldScaleRangeMax
                              )
                            ),
                            s.createElement(
                              "div",
                              { className: "Percentage" },
                              (
                                Math.round(
                                  1e3 * this.state.flWorldScaleMultiplier
                                ) / 10
                              ).toString() + "%"
                            )
                          ),
                          s.createElement(
                            "div",
                            { className: "Subsection WithStem" },
                            s.createElement(d.m, {
                              min: this.worldScaleRangeMin,
                              max: this.worldScaleRangeMax,
                              step: this.worldScaleRangeStep,
                              value: this.state.flWorldScaleMultiplier,
                              detents: [1],
                              onChange: this.onWorldScaleMultiplierSliderChange,
                            }),
                            s.createElement(
                              "div",
                              { className: "SettingsItemValueLabel Fixed" },
                              Object(l.c)(
                                "#Settings_PerApplication_WorldScale_Warning"
                              )
                            )
                          )
                        ),
                      this.allowPerAppRefreshRate &&
                        c.d.systemInfo &&
                        c.d.systemInfo.refresh_rates.actual_display_frequency >
                          0 &&
                        c.d.systemInfo.refresh_rates.supported_rates.length >
                          1 &&
                        s.createElement(
                          s.Fragment,
                          null,
                          null !== this.state.bShowRefreshRateOptions &&
                            s.createElement(d.n, {
                              label: Object(l.c)(
                                "#Settings_PerApplication_RefreshRateOverride_Checkbox"
                              ),
                              title: Object(l.c)(
                                "#Settings_Perapplication_RefreshRateOverride_Description"
                              ),
                              value: this.state.bShowRefreshRateOptions,
                              onChange: this.onRefreshRateOverrideChange,
                              onSubsection: s.createElement(d.k, {
                                label: Object(l.c)(
                                  "#Settings_Video_RefreshRate_Label_Hz"
                                ),
                                onChange: this.onRefreshRateChange,
                                value: this.state.nPreferredRefreshRate,
                                items:
                                  c.d.systemInfo.refresh_rates.supported_rates.map(
                                    (e) => ({
                                      value: e,
                                      sLabel: Math.round(e).toString(),
                                    })
                                  ),
                              }),
                            })
                        ),
                      this.enableLegacyReprojectionSettings &&
                        null !== this.state.disableAsyncReprojection &&
                        (c.d.showAdvancedSettings ||
                          (this.m_initialAppState &&
                            this.m_initialAppState.disableAsyncReprojection)) &&
                        s.createElement(
                          d.c,
                          {
                            title: Object(l.c)(
                              "#Settings_PerApplication_Reprojection_Description"
                            ),
                            className: "SettingsItem Advanced",
                          },
                          s.createElement(d.n, {
                            label: Object(l.c)(
                              "#Settings_PerApplication_Reprojection_Checkbox"
                            ),
                            value: this.state.disableAsyncReprojection,
                            onChange: this.onDisableAsyncReprojection,
                          })
                        ),
                      this.enableThrottleOverrideSettings &&
                        !this.state.disableAsyncReprojection &&
                        (c.d.showAdvancedSettings ||
                          (this.m_initialAppState &&
                            this.m_initialAppState.bShowThrottleOptions)) &&
                        s.createElement(
                          d.c,
                          {
                            title: Object(l.c)(
                              "#Settings_PerApplication_ThrottlingOverride_Description"
                            ),
                            className: "SettingsItem Advanced",
                          },
                          s.createElement(
                            "div",
                            { className: "Label" },
                            Object(l.c)(
                              "#Settings_PerApplication_ThrottlingOverride_Label"
                            )
                          ),
                          s.createElement(d.n, {
                            title: Object(l.c)(
                              "#Settings_PerApplication_ThrottlingOverride_Toggle"
                            ),
                            onLabel: Object(l.c)(
                              "#Settings_PerApplication_ThrottlingOverride_Toggle_On"
                            ),
                            offLabel: Object(l.c)(
                              "#Settings_PerApplication_ThrottlingOverride_Toggle_Off"
                            ),
                            value: this.state.bShowThrottleOptions,
                            onChange: this.onShowThrottleOptions,
                          }),
                          this.state.bShowThrottleOptions &&
                            s.createElement(
                              "div",
                              { className: "Subsection WithStem" },
                              s.createElement(
                                "div",
                                { className: "Label" },
                                Object(l.c)(
                                  "#Settings_PerApplication_ThrottlingOverride_Framerate"
                                )
                              ),
                              s.createElement(d.m, {
                                min: 5,
                                max: 0,
                                step: 1,
                                value: this.state.nFramesToThrottle,
                                valueStyleVariant: S.c.OnHandle,
                                renderValue: (e) =>
                                  (this.currentRefreshRate / (e + 1)).toFixed(
                                    1
                                  ),
                                onChange: this.onThrottleSliderChange,
                              }),
                              s.createElement(
                                "div",
                                { className: "Label" },
                                Object(l.c)(
                                  "#Settings_PerApplication_ThrottlingOverride_Prediction"
                                )
                              ),
                              s.createElement(d.m, {
                                min: 0,
                                max: 9,
                                step: 1,
                                value: this.state.nAdditionalPrediction,
                                valueStyleVariant: S.c.OnHandle,
                                renderValue: (e) =>
                                  ((1e3 * e) / this.currentRefreshRate).toFixed(
                                    2
                                  ),
                                onChange: this.onPredictionSliderChange,
                              })
                            )
                        )
                    ),
                  !this.hasCurrentApp() &&
                    s.createElement(
                      "div",
                      { className: "ModalPlaceholder" },
                      Object(l.c)("#Settings_PerApplication_ChooseApplication")
                    )
                )
            )
          );
        }
      });
      (R.PAGE_SECTION = "appvideosettings"),
        Object(o.b)([r.f], R.prototype, "shouldShowModal", null),
        Object(o.b)([r.f], R.prototype, "currentRouteAppKey", null),
        Object(o.b)([r.f], R.prototype, "enableThrottleOverrideSettings", null),
        Object(o.b)(
          [r.f],
          R.prototype,
          "enableMotionSmoothingOverrideSettings",
          null
        ),
        Object(o.b)(
          [r.f],
          R.prototype,
          "enableLegacyReprojectionSettings",
          null
        ),
        Object(o.b)([r.f], R.prototype, "worldScaleRangeMin", null),
        Object(o.b)([r.f], R.prototype, "worldScaleRangeMax", null),
        Object(o.b)([r.f], R.prototype, "worldScaleRangeStep", null),
        Object(o.b)([a.bind], R.prototype, "onApplicationDropdownChange", null),
        Object(o.b)([a.bind], R.prototype, "updateAppState", null),
        Object(o.b)([r.f], R.prototype, "computedResolution", null),
        Object(o.b)([a.bind], R.prototype, "onResolutionSliderChange", null),
        Object(o.b)([a.bind], R.prototype, "onFovScaleSliderChange", null),
        Object(o.b)([a.bind], R.prototype, "onMotionSmoothChange", null),
        Object(o.b)([a.bind], R.prototype, "onRefreshRateOverrideChange", null),
        Object(o.b)([a.bind], R.prototype, "onRefreshRateChange", null),
        Object(o.b)([a.bind], R.prototype, "onDisableAsyncReprojection", null),
        Object(o.b)([a.bind], R.prototype, "onShowThrottleOptions", null),
        Object(o.b)([a.bind], R.prototype, "onThrottleSliderChange", null),
        Object(o.b)([a.bind], R.prototype, "onPredictionSliderChange", null),
        Object(o.b)([a.bind], R.prototype, "onWorldScaleRangeChange", null),
        Object(o.b)(
          [a.bind],
          R.prototype,
          "onWorldScaleMultiplierSliderChange",
          null
        ),
        Object(o.b)([a.bind], R.prototype, "resetAppToDefaults", null),
        Object(o.b)([a.bind], R.prototype, "show", null),
        Object(o.b)([a.bind], R.prototype, "close", null),
        Object(o.b)([r.f], R.prototype, "allowPerAppRefreshRate", null),
        Object(o.b)([r.f], R.prototype, "currentRefreshRate", null),
        (R = i = Object(o.b)([h.a], R));
      class E extends d.b {
        render() {
          if (!this.props.active) return null;
          const e = VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              p.y.Hmd_SupportsHDCP14LegacyCompat_Bool
            ),
            t = VRHTML.VRProperties.GetBoolProperty(
              "/user/head",
              p.y.Hmd_SupportsDisplayPortTrainingMode_Bool
            );
          return s.createElement(
            s.Fragment,
            null,
            s.createElement(f, null),
            s.createElement(O, null),
            s.createElement(C, null),
            s.createElement(w, null),
            s.createElement(v, null),
            s.createElement(d.n, {
              name: "/settings/steamvr/doNotFadeToGrid",
              label: Object(l.c)("#Settings_FadeToGrid"),
              swapOnOff: !0,
            }),
            s.createElement(R, null),
            s.createElement(d.n, {
              name: "/settings/steamvr/allowSupersampleFiltering",
              label: Object(l.c)(
                "#Settings_Advanced_AllowSupersampleFiltering"
              ),
              visibility: d.d.Advanced,
            }),
            s.createElement(A, null),
            e &&
              s.createElement(d.n, {
                name: "/settings/steamvr/hdcp14legacyCompatibility",
                label: Object(l.c)("#Settings_Video_HDCP14LegacyCompatibility"),
                visibility: d.d.Advanced,
                requiresRestart: !0,
              }),
            t &&
              s.createElement(d.h, {
                name: "/settings/steamvr/displayPortTrainingMode",
                label: Object(l.c)("#Settings_DisplayPortTrainingMode"),
                items: [
                  {
                    value: 0,
                    sLabel: Object(l.c)(
                      "#Settings_DisplayPortTrainingMode_Automatic"
                    ),
                  },
                  g.b.Separator,
                  {
                    value: 1,
                    sLabel: Object(l.c)(
                      "#Settings_DisplayPortTrainingMode_CompatibilityModeA"
                    ),
                  },
                  {
                    value: 2,
                    sLabel: Object(l.c)(
                      "#Settings_DisplayPortTrainingMode_CompatibilityModeB"
                    ),
                  },
                ],
                visibility: d.d.Advanced,
                requiresRestart: !0,
              }),
            s.createElement(y, { visibility: d.d.Advanced }),
            s.createElement(d.n, {
              name: "/settings/power/pauseCompositorOnStandby",
              label: Object(l.c)("#Settings_PauseOnStandby"),
              visibility: d.d.Advanced,
            }),
            this.makeResetToDefaultButton()
          );
        }
      }
      E.Name = "video_settings";
    },
  },
]);
//# sourceMappingURL=vrwebui_shared.js.map?v=53286abc72ee70230c17