var CLSTAMP = "10624569";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [743],
  {
    6189: (e, t, n) => {
      n.d(t, { W: () => i });
      var s = n(6090);
      const o = Object.values(s.en).filter((e) => "number" == typeof e);
      function r(e, t) {
        return new Set([...e, ...t]);
      }
      class i {
        constructor() {
          this.m_mapSuppressedHaptics = new Map();
        }
        static get Instance() {
          return i.s_Instance || (i.s_Instance = new i()), i.s_Instance;
        }
        suppressHaptics(e, t) {
          const n = new Set(t);
          this.m_mapSuppressedHaptics.has(e)
            ? this.m_mapSuppressedHaptics.set(
                e,
                r(this.m_mapSuppressedHaptics.get(e), n),
              )
            : this.m_mapSuppressedHaptics.set(e, n);
        }
        suppressHapticsExcept(e, t) {
          const n = new Set(t),
            s = new Set(o.filter((e) => !n.has(e)));
          this.m_mapSuppressedHaptics.has(e)
            ? this.m_mapSuppressedHaptics.set(
                e,
                r(this.m_mapSuppressedHaptics.get(e), s),
              )
            : this.m_mapSuppressedHaptics.set(e, s);
        }
        unsuppressHaptics(e, t) {
          const n = new Set(t);
          var s, o;
          void 0 === t
            ? this.m_mapSuppressedHaptics.delete(e)
            : this.m_mapSuppressedHaptics.has(e) ||
              this.m_mapSuppressedHaptics.set(
                e,
                ((s = this.m_mapSuppressedHaptics.get(e)),
                (o = n),
                new Set([...s].filter((e) => !o.has(e)))),
              );
        }
        isHapticSuppressed(e) {
          return Array.from(this.m_mapSuppressedHaptics.values()).some((t) =>
            t.has(e),
          );
        }
        triggerHaptic(e) {
          (0, s.R$)() != s.OH.Overlay ||
            this.isHapticSuppressed(e) ||
            null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VROverlay.TriggerOverlayHapticEffect(
              VRHTML.VROverlay.ThisOverlayHandle(),
              e,
            );
        }
      }
      i.s_Instance = null;
    },
    260: (e, t, n) => {
      n.d(t, { j: () => i });
      var s = n(6540),
        o = n(961);
      const r = (e) =>
        s.createElement("div", {
          style: {
            position: "fixed",
            left: e.x,
            top: e.y,
            width: e.width,
            height: e.height,
            zIndex: 90019001,
          },
        });
      class i extends s.Component {
        render() {
          const e = document.body.getBoundingClientRect();
          let t = null;
          if (this.props.element) {
            const n = this.props.element.getBoundingClientRect();
            t = s.createElement(
              s.Fragment,
              null,
              s.createElement(r, { x: 0, y: 0, width: e.width, height: n.y }),
              s.createElement(r, {
                x: 0,
                y: n.y + n.height,
                width: e.width,
                height: e.height - n.height - n.y,
              }),
              s.createElement(r, {
                x: 0,
                y: n.y,
                width: n.x,
                height: n.height,
              }),
              s.createElement(r, {
                x: n.x + n.width,
                y: n.y,
                width: e.width - n.width - n.x,
                height: n.height,
              }),
            );
          } else
            t = s.createElement(
              s.Fragment,
              null,
              s.createElement(r, {
                x: 0,
                y: 0,
                width: e.width,
                height: e.height,
              }),
            );
          return o.createPortal(t, document.body);
        }
      }
    },
    7379: (e, t, n) => {
      n.d(t, { a: () => u });
      var s,
        o = n(1635),
        r = n(6540),
        i = n(1139),
        l = n(1370),
        a = n(6731),
        c = n(6575);
      let u = (s = class extends r.Component {
        constructor(e) {
          super(e),
            (this.m_refParentPortal = r.createRef()),
            (this.state = {
              elemBoundingParent: window.document.body,
              bInDOM: !1,
            });
        }
        componentDidMount() {
          var e, t;
          this.setState({
            elemBoundingParent: (0, i.jE)(
              [
                "body",
                "[vsg-type=panel]",
                ...(null !== (e = this.props.allowableParentSelectors) &&
                void 0 !== e
                  ? e
                  : []),
              ],
              null === (t = this.m_refParentPortal.current) || void 0 === t
                ? void 0
                : t.anchorElement,
            ),
            bInDOM: !0,
          });
        }
        render() {
          const e = this.state.elemBoundingParent.getBoundingClientRect();
          let t, n;
          this.props.fullScreen ||
            ((t = e.width - 2 * s.MODAL_BOUNDS_MARGIN),
            (n = e.height - 2 * s.MODAL_BOUNDS_MARGIN));
          let l = this.props,
            {
              onDismissRequested: u,
              backdropClassName: p,
              allowableParentSelectors: h,
              fullScreen: d,
            } = l,
            m = (0, o.Tt)(l, [
              "onDismissRequested",
              "backdropClassName",
              "allowableParentSelectors",
              "fullScreen",
            ]);
          return r.createElement(
            c.b,
            {
              ref: this.m_refParentPortal,
              allowableParentSelectors: [
                "body",
                "vsg-app",
                "vsg-mountable",
                "[vsg-type=panel]",
                ".ModalParentPortalContainer",
                ...(null != h ? h : []),
              ],
            },
            r.createElement(
              a.wM,
              Object.assign({}, m, {
                shouldDismissOnClickAnywhere: !1,
                shouldDismissOnClickInViewStack: !0,
                fadesViewsBelow: !0,
                onDismissRequested: u,
                className: (0, i.FH)(
                  "Modal",
                  this.props.className,
                  d && "FullScreen",
                ),
                style: { maxWidth: t, maxHeight: n },
              }),
              this.state.bInDOM && this.props.children,
            ),
          );
        }
      });
      (u.MODAL_BOUNDS_MARGIN = 10), (u = s = (0, o.Cg)([l.PA], u));
    },
    5615: (e, t, n) => {
      n.d(t, { D: () => s, M: () => m });
      var s,
        o,
        r = n(1635),
        i = n(6540),
        l = n(3236),
        a = n(6090),
        c = n(6189),
        u = n(1139),
        p = n(7813),
        h = n(6138),
        d = n(260);
      !(function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Vertical = 1)] = "Vertical"),
          (e[(e.Horizontal = 2)] = "Horizontal");
      })(s || (s = {})),
        (function (e) {
          (e[(e.Default = 0)] = "Default"),
            (e[(e.MouseDown = 1)] = "MouseDown"),
            (e[(e.Dragging = 2)] = "Dragging"),
            (e[(e.Thrown = 3)] = "Thrown");
        })(o || (o = {}));
      class m extends i.Component {
        static get isScrollingSuppressed() {
          return m.s_setScrollingSuppressors.size > 0;
        }
        static get userIsDragging() {
          return !!S.m_CurrentlyDraggingPanel;
        }
        static suppressScrolling(e) {
          m.s_setScrollingSuppressors.add(e);
        }
        static unsuppressScrolling(e) {
          m.s_setScrollingSuppressors.delete(e);
        }
        constructor(e) {
          super(e),
            (this.m_ref = i.createRef()),
            (this.m_initialMousePosition = null),
            (this.m_initialScrollPosition = null),
            (this.m_mostRecentScrollSamples = []),
            (this.m_thrownVelocityPerSecond = null),
            (this.m_animationFrameRequestHandle = 0),
            (this.state = { eScrollState: o.Default, bAtEdge: null }),
            (0, p.makeObservable)(this);
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
            c.W.Instance.triggerHaptic(a.en.SlidingEdge);
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
            n.call(t, e);
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
              this.onWindowMouseMove,
            ),
            window.document.addEventListener("mouseup", this.onWindowMouseUp);
        }
        updateMouseTracking(e) {
          const t = (0, a.QB)(this.m_initialMousePosition, e);
          switch (this.state.eScrollState) {
            case o.MouseDown:
              if (this.props.scrollDirection == s.None) break;
              Math.abs(this.scrollsHorizontally ? t.x : t.y) >
                (this.scrollsHorizontally
                  ? m.MIN_HORIZONTAL_DRAG_DISTANCE
                  : m.MIN_VERTICAL_DRAG_DISTANCE) && this.startDragging(e);
              break;
            case o.Dragging:
              if ((this.logScrollSample(), S.m_CurrentlyDraggingPanel)) {
                if (S.m_CurrentlyDraggingPanel != this) break;
              } else S.m_CurrentlyDraggingPanel = this;
              this.m_ref.current &&
                (this.scrollsHorizontally
                  ? (this.m_ref.current.scrollLeft =
                      this.m_initialScrollPosition.x + t.x)
                  : (this.m_ref.current.scrollTop =
                      this.m_initialScrollPosition.y + t.y));
          }
        }
        requestNextAnimationFrame() {
          (this.m_animationFrameRequestHandle = window.requestAnimationFrame(
            this.onAnimationFrame,
          )),
            (this.m_lastAnimationFrameTimeMs = performance.now());
        }
        onAnimationFrame() {
          if (this.state.eScrollState != o.Thrown || !this.m_ref.current)
            return;
          const e = (performance.now() - this.m_lastAnimationFrameTimeMs) / 1e3;
          (this.m_ref.current.scrollLeft +=
            this.m_thrownVelocityPerSecond.x * e),
            (this.m_ref.current.scrollTop +=
              this.m_thrownVelocityPerSecond.y * e);
          const t = Math.sign(this.m_thrownVelocityPerSecond.x),
            n = Math.sign(this.m_thrownVelocityPerSecond.y),
            s =
              850 +
              (((0, a.NH)(this.m_thrownVelocityPerSecond) - 500) / 1e4) * 49150,
            r = Math.min(5e4, Math.max(850, s));
          this.m_thrownVelocityPerSecond = {
            x: this.m_thrownVelocityPerSecond.x - t * r * e,
            y: this.m_thrownVelocityPerSecond.y - n * r * e,
          };
          Math.sign(this.m_thrownVelocityPerSecond.x) != t ||
          Math.sign(this.m_thrownVelocityPerSecond.y) != n ||
          (0, a.NH)(this.m_thrownVelocityPerSecond) <= 1
            ? this.setState({ eScrollState: o.Default })
            : this.requestNextAnimationFrame();
        }
        startDragging(e) {
          !m.isScrollingSuppressed &&
            this.m_ref.current &&
            (0, a.R$)() == a.OH.Overlay &&
            (this.setState({ eScrollState: o.Dragging }),
            (this.m_initialMousePosition = e),
            (this.m_initialScrollPosition = {
              x: this.m_ref.current.scrollLeft,
              y: this.m_ref.current.scrollTop,
            }),
            this.logScrollSample());
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
                    this.m_animationFrameRequestHandle,
                  ),
                  { eScrollState: o.Default })
                : null,
            e,
          );
        }
        get isThrown() {
          return this.state.eScrollState == o.Thrown;
        }
        calculateThrowStartVelocity() {
          if (this.m_mostRecentScrollSamples.length < 2) return { x: 0, y: 0 };
          let e = null,
            t = 0;
          for (let n = 1; n < this.m_mostRecentScrollSamples.length; n++) {
            const s = this.m_mostRecentScrollSamples[n - 1],
              o = this.m_mostRecentScrollSamples[n],
              r = (o.timeMs - s.timeMs) / 1e3,
              i = {
                x: (o.scrollPosition.x - s.scrollPosition.x) / r,
                y: (o.scrollPosition.y - s.scrollPosition.y) / r,
              };
            e
              ? ((e.x = (e.x * t + i.x) / (t + 1)),
                (e.y = (e.y * t + i.y) / (t + 1)))
              : (e = i),
              t++;
          }
          const n = (0, a.NH)(e);
          return (
            n > m.MAX_PIXELS_PER_SECOND &&
              (e = (0, a.O6)(e, m.MAX_PIXELS_PER_SECOND / n)),
            n < m.MIN_THROW_VELOCITY_PER_SECOND && (e = null),
            null != e ? e : { x: 0, y: 0 }
          );
        }
        logScrollSample() {
          for (
            this.m_ref.current &&
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
          S.m_CurrentlyDraggingPanel == this
            ? (this.startThrowing(),
              h.W.temporarilySuppressSoundEffect(),
              setTimeout(() => {
                S.m_CurrentlyDraggingPanel = null;
              }, 0))
            : this.setState({ eScrollState: o.Default }),
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
          return this.props.scrollDirection == s.Horizontal;
        }
        get scrollsVertically() {
          return this.props.scrollDirection == s.Vertical;
        }
        render() {
          let e = Object.assign({}, this.props);
          delete e.scrollDirection, delete e.alwaysShowScrollbars;
          const t = this.props.alwaysShowScrollbars ? "scroll" : "auto";
          return i.createElement(
            i.Fragment,
            null,
            this.state.eScrollState == o.Dragging && i.createElement(d.j, null),
            i.createElement(
              "div",
              Object.assign({}, e, {
                className: (0, u.FH)("ScrollPanel", e.className),
                style: Object.assign(Object.assign({}, e.style), {
                  overflowX:
                    this.props.scrollDirection == s.Horizontal ? t : "hidden",
                  overflowY:
                    this.props.scrollDirection == s.Vertical ? t : "hidden",
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
      (m.s_setScrollingSuppressors = p.observable.set()),
        (m.MAX_SCROLL_SAMPLES = 4),
        (m.MAX_PIXELS_PER_SECOND = 1e4),
        (m.MIN_THROW_VELOCITY_PER_SECOND = 1e3),
        (m.MIN_VERTICAL_DRAG_DISTANCE = 80),
        (m.MIN_HORIZONTAL_DRAG_DISTANCE = 40),
        (0, r.Cg)([l.o], m.prototype, "onWindowMouseMove", null),
        (0, r.Cg)([l.o], m.prototype, "onWindowMouseUp", null),
        (0, r.Cg)([l.o], m.prototype, "onMouseDown", null),
        (0, r.Cg)([l.o], m.prototype, "onMouseUp", null),
        (0, r.Cg)([l.o], m.prototype, "onScroll", null),
        (0, r.Cg)([l.o], m.prototype, "onAnimationFrame", null),
        (0, r.Cg)([p.computed], m, "isScrollingSuppressed", null),
        (0, r.Cg)([p.computed], m, "userIsDragging", null),
        (0, r.Cg)([p.action], m, "suppressScrolling", null),
        (0, r.Cg)([p.action], m, "unsuppressScrolling", null);
      class g {
        constructor() {
          (this.m_CurrentlyDraggingPanel = null), (0, p.makeObservable)(this);
        }
      }
      (0, r.Cg)(
        [p.observable],
        g.prototype,
        "m_CurrentlyDraggingPanel",
        void 0,
      );
      const S = new g();
    },
    4963: (e, t, n) => {
      n.d(t, { j: () => s, u: () => i });
      var s,
        o = n(1635),
        r = n(6090);
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
      })(s || (s = {}));
      class i {
        constructor() {
          this.m_mapSoundElems = new Map();
        }
        static get Instance() {
          return i.s_Instance || (i.s_Instance = new i()), i.s_Instance;
        }
        preloadSounds() {
          if (!((0, r.R$)() != r.OH.Overlay || this.m_mapSoundElems.size > 0))
            for (let e in s) isNaN(Number(e)) || this.loadSounds(Number(e));
        }
        playSound(e) {
          return (0, o.sH)(this, void 0, void 0, function* () {
            if ((0, r.R$)() != r.OH.Overlay) return;
            if (null == e) return;
            const t = this.getAudioElems(e);
            if (!t || 0 == t.length) return;
            const n = t[Math.floor(Math.random() * t.length)];
            n.pause(), (n.currentTime = 0);
            try {
              yield n.play();
            } catch (t) {
              console.error(
                `Failed to play sound effect "${s[e]}" (${n.src}, networkState=${n.networkState}, readyState=${n.readyState})`,
              );
            }
          });
        }
        loadSounds(e) {
          const t = i.Sources[e],
            n = t.source;
          if (!n) return void this.m_mapSoundElems.set(e, []);
          const s = ("string" == typeof n ? [n] : n).map((e) => {
            var n, s;
            let o = document.createElement("audio");
            return (
              (o.src = `${e}?t=${(new Date()).getTime()}`),
              (o.preload = "auto"),
              (o.volume = null !== (n = t.volume) && void 0 !== n ? n : 1),
              (null === (s = t.bRespectsGlobalVolume) || void 0 === s || s) &&
                (o.volume *= 1),
              o
            );
          });
          this.m_mapSoundElems.set(e, s);
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
      (i.Sources = {
        [s.DashboardOpen]: { source: "" },
        [s.DashboardClose]: { source: "" },
        [s.ControlBarButtonClick]: {
          source: "/dashboard/sounds/deck_ui_misc_10.wav",
        },
        [s.ButtonClick]: { source: "/dashboard/sounds/deck_ui_misc_10.wav" },
        [s.SurfaceClick]: { source: "" },
        [s.VolumePreview]: {
          source: "/dashboard/sounds/volume_change.wav",
          bRespectsGlobalVolume: !1,
        },
        [s.Grab]: { source: "" },
        [s.GrabRelease]: { source: "/dashboard/sounds/deck_ui_misc_10.wav" },
        [s.PagedSettingsNavigation]: {
          source: "/dashboard/sounds/deck_ui_navigation.wav",
        },
      }),
        (i.s_Instance = null);
    },
    1532: (e, t, n) => {
      n.d(t, { s: () => c });
      var s = n(1635),
        o = n(3236),
        r = n(2505),
        i = n.n(r),
        l = n(7813);
      class a {
        constructor() {
          (this.m_Applications = l.observable.map()),
            (this.m_sceneApplicationStateChangedEventHandle = null),
            (0, l.makeObservable)(this);
        }
        Init() {
          return (0, s.sH)(this, void 0, void 0, function* () {
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
        SetApplicationMap(e) {
          var t;
          this.m_Applications.clear(),
            null === (t = e.apps) ||
              void 0 === t ||
              t.forEach((e) => {
                this.m_Applications.set(e.key, e);
              });
        }
        UpdateApplications() {
          return (0, s.sH)(this, void 0, void 0, function* () {
            yield this.QueryApplications().then((e) => {
              this.SetApplicationMap(e);
            });
          });
        }
        QueryApplications() {
          return new Promise(function (e, t) {
            i()
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
          var t;
          return (
            "/app/image?app_key=" +
            e +
            "&version=" +
            (null !==
              (t =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.SteamVRVersion()) && void 0 !== t
              ? t
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
                      : 0,
            ),
            e
          );
        }
        GetCurrentSceneProcess() {
          let e;
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
      (0, s.Cg)([l.observable], a.prototype, "m_Applications", void 0),
        (0, s.Cg)([o.o], a.prototype, "onSceneApplicationStateChanged", null),
        (0, s.Cg)([l.action], a.prototype, "SetApplicationMap", null),
        (0, s.Cg)([o.o], a.prototype, "QueryApplications", null),
        (0, s.Cg)([o.o], a.prototype, "GetAppImageURL", null),
        (0, s.Cg)([o.o], a.prototype, "GetApp", null),
        (0, s.Cg)([o.o], a.prototype, "GetRecentApps", null),
        (0, s.Cg)([o.o], a.prototype, "GetCurrentSceneProcess", null),
        (0, s.Cg)([o.o], a.prototype, "IsAppAllowedPrivateInputs", null),
        (0, s.Cg)([o.o], a.prototype, "ShouldShowBindingFailureForApp", null);
      const c = new a();
      window.applications = c;
    },
    3804: (e, t, n) => {
      n.d(t, { E: () => r });
      var s = n(7813);
      function o(e) {
        if (
          ((0, s.isObservable)(e) && (e = (0, s.toJS)(e)),
          null === e || null == e)
        )
          return e;
        if (Array.isArray(e)) return e.map(o);
        if (e instanceof Map) {
          const t = {};
          for (const n of e.keys()) t[n] = o(e.get(n));
          return t;
        }
        if ("object" == typeof e) {
          const t = {};
          for (const n of Object.keys(e)) t[n] = o(e[n]);
          return t;
        }
        return e;
      }
      function r(...e) {
        const [t, ...n] = e;
        return JSON.stringify(o(t), ...n);
      }
      (window.toJS = s.toJS),
        (window.jsonit = (e) => JSON.parse(JSON.stringify(e)));
    },
    8108: (e, t, n) => {
      n.d(t, { J: () => u });
      var s = n(1635),
        o = n(3236),
        r = n(2505),
        i = n.n(r),
        l = n(7813);
      class a {
        constructor() {
          (this.contents = l.observable.map()), (0, l.makeObservable)(this);
        }
      }
      (0, s.Cg)([l.observable], a.prototype, "contents", void 0);
      class c {
        constructor() {
          (this.m_Containers = l.observable.map()), (0, l.makeObservable)(this);
        }
        Init() {
          return (0, s.sH)(this, void 0, void 0, function* () {
            this.AddSubscribedContainer("25769803776"),
              yield this.UpdatePaths();
          });
        }
        AddSubscribedContainer(e) {
          if (!this.m_Containers.has(e)) {
            let t = new a();
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
          return (0, s.sH)(this, void 0, void 0, function* () {
            return new Promise(function (t, n) {
              i()
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
          return (0, s.sH)(this, void 0, void 0, function* () {
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
                      "entries in array",
                    )
                  : "string" == typeof e[1]
                    ? console.log(
                        "Failed to update container ",
                        e[0],
                        ":",
                        e[1],
                      )
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
          let s = n.contents.get(t);
          return "k_unActionPropertyTag" == s.type ? s.value : void 0;
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
          let s = n.contents.get(t);
          if ("k_unInputValuePropertyTag" != s.type) return;
          let o = s.value;
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
      (0, s.Cg)([l.observable], c.prototype, "m_Containers", void 0),
        (0, s.Cg)([o.o], c.prototype, "AddSubscribedContainer", null),
        (0, s.Cg)([l.action], c.prototype, "UpdateContainer", null),
        (0, s.Cg)([o.o], c.prototype, "GetAllActions", null),
        (0, s.Cg)([o.o], c.prototype, "GetActionValue", null),
        (0, s.Cg)([o.o], c.prototype, "GetAllInputValues", null),
        (0, s.Cg)([o.o], c.prototype, "GetInputValue", null),
        (0, s.Cg)([o.o], c.prototype, "GetScalarInputValue", null),
        (0, s.Cg)([o.o], c.prototype, "GetBooleanInputValue", null);
      const u = new c();
      window.paths = u;
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~6b9c0374a.js.map
