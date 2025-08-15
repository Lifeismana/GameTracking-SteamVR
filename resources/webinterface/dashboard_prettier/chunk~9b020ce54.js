var CLSTAMP = "9979804";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [542],
  {
    5287: (e, t) => {
      var r = Symbol.for("react.element"),
        n = Symbol.for("react.portal"),
        o = Symbol.for("react.fragment"),
        i = Symbol.for("react.strict_mode"),
        s = Symbol.for("react.profiler"),
        l = Symbol.for("react.provider"),
        a = Symbol.for("react.context"),
        p = Symbol.for("react.forward_ref"),
        u = Symbol.for("react.suspense"),
        c = Symbol.for("react.memo"),
        d = Symbol.for("react.lazy"),
        h = Symbol.iterator;
      var f = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        m = Object.assign,
        _ = {};
      function v(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = _),
          (this.updater = r || f);
      }
      function y() {}
      function g(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = _),
          (this.updater = r || f);
      }
      (v.prototype.isReactComponent = {}),
        (v.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
            );
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (v.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (y.prototype = v.prototype);
      var b = (g.prototype = new y());
      (b.constructor = g), m(b, v.prototype), (b.isPureReactComponent = !0);
      var w = Array.isArray,
        x = Object.prototype.hasOwnProperty,
        k = { current: null },
        E = { key: !0, ref: !0, __self: !0, __source: !0 };
      function C(e, t, n) {
        var o,
          i = {},
          s = null,
          l = null;
        if (null != t)
          for (o in (void 0 !== t.ref && (l = t.ref),
          void 0 !== t.key && (s = "" + t.key),
          t))
            x.call(t, o) && !E.hasOwnProperty(o) && (i[o] = t[o]);
        var a = arguments.length - 2;
        if (1 === a) i.children = n;
        else if (1 < a) {
          for (var p = Array(a), u = 0; u < a; u++) p[u] = arguments[u + 2];
          i.children = p;
        }
        if (e && e.defaultProps)
          for (o in (a = e.defaultProps)) void 0 === i[o] && (i[o] = a[o]);
        return {
          $$typeof: r,
          type: e,
          key: s,
          ref: l,
          props: i,
          _owner: k.current,
        };
      }
      function R(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r;
      }
      var O = /\/+/g;
      function S(e, t) {
        return "object" == typeof e && null !== e && null != e.key
          ? (function (e) {
              var t = { "=": "=0", ":": "=2" };
              return (
                "$" +
                e.replace(/[=:]/g, function (e) {
                  return t[e];
                })
              );
            })("" + e.key)
          : t.toString(36);
      }
      function P(e, t, o, i, s) {
        var l = typeof e;
        ("undefined" !== l && "boolean" !== l) || (e = null);
        var a = !1;
        if (null === e) a = !0;
        else
          switch (l) {
            case "string":
            case "number":
              a = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case r:
                case n:
                  a = !0;
              }
          }
        if (a)
          return (
            (s = s((a = e))),
            (e = "" === i ? "." + S(a, 0) : i),
            w(s)
              ? ((o = ""),
                null != e && (o = e.replace(O, "$&/") + "/"),
                P(s, t, o, "", function (e) {
                  return e;
                }))
              : null != s &&
                (R(s) &&
                  (s = (function (e, t) {
                    return {
                      $$typeof: r,
                      type: e.type,
                      key: t,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner,
                    };
                  })(
                    s,
                    o +
                      (!s.key || (a && a.key === s.key)
                        ? ""
                        : ("" + s.key).replace(O, "$&/") + "/") +
                      e,
                  )),
                t.push(s)),
            1
          );
        if (((a = 0), (i = "" === i ? "." : i + ":"), w(e)))
          for (var p = 0; p < e.length; p++) {
            var u = i + S((l = e[p]), p);
            a += P(l, t, o, u, s);
          }
        else if (
          ((u = (function (e) {
            return null === e || "object" != typeof e
              ? null
              : "function" == typeof (e = (h && e[h]) || e["@@iterator"])
                ? e
                : null;
          })(e)),
          "function" == typeof u)
        )
          for (e = u.call(e), p = 0; !(l = e.next()).done; )
            a += P((l = l.value), t, o, (u = i + S(l, p++)), s);
        else if ("object" === l)
          throw (
            ((t = String(e)),
            Error(
              "Objects are not valid as a React child (found: " +
                ("[object Object]" === t
                  ? "object with keys {" + Object.keys(e).join(", ") + "}"
                  : t) +
                "). If you meant to render a collection of children, use an array instead.",
            ))
          );
        return a;
      }
      function B(e, t, r) {
        if (null == e) return e;
        var n = [],
          o = 0;
        return (
          P(e, n, "", "", function (e) {
            return t.call(r, e, o++);
          }),
          n
        );
      }
      function M(e) {
        if (-1 === e._status) {
          var t = e._result;
          (t = t()).then(
            function (t) {
              (0 !== e._status && -1 !== e._status) ||
                ((e._status = 1), (e._result = t));
            },
            function (t) {
              (0 !== e._status && -1 !== e._status) ||
                ((e._status = 2), (e._result = t));
            },
          ),
            -1 === e._status && ((e._status = 0), (e._result = t));
        }
        if (1 === e._status) return e._result.default;
        throw e._result;
      }
      var U = { current: null },
        I = { transition: null },
        V = {
          ReactCurrentDispatcher: U,
          ReactCurrentBatchConfig: I,
          ReactCurrentOwner: k,
        };
      function L() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      (t.Children = {
        map: B,
        forEach: function (e, t, r) {
          B(
            e,
            function () {
              t.apply(this, arguments);
            },
            r,
          );
        },
        count: function (e) {
          var t = 0;
          return (
            B(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            B(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!R(e))
            throw Error(
              "React.Children.only expected to receive a single React element child.",
            );
          return e;
        },
      }),
        (t.Component = v),
        (t.Fragment = o),
        (t.Profiler = s),
        (t.PureComponent = g),
        (t.StrictMode = i),
        (t.Suspense = u),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = V),
        (t.act = L),
        (t.cloneElement = function (e, t, n) {
          if (null == e)
            throw Error(
              "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                ".",
            );
          var o = m({}, e.props),
            i = e.key,
            s = e.ref,
            l = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((s = t.ref), (l = k.current)),
              void 0 !== t.key && (i = "" + t.key),
              e.type && e.type.defaultProps)
            )
              var a = e.type.defaultProps;
            for (p in t)
              x.call(t, p) &&
                !E.hasOwnProperty(p) &&
                (o[p] = void 0 === t[p] && void 0 !== a ? a[p] : t[p]);
          }
          var p = arguments.length - 2;
          if (1 === p) o.children = n;
          else if (1 < p) {
            a = Array(p);
            for (var u = 0; u < p; u++) a[u] = arguments[u + 2];
            o.children = a;
          }
          return {
            $$typeof: r,
            type: e.type,
            key: i,
            ref: s,
            props: o,
            _owner: l,
          };
        }),
        (t.createContext = function (e) {
          return (
            ((e = {
              $$typeof: a,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
              _defaultValue: null,
              _globalName: null,
            }).Provider = { $$typeof: l, _context: e }),
            (e.Consumer = e)
          );
        }),
        (t.createElement = C),
        (t.createFactory = function (e) {
          var t = C.bind(null, e);
          return (t.type = e), t;
        }),
        (t.createRef = function () {
          return { current: null };
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: p, render: e };
        }),
        (t.isValidElement = R),
        (t.lazy = function (e) {
          return {
            $$typeof: d,
            _payload: { _status: -1, _result: e },
            _init: M,
          };
        }),
        (t.memo = function (e, t) {
          return { $$typeof: c, type: e, compare: void 0 === t ? null : t };
        }),
        (t.startTransition = function (e) {
          var t = I.transition;
          I.transition = {};
          try {
            e();
          } finally {
            I.transition = t;
          }
        }),
        (t.unstable_act = L),
        (t.useCallback = function (e, t) {
          return U.current.useCallback(e, t);
        }),
        (t.useContext = function (e) {
          return U.current.useContext(e);
        }),
        (t.useDebugValue = function () {}),
        (t.useDeferredValue = function (e) {
          return U.current.useDeferredValue(e);
        }),
        (t.useEffect = function (e, t) {
          return U.current.useEffect(e, t);
        }),
        (t.useId = function () {
          return U.current.useId();
        }),
        (t.useImperativeHandle = function (e, t, r) {
          return U.current.useImperativeHandle(e, t, r);
        }),
        (t.useInsertionEffect = function (e, t) {
          return U.current.useInsertionEffect(e, t);
        }),
        (t.useLayoutEffect = function (e, t) {
          return U.current.useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return U.current.useMemo(e, t);
        }),
        (t.useReducer = function (e, t, r) {
          return U.current.useReducer(e, t, r);
        }),
        (t.useRef = function (e) {
          return U.current.useRef(e);
        }),
        (t.useState = function (e) {
          return U.current.useState(e);
        }),
        (t.useSyncExternalStore = function (e, t, r) {
          return U.current.useSyncExternalStore(e, t, r);
        }),
        (t.useTransition = function () {
          return U.current.useTransition();
        }),
        (t.version = "18.3.1");
    },
    9864: (e, t, r) => {
      r.d(t, { m: () => s });
      var n,
        o = r(6540),
        i = r(3496);
      !(function (e) {
        (e[(e.LockedToParent = 0)] = "LockedToParent"),
          (e[(e.LockedToWorld = 1)] = "LockedToWorld");
      })(n || (n = {}));
      class s extends i._J {
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
          return o.createElement(
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
            this.props.children,
          );
        }
      }
    },
    7019: (e, t, r) => {
      r.d(t, {
        Fi: () => s,
        Lr: () => m,
        MQ: () => i,
        Oi: () => n,
        Zk: () => _,
        _h: () => o,
      });
      var n,
        o,
        i,
        s,
        l,
        a = r(1635),
        p = r(6540),
        u = r(3496),
        c = r(5178),
        d = r(3236),
        h = r(5723);
      function f(e) {
        if (e) return [e.u, e.v];
      }
      function m(e) {
        switch (e) {
          case n.TopLeft:
            return { x: -1, y: 1 };
          case n.TopCenter:
            return { x: 0, y: 1 };
          case n.TopRight:
            return { x: 1, y: 1 };
          case n.CenterLeft:
            return { x: -1, y: 0 };
          case n.Center:
            return { x: 0, y: 0 };
          case n.CenterRight:
            return { x: 1, y: 0 };
          case n.BottomLeft:
            return { x: -1, y: -1 };
          case n.BottomCenter:
            return { x: 0, y: -1 };
          case n.BottomRight:
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
      })(n || (n = {})),
        (function (e) {
          (e[(e.Auto = 0)] = "Auto"), (e[(e.SingleTap = 1)] = "SingleTap");
        })(o || (o = {})),
        (function (e) {
          (e[(e.Mono = 0)] = "Mono"),
            (e[(e.Parallel = 1)] = "Parallel"),
            (e[(e.Crossed = 2)] = "Crossed"),
            (e[(e.Panorama = 3)] = "Panorama"),
            (e[(e.StackedPanorama = 4)] = "StackedPanorama");
        })(i || (i = {})),
        (function (e) {
          (e[(e.Visible = 0)] = "Visible"),
            (e[(e.SkipInSceneGraph = 1)] = "SkipInSceneGraph"),
            (e[(e.Hidden = 2)] = "Hidden"),
            (e[(e.InvisibleButIntersectable = 3)] =
              "InvisibleButIntersectable");
        })(s || (s = {})),
        (function (e) {
          (e[(e.Default = 0)] = "Default"),
            (e[(e.Disabled = 1)] = "Disabled"),
            (e[(e.Low = 2)] = "Low");
        })(l || (l = {}));
      class _ extends u._J {
        constructor(e) {
          super(e),
            (this.m_Rect = { x: 0, y: 0, width: 0, height: 0 }),
            (this.m_nEmbeddedIndex = null),
            (this.m_resizeObserver = null),
            (this.m_UVsMin = void 0),
            (this.m_UVsMax = void 0),
            (this.m_bOverdragBlocking = !1),
            (this.m_overdragBlockingElements = []);
          const t = void 0 !== this.props.width || void 0 !== this.props.height,
            r = void 0 !== this.props.meters_per_pixel,
            n = void 0 !== this.props.target_dpi_panel_id,
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
          const i = [t, r, n, o].filter((e) => e).length,
            s =
              "an (explicit width and/or height), an explicit meters_per_pixel, a target_panel_dpi panel ID, or a rendermodel name";
          if (0 == i)
            throw new Error(`Panel requires one of the following props: ${s}.`);
          if (i > 1)
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
          _.s_bPanelsAreDirty = !0;
        }
        componentDidMount() {
          super.componentDidMount(),
            (this.m_resizeObserver = new ResizeObserver(this.onResizeObserved)),
            this.m_resizeObserver.observe(this.getCurrentRootElement()),
            (this.m_nEmbeddedIndex = c.O.Current().addEmbeddedPanelUVs(this)),
            (_.s_bPanelsAreDirty = !0),
            this.getCurrentRootElement().addEventListener(
              "mousedown",
              this.onPanelMouseDown,
            ),
            this.forceUpdate();
        }
        onResizeObserved(e, t) {
          c.O.Current().forceLayoutUpdate();
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
            (_.s_bPanelsAreDirty = !0),
            c.O.Current().removeEmbeddedPanelUVs(this),
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
        createOverdragBlockingElement(e, t, r, n) {
          let o = document.createElement("div");
          (o.style.position = "absolute"),
            (o.style.top = t + "px"),
            (o.style.left = e + "px"),
            (o.style.width = r + "px"),
            (o.style.height = n + "px"),
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
            : s.Visible;
        }
        buildNode(e, t) {
          var r, n, o, i, l, a, p;
          if (
            !(
              this.visibility == s.Visible ||
              this.visibility == s.InvisibleButIntersectable
            )
          )
            return [e, null];
          let c = Object.assign(Object.assign({}, e), {
              bInsideReparentedPanel: !1,
              currentPanel: this,
            }),
            d = this.createSgNode(t),
            _ = { x: 0, y: 0 };
          _ =
            "object" == typeof this.props.origin
              ? (0, u.PG)(this.props.origin, { x: 0, y: 0 })
              : m(this.props.origin);
          const v = this.props.overlay_key,
            y = (0, h.w5)();
          return (
            v && v.length > 0
              ? (d.properties.key = v)
              : y
                ? (d.properties.key = y)
                : (d.properties.overlay_handle = (0, h.X4)()),
            (d.properties.uv_min =
              null !== (r = f(this.m_UVsMin)) && void 0 !== r ? r : void 0),
            (d.properties.uv_max =
              null !== (n = f(this.m_UVsMax)) && void 0 !== n ? n : void 0),
            (d.properties.width =
              null !== (o = this.props.width) && void 0 !== o ? o : void 0),
            (d.properties.height =
              null !== (i = this.props.height) && void 0 !== i ? i : void 0),
            (d.properties["scale-index"] =
              null !== (l = this.props.scale_index) && void 0 !== l ? l : 0),
            (d.properties["min-width"] =
              null !== (a = this.props.min_width) && void 0 !== a ? a : void 0),
            (d.properties["target-width-anchor-id"] = (0, h.bl)(
              this.props.target_width_anchor_id,
            )),
            (d.properties["target-dpi-panel-id"] = (0, h.bl)(
              this.props.target_dpi_panel_id,
            )),
            (d.properties["target-dpi-multiplier"] =
              this.props.target_dpi_multiplier),
            (d.properties["meters-per-pixel"] = this.props.meters_per_pixel),
            (d.properties["subview-parent-panel-key"] =
              this.props.subview_parent_panel_key),
            (d.properties.curvature = this.props.curvature),
            (d.properties["curvature-origin-id"] = (0, h.bl)(
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
            (d.properties["lasermouse-filtering"] =
              null === (p = this.props) || void 0 === p
                ? void 0
                : p.lasermouse_filtering),
            (d.properties["hide-laser-when-clicking"] =
              this.props.hide_lasermouse_when_clicking),
            (d.properties["make-overlays-interactive-if-visible"] =
              this.props.make_overlays_interactive_if_visible),
            (d.properties["is-grab-handle"] = this.props.is_grab_handle),
            (d.properties["embedded-uv-index"] = this.m_nEmbeddedIndex),
            (d.properties.origin = (0, u.Hm)(_)),
            (d.properties.debug_name = this.props.debug_name),
            (d.properties.sampler = this.props.sampler),
            (d.properties.reflect = this.props.reflect),
            (d.properties.stereoscopy = this.props.stereoscopy),
            (d.properties.rendermodel_component_device_index =
              this.props.rendermodel_component_device_index),
            (d.properties.rendermodel_component_name =
              this.props.rendermodel_component_name),
            (d.properties["texture-id"] = (0, h.bl)(this.props.texture_id)),
            (d.properties["sort-order"] = this.props.sort_order),
            (d.properties["sort-depth-bias"] = this.props.sort_depth_bias),
            (d.properties.visibility = this.visibility),
            [c, d]
          );
        }
        scaleLocalUVToGlobal(e) {
          const t = this.m_UVsMax.u - this.m_UVsMin.u,
            r = this.m_UVsMax.v - this.m_UVsMin.v;
          return { u: this.m_UVsMin.u + t * e.u, v: this.m_UVsMin.v + r * e.v };
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
          return p.createElement(
            "vsg-node",
            { style: { display: this.visibility == s.Hidden ? "none" : null } },
            this.props.children,
          );
        }
      }
      (_.s_bPanelsAreDirty = !1),
        (0, a.Cg)([d.o], _.prototype, "onResizeObserved", null),
        (0, a.Cg)([d.o], _.prototype, "onPanelMouseDown", null),
        (0, a.Cg)([d.o], _.prototype, "onWindowMouseUp", null),
        (0, a.Cg)([d.o], _.prototype, "buildNode", null);
    },
  },
]); //# sourceMappingURL=file:///c:/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~9b020ce54.js.map
