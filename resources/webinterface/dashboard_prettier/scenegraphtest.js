var CLSTAMP = "9839182";
(() => {
  "use strict";
  var e,
    t = {
      8969: (e, t, r) => {
        var o = r(1635),
          i = r(6540),
          n = r(5338);
        function s(e, t, r) {
          return {
            get() {
              let e = r.value.bind(this);
              return (
                Object.prototype.hasOwnProperty.call(this, t) ||
                  Object.defineProperty(this, t, { value: e }),
                e
              );
            },
          };
        }
        class a {
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
              let r = "ws://127.0.0.1:27062";
              this.m_sWebSecret && (r += "?secret=" + this.m_sWebSecret),
                (this.m_fnConnectResolve = e),
                (this.m_wsWebSocketToServer = new WebSocket(r)),
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
            return (0, o.sH)(this, void 0, void 0, function* () {
              return (
                (this.m_sMailboxName = a.EnsureUniqueName(e)),
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
                    (e) => e.nMessageId == t.message_id,
                  ))
                : console.log(
                    `Received a ${t.type} message, but didn't have a matching message_id. Did the other end forget to mirror message_id?`,
                  ),
                (r = !0);
            }
            r || console.log("Received unhandled message: ", t);
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
            return new Promise((r, o) => {
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
            return (0, o.sH)(this, void 0, void 0, function* () {
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
          SendMessageAndWaitForResponse(e, t, r) {
            let o = Object.assign({}, t);
            return (
              null == o.returnAddress &&
                (o.returnAddress = this.m_sMailboxName),
              (o.message_id = this.m_nNextMessageNumber++),
              this.SendMessage(e, o),
              this.WaitForMessage(r, o.message_id)
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
        (a.s_nNextMailboxNumber = 1),
          (0, o.Cg)([s], a.prototype, "OpenWebSocketToHost", null),
          (0, o.Cg)([s], a.prototype, "OnWebSocketOpen", null),
          (0, o.Cg)([s], a.prototype, "OnWebSocketClose", null),
          (0, o.Cg)([s], a.prototype, "WebSocketSend", null),
          (0, o.Cg)([s], a.prototype, "OnWebSocketMessage", null);
        var l, d, p, c;
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
          })(p || (p = {})),
          (function (e) {
            (e[(e.Seated = 0)] = "Seated"),
              (e[(e.Standing = 1)] = "Standing"),
              (e[(e.RawAndUncalibrated = 2)] = "RawAndUncalibrated");
          })(c || (c = {}));
        var u, h, m, _, g, v, f, b, S, y, D, R, C, I, M, B, w, x, E, k, P;
        function N(e, t) {
          let r = e.getAttribute(t);
          if (r && r.length > 0) {
            if ("undefined" == r) return;
            let e = [];
            for (let t of r.split(" ")) 0 != t.length && e.push(parseFloat(t));
            if (e.length > 0) return e;
          }
        }
        function T(e, t) {
          let r = e.getAttribute(t);
          if (r && r.length > 0) return parseFloat(r);
        }
        function F(e, t) {
          let r = e.getAttribute(t);
          if (r && r.length > 0) return parseInt(r);
        }
        function O(e, t) {
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
        function V(e, t) {
          return Q(A(e, t));
        }
        function L(e, t) {
          let r = { type: e, properties: {} };
          return (
            t.id && (r.properties.id = Q(t.id)),
            (r.properties.sgid = F(t, "sgid")),
            r
          );
        }
        function U(e, t) {
          let [r, o] = (function (e, t) {
              let r = t.buildNode;
              if (r) return r(e, t);
              let o = Object.assign({}, e),
                i = null;
              switch (t.nodeName.toUpperCase()) {
                case "VSG-TRANSFORM":
                  (i = L("transform", t)),
                    (i.properties.translation = N(t, "translation")),
                    (i.properties.rotation = N(t, "rotation")),
                    (i.properties.scale = N(t, "scale")),
                    (i.properties["curvature-pitch"] = T(t, "curvature-pitch")),
                    (i.properties["transform-path"] = A(t, "transform-path")),
                    (i.properties["projection-constraint"] = F(
                      t,
                      "projection-constraint",
                    )),
                    (i.properties["invert-parent-panel-pitch"] = O(
                      t,
                      "invert-parent-panel-pitch",
                    )),
                    (i.properties["ignore-parent-scale"] = O(
                      t,
                      "ignore-parent-scale",
                    )),
                    (i.properties["parent-path"] = A(t, "parent-path")),
                    (i.properties["parent-origin"] = A(t, "parent-origin")),
                    (i.properties["parent-id"] = V(t, "parent-id"));
                  break;
                case "VSG-TRACKING-STATE-VISIBILITY":
                  (i = L("trackingstatevisibility", t)),
                    (i.properties["visible-0dof"] = O(t, "visible-0dof")),
                    (i.properties["visible-3dof"] = O(t, "visible-3dof")),
                    (i.properties["visible-6dof"] = O(t, "visible-6dof"));
                  break;
                case "VSG-ELASTIC-HEAD-TRANSFORM":
                  (i = L("elasticheadtransform", t)),
                    (i.properties["start-angle-threshold"] = T(
                      t,
                      "start-angle-threshold",
                    )),
                    (i.properties["stop-angle-threshold"] = T(
                      t,
                      "stop-angle-threshold",
                    )),
                    (i.properties["ease-in-time"] = T(t, "ease-in-time")),
                    (i.properties["ease-in-power"] = T(t, "ease-in-power")),
                    (i.properties["ease-out-angle-threshold"] = T(
                      t,
                      "ease-out-angle-threshold",
                    )),
                    (i.properties["ease-out-power"] = T(t, "ease-out-power")),
                    (i.properties["min-angular-velocity"] = T(
                      t,
                      "min-angular-velocity",
                    )),
                    (i.properties["max-angular-velocity"] = T(
                      t,
                      "max-angular-velocity",
                    )),
                    (i.properties["lock-to-horizon"] = O(t, "lock-to-horizon")),
                    (i.properties["translation-behavior"] = F(
                      t,
                      "translation-behavior",
                    ));
                  break;
                case "VSG-LINE":
                  (i = L("line", t)),
                    (i.properties["target-id"] = V(t, "target-id")),
                    (i.properties.thickness = T(t, "thickness")),
                    (i.properties["start-buffer"] = T(t, "start-buffer")),
                    (i.properties["end-buffer"] = T(t, "end-buffer"));
                  break;
                case "VSG-LINE-CONSTRAINED-TRANSFORM":
                  (i = L("line-constrained-transform", t)),
                    (i.properties["target-id"] = V(t, "target-id")),
                    (i.properties["source-id"] = V(t, "source-id")),
                    (i.properties["source-distance"] = T(t, "source-distance")),
                    (i.properties["target-limit"] = T(t, "target-limit"));
                  break;
                case "VSG-CALLOUT-TRANSFORM":
                  (i = L("callout-transform", t)),
                    (i.properties.offset = N(t, "offset"));
                  break;
                case "VSG-HEAD-FACING-TRANSFORM":
                  i = L("head-facing-transform", t);
                  break;
                case "VSG-PIN-TO-VIEW-TRANSFORM":
                  (i = L("pin-to-view-transform", t)),
                    (i.properties["offscreen-z-depth"] = T(
                      t,
                      "offscreen-z-depth",
                    )),
                    (i.properties["off-axis-limit"] = T(t, "off-axis-limit")),
                    (i.properties["transition-limit"] = T(
                      t,
                      "transition-limit",
                    ));
                  break;
                case "VSG-GRAB-TRANSFORM":
                  (i = L("grab-transform", t)),
                    (i.properties["parent-path"] = A(t, "parent-path")),
                    (i.properties.translation = N(t, "translation")),
                    (i.properties.rotation = N(t, "rotation")),
                    (i.properties.scale = N(t, "scale")),
                    (i.properties["should-head-align"] = O(
                      t,
                      "should-head-align",
                    )),
                    (i.properties["stop-distance"] = T(t, "stop-distance")),
                    (i.properties["start-angle"] = T(t, "start-angle")),
                    (i.properties["start-quat-difference"] = T(
                      t,
                      "start-quat-difference",
                    )),
                    (i.properties["stop-quat-difference"] = T(
                      t,
                      "stop-quat-difference",
                    )),
                    (i.properties["scale-margin"] = T(t, "scale-margin")),
                    (i.properties["lerp-speed"] = T(t, "lerp-speed")),
                    (i.properties["min-distance"] = T(t, "min-distance")),
                    (i.properties["max-distance"] = T(t, "max-distance")),
                    (i.properties["one-to-one-radius"] = T(
                      t,
                      "one-to-one-radius",
                    )),
                    (i.properties["max-x-squared-contribution"] = T(
                      t,
                      "max-x-squared-contribution",
                    )),
                    (i.properties["acceleration-factor-x-coefficient"] = T(
                      t,
                      "acceleration-factor-x-coefficient",
                    )),
                    (i.properties["acceleration-factor-x-squared-coefficient"] =
                      T(t, "acceleration-factor-x-squared-coefficient")),
                    (i.properties["acceleration-factor-scale-term"] = T(
                      t,
                      "acceleration-factor-scale-term",
                    ));
              }
              return [o, i];
            })(e, t),
            i = [];
          for (let e = 0; e < t.children.length; e++) {
            let o = t.children.item(e);
            if (o.children) {
              let e = U(r, o);
              e && (i = i.concat(e));
            }
          }
          return r.bShouldAbort
            ? null
            : o
              ? (i.length > 0 && (o.children = i), [o])
              : i.length > 0
                ? 1 == i.length
                  ? i
                  : [{ children: i }]
                : null;
        }
        !(function (e) {
          (e[(e.Invalid = 0)] = "Invalid"),
            (e[(e.RecenterCountdown = 1)] = "RecenterCountdown"),
            (e[(e.FloorAdjustExisting = 2)] = "FloorAdjustExisting"),
            (e[(e.RoomSetupFloor = 3)] = "RoomSetupFloor"),
            (e[(e.ClearRoomSetup = 4)] = "ClearRoomSetup");
        })(u || (u = {})),
          (function (e) {
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
          })(h || (h = {})),
          (function (e) {
            (e[(e.Activated = 0)] = "Activated"),
              (e[(e.Deactivated = 1)] = "Deactivated");
          })(m || (m = {})),
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
              (e[(e.EnableControlBarKeyboard = 16777216)] =
                "EnableControlBarKeyboard"),
              (e[(e.EnableControlBarClose = 33554432)] =
                "EnableControlBarClose"),
              (e[(e.MinimalControlBar = 67108864)] = "MinimalControlBar"),
              (e[(e.EnableClickStabilization = 134217728)] =
                "EnableClickStabilization"),
              (e[(e.MultiCursor = 268435456)] = "MultiCursor");
          })(_ || (_ = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"), (e[(e.Mouse = 1)] = "Mouse");
          })(g || (g = {})),
          (function (e) {
            (e[(e.Invalid = 0)] = "Invalid"),
              (e[(e.HMD = 1)] = "HMD"),
              (e[(e.Controller = 2)] = "Controller"),
              (e[(e.GenericTracker = 3)] = "GenericTracker"),
              (e[(e.TrackingReference = 4)] = "TrackingReference"),
              (e[(e.DisplayRedirect = 5)] = "DisplayRedirect");
          })(v || (v = {})),
          (function (e) {
            (e[(e.Unknown = 0)] = "Unknown"),
              (e[(e.NVIDIA = 1)] = "NVIDIA"),
              (e[(e.AMD = 2)] = "AMD");
          })(f || (f = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.Starting = 1)] = "Starting"),
              (e[(e.Quitting = 2)] = "Quitting"),
              (e[(e.Running = 3)] = "Running"),
              (e[(e.Waiting = 4)] = "Waiting");
          })(b || (b = {})),
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
          })(S || (S = {})),
          (function (e) {
            (e[(e.Normal = 0)] = "Normal"),
              (e[(e.Password = 1)] = "Password"),
              (e[(e.Submit = 2)] = "Submit");
          })(y || (y = {})),
          (function (e) {
            (e[(e.SingleLine = 0)] = "SingleLine"),
              (e[(e.MultipleLines = 1)] = "MultipleLines");
          })(D || (D = {})),
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
          })(R || (R = {})),
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
          })(C || (C = {})),
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
          })(M || (M = {})),
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
          })(B || (B = {})),
          (function (e) {
            e[(e.Hostname = 0)] = "Hostname";
          })(w || (w = {})),
          (function (e) {
            (e[(e.Unavailable = 0)] = "Unavailable"),
              (e[(e.Active = 1)] = "Active"),
              (e[(e.Off = 2)] = "Off");
          })(x || (x = {})),
          (function (e) {
            (e[(e.Default = 1)] = "Default"), (e[(e.Floor = 2)] = "Floor");
          })(E || (E = {})),
          (function (e) {
            (e[(e.Inactive = 0)] = "Inactive"),
              (e[(e.PendingReset = 1)] = "PendingReset"),
              (e[(e.PendingResetIfNeeded = 2)] = "PendingResetIfNeeded"),
              (e[(e.Default = 3)] = "Default"),
              (e[(e.CV = 4)] = "CV"),
              (e[(e.Manual = 5)] = "Manual");
          })(k || (k = {})),
          (function (e) {
            (e[(e.Small = 0)] = "Small"),
              (e[(e.Medium = 1)] = "Medium"),
              (e[(e.Large = 2)] = "Large"),
              (e[(e.Gigantic = 3)] = "Gigantic"),
              (e[(e.Standing = 4)] = "Standing");
          })(P || (P = {}));
        let H,
          W,
          G,
          z,
          q = [],
          j = null,
          K = null,
          X = !0;
        function Q(e) {
          return e
            ? (function (e) {
                return e && e.includes("::");
              })(e)
              ? e
              : Y() + "::" + e
            : null;
        }
        function Y() {
          var e;
          return null !==
            (e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VROverlay.ThisOverlayKey()) && void 0 !== e
            ? e
            : H;
        }
        function J() {
          j ||
            (j = window.setTimeout(
              () =>
                (0, o.sH)(this, void 0, void 0, function* () {
                  let e = document.body;
                  W && (e = W);
                  let t = {
                    type: "root",
                    rootproperties: {
                      relatchDashboardTransform: z,
                      allowDismissOnClick: X,
                      sceneColorCorrection: null,
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
                  K ||
                    (console.log("Initializing sg_mailbox"),
                    (K = new a()),
                    yield K.Init("sg_mailbox", G));
                  let r = {
                    type: "update_scene_graph",
                    owning_overlay_key: Y(),
                    scene_graph: t,
                    retired_sgids: q,
                  };
                  K.SendMessage("vrcompositor_systemlayer", r),
                    (j = null),
                    (q = []),
                    (z = !1);
                }),
              0,
            ));
        }
        function $(e, t) {
          return e ? { x: e.x ? e.x : t.x, y: e.y ? e.y : t.y } : t;
        }
        function Z(e, t) {
          return e
            ? { x: e.x ? e.x : t.x, y: e.y ? e.y : t.y, z: e.z ? e.z : t.z }
            : t;
        }
        function ee(e, t) {
          return e
            ? { r: e.r ? e.r : t.r, g: e.g ? e.g : t.g, b: e.b ? e.b : t.b }
            : t;
        }
        function te(e) {
          if (e) return [e.x, e.y];
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
        function oe(e) {
          if (e) return e.w + " " + e.x + " " + e.y + " " + e.z;
        }
        function ie(e) {
          return e && void 0 !== e.to;
        }
        function ne(e) {
          return "number" == typeof e
            ? e
            : (t = e) && void 0 !== t.to
              ? [e.channel, e.interp, e.from, e.to]
              : void 0;
          var t;
        }
        function se(e) {
          return ie(e)
            ? [
                e.channel,
                e.interp,
                e.from ? e.from[0] : void 0,
                e.from ? e.from[1] : void 0,
                e.from ? e.from[2] : void 0,
                e.to ? e.to[0] : void 0,
                e.to ? e.to[1] : void 0,
                e.to ? e.to[2] : void 0,
              ]
            : void 0;
        }
        class ae extends i.Component {
          constructor(e) {
            var t;
            super(e),
              (this.m_domRef = i.createRef()),
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
            return L(this.getNodeType(), e);
          }
          getCurrentRootElement() {
            return this.m_domRef.current;
          }
          componentDidMount() {
            this.m_buildNodeOverride &&
              (this.m_domRef.current.buildNode = this.m_buildNodeOverride),
              J();
          }
          componentDidUpdate() {
            J();
          }
          componentWillUnmount() {
            var e;
            (e = this.m_SGID),
              q.push(e),
              J(),
              this.m_domRef.current &&
                this.m_buildNodeOverride &&
                delete this.m_domRef.current.buildNode;
          }
          render() {
            return i.cloneElement(this.internalRender(), {
              id: this.props.id,
              "vsg-type": this.getNodeType(),
              sgid: this.m_SGID,
              ref: this.m_domRef,
            });
          }
          internalRender() {
            return this.m_buildNodeOverride
              ? i.createElement("vsg-node", null, this.props.children)
              : null;
          }
        }
        var le,
          de,
          pe,
          ce,
          ue,
          he,
          me,
          _e,
          ge,
          ve,
          fe,
          be,
          Se,
          ye,
          De,
          Re,
          Ce,
          Ie,
          Me;
        !(function (e) {
          (e[(e.RoomSetupFloor = 1)] = "RoomSetupFloor"),
            (e[(e.Locomotion = 2)] = "Locomotion"),
            (e[(e.QuickRecenter = 4)] = "QuickRecenter");
        })(le || (le = {}));
        (0, o.Cg)(
          [s],
          class extends ae {
            constructor(e) {
              super(e), super.setBuildNodeOverride(this.buildNode);
            }
            getNodeType() {
              return "constructglobals";
            }
            buildNode(e, t) {
              const r = this.createSgNode(t);
              return (
                (r.properties["scene-color-mult"] = ne(
                  this.props["scene-color-mult"],
                )),
                (r.properties["floor-color-mult"] = ne(
                  this.props["floor-color-mult"],
                )),
                (r.properties["scene-reflection-mult"] = ne(
                  this.props["scene-reflection-mult"],
                )),
                (r.properties["skydome-mult"] = ne(this.props["skydome-mult"])),
                (r.properties["roomview-mult"] = se(
                  this.props["roomview-mult"],
                )),
                (r.properties["allowed-action-sets"] = this.props[
                  "allowed-action-sets"
                ].reduce((e, t) => e | t, 0)),
                (r.properties["inhibit-bounds-rendering"] =
                  this.props["inhibit-bounds-rendering"]),
                (r.properties["pause-notifications"] =
                  this.props["pause-notifications"]),
                (r.properties["roomview-enable-override"] =
                  this.props["roomview-enable-override"]),
                (r.properties["systemlayer-msaa-enable-override"] =
                  this.props["systemlayer-msaa-enable-override"]),
                (r.properties["construct-alpha-override"] =
                  this.props["construct-alpha-override"]),
                [e, r]
              );
            }
          }.prototype,
          "buildNode",
          null,
        );
        class Be extends ae {
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
        (0, o.Cg)([s], Be.prototype, "buildNode", null);
        (0, o.Cg)(
          [s],
          class extends ae {
            constructor(e) {
              super(e), super.setBuildNodeOverride(this.buildNode);
            }
            getNodeType() {
              return "mountedscenegraph";
            }
            buildNode(e, t) {
              const r = this.createSgNode(t);
              return (
                (r.properties.mountable_id = Q(this.props.mountedId)),
                this.props.fDashboardScale &&
                  (r.properties.dashboard_scale = this.props.fDashboardScale),
                [e, r]
              );
            }
          }.prototype,
          "buildNode",
          null,
        );
        class we extends ae {
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
            var r;
            const o = this.createSgNode(t);
            return (
              (o.properties.tab_name =
                null !== (r = this.props.tabName) && void 0 !== r ? r : ""),
              (o.properties.mountable_id = Q(this.m_sMountableUnqualifiedID)),
              (o.properties.icon_uri = this.props.iconUri),
              (o.properties.icon_overlay_key = this.props.iconOverlayKey),
              (o.properties.summon_overlay_key = this.props.summonOverlayKey),
              [e, o]
            );
          }
          internalRender() {
            return i.createElement(
              "vsg-node",
              { id: this.props.id },
              i.createElement(
                Be,
                { id: this.m_sMountableUnqualifiedID },
                this.props.children,
              ),
            );
          }
        }
        (0, o.Cg)([s], we.prototype, "buildNode", null);
        class xe extends ae {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return Array.isArray(this.props.color) &&
              this.props.color.length > 1
              ? "tint-anim"
              : "tint";
          }
          buildNode(e, t) {
            const r = this.createSgNode(t);
            return (
              this.props.color
                ? "string" == typeof this.props.color
                  ? (r.properties.color = this.props.color)
                  : Array.isArray(this.props.color)
                    ? (this.props.color.length > 0 &&
                      "string" == typeof this.props.color[0]
                        ? (r.properties.color =
                            this.props.color.length > 1
                              ? this.props.color
                              : this.props.color[0])
                        : (r.properties.color = this.props.color
                            .map((e) => [e.r, e.g, e.b])
                            .reduce((e, t) => e.concat(t), [])),
                      (r.properties["animation-seconds"] =
                        this.props.animationSeconds))
                    : (r.properties.color = [
                        this.props.color.r,
                        this.props.color.g,
                        this.props.color.b,
                      ])
                : (r.properties.color = [1, 1, 1]),
              [e, r]
            );
          }
        }
        (0, o.Cg)([s], xe.prototype, "buildNode", null);
        class Ee extends ae {
          constructor(e) {
            super(e), super.setBuildNodeOverride(this.buildNode);
          }
          getNodeType() {
            return "opacity";
          }
          buildNode(e, t) {
            const r = this.createSgNode(t);
            return (r.properties.opacity = ne(this.props.value)), [e, r];
          }
        }
        (0, o.Cg)([s], Ee.prototype, "buildNode", null),
          (function (e) {
            (e[(e.Seated = 0)] = "Seated"),
              (e[(e.Standing = 1)] = "Standing"),
              (e[(e.Raw = 2)] = "Raw");
          })(de || (de = {}));
        class ke extends ae {
          constructor(e) {
            super(e);
            if (
              (void 0 === e.parent_path ? 0 : 1) +
                (void 0 === e.parent_origin ? 0 : 1) +
                (void 0 === e.parent_id ? 0 : 1) >
              1
            )
              throw new Error(
                "Transform cannot have more than one parent_ property set.",
              );
          }
          internalRender() {
            var e;
            let t, r, o;
            var n, s;
            this.props.transform
              ? ((t = re(this.props.transform.translation)),
                (r = this.props.transform.rotation),
                (o = this.props.transform.scale))
              : ((t = ie(this.props.translation)
                  ? null === (e = se(this.props.translation)) || void 0 === e
                    ? void 0
                    : e.join(" ")
                  : re(Z(this.props.translation, { x: 0, y: 0, z: 0 }))),
                (r =
                  this.props.rotation && "w" in this.props.rotation
                    ? this.props.rotation
                    : (function (e) {
                        if (void 0 === e) return;
                        let t = 0.5 * e.x,
                          r = 0.5 * e.y,
                          o = 0.5 * e.z,
                          i = Math.cos(t),
                          n = Math.cos(r),
                          s = Math.cos(o),
                          a = Math.sin(t),
                          l = Math.sin(r),
                          d = Math.sin(o);
                        return {
                          w: i * n * s + a * l * d,
                          x: a * n * s + i * l * d,
                          y: i * l * s - a * n * d,
                          z: i * n * d - a * l * s,
                        };
                      })(
                        ((n = Z(this.props.rotation, { x: 0, y: 0, z: 0 })),
                        (s = Math.PI / 180),
                        { x: n.x * s, y: n.y * s, z: n.z * s }),
                      )),
                (o =
                  "number" == typeof this.props.scale
                    ? {
                        x: this.props.scale,
                        y: this.props.scale,
                        z: this.props.scale,
                      }
                    : Z(this.props.scale, { x: 1, y: 1, z: 1 })));
            let a = oe(r),
              l = re(o);
            return i.createElement(
              "vsg-transform",
              {
                translation: t,
                rotation: a,
                scale: l,
                "curvature-pitch": this.props.curvature_pitch,
                "invert-parent-panel-pitch":
                  this.props.invert_parent_panel_pitch,
                "ignore-parent-scale": this.props.ignore_parent_scale,
                "transform-path": this.props.transform_path,
                "parent-path": this.props.parent_path,
                "parent-origin": de[this.props.parent_origin],
                "parent-id": this.props.parent_id,
              },
              this.props.children,
            );
          }
        }
        function Pe(e) {
          if (e) return [e.u, e.v];
        }
        function Ne(e) {
          switch (e) {
            case pe.TopLeft:
              return { x: -1, y: 1 };
            case pe.TopCenter:
              return { x: 0, y: 1 };
            case pe.TopRight:
              return { x: 1, y: 1 };
            case pe.CenterLeft:
              return { x: -1, y: 0 };
            case pe.Center:
              return { x: 0, y: 0 };
            case pe.CenterRight:
              return { x: 1, y: 0 };
            case pe.BottomLeft:
              return { x: -1, y: -1 };
            case pe.BottomCenter:
              return { x: 0, y: -1 };
            case pe.BottomRight:
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
        })(pe || (pe = {})),
          (function (e) {
            (e[(e.Auto = 0)] = "Auto"), (e[(e.SingleTap = 1)] = "SingleTap");
          })(ce || (ce = {})),
          (function (e) {
            (e[(e.Mono = 0)] = "Mono"),
              (e[(e.Parallel = 1)] = "Parallel"),
              (e[(e.Crossed = 2)] = "Crossed"),
              (e[(e.Panorama = 3)] = "Panorama"),
              (e[(e.StackedPanorama = 4)] = "StackedPanorama");
          })(ue || (ue = {})),
          (function (e) {
            (e[(e.Visible = 0)] = "Visible"),
              (e[(e.SkipInSceneGraph = 1)] = "SkipInSceneGraph"),
              (e[(e.Hidden = 2)] = "Hidden"),
              (e[(e.InvisibleButIntersectable = 3)] =
                "InvisibleButIntersectable");
          })(he || (he = {})),
          (function (e) {
            (e[(e.Default = 0)] = "Default"),
              (e[(e.Disabled = 1)] = "Disabled"),
              (e[(e.Low = 2)] = "Low");
          })(me || (me = {}));
        class Te extends ae {
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
              o = void 0 !== this.props.target_dpi_panel_id,
              i =
                void 0 !== this.props.rendermodel_component_device_index ||
                void 0 !== this.props.rendermodel_component_name;
            if (
              i &&
              (void 0 === this.props.rendermodel_component_device_index ||
                void 0 === this.props.rendermodel_component_name)
            )
              throw new Error(
                "Panel requires both rendermodel_component_device_index and rendermodel_component_name to be a rendermodel texture.",
              );
            const n = [t, r, o, i].filter((e) => e).length,
              s =
                "an (explicit width and/or height), an explicit meters_per_pixel, a target_panel_dpi panel ID, or a rendermodel name";
            if (0 == n)
              throw new Error(
                `Panel requires one of the following props: ${s}.`,
              );
            if (n > 1)
              throw new Error(
                `Panel cannot have more of the following of the following props: ${s}.`,
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
            Te.s_bPanelsAreDirty = !0;
          }
          componentDidMount() {
            super.componentDidMount(),
              (this.m_resizeObserver = new ResizeObserver(
                this.onResizeObserved,
              )),
              this.m_resizeObserver.observe(this.getCurrentRootElement()),
              (this.m_nEmbeddedIndex = Fe.Current().addEmbeddedPanelUVs(this)),
              (Te.s_bPanelsAreDirty = !0),
              this.getCurrentRootElement().addEventListener(
                "mousedown",
                this.onPanelMouseDown,
              ),
              this.forceUpdate();
          }
          onResizeObserved(e, t) {
            Fe.Current().forceLayoutUpdate();
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
              (Te.s_bPanelsAreDirty = !0),
              Fe.Current().removeEmbeddedPanelUVs(this),
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
          createOverdragBlockingElement(e, t, r, o) {
            let i = document.createElement("div");
            (i.style.position = "absolute"),
              (i.style.top = t + "px"),
              (i.style.left = e + "px"),
              (i.style.width = r + "px"),
              (i.style.height = o + "px"),
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
              : he.Visible;
          }
          buildNode(e, t) {
            var r, o, i, n, s, a, l;
            if (
              !(
                this.visibility == he.Visible ||
                this.visibility == he.InvisibleButIntersectable
              )
            )
              return [e, null];
            let d = Object.assign(Object.assign({}, e), {
                bInsideReparentedPanel: !1,
                currentPanel: this,
              }),
              p = this.createSgNode(t),
              c = { x: 0, y: 0 };
            c =
              "object" == typeof this.props.origin
                ? $(this.props.origin, { x: 0, y: 0 })
                : Ne(this.props.origin);
            const u = this.props.overlay_key,
              h = Y();
            return (
              u && u.length > 0
                ? (p.properties.key = u)
                : h
                  ? (p.properties.key = h)
                  : (p.properties.overlay_handle =
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.VROverlay.ThisOverlayHandle()),
              (p.properties.uv_min =
                null !== (r = Pe(this.m_UVsMin)) && void 0 !== r ? r : void 0),
              (p.properties.uv_max =
                null !== (o = Pe(this.m_UVsMax)) && void 0 !== o ? o : void 0),
              (p.properties.width =
                null !== (i = this.props.width) && void 0 !== i ? i : void 0),
              (p.properties.height =
                null !== (n = this.props.height) && void 0 !== n ? n : void 0),
              (p.properties["scale-index"] =
                null !== (s = this.props.scale_index) && void 0 !== s ? s : 0),
              (p.properties["min-width"] =
                null !== (a = this.props.min_width) && void 0 !== a
                  ? a
                  : void 0),
              (p.properties["target-width-anchor-id"] = Q(
                this.props.target_width_anchor_id,
              )),
              (p.properties["target-dpi-panel-id"] = Q(
                this.props.target_dpi_panel_id,
              )),
              (p.properties["target-dpi-multiplier"] =
                this.props.target_dpi_multiplier),
              (p.properties["meters-per-pixel"] = this.props.meters_per_pixel),
              (p.properties["subview-parent-panel-key"] =
                this.props.subview_parent_panel_key),
              (p.properties.curvature = this.props.curvature),
              (p.properties["curvature-origin-id"] = Q(
                this.props.curvature_origin_id,
              )),
              (p.properties.spherical = this.props.spherical),
              (p.properties.interactive = this.props.interactive),
              (p.properties.scrollable = this.props.scrollable),
              (p.properties.undocked = this.props.undocked),
              (p.properties.modal = this.props.modal),
              (p.properties["requires-laser"] = this.props.requires_laser),
              (p.properties["allow-input-capture"] =
                this.props.allow_input_capture),
              (p.properties["lasermouse-filtering"] =
                null === (l = this.props) || void 0 === l
                  ? void 0
                  : l.lasermouse_filtering),
              (p.properties["hide-laser-when-clicking"] =
                this.props.hide_lasermouse_when_clicking),
              (p.properties["make-overlays-interactive-if-visible"] =
                this.props.make_overlays_interactive_if_visible),
              (p.properties["is-grab-handle"] = this.props.is_grab_handle),
              (p.properties["embedded-uv-index"] = this.m_nEmbeddedIndex),
              (p.properties.origin = te(c)),
              (p.properties.debug_name = this.props.debug_name),
              (p.properties.sampler = this.props.sampler),
              (p.properties.reflect = this.props.reflect),
              (p.properties.stereoscopy = this.props.stereoscopy),
              (p.properties.rendermodel_component_device_index =
                this.props.rendermodel_component_device_index),
              (p.properties.rendermodel_component_name =
                this.props.rendermodel_component_name),
              (p.properties["texture-id"] = Q(this.props.texture_id)),
              (p.properties["sort-order"] = this.props.sort_order),
              (p.properties["sort-depth-bias"] = this.props.sort_depth_bias),
              (p.properties.visibility = this.visibility),
              [d, p]
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
            return i.createElement(
              "vsg-node",
              {
                style: {
                  display: this.visibility == he.Hidden ? "none" : null,
                },
              },
              this.props.children,
            );
          }
        }
        (Te.s_bPanelsAreDirty = !1),
          (0, o.Cg)([s], Te.prototype, "onResizeObserved", null),
          (0, o.Cg)([s], Te.prototype, "onPanelMouseDown", null),
          (0, o.Cg)([s], Te.prototype, "onWindowMouseUp", null),
          (0, o.Cg)([s], Te.prototype, "buildNode", null),
          (function (e) {
            (e[(e.Canvas = 0)] = "Canvas"), (e[(e.Image = 1)] = "Image");
          })(_e || (_e = {}));
        class Fe extends i.Component {
          static get IsSceneGraphApp() {
            return null !== Fe.Current();
          }
          static Current() {
            return Fe.s_Current;
          }
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
              (Fe.s_Current = this),
              (this.state = {
                bFontsLoaded: !1,
                nForcedUpdateNumber: 0,
                bShowDebugPointer: !1,
                eRenderMode: VRHTML.VRUtil.BSupportsCEFCanvas()
                  ? _e.Canvas
                  : _e.Image,
              }),
              (this.m_DomRef = i.createRef()),
              (this.m_scalingDomRef = i.createRef()),
              (this.m_CanvasRef = i.createRef()),
              (this.m_EmbeddedDataImgRef = i.createRef()),
              (this.m_DebugPointerRef = i.createRef());
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
            (Te.s_bPanelsAreDirty = !0),
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
              Math.floor((this.m_nEmbeddedDataWidth - 1) / 3),
            );
            for (let e = 0; e < r; e++)
              this.m_rAvailableEmbeddedIndicesQueue.push(e);
            var o, i, n;
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
                ((o = this.props.owning_overlay_key),
                (i = this.m_DomRef.current),
                (n = this.props.web_secret),
                (H = o),
                (W = i),
                (G = n),
                console.log("Setting owning overlay key to " + o));
          }
          componentWillUnmount() {
            let e = this.m_DomRef.current.ownerDocument;
            e.body.classList.remove("SGApp"),
              document.documentElement.classList.remove("VROverlay"),
              this.m_Observer && this.m_Observer.disconnect(),
              e.removeEventListener("mousemove", this.onMouseMove);
          }
          render() {
            const e = this.state.eRenderMode == _e.Image,
              t = this.state.eRenderMode == _e.Canvas;
            let r = [];
            return (
              this.state.bShowDebugPointer && r.push("ShowDebugPointer"),
              i.createElement(
                "vsg-app",
                {
                  class: r.join(" "),
                  ref: this.m_DomRef,
                  "sg-forced-update-number": this.state.nForcedUpdateNumber,
                },
                i.createElement("div", {
                  className: "DebugPointer",
                  ref: this.m_DebugPointerRef,
                }),
                e &&
                  i.createElement("img", {
                    ref: this.m_EmbeddedDataImgRef,
                    className: "EmbeddedData",
                    height: Fe.k_EmbeddedDataRows,
                  }),
                t &&
                  i.createElement("canvas", {
                    ref: this.m_CanvasRef,
                    className: "EmbeddedData",
                    height: Fe.k_EmbeddedDataRows,
                  }),
                i.createElement(
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
            this.state.eRenderMode == _e.Image
              ? ((this.m_EmbeddedDataImgRef.current.width =
                  this.m_nEmbeddedDataWidth),
                this.m_EmbeddedDataImgRGBBuffer ||
                  (this.m_EmbeddedDataImgRGBBuffer =
                    VRHTML.VRUtil.CreateEmbeddedRGBScanline(
                      this.m_nEmbeddedDataWidth,
                      1,
                      4,
                    )))
              : this.state.eRenderMode == _e.Canvas &&
                ((this.m_CanvasRef.current.width = this.m_nEmbeddedDataWidth),
                (this.m_CanvasContext =
                  this.m_CanvasRef.current.getContext("2d")),
                (this.m_CanvasContext.globalCompositeOperation = "copy"),
                (this.m_CanvasContext.imageSmoothingEnabled = !1),
                null === this.m_Pixels &&
                  (this.m_Pixels = this.m_CanvasContext.createImageData(
                    this.m_nEmbeddedDataWidth,
                    Fe.k_EmbeddedDataRows,
                  ))),
              this.updateAllPanelBounds();
          }
          updateAllPanelBounds() {
            let e = this.m_DomRef.current.ownerDocument.defaultView,
              t = this.m_scalingDomRef.current.getBoundingClientRect(),
              r = t.width / this.m_fCurrentScale,
              o = t.height / this.m_fCurrentScale,
              i = { x: e.innerWidth / r, y: e.innerHeight / o },
              n = Math.min(i.x, i.y, 1);
            n != this.m_fCurrentScale &&
              (1 != n
                ? this.m_scalingDomRef.current.setAttribute(
                    "style",
                    "transform: scale(" + n + "); transform-origin: top left",
                  )
                : this.m_scalingDomRef.current.removeAttribute("style"),
              (this.m_fCurrentScale = n),
              (Te.s_bPanelsAreDirty = !0)),
              Te.s_bPanelsAreDirty &&
                (this.m_mapPanels.forEach((e) => e.updateLayoutValues()),
                J(),
                (Te.s_bPanelsAreDirty = !1),
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
                  let r = e.m_Rect.x,
                    o = e.m_Rect.x + e.m_Rect.width,
                    i = e.m_Rect.y,
                    n = e.m_Rect.y + e.m_Rect.height,
                    s = 1 + 3 * e.getEmbeddedIndex();
                  if (e.isExternal() || r >= o || i >= n)
                    for (let e = 0; e < 3; e++)
                      this.setPixel(s + 1, 0, 0, 0, 0);
                  else
                    this.setPixel(s, (65280 & r) >> 8, 255 & r, 0),
                      this.setPixel(s + 1, (65280 & o) >> 8, 255 & o, 255 & i),
                      this.setPixel(
                        s + 2,
                        (65280 & n) >> 8,
                        255 & n,
                        (65280 & i) >> 8,
                      );
                }),
                this.m_EmbeddedDataImgRef && this.state.eRenderMode == _e.Image)
              ) {
                const e = VRHTML.VRUtil.GetEmbeddedScanlineAsURIImage(
                  this.m_nEmbeddedDataWidth,
                  1,
                  4,
                );
                this.m_EmbeddedDataImgRef.current.src = e;
              } else if (
                this.m_CanvasRef &&
                this.state.eRenderMode == _e.Canvas
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
          setPixel(e, t, r, o, i = 255) {
            if (
              this.m_EmbeddedDataImgRGBBuffer &&
              this.state.eRenderMode == _e.Image
            ) {
              const n = new DataView(this.m_EmbeddedDataImgRGBBuffer);
              n.setUint8(4 * e + 0, t),
                n.setUint8(4 * e + 1, r),
                n.setUint8(4 * e + 2, o),
                n.setUint8(4 * e + 3, i);
            } else
              this.m_Pixels &&
                this.state.eRenderMode == _e.Canvas &&
                ((this.m_Pixels.data[4 * e + 0] = t),
                (this.m_Pixels.data[4 * e + 1] = r),
                (this.m_Pixels.data[4 * e + 2] = o),
                (this.m_Pixels.data[4 * e + 3] = i),
                (-1 === this.m_nDirtyXMin || e < this.m_nDirtyXMin) &&
                  (this.m_nDirtyXMin = e),
                (-1 === this.m_nDirtyXMax || e > this.m_nDirtyXMax) &&
                  (this.m_nDirtyXMax = e));
          }
        }
        (Fe.s_Current = null),
          (Fe.k_EmbeddedDataRows = 1),
          (0, o.Cg)([s], Fe.prototype, "toggleDebugPointer", null),
          (0, o.Cg)([s], Fe.prototype, "onMouseMove", null),
          (0, o.Cg)([s], Fe.prototype, "forceLayoutUpdate", null),
          (0, o.Cg)([s], Fe.prototype, "onMutation", null);
        (0, o.Cg)(
          [s],
          class extends ae {
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
          null,
        );
        (0, o.Cg)(
          [s],
          class extends ae {
            constructor(e) {
              super(e), super.setBuildNodeOverride(this.buildNode);
            }
            getNodeType() {
              return "tilefloor";
            }
            buildNode(e, t) {
              var r, o, i, n, s, a, l;
              const d = this.createSgNode(t);
              if (
                ((d.properties["tile-size"] = this.props["tile-size"]),
                (d.properties["tile-gap"] = this.props["tile-gap"]),
                (d.properties["inner-radius"] = this.props["inner-radius"]),
                (d.properties["outer-radius"] = this.props["outer-radius"]),
                (d.properties["fade-distance"] =
                  null === (r = this.props) || void 0 === r
                    ? void 0
                    : r["fade-distance"]),
                (d.properties["min-tile-scale-at-periphery"] =
                  this.props["min-tile-scale-at-periphery"]),
                (d.properties.height = ne(this.props.height)),
                (d.properties.offset = [
                  null === (o = this.props.offset) || void 0 === o
                    ? void 0
                    : o.x,
                  null === (i = this.props.offset) || void 0 === i
                    ? void 0
                    : i.y,
                ]),
                "string" == typeof this.props.color)
              )
                d.properties.color = this.props.color;
              else if (this.props.color) {
                let e = ee(this.props.color, { r: 0, g: 0, b: 0 });
                d.properties.color = [e.r, e.g, e.b];
              }
              return (
                (d.properties["center-randomization"] =
                  null == this ? void 0 : this.props["center-randomization"]),
                this.props["luma-randomization"] &&
                  ((d.properties["luma-randomization-min-gain"] =
                    this.props["luma-randomization"]["min-gain"]),
                  (d.properties["luma-randomization-max-gain"] =
                    this.props["luma-randomization"]["max-gain"])),
                this.props["reflection-randomization"] &&
                  ((d.properties["reflection-randomization-min-gain"] =
                    this.props["reflection-randomization"]["min-gain"]),
                  (d.properties["reflection-randomization-max-gain"] =
                    this.props["reflection-randomization"]["max-gain"])),
                (d.properties["normal-randomization-degrees"] =
                  null === (n = this.props) || void 0 === n
                    ? void 0
                    : n["normal-randomization-degrees"]),
                this.props.chevron &&
                  ((d.properties["chevron-luma-scale"] =
                    this.props.chevron["luma-scale"]),
                  (d.properties["chevron-reflection-scale"] =
                    this.props.chevron["reflection-scale"])),
                (d.properties["auto-subdivide"] =
                  null === (s = this.props) || void 0 === s
                    ? void 0
                    : s["auto-subdivide"]),
                (d.properties["pedestal-height"] = ne(
                  this.props["pedestal-height"],
                )),
                (d.properties["pedestal-radius"] = ne(
                  this.props["pedestal-radius"],
                )),
                (d.properties["floor-aa-shader"] =
                  null === (a = this.props) || void 0 === a
                    ? void 0
                    : a["floor-aa-shader"]),
                (d.properties["stable-fade"] =
                  null === (l = this.props) || void 0 === l
                    ? void 0
                    : l["stable-fade"]),
                [e, d]
              );
            }
          }.prototype,
          "buildNode",
          null,
        ),
          (function (e) {
            (e[(e.None = 0)] = "None"), (e[(e.Backface = 1)] = "Backface");
          })(ge || (ge = {}));
        class Oe extends ae {
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
              (r.properties["texture-id"] = Q(this.props["texture-id"])),
              (r.properties["input-path"] = this.props["input-path"]),
              this.props.fresnel)
            ) {
              let e = this.props.fresnel;
              if ("string" == typeof e.color) r.properties.color = e.color;
              else {
                let t = ee(e.color, { r: 0, g: 0, b: 0 });
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
        (0, o.Cg)([s], Oe.prototype, "buildNode", null);
        (0, o.Cg)(
          [s],
          class extends ae {
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
                (r.properties["target-id"] = this.props.target_id),
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
                  let t = ee(e.color, { r: 0, g: 0, b: 0 });
                  r.properties.color = [t.r, t.g, t.b];
                }
              }
              return [e, r];
            }
          }.prototype,
          "buildNode",
          null,
        );
        class Ae extends ae {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return i.createElement("vsg-line", {
              "target-id": this.props.target_id,
              thickness: this.props.thickness,
              "start-buffer": this.props.start_buffer,
              "end-buffer": this.props.end_buffer,
            });
          }
        }
        (0, o.Cg)(
          [s],
          class extends ae {
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
                ? (r = $(this.props.location, { x: 0, y: 0 }))
                : "number" == typeof this.props.location &&
                  (r = Ne(this.props.location));
              let o = this.createSgNode(t);
              if (this.props.latched && null !== this.m_latchedPosition)
                (o.properties["anchor-u"] = this.m_latchedPosition.u),
                  (o.properties["anchor-v"] = this.m_latchedPosition.v);
              else if (r) {
                const t = { u: 0.5 * r.x + 0.5, v: -0.5 * r.y + 0.5 },
                  i =
                    !e.currentPanel || e.currentPanel.props.overlay_key
                      ? t
                      : e.currentPanel.scaleLocalUVToGlobal(t);
                (o.properties["anchor-u"] = i.u),
                  (o.properties["anchor-v"] = i.v);
              } else {
                if (!e.currentPanel)
                  return [
                    Object.assign(Object.assign({}, e), { bShouldAbort: !0 }),
                    null,
                  ];
                const r = t.ownerDocument,
                  i = t.getBoundingClientRect(),
                  n = i.left + i.width / 2,
                  s = i.top + i.height / 2,
                  a = e.currentPanel.m_Rect;
                if (
                  n < a.x ||
                  n > a.x + a.width ||
                  s < a.y ||
                  s > a.y + a.height
                )
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
                (o.properties["anchor-u"] = n / l),
                  (o.properties["anchor-v"] = s / d);
              }
              return (
                (this.m_latchedPosition = {
                  u: o.properties["anchor-u"],
                  v: o.properties["anchor-v"],
                }),
                [e, o]
              );
            }
          }.prototype,
          "buildNode",
          null,
        );
        (0, o.Cg)(
          [s],
          class extends ae {
            constructor(e) {
              super(e), super.setBuildNodeOverride(this.buildNode);
            }
            getNodeType() {
              return "context";
            }
            buildNode(e, t) {
              const r = this.createSgNode(t);
              return (r.properties.construct = this.props.construct), [e, r];
            }
          }.prototype,
          "buildNode",
          null,
        );
        !(function (e) {
          (e[(e.LockedToParent = 0)] = "LockedToParent"),
            (e[(e.LockedToWorld = 1)] = "LockedToWorld");
        })(ve || (ve = {}));
        class Ve extends ae {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return i.createElement(
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
            (e[(e.AllowCameraToggle_Bool = 1055)] = "AllowCameraToggle_Bool"),
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
            (e[(e.DashboardLinkSupport_Int32 = 2097)] =
              "DashboardLinkSupport_Int32"),
            (e[(e.DisplayMinUIAnalogGain_Float = 2098)] =
              "DisplayMinUIAnalogGain_Float"),
            (e[(e.DashboardScale_Float = 2091)] = "DashboardScale_Float"),
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
            (e[(e.Prop_Hmd_SupportsVRGamepadFocus_Bool = 2117)] =
              "Prop_Hmd_SupportsVRGamepadFocus_Bool"),
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
            (e[(e.SupportsInHMDRoomSetup_Bool = 11003)] =
              "SupportsInHMDRoomSetup_Bool"),
            (e[(e.VRLinkClientHMDSupportsRoomSetupRequests_Bool = 11004)] =
              "VRLinkClientHMDSupportsRoomSetupRequests_Bool"),
            (e[(e.TrackedDeviceProperty_Max = 1e6)] =
              "TrackedDeviceProperty_Max");
        })(fe || (fe = {})),
          (function (e) {
            (e[(e.k_EButton_System = 0)] = "k_EButton_System"),
              (e[(e.k_EButton_ApplicationMenu = 1)] =
                "k_EButton_ApplicationMenu"),
              (e[(e.k_EButton_Grip = 2)] = "k_EButton_Grip"),
              (e[(e.k_EButton_DPad_Left = 3)] = "k_EButton_DPad_Left"),
              (e[(e.k_EButton_DPad_Up = 4)] = "k_EButton_DPad_Up"),
              (e[(e.k_EButton_DPad_Right = 5)] = "k_EButton_DPad_Right"),
              (e[(e.k_EButton_DPad_Down = 6)] = "k_EButton_DPad_Down"),
              (e[(e.k_EButton_A = 7)] = "k_EButton_A"),
              (e[(e.k_EButton_ProximitySensor = 31)] =
                "k_EButton_ProximitySensor"),
              (e[(e.k_EButton_Axis0 = 32)] = "k_EButton_Axis0"),
              (e[(e.k_EButton_Axis1 = 33)] = "k_EButton_Axis1"),
              (e[(e.k_EButton_Axis2 = 34)] = "k_EButton_Axis2"),
              (e[(e.k_EButton_Axis3 = 35)] = "k_EButton_Axis3"),
              (e[(e.k_EButton_Axis4 = 36)] = "k_EButton_Axis4"),
              (e[(e.k_EButton_SteamVR_Touchpad = 32)] =
                "k_EButton_SteamVR_Touchpad"),
              (e[(e.k_EButton_SteamVR_Trigger = 33)] =
                "k_EButton_SteamVR_Trigger"),
              (e[(e.k_EButton_Dashboard_Back = 2)] =
                "k_EButton_Dashboard_Back"),
              (e[(e.k_EButton_IndexController_A = 2)] =
                "k_EButton_IndexController_A"),
              (e[(e.k_EButton_IndexController_B = 1)] =
                "k_EButton_IndexController_B"),
              (e[(e.k_EButton_IndexController_JoyStick = 35)] =
                "k_EButton_IndexController_JoyStick"),
              (e[(e.k_EButton_Reserved0 = 50)] = "k_EButton_Reserved0"),
              (e[(e.k_EButton_Reserved1 = 51)] = "k_EButton_Reserved1"),
              (e[(e.k_EButton_Max = 64)] = "k_EButton_Max");
          })(be || (be = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.ButtonEnter = 1)] = "ButtonEnter"),
              (e[(e.ButtonLeave = 2)] = "ButtonLeave"),
              (e[(e.Snap = 3)] = "Snap"),
              (e[(e.Sliding = 4)] = "Sliding"),
              (e[(e.SlidingEdge = 5)] = "SlidingEdge");
          })(Se || (Se = {})),
          (function (e) {
            (e[(e.Minimal = 1)] = "Minimal"),
              (e[(e.Modal = 2)] = "Modal"),
              (e[(e.ShowArrowKeys = 4)] = "ShowArrowKeys"),
              (e[(e.HideDoneKey = 8)] = "HideDoneKey");
          })(ye || (ye = {})),
          (function (e) {
            (e[(e.Unknown = -1)] = "Unknown"),
              (e[(e.Idle = 0)] = "Idle"),
              (e[(e.UserInteraction = 1)] = "UserInteraction"),
              (e[(e.UserInteraction_Timeout = 2)] = "UserInteraction_Timeout"),
              (e[(e.Standby = 3)] = "Standby"),
              (e[(e.Idle_Timeout = 4)] = "Idle_Timeout");
          })(De || (De = {})),
          (function (e) {
            (e[(e.Notification_Shown = 600)] = "Notification_Shown"),
              (e[(e.Notification_Hidden = 601)] = "Notification_Hidden"),
              (e[(e.Notification_BeginInteraction = 602)] =
                "Notification_BeginInteraction"),
              (e[(e.Notification_Destroyed = 603)] = "Notification_Destroyed");
          })(Re || (Re = {})),
          (function (e) {
            (e[(e.TheaterFast = 0)] = "TheaterFast"),
              (e[(e.TheaterSlow = 1)] = "TheaterSlow");
          })(Ce || (Ce = {})),
          (function (e) {
            (e[(e.Constant = 0)] = "Constant"),
              (e[(e.Nearest = 1)] = "Nearest"),
              (e[(e.Linear = 2)] = "Linear"),
              (e[(e.SmoothStep = 3)] = "SmoothStep"),
              (e[(e.SmootherStep = 4)] = "SmootherStep");
          })(Ie || (Ie = {}));
        i.Component;
        (0, o.Cg)(
          [s],
          class extends ae {
            constructor(e) {
              super(e), super.setBuildNodeOverride(this.buildNode);
            }
            getNodeType() {
              return "dashboardtransform";
            }
            buildNode(e, t) {
              var r, o;
              const i = this.createSgNode(t);
              return (
                (i.properties.continuous_relatch =
                  null !== (r = this.props.bContinuousRelatch) &&
                  void 0 !== r &&
                  r),
                (i.properties.free_dashboard_transform =
                  null !== (o = this.props.bFreeDashboardTransform) &&
                  void 0 !== o &&
                  o),
                [e, i]
              );
            }
          }.prototype,
          "buildNode",
          null,
        );
        (0, o.Cg)(
          [s],
          class extends ae {
            constructor(e) {
              super(e), super.setBuildNodeOverride(this.buildNode);
            }
            getNodeType() {
              return "resize-handle";
            }
            buildNode(e, t) {
              const r = this.createSgNode(t);
              return (
                (r.properties["target-id"] = this.props.target_id),
                (r.properties["is-active"] = this.props.is_active),
                (r.properties["min-target-scale"] =
                  this.props.min_target_scale),
                (r.properties["max-target-scale"] =
                  this.props.max_target_scale),
                (r.properties.displacement = this.props.displacement),
                [e, r]
              );
            }
          }.prototype,
          "buildNode",
          null,
        );
        (0, o.Cg)(
          [s],
          class extends ae {
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
                (r.properties["target-id"] = this.props.target_id),
                (r.properties["near-z"] = this.props["near-z"]),
                (r.properties["far-z"] = this.props["far-z"]),
                (r.properties.debug = this.props.debug),
                [e, r]
              );
            }
          }.prototype,
          "buildNode",
          null,
        );
        (0, o.Cg)(
          [s],
          class extends ae {
            constructor(e) {
              super(e), super.setBuildNodeOverride(this.buildNode);
            }
            getNodeType() {
              return "reparent-to-panel";
            }
            buildNode(e, t) {
              const r = this.createSgNode(t),
                o = Object.assign(Object.assign({}, e), {
                  bInsideReparentedPanel: !0,
                  currentPanel: null,
                });
              return (
                this.props.parent_overlay_key &&
                  (r.properties["parent-overlay-key"] =
                    this.props.parent_overlay_key),
                [o, r]
              );
            }
          }.prototype,
          "buildNode",
          null,
        );
        (0, o.Cg)(
          [s],
          class extends ae {
            constructor(e) {
              super(e), super.setBuildNodeOverride(this.buildNode);
            }
            getNodeType() {
              return "audiosource";
            }
            buildNode(e, t) {
              const r = this.createSgNode(t);
              return (
                (r.properties.name = this.props.name),
                (r.properties.channel = this.props.channel),
                (r.properties.debug = this.props.debug),
                [e, r]
              );
            }
          }.prototype,
          "buildNode",
          null,
        ),
          (function (e) {
            (e[(e.Disabled = 0)] = "Disabled"),
              (e[(e.WorldZeroY = 1)] = "WorldZeroY"),
              (e[(e.WorldDynamicFloor = 2)] = "WorldDynamicFloor");
          })(Me || (Me = {}));
        (0, o.Cg)(
          [s],
          class extends ae {
            constructor(e) {
              super(e), super.setBuildNodeOverride(this.buildNode);
            }
            getNodeType() {
              return "constraint";
            }
            buildNode(e, t) {
              const r = this.createSgNode(t);
              return (
                (r.properties["projection-constraint"] =
                  this.props.projection_constraint),
                [e, r]
              );
            }
          }.prototype,
          "buildNode",
          null,
        );
        function Le() {
          const [e, t] = i.useState(0);
          return (
            i.useEffect(() => {
              const r = window.setInterval(() => {
                t(e + 1);
              });
              return () => window.clearInterval(r);
            }),
            i.createElement(
              we,
              {
                summonOverlayKey: "system.dashboardtabtest",
                tabName: "3D Test",
                id: "settingsOverlay",
                iconUri:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/3D_model_of_a_Cube.stl/1200px-3D_model_of_a_Cube.stl.png",
              },
              i.createElement(
                ke,
                { translation: { y: 0.5 }, scale: 0.2, rotation: { y: e } },
                i.createElement(Oe, { source: "locator" }),
              ),
              i.createElement(
                Ve,
                null,
                i.createElement(
                  Te,
                  { width: 1, origin: pe.BottomCenter, debug_name: "test-4" },
                  i.createElement(
                    "div",
                    {
                      style: {
                        background: "rgba(255, 255, 255, 0.5)",
                        fontSize: 50,
                        padding: 20,
                      },
                    },
                    "The future of overlays is 3D!",
                  ),
                ),
              ),
            )
          );
        }
        class Ue extends i.Component {
          constructor(e) {
            super(e),
              (this.state = {
                Frame: 1,
                Degrees: 0,
                Transform: {
                  translation: { x: 0, y: 0, z: 0 },
                  rotation: { w: 1, x: 0, y: 0, z: 0 },
                  scale: { x: 1, y: 1, z: 1 },
                },
                LabelValue: "                                               ",
                ShowElasticPanel: !0,
              }),
              (this.animationFrameHandle = window.requestAnimationFrame(
                this.onAnimationFrame,
              )),
              (this.mailbox = new a()),
              this.mailbox.Init("scenegraphtest"),
              this.mailbox.RegisterHandler("fnord", this.onMailboxMessage);
          }
          componentWillUnmount() {
            window.cancelAnimationFrame(this.animationFrameHandle);
          }
          componentDidMount() {
            J();
          }
          onAnimationFrame() {
            var e;
            let t = this.state.Transform;
            t.translation.x = 8451e3;
            try {
              t =
                null !==
                  (e =
                    null === VRHTML || void 0 === VRHTML
                      ? void 0
                      : VRHTML.GetPose("/user/hand/right", c.Standing)
                          .xfDeviceToAbsoluteTracking) && void 0 !== e
                  ? e
                  : this.state.Transform;
            } catch (e) {}
            this.setState({
              Frame: this.state.Frame + 1,
              Degrees: ((new Date().getTime() / 1e3) * 90) % 360,
              Transform: t,
              LabelValue: this.state.LabelValue,
              ShowElasticPanel: this.state.ShowElasticPanel,
            }),
              (this.animationFrameHandle = window.requestAnimationFrame(
                this.onAnimationFrame,
              ));
          }
          onNumberClicked(e) {
            let t = this.state.LabelValue;
            t += "" + e;
            t.length > 23 && (t = t.substr(t.length - 23, 23)),
              this.setState({
                Frame: this.state.Frame,
                Degrees: this.state.Degrees,
                Transform: this.state.Transform,
                LabelValue: t,
                ShowElasticPanel: this.state.ShowElasticPanel,
              });
          }
          onHideElasticPanel() {
            this.setState({
              Frame: this.state.Frame,
              Degrees: this.state.Degrees,
              Transform: this.state.Transform,
              LabelValue: this.state.LabelValue,
              ShowElasticPanel: !1,
            });
          }
          onMailboxMessage(e) {
            console.log("Received message ", e);
          }
          render() {
            return i.createElement(
              "div",
              null,
              i.createElement(
                we,
                {
                  summonOverlayKey: "keypadtest",
                  id: "bigpicture",
                  tabName: "Steam",
                  iconUri:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/512px-Steam_icon_logo.svg.png",
                },
                i.createElement(
                  Te,
                  { width: 1.2, interactive: !0, debug_name: "test-3" },
                  i.createElement(
                    "div",
                    {
                      className: "panel FlexBox",
                      style: {
                        textAlign: "center",
                        width: 350,
                        height: 450,
                        borderRadius: 30,
                      },
                    },
                    i.createElement("h1", null, "Elastic panel!"),
                    i.createElement("hr", null),
                    i.createElement("pre", null, this.state.LabelValue),
                    i.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: () => this.onNumberClicked(7),
                      },
                      "7",
                    ),
                    i.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: () => this.onNumberClicked(8),
                      },
                      "8",
                    ),
                    i.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: () => this.onNumberClicked(9),
                      },
                      "9",
                    ),
                    i.createElement("br", null),
                    i.createElement("br", null),
                    i.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: () => this.onNumberClicked(4),
                      },
                      "4",
                    ),
                    i.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: () => this.onNumberClicked(5),
                      },
                      "5",
                    ),
                    i.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: () => this.onNumberClicked(6),
                      },
                      "6",
                    ),
                    i.createElement("br", null),
                    i.createElement("br", null),
                    i.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: () => this.onNumberClicked(1),
                      },
                      "1",
                    ),
                    i.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: () => this.onNumberClicked(2),
                      },
                      "2",
                    ),
                    i.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: () => this.onNumberClicked(3),
                      },
                      "3",
                    ),
                    i.createElement("br", null),
                    i.createElement("br", null),
                    i.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: this.onHideElasticPanel,
                      },
                      "Close",
                    ),
                  ),
                ),
              ),
              i.createElement(
                ke,
                { transform: this.state.Transform, parent_origin: de.Standing },
                i.createElement(Oe, { source: "generic_hmd" }),
              ),
              i.createElement(
                ke,
                {
                  translation: { x: 0, y: 0.3, z: 0 },
                  rotation: { x: 30, y: this.state.Degrees, z: 90 },
                  parent_origin: de.Standing,
                },
                i.createElement(Oe, { source: "locator" }),
              ),
              i.createElement(ke, {
                translation: { x: 0, y: 1.8, z: 0 },
                parent_origin: de.Standing,
                id: "line_origin",
              }),
              i.createElement(
                ke,
                {
                  translation: { x: 0, y: 0, z: -0.5 },
                  scale: { x: 2, y: 2, z: 2 },
                  parent_origin: de.Seated,
                },
                i.createElement(
                  Te,
                  {
                    height: 0.45,
                    width: 0.45,
                    interactive: !0,
                    debug_name: "test-1",
                  },
                  i.createElement("iframe", {
                    src: "https://www.valvesoftware.com",
                    style: { width: "400px", height: "400px", padding: 0 },
                    height: "400",
                    width: "400",
                  }),
                ),
              ),
              i.createElement(
                ke,
                {
                  translation: { x: 0, y: 0, z: -0.5 },
                  parent_path: "/user/hand/left",
                  id: "left_hand_model",
                },
                i.createElement(Oe, { source: "locator_one_sided" }),
              ),
              i.createElement(
                ke,
                { parent_path: "/user/hand/right" },
                i.createElement(Ae, {
                  target_id: "line_origin",
                  thickness: 0.01,
                  end_buffer: 0.5,
                }),
                i.createElement(Ae, {
                  target_id: "left_hand_model",
                  thickness: 0.001,
                  end_buffer: 0.1,
                  start_buffer: 0.2,
                }),
              ),
              i.createElement(ke, {
                translation: { x: 0, y: 0, z: -0.5 },
                parent_path: "/user/hand/right/pose/base",
              }),
              i.createElement(
                ke,
                {
                  translation: { x: 0, y: -1.2, z: -2 },
                  rotation: { x: -45 },
                  parent_path: "/user/head/pose/raw",
                },
                i.createElement(
                  Te,
                  {
                    height: 0.2,
                    width: void 0,
                    interactive: !1,
                    debug_name: "test-2",
                  },
                  i.createElement(
                    "div",
                    {
                      className: "panel",
                      style: { height: "150px", width: "600px" },
                    },
                    i.createElement("h1", null, "Some Text for the panel."),
                    "Frame: ",
                    this.state.Frame,
                    i.createElement("br", null),
                    "Degrees: ",
                    Math.round(this.state.Degrees),
                    i.createElement("br", null),
                  ),
                ),
              ),
              i.createElement(
                ke,
                { parent_origin: de.Standing },
                i.createElement(Oe, {
                  source: "{knuckles}valve_controller_knu_ev2_0_left",
                }),
              ),
              i.createElement(
                ke,
                { translation: { y: 0.5 } },
                i.createElement(
                  Ee,
                  { value: 0.1 },
                  i.createElement(
                    xe,
                    { color: { b: 1, g: 1, r: 0 } },
                    i.createElement(Oe, {
                      source: "generic_hmd",
                      wireframe: !0,
                      fresnel: { color: { r: 1 }, opacity: 0.7, strength: 1 },
                    }),
                  ),
                ),
              ),
              i.createElement(Le, null),
            );
          }
        }
        (0, o.Cg)([s], Ue.prototype, "onAnimationFrame", null),
          (0, o.Cg)([s], Ue.prototype, "onNumberClicked", null),
          (0, o.Cg)([s], Ue.prototype, "onHideElasticPanel", null),
          (0, o.Cg)([s], Ue.prototype, "onMailboxMessage", null),
          n
            .H(document.getElementById("root"))
            .render(i.createElement(Fe, null, i.createElement(Ue, null))),
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VROverlay.SetFlag(
              VRHTML.VROverlay.ThisOverlayHandle(),
              _.ShowTouchPadScrollWheel,
              !0,
            ),
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VROverlay.SetFlag(
              VRHTML.VROverlay.ThisOverlayHandle(),
              _.SendVRSmoothScrollEvents,
              !0,
            ),
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VROverlay.SetInputMethod(
              VRHTML.VROverlay.ThisOverlayHandle(),
              g.Mouse,
            );
      },
    },
    r = {};
  function o(e) {
    var i = r[e];
    if (void 0 !== i) return i.exports;
    var n = (r[e] = { exports: {} });
    return t[e](n, n.exports, o), n.exports;
  }
  (o.m = t),
    (e = []),
    (o.O = (t, r, i, n) => {
      if (!r) {
        var s = 1 / 0;
        for (p = 0; p < e.length; p++) {
          for (var [r, i, n] = e[p], a = !0, l = 0; l < r.length; l++)
            (!1 & n || s >= n) && Object.keys(o.O).every((e) => o.O[e](r[l]))
              ? r.splice(l--, 1)
              : ((a = !1), n < s && (s = n));
          if (a) {
            e.splice(p--, 1);
            var d = i();
            void 0 !== d && (t = d);
          }
        }
        return t;
      }
      n = n || 0;
      for (var p = e.length; p > 0 && e[p - 1][2] > n; p--) e[p] = e[p - 1];
      e[p] = [r, i, n];
    }),
    (o.d = (e, t) => {
      for (var r in t)
        o.o(t, r) &&
          !o.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = { 707: 0, 270: 0, 171: 0 };
      o.O.j = (t) => 0 === e[t];
      var t = (t, r) => {
          var i,
            n,
            [s, a, l] = r,
            d = 0;
          if (s.some((t) => 0 !== e[t])) {
            for (i in a) o.o(a, i) && (o.m[i] = a[i]);
            if (l) var p = l(o);
          }
          for (t && t(r); d < s.length; d++)
            (n = s[d]), o.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return o.O(p);
        },
        r = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var i = o.O(void 0, [498, 8, 270, 171], () => o(8969));
  i = o.O(i);
})(); //# sourceMappingURL=file:///c:/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/scenegraphtest.js.map
