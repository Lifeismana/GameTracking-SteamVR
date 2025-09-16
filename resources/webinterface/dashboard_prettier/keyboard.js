var CLSTAMP = "10072902";
(() => {
  "use strict";
  var e,
    t = {
      6035: (e, t, s) => {
        s.d(t, { P: () => g });
        var n,
          a,
          i = s(6540),
          o = s(3815),
          l = s(4452),
          r = "function" == typeof Symbol && Symbol.for,
          h =
            null !==
              (a =
                null ===
                  (n = Object.getOwnPropertyDescriptor(
                    function () {},
                    "name",
                  )) || void 0 === n
                  ? void 0
                  : n.configurable) &&
            void 0 !== a &&
            a,
          u = r
            ? Symbol.for("react.forward_ref")
            : "function" == typeof i.forwardRef &&
              (0, i.forwardRef)(function (e) {
                return null;
              }).$$typeof,
          d = r
            ? Symbol.for("react.memo")
            : "function" == typeof i.memo &&
              (0, i.memo)(function (e) {
                return null;
              }).$$typeof;
        function g(e, t) {
          var s;
          if (d && e.$$typeof === d)
            throw new Error(
              "[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.",
            );
          if ((0, o.P)()) return e;
          var n =
              null !== (s = null == t ? void 0 : t.forwardRef) &&
              void 0 !== s &&
              s,
            a = e,
            r = e.displayName || e.name;
          if (
            u &&
            e.$$typeof === u &&
            ((n = !0), "function" != typeof (a = e.render))
          )
            throw new Error(
              "[mobx-react-lite] `render` property of ForwardRef was not a function",
            );
          var g,
            m,
            c = function (e, t) {
              return (0, l.q)(function () {
                return a(e, t);
              }, r);
            };
          return (
            (c.displayName = e.displayName),
            h &&
              Object.defineProperty(c, "name", {
                value: e.name,
                writable: !0,
                configurable: !0,
              }),
            e.contextTypes && (c.contextTypes = e.contextTypes),
            n && (c = (0, i.forwardRef)(c)),
            (c = (0, i.memo)(c)),
            (g = e),
            (m = c),
            Object.keys(g).forEach(function (e) {
              y[e] ||
                Object.defineProperty(
                  m,
                  e,
                  Object.getOwnPropertyDescriptor(g, e),
                );
            }),
            c
          );
        }
        var y = {
          $$typeof: !0,
          render: !0,
          compare: !0,
          type: !0,
          displayName: !0,
        };
      },
      4452: (e, t, s) => {
        s.d(t, { q: () => u });
        var n = s(7813),
          a = s(6540),
          i = s(6356),
          o = s(3815),
          l = s(7380),
          r = s(9888);
        function h(e) {
          e.reaction = new n.Reaction("observer".concat(e.name), function () {
            var t;
            (e.stateVersion = Symbol()),
              null === (t = e.onStoreChange) || void 0 === t || t.call(e);
          });
        }
        function u(e, t) {
          if ((void 0 === t && (t = "observed"), (0, o.P)())) return e();
          var s = a.useRef(null);
          if (!s.current) {
            var n = {
              reaction: null,
              onStoreChange: null,
              stateVersion: Symbol(),
              name: t,
              subscribe: function (e) {
                return (
                  l.Y.unregister(n),
                  (n.onStoreChange = e),
                  n.reaction || (h(n), (n.stateVersion = Symbol())),
                  function () {
                    var e;
                    (n.onStoreChange = null),
                      null === (e = n.reaction) || void 0 === e || e.dispose(),
                      (n.reaction = null);
                  }
                );
              },
              getSnapshot: function () {
                return n.stateVersion;
              },
            };
            s.current = n;
          }
          var u,
            d,
            g = s.current;
          if (
            (g.reaction || (h(g), l.Y.register(s, g, g)),
            a.useDebugValue(g.reaction, i.E),
            (0, r.useSyncExternalStore)(
              g.subscribe,
              g.getSnapshot,
              g.getSnapshot,
            ),
            g.reaction.track(function () {
              try {
                u = e();
              } catch (e) {
                d = e;
              }
            }),
            d)
          )
            throw d;
          return u;
        }
      },
      6090: (e, t, s) => {
        s.d(t, {
          $: () => w.$,
          $Z: () => V.$Z,
          Ay: () => M,
          CU: () => a.CU,
          Ci: () => f.C,
          Cw: () => i.C,
          Ee: () => V.Ee,
          Em: () => u.Em,
          Fb: () => a.Fb,
          Fi: () => p.Fi,
          GM: () => d.GM,
          GQ: () => V.GQ,
          Gz: () => V.Gz,
          HW: () => V.HW,
          I0: () => n.I0,
          IS: () => r.I,
          JZ: () => a.JZ,
          KI: () => w.KI,
          Ld: () => a.Ld,
          MQ: () => p.MQ,
          MV: () => V.MV,
          N: () => o.e,
          N1: () => c.N,
          NB: () => V.NB,
          NH: () => a.NH,
          O5: () => g.O,
          O6: () => a.O6,
          OH: () => V.OH,
          Oi: () => p.Oi,
          QB: () => a.QB,
          QR: () => w.QR,
          R$: () => V.R$,
          Rk: () => V.Rk,
          Se: () => a.Se,
          Uj: () => a.Uj,
          Vh: () => y.V,
          Xl: () => V.Xl,
          Y4: () => l.Y,
          Zk: () => p.Zk,
          _1: () => V._1,
          _h: () => p._h,
          _n: () => n._n,
          aX: () => y.a,
          b: () => V.b,
          b$: () => T.b,
          cB: () => S.L,
          dL: () => h.d,
          e_: () => a.e_,
          en: () => w.en,
          fD: () => w.fD,
          gN: () => V.gN,
          k2: () => V.k2,
          kG: () => V.kG,
          ku: () => V.ku,
          lq: () => m.l,
          m$: () => b.m,
          mX: () => n.mX,
          mo: () => V.mo,
          mu: () => V.mu,
          nX: () => u.nX,
          ne: () => V.ne,
          nq: () => k.n,
          oN: () => a.oN,
          o_: () => a.o_,
          p0: () => a.p0,
          pM: () => V.pM,
          pg: () => n.pg,
          qF: () => a.qF,
          rF: () => r.H,
          rx: () => V.rx,
          sJ: () => v.$,
          sk: () => n.sk,
          tx: () => a.tx,
          uC: () => R.u,
          vx: () => a.vx,
        });
        var n = s(2824),
          a = s(6292),
          i = s(3389),
          o = (s(4120), s(1230)),
          l = s(5830),
          r = s(6186),
          h = s(3361),
          u = (s(111), s(5723)),
          d = s(3496),
          g = s(5178),
          y = (s(428), s(9011), s(7350)),
          m = s(6847),
          c = s(5227),
          f = (s(10), s(1808)),
          p = s(7019),
          b = (s(1988), s(2527), s(9864)),
          v = (s(4189), s(322), s(1977), s(6417)),
          k = s(2303),
          S = s(8715),
          T = (s(4397), s(5459)),
          R = s(8472),
          V = (s(1184), s(3725)),
          w = s(4367);
        const M = VRHTML;
      },
      7511: (e, t, s) => {
        var n = s(1635),
          a = s(6540),
          i = s(5338),
          o = s(2505),
          l = s.n(o),
          r = s(3236),
          h = s(6090),
          u = s(3714),
          d = s(1333),
          g = s(9118),
          y = s(1532),
          m = s(6138),
          c = s(7813),
          f = s(9125);
        (0, c.configure)({ enforceActions: "never" });
        class p extends a.Component {
          constructor(e) {
            super(e),
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
                inputMode: h.Xl.Normal,
                activeKey: { nCol: -1, nRow: -1 },
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
              d.HR.Init(!1);
          }
          componentDidMount() {
            var e;
            this.m_KeyboardVisibilityCallbackHandle =
              null ===
                (e =
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.RegisterForKeyboardInfoChangedEvents) ||
              void 0 === e
                ? void 0
                : e.call(VRHTML, this.onKeyboardInfoChanged);
          }
          componentWillUnmount() {
            var e;
            null === (e = this.m_KeyboardVisibilityCallbackHandle) ||
              void 0 === e ||
              e.unregister();
          }
          onKeyboardInfoChanged(e) {
            if (e.visible) {
              const t =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRDashboardManager.GetKeyboardBuffer();
              this.setState({
                bVisible: !0,
                bDockedInDashboard: e.dockedInDashboard,
                inputMode: e.inputMode,
                bMinimalMode: !!(h.QR.Minimal & e.keyboardFlags),
                bMultilinePreview: e.lineMode == h.b.MultipleLines,
                text: t,
                textPos: t.length,
              }),
                this.updateSuggestions(t),
                this.getLayout("base"),
                this.getLayout(this.language());
            } else this.setState({ bVisible: !1 });
          }
          startClose() {
            this.setState({ bVisible: !1 }),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRDashboardManager.CloseKeyboard();
          }
          genid() {
            return (this.m_genid += 1), "vk" + this.m_genid;
          }
          language() {
            var e;
            return (
              this.m_language ||
                (this.props.language
                  ? (this.m_language = this.props.language)
                  : (this.m_language =
                      null !==
                        (e =
                          null === VRHTML || void 0 === VRHTML
                            ? void 0
                            : VRHTML.GetSteamLanguage()) && void 0 !== e
                        ? e
                        : "english")),
              this.m_language
            );
          }
          bShowPasswordPreview() {
            return this.state.inputMode == h.Xl.Password;
          }
          getLayoutFile(e) {
            return (0, n.sH)(this, void 0, void 0, function* () {
              let t = `/dashboard/keyboards/layout_${e}_${this.state.presentation}.json`;
              return l()
                .get(t)
                .then((e) => (200 != e.status ? null : e.data))
                .catch((t) =>
                  "english" != e ? this.getLayoutFile("english") : null,
                );
            });
          }
          getLayout(e) {
            this.m_languageToLayout.has(e)
              ? this.onLayoutLoaded()
              : this.getLayoutFile(e).then((t) => {
                  t &&
                    (this.m_languageToLayout.set(e, t), this.onLayoutLoaded());
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
          findShiftPlane(e) {
            if (!this.state.langLayout) return null;
            for (let t of this.state.langLayout.shiftPlanes)
              if (t.name == e) return t;
            return null;
          }
          toggleShiftPlaneWith(e) {
            (this.m_curShiftPlane && this.m_curShiftPlane.name != e) ||
              (e = "normal");
            let t = this.findShiftPlane(e);
            t &&
              ((this.m_curShiftPlane = t),
              this.setState({ shiftPlaneName: e }));
          }
          onKey(e, t) {
            if (
              e < this.state.layout.geometry.length &&
              t < this.state.layout.geometry[e].keys.length
            ) {
              let s = this.state.layout.geometry[e].keys[t];
              if ("string" == typeof s);
              else if ("key" != s.type)
                return void this.m_keyTypeToHandler.get(s.type)(s);
            }
            if (
              e < this.m_curShiftPlane.rows.length &&
              t < this.m_curShiftPlane.rows[e].length
            ) {
              let s = this.m_curShiftPlane.rows[e][t];
              "string" == typeof s
                ? this.m_keyTypeToHandler.get("key")(s)
                : this.m_keyTypeToHandler.has(s.type) &&
                  this.m_keyTypeToHandler.get(s.type)(s);
            }
          }
          handleKey(e) {
            let t;
            if (
              ((t = "string" == typeof e ? e : e.value),
              this.state.bMinimalMode)
            )
              this.UpdateText(t, 1);
            else {
              let e =
                  this.state.text.substr(0, this.state.textPos) +
                  t +
                  this.state.text.substr(this.state.textPos),
                s = this.state.textPos + t.length;
              this.UpdateText(e, s);
            }
          }
          handleReturn() {
            this.handleKey("\n");
          }
          handleDel() {
            if (this.state.bMinimalMode) this.handleKey("\b");
            else {
              let e = this.state.text.substr(0, this.state.textPos),
                t = this.state.text.substr(this.state.textPos);
              if (e.length > 0) {
                let s = e.substr(0, e.length - 1) + t,
                  n = this.state.textPos - 1;
                this.UpdateText(s, n);
              }
            }
          }
          handleShift() {
            this.toggleShiftPlaneWith("shift");
          }
          handleSymbols() {
            this.toggleShiftPlaneWith("symbols");
          }
          UpdateText(e, t) {
            this.setState({ text: e, textPos: t }),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRKeyboard.SetKeyboardText(e),
              this.updateSuggestions(this.getSuggestionBase(e, t));
          }
          handleDone(e) {
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRDashboardManager.SendKeyboardDone(),
              this.startClose();
          }
          handleCancel(e) {
            this.startClose();
          }
          handleClear(e) {
            this.setState({ text: "", textPos: 0 }), this.updateSuggestions("");
          }
          isWhite(e) {
            return " " == e;
          }
          findWordLimits(e, t) {
            if (
              t < e.length &&
              this.isWhite(e[t]) &&
              (0 == t || (t > 1 && this.isWhite(e[t - 1])))
            )
              return null;
            let s = t;
            for (; s > 0 && !this.isWhite(e[s]); ) s -= 1;
            s < e.length && this.isWhite(e[s]) && (s += 1);
            let n = s;
            for (; n < e.length && !this.isWhite(e[n]); ) n += 1;
            return [s, n];
          }
          getSuggestionBase(e, t) {
            let s = this.findWordLimits(e, t);
            return s ? e.substr(s[0], s[1] - s[0]) : null;
          }
          updateSuggestions(e) {
            var t;
            if (null != this.state.layout)
              if (this.bShowPasswordPreview())
                this.setState({ suggestions: [] });
              else if (
                (null == e &&
                  (e = this.getSuggestionBase(
                    this.state.text,
                    this.state.textPos,
                  )),
                null != e && e.length > 0)
              ) {
                new Array(this.state.layout.previewSuggestionCount);
                let s =
                  null !==
                    (t =
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.VRKeyboard.GetSuggestions(
                            e,
                            this.state.layout.previewSuggestionCount,
                          )) && void 0 !== t
                    ? t
                    : [];
                this.setState({ suggestions: s });
              } else this.setState({ suggestions: [] });
          }
          handleSuggestionClick(e) {
            if (e >= this.state.suggestions.length) return;
            let t = this.state.suggestions[e],
              s = this.findWordLimits(this.state.text, this.state.textPos);
            if (s) {
              let e = this.state.text.substr(0, s[0]);
              t += " ";
              let n = e + t + this.state.text.substr(s[1]),
                a = e.length + t.length;
              this.UpdateText(n, a);
            }
          }
          makeKeyFaceElement(e, t) {
            let s = "VRKBKeyFace";
            if ((t && (s += ` VRKBShift_${t.name}`), "string" == typeof e))
              return a.createElement(
                "span",
                { key: this.genid(), className: s },
                e,
              );
            {
              let t = e.text;
              e.value ? e.value : e.text;
              switch (
                (e.img &&
                  (t = a.createElement("img", {
                    src: `/dashboard/images/vrkeyboard/${e.img}.png`,
                  })),
                "string" == typeof t && t.startsWith("#") && (t = (0, u.we)(t)),
                e.type)
              ) {
                case "key":
                case "symbols":
                case "del":
                case "cancel":
                case "shift":
                case "return":
                  return a.createElement(
                    "span",
                    { key: this.genid(), className: s },
                    t,
                  );
                case "done":
                  return a.createElement(
                    "span",
                    { key: this.genid(), className: s + " VRKBDone" },
                    t,
                  );
                case "hole":
                  return a.createElement("span", {
                    key: this.genid(),
                    className: s,
                  });
                default:
                  return (
                    console.log(
                      "unknown key type ",
                      e.type,
                      " in keyboard layout",
                    ),
                    null
                  );
              }
            }
          }
          getKeyFaces(e, t) {
            let s = [];
            if (
              e < this.state.layout.geometry.length &&
              t < this.state.layout.geometry[e].keys.length
            ) {
              "key" != this.state.layout.geometry[e].keys[t].type &&
                s.push(
                  this.makeKeyFaceElement(
                    this.state.layout.geometry[e].keys[t],
                    null,
                  ),
                );
            }
            if (0 == s.length)
              for (let n of this.state.langLayout.shiftPlanes)
                e < n.rows.length &&
                  t < n.rows[e].length &&
                  s.push(this.makeKeyFaceElement(n.rows[e][t], n));
            return s;
          }
          getKeyElements() {
            let e = [];
            for (let t = 0; t < this.state.layout.geometry.length; ++t) {
              let s = this.state.layout.geometry[t],
                n = [];
              for (let e = 0; e < s.keys.length; ++e) {
                let i = s.keys[e],
                  o = {};
                i.flexGrow && (o.flexGrow = i.flexGrow),
                  i.flexShrink && (o.flexShrink = i.flexShrink),
                  this.state.shiftPlaneName == i.type &&
                    (o.background = "#000"),
                  this.state.activeKey.nCol == e &&
                    this.state.activeKey.nRow == t &&
                    (o.background = "#000");
                let l = this.getKeyFaces(t, e),
                  r = () => {
                    "done" == i.type && this.onKey(t, e);
                  },
                  h = () => {
                    "done" != i.type &&
                      (this.setState({ activeKey: { nRow: t, nCol: e } }),
                      this.onKey(t, e));
                  },
                  u = () => {
                    "done" != i.type &&
                      this.setState({ activeKey: { nRow: -1, nCol: -1 } });
                  };
                n.push(
                  a.createElement(
                    m.$,
                    {
                      key: this.genid(),
                      className: "VRKBKey",
                      releaseSoundEffect: null,
                      onClick: r,
                      onMouseDown: h,
                      onMouseUp: u,
                      style: o,
                    },
                    l,
                  ),
                );
              }
              let i = {};
              s.height && (i.height = s.height),
                e.push(
                  a.createElement(
                    "div",
                    { key: this.genid(), className: "VRKBRow", style: i },
                    n,
                  ),
                );
            }
            return a.createElement("div", { className: "VRKBRows" }, e);
          }
          makeCursor() {
            return a.createElement(
              "span",
              { key: this.genid(), className: "VRKBPreviewTextCursor" },
              "|",
            );
          }
          makePreviewText() {
            let e = this.state.text.substr(0, this.state.textPos),
              t = this.state.text.substr(this.state.textPos);
            return this.bShowPasswordPreview()
              ? ((e = p.kPasswordChar.repeat(e.length)),
                (t = p.kPasswordChar.repeat(t.length)),
                [
                  a.createElement(
                    "span",
                    { key: this.genid(), className: "VRKBPreviewTextPart" },
                    p.kPasswordChar.repeat(e.length),
                  ),
                  this.makeCursor(),
                  a.createElement(
                    "span",
                    { key: this.genid(), className: "VRKBPreviewTextPart" },
                    p.kPasswordChar.repeat(t.length),
                  ),
                ])
              : [
                  a.createElement(
                    "span",
                    { key: this.genid(), className: "VRKBPreviewTextPart" },
                    e,
                  ),
                  this.makeCursor(),
                  a.createElement(
                    "span",
                    { key: this.genid(), className: "VRKBPreviewTextPart" },
                    t,
                  ),
                ];
          }
          makeSuggestionElements() {
            let e = [];
            if (this.state.suggestions)
              for (let t = 0; t < this.state.suggestions.length; ++t)
                e.push(
                  a.createElement(
                    "div",
                    {
                      key: this.genid(),
                      className: "VRKBSuggestion",
                      onClick: () => this.handleSuggestionClick(t),
                    },
                    this.state.suggestions[t],
                  ),
                );
            for (
              let t = e.length;
              t < this.state.layout.previewSuggestionCount;
              ++t
            )
              e.push(
                a.createElement("div", {
                  key: this.genid(),
                  className: "VRKBSuggestion",
                }),
              );
            return e;
          }
          renderFlatPreview() {
            return this.state.bMinimalMode
              ? null
              : a.createElement(
                  "div",
                  { className: "VRKBPreviewWrapper" },
                  a.createElement(
                    "div",
                    { key: this.genid(), className: "VRKBPreviewText" },
                    this.makePreviewText(),
                  ),
                  a.createElement(
                    "div",
                    { key: this.genid(), className: "VRKBSuggestionWrapper" },
                    this.makeSuggestionElements(),
                  ),
                );
          }
          render_flat() {
            return a.createElement(
              h.dL,
              { parent_path: "/user/head" },
              a.createElement(
                h.m$,
                null,
                a.createElement(
                  h.dL,
                  { translation: this.state.layout.translation },
                  a.createElement(
                    h.Zk,
                    {
                      width: void 0,
                      height: 1,
                      interactive: !0,
                      sort_depth_bias: 0.2,
                      debug_name: "keyboard-flat",
                    },
                    a.createElement(
                      "div",
                      {
                        className: `VRKBShiftState VRKBChooseShift_${this.state.shiftPlaneName}`,
                      },
                      a.createElement(
                        "div",
                        { className: "VRKBBackground" },
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
            return a.createElement(
              "div",
              {
                className: `VRKBContainer VRKBShiftState VRKBChooseShift_${this.state.shiftPlaneName}`,
              },
              a.createElement(
                "div",
                { className: "VRKBBackground" },
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
        (p.kPasswordChar = "●"),
          (0, n.Cg)([r.o], p.prototype, "onKeyboardInfoChanged", null),
          (0, n.Cg)([r.o], p.prototype, "handleKey", null),
          (0, n.Cg)([r.o], p.prototype, "handleReturn", null),
          (0, n.Cg)([r.o], p.prototype, "handleDel", null),
          (0, n.Cg)([r.o], p.prototype, "handleShift", null),
          (0, n.Cg)([r.o], p.prototype, "handleSymbols", null),
          (0, n.Cg)([r.o], p.prototype, "handleDone", null),
          (0, n.Cg)([r.o], p.prototype, "handleCancel", null),
          (0, n.Cg)([r.o], p.prototype, "handleClear", null),
          (0, n.Cg)([r.o], p.prototype, "handleSuggestionClick", null);
        const b =
          null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.GetSteamLanguage();
        null === VRHTML ||
          void 0 === VRHTML ||
          VRHTML.VROverlay.SetInputMethod(
            VRHTML.VROverlay.ThisOverlayHandle(),
            h.Rk.Mouse,
          ),
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VRDashboardManager.SetKeyboardOverlayToThis(),
          (0, u.uV)(["systemui"], b)
            .then(() => g.W.Init())
            .then(() => y.s.Init())
            .then(() => {
              (0, f.aj)().Init("SteamVR", CLSTAMP, (0, f.d4)()),
                i
                  .H(document.getElementById("root"))
                  .render(a.createElement(p, { language: b }));
            });
      },
    },
    s = {};
  function n(e) {
    var a = s[e];
    if (void 0 !== a) return a.exports;
    var i = (s[e] = { exports: {} });
    return t[e].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.m = t),
    (e = []),
    (n.O = (t, s, a, i) => {
      if (!s) {
        var o = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [s, a, i] = e[u], l = !0, r = 0; r < s.length; r++)
            (!1 & i || o >= i) && Object.keys(n.O).every((e) => n.O[e](s[r]))
              ? s.splice(r--, 1)
              : ((l = !1), i < o && (o = i));
          if (l) {
            e.splice(u--, 1);
            var h = a();
            void 0 !== h && (t = h);
          }
        }
        return t;
      }
      i = i || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
      e[u] = [s, a, i];
    }),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (n.d = (e, t) => {
      for (var s in t)
        n.o(t, s) &&
          !n.o(e, s) &&
          Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e = { 884: 0, 527: 0, 500: 0 };
      n.O.j = (t) => 0 === e[t];
      var t = (t, s) => {
          var a,
            i,
            [o, l, r] = s,
            h = 0;
          if (o.some((t) => 0 !== e[t])) {
            for (a in l) n.o(l, a) && (n.m[a] = l[a]);
            if (r) var u = r(n);
          }
          for (t && t(s); h < o.length; h++)
            (i = o[h]), n.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return n.O(u);
        },
        s = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      s.forEach(t.bind(null, 0)), (s.push = t.bind(null, s.push.bind(s)));
    })();
  var a = n.O(
    void 0,
    [967, 991, 305, 527, 452, 170, 537, 797, 500, 554, 458, 542],
    () => n(7511),
  );
  a = n.O(a);
})(); //# sourceMappingURL=file:///c:/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/keyboard.js.map
