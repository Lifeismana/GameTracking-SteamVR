var CLSTAMP = "10579910";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [743],
  {
    260: (t, e, n) => {
      n.d(e, { j: () => s });
      var o = n(6540),
        r = n(961);
      const i = (t) =>
        o.createElement("div", {
          style: {
            position: "fixed",
            left: t.x,
            top: t.y,
            width: t.width,
            height: t.height,
            zIndex: 90019001,
          },
        });
      class s extends o.Component {
        render() {
          const t = document.body.getBoundingClientRect();
          let e = null;
          if (this.props.element) {
            const n = this.props.element.getBoundingClientRect();
            e = o.createElement(
              o.Fragment,
              null,
              o.createElement(i, { x: 0, y: 0, width: t.width, height: n.y }),
              o.createElement(i, {
                x: 0,
                y: n.y + n.height,
                width: t.width,
                height: t.height - n.height - n.y,
              }),
              o.createElement(i, {
                x: 0,
                y: n.y,
                width: n.x,
                height: n.height,
              }),
              o.createElement(i, {
                x: n.x + n.width,
                y: n.y,
                width: t.width - n.width - n.x,
                height: n.height,
              }),
            );
          } else
            e = o.createElement(
              o.Fragment,
              null,
              o.createElement(i, {
                x: 0,
                y: 0,
                width: t.width,
                height: t.height,
              }),
            );
          return r.createPortal(e, document.body);
        }
      }
    },
    7379: (t, e, n) => {
      n.d(e, { a: () => h });
      var o,
        r = n(1635),
        i = n(6540),
        s = n(1139),
        l = n(1370),
        a = n(6731),
        c = n(6575);
      let h = (o = class extends i.Component {
        constructor(t) {
          super(t),
            (this.m_refParentPortal = i.createRef()),
            (this.state = {
              elemBoundingParent: window.document.body,
              bInDOM: !1,
            });
        }
        componentDidMount() {
          var t, e;
          this.setState({
            elemBoundingParent: (0, s.jE)(
              [
                "body",
                "[vsg-type=panel]",
                ...(null !== (t = this.props.allowableParentSelectors) &&
                void 0 !== t
                  ? t
                  : []),
              ],
              null === (e = this.m_refParentPortal.current) || void 0 === e
                ? void 0
                : e.anchorElement,
            ),
            bInDOM: !0,
          });
        }
        render() {
          var t;
          const e = this.state.elemBoundingParent.getBoundingClientRect();
          let n = Object.assign({}, this.props);
          return (
            delete n.onDismissRequested,
            delete n.backdropClassName,
            delete n.allowableParentSelectors,
            i.createElement(
              c.b,
              {
                ref: this.m_refParentPortal,
                allowableParentSelectors: [
                  "body",
                  "vsg-app",
                  "vsg-mountable",
                  "[vsg-type=panel]",
                  ".ModalParentPortalContainer",
                  ...(null !== (t = this.props.allowableParentSelectors) &&
                  void 0 !== t
                    ? t
                    : []),
                ],
              },
              i.createElement(
                a.wM,
                Object.assign({}, n, {
                  shouldDismissOnClickAnywhere: !1,
                  shouldDismissOnClickInViewStack: !0,
                  fadesViewsBelow: !0,
                  onDismissRequested: this.props.onDismissRequested,
                  className: (0, s.FH)("Modal", this.props.className),
                  style: {
                    maxWidth: e.width - 2 * o.MODAL_BOUNDS_MARGIN,
                    maxHeight: e.height - 2 * o.MODAL_BOUNDS_MARGIN,
                  },
                }),
                this.state.bInDOM && this.props.children,
              ),
            )
          );
        }
      });
      (h.MODAL_BOUNDS_MARGIN = 10), (h = o = (0, r.Cg)([l.PA], h));
    },
    5615: (t, e, n) => {
      n.d(e, { D: () => o, M: () => d });
      var o,
        r,
        i = n(1635),
        s = n(6540),
        l = n(3236),
        a = n(6090),
        c = n(6189),
        h = n(1139),
        u = n(7813),
        m = n(6138),
        p = n(260);
      !(function (t) {
        (t[(t.None = 0)] = "None"),
          (t[(t.Vertical = 1)] = "Vertical"),
          (t[(t.Horizontal = 2)] = "Horizontal");
      })(o || (o = {})),
        (function (t) {
          (t[(t.Default = 0)] = "Default"),
            (t[(t.MouseDown = 1)] = "MouseDown"),
            (t[(t.Dragging = 2)] = "Dragging"),
            (t[(t.Thrown = 3)] = "Thrown");
        })(r || (r = {}));
      class d extends s.Component {
        static get isScrollingSuppressed() {
          return d.s_setScrollingSuppressors.size > 0;
        }
        static get userIsDragging() {
          return !!S.m_CurrentlyDraggingPanel;
        }
        static suppressScrolling(t) {
          d.s_setScrollingSuppressors.add(t);
        }
        static unsuppressScrolling(t) {
          d.s_setScrollingSuppressors.delete(t);
        }
        constructor(t) {
          super(t),
            (this.m_ref = s.createRef()),
            (this.m_initialMousePosition = null),
            (this.m_initialScrollPosition = null),
            (this.m_mostRecentScrollSamples = []),
            (this.m_thrownVelocityPerSecond = null),
            (this.m_animationFrameRequestHandle = 0),
            (this.state = { eScrollState: r.Default, bAtEdge: null }),
            (0, u.makeObservable)(this);
        }
        componentWillUnmount() {
          this.stopMouseTracking(),
            window.cancelAnimationFrame(this.m_animationFrameRequestHandle);
        }
        componentDidMount() {
          this.setState({ bAtEdge: this.currentlyAtEdge });
        }
        componentDidUpdate(t, e) {
          this.state.bAtEdge &&
            !1 === e.bAtEdge &&
            c.W.Instance.triggerHaptic(a.en.SlidingEdge);
        }
        onWindowMouseMove(t) {
          this.updateMouseTracking({ x: t.clientX, y: t.clientY });
        }
        onWindowMouseUp(t) {
          this.stopMouseTracking();
        }
        onMouseDown(t) {
          var e, n;
          null === (n = (e = this.props).onMouseDown) ||
            void 0 === n ||
            n.call(e, t),
            this.startMouseTracking({ x: t.clientX, y: t.clientY });
        }
        onMouseUp(t) {
          var e, n;
          null === (n = (e = this.props).onMouseUp) ||
            void 0 === n ||
            n.call(e, t);
        }
        onScroll(t) {
          var e, n;
          null === (n = (e = this.props).onScroll) ||
            void 0 === n ||
            n.call(e, t),
            this.setState({ bAtEdge: this.currentlyAtEdge });
        }
        get div() {
          return this.m_ref.current;
        }
        get currentlyAtEdge() {
          const t = this.m_ref.current;
          return t
            ? this.scrollsVertically
              ? 0 == t.scrollTop ||
                t.scrollTop + t.clientHeight == t.scrollHeight
              : 0 == t.scrollLeft ||
                t.scrollLeft + t.clientWidth == t.scrollWidth
            : null;
        }
        startMouseTracking(t) {
          this.setState({ eScrollState: r.MouseDown }),
            (this.m_initialMousePosition = t),
            window.document.addEventListener(
              "mousemove",
              this.onWindowMouseMove,
            ),
            window.document.addEventListener("mouseup", this.onWindowMouseUp);
        }
        updateMouseTracking(t) {
          const e = (0, a.QB)(this.m_initialMousePosition, t);
          switch (this.state.eScrollState) {
            case r.MouseDown:
              if (this.props.scrollDirection == o.None) break;
              Math.abs(this.scrollsHorizontally ? e.x : e.y) >
                (this.scrollsHorizontally
                  ? d.MIN_HORIZONTAL_DRAG_DISTANCE
                  : d.MIN_VERTICAL_DRAG_DISTANCE) && this.startDragging(t);
              break;
            case r.Dragging:
              if ((this.logScrollSample(), S.m_CurrentlyDraggingPanel)) {
                if (S.m_CurrentlyDraggingPanel != this) break;
              } else S.m_CurrentlyDraggingPanel = this;
              this.scrollsHorizontally
                ? (this.m_ref.current.scrollLeft =
                    this.m_initialScrollPosition.x + e.x)
                : (this.m_ref.current.scrollTop =
                    this.m_initialScrollPosition.y + e.y);
          }
        }
        requestNextAnimationFrame() {
          (this.m_animationFrameRequestHandle = window.requestAnimationFrame(
            this.onAnimationFrame,
          )),
            (this.m_lastAnimationFrameTimeMs = performance.now());
        }
        onAnimationFrame() {
          if (this.state.eScrollState != r.Thrown) return;
          const t = (performance.now() - this.m_lastAnimationFrameTimeMs) / 1e3;
          (this.m_ref.current.scrollLeft +=
            this.m_thrownVelocityPerSecond.x * t),
            (this.m_ref.current.scrollTop +=
              this.m_thrownVelocityPerSecond.y * t);
          const e = Math.sign(this.m_thrownVelocityPerSecond.x),
            n = Math.sign(this.m_thrownVelocityPerSecond.y),
            o =
              850 +
              (((0, a.NH)(this.m_thrownVelocityPerSecond) - 500) / 1e4) * 49150,
            i = Math.min(5e4, Math.max(850, o));
          this.m_thrownVelocityPerSecond = {
            x: this.m_thrownVelocityPerSecond.x - e * i * t,
            y: this.m_thrownVelocityPerSecond.y - n * i * t,
          };
          Math.sign(this.m_thrownVelocityPerSecond.x) != e ||
          Math.sign(this.m_thrownVelocityPerSecond.y) != n ||
          (0, a.NH)(this.m_thrownVelocityPerSecond) <= 1
            ? this.setState({ eScrollState: r.Default })
            : this.requestNextAnimationFrame();
        }
        startDragging(t) {
          d.isScrollingSuppressed ||
            ((0, a.R$)() == a.OH.Overlay &&
              (this.setState({ eScrollState: r.Dragging }),
              (this.m_initialMousePosition = t),
              (this.m_initialScrollPosition = {
                x: this.m_ref.current.scrollLeft,
                y: this.m_ref.current.scrollTop,
              }),
              this.logScrollSample()));
        }
        startThrowing() {
          (this.m_thrownVelocityPerSecond = this.calculateThrowStartVelocity()),
            this.setState({ eScrollState: r.Thrown }),
            this.requestNextAnimationFrame();
        }
        cancelThrowing(t) {
          this.setState(
            (t, e) =>
              t.eScrollState == r.Thrown
                ? (window.cancelAnimationFrame(
                    this.m_animationFrameRequestHandle,
                  ),
                  { eScrollState: r.Default })
                : null,
            t,
          );
        }
        get isThrown() {
          return this.state.eScrollState == r.Thrown;
        }
        calculateThrowStartVelocity() {
          if (this.m_mostRecentScrollSamples.length < 2) return { x: 0, y: 0 };
          let t = null,
            e = 0;
          for (let n = 1; n < this.m_mostRecentScrollSamples.length; n++) {
            const o = this.m_mostRecentScrollSamples[n - 1],
              r = this.m_mostRecentScrollSamples[n],
              i = (r.timeMs - o.timeMs) / 1e3,
              s = {
                x: (r.scrollPosition.x - o.scrollPosition.x) / i,
                y: (r.scrollPosition.y - o.scrollPosition.y) / i,
              };
            t
              ? ((t.x = (t.x * e + s.x) / (e + 1)),
                (t.y = (t.y * e + s.y) / (e + 1)))
              : (t = s),
              e++;
          }
          const n = (0, a.NH)(t);
          return (
            n > d.MAX_PIXELS_PER_SECOND &&
              (t = (0, a.O6)(t, d.MAX_PIXELS_PER_SECOND / n)),
            n < d.MIN_THROW_VELOCITY_PER_SECOND && (t = null),
            null != t ? t : { x: 0, y: 0 }
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
            this.m_mostRecentScrollSamples.length > d.MAX_SCROLL_SAMPLES;
          )
            this.m_mostRecentScrollSamples.shift();
        }
        clearScrollSamples() {
          this.m_mostRecentScrollSamples = [];
        }
        stopMouseTracking() {
          S.m_CurrentlyDraggingPanel == this
            ? (this.startThrowing(),
              m.W.temporarilySuppressSoundEffect(),
              setTimeout(() => {
                S.m_CurrentlyDraggingPanel = null;
              }, 0))
            : this.setState({ eScrollState: r.Default }),
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
          return this.props.scrollDirection == o.Horizontal;
        }
        get scrollsVertically() {
          return this.props.scrollDirection == o.Vertical;
        }
        render() {
          let t = Object.assign({}, this.props);
          delete t.scrollDirection, delete t.alwaysShowScrollbars;
          const e = this.props.alwaysShowScrollbars ? "scroll" : "auto";
          return s.createElement(
            s.Fragment,
            null,
            this.state.eScrollState == r.Dragging && s.createElement(p.j, null),
            s.createElement(
              "div",
              Object.assign({}, t, {
                className: (0, h.FH)("ScrollPanel", t.className),
                style: Object.assign(Object.assign({}, t.style), {
                  overflowX:
                    this.props.scrollDirection == o.Horizontal ? e : "hidden",
                  overflowY:
                    this.props.scrollDirection == o.Vertical ? e : "hidden",
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
          var t;
          return null === (t = this.m_ref.current) || void 0 === t
            ? void 0
            : t.scrollTop;
        }
        set scrollTop(t) {
          this.m_ref.current &&
            ((this.m_ref.current.scrollTop = t), this.cancelThrowing());
        }
        get scrollLeft() {
          var t;
          return null === (t = this.m_ref.current) || void 0 === t
            ? void 0
            : t.scrollLeft;
        }
        set scrollLeft(t) {
          this.m_ref.current &&
            ((this.m_ref.current.scrollLeft = t), this.cancelThrowing());
        }
        scrollTo(t) {
          const e = () => {
            var e;
            null === (e = this.m_ref.current) || void 0 === e || e.scrollTo(t);
          };
          this.state.eScrollState == r.Thrown ? this.cancelThrowing(e) : e();
        }
        get children() {
          var t;
          return null === (t = this.m_ref.current) || void 0 === t
            ? void 0
            : t.children;
        }
        getBoundingClientRect() {
          var t;
          return null === (t = this.m_ref.current) || void 0 === t
            ? void 0
            : t.getBoundingClientRect();
        }
        get clientWidth() {
          var t;
          return null === (t = this.m_ref.current) || void 0 === t
            ? void 0
            : t.clientWidth;
        }
        get clientHeight() {
          var t;
          return null === (t = this.m_ref.current) || void 0 === t
            ? void 0
            : t.clientHeight;
        }
        get scrollWidth() {
          var t;
          return null === (t = this.m_ref.current) || void 0 === t
            ? void 0
            : t.scrollWidth;
        }
        get scrollHeight() {
          var t;
          return null === (t = this.m_ref.current) || void 0 === t
            ? void 0
            : t.scrollHeight;
        }
        get style() {
          var t;
          return null === (t = this.m_ref.current) || void 0 === t
            ? void 0
            : t.style;
        }
        contains(t) {
          var e;
          return null === (e = this.m_ref.current) || void 0 === e
            ? void 0
            : e.contains(t);
        }
      }
      (d.s_setScrollingSuppressors = u.observable.set()),
        (d.MAX_SCROLL_SAMPLES = 4),
        (d.MAX_PIXELS_PER_SECOND = 1e4),
        (d.MIN_THROW_VELOCITY_PER_SECOND = 1e3),
        (d.MIN_VERTICAL_DRAG_DISTANCE = 80),
        (d.MIN_HORIZONTAL_DRAG_DISTANCE = 40),
        (0, i.Cg)([l.o], d.prototype, "onWindowMouseMove", null),
        (0, i.Cg)([l.o], d.prototype, "onWindowMouseUp", null),
        (0, i.Cg)([l.o], d.prototype, "onMouseDown", null),
        (0, i.Cg)([l.o], d.prototype, "onMouseUp", null),
        (0, i.Cg)([l.o], d.prototype, "onScroll", null),
        (0, i.Cg)([l.o], d.prototype, "onAnimationFrame", null),
        (0, i.Cg)([u.computed], d, "isScrollingSuppressed", null),
        (0, i.Cg)([u.computed], d, "userIsDragging", null),
        (0, i.Cg)([u.action], d, "suppressScrolling", null),
        (0, i.Cg)([u.action], d, "unsuppressScrolling", null);
      class g {
        constructor() {
          (this.m_CurrentlyDraggingPanel = null), (0, u.makeObservable)(this);
        }
      }
      (0, i.Cg)(
        [u.observable],
        g.prototype,
        "m_CurrentlyDraggingPanel",
        void 0,
      );
      const S = new g();
    },
    3804: (t, e, n) => {
      n.d(e, { E: () => i });
      var o = n(7813);
      function r(t) {
        if (
          ((0, o.isObservable)(t) && (t = (0, o.toJS)(t)),
          null === t || null == t)
        )
          return t;
        if (Array.isArray(t)) return t.map(r);
        if (t instanceof Map) {
          const e = {};
          for (const n of t.keys()) e[n] = r(t.get(n));
          return e;
        }
        if ("object" == typeof t) {
          const e = {};
          for (const n of Object.keys(t)) e[n] = r(t[n]);
          return e;
        }
        return t;
      }
      function i(...t) {
        const [e, ...n] = t;
        return JSON.stringify(r(e), ...n);
      }
      (window.toJS = o.toJS),
        (window.jsonit = (t) => JSON.parse(JSON.stringify(t)));
    },
    8108: (t, e, n) => {
      n.d(e, { J: () => h });
      var o = n(1635),
        r = n(3236),
        i = n(2505),
        s = n.n(i),
        l = n(7813);
      class a {
        constructor() {
          (this.contents = l.observable.map()), (0, l.makeObservable)(this);
        }
      }
      (0, o.Cg)([l.observable], a.prototype, "contents", void 0);
      class c {
        constructor() {
          (this.m_Containers = l.observable.map()), (0, l.makeObservable)(this);
        }
        Init() {
          return (0, o.sH)(this, void 0, void 0, function* () {
            this.AddSubscribedContainer("25769803776"),
              yield this.UpdatePaths();
          });
        }
        AddSubscribedContainer(t) {
          if (!this.m_Containers.has(t)) {
            let e = new a();
            (e.handle = t), this.m_Containers.set(t, e);
          }
        }
        UpdateContainer(t, e) {
          this.AddSubscribedContainer(t);
          let n = this.m_Containers.get(t);
          n.contents.clear(),
            e.entries.forEach((t) => {
              null != t.path && n.contents.set(t.path, t);
            });
        }
        QueryContainer(t) {
          return (0, o.sH)(this, void 0, void 0, function* () {
            return new Promise(function (e, n) {
              s()
                .get("/properties.json?container=" + t)
                .then((n) => {
                  e([t, n.data]);
                })
                .catch((e) => {
                  n([t, e]);
                });
            });
          });
        }
        UpdatePaths() {
          return (0, o.sH)(this, void 0, void 0, function* () {
            let t = [];
            this.m_Containers.forEach((e) => {
              t.push(this.QueryContainer(e.handle));
            });
            try {
              (yield Promise.all(t)).forEach((t) => {
                2 != t.length
                  ? console.log(
                      "Failed to update container. ",
                      t.length,
                      "entries in array",
                    )
                  : "string" == typeof t[1]
                    ? console.log(
                        "Failed to update container ",
                        t[0],
                        ":",
                        t[1],
                      )
                    : this.UpdateContainer(t[0], t[1]);
              });
            } catch (t) {
              throw (console.log(t), t);
            }
          });
        }
        GetAllActions(t) {
          if (!this.m_Containers.has(t)) return;
          let e = [];
          return (
            this.m_Containers.get(t).contents.forEach((t) => {
              "k_unActionPropertyTag" == t.type &&
                null != t.path &&
                e.push(t.path);
            }),
            e
          );
        }
        GetActionValue(t, e) {
          if (!this.m_Containers.has(t)) return;
          let n = this.m_Containers.get(t);
          if (!n.contents.has(e)) return;
          let o = n.contents.get(e);
          return "k_unActionPropertyTag" == o.type ? o.value : void 0;
        }
        GetAllInputValues(t) {
          if (!this.m_Containers.has(t)) return;
          let e = [];
          return (
            this.m_Containers.get(t).contents.forEach((t) => {
              "k_unInputValuePropertyTag" == t.type &&
                null != t.path &&
                e.push(t.path);
            }),
            e
          );
        }
        GetInputValue(t, e) {
          if (!this.m_Containers.has(t)) return;
          let n = this.m_Containers.get(t);
          if (!n.contents.has(e)) return;
          let o = n.contents.get(e);
          if ("k_unInputValuePropertyTag" != o.type) return;
          let r = o.value;
          return r.length < 1 ? void 0 : r[0];
        }
        GetScalarInputValue(t, e) {
          let n = this.GetInputValue(t, e);
          return null == n || "scalar" != n.type ? 0 : n.value;
        }
        GetBooleanInputValue(t, e) {
          let n = this.GetInputValue(t, e);
          return null != n && "boolean" == n.type && n.value;
        }
      }
      (0, o.Cg)([l.observable], c.prototype, "m_Containers", void 0),
        (0, o.Cg)([r.o], c.prototype, "AddSubscribedContainer", null),
        (0, o.Cg)([l.action], c.prototype, "UpdateContainer", null),
        (0, o.Cg)([r.o], c.prototype, "GetAllActions", null),
        (0, o.Cg)([r.o], c.prototype, "GetActionValue", null),
        (0, o.Cg)([r.o], c.prototype, "GetAllInputValues", null),
        (0, o.Cg)([r.o], c.prototype, "GetInputValue", null),
        (0, o.Cg)([r.o], c.prototype, "GetScalarInputValue", null),
        (0, o.Cg)([r.o], c.prototype, "GetBooleanInputValue", null);
      const h = new c();
      window.paths = h;
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~6b9c0374a.js.map
