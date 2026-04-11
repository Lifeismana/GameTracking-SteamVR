var CLSTAMP = "steamdb";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [652],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = "systemui_dashboard_private",
        _ = "binding_callouts/main";
      class _ {
        constructor() {
          (this.m_wsWebSocketToServer = void 0),
            (this.connected = !1),
            (this.m_oHandlers = {}),
            (this.m_oWaits = {}),
            (this.m_oConnectWaits = []),
            (this.m_fnConnectResolve = void 0),
            (this.m_nNextMessageNumber = 1),
            (this.Log = new _._("Mailbox", () => this.m_sMailboxName)),
            (0, _.makeObservable)(this);
        }
        OpenWebSocketToHost() {
          return new Promise((_, _) => {
            this.Log.Info("Connecting vrmailbox...");
            let _ = "ws://127.0.0.1:27062";
            this.m_sWebSecret && (_ += "?secret=" + this.m_sWebSecret),
              (this.m_fnConnectResolve = _),
              (this.m_wsWebSocketToServer = new WebSocket(_)),
              this.m_wsWebSocketToServer.addEventListener("open", (_) => {
                this.OnWebSocketOpen(_), _();
              }),
              this.m_wsWebSocketToServer.addEventListener(
                "message",
                this.OnWebSocketMessage,
              ),
              this.m_wsWebSocketToServer.addEventListener(
                "close",
                this.OnWebSocketClose,
              ),
              this.m_wsWebSocketToServer.addEventListener(
                "error",
                this.OnWebSocketError,
              );
          });
        }
        static EnsureUniqueName(_) {
          if (_.includes("/")) return _;
          let _;
          return (
            (_ = VRHTML ? VRHTML.GetWebHelperId() : Date.now().toString()),
            _ + "/" + _ + "_" + this.s_nNextMailboxNumber++
          );
        }
        Init(_, _) {
          return (0, _._)(this, void 0, void 0, function* () {
            return (
              (this.m_sMailboxName = _.EnsureUniqueName(_)),
              (this.m_sWebSecret = _),
              (this.connected = !1),
              this.OpenWebSocketToHost()
            );
          });
        }
        get name() {
          return this.m_sMailboxName;
        }
        OnWebSocketOpen(_) {
          (this.connected = !0),
            this.WebSocketSend("mailbox_open " + this.m_sMailboxName),
            window.addEventListener("beforeunload", () => {
              this.WebSocketSend("websocket_close");
            }),
            this.m_fnConnectResolve &&
              (this.m_fnConnectResolve(), (this.m_fnConnectResolve = void 0));
          for (let _ of this.m_oConnectWaits) _();
          this.m_oConnectWaits = [];
        }
        OnWebSocketClose(_) {
          return (0, _._)(this, void 0, void 0, function* () {
            this.Log.Warning("Lost connection to host..."),
              (this.connected = !1),
              yield (0, _._)(1e3),
              this.OpenWebSocketToHost();
          });
        }
        OnWebSocketError(_) {
          return (0, _._)(this, void 0, void 0, function* () {
            this.Log.Error("Mailbox error:", _),
              (this.connected = !1),
              yield (0, _._)(1e3),
              this.OpenWebSocketToHost();
          });
        }
        WebSocketSend(_) {
          return (
            null != this.m_wsWebSocketToServer &&
            1 == this.m_wsWebSocketToServer.readyState &&
            (this.m_wsWebSocketToServer.send(_), !0)
          );
        }
        OnWebSocketMessage(_) {
          let _ = JSON.parse(_.data),
            _ = !1;
          if (
            (this.m_oHandlers.hasOwnProperty(_.type) &&
              (this.m_oHandlers[_.type](_), (_ = !0)),
            this.m_oWaits.hasOwnProperty(_.type))
          ) {
            let _ = !1;
            for (let _ of this.m_oWaits[_.type])
              _.nMessageId == _.message_id &&
                (__webpack_require__.callback(_), (_ = !0));
            _
              ? (this.m_oWaits[_.type] = this.m_oWaits[_.type].filter(
                  (_) => _.nMessageId == _.message_id,
                ))
              : this.Log.Error(
                  `Received a ${_.type} message, but didn't have a matching message_id. Did the other end forget to mirror message_id?`,
                ),
              (_ = !0);
          }
          _ || this.Log.Error("Received unhandled message: ", _.type, _);
        }
        RegisterHandler(_, _) {
          this.m_oHandlers[_] = _;
        }
        SendMessage(_, _) {
          return this.WebSocketSend(
            "mailbox_send " + _ + " " + JSON.stringify(_),
          );
        }
        WaitForMessage(_, _) {
          return new Promise((_, _) => {
            this.m_oWaits[_] || (this.m_oWaits[_] = []),
              this.m_oWaits[_].push({
                callback: _,
                nMessageId: _,
              });
          });
        }
        WaitForConnect() {
          return new Promise((_, _) => {
            this.connected ? _() : this.m_oConnectWaits.push(_);
          });
        }
        WaitForMailbox(_) {
          return (0, _._)(this, void 0, void 0, function* () {
            let _ = {
              type: "request_mailbox_registration_notification",
              mailbox_name: _,
            };
            return this.SendMessageAndWaitForResponse(
              "web_server_mailbox",
              _,
              "mailbox_registered",
            );
          });
        }
        SendMessageAndWaitForResponse(_, _, _) {
          let _ = Object.assign({}, _);
          return (
            null == _.returnAddress && (_.returnAddress = this.m_sMailboxName),
            (_.message_id = this.m_nNextMessageNumber++),
            this.SendMessage(_, _),
            this.WaitForMessage(_, _.message_id)
          );
        }
        SendResponse(_, _) {
          if (!_.returnAddress)
            throw new Error("Missing return address on message");
          let _ = Object.assign(Object.assign({}, _), {
            message_id: _.message_id,
          });
          (_.message_id = _.message_id), this.SendMessage(_.returnAddress, _);
        }
      }
      (_.s_nNextMailboxNumber = 1),
        (0, _._)([_.observable], _.prototype, "connected", void 0),
        (0, _._)([_._], _.prototype, "OpenWebSocketToHost", null),
        (0, _._)([_._], _.prototype, "OnWebSocketOpen", null),
        (0, _._)([_._], _.prototype, "OnWebSocketClose", null),
        (0, _._)([_._], _.prototype, "OnWebSocketError", null),
        (0, _._)([_._], _.prototype, "WebSocketSend", null),
        (0, _._)([_._], _.prototype, "OnWebSocketMessage", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      var _, _, _, _, _, _, _, _, _, _, _, _, _, _;
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      }),
        (function (_) {
          (_[(_.Invalid = 0)] = "Invalid"),
            (_[(_.TrackingSystemName_String = 1e3)] =
              "TrackingSystemName_String"),
            (_[(_.ModelNumber_String = 1001)] = "ModelNumber_String"),
            (_[(_.SerialNumber_String = 1002)] = "SerialNumber_String"),
            (_[(_.RenderModelName_String = 1003)] = "RenderModelName_String"),
            (_[(_.WillDriftInYaw_Bool = 1004)] = "WillDriftInYaw_Bool"),
            (_[(_.ManufacturerName_String = 1005)] = "ManufacturerName_String"),
            (_[(_.TrackingFirmwareVersion_String = 1006)] =
              "TrackingFirmwareVersion_String"),
            (_[(_.HardwareRevision_String = 1007)] = "HardwareRevision_String"),
            (_[(_.AllWirelessDongleDescriptions_String = 1008)] =
              "AllWirelessDongleDescriptions_String"),
            (_[(_.ConnectedWirelessDongle_String = 1009)] =
              "ConnectedWirelessDongle_String"),
            (_[(_.DeviceIsWireless_Bool = 1010)] = "DeviceIsWireless_Bool"),
            (_[(_.DeviceIsCharging_Bool = 1011)] = "DeviceIsCharging_Bool"),
            (_[(_.DeviceBatteryPercentage_Float = 1012)] =
              "DeviceBatteryPercentage_Float"),
            (_[(_.StatusDisplayTransform_Matrix34 = 1013)] =
              "StatusDisplayTransform_Matrix34"),
            (_[(_.Firmware_UpdateAvailable_Bool = 1014)] =
              "Firmware_UpdateAvailable_Bool"),
            (_[(_.Firmware_ManualUpdate_Bool = 1015)] =
              "Firmware_ManualUpdate_Bool"),
            (_[(_.Firmware_ManualUpdateURL_String = 1016)] =
              "Firmware_ManualUpdateURL_String"),
            (_[(_.HardwareRevision_Uint64 = 1017)] = "HardwareRevision_Uint64"),
            (_[(_.FirmwareVersion_Uint64 = 1018)] = "FirmwareVersion_Uint64"),
            (_[(_.FPGAVersion_Uint64 = 1019)] = "FPGAVersion_Uint64"),
            (_[(_.VRCVersion_Uint64 = 1020)] = "VRCVersion_Uint64"),
            (_[(_.RadioVersion_Uint64 = 1021)] = "RadioVersion_Uint64"),
            (_[(_.DongleVersion_Uint64 = 1022)] = "DongleVersion_Uint64"),
            (_[(_.BlockServerShutdown_Bool = 1023)] =
              "BlockServerShutdown_Bool"),
            (_[(_.CanUnifyCoordinateSystemWithHmd_Bool = 1024)] =
              "CanUnifyCoordinateSystemWithHmd_Bool"),
            (_[(_.ContainsProximitySensor_Bool = 1025)] =
              "ContainsProximitySensor_Bool"),
            (_[(_.DeviceProvidesBatteryStatus_Bool = 1026)] =
              "DeviceProvidesBatteryStatus_Bool"),
            (_[(_.DeviceCanPowerOff_Bool = 1027)] = "DeviceCanPowerOff_Bool"),
            (_[(_.Firmware_ProgrammingTarget_String = 1028)] =
              "Firmware_ProgrammingTarget_String"),
            (_[(_.DeviceClass_Int32 = 1029)] = "DeviceClass_Int32"),
            (_[(_.HasCamera_Bool = 1030)] = "HasCamera_Bool"),
            (_[(_.DriverVersion_String = 1031)] = "DriverVersion_String"),
            (_[(_.Firmware_ForceUpdateRequired_Bool = 1032)] =
              "Firmware_ForceUpdateRequired_Bool"),
            (_[(_.ViveSystemButtonFixRequired_Bool = 1033)] =
              "ViveSystemButtonFixRequired_Bool"),
            (_[(_.ParentDriver_Uint64 = 1034)] = "ParentDriver_Uint64"),
            (_[(_.ResourceRoot_String = 1035)] = "ResourceRoot_String"),
            (_[(_.RegisteredDeviceType_String = 1036)] =
              "RegisteredDeviceType_String"),
            (_[(_.InputProfilePath_String = 1037)] = "InputProfilePath_String"),
            (_[(_.NeverTracked_Bool = 1038)] = "NeverTracked_Bool"),
            (_[(_.NumCameras_Int32 = 1039)] = "NumCameras_Int32"),
            (_[(_.CameraFrameLayout_Int32 = 1040)] = "CameraFrameLayout_Int32"),
            (_[(_.CameraStreamFormat_Int32 = 1041)] =
              "CameraStreamFormat_Int32"),
            (_[(_.AdditionalDeviceSettingsPath_String = 1042)] =
              "AdditionalDeviceSettingsPath_String"),
            (_[(_.DevicePowerUsage_Float = 1052)] = "DevicePowerUsage_Float"),
            (_[(_.ActualTrackingSystemName_String = 1054)] =
              "ActualTrackingSystemName_String"),
            (_[(_.AllowCameraToggle_Bool = 1055)] = "AllowCameraToggle_Bool"),
            (_[(_.AllowLightSourceFrequency_Bool = 1056)] =
              "AllowLightSourceFrequency_Bool"),
            (_[(_.HasEyeTracker_Bool = 1060)] = "HasEyeTracker_Bool"),
            (_[(_.ReportsTimeSinceVSync_Bool = 2e3)] =
              "ReportsTimeSinceVSync_Bool"),
            (_[(_.SecondsFromVsyncToPhotons_Float = 2001)] =
              "SecondsFromVsyncToPhotons_Float"),
            (_[(_.DisplayFrequency_Float = 2002)] = "DisplayFrequency_Float"),
            (_[(_.UserIpdMeters_Float = 2003)] = "UserIpdMeters_Float"),
            (_[(_.CurrentUniverseId_Uint64 = 2004)] =
              "CurrentUniverseId_Uint64"),
            (_[(_.PreviousUniverseId_Uint64 = 2005)] =
              "PreviousUniverseId_Uint64"),
            (_[(_.DisplayFirmwareVersion_Uint64 = 2006)] =
              "DisplayFirmwareVersion_Uint64"),
            (_[(_.IsOnDesktop_Bool = 2007)] = "IsOnDesktop_Bool"),
            (_[(_.DisplayMCType_Int32 = 2008)] = "DisplayMCType_Int32"),
            (_[(_.DisplayMCOffset_Float = 2009)] = "DisplayMCOffset_Float"),
            (_[(_.DisplayMCScale_Float = 2010)] = "DisplayMCScale_Float"),
            (_[(_.EdidVendorID_Int32 = 2011)] = "EdidVendorID_Int32"),
            (_[(_.DisplayMCImageLeft_String = 2012)] =
              "DisplayMCImageLeft_String"),
            (_[(_.DisplayMCImageRight_String = 2013)] =
              "DisplayMCImageRight_String"),
            (_[(_.DisplayGCBlackClamp_Float = 2014)] =
              "DisplayGCBlackClamp_Float"),
            (_[(_.EdidProductID_Int32 = 2015)] = "EdidProductID_Int32"),
            (_[(_.CameraToHeadTransform_Matrix34 = 2016)] =
              "CameraToHeadTransform_Matrix34"),
            (_[(_.DisplayGCType_Int32 = 2017)] = "DisplayGCType_Int32"),
            (_[(_.DisplayGCOffset_Float = 2018)] = "DisplayGCOffset_Float"),
            (_[(_.DisplayGCScale_Float = 2019)] = "DisplayGCScale_Float"),
            (_[(_.DisplayGCPrescale_Float = 2020)] = "DisplayGCPrescale_Float"),
            (_[(_.DisplayGCImage_String = 2021)] = "DisplayGCImage_String"),
            (_[(_.LensCenterLeftU_Float = 2022)] = "LensCenterLeftU_Float"),
            (_[(_.LensCenterLeftV_Float = 2023)] = "LensCenterLeftV_Float"),
            (_[(_.LensCenterRightU_Float = 2024)] = "LensCenterRightU_Float"),
            (_[(_.LensCenterRightV_Float = 2025)] = "LensCenterRightV_Float"),
            (_[(_.UserHeadToEyeDepthMeters_Float = 2026)] =
              "UserHeadToEyeDepthMeters_Float"),
            (_[(_.CameraFirmwareVersion_Uint64 = 2027)] =
              "CameraFirmwareVersion_Uint64"),
            (_[(_.CameraFirmwareDescription_String = 2028)] =
              "CameraFirmwareDescription_String"),
            (_[(_.DisplayFPGAVersion_Uint64 = 2029)] =
              "DisplayFPGAVersion_Uint64"),
            (_[(_.DisplayBootloaderVersion_Uint64 = 2030)] =
              "DisplayBootloaderVersion_Uint64"),
            (_[(_.DisplayHardwareVersion_Uint64 = 2031)] =
              "DisplayHardwareVersion_Uint64"),
            (_[(_.AudioFirmwareVersion_Uint64 = 2032)] =
              "AudioFirmwareVersion_Uint64"),
            (_[(_.CameraCompatibilityMode_Int32 = 2033)] =
              "CameraCompatibilityMode_Int32"),
            (_[(_.ScreenshotHorizontalFieldOfViewDegrees_Float = 2034)] =
              "ScreenshotHorizontalFieldOfViewDegrees_Float"),
            (_[(_.ScreenshotVerticalFieldOfViewDegrees_Float = 2035)] =
              "ScreenshotVerticalFieldOfViewDegrees_Float"),
            (_[(_.DisplaySuppressed_Bool = 2036)] = "DisplaySuppressed_Bool"),
            (_[(_.DisplayAllowNightMode_Bool = 2037)] =
              "DisplayAllowNightMode_Bool"),
            (_[(_.DisplayMCImageWidth_Int32 = 2038)] =
              "DisplayMCImageWidth_Int32"),
            (_[(_.DisplayMCImageHeight_Int32 = 2039)] =
              "DisplayMCImageHeight_Int32"),
            (_[(_.DisplayMCImageNumChannels_Int32 = 2040)] =
              "DisplayMCImageNumChannels_Int32"),
            (_[(_.DisplayMCImageData_Binary = 2041)] =
              "DisplayMCImageData_Binary"),
            (_[(_.SecondsFromPhotonsToVblank_Float = 2042)] =
              "SecondsFromPhotonsToVblank_Float"),
            (_[(_.DriverDirectModeSendsVsyncEvents_Bool = 2043)] =
              "DriverDirectModeSendsVsyncEvents_Bool"),
            (_[(_.DisplayDebugMode_Bool = 2044)] = "DisplayDebugMode_Bool"),
            (_[(_.GraphicsAdapterLuid_Uint64 = 2045)] =
              "GraphicsAdapterLuid_Uint64"),
            (_[(_.DriverProvidedChaperonePath_String = 2048)] =
              "DriverProvidedChaperonePath_String"),
            (_[(_.ExpectedTrackingReferenceCount_Int32 = 2049)] =
              "ExpectedTrackingReferenceCount_Int32"),
            (_[(_.ExpectedControllerCount_Int32 = 2050)] =
              "ExpectedControllerCount_Int32"),
            (_[(_.NamedIconPathControllerLeftDeviceOff_String = 2051)] =
              "NamedIconPathControllerLeftDeviceOff_String"),
            (_[(_.NamedIconPathControllerRightDeviceOff_String = 2052)] =
              "NamedIconPathControllerRightDeviceOff_String"),
            (_[(_.NamedIconPathTrackingReferenceDeviceOff_String = 2053)] =
              "NamedIconPathTrackingReferenceDeviceOff_String"),
            (_[(_.DoNotApplyPrediction_Bool = 2054)] =
              "DoNotApplyPrediction_Bool"),
            (_[(_.CameraToHeadTransforms_Matrix34_Array = 2055)] =
              "CameraToHeadTransforms_Matrix34_Array"),
            (_[(_.DistortionMeshResolution_Int32 = 2056)] =
              "DistortionMeshResolution_Int32"),
            (_[(_.DriverIsDrawingControllers_Bool = 2057)] =
              "DriverIsDrawingControllers_Bool"),
            (_[(_.DriverRequestsApplicationPause_Bool = 2058)] =
              "DriverRequestsApplicationPause_Bool"),
            (_[(_.DriverRequestsReducedRendering_Bool = 2059)] =
              "DriverRequestsReducedRendering_Bool"),
            (_[(_.MinimumIpdStepMeters_Float = 2060)] =
              "MinimumIpdStepMeters_Float"),
            (_[(_.AudioBridgeFirmwareVersion_Uint64 = 2061)] =
              "AudioBridgeFirmwareVersion_Uint64"),
            (_[(_.ImageBridgeFirmwareVersion_Uint64 = 2062)] =
              "ImageBridgeFirmwareVersion_Uint64"),
            (_[(_.ImuToHeadTransform_Matrix34 = 2063)] =
              "ImuToHeadTransform_Matrix34"),
            (_[(_.ImuFactoryGyroBias_Vector3 = 2064)] =
              "ImuFactoryGyroBias_Vector3"),
            (_[(_.ImuFactoryGyroScale_Vector3 = 2065)] =
              "ImuFactoryGyroScale_Vector3"),
            (_[(_.ImuFactoryAccelerometerBias_Vector3 = 2066)] =
              "ImuFactoryAccelerometerBias_Vector3"),
            (_[(_.ImuFactoryAccelerometerScale_Vector3 = 2067)] =
              "ImuFactoryAccelerometerScale_Vector3"),
            (_[(_.ConfigurationIncludesLighthouse20Features_Bool = 2069)] =
              "ConfigurationIncludesLighthouse20Features_Bool"),
            (_[(_.Prop_AdditionalRadioFeatures_Uint64 = 2070)] =
              "Prop_AdditionalRadioFeatures_Uint64"),
            (_[(_.Prop_CameraWhiteBalance_Vector4_Array = 2071)] =
              "Prop_CameraWhiteBalance_Vector4_Array"),
            (_[(_.Prop_CameraDistortionFunction_Int32_Array = 2072)] =
              "Prop_CameraDistortionFunction_Int32_Array"),
            (_[(_.Prop_CameraDistortionCoefficients_Float_Array = 2073)] =
              "Prop_CameraDistortionCoefficients_Float_Array"),
            (_[(_.Prop_ExpectedControllerType_String = 2074)] =
              "Prop_ExpectedControllerType_String"),
            (_[(_.HmdTrackingStyle_Int32 = 2075)] = "HmdTrackingStyle_Int32"),
            (_[(_.DriverProvidedChaperoneVisibility_Bool = 2076)] =
              "DriverProvidedChaperoneVisibility_Bool"),
            (_[(_.HmdColumnCorrectionSettingPrefix_String = 2077)] =
              "HmdColumnCorrectionSettingPrefix_String"),
            (_[(_.CameraSupportsCompatibilityModes_Bool = 2078)] =
              "CameraSupportsCompatibilityModes_Bool"),
            (_[(_.SupportsRoomViewDepthProjection_Bool = 2079)] =
              "SupportsRoomViewDepthProjection_Bool"),
            (_[(_.DisplayAvailableFrameRates_Float_Array = 2080)] =
              "DisplayAvailableFrameRates_Float_Array"),
            (_[(_.DisplaySupportsRuntimeFramerateChange_Bool = 2084)] =
              "DisplaySupportsRuntimeFramerateChange_Bool"),
            (_[(_.DisplaySupportsAnalogGain_Bool = 2085)] =
              "DisplaySupportsAnalogGain_Bool"),
            (_[(_.DisplayMinAnalogGain_Float = 2086)] =
              "DisplayMinAnalogGain_Float"),
            (_[(_.DisplayMaxAnalogGain_Float = 2087)] =
              "DisplayMaxAnalogGain_Float"),
            (_[(_.DashboardLinkSupport_Int32 = 2097)] =
              "DashboardLinkSupport_Int32"),
            (_[(_.DisplayMinUIAnalogGain_Float = 2098)] =
              "DisplayMinUIAnalogGain_Float"),
            (_[(_.DashboardScale_Float = 2091)] = "DashboardScale_Float"),
            (_[(_.IpdUIRangeMinMeters_Float = 2100)] =
              "IpdUIRangeMinMeters_Float"),
            (_[(_.IpdUIRangeMaxMeters_Float = 2101)] =
              "IpdUIRangeMaxMeters_Float"),
            (_[(_.Hmd_SupportsHDCP14LegacyCompat_Bool = 2102)] =
              "Hmd_SupportsHDCP14LegacyCompat_Bool"),
            (_[(_.Hmd_SupportsMicMonitoring_Bool = 2103)] =
              "Hmd_SupportsMicMonitoring_Bool"),
            (_[(_.Hmd_SupportsDisplayPortTrainingMode_Bool = 2104)] =
              "Hmd_SupportsDisplayPortTrainingMode_Bool"),
            (_[(_.Hmd_SupportsRoomViewDirect_Bool = 2105)] =
              "Hmd_SupportsRoomViewDirect_Bool"),
            (_[(_.Hmd_SupportsAppThrottling_Bool = 2106)] =
              "Hmd_SupportsAppThrottling_Bool"),
            (_[(_.Hmd_SupportsGpuBusMonitoring_Bool = 2107)] =
              "Hmd_SupportsGpuBusMonitoring_Bool"),
            (_[(_.DriverProvidedIPDVisibility_Bool = 2108)] =
              "DriverProvidedIPDVisibility_Bool"),
            (_[(_.Prop_Hmd_SupportsVRGamepadFocus_Bool = 2117)] =
              "Prop_Hmd_SupportsVRGamepadFocus_Bool"),
            (_[(_.DriverRequestedMuraCorrectionMode_Int32 = 2200)] =
              "DriverRequestedMuraCorrectionMode_Int32"),
            (_[(_.DriverRequestedMuraFeather_InnerLeft_Int32 = 2201)] =
              "DriverRequestedMuraFeather_InnerLeft_Int32"),
            (_[(_.DriverRequestedMuraFeather_InnerRight_Int32 = 2202)] =
              "DriverRequestedMuraFeather_InnerRight_Int32"),
            (_[(_.DriverRequestedMuraFeather_InnerTop_Int32 = 2203)] =
              "DriverRequestedMuraFeather_InnerTop_Int32"),
            (_[(_.DriverRequestedMuraFeather_InnerBottom_Int32 = 2204)] =
              "DriverRequestedMuraFeather_InnerBottom_Int32"),
            (_[(_.DriverRequestedMuraFeather_OuterLeft_Int32 = 2205)] =
              "DriverRequestedMuraFeather_OuterLeft_Int32"),
            (_[(_.DriverRequestedMuraFeather_OuterRight_Int32 = 2206)] =
              "DriverRequestedMuraFeather_OuterRight_Int32"),
            (_[(_.DriverRequestedMuraFeather_OuterTop_Int32 = 2207)] =
              "DriverRequestedMuraFeather_OuterTop_Int32"),
            (_[(_.DriverRequestedMuraFeather_OuterBottom_Int32 = 2208)] =
              "DriverRequestedMuraFeather_OuterBottom_Int32"),
            (_[(_.Audio_SupportsDualSpeakerAndJackOutput_Bool = 2303)] =
              "Audio_SupportsDualSpeakerAndJackOutput_Bool"),
            (_[(_.AttachedDeviceId_String = 3e3)] = "AttachedDeviceId_String"),
            (_[(_.SupportedButtons_Uint64 = 3001)] = "SupportedButtons_Uint64"),
            (_[(_.Axis0Type_Int32 = 3002)] = "Axis0Type_Int32"),
            (_[(_.Axis1Type_Int32 = 3003)] = "Axis1Type_Int32"),
            (_[(_.Axis2Type_Int32 = 3004)] = "Axis2Type_Int32"),
            (_[(_.Axis3Type_Int32 = 3005)] = "Axis3Type_Int32"),
            (_[(_.Axis4Type_Int32 = 3006)] = "Axis4Type_Int32"),
            (_[(_.ControllerRoleHint_Int32 = 3007)] =
              "ControllerRoleHint_Int32"),
            (_[(_.FieldOfViewLeftDegrees_Float = 4e3)] =
              "FieldOfViewLeftDegrees_Float"),
            (_[(_.FieldOfViewRightDegrees_Float = 4001)] =
              "FieldOfViewRightDegrees_Float"),
            (_[(_.FieldOfViewTopDegrees_Float = 4002)] =
              "FieldOfViewTopDegrees_Float"),
            (_[(_.FieldOfViewBottomDegrees_Float = 4003)] =
              "FieldOfViewBottomDegrees_Float"),
            (_[(_.TrackingRangeMinimumMeters_Float = 4004)] =
              "TrackingRangeMinimumMeters_Float"),
            (_[(_.TrackingRangeMaximumMeters_Float = 4005)] =
              "TrackingRangeMaximumMeters_Float"),
            (_[(_.ModeLabel_String = 4006)] = "ModeLabel_String"),
            (_[(_.IconPathName_String = 5e3)] = "IconPathName_String"),
            (_[(_.NamedIconPathDeviceOff_String = 5001)] =
              "NamedIconPathDeviceOff_String"),
            (_[(_.NamedIconPathDeviceSearching_String = 5002)] =
              "NamedIconPathDeviceSearching_String"),
            (_[(_.NamedIconPathDeviceSearchingAlert_String = 5003)] =
              "NamedIconPathDeviceSearchingAlert_String"),
            (_[(_.NamedIconPathDeviceReady_String = 5004)] =
              "NamedIconPathDeviceReady_String"),
            (_[(_.NamedIconPathDeviceReadyAlert_String = 5005)] =
              "NamedIconPathDeviceReadyAlert_String"),
            (_[(_.NamedIconPathDeviceNotReady_String = 5006)] =
              "NamedIconPathDeviceNotReady_String"),
            (_[(_.NamedIconPathDeviceStandby_String = 5007)] =
              "NamedIconPathDeviceStandby_String"),
            (_[(_.NamedIconPathDeviceAlertLow_String = 5008)] =
              "NamedIconPathDeviceAlertLow_String"),
            (_[(_.DisplayHiddenArea_Binary_Start = 5100)] =
              "DisplayHiddenArea_Binary_Start"),
            (_[(_.DisplayHiddenArea_Binary_End = 5150)] =
              "DisplayHiddenArea_Binary_End"),
            (_[(_.ParentContainer = 5151)] = "ParentContainer"),
            (_[(_.UserConfigPath_String = 6e3)] = "UserConfigPath_String"),
            (_[(_.InstallPath_String = 6001)] = "InstallPath_String"),
            (_[(_.HasDisplayComponent_Bool = 6002)] =
              "HasDisplayComponent_Bool"),
            (_[(_.HasControllerComponent_Bool = 6003)] =
              "HasControllerComponent_Bool"),
            (_[(_.HasCameraComponent_Bool = 6004)] = "HasCameraComponent_Bool"),
            (_[(_.HasDriverDirectModeComponent_Bool = 6005)] =
              "HasDriverDirectModeComponent_Bool"),
            (_[(_.HasVirtualDisplayComponent_Bool = 6006)] =
              "HasVirtualDisplayComponent_Bool"),
            (_[(_.HasSpatialAnchorsSupport_Bool = 6007)] =
              "HasSpatialAnchorsSupport_Bool"),
            (_[(_.ControllerType_String = 7e3)] = "ControllerType_String"),
            (_[(_.LegacyInputProfile_String = 7001)] =
              "LegacyInputProfile_String"),
            (_[(_.VendorSpecific_Reserved_Start = 1e4)] =
              "VendorSpecific_Reserved_Start"),
            (_[(_.VendorSpecific_Reserved_End = 10999)] =
              "VendorSpecific_Reserved_End"),
            (_[(_.SupportsInHMDRoomSetup_Bool = 11003)] =
              "SupportsInHMDRoomSetup_Bool"),
            (_[(_.VRLinkClientHMDSupportsRoomSetupRequests_Bool = 11004)] =
              "VRLinkClientHMDSupportsRoomSetupRequests_Bool"),
            (_[(_.TrackedDeviceProperty_Max = 1e6)] =
              "TrackedDeviceProperty_Max");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.k_EButton_System = 0)] = "k_EButton_System"),
            (_[(_.k_EButton_ApplicationMenu = 1)] =
              "k_EButton_ApplicationMenu"),
            (_[(_.k_EButton_Grip = 2)] = "k_EButton_Grip"),
            (_[(_.k_EButton_DPad_Left = 3)] = "k_EButton_DPad_Left"),
            (_[(_.k_EButton_DPad_Up = 4)] = "k_EButton_DPad_Up"),
            (_[(_.k_EButton_DPad_Right = 5)] = "k_EButton_DPad_Right"),
            (_[(_.k_EButton_DPad_Down = 6)] = "k_EButton_DPad_Down"),
            (_[(_.k_EButton_A = 7)] = "k_EButton_A"),
            (_[(_.k_EButton_ProximitySensor = 31)] =
              "k_EButton_ProximitySensor"),
            (_[(_.k_EButton_Axis0 = 32)] = "k_EButton_Axis0"),
            (_[(_.k_EButton_Axis1 = 33)] = "k_EButton_Axis1"),
            (_[(_.k_EButton_Axis2 = 34)] = "k_EButton_Axis2"),
            (_[(_.k_EButton_Axis3 = 35)] = "k_EButton_Axis3"),
            (_[(_.k_EButton_Axis4 = 36)] = "k_EButton_Axis4"),
            (_[(_.k_EButton_SteamVR_Touchpad = 32)] =
              "k_EButton_SteamVR_Touchpad"),
            (_[(_.k_EButton_SteamVR_Trigger = 33)] =
              "k_EButton_SteamVR_Trigger"),
            (_[(_.k_EButton_Dashboard_Back = 2)] = "k_EButton_Dashboard_Back"),
            (_[(_.k_EButton_IndexController_A = 2)] =
              "k_EButton_IndexController_A"),
            (_[(_.k_EButton_IndexController_B = 1)] =
              "k_EButton_IndexController_B"),
            (_[(_.k_EButton_IndexController_JoyStick = 35)] =
              "k_EButton_IndexController_JoyStick"),
            (_[(_.k_EButton_Reserved0 = 50)] = "k_EButton_Reserved0"),
            (_[(_.k_EButton_Reserved1 = 51)] = "k_EButton_Reserved1"),
            (_[(_.k_EButton_Max = 64)] = "k_EButton_Max");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.None = 0)] = "None"),
            (_[(_.ButtonEnter = 1)] = "ButtonEnter"),
            (_[(_.ButtonLeave = 2)] = "ButtonLeave"),
            (_[(_.Snap = 3)] = "Snap"),
            (_[(_.Sliding = 4)] = "Sliding"),
            (_[(_.SlidingEdge = 5)] = "SlidingEdge");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Minimal = 1)] = "Minimal"),
            (_[(_.Modal = 2)] = "Modal"),
            (_[(_.ShowArrowKeys = 4)] = "ShowArrowKeys"),
            (_[(_.HideDoneKey = 8)] = "HideDoneKey");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Unknown = -1)] = "Unknown"),
            (_[(_.Idle = 0)] = "Idle"),
            (_[(_.UserInteraction = 1)] = "UserInteraction"),
            (_[(_.UserInteraction_Timeout = 2)] = "UserInteraction_Timeout"),
            (_[(_.Standby = 3)] = "Standby"),
            (_[(_.Idle_Timeout = 4)] = "Idle_Timeout");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Notification_Shown = 600)] = "Notification_Shown"),
            (_[(_.Notification_Hidden = 601)] = "Notification_Hidden"),
            (_[(_.Notification_BeginInteraction = 602)] =
              "Notification_BeginInteraction"),
            (_[(_.Notification_Destroyed = 603)] = "Notification_Destroyed");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.TheaterFast = 0)] = "TheaterFast"),
            (_[(_.TheaterSlow = 1)] = "TheaterSlow");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Constant = 0)] = "Constant"),
            (_[(_.Nearest = 1)] = "Nearest"),
            (_[(_.Linear = 2)] = "Linear"),
            (_[(_.SmoothStep = 3)] = "SmoothStep"),
            (_[(_.SmootherStep = 4)] = "SmootherStep");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Invalid = 0)] = "Invalid"),
            (_[(_.RecenterCountdown = 1)] = "RecenterCountdown"),
            (_[(_.FloorAdjustExisting = 2)] = "FloorAdjustExisting"),
            (_[(_.RoomSetupFloor = 3)] = "RoomSetupFloor"),
            (_[(_.ClearRoomSetup = 4)] = "ClearRoomSetup"),
            (_[(_.RoomSetupFull = 5)] = "RoomSetupFull");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Near = 0)] = "Near"),
            (_[(_.Middle = 1)] = "Middle"),
            (_[(_.Far = 2)] = "Far"),
            (_[(_.VRGamepadUI = 3)] = "VRGamepadUI");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.__LocalSteamVR = 0)] = "__LocalSteamVR"),
            (_[(_.__LocalSteam = 1)] = "__LocalSteam"),
            (_[(_.__RemoteSteamVR = 2)] = "__RemoteSteamVR"),
            (_[(_.__RemoteSteam = 3)] = "__RemoteSteam"),
            (_[(_.MutualLocal = 4)] = "MutualLocal"),
            (_[(_.MutualSteamVR = 5)] = "MutualSteamVR"),
            (_[(_.MutualSteam = 6)] = "MutualSteam");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Dashboard = 1)] = "Dashboard"),
            (_[(_.LeftHand = 2)] = "LeftHand"),
            (_[(_.RightHand = 3)] = "RightHand"),
            (_[(_.World = 4)] = "World"),
            (_[(_.Theater = 5)] = "Theater"),
            (_[(_.Boot = 6)] = "Boot");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Invalid = 0)] = "Invalid"),
            (_[(_.System = 1)] = "System"),
            (_[(_.SteamInput = 2)] = "SteamInput"),
            (_[(_.VRInput = 3)] = "VRInput");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.None = 0)] = "None"),
            (_[(_.ThirdPartyClient = 1)] = "ThirdPartyClient"),
            (_[(_.SteamVRClientUnified = 2)] = "SteamVRClientUnified"),
            (_[(_.SteamVRClientLegacyDual = 3)] = "SteamVRClientLegacyDual");
        })(_ || (_ = {}));
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _.Component {
        constructor() {
          super(...arguments), (this.m_ref = _.createRef());
        }
        get elem() {
          return this.m_ref.current;
        }
        get disabled() {
          return !1 === this.props.enabled;
        }
        onMouseDown(_) {
          var _, _, _;
          null === (_ = (_ = this.props).onMouseDown) ||
            void 0 === _ ||
            __webpack_require__.call(_, _),
            this.disabled ||
              _._.Instance.playSound(
                null !== (_ = this.props.pressSoundEffect) && void 0 !== _
                  ? _
                  : null,
              );
        }
        onMouseUp(_) {
          var _, _;
          null === (_ = (_ = this.props).onMouseUp) ||
            void 0 === _ ||
            __webpack_require__.call(_, _);
        }
        onClick(_) {
          var _, _, _;
          this.disabled ||
            (null === (_ = (_ = this.props).onClick) ||
              void 0 === _ ||
              __webpack_require__.call(_, _),
            _.temporarilySuppressSoundEffect(),
            _._.Instance.playSound(
              null !== (_ = this.props.releaseSoundEffect) && void 0 !== _
                ? _
                : _._.ButtonClick,
            ));
        }
        onMouseEnter(_) {
          var _, _;
          null === (_ = (_ = this.props).onMouseEnter) ||
            void 0 === _ ||
            __webpack_require__.call(_, _),
            this.disabled ||
              ((0, _._)() == _._.Overlay &&
                _._.Instance.triggerHaptic(_._.ButtonEnter));
        }
        onMouseLeave(_) {
          this.props.onMouseLeave && this.props.onMouseLeave(_),
            this.disabled ||
              ((0, _._)() == _._.Overlay &&
                _._.Instance.triggerHaptic(_._.ButtonLeave));
        }
        render() {
          let _ = Object.assign({}, this.props);
          return (
            delete _.enabled,
            delete _.pressSoundEffect,
            delete _.releaseSoundEffect,
            (_.className = (0, _._)(_.className, ["Disabled", this.disabled])),
            _.cloneElement(_.createElement("div", _, this.props.children), {
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
      (0, _._)([_._], _.prototype, "onMouseDown", null),
        (0, _._)([_._], _.prototype, "onMouseUp", null),
        (0, _._)([_._], _.prototype, "onClick", null),
        (0, _._)([_._], _.prototype, "onMouseEnter", null),
        (0, _._)([_._], _.prototype, "onMouseLeave", null);
      class _ extends _.Component {
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
        onClick(_) {
          _.suppressingSoundEffect ||
            (window.clearTimeout(_.s_nPlaySoundEffectTimeout),
            (_.s_nPlaySoundEffectTimeout = window.setTimeout(
              _.playSoundEffect,
              _.k_nSoundEffectDelay,
            ))),
            this.props.onClick && this.props.onClick(_);
        }
        static endSoundEffectSuppression() {
          window.clearTimeout(this.s_nSuppressingSoundEffectsTimeout),
            (this.s_nSuppressingSoundEffectsTimeout = 0);
        }
        static playSoundEffect() {
          _._.Instance.playSound(_._.SurfaceClick);
        }
        render() {
          return _.cloneElement(
            _.createElement("div", this.props, this.props.children),
            {
              onClick: this.onClick,
            },
          );
        }
      }
      (_.k_nSoundEffectSuppressionPeriod = 4),
        (_.k_nSoundEffectDelay = 2),
        (_.s_nSuppressingSoundEffectsTimeout = 0),
        (_.s_nPlaySoundEffectTimeout = 0),
        (0, _._)([_._], _.prototype, "onClick", null),
        (0, _._)([_._], _, "endSoundEffectSuppression", null),
        (0, _._)([_._], _, "playSoundEffect", null);
    },
  },
]);
