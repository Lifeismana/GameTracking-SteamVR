/*! For license information please see systemui.js.LICENSE.txt */
(() => {
  var e,
    t = {
      3884: (e, t, n) => {
        "use strict";
        n.d(t, {
          ui: () => a.ui,
          tS: () => a.tS,
          Nv: () => r,
          A4: () => Ne,
          CH: () => Fe,
          iN: () => Z,
          Oq: () => a.Oq,
          dq: () => a.dq,
          Op: () => p,
          Y9: () => ce,
          eK: () => Ue,
          lx: () => D,
          XX: () => _,
          zA: () => x,
          Qu: () => P,
          vS: () => Ce,
          l0: () => T,
          Pw: () => w,
          LL: () => d,
          GC: () => I,
          Ic: () => me,
          Vv: () => ve,
          xj: () => be,
          xY: () => k,
          Kg: () => E,
          qR: () => f,
          Uk: () => fe,
          QZ: () => c,
          zq: () => u,
          ZP: () => b,
          sH: () => ke,
          Z9: () => y,
          qC: () => S,
          a0: () => V,
          iC: () => Be,
          qA: () => l,
          UU: () => a.UU,
          aB: () => a.aB,
          sO: () => Ge,
          jm: () => Ae,
          rN: () => a.rN,
          JR: () => a.JR,
          LY: () => a.LY,
          q9: () => a.q9,
          x1: () => Le,
          kH: () => We,
          Pd: () => a.Pd,
          sl: () => de,
          Fx: () => a.Fx,
          Fs: () => a.Fs,
          mT: () => a.mT,
          M9: () => a.M9,
          Dd: () => he,
          s_: () => Ee,
          at: () => He,
          Bl: () => _e,
          jL: () => Oe,
          qI: () => $,
          gQ: () => Pe,
          Sb: () => ze,
          n0: () => Ve,
          hz: () => s,
          OK: () => ee,
          Zj: () => a.Zj,
          eQ: () => a.eQ,
          $u: () => xe,
          VW: () => ue,
          gO: () => Me,
          wx: () => Te,
          Co: () => Ke,
          Kf: () => v,
          wU: () => m,
        });
        var i = n(655),
          o = n(7056);
        class r {
          constructor() {
            (this.m_wsWebSocketToServer = void 0),
              (this.m_oHandlers = {}),
              (this.m_oWaits = {}),
              (this.m_oConnectWaits = []),
              (this.m_fnConnectResolve = void 0),
              (this.m_nNextMessageNumber = 1);
          }
          OpenWebSocketToHost() {
            return new Promise((e, t) => {
              console.log(
                "Connecting vrmailbox " + this.m_sMailboxName + "...",
              );
              let n = "ws://127.0.0.1:27062";
              this.m_sWebSecret && (n += "?secret=" + this.m_sWebSecret),
                (this.m_fnConnectResolve = e),
                (this.m_wsWebSocketToServer = new WebSocket(n)),
                this.m_wsWebSocketToServer.addEventListener("open", (t) => {
                  this.OnWebSocketOpen(t), e();
                }),
                this.m_wsWebSocketToServer.addEventListener(
                  "message",
                  this.OnWebSocketMessage,
                ),
                this.m_wsWebSocketToServer.addEventListener(
                  "close",
                  this.OnWebSocketClose,
                );
            });
          }
          static EnsureUniqueName(e) {
            if (e.includes("/")) return e;
            let t;
            return (
              (t = VRHTML ? VRHTML.GetWebHelperId() : Date.now().toString()),
              e + "/" + t + "_" + this.s_nNextMailboxNumber++
            );
          }
          Init(e, t) {
            return (0, i.mG)(this, void 0, void 0, function* () {
              return (
                (this.m_sMailboxName = r.EnsureUniqueName(e)),
                (this.m_sWebSecret = t),
                (this.connected = !1),
                this.OpenWebSocketToHost()
              );
            });
          }
          get name() {
            return this.m_sMailboxName;
          }
          OnWebSocketOpen(e) {
            (this.connected = !0),
              this.WebSocketSend("mailbox_open " + this.m_sMailboxName),
              window.addEventListener("beforeunload", () => {
                this.WebSocketSend("websocket_close");
              }),
              this.m_fnConnectResolve &&
                (this.m_fnConnectResolve(), (this.m_fnConnectResolve = void 0));
            for (let e of this.m_oConnectWaits) e();
            this.m_oConnectWaits = [];
          }
          OnWebSocketClose(e) {
            console.log("Lost connection to host..."),
              (this.connected = !1),
              this.OpenWebSocketToHost();
          }
          WebSocketSend(e) {
            return (
              null != this.m_wsWebSocketToServer &&
              1 == this.m_wsWebSocketToServer.readyState &&
              (this.m_wsWebSocketToServer.send(e), !0)
            );
          }
          OnWebSocketMessage(e) {
            let t = JSON.parse(e.data),
              n = !1;
            if (
              (this.m_oHandlers.hasOwnProperty(t.type) &&
                (this.m_oHandlers[t.type](t), (n = !0)),
              this.m_oWaits.hasOwnProperty(t.type))
            ) {
              let e = !1;
              for (let n of this.m_oWaits[t.type])
                n.nMessageId == t.message_id && (n.callback(t), (e = !0));
              e
                ? (this.m_oWaits[t.type] = this.m_oWaits[t.type].filter(
                    (e) => e.nMessageId == t.message_id,
                  ))
                : console.log(
                    `Received a ${t.type} message, but didn't have a matching message_id. Did the other end forget to mirror message_id?`,
                  ),
                (n = !0);
            }
            n || console.log("Received unhandled message: ", t);
          }
          RegisterHandler(e, t) {
            this.m_oHandlers[e] = t;
          }
          SendMessage(e, t) {
            return this.WebSocketSend(
              "mailbox_send " + e + " " + JSON.stringify(t),
            );
          }
          WaitForMessage(e, t) {
            return new Promise((n, i) => {
              this.m_oWaits[e] || (this.m_oWaits[e] = []),
                this.m_oWaits[e].push({ callback: n, nMessageId: t });
            });
          }
          WaitForConnect() {
            return new Promise((e, t) => {
              this.connected ? e() : this.m_oConnectWaits.push(e);
            });
          }
          WaitForMailbox(e) {
            return (0, i.mG)(this, void 0, void 0, function* () {
              let t = {
                type: "request_mailbox_registration_notification",
                mailbox_name: e,
              };
              return this.SendMessageAndWaitForResponse(
                "web_server_mailbox",
                t,
                "mailbox_registered",
              );
            });
          }
          SendMessageAndWaitForResponse(e, t, n) {
            let i = Object.assign({}, t);
            return (
              null == i.returnAddress &&
                (i.returnAddress = this.m_sMailboxName),
              (i.message_id = this.m_nNextMessageNumber++),
              this.SendMessage(e, i),
              this.WaitForMessage(n, i.message_id)
            );
          }
          SendResponse(e, t) {
            if (!e.returnAddress)
              throw new Error("Missing return address on message");
            let n = Object.assign(Object.assign({}, t), {
              message_id: e.message_id,
            });
            (n.message_id = e.message_id), this.SendMessage(e.returnAddress, n);
          }
        }
        (r.s_nNextMailboxNumber = 1),
          (0, i.gn)([o.ak], r.prototype, "OpenWebSocketToHost", null),
          (0, i.gn)([o.ak], r.prototype, "OnWebSocketOpen", null),
          (0, i.gn)([o.ak], r.prototype, "OnWebSocketClose", null),
          (0, i.gn)([o.ak], r.prototype, "WebSocketSend", null),
          (0, i.gn)([o.ak], r.prototype, "OnWebSocketMessage", null);
        var a = n(4727);
        class s {
          constructor() {
            (this.m_mailbox = new r()), this.m_mailbox.Init("sgtransformcache");
          }
          static getInstance() {
            return s.instance || (s.instance = new s()), s.instance;
          }
          requestSGTransform(e, t = 0) {
            return new Promise((n, o) =>
              (0, i.mG)(this, void 0, void 0, function* () {
                let i = { type: "transform_request", id: e, flPushDistance: t },
                  r = yield this.m_mailbox.SendMessageAndWaitForResponse(
                    "vrcompositor_systemlayer",
                    i,
                    "transform_response",
                  );
                r.id == e && r.transform
                  ? n(r.transform)
                  : o("requestSGTransform failed");
              }),
            );
          }
        }
        var l,
          d,
          c,
          u,
          h = n(7294);
        function p() {
          var e;
          return null !==
            (e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.Environment()) && void 0 !== e
            ? e
            : l.Unknown;
        }
        !(function (e) {
          (e[(e.Desktop = 1)] = "Desktop"),
            (e[(e.Overlay = 2)] = "Overlay"),
            (e[(e.Unknown = 100)] = "Unknown");
        })(l || (l = {})),
          window.hasOwnProperty("VRHTML") || (window.VRHTML = null),
          (function (e) {
            (e[(e.Auto = 0)] = "Auto"),
              (e[(e.Low = 1)] = "Low"),
              (e[(e.Medium = 2)] = "Medium"),
              (e[(e.High = 3)] = "High");
          })(d || (d = {})),
          (function (e) {
            (e[(e.TrackingResult_Uninitialized = 1)] =
              "TrackingResult_Uninitialized"),
              (e[(e.TrackingResult_Calibrating_InProgress = 100)] =
                "TrackingResult_Calibrating_InProgress"),
              (e[(e.TrackingResult_Calibrating_OutOfRange = 101)] =
                "TrackingResult_Calibrating_OutOfRange"),
              (e[(e.TrackingResult_Running_OK = 200)] =
                "TrackingResult_Running_OK"),
              (e[(e.TrackingResult_Running_OutOfRange = 201)] =
                "TrackingResult_Running_OutOfRange"),
              (e[(e.TrackingResult_Fallback_RotationOnly = 300)] =
                "TrackingResult_Fallback_RotationOnly");
          })(c || (c = {})),
          (function (e) {
            (e[(e.Seated = 0)] = "Seated"),
              (e[(e.Standing = 1)] = "Standing"),
              (e[(e.RawAndUncalibrated = 2)] = "RawAndUncalibrated");
          })(u || (u = {}));
        let m = 0,
          v = -1;
        var g, _, y, b, S, f, R, k, C, w, T, M, D, I, E, V, x, P;
        function L(e, t) {
          let n = e.getAttribute(t);
          if (n && n.length > 0) {
            if ("undefined" == n) return;
            let e = [];
            for (let t of n.split(" ")) 0 != t.length && e.push(parseFloat(t));
            if (e.length > 0) return e;
          }
        }
        function O(e, t) {
          let n = e.getAttribute(t);
          if (n && n.length > 0) return parseFloat(n);
        }
        function H(e, t) {
          let n = e.getAttribute(t);
          if (n && n.length > 0) return parseInt(n);
        }
        function B(e, t) {
          let n = e.getAttribute(t);
          if (n && n.length > 0)
            return (
              "true" == n ||
              (n.length > 0 && 0 != parseInt(n) && !isNaN(parseInt(n)))
            );
        }
        function A(e, t) {
          let n = e.getAttribute(t);
          if (n && n.length > 0) return n;
        }
        function F(e, t) {
          return Y(A(e, t));
        }
        function N(e, t) {
          let n = { type: e, properties: {} };
          return (
            t.id && (n.properties.id = Y(t.id)),
            (n.properties.sgid = H(t, "sgid")),
            n
          );
        }
        function U(e, t) {
          let [n, i] = (function (e, t) {
              let n = t.buildNode;
              if (n) return n(e, t);
              let i = Object.assign({}, e),
                o = null;
              switch (t.nodeName.toUpperCase()) {
                case "VSG-TRANSFORM":
                  (o = N("transform", t)),
                    (o.properties.translation = L(t, "translation")),
                    (o.properties.rotation = L(t, "rotation")),
                    (o.properties.scale = L(t, "scale")),
                    (o.properties["curvature-pitch"] = O(t, "curvature-pitch")),
                    (o.properties["transform-path"] = A(t, "transform-path")),
                    (o.properties["invert-parent-panel-pitch"] = B(
                      t,
                      "invert-parent-panel-pitch",
                    )),
                    (o.properties["parent-path"] = A(t, "parent-path")),
                    (o.properties["parent-origin"] = A(t, "parent-origin")),
                    (o.properties["parent-id"] = F(t, "parent-id"));
                  break;
                case "VSG-TRACKING-STATE-VISIBILITY":
                  (o = N("trackingstatevisibility", t)),
                    (o.properties["visible-0dof"] = B(t, "visible-0dof")),
                    (o.properties["visible-3dof"] = B(t, "visible-3dof")),
                    (o.properties["visible-6dof"] = B(t, "visible-6dof"));
                  break;
                case "VSG-ELASTIC-HEAD-TRANSFORM":
                  (o = N("elasticheadtransform", t)),
                    (o.properties["start-angle-threshold"] = O(
                      t,
                      "start-angle-threshold",
                    )),
                    (o.properties["stop-angle-threshold"] = O(
                      t,
                      "stop-angle-threshold",
                    )),
                    (o.properties["ease-in-time"] = O(t, "ease-in-time")),
                    (o.properties["ease-in-power"] = O(t, "ease-in-power")),
                    (o.properties["ease-out-angle-threshold"] = O(
                      t,
                      "ease-out-angle-threshold",
                    )),
                    (o.properties["ease-out-power"] = O(t, "ease-out-power")),
                    (o.properties["min-angular-velocity"] = O(
                      t,
                      "min-angular-velocity",
                    )),
                    (o.properties["max-angular-velocity"] = O(
                      t,
                      "max-angular-velocity",
                    )),
                    (o.properties["lock-to-horizon"] = B(t, "lock-to-horizon")),
                    (o.properties["translation-behavior"] = H(
                      t,
                      "translation-behavior",
                    ));
                  break;
                case "VSG-LINE":
                  (o = N("line", t)),
                    (o.properties["target-id"] = F(t, "target-id")),
                    (o.properties.thickness = O(t, "thickness")),
                    (o.properties["start-buffer"] = O(t, "start-buffer")),
                    (o.properties["end-buffer"] = O(t, "end-buffer"));
                  break;
                case "VSG-LINE-CONSTRAINED-TRANSFORM":
                  (o = N("line-constrained-transform", t)),
                    (o.properties["target-id"] = F(t, "target-id")),
                    (o.properties["source-id"] = F(t, "source-id")),
                    (o.properties["source-distance"] = O(t, "source-distance")),
                    (o.properties["target-limit"] = O(t, "target-limit"));
                  break;
                case "VSG-CALLOUT-TRANSFORM":
                  (o = N("callout-transform", t)),
                    (o.properties.offset = L(t, "offset"));
                  break;
                case "VSG-HEAD-FACING-TRANSFORM":
                  o = N("head-facing-transform", t);
                  break;
                case "VSG-PIN-TO-VIEW-TRANSFORM":
                  (o = N("pin-to-view-transform", t)),
                    (o.properties["offscreen-z-depth"] = O(
                      t,
                      "offscreen-z-depth",
                    )),
                    (o.properties["off-axis-limit"] = O(t, "off-axis-limit")),
                    (o.properties["transition-limit"] = O(
                      t,
                      "transition-limit",
                    ));
                  break;
                case "VSG-MANIPULATION-TRANSFORM":
                  (o = N("manipulation-transform", t)),
                    (o.properties["is-moving"] = B(t, "is-moving")),
                    (o.properties["parent-path"] = A(t, "parent-path")),
                    (o.properties.translation = L(t, "translation")),
                    (o.properties.rotation = L(t, "rotation")),
                    (o.properties.scale = L(t, "scale"));
                  break;
                case "VSG-GRAB-TRANSFORM":
                  (o = N("grab-transform", t)),
                    (o.properties["parent-path"] = A(t, "parent-path")),
                    (o.properties.translation = L(t, "translation")),
                    (o.properties.rotation = L(t, "rotation")),
                    (o.properties.scale = L(t, "scale"));
              }
              return [i, o];
            })(e, t),
            o = [];
          for (let e = 0; e < t.children.length; e++) {
            let i = t.children.item(e);
            if (i.children) {
              let e = U(n, i);
              e && (o = o.concat(e));
            }
          }
          return n.bShouldAbort
            ? null
            : i
              ? (o.length > 0 && (i.children = o), [i])
              : o.length > 0
                ? 1 == o.length
                  ? o
                  : [{ children: o }]
                : null;
        }
        !(function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Shown = 1)] = "Shown"),
            (e[(e.Hidden = 2)] = "Hidden"),
            (e[(e.Exposed = 3)] = "Exposed"),
            (e[(e.Moved = 4)] = "Moved"),
            (e[(e.Resized = 5)] = "Resized"),
            (e[(e.SizeChanged = 6)] = "SizeChanged"),
            (e[(e.Minimized = 7)] = "Minimized"),
            (e[(e.Maximized = 8)] = "Maximized"),
            (e[(e.Restored = 9)] = "Restored"),
            (e[(e.Enter = 10)] = "Enter"),
            (e[(e.Leave = 11)] = "Leave"),
            (e[(e.FocusGained = 12)] = "FocusGained"),
            (e[(e.FocusLost = 13)] = "FocusLost"),
            (e[(e.Close = 14)] = "Close"),
            (e[(e.TakeFocus = 15)] = "TakeFocus"),
            (e[(e.HitTest = 16)] = "HitTest");
        })(g || (g = {})),
          (function (e) {
            (e[(e.Activated = 0)] = "Activated"),
              (e[(e.Deactivated = 1)] = "Deactivated");
          })(_ || (_ = {})),
          (function (e) {
            (e[(e.NoDashboardTab = 8)] = "NoDashboardTab"),
              (e[(e.AcceptsGamepadEvents = 16)] = "AcceptsGamepadEvents"),
              (e[(e.ShowGamepadFocus = 32)] = "ShowGamepadFocus"),
              (e[(e.SendVRDiscreteScrollEvents = 64)] =
                "SendVRDiscreteScrollEvents"),
              (e[(e.SendVRTouchpadEvents = 128)] = "SendVRTouchpadEvents"),
              (e[(e.ShowTouchPadScrollWheel = 256)] =
                "ShowTouchPadScrollWheel"),
              (e[(e.TransferOwnershipToInternalProcess = 512)] =
                "TransferOwnershipToInternalProcess"),
              (e[(e.SideBySide_Parallel = 1024)] = "SideBySide_Parallel"),
              (e[(e.SideBySide_Crossed = 2048)] = "SideBySide_Crossed"),
              (e[(e.Panorama = 4096)] = "Panorama"),
              (e[(e.StereoPanorama = 8192)] = "StereoPanorama"),
              (e[(e.SortWithNonSceneOverlays = 16384)] =
                "SortWithNonSceneOverlays"),
              (e[(e.VisibleInDashboard = 32768)] = "VisibleInDashboard"),
              (e[(e.MakeOverlaysInteractiveIfVisible = 65536)] =
                "MakeOverlaysInteractiveIfVisible"),
              (e[(e.SendVRSmoothScrollEvents = 131072)] =
                "SendVRSmoothScrollEvents"),
              (e[(e.ProtectedContent = 262144)] = "ProtectedContent"),
              (e[(e.HideLaserIntersection = 524288)] = "HideLaserIntersection"),
              (e[(e.WantsModalBehavior = 1048576)] = "WantsModalBehavior"),
              (e[(e.IsPremultiplied = 2097152)] = "IsPremultiplied"),
              (e[(e.IgnoreTextureAlpha = 4194304)] = "IgnoreTextureAlpha"),
              (e[(e.EnableControlBar = 8388608)] = "EnableControlBar"),
              (e[(e.EnableControlBarKeyboard = 16777216)] =
                "EnableControlBarKeyboard"),
              (e[(e.EnableControlBarClose = 33554432)] =
                "EnableControlBarClose"),
              (e[(e.EnableSteamUIButtons = 67108864)] = "EnableSteamUIButtons");
          })(y || (y = {})),
          (function (e) {
            (e[(e.HomeMenu = 50)] = "HomeMenu"),
              (e[(e.QuickMenu = 51)] = "QuickMenu");
          })(b || (b = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"), (e[(e.Mouse = 1)] = "Mouse");
          })(S || (S = {})),
          (function (e) {
            (e[(e.Invalid = 0)] = "Invalid"),
              (e[(e.HMD = 1)] = "HMD"),
              (e[(e.Controller = 2)] = "Controller"),
              (e[(e.GenericTracker = 3)] = "GenericTracker"),
              (e[(e.TrackingReference = 4)] = "TrackingReference"),
              (e[(e.DisplayRedirect = 5)] = "DisplayRedirect");
          })(f || (f = {})),
          (function (e) {
            (e[(e.Unknown = 0)] = "Unknown"),
              (e[(e.NVIDIA = 1)] = "NVIDIA"),
              (e[(e.AMD = 2)] = "AMD");
          })(R || (R = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.Starting = 1)] = "Starting"),
              (e[(e.Quitting = 2)] = "Quitting"),
              (e[(e.Running = 3)] = "Running"),
              (e[(e.Waiting = 4)] = "Waiting");
          })(k || (k = {})),
          (function (e) {
            (e[(e.ButtonPress_0 = 0)] = "ButtonPress_0"),
              (e[(e.ButtonPress_1 = 1)] = "ButtonPress_1"),
              (e[(e.ButtonPress_2 = 2)] = "ButtonPress_2"),
              (e[(e.ButtonPress_3 = 3)] = "ButtonPress_3"),
              (e[(e.CouldntFindSystemOverlay = 4)] =
                "CouldntFindSystemOverlay"),
              (e[(e.CouldntFindOrCreateClientOverlay = 5)] =
                "CouldntFindOrCreateClientOverlay"),
              (e[(e.ApplicationQuit = 6)] = "ApplicationQuit");
          })(C || (C = {})),
          (function (e) {
            (e[(e.Normal = 0)] = "Normal"),
              (e[(e.Password = 1)] = "Password"),
              (e[(e.Submit = 2)] = "Submit");
          })(w || (w = {})),
          (function (e) {
            (e[(e.SingleLine = 0)] = "SingleLine"),
              (e[(e.MultipleLines = 1)] = "MultipleLines");
          })(T || (T = {})),
          (function (e) {
            (e[(e.LaserMouse = 1)] = "LaserMouse"),
              (e[(e.Keyboard = 2)] = "Keyboard"),
              (e[(e.RoomView = 4)] = "RoomView"),
              (e[(e.DisplaySuppressed = 8)] = "DisplaySuppressed"),
              (e[(e.SystemButtonDown = 16)] = "SystemButtonDown"),
              (e[(e.DriverIsDrawingControllers = 32)] =
                "DriverIsDrawingControllers"),
              (e[(e.DriverRequestsApplicationPause = 64)] =
                "DriverRequestsApplicationPause"),
              (e[(e.DriverRequestsReducedRendering = 128)] =
                "DriverRequestsReducedRendering");
          })(M || (M = {})),
          (function (e) {
            (e[(e.BULK_DEFAULT = 0)] = "BULK_DEFAULT"),
              (e[(e.BULK_64K_DMA = 1)] = "BULK_64K_DMA"),
              (e[(e.BULK_16K_DMA = 2)] = "BULK_16K_DMA"),
              (e[(e.BULK_8K_DMA = 3)] = "BULK_8K_DMA"),
              (e[(e.ISO_52FPS = 4)] = "ISO_52FPS"),
              (e[(e.ISO_50FPS = 5)] = "ISO_50FPS"),
              (e[(e.ISO_48FPS = 6)] = "ISO_48FPS"),
              (e[(e.ISO_46FPS = 7)] = "ISO_46FPS"),
              (e[(e.ISO_44FPS = 8)] = "ISO_44FPS"),
              (e[(e.ISO_42FPS = 9)] = "ISO_42FPS"),
              (e[(e.ISO_40FPS = 10)] = "ISO_40FPS"),
              (e[(e.ISO_35FPS = 11)] = "ISO_35FPS"),
              (e[(e.ISO_30FPS = 12)] = "ISO_30FPS"),
              (e[(e.ISO_15FPS = 13)] = "ISO_15FPS"),
              (e[(e.MAX_CAMERA_COMPAT_MODES = 14)] = "MAX_CAMERA_COMPAT_MODES");
          })(D || (D = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.ThisSteamVR = 1)] = "ThisSteamVR"),
              (e[(e.AnotherSteamVR = 2)] = "AnotherSteamVR"),
              (e[(e.AnotherRuntime = 3)] = "AnotherRuntime"),
              (e[(e.Error = -1)] = "Error");
          })(I || (I = {})),
          (function (e) {
            (e[(e.TrackedControllerRole_Invalid = 0)] =
              "TrackedControllerRole_Invalid"),
              (e[(e.TrackedControllerRole_LeftHand = 1)] =
                "TrackedControllerRole_LeftHand"),
              (e[(e.TrackedControllerRole_RightHand = 2)] =
                "TrackedControllerRole_RightHand"),
              (e[(e.TrackedControllerRole_OptOut = 3)] =
                "TrackedControllerRole_OptOut"),
              (e[(e.TrackedControllerRole_Treadmill = 4)] =
                "TrackedControllerRole_Treadmill"),
              (e[(e.TrackedControllerRole_Max = 5)] =
                "TrackedControllerRole_Max");
          })(E || (E = {})),
          (function (e) {
            (e[(e.Unknown = 0)] = "Unknown"),
              (e[(e.Steam_VRButton = 1)] = "Steam_VRButton"),
              (e[(e.Steam_StartSteamVRApp = 2)] = "Steam_StartSteamVRApp"),
              (e[(e.Watchdog_Unknown = 10)] = "Watchdog_Unknown"),
              (e[(e.Watchdog_Controller = 11)] = "Watchdog_Controller"),
              (e[(e.Watchdog_Hmd = 12)] = "Watchdog_Hmd"),
              (e[(e.AppLaunch_Unknown = 20)] = "AppLaunch_Unknown"),
              (e[(e.AppLaunch_Steam = 21)] = "AppLaunch_Steam"),
              (e[(e.SteamVR_Restart = 30)] = "SteamVR_Restart"),
              (e[(e.SteamVR_VRStartup = 31)] = "SteamVR_VRStartup");
          })(V || (V = {})),
          (function (e) {
            (e[(e.Hostname = 0)] = "Hostname"),
              (e[(e.IP = 1)] = "IP"),
              (e[(e.Version = 2)] = "Version"),
              (e[(e.NetworkConnections = 3)] = "NetworkConnections"),
              (e[(e.XRS_CalibrationDate = 4)] = "XRS_CalibrationDate");
          })(x || (x = {})),
          (function (e) {
            (e[(e.Unavailable = 0)] = "Unavailable"),
              (e[(e.Active = 1)] = "Active"),
              (e[(e.Off = 2)] = "Off");
          })(P || (P = {}));
        let G,
          W,
          z,
          K,
          q = [],
          X = null,
          j = null,
          Q = null;
        function Z(e, t) {
          return e + "::" + t;
        }
        function Y(e) {
          return e
            ? (function (e) {
                return e && e.includes("::");
              })(e)
              ? e
              : Z(J(), e)
            : null;
        }
        function J() {
          var e;
          return null !==
            (e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VROverlay.ThisOverlayKey()) && void 0 !== e
            ? e
            : G;
        }
        function $() {
          K = !0;
        }
        function ee(e) {
          var t, n;
          (n = e),
            (null == (t = Q) || null == n
              ? t == n
              : t.color_mult == n.color_mult &&
                t.reflection_mult == n.reflection_mult &&
                t.roomview_mult.toString() == n.roomview_mult.toString() &&
                t.allow_skydome == n.allow_skydome) || ((Q = e), te());
        }
        function te() {
          X ||
            (X = window.setTimeout(
              () =>
                (0, i.mG)(this, void 0, void 0, function* () {
                  let e = document.body;
                  W && (e = W);
                  let t = {
                    type: "root",
                    rootproperties: {
                      relatchDashboardTransform: K,
                      allowDismissOnClick: true,
                      sceneColorCorrection: Q,
                    },
                    children: U(
                      {
                        currentPanel: null,
                        bInsideReparentedPanel: !1,
                        bShouldAbort: !1,
                      },
                      e,
                    ),
                  };
                  j ||
                    (console.log("Initializing sg_mailbox"),
                    (j = new r()),
                    yield j.Init("sg_mailbox", z));
                  let n = {
                    type: "update_scene_graph",
                    owning_overlay_key: J(),
                    scene_graph: t,
                    retired_sgids: q,
                  };
                  j.SendMessage("vrcompositor_systemlayer", n),
                    (X = null),
                    (q = []),
                    (K = !1);
                }),
              0,
            ));
        }
        function ne(e, t) {
          return e ? { x: e.x ? e.x : t.x, y: e.y ? e.y : t.y } : t;
        }
        function ie(e, t) {
          return e
            ? { x: e.x ? e.x : t.x, y: e.y ? e.y : t.y, z: e.z ? e.z : t.z }
            : t;
        }
        function oe(e, t) {
          return e
            ? { r: e.r ? e.r : t.r, g: e.g ? e.g : t.g, b: e.b ? e.b : t.b }
            : t;
        }
        function re(e) {
          var t;
          return null ===
            (t = (function (e) {
              if (e) return [e.x, e.y, e.z];
            })(e)) || void 0 === t
            ? void 0
            : t.join(" ");
        }
        function ae(e) {
          if (e) return e.w + " " + e.x + " " + e.y + " " + e.z;
        }
        class se extends h.Component {
          constructor(e) {
            var t;
            super(e),
              (this.m_domRef = h.createRef()),
              (this.m_buildNodeOverride = null),
              (this.m_SGID =
                null !==
                  (t =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.NextSGID()) && void 0 !== t
                  ? t
                  : 0);
          }
          setBuildNodeOverride(e) {
            this.m_buildNodeOverride = e;
          }
          getSGID() {
            return this.m_SGID;
          }
          getNodeType() {
            return "base";
          }
          createSgNode(e) {
            return N(this.getNodeType(), e);
          }
          getCurrentRootElement() {
            return this.m_domRef.current;
          }
          componentDidMount() {
            this.m_buildNodeOverride &&
              (this.m_domRef.current.buildNode = this.m_buildNodeOverride),
              te();
          }
          componentDidUpdate() {
            te();
          }
          componentWillUnmount() {
            var e;
            (e = this.m_SGID),
              q.push(e),
              te(),
              this.m_domRef.current &&
                this.m_buildNodeOverride &&
                delete this.m_domRef.current.buildNode;
          }
          render() {
            return h.cloneElement(this.internalRender(), {
              id: this.props.id,
              "vsg-type": this.getNodeType(),
              sgid: this.m_SGID,
              ref: this.m_domRef,
            });
          }
          internalRender() {
            return this.m_buildNodeOverride
              ? h.createElement("vsg-node", null, this.props.children)
              : null;
          }
        }
        class le extends se {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "mountable";
          }
          buildNode(e, t) {
            return [e, this.createSgNode(t)];
          }
        }
        (0, i.gn)([o.ZP], le.prototype, "buildNode", null);
        class de extends se {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "mountedscenegraph";
          }
          buildNode(e, t) {
            const n = this.createSgNode(t);
            return (
              (n.properties.mountable_id = Y(this.props.mountedId)),
              this.props.fDashboardScale &&
                (n.properties.dashboard_scale = this.props.fDashboardScale),
              [e, n]
            );
          }
        }
        (0, i.gn)([o.ZP], de.prototype, "buildNode", null);
        class ce extends se {
          constructor(e) {
            var t;
            if (
              (super(e),
              void 0 !== this.props.iconUri &&
                void 0 !== this.props.iconOverlayKey)
            )
              throw new Error(
                "DashboardTab cannot have both an explicit iconUri and iconOverlayKey set in props.",
              );
            super.setBuildNodeOverride(this.buildNode),
              (this.m_sMountableUnqualifiedID =
                null !== (t = e.mountableUnqualifiedID) && void 0 !== t
                  ? t
                  : this.getSGID() + "_mountable");
          }
          getNodeType() {
            return "dashboardtab";
          }
          buildNode(e, t) {
            var n;
            const i = this.createSgNode(t);
            return (
              (i.properties.tab_name =
                null !== (n = this.props.tabName) && void 0 !== n ? n : ""),
              (i.properties.mountable_id = Y(this.m_sMountableUnqualifiedID)),
              (i.properties.icon_uri = this.props.iconUri),
              (i.properties.icon_overlay_key = this.props.iconOverlayKey),
              (i.properties.summon_overlay_key = this.props.summonOverlayKey),
              [e, i]
            );
          }
          internalRender() {
            return h.createElement(
              "vsg-node",
              { id: this.props.id },
              h.createElement(
                le,
                { id: this.m_sMountableUnqualifiedID },
                this.props.children,
              ),
            );
          }
        }
        (0, i.gn)([o.ZP], ce.prototype, "buildNode", null);
        class ue extends se {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "tint";
          }
          buildNode(e, t) {
            const n = this.createSgNode(t);
            if (this.props.color)
              if ("string" == typeof this.props.color)
                n.properties.color = this.props.color;
              else {
                let e = oe(this.props.color, { r: 1, g: 1, b: 1 });
                n.properties.color = [e.r, e.g, e.b];
              }
            else n.properties.color = [1, 1, 1];
            return [e, n];
          }
        }
        (0, i.gn)([o.ZP], ue.prototype, "buildNode", null);
        class he extends se {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "opacity";
          }
          buildNode(e, t) {
            const n = this.createSgNode(t);
            return (n.properties.opacity = this.props.value), [e, n];
          }
        }
        var pe, me, ve, ge, _e, ye, be, Se, fe, Re, ke, Ce, we;
        (0, i.gn)([o.ZP], he.prototype, "buildNode", null),
          (function (e) {
            (e[(e.Seated = 0)] = "Seated"),
              (e[(e.Standing = 1)] = "Standing"),
              (e[(e.Raw = 2)] = "Raw");
          })(pe || (pe = {}));
        class Te extends se {
          constructor(e) {
            if (
              (super(e),
              (void 0 === e.parent_path ? 0 : 1) +
                (void 0 === e.parent_origin ? 0 : 1) +
                (void 0 === e.parent_id ? 0 : 1) >
                1)
            )
              throw new Error(
                "Transform cannot have more than one parent_ property set.",
              );
          }
          internalRender() {
            let e, t, n;
            this.props.transform
              ? ((e = this.props.transform.translation),
                (t = this.props.transform.rotation),
                (n = this.props.transform.scale))
              : ((e = ie(this.props.translation, { x: 0, y: 0, z: 0 })),
                (t =
                  this.props.rotation && "w" in this.props.rotation
                    ? this.props.rotation
                    : (0, a.UU)(
                        (0, a.mT)(
                          ie(this.props.rotation, { x: 0, y: 0, z: 0 }),
                          Math.PI / 180,
                        ),
                      )),
                (n =
                  "number" == typeof this.props.scale
                    ? {
                        x: this.props.scale,
                        y: this.props.scale,
                        z: this.props.scale,
                      }
                    : ie(this.props.scale, { x: 1, y: 1, z: 1 })));
            let i = re(e),
              o = ae(t),
              r = re(n);
            return h.createElement(
              "vsg-transform",
              {
                translation: i,
                rotation: o,
                scale: r,
                "curvature-pitch": this.props.curvature_pitch,
                "invert-parent-panel-pitch":
                  this.props.invert_parent_panel_pitch,
                "transform-path": this.props.transform_path,
                "parent-path": this.props.parent_path,
                "parent-origin": pe[this.props.parent_origin],
                "parent-id": this.props.parent_id,
              },
              this.props.children,
            );
          }
        }
        class Me extends se {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return h.createElement(
              "vsg-tracking-state-visibility",
              {
                "visible-0dof": this.props.visibleIn0DOF,
                "visible-3dof": this.props.visibleIn3DOF,
                "visible-6dof": this.props.visibleIn6DOF,
              },
              this.props.children,
            );
          }
        }
        function De(e) {
          if (e) return [e.u, e.v];
        }
        function Ie(e) {
          switch (e) {
            case me.TopLeft:
              return { x: -1, y: 1 };
            case me.TopCenter:
              return { x: 0, y: 1 };
            case me.TopRight:
              return { x: 1, y: 1 };
            case me.CenterLeft:
              return { x: -1, y: 0 };
            case me.Center:
              return { x: 0, y: 0 };
            case me.CenterRight:
              return { x: 1, y: 0 };
            case me.BottomLeft:
              return { x: -1, y: -1 };
            case me.BottomCenter:
              return { x: 0, y: -1 };
            case me.BottomRight:
              return { x: 1, y: -1 };
          }
        }
        !(function (e) {
          (e[(e.TopLeft = 0)] = "TopLeft"),
            (e[(e.TopCenter = 1)] = "TopCenter"),
            (e[(e.TopRight = 2)] = "TopRight"),
            (e[(e.CenterLeft = 3)] = "CenterLeft"),
            (e[(e.Center = 4)] = "Center"),
            (e[(e.CenterRight = 5)] = "CenterRight"),
            (e[(e.BottomLeft = 6)] = "BottomLeft"),
            (e[(e.BottomCenter = 7)] = "BottomCenter"),
            (e[(e.BottomRight = 8)] = "BottomRight");
        })(me || (me = {})),
          (function (e) {
            (e[(e.Auto = 0)] = "Auto"), (e[(e.SingleTap = 1)] = "SingleTap");
          })(ve || (ve = {})),
          (function (e) {
            (e[(e.Mono = 0)] = "Mono"),
              (e[(e.Parallel = 1)] = "Parallel"),
              (e[(e.Crossed = 2)] = "Crossed"),
              (e[(e.Panorama = 3)] = "Panorama"),
              (e[(e.StackedPanorama = 4)] = "StackedPanorama");
          })(ge || (ge = {})),
          (function (e) {
            (e[(e.Visible = 0)] = "Visible"),
              (e[(e.SkipInSceneGraph = 1)] = "SkipInSceneGraph"),
              (e[(e.Hidden = 2)] = "Hidden");
          })(_e || (_e = {}));
        class Ee extends se {
          constructor(e) {
            super(e),
              (this.m_Rect = { x: 0, y: 0, width: 0, height: 0 }),
              (this.m_nEmbeddedIndex = null),
              (this.m_resizeObserver = null),
              (this.m_UVsMin = void 0),
              (this.m_UVsMax = void 0),
              (this.m_bOverdragBlocking = !1),
              (this.m_overdragBlockingElements = []);
            const t =
                void 0 !== this.props.width || void 0 !== this.props.height,
              n = void 0 !== this.props.meters_per_pixel,
              i = void 0 !== this.props.target_dpi_panel_id,
              o =
                void 0 !== this.props.rendermodel_component_device_index ||
                void 0 !== this.props.rendermodel_component_name;
            if (
              o &&
              (void 0 === this.props.rendermodel_component_device_index ||
                void 0 === this.props.rendermodel_component_name)
            )
              throw new Error(
                "Panel requires both rendermodel_component_device_index and rendermodel_component_name to be a rendermodel texture.",
              );
            const r = [t, n, i, o].filter((e) => e).length,
              a =
                "an (explicit width and/or height), an explicit meters_per_pixel, a target_panel_dpi panel ID, or a rendermodel name";
            if (0 == r)
              throw new Error(
                `Panel requires one of the following props: ${a}.`,
              );
            if (r > 1)
              throw new Error(
                `Panel cannot have more of the following of the following props: ${a}.`,
              );
            super.setBuildNodeOverride(this.buildNode);
          }
          isExternal() {
            return !!this.props.overlay_key;
          }
          getEmbeddedIndex() {
            return this.m_nEmbeddedIndex;
          }
          componentWillReceiveProps_UNSAFE() {
            Ee.s_bPanelsAreDirty = !0;
          }
          componentDidMount() {
            super.componentDidMount(),
              (this.m_resizeObserver = new ResizeObserver(
                this.onResizeObserved,
              )),
              this.m_resizeObserver.observe(this.getCurrentRootElement()),
              (this.m_nEmbeddedIndex = Ve.Current().addEmbeddedPanelUVs(this)),
              (Ee.s_bPanelsAreDirty = !0),
              this.getCurrentRootElement().addEventListener(
                "mousedown",
                this.onPanelMouseDown,
              ),
              this.forceUpdate();
          }
          onResizeObserved(e, t) {
            Ve.Current().forceLayoutUpdate();
          }
          componentWillUnmount() {
            this.m_resizeObserver &&
              (this.m_resizeObserver.disconnect(),
              (this.m_resizeObserver = null)),
              this.stopOverDragBlocking(),
              this.getCurrentRootElement().removeEventListener(
                "mousedown",
                this.onPanelMouseDown,
              ),
              (Ee.s_bPanelsAreDirty = !0),
              Ve.Current().removeEmbeddedPanelUVs(this),
              super.componentWillUnmount();
          }
          onPanelMouseDown() {
            this.startOverDragBlocking();
          }
          startOverDragBlocking() {
            if (this.m_bOverdragBlocking) return;
            const e = document.body.getBoundingClientRect(),
              t = this.getCurrentRootElement().getBoundingClientRect();
            this.createOverdragBlockingElement(0, 0, e.width, t.y),
              this.createOverdragBlockingElement(
                0,
                t.y + t.height,
                e.width,
                e.height - t.height - t.y,
              ),
              this.createOverdragBlockingElement(0, t.y, t.x, t.height),
              this.createOverdragBlockingElement(
                t.x + t.width,
                t.y,
                e.width - t.width - t.x,
                t.height,
              ),
              window.document.addEventListener("mouseup", this.onWindowMouseUp),
              (this.m_bOverdragBlocking = !0);
          }
          stopOverDragBlocking() {
            this.m_bOverdragBlocking &&
              (this.m_overdragBlockingElements.forEach((e) => {
                document.body.removeChild(e);
              }),
              (this.m_overdragBlockingElements = []),
              window.document.removeEventListener(
                "mouseup",
                this.onWindowMouseUp,
              ),
              (this.m_bOverdragBlocking = !1));
          }
          createOverdragBlockingElement(e, t, n, i) {
            let o = document.createElement("div");
            (o.style.position = "absolute"),
              (o.style.top = t + "px"),
              (o.style.left = e + "px"),
              (o.style.width = n + "px"),
              (o.style.height = i + "px"),
              (o.style.zIndex = "90019001"),
              this.m_overdragBlockingElements.push(o),
              document.body.appendChild(o);
          }
          onWindowMouseUp(e) {
            this.stopOverDragBlocking();
          }
          getNodeType() {
            return "panel";
          }
          get visibility() {
            var e;
            return null !== (e = this.props.visibility) && void 0 !== e
              ? e
              : _e.Visible;
          }
          buildNode(e, t) {
            var n, i, o, r, a;
            if (this.visibility != _e.Visible) return [e, null];
            let s = Object.assign(Object.assign({}, e), {
                bInsideReparentedPanel: !1,
                currentPanel: this,
              }),
              l = this.createSgNode(t),
              d = { x: 0, y: 0 };
            d =
              "object" == typeof this.props.origin
                ? ne(this.props.origin, { x: 0, y: 0 })
                : Ie(this.props.origin);
            const c = this.props.overlay_key,
              u = J();
            return (
              c && c.length > 0
                ? (l.properties.key = c)
                : u
                  ? (l.properties.key = u)
                  : (l.properties.overlay_handle =
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.VROverlay.ThisOverlayHandle()),
              (l.properties.uv_min =
                null !== (n = De(this.m_UVsMin)) && void 0 !== n ? n : void 0),
              (l.properties.uv_max =
                null !== (i = De(this.m_UVsMax)) && void 0 !== i ? i : void 0),
              (l.properties.width =
                null !== (o = this.props.width) && void 0 !== o ? o : void 0),
              (l.properties.height =
                null !== (r = this.props.height) && void 0 !== r ? r : void 0),
              (l.properties["min-width"] =
                null !== (a = this.props.min_width) && void 0 !== a
                  ? a
                  : void 0),
              (l.properties["target-width-anchor-id"] = Y(
                this.props.target_width_anchor_id,
              )),
              (l.properties["target-dpi-panel-id"] = Y(
                this.props.target_dpi_panel_id,
              )),
              (l.properties["target-dpi-multiplier"] =
                this.props.target_dpi_multiplier),
              (l.properties["meters-per-pixel"] = this.props.meters_per_pixel),
              (l.properties["subview-parent-panel-id"] = Y(
                this.props.subview_parent_panel_id,
              )),
              (l.properties.curvature = this.props.curvature),
              (l.properties["curvature-origin-id"] = Y(
                this.props.curvature_origin_id,
              )),
              (l.properties.interactive = this.props.interactive),
              (l.properties.scrollable = this.props.scrollable),
              (l.properties.undocked = this.props.undocked),
              (l.properties.modal = this.props.modal),
              (l.properties["requires-laser"] = this.props.requires_laser),
              (l.properties["hide-laser-when-clicking"] =
                this.props.hide_lasermouse_when_clicking),
              (l.properties["make-overlays-interactive-if-visible"] =
                this.props.make_overlays_interactive_if_visible),
              (l.properties["interaction-dismisses-keyboard"] =
                this.props.interaction_dismisses_keyboard),
              (l.properties["embedded-uv-index"] = this.m_nEmbeddedIndex),
              (l.properties.origin = (function (e) {
                if (e) return [e.x, e.y];
              })(d)),
              (l.properties.debug_name = this.props.debug_name),
              (l.properties.sampler = this.props.sampler),
              (l.properties.reflect = this.props.reflect),
              (l.properties.stereoscopy = this.props.stereoscopy),
              (l.properties.rendermodel_component_device_index =
                this.props.rendermodel_component_device_index),
              (l.properties.rendermodel_component_name =
                this.props.rendermodel_component_name),
              (l.properties["texture-id"] = Y(this.props.texture_id)),
              (l.properties["sort-order"] = this.props.sort_order),
              (l.properties["sort-depth-bias"] = this.props.sort_depth_bias),
              [s, l]
            );
          }
          scaleLocalUVToGlobal(e) {
            const t = this.m_UVsMax.u - this.m_UVsMin.u,
              n = this.m_UVsMax.v - this.m_UVsMin.v;
            return {
              u: this.m_UVsMin.u + t * e.u,
              v: this.m_UVsMin.v + n * e.v,
            };
          }
          updateLayoutValues() {
            if (this.props.overlay_key)
              return (
                (this.m_UVsMin = this.props.uv_min),
                void (this.m_UVsMax = this.props.uv_max)
              );
            this.m_Rect = this.getCurrentRootElement().getBoundingClientRect();
            let e = this.getCurrentRootElement().ownerDocument.defaultView;
            (this.m_UVsMin = {
              u: this.m_Rect.x / e.innerWidth,
              v: this.m_Rect.y / e.innerHeight,
            }),
              (this.m_UVsMax = {
                u: (this.m_Rect.x + this.m_Rect.width) / e.innerWidth,
                v: (this.m_Rect.y + this.m_Rect.height) / e.innerHeight,
              });
          }
          internalRender() {
            return h.createElement(
              "vsg-node",
              {
                style: {
                  display: this.visibility == _e.Hidden ? "none" : null,
                },
              },
              this.props.children,
            );
          }
        }
        (Ee.s_bPanelsAreDirty = !1),
          (0, i.gn)([o.ZP], Ee.prototype, "onResizeObserved", null),
          (0, i.gn)([o.ZP], Ee.prototype, "onPanelMouseDown", null),
          (0, i.gn)([o.ZP], Ee.prototype, "onWindowMouseUp", null),
          (0, i.gn)([o.ZP], Ee.prototype, "buildNode", null),
          (function (e) {
            (e[(e.Canvas = 0)] = "Canvas"), (e[(e.Image = 1)] = "Image");
          })(ye || (ye = {}));
        class Ve extends h.Component {
          constructor(e) {
            super(e),
              (this.m_DomRef = null),
              (this.m_scalingDomRef = null),
              (this.m_DebugPointerRef = null),
              (this.m_Observer = null),
              (this.m_nEmbeddedDataWidth = 0),
              (this.m_mapPanels = new Map()),
              (this.m_rAvailableEmbeddedIndicesQueue = []),
              (this.m_rEmbeddedIndicesToClear = []),
              (this.m_fCurrentScale = 1),
              (this.m_CanvasRef = null),
              (this.m_CanvasContext = null),
              (this.m_Pixels = null),
              (this.m_nDirtyXMin = -1),
              (this.m_nDirtyXMax = -1),
              (this.m_EmbeddedDataImgRef = null),
              (this.m_EmbeddedDataImgRGBBuffer = null),
              (Ve.s_Current = this),
              (this.state = {
                bFontsLoaded: !1,
                nForcedUpdateNumber: 0,
                bShowDebugPointer: !1,
                eRenderMode: VRHTML.VRUtil.BSupportsCEFCanvas()
                  ? ye.Canvas
                  : ye.Image,
              }),
              (this.m_DomRef = h.createRef()),
              (this.m_scalingDomRef = h.createRef()),
              (this.m_CanvasRef = h.createRef()),
              (this.m_EmbeddedDataImgRef = h.createRef()),
              (this.m_DebugPointerRef = h.createRef());
          }
          static get IsSceneGraphApp() {
            return null !== Ve.Current();
          }
          static Current() {
            return Ve.s_Current;
          }
          toggleDebugPointer() {
            this.setState({ bShowDebugPointer: !this.state.bShowDebugPointer });
          }
          onMouseMove(e) {
            this.state.bShowDebugPointer &&
              this.m_DebugPointerRef.current &&
              (this.m_DebugPointerRef.current.style.transform =
                "translateX( " +
                e.clientX +
                "px ) translateY( " +
                e.clientY +
                "px )");
          }
          forceLayoutUpdate() {
            (Ee.s_bPanelsAreDirty = !0),
              this.setState({
                nForcedUpdateNumber: this.state.nForcedUpdateNumber + 1,
              });
          }
          componentDidMount() {
            let e = this.m_DomRef.current.ownerDocument,
              t = e.defaultView;
            e.body.classList.add("SGApp"),
              document.documentElement.classList.add("VROverlay"),
              (this.m_nEmbeddedDataWidth = t.innerWidth);
            let n = Math.max(
              0,
              Math.floor((this.m_nEmbeddedDataWidth - 1) / 3),
            );
            for (let e = 0; e < n; e++)
              this.m_rAvailableEmbeddedIndicesQueue.push(e);
            var i, o, r;
            e.addEventListener("mousemove", this.onMouseMove),
              (this.m_Observer = new MutationObserver(this.onMutation)),
              this.m_Observer.observe(this.m_DomRef.current, {
                attributes: !0,
                attributeFilter: ["sg-forced-update-number", "overlay-key"],
                childList: !0,
                subtree: !0,
              }),
              this.createEmbeddedData(),
              t.addEventListener("load", this.forceLayoutUpdate),
              e.fonts.ready.then(() => this.setState({ bFontsLoaded: !0 })),
              (t.forceLayoutUpdate = this.forceLayoutUpdate),
              (t.toggleDebugPointer = this.toggleDebugPointer),
              (this.props.owning_overlay_key || this.props.web_secret) &&
                ((i = this.props.owning_overlay_key),
                (o = this.m_DomRef.current),
                (r = this.props.web_secret),
                (G = i),
                (W = o),
                (z = r),
                console.log("Setting owning overlay key to " + i));
          }
          componentWillUnmount() {
            let e = this.m_DomRef.current.ownerDocument;
            e.body.classList.remove("SGApp"),
              document.documentElement.classList.remove("VROverlay"),
              this.m_Observer && this.m_Observer.disconnect(),
              e.removeEventListener("mousemove", this.onMouseMove);
          }
          render() {
            const e = this.state.eRenderMode == ye.Image,
              t = this.state.eRenderMode == ye.Canvas;
            let n = [];
            return (
              this.state.bShowDebugPointer && n.push("ShowDebugPointer"),
              h.createElement(
                "vsg-app",
                {
                  class: n.join(" "),
                  ref: this.m_DomRef,
                  "sg-forced-update-number": this.state.nForcedUpdateNumber,
                },
                h.createElement("div", {
                  className: "DebugPointer",
                  ref: this.m_DebugPointerRef,
                }),
                e &&
                  h.createElement("img", {
                    ref: this.m_EmbeddedDataImgRef,
                    className: "EmbeddedData",
                    height: Ve.k_EmbeddedDataRows,
                  }),
                t &&
                  h.createElement("canvas", {
                    ref: this.m_CanvasRef,
                    className: "EmbeddedData",
                    height: Ve.k_EmbeddedDataRows,
                  }),
                h.createElement(
                  "div",
                  { className: "AppSceneGraph", ref: this.m_scalingDomRef },
                  this.state.bFontsLoaded && this.props.children,
                ),
              )
            );
          }
          addEmbeddedPanelUVs(e) {
            return 0 === this.m_rAvailableEmbeddedIndicesQueue.length
              ? null
              : (this.m_mapPanels.set(e.getSGID(), e),
                this.m_rAvailableEmbeddedIndicesQueue.shift());
          }
          removeEmbeddedPanelUVs(e) {
            this.m_mapPanels.has(e.getSGID()) &&
              (this.m_mapPanels.delete(e.getSGID()),
              this.m_rAvailableEmbeddedIndicesQueue.push(e.getEmbeddedIndex()),
              this.m_rEmbeddedIndicesToClear.push(e.getEmbeddedIndex()));
          }
          onMutation(e, t) {
            this.updateAllPanelBounds();
          }
          createEmbeddedData() {
            this.state.eRenderMode == ye.Image
              ? ((this.m_EmbeddedDataImgRef.current.width =
                  this.m_nEmbeddedDataWidth),
                this.m_EmbeddedDataImgRGBBuffer ||
                  (this.m_EmbeddedDataImgRGBBuffer =
                    VRHTML.VRUtil.CreateEmbeddedRGBScanline(
                      this.m_nEmbeddedDataWidth,
                      1,
                      4,
                    )))
              : this.state.eRenderMode == ye.Canvas &&
                ((this.m_CanvasRef.current.width = this.m_nEmbeddedDataWidth),
                (this.m_CanvasContext =
                  this.m_CanvasRef.current.getContext("2d")),
                (this.m_CanvasContext.globalCompositeOperation = "copy"),
                (this.m_CanvasContext.imageSmoothingEnabled = !1),
                null === this.m_Pixels &&
                  (this.m_Pixels = this.m_CanvasContext.createImageData(
                    this.m_nEmbeddedDataWidth,
                    Ve.k_EmbeddedDataRows,
                  ))),
              this.updateAllPanelBounds();
          }
          updateAllPanelBounds() {
            let e = this.m_DomRef.current.ownerDocument.defaultView,
              t = this.m_scalingDomRef.current.getBoundingClientRect(),
              n = t.width / this.m_fCurrentScale,
              i = t.height / this.m_fCurrentScale,
              o = { x: e.innerWidth / n, y: e.innerHeight / i },
              r = Math.min(o.x, o.y, 1);
            r != this.m_fCurrentScale &&
              (1 != r
                ? this.m_scalingDomRef.current.setAttribute(
                    "style",
                    "transform: scale(" + r + "); transform-origin: top left",
                  )
                : this.m_scalingDomRef.current.removeAttribute("style"),
              (this.m_fCurrentScale = r),
              (Ee.s_bPanelsAreDirty = !0)),
              Ee.s_bPanelsAreDirty &&
                (this.m_mapPanels.forEach((e) => e.updateLayoutValues()),
                te(),
                (Ee.s_bPanelsAreDirty = !1),
                this.updateEmbeddedData());
          }
          updateEmbeddedData() {
            if (this.m_EmbeddedDataImgRef || this.m_CanvasRef)
              if (
                (this.setPixel(
                  0,
                  "V".charCodeAt(0),
                  "S".charCodeAt(0),
                  "G".charCodeAt(0),
                ),
                this.m_rEmbeddedIndicesToClear.forEach((e) => {
                  let t = 1 + 3 * e;
                  for (let e = 0; e < 3; e++) this.setPixel(t + e, 0, 0, 0, 0);
                }),
                (this.m_rEmbeddedIndicesToClear = []),
                this.m_mapPanels.forEach((e, t) => {
                  let n = e.m_Rect.x,
                    i = e.m_Rect.x + e.m_Rect.width,
                    o = e.m_Rect.y,
                    r = e.m_Rect.y + e.m_Rect.height,
                    a = 1 + 3 * e.getEmbeddedIndex();
                  if (e.isExternal() || n >= i || o >= r)
                    for (let e = 0; e < 3; e++)
                      this.setPixel(a + 1, 0, 0, 0, 0);
                  else
                    this.setPixel(a, (65280 & n) >> 8, 255 & n, 0),
                      this.setPixel(a + 1, (65280 & i) >> 8, 255 & i, 255 & o),
                      this.setPixel(
                        a + 2,
                        (65280 & r) >> 8,
                        255 & r,
                        (65280 & o) >> 8,
                      );
                }),
                this.m_EmbeddedDataImgRef && this.state.eRenderMode == ye.Image)
              ) {
                const e = VRHTML.VRUtil.GetEmbeddedScanlineAsURIImage(
                  this.m_nEmbeddedDataWidth,
                  1,
                  4,
                );
                this.m_EmbeddedDataImgRef.current.src = e;
              } else if (
                this.m_CanvasRef &&
                this.state.eRenderMode == ye.Canvas
              ) {
                let e = this.m_nDirtyXMax - this.m_nDirtyXMin + 1;
                this.m_CanvasContext.putImageData(
                  this.m_Pixels,
                  0,
                  0,
                  this.m_nDirtyXMin,
                  0,
                  e,
                  this.m_Pixels.height,
                ),
                  (this.m_nDirtyXMin = -1),
                  (this.m_nDirtyXMax = -1);
              }
          }
          setPixel(e, t, n, i, o = 255) {
            if (
              this.m_EmbeddedDataImgRGBBuffer &&
              this.state.eRenderMode == ye.Image
            ) {
              const r = new DataView(this.m_EmbeddedDataImgRGBBuffer);
              r.setUint8(4 * e + 0, t),
                r.setUint8(4 * e + 1, n),
                r.setUint8(4 * e + 2, i),
                r.setUint8(4 * e + 3, o);
            } else
              this.m_Pixels &&
                this.state.eRenderMode == ye.Canvas &&
                ((this.m_Pixels.data[4 * e + 0] = t),
                (this.m_Pixels.data[4 * e + 1] = n),
                (this.m_Pixels.data[4 * e + 2] = i),
                (this.m_Pixels.data[4 * e + 3] = o),
                (-1 === this.m_nDirtyXMin || e < this.m_nDirtyXMin) &&
                  (this.m_nDirtyXMin = e),
                (-1 === this.m_nDirtyXMax || e > this.m_nDirtyXMax) &&
                  (this.m_nDirtyXMax = e));
          }
        }
        (Ve.s_Current = null),
          (Ve.k_EmbeddedDataRows = 1),
          (0, i.gn)([o.ak], Ve.prototype, "toggleDebugPointer", null),
          (0, i.gn)([o.ak], Ve.prototype, "onMouseMove", null),
          (0, i.gn)([o.ak], Ve.prototype, "forceLayoutUpdate", null),
          (0, i.gn)([o.ak], Ve.prototype, "onMutation", null),
          (0, i.gn)(
            [o.ZP],
            class extends se {
              constructor(e) {
                super(e), super.setBuildNodeOverride(this.buildNode);
              }
              getNodeType() {
                return "texture";
              }
              buildNode(e, t) {
                const n = this.createSgNode(t);
                return (
                  (n.properties.id = this.props.id),
                  (n.properties.source = this.props.source),
                  [e, n]
                );
              }
            }.prototype,
            "buildNode",
            null,
          );
        class xe extends se {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "tilefloor";
          }
          buildNode(e, t) {
            const n = this.createSgNode(t);
            if (
              ((n.properties["tile-size"] = this.props["tile-size"]),
              (n.properties["tile-gap"] = this.props["tile-gap"]),
              (n.properties["inner-radius"] = this.props["inner-radius"]),
              (n.properties["outer-radius"] = this.props["outer-radius"]),
              (n.properties["fade-distance"] = this.props["fade-distance"]),
              (n.properties["min-tile-scale-at-periphery"] =
                this.props["min-tile-scale-at-periphery"]),
              (n.properties.height = this.props.height),
              (n.properties.offset = [
                this.props.offset.x,
                this.props.offset.y,
              ]),
              "string" == typeof this.props.color)
            )
              n.properties.color = this.props.color;
            else if (this.props.color) {
              let e = oe(this.props.color, { r: 0, g: 0, b: 0 });
              n.properties.color = [e.r, e.g, e.b];
            }
            return (
              (n.properties["center-randomization"] =
                this.props["center-randomization"]),
              (n.properties["luma-randomization-min-gain"] =
                this.props["luma-randomization"]["min-gain"]),
              (n.properties["luma-randomization-max-gain"] =
                this.props["luma-randomization"]["max-gain"]),
              (n.properties["reflection-randomization-min-gain"] =
                this.props["reflection-randomization"]["min-gain"]),
              (n.properties["reflection-randomization-max-gain"] =
                this.props["reflection-randomization"]["max-gain"]),
              (n.properties["normal-randomization-degrees"] =
                this.props["normal-randomization-degrees"]),
              this.props.chevron &&
                ((n.properties["chevron-luma-scale"] =
                  this.props.chevron["luma-scale"]),
                (n.properties["chevron-reflection-scale"] =
                  this.props.chevron["reflection-scale"])),
              (n.properties["auto-subdivide"] = this.props["auto-subdivide"]),
              [e, n]
            );
          }
        }
        (0, i.gn)([o.ZP], xe.prototype, "buildNode", null),
          (function (e) {
            (e[(e.None = 0)] = "None"), (e[(e.Backface = 1)] = "Backface");
          })(be || (be = {}));
        class Pe extends se {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "rendermodel";
          }
          buildNode(e, t) {
            const n = this.createSgNode(t);
            if (
              ((n.properties.source = this.props.source),
              (n.properties["texture-id"] = Y(this.props["texture-id"])),
              (n.properties["input-path"] = this.props["input-path"]),
              this.props.fresnel)
            ) {
              let e = this.props.fresnel;
              if ("string" == typeof e.color) n.properties.color = e.color;
              else {
                let t = oe(e.color, { r: 0, g: 0, b: 0 });
                n.properties.color = [t.r, t.g, t.b];
              }
              (n.properties.opacity = e.opacity ? e.opacity : 1),
                (n.properties.strength = e.strength ? e.strength : 1);
            }
            return (
              (n.properties.wireframe = this.props.wireframe),
              (n.properties.solid = this.props.solid),
              (n.properties.culling = this.props.culling),
              (n.properties.stencil_mask = this.props.stencil_mask),
              (n.properties["no-depth-write"] = this.props["no-depth-write"]),
              (n.properties["no-depth-test"] = this.props["no-depth-test"]),
              [e, n]
            );
          }
        }
        (0, i.gn)([o.ZP], Pe.prototype, "buildNode", null),
          (0, i.gn)(
            [o.ZP],
            class extends se {
              constructor(e) {
                super(e), super.setBuildNodeOverride(this.buildNode);
              }
              getNodeType() {
                return "ltcquad";
              }
              buildNode(e, t) {
                const n = this.createSgNode(t);
                if (
                  ((n.properties.width = this.props.width),
                  (n.properties.height = this.props.height),
                  (n.properties["near-z"] = this.props["near-z"]),
                  (n.properties["far-z"] = this.props["far-z"]),
                  (n.properties.debug = this.props.debug),
                  this.props.diffuse)
                ) {
                  let e = this.props.diffuse;
                  (n.properties["diffuse-resolution"] = e.resolution),
                    (n.properties["diffuse-size"] = e.size);
                }
                if (this.props.specular) {
                  let e = this.props.specular;
                  if ("string" == typeof e.color) n.properties.color = e.color;
                  else {
                    let t = oe(e.color, { r: 0, g: 0, b: 0 });
                    n.properties.color = [t.r, t.g, t.b];
                  }
                }
                return [e, n];
              }
            }.prototype,
            "buildNode",
            null,
          );
        class Le extends se {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return h.createElement("vsg-line", {
              "target-id": this.props.target_id,
              thickness: this.props.thickness,
              "start-buffer": this.props.start_buffer,
              "end-buffer": this.props.end_buffer,
            });
          }
        }
        class Oe extends se {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return h.createElement(
              "vsg-pin-to-view-transform",
              {
                "offscreen-z-depth": this.props.fOffscreenZDepth,
                "off-axis-limit": this.props.fOffAxisLimit,
                "transition-limit": this.props.fTransitionLimit,
              },
              this.props.children,
            );
          }
        }
        class He extends se {
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
            if (!e.currentPanel && !e.bInsideReparentedPanel)
              return [
                Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                null,
              ];
            let n = null;
            "object" == typeof this.props.location
              ? (n = ne(this.props.location, { x: 0, y: 0 }))
              : "number" == typeof this.props.location &&
                (n = Ie(this.props.location));
            let i = this.createSgNode(t);
            if (this.props.latched && null !== this.m_latchedPosition)
              (i.properties["anchor-u"] = this.m_latchedPosition.u),
                (i.properties["anchor-v"] = this.m_latchedPosition.v);
            else if (n) {
              const t = { u: 0.5 * n.x + 0.5, v: -0.5 * n.y + 0.5 },
                o =
                  !e.currentPanel || e.currentPanel.props.overlay_key
                    ? t
                    : e.currentPanel.scaleLocalUVToGlobal(t);
              (i.properties["anchor-u"] = o.u),
                (i.properties["anchor-v"] = o.v);
            } else {
              if (!e.currentPanel)
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              const n = t.ownerDocument,
                o = t.getBoundingClientRect(),
                r = o.left + o.width / 2,
                a = o.top + o.height / 2,
                s = e.currentPanel.m_Rect;
              if (r < s.x || r > s.x + s.width || a < s.y || a > s.y + s.height)
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              const l = n.defaultView.innerWidth,
                d = n.defaultView.innerHeight;
              if (!(d > 0 && l > 0))
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              (i.properties["anchor-u"] = r / l),
                (i.properties["anchor-v"] = a / d);
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
        (0, i.gn)([o.ZP], He.prototype, "buildNode", null),
          (function (e) {
            (e[(e.LockedToParent = 0)] = "LockedToParent"),
              (e[(e.LockedToWorld = 1)] = "LockedToWorld");
          })(Se || (Se = {}));
        class Be extends se {
          constructor(e) {
            super(e);
          }
          internalRender() {
            let e = this.props.start_angle_threshold
                ? (this.props.start_angle_threshold * Math.PI) / 180
                : null,
              t = this.props.stop_angle_threshold
                ? (this.props.stop_angle_threshold * Math.PI) / 180
                : null,
              n = this.props.ease_out_angle_threshold
                ? (this.props.ease_out_angle_threshold * Math.PI) / 180
                : null,
              i = this.props.min_angular_velocity
                ? (this.props.min_angular_velocity * Math.PI) / 180
                : null,
              o = this.props.max_angular_velocity
                ? (this.props.max_angular_velocity * Math.PI) / 180
                : null;
            return h.createElement(
              "vsg-elastic-head-transform",
              {
                "start-angle-threshold": e,
                "stop-angle-threshold": t,
                "ease-in-time": this.props.ease_in_time,
                "ease-in-power": this.props.ease_in_power,
                "ease-out-angle-threshold": n,
                "ease-out-power": this.props.ease_out_power,
                "min-angular-velocity": i,
                "max-angular-velocity": o,
                "lock-to-horizon": this.props.lock_to_horizon,
                "translation-behavior": this.props.translation_behavior,
              },
              this.props.children,
            );
          }
        }
        class Ae extends se {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return h.createElement(
              "vsg-head-facing-transform",
              null,
              this.props.children,
            );
          }
        }
        !(function (e) {
          (e[(e.Invalid = 0)] = "Invalid"),
            (e[(e.TrackingSystemName_String = 1e3)] =
              "TrackingSystemName_String"),
            (e[(e.ModelNumber_String = 1001)] = "ModelNumber_String"),
            (e[(e.SerialNumber_String = 1002)] = "SerialNumber_String"),
            (e[(e.RenderModelName_String = 1003)] = "RenderModelName_String"),
            (e[(e.WillDriftInYaw_Bool = 1004)] = "WillDriftInYaw_Bool"),
            (e[(e.ManufacturerName_String = 1005)] = "ManufacturerName_String"),
            (e[(e.TrackingFirmwareVersion_String = 1006)] =
              "TrackingFirmwareVersion_String"),
            (e[(e.HardwareRevision_String = 1007)] = "HardwareRevision_String"),
            (e[(e.AllWirelessDongleDescriptions_String = 1008)] =
              "AllWirelessDongleDescriptions_String"),
            (e[(e.ConnectedWirelessDongle_String = 1009)] =
              "ConnectedWirelessDongle_String"),
            (e[(e.DeviceIsWireless_Bool = 1010)] = "DeviceIsWireless_Bool"),
            (e[(e.DeviceIsCharging_Bool = 1011)] = "DeviceIsCharging_Bool"),
            (e[(e.DeviceBatteryPercentage_Float = 1012)] =
              "DeviceBatteryPercentage_Float"),
            (e[(e.StatusDisplayTransform_Matrix34 = 1013)] =
              "StatusDisplayTransform_Matrix34"),
            (e[(e.Firmware_UpdateAvailable_Bool = 1014)] =
              "Firmware_UpdateAvailable_Bool"),
            (e[(e.Firmware_ManualUpdate_Bool = 1015)] =
              "Firmware_ManualUpdate_Bool"),
            (e[(e.Firmware_ManualUpdateURL_String = 1016)] =
              "Firmware_ManualUpdateURL_String"),
            (e[(e.HardwareRevision_Uint64 = 1017)] = "HardwareRevision_Uint64"),
            (e[(e.FirmwareVersion_Uint64 = 1018)] = "FirmwareVersion_Uint64"),
            (e[(e.FPGAVersion_Uint64 = 1019)] = "FPGAVersion_Uint64"),
            (e[(e.VRCVersion_Uint64 = 1020)] = "VRCVersion_Uint64"),
            (e[(e.RadioVersion_Uint64 = 1021)] = "RadioVersion_Uint64"),
            (e[(e.DongleVersion_Uint64 = 1022)] = "DongleVersion_Uint64"),
            (e[(e.BlockServerShutdown_Bool = 1023)] =
              "BlockServerShutdown_Bool"),
            (e[(e.CanUnifyCoordinateSystemWithHmd_Bool = 1024)] =
              "CanUnifyCoordinateSystemWithHmd_Bool"),
            (e[(e.ContainsProximitySensor_Bool = 1025)] =
              "ContainsProximitySensor_Bool"),
            (e[(e.DeviceProvidesBatteryStatus_Bool = 1026)] =
              "DeviceProvidesBatteryStatus_Bool"),
            (e[(e.DeviceCanPowerOff_Bool = 1027)] = "DeviceCanPowerOff_Bool"),
            (e[(e.Firmware_ProgrammingTarget_String = 1028)] =
              "Firmware_ProgrammingTarget_String"),
            (e[(e.DeviceClass_Int32 = 1029)] = "DeviceClass_Int32"),
            (e[(e.HasCamera_Bool = 1030)] = "HasCamera_Bool"),
            (e[(e.DriverVersion_String = 1031)] = "DriverVersion_String"),
            (e[(e.Firmware_ForceUpdateRequired_Bool = 1032)] =
              "Firmware_ForceUpdateRequired_Bool"),
            (e[(e.ViveSystemButtonFixRequired_Bool = 1033)] =
              "ViveSystemButtonFixRequired_Bool"),
            (e[(e.ParentDriver_Uint64 = 1034)] = "ParentDriver_Uint64"),
            (e[(e.ResourceRoot_String = 1035)] = "ResourceRoot_String"),
            (e[(e.RegisteredDeviceType_String = 1036)] =
              "RegisteredDeviceType_String"),
            (e[(e.InputProfilePath_String = 1037)] = "InputProfilePath_String"),
            (e[(e.NeverTracked_Bool = 1038)] = "NeverTracked_Bool"),
            (e[(e.NumCameras_Int32 = 1039)] = "NumCameras_Int32"),
            (e[(e.CameraFrameLayout_Int32 = 1040)] = "CameraFrameLayout_Int32"),
            (e[(e.CameraStreamFormat_Int32 = 1041)] =
              "CameraStreamFormat_Int32"),
            (e[(e.AdditionalDeviceSettingsPath_String = 1042)] =
              "AdditionalDeviceSettingsPath_String"),
            (e[(e.DevicePowerUsage_Float = 1052)] = "DevicePowerUsage_Float"),
            (e[(e.ActualTrackingSystemName_String = 1054)] =
              "ActualTrackingSystemName_String"),
            (e[(e.ReportsTimeSinceVSync_Bool = 2e3)] =
              "ReportsTimeSinceVSync_Bool"),
            (e[(e.SecondsFromVsyncToPhotons_Float = 2001)] =
              "SecondsFromVsyncToPhotons_Float"),
            (e[(e.DisplayFrequency_Float = 2002)] = "DisplayFrequency_Float"),
            (e[(e.UserIpdMeters_Float = 2003)] = "UserIpdMeters_Float"),
            (e[(e.CurrentUniverseId_Uint64 = 2004)] =
              "CurrentUniverseId_Uint64"),
            (e[(e.PreviousUniverseId_Uint64 = 2005)] =
              "PreviousUniverseId_Uint64"),
            (e[(e.DisplayFirmwareVersion_Uint64 = 2006)] =
              "DisplayFirmwareVersion_Uint64"),
            (e[(e.IsOnDesktop_Bool = 2007)] = "IsOnDesktop_Bool"),
            (e[(e.DisplayMCType_Int32 = 2008)] = "DisplayMCType_Int32"),
            (e[(e.DisplayMCOffset_Float = 2009)] = "DisplayMCOffset_Float"),
            (e[(e.DisplayMCScale_Float = 2010)] = "DisplayMCScale_Float"),
            (e[(e.EdidVendorID_Int32 = 2011)] = "EdidVendorID_Int32"),
            (e[(e.DisplayMCImageLeft_String = 2012)] =
              "DisplayMCImageLeft_String"),
            (e[(e.DisplayMCImageRight_String = 2013)] =
              "DisplayMCImageRight_String"),
            (e[(e.DisplayGCBlackClamp_Float = 2014)] =
              "DisplayGCBlackClamp_Float"),
            (e[(e.EdidProductID_Int32 = 2015)] = "EdidProductID_Int32"),
            (e[(e.CameraToHeadTransform_Matrix34 = 2016)] =
              "CameraToHeadTransform_Matrix34"),
            (e[(e.DisplayGCType_Int32 = 2017)] = "DisplayGCType_Int32"),
            (e[(e.DisplayGCOffset_Float = 2018)] = "DisplayGCOffset_Float"),
            (e[(e.DisplayGCScale_Float = 2019)] = "DisplayGCScale_Float"),
            (e[(e.DisplayGCPrescale_Float = 2020)] = "DisplayGCPrescale_Float"),
            (e[(e.DisplayGCImage_String = 2021)] = "DisplayGCImage_String"),
            (e[(e.LensCenterLeftU_Float = 2022)] = "LensCenterLeftU_Float"),
            (e[(e.LensCenterLeftV_Float = 2023)] = "LensCenterLeftV_Float"),
            (e[(e.LensCenterRightU_Float = 2024)] = "LensCenterRightU_Float"),
            (e[(e.LensCenterRightV_Float = 2025)] = "LensCenterRightV_Float"),
            (e[(e.UserHeadToEyeDepthMeters_Float = 2026)] =
              "UserHeadToEyeDepthMeters_Float"),
            (e[(e.CameraFirmwareVersion_Uint64 = 2027)] =
              "CameraFirmwareVersion_Uint64"),
            (e[(e.CameraFirmwareDescription_String = 2028)] =
              "CameraFirmwareDescription_String"),
            (e[(e.DisplayFPGAVersion_Uint64 = 2029)] =
              "DisplayFPGAVersion_Uint64"),
            (e[(e.DisplayBootloaderVersion_Uint64 = 2030)] =
              "DisplayBootloaderVersion_Uint64"),
            (e[(e.DisplayHardwareVersion_Uint64 = 2031)] =
              "DisplayHardwareVersion_Uint64"),
            (e[(e.AudioFirmwareVersion_Uint64 = 2032)] =
              "AudioFirmwareVersion_Uint64"),
            (e[(e.CameraCompatibilityMode_Int32 = 2033)] =
              "CameraCompatibilityMode_Int32"),
            (e[(e.ScreenshotHorizontalFieldOfViewDegrees_Float = 2034)] =
              "ScreenshotHorizontalFieldOfViewDegrees_Float"),
            (e[(e.ScreenshotVerticalFieldOfViewDegrees_Float = 2035)] =
              "ScreenshotVerticalFieldOfViewDegrees_Float"),
            (e[(e.DisplaySuppressed_Bool = 2036)] = "DisplaySuppressed_Bool"),
            (e[(e.DisplayAllowNightMode_Bool = 2037)] =
              "DisplayAllowNightMode_Bool"),
            (e[(e.DisplayMCImageWidth_Int32 = 2038)] =
              "DisplayMCImageWidth_Int32"),
            (e[(e.DisplayMCImageHeight_Int32 = 2039)] =
              "DisplayMCImageHeight_Int32"),
            (e[(e.DisplayMCImageNumChannels_Int32 = 2040)] =
              "DisplayMCImageNumChannels_Int32"),
            (e[(e.DisplayMCImageData_Binary = 2041)] =
              "DisplayMCImageData_Binary"),
            (e[(e.SecondsFromPhotonsToVblank_Float = 2042)] =
              "SecondsFromPhotonsToVblank_Float"),
            (e[(e.DriverDirectModeSendsVsyncEvents_Bool = 2043)] =
              "DriverDirectModeSendsVsyncEvents_Bool"),
            (e[(e.DisplayDebugMode_Bool = 2044)] = "DisplayDebugMode_Bool"),
            (e[(e.GraphicsAdapterLuid_Uint64 = 2045)] =
              "GraphicsAdapterLuid_Uint64"),
            (e[(e.DriverProvidedChaperonePath_String = 2048)] =
              "DriverProvidedChaperonePath_String"),
            (e[(e.ExpectedTrackingReferenceCount_Int32 = 2049)] =
              "ExpectedTrackingReferenceCount_Int32"),
            (e[(e.ExpectedControllerCount_Int32 = 2050)] =
              "ExpectedControllerCount_Int32"),
            (e[(e.NamedIconPathControllerLeftDeviceOff_String = 2051)] =
              "NamedIconPathControllerLeftDeviceOff_String"),
            (e[(e.NamedIconPathControllerRightDeviceOff_String = 2052)] =
              "NamedIconPathControllerRightDeviceOff_String"),
            (e[(e.NamedIconPathTrackingReferenceDeviceOff_String = 2053)] =
              "NamedIconPathTrackingReferenceDeviceOff_String"),
            (e[(e.DoNotApplyPrediction_Bool = 2054)] =
              "DoNotApplyPrediction_Bool"),
            (e[(e.CameraToHeadTransforms_Matrix34_Array = 2055)] =
              "CameraToHeadTransforms_Matrix34_Array"),
            (e[(e.DistortionMeshResolution_Int32 = 2056)] =
              "DistortionMeshResolution_Int32"),
            (e[(e.DriverIsDrawingControllers_Bool = 2057)] =
              "DriverIsDrawingControllers_Bool"),
            (e[(e.DriverRequestsApplicationPause_Bool = 2058)] =
              "DriverRequestsApplicationPause_Bool"),
            (e[(e.DriverRequestsReducedRendering_Bool = 2059)] =
              "DriverRequestsReducedRendering_Bool"),
            (e[(e.MinimumIpdStepMeters_Float = 2060)] =
              "MinimumIpdStepMeters_Float"),
            (e[(e.AudioBridgeFirmwareVersion_Uint64 = 2061)] =
              "AudioBridgeFirmwareVersion_Uint64"),
            (e[(e.ImageBridgeFirmwareVersion_Uint64 = 2062)] =
              "ImageBridgeFirmwareVersion_Uint64"),
            (e[(e.ImuToHeadTransform_Matrix34 = 2063)] =
              "ImuToHeadTransform_Matrix34"),
            (e[(e.ImuFactoryGyroBias_Vector3 = 2064)] =
              "ImuFactoryGyroBias_Vector3"),
            (e[(e.ImuFactoryGyroScale_Vector3 = 2065)] =
              "ImuFactoryGyroScale_Vector3"),
            (e[(e.ImuFactoryAccelerometerBias_Vector3 = 2066)] =
              "ImuFactoryAccelerometerBias_Vector3"),
            (e[(e.ImuFactoryAccelerometerScale_Vector3 = 2067)] =
              "ImuFactoryAccelerometerScale_Vector3"),
            (e[(e.ConfigurationIncludesLighthouse20Features_Bool = 2069)] =
              "ConfigurationIncludesLighthouse20Features_Bool"),
            (e[(e.Prop_AdditionalRadioFeatures_Uint64 = 2070)] =
              "Prop_AdditionalRadioFeatures_Uint64"),
            (e[(e.Prop_CameraWhiteBalance_Vector4_Array = 2071)] =
              "Prop_CameraWhiteBalance_Vector4_Array"),
            (e[(e.Prop_CameraDistortionFunction_Int32_Array = 2072)] =
              "Prop_CameraDistortionFunction_Int32_Array"),
            (e[(e.Prop_CameraDistortionCoefficients_Float_Array = 2073)] =
              "Prop_CameraDistortionCoefficients_Float_Array"),
            (e[(e.Prop_ExpectedControllerType_String = 2074)] =
              "Prop_ExpectedControllerType_String"),
            (e[(e.HmdTrackingStyle_Int32 = 2075)] = "HmdTrackingStyle_Int32"),
            (e[(e.DriverProvidedChaperoneVisibility_Bool = 2076)] =
              "DriverProvidedChaperoneVisibility_Bool"),
            (e[(e.HmdColumnCorrectionSettingPrefix_String = 2077)] =
              "HmdColumnCorrectionSettingPrefix_String"),
            (e[(e.CameraSupportsCompatibilityModes_Bool = 2078)] =
              "CameraSupportsCompatibilityModes_Bool"),
            (e[(e.SupportsRoomViewDepthProjection_Bool = 2079)] =
              "SupportsRoomViewDepthProjection_Bool"),
            (e[(e.DisplayAvailableFrameRates_Float_Array = 2080)] =
              "DisplayAvailableFrameRates_Float_Array"),
            (e[(e.DisplaySupportsRuntimeFramerateChange_Bool = 2084)] =
              "DisplaySupportsRuntimeFramerateChange_Bool"),
            (e[(e.DisplaySupportsAnalogGain_Bool = 2085)] =
              "DisplaySupportsAnalogGain_Bool"),
            (e[(e.DisplayMinAnalogGain_Float = 2086)] =
              "DisplayMinAnalogGain_Float"),
            (e[(e.DisplayMaxAnalogGain_Float = 2087)] =
              "DisplayMaxAnalogGain_Float"),
            (e[(e.DashboardScale_Float = 2091)] = "DashboardScale_Float"),
            (e[(e.PeerButtonInfo_String = 2092)] = "PeerButtonInfo_String"),
            (e[(e.IpdUIRangeMinMeters_Float = 2100)] =
              "IpdUIRangeMinMeters_Float"),
            (e[(e.IpdUIRangeMaxMeters_Float = 2101)] =
              "IpdUIRangeMaxMeters_Float"),
            (e[(e.Hmd_SupportsHDCP14LegacyCompat_Bool = 2102)] =
              "Hmd_SupportsHDCP14LegacyCompat_Bool"),
            (e[(e.Hmd_SupportsMicMonitoring_Bool = 2103)] =
              "Hmd_SupportsMicMonitoring_Bool"),
            (e[(e.Hmd_SupportsDisplayPortTrainingMode_Bool = 2104)] =
              "Hmd_SupportsDisplayPortTrainingMode_Bool"),
            (e[(e.Hmd_SupportsRoomViewDirect_Bool = 2105)] =
              "Hmd_SupportsRoomViewDirect_Bool"),
            (e[(e.Hmd_SupportsAppThrottling_Bool = 2106)] =
              "Hmd_SupportsAppThrottling_Bool"),
            (e[(e.Hmd_SupportsGpuBusMonitoring_Bool = 2107)] =
              "Hmd_SupportsGpuBusMonitoring_Bool"),
            (e[(e.DriverProvidedIPDVisibility_Bool = 2108)] =
              "DriverProvidedIPDVisibility_Bool"),
            (e[(e.Prop_Driver_Reserved_01 = 2109)] = "Prop_Driver_Reserved_01"),
            (e[(e.DriverRequestedMuraCorrectionMode_Int32 = 2200)] =
              "DriverRequestedMuraCorrectionMode_Int32"),
            (e[(e.DriverRequestedMuraFeather_InnerLeft_Int32 = 2201)] =
              "DriverRequestedMuraFeather_InnerLeft_Int32"),
            (e[(e.DriverRequestedMuraFeather_InnerRight_Int32 = 2202)] =
              "DriverRequestedMuraFeather_InnerRight_Int32"),
            (e[(e.DriverRequestedMuraFeather_InnerTop_Int32 = 2203)] =
              "DriverRequestedMuraFeather_InnerTop_Int32"),
            (e[(e.DriverRequestedMuraFeather_InnerBottom_Int32 = 2204)] =
              "DriverRequestedMuraFeather_InnerBottom_Int32"),
            (e[(e.DriverRequestedMuraFeather_OuterLeft_Int32 = 2205)] =
              "DriverRequestedMuraFeather_OuterLeft_Int32"),
            (e[(e.DriverRequestedMuraFeather_OuterRight_Int32 = 2206)] =
              "DriverRequestedMuraFeather_OuterRight_Int32"),
            (e[(e.DriverRequestedMuraFeather_OuterTop_Int32 = 2207)] =
              "DriverRequestedMuraFeather_OuterTop_Int32"),
            (e[(e.DriverRequestedMuraFeather_OuterBottom_Int32 = 2208)] =
              "DriverRequestedMuraFeather_OuterBottom_Int32"),
            (e[(e.Audio_SupportsDualSpeakerAndJackOutput_Bool = 2303)] =
              "Audio_SupportsDualSpeakerAndJackOutput_Bool"),
            (e[(e.AttachedDeviceId_String = 3e3)] = "AttachedDeviceId_String"),
            (e[(e.SupportedButtons_Uint64 = 3001)] = "SupportedButtons_Uint64"),
            (e[(e.Axis0Type_Int32 = 3002)] = "Axis0Type_Int32"),
            (e[(e.Axis1Type_Int32 = 3003)] = "Axis1Type_Int32"),
            (e[(e.Axis2Type_Int32 = 3004)] = "Axis2Type_Int32"),
            (e[(e.Axis3Type_Int32 = 3005)] = "Axis3Type_Int32"),
            (e[(e.Axis4Type_Int32 = 3006)] = "Axis4Type_Int32"),
            (e[(e.ControllerRoleHint_Int32 = 3007)] =
              "ControllerRoleHint_Int32"),
            (e[(e.FieldOfViewLeftDegrees_Float = 4e3)] =
              "FieldOfViewLeftDegrees_Float"),
            (e[(e.FieldOfViewRightDegrees_Float = 4001)] =
              "FieldOfViewRightDegrees_Float"),
            (e[(e.FieldOfViewTopDegrees_Float = 4002)] =
              "FieldOfViewTopDegrees_Float"),
            (e[(e.FieldOfViewBottomDegrees_Float = 4003)] =
              "FieldOfViewBottomDegrees_Float"),
            (e[(e.TrackingRangeMinimumMeters_Float = 4004)] =
              "TrackingRangeMinimumMeters_Float"),
            (e[(e.TrackingRangeMaximumMeters_Float = 4005)] =
              "TrackingRangeMaximumMeters_Float"),
            (e[(e.ModeLabel_String = 4006)] = "ModeLabel_String"),
            (e[(e.IconPathName_String = 5e3)] = "IconPathName_String"),
            (e[(e.NamedIconPathDeviceOff_String = 5001)] =
              "NamedIconPathDeviceOff_String"),
            (e[(e.NamedIconPathDeviceSearching_String = 5002)] =
              "NamedIconPathDeviceSearching_String"),
            (e[(e.NamedIconPathDeviceSearchingAlert_String = 5003)] =
              "NamedIconPathDeviceSearchingAlert_String"),
            (e[(e.NamedIconPathDeviceReady_String = 5004)] =
              "NamedIconPathDeviceReady_String"),
            (e[(e.NamedIconPathDeviceReadyAlert_String = 5005)] =
              "NamedIconPathDeviceReadyAlert_String"),
            (e[(e.NamedIconPathDeviceNotReady_String = 5006)] =
              "NamedIconPathDeviceNotReady_String"),
            (e[(e.NamedIconPathDeviceStandby_String = 5007)] =
              "NamedIconPathDeviceStandby_String"),
            (e[(e.NamedIconPathDeviceAlertLow_String = 5008)] =
              "NamedIconPathDeviceAlertLow_String"),
            (e[(e.DisplayHiddenArea_Binary_Start = 5100)] =
              "DisplayHiddenArea_Binary_Start"),
            (e[(e.DisplayHiddenArea_Binary_End = 5150)] =
              "DisplayHiddenArea_Binary_End"),
            (e[(e.ParentContainer = 5151)] = "ParentContainer"),
            (e[(e.UserConfigPath_String = 6e3)] = "UserConfigPath_String"),
            (e[(e.InstallPath_String = 6001)] = "InstallPath_String"),
            (e[(e.HasDisplayComponent_Bool = 6002)] =
              "HasDisplayComponent_Bool"),
            (e[(e.HasControllerComponent_Bool = 6003)] =
              "HasControllerComponent_Bool"),
            (e[(e.HasCameraComponent_Bool = 6004)] = "HasCameraComponent_Bool"),
            (e[(e.HasDriverDirectModeComponent_Bool = 6005)] =
              "HasDriverDirectModeComponent_Bool"),
            (e[(e.HasVirtualDisplayComponent_Bool = 6006)] =
              "HasVirtualDisplayComponent_Bool"),
            (e[(e.HasSpatialAnchorsSupport_Bool = 6007)] =
              "HasSpatialAnchorsSupport_Bool"),
            (e[(e.ControllerType_String = 7e3)] = "ControllerType_String"),
            (e[(e.LegacyInputProfile_String = 7001)] =
              "LegacyInputProfile_String"),
            (e[(e.VendorSpecific_Reserved_Start = 1e4)] =
              "VendorSpecific_Reserved_Start"),
            (e[(e.VendorSpecific_Reserved_End = 10999)] =
              "VendorSpecific_Reserved_End"),
            (e[(e.TrackedDeviceProperty_Max = 1e6)] =
              "TrackedDeviceProperty_Max");
        })(fe || (fe = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.SecondaryClick = 1)] = "SecondaryClick"),
              (e[(e.PrimaryClick = 2)] = "PrimaryClick");
          })(Re || (Re = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.ButtonEnter = 1)] = "ButtonEnter"),
              (e[(e.ButtonLeave = 2)] = "ButtonLeave"),
              (e[(e.Snap = 3)] = "Snap"),
              (e[(e.Sliding = 4)] = "Sliding"),
              (e[(e.SlidingEdge = 5)] = "SlidingEdge");
          })(ke || (ke = {})),
          (function (e) {
            (e[(e.Minimal = 1)] = "Minimal"),
              (e[(e.Modal = 2)] = "Modal"),
              (e[(e.ShowArrowKeys = 4)] = "ShowArrowKeys"),
              (e[(e.HideDoneKey = 8)] = "HideDoneKey");
          })(Ce || (Ce = {})),
          (function (e) {
            (e[(e.Unknown = -1)] = "Unknown"),
              (e[(e.Idle = 0)] = "Idle"),
              (e[(e.UserInteraction = 1)] = "UserInteraction"),
              (e[(e.UserInteraction_Timeout = 2)] = "UserInteraction_Timeout"),
              (e[(e.Standby = 3)] = "Standby"),
              (e[(e.Idle_Timeout = 4)] = "Idle_Timeout");
          })(we || (we = {}));
        class Fe extends h.Component {
          constructor(e) {
            super(e);
            let t = {};
            if (VRHTML)
              try {
                let e = VRHTML.VRProperties.GetStringProperty(
                  this.props.sDevicePath,
                  fe.RenderModelName_String,
                );
                if (e) {
                  let n =
                    VRHTML.VRRenderModelsInternal.FindComponentForInputSource(
                      e,
                      this.props.sInputPath,
                    );
                  if (n) {
                    let i =
                      VRHTML.VRRenderModels.GetComponentStateForDevicePath(
                        e,
                        n,
                        this.props.sDevicePath,
                      );
                    i && (t.xfTransform = i.xfTrackingToComponentLocal);
                  }
                }
              } catch (e) {
                console.log(
                  "Component transform invalid for ",
                  this.props.sDevicePath,
                );
              }
            this.state = t;
          }
          render() {
            return h.createElement(
              Te,
              {
                id: this.props.id,
                parent_path: this.props.sDevicePath,
                transform: this.state.xfTransform,
              },
              this.props.children,
            );
          }
        }
        class Ne extends se {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return h.createElement(
              "vsg-callout-transform",
              { offset: re(this.props.vOffset) },
              this.props.children,
            );
          }
        }
        class Ue extends se {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "dashboardtransform";
          }
          buildNode(e, t) {
            var n, i;
            const o = this.createSgNode(t);
            return (
              (o.properties.continuous_relatch =
                null !== (n = this.props.bContinuousRelatch) &&
                void 0 !== n &&
                n),
              (o.properties.free_dashboard_transform =
                null !== (i = this.props.bFreeDashboardTransform) &&
                void 0 !== i &&
                i),
              [e, o]
            );
          }
        }
        (0, i.gn)([o.ZP], Ue.prototype, "buildNode", null);
        class Ge extends se {
          constructor(e) {
            super(e);
          }
          internalRender() {
            let e = re(this.props.xfCurrent.translation),
              t = ae(this.props.xfCurrent.rotation),
              n = re(this.props.xfCurrent.scale);
            return h.createElement(
              "vsg-grab-transform",
              {
                "parent-path": this.props.sParentPath,
                translation: e,
                rotation: t,
                scale: n,
              },
              this.props.children,
            );
          }
        }
        class We extends se {
          constructor(e) {
            super(e);
          }
          internalRender() {
            let e = re(this.props.xfCurrent.translation),
              t = ae(this.props.xfCurrent.rotation),
              n = re(this.props.xfCurrent.scale);
            return h.createElement(
              "vsg-manipulation-transform",
              {
                "is-moving": this.props.bIsMoving,
                "parent-path": this.props.sParentPath,
                translation: e,
                rotation: t,
                scale: n,
              },
              this.props.children,
            );
          }
        }
        (0, i.gn)(
          [o.ZP],
          class extends se {
            constructor(e) {
              super(e), super.setBuildNodeOverride(this.buildNode);
            }
            getNodeType() {
              return "videocapturequad";
            }
            buildNode(e, t) {
              const n = this.createSgNode(t);
              return (
                (n.properties.width = this.props.width),
                (n.properties.height = this.props.height),
                (n.properties["near-z"] = this.props["near-z"]),
                (n.properties["far-z"] = this.props["far-z"]),
                (n.properties.debug = this.props.debug),
                [e, n]
              );
            }
          }.prototype,
          "buildNode",
          null,
        );
        class ze extends se {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "reparent-to-panel";
          }
          buildNode(e, t) {
            const n = this.createSgNode(t),
              i = Object.assign(Object.assign({}, e), {
                bInsideReparentedPanel: !0,
                currentPanel: null,
              });
            return (
              this.props.parent_overlay_key &&
                (n.properties["parent-overlay-key"] =
                  this.props.parent_overlay_key),
              [i, n]
            );
          }
        }
        (0, i.gn)([o.ZP], ze.prototype, "buildNode", null);
        const Ke = VRHTML;
      },
      4727: (e, t, n) => {
        "use strict";
        function i() {
          return {
            translation: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
          };
        }
        function o(e, t) {
          return { x: e.x + t.x, y: e.y + t.y, z: e.z + t.z };
        }
        function r(e, t, n) {
          return {
            x: t.x + e * (n.x - t.x),
            y: t.y + e * (n.y - t.y),
            z: t.z + e * (n.z - t.z),
          };
        }
        function a(e, t) {
          return { x: e.x - t.x, y: e.y - t.y };
        }
        function s(e, t) {
          return { x: e.x - t.x, y: e.y - t.y, z: e.z - t.z };
        }
        function l(e, t) {
          return { x: e.x * t, y: e.y * t };
        }
        function d(e, t) {
          return { x: e.x * t, y: e.y * t, z: e.z * t };
        }
        function c(e) {
          return Math.sqrt(e.x * e.x + e.y * e.y);
        }
        function u(e) {
          return Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z);
        }
        function h(e) {
          if (void 0 === e) return;
          let t = 0.5 * e.x,
            n = 0.5 * e.y,
            i = 0.5 * e.z,
            o = Math.cos(t),
            r = Math.cos(n),
            a = Math.cos(i),
            s = Math.sin(t),
            l = Math.sin(n),
            d = Math.sin(i);
          return {
            w: o * r * a + s * l * d,
            x: s * r * a + o * l * d,
            y: o * l * a - s * r * d,
            z: o * r * d - s * l * a,
          };
        }
        function p(e) {
          let t = e[0][0] + e[1][1] + e[2][2];
          if (t > 0) {
            let n = 2 * Math.sqrt(t + 1);
            return {
              w: 0.25 * n,
              x: (e[1][2] - e[2][1]) / n,
              y: (e[2][0] - e[0][2]) / n,
              z: (e[0][1] - e[1][0]) / n,
            };
          }
          if (e[0][0] > e[1][1] && e[0][0] > e[2][2]) {
            let t = 2 * Math.sqrt(1 + e[0][0] - e[1][1] - e[2][2]);
            return {
              w: (e[1][2] - e[2][1]) / t,
              x: 0.25 * t,
              y: (e[1][0] + e[0][1]) / t,
              z: (e[2][2] + e[0][2]) / t,
            };
          }
          if (e[1][1] > e[2][2]) {
            let t = 2 * Math.sqrt(1 + e[1][1] - e[0][0] - e[2][2]);
            return {
              w: (e[2][0] - e[0][2]) / t,
              x: (e[1][0] + e[0][1]) / t,
              y: 0.25 * t,
              z: (e[2][1] + e[1][2]) / t,
            };
          }
          {
            let t = 2 * Math.sqrt(1 + e[2][2] - e[0][0] - e[1][1]);
            return {
              w: (e[0][1] - e[1][0]) / t,
              x: (e[2][0] + e[0][2]) / t,
              y: (e[2][1] + e[1][2]) / t,
              z: 0.25 * t,
            };
          }
        }
        function m(e, t) {
          let n = 2 * (e.y * t.z - e.z * t.y),
            i = 2 * (e.z * t.x - e.x * t.z),
            o = 2 * (e.x * t.y - e.y * t.x);
          return {
            x: t.x + e.w * n + e.y * o - e.z * i,
            y: t.y + e.w * i + e.z * n - e.x * o,
            z: t.z + e.w * o + e.x * i - e.y * n,
          };
        }
        function v(e, t, n) {
          return [
            [e.x, e.y, e.z],
            [t.x, t.y, t.z],
            [n.x, n.y, n.z],
          ];
        }
        function g(e) {
          return m(e.rotation, { x: 0, y: 0, z: 1 });
        }
        function _(e) {
          let t = u(e);
          return { x: e.x / t, y: e.y / t, z: e.z / t };
        }
        function y(e, t) {
          return {
            x: e.y * t.z - e.z * t.y,
            y: e.z * t.x - e.x * t.z,
            z: e.x * t.y - e.y * t.x,
          };
        }
        function b(e) {
          let t = e.w * e.w + e.x * e.x + e.y * e.y + e.z * e.z;
          return { w: e.w / t, x: -e.x / t, y: -e.y / t, z: -e.z / t };
        }
        n.d(t, {
          Fs: () => l,
          Fx: () => m,
          JR: () => c,
          LY: () => u,
          M9: () => _,
          Oq: () => i,
          Pd: () => p,
          UU: () => h,
          Zj: () => a,
          aB: () => g,
          dq: () => y,
          eQ: () => s,
          mT: () => d,
          q9: () => r,
          rN: () => b,
          tS: () => v,
          ui: () => o,
        });
      },
      5928: (e, t, n) => {
        "use strict";
        n.d(t, { L: () => f });
        var i,
          o = n(655),
          r = n(7294),
          a = n(7056),
          s = n(3568),
          l = n(3884),
          d = n(9809),
          c = n(5211),
          u = n(2893),
          h = n(7062),
          p = n(2188),
          m = n(8242),
          v = n(3010);
        !(function (e) {
          (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
        })(i || (i = {}));
        class g extends r.Component {
          constructor(e) {
            super(e),
              (this.m_containerRef = null),
              (this.m_nameRef = null),
              (this.m_svgRef = null),
              (this.m_containerRef = r.createRef()),
              (this.m_nameRef = r.createRef()),
              (this.m_svgRef = r.createRef()),
              (this.state = {
                click: !1,
                touch: !1,
                x: 0,
                y: 0,
                value: 0,
                force: 0,
              });
          }
          componentDidMount() {
            this.RegisterForSourceUpdates();
          }
          componentWillUnmount() {
            this.UnregisterForSourceUpdates();
          }
          componentWillUpdate() {
            this.RegisterForSourceUpdates();
          }
          GetHeightEstimate() {
            return 1;
          }
          RegisterForSourceUpdates() {
            this.props.source.click &&
              this.props.visualizer.RegisterSourceVisualizer(
                this.props.devicePath,
                this.props.sourcePath + "/click",
                this.ComponentUpdated,
              ),
              this.props.source.touch &&
                this.props.visualizer.RegisterSourceVisualizer(
                  this.props.devicePath,
                  this.props.sourcePath + "/touch",
                  this.ComponentUpdated,
                ),
              this.props.source.value &&
                this.props.visualizer.RegisterSourceVisualizer(
                  this.props.devicePath,
                  this.props.sourcePath + "/value",
                  this.ComponentUpdated,
                ),
              ("joystick" != this.props.source.type &&
                "trackpad" != this.props.source.type) ||
                (this.props.visualizer.RegisterSourceVisualizer(
                  this.props.devicePath,
                  this.props.sourcePath + "/x",
                  this.ComponentUpdated,
                ),
                this.props.visualizer.RegisterSourceVisualizer(
                  this.props.devicePath,
                  this.props.sourcePath + "/y",
                  this.ComponentUpdated,
                )),
              this.props.source.force &&
                this.props.visualizer.RegisterSourceVisualizer(
                  this.props.devicePath,
                  this.props.sourcePath + "/force",
                  this.ComponentUpdated,
                );
          }
          UnregisterForSourceUpdates() {
            this.props.source.click &&
              this.props.visualizer.UnregisterSourceVisualizer(
                this.props.devicePath,
                this.props.sourcePath + "/click",
              ),
              this.props.source.touch &&
                this.props.visualizer.UnregisterSourceVisualizer(
                  this.props.devicePath,
                  this.props.sourcePath + "/touch",
                ),
              this.props.source.value &&
                this.props.visualizer.UnregisterSourceVisualizer(
                  this.props.devicePath,
                  this.props.sourcePath + "/value",
                ),
              ("joystick" != this.props.source.type &&
                "trackpad" != this.props.source.type) ||
                (this.props.visualizer.UnregisterSourceVisualizer(
                  this.props.devicePath,
                  this.props.sourcePath,
                ),
                this.props.visualizer.UnregisterSourceVisualizer(
                  this.props.devicePath,
                  this.props.sourcePath,
                )),
              this.props.source.force &&
                this.props.visualizer.UnregisterSourceVisualizer(
                  this.props.devicePath,
                  this.props.sourcePath + "/force",
                );
          }
          ComponentUpdated(e, t, n) {
            e == this.props.devicePath &&
              (t == this.props.sourcePath + "/click" &&
                this.setState({ click: n }),
              t == this.props.sourcePath + "/touch" &&
                this.setState({ touch: n }),
              t == this.props.sourcePath + "/x" && this.setState({ x: n }),
              t == this.props.sourcePath + "/y" && this.setState({ y: n }),
              t == this.props.sourcePath + "/value" &&
                this.setState({ value: n }),
              t == this.props.sourcePath + "/force" &&
                this.setState({ force: n }));
          }
          GetPositionStyle() {
            let e;
            return (
              (e =
                "/user/hand/left" == this.props.devicePath
                  ? this.props.imageScale.right -
                    this.props.imageScale.scale *
                      this.props.source.binding_image_point[0]
                  : this.props.imageScale.left +
                    this.props.imageScale.scale *
                      this.props.source.binding_image_point[0]),
              {
                position: "absolute",
                left: e,
                top:
                  this.props.imageScale.scale *
                    this.props.source.binding_image_point[1] +
                  this.props.imageScale.top,
              }
            );
          }
          GetPosition() {
            let e;
            return (
              (e =
                "/user/hand/left" == this.props.devicePath
                  ? this.props.imageScale.right -
                    this.props.imageScale.scale *
                      this.props.source.binding_image_point[0]
                  : this.props.imageScale.left +
                    this.props.imageScale.scale *
                      this.props.source.binding_image_point[0]),
              {
                x: e,
                y:
                  this.props.imageScale.scale *
                    this.props.source.binding_image_point[1] +
                  this.props.imageScale.top,
              }
            );
          }
          renderHeaderVisualization() {
            return this.props.source.touch || this.props.source.click
              ? this.renderTouchClickVisualization()
              : null;
          }
          renderBodyVisualization() {
            return null;
          }
          renderTouchClickVisualization() {
            let e = "";
            return (
              this.state.click && (e += " Clicked"),
              this.state.touch && (e += " Touched"),
              r.createElement(
                "div",
                { className: "VisualizerButtonContainer" },
                r.createElement("div", {
                  className: "VisualizerButtonBase" + e,
                }),
              )
            );
          }
          renderBar(e, t, n) {
            let i = { width: String(100 * n) + "%" };
            return r.createElement(
              "div",
              { className: "TriggerBar " + t },
              r.createElement(
                "div",
                { className: "VisualizerLabel" },
                (0, s.Xx)(e),
              ),
              r.createElement(
                "div",
                { className: "TriggerBarBackground" },
                r.createElement("div", {
                  className: "TriggerBarContent",
                  style: i,
                }),
              ),
            );
          }
          UpdateSVGPath() {
            if (
              this.m_nameRef &&
              this.m_nameRef.current &&
              this.m_containerRef &&
              this.m_containerRef.current &&
              this.m_svgRef &&
              this.m_svgRef.current
            ) {
              let e = this.m_svgRef.current.children.namedItem("SourcePath"),
                t = this.m_svgRef.current.children.namedItem("SourceLine"),
                n = this.m_svgRef.current.children.namedItem("SourceCircle"),
                o = this.props.side == i.Right,
                r = this.m_nameRef.current.getBoundingClientRect(),
                a = this.m_containerRef.current.getBoundingClientRect(),
                s = this.GetPosition(),
                l = new c.E9(0, r.top + r.height / 2);
              l.x = o ? a.left - 10 : a.right + 10;
              let d = o ? -20 : 20,
                u = l.x + d + "," + l.y + " " + s.x + "," + s.y;
              e.setAttribute("points", u);
              let h = l.x + "," + l.y + " " + (l.x + d) + "," + l.y;
              t.setAttribute("points", h),
                n.setAttribute("cx", s.x + ""),
                n.setAttribute("cy", s.y + "");
            }
          }
          componentDidUpdate() {
            this.UpdateSVGPath();
          }
          IsEngaged() {
            return (
              this.state.touch ||
              this.state.click ||
              (this.state.value && this.state.value > 0.1) ||
              (this.state.force && this.state.force > 0.1) ||
              (this.state.x && Math.abs(this.state.x) > 0.1) ||
              (this.state.y && Math.abs(this.state.x) > 0.1)
            );
          }
          render() {
            let e = "MenuSVG";
            return (
              this.props.side == i.Left
                ? (e += " MenuLeftLine")
                : (e += " MenuRightLine"),
              this.IsEngaged() && (e += " MenuSVGVisible"),
              r.createElement(
                "div",
                { className: "VisualizerControl", ref: this.m_containerRef },
                r.createElement(
                  "div",
                  { className: "VisualizerSectionHeader" },
                  r.createElement(
                    "div",
                    { className: "Label Title", ref: this.m_nameRef },
                    d.I.LocalizeControllerString(
                      this.props.controllerType,
                      this.props.sourcePath,
                    ),
                  ),
                  this.renderHeaderVisualization(),
                ),
                this.renderBodyVisualization(),
                r.createElement(
                  "svg",
                  {
                    className: e,
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: this.m_svgRef,
                  },
                  r.createElement(
                    "defs",
                    null,
                    r.createElement(
                      "radialGradient",
                      { id: "buttonGradient" },
                      r.createElement("stop", {
                        offset: "0%",
                        stopColor: "var(--bordercolor)",
                        stopOpacity: "0.8",
                      }),
                      r.createElement("stop", {
                        offset: "100%",
                        stopColor: "var(--bordercolor)",
                        stopOpacity: "0",
                      }),
                    ),
                  ),
                  r.createElement("polyline", {
                    id: "SourceLine",
                    stroke: "var(--bordercolor)",
                    strokeWidth: "0.1rem",
                    fill: "transparent",
                  }),
                  r.createElement("polyline", {
                    id: "SourcePath",
                    stroke: "var(--bordercolor)",
                    strokeWidth: "0.1rem",
                    fill: "transparent",
                  }),
                  r.createElement("circle", {
                    id: "SourceCircle",
                    r: "2rem",
                    fill: "url(#buttonGradient)",
                  }),
                ),
              )
            );
          }
        }
        (0, o.gn)([a.ak], g.prototype, "ComponentUpdated", null),
          (0, o.gn)([a.ak], g.prototype, "UpdateSVGPath", null);
        class _ extends g {
          constructor(e) {
            super(e);
          }
        }
        class y extends g {
          constructor(e) {
            super(e);
          }
          GetHeightEstimate() {
            let e = 1;
            return (
              this.props.source.value && e++, this.props.source.force && e++, e
            );
          }
          renderBodyVisualization() {
            return r.createElement(
              "div",
              { className: "TriggerVisualizerContainer" },
              this.props.source.value &&
                this.renderBar(
                  "#SourceInputMode_Pull",
                  "TriggerValue",
                  this.state.value,
                ),
              this.props.source.force &&
                this.renderBar(
                  "#SourceInputMode_Force",
                  "TriggerForce",
                  this.state.force,
                ),
            );
          }
        }
        class b extends g {
          constructor(e) {
            super(e);
          }
          renderBodyVisualization() {
            let e = null,
              t = "TrackpadVisualizerPip";
            return (
              (!this.state.touch &&
                (this.props.source.touch ||
                  (0 == this.state.x && 0 == this.state.y))) ||
                ((e = {
                  position: "absolute",
                  top: String(2 * (1 - this.state.y)) + "rem",
                  left: String(2 * (1 + this.state.x)) + "rem",
                }),
                this.state.click && (t += " Clicked")),
              r.createElement(
                "div",
                {
                  className:
                    "TrackpadVisualizerContainer" +
                    (this.state.touch ? " Touched" : ""),
                },
                r.createElement(
                  "div",
                  { className: "TrackpadPosition" },
                  r.createElement(
                    "div",
                    { className: "VisualizerLabel" },
                    (0, s.Xx)("#SourceInputMode_Position"),
                  ),
                  r.createElement(
                    "div",
                    { className: "TrackpadVisualizerContainer" },
                    r.createElement(
                      "div",
                      { className: "TrackpadVisualizerBackground" },
                      e &&
                        r.createElement(
                          "div",
                          { style: e },
                          r.createElement(
                            "div",
                            { className: "TrackpadVisualizerPipContainer" },
                            r.createElement("div", { className: t }),
                          ),
                        ),
                    ),
                  ),
                ),
                this.props.source.force &&
                  this.renderBar(
                    "#SourceInputMode_Force",
                    "TriggerForce",
                    this.state.force,
                  ),
              )
            );
          }
        }
        class S extends r.Component {
          constructor(e) {
            super(e),
              (this.m_imageRef = r.createRef()),
              (this.state = { imageScale: this.GetPointScale() });
          }
          get ControllerTypeInfo() {
            let e = d.I.GetDeviceInfo(this.props.devicePath);
            return d.I.GetControllerTypeInfo(e.controller_type);
          }
          componentDidMount() {
            this.setState({ imageScale: this.GetPointScale() });
          }
          EstimateSourceHeight(e) {
            let t;
            switch (e.type) {
              case "button":
              default:
                return 1;
              case "trigger":
                return (t = 1), e.force && t++, e.value && t++, t;
              case "joystick":
              case "trackpad":
                return (t = 3), e.force && t++, t;
              case "pose":
              case "pinch":
              case "skeleton":
              case "vibration":
                return 0;
            }
          }
          renderSource(e, t, n) {
            let i = e + this.ControllerTypeInfo.controller_type;
            switch (t.type) {
              case "button":
                return r.createElement(_, {
                  key: i,
                  side: n,
                  controllerType: this.ControllerTypeInfo,
                  devicePath: this.props.devicePath,
                  sourcePath: e,
                  source: t,
                  visualizer: this.props.visualizer,
                  imageScale: this.GetPointScale(),
                });
              case "trigger":
                return r.createElement(y, {
                  key: i,
                  side: n,
                  controllerType: this.ControllerTypeInfo,
                  devicePath: this.props.devicePath,
                  sourcePath: e,
                  source: t,
                  visualizer: this.props.visualizer,
                  imageScale: this.GetPointScale(),
                });
              case "joystick":
              case "trackpad":
                return r.createElement(b, {
                  key: i,
                  side: n,
                  controllerType: this.ControllerTypeInfo,
                  devicePath: this.props.devicePath,
                  sourcePath: e,
                  source: t,
                  visualizer: this.props.visualizer,
                  imageScale: this.GetPointScale(),
                });
              case "pose":
              case "pinch":
              case "skeleton":
              case "vibration":
                return null;
              default:
                return r.createElement(
                  "div",
                  { key: i },
                  "Need to add visualizer for ",
                  t.type,
                );
            }
          }
          GetPointScale() {
            let e = { scale: 1, left: 0, right: 0, top: 0 };
            if (
              this.m_imageRef.current &&
              this.m_imageRef.current.naturalWidth > 0
            ) {
              let t = this.m_imageRef.current.getBoundingClientRect();
              (e.scale = t.height / this.m_imageRef.current.naturalHeight),
                (e.left = t.left + window.scrollX),
                (e.right = t.right + window.scrollX),
                (e.top = t.top + window.scrollY);
            }
            return e;
          }
          OnImageLoaded() {
            this.setState({ imageScale: this.GetPointScale() });
          }
          OnImageReflow() {
            this.setState({ imageScale: this.GetPointScale() });
          }
          renderImage() {
            let e = null,
              t = null,
              n = this.ControllerTypeInfo;
            return (
              "/user/hand/left" == this.props.devicePath
                ? n.input_bindingui_left &&
                  ((e = n.input_bindingui_left.uri),
                  (t = n.input_bindingui_left.transform
                    ? n.input_bindingui_left.transform
                    : ""))
                : "/user/hand/right" == this.props.devicePath
                  ? n.input_bindingui_right &&
                    ((e = n.input_bindingui_right.uri),
                    (t = n.input_bindingui_right.transform
                      ? n.input_bindingui_right.transform
                      : ""))
                  : n.input_bindingui_left
                    ? ((e = n.input_bindingui_left.uri),
                      (t = n.input_bindingui_left.transform
                        ? n.input_bindingui_left.transform
                        : ""))
                    : n.input_bindingui_right &&
                      ((e = n.input_bindingui_right.uri),
                      (t = n.input_bindingui_right.transform
                        ? n.input_bindingui_right.transform
                        : "")),
              e
                ? r.createElement(
                    "div",
                    { className: "VisualizerImageContainer" },
                    r.createElement("img", {
                      className: "VisualizerImage",
                      ref: this.m_imageRef,
                      onLoad: this.OnImageLoaded,
                      src: e,
                      style: { transform: t },
                    }),
                    r.createElement(u.Z, { onReflow: this.OnImageReflow }),
                  )
                : null
            );
          }
          render() {
            let e = [],
              t = [],
              n = this.ControllerTypeInfo,
              o = 0,
              a = [];
            for (let e in n.input_source) {
              let t = n.input_source[e];
              if ("InputValueVisibility_AvailableButHidden" == t.visibility)
                continue;
              let i = this.EstimateSourceHeight(t);
              (o += i),
                a.push({
                  sSourcePath: e,
                  inputSource: t,
                  order: t.order ? t.order : 0,
                  height: i,
                });
            }
            let s = 8;
            o > 16 && (s = o / 2);
            let l = 0,
              d = a.sort((e, t) => e.order - t.order);
            for (let n of d) {
              l += n.height;
              let o = l > s ? i.Right : i.Left,
                r = this.renderSource(n.sSourcePath, n.inputSource, o);
              r && (o == i.Left ? e.push(r) : t.push(r));
            }
            return r.createElement(
              "div",
              { className: "ControllerVisualizer" },
              r.createElement(
                "div",
                { className: "VisualizerLeft ControllerVisualizerEntries" },
                e,
              ),
              this.renderImage(),
              r.createElement(
                "div",
                { className: "VisualizerRight ControllerVisualizerEntries" },
                t,
              ),
            );
          }
        }
        (0, o.gn)([a.ak], S.prototype, "OnImageLoaded", null),
          (0, o.gn)([a.ak], S.prototype, "OnImageReflow", null);
        let f = class extends r.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new l.Nv()),
              (this.m_componentRegistrations = {}),
              (this.m_observeDisposer = null),
              this.m_mailbox.RegisterHandler(
                "update_component_states",
                this.OnUpdateComponentStates,
              ),
              this.m_mailbox
                .Init("controller_visualizer")
                .then(
                  () => (
                    this.UpdateDeviceInputStateSubscriptions(),
                    (this.m_observeDisposer = (0, p.N7)(
                      d.I,
                      "ConnectedDevices",
                      this.OnConnectedDevicesChanged,
                    )),
                    this.SetDefaultDeviceIfNecessary(),
                    null
                  ),
                ),
              (this.state = { devicePath: null });
          }
          componentWillUnmount() {
            this.m_observeDisposer && this.m_observeDisposer();
            for (let e of d.I.ConnectedDevices) {
              let t = {
                type: "cancel_input_state_updates",
                device_path: e.root_path,
                returnAddress: this.m_mailbox.name,
              };
              this.m_mailbox.SendMessage("input_server", t);
            }
          }
          UpdateDeviceInputStateSubscriptions() {
            for (let e of d.I.ConnectedDevices) {
              let t = {
                type: "request_input_state_updates",
                device_path: e.root_path,
                returnAddress: this.m_mailbox.name,
              };
              this.m_mailbox.SendMessage("input_server", t);
            }
          }
          SetDefaultDeviceIfNecessary() {
            let e = this.GetSortedDevices();
            !this.state.devicePath &&
              e &&
              this.setState({ devicePath: e[0].root_path });
          }
          OnConnectedDevicesChanged() {
            this.UpdateDeviceInputStateSubscriptions();
          }
          OnUpdateComponentStates(e) {
            for (let t in e.components) {
              let n = e.device + t;
              this.m_componentRegistrations[n] &&
                this.m_componentRegistrations[n](e.device, t, e.components[t]);
            }
          }
          RegisterSourceVisualizer(e, t, n) {
            this.m_componentRegistrations[e + t] = n;
          }
          UnregisterSourceVisualizer(e, t) {
            delete this.m_componentRegistrations[e + t];
          }
          GetDeviceSortOrder(e) {
            switch (e.root_path) {
              case "/user/hand/left":
                return 0;
              case "/user/hand/right":
                return 1;
              default:
                return 2;
            }
          }
          GetSortedDevices() {
            return d.I.ConnectedDevices.sort(
              (e, t) => this.GetDeviceSortOrder(e) - this.GetDeviceSortOrder(t),
            );
          }
          render() {
            let e,
              t = [],
              n = this.GetSortedDevices();
            if (!n)
              return r.createElement(
                m.TB,
                {
                  className: "ControllerVisualizerWrapper",
                  header: (0, s.Xx)("#TestControllerTitle", ""),
                  onDismissRequested: this.props.onDismissRequested,
                },
                r.createElement(
                  "div",
                  { className: "VisualizerLabel" },
                  (0, s.Xx)("#TestController_NoController"),
                ),
              );
            for (let i of n)
              "TrackedDeviceClass_HMD" != i.class &&
                (i.root_path == this.state.devicePath && (e = i.serial_number),
                t.push({
                  value: i.root_path,
                  sLabel: (0, s.Xx)("#" + i.root_path),
                }));
            return r.createElement(
              m.TB,
              {
                className: "ControllerVisualizerWrapper",
                header: (0, s.Xx)("#TestControllerTitle", e),
                onDismissRequested: this.props.onDismissRequested,
                footer: r.createElement(m.U5, {
                  leftControls: [
                    r.createElement(v.hu, {
                      key: "dropdown",
                      items: t,
                      value: this.state.devicePath,
                      defaultLabel: (0, s.Xx)("#" + this.state.devicePath),
                      onChange: (e) => {
                        this.setState({ devicePath: e });
                      },
                    }),
                  ],
                  onDismissRequested: this.props.onDismissRequested,
                }),
              },
              this.state.devicePath &&
                r.createElement(S, {
                  devicePath: this.state.devicePath,
                  serialNumber: e,
                  visualizer: this,
                }),
            );
          }
        };
        (0, o.gn)([a.ak], f.prototype, "OnConnectedDevicesChanged", null),
          (0, o.gn)([a.ak], f.prototype, "OnUpdateComponentStates", null),
          (f = (0, o.gn)([h.Pi], f));
      },
      9671: (e, t, n) => {
        "use strict";
        n.d(t, { V: () => d });
        var i = n(655),
          o = n(7294),
          r = n(7056),
          a = n(3568),
          s = n(3884);
        class l extends o.Component {
          constructor(e) {
            if (
              (super(e),
              (this.m_mailbox = new s.Nv()),
              this.m_mailbox.Init("legacy_debugger"),
              this.m_mailbox.RegisterHandler(
                "legacy_input_frame",
                this.OnLegacyInputFrame,
              ),
              VRHTML)
            ) {
              let e = VRHTML.VRApplications.GetCurrentSceneProcessId();
              VRHTML.VRPathProperties.SetInt32PathProperty(
                "/legacy_debugger_pid",
                e,
              );
            }
            this.state = { currentState: null };
          }
          componentWillUnmount() {
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRPathProperties.SetInt32PathProperty(
                "/legacy_debugger_pid",
                0,
              );
          }
          OnLegacyInputFrame(e) {
            this.setState({ currentState: e });
          }
          renderController(e) {
            let t = [];
            if (
              (t.push(
                o.createElement(
                  "div",
                  { className: "Label LegacyDebuggerGroup" },
                  "Pressed:",
                ),
              ),
              e.pressed)
            )
              for (let n of e.pressed)
                t.push(
                  o.createElement(
                    "div",
                    { className: "Label LegacyDebuggerButtonName" },
                    n,
                  ),
                );
            else
              t.push(
                o.createElement(
                  "div",
                  { className: "Label LegacyDebuggerButtonName" },
                  "None",
                ),
              );
            if (
              (t.push(
                o.createElement(
                  "div",
                  { className: "Label LegacyDebuggerGroup" },
                  "Touched:",
                ),
              ),
              e.touched)
            )
              for (let n of e.touched)
                t.push(
                  o.createElement(
                    "div",
                    { className: "Label LegacyDebuggerButtonName" },
                    n,
                  ),
                );
            else
              t.push(
                o.createElement(
                  "div",
                  { className: "Label LegacyDebuggerButtonName" },
                  "None",
                ),
              );
            if (
              (t.push(
                o.createElement(
                  "div",
                  { className: "Label LegacyDebuggerGroup" },
                  "Supported:",
                ),
              ),
              e.supported_buttons)
            )
              for (let n of e.supported_buttons)
                t.push(
                  o.createElement(
                    "div",
                    { className: "Label LegacyDebuggerButtonName" },
                    n,
                  ),
                );
            else
              t.push(
                o.createElement(
                  "div",
                  { className: "Label LegacyDebuggerButtonName" },
                  "None",
                ),
              );
            t.push(
              o.createElement(
                "div",
                { className: "Label LegacyDebuggerGroup" },
                "Axis:",
              ),
            );
            for (let n of e.axis)
              t.push(
                o.createElement(
                  "div",
                  { className: "Label LegacyDebuggerButtonName" },
                  "X: ",
                  n.x.toFixed(2),
                  " Y: ",
                  n.y.toFixed(2),
                ),
              );
            return t;
          }
          render() {
            return this.state.currentState
              ? o.createElement(
                  "div",
                  { className: "FlexRow" },
                  o.createElement(
                    "div",
                    { className: "FlexColumn LegacyDebuggerController" },
                    o.createElement("div", { className: "Label" }, "Left"),
                    this.renderController(this.state.currentState.left),
                  ),
                  o.createElement(
                    "div",
                    { className: "FlexColumn LegacyDebuggerController" },
                    o.createElement("div", { className: "Label" }, "Right"),
                    this.renderController(this.state.currentState.right),
                  ),
                  o.createElement(
                    "div",
                    { className: "FlexColumn LegacyDebuggerController" },
                    o.createElement("div", { className: "Label" }, "HMD"),
                    this.renderController(this.state.currentState.hmd),
                  ),
                )
              : o.createElement(
                  "div",
                  { className: "Label" },
                  (0, a.Xx)("#LegacyDebugger_NoApp"),
                );
          }
        }
        (0, i.gn)([r.ak], l.prototype, "OnLegacyInputFrame", null);
        class d extends o.Component {
          constructor(e) {
            super(e);
          }
          render() {
            return o.createElement(
              "div",
              { className: "FlexRowWithWrap" },
              o.createElement(
                "div",
                { className: "FlexFullWidthRowCentered LegacyDebuggerWrapper" },
                o.createElement(l, null),
              ),
            );
          }
        }
      },
      792: (e, t, n) => {
        "use strict";
        n.d(t, { C: () => s });
        var i = n(655),
          o = n(7056),
          r = n(2188);
        n(1628);
        class a {
          Init() {
            return (0, i.mG)(this, void 0, void 0, function* () {
              yield this.Load(), (0, r.EH)(() => this.Save());
            });
          }
          Load() {
            return (0, i.mG)(this, void 0, void 0, function* () {});
          }
          Save() {
            return (0, i.mG)(this, void 0, void 0, function* () {});
          }
        }
        (0, i.gn)([r.LO], a.prototype, "m_bShowFloor", void 0),
          (0, i.gn)([r.LO], a.prototype, "m_bShowFloorFar", void 0),
          (0, i.gn)([r.LO], a.prototype, "m_fBackgroundDomeRadius", void 0),
          (0, i.gn)([r.LO], a.prototype, "m_fBackgroundOffsetX", void 0),
          (0, i.gn)([r.LO], a.prototype, "m_fBackgroundOffsetZ", void 0),
          (0, i.gn)([o.ak], a.prototype, "Load", null),
          (0, i.gn)([o.ak], a.prototype, "Save", null);
        const s = new a();
        window.ConstructStore = s;
      },
      9626: (e, t, n) => {
        "use strict";
        n.d(t, { B: () => p });
        var i = n(655),
          o = n(3884),
          r = n(7056),
          a = n(2188),
          s = (n(4790), n(2477)),
          l = n(1628),
          d = n(7176),
          c = n(4940);
        const u = "DashboardStoreSessionStorage";
        class h {
          constructor() {
            (this.k_sDashboardVRGamepadUI = "steam/dashboard/isvrgamepadui"),
              (this.m_bDarkMode = !1),
              (this.m_eIncognitoMode = o.Qu.Unavailable),
              (this.m_mapOverlayState = new Map()),
              (this.m_mapActiveDashboardPopupRequests = new Map()),
              (this.m_bHasGamepadUIOverlay = !1),
              (this.m_bIsVRGamepadUI = !1),
              (this.m_bIsSystemUIProcess = !1),
              (this.m_mapTabIdForSummonKey = new Map()),
              (this.m_mapSummonKeyForTabId = new Map()),
              (this.m_unNextTabId = 1);
          }
          GetActiveDashboardPopups() {
            return Array.from(this.m_mapActiveDashboardPopupRequests.values());
          }
          ClearActiveDashboardPopups() {
            this.m_mapActiveDashboardPopupRequests.clear();
          }
          Init(e) {
            return (0, i.mG)(this, void 0, void 0, function* () {
              if (
                ((this.m_bIsSystemUIProcess = e),
                yield this.LoadSessionDevData(),
                (0, a.EH)(() => this.SaveSessionDevData()),
                this.m_bIsSystemUIProcess)
              )
                s.Q.SteamVR.SetImplementation("ShowDashboardPopup", (e) =>
                  (0, i.mG)(this, void 0, void 0, function* () {
                    this.m_mapActiveDashboardPopupRequests.set(
                      e.dashboard_popup_request_id,
                      e,
                    );
                  }),
                ),
                  s.Q.SteamVR.SetImplementation("HideDashboardPopup", (e) => {
                    this.m_mapActiveDashboardPopupRequests.delete(
                      e.dashboard_popup_request_id,
                    );
                  });
              else {
                VRHTML.VRPathProperties.RegisterForBoolPathPropertyChangedEvents(
                  this.k_sDashboardVRGamepadUI,
                  (e) => {
                    this.m_bIsVRGamepadUI = e;
                  },
                );
                try {
                  this.m_bIsVRGamepadUI =
                    VRHTML.VRPathProperties.GetBoolPathProperty(
                      this.k_sDashboardVRGamepadUI,
                    );
                } catch (e) {}
              }
              (0, a.EH)(this.updateBodyClasses);
            });
          }
          LoadSessionDevData() {
            var e, t, n, o, r, a, s, l;
            return (0, i.mG)(this, void 0, void 0, function* () {
              const i = JSON.parse(
                null !== (e = sessionStorage.getItem(u)) && void 0 !== e
                  ? e
                  : "{}",
              );
              (this.m_bIgnoreVRGamepadUI =
                null !== (t = i.m_bIgnoreVRGamepadUI) && void 0 !== t && t),
                (this.m_bShowLegacyBar =
                  null !== (n = i.m_bShowLegacyBar) && void 0 !== n && n),
                (this.m_bHasGamepadUIOverlay =
                  null !== (o = i.m_bHasGamepadUIOverlay) && void 0 !== o && o),
                (this.m_bIsVRGamepadUI =
                  null !== (r = i.m_bIsVRGamepadUI) && void 0 !== r && r),
                (this.m_fVRGamepadUI_MetersPerPixel =
                  null !== (a = i.m_fVRGamepadUI_MetersPerPixel) && void 0 !== a
                    ? a
                    : (0.167 / 120) * 1.1),
                (this.m_fVRGamepadUI_GlobalActiveOverlayScale =
                  null !== (s = i.m_fVRGamepadUI_GlobalActiveOverlayScale) &&
                  void 0 !== s
                    ? s
                    : 1.17);
              for (const e of null !== (l = i.m_rgDashboardPopups) &&
              void 0 !== l
                ? l
                : [])
                this.m_mapActiveDashboardPopupRequests.set(
                  e.dashboard_popup_request_id,
                  e,
                );
              this.updatePathProperties();
            });
          }
          SaveSessionDevData() {
            return (0, i.mG)(this, void 0, void 0, function* () {
              const e = {
                m_bIgnoreVRGamepadUI: this.m_bIgnoreVRGamepadUI,
                m_bShowLegacyBar: this.m_bShowLegacyBar,
                m_rgDashboardPopups: Array.from(
                  this.m_mapActiveDashboardPopupRequests.values(),
                ),
                m_bHasGamepadUIOverlay: this.m_bHasGamepadUIOverlay,
                m_bIsVRGamepadUI: this.m_bIsVRGamepadUI,
                m_fVRGamepadUI_MetersPerPixel:
                  this.m_fVRGamepadUI_MetersPerPixel,
                m_fVRGamepadUI_GlobalActiveOverlayScale:
                  this.m_fVRGamepadUI_GlobalActiveOverlayScale,
              };
              sessionStorage.setItem(u, JSON.stringify(e));
            });
          }
          GetTabIdForSummonKey(e) {
            if (!this.m_mapTabIdForSummonKey.has(e)) {
              const t = this.m_unNextTabId;
              this.m_unNextTabId++,
                this.m_mapTabIdForSummonKey.set(e, t),
                this.m_mapSummonKeyForTabId.set(t, e);
            }
            return this.m_mapTabIdForSummonKey.get(e);
          }
          GetSummonKeyForTabId(e) {
            return this.m_mapSummonKeyForTabId.get(e);
          }
          SetIgnoreVRGamepadUI(e) {
            (this.m_bIgnoreVRGamepadUI = e), this.updatePathProperties();
          }
          SetHasGamepadUIOVerlay(e) {
            (this.m_bHasGamepadUIOverlay = e), this.updatePathProperties();
          }
          get isTheaterMode() {
            return !1;
          }
          get isDarkMode() {
            return !1;
          }
          get isGroupMode() {
            return !1;
          }
          get ignoreVRGamepadUI() {
            return this.m_bIgnoreVRGamepadUI;
          }
          get isVRGamepadUI() {
            return this.m_bIsVRGamepadUI;
          }
          get currentDashboardPosition() {
            return this.isVRGamepadUI ? c._.Standard : l.G3.settings.get(d.o1);
          }
          updatePathProperties() {
            this.m_bIsSystemUIProcess &&
              ((this.m_bIsVRGamepadUI =
                this.m_bHasGamepadUIOverlay && !this.m_bIgnoreVRGamepadUI),
              VRHTML.VRPathProperties.SetBoolPathProperty(
                this.k_sDashboardVRGamepadUI,
                this.m_bIsVRGamepadUI,
              ));
          }
          updateBodyClasses() {
            this.m_bIsVRGamepadUI
              ? window.document.body.classList.add("VRGamepadUI")
              : window.document.body.classList.remove("VRGamepadUI");
          }
        }
        (0, i.gn)([a.LO], h.prototype, "m_bIgnoreVRGamepadUI", void 0),
          (0, i.gn)([a.LO], h.prototype, "m_bShowLegacyBar", void 0),
          (0, i.gn)([a.LO], h.prototype, "m_bDarkMode", void 0),
          (0, i.gn)([a.LO], h.prototype, "m_eIncognitoMode", void 0),
          (0, i.gn)([a.LO], h.prototype, "m_mapOverlayState", void 0),
          (0, i.gn)(
            [a.LO],
            h.prototype,
            "m_mapActiveDashboardPopupRequests",
            void 0,
          ),
          (0, i.gn)(
            [a.LO],
            h.prototype,
            "m_fVRGamepadUI_MetersPerPixel",
            void 0,
          ),
          (0, i.gn)(
            [a.LO],
            h.prototype,
            "m_fVRGamepadUI_GlobalActiveOverlayScale",
            void 0,
          ),
          (0, i.gn)([a.LO], h.prototype, "m_bIsVRGamepadUI", void 0),
          (0, i.gn)([r.ak], h.prototype, "LoadSessionDevData", null),
          (0, i.gn)([r.ak], h.prototype, "SaveSessionDevData", null),
          (0, i.gn)([r.ak], h.prototype, "updateBodyClasses", null);
        const p = new h();
        window.DashboardStore = p;
      },
      7726: (e, t, n) => {
        "use strict";
        n.d(t, { A: () => i, X: () => l });
        var i,
          o = n(655),
          r = n(7294),
          a = n(7056),
          s = n(3884);
        !(function (e) {
          (e[(e.HorizontalPips = 0)] = "HorizontalPips"),
            (e[(e.VerticalBattery = 1)] = "VerticalBattery");
        })(i || (i = {}));
        class l extends r.Component {
          constructor(e) {
            super(e),
              (this.m_BatteryStateChangedCallbackHandle = null),
              (this.m_DeviceRoleChangedCallbackHandle = null),
              (this.m_DeviceEventCallbackHandle = null),
              (this.batteryLevelStable = null),
              (this.state = { batteryIconPath: null, roleIconPath: null });
          }
          componentDidMount() {
            (this.m_BatteryStateChangedCallbackHandle =
              null === s.Co || void 0 === s.Co
                ? void 0
                : s.Co.RegisterForBatteryStateChangedEvents(
                    this.OnBatteryStateChanged,
                  )),
              (this.m_DeviceRoleChangedCallbackHandle =
                null === s.Co || void 0 === s.Co
                  ? void 0
                  : s.Co.RegisterForDeviceRoleChangedEvents(
                      this.OnDeviceRoleChanged,
                    )),
              (this.m_DeviceEventCallbackHandle =
                null === s.Co || void 0 === s.Co
                  ? void 0
                  : s.Co.RegisterForDeviceEvents(this.OnDeviceEvent)),
              this.UpdateControllerStatus();
          }
          componentWillUnmount() {
            this.m_BatteryStateChangedCallbackHandle &&
              (this.m_BatteryStateChangedCallbackHandle.unregister(),
              (this.m_BatteryStateChangedCallbackHandle = null)),
              this.m_DeviceRoleChangedCallbackHandle &&
                (this.m_DeviceRoleChangedCallbackHandle.unregister(),
                (this.m_DeviceRoleChangedCallbackHandle = null)),
              this.m_DeviceEventCallbackHandle &&
                (this.m_DeviceEventCallbackHandle.unregister(),
                (this.m_DeviceEventCallbackHandle = null));
          }
          UpdateControllerStatus() {
            var e;
            if (!s.Co) return;
            const t = s.Co.VRProperties.GetBoolProperty(
                this.props.trackedDeviceIndex,
                s.Uk.DeviceProvidesBatteryStatus_Bool,
              ),
              n = s.Co.VRSystem.GetControllerRoleForTrackedDeviceIndex(
                this.props.trackedDeviceIndex,
              );
            let o = !1;
            if (t) {
              const t =
                null !==
                  (e = s.Co.VRProperties.GetFloatProperty(
                    this.props.trackedDeviceIndex,
                    s.Uk.DeviceBatteryPercentage_Float,
                  )) && void 0 !== e
                  ? e
                  : 0;
              (o = s.Co.VRProperties.GetBoolProperty(
                this.props.trackedDeviceIndex,
                s.Uk.DeviceIsCharging_Bool,
              )),
                null == this.batteryLevelStable || 0 == this.batteryLevelStable
                  ? (this.batteryLevelStable = t)
                  : ((this.batteryLevelStable = Math.min(
                      this.batteryLevelStable,
                      t + l.kBatteryLevelHysteresis,
                      1,
                    )),
                    (this.batteryLevelStable = Math.max(
                      this.batteryLevelStable,
                      t - l.kBatteryLevelHysteresis,
                      0,
                    )));
            }
            let r = l.GetBatteryIcon(
                t,
                o,
                this.batteryLevelStable,
                i.HorizontalPips,
              ),
              a = this.GetRoleIcon(n);
            (r == this.state.batteryIconPath && a == this.state.roleIconPath) ||
              this.setState({ batteryIconPath: r, roleIconPath: a });
          }
          GetRoleIcon(e) {
            switch (e) {
              case s.Kg.TrackedControllerRole_RightHand:
                return "images/icons/controller_model_right.png";
              case s.Kg.TrackedControllerRole_LeftHand:
                return "images/icons/controller_model_left.png";
            }
            return null;
          }
          static GetBatteryIcon(e, t, n, o) {
            if (!e) return null;
            const r =
              o == i.VerticalBattery
                ? "images/icons/vert"
                : "images/icons/controller_model";
            return t
              ? n < 0.15
                ? r + "_charging_red.png"
                : r + "_charging.png"
              : 0 == n
                ? null
                : n < 0.15
                  ? r + "_low.png"
                  : n < 0.3
                    ? r + "_battery_1.png"
                    : n < 0.6
                      ? r + "_battery_2.png"
                      : n < 0.9
                        ? r + "_battery_3.png"
                        : r + "_battery_4.png";
          }
          OnBatteryStateChanged(e) {
            e == this.props.trackedDeviceIndex && this.UpdateControllerStatus();
          }
          OnDeviceRoleChanged() {
            this.UpdateControllerStatus();
          }
          OnDeviceEvent(e, t, n) {
            e == s.XX.Activated &&
              n == this.props.trackedDeviceIndex &&
              this.UpdateControllerStatus();
          }
          render() {
            return r.createElement(
              s.s_,
              {
                width: void 0,
                height: void 0,
                interactive: !1,
                rendermodel_component_device_index:
                  this.props.trackedDeviceIndex,
                rendermodel_component_name: "status",
                debug_name: "controllerstatus_" + this.props.trackedDeviceIndex,
              },
              r.createElement(
                "div",
                {
                  className: "ControllerStatusRoot",
                  style: { width: 256, height: 256 },
                },
                r.createElement(
                  "div",
                  { className: "ControllerStatusFrame" },
                  r.createElement(
                    "div",
                    {
                      className: "ControllerHandFrame",
                      style: {
                        width: 210,
                        marginLeft: 23,
                        height: 110,
                        marginTop: 18,
                      },
                    },
                    r.createElement("img", {
                      className: "ControllerHand",
                      src: this.state.roleIconPath,
                    }),
                  ),
                  r.createElement(
                    "div",
                    {
                      className: "ControllerBatteryFrame",
                      style: {
                        width: 210,
                        marginLeft: 23,
                        height: 110,
                        marginTop: 18,
                        opacity: 0.85,
                      },
                    },
                    r.createElement("img", {
                      className: "ControllerBattery",
                      src: this.state.batteryIconPath,
                    }),
                  ),
                ),
              ),
            );
          }
        }
        (l.kBatteryLevelHysteresis = 0.02),
          (0, o.gn)([a.ak], l.prototype, "OnBatteryStateChanged", null),
          (0, o.gn)([a.ak], l.prototype, "OnDeviceRoleChanged", null),
          (0, o.gn)([a.ak], l.prototype, "OnDeviceEvent", null);
      },
      4940: (e, t, n) => {
        "use strict";
        n.d(t, { g: () => ue, _: () => $ });
        var i,
          o = n(655),
          r = n(3884),
          a = n(7056),
          s = n(2188),
          l = n(7294),
          d = n(3081),
          c = n(5177),
          u = n(4979),
          h = n(3107),
          p = n(7176),
          m = n(3568),
          v = n(8495),
          g = n(7008),
          _ = n(9942),
          y = n(8583),
          b = n(1628),
          S = n(7062),
          f = n(7726),
          R = n(4790),
          k = n(6459),
          C = n(9347),
          w = n(2743),
          T = n(7095),
          M = n(8980);
        let D = (i = class extends l.Component {
          constructor(e) {
            super(e),
              (this.m_imageSources = []),
              (this.m_imageIndex = -1),
              this.updateImageSources(),
              (this.state = { image: null });
          }
          updateImageSources() {
            let e = [],
              t = this.props.imageUrl.replace(
                /header\.jpg$/,
                "library_600x900.jpg",
              );
            t !== this.props.imageUrl &&
              (e.push(t),
              e.push(
                this.props.imageUrl.replace(/header\.jpg$/, "portrait.png"),
              )),
              e.push(this.props.imageUrl),
              this.props.fallbackImageUrl &&
                e.push(this.props.fallbackImageUrl),
              (this.m_imageSources = e.filter(
                (e) => !i.s_failedImages.includes(e),
              )),
              (this.m_imageIndex = -1);
          }
          componentDidMount() {
            this.m_imageIndex < 0 &&
              ((this.m_loadingImage = new window.Image()),
              this.loadNextImage());
          }
          componentWillUnmount() {
            this.m_loadingImage &&
              ((this.m_loadingImage.onerror = null),
              (this.m_loadingImage.onload = null),
              (this.m_loadingImage = null));
          }
          componentDidUpdate(e) {
            this.props.imageUrl != e.imageUrl &&
              (this.setState({ image: null }),
              this.updateImageSources(),
              this.loadNextImage());
          }
          loadNextImage() {
            this.m_imageIndex >= 0 &&
              this.m_imageIndex < this.m_imageSources.length &&
              i.s_failedImages.push(this.m_imageSources[this.m_imageIndex]),
              this.m_imageIndex++,
              this.m_imageIndex < this.m_imageSources.length
                ? ((this.m_loadingImage.onerror = this.loadNextImage),
                  (this.m_loadingImage.onload = this.onLoad),
                  (this.m_loadingImage.src =
                    this.m_imageSources[this.m_imageIndex]))
                : this.onError();
          }
          onLoad() {
            this.setState({
              image: this.m_loadingImage.src,
              width: this.m_loadingImage.width,
              height: this.m_loadingImage.height,
              isFallback:
                this.props.fallbackImageUrl &&
                this.m_imageIndex == this.m_imageSources.length - 1,
            });
          }
          onError() {
            this.setState({ isFallback: !0 });
          }
          render() {
            let e = { backgroundImage: `url(${this.state.image})` },
              t = l.createElement("div", { className: "Icon", style: e });
            return (
              this.state.width / this.state.height != 600 / 900 &&
                (t = l.createElement(
                  l.Fragment,
                  null,
                  l.createElement("div", {
                    className: "IconBackgroundBlur",
                    style: e,
                  }),
                  t,
                )),
              l.createElement(
                "div",
                {
                  className: (0, M.LJ)("PortraitAppImageContainer", [
                    "Fallback",
                    this.state.isFallback,
                  ]),
                },
                this.state.image && t,
                l.createElement(
                  "div",
                  { className: "Title" },
                  this.props.title,
                ),
                this.props.children && this.props.children,
              )
            );
          }
        });
        (D.defaultProps = {
          fallbackImageUrl: "images/appimage_default_portrait.png",
        }),
          (D.s_failedImages = []),
          (0, o.gn)([a.ak], D.prototype, "loadNextImage", null),
          (0, o.gn)([a.ak], D.prototype, "onLoad", null),
          (0, o.gn)([a.ak], D.prototype, "onError", null),
          (D = i = (0, o.gn)([S.Pi], D));
        var I = n(8242);
        class E extends l.Component {
          constructor(e) {
            super(e), (this.state = {});
          }
          onExitApp() {
            var e, t;
            null === VRHTML || void 0 === VRHTML || VRHTML.QuitSceneApp(),
              null === (t = (e = this.props).onExitGame) ||
                void 0 === t ||
                t.call(e);
          }
          onReturnToGame() {
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRDashboardManager.HideDashboard("return_to_game");
          }
          onOpenAppControllerBindingSettings() {
            const e = _.H.Instance.SceneAppKey;
            T.f.OpenDeepLink(T.P.Name, e);
          }
          onOpenAppVideoSettings() {
            const e = _.H.Instance.SceneAppKey;
            w.Ux.OpenDeepLink(w.Yw.Name, e);
          }
          render() {
            var e;
            const t = _.H.Instance.SceneAppKey,
              n = _.H.Instance.SceneAppName,
              i = _.H.Instance.SceneApplicationState,
              o = _.H.Instance.SceneAppIsHome,
              a = b.G3.settings.get("/settings/dashboard/allowAppQuitting"),
              s = !(
                null !==
                  (e = b.G3.settings.get("/settings/dashboard/arcadeMode")) &&
                void 0 !== e &&
                e
              ),
              d = b.G3.apps && b.G3.apps.find((e) => e.key == t);
            let u = !1;
            switch (i) {
              case r.xY.Quitting:
              case r.xY.Starting:
              case r.xY.Waiting:
                u = !0;
            }
            const h = ((e) => {
                if (null == e) return "";
                let t = e.image_path;
                return (
                  t.startsWith("/app/image?") && (t += "&aspect=portrait"), t
                );
              })(d),
              v = h.includes("header.jpg"),
              g = h.replace(/header\.jpg$/, "library_hero.jpg");
            return l.createElement(
              k.lL,
              {
                visible: this.props.visible,
                debugName: "nowplaying",
                additionalClassNames: "NowPlaying",
                summonOverlayKey: p.PF,
                scrollable: !1,
              },
              v &&
                l.createElement("div", {
                  className: "HeroBackground",
                  style: { backgroundImage: `url('${g}')` },
                }),
              l.createElement(
                "div",
                { className: "ArtworkColumn" },
                l.createElement(D, { appkey: t, title: n, imageUrl: h }),
              ),
              l.createElement(
                "div",
                { className: "InfoColumn" },
                l.createElement("div", { className: "NowPlayingAppTitle" }, n),
                l.createElement(
                  c.z,
                  {
                    className: "ButtonControl Colorful",
                    onClick: this.onReturnToGame,
                  },
                  o
                    ? (0, m.Xx)("#Return_To_Home")
                    : (0, m.Xx)("#Return_To_Game"),
                ),
                s &&
                  l.createElement(
                    I.ls,
                    {
                      icon: I.uc.PopOut,
                      onClick: this.onOpenAppControllerBindingSettings,
                    },
                    (0, m.Xx)("#Controller_Bindings"),
                  ),
                s &&
                  l.createElement(
                    I.ls,
                    { icon: I.uc.PopOut, onClick: this.onOpenAppVideoSettings },
                    (0, m.Xx)("#App_Video_Settings"),
                  ),
                !o &&
                  a &&
                  l.createElement(
                    c.z,
                    { className: "ButtonControl", onClick: this.onExitApp },
                    (0, m.Xx)("#Exit_Game"),
                  ),
              ),
            );
          }
        }
        (0, o.gn)([a.ak], E.prototype, "onExitApp", null),
          (0, o.gn)([a.ak], E.prototype, "onReturnToGame", null),
          (0, o.gn)(
            [a.ak],
            E.prototype,
            "onOpenAppControllerBindingSettings",
            null,
          ),
          (0, o.gn)([a.ak], E.prototype, "onOpenAppVideoSettings", null);
        var V,
          x = n(7475);
        !(function (e) {
          (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
        })(V || (V = {}));
        const P = (e) =>
          l.createElement(
            "div",
            {
              className: (0, M.LJ)("ButtonContainer", V[e.side], [
                "Disabled",
                !1 === e.enabled,
              ]),
            },
            l.createElement(
              c.z,
              { className: "ButtonControl", onClick: e.onClick },
              e.side == V.Left
                ? l.createElement(l.Fragment, null, "‹")
                : l.createElement(l.Fragment, null, "›"),
            ),
          );
        class L extends l.Component {
          constructor(e) {
            super(e),
              (this.m_refScrollPanel = l.createRef()),
              (this.m_nLastScrollWidth = 0),
              (this.m_nLastScrollLeft = 0),
              (this.m_bScrolling = !1),
              (this.m_nCurrentScrollTarget = null),
              (this.m_animationFrameRequestHandle = 0),
              (this.state = { bScrolledToStart: null, bScrolledToEnd: null });
          }
          componentDidMount() {
            this.updateButtonVisibilities(), this.requestAnimationFrame();
          }
          componentWillUnmount() {
            window.cancelAnimationFrame(this.m_animationFrameRequestHandle);
          }
          requestAnimationFrame() {
            this.m_animationFrameRequestHandle = window.requestAnimationFrame(
              this.onAnimationFrame,
            );
          }
          onAnimationFrame() {
            if (this.m_refScrollPanel.current) {
              const e = this.m_refScrollPanel.current.scrollWidth;
              e != this.m_nLastScrollWidth &&
                (this.updateButtonVisibilities(),
                (this.m_nLastScrollWidth = e));
              const t = this.m_refScrollPanel.current.scrollLeft;
              (this.m_bScrolling = t != this.m_nLastScrollLeft),
                this.m_bScrolling && (this.m_nLastScrollLeft = t);
            }
            this.requestAnimationFrame();
          }
          onScroll(e) {
            this.updateButtonVisibilities();
          }
          updateButtonVisibilities() {
            const e = this.m_refScrollPanel.current;
            e &&
              this.setState({
                bScrolledToStart: 0 == e.scrollLeft,
                bScrolledToEnd: e.scrollLeft + e.clientWidth == e.scrollWidth,
              });
          }
          onLeftButtonClick() {
            this.scroll(-1);
          }
          onRightButtonClick() {
            this.scroll(1);
          }
          scroll(e) {
            var t;
            const n = this.m_refScrollPanel.current;
            if (!n) return;
            if (n.isThrown)
              return void n.cancelThrowing(() => {
                (this.m_bScrolling = !1), this.scroll(e);
              });
            const i = n.children;
            if (!i || 0 == i.length) return;
            const o =
                null !== (t = this.props.paginationAlignmentOffset) &&
                void 0 !== t
                  ? t
                  : 0,
              r = i[0],
              a = this.m_bScrolling
                ? this.m_nCurrentScrollTarget
                : n.scrollLeft,
              s = r.getBoundingClientRect().left + n.scrollLeft,
              l = r.clientWidth,
              d = n.clientWidth,
              c = Math.floor(d / l) - 1,
              u = Math.round((a - s + o + 1) / l) + c * e - 0.4999,
              h = u > 0 ? u * l + s - o : 0;
            this.scrollToPosition(h);
          }
          scrollToPosition(e) {
            const t = this.m_refScrollPanel.current;
            t &&
              (t.scrollTo({ left: e, behavior: "smooth" }),
              (this.m_bScrolling = !0),
              (this.m_nCurrentScrollTarget = e));
          }
          render() {
            return l.createElement(
              "div",
              {
                className: (0, M.LJ)(
                  "PaginatedCarousel",
                  this.props.additionalClassNames,
                ),
              },
              l.createElement(
                x.P,
                {
                  ref: this.m_refScrollPanel,
                  scrollDirection: x.I.Horizontal,
                  onScroll: this.onScroll,
                },
                this.props.children,
              ),
              (!1 === this.state.bScrolledToStart ||
                !1 === this.state.bScrolledToEnd) &&
                l.createElement(
                  "div",
                  { className: "PaginationButtons" },
                  null !== this.state.bScrolledToStart &&
                    l.createElement(P, {
                      side: V.Left,
                      enabled: !this.state.bScrolledToStart,
                      onClick: this.onLeftButtonClick,
                    }),
                  null !== this.state.bScrolledToEnd &&
                    l.createElement(P, {
                      side: V.Right,
                      enabled: !this.state.bScrolledToEnd,
                      onClick: this.onRightButtonClick,
                    }),
                ),
            );
          }
        }
        (0, o.gn)([a.ZP], L.prototype, "onAnimationFrame", null),
          (0, o.gn)([a.ZP], L.prototype, "onScroll", null),
          (0, o.gn)([a.ZP], L.prototype, "onLeftButtonClick", null),
          (0, o.gn)([a.ZP], L.prototype, "onRightButtonClick", null);
        let O = class extends l.Component {
          constructor(e) {
            super(e),
              (this.m_scrollWatcher = new M.cB()),
              (this.m_refAnchoredParentPortal = l.createRef()),
              (this.m_refButton = l.createRef()),
              (this.state = { bShowPlay: !1 }),
              (this.m_scrollWatcher.onScrollStop = this.onParentScrollStop);
          }
          componentDidUpdate() {
            this.m_scrollWatcher.updateScrollableParents();
          }
          componentWillUnmount() {
            this.m_scrollWatcher.cleanup();
          }
          buttonMouseEnter() {
            var e, t;
            this.setState({ bShowPlay: !0 }),
              null ===
                (t =
                  null === (e = this.m_refAnchoredParentPortal.current) ||
                  void 0 === e
                    ? void 0
                    : e.panelAnchor) ||
                void 0 === t ||
                t.relatch();
          }
          buttonMouseLeave() {
            this.setState({ bShowPlay: !1 });
          }
          onParentScrollStop() {
            var e, t;
            null ===
              (t =
                null === (e = this.m_refAnchoredParentPortal.current) ||
                void 0 === e
                  ? void 0
                  : e.panelAnchor) ||
              void 0 === t ||
              t.relatch();
          }
          get shouldShowHoverContents() {
            return !this.m_scrollWatcher.isScrolling && this.state.bShowPlay;
          }
          render() {
            let e = Object.assign({}, this.props);
            return (
              delete e.onClick,
              l.createElement(
                "div",
                {
                  className: (0, M.LJ)(
                    "AppButtonContainer",
                    [
                      "AppOwned",
                      b.G3.probablyOwnedAppkeys.has(this.props.appkey),
                    ],
                    ["ShowingPopovers", this.shouldShowHoverContents],
                  ),
                },
                l.createElement(
                  c.z,
                  {
                    className: "AppButton",
                    ref: this.m_refButton,
                    onMouseEnter: this.buttonMouseEnter,
                    onMouseLeave: this.buttonMouseLeave,
                    onClick: this.props.onClick,
                  },
                  l.createElement(D, Object.assign({}, e), this.props.children),
                ),
              )
            );
          }
        };
        (0, o.gn)([a.ZP], O.prototype, "buttonMouseEnter", null),
          (0, o.gn)([a.ZP], O.prototype, "buttonMouseLeave", null),
          (0, o.gn)([a.ZP], O.prototype, "onParentScrollStop", null),
          (O = (0, o.gn)([S.Pi], O));
        const H = () =>
            l.createElement("div", { className: "AppButton Placeholder" }),
          B = (e) => {
            var t;
            const n = !!e.loading,
              i = null !== (t = e.apps) && void 0 !== t ? t : [];
            let o = "AppCarousel";
            return (
              e.className && (o += " " + e.className),
              (o += " NoAnimations"),
              l.createElement(
                L,
                { additionalClassNames: o, paginationAlignmentOffset: -20 },
                n &&
                  l.createElement(
                    l.Fragment,
                    null,
                    l.createElement(H, null),
                    l.createElement(H, null),
                    l.createElement(H, null),
                    l.createElement(H, null),
                  ),
                !n &&
                  i.map((e) =>
                    l.createElement(O, Object.assign({ key: e.appkey }, e)),
                  ),
              )
            );
          };
        var A = n(9669),
          F = n.n(A);
        function N() {
          return F()
            .get(
              "https://steamcommunity.com/steamvr/ajaxgethomedata/?include_apps=1&include_free_apps=1&num_apps=20",
            )
            .then((e) => e.data);
        }
        const U = () =>
          l.createElement(
            c.z,
            {
              className: "ButtonControl WithIcon PanelTopRight",
              onClick: () =>
                y.y.Instance.openBigPictureStore(null, y.b.QuickStore),
            },
            l.createElement("span", null, (0, m.Xx)("#BrowseAll")),
            l.createElement("img", {
              className: "Icon BlackToWhite",
              src: "/dashboard/images/icons/svr_store.svg",
            }),
          );
        var G;
        !(function (e) {
          (e[(e.Free = 0)] = "Free"),
            (e[(e.Singleplayer = 1)] = "Singleplayer"),
            (e[(e.Multiplayer = 2)] = "Multiplayer");
        })(G || (G = {}));
        let W = class extends l.Component {
          constructor(e) {
            super(e), (this.state = { storeData: null });
          }
          componentDidMount() {
            N().then((e) => this.setState({ storeData: e }));
          }
          openSteamApp(e, t, n) {
            v.e.instance.RecordUIEvent(
              "QuickStoreAppClick",
              G[t].toLowerCase() + ":" + n,
              `steam.app.${e}`,
            ),
              y.y.Instance.openBigPictureStore(e, y.b.QuickStore);
          }
          makeAppButtonList() {
            let e = [];
            switch (this.props.section) {
              case G.Free:
                e = this.state.storeData.apps_free;
                break;
              case G.Singleplayer:
                e = this.state.storeData.apps_singleplayer;
                break;
              case G.Multiplayer:
                e = this.state.storeData.apps_multiplayer;
            }
            return e.map((e, t) => {
              const n = `steam.app.${e.appid}`;
              return {
                key: n,
                appkey: n,
                title: e.name,
                imageUrl: e.logo,
                onClick: () =>
                  this.openSteamApp(e.appid, this.props.section, t),
              };
            });
          }
          render() {
            return this.state.storeData
              ? l.createElement(B, { apps: this.makeAppButtonList() })
              : l.createElement(B, { loading: !0 });
          }
        };
        W = (0, o.gn)([S.Pi], W);
        class z extends l.Component {
          constructor(e) {
            super(e), (this.state = {});
          }
          render() {
            return l.createElement(
              k.lL,
              {
                visible: this.props.visible,
                additionalClassNames: "QuickStore",
                summonOverlayKey: p.wB,
              },
              l.createElement(U, null),
              l.createElement(
                "h2",
                null,
                (0, m.Xx)("#StoreSection_TopSingleplayer"),
              ),
              l.createElement(W, { section: G.Singleplayer }),
              l.createElement(
                "h2",
                null,
                (0, m.Xx)("#StoreSection_TopMultiplayer"),
              ),
              l.createElement(W, { section: G.Multiplayer }),
              l.createElement("h2", null, (0, m.Xx)("#StoreSection_TopFree")),
              l.createElement(W, { section: G.Free }),
            );
          }
        }
        var K;
        const q = () =>
            l.createElement(
              c.z,
              {
                className: "ButtonControl WithIcon PanelTopRight",
                onClick: () =>
                  y.y.Instance.openBigPictureLibrary(null, y.b.QuickLaunch),
              },
              l.createElement("span", null, (0, m.Xx)("#BrowseAll")),
              l.createElement("img", {
                className: "Icon BlackToWhite",
                src: "/dashboard/images/icons/svr_items.svg",
              }),
            ),
          X = () =>
            l.createElement(
              c.z,
              {
                className: "ButtonControl Colorful WelcomeBrowseStore",
                onClick: () =>
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VROverlay.ShowDashboard(p.wB),
              },
              l.createElement("span", null, (0, m.Xx)("#WelcomeBrowseStore")),
            ),
          j = () =>
            l.createElement(
              c.z,
              {
                className: "ButtonControl Colorful WelcomeInstall",
                onClick: () =>
                  y.y.Instance.openBigPictureLibrary(null, y.b.QuickLaunch),
              },
              l.createElement("span", null, (0, m.Xx)("#WelcomeInstall")),
            );
        class Q extends l.Component {
          constructor(e) {
            super(e), (this.state = { storeData: null });
          }
          componentDidMount() {
            N().then((e) => this.setState({ storeData: e }));
          }
          render() {
            let e = [];
            if (this.state.storeData) {
              let t = this.state.storeData.apps_singleplayer.flatMap((e, t) => [
                  this.state.storeData.apps_singleplayer[t],
                  this.state.storeData.apps_multiplayer[t],
                  this.state.storeData.apps_free[t],
                ]),
                n = new Set();
              for (; e.length < 12 && t.length; ) {
                for (; n.has(t[0].appid); ) t.shift();
                let i = t.shift();
                n.add(i.appid),
                  e.push(
                    l.createElement(
                      c.z,
                      {
                        key: `appid_${i.appid}`,
                        className: `WelcomeFloatingApp WelcomeFloatingApp${e.length}`,
                        onClick: () =>
                          y.y.Instance.openBigPictureStore(
                            i.appid,
                            y.b.QuickLaunch,
                          ),
                      },
                      l.createElement("img", { src: i.logo }),
                    ),
                  );
              }
            }
            return l.createElement(
              "div",
              { className: "QuickLaunchWelcome" },
              e,
              l.createElement(
                "div",
                { className: "QuickLaunchWelcomePrompt" },
                l.createElement(
                  "div",
                  { className: "QuickLaunchWelcomeHeader" },
                  (0, m.Xx)("#WelcomeHeader"),
                ),
                l.createElement(
                  "div",
                  { className: "QuickLaunchWelcomeMessage" },
                  (0, m.Xx)("#WelcomeMessage"),
                ),
                l.createElement(X, null),
                l.createElement(j, null),
              ),
            );
          }
        }
        let Z = (K = class extends l.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new r.Nv()),
              (this.state = {}),
              this.m_mailbox.Init("systemui_quicklaunch");
          }
          launchApplication(e, t, n) {
            var i, o;
            v.e.instance.RecordUIEvent(
              "QuickLaunchAppClick",
              (t ? "top" : "bottom") + ":" + n,
              e.key,
            ),
              null === (o = (i = this.props).onGameLaunched) ||
                void 0 === o ||
                o.call(i, e),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRApplications.LaunchApplication(e.key);
          }
          makeAppButtonList() {
            let e = [];
            if (null != b.G3.apps)
              for (let t of b.G3.apps)
                t.is_internal ||
                  (t.is_dashboard_overlay && !t.show_overlay_in_quicklaunch) ||
                  t.is_hidden ||
                  t.is_instance ||
                  K.s_setBlacklistedAppkeys.has(t.key) ||
                  e.push(t);
            e.sort((e, t) => {
              let n = t.library_priority - e.library_priority;
              return 0 == n && (n = t.last_launch - e.last_launch), n;
            });
            const t = (e) => {
              let t = e.image_path;
              return (
                t.startsWith("/app/image?") && (t += "&aspect=portrait"), t
              );
            };
            return e.map((e, n) => {
              let i = n;
              const o = n < K.TOP_ROW_LENGTH;
              return (
                o || (i -= K.TOP_ROW_LENGTH),
                {
                  key: e.key,
                  appkey: e.key,
                  title: e.name,
                  imageUrl: t(e),
                  onClick: () => this.launchApplication(e, o, i),
                  children: l.createElement(
                    l.Fragment,
                    null,
                    l.createElement("div", { className: "PlayIconFade" }),
                    l.createElement("img", {
                      className: "PlayIcon",
                      src: "/dashboard/images/icons/svr_play.svg",
                    }),
                  ),
                }
              );
            });
          }
          onRoomSetup() {
            VRHTML.VRDashboardManager.HideDashboard("RoomSetup"),
              this.m_mailbox.SendMessage("driver_hmd", { type: "room_setup" });
          }
          render() {
            var e;
            let t,
              n = this.makeAppButtonList();
            const i =
                0 == n.length ||
                b.G3.settings.get("/settings/dashboard/forceWelcomeScreen"),
              o =
                0 == n.length ||
                b.G3.settings.get("/settings/dashboard/hideBigPictureLibrary"),
              r =
                0 == n.length ||
                (null !==
                  (e = b.G3.settings.get(
                    "/settings/dashboard/showRoomSetup",
                  )) &&
                  void 0 !== e &&
                  e);
            if (i) t = l.createElement(Q, null);
            else {
              let e = n.slice(0, K.TOP_ROW_LENGTH),
                i = n.slice(K.TOP_ROW_LENGTH);
              t = l.createElement(
                l.Fragment,
                null,
                !o && l.createElement(q, null),
                r &&
                  l.createElement(
                    c.z,
                    {
                      className: "ButtonControl WithIcon PanelTopRight",
                      onClick: this.onRoomSetup,
                    },
                    l.createElement("span", null, (0, m.Xx)("#RoomSetup")),
                    l.createElement("img", {
                      className: "Icon BlackToWhite",
                      src: "/dashboard/images/icons/svr_recenter.svg",
                    }),
                  ),
                l.createElement("h2", null, (0, m.Xx)("#RecentlyPlayed")),
                l.createElement(B, { className: "TopRow", apps: e }),
                l.createElement(B, { className: "BottomRow", apps: i }),
              );
            }
            return l.createElement(
              k.lL,
              {
                visible: this.props.visible,
                scrollable: !i,
                debugName: "homepanel",
                additionalClassNames: "QuickLaunch",
                summonOverlayKey: p.O5,
              },
              t,
            );
          }
        });
        (Z.TOP_ROW_LENGTH = 4),
          (Z.s_setBlacklistedAppkeys = new Set([
            "openvr.tool.steamvr_room_setup",
            "openvr.tool.steamvr_media_player",
            "openvr.tool.steamvr_desktop_gametheatre",
            "openvr.tool.steamvr_tutorial",
            "openvr.tool.steamvr_environments",
            "openvr.tool.steamvr_environments_tools",
            p.W4,
            p.jW,
          ])),
          (0, o.gn)([a.ak], Z.prototype, "onRoomSetup", null),
          (Z = K = (0, o.gn)([S.Pi], Z));
        var Y,
          J,
          $,
          ee,
          te = n(16),
          ne = n(421),
          ie = n(6063),
          oe = n(3619),
          re = n(4138),
          ae = (n(9462), n(9626)),
          se = (n(792), n(6346)),
          le = n(6821),
          de = n(2477);
        !(function (e) {
          (e[(e.ToggleRoomView = 0)] = "ToggleRoomView"),
            (e[(e.Recenter = 1)] = "Recenter"),
            (e[(e.IncognitoMode = 2)] = "IncognitoMode");
        })(Y || (Y = {})),
          (function (e) {
            (e[(e.Near = 0)] = "Near"),
              (e[(e.Middle = 1)] = "Middle"),
              (e[(e.Far = 2)] = "Far"),
              (e[(e.Standard = 3)] = "Standard");
          })($ || ($ = {}));
        class ce extends l.Component {
          componentDidMount() {
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRChaperone.ForceBoundsVisible(!0);
          }
          componentWillUnmount() {
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRChaperone.ForceBoundsVisible(!1);
          }
          render() {
            return null;
          }
        }
        !(function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Power = 1)] = "Power"),
            (e[(e.ExternalOverlays = 2)] = "ExternalOverlays"),
            (e[(e.Volume = 3)] = "Volume"),
            (e[(e.Windows = 4)] = "Windows");
        })(ee || (ee = {}));
        let ue = (J = class extends l.Component {
          constructor(e) {
            super(e),
              (this.m_mapExternalOverlays = {}),
              (this.m_setSuppressingFade = new Set()),
              (this.m_mailbox = new r.Nv()),
              (this.m_timeoutPopoverMenuHide = 0),
              (this.m_refPopoverMenu = l.createRef()),
              (this.m_appStateChangedAutorunDisposer = null),
              (this.m_refDesktopView = l.createRef()),
              (this.m_refDesktopTray = l.createRef()),
              (this.m_refOverlayTransform = l.createRef()),
              (this.m_refVolumeTray = l.createRef()),
              (this.m_activeOverlayThatVanished = void 0),
              (this.m_bUserManuallySwitchToOldLibrary = !1),
              (this.m_bWaitingOnInitialOverlayToAutoShow = !1),
              (this.m_bQuickLaunchShouldReturnToBigPicture = !1),
              (this.m_bQuickStoreShouldReturnToBigPicture = !1),
              (this.m_roomViewChangedEventHandle = null),
              (this.m_linkStreamActiveEventHandle = null),
              (this.m_dashboardThumbnailsChangedEventHandle = null),
              (this.m_keyboardVisibilityChangedEventHandle = null),
              (this.m_miscEventHandles = []),
              (this.state = {
                bShown: !1,
                sActiveOverlayID: null,
                bMuted: !1,
                bGrabbed: !1,
                sLastShownAppKey: "",
                bStreamVideo: !1,
                eShowPopoverMenu: ee.None,
                setForcingBoundsVisible: {},
                mapWindows: new Map(),
                desktopViewDebugInfo: {
                  inputFrameTime: 0,
                  mapOverlayFrameTimes: new Map(),
                },
                bWindowViewEnabled: !1,
                bPlacementModeActive: !1,
                bLinkStreamActive: !1,
                bKeyboardVisible: !1,
                mapPortals: new Map(),
              }),
              (window.setDashboardScale = (e) => (J.s_dashboardUserScale = e)),
              (window.setDashboardDistance = (e) =>
                (J.s_dashboardUserDistance = e)),
              b.G3.Init(!1),
              r.hz.getInstance(),
              this.m_mailbox.Init(J.k_sDashboardMailboxName).then(() => {
                this.m_mailbox.RegisterHandler(
                  J.k_sSetDashboardFadeSupressionMessage,
                  this.onSetDashboardFadeSuppression,
                ),
                  this.m_mailbox.RegisterHandler(
                    J.k_sDashboardOverlayCreatedMessage,
                    this.onDashboardOverlayCreated,
                  ),
                  this.m_mailbox.RegisterHandler(
                    J.k_sDashboardOverlayDestroyedMessage,
                    this.onDashboardOverlayDestroyed,
                  ),
                  this.m_mailbox.RegisterHandler(
                    J.k_sUpdateDashboardTabsMessage,
                    this.onUpdateDashboardTabs,
                  ),
                  this.m_mailbox.RegisterHandler(
                    J.k_sWindowViewCreatedMessage,
                    this.onWindowViewCreated,
                  ),
                  this.m_mailbox.RegisterHandler(
                    J.k_sWindowViewDestroyedMessage,
                    this.onWindowViewDestroyed,
                  ),
                  this.m_mailbox.RegisterHandler(
                    J.k_sUpdateWindowListMessage,
                    this.onUpdateWindowList,
                  ),
                  this.m_mailbox.RegisterHandler(
                    J.k_sUpdateDebugInfoMessage,
                    this.onUpdateDebugInfo,
                  ),
                  this.m_mailbox.RegisterHandler(
                    J.k_sSetDashboardForceBoundsVisible,
                    this.onSetDashboardForceBoundsVisible,
                  ),
                  this.m_mailbox.RegisterHandler(
                    "show_dashboard_requested",
                    this.onShowDashboardRequested,
                  ),
                  this.m_mailbox.RegisterHandler(
                    "hide_dashboard_requested",
                    this.onHideDashboardRequested,
                  ),
                  this.m_mailbox.RegisterHandler(
                    "hide_theater_mode",
                    this.onHideTheaterMode,
                  );
              }),
              de.Q.SteamVR.SetImplementation(
                "DashboardTabClicked",
                ({ tab_id: e }) => {
                  const t = ae.B.GetSummonKeyForTabId(e);
                  if (
                    !this.switchToOverlayInternal(
                      t,
                      "User clicked VRGamepadUI tab",
                    )
                  )
                    throw new Error("Failed to switch to overlay: " + t);
                },
              ),
              de.Q.SteamVR.SetImplementation(
                "DashboardActionInvoked",
                ({ action_id: e, toggle_value: t }) => {
                  switch (e) {
                    case Y.ToggleRoomView:
                      this.onToggleRoomView(t);
                      break;
                    case Y.Recenter:
                      this.onRecenterClick();
                      break;
                    case Y.IncognitoMode:
                      this.ToggleIncognitoMode(t);
                  }
                },
              );
          }
          componentDidMount() {
            (window.Dashboard = this),
              (this.m_roomViewChangedEventHandle =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRCompositor.RegisterForRoomViewChangedEvents(
                      this.onRoomViewChanged,
                    )),
              (this.m_linkStreamActiveEventHandle =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.RegisterForLinkStreamActiveEvents(
                      this.onLinkStreamActiveEvents,
                    )),
              (this.m_dashboardThumbnailsChangedEventHandle =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.RegisterForOverlayThumbnailsChanged(() =>
                      this.forceUpdate(),
                    )),
              (this.m_keyboardVisibilityChangedEventHandle =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.RegisterForKeyboardVisibilityChangedEvents(
                      this.onKeyboardVisibilityChanged,
                    ));
            const e =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.GetVRStartupReason(),
              t =
                e == r.a0.AppLaunch_Unknown ||
                e == r.a0.AppLaunch_Steam ||
                e == r.a0.Unknown,
              n = b.G3.settings.get(
                "/settings/dashboard/allowDashboardAutoLaunchWithSteamVRHome",
              ),
              i = b.G3.settings.get("/settings/steamvr/enableHomeApp"),
              o = b.G3.settings.get(p.y3);
            ((t || (!n && i)) && !o) ||
              ((this.m_bWaitingOnInitialOverlayToAutoShow = !0),
              setTimeout(
                () =>
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VROverlay.ShowDashboard(null != o ? o : ""),
                500,
              )),
              (this.m_appStateChangedAutorunDisposer = (0, s.EH)(() => {
                const e = _.H.Instance.SceneApplicationState != r.xY.None;
                this.isOverlayActive(p.PF) && !e && this.switchToHomeOverlay();
              })),
              VRHTML.VRDashboardManager.GetDashboardOverlayKeys().forEach(
                (e) => {
                  this.initializeOverlayState(e);
                },
              ),
              this.updateSiblingReferences();
          }
          componentDidUpdate(e, t) {
            let n = !1;
            if (
              (t.bShown !== this.state.bShown &&
                (h.G.Instance.playSound(
                  this.state.bShown ? h.y.DashboardOpen : h.y.DashboardClose,
                ),
                !0),
              t.sActiveOverlayID != this.state.sActiveOverlayID &&
                this.isOverlayActive(p.Y8))
            )
              switch (y.y.Instance.lastBigPictureEntryPoint) {
                case y.b.QuickLaunch:
                  this.m_bQuickLaunchShouldReturnToBigPicture = !0;
                  break;
                case y.b.QuickStore:
                  this.m_bQuickStoreShouldReturnToBigPicture = !0;
              }
            this.updateSiblingReferences(),
              this.updateVRGamepadUIPathProperties();
          }
          updateVRGamepadUIPathProperties() {
            var e, t, n, i;
            const o = Array.from(
                null !==
                  (t =
                    null === (e = this.state.mapWindows) || void 0 === e
                      ? void 0
                      : e.values()) && void 0 !== t
                  ? t
                  : [],
              ).sort(me),
              r = this.getActiveOverlaySummonKey(),
              a = new se.cH();
            for (const e in this.m_mapExternalOverlays) {
              const t = this.m_mapExternalOverlays[e],
                n = ae.B.GetTabIdForSummonKey(t.summon_overlay_key);
              if (t.summon_overlay_key == p.gB) continue;
              const i = new se.D3();
              i.set_tab_id(n),
                i.set_visible(this.shouldShowOverlayTab(t, !0)),
                t.summon_overlay_key == p.T2
                  ? i.set_display_name((0, m.Xx)("#Steam"))
                  : i.set_display_name(t.tab_name);
              const o = new se.I_();
              switch (t.summon_overlay_key) {
                case p.T2:
                  o.set_enum(se.mw.k_EVRDashboardTabIcon_Steam);
                  break;
                case p.Xl:
                  o.set_enum(se.mw.k_EVRDashboardTabIcon_DesktopDisplay);
                  break;
                case p.A4:
                  o.set_enum(se.mw.k_EVRDashboardTabIcon_Cog);
                  break;
                case p.PF:
                  if (
                    (o.set_enum(se.mw.k_EVRDashboardTabIcon_RunningGame),
                    _.H.Instance.SceneAppKey.startsWith(p.I8))
                  ) {
                    const e = Number.parseInt(
                      _.H.Instance.SceneAppKey.substring(p.I8.length),
                    );
                    Number.isInteger(e) && o.set_appid(e);
                  }
                  break;
                default:
                  o.set_overlay(t.summon_overlay_key),
                    o.set_enum(se.mw.k_EVRDashboardTabIcon_Unknown);
              }
              i.set_icon(o),
                a.add_tabs(i),
                r == t.summon_overlay_key && a.set_selected_tab_id(n),
                p.A4 == t.summon_overlay_key && a.set_vr_settings_tab_id(n);
            }
            if (this.m_refDesktopView.current) {
              const e = this.m_refDesktopView.current.desktopCount;
              null === (n = this.m_refDesktopView.current) ||
                void 0 === n ||
                n.state.desktopIndices.forEach((t) => {
                  var n;
                  const i = `${p.r4}.${t}`,
                    o = ae.B.GetTabIdForSummonKey(i),
                    s = new se.D3();
                  s.set_tab_id(o),
                    s.set_display_name(
                      e > 1
                        ? (0, m.Xx)("#Desktop_X", t)
                        : (0, m.Xx)("#Desktop"),
                    ),
                    s.set_visible(!0);
                  const l = new se.I_();
                  l.set_enum(se.mw.k_EVRDashboardTabIcon_DesktopDisplay),
                    s.set_icon(l),
                    a.add_tabs(s),
                    (null == r ? void 0 : r.startsWith(p.gB)) &&
                      (null === (n = this.m_refDesktopView.current) ||
                      void 0 === n
                        ? void 0
                        : n.currentDesktopIndex) == t &&
                      a.set_selected_tab_id(o);
                });
            }
            for (const e of o) {
              if (!e.overlay_key) continue;
              const t = ae.B.GetTabIdForSummonKey(e.overlay_key),
                n = new se.D3();
              n.set_tab_id(t), n.set_display_name(e.title), n.set_visible(!0);
              const o = new se.I_();
              o.set_enum(se.mw.k_EVRDashboardTabIcon_DesktopWindow),
                o.set_hwnd(Number.parseInt(e.hwnd)),
                n.set_icon(o),
                a.add_tabs(n),
                (null == r ? void 0 : r.startsWith(p.gB)) &&
                  (null === (i = this.m_refDesktopView.current) || void 0 === i
                    ? void 0
                    : i.sCurrentOverlayKey) == e.overlay_key &&
                  a.set_selected_tab_id(t);
            }
            a.tabs().sort(pe), (0, le.W)(a);
            const s = new se.yt();
            s.add_actions(
              se.z3.fromObject({
                action_id: Y.ToggleRoomView,
                display_name: (0, m.Xx)("#Toggle_Room_View"),
                visible_in_dashboard_bar: this.BShouldShowDashboardAction(
                  Y.ToggleRoomView,
                ),
                invocation: se.w7.k_EVRDashboardActionInvocation_Toggle,
                active:
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VRControlPanel.GetCameraRoomViewVisible(),
                enabled:
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VROverlayInternal.HasCameraRoomViewCapability(),
                icon: { enum: se.Cj.k_EVRDashboardActionIcon_RoomViewOff },
                icon_active: {
                  enum: se.Cj.k_EVRDashboardActionIcon_RoomViewOn,
                },
              }),
            ),
              s.add_actions(
                se.z3.fromObject({
                  action_id: Y.Recenter,
                  display_name: (0, m.Xx)("#Button_Recenter"),
                  visible_in_dashboard_bar: this.BShouldShowDashboardAction(
                    Y.Recenter,
                  ),
                  invocation: se.w7.k_EVRDashboardActionInvocation_Trigger,
                  icon: { enum: se.Cj.k_EVRDashboardActionIcon_Recenter },
                }),
              ),
              (0, le.W)(s);
            const l = new se.Jl();
            l.set_windows(
              o.map((e) => {
                const t = new se.fY();
                return (
                  t.set_hwnd(Number.parseInt(e.hwnd)),
                  t.set_window_id(Number.parseInt(e.hwnd)),
                  t.set_title(e.title),
                  e.overlay_key &&
                    t.set_tab_id(ae.B.GetTabIdForSummonKey(e.overlay_key)),
                  t
                );
              }),
            ),
              (0, le.W)(l);
          }
          initializeOverlayState(e) {
            b.G3.GetAppInfo(e).then((t) => {
              var n;
              let i = 1;
              if (e.startsWith("system.desktop.")) {
                let t = "/settings/dashboard/desktopScale" + e.split(".")[2];
                i = null !== (n = b.G3.settings.get(t)) && void 0 !== n ? n : 1;
              }
              ae.B.m_mapOverlayState.set(e, {
                dockLocation: R.RA.Dashboard,
                refOverlayWidget: l.createRef(),
                xfInitial: null,
                fScale: i,
              });
              const o = "steamlink_openvr-overlay" == e || e.startsWith(p.wX);
              ((null == t ? void 0 : t.starts_theater_mode) || o) &&
                this.onDockOverlay(e, R.RA.Theater);
            });
          }
          updateSiblingReferences() {
            var e;
            null === (e = this.m_refDesktopTray.current) ||
              void 0 === e ||
              e.setSiblingReferences(this.m_refDesktopView.current);
          }
          componentWillUnmount() {
            var e, t, n;
            clearTimeout(this.m_timeoutHoverStateEnd),
              clearTimeout(this.m_timeoutPopoverMenuHide),
              this.m_appStateChangedAutorunDisposer &&
                (this.m_appStateChangedAutorunDisposer(),
                (this.m_appStateChangedAutorunDisposer = null)),
              (0, r.OK)({
                color_mult: 1,
                reflection_mult: 1,
                roomview_mult: [1, 1, 1],
                allow_skydome: !0,
              }),
              this.m_roomViewChangedEventHandle &&
                (this.m_roomViewChangedEventHandle.unregister(),
                (this.m_roomViewChangedEventHandle = null)),
              null === (e = this.m_linkStreamActiveEventHandle) ||
                void 0 === e ||
                e.unregister(),
              (this.m_linkStreamActiveEventHandle = null),
              null === (t = this.m_dashboardThumbnailsChangedEventHandle) ||
                void 0 === t ||
                t.unregister(),
              (this.m_dashboardThumbnailsChangedEventHandle = null),
              null === (n = this.m_keyboardVisibilityChangedEventHandle) ||
                void 0 === n ||
                n.unregister(),
              (this.m_keyboardVisibilityChangedEventHandle = null);
          }
          static getDashboardDistance() {
            if (J.s_dashboardUserDistance) return J.s_dashboardUserDistance;
            const e = ae.B.currentDashboardPosition;
            return e == $.Near
              ? 0.925
              : e == $.Middle
                ? 1.05
                : e == $.Far
                  ? 1.2
                  : 1.15;
          }
          static getDashboardVerticalPosition() {
            var e;
            const t =
                0.01 *
                (null !==
                  (e = b.G3.settings.get(
                    "/settings/dashboard/verticalOffsetCm_2",
                  )) && void 0 !== e
                  ? e
                  : 0),
              n = ae.B.currentDashboardPosition;
            return n == $.Near
              ? -0.07 + t
              : n == $.Middle
                ? -0.08 + t
                : ($.Far, -0.09 + t);
          }
          static getDashboardScale() {
            var e;
            if (J.s_dashboardUserScale) return J.s_dashboardUserScale;
            let t = 1;
            const n = ae.B.currentDashboardPosition;
            return (
              (t =
                n == $.Near
                  ? 0.36
                  : n == $.Middle
                    ? 0.41
                    : n == $.Far
                      ? 0.47
                      : 0.41),
              (t *=
                null !==
                  (e =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VRProperties.GetFloatProperty(
                          r.wU,
                          r.Uk.DashboardScale_Float,
                        )) && void 0 !== e
                  ? e
                  : 1),
              t
            );
          }
          onSetDashboardFadeSuppression(e) {
            e.suppress_dashboard_fade
              ? this.m_setSuppressingFade.add(e.for_id)
              : this.m_setSuppressingFade.delete(e.for_id),
              this.forceUpdate();
          }
          onRoomViewChanged() {
            this.forceUpdate();
          }
          onLinkStreamActiveEvents(e) {
            this.setState({ bLinkStreamActive: e });
          }
          onKeyboardVisibilityChanged(e) {
            this.setState({ bKeyboardVisible: e });
          }
          onGrabStart() {
            this.setState({ bGrabbed: !0 });
          }
          onGrabEnd() {
            this.setState({ bGrabbed: !1 });
          }
          onSetDashboardForceBoundsVisible(e) {
            this.setState((t, n) => {
              let i = Object.assign({}, t.setForcingBoundsVisible);
              return (
                (i[e.for_overlay_key] = new Set(i[e.for_overlay_key])),
                e.force_bounds_visible
                  ? i[e.for_overlay_key].add(e.for_id)
                  : i[e.for_overlay_key].delete(e.for_id),
                { setForcingBoundsVisible: i }
              );
            });
          }
          onDashboardOverlayCreated(e) {
            this.initializeOverlayState(e.overlay_key);
          }
          onDashboardOverlayDestroyed(e) {
            var t;
            e.overlay_key.startsWith(p.Vq)
              ? null === (t = this.m_refDesktopView.current) ||
                void 0 === t ||
                t.onWindowViewDestroyed(e.overlay_key)
              : e.overlay_key == this.getActiveOverlayKey() &&
                this.switchToHomeOverlay(),
              e.overlay_key == p.T2 && ae.B.ClearActiveDashboardPopups(),
              ae.B.m_mapOverlayState.delete(e.overlay_key);
          }
          onUpdateDashboardTabs(e) {
            const t = this.getActiveOverlaySummonKey();
            (this.m_mapExternalOverlays = {}),
              e.tabs.forEach((e) => {
                e.mountable_id &&
                  (this.m_mapExternalOverlays[e.mountable_id] = e);
              }),
              ae.B.SetHasGamepadUIOVerlay(this.hasVRGamepadUIOverlay()),
              this.autoSwitchOverlayIfNeeded(),
              this.m_activeOverlayThatVanished &&
                this.hasDashboardOverlay(
                  this.m_activeOverlayThatVanished.sSummonKey,
                ) &&
                (this.m_activeOverlayThatVanished = null);
            const n = b.G3.settings.get(p.y3);
            this.m_bWaitingOnInitialOverlayToAutoShow &&
              this.hasDashboardOverlay(n) &&
              (this.m_bWaitingOnInitialOverlayToAutoShow = !1),
              t &&
                !this.hasDashboardOverlay(t) &&
                (this.switchToHomeOverlay(),
                (this.m_activeOverlayThatVanished = {
                  sSummonKey: t,
                  timeVanished: new Date(),
                })),
              this.forceUpdate();
          }
          onWindowViewCreated(e) {
            var t, n;
            this.switchToOverlayInternal(p.gB),
              null === (t = this.m_refDesktopView.current) ||
                void 0 === t ||
                t.onWindowViewCreated(e.overlay_key, e.hwnd),
              null === (n = this.m_refDesktopTray.current) ||
                void 0 === n ||
                n.onWindowViewCreated(e.overlay_key, e.hwnd);
          }
          onWindowViewDestroyed(e) {}
          onUpdateWindowList(e) {
            var t;
            let n = new Map();
            e.windows.forEach((e) => {
              n.set(e.hwnd, e);
            }),
              this.setState({
                mapWindows: n,
                bWindowViewEnabled:
                  null === (t = b.G3.settings.get(p.fj)) || void 0 === t || t,
              });
          }
          onUpdateDebugInfo(e) {}
          onDockOverlay(e, t, n) {
            var i, o;
            let r = !1;
            (t != R.RA.LeftHand && t != R.RA.RightHand && t != R.RA.Theater) ||
              ae.B.m_mapOverlayState.forEach((e, n) => {
                e.dockLocation == t &&
                  ((e.dockLocation = R.RA.Dashboard), (r = !0));
              });
            const a = ae.B.m_mapOverlayState.get(e);
            if (
              (a && ((a.dockLocation = t), (a.xfInitial = n)),
              t === R.RA.Dashboard)
            )
              if (e.startsWith(p.r4)) {
                const t = Number.parseInt(e.substring(p.r4.length + 1));
                null === (i = this.m_refDesktopView.current) ||
                  void 0 === i ||
                  i.onDesktopChange(t);
              } else
                e.startsWith(p.Vq) &&
                  (null === (o = this.m_refDesktopView.current) ||
                    void 0 === o ||
                    o.onWindowViewChange(e));
            this.forceUpdate();
          }
          renderActiveOverlay() {
            if (null === this.state.sActiveOverlayID) return null;
            const e = this.getActiveOverlayKey(),
              t = ae.B.isVRGamepadUI,
              n = this.getActiveOverlay();
            if (!n) return null;
            const i = ae.B.m_mapOverlayState.get(e),
              o = i ? i.fScale : 1,
              a = t ? ae.B.m_fVRGamepadUI_GlobalActiveOverlayScale : 1;
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                r.wx,
                { scale: a },
                l.createElement(r.sl, {
                  mountedId: n.mountable_id,
                  fDashboardScale: o,
                }),
                t && this.renderVRGamepadUISidePanels(),
              ),
            );
          }
          shouldShowOverlayTab(e, t) {
            return t && e.summon_overlay_key == p.PF
              ? _.H.Instance.SceneApplicationState != r.xY.None
              : !(
                  (void 0 === e.icon_overlay_key && null == e.icon_uri) ||
                  !e.summon_overlay_key ||
                  (!t && e.summon_overlay_key == p.A4) ||
                  (!t && e.summon_overlay_key == p.Y8) ||
                  (!t && e.summon_overlay_key == p.Xl) ||
                  (!t && e.summon_overlay_key.startsWith(p.r4)) ||
                  (!t && e.summon_overlay_key.startsWith(p.Vq)) ||
                  (!t &&
                    e.summon_overlay_key.startsWith(p.MZ) &&
                    !e.summon_overlay_key.startsWith(p.wX)) ||
                  (t &&
                    (e.summon_overlay_key == p.O5 ||
                      e.summon_overlay_key == p.wB)) ||
                  (!t &&
                    ((n = e.summon_overlay_key),
                    null !== (i = null == n ? void 0 : n.startsWith(p.MI)) &&
                      void 0 !== i &&
                      i))
                );
            var n, i;
          }
          computeFilteredOverlayTabs(e) {
            return Object.values(this.m_mapExternalOverlays)
              .filter((t) => this.shouldShowOverlayTab(t, e))
              .sort((e, t) => e.tab_name.localeCompare(t.tab_name));
          }
          findDashboardTab(e) {
            for (let t in this.m_mapExternalOverlays) {
              let n = this.m_mapExternalOverlays[t];
              if (n.summon_overlay_key == e) return n;
            }
            return null;
          }
          hasTenfootOverlay() {
            return this.hasDashboardOverlay(p.Y8);
          }
          hasVRGamepadUIOverlay() {
            return this.hasDashboardOverlay(p.T2);
          }
          switchToHomeOverlay() {
            let e;
            (e = ae.B.isVRGamepadUI ? p.T2 : p.O5),
              this.switchToOverlayInternal(e, "switchToDashboardLibrary");
          }
          switchToSteamOverlay() {
            let e = "";
            if (ae.B.isVRGamepadUI) e = p.T2;
            else {
              if (!this.hasTenfootOverlay()) return;
              e = p.Y8;
            }
            this.switchToOverlayInternal(e, "switchToSteamOverlay");
          }
          switchToOverlayInternal(e, t) {
            var n, i, o, a;
            if (!e) return !1;
            switch (e) {
              case p.Y8:
                y.y.Instance.latchBigPictureEntryPoint();
                break;
              case p.O5:
                this.m_bQuickLaunchShouldReturnToBigPicture = !1;
                break;
              case p.wB:
                this.m_bQuickStoreShouldReturnToBigPicture = !1;
                break;
              case p.Us:
                let t = {
                    type: "show_app_binding",
                    app_key:
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.VRApplications.GetSceneApplicationKey(),
                  },
                  n = "bindingui/" + r.qA[(0, r.Op)()];
                this.m_mailbox.SendMessage(n, t),
                  (this.m_bQuickStoreShouldReturnToBigPicture = !1),
                  (e = p.RM);
            }
            if (e.startsWith(p.r4)) {
              const t = Number.parseInt(e.substring(p.r4.length + 1));
              Number.isSafeInteger(t) &&
                (null === (n = this.m_refDesktopView.current) ||
                  void 0 === n ||
                  n.onDesktopChange(t)),
                (e = p.gB);
            } else if (e.startsWith(p.Vq)) {
              if (
                !(null === (i = this.m_refDesktopView.current) || void 0 === i
                  ? void 0
                  : i.hasWindowView(e))
              )
                return !1;
              null === (o = this.m_refDesktopView.current) ||
                void 0 === o ||
                o.onWindowViewChange(e),
                (e = p.gB);
            }
            let s = this.findDashboardTab(e);
            return (
              !!s &&
              (this.computeFilteredOverlayTabs(!1).includes(s) &&
                b.G3.SetSettingsValue(
                  p.nf,
                  null !== (a = s.summon_overlay_key) && void 0 !== a ? a : "",
                ),
              (this.m_activeOverlayThatVanished = null),
              this.setState({ sActiveOverlayID: s.mountable_id }),
              v.e.instance.RecordUIEvent(
                "SetDashboardOverlay",
                null != t ? t : "Button",
                e,
              ),
              !0)
            );
          }
          autoSwitchOverlayIfNeeded() {
            const e = [],
              t = this.getActiveOverlaySummonKey();
            this.m_bWaitingOnInitialOverlayToAutoShow &&
              e.push(b.G3.settings.get(p.y3)),
              this.m_activeOverlayThatVanished &&
                (new Date().getTime() -
                  this.m_activeOverlayThatVanished.timeVanished.getTime()) /
                  1e3 <
                  J.k_nTimeLimitToReturnToActiveOverlayThatVanishedSeconds &&
                e.push(this.m_activeOverlayThatVanished.sSummonKey),
              (null == t ||
                (t == p.O5 && !this.m_bUserManuallySwitchToOldLibrary) ||
                t == p.wB) &&
                e.push(p.T2),
              null == t && e.push(p.O5),
              t == p.T2 && ae.B.ignoreVRGamepadUI && e.push(p.O5);
            const n = e.find(this.hasDashboardOverlay);
            n && this.switchToOverlayInternal(n);
          }
          getActiveOverlay() {
            var e;
            return this.state.sActiveOverlayID &&
              null !==
                (e = this.m_mapExternalOverlays[this.state.sActiveOverlayID]) &&
              void 0 !== e
              ? e
              : null;
          }
          getActiveOverlaySummonKey() {
            var e, t;
            return null !==
              (t =
                null === (e = this.getActiveOverlay()) || void 0 === e
                  ? void 0
                  : e.summon_overlay_key) && void 0 !== t
              ? t
              : null;
          }
          getActiveOverlayKey() {
            var e;
            let t = this.getActiveOverlaySummonKey();
            return t == p.gB
              ? null === (e = this.m_refDesktopView.current) || void 0 === e
                ? void 0
                : e.sCurrentOverlayKey
              : t;
          }
          getActiveOverlayState() {
            const e = this.getActiveOverlayKey();
            return ae.B.m_mapOverlayState.get(e);
          }
          getActiveOverlayDockLocation() {
            var e;
            const t = this.getActiveOverlayState();
            return null !== (e = null == t ? void 0 : t.dockLocation) &&
              void 0 !== e
              ? e
              : R.RA.Dashboard;
          }
          hideMessageOverlay() {
            this.getActiveOverlaySummonKey() == p.f8 &&
              this.switchToHomeOverlay();
          }
          onShowDashboardRequested(e) {
            var t;
            if (!b.G3.settings.get("/settings/dashboard/enableDashboard"))
              return;
            const n = ae.B.m_mapOverlayState.get(e.overlay_key);
            (null == n ? void 0 : n.dockLocation) != R.RA.Theater &&
              (this.show(
                null !== (t = e.reason) && void 0 !== t ? t : "unknown",
              ),
              e.overlay_key
                ? this.switchToOverlayInternal(e.overlay_key)
                : this.autoSwitchOverlayIfNeeded(),
              this.setDashboardVisibility(
                !0,
                e.tracked_device_index,
                e.reason,
              ));
          }
          onHideTheaterMode() {
            let e = this.getActiveOverlayKey();
            this.onDockOverlay(e, R.RA.Theater);
            let t = this.getActiveOverlayKey();
            this.onDockOverlay(t, R.RA.Dashboard);
          }
          onHideDashboardRequested(e) {
            VRHTML.VRDashboardManager.HasMessageOverlay()
              ? this.switchToOverlayInternal(p.f8)
              : (this.hideMessageOverlay(),
                VRHTML.VRDashboardManager.CloseKeyboard(),
                this.hide(e.reason),
                this.setDashboardVisibility(!1, void 0, e.reason));
          }
          setDashboardVisibility(e, t, n) {
            let i = {
              type: "set_dashboard_visibility",
              tracked_device_index: t,
              visible: e,
              reason: n,
            };
            this.m_mailbox.SendMessage("vrcompositor_systemlayer", i);
          }
          show(e) {
            if (this.isShown()) return;
            v.e.instance.StartDashboardSession(e),
              this.m_mailbox.SendMessage("desktopview", {
                type: "request_window_list_update",
              });
            const t = _.H.Instance.SceneAppKey,
              n = _.H.Instance.SceneAppIsHome;
            t &&
              t != this.state.sLastShownAppKey &&
              (this.setState({ sLastShownAppKey: t }),
              n
                ? this.switchToHomeOverlay()
                : this.switchToOverlayInternal(p.PF)),
              (this.m_activeOverlayThatVanished = null),
              this.setState({ bShown: !0 });
            let i = { type: J.k_sRequestDashboardTabsMessage };
            this.m_mailbox.SendMessage("vrcompositor_systemlayer", i),
              (0, r.qI)();
          }
          hide(e) {
            this.isShown() &&
              ((this.m_activeOverlayThatVanished = null),
              this.setState({ bShown: !1, eShowPopoverMenu: ee.None }),
              v.e.instance.EndDashboardSession(e));
          }
          isShown() {
            return this.state.bShown;
          }
          setPlacementModeActive(e) {
            this.setState({ bPlacementModeActive: e });
          }
          onToggleRoomView(e) {
            var t;
            const n =
                null !==
                  (t = VRHTML.VRControlPanel.GetCameraRoomViewVisible()) &&
                void 0 !== t &&
                t,
              i = "boolean" == typeof e ? e : !n;
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRControlPanel.SetCameraRoomViewVisible(i);
          }
          onQuickLaunchButtonClick() {
            this.m_bQuickLaunchShouldReturnToBigPicture &&
            y.y.Instance.lastBigPictureEntryPoint == y.b.QuickLaunch &&
            !this.isOverlayActive(p.Y8)
              ? y.y.Instance.openBigPictureThroughLastEntryPoint()
              : this.switchToOverlayInternal(p.O5);
          }
          onQuickStoreButtonClick() {
            this.m_bQuickStoreShouldReturnToBigPicture &&
            y.y.Instance.lastBigPictureEntryPoint == y.b.QuickStore &&
            !this.isOverlayActive(p.Y8)
              ? y.y.Instance.openBigPictureThroughLastEntryPoint()
              : this.switchToOverlayInternal(p.wB);
          }
          onRecenterClick() {
            this.state.bLinkStreamActive && VRHTML.BIsLinkServer()
              ? (this.m_mailbox.SendMessage("svl", { type: "handle_recenter" }),
                VRHTML.VRDashboardManager.HideDashboard(
                  "onRecenterClick stream active",
                ))
              : this.m_mailbox.SendMessage(te.BB, {
                  type: te.KU,
                  countdown_seconds: 3,
                });
          }
          onImmersiveRoomSetupClick() {
            this.m_mailbox.SendMessage("driver_hmd", { type: "room_setup" });
          }
          onToggleGamepadFocus() {}
          getDashboardIconUri(e) {
            try {
              if ("turn_signal_menu.thumb" == e.icon_overlay_key)
                return "/dashboard/images/icons/turnsignal.svg";
              if (e.icon_uri) return e.icon_uri;
              if (e.icon_overlay_key)
                return null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRDashboardManager.GetOverlayImage(
                      e.icon_overlay_key,
                    );
            } catch (e) {}
            return null;
          }
          renderPowerMenu() {
            const e = !!(null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.SceneAppRunning()),
              t = b.G3.settings.get("/settings/dashboard/allowAppQuitting"),
              n = b.G3.settings.get("/settings/dashboard/allowSystemShutdown");
            let i = !1;
            VRHTML &&
              VRHTML.VROverlay.GetPrimaryDashboardDevice() >= 0 &&
              (i = VRHTML.VRProperties.GetBoolProperty(
                VRHTML.VROverlay.GetPrimaryDashboardDevice(),
                r.Uk.DeviceCanPowerOff_Bool,
              ));
            const o = _.H.Instance.SceneAppName,
              a = _.H.Instance.SceneAppIsHome;
            let s, d;
            return (
              (s = a
                ? (0, m.Xx)("#Exit_SteamVR_Home")
                : o
                  ? (0, m.Xx)("#PowerMenuQuitSceneApp", o)
                  : (0, m.Xx)("#PowerMenuQuitSceneApp_NoApp")),
              (d = a
                ? "/dashboard/images/icons/svr_svrhome_quit_alt.svg"
                : "/dashboard/images/icons/svr_app_quit.svg"),
              this.renderPopoverMenu(
                l.createElement(
                  l.Fragment,
                  null,
                  !!ae.B.isVRGamepadUI &&
                    l.createElement(k.dy, {
                      label: "Old Library",
                      lineBelow: !0,
                      onClick: () => {
                        (this.m_bUserManuallySwitchToOldLibrary = !0),
                          this.switchToOverlayInternal(p.O5),
                          this.showPopoverMenu(ee.None);
                      },
                    }),
                  this.hasTenfootOverlay() &&
                    l.createElement(k.dy, {
                      label: (0, m.Xx)("#PowerMenuSteamOverlay"),
                      lineBelow: !0,
                      onClick: () => {
                        this.switchToOverlayInternal(p.Y8),
                          this.showPopoverMenu(ee.None);
                      },
                    }),
                  i &&
                    l.createElement(k.dy, {
                      label: (0, m.Xx)("#PowerMenuTurnOffController"),
                      imageUrl:
                        "/dashboard/images/icons/svr_controller_power.svg",
                      onClick: () => {
                        null === VRHTML ||
                          void 0 === VRHTML ||
                          VRHTML.TurnOffVRController(),
                          this.showPopoverMenu(ee.None);
                      },
                    }),
                  t &&
                    e &&
                    l.createElement(k.dy, {
                      label: s,
                      imageUrl: d,
                      onClick: () => {
                        null === VRHTML ||
                          void 0 === VRHTML ||
                          VRHTML.QuitSceneApp(),
                          this.showPopoverMenu(ee.None);
                      },
                    }),
                  l.createElement(k.dy, {
                    label: (0, m.Xx)("#PowerMenuExitVR"),
                    imageUrl: "/dashboard/images/icons/svr_svr_quit_alt.svg",
                    onClick: () =>
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.QuitOpenVR(),
                  }),
                  n &&
                    l.createElement(k.dy, {
                      label: (0, m.Xx)("#PowerMenuShutdown"),
                      imageUrl: "/dashboard/images/icons/svr_svr_quit_alt.svg",
                      onClick: () =>
                        null === VRHTML || void 0 === VRHTML
                          ? void 0
                          : VRHTML.ShutdownSystem(),
                    }),
                ),
              )
            );
          }
          startPopoverMenuTimeout(e) {
            this.m_timeoutPopoverMenuHide = window.setTimeout(() => {
              this.setState({ eShowPopoverMenu: ee.None });
            }, e);
          }
          clearPopoverMenuTimeout() {
            this.m_timeoutPopoverMenuHide &&
              (clearTimeout(this.m_timeoutPopoverMenuHide),
              (this.m_timeoutPopoverMenuHide = 0));
          }
          showPopoverMenu(e) {
            this.setState({ eShowPopoverMenu: e }),
              this.clearPopoverMenuTimeout();
          }
          renderPopoverMenu(e) {
            return l.createElement(
              "div",
              {
                className: "PowerMenuContainer",
                onMouseLeave: this.popoverMenuMouseLeave,
                onMouseEnter: this.clearPopoverMenuTimeout,
                ref: this.m_refPopoverMenu,
              },
              l.createElement(c.q, { className: "PowerMenuPanel" }, e),
            );
          }
          popoverMenuMouseLeave(e) {
            0 == e.buttons
              ? this.startPopoverMenuTimeout(100)
              : window.document.addEventListener(
                  "mouseup",
                  this.popoverMenuMouseUp,
                );
          }
          popoverMenuMouseUp(e) {
            window.document.removeEventListener(
              "mouseup",
              this.popoverMenuMouseUp,
            ),
              this.m_refPopoverMenu.current &&
                !(function (e, t, n) {
                  let i = n.getBoundingClientRect();
                  return (
                    e >= i.left && e <= i.right && t >= i.top && t <= i.bottom
                  );
                })(e.clientX, e.clientY, this.m_refPopoverMenu.current) &&
                this.startPopoverMenuTimeout(100);
          }
          renderStatusBarTitle() {
            var e, t, n, i;
            let o = this.getActiveOverlay();
            if (!o) return null;
            if (
              (o.summon_overlay_key == p.Y8 &&
                (y.y.Instance.lastBigPictureEntryPoint == y.b.QuickLaunch
                  ? (o = this.findDashboardTab(p.O5))
                  : y.y.Instance.lastBigPictureEntryPoint == y.b.QuickStore &&
                    (o = this.findDashboardTab(p.wB))),
              o.summon_overlay_key == p.gB)
            ) {
              if (
                -1 ==
                (null === (e = this.m_refDesktopView.current) || void 0 === e
                  ? void 0
                  : e.currentDesktopIndex)
              ) {
                let e =
                  null === (t = this.m_refDesktopView.current) || void 0 === t
                    ? void 0
                    : t.currentWindowHwnd;
                return l.createElement(k.Rk, {
                  name:
                    null === (n = this.state.mapWindows.get(e)) || void 0 === n
                      ? void 0
                      : n.title,
                  iconUrl: this.getDashboardIconUri(o),
                });
              }
              return l.createElement(k.Rk, {
                name:
                  "Desktop " +
                  (null === (i = this.m_refDesktopView.current) || void 0 === i
                    ? void 0
                    : i.currentDesktopIndex),
                iconUrl: this.getDashboardIconUri(o),
              });
            }
            if (o.summon_overlay_key == p.RM)
              return l.createElement(k.Rk, {
                name: (0, m.Xx)("#BindingUI_WindowTitle_ControllerBinding"),
                iconUrl: "/dashboard/images/icons/svr_settings.svg",
              });
            let r = o.tab_name;
            return l.createElement(k.Rk, {
              name: r,
              iconUrl: this.getDashboardIconUri(o),
            });
          }
          getCollisionBoundsFadeVisualizationElements() {
            var e;
            const t =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRChaperoneSetup.GetLiveCollisionBoundsInfo();
            if (!t) return [];
            let n = [];
            const i =
              null !== (e = b.G3.settings.get(p.yQ)) && void 0 !== e ? e : 0.7;
            for (let e of t) {
              let t = (0, r.M9)((0, r.eQ)(e[3], e[0])),
                o = (0, r.M9)((0, r.eQ)(e[1], e[0])),
                a = (0, r.dq)(t, o),
                s = (0, r.Pd)((0, r.tS)(t, o, a)),
                d = (0, r.LY)((0, r.eQ)(e[0], e[3]));
              if (d < 0.4) continue;
              let c = Math.max(1, Math.floor(d));
              for (let t = 0; t < c; t++) {
                let o = (t + 1) / (c + 1),
                  a = (0, r.Oq)();
                (a.rotation = s),
                  (a.translation = (0, r.q9)(o, e[0], e[3])),
                  (a.scale = { x: 0.005, y: 0.005, z: i });
                let d = l.createElement(
                  r.wx,
                  { transform: a },
                  l.createElement(
                    r.Dd,
                    { value: 0.25 },
                    l.createElement(
                      r.VW,
                      { color: { r: 0.2, g: 0.2, b: 0.2 } },
                      l.createElement(r.gQ, {
                        source: "laser_pointer",
                        wireframe: !1,
                        culling: r.xj.Backface,
                      }),
                    ),
                  ),
                );
                n.push(d);
              }
              if (n.length > 20) break;
            }
            return n;
          }
          render() {
            const e = _.H.Instance.SceneApplicationState !== r.xY.None;
            if (this.state.bShown) {
              const t =
                  this.m_setSuppressingFade.size > 0 &&
                  this.getActiveOverlaySummonKey() == p.A4,
                n = b.G3.settings.get(
                  "/settings/dashboard/omitDashboardFadeWithSteamVRHome",
                );
              (_.H.Instance.SceneAppIsHome && n) || t || !e
                ? (0, r.OK)({
                    color_mult: 1,
                    reflection_mult: 1,
                    roomview_mult: [1, 1, 1],
                    allow_skydome: !0,
                  })
                : (0, r.OK)({
                    color_mult: 0.15,
                    reflection_mult: 1,
                    roomview_mult: [1, 1, 1],
                    allow_skydome: !0,
                  });
            } else
              (0, r.OK)({
                color_mult: 1,
                reflection_mult: 1,
                roomview_mult: [1, 1, 1],
                allow_skydome: !0,
              });
            const t = this.getActiveOverlaySummonKey(),
              n = this.state.bShown && this.state.setForcingBoundsVisible[t],
              i = n && n.size > 0;
            let o = [];
            return (
              i && (o = this.getCollisionBoundsFadeVisualizationElements()),
              l.createElement(
                "div",
                { className: "DashboardMain" },
                i && l.createElement(ce, null),
                i && l.createElement("span", null, o),
                this.state.bShown && this.renderDashboard(),
                this.renderInternalOverlays(),
                this.renderOverlayWidgets(),
                !1,
              )
            );
          }
          hasDashboardOverlay(e) {
            return Object.values(this.m_mapExternalOverlays).some(
              (t) => t.summon_overlay_key == e,
            );
          }
          isOverlayActive(e) {
            return (
              !!this.state.sActiveOverlayID &&
              this.getActiveOverlaySummonKey() == e
            );
          }
          GetActiveOverlayAnchorIDs() {
            const e = this.getActiveOverlaySummonKey();
            return k.Eu.has(e)
              ? k.Eu.get(e)
              : {
                  strTopCenterAnchorID:
                    this.state.sActiveOverlayID + "_TopCenter",
                  strCenterLeftAnchorID:
                    this.state.sActiveOverlayID + "_CenterLeft",
                  strCenterRightAnchorID:
                    this.state.sActiveOverlayID + "_CenterRight",
                  strBottomCenterAnchorID:
                    this.state.sActiveOverlayID + "_BottomCenter",
                };
          }
          renderExternalOverlayControlBarButton(e) {
            const t = this.getDashboardIconUri(e),
              n = k.IO.Center;
            return l.createElement(k.B8, {
              key: e.mountable_id,
              label: e.tab_name,
              imageUrl: t,
              imageStyle: n,
              active: this.isOverlayActive(e.summon_overlay_key),
              onClick: () => this.switchToOverlayInternal(e.summon_overlay_key),
            });
          }
          isDesktopTrayActive() {
            var e;
            return (
              (this.isOverlayActive(p.gB) ||
                (null === (e = this.getActiveOverlaySummonKey()) || void 0 === e
                  ? void 0
                  : e.startsWith(p.Vq))) &&
              (this.state.eShowPopoverMenu == ee.None ||
                this.state.eShowPopoverMenu == ee.Windows)
            );
          }
          isVolumeTrayActive() {
            return this.state.eShowPopoverMenu == ee.Volume;
          }
          isAnyTrayActive() {
            return this.isDesktopTrayActive() || this.isVolumeTrayActive();
          }
          isSteamOverlayActive() {
            return (
              (this.isOverlayActive(p.Y8) || this.isOverlayActive(p.T2)) &&
              this.state.eShowPopoverMenu == ee.None
            );
          }
          isDesktopOverlayActive() {
            var e;
            return (
              this.isOverlayActive(p.gB) ||
              (null === (e = this.getActiveOverlaySummonKey()) || void 0 === e
                ? void 0
                : e.startsWith(p.Vq))
            );
          }
          getPeerButtonInfo() {
            const e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRProperties.GetStringProperty(
                    0,
                    r.Uk.PeerButtonInfo_String,
                  );
            if (e) return JSON.parse(e);
          }
          handlePeerButton() {
            const e = this.getPeerButtonInfo();
            if (!e) return;
            let t = { type: e.sMessageType };
            (t.whichDevice = VRHTML.VROverlay.GetPrimaryDashboardDevice()),
              this.m_mailbox.SendMessage(e.sMailbox, t);
          }
          ToggleIncognitoMode(e) {
            let t = {
              type: "toggle_voicechat",
              enable: null != e ? e : !ae.B.isGroupMode,
            };
            this.m_mailbox.SendMessage("web_steam_mailbox", t);
          }
          ToggleVideoStream() {
            this.m_mailbox.SendMessage("web_steam_mailbox", {
              type: "toggle_videostream",
            });
          }
          renderVRGamepadUISidePanels() {
            var e;
            const t =
                null ===
                  (e = b.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === e ||
                e
                  ? p.ml
                  : null,
              n = b.G3.settings.get("/settings/dashboard/theaterPosition");
            let i = J.k_nControlBarWidthMeters / 2;
            n == $.Near ||
              (n == $.Middle
                ? (i *= 1.5)
                : n == $.Far
                  ? (i *= 1.85)
                  : n == $.Standard && (i *= 1.5));
            const o = this.GetActiveOverlayAnchorIDs();
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                r.wx,
                {
                  parent_id: o.strCenterLeftAnchorID,
                  translation: { x: -0.08 },
                  rotation: { y: 20 },
                },
                l.createElement(r.s_, {
                  id: "VRGamepadUI-MainMenu-Panel",
                  debug_name: "VRGamepadUI-MainMenu-Panel",
                  interactive: !0,
                  curvature_origin_id: t,
                  overlay_key: p.v2,
                  origin: r.Ic.CenterRight,
                  meters_per_pixel: ae.B.m_fVRGamepadUI_MetersPerPixel,
                  reflect: 0.01,
                }),
              ),
              l.createElement(
                r.wx,
                {
                  parent_id: o.strCenterRightAnchorID,
                  translation: { x: 0.08 },
                  rotation: { y: -20 },
                },
                l.createElement(r.s_, {
                  id: "VRGamepadUI-QuickAccessMenu-Panel",
                  debug_name: "VRGamepadUI-QuickAccessMenu-Panel",
                  interactive: !0,
                  curvature_origin_id: t,
                  overlay_key: p.Tn,
                  origin: r.Ic.CenterLeft,
                  meters_per_pixel: ae.B.m_fVRGamepadUI_MetersPerPixel,
                  reflect: 0.01,
                }),
              ),
            );
          }
          BShouldShowDashboardAction(e) {
            var t, n, i;
            switch (e) {
              case Y.ToggleRoomView:
                const e =
                    null !== (t = b.G3.settings.get(p.Av)) && void 0 !== t && t,
                  o =
                    null !== (n = b.G3.settings.get(p.k_)) && void 0 !== n
                      ? n
                      : 0,
                  r = VRHTML.BIsLinkServer();
                return e && o > 0 && !(this.state.bLinkStreamActive && r);
              case Y.Recenter:
                return (
                  1 !=
                  (null !==
                    (i =
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.VRProperties.GetInt32Property(
                            "/user/head",
                            2109,
                          )) && void 0 !== i
                    ? i
                    : 0)
                );
              case Y.IncognitoMode:
              default:
                return !1;
            }
          }
          renderLegacyControlBar(e, t, n) {
            var i, o, a, s, d;
            const u = ae.B.isVRGamepadUI,
              h = ae.B.isDarkMode,
              v = n ? 1 : 0,
              S = h ? { r: 0.05, g: 0.05, b: 0.05 } : null,
              f = h ? 0.02 : 0.05,
              R = J.k_nControlBarWidthMeters,
              C =
                null ===
                  (i = b.G3.settings.get(
                    "/settings/dashboard/showPowerOptions",
                  )) ||
                void 0 === i ||
                i,
              w =
                null ===
                  (o = b.G3.settings.get("/settings/dashboard/showDesktop")) ||
                void 0 === o ||
                o,
              T = u,
              M = !u && !0,
              D =
                !u &&
                (null ===
                  (a = b.G3.settings.get(
                    "/settings/dashboard/showQuickStore",
                  )) ||
                  void 0 === a ||
                  a),
              I = !(
                null !==
                  (s = b.G3.settings.get("/settings/dashboard/arcadeMode")) &&
                void 0 !== s &&
                s
              ),
              E = this.getPeerButtonInfo(),
              V = (VRHTML.BIsLinkServer(), VRHTML.BIsLinkClient()),
              x = _.H.Instance.SceneApplicationState,
              P = _.H.Instance.SceneAppIsHome,
              L =
                null ===
                  (d = b.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === d ||
                d
                  ? p.ml
                  : null,
              O = _.H.Instance.SceneAppKey;
            let H = "images/appimage_default.png";
            O && (H = "/app/image?app_key=" + O);
            let B = V || this.state.bLinkStreamActive;
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                r.Dd,
                { value: v },
                l.createElement(
                  r.VW,
                  { color: S },
                  n &&
                    l.createElement(
                      r.s_,
                      {
                        curvature_origin_id: L,
                        width: R,
                        interactive: !1,
                        debug_name: "ControlBarBackground",
                        sampler: r.Vv.SingleTap,
                        reflect: f,
                      },
                      l.createElement("div", {
                        className: "ControlBarBackground",
                      }),
                    ),
                  l.createElement(
                    r.wx,
                    { translation: { z: 1e-5 } },
                    l.createElement(
                      r.s_,
                      {
                        curvature_origin_id: L,
                        width: R,
                        interactive: n,
                        id: p.WR,
                        debug_name: "Controls",
                      },
                      l.createElement(
                        c.q,
                        { className: "ControlBar MainControlBar" },
                        l.createElement(
                          "div",
                          { className: "Section Left" },
                          C &&
                            l.createElement(k.NT, {
                              imageUrl:
                                "/dashboard/images/icons/svr_menu_c.svg",
                              label: (0, m.Xx)("#Menu"),
                              style: k.zk.Small,
                              onClick: () => this.showPopoverMenu(ee.Power),
                              onMouseEnter: this.clearPopoverMenuTimeout,
                              onMouseLeave: () =>
                                this.startPopoverMenuTimeout(500),
                            }),
                          l.createElement(
                            k.dw,
                            { style: k.zk.Small },
                            T &&
                              l.createElement(k.B8, {
                                imageUrl:
                                  "/dashboard/images/icons/vr_steam.svg",
                                label: (0, m.Xx)("#Steam"),
                                active: this.isSteamOverlayActive(),
                                onClick: () => this.switchToSteamOverlay(),
                              }),
                            !1,
                          ),
                          w &&
                            l.createElement(k.NT, {
                              style: k.zk.Small,
                              imageUrl:
                                "/dashboard/images/icons/svr_desktop_alt.svg",
                              label: (0, m.Xx)("#Desktops"),
                              active: this.isDesktopTrayActive(),
                              onClick: () => this.switchToOverlayInternal(p.gB),
                            }),
                          l.createElement(
                            k.dw,
                            { style: k.zk.Small },
                            l.createElement(
                              l.Fragment,
                              null,
                              e.map(this.renderExternalOverlayControlBarButton),
                              t.length > 0 &&
                                l.createElement(k.B8, {
                                  imageUrl:
                                    "/dashboard/images/icons/svr_more.svg",
                                  label: (0, m.Xx)(
                                    "#X_More_Overlays",
                                    t.length,
                                  ),
                                  active:
                                    this.state.eShowPopoverMenu ==
                                    ee.ExternalOverlays,
                                  onClick: () =>
                                    this.showPopoverMenu(ee.ExternalOverlays),
                                  onMouseEnter: this.clearPopoverMenuTimeout,
                                  onMouseLeave: () =>
                                    this.startPopoverMenuTimeout(500),
                                }),
                            ),
                          ),
                        ),
                        l.createElement(
                          "div",
                          { className: "Section Center" },
                          M &&
                            l.createElement(k.NT, {
                              label: (0, m.Xx)("#Library"),
                              imageUrl: "/dashboard/images/icons/svr_items.svg",
                              active:
                                this.isOverlayActive(p.O5) ||
                                (this.isOverlayActive(p.Y8) &&
                                  y.y.Instance.lastBigPictureEntryPoint ==
                                    y.b.QuickLaunch),
                              style: k.zk.Large,
                              onClick: this.onQuickLaunchButtonClick,
                            }),
                          x != r.xY.None &&
                            n &&
                            l.createElement(
                              "div",
                              { className: "NowPlayingSpacer" },
                              l.createElement(
                                g.d,
                                {
                                  allowableParentSelectors: [".DashboardMain"],
                                },
                                l.createElement(
                                  r.VW,
                                  { color: S },
                                  l.createElement(
                                    r.wx,
                                    { translation: { z: 0.02 } },
                                    l.createElement(
                                      r.s_,
                                      {
                                        debug_name: "NowPlayingButton",
                                        interactive: !0,
                                        target_dpi_panel_id: p.WR,
                                        curvature_origin_id: L,
                                      },
                                      l.createElement(
                                        "div",
                                        { className: "ControlBar" },
                                        l.createElement(k.NT, {
                                          label: P
                                            ? (0, m.Xx)("#SteamVR_Home")
                                            : (0, m.Xx)("#Now_Playing"),
                                          active: this.isOverlayActive(p.PF),
                                          style: k.zk.App,
                                          imageUrl: H,
                                          onClick: () =>
                                            this.switchToOverlayInternal(p.PF),
                                        }),
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          D &&
                            l.createElement(k.NT, {
                              label: (0, m.Xx)("#Store"),
                              imageUrl: "/dashboard/images/icons/svr_store.svg",
                              additionalClassNames: "Store",
                              active:
                                this.isOverlayActive(p.wB) ||
                                (this.isOverlayActive(p.Y8) &&
                                  y.y.Instance.lastBigPictureEntryPoint ==
                                    y.b.QuickStore),
                              style: k.zk.Large,
                              onClick: this.onQuickStoreButtonClick,
                            }),
                        ),
                        l.createElement(
                          "div",
                          { className: "Section Right" },
                          l.createElement(
                            k.dw,
                            { style: k.zk.Small },
                            !1,
                            !1,
                            !1,
                            this.BShouldShowDashboardAction(Y.Recenter) &&
                              l.createElement(k.B8, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_recenter.svg",
                                additionalClassNames: "CenterImageLarge",
                                label: (0, m.Xx)("#Button_Recenter"),
                                onClick: this.onRecenterClick,
                              }),
                            B &&
                              l.createElement(k.B8, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_room_setup.svg",
                                additionalClassNames: "CenterImageLarge",
                                label: "Room Setup",
                                onClick: this.onImmersiveRoomSetupClick,
                              }),
                            this.BShouldShowDashboardAction(Y.ToggleRoomView) &&
                              l.createElement(k.B8, {
                                imageUrl: "/dashboard/images/icons/svr_eye.svg",
                                label: (0, m.Xx)("#Toggle_Room_View"),
                                onClick: this.onToggleRoomView,
                                active:
                                  null === VRHTML || void 0 === VRHTML
                                    ? void 0
                                    : VRHTML.VRControlPanel.GetCameraRoomViewVisible(),
                                enabled:
                                  null === VRHTML || void 0 === VRHTML
                                    ? void 0
                                    : VRHTML.VROverlayInternal.HasCameraRoomViewCapability(),
                              }),
                            l.createElement(k.D6, {
                              active: this.state.eShowPopoverMenu == ee.Volume,
                              refVolumeTray: this.m_refVolumeTray,
                              onShowTray: () => this.showPopoverMenu(ee.Volume),
                              onHideTray: () => this.showPopoverMenu(ee.None),
                              onMouseEnter: this.clearPopoverMenuTimeout,
                              onMouseLeave: () =>
                                this.startPopoverMenuTimeout(500),
                            }),
                          ),
                          I &&
                            l.createElement(k.NT, {
                              imageUrl:
                                "/dashboard/images/icons/svr_settings.svg",
                              active: this.isOverlayActive(p.A4),
                              enabled: this.hasDashboardOverlay(p.A4),
                              label: (0, m.Xx)("#Settings"),
                              style: k.zk.Small,
                              centerPanelAnchorID: "VolumeButton",
                              onClick: () => this.switchToOverlayInternal(p.A4),
                            }),
                          this.state.bLinkStreamActive &&
                            E &&
                            l.createElement(k.NT, {
                              imageUrl: E.sIcon,
                              active: !1,
                              enabled: !0,
                              label: (0, m.Xx)(E.sButtonName),
                              style: k.zk.Small,
                              centerPanelAnchorID: "VolumeButton",
                              onClick: () => this.handlePeerButton(),
                            }),
                        ),
                      ),
                      n && this.renderLegacyControlBarTrays(L),
                    ),
                  ),
                ),
              ),
            );
          }
          renderKeyboard(e, t) {
            let n = { y: -0.25 },
              i = 1.5;
            return (
              ae.B.isVRGamepadUI
                ? ((n.y = -0.2), (n.z = 0.3), (i = 2))
                : this.isDesktopTrayActive() && (n.y -= 0.15),
              l.createElement(
                l.Fragment,
                null,
                l.createElement(
                  ne.Z,
                  null,
                  this.state.bKeyboardVisible &&
                    l.createElement(
                      r.wx,
                      { translation: n },
                      l.createElement(
                        r.wx,
                        { scale: { y: i, x: i } },
                        l.createElement(r.sl, {
                          mountedId: (0, r.iN)(p.GN, p.gC),
                        }),
                        l.createElement(r.sl, {
                          mountedId: (0, r.iN)(p.GN, p.jw),
                        }),
                      ),
                      l.createElement(
                        r.wx,
                        { translation: { y: -0.62, z: 0.01 } },
                        l.createElement(ie.J, {
                          bVisible: e,
                          tint: t,
                          onStartMove: this.onGrabStart,
                          onEndMove: this.onGrabEnd,
                        }),
                      ),
                    ),
                ),
              )
            );
          }
          renderLegacyControlBarTrays(e, t) {
            const n = ae.B.isDarkMode ? { r: 0.25, g: 0.25, b: 0.25 } : null;
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(C.e, {
                ref: this.m_refDesktopTray,
                curvatureOriginId: e,
                scale: t,
                position: 0,
                visible: this.isDesktopTrayActive(),
                tintColor: n,
                onToggleWindowList: () => this.showPopoverMenu(ee.Windows),
                onClearPopoverMenuTimeout: () => this.clearPopoverMenuTimeout(),
                onStartPopoverMenuTimeout: (e) =>
                  this.startPopoverMenuTimeout(e),
                mapWindows: this.state.mapWindows,
                sort_depth_bias: 0.2,
                bWindowViewEnabled: this.state.bWindowViewEnabled,
              }),
              l.createElement(k.z, {
                ref: this.m_refVolumeTray,
                curvatureOriginId: e,
                scale: t,
                position: 0.337,
                visible: this.isVolumeTrayActive(),
                tintColor: n,
                onFinalChangeMouseOutside: () => {
                  this.startPopoverMenuTimeout(800);
                },
                onMouseMove: this.clearPopoverMenuTimeout,
                onMouseLeave: this.popoverMenuMouseLeave,
                sort_depth_bias: 0.4,
              }),
            );
          }
          renderVRGamepadUIBar(e) {
            return (
              ae.B.m_bShowLegacyBar,
              l.createElement(
                l.Fragment,
                null,
                l.createElement(
                  r.s_,
                  {
                    id: "VRGamepadUI-DashboardBar-Panel",
                    debug_name: "VRGamepadUI-DashboardBar-Panel",
                    interactive: !0,
                    make_overlays_interactive_if_visible: !0,
                    curvature_origin_id: e,
                    overlay_key: p.BZ,
                    origin: r.Ic.TopCenter,
                    meters_per_pixel: ae.B.m_fVRGamepadUI_MetersPerPixel,
                    reflect: 0.08,
                  },
                  l.createElement(r.at, {
                    id: "VRGamepadUI-DashboardBar-Panel-TopCenter",
                    location: r.Ic.TopCenter,
                  }),
                  l.createElement(
                    r.at,
                    {
                      id: "VRGamepadUI-DashboardBar-Panel-BottomCenter",
                      location: r.Ic.BottomCenter,
                    },
                    l.createElement(r.wx, {
                      id: p.dG,
                      translation: { y: -0.1 },
                    }),
                  ),
                  l.createElement(r.wx, { scale: 0.5 }),
                ),
              )
            );
          }
          renderOverlayWidgets() {
            let e = Array.from(ae.B.m_mapOverlayState, ([e, t]) => ({
              sOverlayKey: e,
              overlayState: t,
            })).filter((e) => e.overlayState.dockLocation != R.RA.Dashboard);
            return l.createElement(
              l.Fragment,
              null,
              e.map((e) => {
                var t;
                return l.createElement(R.Sm, {
                  bDashboardShown: this.state.bShown,
                  bHasSceneApp:
                    _.H.Instance.SceneApplicationState !== r.xY.None,
                  bCaptureVideo: !1,
                  dockLocation: e.overlayState.dockLocation,
                  onDockOverlay: this.onDockOverlay,
                  ShowMultitaskingView:
                    null === (t = this.m_refDesktopView.current) || void 0 === t
                      ? void 0
                      : t.ShowMultitaskingView,
                  sOverlayKey: e.sOverlayKey,
                  xfInitial: e.overlayState.xfInitial,
                  key: e.sOverlayKey,
                  ref: e.overlayState.refOverlayWidget,
                });
              }),
            );
          }
          getRenderModelForShape(e) {
            return "";
          }
          renderPassthroughPortals() {
            return null;
          }
          isDesktopViewVisible() {
            return (
              this.state.bShown &&
              this.isOverlayActive(p.gB) &&
              (0, R.sg)(this.getActiveOverlayDockLocation())
            );
          }
          onGameLaunched(e) {
            (!e.is_dashboard_overlay ||
              (e.is_dashboard_overlay && !e.show_overlay_in_quicklaunch)) &&
              (null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRDashboardManager.HideDashboard("game_launched"));
          }
          renderInternalOverlays() {
            var e, t, n, i;
            const o =
                null !==
                  (t =
                    null === (e = this.m_refDesktopView.current) || void 0 === e
                      ? void 0
                      : e.currentDesktopIndex) && void 0 !== t
                  ? t
                  : 1,
              a =
                null !==
                  (i =
                    null === (n = this.m_refDesktopView.current) || void 0 === n
                      ? void 0
                      : n.desktopCount) && void 0 !== i
                  ? i
                  : 1;
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                r.Y9,
                {
                  tabName: (0, m.Xx)("#Library"),
                  iconUri: "/dashboard/images/icons/svr_items.svg",
                  summonOverlayKey: p.O5,
                },
                l.createElement(Z, {
                  visible: this.state.bShown && this.isOverlayActive(p.O5),
                  onGameLaunched: this.onGameLaunched,
                }),
              ),
              l.createElement(
                r.Y9,
                {
                  tabName: (0, m.Xx)("#Store"),
                  iconUri: "/dashboard/images/icons/svr_store.svg",
                  summonOverlayKey: p.wB,
                },
                l.createElement(z, {
                  visible: this.state.bShown && this.isOverlayActive(p.wB),
                }),
              ),
              l.createElement(
                r.Y9,
                { tabName: (0, m.Xx)("#Now_Playing"), summonOverlayKey: p.PF },
                l.createElement(E, {
                  visible: this.state.bShown && this.isOverlayActive(p.PF),
                  onExitGame: () => this.switchToHomeOverlay(),
                }),
              ),
              l.createElement(
                r.Y9,
                {
                  summonOverlayKey: p.gB,
                  tabName:
                    a > 1 ? (0, m.Xx)("#Desktop_X", o) : (0, m.Xx)("#Desktop"),
                  iconUri: "/dashboard/images/icons/svr_desktop_alt.svg",
                },
                l.createElement(C.N, {
                  visible: this.isDesktopViewVisible(),
                  mapWindows: this.state.mapWindows,
                  bWindowViewEnabled: this.state.bWindowViewEnabled,
                  ref: this.m_refDesktopView,
                }),
              ),
              l.createElement(d._, {
                visible: this.state.bShown && this.isOverlayActive(p.A4),
              }),
              !1,
            );
          }
          onAddPortal(e, t) {}
          onRemovePortal(e) {}
          get activeOverlayScale() {
            var e, t;
            return null !==
              (t =
                null === (e = this.getActiveOverlayState()) || void 0 === e
                  ? void 0
                  : e.fScale) && void 0 !== t
              ? t
              : 1;
          }
          onActiveOverlayScaleChange(e) {
            const t = this.getActiveOverlayState();
            t && (t.fScale = e);
          }
          onActiveOverlayClosed() {
            var e;
            const t = this.getActiveOverlayKey();
            t &&
              (t.startsWith(p.Vq)
                ? null === (e = this.m_refDesktopView.current) ||
                  void 0 === e ||
                  e.onWindowViewClosed(t)
                : this.switchToHomeOverlay(),
              VRHTML.VRDashboardManager.SendOverlayClosed(t));
          }
          onSteamButtonPressed(e) {
            const t = this.getActiveOverlayKey();
            t &&
              (VRHTML.VRDashboardManager.SendOverlayButtonPress(t, e),
              VRHTML.VRDashboardManager.SendOverlayButtonUnpress(t, e));
          }
          renderOverlayControlBar() {
            var e, t, n, i;
            const o = ae.B.isDarkMode,
              a = o ? { r: 0.1, g: 0.1, b: 0.1 } : null,
              s = o ? 0 : 0.1;
            let d = !1,
              c = !1,
              h = !1,
              v = this.getActiveOverlayKey();
            if (v) {
              let e = VRHTML.VROverlay.FindOverlay(v);
              (d =
                !!e &&
                VRHTML.VROverlay.GetFlag(e, r.Z9.EnableControlBarKeyboard)),
                (c =
                  !!e &&
                  VRHTML.VROverlay.GetFlag(e, r.Z9.EnableControlBarClose)),
                (h =
                  !!e &&
                  VRHTML.VROverlay.GetFlag(e, r.Z9.EnableSteamUIButtons));
            }
            const g =
                null !==
                  (e = b.G3.settings.get(
                    "/settings/dashboard/scaleSliderMin",
                  )) && void 0 !== e
                  ? e
                  : 0.75,
              _ =
                null !==
                  (t = b.G3.settings.get(
                    "/settings/dashboard/scaleSliderMax",
                  )) && void 0 !== t
                  ? t
                  : 1.5,
              y =
                null ===
                  (n = b.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === n ||
                n
                  ? p.ml
                  : null,
              S = { x: 0, y: -0.15, z: 0.1 },
              f = this.GetActiveOverlayAnchorIDs();
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                r.wx,
                {
                  parent_id: f.strBottomCenterAnchorID,
                  translation: { y: 0.003 },
                },
                l.createElement(
                  r.VW,
                  { color: a },
                  l.createElement(
                    r.s_,
                    {
                      curvature_origin_id: y,
                      origin: r.Ic.TopCenter,
                      interactive: !1,
                      target_width_anchor_id: f.strBottomCenterAnchorID,
                      height: 0.15,
                      min_width: 1.66,
                      debug_name: "ActiveOverlayControlBarBackground",
                      sampler: r.Vv.SingleTap,
                      reflect: s,
                    },
                    l.createElement("div", {
                      className: "OverlayControlBarBackground",
                    }),
                  ),
                ),
              ),
              l.createElement(
                r.wx,
                {
                  parent_id: f.strBottomCenterAnchorID,
                  translation: { y: 0.003, z: 0.001 },
                },
                l.createElement(
                  r.VW,
                  { color: a },
                  l.createElement(
                    r.s_,
                    {
                      curvature_origin_id: y,
                      origin: r.Ic.TopCenter,
                      interactive: !0,
                      target_dpi_panel_id: p.WR,
                      debug_name: "ActiveOverlayControlBar",
                    },
                    l.createElement(
                      "div",
                      { className: "OverlayControlBar" },
                      l.createElement(
                        "div",
                        { className: "Section" },
                        l.createElement(
                          "div",
                          { className: "Label" },
                          (0, m.Xx)("#Size"),
                        ),
                        l.createElement(u.iR, {
                          additionalClassName: "OverlayControlBarSlider",
                          min: g,
                          max: _,
                          value: this.activeOverlayScale,
                          valueStyleVariant: u.px.OnHandle,
                          onChange: this.onActiveOverlayScaleChange,
                          onFinalChange: (e) => {
                            var t;
                            this.isDesktopOverlayActive() &&
                              (null === (t = this.m_refDesktopView.current) ||
                                void 0 === t ||
                                t.onDesktopScaleChange(e));
                          },
                          detents: [1],
                          renderValue: (e) => (100 * e).toFixed(0) + "%",
                        }),
                        h &&
                          l.createElement(k.zN, {
                            icon: l.createElement(oe.VC, {
                              button: re.F.HomeMenu,
                              type: oe.yV.Knockout,
                              size: oe.iM.Medium,
                              additionalClassName: "DashboardActionGlyph",
                            }),
                            title: (0, m.Xx)("#ShowSteamUI_Steam"),
                            tooltipTranslation: S,
                            onClick: () => {
                              this.onSteamButtonPressed(r.ZP.HomeMenu);
                            },
                            additionalClassNames: "ButtonControlFixedHeight",
                          }),
                        h &&
                          l.createElement(k.zN, {
                            icon: l.createElement(oe.VC, {
                              button: re.F.QuickMenu,
                              type: oe.yV.Knockout,
                              size: oe.iM.Medium,
                              additionalClassName: "DashboardActionGlyph",
                            }),
                            title: (0, m.Xx)("#ShowSteamUI_QAM"),
                            tooltipTranslation: S,
                            onClick: () => {
                              this.onSteamButtonPressed(r.ZP.QuickMenu);
                            },
                            additionalClassNames: "ButtonControlFixedHeight",
                          }),
                        !1,
                        d &&
                          l.createElement(k.CS, {
                            tooltipTranslation: S,
                            activeOverlayKey: this.getActiveOverlayKey(),
                          }),
                        l.createElement(k.zN, {
                          iconUrl: "/dashboard/images/icons/mirror_left.png",
                          title: (0, m.Xx)("#DockOnLeftController"),
                          tooltipTranslation: S,
                          onClick: () => {
                            var e;
                            const t = this.getActiveOverlayKey();
                            (null === (e = ae.B.m_mapOverlayState.get(t)) ||
                            void 0 === e
                              ? void 0
                              : e.dockLocation) == R.RA.LeftHand
                              ? this.onDockOverlay(t, R.RA.Dashboard)
                              : this.onDockOverlay(t, R.RA.LeftHand);
                          },
                          enabled:
                            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                              r.Kg.TrackedControllerRole_LeftHand,
                            ) != r.Kf,
                          active:
                            this.getActiveOverlayDockLocation() ==
                            R.RA.LeftHand,
                        }),
                        l.createElement(k.zN, {
                          iconUrl: "/dashboard/images/icons/mirror_right.png",
                          title: (0, m.Xx)("#DockOnRightController"),
                          tooltipTranslation: S,
                          onClick: () => {
                            var e;
                            const t = this.getActiveOverlayKey();
                            (null === (e = ae.B.m_mapOverlayState.get(t)) ||
                            void 0 === e
                              ? void 0
                              : e.dockLocation) == R.RA.RightHand
                              ? this.onDockOverlay(t, R.RA.Dashboard)
                              : this.onDockOverlay(t, R.RA.RightHand);
                          },
                          enabled:
                            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                              r.Kg.TrackedControllerRole_RightHand,
                            ) != r.Kf,
                          active:
                            this.getActiveOverlayDockLocation() ==
                            R.RA.RightHand,
                        }),
                        l.createElement(k.zN, {
                          iconUrl: "/dashboard/images/icons/icon_move.png",
                          title: (0, m.Xx)("#FloatInWorld"),
                          tooltipTranslation: S,
                          onClick: () => {
                            var e;
                            const t = this.getActiveOverlayKey();
                            (0, R.fT)(
                              null === (e = ae.B.m_mapOverlayState.get(t)) ||
                                void 0 === e
                                ? void 0
                                : e.dockLocation,
                            )
                              ? this.onDockOverlay(t, R.RA.Dashboard)
                              : this.onDockOverlay(t, R.RA.World);
                          },
                          active:
                            this.getActiveOverlayDockLocation() == R.RA.World,
                        }),
                        !1,
                        c &&
                          l.createElement(k.zN, {
                            iconUrl:
                              "/dashboard/images/icons/icon_close_black.png",
                            title: (0, m.Xx)("#CloseOverlay"),
                            tooltipTranslation: S,
                            onClick: this.onActiveOverlayClosed,
                          }),
                        this.isDesktopOverlayActive() &&
                          (null === (i = this.m_refDesktopView.current) ||
                          void 0 === i
                            ? void 0
                            : i.renderControlBarButtons(S)),
                      ),
                    ),
                  ),
                ),
              ),
            );
          }
          renderLegacyHeader(e) {
            const t = ae.B.isDarkMode,
              n = t ? { r: 0.02, g: 0.02, b: 0.02 } : null,
              i = t ? 0 : 0.1,
              o = !t,
              a = !t;
            let s = null;
            return (
              this.isDesktopOverlayActive() && (s = 2048),
              l.createElement(
                l.Fragment,
                null,
                l.createElement(
                  r.wx,
                  { translation: { y: 0.008 } },
                  l.createElement(
                    r.VW,
                    { color: n },
                    l.createElement(
                      r.s_,
                      {
                        curvature_origin_id: e,
                        origin: r.Ic.BottomCenter,
                        interactive: !1,
                        target_dpi_panel_id: p.WR,
                        debug_name: "StatusBar",
                        reflect: i,
                      },
                      l.createElement(
                        "div",
                        { className: "StatusBar", style: { width: s } },
                        l.createElement(
                          "div",
                          { className: "Section Left" },
                          o && this.renderStatusBarTitle(),
                          l.createElement(k.j6, {
                            role: r.Kg.TrackedControllerRole_LeftHand,
                            style: f.A.HorizontalPips,
                          }),
                        ),
                        l.createElement(
                          "div",
                          { className: "Section Center" },
                          l.createElement(k.j6, {
                            deviceIndex: r.wU,
                            style: f.A.VerticalBattery,
                          }),
                          l.createElement(k.M3, null),
                        ),
                        l.createElement(
                          "div",
                          { className: "Section Right" },
                          l.createElement(k.j6, {
                            role: r.Kg.TrackedControllerRole_RightHand,
                            style: f.A.HorizontalPips,
                          }),
                          a &&
                            l.createElement(
                              "div",
                              { className: "SteamLogo" },
                              l.createElement("img", {
                                src: "/dashboard/images/icons/vr_steam.svg",
                              }),
                            ),
                        ),
                      ),
                    ),
                  ),
                ),
              )
            );
          }
          renderVRGamepadUIHeader(e) {
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                r.wx,
                { translation: { y: 0.01 } },
                l.createElement(
                  r.s_,
                  {
                    id: "VRGamepadUI-Header-Panel",
                    debug_name: "VRGamepadUI-Header-Panel",
                    interactive: !0,
                    curvature_origin_id: e,
                    overlay_key: p.rl,
                    origin: r.Ic.BottomCenter,
                    width: 2.667,
                    reflect: 0.01,
                  },
                  l.createElement(r.at, {
                    id: "VRGamepadUI-Header-Panel-TopCenter",
                    location: r.Ic.TopCenter,
                  }),
                ),
              ),
            );
          }
          renderDashboard() {
            var e, t, n, i;
            const o = this.computeFilteredOverlayTabs(!1),
              a = ae.B.isVRGamepadUI,
              s = a,
              d = !a || ae.B.m_bShowLegacyBar;
            let u = [],
              h = [],
              v =
                null !== (e = b.G3.settings.get(p.FM)) && void 0 !== e ? e : 2;
            if (o.length > v) {
              const e = b.G3.settings.get(p.nf);
              (u = [
                null !== (t = o.find((t) => t.summon_overlay_key == e)) &&
                void 0 !== t
                  ? t
                  : o[0],
              ]),
                (h = o.filter((e) => !u.includes(e)));
            } else u = o;
            let g = [];
            this.state.mapWindows.forEach((e) => {
              "" == e.overlay_key && g.push(e);
            });
            const _ = this.getActiveOverlayDockLocation(),
              y = (0, R.fT)(_),
              S = (0, R.sg)(_);
            let f = !1,
              C = this.getActiveOverlayKey();
            if (C) {
              let e = VRHTML.VROverlay.FindOverlay(C);
              f = !!e && VRHTML.VROverlay.GetFlag(e, r.Z9.EnableControlBar);
            }
            let w = 2,
              T = 2.5;
            const M = b.G3.settings.get("/settings/dashboard/theaterPosition");
            M == $.Near
              ? ((w *= 0.5), (T *= 0.5))
              : M == $.Middle
                ? ((w *= 1), (T *= 1))
                : M == $.Far
                  ? ((w *= 4), (T *= 2.5))
                  : M == $.Standard && ((w *= 1), (T *= 1)),
              b.G3.settings.get("/settings/dashboard/theaterVerticalOffsetCm");
            const D =
                null ===
                  (n = b.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === n ||
                n,
              I = D ? p.ml : null,
              E = { y: f ? -0.9 : -1.03375, z: 0.05 },
              V = s ? { y: -1.2, z: 0.35 } : { y: -1.2, z: 0.15 },
              x = -40,
              P = ae.B.isDarkMode ? { r: 0.05, g: 0.05, b: 0.05 } : null;
            let L = D ? 1 : 0;
            const O =
                null !==
                  (i = b.G3.settings.get(
                    "/settings/dashboard/allowFreeTransform",
                  )) &&
                void 0 !== i &&
                i,
              H = this.GetActiveOverlayAnchorIDs().strTopCenterAnchorID;
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(
                r.eK,
                {
                  bContinuousRelatch: this.state.bPlacementModeActive,
                  bFreeDashboardTransform: O && this.state.bPlacementModeActive,
                },
                l.createElement(
                  r.wx,
                  { translation: {}, parent_path: undefined },
                  l.createElement(
                    ne.Z,
                    null,
                    !1,
                    l.createElement(r.wx, { id: I, translation: { z: 1.8 } }),
                    l.createElement(
                      r.wx,
                      {
                        translation: {
                          x: 0,
                          y: J.getDashboardVerticalPosition(),
                          z: 1 * -J.getDashboardDistance(),
                        },
                        rotation: { x: 0 },
                        scale: J.getDashboardScale(),
                      },
                      l.createElement(
                        r.wx,
                        { parent_id: H },
                        a
                          ? this.renderVRGamepadUIHeader(I)
                          : this.renderLegacyHeader(I),
                      ),
                      l.createElement(
                        r.wx,
                        {
                          id: "active_overlay_transform",
                          translation: E,
                          ref: this.m_refOverlayTransform,
                        },
                        !y && S && this.renderActiveOverlay(),
                        !y &&
                          !S &&
                          l.createElement(
                            k.lL,
                            {
                              additionalClassNames: f ? "WithControlBar" : "",
                              visible: !0,
                            },
                            l.createElement(
                              "div",
                              { className: "NoDesktopFound" },
                              l.createElement(
                                "h2",
                                null,
                                this.getActiveOverlayDockLocation() ==
                                  R.RA.LeftHand &&
                                  (0, m.Xx)("#DockedOnLeftController"),
                                this.getActiveOverlayDockLocation() ==
                                  R.RA.RightHand &&
                                  (0, m.Xx)("#DockedOnRightController"),
                              ),
                              l.createElement(
                                c.z,
                                {
                                  className: "ButtonControl",
                                  onClick: () => {
                                    this.onDockOverlay(C, R.RA.Dashboard);
                                  },
                                },
                                (0, m.Xx)("#DockHere"),
                              ),
                            ),
                          ),
                      ),
                      f && S && this.renderOverlayControlBar(),
                      !1,
                      l.createElement(
                        r.wx,
                        { parent_id: s ? p.dG : p.f$ },
                        l.createElement(ie.J, {
                          bVisible: !0,
                          curvature_origin_id: I,
                          tint: P,
                          onStartMove: this.onGrabStart,
                          onEndMove: this.onGrabEnd,
                        }),
                      ),
                      l.createElement(
                        r.wx,
                        { translation: V, id: p.Qg },
                        l.createElement(r.wx, {
                          id: p.f$,
                          translation: { y: 0.08, z: -0.12 },
                        }),
                        l.createElement(
                          r.wx,
                          {
                            rotation: { x },
                            curvature_pitch: x,
                            translation: s ? { y: -0.65, z: 0.2 } : {},
                          },
                          this.renderLegacyControlBar(u, h, d),
                          !1,
                        ),
                        s &&
                          l.createElement(
                            r.wx,
                            { rotation: { x }, curvature_pitch: x },
                            this.renderVRGamepadUIBar(I),
                          ),
                        l.createElement(
                          r.wx,
                          { rotation: { x }, curvature_pitch: x },
                          this.renderKeyboard(s, P),
                        ),
                        this.state.eShowPopoverMenu == ee.Power &&
                          l.createElement(
                            r.wx,
                            {
                              translation: { x: -0.4, y: 0.15, z: 0.05 },
                              rotation: { y: 19 * L },
                            },
                            l.createElement(
                              r.s_,
                              {
                                curvature_origin_id: I,
                                height: void 0,
                                width: 0.925,
                                interactive: !0,
                                origin: r.Ic.BottomRight,
                                debug_name: "Power Menu",
                                sort_depth_bias: -0.1,
                              },
                              this.renderPowerMenu(),
                            ),
                          ),
                        this.state.eShowPopoverMenu == ee.ExternalOverlays &&
                          l.createElement(
                            r.wx,
                            {
                              translation: { x: 0.2, y: 0.15, z: 0.05 },
                              rotation: { y: 6 * L },
                            },
                            l.createElement(
                              r.s_,
                              {
                                curvature_origin_id: I,
                                height: void 0,
                                width: 0.925,
                                interactive: !0,
                                origin: r.Ic.BottomRight,
                                debug_name: "OverlaysList",
                                sort_depth_bias: -0.1,
                              },
                              this.renderPopoverMenu(
                                l.createElement(
                                  l.Fragment,
                                  null,
                                  " ",
                                  h.map((e) =>
                                    l.createElement(k.dy, {
                                      key: e.mountable_id,
                                      imageUrl: this.getDashboardIconUri(e),
                                      label: e.tab_name,
                                      onClick: () => {
                                        this.switchToOverlayInternal(
                                          e.summon_overlay_key,
                                        ),
                                          this.showPopoverMenu(ee.None);
                                      },
                                    }),
                                  ),
                                  " ",
                                ),
                              ),
                            ),
                          ),
                        this.state.eShowPopoverMenu == ee.Windows &&
                          l.createElement(
                            r.wx,
                            {
                              translation: { x: 1.25, y: -0.1, z: 0.35 },
                              rotation: { y: -16 * L },
                            },
                            l.createElement(
                              r.s_,
                              {
                                curvature_origin_id: I,
                                height: void 0,
                                width: 0.925,
                                interactive: !0,
                                origin: r.Ic.BottomRight,
                                debug_name: "WindowList",
                                sort_depth_bias: -0.1,
                              },
                              this.renderPopoverMenu(
                                l.createElement(
                                  l.Fragment,
                                  null,
                                  " ",
                                  g.map((e) =>
                                    l.createElement(k.dy, {
                                      key: e.hwnd,
                                      imageUrl:
                                        "/dashboard/images/icons/icon_add.png",
                                      label: e.title,
                                      onClick: () => {
                                        let t = {
                                          type: "request_spawn_window_view",
                                          hwnd: e.hwnd,
                                        };
                                        this.m_mailbox.SendMessage(
                                          "desktopview",
                                          t,
                                        ),
                                          this.showPopoverMenu(ee.None);
                                      },
                                    }),
                                  ),
                                  " ",
                                ),
                              ),
                            ),
                          ),
                      ),
                    ),
                  ),
                ),
              ),
            );
          }
        });
        (ue.k_sDashboardMailboxName = "systemui_dashboard"),
          (ue.k_sSetDashboardFadeSupressionMessage =
            "set_dashboard_fade_suppression"),
          (ue.k_sDashboardOverlayCreatedMessage = "dashboard_overlay_created"),
          (ue.k_sDashboardOverlayDestroyedMessage =
            "dashboard_overlay_destroyed"),
          (ue.k_sUpdateDashboardTabsMessage = "update_dashboard_tabs"),
          (ue.k_sRequestDashboardTabsMessage = "request_dashboard_tabs"),
          (ue.k_sWindowViewCreatedMessage = "window_view_created"),
          (ue.k_sWindowViewDestroyedMessage = "window_view_destroyed"),
          (ue.k_sUpdateWindowListMessage = "update_window_list"),
          (ue.k_sUpdateDebugInfoMessage = "update_debug_info"),
          (ue.k_sSetDashboardForceBoundsVisible =
            "set_dashboard_force_bounds_visible"),
          (ue.k_nControlBarWidthMeters = 2.667),
          (ue.k_nTimeLimitToReturnToActiveOverlayThatVanishedSeconds = 3),
          (ue.s_dashboardUserDistance = void 0),
          (ue.s_dashboardUserScale = void 0),
          (0, o.gn)(
            [a.ak],
            ue.prototype,
            "onSetDashboardFadeSuppression",
            null,
          ),
          (0, o.gn)([a.ak], ue.prototype, "onRoomViewChanged", null),
          (0, o.gn)([a.ak], ue.prototype, "onLinkStreamActiveEvents", null),
          (0, o.gn)([a.ak], ue.prototype, "onKeyboardVisibilityChanged", null),
          (0, o.gn)([a.ak], ue.prototype, "onGrabStart", null),
          (0, o.gn)([a.ak], ue.prototype, "onGrabEnd", null),
          (0, o.gn)(
            [a.ak],
            ue.prototype,
            "onSetDashboardForceBoundsVisible",
            null,
          ),
          (0, o.gn)([a.ak], ue.prototype, "onDashboardOverlayCreated", null),
          (0, o.gn)([a.ak], ue.prototype, "onDashboardOverlayDestroyed", null),
          (0, o.gn)([a.ak], ue.prototype, "onUpdateDashboardTabs", null),
          (0, o.gn)([a.ak], ue.prototype, "onWindowViewCreated", null),
          (0, o.gn)([a.ak], ue.prototype, "onWindowViewDestroyed", null),
          (0, o.gn)([a.ak], ue.prototype, "onUpdateWindowList", null),
          (0, o.gn)([a.ak], ue.prototype, "onUpdateDebugInfo", null),
          (0, o.gn)([a.ak], ue.prototype, "onDockOverlay", null),
          (0, o.gn)([a.ak], ue.prototype, "onShowDashboardRequested", null),
          (0, o.gn)([a.ak], ue.prototype, "onHideTheaterMode", null),
          (0, o.gn)([a.ak], ue.prototype, "onHideDashboardRequested", null),
          (0, o.gn)([a.ak], ue.prototype, "show", null),
          (0, o.gn)([a.ak], ue.prototype, "hide", null),
          (0, o.gn)([a.ak], ue.prototype, "setPlacementModeActive", null),
          (0, o.gn)([a.ak], ue.prototype, "onToggleRoomView", null),
          (0, o.gn)([a.ak], ue.prototype, "onQuickLaunchButtonClick", null),
          (0, o.gn)([a.ak], ue.prototype, "onQuickStoreButtonClick", null),
          (0, o.gn)([a.ak], ue.prototype, "onRecenterClick", null),
          (0, o.gn)([a.ak], ue.prototype, "onImmersiveRoomSetupClick", null),
          (0, o.gn)([a.ak], ue.prototype, "onToggleGamepadFocus", null),
          (0, o.gn)([a.ak], ue.prototype, "renderPowerMenu", null),
          (0, o.gn)([a.ak], ue.prototype, "startPopoverMenuTimeout", null),
          (0, o.gn)([a.ak], ue.prototype, "clearPopoverMenuTimeout", null),
          (0, o.gn)([a.ak], ue.prototype, "showPopoverMenu", null),
          (0, o.gn)([a.ak], ue.prototype, "popoverMenuMouseLeave", null),
          (0, o.gn)([a.ak], ue.prototype, "popoverMenuMouseUp", null),
          (0, o.gn)([a.ak], ue.prototype, "hasDashboardOverlay", null),
          (0, o.gn)(
            [a.ak],
            ue.prototype,
            "renderExternalOverlayControlBarButton",
            null,
          ),
          (0, o.gn)([a.ak], ue.prototype, "isDesktopTrayActive", null),
          (0, o.gn)([a.ak], ue.prototype, "isVolumeTrayActive", null),
          (0, o.gn)([a.ak], ue.prototype, "isSteamOverlayActive", null),
          (0, o.gn)([a.ak], ue.prototype, "isDesktopOverlayActive", null),
          (0, o.gn)([a.ak], ue.prototype, "handlePeerButton", null),
          (0, o.gn)([a.ak], ue.prototype, "ToggleIncognitoMode", null),
          (0, o.gn)([a.ak], ue.prototype, "ToggleVideoStream", null),
          (0, o.gn)([a.ak], ue.prototype, "getRenderModelForShape", null),
          (0, o.gn)([a.ak], ue.prototype, "isDesktopViewVisible", null),
          (0, o.gn)([a.ak], ue.prototype, "onGameLaunched", null),
          (0, o.gn)([a.ak], ue.prototype, "onAddPortal", null),
          (0, o.gn)([a.ak], ue.prototype, "onRemovePortal", null),
          (0, o.gn)([a.ak], ue.prototype, "onActiveOverlayScaleChange", null),
          (0, o.gn)([a.ak], ue.prototype, "onActiveOverlayClosed", null),
          (0, o.gn)([a.ak], ue.prototype, "onSteamButtonPressed", null),
          (0, o.gn)([s.LO], ue, "s_dashboardUserDistance", void 0),
          (0, o.gn)([s.LO], ue, "s_dashboardUserScale", void 0),
          (ue = J = (0, o.gn)([S.Pi], ue));
        const he = [
          (e) => {
            var t;
            return (
              (null === (t = e.icon()) || void 0 === t ? void 0 : t.enum()) ==
              se.mw.k_EVRDashboardTabIcon_Steam
            );
          },
          (e) => {
            var t;
            return (
              (null === (t = e.icon()) || void 0 === t ? void 0 : t.enum()) ==
              se.mw.k_EVRDashboardTabIcon_RunningGame
            );
          },
          (e) => null == e.icon(),
          (e) => {
            var t;
            return (
              (null === (t = e.icon()) || void 0 === t ? void 0 : t.enum()) ==
              se.mw.k_EVRDashboardTabIcon_DesktopDisplay
            );
          },
        ];
        function pe(e, t) {
          let n = -1,
            i = -1;
          for (let o = 0; o < he.length && n < 0 && i < 0; o++)
            he[o](e) && (n = o), he[o](t) && (i = o);
          return (
            n < 0 && (n = he.length),
            i < 0 && (i = he.length),
            n == i ? e.tab_id() - t.tab_id() : n - i
          );
        }
        function me(e, t) {
          var n, i, o, r, a, s;
          let l;
          const d =
              null !== (n = null == e ? void 0 : e.product_name) && void 0 !== n
                ? n
                : "",
            c =
              null !== (i = null == t ? void 0 : t.product_name) && void 0 !== i
                ? i
                : "";
          if (((l = d.localeCompare(c)), 0 != l)) return l;
          const u =
              null !== (o = null == e ? void 0 : e.title) && void 0 !== o
                ? o
                : "",
            h =
              null !== (r = null == t ? void 0 : t.title) && void 0 !== r
                ? r
                : "";
          if (((l = u.localeCompare(h)), 0 != l)) return l;
          const p =
              null !== (a = null == e ? void 0 : e.hwnd) && void 0 !== a
                ? a
                : "",
            m =
              null !== (s = null == t ? void 0 : t.hwnd) && void 0 !== s
                ? s
                : "";
          return p.localeCompare(m);
        }
      },
      4790: (e, t, n) => {
        "use strict";
        n.d(t, { RA: () => o, Sm: () => R, fT: () => S, sg: () => b });
        var i,
          o,
          r,
          a = n(655),
          s = n(3884),
          l = n(7056),
          d = n(7062),
          c = n(7294),
          u = n(424),
          h = n(4979),
          p = n(7176),
          m = (n(1628), n(9626)),
          v = n(421),
          g = (n(6063), n(792), n(9347)),
          _ = n(4940),
          y = n(6459);
        function b(e) {
          return e == o.Dashboard || e == o.Theater;
        }
        function S(e) {
          return e == o.World;
        }
        function f(e) {
          switch (e) {
            case o.LeftHand:
              return "/user/hand/left";
            case o.RightHand:
              return "/user/hand/right";
            default:
              return "";
          }
        }
        !(function (e) {
          (e[(e.Dashboard = 0)] = "Dashboard"),
            (e[(e.LeftHand = 1)] = "LeftHand"),
            (e[(e.RightHand = 2)] = "RightHand"),
            (e[(e.World = 3)] = "World"),
            (e[(e.Theater = 4)] = "Theater");
        })(o || (o = {})),
          (function (e) {
            (e[(e.Flat = 0)] = "Flat"), (e[(e.Curved = 1)] = "Curved");
          })(r || (r = {}));
        let R = (i = class extends c.Component {
          constructor(e) {
            super(e),
              (this.state = {
                fOverlayScale: this.getDefaultScaleForLocation(),
                xfTransform: (0, s.Oq)(),
                sParent: f(this.props.dockLocation),
                bIsOutsideMaxDist: !1,
                destination: this.props.dockLocation,
                bIsMoving: !1,
              }),
              (this.m_nMoveDeviceIndex = s.Kf),
              (this.m_moveDeviceRole = s.Kg.TrackedControllerRole_Invalid);
          }
          componentDidMount() {
            this.setInitialTransformForLocation();
          }
          componentDidUpdate(e, t) {
            e.dockLocation != this.props.dockLocation &&
              this.setState(
                {
                  sParent: f(this.props.dockLocation),
                  xfTransform: (0, s.Oq)(),
                  bIsOutsideMaxDist: !1,
                  destination: this.props.dockLocation,
                },
                this.setInitialTransformForLocation,
              );
          }
          getDashboardScale() {
            return (
              (m.B.isVRGamepadUI
                ? m.B.m_fVRGamepadUI_GlobalActiveOverlayScale
                : 1) * _.g.getDashboardScale()
            );
          }
          getCurrentOverlaySize() {
            var e;
            let t = VRHTML.VROverlay.FindOverlay(this.props.sOverlayKey);
            if (!t) return null;
            let n = { x: 0, y: 0 };
            try {
              n = VRHTML.VROverlay.GetOverlayMouseScale(t);
            } catch (e) {
              return console.log(JSON.stringify(e)), null;
            }
            let i =
                null !== (e = VRHTML.VROverlay.GetWidthInMeters(t)) &&
                void 0 !== e
                  ? e
                  : 1,
              o = (i * n.y) / n.x;
            if (
              ((this.props.sOverlayKey.startsWith(p.r4) ||
                this.props.sOverlayKey.startsWith(p.Vq)) &&
                ((o = g.N.k_nDesktopPanelBaseHeight * this.getDashboardScale()),
                (i = (o * n.x) / n.y)),
              this.m_fLastOverlayHeight && this.m_fLastOverlayHeight != o)
            ) {
              const e =
                (this.state.fOverlayScale * this.m_fLastOverlayHeight) / o;
              this.setState({ fOverlayScale: e });
            }
            return (this.m_fLastOverlayHeight = o), { width: i, height: o };
          }
          getDefaultScaleForLocation() {
            switch (this.props.dockLocation) {
              case o.Dashboard:
              case o.LeftHand:
              case o.RightHand:
                return 0.25;
              case o.World:
                const e = m.B.m_mapOverlayState.get(this.props.sOverlayKey);
                return e ? e.fScale : 1;
              case o.Theater:
                let t = this.getCurrentOverlaySize();
                return null === t || 0 == t.height ? 1 : 1 / t.height;
            }
          }
          setInitialTransformForLocation() {
            if (this.props.xfInitial) {
              switch (this.props.dockLocation) {
                case o.LeftHand:
                case o.RightHand: {
                  let e = this.state.fOverlayScale;
                  Math.abs(this.props.xfInitial.scale.x - 2) < 0.1 &&
                    (e = Math.min(2 * e, i.sfOverlayScaleMax)),
                    this.setState({
                      xfTransform: this.props.xfInitial,
                      fOverlayScale: e,
                    });
                  break;
                }
                case o.World: {
                  let e = this.state.fOverlayScale;
                  Math.abs(this.props.xfInitial.scale.x - 1) < 0.1 &&
                    (e = Math.max(e / 2, i.sfOverlayScaleMin)),
                    this.setState({
                      xfTransform: this.props.xfInitial,
                      fOverlayScale: e,
                    });
                  break;
                }
              }
              return;
            }
            let e = (0, s.Oq)();
            switch (
              ((e.rotation = (0, s.UU)({ x: -45, y: 0, z: 0 })),
              this.props.dockLocation)
            ) {
              case o.Dashboard:
              case o.LeftHand:
              case o.RightHand:
                this.setState({ xfTransform: e });
                break;
              case o.World:
                let t = 0;
                s.hz
                  .getInstance()
                  .requestSGTransform(
                    "system.systemui::active_overlay_transform",
                    t,
                  )
                  .then((t) => {
                    (e.rotation = t.rotation),
                      (e.translation = {
                        x: t.translation.x,
                        y: t.translation.y,
                        z: t.translation.z,
                      }),
                      this.setState({ xfTransform: e });
                  });
                break;
              case o.Theater:
                (e = (0, s.Oq)()),
                  (e.translation.y = 0.2),
                  (e.translation.z = -3),
                  this.setState({ xfTransform: e });
            }
          }
          onOverlayScaleChanged(e) {
            this.setState({ fOverlayScale: e });
          }
          computeDestination() {
            if (!this.state.bIsMoving) return;
            let e = VRHTML.GetPose(this.m_nMoveDeviceIndex, s.zq.Standing),
              t = null;
            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
              s.Kg.TrackedControllerRole_LeftHand,
            ) != s.Kf && (t = VRHTML.GetPose("/user/hand/left", s.zq.Standing));
            let n = null;
            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
              s.Kg.TrackedControllerRole_RightHand,
            ) != s.Kf &&
              (n = VRHTML.GetPose("/user/hand/right", s.zq.Standing));
            let r = [];
            switch (this.state.sParent) {
              case "/user/hand/left":
                n && r.push({ pose: n, location: o.RightHand });
                break;
              case "/user/hand/right":
                t && r.push({ pose: t, location: o.LeftHand });
                break;
              case "/user/head":
                t && r.push({ pose: t, location: o.LeftHand }),
                  n && r.push({ pose: n, location: o.RightHand });
            }
            if (0 == r.length)
              return void setTimeout(this.computeDestination, i.sfMovePulseMS);
            let a = VRHTML.MultiplyTransforms(
              e.xfDeviceToAbsoluteTracking,
              this.state.xfTransform,
            );
            r.forEach((e) => {
              let t = VRHTML.ChangeBasis(a, e.pose.xfDeviceToAbsoluteTracking);
              (0, s.LY)(t.translation) > i.sfMaxDockDist
                ? this.state.bIsOutsideMaxDist ||
                  (u.L.Instance.triggerHaptic(s.sH.SlidingEdge),
                  this.setState({
                    bIsOutsideMaxDist: !0,
                    destination: o.World,
                  }))
                : (this.state.bIsOutsideMaxDist ||
                    (this.props.dockLocation == o.World &&
                      this.state.destination == o.World)) &&
                  (u.L.Instance.triggerHaptic(s.sH.SlidingEdge),
                  this.setState({
                    bIsOutsideMaxDist: !1,
                    destination: e.location,
                  }));
            }),
              setTimeout(this.computeDestination, i.sfMovePulseMS);
          }
          startMove() {
            if (this.state.bIsMoving) return;
            if (
              (console.log(
                "Starting to move " + this.props.sOverlayKey + "...\n",
              ),
              (this.m_nMoveDeviceIndex =
                VRHTML.VROverlay.GetPrimaryDashboardDevice()),
              this.m_nMoveDeviceIndex == s.Kf)
            )
              return;
            this.m_moveDeviceRole =
              VRHTML.VRSystem.GetControllerRoleForTrackedDeviceIndex(
                this.m_nMoveDeviceIndex,
              );
            let e,
              t,
              n = VRHTML.GetPose(this.m_nMoveDeviceIndex, s.zq.Standing);
            switch (this.props.dockLocation) {
              case o.LeftHand:
                if (
                  VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                    s.Kg.TrackedControllerRole_LeftHand,
                  ) == s.Kf
                )
                  return;
                e = VRHTML.GetPose("/user/hand/left", s.zq.Standing);
                break;
              case o.RightHand:
                if (
                  VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                    s.Kg.TrackedControllerRole_RightHand,
                  ) == s.Kf
                )
                  return;
                e = VRHTML.GetPose("/user/hand/right", s.zq.Standing);
                break;
              default:
                e = {
                  xfDeviceToAbsoluteTracking: (0, s.Oq)(),
                  vVelocity: { x: 0, y: 0, z: 0 },
                  eTrackingResult: s.QZ.TrackingResult_Running_OK,
                  bPoseIsValid: !0,
                };
            }
            switch (this.m_moveDeviceRole) {
              case s.Kg.TrackedControllerRole_LeftHand:
                t = "/user/hand/left";
                break;
              case s.Kg.TrackedControllerRole_RightHand:
                t = "/user/hand/right";
                break;
              default:
                t = "/user/head";
            }
            let i = VRHTML.MultiplyTransforms(
                e.xfDeviceToAbsoluteTracking,
                this.state.xfTransform,
              ),
              r = VRHTML.ChangeBasis(i, n.xfDeviceToAbsoluteTracking);
            this.setState(
              {
                xfTransform: r,
                sParent: t,
                bIsOutsideMaxDist: this.props.dockLocation == o.World,
                bIsMoving: !0,
              },
              this.computeDestination,
            ),
              window.addEventListener("mouseup", this.endMove);
          }
          endMove() {
            if (!this.state.bIsMoving) return;
            let e, t;
            if (
              "/user/hand/left" == this.state.sParent ||
              this.state.destination == o.LeftHand
            ) {
              if (
                VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                  s.Kg.TrackedControllerRole_LeftHand,
                ) == s.Kf
              )
                return;
              e = VRHTML.GetPose("/user/hand/left", s.zq.Standing);
            }
            if (
              "/user/hand/right" == this.state.sParent ||
              this.state.destination == o.RightHand
            ) {
              if (
                VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                  s.Kg.TrackedControllerRole_RightHand,
                ) == s.Kf
              )
                return;
              t = VRHTML.GetPose("/user/hand/right", s.zq.Standing);
            }
            let n,
              i = {
                xfDeviceToAbsoluteTracking: (0, s.Oq)(),
                vVelocity: { x: 0, y: 0, z: 0 },
                eTrackingResult: s.QZ.TrackingResult_Running_OK,
                bPoseIsValid: !0,
              };
            switch (this.state.destination) {
              case o.LeftHand:
                n = e;
                break;
              case o.RightHand:
                n = t;
                break;
              default:
                n = i;
            }
            let r = VRHTML.GetPose(this.m_nMoveDeviceIndex, s.zq.Standing),
              a = VRHTML.MultiplyTransforms(
                r.xfDeviceToAbsoluteTracking,
                this.state.xfTransform,
              ),
              l = VRHTML.ChangeBasis(a, n.xfDeviceToAbsoluteTracking);
            this.setState({
              xfTransform: l,
              sParent: f(this.state.destination),
              bIsMoving: !1,
            }),
              this.props.onDockOverlay(
                this.props.sOverlayKey,
                this.state.destination,
                l,
              ),
              window.removeEventListener("mouseup", this.endMove);
          }
          render() {
            if ("" == this.props.sOverlayKey || null == this.state.xfTransform)
              return null;
            let e = this.getCurrentOverlaySize();
            if (null === e) return null;
            (e.width *= this.state.fOverlayScale),
              (e.height *= this.state.fOverlayScale);
            let t = !this.props.bDashboardShown;
            if (this.props.dockLocation == o.Theater) return null;
            if ((m.B.isDarkMode, t)) {
              let t = 2,
                n = (e.width, e.height);
              return c.createElement(
                s.wx,
                {
                  parent_path: this.state.sParent,
                  transform: this.state.xfTransform,
                  id: "xf_widget",
                },
                c.createElement(
                  v.Z,
                  null,
                  c.createElement(s.wx, { id: "", translation: { z: t } }),
                  c.createElement(
                    s.s_,
                    {
                      overlay_key: this.props.sOverlayKey,
                      height: n,
                      width: void 0,
                      interactive: !0,
                      undocked: !0,
                      origin: s.Ic.BottomCenter,
                      curvature_origin_id: undefined,
                    },
                    c.createElement(s.sl, {
                      mountedId: (0, s.iN)(
                        p.GN,
                        this.props.sOverlayKey + ".cursor",
                      ),
                    }),
                  ),
                  !1,
                  !1,
                  !1,
                ),
              );
            }
            let n = i.sfOverlayTrayHeight * this.getDashboardScale(),
              r = i.sfOverlayScaleMin,
              a = i.sfOverlayScaleMax,
              l = [1, 1.5];
            (this.props.dockLocation != o.LeftHand &&
              this.props.dockLocation != o.RightHand) ||
              ((n *= 0.5), (r = 0.1), (a = 1.5), (l = [0.25, 0.5, 1]));
            const d = e.height + n,
              u = Math.max(e.width, 0.175),
              g = d / 2 - n,
              _ =
                (null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.BSupportsMultitaskingView()) &&
                this.props.sOverlayKey.startsWith(p.r4),
              b = m.B.isVRGamepadUI
                ? {
                    r: (14 / 255) * 0.1,
                    g: (20 / 255) * 0.1,
                    b: (27 / 255) * 0.1,
                  }
                : { r: 0.016, g: 0.017, b: 0.02 };
            return c.createElement(
              s.kH,
              {
                sParentPath: this.state.sParent,
                bIsMoving: this.state.bIsMoving,
                xfCurrent: this.state.xfTransform,
                id: "xf_widget",
              },
              c.createElement(
                s.wx,
                {
                  translation: { y: g, z: -0.005 },
                  scale: { x: u, y: d, z: 0.008 },
                },
                c.createElement(
                  s.VW,
                  { color: b },
                  c.createElement(s.gQ, { solid: !0, source: "unit_cube" }),
                ),
              ),
              c.createElement(
                s.s_,
                {
                  overlay_key: this.props.sOverlayKey,
                  height: e.height,
                  width: void 0,
                  interactive: !0,
                  undocked: !0,
                  origin: s.Ic.BottomCenter,
                },
                c.createElement(s.sl, {
                  mountedId: (0, s.iN)(
                    p.GN,
                    this.props.sOverlayKey + ".cursor",
                  ),
                }),
              ),
              c.createElement(
                s.s_,
                {
                  height: n,
                  width: void 0,
                  interactive: !0,
                  origin: s.Ic.TopCenter,
                },
                c.createElement(
                  "div",
                  { className: "OverlayControlBar" },
                  c.createElement(
                    "div",
                    { className: "Section" },
                    c.createElement(h.iR, {
                      additionalClassName: "OverlayControlBarSlider",
                      min: r,
                      max: a,
                      value: this.state.fOverlayScale,
                      valueStyleVariant: h.px.OnHandle,
                      onChange: this.onOverlayScaleChanged,
                      detents: l,
                      renderValue: (e) => (100 * e).toFixed(0) + "%",
                    }),
                    c.createElement(y.zN, {
                      key: "move",
                      iconUrl: "/dashboard/images/icons/icon_move.png",
                      onMouseDown: this.startMove,
                      onMouseUp: this.endMove,
                    }),
                    c.createElement(y.zN, {
                      key: "undock",
                      iconUrl: "/dashboard/images/icons/icon_return.png",
                      iconIsInverted: !1,
                      onClick: () =>
                        this.props.onDockOverlay(
                          this.props.sOverlayKey,
                          o.Dashboard,
                        ),
                    }),
                    _ &&
                      c.createElement(y.zN, {
                        key: "multitask",
                        iconUrl:
                          "/dashboard/images/icons/icon_multitasking_view.png",
                        tooltipTranslation: { x: 0, y: -0.15, z: 0.1 },
                        onClick: this.props.ShowMultitaskingView,
                      }),
                  ),
                ),
              ),
              this.state.bIsMoving &&
                !this.state.bIsOutsideMaxDist &&
                c.createElement(
                  c.Fragment,
                  null,
                  c.createElement(
                    s.wx,
                    {
                      parent_path:
                        this.state.destination == o.LeftHand
                          ? "/user/hand/left"
                          : "/user/hand/right",
                    },
                    c.createElement(s.x1, {
                      target_id: "xf_widget",
                      thickness: 0.001,
                      start_buffer: 0.01,
                      end_buffer: 0.01,
                    }),
                  ),
                ),
            );
          }
        });
        (R.sfMaxDockDist = 0.4),
          (R.sfMovePulseMS = 100),
          (R.sfOverlayTrayHeight = 0.15),
          (R.sfOverlayScaleMin = 0.5),
          (R.sfOverlayScaleMax = 2),
          (0, a.gn)([l.ZP], R.prototype, "onOverlayScaleChanged", null),
          (0, a.gn)([l.ZP], R.prototype, "computeDestination", null),
          (0, a.gn)([l.ZP], R.prototype, "startMove", null),
          (0, a.gn)([l.ZP], R.prototype, "endMove", null),
          (R = i = (0, a.gn)([d.Pi], R));
      },
      1464: (e, t, n) => {
        "use strict";
        n.d(t, { a: () => u, i: () => h });
        var i = n(3884),
          o = n(7294),
          r = n(7062),
          a = n(9626),
          s = n(7176);
        function l(e) {
          const { children: t, invertParentPanelPitch: n, pitch: r } = e;
          return n || 0 != r
            ? o.createElement(
                i.wx,
                {
                  invert_parent_panel_pitch: null != n && n,
                  curvature_pitch: null != r ? r : 0,
                },
                t,
              )
            : o.createElement(o.Fragment, null, t);
        }
        function d(e) {
          const { children: t, offsetPixels: n } = e;
          if (null == n || (0 == n.x && 0 == n.y && 0 == n.z))
            return o.createElement(o.Fragment, null, t);
          const r = (0, i.mT)(n, a.B.m_fVRGamepadUI_MetersPerPixel);
          return o.createElement(i.wx, { translation: r }, t);
        }
        function c(e) {
          const { children: t, rotation: n } = e;
          return null == n || (0 == n.x && 0 == n.y && 0 == n.z)
            ? o.createElement(o.Fragment, null, t)
            : o.createElement(i.wx, { rotation: n }, t);
        }
        function u(e) {
          var t,
            n,
            r,
            u,
            h,
            p,
            m,
            v,
            g,
            _,
            y,
            b,
            S,
            f,
            R,
            k,
            C,
            w,
            T,
            M,
            D,
            I,
            E,
            V,
            x,
            P,
            L,
            O,
            H;
          const { popupRequest: B, reparent: A } = e,
            F = null == A || A,
            N = {
              x:
                null !==
                  (n =
                    null === (t = B.origin_on_parent) || void 0 === t
                      ? void 0
                      : t.x) && void 0 !== n
                  ? n
                  : 0,
              y:
                null !==
                  (u =
                    null === (r = B.origin_on_parent) || void 0 === r
                      ? void 0
                      : r.y) && void 0 !== u
                  ? u
                  : 0,
            },
            U = {
              x:
                null !==
                  (p =
                    null === (h = B.origin_on_popup) || void 0 === h
                      ? void 0
                      : h.x) && void 0 !== p
                  ? p
                  : 0,
              y:
                null !==
                  (v =
                    null === (m = B.origin_on_popup) || void 0 === m
                      ? void 0
                      : m.y) && void 0 !== v
                  ? v
                  : 0,
            },
            G = {
              u:
                null !==
                  (_ =
                    null === (g = B.clip_rect) || void 0 === g
                      ? void 0
                      : g.u_min) && void 0 !== _
                  ? _
                  : 0,
              v:
                null !==
                  (b =
                    null === (y = B.clip_rect) || void 0 === y
                      ? void 0
                      : y.v_min) && void 0 !== b
                  ? b
                  : 0,
            },
            W = {
              u:
                null !==
                  (f =
                    null === (S = B.clip_rect) || void 0 === S
                      ? void 0
                      : S.u_max) && void 0 !== f
                  ? f
                  : 1,
              v:
                null !==
                  (k =
                    null === (R = B.clip_rect) || void 0 === R
                      ? void 0
                      : R.v_max) && void 0 !== k
                  ? k
                  : 1,
            },
            z = {
              x:
                null !==
                  (w =
                    null === (C = B.offset) || void 0 === C
                      ? void 0
                      : C.x_pixels) && void 0 !== w
                  ? w
                  : 0,
              y:
                null !==
                  (M =
                    null === (T = B.offset) || void 0 === T
                      ? void 0
                      : T.y_pixels) && void 0 !== M
                  ? M
                  : 0,
              z:
                null !==
                  (I =
                    null === (D = B.offset) || void 0 === D
                      ? void 0
                      : D.z_pixels) && void 0 !== I
                  ? I
                  : 0,
            },
            K = {
              x:
                null !==
                  (V =
                    null === (E = B.rotation) || void 0 === E
                      ? void 0
                      : E.pitch_degrees) && void 0 !== V
                  ? V
                  : 0,
              y:
                null !==
                  (P =
                    null === (x = B.rotation) || void 0 === x
                      ? void 0
                      : x.yaw_degrees) && void 0 !== P
                  ? P
                  : 0,
            },
            q = null === (L = B.inherit_parent_pitch) || void 0 === L || L,
            X = null === (O = B.inherit_parent_curvature) || void 0 === O || O,
            j = null === (H = B.interactive) || void 0 === H || H,
            Q = (function (e) {
              var t, n, i;
              const o =
                  null !== (t = null == e ? void 0 : e.parent_overlay_key) &&
                  void 0 !== t
                    ? t
                    : "",
                r =
                  null !==
                    (i =
                      null === (n = null == e ? void 0 : e.offset) ||
                      void 0 === n
                        ? void 0
                        : n.z_pixels) && void 0 !== i
                    ? i
                    : 0;
              return o == s.BZ && r >= 0 ? -0.5 : 0;
            })(B);
          o.useLayoutEffect(
            () => i.n0.Current().forceLayoutUpdate(),
            [G.u, G.v, W.u, W.v],
          );
          const Z = o.createElement(
            i.at,
            { key: B.dashboard_popup_request_id, location: N },
            o.createElement(
              l,
              { invertParentPanelPitch: !q },
              o.createElement(
                d,
                { offsetPixels: z },
                o.createElement(
                  c,
                  { rotation: K },
                  o.createElement(i.s_, {
                    debug_name: `VRGamepadUI-DashboardPopup-Panel-${B.dashboard_popup_request_id}`,
                    interactive: j,
                    curvature: X ? "inherit-from-parent-panel" : void 0,
                    overlay_key: B.popup_overlay_key,
                    origin: U,
                    meters_per_pixel: a.B.m_fVRGamepadUI_MetersPerPixel,
                    reflect: 0.03,
                    sort_depth_bias: Q,
                    uv_min: G,
                    uv_max: W,
                  }),
                ),
              ),
            ),
          );
          return F
            ? o.createElement(
                i.Sb,
                {
                  parent_overlay_key: B.parent_overlay_key,
                  key: B.dashboard_popup_request_id,
                },
                Z,
              )
            : Z;
        }
        const h = (0, r.Pi)((e) => {
          const t = a.B.GetActiveDashboardPopups();
          return o.createElement(
            o.Fragment,
            null,
            t.map((e) =>
              o.createElement(u, {
                popupRequest: e,
                key: e.dashboard_popup_request_id,
              }),
            ),
          );
        });
      },
      6459: (e, t, n) => {
        "use strict";
        n.d(t, {
          B8: () => N,
          CS: () => Z,
          D6: () => j,
          Eu: () => D,
          IO: () => A,
          M3: () => P,
          NT: () => U,
          Rk: () => W,
          Yd: () => I,
          dw: () => F,
          dy: () => L,
          j4: () => z,
          j6: () => G,
          lL: () => E,
          wC: () => x,
          z: () => K,
          zN: () => Q,
          zk: () => B,
        });
        var i,
          o,
          r = n(655),
          a = n(3884),
          s = n(7056),
          l = n(2188),
          d = n(7062),
          c = n(7294),
          u = n(5177),
          h = n(9755),
          p = n(7475),
          m = n(4979),
          v = n(3107),
          g = n(2749),
          _ = n(7176),
          y = n(3568),
          b = n(7008),
          S = n(8980),
          f = n(9897),
          R = n(1628),
          k = n(8322),
          C = n.n(k),
          w = n(7726),
          T = n(7471),
          M = n(9626);
        const D = new l.vP();
        function I(e) {
          const { summonOverlayKey: t } = e,
            { ids: n, anchors: i } = c.useMemo(() => {
              const e = "DashboardPanel_" + t,
                n = {
                  strTopCenterAnchorID: e + "_TopCenter",
                  strCenterLeftAnchorID: e + "_CenterLeft",
                  strCenterRightAnchorID: e + "_CenterRight",
                  strBottomCenterAnchorID: e + "_BottomCenter",
                };
              return {
                ids: n,
                anchors: c.createElement(
                  c.Fragment,
                  null,
                  c.createElement(a.at, {
                    id: n.strTopCenterAnchorID,
                    location: a.Ic.TopCenter,
                  }),
                  c.createElement(a.at, {
                    id: n.strCenterLeftAnchorID,
                    location: a.Ic.CenterLeft,
                  }),
                  c.createElement(a.at, {
                    id: n.strCenterRightAnchorID,
                    location: a.Ic.CenterRight,
                  }),
                  c.createElement(a.at, {
                    id: n.strBottomCenterAnchorID,
                    location: a.Ic.BottomCenter,
                  }),
                ),
              };
            }, [t]);
          return (
            c.useEffect(
              () => (
                D.set(t, n),
                () => {
                  D.get(t) === n && D.delete(t);
                }
              ),
              [t, n],
            ),
            t ? i : null
          );
        }
        const E = (0, d.Pi)(function (e) {
            return c.createElement(
              V,
              Object.assign({}, e, { VRGamepadUI: M.B.isVRGamepadUI }),
            );
          }),
          V = (e) => {
            var t, n, i;
            const o = e.VRGamepadUI,
              r = c.useRef(null),
              s = c.useRef(null);
            c.useEffect(() => {
              var e, t;
              return null === (e = r.current) || void 0 === e
                ? void 0
                : e.setFloatingViewStack(
                    null === (t = s.current) || void 0 === t
                      ? void 0
                      : t.viewStack,
                  );
            });
            const l = null === (t = e.scrollable) || void 0 === t || t,
              d =
                null !== (n = e.foregroundReflectMultiplier) && void 0 !== n
                  ? n
                  : 1,
              m =
                null ===
                  (i = R.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === i ||
                i
                  ? _.ml
                  : null;
            return c.createElement(
              c.Fragment,
              null,
              c.createElement(
                a.s_,
                {
                  visibility: e.visible ? a.Bl.Visible : a.Bl.Hidden,
                  debug_name: "homepanelbackground",
                  curvature_origin_id: m,
                  origin: a.Ic.BottomCenter,
                  interactive: !1,
                  scrollable: !1,
                  target_dpi_panel_id: o ? void 0 : _.WR,
                  target_dpi_multiplier: o ? void 0 : 2,
                  width: o ? 2.67 : void 0,
                  reflect: o ? 0 : 0.01,
                  sampler: a.Vv.SingleTap,
                },
                c.createElement(I, { summonOverlayKey: e.summonOverlayKey }),
                c.createElement(
                  h.vz,
                  { ref: r },
                  c.createElement("div", {
                    className: (0, S.LJ)(
                      "DashboardPanelBackground",
                      e.additionalClassNames,
                    ),
                    style: e.additionalStyle,
                  }),
                ),
              ),
              c.createElement(
                a.wx,
                { translation: { z: 1e-5 } },
                c.createElement(
                  a.s_,
                  {
                    visibility: e.visible ? a.Bl.Visible : a.Bl.Hidden,
                    debug_name: e.debugName,
                    curvature_origin_id: m,
                    origin: a.Ic.BottomCenter,
                    interactive: !0,
                    scrollable: l,
                    target_dpi_panel_id: o ? void 0 : _.WR,
                    reflect: o ? void 0 : 0.2 * d,
                    width: o ? 2.67 : void 0,
                  },
                  c.createElement(
                    h.sC,
                    { ref: s },
                    c.createElement(
                      u.q,
                      null,
                      c.createElement(
                        p.P,
                        {
                          scrollDirection: l ? p.I.Vertical : p.I.None,
                          className: (0, S.LJ)(
                            "DashboardPanel",
                            e.additionalClassNames,
                          ),
                          style: e.additionalStyle,
                        },
                        e.children,
                      ),
                    ),
                  ),
                ),
              ),
            );
          };
        function x() {
          return c.createElement(
            "div",
            { className: "ActivitySpinner" },
            c.createElement("div", { className: "Bar" }),
            c.createElement("div", { className: "Bar" }),
            c.createElement("div", { className: "Bar" }),
          );
        }
        class P extends c.Component {
          constructor(e) {
            super(e), (this.state = { time: new Date() });
          }
          componentDidMount() {
            let e = 60 - (new Date().getSeconds() % 60) + 0.01;
            this.m_clockUpdateTimeout = window.setTimeout(
              this.updateTime,
              1e3 * e,
            );
          }
          componentWillUnmount() {
            clearTimeout(this.m_clockUpdateTimeout);
          }
          updateTime() {
            this.setState({ time: new Date() }),
              (this.m_clockUpdateTimeout = window.setTimeout(
                this.updateTime,
                6e4,
              ));
          }
          render() {
            const e = y.LJ.GetLocale();
            let t = this.state.time.toLocaleTimeString(e, {
                hour: "numeric",
                minute: "2-digit",
              }),
              n = null;
            const i = t.toLowerCase(),
              o = Math.max(i.lastIndexOf("am"), i.lastIndexOf("pm"));
            return (
              o >= 0 && ((n = t.substring(o)), (t = t.substring(0, o - 1))),
              c.createElement(
                "div",
                { className: "ClockContainer" },
                c.createElement(
                  "div",
                  { className: "Clock" },
                  t,
                  " ",
                  c.createElement("span", { className: "Suffix" }, n),
                ),
              )
            );
          }
        }
        function L(e) {
          return c.createElement(
            u.z,
            { className: "PowerMenuButton", onClick: e.onClick },
            c.createElement("div", { className: "HoverGradient" }),
            c.createElement("div", { className: "ClickGradient" }),
            c.createElement("span", null, e.label),
            e.lineBelow && c.createElement("div", { className: "LineBelow" }),
          );
        }
        (0, r.gn)([s.ak], P.prototype, "updateTime", null);
        let O = (i = class extends c.Component {
          get isShowingTooltip() {
            return i.s_CurrentlyShownTooltip === this;
          }
          show() {
            i.s_CurrentlyShownTooltip = this;
          }
          hide() {
            this.isShowingTooltip && (i.s_CurrentlyShownTooltip = null);
          }
          render() {
            var e;
            const t =
                this.props.text && (this.props.shown || this.isShowingTooltip),
              n = this.props.translation
                ? this.props.translation
                : { x: 0, y: -0.2, z: 0.05 },
              i =
                null ===
                  (e = R.G3.settings.get(
                    "/settings/dashboard/allowCurvature",
                  )) ||
                void 0 === e ||
                e
                  ? _.ml
                  : null;
            return c.createElement(
              "div",
              { style: { position: "absolute", left: "50%", top: "50%" } },
              c.createElement(
                b.d,
                { allowableParentSelectors: [".DashboardMain"] },
                c.createElement(
                  a.wx,
                  { translation: n },
                  c.createElement(
                    a.s_,
                    {
                      visibility: t ? a.Bl.Visible : a.Bl.SkipInSceneGraph,
                      target_dpi_panel_id: _.WR,
                      curvature_origin_id: i,
                    },
                    c.createElement(
                      "div",
                      { className: "ControlBarButtonTooltip" },
                      this.props.text,
                    ),
                  ),
                ),
              ),
            );
          }
        });
        (O.s_CurrentlyShownTooltip = null),
          (0, r.gn)([l.Fl], O.prototype, "isShowingTooltip", null),
          (0, r.gn)([l.aD.bound], O.prototype, "show", null),
          (0, r.gn)([l.aD.bound], O.prototype, "hide", null),
          (0, r.gn)([l.LO], O, "s_CurrentlyShownTooltip", void 0),
          (O = i = (0, r.gn)([d.Pi], O));
        class H extends c.Component {
          static ShouldInvertThumbnail(e) {
            if (!e) return !1;
            if (((e = e.toLowerCase()), !H.s_mapShouldInvertThumbnail.has(e))) {
              let t = !1;
              e.endsWith(".svg") && (t = !0),
                e.startsWith("data:") &&
                  H.k_rsThumbnailHashesToInvert.indexOf(C().hash(e)) >= 0 &&
                  (t = !0),
                H.s_mapShouldInvertThumbnail.set(e, t);
            }
            return H.s_mapShouldInvertThumbnail.get(e);
          }
          render() {
            var e;
            const t = null !== (e = this.props.shadow) && void 0 !== e && e,
              n = H.ShouldInvertThumbnail(this.props.src);
            return c.createElement(
              "div",
              { className: "Icon" },
              t &&
                c.createElement("img", {
                  className: "Shadow",
                  src: this.props.src,
                }),
              c.createElement("img", {
                className: (0, S.LJ)(["BlackToWhite", n]),
                src: this.props.src,
              }),
            );
          }
        }
        var B, A;
        (H.k_rsThumbnailHashesToInvert = [
          "5cbd0ebd6459cdaf75fdcafc5051f4e0",
          "c77452e60fc29227b33773ff6e74f8a1",
          "44b62220b39ba717fbfc65e3b4225491",
          "0ea4aa3d9529b716f0f1957684247dee",
          "86bbab56235b55f6e5e7d288342931d7",
        ]),
          (H.s_mapShouldInvertThumbnail = new Map()),
          (function (e) {
            (e[(e.Large = 0)] = "Large"),
              (e[(e.Small = 1)] = "Small"),
              (e[(e.App = 2)] = "App");
          })(B || (B = {})),
          (function (e) {
            (e[(e.Center = 0)] = "Center"), (e[(e.Fill = 1)] = "Fill");
          })(A || (A = {}));
        const F = (e) =>
          c.createElement(
            "div",
            { className: (0, S.LJ)("ControlBarGroup", B[e.style]) },
            e.children,
          );
        let N = class extends c.Component {
          constructor(e) {
            super(e), (this.m_refTooltip = c.createRef());
          }
          onMouseEnter() {
            var e, t, n;
            null === (e = this.m_refTooltip.current) ||
              void 0 === e ||
              e.show(),
              null === (n = (t = this.props).onMouseEnter) ||
                void 0 === n ||
                n.call(t);
          }
          onMouseLeave() {
            var e, t, n;
            null === (e = this.m_refTooltip.current) ||
              void 0 === e ||
              e.hide(),
              null === (n = (t = this.props).onMouseLeave) ||
                void 0 === n ||
                n.call(t);
          }
          render() {
            var e;
            return c.createElement(
              u.z,
              {
                className: (0, S.LJ)(
                  "ControlBarButton",
                  this.props.additionalClassNames,
                  A[
                    null !== (e = this.props.imageStyle) && void 0 !== e
                      ? e
                      : A.Center
                  ] + "Image",
                  ["Disabled", !1 === this.props.enabled],
                  ["Active", !!this.props.active],
                ),
                style: {
                  "--image-url": this.props.imageUrl
                    ? "url('" + this.props.imageUrl + "')"
                    : void 0,
                },
                onClick: this.props.onClick,
                onMouseDown: this.props.onMouseDown,
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave,
                releaseSoundEffect: v.y.ControlBarButtonClick,
              },
              this.props.centerPanelAnchorID &&
                c.createElement(
                  "div",
                  { style: { position: "absolute", left: "50%", top: "50%" } },
                  c.createElement(b.d, {
                    allowableParentSelectors: [".DashboardMain"],
                    panelAnchorID: this.props.centerPanelAnchorID,
                  }),
                ),
              c.createElement(O, {
                text: this.props.label,
                ref: this.m_refTooltip,
              }),
              c.createElement(H, { src: this.props.imageUrl }),
            );
          }
        };
        (0, r.gn)([s.ak], N.prototype, "onMouseEnter", null),
          (0, r.gn)([s.ak], N.prototype, "onMouseLeave", null),
          (N = (0, r.gn)([d.Pi], N));
        const U = (e) =>
          c.createElement(
            F,
            { style: e.style },
            c.createElement(N, Object.assign({}, e)),
          );
        class G extends c.Component {
          constructor(e) {
            super(e),
              (this.m_BatteryStateChangedCallbackHandle = null),
              (this.m_DeviceRoleChangedCallbackHandle = null),
              (this.m_DeviceEventCallbackHandle = null),
              (this.deviceIndex = a.Kf),
              (this.batteryLevelStable = null),
              (this.devicePowerUsage = null),
              (this.state = { batteryIconPath: null });
          }
          componentDidMount() {
            (this.m_BatteryStateChangedCallbackHandle =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.RegisterForBatteryStateChangedEvents(
                    this.onBatteryStateChanged,
                  )),
              (this.m_DeviceRoleChangedCallbackHandle =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.RegisterForDeviceRoleChangedEvents(
                      this.onDeviceRoleChanged,
                    )),
              (this.m_DeviceEventCallbackHandle =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.RegisterForDeviceEvents(this.onDeviceEvent)),
              this.update();
          }
          componentWillUnmount() {
            this.m_BatteryStateChangedCallbackHandle &&
              (this.m_BatteryStateChangedCallbackHandle.unregister(),
              (this.m_BatteryStateChangedCallbackHandle = null)),
              this.m_DeviceRoleChangedCallbackHandle &&
                (this.m_DeviceRoleChangedCallbackHandle.unregister(),
                (this.m_DeviceRoleChangedCallbackHandle = null)),
              this.m_DeviceEventCallbackHandle &&
                (this.m_DeviceEventCallbackHandle.unregister(),
                (this.m_DeviceEventCallbackHandle = null));
          }
          updateControllerStatus() {
            if (!VRHTML) return;
            let e = !1,
              t = !1,
              n = a.Kf;
            if (
              (void 0 !== this.props.role
                ? (n = VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                    this.props.role,
                  ))
                : void 0 !== this.props.deviceIndex &&
                  (n = this.props.deviceIndex),
              n != this.deviceIndex &&
                ((this.batteryLevelStable = null),
                (this.devicePowerUsage = null),
                (this.deviceIndex = n)),
              n != a.Kf)
            ) {
              if (
                ((e = VRHTML.VRProperties.GetBoolProperty(
                  n,
                  a.Uk.DeviceProvidesBatteryStatus_Bool,
                )),
                e)
              ) {
                const e = VRHTML.VRProperties.GetFloatProperty(
                  n,
                  a.Uk.DeviceBatteryPercentage_Float,
                );
                (t = VRHTML.VRProperties.GetBoolProperty(
                  n,
                  a.Uk.DeviceIsCharging_Bool,
                )),
                  null == this.batteryLevelStable ||
                  0 == this.batteryLevelStable
                    ? (this.batteryLevelStable = e)
                    : ((this.batteryLevelStable = Math.min(
                        this.batteryLevelStable,
                        e + G.kBatteryLevelHysteresis,
                        1,
                      )),
                      (this.batteryLevelStable = Math.max(
                        this.batteryLevelStable,
                        e - G.kBatteryLevelHysteresis,
                        0,
                      )));
              }
              this.devicePowerUsage = VRHTML.VRProperties.GetFloatProperty(
                n,
                a.Uk.DevicePowerUsage_Float,
              );
            }
            let i = w.X.GetBatteryIcon(
              e,
              t,
              this.batteryLevelStable,
              this.props.style,
            );
            i != this.state.batteryIconPath &&
              this.setState({ batteryIconPath: i });
          }
          update() {
            window.setTimeout(this.updateControllerStatus, 0);
          }
          onBatteryStateChanged(e) {
            this.update();
          }
          onDeviceRoleChanged() {
            this.update();
          }
          onDeviceEvent(e, t, n) {
            (e != a.XX.Activated && e != a.XX.Deactivated) || this.update();
          }
          render() {
            return c.createElement(
              "div",
              { className: "BatteryStatus" },
              this.devicePowerUsage &&
                c.createElement(
                  "div",
                  { className: "Label" },
                  " ",
                  Math.round(10 * this.devicePowerUsage) / 10,
                  " W ",
                ),
              c.createElement("img", { src: this.state.batteryIconPath }),
            );
          }
        }
        (G.kBatteryLevelHysteresis = 0.02),
          (0, r.gn)([s.ak], G.prototype, "updateControllerStatus", null),
          (0, r.gn)([s.ak], G.prototype, "onBatteryStateChanged", null),
          (0, r.gn)([s.ak], G.prototype, "onDeviceRoleChanged", null),
          (0, r.gn)([s.ak], G.prototype, "onDeviceEvent", null),
          c.Component;
        const W = (e) =>
          c.createElement(
            "div",
            { className: "Title" },
            c.createElement(H, { src: e.iconUrl, shadow: !0 }),
            c.createElement("span", { className: "NoWrapText" }, e.name),
          );
        class z extends c.Component {
          constructor() {
            super(...arguments),
              (this.m_sAnchorID = Math.round(1e7 * Math.random()).toString()),
              (this.m_resizeObserver = null),
              (this.m_refPanelElem = c.createRef()),
              (this.m_refBackgroundElem = c.createRef());
          }
          componentWillUnmount() {
            this.m_resizeObserver &&
              (this.m_resizeObserver.disconnect(),
              (this.m_resizeObserver = null));
          }
          componentDidUpdate() {
            this.updateBackgroundSize();
          }
          onResizeObserved(e, t) {
            this.updateBackgroundSize();
          }
          updateBackgroundSize() {
            this.m_refPanelElem.current &&
              this.m_refBackgroundElem.current &&
              ((this.m_refBackgroundElem.current.style.width =
                this.m_refPanelElem.current.clientWidth / 2 + "px"),
              (this.m_refBackgroundElem.current.style.height =
                this.m_refPanelElem.current.clientHeight / 2 + "px"));
          }
          onPortalDidMount() {
            this.m_refPanelElem.current &&
              ((this.m_resizeObserver = new ResizeObserver(
                this.onResizeObserved,
              )),
              this.m_resizeObserver.observe(this.m_refPanelElem.current),
              this.updateBackgroundSize());
          }
          render() {
            var e, t, n;
            const i = this.props.position,
              o = Math.asin(i) / Math.PI,
              r = null !== (e = this.props.scale) && void 0 !== e ? e : 1;
            return c.createElement(
              c.Fragment,
              null,
              c.createElement(
                a.at,
                { location: { x: i, y: -1 } },
                c.createElement(a.wx, {
                  id: this.m_sAnchorID,
                  translation: {
                    y: 0.01 * Math.abs(o),
                    z: -0.03 * Math.abs(o),
                  },
                  rotation: { y: 15 * o, z: 2 * o },
                }),
              ),
              c.createElement(
                b.R,
                {
                  allowableParentSelectors: [".DashboardMain"],
                  onPortalDidMount: this.onPortalDidMount,
                },
                c.createElement(
                  a.VW,
                  { color: this.props.tintColor },
                  c.createElement(
                    g.Ti,
                    {
                      additionalClassName: "ControlBarTrayAnimation",
                      visible: this.props.visible,
                      duration: 0.25,
                      onStartShowing: this.updateBackgroundSize,
                      onShown: this.updateBackgroundSize,
                    },
                    c.createElement(
                      a.wx,
                      {
                        parent_id: this.m_sAnchorID,
                        translation: { y: 0.04 * r, z: -0.01 },
                        scale: r,
                      },
                      c.createElement(
                        a.s_,
                        {
                          curvature_origin_id:
                            null !== (t = this.props.curvatureOriginId) &&
                            void 0 !== t
                              ? t
                              : null,
                          origin: a.Ic.TopCenter,
                          interactive: !0,
                          scrollable: !0,
                          target_dpi_panel_id: _.WR,
                          sort_depth_bias: this.props.sort_depth_bias,
                        },
                        c.createElement(
                          "div",
                          {
                            className: (0, S.LJ)(
                              "ControlBarTray",
                              this.props.additionalClassNames,
                            ),
                            onMouseEnter: this.props.onMouseEnter,
                            onMouseMove: this.props.onMouseMove,
                            onMouseLeave: this.props.onMouseLeave,
                            ref: this.m_refPanelElem,
                          },
                          this.props.children,
                        ),
                      ),
                      c.createElement(
                        a.wx,
                        { translation: { z: -1e-5 } },
                        c.createElement(
                          a.s_,
                          {
                            curvature_origin_id:
                              null !== (n = this.props.curvatureOriginId) &&
                              void 0 !== n
                                ? n
                                : null,
                            origin: a.Ic.TopCenter,
                            interactive: !1,
                            scrollable: !1,
                            target_dpi_panel_id: _.WR,
                            target_dpi_multiplier: 2,
                            reflect: 0.04,
                            sampler: a.Vv.SingleTap,
                            sort_depth_bias: this.props.sort_depth_bias,
                          },
                          c.createElement("div", {
                            className: "ControlBarTrayBackground",
                            ref: this.m_refBackgroundElem,
                          }),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            );
          }
        }
        (0, r.gn)([s.ak], z.prototype, "onResizeObserved", null),
          (0, r.gn)([s.ak], z.prototype, "updateBackgroundSize", null),
          (0, r.gn)([s.ak], z.prototype, "onPortalDidMount", null);
        let K = class extends c.Component {
          constructor() {
            super(...arguments),
              (this.m_refSlider = c.createRef()),
              (this.m_refTray = c.createRef()),
              (this.m_bMouseInSlider = !1);
          }
          get slider() {
            return this.m_refSlider.current;
          }
          onSliderMouseEnter() {
            this.m_bMouseInSlider = !0;
          }
          onSliderMouseLeave() {
            this.m_bMouseInSlider = !1;
          }
          onSliderFinalChange() {
            var e, t;
            this.m_bMouseInSlider ||
              null === (t = (e = this.props).onFinalChangeMouseOutside) ||
              void 0 === t ||
              t.call(e);
          }
          get showAudioMirrorControls() {
            return (
              R.G3.settings.get(
                "/settings/audio/enablePlaybackMirrorIndependentVolume",
              ) && R.G3.settings.get("/settings/audio/enablePlaybackMirror")
            );
          }
          get enableAudioMirrorControls() {
            return !!R.G3.settings.get(
              "/settings/audio/activePlaybackMirrorDevice",
            );
          }
          render() {
            const e =
              (this.showAudioMirrorControls ? 3 : 2) >= 3
                ? 0
                : this.props.position;
            return c.createElement(
              z,
              Object.assign({}, this.props, {
                position: e,
                ref: this.m_refTray,
                additionalClassNames: "VolumeTray",
              }),
              c.createElement(
                "div",
                { className: "Section" },
                c.createElement(
                  X,
                  {
                    onClick: f.f.Instance.toggleMicrophoneMute,
                    title: f.f.Instance.microphoneMuted
                      ? (0, y.Xx)("#UnmuteMicrophone")
                      : (0, y.Xx)("#MuteMicrophone"),
                  },
                  c.createElement("img", {
                    className: "BlackToWhite",
                    src: f.f.Instance.microphoneMuted
                      ? "/dashboard/images/icons/svr_mic_mute.svg"
                      : "/dashboard/images/icons/svr_mic_active.svg",
                  }),
                ),
                c.createElement(q, {
                  title: (0, y.Xx)("#MicrophoneVolume"),
                  value: f.f.Instance.microphoneVolume,
                  onChange: f.f.Instance.setMicrophoneVolume,
                  onMouseEnter: this.onSliderMouseEnter,
                  onMouseLeave: this.onSliderMouseLeave,
                  onFinalChange: this.onSliderFinalChange,
                  renderValue: (e) => Math.round(100 * e) + "%",
                  valueStyleVariant: m.px.OnHandle,
                  additionalClassName: (0, S.LJ)([
                    "Muted",
                    f.f.Instance.microphoneMuted,
                  ]),
                  interactionEndSoundEffect: v.y.VolumePreview,
                }),
              ),
              this.showAudioMirrorControls &&
                c.createElement(
                  "div",
                  { className: "Section" },
                  c.createElement(
                    X,
                    {
                      onClick: f.f.Instance.toggleMirrorMute,
                      enabled: this.enableAudioMirrorControls,
                      title: f.f.Instance.mirrorMuted
                        ? (0, y.Xx)("#UnmuteAudioMirror")
                        : (0, y.Xx)("#MuteAudioMirror"),
                    },
                    c.createElement("img", {
                      className: "BlackToWhite",
                      src: f.f.Instance.mirrorMuted
                        ? "/dashboard/images/icons/svr_volume_mirror_mute.svg"
                        : "/dashboard/images/icons/svr_volume_mirror.svg",
                    }),
                  ),
                  c.createElement(q, {
                    title: (0, y.Xx)("#AudioMirrorVolume"),
                    value: f.f.Instance.mirrorVolume,
                    enabled: this.enableAudioMirrorControls,
                    onChange: f.f.Instance.setMirrorVolume,
                    onMouseEnter: this.onSliderMouseEnter,
                    onMouseLeave: this.onSliderMouseLeave,
                    onFinalChange: this.onSliderFinalChange,
                    renderValue: (e) => Math.round(100 * e) + "%",
                    valueStyleVariant: m.px.OnHandle,
                    additionalClassName: (0, S.LJ)([
                      "Muted",
                      f.f.Instance.mirrorMuted,
                    ]),
                    interactionEndSoundEffect: v.y.VolumePreview,
                  }),
                ),
              c.createElement(
                "div",
                { className: "Section" },
                c.createElement(
                  X,
                  {
                    onClick: f.f.Instance.toggleMute,
                    title: f.f.Instance.muted
                      ? (0, y.Xx)("#Unmute_Headset")
                      : (0, y.Xx)("#Mute_Headset"),
                  },
                  c.createElement("img", {
                    className: "BlackToWhite",
                    src: f.f.Instance.muted
                      ? "/dashboard/images/icons/svr_volume_mute.svg"
                      : "/dashboard/images/icons/svr_volume.svg",
                  }),
                ),
                c.createElement(q, {
                  title: (0, y.Xx)("#HeadsetVolume"),
                  sliderRef: this.m_refSlider,
                  value: f.f.Instance.volume,
                  onChange: f.f.Instance.setVolume,
                  onMouseEnter: this.onSliderMouseEnter,
                  onMouseLeave: this.onSliderMouseLeave,
                  onFinalChange: this.onSliderFinalChange,
                  renderValue: (e) => Math.round(100 * e) + "%",
                  valueStyleVariant: m.px.OnHandle,
                  additionalClassName: (0, S.LJ)(["Muted", f.f.Instance.muted]),
                  interactionEndSoundEffect: v.y.VolumePreview,
                }),
              ),
            );
          }
        };
        (0, r.gn)([s.ak], K.prototype, "onSliderMouseEnter", null),
          (0, r.gn)([s.ak], K.prototype, "onSliderMouseLeave", null),
          (0, r.gn)([s.ak], K.prototype, "onSliderFinalChange", null),
          (0, r.gn)([l.Fl], K.prototype, "showAudioMirrorControls", null),
          (0, r.gn)([l.Fl], K.prototype, "enableAudioMirrorControls", null),
          (K = (0, r.gn)([d.Pi], K));
        let q = class extends c.Component {
          constructor(e) {
            super(e), (this.state = { bSliding: !1, bHover: !1 });
          }
          onMouseEnter(e) {
            var t, n;
            this.setState({ bHover: !0 }),
              null === (n = (t = this.props).onMouseEnter) ||
                void 0 === n ||
                n.call(t, e);
          }
          onMouseLeave(e) {
            var t, n;
            this.setState({ bHover: !1 }),
              null === (n = (t = this.props).onMouseLeave) ||
                void 0 === n ||
                n.call(t, e);
          }
          onInteractionStart() {
            var e, t;
            this.setState({ bSliding: !0 }),
              null === (t = (e = this.props).onInteractionStart) ||
                void 0 === t ||
                t.call(e);
          }
          onInteractionEnd() {
            var e, t;
            this.setState({ bSliding: !1 }),
              null === (t = (e = this.props).onInteractionEnd) ||
                void 0 === t ||
                t.call(e);
          }
          render() {
            let e = Object.assign({}, this.props);
            return c.createElement(
              "div",
              { className: "SliderContainer" },
              this.props.title &&
                c.createElement(O, {
                  text: this.props.title,
                  shown: this.state.bHover || this.state.bSliding,
                }),
              c.createElement(
                m.iR,
                Object.assign({}, e, {
                  onMouseEnter: this.onMouseEnter,
                  onMouseLeave: this.onMouseLeave,
                  onInteractionStart: this.onInteractionStart,
                  onInteractionEnd: this.onInteractionEnd,
                  ref: this.props.sliderRef,
                }),
              ),
            );
          }
        };
        (0, r.gn)([s.ak], q.prototype, "onMouseEnter", null),
          (0, r.gn)([s.ak], q.prototype, "onMouseLeave", null),
          (0, r.gn)([s.ak], q.prototype, "onInteractionStart", null),
          (0, r.gn)([s.ak], q.prototype, "onInteractionEnd", null),
          (q = (0, r.gn)([d.Pi], q));
        let X = class extends c.Component {
          constructor(e) {
            super(e), (this.m_refTooltip = c.createRef());
          }
          onMouseEnter(e) {
            var t, n, i;
            null === (t = this.m_refTooltip.current) ||
              void 0 === t ||
              t.show(),
              null === (i = (n = this.props).onMouseEnter) ||
                void 0 === i ||
                i.call(n, e);
          }
          onMouseLeave(e) {
            var t, n, i;
            null === (t = this.m_refTooltip.current) ||
              void 0 === t ||
              t.hide(),
              null === (i = (n = this.props).onMouseLeave) ||
                void 0 === i ||
                i.call(n, e);
          }
          render() {
            return c.createElement(
              u.z,
              Object.assign({}, this.props, {
                className: (0, S.LJ)(
                  "ButtonControl",
                  "Round",
                  this.props.className,
                ),
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave,
              }),
              this.props.title &&
                c.createElement(O, {
                  text: this.props.title,
                  ref: this.m_refTooltip,
                }),
              this.props.children,
            );
          }
        };
        (0, r.gn)([s.ak], X.prototype, "onMouseEnter", null),
          (0, r.gn)([s.ak], X.prototype, "onMouseLeave", null),
          (X = (0, r.gn)([d.Pi], X));
        let j = (o = class extends c.Component {
          constructor() {
            super(...arguments), (this.m_vecOriginalMousePosition = null);
          }
          componentWillUnmount() {
            this.stopSliding();
          }
          get slider() {
            var e;
            return null === (e = this.props.refVolumeTray.current) ||
              void 0 === e
              ? void 0
              : e.slider;
          }
          onButtonMouseDown(e) {
            var t, n;
            (this.m_vecOriginalMousePosition = { x: e.clientX, y: e.clientY }),
              window.document.addEventListener("mouseup", this.onWindowMouseUp),
              window.document.addEventListener(
                "mousemove",
                this.onWindowMouseMove,
              ),
              null === (n = (t = this.props).onShowTray) ||
                void 0 === n ||
                n.call(t);
          }
          onWindowMouseMove(e) {
            if (!this.slider || this.slider.isSliding) return;
            const t = { x: e.clientX, y: e.clientY };
            (0, a.JR)((0, a.Zj)(t, this.m_vecOriginalMousePosition)) >
              o.MIN_DRAG_THRESHOLD && this.startSliding(t);
          }
          onWindowMouseUp(e) {
            this.stopSliding();
          }
          startSliding(e) {
            var t;
            null === (t = this.slider) ||
              void 0 === t ||
              t.startExternalSliding(e);
          }
          stopSliding() {
            var e, t, n, i;
            window.document.removeEventListener(
              "mouseup",
              this.onWindowMouseUp,
            ),
              window.document.removeEventListener(
                "mousemove",
                this.onWindowMouseMove,
              ),
              (null === (e = this.slider) || void 0 === e
                ? void 0
                : e.isSliding) &&
                (null === (n = (t = this.props).onHideTray) ||
                  void 0 === n ||
                  n.call(t)),
              null === (i = this.slider) ||
                void 0 === i ||
                i.stopExternalSliding();
          }
          render() {
            return c.createElement(N, {
              imageUrl: f.f.Instance.muted
                ? "/dashboard/images/icons/svr_volume_mute.svg"
                : "/dashboard/images/icons/svr_volume.svg",
              active: this.props.active,
              label: this.props.active ? null : (0, y.Xx)("#Volume"),
              onMouseDown: this.onButtonMouseDown,
              onMouseEnter: this.props.onMouseEnter,
              onMouseLeave: this.props.onMouseLeave,
            });
          }
        });
        (j.MIN_DRAG_THRESHOLD = 35),
          (0, r.gn)([s.ak], j.prototype, "onButtonMouseDown", null),
          (0, r.gn)([s.ak], j.prototype, "onWindowMouseMove", null),
          (0, r.gn)([s.ak], j.prototype, "onWindowMouseUp", null),
          (j = o = (0, r.gn)([d.Pi], j));
        const Q = (e) => {
          var t;
          const n = c.useRef();
          return c.createElement(
            u.z,
            {
              className: (0, S.LJ)(
                "ButtonControl",
                ["Active", e.active],
                ["WithIcon", !!e.iconUrl],
                e.additionalClassNames,
              ),
              onClick: e.onClick,
              onMouseDown: e.onMouseDown,
              onMouseUp: e.onMouseUp,
              onMouseEnter: () => {
                var t;
                null === (t = n.current) || void 0 === t || t.show(),
                  e.onMouseEnter && e.onMouseEnter();
              },
              onMouseLeave: () => {
                var t;
                null === (t = n.current) || void 0 === t || t.hide(),
                  e.onMouseLeave && e.onMouseLeave();
              },
              enabled: e.enabled,
            },
            e.title &&
              c.createElement(O, {
                text: e.title,
                translation: e.tooltipTranslation,
                ref: n,
              }),
            e.label && c.createElement("span", null, e.label),
            e.iconUrl &&
              c.createElement("img", {
                className: (0, T.Z)(
                  "Icon",
                  (null === (t = e.iconIsInverted) || void 0 === t || t) &&
                    "BlackToWhite",
                ),
                src: e.iconUrl,
              }),
            e.icon,
          );
        };
        function Z(e) {
          var t;
          const n = (0, S.aB)(),
            i =
              null !== (t = null == n ? void 0 : n.visible) &&
              void 0 !== t &&
              t,
            o = c.useRef(!1);
          return c.createElement(
            Q,
            Object.assign(
              {
                iconUrl: "/dashboard/images/icons/svr_keyboard.svg",
                title: i
                  ? (0, y.Xx)("#HideKeyboardTooltip")
                  : (0, y.Xx)("#ShowKeyboardTooltip"),
                additionalClassNames: "Keyboard",
                onMouseDown: () => {
                  o.current = i;
                },
                onClick: () => {
                  o.current
                    ? VRHTML.VROverlay.HideKeyboard()
                    : (VRHTML.VROverlay.ShowKeyboardForOverlay(
                        e.activeOverlayKey,
                        a.Pw.Normal,
                        a.l0.SingleLine,
                        a.vS.Minimal,
                        "Desktop Text",
                        1024,
                        "",
                        0,
                      ),
                      VRHTML.VROverlay.SetKeyboardPositionForOverlay(
                        e.activeOverlayKey,
                        {},
                      ));
                },
                active: i,
              },
              e,
            ),
          );
        }
      },
      9347: (e, t, n) => {
        "use strict";
        n.d(t, { N: () => y, e: () => _ });
        var i,
          o,
          r = n(655),
          a = n(3884),
          s = n(7056),
          l = n(2477),
          d = n(2188),
          c = n(7062),
          u = n(7294),
          h = n(7475),
          p = n(7176),
          m = n(3568),
          v = n(1628),
          g = n(6459);
        let _ = (i = class extends u.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new a.Nv()),
              (this.m_refWindowScrollPanel = u.createRef()),
              (this.state = { desktopView: null }),
              this.m_mailbox.Init(i.k_sMailboxName);
          }
          setSiblingReferences(e) {
            this.setState({ desktopView: e });
          }
          onWindowViewCreated(e, t) {
            var n, i;
            null === (n = this.m_refWindowScrollPanel.current) ||
              void 0 === n ||
              n.scrollTo({
                left:
                  null === (i = this.m_refWindowScrollPanel.current) ||
                  void 0 === i
                    ? void 0
                    : i.scrollWidth,
                behavior: "smooth",
              });
          }
          render() {
            var e, t, n, i;
            if (
              !this.state.desktopView ||
              (null === (e = this.state.desktopView) || void 0 === e
                ? void 0
                : e.state.bIsUsingSteamDesktop)
            )
              return null;
            const o =
                this.props.bWindowViewEnabled ||
                (null === (t = this.state.desktopView) || void 0 === t
                  ? void 0
                  : t.state.desktopIndices.length) > 1,
              r = { x: 0, y: -0.15, z: 0.1 };
            return u.createElement(
              g.j4,
              Object.assign({}, this.props, {
                additionalClassNames: this.props.bWindowViewEnabled
                  ? "DesktopTray FixedWidth"
                  : "DesktopTray",
              }),
              o &&
                u.createElement(
                  h.P,
                  {
                    scrollDirection: h.I.Horizontal,
                    className: "Section Grow",
                    style: { marginRight: 0, marginLeft: "9px" },
                    ref: this.m_refWindowScrollPanel,
                  },
                  u.createElement(
                    "div",
                    {
                      style: {
                        paddingRight: "16px",
                        display: "flex",
                        flexDirection: "row",
                        margin: 0,
                      },
                    },
                    null === (n = this.state.desktopView) || void 0 === n
                      ? void 0
                      : n.state.desktopIndices.map((e) => {
                          var t;
                          return u.createElement(g.zN, {
                            additionalClassNames: "ViewButton Fixed",
                            key: e,
                            label: e.toString(),
                            active:
                              (null === (t = this.state.desktopView) ||
                              void 0 === t
                                ? void 0
                                : t.currentDesktopIndex) == e,
                            title: (0, m.Xx)("#Desktop_X", e),
                            tooltipTranslation: r,
                            onClick: () => {
                              var t;
                              return null === (t = this.state.desktopView) ||
                                void 0 === t
                                ? void 0
                                : t.onDesktopChange(e);
                            },
                          });
                        }),
                    Array.from(
                      null === (i = this.state.desktopView) || void 0 === i
                        ? void 0
                        : i.state.mapWindowInfo.keys(),
                    ).map((e) => {
                      var t, n, i;
                      return u.createElement(g.zN, {
                        additionalClassNames: "ViewButton",
                        iconUrl: "/dashboard/images/icons/svr_desktop_alt.svg",
                        key: e,
                        active:
                          (null === (t = this.state.desktopView) || void 0 === t
                            ? void 0
                            : t.state.sCurrentWindowOverlayKey) == e,
                        title:
                          null ===
                            (i = this.props.mapWindows.get(
                              null === (n = this.state.desktopView) ||
                                void 0 === n
                                ? void 0
                                : n.state.mapWindowInfo.get(e).sHwnd,
                            )) || void 0 === i
                            ? void 0
                            : i.title,
                        tooltipTranslation: r,
                        onClick: () => {
                          var t;
                          return null === (t = this.state.desktopView) ||
                            void 0 === t
                            ? void 0
                            : t.onWindowViewChange(e);
                        },
                      });
                    }),
                  ),
                ),
              this.props.bWindowViewEnabled &&
                u.createElement(
                  "div",
                  { className: "Section", style: { marginRight: 0 } },
                  u.createElement(g.zN, {
                    iconUrl: "/dashboard/images/icons/icon_add.png",
                    additionalClassNames: "AddWindow",
                    title: (0, m.Xx)("#AddView"),
                    tooltipTranslation: r,
                    onClick: this.props.onToggleWindowList,
                    onMouseEnter: this.props.onClearPopoverMenuTimeout,
                    onMouseLeave: () =>
                      this.props.onStartPopoverMenuTimeout(500),
                  }),
                ),
            );
          }
        });
        (_.k_sMailboxName = "systemui_desktoptray"),
          (_ = i = (0, r.gn)([c.Pi], _));
        let y = (o = class extends u.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new a.Nv()),
              (this.state = {
                bIsUsingSteamDesktop: !1,
                bIsReady: !1,
                desktopIndices: [],
                mapWindowInfo: new Map(),
                sCurrentWindowOverlayKey: "",
              }),
              this.m_mailbox.Init(o.k_sMailboxName).then(() => {}),
              l.Q.SteamVR.SetImplementation(
                "DashboardDesktopWindowClicked",
                (e) => {
                  var t, n;
                  const i =
                    null !==
                      (n =
                        null === (t = e.window_id) || void 0 === t
                          ? void 0
                          : t.toString()) && void 0 !== n
                      ? n
                      : "";
                  for (const [e, t] of this.state.mapWindowInfo.entries())
                    if (t.sHwnd == i)
                      return (
                        this.onWindowViewChange(e),
                        void VRHTML.VROverlay.ShowDashboard(p.gB)
                      );
                  const o = { type: "request_spawn_window_view", hwnd: i };
                  if (!this.m_mailbox.SendMessage("desktopview", o))
                    throw new Error(
                      "Failed to send mailbox message request_spawn_window_view",
                    );
                },
              );
          }
          componentDidMount() {
            null ===
            (null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VROverlay.FindOverlay(p.Xl))
              ? (null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.RegisterForDesktopViewReadyEvents(
                    this.onDesktopViewReady,
                  ),
                null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.RegisterForDesktopViewUpdatingEvents(
                    this.onDesktopViewUpdating,
                  ),
                this.updateDesktopIndices())
              : this.setState({ bIsUsingSteamDesktop: !0 });
          }
          get desktopCount() {
            return this.state.desktopIndices.length;
          }
          get sCurrentOverlayKey() {
            return "" != this.state.sCurrentWindowOverlayKey
              ? this.state.sCurrentWindowOverlayKey
              : "system.desktop." + this.currentDesktopIndex;
          }
          get currentDesktopIndex() {
            var e;
            return "" != this.state.sCurrentWindowOverlayKey
              ? -1
              : null !==
                    (e = v.G3.settings.get(
                      "/settings/dashboard/desktopIndex",
                    )) && void 0 !== e
                ? e
                : 1;
          }
          get currentWindowHwnd() {
            return "" == this.state.sCurrentWindowOverlayKey
              ? ""
              : this.state.mapWindowInfo.get(
                  this.state.sCurrentWindowOverlayKey,
                ).sHwnd;
          }
          onDesktopScaleChange(e) {
            this.currentDesktopIndex > 0 &&
              v.G3.SetSettingsValue(
                "/settings/dashboard/desktopScale" + this.currentDesktopIndex,
                e,
              );
          }
          onDesktopChange(e) {
            v.G3.SetSettingsValue("/settings/dashboard/desktopIndex", e),
              this.setState({ sCurrentWindowOverlayKey: "" });
          }
          onDesktopViewUpdating() {
            this.setState({ bIsReady: !1, desktopIndices: [] });
          }
          onDesktopViewReady() {
            this.updateDesktopIndices();
          }
          onWindowViewCreated(e, t) {
            this.state.mapWindowInfo.set(e, { sHwnd: t }),
              this.setState({ sCurrentWindowOverlayKey: e });
          }
          onWindowViewClosed(e) {
            this.state.sCurrentWindowOverlayKey == e && this.onDesktopChange(1);
          }
          onWindowViewDestroyed(e) {
            this.state.mapWindowInfo.delete(e);
          }
          onWindowViewChange(e) {
            this.setState({ sCurrentWindowOverlayKey: e });
          }
          hasWindowView(e) {
            return this.state.mapWindowInfo.has(e);
          }
          updateDesktopIndices() {
            var e;
            let t = 1,
              n = [];
            for (
              ;
              null !==
              (null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VROverlay.FindOverlay("system.desktop." + t));
            )
              n.push(t), t++;
            (null !==
              (e = v.G3.settings.get("/settings/dashboard/desktopIndex")) &&
            void 0 !== e
              ? e
              : 1) > n.length &&
              v.G3.SetSettingsValue("/settings/dashboard/desktopIndex", 1),
              this.setState({ bIsReady: !0, desktopIndices: n });
          }
          ShowMultitaskingView() {
            this.m_mailbox.SendMessage("desktopview", {
              type: "request_task_view",
            });
          }
          renderControlBarButtons(e) {
            const t =
              (null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.BSupportsMultitaskingView()) &&
              "" == this.state.sCurrentWindowOverlayKey;
            return u.createElement(
              u.Fragment,
              null,
              t &&
                u.createElement(g.zN, {
                  iconUrl: "/dashboard/images/icons/icon_multitasking_view.png",
                  title: (0, m.Xx)("#MultitaskingView"),
                  tooltipTranslation: e,
                  onClick: this.ShowMultitaskingView,
                }),
            );
          }
          render() {
            var e;
            const t =
              null ===
                (e = v.G3.settings.get("/settings/dashboard/allowCurvature")) ||
              void 0 === e ||
              e
                ? p.ml
                : null;
            return this.props.visible
              ? this.state.bIsUsingSteamDesktop
                ? u.createElement(a.sl, { mountedId: (0, a.iN)(p.GN, p.Xl) })
                : this.state.bIsReady
                  ? 0 === this.state.desktopIndices.length
                    ? u.createElement(
                        g.lL,
                        { visible: !0, summonOverlayKey: p.gB },
                        u.createElement(
                          "div",
                          { className: "NoDesktopFound" },
                          u.createElement(
                            "h2",
                            null,
                            (0, m.Xx)("#NoDesktopFound"),
                          ),
                        ),
                      )
                    : -1 == this.currentDesktopIndex
                      ? u.createElement(
                          u.Fragment,
                          null,
                          u.createElement(
                            a.s_,
                            {
                              overlay_key: this.state.sCurrentWindowOverlayKey,
                              height: o.k_nDesktopPanelBaseHeight,
                              curvature_origin_id: t,
                              interactive: !0,
                              origin: a.Ic.BottomCenter,
                              debug_name: "System Desktop",
                            },
                            u.createElement(g.Yd, { summonOverlayKey: p.gB }),
                            u.createElement(a.sl, {
                              mountedId: (0, a.iN)(
                                p.GN,
                                this.state.sCurrentWindowOverlayKey + ".cursor",
                              ),
                            }),
                          ),
                        )
                      : u.createElement(
                          u.Fragment,
                          null,
                          u.createElement(
                            a.s_,
                            {
                              overlay_key:
                                "system.desktop." + this.currentDesktopIndex,
                              height: o.k_nDesktopPanelBaseHeight,
                              curvature_origin_id: t,
                              interactive: !0,
                              origin: a.Ic.BottomCenter,
                              debug_name: "System Desktop",
                            },
                            u.createElement(g.Yd, { summonOverlayKey: p.gB }),
                            u.createElement(a.sl, {
                              mountedId: (0, a.iN)(
                                p.GN,
                                "system.desktop." +
                                  this.currentDesktopIndex +
                                  ".cursor",
                              ),
                            }),
                          ),
                        )
                  : u.createElement(
                      g.lL,
                      { visible: !0, summonOverlayKey: p.gB },
                      u.createElement(
                        "div",
                        { className: "NoDesktopFound" },
                        u.createElement(
                          "h2",
                          null,
                          (0, m.Xx)("#DesktopViewsUpdating"),
                        ),
                      ),
                    )
              : null;
          }
        });
        (y.k_sMailboxName = "systemui_desktopview"),
          (y.k_nDesktopPanelBaseHeight = 2),
          (0, r.gn)([d.Fl], y.prototype, "desktopCount", null),
          (0, r.gn)([d.Fl], y.prototype, "sCurrentOverlayKey", null),
          (0, r.gn)([d.Fl], y.prototype, "currentDesktopIndex", null),
          (0, r.gn)([d.Fl], y.prototype, "currentWindowHwnd", null),
          (0, r.gn)([s.ZP], y.prototype, "onDesktopScaleChange", null),
          (0, r.gn)([s.ZP], y.prototype, "onDesktopChange", null),
          (0, r.gn)([s.ZP], y.prototype, "onDesktopViewUpdating", null),
          (0, r.gn)([s.ZP], y.prototype, "onDesktopViewReady", null),
          (0, r.gn)([s.ZP], y.prototype, "onWindowViewChange", null),
          (0, r.gn)([s.ZP], y.prototype, "ShowMultitaskingView", null),
          (y = o = (0, r.gn)([c.Pi], y));
      },
      6063: (e, t, n) => {
        "use strict";
        n.d(t, { J: () => h });
        var i = n(655),
          o = n(7294),
          r = n(7056),
          a = n(3884),
          s = n(7062),
          l = n(5177),
          d = n(4940),
          c = n(421),
          u = n(8980);
        let h = class extends o.Component {
          constructor(e) {
            super(e),
              (this.state = {
                xfTransform: this.props.xfTransform
                  ? this.props.xfTransform
                  : (0, a.Oq)(),
                bActive: !1,
              });
          }
          componentDidUpdate(e, t) {
            e.bVisible != this.props.bVisible &&
              (this.props.bVisible || this.endMove()),
              e.xfTransform != this.props.xfTransform &&
                this.setState({
                  xfTransform: this.props.xfTransform
                    ? this.props.xfTransform
                    : (0, a.Oq)(),
                });
          }
          startMove() {
            let e,
              t = VRHTML.VROverlay.GetPrimaryDashboardDevice();
            if (t != a.Kf) {
              switch (
                VRHTML.VRSystem.GetControllerRoleForTrackedDeviceIndex(t)
              ) {
                case a.Kg.TrackedControllerRole_LeftHand:
                  e = "/user/hand/left/pose/tip";
                  break;
                case a.Kg.TrackedControllerRole_RightHand:
                  e = "/user/hand/right/pose/tip";
                  break;
                default:
                  e = "/user/head";
              }
              this.context.setState({ sParent: e }),
                this.setState({ bActive: !0 }),
                window.addEventListener("mouseup", this.endMove),
                this.props.onStartMove && this.props.onStartMove();
            }
          }
          endMove() {
            this.context.setState({ sParent: "", nHandleSGID: 0 }),
              this.setState({ bActive: !1 }),
              window.removeEventListener("mouseup", this.endMove),
              this.props.onEndMove && this.props.onEndMove();
          }
          render() {
            var e;
            if (null == this.state.xfTransform) return null;
            const t = null !== (e = this.props.scale) && void 0 !== e ? e : 1;
            return o.createElement(
              o.Fragment,
              null,
              " ",
              this.props.bVisible &&
                o.createElement(
                  a.wx,
                  null,
                  o.createElement(
                    a.Dd,
                    { value: this.props.opacity },
                    " ",
                    o.createElement(
                      a.VW,
                      { color: this.props.tint },
                      o.createElement(
                        a.s_,
                        {
                          width: 0.25 * d.g.k_nControlBarWidthMeters * t,
                          interactive: !0,
                          requires_laser: !0,
                          debug_name: "DashboardGrabHandle",
                          origin: a.Ic.BottomCenter,
                          curvature_origin_id: this.props.curvature_origin_id,
                          hide_lasermouse_when_clicking: !0,
                          interaction_dismisses_keyboard: !1,
                        },
                        o.createElement(
                          l.z,
                          {
                            className: "GrabHandleButton",
                            key: "move",
                            onMouseDown: this.startMove,
                            onMouseUp: this.endMove,
                          },
                          o.createElement("div", {
                            className: (0, u.LJ)("GrabHandleBar", [
                              "ForceActive",
                              this.state.bActive,
                            ]),
                          }),
                        ),
                      ),
                    ),
                    " ",
                  ),
                  " ",
                ),
              " ",
            );
          }
        };
        (h.contextType = c.E),
          (0, i.gn)([r.ZP], h.prototype, "startMove", null),
          (0, i.gn)([r.ZP], h.prototype, "endMove", null),
          (h = (0, i.gn)([s.Pi], h));
      },
      421: (e, t, n) => {
        "use strict";
        n.d(t, { E: () => s, Z: () => l });
        var i = n(655),
          o = n(3884),
          r = n(7062),
          a = n(7294);
        const s = a.createContext(void 0);
        let l = class extends a.Component {
          constructor(e) {
            super(e), (this.state = { xfTransform: (0, o.Oq)(), sParent: "" });
          }
          render() {
            return a.createElement(
              o.sO,
              {
                sParentPath: this.state.sParent,
                xfCurrent: this.state.xfTransform,
                id: this.props.id,
              },
              a.createElement(s.Provider, { value: this }, this.props.children),
            );
          }
        };
        l = (0, i.gn)([r.Pi], l);
      },
      16: (e, t, n) => {
        "use strict";
        n.d(t, { BB: () => h, KU: () => p, Y6: () => m });
        var i,
          o = n(655),
          r = n(7294),
          a = n(7056),
          s = n(3884),
          l = n(3568),
          d = n(7062),
          c = n(8980),
          u = n(1628);
        const h = "resetuniverseorigincountdown",
          p = "begin_reset_universe_origin_countdown";
        let m = (i = class extends r.Component {
          constructor(e) {
            super(e),
              (this.m_countdownTimeout = 0),
              (this.m_fadeFinishTimeout = 0),
              (this.m_mailbox = new s.Nv()),
              this.m_mailbox.Init(h).then(() => {
                this.m_mailbox.RegisterHandler(
                  p,
                  this.OnBeginResetUniverseOriginCountdown,
                );
              }),
              (this.state = {
                visible: !1,
                fading: !1,
                countdown_seconds: 0,
                bDashboardPlacementActive: !1,
              });
          }
          componentWillUnmount() {
            clearTimeout(this.m_countdownTimeout),
              (this.m_countdownTimeout = setTimeout(this.CountdownTick, 1e3)),
              clearTimeout(this.m_fadeFinishTimeout),
              (this.m_fadeFinishTimeout = 0);
          }
          OnBeginResetUniverseOriginCountdown(e) {
            clearTimeout(this.m_countdownTimeout),
              (this.m_countdownTimeout = setTimeout(this.CountdownTick, 1e3)),
              clearTimeout(this.m_fadeFinishTimeout),
              (this.m_fadeFinishTimeout = 0);
            let t = !1;
            if (
              u.G3.settings.get(
                "/settings/dashboard/allowPlacementDuringRecenter",
              )
            ) {
              const e =
                null === s.Co || void 0 === s.Co
                  ? void 0
                  : s.Co.VRApplications.GetSceneApplicationKey();
              t = !e || "system.generated.xrservice" == e;
            }
            t
              ? this.props.dashboardRef.current &&
                this.props.dashboardRef.current.setPlacementModeActive(!0)
              : null === s.Co ||
                void 0 === s.Co ||
                s.Co.VRDashboardManager.HideDashboard("reset_universe_origin"),
              this.setState({
                visible: !0,
                fading: !1,
                countdown_seconds: e.countdown_seconds,
                bDashboardPlacementActive: t,
              });
          }
          CountdownTick() {
            clearTimeout(this.m_countdownTimeout),
              1 == this.state.countdown_seconds
                ? ((this.m_countdownTimeout = 0),
                  this.state.bDashboardPlacementActive &&
                    this.props.dashboardRef.current &&
                    this.props.dashboardRef.current.setPlacementModeActive(!1),
                  null === s.Co ||
                    void 0 === s.Co ||
                    s.Co.VRChaperone.ResetZeroPose(s.zq.Seated),
                  null === s.Co ||
                    void 0 === s.Co ||
                    s.Co.VRChaperone.ResetZeroPose(s.zq.Standing),
                  clearTimeout(this.m_fadeFinishTimeout),
                  (this.m_fadeFinishTimeout = setTimeout(
                    this.HideOverlay,
                    i.kFadeDurationMs,
                  )),
                  this.setState({
                    visible: !0,
                    fading: !0,
                    countdown_seconds: 0,
                    bDashboardPlacementActive: !1,
                  }))
                : ((this.m_countdownTimeout = setTimeout(
                    this.CountdownTick,
                    1e3,
                  )),
                  this.setState({
                    visible: !0,
                    fading: !1,
                    countdown_seconds: this.state.countdown_seconds - 1,
                  }));
          }
          HideOverlay() {
            clearTimeout(this.m_fadeFinishTimeout),
              (this.m_fadeFinishTimeout = 0),
              this.setState({ visible: !1, fading: !1, countdown_seconds: 0 });
          }
          renderPanel() {
            return r.createElement(
              s.s_,
              {
                width: void 0,
                height: i.kPanelHeight,
                interactive: !1,
                sort_order: 1e3,
              },
              r.createElement(
                "div",
                {
                  className: (0, c.LJ)("ResetSeatedCountdownParent", [
                    "Fading",
                    this.state.fading,
                  ]),
                  style: { width: i.kPixelWidth },
                },
                r.createElement(
                  "div",
                  { className: "FlexColumn" },
                  r.createElement(
                    "div",
                    { className: "ResetSeatedCountdownRow" },
                    r.createElement(
                      "div",
                      { className: "ResetSeatedCountdownText" },
                      this.state.countdown_seconds,
                    ),
                  ),
                  r.createElement(
                    "div",
                    { className: "ResetSeatedCountdownTextDesc" },
                    (0, l.Xx)("#Recentering_Countdown"),
                  ),
                ),
              ),
            );
          }
          render() {
            var e, t;
            if (!this.state.visible) return null;
            let n =
                0.8 *
                (null !==
                  (e =
                    null === s.Co || void 0 === s.Co
                      ? void 0
                      : s.Co.VRProperties.GetFloatProperty(
                          s.wU,
                          s.Uk.DashboardScale_Float,
                        )) && void 0 !== e
                  ? e
                  : 1),
              i =
                null !==
                  (t = u.G3.settings.get(
                    "/settings/dashboard/allowFreeTransform",
                  )) &&
                void 0 !== t &&
                t;
            return this.state.bDashboardPlacementActive
              ? r.createElement(
                  s.eK,
                  { bContinuousRelatch: !0, bFreeDashboardTransform: i },
                  r.createElement(
                    s.wx,
                    { translation: { y: -0.05, z: -0.9 }, scale: n },
                    this.renderPanel(),
                  ),
                )
              : r.createElement(
                  s.wx,
                  { parent_path: "/user/head" },
                  r.createElement(
                    s.wx,
                    { translation: { y: -0.05, z: -0.9 }, scale: n },
                    this.renderPanel(),
                  ),
                );
          }
        });
        (m.kPanelHeight = 0.2),
          (m.kPixelWidth = 400),
          (m.kFadeDurationMs = 1e3),
          (0, o.gn)(
            [a.ak],
            m.prototype,
            "OnBeginResetUniverseOriginCountdown",
            null,
          ),
          (0, o.gn)([a.ak], m.prototype, "CountdownTick", null),
          (0, o.gn)([a.ak], m.prototype, "HideOverlay", null),
          (m = i = (0, o.gn)([d.Pi], m));
      },
      9850: (e, t, n) => {
        "use strict";
        var i,
          o = n(655),
          r = n(7294),
          a = n(3935),
          s = n(7056),
          l = n(3884),
          d = n(7062),
          c = n(8980);
        let u = (i = class extends r.Component {
          constructor(e) {
            super(e),
              (this.m_fadeFinishTimeout = 0),
              (this.m_countdownTimeout = 0),
              (this.m_mailbox = new l.Nv()),
              this.m_mailbox.Init("roomsetup-ui").then(() => {
                this.m_mailbox.RegisterHandler(
                  "floorHeightUpdated",
                  this.OnFloorHeightUpdated,
                ),
                  this.m_mailbox.RegisterHandler(
                    "secondsRemainingUpdate",
                    this.OnSecondRemainingUpdate,
                  ),
                  this.m_mailbox.RegisterHandler(
                    "hideRoomSetupUI",
                    this.StartFadeout,
                  ),
                  this.m_mailbox.RegisterHandler("showRoomSetupUI", this.Show);
              }),
              (this.state = {
                visible: !1,
                fading: !1,
                secondsRemaining: null,
                floorId: null,
              });
          }
          componentWillUnmount() {
            clearTimeout(this.m_fadeFinishTimeout),
              (this.m_fadeFinishTimeout = 0);
          }
          OnFloorHeightUpdated(e) {
            null ===
            ("number" == typeof e.floorHeightAtHead
              ? e.floorHeightAtHead
              : null)
              ? this.StartFadeout()
              : e.floorId != this.state.floorId &&
                "number" == typeof e.floorId &&
                this.setState({
                  visible: !0,
                  fading: !1,
                  floorId: e.floorId,
                  secondsRemaining: null,
                });
          }
          OnSecondRemainingUpdate(e) {
            this.setState({ secondsRemaining: e.timeRemaining });
          }
          StartFadeout() {
            this.state.visible &&
              !this.state.fading &&
              (clearTimeout(this.m_fadeFinishTimeout),
              (this.m_fadeFinishTimeout = setTimeout(
                this.HideImmediate,
                i.kFadeDurationMs,
              )),
              this.setState({ visible: !0, fading: !0 }));
          }
          Show() {
            this.setState({ visible: !0, fading: !1 });
          }
          HideImmediate() {
            clearTimeout(this.m_fadeFinishTimeout),
              clearTimeout(this.m_countdownTimeout),
              (this.m_fadeFinishTimeout = 0),
              (this.m_countdownTimeout = 0),
              this.setState({ visible: !1, fading: !1 });
          }
          onRecenterButtonClick() {
            this.m_mailbox.SendMessage("roomsetup-controller", {
              type: "onRecenterButtonClick",
            }),
              this.StartFadeout();
          }
          onAdjustButtonClick() {
            this.m_mailbox.SendMessage("roomsetup-controller", {
              type: "onAdjustButtonClick",
            }),
              this.StartFadeout();
          }
          render() {
            return this.state.visible
              ? (console.log(
                  "Render: fading " + JSON.stringify(this.state.fading),
                ),
                r.createElement(
                  l.wx,
                  { parent_path: "/user/head" },
                  r.createElement(
                    l.wx,
                    {
                      translation: {
                        y: -0.4 * i.kOverlayMetersScaler,
                        z: -1 * i.kOverlayMetersScaler,
                      },
                      rotation: { x: -28 },
                    },
                    r.createElement(
                      l.s_,
                      { width: void 0, height: 0.15, interactive: !0 },
                      r.createElement(
                        "div",
                        {
                          className: (0, c.LJ)("ResetSeatedCountdownParent", [
                            "Fading",
                            this.state.fading,
                          ]),
                        },
                        r.createElement(
                          "div",
                          { className: "FlexColumn" },
                          r.createElement(
                            "div",
                            {
                              className: "Label IPDSettingTextDesc",
                              style: { padding: "10px" },
                            },
                            " Floor Was Updated ",
                          ),
                          r.createElement(
                            "div",
                            { className: "FlexRow" },
                            r.createElement(
                              "div",
                              {
                                className: "Label ButtonControl",
                                onClick: this.onAdjustButtonClick,
                              },
                              " Adjust ",
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ))
              : null;
          }
        });
        var h;
        (u.kFadeDurationMs = 1e3),
          (u.kOverlayMetersScaler = 0.75),
          (0, o.gn)([s.ak], u.prototype, "OnFloorHeightUpdated", null),
          (0, o.gn)([s.ak], u.prototype, "OnSecondRemainingUpdate", null),
          (0, o.gn)([s.ak], u.prototype, "StartFadeout", null),
          (0, o.gn)([s.ak], u.prototype, "Show", null),
          (0, o.gn)([s.ak], u.prototype, "HideImmediate", null),
          (0, o.gn)([s.ak], u.prototype, "onRecenterButtonClick", null),
          (0, o.gn)([s.ak], u.prototype, "onAdjustButtonClick", null),
          (u = i = (0, o.gn)([d.Pi], u)),
          (function (e) {
            (e[(e.FindFloor_Touch = 0)] = "FindFloor_Touch"),
              (e[(e.FindFloor_Height = 1)] = "FindFloor_Height"),
              (e[(e.Room_Walls = 2)] = "Room_Walls"),
              (e[(e.SaveSuccessful = 3)] = "SaveSuccessful"),
              (e[(e.SaveFailed = 4)] = "SaveFailed");
          })(h || (h = {}));
        class p extends r.Component {
          constructor(e) {
            if ((super(e), !VRHTML)) throw new Error("VRHTML is required.");
            (this.state = {
              phase: h.FindFloor_Touch,
              qRawFromRoom: { w: 1, x: 0, y: 0, z: 0 },
              qRoomFromRaw: { w: 1, x: 0, y: 0, z: 0 },
              vMin: { x: 0, y: 0, z: 0 },
              vMax: { x: 0, y: 0, z: 0 },
              vStartingHmdPosition: { x: 0, y: 0, z: 0 },
              fUserHeight: 196,
            }),
              (this.animationFrameHandle = window.requestAnimationFrame(
                this.onAnimationFrame,
              ));
          }
          componentDidMount() {
            this.computeDirectionFromHeadset(), this.resetBoundsToDefault(!0);
          }
          componentWillUnmount() {
            window.cancelAnimationFrame(this.animationFrameHandle),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRChaperone.ForceBoundsVisible(!1),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRChaperoneSetup.HideWorkingSetPreview(),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRChaperoneSetup.RevertWorkingCopy();
          }
          updateLimitsUsingDevice(e) {
            let t = null;
            try {
              t = VRHTML.GetPose(e, l.zq.RawAndUncalibrated);
            } catch (e) {
              return;
            }
            if (!t.bPoseIsValid) return;
            let n = t.xfDeviceToAbsoluteTracking,
              i = (0, l.Fx)(this.state.qRoomFromRaw, n.translation);
            switch (this.state.phase) {
              case h.FindFloor_Touch:
                i.y < this.state.vMin.y &&
                  this.setState({
                    vMin: {
                      x: this.state.vMin.x,
                      y: i.y,
                      z: this.state.vMin.z,
                    },
                  }),
                  i.y > this.state.vMax.y &&
                    this.setState({
                      vMax: {
                        x: this.state.vMax.x,
                        y: i.y,
                        z: this.state.vMax.z,
                      },
                    });
                break;
              case h.Room_Walls:
                i.x < this.state.vMin.x &&
                  this.setState({
                    vMin: {
                      x: i.x,
                      y: this.state.vMin.y,
                      z: this.state.vMin.z,
                    },
                  }),
                  i.x > this.state.vMax.x &&
                    this.setState({
                      vMax: {
                        x: i.x,
                        y: this.state.vMax.y,
                        z: this.state.vMax.z,
                      },
                    }),
                  i.z < this.state.vMin.z &&
                    this.setState({
                      vMin: {
                        x: this.state.vMin.x,
                        y: this.state.vMin.y,
                        z: i.z,
                      },
                    }),
                  i.z > this.state.vMax.z &&
                    this.setState({
                      vMax: {
                        x: this.state.vMax.x,
                        y: this.state.vMax.y,
                        z: i.z,
                      },
                    });
            }
          }
          onAnimationFrame() {
            if (VRHTML) {
              switch (this.state.phase) {
                case h.FindFloor_Touch:
                case h.Room_Walls:
                  this.updateLimitsUsingDevice("/user/head"),
                    this.updateLimitsUsingDevice("/user/hand/right"),
                    this.updateLimitsUsingDevice("/user/hand/left");
              }
              this.animationFrameHandle = window.requestAnimationFrame(
                this.onAnimationFrame,
              );
            }
          }
          componentDidUpdate() {
            this.updatePreview();
          }
          updatePreview() {
            if (!VRHTML) return;
            let e = this.state.vMax.x - this.state.vMin.x,
              t = this.state.vMax.z - this.state.vMin.z;
            VRHTML.VRChaperoneSetup.SetWorkingPlayAreaSize(e, t);
            let n = (0, l.mT)((0, l.ui)(this.state.vMin, this.state.vMax), 0.5),
              i = { x: n.x, y: this.state.vMin.y, z: n.z },
              o = (0, l.Oq)();
            (o.rotation = this.state.qRawFromRoom),
              (o.translation = (0, l.Fx)(this.state.qRawFromRoom, i)),
              VRHTML.VRChaperoneSetup.SetWorkingStandingZeroPoseToRawTrackingPose(
                o,
              );
            let r = [];
            r.push({ x: -e / 2, y: -t / 2 }),
              r.push({ x: e / 2, y: -t / 2 }),
              r.push({ x: e / 2, y: t / 2 }),
              r.push({ x: -e / 2, y: t / 2 }),
              VRHTML.VRChaperoneSetup.SetWorkingPerimeter(r),
              VRHTML.VRChaperoneSetup.ShowWorkingSetPreview();
          }
          computeDirectionFromHeadset() {
            if (!VRHTML) return;
            let e = VRHTML.GetPose("/user/head", l.zq.RawAndUncalibrated),
              t = (0, l.aB)(e.xfDeviceToAbsoluteTracking);
            (t.y = 0), (t = (0, l.M9)(t));
            let n = Math.atan2(t.x, t.z),
              i = (0, l.UU)({ x: 0, y: n, z: 0 }),
              o = (0, l.rN)(i),
              r = (0, l.Fx)(o, e.xfDeviceToAbsoluteTracking.translation);
            this.setState({
              qRawFromRoom: i,
              qRoomFromRaw: o,
              vStartingHmdPosition: r,
            });
          }
          resetBoundsToDefault(e) {
            if (!VRHTML) return;
            let t = 1,
              n = 1;
            e || ((t = 1.5), (n = 1.1));
            let i = VRHTML.GetPose("/user/head", l.zq.RawAndUncalibrated),
              o = (0, l.Fx)(
                this.state.qRoomFromRaw,
                i.xfDeviceToAbsoluteTracking.translation,
              ),
              r = (0, l.ui)(o, { x: -t / 2, y: 0, z: -n / 2 }),
              a = (0, l.ui)(o, { x: t / 2, y: 0, z: n / 2 });
            (r.y = this.state.vMin.y),
              (a.y = this.state.vMax.y),
              this.setState({ vMin: r, vMax: a, vStartingHmdPosition: o });
          }
          resetWalls() {
            this.resetBoundsToDefault(this.state.phase == h.Room_Walls);
          }
          resetFloorToDefault() {
            if (!VRHTML) return;
            let e = VRHTML.GetPose("/user/head", l.zq.RawAndUncalibrated),
              t = (0, l.Fx)(
                this.state.qRoomFromRaw,
                e.xfDeviceToAbsoluteTracking.translation,
              ),
              n = this.state.vMin;
            n.y = t.y - 1;
            let i = this.state.vMax;
            (i.y = t.y + 0.5),
              this.setState({ vMin: n, vMax: i, vStartingHmdPosition: t });
          }
          onSkipWalls() {
            this.resetBoundsToDefault(!0),
              this.setState({}, () => {
                this.saveSetup();
              });
          }
          restartSetup() {
            VRHTML.VRChaperoneSetup.RevertWorkingCopy(),
              this.setState({ phase: h.FindFloor_Touch });
          }
          onFindFloorFromHeight() {
            this.resetFloorToDefault(),
              this.setState({ phase: h.FindFloor_Height });
          }
          onFindFloorFromTouch() {
            this.resetFloorToDefault(),
              this.setState({ phase: h.FindFloor_Touch });
          }
          onConfirmFloor() {
            this.computeDirectionFromHeadset(),
              this.resetBoundsToDefault(!1),
              this.updatePreview(),
              this.setState({ phase: h.Room_Walls });
          }
          confirmWalls() {
            this.saveSetup();
          }
          onConfirmHeight() {
            let e = null;
            try {
              e = VRHTML.GetPose("/user/head", l.zq.RawAndUncalibrated);
            } catch (e) {
              return void this.setState({ phase: h.Room_Walls });
            }
            if (!e.bPoseIsValid)
              return void this.setState({ phase: h.Room_Walls });
            let t = e.xfDeviceToAbsoluteTracking.translation;
            this.computeDirectionFromHeadset(),
              this.setState({
                phase: h.Room_Walls,
                vMin: {
                  x: this.state.vMin.x,
                  y: t.y + 0.08 - this.state.fUserHeight / 100,
                  z: this.state.vMin.z,
                },
              });
          }
          saveSetup() {
            VRHTML.VRChaperoneSetup.CommitWorkingCopy()
              ? this.setState({ phase: h.SaveSuccessful })
              : this.setState({ phase: h.SaveFailed }),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRChaperone.ForceBoundsVisible(!1),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRChaperoneSetup.HideWorkingSetPreview();
          }
          onSliderChange(e) {
            let t = parseFloat(e.target.value);
            this.setState({ fUserHeight: t });
          }
          onSetRoomNow() {
            this.setState({ phase: h.Room_Walls });
          }
          onSetRoomLater() {
            this.saveSetup();
          }
          renderMainUI() {
            let e = this.state.fUserHeight / 2.54,
              t = Math.floor(e / 12),
              n = Math.round(e - 12 * t);
            switch (this.state.phase) {
              case h.FindFloor_Touch:
                return r.createElement(
                  l.s_,
                  { width: 1, interactive: !0 },
                  r.createElement(
                    "div",
                    { className: "FlexColumn panel RoomSetupControls" },
                    r.createElement(
                      "div",
                      { className: "RoomSetupText" },
                      "Hello there! To give you the best Virtual Reality experience (and keep you safe) we need to know a few things about your room.",
                    ),
                    r.createElement(
                      "div",
                      { className: "RoomSetupText" },
                      'Let\'s start with where your floor is. Please touch the floor with one of your controllers and click "Done".',
                    ),
                    r.createElement(
                      "div",
                      { className: "RoomSetupText" },
                      'If would rather estimate the floor\'s position from your own height, you can click the "use my height" button below to do that instead.',
                    ),
                    r.createElement(
                      "div",
                      { className: "FlexRow" },
                      r.createElement(
                        "div",
                        {
                          className: "Label ButtonControl",
                          onClick: this.onConfirmFloor,
                        },
                        "Done",
                      ),
                      r.createElement(
                        "div",
                        {
                          className: "Label ButtonControl",
                          onClick: this.onFindFloorFromHeight,
                        },
                        "Let me tell you how tall I am",
                      ),
                    ),
                    r.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: this.props.returnToMenu,
                      },
                      "Exit",
                    ),
                  ),
                );
              case h.FindFloor_Height:
                return r.createElement(
                  l.s_,
                  { width: 1, interactive: !0 },
                  r.createElement(
                    "div",
                    { className: "FlexColumn panel RoomSetupControls" },
                    r.createElement(
                      "div",
                      { className: "RoomSetupText" },
                      "Maybe your VR system can't see your floor? Or maybe you just don't want to touch the floor with your controller. No problem, we can figure it out if you tell us how tall you are. ",
                    ),
                    r.createElement(
                      "div",
                      { className: "RoomSetupText" },
                      'Please select your height using the slider below, stand up straight, and click "Done" when you\'re finished.',
                    ),
                    r.createElement(
                      "div",
                      { className: "RoomSetupText" },
                      "Height: ",
                      this.state.fUserHeight,
                      " cm (",
                      t,
                      "ft ",
                      n,
                      "in)",
                    ),
                    r.createElement(
                      "div",
                      { className: "FlexColumn HeightSlider" },
                      r.createElement("input", {
                        type: "range",
                        min: 100,
                        max: 250,
                        step: 1,
                        value: this.state.fUserHeight,
                        onChange: this.onSliderChange,
                      }),
                    ),
                    r.createElement(
                      "div",
                      { className: "FlexRow" },
                      r.createElement(
                        "div",
                        {
                          className: "Label ButtonControl",
                          onClick: this.onConfirmHeight,
                        },
                        "Done",
                      ),
                      r.createElement(
                        "div",
                        {
                          className: "Label ButtonControl",
                          onClick: this.onFindFloorFromTouch,
                        },
                        "Let me touch the floor instead",
                      ),
                    ),
                    r.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: this.props.returnToMenu,
                      },
                      "Exit",
                    ),
                  ),
                );
              case h.Room_Walls:
                return r.createElement(
                  l.s_,
                  { width: 1, interactive: !0 },
                  r.createElement(
                    "div",
                    { className: "FlexColumn panel RoomSetupControls" },
                    r.createElement(
                      "div",
                      { className: "RoomSetupText" },
                      "Please reach out with your controllers to stretch the room to include your clear space.",
                    ),
                    r.createElement(
                      "div",
                      { className: "FlexRow" },
                      r.createElement(
                        "div",
                        {
                          className: "Label ButtonControl",
                          onClick: this.computeDirectionFromHeadset,
                        },
                        "Set Forward Direction",
                      ),
                      r.createElement(
                        "div",
                        {
                          className: "Label ButtonControl",
                          onClick: this.resetWalls,
                        },
                        "Reset Walls",
                      ),
                      r.createElement(
                        "div",
                        {
                          className: "Label ButtonControl",
                          onClick: this.confirmWalls,
                        },
                        "Done",
                      ),
                    ),
                    r.createElement(
                      "div",
                      { className: "FlexRow" },
                      r.createElement(
                        "div",
                        {
                          className: "Label ButtonControl",
                          onClick: this.onSkipWalls,
                        },
                        "Skip",
                      ),
                      r.createElement(
                        "div",
                        {
                          className: "Label ButtonControl",
                          onClick: this.onFindFloorFromTouch,
                        },
                        "Back",
                      ),
                      r.createElement(
                        "div",
                        {
                          className: "Label ButtonControl",
                          onClick: this.props.returnToMenu,
                        },
                        "Exit",
                      ),
                    ),
                  ),
                );
              case h.SaveSuccessful:
                return r.createElement(
                  l.s_,
                  { width: 1, interactive: !0 },
                  r.createElement(
                    "div",
                    { className: "FlexColumn panel RoomSetupControls" },
                    r.createElement(
                      "div",
                      { className: "RoomSetupText" },
                      "Your new room setup has been saved.",
                    ),
                    r.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: this.props.returnToMenu,
                      },
                      "Exit",
                    ),
                  ),
                );
              case h.SaveFailed:
                return r.createElement(
                  l.s_,
                  { width: 1, interactive: !0 },
                  r.createElement(
                    "div",
                    { className: "FlexColumn panel RoomSetupControls" },
                    r.createElement(
                      "div",
                      { className: "RoomSetupText" },
                      "Your new room setup could not be saved for some reason. Maybe your hard drive is full?",
                    ),
                    r.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: this.props.returnToMenu,
                      },
                      "Exit",
                    ),
                  ),
                );
            }
            return null;
          }
          render() {
            return r.createElement(
              l.wx,
              { parent_path: "/user/head" },
              r.createElement(
                l.iC,
                {
                  start_angle_threshold: 40,
                  stop_angle_threshold: 17,
                  ease_out_angle_threshold: 90,
                  min_angular_velocity: 105,
                  ease_in_power: 1.5,
                },
                r.createElement(
                  l.wx,
                  { translation: { z: -1 } },
                  this.renderMainUI(),
                ),
              ),
            );
          }
        }
        (0, o.gn)([s.ak], p.prototype, "onAnimationFrame", null),
          (0, o.gn)([s.ak], p.prototype, "updatePreview", null),
          (0, o.gn)([s.ak], p.prototype, "computeDirectionFromHeadset", null),
          (0, o.gn)([s.ak], p.prototype, "resetWalls", null),
          (0, o.gn)([s.ak], p.prototype, "resetFloorToDefault", null),
          (0, o.gn)([s.ak], p.prototype, "onSkipWalls", null),
          (0, o.gn)([s.ak], p.prototype, "restartSetup", null),
          (0, o.gn)([s.ak], p.prototype, "onFindFloorFromHeight", null),
          (0, o.gn)([s.ak], p.prototype, "onFindFloorFromTouch", null),
          (0, o.gn)([s.ak], p.prototype, "onConfirmFloor", null),
          (0, o.gn)([s.ak], p.prototype, "confirmWalls", null),
          (0, o.gn)([s.ak], p.prototype, "onConfirmHeight", null),
          (0, o.gn)([s.ak], p.prototype, "saveSetup", null),
          (0, o.gn)([s.ak], p.prototype, "onSliderChange", null),
          (0, o.gn)([s.ak], p.prototype, "onSetRoomNow", null),
          (0, o.gn)([s.ak], p.prototype, "onSetRoomLater", null);
        var m = n(4940),
          v = n(1628),
          g = n(5774);
        class _ extends r.Component {
          constructor(e) {
            super(e),
              (this.m_deviceEventHandle = null),
              (this.m_progressIndicatorEventHandle = null);
            this.state = {
              sIconPath: "",
              sDevicePath: "",
              sInputPath: "",
              sCurrentAction: void 0,
              flProgress: 0,
            };
          }
          componentDidMount() {
            VRHTML
              ? ((this.m_progressIndicatorEventHandle =
                  VRHTML.RegisterForProgressIndicatorEvents(
                    this.ProgressIndicatorEvent,
                  )),
                (this.m_deviceEventHandle = VRHTML.RegisterForDeviceEvents(
                  this.DeviceEvent,
                )))
              : this.setState({
                  sCurrentAction: "/actions/foo/bar",
                  flProgress: 0.63,
                });
          }
          componentWillUnmount() {
            this.m_progressIndicatorEventHandle &&
              this.m_progressIndicatorEventHandle.unregister(),
              this.m_deviceEventHandle && this.m_deviceEventHandle.unregister();
          }
          ProgressIndicatorEvent(e, t, n, i, o) {
            let r = this.state;
            null == r.sCurrentAction &&
              0 != e &&
              ((r.sCurrentAction = o), (r.sDevicePath = n), (r.sInputPath = i)),
              r.sCurrentAction == o &&
                (0 == e
                  ? ((r.sCurrentAction = void 0), (r.flProgress = 0))
                  : (r.flProgress = e)),
              this.setState(r);
          }
          DeviceEvent(e, t, n) {
            e == l.XX.Deactivated &&
              t == this.state.sDevicePath &&
              this.setState({ sCurrentAction: null, flProgress: 0 });
          }
          render() {
            if (!this.state.sCurrentAction || this.state.flProgress < 0.25)
              return null;
            {
              let e = { x: -0.05, y: 0.06, z: 0.02 };
              "/user/hand/left" == this.state.sDevicePath && (e.x = -e.x);
              let t = 0.05;
              "/user/head" == this.state.sDevicePath && (t = 0.15);
              let n = (100 * (this.state.flProgress - 0.25) * 4) / 3,
                i = r.createElement(
                  l.s_,
                  { width: t },
                  r.createElement(
                    "div",
                    { className: "ProgressContainer" },
                    r.createElement(g.Ip, {
                      background: !0,
                      backgroundPadding: 2,
                      value: n,
                    }),
                    r.createElement("img", {
                      src: "/shared/images/steam_logo.svg",
                      className: "ProgressIcon",
                    }),
                  ),
                );
              return "/user/head" == this.state.sDevicePath
                ? r.createElement(
                    l.wx,
                    { parent_path: "/user/head" },
                    r.createElement(
                      l.wx,
                      { translation: { z: -1.2, y: -0.5 } },
                      r.createElement(l.jm, null, i),
                    ),
                  )
                : r.createElement(
                    "div",
                    null,
                    r.createElement(
                      l.CH,
                      {
                        id: "progress_component",
                        sDevicePath: this.state.sDevicePath,
                        sInputPath: this.state.sInputPath,
                      },
                      r.createElement(
                        l.A4,
                        { vOffset: e },
                        r.createElement(
                          l.jL,
                          {
                            fOffscreenZDepth: -0.3,
                            fOffAxisLimit: 21,
                            fTransitionLimit: 1,
                          },
                          r.createElement(l.x1, {
                            target_id: "progress_component",
                            thickness: 0.002,
                            start_buffer: 0.03,
                            end_buffer: 0.01,
                          }),
                          r.createElement(l.jm, null, i),
                        ),
                      ),
                    ),
                  );
            }
          }
        }
        (0, o.gn)([s.ak], _.prototype, "ProgressIndicatorEvent", null),
          (0, o.gn)([s.ak], _.prototype, "DeviceEvent", null);
        var y,
          b = n(3568);
        function S(e, t, n, i, o) {
          return t == n ? 0 : ((e - t) / (n - t)) * (o - i) + i;
        }
        let f = (y = class extends r.Component {
          constructor(e) {
            var t;
            super(e),
              (this.m_fadeStartTimeout = void 0),
              (this.m_fadeFinishTimeout = void 0);
            const n =
              1e3 *
              (null !==
                (t =
                  null === l.Co || void 0 === l.Co
                    ? void 0
                    : l.Co.VRProperties.GetFloatProperty(
                        l.wU,
                        l.Uk.UserIpdMeters_Float,
                      )) && void 0 !== t
                ? t
                : 0.065);
            (this.state = { ipdValue: n, visible: !1, fading: !1 }),
              null === l.Co ||
                void 0 === l.Co ||
                l.Co.RegisterForIPDEvents(this.IPDChanged),
              v.G3.Init(!1);
          }
          StartFade() {
            clearTimeout(this.m_fadeStartTimeout),
              (this.m_fadeStartTimeout = 0),
              clearTimeout(this.m_fadeFinishTimeout),
              (this.m_fadeFinishTimeout = setTimeout(
                this.HideOverlay,
                y.kFadeDurationMs,
              )),
              this.setState({ fading: !0 });
          }
          HideOverlay() {
            this.setState({ visible: !1 });
          }
          IPDChanged(e) {
            clearTimeout(this.m_fadeStartTimeout),
              (this.m_fadeStartTimeout = setTimeout(
                this.StartFade,
                y.kFadeDelayMs,
              )),
              clearTimeout(this.m_fadeFinishTimeout),
              (this.m_fadeFinishTimeout = 0),
              this.setState({
                ipdValue: 1e3 * (null != e ? e : 0.065),
                visible: !0,
                fading: !1,
              });
          }
          ipdLensSpacer() {
            return r.createElement("div", {
              className: "IPDLensSpacer",
              style: { minWidth: "32px" },
            });
          }
          render() {
            var e, t, n;
            if (!this.state.visible) return null;
            let i = ["IPDParent"];
            this.state.fading && i.push("Fading");
            const o =
                0.9 *
                (null !==
                  (e =
                    null === l.Co || void 0 === l.Co
                      ? void 0
                      : l.Co.VRProperties.GetFloatProperty(
                          l.wU,
                          l.Uk.DashboardScale_Float,
                        )) && void 0 !== e
                  ? e
                  : 1),
              a =
                1e3 *
                (null !==
                  (t =
                    null === l.Co || void 0 === l.Co
                      ? void 0
                      : l.Co.VRProperties.GetFloatProperty(
                          l.wU,
                          l.Uk.IpdUIRangeMinMeters_Float,
                        )) && void 0 !== t
                  ? t
                  : 0.058),
              s =
                1e3 *
                (null !==
                  (n =
                    null === l.Co || void 0 === l.Co
                      ? void 0
                      : l.Co.VRProperties.GetFloatProperty(
                          l.wU,
                          l.Uk.IpdUIRangeMaxMeters_Float,
                        )) && void 0 !== n
                  ? n
                  : 0.07),
              d = (function (e, t, n, i, o) {
                if (
                  !(
                    isFinite(e) &&
                    isFinite(t) &&
                    isFinite(n) &&
                    isFinite(i) &&
                    isFinite(o)
                  )
                )
                  return null;
                const a = 10,
                  s = [],
                  l = t / 25,
                  d = 10 * l,
                  c = d - 5 * l,
                  u = d - 10 * l,
                  h = d + 10 * l,
                  p = d + 5 * l;
                for (let t = i; t <= o; t += 0.5) {
                  const n = S(t, i, o, a, e - a);
                  s.push(
                    r.createElement("circle", {
                      key: "pip" + t,
                      cx: n,
                      cy: d,
                      r: "0.75",
                      stroke: "none",
                      fill: "rgb(128,128,128)",
                    }),
                  );
                }
                for (let t = i; t <= o; t += 2) {
                  const n = S(t, i, o, a, e - a);
                  s.push(
                    r.createElement("line", {
                      key: "line" + t,
                      x1: n,
                      y1: d,
                      x2: n,
                      y2: c,
                      style: { stroke: "rgb(96,96,96)", strokeWidth: 2 },
                    }),
                  );
                }
                {
                  let t = S(64, i, o, a, e - a);
                  s.push(
                    r.createElement("line", {
                      key: "centraltick",
                      x1: t,
                      y1: d,
                      x2: t,
                      y2: u,
                      style: { stroke: "rgb(164,164,164)", strokeWidth: 2 },
                    }),
                  );
                }
                {
                  let t = S(n - 0.5, i, o, a, e - a),
                    l = S(n + 0.5, i, o, a, e - a),
                    d =
                      t +
                      "," +
                      h +
                      " " +
                      l +
                      "," +
                      h +
                      " " +
                      0.5 * (t + l) +
                      "," +
                      p;
                  s.push(
                    r.createElement("polygon", {
                      key: "triangle",
                      points: d,
                      style: {
                        stroke: "rgb(128,128,128)",
                        strokeWidth: 1.5,
                        fill: "rgb(30,30,30)",
                      },
                    }),
                  );
                }
                return r.createElement(
                  "svg",
                  { width: e, height: t, viewBox: [0, 0, e, t].join(" ") },
                  s,
                );
              })(240, 50, this.state.ipdValue, a, s);
            return r.createElement(
              l.wx,
              { parent_path: "/user/head" },
              r.createElement(
                l.wx,
                {
                  translation: { y: -0.3, z: -0.87 },
                  rotation: { x: -28 },
                  scale: o,
                },
                r.createElement(
                  l.s_,
                  {
                    width: void 0,
                    height: y.kPanelHeight,
                    interactive: !1,
                    sort_order: 1e3,
                  },
                  r.createElement(
                    "div",
                    { className: i.join(" "), style: { width: y.kPixelWidth } },
                    r.createElement(
                      "div",
                      { className: "FlexColumn" },
                      r.createElement(
                        "div",
                        { className: "IPDNumberRow" },
                        r.createElement(
                          "div",
                          { className: "IPDNumberText" },
                          this.state.ipdValue.toFixed(1),
                        ),
                        r.createElement(
                          "div",
                          { className: "IPDLabelText" },
                          "mm",
                        ),
                      ),
                      r.createElement(
                        "div",
                        { className: "IPDSettingTextDesc" },
                        (0, b.Xx)("#IPD_Description"),
                      ),
                      r.createElement(
                        "div",
                        { className: "IPDLensRow" },
                        r.createElement(
                          "div",
                          { className: "IPDLens FlipImageHorizontal" },
                          " ",
                          d,
                          " ",
                        ),
                        this.ipdLensSpacer(),
                        r.createElement(
                          "div",
                          { className: "IPDLens" },
                          " ",
                          d,
                          " ",
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            );
          }
        });
        (f.kPanelHeight = 0.2),
          (f.kPixelWidth = 600),
          (f.kFadeDelayMs = 1e3),
          (f.kFadeDurationMs = 1e3),
          (0, o.gn)([s.ak], f.prototype, "StartFade", null),
          (0, o.gn)([s.ak], f.prototype, "HideOverlay", null),
          (0, o.gn)([s.ak], f.prototype, "IPDChanged", null),
          (f = y = (0, o.gn)([d.Pi], f));
        var R,
          k,
          C = n(6459);
        !(function (e) {
          (e[(e.Opaque = 0)] = "Opaque"),
            (e[(e.FadingIn = 1)] = "FadingIn"),
            (e[(e.FadingOut = 2)] = "FadingOut");
        })(k || (k = {}));
        let w = (R = class extends r.Component {
          constructor(e) {
            super(e),
              (this.m_hideTimeout = void 0),
              (this.m_fadeTimeout = void 0),
              (this.m_unresponsiveTimeout = void 0),
              (this.m_sceneApplicationStateChangedEventHandle = null),
              (this.m_mountedTime = void 0),
              (this.state = {
                visible: !1,
                opacity: k.Opaque,
                latchedAppName: "",
                latchedAppKey: "",
                latchedSceneApplicationState: null,
                alreadyHidDashboard: !1,
              }),
              v.G3.Init(!1);
          }
          componentDidMount() {
            (this.m_sceneApplicationStateChangedEventHandle =
              null === l.Co || void 0 === l.Co
                ? void 0
                : l.Co.RegisterForSceneApplicationStateChangedEvents(
                    this.onSceneApplicationStateChanged,
                  )),
              (this.m_mountedTime = new Date().getTime()),
              this.updateTransitionState();
          }
          log(e) {
            let t = (new Date().getTime() - this.m_mountedTime) / 1e3;
            console.log("[transition] " + t + " " + e);
          }
          componentWillUnmount() {
            this.m_unresponsiveTimeout &&
              (clearTimeout(this.m_unresponsiveTimeout),
              (this.m_unresponsiveTimeout = void 0)),
              this.m_fadeTimeout &&
                (clearTimeout(this.m_fadeTimeout),
                (this.m_fadeTimeout = void 0)),
              this.m_hideTimeout &&
                (clearTimeout(this.m_hideTimeout),
                (this.m_hideTimeout = void 0)),
              this.m_sceneApplicationStateChangedEventHandle &&
                (this.m_sceneApplicationStateChangedEventHandle.unregister(),
                (this.m_sceneApplicationStateChangedEventHandle = null));
          }
          maybeHideDashboard(e) {
            if (this.state.alreadyHidDashboard) return;
            const t = l.Co.VRApplications.GetStartingApplicationKey();
            t &&
              t != R.k_sHomeAppKey &&
              (l.Co.VRDashboardManager.HideDashboard(e),
              this.setState({ alreadyHidDashboard: !0 }));
          }
          updateTransitionState() {
            if (!l.Co) return;
            let e = l.Co.VRApplications.GetSceneApplicationState();
            e == l.xY.Starting
              ? (this.state.latchedSceneApplicationState == l.xY.Quitting &&
                  this.resetLatchedValued(),
                this.setState({ latchedSceneApplicationState: e }),
                this.updateLatchedValues(),
                this.show(!1),
                this.cancelUnresponsiveTimeout(),
                this.maybeHideDashboard("transition_app_starting"))
              : e == l.xY.Quitting
                ? (this.state.latchedSceneApplicationState == l.xY.Starting &&
                    this.resetLatchedValued(),
                  this.setState({ latchedSceneApplicationState: e }),
                  this.updateLatchedValues(),
                  this.show(!1),
                  this.cancelUnresponsiveTimeout(),
                  this.maybeHideDashboard("transition_app_quitting"))
                : e == l.xY.Running
                  ? (this.cancelUnresponsiveTimeout(),
                    this.state.visible && this.startFadeOut())
                  : e == l.xY.None
                    ? (this.cancelUnresponsiveTimeout(),
                      this.state.visible && this.hideSoon())
                    : e == l.xY.Waiting &&
                      (this.state.visible
                        ? (this.cancelUnresponsiveTimeout(), this.show(!0))
                        : this.startUnresponsiveTimer());
          }
          startUnresponsiveTimer() {
            null == this.m_unresponsiveTimeout &&
              (this.m_unresponsiveTimeout = setTimeout(
                this.onUnresponsiveTimeout,
                R.kUnresponsiveDelayMs,
              ));
          }
          cancelUnresponsiveTimeout() {
            this.m_unresponsiveTimeout &&
              (clearTimeout(this.m_unresponsiveTimeout),
              (this.m_unresponsiveTimeout = void 0));
          }
          onUnresponsiveTimeout() {
            clearTimeout(this.m_unresponsiveTimeout),
              (this.m_unresponsiveTimeout = void 0),
              this.setState({ latchedSceneApplicationState: l.xY.Waiting }),
              this.show(!0),
              this.updateLatchedValues();
          }
          updateLatchedValues() {
            if (l.Co)
              if (
                l.Co.VRApplications.GetSceneApplicationState() == l.xY.Starting
              ) {
                let e = l.Co.VRApplications.GetStartingApplicationKey();
                e && e.length > 0 && this.setState({ latchedAppKey: e });
                let t = l.Co.GetStartingAppName();
                t && t.length > 0 && this.setState({ latchedAppName: t });
              } else {
                let e = l.Co.VRApplications.GetSceneApplicationKey();
                e && e.length > 0 && this.setState({ latchedAppKey: e });
                let t = l.Co.GetCurrentSceneFocusAppName();
                t && t.length > 0 && this.setState({ latchedAppName: t });
              }
          }
          onSceneApplicationStateChanged() {
            this.updateTransitionState();
          }
          show(e) {
            this.cancelFadeOutTimers(),
              e
                ? this.state.visible ||
                  this.setState({ visible: !0, opacity: k.FadingIn })
                : this.setState({ visible: !0, opacity: k.Opaque });
          }
          cancelFadeOutTimers() {
            this.m_fadeTimeout && clearTimeout(this.m_fadeTimeout),
              this.m_hideTimeout && clearTimeout(this.m_hideTimeout),
              (this.m_fadeTimeout = 0),
              (this.m_hideTimeout = 0);
          }
          hideSoon() {
            this.m_hideTimeout ||
              this.m_fadeTimeout ||
              (this.m_fadeTimeout = setTimeout(
                this.startFadeOut,
                R.kHideDelayMs,
              ));
          }
          startFadeOut() {
            this.m_fadeTimeout &&
              (clearTimeout(this.m_fadeTimeout), (this.m_fadeTimeout = 0)),
              this.setState({ opacity: k.FadingOut }),
              (this.m_hideTimeout = setTimeout(
                this.hideAndResetLatchedValues,
                R.kFadeoutTimeMs,
              ));
          }
          resetLatchedValued() {
            this.setState({
              latchedAppName: "",
              latchedAppKey: "",
              latchedSceneApplicationState: null,
            });
          }
          hideAndResetLatchedValues() {
            this.cancelFadeOutTimers(),
              this.resetLatchedValued(),
              this.setState({
                visible: !1,
                opacity: k.Opaque,
                alreadyHidDashboard: !1,
              });
          }
          render() {
            if (!this.state.visible) return null;
            if (
              !this.props.dashboardRef.current ||
              this.props.dashboardRef.current.isShown()
            )
              return null;
            let e = "",
              t = "";
            if (
              this.state.latchedAppKey &&
              this.state.latchedAppKey.length > 0 &&
              !this.state.latchedAppKey.includes("system.generated")
            )
              e = "/app/image?app_key=" + this.state.latchedAppKey;
            else {
              let n = 8;
              if (
                ((e =
                  "images/dynamictitle.000" +
                  (Math.abs(
                    (function (e) {
                      let t = 0,
                        n = 0;
                      for (; t < e.length; t++)
                        n = (Math.imul(31, n) + e.charCodeAt(t)) | 0;
                      return n;
                    })(this.state.latchedAppKey),
                  ) %
                    n) +
                  ".png"),
                (t = this.state.latchedAppName),
                !t)
              )
                return null;
            }
            let n = this.state.latchedAppKey === R.k_sHomeAppKey,
              i = !1,
              o = "";
            switch (this.state.latchedSceneApplicationState) {
              case l.xY.Quitting:
                o = (0, b.Xx)("#Now_Quitting");
                break;
              case l.xY.Starting:
                o = (0, b.Xx)(n ? "" : "#Now_Starting");
                break;
              case l.xY.Waiting:
                (o = (0, b.Xx)("#Now_Waiting")), (i = !0);
            }
            let a = o.length > 0,
              s = ["TransitionAppImage"],
              d = ["TransitionAppLabels"],
              c = ["TransitionAppSpinner"];
            this.state.opacity == k.FadingIn
              ? (s.push("FadingIn"), d.push("FadingIn"), c.push("FadingIn"))
              : this.state.opacity == k.FadingOut &&
                (s.push("FadingOut"), d.push("FadingOut"), c.push("FadingOut")),
              i && s.push("Waiting");
            let u = null;
            e.includes("revive.app") && (u = 310);
            const h = m.g.getDashboardDistance();
            return r.createElement(
              l.eK,
              null,
              r.createElement(
                l.wx,
                { translation: { y: -0.1125, z: -h }, scale: 0.244 },
                r.createElement(
                  l.s_,
                  {
                    width: 1.5,
                    height: void 0,
                    interactive: !1,
                    origin: l.Ic.BottomCenter,
                    reflect: 0.05,
                  },
                  r.createElement(
                    "div",
                    {
                      className: s.join(" "),
                      style: {
                        backgroundImage: e ? "url('" + e + "')" : null,
                        height: u,
                      },
                    },
                    " ",
                    t,
                    " ",
                  ),
                ),
                a &&
                  r.createElement(
                    l.wx,
                    { translation: { y: 0.08, z: -0.08 } },
                    r.createElement(
                      l.s_,
                      {
                        width: 1.275,
                        height: void 0,
                        interactive: !1,
                        origin: l.Ic.TopCenter,
                      },
                      r.createElement(
                        "div",
                        { className: d.join(" ") },
                        r.createElement("div", { className: "AppStatus" }, o),
                      ),
                    ),
                  ),
                i &&
                  r.createElement(
                    l.wx,
                    { translation: { y: 0.35, z: 0.05 } },
                    r.createElement(
                      l.s_,
                      { width: 1.5 * 0.1, height: void 0, interactive: !1 },
                      r.createElement(
                        "div",
                        { className: c.join(" ") },
                        r.createElement(C.wC, null),
                      ),
                    ),
                  ),
              ),
            );
          }
        });
        (w.k_sHomeAppKey = "openvr.tool.steamvr_environments"),
          (w.kHideDelayMs = 5e3),
          (w.kUnresponsiveDelayMs = 2e3),
          (w.kFadeoutTimeMs = 550),
          (0, o.gn)([s.ak], w.prototype, "startUnresponsiveTimer", null),
          (0, o.gn)([s.ak], w.prototype, "cancelUnresponsiveTimeout", null),
          (0, o.gn)([s.ak], w.prototype, "onUnresponsiveTimeout", null),
          (0, o.gn)([s.ak], w.prototype, "updateLatchedValues", null),
          (0, o.gn)(
            [s.ak],
            w.prototype,
            "onSceneApplicationStateChanged",
            null,
          ),
          (0, o.gn)([s.ak], w.prototype, "show", null),
          (0, o.gn)([s.ak], w.prototype, "cancelFadeOutTimers", null),
          (0, o.gn)([s.ak], w.prototype, "hideSoon", null),
          (0, o.gn)([s.ak], w.prototype, "startFadeOut", null),
          (0, o.gn)([s.ak], w.prototype, "resetLatchedValued", null),
          (0, o.gn)([s.ak], w.prototype, "hideAndResetLatchedValues", null),
          (w = R = (0, o.gn)([d.Pi], w));
        class T extends r.Component {
          constructor(e) {
            super(e), (this.state = {});
          }
          render() {
            if (!VRHTML) return null;
            let e = VRHTML.VRSystem.GetTrackedDeviceClasses(),
              t = [];
            return (
              e.forEach((e) => {
                e.eClass == l.qR.TrackingReference &&
                  e.sDevicePath &&
                  t.push(
                    r.createElement(
                      l.wx,
                      { parent_path: e.sDevicePath },
                      r.createElement(
                        l.jm,
                        null,
                        r.createElement(
                          l.s_,
                          { width: 0.5 },
                          r.createElement(
                            "div",
                            { className: "FlexColumn" },
                            r.createElement(
                              "div",
                              { className: "Label" },
                              VRHTML.VRProperties.GetStringProperty(
                                e.sDevicePath,
                                l.Uk.SerialNumber_String,
                              ),
                            ),
                            r.createElement(
                              "div",
                              { className: "Label" },
                              VRHTML.VRProperties.GetStringProperty(
                                e.sDevicePath,
                                l.Uk.ManufacturerName_String,
                              ),
                            ),
                            r.createElement(
                              "div",
                              { className: "Label" },
                              VRHTML.VRProperties.GetStringProperty(
                                e.sDevicePath,
                                l.Uk.ModelNumber_String,
                              ),
                            ),
                            r.createElement(
                              "div",
                              { className: "Label" },
                              "Channel: ",
                              VRHTML.VRProperties.GetStringProperty(
                                e.sDevicePath,
                                l.Uk.ModeLabel_String,
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  );
              }),
              r.createElement(
                "div",
                { className: "CalloutTopLevelContainer" },
                t,
              )
            );
          }
        }
        var M = n(2188),
          D = n(7726),
          I = n(5177),
          E = n(9942),
          V = n(16),
          x = n(3107),
          P = n(7176),
          L = n(9809),
          O = n(5211),
          H = n(1380),
          B = n(4285),
          A = n(9626),
          F = n(792);
        n(2411);
        let N = class extends r.Component {
          constructor(e) {
            super(e),
              (this.m_EventHandles = []),
              (this.state = { groupId: 0, groupName: "" });
          }
          componentDidMount() {}
          componentWillUnmount() {}
          render() {
            return null;
          }
        };
        N = (0, o.gn)([d.Pi], N);
        var U,
          G,
          W = n(2477),
          z = n(1464);
        class K extends r.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new l.Nv()),
              this.m_mailbox.Init("systemui_devpanel");
          }
          onShowSceneAppBindings() {
            const e = E.H.Instance.SceneAppKey;
            if (e) {
              let t = { type: "request_binding_callouts", app_key: e };
              this.m_mailbox.SendMessage(P.Ml, t);
            }
          }
          onShowDashboardBindings() {
            this.m_mailbox.SendMessage(P.Ml, {
              type: "request_binding_callouts",
              app_key: "openvr.component.vrcompositor",
            });
          }
          onCrashRenderer() {
            null === VRHTML || void 0 === VRHTML || VRHTML.CrashRenderer();
          }
          onHangRenderer() {
            for (;;);
          }
          render() {
            return r.createElement(
              l.Y9,
              {
                id: "dev_panel",
                tabName: "Dev Panel",
                iconUri: "/dashboard/images/icons/icon_settings.png",
                summonOverlayKey: "system.devpanel",
              },
              r.createElement(
                l.s_,
                {
                  height: void 0,
                  width: 2,
                  interactive: !0,
                  scrollable: !0,
                  origin: l.Ic.BottomCenter,
                  debug_name: "DevPanel",
                },
                r.createElement(
                  I.q,
                  { className: "panel DevPanel" },
                  r.createElement("h1", null, "Developer Panel"),
                  r.createElement(
                    I.z,
                    {
                      className: "ButtonControl",
                      onClick: this.props.onStartRoomSetup,
                    },
                    "Start Room Setup",
                  ),
                  r.createElement(
                    I.z,
                    {
                      className: "ButtonControl",
                      onClick: this.props.onToggleBaseInfo,
                    },
                    "Show Basestation Info",
                  ),
                  r.createElement(
                    I.z,
                    {
                      className: "ButtonControl",
                      onClick: this.onShowSceneAppBindings,
                    },
                    "Show Scene App Bindings",
                  ),
                  r.createElement(
                    I.z,
                    {
                      className: "ButtonControl",
                      onClick: this.onShowDashboardBindings,
                    },
                    "Show Dashboard Bindings",
                  ),
                  r.createElement(
                    I.z,
                    {
                      className: "ButtonControl",
                      onClick: this.onCrashRenderer,
                    },
                    "Crash Renderer",
                  ),
                  r.createElement(
                    I.z,
                    {
                      className: "ButtonControl",
                      onClick: this.onHangRenderer,
                    },
                    "Hang Renderer",
                  ),
                  r.createElement(
                    I.z,
                    {
                      className: "ButtonControl",
                      onClick: () => l.n0.Current().toggleDebugPointer(),
                    },
                    "Toggle Debug Pointer",
                  ),
                ),
              ),
            );
          }
        }
        (0, o.gn)([s.ak], K.prototype, "onShowSceneAppBindings", null),
          (0, o.gn)([s.ak], K.prototype, "onShowDashboardBindings", null),
          (0, o.gn)([s.ak], K.prototype, "onCrashRenderer", null),
          (0, o.gn)([s.ak], K.prototype, "onHangRenderer", null);
        class q extends r.Component {
          constructor(e) {
            var t;
            super(e),
              (this.m_mailbox = new l.Nv()),
              this.m_mailbox.Init("base_station_status_overlay").then(() => {
                this.m_mailbox.RegisterHandler(
                  "waking_base_stations_state_changed",
                  this.onWakingBaseStationsStateChanged,
                );
              }),
              (this.state = {
                bWakingBaseStations:
                  null !==
                    (t =
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.MonitorController.GetWakingBaseStationsState()) &&
                  void 0 !== t &&
                  t,
                nImagesLoaded: 0,
              });
          }
          onWakingBaseStationsStateChanged(e) {
            this.setState({ bWakingBaseStations: !!e.waking_base_stations });
          }
          onImageLoaded() {
            this.setState({ nImagesLoaded: this.state.nImagesLoaded + 1 });
          }
          render() {
            let e = this.state.nImagesLoaded >= 2;
            return r.createElement(
              l.gO,
              { visibleIn0DOF: !0, visibleIn3DOF: !0, visibleIn6DOF: !1 },
              this.state.bWakingBaseStations &&
                r.createElement(
                  l.wx,
                  { parent_path: "/user/head", translation: { z: -2.75 } },
                  r.createElement(
                    l.s_,
                    { width: 2, height: void 0, interactive: !1 },
                    r.createElement(
                      "div",
                      {
                        className:
                          "WakingBaseStationsPanel" + (e ? " Loaded" : ""),
                      },
                      r.createElement("img", {
                        className: "Rainbow",
                        src: "/dashboard/images/rainbow.png",
                        onLoad: this.onImageLoaded,
                      }),
                      r.createElement("div", { className: "Ground" }),
                    ),
                  ),
                  r.createElement(
                    l.wx,
                    { translation: { z: 0.23 } },
                    r.createElement(
                      l.s_,
                      { width: 2, height: void 0, interactive: !1 },
                      r.createElement(
                        "div",
                        {
                          className:
                            "WakingBaseStationsPanel" + (e ? " Loaded" : ""),
                        },
                        r.createElement("img", {
                          className: "Base",
                          src: "/dashboard/images/base.png",
                          onLoad: this.onImageLoaded,
                        }),
                        r.createElement(
                          "h1",
                          null,
                          (0, b.Xx)("#WakingUpBaseStations"),
                        ),
                      ),
                    ),
                  ),
                ),
            );
          }
        }
        (0, o.gn)(
          [s.ak],
          q.prototype,
          "onWakingBaseStationsStateChanged",
          null,
        ),
          (0, o.gn)([s.ak], q.prototype, "onImageLoaded", null),
          (function (e) {
            (e[(e.Normal = 0)] = "Normal"),
              (e[(e.RoomSetup = 1)] = "RoomSetup");
          })(G || (G = {}));
        let X = (U = class extends r.Component {
          constructor(e) {
            super(e),
              (this.m_DashboardRequestedCallbackHandle = null),
              (this.m_mailbox = new l.Nv()),
              (this.m_DashboardRef = null),
              (this.m_fidelitySettingsObserver = null),
              (this.m_DeviceEventCallbackHandle = null),
              (this.m_DashboardRef = r.createRef()),
              this.m_mailbox.Init("systemui").then(() => {}),
              (this.state = { mode: G.Normal, bShowBaseInfo: !1 });
          }
          static bootstrap(e) {
            return (0, o.mG)(this, void 0, void 0, function* () {
              let t = document.querySelector(e);
              if (t)
                if ((0, l.Op)() == l.qA.Overlay) {
                  console.log("Bootstrapping " + e),
                    x.G.Instance.preloadSounds(),
                    null === VRHTML ||
                      void 0 === VRHTML ||
                      VRHTML.VROverlay.SetFlag(
                        VRHTML.VROverlay.ThisOverlayHandle(),
                        l.Z9.MakeOverlaysInteractiveIfVisible,
                        !0,
                      ),
                    null === VRHTML ||
                      void 0 === VRHTML ||
                      VRHTML.VROverlay.SetInputMethod(
                        VRHTML.VROverlay.ThisOverlayHandle(),
                        l.qC.Mouse,
                      );
                  try {
                    yield Promise.all([
                      (0, b.CK)(
                        ["vrmonitor", "dashboard", "bindingui"],
                        null === VRHTML || void 0 === VRHTML
                          ? void 0
                          : VRHTML.GetSteamVRLanguage(),
                      ),
                      v.G3.Init(!0),
                      L.I.Init(!0),
                      O.c6.Init(),
                      H.S.Init(),
                      B.E.Init(),
                      (0, W.g)(),
                    ]),
                      yield Promise.all([A.B.Init(!0), F.C.Init()]);
                  } catch (e) {
                    console.error("Failed to initialize systemui:", e);
                  }
                  a.render(
                    r.createElement(l.n0, null, r.createElement(U, null)),
                    t,
                  );
                } else
                  console.error(
                    "Unable to boostrap systemUI because CurrentEnvironment() returns " +
                      l.qA[(0, l.Op)()],
                  );
              else
                console.error(
                  "Unable to boostrap systemUI because " + e + " was not found",
                );
            });
          }
          componentDidMount() {
            (window.toggleDevPanel = this.toggleDevPanel),
              (this.m_DeviceEventCallbackHandle =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.RegisterForDeviceEvents(this.DeviceEvent)),
              (this.m_fidelitySettingsObserver = new c.kB());
          }
          componentWillUnmount() {
            var e, t, n;
            null === (e = this.m_DashboardRequestedCallbackHandle) ||
              void 0 === e ||
              e.unregister(),
              (this.m_DashboardRequestedCallbackHandle = null),
              null === (t = this.m_DeviceEventCallbackHandle) ||
                void 0 === t ||
                t.unregister(),
              (this.m_DeviceEventCallbackHandle = null),
              null === (n = this.m_fidelitySettingsObserver) ||
                void 0 === n ||
                n.cleanup(),
              (this.m_fidelitySettingsObserver = null);
          }
          onOpenRoomSetup() {
            this.setState({ mode: G.RoomSetup });
          }
          toggleDevPanel() {
            this.setDevPanelVisible(!this.devPanelVisible);
          }
          get devPanelVisible() {
            return v.G3.settings.get(U.k_sPropShowDevPanel);
          }
          setDevPanelVisible(e) {
            v.G3.SetSettingsValue(U.k_sPropShowDevPanel, e);
          }
          onToggleBaseInfo() {
            this.setState({ bShowBaseInfo: !this.state.bShowBaseInfo });
          }
          onExitMode() {
            this.setState({ mode: G.Normal });
          }
          DeviceEvent(e, t, n) {
            e == l.XX.Activated &&
              (null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRSystem.GetTrackedDeviceClasses().some(
                    (e) => e.unIndex == n && e.eClass == l.qR.Controller,
                  )) &&
              this.forceUpdate();
          }
          render() {
            let e = [],
              t = 0;
            return (
              VRHTML.VRSystem.GetTrackedDeviceClasses().some(
                (n) => (
                  n.eClass == l.qR.Controller &&
                    (t++,
                    e.push(
                      r.createElement(D.X, {
                        key: "controllerstatus_" + n.unIndex,
                        trackedDeviceIndex: n.unIndex,
                      }),
                    )),
                  t >= 8
                ),
              ),
              e.push(r.createElement(q, { key: "basestationstatus" })),
              e.push(
                r.createElement(m.g, {
                  key: "dashboard",
                  ref: this.m_DashboardRef,
                }),
              ),
              e.push(
                r.createElement(w, {
                  key: "transition",
                  dashboardRef: this.m_DashboardRef,
                }),
              ),
              this.devPanelVisible &&
                e.push(
                  r.createElement(K, {
                    key: "devpanel",
                    onCloseDevPanel: () => this.setDevPanelVisible(!1),
                    onStartRoomSetup: this.onOpenRoomSetup,
                    onToggleBaseInfo: this.onToggleBaseInfo,
                  }),
                ),
              this.state.mode === G.RoomSetup &&
                e.push(
                  r.createElement(p, {
                    key: "roomsetup",
                    returnToMenu: this.onExitMode,
                  }),
                ),
              this.state.bShowBaseInfo && e.push(r.createElement(T, null)),
              e.push(
                r.createElement(V.Y6, {
                  key: "resetseatedcountdown",
                  dashboardRef: this.m_DashboardRef,
                }),
              ),
              (null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRProperties.GetBoolProperty(
                    l.wU,
                    l.Uk.DriverProvidedIPDVisibility_Bool,
                  )) || e.push(r.createElement(f, { key: "ipd" })),
              e.push(r.createElement(_, { key: "progressindicator" })),
              e.push(r.createElement(u, { key: "roomsetup" })),
              e.push(r.createElement(z.i, { key: "dashboardpopups" })),
              r.createElement("span", null, e)
            );
          }
        });
        (X.k_sPropShowDevPanel = "/settings/dashboard/showDevPanel"),
          (0, o.gn)([s.ak], X.prototype, "onOpenRoomSetup", null),
          (0, o.gn)([s.ak], X.prototype, "toggleDevPanel", null),
          (0, o.gn)([M.Fl], X.prototype, "devPanelVisible", null),
          (0, o.gn)([s.ak], X.prototype, "setDevPanelVisible", null),
          (0, o.gn)([s.ak], X.prototype, "onToggleBaseInfo", null),
          (0, o.gn)([s.ak], X.prototype, "onExitMode", null),
          (0, o.gn)([s.ak], X.prototype, "DeviceEvent", null),
          (X = U = (0, o.gn)([d.Pi], X)),
          console.log("systemui.tsx is running"),
          X.bootstrap("SystemUIRoot");
      },
      1283: (e, t, n) => {
        "use strict";
        n.d(t, { s: () => g });
        var i = n(655),
          o = n(7294),
          r = n(7062),
          a = n(7056),
          s = n(3568),
          l = n(5211),
          d = n(4285),
          c = n(2188),
          u = n(9809),
          h = n(5177),
          p = n(8980),
          m = n(8242);
        let v = class extends o.Component {
          constructor(e) {
            super(e), (this.state = { deviceStatus: null });
          }
          get trackerConfig() {
            return l.c6.GetTrackerBinding(this.props.trackerPath);
          }
          OnTrackerRoleChanged(e) {
            l.c6.SetTrackerBinding(
              this.props.trackerPath,
              e,
              this.trackerConfig.controller_role,
            );
          }
          OnControllerRoleChanged(e) {
            l.c6.SetTrackerBinding(
              this.props.trackerPath,
              this.trackerConfig.role,
              e,
            );
          }
          BuzzTracker() {
            l.c6.PulseHaptics(this.trackerConfig.device_path_handle);
          }
          get deviceInfo() {
            return u.I.GetDeviceInfo(this.props.trackerPath);
          }
          IsConnected() {
            return !(!this.deviceInfo || !this.deviceInfo.is_connected);
          }
          IsIdentifiable() {
            return !(!this.IsConnected() || !this.deviceInfo.is_identifiable);
          }
          render() {
            let e = [];
            "TrackerRole_Handed" == this.trackerConfig.role &&
              (e = [
                "TrackedControllerRole_Invalid",
                "TrackedControllerRole_LeftHand",
                "TrackedControllerRole_RightHand",
              ].map((e) => ({ value: e, sLabel: (0, s.Xx)("#" + e) })));
            const t = this.trackerConfig.device_path_string;
            let n = t;
            const i = "vive_tracker";
            n.includes(i) &&
              (n = n.substring(n.indexOf(i) + i.length, n.length));
            let r = null;
            return (
              this.IsConnected()
                ? this.IsIdentifiable() ||
                  (r = (0, s.Xx)(
                    "#Settings_ViveTracker_Identify_NotIdentifiable",
                  ))
                : (r = (0, s.Xx)(
                    "#Settings_ViveTracker_Identify_NotConnected",
                  )),
              o.createElement(
                m.GV,
                { className: "SettingsItem TrackerEntry" },
                o.createElement(
                  "div",
                  { className: "Label", title: t },
                  o.createElement("span", null, n),
                  o.createElement("div", {
                    title: (0, s.Xx)(
                      this.IsConnected()
                        ? "#Settings_ViveTracker_Connected"
                        : "#Settings_ViveTracker_Disconnected",
                    ),
                    className: (0, p.LJ)(
                      "TrackerConnectionIndicator",
                      ["Connected", d.E.connected && this.IsConnected()],
                      ["Disconnected", d.E.connected && !this.IsConnected()],
                    ),
                  }),
                ),
                o.createElement(
                  "div",
                  { className: (0, p.LJ)("SubsectionStem") },
                  o.createElement(
                    m.GV,
                    { title: r },
                    o.createElement(
                      h.z,
                      {
                        className: "ButtonControl",
                        enabled: this.IsIdentifiable(),
                        onClick: this.BuzzTracker,
                      },
                      (0, s.Xx)("#TrackerEditor_BuzzTracker"),
                    ),
                  ),
                ),
                o.createElement(
                  "div",
                  { className: "Subsection WithStem" },
                  o.createElement(m.Xp, {
                    label: (0, s.Xx)("#Settings_ViveTracker_Role"),
                    items: this.props.validTrackerRoles.map((e) => ({
                      value: e,
                      sLabel: (0, s.Xx)("#" + e),
                    })),
                    value: this.trackerConfig.role,
                    onChange: this.OnTrackerRoleChanged,
                  }),
                  e.length > 0 &&
                    o.createElement(m.Xp, {
                      label: (0, s.Xx)("#Settings_ViveTracker_Hand"),
                      items: e,
                      value: this.trackerConfig.controller_role,
                      onChange: this.OnControllerRoleChanged,
                    }),
                ),
              )
            );
          }
        };
        (0, i.gn)([c.Fl], v.prototype, "trackerConfig", null),
          (0, i.gn)([a.ak], v.prototype, "OnTrackerRoleChanged", null),
          (0, i.gn)([a.ak], v.prototype, "OnControllerRoleChanged", null),
          (0, i.gn)([a.ak], v.prototype, "BuzzTracker", null),
          (0, i.gn)([c.Fl], v.prototype, "deviceInfo", null),
          (v = (0, i.gn)([r.Pi], v));
        let g = class extends o.Component {
          constructor(e) {
            super(e), (this.m_nGetInputStateIntervalHandle = 0);
          }
          componentDidMount() {
            (this.m_nGetInputStateIntervalHandle = window.setInterval(
              () => u.I.GetInputState(),
              2e3,
            )),
              u.I.GetInputState();
          }
          componentWillUnmount() {
            window.clearInterval(this.m_nGetInputStateIntervalHandle);
          }
          render() {
            let e,
              t = l.c6.TrackerBindings;
            return (
              t &&
                t.trackers &&
                (e = t.trackers.map((e, n) =>
                  o.createElement(v, {
                    key: n,
                    trackerPath: e.device_path_string,
                    validTrackerRoles: t.valid_roles,
                  }),
                )),
              o.createElement("div", { className: "TrackerEditorModal" }, e)
            );
          }
        };
        g = (0, i.gn)([r.Pi], g);
      },
      6698: (e, t, n) => {
        "use strict";
        n.d(t, { u: () => o });
        var i = n(7294);
        function o(e) {
          return i.createElement(
            "svg",
            Object.assign(
              {
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                x: "0px",
                y: "0px",
                viewBox: "0 0 100 100",
                xmlSpace: "preserve",
              },
              e,
            ),
            i.createElement(
              "g",
              null,
              i.createElement("path", {
                d: "M93.8,50v28.1c0,8.6-7,15.6-15.6,15.6H21.9c-8.6,0-15.6-7-15.6-15.6V21.9c0-8.6,7-15.6,15.6-15.6H50c1.7,0,3.1,1.4,3.1,3.1\r\n\t\t\t\ts-1.4,3.1-3.1,3.1H21.9c-5.2,0-9.4,4.2-9.4,9.4v56.3c0,5.2,4.2,9.4,9.4,9.4h56.3c5.2,0,9.4-4.2,9.4-9.4V50c0-1.7,1.4-3.1,3.1-3.1\r\n\t\t\t\tS93.8,48.3,93.8,50z M68.8,12.5h14.3L47.8,47.8c-1.2,1.2-1.2,3.2,0,4.4c0,0,0,0,0,0c1.2,1.2,3.2,1.2,4.4,0c0,0,0,0,0,0l35.3-35.3\r\n\t\t\t\tv14.3c0,1.7,1.4,3.1,3.1,3.1l0,0c1.7,0,3.1-1.4,3.1-3.1V9.4c0-0.8-0.3-1.6-0.9-2.2c-0.6-0.6-1.4-0.9-2.2-0.9H68.8\r\n\t\t\t\tc-1.7,0-3.1,1.4-3.1,3.1S67,12.5,68.8,12.5z",
              }),
            ),
          );
        }
      },
      2477: (e, t, n) => {
        "use strict";
        n.d(t, { Q: () => d, g: () => l });
        var i = n(655),
          o = n(3884),
          r = n(328),
          a = n(4820);
        const s = new (class {
            constructor() {
              (this.m_SteamVR_Provider = new r.fH(this, a.Al)),
                (this.m_Steam_Client = new r.q0(this)),
                (this.m_Steam_ClientMethods = new a.x2(this.m_Steam_Client)),
                (this.m_mailbox = new o.Nv()),
                (this.m_unNextVRGamepadUIMessageId = 1);
            }
            get Steam() {
              return this.m_Steam_ClientMethods;
            }
            get SteamVR() {
              return this.m_SteamVR_Provider;
            }
            Init() {
              return (0, i.mG)(this, void 0, void 0, function* () {
                yield this.m_mailbox.Init("vrgamepadui_messages"),
                  this.m_mailbox.RegisterHandler("vrgamepadui_message", (e) => {
                    const t = (0, r.u8)(e.header);
                    t &&
                      (null == t.response_to_message_id
                        ? this.m_SteamVR_Provider.HandleVRGamepadUIMessageRequest(
                            t,
                            e.payload,
                          )
                        : this.m_Steam_Client.HandleVRGamepadUIMessageResponse(
                            t,
                            e.payload,
                          ));
                  });
              });
            }
            CreateVRGamepadUIMessageId() {
              return this.m_unNextVRGamepadUIMessageId++;
            }
            SendVRGamepadUIMessage(e, t) {
              if (!this.m_mailbox.connected) return r.n5.SendFailure;
              let n, i;
              try {
                n = a.Vg.fromObject(e).serializeBase64String();
              } catch (e) {
                return r.n5.HeaderSerializationFailure;
              }
              try {
                i = t.serializeBase64String();
              } catch (e) {
                return r.n5.PayloadSerializationFailure;
              }
              try {
                this.m_mailbox.SendMessage("web_steam_mailbox", {
                  type: "vrgamepadui_message",
                  header: n,
                  payload: i,
                });
              } catch (e) {
                return r.n5.SendFailure;
              }
              return r.n5.Success;
            }
            IsConnected() {
              return this.m_mailbox.connected;
            }
          })(),
          l = () => s.Init(),
          d = s;
      },
      9462: () => {},
      2411: () => {},
    },
    n = {};
  function i(e) {
    var o = n[e];
    if (void 0 !== o) return o.exports;
    var r = (n[e] = { id: e, exports: {} });
    return t[e].call(r.exports, r, r.exports, i), r.exports;
  }
  (i.m = t),
    (e = []),
    (i.O = (t, n, o, r) => {
      if (!n) {
        var a = 1 / 0;
        for (c = 0; c < e.length; c++) {
          for (var [n, o, r] = e[c], s = !0, l = 0; l < n.length; l++)
            (!1 & r || a >= r) && Object.keys(i.O).every((e) => i.O[e](n[l]))
              ? n.splice(l--, 1)
              : ((s = !1), r < a && (a = r));
          if (s) {
            e.splice(c--, 1);
            var d = o();
            void 0 !== d && (t = d);
          }
        }
        return t;
      }
      r = r || 0;
      for (var c = e.length; c > 0 && e[c - 1][2] > r; c--) e[c] = e[c - 1];
      e[c] = [n, o, r];
    }),
    (i.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return i.d(t, { a: t }), t;
    }),
    (i.d = (e, t) => {
      for (var n in t)
        i.o(t, n) &&
          !i.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
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
    (i.j = 929),
    (() => {
      var e = { 929: 0 };
      i.O.j = (t) => 0 === e[t];
      var t = (t, n) => {
          var o,
            r,
            [a, s, l] = n,
            d = 0;
          if (a.some((t) => 0 !== e[t])) {
            for (o in s) i.o(s, o) && (i.m[o] = s[o]);
            if (l) var c = l(i);
          }
          for (t && t(n); d < a.length; d++)
            (r = a[d]), i.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
          return i.O(c);
        },
        n = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })(),
    (i.nc = void 0);
  var o = i.O(void 0, [968, 683], () => i(9850));
  o = i.O(o);
})();
//# sourceMappingURL=systemui.js.map?v=5fb71a1b893f94a3c6dc
