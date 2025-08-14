var CLSTAMP = "9975066";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [458],
  {
    3361: (e, t, o) => {
      o.d(t, { d: () => _ });
      var r,
        n = o(6540),
        i = o(3496),
        a = o(6292);
      !(function (e) {
        (e[(e.Seated = 0)] = "Seated"),
          (e[(e.Standing = 1)] = "Standing"),
          (e[(e.Raw = 2)] = "Raw");
      })(r || (r = {}));
      class _ extends i._J {
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
          let t, o, _;
          this.props.transform
            ? ((t = (0, i.j_)(this.props.transform.translation)),
              (o = this.props.transform.rotation),
              (_ = this.props.transform.scale))
            : ((t = (0, i.XI)(this.props.translation)
                ? null === (e = (0, i.UM)(this.props.translation)) ||
                  void 0 === e
                  ? void 0
                  : e.join(" ")
                : (0, i.j_)(
                    (0, i.Wi)(this.props.translation, { x: 0, y: 0, z: 0 }),
                  )),
              (o =
                this.props.rotation && "w" in this.props.rotation
                  ? this.props.rotation
                  : (0, a.Fb)(
                      (0, a.tx)(
                        (0, i.Wi)(this.props.rotation, { x: 0, y: 0, z: 0 }),
                        Math.PI / 180,
                      ),
                    )),
              (_ =
                "number" == typeof this.props.scale
                  ? {
                      x: this.props.scale,
                      y: this.props.scale,
                      z: this.props.scale,
                    }
                  : (0, i.Wi)(this.props.scale, { x: 1, y: 1, z: 1 })));
          let l = (0, i.hi)(o),
            s = (0, i.j_)(_);
          return n.createElement(
            "vsg-transform",
            {
              translation: t,
              rotation: l,
              scale: s,
              "curvature-pitch": this.props.curvature_pitch,
              "invert-parent-panel-pitch": this.props.invert_parent_panel_pitch,
              "ignore-parent-scale": this.props.ignore_parent_scale,
              "transform-path": this.props.transform_path,
              "parent-path": this.props.parent_path,
              "parent-origin": r[this.props.parent_origin],
              "parent-id": this.props.parent_id,
            },
            this.props.children,
          );
        }
      }
    },
    3725: (e, t, o) => {
      var r, n, i, a;
      function _() {
        var e;
        return null !==
          (e =
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.Environment()) && void 0 !== e
          ? e
          : r.Unknown;
      }
      o.d(t, {
        $Z: () => p,
        Ee: () => C,
        GQ: () => k,
        Gz: () => s,
        HW: () => I,
        MV: () => i,
        NB: () => S,
        OH: () => r,
        R$: () => _,
        Rk: () => m,
        Xl: () => B,
        _1: () => T,
        _E: () => l,
        b: () => R,
        gN: () => F,
        k2: () => f,
        kG: () => v,
        ku: () => c,
        mo: () => g,
        mu: () => a,
        ne: () => d,
        pM: () => n,
        rx: () => P,
      }),
        (function (e) {
          (e[(e.Desktop = 1)] = "Desktop"),
            (e[(e.Overlay = 2)] = "Overlay"),
            (e[(e.Unknown = 100)] = "Unknown");
        })(r || (r = {})),
        window.hasOwnProperty("VRHTML") || (window.VRHTML = null),
        (function (e) {
          (e[(e.Auto = 0)] = "Auto"),
            (e[(e.Low = 1)] = "Low"),
            (e[(e.Medium = 2)] = "Medium"),
            (e[(e.High = 3)] = "High");
        })(n || (n = {})),
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
        })(i || (i = {})),
        (function (e) {
          (e[(e.Seated = 0)] = "Seated"),
            (e[(e.Standing = 1)] = "Standing"),
            (e[(e.RawAndUncalibrated = 2)] = "RawAndUncalibrated");
        })(a || (a = {}));
      let l = 0,
        s = 0,
        d = 4294967295;
      var p, u, c, S, m, g, D, I, h, B, R, y, C, F, v, M, f, P, A, T, k;
      !(function (e) {
        (e[(e.Invalid = 0)] = "Invalid"),
          (e[(e.RecenterCountdown = 1)] = "RecenterCountdown"),
          (e[(e.FloorAdjustExisting = 2)] = "FloorAdjustExisting"),
          (e[(e.RoomSetupFloor = 3)] = "RoomSetupFloor"),
          (e[(e.ClearRoomSetup = 4)] = "ClearRoomSetup");
      })(p || (p = {})),
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
        })(u || (u = {})),
        (function (e) {
          (e[(e.Activated = 0)] = "Activated"),
            (e[(e.Deactivated = 1)] = "Deactivated");
        })(c || (c = {})),
        (function (e) {
          (e[(e.NoDashboardTab = 8)] = "NoDashboardTab"),
            (e[(e.AcceptsGamepadEvents = 16)] = "AcceptsGamepadEvents"),
            (e[(e.ShowGamepadFocus = 32)] = "ShowGamepadFocus"),
            (e[(e.SendVRDiscreteScrollEvents = 64)] =
              "SendVRDiscreteScrollEvents"),
            (e[(e.SendVRTouchpadEvents = 128)] = "SendVRTouchpadEvents"),
            (e[(e.ShowTouchPadScrollWheel = 256)] = "ShowTouchPadScrollWheel"),
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
            (e[(e.EnableControlBarClose = 33554432)] = "EnableControlBarClose"),
            (e[(e.MinimalControlBar = 67108864)] = "MinimalControlBar"),
            (e[(e.EnableClickStabilization = 134217728)] =
              "EnableClickStabilization"),
            (e[(e.MultiCursor = 268435456)] = "MultiCursor");
        })(S || (S = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"), (e[(e.Mouse = 1)] = "Mouse");
        })(m || (m = {})),
        (function (e) {
          (e[(e.Invalid = 0)] = "Invalid"),
            (e[(e.HMD = 1)] = "HMD"),
            (e[(e.Controller = 2)] = "Controller"),
            (e[(e.GenericTracker = 3)] = "GenericTracker"),
            (e[(e.TrackingReference = 4)] = "TrackingReference"),
            (e[(e.DisplayRedirect = 5)] = "DisplayRedirect");
        })(g || (g = {})),
        (function (e) {
          (e[(e.Unknown = 0)] = "Unknown"),
            (e[(e.NVIDIA = 1)] = "NVIDIA"),
            (e[(e.AMD = 2)] = "AMD");
        })(D || (D = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Starting = 1)] = "Starting"),
            (e[(e.Quitting = 2)] = "Quitting"),
            (e[(e.Running = 3)] = "Running"),
            (e[(e.Waiting = 4)] = "Waiting");
        })(I || (I = {})),
        (function (e) {
          (e[(e.ButtonPress_0 = 0)] = "ButtonPress_0"),
            (e[(e.ButtonPress_1 = 1)] = "ButtonPress_1"),
            (e[(e.ButtonPress_2 = 2)] = "ButtonPress_2"),
            (e[(e.ButtonPress_3 = 3)] = "ButtonPress_3"),
            (e[(e.CouldntFindSystemOverlay = 4)] = "CouldntFindSystemOverlay"),
            (e[(e.CouldntFindOrCreateClientOverlay = 5)] =
              "CouldntFindOrCreateClientOverlay"),
            (e[(e.ApplicationQuit = 6)] = "ApplicationQuit");
        })(h || (h = {})),
        (function (e) {
          (e[(e.Normal = 0)] = "Normal"),
            (e[(e.Password = 1)] = "Password"),
            (e[(e.Submit = 2)] = "Submit");
        })(B || (B = {})),
        (function (e) {
          (e[(e.SingleLine = 0)] = "SingleLine"),
            (e[(e.MultipleLines = 1)] = "MultipleLines");
        })(R || (R = {})),
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
        })(y || (y = {})),
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
        })(F || (F = {})),
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
        })(v || (v = {})),
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
        })(M || (M = {})),
        (function (e) {
          e[(e.Hostname = 0)] = "Hostname";
        })(f || (f = {})),
        (function (e) {
          (e[(e.Unavailable = 0)] = "Unavailable"),
            (e[(e.Active = 1)] = "Active"),
            (e[(e.Off = 2)] = "Off");
        })(P || (P = {})),
        (function (e) {
          (e[(e.Default = 1)] = "Default"), (e[(e.Floor = 2)] = "Floor");
        })(A || (A = {})),
        (function (e) {
          (e[(e.Inactive = 0)] = "Inactive"),
            (e[(e.PendingReset = 1)] = "PendingReset"),
            (e[(e.PendingResetIfNeeded = 2)] = "PendingResetIfNeeded"),
            (e[(e.Default = 3)] = "Default"),
            (e[(e.CV = 4)] = "CV"),
            (e[(e.Manual = 5)] = "Manual");
        })(T || (T = {})),
        (function (e) {
          (e[(e.Small = 0)] = "Small"),
            (e[(e.Medium = 1)] = "Medium"),
            (e[(e.Large = 2)] = "Large"),
            (e[(e.Gigantic = 3)] = "Gigantic"),
            (e[(e.Standing = 4)] = "Standing");
        })(k || (k = {}));
    },
    4367: (e, t, o) => {
      var r, n, i, a, _, l, s, d;
      o.d(t, {
        $: () => d,
        KI: () => s,
        QR: () => a,
        en: () => i,
        fD: () => r,
      }),
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
        })(_ || (_ = {})),
        (function (e) {
          (e[(e.Notification_Shown = 600)] = "Notification_Shown"),
            (e[(e.Notification_Hidden = 601)] = "Notification_Hidden"),
            (e[(e.Notification_BeginInteraction = 602)] =
              "Notification_BeginInteraction"),
            (e[(e.Notification_Destroyed = 603)] = "Notification_Destroyed");
        })(l || (l = {})),
        (function (e) {
          (e[(e.TheaterFast = 0)] = "TheaterFast"),
            (e[(e.TheaterSlow = 1)] = "TheaterSlow");
        })(s || (s = {})),
        (function (e) {
          (e[(e.Constant = 0)] = "Constant"),
            (e[(e.Nearest = 1)] = "Nearest"),
            (e[(e.Linear = 2)] = "Linear"),
            (e[(e.SmoothStep = 3)] = "SmoothStep"),
            (e[(e.SmootherStep = 4)] = "SmootherStep");
        })(d || (d = {}));
    },
  },
]); //# sourceMappingURL=file:///c:/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~1a88854fa.js.map
