var CLSTAMP = "10630260";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [692],
  {
    1808: (e, t, s) => {
      var o = s(1635),
        r = s(3496),
        l = s(7019),
        n = s(3236);
      class i extends r._J {
        constructor(e) {
          super(e),
            (this.m_latchedPosition = null),
            super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "panel-anchor";
        }
        relatch() {
          this.m_latchedPosition = null;
        }
        buildNode(e, t) {
          var s, o;
          if (!e.currentPanel && !e.bInsideReparentedPanel)
            return [
              Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
              null,
            ];
          let n = null;
          "object" == typeof this.props.location
            ? (n = (0, r.PG)(this.props.location, { x: 0, y: 0 }))
            : "number" == typeof this.props.location &&
              (n = (0, l.Lr)(this.props.location));
          let i = this.createSgNode(t);
          if (this.props.latched && null !== this.m_latchedPosition)
            (i.properties["anchor-u"] = this.m_latchedPosition.u),
              (i.properties["anchor-v"] = this.m_latchedPosition.v);
          else if (n) {
            const t = { u: 0.5 * n.x + 0.5, v: -0.5 * n.y + 0.5 },
              s =
                !e.currentPanel || e.currentPanel.props.overlay_key
                  ? t
                  : e.currentPanel.scaleLocalUVToGlobal(t);
            s &&
              ((i.properties["anchor-u"] = s.u),
              (i.properties["anchor-v"] = s.v));
          } else {
            if (!e.currentPanel)
              return [
                Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                null,
              ];
            const r = t.ownerDocument,
              l = t.getBoundingClientRect(),
              n = l.left + l.width / 2,
              a = l.top + l.height / 2,
              c = e.currentPanel.m_Rect;
            if (n < c.x || n > c.x + c.width || a < c.y || a > c.y + c.height)
              return [
                Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                null,
              ];
            const u =
                null === (s = r.defaultView) || void 0 === s
                  ? void 0
                  : s.innerWidth,
              p =
                null === (o = r.defaultView) || void 0 === o
                  ? void 0
                  : o.innerHeight;
            if (!(p && p > 0 && u && u > 0))
              return [
                Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                null,
              ];
            (i.properties["anchor-u"] = n / u),
              (i.properties["anchor-v"] = a / p);
          }
          return (
            (this.m_latchedPosition = {
              u: i.properties["anchor-u"],
              v: i.properties["anchor-v"],
            }),
            [e, i]
          );
        }
      }
      (0, o.Cg)([n.o], i.prototype, "buildNode", null);
    },
    6292: (e, t, s) => {
      function o(e, t) {
        return { x: e.x * t, y: e.y * t, z: e.z * t };
      }
      function r(e) {
        if (void 0 === e) return;
        let t = 0.5 * e.x,
          s = 0.5 * e.y,
          o = 0.5 * e.z,
          r = Math.cos(t),
          l = Math.cos(s),
          n = Math.cos(o),
          i = Math.sin(t),
          a = Math.sin(s),
          c = Math.sin(o);
        return {
          w: r * l * n + i * a * c,
          x: i * l * n + r * a * c,
          y: r * a * n - i * l * c,
          z: r * l * c - i * a * n,
        };
      }
      s.d(t, { Fb: () => r, tx: () => o });
    },
    6189: (e, t, s) => {
      s.d(t, { W: () => n });
      var o = s(6090);
      const r = Object.values(o.en).filter((e) => "number" == typeof e);
      function l(e, t) {
        return new Set([...e, ...t]);
      }
      class n {
        constructor() {
          this.m_mapSuppressedHaptics = new Map();
        }
        static get Instance() {
          return n.s_Instance || (n.s_Instance = new n()), n.s_Instance;
        }
        suppressHaptics(e, t) {
          const s = new Set(t);
          this.m_mapSuppressedHaptics.has(e)
            ? this.m_mapSuppressedHaptics.set(
                e,
                l(this.m_mapSuppressedHaptics.get(e), s),
              )
            : this.m_mapSuppressedHaptics.set(e, s);
        }
        suppressHapticsExcept(e, t) {
          const s = new Set(t),
            o = new Set(r.filter((e) => !s.has(e)));
          this.m_mapSuppressedHaptics.has(e)
            ? this.m_mapSuppressedHaptics.set(
                e,
                l(this.m_mapSuppressedHaptics.get(e), o),
              )
            : this.m_mapSuppressedHaptics.set(e, o);
        }
        unsuppressHaptics(e, t) {
          const s = new Set(t);
          var o, r;
          void 0 === t
            ? this.m_mapSuppressedHaptics.delete(e)
            : this.m_mapSuppressedHaptics.has(e) ||
              this.m_mapSuppressedHaptics.set(
                e,
                ((o = this.m_mapSuppressedHaptics.get(e)),
                (r = s),
                new Set([...o].filter((e) => !r.has(e)))),
              );
        }
        isHapticSuppressed(e) {
          return Array.from(this.m_mapSuppressedHaptics.values()).some((t) =>
            t.has(e),
          );
        }
        triggerHaptic(e) {
          (0, o.R$)() != o.OH.Overlay ||
            this.isHapticSuppressed(e) ||
            null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VROverlay.TriggerOverlayHapticEffect(
              VRHTML.VROverlay.ThisOverlayHandle(),
              e,
            );
        }
      }
      n.s_Instance = null;
    },
    4963: (e, t, s) => {
      s.d(t, { j: () => o, u: () => n });
      var o,
        r = s(1635),
        l = s(6090);
      !(function (e) {
        (e[(e.DashboardOpen = 0)] = "DashboardOpen"),
          (e[(e.DashboardClose = 1)] = "DashboardClose"),
          (e[(e.ControlBarButtonClick = 2)] = "ControlBarButtonClick"),
          (e[(e.ButtonClick = 3)] = "ButtonClick"),
          (e[(e.SurfaceClick = 4)] = "SurfaceClick"),
          (e[(e.VolumePreview = 5)] = "VolumePreview"),
          (e[(e.Grab = 6)] = "Grab"),
          (e[(e.GrabRelease = 7)] = "GrabRelease"),
          (e[(e.PagedSettingsNavigation = 8)] = "PagedSettingsNavigation");
      })(o || (o = {}));
      class n {
        constructor() {
          this.m_mapSoundElems = new Map();
        }
        static get Instance() {
          return n.s_Instance || (n.s_Instance = new n()), n.s_Instance;
        }
        preloadSounds() {
          if (!((0, l.R$)() != l.OH.Overlay || this.m_mapSoundElems.size > 0))
            for (let e in o) isNaN(Number(e)) || this.loadSounds(Number(e));
        }
        playSound(e) {
          return (0, r.sH)(this, void 0, void 0, function* () {
            if ((0, l.R$)() != l.OH.Overlay) return;
            if (null == e) return;
            const t = this.getAudioElems(e);
            if (!t || 0 == t.length) return;
            const s = t[Math.floor(Math.random() * t.length)];
            s.pause(), (s.currentTime = 0);
            try {
              yield s.play();
            } catch (t) {
              console.error(
                `Failed to play sound effect "${o[e]}" (${s.src}, networkState=${s.networkState}, readyState=${s.readyState})`,
              );
            }
          });
        }
        loadSounds(e) {
          const t = n.Sources[e],
            s = t.source;
          if (!s) return void this.m_mapSoundElems.set(e, []);
          const o = ("string" == typeof s ? [s] : s).map((e) => {
            var s, o;
            let r = document.createElement("audio");
            return (
              (r.src = `${e}?t=${(new Date()).getTime()}`),
              (r.preload = "auto"),
              (r.volume = null !== (s = t.volume) && void 0 !== s ? s : 1),
              (null === (o = t.bRespectsGlobalVolume) || void 0 === o || o) &&
                (r.volume *= 1),
              r
            );
          });
          this.m_mapSoundElems.set(e, o);
        }
        getAudioElems(e) {
          return (
            this.m_mapSoundElems.has(e) ||
              (console.warn(
                "Playing a sound which was not preloaded. Consider calling SoundEffects.Instance.preloadSounds().",
              ),
              this.loadSounds(e)),
            this.m_mapSoundElems.get(e)
          );
        }
      }
      (n.Sources = {
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
        (n.s_Instance = null);
    },
    1139: (e, t, s) => {
      s.d(t, { FH: () => n });
      var o = s(1635),
        r = (s(6540), s(3236)),
        l = s(7813);
      function n(...e) {
        return e
          .filter((e) => null != e && ("string" == typeof e || e[1]))
          .map((e) => ("string" == typeof e ? e : e[0]))
          .join(" ");
      }
      class i {
        constructor() {
          (this.onScroll = null),
            (this.onScrollStop = null),
            (this.m_elem = null),
            (this.m_rScrollableParents = []),
            (this.m_bScrolling = !1),
            (this.m_scrollStopTimeoutHandle = void 0),
            (0, l.makeObservable)(this);
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
            let s = e.parentElement;
            for (; s; ) {
              const e = s.scrollWidth > s.clientWidth,
                o = s.scrollHeight > s.clientHeight;
              (e || o) && t.push(s), (s = s.parentElement);
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
            (this.m_scrollStopTimeoutHandle = window.setTimeout(
              this.onScrollStopTimeout,
              50,
            )),
            null === (e = this.onScroll) || void 0 === e || e.call(this);
        }
        clearScrollStopTimeout() {
          window.clearTimeout(this.m_scrollStopTimeoutHandle),
            (this.m_scrollStopTimeoutHandle = void 0);
        }
        onScrollStopTimeout() {
          var e;
          this.m_bScrolling &&
            (null === (e = this.onScrollStop) || void 0 === e || e.call(this)),
            (this.m_bScrolling = !1);
        }
      }
      (0, o.Cg)([l.observable], i.prototype, "m_bScrolling", void 0),
        (0, o.Cg)([r.o], i.prototype, "ref", null),
        (0, o.Cg)([l.computed], i.prototype, "isScrolling", null),
        (0, o.Cg)([r.o], i.prototype, "onParentScroll", null),
        (0, o.Cg)([r.o], i.prototype, "onScrollStopTimeout", null);
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~1059e241c.js.map
