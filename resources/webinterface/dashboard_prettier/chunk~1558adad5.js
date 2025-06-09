var CLSTAMP = "9806884";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [510],
  {
    5802: (t, e, i) => {
      i.d(e, { B$: () => M, bR: () => v, mQ: () => I, xM: () => B });
      var o,
        n = i(1635),
        s = i(3236),
        r = i(2505),
        l = i.n(r),
        d = i(7813),
        c = i(3714),
        p = i(6090),
        a = i(6795),
        u = i(1532),
        h = i(9118);
      class g {
        constructor() {
          (this.path = void 0),
            (this.mode = void 0),
            (this.parameters = new Map()),
            (this.inputs = new Map()),
            (0, d.Gn)(this);
        }
      }
      (0, n.Cg)([d.sH], g.prototype, "path", void 0),
        (0, n.Cg)([d.sH], g.prototype, "mode", void 0),
        (0, n.Cg)([d.sH], g.prototype, "parameters", void 0),
        (0, n.Cg)([d.sH], g.prototype, "inputs", void 0);
      class S {
        constructor() {
          (this.path = void 0), (this.output = void 0), (0, d.Gn)(this);
        }
      }
      (0, n.Cg)([d.sH], S.prototype, "path", void 0),
        (0, n.Cg)([d.sH], S.prototype, "output", void 0);
      class m {
        constructor() {
          (this.path = void 0), (this.output = void 0), (0, d.Gn)(this);
        }
      }
      (0, n.Cg)([d.sH], m.prototype, "path", void 0),
        (0, n.Cg)([d.sH], m.prototype, "output", void 0);
      class _ {
        constructor() {
          (this.path = void 0), (this.output = void 0), (0, d.Gn)(this);
        }
      }
      (0, n.Cg)([d.sH], _.prototype, "path", void 0),
        (0, n.Cg)([d.sH], _.prototype, "output", void 0);
      class f {
        constructor() {
          (this.output = void 0), (this.inputs = new Array()), (0, d.Gn)(this);
        }
      }
      (0, n.Cg)([d.sH], f.prototype, "output", void 0),
        (0, n.Cg)([d.sH], f.prototype, "inputs", void 0);
      class y {
        constructor() {
          (this.chords = void 0),
            (this.poses = void 0),
            (this.haptics = void 0),
            (this.sources = void 0),
            (this.skeleton = void 0),
            (0, d.Gn)(this);
        }
      }
      (0, n.Cg)([d.sH], y.prototype, "chords", void 0),
        (0, n.Cg)([d.sH], y.prototype, "poses", void 0),
        (0, n.Cg)([d.sH], y.prototype, "haptics", void 0),
        (0, n.Cg)([d.sH], y.prototype, "sources", void 0),
        (0, n.Cg)([d.sH], y.prototype, "skeleton", void 0);
      class A {
        constructor() {
          (this.device_path_string = void 0),
            (this.device_path_handle = void 0),
            (this.role = void 0),
            (this.controller_role = void 0),
            (0, d.Gn)(this);
        }
      }
      (0, n.Cg)([d.sH], A.prototype, "device_path_string", void 0),
        (0, n.Cg)([d.sH], A.prototype, "device_path_handle", void 0),
        (0, n.Cg)([d.sH], A.prototype, "role", void 0),
        (0, n.Cg)([d.sH], A.prototype, "controller_role", void 0);
      class C {
        constructor() {
          (this.trackers = void 0), (this.valid_roles = []), (0, d.Gn)(this);
        }
      }
      function B(t) {
        return new Promise(function (e, i) {
          l()
            .get("/input/getactions.json?app_key=" + t)
            .then((i) => {
              console.log("Loaded action manifest for ", t), e(i.data);
            })
            .catch((t) => {
              i(t);
            });
        });
      }
      function I(t, e, i) {
        return (0, n.sH)(this, void 0, void 0, function* () {
          let o = (yield l().get(
            "/input/loadbindingfromurl.json?binding_url=" +
              encodeURI(i) +
              "&controller_type=" +
              encodeURI(e) +
              "&app_key=" +
              encodeURI(t),
          )).data;
          if (o.success) return o;
          throw new Error(o.error);
        });
      }
      (0, n.Cg)([d.sH], C.prototype, "trackers", void 0),
        (0, n.Cg)([d.sH], C.prototype, "valid_roles", void 0);
      class v {
        constructor(t, e) {
          (this.x = t), (this.y = e), this.toString.bind(this);
        }
        toString() {
          return this.x + "," + this.y;
        }
      }
      class b {
        constructor(t, e, i, o, n) {
          (this.m_BindingUISource = void 0),
            (this.m_ControllerProfile = void 0),
            (this.m_sDeviceInputPath = void 0),
            (this.m_eButtonSide = void 0),
            (this.m_sInputPath = void 0),
            (this.m_sActionSet = void 0),
            (this.m_BindingStoreObserverDisposer = void 0),
            (this.m_iNewSourceEntry = -1),
            (this.m_sDeviceInputPath = t),
            (this.m_ControllerProfile = e),
            (this.m_eButtonSide = i),
            (this.m_sInputPath = o),
            (this.m_sActionSet = n),
            (this.m_BindingStoreObserverDisposer = (0, d.lB)(M, (t) => {
              "m_LoadedBinding" == t.name && this.UpdateBindingSource();
            })),
            this.UpdateBindingSource(),
            M.RegisterBindingWatcher(this.UpdateBindingSource.bind(this)),
            (0, d.Gn)(this);
        }
        cancelWatcher() {
          this.m_BindingStoreObserverDisposer(),
            M.UnregisterBindingWatcher(this.UpdateBindingSource);
        }
        UpdateBindingSource() {
          this.m_BindingUISource = M.GetActionBinding(
            this.GetFullInputPath,
            this.m_sActionSet,
          );
        }
        get GetFullInputPath() {
          let t = this.m_sDeviceInputPath + this.m_sInputPath;
          return (t = t.replace(/([^:]\/)\/+/g, "$1")), t;
        }
        GetSVGEndPoint() {
          return new v(
            this.m_ControllerProfile.input_source[this.m_sInputPath]
              .binding_image_point[0],
            this.m_ControllerProfile.input_source[this.m_sInputPath]
              .binding_image_point[1],
          );
        }
        get GetButtonSide() {
          return this.m_eButtonSide;
        }
        get GetNumModes() {
          return this.m_BindingUISource ? this.m_BindingUISource.length : 0;
        }
        GetActionForInputType(t, e) {
          if (
            this.m_BindingUISource &&
            this.m_BindingUISource[t].inputs &&
            this.m_BindingUISource[t].inputs.has(e)
          ) {
            let i = this.m_BindingUISource[t].inputs.get(e).output,
              o = M.GetActionByName(i);
            if (!o) {
              let t = M.GetSimulatedActionByPath(i);
              t && (o = M.CreateActionDefinitionForSimulatedAction(t));
            }
            let n = M.GetAliasInfo(i);
            return (
              o &&
                n &&
                n.alias_name &&
                ((o = Object.assign({}, o)), (o.localized_name = n.alias_name)),
              o
            );
          }
        }
        GetClickAction(t) {
          return this.GetActionForInputType(t, "click");
        }
        GetTouchAction(t) {
          return this.GetActionForInputType(t, "touch");
        }
        GetPositionAction(t) {
          return this.GetActionForInputType(t, "position");
        }
        GetHeldAction(t) {
          return this.GetActionForInputType(t, "held");
        }
        GetLongAction(t) {
          return this.GetActionForInputType(t, "long");
        }
        GetSingleAction(t) {
          return this.GetActionForInputType(t, "single");
        }
        GetDoubleAction(t) {
          return this.GetActionForInputType(t, "double");
        }
        GetNorthAction(t) {
          return this.GetActionForInputType(t, "north");
        }
        GetEastAction(t) {
          return this.GetActionForInputType(t, "east");
        }
        GetSouthAction(t) {
          return this.GetActionForInputType(t, "south");
        }
        GetWestAction(t) {
          return this.GetActionForInputType(t, "west");
        }
        GetCenterAction(t) {
          return this.GetActionForInputType(t, "center");
        }
        GetScrollAction(t) {
          return this.GetActionForInputType(t, "scroll");
        }
        GetPullAction(t) {
          return this.GetActionForInputType(t, "pull");
        }
        GetForceAction(t) {
          return this.GetActionForInputType(t, "force");
        }
        GetConstantAction(t) {
          return this.GetActionForInputType(t, "constant");
        }
        GetGrabAction(t) {
          return this.GetActionForInputType(t, "grab");
        }
        GetValueAction(t) {
          return this.GetActionForInputType(t, "value");
        }
        get GetControllerInputName() {
          return h.W.LocalizeDriverString(
            this.m_ControllerProfile.resource_root,
            this.m_sInputPath,
          );
        }
        get GetModes() {
          return this.m_BindingUISource ? this.m_BindingUISource : [];
        }
        GetMode(t) {
          return this.m_BindingUISource &&
            t >= 0 &&
            t < this.m_BindingUISource.length
            ? this.m_BindingUISource[t].mode
            : "none";
        }
        get GetInputSourceType() {
          return this.m_ControllerProfile.input_source[this.m_sInputPath].type;
        }
        get GetInputSource() {
          return this.m_ControllerProfile.input_source[this.m_sInputPath];
        }
        get GetInputSourceClickSupport() {
          return (
            !(
              this.m_ControllerProfile.input_source[this.m_sInputPath].force &&
              !this.m_ControllerProfile.input_source[this.m_sInputPath].click
            ) &&
            ("knuckles" != this.m_ControllerProfile.controller_type ||
              "/input/trackpad" != this.m_sInputPath) &&
              !(
                !this.m_ControllerProfile.input_source[this.m_sInputPath]
                  .click &&
                !this.m_ControllerProfile.input_source[this.m_sInputPath].touch
              ) &&
            (this.m_ControllerProfile.input_source[this.m_sInputPath].click ||
              this.m_ControllerProfile.input_source[this.m_sInputPath].touch)
          );
        }
        get GetInputSourceTouchSupport() {
          return (
            !(
              !this.m_ControllerProfile.input_source[this.m_sInputPath].touch &&
              !this.m_ControllerProfile.input_source[this.m_sInputPath]
                .proximity
            ) &&
            (this.m_ControllerProfile.input_source[this.m_sInputPath].touch ||
              this.m_ControllerProfile.input_source[this.m_sInputPath]
                .proximity)
          );
        }
        get GetInputSourceForceSupport() {
          return (
            !!this.m_ControllerProfile.input_source[this.m_sInputPath].force &&
            this.m_ControllerProfile.input_source[this.m_sInputPath].force
          );
        }
        get GetInputSourceDefaultDeadzone() {
          return this.m_ControllerProfile.input_source[this.m_sInputPath]
            .default_dead_zone_pct
            ? this.m_ControllerProfile.input_source[this.m_sInputPath]
                .default_dead_zone_pct
            : 0;
        }
        SetInputMode(t, e) {
          !this.m_BindingUISource || e < 0 || e >= this.m_BindingUISource.length
            ? console.error("SetInputMode: Invalid mode index for new mode")
            : (this.ClearNewModeIfSet(e),
              M.SetInputModeForInputSource(this.GetFullInputPath, e, t));
        }
        AddInputMode(t) {
          this.m_iNewSourceEntry = M.AddInputModeForSource(
            this.GetFullInputPath,
            t,
          );
        }
        DeleteInputMode(t) {
          !this.m_BindingUISource || t < 0 || t >= this.m_BindingUISource.length
            ? console.error("SetInputMode: Invalid mode index for new mode")
            : M.DeleteInputModeForSource(this.GetFullInputPath, t);
        }
        ClearNewModeIfSet(t) {
          -1 != this.m_iNewSourceEntry &&
            this.m_iNewSourceEntry == t &&
            (this.m_iNewSourceEntry = -1);
        }
        BHasModeSelectionPending(t) {
          return -1 != this.m_iNewSourceEntry && this.m_iNewSourceEntry == t;
        }
        SetClickAction(t, e) {
          M.SetActionForInputModeType(this.GetFullInputPath, t, "click", e, [
            "button",
            "trackpad",
            "joystick",
            "trigger",
            "toggle_button",
            "complex_button",
          ]);
        }
        SetTouchAction(t, e) {
          M.SetActionForInputModeType(this.GetFullInputPath, t, "touch", e, [
            "button",
            "trackpad",
            "joystick",
            "trigger",
            "toggle_button",
            "complex_button",
          ]);
        }
        SetHeldAction(t, e) {
          M.SetActionForInputModeType(this.GetFullInputPath, t, "held", e, [
            "button",
            "complex_button",
          ]);
        }
        SetLongAction(t, e) {
          M.SetActionForInputModeType(this.GetFullInputPath, t, "long", e, [
            "button",
            "complex_button",
          ]);
        }
        SetSingleAction(t, e) {
          M.SetActionForInputModeType(this.GetFullInputPath, t, "single", e, [
            "button",
            "complex_button",
          ]);
        }
        SetDoubleAction(t, e) {
          M.SetActionForInputModeType(this.GetFullInputPath, t, "double", e, [
            "button",
            "complex_button",
          ]);
        }
        SetPositionAction(t, e) {
          M.SetActionForInputModeType(this.GetFullInputPath, t, "position", e, [
            "trackpad",
            "joystick",
          ]);
        }
        SetNorthAction(t, e) {
          M.SetActionForInputModeType(this.GetFullInputPath, t, "north", e, [
            "dpad",
            "dpad_click",
            "dpad_touch",
          ]);
        }
        SetEastAction(t, e) {
          M.SetActionForInputModeType(this.GetFullInputPath, t, "east", e, [
            "dpad",
            "dpad_click",
            "dpad_touch",
          ]);
        }
        SetSouthAction(t, e) {
          M.SetActionForInputModeType(this.GetFullInputPath, t, "south", e, [
            "dpad",
            "dpad_click",
            "dpad_touch",
          ]);
        }
        SetWestAction(t, e) {
          M.SetActionForInputModeType(this.GetFullInputPath, t, "west", e, [
            "dpad",
            "dpad_click",
            "dpad_touch",
          ]);
        }
        SetCenterAction(t, e) {
          M.SetActionForInputModeType(this.GetFullInputPath, t, "center", e, [
            "dpad",
            "dpad_click",
            "dpad_touch",
          ]);
        }
        SetScrollAction(t, e) {
          M.SetActionForInputModeType(this.GetFullInputPath, t, "scroll", e, [
            "scroll",
          ]);
        }
        SetPullAction(t, e) {
          M.SetActionForInputModeType(this.GetFullInputPath, t, "pull", e, [
            "trigger",
          ]);
        }
        SetForceAction(t, e) {
          M.SetActionForInputModeType(this.GetFullInputPath, t, "force", e, [
            "force_sensor",
          ]);
        }
        SetGrabAction(t, e) {
          M.SetActionForInputModeType(this.GetFullInputPath, t, "grab", e, [
            "grab",
          ]);
        }
        SetValueAction(t, e) {
          M.SetActionForInputModeType(this.GetFullInputPath, t, "value", e, [
            "scalar_constant",
          ]);
        }
        SetConstantAction(t, e) {
          M.SetActionForInputModeType(this.GetFullInputPath, t, "constant", e, [
            "static_bool",
          ]);
        }
        CopyActions(t) {
          M.ClearModesForInputPath(this.GetFullInputPath),
            t.GetModes.forEach((t, e) => {
              M.AddInputModeForSource(this.GetFullInputPath, t.mode),
                t.inputs.forEach((t, i) => {
                  M.SetActionForInputModeType(
                    this.GetFullInputPath,
                    e,
                    i,
                    t.output,
                    [],
                  );
                });
            });
        }
        BindingsMatch(t) {
          let e = t.GetModes;
          if (this.GetModes.length != e.length) return !1;
          for (let t = 0; t < e.length; t++) {
            let i = e[t],
              o = this.GetModes.filter((t) => t.mode == i.mode);
            if (o.length > 0) {
              let t = !0;
              return (
                o[0].inputs.forEach((e, o) => {
                  (i.inputs.has(o) && i.inputs.get(o).output == e.output) ||
                    (t = !1);
                }),
                t
              );
            }
            return !1;
          }
          return !0;
        }
        SetClickParameter(t, e, i) {
          M.SetParameterForInputModeType(
            this.GetFullInputPath,
            t,
            "click",
            e,
            i,
          );
        }
        SetTouchParameter(t, e, i) {
          M.SetParameterForInputModeType(
            this.GetFullInputPath,
            t,
            "touch",
            e,
            i,
          );
        }
        SetParameter(t, e, i, o) {
          M.SetParameterForInputModeType(this.GetFullInputPath, t, e, i, o);
        }
        GetClickParameter(t, e) {
          return M.GetParameterForInputModeType(
            this.GetFullInputPath,
            t,
            "click",
            e,
          );
        }
        GetTouchParameter(t, e) {
          return M.GetParameterForInputModeType(
            this.GetFullInputPath,
            t,
            "touch",
            e,
          );
        }
        GetParameter(t, e, i) {
          return M.GetParameterForInputModeType(this.GetFullInputPath, t, e, i);
        }
        GetTrackpadInvertState(t) {
          switch (
            M.GetParameterForInputModeType(
              this.GetFullInputPath,
              t,
              "trackpad",
              "invert",
            )
          ) {
            case "x":
              return "x";
            case "y":
              return "y";
            case "xy":
              return "xy";
            default:
              return "";
          }
        }
        SetTrackpadInvertState(t, e) {
          let i = "";
          switch (e) {
            case "x":
              i = "x";
              break;
            case "y":
              i = "y";
              break;
            case "xy":
              i = "xy";
          }
          M.SetParameterForInputModeType(
            this.GetFullInputPath,
            t,
            "trackpad",
            "invert",
            i,
          );
        }
      }
      (0, n.Cg)([d.sH], b.prototype, "m_BindingUISource", void 0),
        (0, n.Cg)([d.sH], b.prototype, "m_ControllerProfile", void 0),
        (0, n.Cg)([d.sH], b.prototype, "m_sDeviceInputPath", void 0),
        (0, n.Cg)([d.sH], b.prototype, "m_eButtonSide", void 0),
        (0, n.Cg)([d.sH], b.prototype, "m_sInputPath", void 0),
        (0, n.Cg)([d.sH], b.prototype, "m_sActionSet", void 0),
        (0, n.Cg)([s.o], b.prototype, "cancelWatcher", null),
        (0, n.Cg)([d.XI], b.prototype, "UpdateBindingSource", null),
        (0, n.Cg)([d.EW], b.prototype, "GetFullInputPath", null),
        (0, n.Cg)([s.o], b.prototype, "GetSVGEndPoint", null),
        (0, n.Cg)([d.EW], b.prototype, "GetButtonSide", null),
        (0, n.Cg)([d.EW], b.prototype, "GetNumModes", null),
        (0, n.Cg)([s.o], b.prototype, "GetActionForInputType", null),
        (0, n.Cg)([s.o], b.prototype, "GetClickAction", null),
        (0, n.Cg)([s.o], b.prototype, "GetTouchAction", null),
        (0, n.Cg)([s.o], b.prototype, "GetPositionAction", null),
        (0, n.Cg)([s.o], b.prototype, "GetHeldAction", null),
        (0, n.Cg)([s.o], b.prototype, "GetLongAction", null),
        (0, n.Cg)([s.o], b.prototype, "GetSingleAction", null),
        (0, n.Cg)([s.o], b.prototype, "GetDoubleAction", null),
        (0, n.Cg)([s.o], b.prototype, "GetNorthAction", null),
        (0, n.Cg)([s.o], b.prototype, "GetEastAction", null),
        (0, n.Cg)([s.o], b.prototype, "GetSouthAction", null),
        (0, n.Cg)([s.o], b.prototype, "GetWestAction", null),
        (0, n.Cg)([s.o], b.prototype, "GetCenterAction", null),
        (0, n.Cg)([s.o], b.prototype, "GetScrollAction", null),
        (0, n.Cg)([s.o], b.prototype, "GetPullAction", null),
        (0, n.Cg)([s.o], b.prototype, "GetForceAction", null),
        (0, n.Cg)([s.o], b.prototype, "GetConstantAction", null),
        (0, n.Cg)([s.o], b.prototype, "GetGrabAction", null),
        (0, n.Cg)([s.o], b.prototype, "GetValueAction", null),
        (0, n.Cg)([d.EW], b.prototype, "GetControllerInputName", null),
        (0, n.Cg)([d.EW], b.prototype, "GetModes", null),
        (0, n.Cg)([s.o], b.prototype, "GetMode", null),
        (0, n.Cg)([d.EW], b.prototype, "GetInputSourceType", null),
        (0, n.Cg)([d.EW], b.prototype, "GetInputSource", null),
        (0, n.Cg)([d.EW], b.prototype, "GetInputSourceClickSupport", null),
        (0, n.Cg)([d.EW], b.prototype, "GetInputSourceTouchSupport", null),
        (0, n.Cg)([d.EW], b.prototype, "GetInputSourceForceSupport", null),
        (0, n.Cg)([d.EW], b.prototype, "GetInputSourceDefaultDeadzone", null),
        (0, n.Cg)([d.XI], b.prototype, "SetInputMode", null),
        (0, n.Cg)([d.XI], b.prototype, "AddInputMode", null),
        (0, n.Cg)([d.XI], b.prototype, "DeleteInputMode", null),
        (0, n.Cg)([s.o], b.prototype, "ClearNewModeIfSet", null),
        (0, n.Cg)([s.o], b.prototype, "BHasModeSelectionPending", null),
        (0, n.Cg)([d.XI], b.prototype, "SetClickAction", null),
        (0, n.Cg)([d.XI], b.prototype, "SetTouchAction", null),
        (0, n.Cg)([d.XI], b.prototype, "SetHeldAction", null),
        (0, n.Cg)([d.XI], b.prototype, "SetLongAction", null),
        (0, n.Cg)([d.XI], b.prototype, "SetSingleAction", null),
        (0, n.Cg)([d.XI], b.prototype, "SetDoubleAction", null),
        (0, n.Cg)([d.XI], b.prototype, "SetPositionAction", null),
        (0, n.Cg)([d.XI], b.prototype, "SetNorthAction", null),
        (0, n.Cg)([d.XI], b.prototype, "SetEastAction", null),
        (0, n.Cg)([d.XI], b.prototype, "SetSouthAction", null),
        (0, n.Cg)([d.XI], b.prototype, "SetWestAction", null),
        (0, n.Cg)([d.XI], b.prototype, "SetCenterAction", null),
        (0, n.Cg)([d.XI], b.prototype, "SetScrollAction", null),
        (0, n.Cg)([d.XI], b.prototype, "SetPullAction", null),
        (0, n.Cg)([d.XI], b.prototype, "SetForceAction", null),
        (0, n.Cg)([d.XI], b.prototype, "SetGrabAction", null),
        (0, n.Cg)([d.XI], b.prototype, "SetValueAction", null),
        (0, n.Cg)([d.XI], b.prototype, "SetConstantAction", null),
        (0, n.Cg)([d.XI], b.prototype, "CopyActions", null),
        (0, n.Cg)([s.o], b.prototype, "BindingsMatch", null),
        (0, n.Cg)([d.XI], b.prototype, "SetClickParameter", null),
        (0, n.Cg)([d.XI], b.prototype, "SetTouchParameter", null),
        (0, n.Cg)([d.XI], b.prototype, "SetParameter", null),
        (0, n.Cg)([d.XI], b.prototype, "GetClickParameter", null),
        (0, n.Cg)([d.XI], b.prototype, "GetTouchParameter", null),
        (0, n.Cg)([d.XI], b.prototype, "GetParameter", null),
        (0, n.Cg)([s.o], b.prototype, "GetTrackpadInvertState", null),
        (0, n.Cg)([d.XI], b.prototype, "SetTrackpadInvertState", null);
      class k {
        constructor(t, e, i) {
          (this.m_sSaveType = t),
            (this.m_OutstandingSaveBindingResolve = e),
            (this.m_OutstandingSaveBindingReject = i);
        }
        resolve(t) {
          this.m_OutstandingSaveBindingResolve(t);
        }
        reject(t) {
          this.m_OutstandingSaveBindingReject(t);
        }
        get SaveType() {
          return this.m_sSaveType;
        }
      }
      (0, n.Cg)([s.o], k.prototype, "resolve", null),
        (0, n.Cg)([s.o], k.prototype, "reject", null),
        (function (t) {
          (t[(t.eWebSocketState_Unknown = 0)] = "eWebSocketState_Unknown"),
            (t[(t.eWebSocketState_Disconnected = 1)] =
              "eWebSocketState_Disconnected"),
            (t[(t.eWebSocketState_Connecting = 2)] =
              "eWebSocketState_Connecting"),
            (t[(t.eWebSocketState_Connected = 3)] =
              "eWebSocketState_Connected");
        })(o || (o = {}));
      class w {
        constructor() {
          (this.m_wsWebSocketToServer = void 0),
            (this.m_eWebSocketState = o.eWebSocketState_Unknown),
            (this.m_timerWebSocket = void 0),
            (this.m_dateStartTime = new Date()),
            (this.m_sLoadedBindingURI = void 0),
            (this.m_LoadedBinding = void 0),
            (this.m_ModifiedBindingSet = d.sH.map()),
            (this.m_ModifiedOptions = d.sH.map()),
            (this.m_ModifiedAliases = d.sH.map()),
            (this.m_sName = void 0),
            (this.m_sDescription = void 0),
            (this.m_sInteractionProfile = void 0),
            (this.m_SelectedApp = void 0),
            (this.m_SelectedAppActions = void 0),
            (this.m_sSelectedActionSet = void 0),
            (this.m_sSelectedControllerType = void 0),
            (this.m_TrackerBindingSetup = void 0),
            (this.m_bControllerTypeSelectedByUser = !1),
            (this.m_OutstandingSaveBindingCalls = []),
            (this.m_vecBindingSetWatchers = Array()),
            (this.m_mapUnoundActions = new Map()),
            (this.m_bIsMissingRequiredActions = !1),
            (this.m_rKnownFailedBindingUris = []),
            (this.m_ControllerWatchers = new Map()),
            (this.m_ModifiedSimulatedActions = d.sH.map()),
            (this.m_nNextSimulatedActionId = 1),
            (this.m_nBindingSubscriptionChangedCanary = 1),
            (0, d.Gn)(this);
        }
        OpenWebSocketToHost() {
          return new Promise((t, e) => {
            this.m_eWebSocketState != o.eWebSocketState_Connecting &&
              this.m_eWebSocketState != o.eWebSocketState_Connected &&
              (this.m_wsWebSocketToServer && delete this.m_wsWebSocketToServer,
              (this.m_wsWebSocketToServer = new WebSocket(
                "ws://" + window.location.host,
              )),
              this.m_wsWebSocketToServer.addEventListener("open", (e) => {
                this.OnWebSocketOpen(e), t();
              }),
              this.m_wsWebSocketToServer.addEventListener("message", (t) => {
                this.OnWebSocketMessage(t);
              }),
              this.m_wsWebSocketToServer.addEventListener("close", (t) => {
                this.OnWebSocketClose(t);
              }),
              (this.m_eWebSocketState = o.eWebSocketState_Connecting)),
              this.m_timerWebSocket ||
                (this.m_timerWebSocket = window.setTimeout(
                  this.OpenWebSocketToHost,
                  1e3,
                ));
          });
        }
        Init() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            yield this.OpenWebSocketToHost(), yield this.RefreshInputState();
          });
        }
        CountDevicesWithControllerType(t) {
          let e = 0;
          return (
            h.W.ConnectedDevices.forEach((i) => {
              i.controller_type == t && e++;
            }),
            e
          );
        }
        ComputeControllerTypeScore(t) {
          let e = this.CountDevicesWithControllerType(t.controller_type),
            i =
              ((null === p.Ay || void 0 === p.Ay ? void 0 : p.Ay.HasHMD())
                ? null === p.Ay || void 0 === p.Ay
                  ? void 0
                  : p.Ay.VRProperties.GetStringProperty(
                      "/user/head",
                      p.fD.Prop_ExpectedControllerType_String,
                    )
                : void 0) == t.controller_type
                ? 2
                : 1;
          return 1e3 * (999 - t.priority) + 10 * e + i;
        }
        GetBestControllerType() {
          let t,
            e = 0;
          return (
            h.W.ControllerTypes.forEach((i) => {
              let o = this.ComputeControllerTypeScore(i);
              o > e && ((t = i), (e = o));
            }),
            t
          );
        }
        RefreshInputState() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            let t = h.W.KnownControllerTypes.size;
            return h.W.GetInputState().then(() => {
              this.m_SelectedApp &&
                t != h.W.KnownControllerTypes.size &&
                this.ReloadCurrentApp();
              let e = !1;
              const i = this.GetBestControllerType();
              let o = h.W.FindDeviceClassForControllerType(
                this.m_sSelectedControllerType,
              );
              if (
                null != i &&
                this.m_sSelectedControllerType != i.controller_type &&
                !this.m_bControllerTypeSelectedByUser
              ) {
                let t = h.W.FindDeviceClassForControllerType(i.controller_type);
                a.n.IsSafeToResetControllerType(o, t) &&
                  ((this.m_sSelectedControllerType = i.controller_type),
                  (e = !0));
              }
              return e ? this.ReloadControllerConfiguration() : null;
            });
          });
        }
        get SteamVRUnavailable() {
          return this.m_eWebSocketState == o.eWebSocketState_Connecting ||
            this.m_eWebSocketState == o.eWebSocketState_Unknown
            ? Date.now() - this.m_dateStartTime.getTime() > 1e4
            : this.m_eWebSocketState != o.eWebSocketState_Connected;
        }
        get ActionSets() {
          if (
            null == this.m_SelectedAppActions ||
            null == this.m_SelectedAppActions.action_sets
          )
            return [];
          let t = [];
          return (
            this.m_SelectedAppActions.action_sets.forEach((e) => {
              if ("hidden" != e.usage) {
                let i = !0;
                e.required_options &&
                  e.required_options.forEach((t) => {
                    this.GetOptionValue(t) || (i = !1);
                  });
                let o = !1;
                e.forbidden_options &&
                  e.forbidden_options.forEach((t) => {
                    this.GetOptionValue(t) && (o = !0);
                  }),
                  i && !o && t.push(e);
              }
            }),
            t
          );
        }
        get ManifestOptions() {
          return null == this.m_SelectedAppActions ||
            null == this.m_SelectedAppActions.action_sets ||
            null == this.m_SelectedAppActions.options
            ? []
            : this.m_SelectedAppActions.options;
        }
        get SecondaryControllerOptions() {
          return [
            {
              name: "returnBindingsWithLeftHand",
              localized_name: (0, c.we)(
                "#SecondaryController_ReturnWithLeftHand",
              ),
              type: "bool",
              default: !1,
            },
            {
              name: "returnBindingsWithRightHand",
              localized_name: (0, c.we)(
                "#SecondaryController_ReturnWithRightHand",
              ),
              type: "bool",
              default: !1,
            },
            {
              name: "returnBindingsWithHead",
              localized_name: (0, c.we)("#SecondaryController_ReturnWithHead"),
              type: "bool",
              default: !1,
            },
          ];
        }
        GetOptionDefault(t) {
          let e = !1;
          return (
            this.ManifestOptions.forEach((i) => {
              i.name == t && (e = i.default);
            }),
            e
          );
        }
        GetOptionValue(t) {
          return this.m_ModifiedOptions.has(t)
            ? this.m_ModifiedOptions.get(t)
            : void 0;
        }
        HasOptionValue(t) {
          return this.m_ModifiedOptions.has(t);
        }
        SetOptionValue(t, e) {
          this.m_ModifiedOptions.set(t, e), this.NotifyWatchersOfChange();
        }
        GetAliasInfo(t) {
          return this.m_ModifiedAliases.has(t)
            ? this.m_ModifiedAliases.get(t)
            : null;
        }
        SetAliasName(t, e) {
          if (this.m_ModifiedAliases.has(t)) {
            let i = this.m_ModifiedAliases.get(t);
            (i.alias_name = e),
              this.m_ModifiedAliases.set(t, i),
              this.NotifyWatchersOfChange();
          } else {
            let i = { alias_name: e, hidden: !1 };
            this.m_ModifiedAliases.set(t, i), this.NotifyWatchersOfChange();
          }
        }
        SetAliasHidden(t, e) {
          if (this.m_ModifiedAliases.has(t)) {
            let i = this.m_ModifiedAliases.get(t);
            (i.hidden = e),
              this.m_ModifiedAliases.set(t, i),
              this.NotifyWatchersOfChange();
          } else {
            let i = { alias_name: "", hidden: e };
            this.m_ModifiedAliases.set(t, i), this.NotifyWatchersOfChange();
          }
        }
        ComputeSimulatedActionPathFromId(t) {
          return "/simactions/" + t;
        }
        GetSimulatedActionByPath(t) {
          return this.m_ModifiedSimulatedActions.has(t)
            ? this.m_ModifiedSimulatedActions.get(t)
            : void 0;
        }
        SetSimulatedActionByPath(t, e) {
          this.m_ModifiedSimulatedActions.set(t, e),
            this.NotifyWatchersOfChange();
        }
        AddSimulatedAction(t) {
          let e = {
              name: "",
              type: t,
              id: this.m_nNextSimulatedActionId++,
              output: "",
            },
            i = this.ComputeSimulatedActionPathFromId(e.id);
          this.m_ModifiedSimulatedActions.set(i, e),
            this.NotifyWatchersOfChange();
        }
        DeleteSimulatedActionByPath(t) {
          this.m_ModifiedSimulatedActions.delete(t),
            this.NotifyWatchersOfChange();
        }
        get SimulatedActions() {
          return Array.from(this.m_ModifiedSimulatedActions.values());
        }
        get SelectedApp() {
          return this.m_SelectedApp ? this.m_SelectedApp.key : void 0;
        }
        get SelectedAppActions() {
          return this.m_SelectedAppActions;
        }
        get CurrentAppCanAccessPrivateInputs() {
          return (
            u.s.IsAppAllowedPrivateInputs(this.m_SelectedApp.key) ||
            h.W.ShouldSendSystemButtonToAllApps
          );
        }
        get SelectedControllerTypeInfo() {
          if (h.W.IsValid && null != this.m_sSelectedControllerType)
            return h.W.GetControllerTypeInfo(this.m_sSelectedControllerType);
        }
        DeviceForControllerType(t, e) {
          let i = h.W.GetControllerTypeInfo(t);
          if (!i) return;
          let o = !1,
            n = h.W.ConnectedDevices.find((n) => {
              if (n.controller_type == t) {
                if (((o = !0), !e)) return !0;
                if ("controller_handed" != i.input_bindingui_mode) return !0;
                let t = 1 == e ? "/left" : "/right";
                if (n.root_path && n.root_path.indexOf(t) >= 0) return !0;
              }
              return !1;
            });
          return (
            n ||
            (o
              ? h.W.ConnectedDevices.find((e) => e.controller_type == t)
              : void 0)
          );
        }
        get CurrentBindingSaveType() {
          if (null != this.m_LoadedBinding)
            return "developer" == this.m_LoadedBinding.save_type &&
              M.SelectedBindingIsLegacy
              ? "developer_legacy"
              : this.m_LoadedBinding.save_type;
        }
        get CurrentBindingActionManifestVersion() {
          return this.m_LoadedBinding &&
            this.m_LoadedBinding.binding_config &&
            this.m_LoadedBinding.binding_config.action_manifest_version
            ? this.m_LoadedBinding.binding_config.action_manifest_version
            : 0;
        }
        get SelectedActionSet() {
          return this.m_sSelectedActionSet;
        }
        get SelectedActionSetDetails() {
          if (
            null != this.m_SelectedAppActions &&
            null != this.m_sSelectedActionSet
          )
            return this.m_SelectedAppActions.action_sets.find(
              (t) => t.name == this.m_sSelectedActionSet,
            );
        }
        get SelectedActionSetActions() {
          return this.GetActionSetActions(this.m_sSelectedActionSet);
        }
        GetSelectedAppDefaultBinding(t) {
          if (null != this.m_SelectedAppActions)
            return this.m_SelectedAppActions.default_bindings &&
              this.m_SelectedAppActions.default_bindings.hasOwnProperty(t)
              ? this.m_SelectedAppActions.default_bindings[t]
              : void 0;
        }
        GetActionSetActions(t) {
          if (null == this.m_SelectedAppActions || null == t) return [];
          let e = this.m_SelectedAppActions.action_sets.find(
            (e) => e.name == t,
          );
          return e ? e.actions : [];
        }
        GetActionByName(t) {
          if (
            null == this.m_SelectedApp ||
            !this.m_SelectedAppActions.action_sets
          )
            return;
          let e,
            i = t.toLowerCase();
          return (
            this.m_SelectedAppActions.action_sets.forEach((t) => {
              if (!t.actions) return;
              let o = t.actions.find((t) => t.name.toLowerCase() == i);
              o && (e = o);
            }),
            e
          );
        }
        GetActionSetLocalizedNameByName(t) {
          for (const e of this.m_SelectedAppActions.action_sets)
            if (e.name == t && e.localized_name) return e.localized_name;
          return t;
        }
        get UnboundActions() {
          this.m_bIsMissingRequiredActions = !1;
          for (let t of this.ActionSets) {
            let e = [],
              i = [];
            if (!t.actions) break;
            for (let o of t.actions)
              if (
                "optional" != o.requirement &&
                !this.IsActionBound(t, o.name)
              ) {
                let t = this.GetAliasInfo(o.name);
                if (t) {
                  if (t.hidden) continue;
                  t.alias_name &&
                    ((o = Object.assign({}, o)),
                    (o.localized_name = t.alias_name));
                }
                "mandatory" == o.requirement ? e.push(o) : i.push(o);
              }
            if (
              (e.length > 0 && (this.m_bIsMissingRequiredActions = !0),
              this.m_mapUnoundActions.has(t.name))
            ) {
              let o = this.m_mapUnoundActions.get(t.name);
              (o.vecRequired = e), (o.vecSuggested = i);
            } else
              this.m_mapUnoundActions.set(t.name, {
                vecRequired: e,
                vecSuggested: i,
              });
          }
          let t = this.SelectedControllerTypeInfo;
          return (
            t &&
              "TrackedDeviceClass_HMD" == t.device_class &&
              (this.m_bIsMissingRequiredActions = !1),
            this.IsSecondaryController &&
              (this.m_bIsMissingRequiredActions = !1),
            this.m_mapUnoundActions
          );
        }
        get HasUnboundActions() {
          return this.UnboundActions, this.m_bIsMissingRequiredActions;
        }
        IsActionBound(t, e) {
          e = e.toLowerCase();
          let i = this.GetActionSetSources(t.name);
          if (i)
            for (let t of i) {
              let i = !1;
              if (
                (t.inputs.forEach((t) => {
                  t.output.toLowerCase() == e && (i = !0);
                }),
                i)
              )
                return !0;
            }
          let o = this.GetActionSetChords(t.name);
          if (o)
            for (let t of o)
              if (t.output && t.output.toLowerCase() == e) return !0;
          let n = this.GetActionSetPoses(t.name);
          if (n)
            for (let t of n)
              if (t.output && t.output.toLowerCase() == e) return !0;
          let s = this.GetActionSetHaptics(t.name);
          if (s)
            for (let t of s)
              if (t.output && t.output.toLowerCase() == e) return !0;
          let r = this.GetActionSetSkeleton(t.name);
          if (r)
            for (let t of r)
              if (t.output && t.output.toLowerCase() == e) return !0;
          return !1;
        }
        GetActionSetPoses(t) {
          return this.m_ModifiedBindingSet.has(t)
            ? this.m_ModifiedBindingSet.get(t).poses
            : [];
        }
        get SelectedActionSetPoses() {
          return this.GetActionSetPoses(this.m_sSelectedActionSet);
        }
        GetActionSetHaptics(t) {
          return this.m_ModifiedBindingSet.has(t)
            ? this.m_ModifiedBindingSet.get(t).haptics
            : [];
        }
        get SelectedActionSetHaptics() {
          return this.GetActionSetHaptics(this.m_sSelectedActionSet);
        }
        GetActionSetSkeleton(t) {
          return this.m_ModifiedBindingSet.has(t)
            ? this.m_ModifiedBindingSet.get(t).skeleton
            : [];
        }
        get SelectedActionSetSkeletons() {
          return this.GetActionSetSkeleton(this.m_sSelectedActionSet);
        }
        GetActionSetChords(t) {
          return this.m_ModifiedBindingSet.has(t)
            ? this.m_ModifiedBindingSet.get(t).chords
            : [];
        }
        get SelectedActionSetChords() {
          return this.GetActionSetChords(this.m_sSelectedActionSet);
        }
        get SelectedActionSetChordCount() {
          let t = this.SelectedActionSetChords;
          return t ? t.length : 0;
        }
        GetActionSetSources(t) {
          if (null == this.m_ModifiedBindingSet || null == t) return;
          let e = this.m_ModifiedBindingSet;
          return e.has(t) ? e.get(t).sources : void 0;
        }
        get SelectedActionSetSources() {
          return this.GetActionSetSources(this.m_sSelectedActionSet);
        }
        get BSelectedActionSetHasPoses() {
          return (
            null != this.m_LoadedBinding &&
            null != this.m_sSelectedActionSet &&
            null != this.SelectedActionSetActions &&
            this.SelectedActionSetActions.filter((t) => "pose" == t.type)
              .length > 0
          );
        }
        get BSelectedActionSetHasBoundPoses() {
          if (
            !this.BSelectedActionSetHasPoses ||
            !this.SelectedActionSetPoses ||
            null == this.SelectedActionSetActions
          )
            return !1;
          for (let t of this.SelectedActionSetPoses)
            if (t.output && "none" != t.output) return !0;
          return !1;
        }
        get BSelectedActionSetHasHaptics() {
          return (
            null != this.m_LoadedBinding &&
            null != this.m_sSelectedActionSet &&
            null != this.SelectedActionSetActions &&
            this.SelectedActionSetActions.filter((t) => "vibration" == t.type)
              .length > 0
          );
        }
        get BSelectedActionSetHasBoundHaptics() {
          if (
            !this.BSelectedActionSetHasHaptics ||
            !this.SelectedActionSetHaptics ||
            null == this.SelectedActionSetActions
          )
            return !1;
          for (let t of this.SelectedActionSetHaptics)
            if (t.output && "none" != t.output) return !0;
          return !1;
        }
        get BSelectedActionSetHasSkeletons() {
          if (
            null == this.m_LoadedBinding ||
            null == this.m_sSelectedActionSet ||
            null == this.SelectedActionSetActions
          )
            return !1;
          if (
            0 ==
            this.SelectedActionSetActions.filter((t) => "skeleton" == t.type)
              .length
          )
            return !1;
          return (
            null != this.SelectedControllerTypeInfo &&
            !!this.GetFirstInputSourceOfType("skeleton")
          );
        }
        get BSelectedActionSetHasBoundSkeletons() {
          if (
            !this.BSelectedActionSetHasSkeletons ||
            !this.SelectedActionSetSkeletons ||
            null == this.SelectedActionSetActions
          )
            return !1;
          for (let t of this.SelectedActionSetSkeletons)
            if (t.output && "none" != t.output) return !0;
          return !1;
        }
        ClearSelectedApp() {
          this.m_SelectedApp = void 0;
        }
        SetSelectedApp(t, e) {
          if (
            (console.log(`Setting selected app to app key: ${t}.`),
            null == this.m_SelectedApp || t != this.m_SelectedApp.key)
          ) {
            (this.m_rKnownFailedBindingUris = []),
              this.m_ControllerWatchers.clear();
            let i = u.s.GetApp(t);
            i &&
              ((this.m_SelectedApp = i),
              console.log(`Successfully set selected app to app key: ${t}.`),
              e || this.ReloadCurrentApp());
          }
        }
        ReloadCurrentApp() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            (this.m_sLoadedBindingURI = void 0),
              (this.m_sSelectedActionSet = void 0),
              yield this.LoadActionManifest();
            let t = this.ActionSets;
            t.length > 0 &&
              (null == this.m_sSelectedActionSet ||
                !this.m_SelectedAppActions.action_sets.hasOwnProperty(
                  this.m_sSelectedActionSet,
                )) &&
              (this.m_sSelectedActionSet = t[0].name),
              yield this.ReloadControllerConfiguration();
          });
        }
        SetSelectedController(t, e) {
          if (t != this.m_sSelectedControllerType) {
            let i = h.W.GetControllerTypeInfo(t);
            i &&
              (this.m_ControllerWatchers.clear(),
              (this.m_sSelectedControllerType = i.controller_type),
              (this.m_bControllerTypeSelectedByUser = !0),
              (this.m_sLoadedBindingURI = void 0),
              e || this.ReloadControllerConfiguration());
          }
        }
        SetSelectedActionSet(t) {
          t != this.m_sSelectedActionSet && (this.m_sSelectedActionSet = t);
        }
        LocalizeStringForSelectedControllerType(t) {
          let e = this.SelectedControllerTypeInfo;
          return e && e.resource_root
            ? h.W.LocalizeDriverString(e.resource_root, t)
            : t;
        }
        LocalizePathNameForSelectedControllerType(t) {
          let e;
          return (
            [
              "/user/hand/secondary",
              "/user/hand/primary",
              "/user/hand/left",
              "/user/hand/right",
              "/user/head",
            ].forEach((i) => {
              0 != t.indexOf(i) || (e = i);
            }),
            e
              ? (0, c.we)("#" + e) +
                " " +
                this.LocalizeStringForSelectedControllerType(t.replace(e, ""))
              : t
          );
        }
        get SelectedControllerTypeLocalizedName() {
          let t = this.SelectedControllerTypeInfo;
          return t
            ? t.resource_root
              ? h.W.LocalizeDriverString(t.resource_root, t.controller_type)
              : t.controller_type
            : "";
        }
        RegisterBindingWatcher(t) {
          null == this.m_vecBindingSetWatchers.find((e) => e == t) &&
            this.m_vecBindingSetWatchers.push(t);
        }
        UnregisterBindingWatcher(t) {
          let e = this.m_vecBindingSetWatchers.indexOf(t);
          e >= 0 && this.m_vecBindingSetWatchers.splice(e, 1);
        }
        GetActionBinding(t, e) {
          if (null == this.m_ModifiedBindingSet) return;
          let i = this.m_ModifiedBindingSet;
          if (i.has(e)) {
            let o = i.get(e).sources;
            if (o) {
              let e = o.filter((e) => e.path == t);
              if (e) return e;
            }
          }
        }
        GetInputModesForSourceType(t, e) {
          let i = [];
          switch (t) {
            case "button":
              i = ["button", "-", "toggle_button", "scalar_constant"];
              break;
            case "trackpad":
              i = [
                "trackpad",
                "dpad",
                "-",
                "scroll",
                "radial",
                "button",
                "toggle_button",
              ];
              break;
            case "trigger":
              i = [
                "trigger",
                "button",
                "-",
                "toggle_button",
                "scalar_constant",
              ];
              break;
            case "joystick":
              i = [
                "joystick",
                "dpad",
                "-",
                "scroll",
                "radial",
                "button",
                "toggle_button",
              ];
              break;
            case "pinch":
              i = ["grab"];
              break;
            default:
              i = [];
          }
          return (
            e && (i.push("force_sensor"), "trigger" == t && i.push("grab")), i
          );
        }
        GetBooleanInputOptionsForMode(t) {
          switch (t) {
            case "toggle_button":
            case "trackpad":
            case "trigger":
              return ["click", "touch"];
            case "button":
              return ["single", "double", "held", "long", "click", "touch"];
            case "dpad_click":
            case "dpad_touch":
            case "dpad":
              return ["west", "east", "north", "south", "center"];
            case "trackpad_scroll":
            case "force_sensor":
            default:
              return [];
            case "grab":
              return ["grab"];
          }
        }
        GetActionBindingsOfType(t, e) {
          if (
            null == this.m_SelectedApp ||
            null == this.m_sSelectedActionSet ||
            null == this.m_SelectedAppActions.action_sets
          )
            return [];
          let i = this.SelectedActionSetDetails;
          if (!i) return [];
          if (null == i.actions) return [];
          let o = [];
          return (
            i.actions.forEach((i) => {
              let n = this.m_ModifiedAliases.get(i.name);
              if (i.type == t && (!n || !n.hidden || e))
                if (n && n.alias_name) {
                  let t = Object.assign({}, i);
                  (t.localized_name = n.alias_name), o.push(t);
                } else o.push(i);
            }),
            e ||
              this.m_ModifiedSimulatedActions.forEach((e) => {
                if (this.GetActionTypeFromSimulatedActionType(e.type) == t) {
                  this.ComputeSimulatedActionPathFromId(e.id),
                    e.name ? e.name : ((0, c.we)("UnnamedSimAction"), e.id);
                  o.push(this.CreateActionDefinitionForSimulatedAction(e));
                }
              }),
            o
          );
        }
        GetActionTypeFromSimulatedActionType(t) {
          switch (t) {
            case "fake_trigger":
            case "fake_trackpad_click":
              return "boolean";
            default:
              return "unknown";
          }
        }
        CreateActionDefinitionForSimulatedAction(t) {
          return {
            name: this.ComputeSimulatedActionPathFromId(t.id),
            localized_name: t.name
              ? t.name
              : (0, c.we)("UnnamedSimAction") + t.id,
            type: this.GetActionTypeFromSimulatedActionType(t.type),
          };
        }
        get GetBooleanActionBindings() {
          return this.GetActionBindingsOfType("boolean");
        }
        get GetVector1ActionBindings() {
          return this.GetActionBindingsOfType("vector1");
        }
        get GetLiteralVector1ActionBindings() {
          return this.GetActionBindingsOfType("vector1", !0);
        }
        get GetVector2ActionBindings() {
          return this.GetActionBindingsOfType("vector2");
        }
        get GetVector3ActionBindings() {
          return this.GetActionBindingsOfType("vector3");
        }
        get GetPoseActionBindings() {
          return this.GetActionBindingsOfType("pose");
        }
        get GetHapticsActionBindings() {
          return this.GetActionBindingsOfType("vibration");
        }
        get GetSkeletonActionBindings() {
          return this.GetActionBindingsOfType("skeleton");
        }
        get ConfigName() {
          return this.m_sName;
        }
        get ConfigDescription() {
          return this.m_sDescription;
        }
        GetPoseAction(t) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) return;
          let e = this.m_ModifiedBindingSet.get(
            this.m_sSelectedActionSet,
          ).poses;
          if (null == e) return;
          let i = e.filter((e) => e.output.toLowerCase() == t.toLowerCase());
          return i.length ? i : void 0;
        }
        GetPoseActionByPath(t) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) return;
          let e = this.m_ModifiedBindingSet.get(
            this.m_sSelectedActionSet,
          ).poses;
          if (null == e) return;
          let i = e.filter((e) => e.path.toLowerCase() == t.toLowerCase());
          return i.length ? i : void 0;
        }
        GetHapticsAction(t) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) return;
          let e = this.m_ModifiedBindingSet.get(
            this.m_sSelectedActionSet,
          ).haptics;
          if (null == e) return;
          let i = e.filter((e) => e.output.toLowerCase() == t.toLowerCase());
          return i.length ? i : void 0;
        }
        GetHapticsActionByPath(t) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) return;
          let e = this.m_ModifiedBindingSet.get(
            this.m_sSelectedActionSet,
          ).haptics;
          if (null == e) return;
          let i = e.filter((e) => e.path.toLowerCase() == t.toLowerCase());
          return i.length ? i : void 0;
        }
        GetSkeletonAction(t) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) return;
          let e = this.m_ModifiedBindingSet.get(
            this.m_sSelectedActionSet,
          ).skeleton;
          if (null == e) return;
          let i = e.filter((e) => e.output.toLowerCase() == t.toLowerCase());
          return i.length ? i : void 0;
        }
        GetSkeletonActionByPath(t) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) return;
          let e = this.m_ModifiedBindingSet.get(
            this.m_sSelectedActionSet,
          ).skeleton;
          if (null == e) return;
          let i = e.filter((e) => e.path.toLowerCase() == t.toLowerCase());
          return i.length ? i : void 0;
        }
        NotifyWatchersOfChange() {
          console.log("Binding file changed"),
            this.m_vecBindingSetWatchers.forEach((t) => {
              t();
            }),
            this.AutosaveBinding();
        }
        SetActionForInputModeType(t, e, i, o, n) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetActionForInputModeType: Invalid action set specified",
            );
          class s {
            constructor(t, e) {
              (this.mode = t), (this.sourceIdx = e);
            }
          }
          let r = [];
          if (
            (this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.forEach((e, i) => {
                e.path == t && r.push(new s(e, i));
              }),
            r.length <= e)
          )
            return void console.warn(
              "Invalid mode index (",
              e,
              ") for path ",
              t,
            );
          let l = r[e].sourceIdx;
          if (l >= 0) {
            let t = this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
              .sources[l];
            if (t.inputs && t.inputs.has(i) && t.inputs.get(i).output == o)
              return void console.log(
                "Trying to set new action to old action for type",
                i,
                " action is ",
                o,
              );
            if (n.length > 0 && !n.find((e) => e == t.mode))
              return void console.log(
                "Trying to set invalid input type of ",
                i,
                " for current mode ",
                t.mode,
              );
            t.inputs || (t.inputs = d.sH.map()),
              "none" == o
                ? t.inputs.has(i) && t.inputs.delete(i)
                : t.inputs.has(i)
                  ? (t.inputs.get(i).output = o)
                  : t.inputs.set(i, { output: o }),
              this.NotifyWatchersOfChange();
          }
        }
        SetParameterForInputModeType(t, e, i, o, n) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetParameterForInputModeType: Invalid action set specified",
            );
          let s = [];
          if (
            (this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.forEach((e, i) => {
                e.path == t && s.push(i);
              }),
            s.length <= e)
          )
            return void console.warn(
              "Invalid mode index (",
              e,
              ") for path ",
              t,
            );
          let r = s[e];
          if (r >= 0) {
            let t = this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
              .sources[r];
            if (!t.inputs)
              return void console.log(
                "SetParameterForInputModeType: Trying to set parameter for missing input type of ",
                i,
                " for current mode ",
                t.mode,
              );
            t.parameters || (t.parameters = d.sH.map()),
              t.parameters.get(o) != n &&
                (null == n ? t.parameters.delete(o) : t.parameters.set(o, n),
                this.NotifyWatchersOfChange());
          }
        }
        GetParameterForInputModeType(t, e, i, o) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return (
              console.error(
                "SetParameterForInputModeType: Invalid action set specified",
              ),
              null
            );
          let n = [];
          if (
            (this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.forEach((e, i) => {
                e.path == t && n.push(i);
              }),
            n.length <= e)
          )
            return (
              console.warn("Invalid mode index (", e, ") for path ", t), null
            );
          let s = n[e];
          if (s >= 0) {
            let t = this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
              .sources[s];
            return t.inputs
              ? t.parameters && t.parameters.has(o)
                ? t.parameters.get(o)
                : null
              : (console.log(
                  "GetParameterForInputModeType: Trying to get parameter for missing input type of ",
                  i,
                  " for current mode ",
                  t.mode,
                ),
                null);
          }
          return null;
        }
        AddActionSetIfRequired() {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) {
            let t = new y();
            (t.sources = []),
              this.m_ModifiedBindingSet.set(this.m_sSelectedActionSet, t);
          }
        }
        AddInputModeForSource(t, e) {
          this.AddActionSetIfRequired();
          let i = new g();
          return (
            (i.mode = e),
            (i.path = t),
            (i.inputs = d.sH.map()),
            this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.push(i),
            this.NotifyWatchersOfChange(),
            this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.filter((e) => e.path.toLowerCase() == t.toLowerCase())
              .length - 1
          );
        }
        DeleteInputModeForSource(t, e) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "AddInputModeForType: Invalid action set specified",
            );
          let i = [];
          if (
            (this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.forEach((e, o) => {
                e.path.toLowerCase() == t.toLowerCase() && i.push(o);
              }),
            i.length <= e)
          )
            return void console.warn(
              "Invalid mode index (",
              e,
              ") for path ",
              t,
            );
          let o = i[e];
          -1 != o
            ? (this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .sources.splice(o, 1),
              this.NotifyWatchersOfChange())
            : console.error(
                "DeleteInputModeForSource: Mode not found for source",
              );
        }
        SetInputModeForInputSource(t, e, i) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetActionForInputModeType: Invalid action set specified",
            );
          let o = [];
          if (
            (this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .sources.forEach((e, i) => {
                e.path.toLowerCase() == t.toLowerCase() && o.push(i);
              }),
            o.length <= e)
          )
            return void console.warn(
              "Invalid mode index (",
              e,
              ") for path ",
              t,
            );
          let n = o[e];
          if (-1 != n) {
            let e = this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
              .sources[n];
            if (e.path == t) {
              if (e.mode == i)
                return void console.log(
                  "Trying to set new input mode to old mode!",
                );
              let o = JSON.parse(JSON.stringify(e)),
                s = new g();
              switch (
                ((s.mode = i), (s.path = t), (s.inputs = d.sH.map()), i)
              ) {
                case "button":
                case "toggle_button":
                  switch (o.mode) {
                    case "complex_button":
                      o.inputs.single &&
                        (s.inputs.set("single", o.inputs.single),
                        s.inputs.set("click", o.inputs.single)),
                        o.inputs.long && s.inputs.set("long", o.inputs.long),
                        o.inputs.press && s.inputs.set("press", o.inputs.press),
                        o.inputs.double &&
                          s.inputs.set("double", o.inputs.double),
                        o.inputs.touch && s.inputs.set("touch", o.inputs.touch);
                      break;
                    case "button":
                    case "toggle_button":
                    case "trackpad":
                    case "trigger":
                      o.inputs.click && s.inputs.set("click", o.inputs.click),
                        o.inputs.touch && s.inputs.set("touch", o.inputs.touch);
                  }
                  break;
                case "complex_button":
                  switch (o.mode) {
                    case "toggle_button":
                    case "button":
                    case "trackpad":
                    case "trigger":
                      o.inputs.click && s.inputs.set("single", o.inputs.click);
                  }
                  break;
                case "trackpad":
                  switch (o.mode) {
                    case "complex_button":
                      o.inputs.single && s.inputs.set("click", o.inputs.single);
                      break;
                    case "toggle_button":
                    case "button":
                    case "trigger":
                      o.inputs.click && s.inputs.set("click", o.inputs.click),
                        o.inputs.touch && s.inputs.set("touch", o.inputs.touch);
                  }
                  break;
                case "trigger":
                  switch (o.mode) {
                    case "complex_button":
                      o.inputs.single && s.inputs.set("click", o.inputs.single);
                      break;
                    case "toggle_button":
                    case "trackpad":
                    case "button":
                      o.inputs.click && s.inputs.set("click", o.inputs.click),
                        o.inputs.touch && s.inputs.set("touch", o.inputs.touch);
                  }
              }
              return (
                (this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).sources[n] = s),
                void this.NotifyWatchersOfChange()
              );
            }
          } else
            console.error(
              "SetActionForInputModeType: trying to change a mode for a source that we don't have already",
            );
        }
        ClearModesForInputPath(t) {
          this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)
            ? (this.m_ModifiedBindingSet.get(
                this.m_sSelectedActionSet,
              ).sources = this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .sources.filter((e) => e.path.toLowerCase() != t.toLowerCase()))
            : console.error(
                "ClearModesForInputPath: Invalid action set specified",
              );
        }
        SetInputPathForPose(t, e) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetActionForPose: Invalid action set specified",
            );
          this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses ||
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses =
              []);
          let i = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .poses.findIndex(
              (e) =>
                e.path.toLowerCase() == t.path.toLowerCase() &&
                e.output.toLowerCase() == t.output.toLowerCase(),
            );
          -1 == i &&
            ((i =
              this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .poses.push(new S()) - 1),
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses[
              i
            ].output = t.output)),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses[i]
              .path != e
              ? ((this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).poses[i].path = e),
                this.NotifyWatchersOfChange())
              : console.log(
                  "Trying to set new pose action path to old action path!",
                );
        }
        SetPoseForInputPath(t, e) {
          if (
            (this.AddActionSetIfRequired(),
            !this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
          )
            return void console.error(
              "SetActionForPose: Invalid action set specified",
            );
          this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses ||
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses =
              []);
          let i = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .poses.findIndex((e) => e.path.toLowerCase() == t.toLowerCase());
          -1 == i &&
            ((i =
              this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .poses.push(new S()) - 1),
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses[
              i
            ].path = t)),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses[i]
              .output != e
              ? ((this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).poses[i].output = e),
                this.NotifyWatchersOfChange())
              : console.log(
                  "Trying to set new pose action path to old action path!",
                );
        }
        GetFirstInputSourceOfType(t) {
          let e = this.SelectedControllerTypeInfo;
          if (null != e)
            for (let i of Object.keys(e.input_source)) {
              if (e.input_source[i].type == t) return i;
            }
        }
        AddDefaultPose(t, e) {
          if (
            (this.AddActionSetIfRequired(),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses ||
              (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses =
                []),
            null == this.SelectedControllerTypeInfo)
          )
            return;
          let i = this.GetFirstInputSourceOfType("pose");
          if (!i) return;
          let o = new (class {})();
          (o.output = t), (o.path = i), this.SetInputPathForPose(o, i);
        }
        SetInputPathForHaptics(t, e) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetInputPathForHaptics: Invalid action set specified",
            );
          this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics ||
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics =
              []);
          let i = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .haptics.findIndex(
              (e) =>
                e.path.toLowerCase() == t.path.toLowerCase() &&
                e.output.toLowerCase() == t.output.toLowerCase(),
            );
          -1 == i &&
            ((i =
              this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .haptics.push(new m()) - 1),
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics[
              i
            ].output = t.output)),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics[i]
              .path != e
              ? ((this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).haptics[i].path = e),
                this.NotifyWatchersOfChange())
              : console.log(
                  "Trying to set new haptics action path to old action path!",
                );
        }
        SetHapticsForInputPath(t, e) {
          if (
            (this.AddActionSetIfRequired(),
            !this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
          )
            return void console.error(
              "SetHapticsForInputPath: Invalid action set specified",
            );
          this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics ||
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics =
              []);
          let i = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .haptics.findIndex((e) => e.path.toLowerCase() == t.toLowerCase());
          -1 == i &&
            ((i =
              this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .haptics.push(new S()) - 1),
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics[
              i
            ].path = t)),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics[i]
              .output != e
              ? ((this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).haptics[i].output = e),
                this.NotifyWatchersOfChange())
              : console.log(
                  "Trying to set new haptic action path to old action path!",
                );
        }
        AddDefaultHaptics(t, e) {
          this.AddActionSetIfRequired(),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics ||
              (this.m_ModifiedBindingSet.get(
                this.m_sSelectedActionSet,
              ).haptics = []);
          let i = this.GetFirstInputSourceOfType("haptic");
          if (!i) return;
          let o = e + i;
          let n = new (class {})();
          (n.output = t), (n.path = o), this.SetInputPathForHaptics(n, o);
        }
        SetInputPathForSkeleton(t, e) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetInputPathForSkeleton: Invalid action set specified",
            );
          this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton ||
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton =
              []);
          let i = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .skeleton.findIndex(
              (e) =>
                e.path.toLowerCase() == t.path.toLowerCase() &&
                e.output.toLowerCase() == t.output.toLowerCase(),
            );
          -1 == i &&
            ((i =
              this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .skeleton.push(new _()) - 1),
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton[
              i
            ].output = t.output)),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton[i]
              .path != e
              ? ((this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).skeleton[i].path = e),
                this.NotifyWatchersOfChange())
              : console.log(
                  "Trying to set new skeleton action path to old action path!",
                );
        }
        SetSkeletonForInputPath(t, e) {
          if (
            (this.AddActionSetIfRequired(),
            !this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
          )
            return void console.error(
              "SetSkeletonForInputPath: Invalid action set specified",
            );
          this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton ||
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton =
              []);
          let i = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .skeleton.findIndex((e) => e.path.toLowerCase() == t.toLowerCase());
          -1 == i &&
            ((i =
              this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .skeleton.push(new S()) - 1),
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton[
              i
            ].path = t)),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton[i]
              .output != e
              ? ((this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).skeleton[i].output = e),
                this.NotifyWatchersOfChange())
              : console.log(
                  "Trying to set new skeleton action path to old action path!",
                );
        }
        AddDefaultSkeleton(t, e) {
          this.AddActionSetIfRequired(),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton ||
              (this.m_ModifiedBindingSet.get(
                this.m_sSelectedActionSet,
              ).skeleton = []);
          let i = this.GetFirstInputSourceOfType("skeleton");
          if (!i) return;
          let o = e + i;
          let n = new (class {})();
          (n.output = t), (n.path = o), this.SetInputPathForSkeleton(n, o);
        }
        SetActionForChord(t, e) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetActionForChord: Invalid action set specified",
            );
          let i = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .chords.findIndex((e) => e == t);
          -1 != i
            ? this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[i]
                .output != e
              ? ((this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).chords[i].output = e),
                this.NotifyWatchersOfChange())
              : console.log("Trying to set new chord action to old action!")
            : console.error("SetActionForChord: Invalid chord  specified ", t);
        }
        DeleteChord(t) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "DeleteChordForSource: Invalid action set specified",
            );
          let e = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .chords.findIndex((e) => e == t);
          -1 != e
            ? (this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .chords.splice(e, 1),
              this.NotifyWatchersOfChange())
            : console.error(
                "DeleteChordForSource: Invalid chord  specified ",
                t,
              );
        }
        AddChord() {
          this.AddActionSetIfRequired(),
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords ||
              (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords =
                []);
          this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .chords.push(new f());
          this.NotifyWatchersOfChange();
        }
        DeleteSourceFromChord(t, e) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "DeleteSourceFromChord: Invalid action set specified",
            );
          let i = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .chords.findIndex((e) => e == t);
          if (-1 != i) {
            let t = this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .chords[i].inputs.findIndex((t) => t[0] == e);
            -1 != t &&
              (this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .chords[i].inputs.splice(t, 1),
              this.NotifyWatchersOfChange());
          } else
            console.error(
              "DeleteSourceFromChord: Invalid chord  specified ",
              t,
            );
        }
        SetInputTypeForChord(t, e, i) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetInputsForChord: Invalid action set specified",
            );
          let o = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .chords.findIndex((e) => e == t);
          if (-1 != o) {
            let t = this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .chords[o].inputs.findIndex((t) => t[0] == e);
            if (-1 == t)
              return void console.log(
                "Invalid bounds for new input chord, trying to add type without source",
              );
            if (
              this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[o]
                .inputs[t][1] == i
            )
              return void console.log(
                "Trying to set new chord inputs to old inputs!",
              );
            (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[
              o
            ].inputs[t][1] = i),
              this.NotifyWatchersOfChange();
          } else
            console.error("SetInputsForChord: Invalid chord  specified ", t);
        }
        SetInputSourceForChord(t, e, i) {
          if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            return void console.error(
              "SetInputsForChord: Invalid action set specified",
            );
          let o = this.m_ModifiedBindingSet
            .get(this.m_sSelectedActionSet)
            .chords.findIndex((e) => e == t);
          if (-1 != o) {
            let t = this.GetActionBinding(e, this.SelectedActionSet);
            if (!t)
              return void console.log("Failed to find action binding for path");
            let n = "click";
            if (
              (t.length &&
                (n = this.GetBooleanInputOptionsForMode(t[0].mode)[0]),
              null == i)
            )
              this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[o]
                .inputs ||
                (this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).chords[o].inputs = new Array()),
                this.m_ModifiedBindingSet
                  .get(this.m_sSelectedActionSet)
                  .chords[o].inputs.push([e, n]);
            else {
              let t = this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .chords[o].inputs.findIndex((t) => t[0] == i);
              if (-1 == t)
                return void console.log(
                  "Trying to set replace chord input path when we didn't have that path!",
                );
              if (
                this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[
                  o
                ].inputs[t][0] == e
              )
                return void console.log(
                  "Trying to set new chord inputs to old inputs!",
                );
              (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[
                o
              ].inputs[t][0] = e),
                (this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).chords[o].inputs[t][1] = n);
            }
            this.NotifyWatchersOfChange();
          } else
            console.error("SetInputsForChord: Invalid chord  specified ", t);
        }
        LoadActionManifest() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            return new Promise((t, e) => {
              B(this.m_SelectedApp.key).then((e) => {
                null == e.error
                  ? ((this.m_SelectedAppActions = e),
                    null == this.m_sLoadedBindingURI &&
                      e.current_binding_url.hasOwnProperty(
                        this.m_sSelectedControllerType,
                      ) &&
                      (this.m_sLoadedBindingURI =
                        e.current_binding_url[this.m_sSelectedControllerType]))
                  : ((this.m_SelectedAppActions = void 0),
                    (this.m_sLoadedBindingURI = void 0),
                    a.n.SetBindingListError(
                      (0, c.we)("#ActionManifestError_UnknownError"),
                      !1,
                    )),
                  t();
              });
            });
          });
        }
        get SelectedBindingURL() {
          return null != this.m_sSelectedControllerType &&
            null != this.m_SelectedAppActions &&
            null != this.m_SelectedAppActions.current_binding_url &&
            this.m_SelectedAppActions.current_binding_url.hasOwnProperty(
              this.m_sSelectedControllerType,
            )
            ? this.m_SelectedAppActions.current_binding_url[
                this.m_sSelectedControllerType
              ]
            : void 0;
        }
        get LoadedBindingURL() {
          return this.m_sLoadedBindingURI;
        }
        get SelectedBindingIsLegacy() {
          return (
            !this.m_SelectedAppActions ||
            "legacy" == this.m_SelectedAppActions.category
          );
        }
        get SelectedBindingIsOpenXR() {
          return "openxr" == this.m_SelectedAppActions.category;
        }
        get IsSecondaryController() {
          if (!this.m_sSelectedControllerType) return !1;
          let t = h.W.FindRootPathForControllerType(
            this.m_sSelectedControllerType,
          );
          return (
            "/user/treadmill" == t ||
            "/user/gamepad" == t ||
            "/user/stylus" == t
          );
        }
        ReloadControllerConfiguration() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            if (
              !(
                this.m_SelectedAppActions &&
                this.m_sLoadedBindingURI &&
                this.SelectedApp &&
                this.SelectedControllerTypeInfo
              )
            )
              return;
            let t = yield I(
              this.m_SelectedApp.key,
              this.SelectedControllerTypeInfo.controller_type,
              this.m_sLoadedBindingURI,
            );
            this.OnBindingConfigLoaded(t);
          });
        }
        UpdateTrackerBindings() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            let t = yield this.GetTrackerBindings();
            this.m_TrackerBindingSetup = t;
          });
        }
        get TrackerBindings() {
          return (
            null == this.m_TrackerBindingSetup && this.UpdateTrackerBindings(),
            this.m_TrackerBindingSetup
          );
        }
        GetTrackerBindings() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            return new Promise(function (t, e) {
              l()
                .get("/input/gettrackerbindings.json")
                .then((e) => {
                  t(e.data);
                })
                .catch((t) => {
                  e(t);
                });
            });
          });
        }
        GetTrackerBinding(t) {
          for (let e of this.m_TrackerBindingSetup.trackers)
            if (e.device_path_string == t) return e;
          return null;
        }
        SetTrackerBinding(t, e, i) {
          let o = { device_path: t, role: e, controller_role: i },
            n = JSON.stringify(o);
          console.log("Saving tracker binding " + t),
            l()
              .post("/input/settrackerbinding.action", n)
              .then((t) => {
                console.log("SetTrackerBinding response: ", t.data),
                  this.UpdateTrackerBindings();
              })
              .catch((t) => {});
        }
        PulseHaptics(t) {
          let e = { path_handle: t },
            i = JSON.stringify(e);
          l()
            .post("/input/pulsehaptics.action", i)
            .then((t) => {
              console.log("PulseHaptics response: ", t.data);
            })
            .catch((t) => {});
        }
        get KnownControllerTypes() {
          let t = [];
          return (
            h.W.KnownControllerTypes.forEach((e) => {
              t.push(e);
            }),
            t
          );
        }
        PreserveCurrentBindingForUpgrade() {
          let t = a.n.CurrentBinding;
          return t && "autosave" == t.type
            ? this.SaveCurrentBinding(
                (0, c.we)("#PreservedAutosaveName"),
                "",
                "personal",
              )
            : Promise.resolve(null);
        }
        GetDefaultBindingNameForSaveType(t) {
          let e = M.SelectedControllerTypeInfo,
            i = h.W.LocalizeControllerString(e, e ? e.controller_type : "");
          switch (t) {
            default:
            case "autosave":
              return (0, c.we)(
                "#BindingUI_SaveDefaultName",
                this.m_SelectedApp.name,
                i,
              );
            case "personal":
              return (0, c.we)(
                "#BindingUI_SaveDefaultName_Personal",
                this.m_SelectedApp.name,
                i,
              );
            case "public":
              return (0, c.we)(
                "#BindingUI_SaveDefaultName_Public",
                h.W.CurrentUserPersonaName,
              );
            case "replace_default":
              return M.ConfigName;
          }
        }
        AutosaveBinding() {
          this.m_sName ||
            (this.m_sName = this.GetDefaultBindingNameForSaveType("autosave")),
            this.SaveCurrentBinding(
              this.m_sName,
              this.m_sDescription,
              "autosave",
            ).then((t) => {
              M.SetBindingURL(t.uri);
            });
        }
        SaveCurrentBinding(t, e, i) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            if (this.HasUnboundActions)
              throw new Error("#SaveError_BindingMissingRequiredActions");
            (this.m_sName = t), (this.m_sDescription = e);
            let o = this.m_sInteractionProfile.trim(),
              n = {
                app_key: this.SelectedApp,
                controller_type:
                  this.SelectedControllerTypeInfo.controller_type,
                save_type: i,
              };
            n.binding = {
              name: t,
              description: e,
              action_manifest_version: this.m_SelectedAppActions.version,
              interaction_profile: o,
              category: this.m_SelectedAppActions.category,
              controller_type: this.SelectedControllerTypeInfo.controller_type,
              bindings: this.m_ModifiedBindingSet,
              options: this.m_ModifiedOptions,
              alias_info: this.m_ModifiedAliases,
              simulated_actions: Array.from(
                this.m_ModifiedSimulatedActions.values(),
              ),
              app_key: this.SelectedApp,
            };
            let s = JSON.stringify(n);
            return (
              console.log(
                "Saving binding " + t + " for app '" + this.SelectedApp + "'.",
              ),
              new Promise((t, e) => {
                let o = new k(i, t, e);
                this.m_OutstandingSaveBindingCalls.push(o),
                  l()
                    .post("/input/savebinding.action", s)
                    .then((t) => {
                      t.data.error
                        ? (console.log(
                            "SaveCurrentBinding failed:",
                            t.data.error,
                          ),
                          e(t.data.error))
                        : console.log("SaveCurrentBinding Successful");
                    })
                    .catch((t) => {
                      e(t);
                    });
              })
            );
          });
        }
        PublishBindingToWorkshop(t) {
          return (0, n.sH)(this, void 0, void 0, function* () {
            let e = { app_key: this.SelectedApp, description: t };
            e.binding = {
              bindings: this.m_ModifiedBindingSet,
              controller_type: this.SelectedControllerTypeInfo.controller_type,
            };
            let i = JSON.stringify(e);
            yield new Promise(function (t, e) {
              l()
                .post("/input/submitworkshopbinding.action", i)
                .then((e) => {
                  console.log("PublishBindingToWorkshop response: ", e), t();
                })
                .catch((t) => {
                  e(t);
                });
            });
          });
        }
        OnWebSocketOpen(t) {
          console.log("Websocket connected"),
            (this.m_eWebSocketState = o.eWebSocketState_Connected),
            this.WebSocketSend("input_open"),
            this.m_timerWebSocket && clearTimeout(this.m_timerWebSocket),
            window.addEventListener("beforeunload", () => {
              this.WebSocketSend("input_close");
            });
        }
        OnWebSocketClose(t) {
          console.log("Websocket closed ", t),
            (this.m_eWebSocketState = o.eWebSocketState_Disconnected),
            this.OpenWebSocketToHost();
        }
        WebSocketSend(t) {
          null != this.m_wsWebSocketToServer &&
            1 == this.m_wsWebSocketToServer.readyState &&
            this.m_wsWebSocketToServer.send(t);
        }
        OnWorkshopUploadComplete(t) {
          if (
            (console.log("OnWorkshopUploadComplete: ", t),
            t.app_key != M.SelectedApp)
          )
            return void console.log(
              `Ignoring binding load for an app we aren't viewing. Pending: ${t.app_key}. Current: ${M.SelectedApp}.`,
            );
          if (this.m_OutstandingSaveBindingCalls.length <= 0)
            return void console.log(
              "Got workshop upload result without pending resolve",
            );
          let e = this.m_OutstandingSaveBindingCalls.shift();
          t.success ? (e.resolve(t), this.LoadActionManifest()) : e.reject(t);
        }
        OnPendingFileSaved(t) {
          let e = t.success ? "Success" : t.error;
          console.log(`OnPendingFileSaved: ${e}. ${t}`),
            t.app_key == M.SelectedApp ||
              console.log(
                `Ignoring pending file saved for an app we aren't viewing. Pending: ${t.app_key}. Current: ${M.SelectedApp}.`,
              );
        }
        get SaveNoticeText() {
          if (this.m_OutstandingSaveBindingCalls.length > 0) {
            let t = !1;
            return (
              this.m_OutstandingSaveBindingCalls.forEach((e) => {
                ("personal" != e.SaveType && "public" != e.SaveType) ||
                  (t = !0);
              }),
              t ? "#SaveNotice_Uploading" : "#SaveNotice_Saving"
            );
          }
        }
        OnBindingConfigLoaded(t) {
          if (
            (console.log(
              "OnBindingConfigLoaded: ",
              t,
              " selected action set:",
              this.m_sSelectedActionSet,
            ),
            t.app_key != M.SelectedApp)
          )
            return void console.log(
              `Ignoring binding load for an app we aren't viewing. Pending: ${t.app_key}. Current: ${M.SelectedApp}.`,
            );
          if (t.uri != this.m_sLoadedBindingURI)
            return void console.log(
              `Ignoring binding load for an config url ${t.uri} we aren't viewing ${this.m_sLoadedBindingURI}`,
            );
          this.m_ControllerWatchers.clear(),
            (this.m_LoadedBinding = t),
            (this.m_ModifiedBindingSet = d.sH.map());
          let e = (0, c.we)("#unknown_application"),
            i = u.s.GetApp(M.SelectedApp);
          if (
            (i && (e = i.name),
            (this.m_sName = ""),
            (this.m_sDescription = ""),
            (this.m_sInteractionProfile = " "),
            t.binding_config &&
              (t.binding_config.hasOwnProperty("name") &&
                (this.m_sName = t.binding_config.name),
              t.binding_config.hasOwnProperty("description") &&
                (this.m_sDescription = t.binding_config.description),
              t.binding_config.hasOwnProperty("interaction_profile") &&
                (this.m_sInteractionProfile =
                  t.binding_config.interaction_profile)),
            "" == this.m_sName)
          ) {
            let t = M.SelectedControllerTypeInfo,
              i = h.W.LocalizeControllerString(t, t ? t.controller_type : "");
            this.m_sName = (0, c.we)("#BindingUI_SaveDefaultName", e, i);
          }
          t.binding_config &&
            t.binding_config.bindings &&
            (Object.keys(t.binding_config.bindings).forEach((e) => {
              var i;
              let o = new y();
              (o.chords = t.binding_config.bindings[e].chords),
                (o.poses = t.binding_config.bindings[e].poses),
                (o.haptics = t.binding_config.bindings[e].haptics),
                (o.skeleton = t.binding_config.bindings[e].skeleton),
                (o.sources = []),
                null === (i = t.binding_config.bindings[e].sources) ||
                  void 0 === i ||
                  i.forEach((t) => {
                    let e = new g();
                    (e.mode = t.mode),
                      (e.path = t.path),
                      (e.inputs = d.sH.map()),
                      t.hasOwnProperty("inputs") &&
                        Object.keys(t.inputs).forEach((i) => {
                          e.inputs.set(i, t.inputs[i]);
                        }),
                      null != t.parameters &&
                        Object.keys(t.parameters).length > 0 &&
                        ((e.parameters = d.sH.map()),
                        t.hasOwnProperty("parameters") &&
                          Object.keys(t.parameters).forEach((i) => {
                            e.parameters.set(i, t.parameters[i]);
                          })),
                      o.sources.push(e);
                  }),
                this.m_ModifiedBindingSet.set(e, o);
            }),
            this.m_ModifiedOptions.clear(),
            t.binding_config.options &&
              (Object.keys(t.binding_config.options).forEach((e) => {
                this.m_ModifiedOptions.set(e, t.binding_config.options[e]);
              }),
              this.ManifestOptions.forEach((t) => {
                this.m_ModifiedOptions.has(t.name) ||
                  this.m_ModifiedOptions.set(t.name, t.default);
              })),
            this.m_ModifiedAliases.clear(),
            t.binding_config.alias_info &&
              Object.keys(t.binding_config.alias_info).forEach((e) => {
                this.m_ModifiedAliases.set(e, t.binding_config.alias_info[e]);
              }),
            this.m_ModifiedSimulatedActions.clear(),
            t.binding_config.simulated_actions &&
              t.binding_config.simulated_actions.forEach((t) => {
                let e = this.ComputeSimulatedActionPathFromId(t.id);
                this.m_ModifiedSimulatedActions.set(e, t),
                  t.id >= this.m_nNextSimulatedActionId &&
                    (this.m_nNextSimulatedActionId = t.id + 1);
              })),
            this.m_vecBindingSetWatchers.forEach((t) => {
              t();
            });
        }
        QueryBindingList(t, e) {
          return (
            null != this.m_OutstandingQueryResolve &&
              console.warn(
                "About to start second binding list query when one is already pending",
                this.m_OutstandingQueryResolve,
              ),
            new Promise((i, o) => {
              (this.m_OutstandingQueryResolve = i),
                l()
                  .get(
                    `/input/queryworkshopbindings.json?app_key=${t}&controller_type=${e}`,
                  )
                  .then((t) => {
                    console.log("QueryBindingList: ajax request successful");
                  })
                  .catch((t) => {
                    o(t);
                  });
            })
          );
        }
        DeleteBinding(t) {
          null != this.m_OutstandingDeleteResolve &&
            console.warn(
              "About to start second binding delete when one is already pending",
              this.m_OutstandingDeleteResolve,
            );
          let e = { url: t },
            i = JSON.stringify(e);
          return new Promise((e, o) => {
            (this.m_OutstandingDeleteResolve = e),
              (this.m_sOutstandingDeleteURL = t),
              l()
                .post("/input/deleteconfig.action", i)
                .then((t) => {
                  console.log("Delete ajax request successful");
                })
                .catch((t) => {
                  o(t);
                });
          });
        }
        OnBindingDeleteComplete(t) {
          null != this.m_OutstandingDeleteResolve
            ? t.url == this.m_sOutstandingDeleteURL &&
              ((this.m_sOutstandingDeleteURL = void 0),
              this.m_OutstandingDeleteResolve(t),
              (this.m_OutstandingDeleteResolve = void 0),
              console.log("OnDeleteComplete: ", t))
            : console.warn(
                "Missing outstanding query resolve for binding delete",
              );
        }
        ShouldShowBindingFailureForControllerType(t) {
          if (null == t || "" == t) return !1;
          let e = h.W.GetControllerTypeInfo(t);
          return !!e && !!e.should_show_binding_errors;
        }
        HasBindingUriFailedToLoad(t) {
          return -1 != this.m_rKnownFailedBindingUris.indexOf(t);
        }
        RememberFailedLoadUri(t) {
          this.m_rKnownFailedBindingUris.push(t);
        }
        OnQueryResults(t) {
          console.log("OnQueryResults: ", t),
            null != this.m_OutstandingQueryResolve
              ? (this.m_OutstandingQueryResolve(t),
                (this.m_OutstandingQueryResolve = void 0))
              : console.warn(
                  "Missing outstanding query resolve for binding query",
                );
        }
        SelectConfig(t, e, i) {
          if (
            ((this.m_sLoadedBindingURI = i),
            console.log("Selecting config " + i + " for app " + t),
            this.SelectedBindingURL == i)
          )
            return (
              console.debug("Selecting the config we already have set", i),
              new Promise((t, e) => {
                t();
              })
            );
          let o = { app_key: t, controller_type: e, url: i },
            n = JSON.stringify(o);
          return (
            null != this.m_OutstandingSelectConfigResolve &&
              console.warn(
                "About to start second select config when one is already pending",
                this.m_OutstandingSelectConfigResolve,
              ),
            new Promise((t, e) => {
              (this.m_OutstandingSelectConfigResolve = t),
                l()
                  .post("/input/selectconfig.action", n)
                  .then((t) => {
                    console.log("selectconfig ajax request successful");
                  })
                  .catch((t) => {
                    e(t);
                  });
            })
          );
        }
        OnSelectConfigComplete(t) {
          null != this.m_OutstandingSelectConfigResolve
            ? (this.m_OutstandingSelectConfigResolve(),
              (this.m_OutstandingSelectConfigResolve = void 0),
              console.log("OnSelectConfigComplete: ", t))
            : t.error_to_show
              ? a.n.ShowBindingList(t.error_to_show)
              : console.warn(
                  "Missing outstanding query resolve for select config",
                );
        }
        OnTrackersBindingChanged(t) {
          this.GetTrackerBindings().then((t) => {
            this.m_TrackerBindingSetup = t;
          });
        }
        OnActionManifestReloaded(t) {
          t.app_key == M.SelectedApp && this.ReloadCurrentApp();
        }
        SetBindingURL(t) {
          this.m_sLoadedBindingURI = t;
        }
        OnActionBindingsReloaded(t) {
          this.RefreshInputState();
        }
        GetControllerWatcherForSourceFromControllerType(t, e, i, o) {
          let n = "" + t.controller_type + e + i + o;
          if (!this.m_ControllerWatchers.has(n)) {
            let s = "";
            if ("controller_handed" == t.input_bindingui_mode)
              switch (e) {
                case 1:
                  s = "/user/hand/left";
                  break;
                case 2:
                  s = "/user/hand/right";
              }
            else {
              let e = h.W.ConnectedDevices.find(
                (e) => e.controller_type == t.controller_type,
              );
              e && e.root_path
                ? (s = e.root_path)
                : console.log(
                    "Unable to find device path for controller type ",
                    t,
                  );
            }
            this.m_ControllerWatchers.set(n, new b(s, t, e, i, o));
          }
          return this.m_ControllerWatchers.get(n);
        }
        OnWebSocketMessage(t) {
          let e = JSON.parse(t.data);
          if ("jsonid" in e && "vr_input_get_notifications" == e.jsonid)
            for (let t in e.notifications) {
              let i = e.notifications[t];
              switch (i.type) {
                case "pending_file_saved":
                  this.OnPendingFileSaved(i);
                  break;
                case "workshop_upload_complete":
                  this.OnWorkshopUploadComplete(i);
                  break;
                case "query_results":
                  this.OnQueryResults(i);
                  break;
                case "action_bindings_reloaded":
                  this.OnActionBindingsReloaded(i);
                  break;
                case "delete_binding_complete":
                  this.OnBindingDeleteComplete(i);
                  break;
                case "select_config_complete":
                  this.OnSelectConfigComplete(i);
                  break;
                case "trackers_binding_changed":
                  this.OnTrackersBindingChanged(i);
                  break;
                case "action_manifest_reloaded":
                  this.OnActionManifestReloaded(i);
                  break;
                case "refresh_input_state":
                  this.RefreshInputState();
                  break;
                case "binding_subscription_changed":
                  this.m_nBindingSubscriptionChangedCanary++;
              }
            }
        }
        get BindingConfig() {
          return null == this.m_ModifiedBindingSet
            ? ""
            : JSON.stringify(this.m_ModifiedBindingSet, null, "\t");
        }
        get BindingSubscriptionChangedCanary() {
          return this.m_nBindingSubscriptionChangedCanary;
        }
        GetInteractionProfile() {
          return this.m_sInteractionProfile;
        }
        SetInteractionProfile(t) {
          let e = this.m_sInteractionProfile != t;
          (this.m_sInteractionProfile = t), e && this.NotifyWatchersOfChange();
        }
        GetInteractionProfiles() {
          return this.m_SelectedAppActions.interaction_profiles;
        }
        GetSimulatedControllerProperties() {
          var t;
          const e =
            null !== (t = this.GetOptionValue("simulated_controller_type")) &&
            void 0 !== t
              ? t
              : "";
          return {
            strSimulatedControllerType: e,
            strLocalizedSimulatedControllerType:
              this.LocalizeStringForSelectedControllerType(e),
            bIsSimulatingController: e && "none" != e,
            bIsSimulatingHMD: this.GetOptionValue("simulate_hmd"),
            bIsSimulatingRenderModel: this.GetOptionValue(
              "simulate_rendermodel",
            ),
          };
        }
      }
      (0, n.Cg)([d.sH], w.prototype, "m_eWebSocketState", void 0),
        (0, n.Cg)([d.sH], w.prototype, "m_sLoadedBindingURI", void 0),
        (0, n.Cg)([d.sH], w.prototype, "m_LoadedBinding", void 0),
        (0, n.Cg)([d.sH], w.prototype, "m_ModifiedBindingSet", void 0),
        (0, n.Cg)([d.sH], w.prototype, "m_ModifiedOptions", void 0),
        (0, n.Cg)([d.sH], w.prototype, "m_ModifiedAliases", void 0),
        (0, n.Cg)([d.sH], w.prototype, "m_sName", void 0),
        (0, n.Cg)([d.sH], w.prototype, "m_sDescription", void 0),
        (0, n.Cg)([d.sH], w.prototype, "m_sInteractionProfile", void 0),
        (0, n.Cg)([d.sH], w.prototype, "m_SelectedApp", void 0),
        (0, n.Cg)([d.sH], w.prototype, "m_SelectedAppActions", void 0),
        (0, n.Cg)([d.sH], w.prototype, "m_sSelectedActionSet", void 0),
        (0, n.Cg)([d.sH], w.prototype, "m_sSelectedControllerType", void 0),
        (0, n.Cg)([d.sH], w.prototype, "m_TrackerBindingSetup", void 0),
        (0, n.Cg)([d.sH], w.prototype, "m_OutstandingSaveBindingCalls", void 0),
        (0, n.Cg)([d.sH], w.prototype, "m_ModifiedSimulatedActions", void 0),
        (0, n.Cg)(
          [d.sH],
          w.prototype,
          "m_nBindingSubscriptionChangedCanary",
          void 0,
        ),
        (0, n.Cg)([s.o], w.prototype, "OpenWebSocketToHost", null),
        (0, n.Cg)([d.EW], w.prototype, "SteamVRUnavailable", null),
        (0, n.Cg)([d.EW], w.prototype, "ActionSets", null),
        (0, n.Cg)([d.EW], w.prototype, "ManifestOptions", null),
        (0, n.Cg)([d.EW], w.prototype, "SecondaryControllerOptions", null),
        (0, n.Cg)([d.XI], w.prototype, "SetOptionValue", null),
        (0, n.Cg)([d.XI], w.prototype, "AddSimulatedAction", null),
        (0, n.Cg)([d.XI], w.prototype, "DeleteSimulatedActionByPath", null),
        (0, n.Cg)([d.EW], w.prototype, "SelectedApp", null),
        (0, n.Cg)([d.EW], w.prototype, "SelectedAppActions", null),
        (0, n.Cg)(
          [d.EW],
          w.prototype,
          "CurrentAppCanAccessPrivateInputs",
          null,
        ),
        (0, n.Cg)([d.EW], w.prototype, "SelectedControllerTypeInfo", null),
        (0, n.Cg)([d.EW], w.prototype, "CurrentBindingSaveType", null),
        (0, n.Cg)(
          [d.EW],
          w.prototype,
          "CurrentBindingActionManifestVersion",
          null,
        ),
        (0, n.Cg)([d.EW], w.prototype, "SelectedActionSet", null),
        (0, n.Cg)([d.EW], w.prototype, "SelectedActionSetDetails", null),
        (0, n.Cg)([d.EW], w.prototype, "SelectedActionSetActions", null),
        (0, n.Cg)([s.o], w.prototype, "GetSelectedAppDefaultBinding", null),
        (0, n.Cg)([s.o], w.prototype, "GetActionByName", null),
        (0, n.Cg)([d.EW], w.prototype, "SelectedActionSetPoses", null),
        (0, n.Cg)([d.EW], w.prototype, "SelectedActionSetHaptics", null),
        (0, n.Cg)([d.EW], w.prototype, "SelectedActionSetSkeletons", null),
        (0, n.Cg)([d.EW], w.prototype, "SelectedActionSetChords", null),
        (0, n.Cg)([d.EW], w.prototype, "SelectedActionSetChordCount", null),
        (0, n.Cg)([d.EW], w.prototype, "SelectedActionSetSources", null),
        (0, n.Cg)([d.EW], w.prototype, "BSelectedActionSetHasPoses", null),
        (0, n.Cg)([d.EW], w.prototype, "BSelectedActionSetHasBoundPoses", null),
        (0, n.Cg)([d.EW], w.prototype, "BSelectedActionSetHasHaptics", null),
        (0, n.Cg)(
          [d.EW],
          w.prototype,
          "BSelectedActionSetHasBoundHaptics",
          null,
        ),
        (0, n.Cg)([d.EW], w.prototype, "BSelectedActionSetHasSkeletons", null),
        (0, n.Cg)(
          [d.EW],
          w.prototype,
          "BSelectedActionSetHasBoundSkeletons",
          null,
        ),
        (0, n.Cg)([d.XI], w.prototype, "ClearSelectedApp", null),
        (0, n.Cg)([d.XI], w.prototype, "SetSelectedApp", null),
        (0, n.Cg)([d.XI], w.prototype, "SetSelectedController", null),
        (0, n.Cg)([d.XI], w.prototype, "SetSelectedActionSet", null),
        (0, n.Cg)(
          [s.o],
          w.prototype,
          "LocalizeStringForSelectedControllerType",
          null,
        ),
        (0, n.Cg)(
          [s.o],
          w.prototype,
          "LocalizePathNameForSelectedControllerType",
          null,
        ),
        (0, n.Cg)(
          [d.EW],
          w.prototype,
          "SelectedControllerTypeLocalizedName",
          null,
        ),
        (0, n.Cg)([d.XI], w.prototype, "RegisterBindingWatcher", null),
        (0, n.Cg)([d.XI], w.prototype, "UnregisterBindingWatcher", null),
        (0, n.Cg)([d.XI], w.prototype, "GetActionBinding", null),
        (0, n.Cg)([s.o], w.prototype, "GetInputModesForSourceType", null),
        (0, n.Cg)([s.o], w.prototype, "GetBooleanInputOptionsForMode", null),
        (0, n.Cg)([s.o], w.prototype, "GetActionBindingsOfType", null),
        (0, n.Cg)([d.EW], w.prototype, "GetBooleanActionBindings", null),
        (0, n.Cg)([d.EW], w.prototype, "GetVector1ActionBindings", null),
        (0, n.Cg)([d.EW], w.prototype, "GetLiteralVector1ActionBindings", null),
        (0, n.Cg)([d.EW], w.prototype, "GetVector2ActionBindings", null),
        (0, n.Cg)([d.EW], w.prototype, "GetVector3ActionBindings", null),
        (0, n.Cg)([d.EW], w.prototype, "GetPoseActionBindings", null),
        (0, n.Cg)([d.EW], w.prototype, "GetHapticsActionBindings", null),
        (0, n.Cg)([d.EW], w.prototype, "GetSkeletonActionBindings", null),
        (0, n.Cg)([d.EW], w.prototype, "ConfigName", null),
        (0, n.Cg)([d.EW], w.prototype, "ConfigDescription", null),
        (0, n.Cg)([s.o], w.prototype, "GetPoseAction", null),
        (0, n.Cg)([s.o], w.prototype, "GetPoseActionByPath", null),
        (0, n.Cg)([s.o], w.prototype, "GetHapticsAction", null),
        (0, n.Cg)([s.o], w.prototype, "GetHapticsActionByPath", null),
        (0, n.Cg)([s.o], w.prototype, "GetSkeletonAction", null),
        (0, n.Cg)([s.o], w.prototype, "GetSkeletonActionByPath", null),
        (0, n.Cg)([s.o], w.prototype, "NotifyWatchersOfChange", null),
        (0, n.Cg)([d.XI], w.prototype, "SetActionForInputModeType", null),
        (0, n.Cg)([d.XI], w.prototype, "SetParameterForInputModeType", null),
        (0, n.Cg)([s.o], w.prototype, "AddActionSetIfRequired", null),
        (0, n.Cg)([d.XI], w.prototype, "AddInputModeForSource", null),
        (0, n.Cg)([d.XI], w.prototype, "DeleteInputModeForSource", null),
        (0, n.Cg)([d.XI], w.prototype, "SetInputModeForInputSource", null),
        (0, n.Cg)([d.XI], w.prototype, "ClearModesForInputPath", null),
        (0, n.Cg)([d.XI], w.prototype, "SetInputPathForPose", null),
        (0, n.Cg)([d.XI], w.prototype, "SetPoseForInputPath", null),
        (0, n.Cg)([d.XI], w.prototype, "AddDefaultPose", null),
        (0, n.Cg)([d.XI], w.prototype, "SetInputPathForHaptics", null),
        (0, n.Cg)([d.XI], w.prototype, "SetHapticsForInputPath", null),
        (0, n.Cg)([d.XI], w.prototype, "AddDefaultHaptics", null),
        (0, n.Cg)([d.XI], w.prototype, "SetInputPathForSkeleton", null),
        (0, n.Cg)([d.XI], w.prototype, "SetSkeletonForInputPath", null),
        (0, n.Cg)([d.XI], w.prototype, "AddDefaultSkeleton", null),
        (0, n.Cg)([d.XI], w.prototype, "SetActionForChord", null),
        (0, n.Cg)([d.XI], w.prototype, "DeleteChord", null),
        (0, n.Cg)([d.XI], w.prototype, "AddChord", null),
        (0, n.Cg)([d.XI], w.prototype, "DeleteSourceFromChord", null),
        (0, n.Cg)([d.XI], w.prototype, "SetInputTypeForChord", null),
        (0, n.Cg)([d.XI], w.prototype, "SetInputSourceForChord", null),
        (0, n.Cg)([d.XI], w.prototype, "LoadActionManifest", null),
        (0, n.Cg)([d.EW], w.prototype, "SelectedBindingURL", null),
        (0, n.Cg)([d.EW], w.prototype, "LoadedBindingURL", null),
        (0, n.Cg)([d.EW], w.prototype, "SelectedBindingIsLegacy", null),
        (0, n.Cg)([d.EW], w.prototype, "SelectedBindingIsOpenXR", null),
        (0, n.Cg)([d.EW], w.prototype, "IsSecondaryController", null),
        (0, n.Cg)([d.EW], w.prototype, "TrackerBindings", null),
        (0, n.Cg)([d.XI], w.prototype, "GetTrackerBindings", null),
        (0, n.Cg)([s.o], w.prototype, "SetTrackerBinding", null),
        (0, n.Cg)([s.o], w.prototype, "PulseHaptics", null),
        (0, n.Cg)([d.EW], w.prototype, "KnownControllerTypes", null),
        (0, n.Cg)([s.o], w.prototype, "AutosaveBinding", null),
        (0, n.Cg)([s.o], w.prototype, "OnWebSocketOpen", null),
        (0, n.Cg)([s.o], w.prototype, "OnWebSocketClose", null),
        (0, n.Cg)([s.o], w.prototype, "WebSocketSend", null),
        (0, n.Cg)([s.o], w.prototype, "OnWorkshopUploadComplete", null),
        (0, n.Cg)([s.o], w.prototype, "OnPendingFileSaved", null),
        (0, n.Cg)([d.EW], w.prototype, "SaveNoticeText", null),
        (0, n.Cg)([s.o], w.prototype, "QueryBindingList", null),
        (0, n.Cg)([s.o], w.prototype, "DeleteBinding", null),
        (0, n.Cg)([s.o], w.prototype, "OnBindingDeleteComplete", null),
        (0, n.Cg)(
          [s.o],
          w.prototype,
          "ShouldShowBindingFailureForControllerType",
          null,
        ),
        (0, n.Cg)([s.o], w.prototype, "OnQueryResults", null),
        (0, n.Cg)([s.o], w.prototype, "SelectConfig", null),
        (0, n.Cg)([s.o], w.prototype, "OnSelectConfigComplete", null),
        (0, n.Cg)([s.o], w.prototype, "OnTrackersBindingChanged", null),
        (0, n.Cg)([s.o], w.prototype, "OnActionManifestReloaded", null),
        (0, n.Cg)([s.o], w.prototype, "SetBindingURL", null),
        (0, n.Cg)([s.o], w.prototype, "OnActionBindingsReloaded", null),
        (0, n.Cg)(
          [s.o],
          w.prototype,
          "GetControllerWatcherForSourceFromControllerType",
          null,
        ),
        (0, n.Cg)([s.o], w.prototype, "OnWebSocketMessage", null),
        (0, n.Cg)([d.EW], w.prototype, "BindingConfig", null),
        (0, n.Cg)(
          [d.EW],
          w.prototype,
          "BindingSubscriptionChangedCanary",
          null,
        );
      const M = new w();
      window.controllerBindingStore = M;
    },
    6795: (t, e, i) => {
      i.d(e, { n: () => g });
      var o,
        n = i(1635),
        s = i(9118),
        r = i(3236),
        l = i(7813),
        d = i(6090),
        c = i(3714),
        p = i(5802),
        a = i(1532),
        u = i(8108);
      !(function (t) {
        (t[(t.None = 0)] = "None"),
          (t[(t.List = 1)] = "List"),
          (t[(t.ViewBinding = 2)] = "ViewBinding"),
          (t[(t.EditBinding = 3)] = "EditBinding"),
          (t[(t.AppSelect = 4)] = "AppSelect"),
          (t[(t.Debugger = 5)] = "Debugger");
      })(o || (o = {}));
      class h {
        constructor() {
          (this.m_State = o.None),
            (this.m_bLoading = !1),
            (this.m_rBindingList = void 0),
            (this.m_bShowBindingListError = !1),
            (this.m_sBindingListError = void 0),
            (this.m_bCanCloseBindingListError = !0),
            (this.m_timeoutLoading = void 0),
            (this.m_pathUpdateTimer = void 0),
            (this.m_bStandaloneSettingsPage = !1),
            (this.m_bDesktopMode = !1),
            (0, l.Gn)(this);
        }
        Init() {
          window.addEventListener("popstate", this.OnPopState),
            history.pushState({ direction: "back" }, "back"),
            history.pushState({ direction: "current" }, "current"),
            history.pushState({ direction: "forward" }, "forward"),
            history.back();
          let t = "bindingui/" + d.OH[(0, d.R$)()];
          (this.m_mailbox = new d._n()),
            this.m_mailbox.Init(t),
            this.m_mailbox.RegisterHandler(
              "show_app_select",
              this.OnShowAppSelect,
            ),
            this.m_mailbox.RegisterHandler(
              "show_app_binding",
              this.OnShowAppBinding,
            ),
            this.m_mailbox.RegisterHandler(
              "show_input_debugger",
              this.OnShowInputDebugger,
            ),
            this.m_mailbox.RegisterHandler(
              "binding_load_failed",
              this.OnBindingLoadFailed,
            ),
            (0, l.fm)(this.UpdateWindowTitle);
        }
        ShowOverlayInDashboard() {
          null === d.Ay ||
            void 0 === d.Ay ||
            d.Ay.VROverlay.ShowDashboard(
              "system.vrwebhelper.controllerbinding",
            );
        }
        OnShowAppSelect(t) {
          (this.m_bStandaloneSettingsPage = !1), this.ShowAppSelect();
        }
        OnShowInputDebugger(t) {
          (this.m_bStandaloneSettingsPage = !1), this.ShowDebugger();
        }
        OnShowAppBinding(t) {
          (this.m_bStandaloneSettingsPage = !1),
            (this.Loading = !0),
            a.s.UpdateApplications().then(() => {
              if (
                ((0, d.R$)() == d.OH.Overlay
                  ? this.ShowOverlayInDashboard()
                  : (0, d.R$)() == d.OH.Desktop && d.Ay.ShowBindingUI(!0),
                !a.s.GetApp(t.app_key))
              )
                return (
                  console.log(
                    "Warning: Could not find app key: " +
                      t.app_key +
                      " showing app select.",
                  ),
                  void this.ShowAppSelect()
                );
              p.B$.SetSelectedApp(t.app_key, !0),
                p.B$.ReloadCurrentApp().then(() => {
                  if (t.controller_type)
                    return (
                      p.B$.SetSelectedController(t.controller_type, !0),
                      void p.B$.ReloadControllerConfiguration().then(() => {
                        t.action_set && p.B$.SetSelectedActionSet(t.action_set),
                          (this.Loading = !1),
                          this.EditCurrentBinding();
                      })
                    );
                  (this.Loading = !1), this.ShowBindingList();
                });
            });
        }
        OnBindingLoadFailed(t) {
          console.log(
            "OnBindingLoadFailed: " +
              t.app_key +
              " " +
              t.controller_type +
              " " +
              t.error,
          ),
            a.s.UpdateApplications().then(() => {
              if (!a.s.ShouldShowBindingFailureForApp(t.app_key)) return;
              if (
                !p.B$.ShouldShowBindingFailureForControllerType(
                  t.controller_type,
                )
              )
                return;
              p.B$.RememberFailedLoadUri(t.uri),
                p.B$.SetSelectedApp(t.app_key),
                p.B$.SetSelectedController(t.controller_type);
              let e = a.s.GetApp(t.app_key),
                i = s.W.GetControllerTypeInfo(t.controller_type);
              if (!i) return;
              let o = s.W.LocalizeControllerString(i, t.controller_type);
              this.ShowBindingList(
                (0, c.we)(
                  t.error,
                  e ? e.name : (0, c.we)("#unknown_application"),
                  o,
                ),
              ),
                null === d.Ay || void 0 === d.Ay || d.Ay.ShowBindingUI(!1);
            });
        }
        SetStandaloneSettingsPage(t) {
          this.m_bStandaloneSettingsPage = t;
        }
        SetDesktopMode(t) {
          this.m_bDesktopMode = t;
        }
        get DesktopMode() {
          return this.m_bDesktopMode;
        }
        SetBindingListError(t, e = !0) {
          (this.m_bShowBindingListError = null != t),
            (this.m_sBindingListError = t),
            (this.m_bCanCloseBindingListError = e);
        }
        get ShowBindingListError() {
          return this.m_bShowBindingListError;
        }
        get BindingListError() {
          return this.m_sBindingListError;
        }
        get CanCloseBindingListError() {
          return this.m_bCanCloseBindingListError;
        }
        OnPopState(t) {
          let e = "";
          t.state && t.state.direction && (e = t.state.direction),
            "back" == e
              ? (this.m_bStandaloneSettingsPage &&
                  (this.SetStandaloneSettingsPage(!1),
                  this.ReturnToSettingsUI()),
                this.GoBackPage(),
                history.forward())
              : "forward" == e && (history.back(), this.GoForwardPage());
        }
        GoBackPage() {
          switch (this.m_State) {
            default:
            case o.None:
            case o.AppSelect:
              break;
            case o.Debugger:
            case o.List:
              this.ShowAppSelect();
              break;
            case o.EditBinding:
            case o.ViewBinding:
              this.ShowBindingList();
          }
        }
        GoForwardPage() {
          switch (this.m_State) {
            default:
            case o.None:
            case o.AppSelect:
              this.ShowBindingList();
              break;
            case o.List:
              this.CurrentBinding.url == p.B$.LoadedBindingURL
                ? this.EditCurrentBinding()
                : this.ViewCurrentBinding();
            case o.EditBinding:
            case o.ViewBinding:
          }
        }
        get GetUIState() {
          return this.m_State;
        }
        get BindingQueryResults() {
          return this.m_rBindingList;
        }
        get Loading() {
          return this.m_bLoading;
        }
        set Loading(t) {
          (this.m_bLoading = t),
            t
              ? (this.m_timeoutLoading && clearTimeout(this.m_timeoutLoading),
                (this.m_timeoutLoading = window.setTimeout(() => {
                  this.Loading = !1;
                }, 1e4)))
              : this.m_timeoutLoading && clearTimeout(this.m_timeoutLoading);
        }
        IsSafeToResetControllerType(t, e) {
          return (
            this.m_State == o.AppSelect ||
            this.m_State == o.None ||
            ("TrackedDeviceClass_HMD" == t &&
              "TrackedDeviceClass_Controller" == e)
          );
        }
        EditCurrentBinding() {
          this.m_State = o.EditBinding;
        }
        ViewCurrentBinding() {
          this.m_State = o.ViewBinding;
        }
        ShowBindingList(t = void 0) {
          (this.m_bStandaloneSettingsPage = !1),
            this.SetBindingListError(t),
            (this.m_State = o.List),
            (this.Loading = !1);
        }
        get CurrentBinding() {
          if (this.BindingQueryResults)
            return g.BindingQueryResults.find(
              (t) => t.url == p.B$.SelectedBindingURL,
            );
        }
        ReturnToSettingsUI() {
          this.ShowAppSelect(),
            null === d.Ay || void 0 === d.Ay || d.Ay.ShowSettingsUI();
        }
        ShowAppSelect() {
          (this.m_bStandaloneSettingsPage = !1),
            (this.Loading = !0),
            a.s
              .UpdateApplications()
              .then(() => {
                (this.Loading = !1), (this.m_State = o.AppSelect);
              })
              .catch(() => {
                this.Loading = !1;
              });
        }
        UpdatePathsTimeout() {
          try {
            u.J.UpdatePaths().then(() => {
              this.m_State == o.Debugger
                ? (this.m_pathUpdateTimer = window.setTimeout(
                    this.UpdatePathsTimeout,
                    500,
                  ))
                : (this.m_pathUpdateTimer = void 0);
            });
          } catch (t) {
            console.log("Stopping debugger timer because", t);
          }
        }
        ShowDebugger() {
          (this.Loading = !0),
            a.s
              .UpdateApplications()
              .then(() => {
                this.Loading = !1;
                let t = a.s.GetApp(p.B$.SelectedApp);
                t &&
                  t.client_container_handle &&
                  u.J.AddSubscribedContainer(t.client_container_handle),
                  (this.m_State = o.Debugger),
                  (this.m_pathUpdateTimer = window.setTimeout(
                    this.UpdatePathsTimeout,
                    500,
                  )),
                  d.Ay.ShowBindingUI((0, d.R$)() == d.OH.Desktop);
              })
              .catch(() => {
                this.Loading = !1;
              });
        }
        GetBindingList() {
          return (0, n.sH)(this, void 0, void 0, function* () {
            var t;
            (this.Loading = !0), (this.m_rBindingList = []);
            try {
              const e = p.B$.SelectedControllerTypeInfo,
                i = yield p.B$.QueryBindingList(
                  p.B$.SelectedApp,
                  null !== (t = null == e ? void 0 : e.controller_type) &&
                    void 0 !== t
                    ? t
                    : "",
                );
              i.success && (this.m_rBindingList = i.results);
            } catch (t) {
              this.SetBindingListError(
                (0, c.we)("#BindingUI_WorkshopBindingLoadFailed"),
              ),
                console.error("Failed to load workshop bindings " + t);
            } finally {
              this.Loading = !1;
            }
          });
        }
        UpdateWindowTitle() {
          setTimeout(() => {
            switch (this.GetUIState) {
              case o.AppSelect:
              case o.Debugger:
              case o.EditBinding:
              case o.List:
              case o.None:
              case o.ViewBinding:
                document.title = (0, c.we)(
                  "#BindingUI_WindowTitle_ControllerBinding",
                );
            }
          }, 0);
        }
      }
      (0, n.Cg)([l.sH], h.prototype, "m_State", void 0),
        (0, n.Cg)([l.sH], h.prototype, "m_bLoading", void 0),
        (0, n.Cg)([l.sH], h.prototype, "m_rBindingList", void 0),
        (0, n.Cg)([l.sH], h.prototype, "m_bShowBindingListError", void 0),
        (0, n.Cg)([l.sH], h.prototype, "m_sBindingListError", void 0),
        (0, n.Cg)([l.sH], h.prototype, "m_bCanCloseBindingListError", void 0),
        (0, n.Cg)([l.sH], h.prototype, "m_bDesktopMode", void 0),
        (0, n.Cg)([r.o], h.prototype, "OnShowAppSelect", null),
        (0, n.Cg)([r.o], h.prototype, "OnShowInputDebugger", null),
        (0, n.Cg)([r.o], h.prototype, "OnShowAppBinding", null),
        (0, n.Cg)([r.o], h.prototype, "OnBindingLoadFailed", null),
        (0, n.Cg)([l.EW], h.prototype, "DesktopMode", null),
        (0, n.Cg)([r.o], h.prototype, "SetBindingListError", null),
        (0, n.Cg)([l.EW], h.prototype, "ShowBindingListError", null),
        (0, n.Cg)([l.EW], h.prototype, "BindingListError", null),
        (0, n.Cg)([l.EW], h.prototype, "CanCloseBindingListError", null),
        (0, n.Cg)([r.o], h.prototype, "OnPopState", null),
        (0, n.Cg)([r.o], h.prototype, "GoBackPage", null),
        (0, n.Cg)([r.o], h.prototype, "GoForwardPage", null),
        (0, n.Cg)([l.EW], h.prototype, "GetUIState", null),
        (0, n.Cg)([l.EW], h.prototype, "BindingQueryResults", null),
        (0, n.Cg)([l.EW], h.prototype, "Loading", null),
        (0, n.Cg)([r.o], h.prototype, "IsSafeToResetControllerType", null),
        (0, n.Cg)([r.o], h.prototype, "EditCurrentBinding", null),
        (0, n.Cg)([r.o], h.prototype, "ViewCurrentBinding", null),
        (0, n.Cg)([r.o], h.prototype, "ShowBindingList", null),
        (0, n.Cg)([l.EW], h.prototype, "CurrentBinding", null),
        (0, n.Cg)([r.o], h.prototype, "ReturnToSettingsUI", null),
        (0, n.Cg)([r.o], h.prototype, "ShowAppSelect", null),
        (0, n.Cg)([r.o], h.prototype, "UpdatePathsTimeout", null),
        (0, n.Cg)([r.o], h.prototype, "ShowDebugger", null),
        (0, n.Cg)([r.o], h.prototype, "GetBindingList", null),
        (0, n.Cg)([r.o], h.prototype, "UpdateWindowTitle", null);
      const g = new h();
      window.inputUI = g;
    },
  },
]); //# sourceMappingURL=file:///c:/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~1558adad5.js.map
