var CLSTAMP = "10151575";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [542],
  {
    5287: (e, t) => {
      var r = Symbol.for("react.element"),
        n = Symbol.for("react.portal"),
        o = Symbol.for("react.fragment"),
        i = Symbol.for("react.strict_mode"),
        s = Symbol.for("react.profiler"),
        a = Symbol.for("react.provider"),
        l = Symbol.for("react.context"),
        u = Symbol.for("react.forward_ref"),
        p = Symbol.for("react.suspense"),
        d = Symbol.for("react.memo"),
        c = Symbol.for("react.lazy"),
        h = Symbol.iterator;
      var _ = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        m = Object.assign,
        f = {};
      function v(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = f),
          (this.updater = r || _);
      }
      function g() {}
      function y(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = f),
          (this.updater = r || _);
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
        (g.prototype = v.prototype);
      var S = (y.prototype = new g());
      (S.constructor = y), m(S, v.prototype), (S.isPureReactComponent = !0);
      var b = Array.isArray,
        R = Object.prototype.hasOwnProperty,
        C = { current: null },
        k = { key: !0, ref: !0, __self: !0, __source: !0 };
      function w(e, t, n) {
        var o,
          i = {},
          s = null,
          a = null;
        if (null != t)
          for (o in (void 0 !== t.ref && (a = t.ref),
          void 0 !== t.key && (s = "" + t.key),
          t))
            R.call(t, o) && !k.hasOwnProperty(o) && (i[o] = t[o]);
        var l = arguments.length - 2;
        if (1 === l) i.children = n;
        else if (1 < l) {
          for (var u = Array(l), p = 0; p < l; p++) u[p] = arguments[p + 2];
          i.children = u;
        }
        if (e && e.defaultProps)
          for (o in (l = e.defaultProps)) void 0 === i[o] && (i[o] = l[o]);
        return {
          $$typeof: r,
          type: e,
          key: s,
          ref: a,
          props: i,
          _owner: C.current,
        };
      }
      function E(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r;
      }
      var O = /\/+/g;
      function P(e, t) {
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
      function M(e, t, o, i, s) {
        var a = typeof e;
        ("undefined" !== a && "boolean" !== a) || (e = null);
        var l = !1;
        if (null === e) l = !0;
        else
          switch (a) {
            case "string":
            case "number":
              l = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case r:
                case n:
                  l = !0;
              }
          }
        if (l)
          return (
            (s = s((l = e))),
            (e = "" === i ? "." + P(l, 0) : i),
            b(s)
              ? ((o = ""),
                null != e && (o = e.replace(O, "$&/") + "/"),
                M(s, t, o, "", function (e) {
                  return e;
                }))
              : null != s &&
                (E(s) &&
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
                      (!s.key || (l && l.key === s.key)
                        ? ""
                        : ("" + s.key).replace(O, "$&/") + "/") +
                      e,
                  )),
                t.push(s)),
            1
          );
        if (((l = 0), (i = "" === i ? "." : i + ":"), b(e)))
          for (var u = 0; u < e.length; u++) {
            var p = i + P((a = e[u]), u);
            l += M(a, t, o, p, s);
          }
        else if (
          ((p = (function (e) {
            return null === e || "object" != typeof e
              ? null
              : "function" == typeof (e = (h && e[h]) || e["@@iterator"])
                ? e
                : null;
          })(e)),
          "function" == typeof p)
        )
          for (e = p.call(e), u = 0; !(a = e.next()).done; )
            l += M((a = a.value), t, o, (p = i + P(a, u++)), s);
        else if ("object" === a)
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
        return l;
      }
      function x(e, t, r) {
        if (null == e) return e;
        var n = [],
          o = 0;
        return (
          M(e, n, "", "", function (e) {
            return t.call(r, e, o++);
          }),
          n
        );
      }
      function I(e) {
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
      var B = { current: null },
        T = { transition: null },
        D = {
          ReactCurrentDispatcher: B,
          ReactCurrentBatchConfig: T,
          ReactCurrentOwner: C,
        };
      function V() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      (t.Children = {
        map: x,
        forEach: function (e, t, r) {
          x(
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
            x(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            x(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!E(e))
            throw Error(
              "React.Children.only expected to receive a single React element child.",
            );
          return e;
        },
      }),
        (t.Component = v),
        (t.Fragment = o),
        (t.Profiler = s),
        (t.PureComponent = y),
        (t.StrictMode = i),
        (t.Suspense = p),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D),
        (t.act = V),
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
            a = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((s = t.ref), (a = C.current)),
              void 0 !== t.key && (i = "" + t.key),
              e.type && e.type.defaultProps)
            )
              var l = e.type.defaultProps;
            for (u in t)
              R.call(t, u) &&
                !k.hasOwnProperty(u) &&
                (o[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u]);
          }
          var u = arguments.length - 2;
          if (1 === u) o.children = n;
          else if (1 < u) {
            l = Array(u);
            for (var p = 0; p < u; p++) l[p] = arguments[p + 2];
            o.children = l;
          }
          return {
            $$typeof: r,
            type: e.type,
            key: i,
            ref: s,
            props: o,
            _owner: a,
          };
        }),
        (t.createContext = function (e) {
          return (
            ((e = {
              $$typeof: l,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
              _defaultValue: null,
              _globalName: null,
            }).Provider = { $$typeof: a, _context: e }),
            (e.Consumer = e)
          );
        }),
        (t.createElement = w),
        (t.createFactory = function (e) {
          var t = w.bind(null, e);
          return (t.type = e), t;
        }),
        (t.createRef = function () {
          return { current: null };
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: u, render: e };
        }),
        (t.isValidElement = E),
        (t.lazy = function (e) {
          return {
            $$typeof: c,
            _payload: { _status: -1, _result: e },
            _init: I,
          };
        }),
        (t.memo = function (e, t) {
          return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
        }),
        (t.startTransition = function (e) {
          var t = T.transition;
          T.transition = {};
          try {
            e();
          } finally {
            T.transition = t;
          }
        }),
        (t.unstable_act = V),
        (t.useCallback = function (e, t) {
          return B.current.useCallback(e, t);
        }),
        (t.useContext = function (e) {
          return B.current.useContext(e);
        }),
        (t.useDebugValue = function () {}),
        (t.useDeferredValue = function (e) {
          return B.current.useDeferredValue(e);
        }),
        (t.useEffect = function (e, t) {
          return B.current.useEffect(e, t);
        }),
        (t.useId = function () {
          return B.current.useId();
        }),
        (t.useImperativeHandle = function (e, t, r) {
          return B.current.useImperativeHandle(e, t, r);
        }),
        (t.useInsertionEffect = function (e, t) {
          return B.current.useInsertionEffect(e, t);
        }),
        (t.useLayoutEffect = function (e, t) {
          return B.current.useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return B.current.useMemo(e, t);
        }),
        (t.useReducer = function (e, t, r) {
          return B.current.useReducer(e, t, r);
        }),
        (t.useRef = function (e) {
          return B.current.useRef(e);
        }),
        (t.useState = function (e) {
          return B.current.useState(e);
        }),
        (t.useSyncExternalStore = function (e, t, r) {
          return B.current.useSyncExternalStore(e, t, r);
        }),
        (t.useTransition = function () {
          return B.current.useTransition();
        }),
        (t.version = "18.3.1");
    },
    6540: (e, t, r) => {
      e.exports = r(5287);
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
        Lr: () => f,
        MQ: () => i,
        Oi: () => n,
        Zk: () => v,
        _h: () => o,
      });
      var n,
        o,
        i,
        s,
        a,
        l = r(1635),
        u = r(6540),
        p = r(3496),
        d = r(5178),
        c = r(3236),
        h = r(5723),
        _ = r(7600);
      function m(e) {
        if (e) return [e.u, e.v];
      }
      function f(e) {
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
        })(a || (a = {}));
      class v extends p._J {
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
          v.s_bPanelsAreDirty = !0;
        }
        componentDidMount() {
          super.componentDidMount(),
            (this.m_resizeObserver = new ResizeObserver(this.onResizeObserved)),
            this.m_resizeObserver.observe(this.getCurrentRootElement()),
            (this.m_nEmbeddedIndex = d.O.Current().addEmbeddedPanelUVs(this)),
            (v.s_bPanelsAreDirty = !0),
            this.getCurrentRootElement().addEventListener(
              "mousedown",
              this.onPanelMouseDown,
            ),
            this.forceUpdate();
        }
        onResizeObserved(e, t) {
          d.O.Current().forceLayoutUpdate();
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
            (v.s_bPanelsAreDirty = !0),
            d.O.Current().removeEmbeddedPanelUVs(this),
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
          var r, n, o, i, a, l, u;
          if (
            !(
              this.visibility == s.Visible ||
              this.visibility == s.InvisibleButIntersectable
            )
          )
            return [e, null];
          let d = Object.assign(Object.assign({}, e), {
              bInsideReparentedPanel: !1,
              currentPanel: this,
            }),
            c = this.createSgNode(t),
            _ = { x: 0, y: 0 };
          _ =
            "object" == typeof this.props.origin
              ? (0, p.PG)(this.props.origin, { x: 0, y: 0 })
              : f(this.props.origin);
          const v = this.props.overlay_key,
            g = (0, h.w5)();
          return (
            v && v.length > 0
              ? (c.properties.key = v)
              : g
                ? (c.properties.key = g)
                : (c.properties.overlay_handle = (0, h.X4)()),
            (c.properties.uv_min =
              null !== (r = m(this.m_UVsMin)) && void 0 !== r ? r : void 0),
            (c.properties.uv_max =
              null !== (n = m(this.m_UVsMax)) && void 0 !== n ? n : void 0),
            (c.properties.width =
              null !== (o = this.props.width) && void 0 !== o ? o : void 0),
            (c.properties.height =
              null !== (i = this.props.height) && void 0 !== i ? i : void 0),
            (c.properties["scale-index"] =
              null !== (a = this.props.scale_index) && void 0 !== a ? a : 0),
            (c.properties["min-width"] =
              null !== (l = this.props.min_width) && void 0 !== l ? l : void 0),
            (c.properties["target-width-anchor-id"] = (0, h.bl)(
              this.props.target_width_anchor_id,
            )),
            (c.properties["target-dpi-panel-id"] = (0, h.bl)(
              this.props.target_dpi_panel_id,
            )),
            (c.properties["target-dpi-multiplier"] =
              this.props.target_dpi_multiplier),
            (c.properties["meters-per-pixel"] = this.props.meters_per_pixel),
            (c.properties["subview-parent-panel-key"] =
              this.props.subview_parent_panel_key),
            (c.properties.curvature = this.props.curvature),
            (c.properties["curvature-origin-id"] = (0, h.bl)(
              this.props.curvature_origin_id,
            )),
            (c.properties.spherical = this.props.spherical),
            (c.properties.interactive = this.props.interactive),
            (c.properties.scrollable = this.props.scrollable),
            (c.properties.undocked = this.props.undocked),
            (c.properties.modal = this.props.modal),
            (c.properties["requires-laser"] = this.props.requires_laser),
            (c.properties["allow-input-capture"] =
              this.props.allow_input_capture),
            (c.properties["lasermouse-filtering"] =
              null === (u = this.props) || void 0 === u
                ? void 0
                : u.lasermouse_filtering),
            (c.properties["hide-laser-when-clicking"] =
              this.props.hide_lasermouse_when_clicking),
            (c.properties["make-overlays-interactive-if-visible"] =
              this.props.make_overlays_interactive_if_visible),
            (c.properties["is-grab-handle"] = this.props.is_grab_handle),
            (c.properties["embedded-uv-index"] = this.m_nEmbeddedIndex),
            (c.properties.origin = (0, p.Hm)(_)),
            (c.properties.debug_name = this.props.debug_name),
            (c.properties.sampler = this.props.sampler),
            (c.properties.reflect = this.props.reflect),
            (c.properties.stereoscopy = this.props.stereoscopy),
            (c.properties.rendermodel_component_device_index =
              this.props.rendermodel_component_device_index),
            (c.properties.rendermodel_component_name =
              this.props.rendermodel_component_name),
            (c.properties["texture-id"] = (0, h.bl)(this.props.texture_id)),
            (c.properties["sort-order"] = this.props.sort_order),
            (c.properties["sort-depth-bias"] = this.props.sort_depth_bias),
            (c.properties.visibility = this.visibility),
            [d, c]
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
        PanelContextValue() {
          return this;
        }
        internalRender() {
          return u.createElement(
            "vsg-node",
            { style: { display: this.visibility == s.Hidden ? "none" : null } },
            u.createElement(_.tH, null, this.props.children),
          );
        }
      }
      (v.s_bPanelsAreDirty = !1),
        (0, l.Cg)([c.o], v.prototype, "onResizeObserved", null),
        (0, l.Cg)([c.o], v.prototype, "onPanelMouseDown", null),
        (0, l.Cg)([c.o], v.prototype, "onWindowMouseUp", null),
        (0, l.Cg)([c.o], v.prototype, "buildNode", null);
    },
    3725: (e, t, r) => {
      var n, o, i, s;
      function a() {
        var e;
        return null !==
          (e =
            null === VRHTML || void 0 === VRHTML
              ? void 0
              : VRHTML.Environment()) && void 0 !== e
          ? e
          : n.Unknown;
      }
      r.d(t, {
        $Z: () => d,
        Ee: () => C,
        GQ: () => T,
        Gz: () => u,
        HW: () => g,
        MV: () => i,
        NB: () => _,
        OH: () => n,
        R$: () => a,
        Rk: () => m,
        Xl: () => S,
        _1: () => I,
        _E: () => l,
        b: () => b,
        gN: () => w,
        k2: () => P,
        kG: () => E,
        ku: () => h,
        mo: () => f,
        mu: () => s,
        ne: () => p,
        pM: () => o,
        rx: () => M,
      }),
        (function (e) {
          (e[(e.Desktop = 1)] = "Desktop"),
            (e[(e.Overlay = 2)] = "Overlay"),
            (e[(e.Unknown = 100)] = "Unknown");
        })(n || (n = {})),
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
        })(i || (i = {})),
        (function (e) {
          (e[(e.Seated = 0)] = "Seated"),
            (e[(e.Standing = 1)] = "Standing"),
            (e[(e.RawAndUncalibrated = 2)] = "RawAndUncalibrated");
        })(s || (s = {}));
      let l = 0,
        u = 0,
        p = 4294967295;
      var d, c, h, _, m, f, v, g, y, S, b, R, C, k, w, E, O, P, M, x, I, B, T;
      !(function (e) {
        (e[(e.Invalid = 0)] = "Invalid"),
          (e[(e.RecenterCountdown = 1)] = "RecenterCountdown"),
          (e[(e.FloorAdjustExisting = 2)] = "FloorAdjustExisting"),
          (e[(e.RoomSetupFloor = 3)] = "RoomSetupFloor"),
          (e[(e.ClearRoomSetup = 4)] = "ClearRoomSetup");
      })(d || (d = {})),
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
        })(c || (c = {})),
        (function (e) {
          (e[(e.Activated = 0)] = "Activated"),
            (e[(e.Deactivated = 1)] = "Deactivated");
        })(h || (h = {})),
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
        })(_ || (_ = {})),
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
        })(f || (f = {})),
        (function (e) {
          (e[(e.Unknown = 0)] = "Unknown"),
            (e[(e.NVIDIA = 1)] = "NVIDIA"),
            (e[(e.AMD = 2)] = "AMD");
        })(v || (v = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Starting = 1)] = "Starting"),
            (e[(e.Quitting = 2)] = "Quitting"),
            (e[(e.Running = 3)] = "Running"),
            (e[(e.Waiting = 4)] = "Waiting");
        })(g || (g = {})),
        (function (e) {
          (e[(e.ButtonPress_0 = 0)] = "ButtonPress_0"),
            (e[(e.ButtonPress_1 = 1)] = "ButtonPress_1"),
            (e[(e.ButtonPress_2 = 2)] = "ButtonPress_2"),
            (e[(e.ButtonPress_3 = 3)] = "ButtonPress_3"),
            (e[(e.CouldntFindSystemOverlay = 4)] = "CouldntFindSystemOverlay"),
            (e[(e.CouldntFindOrCreateClientOverlay = 5)] =
              "CouldntFindOrCreateClientOverlay"),
            (e[(e.ApplicationQuit = 6)] = "ApplicationQuit");
        })(y || (y = {})),
        (function (e) {
          (e[(e.Normal = 0)] = "Normal"),
            (e[(e.Password = 1)] = "Password"),
            (e[(e.Submit = 2)] = "Submit");
        })(S || (S = {})),
        (function (e) {
          (e[(e.SingleLine = 0)] = "SingleLine"),
            (e[(e.MultipleLines = 1)] = "MultipleLines");
        })(b || (b = {})),
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
          (e[(e.ECameraExposure_Unknown = 0)] = "ECameraExposure_Unknown"),
            (e[(e.ECameraExposure_Nominal = 1)] = "ECameraExposure_Nominal"),
            (e[(e.ECameraExposure_HighExposure = 2)] =
              "ECameraExposure_HighExposure");
        })(k || (k = {})),
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.ThisSteamVR = 1)] = "ThisSteamVR"),
            (e[(e.AnotherSteamVR = 2)] = "AnotherSteamVR"),
            (e[(e.AnotherRuntime = 3)] = "AnotherRuntime"),
            (e[(e.Error = -1)] = "Error");
        })(w || (w = {})),
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
        })(E || (E = {})),
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
        })(O || (O = {})),
        (function (e) {
          e[(e.Hostname = 0)] = "Hostname";
        })(P || (P = {})),
        (function (e) {
          (e[(e.Unavailable = 0)] = "Unavailable"),
            (e[(e.Active = 1)] = "Active"),
            (e[(e.Off = 2)] = "Off");
        })(M || (M = {})),
        (function (e) {
          (e[(e.Default = 1)] = "Default"), (e[(e.Floor = 2)] = "Floor");
        })(x || (x = {})),
        (function (e) {
          (e[(e.Inactive = 0)] = "Inactive"),
            (e[(e.PendingReset = 1)] = "PendingReset"),
            (e[(e.PendingResetIfNeeded = 2)] = "PendingResetIfNeeded"),
            (e[(e.Default = 3)] = "Default"),
            (e[(e.CV = 4)] = "CV"),
            (e[(e.Manual = 5)] = "Manual");
        })(I || (I = {})),
        (function (e) {
          (e[(e.OK = 1)] = "OK"),
            (e[(e.Warning = 100)] = "Warning"),
            (e[(e.Warning_BaseStationMayHaveMoved = 101)] =
              "Warning_BaseStationMayHaveMoved"),
            (e[(e.Warning_BaseStationRemoved = 102)] =
              "Warning_BaseStationRemoved"),
            (e[(e.Warning_SeatedBoundsInvalid = 103)] =
              "Warning_SeatedBoundsInvalid"),
            (e[(e.Error = 200)] = "Error"),
            (e[(e.Error_BaseStationUninitialized = 201)] =
              "Error_BaseStationUninitialized"),
            (e[(e.Error_BaseStationConflict = 202)] =
              "Error_BaseStationConflict"),
            (e[(e.Error_PlayAreaInvalid = 203)] = "Error_PlayAreaInvalid"),
            (e[(e.Error_CollisionBoundsInvalid = 204)] =
              "Error_CollisionBoundsInvalid");
        })(B || (B = {})),
        (function (e) {
          (e[(e.Small = 0)] = "Small"),
            (e[(e.Medium = 1)] = "Medium"),
            (e[(e.Large = 2)] = "Large"),
            (e[(e.Gigantic = 3)] = "Gigantic"),
            (e[(e.Standing = 4)] = "Standing");
        })(T || (T = {}));
    },
  },
]); //# sourceMappingURL=file:///home/buildbot/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/chunk~9b020ce54.js.map
