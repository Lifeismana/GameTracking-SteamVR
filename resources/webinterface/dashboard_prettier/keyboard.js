var CLSTAMP = "9920024";
(() => {
  "use strict";
  var e,
    t = {
      6090: (e, t, s) => {
        s.d(t, {
          $: () => _.$,
          $Z: () => V.$Z,
          Ay: () => w,
          CU: () => n.CU,
          Ci: () => c.C,
          Cw: () => i.C,
          Ee: () => V.Ee,
          Em: () => g.Em,
          Fb: () => n.Fb,
          Fi: () => f.Fi,
          GQ: () => V.GQ,
          Gz: () => V.Gz,
          HW: () => V.HW,
          I0: () => a.I0,
          JZ: () => n.JZ,
          KI: () => _.KI,
          Ld: () => n.Ld,
          MQ: () => f.MQ,
          MV: () => V.MV,
          N: () => o.e,
          N1: () => p.N,
          NB: () => V.NB,
          NH: () => n.NH,
          O5: () => d.O,
          O6: () => n.O6,
          OH: () => V.OH,
          Oi: () => f.Oi,
          QB: () => n.QB,
          QR: () => _.QR,
          R$: () => V.R$,
          Rk: () => V.Rk,
          Se: () => n.Se,
          Uj: () => n.Uj,
          Vh: () => y.V,
          Xl: () => V.Xl,
          Y4: () => r.Y,
          Zk: () => f.Zk,
          _1: () => V._1,
          _h: () => f._h,
          _n: () => a._n,
          aX: () => y.a,
          b: () => V.b,
          b$: () => R.b,
          cB: () => T.L,
          dL: () => u.d,
          e_: () => n.e_,
          en: () => _.en,
          fD: () => _.fD,
          gN: () => V.gN,
          gO: () => l.g,
          k2: () => V.k2,
          kG: () => V.kG,
          ku: () => V.ku,
          lq: () => m.l,
          m$: () => b.m,
          mX: () => a.mX,
          mo: () => V.mo,
          mu: () => V.mu,
          nX: () => g.nX,
          ne: () => V.ne,
          nq: () => v.n,
          oN: () => n.oN,
          o_: () => n.o_,
          p0: () => n.p0,
          pM: () => V.pM,
          pg: () => a.pg,
          qF: () => n.qF,
          rF: () => h.H,
          rx: () => V.rx,
          sJ: () => k.$,
          sk: () => a.sk,
          tx: () => n.tx,
          uC: () => S.u,
          vx: () => n.vx,
        });
        var a = s(2824),
          n = s(6292),
          i = s(3389),
          l = (s(4120), s(9424)),
          o = s(1230),
          r = s(5830),
          h = s(6186),
          u = s(3361),
          g = (s(111), s(5723)),
          d = (s(3496), s(5178)),
          y = (s(428), s(9011), s(7350)),
          m = s(6847),
          p = s(5227),
          c = (s(10), s(1808)),
          f = s(7019),
          b = (s(1988), s(2527), s(9864)),
          k = (s(4189), s(322), s(1977), s(6417)),
          v = s(2303),
          T = s(8715),
          R = (s(4397), s(5459)),
          S = s(8472),
          V = (s(1184), s(3725)),
          _ = s(4367);
        const w = VRHTML;
      },
      7511: (e, t, s) => {
        var a = s(1635),
          n = s(6540),
          i = s(5338),
          l = s(2505),
          o = s.n(l),
          r = s(3236),
          h = s(6090),
          u = s(3714),
          g = s(1333),
          d = s(9118),
          y = s(1532),
          m = s(6138);
        class p extends n.Component {
          constructor(e) {
            super(e),
              (this.m_genid = 0),
              (this.m_language = null),
              (this.m_languageToLayout = new Map()),
              (this.m_keyTypeToHandler = null),
              (this.m_curShiftPlane = null),
              (this.m_keyElements = null),
              (this.m_mailbox = new h._n()),
              this.m_mailbox.Init("keyboard_vrwebui").then(() => {
                this.m_mailbox.RegisterHandler(
                  "keyboard_shown",
                  this.OnKeyboardShown,
                ),
                  this.m_mailbox.RegisterHandler(
                    "keyboard_hidden",
                    this.OnKeyboardHidden,
                  );
              }),
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
              g.HR.Init(!1);
          }
          OnKeyboardHidden(e) {
            this.setState({ bVisible: !1 });
          }
          OnKeyboardShown(e) {
            const t =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRDashboardManager.GetKeyboardInputInfo();
            this.setState({
              bVisible: !0,
              bDockedInDashboard: t.dockedInDashboard,
              inputMode: t.inputMode,
              bMinimalMode: !!(h.QR.Minimal & t.keyboardFlags),
              bMultilinePreview: t.lineMode == h.b.MultipleLines,
              text: t.keyboardBuffer,
              textPos: t.keyboardBuffer.length,
            }),
              this.updateSuggestions(t.keyboardBuffer),
              this.getLayout("base"),
              this.getLayout(this.language());
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
            return (0, a.sH)(this, void 0, void 0, function* () {
              let t = `/dashboard/keyboards/layout_${e}_${this.state.presentation}.json`;
              return o()
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
                  a = this.state.textPos - 1;
                this.UpdateText(s, a);
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
            let a = s;
            for (; a < e.length && !this.isWhite(e[a]); ) a += 1;
            return [s, a];
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
              let a = e + t + this.state.text.substr(s[1]),
                n = e.length + t.length;
              this.UpdateText(a, n);
            }
          }
          makeKeyFaceElement(e, t) {
            let s = "VRKBKeyFace";
            if ((t && (s += ` VRKBShift_${t.name}`), "string" == typeof e))
              return n.createElement(
                "span",
                { key: this.genid(), className: s },
                e,
              );
            {
              let t = e.text;
              e.value ? e.value : e.text;
              switch (
                (e.img &&
                  (t = n.createElement("img", {
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
                  return n.createElement(
                    "span",
                    { key: this.genid(), className: s },
                    t,
                  );
                case "done":
                  return n.createElement(
                    "span",
                    { key: this.genid(), className: s + " VRKBDone" },
                    t,
                  );
                case "hole":
                  return n.createElement("span", {
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
              for (let a of this.state.langLayout.shiftPlanes)
                e < a.rows.length &&
                  t < a.rows[e].length &&
                  s.push(this.makeKeyFaceElement(a.rows[e][t], a));
            return s;
          }
          getKeyElements() {
            let e = [];
            for (let t = 0; t < this.state.layout.geometry.length; ++t) {
              let s = this.state.layout.geometry[t],
                a = [];
              for (let e = 0; e < s.keys.length; ++e) {
                let i = s.keys[e],
                  l = {};
                i.flexGrow && (l.flexGrow = i.flexGrow),
                  i.flexShrink && (l.flexShrink = i.flexShrink),
                  this.state.shiftPlaneName == i.type &&
                    (l.background = "#000"),
                  this.state.activeKey.nCol == e &&
                    this.state.activeKey.nRow == t &&
                    (l.background = "#000");
                let o = this.getKeyFaces(t, e),
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
                a.push(
                  n.createElement(
                    m.$,
                    {
                      key: this.genid(),
                      className: "VRKBKey",
                      releaseSoundEffect: null,
                      onClick: r,
                      onMouseDown: h,
                      onMouseUp: u,
                      style: l,
                    },
                    o,
                  ),
                );
              }
              let i = {};
              s.height && (i.height = s.height),
                e.push(
                  n.createElement(
                    "div",
                    { key: this.genid(), className: "VRKBRow", style: i },
                    a,
                  ),
                );
            }
            return n.createElement("div", { className: "VRKBRows" }, e);
          }
          makeCursor() {
            return n.createElement(
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
                  n.createElement(
                    "span",
                    { key: this.genid(), className: "VRKBPreviewTextPart" },
                    p.kPasswordChar.repeat(e.length),
                  ),
                  this.makeCursor(),
                  n.createElement(
                    "span",
                    { key: this.genid(), className: "VRKBPreviewTextPart" },
                    p.kPasswordChar.repeat(t.length),
                  ),
                ])
              : [
                  n.createElement(
                    "span",
                    { key: this.genid(), className: "VRKBPreviewTextPart" },
                    e,
                  ),
                  this.makeCursor(),
                  n.createElement(
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
                  n.createElement(
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
                n.createElement("div", {
                  key: this.genid(),
                  className: "VRKBSuggestion",
                }),
              );
            return e;
          }
          renderFlatPreview() {
            return this.state.bMinimalMode
              ? null
              : n.createElement(
                  "div",
                  { className: "VRKBPreviewWrapper" },
                  n.createElement(
                    "div",
                    { key: this.genid(), className: "VRKBPreviewText" },
                    this.makePreviewText(),
                  ),
                  n.createElement(
                    "div",
                    { key: this.genid(), className: "VRKBSuggestionWrapper" },
                    this.makeSuggestionElements(),
                  ),
                );
          }
          render_flat() {
            return n.createElement(
              h.dL,
              { parent_path: "/user/head" },
              n.createElement(
                h.m$,
                null,
                n.createElement(
                  h.dL,
                  { translation: this.state.layout.translation },
                  n.createElement(
                    h.Zk,
                    {
                      width: void 0,
                      height: 1,
                      interactive: !0,
                      sort_depth_bias: 0.2,
                      debug_name: "keyboard-flat",
                    },
                    n.createElement(
                      "div",
                      {
                        className: `VRKBShiftState VRKBChooseShift_${this.state.shiftPlaneName}`,
                      },
                      n.createElement(
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
            return n.createElement(
              "div",
              {
                className: `VRKBContainer VRKBShiftState VRKBChooseShift_${this.state.shiftPlaneName}`,
              },
              n.createElement(
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
          (0, a.Cg)([r.o], p.prototype, "OnKeyboardHidden", null),
          (0, a.Cg)([r.o], p.prototype, "OnKeyboardShown", null),
          (0, a.Cg)([r.o], p.prototype, "handleKey", null),
          (0, a.Cg)([r.o], p.prototype, "handleReturn", null),
          (0, a.Cg)([r.o], p.prototype, "handleDel", null),
          (0, a.Cg)([r.o], p.prototype, "handleShift", null),
          (0, a.Cg)([r.o], p.prototype, "handleSymbols", null),
          (0, a.Cg)([r.o], p.prototype, "handleDone", null),
          (0, a.Cg)([r.o], p.prototype, "handleCancel", null),
          (0, a.Cg)([r.o], p.prototype, "handleClear", null),
          (0, a.Cg)([r.o], p.prototype, "handleSuggestionClick", null);
        const c =
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
          (0, u.uV)(["systemui"], c)
            .then(() => d.W.Init())
            .then(() => y.s.Init())
            .then(() => {
              i.H(document.getElementById("root")).render(
                n.createElement(p, { language: c }),
              );
            });
      },
    },
    s = {};
  function a(e) {
    var n = s[e];
    if (void 0 !== n) return n.exports;
    var i = (s[e] = { exports: {} });
    return t[e].call(i.exports, i, i.exports, a), i.exports;
  }
  (a.m = t),
    (e = []),
    (a.O = (t, s, n, i) => {
      if (!s) {
        var l = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [s, n, i] = e[u], o = !0, r = 0; r < s.length; r++)
            (!1 & i || l >= i) && Object.keys(a.O).every((e) => a.O[e](s[r]))
              ? s.splice(r--, 1)
              : ((o = !1), i < l && (l = i));
          if (o) {
            e.splice(u--, 1);
            var h = n();
            void 0 !== h && (t = h);
          }
        }
        return t;
      }
      i = i || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
      e[u] = [s, n, i];
    }),
    (a.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return a.d(t, { a: t }), t;
    }),
    (a.d = (e, t) => {
      for (var s in t)
        a.o(t, s) &&
          !a.o(e, s) &&
          Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
    }),
    (a.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = { 884: 0, 527: 0, 500: 0 };
      a.O.j = (t) => 0 === e[t];
      var t = (t, s) => {
          var n,
            i,
            [l, o, r] = s,
            h = 0;
          if (l.some((t) => 0 !== e[t])) {
            for (n in o) a.o(o, n) && (a.m[n] = o[n]);
            if (r) var u = r(a);
          }
          for (t && t(s); h < l.length; h++)
            (i = l[h]), a.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
          return a.O(u);
        },
        s = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      s.forEach(t.bind(null, 0)), (s.push = t.bind(null, s.push.bind(s)));
    })();
  var n = a.O(
    void 0,
    [967, 991, 305, 527, 452, 170, 537, 797, 500, 458, 542],
    () => a(7511),
  );
  n = a.O(n);
})(); //# sourceMappingURL=file:///c:/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/keyboard.js.map
