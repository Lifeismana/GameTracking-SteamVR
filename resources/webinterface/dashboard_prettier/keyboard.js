/*! For license information please see keyboard.js.LICENSE.txt */
(() => {
  var e,
    t = {
      3884: (e, t, r) => {
        "use strict";
        r.d(t, {
          tS: () => a.tS,
          Nv: () => o,
          iN: () => Z,
          Oq: () => a.Oq,
          dq: () => a.dq,
          Op: () => p,
          Y9: () => ce,
          eK: () => Be,
          lx: () => D,
          XX: () => _,
          zA: () => P,
          Qu: () => x,
          vS: () => we,
          l0: () => C,
          Pw: () => M,
          LL: () => d,
          GC: () => I,
          Ic: () => me,
          Vv: () => ge,
          xj: () => be,
          xY: () => R,
          Kg: () => V,
          Uk: () => fe,
          QZ: () => c,
          zq: () => h,
          ZP: () => b,
          sH: () => Re,
          Z9: () => y,
          qC: () => S,
          a0: () => E,
          iC: () => Le,
          qA: () => l,
          UU: () => a.UU,
          sO: () => He,
          JR: () => a.JR,
          LY: () => a.LY,
          q9: () => a.q9,
          x1: () => xe,
          kH: () => Ae,
          Pd: () => a.Pd,
          sl: () => de,
          Fs: () => a.Fs,
          mT: () => a.mT,
          M9: () => a.M9,
          Dd: () => ue,
          s_: () => Ve,
          at: () => Oe,
          Bl: () => _e,
          qI: () => $,
          gQ: () => Pe,
          Sb: () => Ne,
          n0: () => Ee,
          hz: () => s,
          OK: () => ee,
          Zj: () => a.Zj,
          eQ: () => a.eQ,
          VW: () => he,
          wx: () => Te,
          Co: () => Ue,
          Kf: () => g,
          wU: () => m,
        });
        var n = r(655),
          i = r(7056);
        class o {
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
                "Connecting vrmailbox " + this.m_sMailboxName + "..."
              );
              let r = "ws://localhost:27062";
              this.m_sWebSecret && (r += "?secret=" + this.m_sWebSecret),
                (this.m_fnConnectResolve = e),
                (this.m_wsWebSocketToServer = new WebSocket(r)),
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
          static EnsureUniqueName(e) {
            if (e.includes("/")) return e;
            let t;
            return (
              (t = VRHTML ? VRHTML.GetWebHelperId() : Date.now().toString()),
              e + "/" + t + "_" + this.s_nNextMailboxNumber++
            );
          }
          Init(e, t) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              return (
                (this.m_sMailboxName = o.EnsureUniqueName(e)),
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
            null != this.m_wsWebSocketToServer &&
              1 == this.m_wsWebSocketToServer.readyState &&
              this.m_wsWebSocketToServer.send(e);
          }
          OnWebSocketMessage(e) {
            let t = JSON.parse(e.data),
              r = !1;
            if (
              (this.m_oHandlers.hasOwnProperty(t.type) &&
                (this.m_oHandlers[t.type](t), (r = !0)),
              this.m_oWaits.hasOwnProperty(t.type))
            ) {
              let e = !1;
              for (let r of this.m_oWaits[t.type])
                r.nMessageId == t.message_id && (r.callback(t), (e = !0));
              e
                ? (this.m_oWaits[t.type] = this.m_oWaits[t.type].filter(
                    (e) => e.nMessageId == t.message_id
                  ))
                : console.log(
                    `Received a ${t.type} message, but didn't have a matching message_id. Did the other end forget to mirror message_id?`
                  ),
                (r = !0);
            }
            r || console.log("Received unhandled message: ", t);
          }
          RegisterHandler(e, t) {
            this.m_oHandlers[e] = t;
          }
          SendMessage(e, t) {
            this.WebSocketSend("mailbox_send " + e + " " + JSON.stringify(t));
          }
          WaitForMessage(e, t) {
            return new Promise((r, n) => {
              this.m_oWaits[e] || (this.m_oWaits[e] = []),
                this.m_oWaits[e].push({ callback: r, nMessageId: t });
            });
          }
          WaitForConnect() {
            return new Promise((e, t) => {
              this.connected ? e() : this.m_oConnectWaits.push(e);
            });
          }
          WaitForMailbox(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              let t = {
                type: "request_mailbox_registration_notification",
                mailbox_name: e,
              };
              return this.SendMessageAndWaitForResponse(
                "web_server_mailbox",
                t,
                "mailbox_registered"
              );
            });
          }
          SendMessageAndWaitForResponse(e, t, r) {
            let n = Object.assign({}, t);
            return (
              null == n.returnAddress &&
                (n.returnAddress = this.m_sMailboxName),
              (n.message_id = this.m_nNextMessageNumber++),
              this.SendMessage(e, n),
              this.WaitForMessage(r, n.message_id)
            );
          }
          SendResponse(e, t) {
            if (!e.returnAddress)
              throw new Error("Missing return address on message");
            let r = Object.assign(Object.assign({}, t), {
              message_id: e.message_id,
            });
            (r.message_id = e.message_id), this.SendMessage(e.returnAddress, r);
          }
        }
        (o.s_nNextMailboxNumber = 1),
          (0, n.gn)([i.ak], o.prototype, "OpenWebSocketToHost", null),
          (0, n.gn)([i.ak], o.prototype, "OnWebSocketOpen", null),
          (0, n.gn)([i.ak], o.prototype, "OnWebSocketClose", null),
          (0, n.gn)([i.ak], o.prototype, "WebSocketSend", null),
          (0, n.gn)([i.ak], o.prototype, "OnWebSocketMessage", null);
        var a = r(4727);
        class s {
          constructor() {
            (this.m_mailbox = new o()), this.m_mailbox.Init("sgtransformcache");
          }
          static getInstance() {
            return s.instance || (s.instance = new s()), s.instance;
          }
          requestSGTransform(e, t = 0) {
            return new Promise((r, i) =>
              (0, n.mG)(this, void 0, void 0, function* () {
                let n = { type: "transform_request", id: e, flPushDistance: t },
                  o = yield this.m_mailbox.SendMessageAndWaitForResponse(
                    "vrcompositor_systemlayer",
                    n,
                    "transform_response"
                  );
                o.id == e && o.transform
                  ? r(o.transform)
                  : i("requestSGTransform failed");
              })
            );
          }
        }
        var l,
          d,
          c,
          h,
          u = r(7294);
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
          })(h || (h = {}));
        let m = 0,
          g = -1;
        var v, _, y, b, S, f, k, R, w, M, C, T, D, I, V, E, P, x;
        function O(e, t) {
          let r = e.getAttribute(t);
          if (r && r.length > 0) {
            if ("undefined" == r) return;
            let e = [];
            for (let t of r.split(" ")) 0 != t.length && e.push(parseFloat(t));
            if (e.length > 0) return e;
          }
        }
        function L(e, t) {
          let r = e.getAttribute(t);
          if (r && r.length > 0) return parseFloat(r);
        }
        function B(e, t) {
          let r = e.getAttribute(t);
          if (r && r.length > 0) return parseInt(r);
        }
        function H(e, t) {
          let r = e.getAttribute(t);
          if (r && r.length > 0)
            return (
              "true" == r ||
              (r.length > 0 && 0 != parseInt(r) && !isNaN(parseInt(r)))
            );
        }
        function A(e, t) {
          let r = e.getAttribute(t);
          if (r && r.length > 0) return r;
        }
        function N(e, t) {
          return Y(A(e, t));
        }
        function U(e, t) {
          let r = { type: e, properties: {} };
          return (
            t.id && (r.properties.id = Y(t.id)),
            (r.properties.sgid = B(t, "sgid")),
            r
          );
        }
        function F(e, t) {
          let [r, n] = (function (e, t) {
              let r = t.buildNode;
              if (r) return r(e, t);
              let n = Object.assign({}, e),
                i = null;
              switch (t.nodeName.toUpperCase()) {
                case "VSG-TRANSFORM":
                  (i = U("transform", t)),
                    (i.properties.translation = O(t, "translation")),
                    (i.properties.rotation = O(t, "rotation")),
                    (i.properties.scale = O(t, "scale")),
                    (i.properties["curvature-pitch"] = L(t, "curvature-pitch")),
                    (i.properties["transform-path"] = A(t, "transform-path")),
                    (i.properties["invert-parent-panel-pitch"] = H(
                      t,
                      "invert-parent-panel-pitch"
                    )),
                    (i.properties["parent-path"] = A(t, "parent-path")),
                    (i.properties["parent-origin"] = A(t, "parent-origin")),
                    (i.properties["parent-id"] = N(t, "parent-id"));
                  break;
                case "VSG-TRACKING-STATE-VISIBILITY":
                  (i = U("trackingstatevisibility", t)),
                    (i.properties["visible-0dof"] = H(t, "visible-0dof")),
                    (i.properties["visible-3dof"] = H(t, "visible-3dof")),
                    (i.properties["visible-6dof"] = H(t, "visible-6dof"));
                  break;
                case "VSG-ELASTIC-HEAD-TRANSFORM":
                  (i = U("elasticheadtransform", t)),
                    (i.properties["start-angle-threshold"] = L(
                      t,
                      "start-angle-threshold"
                    )),
                    (i.properties["stop-angle-threshold"] = L(
                      t,
                      "stop-angle-threshold"
                    )),
                    (i.properties["ease-in-time"] = L(t, "ease-in-time")),
                    (i.properties["ease-in-power"] = L(t, "ease-in-power")),
                    (i.properties["ease-out-angle-threshold"] = L(
                      t,
                      "ease-out-angle-threshold"
                    )),
                    (i.properties["ease-out-power"] = L(t, "ease-out-power")),
                    (i.properties["min-angular-velocity"] = L(
                      t,
                      "min-angular-velocity"
                    )),
                    (i.properties["max-angular-velocity"] = L(
                      t,
                      "max-angular-velocity"
                    )),
                    (i.properties["lock-to-horizon"] = H(t, "lock-to-horizon")),
                    (i.properties["translation-behavior"] = B(
                      t,
                      "translation-behavior"
                    ));
                  break;
                case "VSG-LINE":
                  (i = U("line", t)),
                    (i.properties["target-id"] = N(t, "target-id")),
                    (i.properties.thickness = L(t, "thickness")),
                    (i.properties["start-buffer"] = L(t, "start-buffer")),
                    (i.properties["end-buffer"] = L(t, "end-buffer"));
                  break;
                case "VSG-LINE-CONSTRAINED-TRANSFORM":
                  (i = U("line-constrained-transform", t)),
                    (i.properties["target-id"] = N(t, "target-id")),
                    (i.properties["source-id"] = N(t, "source-id")),
                    (i.properties["source-distance"] = L(t, "source-distance")),
                    (i.properties["target-limit"] = L(t, "target-limit"));
                  break;
                case "VSG-CALLOUT-TRANSFORM":
                  (i = U("callout-transform", t)),
                    (i.properties.offset = O(t, "offset"));
                  break;
                case "VSG-HEAD-FACING-TRANSFORM":
                  i = U("head-facing-transform", t);
                  break;
                case "VSG-PIN-TO-VIEW-TRANSFORM":
                  (i = U("pin-to-view-transform", t)),
                    (i.properties["offscreen-z-depth"] = L(
                      t,
                      "offscreen-z-depth"
                    )),
                    (i.properties["off-axis-limit"] = L(t, "off-axis-limit")),
                    (i.properties["transition-limit"] = L(
                      t,
                      "transition-limit"
                    ));
                  break;
                case "VSG-MANIPULATION-TRANSFORM":
                  (i = U("manipulation-transform", t)),
                    (i.properties["is-moving"] = H(t, "is-moving")),
                    (i.properties["parent-path"] = A(t, "parent-path")),
                    (i.properties.translation = O(t, "translation")),
                    (i.properties.rotation = O(t, "rotation")),
                    (i.properties.scale = O(t, "scale"));
                  break;
                case "VSG-GRAB-TRANSFORM":
                  (i = U("grab-transform", t)),
                    (i.properties["parent-path"] = A(t, "parent-path")),
                    (i.properties.translation = O(t, "translation")),
                    (i.properties.rotation = O(t, "rotation")),
                    (i.properties.scale = O(t, "scale"));
              }
              return [n, i];
            })(e, t),
            i = [];
          for (let e = 0; e < t.children.length; e++) {
            let n = t.children.item(e);
            if (n.children) {
              let e = F(r, n);
              e && (i = i.concat(e));
            }
          }
          return r.bShouldAbort
            ? null
            : n
            ? (i.length > 0 && (n.children = i), [n])
            : i.length > 0
            ? 1 == i.length
              ? i
              : [{ children: i }]
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
        })(v || (v = {})),
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
          })(k || (k = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.Starting = 1)] = "Starting"),
              (e[(e.Quitting = 2)] = "Quitting"),
              (e[(e.Running = 3)] = "Running"),
              (e[(e.Waiting = 4)] = "Waiting");
          })(R || (R = {})),
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
          })(w || (w = {})),
          (function (e) {
            (e[(e.Normal = 0)] = "Normal"),
              (e[(e.Password = 1)] = "Password"),
              (e[(e.Submit = 2)] = "Submit");
          })(M || (M = {})),
          (function (e) {
            (e[(e.SingleLine = 0)] = "SingleLine"),
              (e[(e.MultipleLines = 1)] = "MultipleLines");
          })(C || (C = {})),
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
          })(T || (T = {})),
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
          })(V || (V = {})),
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
          })(E || (E = {})),
          (function (e) {
            (e[(e.Hostname = 0)] = "Hostname"),
              (e[(e.IP = 1)] = "IP"),
              (e[(e.Version = 2)] = "Version"),
              (e[(e.NetworkConnections = 3)] = "NetworkConnections"),
              (e[(e.XRS_CalibrationDate = 4)] = "XRS_CalibrationDate");
          })(P || (P = {})),
          (function (e) {
            (e[(e.Unavailable = 0)] = "Unavailable"),
              (e[(e.Active = 1)] = "Active"),
              (e[(e.Off = 2)] = "Off");
          })(x || (x = {}));
        let G,
          W,
          z,
          K,
          q = [],
          X = null,
          Q = null,
          j = null;
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
          var t, r;
          (r = e),
            (null == (t = j) || null == r
              ? t == r
              : t.color_mult == r.color_mult &&
                t.reflection_mult == r.reflection_mult &&
                t.roomview_mult.toString() == r.roomview_mult.toString() &&
                t.allow_skydome == r.allow_skydome) || ((j = e), te());
        }
        function te() {
          X ||
            (X = window.setTimeout(
              () =>
                (0, n.mG)(this, void 0, void 0, function* () {
                  let e = document.body;
                  W && (e = W);
                  let t = {
                    type: "root",
                    rootproperties: {
                      relatchDashboardTransform: K,
                      allowDismissOnClick: true,
                      sceneColorCorrection: j,
                    },
                    children: F(
                      {
                        currentPanel: null,
                        bInsideReparentedPanel: !1,
                        bShouldAbort: !1,
                      },
                      e
                    ),
                  };
                  Q ||
                    (console.log("Initializing sg_mailbox"),
                    (Q = new o()),
                    yield Q.Init("sg_mailbox", z));
                  let r = {
                    type: "update_scene_graph",
                    owning_overlay_key: J(),
                    scene_graph: t,
                    retired_sgids: q,
                  };
                  Q.SendMessage("vrcompositor_systemlayer", r),
                    (X = null),
                    (q = []),
                    (K = !1);
                }),
              0
            ));
        }
        function re(e, t) {
          return e ? { x: e.x ? e.x : t.x, y: e.y ? e.y : t.y } : t;
        }
        function ne(e, t) {
          return e
            ? { x: e.x ? e.x : t.x, y: e.y ? e.y : t.y, z: e.z ? e.z : t.z }
            : t;
        }
        function ie(e, t) {
          return e
            ? { r: e.r ? e.r : t.r, g: e.g ? e.g : t.g, b: e.b ? e.b : t.b }
            : t;
        }
        function oe(e) {
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
        class se extends u.Component {
          constructor(e) {
            var t;
            super(e),
              (this.m_domRef = u.createRef()),
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
            return U(this.getNodeType(), e);
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
            return u.cloneElement(this.internalRender(), {
              id: this.props.id,
              "vsg-type": this.getNodeType(),
              sgid: this.m_SGID,
              ref: this.m_domRef,
            });
          }
          internalRender() {
            return this.m_buildNodeOverride
              ? u.createElement("vsg-node", null, this.props.children)
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
        (0, n.gn)([i.ZP], le.prototype, "buildNode", null);
        class de extends se {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "mountedscenegraph";
          }
          buildNode(e, t) {
            const r = this.createSgNode(t);
            return (
              (r.properties.mountable_id = Y(this.props.mountedId)),
              this.props.fDashboardScale &&
                (r.properties.dashboard_scale = this.props.fDashboardScale),
              [e, r]
            );
          }
        }
        (0, n.gn)([i.ZP], de.prototype, "buildNode", null);
        class ce extends se {
          constructor(e) {
            var t;
            if (
              (super(e),
              void 0 !== this.props.iconUri &&
                void 0 !== this.props.iconOverlayKey)
            )
              throw new Error(
                "DashboardTab cannot have both an explicit iconUri and iconOverlayKey set in props."
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
            var r;
            const n = this.createSgNode(t);
            return (
              (n.properties.tab_name =
                null !== (r = this.props.tabName) && void 0 !== r ? r : ""),
              (n.properties.mountable_id = Y(this.m_sMountableUnqualifiedID)),
              (n.properties.icon_uri = this.props.iconUri),
              (n.properties.icon_overlay_key = this.props.iconOverlayKey),
              (n.properties.summon_overlay_key = this.props.summonOverlayKey),
              [e, n]
            );
          }
          internalRender() {
            return u.createElement(
              "vsg-node",
              { id: this.props.id },
              u.createElement(
                le,
                { id: this.m_sMountableUnqualifiedID },
                this.props.children
              )
            );
          }
        }
        (0, n.gn)([i.ZP], ce.prototype, "buildNode", null);
        class he extends se {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "tint";
          }
          buildNode(e, t) {
            const r = this.createSgNode(t);
            if (this.props.color)
              if ("string" == typeof this.props.color)
                r.properties.color = this.props.color;
              else {
                let e = ie(this.props.color, { r: 1, g: 1, b: 1 });
                r.properties.color = [e.r, e.g, e.b];
              }
            else r.properties.color = [1, 1, 1];
            return [e, r];
          }
        }
        (0, n.gn)([i.ZP], he.prototype, "buildNode", null);
        class ue extends se {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "opacity";
          }
          buildNode(e, t) {
            const r = this.createSgNode(t);
            return (r.properties.opacity = this.props.value), [e, r];
          }
        }
        var pe, me, ge, ve, _e, ye, be, Se, fe, ke, Re, we, Me, Ce;
        (0, n.gn)([i.ZP], ue.prototype, "buildNode", null),
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
                "Transform cannot have more than one parent_ property set."
              );
          }
          internalRender() {
            let e, t, r;
            this.props.transform
              ? ((e = this.props.transform.translation),
                (t = this.props.transform.rotation),
                (r = this.props.transform.scale))
              : ((e = ne(this.props.translation, { x: 0, y: 0, z: 0 })),
                (t =
                  this.props.rotation && "w" in this.props.rotation
                    ? this.props.rotation
                    : (0, a.UU)(
                        (0, a.mT)(
                          ne(this.props.rotation, { x: 0, y: 0, z: 0 }),
                          Math.PI / 180
                        )
                      )),
                (r =
                  "number" == typeof this.props.scale
                    ? {
                        x: this.props.scale,
                        y: this.props.scale,
                        z: this.props.scale,
                      }
                    : ne(this.props.scale, { x: 1, y: 1, z: 1 })));
            let n = oe(e),
              i = ae(t),
              o = oe(r);
            return u.createElement(
              "vsg-transform",
              {
                translation: n,
                rotation: i,
                scale: o,
                "curvature-pitch": this.props.curvature_pitch,
                "invert-parent-panel-pitch":
                  this.props.invert_parent_panel_pitch,
                "transform-path": this.props.transform_path,
                "parent-path": this.props.parent_path,
                "parent-origin": pe[this.props.parent_origin],
                "parent-id": this.props.parent_id,
              },
              this.props.children
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
          })(ge || (ge = {})),
          (function (e) {
            (e[(e.Mono = 0)] = "Mono"),
              (e[(e.Parallel = 1)] = "Parallel"),
              (e[(e.Crossed = 2)] = "Crossed"),
              (e[(e.Panorama = 3)] = "Panorama"),
              (e[(e.StackedPanorama = 4)] = "StackedPanorama");
          })(ve || (ve = {})),
          (function (e) {
            (e[(e.Visible = 0)] = "Visible"),
              (e[(e.SkipInSceneGraph = 1)] = "SkipInSceneGraph"),
              (e[(e.Hidden = 2)] = "Hidden");
          })(_e || (_e = {}));
        class Ve extends se {
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
              r = void 0 !== this.props.meters_per_pixel,
              n = void 0 !== this.props.target_dpi_panel_id,
              i =
                void 0 !== this.props.rendermodel_component_device_index ||
                void 0 !== this.props.rendermodel_component_name;
            if (
              i &&
              (void 0 === this.props.rendermodel_component_device_index ||
                void 0 === this.props.rendermodel_component_name)
            )
              throw new Error(
                "Panel requires both rendermodel_component_device_index and rendermodel_component_name to be a rendermodel texture."
              );
            const o = [t, r, n, i].filter((e) => e).length,
              a =
                "an (explicit width and/or height), an explicit meters_per_pixel, a target_panel_dpi panel ID, or a rendermodel name";
            if (0 == o)
              throw new Error(
                `Panel requires one of the following props: ${a}.`
              );
            if (o > 1)
              throw new Error(
                `Panel cannot have more of the following of the following props: ${a}.`
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
            Ve.s_bPanelsAreDirty = !0;
          }
          componentDidMount() {
            super.componentDidMount(),
              (this.m_resizeObserver = new ResizeObserver(
                this.onResizeObserved
              )),
              this.m_resizeObserver.observe(this.getCurrentRootElement()),
              (this.m_nEmbeddedIndex = Ee.Current().addEmbeddedPanelUVs(this)),
              (Ve.s_bPanelsAreDirty = !0),
              this.getCurrentRootElement().addEventListener(
                "mousedown",
                this.onPanelMouseDown
              ),
              this.forceUpdate();
          }
          onResizeObserved(e, t) {
            Ee.Current().forceLayoutUpdate();
          }
          componentWillUnmount() {
            this.m_resizeObserver &&
              (this.m_resizeObserver.disconnect(),
              (this.m_resizeObserver = null)),
              this.stopOverDragBlocking(),
              this.getCurrentRootElement().removeEventListener(
                "mousedown",
                this.onPanelMouseDown
              ),
              (Ve.s_bPanelsAreDirty = !0),
              Ee.Current().removeEmbeddedPanelUVs(this),
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
                e.height - t.height - t.y
              ),
              this.createOverdragBlockingElement(0, t.y, t.x, t.height),
              this.createOverdragBlockingElement(
                t.x + t.width,
                t.y,
                e.width - t.width - t.x,
                t.height
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
                this.onWindowMouseUp
              ),
              (this.m_bOverdragBlocking = !1));
          }
          createOverdragBlockingElement(e, t, r, n) {
            let i = document.createElement("div");
            (i.style.position = "absolute"),
              (i.style.top = t + "px"),
              (i.style.left = e + "px"),
              (i.style.width = r + "px"),
              (i.style.height = n + "px"),
              (i.style.zIndex = "90019001"),
              this.m_overdragBlockingElements.push(i),
              document.body.appendChild(i);
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
            var r, n, i, o, a;
            if (this.visibility != _e.Visible) return [e, null];
            let s = Object.assign(Object.assign({}, e), {
                bInsideReparentedPanel: !1,
                currentPanel: this,
              }),
              l = this.createSgNode(t),
              d = { x: 0, y: 0 };
            d =
              "object" == typeof this.props.origin
                ? re(this.props.origin, { x: 0, y: 0 })
                : Ie(this.props.origin);
            const c = this.props.overlay_key,
              h = J();
            return (
              c && c.length > 0
                ? (l.properties.key = c)
                : h
                ? (l.properties.key = h)
                : (l.properties.overlay_handle =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VROverlay.ThisOverlayHandle()),
              (l.properties.uv_min =
                null !== (r = De(this.m_UVsMin)) && void 0 !== r ? r : void 0),
              (l.properties.uv_max =
                null !== (n = De(this.m_UVsMax)) && void 0 !== n ? n : void 0),
              (l.properties.width =
                null !== (i = this.props.width) && void 0 !== i ? i : void 0),
              (l.properties.height =
                null !== (o = this.props.height) && void 0 !== o ? o : void 0),
              (l.properties["min-width"] =
                null !== (a = this.props.min_width) && void 0 !== a
                  ? a
                  : void 0),
              (l.properties["target-width-anchor-id"] = Y(
                this.props.target_width_anchor_id
              )),
              (l.properties["target-dpi-panel-id"] = Y(
                this.props.target_dpi_panel_id
              )),
              (l.properties["target-dpi-multiplier"] =
                this.props.target_dpi_multiplier),
              (l.properties["meters-per-pixel"] = this.props.meters_per_pixel),
              (l.properties["subview-parent-panel-id"] = Y(
                this.props.subview_parent_panel_id
              )),
              (l.properties.curvature = this.props.curvature),
              (l.properties["curvature-origin-id"] = Y(
                this.props.curvature_origin_id
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
              r = this.m_UVsMax.v - this.m_UVsMin.v;
            return {
              u: this.m_UVsMin.u + t * e.u,
              v: this.m_UVsMin.v + r * e.v,
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
            return u.createElement(
              "vsg-node",
              {
                style: {
                  display: this.visibility == _e.Hidden ? "none" : null,
                },
              },
              this.props.children
            );
          }
        }
        (Ve.s_bPanelsAreDirty = !1),
          (0, n.gn)([i.ZP], Ve.prototype, "onResizeObserved", null),
          (0, n.gn)([i.ZP], Ve.prototype, "onPanelMouseDown", null),
          (0, n.gn)([i.ZP], Ve.prototype, "onWindowMouseUp", null),
          (0, n.gn)([i.ZP], Ve.prototype, "buildNode", null),
          (function (e) {
            (e[(e.Canvas = 0)] = "Canvas"), (e[(e.Image = 1)] = "Image");
          })(ye || (ye = {}));
        class Ee extends u.Component {
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
              (Ee.s_Current = this),
              (this.state = {
                bFontsLoaded: !1,
                nForcedUpdateNumber: 0,
                bShowDebugPointer: !1,
                eRenderMode: VRHTML.VRUtil.BSupportsCEFCanvas()
                  ? ye.Canvas
                  : ye.Image,
              }),
              (this.m_DomRef = u.createRef()),
              (this.m_scalingDomRef = u.createRef()),
              (this.m_CanvasRef = u.createRef()),
              (this.m_EmbeddedDataImgRef = u.createRef()),
              (this.m_DebugPointerRef = u.createRef());
          }
          static get IsSceneGraphApp() {
            return null !== Ee.Current();
          }
          static Current() {
            return Ee.s_Current;
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
            (Ve.s_bPanelsAreDirty = !0),
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
            let r = Math.max(
              0,
              Math.floor((this.m_nEmbeddedDataWidth - 1) / 3)
            );
            for (let e = 0; e < r; e++)
              this.m_rAvailableEmbeddedIndicesQueue.push(e);
            var n, i, o;
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
                ((n = this.props.owning_overlay_key),
                (i = this.m_DomRef.current),
                (o = this.props.web_secret),
                (G = n),
                (W = i),
                (z = o),
                console.log("Setting owning overlay key to " + n));
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
            let r = [];
            return (
              this.state.bShowDebugPointer && r.push("ShowDebugPointer"),
              u.createElement(
                "vsg-app",
                {
                  class: r.join(" "),
                  ref: this.m_DomRef,
                  "sg-forced-update-number": this.state.nForcedUpdateNumber,
                },
                u.createElement("div", {
                  className: "DebugPointer",
                  ref: this.m_DebugPointerRef,
                }),
                e &&
                  u.createElement("img", {
                    ref: this.m_EmbeddedDataImgRef,
                    className: "EmbeddedData",
                    height: Ee.k_EmbeddedDataRows,
                  }),
                t &&
                  u.createElement("canvas", {
                    ref: this.m_CanvasRef,
                    className: "EmbeddedData",
                    height: Ee.k_EmbeddedDataRows,
                  }),
                u.createElement(
                  "div",
                  { className: "AppSceneGraph", ref: this.m_scalingDomRef },
                  this.state.bFontsLoaded && this.props.children
                )
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
                      4
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
                    Ee.k_EmbeddedDataRows
                  ))),
              this.updateAllPanelBounds();
          }
          updateAllPanelBounds() {
            let e = this.m_DomRef.current.ownerDocument.defaultView,
              t = this.m_scalingDomRef.current.getBoundingClientRect(),
              r = t.width / this.m_fCurrentScale,
              n = t.height / this.m_fCurrentScale,
              i = { x: e.innerWidth / r, y: e.innerHeight / n },
              o = Math.min(i.x, i.y, 1);
            o != this.m_fCurrentScale &&
              (1 != o
                ? this.m_scalingDomRef.current.setAttribute(
                    "style",
                    "transform: scale(" + o + "); transform-origin: top left"
                  )
                : this.m_scalingDomRef.current.removeAttribute("style"),
              (this.m_fCurrentScale = o),
              (Ve.s_bPanelsAreDirty = !0)),
              Ve.s_bPanelsAreDirty &&
                (this.m_mapPanels.forEach((e) => e.updateLayoutValues()),
                te(),
                (Ve.s_bPanelsAreDirty = !1),
                this.updateEmbeddedData());
          }
          updateEmbeddedData() {
            if (this.m_EmbeddedDataImgRef || this.m_CanvasRef)
              if (
                (this.setPixel(
                  0,
                  "V".charCodeAt(0),
                  "S".charCodeAt(0),
                  "G".charCodeAt(0)
                ),
                this.m_rEmbeddedIndicesToClear.forEach((e) => {
                  let t = 1 + 3 * e;
                  for (let e = 0; e < 3; e++) this.setPixel(t + e, 0, 0, 0, 0);
                }),
                (this.m_rEmbeddedIndicesToClear = []),
                this.m_mapPanels.forEach((e, t) => {
                  let r = e.m_Rect.x,
                    n = e.m_Rect.x + e.m_Rect.width,
                    i = e.m_Rect.y,
                    o = e.m_Rect.y + e.m_Rect.height,
                    a = 1 + 3 * e.getEmbeddedIndex();
                  if (e.isExternal() || r >= n || i >= o)
                    for (let e = 0; e < 3; e++)
                      this.setPixel(a + 1, 0, 0, 0, 0);
                  else
                    this.setPixel(a, (65280 & r) >> 8, 255 & r, 0),
                      this.setPixel(a + 1, (65280 & n) >> 8, 255 & n, 255 & i),
                      this.setPixel(
                        a + 2,
                        (65280 & o) >> 8,
                        255 & o,
                        (65280 & i) >> 8
                      );
                }),
                this.m_EmbeddedDataImgRef && this.state.eRenderMode == ye.Image)
              ) {
                const e = VRHTML.VRUtil.GetEmbeddedScanlineAsURIImage(
                  this.m_nEmbeddedDataWidth,
                  1,
                  4
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
                  this.m_Pixels.height
                ),
                  (this.m_nDirtyXMin = -1),
                  (this.m_nDirtyXMax = -1);
              }
          }
          setPixel(e, t, r, n, i = 255) {
            if (
              this.m_EmbeddedDataImgRGBBuffer &&
              this.state.eRenderMode == ye.Image
            ) {
              const o = new DataView(this.m_EmbeddedDataImgRGBBuffer);
              o.setUint8(4 * e + 0, t),
                o.setUint8(4 * e + 1, r),
                o.setUint8(4 * e + 2, n),
                o.setUint8(4 * e + 3, i);
            } else
              this.m_Pixels &&
                this.state.eRenderMode == ye.Canvas &&
                ((this.m_Pixels.data[4 * e + 0] = t),
                (this.m_Pixels.data[4 * e + 1] = r),
                (this.m_Pixels.data[4 * e + 2] = n),
                (this.m_Pixels.data[4 * e + 3] = i),
                (-1 === this.m_nDirtyXMin || e < this.m_nDirtyXMin) &&
                  (this.m_nDirtyXMin = e),
                (-1 === this.m_nDirtyXMax || e > this.m_nDirtyXMax) &&
                  (this.m_nDirtyXMax = e));
          }
        }
        (Ee.s_Current = null),
          (Ee.k_EmbeddedDataRows = 1),
          (0, n.gn)([i.ak], Ee.prototype, "toggleDebugPointer", null),
          (0, n.gn)([i.ak], Ee.prototype, "onMouseMove", null),
          (0, n.gn)([i.ak], Ee.prototype, "forceLayoutUpdate", null),
          (0, n.gn)([i.ak], Ee.prototype, "onMutation", null),
          (0, n.gn)(
            [i.ZP],
            class extends se {
              constructor(e) {
                super(e), super.setBuildNodeOverride(this.buildNode);
              }
              getNodeType() {
                return "texture";
              }
              buildNode(e, t) {
                const r = this.createSgNode(t);
                return (
                  (r.properties.id = this.props.id),
                  (r.properties.source = this.props.source),
                  [e, r]
                );
              }
            }.prototype,
            "buildNode",
            null
          ),
          (0, n.gn)(
            [i.ZP],
            class extends se {
              constructor(e) {
                super(e), super.setBuildNodeOverride(this.buildNode);
              }
              getNodeType() {
                return "tilefloor";
              }
              buildNode(e, t) {
                const r = this.createSgNode(t);
                if (
                  ((r.properties["tile-size"] = this.props["tile-size"]),
                  (r.properties["tile-gap"] = this.props["tile-gap"]),
                  (r.properties["inner-radius"] = this.props["inner-radius"]),
                  (r.properties["outer-radius"] = this.props["outer-radius"]),
                  (r.properties["fade-distance"] = this.props["fade-distance"]),
                  (r.properties["min-tile-scale-at-periphery"] =
                    this.props["min-tile-scale-at-periphery"]),
                  (r.properties.height = this.props.height),
                  (r.properties.offset = [
                    this.props.offset.x,
                    this.props.offset.y,
                  ]),
                  "string" == typeof this.props.color)
                )
                  r.properties.color = this.props.color;
                else if (this.props.color) {
                  let e = ie(this.props.color, { r: 0, g: 0, b: 0 });
                  r.properties.color = [e.r, e.g, e.b];
                }
                return (
                  (r.properties["center-randomization"] =
                    this.props["center-randomization"]),
                  (r.properties["luma-randomization-min-gain"] =
                    this.props["luma-randomization"]["min-gain"]),
                  (r.properties["luma-randomization-max-gain"] =
                    this.props["luma-randomization"]["max-gain"]),
                  (r.properties["reflection-randomization-min-gain"] =
                    this.props["reflection-randomization"]["min-gain"]),
                  (r.properties["reflection-randomization-max-gain"] =
                    this.props["reflection-randomization"]["max-gain"]),
                  (r.properties["normal-randomization-degrees"] =
                    this.props["normal-randomization-degrees"]),
                  this.props.chevron &&
                    ((r.properties["chevron-luma-scale"] =
                      this.props.chevron["luma-scale"]),
                    (r.properties["chevron-reflection-scale"] =
                      this.props.chevron["reflection-scale"])),
                  (r.properties["auto-subdivide"] =
                    this.props["auto-subdivide"]),
                  [e, r]
                );
              }
            }.prototype,
            "buildNode",
            null
          ),
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
            const r = this.createSgNode(t);
            if (
              ((r.properties.source = this.props.source),
              (r.properties["texture-id"] = Y(this.props["texture-id"])),
              (r.properties["input-path"] = this.props["input-path"]),
              this.props.fresnel)
            ) {
              let e = this.props.fresnel;
              if ("string" == typeof e.color) r.properties.color = e.color;
              else {
                let t = ie(e.color, { r: 0, g: 0, b: 0 });
                r.properties.color = [t.r, t.g, t.b];
              }
              (r.properties.opacity = e.opacity ? e.opacity : 1),
                (r.properties.strength = e.strength ? e.strength : 1);
            }
            return (
              (r.properties.wireframe = this.props.wireframe),
              (r.properties.solid = this.props.solid),
              (r.properties.culling = this.props.culling),
              (r.properties.stencil_mask = this.props.stencil_mask),
              (r.properties["no-depth-write"] = this.props["no-depth-write"]),
              (r.properties["no-depth-test"] = this.props["no-depth-test"]),
              [e, r]
            );
          }
        }
        (0, n.gn)([i.ZP], Pe.prototype, "buildNode", null),
          (0, n.gn)(
            [i.ZP],
            class extends se {
              constructor(e) {
                super(e), super.setBuildNodeOverride(this.buildNode);
              }
              getNodeType() {
                return "ltcquad";
              }
              buildNode(e, t) {
                const r = this.createSgNode(t);
                if (
                  ((r.properties.width = this.props.width),
                  (r.properties.height = this.props.height),
                  (r.properties["near-z"] = this.props["near-z"]),
                  (r.properties["far-z"] = this.props["far-z"]),
                  (r.properties.debug = this.props.debug),
                  this.props.diffuse)
                ) {
                  let e = this.props.diffuse;
                  (r.properties["diffuse-resolution"] = e.resolution),
                    (r.properties["diffuse-size"] = e.size);
                }
                if (this.props.specular) {
                  let e = this.props.specular;
                  if ("string" == typeof e.color) r.properties.color = e.color;
                  else {
                    let t = ie(e.color, { r: 0, g: 0, b: 0 });
                    r.properties.color = [t.r, t.g, t.b];
                  }
                }
                return [e, r];
              }
            }.prototype,
            "buildNode",
            null
          );
        class xe extends se {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return u.createElement("vsg-line", {
              "target-id": this.props.target_id,
              thickness: this.props.thickness,
              "start-buffer": this.props.start_buffer,
              "end-buffer": this.props.end_buffer,
            });
          }
        }
        class Oe extends se {
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
            let r = null;
            "object" == typeof this.props.location
              ? (r = re(this.props.location, { x: 0, y: 0 }))
              : "number" == typeof this.props.location &&
                (r = Ie(this.props.location));
            let n = this.createSgNode(t);
            if (this.props.latched && null !== this.m_latchedPosition)
              (n.properties["anchor-u"] = this.m_latchedPosition.u),
                (n.properties["anchor-v"] = this.m_latchedPosition.v);
            else if (r) {
              const t = { u: 0.5 * r.x + 0.5, v: -0.5 * r.y + 0.5 },
                i =
                  !e.currentPanel || e.currentPanel.props.overlay_key
                    ? t
                    : e.currentPanel.scaleLocalUVToGlobal(t);
              (n.properties["anchor-u"] = i.u),
                (n.properties["anchor-v"] = i.v);
            } else {
              if (!e.currentPanel)
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              const r = t.ownerDocument,
                i = t.getBoundingClientRect(),
                o = i.left + i.width / 2,
                a = i.top + i.height / 2,
                s = e.currentPanel.m_Rect;
              if (o < s.x || o > s.x + s.width || a < s.y || a > s.y + s.height)
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              const l = r.defaultView.innerWidth,
                d = r.defaultView.innerHeight;
              if (!(d > 0 && l > 0))
                return [
                  Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                  null,
                ];
              (n.properties["anchor-u"] = o / l),
                (n.properties["anchor-v"] = a / d);
            }
            return (
              (this.m_latchedPosition = {
                u: n.properties["anchor-u"],
                v: n.properties["anchor-v"],
              }),
              [e, n]
            );
          }
        }
        (0, n.gn)([i.ZP], Oe.prototype, "buildNode", null),
          (function (e) {
            (e[(e.LockedToParent = 0)] = "LockedToParent"),
              (e[(e.LockedToWorld = 1)] = "LockedToWorld");
          })(Se || (Se = {}));
        class Le extends se {
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
              r = this.props.ease_out_angle_threshold
                ? (this.props.ease_out_angle_threshold * Math.PI) / 180
                : null,
              n = this.props.min_angular_velocity
                ? (this.props.min_angular_velocity * Math.PI) / 180
                : null,
              i = this.props.max_angular_velocity
                ? (this.props.max_angular_velocity * Math.PI) / 180
                : null;
            return u.createElement(
              "vsg-elastic-head-transform",
              {
                "start-angle-threshold": e,
                "stop-angle-threshold": t,
                "ease-in-time": this.props.ease_in_time,
                "ease-in-power": this.props.ease_in_power,
                "ease-out-angle-threshold": r,
                "ease-out-power": this.props.ease_out_power,
                "min-angular-velocity": n,
                "max-angular-velocity": i,
                "lock-to-horizon": this.props.lock_to_horizon,
                "translation-behavior": this.props.translation_behavior,
              },
              this.props.children
            );
          }
        }
        ((Ce = fe || (fe = {}))[(Ce.Invalid = 0)] = "Invalid"),
          (Ce[(Ce.TrackingSystemName_String = 1e3)] =
            "TrackingSystemName_String"),
          (Ce[(Ce.ModelNumber_String = 1001)] = "ModelNumber_String"),
          (Ce[(Ce.SerialNumber_String = 1002)] = "SerialNumber_String"),
          (Ce[(Ce.RenderModelName_String = 1003)] = "RenderModelName_String"),
          (Ce[(Ce.WillDriftInYaw_Bool = 1004)] = "WillDriftInYaw_Bool"),
          (Ce[(Ce.ManufacturerName_String = 1005)] = "ManufacturerName_String"),
          (Ce[(Ce.TrackingFirmwareVersion_String = 1006)] =
            "TrackingFirmwareVersion_String"),
          (Ce[(Ce.HardwareRevision_String = 1007)] = "HardwareRevision_String"),
          (Ce[(Ce.AllWirelessDongleDescriptions_String = 1008)] =
            "AllWirelessDongleDescriptions_String"),
          (Ce[(Ce.ConnectedWirelessDongle_String = 1009)] =
            "ConnectedWirelessDongle_String"),
          (Ce[(Ce.DeviceIsWireless_Bool = 1010)] = "DeviceIsWireless_Bool"),
          (Ce[(Ce.DeviceIsCharging_Bool = 1011)] = "DeviceIsCharging_Bool"),
          (Ce[(Ce.DeviceBatteryPercentage_Float = 1012)] =
            "DeviceBatteryPercentage_Float"),
          (Ce[(Ce.StatusDisplayTransform_Matrix34 = 1013)] =
            "StatusDisplayTransform_Matrix34"),
          (Ce[(Ce.Firmware_UpdateAvailable_Bool = 1014)] =
            "Firmware_UpdateAvailable_Bool"),
          (Ce[(Ce.Firmware_ManualUpdate_Bool = 1015)] =
            "Firmware_ManualUpdate_Bool"),
          (Ce[(Ce.Firmware_ManualUpdateURL_String = 1016)] =
            "Firmware_ManualUpdateURL_String"),
          (Ce[(Ce.HardwareRevision_Uint64 = 1017)] = "HardwareRevision_Uint64"),
          (Ce[(Ce.FirmwareVersion_Uint64 = 1018)] = "FirmwareVersion_Uint64"),
          (Ce[(Ce.FPGAVersion_Uint64 = 1019)] = "FPGAVersion_Uint64"),
          (Ce[(Ce.VRCVersion_Uint64 = 1020)] = "VRCVersion_Uint64"),
          (Ce[(Ce.RadioVersion_Uint64 = 1021)] = "RadioVersion_Uint64"),
          (Ce[(Ce.DongleVersion_Uint64 = 1022)] = "DongleVersion_Uint64"),
          (Ce[(Ce.BlockServerShutdown_Bool = 1023)] =
            "BlockServerShutdown_Bool"),
          (Ce[(Ce.CanUnifyCoordinateSystemWithHmd_Bool = 1024)] =
            "CanUnifyCoordinateSystemWithHmd_Bool"),
          (Ce[(Ce.ContainsProximitySensor_Bool = 1025)] =
            "ContainsProximitySensor_Bool"),
          (Ce[(Ce.DeviceProvidesBatteryStatus_Bool = 1026)] =
            "DeviceProvidesBatteryStatus_Bool"),
          (Ce[(Ce.DeviceCanPowerOff_Bool = 1027)] = "DeviceCanPowerOff_Bool"),
          (Ce[(Ce.Firmware_ProgrammingTarget_String = 1028)] =
            "Firmware_ProgrammingTarget_String"),
          (Ce[(Ce.DeviceClass_Int32 = 1029)] = "DeviceClass_Int32"),
          (Ce[(Ce.HasCamera_Bool = 1030)] = "HasCamera_Bool"),
          (Ce[(Ce.DriverVersion_String = 1031)] = "DriverVersion_String"),
          (Ce[(Ce.Firmware_ForceUpdateRequired_Bool = 1032)] =
            "Firmware_ForceUpdateRequired_Bool"),
          (Ce[(Ce.ViveSystemButtonFixRequired_Bool = 1033)] =
            "ViveSystemButtonFixRequired_Bool"),
          (Ce[(Ce.ParentDriver_Uint64 = 1034)] = "ParentDriver_Uint64"),
          (Ce[(Ce.ResourceRoot_String = 1035)] = "ResourceRoot_String"),
          (Ce[(Ce.RegisteredDeviceType_String = 1036)] =
            "RegisteredDeviceType_String"),
          (Ce[(Ce.InputProfilePath_String = 1037)] = "InputProfilePath_String"),
          (Ce[(Ce.NeverTracked_Bool = 1038)] = "NeverTracked_Bool"),
          (Ce[(Ce.NumCameras_Int32 = 1039)] = "NumCameras_Int32"),
          (Ce[(Ce.CameraFrameLayout_Int32 = 1040)] = "CameraFrameLayout_Int32"),
          (Ce[(Ce.CameraStreamFormat_Int32 = 1041)] =
            "CameraStreamFormat_Int32"),
          (Ce[(Ce.AdditionalDeviceSettingsPath_String = 1042)] =
            "AdditionalDeviceSettingsPath_String"),
          (Ce[(Ce.DevicePowerUsage_Float = 1052)] = "DevicePowerUsage_Float"),
          (Ce[(Ce.ActualTrackingSystemName_String = 1054)] =
            "ActualTrackingSystemName_String"),
          (Ce[(Ce.ReportsTimeSinceVSync_Bool = 2e3)] =
            "ReportsTimeSinceVSync_Bool"),
          (Ce[(Ce.SecondsFromVsyncToPhotons_Float = 2001)] =
            "SecondsFromVsyncToPhotons_Float"),
          (Ce[(Ce.DisplayFrequency_Float = 2002)] = "DisplayFrequency_Float"),
          (Ce[(Ce.UserIpdMeters_Float = 2003)] = "UserIpdMeters_Float"),
          (Ce[(Ce.CurrentUniverseId_Uint64 = 2004)] =
            "CurrentUniverseId_Uint64"),
          (Ce[(Ce.PreviousUniverseId_Uint64 = 2005)] =
            "PreviousUniverseId_Uint64"),
          (Ce[(Ce.DisplayFirmwareVersion_Uint64 = 2006)] =
            "DisplayFirmwareVersion_Uint64"),
          (Ce[(Ce.IsOnDesktop_Bool = 2007)] = "IsOnDesktop_Bool"),
          (Ce[(Ce.DisplayMCType_Int32 = 2008)] = "DisplayMCType_Int32"),
          (Ce[(Ce.DisplayMCOffset_Float = 2009)] = "DisplayMCOffset_Float"),
          (Ce[(Ce.DisplayMCScale_Float = 2010)] = "DisplayMCScale_Float"),
          (Ce[(Ce.EdidVendorID_Int32 = 2011)] = "EdidVendorID_Int32"),
          (Ce[(Ce.DisplayMCImageLeft_String = 2012)] =
            "DisplayMCImageLeft_String"),
          (Ce[(Ce.DisplayMCImageRight_String = 2013)] =
            "DisplayMCImageRight_String"),
          (Ce[(Ce.DisplayGCBlackClamp_Float = 2014)] =
            "DisplayGCBlackClamp_Float"),
          (Ce[(Ce.EdidProductID_Int32 = 2015)] = "EdidProductID_Int32"),
          (Ce[(Ce.CameraToHeadTransform_Matrix34 = 2016)] =
            "CameraToHeadTransform_Matrix34"),
          (Ce[(Ce.DisplayGCType_Int32 = 2017)] = "DisplayGCType_Int32"),
          (Ce[(Ce.DisplayGCOffset_Float = 2018)] = "DisplayGCOffset_Float"),
          (Ce[(Ce.DisplayGCScale_Float = 2019)] = "DisplayGCScale_Float"),
          (Ce[(Ce.DisplayGCPrescale_Float = 2020)] = "DisplayGCPrescale_Float"),
          (Ce[(Ce.DisplayGCImage_String = 2021)] = "DisplayGCImage_String"),
          (Ce[(Ce.LensCenterLeftU_Float = 2022)] = "LensCenterLeftU_Float"),
          (Ce[(Ce.LensCenterLeftV_Float = 2023)] = "LensCenterLeftV_Float"),
          (Ce[(Ce.LensCenterRightU_Float = 2024)] = "LensCenterRightU_Float"),
          (Ce[(Ce.LensCenterRightV_Float = 2025)] = "LensCenterRightV_Float"),
          (Ce[(Ce.UserHeadToEyeDepthMeters_Float = 2026)] =
            "UserHeadToEyeDepthMeters_Float"),
          (Ce[(Ce.CameraFirmwareVersion_Uint64 = 2027)] =
            "CameraFirmwareVersion_Uint64"),
          (Ce[(Ce.CameraFirmwareDescription_String = 2028)] =
            "CameraFirmwareDescription_String"),
          (Ce[(Ce.DisplayFPGAVersion_Uint64 = 2029)] =
            "DisplayFPGAVersion_Uint64"),
          (Ce[(Ce.DisplayBootloaderVersion_Uint64 = 2030)] =
            "DisplayBootloaderVersion_Uint64"),
          (Ce[(Ce.DisplayHardwareVersion_Uint64 = 2031)] =
            "DisplayHardwareVersion_Uint64"),
          (Ce[(Ce.AudioFirmwareVersion_Uint64 = 2032)] =
            "AudioFirmwareVersion_Uint64"),
          (Ce[(Ce.CameraCompatibilityMode_Int32 = 2033)] =
            "CameraCompatibilityMode_Int32"),
          (Ce[(Ce.ScreenshotHorizontalFieldOfViewDegrees_Float = 2034)] =
            "ScreenshotHorizontalFieldOfViewDegrees_Float"),
          (Ce[(Ce.ScreenshotVerticalFieldOfViewDegrees_Float = 2035)] =
            "ScreenshotVerticalFieldOfViewDegrees_Float"),
          (Ce[(Ce.DisplaySuppressed_Bool = 2036)] = "DisplaySuppressed_Bool"),
          (Ce[(Ce.DisplayAllowNightMode_Bool = 2037)] =
            "DisplayAllowNightMode_Bool"),
          (Ce[(Ce.DisplayMCImageWidth_Int32 = 2038)] =
            "DisplayMCImageWidth_Int32"),
          (Ce[(Ce.DisplayMCImageHeight_Int32 = 2039)] =
            "DisplayMCImageHeight_Int32"),
          (Ce[(Ce.DisplayMCImageNumChannels_Int32 = 2040)] =
            "DisplayMCImageNumChannels_Int32"),
          (Ce[(Ce.DisplayMCImageData_Binary = 2041)] =
            "DisplayMCImageData_Binary"),
          (Ce[(Ce.SecondsFromPhotonsToVblank_Float = 2042)] =
            "SecondsFromPhotonsToVblank_Float"),
          (Ce[(Ce.DriverDirectModeSendsVsyncEvents_Bool = 2043)] =
            "DriverDirectModeSendsVsyncEvents_Bool"),
          (Ce[(Ce.DisplayDebugMode_Bool = 2044)] = "DisplayDebugMode_Bool"),
          (Ce[(Ce.GraphicsAdapterLuid_Uint64 = 2045)] =
            "GraphicsAdapterLuid_Uint64"),
          (Ce[(Ce.DriverProvidedChaperonePath_String = 2048)] =
            "DriverProvidedChaperonePath_String"),
          (Ce[(Ce.ExpectedTrackingReferenceCount_Int32 = 2049)] =
            "ExpectedTrackingReferenceCount_Int32"),
          (Ce[(Ce.ExpectedControllerCount_Int32 = 2050)] =
            "ExpectedControllerCount_Int32"),
          (Ce[(Ce.NamedIconPathControllerLeftDeviceOff_String = 2051)] =
            "NamedIconPathControllerLeftDeviceOff_String"),
          (Ce[(Ce.NamedIconPathControllerRightDeviceOff_String = 2052)] =
            "NamedIconPathControllerRightDeviceOff_String"),
          (Ce[(Ce.NamedIconPathTrackingReferenceDeviceOff_String = 2053)] =
            "NamedIconPathTrackingReferenceDeviceOff_String"),
          (Ce[(Ce.DoNotApplyPrediction_Bool = 2054)] =
            "DoNotApplyPrediction_Bool"),
          (Ce[(Ce.CameraToHeadTransforms_Matrix34_Array = 2055)] =
            "CameraToHeadTransforms_Matrix34_Array"),
          (Ce[(Ce.DistortionMeshResolution_Int32 = 2056)] =
            "DistortionMeshResolution_Int32"),
          (Ce[(Ce.DriverIsDrawingControllers_Bool = 2057)] =
            "DriverIsDrawingControllers_Bool"),
          (Ce[(Ce.DriverRequestsApplicationPause_Bool = 2058)] =
            "DriverRequestsApplicationPause_Bool"),
          (Ce[(Ce.DriverRequestsReducedRendering_Bool = 2059)] =
            "DriverRequestsReducedRendering_Bool"),
          (Ce[(Ce.MinimumIpdStepMeters_Float = 2060)] =
            "MinimumIpdStepMeters_Float"),
          (Ce[(Ce.AudioBridgeFirmwareVersion_Uint64 = 2061)] =
            "AudioBridgeFirmwareVersion_Uint64"),
          (Ce[(Ce.ImageBridgeFirmwareVersion_Uint64 = 2062)] =
            "ImageBridgeFirmwareVersion_Uint64"),
          (Ce[(Ce.ImuToHeadTransform_Matrix34 = 2063)] =
            "ImuToHeadTransform_Matrix34"),
          (Ce[(Ce.ImuFactoryGyroBias_Vector3 = 2064)] =
            "ImuFactoryGyroBias_Vector3"),
          (Ce[(Ce.ImuFactoryGyroScale_Vector3 = 2065)] =
            "ImuFactoryGyroScale_Vector3"),
          (Ce[(Ce.ImuFactoryAccelerometerBias_Vector3 = 2066)] =
            "ImuFactoryAccelerometerBias_Vector3"),
          (Ce[(Ce.ImuFactoryAccelerometerScale_Vector3 = 2067)] =
            "ImuFactoryAccelerometerScale_Vector3"),
          (Ce[(Ce.ConfigurationIncludesLighthouse20Features_Bool = 2069)] =
            "ConfigurationIncludesLighthouse20Features_Bool"),
          (Ce[(Ce.Prop_AdditionalRadioFeatures_Uint64 = 2070)] =
            "Prop_AdditionalRadioFeatures_Uint64"),
          (Ce[(Ce.Prop_CameraWhiteBalance_Vector4_Array = 2071)] =
            "Prop_CameraWhiteBalance_Vector4_Array"),
          (Ce[(Ce.Prop_CameraDistortionFunction_Int32_Array = 2072)] =
            "Prop_CameraDistortionFunction_Int32_Array"),
          (Ce[(Ce.Prop_CameraDistortionCoefficients_Float_Array = 2073)] =
            "Prop_CameraDistortionCoefficients_Float_Array"),
          (Ce[(Ce.Prop_ExpectedControllerType_String = 2074)] =
            "Prop_ExpectedControllerType_String"),
          (Ce[(Ce.HmdTrackingStyle_Int32 = 2075)] = "HmdTrackingStyle_Int32"),
          (Ce[(Ce.DriverProvidedChaperoneVisibility_Bool = 2076)] =
            "DriverProvidedChaperoneVisibility_Bool"),
          (Ce[(Ce.HmdColumnCorrectionSettingPrefix_String = 2077)] =
            "HmdColumnCorrectionSettingPrefix_String"),
          (Ce[(Ce.CameraSupportsCompatibilityModes_Bool = 2078)] =
            "CameraSupportsCompatibilityModes_Bool"),
          (Ce[(Ce.SupportsRoomViewDepthProjection_Bool = 2079)] =
            "SupportsRoomViewDepthProjection_Bool"),
          (Ce[(Ce.DisplayAvailableFrameRates_Float_Array = 2080)] =
            "DisplayAvailableFrameRates_Float_Array"),
          (Ce[(Ce.DisplaySupportsRuntimeFramerateChange_Bool = 2084)] =
            "DisplaySupportsRuntimeFramerateChange_Bool"),
          (Ce[(Ce.DisplaySupportsAnalogGain_Bool = 2085)] =
            "DisplaySupportsAnalogGain_Bool"),
          (Ce[(Ce.DisplayMinAnalogGain_Float = 2086)] =
            "DisplayMinAnalogGain_Float"),
          (Ce[(Ce.DisplayMaxAnalogGain_Float = 2087)] =
            "DisplayMaxAnalogGain_Float"),
          (Ce[(Ce.DashboardScale_Float = 2091)] = "DashboardScale_Float"),
          (Ce[(Ce.PeerButtonInfo_String = 2092)] = "PeerButtonInfo_String"),
          (Ce[(Ce.IpdUIRangeMinMeters_Float = 2100)] =
            "IpdUIRangeMinMeters_Float"),
          (Ce[(Ce.IpdUIRangeMaxMeters_Float = 2101)] =
            "IpdUIRangeMaxMeters_Float"),
          (Ce[(Ce.Hmd_SupportsHDCP14LegacyCompat_Bool = 2102)] =
            "Hmd_SupportsHDCP14LegacyCompat_Bool"),
          (Ce[(Ce.Hmd_SupportsMicMonitoring_Bool = 2103)] =
            "Hmd_SupportsMicMonitoring_Bool"),
          (Ce[(Ce.Hmd_SupportsDisplayPortTrainingMode_Bool = 2104)] =
            "Hmd_SupportsDisplayPortTrainingMode_Bool"),
          (Ce[(Ce.Hmd_SupportsRoomViewDirect_Bool = 2105)] =
            "Hmd_SupportsRoomViewDirect_Bool"),
          (Ce[(Ce.Hmd_SupportsAppThrottling_Bool = 2106)] =
            "Hmd_SupportsAppThrottling_Bool"),
          (Ce[(Ce.Hmd_SupportsGpuBusMonitoring_Bool = 2107)] =
            "Hmd_SupportsGpuBusMonitoring_Bool"),
          (Ce[(Ce.DriverProvidedIPDVisibility_Bool = 2108)] =
            "DriverProvidedIPDVisibility_Bool"),
          (Ce[(Ce.DriverRequestedMuraCorrectionMode_Int32 = 2200)] =
            "DriverRequestedMuraCorrectionMode_Int32"),
          (Ce[(Ce.DriverRequestedMuraFeather_InnerLeft_Int32 = 2201)] =
            "DriverRequestedMuraFeather_InnerLeft_Int32"),
          (Ce[(Ce.DriverRequestedMuraFeather_InnerRight_Int32 = 2202)] =
            "DriverRequestedMuraFeather_InnerRight_Int32"),
          (Ce[(Ce.DriverRequestedMuraFeather_InnerTop_Int32 = 2203)] =
            "DriverRequestedMuraFeather_InnerTop_Int32"),
          (Ce[(Ce.DriverRequestedMuraFeather_InnerBottom_Int32 = 2204)] =
            "DriverRequestedMuraFeather_InnerBottom_Int32"),
          (Ce[(Ce.DriverRequestedMuraFeather_OuterLeft_Int32 = 2205)] =
            "DriverRequestedMuraFeather_OuterLeft_Int32"),
          (Ce[(Ce.DriverRequestedMuraFeather_OuterRight_Int32 = 2206)] =
            "DriverRequestedMuraFeather_OuterRight_Int32"),
          (Ce[(Ce.DriverRequestedMuraFeather_OuterTop_Int32 = 2207)] =
            "DriverRequestedMuraFeather_OuterTop_Int32"),
          (Ce[(Ce.DriverRequestedMuraFeather_OuterBottom_Int32 = 2208)] =
            "DriverRequestedMuraFeather_OuterBottom_Int32"),
          (Ce[(Ce.Audio_SupportsDualSpeakerAndJackOutput_Bool = 2303)] =
            "Audio_SupportsDualSpeakerAndJackOutput_Bool"),
          (Ce[(Ce.AttachedDeviceId_String = 3e3)] = "AttachedDeviceId_String"),
          (Ce[(Ce.SupportedButtons_Uint64 = 3001)] = "SupportedButtons_Uint64"),
          (Ce[(Ce.Axis0Type_Int32 = 3002)] = "Axis0Type_Int32"),
          (Ce[(Ce.Axis1Type_Int32 = 3003)] = "Axis1Type_Int32"),
          (Ce[(Ce.Axis2Type_Int32 = 3004)] = "Axis2Type_Int32"),
          (Ce[(Ce.Axis3Type_Int32 = 3005)] = "Axis3Type_Int32"),
          (Ce[(Ce.Axis4Type_Int32 = 3006)] = "Axis4Type_Int32"),
          (Ce[(Ce.ControllerRoleHint_Int32 = 3007)] =
            "ControllerRoleHint_Int32"),
          (Ce[(Ce.FieldOfViewLeftDegrees_Float = 4e3)] =
            "FieldOfViewLeftDegrees_Float"),
          (Ce[(Ce.FieldOfViewRightDegrees_Float = 4001)] =
            "FieldOfViewRightDegrees_Float"),
          (Ce[(Ce.FieldOfViewTopDegrees_Float = 4002)] =
            "FieldOfViewTopDegrees_Float"),
          (Ce[(Ce.FieldOfViewBottomDegrees_Float = 4003)] =
            "FieldOfViewBottomDegrees_Float"),
          (Ce[(Ce.TrackingRangeMinimumMeters_Float = 4004)] =
            "TrackingRangeMinimumMeters_Float"),
          (Ce[(Ce.TrackingRangeMaximumMeters_Float = 4005)] =
            "TrackingRangeMaximumMeters_Float"),
          (Ce[(Ce.ModeLabel_String = 4006)] = "ModeLabel_String"),
          (Ce[(Ce.IconPathName_String = 5e3)] = "IconPathName_String"),
          (Ce[(Ce.NamedIconPathDeviceOff_String = 5001)] =
            "NamedIconPathDeviceOff_String"),
          (Ce[(Ce.NamedIconPathDeviceSearching_String = 5002)] =
            "NamedIconPathDeviceSearching_String"),
          (Ce[(Ce.NamedIconPathDeviceSearchingAlert_String = 5003)] =
            "NamedIconPathDeviceSearchingAlert_String"),
          (Ce[(Ce.NamedIconPathDeviceReady_String = 5004)] =
            "NamedIconPathDeviceReady_String"),
          (Ce[(Ce.NamedIconPathDeviceReadyAlert_String = 5005)] =
            "NamedIconPathDeviceReadyAlert_String"),
          (Ce[(Ce.NamedIconPathDeviceNotReady_String = 5006)] =
            "NamedIconPathDeviceNotReady_String"),
          (Ce[(Ce.NamedIconPathDeviceStandby_String = 5007)] =
            "NamedIconPathDeviceStandby_String"),
          (Ce[(Ce.NamedIconPathDeviceAlertLow_String = 5008)] =
            "NamedIconPathDeviceAlertLow_String"),
          (Ce[(Ce.DisplayHiddenArea_Binary_Start = 5100)] =
            "DisplayHiddenArea_Binary_Start"),
          (Ce[(Ce.DisplayHiddenArea_Binary_End = 5150)] =
            "DisplayHiddenArea_Binary_End"),
          (Ce[(Ce.ParentContainer = 5151)] = "ParentContainer"),
          (Ce[(Ce.UserConfigPath_String = 6e3)] = "UserConfigPath_String"),
          (Ce[(Ce.InstallPath_String = 6001)] = "InstallPath_String"),
          (Ce[(Ce.HasDisplayComponent_Bool = 6002)] =
            "HasDisplayComponent_Bool"),
          (Ce[(Ce.HasControllerComponent_Bool = 6003)] =
            "HasControllerComponent_Bool"),
          (Ce[(Ce.HasCameraComponent_Bool = 6004)] = "HasCameraComponent_Bool"),
          (Ce[(Ce.HasDriverDirectModeComponent_Bool = 6005)] =
            "HasDriverDirectModeComponent_Bool"),
          (Ce[(Ce.HasVirtualDisplayComponent_Bool = 6006)] =
            "HasVirtualDisplayComponent_Bool"),
          (Ce[(Ce.HasSpatialAnchorsSupport_Bool = 6007)] =
            "HasSpatialAnchorsSupport_Bool"),
          (Ce[(Ce.ControllerType_String = 7e3)] = "ControllerType_String"),
          (Ce[(Ce.LegacyInputProfile_String = 7001)] =
            "LegacyInputProfile_String"),
          (Ce[(Ce.VendorSpecific_Reserved_Start = 1e4)] =
            "VendorSpecific_Reserved_Start"),
          (Ce[(Ce.VendorSpecific_Reserved_End = 10999)] =
            "VendorSpecific_Reserved_End"),
          (Ce[(Ce.TrackedDeviceProperty_Max = 1e6)] =
            "TrackedDeviceProperty_Max"),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.SecondaryClick = 1)] = "SecondaryClick"),
              (e[(e.PrimaryClick = 2)] = "PrimaryClick");
          })(ke || (ke = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.ButtonEnter = 1)] = "ButtonEnter"),
              (e[(e.ButtonLeave = 2)] = "ButtonLeave"),
              (e[(e.Snap = 3)] = "Snap"),
              (e[(e.Sliding = 4)] = "Sliding"),
              (e[(e.SlidingEdge = 5)] = "SlidingEdge");
          })(Re || (Re = {})),
          (function (e) {
            (e[(e.Minimal = 1)] = "Minimal"),
              (e[(e.Modal = 2)] = "Modal"),
              (e[(e.ShowArrowKeys = 4)] = "ShowArrowKeys"),
              (e[(e.HideDoneKey = 8)] = "HideDoneKey");
          })(we || (we = {})),
          (function (e) {
            (e[(e.Unknown = -1)] = "Unknown"),
              (e[(e.Idle = 0)] = "Idle"),
              (e[(e.UserInteraction = 1)] = "UserInteraction"),
              (e[(e.UserInteraction_Timeout = 2)] = "UserInteraction_Timeout"),
              (e[(e.Standby = 3)] = "Standby"),
              (e[(e.Idle_Timeout = 4)] = "Idle_Timeout");
          })(Me || (Me = {})),
          u.Component;
        class Be extends se {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "dashboardtransform";
          }
          buildNode(e, t) {
            var r, n;
            const i = this.createSgNode(t);
            return (
              (i.properties.continuous_relatch =
                null !== (r = this.props.bContinuousRelatch) &&
                void 0 !== r &&
                r),
              (i.properties.free_dashboard_transform =
                null !== (n = this.props.bFreeDashboardTransform) &&
                void 0 !== n &&
                n),
              [e, i]
            );
          }
        }
        (0, n.gn)([i.ZP], Be.prototype, "buildNode", null);
        class He extends se {
          constructor(e) {
            super(e);
          }
          internalRender() {
            let e = oe(this.props.xfCurrent.translation),
              t = ae(this.props.xfCurrent.rotation),
              r = oe(this.props.xfCurrent.scale);
            return u.createElement(
              "vsg-grab-transform",
              {
                "parent-path": this.props.sParentPath,
                translation: e,
                rotation: t,
                scale: r,
              },
              this.props.children
            );
          }
        }
        class Ae extends se {
          constructor(e) {
            super(e);
          }
          internalRender() {
            let e = oe(this.props.xfCurrent.translation),
              t = ae(this.props.xfCurrent.rotation),
              r = oe(this.props.xfCurrent.scale);
            return u.createElement(
              "vsg-manipulation-transform",
              {
                "is-moving": this.props.bIsMoving,
                "parent-path": this.props.sParentPath,
                translation: e,
                rotation: t,
                scale: r,
              },
              this.props.children
            );
          }
        }
        (0, n.gn)(
          [i.ZP],
          class extends se {
            constructor(e) {
              super(e), super.setBuildNodeOverride(this.buildNode);
            }
            getNodeType() {
              return "videocapturequad";
            }
            buildNode(e, t) {
              const r = this.createSgNode(t);
              return (
                (r.properties.width = this.props.width),
                (r.properties.height = this.props.height),
                (r.properties["near-z"] = this.props["near-z"]),
                (r.properties["far-z"] = this.props["far-z"]),
                (r.properties.debug = this.props.debug),
                [e, r]
              );
            }
          }.prototype,
          "buildNode",
          null
        );
        class Ne extends se {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "reparent-to-panel";
          }
          buildNode(e, t) {
            const r = this.createSgNode(t),
              n = Object.assign(Object.assign({}, e), {
                bInsideReparentedPanel: !0,
                currentPanel: null,
              });
            return (
              this.props.parent_overlay_key &&
                (r.properties["parent-overlay-key"] =
                  this.props.parent_overlay_key),
              [n, r]
            );
          }
        }
        (0, n.gn)([i.ZP], Ne.prototype, "buildNode", null);
        const Ue = VRHTML;
      },
      4727: (e, t, r) => {
        "use strict";
        function n() {
          return {
            translation: { x: 0, y: 0, z: 0 },
            rotation: { w: 1, x: 0, y: 0, z: 0 },
            scale: { x: 1, y: 1, z: 1 },
          };
        }
        function i(e, t, r) {
          return {
            x: t.x + e * (r.x - t.x),
            y: t.y + e * (r.y - t.y),
            z: t.z + e * (r.z - t.z),
          };
        }
        function o(e, t) {
          return { x: e.x - t.x, y: e.y - t.y };
        }
        function a(e, t) {
          return { x: e.x - t.x, y: e.y - t.y, z: e.z - t.z };
        }
        function s(e, t) {
          return { x: e.x * t, y: e.y * t };
        }
        function l(e, t) {
          return { x: e.x * t, y: e.y * t, z: e.z * t };
        }
        function d(e) {
          return Math.sqrt(e.x * e.x + e.y * e.y);
        }
        function c(e) {
          return Math.sqrt(e.x * e.x + e.y * e.y + e.z * e.z);
        }
        function h(e) {
          if (void 0 === e) return;
          let t = 0.5 * e.x,
            r = 0.5 * e.y,
            n = 0.5 * e.z,
            i = Math.cos(t),
            o = Math.cos(r),
            a = Math.cos(n),
            s = Math.sin(t),
            l = Math.sin(r),
            d = Math.sin(n);
          return {
            w: i * o * a + s * l * d,
            x: s * o * a + i * l * d,
            y: i * l * a - s * o * d,
            z: i * o * d - s * l * a,
          };
        }
        function u(e) {
          let t = e[0][0] + e[1][1] + e[2][2];
          if (t > 0) {
            let r = 2 * Math.sqrt(t + 1);
            return {
              w: 0.25 * r,
              x: (e[1][2] - e[2][1]) / r,
              y: (e[2][0] - e[0][2]) / r,
              z: (e[0][1] - e[1][0]) / r,
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
        function p(e, t, r) {
          return [
            [e.x, e.y, e.z],
            [t.x, t.y, t.z],
            [r.x, r.y, r.z],
          ];
        }
        function m(e) {
          let t = c(e);
          return { x: e.x / t, y: e.y / t, z: e.z / t };
        }
        function g(e, t) {
          return {
            x: e.y * t.z - e.z * t.y,
            y: e.z * t.x - e.x * t.z,
            z: e.x * t.y - e.y * t.x,
          };
        }
        r.d(t, {
          Fs: () => s,
          JR: () => d,
          LY: () => c,
          M9: () => m,
          Oq: () => n,
          Pd: () => u,
          UU: () => h,
          Zj: () => o,
          dq: () => g,
          eQ: () => a,
          mT: () => l,
          q9: () => i,
          tS: () => p,
        });
      },
      5928: (e, t, r) => {
        "use strict";
        r.d(t, { L: () => f });
        var n,
          i = r(655),
          o = r(7294),
          a = r(7056),
          s = r(3568),
          l = r(3884),
          d = r(9809),
          c = r(5211),
          h = r(2893),
          u = r(7062),
          p = r(2188),
          m = r(8242),
          g = r(3010);
        !(function (e) {
          (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
        })(n || (n = {}));
        class v extends o.Component {
          constructor(e) {
            super(e),
              (this.m_containerRef = null),
              (this.m_nameRef = null),
              (this.m_svgRef = null),
              (this.m_containerRef = o.createRef()),
              (this.m_nameRef = o.createRef()),
              (this.m_svgRef = o.createRef()),
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
                this.ComponentUpdated
              ),
              this.props.source.touch &&
                this.props.visualizer.RegisterSourceVisualizer(
                  this.props.devicePath,
                  this.props.sourcePath + "/touch",
                  this.ComponentUpdated
                ),
              this.props.source.value &&
                this.props.visualizer.RegisterSourceVisualizer(
                  this.props.devicePath,
                  this.props.sourcePath + "/value",
                  this.ComponentUpdated
                ),
              ("joystick" != this.props.source.type &&
                "trackpad" != this.props.source.type) ||
                (this.props.visualizer.RegisterSourceVisualizer(
                  this.props.devicePath,
                  this.props.sourcePath + "/x",
                  this.ComponentUpdated
                ),
                this.props.visualizer.RegisterSourceVisualizer(
                  this.props.devicePath,
                  this.props.sourcePath + "/y",
                  this.ComponentUpdated
                )),
              this.props.source.force &&
                this.props.visualizer.RegisterSourceVisualizer(
                  this.props.devicePath,
                  this.props.sourcePath + "/force",
                  this.ComponentUpdated
                );
          }
          UnregisterForSourceUpdates() {
            this.props.source.click &&
              this.props.visualizer.UnregisterSourceVisualizer(
                this.props.devicePath,
                this.props.sourcePath + "/click"
              ),
              this.props.source.touch &&
                this.props.visualizer.UnregisterSourceVisualizer(
                  this.props.devicePath,
                  this.props.sourcePath + "/touch"
                ),
              this.props.source.value &&
                this.props.visualizer.UnregisterSourceVisualizer(
                  this.props.devicePath,
                  this.props.sourcePath + "/value"
                ),
              ("joystick" != this.props.source.type &&
                "trackpad" != this.props.source.type) ||
                (this.props.visualizer.UnregisterSourceVisualizer(
                  this.props.devicePath,
                  this.props.sourcePath
                ),
                this.props.visualizer.UnregisterSourceVisualizer(
                  this.props.devicePath,
                  this.props.sourcePath
                )),
              this.props.source.force &&
                this.props.visualizer.UnregisterSourceVisualizer(
                  this.props.devicePath,
                  this.props.sourcePath + "/force"
                );
          }
          ComponentUpdated(e, t, r) {
            e == this.props.devicePath &&
              (t == this.props.sourcePath + "/click" &&
                this.setState({ click: r }),
              t == this.props.sourcePath + "/touch" &&
                this.setState({ touch: r }),
              t == this.props.sourcePath + "/x" && this.setState({ x: r }),
              t == this.props.sourcePath + "/y" && this.setState({ y: r }),
              t == this.props.sourcePath + "/value" &&
                this.setState({ value: r }),
              t == this.props.sourcePath + "/force" &&
                this.setState({ force: r }));
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
              o.createElement(
                "div",
                { className: "VisualizerButtonContainer" },
                o.createElement("div", {
                  className: "VisualizerButtonBase" + e,
                })
              )
            );
          }
          renderBar(e, t, r) {
            let n = { width: String(100 * r) + "%" };
            return o.createElement(
              "div",
              { className: "TriggerBar " + t },
              o.createElement(
                "div",
                { className: "VisualizerLabel" },
                (0, s.Xx)(e)
              ),
              o.createElement(
                "div",
                { className: "TriggerBarBackground" },
                o.createElement("div", {
                  className: "TriggerBarContent",
                  style: n,
                })
              )
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
                r = this.m_svgRef.current.children.namedItem("SourceCircle"),
                i = this.props.side == n.Right,
                o = this.m_nameRef.current.getBoundingClientRect(),
                a = this.m_containerRef.current.getBoundingClientRect(),
                s = this.GetPosition(),
                l = new c.E9(0, o.top + o.height / 2);
              l.x = i ? a.left - 10 : a.right + 10;
              let d = i ? -20 : 20,
                h = l.x + d + "," + l.y + " " + s.x + "," + s.y;
              e.setAttribute("points", h);
              let u = l.x + "," + l.y + " " + (l.x + d) + "," + l.y;
              t.setAttribute("points", u),
                r.setAttribute("cx", s.x + ""),
                r.setAttribute("cy", s.y + "");
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
              this.props.side == n.Left
                ? (e += " MenuLeftLine")
                : (e += " MenuRightLine"),
              this.IsEngaged() && (e += " MenuSVGVisible"),
              o.createElement(
                "div",
                { className: "VisualizerControl", ref: this.m_containerRef },
                o.createElement(
                  "div",
                  { className: "VisualizerSectionHeader" },
                  o.createElement(
                    "div",
                    { className: "Label Title", ref: this.m_nameRef },
                    d.I.LocalizeControllerString(
                      this.props.controllerType,
                      this.props.sourcePath
                    )
                  ),
                  this.renderHeaderVisualization()
                ),
                this.renderBodyVisualization(),
                o.createElement(
                  "svg",
                  {
                    className: e,
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: this.m_svgRef,
                  },
                  o.createElement(
                    "defs",
                    null,
                    o.createElement(
                      "radialGradient",
                      { id: "buttonGradient" },
                      o.createElement("stop", {
                        offset: "0%",
                        stopColor: "var(--bordercolor)",
                        stopOpacity: "0.8",
                      }),
                      o.createElement("stop", {
                        offset: "100%",
                        stopColor: "var(--bordercolor)",
                        stopOpacity: "0",
                      })
                    )
                  ),
                  o.createElement("polyline", {
                    id: "SourceLine",
                    stroke: "var(--bordercolor)",
                    strokeWidth: "0.1rem",
                    fill: "transparent",
                  }),
                  o.createElement("polyline", {
                    id: "SourcePath",
                    stroke: "var(--bordercolor)",
                    strokeWidth: "0.1rem",
                    fill: "transparent",
                  }),
                  o.createElement("circle", {
                    id: "SourceCircle",
                    r: "2rem",
                    fill: "url(#buttonGradient)",
                  })
                )
              )
            );
          }
        }
        (0, i.gn)([a.ak], v.prototype, "ComponentUpdated", null),
          (0, i.gn)([a.ak], v.prototype, "UpdateSVGPath", null);
        class _ extends v {
          constructor(e) {
            super(e);
          }
        }
        class y extends v {
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
            return o.createElement(
              "div",
              { className: "TriggerVisualizerContainer" },
              this.props.source.value &&
                this.renderBar(
                  "#SourceInputMode_Pull",
                  "TriggerValue",
                  this.state.value
                ),
              this.props.source.force &&
                this.renderBar(
                  "#SourceInputMode_Force",
                  "TriggerForce",
                  this.state.force
                )
            );
          }
        }
        class b extends v {
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
              o.createElement(
                "div",
                {
                  className:
                    "TrackpadVisualizerContainer" +
                    (this.state.touch ? " Touched" : ""),
                },
                o.createElement(
                  "div",
                  { className: "TrackpadPosition" },
                  o.createElement(
                    "div",
                    { className: "VisualizerLabel" },
                    (0, s.Xx)("#SourceInputMode_Position")
                  ),
                  o.createElement(
                    "div",
                    { className: "TrackpadVisualizerContainer" },
                    o.createElement(
                      "div",
                      { className: "TrackpadVisualizerBackground" },
                      e &&
                        o.createElement(
                          "div",
                          { style: e },
                          o.createElement(
                            "div",
                            { className: "TrackpadVisualizerPipContainer" },
                            o.createElement("div", { className: t })
                          )
                        )
                    )
                  )
                ),
                this.props.source.force &&
                  this.renderBar(
                    "#SourceInputMode_Force",
                    "TriggerForce",
                    this.state.force
                  )
              )
            );
          }
        }
        class S extends o.Component {
          constructor(e) {
            super(e),
              (this.m_imageRef = o.createRef()),
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
          renderSource(e, t, r) {
            let n = e + this.ControllerTypeInfo.controller_type;
            switch (t.type) {
              case "button":
                return o.createElement(_, {
                  key: n,
                  side: r,
                  controllerType: this.ControllerTypeInfo,
                  devicePath: this.props.devicePath,
                  sourcePath: e,
                  source: t,
                  visualizer: this.props.visualizer,
                  imageScale: this.GetPointScale(),
                });
              case "trigger":
                return o.createElement(y, {
                  key: n,
                  side: r,
                  controllerType: this.ControllerTypeInfo,
                  devicePath: this.props.devicePath,
                  sourcePath: e,
                  source: t,
                  visualizer: this.props.visualizer,
                  imageScale: this.GetPointScale(),
                });
              case "joystick":
              case "trackpad":
                return o.createElement(b, {
                  key: n,
                  side: r,
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
                return o.createElement(
                  "div",
                  { key: n },
                  "Need to add visualizer for ",
                  t.type
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
              r = this.ControllerTypeInfo;
            return (
              "/user/hand/left" == this.props.devicePath
                ? r.input_bindingui_left &&
                  ((e = r.input_bindingui_left.uri),
                  (t = r.input_bindingui_left.transform
                    ? r.input_bindingui_left.transform
                    : ""))
                : "/user/hand/right" == this.props.devicePath
                ? r.input_bindingui_right &&
                  ((e = r.input_bindingui_right.uri),
                  (t = r.input_bindingui_right.transform
                    ? r.input_bindingui_right.transform
                    : ""))
                : r.input_bindingui_left
                ? ((e = r.input_bindingui_left.uri),
                  (t = r.input_bindingui_left.transform
                    ? r.input_bindingui_left.transform
                    : ""))
                : r.input_bindingui_right &&
                  ((e = r.input_bindingui_right.uri),
                  (t = r.input_bindingui_right.transform
                    ? r.input_bindingui_right.transform
                    : "")),
              e
                ? o.createElement(
                    "div",
                    { className: "VisualizerImageContainer" },
                    o.createElement("img", {
                      className: "VisualizerImage",
                      ref: this.m_imageRef,
                      onLoad: this.OnImageLoaded,
                      src: e,
                      style: { transform: t },
                    }),
                    o.createElement(h.Z, { onReflow: this.OnImageReflow })
                  )
                : null
            );
          }
          render() {
            let e = [],
              t = [],
              r = this.ControllerTypeInfo,
              i = 0,
              a = [];
            for (let e in r.input_source) {
              let t = r.input_source[e];
              if ("InputValueVisibility_AvailableButHidden" == t.visibility)
                continue;
              let n = this.EstimateSourceHeight(t);
              (i += n),
                a.push({
                  sSourcePath: e,
                  inputSource: t,
                  order: t.order ? t.order : 0,
                  height: n,
                });
            }
            let s = 8;
            i > 16 && (s = i / 2);
            let l = 0,
              d = a.sort((e, t) => e.order - t.order);
            for (let r of d) {
              l += r.height;
              let i = l > s ? n.Right : n.Left,
                o = this.renderSource(r.sSourcePath, r.inputSource, i);
              o && (i == n.Left ? e.push(o) : t.push(o));
            }
            return o.createElement(
              "div",
              { className: "ControllerVisualizer" },
              o.createElement(
                "div",
                { className: "VisualizerLeft ControllerVisualizerEntries" },
                e
              ),
              this.renderImage(),
              o.createElement(
                "div",
                { className: "VisualizerRight ControllerVisualizerEntries" },
                t
              )
            );
          }
        }
        (0, i.gn)([a.ak], S.prototype, "OnImageLoaded", null),
          (0, i.gn)([a.ak], S.prototype, "OnImageReflow", null);
        let f = class extends o.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new l.Nv()),
              (this.m_componentRegistrations = {}),
              (this.m_observeDisposer = null),
              this.m_mailbox.RegisterHandler(
                "update_component_states",
                this.OnUpdateComponentStates
              ),
              this.m_mailbox
                .Init("controller_visualizer")
                .then(
                  () => (
                    this.UpdateDeviceInputStateSubscriptions(),
                    (this.m_observeDisposer = (0, p.N7)(
                      d.I,
                      "ConnectedDevices",
                      this.OnConnectedDevicesChanged
                    )),
                    this.SetDefaultDeviceIfNecessary(),
                    null
                  )
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
              let r = e.device + t;
              this.m_componentRegistrations[r] &&
                this.m_componentRegistrations[r](e.device, t, e.components[t]);
            }
          }
          RegisterSourceVisualizer(e, t, r) {
            this.m_componentRegistrations[e + t] = r;
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
              (e, t) => this.GetDeviceSortOrder(e) - this.GetDeviceSortOrder(t)
            );
          }
          render() {
            let e,
              t = [],
              r = this.GetSortedDevices();
            if (!r)
              return o.createElement(
                m.TB,
                {
                  className: "ControllerVisualizerWrapper",
                  header: (0, s.Xx)("#TestControllerTitle", ""),
                  onDismissRequested: this.props.onDismissRequested,
                },
                o.createElement(
                  "div",
                  { className: "VisualizerLabel" },
                  (0, s.Xx)("#TestController_NoController")
                )
              );
            for (let n of r)
              "TrackedDeviceClass_HMD" != n.class &&
                (n.root_path == this.state.devicePath && (e = n.serial_number),
                t.push({
                  value: n.root_path,
                  sLabel: (0, s.Xx)("#" + n.root_path),
                }));
            return o.createElement(
              m.TB,
              {
                className: "ControllerVisualizerWrapper",
                header: (0, s.Xx)("#TestControllerTitle", e),
                onDismissRequested: this.props.onDismissRequested,
                footer: o.createElement(m.U5, {
                  leftControls: [
                    o.createElement(g.hu, {
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
                o.createElement(S, {
                  devicePath: this.state.devicePath,
                  serialNumber: e,
                  visualizer: this,
                })
            );
          }
        };
        (0, i.gn)([a.ak], f.prototype, "OnConnectedDevicesChanged", null),
          (0, i.gn)([a.ak], f.prototype, "OnUpdateComponentStates", null),
          (f = (0, i.gn)([u.Pi], f));
      },
      9671: (e, t, r) => {
        "use strict";
        r.d(t, { V: () => d });
        var n = r(655),
          i = r(7294),
          o = r(7056),
          a = r(3568),
          s = r(3884);
        class l extends i.Component {
          constructor(e) {
            if (
              (super(e),
              (this.m_mailbox = new s.Nv()),
              this.m_mailbox.Init("legacy_debugger"),
              this.m_mailbox.RegisterHandler(
                "legacy_input_frame",
                this.OnLegacyInputFrame
              ),
              VRHTML)
            ) {
              let e = VRHTML.VRApplications.GetCurrentSceneProcessId();
              VRHTML.VRPathProperties.SetInt32PathProperty(
                "/legacy_debugger_pid",
                e
              );
            }
            this.state = { currentState: null };
          }
          componentWillUnmount() {
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRPathProperties.SetInt32PathProperty(
                "/legacy_debugger_pid",
                0
              );
          }
          OnLegacyInputFrame(e) {
            this.setState({ currentState: e });
          }
          renderController(e) {
            let t = [];
            if (
              (t.push(
                i.createElement(
                  "div",
                  { className: "Label LegacyDebuggerGroup" },
                  "Pressed:"
                )
              ),
              e.pressed)
            )
              for (let r of e.pressed)
                t.push(
                  i.createElement(
                    "div",
                    { className: "Label LegacyDebuggerButtonName" },
                    r
                  )
                );
            else
              t.push(
                i.createElement(
                  "div",
                  { className: "Label LegacyDebuggerButtonName" },
                  "None"
                )
              );
            if (
              (t.push(
                i.createElement(
                  "div",
                  { className: "Label LegacyDebuggerGroup" },
                  "Touched:"
                )
              ),
              e.touched)
            )
              for (let r of e.touched)
                t.push(
                  i.createElement(
                    "div",
                    { className: "Label LegacyDebuggerButtonName" },
                    r
                  )
                );
            else
              t.push(
                i.createElement(
                  "div",
                  { className: "Label LegacyDebuggerButtonName" },
                  "None"
                )
              );
            if (
              (t.push(
                i.createElement(
                  "div",
                  { className: "Label LegacyDebuggerGroup" },
                  "Supported:"
                )
              ),
              e.supported_buttons)
            )
              for (let r of e.supported_buttons)
                t.push(
                  i.createElement(
                    "div",
                    { className: "Label LegacyDebuggerButtonName" },
                    r
                  )
                );
            else
              t.push(
                i.createElement(
                  "div",
                  { className: "Label LegacyDebuggerButtonName" },
                  "None"
                )
              );
            t.push(
              i.createElement(
                "div",
                { className: "Label LegacyDebuggerGroup" },
                "Axis:"
              )
            );
            for (let r of e.axis)
              t.push(
                i.createElement(
                  "div",
                  { className: "Label LegacyDebuggerButtonName" },
                  "X: ",
                  r.x.toFixed(2),
                  " Y: ",
                  r.y.toFixed(2)
                )
              );
            return t;
          }
          render() {
            return this.state.currentState
              ? i.createElement(
                  "div",
                  { className: "FlexRow" },
                  i.createElement(
                    "div",
                    { className: "FlexColumn LegacyDebuggerController" },
                    i.createElement("div", { className: "Label" }, "Left"),
                    this.renderController(this.state.currentState.left)
                  ),
                  i.createElement(
                    "div",
                    { className: "FlexColumn LegacyDebuggerController" },
                    i.createElement("div", { className: "Label" }, "Right"),
                    this.renderController(this.state.currentState.right)
                  ),
                  i.createElement(
                    "div",
                    { className: "FlexColumn LegacyDebuggerController" },
                    i.createElement("div", { className: "Label" }, "HMD"),
                    this.renderController(this.state.currentState.hmd)
                  )
                )
              : i.createElement(
                  "div",
                  { className: "Label" },
                  (0, a.Xx)("#LegacyDebugger_NoApp")
                );
          }
        }
        (0, n.gn)([o.ak], l.prototype, "OnLegacyInputFrame", null);
        class d extends i.Component {
          constructor(e) {
            super(e);
          }
          render() {
            return i.createElement(
              "div",
              { className: "FlexRowWithWrap" },
              i.createElement(
                "div",
                { className: "FlexFullWidthRowCentered LegacyDebuggerWrapper" },
                i.createElement(l, null)
              )
            );
          }
        }
      },
      792: (e, t, r) => {
        "use strict";
        r.d(t, { C: () => s });
        var n = r(655),
          i = r(7056),
          o = r(2188);
        r(1628);
        class a {
          Init() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield this.Load(), (0, o.EH)(() => this.Save());
            });
          }
          Load() {
            return (0, n.mG)(this, void 0, void 0, function* () {});
          }
          Save() {
            return (0, n.mG)(this, void 0, void 0, function* () {});
          }
        }
        (0, n.gn)([o.LO], a.prototype, "m_bShowFloor", void 0),
          (0, n.gn)([o.LO], a.prototype, "m_bShowFloorFar", void 0),
          (0, n.gn)([o.LO], a.prototype, "m_fBackgroundDomeRadius", void 0),
          (0, n.gn)([o.LO], a.prototype, "m_fBackgroundOffsetX", void 0),
          (0, n.gn)([o.LO], a.prototype, "m_fBackgroundOffsetZ", void 0),
          (0, n.gn)([i.ak], a.prototype, "Load", null),
          (0, n.gn)([i.ak], a.prototype, "Save", null);
        const s = new a();
        window.ConstructStore = s;
      },
      9626: (e, t, r) => {
        "use strict";
        r.d(t, { B: () => p });
        var n = r(655),
          i = r(3884),
          o = r(7056),
          a = r(2188),
          s = (r(4790), r(2477)),
          l = r(1628),
          d = r(7176),
          c = r(6539);
        const h = "DashboardStoreSessionStorage";
        class u {
          constructor() {
            (this.k_sDashboardVRGamepadUI = "steam/dashboard/isvrgamepadui"),
              (this.m_bDarkMode = !1),
              (this.m_eIncognitoMode = i.Qu.Unavailable),
              (this.m_mapOverlayState = new Map()),
              (this.m_mapActiveDashboardPopupRequests = new Map()),
              (this.m_bHasGamepadUIOverlay = !1),
              (this.m_bIsVRGamepadUI = !1),
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
            return (0, n.mG)(this, void 0, void 0, function* () {
              if (
                (yield this.LoadSessionDevData(),
                (0, a.EH)(() => this.SaveSessionDevData()),
                e)
              )
                s.Q.SteamVR.SetImplementation("ShowDashboardPopup", (e) =>
                  (0, n.mG)(this, void 0, void 0, function* () {
                    this.m_mapActiveDashboardPopupRequests.set(
                      e.dashboard_popup_request_id,
                      e
                    );
                  })
                ),
                  s.Q.SteamVR.SetImplementation("HideDashboardPopup", (e) => {
                    this.m_mapActiveDashboardPopupRequests.delete(
                      e.dashboard_popup_request_id
                    );
                  });
              else {
                VRHTML.VRPathProperties.RegisterForBoolPathPropertyChangedEvents(
                  this.k_sDashboardVRGamepadUI,
                  (e) => {
                    this.m_bIsVRGamepadUI = e;
                  }
                );
                try {
                  this.m_bIsVRGamepadUI =
                    VRHTML.VRPathProperties.GetBoolPathProperty(
                      this.k_sDashboardVRGamepadUI
                    );
                } catch (e) {}
              }
            });
          }
          LoadSessionDevData() {
            var e, t, r, i, o, a, s, l;
            return (0, n.mG)(this, void 0, void 0, function* () {
              const n = JSON.parse(
                null !== (e = sessionStorage.getItem(h)) && void 0 !== e
                  ? e
                  : "{}"
              );
              (this.m_bIgnoreVRGamepadUI =
                null !== (t = n.m_bIgnoreVRGamepadUI) && void 0 !== t && t),
                (this.m_bShowLegacyBar =
                  null !== (r = n.m_bShowLegacyBar) && void 0 !== r && r),
                (this.m_bHasGamepadUIOverlay =
                  null !== (i = n.m_bHasGamepadUIOverlay) && void 0 !== i && i),
                (this.m_bIsVRGamepadUI =
                  null !== (o = n.m_bIsVRGamepadUI) && void 0 !== o && o),
                (this.m_fVRGamepadUI_MetersPerPixel =
                  null !== (a = n.m_fVRGamepadUI_MetersPerPixel) && void 0 !== a
                    ? a
                    : (0.167 / 120) * 1.1),
                (this.m_fVRGamepadUI_GlobalActiveOverlayScale =
                  null !== (s = n.m_fVRGamepadUI_GlobalActiveOverlayScale) &&
                  void 0 !== s
                    ? s
                    : 1.17);
              for (const e of null !== (l = n.m_rgDashboardPopups) &&
              void 0 !== l
                ? l
                : [])
                this.m_mapActiveDashboardPopupRequests.set(
                  e.dashboard_popup_request_id,
                  e
                );
              this.updateIsVRGamepadUI();
            });
          }
          SaveSessionDevData() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              const e = {
                m_bIgnoreVRGamepadUI: this.m_bIgnoreVRGamepadUI,
                m_bShowLegacyBar: this.m_bShowLegacyBar,
                m_rgDashboardPopups: Array.from(
                  this.m_mapActiveDashboardPopupRequests.values()
                ),
                m_bHasGamepadUIOverlay: this.m_bHasGamepadUIOverlay,
                m_bIsVRGamepadUI: this.m_bIsVRGamepadUI,
                m_fVRGamepadUI_MetersPerPixel:
                  this.m_fVRGamepadUI_MetersPerPixel,
                m_fVRGamepadUI_GlobalActiveOverlayScale:
                  this.m_fVRGamepadUI_GlobalActiveOverlayScale,
              };
              sessionStorage.setItem(h, JSON.stringify(e));
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
            (this.m_bIgnoreVRGamepadUI = e), this.updateIsVRGamepadUI();
          }
          SetHasGamepadUIOVerlay(e) {
            (this.m_bHasGamepadUIOverlay = e), this.updateIsVRGamepadUI();
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
            return this.isVRGamepadUI ? c._.Middle : l.G3.settings.get(d.o1);
          }
          updateIsVRGamepadUI() {
            (this.m_bIsVRGamepadUI =
              this.m_bHasGamepadUIOverlay && !this.m_bIgnoreVRGamepadUI),
              VRHTML.VRPathProperties.SetBoolPathProperty(
                this.k_sDashboardVRGamepadUI,
                this.m_bIsVRGamepadUI
              );
          }
        }
        (0, n.gn)([a.LO], u.prototype, "m_bIgnoreVRGamepadUI", void 0),
          (0, n.gn)([a.LO], u.prototype, "m_bShowLegacyBar", void 0),
          (0, n.gn)([a.LO], u.prototype, "m_bDarkMode", void 0),
          (0, n.gn)([a.LO], u.prototype, "m_eIncognitoMode", void 0),
          (0, n.gn)([a.LO], u.prototype, "m_mapOverlayState", void 0),
          (0, n.gn)(
            [a.LO],
            u.prototype,
            "m_mapActiveDashboardPopupRequests",
            void 0
          ),
          (0, n.gn)(
            [a.LO],
            u.prototype,
            "m_fVRGamepadUI_MetersPerPixel",
            void 0
          ),
          (0, n.gn)(
            [a.LO],
            u.prototype,
            "m_fVRGamepadUI_GlobalActiveOverlayScale",
            void 0
          ),
          (0, n.gn)([a.LO], u.prototype, "m_bIsVRGamepadUI", void 0),
          (0, n.gn)([o.ak], u.prototype, "LoadSessionDevData", null),
          (0, n.gn)([o.ak], u.prototype, "SaveSessionDevData", null);
        const p = new u();
        window.DashboardStore = p;
      },
      7726: (e, t, r) => {
        "use strict";
        r.d(t, { A: () => n, X: () => l });
        var n,
          i = r(655),
          o = r(7294),
          a = r(7056),
          s = r(3884);
        !(function (e) {
          (e[(e.HorizontalPips = 0)] = "HorizontalPips"),
            (e[(e.VerticalBattery = 1)] = "VerticalBattery");
        })(n || (n = {}));
        class l extends o.Component {
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
                    this.OnBatteryStateChanged
                  )),
              (this.m_DeviceRoleChangedCallbackHandle =
                null === s.Co || void 0 === s.Co
                  ? void 0
                  : s.Co.RegisterForDeviceRoleChangedEvents(
                      this.OnDeviceRoleChanged
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
                s.Uk.DeviceProvidesBatteryStatus_Bool
              ),
              r = s.Co.VRSystem.GetControllerRoleForTrackedDeviceIndex(
                this.props.trackedDeviceIndex
              );
            let i = !1;
            if (t) {
              const t =
                null !==
                  (e = s.Co.VRProperties.GetFloatProperty(
                    this.props.trackedDeviceIndex,
                    s.Uk.DeviceBatteryPercentage_Float
                  )) && void 0 !== e
                  ? e
                  : 0;
              (i = s.Co.VRProperties.GetBoolProperty(
                this.props.trackedDeviceIndex,
                s.Uk.DeviceIsCharging_Bool
              )),
                null == this.batteryLevelStable || 0 == this.batteryLevelStable
                  ? (this.batteryLevelStable = t)
                  : ((this.batteryLevelStable = Math.min(
                      this.batteryLevelStable,
                      t + l.kBatteryLevelHysteresis,
                      1
                    )),
                    (this.batteryLevelStable = Math.max(
                      this.batteryLevelStable,
                      t - l.kBatteryLevelHysteresis,
                      0
                    )));
            }
            let o = l.GetBatteryIcon(
                t,
                i,
                this.batteryLevelStable,
                n.HorizontalPips
              ),
              a = this.GetRoleIcon(r);
            (o == this.state.batteryIconPath && a == this.state.roleIconPath) ||
              this.setState({ batteryIconPath: o, roleIconPath: a });
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
          static GetBatteryIcon(e, t, r, i) {
            if (!e) return null;
            const o =
              i == n.VerticalBattery
                ? "images/icons/vert"
                : "images/icons/controller_model";
            return t
              ? r < 0.15
                ? o + "_charging_red.png"
                : o + "_charging.png"
              : 0 == r
              ? null
              : r < 0.15
              ? o + "_low.png"
              : r < 0.3
              ? o + "_battery_1.png"
              : r < 0.6
              ? o + "_battery_2.png"
              : r < 0.9
              ? o + "_battery_3.png"
              : o + "_battery_4.png";
          }
          OnBatteryStateChanged(e) {
            e == this.props.trackedDeviceIndex && this.UpdateControllerStatus();
          }
          OnDeviceRoleChanged() {
            this.UpdateControllerStatus();
          }
          OnDeviceEvent(e, t, r) {
            e == s.XX.Activated &&
              r == this.props.trackedDeviceIndex &&
              this.UpdateControllerStatus();
          }
          render() {
            return o.createElement(
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
              o.createElement(
                "div",
                {
                  className: "ControllerStatusRoot",
                  style: { width: 256, height: 256 },
                },
                o.createElement(
                  "div",
                  { className: "ControllerStatusFrame" },
                  o.createElement(
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
                    o.createElement("img", {
                      className: "ControllerHand",
                      src: this.state.roleIconPath,
                    })
                  ),
                  o.createElement(
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
                    o.createElement("img", {
                      className: "ControllerBattery",
                      src: this.state.batteryIconPath,
                    })
                  )
                )
              )
            );
          }
        }
        (l.kBatteryLevelHysteresis = 0.02),
          (0, i.gn)([a.ak], l.prototype, "OnBatteryStateChanged", null),
          (0, i.gn)([a.ak], l.prototype, "OnDeviceRoleChanged", null),
          (0, i.gn)([a.ak], l.prototype, "OnDeviceEvent", null);
      },
      6539: (e, t, r) => {
        "use strict";
        r.d(t, { g: () => me, _: () => re });
        var n,
          i,
          o = r(655),
          a = r(3884),
          s = r(7056),
          l = r(2188),
          d = r(7294),
          c = r(3081),
          h = r(5177),
          u = r(4979),
          p = r(3107),
          m = r(7176),
          g = r(3568),
          v = r(8495),
          _ = r(7008),
          y = r(9942),
          b = r(8583),
          S = r(1628),
          f = r(7062),
          k = r(7726),
          R = r(4790),
          w = r(6459),
          M = r(7475);
        let C = (n = class extends d.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new a.Nv()),
              (this.m_refWindowScrollPanel = d.createRef()),
              (this.state = { desktopView: null }),
              this.m_mailbox.Init(n.k_sMailboxName);
          }
          setSiblingReferences(e) {
            this.setState({ desktopView: e });
          }
          onWindowViewCreated(e, t) {
            var r, n;
            null === (r = this.m_refWindowScrollPanel.current) ||
              void 0 === r ||
              r.scrollTo({
                left:
                  null === (n = this.m_refWindowScrollPanel.current) ||
                  void 0 === n
                    ? void 0
                    : n.scrollWidth,
                behavior: "smooth",
              });
          }
          render() {
            var e, t, r, n;
            if (
              !this.state.desktopView ||
              (null === (e = this.state.desktopView) || void 0 === e
                ? void 0
                : e.state.bIsUsingSteamDesktop)
            )
              return null;
            const i =
              this.props.bWindowViewEnabled ||
              (null === (t = this.state.desktopView) || void 0 === t
                ? void 0
                : t.state.desktopIndices.length) > 1;
            return d.createElement(
              w.j4,
              Object.assign({}, this.props, {
                additionalClassNames: this.props.bWindowViewEnabled
                  ? "DesktopTray FixedWidth"
                  : "DesktopTray",
              }),
              i &&
                d.createElement(
                  M.P,
                  {
                    scrollDirection: M.I.Horizontal,
                    className: "Section Grow",
                    style: { marginRight: 0, marginLeft: "9px" },
                    ref: this.m_refWindowScrollPanel,
                  },
                  d.createElement(
                    "div",
                    {
                      style: {
                        paddingRight: "16px",
                        display: "flex",
                        flexDirection: "row",
                        margin: 0,
                      },
                    },
                    null === (r = this.state.desktopView) || void 0 === r
                      ? void 0
                      : r.state.desktopIndices.map((e) => {
                          var t;
                          return d.createElement(w.zN, {
                            additionalClassNames: "ViewButton Fixed",
                            key: e,
                            label: e.toString(),
                            active:
                              (null === (t = this.state.desktopView) ||
                              void 0 === t
                                ? void 0
                                : t.currentDesktopIndex) == e,
                            title: (0, g.Xx)("#Desktop_X", e),
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
                      null === (n = this.state.desktopView) || void 0 === n
                        ? void 0
                        : n.state.mapWindowInfo.keys()
                    ).map((e) => {
                      var t, r, n;
                      return d.createElement(w.zN, {
                        additionalClassNames: "ViewButton",
                        iconUrl: "/dashboard/images/icons/svr_desktop_alt.svg",
                        key: e,
                        active:
                          (null === (t = this.state.desktopView) || void 0 === t
                            ? void 0
                            : t.state.sCurrentWindowOverlayKey) == e,
                        title:
                          null ===
                            (n = this.props.mapWindows.get(
                              null === (r = this.state.desktopView) ||
                                void 0 === r
                                ? void 0
                                : r.state.mapWindowInfo.get(e).sHwnd
                            )) || void 0 === n
                            ? void 0
                            : n.title,
                        onClick: () => {
                          var t;
                          return null === (t = this.state.desktopView) ||
                            void 0 === t
                            ? void 0
                            : t.onWindowViewChange(e);
                        },
                      });
                    })
                  )
                ),
              this.props.bWindowViewEnabled &&
                d.createElement(
                  "div",
                  { className: "Section", style: { marginRight: 0 } },
                  d.createElement(w.zN, {
                    iconUrl: "/dashboard/images/icons/icon_add.png",
                    additionalClassNames: "AddWindow",
                    title: (0, g.Xx)("#AddView"),
                    onClick: this.props.onToggleWindowList,
                    onMouseEnter: this.props.onClearPopoverMenuTimeout,
                    onMouseLeave: () =>
                      this.props.onStartPopoverMenuTimeout(500),
                  })
                )
            );
          }
        });
        (C.k_sMailboxName = "systemui_desktoptray"),
          (C = n = (0, o.gn)([f.Pi], C));
        let T = (i = class extends d.Component {
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
              this.m_mailbox.Init(i.k_sMailboxName).then(() => {});
          }
          componentDidMount() {
            null ===
            (null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.VROverlay.FindOverlay(m.Xl))
              ? (null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.RegisterForDesktopViewReadyEvents(
                    this.onDesktopViewReady
                  ),
                null === VRHTML ||
                  void 0 === VRHTML ||
                  VRHTML.RegisterForDesktopViewUpdatingEvents(
                    this.onDesktopViewUpdating
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
                  (e = S.G3.settings.get("/settings/dashboard/desktopIndex")) &&
                void 0 !== e
              ? e
              : 1;
          }
          get currentWindowHwnd() {
            return "" == this.state.sCurrentWindowOverlayKey
              ? ""
              : this.state.mapWindowInfo.get(
                  this.state.sCurrentWindowOverlayKey
                ).sHwnd;
          }
          onDesktopScaleChange(e) {
            this.currentDesktopIndex > 0 &&
              S.G3.SetSettingsValue(
                "/settings/dashboard/desktopScale" + this.currentDesktopIndex,
                e
              );
          }
          onDesktopChange(e) {
            S.G3.SetSettingsValue("/settings/dashboard/desktopIndex", e),
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
          updateDesktopIndices() {
            var e;
            let t = 1,
              r = [];
            for (
              ;
              null !==
              (null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VROverlay.FindOverlay("system.desktop." + t));

            )
              r.push(t), t++;
            (null !==
              (e = S.G3.settings.get("/settings/dashboard/desktopIndex")) &&
            void 0 !== e
              ? e
              : 1) > r.length &&
              S.G3.SetSettingsValue("/settings/dashboard/desktopIndex", 1),
              this.setState({ bIsReady: !0, desktopIndices: r });
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
            return d.createElement(
              d.Fragment,
              null,
              t &&
                d.createElement(w.zN, {
                  iconUrl: "/dashboard/images/icons/icon_multitasking_view.png",
                  title: "Multitasking View",
                  tooltipTranslation: e,
                  onClick: this.ShowMultitaskingView,
                })
            );
          }
          render() {
            var e;
            const t =
              null ===
                (e = S.G3.settings.get("/settings/dashboard/allowCurvature")) ||
              void 0 === e ||
              e
                ? m.ml
                : null;
            return this.props.visible
              ? this.state.bIsUsingSteamDesktop
                ? d.createElement(a.sl, { mountedId: (0, a.iN)(m.GN, m.Xl) })
                : this.state.bIsReady
                ? 0 === this.state.desktopIndices.length
                  ? d.createElement(
                      w.lL,
                      { visible: !0, summonOverlayKey: m.gB },
                      d.createElement(
                        "div",
                        { className: "NoDesktopFound" },
                        d.createElement(
                          "h2",
                          null,
                          (0, g.Xx)("#NoDesktopFound")
                        )
                      )
                    )
                  : -1 == this.currentDesktopIndex
                  ? d.createElement(
                      d.Fragment,
                      null,
                      d.createElement(
                        a.s_,
                        {
                          overlay_key: this.state.sCurrentWindowOverlayKey,
                          height:
                            this.props.fActiveOverlayScale *
                            i.k_nDesktopPanelBaseHeight,
                          curvature_origin_id: t,
                          interactive: !0,
                          origin: a.Ic.BottomCenter,
                          debug_name: "System Desktop",
                        },
                        d.createElement(w.Yd, { summonOverlayKey: m.gB }),
                        d.createElement(a.sl, {
                          mountedId: (0, a.iN)(
                            m.GN,
                            this.state.sCurrentWindowOverlayKey + ".cursor"
                          ),
                        })
                      )
                    )
                  : d.createElement(
                      d.Fragment,
                      null,
                      d.createElement(
                        a.s_,
                        {
                          overlay_key:
                            "system.desktop." + this.currentDesktopIndex,
                          height:
                            this.props.fActiveOverlayScale *
                            i.k_nDesktopPanelBaseHeight,
                          curvature_origin_id: t,
                          interactive: !0,
                          origin: a.Ic.BottomCenter,
                          debug_name: "System Desktop",
                        },
                        d.createElement(w.Yd, { summonOverlayKey: m.gB }),
                        d.createElement(a.sl, {
                          mountedId: (0, a.iN)(
                            m.GN,
                            "system.desktop." +
                              this.currentDesktopIndex +
                              ".cursor"
                          ),
                        })
                      )
                    )
                : d.createElement(
                    w.lL,
                    { visible: !0, summonOverlayKey: m.gB },
                    d.createElement(
                      "div",
                      { className: "NoDesktopFound" },
                      d.createElement(
                        "h2",
                        null,
                        (0, g.Xx)("#DesktopViewsUpdating")
                      )
                    )
                  )
              : null;
          }
        });
        (T.k_sMailboxName = "systemui_desktopview"),
          (T.k_nDesktopPanelBaseHeight = 2),
          (0, o.gn)([l.Fl], T.prototype, "desktopCount", null),
          (0, o.gn)([l.Fl], T.prototype, "sCurrentOverlayKey", null),
          (0, o.gn)([l.Fl], T.prototype, "currentDesktopIndex", null),
          (0, o.gn)([l.Fl], T.prototype, "currentWindowHwnd", null),
          (0, o.gn)([s.ZP], T.prototype, "onDesktopScaleChange", null),
          (0, o.gn)([s.ZP], T.prototype, "onDesktopChange", null),
          (0, o.gn)([s.ZP], T.prototype, "onDesktopViewUpdating", null),
          (0, o.gn)([s.ZP], T.prototype, "onDesktopViewReady", null),
          (0, o.gn)([s.ZP], T.prototype, "onWindowViewChange", null),
          (0, o.gn)([s.ZP], T.prototype, "ShowMultitaskingView", null),
          (T = i = (0, o.gn)([f.Pi], T));
        var D,
          I = r(2743),
          V = r(7095),
          E = r(8980);
        let P = (D = class extends d.Component {
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
                "library_600x900.jpg"
              );
            t !== this.props.imageUrl &&
              (e.push(t),
              e.push(
                this.props.imageUrl.replace(/header\.jpg$/, "portrait.png")
              )),
              e.push(this.props.imageUrl),
              this.props.fallbackImageUrl &&
                e.push(this.props.fallbackImageUrl),
              (this.m_imageSources = e.filter(
                (e) => !D.s_failedImages.includes(e)
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
              D.s_failedImages.push(this.m_imageSources[this.m_imageIndex]),
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
              t = d.createElement("div", { className: "Icon", style: e });
            return (
              this.state.width / this.state.height != 600 / 900 &&
                (t = d.createElement(
                  d.Fragment,
                  null,
                  d.createElement("div", {
                    className: "IconBackgroundBlur",
                    style: e,
                  }),
                  t
                )),
              d.createElement(
                "div",
                {
                  className: (0, E.LJ)("PortraitAppImageContainer", [
                    "Fallback",
                    this.state.isFallback,
                  ]),
                },
                this.state.image && t,
                d.createElement(
                  "div",
                  { className: "Title" },
                  this.props.title
                ),
                this.props.children && this.props.children
              )
            );
          }
        });
        (P.defaultProps = {
          fallbackImageUrl: "images/appimage_default_portrait.png",
        }),
          (P.s_failedImages = []),
          (0, o.gn)([s.ak], P.prototype, "loadNextImage", null),
          (0, o.gn)([s.ak], P.prototype, "onLoad", null),
          (0, o.gn)([s.ak], P.prototype, "onError", null),
          (P = D = (0, o.gn)([f.Pi], P));
        var x,
          O = r(8242);
        class L extends d.Component {
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
            const e = y.H.Instance.SceneAppKey;
            V.f.OpenDeepLink(V.P.Name, e);
          }
          onOpenAppVideoSettings() {
            const e = y.H.Instance.SceneAppKey;
            I.Ux.OpenDeepLink(I.Yw.Name, e);
          }
          render() {
            var e;
            const t = y.H.Instance.SceneAppKey,
              r = y.H.Instance.SceneAppName,
              n = y.H.Instance.SceneApplicationState,
              i = y.H.Instance.SceneAppIsHome,
              o = S.G3.settings.get("/settings/dashboard/allowAppQuitting"),
              s = !(
                null !==
                  (e = S.G3.settings.get("/settings/dashboard/arcadeMode")) &&
                void 0 !== e &&
                e
              ),
              l = S.G3.apps && S.G3.apps.find((e) => e.key == t);
            let c = !1;
            switch (n) {
              case a.xY.Quitting:
              case a.xY.Starting:
              case a.xY.Waiting:
                c = !0;
            }
            const u = ((e) => {
              if (null == e) return "";
              let t = e.image_path;
              return (
                t.startsWith("/app/image?") && (t += "&aspect=portrait"), t
              );
            })(l);
            return d.createElement(
              w.lL,
              {
                visible: this.props.visible,
                debugName: "nowplaying",
                additionalClassNames: "NowPlaying",
                summonOverlayKey: m.PF,
              },
              d.createElement(
                "div",
                { className: "ArtworkColumn" },
                d.createElement(P, { appkey: t, title: r, imageUrl: u })
              ),
              d.createElement(
                "div",
                { className: "InfoColumn" },
                d.createElement("div", { className: "NowPlayingAppTitle" }, r),
                d.createElement(
                  h.z,
                  {
                    className: "ButtonControl Colorful",
                    onClick: this.onReturnToGame,
                  },
                  i
                    ? (0, g.Xx)("#Return_To_Home")
                    : (0, g.Xx)("#Return_To_Game")
                ),
                s &&
                  d.createElement(
                    O.ls,
                    {
                      icon: O.uc.PopOut,
                      onClick: this.onOpenAppControllerBindingSettings,
                    },
                    (0, g.Xx)("#Controller_Bindings")
                  ),
                s &&
                  d.createElement(
                    O.ls,
                    { icon: O.uc.PopOut, onClick: this.onOpenAppVideoSettings },
                    (0, g.Xx)("#App_Video_Settings")
                  ),
                !i &&
                  o &&
                  d.createElement(
                    h.z,
                    { className: "ButtonControl", onClick: this.onExitApp },
                    (0, g.Xx)("#Exit_Game")
                  )
              )
            );
          }
        }
        (0, o.gn)([s.ak], L.prototype, "onExitApp", null),
          (0, o.gn)([s.ak], L.prototype, "onReturnToGame", null),
          (0, o.gn)(
            [s.ak],
            L.prototype,
            "onOpenAppControllerBindingSettings",
            null
          ),
          (0, o.gn)([s.ak], L.prototype, "onOpenAppVideoSettings", null),
          (function (e) {
            (e[(e.Left = 0)] = "Left"), (e[(e.Right = 1)] = "Right");
          })(x || (x = {}));
        const B = (e) =>
          d.createElement(
            "div",
            {
              className: (0, E.LJ)("ButtonContainer", x[e.side], [
                "Disabled",
                !1 === e.enabled,
              ]),
            },
            d.createElement(
              h.z,
              { className: "ButtonControl", onClick: e.onClick },
              e.side == x.Left
                ? d.createElement(d.Fragment, null, "‹")
                : d.createElement(d.Fragment, null, "›")
            )
          );
        class H extends d.Component {
          constructor(e) {
            super(e),
              (this.m_refScrollPanel = d.createRef()),
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
              this.onAnimationFrame
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
            const r = this.m_refScrollPanel.current;
            if (!r) return;
            if (r.isThrown)
              return void r.cancelThrowing(() => {
                (this.m_bScrolling = !1), this.scroll(e);
              });
            const n = r.children;
            if (!n || 0 == n.length) return;
            const i =
                null !== (t = this.props.paginationAlignmentOffset) &&
                void 0 !== t
                  ? t
                  : 0,
              o = n[0],
              a = this.m_bScrolling
                ? this.m_nCurrentScrollTarget
                : r.scrollLeft,
              s = o.getBoundingClientRect().left + r.scrollLeft,
              l = o.clientWidth,
              d = r.clientWidth,
              c = Math.floor(d / l) - 1,
              h = Math.round((a - s + i + 1) / l) + c * e - 0.4999,
              u = h > 0 ? h * l + s - i : 0;
            this.scrollToPosition(u);
          }
          scrollToPosition(e) {
            const t = this.m_refScrollPanel.current;
            t &&
              (t.scrollTo({ left: e, behavior: "smooth" }),
              (this.m_bScrolling = !0),
              (this.m_nCurrentScrollTarget = e));
          }
          render() {
            return d.createElement(
              "div",
              {
                className: (0, E.LJ)(
                  "PaginatedCarousel",
                  this.props.additionalClassNames
                ),
              },
              d.createElement(
                M.P,
                {
                  ref: this.m_refScrollPanel,
                  scrollDirection: M.I.Horizontal,
                  onScroll: this.onScroll,
                },
                this.props.children
              ),
              (!1 === this.state.bScrolledToStart ||
                !1 === this.state.bScrolledToEnd) &&
                d.createElement(
                  "div",
                  { className: "PaginationButtons" },
                  null !== this.state.bScrolledToStart &&
                    d.createElement(B, {
                      side: x.Left,
                      enabled: !this.state.bScrolledToStart,
                      onClick: this.onLeftButtonClick,
                    }),
                  null !== this.state.bScrolledToEnd &&
                    d.createElement(B, {
                      side: x.Right,
                      enabled: !this.state.bScrolledToEnd,
                      onClick: this.onRightButtonClick,
                    })
                )
            );
          }
        }
        (0, o.gn)([s.ZP], H.prototype, "onAnimationFrame", null),
          (0, o.gn)([s.ZP], H.prototype, "onScroll", null),
          (0, o.gn)([s.ZP], H.prototype, "onLeftButtonClick", null),
          (0, o.gn)([s.ZP], H.prototype, "onRightButtonClick", null);
        let A = class extends d.Component {
          constructor(e) {
            super(e),
              (this.m_scrollWatcher = new E.cB()),
              (this.m_refAnchoredParentPortal = d.createRef()),
              (this.m_refButton = d.createRef()),
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
              d.createElement(
                "div",
                {
                  className: (0, E.LJ)(
                    "AppButtonContainer",
                    [
                      "AppOwned",
                      S.G3.probablyOwnedAppkeys.has(this.props.appkey),
                    ],
                    ["ShowingPopovers", this.shouldShowHoverContents]
                  ),
                },
                d.createElement(
                  h.z,
                  {
                    className: "AppButton",
                    ref: this.m_refButton,
                    onMouseEnter: this.buttonMouseEnter,
                    onMouseLeave: this.buttonMouseLeave,
                    onClick: this.props.onClick,
                  },
                  d.createElement(P, Object.assign({}, e), this.props.children)
                )
              )
            );
          }
        };
        (0, o.gn)([s.ZP], A.prototype, "buttonMouseEnter", null),
          (0, o.gn)([s.ZP], A.prototype, "buttonMouseLeave", null),
          (0, o.gn)([s.ZP], A.prototype, "onParentScrollStop", null),
          (A = (0, o.gn)([f.Pi], A));
        const N = () =>
            d.createElement("div", { className: "AppButton Placeholder" }),
          U = (e) => {
            var t;
            const r = !!e.loading,
              n = null !== (t = e.apps) && void 0 !== t ? t : [];
            let i = "AppCarousel";
            return (
              e.className && (i += " " + e.className),
              (i += " NoAnimations"),
              d.createElement(
                H,
                { additionalClassNames: i, paginationAlignmentOffset: -20 },
                r &&
                  d.createElement(
                    d.Fragment,
                    null,
                    d.createElement(N, null),
                    d.createElement(N, null),
                    d.createElement(N, null),
                    d.createElement(N, null)
                  ),
                !r &&
                  n.map((e) =>
                    d.createElement(A, Object.assign({ key: e.appkey }, e))
                  )
              )
            );
          };
        var F = r(9669),
          G = r.n(F);
        function W() {
          return G()
            .get(
              "https://steamcommunity.com/steamvr/ajaxgethomedata/?include_apps=1&include_free_apps=1&num_apps=20"
            )
            .then((e) => e.data);
        }
        const z = () =>
          d.createElement(
            h.z,
            {
              className: "ButtonControl WithIcon PanelTopRight",
              onClick: () =>
                b.y.Instance.openBigPictureStore(null, b.b.QuickStore),
            },
            d.createElement("span", null, (0, g.Xx)("#BrowseAll")),
            d.createElement("img", {
              className: "Icon BlackToWhite",
              src: "/dashboard/images/icons/svr_store.svg",
            })
          );
        var K;
        !(function (e) {
          (e[(e.Free = 0)] = "Free"),
            (e[(e.Singleplayer = 1)] = "Singleplayer"),
            (e[(e.Multiplayer = 2)] = "Multiplayer");
        })(K || (K = {}));
        let q = class extends d.Component {
          constructor(e) {
            super(e), (this.state = { storeData: null });
          }
          componentDidMount() {
            W().then((e) => this.setState({ storeData: e }));
          }
          openSteamApp(e, t, r) {
            v.e.instance.RecordUIEvent(
              "QuickStoreAppClick",
              K[t].toLowerCase() + ":" + r,
              `steam.app.${e}`
            ),
              b.y.Instance.openBigPictureStore(e, b.b.QuickStore);
          }
          makeAppButtonList() {
            let e = [];
            switch (this.props.section) {
              case K.Free:
                e = this.state.storeData.apps_free;
                break;
              case K.Singleplayer:
                e = this.state.storeData.apps_singleplayer;
                break;
              case K.Multiplayer:
                e = this.state.storeData.apps_multiplayer;
            }
            return e.map((e, t) => {
              const r = `steam.app.${e.appid}`;
              return {
                key: r,
                appkey: r,
                title: e.name,
                imageUrl: e.logo,
                onClick: () =>
                  this.openSteamApp(e.appid, this.props.section, t),
              };
            });
          }
          render() {
            return this.state.storeData
              ? d.createElement(U, { apps: this.makeAppButtonList() })
              : d.createElement(U, { loading: !0 });
          }
        };
        q = (0, o.gn)([f.Pi], q);
        class X extends d.Component {
          constructor(e) {
            super(e), (this.state = {});
          }
          render() {
            return d.createElement(
              w.lL,
              {
                visible: this.props.visible,
                additionalClassNames: "QuickStore",
                summonOverlayKey: m.wB,
              },
              d.createElement(z, null),
              d.createElement(
                "h2",
                null,
                (0, g.Xx)("#StoreSection_TopSingleplayer")
              ),
              d.createElement(q, { section: K.Singleplayer }),
              d.createElement(
                "h2",
                null,
                (0, g.Xx)("#StoreSection_TopMultiplayer")
              ),
              d.createElement(q, { section: K.Multiplayer }),
              d.createElement("h2", null, (0, g.Xx)("#StoreSection_TopFree")),
              d.createElement(q, { section: K.Free })
            );
          }
        }
        var Q;
        const j = () =>
            d.createElement(
              h.z,
              {
                className: "ButtonControl WithIcon PanelTopRight",
                onClick: () =>
                  b.y.Instance.openBigPictureLibrary(null, b.b.QuickLaunch),
              },
              d.createElement("span", null, (0, g.Xx)("#BrowseAll")),
              d.createElement("img", {
                className: "Icon BlackToWhite",
                src: "/dashboard/images/icons/svr_items.svg",
              })
            ),
          Z = () =>
            d.createElement(
              h.z,
              {
                className: "ButtonControl Colorful WelcomeBrowseStore",
                onClick: () =>
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VROverlay.ShowDashboard(m.wB),
              },
              d.createElement("span", null, (0, g.Xx)("#WelcomeBrowseStore"))
            ),
          Y = () =>
            d.createElement(
              h.z,
              {
                className: "ButtonControl Colorful WelcomeInstall",
                onClick: () =>
                  b.y.Instance.openBigPictureLibrary(null, b.b.QuickLaunch),
              },
              d.createElement("span", null, (0, g.Xx)("#WelcomeInstall"))
            );
        class J extends d.Component {
          constructor(e) {
            super(e), (this.state = { storeData: null });
          }
          componentDidMount() {
            W().then((e) => this.setState({ storeData: e }));
          }
          render() {
            let e = [];
            if (this.state.storeData) {
              let t = this.state.storeData.apps_singleplayer.flatMap((e, t) => [
                  this.state.storeData.apps_singleplayer[t],
                  this.state.storeData.apps_multiplayer[t],
                  this.state.storeData.apps_free[t],
                ]),
                r = new Set();
              for (; e.length < 12 && t.length; ) {
                for (; r.has(t[0].appid); ) t.shift();
                let n = t.shift();
                r.add(n.appid),
                  e.push(
                    d.createElement(
                      h.z,
                      {
                        key: `appid_${n.appid}`,
                        className: `WelcomeFloatingApp WelcomeFloatingApp${e.length}`,
                        onClick: () =>
                          b.y.Instance.openBigPictureStore(
                            n.appid,
                            b.b.QuickLaunch
                          ),
                      },
                      d.createElement("img", { src: n.logo })
                    )
                  );
              }
            }
            return d.createElement(
              "div",
              { className: "QuickLaunchWelcome" },
              e,
              d.createElement(
                "div",
                { className: "QuickLaunchWelcomePrompt" },
                d.createElement(
                  "div",
                  { className: "QuickLaunchWelcomeHeader" },
                  (0, g.Xx)("#WelcomeHeader")
                ),
                d.createElement(
                  "div",
                  { className: "QuickLaunchWelcomeMessage" },
                  (0, g.Xx)("#WelcomeMessage")
                ),
                d.createElement(Z, null),
                d.createElement(Y, null)
              )
            );
          }
        }
        let $ = (Q = class extends d.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new a.Nv()),
              (this.state = {}),
              this.m_mailbox.Init("systemui_quicklaunch");
          }
          launchApplication(e, t, r) {
            var n, i;
            v.e.instance.RecordUIEvent(
              "QuickLaunchAppClick",
              (t ? "top" : "bottom") + ":" + r,
              e.key
            ),
              null === (i = (n = this.props).onGameLaunched) ||
                void 0 === i ||
                i.call(n, e),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRApplications.LaunchApplication(e.key);
          }
          makeAppButtonList() {
            let e = [];
            if (null != S.G3.apps)
              for (let t of S.G3.apps)
                t.is_internal ||
                  (t.is_dashboard_overlay && !t.show_overlay_in_quicklaunch) ||
                  t.is_hidden ||
                  t.is_instance ||
                  Q.s_setBlacklistedAppkeys.has(t.key) ||
                  e.push(t);
            e.sort((e, t) => {
              let r = t.library_priority - e.library_priority;
              return 0 == r && (r = t.last_launch - e.last_launch), r;
            });
            const t = (e) => {
              let t = e.image_path;
              return (
                t.startsWith("/app/image?") && (t += "&aspect=portrait"), t
              );
            };
            return e.map((e, r) => {
              let n = r;
              const i = r < Q.TOP_ROW_LENGTH;
              return (
                i || (n -= Q.TOP_ROW_LENGTH),
                {
                  key: e.key,
                  appkey: e.key,
                  title: e.name,
                  imageUrl: t(e),
                  onClick: () => this.launchApplication(e, i, n),
                  children: d.createElement(
                    d.Fragment,
                    null,
                    d.createElement("div", { className: "PlayIconFade" }),
                    d.createElement("img", {
                      className: "PlayIcon",
                      src: "/dashboard/images/icons/svr_play.svg",
                    })
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
              r = this.makeAppButtonList();
            const n =
                0 == r.length ||
                S.G3.settings.get("/settings/dashboard/forceWelcomeScreen"),
              i =
                0 == r.length ||
                S.G3.settings.get("/settings/dashboard/hideBigPictureLibrary"),
              o =
                0 == r.length ||
                (null !==
                  (e = S.G3.settings.get(
                    "/settings/dashboard/showRoomSetup"
                  )) &&
                  void 0 !== e &&
                  e);
            if (n) t = d.createElement(J, null);
            else {
              let e = r.slice(0, Q.TOP_ROW_LENGTH),
                n = r.slice(Q.TOP_ROW_LENGTH);
              t = d.createElement(
                d.Fragment,
                null,
                !i && d.createElement(j, null),
                o &&
                  d.createElement(
                    h.z,
                    {
                      className: "ButtonControl WithIcon PanelTopRight",
                      onClick: this.onRoomSetup,
                    },
                    d.createElement("span", null, (0, g.Xx)("#RoomSetup")),
                    d.createElement("img", {
                      className: "Icon BlackToWhite",
                      src: "/dashboard/images/icons/svr_recenter.svg",
                    })
                  ),
                d.createElement("h2", null, (0, g.Xx)("#RecentlyPlayed")),
                d.createElement(U, { className: "TopRow", apps: e }),
                d.createElement(U, { className: "BottomRow", apps: n })
              );
            }
            return d.createElement(
              w.lL,
              {
                visible: this.props.visible,
                scrollable: !n,
                debugName: "homepanel",
                additionalClassNames: "QuickLaunch",
                summonOverlayKey: m.O5,
              },
              t
            );
          }
        });
        ($.TOP_ROW_LENGTH = 4),
          ($.s_setBlacklistedAppkeys = new Set([
            "openvr.tool.steamvr_room_setup",
            "openvr.tool.steamvr_media_player",
            "openvr.tool.steamvr_desktop_gametheatre",
            "openvr.tool.steamvr_tutorial",
            "openvr.tool.steamvr_environments",
            "openvr.tool.steamvr_environments_tools",
            m.W4,
            m.jW,
          ])),
          (0, o.gn)([s.ak], $.prototype, "onRoomSetup", null),
          ($ = Q = (0, o.gn)([f.Pi], $));
        var ee,
          te,
          re,
          ne,
          ie = r(16),
          oe = r(421),
          ae = r(6063),
          se = r(3619),
          le = r(4138),
          de = (r(9462), r(9626)),
          ce = (r(792), r(6346)),
          he = r(6821),
          ue = r(2477);
        !(function (e) {
          (e[(e.ToggleRoomView = 0)] = "ToggleRoomView"),
            (e[(e.Recenter = 1)] = "Recenter"),
            (e[(e.IncognitoMode = 2)] = "IncognitoMode");
        })(ee || (ee = {})),
          (function (e) {
            (e[(e.Near = 0)] = "Near"),
              (e[(e.Middle = 1)] = "Middle"),
              (e[(e.Far = 2)] = "Far");
          })(re || (re = {}));
        class pe extends d.Component {
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
        })(ne || (ne = {}));
        let me = (te = class extends d.Component {
          constructor(e) {
            super(e),
              (this.m_mapExternalOverlays = {}),
              (this.m_setSuppressingFade = new Set()),
              (this.m_mailbox = new a.Nv()),
              (this.m_timeoutPopoverMenuHide = 0),
              (this.m_refPopoverMenu = d.createRef()),
              (this.m_appStateChangedAutorunDisposer = null),
              (this.m_refDesktopView = d.createRef()),
              (this.m_refDesktopTray = d.createRef()),
              (this.m_refOverlayTransform = d.createRef()),
              (this.m_refVolumeTray = d.createRef()),
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
                eShowPopoverMenu: ne.None,
                setForcingBoundsVisible: {},
                mapWindows: new Map(),
                desktopViewDebugInfo: {
                  inputFrameTime: 0,
                  mapOverlayFrameTimes: new Map(),
                },
                bWindowViewEnabled: !1,
                bLaserMouseSuppressionActive: !1,
                bPlacementModeActive: !1,
                bLinkStreamActive: !1,
                bKeyboardVisible: !1,
                mapPortals: new Map(),
              }),
              (window.setDashboardScale = (e) => (te.s_dashboardUserScale = e)),
              (window.setDashboardDistance = (e) =>
                (te.s_dashboardUserDistance = e)),
              S.G3.Init(!1),
              a.hz.getInstance(),
              this.m_mailbox.Init(te.k_sDashboardMailboxName).then(() => {
                this.m_mailbox.RegisterHandler(
                  te.k_sSetDashboardFadeSupressionMessage,
                  this.onSetDashboardFadeSuppression
                ),
                  this.m_mailbox.RegisterHandler(
                    te.k_sDashboardOverlayCreatedMessage,
                    this.onDashboardOverlayCreated
                  ),
                  this.m_mailbox.RegisterHandler(
                    te.k_sDashboardOverlayDestroyedMessage,
                    this.onDashboardOverlayDestroyed
                  ),
                  this.m_mailbox.RegisterHandler(
                    te.k_sUpdateDashboardTabsMessage,
                    this.onUpdateDashboardTabs
                  ),
                  this.m_mailbox.RegisterHandler(
                    te.k_sWindowViewCreatedMessage,
                    this.onWindowViewCreated
                  ),
                  this.m_mailbox.RegisterHandler(
                    te.k_sWindowViewDestroyedMessage,
                    this.onWindowViewDestroyed
                  ),
                  this.m_mailbox.RegisterHandler(
                    te.k_sUpdateWindowListMessage,
                    this.onUpdateWindowList
                  ),
                  this.m_mailbox.RegisterHandler(
                    te.k_sUpdateDebugInfoMessage,
                    this.onUpdateDebugInfo
                  ),
                  this.m_mailbox.RegisterHandler(
                    te.k_sSetDashboardForceBoundsVisible,
                    this.onSetDashboardForceBoundsVisible
                  ),
                  this.m_mailbox.RegisterHandler(
                    te.k_sLaserMouseSuppressionUpdate,
                    this.onLaserMouseSuppressionUpdate
                  ),
                  this.m_mailbox.RegisterHandler(
                    "show_dashboard_requested",
                    this.onShowDashboardRequested
                  ),
                  this.m_mailbox.RegisterHandler(
                    "hide_dashboard_requested",
                    this.onHideDashboardRequested
                  ),
                  this.m_mailbox.RegisterHandler(
                    "hide_theater_mode",
                    this.onHideTheaterMode
                  );
              }),
              ue.Q.SteamVR.SetImplementation(
                "DashboardTabClicked",
                ({ tab_id: e }) => {
                  const t = de.B.GetSummonKeyForTabId(e);
                  t &&
                    this.switchToOverlayInternal(
                      t,
                      "User clicked VRGamepadUI tab"
                    );
                }
              ),
              ue.Q.SteamVR.SetImplementation(
                "DashboardActionInvoked",
                ({ action_id: e, toggle_value: t }) => {
                  switch (e) {
                    case ee.ToggleRoomView:
                      this.onToggleRoomView(t);
                      break;
                    case ee.Recenter:
                      this.onRecenterClick();
                      break;
                    case ee.IncognitoMode:
                      this.ToggleIncognitoMode(t);
                  }
                }
              );
          }
          componentDidMount() {
            (window.Dashboard = this),
              (this.m_roomViewChangedEventHandle =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.VRCompositor.RegisterForRoomViewChangedEvents(
                      this.onRoomViewChanged
                    )),
              (this.m_linkStreamActiveEventHandle =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.RegisterForLinkStreamActiveEvents(
                      this.onLinkStreamActiveEvents
                    )),
              (this.m_dashboardThumbnailsChangedEventHandle =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.RegisterForOverlayThumbnailsChanged(() =>
                      this.forceUpdate()
                    )),
              (this.m_keyboardVisibilityChangedEventHandle =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.RegisterForKeyboardVisibilityChangedEvents(
                      this.onKeyboardVisibilityChanged
                    ));
            const e =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.GetVRStartupReason(),
              t =
                e == a.a0.AppLaunch_Unknown ||
                e == a.a0.AppLaunch_Steam ||
                e == a.a0.Unknown,
              r = S.G3.settings.get(
                "/settings/dashboard/allowDashboardAutoLaunchWithSteamVRHome"
              ),
              n = S.G3.settings.get("/settings/steamvr/enableHomeApp"),
              i = S.G3.settings.get(m.y3);
            ((t || (!r && n)) && !i) ||
              ((this.m_bWaitingOnInitialOverlayToAutoShow = !0),
              setTimeout(
                () =>
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VROverlay.ShowDashboard(null != i ? i : ""),
                500
              )),
              (this.m_appStateChangedAutorunDisposer = (0, l.EH)(() => {
                const e = y.H.Instance.SceneApplicationState != a.xY.None;
                this.isOverlayActive(m.PF) && !e && this.switchToHomeOverlay();
              })),
              VRHTML.VRDashboardManager.GetDashboardOverlayKeys().forEach(
                (e) => {
                  this.initializeOverlayState(e);
                }
              ),
              this.updateSiblingReferences();
          }
          componentDidUpdate(e, t) {
            const r = this.getActiveOverlaySummonKey();
            let n = !1;
            if (
              (t.bShown !== this.state.bShown &&
                (p.G.Instance.playSound(
                  this.state.bShown ? p.y.DashboardOpen : p.y.DashboardClose
                ),
                (n = !0)),
              this.state.bShown &&
                !n &&
                t.sActiveOverlayID != this.state.sActiveOverlayID)
            )
              switch (r) {
                case m.A4:
                  p.G.Instance.playSound(p.y.ThemeSettings);
                  break;
                case m.gB:
                  p.G.Instance.playSound(p.y.ThemeDesktop);
                  break;
                case m.O5:
                  p.G.Instance.playSound(p.y.ThemeLibrary);
                  break;
                case m.wB:
                  p.G.Instance.playSound(p.y.ThemeStore);
                  break;
                case m.PF:
                  p.G.Instance.playSound(p.y.ThemeNowPlaying);
              }
            if (
              t.sActiveOverlayID != this.state.sActiveOverlayID &&
              this.isOverlayActive(m.Y8)
            )
              switch (b.y.Instance.lastBigPictureEntryPoint) {
                case b.b.QuickLaunch:
                  this.m_bQuickLaunchShouldReturnToBigPicture = !0;
                  break;
                case b.b.QuickStore:
                  this.m_bQuickStoreShouldReturnToBigPicture = !0;
              }
            this.updateSiblingReferences(),
              this.updateVRGamepadUIPathProperties();
          }
          updateVRGamepadUIPathProperties() {
            var e;
            const t = this.getActiveOverlaySummonKey(),
              r = new ce.cH();
            for (const e in this.m_mapExternalOverlays) {
              const n = this.m_mapExternalOverlays[e],
                i = de.B.GetTabIdForSummonKey(n.summon_overlay_key);
              if (n.summon_overlay_key == m.gB) continue;
              const o = new ce.D3();
              o.set_tab_id(i),
                o.set_visible(this.shouldShowOverlayTab(n, !0)),
                n.summon_overlay_key == m.T2
                  ? o.set_display_name((0, g.Xx)("#Steam"))
                  : o.set_display_name(n.tab_name);
              const a = new ce.I_();
              switch (n.summon_overlay_key) {
                case m.T2:
                  a.set_enum(ce.mw.k_EVRDashboardTabIcon_Steam);
                  break;
                case m.Xl:
                  a.set_enum(ce.mw.k_EVRDashboardTabIcon_DesktopDisplay);
                  break;
                case m.A4:
                  a.set_enum(ce.mw.k_EVRDashboardTabIcon_Cog);
                  break;
                case m.PF:
                  if (
                    (a.set_enum(ce.mw.k_EVRDashboardTabIcon_RunningGame),
                    y.H.Instance.SceneAppKey.startsWith(m.I8))
                  ) {
                    const e = Number.parseInt(
                      y.H.Instance.SceneAppKey.substring(m.I8.length)
                    );
                    Number.isInteger(e) && a.set_appid(e);
                  }
                  break;
                default:
                  a.set_overlay(n.summon_overlay_key),
                    a.set_enum(ce.mw.k_EVRDashboardTabIcon_Unknown);
              }
              o.set_icon(a),
                r.add_tabs(o),
                t == n.summon_overlay_key && r.set_selected_tab_id(i),
                m.A4 == n.summon_overlay_key && r.set_vr_settings_tab_id(i);
            }
            if (this.m_refDesktopView.current) {
              const n = this.m_refDesktopView.current.desktopCount;
              null === (e = this.m_refDesktopView.current) ||
                void 0 === e ||
                e.state.desktopIndices.forEach((e) => {
                  var i;
                  const o = `${m.r4}.${e}`,
                    a = de.B.GetTabIdForSummonKey(o),
                    s = new ce.D3();
                  s.set_tab_id(a),
                    s.set_display_name(
                      n > 1 ? (0, g.Xx)("#Desktop_X", e) : (0, g.Xx)("#Desktop")
                    ),
                    s.set_visible(!0);
                  const l = new ce.I_();
                  l.set_enum(ce.mw.k_EVRDashboardTabIcon_DesktopDisplay),
                    s.set_icon(l),
                    r.add_tabs(s),
                    (null == t ? void 0 : t.startsWith(m.gB)) &&
                      (null === (i = this.m_refDesktopView.current) ||
                      void 0 === i
                        ? void 0
                        : i.currentDesktopIndex) == e &&
                      r.set_selected_tab_id(a);
                });
            }
            r.tabs().sort(ve), (0, he.W)(r);
            const n = new ce.yt();
            n.add_actions(
              ce.z3.fromObject({
                action_id: ee.ToggleRoomView,
                display_name: (0, g.Xx)("#Toggle_Room_View"),
                visible_in_dashboard_bar: this.BShouldShowDashboardAction(
                  ee.ToggleRoomView
                ),
                invocation: ce.w7.k_EVRDashboardActionInvocation_Toggle,
                active:
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VRControlPanel.GetCameraRoomViewVisible(),
                enabled:
                  null === VRHTML || void 0 === VRHTML
                    ? void 0
                    : VRHTML.VROverlayInternal.HasCameraRoomViewCapability(),
                icon: { enum: ce.Cj.k_EVRDashboardActionIcon_RoomViewOff },
                icon_active: {
                  enum: ce.Cj.k_EVRDashboardActionIcon_RoomViewOn,
                },
              })
            ),
              n.add_actions(
                ce.z3.fromObject({
                  action_id: ee.Recenter,
                  display_name: (0, g.Xx)("#Button_Recenter"),
                  visible_in_dashboard_bar: this.BShouldShowDashboardAction(
                    ee.Recenter
                  ),
                  invocation: ce.w7.k_EVRDashboardActionInvocation_Trigger,
                  icon: { enum: ce.Cj.k_EVRDashboardActionIcon_Recenter },
                })
              ),
              (0, he.W)(n);
          }
          initializeOverlayState(e) {
            S.G3.GetAppInfo(e).then((t) => {
              var r;
              let n = 1;
              if (e.startsWith("system.desktop.")) {
                let t = "/settings/dashboard/desktopScale" + e.split(".")[2];
                n = null !== (r = S.G3.settings.get(t)) && void 0 !== r ? r : 1;
              }
              de.B.m_mapOverlayState.set(e, {
                dockLocation: R.RA.Dashboard,
                refOverlayWidget: d.createRef(),
                xfInitial: null,
                fScale: n,
              });
              const i = "steamlink_openvr-overlay" == e || e.startsWith(m.wX);
              ((null == t ? void 0 : t.starts_theater_mode) || i) &&
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
            var e, t, r;
            clearTimeout(this.m_timeoutHoverStateEnd),
              clearTimeout(this.m_timeoutPopoverMenuHide),
              this.m_appStateChangedAutorunDisposer &&
                (this.m_appStateChangedAutorunDisposer(),
                (this.m_appStateChangedAutorunDisposer = null)),
              (0, a.OK)({
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
              null === (r = this.m_keyboardVisibilityChangedEventHandle) ||
                void 0 === r ||
                r.unregister(),
              (this.m_keyboardVisibilityChangedEventHandle = null);
          }
          static getDashboardDistance() {
            if (te.s_dashboardUserDistance) return te.s_dashboardUserDistance;
            const e = de.B.currentDashboardPosition;
            return e == re.Near ? 0.925 : e == re.Middle ? 1.05 : 1.2;
          }
          static getDashboardVerticalPosition() {
            var e;
            const t =
                0.01 *
                (null !==
                  (e = S.G3.settings.get(
                    "/settings/dashboard/verticalOffsetCm_2"
                  )) && void 0 !== e
                  ? e
                  : 0),
              r = de.B.currentDashboardPosition;
            return r == re.Near
              ? -0.07 + t
              : r == re.Middle
              ? -0.08 + t
              : -0.09 + t;
          }
          static getDashboardScale() {
            var e;
            if (te.s_dashboardUserScale) return te.s_dashboardUserScale;
            let t = 1;
            const r = de.B.currentDashboardPosition;
            return (
              (t = r == re.Near ? 0.36 : r == re.Middle ? 0.41 : 0.47),
              (t *=
                null !==
                  (e =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.VRProperties.GetFloatProperty(
                          a.wU,
                          a.Uk.DashboardScale_Float
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
            this.setState((t, r) => {
              let n = Object.assign({}, t.setForcingBoundsVisible);
              return (
                (n[e.for_overlay_key] = new Set(n[e.for_overlay_key])),
                e.force_bounds_visible
                  ? n[e.for_overlay_key].add(e.for_id)
                  : n[e.for_overlay_key].delete(e.for_id),
                { setForcingBoundsVisible: n }
              );
            });
          }
          onLaserMouseSuppressionUpdate(e) {
            this.setState({
              bLaserMouseSuppressionActive: e.suppression_active,
            });
          }
          onDashboardOverlayCreated(e) {
            this.initializeOverlayState(e.overlay_key);
          }
          onDashboardOverlayDestroyed(e) {
            var t;
            e.overlay_key.startsWith("system.window.")
              ? null === (t = this.m_refDesktopView.current) ||
                void 0 === t ||
                t.onWindowViewDestroyed(e.overlay_key)
              : e.overlay_key == this.getActiveOverlayKey() &&
                this.switchToHomeOverlay(),
              e.overlay_key == m.T2 && de.B.ClearActiveDashboardPopups(),
              de.B.m_mapOverlayState.delete(e.overlay_key);
          }
          onUpdateDashboardTabs(e) {
            const t = this.getActiveOverlaySummonKey();
            (this.m_mapExternalOverlays = {}),
              e.tabs.forEach((e) => {
                e.mountable_id &&
                  (this.m_mapExternalOverlays[e.mountable_id] = e);
              }),
              de.B.SetHasGamepadUIOVerlay(this.hasVRGamepadUIOverlay()),
              this.autoSwitchOverlayIfNeeded(),
              this.m_activeOverlayThatVanished &&
                this.hasDashboardOverlay(
                  this.m_activeOverlayThatVanished.sSummonKey
                ) &&
                (this.m_activeOverlayThatVanished = null);
            const r = S.G3.settings.get(m.y3);
            this.m_bWaitingOnInitialOverlayToAutoShow &&
              this.hasDashboardOverlay(r) &&
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
            var t, r;
            this.switchToOverlayInternal(m.gB),
              null === (t = this.m_refDesktopView.current) ||
                void 0 === t ||
                t.onWindowViewCreated(e.overlay_key, e.hwnd),
              null === (r = this.m_refDesktopTray.current) ||
                void 0 === r ||
                r.onWindowViewCreated(e.overlay_key, e.hwnd);
          }
          onWindowViewDestroyed(e) {}
          onUpdateWindowList(e) {
            var t;
            let r = new Map();
            e.windows.forEach((e) => {
              r.set(e.hwnd, e);
            }),
              this.setState({
                mapWindows: r,
                bWindowViewEnabled:
                  null === (t = S.G3.settings.get(m.fj)) || void 0 === t || t,
              });
          }
          onUpdateDebugInfo(e) {}
          onDockOverlay(e, t, r) {
            var n, i;
            let o = !1;
            (t != R.RA.LeftHand && t != R.RA.RightHand && t != R.RA.Theater) ||
              de.B.m_mapOverlayState.forEach((e, r) => {
                e.dockLocation == t &&
                  ((e.dockLocation = R.RA.Dashboard), (o = !0));
              });
            const a = de.B.m_mapOverlayState.get(e);
            if (
              (a && ((a.dockLocation = t), (a.xfInitial = r)),
              t === R.RA.Dashboard)
            )
              if (e.startsWith(m.r4)) {
                const t = Number.parseInt(e.substring(m.r4.length + 1));
                null === (n = this.m_refDesktopView.current) ||
                  void 0 === n ||
                  n.onDesktopChange(t);
              } else
                e.startsWith(m.Vq) &&
                  (null === (i = this.m_refDesktopView.current) ||
                    void 0 === i ||
                    i.onWindowViewChange(e));
            this.forceUpdate();
          }
          renderActiveOverlay() {
            if (null === this.state.sActiveOverlayID) return null;
            const e = this.getActiveOverlayKey(),
              t = de.B.isVRGamepadUI,
              r = this.getActiveOverlay();
            if (!r) return null;
            const n = de.B.m_mapOverlayState.get(e),
              i = n ? n.fScale : 1,
              o = t ? de.B.m_fVRGamepadUI_GlobalActiveOverlayScale : 1;
            return d.createElement(
              d.Fragment,
              null,
              d.createElement(
                a.wx,
                { scale: o },
                d.createElement(a.sl, {
                  mountedId: r.mountable_id,
                  fDashboardScale: i,
                }),
                t && this.renderVRGamepadUISidePanels()
              )
            );
          }
          shouldShowOverlayTab(e, t) {
            return t && e.summon_overlay_key == m.PF
              ? y.H.Instance.SceneApplicationState != a.xY.None
              : !(
                  (void 0 === e.icon_overlay_key && null == e.icon_uri) ||
                  !e.summon_overlay_key ||
                  (!t && e.summon_overlay_key == m.A4) ||
                  (!t && e.summon_overlay_key == m.Y8) ||
                  (!t && e.summon_overlay_key == m.Xl) ||
                  (!t && e.summon_overlay_key.startsWith(m.r4)) ||
                  (!t && e.summon_overlay_key.startsWith(m.Vq)) ||
                  (!t &&
                    e.summon_overlay_key.startsWith(m.MZ) &&
                    !e.summon_overlay_key.startsWith(m.wX)) ||
                  (t &&
                    (e.summon_overlay_key == m.O5 ||
                      e.summon_overlay_key == m.wB)) ||
                  (!t &&
                    ((r = e.summon_overlay_key),
                    null !== (n = null == r ? void 0 : r.startsWith(m.MI)) &&
                      void 0 !== n &&
                      n))
                );
            var r, n;
          }
          computeFilteredOverlayTabs(e) {
            return Object.values(this.m_mapExternalOverlays)
              .filter((t) => this.shouldShowOverlayTab(t, e))
              .sort((e, t) => e.tab_name.localeCompare(t.tab_name));
          }
          findDashboardTab(e) {
            for (let t in this.m_mapExternalOverlays) {
              let r = this.m_mapExternalOverlays[t];
              if (r.summon_overlay_key == e) return r;
            }
            return null;
          }
          hasTenfootOverlay() {
            return this.hasDashboardOverlay(m.Y8);
          }
          hasVRGamepadUIOverlay() {
            return this.hasDashboardOverlay(m.T2);
          }
          switchToHomeOverlay() {
            let e;
            (e = de.B.isVRGamepadUI ? m.T2 : m.O5),
              this.switchToOverlayInternal(e, "switchToDashboardLibrary");
          }
          switchToSteamOverlay() {
            let e = "";
            if (de.B.isVRGamepadUI) e = m.T2;
            else {
              if (!this.hasTenfootOverlay()) return;
              e = m.Y8;
            }
            this.switchToOverlayInternal(e, "switchToSteamOverlay");
          }
          switchToOverlayInternal(e, t) {
            var r, n;
            switch (e) {
              case m.Y8:
                b.y.Instance.latchBigPictureEntryPoint();
                break;
              case m.O5:
                this.m_bQuickLaunchShouldReturnToBigPicture = !1;
                break;
              case m.wB:
                this.m_bQuickStoreShouldReturnToBigPicture = !1;
                break;
              case m.Us:
                let t = {
                    type: "show_app_binding",
                    app_key:
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.VRApplications.GetSceneApplicationKey(),
                  },
                  r = "bindingui/" + a.qA[(0, a.Op)()];
                this.m_mailbox.SendMessage(r, t),
                  (this.m_bQuickStoreShouldReturnToBigPicture = !1),
                  (e = m.RM);
            }
            if (e.startsWith(m.r4)) {
              const t = Number.parseInt(e.substring(m.r4.length + 1));
              Number.isSafeInteger(t) &&
                (null === (r = this.m_refDesktopView.current) ||
                  void 0 === r ||
                  r.onDesktopChange(t)),
                (e = m.gB);
            }
            let i = this.findDashboardTab(e);
            return (
              !!i &&
              (this.computeFilteredOverlayTabs(!1).includes(i) &&
                S.G3.SetSettingsValue(
                  m.nf,
                  null !== (n = i.summon_overlay_key) && void 0 !== n ? n : ""
                ),
              (this.m_activeOverlayThatVanished = null),
              this.setState({ sActiveOverlayID: i.mountable_id }),
              v.e.instance.RecordUIEvent(
                "SetDashboardOverlay",
                null != t ? t : "Button",
                e
              ),
              !0)
            );
          }
          autoSwitchOverlayIfNeeded() {
            const e = [],
              t = this.getActiveOverlaySummonKey();
            this.m_bWaitingOnInitialOverlayToAutoShow &&
              e.push(S.G3.settings.get(m.y3)),
              this.m_activeOverlayThatVanished &&
                (new Date().getTime() -
                  this.m_activeOverlayThatVanished.timeVanished.getTime()) /
                  1e3 <
                  te.k_nTimeLimitToReturnToActiveOverlayThatVanishedSeconds &&
                e.push(this.m_activeOverlayThatVanished.sSummonKey),
              (null == t ||
                (t == m.O5 && !this.m_bUserManuallySwitchToOldLibrary) ||
                t == m.wB) &&
                e.push(m.T2),
              null == t && e.push(m.O5),
              t == m.T2 && de.B.ignoreVRGamepadUI && e.push(m.O5);
            const r = e.find(this.hasDashboardOverlay);
            r && this.switchToOverlayInternal(r);
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
            return t == m.gB
              ? null === (e = this.m_refDesktopView.current) || void 0 === e
                ? void 0
                : e.sCurrentOverlayKey
              : t;
          }
          getActiveOverlayState() {
            const e = this.getActiveOverlayKey();
            return de.B.m_mapOverlayState.get(e);
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
            this.getActiveOverlaySummonKey() == m.f8 &&
              this.switchToHomeOverlay();
          }
          onShowDashboardRequested(e) {
            var t;
            if (!S.G3.settings.get("/settings/dashboard/enableDashboard"))
              return;
            const r = de.B.m_mapOverlayState.get(e.overlay_key);
            (null == r ? void 0 : r.dockLocation) != R.RA.Theater &&
              (this.show(
                null !== (t = e.reason) && void 0 !== t ? t : "unknown"
              ),
              e.overlay_key
                ? this.switchToOverlayInternal(e.overlay_key)
                : this.autoSwitchOverlayIfNeeded(),
              this.setDashboardVisibility(
                !0,
                e.tracked_device_index,
                e.reason
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
              ? this.switchToOverlayInternal(m.f8)
              : (this.hideMessageOverlay(),
                VRHTML.VRDashboardManager.CloseKeyboard(),
                this.hide(e.reason),
                this.setDashboardVisibility(!1, void 0, e.reason));
          }
          setDashboardVisibility(e, t, r) {
            let n = {
              type: "set_dashboard_visibility",
              tracked_device_index: t,
              visible: e,
              reason: r,
            };
            this.m_mailbox.SendMessage("vrcompositor_systemlayer", n);
          }
          show(e) {
            if (this.isShown()) return;
            v.e.instance.StartDashboardSession(e),
              this.m_mailbox.SendMessage("desktopview", {
                type: "request_window_list_update",
              });
            const t = y.H.Instance.SceneAppKey,
              r = y.H.Instance.SceneAppIsHome;
            t &&
              t != this.state.sLastShownAppKey &&
              (this.setState({ sLastShownAppKey: t }),
              r
                ? this.switchToHomeOverlay()
                : this.switchToOverlayInternal(m.PF)),
              (this.m_activeOverlayThatVanished = null),
              this.setState({ bShown: !0 });
            let n = { type: te.k_sRequestDashboardTabsMessage };
            this.m_mailbox.SendMessage("vrcompositor_systemlayer", n),
              (0, a.qI)();
          }
          hide(e) {
            this.isShown() &&
              ((this.m_activeOverlayThatVanished = null),
              this.setState({ bShown: !1, eShowPopoverMenu: ne.None }),
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
            const r =
                null !==
                  (t = VRHTML.VRControlPanel.GetCameraRoomViewVisible()) &&
                void 0 !== t &&
                t,
              n = "boolean" == typeof e ? e : !r;
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRControlPanel.SetCameraRoomViewVisible(n);
          }
          onQuickLaunchButtonClick() {
            this.m_bQuickLaunchShouldReturnToBigPicture &&
            b.y.Instance.lastBigPictureEntryPoint == b.b.QuickLaunch &&
            !this.isOverlayActive(m.Y8)
              ? b.y.Instance.openBigPictureThroughLastEntryPoint()
              : this.switchToOverlayInternal(m.O5);
          }
          onQuickStoreButtonClick() {
            this.m_bQuickStoreShouldReturnToBigPicture &&
            b.y.Instance.lastBigPictureEntryPoint == b.b.QuickStore &&
            !this.isOverlayActive(m.Y8)
              ? b.y.Instance.openBigPictureThroughLastEntryPoint()
              : this.switchToOverlayInternal(m.wB);
          }
          onRecenterClick() {
            this.state.bLinkStreamActive && VRHTML.BIsLinkServer()
              ? (this.m_mailbox.SendMessage("svl", { type: "handle_recenter" }),
                VRHTML.VRDashboardManager.HideDashboard(
                  "onRecenterClick stream active"
                ))
              : this.m_mailbox.SendMessage(ie.BB, {
                  type: ie.KU,
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
                      e.icon_overlay_key
                    );
            } catch (e) {}
            return null;
          }
          renderPowerMenu() {
            const e = !!(null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.SceneAppRunning()),
              t = S.G3.settings.get("/settings/dashboard/allowAppQuitting"),
              r = S.G3.settings.get("/settings/dashboard/allowSystemShutdown");
            let n = !1;
            VRHTML &&
              VRHTML.VROverlay.GetPrimaryDashboardDevice() >= 0 &&
              (n = VRHTML.VRProperties.GetBoolProperty(
                VRHTML.VROverlay.GetPrimaryDashboardDevice(),
                a.Uk.DeviceCanPowerOff_Bool
              ));
            const i = y.H.Instance.SceneAppName,
              o = y.H.Instance.SceneAppIsHome;
            let s, l;
            return (
              (s = o
                ? (0, g.Xx)("#Exit_SteamVR_Home")
                : i
                ? (0, g.Xx)("#PowerMenuQuitSceneApp", i)
                : (0, g.Xx)("#PowerMenuQuitSceneApp_NoApp")),
              (l = o
                ? "/dashboard/images/icons/svr_svrhome_quit_alt.svg"
                : "/dashboard/images/icons/svr_app_quit.svg"),
              this.renderPopoverMenu(
                d.createElement(
                  d.Fragment,
                  null,
                  !!de.B.isVRGamepadUI &&
                    d.createElement(w.dy, {
                      label: "Old Library",
                      lineBelow: !0,
                      onClick: () => {
                        (this.m_bUserManuallySwitchToOldLibrary = !0),
                          this.switchToOverlayInternal(m.O5),
                          this.showPopoverMenu(ne.None);
                      },
                    }),
                  this.hasTenfootOverlay() &&
                    d.createElement(w.dy, {
                      label: (0, g.Xx)("#PowerMenuSteamOverlay"),
                      lineBelow: !0,
                      onClick: () => {
                        this.switchToOverlayInternal(m.Y8),
                          this.showPopoverMenu(ne.None);
                      },
                    }),
                  n &&
                    d.createElement(w.dy, {
                      label: (0, g.Xx)("#PowerMenuTurnOffController"),
                      imageUrl:
                        "/dashboard/images/icons/svr_controller_power.svg",
                      onClick: () => {
                        null === VRHTML ||
                          void 0 === VRHTML ||
                          VRHTML.TurnOffVRController(),
                          this.showPopoverMenu(ne.None);
                      },
                    }),
                  t &&
                    e &&
                    d.createElement(w.dy, {
                      label: s,
                      imageUrl: l,
                      onClick: () => {
                        null === VRHTML ||
                          void 0 === VRHTML ||
                          VRHTML.QuitSceneApp(),
                          this.showPopoverMenu(ne.None);
                      },
                    }),
                  d.createElement(w.dy, {
                    label: (0, g.Xx)("#PowerMenuExitVR"),
                    imageUrl: "/dashboard/images/icons/svr_svr_quit_alt.svg",
                    onClick: () =>
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.QuitOpenVR(),
                  }),
                  r &&
                    d.createElement(w.dy, {
                      label: (0, g.Xx)("#PowerMenuShutdown"),
                      imageUrl: "/dashboard/images/icons/svr_svr_quit_alt.svg",
                      onClick: () =>
                        null === VRHTML || void 0 === VRHTML
                          ? void 0
                          : VRHTML.ShutdownSystem(),
                    })
                )
              )
            );
          }
          startPopoverMenuTimeout(e) {
            this.m_timeoutPopoverMenuHide = window.setTimeout(() => {
              this.setState({ eShowPopoverMenu: ne.None });
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
            return d.createElement(
              "div",
              {
                className: "PowerMenuContainer",
                onMouseLeave: this.popoverMenuMouseLeave,
                onMouseEnter: this.clearPopoverMenuTimeout,
                ref: this.m_refPopoverMenu,
              },
              d.createElement(h.q, { className: "PowerMenuPanel" }, e)
            );
          }
          popoverMenuMouseLeave(e) {
            0 == e.buttons
              ? this.startPopoverMenuTimeout(100)
              : window.document.addEventListener(
                  "mouseup",
                  this.popoverMenuMouseUp
                );
          }
          popoverMenuMouseUp(e) {
            window.document.removeEventListener(
              "mouseup",
              this.popoverMenuMouseUp
            ),
              this.m_refPopoverMenu.current &&
                !(function (e, t, r) {
                  let n = r.getBoundingClientRect();
                  return (
                    e >= n.left && e <= n.right && t >= n.top && t <= n.bottom
                  );
                })(e.clientX, e.clientY, this.m_refPopoverMenu.current) &&
                this.startPopoverMenuTimeout(100);
          }
          renderStatusBarTitle() {
            var e, t, r, n;
            let i = this.getActiveOverlay();
            if (!i) return null;
            if (
              (i.summon_overlay_key == m.Y8 &&
                (b.y.Instance.lastBigPictureEntryPoint == b.b.QuickLaunch
                  ? (i = this.findDashboardTab(m.O5))
                  : b.y.Instance.lastBigPictureEntryPoint == b.b.QuickStore &&
                    (i = this.findDashboardTab(m.wB))),
              i.summon_overlay_key == m.gB)
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
                return d.createElement(w.Rk, {
                  name:
                    null === (r = this.state.mapWindows.get(e)) || void 0 === r
                      ? void 0
                      : r.title,
                  iconUrl: this.getDashboardIconUri(i),
                });
              }
              return d.createElement(w.Rk, {
                name:
                  "Desktop " +
                  (null === (n = this.m_refDesktopView.current) || void 0 === n
                    ? void 0
                    : n.currentDesktopIndex),
                iconUrl: this.getDashboardIconUri(i),
              });
            }
            if (i.summon_overlay_key == m.RM)
              return d.createElement(w.Rk, {
                name: (0, g.Xx)("#BindingUI_WindowTitle_ControllerBinding"),
                iconUrl: "/dashboard/images/icons/svr_settings.svg",
              });
            let o = i.tab_name;
            return d.createElement(w.Rk, {
              name: o,
              iconUrl: this.getDashboardIconUri(i),
            });
          }
          getCollisionBoundsFadeVisualizationElements() {
            var e;
            const t =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRChaperoneSetup.GetLiveCollisionBoundsInfo();
            if (!t) return [];
            let r = [];
            const n =
              null !== (e = S.G3.settings.get(m.yQ)) && void 0 !== e ? e : 0.7;
            for (let e of t) {
              let t = (0, a.M9)((0, a.eQ)(e[3], e[0])),
                i = (0, a.M9)((0, a.eQ)(e[1], e[0])),
                o = (0, a.dq)(t, i),
                s = (0, a.Pd)((0, a.tS)(t, i, o)),
                l = (0, a.LY)((0, a.eQ)(e[0], e[3]));
              if (l < 0.4) continue;
              let c = Math.max(1, Math.floor(l));
              for (let t = 0; t < c; t++) {
                let i = (t + 1) / (c + 1),
                  o = (0, a.Oq)();
                (o.rotation = s),
                  (o.translation = (0, a.q9)(i, e[0], e[3])),
                  (o.scale = { x: 0.005, y: 0.005, z: n });
                let l = d.createElement(
                  a.wx,
                  { transform: o },
                  d.createElement(
                    a.Dd,
                    { value: 0.25 },
                    d.createElement(
                      a.VW,
                      { color: { r: 0.2, g: 0.2, b: 0.2 } },
                      d.createElement(a.gQ, {
                        source: "laser_pointer",
                        wireframe: !1,
                        culling: a.xj.Backface,
                      })
                    )
                  )
                );
                r.push(l);
              }
              if (r.length > 20) break;
            }
            return r;
          }
          render() {
            const e = y.H.Instance.SceneApplicationState !== a.xY.None;
            if (this.state.bShown) {
              const t =
                  this.m_setSuppressingFade.size > 0 &&
                  this.getActiveOverlaySummonKey() == m.A4,
                r = S.G3.settings.get(
                  "/settings/dashboard/omitDashboardFadeWithSteamVRHome"
                );
              (y.H.Instance.SceneAppIsHome && r) || t || !e
                ? (0, a.OK)({
                    color_mult: 1,
                    reflection_mult: 1,
                    roomview_mult: [1, 1, 1],
                    allow_skydome: !0,
                  })
                : (0, a.OK)({
                    color_mult: 0.15,
                    reflection_mult: 1,
                    roomview_mult: [1, 1, 1],
                    allow_skydome: !0,
                  });
            } else
              (0, a.OK)({
                color_mult: 1,
                reflection_mult: 1,
                roomview_mult: [1, 1, 1],
                allow_skydome: !0,
              });
            const t = this.getActiveOverlaySummonKey(),
              r = this.state.bShown && this.state.setForcingBoundsVisible[t],
              n = r && r.size > 0;
            let i = [];
            return (
              n && (i = this.getCollisionBoundsFadeVisualizationElements()),
              d.createElement(
                "div",
                { className: "DashboardMain" },
                n && d.createElement(pe, null),
                n && d.createElement("span", null, i),
                this.state.bShown && this.renderDashboard(),
                this.renderInternalOverlays(),
                this.renderOverlayWidgets(),
                !1
              )
            );
          }
          hasDashboardOverlay(e) {
            return Object.values(this.m_mapExternalOverlays).some(
              (t) => t.summon_overlay_key == e
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
            return w.Eu.has(e)
              ? w.Eu.get(e)
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
              r = w.IO.Center;
            return d.createElement(w.B8, {
              key: e.mountable_id,
              label: e.tab_name,
              imageUrl: t,
              imageStyle: r,
              active: this.isOverlayActive(e.summon_overlay_key),
              onClick: () => this.switchToOverlayInternal(e.summon_overlay_key),
            });
          }
          isDesktopTrayActive() {
            var e;
            return (
              !this.state.bLaserMouseSuppressionActive &&
              (this.isOverlayActive(m.gB) ||
                (null === (e = this.getActiveOverlaySummonKey()) || void 0 === e
                  ? void 0
                  : e.startsWith("system.window"))) &&
              (this.state.eShowPopoverMenu == ne.None ||
                this.state.eShowPopoverMenu == ne.Windows)
            );
          }
          isVolumeTrayActive() {
            return (
              !this.state.bLaserMouseSuppressionActive &&
              this.state.eShowPopoverMenu == ne.Volume
            );
          }
          isAnyTrayActive() {
            return this.isDesktopTrayActive() || this.isVolumeTrayActive();
          }
          isSteamOverlayActive() {
            return (
              (this.isOverlayActive(m.Y8) || this.isOverlayActive(m.T2)) &&
              this.state.eShowPopoverMenu == ne.None
            );
          }
          isDesktopOverlayActive() {
            var e;
            return (
              this.isOverlayActive(m.gB) ||
              (null === (e = this.getActiveOverlaySummonKey()) || void 0 === e
                ? void 0
                : e.startsWith("system.window"))
            );
          }
          getPeerButtonInfo() {
            const e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VRProperties.GetStringProperty(
                    0,
                    a.Uk.PeerButtonInfo_String
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
              enable: null != e ? e : !de.B.isGroupMode,
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
                  (e = S.G3.settings.get(
                    "/settings/dashboard/allowCurvature"
                  )) ||
                void 0 === e ||
                e
                  ? m.ml
                  : null,
              r = S.G3.settings.get("/settings/dashboard/theaterPosition");
            let n = te.k_nControlBarWidthMeters / 2;
            r == re.Near ||
              (r == re.Middle ? (n *= 1.5) : r == re.Far && (n *= 1.85));
            const i = this.GetActiveOverlayAnchorIDs();
            return d.createElement(
              d.Fragment,
              null,
              !this.state.bLaserMouseSuppressionActive &&
                d.createElement(
                  a.wx,
                  {
                    parent_id: i.strCenterLeftAnchorID,
                    translation: { x: -0.08 },
                    rotation: { y: 20 },
                  },
                  d.createElement(a.s_, {
                    id: "VRGamepadUI-MainMenu-Panel",
                    debug_name: "VRGamepadUI-MainMenu-Panel",
                    interactive: !0,
                    curvature_origin_id: t,
                    overlay_key: m.v2,
                    origin: a.Ic.CenterRight,
                    meters_per_pixel: de.B.m_fVRGamepadUI_MetersPerPixel,
                    reflect: 0.01,
                  })
                ),
              !this.state.bLaserMouseSuppressionActive &&
                d.createElement(
                  a.wx,
                  {
                    parent_id: i.strCenterRightAnchorID,
                    translation: { x: 0.08 },
                    rotation: { y: -20 },
                  },
                  d.createElement(a.s_, {
                    id: "VRGamepadUI-QuickAccessMenu-Panel",
                    debug_name: "VRGamepadUI-QuickAccessMenu-Panel",
                    interactive: !0,
                    curvature_origin_id: t,
                    overlay_key: m.Tn,
                    origin: a.Ic.CenterLeft,
                    meters_per_pixel: de.B.m_fVRGamepadUI_MetersPerPixel,
                    reflect: 0.01,
                  })
                )
            );
          }
          BShouldShowDashboardAction(e) {
            var t, r;
            switch (e) {
              case ee.ToggleRoomView:
                const e =
                    null !== (t = S.G3.settings.get(m.Av)) && void 0 !== t && t,
                  n =
                    null !== (r = S.G3.settings.get(m.k_)) && void 0 !== r
                      ? r
                      : 0,
                  i = VRHTML.BIsLinkServer();
                return e && n > 0 && !(this.state.bLinkStreamActive && i);
              case ee.Recenter:
                return !0;
              case ee.IncognitoMode:
              default:
                return !1;
            }
          }
          renderLegacyControlBar(e, t, r) {
            var n, i, o, s, l;
            const c = de.B.isVRGamepadUI,
              u = de.B.isDarkMode,
              p = r ? (this.state.bLaserMouseSuppressionActive ? 0.1 : 1) : 0,
              v = u ? { r: 0.05, g: 0.05, b: 0.05 } : null,
              f = u ? 0.02 : 0.05,
              k = te.k_nControlBarWidthMeters,
              R =
                null ===
                  (n = S.G3.settings.get(
                    "/settings/dashboard/showPowerOptions"
                  )) ||
                void 0 === n ||
                n,
              M =
                null ===
                  (i = S.G3.settings.get("/settings/dashboard/showDesktop")) ||
                void 0 === i ||
                i,
              C = c,
              T = !c && !0,
              D =
                !c &&
                (null ===
                  (o = S.G3.settings.get(
                    "/settings/dashboard/showQuickStore"
                  )) ||
                  void 0 === o ||
                  o),
              I = !(
                null !==
                  (s = S.G3.settings.get("/settings/dashboard/arcadeMode")) &&
                void 0 !== s &&
                s
              ),
              V = this.getPeerButtonInfo(),
              E = (VRHTML.BIsLinkServer(), VRHTML.BIsLinkClient()),
              P = y.H.Instance.SceneApplicationState,
              x = y.H.Instance.SceneAppIsHome,
              O =
                null ===
                  (l = S.G3.settings.get(
                    "/settings/dashboard/allowCurvature"
                  )) ||
                void 0 === l ||
                l
                  ? m.ml
                  : null,
              L = y.H.Instance.SceneAppKey;
            let B = "images/appimage_default.png";
            L && (B = "/app/image?app_key=" + L);
            let H = E || this.state.bLinkStreamActive;
            return d.createElement(
              d.Fragment,
              null,
              d.createElement(
                a.Dd,
                { value: p },
                d.createElement(
                  a.VW,
                  { color: v },
                  r &&
                    d.createElement(
                      a.s_,
                      {
                        curvature_origin_id: O,
                        width: k,
                        interactive: !1,
                        debug_name: "ControlBarBackground",
                        sampler: a.Vv.SingleTap,
                        reflect: f,
                      },
                      d.createElement("div", {
                        className: "ControlBarBackground",
                      })
                    ),
                  d.createElement(
                    a.wx,
                    { translation: { z: 1e-5 } },
                    d.createElement(
                      a.s_,
                      {
                        curvature_origin_id: O,
                        width: k,
                        interactive: r,
                        id: m.WR,
                        debug_name: "Controls",
                      },
                      d.createElement(
                        h.q,
                        { className: "ControlBar MainControlBar" },
                        d.createElement(
                          "div",
                          { className: "Section Left" },
                          R &&
                            d.createElement(w.NT, {
                              imageUrl:
                                "/dashboard/images/icons/svr_menu_c.svg",
                              label: (0, g.Xx)("#Menu"),
                              style: w.zk.Small,
                              onClick: () => this.showPopoverMenu(ne.Power),
                              onMouseEnter: this.clearPopoverMenuTimeout,
                              onMouseLeave: () =>
                                this.startPopoverMenuTimeout(500),
                            }),
                          d.createElement(
                            w.dw,
                            { style: w.zk.Small },
                            C &&
                              d.createElement(w.B8, {
                                imageUrl:
                                  "/dashboard/images/icons/vr_steam.svg",
                                label: (0, g.Xx)("#Steam"),
                                active: this.isSteamOverlayActive(),
                                onClick: () => this.switchToSteamOverlay(),
                              }),
                            !1
                          ),
                          M &&
                            d.createElement(w.NT, {
                              style: w.zk.Small,
                              imageUrl:
                                "/dashboard/images/icons/svr_desktop_alt.svg",
                              label: (0, g.Xx)("#Desktops"),
                              active: this.isDesktopTrayActive(),
                              onClick: () => this.switchToOverlayInternal(m.gB),
                            }),
                          d.createElement(
                            w.dw,
                            { style: w.zk.Small },
                            d.createElement(
                              d.Fragment,
                              null,
                              e.map(this.renderExternalOverlayControlBarButton),
                              t.length > 0 &&
                                d.createElement(w.B8, {
                                  imageUrl:
                                    "/dashboard/images/icons/svr_more.svg",
                                  label: (0, g.Xx)(
                                    "#X_More_Overlays",
                                    t.length
                                  ),
                                  active:
                                    this.state.eShowPopoverMenu ==
                                    ne.ExternalOverlays,
                                  onClick: () =>
                                    this.showPopoverMenu(ne.ExternalOverlays),
                                  onMouseEnter: this.clearPopoverMenuTimeout,
                                  onMouseLeave: () =>
                                    this.startPopoverMenuTimeout(500),
                                })
                            )
                          )
                        ),
                        d.createElement(
                          "div",
                          { className: "Section Center" },
                          T &&
                            d.createElement(w.NT, {
                              label: (0, g.Xx)("#Library"),
                              imageUrl: "/dashboard/images/icons/svr_items.svg",
                              active:
                                this.isOverlayActive(m.O5) ||
                                (this.isOverlayActive(m.Y8) &&
                                  b.y.Instance.lastBigPictureEntryPoint ==
                                    b.b.QuickLaunch),
                              style: w.zk.Large,
                              onClick: this.onQuickLaunchButtonClick,
                            }),
                          P != a.xY.None &&
                            r &&
                            d.createElement(
                              "div",
                              { className: "NowPlayingSpacer" },
                              d.createElement(
                                _.d,
                                {
                                  allowableParentSelectors: [".DashboardMain"],
                                },
                                d.createElement(
                                  a.VW,
                                  { color: v },
                                  d.createElement(
                                    a.wx,
                                    { translation: { z: 0.02 } },
                                    d.createElement(
                                      a.s_,
                                      {
                                        debug_name: "NowPlayingButton",
                                        interactive: !0,
                                        target_dpi_panel_id: m.WR,
                                        curvature_origin_id: O,
                                      },
                                      d.createElement(
                                        "div",
                                        { className: "ControlBar" },
                                        d.createElement(w.NT, {
                                          label: x
                                            ? (0, g.Xx)("#SteamVR_Home")
                                            : (0, g.Xx)("#Now_Playing"),
                                          active: this.isOverlayActive(m.PF),
                                          style: w.zk.App,
                                          imageUrl: B,
                                          onClick: () =>
                                            this.switchToOverlayInternal(m.PF),
                                        })
                                      )
                                    )
                                  )
                                )
                              )
                            ),
                          D &&
                            d.createElement(w.NT, {
                              label: (0, g.Xx)("#Store"),
                              imageUrl: "/dashboard/images/icons/svr_store.svg",
                              additionalClassNames: "Store",
                              active:
                                this.isOverlayActive(m.wB) ||
                                (this.isOverlayActive(m.Y8) &&
                                  b.y.Instance.lastBigPictureEntryPoint ==
                                    b.b.QuickStore),
                              style: w.zk.Large,
                              onClick: this.onQuickStoreButtonClick,
                            })
                        ),
                        d.createElement(
                          "div",
                          { className: "Section Right" },
                          d.createElement(
                            w.dw,
                            { style: w.zk.Small },
                            !1,
                            !1,
                            !1,
                            this.BShouldShowDashboardAction(ee.Recenter) &&
                              d.createElement(w.B8, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_recenter.svg",
                                additionalClassNames: "CenterImageLarge",
                                label: (0, g.Xx)("#Button_Recenter"),
                                onClick: this.onRecenterClick,
                              }),
                            H &&
                              d.createElement(w.B8, {
                                imageUrl:
                                  "/dashboard/images/icons/svr_room_setup.svg",
                                additionalClassNames: "CenterImageLarge",
                                label: "Room Setup",
                                onClick: this.onImmersiveRoomSetupClick,
                              }),
                            this.BShouldShowDashboardAction(
                              ee.ToggleRoomView
                            ) &&
                              d.createElement(w.B8, {
                                imageUrl: "/dashboard/images/icons/svr_eye.svg",
                                label: (0, g.Xx)("#Toggle_Room_View"),
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
                            d.createElement(w.D6, {
                              active: this.state.eShowPopoverMenu == ne.Volume,
                              refVolumeTray: this.m_refVolumeTray,
                              onShowTray: () => this.showPopoverMenu(ne.Volume),
                              onHideTray: () => this.showPopoverMenu(ne.None),
                              onMouseEnter: this.clearPopoverMenuTimeout,
                              onMouseLeave: () =>
                                this.startPopoverMenuTimeout(500),
                            })
                          ),
                          I &&
                            d.createElement(w.NT, {
                              imageUrl:
                                "/dashboard/images/icons/svr_settings.svg",
                              active: this.isOverlayActive(m.A4),
                              enabled: this.hasDashboardOverlay(m.A4),
                              label: (0, g.Xx)("#Settings"),
                              style: w.zk.Small,
                              centerPanelAnchorID: "VolumeButton",
                              onClick: () => this.switchToOverlayInternal(m.A4),
                            }),
                          this.state.bLinkStreamActive &&
                            V &&
                            d.createElement(w.NT, {
                              imageUrl: V.sIcon,
                              active: !1,
                              enabled: !0,
                              label: (0, g.Xx)(V.sButtonName),
                              style: w.zk.Small,
                              centerPanelAnchorID: "VolumeButton",
                              onClick: () => this.handlePeerButton(),
                            })
                        )
                      ),
                      r && this.renderLegacyControlBarTrays(O)
                    )
                  )
                )
              )
            );
          }
          renderKeyboard(e, t) {
            let r = { y: -0.25 },
              n = 1.5;
            de.B.isVRGamepadUI
              ? ((r.y = -0.2), (r.z = 0.3), (n = 2))
              : this.isDesktopTrayActive() && (r.y -= 0.15);
            const i = this.state.bLaserMouseSuppressionActive ? 0.1 : 1;
            return d.createElement(
              d.Fragment,
              null,
              d.createElement(
                oe.Z,
                null,
                this.state.bKeyboardVisible &&
                  d.createElement(
                    a.wx,
                    { translation: r },
                    d.createElement(
                      a.Dd,
                      { value: i },
                      d.createElement(
                        a.wx,
                        { scale: { y: n, x: n } },
                        d.createElement(a.sl, {
                          mountedId: (0, a.iN)(m.GN, m.gC),
                        }),
                        d.createElement(a.sl, {
                          mountedId: (0, a.iN)(m.GN, m.jw),
                        })
                      )
                    ),
                    d.createElement(
                      a.wx,
                      { translation: { y: -0.62, z: 0.01 } },
                      d.createElement(ae.J, {
                        bVisible: e,
                        tint: t,
                        opacity: i,
                        onStartMove: this.onGrabStart,
                        onEndMove: this.onGrabEnd,
                      })
                    )
                  )
              )
            );
          }
          renderLegacyControlBarTrays(e, t) {
            const r = de.B.isDarkMode ? { r: 0.25, g: 0.25, b: 0.25 } : null;
            return d.createElement(
              d.Fragment,
              null,
              d.createElement(C, {
                ref: this.m_refDesktopTray,
                curvatureOriginId: e,
                scale: t,
                position: 0,
                visible: this.isDesktopTrayActive(),
                tintColor: r,
                onToggleWindowList: () => this.showPopoverMenu(ne.Windows),
                onClearPopoverMenuTimeout: () => this.clearPopoverMenuTimeout(),
                onStartPopoverMenuTimeout: (e) =>
                  this.startPopoverMenuTimeout(e),
                mapWindows: this.state.mapWindows,
                sort_depth_bias: 0.2,
                bWindowViewEnabled: this.state.bWindowViewEnabled,
              }),
              d.createElement(w.z, {
                ref: this.m_refVolumeTray,
                curvatureOriginId: e,
                scale: t,
                position: 0.337,
                visible: this.isVolumeTrayActive(),
                tintColor: r,
                onFinalChangeMouseOutside: () => {
                  this.startPopoverMenuTimeout(800);
                },
                onMouseMove: this.clearPopoverMenuTimeout,
                onMouseLeave: this.popoverMenuMouseLeave,
                sort_depth_bias: 0.4,
              })
            );
          }
          renderVRGamepadUIBar(e) {
            return (
              de.B.m_bShowLegacyBar,
              d.createElement(
                d.Fragment,
                null,
                d.createElement(
                  a.s_,
                  {
                    id: "VRGamepadUI-DashboardBar-Panel",
                    debug_name: "VRGamepadUI-DashboardBar-Panel",
                    interactive: !0,
                    make_overlays_interactive_if_visible: !0,
                    curvature_origin_id: e,
                    overlay_key: m.BZ,
                    origin: a.Ic.TopCenter,
                    meters_per_pixel: de.B.m_fVRGamepadUI_MetersPerPixel,
                    reflect: 0.08,
                  },
                  d.createElement(a.at, {
                    id: "VRGamepadUI-DashboardBar-Panel-TopCenter",
                    location: a.Ic.TopCenter,
                  }),
                  d.createElement(
                    a.at,
                    {
                      id: "VRGamepadUI-DashboardBar-Panel-BottomCenter",
                      location: a.Ic.BottomCenter,
                    },
                    d.createElement(a.wx, {
                      id: m.dG,
                      translation: { y: -0.1 },
                    })
                  ),
                  d.createElement(a.wx, { scale: 0.5 })
                )
              )
            );
          }
          renderOverlayWidgets() {
            let e = Array.from(de.B.m_mapOverlayState, ([e, t]) => ({
              sOverlayKey: e,
              overlayState: t,
            })).filter((e) => e.overlayState.dockLocation != R.RA.Dashboard);
            return d.createElement(
              d.Fragment,
              null,
              e.map((e) =>
                d.createElement(R.Sm, {
                  bDashboardShown: this.state.bShown,
                  bHasSceneApp:
                    y.H.Instance.SceneApplicationState !== a.xY.None,
                  bCaptureVideo: !1,
                  dockLocation: e.overlayState.dockLocation,
                  onDockOverlay: this.onDockOverlay,
                  sOverlayKey: e.sOverlayKey,
                  xfInitial: e.overlayState.xfInitial,
                  key: e.sOverlayKey,
                  ref: e.overlayState.refOverlayWidget,
                })
              )
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
              this.isOverlayActive(m.gB) &&
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
            var e, t, r, n;
            const i =
                null !==
                  (t =
                    null === (e = this.m_refDesktopView.current) || void 0 === e
                      ? void 0
                      : e.currentDesktopIndex) && void 0 !== t
                  ? t
                  : 1,
              o =
                null !==
                  (n =
                    null === (r = this.m_refDesktopView.current) || void 0 === r
                      ? void 0
                      : r.desktopCount) && void 0 !== n
                  ? n
                  : 1;
            return d.createElement(
              d.Fragment,
              null,
              d.createElement(
                a.Y9,
                {
                  tabName: (0, g.Xx)("#Library"),
                  iconUri: "/dashboard/images/icons/svr_items.svg",
                  summonOverlayKey: m.O5,
                },
                d.createElement($, {
                  visible: this.state.bShown && this.isOverlayActive(m.O5),
                  onGameLaunched: this.onGameLaunched,
                })
              ),
              d.createElement(
                a.Y9,
                {
                  tabName: (0, g.Xx)("#Store"),
                  iconUri: "/dashboard/images/icons/svr_store.svg",
                  summonOverlayKey: m.wB,
                },
                d.createElement(X, {
                  visible: this.state.bShown && this.isOverlayActive(m.wB),
                })
              ),
              d.createElement(
                a.Y9,
                { tabName: (0, g.Xx)("#Now_Playing"), summonOverlayKey: m.PF },
                d.createElement(L, {
                  visible: this.state.bShown && this.isOverlayActive(m.PF),
                  onExitGame: () => this.switchToHomeOverlay(),
                })
              ),
              d.createElement(
                a.Y9,
                {
                  summonOverlayKey: m.gB,
                  tabName:
                    o > 1 ? (0, g.Xx)("#Desktop_X", i) : (0, g.Xx)("#Desktop"),
                  iconUri: "/dashboard/images/icons/svr_desktop_alt.svg",
                },
                d.createElement(T, {
                  visible: this.isDesktopViewVisible(),
                  fActiveOverlayScale: this.activeOverlayScale,
                  mapWindows: this.state.mapWindows,
                  bWindowViewEnabled: this.state.bWindowViewEnabled,
                  ref: this.m_refDesktopView,
                })
              ),
              d.createElement(c._, {
                visible: this.state.bShown && this.isOverlayActive(m.A4),
              }),
              !1
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
              (t.startsWith("system.window.")
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
            var e, t, r, n;
            const i = de.B.isDarkMode,
              o = i ? { r: 0.1, g: 0.1, b: 0.1 } : null,
              s = i ? 0 : 0.1;
            let l = !1,
              c = !1,
              h = !1,
              p = this.getActiveOverlayKey();
            if (p) {
              let e = VRHTML.VROverlay.FindOverlay(p);
              (l =
                !!e &&
                VRHTML.VROverlay.GetFlag(e, a.Z9.EnableControlBarKeyboard)),
                (c =
                  !!e &&
                  VRHTML.VROverlay.GetFlag(e, a.Z9.EnableControlBarClose)),
                (h =
                  !!e &&
                  VRHTML.VROverlay.GetFlag(e, a.Z9.EnableSteamUIButtons));
            }
            const v =
                null !==
                  (e = S.G3.settings.get(
                    "/settings/dashboard/scaleSliderMin"
                  )) && void 0 !== e
                  ? e
                  : 0.75,
              _ =
                null !==
                  (t = S.G3.settings.get(
                    "/settings/dashboard/scaleSliderMax"
                  )) && void 0 !== t
                  ? t
                  : 1.5,
              y =
                null ===
                  (r = S.G3.settings.get(
                    "/settings/dashboard/allowCurvature"
                  )) ||
                void 0 === r ||
                r
                  ? m.ml
                  : null,
              b = { x: 0, y: -0.15, z: 0.1 },
              f = this.GetActiveOverlayAnchorIDs();
            return d.createElement(
              d.Fragment,
              null,
              d.createElement(
                a.wx,
                {
                  parent_id: f.strBottomCenterAnchorID,
                  translation: { y: 0.003 },
                },
                d.createElement(
                  a.VW,
                  { color: o },
                  d.createElement(
                    a.s_,
                    {
                      curvature_origin_id: y,
                      origin: a.Ic.TopCenter,
                      interactive: !1,
                      target_width_anchor_id: f.strBottomCenterAnchorID,
                      height: 0.15,
                      min_width: 1.66,
                      debug_name: "ActiveOverlayControlBarBackground",
                      sampler: a.Vv.SingleTap,
                      reflect: s,
                    },
                    d.createElement("div", {
                      className: "OverlayControlBarBackground",
                    })
                  )
                )
              ),
              d.createElement(
                a.wx,
                {
                  parent_id: f.strBottomCenterAnchorID,
                  translation: { y: 0.003, z: 0.001 },
                },
                d.createElement(
                  a.VW,
                  { color: o },
                  d.createElement(
                    a.s_,
                    {
                      curvature_origin_id: y,
                      origin: a.Ic.TopCenter,
                      interactive: !0,
                      target_dpi_panel_id: m.WR,
                      debug_name: "ActiveOverlayControlBar",
                    },
                    d.createElement(
                      "div",
                      { className: "OverlayControlBar" },
                      d.createElement(
                        "div",
                        { className: "Section" },
                        d.createElement(
                          "div",
                          { className: "Label" },
                          (0, g.Xx)("#Size")
                        ),
                        d.createElement(u.iR, {
                          additionalClassName: "OverlayControlBarSlider",
                          min: v,
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
                          d.createElement(w.zN, {
                            icon: d.createElement(se.VC, {
                              button: le.F.HomeMenu,
                              type: se.yV.Knockout,
                              size: se.iM.Medium,
                              additionalClassName: "DashboardActionGlyph",
                            }),
                            title: (0, g.Xx)("#ShowSteamUI_Steam"),
                            tooltipTranslation: b,
                            onClick: () => {
                              this.onSteamButtonPressed(a.ZP.HomeMenu);
                            },
                            additionalClassNames: "ButtonControlFixedHeight",
                          }),
                        h &&
                          d.createElement(w.zN, {
                            icon: d.createElement(se.VC, {
                              button: le.F.QuickMenu,
                              type: se.yV.Knockout,
                              size: se.iM.Medium,
                              additionalClassName: "DashboardActionGlyph",
                            }),
                            title: (0, g.Xx)("#ShowSteamUI_QAM"),
                            tooltipTranslation: b,
                            onClick: () => {
                              this.onSteamButtonPressed(a.ZP.QuickMenu);
                            },
                            additionalClassNames: "ButtonControlFixedHeight",
                          }),
                        !1,
                        l &&
                          d.createElement(w.CS, {
                            tooltipTranslation: b,
                            activeOverlayKey: this.getActiveOverlayKey(),
                          }),
                        d.createElement(w.zN, {
                          iconUrl: "/dashboard/images/icons/mirror_left.png",
                          title: (0, g.Xx)("#DockOnLeftController"),
                          tooltipTranslation: b,
                          onClick: () => {
                            var e;
                            const t = this.getActiveOverlayKey();
                            (null === (e = de.B.m_mapOverlayState.get(t)) ||
                            void 0 === e
                              ? void 0
                              : e.dockLocation) == R.RA.LeftHand
                              ? this.onDockOverlay(t, R.RA.Dashboard)
                              : this.onDockOverlay(t, R.RA.LeftHand);
                          },
                          enabled:
                            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                              a.Kg.TrackedControllerRole_LeftHand
                            ) != a.Kf,
                          active:
                            this.getActiveOverlayDockLocation() ==
                            R.RA.LeftHand,
                        }),
                        d.createElement(w.zN, {
                          iconUrl: "/dashboard/images/icons/mirror_right.png",
                          title: (0, g.Xx)("#DockOnRightController"),
                          tooltipTranslation: b,
                          onClick: () => {
                            var e;
                            const t = this.getActiveOverlayKey();
                            (null === (e = de.B.m_mapOverlayState.get(t)) ||
                            void 0 === e
                              ? void 0
                              : e.dockLocation) == R.RA.RightHand
                              ? this.onDockOverlay(t, R.RA.Dashboard)
                              : this.onDockOverlay(t, R.RA.RightHand);
                          },
                          enabled:
                            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                              a.Kg.TrackedControllerRole_RightHand
                            ) != a.Kf,
                          active:
                            this.getActiveOverlayDockLocation() ==
                            R.RA.RightHand,
                        }),
                        d.createElement(w.zN, {
                          iconUrl: "/dashboard/images/icons/icon_move.png",
                          title: (0, g.Xx)("#FloatInWorld"),
                          tooltipTranslation: b,
                          onClick: () => {
                            var e;
                            const t = this.getActiveOverlayKey();
                            (0, R.fT)(
                              null === (e = de.B.m_mapOverlayState.get(t)) ||
                                void 0 === e
                                ? void 0
                                : e.dockLocation
                            )
                              ? this.onDockOverlay(t, R.RA.Dashboard)
                              : this.onDockOverlay(t, R.RA.World);
                          },
                          active:
                            this.getActiveOverlayDockLocation() == R.RA.World,
                        }),
                        !1,
                        c &&
                          d.createElement(w.zN, {
                            iconUrl:
                              "/dashboard/images/icons/icon_close_black.png",
                            title: (0, g.Xx)("#CloseOverlay"),
                            tooltipTranslation: b,
                            onClick: this.onActiveOverlayClosed,
                          }),
                        this.isDesktopOverlayActive() &&
                          (null === (n = this.m_refDesktopView.current) ||
                          void 0 === n
                            ? void 0
                            : n.renderControlBarButtons(b))
                      )
                    )
                  )
                )
              )
            );
          }
          renderLegacyHeader(e) {
            const t = de.B.isDarkMode,
              r = t ? { r: 0.02, g: 0.02, b: 0.02 } : null,
              n = t ? 0 : 0.1,
              i = !t,
              o = !t;
            let s = null;
            return (
              this.isDesktopOverlayActive() && (s = 2048),
              d.createElement(
                d.Fragment,
                null,
                d.createElement(
                  a.wx,
                  { translation: { y: 0.008 } },
                  d.createElement(
                    a.VW,
                    { color: r },
                    d.createElement(
                      a.s_,
                      {
                        curvature_origin_id: e,
                        origin: a.Ic.BottomCenter,
                        interactive: !1,
                        target_dpi_panel_id: m.WR,
                        debug_name: "StatusBar",
                        reflect: n,
                      },
                      d.createElement(
                        "div",
                        { className: "StatusBar", style: { width: s } },
                        d.createElement(
                          "div",
                          { className: "Section Left" },
                          i && this.renderStatusBarTitle(),
                          d.createElement(w.j6, {
                            role: a.Kg.TrackedControllerRole_LeftHand,
                            style: k.A.HorizontalPips,
                          })
                        ),
                        d.createElement(
                          "div",
                          { className: "Section Center" },
                          d.createElement(w.j6, {
                            deviceIndex: a.wU,
                            style: k.A.VerticalBattery,
                          }),
                          d.createElement(w.M3, null)
                        ),
                        d.createElement(
                          "div",
                          { className: "Section Right" },
                          d.createElement(w.j6, {
                            role: a.Kg.TrackedControllerRole_RightHand,
                            style: k.A.HorizontalPips,
                          }),
                          o &&
                            d.createElement(
                              "div",
                              { className: "SteamLogo" },
                              d.createElement("img", {
                                src: "/dashboard/images/icons/vr_steam.svg",
                              })
                            )
                        )
                      )
                    )
                  )
                )
              )
            );
          }
          renderVRGamepadUIHeader(e) {
            return d.createElement(
              d.Fragment,
              null,
              d.createElement(
                a.wx,
                { translation: { y: 0.01 } },
                d.createElement(
                  a.Dd,
                  { value: this.state.bLaserMouseSuppressionActive ? 0.1 : 1 },
                  d.createElement(
                    a.s_,
                    {
                      id: "VRGamepadUI-Header-Panel",
                      debug_name: "VRGamepadUI-Header-Panel",
                      interactive: !0,
                      curvature_origin_id: e,
                      overlay_key: m.rl,
                      origin: a.Ic.BottomCenter,
                      width: 2.667,
                      reflect: 0.01,
                    },
                    d.createElement(a.at, {
                      id: "VRGamepadUI-Header-Panel-TopCenter",
                      location: a.Ic.TopCenter,
                    })
                  )
                )
              )
            );
          }
          renderDashboard() {
            var e, t, r, n;
            const i = this.computeFilteredOverlayTabs(!1),
              o = de.B.isVRGamepadUI,
              s = o,
              l = !o || de.B.m_bShowLegacyBar;
            let c = [],
              u = [],
              p =
                null !== (e = S.G3.settings.get(m.FM)) && void 0 !== e ? e : 2;
            if (i.length > p) {
              const e = S.G3.settings.get(m.nf);
              (c = [
                null !== (t = i.find((t) => t.summon_overlay_key == e)) &&
                void 0 !== t
                  ? t
                  : i[0],
              ]),
                (u = i.filter((e) => !c.includes(e)));
            } else c = i;
            let v = [];
            this.state.mapWindows.forEach((e) => {
              "" == e.overlay_key && v.push(e);
            });
            const _ = this.getActiveOverlayDockLocation(),
              y = (0, R.fT)(_),
              b = (0, R.sg)(_);
            let f = !1,
              k = this.getActiveOverlayKey();
            if (k) {
              let e = VRHTML.VROverlay.FindOverlay(k);
              f = !!e && VRHTML.VROverlay.GetFlag(e, a.Z9.EnableControlBar);
            }
            this.state.bLaserMouseSuppressionActive && (f = !1);
            let M = 2,
              C = 2.5;
            const T = S.G3.settings.get("/settings/dashboard/theaterPosition");
            T == re.Near
              ? ((M *= 0.5), (C *= 0.5))
              : T == re.Middle
              ? ((M *= 1), (C *= 1))
              : T == re.Far && ((M *= 4), (C *= 2.5)),
              S.G3.settings.get("/settings/dashboard/theaterVerticalOffsetCm");
            const D =
                null ===
                  (r = S.G3.settings.get(
                    "/settings/dashboard/allowCurvature"
                  )) ||
                void 0 === r ||
                r,
              I = D ? m.ml : null,
              V = { y: f ? -0.9 : -1.03375, z: 0.05 },
              E = s ? { y: -1.2, z: 0.35 } : { y: -1.2, z: 0.15 },
              P = -40,
              x = this.state.bLaserMouseSuppressionActive ? 0.1 : 1,
              O = de.B.isDarkMode ? { r: 0.05, g: 0.05, b: 0.05 } : null;
            let L = D ? 1 : 0;
            const B =
                null !==
                  (n = S.G3.settings.get(
                    "/settings/dashboard/allowFreeTransform"
                  )) &&
                void 0 !== n &&
                n,
              H = this.GetActiveOverlayAnchorIDs().strTopCenterAnchorID;
            return d.createElement(
              d.Fragment,
              null,
              d.createElement(
                a.eK,
                {
                  bContinuousRelatch: this.state.bPlacementModeActive,
                  bFreeDashboardTransform: B && this.state.bPlacementModeActive,
                },
                d.createElement(
                  a.wx,
                  { translation: {}, parent_path: undefined },
                  d.createElement(
                    oe.Z,
                    null,
                    !1,
                    d.createElement(a.wx, { id: I, translation: { z: 1.8 } }),
                    d.createElement(
                      a.wx,
                      {
                        translation: {
                          x: 0,
                          y: te.getDashboardVerticalPosition(),
                          z: 1 * -te.getDashboardDistance(),
                        },
                        rotation: { x: 0 },
                        scale: te.getDashboardScale(),
                      },
                      d.createElement(
                        a.wx,
                        { parent_id: H },
                        o
                          ? this.renderVRGamepadUIHeader(I)
                          : this.renderLegacyHeader(I)
                      ),
                      d.createElement(
                        a.wx,
                        {
                          id: "active_overlay_transform",
                          translation: V,
                          ref: this.m_refOverlayTransform,
                        },
                        !y && b && this.renderActiveOverlay(),
                        !y &&
                          !b &&
                          d.createElement(
                            w.lL,
                            {
                              additionalClassNames: f ? "WithControlBar" : "",
                              visible: !0,
                            },
                            d.createElement(
                              "div",
                              { className: "NoDesktopFound" },
                              d.createElement(
                                "h2",
                                null,
                                this.getActiveOverlayDockLocation() ==
                                  R.RA.LeftHand &&
                                  (0, g.Xx)("#DockedOnLeftController"),
                                this.getActiveOverlayDockLocation() ==
                                  R.RA.RightHand &&
                                  (0, g.Xx)("#DockedOnRightController")
                              ),
                              d.createElement(
                                h.z,
                                {
                                  className: "ButtonControl",
                                  onClick: () => {
                                    this.onDockOverlay(k, R.RA.Dashboard);
                                  },
                                },
                                (0, g.Xx)("#DockHere")
                              )
                            )
                          )
                      ),
                      f && b && this.renderOverlayControlBar(),
                      !1,
                      d.createElement(
                        a.wx,
                        { parent_id: s ? m.dG : m.f$ },
                        d.createElement(ae.J, {
                          bVisible: !0,
                          curvature_origin_id: s ? null : I,
                          tint: O,
                          opacity: x,
                          onStartMove: this.onGrabStart,
                          onEndMove: this.onGrabEnd,
                        })
                      ),
                      d.createElement(
                        a.wx,
                        { translation: E, id: m.Qg },
                        d.createElement(a.wx, {
                          id: m.f$,
                          translation: { y: 0.08, z: -0.12 },
                        }),
                        d.createElement(
                          a.wx,
                          {
                            rotation: { x: P },
                            curvature_pitch: P,
                            translation: s ? { y: -0.65, z: 0.2 } : {},
                          },
                          this.renderLegacyControlBar(c, u, l),
                          !1
                        ),
                        s &&
                          d.createElement(
                            a.wx,
                            { rotation: { x: P }, curvature_pitch: P },
                            this.renderVRGamepadUIBar(I)
                          ),
                        d.createElement(
                          a.wx,
                          { rotation: { x: P }, curvature_pitch: P },
                          this.renderKeyboard(s, O)
                        ),
                        this.state.eShowPopoverMenu == ne.Power &&
                          d.createElement(
                            a.wx,
                            {
                              translation: { x: -0.4, y: 0.15, z: 0.05 },
                              rotation: { y: 19 * L },
                            },
                            d.createElement(
                              a.s_,
                              {
                                curvature_origin_id: I,
                                height: void 0,
                                width: 0.925,
                                interactive: !0,
                                origin: a.Ic.BottomRight,
                                debug_name: "Power Menu",
                                sort_depth_bias: -0.1,
                              },
                              this.renderPowerMenu()
                            )
                          ),
                        this.state.eShowPopoverMenu == ne.ExternalOverlays &&
                          d.createElement(
                            a.wx,
                            {
                              translation: { x: 0.2, y: 0.15, z: 0.05 },
                              rotation: { y: 6 * L },
                            },
                            d.createElement(
                              a.s_,
                              {
                                curvature_origin_id: I,
                                height: void 0,
                                width: 0.925,
                                interactive: !0,
                                origin: a.Ic.BottomRight,
                                debug_name: "OverlaysList",
                                sort_depth_bias: -0.1,
                              },
                              this.renderPopoverMenu(
                                d.createElement(
                                  d.Fragment,
                                  null,
                                  " ",
                                  u.map((e) =>
                                    d.createElement(w.dy, {
                                      key: e.mountable_id,
                                      imageUrl: this.getDashboardIconUri(e),
                                      label: e.tab_name,
                                      onClick: () => {
                                        this.switchToOverlayInternal(
                                          e.summon_overlay_key
                                        ),
                                          this.showPopoverMenu(ne.None);
                                      },
                                    })
                                  ),
                                  " "
                                )
                              )
                            )
                          ),
                        this.state.eShowPopoverMenu == ne.Windows &&
                          d.createElement(
                            a.wx,
                            {
                              translation: { x: 1.25, y: -0.1, z: 0.35 },
                              rotation: { y: -16 * L },
                            },
                            d.createElement(
                              a.s_,
                              {
                                curvature_origin_id: I,
                                height: void 0,
                                width: 0.925,
                                interactive: !0,
                                origin: a.Ic.BottomRight,
                                debug_name: "WindowList",
                                sort_depth_bias: -0.1,
                              },
                              this.renderPopoverMenu(
                                d.createElement(
                                  d.Fragment,
                                  null,
                                  " ",
                                  v.map((e) =>
                                    d.createElement(w.dy, {
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
                                          t
                                        ),
                                          this.showPopoverMenu(ne.None);
                                      },
                                    })
                                  ),
                                  " "
                                )
                              )
                            )
                          )
                      )
                    )
                  )
                )
              )
            );
          }
        });
        (me.k_sDashboardMailboxName = "systemui_dashboard"),
          (me.k_sSetDashboardFadeSupressionMessage =
            "set_dashboard_fade_suppression"),
          (me.k_sDashboardOverlayCreatedMessage = "dashboard_overlay_created"),
          (me.k_sDashboardOverlayDestroyedMessage =
            "dashboard_overlay_destroyed"),
          (me.k_sUpdateDashboardTabsMessage = "update_dashboard_tabs"),
          (me.k_sRequestDashboardTabsMessage = "request_dashboard_tabs"),
          (me.k_sWindowViewCreatedMessage = "window_view_created"),
          (me.k_sWindowViewDestroyedMessage = "window_view_destroyed"),
          (me.k_sUpdateWindowListMessage = "update_window_list"),
          (me.k_sUpdateDebugInfoMessage = "update_debug_info"),
          (me.k_sSetDashboardForceBoundsVisible =
            "set_dashboard_force_bounds_visible"),
          (me.k_sLaserMouseSuppressionUpdate =
            "laser_mouse_suppression_update"),
          (me.k_nControlBarWidthMeters = 2.667),
          (me.k_nTimeLimitToReturnToActiveOverlayThatVanishedSeconds = 3),
          (me.s_dashboardUserDistance = void 0),
          (me.s_dashboardUserScale = void 0),
          (0, o.gn)(
            [s.ak],
            me.prototype,
            "onSetDashboardFadeSuppression",
            null
          ),
          (0, o.gn)([s.ak], me.prototype, "onRoomViewChanged", null),
          (0, o.gn)([s.ak], me.prototype, "onLinkStreamActiveEvents", null),
          (0, o.gn)([s.ak], me.prototype, "onKeyboardVisibilityChanged", null),
          (0, o.gn)([s.ak], me.prototype, "onGrabStart", null),
          (0, o.gn)([s.ak], me.prototype, "onGrabEnd", null),
          (0, o.gn)(
            [s.ak],
            me.prototype,
            "onSetDashboardForceBoundsVisible",
            null
          ),
          (0, o.gn)(
            [s.ak],
            me.prototype,
            "onLaserMouseSuppressionUpdate",
            null
          ),
          (0, o.gn)([s.ak], me.prototype, "onDashboardOverlayCreated", null),
          (0, o.gn)([s.ak], me.prototype, "onDashboardOverlayDestroyed", null),
          (0, o.gn)([s.ak], me.prototype, "onUpdateDashboardTabs", null),
          (0, o.gn)([s.ak], me.prototype, "onWindowViewCreated", null),
          (0, o.gn)([s.ak], me.prototype, "onWindowViewDestroyed", null),
          (0, o.gn)([s.ak], me.prototype, "onUpdateWindowList", null),
          (0, o.gn)([s.ak], me.prototype, "onUpdateDebugInfo", null),
          (0, o.gn)([s.ak], me.prototype, "onDockOverlay", null),
          (0, o.gn)([s.ak], me.prototype, "onShowDashboardRequested", null),
          (0, o.gn)([s.ak], me.prototype, "onHideTheaterMode", null),
          (0, o.gn)([s.ak], me.prototype, "onHideDashboardRequested", null),
          (0, o.gn)([s.ak], me.prototype, "show", null),
          (0, o.gn)([s.ak], me.prototype, "hide", null),
          (0, o.gn)([s.ak], me.prototype, "setPlacementModeActive", null),
          (0, o.gn)([s.ak], me.prototype, "onToggleRoomView", null),
          (0, o.gn)([s.ak], me.prototype, "onQuickLaunchButtonClick", null),
          (0, o.gn)([s.ak], me.prototype, "onQuickStoreButtonClick", null),
          (0, o.gn)([s.ak], me.prototype, "onRecenterClick", null),
          (0, o.gn)([s.ak], me.prototype, "onImmersiveRoomSetupClick", null),
          (0, o.gn)([s.ak], me.prototype, "onToggleGamepadFocus", null),
          (0, o.gn)([s.ak], me.prototype, "renderPowerMenu", null),
          (0, o.gn)([s.ak], me.prototype, "startPopoverMenuTimeout", null),
          (0, o.gn)([s.ak], me.prototype, "clearPopoverMenuTimeout", null),
          (0, o.gn)([s.ak], me.prototype, "showPopoverMenu", null),
          (0, o.gn)([s.ak], me.prototype, "popoverMenuMouseLeave", null),
          (0, o.gn)([s.ak], me.prototype, "popoverMenuMouseUp", null),
          (0, o.gn)([s.ak], me.prototype, "hasDashboardOverlay", null),
          (0, o.gn)(
            [s.ak],
            me.prototype,
            "renderExternalOverlayControlBarButton",
            null
          ),
          (0, o.gn)([s.ak], me.prototype, "isDesktopTrayActive", null),
          (0, o.gn)([s.ak], me.prototype, "isVolumeTrayActive", null),
          (0, o.gn)([s.ak], me.prototype, "isSteamOverlayActive", null),
          (0, o.gn)([s.ak], me.prototype, "isDesktopOverlayActive", null),
          (0, o.gn)([s.ak], me.prototype, "handlePeerButton", null),
          (0, o.gn)([s.ak], me.prototype, "ToggleIncognitoMode", null),
          (0, o.gn)([s.ak], me.prototype, "ToggleVideoStream", null),
          (0, o.gn)([s.ak], me.prototype, "getRenderModelForShape", null),
          (0, o.gn)([s.ak], me.prototype, "isDesktopViewVisible", null),
          (0, o.gn)([s.ak], me.prototype, "onGameLaunched", null),
          (0, o.gn)([s.ak], me.prototype, "onAddPortal", null),
          (0, o.gn)([s.ak], me.prototype, "onRemovePortal", null),
          (0, o.gn)([s.ak], me.prototype, "onActiveOverlayScaleChange", null),
          (0, o.gn)([s.ak], me.prototype, "onActiveOverlayClosed", null),
          (0, o.gn)([s.ak], me.prototype, "onSteamButtonPressed", null),
          (0, o.gn)([l.LO], me, "s_dashboardUserDistance", void 0),
          (0, o.gn)([l.LO], me, "s_dashboardUserScale", void 0),
          (me = te = (0, o.gn)([f.Pi], me));
        const ge = [
          (e) => {
            var t;
            return (
              (null === (t = e.icon()) || void 0 === t ? void 0 : t.enum()) ==
              ce.mw.k_EVRDashboardTabIcon_Steam
            );
          },
          (e) => {
            var t;
            return (
              (null === (t = e.icon()) || void 0 === t ? void 0 : t.enum()) ==
              ce.mw.k_EVRDashboardTabIcon_RunningGame
            );
          },
          (e) => null == e.icon(),
          (e) => {
            var t;
            return (
              (null === (t = e.icon()) || void 0 === t ? void 0 : t.enum()) ==
              ce.mw.k_EVRDashboardTabIcon_DesktopDisplay
            );
          },
        ];
        function ve(e, t) {
          let r = -1,
            n = -1;
          for (let i = 0; i < ge.length && r < 0 && n < 0; i++)
            ge[i](e) && (r = i), ge[i](t) && (n = i);
          return (
            r < 0 && (r = ge.length),
            n < 0 && (n = ge.length),
            r == n ? e.tab_id() - t.tab_id() : r - n
          );
        }
      },
      4790: (e, t, r) => {
        "use strict";
        r.d(t, { RA: () => i, Sm: () => f, fT: () => b, sg: () => y });
        var n,
          i,
          o,
          a = r(655),
          s = r(3884),
          l = r(7056),
          d = r(7062),
          c = r(7294),
          h = r(5177),
          u = r(424),
          p = r(4979),
          m = r(7176),
          g = r(1628),
          v = r(9626),
          _ = r(421);
        function y(e) {
          return e == i.Dashboard || e == i.Theater;
        }
        function b(e) {
          return e == i.World;
        }
        function S(e) {
          switch (e) {
            case i.LeftHand:
              return "/user/hand/left";
            case i.RightHand:
              return "/user/hand/right";
            default:
              return "";
          }
        }
        r(6063),
          r(792),
          (function (e) {
            (e[(e.Dashboard = 0)] = "Dashboard"),
              (e[(e.LeftHand = 1)] = "LeftHand"),
              (e[(e.RightHand = 2)] = "RightHand"),
              (e[(e.World = 3)] = "World"),
              (e[(e.Theater = 4)] = "Theater");
          })(i || (i = {})),
          (function (e) {
            (e[(e.Flat = 0)] = "Flat"), (e[(e.Curved = 1)] = "Curved");
          })(o || (o = {}));
        let f = (n = class extends c.Component {
          constructor(e) {
            super(e),
              (this.state = {
                fOverlayScale: this.getDefaultScaleForLocation(),
                xfTransform: (0, s.Oq)(),
                sParent: S(this.props.dockLocation),
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
                  sParent: S(this.props.dockLocation),
                  xfTransform: (0, s.Oq)(),
                  bIsOutsideMaxDist: !1,
                  destination: this.props.dockLocation,
                },
                this.setInitialTransformForLocation
              );
          }
          getCurrentOverlaySize() {
            var e;
            let t = VRHTML.VROverlay.FindOverlay(this.props.sOverlayKey);
            if (!t) return null;
            let r = { x: 0, y: 0 };
            try {
              r = VRHTML.VROverlay.GetOverlayMouseScale(t);
            } catch (e) {
              return console.log(JSON.stringify(e)), null;
            }
            let n =
                null !== (e = VRHTML.VROverlay.GetWidthInMeters(t)) &&
                void 0 !== e
                  ? e
                  : 1,
              i = (n * r.y) / r.x;
            if (this.m_fLastOverlayHeight && this.m_fLastOverlayHeight != i) {
              const e =
                (this.state.fOverlayScale * this.m_fLastOverlayHeight) / i;
              this.setState({ fOverlayScale: e });
            }
            return (this.m_fLastOverlayHeight = i), { width: n, height: i };
          }
          getDefaultScaleForLocation() {
            switch (this.props.dockLocation) {
              case i.Dashboard:
              case i.LeftHand:
              case i.RightHand:
                return 0.25;
              case i.World:
                return 0.5;
              case i.Theater:
                let e = this.getCurrentOverlaySize();
                return null === e || 0 == e.height ? 1 : 1 / e.height;
            }
          }
          setInitialTransformForLocation() {
            if (this.props.xfInitial) {
              switch (this.props.dockLocation) {
                case i.LeftHand:
                case i.RightHand: {
                  let e = this.props.xfInitial,
                    t = this.state.fOverlayScale;
                  Math.abs(e.scale.x - 2) < 0.1 &&
                    (t = Math.min(2 * t, n.sfOverlayScaleMax)),
                    (e.scale = { x: 1, y: 1, z: 1 }),
                    this.setState({ xfTransform: e, fOverlayScale: t });
                  break;
                }
                case i.World: {
                  let e = this.props.xfInitial,
                    t = this.state.fOverlayScale;
                  Math.abs(e.scale.x - 1) < 0.1 &&
                    (t = Math.max(t / 2, n.sfOverlayScaleMin)),
                    (e.scale = { x: 2, y: 2, z: 1 }),
                    this.setState({ xfTransform: e, fOverlayScale: t });
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
              case i.Dashboard:
              case i.LeftHand:
              case i.RightHand:
                this.setState({ xfTransform: e });
                break;
              case i.World:
                let t = 0;
                s.hz
                  .getInstance()
                  .requestSGTransform(
                    "system.systemui::active_overlay_transform",
                    t
                  )
                  .then((t) => {
                    (e.rotation = t.rotation),
                      (e.scale = { x: 2, y: 2, z: 1 }),
                      (e.translation = {
                        x: t.translation.x,
                        y: t.translation.y,
                        z: t.translation.z,
                      }),
                      this.setState({ xfTransform: e });
                  });
                break;
              case i.Theater:
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
              s.Kg.TrackedControllerRole_LeftHand
            ) != s.Kf && (t = VRHTML.GetPose("/user/hand/left", s.zq.Standing));
            let r = null;
            VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
              s.Kg.TrackedControllerRole_RightHand
            ) != s.Kf &&
              (r = VRHTML.GetPose("/user/hand/right", s.zq.Standing));
            let o = [];
            switch (this.state.sParent) {
              case "/user/hand/left":
                r && o.push({ pose: r, location: i.RightHand });
                break;
              case "/user/hand/right":
                t && o.push({ pose: t, location: i.LeftHand });
                break;
              case "/user/head":
                t && o.push({ pose: t, location: i.LeftHand }),
                  r && o.push({ pose: r, location: i.RightHand });
            }
            if (0 == o.length)
              return void setTimeout(this.computeDestination, n.sfMovePulseMS);
            let a = VRHTML.MultiplyTransforms(
              e.xfDeviceToAbsoluteTracking,
              this.state.xfTransform
            );
            o.forEach((e) => {
              let t = VRHTML.ChangeBasis(a, e.pose.xfDeviceToAbsoluteTracking);
              (0, s.LY)(t.translation) > n.sfMaxDockDist
                ? this.state.bIsOutsideMaxDist ||
                  (u.L.Instance.triggerHaptic(s.sH.SlidingEdge),
                  this.setState({
                    bIsOutsideMaxDist: !0,
                    destination: i.World,
                  }))
                : (this.state.bIsOutsideMaxDist ||
                    (this.props.dockLocation == i.World &&
                      this.state.destination == i.World)) &&
                  (u.L.Instance.triggerHaptic(s.sH.SlidingEdge),
                  this.setState({
                    bIsOutsideMaxDist: !1,
                    destination: e.location,
                  }));
            }),
              setTimeout(this.computeDestination, n.sfMovePulseMS);
          }
          startMove() {
            if (this.state.bIsMoving) return;
            if (
              (console.log(
                "Starting to move " + this.props.sOverlayKey + "...\n"
              ),
              (this.m_nMoveDeviceIndex =
                VRHTML.VROverlay.GetPrimaryDashboardDevice()),
              this.m_nMoveDeviceIndex == s.Kf)
            )
              return;
            this.m_moveDeviceRole =
              VRHTML.VRSystem.GetControllerRoleForTrackedDeviceIndex(
                this.m_nMoveDeviceIndex
              );
            let e,
              t,
              r = VRHTML.GetPose(this.m_nMoveDeviceIndex, s.zq.Standing);
            switch (this.props.dockLocation) {
              case i.LeftHand:
                if (
                  VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                    s.Kg.TrackedControllerRole_LeftHand
                  ) == s.Kf
                )
                  return;
                e = VRHTML.GetPose("/user/hand/left", s.zq.Standing);
                break;
              case i.RightHand:
                if (
                  VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                    s.Kg.TrackedControllerRole_RightHand
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
            let n = VRHTML.MultiplyTransforms(
                e.xfDeviceToAbsoluteTracking,
                this.state.xfTransform
              ),
              o = VRHTML.ChangeBasis(n, r.xfDeviceToAbsoluteTracking);
            this.setState(
              {
                xfTransform: o,
                sParent: t,
                bIsOutsideMaxDist: this.props.dockLocation == i.World,
                bIsMoving: !0,
              },
              this.computeDestination
            ),
              window.addEventListener("mouseup", this.endMove);
          }
          endMove() {
            if (!this.state.bIsMoving) return;
            let e, t;
            if (
              "/user/hand/left" == this.state.sParent ||
              this.state.destination == i.LeftHand
            ) {
              if (
                VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                  s.Kg.TrackedControllerRole_LeftHand
                ) == s.Kf
              )
                return;
              e = VRHTML.GetPose("/user/hand/left", s.zq.Standing);
            }
            if (
              "/user/hand/right" == this.state.sParent ||
              this.state.destination == i.RightHand
            ) {
              if (
                VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                  s.Kg.TrackedControllerRole_RightHand
                ) == s.Kf
              )
                return;
              t = VRHTML.GetPose("/user/hand/right", s.zq.Standing);
            }
            let r,
              n = {
                xfDeviceToAbsoluteTracking: (0, s.Oq)(),
                vVelocity: { x: 0, y: 0, z: 0 },
                eTrackingResult: s.QZ.TrackingResult_Running_OK,
                bPoseIsValid: !0,
              };
            switch (this.state.destination) {
              case i.LeftHand:
                r = e;
                break;
              case i.RightHand:
                r = t;
                break;
              default:
                r = n;
            }
            let o = VRHTML.GetPose(this.m_nMoveDeviceIndex, s.zq.Standing),
              a = VRHTML.MultiplyTransforms(
                o.xfDeviceToAbsoluteTracking,
                this.state.xfTransform
              ),
              l = VRHTML.ChangeBasis(a, r.xfDeviceToAbsoluteTracking);
            this.setState({
              xfTransform: l,
              sParent: S(this.state.destination),
              bIsMoving: !1,
            }),
              this.props.onDockOverlay(
                this.props.sOverlayKey,
                this.state.destination,
                l
              ),
              window.removeEventListener("mouseup", this.endMove);
          }
          render() {
            var e;
            if ("" == this.props.sOverlayKey || null == this.state.xfTransform)
              return null;
            let t = this.getCurrentOverlaySize();
            if (null === t) return null;
            (t.width *= this.state.fOverlayScale),
              (t.height *= this.state.fOverlayScale);
            let r = !this.props.bDashboardShown;
            if (this.props.dockLocation == i.Theater) return null;
            if ((v.B.isDarkMode, r)) {
              this.props.dockLocation, i.Theater;
              const r =
                  null !== (e = g.G3.settings.get(m.oO)) && void 0 !== e
                    ? e
                    : 2,
                n = (t.width, t.height * r);
              return c.createElement(
                s.wx,
                {
                  parent_path: this.state.sParent,
                  transform: this.state.xfTransform,
                  id: "xf_widget",
                },
                c.createElement(
                  _.Z,
                  null,
                  c.createElement(s.wx, { id: "", translation: { z: 2 * r } }),
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
                        m.GN,
                        this.props.sOverlayKey + ".cursor"
                      ),
                    })
                  ),
                  !1,
                  !1,
                  !1
                )
              );
            }
            let o = t.height + n.sfOverlayTrayHeight,
              a = Math.max(t.width, 0.175),
              l = o / 2 - n.sfOverlayTrayHeight;
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
                  translation: { y: l, z: -0.005 },
                  scale: { x: a, y: o, z: 0.008 },
                },
                c.createElement(
                  s.VW,
                  { color: { r: 0.016, g: 0.017, b: 0.02 } },
                  c.createElement(s.gQ, { solid: !0, source: "unit_cube" })
                )
              ),
              c.createElement(
                s.s_,
                {
                  overlay_key: this.props.sOverlayKey,
                  height: t.height,
                  width: void 0,
                  interactive: !0,
                  undocked: !0,
                  origin: s.Ic.BottomCenter,
                },
                c.createElement(s.sl, {
                  mountedId: (0, s.iN)(
                    m.GN,
                    this.props.sOverlayKey + ".cursor"
                  ),
                })
              ),
              c.createElement(
                s.s_,
                {
                  height: n.sfOverlayTrayHeight,
                  width: void 0,
                  interactive: !0,
                  origin: s.Ic.TopCenter,
                },
                c.createElement(
                  "div",
                  { className: "WindowTray" },
                  c.createElement(p.iR, {
                    additionalClassName: "WindowTraySlider",
                    min: n.sfOverlayScaleMin,
                    max: n.sfOverlayScaleMax,
                    value: this.state.fOverlayScale,
                    valueStyleVariant: p.px.OnHandle,
                    onChange: this.onOverlayScaleChanged,
                    detents: [0.25, 0.5, 1],
                    renderValue: (e) => (100 * e).toFixed(0) + "%",
                  }),
                  c.createElement(
                    h.z,
                    {
                      className: "WindowTrayButton",
                      key: "move",
                      onMouseDown: this.startMove,
                      onMouseUp: this.endMove,
                      style: { padding: "0.5em", paddingBottom: "0.25em" },
                    },
                    c.createElement("img", {
                      className: "Icon BlackToWhite",
                      src: "/dashboard/images/icons/icon_move.png",
                    })
                  ),
                  c.createElement(
                    h.z,
                    {
                      className: "WindowTrayButton",
                      key: "undock",
                      style: { padding: "0.5em", paddingBottom: "0.25em" },
                      title: "Return to Dashboard",
                      onClick: () => {
                        this.props.onDockOverlay(
                          this.props.sOverlayKey,
                          i.Dashboard
                        );
                      },
                    },
                    c.createElement("img", {
                      className: "Icon",
                      src: "/dashboard/images/icons/icon_return.png",
                    })
                  )
                )
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
                        this.state.destination == i.LeftHand
                          ? "/user/hand/left"
                          : "/user/hand/right",
                    },
                    c.createElement(s.x1, {
                      target_id: "xf_widget",
                      thickness: 0.001,
                      start_buffer: 0.01,
                      end_buffer: 0.01,
                    })
                  )
                )
            );
          }
        });
        (f.sfMaxDockDist = 0.4),
          (f.sfMovePulseMS = 100),
          (f.sfOverlayTrayHeight = 0.025),
          (f.sfOverlayScaleMin = 0.1),
          (f.sfOverlayScaleMax = 2),
          (0, a.gn)([l.ZP], f.prototype, "onOverlayScaleChanged", null),
          (0, a.gn)([l.ZP], f.prototype, "computeDestination", null),
          (0, a.gn)([l.ZP], f.prototype, "startMove", null),
          (0, a.gn)([l.ZP], f.prototype, "endMove", null),
          (f = n = (0, a.gn)([d.Pi], f));
      },
      1464: (e, t, r) => {
        "use strict";
        r.d(t, { a: () => h });
        var n = r(3884),
          i = r(7294),
          o = r(7062),
          a = r(9626),
          s = r(7176);
        function l(e) {
          const { children: t, invertParentPanelPitch: r, pitch: o } = e;
          return r || 0 != o
            ? i.createElement(
                n.wx,
                {
                  invert_parent_panel_pitch: null != r && r,
                  curvature_pitch: null != o ? o : 0,
                },
                t
              )
            : i.createElement(i.Fragment, null, t);
        }
        function d(e) {
          const { children: t, offsetPixels: r } = e;
          if (null == r || (0 == r.x && 0 == r.y && 0 == r.z))
            return i.createElement(i.Fragment, null, t);
          const o = (0, n.mT)(r, a.B.m_fVRGamepadUI_MetersPerPixel);
          return i.createElement(n.wx, { translation: o }, t);
        }
        function c(e) {
          const { children: t, rotation: r } = e;
          return null == r || (0 == r.x && 0 == r.y && 0 == r.z)
            ? i.createElement(i.Fragment, null, t)
            : i.createElement(n.wx, { rotation: r }, t);
        }
        function h(e) {
          var t,
            r,
            o,
            h,
            u,
            p,
            m,
            g,
            v,
            _,
            y,
            b,
            S,
            f,
            k,
            R,
            w,
            M,
            C,
            T,
            D,
            I,
            V,
            E,
            P,
            x,
            O,
            L,
            B;
          const { popupRequest: H, reparent: A } = e,
            N = null == A || A,
            U = {
              x:
                null !==
                  (r =
                    null === (t = H.origin_on_parent) || void 0 === t
                      ? void 0
                      : t.x) && void 0 !== r
                  ? r
                  : 0,
              y:
                null !==
                  (h =
                    null === (o = H.origin_on_parent) || void 0 === o
                      ? void 0
                      : o.y) && void 0 !== h
                  ? h
                  : 0,
            },
            F = {
              x:
                null !==
                  (p =
                    null === (u = H.origin_on_popup) || void 0 === u
                      ? void 0
                      : u.x) && void 0 !== p
                  ? p
                  : 0,
              y:
                null !==
                  (g =
                    null === (m = H.origin_on_popup) || void 0 === m
                      ? void 0
                      : m.y) && void 0 !== g
                  ? g
                  : 0,
            },
            G = {
              u:
                null !==
                  (_ =
                    null === (v = H.clip_rect) || void 0 === v
                      ? void 0
                      : v.u_min) && void 0 !== _
                  ? _
                  : 0,
              v:
                null !==
                  (b =
                    null === (y = H.clip_rect) || void 0 === y
                      ? void 0
                      : y.v_min) && void 0 !== b
                  ? b
                  : 0,
            },
            W = {
              u:
                null !==
                  (f =
                    null === (S = H.clip_rect) || void 0 === S
                      ? void 0
                      : S.u_max) && void 0 !== f
                  ? f
                  : 1,
              v:
                null !==
                  (R =
                    null === (k = H.clip_rect) || void 0 === k
                      ? void 0
                      : k.v_max) && void 0 !== R
                  ? R
                  : 1,
            },
            z = {
              x:
                null !==
                  (M =
                    null === (w = H.offset) || void 0 === w
                      ? void 0
                      : w.x_pixels) && void 0 !== M
                  ? M
                  : 0,
              y:
                null !==
                  (T =
                    null === (C = H.offset) || void 0 === C
                      ? void 0
                      : C.y_pixels) && void 0 !== T
                  ? T
                  : 0,
              z:
                null !==
                  (I =
                    null === (D = H.offset) || void 0 === D
                      ? void 0
                      : D.z_pixels) && void 0 !== I
                  ? I
                  : 0,
            },
            K = {
              x:
                null !==
                  (E =
                    null === (V = H.rotation) || void 0 === V
                      ? void 0
                      : V.pitch_degrees) && void 0 !== E
                  ? E
                  : 0,
              y:
                null !==
                  (x =
                    null === (P = H.rotation) || void 0 === P
                      ? void 0
                      : P.yaw_degrees) && void 0 !== x
                  ? x
                  : 0,
            },
            q = null === (O = H.inherit_parent_pitch) || void 0 === O || O,
            X = null === (L = H.inherit_parent_curvature) || void 0 === L || L,
            Q = null === (B = H.interactive) || void 0 === B || B,
            j = (function (e) {
              var t, r, n;
              const i =
                  null !== (t = null == e ? void 0 : e.parent_overlay_key) &&
                  void 0 !== t
                    ? t
                    : "",
                o =
                  null !==
                    (n =
                      null === (r = null == e ? void 0 : e.offset) ||
                      void 0 === r
                        ? void 0
                        : r.z_pixels) && void 0 !== n
                    ? n
                    : 0;
              return i == s.BZ && o >= 0 ? -0.5 : 0;
            })(H);
          i.useLayoutEffect(
            () => n.n0.Current().forceLayoutUpdate(),
            [G.u, G.v, W.u, W.v]
          );
          const Z = i.createElement(
            n.at,
            { key: H.dashboard_popup_request_id, location: U },
            i.createElement(
              l,
              { invertParentPanelPitch: !q },
              i.createElement(
                d,
                { offsetPixels: z },
                i.createElement(
                  c,
                  { rotation: K },
                  i.createElement(n.s_, {
                    debug_name: `VRGamepadUI-DashboardPopup-Panel-${H.dashboard_popup_request_id}`,
                    interactive: Q,
                    curvature: X ? "inherit-from-parent-panel" : void 0,
                    overlay_key: H.popup_overlay_key,
                    origin: F,
                    meters_per_pixel: a.B.m_fVRGamepadUI_MetersPerPixel,
                    reflect: 0.03,
                    sort_depth_bias: j,
                    uv_min: G,
                    uv_max: W,
                  })
                )
              )
            )
          );
          return N
            ? i.createElement(
                n.Sb,
                {
                  parent_overlay_key: H.parent_overlay_key,
                  key: H.dashboard_popup_request_id,
                },
                Z
              )
            : Z;
        }
        (0, o.Pi)((e) => {
          const t = a.B.GetActiveDashboardPopups();
          return i.createElement(
            i.Fragment,
            null,
            t.map((e) =>
              i.createElement(h, {
                popupRequest: e,
                key: e.dashboard_popup_request_id,
              })
            )
          );
        });
      },
      6459: (e, t, r) => {
        "use strict";
        r.d(t, {
          B8: () => B,
          CS: () => q,
          D6: () => z,
          Eu: () => C,
          IO: () => O,
          M3: () => I,
          NT: () => H,
          Rk: () => N,
          Yd: () => T,
          dw: () => L,
          dy: () => V,
          j4: () => U,
          j6: () => A,
          lL: () => D,
          z: () => F,
          zN: () => K,
          zk: () => x,
        });
        var n,
          i,
          o = r(655),
          a = r(3884),
          s = r(7056),
          l = r(2188),
          d = r(7062),
          c = r(7294),
          h = r(5177),
          u = r(9755),
          p = r(7475),
          m = r(4979),
          g = r(3107),
          v = r(2749),
          _ = r(7176),
          y = r(3568),
          b = r(7008),
          S = r(8980),
          f = r(9897),
          k = r(1628),
          R = r(8322),
          w = r.n(R),
          M = r(7726);
        const C = new l.vP();
        function T(e) {
          const { summonOverlayKey: t } = e,
            { ids: r, anchors: n } = c.useMemo(() => {
              const e = "DashboardPanel_" + t,
                r = {
                  strTopCenterAnchorID: e + "_TopCenter",
                  strCenterLeftAnchorID: e + "_CenterLeft",
                  strCenterRightAnchorID: e + "_CenterRight",
                  strBottomCenterAnchorID: e + "_BottomCenter",
                };
              return {
                ids: r,
                anchors: c.createElement(
                  c.Fragment,
                  null,
                  c.createElement(a.at, {
                    id: r.strTopCenterAnchorID,
                    location: a.Ic.TopCenter,
                  }),
                  c.createElement(a.at, {
                    id: r.strCenterLeftAnchorID,
                    location: a.Ic.CenterLeft,
                  }),
                  c.createElement(a.at, {
                    id: r.strCenterRightAnchorID,
                    location: a.Ic.CenterRight,
                  }),
                  c.createElement(a.at, {
                    id: r.strBottomCenterAnchorID,
                    location: a.Ic.BottomCenter,
                  })
                ),
              };
            }, [t]);
          return (
            c.useEffect(
              () => (
                C.set(t, r),
                () => {
                  C.get(t) === r && C.delete(t);
                }
              ),
              [t, r]
            ),
            t ? n : null
          );
        }
        const D = (e) => {
          var t, r, n;
          const i = c.useRef(null),
            o = c.useRef(null);
          c.useEffect(() => {
            var e, t;
            return null === (e = i.current) || void 0 === e
              ? void 0
              : e.setFloatingViewStack(
                  null === (t = o.current) || void 0 === t
                    ? void 0
                    : t.viewStack
                );
          });
          const s = null === (t = e.scrollable) || void 0 === t || t,
            l =
              null !== (r = e.foregroundReflectMultiplier) && void 0 !== r
                ? r
                : 1,
            d =
              null ===
                (n = k.G3.settings.get("/settings/dashboard/allowCurvature")) ||
              void 0 === n ||
              n
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
                curvature_origin_id: d,
                origin: a.Ic.BottomCenter,
                interactive: !1,
                scrollable: !1,
                target_dpi_panel_id: _.WR,
                target_dpi_multiplier: 2,
                reflect: 0.01,
                sampler: a.Vv.SingleTap,
              },
              c.createElement(T, { summonOverlayKey: e.summonOverlayKey }),
              c.createElement(
                u.vz,
                { ref: i },
                c.createElement("div", {
                  className: (0, S.LJ)(
                    "DashboardPanelBackground",
                    e.additionalClassNames
                  ),
                  style: e.additionalStyle,
                })
              )
            ),
            c.createElement(
              a.wx,
              { translation: { z: 1e-5 } },
              c.createElement(
                a.s_,
                {
                  visibility: e.visible ? a.Bl.Visible : a.Bl.Hidden,
                  debug_name: e.debugName,
                  curvature_origin_id: d,
                  origin: a.Ic.BottomCenter,
                  interactive: !0,
                  scrollable: s,
                  target_dpi_panel_id: _.WR,
                  reflect: 0.2 * l,
                },
                c.createElement(
                  u.sC,
                  { ref: o },
                  c.createElement(
                    h.q,
                    null,
                    c.createElement(
                      p.P,
                      {
                        scrollDirection: s ? p.I.Vertical : p.I.None,
                        className: (0, S.LJ)(
                          "DashboardPanel",
                          e.additionalClassNames
                        ),
                        style: e.additionalStyle,
                      },
                      e.children
                    )
                  )
                )
              )
            )
          );
        };
        class I extends c.Component {
          constructor(e) {
            super(e), (this.state = { time: new Date() });
          }
          componentDidMount() {
            let e = 60 - (new Date().getSeconds() % 60) + 0.01;
            this.m_clockUpdateTimeout = window.setTimeout(
              this.updateTime,
              1e3 * e
            );
          }
          componentWillUnmount() {
            clearTimeout(this.m_clockUpdateTimeout);
          }
          updateTime() {
            this.setState({ time: new Date() }),
              (this.m_clockUpdateTimeout = window.setTimeout(
                this.updateTime,
                6e4
              ));
          }
          render() {
            const e = y.LJ.GetLocale();
            let t = this.state.time.toLocaleTimeString(e, {
                hour: "numeric",
                minute: "2-digit",
              }),
              r = null;
            const n = t.toLowerCase(),
              i = Math.max(n.lastIndexOf("am"), n.lastIndexOf("pm"));
            return (
              i >= 0 && ((r = t.substring(i)), (t = t.substring(0, i - 1))),
              c.createElement(
                "div",
                { className: "ClockContainer" },
                c.createElement(
                  "div",
                  { className: "Clock" },
                  t,
                  " ",
                  c.createElement("span", { className: "Suffix" }, r)
                )
              )
            );
          }
        }
        function V(e) {
          return c.createElement(
            h.z,
            { className: "PowerMenuButton", onClick: e.onClick },
            c.createElement("div", { className: "HoverGradient" }),
            c.createElement("div", { className: "ClickGradient" }),
            c.createElement("span", null, e.label),
            e.lineBelow && c.createElement("div", { className: "LineBelow" })
          );
        }
        (0, o.gn)([s.ak], I.prototype, "updateTime", null);
        let E = (n = class extends c.Component {
          get isShowingTooltip() {
            return n.s_CurrentlyShownTooltip === this;
          }
          show() {
            n.s_CurrentlyShownTooltip = this;
          }
          hide() {
            this.isShowingTooltip && (n.s_CurrentlyShownTooltip = null);
          }
          render() {
            var e;
            const t =
                this.props.text && (this.props.shown || this.isShowingTooltip),
              r = this.props.translation
                ? this.props.translation
                : { x: 0, y: -0.2, z: 0.05 },
              n =
                null ===
                  (e = k.G3.settings.get(
                    "/settings/dashboard/allowCurvature"
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
                  { translation: r },
                  c.createElement(
                    a.s_,
                    {
                      visibility: t ? a.Bl.Visible : a.Bl.SkipInSceneGraph,
                      target_dpi_panel_id: _.WR,
                      curvature_origin_id: n,
                    },
                    c.createElement(
                      "div",
                      { className: "ControlBarButtonTooltip" },
                      this.props.text
                    )
                  )
                )
              )
            );
          }
        });
        (E.s_CurrentlyShownTooltip = null),
          (0, o.gn)([l.Fl], E.prototype, "isShowingTooltip", null),
          (0, o.gn)([l.aD.bound], E.prototype, "show", null),
          (0, o.gn)([l.aD.bound], E.prototype, "hide", null),
          (0, o.gn)([l.LO], E, "s_CurrentlyShownTooltip", void 0),
          (E = n = (0, o.gn)([d.Pi], E));
        class P extends c.Component {
          static ShouldInvertThumbnail(e) {
            if (!e) return !1;
            if (((e = e.toLowerCase()), !P.s_mapShouldInvertThumbnail.has(e))) {
              let t = !1;
              e.endsWith(".svg") && (t = !0),
                e.startsWith("data:") &&
                  P.k_rsThumbnailHashesToInvert.indexOf(w().hash(e)) >= 0 &&
                  (t = !0),
                P.s_mapShouldInvertThumbnail.set(e, t);
            }
            return P.s_mapShouldInvertThumbnail.get(e);
          }
          render() {
            var e;
            const t = null !== (e = this.props.shadow) && void 0 !== e && e,
              r = P.ShouldInvertThumbnail(this.props.src);
            return c.createElement(
              "div",
              { className: "Icon" },
              t &&
                c.createElement("img", {
                  className: "Shadow",
                  src: this.props.src,
                }),
              c.createElement("img", {
                className: (0, S.LJ)(["BlackToWhite", r]),
                src: this.props.src,
              })
            );
          }
        }
        var x, O;
        (P.k_rsThumbnailHashesToInvert = [
          "5cbd0ebd6459cdaf75fdcafc5051f4e0",
          "c77452e60fc29227b33773ff6e74f8a1",
          "44b62220b39ba717fbfc65e3b4225491",
          "0ea4aa3d9529b716f0f1957684247dee",
          "86bbab56235b55f6e5e7d288342931d7",
        ]),
          (P.s_mapShouldInvertThumbnail = new Map()),
          (function (e) {
            (e[(e.Large = 0)] = "Large"),
              (e[(e.Small = 1)] = "Small"),
              (e[(e.App = 2)] = "App");
          })(x || (x = {})),
          (function (e) {
            (e[(e.Center = 0)] = "Center"), (e[(e.Fill = 1)] = "Fill");
          })(O || (O = {}));
        const L = (e) =>
          c.createElement(
            "div",
            { className: (0, S.LJ)("ControlBarGroup", x[e.style]) },
            e.children
          );
        let B = class extends c.Component {
          constructor(e) {
            super(e), (this.m_refTooltip = c.createRef());
          }
          onMouseEnter() {
            var e, t, r;
            null === (e = this.m_refTooltip.current) ||
              void 0 === e ||
              e.show(),
              null === (r = (t = this.props).onMouseEnter) ||
                void 0 === r ||
                r.call(t);
          }
          onMouseLeave() {
            var e, t, r;
            null === (e = this.m_refTooltip.current) ||
              void 0 === e ||
              e.hide(),
              null === (r = (t = this.props).onMouseLeave) ||
                void 0 === r ||
                r.call(t);
          }
          render() {
            var e;
            return c.createElement(
              h.z,
              {
                className: (0, S.LJ)(
                  "ControlBarButton",
                  this.props.additionalClassNames,
                  O[
                    null !== (e = this.props.imageStyle) && void 0 !== e
                      ? e
                      : O.Center
                  ] + "Image",
                  ["Disabled", !1 === this.props.enabled],
                  ["Active", !!this.props.active]
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
                pressSoundEffect: g.y.ControlBarButtonPress,
                releaseSoundEffect: g.y.ControlBarButtonRelease,
              },
              this.props.centerPanelAnchorID &&
                c.createElement(
                  "div",
                  { style: { position: "absolute", left: "50%", top: "50%" } },
                  c.createElement(b.d, {
                    allowableParentSelectors: [".DashboardMain"],
                    panelAnchorID: this.props.centerPanelAnchorID,
                  })
                ),
              c.createElement(E, {
                text: this.props.label,
                ref: this.m_refTooltip,
              }),
              c.createElement(P, { src: this.props.imageUrl })
            );
          }
        };
        (0, o.gn)([s.ak], B.prototype, "onMouseEnter", null),
          (0, o.gn)([s.ak], B.prototype, "onMouseLeave", null),
          (B = (0, o.gn)([d.Pi], B));
        const H = (e) =>
          c.createElement(
            L,
            { style: e.style },
            c.createElement(B, Object.assign({}, e))
          );
        class A extends c.Component {
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
                    this.onBatteryStateChanged
                  )),
              (this.m_DeviceRoleChangedCallbackHandle =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.RegisterForDeviceRoleChangedEvents(
                      this.onDeviceRoleChanged
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
              r = a.Kf;
            if (
              (void 0 !== this.props.role
                ? (r = VRHTML.VRSystem.GetTrackedDeviceIndexForControllerRole(
                    this.props.role
                  ))
                : void 0 !== this.props.deviceIndex &&
                  (r = this.props.deviceIndex),
              r != this.deviceIndex &&
                ((this.batteryLevelStable = null),
                (this.devicePowerUsage = null),
                (this.deviceIndex = r)),
              r != a.Kf)
            ) {
              if (
                ((e = VRHTML.VRProperties.GetBoolProperty(
                  r,
                  a.Uk.DeviceProvidesBatteryStatus_Bool
                )),
                e)
              ) {
                const e = VRHTML.VRProperties.GetFloatProperty(
                  r,
                  a.Uk.DeviceBatteryPercentage_Float
                );
                (t = VRHTML.VRProperties.GetBoolProperty(
                  r,
                  a.Uk.DeviceIsCharging_Bool
                )),
                  null == this.batteryLevelStable ||
                  0 == this.batteryLevelStable
                    ? (this.batteryLevelStable = e)
                    : ((this.batteryLevelStable = Math.min(
                        this.batteryLevelStable,
                        e + A.kBatteryLevelHysteresis,
                        1
                      )),
                      (this.batteryLevelStable = Math.max(
                        this.batteryLevelStable,
                        e - A.kBatteryLevelHysteresis,
                        0
                      )));
              }
              this.devicePowerUsage = VRHTML.VRProperties.GetFloatProperty(
                r,
                a.Uk.DevicePowerUsage_Float
              );
            }
            let n = M.X.GetBatteryIcon(
              e,
              t,
              this.batteryLevelStable,
              this.props.style
            );
            n != this.state.batteryIconPath &&
              this.setState({ batteryIconPath: n });
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
          onDeviceEvent(e, t, r) {
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
                  " W "
                ),
              c.createElement("img", { src: this.state.batteryIconPath })
            );
          }
        }
        (A.kBatteryLevelHysteresis = 0.02),
          (0, o.gn)([s.ak], A.prototype, "updateControllerStatus", null),
          (0, o.gn)([s.ak], A.prototype, "onBatteryStateChanged", null),
          (0, o.gn)([s.ak], A.prototype, "onDeviceRoleChanged", null),
          (0, o.gn)([s.ak], A.prototype, "onDeviceEvent", null),
          c.Component;
        const N = (e) =>
          c.createElement(
            "div",
            { className: "Title" },
            c.createElement(P, { src: e.iconUrl, shadow: !0 }),
            c.createElement("span", { className: "NoWrapText" }, e.name)
          );
        class U extends c.Component {
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
                this.onResizeObserved
              )),
              this.m_resizeObserver.observe(this.m_refPanelElem.current),
              this.updateBackgroundSize());
          }
          render() {
            var e, t, r;
            const n = this.props.position,
              i = Math.asin(n) / Math.PI,
              o = null !== (e = this.props.scale) && void 0 !== e ? e : 1;
            return c.createElement(
              c.Fragment,
              null,
              c.createElement(
                a.at,
                { location: { x: n, y: -1 } },
                c.createElement(a.wx, {
                  id: this.m_sAnchorID,
                  translation: {
                    y: 0.01 * Math.abs(i),
                    z: -0.03 * Math.abs(i),
                  },
                  rotation: { y: 15 * i, z: 2 * i },
                })
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
                    v.Ti,
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
                        translation: { y: 0.04 * o, z: -0.01 },
                        scale: o,
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
                              this.props.additionalClassNames
                            ),
                            onMouseEnter: this.props.onMouseEnter,
                            onMouseMove: this.props.onMouseMove,
                            onMouseLeave: this.props.onMouseLeave,
                            ref: this.m_refPanelElem,
                          },
                          this.props.children
                        )
                      ),
                      c.createElement(
                        a.wx,
                        { translation: { z: -1e-5 } },
                        c.createElement(
                          a.s_,
                          {
                            curvature_origin_id:
                              null !== (r = this.props.curvatureOriginId) &&
                              void 0 !== r
                                ? r
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
                          })
                        )
                      )
                    )
                  )
                )
              )
            );
          }
        }
        (0, o.gn)([s.ak], U.prototype, "onResizeObserved", null),
          (0, o.gn)([s.ak], U.prototype, "updateBackgroundSize", null),
          (0, o.gn)([s.ak], U.prototype, "onPortalDidMount", null);
        let F = class extends c.Component {
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
              k.G3.settings.get(
                "/settings/audio/enablePlaybackMirrorIndependentVolume"
              ) && k.G3.settings.get("/settings/audio/enablePlaybackMirror")
            );
          }
          get enableAudioMirrorControls() {
            return !!k.G3.settings.get(
              "/settings/audio/activePlaybackMirrorDevice"
            );
          }
          render() {
            const e =
              (this.showAudioMirrorControls ? 3 : 2) >= 3
                ? 0
                : this.props.position;
            return c.createElement(
              U,
              Object.assign({}, this.props, {
                position: e,
                ref: this.m_refTray,
                additionalClassNames: "VolumeTray",
              }),
              c.createElement(
                "div",
                { className: "Section" },
                c.createElement(
                  W,
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
                  })
                ),
                c.createElement(G, {
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
                  interactionEndSoundEffect: g.y.VolumePreview,
                })
              ),
              this.showAudioMirrorControls &&
                c.createElement(
                  "div",
                  { className: "Section" },
                  c.createElement(
                    W,
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
                    })
                  ),
                  c.createElement(G, {
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
                    interactionEndSoundEffect: g.y.VolumePreview,
                  })
                ),
              c.createElement(
                "div",
                { className: "Section" },
                c.createElement(
                  W,
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
                  })
                ),
                c.createElement(G, {
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
                  interactionEndSoundEffect: g.y.VolumePreview,
                })
              )
            );
          }
        };
        (0, o.gn)([s.ak], F.prototype, "onSliderMouseEnter", null),
          (0, o.gn)([s.ak], F.prototype, "onSliderMouseLeave", null),
          (0, o.gn)([s.ak], F.prototype, "onSliderFinalChange", null),
          (0, o.gn)([l.Fl], F.prototype, "showAudioMirrorControls", null),
          (0, o.gn)([l.Fl], F.prototype, "enableAudioMirrorControls", null),
          (F = (0, o.gn)([d.Pi], F));
        let G = class extends c.Component {
          constructor(e) {
            super(e), (this.state = { bSliding: !1, bHover: !1 });
          }
          onMouseEnter(e) {
            var t, r;
            this.setState({ bHover: !0 }),
              null === (r = (t = this.props).onMouseEnter) ||
                void 0 === r ||
                r.call(t, e);
          }
          onMouseLeave(e) {
            var t, r;
            this.setState({ bHover: !1 }),
              null === (r = (t = this.props).onMouseLeave) ||
                void 0 === r ||
                r.call(t, e);
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
                c.createElement(E, {
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
                })
              )
            );
          }
        };
        (0, o.gn)([s.ak], G.prototype, "onMouseEnter", null),
          (0, o.gn)([s.ak], G.prototype, "onMouseLeave", null),
          (0, o.gn)([s.ak], G.prototype, "onInteractionStart", null),
          (0, o.gn)([s.ak], G.prototype, "onInteractionEnd", null),
          (G = (0, o.gn)([d.Pi], G));
        let W = class extends c.Component {
          constructor(e) {
            super(e), (this.m_refTooltip = c.createRef());
          }
          onMouseEnter(e) {
            var t, r, n;
            null === (t = this.m_refTooltip.current) ||
              void 0 === t ||
              t.show(),
              null === (n = (r = this.props).onMouseEnter) ||
                void 0 === n ||
                n.call(r, e);
          }
          onMouseLeave(e) {
            var t, r, n;
            null === (t = this.m_refTooltip.current) ||
              void 0 === t ||
              t.hide(),
              null === (n = (r = this.props).onMouseLeave) ||
                void 0 === n ||
                n.call(r, e);
          }
          render() {
            return c.createElement(
              h.z,
              Object.assign({}, this.props, {
                className: (0, S.LJ)(
                  "ButtonControl",
                  "Round",
                  this.props.className
                ),
                onMouseEnter: this.onMouseEnter,
                onMouseLeave: this.onMouseLeave,
              }),
              this.props.title &&
                c.createElement(E, {
                  text: this.props.title,
                  ref: this.m_refTooltip,
                }),
              this.props.children
            );
          }
        };
        (0, o.gn)([s.ak], W.prototype, "onMouseEnter", null),
          (0, o.gn)([s.ak], W.prototype, "onMouseLeave", null),
          (W = (0, o.gn)([d.Pi], W));
        let z = (i = class extends c.Component {
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
            var t, r;
            (this.m_vecOriginalMousePosition = { x: e.clientX, y: e.clientY }),
              window.document.addEventListener("mouseup", this.onWindowMouseUp),
              window.document.addEventListener(
                "mousemove",
                this.onWindowMouseMove
              ),
              null === (r = (t = this.props).onShowTray) ||
                void 0 === r ||
                r.call(t);
          }
          onWindowMouseMove(e) {
            if (!this.slider || this.slider.isSliding) return;
            const t = { x: e.clientX, y: e.clientY };
            (0, a.JR)((0, a.Zj)(t, this.m_vecOriginalMousePosition)) >
              i.MIN_DRAG_THRESHOLD && this.startSliding(t);
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
            var e, t, r, n;
            window.document.removeEventListener(
              "mouseup",
              this.onWindowMouseUp
            ),
              window.document.removeEventListener(
                "mousemove",
                this.onWindowMouseMove
              ),
              (null === (e = this.slider) || void 0 === e
                ? void 0
                : e.isSliding) &&
                (null === (r = (t = this.props).onHideTray) ||
                  void 0 === r ||
                  r.call(t)),
              null === (n = this.slider) ||
                void 0 === n ||
                n.stopExternalSliding();
          }
          render() {
            return c.createElement(B, {
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
        (z.MIN_DRAG_THRESHOLD = 35),
          (0, o.gn)([s.ak], z.prototype, "onButtonMouseDown", null),
          (0, o.gn)([s.ak], z.prototype, "onWindowMouseMove", null),
          (0, o.gn)([s.ak], z.prototype, "onWindowMouseUp", null),
          (z = i = (0, o.gn)([d.Pi], z));
        const K = (e) => {
          const t = c.useRef();
          return c.createElement(
            h.z,
            {
              className: (0, S.LJ)(
                "ButtonControl",
                ["Active", e.active],
                ["WithIcon", !!e.iconUrl],
                e.additionalClassNames
              ),
              onClick: e.onClick,
              onMouseDown: e.onMouseDown,
              onMouseUp: e.onMouseUp,
              onMouseEnter: () => {
                var r;
                null === (r = t.current) || void 0 === r || r.show(),
                  e.onMouseEnter && e.onMouseEnter();
              },
              onMouseLeave: () => {
                var r;
                null === (r = t.current) || void 0 === r || r.hide(),
                  e.onMouseLeave && e.onMouseLeave();
              },
              enabled: e.enabled,
            },
            e.title &&
              c.createElement(E, {
                text: e.title,
                translation: e.tooltipTranslation,
                ref: t,
              }),
            e.label && c.createElement("span", null, e.label),
            e.iconUrl &&
              c.createElement("img", {
                className: "Icon BlackToWhite",
                src: e.iconUrl,
              }),
            e.icon
          );
        };
        function q(e) {
          var t;
          const r = (0, S.aB)(),
            n =
              null !== (t = null == r ? void 0 : r.visible) &&
              void 0 !== t &&
              t,
            i = c.useRef(!1);
          return c.createElement(
            K,
            Object.assign(
              {
                iconUrl: "/dashboard/images/icons/svr_keyboard.svg",
                title: n
                  ? (0, y.Xx)("#HideKeyboardTooltip")
                  : (0, y.Xx)("#ShowKeyboardTooltip"),
                additionalClassNames: "Keyboard",
                onMouseDown: () => {
                  i.current = n;
                },
                onClick: () => {
                  i.current
                    ? VRHTML.VROverlay.HideKeyboard()
                    : (VRHTML.VROverlay.ShowKeyboardForOverlay(
                        e.activeOverlayKey,
                        a.Pw.Normal,
                        a.l0.SingleLine,
                        a.vS.Minimal,
                        "Desktop Text",
                        1024,
                        "",
                        0
                      ),
                      VRHTML.VROverlay.SetKeyboardPositionForOverlay(
                        e.activeOverlayKey,
                        {}
                      ));
                },
                active: n,
              },
              e
            )
          );
        }
      },
      6063: (e, t, r) => {
        "use strict";
        r.d(t, { J: () => u });
        var n = r(655),
          i = r(7294),
          o = r(7056),
          a = r(3884),
          s = r(7062),
          l = r(5177),
          d = r(6539),
          c = r(421),
          h = r(8980);
        let u = class extends i.Component {
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
            return i.createElement(
              i.Fragment,
              null,
              " ",
              this.props.bVisible &&
                i.createElement(
                  a.wx,
                  null,
                  i.createElement(
                    a.Dd,
                    { value: this.props.opacity },
                    " ",
                    i.createElement(
                      a.VW,
                      { color: this.props.tint },
                      i.createElement(
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
                        i.createElement(
                          l.z,
                          {
                            className: "GrabHandleButton",
                            key: "move",
                            onMouseDown: this.startMove,
                            onMouseUp: this.endMove,
                          },
                          i.createElement("div", {
                            className: (0, h.LJ)("GrabHandleBar", [
                              "ForceActive",
                              this.state.bActive,
                            ]),
                          })
                        )
                      )
                    ),
                    " "
                  ),
                  " "
                ),
              " "
            );
          }
        };
        (u.contextType = c.E),
          (0, n.gn)([o.ZP], u.prototype, "startMove", null),
          (0, n.gn)([o.ZP], u.prototype, "endMove", null),
          (u = (0, n.gn)([s.Pi], u));
      },
      421: (e, t, r) => {
        "use strict";
        r.d(t, { E: () => s, Z: () => l });
        var n = r(655),
          i = r(3884),
          o = r(7062),
          a = r(7294);
        const s = a.createContext(void 0);
        let l = class extends a.Component {
          constructor(e) {
            super(e), (this.state = { xfTransform: (0, i.Oq)(), sParent: "" });
          }
          render() {
            return a.createElement(
              i.sO,
              {
                sParentPath: this.state.sParent,
                xfCurrent: this.state.xfTransform,
                id: this.props.id,
              },
              a.createElement(s.Provider, { value: this }, this.props.children)
            );
          }
        };
        l = (0, n.gn)([o.Pi], l);
      },
      5103: (e, t, r) => {
        "use strict";
        var n = r(655),
          i = r(7294),
          o = r(3935),
          a = r(9669),
          s = r.n(a),
          l = r(7056),
          d = r(3884),
          c = r(3568),
          h = r(1628),
          u = r(9809),
          p = r(1380),
          m = r(5177),
          g = r(3107);
        class v extends i.Component {
          constructor(e) {
            super(e),
              (this.m_genid = 0),
              (this.m_language = null),
              (this.m_languageToLayout = new Map()),
              (this.m_keyTypeToHandler = null),
              (this.m_curShiftPlane = null),
              (this.m_keyElements = null),
              (this.m_mailbox = new d.Nv()),
              this.m_mailbox.Init("keyboard_vrwebui").then(() => {
                this.m_mailbox.RegisterHandler(
                  "keyboard_shown",
                  this.OnKeyboardShown
                ),
                  this.m_mailbox.RegisterHandler(
                    "keyboard_hidden",
                    this.OnKeyboardHidden
                  );
              }),
              this.initializeKeyHandlers(),
              (this.state = {
                bFading: !1,
                bVisible: !1,
                bMinimalMode: !1,
                bMultilinePreview: !1,
                inputMode: d.Pw.Normal,
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
              h.G3.Init(!1);
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
              inputMode: t.inputMode,
              bMinimalMode: !!(d.vS.Minimal & t.keyboardFlags),
              bMultilinePreview: t.lineMode == d.l0.MultipleLines,
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
                            : VRHTML.GetSteamVRLanguage()) && void 0 !== e
                        ? e
                        : "english")),
              this.m_language
            );
          }
          bShowPasswordPreview() {
            return this.state.inputMode == d.Pw.Password;
          }
          getLayoutFile(e) {
            return (0, n.mG)(this, void 0, void 0, function* () {
              let t = `/dashboard/keyboards/layout_${e}_${this.state.presentation}.json`;
              return s()
                .get(t)
                .then((e) => (200 != e.status ? null : e.data))
                .catch((t) =>
                  "english" != e ? this.getLayoutFile("english") : null
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
              let r = this.state.layout.geometry[e].keys[t];
              if ("string" == typeof r);
              else if ("key" != r.type)
                return void this.m_keyTypeToHandler.get(r.type)(r);
            }
            if (
              e < this.m_curShiftPlane.rows.length &&
              t < this.m_curShiftPlane.rows[e].length
            ) {
              let r = this.m_curShiftPlane.rows[e][t];
              "string" == typeof r
                ? this.m_keyTypeToHandler.get("key")(r)
                : this.m_keyTypeToHandler.has(r.type) &&
                  this.m_keyTypeToHandler.get(r.type)(r);
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
                r = this.state.textPos + t.length;
              this.UpdateText(e, r);
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
                let r = e.substr(0, e.length - 1) + t,
                  n = this.state.textPos - 1;
                this.UpdateText(r, n);
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
            let r = t;
            for (; r > 0 && !this.isWhite(e[r]); ) r -= 1;
            r < e.length && this.isWhite(e[r]) && (r += 1);
            let n = r;
            for (; n < e.length && !this.isWhite(e[n]); ) n += 1;
            return [r, n];
          }
          getSuggestionBase(e, t) {
            let r = this.findWordLimits(e, t);
            return r ? e.substr(r[0], r[1] - r[0]) : null;
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
                    this.state.textPos
                  )),
                null != e && e.length > 0)
              ) {
                new Array(this.state.layout.previewSuggestionCount);
                let r =
                  null !==
                    (t =
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.VRKeyboard.GetSuggestions(
                            e,
                            this.state.layout.previewSuggestionCount
                          )) && void 0 !== t
                    ? t
                    : [];
                this.setState({ suggestions: r });
              } else this.setState({ suggestions: [] });
          }
          handleSuggestionClick(e) {
            if (e >= this.state.suggestions.length) return;
            let t = this.state.suggestions[e],
              r = this.findWordLimits(this.state.text, this.state.textPos);
            if (r) {
              let e = this.state.text.substr(0, r[0]);
              t += " ";
              let n = e + t + this.state.text.substr(r[1]),
                i = e.length + t.length;
              this.UpdateText(n, i);
            }
          }
          onMouseEnter(e, t) {}
          makeKeyFaceElement(e, t) {
            let r = "VRKBKeyFace";
            if ((t && (r += ` VRKBShift_${t.name}`), "string" == typeof e))
              return i.createElement(
                "span",
                { key: this.genid(), className: r },
                e
              );
            {
              let t = e.text;
              switch (
                (e.value ? e.value : e.text,
                e.img &&
                  (t = i.createElement("img", {
                    src: `/dashboard/images/vrkeyboard/${e.img}.png`,
                  })),
                "string" == typeof t && t.startsWith("#") && (t = (0, c.Xx)(t)),
                e.type)
              ) {
                case "key":
                case "symbols":
                case "del":
                case "cancel":
                case "shift":
                case "return":
                  return i.createElement(
                    "span",
                    { key: this.genid(), className: r },
                    t
                  );
                case "done":
                  return i.createElement(
                    "span",
                    { key: this.genid(), className: r + " VRKBDone" },
                    t
                  );
                case "hole":
                  return i.createElement("span", {
                    key: this.genid(),
                    className: r,
                  });
                default:
                  return (
                    console.log(
                      "unknown key type ",
                      e.type,
                      " in keyboard layout"
                    ),
                    null
                  );
              }
            }
          }
          getKeyFaces(e, t) {
            let r = [];
            if (
              (e < this.state.layout.geometry.length &&
                t < this.state.layout.geometry[e].keys.length &&
                "key" != this.state.layout.geometry[e].keys[t].type &&
                r.push(
                  this.makeKeyFaceElement(
                    this.state.layout.geometry[e].keys[t],
                    null
                  )
                ),
              0 == r.length)
            )
              for (let n of this.state.langLayout.shiftPlanes)
                e < n.rows.length &&
                  t < n.rows[e].length &&
                  r.push(this.makeKeyFaceElement(n.rows[e][t], n));
            return r;
          }
          getKeyElements() {
            let e = [];
            for (let t = 0; t < this.state.layout.geometry.length; ++t) {
              let r = this.state.layout.geometry[t],
                n = [];
              for (let e = 0; e < r.keys.length; ++e) {
                let o = r.keys[e],
                  a = {};
                o.flexGrow && (a.flexGrow = o.flexGrow),
                  o.flexShrink && (a.flexShrink = o.flexShrink),
                  this.state.shiftPlaneName == o.type &&
                    (a.background = "#000"),
                  this.state.activeKey.nCol == e &&
                    this.state.activeKey.nRow == t &&
                    (a.background = "#000");
                let s = this.getKeyFaces(t, e),
                  l = () => {
                    "done" == o.type && this.onKey(t, e);
                  },
                  d = () => {
                    "done" != o.type &&
                      (this.setState({ activeKey: { nRow: t, nCol: e } }),
                      this.onKey(t, e));
                  },
                  c = () => {
                    "done" != o.type &&
                      this.setState({ activeKey: { nRow: -1, nCol: -1 } });
                  };
                n.push(
                  i.createElement(
                    m.z,
                    {
                      key: this.genid(),
                      className: "VRKBKey",
                      pressSoundEffect: g.y.KeyboardClick,
                      releaseSoundEffect: null,
                      onClick: l,
                      onMouseDown: d,
                      onMouseUp: c,
                      style: a,
                    },
                    s
                  )
                );
              }
              let o = {};
              r.height && (o.height = r.height),
                e.push(
                  i.createElement(
                    "div",
                    { key: this.genid(), className: "VRKBRow", style: o },
                    n
                  )
                );
            }
            return i.createElement("div", { className: "VRKBRows" }, e);
          }
          makeCursor() {
            return i.createElement(
              "span",
              { key: this.genid(), className: "VRKBPreviewTextCursor" },
              "|"
            );
          }
          makePreviewText() {
            let e = this.state.text.substr(0, this.state.textPos),
              t = this.state.text.substr(this.state.textPos);
            return this.bShowPasswordPreview()
              ? ((e = v.kPasswordChar.repeat(e.length)),
                (t = v.kPasswordChar.repeat(t.length)),
                [
                  i.createElement(
                    "span",
                    { key: this.genid(), className: "VRKBPreviewTextPart" },
                    v.kPasswordChar.repeat(e.length)
                  ),
                  this.makeCursor(),
                  i.createElement(
                    "span",
                    { key: this.genid(), className: "VRKBPreviewTextPart" },
                    v.kPasswordChar.repeat(t.length)
                  ),
                ])
              : [
                  i.createElement(
                    "span",
                    { key: this.genid(), className: "VRKBPreviewTextPart" },
                    e
                  ),
                  this.makeCursor(),
                  i.createElement(
                    "span",
                    { key: this.genid(), className: "VRKBPreviewTextPart" },
                    t
                  ),
                ];
          }
          makeSuggestionElements() {
            let e = [];
            if (this.state.suggestions)
              for (let t = 0; t < this.state.suggestions.length; ++t)
                e.push(
                  i.createElement(
                    "div",
                    {
                      key: this.genid(),
                      className: "VRKBSuggestion",
                      onClick: () => this.handleSuggestionClick(t),
                    },
                    this.state.suggestions[t]
                  )
                );
            for (
              let t = e.length;
              t < this.state.layout.previewSuggestionCount;
              ++t
            )
              e.push(
                i.createElement("div", {
                  key: this.genid(),
                  className: "VRKBSuggestion",
                })
              );
            return e;
          }
          renderFlatPreview() {
            return this.state.bMinimalMode
              ? null
              : i.createElement(
                  "div",
                  { className: "VRKBPreviewWrapper" },
                  i.createElement(
                    "div",
                    { key: this.genid(), className: "VRKBPreviewText" },
                    this.makePreviewText()
                  ),
                  i.createElement(
                    "div",
                    { key: this.genid(), className: "VRKBSuggestionWrapper" },
                    this.makeSuggestionElements()
                  )
                );
          }
          render_flat() {
            return i.createElement(
              d.wx,
              { parent_path: "/user/head" },
              i.createElement(
                d.iC,
                null,
                i.createElement(
                  d.wx,
                  { translation: this.state.layout.translation },
                  i.createElement(
                    d.s_,
                    {
                      width: void 0,
                      height: 1,
                      interactive: !0,
                      sort_depth_bias: 0.2,
                    },
                    i.createElement(
                      "div",
                      {
                        className: `VRKBShiftState VRKBChooseShift_${this.state.shiftPlaneName}`,
                      },
                      i.createElement(
                        "div",
                        { className: "VRKBBackground" },
                        this.renderFlatPreview(),
                        this.m_keyElements
                      )
                    )
                  )
                )
              )
            );
          }
          render_overlay() {
            return i.createElement(
              "div",
              {
                className: `VRKBContainer VRKBShiftState VRKBChooseShift_${this.state.shiftPlaneName}`,
              },
              i.createElement(
                "div",
                { className: "VRKBBackground" },
                this.renderFlatPreview(),
                this.m_keyElements
              )
            );
          }
          render3dPreview() {
            return null;
          }
          render_3d() {
            return null;
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
              case "3d":
                return this.render_3d();
              case "overlay":
                return this.render_overlay();
              default:
                return (
                  console.log(
                    "bad keyboard presentation:",
                    this.state.presentation
                  ),
                  null
                );
            }
          }
        }
        (v.kPasswordChar = "●"),
          (0, n.gn)([l.ak], v.prototype, "OnKeyboardHidden", null),
          (0, n.gn)([l.ak], v.prototype, "OnKeyboardShown", null),
          (0, n.gn)([l.ak], v.prototype, "handleKey", null),
          (0, n.gn)([l.ak], v.prototype, "handleReturn", null),
          (0, n.gn)([l.ak], v.prototype, "handleDel", null),
          (0, n.gn)([l.ak], v.prototype, "handleShift", null),
          (0, n.gn)([l.ak], v.prototype, "handleSymbols", null),
          (0, n.gn)([l.ak], v.prototype, "handleDone", null),
          (0, n.gn)([l.ak], v.prototype, "handleCancel", null),
          (0, n.gn)([l.ak], v.prototype, "handleClear", null),
          (0, n.gn)([l.ak], v.prototype, "handleSuggestionClick", null),
          (0, n.gn)([l.ak], v.prototype, "onMouseEnter", null);
        const _ =
          null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.GetSteamVRLanguage();
        null === VRHTML ||
          void 0 === VRHTML ||
          VRHTML.VROverlay.SetInputMethod(
            VRHTML.VROverlay.ThisOverlayHandle(),
            d.qC.Mouse
          ),
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VRDashboardManager.SetKeyboardOverlayToThis(),
          (0, c.CK)(["systemui"], _)
            .then(() => u.I.Init())
            .then(() => p.S.Init())
            .then(() => {
              o.render(
                i.createElement(v, { language: _ }),
                document.getElementById("root")
              );
            });
      },
      16: (e, t, r) => {
        "use strict";
        r.d(t, { BB: () => u, KU: () => p });
        var n,
          i = r(655),
          o = r(7294),
          a = r(7056),
          s = r(3884),
          l = r(3568),
          d = r(7062),
          c = r(8980),
          h = r(1628);
        const u = "resetuniverseorigincountdown",
          p = "begin_reset_universe_origin_countdown";
        let m = (n = class extends o.Component {
          constructor(e) {
            super(e),
              (this.m_countdownTimeout = 0),
              (this.m_fadeFinishTimeout = 0),
              (this.m_mailbox = new s.Nv()),
              this.m_mailbox.Init(u).then(() => {
                this.m_mailbox.RegisterHandler(
                  p,
                  this.OnBeginResetUniverseOriginCountdown
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
              h.G3.settings.get(
                "/settings/dashboard/allowPlacementDuringRecenter"
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
                    n.kFadeDurationMs
                  )),
                  this.setState({
                    visible: !0,
                    fading: !0,
                    countdown_seconds: 0,
                    bDashboardPlacementActive: !1,
                  }))
                : ((this.m_countdownTimeout = setTimeout(
                    this.CountdownTick,
                    1e3
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
            return o.createElement(
              s.s_,
              {
                width: void 0,
                height: n.kPanelHeight,
                interactive: !1,
                sort_order: 1e3,
              },
              o.createElement(
                "div",
                {
                  className: (0, c.LJ)("ResetSeatedCountdownParent", [
                    "Fading",
                    this.state.fading,
                  ]),
                  style: { width: n.kPixelWidth },
                },
                o.createElement(
                  "div",
                  { className: "FlexColumn" },
                  o.createElement(
                    "div",
                    { className: "ResetSeatedCountdownRow" },
                    o.createElement(
                      "div",
                      { className: "ResetSeatedCountdownText" },
                      this.state.countdown_seconds
                    )
                  ),
                  o.createElement(
                    "div",
                    { className: "ResetSeatedCountdownTextDesc" },
                    (0, l.Xx)("#Recentering_Countdown")
                  )
                )
              )
            );
          }
          render() {
            var e, t;
            if (!this.state.visible) return null;
            let r =
                0.8 *
                (null !==
                  (e =
                    null === s.Co || void 0 === s.Co
                      ? void 0
                      : s.Co.VRProperties.GetFloatProperty(
                          s.wU,
                          s.Uk.DashboardScale_Float
                        )) && void 0 !== e
                  ? e
                  : 1),
              n =
                null !==
                  (t = h.G3.settings.get(
                    "/settings/dashboard/allowFreeTransform"
                  )) &&
                void 0 !== t &&
                t;
            return this.state.bDashboardPlacementActive
              ? o.createElement(
                  s.eK,
                  { bContinuousRelatch: !0, bFreeDashboardTransform: n },
                  o.createElement(
                    s.wx,
                    { translation: { y: -0.05, z: -0.9 }, scale: r },
                    this.renderPanel()
                  )
                )
              : o.createElement(
                  s.wx,
                  { parent_path: "/user/head" },
                  o.createElement(
                    s.wx,
                    { translation: { y: -0.05, z: -0.9 }, scale: r },
                    this.renderPanel()
                  )
                );
          }
        });
        (m.kPanelHeight = 0.2),
          (m.kPixelWidth = 400),
          (m.kFadeDurationMs = 1e3),
          (0, i.gn)(
            [a.ak],
            m.prototype,
            "OnBeginResetUniverseOriginCountdown",
            null
          ),
          (0, i.gn)([a.ak], m.prototype, "CountdownTick", null),
          (0, i.gn)([a.ak], m.prototype, "HideOverlay", null),
          (m = n = (0, i.gn)([d.Pi], m));
      },
      1283: (e, t, r) => {
        "use strict";
        r.d(t, { s: () => v });
        var n = r(655),
          i = r(7294),
          o = r(7062),
          a = r(7056),
          s = r(3568),
          l = r(5211),
          d = r(4285),
          c = r(2188),
          h = r(9809),
          u = r(5177),
          p = r(8980),
          m = r(8242);
        let g = class extends i.Component {
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
              this.trackerConfig.controller_role
            );
          }
          OnControllerRoleChanged(e) {
            l.c6.SetTrackerBinding(
              this.props.trackerPath,
              this.trackerConfig.role,
              e
            );
          }
          BuzzTracker() {
            l.c6.PulseHaptics(this.trackerConfig.device_path_handle);
          }
          get deviceInfo() {
            return h.I.GetDeviceInfo(this.props.trackerPath);
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
            let r = t;
            const n = "vive_tracker";
            r.includes(n) &&
              (r = r.substring(r.indexOf(n) + n.length, r.length));
            let o = null;
            return (
              this.IsConnected()
                ? this.IsIdentifiable() ||
                  (o = (0, s.Xx)(
                    "#Settings_ViveTracker_Identify_NotIdentifiable"
                  ))
                : (o = (0, s.Xx)(
                    "#Settings_ViveTracker_Identify_NotConnected"
                  )),
              i.createElement(
                m.GV,
                { className: "SettingsItem TrackerEntry" },
                i.createElement(
                  "div",
                  { className: "Label", title: t },
                  i.createElement("span", null, r),
                  i.createElement("div", {
                    title: (0, s.Xx)(
                      this.IsConnected()
                        ? "#Settings_ViveTracker_Connected"
                        : "#Settings_ViveTracker_Disconnected"
                    ),
                    className: (0, p.LJ)(
                      "TrackerConnectionIndicator",
                      ["Connected", d.E.connected && this.IsConnected()],
                      ["Disconnected", d.E.connected && !this.IsConnected()]
                    ),
                  })
                ),
                i.createElement(
                  "div",
                  { className: (0, p.LJ)("SubsectionStem") },
                  i.createElement(
                    m.GV,
                    { title: o },
                    i.createElement(
                      u.z,
                      {
                        className: "ButtonControl",
                        enabled: this.IsIdentifiable(),
                        onClick: this.BuzzTracker,
                      },
                      (0, s.Xx)("#TrackerEditor_BuzzTracker")
                    )
                  )
                ),
                i.createElement(
                  "div",
                  { className: "Subsection WithStem" },
                  i.createElement(m.Xp, {
                    label: (0, s.Xx)("#Settings_ViveTracker_Role"),
                    items: this.props.validTrackerRoles.map((e) => ({
                      value: e,
                      sLabel: (0, s.Xx)("#" + e),
                    })),
                    value: this.trackerConfig.role,
                    onChange: this.OnTrackerRoleChanged,
                  }),
                  e.length > 0 &&
                    i.createElement(m.Xp, {
                      label: (0, s.Xx)("#Settings_ViveTracker_Hand"),
                      items: e,
                      value: this.trackerConfig.controller_role,
                      onChange: this.OnControllerRoleChanged,
                    })
                )
              )
            );
          }
        };
        (0, n.gn)([c.Fl], g.prototype, "trackerConfig", null),
          (0, n.gn)([a.ak], g.prototype, "OnTrackerRoleChanged", null),
          (0, n.gn)([a.ak], g.prototype, "OnControllerRoleChanged", null),
          (0, n.gn)([a.ak], g.prototype, "BuzzTracker", null),
          (0, n.gn)([c.Fl], g.prototype, "deviceInfo", null),
          (g = (0, n.gn)([o.Pi], g));
        let v = class extends i.Component {
          constructor(e) {
            super(e), (this.m_nGetInputStateIntervalHandle = 0);
          }
          componentDidMount() {
            (this.m_nGetInputStateIntervalHandle = window.setInterval(
              () => h.I.GetInputState(),
              2e3
            )),
              h.I.GetInputState();
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
                (e = t.trackers.map((e, r) =>
                  i.createElement(g, {
                    key: r,
                    trackerPath: e.device_path_string,
                    validTrackerRoles: t.valid_roles,
                  })
                )),
              i.createElement("div", { className: "TrackerEditorModal" }, e)
            );
          }
        };
        v = (0, n.gn)([o.Pi], v);
      },
      6698: (e, t, r) => {
        "use strict";
        r.d(t, { u: () => i });
        var n = r(7294);
        function i(e) {
          return n.createElement(
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
              e
            ),
            n.createElement(
              "g",
              null,
              n.createElement("path", {
                d: "M93.8,50v28.1c0,8.6-7,15.6-15.6,15.6H21.9c-8.6,0-15.6-7-15.6-15.6V21.9c0-8.6,7-15.6,15.6-15.6H50c1.7,0,3.1,1.4,3.1,3.1\r\n\t\t\t\ts-1.4,3.1-3.1,3.1H21.9c-5.2,0-9.4,4.2-9.4,9.4v56.3c0,5.2,4.2,9.4,9.4,9.4h56.3c5.2,0,9.4-4.2,9.4-9.4V50c0-1.7,1.4-3.1,3.1-3.1\r\n\t\t\t\tS93.8,48.3,93.8,50z M68.8,12.5h14.3L47.8,47.8c-1.2,1.2-1.2,3.2,0,4.4c0,0,0,0,0,0c1.2,1.2,3.2,1.2,4.4,0c0,0,0,0,0,0l35.3-35.3\r\n\t\t\t\tv14.3c0,1.7,1.4,3.1,3.1,3.1l0,0c1.7,0,3.1-1.4,3.1-3.1V9.4c0-0.8-0.3-1.6-0.9-2.2c-0.6-0.6-1.4-0.9-2.2-0.9H68.8\r\n\t\t\t\tc-1.7,0-3.1,1.4-3.1,3.1S67,12.5,68.8,12.5z",
              })
            )
          );
        }
      },
      2477: (e, t, r) => {
        "use strict";
        r.d(t, { Q: () => s });
        var n = r(655),
          i = r(3884),
          o = r(328),
          a = r(4820);
        const s = new (class {
          constructor() {
            (this.m_SteamVR_Provider = new o.fH(this, a.Al)),
              (this.m_Steam_Client = new o.q0(this)),
              (this.m_Steam_ClientMethods = new a.x2(this.m_Steam_Client)),
              (this.m_mailbox = new i.Nv()),
              (this.m_unNextVRGamepadUIMessageId = 1);
          }
          get Steam() {
            return this.m_Steam_ClientMethods;
          }
          get SteamVR() {
            return this.m_SteamVR_Provider;
          }
          Init() {
            return (0, n.mG)(this, void 0, void 0, function* () {
              yield this.m_mailbox.Init("vrgamepadui_messages"),
                this.m_mailbox.RegisterHandler("vrgamepadui_message", (e) => {
                  const t = (0, o.u8)(e.header);
                  t &&
                    (null == t.response_to_message_id
                      ? this.m_SteamVR_Provider.HandleVRGamepadUIMessageRequest(
                          t,
                          e.payload
                        )
                      : this.m_Steam_Client.HandleVRGamepadUIMessageResponse(
                          t,
                          e.payload
                        ));
                });
            });
          }
          CreateVRGamepadUIMessageId() {
            return this.m_unNextVRGamepadUIMessageId++;
          }
          SendVRGamepadUIMessage(e, t) {
            if (!this.m_mailbox.connected) return o.n5.SendFailure;
            let r, n;
            try {
              r = a.Vg.fromObject(e).serializeBase64String();
            } catch (e) {
              return o.n5.HeaderSerializationFailure;
            }
            try {
              n = t.serializeBase64String();
            } catch (e) {
              return o.n5.PayloadSerializationFailure;
            }
            try {
              this.m_mailbox.SendMessage("web_steam_mailbox", {
                type: "vrgamepadui_message",
                header: r,
                payload: n,
              });
            } catch (e) {
              return o.n5.SendFailure;
            }
            return o.n5.Success;
          }
          IsConnected() {
            return this.m_mailbox.connected;
          }
        })();
      },
      9462: () => {},
    },
    r = {};
  function n(e) {
    var i = r[e];
    if (void 0 !== i) return i.exports;
    var o = (r[e] = { id: e, exports: {} });
    return t[e].call(o.exports, o, o.exports, n), o.exports;
  }
  (n.m = t),
    (e = []),
    (n.O = (t, r, i, o) => {
      if (!r) {
        var a = 1 / 0;
        for (c = 0; c < e.length; c++) {
          for (var [r, i, o] = e[c], s = !0, l = 0; l < r.length; l++)
            (!1 & o || a >= o) && Object.keys(n.O).every((e) => n.O[e](r[l]))
              ? r.splice(l--, 1)
              : ((s = !1), o < a && (a = o));
          if (s) {
            e.splice(c--, 1);
            var d = i();
            void 0 !== d && (t = d);
          }
        }
        return t;
      }
      o = o || 0;
      for (var c = e.length; c > 0 && e[c - 1][2] > o; c--) e[c] = e[c - 1];
      e[c] = [r, i, o];
    }),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
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
    (n.j = 987),
    (() => {
      var e = { 987: 0 };
      n.O.j = (t) => 0 === e[t];
      var t = (t, r) => {
          var i,
            o,
            [a, s, l] = r,
            d = 0;
          if (a.some((t) => 0 !== e[t])) {
            for (i in s) n.o(s, i) && (n.m[i] = s[i]);
            if (l) var c = l(n);
          }
          for (t && t(r); d < a.length; d++)
            (o = a[d]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return n.O(c);
        },
        r = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (n.nc = void 0);
  var i = n.O(void 0, [968, 683], () => n(5103));
  i = n.O(i);
})();
//# sourceMappingURL=keyboard.js.map?v=efe99553cb3c10f53975
