var CLSTAMP = "10630260";
(() => {
  "use strict";
  var e,
    t = {
      6090: (e, t, a) => {
        a.d(t, {
          Ay: () => c,
          GM: () => n.GM,
          I0: () => i.I0,
          M9: () => i.M9,
          OH: () => s.OH,
          R$: () => s.R$,
          Zk: () => o.Zk,
          _n: () => i._n,
          dL: () => r.d,
          fD: () => l.fD,
        });
        var i = a(2824),
          r = (a(3389), a(4120), a(1230), a(5830), a(6186), a(3361)),
          n = (a(111), a(5723), a(3496)),
          o =
            (a(5178),
            a(428),
            a(9011),
            a(7350),
            a(6847),
            a(5227),
            a(10),
            a(1808),
            a(7019)),
          s =
            (a(1988),
            a(2527),
            a(9864),
            a(4189),
            a(322),
            a(1977),
            a(6417),
            a(2303),
            a(8715),
            a(4397),
            a(5459),
            a(8472),
            a(1184),
            a(3725)),
          l = a(4367);
        const c = VRHTML;
      },
      4170: (e, t, a) => {
        var i = a(1635),
          r = a(6540),
          n = a(5338),
          o = a(3236),
          s = a(6090),
          l = a(3714),
          c = a(1333),
          d = a(7813),
          v = a(582);
        (0, d.configure)({ enforceActions: "never" });
        class u extends r.Component {
          constructor(e) {
            super(e),
              (this.m_toastMailbox = new s._n()),
              (this.state = { visible: !1, title: "", header: "", text: "" }),
              this.m_toastMailbox.Init("toast_renderer/main"),
              this.m_toastMailbox.RegisterHandler(
                "render_toast",
                this.OnRenderToast,
              ),
              c.HR.Init(!1);
          }
          OnRenderToast(e) {
            var t;
            let a =
              null ===
                (t =
                  null === s.Ay || void 0 === s.Ay
                    ? void 0
                    : s.Ay.VROverlayInternal) || void 0 === t
                ? void 0
                : t.GetToastInfo(e.notification_id);
            a
              ? this.setState({
                  visible: !0,
                  title: a.sTitle,
                  header: a.sHeader || "",
                  text: a.sText,
                  image: a.sImageData,
                })
              : this.setState({
                  visible: !1,
                  title: "",
                  header: "",
                  text: "",
                  image: null,
                });
          }
          render() {
            return this.state.visible
              ? r.createElement(
                  "div",
                  { className: "VRNotificationRoot" },
                  r.createElement(
                    "div",
                    { className: "VRNotificationApplicationName" },
                    this.state.title,
                  ),
                  r.createElement(
                    "div",
                    { className: "VRNotificationFrame" },
                    r.createElement("div", {
                      className: "VRToastImage",
                      style: {
                        backgroundImage: this.state.image
                          ? "url('" + this.state.image + "')"
                          : "url('/dashboard/images/icons/notification_steamcog.png')",
                      },
                    }),
                    r.createElement(
                      "div",
                      { className: "VRNotificationTextWrapper" },
                      r.createElement(
                        "div",
                        { className: "VRNotificationHeader" },
                        this.state.header,
                      ),
                      r.createElement(
                        "div",
                        { className: "VRNotificationText" },
                        this.state.text,
                      ),
                    ),
                  ),
                )
              : null;
          }
        }
        (0, i.Cg)([o.o], u.prototype, "OnRenderToast", null),
          (0, l.uV)(
            [],
            null === s.Ay || void 0 === s.Ay ? void 0 : s.Ay.GetSteamLanguage(),
          )
            .then(() => {
              (0, v.aj)().Init("SteamVR", CLSTAMP, (0, v.d4)()),
                n
                  .H(document.getElementById("root"))
                  .render(r.createElement(u, null));
            })
            .catch((e) =>
              console.error("Failed to initialize notification toast:", e),
            );
      },
    },
    a = {};
  function i(e) {
    var r = a[e];
    if (void 0 !== r) return r.exports;
    var n = (a[e] = { exports: {} });
    return t[e].call(n.exports, n, n.exports, i), n.exports;
  }
  (i.m = t),
    (e = []),
    (i.O = (t, a, r, n) => {
      if (!a) {
        var o = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [a, r, n] = e[d], s = !0, l = 0; l < a.length; l++)
            (!1 & n || o >= n) && Object.keys(i.O).every((e) => i.O[e](a[l]))
              ? a.splice(l--, 1)
              : ((s = !1), n < o && (o = n));
          if (s) {
            e.splice(d--, 1);
            var c = r();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      n = n || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > n; d--) e[d] = e[d - 1];
      e[d] = [a, r, n];
    }),
    (i.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return i.d(t, { a: t }), t;
    }),
    (i.d = (e, t) => {
      for (var a in t)
        i.o(t, a) &&
          !i.o(e, a) &&
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
    }),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = { 915: 0, 527: 0, 500: 0 };
      i.O.j = (t) => 0 === e[t];
      var t = (t, a) => {
          var r,
            n,
            [o, s, l] = a,
            c = 0;
          if (o.some((t) => 0 !== e[t])) {
            for (r in s) i.o(s, r) && (i.m[r] = s[r]);
            if (l) var d = l(i);
          }
          for (t && t(a); c < o.length; c++)
            (n = o[c]), i.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return i.O(d);
        },
        a = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a)));
    })();
  var r = i.O(
    void 0,
    [967, 352, 211, 305, 527, 797, 148, 554, 500, 198, 737, 384],
    () => i(4170),
  );
  r = i.O(r);
})(); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/notificationtoast.js.map
