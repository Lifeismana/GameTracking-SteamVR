/*! For license information please see scenegraphtest.js.LICENSE.txt */
(() => {
  "use strict";
  var e,
    t = {
      5971: (e, t, r) => {
        var i,
          o,
          n,
          s,
          a,
          l,
          d,
          p,
          c,
          u,
          h,
          _,
          m,
          g,
          v,
          f,
          b,
          y,
          S,
          D,
          R,
          C = r(655),
          I = r(7294),
          M = r(3935),
          B = r(7056);
        class P {
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
            return (0, C.mG)(this, void 0, void 0, function* () {
              return (
                (this.m_sMailboxName = P.EnsureUniqueName(e)),
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
            return new Promise((r, i) => {
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
            return (0, C.mG)(this, void 0, void 0, function* () {
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
            let i = Object.assign({}, t);
            return (
              null == i.returnAddress &&
                (i.returnAddress = this.m_sMailboxName),
              (i.message_id = this.m_nNextMessageNumber++),
              this.SendMessage(e, i),
              this.WaitForMessage(r, i.message_id)
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
        function k(e, t) {
          let r = e.getAttribute(t);
          if (r && r.length > 0) {
            if ("undefined" == r) return;
            let e = [];
            for (let t of r.split(" ")) 0 != t.length && e.push(parseFloat(t));
            if (e.length > 0) return e;
          }
        }
        function x(e, t) {
          let r = e.getAttribute(t);
          if (r && r.length > 0) return parseFloat(r);
        }
        function w(e, t) {
          let r = e.getAttribute(t);
          if (r && r.length > 0) return parseInt(r);
        }
        function E(e, t) {
          let r = e.getAttribute(t);
          if (r && r.length > 0)
            return (
              "true" == r ||
              (r.length > 0 && 0 != parseInt(r) && !isNaN(parseInt(r)))
            );
        }
        function T(e, t) {
          let r = e.getAttribute(t);
          if (r && r.length > 0) return r;
        }
        function N(e, t) {
          return z(T(e, t));
        }
        function F(e, t) {
          let r = { type: e, properties: {} };
          return (
            t.id && (r.properties.id = z(t.id)),
            (r.properties.sgid = w(t, "sgid")),
            r
          );
        }
        function O(e, t) {
          let [r, i] = (function (e, t) {
              let r = t.buildNode;
              if (r) return r(e, t);
              let i = Object.assign({}, e),
                o = null;
              switch (t.nodeName.toUpperCase()) {
                case "VSG-TRANSFORM":
                  (o = F("transform", t)),
                    (o.properties.translation = k(t, "translation")),
                    (o.properties.rotation = k(t, "rotation")),
                    (o.properties.scale = k(t, "scale")),
                    (o.properties["curvature-pitch"] = x(t, "curvature-pitch")),
                    (o.properties["transform-path"] = T(t, "transform-path")),
                    (o.properties["invert-parent-panel-pitch"] = E(
                      t,
                      "invert-parent-panel-pitch",
                    )),
                    (o.properties["ignore-parent-scale"] = E(
                      t,
                      "ignore-parent-scale",
                    )),
                    (o.properties["parent-path"] = T(t, "parent-path")),
                    (o.properties["parent-origin"] = T(t, "parent-origin")),
                    (o.properties["parent-id"] = N(t, "parent-id"));
                  break;
                case "VSG-TRACKING-STATE-VISIBILITY":
                  (o = F("trackingstatevisibility", t)),
                    (o.properties["visible-0dof"] = E(t, "visible-0dof")),
                    (o.properties["visible-3dof"] = E(t, "visible-3dof")),
                    (o.properties["visible-6dof"] = E(t, "visible-6dof"));
                  break;
                case "VSG-ELASTIC-HEAD-TRANSFORM":
                  (o = F("elasticheadtransform", t)),
                    (o.properties["start-angle-threshold"] = x(
                      t,
                      "start-angle-threshold",
                    )),
                    (o.properties["stop-angle-threshold"] = x(
                      t,
                      "stop-angle-threshold",
                    )),
                    (o.properties["ease-in-time"] = x(t, "ease-in-time")),
                    (o.properties["ease-in-power"] = x(t, "ease-in-power")),
                    (o.properties["ease-out-angle-threshold"] = x(
                      t,
                      "ease-out-angle-threshold",
                    )),
                    (o.properties["ease-out-power"] = x(t, "ease-out-power")),
                    (o.properties["min-angular-velocity"] = x(
                      t,
                      "min-angular-velocity",
                    )),
                    (o.properties["max-angular-velocity"] = x(
                      t,
                      "max-angular-velocity",
                    )),
                    (o.properties["lock-to-horizon"] = E(t, "lock-to-horizon")),
                    (o.properties["translation-behavior"] = w(
                      t,
                      "translation-behavior",
                    ));
                  break;
                case "VSG-LINE":
                  (o = F("line", t)),
                    (o.properties["target-id"] = N(t, "target-id")),
                    (o.properties.thickness = x(t, "thickness")),
                    (o.properties["start-buffer"] = x(t, "start-buffer")),
                    (o.properties["end-buffer"] = x(t, "end-buffer"));
                  break;
                case "VSG-LINE-CONSTRAINED-TRANSFORM":
                  (o = F("line-constrained-transform", t)),
                    (o.properties["target-id"] = N(t, "target-id")),
                    (o.properties["source-id"] = N(t, "source-id")),
                    (o.properties["source-distance"] = x(t, "source-distance")),
                    (o.properties["target-limit"] = x(t, "target-limit"));
                  break;
                case "VSG-CALLOUT-TRANSFORM":
                  (o = F("callout-transform", t)),
                    (o.properties.offset = k(t, "offset"));
                  break;
                case "VSG-HEAD-FACING-TRANSFORM":
                  o = F("head-facing-transform", t);
                  break;
                case "VSG-PIN-TO-VIEW-TRANSFORM":
                  (o = F("pin-to-view-transform", t)),
                    (o.properties["offscreen-z-depth"] = x(
                      t,
                      "offscreen-z-depth",
                    )),
                    (o.properties["off-axis-limit"] = x(t, "off-axis-limit")),
                    (o.properties["transition-limit"] = x(
                      t,
                      "transition-limit",
                    ));
                  break;
                case "VSG-MANIPULATION-TRANSFORM":
                  (o = F("manipulation-transform", t)),
                    (o.properties["is-moving"] = E(t, "is-moving")),
                    (o.properties["parent-path"] = T(t, "parent-path")),
                    (o.properties.translation = k(t, "translation")),
                    (o.properties.rotation = k(t, "rotation")),
                    (o.properties.scale = k(t, "scale"));
                  break;
                case "VSG-GRAB-TRANSFORM":
                  (o = F("grab-transform", t)),
                    (o.properties["parent-path"] = T(t, "parent-path")),
                    (o.properties.translation = k(t, "translation")),
                    (o.properties.rotation = k(t, "rotation")),
                    (o.properties.scale = k(t, "scale")),
                    (o.properties["should-head-align"] = E(
                      t,
                      "should-head-align",
                    )),
                    (o.properties["stop-distance"] = x(t, "stop-distance")),
                    (o.properties["start-angle"] = x(t, "start-angle")),
                    (o.properties["start-quat-difference"] = x(
                      t,
                      "start-quat-difference",
                    )),
                    (o.properties["stop-quat-difference"] = x(
                      t,
                      "stop-quat-difference",
                    )),
                    (o.properties["scale-margin"] = x(t, "scale-margin")),
                    (o.properties["lerp-speed"] = x(t, "lerp-speed")),
                    (o.properties["min-distance"] = x(t, "min-distance")),
                    (o.properties["max-distance"] = x(t, "max-distance")),
                    (o.properties["one-to-one-radius"] = x(
                      t,
                      "one-to-one-radius",
                    )),
                    (o.properties["max-x-squared-contribution"] = x(
                      t,
                      "max-x-squared-contribution",
                    )),
                    (o.properties["acceleration-factor-x-coefficient"] = x(
                      t,
                      "acceleration-factor-x-coefficient",
                    )),
                    (o.properties["acceleration-factor-x-squared-coefficient"] =
                      x(t, "acceleration-factor-x-squared-coefficient")),
                    (o.properties["acceleration-factor-scale-term"] = x(
                      t,
                      "acceleration-factor-scale-term",
                    ));
              }
              return [i, o];
            })(e, t),
            o = [];
          for (let e = 0; e < t.children.length; e++) {
            let i = t.children.item(e);
            if (i.children) {
              let e = O(r, i);
              e && (o = o.concat(e));
            }
          }
          return r.bShouldAbort
            ? null
            : i
              ? (o.length > 0 && (i.children = o), [i])
              : o.length > 0
                ? 1 == o.length
                  ? o
                  : [{ children: o }]
                : null;
        }
        (P.s_nNextMailboxNumber = 1),
          (0, C.gn)([B.ak], P.prototype, "OpenWebSocketToHost", null),
          (0, C.gn)([B.ak], P.prototype, "OnWebSocketOpen", null),
          (0, C.gn)([B.ak], P.prototype, "OnWebSocketClose", null),
          (0, C.gn)([B.ak], P.prototype, "WebSocketSend", null),
          (0, C.gn)([B.ak], P.prototype, "OnWebSocketMessage", null),
          (function (e) {
            (e[(e.Desktop = 1)] = "Desktop"),
              (e[(e.Overlay = 2)] = "Overlay"),
              (e[(e.Unknown = 100)] = "Unknown");
          })(i || (i = {})),
          window.hasOwnProperty("VRHTML") || (window.VRHTML = null),
          (function (e) {
            (e[(e.Auto = 0)] = "Auto"),
              (e[(e.Low = 1)] = "Low"),
              (e[(e.Medium = 2)] = "Medium"),
              (e[(e.High = 3)] = "High");
          })(o || (o = {})),
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
          })(n || (n = {})),
          (function (e) {
            (e[(e.Seated = 0)] = "Seated"),
              (e[(e.Standing = 1)] = "Standing"),
              (e[(e.RawAndUncalibrated = 2)] = "RawAndUncalibrated");
          })(s || (s = {})),
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
          })(a || (a = {})),
          (function (e) {
            (e[(e.Activated = 0)] = "Activated"),
              (e[(e.Deactivated = 1)] = "Deactivated");
          })(l || (l = {})),
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
                "EnableControlBarClose");
          })(d || (d = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"), (e[(e.Mouse = 1)] = "Mouse");
          })(p || (p = {})),
          (function (e) {
            (e[(e.Invalid = 0)] = "Invalid"),
              (e[(e.HMD = 1)] = "HMD"),
              (e[(e.Controller = 2)] = "Controller"),
              (e[(e.GenericTracker = 3)] = "GenericTracker"),
              (e[(e.TrackingReference = 4)] = "TrackingReference"),
              (e[(e.DisplayRedirect = 5)] = "DisplayRedirect");
          })(c || (c = {})),
          (function (e) {
            (e[(e.Unknown = 0)] = "Unknown"),
              (e[(e.NVIDIA = 1)] = "NVIDIA"),
              (e[(e.AMD = 2)] = "AMD");
          })(u || (u = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.Starting = 1)] = "Starting"),
              (e[(e.Quitting = 2)] = "Quitting"),
              (e[(e.Running = 3)] = "Running"),
              (e[(e.Waiting = 4)] = "Waiting");
          })(h || (h = {})),
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
          })(_ || (_ = {})),
          (function (e) {
            (e[(e.Normal = 0)] = "Normal"),
              (e[(e.Password = 1)] = "Password"),
              (e[(e.Submit = 2)] = "Submit");
          })(m || (m = {})),
          (function (e) {
            (e[(e.SingleLine = 0)] = "SingleLine"),
              (e[(e.MultipleLines = 1)] = "MultipleLines");
          })(g || (g = {})),
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
          })(v || (v = {})),
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
          })(f || (f = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.ThisSteamVR = 1)] = "ThisSteamVR"),
              (e[(e.AnotherSteamVR = 2)] = "AnotherSteamVR"),
              (e[(e.AnotherRuntime = 3)] = "AnotherRuntime"),
              (e[(e.Error = -1)] = "Error");
          })(b || (b = {})),
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
          })(y || (y = {})),
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
          })(S || (S = {})),
          (function (e) {
            e[(e.Hostname = 0)] = "Hostname";
          })(D || (D = {})),
          (function (e) {
            (e[(e.Unavailable = 0)] = "Unavailable"),
              (e[(e.Active = 1)] = "Active"),
              (e[(e.Off = 2)] = "Off");
          })(R || (R = {}));
        let A,
          V,
          L,
          U,
          H = [],
          W = null,
          G = null;
        function z(e) {
          return e
            ? (function (e) {
                return e && e.includes("::");
              })(e)
              ? e
              : q() + "::" + e
            : null;
        }
        function q() {
          var e;
          return null !==
            (e =
              null === VRHTML || void 0 === VRHTML
                ? void 0
                : VRHTML.VROverlay.ThisOverlayKey()) && void 0 !== e
            ? e
            : A;
        }
        function K() {
          W ||
            (W = window.setTimeout(
              () =>
                (0, C.mG)(this, void 0, void 0, function* () {
                  let e = document.body;
                  V && (e = V);
                  let t = {
                    type: "root",
                    rootproperties: {
                      relatchDashboardTransform: U,
                      allowDismissOnClick: true,
                      sceneColorCorrection: null,
                    },
                    children: O(
                      {
                        currentPanel: null,
                        bInsideReparentedPanel: !1,
                        bShouldAbort: !1,
                      },
                      e,
                    ),
                  };
                  G ||
                    (console.log("Initializing sg_mailbox"),
                    (G = new P()),
                    yield G.Init("sg_mailbox", L));
                  let r = {
                    type: "update_scene_graph",
                    owning_overlay_key: q(),
                    scene_graph: t,
                    retired_sgids: H,
                  };
                  G.SendMessage("vrcompositor_systemlayer", r),
                    (W = null),
                    (H = []),
                    (U = !1);
                }),
              0,
            ));
        }
        function j(e, t) {
          return e ? { x: e.x ? e.x : t.x, y: e.y ? e.y : t.y } : t;
        }
        function Z(e, t) {
          return e
            ? { x: e.x ? e.x : t.x, y: e.y ? e.y : t.y, z: e.z ? e.z : t.z }
            : t;
        }
        function X(e, t) {
          return e
            ? { r: e.r ? e.r : t.r, g: e.g ? e.g : t.g, b: e.b ? e.b : t.b }
            : t;
        }
        function Q(e) {
          var t;
          return null ===
            (t = (function (e) {
              if (e) return [e.x, e.y, e.z];
            })(e)) || void 0 === t
            ? void 0
            : t.join(" ");
        }
        class J extends I.Component {
          constructor(e) {
            var t;
            super(e),
              (this.m_domRef = I.createRef()),
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
            return F(this.getNodeType(), e);
          }
          getCurrentRootElement() {
            return this.m_domRef.current;
          }
          componentDidMount() {
            this.m_buildNodeOverride &&
              (this.m_domRef.current.buildNode = this.m_buildNodeOverride),
              K();
          }
          componentDidUpdate() {
            K();
          }
          componentWillUnmount() {
            var e;
            (e = this.m_SGID),
              H.push(e),
              K(),
              this.m_domRef.current &&
                this.m_buildNodeOverride &&
                delete this.m_domRef.current.buildNode;
          }
          render() {
            return I.cloneElement(this.internalRender(), {
              id: this.props.id,
              "vsg-type": this.getNodeType(),
              sgid: this.m_SGID,
              ref: this.m_domRef,
            });
          }
          internalRender() {
            return this.m_buildNodeOverride
              ? I.createElement("vsg-node", null, this.props.children)
              : null;
          }
        }
        class Y extends J {
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
        (0, C.gn)([B.ZP], Y.prototype, "buildNode", null),
          (0, C.gn)(
            [B.ZP],
            class extends J {
              constructor(e) {
                super(e), super.setBuildNodeOverride(this.buildNode);
              }
              getNodeType() {
                return "mountedscenegraph";
              }
              buildNode(e, t) {
                const r = this.createSgNode(t);
                return (
                  (r.properties.mountable_id = z(this.props.mountedId)),
                  this.props.fDashboardScale &&
                    (r.properties.dashboard_scale = this.props.fDashboardScale),
                  [e, r]
                );
              }
            }.prototype,
            "buildNode",
            null,
          );
        class $ extends J {
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
            const i = this.createSgNode(t);
            return (
              (i.properties.tab_name =
                null !== (r = this.props.tabName) && void 0 !== r ? r : ""),
              (i.properties.mountable_id = z(this.m_sMountableUnqualifiedID)),
              (i.properties.icon_uri = this.props.iconUri),
              (i.properties.icon_overlay_key = this.props.iconOverlayKey),
              (i.properties.summon_overlay_key = this.props.summonOverlayKey),
              [e, i]
            );
          }
          internalRender() {
            return I.createElement(
              "vsg-node",
              { id: this.props.id },
              I.createElement(
                Y,
                { id: this.m_sMountableUnqualifiedID },
                this.props.children,
              ),
            );
          }
        }
        (0, C.gn)([B.ZP], $.prototype, "buildNode", null);
        class ee extends J {
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
        (0, C.gn)([B.ZP], ee.prototype, "buildNode", null);
        class te extends J {
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
        var re, ie, oe, ne, se, ae, le, de, pe, ce, ue, he, _e, me, ge, ve;
        (0, C.gn)([B.ZP], te.prototype, "buildNode", null),
          (function (e) {
            (e[(e.Seated = 0)] = "Seated"),
              (e[(e.Standing = 1)] = "Standing"),
              (e[(e.Raw = 2)] = "Raw");
          })(re || (re = {}));
        class fe extends J {
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
            let e, t, r;
            var i, o;
            this.props.transform
              ? ((e = this.props.transform.translation),
                (t = this.props.transform.rotation),
                (r = this.props.transform.scale))
              : ((e = Z(this.props.translation, { x: 0, y: 0, z: 0 })),
                (t =
                  this.props.rotation && "w" in this.props.rotation
                    ? this.props.rotation
                    : (function (e) {
                        if (void 0 === e) return;
                        let t = 0.5 * e.x,
                          r = 0.5 * e.y,
                          i = 0.5 * e.z,
                          o = Math.cos(t),
                          n = Math.cos(r),
                          s = Math.cos(i),
                          a = Math.sin(t),
                          l = Math.sin(r),
                          d = Math.sin(i);
                        return {
                          w: o * n * s + a * l * d,
                          x: a * n * s + o * l * d,
                          y: o * l * s - a * n * d,
                          z: o * n * d - a * l * s,
                        };
                      })(
                        ((i = Z(this.props.rotation, { x: 0, y: 0, z: 0 })),
                        (o = Math.PI / 180),
                        { x: i.x * o, y: i.y * o, z: i.z * o }),
                      )),
                (r =
                  "number" == typeof this.props.scale
                    ? {
                        x: this.props.scale,
                        y: this.props.scale,
                        z: this.props.scale,
                      }
                    : Z(this.props.scale, { x: 1, y: 1, z: 1 })));
            let n = Q(e),
              s = (function (e) {
                if (e) return e.w + " " + e.x + " " + e.y + " " + e.z;
              })(t),
              a = Q(r);
            return I.createElement(
              "vsg-transform",
              {
                translation: n,
                rotation: s,
                scale: a,
                "curvature-pitch": this.props.curvature_pitch,
                "invert-parent-panel-pitch":
                  this.props.invert_parent_panel_pitch,
                "ignore-parent-scale": this.props.ignore_parent_scale,
                "transform-path": this.props.transform_path,
                "parent-path": this.props.parent_path,
                "parent-origin": re[this.props.parent_origin],
                "parent-id": this.props.parent_id,
              },
              this.props.children,
            );
          }
        }
        function be(e) {
          if (e) return [e.u, e.v];
        }
        function ye(e) {
          switch (e) {
            case ie.TopLeft:
              return { x: -1, y: 1 };
            case ie.TopCenter:
              return { x: 0, y: 1 };
            case ie.TopRight:
              return { x: 1, y: 1 };
            case ie.CenterLeft:
              return { x: -1, y: 0 };
            case ie.Center:
              return { x: 0, y: 0 };
            case ie.CenterRight:
              return { x: 1, y: 0 };
            case ie.BottomLeft:
              return { x: -1, y: -1 };
            case ie.BottomCenter:
              return { x: 0, y: -1 };
            case ie.BottomRight:
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
        })(ie || (ie = {})),
          (function (e) {
            (e[(e.Auto = 0)] = "Auto"), (e[(e.SingleTap = 1)] = "SingleTap");
          })(oe || (oe = {})),
          (function (e) {
            (e[(e.Mono = 0)] = "Mono"),
              (e[(e.Parallel = 1)] = "Parallel"),
              (e[(e.Crossed = 2)] = "Crossed"),
              (e[(e.Panorama = 3)] = "Panorama"),
              (e[(e.StackedPanorama = 4)] = "StackedPanorama");
          })(ne || (ne = {})),
          (function (e) {
            (e[(e.Visible = 0)] = "Visible"),
              (e[(e.SkipInSceneGraph = 1)] = "SkipInSceneGraph"),
              (e[(e.Hidden = 2)] = "Hidden");
          })(se || (se = {}));
        class Se extends J {
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
            const n = [t, r, i, o].filter((e) => e).length,
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
            Se.s_bPanelsAreDirty = !0;
          }
          componentDidMount() {
            super.componentDidMount(),
              (this.m_resizeObserver = new ResizeObserver(
                this.onResizeObserved,
              )),
              this.m_resizeObserver.observe(this.getCurrentRootElement()),
              (this.m_nEmbeddedIndex = De.Current().addEmbeddedPanelUVs(this)),
              (Se.s_bPanelsAreDirty = !0),
              this.getCurrentRootElement().addEventListener(
                "mousedown",
                this.onPanelMouseDown,
              ),
              this.forceUpdate();
          }
          onResizeObserved(e, t) {
            De.Current().forceLayoutUpdate();
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
              (Se.s_bPanelsAreDirty = !0),
              De.Current().removeEmbeddedPanelUVs(this),
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
          createOverdragBlockingElement(e, t, r, i) {
            let o = document.createElement("div");
            (o.style.position = "absolute"),
              (o.style.top = t + "px"),
              (o.style.left = e + "px"),
              (o.style.width = r + "px"),
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
              : se.Visible;
          }
          buildNode(e, t) {
            var r, i, o, n, s, a;
            if (this.visibility != se.Visible) return [e, null];
            let l = Object.assign(Object.assign({}, e), {
                bInsideReparentedPanel: !1,
                currentPanel: this,
              }),
              d = this.createSgNode(t),
              p = { x: 0, y: 0 };
            p =
              "object" == typeof this.props.origin
                ? j(this.props.origin, { x: 0, y: 0 })
                : ye(this.props.origin);
            const c = this.props.overlay_key,
              u = q();
            return (
              c && c.length > 0
                ? (d.properties.key = c)
                : u
                  ? (d.properties.key = u)
                  : (d.properties.overlay_handle =
                      null === VRHTML || void 0 === VRHTML
                        ? void 0
                        : VRHTML.VROverlay.ThisOverlayHandle()),
              (d.properties.uv_min =
                null !== (r = be(this.m_UVsMin)) && void 0 !== r ? r : void 0),
              (d.properties.uv_max =
                null !== (i = be(this.m_UVsMax)) && void 0 !== i ? i : void 0),
              (d.properties.width =
                null !== (o = this.props.width) && void 0 !== o ? o : void 0),
              (d.properties.height =
                null !== (n = this.props.height) && void 0 !== n ? n : void 0),
              (d.properties["scale-index"] =
                null !== (s = this.props.scale_index) && void 0 !== s ? s : 0),
              (d.properties["min-width"] =
                null !== (a = this.props.min_width) && void 0 !== a
                  ? a
                  : void 0),
              (d.properties["target-width-anchor-id"] = z(
                this.props.target_width_anchor_id,
              )),
              (d.properties["target-dpi-panel-id"] = z(
                this.props.target_dpi_panel_id,
              )),
              (d.properties["target-dpi-multiplier"] =
                this.props.target_dpi_multiplier),
              (d.properties["meters-per-pixel"] = this.props.meters_per_pixel),
              (d.properties["subview-parent-panel-key"] =
                this.props.subview_parent_panel_key),
              (d.properties.curvature = this.props.curvature),
              (d.properties["curvature-origin-id"] = z(
                this.props.curvature_origin_id,
              )),
              (d.properties.spherical = this.props.spherical),
              (d.properties.interactive = this.props.interactive),
              (d.properties.scrollable = this.props.scrollable),
              (d.properties.undocked = this.props.undocked),
              (d.properties.modal = this.props.modal),
              (d.properties["requires-laser"] = this.props.requires_laser),
              (d.properties["allow-input-capture"] =
                this.props.allow_input_capture),
              (d.properties["hide-laser-when-clicking"] =
                this.props.hide_lasermouse_when_clicking),
              (d.properties["make-overlays-interactive-if-visible"] =
                this.props.make_overlays_interactive_if_visible),
              (d.properties["is-grab-handle"] = this.props.is_grab_handle),
              (d.properties["embedded-uv-index"] = this.m_nEmbeddedIndex),
              (d.properties.origin = (function (e) {
                if (e) return [e.x, e.y];
              })(p)),
              (d.properties.debug_name = this.props.debug_name),
              (d.properties.sampler = this.props.sampler),
              (d.properties.reflect = this.props.reflect),
              (d.properties.stereoscopy = this.props.stereoscopy),
              (d.properties.rendermodel_component_device_index =
                this.props.rendermodel_component_device_index),
              (d.properties.rendermodel_component_name =
                this.props.rendermodel_component_name),
              (d.properties["texture-id"] = z(this.props.texture_id)),
              (d.properties["sort-order"] = this.props.sort_order),
              (d.properties["sort-depth-bias"] = this.props.sort_depth_bias),
              [l, d]
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
            return I.createElement(
              "vsg-node",
              {
                style: {
                  display: this.visibility == se.Hidden ? "none" : null,
                },
              },
              this.props.children,
            );
          }
        }
        (Se.s_bPanelsAreDirty = !1),
          (0, C.gn)([B.ZP], Se.prototype, "onResizeObserved", null),
          (0, C.gn)([B.ZP], Se.prototype, "onPanelMouseDown", null),
          (0, C.gn)([B.ZP], Se.prototype, "onWindowMouseUp", null),
          (0, C.gn)([B.ZP], Se.prototype, "buildNode", null),
          (function (e) {
            (e[(e.Canvas = 0)] = "Canvas"), (e[(e.Image = 1)] = "Image");
          })(ae || (ae = {}));
        class De extends I.Component {
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
              (De.s_Current = this),
              (this.state = {
                bFontsLoaded: !1,
                nForcedUpdateNumber: 0,
                bShowDebugPointer: !1,
                eRenderMode: VRHTML.VRUtil.BSupportsCEFCanvas()
                  ? ae.Canvas
                  : ae.Image,
              }),
              (this.m_DomRef = I.createRef()),
              (this.m_scalingDomRef = I.createRef()),
              (this.m_CanvasRef = I.createRef()),
              (this.m_EmbeddedDataImgRef = I.createRef()),
              (this.m_DebugPointerRef = I.createRef());
          }
          static get IsSceneGraphApp() {
            return null !== De.Current();
          }
          static Current() {
            return De.s_Current;
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
            (Se.s_bPanelsAreDirty = !0),
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
            var i, o, n;
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
                (n = this.props.web_secret),
                (A = i),
                (V = o),
                (L = n),
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
            const e = this.state.eRenderMode == ae.Image,
              t = this.state.eRenderMode == ae.Canvas;
            let r = [];
            return (
              this.state.bShowDebugPointer && r.push("ShowDebugPointer"),
              I.createElement(
                "vsg-app",
                {
                  class: r.join(" "),
                  ref: this.m_DomRef,
                  "sg-forced-update-number": this.state.nForcedUpdateNumber,
                },
                I.createElement("div", {
                  className: "DebugPointer",
                  ref: this.m_DebugPointerRef,
                }),
                e &&
                  I.createElement("img", {
                    ref: this.m_EmbeddedDataImgRef,
                    className: "EmbeddedData",
                    height: De.k_EmbeddedDataRows,
                  }),
                t &&
                  I.createElement("canvas", {
                    ref: this.m_CanvasRef,
                    className: "EmbeddedData",
                    height: De.k_EmbeddedDataRows,
                  }),
                I.createElement(
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
            this.state.eRenderMode == ae.Image
              ? ((this.m_EmbeddedDataImgRef.current.width =
                  this.m_nEmbeddedDataWidth),
                this.m_EmbeddedDataImgRGBBuffer ||
                  (this.m_EmbeddedDataImgRGBBuffer =
                    VRHTML.VRUtil.CreateEmbeddedRGBScanline(
                      this.m_nEmbeddedDataWidth,
                      1,
                      4,
                    )))
              : this.state.eRenderMode == ae.Canvas &&
                ((this.m_CanvasRef.current.width = this.m_nEmbeddedDataWidth),
                (this.m_CanvasContext =
                  this.m_CanvasRef.current.getContext("2d")),
                (this.m_CanvasContext.globalCompositeOperation = "copy"),
                (this.m_CanvasContext.imageSmoothingEnabled = !1),
                null === this.m_Pixels &&
                  (this.m_Pixels = this.m_CanvasContext.createImageData(
                    this.m_nEmbeddedDataWidth,
                    De.k_EmbeddedDataRows,
                  ))),
              this.updateAllPanelBounds();
          }
          updateAllPanelBounds() {
            let e = this.m_DomRef.current.ownerDocument.defaultView,
              t = this.m_scalingDomRef.current.getBoundingClientRect(),
              r = t.width / this.m_fCurrentScale,
              i = t.height / this.m_fCurrentScale,
              o = { x: e.innerWidth / r, y: e.innerHeight / i },
              n = Math.min(o.x, o.y, 1);
            n != this.m_fCurrentScale &&
              (1 != n
                ? this.m_scalingDomRef.current.setAttribute(
                    "style",
                    "transform: scale(" + n + "); transform-origin: top left",
                  )
                : this.m_scalingDomRef.current.removeAttribute("style"),
              (this.m_fCurrentScale = n),
              (Se.s_bPanelsAreDirty = !0)),
              Se.s_bPanelsAreDirty &&
                (this.m_mapPanels.forEach((e) => e.updateLayoutValues()),
                K(),
                (Se.s_bPanelsAreDirty = !1),
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
                    i = e.m_Rect.x + e.m_Rect.width,
                    o = e.m_Rect.y,
                    n = e.m_Rect.y + e.m_Rect.height,
                    s = 1 + 3 * e.getEmbeddedIndex();
                  if (e.isExternal() || r >= i || o >= n)
                    for (let e = 0; e < 3; e++)
                      this.setPixel(s + 1, 0, 0, 0, 0);
                  else
                    this.setPixel(s, (65280 & r) >> 8, 255 & r, 0),
                      this.setPixel(s + 1, (65280 & i) >> 8, 255 & i, 255 & o),
                      this.setPixel(
                        s + 2,
                        (65280 & n) >> 8,
                        255 & n,
                        (65280 & o) >> 8,
                      );
                }),
                this.m_EmbeddedDataImgRef && this.state.eRenderMode == ae.Image)
              ) {
                const e = VRHTML.VRUtil.GetEmbeddedScanlineAsURIImage(
                  this.m_nEmbeddedDataWidth,
                  1,
                  4,
                );
                this.m_EmbeddedDataImgRef.current.src = e;
              } else if (
                this.m_CanvasRef &&
                this.state.eRenderMode == ae.Canvas
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
          setPixel(e, t, r, i, o = 255) {
            if (
              this.m_EmbeddedDataImgRGBBuffer &&
              this.state.eRenderMode == ae.Image
            ) {
              const n = new DataView(this.m_EmbeddedDataImgRGBBuffer);
              n.setUint8(4 * e + 0, t),
                n.setUint8(4 * e + 1, r),
                n.setUint8(4 * e + 2, i),
                n.setUint8(4 * e + 3, o);
            } else
              this.m_Pixels &&
                this.state.eRenderMode == ae.Canvas &&
                ((this.m_Pixels.data[4 * e + 0] = t),
                (this.m_Pixels.data[4 * e + 1] = r),
                (this.m_Pixels.data[4 * e + 2] = i),
                (this.m_Pixels.data[4 * e + 3] = o),
                (-1 === this.m_nDirtyXMin || e < this.m_nDirtyXMin) &&
                  (this.m_nDirtyXMin = e),
                (-1 === this.m_nDirtyXMax || e > this.m_nDirtyXMax) &&
                  (this.m_nDirtyXMax = e));
          }
        }
        (De.s_Current = null),
          (De.k_EmbeddedDataRows = 1),
          (0, C.gn)([B.ak], De.prototype, "toggleDebugPointer", null),
          (0, C.gn)([B.ak], De.prototype, "onMouseMove", null),
          (0, C.gn)([B.ak], De.prototype, "forceLayoutUpdate", null),
          (0, C.gn)([B.ak], De.prototype, "onMutation", null),
          (0, C.gn)(
            [B.ZP],
            class extends J {
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
          ),
          (0, C.gn)(
            [B.ZP],
            class extends J {
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
                  let e = X(this.props.color, { r: 0, g: 0, b: 0 });
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
            null,
          ),
          (function (e) {
            (e[(e.None = 0)] = "None"), (e[(e.Backface = 1)] = "Backface");
          })(le || (le = {}));
        class Re extends J {
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
              (r.properties["texture-id"] = z(this.props["texture-id"])),
              (r.properties["input-path"] = this.props["input-path"]),
              this.props.fresnel)
            ) {
              let e = this.props.fresnel;
              if ("string" == typeof e.color) r.properties.color = e.color;
              else {
                let t = X(e.color, { r: 0, g: 0, b: 0 });
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
        (0, C.gn)([B.ZP], Re.prototype, "buildNode", null),
          (0, C.gn)(
            [B.ZP],
            class extends J {
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
                    let t = X(e.color, { r: 0, g: 0, b: 0 });
                    r.properties.color = [t.r, t.g, t.b];
                  }
                }
                return [e, r];
              }
            }.prototype,
            "buildNode",
            null,
          );
        class Ce extends J {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return I.createElement("vsg-line", {
              "target-id": this.props.target_id,
              thickness: this.props.thickness,
              "start-buffer": this.props.start_buffer,
              "end-buffer": this.props.end_buffer,
            });
          }
        }
        (0, C.gn)(
          [B.ZP],
          class extends J {
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
                ? (r = j(this.props.location, { x: 0, y: 0 }))
                : "number" == typeof this.props.location &&
                  (r = ye(this.props.location));
              let i = this.createSgNode(t);
              if (this.props.latched && null !== this.m_latchedPosition)
                (i.properties["anchor-u"] = this.m_latchedPosition.u),
                  (i.properties["anchor-v"] = this.m_latchedPosition.v);
              else if (r) {
                const t = { u: 0.5 * r.x + 0.5, v: -0.5 * r.y + 0.5 },
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
                const r = t.ownerDocument,
                  o = t.getBoundingClientRect(),
                  n = o.left + o.width / 2,
                  s = o.top + o.height / 2,
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
                (i.properties["anchor-u"] = n / l),
                  (i.properties["anchor-v"] = s / d);
              }
              return (
                (this.m_latchedPosition = {
                  u: i.properties["anchor-u"],
                  v: i.properties["anchor-v"],
                }),
                [e, i]
              );
            }
          }.prototype,
          "buildNode",
          null,
        ),
          (0, C.gn)(
            [B.ZP],
            class extends J {
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
          ),
          (function (e) {
            (e[(e.LockedToParent = 0)] = "LockedToParent"),
              (e[(e.LockedToWorld = 1)] = "LockedToWorld");
          })(de || (de = {}));
        class Ie extends J {
          constructor(e) {
            super(e);
          }
          internalRender() {
            return I.createElement(
              "vsg-head-facing-transform",
              null,
              this.props.children,
            );
          }
        }
        function Me() {
          const [e, t] = I.useState(0);
          return (
            I.useEffect(() => {
              const r = window.setInterval(() => {
                t(e + 1);
              });
              return () => window.clearInterval(r);
            }),
            I.createElement(
              $,
              {
                summonOverlayKey: "system.dashboardtabtest",
                tabName: "3D Test",
                id: "settingsOverlay",
                iconUri:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/3D_model_of_a_Cube.stl/1200px-3D_model_of_a_Cube.stl.png",
              },
              I.createElement(
                fe,
                { translation: { y: 0.5 }, scale: 0.2, rotation: { y: e } },
                I.createElement(Re, { source: "locator" }),
              ),
              I.createElement(
                Ie,
                null,
                I.createElement(
                  Se,
                  { width: 1, origin: ie.BottomCenter },
                  I.createElement(
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
        ((ve = pe || (pe = {}))[(ve.Invalid = 0)] = "Invalid"),
          (ve[(ve.TrackingSystemName_String = 1e3)] =
            "TrackingSystemName_String"),
          (ve[(ve.ModelNumber_String = 1001)] = "ModelNumber_String"),
          (ve[(ve.SerialNumber_String = 1002)] = "SerialNumber_String"),
          (ve[(ve.RenderModelName_String = 1003)] = "RenderModelName_String"),
          (ve[(ve.WillDriftInYaw_Bool = 1004)] = "WillDriftInYaw_Bool"),
          (ve[(ve.ManufacturerName_String = 1005)] = "ManufacturerName_String"),
          (ve[(ve.TrackingFirmwareVersion_String = 1006)] =
            "TrackingFirmwareVersion_String"),
          (ve[(ve.HardwareRevision_String = 1007)] = "HardwareRevision_String"),
          (ve[(ve.AllWirelessDongleDescriptions_String = 1008)] =
            "AllWirelessDongleDescriptions_String"),
          (ve[(ve.ConnectedWirelessDongle_String = 1009)] =
            "ConnectedWirelessDongle_String"),
          (ve[(ve.DeviceIsWireless_Bool = 1010)] = "DeviceIsWireless_Bool"),
          (ve[(ve.DeviceIsCharging_Bool = 1011)] = "DeviceIsCharging_Bool"),
          (ve[(ve.DeviceBatteryPercentage_Float = 1012)] =
            "DeviceBatteryPercentage_Float"),
          (ve[(ve.StatusDisplayTransform_Matrix34 = 1013)] =
            "StatusDisplayTransform_Matrix34"),
          (ve[(ve.Firmware_UpdateAvailable_Bool = 1014)] =
            "Firmware_UpdateAvailable_Bool"),
          (ve[(ve.Firmware_ManualUpdate_Bool = 1015)] =
            "Firmware_ManualUpdate_Bool"),
          (ve[(ve.Firmware_ManualUpdateURL_String = 1016)] =
            "Firmware_ManualUpdateURL_String"),
          (ve[(ve.HardwareRevision_Uint64 = 1017)] = "HardwareRevision_Uint64"),
          (ve[(ve.FirmwareVersion_Uint64 = 1018)] = "FirmwareVersion_Uint64"),
          (ve[(ve.FPGAVersion_Uint64 = 1019)] = "FPGAVersion_Uint64"),
          (ve[(ve.VRCVersion_Uint64 = 1020)] = "VRCVersion_Uint64"),
          (ve[(ve.RadioVersion_Uint64 = 1021)] = "RadioVersion_Uint64"),
          (ve[(ve.DongleVersion_Uint64 = 1022)] = "DongleVersion_Uint64"),
          (ve[(ve.BlockServerShutdown_Bool = 1023)] =
            "BlockServerShutdown_Bool"),
          (ve[(ve.CanUnifyCoordinateSystemWithHmd_Bool = 1024)] =
            "CanUnifyCoordinateSystemWithHmd_Bool"),
          (ve[(ve.ContainsProximitySensor_Bool = 1025)] =
            "ContainsProximitySensor_Bool"),
          (ve[(ve.DeviceProvidesBatteryStatus_Bool = 1026)] =
            "DeviceProvidesBatteryStatus_Bool"),
          (ve[(ve.DeviceCanPowerOff_Bool = 1027)] = "DeviceCanPowerOff_Bool"),
          (ve[(ve.Firmware_ProgrammingTarget_String = 1028)] =
            "Firmware_ProgrammingTarget_String"),
          (ve[(ve.DeviceClass_Int32 = 1029)] = "DeviceClass_Int32"),
          (ve[(ve.HasCamera_Bool = 1030)] = "HasCamera_Bool"),
          (ve[(ve.DriverVersion_String = 1031)] = "DriverVersion_String"),
          (ve[(ve.Firmware_ForceUpdateRequired_Bool = 1032)] =
            "Firmware_ForceUpdateRequired_Bool"),
          (ve[(ve.ViveSystemButtonFixRequired_Bool = 1033)] =
            "ViveSystemButtonFixRequired_Bool"),
          (ve[(ve.ParentDriver_Uint64 = 1034)] = "ParentDriver_Uint64"),
          (ve[(ve.ResourceRoot_String = 1035)] = "ResourceRoot_String"),
          (ve[(ve.RegisteredDeviceType_String = 1036)] =
            "RegisteredDeviceType_String"),
          (ve[(ve.InputProfilePath_String = 1037)] = "InputProfilePath_String"),
          (ve[(ve.NeverTracked_Bool = 1038)] = "NeverTracked_Bool"),
          (ve[(ve.NumCameras_Int32 = 1039)] = "NumCameras_Int32"),
          (ve[(ve.CameraFrameLayout_Int32 = 1040)] = "CameraFrameLayout_Int32"),
          (ve[(ve.CameraStreamFormat_Int32 = 1041)] =
            "CameraStreamFormat_Int32"),
          (ve[(ve.AdditionalDeviceSettingsPath_String = 1042)] =
            "AdditionalDeviceSettingsPath_String"),
          (ve[(ve.DevicePowerUsage_Float = 1052)] = "DevicePowerUsage_Float"),
          (ve[(ve.ActualTrackingSystemName_String = 1054)] =
            "ActualTrackingSystemName_String"),
          (ve[(ve.ReportsTimeSinceVSync_Bool = 2e3)] =
            "ReportsTimeSinceVSync_Bool"),
          (ve[(ve.SecondsFromVsyncToPhotons_Float = 2001)] =
            "SecondsFromVsyncToPhotons_Float"),
          (ve[(ve.DisplayFrequency_Float = 2002)] = "DisplayFrequency_Float"),
          (ve[(ve.UserIpdMeters_Float = 2003)] = "UserIpdMeters_Float"),
          (ve[(ve.CurrentUniverseId_Uint64 = 2004)] =
            "CurrentUniverseId_Uint64"),
          (ve[(ve.PreviousUniverseId_Uint64 = 2005)] =
            "PreviousUniverseId_Uint64"),
          (ve[(ve.DisplayFirmwareVersion_Uint64 = 2006)] =
            "DisplayFirmwareVersion_Uint64"),
          (ve[(ve.IsOnDesktop_Bool = 2007)] = "IsOnDesktop_Bool"),
          (ve[(ve.DisplayMCType_Int32 = 2008)] = "DisplayMCType_Int32"),
          (ve[(ve.DisplayMCOffset_Float = 2009)] = "DisplayMCOffset_Float"),
          (ve[(ve.DisplayMCScale_Float = 2010)] = "DisplayMCScale_Float"),
          (ve[(ve.EdidVendorID_Int32 = 2011)] = "EdidVendorID_Int32"),
          (ve[(ve.DisplayMCImageLeft_String = 2012)] =
            "DisplayMCImageLeft_String"),
          (ve[(ve.DisplayMCImageRight_String = 2013)] =
            "DisplayMCImageRight_String"),
          (ve[(ve.DisplayGCBlackClamp_Float = 2014)] =
            "DisplayGCBlackClamp_Float"),
          (ve[(ve.EdidProductID_Int32 = 2015)] = "EdidProductID_Int32"),
          (ve[(ve.CameraToHeadTransform_Matrix34 = 2016)] =
            "CameraToHeadTransform_Matrix34"),
          (ve[(ve.DisplayGCType_Int32 = 2017)] = "DisplayGCType_Int32"),
          (ve[(ve.DisplayGCOffset_Float = 2018)] = "DisplayGCOffset_Float"),
          (ve[(ve.DisplayGCScale_Float = 2019)] = "DisplayGCScale_Float"),
          (ve[(ve.DisplayGCPrescale_Float = 2020)] = "DisplayGCPrescale_Float"),
          (ve[(ve.DisplayGCImage_String = 2021)] = "DisplayGCImage_String"),
          (ve[(ve.LensCenterLeftU_Float = 2022)] = "LensCenterLeftU_Float"),
          (ve[(ve.LensCenterLeftV_Float = 2023)] = "LensCenterLeftV_Float"),
          (ve[(ve.LensCenterRightU_Float = 2024)] = "LensCenterRightU_Float"),
          (ve[(ve.LensCenterRightV_Float = 2025)] = "LensCenterRightV_Float"),
          (ve[(ve.UserHeadToEyeDepthMeters_Float = 2026)] =
            "UserHeadToEyeDepthMeters_Float"),
          (ve[(ve.CameraFirmwareVersion_Uint64 = 2027)] =
            "CameraFirmwareVersion_Uint64"),
          (ve[(ve.CameraFirmwareDescription_String = 2028)] =
            "CameraFirmwareDescription_String"),
          (ve[(ve.DisplayFPGAVersion_Uint64 = 2029)] =
            "DisplayFPGAVersion_Uint64"),
          (ve[(ve.DisplayBootloaderVersion_Uint64 = 2030)] =
            "DisplayBootloaderVersion_Uint64"),
          (ve[(ve.DisplayHardwareVersion_Uint64 = 2031)] =
            "DisplayHardwareVersion_Uint64"),
          (ve[(ve.AudioFirmwareVersion_Uint64 = 2032)] =
            "AudioFirmwareVersion_Uint64"),
          (ve[(ve.CameraCompatibilityMode_Int32 = 2033)] =
            "CameraCompatibilityMode_Int32"),
          (ve[(ve.ScreenshotHorizontalFieldOfViewDegrees_Float = 2034)] =
            "ScreenshotHorizontalFieldOfViewDegrees_Float"),
          (ve[(ve.ScreenshotVerticalFieldOfViewDegrees_Float = 2035)] =
            "ScreenshotVerticalFieldOfViewDegrees_Float"),
          (ve[(ve.DisplaySuppressed_Bool = 2036)] = "DisplaySuppressed_Bool"),
          (ve[(ve.DisplayAllowNightMode_Bool = 2037)] =
            "DisplayAllowNightMode_Bool"),
          (ve[(ve.DisplayMCImageWidth_Int32 = 2038)] =
            "DisplayMCImageWidth_Int32"),
          (ve[(ve.DisplayMCImageHeight_Int32 = 2039)] =
            "DisplayMCImageHeight_Int32"),
          (ve[(ve.DisplayMCImageNumChannels_Int32 = 2040)] =
            "DisplayMCImageNumChannels_Int32"),
          (ve[(ve.DisplayMCImageData_Binary = 2041)] =
            "DisplayMCImageData_Binary"),
          (ve[(ve.SecondsFromPhotonsToVblank_Float = 2042)] =
            "SecondsFromPhotonsToVblank_Float"),
          (ve[(ve.DriverDirectModeSendsVsyncEvents_Bool = 2043)] =
            "DriverDirectModeSendsVsyncEvents_Bool"),
          (ve[(ve.DisplayDebugMode_Bool = 2044)] = "DisplayDebugMode_Bool"),
          (ve[(ve.GraphicsAdapterLuid_Uint64 = 2045)] =
            "GraphicsAdapterLuid_Uint64"),
          (ve[(ve.DriverProvidedChaperonePath_String = 2048)] =
            "DriverProvidedChaperonePath_String"),
          (ve[(ve.ExpectedTrackingReferenceCount_Int32 = 2049)] =
            "ExpectedTrackingReferenceCount_Int32"),
          (ve[(ve.ExpectedControllerCount_Int32 = 2050)] =
            "ExpectedControllerCount_Int32"),
          (ve[(ve.NamedIconPathControllerLeftDeviceOff_String = 2051)] =
            "NamedIconPathControllerLeftDeviceOff_String"),
          (ve[(ve.NamedIconPathControllerRightDeviceOff_String = 2052)] =
            "NamedIconPathControllerRightDeviceOff_String"),
          (ve[(ve.NamedIconPathTrackingReferenceDeviceOff_String = 2053)] =
            "NamedIconPathTrackingReferenceDeviceOff_String"),
          (ve[(ve.DoNotApplyPrediction_Bool = 2054)] =
            "DoNotApplyPrediction_Bool"),
          (ve[(ve.CameraToHeadTransforms_Matrix34_Array = 2055)] =
            "CameraToHeadTransforms_Matrix34_Array"),
          (ve[(ve.DistortionMeshResolution_Int32 = 2056)] =
            "DistortionMeshResolution_Int32"),
          (ve[(ve.DriverIsDrawingControllers_Bool = 2057)] =
            "DriverIsDrawingControllers_Bool"),
          (ve[(ve.DriverRequestsApplicationPause_Bool = 2058)] =
            "DriverRequestsApplicationPause_Bool"),
          (ve[(ve.DriverRequestsReducedRendering_Bool = 2059)] =
            "DriverRequestsReducedRendering_Bool"),
          (ve[(ve.MinimumIpdStepMeters_Float = 2060)] =
            "MinimumIpdStepMeters_Float"),
          (ve[(ve.AudioBridgeFirmwareVersion_Uint64 = 2061)] =
            "AudioBridgeFirmwareVersion_Uint64"),
          (ve[(ve.ImageBridgeFirmwareVersion_Uint64 = 2062)] =
            "ImageBridgeFirmwareVersion_Uint64"),
          (ve[(ve.ImuToHeadTransform_Matrix34 = 2063)] =
            "ImuToHeadTransform_Matrix34"),
          (ve[(ve.ImuFactoryGyroBias_Vector3 = 2064)] =
            "ImuFactoryGyroBias_Vector3"),
          (ve[(ve.ImuFactoryGyroScale_Vector3 = 2065)] =
            "ImuFactoryGyroScale_Vector3"),
          (ve[(ve.ImuFactoryAccelerometerBias_Vector3 = 2066)] =
            "ImuFactoryAccelerometerBias_Vector3"),
          (ve[(ve.ImuFactoryAccelerometerScale_Vector3 = 2067)] =
            "ImuFactoryAccelerometerScale_Vector3"),
          (ve[(ve.ConfigurationIncludesLighthouse20Features_Bool = 2069)] =
            "ConfigurationIncludesLighthouse20Features_Bool"),
          (ve[(ve.Prop_AdditionalRadioFeatures_Uint64 = 2070)] =
            "Prop_AdditionalRadioFeatures_Uint64"),
          (ve[(ve.Prop_CameraWhiteBalance_Vector4_Array = 2071)] =
            "Prop_CameraWhiteBalance_Vector4_Array"),
          (ve[(ve.Prop_CameraDistortionFunction_Int32_Array = 2072)] =
            "Prop_CameraDistortionFunction_Int32_Array"),
          (ve[(ve.Prop_CameraDistortionCoefficients_Float_Array = 2073)] =
            "Prop_CameraDistortionCoefficients_Float_Array"),
          (ve[(ve.Prop_ExpectedControllerType_String = 2074)] =
            "Prop_ExpectedControllerType_String"),
          (ve[(ve.HmdTrackingStyle_Int32 = 2075)] = "HmdTrackingStyle_Int32"),
          (ve[(ve.DriverProvidedChaperoneVisibility_Bool = 2076)] =
            "DriverProvidedChaperoneVisibility_Bool"),
          (ve[(ve.HmdColumnCorrectionSettingPrefix_String = 2077)] =
            "HmdColumnCorrectionSettingPrefix_String"),
          (ve[(ve.CameraSupportsCompatibilityModes_Bool = 2078)] =
            "CameraSupportsCompatibilityModes_Bool"),
          (ve[(ve.SupportsRoomViewDepthProjection_Bool = 2079)] =
            "SupportsRoomViewDepthProjection_Bool"),
          (ve[(ve.DisplayAvailableFrameRates_Float_Array = 2080)] =
            "DisplayAvailableFrameRates_Float_Array"),
          (ve[(ve.DisplaySupportsRuntimeFramerateChange_Bool = 2084)] =
            "DisplaySupportsRuntimeFramerateChange_Bool"),
          (ve[(ve.DisplaySupportsAnalogGain_Bool = 2085)] =
            "DisplaySupportsAnalogGain_Bool"),
          (ve[(ve.DisplayMinAnalogGain_Float = 2086)] =
            "DisplayMinAnalogGain_Float"),
          (ve[(ve.DisplayMaxAnalogGain_Float = 2087)] =
            "DisplayMaxAnalogGain_Float"),
          (ve[(ve.DashboardLinkSupport_Int32 = 2097)] =
            "DashboardLinkSupport_Int32"),
          (ve[(ve.DashboardScale_Float = 2091)] = "DashboardScale_Float"),
          (ve[(ve.IpdUIRangeMinMeters_Float = 2100)] =
            "IpdUIRangeMinMeters_Float"),
          (ve[(ve.IpdUIRangeMaxMeters_Float = 2101)] =
            "IpdUIRangeMaxMeters_Float"),
          (ve[(ve.Hmd_SupportsHDCP14LegacyCompat_Bool = 2102)] =
            "Hmd_SupportsHDCP14LegacyCompat_Bool"),
          (ve[(ve.Hmd_SupportsMicMonitoring_Bool = 2103)] =
            "Hmd_SupportsMicMonitoring_Bool"),
          (ve[(ve.Hmd_SupportsDisplayPortTrainingMode_Bool = 2104)] =
            "Hmd_SupportsDisplayPortTrainingMode_Bool"),
          (ve[(ve.Hmd_SupportsRoomViewDirect_Bool = 2105)] =
            "Hmd_SupportsRoomViewDirect_Bool"),
          (ve[(ve.Hmd_SupportsAppThrottling_Bool = 2106)] =
            "Hmd_SupportsAppThrottling_Bool"),
          (ve[(ve.Hmd_SupportsGpuBusMonitoring_Bool = 2107)] =
            "Hmd_SupportsGpuBusMonitoring_Bool"),
          (ve[(ve.DriverProvidedIPDVisibility_Bool = 2108)] =
            "DriverProvidedIPDVisibility_Bool"),
          (ve[(ve.Prop_Driver_Reserved_01 = 2109)] = "Prop_Driver_Reserved_01"),
          (ve[(ve.Prop_Driver_Reserved_03 = 2111)] = "Prop_Driver_Reserved_03"),
          (ve[(ve.DriverRequestedMuraCorrectionMode_Int32 = 2200)] =
            "DriverRequestedMuraCorrectionMode_Int32"),
          (ve[(ve.DriverRequestedMuraFeather_InnerLeft_Int32 = 2201)] =
            "DriverRequestedMuraFeather_InnerLeft_Int32"),
          (ve[(ve.DriverRequestedMuraFeather_InnerRight_Int32 = 2202)] =
            "DriverRequestedMuraFeather_InnerRight_Int32"),
          (ve[(ve.DriverRequestedMuraFeather_InnerTop_Int32 = 2203)] =
            "DriverRequestedMuraFeather_InnerTop_Int32"),
          (ve[(ve.DriverRequestedMuraFeather_InnerBottom_Int32 = 2204)] =
            "DriverRequestedMuraFeather_InnerBottom_Int32"),
          (ve[(ve.DriverRequestedMuraFeather_OuterLeft_Int32 = 2205)] =
            "DriverRequestedMuraFeather_OuterLeft_Int32"),
          (ve[(ve.DriverRequestedMuraFeather_OuterRight_Int32 = 2206)] =
            "DriverRequestedMuraFeather_OuterRight_Int32"),
          (ve[(ve.DriverRequestedMuraFeather_OuterTop_Int32 = 2207)] =
            "DriverRequestedMuraFeather_OuterTop_Int32"),
          (ve[(ve.DriverRequestedMuraFeather_OuterBottom_Int32 = 2208)] =
            "DriverRequestedMuraFeather_OuterBottom_Int32"),
          (ve[(ve.Audio_SupportsDualSpeakerAndJackOutput_Bool = 2303)] =
            "Audio_SupportsDualSpeakerAndJackOutput_Bool"),
          (ve[(ve.AttachedDeviceId_String = 3e3)] = "AttachedDeviceId_String"),
          (ve[(ve.SupportedButtons_Uint64 = 3001)] = "SupportedButtons_Uint64"),
          (ve[(ve.Axis0Type_Int32 = 3002)] = "Axis0Type_Int32"),
          (ve[(ve.Axis1Type_Int32 = 3003)] = "Axis1Type_Int32"),
          (ve[(ve.Axis2Type_Int32 = 3004)] = "Axis2Type_Int32"),
          (ve[(ve.Axis3Type_Int32 = 3005)] = "Axis3Type_Int32"),
          (ve[(ve.Axis4Type_Int32 = 3006)] = "Axis4Type_Int32"),
          (ve[(ve.ControllerRoleHint_Int32 = 3007)] =
            "ControllerRoleHint_Int32"),
          (ve[(ve.FieldOfViewLeftDegrees_Float = 4e3)] =
            "FieldOfViewLeftDegrees_Float"),
          (ve[(ve.FieldOfViewRightDegrees_Float = 4001)] =
            "FieldOfViewRightDegrees_Float"),
          (ve[(ve.FieldOfViewTopDegrees_Float = 4002)] =
            "FieldOfViewTopDegrees_Float"),
          (ve[(ve.FieldOfViewBottomDegrees_Float = 4003)] =
            "FieldOfViewBottomDegrees_Float"),
          (ve[(ve.TrackingRangeMinimumMeters_Float = 4004)] =
            "TrackingRangeMinimumMeters_Float"),
          (ve[(ve.TrackingRangeMaximumMeters_Float = 4005)] =
            "TrackingRangeMaximumMeters_Float"),
          (ve[(ve.ModeLabel_String = 4006)] = "ModeLabel_String"),
          (ve[(ve.IconPathName_String = 5e3)] = "IconPathName_String"),
          (ve[(ve.NamedIconPathDeviceOff_String = 5001)] =
            "NamedIconPathDeviceOff_String"),
          (ve[(ve.NamedIconPathDeviceSearching_String = 5002)] =
            "NamedIconPathDeviceSearching_String"),
          (ve[(ve.NamedIconPathDeviceSearchingAlert_String = 5003)] =
            "NamedIconPathDeviceSearchingAlert_String"),
          (ve[(ve.NamedIconPathDeviceReady_String = 5004)] =
            "NamedIconPathDeviceReady_String"),
          (ve[(ve.NamedIconPathDeviceReadyAlert_String = 5005)] =
            "NamedIconPathDeviceReadyAlert_String"),
          (ve[(ve.NamedIconPathDeviceNotReady_String = 5006)] =
            "NamedIconPathDeviceNotReady_String"),
          (ve[(ve.NamedIconPathDeviceStandby_String = 5007)] =
            "NamedIconPathDeviceStandby_String"),
          (ve[(ve.NamedIconPathDeviceAlertLow_String = 5008)] =
            "NamedIconPathDeviceAlertLow_String"),
          (ve[(ve.DisplayHiddenArea_Binary_Start = 5100)] =
            "DisplayHiddenArea_Binary_Start"),
          (ve[(ve.DisplayHiddenArea_Binary_End = 5150)] =
            "DisplayHiddenArea_Binary_End"),
          (ve[(ve.ParentContainer = 5151)] = "ParentContainer"),
          (ve[(ve.UserConfigPath_String = 6e3)] = "UserConfigPath_String"),
          (ve[(ve.InstallPath_String = 6001)] = "InstallPath_String"),
          (ve[(ve.HasDisplayComponent_Bool = 6002)] =
            "HasDisplayComponent_Bool"),
          (ve[(ve.HasControllerComponent_Bool = 6003)] =
            "HasControllerComponent_Bool"),
          (ve[(ve.HasCameraComponent_Bool = 6004)] = "HasCameraComponent_Bool"),
          (ve[(ve.HasDriverDirectModeComponent_Bool = 6005)] =
            "HasDriverDirectModeComponent_Bool"),
          (ve[(ve.HasVirtualDisplayComponent_Bool = 6006)] =
            "HasVirtualDisplayComponent_Bool"),
          (ve[(ve.HasSpatialAnchorsSupport_Bool = 6007)] =
            "HasSpatialAnchorsSupport_Bool"),
          (ve[(ve.ControllerType_String = 7e3)] = "ControllerType_String"),
          (ve[(ve.LegacyInputProfile_String = 7001)] =
            "LegacyInputProfile_String"),
          (ve[(ve.VendorSpecific_Reserved_Start = 1e4)] =
            "VendorSpecific_Reserved_Start"),
          (ve[(ve.VendorSpecific_Reserved_End = 10999)] =
            "VendorSpecific_Reserved_End"),
          (ve[(ve.TrackedDeviceProperty_Max = 1e6)] =
            "TrackedDeviceProperty_Max"),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.SecondaryClick = 1)] = "SecondaryClick"),
              (e[(e.PrimaryClick = 2)] = "PrimaryClick");
          })(ce || (ce = {})),
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
          })(ue || (ue = {})),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.ButtonEnter = 1)] = "ButtonEnter"),
              (e[(e.ButtonLeave = 2)] = "ButtonLeave"),
              (e[(e.Snap = 3)] = "Snap"),
              (e[(e.Sliding = 4)] = "Sliding"),
              (e[(e.SlidingEdge = 5)] = "SlidingEdge");
          })(he || (he = {})),
          (function (e) {
            (e[(e.Minimal = 1)] = "Minimal"),
              (e[(e.Modal = 2)] = "Modal"),
              (e[(e.ShowArrowKeys = 4)] = "ShowArrowKeys"),
              (e[(e.HideDoneKey = 8)] = "HideDoneKey");
          })(_e || (_e = {})),
          (function (e) {
            (e[(e.Unknown = -1)] = "Unknown"),
              (e[(e.Idle = 0)] = "Idle"),
              (e[(e.UserInteraction = 1)] = "UserInteraction"),
              (e[(e.UserInteraction_Timeout = 2)] = "UserInteraction_Timeout"),
              (e[(e.Standby = 3)] = "Standby"),
              (e[(e.Idle_Timeout = 4)] = "Idle_Timeout");
          })(me || (me = {})),
          (function (e) {
            (e[(e.Notification_Shown = 600)] = "Notification_Shown"),
              (e[(e.Notification_Hidden = 601)] = "Notification_Hidden"),
              (e[(e.Notification_BeginInteraction = 602)] =
                "Notification_BeginInteraction"),
              (e[(e.Notification_Destroyed = 603)] = "Notification_Destroyed");
          })(ge || (ge = {})),
          I.Component,
          (0, C.gn)(
            [B.ZP],
            class extends J {
              constructor(e) {
                super(e), super.setBuildNodeOverride(this.buildNode);
              }
              getNodeType() {
                return "dashboardtransform";
              }
              buildNode(e, t) {
                var r, i;
                const o = this.createSgNode(t);
                return (
                  (o.properties.continuous_relatch =
                    null !== (r = this.props.bContinuousRelatch) &&
                    void 0 !== r &&
                    r),
                  (o.properties.free_dashboard_transform =
                    null !== (i = this.props.bFreeDashboardTransform) &&
                    void 0 !== i &&
                    i),
                  [e, o]
                );
              }
            }.prototype,
            "buildNode",
            null,
          ),
          (0, C.gn)(
            [B.ZP],
            class extends J {
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
          ),
          (0, C.gn)(
            [B.ZP],
            class extends J {
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
          ),
          (0, C.gn)(
            [B.ZP],
            class extends J {
              constructor(e) {
                super(e), super.setBuildNodeOverride(this.buildNode);
              }
              getNodeType() {
                return "reparent-to-panel";
              }
              buildNode(e, t) {
                const r = this.createSgNode(t),
                  i = Object.assign(Object.assign({}, e), {
                    bInsideReparentedPanel: !0,
                    currentPanel: null,
                  });
                return (
                  this.props.parent_overlay_key &&
                    (r.properties["parent-overlay-key"] =
                      this.props.parent_overlay_key),
                  [i, r]
                );
              }
            }.prototype,
            "buildNode",
            null,
          ),
          VRHTML;
        class Be extends I.Component {
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
              (this.mailbox = new P()),
              this.mailbox.Init("scenegraphtest"),
              this.mailbox.RegisterHandler("fnord", this.onMailboxMessage);
          }
          componentWillUnmount() {
            window.cancelAnimationFrame(this.animationFrameHandle);
          }
          componentDidMount() {
            K();
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
                      : VRHTML.GetPose("/user/hand/right", s.Standing)
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
            (t += "" + e),
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
            return I.createElement(
              "div",
              null,
              I.createElement(
                $,
                {
                  summonOverlayKey: "keypadtest",
                  id: "bigpicture",
                  tabName: "Steam",
                  iconUri:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/512px-Steam_icon_logo.svg.png",
                },
                I.createElement(
                  Se,
                  { width: 1.2, interactive: !0 },
                  I.createElement(
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
                    I.createElement("h1", null, "Elastic panel!"),
                    I.createElement("hr", null),
                    I.createElement("pre", null, this.state.LabelValue),
                    I.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: () => this.onNumberClicked(7),
                      },
                      "7",
                    ),
                    I.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: () => this.onNumberClicked(8),
                      },
                      "8",
                    ),
                    I.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: () => this.onNumberClicked(9),
                      },
                      "9",
                    ),
                    I.createElement("br", null),
                    I.createElement("br", null),
                    I.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: () => this.onNumberClicked(4),
                      },
                      "4",
                    ),
                    I.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: () => this.onNumberClicked(5),
                      },
                      "5",
                    ),
                    I.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: () => this.onNumberClicked(6),
                      },
                      "6",
                    ),
                    I.createElement("br", null),
                    I.createElement("br", null),
                    I.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: () => this.onNumberClicked(1),
                      },
                      "1",
                    ),
                    I.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: () => this.onNumberClicked(2),
                      },
                      "2",
                    ),
                    I.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: () => this.onNumberClicked(3),
                      },
                      "3",
                    ),
                    I.createElement("br", null),
                    I.createElement("br", null),
                    I.createElement(
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
              I.createElement(
                fe,
                { transform: this.state.Transform, parent_origin: re.Standing },
                I.createElement(Re, { source: "generic_hmd" }),
              ),
              I.createElement(
                fe,
                {
                  translation: { x: 0, y: 0.3, z: 0 },
                  rotation: { x: 30, y: this.state.Degrees, z: 90 },
                  parent_origin: re.Standing,
                },
                I.createElement(Re, { source: "locator" }),
              ),
              I.createElement(fe, {
                translation: { x: 0, y: 1.8, z: 0 },
                parent_origin: re.Standing,
                id: "line_origin",
              }),
              I.createElement(
                fe,
                {
                  translation: { x: 0, y: 0, z: -0.5 },
                  scale: { x: 2, y: 2, z: 2 },
                  parent_origin: re.Seated,
                },
                I.createElement(
                  Se,
                  { height: 0.45, width: 0.45, interactive: !0 },
                  I.createElement("iframe", {
                    src: "https://www.valvesoftware.com",
                    style: { width: "400px", height: "400px", padding: 0 },
                    height: "400",
                    width: "400",
                  }),
                ),
              ),
              I.createElement(
                fe,
                {
                  translation: { x: 0, y: 0, z: -0.5 },
                  parent_path: "/user/hand/left",
                  id: "left_hand_model",
                },
                I.createElement(Re, { source: "locator_one_sided" }),
              ),
              I.createElement(
                fe,
                { parent_path: "/user/hand/right" },
                I.createElement(Ce, {
                  target_id: "line_origin",
                  thickness: 0.01,
                  end_buffer: 0.5,
                }),
                I.createElement(Ce, {
                  target_id: "left_hand_model",
                  thickness: 0.001,
                  end_buffer: 0.1,
                  start_buffer: 0.2,
                }),
              ),
              I.createElement(fe, {
                translation: { x: 0, y: 0, z: -0.5 },
                parent_path: "/user/hand/right/pose/base",
              }),
              I.createElement(
                fe,
                {
                  translation: { x: 0, y: -1.2, z: -2 },
                  rotation: { x: -45 },
                  parent_path: "/user/head/pose/raw",
                },
                I.createElement(
                  Se,
                  { height: 0.2, width: void 0, interactive: !1 },
                  I.createElement(
                    "div",
                    {
                      className: "panel",
                      style: { height: "150px", width: "600px" },
                    },
                    I.createElement("h1", null, "Some Text for the panel."),
                    "Frame: ",
                    this.state.Frame,
                    I.createElement("br", null),
                    "Degrees: ",
                    Math.round(this.state.Degrees),
                    I.createElement("br", null),
                  ),
                ),
              ),
              I.createElement(
                fe,
                { parent_origin: re.Standing },
                I.createElement(Re, {
                  source: "{knuckles}valve_controller_knu_ev2_0_left",
                }),
              ),
              I.createElement(
                fe,
                { translation: { y: 0.5 } },
                I.createElement(
                  te,
                  { value: 0.1 },
                  I.createElement(
                    ee,
                    { color: { b: 1, g: 1, r: 0 } },
                    I.createElement(Re, {
                      source: "generic_hmd",
                      wireframe: !0,
                      fresnel: { color: { r: 1 }, opacity: 0.7, strength: 1 },
                    }),
                  ),
                ),
              ),
              I.createElement(Me, null),
            );
          }
        }
        (0, C.gn)([B.ak], Be.prototype, "onAnimationFrame", null),
          (0, C.gn)([B.ak], Be.prototype, "onNumberClicked", null),
          (0, C.gn)([B.ak], Be.prototype, "onHideElasticPanel", null),
          (0, C.gn)([B.ak], Be.prototype, "onMailboxMessage", null),
          M.render(
            I.createElement(De, null, I.createElement(Be, null)),
            document.getElementById("root"),
          ),
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VROverlay.SetFlag(
              VRHTML.VROverlay.ThisOverlayHandle(),
              d.ShowTouchPadScrollWheel,
              !0,
            ),
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VROverlay.SetFlag(
              VRHTML.VROverlay.ThisOverlayHandle(),
              d.SendVRSmoothScrollEvents,
              !0,
            ),
          null === VRHTML ||
            void 0 === VRHTML ||
            VRHTML.VROverlay.SetInputMethod(
              VRHTML.VROverlay.ThisOverlayHandle(),
              p.Mouse,
            );
      },
    },
    r = {};
  function i(e) {
    var o = r[e];
    if (void 0 !== o) return o.exports;
    var n = (r[e] = { id: e, exports: {} });
    return t[e].call(n.exports, n, n.exports, i), n.exports;
  }
  (i.m = t),
    (e = []),
    (i.O = (t, r, o, n) => {
      if (!r) {
        var s = 1 / 0;
        for (p = 0; p < e.length; p++) {
          for (var [r, o, n] = e[p], a = !0, l = 0; l < r.length; l++)
            (!1 & n || s >= n) && Object.keys(i.O).every((e) => i.O[e](r[l]))
              ? r.splice(l--, 1)
              : ((a = !1), n < s && (s = n));
          if (a) {
            e.splice(p--, 1);
            var d = o();
            void 0 !== d && (t = d);
          }
        }
        return t;
      }
      n = n || 0;
      for (var p = e.length; p > 0 && e[p - 1][2] > n; p--) e[p] = e[p - 1];
      e[p] = [r, o, n];
    }),
    (i.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return i.d(t, { a: t }), t;
    }),
    (i.d = (e, t) => {
      for (var r in t)
        i.o(t, r) &&
          !i.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
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
    (i.j = 446),
    (() => {
      var e = { 446: 0 };
      i.O.j = (t) => 0 === e[t];
      var t = (t, r) => {
          var o,
            n,
            [s, a, l] = r,
            d = 0;
          if (s.some((t) => 0 !== e[t])) {
            for (o in a) i.o(a, o) && (i.m[o] = a[o]);
            if (l) var p = l(i);
          }
          for (t && t(r); d < s.length; d++)
            (n = s[d]), i.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
          return i.O(p);
        },
        r = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (i.nc = void 0);
  var o = i.O(void 0, [968], () => i(5971));
  o = i.O(o);
})();
//# sourceMappingURL=scenegraphtest.js.map?v=e80b1700e94c6ce2b81b
