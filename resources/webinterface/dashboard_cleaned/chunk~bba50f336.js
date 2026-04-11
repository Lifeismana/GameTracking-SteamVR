var CLSTAMP = "steamdb";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [384],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _._ {
        constructor(_) {
          super(_),
            (this.m_latchedPosition = null),
            super.setBuildNodeOverride(this.buildNode);
        }
        getNodeType() {
          return "panel-anchor";
        }
        relatch() {
          this.m_latchedPosition = null;
        }
        buildNode(_, _) {
          if (!_.currentPanel && !_.bInsideReparentedPanel)
            return [
              Object.assign(Object.assign({}, _), {
                bShouldAbort: !0,
              }),
              null,
            ];
          let _ = null;
          "object" == typeof this.props.location
            ? (_ = (0, _._)(this.props.location, {
                _: 0,
                _: 0,
              }))
            : "number" == typeof this.props.location &&
              (_ = (0, _._)(this.props.location));
          let _ = this.createSgNode(_);
          if (this.props.latched && null !== this.m_latchedPosition)
            (_.properties["anchor-u"] = this.m_latchedPosition._),
              (_.properties["anchor-v"] = this.m_latchedPosition._);
          else if (_) {
            const _ = {
                _: 0.5 * _._ + 0.5,
                _: -0.5 * _._ + 0.5,
              },
              _ =
                !_.currentPanel || _.currentPanel.props.overlay_key
                  ? _
                  : _.currentPanel.scaleLocalUVToGlobal(_);
            (_.properties["anchor-u"] = _._), (_.properties["anchor-v"] = _._);
          } else {
            if (!_.currentPanel)
              return [
                Object.assign(Object.assign({}, _), {
                  bShouldAbort: !0,
                }),
                null,
              ];
            const _ = _.ownerDocument,
              _ = _.getBoundingClientRect(),
              _ = _.left + _.width / 2,
              _ = _.top + _.height / 2,
              _ = _.currentPanel.m_Rect;
            if (_ < _._ || _ > _._ + _.width || _ < _._ || _ > _._ + _.height)
              return [
                Object.assign(Object.assign({}, _), {
                  bShouldAbort: !0,
                }),
                null,
              ];
            const _ = _.defaultView.innerWidth,
              _ = _.defaultView.innerHeight;
            if (!(_ > 0 && _ > 0))
              return [
                Object.assign(Object.assign({}, _), {
                  bShouldAbort: !0,
                }),
                null,
              ];
            (_.properties["anchor-u"] = _ / _),
              (_.properties["anchor-v"] = _ / _);
          }
          return (
            (this.m_latchedPosition = {
              _: _.properties["anchor-u"],
              _: _.properties["anchor-v"],
            }),
            [_, _]
          );
        }
      }
      (0, _._)([_._], _.prototype, "buildNode", null);
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      function _(_, _) {
        return {
          _: _._ * _,
          _: _._ * _,
          _: _._ * _,
        };
      }
      function _(_) {
        if (void 0 === _) return;
        let _ = 0.5 * _._,
          _ = 0.5 * _._,
          _ = 0.5 * _._,
          _ = Math.cos(_),
          _ = Math.cos(_),
          _ = Math.cos(_),
          _ = Math.sin(_),
          _ = Math.sin(_),
          _ = Math.sin(_);
        return {
          _: _ * _ * _ + _ * _ * _,
          _: _ * _ * _ + _ * _ * _,
          _: _ * _ * _ - _ * _ * _,
          _: _ * _ * _ - _ * _ * _,
        };
      }
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      var _, _, _, _;
      function _() {
        var _;
        return null !==
          (_ =
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.Environment()) && void 0 !== _
          ? _
          : _.Unknown;
      }
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
      }),
        (function (_) {
          (_[(_.Desktop = 1)] = "Desktop"),
            (_[(_.Overlay = 2)] = "Overlay"),
            (_[(_.Unknown = 100)] = "Unknown");
        })(_ || (_ = {})),
        window.hasOwnProperty("VRHTML") || (window.VRHTML = null),
        (function (_) {
          (_[(_.Auto = 0)] = "Auto"),
            (_[(_.Low = 1)] = "Low"),
            (_[(_.Medium = 2)] = "Medium"),
            (_[(_.High = 3)] = "High");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.TrackingResult_Uninitialized = 1)] =
            "TrackingResult_Uninitialized"),
            (_[(_.TrackingResult_Calibrating_InProgress = 100)] =
              "TrackingResult_Calibrating_InProgress"),
            (_[(_.TrackingResult_Calibrating_OutOfRange = 101)] =
              "TrackingResult_Calibrating_OutOfRange"),
            (_[(_.TrackingResult_Running_OK = 200)] =
              "TrackingResult_Running_OK"),
            (_[(_.TrackingResult_Running_OutOfRange = 201)] =
              "TrackingResult_Running_OutOfRange"),
            (_[(_.TrackingResult_Fallback_RotationOnly = 300)] =
              "TrackingResult_Fallback_RotationOnly");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Seated = 0)] = "Seated"),
            (_[(_.Standing = 1)] = "Standing"),
            (_[(_.RawAndUncalibrated = 2)] = "RawAndUncalibrated");
        })(_ || (_ = {}));
      let _ = 0;
      var _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _;
      !(function (_) {
        (_[(_.None = 0)] = "None"),
          (_[(_.Shown = 1)] = "Shown"),
          (_[(_.Hidden = 2)] = "Hidden"),
          (_[(_.Exposed = 3)] = "Exposed"),
          (_[(_.Moved = 4)] = "Moved"),
          (_[(_.Resized = 5)] = "Resized"),
          (_[(_.SizeChanged = 6)] = "SizeChanged"),
          (_[(_.Minimized = 7)] = "Minimized"),
          (_[(_.Maximized = 8)] = "Maximized"),
          (_[(_.Restored = 9)] = "Restored"),
          (_[(_.Enter = 10)] = "Enter"),
          (_[(_.Leave = 11)] = "Leave"),
          (_[(_.FocusGained = 12)] = "FocusGained"),
          (_[(_.FocusLost = 13)] = "FocusLost"),
          (_[(_.Close = 14)] = "Close"),
          (_[(_.TakeFocus = 15)] = "TakeFocus"),
          (_[(_.HitTest = 16)] = "HitTest");
      })(_ || (_ = {})),
        (function (_) {
          (_[(_.Activated = 0)] = "Activated"),
            (_[(_.Deactivated = 1)] = "Deactivated");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.None = 0)] = "None"), (_[(_.Mouse = 1)] = "Mouse");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Invalid = 0)] = "Invalid"),
            (_[(_.HMD = 1)] = "HMD"),
            (_[(_.Controller = 2)] = "Controller"),
            (_[(_.GenericTracker = 3)] = "GenericTracker"),
            (_[(_.TrackingReference = 4)] = "TrackingReference"),
            (_[(_.DisplayRedirect = 5)] = "DisplayRedirect");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Unknown = 0)] = "Unknown"),
            (_[(_.NVIDIA = 1)] = "NVIDIA"),
            (_[(_.AMD = 2)] = "AMD");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.None = 0)] = "None"),
            (_[(_.Starting = 1)] = "Starting"),
            (_[(_.Quitting = 2)] = "Quitting"),
            (_[(_.Running = 3)] = "Running"),
            (_[(_.Waiting = 4)] = "Waiting");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.ButtonPress_0 = 0)] = "ButtonPress_0"),
            (_[(_.ButtonPress_1 = 1)] = "ButtonPress_1"),
            (_[(_.ButtonPress_2 = 2)] = "ButtonPress_2"),
            (_[(_.ButtonPress_3 = 3)] = "ButtonPress_3"),
            (_[(_.CouldntFindSystemOverlay = 4)] = "CouldntFindSystemOverlay"),
            (_[(_.CouldntFindOrCreateClientOverlay = 5)] =
              "CouldntFindOrCreateClientOverlay"),
            (_[(_.ApplicationQuit = 6)] = "ApplicationQuit");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Normal = 0)] = "Normal"),
            (_[(_.Password = 1)] = "Password"),
            (_[(_.Submit = 2)] = "Submit");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.SingleLine = 0)] = "SingleLine"),
            (_[(_.MultipleLines = 1)] = "MultipleLines");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.LaserMouse = 1)] = "LaserMouse"),
            (_[(_.Keyboard = 2)] = "Keyboard"),
            (_[(_.RoomView = 4)] = "RoomView"),
            (_[(_.DisplaySuppressed = 8)] = "DisplaySuppressed"),
            (_[(_.SystemButtonDown = 16)] = "SystemButtonDown"),
            (_[(_.DriverIsDrawingControllers = 32)] =
              "DriverIsDrawingControllers"),
            (_[(_.DriverRequestsApplicationPause = 64)] =
              "DriverRequestsApplicationPause"),
            (_[(_.DriverRequestsReducedRendering = 128)] =
              "DriverRequestsReducedRendering");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.BULK_DEFAULT = 0)] = "BULK_DEFAULT"),
            (_[(_.BULK_64K_DMA = 1)] = "BULK_64K_DMA"),
            (_[(_.BULK_16K_DMA = 2)] = "BULK_16K_DMA"),
            (_[(_.BULK_8K_DMA = 3)] = "BULK_8K_DMA"),
            (_[(_.ISO_52FPS = 4)] = "ISO_52FPS"),
            (_[(_.ISO_50FPS = 5)] = "ISO_50FPS"),
            (_[(_.ISO_48FPS = 6)] = "ISO_48FPS"),
            (_[(_.ISO_46FPS = 7)] = "ISO_46FPS"),
            (_[(_.ISO_44FPS = 8)] = "ISO_44FPS"),
            (_[(_.ISO_42FPS = 9)] = "ISO_42FPS"),
            (_[(_.ISO_40FPS = 10)] = "ISO_40FPS"),
            (_[(_.ISO_35FPS = 11)] = "ISO_35FPS"),
            (_[(_.ISO_30FPS = 12)] = "ISO_30FPS"),
            (_[(_.ISO_15FPS = 13)] = "ISO_15FPS"),
            (_[(_.MAX_CAMERA_COMPAT_MODES = 14)] = "MAX_CAMERA_COMPAT_MODES");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.ECameraExposure_Unknown = 0)] = "ECameraExposure_Unknown"),
            (_[(_.ECameraExposure_Nominal = 1)] = "ECameraExposure_Nominal"),
            (_[(_.ECameraExposure_HighExposure = 2)] =
              "ECameraExposure_HighExposure");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.None = 0)] = "None"),
            (_[(_.ThisSteamVR = 1)] = "ThisSteamVR"),
            (_[(_.AnotherSteamVR = 2)] = "AnotherSteamVR"),
            (_[(_.AnotherRuntime = 3)] = "AnotherRuntime"),
            (_[(_.Error = -1)] = "Error");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.TrackedControllerRole_Invalid = 0)] =
            "TrackedControllerRole_Invalid"),
            (_[(_.TrackedControllerRole_LeftHand = 1)] =
              "TrackedControllerRole_LeftHand"),
            (_[(_.TrackedControllerRole_RightHand = 2)] =
              "TrackedControllerRole_RightHand"),
            (_[(_.TrackedControllerRole_OptOut = 3)] =
              "TrackedControllerRole_OptOut"),
            (_[(_.TrackedControllerRole_Treadmill = 4)] =
              "TrackedControllerRole_Treadmill"),
            (_[(_.TrackedControllerRole_Max = 5)] =
              "TrackedControllerRole_Max");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Unknown = 0)] = "Unknown"),
            (_[(_.Steam_VRButton = 1)] = "Steam_VRButton"),
            (_[(_.Steam_StartSteamVRApp = 2)] = "Steam_StartSteamVRApp"),
            (_[(_.Watchdog_Unknown = 10)] = "Watchdog_Unknown"),
            (_[(_.Watchdog_Controller = 11)] = "Watchdog_Controller"),
            (_[(_.Watchdog_Hmd = 12)] = "Watchdog_Hmd"),
            (_[(_.AppLaunch_Unknown = 20)] = "AppLaunch_Unknown"),
            (_[(_.AppLaunch_Steam = 21)] = "AppLaunch_Steam"),
            (_[(_.SteamVR_Restart = 30)] = "SteamVR_Restart"),
            (_[(_.SteamVR_VRStartup = 31)] = "SteamVR_VRStartup");
        })(_ || (_ = {})),
        (function (_) {
          _[(_.Hostname = 0)] = "Hostname";
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Unavailable = 0)] = "Unavailable"),
            (_[(_.Active = 1)] = "Active"),
            (_[(_.Off = 2)] = "Off");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Default = 1)] = "Default"), (_[(_.Floor = 2)] = "Floor");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Inactive = 0)] = "Inactive"),
            (_[(_.PendingReset = 1)] = "PendingReset"),
            (_[(_.PendingResetIfNeeded = 2)] = "PendingResetIfNeeded"),
            (_[(_.Default = 3)] = "Default"),
            (_[(_._ = 4)] = "CV"),
            (_[(_.Manual = 5)] = "Manual");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_._ = 1)] = "OK"),
            (_[(_.Warning = 100)] = "Warning"),
            (_[(_.Warning_BaseStationMayHaveMoved = 101)] =
              "Warning_BaseStationMayHaveMoved"),
            (_[(_.Warning_BaseStationRemoved = 102)] =
              "Warning_BaseStationRemoved"),
            (_[(_.Warning_SeatedBoundsInvalid = 103)] =
              "Warning_SeatedBoundsInvalid"),
            (_[(_.Error = 200)] = "Error"),
            (_[(_.Error_BaseStationUninitialized = 201)] =
              "Error_BaseStationUninitialized"),
            (_[(_.Error_BaseStationConflict = 202)] =
              "Error_BaseStationConflict"),
            (_[(_.Error_PlayAreaInvalid = 203)] = "Error_PlayAreaInvalid"),
            (_[(_.Error_CollisionBoundsInvalid = 204)] =
              "Error_CollisionBoundsInvalid");
        })(_ || (_ = {})),
        (function (_) {
          (_[(_.Small = 0)] = "Small"),
            (_[(_.Medium = 1)] = "Medium"),
            (_[(_.Large = 2)] = "Large"),
            (_[(_.Gigantic = 3)] = "Gigantic"),
            (_[(_.Standing = 4)] = "Standing");
        })(_ || (_ = {}));
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      var _, _, _, _, _, _, _, _, _, _, _, _, _, _;
      __webpack_require__._(module_exports, {
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
      });
      const _ = "/settings/steamvr/showAdvancedSettings";
    },
  },
]);
