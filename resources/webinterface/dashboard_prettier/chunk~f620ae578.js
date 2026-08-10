var CLSTAMP = "10893990";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [300],
  {
    4728: (e, t, n) => {
      function a(e, t, n) {
        return null == e || isNaN(e) ? e : Math.max(t, Math.min(n, e));
      }
      n.d(t, { OQ: () => a });
    },
    6185: (e, t, n) => {
      n.d(t, { l: () => i });
      var a = n(6540);
      let r = 0;
      function i() {
        const e = a.useRef(void 0);
        return (
          void 0 === e.current && (e.current = "svgid_" + r++),
          [e.current, `url(#${e.current})`]
        );
      }
    },
    9383: (e, t, n) => {
      n.d(t, {
        CL: () => P,
        JP: () => a,
        JQ: () => C,
        P9: () => f,
        gU: () => _,
        sj: () => S,
      });
      var a,
        r = n(1635),
        i = n(7813),
        o = n(296),
        s = n(6090),
        l = n(6540),
        m = n(3606),
        u = n(921),
        p = n(7727),
        y = n(3779),
        h = n(1651),
        c = n(9961),
        v = n(776),
        d = n(4007),
        g = n(2741),
        b = n(1391),
        O = n(3676),
        D = n(1333);
      !(function (e) {
        (e[(e.Alive = 0)] = "Alive"), (e[(e.Destroyed = 1)] = "Destroyed");
      })(a || (a = {}));
      class S {
        get OnDestroyed() {
          return this.m_OnDestroyed;
        }
        get frame() {
          return this.m_Frame;
        }
        get pageID() {
          return this.m_unPageID;
        }
        get state() {
          return this.m_eState;
        }
        get summonOverlayKey() {
          return this.m_sSummonOverlayKey;
        }
        get isExternalDashboardOverlay() {
          return !!this.m_bExternalDashboardOverlay;
        }
        get isActivePage() {
          return this.m_Frame.activePageID === this.m_unPageID;
        }
        get isActiveAndVisiblePage() {
          return this.isActivePage && this.frame.isCurrentlyVisible;
        }
        get mountableID() {
          return `frame:${this.frame.frameID}:page:${this.pageID}:mountable`;
        }
        get latestContentSize() {
          return this.size.latestContentSize;
        }
        get logPrefix() {
          let e = this.frame.title;
          return (
            e.length > g.kr && (e = e.substring(0, g.kr - 3) + "..."),
            `${this.frame.frameID}[${this.pageID}] "${e}"`
          );
        }
        RegisterComponent(e) {
          this.m_setComponents.add(e);
        }
        constructor(e, t, n) {
          (this.props = void 0),
            (this.m_eState = a.Alive),
            (this.m_OnDestroyed = new h.l()),
            (this.m_sSummonOverlayKey = void 0),
            (this.m_bExternalDashboardOverlay = !1),
            (this.m_mainPanel = void 0),
            (this.m_bSpatialize = void 0),
            (this.Log = new v.wd("Frame", () => this.logPrefix)),
            (this.m_setComponents = new Set()),
            (this.keyboard = new y.Y(this)),
            (this.sharing = void 0),
            (this.size = new c.wP(this)),
            (this.inputFocus = new b.v(this)),
            (this.m_Frame = e),
            (this.m_unPageID = t),
            (this.props = n),
            (0, i.makeObservable)(this);
        }
        Init() {
          for (const e of this.m_setComponents) e.Init();
        }
        DestroyPage() {
          this.m_eState != a.Destroyed &&
            ((this.m_eState = a.Destroyed),
            this.m_OnDestroyed.Dispatch(),
            this.m_OnDestroyed.ClearAllCallbacks());
        }
        SetSummonOverlayKey(e) {
          this.m_sSummonOverlayKey = e;
        }
        SetIsExternalDashboardOverlay(e) {
          this.m_bExternalDashboardOverlay = e;
        }
        SetMainPanel(e) {
          if (!e) return { Unset: () => {} };
          this.m_mainPanel = e;
          const t = this.size.SetMainPanel(e).Unset;
          return {
            Unset: () => {
              (this.m_mainPanel = void 0), t();
            },
          };
        }
        get mainPanelID() {
          if (this.m_mainPanel) {
            const e = this.m_mainPanel.getID();
            if (null == e) return;
            return (0, s.nXw)(m.C6, e);
          }
          if (this.isExternalDashboardOverlay) {
            if (null == this.summonOverlayKey) return;
            return (0, s.nXw)(m.cb, this.summonOverlayKey) + "_Panel";
          }
        }
        get mainPanelSGID() {
          var e;
          return this.m_mainPanel
            ? this.m_mainPanel.getSGID()
            : (this.isExternalDashboardOverlay &&
                null != this.summonOverlayKey &&
                (null === (e = d.Q.GetOverlayInfo(this.summonOverlayKey)) ||
                void 0 === e
                  ? void 0
                  : e.unStandalonePanelSGID)) ||
                void 0;
        }
        GetPanelAnchorID(e) {
          if (!this.isExternalDashboardOverlay)
            return `frame:${this.frame.frameID}:page:${this.pageID}:anchor:${e}`;
          {
            if (null == this.summonOverlayKey) return;
            const t = (0, s.nXw)(m.cb, this.summonOverlayKey);
            switch (e) {
              case s.OiK.TopCenter:
                return t + "_TopCenter";
              case s.OiK.CenterLeft:
                return t + "_CenterLeft";
              case s.OiK.CenterRight:
                return t + "_CenterRight";
              case s.OiK.BottomCenter:
                return t + "_BottomCenter";
              case s.OiK.BottomRight:
                return t + "_BottomRight";
            }
          }
        }
        get isSystemPanel() {
          return (
            this.inputFocus.componentProps.steamInputAppID == m.qx ||
            (0, O.n)(this.inputFocus.componentProps.steamInputAppID) ||
            (this.m_mainPanel && !this.m_mainPanel.isExternal)
          );
        }
        get shouldShowMinimalDecorations() {
          return (
            null != this.summonOverlayKey &&
            d.Q.GetOverlayFlag(this.summonOverlayKey, 67108864)
          );
        }
        get canSpatialize() {
          var e;
          return (
            !!D.HR.settings.get("/settings/audio/enableSpatializeGlobal") &&
            ((null === (e = this.summonOverlayKey) || void 0 === e
              ? void 0
              : e.startsWith(m.bl + ".")) ||
              this.summonOverlayKey == m.P)
          );
        }
        get isSpatializeEnabled() {
          return (
            !!this.summonOverlayKey &&
            !!this.canSpatialize &&
            (null == this.m_bSpatialize &&
              ((this.m_bSpatialize = !1),
              D.HR.GetAppSettings(this.summonOverlayKey).then(
                (e) => (this.m_bSpatialize = e.spatialize),
              )),
            this.m_bSpatialize)
          );
        }
        SetSpatializeEnabled(e) {
          if (!this.summonOverlayKey) return;
          this.m_bSpatialize = e;
          let t = {};
          (t.spatialize = e), D.HR.SetAppSettings(this.summonOverlayKey, t);
        }
      }
      (0, r.Cg)([i.observable], S.prototype, "props", void 0),
        (0, r.Cg)([i.observable], S.prototype, "m_eState", void 0),
        (0, r.Cg)([i.observable], S.prototype, "m_sSummonOverlayKey", void 0),
        (0, r.Cg)(
          [i.observable],
          S.prototype,
          "m_bExternalDashboardOverlay",
          void 0,
        ),
        (0, r.Cg)([i.observable], S.prototype, "m_mainPanel", void 0),
        (0, r.Cg)([i.observable], S.prototype, "m_bSpatialize", void 0),
        (0, r.Cg)([i.computed], S.prototype, "state", null),
        (0, r.Cg)([i.computed], S.prototype, "summonOverlayKey", null),
        (0, r.Cg)(
          [i.computed],
          S.prototype,
          "isExternalDashboardOverlay",
          null,
        ),
        (0, r.Cg)([i.computed], S.prototype, "isActivePage", null),
        (0, r.Cg)([i.computed], S.prototype, "isActiveAndVisiblePage", null),
        (0, r.Cg)([i.computed], S.prototype, "mountableID", null),
        (0, r.Cg)([i.computed], S.prototype, "latestContentSize", null),
        (0, r.Cg)([i.computed], S.prototype, "logPrefix", null),
        (0, r.Cg)([i.action], S.prototype, "DestroyPage", null),
        (0, r.Cg)([i.action], S.prototype, "SetSummonOverlayKey", null),
        (0, r.Cg)(
          [i.action],
          S.prototype,
          "SetIsExternalDashboardOverlay",
          null,
        ),
        (0, r.Cg)([i.action], S.prototype, "SetMainPanel", null),
        (0, r.Cg)([i.computed], S.prototype, "mainPanelID", null),
        (0, r.Cg)([i.computed], S.prototype, "mainPanelSGID", null),
        (0, r.Cg)([i.computed], S.prototype, "isSystemPanel", null),
        (0, r.Cg)(
          [i.computed],
          S.prototype,
          "shouldShowMinimalDecorations",
          null,
        ),
        (0, r.Cg)([i.computed], S.prototype, "canSpatialize", null),
        (0, r.Cg)([i.computed], S.prototype, "isSpatializeEnabled", null),
        (0, r.Cg)([i.action.bound], S.prototype, "SetSpatializeEnabled", null);
      const f = l.forwardRef(function (e, t) {
          const { children: n, summonOverlayKey: a } = e,
            { frame: r } = (0, p.N)(),
            m = l.useMemo(() => r.CreatePage(e), [r]);
          l.useLayoutEffect(() =>
            (0, i.runInAction)(() => {
              m.props = e;
            }),
          ),
            l.useEffect(() => m.SetSummonOverlayKey(a), [m, r, a]),
            (0, u.D5)(t, m),
            l.useEffect(() => (m.Init(), () => m.DestroyPage()), [m]);
          const y = (0, o.q3)(() => m.mountableID);
          return l.createElement(
            p.t.Provider,
            { value: { frame: r, page: m } },
            l.createElement(s.IS7, { id: y }, n),
          );
        }),
        C = l.forwardRef(function (e, t) {
          var n, a;
          const {
              requireExternalOverlay: i = !0,
              overlayKey: y,
              componentProps: h,
            } = e,
            c = (0, r.Tt)(e, [
              "requireExternalOverlay",
              "overlayKey",
              "componentProps",
            ]),
            { frame: v } = (0, p.N)(),
            g = l.useCallback(
              (e) => {
                null == e || e.SetIsExternalDashboardOverlay(!0),
                  (0, u.cZ)(t, e);
              },
              [t],
            ),
            b = (0, o.q3)(() => v.curvature.curvatureTransformOriginID),
            O = (0, o.q3)(() => d.Q.GetOverlayInfo(y)),
            D =
              null !== (n = null == O ? void 0 : O.unFlags) && void 0 !== n
                ? n
                : 0,
            S = (16 & D) > 0,
            C = (1073741824 & D) > 0;
          return i && !O
            ? null
            : l.createElement(
                f,
                Object.assign({}, c, {
                  summonOverlayKey:
                    null !== (a = e.summonOverlayKey) && void 0 !== a ? a : y,
                  ref: g,
                  componentProps: Object.assign(Object.assign({}, h), {
                    keyboard: Object.assign(
                      { overlayKeyForKeyboardInput: y },
                      null == h ? void 0 : h.keyboard,
                    ),
                    inputFocus: Object.assign(
                      {
                        vrClientPID: S ? O.unClientPID : void 0,
                        steamInputAppID: C ? O.unSteamInputAppID : void 0,
                      },
                      null == h ? void 0 : h.inputFocus,
                    ),
                  }),
                }),
                l.createElement(s.HWh, { mountedId: (0, s.nXw)(m.cb, y) }),
                l.createElement(s.dLy, {
                  id: (0, s.nXw)(m.cb, y) + "_CurvatureOrigin",
                  parent_id: b,
                }),
                c.children,
              );
        });
      function P(e) {
        const { page: t } = (0, p.N)();
        if ((0, o.q3)(() => (null == t ? void 0 : t.isActiveAndVisiblePage)))
          return l.createElement(l.Fragment, null, e.children);
      }
      function _(e) {
        const { frame: t, page: n } = (0, p.N)();
        if (t && n && !n.isExternalDashboardOverlay)
          return l.createElement(
            l.Fragment,
            null,
            g.i_.map((e) =>
              l.createElement(s.Ci8, {
                key: e,
                id: n.GetPanelAnchorID(e),
                location: e,
              }),
            ),
          );
      }
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~f620ae578.js.map
