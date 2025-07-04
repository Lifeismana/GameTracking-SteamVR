var CLSTAMP = "9839182";
(self.webpackChunkvrwebui = self.webpackChunkvrwebui || []).push([
  [299],
  {
    5592: (e, t, r) => {
      "use strict";
      var n = r(9516),
        o = r(7522),
        i = r(3948),
        s = r(9106),
        a = r(9615),
        u = r(2012),
        c = r(4202),
        f = r(4896),
        l = r(5845),
        p = r(8563),
        d = r(5656);
      e.exports = function (e) {
        return new Promise(function (t, r) {
          var h,
            m = e.data,
            v = e.headers,
            y = e.responseType;
          function g() {
            e.cancelToken && e.cancelToken.unsubscribe(h),
              e.signal && e.signal.removeEventListener("abort", h);
          }
          n.isFormData(m) &&
            n.isStandardBrowserEnv() &&
            delete v["Content-Type"];
          var E = new XMLHttpRequest();
          if (e.auth) {
            var b = e.auth.username || "",
              w = e.auth.password
                ? unescape(encodeURIComponent(e.auth.password))
                : "";
            v.Authorization = "Basic " + btoa(b + ":" + w);
          }
          var O = a(e.baseURL, e.url);
          function R() {
            if (E) {
              var n =
                  "getAllResponseHeaders" in E
                    ? u(E.getAllResponseHeaders())
                    : null,
                i = {
                  data:
                    y && "text" !== y && "json" !== y
                      ? E.response
                      : E.responseText,
                  status: E.status,
                  statusText: E.statusText,
                  headers: n,
                  config: e,
                  request: E,
                };
              o(
                function (e) {
                  t(e), g();
                },
                function (e) {
                  r(e), g();
                },
                i,
              ),
                (E = null);
            }
          }
          if (
            (E.open(
              e.method.toUpperCase(),
              s(O, e.params, e.paramsSerializer),
              !0,
            ),
            (E.timeout = e.timeout),
            "onloadend" in E
              ? (E.onloadend = R)
              : (E.onreadystatechange = function () {
                  E &&
                    4 === E.readyState &&
                    (0 !== E.status ||
                      (E.responseURL &&
                        0 === E.responseURL.indexOf("file:"))) &&
                    setTimeout(R);
                }),
            (E.onabort = function () {
              E &&
                (r(new l("Request aborted", l.ECONNABORTED, e, E)), (E = null));
            }),
            (E.onerror = function () {
              r(new l("Network Error", l.ERR_NETWORK, e, E, E)), (E = null);
            }),
            (E.ontimeout = function () {
              var t = e.timeout
                  ? "timeout of " + e.timeout + "ms exceeded"
                  : "timeout exceeded",
                n = e.transitional || f;
              e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                r(
                  new l(
                    t,
                    n.clarifyTimeoutError ? l.ETIMEDOUT : l.ECONNABORTED,
                    e,
                    E,
                  ),
                ),
                (E = null);
            }),
            n.isStandardBrowserEnv())
          ) {
            var x =
              (e.withCredentials || c(O)) && e.xsrfCookieName
                ? i.read(e.xsrfCookieName)
                : void 0;
            x && (v[e.xsrfHeaderName] = x);
          }
          "setRequestHeader" in E &&
            n.forEach(v, function (e, t) {
              void 0 === m && "content-type" === t.toLowerCase()
                ? delete v[t]
                : E.setRequestHeader(t, e);
            }),
            n.isUndefined(e.withCredentials) ||
              (E.withCredentials = !!e.withCredentials),
            y && "json" !== y && (E.responseType = e.responseType),
            "function" == typeof e.onDownloadProgress &&
              E.addEventListener("progress", e.onDownloadProgress),
            "function" == typeof e.onUploadProgress &&
              E.upload &&
              E.upload.addEventListener("progress", e.onUploadProgress),
            (e.cancelToken || e.signal) &&
              ((h = function (e) {
                E &&
                  (r(!e || (e && e.type) ? new p() : e), E.abort(), (E = null));
              }),
              e.cancelToken && e.cancelToken.subscribe(h),
              e.signal &&
                (e.signal.aborted
                  ? h()
                  : e.signal.addEventListener("abort", h))),
            m || (m = null);
          var A = d(O);
          A && -1 === ["http", "https", "file"].indexOf(A)
            ? r(new l("Unsupported protocol " + A + ":", l.ERR_BAD_REQUEST, e))
            : E.send(m);
        });
      };
    },
    8015: (e, t, r) => {
      "use strict";
      var n = r(9516),
        o = r(9012),
        i = r(5155),
        s = r(5343);
      var a = (function e(t) {
        var r = new i(t),
          a = o(i.prototype.request, r);
        return (
          n.extend(a, i.prototype, r),
          n.extend(a, r),
          (a.create = function (r) {
            return e(s(t, r));
          }),
          a
        );
      })(r(7412));
      (a.Axios = i),
        (a.CanceledError = r(8563)),
        (a.CancelToken = r(3191)),
        (a.isCancel = r(3864)),
        (a.VERSION = r(9641).version),
        (a.toFormData = r(6440)),
        (a.AxiosError = r(5845)),
        (a.Cancel = a.CanceledError),
        (a.all = function (e) {
          return Promise.all(e);
        }),
        (a.spread = r(7980)),
        (a.isAxiosError = r(5019)),
        (e.exports = a),
        (e.exports.default = a);
    },
    3191: (e, t, r) => {
      "use strict";
      var n = r(8563);
      function o(e) {
        if ("function" != typeof e)
          throw new TypeError("executor must be a function.");
        var t;
        this.promise = new Promise(function (e) {
          t = e;
        });
        var r = this;
        this.promise.then(function (e) {
          if (r._listeners) {
            var t,
              n = r._listeners.length;
            for (t = 0; t < n; t++) r._listeners[t](e);
            r._listeners = null;
          }
        }),
          (this.promise.then = function (e) {
            var t,
              n = new Promise(function (e) {
                r.subscribe(e), (t = e);
              }).then(e);
            return (
              (n.cancel = function () {
                r.unsubscribe(t);
              }),
              n
            );
          }),
          e(function (e) {
            r.reason || ((r.reason = new n(e)), t(r.reason));
          });
      }
      (o.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason;
      }),
        (o.prototype.subscribe = function (e) {
          this.reason
            ? e(this.reason)
            : this._listeners
              ? this._listeners.push(e)
              : (this._listeners = [e]);
        }),
        (o.prototype.unsubscribe = function (e) {
          if (this._listeners) {
            var t = this._listeners.indexOf(e);
            -1 !== t && this._listeners.splice(t, 1);
          }
        }),
        (o.source = function () {
          var e;
          return {
            token: new o(function (t) {
              e = t;
            }),
            cancel: e,
          };
        }),
        (e.exports = o);
    },
    8563: (e, t, r) => {
      "use strict";
      var n = r(5845);
      function o(e) {
        n.call(this, null == e ? "canceled" : e, n.ERR_CANCELED),
          (this.name = "CanceledError");
      }
      r(9516).inherits(o, n, { __CANCEL__: !0 }), (e.exports = o);
    },
    3864: (e) => {
      "use strict";
      e.exports = function (e) {
        return !(!e || !e.__CANCEL__);
      };
    },
    5155: (e, t, r) => {
      "use strict";
      var n = r(9516),
        o = r(9106),
        i = r(3471),
        s = r(4490),
        a = r(5343),
        u = r(9615),
        c = r(4841),
        f = c.validators;
      function l(e) {
        (this.defaults = e),
          (this.interceptors = { request: new i(), response: new i() });
      }
      (l.prototype.request = function (e, t) {
        "string" == typeof e ? ((t = t || {}).url = e) : (t = e || {}),
          (t = a(this.defaults, t)).method
            ? (t.method = t.method.toLowerCase())
            : this.defaults.method
              ? (t.method = this.defaults.method.toLowerCase())
              : (t.method = "get");
        var r = t.transitional;
        void 0 !== r &&
          c.assertOptions(
            r,
            {
              silentJSONParsing: f.transitional(f.boolean),
              forcedJSONParsing: f.transitional(f.boolean),
              clarifyTimeoutError: f.transitional(f.boolean),
            },
            !1,
          );
        var n = [],
          o = !0;
        this.interceptors.request.forEach(function (e) {
          ("function" == typeof e.runWhen && !1 === e.runWhen(t)) ||
            ((o = o && e.synchronous), n.unshift(e.fulfilled, e.rejected));
        });
        var i,
          u = [];
        if (
          (this.interceptors.response.forEach(function (e) {
            u.push(e.fulfilled, e.rejected);
          }),
          !o)
        ) {
          var l = [s, void 0];
          for (
            Array.prototype.unshift.apply(l, n),
              l = l.concat(u),
              i = Promise.resolve(t);
            l.length;
          )
            i = i.then(l.shift(), l.shift());
          return i;
        }
        for (var p = t; n.length; ) {
          var d = n.shift(),
            h = n.shift();
          try {
            p = d(p);
          } catch (e) {
            h(e);
            break;
          }
        }
        try {
          i = s(p);
        } catch (e) {
          return Promise.reject(e);
        }
        for (; u.length; ) i = i.then(u.shift(), u.shift());
        return i;
      }),
        (l.prototype.getUri = function (e) {
          e = a(this.defaults, e);
          var t = u(e.baseURL, e.url);
          return o(t, e.params, e.paramsSerializer);
        }),
        n.forEach(["delete", "get", "head", "options"], function (e) {
          l.prototype[e] = function (t, r) {
            return this.request(
              a(r || {}, { method: e, url: t, data: (r || {}).data }),
            );
          };
        }),
        n.forEach(["post", "put", "patch"], function (e) {
          function t(t) {
            return function (r, n, o) {
              return this.request(
                a(o || {}, {
                  method: e,
                  headers: t ? { "Content-Type": "multipart/form-data" } : {},
                  url: r,
                  data: n,
                }),
              );
            };
          }
          (l.prototype[e] = t()), (l.prototype[e + "Form"] = t(!0));
        }),
        (e.exports = l);
    },
    5845: (e, t, r) => {
      "use strict";
      var n = r(9516);
      function o(e, t, r, n, o) {
        Error.call(this),
          (this.message = e),
          (this.name = "AxiosError"),
          t && (this.code = t),
          r && (this.config = r),
          n && (this.request = n),
          o && (this.response = o);
      }
      n.inherits(o, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
            status:
              this.response && this.response.status
                ? this.response.status
                : null,
          };
        },
      });
      var i = o.prototype,
        s = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
      ].forEach(function (e) {
        s[e] = { value: e };
      }),
        Object.defineProperties(o, s),
        Object.defineProperty(i, "isAxiosError", { value: !0 }),
        (o.from = function (e, t, r, s, a, u) {
          var c = Object.create(i);
          return (
            n.toFlatObject(e, c, function (e) {
              return e !== Error.prototype;
            }),
            o.call(c, e.message, t, r, s, a),
            (c.name = e.name),
            u && Object.assign(c, u),
            c
          );
        }),
        (e.exports = o);
    },
    3471: (e, t, r) => {
      "use strict";
      var n = r(9516);
      function o() {
        this.handlers = [];
      }
      (o.prototype.use = function (e, t, r) {
        return (
          this.handlers.push({
            fulfilled: e,
            rejected: t,
            synchronous: !!r && r.synchronous,
            runWhen: r ? r.runWhen : null,
          }),
          this.handlers.length - 1
        );
      }),
        (o.prototype.eject = function (e) {
          this.handlers[e] && (this.handlers[e] = null);
        }),
        (o.prototype.forEach = function (e) {
          n.forEach(this.handlers, function (t) {
            null !== t && e(t);
          });
        }),
        (e.exports = o);
    },
    9615: (e, t, r) => {
      "use strict";
      var n = r(9137),
        o = r(4680);
      e.exports = function (e, t) {
        return e && !n(t) ? o(e, t) : t;
      };
    },
    4490: (e, t, r) => {
      "use strict";
      var n = r(9516),
        o = r(2881),
        i = r(3864),
        s = r(7412),
        a = r(8563);
      function u(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        )
          throw new a();
      }
      e.exports = function (e) {
        return (
          u(e),
          (e.headers = e.headers || {}),
          (e.data = o.call(e, e.data, e.headers, e.transformRequest)),
          (e.headers = n.merge(
            e.headers.common || {},
            e.headers[e.method] || {},
            e.headers,
          )),
          n.forEach(
            ["delete", "get", "head", "post", "put", "patch", "common"],
            function (t) {
              delete e.headers[t];
            },
          ),
          (e.adapter || s.adapter)(e).then(
            function (t) {
              return (
                u(e),
                (t.data = o.call(e, t.data, t.headers, e.transformResponse)),
                t
              );
            },
            function (t) {
              return (
                i(t) ||
                  (u(e),
                  t &&
                    t.response &&
                    (t.response.data = o.call(
                      e,
                      t.response.data,
                      t.response.headers,
                      e.transformResponse,
                    ))),
                Promise.reject(t)
              );
            },
          )
        );
      };
    },
    5343: (e, t, r) => {
      "use strict";
      var n = r(9516);
      e.exports = function (e, t) {
        t = t || {};
        var r = {};
        function o(e, t) {
          return n.isPlainObject(e) && n.isPlainObject(t)
            ? n.merge(e, t)
            : n.isPlainObject(t)
              ? n.merge({}, t)
              : n.isArray(t)
                ? t.slice()
                : t;
        }
        function i(r) {
          return n.isUndefined(t[r])
            ? n.isUndefined(e[r])
              ? void 0
              : o(void 0, e[r])
            : o(e[r], t[r]);
        }
        function s(e) {
          if (!n.isUndefined(t[e])) return o(void 0, t[e]);
        }
        function a(r) {
          return n.isUndefined(t[r])
            ? n.isUndefined(e[r])
              ? void 0
              : o(void 0, e[r])
            : o(void 0, t[r]);
        }
        function u(r) {
          return r in t ? o(e[r], t[r]) : r in e ? o(void 0, e[r]) : void 0;
        }
        var c = {
          url: s,
          method: s,
          data: s,
          baseURL: a,
          transformRequest: a,
          transformResponse: a,
          paramsSerializer: a,
          timeout: a,
          timeoutMessage: a,
          withCredentials: a,
          adapter: a,
          responseType: a,
          xsrfCookieName: a,
          xsrfHeaderName: a,
          onUploadProgress: a,
          onDownloadProgress: a,
          decompress: a,
          maxContentLength: a,
          maxBodyLength: a,
          beforeRedirect: a,
          transport: a,
          httpAgent: a,
          httpsAgent: a,
          cancelToken: a,
          socketPath: a,
          responseEncoding: a,
          validateStatus: u,
        };
        return (
          n.forEach(Object.keys(e).concat(Object.keys(t)), function (e) {
            var t = c[e] || i,
              o = t(e);
            (n.isUndefined(o) && t !== u) || (r[e] = o);
          }),
          r
        );
      };
    },
    7522: (e, t, r) => {
      "use strict";
      var n = r(5845);
      e.exports = function (e, t, r) {
        var o = r.config.validateStatus;
        r.status && o && !o(r.status)
          ? t(
              new n(
                "Request failed with status code " + r.status,
                [n.ERR_BAD_REQUEST, n.ERR_BAD_RESPONSE][
                  Math.floor(r.status / 100) - 4
                ],
                r.config,
                r.request,
                r,
              ),
            )
          : e(r);
      };
    },
    2881: (e, t, r) => {
      "use strict";
      var n = r(9516),
        o = r(7412);
      e.exports = function (e, t, r) {
        var i = this || o;
        return (
          n.forEach(r, function (r) {
            e = r.call(i, e, t);
          }),
          e
        );
      };
    },
    7412: (e, t, r) => {
      "use strict";
      var n = r(9516),
        o = r(7018),
        i = r(5845),
        s = r(4896),
        a = r(6440),
        u = { "Content-Type": "application/x-www-form-urlencoded" };
      function c(e, t) {
        !n.isUndefined(e) &&
          n.isUndefined(e["Content-Type"]) &&
          (e["Content-Type"] = t);
      }
      var f,
        l = {
          transitional: s,
          adapter:
            (("undefined" != typeof XMLHttpRequest ||
              ("undefined" != typeof process &&
                "[object process]" ===
                  Object.prototype.toString.call(process))) &&
              (f = r(5592)),
            f),
          transformRequest: [
            function (e, t) {
              if (
                (o(t, "Accept"),
                o(t, "Content-Type"),
                n.isFormData(e) ||
                  n.isArrayBuffer(e) ||
                  n.isBuffer(e) ||
                  n.isStream(e) ||
                  n.isFile(e) ||
                  n.isBlob(e))
              )
                return e;
              if (n.isArrayBufferView(e)) return e.buffer;
              if (n.isURLSearchParams(e))
                return (
                  c(t, "application/x-www-form-urlencoded;charset=utf-8"),
                  e.toString()
                );
              var r,
                i = n.isObject(e),
                s = t && t["Content-Type"];
              if ((r = n.isFileList(e)) || (i && "multipart/form-data" === s)) {
                var u = this.env && this.env.FormData;
                return a(r ? { "files[]": e } : e, u && new u());
              }
              return i || "application/json" === s
                ? (c(t, "application/json"),
                  (function (e, t, r) {
                    if (n.isString(e))
                      try {
                        return (t || JSON.parse)(e), n.trim(e);
                      } catch (e) {
                        if ("SyntaxError" !== e.name) throw e;
                      }
                    return (r || JSON.stringify)(e);
                  })(e))
                : e;
            },
          ],
          transformResponse: [
            function (e) {
              var t = this.transitional || l.transitional,
                r = t && t.silentJSONParsing,
                o = t && t.forcedJSONParsing,
                s = !r && "json" === this.responseType;
              if (s || (o && n.isString(e) && e.length))
                try {
                  return JSON.parse(e);
                } catch (e) {
                  if (s) {
                    if ("SyntaxError" === e.name)
                      throw i.from(
                        e,
                        i.ERR_BAD_RESPONSE,
                        this,
                        null,
                        this.response,
                      );
                    throw e;
                  }
                }
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          env: { FormData: r(1534) },
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
          headers: { common: { Accept: "application/json, text/plain, */*" } },
        };
      n.forEach(["delete", "get", "head"], function (e) {
        l.headers[e] = {};
      }),
        n.forEach(["post", "put", "patch"], function (e) {
          l.headers[e] = n.merge(u);
        }),
        (e.exports = l);
    },
    4896: (e) => {
      "use strict";
      e.exports = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
      };
    },
    9641: (e) => {
      e.exports = { version: "0.27.2" };
    },
    9012: (e) => {
      "use strict";
      e.exports = function (e, t) {
        return function () {
          for (var r = new Array(arguments.length), n = 0; n < r.length; n++)
            r[n] = arguments[n];
          return e.apply(t, r);
        };
      };
    },
    9106: (e, t, r) => {
      "use strict";
      var n = r(9516);
      function o(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      e.exports = function (e, t, r) {
        if (!t) return e;
        var i;
        if (r) i = r(t);
        else if (n.isURLSearchParams(t)) i = t.toString();
        else {
          var s = [];
          n.forEach(t, function (e, t) {
            null != e &&
              (n.isArray(e) ? (t += "[]") : (e = [e]),
              n.forEach(e, function (e) {
                n.isDate(e)
                  ? (e = e.toISOString())
                  : n.isObject(e) && (e = JSON.stringify(e)),
                  s.push(o(t) + "=" + o(e));
              }));
          }),
            (i = s.join("&"));
        }
        if (i) {
          var a = e.indexOf("#");
          -1 !== a && (e = e.slice(0, a)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + i);
        }
        return e;
      };
    },
    4680: (e) => {
      "use strict";
      e.exports = function (e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
      };
    },
    3948: (e, t, r) => {
      "use strict";
      var n = r(9516);
      e.exports = n.isStandardBrowserEnv()
        ? {
            write: function (e, t, r, o, i, s) {
              var a = [];
              a.push(e + "=" + encodeURIComponent(t)),
                n.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()),
                n.isString(o) && a.push("path=" + o),
                n.isString(i) && a.push("domain=" + i),
                !0 === s && a.push("secure"),
                (document.cookie = a.join("; "));
            },
            read: function (e) {
              var t = document.cookie.match(
                new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"),
              );
              return t ? decodeURIComponent(t[3]) : null;
            },
            remove: function (e) {
              this.write(e, "", Date.now() - 864e5);
            },
          }
        : {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
    },
    9137: (e) => {
      "use strict";
      e.exports = function (e) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
      };
    },
    5019: (e, t, r) => {
      "use strict";
      var n = r(9516);
      e.exports = function (e) {
        return n.isObject(e) && !0 === e.isAxiosError;
      };
    },
    4202: (e, t, r) => {
      "use strict";
      var n = r(9516);
      e.exports = n.isStandardBrowserEnv()
        ? (function () {
            var e,
              t = /(msie|trident)/i.test(navigator.userAgent),
              r = document.createElement("a");
            function o(e) {
              var n = e;
              return (
                t && (r.setAttribute("href", n), (n = r.href)),
                r.setAttribute("href", n),
                {
                  href: r.href,
                  protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                  host: r.host,
                  search: r.search ? r.search.replace(/^\?/, "") : "",
                  hash: r.hash ? r.hash.replace(/^#/, "") : "",
                  hostname: r.hostname,
                  port: r.port,
                  pathname:
                    "/" === r.pathname.charAt(0)
                      ? r.pathname
                      : "/" + r.pathname,
                }
              );
            }
            return (
              (e = o(window.location.href)),
              function (t) {
                var r = n.isString(t) ? o(t) : t;
                return r.protocol === e.protocol && r.host === e.host;
              }
            );
          })()
        : function () {
            return !0;
          };
    },
    7018: (e, t, r) => {
      "use strict";
      var n = r(9516);
      e.exports = function (e, t) {
        n.forEach(e, function (r, n) {
          n !== t &&
            n.toUpperCase() === t.toUpperCase() &&
            ((e[t] = r), delete e[n]);
        });
      };
    },
    1534: (e) => {
      e.exports = null;
    },
    2012: (e, t, r) => {
      "use strict";
      var n = r(9516),
        o = [
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ];
      e.exports = function (e) {
        var t,
          r,
          i,
          s = {};
        return e
          ? (n.forEach(e.split("\n"), function (e) {
              if (
                ((i = e.indexOf(":")),
                (t = n.trim(e.substr(0, i)).toLowerCase()),
                (r = n.trim(e.substr(i + 1))),
                t)
              ) {
                if (s[t] && o.indexOf(t) >= 0) return;
                s[t] =
                  "set-cookie" === t
                    ? (s[t] ? s[t] : []).concat([r])
                    : s[t]
                      ? s[t] + ", " + r
                      : r;
              }
            }),
            s)
          : s;
      };
    },
    5656: (e) => {
      "use strict";
      e.exports = function (e) {
        var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
        return (t && t[1]) || "";
      };
    },
    7980: (e) => {
      "use strict";
      e.exports = function (e) {
        return function (t) {
          return e.apply(null, t);
        };
      };
    },
    6440: (e, t, r) => {
      "use strict";
      var n = r(9516);
      e.exports = function (e, t) {
        t = t || new FormData();
        var r = [];
        function o(e) {
          return null === e
            ? ""
            : n.isDate(e)
              ? e.toISOString()
              : n.isArrayBuffer(e) || n.isTypedArray(e)
                ? "function" == typeof Blob
                  ? new Blob([e])
                  : Buffer.from(e)
                : e;
        }
        return (
          (function e(i, s) {
            if (n.isPlainObject(i) || n.isArray(i)) {
              if (-1 !== r.indexOf(i))
                throw Error("Circular reference detected in " + s);
              r.push(i),
                n.forEach(i, function (r, i) {
                  if (!n.isUndefined(r)) {
                    var a,
                      u = s ? s + "." + i : i;
                    if (r && !s && "object" == typeof r)
                      if (n.endsWith(i, "{}")) r = JSON.stringify(r);
                      else if (n.endsWith(i, "[]") && (a = n.toArray(r)))
                        return void a.forEach(function (e) {
                          !n.isUndefined(e) && t.append(u, o(e));
                        });
                    e(r, u);
                  }
                }),
                r.pop();
            } else t.append(s, o(i));
          })(e),
          t
        );
      };
    },
    4841: (e, t, r) => {
      "use strict";
      var n = r(9641).version,
        o = r(5845),
        i = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        function (e, t) {
          i[e] = function (r) {
            return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
          };
        },
      );
      var s = {};
      (i.transitional = function (e, t, r) {
        function i(e, t) {
          return (
            "[Axios v" +
            n +
            "] Transitional option '" +
            e +
            "'" +
            t +
            (r ? ". " + r : "")
          );
        }
        return function (r, n, a) {
          if (!1 === e)
            throw new o(
              i(n, " has been removed" + (t ? " in " + t : "")),
              o.ERR_DEPRECATED,
            );
          return (
            t &&
              !s[n] &&
              ((s[n] = !0),
              console.warn(
                i(
                  n,
                  " has been deprecated since v" +
                    t +
                    " and will be removed in the near future",
                ),
              )),
            !e || e(r, n, a)
          );
        };
      }),
        (e.exports = {
          assertOptions: function (e, t, r) {
            if ("object" != typeof e)
              throw new o("options must be an object", o.ERR_BAD_OPTION_VALUE);
            for (var n = Object.keys(e), i = n.length; i-- > 0; ) {
              var s = n[i],
                a = t[s];
              if (a) {
                var u = e[s],
                  c = void 0 === u || a(u, s, e);
                if (!0 !== c)
                  throw new o(
                    "option " + s + " must be " + c,
                    o.ERR_BAD_OPTION_VALUE,
                  );
              } else if (!0 !== r)
                throw new o("Unknown option " + s, o.ERR_BAD_OPTION);
            }
          },
          validators: i,
        });
    },
    9516: (e, t, r) => {
      "use strict";
      var n,
        o = r(9012),
        i = Object.prototype.toString,
        s =
          ((n = Object.create(null)),
          function (e) {
            var t = i.call(e);
            return n[t] || (n[t] = t.slice(8, -1).toLowerCase());
          });
      function a(e) {
        return (
          (e = e.toLowerCase()),
          function (t) {
            return s(t) === e;
          }
        );
      }
      function u(e) {
        return Array.isArray(e);
      }
      function c(e) {
        return void 0 === e;
      }
      var f = a("ArrayBuffer");
      function l(e) {
        return null !== e && "object" == typeof e;
      }
      function p(e) {
        if ("object" !== s(e)) return !1;
        var t = Object.getPrototypeOf(e);
        return null === t || t === Object.prototype;
      }
      var d = a("Date"),
        h = a("File"),
        m = a("Blob"),
        v = a("FileList");
      function y(e) {
        return "[object Function]" === i.call(e);
      }
      var g = a("URLSearchParams");
      function E(e, t) {
        if (null != e)
          if (("object" != typeof e && (e = [e]), u(e)))
            for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
          else
            for (var o in e)
              Object.prototype.hasOwnProperty.call(e, o) &&
                t.call(null, e[o], o, e);
      }
      var b,
        w =
          ((b =
            "undefined" != typeof Uint8Array &&
            Object.getPrototypeOf(Uint8Array)),
          function (e) {
            return b && e instanceof b;
          });
      e.exports = {
        isArray: u,
        isArrayBuffer: f,
        isBuffer: function (e) {
          return (
            null !== e &&
            !c(e) &&
            null !== e.constructor &&
            !c(e.constructor) &&
            "function" == typeof e.constructor.isBuffer &&
            e.constructor.isBuffer(e)
          );
        },
        isFormData: function (e) {
          var t = "[object FormData]";
          return (
            e &&
            (("function" == typeof FormData && e instanceof FormData) ||
              i.call(e) === t ||
              (y(e.toString) && e.toString() === t))
          );
        },
        isArrayBufferView: function (e) {
          return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : e && e.buffer && f(e.buffer);
        },
        isString: function (e) {
          return "string" == typeof e;
        },
        isNumber: function (e) {
          return "number" == typeof e;
        },
        isObject: l,
        isPlainObject: p,
        isUndefined: c,
        isDate: d,
        isFile: h,
        isBlob: m,
        isFunction: y,
        isStream: function (e) {
          return l(e) && y(e.pipe);
        },
        isURLSearchParams: g,
        isStandardBrowserEnv: function () {
          return (
            ("undefined" == typeof navigator ||
              ("ReactNative" !== navigator.product &&
                "NativeScript" !== navigator.product &&
                "NS" !== navigator.product)) &&
            "undefined" != typeof window &&
            "undefined" != typeof document
          );
        },
        forEach: E,
        merge: function e() {
          var t = {};
          function r(r, n) {
            p(t[n]) && p(r)
              ? (t[n] = e(t[n], r))
              : p(r)
                ? (t[n] = e({}, r))
                : u(r)
                  ? (t[n] = r.slice())
                  : (t[n] = r);
          }
          for (var n = 0, o = arguments.length; n < o; n++) E(arguments[n], r);
          return t;
        },
        extend: function (e, t, r) {
          return (
            E(t, function (t, n) {
              e[n] = r && "function" == typeof t ? o(t, r) : t;
            }),
            e
          );
        },
        trim: function (e) {
          return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
        },
        stripBOM: function (e) {
          return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
        },
        inherits: function (e, t, r, n) {
          (e.prototype = Object.create(t.prototype, n)),
            (e.prototype.constructor = e),
            r && Object.assign(e.prototype, r);
        },
        toFlatObject: function (e, t, r) {
          var n,
            o,
            i,
            s = {};
          t = t || {};
          do {
            for (o = (n = Object.getOwnPropertyNames(e)).length; o-- > 0; )
              s[(i = n[o])] || ((t[i] = e[i]), (s[i] = !0));
            e = Object.getPrototypeOf(e);
          } while (e && (!r || r(e, t)) && e !== Object.prototype);
          return t;
        },
        kindOf: s,
        kindOfTest: a,
        endsWith: function (e, t, r) {
          (e = String(e)),
            (void 0 === r || r > e.length) && (r = e.length),
            (r -= t.length);
          var n = e.indexOf(t, r);
          return -1 !== n && n === r;
        },
        toArray: function (e) {
          if (!e) return null;
          var t = e.length;
          if (c(t)) return null;
          for (var r = new Array(t); t-- > 0; ) r[t] = e[t];
          return r;
        },
        isTypedArray: w,
        isFileList: v,
      };
    },
  },
]); //# sourceMappingURL=file:///c:/buildslave/steamvr_rel_npm_vrwebui/build/public/runtime/resources/webinterface/dashboard/sourcemaps/libraries/libraries~524ee2899.js.map
