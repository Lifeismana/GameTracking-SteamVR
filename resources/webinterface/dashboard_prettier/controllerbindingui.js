var CLSTAMP = "10833373";
(() => {
  "use strict";
  var e,
    t = {
      5802: (e, t, o) => {
        o.d(t, {
          B$: () => k,
          Qd: () => b,
          bR: () => w,
          mQ: () => I,
          xM: () => B,
        });
        var n,
          i = o(1635),
          l = o(3236),
          s = o(2505),
          r = o.n(s),
          a = o(7813),
          c = o(3714),
          d = o(6090),
          p = o(6795),
          h = o(1532),
          u = o(9118),
          m = o(3804);
        class g {
          constructor() {
            (this.path = void 0),
              (this.mode = void 0),
              (this.parameters = new Map()),
              (this.inputs = new Map()),
              (0, a.makeObservable)(this);
          }
        }
        (0, i.Cg)([a.observable], g.prototype, "path", void 0),
          (0, i.Cg)([a.observable], g.prototype, "mode", void 0),
          (0, i.Cg)([a.observable], g.prototype, "parameters", void 0),
          (0, i.Cg)([a.observable], g.prototype, "inputs", void 0);
        class S {
          constructor() {
            (this.path = void 0),
              (this.output = void 0),
              (0, a.makeObservable)(this);
          }
        }
        (0, i.Cg)([a.observable], S.prototype, "path", void 0),
          (0, i.Cg)([a.observable], S.prototype, "output", void 0),
          (0, i.Cg)([a.observable], S.prototype, "parameters", void 0);
        class _ {
          constructor() {
            (this.path = void 0),
              (this.output = void 0),
              (0, a.makeObservable)(this);
          }
        }
        (0, i.Cg)([a.observable], _.prototype, "path", void 0),
          (0, i.Cg)([a.observable], _.prototype, "output", void 0);
        class C {
          constructor() {
            (this.path = void 0),
              (this.output = void 0),
              (0, a.makeObservable)(this);
          }
        }
        (0, i.Cg)([a.observable], C.prototype, "path", void 0),
          (0, i.Cg)([a.observable], C.prototype, "output", void 0),
          (0, i.Cg)([a.observable], C.prototype, "parameters", void 0);
        class y {
          constructor() {
            (this.output = void 0),
              (this.inputs = new Array()),
              (0, a.makeObservable)(this);
          }
        }
        (0, i.Cg)([a.observable], y.prototype, "output", void 0),
          (0, i.Cg)([a.observable], y.prototype, "inputs", void 0);
        class f {
          constructor() {
            (this.chords = void 0),
              (this.poses = void 0),
              (this.haptics = void 0),
              (this.sources = void 0),
              (this.skeleton = void 0),
              (0, a.makeObservable)(this);
          }
        }
        (0, i.Cg)([a.observable], f.prototype, "chords", void 0),
          (0, i.Cg)([a.observable], f.prototype, "poses", void 0),
          (0, i.Cg)([a.observable], f.prototype, "haptics", void 0),
          (0, i.Cg)([a.observable], f.prototype, "sources", void 0),
          (0, i.Cg)([a.observable], f.prototype, "skeleton", void 0);
        class b {
          constructor() {
            (this.vecRequired = []), (this.vecSuggested = []);
          }
        }
        class v {
          constructor() {
            (this.device_path_string = void 0),
              (this.device_path_handle = void 0),
              (this.role = void 0),
              (this.controller_role = void 0),
              (0, a.makeObservable)(this);
          }
        }
        (0, i.Cg)([a.observable], v.prototype, "device_path_string", void 0),
          (0, i.Cg)([a.observable], v.prototype, "device_path_handle", void 0),
          (0, i.Cg)([a.observable], v.prototype, "role", void 0),
          (0, i.Cg)([a.observable], v.prototype, "controller_role", void 0);
        class A {
          constructor() {
            (this.trackers = void 0),
              (this.valid_roles = []),
              (0, a.makeObservable)(this);
          }
        }
        function B(e) {
          return new Promise(function (t, o) {
            r()
              .get("/input/getactions.json?app_key=" + e)
              .then((o) => {
                console.log("Loaded action manifest for ", e), t(o.data);
              })
              .catch((e) => {
                o(e);
              });
          });
        }
        function I(e, t, o) {
          return (0, i.sH)(this, void 0, void 0, function* () {
            let n = (yield r().get(
              "/input/loadbindingfromurl.json?binding_url=" +
                encodeURI(o) +
                "&controller_type=" +
                encodeURI(t) +
                "&app_key=" +
                encodeURI(e),
            )).data;
            if (n.success) return n;
            throw new Error(n.error);
          });
        }
        (0, i.Cg)([a.observable], A.prototype, "trackers", void 0),
          (0, i.Cg)([a.observable], A.prototype, "valid_roles", void 0);
        class w {
          constructor(e, t) {
            (this.x = e), (this.y = t), this.toString.bind(this);
          }
          toString() {
            return this.x + "," + this.y;
          }
        }
        class E {
          constructor(e, t, o, n, i) {
            (this.m_BindingUISource = void 0),
              (this.m_ControllerProfile = void 0),
              (this.m_sDeviceInputPath = void 0),
              (this.m_eButtonSide = void 0),
              (this.m_sInputPath = void 0),
              (this.m_sActionSet = void 0),
              (this.m_BindingStoreObserverDisposer = void 0),
              (this.m_iNewSourceEntry = -1),
              (this.m_sDeviceInputPath = e),
              (this.m_ControllerProfile = t),
              (this.m_eButtonSide = o),
              (this.m_sInputPath = n),
              (this.m_sActionSet = i),
              (this.m_BindingStoreObserverDisposer = (0, a.observe)(k, (e) => {
                "m_LoadedBinding" == e.name && this.UpdateBindingSource();
              })),
              this.UpdateBindingSource(),
              k.RegisterBindingWatcher(this.UpdateBindingSource.bind(this)),
              (0, a.makeObservable)(this);
          }
          cancelWatcher() {
            this.m_BindingStoreObserverDisposer(),
              k.UnregisterBindingWatcher(this.UpdateBindingSource);
          }
          UpdateBindingSource() {
            this.m_BindingUISource = k.GetActionBinding(
              this.GetFullInputPath,
              this.m_sActionSet,
            );
          }
          get GetFullInputPath() {
            let e = this.m_sDeviceInputPath + this.m_sInputPath;
            return (e = e.replace(/([^:]\/)\/+/g, "$1")), e;
          }
          GetSVGEndPoint() {
            return new w(
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
          GetActionForInputType(e, t) {
            if (
              this.m_BindingUISource &&
              this.m_BindingUISource[e].inputs &&
              this.m_BindingUISource[e].inputs.has(t)
            ) {
              let o = this.m_BindingUISource[e].inputs.get(t).output,
                n = k.GetActionByName(o);
              if (!n) {
                let e = k.GetSimulatedActionByPath(o);
                e && (n = k.CreateActionDefinitionForSimulatedAction(e));
              }
              let i = k.GetAliasInfo(o);
              return (
                n &&
                  i &&
                  i.alias_name &&
                  ((n = Object.assign({}, n)),
                  (n.localized_name = i.alias_name)),
                n
              );
            }
          }
          GetClickAction(e) {
            return this.GetActionForInputType(e, "click");
          }
          GetTouchAction(e) {
            return this.GetActionForInputType(e, "touch");
          }
          GetPositionAction(e) {
            return this.GetActionForInputType(e, "position");
          }
          GetHeldAction(e) {
            return this.GetActionForInputType(e, "held");
          }
          GetLongAction(e) {
            return this.GetActionForInputType(e, "long");
          }
          GetSingleAction(e) {
            return this.GetActionForInputType(e, "single");
          }
          GetDoubleAction(e) {
            return this.GetActionForInputType(e, "double");
          }
          GetNorthAction(e) {
            return this.GetActionForInputType(e, "north");
          }
          GetEastAction(e) {
            return this.GetActionForInputType(e, "east");
          }
          GetSouthAction(e) {
            return this.GetActionForInputType(e, "south");
          }
          GetWestAction(e) {
            return this.GetActionForInputType(e, "west");
          }
          GetCenterAction(e) {
            return this.GetActionForInputType(e, "center");
          }
          GetScrollAction(e) {
            return this.GetActionForInputType(e, "scroll");
          }
          GetPullAction(e) {
            return this.GetActionForInputType(e, "pull");
          }
          GetForceAction(e) {
            return this.GetActionForInputType(e, "force");
          }
          GetConstantAction(e) {
            return this.GetActionForInputType(e, "constant");
          }
          GetGrabAction(e) {
            return this.GetActionForInputType(e, "grab");
          }
          GetValueAction(e) {
            return this.GetActionForInputType(e, "value");
          }
          get GetControllerInputName() {
            return u.W.LocalizeDriverString(
              this.m_ControllerProfile.resource_root,
              this.m_sInputPath,
            );
          }
          get GetModes() {
            return this.m_BindingUISource ? this.m_BindingUISource : [];
          }
          GetMode(e) {
            return this.m_BindingUISource &&
              e >= 0 &&
              e < this.m_BindingUISource.length
              ? this.m_BindingUISource[e].mode
              : "none";
          }
          get GetInputSourceType() {
            return this.m_ControllerProfile.input_source[this.m_sInputPath]
              .type;
          }
          get GetInputSource() {
            return this.m_ControllerProfile.input_source[this.m_sInputPath];
          }
          get GetInputSourceClickSupport() {
            return (
              !(
                this.m_ControllerProfile.input_source[this.m_sInputPath]
                  .force &&
                !this.m_ControllerProfile.input_source[this.m_sInputPath].click
              ) &&
              ("knuckles" != this.m_ControllerProfile.controller_type ||
                "/input/trackpad" != this.m_sInputPath) &&
                !(
                  !this.m_ControllerProfile.input_source[this.m_sInputPath]
                    .click &&
                  !this.m_ControllerProfile.input_source[this.m_sInputPath]
                    .touch
                ) &&
              (this.m_ControllerProfile.input_source[this.m_sInputPath].click ||
                this.m_ControllerProfile.input_source[this.m_sInputPath].touch)
            );
          }
          get GetInputSourceTouchSupport() {
            return (
              !(
                !this.m_ControllerProfile.input_source[this.m_sInputPath]
                  .touch &&
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
              !!this.m_ControllerProfile.input_source[this.m_sInputPath]
                .force &&
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
          SetInputMode(e, t) {
            !this.m_BindingUISource ||
            t < 0 ||
            t >= this.m_BindingUISource.length
              ? console.error("SetInputMode: Invalid mode index for new mode")
              : (this.ClearNewModeIfSet(t),
                k.SetInputModeForInputSource(this.GetFullInputPath, t, e));
          }
          AddInputMode(e) {
            this.m_iNewSourceEntry = k.AddInputModeForSource(
              this.GetFullInputPath,
              e,
            );
          }
          DeleteInputMode(e) {
            !this.m_BindingUISource ||
            e < 0 ||
            e >= this.m_BindingUISource.length
              ? console.error("SetInputMode: Invalid mode index for new mode")
              : k.DeleteInputModeForSource(this.GetFullInputPath, e);
          }
          ClearNewModeIfSet(e) {
            -1 != this.m_iNewSourceEntry &&
              this.m_iNewSourceEntry == e &&
              (this.m_iNewSourceEntry = -1);
          }
          BHasModeSelectionPending(e) {
            return -1 != this.m_iNewSourceEntry && this.m_iNewSourceEntry == e;
          }
          SetClickAction(e, t) {
            k.SetActionForInputModeType(this.GetFullInputPath, e, "click", t, [
              "button",
              "trackpad",
              "joystick",
              "trigger",
              "toggle_button",
              "complex_button",
            ]);
          }
          SetTouchAction(e, t) {
            k.SetActionForInputModeType(this.GetFullInputPath, e, "touch", t, [
              "button",
              "trackpad",
              "joystick",
              "trigger",
              "toggle_button",
              "complex_button",
            ]);
          }
          SetHeldAction(e, t) {
            k.SetActionForInputModeType(this.GetFullInputPath, e, "held", t, [
              "button",
              "complex_button",
            ]);
          }
          SetLongAction(e, t) {
            k.SetActionForInputModeType(this.GetFullInputPath, e, "long", t, [
              "button",
              "complex_button",
            ]);
          }
          SetSingleAction(e, t) {
            k.SetActionForInputModeType(this.GetFullInputPath, e, "single", t, [
              "button",
              "complex_button",
            ]);
          }
          SetDoubleAction(e, t) {
            k.SetActionForInputModeType(this.GetFullInputPath, e, "double", t, [
              "button",
              "complex_button",
            ]);
          }
          SetPositionAction(e, t) {
            k.SetActionForInputModeType(
              this.GetFullInputPath,
              e,
              "position",
              t,
              ["trackpad", "joystick"],
            );
          }
          SetNorthAction(e, t) {
            k.SetActionForInputModeType(this.GetFullInputPath, e, "north", t, [
              "dpad",
              "dpad_click",
              "dpad_touch",
            ]);
          }
          SetEastAction(e, t) {
            k.SetActionForInputModeType(this.GetFullInputPath, e, "east", t, [
              "dpad",
              "dpad_click",
              "dpad_touch",
            ]);
          }
          SetSouthAction(e, t) {
            k.SetActionForInputModeType(this.GetFullInputPath, e, "south", t, [
              "dpad",
              "dpad_click",
              "dpad_touch",
            ]);
          }
          SetWestAction(e, t) {
            k.SetActionForInputModeType(this.GetFullInputPath, e, "west", t, [
              "dpad",
              "dpad_click",
              "dpad_touch",
            ]);
          }
          SetCenterAction(e, t) {
            k.SetActionForInputModeType(this.GetFullInputPath, e, "center", t, [
              "dpad",
              "dpad_click",
              "dpad_touch",
            ]);
          }
          SetScrollAction(e, t) {
            k.SetActionForInputModeType(this.GetFullInputPath, e, "scroll", t, [
              "scroll",
            ]);
          }
          SetPullAction(e, t) {
            k.SetActionForInputModeType(this.GetFullInputPath, e, "pull", t, [
              "trigger",
            ]);
          }
          SetForceAction(e, t) {
            k.SetActionForInputModeType(this.GetFullInputPath, e, "force", t, [
              "force_sensor",
            ]);
          }
          SetGrabAction(e, t) {
            k.SetActionForInputModeType(this.GetFullInputPath, e, "grab", t, [
              "grab",
            ]);
          }
          SetValueAction(e, t) {
            k.SetActionForInputModeType(this.GetFullInputPath, e, "value", t, [
              "scalar_constant",
            ]);
          }
          SetConstantAction(e, t) {
            k.SetActionForInputModeType(
              this.GetFullInputPath,
              e,
              "constant",
              t,
              ["static_bool"],
            );
          }
          CopyActions(e) {
            k.ClearModesForInputPath(this.GetFullInputPath),
              e.GetModes.forEach((e, t) => {
                k.AddInputModeForSource(this.GetFullInputPath, e.mode),
                  e.inputs.forEach((e, o) => {
                    k.SetActionForInputModeType(
                      this.GetFullInputPath,
                      t,
                      o,
                      e.output,
                      [],
                    );
                  });
              });
          }
          BindingsMatch(e) {
            let t = e.GetModes;
            if (this.GetModes.length != t.length) return !1;
            for (let e = 0; e < t.length; e++) {
              let o = t[e],
                n = this.GetModes.filter((e) => e.mode == o.mode);
              if (n.length > 0) {
                let e = !0;
                return (
                  n[0].inputs.forEach((t, n) => {
                    (o.inputs.has(n) && o.inputs.get(n).output == t.output) ||
                      (e = !1);
                  }),
                  e
                );
              }
              return !1;
            }
            return !0;
          }
          SetClickParameter(e, t, o) {
            k.SetParameterForInputModeType(
              this.GetFullInputPath,
              e,
              "click",
              t,
              o,
            );
          }
          SetTouchParameter(e, t, o) {
            k.SetParameterForInputModeType(
              this.GetFullInputPath,
              e,
              "touch",
              t,
              o,
            );
          }
          SetParameter(e, t, o, n) {
            k.SetParameterForInputModeType(this.GetFullInputPath, e, t, o, n);
          }
          GetClickParameter(e, t) {
            return k.GetParameterForInputModeType(
              this.GetFullInputPath,
              e,
              "click",
              t,
            );
          }
          GetTouchParameter(e, t) {
            return k.GetParameterForInputModeType(
              this.GetFullInputPath,
              e,
              "touch",
              t,
            );
          }
          GetParameter(e, t, o) {
            return k.GetParameterForInputModeType(
              this.GetFullInputPath,
              e,
              t,
              o,
            );
          }
          GetTrackpadInvertState(e) {
            switch (
              k.GetParameterForInputModeType(
                this.GetFullInputPath,
                e,
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
          SetTrackpadInvertState(e, t) {
            let o = "";
            switch (t) {
              case "x":
                o = "x";
                break;
              case "y":
                o = "y";
                break;
              case "xy":
                o = "xy";
            }
            k.SetParameterForInputModeType(
              this.GetFullInputPath,
              e,
              "trackpad",
              "invert",
              o,
            );
          }
        }
        (0, i.Cg)([a.observable], E.prototype, "m_BindingUISource", void 0),
          (0, i.Cg)([a.observable], E.prototype, "m_ControllerProfile", void 0),
          (0, i.Cg)([a.observable], E.prototype, "m_sDeviceInputPath", void 0),
          (0, i.Cg)([a.observable], E.prototype, "m_eButtonSide", void 0),
          (0, i.Cg)([a.observable], E.prototype, "m_sInputPath", void 0),
          (0, i.Cg)([a.observable], E.prototype, "m_sActionSet", void 0),
          (0, i.Cg)([l.o], E.prototype, "cancelWatcher", null),
          (0, i.Cg)([a.action], E.prototype, "UpdateBindingSource", null),
          (0, i.Cg)([a.computed], E.prototype, "GetFullInputPath", null),
          (0, i.Cg)([l.o], E.prototype, "GetSVGEndPoint", null),
          (0, i.Cg)([a.computed], E.prototype, "GetButtonSide", null),
          (0, i.Cg)([a.computed], E.prototype, "GetNumModes", null),
          (0, i.Cg)([l.o], E.prototype, "GetActionForInputType", null),
          (0, i.Cg)([l.o], E.prototype, "GetClickAction", null),
          (0, i.Cg)([l.o], E.prototype, "GetTouchAction", null),
          (0, i.Cg)([l.o], E.prototype, "GetPositionAction", null),
          (0, i.Cg)([l.o], E.prototype, "GetHeldAction", null),
          (0, i.Cg)([l.o], E.prototype, "GetLongAction", null),
          (0, i.Cg)([l.o], E.prototype, "GetSingleAction", null),
          (0, i.Cg)([l.o], E.prototype, "GetDoubleAction", null),
          (0, i.Cg)([l.o], E.prototype, "GetNorthAction", null),
          (0, i.Cg)([l.o], E.prototype, "GetEastAction", null),
          (0, i.Cg)([l.o], E.prototype, "GetSouthAction", null),
          (0, i.Cg)([l.o], E.prototype, "GetWestAction", null),
          (0, i.Cg)([l.o], E.prototype, "GetCenterAction", null),
          (0, i.Cg)([l.o], E.prototype, "GetScrollAction", null),
          (0, i.Cg)([l.o], E.prototype, "GetPullAction", null),
          (0, i.Cg)([l.o], E.prototype, "GetForceAction", null),
          (0, i.Cg)([l.o], E.prototype, "GetConstantAction", null),
          (0, i.Cg)([l.o], E.prototype, "GetGrabAction", null),
          (0, i.Cg)([l.o], E.prototype, "GetValueAction", null),
          (0, i.Cg)([a.computed], E.prototype, "GetControllerInputName", null),
          (0, i.Cg)([a.computed], E.prototype, "GetModes", null),
          (0, i.Cg)([l.o], E.prototype, "GetMode", null),
          (0, i.Cg)([a.computed], E.prototype, "GetInputSourceType", null),
          (0, i.Cg)([a.computed], E.prototype, "GetInputSource", null),
          (0, i.Cg)(
            [a.computed],
            E.prototype,
            "GetInputSourceClickSupport",
            null,
          ),
          (0, i.Cg)(
            [a.computed],
            E.prototype,
            "GetInputSourceTouchSupport",
            null,
          ),
          (0, i.Cg)(
            [a.computed],
            E.prototype,
            "GetInputSourceForceSupport",
            null,
          ),
          (0, i.Cg)(
            [a.computed],
            E.prototype,
            "GetInputSourceDefaultDeadzone",
            null,
          ),
          (0, i.Cg)([a.action], E.prototype, "SetInputMode", null),
          (0, i.Cg)([a.action], E.prototype, "AddInputMode", null),
          (0, i.Cg)([a.action], E.prototype, "DeleteInputMode", null),
          (0, i.Cg)([l.o], E.prototype, "ClearNewModeIfSet", null),
          (0, i.Cg)([l.o], E.prototype, "BHasModeSelectionPending", null),
          (0, i.Cg)([a.action], E.prototype, "SetClickAction", null),
          (0, i.Cg)([a.action], E.prototype, "SetTouchAction", null),
          (0, i.Cg)([a.action], E.prototype, "SetHeldAction", null),
          (0, i.Cg)([a.action], E.prototype, "SetLongAction", null),
          (0, i.Cg)([a.action], E.prototype, "SetSingleAction", null),
          (0, i.Cg)([a.action], E.prototype, "SetDoubleAction", null),
          (0, i.Cg)([a.action], E.prototype, "SetPositionAction", null),
          (0, i.Cg)([a.action], E.prototype, "SetNorthAction", null),
          (0, i.Cg)([a.action], E.prototype, "SetEastAction", null),
          (0, i.Cg)([a.action], E.prototype, "SetSouthAction", null),
          (0, i.Cg)([a.action], E.prototype, "SetWestAction", null),
          (0, i.Cg)([a.action], E.prototype, "SetCenterAction", null),
          (0, i.Cg)([a.action], E.prototype, "SetScrollAction", null),
          (0, i.Cg)([a.action], E.prototype, "SetPullAction", null),
          (0, i.Cg)([a.action], E.prototype, "SetForceAction", null),
          (0, i.Cg)([a.action], E.prototype, "SetGrabAction", null),
          (0, i.Cg)([a.action], E.prototype, "SetValueAction", null),
          (0, i.Cg)([a.action], E.prototype, "SetConstantAction", null),
          (0, i.Cg)([a.action], E.prototype, "CopyActions", null),
          (0, i.Cg)([l.o], E.prototype, "BindingsMatch", null),
          (0, i.Cg)([a.action], E.prototype, "SetClickParameter", null),
          (0, i.Cg)([a.action], E.prototype, "SetTouchParameter", null),
          (0, i.Cg)([a.action], E.prototype, "SetParameter", null),
          (0, i.Cg)([a.action], E.prototype, "GetClickParameter", null),
          (0, i.Cg)([a.action], E.prototype, "GetTouchParameter", null),
          (0, i.Cg)([a.action], E.prototype, "GetParameter", null),
          (0, i.Cg)([l.o], E.prototype, "GetTrackpadInvertState", null),
          (0, i.Cg)([a.action], E.prototype, "SetTrackpadInvertState", null);
        class M {
          constructor(e, t, o) {
            (this.m_sSaveType = e),
              (this.m_OutstandingSaveBindingResolve = t),
              (this.m_OutstandingSaveBindingReject = o);
          }
          resolve(e) {
            this.m_OutstandingSaveBindingResolve(e);
          }
          reject(e) {
            this.m_OutstandingSaveBindingReject(e);
          }
          get SaveType() {
            return this.m_sSaveType;
          }
        }
        (0, i.Cg)([l.o], M.prototype, "resolve", null),
          (0, i.Cg)([l.o], M.prototype, "reject", null),
          (function (e) {
            (e[(e.eWebSocketState_Unknown = 0)] = "eWebSocketState_Unknown"),
              (e[(e.eWebSocketState_Disconnected = 1)] =
                "eWebSocketState_Disconnected"),
              (e[(e.eWebSocketState_Connecting = 2)] =
                "eWebSocketState_Connecting"),
              (e[(e.eWebSocketState_Connected = 3)] =
                "eWebSocketState_Connected");
          })(n || (n = {}));
        class O {
          constructor() {
            (this.m_wsWebSocketToServer = void 0),
              (this.m_eWebSocketState = n.eWebSocketState_Unknown),
              (this.m_timerWebSocket = void 0),
              (this.m_dateStartTime = new Date()),
              (this.m_sLoadedBindingURI = void 0),
              (this.m_LoadedBinding = void 0),
              (this.m_ModifiedBindingSet = a.observable.map()),
              (this.m_ModifiedOptions = a.observable.map()),
              (this.m_ModifiedAliases = a.observable.map()),
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
              (this.m_ModifiedSimulatedActions = a.observable.map()),
              (this.m_nNextSimulatedActionId = 1),
              (this.m_nBindingSubscriptionChangedCanary = 1),
              (this.m_bIsSaving = !1),
              (this.m_bHasPendingSave = !1),
              (0, a.makeObservable)(this);
          }
          OpenWebSocketToHost() {
            return new Promise((e, t) => {
              this.m_eWebSocketState != n.eWebSocketState_Connecting &&
                this.m_eWebSocketState != n.eWebSocketState_Connected &&
                (this.m_wsWebSocketToServer &&
                  delete this.m_wsWebSocketToServer,
                (this.m_wsWebSocketToServer = new WebSocket(
                  "ws://" + window.location.host,
                )),
                this.m_wsWebSocketToServer.addEventListener("open", (t) => {
                  this.OnWebSocketOpen(t), e();
                }),
                this.m_wsWebSocketToServer.addEventListener("message", (e) => {
                  this.OnWebSocketMessage(e);
                }),
                this.m_wsWebSocketToServer.addEventListener("close", (e) => {
                  this.OnWebSocketClose(e);
                }),
                (this.m_eWebSocketState = n.eWebSocketState_Connecting)),
                this.m_timerWebSocket ||
                  (this.m_timerWebSocket = window.setTimeout(
                    this.OpenWebSocketToHost,
                    1e3,
                  ));
            });
          }
          Init() {
            return (0, i.sH)(this, void 0, void 0, function* () {
              yield this.OpenWebSocketToHost(), yield this.RefreshInputState();
            });
          }
          CountDevicesWithControllerType(e) {
            let t = 0;
            return (
              u.W.ConnectedDevices.forEach((o) => {
                o.controller_type == e && t++;
              }),
              t
            );
          }
          ComputeControllerTypeScore(e) {
            let t = this.CountDevicesWithControllerType(e.controller_type),
              o =
                ((null === d.Ay || void 0 === d.Ay ? void 0 : d.Ay.HasHMD())
                  ? null === d.Ay || void 0 === d.Ay
                    ? void 0
                    : d.Ay.VRProperties.GetStringProperty(
                        "/user/head",
                        d.fD.Prop_ExpectedControllerType_String,
                      )
                  : void 0) == e.controller_type
                  ? 2
                  : 1;
            return 1e3 * (999 - e.priority) + 10 * t + o;
          }
          GetBestControllerType() {
            let e,
              t = 0;
            return (
              u.W.ControllerTypes.forEach((o) => {
                let n = this.ComputeControllerTypeScore(o);
                n > t && ((e = o), (t = n));
              }),
              e
            );
          }
          RefreshInputState() {
            return (0, i.sH)(this, void 0, void 0, function* () {
              let e = u.W.KnownControllerTypes.size;
              return u.W.GetInputState().then(() => {
                this.m_SelectedApp &&
                  e != u.W.KnownControllerTypes.size &&
                  this.ReloadCurrentApp();
                let t = !1;
                const o = this.GetBestControllerType();
                let n = u.W.FindDeviceClassForControllerType(
                  this.m_sSelectedControllerType,
                );
                if (
                  null != o &&
                  this.m_sSelectedControllerType != o.controller_type &&
                  !this.m_bControllerTypeSelectedByUser
                ) {
                  let e = u.W.FindDeviceClassForControllerType(
                    o.controller_type,
                  );
                  p.n.IsSafeToResetControllerType(n, e) &&
                    ((this.m_sSelectedControllerType = o.controller_type),
                    (t = !0));
                }
                return t ? this.ReloadControllerConfiguration() : null;
              });
            });
          }
          get SteamVRUnavailable() {
            return this.m_eWebSocketState == n.eWebSocketState_Connecting ||
              this.m_eWebSocketState == n.eWebSocketState_Unknown
              ? Date.now() - this.m_dateStartTime.getTime() > 1e4
              : this.m_eWebSocketState != n.eWebSocketState_Connected;
          }
          get ActionSets() {
            if (
              null == this.m_SelectedAppActions ||
              null == this.m_SelectedAppActions.action_sets
            )
              return [];
            let e = [];
            return (
              this.m_SelectedAppActions.action_sets.forEach((t) => {
                if ("hidden" != t.usage) {
                  let o = !0;
                  t.required_options &&
                    t.required_options.forEach((e) => {
                      this.GetOptionValue(e) || (o = !1);
                    });
                  let n = !1;
                  t.forbidden_options &&
                    t.forbidden_options.forEach((e) => {
                      this.GetOptionValue(e) && (n = !0);
                    }),
                    o && !n && e.push(t);
                }
              }),
              e
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
                localized_name: (0, c.we)(
                  "#SecondaryController_ReturnWithHead",
                ),
                type: "bool",
                default: !1,
              },
            ];
          }
          GetOptionDefault(e) {
            let t = !1;
            return (
              this.ManifestOptions.forEach((o) => {
                o.name == e && (t = o.default);
              }),
              t
            );
          }
          GetOptionValue(e) {
            return this.m_ModifiedOptions.has(e)
              ? this.m_ModifiedOptions.get(e)
              : void 0;
          }
          HasOptionValue(e) {
            return this.m_ModifiedOptions.has(e);
          }
          SetOptionValue(e, t) {
            null == t
              ? this.m_ModifiedOptions.delete(e)
              : this.m_ModifiedOptions.set(e, t),
              this.NotifyWatchersOfChange();
          }
          GetAliasInfo(e) {
            return this.m_ModifiedAliases.has(e)
              ? this.m_ModifiedAliases.get(e)
              : null;
          }
          SetAliasName(e, t) {
            if (this.m_ModifiedAliases.has(e)) {
              let o = this.m_ModifiedAliases.get(e);
              (o.alias_name = t),
                this.m_ModifiedAliases.set(e, o),
                this.NotifyWatchersOfChange();
            } else {
              let o = { alias_name: t, hidden: !1 };
              this.m_ModifiedAliases.set(e, o), this.NotifyWatchersOfChange();
            }
          }
          SetAliasHidden(e, t) {
            if (this.m_ModifiedAliases.has(e)) {
              let o = this.m_ModifiedAliases.get(e);
              (o.hidden = t),
                this.m_ModifiedAliases.set(e, o),
                this.NotifyWatchersOfChange();
            } else {
              let o = { alias_name: "", hidden: t };
              this.m_ModifiedAliases.set(e, o), this.NotifyWatchersOfChange();
            }
          }
          ComputeSimulatedActionPathFromId(e) {
            return "/simactions/" + e;
          }
          GetSimulatedActionByPath(e) {
            return this.m_ModifiedSimulatedActions.has(e)
              ? this.m_ModifiedSimulatedActions.get(e)
              : void 0;
          }
          SetSimulatedActionByPath(e, t) {
            this.m_ModifiedSimulatedActions.set(e, t),
              this.NotifyWatchersOfChange();
          }
          AddSimulatedAction(e) {
            let t = {
                name: "",
                type: e,
                id: this.m_nNextSimulatedActionId++,
                output: "",
              },
              o = this.ComputeSimulatedActionPathFromId(t.id);
            this.m_ModifiedSimulatedActions.set(o, t),
              this.NotifyWatchersOfChange();
          }
          DeleteSimulatedActionByPath(e) {
            this.m_ModifiedSimulatedActions.delete(e),
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
              h.s.IsAppAllowedPrivateInputs(this.m_SelectedApp.key) ||
              u.W.ShouldSendSystemButtonToAllApps
            );
          }
          get SelectedControllerTypeInfo() {
            if (u.W.IsValid && null != this.m_sSelectedControllerType)
              return u.W.GetControllerTypeInfo(this.m_sSelectedControllerType);
          }
          DeviceForControllerType(e, t) {
            let o = u.W.GetControllerTypeInfo(e);
            if (!o) return;
            let n = !1,
              i = u.W.ConnectedDevices.find((i) => {
                if (i.controller_type == e) {
                  if (((n = !0), !t)) return !0;
                  if ("controller_handed" != o.input_bindingui_mode) return !0;
                  let e = 1 == t ? "/left" : "/right";
                  if (i.root_path && i.root_path.indexOf(e) >= 0) return !0;
                }
                return !1;
              });
            return (
              i ||
              (n
                ? u.W.ConnectedDevices.find((t) => t.controller_type == e)
                : void 0)
            );
          }
          get CurrentBindingSaveType() {
            if (null != this.m_LoadedBinding)
              return "developer" == this.m_LoadedBinding.save_type &&
                k.SelectedBindingIsLegacy
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
                (e) => e.name == this.m_sSelectedActionSet,
              );
          }
          get SelectedActionSetActions() {
            return this.GetActionSetActions(this.m_sSelectedActionSet);
          }
          GetSelectedAppDefaultBinding(e) {
            if (null != this.m_SelectedAppActions)
              return this.m_SelectedAppActions.default_bindings &&
                this.m_SelectedAppActions.default_bindings.hasOwnProperty(e)
                ? this.m_SelectedAppActions.default_bindings[e]
                : void 0;
          }
          GetActionSetActions(e) {
            if (null == this.m_SelectedAppActions || null == e) return [];
            let t = this.m_SelectedAppActions.action_sets.find(
              (t) => t.name == e,
            );
            return t ? t.actions : [];
          }
          GetActionByName(e) {
            if (
              null == this.m_SelectedApp ||
              !this.m_SelectedAppActions.action_sets
            )
              return;
            let t,
              o = e.toLowerCase();
            return (
              this.m_SelectedAppActions.action_sets.forEach((e) => {
                if (!e.actions) return;
                let n = e.actions.find((e) => e.name.toLowerCase() == o);
                n && (t = n);
              }),
              t
            );
          }
          GetActionSetLocalizedNameByName(e) {
            for (const t of this.m_SelectedAppActions.action_sets)
              if (t.name == e && t.localized_name) return t.localized_name;
            return e;
          }
          get UnboundActions() {
            this.m_bIsMissingRequiredActions = !1;
            for (let e of this.ActionSets) {
              let t = [],
                o = [];
              if (!e.actions) break;
              for (let n of e.actions)
                if (
                  "optional" != n.requirement &&
                  !this.IsActionBound(e, n.name)
                ) {
                  let e = this.GetAliasInfo(n.name);
                  if (e) {
                    if (e.hidden) continue;
                    e.alias_name &&
                      ((n = Object.assign({}, n)),
                      (n.localized_name = e.alias_name));
                  }
                  "mandatory" == n.requirement ? t.push(n) : o.push(n);
                }
              if (
                (t.length > 0 && (this.m_bIsMissingRequiredActions = !0),
                this.m_mapUnoundActions.has(e.name))
              ) {
                let n = this.m_mapUnoundActions.get(e.name);
                (n.vecRequired = t), (n.vecSuggested = o);
              } else
                this.m_mapUnoundActions.set(e.name, {
                  vecRequired: t,
                  vecSuggested: o,
                });
            }
            let e = this.SelectedControllerTypeInfo;
            return (
              e &&
                "TrackedDeviceClass_HMD" == e.device_class &&
                (this.m_bIsMissingRequiredActions = !1),
              this.IsSecondaryController &&
                (this.m_bIsMissingRequiredActions = !1),
              this.m_mapUnoundActions
            );
          }
          get UnboundRequiredActionStrings() {
            this.UnboundActions;
            let e = [];
            for (let t of this.ActionSets) {
              const o = t.localized_name ? t.localized_name : t.name;
              let n = this.m_mapUnoundActions.get(t.name);
              n &&
                n.vecRequired.length > 0 &&
                n.vecRequired.forEach((t) => {
                  const n = t.localized_name ? t.localized_name : t.name;
                  e.push(`${o}: ${n}`);
                });
            }
            return e;
          }
          get HasUnboundActions() {
            return this.UnboundActions, this.m_bIsMissingRequiredActions;
          }
          IsActionBound(e, t) {
            t = t.toLowerCase();
            let o = this.GetActionSetSources(e.name);
            if (o)
              for (let e of o) {
                let o = !1;
                if (
                  (e.inputs.forEach((e) => {
                    e.output.toLowerCase() == t && (o = !0);
                  }),
                  o)
                )
                  return !0;
              }
            let n = this.GetActionSetChords(e.name);
            if (n)
              for (let e of n)
                if (e.output && e.output.toLowerCase() == t) return !0;
            let i = this.GetActionSetPoses(e.name);
            if (i)
              for (let e of i)
                if (e.output && e.output.toLowerCase() == t) return !0;
            let l = this.GetActionSetHaptics(e.name);
            if (l)
              for (let e of l)
                if (e.output && e.output.toLowerCase() == t) return !0;
            let s = this.GetActionSetSkeleton(e.name);
            if (s)
              for (let e of s)
                if (e.output && e.output.toLowerCase() == t) return !0;
            return !1;
          }
          GetActionSetPoses(e) {
            return this.m_ModifiedBindingSet.has(e)
              ? this.m_ModifiedBindingSet.get(e).poses
              : [];
          }
          get SelectedActionSetPoses() {
            return this.GetActionSetPoses(this.m_sSelectedActionSet);
          }
          GetActionSetHaptics(e) {
            return this.m_ModifiedBindingSet.has(e)
              ? this.m_ModifiedBindingSet.get(e).haptics
              : [];
          }
          get SelectedActionSetHaptics() {
            return this.GetActionSetHaptics(this.m_sSelectedActionSet);
          }
          GetActionSetSkeleton(e) {
            return this.m_ModifiedBindingSet.has(e)
              ? this.m_ModifiedBindingSet.get(e).skeleton
              : [];
          }
          get SelectedActionSetSkeletons() {
            return this.GetActionSetSkeleton(this.m_sSelectedActionSet);
          }
          GetActionSetChords(e) {
            return this.m_ModifiedBindingSet.has(e)
              ? this.m_ModifiedBindingSet.get(e).chords
              : [];
          }
          get SelectedActionSetChords() {
            return this.GetActionSetChords(this.m_sSelectedActionSet);
          }
          get SelectedActionSetChordCount() {
            let e = this.SelectedActionSetChords;
            return e ? e.length : 0;
          }
          GetActionSetSources(e) {
            if (null == this.m_ModifiedBindingSet || null == e) return;
            let t = this.m_ModifiedBindingSet;
            return t.has(e) ? t.get(e).sources : void 0;
          }
          get SelectedActionSetSources() {
            return this.GetActionSetSources(this.m_sSelectedActionSet);
          }
          get BSelectedActionSetHasPoses() {
            return (
              null != this.m_LoadedBinding &&
              null != this.m_sSelectedActionSet &&
              null != this.SelectedActionSetActions &&
              !this.SelectedBindingIsLegacy &&
              this.SelectedActionSetActions.filter((e) => "pose" == e.type)
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
            for (let e of this.SelectedActionSetPoses)
              if (e.output && "none" != e.output) return !0;
            return !1;
          }
          get BSelectedActionSetHasHaptics() {
            return (
              null != this.m_LoadedBinding &&
              null != this.m_sSelectedActionSet &&
              null != this.SelectedActionSetActions &&
              this.SelectedActionSetActions.filter((e) => "vibration" == e.type)
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
            for (let e of this.SelectedActionSetHaptics)
              if (e.output && "none" != e.output) return !0;
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
              this.SelectedActionSetActions.filter((e) => "skeleton" == e.type)
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
            for (let e of this.SelectedActionSetSkeletons)
              if (e.output && "none" != e.output) return !0;
            return !1;
          }
          ClearSelectedApp() {
            this.m_SelectedApp = void 0;
          }
          SetSelectedApp(e, t) {
            if (
              (console.log(`Setting selected app to app key: ${e}.`),
              null == this.m_SelectedApp || e != this.m_SelectedApp.key)
            ) {
              (this.m_rKnownFailedBindingUris = []),
                this.m_ControllerWatchers.clear();
              let o = h.s.GetApp(e);
              o &&
                ((this.m_SelectedApp = o),
                console.log(`Successfully set selected app to app key: ${e}.`),
                t || this.ReloadCurrentApp());
            }
          }
          ReloadCurrentApp() {
            return (0, i.sH)(this, void 0, void 0, function* () {
              (this.m_sLoadedBindingURI = void 0),
                (this.m_sSelectedActionSet = void 0),
                yield this.LoadActionManifest();
              let e = this.ActionSets;
              e.length > 0 &&
                (null == this.m_sSelectedActionSet ||
                  !this.m_SelectedAppActions.action_sets.hasOwnProperty(
                    this.m_sSelectedActionSet,
                  )) &&
                (this.m_sSelectedActionSet = e[0].name),
                yield this.ReloadControllerConfiguration();
            });
          }
          SetSelectedController(e, t) {
            if (e != this.m_sSelectedControllerType) {
              let o = u.W.GetControllerTypeInfo(e);
              o &&
                (this.m_ControllerWatchers.clear(),
                (this.m_sSelectedControllerType = o.controller_type),
                (this.m_bControllerTypeSelectedByUser = !0),
                (this.m_sLoadedBindingURI = void 0),
                t || this.ReloadControllerConfiguration());
            }
          }
          SetSelectedActionSet(e) {
            e != this.m_sSelectedActionSet && (this.m_sSelectedActionSet = e);
          }
          LocalizeStringForSelectedControllerType(e) {
            let t = this.SelectedControllerTypeInfo;
            return t && t.resource_root
              ? u.W.LocalizeDriverString(t.resource_root, e)
              : e;
          }
          LocalizePathNameForSelectedControllerType(e) {
            let t;
            return (
              [
                "/user/hand/secondary",
                "/user/hand/primary",
                "/user/hand/left",
                "/user/hand/right",
                "/user/head",
              ].forEach((o) => {
                0 != e.indexOf(o) || (t = o);
              }),
              t
                ? (0, c.we)("#" + t) +
                  " " +
                  this.LocalizeStringForSelectedControllerType(e.replace(t, ""))
                : e
            );
          }
          get SelectedControllerTypeLocalizedName() {
            let e = this.SelectedControllerTypeInfo;
            return e
              ? e.resource_root
                ? u.W.LocalizeDriverString(e.resource_root, e.controller_type)
                : e.controller_type
              : "";
          }
          RegisterBindingWatcher(e) {
            null == this.m_vecBindingSetWatchers.find((t) => t == e) &&
              this.m_vecBindingSetWatchers.push(e);
          }
          UnregisterBindingWatcher(e) {
            let t = this.m_vecBindingSetWatchers.indexOf(e);
            t >= 0 && this.m_vecBindingSetWatchers.splice(t, 1);
          }
          GetActionBinding(e, t) {
            if (null == this.m_ModifiedBindingSet) return;
            let o = this.m_ModifiedBindingSet;
            if (o.has(t)) {
              let n = o.get(t).sources;
              if (n) {
                let t = n.filter((t) => t.path == e);
                if (t) return t;
              }
            }
          }
          GetInputModesForSourceType(e, t) {
            let o = [];
            switch (e) {
              case "button":
                o = ["button", "-", "toggle_button", "scalar_constant"];
                break;
              case "trackpad":
                o = [
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
                o = [
                  "trigger",
                  "button",
                  "-",
                  "toggle_button",
                  "scalar_constant",
                ];
                break;
              case "joystick":
                o = [
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
                o = ["grab"];
                break;
              default:
                o = [];
            }
            return (
              t && (o.push("force_sensor"), "trigger" == e && o.push("grab")), o
            );
          }
          GetBooleanInputOptionsForMode(e) {
            switch (e) {
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
          GetActionBindingsOfType(e, t) {
            if (
              null == this.m_SelectedApp ||
              null == this.m_sSelectedActionSet ||
              null == this.m_SelectedAppActions.action_sets
            )
              return [];
            let o = this.SelectedActionSetDetails;
            if (!o) return [];
            if (null == o.actions) return [];
            let n = [];
            return (
              o.actions.forEach((o) => {
                let i = this.m_ModifiedAliases.get(o.name);
                if (o.type == e && (!i || !i.hidden || t))
                  if (i && i.alias_name) {
                    let e = Object.assign({}, o);
                    (e.localized_name = i.alias_name), n.push(e);
                  } else n.push(o);
              }),
              t ||
                this.m_ModifiedSimulatedActions.forEach((t) => {
                  if (this.GetActionTypeFromSimulatedActionType(t.type) == e) {
                    this.ComputeSimulatedActionPathFromId(t.id),
                      t.name ? t.name : ((0, c.we)("UnnamedSimAction"), t.id);
                    n.push(this.CreateActionDefinitionForSimulatedAction(t));
                  }
                }),
              n
            );
          }
          GetActionTypeFromSimulatedActionType(e) {
            switch (e) {
              case "fake_trigger":
              case "fake_trackpad_click":
                return "boolean";
              default:
                return "unknown";
            }
          }
          CreateActionDefinitionForSimulatedAction(e) {
            return {
              name: this.ComputeSimulatedActionPathFromId(e.id),
              localized_name: e.name
                ? e.name
                : (0, c.we)("UnnamedSimAction") + e.id,
              type: this.GetActionTypeFromSimulatedActionType(e.type),
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
          GetPoseAction(e) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return;
            let t = this.m_ModifiedBindingSet.get(
              this.m_sSelectedActionSet,
            ).poses;
            if (null == t) return;
            let o = t.filter((t) => t.output.toLowerCase() == e.toLowerCase());
            return o.length ? o : void 0;
          }
          GetPoseActionByPath(e) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return;
            let t = this.m_ModifiedBindingSet.get(
              this.m_sSelectedActionSet,
            ).poses;
            if (null == t) return;
            let o = t.filter((t) => t.path.toLowerCase() == e.toLowerCase());
            return o.length ? o : void 0;
          }
          GetHapticsAction(e) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return;
            let t = this.m_ModifiedBindingSet.get(
              this.m_sSelectedActionSet,
            ).haptics;
            if (null == t) return;
            let o = t.filter((t) => t.output.toLowerCase() == e.toLowerCase());
            return o.length ? o : void 0;
          }
          GetHapticsActionByPath(e) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return;
            let t = this.m_ModifiedBindingSet.get(
              this.m_sSelectedActionSet,
            ).haptics;
            if (null == t) return;
            let o = t.filter((t) => t.path.toLowerCase() == e.toLowerCase());
            return o.length ? o : void 0;
          }
          GetSkeletonAction(e) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return;
            let t = this.m_ModifiedBindingSet.get(
              this.m_sSelectedActionSet,
            ).skeleton;
            if (null == t) return;
            let o = t.filter((t) => t.output.toLowerCase() == e.toLowerCase());
            return o.length ? o : void 0;
          }
          GetSkeletonActionByPath(e) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return;
            let t = this.m_ModifiedBindingSet.get(
              this.m_sSelectedActionSet,
            ).skeleton;
            if (null == t) return;
            let o = t.filter((t) => t.path.toLowerCase() == e.toLowerCase());
            return o.length ? o : void 0;
          }
          NotifyWatchersOfChange() {
            console.log("Binding file changed"),
              this.m_vecBindingSetWatchers.forEach((e) => {
                e();
              }),
              this.AutosaveBinding();
          }
          SetActionForInputModeType(e, t, o, n, i) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return void console.error(
                "SetActionForInputModeType: Invalid action set specified",
              );
            class l {
              constructor(e, t) {
                (this.mode = e), (this.sourceIdx = t);
              }
            }
            let s = [];
            if (
              (this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .sources.forEach((t, o) => {
                  t.path == e && s.push(new l(t, o));
                }),
              s.length <= t)
            )
              return void console.warn(
                "Invalid mode index (",
                t,
                ") for path ",
                e,
              );
            let r = s[t].sourceIdx;
            if (r >= 0) {
              let e = this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
                .sources[r];
              if (e.inputs && e.inputs.has(o) && e.inputs.get(o).output == n)
                return void console.log(
                  "Trying to set new action to old action for type",
                  o,
                  " action is ",
                  n,
                );
              if (i.length > 0 && !i.find((t) => t == e.mode))
                return void console.log(
                  "Trying to set invalid input type of ",
                  o,
                  " for current mode ",
                  e.mode,
                );
              e.inputs || (e.inputs = a.observable.map()),
                "none" == n
                  ? e.inputs.has(o) && e.inputs.delete(o)
                  : e.inputs.has(o)
                    ? (e.inputs.get(o).output = n)
                    : e.inputs.set(o, { output: n }),
                this.NotifyWatchersOfChange();
            }
          }
          SetParameterForInputModeType(e, t, o, n, i) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return void console.error(
                "SetParameterForInputModeType: Invalid action set specified",
              );
            let l = [];
            if (
              (this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .sources.forEach((t, o) => {
                  t.path == e && l.push(o);
                }),
              l.length <= t)
            )
              return void console.warn(
                "Invalid mode index (",
                t,
                ") for path ",
                e,
              );
            let s = l[t];
            if (s >= 0) {
              let e = this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
                .sources[s];
              if (!e.inputs)
                return void console.log(
                  "SetParameterForInputModeType: Trying to set parameter for missing input type of ",
                  o,
                  " for current mode ",
                  e.mode,
                );
              e.parameters || (e.parameters = a.observable.map()),
                e.parameters.get(n) != i &&
                  (null == i ? e.parameters.delete(n) : e.parameters.set(n, i),
                  this.NotifyWatchersOfChange());
            }
          }
          SetParameterForPose(e, t, o) {
            e
              ? ((null == e ? void 0 : e.parameters) ||
                  (e.parameters = a.observable.map()),
                e.parameters.get(t) != o &&
                  (null == o || (Array.isArray(o) && o.every((e) => 0 === e))
                    ? e.parameters.delete(t)
                    : e.parameters.set(t, o),
                  this.NotifyWatchersOfChange()))
              : console.error(
                  "SetParameterForPose: Trying to set parameter for unknown pose.",
                );
          }
          GetParameterForPose(e, t) {
            return (null == e ? void 0 : e.parameters) &&
              (null == e ? void 0 : e.parameters.has(t))
              ? e.parameters.get(t)
              : null;
          }
          SetParameterForSkeleton(e, t, o) {
            e
              ? ((null == e ? void 0 : e.parameters) ||
                  (e.parameters = a.observable.map()),
                e.parameters.get(t) != o &&
                  (null == o || (Array.isArray(o) && o.every((e) => 0 === e))
                    ? e.parameters.delete(t)
                    : e.parameters.set(t, o),
                  this.NotifyWatchersOfChange()))
              : console.error(
                  "SetParameterForSkeleton: Trying to set parameter for unknown skeleton.",
                );
          }
          GetParameterForSkeleton(e, t) {
            return (null == e ? void 0 : e.parameters) &&
              (null == e ? void 0 : e.parameters.has(t))
              ? e.parameters.get(t)
              : null;
          }
          GetParameterForInputModeType(e, t, o, n) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return (
                console.error(
                  "SetParameterForInputModeType: Invalid action set specified",
                ),
                null
              );
            let i = [];
            if (
              (this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .sources.forEach((t, o) => {
                  t.path == e && i.push(o);
                }),
              i.length <= t)
            )
              return (
                console.warn("Invalid mode index (", t, ") for path ", e), null
              );
            let l = i[t];
            if (l >= 0) {
              let e = this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
                .sources[l];
              return e.inputs
                ? e.parameters && e.parameters.has(n)
                  ? e.parameters.get(n)
                  : null
                : (console.log(
                    "GetParameterForInputModeType: Trying to get parameter for missing input type of ",
                    o,
                    " for current mode ",
                    e.mode,
                  ),
                  null);
            }
            return null;
          }
          AddActionSetIfRequired() {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)) {
              let e = new f();
              (e.sources = []),
                this.m_ModifiedBindingSet.set(this.m_sSelectedActionSet, e);
            }
          }
          AddInputModeForSource(e, t) {
            this.AddActionSetIfRequired();
            let o = new g();
            return (
              (o.mode = t),
              (o.path = e),
              (o.inputs = a.observable.map()),
              this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .sources.push(o),
              this.NotifyWatchersOfChange(),
              this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .sources.filter((t) => t.path.toLowerCase() == e.toLowerCase())
                .length - 1
            );
          }
          DeleteInputModeForSource(e, t) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return void console.error(
                "AddInputModeForType: Invalid action set specified",
              );
            let o = [];
            if (
              (this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .sources.forEach((t, n) => {
                  t.path.toLowerCase() == e.toLowerCase() && o.push(n);
                }),
              o.length <= t)
            )
              return void console.warn(
                "Invalid mode index (",
                t,
                ") for path ",
                e,
              );
            let n = o[t];
            -1 != n
              ? (this.m_ModifiedBindingSet
                  .get(this.m_sSelectedActionSet)
                  .sources.splice(n, 1),
                this.NotifyWatchersOfChange())
              : console.error(
                  "DeleteInputModeForSource: Mode not found for source",
                );
          }
          SetInputModeForInputSource(e, t, o) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return void console.error(
                "SetActionForInputModeType: Invalid action set specified",
              );
            let n = [];
            if (
              (this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .sources.forEach((t, o) => {
                  t.path.toLowerCase() == e.toLowerCase() && n.push(o);
                }),
              n.length <= t)
            )
              return void console.warn(
                "Invalid mode index (",
                t,
                ") for path ",
                e,
              );
            let i = n[t];
            if (-1 != i) {
              let t = this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
                .sources[i];
              if (t.path == e) {
                if (t.mode == o)
                  return void console.log(
                    "Trying to set new input mode to old mode!",
                  );
                let n = JSON.parse((0, m.E)(t)),
                  l = new g();
                switch (
                  ((l.mode = o),
                  (l.path = e),
                  (l.inputs = a.observable.map()),
                  o)
                ) {
                  case "button":
                  case "toggle_button":
                    switch (n.mode) {
                      case "complex_button":
                        n.inputs.single &&
                          (l.inputs.set("single", n.inputs.single),
                          l.inputs.set("click", n.inputs.single)),
                          n.inputs.long && l.inputs.set("long", n.inputs.long),
                          n.inputs.press &&
                            l.inputs.set("press", n.inputs.press),
                          n.inputs.double &&
                            l.inputs.set("double", n.inputs.double),
                          n.inputs.touch &&
                            l.inputs.set("touch", n.inputs.touch);
                        break;
                      case "button":
                      case "toggle_button":
                      case "trackpad":
                      case "trigger":
                        n.inputs.click && l.inputs.set("click", n.inputs.click),
                          n.inputs.touch &&
                            l.inputs.set("touch", n.inputs.touch);
                    }
                    break;
                  case "complex_button":
                    switch (n.mode) {
                      case "toggle_button":
                      case "button":
                      case "trackpad":
                      case "trigger":
                        n.inputs.click &&
                          l.inputs.set("single", n.inputs.click);
                    }
                    break;
                  case "trackpad":
                    switch (n.mode) {
                      case "complex_button":
                        n.inputs.single &&
                          l.inputs.set("click", n.inputs.single);
                        break;
                      case "toggle_button":
                      case "button":
                      case "trigger":
                        n.inputs.click && l.inputs.set("click", n.inputs.click),
                          n.inputs.touch &&
                            l.inputs.set("touch", n.inputs.touch);
                    }
                    break;
                  case "trigger":
                    switch (n.mode) {
                      case "complex_button":
                        n.inputs.single &&
                          l.inputs.set("click", n.inputs.single);
                        break;
                      case "toggle_button":
                      case "trackpad":
                      case "button":
                        n.inputs.click && l.inputs.set("click", n.inputs.click),
                          n.inputs.touch &&
                            l.inputs.set("touch", n.inputs.touch);
                    }
                }
                return (
                  (this.m_ModifiedBindingSet.get(
                    this.m_sSelectedActionSet,
                  ).sources[i] = l),
                  void this.NotifyWatchersOfChange()
                );
              }
            } else
              console.error(
                "SetActionForInputModeType: trying to change a mode for a source that we don't have already",
              );
          }
          ClearModesForInputPath(e) {
            this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet)
              ? (this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).sources = this.m_ModifiedBindingSet
                  .get(this.m_sSelectedActionSet)
                  .sources.filter(
                    (t) => t.path.toLowerCase() != e.toLowerCase(),
                  ))
              : console.error(
                  "ClearModesForInputPath: Invalid action set specified",
                );
          }
          SetInputPathForPose(e, t) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return void console.error(
                "SetActionForPose: Invalid action set specified",
              );
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses ||
              (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses =
                []);
            let o = this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .poses.findIndex(
                (t) =>
                  t.path.toLowerCase() == e.path.toLowerCase() &&
                  t.output.toLowerCase() == e.output.toLowerCase(),
              );
            -1 == o &&
              ((o =
                this.m_ModifiedBindingSet
                  .get(this.m_sSelectedActionSet)
                  .poses.push(new S()) - 1),
              (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses[
                o
              ].output = e.output)),
              this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses[o]
                .path != t
                ? ((this.m_ModifiedBindingSet.get(
                    this.m_sSelectedActionSet,
                  ).poses[o].path = t),
                  this.NotifyWatchersOfChange())
                : console.log(
                    "Trying to set new pose action path to old action path!",
                  );
          }
          SetPoseForInputPath(e, t) {
            this.AddActionSetIfRequired(),
              this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses ||
                (this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).poses = []);
            let o = this.GetPoseForInputPath(e);
            if (!o) {
              const t =
                this.m_ModifiedBindingSet
                  .get(this.m_sSelectedActionSet)
                  .poses.push(new S()) - 1;
              (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses[
                t
              ].path = e),
                (o = this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
                  .poses[t]);
            }
            o.output != t
              ? ((o.output = t), this.NotifyWatchersOfChange())
              : console.log(
                  "Trying to set new pose action path to old action path!",
                );
          }
          GetPoseForInputPath(e) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return void console.error(
                "SetActionForPose: Invalid action set specified",
              );
            let t = this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .poses.findIndex((t) => t.path.toLowerCase() == e.toLowerCase());
            return -1 != t
              ? this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses[
                  t
                ]
              : void 0;
          }
          GetSkeletonForInputPath(e) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return void console.error(
                "SetActionForPose: Invalid action set specified",
              );
            let t = this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .skeleton.findIndex(
                (t) => t.path.toLowerCase() == e.toLowerCase(),
              );
            return -1 != t
              ? this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
                  .skeleton[t]
              : void 0;
          }
          GetFirstInputSourceOfType(e) {
            let t = this.SelectedControllerTypeInfo;
            if (null != t)
              for (let o of Object.keys(t.input_source)) {
                if (t.input_source[o].type == e) return o;
              }
          }
          AddDefaultPose(e, t) {
            if (
              (this.AddActionSetIfRequired(),
              this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).poses ||
                (this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).poses = []),
              null == this.SelectedControllerTypeInfo)
            )
              return;
            let o = this.GetFirstInputSourceOfType("pose");
            if (!o) return;
            let n = new (class {})();
            (n.output = e), (n.path = o), this.SetInputPathForPose(n, o);
          }
          SetInputPathForHaptics(e, t) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return void console.error(
                "SetInputPathForHaptics: Invalid action set specified",
              );
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics ||
              (this.m_ModifiedBindingSet.get(
                this.m_sSelectedActionSet,
              ).haptics = []);
            let o = this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .haptics.findIndex(
                (t) =>
                  t.path.toLowerCase() == e.path.toLowerCase() &&
                  t.output.toLowerCase() == e.output.toLowerCase(),
              );
            -1 == o &&
              ((o =
                this.m_ModifiedBindingSet
                  .get(this.m_sSelectedActionSet)
                  .haptics.push(new _()) - 1),
              (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics[
                o
              ].output = e.output)),
              this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics[
                o
              ].path != t
                ? ((this.m_ModifiedBindingSet.get(
                    this.m_sSelectedActionSet,
                  ).haptics[o].path = t),
                  this.NotifyWatchersOfChange())
                : console.log(
                    "Trying to set new haptics action path to old action path!",
                  );
          }
          SetHapticsForInputPath(e, t) {
            if (
              (this.AddActionSetIfRequired(),
              !this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            )
              return void console.error(
                "SetHapticsForInputPath: Invalid action set specified",
              );
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics ||
              (this.m_ModifiedBindingSet.get(
                this.m_sSelectedActionSet,
              ).haptics = []);
            let o = this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .haptics.findIndex(
                (t) => t.path.toLowerCase() == e.toLowerCase(),
              );
            -1 == o &&
              ((o =
                this.m_ModifiedBindingSet
                  .get(this.m_sSelectedActionSet)
                  .haptics.push(new S()) - 1),
              (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics[
                o
              ].path = e)),
              this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).haptics[
                o
              ].output != t
                ? ((this.m_ModifiedBindingSet.get(
                    this.m_sSelectedActionSet,
                  ).haptics[o].output = t),
                  this.NotifyWatchersOfChange())
                : console.log(
                    "Trying to set new haptic action path to old action path!",
                  );
          }
          AddDefaultHaptics(e, t) {
            this.AddActionSetIfRequired(),
              this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
                .haptics ||
                (this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).haptics = []);
            let o = this.GetFirstInputSourceOfType("haptic");
            if (!o) return;
            let n = t + o;
            let i = new (class {})();
            (i.output = e), (i.path = n), this.SetInputPathForHaptics(i, n);
          }
          SetInputPathForSkeleton(e, t) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return void console.error(
                "SetInputPathForSkeleton: Invalid action set specified",
              );
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton ||
              (this.m_ModifiedBindingSet.get(
                this.m_sSelectedActionSet,
              ).skeleton = []);
            let o = this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .skeleton.findIndex(
                (t) =>
                  t.path.toLowerCase() == e.path.toLowerCase() &&
                  t.output.toLowerCase() == e.output.toLowerCase(),
              );
            -1 == o &&
              ((o =
                this.m_ModifiedBindingSet
                  .get(this.m_sSelectedActionSet)
                  .skeleton.push(new C()) - 1),
              (this.m_ModifiedBindingSet.get(
                this.m_sSelectedActionSet,
              ).skeleton[o].output = e.output)),
              this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton[
                o
              ].path != t
                ? ((this.m_ModifiedBindingSet.get(
                    this.m_sSelectedActionSet,
                  ).skeleton[o].path = t),
                  this.NotifyWatchersOfChange())
                : console.log(
                    "Trying to set new skeleton action path to old action path!",
                  );
          }
          SetSkeletonForInputPath(e, t) {
            if (
              (this.AddActionSetIfRequired(),
              !this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
            )
              return void console.error(
                "SetSkeletonForInputPath: Invalid action set specified",
              );
            this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton ||
              (this.m_ModifiedBindingSet.get(
                this.m_sSelectedActionSet,
              ).skeleton = []);
            let o = this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .skeleton.findIndex(
                (t) => t.path.toLowerCase() == e.toLowerCase(),
              );
            -1 == o &&
              ((o =
                this.m_ModifiedBindingSet
                  .get(this.m_sSelectedActionSet)
                  .skeleton.push(new S()) - 1),
              (this.m_ModifiedBindingSet.get(
                this.m_sSelectedActionSet,
              ).skeleton[o].path = e)),
              this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).skeleton[
                o
              ].output != t
                ? ((this.m_ModifiedBindingSet.get(
                    this.m_sSelectedActionSet,
                  ).skeleton[o].output = t),
                  this.NotifyWatchersOfChange())
                : console.log(
                    "Trying to set new skeleton action path to old action path!",
                  );
          }
          AddDefaultSkeleton(e, t) {
            this.AddActionSetIfRequired(),
              this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
                .skeleton ||
                (this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).skeleton = []);
            let o = this.GetFirstInputSourceOfType("skeleton");
            if (!o) return;
            let n = t + o;
            let i = new (class {})();
            (i.output = e), (i.path = n), this.SetInputPathForSkeleton(i, n);
          }
          SetActionForChord(e, t) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return void console.error(
                "SetActionForChord: Invalid action set specified",
              );
            let o = this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .chords.findIndex((t) => t == e);
            -1 != o
              ? this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[
                  o
                ].output != t
                ? ((this.m_ModifiedBindingSet.get(
                    this.m_sSelectedActionSet,
                  ).chords[o].output = t),
                  this.NotifyWatchersOfChange())
                : console.log("Trying to set new chord action to old action!")
              : console.error(
                  "SetActionForChord: Invalid chord  specified ",
                  e,
                );
          }
          DeleteChord(e) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return void console.error(
                "DeleteChordForSource: Invalid action set specified",
              );
            let t = this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .chords.findIndex((t) => t == e);
            -1 != t
              ? (this.m_ModifiedBindingSet
                  .get(this.m_sSelectedActionSet)
                  .chords.splice(t, 1),
                this.NotifyWatchersOfChange())
              : console.error(
                  "DeleteChordForSource: Invalid chord  specified ",
                  e,
                );
          }
          AddChord() {
            this.AddActionSetIfRequired(),
              this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords ||
                (this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).chords = []);
            this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .chords.push(new y());
            this.NotifyWatchersOfChange();
          }
          DeleteSourceFromChord(e, t) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return void console.error(
                "DeleteSourceFromChord: Invalid action set specified",
              );
            let o = this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .chords.findIndex((t) => t == e);
            if (-1 != o) {
              let e = this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .chords[o].inputs.findIndex((e) => e[0] == t);
              -1 != e &&
                (this.m_ModifiedBindingSet
                  .get(this.m_sSelectedActionSet)
                  .chords[o].inputs.splice(e, 1),
                this.NotifyWatchersOfChange());
            } else
              console.error(
                "DeleteSourceFromChord: Invalid chord  specified ",
                e,
              );
          }
          SetInputTypeForChord(e, t, o) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return void console.error(
                "SetInputsForChord: Invalid action set specified",
              );
            let n = this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .chords.findIndex((t) => t == e);
            if (-1 != n) {
              let e = this.m_ModifiedBindingSet
                .get(this.m_sSelectedActionSet)
                .chords[n].inputs.findIndex((e) => e[0] == t);
              if (-1 == e)
                return void console.log(
                  "Invalid bounds for new input chord, trying to add type without source",
                );
              if (
                this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[
                  n
                ].inputs[e][1] == o
              )
                return void console.log(
                  "Trying to set new chord inputs to old inputs!",
                );
              (this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[
                n
              ].inputs[e][1] = o),
                this.NotifyWatchersOfChange();
            } else
              console.error("SetInputsForChord: Invalid chord  specified ", e);
          }
          SetInputSourceForChord(e, t, o) {
            if (!this.m_ModifiedBindingSet.has(this.m_sSelectedActionSet))
              return void console.error(
                "SetInputsForChord: Invalid action set specified",
              );
            let n = this.m_ModifiedBindingSet
              .get(this.m_sSelectedActionSet)
              .chords.findIndex((t) => t == e);
            if (-1 != n) {
              let e = this.GetActionBinding(t, this.SelectedActionSet);
              if (!e)
                return void console.log(
                  "Failed to find action binding for path",
                );
              let i = "click";
              if (
                (e.length &&
                  (i = this.GetBooleanInputOptionsForMode(e[0].mode)[0]),
                null == o)
              )
                this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet).chords[
                  n
                ].inputs ||
                  (this.m_ModifiedBindingSet.get(
                    this.m_sSelectedActionSet,
                  ).chords[n].inputs = new Array()),
                  this.m_ModifiedBindingSet
                    .get(this.m_sSelectedActionSet)
                    .chords[n].inputs.push([t, i]);
              else {
                let e = this.m_ModifiedBindingSet
                  .get(this.m_sSelectedActionSet)
                  .chords[n].inputs.findIndex((e) => e[0] == o);
                if (-1 == e)
                  return void console.log(
                    "Trying to set replace chord input path when we didn't have that path!",
                  );
                if (
                  this.m_ModifiedBindingSet.get(this.m_sSelectedActionSet)
                    .chords[n].inputs[e][0] == t
                )
                  return void console.log(
                    "Trying to set new chord inputs to old inputs!",
                  );
                (this.m_ModifiedBindingSet.get(
                  this.m_sSelectedActionSet,
                ).chords[n].inputs[e][0] = t),
                  (this.m_ModifiedBindingSet.get(
                    this.m_sSelectedActionSet,
                  ).chords[n].inputs[e][1] = i);
              }
              this.NotifyWatchersOfChange();
            } else
              console.error("SetInputsForChord: Invalid chord  specified ", e);
          }
          LoadActionManifest() {
            return (0, i.sH)(this, void 0, void 0, function* () {
              return new Promise((e, t) => {
                B(this.m_SelectedApp.key).then((t) => {
                  null == t.error
                    ? ((0, a.runInAction)(() => {
                        this.m_SelectedAppActions = t;
                      }),
                      null == this.m_sLoadedBindingURI &&
                        t.current_binding_url.hasOwnProperty(
                          this.m_sSelectedControllerType,
                        ) &&
                        (this.m_sLoadedBindingURI =
                          t.current_binding_url[
                            this.m_sSelectedControllerType
                          ]))
                    : ((0, a.runInAction)(() => {
                        (this.m_SelectedAppActions = void 0),
                          (this.m_sLoadedBindingURI = void 0);
                      }),
                      p.n.SetBindingListError(
                        (0, c.we)("#ActionManifestError_UnknownError"),
                        !1,
                      )),
                    e();
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
            let e = u.W.FindRootPathForControllerType(
              this.m_sSelectedControllerType,
            );
            return (
              "/user/treadmill" == e ||
              "/user/gamepad" == e ||
              "/user/stylus" == e
            );
          }
          ReloadControllerConfiguration() {
            return (0, i.sH)(this, void 0, void 0, function* () {
              if (
                !(
                  this.m_SelectedAppActions &&
                  this.m_sLoadedBindingURI &&
                  this.SelectedApp &&
                  this.SelectedControllerTypeInfo
                )
              )
                return;
              let e = yield I(
                this.m_SelectedApp.key,
                this.SelectedControllerTypeInfo.controller_type,
                this.m_sLoadedBindingURI,
              );
              this.OnBindingConfigLoaded(e);
            });
          }
          UpdateTrackerBindings() {
            return (0, i.sH)(this, void 0, void 0, function* () {
              let e = yield this.GetTrackerBindings();
              this.m_TrackerBindingSetup = e;
            });
          }
          get TrackerBindings() {
            return (
              null == this.m_TrackerBindingSetup &&
                this.UpdateTrackerBindings(),
              this.m_TrackerBindingSetup
            );
          }
          GetTrackerBindings() {
            return (0, i.sH)(this, void 0, void 0, function* () {
              return new Promise(function (e, t) {
                r()
                  .get("/input/gettrackerbindings.json")
                  .then((t) => {
                    e(t.data);
                  })
                  .catch((e) => {
                    t(e);
                  });
              });
            });
          }
          GetTrackerBinding(e) {
            for (let t of this.m_TrackerBindingSetup.trackers)
              if (t.device_path_string == e) return t;
            return null;
          }
          SetTrackerBinding(e, t, o) {
            let n = { device_path: e, role: t, controller_role: o };
            const i = (0, m.E)(n);
            console.log("Saving tracker binding " + e),
              r()
                .post("/input/settrackerbinding.action", i)
                .then((e) => {
                  console.log("SetTrackerBinding response: ", e.data),
                    this.UpdateTrackerBindings();
                })
                .catch((e) => {});
          }
          PulseHaptics(e) {
            let t = { path_handle: e };
            const o = (0, m.E)(t);
            r()
              .post("/input/pulsehaptics.action", o)
              .then((e) => {
                console.log("PulseHaptics response: ", e.data);
              })
              .catch((e) => {});
          }
          get KnownControllerTypes() {
            let e = [];
            return (
              u.W.KnownControllerTypes.forEach((t) => {
                e.push(t);
              }),
              e
            );
          }
          PreserveCurrentBindingForUpgrade() {
            let e = p.n.CurrentBinding;
            return e && "autosave" == e.type
              ? this.SaveCurrentBinding(
                  (0, c.we)("#PreservedAutosaveName"),
                  "",
                  "personal",
                )
              : Promise.resolve(null);
          }
          GetDefaultBindingNameForSaveType(e) {
            let t = k.SelectedControllerTypeInfo,
              o = u.W.LocalizeControllerString(t, t ? t.controller_type : "");
            switch (e) {
              default:
              case "autosave":
                return (0, c.we)(
                  "#BindingUI_SaveDefaultName",
                  this.m_SelectedApp.name,
                  o,
                );
              case "personal":
                return (0, c.we)(
                  "#BindingUI_SaveDefaultName_Personal",
                  this.m_SelectedApp.name,
                  o,
                );
              case "public":
                return (0, c.we)(
                  "#BindingUI_SaveDefaultName_Public",
                  u.W.CurrentUserPersonaName,
                );
              case "replace_default":
                return k.ConfigName;
            }
          }
          AutosaveBinding() {
            return (0, i.sH)(this, void 0, void 0, function* () {
              if (this.m_bIsSaving)
                return (
                  console.log("Currently saving, adding a pending save."),
                  void (this.m_bHasPendingSave = !0)
                );
              this.m_sName ||
                (this.m_sName =
                  this.GetDefaultBindingNameForSaveType("autosave"));
              try {
                const e = yield this.SaveCurrentBinding(
                  this.m_sName,
                  this.m_sDescription,
                  "autosave",
                );
                k.SetBindingURL(e.uri);
              } finally {
                (this.m_bIsSaving = !1),
                  this.m_bHasPendingSave &&
                    ((this.m_bHasPendingSave = !1), this.AutosaveBinding());
              }
            });
          }
          SaveCurrentBinding(e, t, o) {
            return (0, i.sH)(this, void 0, void 0, function* () {
              this.HasUnboundActions,
                (this.m_sName = e),
                (this.m_sDescription = t);
              let n = this.m_sInteractionProfile.trim(),
                i = {
                  app_key: this.SelectedApp,
                  controller_type:
                    this.SelectedControllerTypeInfo.controller_type,
                  save_type: o,
                };
              i.binding = {
                name: e,
                description: t,
                action_manifest_version: this.m_SelectedAppActions.version,
                interaction_profile: n,
                category: this.m_SelectedAppActions.category,
                controller_type:
                  this.SelectedControllerTypeInfo.controller_type,
                bindings: this.m_ModifiedBindingSet,
                options: this.m_ModifiedOptions,
                alias_info: this.m_ModifiedAliases,
                simulated_actions: Array.from(
                  this.m_ModifiedSimulatedActions.values(),
                ),
                app_key: this.SelectedApp,
              };
              const l = (0, m.E)(i);
              return (
                console.log(
                  "Saving binding " +
                    e +
                    " for app '" +
                    this.SelectedApp +
                    "'.",
                ),
                new Promise((e, t) => {
                  let n = new M(o, e, t);
                  this.m_OutstandingSaveBindingCalls.push(n),
                    r()
                      .post("/input/savebinding.action", l)
                      .then((e) => {
                        e.data.error
                          ? (console.log(
                              "SaveCurrentBinding failed:",
                              e.data.error,
                            ),
                            t(e.data.error))
                          : console.log("SaveCurrentBinding Successful");
                      })
                      .catch((e) => {
                        t(e);
                      });
                })
              );
            });
          }
          PublishBindingToWorkshop(e) {
            return (0, i.sH)(this, void 0, void 0, function* () {
              let t = { app_key: this.SelectedApp, description: e };
              t.binding = {
                bindings: this.m_ModifiedBindingSet,
                controller_type:
                  this.SelectedControllerTypeInfo.controller_type,
              };
              const o = (0, m.E)(t);
              yield new Promise(function (e, t) {
                r()
                  .post("/input/submitworkshopbinding.action", o)
                  .then((t) => {
                    console.log("PublishBindingToWorkshop response: ", t), e();
                  })
                  .catch((e) => {
                    t(e);
                  });
              });
            });
          }
          OnWebSocketOpen(e) {
            console.log("Websocket connected"),
              (this.m_eWebSocketState = n.eWebSocketState_Connected),
              this.WebSocketSend("input_open"),
              this.m_timerWebSocket && clearTimeout(this.m_timerWebSocket),
              window.addEventListener("beforeunload", () => {
                this.WebSocketSend("input_close");
              });
          }
          OnWebSocketClose(e) {
            console.log("Websocket closed ", e),
              (this.m_eWebSocketState = n.eWebSocketState_Disconnected),
              this.OpenWebSocketToHost();
          }
          WebSocketSend(e) {
            null != this.m_wsWebSocketToServer &&
              1 == this.m_wsWebSocketToServer.readyState &&
              this.m_wsWebSocketToServer.send(e);
          }
          OnWorkshopUploadComplete(e) {
            if (
              (console.log("OnWorkshopUploadComplete: ", e),
              e.app_key != k.SelectedApp)
            )
              return void console.log(
                `Ignoring binding load for an app we aren't viewing. Pending: ${e.app_key}. Current: ${k.SelectedApp}.`,
              );
            if (this.m_OutstandingSaveBindingCalls.length <= 0)
              return void console.log(
                "Got workshop upload result without pending resolve",
              );
            let t = this.m_OutstandingSaveBindingCalls.shift();
            e.success ? (t.resolve(e), this.LoadActionManifest()) : t.reject(e);
          }
          OnPendingFileSaved(e) {
            let t = e.success ? "Success" : e.error;
            console.log(`OnPendingFileSaved: ${t}. ${e}`),
              e.app_key == k.SelectedApp ||
                console.log(
                  `Ignoring pending file saved for an app we aren't viewing. Pending: ${e.app_key}. Current: ${k.SelectedApp}.`,
                );
          }
          get SaveNoticeText() {
            if (this.m_OutstandingSaveBindingCalls.length > 0) {
              let e = !1;
              return (
                this.m_OutstandingSaveBindingCalls.forEach((t) => {
                  ("personal" != t.SaveType && "public" != t.SaveType) ||
                    (e = !0);
                }),
                e ? "#SaveNotice_Uploading" : "#SaveNotice_Saving"
              );
            }
          }
          OnBindingConfigLoaded(e) {
            if (
              (console.log(
                "OnBindingConfigLoaded: ",
                e,
                " selected action set:",
                this.m_sSelectedActionSet,
              ),
              e.app_key != k.SelectedApp)
            )
              return void console.log(
                `Ignoring binding load for an app we aren't viewing. Pending: ${e.app_key}. Current: ${k.SelectedApp}.`,
              );
            if (e.uri != this.m_sLoadedBindingURI)
              return void console.log(
                `Ignoring binding load for an config url ${e.uri} we aren't viewing ${this.m_sLoadedBindingURI}`,
              );
            this.m_ControllerWatchers.clear(),
              (this.m_LoadedBinding = e),
              (this.m_ModifiedBindingSet = a.observable.map());
            let t = (0, c.we)("#unknown_application"),
              o = h.s.GetApp(k.SelectedApp);
            if (
              (o && (t = o.name),
              (this.m_sName = ""),
              (this.m_sDescription = ""),
              (this.m_sInteractionProfile = " "),
              e.binding_config &&
                (e.binding_config.hasOwnProperty("name") &&
                  (this.m_sName = e.binding_config.name),
                e.binding_config.hasOwnProperty("description") &&
                  (this.m_sDescription = e.binding_config.description),
                e.binding_config.hasOwnProperty("interaction_profile") &&
                  (this.m_sInteractionProfile =
                    e.binding_config.interaction_profile)),
              "" == this.m_sName)
            ) {
              let e = k.SelectedControllerTypeInfo,
                o = u.W.LocalizeControllerString(e, e ? e.controller_type : "");
              this.m_sName = (0, c.we)("#BindingUI_SaveDefaultName", t, o);
            }
            e.binding_config &&
              e.binding_config.bindings &&
              (Object.keys(e.binding_config.bindings).forEach((t) => {
                var o, n, i;
                let l = new f();
                (l.chords = e.binding_config.bindings[t].chords),
                  (l.poses = []),
                  null === (o = e.binding_config.bindings[t].poses) ||
                    void 0 === o ||
                    o.forEach((e) => {
                      let t = new S();
                      (t.output = e.output),
                        (t.path = e.path),
                        null != e.parameters &&
                          Object.keys(e.parameters).length > 0 &&
                          ((t.parameters = a.observable.map()),
                          e.hasOwnProperty("parameters") &&
                            Object.keys(e.parameters).forEach((o) => {
                              t.parameters.set(o, e.parameters[o]);
                            })),
                        l.poses.push(t);
                    }),
                  (l.haptics = e.binding_config.bindings[t].haptics),
                  (l.skeleton = []),
                  null === (n = e.binding_config.bindings[t].skeleton) ||
                    void 0 === n ||
                    n.forEach((e) => {
                      let t = new C();
                      (t.output = e.output),
                        (t.path = e.path),
                        null != e.parameters &&
                          Object.keys(e.parameters).length > 0 &&
                          ((t.parameters = a.observable.map()),
                          e.hasOwnProperty("parameters") &&
                            Object.keys(e.parameters).forEach((o) => {
                              t.parameters.set(o, e.parameters[o]);
                            })),
                        l.skeleton.push(t);
                    }),
                  (l.sources = []),
                  null === (i = e.binding_config.bindings[t].sources) ||
                    void 0 === i ||
                    i.forEach((e) => {
                      let t = new g();
                      (t.mode = e.mode),
                        (t.path = e.path),
                        (t.inputs = a.observable.map()),
                        e.hasOwnProperty("inputs") &&
                          Object.keys(e.inputs).forEach((o) => {
                            t.inputs.set(o, e.inputs[o]);
                          }),
                        null != e.parameters &&
                          Object.keys(e.parameters).length > 0 &&
                          ((t.parameters = a.observable.map()),
                          e.hasOwnProperty("parameters") &&
                            Object.keys(e.parameters).forEach((o) => {
                              t.parameters.set(o, e.parameters[o]);
                            })),
                        l.sources.push(t);
                    }),
                  this.m_ModifiedBindingSet.set(t, l);
              }),
              this.m_ModifiedOptions.clear(),
              e.binding_config.options &&
                (Object.keys(e.binding_config.options).forEach((t) => {
                  this.m_ModifiedOptions.set(t, e.binding_config.options[t]);
                }),
                this.ManifestOptions.forEach((e) => {
                  this.m_ModifiedOptions.has(e.name) ||
                    this.m_ModifiedOptions.set(e.name, e.default);
                })),
              this.m_ModifiedAliases.clear(),
              e.binding_config.alias_info &&
                Object.keys(e.binding_config.alias_info).forEach((t) => {
                  this.m_ModifiedAliases.set(t, e.binding_config.alias_info[t]);
                }),
              this.m_ModifiedSimulatedActions.clear(),
              e.binding_config.simulated_actions &&
                e.binding_config.simulated_actions.forEach((e) => {
                  let t = this.ComputeSimulatedActionPathFromId(e.id);
                  this.m_ModifiedSimulatedActions.set(t, e),
                    e.id >= this.m_nNextSimulatedActionId &&
                      (this.m_nNextSimulatedActionId = e.id + 1);
                })),
              this.m_vecBindingSetWatchers.forEach((e) => {
                e();
              });
          }
          QueryBindingList(e, t) {
            return (
              null != this.m_OutstandingQueryResolve &&
                console.warn(
                  "About to start second binding list query when one is already pending",
                  this.m_OutstandingQueryResolve,
                ),
              new Promise((o, n) => {
                (this.m_OutstandingQueryResolve = o),
                  r()
                    .get(
                      `/input/queryworkshopbindings.json?app_key=${e}&controller_type=${t}`,
                    )
                    .then((e) => {
                      console.log("QueryBindingList: ajax request successful");
                    })
                    .catch((e) => {
                      n(e);
                    });
              })
            );
          }
          DeleteBinding(e) {
            null != this.m_OutstandingDeleteResolve &&
              console.warn(
                "About to start second binding delete when one is already pending",
                this.m_OutstandingDeleteResolve,
              );
            let t = { url: e };
            const o = (0, m.E)(t);
            return new Promise((t, n) => {
              (this.m_OutstandingDeleteResolve = t),
                (this.m_sOutstandingDeleteURL = e),
                r()
                  .post("/input/deleteconfig.action", o)
                  .then((e) => {
                    console.log("Delete ajax request successful");
                  })
                  .catch((e) => {
                    n(e);
                  });
            });
          }
          OnBindingDeleteComplete(e) {
            null != this.m_OutstandingDeleteResolve
              ? e.url == this.m_sOutstandingDeleteURL &&
                ((this.m_sOutstandingDeleteURL = void 0),
                this.m_OutstandingDeleteResolve(e),
                (this.m_OutstandingDeleteResolve = void 0),
                console.log("OnDeleteComplete: ", e))
              : console.warn(
                  "Missing outstanding query resolve for binding delete",
                );
          }
          ShouldShowBindingFailureForControllerType(e) {
            if (null == e || "" == e) return !1;
            let t = u.W.GetControllerTypeInfo(e);
            return !!t && !!t.should_show_binding_errors;
          }
          HasBindingUriFailedToLoad(e) {
            return -1 != this.m_rKnownFailedBindingUris.indexOf(e);
          }
          RememberFailedLoadUri(e) {
            this.m_rKnownFailedBindingUris.push(e);
          }
          OnQueryResults(e) {
            console.log("OnQueryResults: ", e),
              null != this.m_OutstandingQueryResolve
                ? (this.m_OutstandingQueryResolve(e),
                  (this.m_OutstandingQueryResolve = void 0))
                : console.warn(
                    "Missing outstanding query resolve for binding query",
                  );
          }
          SelectConfig(e, t, o) {
            if (
              ((this.m_sLoadedBindingURI = o),
              console.log("Selecting config " + o + " for app " + e),
              this.SelectedBindingURL == o)
            )
              return (
                console.debug("Selecting the config we already have set", o),
                new Promise((e, t) => {
                  e();
                })
              );
            let n = { app_key: e, controller_type: t, url: o };
            const i = (0, m.E)(n);
            return (
              null != this.m_OutstandingSelectConfigResolve &&
                console.warn(
                  "About to start second select config when one is already pending",
                  this.m_OutstandingSelectConfigResolve,
                ),
              new Promise((e, t) => {
                (this.m_OutstandingSelectConfigResolve = e),
                  r()
                    .post("/input/selectconfig.action", i)
                    .then((e) => {
                      console.log("selectconfig ajax request successful");
                    })
                    .catch((e) => {
                      t(e);
                    });
              })
            );
          }
          OnSelectConfigComplete(e) {
            null != this.m_OutstandingSelectConfigResolve
              ? (this.m_OutstandingSelectConfigResolve(),
                (this.m_OutstandingSelectConfigResolve = void 0),
                console.log("OnSelectConfigComplete: ", e))
              : e.error_to_show
                ? p.n.ShowBindingList(e.error_to_show)
                : console.warn(
                    "Missing outstanding query resolve for select config",
                  );
          }
          OnTrackersBindingChanged(e) {
            this.GetTrackerBindings().then((e) => {
              this.m_TrackerBindingSetup = e;
            });
          }
          OnActionManifestReloaded(e) {
            e.app_key == k.SelectedApp && this.ReloadCurrentApp();
          }
          SetBindingURL(e) {
            this.m_sLoadedBindingURI = e;
          }
          OnActionBindingsReloaded(e) {
            this.RefreshInputState();
          }
          GetControllerWatcherForSourceFromControllerType(e, t, o, n) {
            let i = "" + e.controller_type + t + o + n;
            if (!this.m_ControllerWatchers.has(i)) {
              let l = "";
              if ("controller_handed" == e.input_bindingui_mode)
                switch (t) {
                  case 1:
                    l = "/user/hand/left";
                    break;
                  case 2:
                    l = "/user/hand/right";
                }
              else {
                let t = u.W.ConnectedDevices.find(
                  (t) => t.controller_type == e.controller_type,
                );
                t && t.root_path
                  ? (l = t.root_path)
                  : console.log(
                      "Unable to find device path for controller type ",
                      e,
                    );
              }
              this.m_ControllerWatchers.set(i, new E(l, e, t, o, n));
            }
            return this.m_ControllerWatchers.get(i);
          }
          OnWebSocketMessage(e) {
            let t = JSON.parse(e.data);
            if ("jsonid" in t && "vr_input_get_notifications" == t.jsonid)
              for (let e in t.notifications) {
                let o = t.notifications[e];
                switch (o.type) {
                  case "pending_file_saved":
                    this.OnPendingFileSaved(o);
                    break;
                  case "workshop_upload_complete":
                    this.OnWorkshopUploadComplete(o);
                    break;
                  case "query_results":
                    this.OnQueryResults(o);
                    break;
                  case "action_bindings_reloaded":
                    this.OnActionBindingsReloaded(o);
                    break;
                  case "delete_binding_complete":
                    this.OnBindingDeleteComplete(o);
                    break;
                  case "select_config_complete":
                    this.OnSelectConfigComplete(o);
                    break;
                  case "trackers_binding_changed":
                    this.OnTrackersBindingChanged(o);
                    break;
                  case "action_manifest_reloaded":
                    this.OnActionManifestReloaded(o);
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
              : (0, m.E)(this.m_ModifiedBindingSet, null, "\t");
          }
          get BindingSubscriptionChangedCanary() {
            return this.m_nBindingSubscriptionChangedCanary;
          }
          GetInteractionProfile() {
            return this.m_sInteractionProfile;
          }
          SetInteractionProfile(e) {
            let t = this.m_sInteractionProfile != e;
            (this.m_sInteractionProfile = e),
              t && this.NotifyWatchersOfChange();
          }
          GetInteractionProfiles() {
            return this.m_SelectedAppActions.interaction_profiles;
          }
          GetSimulatedControllerProperties() {
            var e;
            const t =
              null !== (e = this.GetOptionValue("simulated_controller_type")) &&
              void 0 !== e
                ? e
                : "";
            return {
              strSimulatedControllerType: t,
              strLocalizedSimulatedControllerType:
                this.LocalizeStringForSelectedControllerType(t),
              bIsSimulatingController: t && "none" != t,
              bIsSimulatingHMD: this.GetOptionValue("simulate_hmd"),
              bIsSimulatingRenderModel: this.GetOptionValue(
                "simulate_rendermodel",
              ),
            };
          }
        }
        (0, i.Cg)([a.observable], O.prototype, "m_eWebSocketState", void 0),
          (0, i.Cg)([a.observable], O.prototype, "m_sLoadedBindingURI", void 0),
          (0, i.Cg)([a.observable], O.prototype, "m_LoadedBinding", void 0),
          (0, i.Cg)(
            [a.observable],
            O.prototype,
            "m_ModifiedBindingSet",
            void 0,
          ),
          (0, i.Cg)([a.observable], O.prototype, "m_ModifiedOptions", void 0),
          (0, i.Cg)([a.observable], O.prototype, "m_ModifiedAliases", void 0),
          (0, i.Cg)([a.observable], O.prototype, "m_sName", void 0),
          (0, i.Cg)([a.observable], O.prototype, "m_sDescription", void 0),
          (0, i.Cg)(
            [a.observable],
            O.prototype,
            "m_sInteractionProfile",
            void 0,
          ),
          (0, i.Cg)([a.observable], O.prototype, "m_SelectedApp", void 0),
          (0, i.Cg)(
            [a.observable],
            O.prototype,
            "m_SelectedAppActions",
            void 0,
          ),
          (0, i.Cg)(
            [a.observable],
            O.prototype,
            "m_sSelectedActionSet",
            void 0,
          ),
          (0, i.Cg)(
            [a.observable],
            O.prototype,
            "m_sSelectedControllerType",
            void 0,
          ),
          (0, i.Cg)(
            [a.observable],
            O.prototype,
            "m_TrackerBindingSetup",
            void 0,
          ),
          (0, i.Cg)(
            [a.observable],
            O.prototype,
            "m_OutstandingSaveBindingCalls",
            void 0,
          ),
          (0, i.Cg)(
            [a.observable],
            O.prototype,
            "m_ModifiedSimulatedActions",
            void 0,
          ),
          (0, i.Cg)(
            [a.observable],
            O.prototype,
            "m_nBindingSubscriptionChangedCanary",
            void 0,
          ),
          (0, i.Cg)([l.o], O.prototype, "OpenWebSocketToHost", null),
          (0, i.Cg)([a.computed], O.prototype, "SteamVRUnavailable", null),
          (0, i.Cg)([a.computed], O.prototype, "ActionSets", null),
          (0, i.Cg)([a.computed], O.prototype, "ManifestOptions", null),
          (0, i.Cg)(
            [a.computed],
            O.prototype,
            "SecondaryControllerOptions",
            null,
          ),
          (0, i.Cg)([a.action], O.prototype, "SetOptionValue", null),
          (0, i.Cg)([a.action], O.prototype, "AddSimulatedAction", null),
          (0, i.Cg)(
            [a.action],
            O.prototype,
            "DeleteSimulatedActionByPath",
            null,
          ),
          (0, i.Cg)([a.computed], O.prototype, "SelectedApp", null),
          (0, i.Cg)([a.computed], O.prototype, "SelectedAppActions", null),
          (0, i.Cg)(
            [a.computed],
            O.prototype,
            "CurrentAppCanAccessPrivateInputs",
            null,
          ),
          (0, i.Cg)(
            [a.computed],
            O.prototype,
            "SelectedControllerTypeInfo",
            null,
          ),
          (0, i.Cg)([a.computed], O.prototype, "CurrentBindingSaveType", null),
          (0, i.Cg)(
            [a.computed],
            O.prototype,
            "CurrentBindingActionManifestVersion",
            null,
          ),
          (0, i.Cg)([a.computed], O.prototype, "SelectedActionSet", null),
          (0, i.Cg)(
            [a.computed],
            O.prototype,
            "SelectedActionSetDetails",
            null,
          ),
          (0, i.Cg)(
            [a.computed],
            O.prototype,
            "SelectedActionSetActions",
            null,
          ),
          (0, i.Cg)([l.o], O.prototype, "GetSelectedAppDefaultBinding", null),
          (0, i.Cg)([l.o], O.prototype, "GetActionByName", null),
          (0, i.Cg)([a.computed], O.prototype, "SelectedActionSetPoses", null),
          (0, i.Cg)(
            [a.computed],
            O.prototype,
            "SelectedActionSetHaptics",
            null,
          ),
          (0, i.Cg)(
            [a.computed],
            O.prototype,
            "SelectedActionSetSkeletons",
            null,
          ),
          (0, i.Cg)([a.computed], O.prototype, "SelectedActionSetChords", null),
          (0, i.Cg)(
            [a.computed],
            O.prototype,
            "SelectedActionSetChordCount",
            null,
          ),
          (0, i.Cg)(
            [a.computed],
            O.prototype,
            "SelectedActionSetSources",
            null,
          ),
          (0, i.Cg)(
            [a.computed],
            O.prototype,
            "BSelectedActionSetHasPoses",
            null,
          ),
          (0, i.Cg)(
            [a.computed],
            O.prototype,
            "BSelectedActionSetHasBoundPoses",
            null,
          ),
          (0, i.Cg)(
            [a.computed],
            O.prototype,
            "BSelectedActionSetHasHaptics",
            null,
          ),
          (0, i.Cg)(
            [a.computed],
            O.prototype,
            "BSelectedActionSetHasBoundHaptics",
            null,
          ),
          (0, i.Cg)(
            [a.computed],
            O.prototype,
            "BSelectedActionSetHasSkeletons",
            null,
          ),
          (0, i.Cg)(
            [a.computed],
            O.prototype,
            "BSelectedActionSetHasBoundSkeletons",
            null,
          ),
          (0, i.Cg)([a.action], O.prototype, "ClearSelectedApp", null),
          (0, i.Cg)([a.action], O.prototype, "SetSelectedApp", null),
          (0, i.Cg)([a.action], O.prototype, "SetSelectedController", null),
          (0, i.Cg)([a.action], O.prototype, "SetSelectedActionSet", null),
          (0, i.Cg)(
            [l.o],
            O.prototype,
            "LocalizeStringForSelectedControllerType",
            null,
          ),
          (0, i.Cg)(
            [l.o],
            O.prototype,
            "LocalizePathNameForSelectedControllerType",
            null,
          ),
          (0, i.Cg)(
            [a.computed],
            O.prototype,
            "SelectedControllerTypeLocalizedName",
            null,
          ),
          (0, i.Cg)([a.action], O.prototype, "RegisterBindingWatcher", null),
          (0, i.Cg)([a.action], O.prototype, "UnregisterBindingWatcher", null),
          (0, i.Cg)([a.action], O.prototype, "GetActionBinding", null),
          (0, i.Cg)([l.o], O.prototype, "GetInputModesForSourceType", null),
          (0, i.Cg)([l.o], O.prototype, "GetBooleanInputOptionsForMode", null),
          (0, i.Cg)([l.o], O.prototype, "GetActionBindingsOfType", null),
          (0, i.Cg)(
            [a.computed],
            O.prototype,
            "GetBooleanActionBindings",
            null,
          ),
          (0, i.Cg)(
            [a.computed],
            O.prototype,
            "GetVector1ActionBindings",
            null,
          ),
          (0, i.Cg)(
            [a.computed],
            O.prototype,
            "GetLiteralVector1ActionBindings",
            null,
          ),
          (0, i.Cg)(
            [a.computed],
            O.prototype,
            "GetVector2ActionBindings",
            null,
          ),
          (0, i.Cg)(
            [a.computed],
            O.prototype,
            "GetVector3ActionBindings",
            null,
          ),
          (0, i.Cg)([a.computed], O.prototype, "GetPoseActionBindings", null),
          (0, i.Cg)(
            [a.computed],
            O.prototype,
            "GetHapticsActionBindings",
            null,
          ),
          (0, i.Cg)(
            [a.computed],
            O.prototype,
            "GetSkeletonActionBindings",
            null,
          ),
          (0, i.Cg)([a.computed], O.prototype, "ConfigName", null),
          (0, i.Cg)([a.computed], O.prototype, "ConfigDescription", null),
          (0, i.Cg)([l.o], O.prototype, "GetPoseAction", null),
          (0, i.Cg)([l.o], O.prototype, "GetPoseActionByPath", null),
          (0, i.Cg)([l.o], O.prototype, "GetHapticsAction", null),
          (0, i.Cg)([l.o], O.prototype, "GetHapticsActionByPath", null),
          (0, i.Cg)([l.o], O.prototype, "GetSkeletonAction", null),
          (0, i.Cg)([l.o], O.prototype, "GetSkeletonActionByPath", null),
          (0, i.Cg)([l.o], O.prototype, "NotifyWatchersOfChange", null),
          (0, i.Cg)([a.action], O.prototype, "SetActionForInputModeType", null),
          (0, i.Cg)(
            [a.action],
            O.prototype,
            "SetParameterForInputModeType",
            null,
          ),
          (0, i.Cg)([l.o], O.prototype, "AddActionSetIfRequired", null),
          (0, i.Cg)([a.action], O.prototype, "AddInputModeForSource", null),
          (0, i.Cg)([a.action], O.prototype, "DeleteInputModeForSource", null),
          (0, i.Cg)(
            [a.action],
            O.prototype,
            "SetInputModeForInputSource",
            null,
          ),
          (0, i.Cg)([a.action], O.prototype, "ClearModesForInputPath", null),
          (0, i.Cg)([a.action], O.prototype, "SetInputPathForPose", null),
          (0, i.Cg)([a.action], O.prototype, "SetPoseForInputPath", null),
          (0, i.Cg)([a.action], O.prototype, "AddDefaultPose", null),
          (0, i.Cg)([a.action], O.prototype, "SetInputPathForHaptics", null),
          (0, i.Cg)([a.action], O.prototype, "SetHapticsForInputPath", null),
          (0, i.Cg)([a.action], O.prototype, "AddDefaultHaptics", null),
          (0, i.Cg)([a.action], O.prototype, "SetInputPathForSkeleton", null),
          (0, i.Cg)([a.action], O.prototype, "SetSkeletonForInputPath", null),
          (0, i.Cg)([a.action], O.prototype, "AddDefaultSkeleton", null),
          (0, i.Cg)([a.action], O.prototype, "SetActionForChord", null),
          (0, i.Cg)([a.action], O.prototype, "DeleteChord", null),
          (0, i.Cg)([a.action], O.prototype, "AddChord", null),
          (0, i.Cg)([a.action], O.prototype, "DeleteSourceFromChord", null),
          (0, i.Cg)([a.action], O.prototype, "SetInputTypeForChord", null),
          (0, i.Cg)([a.action], O.prototype, "SetInputSourceForChord", null),
          (0, i.Cg)([a.action], O.prototype, "LoadActionManifest", null),
          (0, i.Cg)([a.computed], O.prototype, "SelectedBindingURL", null),
          (0, i.Cg)([a.computed], O.prototype, "LoadedBindingURL", null),
          (0, i.Cg)([a.computed], O.prototype, "SelectedBindingIsLegacy", null),
          (0, i.Cg)([a.computed], O.prototype, "SelectedBindingIsOpenXR", null),
          (0, i.Cg)([a.computed], O.prototype, "IsSecondaryController", null),
          (0, i.Cg)([a.computed], O.prototype, "TrackerBindings", null),
          (0, i.Cg)([a.action], O.prototype, "GetTrackerBindings", null),
          (0, i.Cg)([l.o], O.prototype, "SetTrackerBinding", null),
          (0, i.Cg)([l.o], O.prototype, "PulseHaptics", null),
          (0, i.Cg)([a.computed], O.prototype, "KnownControllerTypes", null),
          (0, i.Cg)([l.o], O.prototype, "AutosaveBinding", null),
          (0, i.Cg)([l.o], O.prototype, "OnWebSocketOpen", null),
          (0, i.Cg)([l.o], O.prototype, "OnWebSocketClose", null),
          (0, i.Cg)([l.o], O.prototype, "WebSocketSend", null),
          (0, i.Cg)(
            [a.action.bound],
            O.prototype,
            "OnWorkshopUploadComplete",
            null,
          ),
          (0, i.Cg)([l.o], O.prototype, "OnPendingFileSaved", null),
          (0, i.Cg)([a.computed], O.prototype, "SaveNoticeText", null),
          (0, i.Cg)([l.o], O.prototype, "QueryBindingList", null),
          (0, i.Cg)([l.o], O.prototype, "DeleteBinding", null),
          (0, i.Cg)([l.o], O.prototype, "OnBindingDeleteComplete", null),
          (0, i.Cg)(
            [l.o],
            O.prototype,
            "ShouldShowBindingFailureForControllerType",
            null,
          ),
          (0, i.Cg)([l.o], O.prototype, "OnQueryResults", null),
          (0, i.Cg)([l.o], O.prototype, "SelectConfig", null),
          (0, i.Cg)([l.o], O.prototype, "OnSelectConfigComplete", null),
          (0, i.Cg)([l.o], O.prototype, "OnTrackersBindingChanged", null),
          (0, i.Cg)([l.o], O.prototype, "OnActionManifestReloaded", null),
          (0, i.Cg)([l.o], O.prototype, "SetBindingURL", null),
          (0, i.Cg)([l.o], O.prototype, "OnActionBindingsReloaded", null),
          (0, i.Cg)(
            [l.o],
            O.prototype,
            "GetControllerWatcherForSourceFromControllerType",
            null,
          ),
          (0, i.Cg)([l.o], O.prototype, "OnWebSocketMessage", null),
          (0, i.Cg)([a.computed], O.prototype, "BindingConfig", null),
          (0, i.Cg)(
            [a.computed],
            O.prototype,
            "BindingSubscriptionChangedCanary",
            null,
          );
        const k = new O();
        window.controllerBindingStore = k;
      },
      6795: (e, t, o) => {
        o.d(t, { k: () => n, n: () => m });
        var n,
          i = o(1635),
          l = o(9118),
          s = o(3236),
          r = o(7813),
          a = o(6090),
          c = o(3714),
          d = o(5802),
          p = o(1532),
          h = o(8108);
        !(function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.List = 1)] = "List"),
            (e[(e.ViewBinding = 2)] = "ViewBinding"),
            (e[(e.EditBinding = 3)] = "EditBinding"),
            (e[(e.AppSelect = 4)] = "AppSelect"),
            (e[(e.Debugger = 5)] = "Debugger");
        })(n || (n = {}));
        class u {
          constructor() {
            (this.m_State = n.None),
              (this.m_bLoading = !1),
              (this.m_rBindingList = void 0),
              (this.m_bShowBindingListError = !1),
              (this.m_sBindingListError = void 0),
              (this.m_bCanCloseBindingListError = !0),
              (this.m_timeoutLoading = void 0),
              (this.m_pathUpdateTimer = void 0),
              (this.m_bStandaloneSettingsPage = !1),
              (this.m_bDesktopMode = !1),
              (0, r.makeObservable)(this);
          }
          Init() {
            window.addEventListener("popstate", this.OnPopState),
              history.pushState({ direction: "back" }, "back"),
              history.pushState({ direction: "current" }, "current"),
              history.pushState({ direction: "forward" }, "forward"),
              history.back();
            let e = "bindingui/" + a.OH[(0, a.R$)()];
            (this.m_mailbox = new a._n()),
              this.m_mailbox.Init(e),
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
              (0, r.autorun)(this.UpdateWindowTitle);
          }
          ShowOverlayInDashboard() {
            null === a.Ay ||
              void 0 === a.Ay ||
              a.Ay.VRClient.ShowDashboardOverlay({
                overlayKey: "system.vrwebhelper.controllerbinding",
                sReason: "cinputui_showoverlayindashboard",
              });
          }
          OnShowAppSelect(e) {
            (this.m_bStandaloneSettingsPage = !1), this.ShowAppSelect();
          }
          OnShowInputDebugger(e) {
            (this.m_bStandaloneSettingsPage = !1), this.ShowDebugger();
          }
          OnShowAppBinding(e) {
            (this.m_bStandaloneSettingsPage = !1),
              (this.Loading = !0),
              p.s.UpdateApplications().then(() => {
                if (
                  ((0, a.R$)() == a.OH.Overlay
                    ? this.ShowOverlayInDashboard()
                    : (0, a.R$)() == a.OH.Desktop && a.Ay.ShowBindingUI(!0),
                  !p.s.GetApp(e.app_key))
                )
                  return (
                    console.log(
                      "Warning: Could not find app key: " +
                        e.app_key +
                        " showing app select.",
                    ),
                    void this.ShowAppSelect()
                  );
                d.B$.SetSelectedApp(e.app_key, !0),
                  d.B$.ReloadCurrentApp().then(() => {
                    if (e.controller_type)
                      return (
                        d.B$.SetSelectedController(e.controller_type, !0),
                        void d.B$.ReloadControllerConfiguration().then(() => {
                          e.action_set &&
                            d.B$.SetSelectedActionSet(e.action_set),
                            (this.Loading = !1),
                            this.EditCurrentBinding();
                        })
                      );
                    (this.Loading = !1), this.ShowBindingList();
                  });
              });
          }
          OnBindingLoadFailed(e) {
            console.log(
              "OnBindingLoadFailed: " +
                e.app_key +
                " " +
                e.controller_type +
                " " +
                e.error,
            ),
              p.s.UpdateApplications().then(() => {
                if (!p.s.ShouldShowBindingFailureForApp(e.app_key)) return;
                if (
                  !d.B$.ShouldShowBindingFailureForControllerType(
                    e.controller_type,
                  )
                )
                  return;
                d.B$.RememberFailedLoadUri(e.uri),
                  d.B$.SetSelectedApp(e.app_key),
                  d.B$.SetSelectedController(e.controller_type);
                let t = p.s.GetApp(e.app_key),
                  o = l.W.GetControllerTypeInfo(e.controller_type);
                if (!o) return;
                let n = l.W.LocalizeControllerString(o, e.controller_type);
                this.ShowBindingList(
                  (0, c.we)(
                    e.error,
                    t ? t.name : (0, c.we)("#unknown_application"),
                    n,
                  ),
                ),
                  null === a.Ay || void 0 === a.Ay || a.Ay.ShowBindingUI(!1);
              });
          }
          SetStandaloneSettingsPage(e) {
            this.m_bStandaloneSettingsPage = e;
          }
          SetDesktopMode(e) {
            this.m_bDesktopMode = e;
          }
          get DesktopMode() {
            return this.m_bDesktopMode;
          }
          SetBindingListError(e, t = !0) {
            (this.m_bShowBindingListError = null != e),
              (this.m_sBindingListError = e),
              (this.m_bCanCloseBindingListError = t);
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
          OnPopState(e) {
            let t = "";
            e.state && e.state.direction && (t = e.state.direction),
              "back" == t
                ? (this.m_bStandaloneSettingsPage &&
                    (this.SetStandaloneSettingsPage(!1),
                    this.ReturnToSettingsUI()),
                  this.GoBackPage(),
                  history.forward())
                : "forward" == t && (history.back(), this.GoForwardPage());
          }
          GoBackPage() {
            switch (this.m_State) {
              default:
              case n.None:
              case n.AppSelect:
                break;
              case n.Debugger:
              case n.List:
                this.ShowAppSelect();
                break;
              case n.EditBinding:
              case n.ViewBinding:
                this.ShowBindingList();
            }
          }
          GoForwardPage() {
            switch (this.m_State) {
              default:
              case n.None:
              case n.AppSelect:
                this.ShowBindingList();
                break;
              case n.List:
                this.CurrentBinding.url == d.B$.LoadedBindingURL
                  ? this.EditCurrentBinding()
                  : this.ViewCurrentBinding();
              case n.EditBinding:
              case n.ViewBinding:
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
          set Loading(e) {
            (this.m_bLoading = e),
              e
                ? (this.m_timeoutLoading && clearTimeout(this.m_timeoutLoading),
                  (this.m_timeoutLoading = window.setTimeout(() => {
                    this.Loading = !1;
                  }, 1e4)))
                : this.m_timeoutLoading && clearTimeout(this.m_timeoutLoading);
          }
          IsSafeToResetControllerType(e, t) {
            return (
              this.m_State == n.AppSelect ||
              this.m_State == n.None ||
              ("TrackedDeviceClass_HMD" == e &&
                "TrackedDeviceClass_Controller" == t)
            );
          }
          EditCurrentBinding() {
            this.m_State = n.EditBinding;
          }
          ViewCurrentBinding() {
            this.m_State = n.ViewBinding;
          }
          ShowBindingList(e = void 0) {
            (this.m_bStandaloneSettingsPage = !1),
              this.SetBindingListError(e),
              (this.m_State = n.List),
              (this.Loading = !1);
          }
          get CurrentBinding() {
            if (this.BindingQueryResults)
              return m.BindingQueryResults.find(
                (e) => e.url == d.B$.SelectedBindingURL,
              );
          }
          ReturnToSettingsUI() {
            this.ShowAppSelect(),
              null === a.Ay ||
                void 0 === a.Ay ||
                a.Ay.ShowSettingsUI((0, a.R$)() == a.OH.Desktop);
          }
          ShowAppSelect() {
            (this.m_bStandaloneSettingsPage = !1),
              (this.Loading = !0),
              p.s
                .UpdateApplications()
                .then(() => {
                  (0, r.runInAction)(() => {
                    (this.Loading = !1), (this.m_State = n.AppSelect);
                  });
                })
                .catch(() => {
                  this.Loading = !1;
                });
          }
          UpdatePathsTimeout() {
            try {
              h.J.UpdatePaths().then(() => {
                this.m_State == n.Debugger
                  ? (this.m_pathUpdateTimer = window.setTimeout(
                      this.UpdatePathsTimeout,
                      500,
                    ))
                  : (this.m_pathUpdateTimer = void 0);
              });
            } catch (e) {
              console.log("Stopping debugger timer because", e);
            }
          }
          ShowDebugger() {
            (this.Loading = !0),
              p.s
                .UpdateApplications()
                .then(() => {
                  this.Loading = !1;
                  let e = p.s.GetApp(d.B$.SelectedApp);
                  e &&
                    e.client_container_handle &&
                    h.J.AddSubscribedContainer(e.client_container_handle),
                    (this.m_State = n.Debugger),
                    (this.m_pathUpdateTimer = window.setTimeout(
                      this.UpdatePathsTimeout,
                      500,
                    )),
                    a.Ay.ShowBindingUI((0, a.R$)() == a.OH.Desktop);
                })
                .catch(() => {
                  this.Loading = !1;
                });
          }
          GetBindingList() {
            return (0, i.sH)(this, void 0, void 0, function* () {
              var e;
              (0, r.runInAction)(() => {
                (this.Loading = !0), (this.m_rBindingList = []);
              });
              try {
                const t = d.B$.SelectedControllerTypeInfo,
                  o = yield d.B$.QueryBindingList(
                    d.B$.SelectedApp,
                    null !== (e = null == t ? void 0 : t.controller_type) &&
                      void 0 !== e
                      ? e
                      : "",
                  );
                o.success &&
                  (0, r.runInAction)(() => {
                    this.m_rBindingList = o.results;
                  });
              } catch (e) {
                this.SetBindingListError(
                  (0, c.we)("#BindingUI_WorkshopBindingLoadFailed"),
                ),
                  console.error("Failed to load workshop bindings " + e);
              } finally {
                this.Loading = !1;
              }
            });
          }
          UpdateWindowTitle() {
            setTimeout(() => {
              switch (this.GetUIState) {
                case n.AppSelect:
                case n.Debugger:
                case n.EditBinding:
                case n.List:
                case n.None:
                case n.ViewBinding:
                  document.title = (0, c.we)(
                    "#BindingUI_WindowTitle_ControllerBinding",
                  );
              }
            }, 0);
          }
        }
        (0, i.Cg)([r.observable], u.prototype, "m_State", void 0),
          (0, i.Cg)([r.observable], u.prototype, "m_bLoading", void 0),
          (0, i.Cg)([r.observable], u.prototype, "m_rBindingList", void 0),
          (0, i.Cg)(
            [r.observable],
            u.prototype,
            "m_bShowBindingListError",
            void 0,
          ),
          (0, i.Cg)([r.observable], u.prototype, "m_sBindingListError", void 0),
          (0, i.Cg)(
            [r.observable],
            u.prototype,
            "m_bCanCloseBindingListError",
            void 0,
          ),
          (0, i.Cg)([r.observable], u.prototype, "m_bDesktopMode", void 0),
          (0, i.Cg)([s.o], u.prototype, "OnShowAppSelect", null),
          (0, i.Cg)([s.o], u.prototype, "OnShowInputDebugger", null),
          (0, i.Cg)([s.o], u.prototype, "OnShowAppBinding", null),
          (0, i.Cg)([s.o], u.prototype, "OnBindingLoadFailed", null),
          (0, i.Cg)([r.computed], u.prototype, "DesktopMode", null),
          (0, i.Cg)([s.o], u.prototype, "SetBindingListError", null),
          (0, i.Cg)([r.computed], u.prototype, "ShowBindingListError", null),
          (0, i.Cg)([r.computed], u.prototype, "BindingListError", null),
          (0, i.Cg)(
            [r.computed],
            u.prototype,
            "CanCloseBindingListError",
            null,
          ),
          (0, i.Cg)([s.o], u.prototype, "OnPopState", null),
          (0, i.Cg)([s.o], u.prototype, "GoBackPage", null),
          (0, i.Cg)([s.o], u.prototype, "GoForwardPage", null),
          (0, i.Cg)([r.computed], u.prototype, "GetUIState", null),
          (0, i.Cg)([r.computed], u.prototype, "BindingQueryResults", null),
          (0, i.Cg)([r.computed], u.prototype, "Loading", null),
          (0, i.Cg)([s.o], u.prototype, "IsSafeToResetControllerType", null),
          (0, i.Cg)([r.action.bound], u.prototype, "EditCurrentBinding", null),
          (0, i.Cg)([s.o], u.prototype, "ViewCurrentBinding", null),
          (0, i.Cg)([s.o], u.prototype, "ShowBindingList", null),
          (0, i.Cg)([r.computed], u.prototype, "CurrentBinding", null),
          (0, i.Cg)([s.o], u.prototype, "ReturnToSettingsUI", null),
          (0, i.Cg)([s.o], u.prototype, "ShowAppSelect", null),
          (0, i.Cg)([s.o], u.prototype, "UpdatePathsTimeout", null),
          (0, i.Cg)([s.o], u.prototype, "ShowDebugger", null),
          (0, i.Cg)([s.o], u.prototype, "GetBindingList", null),
          (0, i.Cg)([s.o], u.prototype, "UpdateWindowTitle", null);
        const m = new u();
        window.inputUI = m;
      },
      3714: (e, t, o) => {
        o.d(t, { A0: () => l, uV: () => a, we: () => s });
        o(6540);
        var n = o(2505),
          i = o.n(n);
        class l {
          constructor() {
            (this.m_mapTokens = new Map()),
              (this.m_mapFallbackTokens = new Map());
          }
          InitFromObjects(e, t, o, n) {
            this.m_mapTokens.clear();
            let i = [t, e, n, o];
            for (let e in i) {
              let t = i[e];
              for (let e in t) {
                let o = t[e];
                for (let e in o) {
                  let t = e.toLowerCase();
                  this.m_mapTokens.has(t) || this.m_mapTokens.set(t, o[e]);
                }
              }
            }
          }
          LocalizeString(e) {
            if (!e || 0 == e.length || "#" != e.charAt(0)) return "";
            let t = this.m_mapTokens.get(e.substring(1).toLowerCase());
            return void 0 === t ? "" : t;
          }
          LocalizeStringFromFallback(e) {
            if (!e || 0 == e.length || "#" != e.charAt(0)) return "";
            let t = this.m_mapFallbackTokens.get(e.substring(1).toLowerCase());
            return void 0 === t ? "" : t;
          }
          static GetLocale() {
            const e = navigator.languages[0];
            try {
              const t =
                null === VRHTML || void 0 === VRHTML
                  ? void 0
                  : VRHTML.GetSystemLocale();
              if (!t) return e;
              l.s_Date.toLocaleTimeString(t);
              return t;
            } catch (t) {
              return e;
            }
          }
        }
        function s(e, ...t) {
          let o = r.LocalizeString(e);
          return o
            ? (t.length > 0 &&
                (o = o.replace(/%(\d+)\$s/g, function (e, o) {
                  return void 0 !== t[o - 1] ? String(t[o - 1]) : e;
                })),
              o)
            : e;
        }
        l.s_Date = new Date();
        const r = new l();
        function a(e, t) {
          t ||
            (t = (function () {
              let e = new Map([
                ["en", "english"],
                ["de", "german"],
                ["fr", "french"],
                ["it", "italian"],
                ["ko", "korean"],
                ["es-419", "latam"],
                ["es", "spanish"],
                ["zh-CN", "schinese"],
                ["zh-TW", "tchinese"],
                ["ru", "russian"],
                ["th", "thai"],
                ["ja", "japanese"],
                ["pt", "portuguese"],
                ["pl", "polish"],
                ["da", "danish"],
                ["nl", "dutch"],
                ["fi", "finnish"],
                ["no", "norwegian"],
                ["sv", "swedish"],
                ["hu", "hungarian"],
                ["cs", "czech"],
                ["ro", "romanian"],
                ["tr", "turkish"],
                ["pt-BR", "brazilian"],
                ["bg", "bulgarian"],
                ["el", "greek"],
                ["uk", "ukranian"],
                ["vi", "vietnamese"],
              ]);
              for (let t of navigator.languages) {
                let o = t.split("-");
                if (e.has(t)) return e.get(t);
                if (e.has(o[0])) return e.get(o[0]);
              }
              return "english";
            })());
          let o = [],
            n = (e, t, o) => {
              let n,
                l = Date.now().toString();
              return (
                (n =
                  "drivers" == e
                    ? `/input/localization.json?t=${l}`
                    : "webhelper" == e
                      ? `/dashboard/localization/${e}_${t}.json?t=${l}`
                      : `localization/${e}_${t}.json?t=${l}`),
                i()
                  .get(n)
                  .then((e) => {
                    o(e.data);
                  })
                  .catch(() => {})
              );
            },
            l = [],
            s = [],
            a = [],
            c = [];
          for (let i of e)
            o.push(
              n(i, t, (e) => {
                l.push(e);
              }),
            ),
              "english" != t &&
                o.push(
                  n(i, "english", (e) => {
                    a.push(e);
                  }),
                );
          for (let e of ["webhelper"])
            o.push(
              n(e, t, (e) => {
                s.push(e);
              }),
            ),
              "english" != t &&
                o.push(
                  n(e, "english", (e) => {
                    c.push(e);
                  }),
                );
          return (
            o.push(
              n("drivers", "", (e) => {
                l.push(e);
              }),
            ),
            Promise.all(o).then(() => {
              r.InitFromObjects(l, s, a, c);
            })
          );
        }
        window.LocalizationManager = r;
      },
      4728: (e, t, o) => {
        function n(e, t, o) {
          return null == e || isNaN(e) ? e : Math.max(t, Math.min(o, e));
        }
        o.d(t, { OQ: () => n });
      },
      1139: (e, t, o) => {
        o.d(t, {
          CH: () => h,
          FH: () => c,
          aw: () => p,
          e6: () => r,
          jE: () => d,
        });
        var n = o(1635),
          i = o(6540),
          l = o(3236),
          s = o(7813);
        function r(e) {
          let t = window.location.search.substring(1).split("&");
          for (let o = 0; o < t.length; o++) {
            let n = t[o].split("=");
            if (decodeURIComponent(n[0]).toUpperCase() == e.toUpperCase())
              return decodeURIComponent(n[1]);
          }
          return "";
        }
        function a(e) {
          return "string" == typeof e || (Array.isArray(e) && e[1]);
        }
        function c(...e) {
          return e
            .filter(a)
            .map((e) => ("string" == typeof e ? e : e[0]))
            .join(" ");
        }
        function d(e, t) {
          let o = t;
          for (; o.parentElement && !e.some((e) => o.matches(e)); )
            o = o.parentElement;
          return o;
        }
        class p {
          constructor() {
            (this.onScroll = null),
              (this.onScrollStop = null),
              (this.m_elem = null),
              (this.m_rScrollableParents = []),
              (this.m_bScrolling = !1),
              (this.m_scrollStopTimeoutHandle = void 0),
              (0, s.makeObservable)(this);
          }
          ref(e) {
            this.m_elem && this.cleanup(),
              (this.m_elem = e),
              this.updateScrollableParents();
          }
          get isScrolling() {
            return this.m_bScrolling;
          }
          updateScrollableParents() {
            for (let e of this.m_rScrollableParents)
              e.removeEventListener("scroll", this.onParentScroll);
            this.m_elem
              ? (this.m_rScrollableParents = (function (e) {
                  let t = [];
                  if (!e) return t;
                  let o = e.parentElement;
                  for (; o; ) {
                    const e = o.scrollWidth > o.clientWidth,
                      n = o.scrollHeight > o.clientHeight;
                    (e || n) && t.push(o), (o = o.parentElement);
                  }
                  return t;
                })(this.m_elem))
              : (this.m_rScrollableParents = []);
            for (let e of this.m_rScrollableParents)
              e.addEventListener("scroll", this.onParentScroll);
          }
          cleanup() {
            for (let e of this.m_rScrollableParents)
              e.removeEventListener("scroll", this.onParentScroll);
            (this.m_rScrollableParents = []),
              (this.m_elem = null),
              this.clearScrollStopTimeout();
          }
          onParentScroll() {
            var e;
            this.clearScrollStopTimeout(),
              (this.m_bScrolling = !0),
              (this.m_scrollStopTimeoutHandle = window.setTimeout(
                this.onScrollStopTimeout,
                50,
              )),
              null === (e = this.onScroll) || void 0 === e || e.call(this);
          }
          clearScrollStopTimeout() {
            window.clearTimeout(this.m_scrollStopTimeoutHandle),
              (this.m_scrollStopTimeoutHandle = void 0);
          }
          onScrollStopTimeout() {
            var e;
            this.m_bScrolling &&
              (null === (e = this.onScrollStop) ||
                void 0 === e ||
                e.call(this)),
              (this.m_bScrolling = !1);
          }
        }
        function h() {
          const [, e] = i.useState(0);
          return i.useCallback(() => e((e) => e + 1), []);
        }
        (0, n.Cg)([s.observable], p.prototype, "m_bScrolling", void 0),
          (0, n.Cg)([l.o], p.prototype, "ref", null),
          (0, n.Cg)([s.computed], p.prototype, "isScrolling", null),
          (0, n.Cg)([l.o], p.prototype, "onParentScroll", null),
          (0, n.Cg)([l.o], p.prototype, "onScrollStopTimeout", null);
      },
      9424: (e, t, o) => {
        var n = o(1635),
          i = o(6540),
          l = o(5338),
          s = o(1370),
          r = o(6725),
          a = o(6090),
          c = o(1139),
          d = o(3714),
          p = o(5802),
          h = o(6795),
          u = o(3236),
          m = o(5471);
        o(7750);
        class g {
          constructor(e, t, o, n) {
            (this.sValue = e),
              (this.sLocalized = t),
              (this.sRequiredLocalized = o),
              (this.sLocalizedDescription = n);
          }
        }
        class S extends i.Component {
          constructor(e) {
            super(e),
              (this.state = {
                sSelectedOption: this.props.sValueSelectedItem,
                bVisible: !1,
              });
          }
          componentWillMount() {
            null != this.props.bShowOptionsOnStart &&
              this.setState({ bVisible: this.props.bShowOptionsOnStart });
          }
          componentWillReceiveProps(e) {
            null != e.bShowOptionsOnStart &&
              e.bShowOptionsOnStart != this.props.bShowOptionsOnStart &&
              this.setState({ bVisible: e.bShowOptionsOnStart });
          }
          Show(e) {
            this.setState({ bVisible: !0 }), e.stopPropagation();
          }
          Hide(e) {
            this.setState({ bVisible: !1 }), e && e.stopPropagation();
          }
          OnOptionChanged(e, t) {
            this.setState({ sSelectedOption: t }),
              this.props.fnOptionSelected(t),
              this.Hide(e);
          }
          render() {
            let e = this.props.vecOptions.map((e, t) => {
                if ("-" == e.sValue)
                  return i.createElement("div", {
                    key: t,
                    className: "InlineSeparator",
                  });
                if ("-blank" == e.sValue)
                  return i.createElement(
                    "div",
                    { key: t, className: "InlineBlankSeparator" },
                    e.sLocalized,
                  );
                if ("-nonitem" == e.sValue)
                  return i.createElement(
                    "div",
                    { key: t, className: "InlineNonItemSeparator" },
                    e.sLocalized,
                  );
                if ("-subHeader" == e.sValue)
                  return i.createElement(
                    "div",
                    { key: t, className: "InlineSubHeaderSeparator" },
                    e.sLocalized,
                  );
                {
                  let o,
                    n,
                    l = "InlineDropdownItem";
                  return (
                    this.props.sValueSelectedItem == e.sValue &&
                      (l += " Selected"),
                    null != e.sRequiredLocalized &&
                      (o = i.createElement(
                        "span",
                        { className: "BindingLabelActionRequirement" },
                        e.sRequiredLocalized,
                      )),
                    null != e.sLocalizedDescription &&
                      (n = i.createElement(
                        m.Ay,
                        {
                          content: e.sLocalizedDescription,
                          theme: "ControllerBindingToolTip",
                        },
                        i.createElement(
                          "span",
                          { className: "SourceModeHelp" },
                          "?",
                        ),
                      )),
                    i.createElement(
                      "div",
                      {
                        key: t,
                        className: l,
                        onClick: (t) => {
                          this.OnOptionChanged(t, e.sValue);
                        },
                      },
                      e.sLocalized,
                      o,
                      n,
                    )
                  );
                }
              }),
              t =
                "InlineDropdownLabel " +
                (null == this.props.sHeaderClass
                  ? ""
                  : this.props.sHeaderClass),
              o =
                "InlineOptionsDropDownRodal " +
                (null == this.props.sModalClass ? "" : this.props.sModalClass);
            let n = this.props.sLocalizedSelectedItem;
            !n &&
              this.state.sSelectedOption &&
              this.props.vecOptions.forEach((e) => {
                e.sValue == this.state.sSelectedOption && (n = e.sLocalized);
              });
            let l = this.props.bReadOnly ? () => {} : this.Show;
            return i.createElement(
              "div",
              { className: t, onClick: l },
              n &&
                i.createElement(
                  "div",
                  { className: this.props.sMainButtonClass },
                  n,
                ),
              i.createElement(
                r.A,
                {
                  visible: this.state.bVisible,
                  onClose: this.Hide,
                  customStyles: {
                    width: "60%",
                    height: "fit-content",
                    maxHeight: "90%",
                    display: "flex",
                  },
                  showCloseButton: !1,
                  animation: "fade",
                  className: o,
                  closeOnEsc: !0,
                },
                this.state.bVisible &&
                  i.createElement(
                    "div",
                    { className: "FlexColumn InlineDropdownModalWrapper" },
                    this.props.sModalTitleString &&
                      i.createElement(
                        "div",
                        { className: "Label ModalHeader" },
                        this.props.sModalTitleString,
                      ),
                    i.createElement(
                      "div",
                      { className: "FlexColumn InlineDropdownItemWrapper" },
                      e,
                    ),
                  ),
              ),
            );
          }
        }
        (0, n.Cg)([u.o], S.prototype, "Show", null),
          (0, n.Cg)([u.o], S.prototype, "Hide", null),
          (0, n.Cg)([u.o], S.prototype, "OnOptionChanged", null);
        var _ = o(1532),
          C = o(2505),
          y = o.n(C),
          f = o(7813);
        class b {
          constructor(e) {
            (this.m_communityData = void 0),
              (this.m_bLoadingData = !1),
              (this.m_sSteamID = void 0),
              (this.m_dateLastUpdate = void 0),
              (this.m_sSteamID = e),
              e.length > 0 && this.EnsureCommunityDataLoaded(),
              (0, f.makeObservable)(this);
          }
          get community_data_ready() {
            return void 0 !== this.m_communityData;
          }
          get avatar_url() {
            return this.m_communityData && this.m_communityData.avatar_url;
          }
          get persona_name() {
            return this.m_communityData && this.m_communityData.persona_name;
          }
          get player_level() {
            return this.m_communityData && this.m_communityData.level;
          }
          get player_level_class() {
            return this.m_communityData && this.m_communityData.level_class;
          }
          get player_badge() {
            return this.m_communityData && this.m_communityData.favorite_badge;
          }
          get player_in_game() {
            return this.m_communityData && this.m_communityData.in_game;
          }
          EnsureCommunityDataLoaded() {
            if (void 0 === this.m_communityData && !this.m_bLoadingData) {
              this.m_bLoadingData = !0;
              let e = "https://steamcommunity.com/";
              y()
                .get(e + "miniprofile/s" + this.m_sSteamID + "/json")
                .then((e) => {
                  let t = e.data;
                  t &&
                    t.avatar_url &&
                    ((this.m_communityData = t),
                    (this.m_dateLastUpdate = new Date())),
                    (this.m_bLoadingData = !1);
                })
                .catch((e) => {
                  console.log(e), (this.m_bLoadingData = !1);
                });
            }
          }
        }
        (0, n.Cg)([f.observable], b.prototype, "m_communityData", void 0),
          (0, n.Cg)([u.o], b.prototype, "EnsureCommunityDataLoaded", null);
        class v {
          constructor() {
            (this.m_SteamCommunityUsers = f.observable.map()),
              (0, f.makeObservable)(this);
          }
          GetUserInformation(e) {
            return (
              this.m_SteamCommunityUsers.has(e) ||
                this.RequestUserInformation(e),
              this.m_SteamCommunityUsers.get(e)
            );
          }
          RequestUserInformation(e) {
            this.m_SteamCommunityUsers.hasOwnProperty(e) ||
              this.m_SteamCommunityUsers.set(e, new b(e));
          }
        }
        (0, n.Cg)([f.observable], v.prototype, "m_SteamCommunityUsers", void 0),
          (0, n.Cg)([u.o], v.prototype, "GetUserInformation", null),
          (0, n.Cg)([u.o], v.prototype, "RequestUserInformation", null);
        const A = new v();
        window.steamcommunity = A;
        var B = o(9118);
        let I = class extends i.Component {
          render() {
            let e =
                null == this.props.bShowBackButton ||
                this.props.bShowBackButton,
              t = null != this.props.fnOpenOptionsModal,
              o = "PageTitleLabel";
            return (
              this.props.strSubTitle || (o += " SingleTitle"),
              i.createElement(
                "div",
                {
                  className:
                    "PageTitleBar" + (B.W.IsSteamAvailable ? "" : " NoSteam"),
                },
                i.createElement(
                  "div",
                  { className: "FlexFullWidthRowCentered TitleBarMainRow" },
                  i.createElement(
                    "div",
                    { className: "TitleBarSection" },
                    e &&
                      i.createElement(
                        "div",
                        {
                          className:
                            "ButtonControl FlexRow PageTitleButton PageTitleBackButton AllCaps",
                          onClick: () => {
                            this.props.fnOnClick();
                          },
                        },
                        i.createElement("img", {
                          className: "ActionButtonImage",
                          src: "images/bindingui/icon_back.svg",
                        }),
                        (0, d.we)("#Button_Back"),
                      ),
                  ),
                  i.createElement(
                    "div",
                    {
                      className: "AllCaps PageTitle TitleBarSection FlexColumn",
                    },
                    i.createElement(
                      "div",
                      { className: o },
                      this.props.strTitle,
                    ),
                    this.props.strSubTitle &&
                      i.createElement(
                        "div",
                        { className: "AllCaps PageSubTitle PageTitleLabel" },
                        this.props.strSubTitle,
                      ),
                  ),
                  t &&
                    i.createElement(
                      "div",
                      { className: "TitleBarSection" },
                      i.createElement(
                        m.Ay,
                        {
                          content: (0, d.we)(
                            "#BindingUI_OptionsButton_tooltip",
                          ),
                          theme: "ControllerBindingToolTip",
                        },
                        i.createElement(
                          "div",
                          {
                            className:
                              "ButtonControl FlexRow OptionsButton PageTitleButton AllCaps",
                            onClick: this.props.fnOpenOptionsModal,
                          },
                          (0, d.we)("#BindingUI_OptionsButton"),
                        ),
                      ),
                    ),
                ),
                !B.W.IsSteamAvailable &&
                  i.createElement(
                    "div",
                    { className: "NoSteamWarning" },
                    (0, d.we)("#NoSteamWarning"),
                  ),
              )
            );
          }
        };
        I = (0, n.Cg)([s.PA], I);
        let w = class extends i.Component {
          constructor(e) {
            super(e), (this.state = { bIsVisible: !0 });
          }
          CloseDialog() {
            this.setState({ bIsVisible: !1 });
          }
          render() {
            let e = null;
            return (
              h.n.DesktopMode || (e = { height: "30%", width: "30%" }),
              i.createElement(
                r.A,
                {
                  visible: this.state.bIsVisible,
                  onClose: this.CloseDialog,
                  showCloseButton: !1,
                  animation: "fade",
                  className: "BindingChordsModal",
                  closeOnEsc: !0,
                  customStyles: e,
                },
                i.createElement(
                  "div",
                  {
                    className:
                      "SaveDialogWrapper FlexColumn LoadErrorDialogWrapper",
                  },
                  i.createElement(
                    "div",
                    { className: "Label TitleCenter" },
                    this.props.sError,
                  ),
                  i.createElement(
                    "div",
                    {
                      className:
                        "FlexRow SaveBottomButtonRow LoadErrorCloseButton",
                    },
                    this.props.bCanClose
                      ? i.createElement(
                          "div",
                          {
                            onClick: this.CloseDialog,
                            className: "ButtonControl",
                          },
                          (0, d.we)("#Button_Close"),
                        )
                      : i.createElement(
                          "div",
                          {
                            className: "ButtonControl",
                            onClick: () => {
                              p.B$.ClearSelectedApp(),
                                h.n.ShowAppSelect(),
                                this.CloseDialog();
                            },
                          },
                          (0, d.we)("#BindingUI_List_ErrorReturnToAppSelect"),
                        ),
                  ),
                ),
              )
            );
          }
        };
        (0, n.Cg)([u.o], w.prototype, "CloseDialog", null),
          (w = (0, n.Cg)([s.PA], w));
        let E = class extends i.Component {
          constructor(e) {
            super(e);
            let t = p.B$.SelectedAppActions;
            (this.state = {
              bShowDeleteConfirmModal: !1,
              bShowUpgradeConfirmModal: !1,
              bOldVersion:
                !!t && this.props.result.actionManifestVersion < t.version,
            }),
              this.props.result.steamIDOwner.length &&
                "0" != this.props.result.steamIDOwner &&
                A.RequestUserInformation(this.props.result.steamIDOwner);
          }
          OnDelete() {
            this.setState({ bShowDeleteConfirmModal: !0 });
          }
          OnDeleteConfirmed() {
            return (0, n.sH)(this, void 0, void 0, function* () {
              this.setState({ bShowDeleteConfirmModal: !1 }),
                yield p.B$.DeleteBinding(this.props.result.url),
                yield h.n.GetBindingList();
            });
          }
          OnDeleteCancel() {
            this.setState({ bShowDeleteConfirmModal: !1 });
          }
          renderDeleteConfirmModal(e) {
            return i.createElement(
              r.A,
              {
                visible: this.state.bShowDeleteConfirmModal,
                onClose: this.OnDeleteCancel,
                showCloseButton: !1,
                animation: "fade",
                className: "ModeSettingsModal",
                closeOnEsc: !0,
              },
              this.state.bShowDeleteConfirmModal &&
                i.createElement(
                  "div",
                  { className: "FlexFullHeightColumnCentered" },
                  i.createElement(
                    "div",
                    { className: "Label" },
                    (0, d.we)("#BindingUI_List_Delete_Confirm", e.name),
                  ),
                  i.createElement(
                    "div",
                    { className: "FlexRow" },
                    i.createElement(
                      "div",
                      {
                        className: "ButtonControl",
                        onClick: this.OnDeleteConfirmed,
                      },
                      (0, d.we)("#Button_Delete"),
                    ),
                    i.createElement(
                      "div",
                      {
                        className: "ButtonControl",
                        onClick: this.OnDeleteCancel,
                      },
                      (0, d.we)("#Button_Cancel"),
                    ),
                  ),
                ),
            );
          }
          OnView() {
            this.props.fnViewBinding(
              this.props.result.url,
              !this.props.bCurrentlySelectedBinding,
            );
          }
          OnSelect() {
            this.props.fnSelectBinding(this.props.result.url);
          }
          render() {
            var e;
            let t,
              o,
              n = new Date(),
              l = new Date(1e3 * this.props.result.time),
              s =
                n.getTime() - l.getTime() > 1728e5
                  ? l.toLocaleDateString()
                  : l.toLocaleString(),
              r = this.props.result,
              a = "developer" == r.type,
              c = "0" != r.steamIDOwner && !a,
              h = _.s.GetApp(p.B$.SelectedApp),
              u = h ? h.name : "";
            a &&
              ((r.name && 0 != r.name.length) ||
                (p.B$.SelectedBindingIsLegacy
                  ? (r.name = (0, d.we)(
                      "#BindingUI_List_Legacy_Binding_Title",
                      u,
                    ))
                  : (r.name = (0, d.we)(
                      "#BindingUI_List_Developer_Binding_Title",
                      u,
                    ))),
              (r.description && 0 != r.description.length) ||
                (p.B$.SelectedBindingIsLegacy
                  ? (r.description = (0, d.we)(
                      "#BindingUI_List_Legacy_Binding_Description",
                    ))
                  : (r.description = (0, d.we)(
                      "#BindingUI_List_Developer_Binding_Description",
                    )))),
              c &&
                ((o = A.GetUserInformation(r.steamIDOwner).avatar_url),
                (t = A.GetUserInformation(r.steamIDOwner).persona_name));
            let m = this.props.bCurrentlySelectedBinding
                ? (0, d.we)("#BindingUI_List_Edit")
                : (0, d.we)("#BindingUI_List_View"),
              g = r.name;
            "autosave" == r.type &&
              (g = (0, d.we)("#BindingUI_List_Autosave", r.name));
            let S = null;
            this.state.bOldVersion &&
              (S = this.props.bCurrentlySelectedBinding
                ? (0, d.we)(
                    "#BindingUI_List_OldVersionWarning_CurrentBinding",
                    u,
                  )
                : (0, d.we)("#BindingUI_List_OldVersionWarning", u));
            let C = null;
            if (r.secondsPlayed > 0) {
              let e = r.secondsPlayed / 60;
              C = (0, d.we)("#BindingUI_List_MinutesPlayed", e.toFixed(0));
            }
            let y = null;
            if (r.secondsPlayedThisMonth > 0) {
              let e = r.secondsPlayedThisMonth / 60;
              y = (0, d.we)(
                "#BindingUI_List_MinutesPlayedThisMonth",
                e.toFixed(0),
              );
            }
            let f =
                null === (e = p.B$.SelectedControllerTypeInfo) || void 0 === e
                  ? void 0
                  : e.controller_type,
              b =
                null != r.controllerType &&
                "" != r.controllerType &&
                r.controllerType != f;
            return i.createElement(
              "div",
              { className: "BindingEntry FlexRow" },
              o &&
                i.createElement("img", {
                  className: "SteamCommunityProfileImage",
                  src: o,
                }),
              c &&
                !o &&
                i.createElement("div", {
                  className: "SteamCommunityProfileImage",
                }),
              i.createElement(
                "div",
                { className: "BindingDetails" },
                !this.props.bCurrentlySelectedBinding &&
                  this.props.fnSelectBinding &&
                  i.createElement(
                    "div",
                    {
                      className:
                        "BindingListEntryButton ButtonControl BindingSelectButton",
                      onClick: this.OnSelect,
                    },
                    (0, d.we)("#BindingUI_List_Select"),
                  ),
                !p.B$.HasBindingUriFailedToLoad(r.url) &&
                  i.createElement(
                    "div",
                    {
                      className:
                        "BindingListEntryButton ButtonControl BindingSelectButton",
                      onClick: this.OnView,
                    },
                    m,
                  ),
                r.owned &&
                  !this.props.bCurrentlySelectedBinding &&
                  i.createElement(
                    "div",
                    {
                      className:
                        "BindingListEntryButton BindingSelectButton DeleteButton ButtonControl",
                      onClick: () => {
                        this.OnDelete();
                      },
                    },
                    i.createElement("img", {
                      className: "ActionButtonImage",
                      src: "images/bindingui/icon_trash.svg",
                    }),
                  ),
                i.createElement(
                  "span",
                  { className: "BindingName" },
                  g,
                  i.createElement("br", null),
                ),
                i.createElement(
                  "span",
                  { className: "BindingDescription" },
                  r.description,
                  i.createElement("br", null),
                ),
                t &&
                  i.createElement(
                    "span",
                    { className: "BindingSteamPersonaName Label" },
                    (0, d.we)("#BindingUI_List_PublishedBy", t),
                    i.createElement("br", null),
                  ),
                r.time > 0 &&
                  i.createElement(
                    "span",
                    { className: "BindingLastUpdated" },
                    (0, d.we)("#BindingUI_List_LastUpdated"),
                    s,
                    y && " - " + y,
                    C && " - " + C,
                    i.createElement("br", null),
                  ),
                S &&
                  i.createElement(
                    "span",
                    { className: "ConvertWarning" },
                    S,
                    i.createElement("br", null),
                  ),
                b &&
                  i.createElement(
                    "div",
                    { className: "RemappedInfo" },
                    i.createElement("hr", { className: "RemappedInfoHr" }),
                    i.createElement(
                      "span",
                      { className: "RemappedInfoSpan" },
                      i.createElement("img", {
                        className: "InformationButtonImage",
                        src: "images/bindingui/icon_information.svg",
                      }),
                      (0, d.we)("#BindingUI_Compatibility_Remapped_Text"),
                    ),
                  ),
              ),
              i.createElement("div", {
                className: "FlexRow BindingEntryActionButtons",
              }),
              this.renderDeleteConfirmModal(r),
            );
          }
        };
        (0, n.Cg)([u.o], E.prototype, "OnDelete", null),
          (0, n.Cg)([u.o], E.prototype, "OnDeleteConfirmed", null),
          (0, n.Cg)([u.o], E.prototype, "OnDeleteCancel", null),
          (0, n.Cg)([u.o], E.prototype, "renderDeleteConfirmModal", null),
          (0, n.Cg)([u.o], E.prototype, "OnView", null),
          (0, n.Cg)([u.o], E.prototype, "OnSelect", null),
          (E = (0, n.Cg)([s.PA], E));
        let M = class extends i.Component {
          constructor(e) {
            super(e), (this.state = { bIsBindingsLoading: !0 });
          }
          RefreshBindingList() {
            return (0, n.sH)(this, void 0, void 0, function* () {
              this.setState({ bIsBindingsLoading: !0 }),
                yield h.n.GetBindingList(),
                this.setState({ bIsBindingsLoading: !1 });
            });
          }
          componentDidMount() {
            return (0, n.sH)(this, void 0, void 0, function* () {
              yield this.RefreshBindingList();
            });
          }
          CreateBinding() {
            this.ViewBinding(p.B$.SelectedBindingURL, !1);
          }
          SelectBinding(e) {
            h.n.Loading = !0;
            let t = p.B$.SelectedControllerTypeInfo;
            p.B$.SelectConfig(
              p.B$.SelectedApp,
              t ? t.controller_type : "",
              e,
            ).then(() => {
              p.B$.ReloadCurrentApp();
            });
          }
          ViewBinding(e, t) {
            if (((h.n.Loading = !0), t))
              p.B$.SetBindingURL(e),
                p.B$.ReloadControllerConfiguration().then(() => {
                  h.n.ViewCurrentBinding(),
                    setTimeout(() => {
                      h.n.Loading = !1;
                    }, 1);
                });
            else {
              let t = p.B$.SelectedControllerTypeInfo;
              p.B$.SelectConfig(
                p.B$.SelectedApp,
                t ? t.controller_type : "",
                e,
              ).then(() => {
                p.B$.ReloadCurrentApp().then(() => {
                  h.n.EditCurrentBinding(),
                    setTimeout(() => {
                      h.n.Loading = !1;
                    }, 1);
                });
              });
            }
          }
          OnControllerDropdownChanged(e) {
            return (0, n.sH)(this, void 0, void 0, function* () {
              p.B$.SetSelectedController(e), yield this.RefreshBindingList();
            });
          }
          ComputeResultsSection(e, t) {
            h.n.CurrentBinding && h.n.CurrentBinding.type;
            let o = h.n.BindingQueryResults,
              n = [];
            o &&
              o.length > 0 &&
              (n = o
                .filter(t)
                .map((e, t) =>
                  i.createElement(E, {
                    key: t,
                    currentBinding: h.n.CurrentBinding,
                    result: e,
                    fnViewBinding: this.ViewBinding,
                    fnSelectBinding: this.SelectBinding,
                    bCurrentlySelectedBinding: !1,
                  }),
                ));
            return (
              n.length > 0 &&
              i.createElement(
                "div",
                null,
                i.createElement(
                  "div",
                  { className: "BindingListSectionHeader" },
                  (0, d.we)(e),
                ),
                i.createElement(
                  "div",
                  { className: "FlexRowWithWrap BindingListSection" },
                  n,
                ),
              )
            );
          }
          CreateControllerTypeDropdown() {
            let e = [],
              t = _.s.IsAppAllowedPrivateInputs(p.B$.SelectedApp);
            B.W.ControllerTypes.forEach((o) => {
              (t || "InputValueVisibility_SteamVRInternal" != o.visibility) &&
                "InputValueVisibility_None" != o.visibility &&
                e.push(o);
            }),
              e.sort((e, t) => e.priority - t.priority);
            let o = [];
            e.forEach((e) => {
              o.push(
                new g(
                  e.controller_type,
                  B.W.LocalizeDriverString(e.resource_root, e.controller_type),
                ),
              );
            });
            let n = "",
              l = "",
              s = p.B$.SelectedControllerTypeInfo;
            s &&
              (s.input_bindingui_right.transform &&
                (n = s.input_bindingui_right.transform),
              (l = s.input_bindingui_right.uri));
            s.device_class;
            return i.createElement(
              "div",
              { className: "FlexColumn ControllerTypeWrapper" },
              i.createElement(
                "div",
                { className: "BindingListSectionHeader Label" },
                (0, d.we)("#BindingList_ControllerOption"),
              ),
              i.createElement(
                "div",
                { className: "FlexRow ControllerTypeButton BindingEntry" },
                i.createElement("img", {
                  className: "ControllerImage",
                  src: l,
                  style: { transform: n },
                }),
                i.createElement(S, {
                  vecOptions: o,
                  sModalClass: "PinTop",
                  sValueSelectedItem: s ? s.controller_type : "",
                  sLocalizedSelectedItem: B.W.LocalizeControllerString(
                    s,
                    s ? s.controller_type : "",
                  ),
                  fnOptionSelected: this.OnControllerDropdownChanged,
                }),
              ),
            );
          }
          render() {
            let e = _.s.GetApp(p.B$.SelectedApp),
              t = "";
            e && (t = e.name);
            let o = h.n.CurrentBinding,
              n = "#BindingUI_List_DeveloperSection";
            p.B$.SelectedBindingIsLegacy &&
              (n = "#BindingUI_List_LegacySection");
            let l = [];
            return (
              null != h.n.BindingQueryResults &&
                (l = h.n.BindingQueryResults.filter(
                  (e) => "autosave" != e.type,
                )),
              i.createElement(
                "div",
                { className: "FlexColumn FullPage" },
                i.createElement(I, {
                  fnOnClick: h.n.ShowAppSelect,
                  strTitle: (0, d.we)("#BindingList_PageTitle", t),
                }),
                i.createElement(
                  "div",
                  { className: "BindingUITopSection FlexRow" },
                  i.createElement(
                    "div",
                    { className: "CurrentSection FlexColumn" },
                    i.createElement(
                      "div",
                      { className: "BindingListSectionHeader" },
                      (0, d.we)("#BindingUI_List_CurrentSection"),
                    ),
                    o &&
                      i.createElement(E, {
                        result: o,
                        currentBinding: h.n.CurrentBinding,
                        fnViewBinding: this.ViewBinding,
                        bCurrentlySelectedBinding: !0,
                      }),
                  ),
                  this.CreateControllerTypeDropdown(),
                ),
                i.createElement("hr", null),
                this.state.bIsBindingsLoading
                  ? i.createElement(
                      i.Fragment,
                      null,
                      i.createElement(
                        "div",
                        { className: "BindingUILoadingSection" },
                        i.createElement(
                          "p",
                          { className: "BindingUILoadingHeader" },
                          (0, d.we)("#BindingUI_List_Loading"),
                        ),
                      ),
                    )
                  : i.createElement(
                      i.Fragment,
                      null,
                      i.createElement(
                        "div",
                        { className: "AppBindingSection" },
                        this.ComputeResultsSection(
                          n,
                          (e) =>
                            "developer" == e.type &&
                            e.url != p.B$.SelectedBindingURL,
                        ),
                        this.ComputeResultsSection(
                          "#BindingUI_List_ImportSection",
                          (e) =>
                            "local_file" == e.type &&
                            e.url != p.B$.SelectedBindingURL,
                        ),
                        this.ComputeResultsSection(
                          "#BindingUI_List_PersonalSection",
                          (e) =>
                            "personal" == e.type &&
                            e.url != p.B$.SelectedBindingURL,
                        ),
                        this.ComputeResultsSection(
                          "#BindingUI_List_OwnedSection",
                          (e) =>
                            "public" == e.type &&
                            e.owned &&
                            e.url != p.B$.SelectedBindingURL,
                        ),
                        this.ComputeResultsSection(
                          "#BindingUI_List_PublicSection",
                          (e) =>
                            "public" == e.type &&
                            !e.owned &&
                            e.url != p.B$.SelectedBindingURL,
                        ),
                        0 == l.length &&
                          i.createElement(
                            "div",
                            null,
                            i.createElement(
                              "div",
                              null,
                              i.createElement(
                                "div",
                                { className: "Label" },
                                (0, d.we)("#BindingUI_List_NoBindingsFound"),
                              ),
                            ),
                          ),
                        i.createElement(
                          "div",
                          {
                            className: "ButtonControl DeveloperLabel Inline",
                            onClick: this.CreateBinding,
                          },
                          (0, d.we)("#BindingUI_List_CreateBinding"),
                        ),
                      ),
                    ),
                h.n.ShowBindingListError &&
                  i.createElement(w, {
                    sError: h.n.BindingListError,
                    bCanClose: h.n.CanCloseBindingListError,
                  }),
              )
            );
          }
        };
        (0, n.Cg)([u.o], M.prototype, "RefreshBindingList", null),
          (0, n.Cg)([u.o], M.prototype, "CreateBinding", null),
          (0, n.Cg)([u.o], M.prototype, "SelectBinding", null),
          (0, n.Cg)([u.o], M.prototype, "ViewBinding", null),
          (0, n.Cg)([u.o], M.prototype, "OnControllerDropdownChanged", null),
          (0, n.Cg)([u.o], M.prototype, "ComputeResultsSection", null),
          (0, n.Cg)([u.o], M.prototype, "CreateControllerTypeDropdown", null),
          (M = (0, n.Cg)([s.PA], M));
        let O = class extends i.Component {
          constructor(e) {
            super(e),
              (this.state = {
                strImageURL: _.s.GetAppImageURL(this.props.app.key),
              });
          }
          componentWillReceiveProps(e) {
            e.app.key != this.props.app.key &&
              this.setState({ strImageURL: _.s.GetAppImageURL(e.app.key) });
          }
          render() {
            return i.createElement(
              "div",
              {
                className: "AppSelectContainer",
                onClick: () => {
                  this.props.fnSelectApp(this.props.app.key);
                },
              },
              i.createElement("div", {
                className: "AppImage",
                style: {
                  backgroundImage: "url('" + this.state.strImageURL + "')",
                },
              }),
              i.createElement(
                "div",
                { className: "AppSelectName AllCaps" },
                this.props.app.name,
              ),
            );
          }
        };
        O = (0, n.Cg)([s.PA], O);
        let k = class extends i.Component {
          constructor(e) {
            super(e),
              (this.m_bInHeadset = !1),
              (this.m_bInHeadset = !!a.Ay && !h.n.DesktopMode),
              (this.state = { bShowRecentApps: !1 });
          }
          SelectApplication(e) {
            p.B$.SetSelectedApp(e), h.n.ShowBindingList();
          }
          OnShowMoreApps() {
            this.setState({ bShowRecentApps: !0 });
          }
          renderAppColumn() {
            let e = _.s.GetApp("openvr.component.vrcompositor"),
              t = _.s.GetApp("openvr.tool.steamvr_environments"),
              o = _.s.GetRecentApps();
            t && (o = o.filter((e) => e.key != t.key));
            let n,
              l = _.s.GetCurrentSceneProcess();
            return (
              !l && o.length > 0 && (l = o[0]),
              l && (o = o.filter((e) => e.key != l.key)),
              (n = this.state.bShowRecentApps
                ? i.createElement(
                    "div",
                    { className: "AppSelectList" },
                    i.createElement(
                      "div",
                      { className: "AppSelectListItems" },
                      o.map((e, t) =>
                        i.createElement(O, {
                          key: t,
                          app: e,
                          fnSelectApp: this.SelectApplication,
                        }),
                      ),
                    ),
                  )
                : i.createElement(
                    "div",
                    {
                      className: "ButtonControl AppSelectShowMoreButton",
                      onClick: this.OnShowMoreApps,
                    },
                    (0, d.we)("#AppSelect_ShowMoreApps"),
                  )),
              i.createElement(
                "div",
                { className: "AppSelectColumn" },
                i.createElement(
                  "div",
                  { className: "AppSelectList" },
                  i.createElement(
                    "div",
                    { className: "AppSelectListItems" },
                    l &&
                      i.createElement(O, {
                        app: l,
                        fnSelectApp: this.SelectApplication,
                      }),
                    e &&
                      i.createElement(O, {
                        app: e,
                        fnSelectApp: this.SelectApplication,
                      }),
                    t &&
                      i.createElement(O, {
                        app: t,
                        fnSelectApp: this.SelectApplication,
                      }),
                  ),
                ),
                n,
              )
            );
          }
          render() {
            return i.createElement(
              "div",
              { className: "AppSelectPageWrapper" },
              i.createElement(I, {
                fnOnClick: h.n.ReturnToSettingsUI,
                strTitle: (0, d.we)("#AppSelect_EditBindings"),
                bShowBackButton: this.m_bInHeadset,
              }),
              i.createElement(
                "div",
                { className: "AppSelectColumnWrapper" },
                this.renderAppColumn(),
              ),
            );
          }
        };
        (0, n.Cg)([u.o], k.prototype, "SelectApplication", null),
          (0, n.Cg)([u.o], k.prototype, "OnShowMoreApps", null),
          (k = (0, n.Cg)([s.PA], k));
        var N = o(4493),
          T = o(6138),
          P = o(7379);
        const L = ({ quaternion: e, width: t, height: o }) => {
          const n = (0, i.useRef)(null),
            l = (0, i.useCallback)(
              (t, o, n) => {
                t.clearRect(0, 0, o, n), (t.lineWidth = 3);
                const i = o / 2,
                  l = n / 2,
                  s = o / 2,
                  r = (e, t) => {
                    const o = t.w * e.x + t.y * e.z - t.z * e.y,
                      n = t.w * e.y + t.z * e.x - t.x * e.z,
                      i = t.w * e.z + t.x * e.y - t.y * e.x,
                      l = -t.x * e.x - t.y * e.y - t.z * e.z;
                    return {
                      x: o * t.w + l * -t.x + n * -t.z - i * -t.y,
                      y: n * t.w + l * -t.y + i * -t.x - o * -t.z,
                      z: i * t.w + l * -t.z + o * -t.y - n * -t.x,
                    };
                  },
                  a = [
                    { x: 0, y: s, z: 0 },
                    { x: 0, y: -s, z: 0 },
                  ],
                  c = [
                    { x: 0, y: 0, z: s },
                    { x: 0, y: 0, z: -s },
                  ],
                  d = [
                    { x: s, y: 0, z: 0 },
                    { x: -s, y: 0, z: 0 },
                  ].map((t) => r(t, e)),
                  p = a.map((t) => r(t, e)),
                  h = c.map((t) => r(t, e)),
                  u = (e, o, n, s) => {
                    const r = t.createLinearGradient(i + e.x, l - e.y, i, l);
                    r.addColorStop(0, n),
                      r.addColorStop(1, s),
                      (t.strokeStyle = r),
                      t.beginPath(),
                      t.moveTo(i + e.x, l - e.y),
                      t.lineTo(i + o.x, l - o.y),
                      t.stroke();
                  };
                u(d[1], d[0], "#00000000", "#FF0000DD"),
                  u(p[1], p[0], "#00000000", "#00FF00DD"),
                  u(h[1], h[0], "#00000000", "#2222FFFF");
              },
              [e],
            );
          return (
            (0, i.useEffect)(() => {
              const e = n.current;
              if (e) {
                const t = e.getContext("2d");
                if (t) {
                  const o = e.width,
                    n = e.height;
                  l(t, o, n);
                }
              }
            }, [e, t, o, l]),
            i.createElement(
              "div",
              { className: "AxisWrapper" },
              i.createElement("canvas", {
                className: "AxisCanvas",
                ref: n,
                width: t,
                height: o,
              }),
            )
          );
        };
        var R, D, F;
        !(function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Boolean = 1)] = "Boolean"),
            (e[(e.Vector1 = 2)] = "Vector1"),
            (e[(e.Vector2 = 3)] = "Vector2"),
            (e[(e.Vector3 = 4)] = "Vector3"),
            (e[(e.Pose = 20)] = "Pose"),
            (e[(e.SimpleHaptic = 21)] = "SimpleHaptic"),
            (e[(e.Skeleton = 22)] = "Skeleton"),
            (e[(e.EyeTracking = 23)] = "EyeTracking");
        })(R || (R = {})),
          (function (e) {
            (e[(e.Estimated = 0)] = "Estimated"),
              (e[(e.Partial = 1)] = "Partial"),
              (e[(e.Full = 2)] = "Full");
          })(D || (D = {})),
          (function (e) {
            (e[(e.Unknown = 0)] = "Unknown"),
              (e[(e.Boolean = 1)] = "Boolean"),
              (e[(e.Scalar = 2)] = "Scalar"),
              (e[(e.Pose = 3)] = "Pose"),
              (e[(e.Skeleton = 4)] = "Skeleton"),
              (e[(e.Haptic = 5)] = "Haptic");
          })(F || (F = {}));
        let x = 16777216;
        function G(e) {
          return "number" != typeof e
            ? "-"
            : e >= x && e <= 33554431
              ? (0, d.we)("#InputDebugger_Priority_Overlay", e - x)
              : e.toFixed(0);
        }
        class V extends i.Component {
          constructor(e) {
            super(e),
              (this.m_mailbox = new a._n()),
              (this.m_msgNextState = null),
              this.m_mailbox.Init("input_debugger"),
              this.m_mailbox.RegisterHandler("input_frame", this.OnInputFrame),
              null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRPathProperties.SetInt32PathProperty(
                  "/input_debugger_pid",
                  0,
                ),
              (this.state = {});
          }
          OnSelectApp(e) {
            this.setState({
              sCurrentApp: e,
              latestState: null,
              actionManifest: null,
              sError: null,
              sCurrentActionSet: null,
            });
            let t = _.s.GetApp(e);
            t.pid &&
              (null === VRHTML ||
                void 0 === VRHTML ||
                VRHTML.VRPathProperties.SetInt32PathProperty(
                  "/input_debugger_pid",
                  t.pid,
                )),
              (0, p.xM)(e)
                .then((e) => {
                  this.setState({ actionManifest: e });
                })
                .catch((e) => {
                  this.setState({
                    sError: (0, d.we)("InputDebugger_ActionManifestFailed"),
                  });
                });
          }
          OnInputFrame(e) {
            if (null == this.state.sCurrentApp) {
              let t = _.s.FindAppByPid(e.pid);
              t && this.OnSelectApp(t.key);
            }
            !this.state.sCurrentActionSet &&
              e.actions &&
              this.SetActionSet(e.actions[0].actionSet),
              (this.m_msgNextState = e);
          }
          componentDidMount() {
            this.m_timerStateUpdate = window.setInterval(() => {
              this.m_msgNextState &&
                (this.setState({ latestState: this.m_msgNextState }),
                (this.m_msgNextState = null));
            }, 100);
          }
          componentWillUnmount() {
            null === VRHTML ||
              void 0 === VRHTML ||
              VRHTML.VRPathProperties.SetInt32PathProperty(
                "/input_debugger_pid",
                0,
              ),
              this.m_timerStateUpdate &&
                window.clearInterval(this.m_timerStateUpdate);
          }
          GetActionSetName(e) {
            let t;
            return (
              this.state.actionManifest &&
                (t = this.state.actionManifest.action_sets.find(
                  (t) => t.name.toLowerCase() == e.toLowerCase(),
                )),
              t ? t.localized_name : e
            );
          }
          GetActionName(e) {
            let t;
            if (this.state.actionManifest)
              for (let o of this.state.actionManifest.action_sets)
                if (
                  ((t = o.actions.find(
                    (t) => t.name.toLowerCase() == e.toLowerCase(),
                  )),
                  t)
                )
                  break;
            return t ? t.localized_name : e;
          }
          GetMaxPriority(e) {
            var t, o, n, i, l, s;
            return Math.max(
              null !==
                (n =
                  null ===
                    (o =
                      null === (t = this.state.latestState) || void 0 === t
                        ? void 0
                        : t.priorityMap) || void 0 === o
                    ? void 0
                    : o[e]) && void 0 !== n
                ? n
                : null,
              null !==
                (s =
                  null ===
                    (l =
                      null === (i = this.state.latestState) || void 0 === i
                        ? void 0
                        : i.globalPriorityMap) || void 0 === l
                    ? void 0
                    : l[e]) && void 0 !== s
                ? s
                : null,
            );
          }
          renderActionSets() {
            if (!this.state.latestState.activeActionSets)
              return i.createElement(
                "div",
                { className: "Label" },
                (0, d.we)("#InputDebugger_NoActiveActionSets"),
              );
            let e = [];
            for (let t of this.state.latestState.activeActionSets) {
              let o, n;
              t.secondaryActionSet
                ? ((o = t.secondaryActionSet), (n = this.GetActionSetName(o)))
                : ((n = (0, d.we)("#InputDebugger_None")), (o = ""));
              let l = this.GetActionSetName(t.actionSet),
                s = t.restrictToDevice
                  ? t.restrictToDevice
                  : (0, d.we)("#InputDebugger_None");
              e.push(
                i.createElement(
                  "div",
                  {
                    className: "ActiveActionSet",
                    key: t.actionSet + t.restrictToDevice,
                  },
                  i.createElement(
                    "div",
                    { className: "Label ActionSetName" },
                    l,
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionSetPath" },
                    t.actionSet,
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionSetPriority" },
                    G(t.priority),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionSetDevice" },
                    s,
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionSetSecondaryName" },
                    n,
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionSetSecondaryPath" },
                    o,
                  ),
                ),
              );
            }
            return i.createElement(
              i.Fragment,
              null,
              i.createElement(
                "div",
                { className: "Label InputDebuggerSectionHeading" },
                (0, d.we)("#InputDebugger_ActiveActionSets"),
              ),
              i.createElement(
                "div",
                { className: "ActiveActionSetContainer" },
                i.createElement(
                  "div",
                  { className: "ActiveActionSetsHeader" },
                  i.createElement(
                    "div",
                    { style: { gridColumn: "1 / span 2" }, className: "Label" },
                    (0, d.we)("#InputDebugger_ActionSetName"),
                  ),
                  i.createElement(
                    "div",
                    { style: { gridColumn: "3" }, className: "Label" },
                    (0, d.we)("#InputDebugger_Priority"),
                  ),
                  i.createElement(
                    "div",
                    { style: { gridColumn: "4" }, className: "Label" },
                    (0, d.we)("#InputDebugger_Device"),
                  ),
                  i.createElement(
                    "div",
                    { style: { gridColumn: "5 / span 2" }, className: "Label" },
                    (0, d.we)("#InputDebugger_SecondaryActionSetName"),
                  ),
                ),
                e,
              ),
            );
          }
          SetActionSet(e) {
            this.setState({ sCurrentActionSet: e });
          }
          ShowFilterState(e) {
            this.setState({ sFilterPath: e });
          }
          renderActionHeader(e) {
            switch (e) {
              case R.Boolean:
              case R.Vector1:
              case R.Vector2:
              case R.Vector3:
                return [
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "source" },
                    (0, d.we)("#InputDebugger_Source"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "binding" },
                    (0, d.we)("#InputDebugger_Binding"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "active" },
                    (0, d.we)("#InputDebugger_Active"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "origin" },
                    (0, d.we)("#InputDebugger_ActiveOrigin"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "value" },
                    (0, d.we)("#InputDebugger_Value"),
                  ),
                ];
              case R.Pose:
                return [
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "source" },
                    (0, d.we)("#InputDebugger_Source"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "binding" },
                    (0, d.we)("#InputDebugger_Binding"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "active" },
                    (0, d.we)("#InputDebugger_Active"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "origin" },
                    (0, d.we)("#InputDebugger_ActiveOrigin"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "position" },
                    (0, d.we)("#InputDebugger_Pose_Position"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "rotation" },
                    (0, d.we)("#InputDebugger_Pose_Rotation"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "state" },
                    (0, d.we)("#InputDebugger_Pose_State"),
                  ),
                ];
              case R.EyeTracking:
                return [
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "source" },
                    (0, d.we)("#InputDebugger_Source"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "binding" },
                    (0, d.we)("#InputDebugger_Binding"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "active" },
                    (0, d.we)("#InputDebugger_Active"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "origin" },
                    (0, d.we)("#InputDebugger_ActiveOrigin"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "tracked" },
                    (0, d.we)("#InputDebugger_Tracked"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "valid" },
                    (0, d.we)("#InputDebugger_Valid"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "origin_position" },
                    (0, d.we)("#InputDebugger_EyeTracking_Origin"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionHeader", key: "target_position" },
                    (0, d.we)("#InputDebugger_EyeTracking_Target"),
                  ),
                ];
              default:
                return null;
            }
          }
          renderBoolean(e, t) {
            return i.createElement(
              "div",
              {
                className: (0, c.FH)(
                  "BooleanValue",
                  ["IsTrue", e],
                  "Label",
                  "ActionEntry",
                ),
                key: t,
              },
              e ? "TRUE" : "false",
            );
          }
          renderScalar(e, t) {
            return i.createElement(
              "div",
              { className: (0, c.FH)("Label", "ActionEntry"), key: t },
              e.toFixed(2),
            );
          }
          renderBinding(e, t) {
            var o, n;
            if (
              null === (o = e.binding) || void 0 === o
                ? void 0
                : o.startsWith("/filters/")
            )
              return i.createElement(
                "div",
                {
                  className: "Label ActionEntry FilterLink",
                  key: t + "_binding",
                },
                i.createElement(
                  "a",
                  {
                    href: "#",
                    onClick: () => {
                      this.ShowFilterState(e.binding);
                    },
                  },
                  (0, d.we)("#InputDebugger_FilterDetails"),
                ),
              );
            {
              let o = this.GetMaxPriority(e.binding),
                l = null !== (n = e.binding) && void 0 !== n ? n : "-";
              return (
                "number" == typeof o &&
                  (l += " " + (0, d.we)("#InputDebugger_PriorityValue", G(o))),
                i.createElement(
                  "div",
                  {
                    className: "Label ActionEntry",
                    key: t + e.inputSource + "_binding",
                  },
                  l,
                )
              );
            }
          }
          renderActionEntry(e, t, o) {
            var n, l, s, r, a, c, d, p, h;
            switch (e.type) {
              case R.Boolean:
                let e = t.data;
                return [
                  i.createElement(
                    "div",
                    { className: "Label ActionEntry", key: o + "_source" },
                    null !== (n = t.inputSource) && void 0 !== n ? n : "-",
                  ),
                  this.renderBinding(t, o),
                  this.renderBoolean(t.data.active, o + "_active"),
                  i.createElement(
                    "div",
                    { className: "Label ActionEntry", key: o + "_origin" },
                    null !== (l = t.data.activeOrigin) && void 0 !== l
                      ? l
                      : "-",
                  ),
                  this.renderBoolean(e.state, o + "_value"),
                ];
              case R.Vector1:
              case R.Vector2:
              case R.Vector3:
                let u = t.data,
                  m = u.x.toFixed(2);
                return (
                  void 0 !== u.y && (m += ", " + u.y.toFixed(2)),
                  void 0 !== u.z && (m += ", " + u.z.toFixed(2)),
                  [
                    i.createElement(
                      "div",
                      { className: "Label ActionEntry", key: o + "_source" },
                      null !== (s = t.inputSource) && void 0 !== s ? s : "-",
                    ),
                    this.renderBinding(t, o),
                    this.renderBoolean(t.data.active, o + "_active"),
                    i.createElement(
                      "div",
                      { className: "Label ActionEntry", key: o + "_origin" },
                      null !== (r = t.data.activeOrigin) && void 0 !== r
                        ? r
                        : "-",
                    ),
                    i.createElement(
                      "div",
                      { className: "Label ActionEntry", key: o + "_value" },
                      m,
                    ),
                  ]
                );
              case R.Pose:
                let g = t.data,
                  S = `${g.position_x.toFixed(2)}, ${g.position_y.toFixed(2)}, ${g.position_z.toFixed(2)}`,
                  _ = {
                    x: g.rotation_x,
                    y: g.rotation_y,
                    z: g.rotation_z,
                    w: g.rotation_w,
                  },
                  C = `(${g.rotation_x.toFixed(2)}, ${g.rotation_y.toFixed(2)}, ${g.rotation_z.toFixed(2)})`;
                return [
                  i.createElement(
                    "div",
                    { className: "Label ActionEntry", key: o + "_source" },
                    null !== (a = t.inputSource) && void 0 !== a ? a : "-",
                  ),
                  this.renderBinding(t, o),
                  this.renderBoolean(t.data.active, o + "_active"),
                  i.createElement(
                    "div",
                    { className: "Label ActionEntry", key: o + "_origin" },
                    null !== (c = t.data.activeOrigin) && void 0 !== c
                      ? c
                      : "-",
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionEntry", key: o + "_position" },
                    g ? S : "-",
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionEntry", key: o + "_rotation" },
                    null != C ? C : "-",
                    i.createElement(L, {
                      quaternion: _,
                      width: 50,
                      height: 50,
                    }),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label ActionEntry", key: o + "_state" },
                    null !== (d = g.tracking) && void 0 !== d ? d : "-",
                  ),
                ];
              case R.EyeTracking:
                let y = t.data,
                  f = `${y.origin_position_x.toFixed(5)}, ${y.origin_position_y.toFixed(5)}, ${y.origin_position_z.toFixed(5)}`,
                  b = `${y.target_position_x.toFixed(5)}, ${y.target_position_y.toFixed(5)}, ${y.target_position_z.toFixed(5)}`;
                return [
                  i.createElement(
                    "div",
                    { className: "Label ActionEntry", key: o + "_source" },
                    null !== (p = t.inputSource) && void 0 !== p ? p : "-",
                  ),
                  this.renderBinding(t, o),
                  this.renderBoolean(t.data.active, o + "_active"),
                  i.createElement(
                    "div",
                    { className: "Label ActionEntry", key: o + "_origin" },
                    null !== (h = t.data.activeOrigin) && void 0 !== h
                      ? h
                      : "-",
                  ),
                  this.renderBoolean(y.tracked, o + "_tracked"),
                  this.renderBoolean(y.valid, o + "_valid"),
                  i.createElement(
                    "div",
                    {
                      className: "Label ActionEntry",
                      key: o + "_origin_position",
                    },
                    y ? f : "-",
                  ),
                  i.createElement(
                    "div",
                    {
                      className: "Label ActionEntry",
                      key: o + "_target_position",
                    },
                    y ? b : "-",
                  ),
                ];
              default:
                return null;
            }
          }
          renderAction(e) {
            if (!e) return [null, 0];
            let t = this.renderActionHeader(e.type);
            if (!t) return [null, 0];
            let o = [t],
              n = 1;
            if (e.entries)
              for (let i of e.entries) {
                let l = this.renderActionEntry(e, i, (n++).toString());
                if (l) {
                  if (l.length != t.length)
                    throw new Error(
                      "Values must have the same length as header",
                    );
                  o.push(l);
                }
              }
            let l = [];
            for (let e = 0; e < o[0].length; e++)
              for (let t = 0; t < o.length; t++) l.push(o[t][e]);
            let s = Math.max(o.length, 5);
            return [
              i.createElement(
                "div",
                { className: "Action", key: e.path },
                i.createElement(
                  "div",
                  {
                    className: "ActionName Label",
                    style: { gridColumn: "1 / " + (s + 1) },
                  },
                  this.GetActionName(e.path),
                  i.createElement(
                    "span",
                    { className: "ActionPath" },
                    " (",
                    e.path,
                    ")",
                  ),
                ),
                l,
              ),
              s,
            ];
          }
          renderCurrentActions() {
            if (!this.state.sCurrentActionSet) return null;
            let e = new Set(),
              t = [],
              o = 0;
            for (let n of this.state.latestState.actions)
              if (n.actionSet == this.state.sCurrentActionSet) {
                let [i, l] = this.renderAction(n);
                if (!i) continue;
                (o = Math.max(l, o)), t.push(i), e.add(n.path.toLowerCase());
              }
            if (this.state.actionManifest) {
              let n = this.state.actionManifest.action_sets.find(
                (e) => e.name == this.state.sCurrentActionSet,
              );
              if (n)
                for (let l of n.actions)
                  e.has(l.name.toLowerCase()) ||
                    ("pose" != l.type &&
                      "skeleton" != l.type &&
                      "vibration" != l.type &&
                      (t.push(
                        i.createElement(
                          "div",
                          { className: "Action", key: l.name },
                          i.createElement(
                            "div",
                            {
                              className: "ActionName Label",
                              style: { gridColumn: "1 / " + (o + 1) },
                            },
                            l.localized_name,
                            i.createElement(
                              "span",
                              { className: "ActionPath" },
                              " (",
                              l.name,
                              ")",
                            ),
                          ),
                          i.createElement(
                            "div",
                            { className: "Unbound Label" },
                            (0, d.we)("#InputDebugger_ActionUnbound"),
                          ),
                        ),
                      ),
                      e.add(l.name.toLowerCase())));
            }
            return i.createElement(
              "div",
              { className: "ActionListWrapper" },
              i.createElement("div", { className: "ActionList" }, t),
            );
          }
          renderActions() {
            if (!this.state.latestState.actions)
              return i.createElement(
                "div",
                { className: "Label" },
                (0, d.we)("#InputDebugger_NoActions"),
              );
            let e = new Set();
            for (let t of this.state.latestState.actions) e.add(t.actionSet);
            let t = [];
            for (let o of e)
              t.push(
                i.createElement(
                  T.$,
                  {
                    onClick: () => {
                      this.SetActionSet(o);
                    },
                    key: o,
                    className: (0, c.FH)("ActionSetButton", "ButtonControl", [
                      "Selected",
                      o == this.state.sCurrentActionSet,
                    ]),
                  },
                  this.GetActionSetName(o),
                ),
              );
            return i.createElement(
              i.Fragment,
              null,
              i.createElement(
                "div",
                { className: "Label InputDebuggerSectionHeading" },
                (0, d.we)("#InputDebugger_Actions"),
              ),
              i.createElement(
                "div",
                { className: "ActionContainer" },
                i.createElement("div", { className: "ActionSetButtons" }, t),
                this.renderCurrentActions(),
              ),
            );
          }
          renderLatestState() {
            return this.state.latestState
              ? i.createElement(
                  "div",
                  { className: "DebuggerState" },
                  this.renderActionSets(),
                  this.renderActions(),
                )
              : i.createElement(
                  "div",
                  { className: "Label" },
                  (0, d.we)("#InputDebugger_WaitingForApp"),
                );
          }
          FindFilter(e) {
            var t, o;
            if (this.state.latestState && this.state.latestState.filters)
              for (let n of this.state.latestState.filters) {
                if (
                  null === (t = n.inputs) || void 0 === t
                    ? void 0
                    : t.find((t) => t.path == e)
                )
                  return n;
                if (
                  null === (o = n.outputs) || void 0 === o
                    ? void 0
                    : o.find((t) => t.path == e)
                )
                  return n;
              }
          }
          renderFilterIO(e, t) {
            let o;
            switch (e.type) {
              case F.Boolean:
                o = this.renderBoolean(e.value);
                break;
              case F.Scalar:
                o = this.renderScalar(e.value);
                break;
              default:
                o = i.createElement("div", { className: "Label" }, F[e.type]);
            }
            let n = this.GetMaxPriority(e.path);
            return i.createElement(
              "div",
              { className: "FilterIO", key: e.path },
              i.createElement("div", { className: "Label" }, e.path, ": "),
              o,
              t &&
                e.path.startsWith("/filters/") &&
                i.createElement(
                  "a",
                  {
                    href: "#",
                    onClick: () => {
                      this.ShowFilterState(e.path);
                    },
                  },
                  (0, d.we)("#InputDebugger_FilterDetails"),
                ),
              "number" == typeof n &&
                i.createElement(
                  "div",
                  { className: "Label" },
                  (0, d.we)("#InputDebugger_PriorityValue", G(n)),
                ),
              e.suppressedByPriority &&
                i.createElement(
                  "div",
                  { className: "Label Suppressed" },
                  (0, d.we)("#InputDebugger_Suppressed"),
                ),
            );
          }
          renderFilterState() {
            if (!this.state.sFilterPath) return null;
            let e = this.FindFilter(this.state.sFilterPath),
              t = [];
            for (let o in e.parameters) {
              let n,
                l = e.parameters[o];
              switch (typeof l) {
                case "boolean":
                  n = l ? "true" : "false";
                  break;
                case "number":
                  n = l.toFixed(2);
                  break;
                default:
                  n = JSON.stringify(l);
              }
              t.push(
                i.createElement(
                  "div",
                  { className: "Label", key: o },
                  o,
                  ": ",
                  n,
                ),
              );
            }
            let o = [];
            for (let t of e.inputs) o.push(this.renderFilterIO(t, !0));
            o ||
              o.push(
                i.createElement(
                  "div",
                  { className: "Label", key: "none" },
                  (0, d.we)("#InputDebugger_None"),
                ),
              );
            let n = [];
            for (let t of e.outputs) n.push(this.renderFilterIO(t, !1));
            return (
              n ||
                n.push(
                  i.createElement(
                    "div",
                    { className: "Label", key: "none" },
                    (0, d.we)("#InputDebugger_None"),
                  ),
                ),
              i.createElement(
                P.a,
                {
                  onDismissRequested: () => {
                    this.ShowFilterState(null);
                  },
                  className: "FilterDetails",
                },
                i.createElement(
                  "div",
                  { className: "Label InputDebuggerSectionHeading" },
                  (0, d.we)("#InputDebugger_FilterState_Title", e.name),
                  " ",
                ),
                i.createElement(
                  "div",
                  { className: "Label" },
                  (0, d.we)("#InputDebugger_FilterType"),
                  e.type,
                ),
                t &&
                  i.createElement(
                    i.Fragment,
                    null,
                    i.createElement(
                      "div",
                      { className: "Label InputDebuggerHeading" },
                      (0, d.we)("#InputDebugger_Parameters"),
                    ),
                    i.createElement("div", { className: "ParameterList" }, t),
                  ),
                i.createElement(
                  "div",
                  { className: "Label InputDebuggerHeading" },
                  (0, d.we)("#InputDebugger_Inputs"),
                ),
                i.createElement("div", { className: "InputList" }, o),
                i.createElement(
                  "div",
                  { className: "Label InputDebuggerHeading" },
                  (0, d.we)("#InputDebugger_Outputs"),
                ),
                i.createElement("div", { className: "OutputList" }, n),
              )
            );
          }
          render() {
            let e = _.s.GetRunningApps(),
              t = [];
            for (let o of e)
              t.push({ value: o.key, sLabel: `${o.name} (pid: ${o.pid})` });
            return i.createElement(
              "div",
              { className: "DebuggerMain" },
              i.createElement(I, {
                fnOnClick: h.n.ReturnToSettingsUI,
                strTitle: (0, d.we)("#InputDebugger_Title"),
              }),
              i.createElement(
                "div",
                { className: "AppDropdownWrapper" },
                i.createElement(N.ms, {
                  items: t,
                  onChange: this.OnSelectApp,
                  value: this.state.sCurrentApp,
                  defaultLabel: (0, d.we)("#InputDebugger_SelectApplication"),
                }),
              ),
              !this.state.actionManifest &&
                i.createElement(
                  "div",
                  { className: "Label" },
                  (0, d.we)("#InputDebugger_ActionManifestLoading"),
                ),
              this.state.sError &&
                i.createElement(
                  "div",
                  { className: "Label Error" },
                  this.state.sError,
                ),
              this.renderLatestState(),
              this.renderFilterState(),
            );
          }
        }
        (0, n.Cg)([u.o], V.prototype, "OnSelectApp", null),
          (0, n.Cg)([u.o], V.prototype, "OnInputFrame", null),
          (0, n.Cg)([u.o], V.prototype, "SetActionSet", null);
        var H = o(8108),
          U = o(1333),
          W = o(7960),
          $ = o(3068);
        let z = class extends i.Component {
          constructor(e) {
            super(e), (this.state = { bShowDeleteConfirmModal: !1 });
          }
          OnDelete() {
            this.setState({ bShowDeleteConfirmModal: !0 });
          }
          OnDeleteConfirmed() {
            this.setState({ bShowDeleteConfirmModal: !1 }),
              this.props.bReadOnly ||
                this.props.controllerWatcher.forEach((e) => {
                  e.DeleteInputMode(this.props.iMode);
                });
          }
          OnDeleteCancel() {
            this.setState({ bShowDeleteConfirmModal: !1 });
          }
          OnSourceModeChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetInputMode(e, this.props.iMode);
            });
          }
          renderDeleteConfirmModal() {
            let e = this.props.controllerWatcher[0];
            return i.createElement(
              r.A,
              {
                visible: this.state.bShowDeleteConfirmModal,
                onClose: this.OnDeleteCancel,
                showCloseButton: !1,
                animation: "fade",
                className: "ModeSettingsModal",
                closeOnEsc: !0,
              },
              this.state.bShowDeleteConfirmModal &&
                i.createElement(
                  "div",
                  { className: "FlexFullHeightColumnCentered" },
                  i.createElement(
                    "div",
                    { className: "Label" },
                    (0, d.we)(
                      "#BindingUI_Mode_Delete_Confirm",
                      (0, d.we)(
                        "#SourceInputMode_" + e.GetMode(this.props.iMode),
                      ),
                      e.GetControllerInputName,
                    ),
                  ),
                  i.createElement(
                    "div",
                    { className: "FlexRow" },
                    i.createElement(
                      "div",
                      {
                        className: "ButtonControl",
                        onClick: this.OnDeleteConfirmed,
                      },
                      (0, d.we)("#Button_Delete"),
                    ),
                    i.createElement(
                      "div",
                      {
                        className: "ButtonControl",
                        onClick: this.OnDeleteCancel,
                      },
                      (0, d.we)("#Button_Cancel"),
                    ),
                  ),
                ),
            );
          }
          render() {
            let e = this.props.controllerWatcher[0];
            if (!this.props.bEditMode)
              return i.createElement(
                "div",
                { className: "FlexRow BindingHeaderWrapper" },
                i.createElement(
                  "div",
                  { className: "Label BindingLabel ReadOnly BindingHeader" },
                  (0, d.we)(
                    "#SourceInputMode_UseAs",
                    (0, d.we)(
                      "#SourceInputMode_" + e.GetMode(this.props.iMode),
                    ),
                  ),
                ),
                !this.props.bReadOnly &&
                  i.createElement("img", {
                    className:
                      "ActionButtonImage SourceModeButtonImage FlexRightAlignChild",
                    src: "images/bindingui/icon_trash.svg",
                    onClick: this.OnDelete,
                  }),
                this.renderDeleteConfirmModal(),
              );
            let t = p.B$.GetInputModesForSourceType(
              e.GetInputSourceType,
              e.GetInputSourceForceSupport,
            );
            if (0 == t.length) return null;
            let o = t.map(
              (e, t) =>
                new g(
                  e,
                  (0, d.we)("#SourceInputMode_" + e),
                  null,
                  (0, d.we)("#SourceInputMode_" + e + "_tooltip"),
                ),
            );
            o.push(new g("none", (0, d.we)("#SourceInputMode_none")));
            let n =
                1 == e.GetButtonSide
                  ? "#BindingUI_LeftHandController"
                  : "#BindingUI_RightHandController",
              l = p.B$.SelectedControllerTypeLocalizedName;
            0 != e.GetButtonSide && (l = (0, d.we)(n, l, ""));
            let s = (0, d.we)(
              "#SourceInputMode_SelectMode",
              l,
              e.GetControllerInputName,
            );
            return i.createElement(
              "div",
              { className: "FlexRow BindingHeaderWrapper" },
              i.createElement(S, {
                sModalTitleString: s,
                vecOptions: o,
                sValueSelectedItem: e.GetMode(this.props.iMode),
                bShowOptionsOnStart: this.props.bShowModeOptionsDropDownOnStart,
                sLocalizedSelectedItem: (0, d.we)(
                  "#SourceInputMode_" + e.GetMode(this.props.iMode),
                ),
                fnOptionSelected: this.OnSourceModeChanged,
              }),
              i.createElement("img", {
                className:
                  "ActionButtonImage SourceModeButtonImage FlexRightAlignChild",
                src: "images/bindingui/icon_trash.svg",
                onClick: this.OnDelete,
              }),
              this.renderDeleteConfirmModal(),
            );
          }
        };
        (0, n.Cg)([u.o], z.prototype, "OnDelete", null),
          (0, n.Cg)([u.o], z.prototype, "OnDeleteConfirmed", null),
          (0, n.Cg)([u.o], z.prototype, "OnDeleteCancel", null),
          (0, n.Cg)([u.o], z.prototype, "OnSourceModeChanged", null),
          (0, n.Cg)([u.o], z.prototype, "renderDeleteConfirmModal", null),
          (z = (0, n.Cg)([s.PA], z));
        class j extends i.Component {
          render() {
            let e =
                null == this.props.SelectedAction
                  ? "none"
                  : this.props.SelectedAction.name,
              t =
                null == this.props.SelectedAction
                  ? (0, d.we)("#SourceInputAction_none")
                  : this.props.SelectedAction.localized_name,
              o = "FlexRow BindingActionWrapper";
            null == this.props.SelectedAction && (o += " None");
            let n = "Label BindingLabel";
            return (
              this.props.bReadOnly && (n += " ReadOnly"),
              i.createElement(
                "div",
                { className: o },
                i.createElement(
                  m.Ay,
                  {
                    content: (0, d.we)(
                      this.props.sLocalizedInputType + "_tooltip",
                    ),
                    theme: "ControllerBindingToolTip",
                  },
                  i.createElement(
                    "div",
                    { className: n },
                    (0, d.we)(this.props.sLocalizedInputType),
                  ),
                ),
                !this.props.bReadOnly &&
                  i.createElement(S, {
                    vecOptions: this.props.vecOptions,
                    sValueSelectedItem: e,
                    sHeaderClass: "BindingLabelAction",
                    sLocalizedSelectedItem: t,
                    fnOptionSelected: this.props.fnOptionSelected,
                  }),
                this.props.bReadOnly &&
                  i.createElement(
                    "div",
                    { className: n + " BindingLabelAction" },
                    t,
                  ),
              )
            );
          }
        }
        class q extends i.Component {
          constructor(e) {
            super(e),
              (this.state = {
                bEditMode: this.props.bStartInEditMode,
                bSettingsVisible: !1,
              });
          }
          componentWillReceiveProps(e) {
            e.bReadOnly &&
              this.state.bEditMode &&
              (this.setState({ bEditMode: !1 }), this.props.ParentEdit(!1)),
              e.sActionSet != this.props.sActionSet && this.LoadDefaults();
          }
          LoadDefaults() {
            if (null == this.defaultProperties) return;
            let e = this.props.controllerWatcher[0];
            e.GetInputSourceClickSupport && e.GetClickAction(this.props.iMode);
            for (let e of this.defaultProperties)
              this.props.controllerWatcher.forEach((t) => {
                let o = t.GetParameter(this.props.iMode, e.mode, e.property);
                (o =
                  null == o
                    ? e.default
                    : "float" == e.type
                      ? parseFloat(o)
                      : "int" == e.type
                        ? parseInt(o)
                        : "bool" == e.type
                          ? "true" == o || "1" == o
                          : o.toString()),
                  (this.state[e.variableName] = o);
              });
          }
          EnsurePropertySet(e) {
            let t = !1;
            for (let o of this.defaultProperties)
              if (o.property == e) {
                (t = !0),
                  this.props.controllerWatcher.forEach((e) => {
                    if (
                      null ==
                      e.GetParameter(this.props.iMode, o.mode, o.property)
                    ) {
                      console.log(
                        "Setting currently unset param to default: ",
                        e.GetParameter(this.props.iMode, o.mode, o.property),
                        this.props.iMode,
                        o.mode,
                        o.property,
                        o.default.toString(),
                      ),
                        e.SetParameter(
                          this.props.iMode,
                          o.mode,
                          o.property,
                          o.default.toString(),
                        );
                      let t = {};
                      (t[o.variableName] = o.default), this.setState(t);
                    }
                  });
                break;
              }
            t ||
              console.log(
                "Tried to ensure property value %s was set, which is not in the property map.",
                e,
              );
          }
          onPropertyChanged(e, t) {
            let o = !1;
            for (let n of this.defaultProperties)
              if (n.property == e) {
                o = !0;
                let e = {};
                (e[n.variableName] = t),
                  this.setState(e),
                  this.props.controllerWatcher.forEach((e) => {
                    e.SetParameter(
                      this.props.iMode,
                      n.mode,
                      n.property,
                      t.toString(),
                    );
                  });
                break;
              }
            o ||
              console.log(
                "Tried to set property %s which is not in the property map.",
                e,
              );
          }
          onPropertyReset(e) {
            return new Promise((t) => {
              for (let o of this.defaultProperties)
                if (o.property == e) {
                  let e = {};
                  (e[o.variableName] = o.default),
                    this.setState(e, t),
                    this.props.controllerWatcher.forEach((e) => {
                      e.SetParameter(
                        this.props.iMode,
                        o.mode,
                        o.property,
                        void 0,
                      );
                    });
                  break;
                }
            });
          }
          OnEdit(e) {
            this.props.bReadOnly ||
              this.state.bEditMode == e ||
              (this.setState({ bEditMode: e }),
              this.props.ParentEdit(e),
              e &&
                this.props.controllerWatcher[0].ClearNewModeIfSet(
                  this.props.iMode,
                ));
          }
          OnShowModeSettings() {
            this.setState({ bSettingsVisible: !0 });
          }
          CloseModeSettings() {
            this.setState({ bSettingsVisible: !1 });
          }
          BModeHasSettings() {
            return !1;
          }
          renderSettingsModal() {
            return i.createElement(
              r.A,
              {
                visible: this.state.bSettingsVisible,
                customStyles: {
                  width: "80%",
                  maxWidth: "40em",
                  height: "fit-content",
                  maxHeight: "90%",
                  display: "flex",
                  padding: "0px",
                },
                onClose: this.CloseModeSettings,
                showCloseButton: !1,
                animation: "fade",
                className: "ModeSettingsModal",
                closeOnEsc: !0,
              },
              this.state.bSettingsVisible && this.renderSettingsContent(),
            );
          }
          renderSettingsContent() {
            return i.createElement("div", null);
          }
          renderFooter() {
            return this.props.bReadOnly
              ? i.createElement("div", {
                  className:
                    "FlexFullHeightColumnCentered SourceModeFooterWrapper",
                })
              : i.createElement(
                  "div",
                  {
                    className:
                      "FlexFullHeightColumnCentered SourceModeFooterWrapper",
                  },
                  i.createElement("hr", { className: "SourceModeFooterHR" }),
                  !this.state.bEditMode &&
                    i.createElement("img", {
                      className:
                        "ActionButtonImage SourceModeButtonImage SourceModeFooterEdit",
                      src: "images/bindingui/icon_edit.svg",
                      onClick: (e) => {
                        this.OnEdit(!this.state.bEditMode);
                      },
                    }),
                  this.state.bEditMode &&
                    i.createElement(
                      "div",
                      {
                        className:
                          "FlexFullWidthRowLeftJustified SourceModeFooterButtons",
                      },
                      i.createElement("img", {
                        className:
                          "ActionButtonImage SourceModeButtonImage SourceModeFooterEdit",
                        src: "images/bindingui/icon_done.svg",
                        onClick: (e) => {
                          this.OnEdit(!this.state.bEditMode);
                        },
                      }),
                      this.BModeHasSettings() &&
                        i.createElement("img", {
                          className:
                            "ActionButtonImage SourceModeButtonImage FlexRightAlignChild",
                          src: "images/bindingui/icon_settings.svg",
                          onClick: this.OnShowModeSettings,
                        }),
                    ),
                );
          }
          renderHeader() {
            let e = this.BModeHasSettings();
            return i.createElement(
              "div",
              null,
              i.createElement(z, {
                controllerWatcher: this.props.controllerWatcher,
                iMode: this.props.iMode,
                bReadOnly: this.props.bReadOnly,
                bEditMode: this.state.bEditMode,
                bShowModeOptionsDropDownOnStart:
                  this.props.bShowModeOptionsDropDownOnStart,
              }),
              e && this.renderSettingsModal(),
            );
          }
          get WrapperClasses() {
            let e = "SourceModeGroup FlexColumn";
            return this.state.bEditMode && (e += " Edit"), e;
          }
          AddNoneItems(e) {
            e.push(new g("-blank", "")),
              e.push(new g("none", (0, d.we)("#SourceInputAction_none")));
          }
          AddBlankItem(e) {
            e.push(new g("-blank", ""));
          }
          AddNoActionsItem(e) {
            e.push(new g("-nonitem", (0, d.we)("#SourceInputAction_NoItems")));
          }
          AddHeaderItem(e, t) {
            e.push(new g("-subHeader", (0, d.we)(t)));
          }
          GetCombinedBooleanVector1DropDownItems() {
            let e = [];
            return (
              this.GetBooleanDropDownItems(e, !1),
              this.GetVector1DropDownItems(e, !1),
              this.AddNoneItems(e),
              e
            );
          }
          GetBooleanDropDownItems(e, t) {
            this.AddHeaderItem(e, "#SourceInputSubHeader_BooleanActions");
            let o = p.B$.GetBooleanActionBindings.map((e, t) =>
              this.GetActionDropDownItem(e),
            );
            null == o || 0 == o.length
              ? this.AddNoActionsItem(e)
              : e.push(...o),
              this.AddBlankItem(e),
              t && this.AddNoneItems(e);
          }
          GetVector1DropDownItems(e, t) {
            this.AddHeaderItem(e, "#SourceInputSubHeader_Vector1Actions");
            let o = p.B$.GetVector1ActionBindings.map((e, t) =>
              this.GetActionDropDownItem(e),
            );
            null == o || 0 == o.length
              ? this.AddNoActionsItem(e)
              : e.push(...o),
              this.AddBlankItem(e),
              t && this.AddNoneItems(e);
          }
          GetVector2DropDownItems(e, t) {
            this.AddHeaderItem(e, "#SourceInputSubHeader_Vector2Actions");
            let o = p.B$.GetVector2ActionBindings.map((e, t) =>
              this.GetActionDropDownItem(e),
            );
            null == o || 0 == o.length
              ? this.AddNoActionsItem(e)
              : e.push(...o),
              this.AddBlankItem(e),
              t && this.AddNoneItems(e);
          }
          GetVector3DropDownItems(e, t) {
            this.AddHeaderItem(e, "#SourceInputSubHeader_Vector3Actions");
            let o = p.B$.GetVector3ActionBindings.map((e, t) =>
              this.GetActionDropDownItem(e),
            );
            null == o || 0 == o.length
              ? this.AddNoActionsItem(e)
              : e.push(...o),
              this.AddBlankItem(e),
              t && this.AddNoneItems(e);
          }
          GetSkeletonDropDownItems(e, t) {
            this.AddHeaderItem(e, "#SourceInputSubHeader_SkeletonActions");
            let o = p.B$.GetSkeletonActionBindings.map((e, t) =>
              this.GetActionDropDownItem(e),
            );
            null == o || 0 == o.length
              ? this.AddNoActionsItem(e)
              : e.push(...o),
              this.AddBlankItem(e),
              t && this.AddNoneItems(e);
          }
          GetPoseDropDownItems(e, t) {
            this.AddHeaderItem(e, "#SourceInputSubHeader_PoseActions");
            let o = p.B$.GetPoseActionBindings.map((e, t) =>
              this.GetActionDropDownItem(e),
            );
            null == o || 0 == o.length
              ? this.AddNoActionsItem(e)
              : e.push(...o),
              this.AddBlankItem(e),
              t && this.AddNoneItems(e);
          }
          GetHapticsDropDownItems(e, t) {
            this.AddHeaderItem(e, "#SourceInputSubHeader_HapticsActions");
            let o = p.B$.GetHapticsActionBindings.map((e, t) =>
              this.GetActionDropDownItem(e),
            );
            null == o || 0 == o.length
              ? this.AddNoActionsItem(e)
              : e.push(...o),
              this.AddBlankItem(e),
              t && this.AddNoneItems(e);
          }
          GetActionDropDownItem(e) {
            let t,
              o = e.localized_name;
            return (
              "mandatory" == e.requirement &&
                (t =
                  " (" + (0, d.we)("#BindingUI_SelectAction_Required") + ")"),
              new g(e.name, o, t)
            );
          }
        }
        (0, n.Cg)([u.o], q.prototype, "onPropertyChanged", null),
          (0, n.Cg)([u.o], q.prototype, "onPropertyReset", null),
          (0, n.Cg)([u.o], q.prototype, "OnEdit", null),
          (0, n.Cg)([u.o], q.prototype, "OnShowModeSettings", null),
          (0, n.Cg)([u.o], q.prototype, "CloseModeSettings", null),
          (0, n.Cg)([u.o], q.prototype, "renderFooter", null),
          (0, n.Cg)([u.o], q.prototype, "renderHeader", null),
          (0, n.Cg)([f.computed], q.prototype, "WrapperClasses", null);
        const Q = 0.25,
          J = Q;
        class Y extends i.Component {
          render() {
            return i.createElement(
              "div",
              { className: "FlexRow InputSettingsRow" },
              i.createElement(
                m.Ay,
                {
                  content: (0, d.we)(this.props.labelName + "_tooltip"),
                  theme: "ControllerBindingToolTip",
                },
                i.createElement(
                  "label",
                  {
                    className: "InputSettingsLabel",
                    htmlFor: this.props.elementId,
                  },
                  (0, d.we)(this.props.labelName),
                ),
              ),
              i.createElement(
                "div",
                {
                  className:
                    "FlexColumn InputSettingsInputContainer" +
                    (this.props.halfSplit ? " HalfSplit" : ""),
                },
                i.createElement(
                  "div",
                  null,
                  i.createElement("input", {
                    id: this.props.elementId,
                    type: "range",
                    min: this.props.min,
                    max: this.props.max,
                    step: this.props.step,
                    value: this.props.value,
                    onChange: (e) => {
                      this.props.onChange(parseFloat(e.target.value));
                    },
                  }),
                ),
                i.createElement(
                  "div",
                  { className: "Label RangeLabel" },
                  this.props.renderValue(this.props.value),
                ),
              ),
              this.props.onReset &&
                i.createElement(
                  "div",
                  {
                    className: "InputSettingsResetButton",
                    onClick: this.props.onReset,
                  },
                  (0, d.we)("#SourceInputMode_ResetParameterToDefault"),
                ),
            );
          }
        }
        class X extends i.Component {
          render() {
            return i.createElement(
              "div",
              { className: "FlexRow InputSettingsRow" },
              i.createElement(
                m.Ay,
                {
                  content: (0, d.we)(this.props.labelName + "_tooltip"),
                  theme: "ControllerBindingToolTip",
                },
                i.createElement(
                  "label",
                  {
                    className: "InputSettingsLabel",
                    htmlFor: this.props.elementId,
                  },
                  (0, d.we)(this.props.labelName),
                ),
              ),
              i.createElement(
                "div",
                { className: "FlexColumn InputSettingsInputContainer" },
                i.createElement("input", {
                  id: this.props.elementId,
                  type: "checkbox",
                  checked: this.props.value,
                  onChange: (e) => {
                    this.props.onChange(e.target.checked);
                  },
                }),
              ),
              i.createElement(
                "div",
                {
                  className: "InputSettingsResetButton",
                  onClick: this.props.onReset,
                },
                (0, d.we)("#SourceInputMode_ResetParameterToDefault"),
              ),
            );
          }
        }
        class Z extends i.Component {
          render() {
            return i.createElement(
              "div",
              { className: "FlexRow InputSettingsRow" },
              i.createElement(
                m.Ay,
                {
                  content: (0, d.we)(this.props.labelName + "_tooltip"),
                  theme: "ControllerBindingToolTip",
                },
                i.createElement(
                  "label",
                  {
                    className: "InputSettingsLabel",
                    htmlFor: this.props.elementId,
                  },
                  (0, d.we)(this.props.labelName),
                ),
              ),
              i.createElement(
                "div",
                { className: "FlexColumn InputSettingsInputContainer" },
                i.createElement(S, {
                  vecOptions: this.props.vecValues,
                  sValueSelectedItem: this.props.selectedValue,
                  sHeaderClass: "BindingLabelAction",
                  sLocalizedSelectedItem: this.props.selectedValueLocalized,
                  fnOptionSelected: this.props.onChange,
                }),
              ),
              i.createElement(
                "div",
                {
                  className: "InputSettingsResetButton",
                  onClick: this.props.onReset,
                },
                (0, d.we)("#SourceInputMode_ResetParameterToDefault"),
              ),
            );
          }
        }
        let K = class extends q {
          constructor(e) {
            super(e);
            let t = this.props.controllerWatcher[0].GetInputSource,
              o = t.value || t.force ? 0.2 : 0;
            (this.defaultProperties = [
              {
                property: "click_activate_threshold",
                default: Q,
                type: "float",
                variableName: "flClickActivateSensitivity",
                mode: "click",
              },
              {
                property: "touch_activate_threshold",
                default: J,
                type: "float",
                variableName: "flTouchActivateSensitivity",
                mode: "touch",
              },
              {
                property: "click_deactivate_threshold",
                default: 0.2,
                type: "float",
                variableName: "flClickDeactivateSensitivity",
                mode: "click",
              },
              {
                property: "touch_deactivate_threshold",
                default: 0.2,
                type: "float",
                variableName: "flTouchDeactivateSensitivity",
                mode: "touch",
              },
              {
                property: "click_initial_state",
                default: !1,
                type: "bool",
                variableName: "bClickButtonInitialState",
                mode: "click",
              },
              {
                property: "touch_initial_state",
                default: !1,
                type: "bool",
                variableName: "bTouchButtonInitialState",
                mode: "touch",
              },
              {
                property: "force_input",
                default: "",
                type: "string",
                variableName: "strSelectedForceInput",
                mode: "click",
              },
              {
                property: "haptic_amplitude",
                default: o,
                type: "float",
                variableName: "flHapticAmplitude",
                mode: "click",
              },
              {
                property: "haptic_frequency",
                default: 20,
                type: "float",
                variableName: "flHapticFrequency",
                mode: "click",
              },
              {
                property: "haptic_duration",
                default: 0,
                type: "float",
                variableName: "flHapticDuration",
                mode: "click",
              },
            ]),
              this.LoadDefaults(),
              this.BModeHasSettings.bind(this),
              (0, $.enableUniqueIds)(this);
          }
          OnClickActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetClickAction(this.props.iMode, e);
            });
          }
          OnTouchActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetTouchAction(this.props.iMode, e);
            });
          }
          BModeHasSettings() {
            return !0;
          }
          renderSliderValue(e) {
            return Math.round(100 * e).toString();
          }
          renderSliderRawValue(e) {
            return e.toString();
          }
          LocalizeForceInputModeString(e) {
            switch (e) {
              case "click":
                return (0, d.we)("#SourceInputMode_Click");
              case "touch":
                return (0, d.we)("#SourceInputMode_Touch");
              case "value":
                return (0, d.we)("#SourceInputMode_Pull");
              case "force":
                return (0, d.we)("#SourceInputMode_Force");
              case "":
                return (0, d.we)("#SourceInputMode_Default");
            }
            return (0, d.we)("#SourceInputMode_Default");
          }
          get BShowClickOptions() {
            let e = this.props.controllerWatcher[0],
              t = e.GetInputSource;
            return (
              (t.value || t.force) && null != e.GetClickAction(this.props.iMode)
            );
          }
          get BShowTouchOptions() {
            let e = this.props.controllerWatcher[0];
            return (
              e.GetInputSourceTouchSupport &&
              null != e.GetTouchAction(this.props.iMode)
            );
          }
          renderSettingsContent() {
            let e,
              t,
              o,
              n = this.props.controllerWatcher[0].GetInputSource,
              l = [];
            n.click &&
              l.push(
                new g("click", this.LocalizeForceInputModeString("click")),
              ),
              n.touch &&
                l.push(
                  new g("touch", this.LocalizeForceInputModeString("touch")),
                ),
              n.value &&
                l.push(
                  new g("value", this.LocalizeForceInputModeString("value")),
                ),
              n.force &&
                l.push(
                  new g("force", this.LocalizeForceInputModeString("force")),
                ),
              l.length > 1 &&
                l.push(new g("", this.LocalizeForceInputModeString("")));
            let s = this.BShowClickOptions,
              r = this.BShowTouchOptions,
              a = "";
            return (
              this.hasOwnProperty("nextUniqueId") && (a = this.nextUniqueId()),
              s &&
                (e = i.createElement(
                  "div",
                  { className: "FlexColumn" },
                  i.createElement(Y, {
                    labelName: "#SourceInputMode_ClickActivateThreshold",
                    elementId: a,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    value: this.state.flClickActivateSensitivity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "click_activate_threshold",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "click_activate_threshold",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                  i.createElement(Y, {
                    labelName: "#SourceInputMode_ClickDeactivateThreshold",
                    elementId: a,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    value: this.state.flClickDeactivateSensitivity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "click_deactivate_threshold",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "click_deactivate_threshold",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                )),
              r &&
                (t = i.createElement(
                  "div",
                  { className: "FlexColumn" },
                  i.createElement(Y, {
                    labelName: "#SourceInputMode_TouchActivateThreshold",
                    elementId: a,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    value: this.state.flTouchActivateSensitivity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "touch_activate_threshold",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "touch_activate_threshold",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                  i.createElement(Y, {
                    labelName: "#SourceInputMode_TouchDeactivateThreshold",
                    elementId: a,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    value: this.state.flTouchDeactivateSensitivity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "touch_deactivate_threshold",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "touch_deactivate_threshold",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                )),
              this.props.bToggleButtonMode &&
                (o = [
                  i.createElement(X, {
                    key: "click_initial_state",
                    labelName: "#SourceInputMode_ClickInitialState",
                    elementId: a,
                    value: this.state.bClickButtonInitialState,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "click_initial_state",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "click_initial_state",
                    ),
                  }),
                  i.createElement(X, {
                    key: "touch_initial_state",
                    labelName: "#SourceInputMode_TouchInitialState",
                    elementId: a,
                    value: this.state.bTouchButtonInitialState,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "touch_initial_state",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "touch_initial_state",
                    ),
                  }),
                ]),
              i.createElement(
                "div",
                { className: "InputSettingsModal" },
                i.createElement(
                  "div",
                  { className: "ChordBindingHeader FlexColumn" },
                  i.createElement(
                    "div",
                    { className: "FlexFullWidthRowCentered" },
                    i.createElement("img", {
                      className:
                        "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                      src: "images/bindingui/icon_modal_edit_header.svg",
                    }),
                    i.createElement(
                      "div",
                      { className: "Label Title TitleCenter AllCaps" },
                      (0, d.we)("#BindingSettingsModal_Title"),
                    ),
                  ),
                ),
                e,
                t,
                o,
                l.length > 1 &&
                  i.createElement(Z, {
                    labelName: "#SourceInputMode_ButtonModeInputForce_Click",
                    elementId: a,
                    vecValues: l,
                    selectedValue: this.state.strSelectedForceInput,
                    selectedValueLocalized: this.LocalizeForceInputModeString(
                      this.state.strSelectedForceInput,
                    ),
                    onReset: this.onPropertyReset.bind(this, "force_input"),
                    onChange: this.onPropertyChanged.bind(this, "force_input"),
                  }),
                i.createElement(Y, {
                  labelName: "#SourceInputMode_HapticAmplitude",
                  elementId: a,
                  min: 0,
                  max: 1,
                  step: 0.05,
                  value: this.state.flHapticAmplitude,
                  onReset: this.onPropertyReset.bind(this, "haptic_amplitude"),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "haptic_amplitude",
                  ),
                  renderValue: this.renderSliderValue,
                }),
                i.createElement(Y, {
                  labelName: "#SourceInputMode_HapticDuration",
                  elementId: a,
                  min: 0,
                  max: 4,
                  step: 0.1,
                  value: this.state.flHapticDuration,
                  onReset: this.onPropertyReset.bind(this, "haptic_duration"),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "haptic_duration",
                  ),
                  renderValue: this.renderSliderRawValue,
                }),
                i.createElement(Y, {
                  labelName: "#SourceInputMode_HapticFrequency",
                  elementId: a,
                  min: 15,
                  max: 3e3,
                  step: 1,
                  value: this.state.flHapticFrequency,
                  onReset: this.onPropertyReset.bind(this, "haptic_frequency"),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "haptic_frequency",
                  ),
                  renderValue: this.renderSliderRawValue,
                }),
                i.createElement(
                  "div",
                  {
                    className: "InputSettingsCloseButton Label AllCaps",
                    onClick: this.CloseModeSettings,
                  },
                  (0, d.we)("#Button_Close"),
                ),
              )
            );
          }
          render() {
            let e = this.props.controllerWatcher[0],
              t = this.GetCombinedBooleanVector1DropDownItems();
            return i.createElement(
              "div",
              { className: this.WrapperClasses },
              this.renderHeader(),
              i.createElement(j, {
                sLocalizedInputType: "#SourceInputMode_Click",
                SelectedAction: e.GetClickAction(this.props.iMode),
                vecOptions: t,
                fnOptionSelected: this.OnClickActionChanged,
                bReadOnly: !this.state.bEditMode,
              }),
              e.GetInputSourceTouchSupport &&
                i.createElement(j, {
                  sLocalizedInputType: "#SourceInputMode_Touch",
                  SelectedAction: e.GetTouchAction(this.props.iMode),
                  vecOptions: t,
                  fnOptionSelected: this.OnTouchActionChanged,
                  bReadOnly: !this.state.bEditMode,
                }),
              this.renderFooter(),
            );
          }
        };
        (0, n.Cg)([u.o], K.prototype, "OnClickActionChanged", null),
          (0, n.Cg)([u.o], K.prototype, "OnTouchActionChanged", null),
          (0, n.Cg)([f.computed], K.prototype, "BShowClickOptions", null),
          (0, n.Cg)([f.computed], K.prototype, "BShowTouchOptions", null),
          (K = (0, n.Cg)([s.PA], K));
        let ee = class extends q {
          constructor(e) {
            super(e),
              (this.defaultProperties = [
                {
                  property: "long_press_delay",
                  default: 1,
                  type: "float",
                  variableName: "flLongPressDelay",
                  mode: "click",
                },
                {
                  property: "double_press_delay",
                  default: 0.25,
                  type: "float",
                  variableName: "flDoublePressDelay",
                  mode: "click",
                },
                {
                  property: "click_activate_threshold",
                  default: Q,
                  type: "float",
                  variableName: "flClickActivateSensitivity",
                  mode: "click",
                },
                {
                  property: "touch_activate_threshold",
                  default: J,
                  type: "float",
                  variableName: "flTouchActivateSensitivity",
                  mode: "touch",
                },
                {
                  property: "click_deactivate_threshold",
                  default: 0.2,
                  type: "float",
                  variableName: "flClickDeactivateSensitivity",
                  mode: "click",
                },
                {
                  property: "touch_deactivate_threshold",
                  default: 0.2,
                  type: "float",
                  variableName: "flTouchDeactivateSensitivity",
                  mode: "touch",
                },
                {
                  property: "click_initial_state",
                  default: !1,
                  type: "bool",
                  variableName: "bClickButtonInitialState",
                  mode: "click",
                },
                {
                  property: "touch_initial_state",
                  default: !1,
                  type: "bool",
                  variableName: "bTouchButtonInitialState",
                  mode: "touch",
                },
                {
                  property: "force_input",
                  default: "",
                  type: "string",
                  variableName: "strSelectedForceInput",
                  mode: "cick",
                },
                {
                  property: "haptic_amplitude",
                  default: 0.2,
                  type: "float",
                  variableName: "flHapticAmplitude",
                  mode: "click",
                },
                {
                  property: "haptic_frequency",
                  default: 20,
                  type: "float",
                  variableName: "flHapticFrequency",
                  mode: "click",
                },
                {
                  property: "haptic_duration",
                  default: 0,
                  type: "float",
                  variableName: "flHapticDuration",
                  mode: "click",
                },
                {
                  property: "touchy_click",
                  default: !1,
                  type: "bool",
                  variableName: "bTouchyClick",
                  mode: "touch",
                },
              ]),
              this.LoadDefaults();
          }
          get IsComplex() {
            let e = this.props.controllerWatcher[0];
            return !!(
              this.state.bShowAdvanced ||
              e.GetHeldAction(this.props.iMode) ||
              e.GetDoubleAction(this.props.iMode) ||
              e.GetLongAction(this.props.iMode)
            );
          }
          BModeHasSettings() {
            return !0;
          }
          renderSliderValue(e) {
            return Math.round(100 * e).toString();
          }
          renderSliderRawValue(e) {
            return e.toString();
          }
          LocalizeForceInputModeString(e) {
            switch (e) {
              case "click":
                return (0, d.we)("#SourceInputMode_Click");
              case "touch":
                return (0, d.we)("#SourceInputMode_Touch");
              case "value":
                return (0, d.we)("#SourceInputMode_Pull");
              case "force":
                return (0, d.we)("#SourceInputMode_Force");
              case "position":
                return (0, d.we)("#SourceInputMode_Position");
              case "":
                return (0, d.we)("#SourceInputMode_Default");
            }
            return (0, d.we)("#SourceInputMode_Default");
          }
          get BShowClickOptions() {
            let e = this.props.controllerWatcher[0],
              t = this.RInputOptions,
              o = e.GetInputSource;
            return (
              o.value ||
              o.force ||
              "position" == this.state.strSelectedForceInput ||
              (1 == t.length &&
                "position" == t[0] &&
                null != e.GetClickAction(this.props.iMode))
            );
          }
          get BShowTouchOptions() {
            let e = this.props.controllerWatcher[0];
            return (
              e.GetInputSourceTouchSupport &&
              null != e.GetTouchAction(this.props.iMode)
            );
          }
          get RInputOptions() {
            let e = this.props.controllerWatcher[0].GetInputSource,
              t = [];
            return (
              e.click && t.push("click"),
              e.touch && t.push("touch"),
              e.value && t.push("value"),
              e.force && t.push("force"),
              ("joystick" != e.type && "trackpad" != e.type) ||
                t.push("position"),
              t
            );
          }
          renderSettingsContent() {
            let e,
              t,
              o,
              n = this.props.controllerWatcher[0],
              l = (n.GetInputSource, this.RInputOptions),
              s = [];
            l.length > 1 && l.push("");
            for (let e of l)
              s.push(new g(e, this.LocalizeForceInputModeString(e)));
            let r = this.BShowClickOptions,
              a = this.BShowTouchOptions,
              c = "";
            return (
              this.hasOwnProperty("nextUniqueId") && (c = this.nextUniqueId()),
              r &&
                (e = i.createElement(
                  "div",
                  { className: "FlexColumn" },
                  i.createElement(Y, {
                    labelName: "#SourceInputMode_ClickActivateThreshold",
                    elementId: c,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    value: this.state.flClickActivateSensitivity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "click_activate_threshold",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "click_activate_threshold",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                  i.createElement(Y, {
                    labelName: "#SourceInputMode_ClickDeactivateThreshold",
                    elementId: c,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    value: this.state.flClickDeactivateSensitivity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "click_deactivate_threshold",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "click_deactivate_threshold",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                )),
              a &&
                (t = i.createElement(
                  "div",
                  { className: "FlexColumn" },
                  i.createElement(Y, {
                    labelName: "#SourceInputMode_TouchActivateThreshold",
                    elementId: c,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    value: this.state.flTouchActivateSensitivity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "touch_activate_threshold",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "touch_activate_threshold",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                  i.createElement(Y, {
                    labelName: "#SourceInputMode_TouchDeactivateThreshold",
                    elementId: c,
                    min: 0,
                    max: 1,
                    step: 0.05,
                    value: this.state.flTouchDeactivateSensitivity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "touch_deactivate_threshold",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "touch_deactivate_threshold",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                )),
              this.props.bToggleButtonMode &&
                (o = [
                  i.createElement(X, {
                    key: "click_initial_state",
                    labelName: "#SourceInputMode_ClickInitialState",
                    elementId: c,
                    value: this.state.bClickButtonInitialState,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "click_initial_state",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "click_initial_state",
                    ),
                  }),
                  i.createElement(X, {
                    key: "touch_initial_state",
                    labelName: "#SourceInputMode_TouchInitialState",
                    elementId: c,
                    value: this.state.bTouchButtonInitialState,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "touch_initial_state",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "touch_initial_state",
                    ),
                  }),
                ]),
              i.createElement(
                "div",
                { className: "InputSettingsModal" },
                i.createElement(
                  "div",
                  { className: "ChordBindingHeader FlexColumn" },
                  i.createElement(
                    "div",
                    { className: "FlexFullWidthRowCentered" },
                    i.createElement("img", {
                      className:
                        "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                      src: "images/bindingui/icon_modal_edit_header.svg",
                    }),
                    i.createElement(
                      "div",
                      { className: "Label Title TitleCenter AllCaps" },
                      (0, d.we)("#BindingSettingsModal_Title"),
                    ),
                  ),
                ),
                e,
                t,
                o,
                s.length > 1 &&
                  i.createElement(Z, {
                    labelName: "#SourceInputMode_ButtonModeInputForce_Click",
                    elementId: c,
                    vecValues: s,
                    selectedValue: this.state.strSelectedForceInput,
                    selectedValueLocalized: this.LocalizeForceInputModeString(
                      this.state.strSelectedForceInput,
                    ),
                    onReset: this.onPropertyReset.bind(this, "force_input"),
                    onChange: this.onPropertyChanged.bind(this, "force_input"),
                  }),
                i.createElement(Y, {
                  labelName: "#SourceInputMode_HapticAmplitude",
                  elementId: c,
                  min: 0,
                  max: 1,
                  step: 0.05,
                  value: this.state.flHapticAmplitude,
                  onReset: this.onPropertyReset.bind(this, "haptic_amplitude"),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "haptic_amplitude",
                  ),
                  renderValue: this.renderSliderValue,
                }),
                i.createElement(Y, {
                  labelName: "#SourceInputMode_HapticDuration",
                  elementId: c,
                  min: 0,
                  max: 4,
                  step: 0.1,
                  value: this.state.flHapticDuration,
                  onReset: this.onPropertyReset.bind(this, "haptic_duration"),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "haptic_duration",
                  ),
                  renderValue: this.renderSliderRawValue,
                }),
                i.createElement(Y, {
                  labelName: "#SourceInputMode_HapticFrequency",
                  elementId: c,
                  min: 15,
                  max: 3e3,
                  step: 1,
                  value: this.state.flHapticFrequency,
                  onReset: this.onPropertyReset.bind(this, "haptic_frequency"),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "haptic_frequency",
                  ),
                  renderValue: this.renderSliderRawValue,
                }),
                "complex" == this.state.sSubMode &&
                  i.createElement(
                    "div",
                    null,
                    i.createElement(Y, {
                      labelName: "#SourceInputMode_LongPressDelay",
                      elementId: c,
                      min: 0,
                      max: 1,
                      step: 0.05,
                      value: this.state.flLongPressDelay,
                      onReset: this.onPropertyReset.bind(
                        this,
                        "long_press_delay",
                      ),
                      onChange: this.onPropertyChanged.bind(
                        this,
                        "long_press_delay",
                      ),
                      renderValue: this.renderSliderValue,
                    }),
                    i.createElement(Y, {
                      labelName: "#SourceInputMode_DoublePressDelay",
                      elementId: c,
                      min: 0,
                      max: 1,
                      step: 0.05,
                      value: this.state.flDoublePressDelay,
                      onReset: this.onPropertyReset.bind(
                        this,
                        "double_press_delay",
                      ),
                      onChange: this.onPropertyChanged.bind(
                        this,
                        "double_press_delay",
                      ),
                      renderValue: this.renderSliderValue,
                    }),
                  ),
                n.GetInputSourceTouchSupport &&
                  i.createElement(X, {
                    key: "touchy_click",
                    labelName: "#SourceInputMode_TouchyClick",
                    elementId: c,
                    value: this.state.bTouchyClick,
                    onReset: this.onPropertyReset.bind(this, "touchy_click"),
                    onChange: this.onPropertyChanged.bind(this, "touchy_click"),
                  }),
                i.createElement(
                  "div",
                  {
                    className: "InputSettingsCloseButton Label AllCaps",
                    onClick: this.CloseModeSettings,
                  },
                  (0, d.we)("#Button_Close"),
                ),
              )
            );
          }
          OnHeldActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetHeldAction(this.props.iMode, e);
            });
          }
          OnLongActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetLongAction(this.props.iMode, e);
            });
          }
          OnSingleActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetSingleAction(this.props.iMode, e);
            });
          }
          OnDoubleActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetDoubleAction(this.props.iMode, e);
            });
          }
          OnClickActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetClickAction(this.props.iMode, e);
            });
          }
          OnTouchActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetTouchAction(this.props.iMode, e);
            });
          }
          OnToggleComplex() {
            this.state.bEditMode && this.setState({ bShowAdvanced: !0 });
          }
          render() {
            let e = this.props.controllerWatcher[0],
              t = this.GetCombinedBooleanVector1DropDownItems(),
              o = this.IsComplex;
            return i.createElement(
              "div",
              { className: this.WrapperClasses },
              this.renderHeader(),
              o &&
                i.createElement(
                  "div",
                  null,
                  i.createElement(j, {
                    sLocalizedInputType: "#SourceInputMode_Single",
                    SelectedAction: e.GetClickAction(this.props.iMode),
                    vecOptions: t,
                    fnOptionSelected: this.OnClickActionChanged,
                    bReadOnly: !this.state.bEditMode,
                  }),
                  i.createElement(j, {
                    sLocalizedInputType: "#SourceInputMode_Double",
                    SelectedAction: e.GetDoubleAction(this.props.iMode),
                    vecOptions: t,
                    fnOptionSelected: this.OnDoubleActionChanged,
                    bReadOnly: !this.state.bEditMode,
                  }),
                  i.createElement(j, {
                    sLocalizedInputType: "#SourceInputMode_Long",
                    SelectedAction: e.GetLongAction(this.props.iMode),
                    vecOptions: t,
                    fnOptionSelected: this.OnLongActionChanged,
                    bReadOnly: !this.state.bEditMode,
                  }),
                  i.createElement(j, {
                    sLocalizedInputType: "#SourceInputMode_Held",
                    SelectedAction: e.GetHeldAction(this.props.iMode),
                    vecOptions: t,
                    fnOptionSelected: this.OnHeldActionChanged,
                    bReadOnly: !this.state.bEditMode,
                  }),
                  e.GetInputSourceTouchSupport &&
                    i.createElement(j, {
                      sLocalizedInputType: "#SourceInputMode_Touch",
                      SelectedAction: e.GetTouchAction(this.props.iMode),
                      vecOptions: t,
                      fnOptionSelected: this.OnTouchActionChanged,
                      bReadOnly: !this.state.bEditMode,
                    }),
                ),
              !o &&
                i.createElement(
                  "div",
                  null,
                  i.createElement(j, {
                    sLocalizedInputType: "#SourceInputMode_Click",
                    SelectedAction: e.GetClickAction(this.props.iMode),
                    vecOptions: t,
                    fnOptionSelected: this.OnClickActionChanged,
                    bReadOnly: !this.state.bEditMode,
                  }),
                  e.GetInputSourceTouchSupport &&
                    i.createElement(j, {
                      sLocalizedInputType: "#SourceInputMode_Touch",
                      SelectedAction: e.GetTouchAction(this.props.iMode),
                      vecOptions: t,
                      fnOptionSelected: this.OnTouchActionChanged,
                      bReadOnly: !this.state.bEditMode,
                    }),
                  i.createElement(
                    "div",
                    {
                      className:
                        "SourceInputShowMore" +
                        (this.state.bEditMode ? "" : " Disabled"),
                      onClick: this.OnToggleComplex,
                    },
                    (0, d.we)("#SourceInputMode_MoreOptions"),
                  ),
                ),
              this.renderFooter(),
            );
          }
        };
        (0, n.Cg)([f.computed], ee.prototype, "IsComplex", null),
          (0, n.Cg)([f.computed], ee.prototype, "BShowClickOptions", null),
          (0, n.Cg)([f.computed], ee.prototype, "BShowTouchOptions", null),
          (0, n.Cg)([f.computed], ee.prototype, "RInputOptions", null),
          (0, n.Cg)([u.o], ee.prototype, "OnHeldActionChanged", null),
          (0, n.Cg)([u.o], ee.prototype, "OnLongActionChanged", null),
          (0, n.Cg)([u.o], ee.prototype, "OnSingleActionChanged", null),
          (0, n.Cg)([u.o], ee.prototype, "OnDoubleActionChanged", null),
          (0, n.Cg)([u.o], ee.prototype, "OnClickActionChanged", null),
          (0, n.Cg)([u.o], ee.prototype, "OnTouchActionChanged", null),
          (0, n.Cg)([u.o], ee.prototype, "OnToggleComplex", null),
          (ee = (0, n.Cg)([s.PA], ee));
        let te = class extends q {
          constructor(e) {
            super(e),
              (this.defaultProperties = [
                {
                  property: "long_press_delay",
                  default: 1,
                  type: "float",
                  variableName: "flLongPressDelay",
                  mode: "click",
                },
                {
                  property: "double_press_delay",
                  default: 0.25,
                  type: "float",
                  variableName: "flDoublePressDelay",
                  mode: "click",
                },
              ]),
              this.LoadDefaults();
          }
          BModeHasSettings() {
            return !0;
          }
          renderSliderValue(e) {
            return e.toString();
          }
          renderSettingsContent() {
            this.props.controllerWatcher[0];
            let e = "";
            return (
              this.hasOwnProperty("nextUniqueId") && (e = this.nextUniqueId()),
              i.createElement(
                "div",
                { className: "InputSettingsModal" },
                i.createElement(
                  "div",
                  { className: "ChordBindingHeader FlexColumn" },
                  i.createElement(
                    "div",
                    { className: "FlexFullWidthRowCentered" },
                    i.createElement("img", {
                      className:
                        "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                      src: "images/bindingui/icon_modal_edit_header.svg",
                    }),
                    i.createElement(
                      "div",
                      { className: "Label Title TitleCenter AllCaps" },
                      (0, d.we)("#BindingSettingsModal_Title"),
                    ),
                  ),
                ),
                i.createElement(Y, {
                  labelName: "#SourceInputMode_LongPressDelay",
                  elementId: e,
                  min: 0,
                  max: 1,
                  step: 0.05,
                  value: this.state.flLongPressDelay,
                  onReset: this.onPropertyReset.bind(this, "long_press_delay"),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "long_press_delay",
                  ),
                  renderValue: this.renderSliderValue,
                }),
                i.createElement(Y, {
                  labelName: "#SourceInputMode_DoublePressDelay",
                  elementId: e,
                  min: 0,
                  max: 1,
                  step: 0.05,
                  value: this.state.flDoublePressDelay,
                  onReset: this.onPropertyReset.bind(
                    this,
                    "double_press_delay",
                  ),
                  onChange: this.onPropertyChanged.bind(
                    this,
                    "double_press_delay",
                  ),
                  renderValue: this.renderSliderValue,
                }),
                i.createElement(
                  "div",
                  {
                    className: "InputSettingsCloseButton Label AllCaps",
                    onClick: this.CloseModeSettings,
                  },
                  (0, d.we)("#Button_Close"),
                ),
              )
            );
          }
          OnHeldActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetHeldAction(this.props.iMode, e);
            });
          }
          OnLongActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetLongAction(this.props.iMode, e);
            });
          }
          OnSingleActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetSingleAction(this.props.iMode, e);
            });
          }
          OnDoubleActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetDoubleAction(this.props.iMode, e);
            });
          }
          OnClickActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetClickAction(this.props.iMode, e);
            });
          }
          OnTouchActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetTouchAction(this.props.iMode, e);
            });
          }
          render() {
            let e = this.props.controllerWatcher[0],
              t = this.GetCombinedBooleanVector1DropDownItems();
            return i.createElement(
              "div",
              { className: this.WrapperClasses },
              this.renderHeader(),
              i.createElement(
                "div",
                null,
                i.createElement(j, {
                  sLocalizedInputType: "#SourceInputMode_Single",
                  SelectedAction: e.GetSingleAction(this.props.iMode),
                  vecOptions: t,
                  fnOptionSelected: this.OnSingleActionChanged,
                  bReadOnly: !this.state.bEditMode,
                }),
                i.createElement(j, {
                  sLocalizedInputType: "#SourceInputMode_Double",
                  SelectedAction: e.GetDoubleAction(this.props.iMode),
                  vecOptions: t,
                  fnOptionSelected: this.OnDoubleActionChanged,
                  bReadOnly: !this.state.bEditMode,
                }),
                i.createElement(j, {
                  sLocalizedInputType: "#SourceInputMode_Long",
                  SelectedAction: e.GetLongAction(this.props.iMode),
                  vecOptions: t,
                  fnOptionSelected: this.OnLongActionChanged,
                  bReadOnly: !this.state.bEditMode,
                }),
                i.createElement(j, {
                  sLocalizedInputType: "#SourceInputMode_Held",
                  SelectedAction: e.GetHeldAction(this.props.iMode),
                  vecOptions: t,
                  fnOptionSelected: this.OnHeldActionChanged,
                  bReadOnly: !this.state.bEditMode,
                }),
                e.GetInputSourceTouchSupport &&
                  i.createElement(j, {
                    sLocalizedInputType: "#SourceInputMode_Touch",
                    SelectedAction: e.GetTouchAction(this.props.iMode),
                    vecOptions: t,
                    fnOptionSelected: this.OnTouchActionChanged,
                    bReadOnly: !this.state.bEditMode,
                  }),
              ),
              this.renderFooter(),
            );
          }
        };
        (0, n.Cg)([u.o], te.prototype, "OnHeldActionChanged", null),
          (0, n.Cg)([u.o], te.prototype, "OnLongActionChanged", null),
          (0, n.Cg)([u.o], te.prototype, "OnSingleActionChanged", null),
          (0, n.Cg)([u.o], te.prototype, "OnDoubleActionChanged", null),
          (0, n.Cg)([u.o], te.prototype, "OnClickActionChanged", null),
          (0, n.Cg)([u.o], te.prototype, "OnTouchActionChanged", null),
          (te = (0, n.Cg)([s.PA], te));
        let oe = class extends q {
          render() {
            return i.createElement(
              "div",
              { className: this.WrapperClasses },
              this.renderHeader(),
              this.renderFooter(),
            );
          }
        };
        oe = (0, n.Cg)([s.PA], oe);
        let ne = class extends q {
          constructor(e) {
            super(e),
              (this.defaultProperties = [
                {
                  property: "sub_mode",
                  default:
                    "joystick" ==
                    this.props.controllerWatcher[0].GetInputSourceType
                      ? "touch"
                      : "click",
                  type: "string",
                  variableName: "sSubMode",
                  mode: "click",
                },
                {
                  property: "overlap_pct",
                  default: 50,
                  type: "float",
                  variableName: "flOverlapPct",
                  mode: "click",
                },
                {
                  property: "deadzone_pct",
                  default: 25,
                  type: "float",
                  variableName: "flDeadzonePct",
                  mode: "click",
                },
                {
                  property: "sticky",
                  default: !1,
                  type: "boolean",
                  variableName: "bStickyDpad",
                  mode: "click",
                },
              ]),
              this.LoadDefaults(),
              "dpad" == this.props.sMode && this.EnsurePropertySet("sub_mode");
          }
          BModeHasSettings() {
            return !0;
          }
          renderSliderValue(e) {
            return Math.round(e).toString();
          }
          renderSettingsContent() {
            this.props.controllerWatcher[0];
            let e = "";
            return (
              this.hasOwnProperty("nextUniqueId") && (e = this.nextUniqueId()),
              i.createElement(
                "div",
                { className: "InputSettingsModal" },
                i.createElement(
                  "div",
                  { className: "ChordBindingHeader FlexColumn" },
                  i.createElement(
                    "div",
                    { className: "FlexFullWidthRowCentered" },
                    i.createElement("img", {
                      className:
                        "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                      src: "images/bindingui/icon_modal_edit_header.svg",
                    }),
                    i.createElement(
                      "div",
                      { className: "Label Title TitleCenter AllCaps" },
                      (0, d.we)("#BindingSettingsModal_Title"),
                    ),
                  ),
                ),
                i.createElement(Y, {
                  labelName: "#SourceInputMode_OverlapPercent",
                  elementId: e,
                  min: 0,
                  max: 100,
                  step: 5,
                  value: this.state.flOverlapPct,
                  onReset: this.onPropertyReset.bind(this, "overlap_pct"),
                  onChange: this.onPropertyChanged.bind(this, "overlap_pct"),
                  renderValue: this.renderSliderValue,
                }),
                i.createElement(Y, {
                  labelName: "#SourceInputMode_DeadzonePercent",
                  elementId: e,
                  min: 0,
                  max: 100,
                  step: 5,
                  value: this.state.flDeadzonePct,
                  onReset: this.onPropertyReset.bind(this, "deadzone_pct"),
                  onChange: this.onPropertyChanged.bind(this, "deadzone_pct"),
                  renderValue: this.renderSliderValue,
                }),
                i.createElement(X, {
                  key: "click_initial_state",
                  labelName: "#SourceInputMode_StickyDpad",
                  elementId: e,
                  value: this.state.bStickyDpad,
                  onReset: this.onPropertyReset.bind(this, "sticky"),
                  onChange: this.onPropertyChanged.bind(this, "sticky"),
                }),
                i.createElement(
                  "div",
                  {
                    className: "InputSettingsCloseButton Label AllCaps",
                    onClick: this.CloseModeSettings,
                  },
                  (0, d.we)("#Button_Close"),
                ),
              )
            );
          }
          OnActionChanged(e, t) {
            this.props.controllerWatcher.forEach((o) => {
              p.B$.SetActionForInputModeType(
                o.GetFullInputPath,
                this.props.iMode,
                e,
                t,
                ["dpad", "dpad_click", "dpad_touch"],
              );
            });
          }
          render() {
            let e = this.props.controllerWatcher[0],
              t = this.GetCombinedBooleanVector1DropDownItems(),
              o = "dpad" == this.props.sMode,
              n = [
                new g("click", (0, d.we)("#SourceInputMode_Click")),
                new g("touch", (0, d.we)("#SourceInputMode_Touch")),
              ],
              l =
                (this.state.sSubMode,
                "click" == this.state.sSubMode
                  ? (0, d.we)("#SourceInputMode_Click")
                  : (0, d.we)("#SourceInputMode_Touch"));
            return i.createElement(
              "div",
              { className: this.WrapperClasses },
              this.renderHeader(),
              o &&
                i.createElement(
                  "div",
                  { className: "FlexRow BindingActionWrapper" },
                  i.createElement(
                    "div",
                    { className: "Label BindingLabel" },
                    (0, d.we)("#SourceInputMode_SubMode"),
                  ),
                  i.createElement(
                    "div",
                    { className: "Label BindingLabel BindingAction" },
                    this.state.bEditMode &&
                      i.createElement(S, {
                        sLocalizedSelectedItem: l,
                        sValueSelectedItem: this.state.sSubMode,
                        vecOptions: n,
                        fnOptionSelected: this.onPropertyChanged.bind(
                          this,
                          "sub_mode",
                        ),
                      }),
                    !this.state.bEditMode && l,
                  ),
                ),
              i.createElement(j, {
                sLocalizedInputType: "#SourceInputMode_North",
                SelectedAction: e.GetNorthAction(this.props.iMode),
                vecOptions: t,
                fnOptionSelected: this.OnActionChanged.bind(this, "north"),
                bReadOnly: !this.state.bEditMode,
              }),
              i.createElement(j, {
                sLocalizedInputType: "#SourceInputMode_East",
                SelectedAction: e.GetEastAction(this.props.iMode),
                vecOptions: t,
                fnOptionSelected: this.OnActionChanged.bind(this, "east"),
                bReadOnly: !this.state.bEditMode,
              }),
              i.createElement(j, {
                sLocalizedInputType: "#SourceInputMode_South",
                SelectedAction: e.GetSouthAction(this.props.iMode),
                vecOptions: t,
                fnOptionSelected: this.OnActionChanged.bind(this, "south"),
                bReadOnly: !this.state.bEditMode,
              }),
              i.createElement(j, {
                sLocalizedInputType: "#SourceInputMode_West",
                SelectedAction: e.GetWestAction(this.props.iMode),
                vecOptions: t,
                fnOptionSelected: this.OnActionChanged.bind(this, "west"),
                bReadOnly: !this.state.bEditMode,
              }),
              i.createElement(j, {
                sLocalizedInputType: "#SourceInputMode_Center",
                SelectedAction: e.GetCenterAction(this.props.iMode),
                vecOptions: t,
                fnOptionSelected: this.OnActionChanged.bind(this, "center"),
                bReadOnly: !this.state.bEditMode,
              }),
              this.renderFooter(),
            );
          }
        };
        (0, n.Cg)([u.o], ne.prototype, "OnActionChanged", null),
          (ne = (0, n.Cg)([s.PA], ne));
        let ie = class extends q {
          constructor(e) {
            super(e);
            let t = this.props.controllerWatcher[0];
            (this.defaultProperties = []),
              "joystick" == this.props.sMode &&
                this.defaultProperties.push(
                  {
                    property: "sticky_click",
                    default: !1,
                    type: "boolean",
                    variableName: "bStickyClick",
                    mode: "joystick",
                  },
                  {
                    property: "sticky_activate_threshold",
                    default: 0.4,
                    type: "float",
                    variableName: "flStickyActivate",
                    mode: "joystick",
                  },
                  {
                    property: "sticky_deactivate_threshold",
                    default: 0.3,
                    type: "float",
                    variableName: "flStickyDeactivate",
                    mode: "joystick",
                  },
                );
            let o = t.GetInputSourceDefaultDeadzone;
            this.defaultProperties.push(
              {
                property: "deadzone_pct",
                default: o,
                type: "float",
                variableName: "flDeadzonePct",
                mode: "joystick",
              },
              {
                property: "maxzone_pct",
                default: 100,
                type: "float",
                variableName: "flMaxzonePct",
                mode: "joystick",
              },
              {
                property: "exponent",
                default: 1,
                type: "float",
                variableName: "flExponent",
                mode: "trackpad",
              },
            ),
              this.LoadDefaults(),
              (this.state.eTrackpadInvertMode = t.GetTrackpadInvertState(
                this.props.iMode,
              ));
          }
          BModeHasSettings() {
            return !0;
          }
          OnTrackpadInvertModeChanged(e, t) {
            let o = this.props.controllerWatcher[0],
              n = o.GetTrackpadInvertState(this.props.iMode);
            switch (e) {
              case "y":
                n = t ? ("x" == n ? "xy" : "y") : "xy" == n ? "x" : "";
                break;
              case "x":
                n = t ? ("y" == n ? "xy" : "x") : "xy" == n ? "y" : "";
            }
            o.SetTrackpadInvertState(this.props.iMode, n),
              this.setState({ eTrackpadInvertMode: n });
          }
          OnTrackpadInvertModeReset() {
            this.setState({ eTrackpadInvertMode: "" });
          }
          renderSettingsContent() {
            this.props.controllerWatcher[0];
            let e = "";
            this.hasOwnProperty("nextUniqueId") && (e = this.nextUniqueId());
            let t = [];
            return (
              "joystick" == this.props.sMode &&
                ((t = [
                  i.createElement(X, {
                    labelName: "#SourceInputMode_StickyClick",
                    elementId: e,
                    key: e,
                    value: this.state.bStickyClick,
                    onReset: this.onPropertyReset.bind(this, "sticky_click"),
                    onChange: this.onPropertyChanged.bind(this, "sticky_click"),
                  }),
                ]),
                this.state.bStickyClick &&
                  (t.push(
                    i.createElement(Y, {
                      labelName: "#SourceInputMode_StickyClick_Activate",
                      elementId: e,
                      key: e,
                      min: 0,
                      max: 1,
                      step: 0.05,
                      value: this.state.flStickyActivate,
                      onReset: this.onPropertyReset.bind(
                        this,
                        "sticky_activate_threshold",
                      ),
                      onChange: this.onPropertyChanged.bind(
                        this,
                        "sticky_activate_threshold",
                      ),
                      renderValue: (e) => (e ? e.toString() : "-"),
                    }),
                  ),
                  t.push(
                    i.createElement(Y, {
                      labelName: "#SourceInputMode_StickyClick_Deactivate",
                      elementId: e,
                      key: e,
                      min: 0,
                      max: 1,
                      step: 0.05,
                      value: this.state.flStickyDeactivate,
                      onReset: this.onPropertyReset.bind(
                        this,
                        "sticky_deactivate_threshold",
                      ),
                      onChange: this.onPropertyChanged.bind(
                        this,
                        "sticky_deactivate_threshold",
                      ),
                      renderValue: (e) => (e ? e.toString() : "-"),
                    }),
                  ))),
              i.createElement(
                "div",
                { className: "InputSettingsModal" },
                i.createElement(
                  "div",
                  { className: "ChordBindingHeader FlexColumn" },
                  i.createElement(
                    "div",
                    { className: "FlexFullWidthRowCentered" },
                    i.createElement("img", {
                      className:
                        "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                      src: "images/bindingui/icon_modal_edit_header.svg",
                    }),
                    i.createElement(
                      "div",
                      { className: "Label Title TitleCenter AllCaps" },
                      (0, d.we)("#BindingSettingsModal_Title"),
                    ),
                  ),
                ),
                i.createElement(X, {
                  labelName: "#SourceInputMode_InvertYAxis",
                  elementId: e,
                  value:
                    "y" == this.state.eTrackpadInvertMode ||
                    "xy" == this.state.eTrackpadInvertMode,
                  onReset: this.OnTrackpadInvertModeReset,
                  onChange: this.OnTrackpadInvertModeChanged.bind(this, "y"),
                }),
                i.createElement(X, {
                  labelName: "#SourceInputMode_InvertXAxis",
                  elementId: e,
                  value:
                    "x" == this.state.eTrackpadInvertMode ||
                    "xy" == this.state.eTrackpadInvertMode,
                  onReset: this.OnTrackpadInvertModeReset,
                  onChange: this.OnTrackpadInvertModeChanged.bind(this, "x"),
                }),
                i.createElement(Y, {
                  labelName: "#SourceInputMode_DeadZone",
                  elementId: e,
                  key: e,
                  min: 0,
                  max: 100,
                  step: 5,
                  value: this.state.flDeadzonePct,
                  onReset: this.onPropertyReset.bind(this, "deadzone_pct"),
                  onChange: this.onPropertyChanged.bind(this, "deadzone_pct"),
                  renderValue: (e) => (e ? e.toString() : "-"),
                }),
                i.createElement(Y, {
                  labelName: "#SourceInputMode_MaxZone",
                  elementId: e,
                  key: e,
                  min: 5,
                  max: 100,
                  step: 5,
                  value: this.state.flMaxzonePct,
                  onReset: this.onPropertyReset.bind(this, "maxzone_pct"),
                  onChange: this.onPropertyChanged.bind(this, "maxzone_pct"),
                  renderValue: (e) => (e ? e.toString() : "-"),
                }),
                i.createElement(Y, {
                  labelName: "#SourceInputMode_Exponent",
                  elementId: e,
                  key: e,
                  min: 0.25,
                  max: 4,
                  step: 0.05,
                  value: this.state.flExponent,
                  onReset: this.onPropertyReset.bind(this, "exponent"),
                  onChange: this.onPropertyChanged.bind(this, "exponent"),
                  renderValue: (e) => (e ? e.toFixed(2) : "-"),
                }),
                t,
                i.createElement(
                  "div",
                  {
                    className: "InputSettingsCloseButton Label AllCaps",
                    onClick: this.CloseModeSettings,
                  },
                  (0, d.we)("#Button_Close"),
                ),
              )
            );
          }
          OnClickActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetClickAction(this.props.iMode, e);
            });
          }
          OnTouchActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetTouchAction(this.props.iMode, e);
            });
          }
          OnPositionActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetPositionAction(this.props.iMode, e);
            });
          }
          render() {
            let e = this.props.controllerWatcher[0],
              t = this.GetCombinedBooleanVector1DropDownItems(),
              o = [];
            return (
              this.GetVector2DropDownItems(o, !0),
              i.createElement(
                "div",
                { className: this.WrapperClasses },
                this.renderHeader(),
                e.GetInputSourceClickSupport &&
                  i.createElement(j, {
                    sLocalizedInputType: "#SourceInputMode_Click",
                    SelectedAction: e.GetClickAction(this.props.iMode),
                    vecOptions: t,
                    fnOptionSelected: this.OnClickActionChanged,
                    bReadOnly: !this.state.bEditMode,
                  }),
                e.GetInputSourceTouchSupport &&
                  i.createElement(j, {
                    sLocalizedInputType: "#SourceInputMode_Touch",
                    SelectedAction: e.GetTouchAction(this.props.iMode),
                    vecOptions: t,
                    fnOptionSelected: this.OnTouchActionChanged,
                    bReadOnly: !this.state.bEditMode,
                  }),
                i.createElement(j, {
                  sLocalizedInputType: "#SourceInputMode_Position",
                  SelectedAction: e.GetPositionAction(this.props.iMode),
                  vecOptions: o,
                  fnOptionSelected: this.OnPositionActionChanged,
                  bReadOnly: !this.state.bEditMode,
                }),
                this.renderFooter(),
              )
            );
          }
        };
        (0, n.Cg)([u.o], ie.prototype, "OnTrackpadInvertModeChanged", null),
          (0, n.Cg)([u.o], ie.prototype, "OnTrackpadInvertModeReset", null),
          (0, n.Cg)([u.o], ie.prototype, "OnClickActionChanged", null),
          (0, n.Cg)([u.o], ie.prototype, "OnTouchActionChanged", null),
          (0, n.Cg)([u.o], ie.prototype, "OnPositionActionChanged", null),
          (ie = (0, n.Cg)([s.PA], ie));
        let le = class extends q {
          constructor(e) {
            super(e),
              (this.defaultProperties = [
                {
                  property: "scroll_mode",
                  default: "discrete",
                  type: "string",
                  variableName: "sScrollMode",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_trackpad_aspect_ratio",
                  type: "float",
                  default: 1,
                  variableName: "fSmoothScrollTrackpadAspectRatio",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_multiplier",
                  type: "float",
                  default: 23.3,
                  variableName: "fSmoothScrollMultiplier",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_acceleration_power",
                  type: "float",
                  default: 1.5,
                  variableName: "fSmoothScrollAccelerationPower",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_haptic_notches_per_touchpad",
                  type: "float",
                  default: 16,
                  variableName: "fSmoothScrollHapticNotchesPerTouchpad",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_min_scroll_start_distance",
                  type: "float",
                  default: 0.2,
                  variableName: "fSmoothScrollMinScrollStartDistance",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_min_throw_velocity",
                  type: "float",
                  default: 1,
                  variableName: "fSmoothScrollMinThrowVelocity",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_max_scroll_velocity",
                  type: "float",
                  default: 4,
                  variableName: "fSmoothScrollMaxScrollVelocity",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_deceleration",
                  type: "float",
                  default: 0.975,
                  variableName: "fSmoothScrollDeceleration",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_min_last_velocities_to_average",
                  type: "float",
                  default: 1,
                  variableName: "unSmoothScrollMinLastVelocitiesToAverage",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_max_last_velocities_to_average",
                  type: "float",
                  default: 4,
                  variableName: "unSmoothScrollMaxLastVelocitiesToAverage",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_thrown_termination_velocity",
                  type: "float",
                  default: 1,
                  variableName: "fSmoothScrollThrownTerminationVelocity",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_edge_scroll_threshold",
                  type: "float",
                  default: 0.85,
                  variableName: "fSmoothScrollEdgeScrollThreshold",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_edge_scroll_threshold_vertical_bias",
                  type: "float",
                  default: 0,
                  variableName: "fSmoothScrollEdgeScrollThresholdVerticalBias",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_edge_scroll_velocity",
                  type: "float",
                  default: 0.77,
                  variableName: "fSmoothScrollEdgeScrollVelocity",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_edge_min_swipe",
                  type: "float",
                  default: 0.5,
                  variableName: "fSmoothScrollEdgeMinSwipe",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_min_side_scroll_ratio",
                  type: "float",
                  default: 3,
                  variableName: "fSmoothScrollMinSideScrollRatio",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_joystick_max_scroll_velocity",
                  type: "float",
                  default: 20,
                  variableName: "fSmoothScrollJoystickMaxScrollVelocity",
                  mode: "touch",
                },
                {
                  property: "smooth_scroll_joystick_min_input_magnitude",
                  type: "float",
                  default: 0.01,
                  variableName: "fSmoothScrollJoystickMinInputMagnitude",
                  mode: "touch",
                },
                {
                  property: "discrete_scroll_trackpad_globalscalefactor",
                  type: "float",
                  default: 1,
                  variableName: "fDiscreteScrollTrackpadGlobalScaleFactor",
                  mode: "touch",
                },
                {
                  property:
                    "discrete_scroll_trackpad_haptic_on_touchstart_enabled",
                  type: "bool",
                  default: false,
                  variableName:
                    "bDiscreteScrollTrackpadHapticOnTouchStartEnabled",
                  mode: "click",
                },
                {
                  property:
                    "discrete_scroll_trackpad_direct_directionlock_enabled",
                  type: "bool",
                  default: false,
                  variableName:
                    "bDiscreteScrollTrackpadLockGestureDirectionEnabled",
                  mode: "click",
                },
                {
                  property: "discrete_scroll_trackpad_noisethreshold_ontouch",
                  type: "float",
                  default: 0.15,
                  variableName: "fDiscreteScrollTrackpadNoiseReductionOnTouch",
                  mode: "touch",
                },
                {
                  property: "discrete_scroll_trackpad_noisethreshold_onmove",
                  type: "float",
                  default: 0.01,
                  variableName: "fDiscreteScrollTrackpadNoiseReductionOnMove",
                  mode: "touch",
                },
                {
                  property:
                    "discrete_scroll_trackpad_noisethreshold_onreversal",
                  type: "float",
                  default: 0.045,
                  variableName:
                    "fDiscreteScrollTrackpadNoiseReductionOnReversal",
                  mode: "touch",
                },
                {
                  property: "discrete_scroll_trackpad_accumthreshold_ontouch",
                  type: "float",
                  default: 0.78,
                  variableName: "fDiscreteScrollTrackpadAccumThresholdOnTouch",
                  mode: "touch",
                },
                {
                  property: "discrete_scroll_trackpad_accumthreshold_onmove",
                  type: "float",
                  default: 0.28,
                  variableName: "fDiscreteScrollTrackpadAccumThresholdOnMove",
                  mode: "touch",
                },
                {
                  property:
                    "discrete_scroll_trackpad_accumthreshold_onreversal",
                  type: "float",
                  default: 0.84,
                  variableName:
                    "fDiscreteScrollTrackpadAccumThresholdOnReversal",
                  mode: "touch",
                },
                {
                  property: "discrete_scroll_trackpad_flick_enabled",
                  type: "bool",
                  default: true,
                  variableName: "bDiscreteScrollTrackpadFlickEnabled",
                  mode: "click",
                },
                {
                  property: "discrete_scroll_trackpad_flick_threshold",
                  type: "float",
                  default: 0.0025,
                  variableName: "fDiscreteScrollTrackpadFlickThreshold",
                  mode: "touch",
                },
                {
                  property: "discrete_scroll_trackpad_flick_multiplier",
                  type: "float",
                  default: 1,
                  variableName: "fDiscreteScrollTrackpadFlickScrollMultiplier",
                  mode: "touch",
                },
                {
                  property: "discrete_scroll_trackpad_flick_speed",
                  type: "float",
                  default: 0.975,
                  variableName: "fDiscreteScrollTrackpadFlickSpeed",
                  mode: "touch",
                },
                {
                  property: "discrete_scroll_trackpad_slideandhold_enabled",
                  type: "bool",
                  default: true,
                  variableName:
                    "bDiscreteScrollTrackpadSlideAndHoldGestureEnabled",
                  mode: "click",
                },
                {
                  property: "discrete_scroll_trackpad_slideandhold_scalefactor",
                  type: "float",
                  default: 1,
                  variableName:
                    "fDiscreteScrollTrackpadSlideAndHoldScaleFactor",
                  mode: "touch",
                },
                {
                  property:
                    "discrete_scroll_trackpad_slideandhold_pulseratefactor",
                  type: "float",
                  default: 1,
                  variableName:
                    "fDiscreteScrollTrackpadSlideAndHoldPulseRateFactor",
                  mode: "touch",
                },
                {
                  property: "discrete_scroll_trackpad_slideandhold_bordertop",
                  type: "float",
                  default: 0.55,
                  variableName: "fDiscreteScrollTrackpadSlideAndHoldBorderTop",
                  mode: "touch",
                },
                {
                  property:
                    "discrete_scroll_trackpad_slideandhold_borderbottom",
                  type: "float",
                  default: -0.65,
                  variableName:
                    "fDiscreteScrollTrackpadSlideAndHoldBorderBottom",
                  mode: "touch",
                },
                {
                  property:
                    "discrete_scroll_trackpad_slideandhold_hapticenabled",
                  type: "bool",
                  default: true,
                  variableName:
                    "bDiscreteScrollTrackpadSlideAndHoldHapticEnabled",
                  mode: "click",
                },
                {
                  property: "discrete_scroll_joystick_ratefactor",
                  type: "float",
                  default: 1,
                  variableName: "fDiscreteScrollJoystickScrollRate",
                  mode: "touch",
                },
                {
                  property: "discrete_scroll_joystick_scalefactor",
                  type: "float",
                  default: 1,
                  variableName: "fDiscreteScrollJoystickScrollScale",
                  mode: "touch",
                },
                {
                  property: "discrete_scroll_joystick_deadzone_horizontal",
                  type: "float",
                  default: 0.1,
                  variableName:
                    "fDiscreteScrollJoystickScrollDeadzoneHorizontal",
                  mode: "touch",
                },
                {
                  property: "discrete_scroll_joystick_deadzone_vertical",
                  type: "float",
                  default: 0.1,
                  variableName: "fDiscreteScrollJoystickScrollDeadzoneVertical",
                  mode: "touch",
                },
              ]),
              this.LoadDefaults();
          }
          OnSave() {
            this.setState({ bEditMode: !1 });
          }
          OnScrollActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetScrollAction(this.props.iMode, e);
            });
          }
          BModeHasSettings() {
            return !0;
          }
          renderSliderValue(e) {
            return e.toString();
          }
          LocalizeScrollModeString(e) {
            switch (e) {
              case "smooth":
                return (0, d.we)("#SourceInputMode_ScrollMode_Smooth");
              case "discrete":
                return (0, d.we)("#SourceInputMode_ScrollMode_Discrete");
            }
            return (0, d.we)("#SourceInputMode_Default");
          }
          renderSettingsContent() {
            this.props.controllerWatcher[0];
            let e = "";
            this.hasOwnProperty("nextUniqueId") && (e = this.nextUniqueId());
            let t = [
                new g("smooth", this.LocalizeScrollModeString("smooth")),
                new g("discrete", this.LocalizeScrollModeString("discrete")),
              ],
              o = "smooth" === this.state.sScrollMode,
              n =
                "joystick" ==
                this.props.controllerWatcher[0].GetInputSourceType;
            return i.createElement(
              "div",
              { className: "InputSettingsModal" },
              i.createElement(
                "div",
                { className: "ChordBindingHeader FlexColumn" },
                i.createElement(
                  "div",
                  { className: "FlexFullWidthRowCentered" },
                  i.createElement("img", {
                    className:
                      "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                    src: "images/bindingui/icon_modal_edit_header.svg",
                  }),
                  i.createElement(
                    "div",
                    { className: "Label Title TitleCenter AllCaps" },
                    (0, d.we)("#BindingSettingsModal_Title"),
                  ),
                ),
              ),
              i.createElement(
                "div",
                { className: "InputSettingsScrollablePanel" },
                i.createElement(Z, {
                  labelName: "#SourceInputMode_ScrollMode",
                  elementId: e,
                  vecValues: t,
                  selectedValue: this.state.sScrollMode,
                  selectedValueLocalized: this.LocalizeScrollModeString(
                    this.state.sScrollMode,
                  ),
                  onReset: this.onPropertyReset.bind(this, "scroll_mode"),
                  onChange: this.onPropertyChanged.bind(this, "scroll_mode"),
                }),
                o &&
                  !n &&
                  i.createElement(Y, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_TrackpadAspectRatio",
                    elementId: e,
                    min: 0.2,
                    max: 5,
                    step: 0.1,
                    value: this.state.fSmoothScrollTrackpadAspectRatio,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_trackpad_aspect_ratio",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_trackpad_aspect_ratio",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  i.createElement(Y, {
                    labelName: "#SourceInputMode_SmoothScroll_Multiplier",
                    elementId: e,
                    min: 0.1,
                    max: 100,
                    step: 0.1,
                    value: this.state.fSmoothScrollMultiplier,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_multiplier",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_multiplier",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  i.createElement(Y, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_AccelerationPower",
                    elementId: e,
                    min: 1,
                    max: 5,
                    step: 0.1,
                    value: this.state.fSmoothScrollAccelerationPower,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_acceleration_power",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_acceleration_power",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  i.createElement(Y, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_NotchesPerTouchpad",
                    elementId: e,
                    min: 1,
                    max: 64,
                    step: 1,
                    value: this.state.fSmoothScrollHapticNotchesPerTouchpad,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_haptic_notches_per_touchpad",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_haptic_notches_per_touchpad",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  i.createElement(Y, {
                    labelName: "#SourceInputMode_SmoothScroll_StartDistance",
                    elementId: e,
                    min: 0.01,
                    max: 1,
                    step: 0.01,
                    value: this.state.fSmoothScrollMinScrollStartDistance,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_min_scroll_start_distance",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_min_scroll_start_distance",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  i.createElement(Y, {
                    labelName: "#SourceInputMode_SmoothScroll_MinThrowVelocity",
                    elementId: e,
                    min: 0.1,
                    max: 5,
                    step: 0.1,
                    value: this.state.fSmoothScrollMinThrowVelocity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_min_throw_velocity",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_min_throw_velocity",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  i.createElement(Y, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_MaxScrollVelocity",
                    elementId: e,
                    min: 0.5,
                    max: 15,
                    step: 0.1,
                    value: this.state.fSmoothScrollMaxScrollVelocity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_max_scroll_velocity",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_max_scroll_velocity",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  i.createElement(Y, {
                    labelName: "#SourceInputMode_SmoothScroll_Deceleration",
                    elementId: e,
                    min: 0.5,
                    max: 1,
                    step: 0.01,
                    value: this.state.fSmoothScrollDeceleration,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_deceleration",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_deceleration",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  i.createElement(Y, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_MinLastVelocitiesToAverage",
                    elementId: e,
                    min: 1,
                    max: 10,
                    step: 1,
                    value: this.state.unSmoothScrollMinLastVelocitiesToAverage,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_min_last_velocities_to_average",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_min_last_velocities_to_average",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  i.createElement(Y, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_MaxLastVelocitiesToAverage",
                    elementId: e,
                    min: 1,
                    max: 20,
                    step: 1,
                    value: this.state.unSmoothScrollMaxLastVelocitiesToAverage,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_max_last_velocities_to_average",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_max_last_velocities_to_average",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  i.createElement(Y, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_ThrownTerminationVelocity",
                    elementId: e,
                    min: 0.1,
                    max: 5,
                    step: 0.1,
                    value: this.state.fSmoothScrollThrownTerminationVelocity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_thrown_termination_velocity",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_thrown_termination_velocity",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  i.createElement(Y, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_EdgeScrollThreshold",
                    elementId: e,
                    min: 0.1,
                    max: 2,
                    step: 0.05,
                    value: this.state.fSmoothScrollEdgeScrollThreshold,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_edge_scroll_threshold",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_edge_scroll_threshold",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  i.createElement(Y, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_EdgeScrollThresholdVerticalBias",
                    elementId: e,
                    min: -1,
                    max: 1,
                    step: 0.01,
                    value:
                      this.state.fSmoothScrollEdgeScrollThresholdVerticalBias,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_edge_scroll_threshold_vertical_bias",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_edge_scroll_threshold_vertical_bias",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  i.createElement(Y, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_EdgeScrollVelocity",
                    elementId: e,
                    min: 0,
                    max: 5,
                    step: 0.01,
                    value: this.state.fSmoothScrollEdgeScrollVelocity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_edge_scroll_velocity",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_edge_scroll_velocity",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  i.createElement(Y, {
                    labelName: "#SourceInputMode_SmoothScroll_EdgeMinSwipe",
                    elementId: e,
                    min: 0,
                    max: 1,
                    step: 0.01,
                    value: this.state.fSmoothScrollEdgeMinSwipe,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_edge_min_swipe",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_edge_min_swipe",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  !n &&
                  i.createElement(Y, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_MinSideScrollRatio",
                    elementId: e,
                    min: 1,
                    max: 5,
                    step: 0.5,
                    value: this.state.fSmoothScrollMinSideScrollRatio,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_min_side_scroll_ratio",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_min_side_scroll_ratio",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  n &&
                  i.createElement(Y, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_MaxScrollVelocity",
                    elementId: e,
                    min: 0.5,
                    max: 50,
                    step: 0.1,
                    value: this.state.fSmoothScrollJoystickMaxScrollVelocity,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_joystick_max_scroll_velocity",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_joystick_max_scroll_velocity",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                o &&
                  n &&
                  i.createElement(Y, {
                    labelName:
                      "#SourceInputMode_SmoothScroll_Joystick_MinInputMagnitude",
                    elementId: e,
                    min: 0.005,
                    max: 0.2,
                    step: 0.005,
                    value: this.state.fSmoothScrollJoystickMinInputMagnitude,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "smooth_scroll_joystick_min_input_magnitude",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "smooth_scroll_joystick_min_input_magnitude",
                    ),
                    renderValue: this.renderSliderValue,
                  }),
                !o &&
                  !n &&
                  i.createElement(Y, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.2,
                    max: 5,
                    step: 0.1,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_GlobalScaleFactor",
                    value: this.state.fDiscreteScrollTrackpadGlobalScaleFactor,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_globalscalefactor",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_globalscalefactor",
                    ),
                  }),
                !o &&
                  !n &&
                  i.createElement(X, {
                    elementId: e,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_HapticOnTouchStart",
                    key: "discrete_scroll_trackpad_haptic_on_touchstart_enabled",
                    value:
                      this.state
                        .bDiscreteScrollTrackpadHapticOnTouchStartEnabled,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_haptic_on_touchstart_enabled",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_haptic_on_touchstart_enabled",
                    ),
                  }),
                !o &&
                  !n &&
                  i.createElement(X, {
                    elementId: e,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_DirectDirectionLock",
                    key: "discrete_scroll_trackpad_direct_directionlock_enabled",
                    value:
                      this.state
                        .bDiscreteScrollTrackpadLockGestureDirectionEnabled,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_direct_directionlock_enabled",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_direct_directionlock_enabled",
                    ),
                  }),
                !o &&
                  !n &&
                  i.createElement(Y, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.01,
                    max: 0.3,
                    step: 0.005,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_NoiseThreshold_OnTouch",
                    value:
                      this.state.fDiscreteScrollTrackpadNoiseReductionOnTouch,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_noisethreshold_ontouch",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_noisethreshold_ontouch",
                    ),
                  }),
                !o &&
                  !n &&
                  i.createElement(Y, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.01,
                    max: 0.3,
                    step: 0.005,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_NoiseThreshold_OnMove",
                    value:
                      this.state.fDiscreteScrollTrackpadNoiseReductionOnMove,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_noisethreshold_onmove",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_noisethreshold_onmove",
                    ),
                  }),
                !o &&
                  !n &&
                  i.createElement(Y, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.01,
                    max: 0.3,
                    step: 0.005,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_NoiseThreshold_OnReversal",
                    value:
                      this.state
                        .fDiscreteScrollTrackpadNoiseReductionOnReversal,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_noisethreshold_onreversal",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_noisethreshold_onreversal",
                    ),
                  }),
                !o &&
                  !n &&
                  i.createElement(Y, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.1,
                    max: 1,
                    step: 0.01,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_AccumThreshold_OnTouch",
                    value:
                      this.state.fDiscreteScrollTrackpadAccumThresholdOnTouch,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_accumthreshold_ontouch",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_accumthreshold_ontouch",
                    ),
                  }),
                !o &&
                  !n &&
                  i.createElement(Y, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.1,
                    max: 1,
                    step: 0.01,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_AccumThreshold_OnMove",
                    value:
                      this.state.fDiscreteScrollTrackpadAccumThresholdOnMove,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_accumthreshold_onmove",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_accumthreshold_onmove",
                    ),
                  }),
                !o &&
                  !n &&
                  i.createElement(Y, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.1,
                    max: 1,
                    step: 0.01,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_AccumThreshold_OnReversal",
                    value:
                      this.state
                        .fDiscreteScrollTrackpadAccumThresholdOnReversal,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_accumthreshold_onreversal",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_accumthreshold_onreversal",
                    ),
                  }),
                !o &&
                  !n &&
                  i.createElement(X, {
                    elementId: e,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_FlickEnabled",
                    key: "discrete_scroll_trackpad_flick_enabled",
                    value: this.state.bDiscreteScrollTrackpadFlickEnabled,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_flick_enabled",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_flick_enabled",
                    ),
                  }),
                !o &&
                  !n &&
                  i.createElement(Y, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.001,
                    max: 0.1,
                    step: 0.001,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_FlickThreshold",
                    value: this.state.fDiscreteScrollTrackpadFlickThreshold,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_flick_threshold",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_flick_threshold",
                    ),
                  }),
                !o &&
                  !n &&
                  i.createElement(Y, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.1,
                    max: 3,
                    step: 0.1,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_FlickScrollMultiplier",
                    value:
                      this.state.fDiscreteScrollTrackpadFlickScrollMultiplier,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_flick_multiplier",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_flick_multiplier",
                    ),
                  }),
                !o &&
                  !n &&
                  i.createElement(Y, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.9,
                    max: 0.999,
                    step: 0.001,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_FlickThrowSpeed",
                    value: this.state.fDiscreteScrollTrackpadFlickSpeed,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_flick_speed",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_flick_speed",
                    ),
                  }),
                !o &&
                  !n &&
                  i.createElement(X, {
                    elementId: e,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_SlideAndHoldEnabled",
                    key: "discrete_scroll_trackpad_slideandhold_enabled",
                    value:
                      this.state
                        .bDiscreteScrollTrackpadSlideAndHoldGestureEnabled,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_enabled",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_enabled",
                    ),
                  }),
                !o &&
                  !n &&
                  i.createElement(Y, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.02,
                    max: 4,
                    step: 0.01,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_SlideAndHoldScaleFactor",
                    value:
                      this.state.fDiscreteScrollTrackpadSlideAndHoldScaleFactor,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_scalefactor",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_scalefactor",
                    ),
                  }),
                !o &&
                  !n &&
                  i.createElement(Y, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.2,
                    max: 4,
                    step: 0.1,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_SlideAndHoldPulseRate",
                    value:
                      this.state
                        .fDiscreteScrollTrackpadSlideAndHoldPulseRateFactor,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_pulseratefactor",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_pulseratefactor",
                    ),
                  }),
                !o &&
                  !n &&
                  i.createElement(Y, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0,
                    max: 1,
                    step: 0.01,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_SlideAndHoldBorderTop",
                    value:
                      this.state.fDiscreteScrollTrackpadSlideAndHoldBorderTop,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_bordertop",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_bordertop",
                    ),
                  }),
                !o &&
                  !n &&
                  i.createElement(Y, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: -1,
                    max: 0,
                    step: 0.01,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_SlideAndHoldBorderBottom",
                    value:
                      this.state
                        .fDiscreteScrollTrackpadSlideAndHoldBorderBottom,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_borderbottom",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_borderbottom",
                    ),
                  }),
                !o &&
                  !n &&
                  i.createElement(X, {
                    elementId: e,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Trackpad_SlideAndHoldHapticEnabled",
                    key: "discrete_scroll_trackpad_slideandhold_hapticenabled",
                    value:
                      this.state
                        .bDiscreteScrollTrackpadSlideAndHoldHapticEnabled,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_hapticenabled",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_trackpad_slideandhold_hapticenabled",
                    ),
                  }),
                !o &&
                  n &&
                  i.createElement(Y, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.01,
                    max: 4,
                    step: 0.01,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Joystick_ScrollRateFactor",
                    value: this.state.fDiscreteScrollJoystickScrollRate,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_joystick_ratefactor",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_joystick_ratefactor",
                    ),
                  }),
                !o &&
                  n &&
                  i.createElement(Y, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.01,
                    max: 4,
                    step: 0.01,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Joystick_ScrollScaleFactor",
                    value: this.state.fDiscreteScrollJoystickScrollScale,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_joystick_scalefactor",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_joystick_scalefactor",
                    ),
                  }),
                !o &&
                  n &&
                  i.createElement(Y, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.01,
                    max: 0.5,
                    step: 0.01,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Joystick_Deadzone_Horizontal",
                    value:
                      this.state
                        .fDiscreteScrollJoystickScrollDeadzoneHorizontal,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_joystick_deadzone_horizontal",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_joystick_deadzone_horizontal",
                    ),
                  }),
                !o &&
                  n &&
                  i.createElement(Y, {
                    elementId: e,
                    renderValue: this.renderSliderValue,
                    min: 0.01,
                    max: 0.5,
                    step: 0.01,
                    labelName:
                      "#SourceInputMode_DiscreteScroll_Joystick_Deadzone_Vertical",
                    value:
                      this.state.fDiscreteScrollJoystickScrollDeadzoneVertical,
                    onReset: this.onPropertyReset.bind(
                      this,
                      "discrete_scroll_joystick_deadzone_vertical",
                    ),
                    onChange: this.onPropertyChanged.bind(
                      this,
                      "discrete_scroll_joystick_deadzone_vertical",
                    ),
                  }),
              ),
              i.createElement(
                "div",
                {
                  className: "InputSettingsCloseButton Label AllCaps",
                  onClick: this.CloseModeSettings,
                },
                (0, d.we)("#Button_Close"),
              ),
            );
          }
          render() {
            let e = this.props.controllerWatcher[0],
              t = [];
            return (
              this.GetVector2DropDownItems(t, !0),
              i.createElement(
                "div",
                { className: this.WrapperClasses },
                this.renderHeader(),
                i.createElement(j, {
                  sLocalizedInputType: "#SourceInputMode_Scroll",
                  SelectedAction: e.GetScrollAction(this.props.iMode),
                  vecOptions: t,
                  fnOptionSelected: this.OnScrollActionChanged,
                  bReadOnly: !this.state.bEditMode,
                }),
                this.renderFooter(),
              )
            );
          }
        };
        (0, n.Cg)([u.o], le.prototype, "OnSave", null),
          (0, n.Cg)([u.o], le.prototype, "OnScrollActionChanged", null),
          (le = (0, n.Cg)([s.PA], le));
        let se = class extends q {
          OnClickActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetClickAction(this.props.iMode, e);
            });
          }
          OnTouchActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetTouchAction(this.props.iMode, e);
            });
          }
          OnPullActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetPullAction(this.props.iMode, e);
            });
          }
          render() {
            let e = this.props.controllerWatcher[0],
              t = this.GetCombinedBooleanVector1DropDownItems(),
              o = [];
            return (
              this.GetVector1DropDownItems(o, !0),
              i.createElement(
                "div",
                { className: this.WrapperClasses },
                this.renderHeader(),
                e.GetInputSourceClickSupport &&
                  i.createElement(j, {
                    sLocalizedInputType: "#SourceInputMode_TriggerClick",
                    SelectedAction: e.GetClickAction(this.props.iMode),
                    vecOptions: t,
                    fnOptionSelected: this.OnClickActionChanged,
                    bReadOnly: !this.state.bEditMode,
                  }),
                e.GetInputSourceTouchSupport &&
                  i.createElement(j, {
                    sLocalizedInputType: "#SourceInputMode_Touch",
                    SelectedAction: e.GetTouchAction(this.props.iMode),
                    vecOptions: t,
                    fnOptionSelected: this.OnTouchActionChanged,
                    bReadOnly: !this.state.bEditMode,
                  }),
                i.createElement(j, {
                  sLocalizedInputType: "#SourceInputMode_Pull",
                  SelectedAction: e.GetPullAction(this.props.iMode),
                  vecOptions: o,
                  fnOptionSelected: this.OnPullActionChanged,
                  bReadOnly: !this.state.bEditMode,
                }),
                this.renderFooter(),
              )
            );
          }
        };
        (0, n.Cg)([u.o], se.prototype, "OnClickActionChanged", null),
          (0, n.Cg)([u.o], se.prototype, "OnTouchActionChanged", null),
          (0, n.Cg)([u.o], se.prototype, "OnPullActionChanged", null),
          (se = (0, n.Cg)([s.PA], se));
        let re = class extends q {
          OnForceActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetForceAction(this.props.iMode, e);
            });
          }
          render() {
            let e = this.props.controllerWatcher[0],
              t = [];
            return (
              this.GetVector1DropDownItems(t, !0),
              i.createElement(
                "div",
                { className: this.WrapperClasses },
                this.renderHeader(),
                e.GetInputSourceForceSupport &&
                  i.createElement(j, {
                    sLocalizedInputType: "#SourceInputMode_Force",
                    SelectedAction: e.GetForceAction(this.props.iMode),
                    vecOptions: t,
                    fnOptionSelected: this.OnForceActionChanged,
                    bReadOnly: !this.state.bEditMode,
                  }),
                this.renderFooter(),
              )
            );
          }
        };
        (0, n.Cg)([u.o], re.prototype, "OnForceActionChanged", null),
          (re = (0, n.Cg)([s.PA], re));
        let ae = class extends q {
          constructor(e) {
            super(e),
              (this.defaultProperties = [
                {
                  property: "value",
                  default: !0,
                  type: "string",
                  variableName: "sConstantBool",
                  mode: "static_bool",
                },
              ]),
              this.LoadDefaults(),
              this.BModeHasSettings.bind(this),
              (0, $.enableUniqueIds)(this);
          }
          GetActionArity() {
            return this.props.controllerWatcher[0].GetValueAction(
              this.props.iMode,
            )
              ? 1
              : 0;
          }
          renderSettingsContent() {
            this.props.controllerWatcher[0];
            let e = "";
            this.hasOwnProperty("nextUniqueId") && (e = this.nextUniqueId());
            let t = [];
            t.push(new g("true", (0, d.we)("#True"))),
              t.push(new g("false", (0, d.we)("#False"))),
              console.log(
                "this.state.sConstantBool: " + this.state.sConstantBool,
              );
            this.GetActionArity();
            return i.createElement(
              "div",
              { className: "InputSettingsModal" },
              i.createElement(
                "div",
                { className: "ChordBindingHeader FlexColumn" },
                i.createElement(
                  "div",
                  { className: "FlexFullWidthRowCentered" },
                  i.createElement("img", {
                    className:
                      "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                    src: "images/bindingui/icon_modal_edit_header.svg",
                  }),
                  i.createElement(
                    "div",
                    { className: "Label Title TitleCenter AllCaps" },
                    (0, d.we)("#BindingSettingsModal_Title"),
                  ),
                ),
              ),
              i.createElement(
                "div",
                { className: "FlexColumn" },
                i.createElement(Z, {
                  labelName: "#SourceInputMode_StaticBool_Value",
                  elementId: e,
                  vecValues: t,
                  selectedValue: this.state.sConstantBool,
                  selectedValueLocalized: (0, d.we)(
                    "true" == this.state.sConstantBool ? "#True" : "#False",
                  ),
                  onReset: this.onPropertyReset.bind(this, "value"),
                  onChange: this.onPropertyChanged.bind(this, "value"),
                }),
              ),
              i.createElement(
                "div",
                {
                  className: "InputSettingsCloseButton Label AllCaps",
                  onClick: this.CloseModeSettings,
                },
                (0, d.we)("#Button_Close"),
              ),
            );
          }
          BModeHasSettings() {
            return !0;
          }
          OnConstantActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetConstantAction(this.props.iMode, e);
            });
          }
          render() {
            let e = this.props.controllerWatcher[0],
              t = [];
            return (
              this.GetBooleanDropDownItems(t, !0),
              i.createElement(
                "div",
                { className: this.WrapperClasses },
                this.renderHeader(),
                i.createElement(j, {
                  sLocalizedInputType: "#SourceInputMode_StaticBool",
                  SelectedAction: e.GetConstantAction(this.props.iMode),
                  vecOptions: t,
                  fnOptionSelected: this.OnConstantActionChanged,
                  bReadOnly: !this.state.bEditMode,
                }),
                this.renderFooter(),
              )
            );
          }
        };
        (0, n.Cg)([u.o], ae.prototype, "OnConstantActionChanged", null),
          (ae = (0, n.Cg)([s.PA], ae));
        let ce = class extends q {
          constructor(e) {
            super(e),
              (this.defaultProperties = [
                {
                  property: "capsense_enable_threshold",
                  default: 0.8,
                  type: "float",
                  variableName: "flCapsenseEnableThreshold",
                  mode: "grab",
                },
                {
                  property: "value_hold_threshold",
                  default: 0.7,
                  type: "float",
                  variableName: "flGrabThreshold",
                  mode: "grab",
                },
                {
                  property: "value_release_threshold",
                  default: 0.65,
                  type: "float",
                  variableName: "flReleaseThreshold",
                  mode: "grab",
                },
                {
                  property: "force_hold_threshold",
                  default: 0.1,
                  type: "float",
                  variableName: "flForceHoldThreshold",
                  mode: "grab",
                },
                {
                  property: "force_release_threshold",
                  default: 0.05,
                  type: "float",
                  variableName: "flForceReleaseThreshold",
                  mode: "grab",
                },
                {
                  property: "downgrade_speed",
                  default: 1,
                  type: "float",
                  variableName: "flDowngradeSpeed",
                  mode: "grab",
                },
                {
                  property: "drop_speed",
                  default: 0.1,
                  type: "float",
                  variableName: "flDropSpeed",
                  mode: "grab",
                },
                {
                  property: "haptic_amplitude",
                  default: 0,
                  type: "float",
                  variableName: "flHapticAmplitude",
                  mode: "grab",
                },
                {
                  property: "haptic_frequency",
                  default: 20,
                  type: "float",
                  variableName: "flHapticFrequency",
                  mode: "grab",
                },
                {
                  property: "haptic_duration",
                  default: 0,
                  type: "float",
                  variableName: "flHapticDuration",
                  mode: "grab",
                },
              ]),
              this.LoadDefaults(),
              this.BModeHasSettings.bind(this),
              (0, $.enableUniqueIds)(this);
          }
          OnGrabActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetGrabAction(this.props.iMode, e);
            });
          }
          BModeHasSettings() {
            return !0;
          }
          renderNormalizedSliderValue(e) {
            return Math.round(100 * e).toString();
          }
          renderSliderRawValue(e) {
            return e.toString();
          }
          renderNormalizedSplitSliderValue(e, t, o) {
            let n = (e > 1 ? o : t) + ": ";
            return (e = e > 1 ? e - 1 : e), n + Math.round(100 * e).toString();
          }
          renderSpeedSliderValue(e) {
            return (
              e.toString() + " " + (0, d.we)("#MetersPerSecond_Abbreviation")
            );
          }
          renderSettingsContent() {
            let e = this.props.controllerWatcher[0],
              t = "pinch" == e.GetInputSourceType,
              o = (0, d.we)(
                "pinch" == e.GetInputSourceType
                  ? "#SourceInputMode_Pull"
                  : "#SourceInputMode_Proximity",
              ),
              l = !("pinch" == e.GetInputSourceType),
              s = "";
            return (
              this.hasOwnProperty("nextUniqueId") && (s = this.nextUniqueId()),
              i.createElement(
                "div",
                { className: "InputSettingsModal" },
                i.createElement(
                  "div",
                  { className: "ChordBindingHeader FlexColumn" },
                  i.createElement(
                    "div",
                    { className: "FlexFullWidthRowCentered" },
                    i.createElement("img", {
                      className:
                        "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                      src: "images/bindingui/icon_modal_edit_header.svg",
                    }),
                    i.createElement(
                      "div",
                      { className: "Label Title TitleCenter AllCaps" },
                      (0, d.we)("#BindingSettingsModal_Title"),
                    ),
                  ),
                ),
                i.createElement(
                  "div",
                  { className: "FlexColumn" },
                  t &&
                    i.createElement(Y, {
                      labelName: "#SourceInputMode_CapsenseEnableThreshold",
                      elementId: s,
                      min: 0,
                      max: 1,
                      step: 0.05,
                      value: this.state.flCapsenseEnableThreshold,
                      onReset: this.onPropertyReset.bind(
                        this,
                        "capsense_enable_threshold",
                      ),
                      onChange: this.onPropertyChanged.bind(
                        this,
                        "capsense_enable_threshold",
                      ),
                      renderValue: this.renderNormalizedSliderValue,
                    }),
                  i.createElement(Y, {
                    labelName: "#SourceInputMode_GrabThreshold",
                    elementId: s,
                    halfSplit: l,
                    min: 0,
                    max: l ? 2 : 1,
                    step: 0.05,
                    value: this.state.flGrabThreshold,
                    onReset: () =>
                      (0, n.sH)(this, void 0, void 0, function* () {
                        yield this.onPropertyReset("value_hold_threshold");
                        const e = this.state.flGrabThreshold;
                        this.state.flReleaseThreshold > e &&
                          this.setState({ flReleaseThreshold: e });
                      }),
                    onChange: (e) => {
                      this.state.flReleaseThreshold > e &&
                        this.setState({ flReleaseThreshold: e }),
                        this.onPropertyChanged("value_hold_threshold", e);
                    },
                    renderValue: (e) =>
                      this.renderNormalizedSplitSliderValue(
                        e,
                        o,
                        (0, d.we)("#SourceInputMode_Force"),
                      ),
                  }),
                  i.createElement(Y, {
                    labelName: "#SourceInputMode_ReleaseThreshold",
                    elementId: s,
                    halfSplit: l,
                    min: 0,
                    max: l ? 2 : 1,
                    step: 0.05,
                    value: this.state.flReleaseThreshold,
                    onReset: () =>
                      (0, n.sH)(this, void 0, void 0, function* () {
                        yield this.onPropertyReset("value_release_threshold");
                        const e = this.state.flReleaseThreshold;
                        this.state.flGrabThreshold < e &&
                          this.setState({ flGrabThreshold: e });
                      }),
                    onChange: (e) => {
                      this.state.flGrabThreshold < e &&
                        this.setState({ flGrabThreshold: e }),
                        this.onPropertyChanged("value_release_threshold", e);
                    },
                    renderValue: (e) =>
                      this.renderNormalizedSplitSliderValue(
                        e,
                        o,
                        (0, d.we)("#SourceInputMode_Force"),
                      ),
                  }),
                  i.createElement(
                    "div",
                    {
                      className: "InputSettingsCloseButton Label AllCaps",
                      onClick: () => {
                        this.setState({
                          bShowAdvanced: !this.state.bShowAdvanced,
                        });
                      },
                    },
                    (0, d.we)(
                      this.state.bShowAdvanced
                        ? "#DisplaySettings_HideAdvancedSettings"
                        : "#DisplaySettings_ShowAdvancedSettings",
                    ),
                  ),
                  this.state.bShowAdvanced &&
                    i.createElement(
                      "div",
                      null,
                      !1,
                      i.createElement(Y, {
                        labelName: "#SourceInputMode_ForceHoldThreshold",
                        elementId: s,
                        min: 0,
                        max: 1,
                        step: 0.05,
                        value: this.state.flForceHoldThreshold,
                        onReset: this.onPropertyReset.bind(
                          this,
                          "force_hold_threshold",
                        ),
                        onChange: this.onPropertyChanged.bind(
                          this,
                          "force_hold_threshold",
                        ),
                        renderValue: this.renderNormalizedSliderValue,
                      }),
                      i.createElement(Y, {
                        labelName: "#SourceInputMode_ForceReleaseThreshold",
                        elementId: s,
                        min: 0,
                        max: 1,
                        step: 0.05,
                        value: this.state.flForceReleaseThreshold,
                        onReset: this.onPropertyReset.bind(
                          this,
                          "force_release_threshold",
                        ),
                        onChange: this.onPropertyChanged.bind(
                          this,
                          "force_release_threshold",
                        ),
                        renderValue: this.renderNormalizedSliderValue,
                      }),
                      i.createElement(Y, {
                        labelName: "#SourceInputMode_DowngradeSpeed",
                        elementId: s,
                        min: 0,
                        max: 10,
                        step: 0.1,
                        value: this.state.flDowngradeSpeed,
                        onReset: this.onPropertyReset.bind(
                          this,
                          "downgrade_speed",
                        ),
                        onChange: this.onPropertyChanged.bind(
                          this,
                          "downgrade_speed",
                        ),
                        renderValue: this.renderSpeedSliderValue,
                      }),
                      i.createElement(Y, {
                        labelName: "#SourceInputMode_DropSpeed",
                        elementId: s,
                        min: 0,
                        max: 10,
                        step: 0.1,
                        value: this.state.flDropSpeed,
                        onReset: this.onPropertyReset.bind(this, "drop_speed"),
                        onChange: this.onPropertyChanged.bind(
                          this,
                          "drop_speed",
                        ),
                        renderValue: this.renderSpeedSliderValue,
                      }),
                    ),
                ),
                i.createElement(
                  "div",
                  {
                    className: "InputSettingsCloseButton Label AllCaps",
                    onClick: this.CloseModeSettings,
                  },
                  (0, d.we)("#Button_Close"),
                ),
              )
            );
          }
          render() {
            let e = this.props.controllerWatcher[0],
              t = this.GetCombinedBooleanVector1DropDownItems();
            return i.createElement(
              "div",
              { className: this.WrapperClasses },
              this.renderHeader(),
              i.createElement(j, {
                sLocalizedInputType: "#SourceInputMode_Grab",
                SelectedAction: e.GetGrabAction(this.props.iMode),
                vecOptions: t,
                fnOptionSelected: this.OnGrabActionChanged,
                bReadOnly: !this.state.bEditMode,
              }),
              this.renderFooter(),
            );
          }
        };
        (0, n.Cg)([u.o], ce.prototype, "OnGrabActionChanged", null),
          (ce = (0, n.Cg)([s.PA], ce));
        let de = class extends q {
          constructor(e) {
            super(e),
              (this.defaultProperties = [
                {
                  property: "on/x",
                  default: 1,
                  type: "float",
                  variableName: "flOnX",
                  mode: "scalar_constant",
                },
                {
                  property: "off/x",
                  default: 0,
                  type: "float",
                  variableName: "flOffX",
                  mode: "scalar_constant",
                },
                {
                  property: "on/y",
                  default: 1,
                  type: "float",
                  variableName: "flOnY",
                  mode: "scalar_constant",
                },
                {
                  property: "off/y",
                  default: 0,
                  type: "float",
                  variableName: "flOffY",
                  mode: "scalar_constant",
                },
                {
                  property: "on/z",
                  default: 1,
                  type: "float",
                  variableName: "flOnZ",
                  mode: "scalar_constant",
                },
                {
                  property: "off/z",
                  default: 0,
                  type: "float",
                  variableName: "flOffZ",
                  mode: "scalar_constant",
                },
              ]),
              this.LoadDefaults(),
              this.BModeHasSettings.bind(this),
              (0, $.enableUniqueIds)(this);
          }
          OnValueActionChanged(e) {
            this.props.controllerWatcher.forEach((t) => {
              t.SetValueAction(this.props.iMode, e);
            });
          }
          BModeHasSettings() {
            return this.GetActionArity() >= 1;
          }
          renderNormalizedSliderValue(e) {
            return e.toFixed(1);
          }
          renderSettingsContent() {
            this.props.controllerWatcher[0];
            let e = "";
            this.hasOwnProperty("nextUniqueId") && (e = this.nextUniqueId());
            let t = this.GetActionArity();
            return i.createElement(
              "div",
              { className: "InputSettingsModal" },
              i.createElement(
                "div",
                { className: "ChordBindingHeader FlexColumn" },
                i.createElement(
                  "div",
                  { className: "FlexFullWidthRowCentered" },
                  i.createElement("img", {
                    className:
                      "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                    src: "images/bindingui/icon_modal_edit_header.svg",
                  }),
                  i.createElement(
                    "div",
                    { className: "Label Title TitleCenter AllCaps" },
                    (0, d.we)("#BindingSettingsModal_Title"),
                  ),
                ),
              ),
              i.createElement(
                "div",
                { className: "FlexColumn" },
                t >= 1 &&
                  i.createElement(Y, {
                    labelName: "#SourceInputMode_ScalarOffX",
                    elementId: e,
                    min: -1,
                    max: 1,
                    step: 0.1,
                    value: this.state.flOffX,
                    onReset: this.onPropertyReset.bind(this, "off/x"),
                    onChange: this.onPropertyChanged.bind(this, "off/x"),
                    renderValue: this.renderNormalizedSliderValue,
                  }),
                t >= 2 &&
                  i.createElement(Y, {
                    labelName: "#SourceInputMode_ScalarOffY",
                    elementId: e,
                    min: -1,
                    max: 1,
                    step: 0.1,
                    value: this.state.flOffY,
                    onReset: this.onPropertyReset.bind(this, "off/y"),
                    onChange: this.onPropertyChanged.bind(this, "off/y"),
                    renderValue: this.renderNormalizedSliderValue,
                  }),
                t >= 3 &&
                  i.createElement(Y, {
                    labelName: "#SourceInputMode_ScalarOffZ",
                    elementId: e,
                    min: -1,
                    max: 1,
                    step: 0.1,
                    value: this.state.flOffZ,
                    onReset: this.onPropertyReset.bind(this, "off/z"),
                    onChange: this.onPropertyChanged.bind(this, "off/z"),
                    renderValue: this.renderNormalizedSliderValue,
                  }),
              ),
              i.createElement(
                "div",
                {
                  className: "InputSettingsCloseButton Label AllCaps",
                  onClick: this.CloseModeSettings,
                },
                (0, d.we)("#Button_Close"),
              ),
            );
          }
          GetActionArity() {
            let e = this.props.controllerWatcher[0].GetValueAction(
              this.props.iMode,
            );
            if (!e) return 0;
            switch (e.type) {
              case "vector1":
                return 1;
              case "vector2":
                return 2;
              case "vector3":
                return 3;
              default:
                return 0;
            }
          }
          render() {
            let e = this.props.controllerWatcher[0],
              t = [];
            this.GetVector1DropDownItems(t, !1),
              this.GetVector2DropDownItems(t, !1),
              this.GetVector3DropDownItems(t, !1),
              this.AddNoneItems(t);
            let o = "";
            this.hasOwnProperty("nextUniqueId") && (o = this.nextUniqueId());
            let n = this.GetActionArity();
            return i.createElement(
              "div",
              { className: this.WrapperClasses },
              this.renderHeader(),
              i.createElement(j, {
                sLocalizedInputType: "#SourceInputMode_ScalarValue",
                SelectedAction: e.GetValueAction(this.props.iMode),
                vecOptions: t,
                fnOptionSelected: this.OnValueActionChanged,
                bReadOnly: !this.state.bEditMode,
              }),
              n >= 1 &&
                i.createElement(Y, {
                  labelName: "#SourceInputMode_ScalarOnX",
                  elementId: o,
                  min: -1,
                  max: 1,
                  step: 0.1,
                  value: this.state.flOnX,
                  onChange: this.onPropertyChanged.bind(this, "on/x"),
                  renderValue: this.renderNormalizedSliderValue,
                }),
              n >= 2 &&
                i.createElement(Y, {
                  labelName: "#SourceInputMode_ScalarOnY",
                  elementId: o,
                  min: -1,
                  max: 1,
                  step: 0.1,
                  value: this.state.flOnY,
                  onChange: this.onPropertyChanged.bind(this, "on/y"),
                  renderValue: this.renderNormalizedSliderValue,
                }),
              n >= 3 &&
                i.createElement(Y, {
                  labelName: "#SourceInputMode_ScalarOnZ",
                  elementId: o,
                  min: -1,
                  max: 1,
                  step: 0.1,
                  value: this.state.flOnZ,
                  onChange: this.onPropertyChanged.bind(this, "on/z"),
                  renderValue: this.renderNormalizedSliderValue,
                }),
              this.renderFooter(),
            );
          }
        };
        (0, n.Cg)([u.o], de.prototype, "OnValueActionChanged", null),
          (de = (0, n.Cg)([s.PA], de));
        let pe = class extends i.Component {
          constructor(e) {
            super(e), (this.state = { bInEditMode: !1 });
          }
          OnEdit(e) {
            this.setState({ bInEditMode: e });
          }
          componentWillMount() {
            this.setState({
              bInEditMode:
                this.props.controllerWatcher[0].BHasModeSelectionPending(
                  this.props.iMode,
                ),
            });
          }
          componentWillReceiveProps(e) {
            e.iMode != this.props.iMode &&
              this.setState({
                bInEditMode:
                  this.props.controllerWatcher[0].BHasModeSelectionPending(
                    e.iMode,
                  ),
              });
          }
          render() {
            let e = {
              controllerWatcher: this.props.controllerWatcher,
              iMode: this.props.iMode,
              sMode: this.props.sMode,
              ParentEdit: this.OnEdit,
              bReadOnly: this.props.bReadOnly,
              bStartInEditMode: this.state.bInEditMode,
              bShowModeOptionsDropDownOnStart:
                this.props.controllerWatcher[0].BHasModeSelectionPending(
                  this.props.iMode,
                ),
              bToggleButtonMode: "toggle_button" == this.props.sMode,
              sActionSet: p.B$.SelectedActionSet,
            };
            switch (this.props.sMode) {
              case "toggle_button":
                return i.createElement(K, Object.assign({}, e));
              case "trackpad":
              case "joystick":
                return i.createElement(ie, Object.assign({}, e));
              case "complex_button":
                return i.createElement(te, Object.assign({}, e));
              case "button":
                return i.createElement(ee, Object.assign({}, e));
              case "dpad":
              case "dpad_touch":
              case "dpad_click":
                return i.createElement(ne, Object.assign({}, e));
              case "scroll":
              case "trackpad_scroll":
                return i.createElement(le, Object.assign({}, e));
              case "trigger":
                return i.createElement(se, Object.assign({}, e));
              case "force_sensor":
                return i.createElement(re, Object.assign({}, e));
              case "grab":
                return i.createElement(ce, Object.assign({}, e));
              case "scalar_constant":
                return i.createElement(de, Object.assign({}, e));
              case "static_bool":
                return i.createElement(ae, Object.assign({}, e));
              default:
                return i.createElement(oe, Object.assign({}, e));
            }
          }
        };
        (0, n.Cg)([u.o], pe.prototype, "OnEdit", null),
          (pe = (0, n.Cg)([s.PA], pe));
        class he {
          constructor(e, t, o, n) {
            (this.x = e),
              (this.y = t),
              (this.width = o),
              (this.nPointScale = n),
              this.toString.bind(this);
          }
          toString() {
            return (
              this.x + "," + this.y + "," + this.width + "," + this.nPointScale
            );
          }
        }
        let ue = class extends i.Component {
          constructor() {
            super(...arguments),
              (this.m_HTMLButton = void 0),
              (this.m_SVGElement = void 0);
          }
          AddMode() {
            this.props.controllerWatcher.forEach((e) => {
              e.AddInputMode("none");
            });
          }
          componentWillUnmount() {
            this.props.controllerWatcher.forEach((e) => {
              e.cancelWatcher();
            });
          }
          BindButtonRef(e) {
            (this.m_HTMLButton = e), this.m_HTMLButton && this.UpdateSVGPath();
          }
          BindSVGRef(e) {
            (this.m_SVGElement = e), this.UpdateSVGPath();
          }
          UpdateSVGPath() {
            if (
              this.m_HTMLButton &&
              this.m_SVGElement &&
              this.props.ptControllerImagePosition
            ) {
              let e = this.m_SVGElement.children.namedItem("SourcePath"),
                t = this.m_SVGElement.children.namedItem("SourceLine"),
                o = this.m_SVGElement.children.namedItem("SourceCircle"),
                n = this.props.controllerWatcher[0],
                i = 2 == this.props.eControllerButtonSide,
                l = 0 == this.props.eControllerButtonSide,
                s = this.m_HTMLButton.getBoundingClientRect(),
                r = this.m_SVGElement.getBoundingClientRect(),
                a = n.GetSVGEndPoint();
              (a.x *= this.props.ptControllerImagePosition.nPointScale),
                (a.y *= this.props.ptControllerImagePosition.nPointScale),
                l ||
                  i ||
                  (a.x = this.props.ptControllerImagePosition.width - a.x),
                (a.x += this.props.ptControllerImagePosition.x - r.left),
                (a.y += this.props.ptControllerImagePosition.y - r.top);
              let c = new p.bR(0, s.top - r.top);
              c.x = i ? s.left - 10 : s.right + 10;
              let d = i ? -20 : 20,
                h = c.x + d + "," + c.y + " " + a.x + "," + a.y;
              e.setAttribute("points", h);
              let u = c.x + "," + c.y + " " + (c.x + d) + "," + c.y;
              t.setAttribute("points", u),
                o.setAttribute("cx", a.x + ""),
                o.setAttribute("cy", a.y + "");
            }
          }
          OnMouseEnter(e) {
            this.UpdateSVGPath(),
              this.m_SVGElement &&
                this.m_SVGElement.classList.add("MenuSVGVisible");
          }
          OnMouseLeave(e) {
            this.m_SVGElement &&
              this.m_SVGElement.classList.remove("MenuSVGVisible");
          }
          render() {
            let e = this.props.strSVGClass;
            e += " MenuSVG";
            let t = this.props.controllerWatcher[0],
              o = 0,
              n = t.GetModes.map(
                (e, t) => (
                  ++o,
                  i.createElement(pe, {
                    key: t,
                    sMode: e.mode,
                    iMode: t,
                    controllerWatcher: this.props.controllerWatcher,
                    bReadOnly: this.props.bReadOnly,
                  })
                ),
              );
            return i.createElement(
              "div",
              {
                className: "FlexColumn BindingInputSection",
                onMouseEnter: this.OnMouseEnter,
                onMouseLeave: this.OnMouseLeave,
              },
              i.createElement(
                "div",
                { className: "FlexRow" },
                i.createElement(
                  "div",
                  { className: "Label Title" },
                  t.GetControllerInputName,
                ),
                !this.props.bReadOnly &&
                  i.createElement(
                    "div",
                    {
                      className: "Label FlexRightAlignChild",
                      onClick: this.AddMode,
                    },
                    i.createElement("img", {
                      className: "ActionButtonImage",
                      src: "images/bindingui/icon_add.svg",
                    }),
                  ),
              ),
              i.createElement("hr", { ref: this.BindButtonRef }),
              o > 0 && i.createElement("div", { className: "FlexColumn" }, n),
              i.createElement(W.A, { onReflow: this.UpdateSVGPath }),
              i.createElement(
                "svg",
                {
                  className: e,
                  xmlns: "http://www.w3.org/2000/svg",
                  ref: this.BindSVGRef,
                },
                i.createElement(
                  "defs",
                  null,
                  i.createElement(
                    "radialGradient",
                    { id: "buttonGradient" },
                    i.createElement("stop", {
                      offset: "0%",
                      stopColor: "#ffffff",
                      stopOpacity: "0.8",
                    }),
                    i.createElement("stop", {
                      offset: "100%",
                      stopColor: "#ffffff",
                      stopOpacity: "0",
                    }),
                  ),
                ),
                i.createElement("polyline", {
                  id: "SourceLine",
                  stroke: "#ffffff",
                  strokeWidth: "0.1rem",
                  fill: "transparent",
                }),
                i.createElement("polyline", {
                  id: "SourcePath",
                  stroke: "#ffffff",
                  strokeWidth: "0.1rem",
                  fill: "transparent",
                }),
                i.createElement("circle", {
                  id: "SourceCircle",
                  r: "2rem",
                  fill: "url(#buttonGradient)",
                }),
              ),
            );
          }
        };
        (0, n.Cg)([u.o], ue.prototype, "AddMode", null),
          (0, n.Cg)([u.o], ue.prototype, "BindButtonRef", null),
          (0, n.Cg)([u.o], ue.prototype, "BindSVGRef", null),
          (0, n.Cg)([u.o], ue.prototype, "UpdateSVGPath", null),
          (0, n.Cg)([u.o], ue.prototype, "OnMouseEnter", null),
          (0, n.Cg)([u.o], ue.prototype, "OnMouseLeave", null),
          (ue = (0, n.Cg)([s.PA], ue));
        let me = class extends i.Component {
          render() {
            let e = p.B$.SelectedControllerTypeInfo;
            if (!e || !this.props.selectedActionSet) return null;
            p.B$.SelectedControllerTypeLocalizedName;
            let t = [];
            Object.keys(e.input_source).forEach((o) => {
              t.push({ name: o, order: e.input_source[o].order });
            }),
              t.sort((e, t) => e.order - t.order);
            let o = t.map((t, o) => {
              let n = e.input_source[t.name];
              if ("pose" == n.type || "vibration" == n.type) return null;
              if (
                "InputValueVisibility_SteamVRInternal" == n.visibility &&
                !p.B$.CurrentAppCanAccessPrivateInputs
              )
                return null;
              if (
                "InputValueVisibility_AvailableButHidden" == n.visibility &&
                !B.W.ShowHiddenInputs
              )
                return null;
              if (null != n.side)
                switch (n.side) {
                  case "left":
                    if (1 != this.props.eControllerButtonSide) return null;
                    break;
                  case "right":
                    if (2 != this.props.eControllerButtonSide) return null;
                }
              let l = [];
              return (
                l.push(
                  p.B$.GetControllerWatcherForSourceFromControllerType(
                    e,
                    this.props.eControllerButtonSide,
                    t.name,
                    this.props.selectedActionSet.name,
                  ),
                ),
                this.props.eControllerButtonOtherSide &&
                  0 != this.props.eControllerButtonOtherSide.valueOf() &&
                  l.push(
                    p.B$.GetControllerWatcherForSourceFromControllerType(
                      e,
                      this.props.eControllerButtonOtherSide,
                      t.name,
                      this.props.selectedActionSet.name,
                    ),
                  ),
                i.createElement(ue, {
                  key: o,
                  controllerWatcher: l,
                  strSVGClass: this.props.strSVGClass,
                  bReadOnly: this.props.bReadOnly,
                  eControllerButtonSide: this.props.eControllerButtonSide,
                  ptControllerImagePosition:
                    this.props.ptControllerImagePosition,
                })
              );
            });
            return i.createElement("div", null, o);
          }
        };
        me = (0, n.Cg)([s.PA], me);
        let ge = class extends i.Component {
          constructor(e) {
            super(e),
              (this.m_LeftControllerImage = void 0),
              (this.m_RightControllerImage = void 0),
              this.props.bSingleMode
                ? (this.state = {
                    bMirrorBinding: !0,
                    ptLeftController: new he(0, 0, 0, 0),
                    ptRightController: new he(0, 0, 0, 0),
                  })
                : this.props.selectedActionSet &&
                    "single" != this.props.selectedActionSet.usage
                  ? ((this.state = {
                      bMirrorBinding: !1,
                      ptLeftController: new he(0, 0, 0, 0),
                      ptRightController: new he(0, 0, 0, 0),
                    }),
                    this.props.fnSetMirroredMode(!1))
                  : this.props.selectedActionSet &&
                    ((this.state = {
                      bMirrorBinding: !0,
                      ptLeftController: new he(0, 0, 0, 0),
                      ptRightController: new he(0, 0, 0, 0),
                    }),
                    this.props.fnSetMirroredMode(!0));
          }
          componentWillReceiveProps(e) {
            let t = !1,
              o = e.selectedActionSet;
            if (
              o &&
              (!this.props.selectedActionSet ||
                o.name != this.props.selectedActionSet.name)
            ) {
              if ("single" == o.usage) {
                (t = !0),
                  Object.keys(
                    p.B$.SelectedControllerTypeInfo.input_source,
                  ).forEach((e) => {
                    let n =
                        p.B$.GetControllerWatcherForSourceFromControllerType(
                          p.B$.SelectedControllerTypeInfo,
                          1,
                          e,
                          o.name,
                        ),
                      i = p.B$.GetControllerWatcherForSourceFromControllerType(
                        p.B$.SelectedControllerTypeInfo,
                        2,
                        e,
                        o.name,
                      );
                    t = t && i.BindingsMatch(n);
                  });
              }
              this.setState({ bMirrorBinding: t }),
                this.props.fnSetMirroredMode(t);
            }
          }
          ToggleMirrorMode(e) {
            if ("single" == this.props.selectedActionSet.usage) {
              let t = this.state.bMirrorBinding;
              if (
                (this.setState({ bMirrorBinding: e }),
                this.props.fnSetMirroredMode(!this.state.bMirrorBinding),
                !t)
              ) {
                Object.keys(
                  p.B$.SelectedControllerTypeInfo.input_source,
                ).forEach((e) => {
                  let t = p.B$.GetControllerWatcherForSourceFromControllerType(
                    p.B$.SelectedControllerTypeInfo,
                    1,
                    e,
                    this.props.selectedActionSet.name,
                  );
                  p.B$.GetControllerWatcherForSourceFromControllerType(
                    p.B$.SelectedControllerTypeInfo,
                    2,
                    e,
                    this.props.selectedActionSet.name,
                  ).CopyActions(t);
                });
              }
            }
          }
          UpdatePositionHelper(e) {
            let t = 1,
              o = 0,
              n = 0,
              i = 0;
            if (e) {
              let l = e.getBoundingClientRect();
              if (((i = l.width), e.naturalWidth > 0))
                return (
                  (t = l.height / e.naturalHeight),
                  (n = l.left),
                  (o = l.top),
                  new he(n, o, i, t)
                );
            }
          }
          OnUpdateControllerPicturePosition() {
            this.setState({
              ptLeftController: this.UpdatePositionHelper(
                this.m_LeftControllerImage,
              ),
            }),
              this.setState({
                ptRightController: this.UpdatePositionHelper(
                  this.m_RightControllerImage,
                ),
              });
          }
          BindLeftControllerImage(e) {
            (this.m_LeftControllerImage = e),
              this.setState({ ptLeftController: this.UpdatePositionHelper(e) });
          }
          BindRightControllerImage(e) {
            (this.m_RightControllerImage = e),
              this.setState({
                ptRightController: this.UpdatePositionHelper(e),
              });
          }
          render() {
            let e = p.B$.SelectedControllerTypeInfo;
            if (!e) return null;
            let t = "",
              o = "";
            this.props.bSingleMode ||
              ((t = e.input_bindingui_left.transform
                ? e.input_bindingui_left.transform
                : ""),
              (o = e.input_bindingui_left.uri
                ? e.input_bindingui_left.uri
                : ""));
            let n = e.input_bindingui_right.transform
                ? e.input_bindingui_right.transform
                : "",
              l = e.input_bindingui_right.uri
                ? e.input_bindingui_right.uri
                : "",
              s = "",
              r = this.props.selectedActionSet,
              a = !1,
              c = 0;
            if (!this.props.bSingleMode) {
              if (null == r)
                return (
                  console.warn(
                    "ControllerBindingHandedControllers::render - Got undefined actionSet.",
                  ),
                  null
                );
              "single" == r.usage &&
                ((s = this.state.bMirrorBinding ? "Mirrored" : ""),
                (a = !this.props.bReadOnly),
                this.state.bMirrorBinding && (c = 2));
            }
            let h = p.B$.SelectedControllerTypeLocalizedName,
              u = (0, d.we)("#BindingUI_LeftHandController", h),
              g = (0, d.we)("#BindingUI_RightHandController", h),
              S =
                (this.props.bReadOnly,
                !this.props.bReadOnly ||
                  (p.B$.SelectedActionSetChords &&
                    p.B$.SelectedActionSetChords.length > 0));
            const _ = p.B$.GetSimulatedControllerProperties();
            return i.createElement(
              "div",
              {
                className:
                  "BindingSectionWrapper " +
                  (this.props.bSingleMode
                    ? " BindingButtonRowSingleDevice"
                    : ""),
              },
              i.createElement(
                "div",
                { className: "BindingControllerImageColumns FlexColumn" },
                i.createElement(
                  "div",
                  { className: "FlexRow" },
                  !this.props.bSingleMode &&
                    i.createElement(
                      "div",
                      { className: "FlexColumn ControllerImageColumn" },
                      i.createElement("img", {
                        className: "ControllerImage ControllerImageLeft",
                        src: o,
                        style: { transform: t },
                        ref: this.BindLeftControllerImage,
                        onLoad: this.OnUpdateControllerPicturePosition,
                      }),
                      i.createElement(W.A, {
                        onReflow: this.OnUpdateControllerPicturePosition,
                      }),
                    ),
                  i.createElement(
                    "div",
                    { className: s + " ControllerImageColumn FlexColumn" },
                    i.createElement("img", {
                      className: "ControllerImage ControllerImageRight",
                      src: l,
                      style: { transform: n },
                      ref: this.BindRightControllerImage,
                      onLoad: this.OnUpdateControllerPicturePosition,
                    }),
                    i.createElement(W.A, {
                      onReflow: this.OnUpdateControllerPicturePosition,
                    }),
                  ),
                ),
                i.createElement(
                  "div",
                  {
                    className:
                      "FlexColumnCentered ControllerImageColumnButtons",
                  },
                  i.createElement(
                    "div",
                    { className: "FlexFullWidthRowCentered" },
                    S &&
                      i.createElement(
                        m.Ay,
                        {
                          content: (0, d.we)("#BindingUI_ChordsButton_tooltip"),
                          theme: "ControllerBindingToolTip",
                        },
                        i.createElement(
                          "div",
                          {
                            className:
                              "Label TitleCenter ToggleMirror ButtonControl",
                            onClick: this.props.fnOpenChordBindingsModal,
                          },
                          (0, d.we)("#BindingUI_ChordsButton"),
                        ),
                      ),
                    p.B$.BSelectedActionSetHasPoses &&
                      i.createElement(
                        m.Ay,
                        {
                          content: (0, d.we)("#BindingUI_PosesButton_tooltip"),
                          theme: "ControllerBindingToolTip",
                        },
                        i.createElement(
                          "div",
                          {
                            className:
                              "Label TitleCenter ToggleMirror ButtonControl",
                            onClick: this.props.fnOpenPoseBindingsModal,
                          },
                          (0, d.we)("#BindingUI_PosesButton"),
                        ),
                      ),
                    p.B$.BSelectedActionSetHasHaptics &&
                      i.createElement(
                        m.Ay,
                        {
                          content: (0, d.we)(
                            "#BindingUI_HapticsButton_tooltip",
                          ),
                          theme: "ControllerBindingToolTip",
                        },
                        i.createElement(
                          "div",
                          {
                            className:
                              "Label TitleCenter ToggleMirror ButtonControl",
                            onClick: this.props.fnOpenHapticsBindingsModal,
                          },
                          (0, d.we)("#BindingUI_HapticsButton"),
                        ),
                      ),
                    p.B$.BSelectedActionSetHasSkeletons &&
                      i.createElement(
                        m.Ay,
                        {
                          content: (0, d.we)(
                            "#BindingUI_SkeletonButton_tooltip",
                          ),
                          theme: "ControllerBindingToolTip",
                        },
                        i.createElement(
                          "div",
                          {
                            className:
                              "Label TitleCenter ToggleMirror ButtonControl",
                            onClick: this.props.fnOpenSkeletonBindingsModal,
                          },
                          (0, d.we)("#BindingUI_SkeletonButton"),
                        ),
                      ),
                  ),
                  a &&
                    i.createElement(
                      "div",
                      null,
                      i.createElement("input", {
                        type: "checkbox",
                        checked: this.state.bMirrorBinding,
                        onChange: (e) => {
                          this.ToggleMirrorMode(e.target.checked);
                        },
                      }),
                      i.createElement(
                        "div",
                        { className: "Label" },
                        (0, d.we)("#BindingUI_MirrorMode"),
                      ),
                    ),
                ),
                _.bIsSimulatingController &&
                  i.createElement(
                    "div",
                    {
                      className:
                        "FlexFullWidthRowCentered SimulatedControllerInfoSection",
                    },
                    i.createElement(
                      "p",
                      null,
                      i.createElement(
                        "b",
                        null,
                        (0, d.we)("#BindingUI_CompatibilityModeInfo"),
                      ),
                      ": ",
                      (0, d.we)("#BindingUI_CompatibilityModeAppearingAsInfo"),
                      " ",
                      i.createElement(
                        "u",
                        null,
                        _.strLocalizedSimulatedControllerType,
                      ),
                    ),
                    i.createElement(
                      m.Ay,
                      {
                        content: (0, d.we)(
                          "#BindingUI_SimulatingControllerInfo_tooltip",
                        ),
                        theme: "ControllerBindingToolTip",
                      },
                      i.createElement(
                        "span",
                        { className: "SimulatedControllerInfoHelp" },
                        "?",
                      ),
                    ),
                  ),
              ),
              this.props.bSingleMode &&
                i.createElement(
                  "div",
                  { className: "BindingSection FlexRow" },
                  i.createElement(
                    "div",
                    { className: "BindingButtonRow FlexColumn" },
                    i.createElement(me, {
                      eControllerButtonSide: 0,
                      strSVGClass: "Left",
                      bReadOnly: this.props.bReadOnly,
                      selectedActionSet: p.B$.SelectedActionSetDetails,
                      ptControllerImagePosition: this.state.ptRightController,
                    }),
                  ),
                ),
              !this.props.bSingleMode &&
                i.createElement(
                  "div",
                  { className: "BindingSection FlexRow" },
                  i.createElement(
                    "div",
                    { className: "BindingButtonRow FlexColumn" },
                    i.createElement(
                      "div",
                      { className: "Label Title ControllerTitle" },
                      u,
                    ),
                    i.createElement(me, {
                      eControllerButtonSide: 1,
                      strSVGClass: "MenuLeftLine",
                      bReadOnly: this.props.bReadOnly,
                      eControllerButtonOtherSide: c,
                      selectedActionSet: this.props.selectedActionSet,
                      ptControllerImagePosition: this.state.ptLeftController,
                    }),
                  ),
                  i.createElement(
                    "div",
                    { className: "BindingButtonRow FlexColumn " + s },
                    i.createElement(
                      "div",
                      { className: "Label Title ControllerTitle" },
                      g,
                    ),
                    i.createElement(me, {
                      eControllerButtonSide: 2,
                      strSVGClass: "MenuRightLine",
                      bReadOnly:
                        this.props.bReadOnly || this.state.bMirrorBinding,
                      selectedActionSet: this.props.selectedActionSet,
                      ptControllerImagePosition: this.state.ptRightController,
                    }),
                  ),
                ),
            );
          }
        };
        (0, n.Cg)([u.o], ge.prototype, "ToggleMirrorMode", null),
          (0, n.Cg)([u.o], ge.prototype, "UpdatePositionHelper", null),
          (0, n.Cg)(
            [u.o],
            ge.prototype,
            "OnUpdateControllerPicturePosition",
            null,
          ),
          (0, n.Cg)([u.o], ge.prototype, "BindLeftControllerImage", null),
          (0, n.Cg)([u.o], ge.prototype, "BindRightControllerImage", null),
          (ge = (0, n.Cg)([s.PA], ge));
        let Se = class extends i.Component {
          constructor(e) {
            var t;
            super(e),
              (this.onAxisChanged = (e) => (t) => {
                let o = t.currentTarget.valueAsNumber;
                Number.isNaN(o) && (o = 0);
                const n = Math.min(Math.max(o, this.props.min), this.props.max);
                this.setState(
                  (t) => {
                    const o = [...t.vec];
                    return (o[e] = n), { vec: o };
                  },
                  () => this.props.onChange(this.state.vec, this.props.name),
                );
              }),
              (this.modifyAxis = (e, t) => {
                this.setState(
                  (o) => {
                    const n = [...o.vec],
                      i = this.props.step,
                      l = "up" === t ? i : -i,
                      s = n[e] + l;
                    return (
                      (n[e] = Math.min(
                        Math.max(s, this.props.min),
                        this.props.max,
                      )),
                      { vec: n }
                    );
                  },
                  () => this.props.onChange(this.state.vec, this.props.name),
                );
              }),
              (this.onReset = () => {
                this.setState({ vec: [0, 0, 0] }, () =>
                  this.props.onChange(this.state.vec, this.props.name),
                );
              });
            let o = ["X", "Y", "Z"];
            if (Array.isArray(e.axisNames))
              for (const [t, n] of e.axisNames.entries())
                n &&
                  (n && n.startsWith("#") ? (o[t] = (0, d.we)(n)) : (o[t] = n));
            this.state = {
              vec:
                null !== (t = this.props.vector) && void 0 !== t
                  ? t
                  : [0, 0, 0],
              axisNames: o,
            };
          }
          componentDidUpdate(e) {
            e.vector !== this.props.vector &&
              null != this.props.vector &&
              this.setState({ vec: this.props.vector });
          }
          render() {
            const {
                labelName: e,
                elementId: t,
                renderValue: o,
                min: n,
                max: l,
                step: s,
              } = this.props,
              [r, a, c] = this.state.vec;
            return i.createElement(
              "div",
              { className: "FlexRow InputSettingsRow" },
              i.createElement(
                m.Ay,
                {
                  content: (0, d.we)(e + "_tooltip"),
                  theme: "ControllerBindingToolTip",
                },
                i.createElement(
                  "label",
                  {
                    className: "InputSettingsLabel InputSettingsPoseLabel",
                    htmlFor: t,
                  },
                  (0, d.we)(e),
                ),
              ),
              i.createElement(
                "div",
                { className: "FlexColumn InputSettingsVector3Container" },
                [r, a, c].map((e, r) => {
                  const a = r;
                  return i.createElement(
                    "div",
                    { className: "FlexRow InputSettingsVector3Row", key: a },
                    i.createElement(
                      "span",
                      { className: "InputSettingsVector3Label" },
                      this.state.axisNames[a],
                    ),
                    i.createElement(
                      "div",
                      { className: "InputSettingsPoseNumber" },
                      i.createElement("input", {
                        id: `${t}_text_${a}`,
                        className: "InputSettingsVector3",
                        type: "number",
                        value: o(e),
                        onChange: this.onAxisChanged(a),
                        min: n,
                        max: l,
                        step: s,
                      }),
                      i.createElement(
                        "div",
                        { className: "InputSettingsPoseNumberArrows" },
                        i.createElement(
                          "button",
                          {
                            type: "button",
                            onClick: () => this.modifyAxis(a, "up"),
                          },
                          "▲",
                        ),
                        i.createElement(
                          "button",
                          {
                            type: "button",
                            onClick: () => this.modifyAxis(a, "down"),
                          },
                          "▼",
                        ),
                      ),
                    ),
                  );
                }),
              ),
              i.createElement(
                "div",
                {
                  className: "InputSettingsResetButton",
                  onClick: this.onReset,
                },
                (0, d.we)("#SourceInputMode_ResetParameterToDefault"),
              ),
            );
          }
        };
        var _e;
        (Se = (0, n.Cg)([s.PA], Se)),
          (function (e) {
            (e[(e.None = 0)] = "None"),
              (e[(e.Pose = 1)] = "Pose"),
              (e[(e.Haptics = 2)] = "Haptics"),
              (e[(e.Skeleton = 3)] = "Skeleton");
          })(_e || (_e = {}));
        let Ce = class extends i.Component {
          constructor(e) {
            super(e);
            const {
              vecExistingPositionOffset: t,
              vecExistingRotationOffset: o,
            } = this.setupCurrentAction();
            (this.state = {
              SVGElement: void 0,
              WrapperHTMLElement: void 0,
              bSettingsVisible: !1,
              vecPositionOffset: t,
              vecRotationOffset: o,
            }),
              (this.currentAction = void 0);
          }
          componentDidUpdate() {
            this.UpdateSVGPath();
          }
          BindSVGRef(e) {
            this.setState({ SVGElement: e }), this.UpdateSVGPath();
          }
          BindWrapperElement(e) {
            this.setState({ WrapperHTMLElement: e }), this.UpdateSVGPath();
          }
          UpdateSVGPath() {
            if (this.state.SVGElement) {
              let e = this.state.SVGElement.children.namedItem("SourcePath"),
                t = this.state.SVGElement.children.namedItem("SourceLine"),
                o = this.state.SVGElement.children.namedItem("SourceCircle"),
                n = Object.assign({}, this.props.endPoint),
                i = Object.assign({}, this.props.startPoint);
              if (this.state.WrapperHTMLElement) {
                let e = this.state.WrapperHTMLElement.getBoundingClientRect(),
                  t =
                    this.state.WrapperHTMLElement.parentElement.parentElement.parentElement.getBoundingClientRect();
                i.y += e.top - t.top + e.height / 2;
              }
              let l = 20,
                s = i.x + l + "," + i.y + " " + n.x + "," + n.y;
              e.setAttribute("points", s);
              let r = i.x + "," + i.y + " " + (i.x + l) + "," + i.y;
              t.setAttribute("points", r),
                o.setAttribute("cx", n.x + ""),
                o.setAttribute("cy", n.y + "");
            }
          }
          OnActionChanged(e) {
            switch (this.props.type) {
              case "pose":
                return this.OnPoseActionChanged(e);
              case "vibration":
                return this.OnHapticsActionChanged(e);
              case "skeleton":
                return this.OnSkeletonActionChanged(e);
              default:
                console.log("Unknown type: ", this.props.type);
            }
          }
          FullInputPaths() {
            return this.props.vecDevicePathsToSet.map(
              (e) => e + this.props.sInputPath,
            );
          }
          CurrentAction() {
            return this.currentAction;
          }
          OnShowSettings() {
            this.setState({ bSettingsVisible: !0 });
            this.state.WrapperHTMLElement.parentElement.style.overflow =
              "hidden";
          }
          CloseSettings() {
            this.setState({ bSettingsVisible: !1 });
            this.state.WrapperHTMLElement.parentElement.style.overflow = "auto";
          }
          BHasSettings() {
            return !1;
          }
          OnPoseActionChanged(e) {
            this.FullInputPaths().forEach((t) => {
              p.B$.SetPoseForInputPath(t, e);
            });
          }
          OnHapticsActionChanged(e) {
            this.FullInputPaths().forEach((t) => {
              p.B$.SetHapticsForInputPath(t, e);
            });
          }
          OnSkeletonActionChanged(e) {
            this.FullInputPaths().forEach((t) => {
              p.B$.SetSkeletonForInputPath(t, e);
            });
          }
          OnPositionOffsetChanged(e) {
            this.setState({ vecPositionOffset: e }),
              "pose" == this.props.type
                ? this.FullInputPaths().forEach((t) => {
                    const o = p.B$.GetPoseForInputPath(t);
                    p.B$.SetParameterForPose(o, "offset_position", e);
                  })
                : "skeleton" == this.props.type &&
                  this.FullInputPaths().forEach((t) => {
                    const o = p.B$.GetSkeletonForInputPath(t);
                    p.B$.SetParameterForSkeleton(o, "offset_position", e);
                  });
          }
          OnRotationOffsetChanged(e) {
            this.setState({ vecRotationOffset: e }),
              "pose" == this.props.type
                ? this.FullInputPaths().forEach((t) => {
                    const o = p.B$.GetPoseForInputPath(t);
                    p.B$.SetParameterForPose(o, "offset_rotation", e);
                  })
                : "skeleton" == this.props.type &&
                  this.FullInputPaths().forEach((t) => {
                    const o = p.B$.GetSkeletonForInputPath(t);
                    p.B$.SetParameterForSkeleton(o, "offset_rotation", e);
                  });
          }
          renderSettingsModal() {
            return i.createElement(
              r.A,
              {
                visible: this.state.bSettingsVisible,
                customStyles: {
                  width: "80%",
                  maxWidth: "40em",
                  height: "fit-content",
                  maxHeight: "90%",
                  display: "flex",
                  padding: "0px",
                },
                onClose: this.CloseSettings,
                showCloseButton: !1,
                animation: "fade",
                className: "ModeSettingsModal",
                closeOnEsc: !0,
              },
              this.state.bSettingsVisible && this.renderSettingsContent(),
            );
          }
          renderSettingsContent() {
            let e = "";
            return (
              this.hasOwnProperty("nextUniqueId") && (e = this.nextUniqueId()),
              i.createElement(
                "div",
                { className: "InputSettingsModal" },
                i.createElement(
                  "div",
                  { className: "ChordBindingHeader FlexColumn" },
                  i.createElement(
                    "div",
                    { className: "FlexFullWidthRowCentered" },
                    i.createElement("img", {
                      className:
                        "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                      src: "images/bindingui/icon_modal_edit_header.svg",
                    }),
                    i.createElement(
                      "div",
                      { className: "Label Title TitleCenter AllCaps" },
                      (0, d.we)("#BindingSettingsModal_Title"),
                    ),
                  ),
                ),
                i.createElement(
                  "div",
                  { className: "FlexColumn" },
                  i.createElement(Se, {
                    labelName: "#SourceInputMode_PositionOffset",
                    elementId: e,
                    vector: this.state.vecPositionOffset,
                    onChange: this.OnPositionOffsetChanged,
                    renderValue: (e) => e.toFixed(2),
                    min: -0.3,
                    max: 0.3,
                    step: 0.01,
                    axisNames: ["#X", "#Y", "#Z"],
                  }),
                ),
                i.createElement(
                  "div",
                  { className: "FlexColumn" },
                  i.createElement(Se, {
                    labelName: "#SourceInputMode_RotationOffset",
                    elementId: e,
                    vector: this.state.vecRotationOffset,
                    onChange: this.OnRotationOffsetChanged,
                    renderValue: (e) => e.toFixed(2),
                    min: -180,
                    max: 180,
                    step: 5,
                    axisNames: ["#Pitch", "#Yaw", "#Roll"],
                  }),
                ),
                i.createElement(
                  "div",
                  {
                    className: "InputSettingsCloseButton Label AllCaps",
                    onClick: this.CloseSettings,
                  },
                  (0, d.we)("#Button_Close"),
                ),
              )
            );
          }
          setupCurrentAction() {
            let e,
              t,
              o,
              n,
              i = "",
              l = (0, d.we)("#SourceInputMode_none"),
              s = this.FullInputPaths()[0],
              r = p.B$.LocalizePathNameForSelectedControllerType(s);
            switch (this.props.type) {
              case "pose":
                (e = p.B$.GetPoseActionByPath(s)),
                  (t = "#SourceInputSubHeader_PoseActions");
                break;
              case "skeleton":
                (e = p.B$.GetSkeletonActionByPath(s)),
                  (t = "#SourceInputSubHeader_SkeletonActions");
                break;
              case "vibration":
                (e = p.B$.GetHapticsActionByPath(s)),
                  (t = "#SourceInputSubHeader_HapticsActions");
                break;
              default:
                console.log(
                  "ControllerPoseBindingItem doesn't know how to handle items of type:",
                  this.props.type,
                );
            }
            let a = p.B$.SelectedActionSetActions.filter(
              (e) =>
                !!(
                  "skeleton" != this.props.type ||
                  ("skeleton" == e.type &&
                    e.skeleton &&
                    this.props.InputSource.skeleton &&
                    e.skeleton.toLowerCase() ==
                      this.props.InputSource.skeleton.toLowerCase())
                ) && e.type == this.props.type,
            ).map((t, s) => {
              let r;
              return (
                e &&
                  e[0].output.toLowerCase() == t.name.toLowerCase() &&
                  ((this.currentAction = t),
                  (i = t.name),
                  (l = t.localized_name),
                  (o = p.B$.GetParameterForPose(e[0], "offset_position")),
                  (n = p.B$.GetParameterForPose(e[0], "offset_rotation"))),
                "mandatory" == t.requirement &&
                  (r =
                    " (" + (0, d.we)("#BindingUI_SelectAction_Required") + ")"),
                new g(t.name, t.localized_name, r)
              );
            });
            return {
              poses: e,
              poseOptions: a,
              sourceNameString: r,
              sCurrentPose: i,
              sCurrentPoseLocalized: l,
              sHeaderName: t,
              sFullPath: s,
              vecExistingPositionOffset: o,
              vecExistingRotationOffset: n,
            };
          }
          render() {
            const {
              poses: e,
              poseOptions: t,
              sourceNameString: o,
              sCurrentPose: n,
              sCurrentPoseLocalized: l,
              sHeaderName: s,
            } = this.setupCurrentAction();
            (null != t && 0 != t.length) ||
              t.push(
                new g("-nonitem", (0, d.we)("#SourceInputAction_NoItems")),
              ),
              t.unshift(new g("-subHeader", (0, d.we)(s))),
              t.push(new g("-blank", "")),
              t.push(new g("none", (0, d.we)("#SourceInputMode_none")));
            const r =
              (null == e ? void 0 : e.length) > 0 && "pose" == this.props.type;
            return i.createElement(
              "div",
              {
                className: "PoseActionListEntryWrapper",
                ref: this.BindWrapperElement,
              },
              i.createElement(
                "div",
                { className: "FlexRow PoseActionListEntry" },
                i.createElement(
                  "div",
                  { className: "Label PoseActionLabel" },
                  o,
                ),
                i.createElement(
                  "div",
                  { className: "FlexRow" },
                  i.createElement(S, {
                    vecOptions: t,
                    sValueSelectedItem: n,
                    sHeaderClass: "PoseActionLabelDropdown",
                    bReadOnly: !1,
                    sLocalizedSelectedItem: l,
                    fnOptionSelected: this.OnActionChanged,
                  }),
                  r &&
                    i.createElement("img", {
                      className:
                        "ActionButtonImage FlexRightAlignChild PoseActionSettingsButton",
                      src: "images/bindingui/icon_settings.svg",
                      onClick: this.OnShowSettings,
                    }),
                  i.createElement(W.A, { onReflow: this.UpdateSVGPath }),
                ),
              ),
              r && this.renderSettingsModal(),
              null != this.CurrentAction() &&
                this.props.endPoint.x > 0 &&
                this.props.endPoint.y > 0 &&
                i.createElement(
                  "svg",
                  {
                    className: "BindingPoseLineSVG",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: this.BindSVGRef,
                  },
                  i.createElement(
                    "defs",
                    null,
                    i.createElement(
                      "radialGradient",
                      { id: "buttonGradient" },
                      i.createElement("stop", {
                        offset: "0%",
                        stopColor: "var(--bordercolor)",
                        stopOpacity: "0.8",
                      }),
                      i.createElement("stop", {
                        offset: "100%",
                        stopColor: "var(--bordercolor)",
                        stopOpacity: "0",
                      }),
                    ),
                  ),
                  i.createElement("polyline", {
                    id: "SourceLine",
                    stroke: "var(--bordercolor)",
                    strokeWidth: "0.1rem",
                    fill: "transparent",
                  }),
                  i.createElement("polyline", {
                    id: "SourcePath",
                    stroke: "var(--bordercolor)",
                    strokeWidth: "0.1rem",
                    fill: "transparent",
                  }),
                  i.createElement("circle", {
                    id: "SourceCircle",
                    r: "2rem",
                    fill: "url(#buttonGradient)",
                  }),
                ),
              this.props.bIncludeHR && i.createElement("hr", null),
            );
          }
        };
        (0, n.Cg)([u.o], Ce.prototype, "BindSVGRef", null),
          (0, n.Cg)([u.o], Ce.prototype, "BindWrapperElement", null),
          (0, n.Cg)([u.o], Ce.prototype, "UpdateSVGPath", null),
          (0, n.Cg)([u.o], Ce.prototype, "OnActionChanged", null),
          (0, n.Cg)([u.o], Ce.prototype, "OnShowSettings", null),
          (0, n.Cg)([u.o], Ce.prototype, "CloseSettings", null),
          (0, n.Cg)([u.o], Ce.prototype, "OnPoseActionChanged", null),
          (0, n.Cg)([u.o], Ce.prototype, "OnHapticsActionChanged", null),
          (0, n.Cg)([u.o], Ce.prototype, "OnSkeletonActionChanged", null),
          (0, n.Cg)([u.o], Ce.prototype, "OnPositionOffsetChanged", null),
          (0, n.Cg)([u.o], Ce.prototype, "OnRotationOffsetChanged", null),
          (Ce = (0, n.Cg)([s.PA], Ce));
        let ye = class extends i.Component {
          render() {
            let e;
            switch (this.props.eActionType) {
              case _e.Pose:
                e = "pose";
                break;
              case _e.Haptics:
                e = "vibration";
                break;
              case _e.Skeleton:
                e = "skeleton";
            }
            let t = p.B$.SelectedActionSetActions.filter((t) => t.type == e);
            if (0 == t.length) return null;
            let o = p.B$.SelectedControllerTypeInfo,
              n = p.B$.SelectedControllerTypeInfo.input_source,
              l = [];
            if (
              "controller_handed" ==
              p.B$.SelectedControllerTypeInfo.input_bindingui_mode
            )
              l = ["/user/hand/left", "/user/hand/right"];
            else {
              let e = p.B$.DeviceForControllerType(o.controller_type);
              e &&
                (e.root_path && l.push(e.root_path),
                e.root_path_alt && l.push(e.root_path_alt));
            }
            if (0 == l.length)
              return console.log("Missing base root path for controller"), null;
            p.B$.GetPoseActionBindings;
            let s,
              r = [],
              a = 0;
            for (let o in n) {
              let s = n[o];
              for (let c of l) {
                if (s.type != e) continue;
                let d = "none";
                if (
                  ("/user/hand/right" == c
                    ? (d = "right")
                    : "/user/hand/left" == c && (d = "left"),
                  s.side && s.side != d)
                )
                  continue;
                let h = c + o,
                  u = "left" == d,
                  m = u
                    ? this.props.ptLeftController.x
                    : this.props.ptRightController.x,
                  g = u
                    ? this.props.ptLeftController.y
                    : this.props.ptRightController.y,
                  S = new p.bR(0, 0);
                if (
                  (n.hasOwnProperty(o) &&
                    ((S.x = s.binding_image_point[0]),
                    (S.y = s.binding_image_point[1]),
                    (S.x *= this.props.nPointScale),
                    (S.y *= this.props.nPointScale)),
                  u ? (S.x = m - S.x) : (S.x += m),
                  (S.y += g),
                  u && this.props.bSlaveSecondaryControllerBinding)
                )
                  continue;
                let _ = new p.bR(this.props.ptPoseListOffset.x + 5, 0),
                  C = (a++, t.length, [c]);
                this.props.bSlaveSecondaryControllerBinding && (C = l),
                  r.push(
                    i.createElement(Ce, {
                      key: h,
                      InputSource: s,
                      sInputPath: o,
                      type: e,
                      vecDevicePathsToSet: C,
                      startPoint: _,
                      endPoint: S,
                    }),
                  );
              }
            }
            switch (this.props.eActionType) {
              case _e.Pose:
                s = (0, d.we)("#BindingUI_PoseListTitle");
                break;
              case _e.Haptics:
                s = (0, d.we)("#BindingUI_HapticsListTitle");
                break;
              case _e.Skeleton:
                s = (0, d.we)("#BindingUI_SkeletonListTitle");
            }
            return i.createElement(
              "div",
              { className: "FlexColumn" },
              i.createElement("div", { className: "Label Title AllCaps" }, s),
              r,
            );
          }
        };
        ye = (0, n.Cg)([s.PA], ye);
        let fe = class extends i.Component {
          render() {
            let e = p.B$.SelectedControllerTypeInfo.input_source,
              t = new p.bR(
                e[this.props.vecPosePath[0]].binding_image_point[0],
                e[this.props.vecPosePath[0]].binding_image_point[1],
              );
            (t.x *= this.props.nPointScale),
              (t.y *= this.props.nPointScale),
              this.props.bLeftHandController
                ? (t.x = this.props.ptController.x - t.x)
                : (t.x += this.props.ptController.x),
              (t.y += this.props.ptController.y);
            let o = "";
            this.props.vecPosePath.forEach((e, t) => {
              0 != t && (o += ","),
                (o += p.B$.LocalizeStringForSelectedControllerType(e));
            });
            let n = this.props.bLeftHandController ? "start" : "end",
              l = this.props.bLeftHandController ? 6 : -6;
            return i.createElement(
              "svg",
              {
                className: "BindingPosePointSVG ",
                xmlns: "http://www.w3.org/2000/svg",
              },
              i.createElement(
                "defs",
                null,
                i.createElement(
                  "radialGradient",
                  { id: "buttonGradient" },
                  i.createElement("stop", {
                    offset: "0%",
                    stopColor: "var(--bordercolor)",
                    stopOpacity: "1",
                  }),
                  i.createElement("stop", {
                    offset: "100%",
                    stopColor: "var(--bordercolor)",
                    stopOpacity: "0",
                  }),
                ),
                i.createElement(
                  "filter",
                  {
                    id: "background",
                    x: "-10%",
                    y: "-10%",
                    width: "120%",
                    height: "120%",
                  },
                  i.createElement("feFlood", { floodColor: "#1d4e62e0" }),
                  i.createElement("feComposite", { in: "SourceGraphic" }),
                ),
                i.createElement(
                  "filter",
                  {
                    id: "shadow",
                    x: "-20%",
                    y: "-20%",
                    width: "140%",
                    height: "140%",
                  },
                  i.createElement("feGaussianBlur", {
                    stdDeviation: "2 2",
                    result: "shadow",
                  }),
                  i.createElement("feOffset", { dx: "1", dy: "1" }),
                ),
              ),
              i.createElement(
                "text",
                {
                  textAnchor: n,
                  filter: "url(#shadow)",
                  x: t.x + l,
                  y: t.y,
                  style: { fill: "black", fontSize: 24 },
                },
                o,
              ),
              i.createElement(
                "text",
                {
                  textAnchor: n,
                  filter: "url(#background)",
                  x: t.x + l,
                  y: t.y,
                  style: { fill: "var(--descriptiontext)", fontSize: 24 },
                },
                o,
              ),
              i.createElement("circle", {
                id: "SourceCircle",
                cx: t.x,
                cy: t.y,
                r: "0.5rem",
                fill: "url(#buttonGradient)",
              }),
            );
          }
        };
        fe = (0, n.Cg)([s.PA], fe);
        let be = class extends i.Component {
          constructor(e) {
            super(e),
              (this.m_LeftControllerImage = void 0),
              (this.m_RightControllerImage = void 0),
              (this.m_SVGElement = void 0),
              (this.m_PropsListDiv = void 0),
              (this.state = {
                ptLeftController: new p.bR(0, 0),
                ptRightController: new p.bR(0, 0),
                nPointScale: 0,
                ptDivList: new p.bR(0, 0),
              });
          }
          OnUpdateControllerPicturePosition() {
            if (
              this.m_LeftControllerImage &&
              !this.props.bSlaveSecondaryControllerBinding
            ) {
              let e = 0,
                t = 0,
                o = this.m_LeftControllerImage;
              if (o) {
                let n = o.getBoundingClientRect();
                o.naturalWidth > 0 &&
                  ((t =
                    n.right -
                    o.parentElement.parentElement.parentElement.getBoundingClientRect()
                      .left),
                  (e =
                    n.top -
                    o.parentElement.parentElement.parentElement.getBoundingClientRect()
                      .top));
              }
              this.setState({ ptLeftController: new p.bR(t, e) });
            }
            if (this.m_RightControllerImage) {
              let e = 1,
                t = 0,
                o = 0,
                n = this.m_RightControllerImage;
              if (n) {
                let i = n.getBoundingClientRect();
                n.naturalWidth > 0 &&
                  ((e = i.height / n.naturalHeight),
                  (o =
                    i.left -
                    n.parentElement.parentElement.parentElement.getBoundingClientRect()
                      .left),
                  (o += (i.width - n.naturalWidth * e) / 2),
                  (t =
                    i.top -
                    n.parentElement.parentElement.parentElement.getBoundingClientRect()
                      .top));
              }
              this.setState({
                ptRightController: new p.bR(o, t),
                nPointScale: e,
              });
            }
            if (this.m_PropsListDiv) {
              let e = this.m_PropsListDiv.getBoundingClientRect(),
                t =
                  this.m_PropsListDiv.parentElement.parentElement.getBoundingClientRect();
              this.setState({ ptDivList: new p.bR(e.width, e.top - t.top) });
            }
          }
          BindLeftControllerImage(e) {
            (this.m_LeftControllerImage = e),
              this.OnUpdateControllerPicturePosition();
          }
          BindRightControllerImage(e) {
            (this.m_RightControllerImage = e),
              this.OnUpdateControllerPicturePosition();
          }
          BindPropsListDiv(e) {
            (this.m_PropsListDiv = e), this.OnUpdateControllerPicturePosition();
          }
          render() {
            let e,
              t,
              o = "",
              n = "",
              l = "",
              s = "",
              r = p.B$.SelectedControllerTypeInfo;
            switch (this.props.eActionSourceType) {
              case _e.Pose:
                (e = "pose"), (t = (0, d.we)("#BindingUI_PoseTitle"));
                break;
              case _e.Haptics:
                (e = "vibration"), (t = (0, d.we)("#BindingUI_HapticsTitle"));
                break;
              case _e.Skeleton:
                (e = "skeleton"), (t = (0, d.we)("#BindingUI_SkeletonTitle"));
            }
            (s = r.input_bindingui_right.uri),
              (n = r.input_bindingui_right.transform),
              this.props.bSlaveSecondaryControllerBinding ||
                ((o = r.input_bindingui_left.transform),
                (l = r.input_bindingui_left.uri));
            let a = function (t, o, n, i, l) {
                let s = t.input_source[i];
                if (s.type == e && (null == s.side || s.side == n)) {
                  let e = new p.bR(
                    s.binding_image_point[0],
                    s.binding_image_point[1],
                  );
                  o.hasOwnProperty(e.toString()) || (o[e.toString()] = []),
                    o[e.toString()].push(i);
                }
              },
              c = {},
              h = {};
            Object.keys(r.input_source).forEach(a.bind(null, r, c, "left")),
              Object.keys(r.input_source).forEach(a.bind(null, r, h, "right"));
            let u = Object.keys(c).map((e, t) =>
                i.createElement(fe, {
                  key: t,
                  vecPosePath: c[e],
                  ptController: this.state.ptLeftController,
                  nPointScale: this.state.nPointScale,
                  ptPoseListOffset: this.state.ptDivList,
                  bLeftHandController: !0,
                }),
              ),
              m = Object.keys(h).map((e, t) =>
                i.createElement(fe, {
                  key: t,
                  vecPosePath: h[e],
                  ptController: this.state.ptRightController,
                  nPointScale: this.state.nPointScale,
                  ptPoseListOffset: this.state.ptDivList,
                  bLeftHandController: !1,
                }),
              );
            return i.createElement(
              "div",
              { className: "FlexFullHeightColumnCentered" },
              i.createElement(
                "div",
                { className: "FlexRow PoseTitleBar" },
                i.createElement("img", {
                  className:
                    "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                  src: "images/bindingui/icon_modal_edit_header.svg",
                }),
                i.createElement(
                  "div",
                  { className: "Label Title TitleCenter AllCaps" },
                  t,
                ),
              ),
              i.createElement(
                "div",
                {
                  className:
                    "FlexFullWidthRowCentered PoseMainContent PositionRelative",
                },
                i.createElement(
                  "div",
                  { className: "PoseBindingPoints" },
                  !this.props.bSlaveSecondaryControllerBinding && u,
                  m,
                ),
                i.createElement(
                  "div",
                  {
                    className: "FlexColumn PoseActionsList",
                    ref: this.BindPropsListDiv,
                  },
                  i.createElement(ye, {
                    eActionType: this.props.eActionSourceType,
                    bSingleControllerMode: this.props.bSingleControllerMode,
                    ptRightController: this.state.ptRightController,
                    ptLeftController: this.state.ptLeftController,
                    bReadOnly: this.props.bReadOnly,
                    nPointScale: this.state.nPointScale,
                    ptPoseListOffset: this.state.ptDivList,
                    bSlaveSecondaryControllerBinding:
                      this.props.bSlaveSecondaryControllerBinding,
                  }),
                  i.createElement(W.A, {
                    onReflow: this.OnUpdateControllerPicturePosition,
                  }),
                ),
                i.createElement(
                  "div",
                  { className: "FlexRow PoseControllerPictures" },
                  !this.props.bSlaveSecondaryControllerBinding &&
                    i.createElement(
                      "div",
                      { className: "ControllerImageContainer" },
                      i.createElement("img", {
                        className: "ControllerImage",
                        src: l,
                        style: { transform: o },
                        ref: this.BindLeftControllerImage,
                      }),
                    ),
                  i.createElement(
                    "div",
                    { className: "ControllerImageContainer" },
                    i.createElement("img", {
                      className: "ControllerImage",
                      src: s,
                      style: { transform: n },
                      ref: this.BindRightControllerImage,
                    }),
                  ),
                ),
                i.createElement(W.A, {
                  onReflow: this.OnUpdateControllerPicturePosition,
                }),
              ),
              i.createElement(
                "div",
                {
                  className: "ChordBindingCloseButton Label AllCaps",
                  onClick: this.props.fnCloseModal,
                },
                (0, d.we)("#Button_Close"),
              ),
            );
          }
        };
        (0, n.Cg)(
          [u.o],
          be.prototype,
          "OnUpdateControllerPicturePosition",
          null,
        ),
          (0, n.Cg)([u.o], be.prototype, "BindLeftControllerImage", null),
          (0, n.Cg)([u.o], be.prototype, "BindRightControllerImage", null),
          (0, n.Cg)([u.o], be.prototype, "BindPropsListDiv", null),
          (be = (0, n.Cg)([s.PA], be));
        let ve = class extends i.Component {
          OnActionOutputChanged(e) {
            p.B$.SetActionForChord(this.props.chord, e);
          }
          DeleteChord() {
            p.B$.DeleteChord(this.props.chord);
          }
          DeleteSourceFromChord(e, t) {
            p.B$.DeleteSourceFromChord(this.props.chord, e);
          }
          AddSourceToChord() {
            let e = this.props.chord.inputs
              ? this.props.chord.inputs.length
              : 0;
            p.B$.SetInputSourceForChord(
              this.props.chord,
              p.B$.SelectedActionSetSources[e].path,
            );
          }
          render() {
            let e = p.B$.SelectedActionSetActions.filter(
                (e) => "boolean" == e.type,
              ),
              t = "",
              o = "none",
              n = !1;
            this.props.chord.output
              ? ((t = this.props.chord.output),
                (o = this.props.chord.output.toLowerCase()))
              : (n = !0);
            let l,
              s = e.map(
                (e, o) => (
                  this.props.chord.output &&
                    e.name.toLowerCase() ==
                      this.props.chord.output.toLowerCase() &&
                    (t = e.localized_name),
                  new g(e.name.toLowerCase(), e.localized_name)
                ),
              ),
              r = p.B$.SelectedActionSetSources;
            return r && 0 != r.length
              ? (this.props.chord.inputs
                  ? (l = this.props.chord.inputs.map((e, t) => {
                      let o = i.createElement(
                        "div",
                        { className: "Label ChordBindingPlusLabel" },
                        i.createElement("img", {
                          className: "ActionButtonImage ChordBindingImage",
                          src: "images/bindingui/icon_plus.svg",
                        }),
                      );
                      return i.createElement(
                        "div",
                        { className: "FlexFullHeightColumnCentered", key: t },
                        i.createElement(
                          "div",
                          { className: "FlexRow ChordBindingEntry" },
                          i.createElement(
                            "div",
                            { className: "FlexColumn" },
                            (function (e, t, o, n) {
                              let l = t
                                .filter((t) => {
                                  let n = o.inputs.filter(
                                    (e) => e[0] == t.path,
                                  );
                                  return t.path == e || 0 == n.length;
                                })
                                .map(
                                  (e, t) =>
                                    new g(
                                      e.path,
                                      p.B$.LocalizePathNameForSelectedControllerType(
                                        e.path,
                                      ),
                                    ),
                                );
                              return i.createElement(
                                "div",
                                { className: "ChordBindingInputType" },
                                i.createElement(S, {
                                  vecOptions: l,
                                  sValueSelectedItem: e,
                                  sLocalizedSelectedItem:
                                    p.B$.LocalizePathNameForSelectedControllerType(
                                      e,
                                    ),
                                  fnOptionSelected: function (t) {
                                    p.B$.SetInputSourceForChord(o, t, e);
                                  },
                                  bReadOnly: n,
                                }),
                              );
                            })(e[0], r, this.props.chord, this.props.bReadOnly),
                            (function (e, t, o, n) {
                              let l = p.B$.GetActionBinding(
                                e,
                                p.B$.SelectedActionSet,
                              );
                              if (!l || 0 == l.length) return null;
                              let s = [],
                                r = "";
                              if (
                                (l.forEach((e) => {
                                  let o = p.B$.GetBooleanInputOptionsForMode(
                                    e.mode,
                                  );
                                  for (let n of o)
                                    s.push({
                                      sActionBindMode: e.mode,
                                      sInputOption: n,
                                    }),
                                      n == t && (r = e.mode);
                                }),
                                0 == s.length)
                              )
                                return null;
                              let a = s.map(
                                (e, t) =>
                                  new g(
                                    e.sInputOption,
                                    (0, d.we)(
                                      "#SourceInputMode_" + e.sActionBindMode,
                                    ) +
                                      " " +
                                      (0, d.we)(
                                        "#SourceInputMode_" + e.sInputOption,
                                      ),
                                  ),
                              );
                              return i.createElement(
                                "div",
                                { className: "ChordBindingInputType" },
                                i.createElement(S, {
                                  vecOptions: a,
                                  sValueSelectedItem: t,
                                  sLocalizedSelectedItem:
                                    (0, d.we)("#SourceInputMode_" + r) +
                                    " " +
                                    (0, d.we)("#SourceInputMode_" + t),
                                  fnOptionSelected: function (t) {
                                    p.B$.SetInputTypeForChord(o, e, t);
                                  },
                                  bReadOnly: n,
                                }),
                              );
                            })(
                              e[0],
                              e[1],
                              this.props.chord,
                              this.props.bReadOnly,
                            ),
                          ),
                          !this.props.bReadOnly &&
                            i.createElement("img", {
                              onClick: () => {
                                this.DeleteSourceFromChord(e[0], e[1]);
                              },
                              className:
                                "ActionButtonImage ChordBindingEntryDelete",
                              src: "images/bindingui/icon_trash.svg",
                            }),
                        ),
                        t != this.props.chord.inputs.length - 1 && o,
                      );
                    }))
                  : n || this.AddSourceToChord(),
                i.createElement(
                  "div",
                  { className: "FlexColumn" },
                  i.createElement(
                    "div",
                    { className: "FlexRow ChordBindingRow" },
                    i.createElement(
                      "div",
                      { className: "FlexColumn ChordBindingSet" },
                      i.createElement(S, {
                        sHeaderClass: "ChordBindingAction",
                        vecOptions: s,
                        sValueSelectedItem: o,
                        sModalTitleString: (0, d.we)(
                          "#BindingUI_Chord_SelectActionModalHeader",
                        ),
                        bShowOptionsOnStart: n,
                        sLocalizedSelectedItem: t,
                        fnOptionSelected: this.OnActionOutputChanged,
                        bReadOnly: this.props.bReadOnly,
                      }),
                    ),
                    i.createElement("img", {
                      className: "ActionButtonImage ChordBindingImage",
                      src: "images/bindingui/icon_arrow_right.svg",
                    }),
                    i.createElement(
                      "div",
                      {
                        className:
                          "FlexFullHeightColumnCentered ChordBindingSet",
                      },
                      l,
                    ),
                    !this.props.bReadOnly &&
                      i.createElement(
                        "div",
                        {
                          className:
                            "FlexFullHeightColumnCentered ChordEntryActionColumn",
                        },
                        i.createElement(
                          "div",
                          {
                            onClick: this.AddSourceToChord,
                            className:
                              "Label ChordManageButtons ChordBindingBigButton AllCaps",
                          },
                          i.createElement("img", {
                            className: "ActionButtonImage",
                            src: "images/bindingui/icon_add.svg",
                          }),
                          (0, d.we)("#BindingUI_AddChordInput"),
                        ),
                        i.createElement(
                          "div",
                          {
                            onClick: this.DeleteChord,
                            className:
                              "Label ChordManageButtons ChordBindingBigButton AllCaps",
                          },
                          i.createElement("img", {
                            className: "ActionButtonImage",
                            src: "images/bindingui/icon_trash.svg",
                          }),
                          (0, d.we)("#BindingUI_DeleteChord"),
                        ),
                      ),
                  ),
                  i.createElement("div", {
                    className: "FlexRow ChordButtonRow",
                  }),
                ))
              : null;
          }
        };
        (0, n.Cg)([u.o], ve.prototype, "OnActionOutputChanged", null),
          (0, n.Cg)([u.o], ve.prototype, "DeleteChord", null),
          (0, n.Cg)([u.o], ve.prototype, "DeleteSourceFromChord", null),
          (0, n.Cg)([u.o], ve.prototype, "AddSourceToChord", null),
          (ve = (0, n.Cg)([s.PA], ve));
        let Ae = class extends i.Component {
          constructor(e) {
            super(e);
          }
          AddChord() {
            p.B$.AddChord();
          }
          render() {
            let e = [],
              t = p.B$.SelectedActionSetChords;
            return (
              t &&
                t.length &&
                (e = t.map((e, o) =>
                  i.createElement(
                    "div",
                    { key: o },
                    i.createElement(ve, {
                      chord: e,
                      bReadOnly: this.props.bReadOnly,
                    }),
                    o != t.length - 1 && i.createElement("hr", null),
                  ),
                )),
              i.createElement(
                "div",
                { className: "FlexColumn ChordBindingModal" },
                i.createElement(
                  "div",
                  { className: "ChordBindingHeader FlexColumn" },
                  i.createElement(
                    "div",
                    { className: "FlexFullWidthRowCentered" },
                    i.createElement("img", {
                      className:
                        "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                      src: "images/bindingui/icon_modal_edit_header.svg",
                    }),
                    i.createElement(
                      "div",
                      { className: "Label Title TitleCenter AllCaps" },
                      (0, d.we)("#BindingUI_ChordTitle"),
                    ),
                  ),
                ),
                i.createElement(
                  "div",
                  {
                    className:
                      "FlexColumn ChordBindingContents ChordBindingChordsList",
                  },
                  e,
                  !this.props.bReadOnly &&
                    i.createElement(
                      "div",
                      {
                        className:
                          "Label ChordManageButtons ChordBindingBigButton AllCaps AddChordButton",
                        onClick: this.AddChord,
                      },
                      i.createElement("img", {
                        className: "ActionButtonImage",
                        src: "images/bindingui/icon_add.svg",
                      }),
                      (0, d.we)("#BindingUI_AddChord"),
                    ),
                ),
                i.createElement(
                  "div",
                  {
                    className: "ChordBindingCloseButton Label AllCaps",
                    onClick: this.props.fnCloseModal,
                  },
                  (0, d.we)("#Button_Close"),
                ),
              )
            );
          }
        };
        (0, n.Cg)([u.o], Ae.prototype, "AddChord", null),
          (Ae = (0, n.Cg)([s.PA], Ae));
        let Be = class extends i.Component {
          constructor(e) {
            super(e);
          }
          CloseSaveDialog() {
            this.props.ParentClose();
          }
          render() {
            let e = [];
            return (
              p.B$.ActionSets.forEach((t) => {
                p.B$.GetActionSetActions(t.name).forEach((t) => {
                  let o = p.B$.GetAliasInfo(t.name);
                  o &&
                    o.hidden &&
                    "vibration" != t.type &&
                    "skeleton" != t.type &&
                    "pose" != t.type &&
                    e.push(
                      i.createElement(
                        "div",
                        { className: "FlexRow HiddenAliasRow" },
                        i.createElement(
                          "div",
                          { className: "Label HiddenAliasName" },
                          t.localized_name,
                        ),
                        i.createElement(
                          "div",
                          {
                            className: "Label ButtonControl",
                            onClick: () => {
                              p.B$.SetAliasHidden(t.name, !1);
                            },
                          },
                          (0, d.we)("#ShowActionButton"),
                        ),
                      ),
                    );
                });
              }),
              i.createElement(
                r.A,
                {
                  visible: !0,
                  onClose: this.CloseSaveDialog,
                  animation: "fade",
                  customStyles: {
                    width: "fit-content",
                    height: "auto",
                    paddingTop: "4rem",
                    maxHeight: "90%",
                  },
                  className: "HiddenActionsModal",
                  closeOnEsc: !0,
                },
                i.createElement(
                  "div",
                  { className: "FlexColumn HiddenActionsWrapper" },
                  e,
                ),
              )
            );
          }
        };
        (0, n.Cg)([u.o], Be.prototype, "CloseSaveDialog", null),
          (Be = (0, n.Cg)([s.PA], Be));
        let Ie = class extends i.Component {
          constructor(e) {
            super(e);
            let t = p.B$.GetAliasInfo(this.props.sAction);
            this.state = t
              ? { sUserSuppliedName: t.alias_name, bHidden: t.hidden }
              : { sUserSuppliedName: "", bHidden: !1 };
          }
          onHiddenChanged(e) {
            this.setState({ bHidden: e }),
              p.B$.SetAliasHidden(this.props.sAction, e);
          }
          onNameChanged(e) {
            this.setState({ sUserSuppliedName: e }),
              p.B$.SetAliasName(this.props.sAction, e);
          }
          render() {
            let e = "InputOption" + this.props.sAction;
            return i.createElement(
              "div",
              { className: "FlexRow SetupLegacyRow" },
              i.createElement(
                "div",
                { className: "Label ActionAliasAction" },
                (0, d.we)(
                  p.B$.GetActionByName(this.props.sAction).localized_name,
                ),
              ),
              i.createElement("input", {
                id: e + "name",
                type: "text",
                value: this.state.sUserSuppliedName,
                onChange: (e) => {
                  this.onNameChanged(e.target.value);
                },
                className: "ActionAliasUserSuppliedName",
                readOnly: this.props.readOnly,
              }),
              !this.props.readOnly &&
                i.createElement(
                  "div",
                  {
                    className: "Label ButtonControl",
                    onClick: () => {
                      p.B$.SetAliasHidden(this.props.sAction, !0);
                    },
                  },
                  (0, d.we)("#HideActionButton"),
                ),
            );
          }
        };
        (0, n.Cg)([u.o], Ie.prototype, "onHiddenChanged", null),
          (0, n.Cg)([u.o], Ie.prototype, "onNameChanged", null),
          (Ie = (0, n.Cg)([s.PA], Ie));
        let we = class extends i.Component {
          constructor(e) {
            super(e),
              (this.state = { bShowActionPicker: !1, bShowHiddenActions: !1 });
          }
          OnShowHidden() {
            this.setState({ bShowHiddenActions: !0 });
          }
          OnCloseHidden() {
            this.setState({ bShowHiddenActions: !1 });
          }
          render() {
            let e = [];
            return (
              p.B$.ActionSets.forEach((t) => {
                p.B$.GetActionSetActions(t.name).forEach((t) => {
                  let o = p.B$.GetAliasInfo(t.name);
                  (o && o.hidden) ||
                    ("vibration" != t.type &&
                      "skeleton" != t.type &&
                      "pose" != t.type &&
                      e.push(t.name));
                });
              }),
              i.createElement(
                "div",
                null,
                i.createElement(
                  "div",
                  { className: "FlexColumn" },
                  i.createElement(
                    "div",
                    { className: "LegacySectionHeader Label" },
                    (0, d.we)("#LegacySetup_ActionAliasesHeader"),
                  ),
                  e.map((e, t) =>
                    i.createElement(Ie, {
                      sAction: e,
                      key: e,
                      readOnly: this.props.readOnly,
                    }),
                  ),
                ),
                this.state.bShowHiddenActions &&
                  i.createElement(Be, { ParentClose: this.OnCloseHidden }),
                !this.props.readOnly &&
                  i.createElement(
                    "div",
                    {
                      className:
                        "FlexRow SetupLegacyRow ActionAliasButtonWrapper",
                    },
                    i.createElement(
                      "div",
                      {
                        className: "Label ButtonControl",
                        onClick: this.OnShowHidden,
                      },
                      (0, d.we)("#ShowAllAliases"),
                    ),
                  ),
              )
            );
          }
        };
        (0, n.Cg)([u.o], we.prototype, "OnShowHidden", null),
          (0, n.Cg)([u.o], we.prototype, "OnCloseHidden", null),
          (we = (0, n.Cg)([s.PA], we));
        class Ee extends i.Component {
          constructor(e) {
            super(e),
              (this.state = {
                bValue: p.B$.GetOptionValue(this.props.sOptionName),
              });
          }
          onCheckboxChanged(e) {
            p.B$.SetOptionValue(this.props.sOptionName, e),
              this.setState({ bValue: e });
          }
          render() {
            let e = "InputOption" + this.props.sOptionName;
            return i.createElement(
              "div",
              { className: "FlexRow SetupLegacyRow" },
              i.createElement(
                "div",
                { className: "FlexColumn" },
                i.createElement("input", {
                  id: e,
                  type: "checkbox",
                  checked: this.state.bValue,
                  value: this.props.sOptionName,
                  onChange: (e) => {
                    this.onCheckboxChanged(e.target.checked);
                  },
                  disabled: this.props.readOnly,
                }),
              ),
              i.createElement(
                "label",
                { className: "InputOptionLabel", htmlFor: e },
                this.props.sOptionLocalizedName,
              ),
            );
          }
        }
        (0, n.Cg)([u.o], Ee.prototype, "onCheckboxChanged", null);
        class Me extends i.Component {
          constructor(e) {
            super(e);
            let t = p.B$.GetOptionValue(this.props.sOptionName);
            t || (t = "none"), (this.state = { sValue: t });
          }
          OnControllerDropdownChanged(e) {
            p.B$.SetOptionValue(this.props.sOptionName, e),
              this.setState({ sValue: e });
          }
          render() {
            let e = p.B$.SelectedAppActions.simulation_types,
              t = [];
            for (let o of e)
              "TrackedDeviceClass_Controller" == o.device_type &&
                t.push(
                  new g(o.controller_type, (0, d.we)("#" + o.controller_type)),
                );
            t.push(new g("none", (0, d.we)("#None")));
            let o = "InputOption" + this.props.sOptionName;
            return i.createElement(
              "div",
              { className: "FlexRow SetupLegacyRow" },
              i.createElement(
                "div",
                { className: "FlexColumn" },
                i.createElement(S, {
                  vecOptions: t,
                  sModalClass: "PinTop",
                  sValueSelectedItem: this.state.sValue,
                  fnOptionSelected: this.OnControllerDropdownChanged,
                }),
              ),
              i.createElement(
                "label",
                { className: "InputOptionLabel", htmlFor: o },
                this.props.sOptionLocalizedName,
              ),
            );
          }
        }
        (0, n.Cg)([u.o], Me.prototype, "OnControllerDropdownChanged", null);
        class Oe extends i.Component {
          constructor(e) {
            super(e);
          }
          onCheckboxChanged(e, t) {
            p.B$.SetOptionValue(e, t), this.forceUpdate();
          }
          render() {
            return this.props.options.map((e, t) => {
              switch (e.type) {
                case "bool":
                  return i.createElement(Ee, {
                    sOptionName: e.name,
                    sOptionLocalizedName: e.localized_name,
                    key: e.name,
                    readOnly: this.props.readOnly,
                  });
                case "string":
                  return "simulated_controller_type" == e.name
                    ? i.createElement(Me, {
                        sOptionName: e.name,
                        sOptionLocalizedName: e.localized_name,
                        key: e.name,
                        readOnly: this.props.readOnly,
                      })
                    : null;
                default:
                  return null;
              }
            });
          }
        }
        (0, n.Cg)([u.o], Oe.prototype, "onCheckboxChanged", null);
        class ke extends i.Component {
          constructor(e) {
            super(e),
              (this.state = {
                sName: this.props.simAction.name,
                sOutputAction: this.props.simAction.output
                  ? this.props.simAction.output
                  : "none",
              });
          }
          onNameChanged(e) {
            this.setState({ sName: e });
            let t = this.props.simAction;
            t.name = e;
            let o = p.B$.ComputeSimulatedActionPathFromId(t.id);
            p.B$.SetSimulatedActionByPath(o, t);
          }
          onActionChanged(e) {
            this.setState({ sOutputAction: e });
            let t = this.props.simAction;
            t.output = "none" == e ? "" : e;
            let o = p.B$.ComputeSimulatedActionPathFromId(t.id);
            p.B$.SetSimulatedActionByPath(o, t);
          }
          onDelete() {
            let e = p.B$.ComputeSimulatedActionPathFromId(
              this.props.simAction.id,
            );
            p.B$.DeleteSimulatedActionByPath(e);
          }
          render() {
            let e = p.B$.GetLiteralVector1ActionBindings.map(
              (e, t) => new g(e.name, e.localized_name),
            );
            e.push(new g("none", (0, d.we)("#SourceInputAction_none")));
            let t = "InputOption" + this.props.simAction.id;
            return i.createElement(
              "div",
              { className: "FlexRow SetupLegacyRow" },
              i.createElement(
                "div",
                { className: "SimulatedActionType Label" },
                (0, d.we)("#SimulatedAction_FakeTrigger"),
              ),
              i.createElement("input", {
                id: t + "name",
                type: "text",
                value: this.state.sName,
                onChange: (e) => {
                  this.onNameChanged(e.target.value);
                },
                className: "ActionAliasUserSuppliedName",
                readOnly: this.props.readOnly,
              }),
              i.createElement(S, {
                vecOptions: e,
                sValueSelectedItem: this.state.sOutputAction,
                sHeaderClass: "BindingLabelAction",
                sMainButtonClass: "SimActionTargetLabel",
                fnOptionSelected: this.onActionChanged,
                bReadOnly: this.props.readOnly,
              }),
              !this.props.readOnly &&
                i.createElement(
                  "div",
                  { className: "Label ButtonControl", onClick: this.onDelete },
                  (0, d.we)("#DeleteSimulatedAction"),
                ),
            );
          }
        }
        (0, n.Cg)([u.o], ke.prototype, "onNameChanged", null),
          (0, n.Cg)([u.o], ke.prototype, "onActionChanged", null),
          (0, n.Cg)([u.o], ke.prototype, "onDelete", null);
        class Ne extends i.Component {
          constructor(e) {
            super(e),
              (this.state = {
                sName: this.props.simAction.name,
                sOutputHand: this.props.simAction.output
                  ? this.props.simAction.output
                  : "none",
                fPositionX: this.props.simAction.position_x
                  ? this.props.simAction.position_x
                  : 0,
                fPositionY: this.props.simAction.position_y
                  ? this.props.simAction.position_y
                  : 0,
              });
          }
          onNameChanged(e) {
            this.setState({ sName: e });
            let t = this.props.simAction;
            t.name = e;
            let o = p.B$.ComputeSimulatedActionPathFromId(t.id);
            p.B$.SetSimulatedActionByPath(o, t);
          }
          onOutputChanged(e) {
            this.setState({ sOutputHand: e });
            let t = this.props.simAction;
            t.output = "none" == e ? "" : e;
            let o = p.B$.ComputeSimulatedActionPathFromId(t.id);
            p.B$.SetSimulatedActionByPath(o, t);
          }
          onDelete() {
            let e = p.B$.ComputeSimulatedActionPathFromId(
              this.props.simAction.id,
            );
            p.B$.DeleteSimulatedActionByPath(e);
          }
          OnClickTrackpad(e) {
            let t = e.currentTarget.getBoundingClientRect(),
              o = (e.clientX - t.left) / (0.5 * t.width) - 1,
              n = -1 * ((e.clientY - t.top) / (0.5 * t.height) - 1);
            this.setState({ fPositionX: o, fPositionY: n });
            let i = this.props.simAction;
            (i.position_x = o), (i.position_y = n);
            let l = p.B$.ComputeSimulatedActionPathFromId(i.id);
            p.B$.SetSimulatedActionByPath(l, i);
          }
          render() {
            let e = [];
            p.B$.GetOptionValue("mirror_actions") ||
              (e.push(new g("left", (0, d.we)("#TrackpadClickLeft"))),
              e.push(new g("right", (0, d.we)("#TrackpadClickRight"))),
              e.push(new g("none", (0, d.we)("#TrackpadClickNone"))));
            let t = "InputOption" + this.props.simAction.id,
              o = {
                left: (100 * (this.state.fPositionX + 1)) / 2 + "%",
                top: 100 - (100 * (this.state.fPositionY + 1)) / 2 + "%",
              };
            return i.createElement(
              "div",
              { className: "FlexRow SetupLegacyRow" },
              i.createElement(
                "div",
                { className: "SimulatedActionType Label" },
                (0, d.we)("#SimulatedAction_FakeTrackpadClick"),
              ),
              i.createElement("input", {
                id: t + "name",
                type: "text",
                value: this.state.sName,
                onChange: (e) => {
                  this.onNameChanged(e.target.value);
                },
                className: "ActionAliasUserSuppliedName",
                readOnly: this.props.readOnly,
              }),
              e.length > 0 &&
                i.createElement(S, {
                  sMainButtonClass: "SimActionTargetLabel",
                  vecOptions: e,
                  sValueSelectedItem: this.state.sOutputHand,
                  sHeaderClass: "BindingLabelAction",
                  fnOptionSelected: this.onOutputChanged,
                  bReadOnly: this.props.readOnly,
                }),
              i.createElement(
                "div",
                {
                  className: "TrackpadSelectionBackground",
                  onClick: this.props.readOnly
                    ? null
                    : (e) => this.OnClickTrackpad(e),
                },
                i.createElement("div", {
                  className: "TrackpadSelectionPip",
                  style: o,
                }),
              ),
              !this.props.readOnly &&
                i.createElement(
                  "div",
                  { className: "Label ButtonControl", onClick: this.onDelete },
                  (0, d.we)("#DeleteSimulatedAction"),
                ),
            );
          }
        }
        (0, n.Cg)([u.o], Ne.prototype, "onNameChanged", null),
          (0, n.Cg)([u.o], Ne.prototype, "onOutputChanged", null),
          (0, n.Cg)([u.o], Ne.prototype, "onDelete", null),
          (0, n.Cg)([u.o], Ne.prototype, "OnClickTrackpad", null);
        let Te = class extends i.Component {
          constructor(e) {
            super(e);
          }
          OnCreateSimAction(e) {
            p.B$.AddSimulatedAction(e);
          }
          CreateEntry(e) {
            switch (e.type) {
              case "fake_trigger":
                return i.createElement(ke, {
                  key: e.id,
                  simAction: e,
                  readOnly: this.props.readOnly,
                });
              case "fake_trackpad_click":
                return i.createElement(Ne, {
                  key: e.id,
                  simAction: e,
                  readOnly: this.props.readOnly,
                });
              default:
                return null;
            }
          }
          render() {
            let e = [];
            return (
              e.push(
                new g(
                  "fake_trigger",
                  (0, d.we)("#SimulatedAction_FakeTrigger"),
                ),
              ),
              e.push(
                new g(
                  "fake_trackpad_click",
                  (0, d.we)("#SimulatedAction_FakeTrackpadClick"),
                ),
              ),
              i.createElement(
                "div",
                { className: "FlexColumn" },
                i.createElement(
                  "div",
                  { className: "LegacySectionHeader Label" },
                  (0, d.we)("#LegacySetup_SimulatedActionHeader"),
                ),
                p.B$.SimulatedActions.map((e, t) => this.CreateEntry(e)),
                !this.props.readOnly &&
                  i.createElement(
                    "div",
                    { className: "SimulatedActionsAddWrapper" },
                    i.createElement(S, {
                      sMainButtonClass: "AddSimActionButton",
                      vecOptions: e,
                      sValueSelectedItem: "",
                      sLocalizedSelectedItem: (0, d.we)("#AddSimulatedAction"),
                      sHeaderClass: "BindingLabelAction",
                      fnOptionSelected: this.OnCreateSimAction,
                    }),
                  ),
              )
            );
          }
        };
        (0, n.Cg)([u.o], Te.prototype, "OnCreateSimAction", null),
          (Te = (0, n.Cg)([s.PA], Te));
        let Pe = class extends i.Component {
          constructor(e) {
            super(e),
              (this.controllerTypeOptions = []),
              (this.rendermodelTypeOptions = []);
            let t = p.B$.GetOptionValue("device_offsets");
            null == t && (t = []),
              t.find((e) => "left_hand" == e.role) ||
                t.push({
                  role: "left_hand",
                  offset_position: [0, 0, 0],
                  offset_rotation: [0, 0, 0],
                }),
              t.find((e) => "right_hand" == e.role) ||
                t.push({
                  role: "right_hand",
                  offset_position: [0, 0, 0],
                  offset_rotation: [0, 0, 0],
                });
            const o = p.B$.SelectedAppActions.simulation_types.sort(
              function (e, t) {
                return e.device_type < t.device_type;
              },
            );
            this.controllerTypeOptions = [];
            for (let e of o)
              "TrackedDeviceClass_Controller" == e.device_type &&
                this.controllerTypeOptions.push({
                  sName: (0, d.we)("#" + e.controller_type),
                  sValue: e.controller_type,
                  sTooltip: e.controller_type,
                });
            this.controllerTypeOptions.push({
              sName: (0, d.we)("#None"),
              sValue: "none",
              sTooltip: (0, d.we)("#None"),
            }),
              (this.rendermodelTypeOptions = []);
            const n = ["full", "name_only", "none"];
            for (let e of n)
              this.rendermodelTypeOptions.push({
                sName: (0, d.we)(
                  "#BindingUI_Options_simulate_rendermodel_type_" +
                    e +
                    "_Label",
                ),
                sValue: e,
                sTooltip: (0, d.we)(
                  "#BindingUI_Options_simulate_rendermodel_type_" +
                    e +
                    "_tooltip",
                ),
              });
            this.state = { bShowOffsetsModal: !1, vecOffsets: t };
          }
          OpenOffsetsModal() {
            this.setState({ bShowOffsetsModal: !0 });
          }
          CloseOffsetsModal() {
            this.setState({ bShowOffsetsModal: !1 });
          }
          OnPositionOffsetChanged(e, t) {
            const o = this.state.vecOffsets.map((o) =>
              o.role === t
                ? Object.assign(Object.assign({}, o), { offset_position: e })
                : o,
            );
            this.setState({ vecOffsets: o }), this.SetOffsetsOptionValue(o);
          }
          OnRotationOffsetChanged(e, t) {
            const o = this.state.vecOffsets.map((o) =>
              o.role === t
                ? Object.assign(Object.assign({}, o), { offset_rotation: e })
                : o,
            );
            this.setState({ vecOffsets: o }), this.SetOffsetsOptionValue(o);
          }
          SetOffsetsOptionValue(e) {
            p.B$.SetOptionValue("device_offsets", this.GetOffsetsValue(e));
          }
          GetOffsetsValue(e) {
            const t = [];
            for (const o of e)
              (this.HasData(o.offset_position) ||
                this.HasData(o.offset_rotation)) &&
                t.push(o);
            return t.length > 0 ? t : void 0;
          }
          HasData(e) {
            return !(
              null == e ||
              (Array.isArray(e) && e.every((e) => 0 === e))
            );
          }
          renderOffsetsContent() {
            let e = "";
            this.hasOwnProperty("nextUniqueId") && (e = this.nextUniqueId());
            const t = this.state.vecOffsets.find((e) => "left_hand" == e.role),
              o = this.state.vecOffsets.find((e) => "right_hand" == e.role);
            return i.createElement(
              "div",
              { className: "InputSettingsModal" },
              i.createElement(
                "div",
                { className: "ChordBindingHeader FlexColumn" },
                i.createElement(
                  "div",
                  { className: "FlexFullWidthRowCentered" },
                  i.createElement("img", {
                    className:
                      "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                    src: "images/bindingui/icon_modal_edit_header.svg",
                  }),
                  i.createElement(
                    "div",
                    { className: "Label Title TitleCenter AllCaps" },
                    (0, d.we)("#BindingSettingsModal_OffsetsTitle"),
                  ),
                ),
              ),
              i.createElement(
                "div",
                { className: "FlexColumn" },
                i.createElement(Se, {
                  labelName: "#SourceInputMode_LeftController_PositionOffset",
                  elementId: e,
                  vector: t.offset_position,
                  onChange: this.OnPositionOffsetChanged,
                  renderValue: (e) => e.toFixed(2),
                  min: -0.3,
                  max: 0.3,
                  step: 0.01,
                  axisNames: ["#X", "#Y", "#Z"],
                  name: t.role,
                }),
              ),
              i.createElement(
                "div",
                { className: "FlexColumn" },
                i.createElement(Se, {
                  labelName: "#SourceInputMode_LeftController_RotationOffset",
                  elementId: e,
                  vector: t.offset_rotation,
                  onChange: this.OnRotationOffsetChanged,
                  renderValue: (e) => e.toFixed(2),
                  min: -180,
                  max: 180,
                  step: 5,
                  axisNames: ["#Pitch", "#Yaw", "#Roll"],
                  name: t.role,
                }),
              ),
              i.createElement("hr", null),
              i.createElement(
                "div",
                { className: "FlexColumn" },
                i.createElement(Se, {
                  labelName: "#SourceInputMode_RightController_PositionOffset",
                  elementId: e,
                  vector: o.offset_position,
                  onChange: this.OnPositionOffsetChanged,
                  renderValue: (e) => e.toFixed(2),
                  min: -0.3,
                  max: 0.3,
                  step: 0.01,
                  axisNames: ["#X", "#Y", "#Z"],
                  name: o.role,
                }),
              ),
              i.createElement(
                "div",
                { className: "FlexColumn" },
                i.createElement(Se, {
                  labelName: "#SourceInputMode_RightController_RotationOffset",
                  elementId: e,
                  vector: o.offset_rotation,
                  onChange: this.OnRotationOffsetChanged,
                  renderValue: (e) => e.toFixed(2),
                  min: -180,
                  max: 180,
                  step: 5,
                  axisNames: ["#Pitch", "#Yaw", "#Roll"],
                  name: o.role,
                }),
              ),
              i.createElement(
                "div",
                {
                  className: "InputSettingsCloseButton Label AllCaps",
                  onClick: this.CloseOffsetsModal,
                },
                (0, d.we)("#Button_Close"),
              ),
            );
          }
          render() {
            var e;
            let t = "openxr" == p.B$.SelectedAppActions.category,
              o =
                (null === (e = p.B$.SelectedAppActions.interaction_profiles) ||
                void 0 === e
                  ? void 0
                  : e.length) > 0,
              n = p.B$.GetOptionValue("simulated_controller_type"),
              l = n && "none" != n;
            return i.createElement(
              "div",
              { className: "FlexColumn ChordBindingModal" },
              i.createElement(
                "div",
                { className: "ChordBindingHeader FlexColumn" },
                i.createElement(
                  "div",
                  { className: "FlexFullWidthRowCentered" },
                  i.createElement("img", {
                    className:
                      "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                    src: "images/bindingui/icon_modal_edit_header.svg",
                  }),
                  i.createElement(
                    "div",
                    { className: "Label Title TitleCenter AllCaps" },
                    (0, d.we)("#BindingUI_OptionsTitle"),
                  ),
                ),
              ),
              i.createElement(
                "div",
                {
                  className:
                    "FlexColumn ChordBindingContents ChordBindingChordsList",
                },
                t &&
                  o &&
                  i.createElement(Le, { bReadOnly: this.props.bReadOnly }),
                !t &&
                  i.createElement(Re, {
                    sOptionName: "simulated_controller_type",
                    vecOptionItems: this.controllerTypeOptions,
                    bReadOnly: this.props.bReadOnly,
                  }),
                !t &&
                  l &&
                  i.createElement(Re, {
                    sOptionName: "simulate_rendermodel",
                    vecOptionItems: this.rendermodelTypeOptions,
                    bReadOnly: this.props.bReadOnly,
                  }),
                !t &&
                  l &&
                  i.createElement(De, {
                    sOptionName: "simulate_hmd",
                    bReadOnly: this.props.bReadOnly,
                    bDefaultValue: !0,
                  }),
                i.createElement(
                  "div",
                  { className: "FlexRow SetupLegacyRow" },
                  i.createElement(
                    m.Ay,
                    {
                      content: (0, d.we)(
                        "#BindingUI_Options_ControllerOffsets_tooltip",
                      ),
                      theme: "ControllerBindingToolTip",
                    },
                    i.createElement(
                      "label",
                      { className: "InputOptionLabel" },
                      (0, d.we)("#BindingUI_Options_ControllerOffsets_Label"),
                    ),
                  ),
                  i.createElement(
                    "div",
                    { className: "FlexColumn" },
                    i.createElement(
                      "div",
                      {
                        onClick: this.OpenOffsetsModal,
                        className:
                          "Label ChordManageButtons ChordBindingBigButton AllCaps",
                      },
                      (0, d.we)("#BindingUI_Configure"),
                    ),
                  ),
                ),
              ),
              i.createElement(
                "div",
                {
                  className: "ChordBindingCloseButton Label AllCaps",
                  onClick: this.props.fnCloseModal,
                },
                (0, d.we)("#Button_Close"),
              ),
              i.createElement(
                r.A,
                {
                  visible: this.state.bShowOffsetsModal,
                  onClose: this.CloseOffsetsModal,
                  showCloseButton: !1,
                  animation: "fade",
                  className: "BindingChordsModal",
                  closeOnEsc: !0,
                  customStyles: {
                    width: "80%",
                    maxWidth: "40em",
                    height: "fit-content",
                    maxHeight: "90%",
                    display: "flex",
                    padding: "0px",
                  },
                },
                this.state.bShowOffsetsModal && this.renderOffsetsContent(),
              ),
            );
          }
        };
        (0, n.Cg)([u.o], Pe.prototype, "OpenOffsetsModal", null),
          (0, n.Cg)([u.o], Pe.prototype, "CloseOffsetsModal", null),
          (0, n.Cg)([u.o], Pe.prototype, "OnPositionOffsetChanged", null),
          (0, n.Cg)([u.o], Pe.prototype, "OnRotationOffsetChanged", null),
          (Pe = (0, n.Cg)([s.PA], Pe));
        class Le extends i.Component {
          constructor(e) {
            super(e);
            let t = p.B$.GetInteractionProfile();
            t || (t = " "), (this.state = { sValue: t });
          }
          OnInteractionProfileDropdownChanged(e) {
            p.B$.SetInteractionProfile(e), this.setState({ sValue: e });
          }
          render() {
            let e = p.B$.GetInteractionProfiles(),
              t = [];
            return (
              e.forEach(function (e) {
                let o = e.replace("/interaction_profiles/", "");
                t.push(new g(e, o, null, e));
              }),
              t.push(new g(" ", (0, d.we)("#None"))),
              i.createElement(
                "div",
                { className: "FlexRow SetupLegacyRow" },
                i.createElement(
                  m.Ay,
                  {
                    content: (0, d.we)(
                      "#BindingUI_Options_InteractionProfile_tooltip",
                    ),
                    theme: "ControllerBindingToolTip",
                  },
                  i.createElement(
                    "label",
                    { className: "InputOptionLabel" },
                    (0, d.we)("#BindingUI_Options_InteractionProfile_Label"),
                  ),
                ),
                i.createElement(
                  "div",
                  { className: "FlexColumn" },
                  i.createElement(
                    m.Ay,
                    {
                      content: this.state.sValue,
                      theme: "ControllerBindingToolTip",
                    },
                    i.createElement(
                      "div",
                      null,
                      i.createElement(S, {
                        vecOptions: t,
                        sModalClass: "PinTop",
                        sValueSelectedItem: this.state.sValue,
                        fnOptionSelected:
                          this.OnInteractionProfileDropdownChanged,
                        bReadOnly: this.props.bReadOnly,
                      }),
                    ),
                  ),
                ),
              )
            );
          }
        }
        (0, n.Cg)(
          [u.o],
          Le.prototype,
          "OnInteractionProfileDropdownChanged",
          null,
        );
        class Re extends i.Component {
          constructor(e) {
            super(e), (this.vecOptionValues = []);
            let t = p.B$.GetOptionValue(e.sOptionName);
            t || (t = "none"),
              (!0 !== t && "true" != t) || (t = "name_only"),
              (this.state = { sValue: t });
            for (let e of this.props.vecOptionItems)
              this.vecOptionValues.push({
                sValue: e.sValue,
                sLocalized: e.sName,
                sLocalizedDescription: e.sTooltip,
              });
          }
          OnStringDropdownChanged(e) {
            p.B$.SetOptionValue(this.props.sOptionName, e),
              this.setState({ sValue: e });
          }
          render() {
            let e = " ";
            for (let t of this.props.vecOptionItems)
              this.state.sValue == t.sValue && (e = t.sTooltip);
            return i.createElement(
              "div",
              { className: "FlexRow SetupLegacyRow" },
              i.createElement(
                m.Ay,
                {
                  content: (0, d.we)(
                    "#BindingUI_Options_" + this.props.sOptionName + "_tooltip",
                  ),
                  theme: "ControllerBindingToolTip",
                },
                i.createElement(
                  "label",
                  { className: "InputOptionLabel" },
                  (0, d.we)(
                    "#BindingUI_Options_" + this.props.sOptionName + "_Label",
                  ),
                ),
              ),
              i.createElement(
                "div",
                { className: "FlexColumn" },
                i.createElement(
                  m.Ay,
                  { content: e, theme: "ControllerBindingToolTip" },
                  i.createElement(
                    "div",
                    null,
                    i.createElement(S, {
                      vecOptions: this.vecOptionValues,
                      sModalClass: "PinTop",
                      sValueSelectedItem: this.state.sValue,
                      fnOptionSelected: this.OnStringDropdownChanged,
                      bReadOnly: this.props.bReadOnly,
                    }),
                  ),
                ),
              ),
            );
          }
        }
        (0, n.Cg)([u.o], Re.prototype, "OnStringDropdownChanged", null);
        class De extends i.Component {
          constructor(e) {
            super(e);
            let t = !1;
            p.B$.HasOptionValue(e.sOptionName)
              ? (t = p.B$.GetOptionValue(e.sOptionName))
              : null != e.bDefaultValue && (t = e.bDefaultValue),
              (this.state = { bValue: t });
          }
          onCheckboxChanged(e) {
            p.B$.SetOptionValue(this.props.sOptionName, e),
              this.setState({ bValue: e });
          }
          render() {
            return i.createElement(
              "div",
              { className: "FlexRow SetupLegacyRow" },
              i.createElement(
                m.Ay,
                {
                  content: (0, d.we)(
                    "#BindingUI_Options_" + this.props.sOptionName + "_tooltip",
                  ),
                  theme: "ControllerBindingToolTip",
                },
                i.createElement(
                  "label",
                  { className: "InputOptionLabel" },
                  (0, d.we)(
                    "#BindingUI_Options_" + this.props.sOptionName + "_Label",
                  ),
                ),
              ),
              i.createElement(
                "div",
                { className: "FlexColumn" },
                i.createElement("input", {
                  id: "BindingOption_" + this.props.sOptionName,
                  type: "checkbox",
                  checked: this.state.bValue,
                  value: this.props.sOptionName,
                  onChange: (e) => {
                    this.onCheckboxChanged(e.target.checked);
                  },
                  disabled: this.props.bReadOnly,
                }),
              ),
            );
          }
        }
        (0, n.Cg)([u.o], De.prototype, "onCheckboxChanged", null);
        var Fe,
          xe = o(5615);
        !(function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Personal = 1)] = "Personal"),
            (e[(e.Public = 2)] = "Public"),
            (e[(e.LocalFile = 3)] = "LocalFile"),
            (e[(e.ReplaceDefault = 4)] = "ReplaceDefault"),
            (e[(e.AddNewDefault = 5)] = "AddNewDefault");
        })(Fe || (Fe = {}));
        let Ge = class extends i.Component {
          constructor(e) {
            super(e),
              (this.m_NameInput = null),
              (this.m_DescriptionInput = null),
              (this.m_bSavedOnce = !1),
              (this.state = { sError: null });
          }
          CloseSaveDialog() {
            this.props.ParentClose();
          }
          GetSaveTypeString(e) {
            switch (e) {
              default:
                return null;
              case Fe.Personal:
                return "personal";
              case Fe.Public:
                return "public";
              case Fe.LocalFile:
                return "local_file";
              case Fe.AddNewDefault:
              case Fe.ReplaceDefault:
                return "replace_default";
            }
          }
          ConfirmBindingName() {
            if (this.m_bSavedOnce) return;
            (this.m_bSavedOnce = !0),
              console.log(
                "Confirmed: ",
                this.m_NameInput.value,
                this.m_DescriptionInput.value,
              );
            let e = this.GetSaveTypeString(this.props.eSaveType);
            e
              ? p.B$.SaveCurrentBinding(
                  this.m_NameInput.value,
                  this.m_DescriptionInput.value,
                  e,
                )
                  .then((e) => {
                    p.B$.SetBindingURL(e.uri), this.CloseSaveDialog();
                  })
                  .catch((e) => {
                    const t = (null == e ? void 0 : e.message)
                      ? null == e
                        ? void 0
                        : e.message
                      : e;
                    console.log("Save failed: ", t),
                      this.setState({ sError: t });
                  })
              : console.error("Invalid save type: ", this.props.eSaveType);
          }
          BindNameInput(e) {
            this.m_NameInput = e;
          }
          BindDescriptionInput(e) {
            this.m_DescriptionInput = e;
          }
          GetUnboundActionItems() {
            const e = p.B$.UnboundActions;
            let t = [];
            for (const o of e) {
              const [e, { vecRequired: n }] = o;
              for (const o of n)
                t.push(
                  `${p.B$.GetActionSetLocalizedNameByName(e)}: ${o.localized_name}`,
                );
            }
            const o = t.length;
            return o > 5 && ((t = t.slice(0, 5)), t.push("+ " + (o - 5))), t;
          }
          render() {
            let e = p.B$.GetDefaultBindingNameForSaveType(
              this.GetSaveTypeString(this.props.eSaveType),
            );
            return i.createElement(
              r.A,
              {
                visible: !0,
                onClose: this.CloseSaveDialog,
                showCloseButton: !1,
                animation: "fade",
                customStyles: { width: "60%", height: "fit-content" },
                className: "BindingChordsModal",
                closeOnEsc: !0,
              },
              i.createElement(
                "div",
                { className: "SaveDialogWrapper FlexColumn" },
                i.createElement(
                  "div",
                  { className: "FlexRow SaveTitleBar" },
                  i.createElement("img", {
                    className:
                      "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                    src: "images/bindingui/icon_download.svg",
                  }),
                  i.createElement(
                    "div",
                    { className: "Label Title TitleCenter AllCaps" },
                    (0, d.we)("#BindingUI_SaveTitle"),
                  ),
                ),
                this.state.sError &&
                  i.createElement(
                    "div",
                    { className: "BindingSaveErrorHeader" },
                    i.createElement(
                      "div",
                      { className: "BindingSaveErrorMessage" },
                      (0, d.we)(this.state.sError),
                    ),
                  ),
                this.props.eSaveType == Fe.Personal &&
                  i.createElement(
                    "div",
                    { className: "Label Title" },
                    (0, d.we)("#BindingUI_Save_Personal"),
                  ),
                this.props.eSaveType == Fe.Public &&
                  i.createElement(
                    "div",
                    { className: "Label Title" },
                    (0, d.we)("#BindingUI_Save_Public"),
                  ),
                this.props.eSaveType == Fe.LocalFile &&
                  i.createElement(
                    "div",
                    { className: "Label Title" },
                    (0, d.we)("#BindingUI_Save_Export"),
                  ),
                (this.props.eSaveType == Fe.ReplaceDefault ||
                  this.props.eSaveType == Fe.AddNewDefault) &&
                  i.createElement(
                    "div",
                    { className: "Label Title" },
                    (0, d.we)("#BindingUI_Save_ReplaceDefault"),
                  ),
                this.props.eSaveType == Fe.AddNewDefault &&
                  i.createElement(
                    "div",
                    { className: "Label" },
                    (0, d.we)("#BindingUI_Save_AddNewDefault"),
                  ),
                i.createElement(
                  "label",
                  { className: "Label", htmlFor: "SaveDialogName" },
                  (0, d.we)("#BindingUI_Binding_Name"),
                  " ",
                ),
                i.createElement("input", {
                  type: "text",
                  defaultValue: e,
                  ref: this.BindNameInput,
                }),
                i.createElement(
                  "label",
                  { className: "Label", htmlFor: "SaveDialogDescription" },
                  (0, d.we)("#BindingUI_Binding_Description"),
                ),
                i.createElement("textarea", {
                  cols: 80,
                  rows: 5,
                  ref: this.BindDescriptionInput,
                  defaultValue: this.props.sDescription,
                  placeholder: (0, d.we)(
                    "BindingUI_SaveDescriptionPlaceholder",
                  ),
                }),
                i.createElement(
                  "div",
                  { className: "FlexRow SaveBottomButtonRow" },
                  i.createElement(
                    "div",
                    {
                      onClick: this.ConfirmBindingName,
                      className: "ButtonControl",
                    },
                    (0, d.we)("#BindingUI_SaveBinding"),
                  ),
                  i.createElement(
                    "div",
                    {
                      onClick: this.CloseSaveDialog,
                      className: "ButtonControl",
                    },
                    (0, d.we)("#Button_Cancel"),
                  ),
                ),
              ),
            );
          }
        };
        (0, n.Cg)([u.o], Ge.prototype, "CloseSaveDialog", null),
          (0, n.Cg)([u.o], Ge.prototype, "ConfirmBindingName", null),
          (0, n.Cg)([u.o], Ge.prototype, "BindNameInput", null),
          (0, n.Cg)([u.o], Ge.prototype, "BindDescriptionInput", null),
          (0, n.Cg)([u.o], Ge.prototype, "GetUnboundActionItems", null),
          (Ge = (0, n.Cg)([s.PA], Ge));
        let Ve = class extends i.Component {
          render() {
            let e = this.props.UnboundActions.vecRequired.map((e, t) =>
                i.createElement(
                  "div",
                  { key: t },
                  (0, d.we)(
                    "#BindingUI_UnboundActions_Required",
                    e.localized_name,
                  ),
                ),
              ),
              t = this.props.UnboundActions.vecSuggested.map((e, t) =>
                i.createElement(
                  "div",
                  { key: t },
                  (0, d.we)(
                    "#BindingUI_UnboundActions_Suggested",
                    e.localized_name,
                  ),
                ),
              ),
              o = "UnboundActionsOverlay";
            return (
              this.props.Visible && (e.length || t.length) && (o += " Visible"),
              this.props.Visible &&
                i.createElement(
                  "div",
                  { className: o },
                  i.createElement(
                    "div",
                    { className: "FlexColumn" },
                    i.createElement(
                      "div",
                      { className: "Label Title" },
                      (0, d.we)("#BindingUI_UnboundActions_Title"),
                    ),
                    e,
                    t,
                  ),
                )
            );
          }
        };
        var He;
        (Ve = (0, n.Cg)([s.PA], Ve)),
          (function (e) {
            (e[(e.ActionSet = 0)] = "ActionSet"),
              (e[(e.LegacySetup = 1)] = "LegacySetup"),
              (e[(e.SecondaryControllerSetup = 2)] =
                "SecondaryControllerSetup");
          })(He || (He = {}));
        let Ue = class extends i.Component {
          constructor(e) {
            super(e),
              (this.state = {
                bDeveloperOutput: !1,
                bShowPoseBindings: !1,
                bShowBindingSettings: !1,
                bBindingUIInMirroredMode: !1,
                bShowHapticsBindings: !1,
                bShowChordBindings: !1,
                bShowOptionsModal: !1,
                eSaveType: Fe.None,
                bShowSelectConfirmModal: !1,
                bShowSkeletonBindings: !1,
                bEditBindingOnSelectConfirm: !1,
                bShowUnboundActionsOverlay: !1,
                vecUnboundActions: { vecRequired: [], vecSuggested: [] },
                eTabType: He.ActionSet,
                bShowConfirmSaveWithUnbound: !1,
                bHasConfirmedSaveWithUnbound: !1,
              });
          }
          OnAppDropdownChanged(e) {
            p.B$.SetSelectedApp(e);
          }
          OnActionSetDropdownChanged(e) {
            this.setState({ eTabType: He.ActionSet }),
              p.B$.SetSelectedActionSet(e);
          }
          ToggleDeveloperOutput() {
            this.setState({ bDeveloperOutput: !this.state.bDeveloperOutput });
          }
          OpenPoseBindingsModal() {
            this.setState({ bShowPoseBindings: !0 });
          }
          ClosePoseBindingsModal() {
            this.setState({ bShowPoseBindings: !1 });
          }
          OpenHapticsBindingsModal() {
            this.setState({ bShowHapticsBindings: !0 });
          }
          CloseHapticsBindingsModal() {
            this.setState({ bShowHapticsBindings: !1 });
          }
          OpenSkeletonBindingsModal() {
            this.setState({ bShowSkeletonBindings: !0 });
          }
          CloseSkeletonBindingsModal() {
            this.setState({ bShowSkeletonBindings: !1 });
          }
          OpenChordBindingsModal() {
            this.setState({ bShowChordBindings: !0 });
          }
          CloseChordBindingsModal() {
            this.setState({ bShowChordBindings: !1 });
          }
          OpenOptionsModal() {
            this.setState({ bShowOptionsModal: !0 });
          }
          CloseOptionsModal() {
            this.setState({ bShowOptionsModal: !1 });
          }
          CloseSaveModal() {
            this.setState({ eSaveType: Fe.None });
          }
          ShowPublicModal() {
            p.B$.HasUnboundActions && !this.state.bHasConfirmedSaveWithUnbound
              ? this.setState({ bShowConfirmSaveWithUnbound: !0 })
              : this.setState({ eSaveType: Fe.Public });
          }
          ShowPersonalModal() {
            p.B$.HasUnboundActions &&
              !this.state.bHasConfirmedSaveWithUnbound &&
              this.setState({ bShowConfirmSaveWithUnbound: !0 }),
              this.setState({ eSaveType: Fe.Personal });
          }
          ShowExportModal() {
            p.B$.HasUnboundActions &&
              !this.state.bHasConfirmedSaveWithUnbound &&
              this.setState({ bShowConfirmSaveWithUnbound: !0 }),
              this.setState({ eSaveType: Fe.LocalFile });
          }
          ShowReplaceDefaultModal() {
            p.B$.HasUnboundActions &&
              !this.state.bHasConfirmedSaveWithUnbound &&
              this.setState({ bShowConfirmSaveWithUnbound: !0 });
            let e =
              null !=
              p.B$.GetSelectedAppDefaultBinding(
                p.B$.SelectedControllerTypeInfo.controller_type,
              );
            this.setState({
              eSaveType: e ? Fe.ReplaceDefault : Fe.AddNewDefault,
            });
          }
          ShowUnboundActionsOverlay(e) {
            this.setState({
              bShowUnboundActionsOverlay: !0,
              vecUnboundActions: e,
            });
          }
          HideUnboundActionsOverlay() {
            this.setState({ bShowUnboundActionsOverlay: !1 });
          }
          SetBindingUIInMirroredMode(e) {
            this.state.bBindingUIInMirroredMode != e &&
              this.setState({ bBindingUIInMirroredMode: e });
          }
          SelectThisBinding(e, t) {
            h.n.Loading = !0;
            let o = p.B$.SelectedControllerTypeInfo;
            p.B$.SelectConfig(
              p.B$.SelectedApp,
              o ? o.controller_type : "",
              e,
            ).then(() => {
              p.B$.ReloadCurrentApp().then(() => {
                t ? h.n.EditCurrentBinding() : h.n.ShowBindingList(),
                  setTimeout(() => {
                    h.n.Loading = !1;
                  }, 1);
              });
            });
          }
          SelectWouldOverwriteAutosave() {
            let e = h.n.CurrentBinding;
            return (
              !!e &&
              this.props.bReadOnlyView && "autosave" == e.type &&
              e.url != p.B$.LoadedBindingURL
            );
          }
          ShouldShowSelectConfirmDialog() {
            return (
              this.ThisConfigNeedsUpgrade() ||
              this.SelectWouldOverwriteAutosave()
            );
          }
          OnSelectBinding(e) {
            this.ShouldShowSelectConfirmDialog()
              ? this.setState({
                  bShowSelectConfirmModal: !0,
                  bEditBindingOnSelectConfirm: e,
                })
              : this.OnSelectConfirmed(p.B$.LoadedBindingURL, e);
          }
          ThisConfigNeedsUpgrade() {
            let e = p.B$.SelectedAppActions;
            return (
              p.B$.CurrentBindingActionManifestVersion <
              e.minimum_required_version
            );
          }
          OnSelectConfirmed(e, t) {
            this.ThisConfigNeedsUpgrade()
              ? (p.B$.PreserveCurrentBindingForUpgrade().then(() => {
                  p.B$.AutosaveBinding();
                }),
                this.OnSelectDone())
              : (this.SelectThisBinding(e, t), this.OnSelectDone());
          }
          OnSelectDone() {
            this.setState({ bShowSelectConfirmModal: !1 });
          }
          OnSaveCurrentBinding(e) {
            let t = h.n.CurrentBinding;
            p.B$.SetBindingURL(t.url),
              p.B$.ReloadControllerConfiguration().then(() => {
                p.B$.SaveCurrentBinding(t.name, t.description, "personal").then(
                  () => {
                    e();
                  },
                );
              });
          }
          renderSelectConfirmModal() {
            let e,
              t = null,
              o = !0,
              n = (0, d.we)("#Button_Discard");
            if (this.ThisConfigNeedsUpgrade()) {
              let i = _.s.GetApp(p.B$.SelectedApp);
              (e = (0, d.we)("#BindingUI_List_Upgrade_Confirm", i.name)),
                (o = this.SelectWouldOverwriteAutosave()),
                o
                  ? (t = (0, d.we)("#BindingUI_List_Select_Confirm_Convert"))
                  : (n = (0, d.we)("#Button_Import"));
            } else e = (0, d.we)("#BindingUI_List_Select_Confirm");
            let l = null;
            return (
              h.n.DesktopMode || (l = { height: "30%", width: "30%" }),
              i.createElement(
                r.A,
                {
                  visible: this.state.bShowSelectConfirmModal,
                  onClose: this.OnSelectDone,
                  showCloseButton: !1,
                  animation: "fade",
                  className: "ModeSettingsModal",
                  closeOnEsc: !0,
                  customStyles: l,
                },
                this.state.bShowSelectConfirmModal &&
                  i.createElement(
                    "div",
                    { className: "FlexFullHeightColumnCentered" },
                    i.createElement(
                      "div",
                      { className: "Label Title" },
                      (0, d.we)("#BindingUI_ConfirmSelect_Title"),
                    ),
                    i.createElement("div", { className: "Label" }, e),
                    t &&
                      i.createElement(
                        "div",
                        { className: "Label SecondRow" },
                        t,
                      ),
                    i.createElement(
                      "div",
                      { className: "FlexRow BottomButtons" },
                      i.createElement(
                        "div",
                        {
                          className: "ButtonControl",
                          onClick: () =>
                            this.OnSelectConfirmed(
                              p.B$.LoadedBindingURL,
                              this.state.bEditBindingOnSelectConfirm,
                            ),
                        },
                        n,
                      ),
                      o &&
                        i.createElement(
                          "div",
                          {
                            className: "ButtonControl",
                            onClick: this.OnSaveClicked,
                          },
                          (0, d.we)("#Button_Save"),
                        ),
                      i.createElement(
                        "div",
                        {
                          className: "ButtonControl",
                          onClick: this.OnSelectDone,
                        },
                        (0, d.we)("#Button_Cancel"),
                      ),
                    ),
                  ),
              )
            );
          }
          renderSaveWithUnboundModal() {
            let e = "";
            p.B$.UnboundRequiredActionStrings.forEach((t) => {
              e += `${t}\n`;
            });
            const t = Math.max(p.B$.UnboundRequiredActionStrings.length, 4);
            return i.createElement(
              r.A,
              {
                visible: this.state.bShowConfirmSaveWithUnbound,
                onClose: this.OnConfirmUnboundCancel,
                showCloseButton: !1,
                animation: "fade",
                className: "BindingChordsModal",
                closeOnEsc: !0,
                customStyles: { height: "fit-content", width: "60%" },
              },
              i.createElement(
                "div",
                { className: "SaveDialogWrapper FlexColumn" },
                i.createElement(
                  "div",
                  { className: "FlexRow SaveTitleBar" },
                  i.createElement("img", {
                    className:
                      "ActionButtonImage ActionButtonImageLarge ChordManageTopButton",
                    src: "images/bindingui/icon_download.svg",
                  }),
                  i.createElement(
                    "div",
                    { className: "Label Title TitleCenter AllCaps" },
                    (0, d.we)("#BindingUI_ConfirmSaveWithUnbound_Title"),
                  ),
                ),
                i.createElement(
                  "label",
                  { className: "Label" },
                  (0, d.we)("#BindingUI_ConfirmSaveWithUnbound_Description"),
                  " ",
                ),
                i.createElement("br", null),
                i.createElement(
                  "label",
                  { className: "Label" },
                  (0, d.we)("#BindingUI_ConfirmSaveWithUnbound_ListUnbound"),
                  " ",
                ),
                i.createElement("textarea", {
                  cols: 80,
                  rows: t,
                  style: { resize: "none", color: "#FF0000" },
                  readOnly: !0,
                  defaultValue: e,
                }),
                i.createElement("br", null),
                i.createElement(
                  "label",
                  { className: "Label" },
                  (0, d.we)("#BindingUI_ConfirmSaveWithUnbound_AreYouSure"),
                  " ",
                ),
                i.createElement(
                  "div",
                  { className: "FlexRow SaveBottomButtonRow" },
                  i.createElement(
                    "div",
                    {
                      className: "ButtonControl",
                      onClick: this.OnConfirmUnboundSave,
                    },
                    (0, d.we)(
                      "#BindingUI_ConfirmSaveWithUnbound_ConfirmButton",
                    ),
                  ),
                  i.createElement(
                    "div",
                    {
                      className: "ButtonControl",
                      onClick: this.OnConfirmUnboundCancel,
                    },
                    (0, d.we)("#Button_Cancel"),
                  ),
                ),
              ),
            );
          }
          OnConfirmUnboundSave() {
            this.setState({
              bShowConfirmSaveWithUnbound: !1,
              bHasConfirmedSaveWithUnbound: !0,
            });
          }
          OnConfirmUnboundCancel() {
            this.setState({
              bShowConfirmSaveWithUnbound: !1,
              eSaveType: Fe.None,
            });
          }
          OnSaveClicked() {
            let e = p.B$.LoadedBindingURL;
            this.OnSaveCurrentBinding(() =>
              this.OnSelectConfirmed(e, this.state.bEditBindingOnSelectConfirm),
            );
          }
          OnLegacySetup() {
            this.setState({ eTabType: He.LegacySetup });
          }
          OnSecondaryControllerSetup() {
            this.setState({ eTabType: He.SecondaryControllerSetup });
          }
          render() {
            let e = p.B$.ActionSets,
              t = e.map((e, t) => {
                let o = "Label Tab PositionRelative",
                  n = new p.Qd();
                p.B$.UnboundActions.has(e.name) &&
                  (n = p.B$.UnboundActions.get(e.name));
                let l = n.vecRequired.length + n.vecSuggested.length;
                return (
                  n.vecRequired.length > 0
                    ? (o += " Error")
                    : n.vecSuggested.length > 0 && (o += " Warning"),
                  e.name == p.B$.SelectedActionSet &&
                    this.state.eTabType == He.ActionSet &&
                    (o += " Selected"),
                  i.createElement(
                    "div",
                    {
                      key: t,
                      className: o,
                      onMouseEnter: () => {
                        this.ShowUnboundActionsOverlay(n);
                      },
                      onMouseLeave: this.HideUnboundActionsOverlay,
                      onClick: () => {
                        this.OnActionSetDropdownChanged(e.name);
                      },
                    },
                    e.localized_name,
                    l > 0 &&
                      i.createElement(
                        "div",
                        { className: "UnboundActionsCount" },
                        l,
                      ),
                  )
                );
              });
            if (
              p.B$.SelectedBindingIsLegacy ||
              p.B$.ManifestOptions.length > 0
            ) {
              let e = "Label Tab PositionRelative";
              this.state.eTabType == He.LegacySetup && (e += " Selected"),
                t.push(
                  i.createElement(
                    "div",
                    {
                      key: "action_aliases",
                      className: e,
                      onClick: this.OnLegacySetup,
                    },
                    (0, d.we)("#LegacySetupTab"),
                  ),
                );
            }
            if (p.B$.IsSecondaryController) {
              let e = "Label Tab PositionRelative";
              this.state.eTabType == He.SecondaryControllerSetup &&
                (e += " Selected"),
                t.push(
                  i.createElement(
                    "div",
                    {
                      key: "action_aliases",
                      className: e,
                      onClick: this.OnSecondaryControllerSetup,
                    },
                    (0, d.we)("#SecondaryControllerTab"),
                  ),
                );
            }
            let o,
              n = !1,
              l = !1;
            p.B$.SelectedControllerTypeInfo &&
              this.state.eTabType == He.ActionSet &&
              ((o = p.B$.SelectedControllerTypeInfo),
              (n = "controller_handed" == o.input_bindingui_mode),
              (l =
                "hmd" == o.input_bindingui_mode ||
                "single_device" == o.input_bindingui_mode));
            let s = this.state.bDeveloperOutput
              ? "Hide Developer output"
              : "Show Developer output";
            const a = {
                width: "60%",
                height: "auto",
                padding: "0px",
                maxHeight: "90%",
              },
              u = {
                width: "fit-content",
                height: "fit-content",
                padding: "0px",
                maxHeight: "90%",
              };
            let m = _.s.GetApp(p.B$.SelectedApp),
              g = "";
            m && (g = m.name);
            let S,
              C = this.props.bReadOnlyView
                ? (0, d.we)("#BindingUI_ViewPageTitle", p.B$.ConfigName)
                : (0, d.we)("#BindingUI_EditPageTitle", p.B$.ConfigName),
              y = "#BindingUI_PageSubTitle",
              f = p.B$.GetOptionValue("variant");
            f &&
              ((S = (0, d.we)("#BindingVariant_" + f)),
              (y = "#BindingUI_PageSubTitle_WithVariant"));
            let b = (0, d.we)(
                y,
                p.B$.SelectedControllerTypeLocalizedName,
                g,
                (0, d.we)(
                  "#BindingUI_BindingType_" + p.B$.CurrentBindingSaveType,
                ),
                S,
              ),
              v = !this.ThisConfigNeedsUpgrade() && this.props.bReadOnlyView,
              A = this.ThisConfigNeedsUpgrade();
            return i.createElement(
              "div",
              { className: "FlexColumn FullPage" },
              i.createElement(
                "div",
                { className: "TopRow FlexColumn" },
                i.createElement(
                  "div",
                  { className: "FlexColumn DescriptionTopRow" },
                  i.createElement(I, {
                    fnOnClick: h.n.ShowBindingList,
                    strTitle: C,
                    strSubTitle: b,
                    fnOpenOptionsModal: this.OpenOptionsModal,
                  }),
                ),
                e.length > 0 &&
                  i.createElement(
                    xe.M,
                    {
                      scrollDirection: xe.D.Horizontal,
                      className: (0, c.FH)("ActionTabContainer", "TabRow"),
                    },
                    t,
                  ),
                this.state.eTabType == He.ActionSet &&
                  i.createElement(Ve, {
                    Visible: this.state.bShowUnboundActionsOverlay,
                    UnboundActions: this.state.vecUnboundActions,
                  }),
                p.B$.SaveNoticeText &&
                  i.createElement(
                    "div",
                    { className: "UnboundActionsOverlay Visible" },
                    (0, d.we)(p.B$.SaveNoticeText),
                  ),
              ),
              n &&
                i.createElement(ge, {
                  bSingleMode: !1,
                  selectedActionSet: p.B$.SelectedActionSetDetails,
                  fnSetMirroredMode: this.SetBindingUIInMirroredMode,
                  fnOpenChordBindingsModal: this.OpenChordBindingsModal,
                  fnOpenHapticsBindingsModal: this.OpenHapticsBindingsModal,
                  fnOpenPoseBindingsModal: this.OpenPoseBindingsModal,
                  fnOpenSkeletonBindingsModal: this.OpenSkeletonBindingsModal,
                  bReadOnly: this.props.bReadOnlyView,
                }),
              l &&
                i.createElement(ge, {
                  bSingleMode: !0,
                  fnOpenChordBindingsModal: this.OpenChordBindingsModal,
                  fnOpenHapticsBindingsModal: this.OpenHapticsBindingsModal,
                  fnOpenPoseBindingsModal: this.OpenPoseBindingsModal,
                  fnOpenSkeletonBindingsModal: this.OpenSkeletonBindingsModal,
                  bReadOnly: this.props.bReadOnlyView,
                }),
              this.state.eTabType == He.LegacySetup &&
                i.createElement(
                  "div",
                  { className: "LegacySetupWrapper" },
                  i.createElement(
                    "div",
                    { className: "LegacySetupContents" },
                    i.createElement(Oe, {
                      readOnly: this.props.bReadOnlyView,
                      options: p.B$.ManifestOptions,
                    }),
                    i.createElement(we, { readOnly: this.props.bReadOnlyView }),
                    i.createElement(Te, { readOnly: this.props.bReadOnlyView }),
                  ),
                ),
              this.state.eTabType == He.SecondaryControllerSetup &&
                i.createElement(
                  "div",
                  { className: "LegacySetupWrapper" },
                  i.createElement(
                    "div",
                    { className: "LegacySetupContents" },
                    i.createElement(Oe, {
                      readOnly: this.props.bReadOnlyView,
                      options: p.B$.SecondaryControllerOptions,
                    }),
                  ),
                ),
              i.createElement(
                "div",
                { className: "BottomButtonRow" },
                i.createElement("hr", { className: "BottomButtonHR" }),
                i.createElement(
                  "div",
                  {
                    className: "BindingManageButtons FlexFullWidthRowCentered",
                  },
                  !this.props.bReadOnlyView &&
                    i.createElement(
                      "div",
                      {
                        className: "FlexColumn ButtonControl SteamRequired",
                        onClick: this.ShowPublicModal,
                      },
                      (0, d.we)("#BindingUI_PublishToWorkshop"),
                    ),
                  !this.props.bReadOnlyView &&
                    i.createElement(
                      "div",
                      {
                        className: "FlexColumn ButtonControl SteamRequired",
                        onClick: this.ShowPersonalModal,
                      },
                      (0, d.we)("#BindingUI_SavePersonal"),
                    ),
                  v &&
                    i.createElement(
                      "div",
                      {
                        className: "FlexColumn ButtonControl",
                        onClick: () => {
                          this.OnSelectBinding(!1);
                        },
                      },
                      (0, d.we)("#BindingUI_SelectThisBinding"),
                    ),
                  v &&
                    i.createElement(
                      "div",
                      {
                        className: "FlexColumn ButtonControl",
                        onClick: () => {
                          this.OnSelectBinding(!0);
                        },
                      },
                      (0, d.we)("#BindingUI_EditThisBinding"),
                    ),
                  A &&
                    i.createElement(
                      "div",
                      {
                        className: "FlexColumn ButtonControl",
                        onClick: () => {
                          this.OnSelectBinding(!0);
                        },
                      },
                      (0, d.we)("#BindingUI_ImportThisBinding"),
                    ),
                  B.W.BDevMode &&
                    i.createElement("div", {
                      className: "BindingManageButtonsHR",
                    }),
                  B.W.BDevMode &&
                    i.createElement(
                      "div",
                      {
                        className: "FlexColumn ButtonControl",
                        onClick: this.ToggleDeveloperOutput,
                      },
                      s,
                    ),
                  B.W.BDevMode &&
                    i.createElement(
                      "div",
                      {
                        className: "FlexColumn ButtonControl",
                        onClick: this.ShowExportModal,
                      },
                      (0, d.we)("#BindingUI_ExportBindingFile"),
                    ),
                  B.W.BDevMode &&
                    !p.B$.SelectedBindingIsLegacy &&
                    !p.B$.SelectedBindingIsOpenXR &&
                    i.createElement(
                      "div",
                      {
                        className: "FlexColumn ButtonControl",
                        onClick: this.ShowReplaceDefaultModal,
                      },
                      (0, d.we)("#BindingUI_ReplaceDefaultFile"),
                    ),
                  p.B$.BSelectedActionSetHasPoses &&
                    i.createElement(
                      r.A,
                      {
                        visible: this.state.bShowPoseBindings,
                        onClose: this.ClosePoseBindingsModal,
                        showCloseButton: !1,
                        animation: "fade",
                        customStyles: a,
                        className: "BindingPosesModal",
                        closeOnEsc: !0,
                      },
                      this.state.bShowPoseBindings &&
                        i.createElement(be, {
                          fnCloseModal: this.ClosePoseBindingsModal,
                          eActionSourceType: _e.Pose,
                          bSingleControllerMode: l,
                          bSlaveSecondaryControllerBinding: !(
                            n && !this.state.bBindingUIInMirroredMode
                          ),
                          bReadOnly: this.props.bReadOnlyView,
                        }),
                    ),
                  p.B$.BSelectedActionSetHasHaptics &&
                    i.createElement(
                      r.A,
                      {
                        visible: this.state.bShowHapticsBindings,
                        onClose: this.CloseHapticsBindingsModal,
                        showCloseButton: !1,
                        animation: "fade",
                        customStyles: a,
                        className: "BindingPosesModal",
                        closeOnEsc: !0,
                      },
                      this.state.bShowHapticsBindings &&
                        i.createElement(be, {
                          fnCloseModal: this.CloseHapticsBindingsModal,
                          eActionSourceType: _e.Haptics,
                          bSingleControllerMode: l,
                          bSlaveSecondaryControllerBinding: !(
                            n && !this.state.bBindingUIInMirroredMode
                          ),
                          bReadOnly: this.props.bReadOnlyView,
                        }),
                    ),
                  p.B$.BSelectedActionSetHasSkeletons &&
                    i.createElement(
                      r.A,
                      {
                        visible: this.state.bShowSkeletonBindings,
                        onClose: this.CloseSkeletonBindingsModal,
                        showCloseButton: !1,
                        animation: "fade",
                        customStyles: a,
                        className: "BindingPosesModal",
                        closeOnEsc: !0,
                      },
                      this.state.bShowSkeletonBindings &&
                        i.createElement(be, {
                          fnCloseModal: this.CloseSkeletonBindingsModal,
                          eActionSourceType: _e.Skeleton,
                          bSingleControllerMode: l,
                          bSlaveSecondaryControllerBinding: !(
                            n && !this.state.bBindingUIInMirroredMode
                          ),
                          bReadOnly: this.props.bReadOnlyView,
                        }),
                    ),
                  i.createElement(
                    r.A,
                    {
                      visible: this.state.bShowChordBindings,
                      onClose: this.CloseChordBindingsModal,
                      showCloseButton: !1,
                      animation: "fade",
                      className: "BindingChordsModal",
                      closeOnEsc: !0,
                      customStyles: u,
                    },
                    this.state.bShowChordBindings &&
                      i.createElement(Ae, {
                        fnCloseModal: this.CloseChordBindingsModal,
                        bReadOnly: this.props.bReadOnlyView,
                      }),
                  ),
                  i.createElement(
                    r.A,
                    {
                      visible: this.state.bShowOptionsModal,
                      onClose: this.CloseOptionsModal,
                      showCloseButton: !1,
                      animation: "fade",
                      className: "BindingChordsModal",
                      closeOnEsc: !0,
                      customStyles: u,
                    },
                    this.state.bShowOptionsModal &&
                      i.createElement(Pe, {
                        fnCloseModal: this.CloseOptionsModal,
                        bReadOnly: this.props.bReadOnlyView,
                      }),
                  ),
                ),
                i.createElement(
                  "div",
                  { className: "DebugButtons FlexFullWidthRowCentered" },
                  this.state.bDeveloperOutput &&
                    i.createElement("textarea", {
                      readOnly: !0,
                      style: { width: "1000px", height: "400px" },
                      value: p.B$.BindingConfig,
                    }),
                ),
              ),
              !this.state.bShowConfirmSaveWithUnbound &&
                this.state.eSaveType != Fe.None &&
                i.createElement(Ge, {
                  sDescription: p.B$.ConfigDescription,
                  eSaveType: this.state.eSaveType,
                  ParentClose: this.CloseSaveModal,
                }),
              !this.state.bShowConfirmSaveWithUnbound &&
                this.renderSelectConfirmModal(),
              this.renderSaveWithUnboundModal(),
            );
          }
        };
        (0, n.Cg)([u.o], Ue.prototype, "OnAppDropdownChanged", null),
          (0, n.Cg)([u.o], Ue.prototype, "OnActionSetDropdownChanged", null),
          (0, n.Cg)([u.o], Ue.prototype, "ToggleDeveloperOutput", null),
          (0, n.Cg)([u.o], Ue.prototype, "OpenPoseBindingsModal", null),
          (0, n.Cg)([u.o], Ue.prototype, "ClosePoseBindingsModal", null),
          (0, n.Cg)([u.o], Ue.prototype, "OpenHapticsBindingsModal", null),
          (0, n.Cg)([u.o], Ue.prototype, "CloseHapticsBindingsModal", null),
          (0, n.Cg)([u.o], Ue.prototype, "OpenSkeletonBindingsModal", null),
          (0, n.Cg)([u.o], Ue.prototype, "CloseSkeletonBindingsModal", null),
          (0, n.Cg)([u.o], Ue.prototype, "OpenChordBindingsModal", null),
          (0, n.Cg)([u.o], Ue.prototype, "CloseChordBindingsModal", null),
          (0, n.Cg)([u.o], Ue.prototype, "OpenOptionsModal", null),
          (0, n.Cg)([u.o], Ue.prototype, "CloseOptionsModal", null),
          (0, n.Cg)([u.o], Ue.prototype, "CloseSaveModal", null),
          (0, n.Cg)([u.o], Ue.prototype, "ShowPublicModal", null),
          (0, n.Cg)([u.o], Ue.prototype, "ShowPersonalModal", null),
          (0, n.Cg)([u.o], Ue.prototype, "ShowExportModal", null),
          (0, n.Cg)([u.o], Ue.prototype, "ShowReplaceDefaultModal", null),
          (0, n.Cg)([u.o], Ue.prototype, "ShowUnboundActionsOverlay", null),
          (0, n.Cg)([u.o], Ue.prototype, "HideUnboundActionsOverlay", null),
          (0, n.Cg)([u.o], Ue.prototype, "SetBindingUIInMirroredMode", null),
          (0, n.Cg)([u.o], Ue.prototype, "SelectThisBinding", null),
          (0, n.Cg)([u.o], Ue.prototype, "OnSelectBinding", null),
          (0, n.Cg)([u.o], Ue.prototype, "OnSelectConfirmed", null),
          (0, n.Cg)([u.o], Ue.prototype, "OnSelectDone", null),
          (0, n.Cg)([u.o], Ue.prototype, "OnSaveCurrentBinding", null),
          (0, n.Cg)([u.o], Ue.prototype, "renderSelectConfirmModal", null),
          (0, n.Cg)([u.o], Ue.prototype, "renderSaveWithUnboundModal", null),
          (0, n.Cg)([u.o], Ue.prototype, "OnConfirmUnboundSave", null),
          (0, n.Cg)([u.o], Ue.prototype, "OnConfirmUnboundCancel", null),
          (0, n.Cg)([u.o], Ue.prototype, "OnSaveClicked", null),
          (0, n.Cg)([u.o], Ue.prototype, "OnLegacySetup", null),
          (0, n.Cg)([u.o], Ue.prototype, "OnSecondaryControllerSetup", null),
          (Ue = (0, n.Cg)([s.PA], Ue));
        let We = class extends i.Component {
          constructor(e) {
            super(e);
          }
          render() {
            h.n.Loading
              ? document.body.classList.add("Loading")
              : document.body.classList.remove("Loading"),
              B.W.IsSteamAvailable
                ? document.body.classList.remove("SteamUnavailable")
                : document.body.classList.add("SteamUnavailable");
            return (
              (0, a.R$)() === a.OH.Overlay &&
                document.body.classList.add("ControllerMainBorderRadius"),
              i.createElement(
                "div",
                { className: "FullPage InputContainer" },
                (h.n.GetUIState == h.k.ViewBinding ||
                  h.n.GetUIState == h.k.EditBinding) &&
                  i.createElement(Ue, {
                    bReadOnlyView: h.n.GetUIState == h.k.ViewBinding,
                  }),
                h.n.GetUIState == h.k.List && i.createElement(M, null),
                h.n.GetUIState == h.k.AppSelect && i.createElement(k, null),
                h.n.GetUIState == h.k.Debugger && i.createElement(V, null),
                h.n.GetUIState == h.k.None && i.createElement("div", null),
                i.createElement(
                  r.A,
                  {
                    visible: p.B$.SteamVRUnavailable,
                    showCloseButton: !1,
                    onClose: () => {},
                    animation: "fade",
                    className: "ModeSettingsModal",
                    closeOnEsc: !1,
                    customStyles: { width: "60%", height: "60%" },
                  },
                  i.createElement(
                    "div",
                    { className: "FlexFullHeightColumnCentered" },
                    i.createElement(
                      "div",
                      { className: "Title Label" },
                      (0, d.we)("#BindingUI_SteamVRUnavailable"),
                    ),
                  ),
                ),
              )
            );
          }
        };
        We = (0, n.Cg)([s.PA], We);
        const $e = document.getElementById("root");
        (0, d.uV)(
          ["bindingui"],
          null === VRHTML || void 0 === VRHTML
            ? void 0
            : VRHTML.GetSteamLanguage(),
        )
          .then(() => H.J.Init())
          .then(() => _.s.Init())
          .then(() => B.W.Init())
          .then(() => U.HR.Init(!1))
          .then(() => p.B$.Init())
          .then(() =>
            (function () {
              return (0, n.sH)(this, void 0, void 0, function* () {
                h.n.SetDesktopMode((0, c.e6)("desktop").length > 0),
                  VRHTML &&
                    !h.n.DesktopMode &&
                    (document.body.parentElement.classList.add("VROverlay"),
                    VRHTML.VROverlay.SetWidthInMeters(
                      VRHTML.VROverlay.ThisOverlayHandle(),
                      3,
                    ),
                    VRHTML.VROverlay.SetFlag(
                      VRHTML.VROverlay.ThisOverlayHandle(),
                      8,
                      !0,
                    ),
                    VRHTML.VROverlay.SetFlag(
                      VRHTML.VROverlay.ThisOverlayHandle(),
                      16777216,
                      !0,
                    ),
                    VRHTML.VROverlay.SetFlag(
                      VRHTML.VROverlay.ThisOverlayHandle(),
                      256,
                      !0,
                    ),
                    VRHTML.VROverlay.SetFlag(
                      VRHTML.VROverlay.ThisOverlayHandle(),
                      131072,
                      !0,
                    ),
                    VRHTML.VROverlay.SetInputMethod(
                      VRHTML.VROverlay.ThisOverlayHandle(),
                      a.Rk.Mouse,
                    ));
                let e = (0, c.e6)("debugger");
                if (null != e && e.length > 0) return void h.n.ShowDebugger();
                let t = (0, c.e6)("app");
                if (null != t && t.length > 0 && _.s.GetApp(t)) {
                  p.B$.SetSelectedApp(t);
                  let e = (0, c.e6)("controller");
                  if (null != e && e.length > 0) {
                    p.B$.SetSelectedController(e);
                    let t = (0, c.e6)("action_set");
                    return (
                      null != t &&
                        t.length > 0 &&
                        p.B$.SetSelectedActionSet("/actions/" + t),
                      void ((0, c.e6)("read_only").length > 0
                        ? h.n.ViewCurrentBinding()
                        : h.n.EditCurrentBinding())
                    );
                  }
                  h.n.ShowBindingList();
                } else h.n.ShowAppSelect();
              });
            })(),
          )
          .then(() => h.n.Init())
          .then(() => {
            var e;
            (e = We), l.H($e).render(i.createElement(e, null));
          })
          .catch((e) => console.log("FAILED TO INITIALIZE BINDINGUI " + e));
      },
    },
    o = {};
  function n(e) {
    var i = o[e];
    if (void 0 !== i) return i.exports;
    var l = (o[e] = { exports: {} });
    return t[e].call(l.exports, l, l.exports, n), l.exports;
  }
  (n.m = t),
    (e = []),
    (n.O = (t, o, i, l) => {
      if (!o) {
        var s = 1 / 0;
        for (d = 0; d < e.length; d++) {
          for (var [o, i, l] = e[d], r = !0, a = 0; a < o.length; a++)
            (!1 & l || s >= l) && Object.keys(n.O).every((e) => n.O[e](o[a]))
              ? o.splice(a--, 1)
              : ((r = !1), l < s && (s = l));
          if (r) {
            e.splice(d--, 1);
            var c = i();
            void 0 !== c && (t = c);
          }
        }
        return t;
      }
      l = l || 0;
      for (var d = e.length; d > 0 && e[d - 1][2] > l; d--) e[d] = e[d - 1];
      e[d] = [o, i, l];
    }),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (n.d = (e, t) => {
      for (var o in t)
        n.o(t, o) &&
          !n.o(e, o) &&
          Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
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
    (n.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e = { 600: 0, 452: 0, 527: 0 };
      n.O.j = (t) => 0 === e[t];
      var t = (t, o) => {
          var i,
            l,
            [s, r, a] = o,
            c = 0;
          if (s.some((t) => 0 !== e[t])) {
            for (i in r) n.o(r, i) && (n.m[i] = r[i]);
            if (a) var d = a(n);
          }
          for (t && t(o); c < s.length; c++)
            (l = s[c]), n.o(e, l) && e[l] && e[l][0](), (e[l] = 0);
          return n.O(d);
        },
        o = (self.webpackChunkvrwebui = self.webpackChunkvrwebui || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })();
  var i = n.O(void 0, [967, 991, 908, 305, 527, 170, 797, 906, 204], () =>
    n(9424),
  );
  i = n.O(i);
})(); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/controllerbindingui.js.map
