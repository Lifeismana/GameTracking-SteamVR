var CLSTAMP = "10590646";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [652],
  {
    2824: (e, t, o) => {
      o.d(t, { I0: () => l, M9: () => _, _n: () => d });
      var r = o(1635),
        n = o(7813),
        i = o(3236),
        a = o(1295),
        s = o(776);
      const _ = "vrwebui_dashboardstore",
        l = "binding_callouts/main";
      class d {
        constructor() {
          (this.m_wsWebSocketToServer = void 0),
            (this.connected = !1),
            (this.m_oHandlers = {}),
            (this.m_oWaits = {}),
            (this.m_oConnectWaits = []),
            (this.m_nNextMessageNumber = 1),
            (this.Log = new s.wd("Mailbox", () => this.m_sMailboxName)),
            (0, n.makeObservable)(this);
        }
        OpenWebSocketToHost() {
          return new Promise((e, t) => {
            this.Log.Info("Opening Web Socket...");
            let o = "ws://127.0.0.1:27062";
            this.m_sWebSecret && (o += "?secret=" + this.m_sWebSecret),
              this.m_wsWebSocketToServer &&
                (this.Log.Error(
                  "OpenWebSocketToHost called on existing connection",
                ),
                this.CloseWebSocket());
            let r = !1;
            (this.m_wsWebSocketToServer = new WebSocket(o)),
              this.m_wsWebSocketToServer.addEventListener("open", (t) => {
                this.OnWebSocketOpen(t), r || e(), (r = !0);
              }),
              this.m_wsWebSocketToServer.addEventListener(
                "message",
                this.OnWebSocketMessage,
              ),
              this.m_wsWebSocketToServer.addEventListener(
                "close",
                this.OnWebSocketClose,
              ),
              this.m_wsWebSocketToServer.addEventListener("error", (e) => {
                this.OnWebSocketError(e), r || t(), (r = !0);
              });
          });
        }
        CloseWebSocket() {
          this.m_wsWebSocketToServer.removeEventListener(
            "message",
            this.OnWebSocketMessage,
          ),
            this.m_wsWebSocketToServer.removeEventListener(
              "close",
              this.OnWebSocketClose,
            ),
            this.m_wsWebSocketToServer.close(),
            (this.m_wsWebSocketToServer = void 0),
            (this.connected = !1);
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
          return (0, r.sH)(this, void 0, void 0, function* () {
            return (
              (this.m_sMailboxName = d.EnsureUniqueName(e)),
              (this.m_sWebSecret = t),
              (this.connected = !1),
              this.OpenWebSocketToHost()
            );
          });
        }
        Destroy() {
          this.CloseWebSocket();
        }
        get name() {
          return this.m_sMailboxName;
        }
        OnWebSocketOpen(e) {
          (this.connected = !0),
            this.Log.Info("Web Socket Opened"),
            this.WebSocketSend("mailbox_open " + this.m_sMailboxName),
            window.addEventListener("beforeunload", () => {
              this.WebSocketSend("websocket_close");
            });
          for (let e of this.m_oConnectWaits) e();
          this.m_oConnectWaits = [];
        }
        OnWebSocketClose(e) {
          return (0, r.sH)(this, void 0, void 0, function* () {
            this.Log.Warning("Lost connection to host. code:", e.code),
              (this.connected = !1),
              (this.m_wsWebSocketToServer = void 0),
              yield (0, a.IP)(1e3),
              this.OpenWebSocketToHost();
          });
        }
        OnWebSocketError(e) {
          return (0, r.sH)(this, void 0, void 0, function* () {
            this.Log.ErrorOnceThenWarn(
              "OnWebSocketError",
              "Mailbox error:",
              e.type,
            ),
              (this.connected = !1);
          });
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
            o = !1;
          if (
            (this.m_oHandlers.hasOwnProperty(t.type) &&
              (this.m_oHandlers[t.type](t), (o = !0)),
            this.m_oWaits.hasOwnProperty(t.type))
          ) {
            let e = !1;
            for (let o of this.m_oWaits[t.type])
              o.nMessageId == t.message_id && (o.callback(t), (e = !0));
            e
              ? (this.m_oWaits[t.type] = this.m_oWaits[t.type].filter(
                  (e) => e.nMessageId != t.message_id,
                ))
              : this.Log.Error(
                  `Received a ${t.type} message, but didn't have a matching message_id. Did the other end forget to mirror message_id?`,
                ),
              (o = !0);
          }
          o ||
            this.Log.ErrorOnceThenWarn(
              "OnWebsocket283",
              "Received unhandled message: ",
              t.type,
              t,
            );
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
          return new Promise((o, r) => {
            this.m_oWaits[e] || (this.m_oWaits[e] = []),
              this.m_oWaits[e].push({ callback: o, nMessageId: t });
          });
        }
        WaitForConnect() {
          return new Promise((e, t) => {
            this.connected ? e() : this.m_oConnectWaits.push(e);
          });
        }
        WaitForMailbox(e) {
          return (0, r.sH)(this, void 0, void 0, function* () {
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
        SendMessageAndWaitForResponse(e, t, o) {
          let r = Object.assign({}, t);
          null == r.returnAddress && (r.returnAddress = this.m_sMailboxName),
            (r.message_id = this.m_nNextMessageNumber++);
          const n = this.WaitForMessage(o, r.message_id);
          return this.SendMessage(e, r), n;
        }
        SendResponse(e, t) {
          if (!e.returnAddress)
            throw new Error("Missing return address on message");
          let o = Object.assign(Object.assign({}, t), {
            message_id: e.message_id,
          });
          (o.message_id = e.message_id), this.SendMessage(e.returnAddress, o);
        }
        SendDebugIllegalMsg() {
          this.WebSocketSend("debug_send_illegal_msg");
        }
        SendDebugCloseMsg() {
          this.WebSocketSend("debug_close");
        }
      }
      (d.s_nNextMailboxNumber = 1),
        (0, r.Cg)([n.observable], d.prototype, "connected", void 0),
        (0, r.Cg)([i.o], d.prototype, "OpenWebSocketToHost", null),
        (0, r.Cg)([i.o], d.prototype, "OnWebSocketOpen", null),
        (0, r.Cg)([i.o], d.prototype, "OnWebSocketClose", null),
        (0, r.Cg)([i.o], d.prototype, "OnWebSocketError", null),
        (0, r.Cg)([i.o], d.prototype, "WebSocketSend", null),
        (0, r.Cg)([i.o], d.prototype, "OnWebSocketMessage", null);
    },
    4367: (e, t, o) => {
      var r, n, i, a, s, _, l, d, u, c, p, m, S, g;
      o.d(t, { en: () => i, fD: () => r }),
        (function (e) {
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
            (e[(e.AllowLightSourceFrequency_Bool = 1056)] =
              "AllowLightSourceFrequency_Bool"),
            (e[(e.HasEyeTracker_Bool = 1060)] = "HasEyeTracker_Bool"),
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
        })(r || (r = {})),
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
            (e[(e.k_EButton_Dashboard_Back = 2)] = "k_EButton_Dashboard_Back"),
            (e[(e.k_EButton_IndexController_A = 2)] =
              "k_EButton_IndexController_A"),
            (e[(e.k_EButton_IndexController_B = 1)] =
              "k_EButton_IndexController_B"),
            (e[(e.k_EButton_IndexController_JoyStick = 35)] =
              "k_EButton_IndexController_JoyStick"),
            (e[(e.k_EButton_Reserved0 = 50)] = "k_EButton_Reserved0"),
            (e[(e.k_EButton_Reserved1 = 51)] = "k_EButton_Reserved1"),
            (e[(e.k_EButton_Max = 64)] = "k_EButton_Max");
        })(n || (n = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.ButtonEnter = 1)] = "ButtonEnter"),
            (e[(e.ButtonLeave = 2)] = "ButtonLeave"),
            (e[(e.Snap = 3)] = "Snap"),
            (e[(e.Sliding = 4)] = "Sliding"),
            (e[(e.SlidingEdge = 5)] = "SlidingEdge");
        })(i || (i = {})),
        (function (e) {
          (e[(e.Minimal = 1)] = "Minimal"),
            (e[(e.Modal = 2)] = "Modal"),
            (e[(e.ShowArrowKeys = 4)] = "ShowArrowKeys"),
            (e[(e.HideDoneKey = 8)] = "HideDoneKey");
        })(a || (a = {})),
        (function (e) {
          (e[(e.Unknown = -1)] = "Unknown"),
            (e[(e.Idle = 0)] = "Idle"),
            (e[(e.UserInteraction = 1)] = "UserInteraction"),
            (e[(e.UserInteraction_Timeout = 2)] = "UserInteraction_Timeout"),
            (e[(e.Standby = 3)] = "Standby"),
            (e[(e.Idle_Timeout = 4)] = "Idle_Timeout");
        })(s || (s = {})),
        (function (e) {
          (e[(e.Notification_Shown = 600)] = "Notification_Shown"),
            (e[(e.Notification_Hidden = 601)] = "Notification_Hidden"),
            (e[(e.Notification_BeginInteraction = 602)] =
              "Notification_BeginInteraction"),
            (e[(e.Notification_Destroyed = 603)] = "Notification_Destroyed");
        })(_ || (_ = {})),
        (function (e) {
          (e[(e.TheaterFast = 0)] = "TheaterFast"),
            (e[(e.TheaterSlow = 1)] = "TheaterSlow");
        })(l || (l = {})),
        (function (e) {
          (e[(e.Constant = 0)] = "Constant"),
            (e[(e.Nearest = 1)] = "Nearest"),
            (e[(e.Linear = 2)] = "Linear"),
            (e[(e.SmoothStep = 3)] = "SmoothStep"),
            (e[(e.SmootherStep = 4)] = "SmootherStep");
        })(d || (d = {})),
        (function (e) {
          (e[(e.Invalid = 0)] = "Invalid"),
            (e[(e.RecenterCountdown = 1)] = "RecenterCountdown"),
            (e[(e.FloorAdjustExisting = 2)] = "FloorAdjustExisting"),
            (e[(e.RoomSetupFloor = 3)] = "RoomSetupFloor"),
            (e[(e.ClearRoomSetup = 4)] = "ClearRoomSetup"),
            (e[(e.RoomSetupFull = 5)] = "RoomSetupFull");
        })(u || (u = {})),
        (function (e) {
          (e[(e.Near = 0)] = "Near"),
            (e[(e.Middle = 1)] = "Middle"),
            (e[(e.Far = 2)] = "Far"),
            (e[(e.VRGamepadUI = 3)] = "VRGamepadUI");
        })(c || (c = {})),
        (function (e) {
          (e[(e.__LocalSteamVR = 0)] = "__LocalSteamVR"),
            (e[(e.__LocalSteam = 1)] = "__LocalSteam"),
            (e[(e.__RemoteSteamVR = 2)] = "__RemoteSteamVR"),
            (e[(e.__RemoteSteam = 3)] = "__RemoteSteam"),
            (e[(e.MutualLocal = 4)] = "MutualLocal"),
            (e[(e.MutualSteamVR = 5)] = "MutualSteamVR"),
            (e[(e.MutualSteam = 6)] = "MutualSteam");
        })(p || (p = {})),
        (function (e) {
          (e[(e.Dashboard = 1)] = "Dashboard"),
            (e[(e.LeftHand = 2)] = "LeftHand"),
            (e[(e.RightHand = 3)] = "RightHand"),
            (e[(e.World = 4)] = "World"),
            (e[(e.Theater = 5)] = "Theater"),
            (e[(e.Boot = 6)] = "Boot");
        })(m || (m = {})),
        (function (e) {
          (e[(e.Invalid = 0)] = "Invalid"),
            (e[(e.System = 1)] = "System"),
            (e[(e.SteamInput = 2)] = "SteamInput"),
            (e[(e.VRInput = 3)] = "VRInput");
        })(S || (S = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.ThirdPartyClient = 1)] = "ThirdPartyClient"),
            (e[(e.SteamVRClientUnified = 2)] = "SteamVRClientUnified"),
            (e[(e.SteamVRClientLegacyDual = 3)] = "SteamVRClientLegacyDual");
        })(g || (g = {}));
    },
    6138: (e, t, o) => {
      o.d(t, { $: () => d, W: () => u });
      var r = o(1635),
        n = o(6540),
        i = o(3236),
        a = o(4963),
        s = o(6090),
        _ = o(6189),
        l = o(1139);
      class d extends n.Component {
        constructor() {
          super(...arguments), (this.m_ref = n.createRef());
        }
        get elem() {
          return this.m_ref.current;
        }
        get disabled() {
          return !1 === this.props.enabled;
        }
        onMouseDown(e) {
          var t, o, r;
          null === (o = (t = this.props).onMouseDown) ||
            void 0 === o ||
            o.call(t, e),
            this.disabled ||
              a.u.Instance.playSound(
                null !== (r = this.props.pressSoundEffect) && void 0 !== r
                  ? r
                  : null,
              );
        }
        onMouseUp(e) {
          var t, o;
          null === (o = (t = this.props).onMouseUp) ||
            void 0 === o ||
            o.call(t, e);
        }
        onClick(e) {
          var t, o, r;
          this.disabled ||
            (null === (o = (t = this.props).onClick) ||
              void 0 === o ||
              o.call(t, e),
            u.temporarilySuppressSoundEffect(),
            a.u.Instance.playSound(
              null !== (r = this.props.releaseSoundEffect) && void 0 !== r
                ? r
                : a.j.ButtonClick,
            ));
        }
        onMouseEnter(e) {
          var t, o;
          null === (o = (t = this.props).onMouseEnter) ||
            void 0 === o ||
            o.call(t, e),
            this.disabled ||
              ((0, s.R$)() == s.OH.Overlay &&
                _.W.Instance.triggerHaptic(s.en.ButtonEnter));
        }
        onMouseLeave(e) {
          this.props.onMouseLeave && this.props.onMouseLeave(e),
            this.disabled ||
              ((0, s.R$)() == s.OH.Overlay &&
                _.W.Instance.triggerHaptic(s.en.ButtonLeave));
        }
        render() {
          let e = Object.assign({}, this.props);
          return (
            delete e.enabled,
            delete e.pressSoundEffect,
            delete e.releaseSoundEffect,
            (e.className = (0, l.FH)(e.className, ["Disabled", this.disabled])),
            n.cloneElement(n.createElement("div", e, this.props.children), {
              onClick: this.onClick,
              onMouseDown: this.onMouseDown,
              onMouseUp: this.onMouseUp,
              onMouseEnter: this.onMouseEnter,
              onMouseLeave: this.onMouseLeave,
              ref: this.m_ref,
            })
          );
        }
      }
      (0, r.Cg)([i.o], d.prototype, "onMouseDown", null),
        (0, r.Cg)([i.o], d.prototype, "onMouseUp", null),
        (0, r.Cg)([i.o], d.prototype, "onClick", null),
        (0, r.Cg)([i.o], d.prototype, "onMouseEnter", null),
        (0, r.Cg)([i.o], d.prototype, "onMouseLeave", null);
      class u extends n.Component {
        static temporarilySuppressSoundEffect() {
          window.clearTimeout(this.s_nPlaySoundEffectTimeout),
            (this.s_nPlaySoundEffectTimeout = 0),
            window.clearTimeout(this.s_nSuppressingSoundEffectsTimeout),
            (this.s_nSuppressingSoundEffectsTimeout = window.setTimeout(
              this.endSoundEffectSuppression,
              this.k_nSoundEffectSuppressionPeriod,
            ));
        }
        static get suppressingSoundEffect() {
          return this.s_nSuppressingSoundEffectsTimeout > 0;
        }
        onClick(e) {
          u.suppressingSoundEffect ||
            (window.clearTimeout(u.s_nPlaySoundEffectTimeout),
            (u.s_nPlaySoundEffectTimeout = window.setTimeout(
              u.playSoundEffect,
              u.k_nSoundEffectDelay,
            ))),
            this.props.onClick && this.props.onClick(e);
        }
        static endSoundEffectSuppression() {
          window.clearTimeout(this.s_nSuppressingSoundEffectsTimeout),
            (this.s_nSuppressingSoundEffectsTimeout = 0);
        }
        static playSoundEffect() {
          a.u.Instance.playSound(a.j.SurfaceClick);
        }
        render() {
          return n.cloneElement(
            n.createElement("div", this.props, this.props.children),
            { onClick: this.onClick },
          );
        }
      }
      (u.k_nSoundEffectSuppressionPeriod = 4),
        (u.k_nSoundEffectDelay = 2),
        (u.s_nSuppressingSoundEffectsTimeout = 0),
        (u.s_nPlaySoundEffectTimeout = 0),
        (0, r.Cg)([i.o], u.prototype, "onClick", null),
        (0, r.Cg)([i.o], u, "endSoundEffectSuppression", null),
        (0, r.Cg)([i.o], u, "playSoundEffect", null);
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~4e00f5086.js.map
